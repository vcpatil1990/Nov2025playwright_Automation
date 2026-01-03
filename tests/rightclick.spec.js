const { test, expect } = require('@playwright/test');

test('Right click in playwright ', async ({ page }) => {

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    let rightclick = await page.locator("//span[text()='right click me']");
    await rightclick.click({ button:'right' })
    await page.waitForTimeout(4000)

})