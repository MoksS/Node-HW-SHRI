const controller = require("../controllers/apiController");

jest.mock("../handlers/axios", () => {
  return {
    inst: {
      get(url) {
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
            })
          default:
            break;
        }
      }
    }
  };
});

// данные в базе данных могут быть разные
// и делать реальные запросы к бд, чтобы совпадало с ответом теста, нереально
// все это будет в интеграционных тестах
const res = {
  status(status) {
    this.statusCode = status;
    return this;
  },

  json(json) {
    return json;
  }
};

describe("test Api controller", () => {
  it("test getSetting", async () => {
    const setting = await controller.getSetting(null, res);
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
    const builds = await controller.getBuilds(req, res);

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
    const build = await controller.getBuildId(req, res);
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
    const log = await controller.getLogs(req, res);
    expect(log).toEqual({
      data: "Билд не был запущен или не окончен"
    });
  });
});
