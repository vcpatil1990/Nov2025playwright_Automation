const { test, expect } = require('@playwright/test');

import { loginpage } from '../pages/loginpage';
import { homepage } from '../pages/homepage';
import fs from "fs";
import { parse } from "csv-parse/sync"
const records = parse(fs.readFileSync("tests/datasheet/testdata.csv"), {
    columns: true,
    skip_empty_lines: true,
})
for (const record of records) {
    test('first POM Test' + record.id, async ({ page }) => {
        const login = new loginpage(page);
        await login.gotologinPage();
        await login.login(record.username, record.Password);
        await page.waitForTimeout(4000);
  
        const home = new homepage(page);
        home.checkHeading(record.heading)
        home.checkheaders();
        await page.waitForTimeout(4000);
    })
}