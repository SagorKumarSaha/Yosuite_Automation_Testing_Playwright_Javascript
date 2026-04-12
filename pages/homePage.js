import BasePage from "../pages/BasePage";

export default class homePage extends BasePage {

    constructor(page) {
        super(page);
    }

    // locators
    titleText = this.page.getByRole('heading', { name: 'Hi, Toliver' });
    peopleBtn = this.page.locator('a[href="/page/modules/people/employee/list-active?include%5B0%5D=status%3Aactive"]');
    inventoryBtn = this.page.locator('a[href="/page/modules/inventory/stock/list"]');

    
}