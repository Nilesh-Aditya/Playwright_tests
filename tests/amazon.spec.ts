import { test, expect, Locator } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
});

test('check its amazon', async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    const title = await page.title();
    console.log(await page.title());
    await expect(title).toContain('Amazon');
    await expect(page).toHaveTitle(/Amazon/);
})

test('Login', async ({ page }) => {
    await page.goto("https://www.amazon.in/");

    await page.locator('//*[@id="nav-link-accountList"]').click();
    // page.waitForSelector('xpath=//*[@id="ap_email"]');
    await page.waitForLoadState();
    await page.locator('//*[@id="ap_email"]').fill('nileshaditya2000@gmail.com');
    await page.click('span:has-text("Continue")')
    await page.waitForLoadState();
    await page.locator('input[name="password"]').fill("abs");
    await page.click('span:has-text("Sign in")');
})