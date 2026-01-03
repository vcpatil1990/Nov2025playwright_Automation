const { test, expect } = require('@playwright/test');

test('Multiple file upload', async ({ page }) => {


    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.waitForTimeout(3000)

    await page.locator("//input[@name='filesToUpload']").
    setInputFiles(['tests/uploadfiles/Playwright Course (1).pdf',
        'tests/uploadfiles/RestAssured.txt','tests/uploadfiles/RestAssured.txt'])

    await page.waitForTimeout(4000);
})