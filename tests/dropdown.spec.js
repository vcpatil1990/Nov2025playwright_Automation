const { test, expect } = require('@playwright/test');

test('Simple dropdown', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000);
    let country = await page.locator("//label[text()='Country:']")
    await country.scrollIntoViewIfNeeded();
    await page.locator("//select[@id='country']").selectOption({label:'Brazil'});
    await page.waitForTimeout(3000);
    await page.locator("//select[@id='country']").selectOption("France");
    await page.waitForTimeout(3000);
    await page.locator("//select[@id='country']").selectOption({value:'china'});
    await page.waitForTimeout(3000);
    await page.locator("//select[@id='country']").selectOption({index:3});
    await page.waitForTimeout(3000);
    await page.selectOption("//select[@id='country']","Australia");
    await page.waitForTimeout(3000);

    let options = await page.$$("//select[@id='country']/option");
    console.log("Total options are = ", options.length);
    let status = false;
    for (const option of options) {
        let value = await option.textContent()
        console.log(value);
        if (value.includes("Brazil")) {
            status = true;
            break;
        }
    }

})