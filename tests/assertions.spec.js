const { test, expect } = require('@playwright/test');

test('Assertions in playwright ', async ({ page }) => {


    await page.goto("https://demo.nopcommerce.com/register");
    await page.waitForTimeout(2000);
    await expect.soft(page).toHaveURL("https://demo.nopcommerce.com/register");
    await expect.soft(page).toHaveTitle("nopCommerce demo store. Register");
    await page.waitForTimeout(4000);
    
    const logo = await page.locator("//div[@class='header-logo']");
    await expect.soft(logo).toBeVisible();
    await page.waitForTimeout(4000);

    const searchbox=await page.locator("//input[@id='small-searchterms']")
    await expect.soft(searchbox).toBeDisabled();
    await page.waitForTimeout(4000);

    const Male_Radio_Button=await page.locator("#gender-male");
    await Male_Radio_Button.click();
    await expect.soft(Male_Radio_Button).toBeChecked();

    const newsletter_checkbox=await page.locator("//input[@type='checkbox']");
    await expect.soft(newsletter_checkbox).toBeChecked();

    const regbutton=await page.locator("#register-button");
    await expect.soft(regbutton).toHaveAttribute('type','submit');
    await page.waitForTimeout(4000);

    await expect.soft(await page.locator(".page-title")).toHaveText("Register");
    await expect.soft(await page.locator(".page-title")).toContainText("Reg");

    await page.waitForTimeout(4000);
    const email=await page.locator("//input[@type='email'and @name='Email']");
    await email.fill("automation@gmail.com");
    await expect.soft(email).toHaveValue("automation@gmail.com");
    await page.waitForTimeout(2000);
    // await page.locator("//a[text()='Computers']").click();
    // await page.waitForTimeout(4000);
    // await page.goto("https://demo.nopcommerce.com/computers");

    // const options=await page.locator("//h2//a");
    // await expect(options).toHaveCount(3);
    // await page.waitForTimeout(4000);

})