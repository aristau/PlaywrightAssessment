// @ts-check
import { test, expect } from '@playwright/test';

const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');
const ScanSelectionPage = require('../pages/ScanSelectionPage');

test.describe('Ezra Booking Flow', () => {

  test('Successful booking and payment', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const scanSelectionPage = new ScanSelectionPage(page)

    await page.goto('https://myezra-staging.ezra.com/');

    //Login
    await loginPage.login("playwright@test.com", "Test@500"); //TODO: get rid of hard-coded credentials here

    //Book A Scan
    await homePage.clickBookAScanBtn();
    await scanSelectionPage.bookAScan();
    //await scanSelectionPage.selectFirstScanPackage();
  });

});