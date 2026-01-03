exports.loginpage =
    class loginpage {
        constructor(page) {
            this.page = page;
            this.username = "//input[@name='username']";
            this.password = "//input[@name='password']";
            this.submit = "//button[text()='Submit']";

        }
        async gotologinPage() {
            await this.page.goto("https://practicetestautomation.com/practice-test-login/")

        }
        async login(username, password) {
            await this.page.locator(this.username).fill(username);
            await this.page.locator(this.password).fill(password);
            await this.page.locator(this.submit).click();
        }
    }