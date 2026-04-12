import BasePage from '../pages/BasePage';

export default class signinPage extends BasePage {

    constructor(page) {
        super(page);
    }

    // locators
    emailInput = this.page.getByPlaceholder('example@email.com');
    passwordInput = this.page.getByPlaceholder('Enter your password');

    signinBtn = this.page.getByText('Sign in', { exact: true });

    async Signin(username, password) {
        await this.emailInput.waitFor({ state: "visible" });
        //await this.emailInput.click();
        await this.emailInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signinBtn.click();
    }
}