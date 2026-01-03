const { test, expect } = require('@playwright/test');

test('Mouse hover ', async ({ page }) => {

    await page.goto("https://www.myntra.com/mantra");
    await page.waitForTimeout(3000);

    let kids = await page.locator("//div[@class='desktop-navLink']//a[text()='Kids']");
    await kids.hover();
    await page.waitForTimeout(4000);
})