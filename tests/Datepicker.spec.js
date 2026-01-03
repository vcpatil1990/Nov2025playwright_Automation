const { test, expect } = require('@playwright/test');

test('Handle Date picker', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000);

    const year = "2020";
    const month = "February";
    const date = "15";

    const datepicker = await page.locator("//p[text()='Date Picker 1 (mm/dd/yyyy): ']")
    await datepicker.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await page.locator("//input[@id='datepicker']").click();
    while (true) {
        const presentyear = await page.locator("//span[@class='ui-datepicker-year']").textContent()
        const presentmonth = await page.locator("//span[@class='ui-datepicker-month']").textContent()
        if (presentyear == year && presentmonth == month) {
            break;
        }
       // await page.locator("//a[@title='Next']").click();
         await page.locator("//a[@title='Prev']").click();
    }
    await page.waitForTimeout(4000);
    const dates = await page.$$("//a[@class='ui-state-default']")

    for (const dt of dates) {
        if (await dt.textContent() == date) {
            await dt.click();
            break;
        }
    }
    //await page.waitForTimeout(4000)
})