const { test, expect } = require('@playwright/test');

test('single file upload', async ({ page }) => {


    await page.goto("https://automationtesting.co.uk/fileupload.html")
    await page.waitForTimeout(3000)

    await page.locator("//input[@name='fileToUpload']").
    setInputFiles("tests/uploadfiles/Playwright Course (1).pdf")

    await page.waitForTimeout(4000);
})