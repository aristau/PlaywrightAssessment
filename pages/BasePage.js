class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async clickContinue() {
    await this.page.getByRole('button', { name: /continue/i }).click();
  }

  async clickButtonByName(name) {
    await this.page.getByRole('button', { name: new RegExp(name, 'i') }).click();
  }

  async getText(text) {
    return await this.page.getByText(text);
  }
}

module.exports = BasePage;