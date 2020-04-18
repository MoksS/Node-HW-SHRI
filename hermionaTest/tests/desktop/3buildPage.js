const assert = require("chai").assert;

describe("Build Page", () => {
  it("Тестируем корректность верстки", async function() {
    return this.browser.url("/build").assertView("plain", "body", {
      allowViewportOverflow: true,
      compositeImage: true,
      screenshotDelay: 200
    });
  });

  it("Тестируем popup", async function() {
    const browser = this.browser;
    await browser.click(".Button.Button__padding-control");
    await browser.waitForExist(".Form_H2", 1000);
    const text = await browser.getText(".Form_H2");
    return assert.equal(text, "New Build");
  });

  it("Тестируем переход на страницу билда", async function() {
    const browser = this.browser;
    await browser.url("/build");
    await browser.waitForExist(".Content a", 1000);
    const href = await browser.getAttribute(".Content a", "href");
    await browser.click(".Content a");
    const url = await browser.getUrl();
    console.log(href, url);
    return assert.equal(url, href);
  });
  // 95294dd38f14a3a308ef91eaf61e42e9edc45b7e
  // Input_Input
  it("Тестируем запуск билда по коммиту", async function() {
    const browser = this.browser;
    await browser.url("/build");
    await browser.click(".Button.Button__padding-control");
    await browser.waitForExist(".Form_H2", 1000);
    await browser.setValue(
      `.Input_Input`,
      "95294dd38f14a3a308ef91eaf61e42e9edc45b7e"
    );
    await browser.click(`form button.Button__color-action`);
    await browser.waitForExist(".Log", 10000);
    const text = await browser.getText(".Card_Status .Text");
    return assert.notEqual(
      text,
      "пофиксил дизайн системы, вынес в глобальные перменные отступы, размеры шрифтов, и высоту в глобальные перменные"
    );
  });
});
