const axios = require("axios");
const { Agent } = require("https");
const httpsAgent = new Agent({
  rejectUnauthorized: false
})

const inst = axios.create({
  baseURL: 'https://hw.shri.yandex/api',
  timeout: 1000,
  headers: {'Authorization': `Bearer ${process.env.TOKEN}`},
  httpsAgent
});

console.log(process.env.TOKEN);

module.exports.getSetting = async (req, res) => {
  const result = await inst.get("/conf");

  console.log("jopa", result.data);
  res.send("settings");
};

module.exports.getBuilds = (req, res) => {
  res.send("builds");
}

module.exports.getBuildId = (req, res) => {
  res.send(`${req.params.buildId}`);
};

module.exports.getLogs = (req, res) =>{
  res.send(`${req.url}`);
};

module.exports.postSetting = (req, res) => {
  res.send("POST Setting");
}

module.exports.postCommitHash = (req, res) => {
  res.send(`${req.params.commitHash}`)
}