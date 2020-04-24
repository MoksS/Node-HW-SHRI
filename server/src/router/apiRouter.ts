import { Router, json } from "express";

import {
  getSetting,
  getBuilds,
  getBuildId,
  getLogs,
  postSetting,
  postCommitHash
} from "../controllers/apiController";

const router = Router();

router.get("/settings", getSetting);
router.get("/builds", getBuilds);
router.get("/builds/:buildId", getBuildId);
router.get("/builds/:buildId/logs", getLogs);

router.post("/settings", json(), postSetting);
router.post("/builds/:commitHash", json(), postCommitHash);
export default router;
