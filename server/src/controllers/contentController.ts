import { Request, Response } from "express";
import { readFileSync } from "fs";
import { join } from "path";
import pageTemp from "../utils/pageTemplate";
import process from "../typings/declareVar";

const objLang = {
  en: readFileSync(join(__dirname, "../../public/lang/en.json")).toString(
    "utf8"
  ),

  ru: readFileSync(join(__dirname, "../../public/lang/ru.json")).toString(
    "utf8"
  ),
};

objLang.en = JSON.parse(objLang.en);
objLang.ru = JSON.parse(objLang.ru);

const getStartPage = (req: Request, res: Response): void | Response => {
  const curLeng = req.baseUrl.startsWith("ru") ? "ru" : "en";
  console.log(curLeng, req.baseUrl, 123);

  if (process.conf.period !== undefined) {
    return res.redirect(`/${curLeng}/build`);
  }

  const preloadState = {
    setting: "/",
    lang: curLeng,
  };

  const html = pageTemp(preloadState, objLang[curLeng]);

  return res.status(200).send(html);
};

const getSettings = (req: Request, res: Response): Response => {
  const curLeng = req.baseUrl.startsWith("ru") ? "ru" : "ru";

  const preloadState = {
    setting: "/",
    lang: curLeng,
  };

  if (process.conf.period !== undefined) {
    preloadState.setting = "/build";
  }

  const html = pageTemp(preloadState, objLang[curLeng]);

  return res.status(200).send(html);
};

const getBuildPage = (req: Request, res: Response): void | Response => {
  const curLeng = req.baseUrl.startsWith("ru") ? "ru" : "en";

  if (process.conf.period === undefined) {
    return res.redirect(`/${curLeng}`);
  }

  const preloadState = {
    setting: "/build",
    repName: process.conf.repoName,
    lang: curLeng,
  };

  const html = pageTemp(preloadState, objLang[curLeng]);

  return res.send(html);
};

const checkSettings = (req: Request, res: Response): Response => {
  return res.json(process.conf);
};

const redirect = (req: Request, res: Response): void => {
  if (req.acceptsLanguages("ru")) {
    return res.redirect("/ru");
  }
  return res.redirect("/en");
};

export default {
  getSettings,
  getStartPage,
  checkSettings,
  getBuildPage,
  redirect,
};
