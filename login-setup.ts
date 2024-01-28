import { test } from "@playwright/test";

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
    await page.context().storageState({ path: "./auth.json" });
})