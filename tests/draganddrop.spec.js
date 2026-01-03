const { test, expect } = require('@playwright/test');

test('Drag and Drop  ', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const DragandDrop = await page.locator("//h2[text()='Drag and Drop']");
    await DragandDrop.scrollIntoViewIfNeeded();
    await page.waitForTimeout(4000);

    const source = await page.locator("//div[@id='draggable']");
    const dest = await page.locator("//div[@id='droppable']")

    await source.dragTo(dest);
    await page.waitForTimeout(3000);

})