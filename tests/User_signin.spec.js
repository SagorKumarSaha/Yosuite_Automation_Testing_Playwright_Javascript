import { test } from "@playwright/test";
import BaseTest from "./BaseTest";
import signinPage from "../pages/signinPage";
import homePage from "../pages/homePage";

test.setTimeout(100000)
test("TS1 - End-to-End Checkout Flow", async ({ page }) => {
    const base = new BaseTest();
    await base.setup();
    const signinP = new signinPage(base.page);
    const homeP = new homePage(base.page);

    // register as new user — use signinPage helper which already clicks the email input
    await signinP.Signin("wawoyep961@besenica.com", "HUG5dkQIJq@");
    await homeP.titleText.waitFor({ state: "visible" });

    if (await homeP.titleText.innerText() === "Hi, Toliver") {
        console.log("\n Test passed: Signed in successfully...");
    } else {
        console.log("\n Test failed: Signed in unsuccessful...");
    }

});