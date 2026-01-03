const { test, expect } = require('@playwright/test');

test('Scroll page', async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
        window.scrollBy(0, 700);
    })
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
        window.scrollBy(0, -400);
    })
    await page.waitForTimeout(3000);

    const text = await page.locator("//h5[text()='Test case 3: Negative password test']")
    await text.scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000);

    const submit = await page.locator("//button[@id='submit']");
    await submit.scrollIntoViewIfNeeded()
    await page.waitForTimeout(5000);
})