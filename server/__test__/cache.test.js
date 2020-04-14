const fs = require("fs");
const path = require("path");
const { Cache } = require("../handlers/cache");

const cache = new Cache({
  dir: "../cache",
  timestamp: 200
});

describe("test cache handler", () => {
  const date = new Date();
  it("test set Cache", async () => {
    await cache.set(
      "testfortest123",
      JSON.stringify({ data: `Здесь был тест ${date}` })
    );

    const check = fs.readFileSync(
      path.join(__dirname, "../cache", `testfortest123.json`),
      { encoding: "utf8" }
    );

    expect(JSON.parse(check)).toEqual({ data: `Здесь был тест ${date}` });
  });

  // дальше как кеш тестить вообще без понятия перепробовал много разных способов и ничего ...
});
