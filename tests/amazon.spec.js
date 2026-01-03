const { test, expect } = require('@playwright/test');

test('Dynamic dropdown ', async ({ page }) => {

    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(3000);
    await page.locator("//input[@placeholder='Search Amazon.in']").fill("mobile under 20000");
    await page.waitForTimeout(3000);
    let options = await page.$$("//div[@role='row']")
    for (let op of options) {
        let value = await op.textContent();
        console.log(value);
    }
    await page.waitForTimeout(3000);
})