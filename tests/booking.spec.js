// @ts-check
import { test, expect } from '@playwright/test';

const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');

test.describe('Ezra Booking Flow', () => {

  test('Successful booking and payment', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await page.goto('https://myezra-staging.ezra.com/');

    //Login
    await loginPage.login("playwright@test.com", "Test@500");

    //Book A Scan
    await homePage.clickBookAScanBtn();

    await expect(page).toHaveURL('https://myezra-staging.ezra.com/sign-up/select-plan');

  });

});