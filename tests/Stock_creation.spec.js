import { test } from "@playwright/test";
import BaseTest from "./BaseTest";
import signinPage from "../pages/signinPage";
import homePage from "../pages/homePage";
import inventoryPage from "../pages/inventoryPage"

test.setTimeout(600000)

const randomNum = Math.floor(Math.random() * 10000);
const randomNum2 = Math.floor(Math.random() * 1000000);

test("TS3 - Stock Creation> Product Creation> Product Maintenance", async ({ page }) => {
    const base = new BaseTest();
    await base.setup();
    const signinP = new signinPage(base.page);
    const homeP = new homePage(base.page);
    const invenp = new inventoryPage(base.page);

    // register as new user — use signinPage helper which already clicks the email input
    await signinP.Signin("wawoyep961@besenica.com", "HUG5dkQIJq@");
    
    await homeP.titleText.waitFor({ state: "visible" });
    await homeP.inventoryBtn.waitFor({ state: "visible" });
    await homeP.inventoryBtn.click();

    const stock_name = `HP Laptop - ${randomNum}`;
    await invenp.stock_create(stock_name,"electro","Khulna, Bangladesh");

    await invenp.txt1.waitFor({ state: "visible" });
    if (invenp.txt1.isVisible) {
        console.log("\n Stock created successfully...");
    } else {
        console.log("\n Stock creation failed...");
    }

    await page.waitForTimeout(10000);

    await invenp.product_create(stock_name,`HP Pavilion - ${randomNum}`,`USA-HP-${randomNum2}`,"apple","06/04/2026","870");
    await invenp.txt1.waitFor({ state: "visible" });
    if (invenp.txt1.isVisible) {
        console.log("\n Product created successfully...");
    } else {
        console.log("\n Product creation failed...");
    }

    await page.waitForTimeout(10000);

    await invenp.maintenance_create(`HP Pavilion - ${randomNum}`, "apple", "note", "111", "Ram issue");
    await invenp.txt1.waitFor({ state: "visible" });
    if (invenp.txt1.isVisible) {
        console.log("\n Product maintenance created successfully...");
        console.log("\n Test Passed...")
    } else {
        console.log("\n Product maintenance creation failed...");
        console.log("\n Test Failed...")
    }
    
});
