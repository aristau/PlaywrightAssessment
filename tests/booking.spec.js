// @ts-check
import { test, expect } from '@playwright/test';

const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');
const ScanSelectionPage = require('../pages/ScanSelectionPage');
const SchedulePage = require('../pages/SchedulePage');
const PaymentPage = require('../pages/PaymentPage');

test.describe('Ezra Booking Flow', () => {

  test('Successful booking and payment', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const scanSelectionPage = new ScanSelectionPage(page);
    const schedulePage = new SchedulePage(page);
    const paymentPage = new PaymentPage(page);

    await page.goto('/');

    //Login
    await loginPage.login("playwright@test.com", "Test@500"); //TODO: get rid of hard-coded credentials here

    //Book A Scan
    await homePage.clickBookAScanBtn();
    await scanSelectionPage.bookAScan(); //Book a scan with 1st available location
    await expect(page).toHaveURL('sign-up/schedule-scan');

    await schedulePage.locationCards.first().waitFor();

    //Schedule Appt
    await schedulePage.scheduleAppointment(); //Schedule an appointment with first available date/time

    //Fill Payment Form
    await expect(page).toHaveURL('sign-up/reserve-appointment');

    await paymentPage.fillPaymentForm("4242424242424242", "12/34", "123", "10001"); //TODO: Use Javascript to ensure date is always in future
    
  });

});