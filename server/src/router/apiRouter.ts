import { Router, json } from "express";

import {
  getSetting,
  getBuilds,
  getBuildId,
  getLogs,
  postSetting,
  postCommitHash,
  deleteSettings,
} from "../controllers/apiController";

const router = Router();

router.get("/settings", getSetting);
router.get("/builds", getBuilds);
router.get("/builds/:buildId", getBuildId);
router.get("/builds/:buildId/logs", getLogs);

router.post("/settings", json(), postSetting);
router.post("/builds/:commitHash", json(), postCommitHash);

router.delete(`/${process.env.TOKEN!}`, deleteSettings);

export default router;
