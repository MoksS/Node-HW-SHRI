const axios = require("axios");
const { Agent } = require("https");
require("./env");

const httpsAgent = new Agent({
  rejectUnauthorized: false
});

const inst = axios.create({
  baseURL: `http://localhost:3000/api/${process.env.TOKEN}`,
  timeout: 3000,
  httpsAgent
});

module.exports = inst;
