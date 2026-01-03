const { test, expect } = require('@playwright/test');

test('simple alert box ', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain("I am an alert box!");
        await page.waitForTimeout(3000);
        await dialog.accept();
    })
    
    const alertbutton = await page.locator("//button[text()='Simple Alert']")
    await alertbutton.click();
    

})


test('confirmation alert', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain("Press a button!");
        await page.waitForTimeout(3000);
        //await dialog.accept();
        await dialog.dismiss();
    })
    await page.waitForTimeout(4000);
    const alertbutton = await page.locator("//button[text()='Confirmation Alert']")
    await alertbutton.click();
    await expect(page.locator("//p[text()='You pressed Cancel!']")).toHaveText("You pressed Cancel!")
    await page.waitForTimeout(4000);

})



test.only('prompt alert', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain("Please enter your name:");
        expect(dialog.defaultValue()).toContain("Harry Potter");
        await page.waitForTimeout(3000);
        await dialog.accept("HI Automation Team");
        
    })
    await page.waitForTimeout(4000);
    const alertbutton = await page.locator("//button[text()='Prompt Alert']")
    await alertbutton.click();
    await expect(page.locator("//p[@id='demo'")).toHaveText("Hello HI Automation Team! How are you today?")
    await page.waitForTimeout(4000);

})