const express = require("express");
const router = express.Router();

const apiController = require("../controllers/apiComtroller");


router.get("/settings", (req, res) => {
  res.send("settings");
});
router.get("/builds", (req, res) => {
  res.send("builds");
});
router.get("/builds/:buildId", (req, res) => {
  res.send(`${req.params.buildId}`);
});
router.get("/builds/:buildId/logs", (req, res) =>{
  res.send(`${req.url}`);
});

module.exports = router;