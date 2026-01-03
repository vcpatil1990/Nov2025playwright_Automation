const { test, expect, chromium } = require('@playwright/test');

test('Multiple tab/window handling', async ({ page }) => {
    const browser = await chromium.launch()
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page1.waitForTimeout(4000)
    await expect(page1).toHaveTitle("OrangeHRM");
    const PagePromise = context.waitForEvent('page');
    await page1.locator("//a[text()='OrangeHRM, Inc']").click();

    const page2 = await PagePromise;
    await expect(page2).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM");
    await page1.locator("//input[@name='username']").fill("Admin")
    await page1.waitForTimeout(4000)
    await page1.locator("//input[@name='password']").fill("admin123")
    await page1.waitForTimeout(4000)
    await page1.locator("//button[@type='submit']").click()
    await page1.waitForTimeout(4000)
    await page2.waitForTimeout(4000)
})