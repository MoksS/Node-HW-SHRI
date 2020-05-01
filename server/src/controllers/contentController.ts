import { Request, Response } from "express";
import pageTemp from "../utils/pageTemplate";
import process from "../typings/declareVar";

const getStartPage = (req: Request, res: Response): void | Response => {
  if (process.conf.period !== undefined) {
    return res.redirect("/build");
  }

  const preloadState = {
    setting: "/",
  };

  const html = pageTemp(preloadState);

  return res.status(200).send(html);
};

const getSettings = (req: Request, res: Response): Response => {
  const preloadState = {
    setting: "/",
  };

  if (process.conf.period !== undefined) {
    preloadState.setting = "/build";
  }

  const html = pageTemp(preloadState);

  return res.status(200).send(html);
};

const getBuildPage = (req: Request, res: Response): void | Response => {
  if (process.conf.period === undefined) {
    return res.redirect("/");
  }

  const preloadState = {
    setting: "/build",
    repName: process.conf.repoName,
  };

  const html = pageTemp(preloadState);

  return res.send(html);
};

const checkSettings = (req: Request, res: Response): Response => {
  return res.json(process.conf);
};

export default {
  getSettings,
  getStartPage,
  checkSettings,
  getBuildPage,
};
