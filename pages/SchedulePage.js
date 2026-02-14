const BasePage = require('./BasePage');

class SchedulePage extends BasePage {
  constructor(page) {
    super(page);

    this.locationCards = page.locator('.location-card');
     this.availableDates = page.locator(
      '.vuecal__cell:not(.vuecal__cell--disabled) .vc-day-content'
    );
    this.availableTimes = page.locator('.appointments__individual-appointment');
    
  }

  async selectFirstLocation() {
    await this.locationCards.first().click();
  }

  async selectFirstAvailableDate() {
    await this.availableDates.first().click();
  }

  async selectFirstAvailableTime() {
    await this.availableTimes.first().click();
  }

  async continue() {
    await this.clickContinue();
  }

  async scheduleAppointment(){
    await this.selectFirstLocation();
    await this.selectFirstAvailableDate();
    await this.selectFirstAvailableTime();
    await this.continue();
  }
}

module.exports = SchedulePage;