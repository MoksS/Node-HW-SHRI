const express = require("express");

const router = express.Router();

const apiContent = require("../controllers/apiContent");

router.get("/", apiContent.getStartPage);
router.get("/settings", apiContent.getStartPage);
router.get("/build", apiContent.getBuildPage);
router.get("/build/:buildId", apiContent.getBuildPage);
router.get("/checkSettings", apiContent.checkSettings);
router.get("*", apiContent.getStartPage);

module.exports = router;
