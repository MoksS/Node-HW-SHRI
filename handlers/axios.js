const axios = require("axios");
const { Agent } = require("https");

const httpsAgent = new Agent({
  rejectUnauthorized: false
});

const inst = axios.create({
  baseURL: "https://hw.shri.yandex/api",
  timeout: 3000,
  headers: { Authorization: `Bearer ${process.env.TOKEN}` },
  httpsAgent
});

module.exports.inst = inst;
