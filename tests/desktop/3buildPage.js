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
});
