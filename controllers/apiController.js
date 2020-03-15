const axios = require("axios");
const { Agent } = require("https");
const git = require("../handlers/git");

const httpsAgent = new Agent({
  rejectUnauthorized: false
});

const inst = axios.create({
  baseURL: "https://hw.shri.yandex/api",
  timeout: 3000,
  headers: { Authorization: `Bearer ${process.env.TOKEN}` },
  httpsAgent
});

module.exports.getSetting = async (req, res) => {
  const result = await inst.get("/conf");

  res.status(200).json({
    status: result.status,
    statusText: result.statusText,
    data: result.data.data
  });
};

module.exports.getBuilds = async (req, res) => {
  const { query } = req;
  const offset = query.offset || 0;
  const limit = query.limit || 25;
  try {
    const buildList = await inst.get(
      `/build/list?offset=${offset}&limit=${limit}`
    );

    res.status(200).json({
      data: buildList.data.data
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      data: "Error",
      error
    });
  }
};

module.exports.getBuildId = async (req, res) => {
  try {
    const infoBuild = await inst.get(
      `/build/details?buildId=${req.params.buildId}`
    );
    return res.status(200).json({
      data: infoBuild.data.data
    });
  } catch (error) {
    return res.status(404).json({
      data: "bad request"
    });
  }
};

// 8d98d0b8-6576-426a-9631-981844c0edbf
module.exports.getLogs = async (req, res) => {
  try {
    const log = await inst.get(`/build/log?buildId=${req.params.buildId}`);
    return res.status(200).json({
      data: log.data
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      data: "bad request"
    });
  }
};
module.exports.postSetting = async (req, res) => {
  try {
    const clone = await git.clone(req.body.repoName);

    if (clone.startsWith("fatal")) {
      return res.status(404).json({
        data: clone
      });
    }

    await inst.post("/conf", {
      repoName: req.body.repoName,
      buildCommand: req.body.buildCommand,
      mainBranch: req.body.mainBranch,
      period: req.body.period
    });

    return res.status(200).json({
      data: clone
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      data: clone,
      error
    });
  }
};

module.exports.postCommitHash = async (req, res) => {
  try {
    await inst.post("/build/request", {
      commitMessage: req.body.commitMessage,
      commitHash: req.params.commitHash,
      branchName: req.body.branchName,
      authorName: req.body.authorName
    });

    return res.status(200).json({
      data: "Success"
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      data: "Error",
      error
    });
  }
};
