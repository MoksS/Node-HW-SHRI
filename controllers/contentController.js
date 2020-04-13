const pageTemp = require("../handlers/pageTemplate");

const getStartPage = (req, res) => {
  if (process.conf.period !== undefined) {
    return res.redirect("/build");
  }

  const preloadState = {
    setting: "/"
  };

  const html = pageTemp(preloadState);

  return res.status(200).send(html);
};

const getSettings = (req, res) => {
  const preloadState = {
    setting: "/"
  };

  if (process.conf.period !== undefined) {
    preloadState.setting = "/build";
  }

  const html = pageTemp(preloadState);

  return res.status(200).send(html);
}

const getBuildPage = (req, res) => {
  if (process.conf.period === undefined) {
    return res.redirect("/");
  }

  const preloadState = {
    setting: "/build",
    repName: process.conf.repoName
  };

  const html = pageTemp(preloadState);

  return res.send(html);
};

const checkSettings = (req, res) => {
  return res.json(process.conf);
};

const testStartPage = (req, res) => {
  const preloadState = {
    setting: "/"
  };

  const html = pageTemp(preloadState);

  return res.status(200).send(html);
};

module.exports = {
  getSettings,
  getStartPage,
  checkSettings,
  getBuildPage,
  testStartPage
};
