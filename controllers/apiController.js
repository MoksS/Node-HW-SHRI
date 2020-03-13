const axios = require("axios");
const { Agent } = require("https");
const httpsAgent = new Agent({
  rejectUnauthorized: false
})

const inst = axios.create({
  baseURL: 'https://hw.shri.yandex/api',
  timeout: 1000,
  headers: { 'Authorization': `Bearer ${process.env.TOKEN}` },
  httpsAgent
});

module.exports.getSetting = async (req, res) => {
  const result = await inst.get("/conf");

  console.log("jopa", result.data);
  res.status(200).json({
    status: result.status,
    statusText: result.statusText,
    data: result.data
  });
};

module.exports.getBuilds = (req, res) => {
  res.send("builds");
}

module.exports.getBuildId = (req, res) => {
  res.send(`${req.params.buildId}`);
};

module.exports.getLogs = (req, res) => {
  res.send(`${req.url}`);
};

module.exports.postSetting = async (req, res) => {
  try {
    const del = await inst.delete("/conf");
    console.log("delete", del.config.baseURL + del.config.url, del.status, del.statusText, del.data);
    const setConf = await inst.post("/conf",
      {
        repoName: req.body.repoName,
        buildCommand: req.body.buildCommand,
        mainBranch: req.body.mainBranch,
        period: req.body.period
      });

    console.log("POST", setConf.config.baseURL + setConf.config.url, setConf.status, setConf.statusText, setConf.data);

    return res.json({
      status: setConf.status,
      statusText: setConf.statusText,
      data: "Success"
    });
  } catch (error) {
    console.log(error);

    return res.status(404).json({
      status: 404,
      data: "Error",
      error
    });
  }
}

module.exports.postCommitHash = (req, res) => {
  res.send(`${req.params.commitHash}`)
}