import { Request, Response } from "express";
import webpush, { PushSubscription } from "web-push";
import inst from "../utils/axios-inst";
import Cache from "../utils/cache";
import git from "../utils/git";
import process from "../typings/declareVar";

webpush.setVapidDetails(
  "mailto:moksshuv@yandex.ru",
  process.env.PUBLICKEY,
  process.env.PRIVATEKEY
);

const cache = new Cache({
  dir: "../../cache",
  timestamp: 3600000,
});

cache.clearCache();

export const getSetting = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const result = await inst.get("/conf");

    return res.status(200).json({
      data: result.data.data,
    });
  } catch (error) {
    return res.status(error.response.status || 404).json({
      data: error.response.statusText || "Bad request",
    });
  }
};

export const getBuilds = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { query } = req;
  const offset = query.offset || 0;
  const limit = query.limit || 25;
  try {
    const buildList = await inst.get(
      `/build/list?offset=${offset}&limit=${limit}`
    );

    return res.status(200).json({
      data: buildList.data.data,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      data: "Bad request",
    });
  }
};

export const getBuildId = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const infoBuild = await inst.get(
      `/build/details?buildId=${req.params.buildId}`
    );
    return res.status(200).json({
      data: infoBuild.data.data,
    });
  } catch (error) {
    return res.status(error.response.status || 404).json({
      data: error.response.statusText || "Bad request",
    });
  }
};

// 880405db-106a-48c0-9a77-0103e11f9fc7
export const getLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    if (res.set !== undefined) {
      const readStream = await cache.get(req.params.buildId, res);
      if (readStream) return res;
    }

    const log = await inst.get(`/build/log?buildId=${req.params.buildId}`);
    if (log.data.length < 1) {
      return res.status(200).json({
        data: "Билд не был запущен или не окончен",
      });
    }
    await cache.set(req.params.buildId, JSON.stringify({ data: log.data }));

    return res.status(200).json({
      data: log.data,
    });
  } catch (error) {
    return res.status(404).json({
      data: "Bad request",
    });
  }
};

export const postSetting = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;
  console.log(body);
  try {
    const clone = await git.clone(body.repoName);
    if (clone !== "ok") {
      return res.status(400).json({
        success: false,
        error: clone,
      });
    }

    await inst.delete("/conf");

    await inst.post("/conf", {
      repoName: body.repoName,
      buildCommand: body.buildCommand,
      mainBranch: body.mainBranch || "master",
      period: +body.period || 0,
    });

    process.conf.repoName = body.repoName;
    process.conf.buildCommand = body.buildCommand;
    process.conf.mainBranch = body.mainBranch || "master";
    process.conf.period = body.period || 0;

    const lastCommit = await git.lastCommit();
    process.conf.lastCommitHash = lastCommit.commitHash;

    await inst.post("/build/request", lastCommit);

    if (process.conf.period !== undefined && process.conf.period > 0) {
      clearInterval(process.checkCommit);
      process.checkCommit = setInterval(
        git.checkCommit,
        process.conf.period * 60000 // здесь устанавливается время для авто проверки новых коммитов
        // сейчас стоит раз в минуту (если period 1)
      );
    }

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(error.response.status || 404).json({
      data: error.response.statusText || "Bad request",
    });
  }
};

export const postCommitHash = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    if (req.body.commitMessage === undefined) {
      const commit = await git.lookup(req.params.commitHash);

      req.body = commit;
    }

    const result = await inst.post("/build/request", {
      commitMessage: req.body.commitMessage,
      commitHash: req.params.commitHash,
      branchName: req.body.branchName,
      authorName: req.body.authorName,
    });

    result.data.data.success = true;

    return res.status(200).json(result.data);
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      data: "Bad request",
    });
  }
};

export const deleteSettings = async (
  req: Request,
  res: Response
): Promise<Response> => {
  console.log("Запрос на удаление настроек");
  try {
    const result = await inst.delete("/conf");
    process.conf = result.data.data || {};
    process.conf.gitUrl = `https://github.com/`;
    console.log("Настройки удалены");
    console.log(process.conf);
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      data: "Bad request",
    });
  }
};

let shitDB: PushSubscription;

export const notify = (req: Request, res: Response): Response => {
  console.log(req.body);
  const { buildNumber, status } = req.body;
  const message = `Build №${buildNumber} ${status}`;
  console.log(message);
  webpush.sendNotification(shitDB, message);
  return res.status(200).send("OK");
};

export const postSwPush = (req: Request, res: Response): Response => {
  shitDB = req.body as PushSubscription;
  console.log(shitDB);
  return res.status(200).json({ message: "push active" });
};
