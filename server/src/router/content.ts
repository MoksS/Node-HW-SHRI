import express from "express";

import content from "../controllers/contentController";

const router = express.Router();

router.get("/", content.getStartPage);
router.get("/settings", content.getSettings);
router.get("/build", content.getBuildPage);
router.get("/build/:buildId", content.getBuildPage);
router.get("/checkSettings", content.checkSettings);
router.get("*", content.getStartPage);

export default router;
