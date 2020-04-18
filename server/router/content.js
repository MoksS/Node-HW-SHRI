const express = require("express");

const router = express.Router();

const content = require("../controllers/contentController");

router.get("/", content.getStartPage);
router.get("/settings", content.getSettings);
router.get("/build", content.getBuildPage);
router.get("/build/:buildId", content.getBuildPage);
router.get("/checkSettings", content.checkSettings);
router.get("/teststartpageqwert123", content.testStartPage);
router.get("*", content.getStartPage);

module.exports = router;