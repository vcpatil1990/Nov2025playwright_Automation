const { test, expect } = require('@playwright/test');

test('Make my trip ', async ({ page }) => {

    await page.goto("https://www.makemytrip.com/",{waituntil:'networkidle'});
    await page.waitForTimeout(3000); 
    await page.locator("//span[@data-cy='closeModal']").click();
    await page.waitForTimeout(3000);
    await page.locator("//a[@data-cy='mmtLogo']").click();
    await page.locator("//input[@data-cy='fromCity']").click();
    await page.waitForTimeout(3000);
    // let options = await page.$$("//ul//li[@role='option']");
    let options = await page.$$("//ul//li[@role='option']//p[@class='font14 appendBottom5 blackText']")
    for (let op of options) {
        let value = await op.textContent();
        console.log(value)
    }
    await page.locator("//p[text()='Mumbai, India']").click();
    await page.waitForTimeout(3000);
    await page.locator("//p[@data-cy='submit']").click();
    await page.waitForTimeout(7000);
})
