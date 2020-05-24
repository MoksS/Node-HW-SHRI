import express from "express";

import content from "../controllers/contentController";

const router = express.Router();

router.get("/ru", content.getStartPage);
router.get("/ru/settings", content.getSettings);
router.get("/ru/build", content.getBuildPage);
router.get("/ru/build/:buildId", content.getBuildPage);
router.get("/en", content.getStartPage);
router.get("/en/settings", content.getSettings);
router.get("/en/build", content.getBuildPage);
router.get("/en/build/:buildId", content.getBuildPage);
router.get("/checkSettings", content.checkSettings);
router.get("*", content.redirect);

export default router;
