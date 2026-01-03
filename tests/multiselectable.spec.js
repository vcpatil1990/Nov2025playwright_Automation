const { test, expect } = require('@playwright/test');

test('Multiselectable dropdown', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000);

    await page.selectOption("//select[@id='colors']", ['Blue', 'Red', 'Green', 'White'])
    await page.waitForTimeout(3000);

    let option=await page.$$("//select[@id='colors']/option")
    console.log("total options are = ",option.length);
    
    let content =await page.locator("//select[@id='colors']").textContent();
    await expect(content.includes("Green")).toBeTruthy()
    await page.waitForTimeout(3000);

})