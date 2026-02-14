const BasePage = require('./BasePage');

class ScanSelectionPage extends BasePage {
  constructor(page) {
    super(page);

    this.dobInput = page.locator('#dob'),
    this.genderInput = page.locator('')
    this.scanPackages = page.locator('.encounter-list-item');
    this.genderSelect = page.getByRole('combobox');
  }

  async typeDOB(dob) {
    await this.dobInput.clear();
    await this.dobInput.fill(dob);
  }

  async selectGender(option) {
    await this.genderSelect.click();
    await this.page.locator('span').filter({hasText: option}).first().click();
  }

  async selectFirstScanPackage() {
    await this.scanPackages.first().click();
  }

  async continue() {
    await this.clickContinue();
  }

  async bookAScan(){
    await this.typeDOB("02-13-2000"); //TODO: Instead of hardcoding use date from 19 years ago
    await this.selectGender("Female");
    await this.selectFirstScanPackage();
    await this.continue();
  }



}

module.exports = ScanSelectionPage;