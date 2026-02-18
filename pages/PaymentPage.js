const BasePage = require('./BasePage');

class PaymentPage extends BasePage {
  constructor(page) {
    super(page);

    this.iframeLocator = page.frameLocator('iframe').first(); 
    this.cardNumberInput = this.iframeLocator.locator('#payment-numberInput');
    this.expirationDateInput = this.iframeLocator.getByRole('textbox', { name: 'Expiration date MM / YY' });
    this.securityCodeInput = this.iframeLocator.getByRole('textbox', { name: 'Security code' });
    this.zipCodeInput = this.iframeLocator.getByRole('textbox', { name: 'ZIP code' });
  }

  async typeCardNumber(cardNumber) {
    await this.cardNumberInput.waitFor({ state: 'visible' });
    await this.cardNumberInput.clear();
    await this.cardNumberInput.fill(cardNumber);
  }

  async typeExpirationDate(expDate) {
    await this.expirationDateInput.clear();
    await this.expirationDateInput.fill(expDate);
  }

  async typeSecurityCode(securityCode) {
    await this.securityCodeInput.clear();
    await this.securityCodeInput.fill(securityCode);
  }

  async typeZipCode(zipCode) {
    await this.zipCodeInput.clear();
    await this.zipCodeInput.fill(zipCode);
  }

  async fillPaymentForm(cardNumber, expDate, securityCode, zipCode){
    await this.typeCardNumber(cardNumber);
    await this.typeExpirationDate(expDate);
    await this.typeSecurityCode(securityCode);
    await this.typeZipCode(zipCode);
  }

}

module.exports = PaymentPage;