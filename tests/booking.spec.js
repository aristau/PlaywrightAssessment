// @ts-check
import { test, expect } from '@playwright/test';

const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');
const ScanSelectionPage = require('../pages/ScanSelectionPage');
const SchedulePage = require('../pages/SchedulePage');

test.describe('Ezra Booking Flow', () => {

  test('Successful booking and payment', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const scanSelectionPage = new ScanSelectionPage(page);
    const schedulePage = new SchedulePage(page);

    await page.goto('https://myezra-staging.ezra.com/');

    //Login
    await loginPage.login("playwright@test.com", "Test@500"); //TODO: get rid of hard-coded credentials here

    //Book A Scan
    await homePage.clickBookAScanBtn();
    await scanSelectionPage.bookAScan(); //Book a scan with 1st available location
    await expect(page).toHaveURL('https://myezra-staging.ezra.com/sign-up/schedule-scan');

    await page.waitForTimeout(5000); //TODO: Get rid of this & replace with an explicit wait

    //Schedule Appt
    await schedulePage.scheduleAppointment(); //Schedule an appointment with first available date/time
    
  });

});