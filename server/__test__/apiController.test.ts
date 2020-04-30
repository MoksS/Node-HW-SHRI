import { Request, Response } from "express";
import * as controller from "../src/controllers/apiController";

jest.mock("../src/utils/axios-inst", () => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get(url: string): any {
      switch (url) {
        case "/conf":
          return Promise.resolve({
            data: {
              data: {
                id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                repoName: "Moks/Rep",
                builCommand: "npm build",
                mainBranch: "master",
                period: 0
              }
            }
          });
        case `/build/list?offset=0&limit=25`:
          return Promise.resolve({
            data: {
              data: [
                {
                  id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                  configurationId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                  buildNumber: 0,
                  commitMessage: "string",
                  commitHash: "string",
                  branchName: "string",
                  authorName: "string",
                  status: "Waiting",
                  start: "2020-04-12T11:54:37.275Z",
                  duration: 0
                }
              ]
            }
          });
        case `/build/log?buildId=880405db-106a-48c0-9a77-0103e11f9fc7`:
          return Promise.resolve({
            data: ""
          });
        case `/build/details?buildId=880405db-106a-48c0-9a77-0103e11f9fc7`:
          return Promise.resolve({
            data: {
              data: {
                id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                configurationId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                buildNumber: 0,
                commitMessage: "Commit",
                commitHash: "123asdasd123",
                branchName: "master",
                authorName: "MoksS",
                status: "Waiting",
                start: "2020-04-12T13:14:59.998Z",
                duration: 0
              }
            }
          });
        default:
          break;
      }
    }
  };
});

// данные в базе данных могут быть разные
// и делать реальные запросы к бд, чтобы совпадало с ответом теста, нереально
// все это будет в интеграционных тестах
const res = {
  statusCode: 0,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  status(status: number): any {
    this.statusCode = status;
    return this;
  },

  json(json: JSON): JSON {
    return json;
  }
};

describe("test Api controller", () => {
  const req = { query: {} };
  it("test getSetting", async () => {
    const setting = await controller.getSetting(
      req as Request,
      (res as unknown) as Response
    );
    expect(setting).toEqual({
      data: {
        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        repoName: "Moks/Rep",
        builCommand: "npm build",
        mainBranch: "master",
        period: 0
      }
    });
  });

  it("test getBuilds", async () => {
    const req = { query: {} };
    const builds = await controller.getBuilds(
      req as Request,
      (res as unknown) as Response
    );

    expect(builds).toEqual({
      data: [
        {
          id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          configurationId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          buildNumber: 0,
          commitMessage: "string",
          commitHash: "string",
          branchName: "string",
          authorName: "string",
          status: "Waiting",
          start: "2020-04-12T11:54:37.275Z",
          duration: 0
        }
      ]
    });
  });

  it("test getBuildId", async () => {
    const req = { params: { buildId: "880405db-106a-48c0-9a77-0103e11f9fc7" } };
    const build = await controller.getBuildId(
      (req as unknown) as Request,
      (res as unknown) as Response
    );
    expect(build).toEqual({
      data: {
        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        configurationId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        buildNumber: 0,
        commitMessage: "Commit",
        commitHash: "123asdasd123",
        branchName: "master",
        authorName: "MoksS",
        status: "Waiting",
        start: "2020-04-12T13:14:59.998Z",
        duration: 0
      }
    });
  });

  it("test getLogs", async () => {
    const req = { params: { buildId: "880405db-106a-48c0-9a77-0103e11f9fc7" } };
    const log = await controller.getLogs(
      (req as unknown) as Request,
      (res as unknown) as Response
    );
    expect(log).toEqual({
      data: "Билд не был запущен или не окончен"
    });
  });
});
