import BasePage from "../pages/BasePage";

export default class homePage extends BasePage {

    constructor(page) {
        super(page);
    }

    // locators
    addNewStockBtn = this.page.getByRole('button', { name: 'Add New' });
    
    //stock create
    stockNameField = this.page.getByRole('textbox', { name: 'Stock Name *' });
    stockCataField = this.page.getByRole('combobox', { name: 'Stock Category *' });
    stockLocationField = this.page.getByRole('textbox', { name: 'Stock Location *' });
    stockInfoSaveBtn = this.page.getByRole('button', { name: 'Save' });
    searchField2 = this.page.getByRole('textbox', { name: 'Search by stock name or' });
    searchField = this.page.locator('.ant-input-affix-wrapper');
    actionBtn = this.page.locator('button.ant-dropdown-trigger.table-action-dropdown');
    stockName = this.page.locator('a[href*="inventory/product/list"]');
    addNewProductBtn = this.page.getByRole('dialog').getByRole('button', { name: 'Add New' });
    txt1 = this.page.getByText('Success', { exact: true });
    
    //product create
    productNameField = this.page.getByRole('textbox', { name: 'Product Name *' });
    productSerialField = this.page.getByRole('textbox', { name: 'Product Serial Number/SKU *' });
    vendorField = this.page.getByRole('combobox', { name: 'Vendor/Supplier Name *' });
    purchaseDateField = this.page.getByRole('textbox', { name: 'Purchase Date *' });
    priceField = this.page.getByRole('spinbutton', { name: 'Price' });
    productInfoSaveBtn = this.page.getByRole('button', { name: 'Save' });
    productName = this.page.locator('a[href*="/inventory/product/form/"]');
    addNewMaintenanceBtn = this.page.getByRole('button', { name: 'Add New' }).nth(2);

    //Maintenance create
    searchField3 = this.page.locator('div:nth-child(2) > div > div > .ant-row.ant-row-no-wrap > .ant-col.sc-dlCdup > .sc-iMqdDo.eQjzjd > .inner-component-spin-nested-loading > .inner-component-spin-container > div > .sc-jUkaYT > .sc-duGFKm > .sc-ivJkgj > .component-header-wrapper > div:nth-child(2) > .sc-kwyjwL > .ant-input-affix-wrapper');
    searchField4 = this.page.getByRole('textbox', { name: 'Search by product name,' });
    vendorField2 = this.page.locator("//input[@id='vendor_option_id']");
    statusField = this.page.locator("//input[@id='status']");
    costField = this.page.locator("//input[@id='cost']");
    IssueField = this.page.locator("//textarea[@id='problem']");
    MaintenanceSaveBtn = this.page.getByRole('button', { name: 'Save' });


    async stock_create(sname,scate,slocation){
        await this.addNewStockBtn.waitFor({state:"visible"});
        await this.addNewStockBtn.click();
        await this.stockNameField.waitFor({state:"visible"});
        await this.stockNameField.fill(sname);
        await this.stockCataField.fill(scate);
        await this.page.waitForTimeout(8000);
        await this.stockCataField.press("Enter");
        await this.stockLocationField.fill(slocation);
        await this.stockInfoSaveBtn.click();
        //await this.page.waitForTimeout(10000);
    }

    async product_create(sname,pname,sku,vendor,pdate,price){
        await this.searchField.waitFor({state:"visible"});
        await this.searchField.click();
        await this.page.waitForTimeout(2000);
        await this.searchField2.fill(sname);
        await this.page.waitForTimeout(4000);
        await this.stockName.waitFor({state:"visible"});
        await this.stockName.click();
        await this.addNewProductBtn.waitFor({state:"visible"});
        await this.addNewProductBtn.click();
        await this.productNameField.waitFor({state:"visible"});
        await this.productNameField.fill(pname);
        await this.productSerialField.fill(sku);
        await this.vendorField.fill(vendor);
        await this.page.waitForTimeout(4000);
        await this.vendorField.press("Enter");
        await this.purchaseDateField.fill(pdate);
        await this.page.waitForTimeout(3000);
        await this.purchaseDateField.press("Enter");
        await this.priceField.fill(price);
        await this.productInfoSaveBtn.click();

    }

    async maintenance_create(pname, vendor, status_, price, issue) {
        await this.searchField3.waitFor({ state: "visible" });
        await this.searchField3.click();
        await this.page.waitForTimeout(2000);
        await this.searchField4.fill(pname);
        await this.page.waitForTimeout(4000);
        await this.productName.waitFor({ state: "visible" });
        await this.productName.click();
        await this.page.waitForTimeout(4000);
        await this.addNewMaintenanceBtn.waitFor({ state: "visible" });
        await this.addNewMaintenanceBtn.click();
        await this.vendorField2.waitFor({ state: "visible" });
        await this.vendorField2.fill(vendor);
        await this.page.waitForTimeout(4000);
        await this.vendorField2.press("Enter");
        await this.page.waitForTimeout(4000);
        await this.statusField.fill(status_);
        await this.page.waitForTimeout(4000);
        await this.statusField.press("Enter");
        await this.costField.fill(price);
        await this.IssueField.fill(issue);
        await this.MaintenanceSaveBtn.click();

    }



}