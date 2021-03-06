describe("Build Details Page", () => {
  it("Тестируем корректность верстки", async function() {
    const browser = this.browser;
    await browser.url("/build");
    await browser.waitForExist(".Content a", 6000);
    await browser.click(".Content a");
    return this.browser.assertView("plain", "body", {
      allowViewportOverflow: true,
      compositeImage: true,
      screenshotDelay: 6000
    });
  });
});
