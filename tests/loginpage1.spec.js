import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('vaibhav');
  await page.waitForTimeout(3000)
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('patilvc.456@gmail.com');
  await page.waitForTimeout(3000)
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('7066124578');
  await page.waitForTimeout(3000)
  await page.getByRole('textbox', { name: 'Address:' }).fill('jk socity  pune')
  await page.waitForTimeout(3000)
  await page.getByRole('radio', { name: 'Male', exact: true }).check()
  await page.waitForTimeout(3000)
  await page.getByRole('checkbox', { name: 'Monday' }).check();
  await page.waitForTimeout(3000)
  await page.getByRole('checkbox', { name: 'Tuesday' }).check();
  await page.waitForTimeout(3000)
  await page.getByLabel('Country:').selectOption('japan');
  await page.waitForTimeout(3000)
  await page.getByLabel('Colors:').selectOption('red');
  await page.waitForTimeout(3000)
  await page.getByLabel('Colors:').selectOption('blue');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Simple Alert' }).click();
  await page.waitForTimeout(3000)
});