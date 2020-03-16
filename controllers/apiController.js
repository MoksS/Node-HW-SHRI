const { inst } = require("../handlers/axios");
const { Cache } = require("../handlers/cache");
const git = require("../handlers/git");

const cache = new Cache("../cache"); // ../cache, 5000
// первый запуск будет в воскресенье в 3 часа утра, после каждую неделю в это же время
const date = new Date(2020, 2, 29, 3, 0, 0, 0); // Sun Mar 29 2020 03:00:00 GMT+0300 (GMT+03:00)
// const date = Date.now() + 10000;

cache.clearCache(date);

module.exports.getSetting = async (req, res) => {
  try {
    const result = await inst.get("/conf");

    return res.status(200).json({
      data: result.data.data
    });
  } catch (error) {
    return res.status(error.response.status || 404).json({
      data: error.response.statusText || "Bad request"
    });
  }
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
    return res.status(error.response.status || 404).json({
      data: error.response.statusText || "Bad request"
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
    return res.status(error.response.status || 404).json({
      data: error.response.statusText || "Bad request"
    });
  }
};

// 880405db-106a-48c0-9a77-0103e11f9fc7
module.exports.getLogs = async (req, res) => {
  try {
    const readStream = await cache.get(req.params.buildId, res);
    if (readStream) return;

    const log = await inst.get(`/build/log?buildId=${req.params.buildId}`);
    await cache.set(req.params.buildId, JSON.stringify({ data: log.data }));

    return res.status(200).json({
      data: log.data
    });
  } catch (error) {
    return res.status(error.response.status || 404).json({
      data: error.response.statusText || "Bad request"
    });
  }
};
module.exports.postSetting = async (req, res) => {
  const { body } = req;
  try {
    await inst.delete("/conf");

    const clone = await git.clone(body.repoName);
    if (clone !== "ok") {
      return res.status(400).json({
        success: false,
        error: clone
      });
    }

    await inst.post("/conf", {
      repoName: body.repoName,
      buildCommand: body.buildCommand,
      mainBranch: body.mainBranch,
      period: body.period
    });

    process.conf.repoName = body.repoName;
    process.conf.buildCommand = body.buildCommand;
    process.conf.mainBranch = body.mainBranch;
    process.conf.period = body.period;

    const lastCommit = await git.lastCommit();
    process.conf.lastCommitHash = lastCommit.commitHash;

    await inst.post("/build/request", lastCommit);

    if (process.conf.period > 0) {
      clearInterval(process.checkCommit);
      process.checkCommit = setInterval(
        git.checkCommit,
        process.conf.period * 60000 // здесь устанавливается время для авто проверки новых коммитов
        // сейчас стоит раз в минуту (если period 1)
      );
    }

    return res.status(200).json({
      success: true
    });
  } catch (error) {
    return res.status(error.response.status || 404).json({
      data: error.response.statusText || "Bad request"
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
    return res.status(error.response.status || 404).json({
      data: error.response.statusText || "Bad request"
    });
  }
};
