import { test } from "@playwright/test";
import BaseTest from "./BaseTest";
import signinPage from "../pages/signinPage";
import homePage from "../pages/homePage";
import managePepolePage from "../pages/managePeoplePage"

test.setTimeout(600000)

const randomNum = Math.floor(Math.random() * 10000);
const randomNum2 = Math.floor(Math.random() * 100000000);
const randomNum3 = Math.floor(Math.random() * 1000);
const email = `roy${randomNum}@yopmail.com`;

test("TS2 - Add New Employee", async ({ page }) => {
    const base = new BaseTest();
    await base.setup();
    const signinP = new signinPage(base.page);
    const homeP = new homePage(base.page);
    const managePeople = new managePepolePage(base.page);

    // register as new user — use signinPage helper which already clicks the email input
    await signinP.Signin("wawoyep961@besenica.com", "HUG5dkQIJq@");
    
    await homeP.titleText.waitFor({ state: "visible" });
    await homeP.peopleBtn.waitFor({ state: "visible" });
    await homeP.peopleBtn.click();

    await managePeople.addNewEmployeeBtn.waitFor({state:"visible"});
    await managePeople.addNewEmployeeBtn.click();

    await managePeople.basic_info(`EMP${randomNum}`,`Sagor${randomNum3}`,"Kumar",`Saha${randomNum3}`,`${randomNum2}`,"active","06/04/2026");
    await managePeople.contact_info(`18${randomNum2}`,`sagor${randomNum}@gmail.com`,"New lack road","Bangla","khulna","magura","7600");
    await managePeople.employment_info("full time","Quality assu","SQA Engineer","06/04/2026","roxonor","morning");
    await managePeople.employer_tasks();
    await managePeople.joiner_tasks();
    await managePeople.onboarding_question();

    //await page.waitForTimeout(100000);
    
    await managePeople.txt.waitFor({state:"visible"});
    if (managePeople.txt.isVisible){
        console.log("\n Test passed: Added New Employee successfully...");
    } else {
        console.log("\n Test failed: Add New Employee unsuccessful...");
    }


});
