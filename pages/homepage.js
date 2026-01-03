const {  expect } = require('@playwright/test');
exports.homepage =
    class homepage {

        constructor(page) {
            this.page = page;
            this.headers = "//div[@id='menu-primary']//li";
            this.heading = page.locator("//h1[text()='Logged In Successfully']");

        }
        async checkheaders() {
            const options = await this.page.$$(this.headers);
            for (const header of options) {
                console.log(await header.textContent());
            }

        }
        async checkHeading(expectedText) {
                     await expect(this.heading).toHaveText(expectedText)

        }
    }