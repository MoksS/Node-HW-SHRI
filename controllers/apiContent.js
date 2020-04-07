const pageTemp = require("../handlers/pageTemplate");

const getStartPage = (req, res) => {
  if (process.conf.period !== undefined) {
    return res.redirect("/build");
  }

  const preloadState = {
    setting: "/"
  };

  const html = pageTemp(preloadState);

  return res.send(html);
};

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

module.exports = {
  getStartPage,
  checkSettings,
  getBuildPage
};
