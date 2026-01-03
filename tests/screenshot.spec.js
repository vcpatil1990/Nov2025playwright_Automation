const { test, expect } = require('@playwright/test');

test('Amazon Page Screenshot', async ({ page }) => {

    await page.goto("https://www.amazon.in/");

    await page.screenshot({ path: 'tests/screenshot/' + "HomePage.png" });
})

test('Amazon Page Full Page Screenshot', async ({ page }) => {

    await page.goto("https://www.amazon.in/");
    await page.screenshot({ path: 'tests/screenshot/' + "FullPage.png", fullPage: true })

})
test('Amazon Page Element Screenshot', async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(3000);
    const Element = await page.locator("//h2[text()='Revamp your home in style']");
    await Element.screenshot({ path: 'tests/screenshot/' + "element.png" });
})