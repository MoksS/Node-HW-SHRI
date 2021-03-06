const assert = require("chai").assert;
const inst = require("../../utils/axios-inst");

describe("Start Page", () => {
  it("Тестируем корректность верстки", async function() {
    const del = await inst.delete("/");
    assert.equal(200, del.status);
    return this.browser.url("http://localhost:3000/").assertView("plain", "body", {
      allowViewportOverflow: true,
      compositeImage: true,
      screenshotDelay: 100
    });
  });

  it("при нажатии на кнопку в логах, должна октрыться страницы settings", async function() {
    const browser = this.browser;
    await browser.url("http://localhost:3000/");
    await browser.click(".Logo a");
    const url = await browser.getUrl();
    return assert.equal(url, "http://localhost:3000/settings");
  });
});
