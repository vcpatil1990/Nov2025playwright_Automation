const { test, expect } = require('@playwright/test');

test('Key board action ', async ({ page }) => {

    await page.goto("https://gotranscript.com/text-compare");
    await page.waitForTimeout(3000);
    await page.locator("//textarea[@name='text1']").fill("Hi team automation");
    await page.waitForTimeout(3000);
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.waitForTimeout(3000);
    await page.keyboard.press('Tab')
    await page.waitForTimeout(3000);
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(3000);
    
})