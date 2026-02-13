const BasePage = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);

    this.bookScanBtn = page.getByRole('button', { name: 'Book a scan' });
  }

  async clickBookAScanBtn() {
    await this.bookScanBtn.click();
  }
}

module.exports = HomePage;