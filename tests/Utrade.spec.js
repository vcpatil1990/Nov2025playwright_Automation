const { test, expect } = require('@playwright/test');

import { utradelogin } from '../pages/utradelogin';

test.describe('Share India Login Page', () => {
    let login;
    test.beforeEach(async ({ page }) => {
        login = new utradelogin(page);
        login.navigate();
        await page.waitForTimeout(4000);
    })
    test('validate all UI Elements ', async () => {
        await login.verifyIPOtext();
        await login.verifyAllLinks();
    })
    test('Invalid UCC number', async ({page}) => {
        await login.addUCC("1244567");
        await page.waitForTimeout(4000);
        await login.clicklogin();
    })
})