import { Request, Response } from "express";
import inst from "../utils/axios-inst";
import Cache from "../utils/cache";
import git from "../utils/git";

const cache = new Cache({
  dir: "../cache",
  timestamp: 3600000
});

cache.clearCache();

export const getSetting = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const result = await inst.get("/conf");

    return res.status(200).json({
      data: result.data.data
    });
  } catch (error) {
    return res.status(error.response.status || 404).json({
      data: error.response.statusText || "Bad request"
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
      data: buildList.data.data
    });
  } catch (error) {
    return res.status(error.response.status || 404).json({
      data: error.response.statusText || "Bad request"
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
      data: infoBuild.data.data
    });
  } catch (error) {
    return res.status(error.response.status || 404).json({
      data: error.response.statusText || "Bad request"
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
        data: "Билд не был запущен или не окончен"
      });
    }
    await cache.set(req.params.buildId, JSON.stringify({ data: log.data }));

    return res.status(200).json({
      data: log.data
    });
  } catch (error) {
    return res.status(error.response.status || 404).json({
      data: error.response.statusText || "Bad request"
    });
  }
};
export const postSetting = async (req, res) => {
  const { body } = req;

  try {
    const clone = await git.clone(body.repoName);
    if (clone !== "ok") {
      return res.status(400).json({
        success: false,
        error: clone
      });
    }

    await inst.delete("/conf");

    await inst.post("/conf", {
      repoName: body.repoName,
      buildCommand: body.buildCommand,
      mainBranch: body.mainBranch || "master",
      period: +body.period || 0
    });

    process.conf.repoName = body.repoName;
    process.conf.buildCommand = body.buildCommand;
    process.conf.mainBranch = body.mainBranch || "master";
    process.conf.period = body.period || 0;

    const lastCommit = await git.lastCommit();
    process.conf.lastCommitHash = lastCommit.commitHash;

    await inst.post("/build/request", lastCommit);

    if (process.conf.period > 0) {
      clearInterval(process.checkCommit);
      process.checkCommit = setInterval(
        git.checkCommit,
        process.conf.period * 60000 // здесь устанавливается время для авто проверки новых коммитов
        // сейчас стоит раз в минуту (если period 1)
      );
    }

    return res.status(200).json({
      success: true
    });
  } catch (error) {
    return res.status(error.response.status || 404).json({
      data: error.response.statusText || "Bad request"
    });
  }
};

export const postCommitHash = async (req, res) => {
  try {
    if (req.body.commitMessage === undefined) {
      const commit = await git.lookup(req.params.commitHash);

      req.body = commit;
    }

    const result = await inst.post("/build/request", {
      commitMessage: req.body.commitMessage,
      commitHash: req.params.commitHash,
      branchName: req.body.branchName,
      authorName: req.body.authorName
    });

    result.data.data.success = true;

    return res.status(200).json(result.data);
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      data: "Bad request"
    });
  }
};
