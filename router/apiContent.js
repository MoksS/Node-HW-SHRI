const express = require("express");

const router = express.Router();

const apiContent = require("../controllers/apiContent");

router.get("/settings", apiContent.getStartPage);
router.get("/builds", apiContent.getStartPage);
router.get("/builds/:buildId", apiContent.getStartPage);
router.get("/checkSettings", apiContent.checkSettings);

module.exports = router;
