const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.userNameInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.submitBtn = page.getByRole('button', { name: 'Submit' });
  }

  async typeUsername(username) {
    await this.userNameInput.clear();
    await this.userNameInput.fill(username);
  }

  async typePassword(password) {
    await this.passwordInput.clear();
    await this.passwordInput.fill(password);
  }

  async clickSubmitBtn() {
    await this.submitBtn.click();
  }

  async login(username, password) {
    await this.typeUsername(username);
    await this.typePassword(password);
    await this.clickSubmitBtn();
  }
}

module.exports = LoginPage;