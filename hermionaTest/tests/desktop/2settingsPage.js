const assert = require("chai").assert;

describe("Settings Page", () => {
  it("Тестируем корректность верстки", async function() {
    return this.browser.url("/settings").assertView("plain", "body", {
      allowViewportOverflow: true,
      compositeImage: true,
      screenshotDelay: 100
    });
  });

  it("тестируем ошибку при неполном вводе полей", async function() {
    const browser = this.browser;
    await browser.setValue(`.Input_Input[name="repoName"]`, "MoksS/repoPage");
    await browser.click(`form button.Button__color-action`);
    const text = await browser.getText(`form .Text__color-red`);
    return assert.equal(text, "Заполните обязательные поля");
  });

  it("проверка очистки полей по нажатию кнопки", async function() {
    const browser = this.browser;
    await browser.setValue(`.Input_Input[name="repoName"]`, "MoksS/repoPage");
    const valuebefore = await browser.getValue(`.Input_Input[name="repoName"]`);
    await browser.click(`.Icon__img-close`);
    const valueAfter = await browser.getValue(`.Input_Input[name="repoName"]`);
    return assert(valuebefore !== valueAfter);
  });

  it("Заполняем поля, отправляем форму, после чего должно отправить на страницу билдов", async function() {
    const browser = this.browser;
    await browser.setValue(
      `.Input_Input[name="repoName"]`,
      "MoksS/homework-verstka-"
    );
    await browser.setValue(`.Input_Input[name="buildCommand"]`, "npm start");
    await browser.click(`form button.Button__color-action`);
    await browser.waitUntil(async () => {
      const url = await browser.getUrl();
      return url !== "http://localhost:3000/settings";
    }, 5000);

    const url = await browser.getUrl();
    return assert.equal(url, "http://localhost:3000/build");
  });
});
