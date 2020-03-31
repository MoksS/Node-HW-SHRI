const getStartPage = (req, res) => {
  res.redirect("/");
};

const checkSettings = (req, res) => {
  res.json(process.conf);
};

module.exports = {
  getStartPage,
  checkSettings
};
