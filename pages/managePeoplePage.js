import BasePage from "../pages/BasePage";

export default class homePage extends BasePage {

    constructor(page) {
        super(page);
    }

    // locators
    addNewEmployeeBtn = this.page.getByRole('button', { name: 'Add New Employee' });
    
    // Add new employee informations
    //Basic info
    staffIdField = this.page.locator("//input[@id='staff_id']");
    firstNameField = this.page.locator("//input[@id='first_name']");
    middleNameField = this.page.locator("//input[@id='middle_name']");
    lastNameField = this.page.locator("//input[@id='last_name']");
    NIDfield = this.page.locator("//input[@id='social_security_no']");
    selectStatus = this.page.locator("//input[@id='employee_status_option_id']");
    selectDOB = this.page.locator("//input[@id='date_of_birth']");
    nextBtn = this.page.getByText('Next', { exact: true });

    //contact info
    phoneField = this.page.getByRole('textbox', { name: 'Personal Phone' });
    emailField = this.page.getByRole('textbox', { name: 'Official Email *' });
    street1Field = this.page.locator("//input[@id='address_group_present_address_street_1']");
    countryField = this.page.locator("//input[@id='address_group_present_address_country']");
    divisionField = this.page.getByRole('combobox', { name: 'Division *' });
    cityField = this.page.getByRole('combobox', { name: 'City *' });
    zipField = this.page.locator('#address_group_present_address_zip');
    checkboxField = this.page.getByRole('checkbox', { name: 'Same as Present Address' });
    nextBtn2 = this.page.getByRole('button', { name: 'Next', exact: true });

    //employment info
    jobtypeField = this.page.getByRole('combobox', { name: 'Job Type *' });
    departmentField = this.page.getByRole('combobox', { name: 'Department *' });
    jobtitleField = this.page.getByRole('combobox', { name: 'Job Title *' });
    joiningDateField = this.page.getByRole('textbox', { name: 'Joining Date *' });
    jobLocationField = this.page.getByRole('combobox', { name: 'Job Location *' });
    shiftField = this.page.getByRole('combobox', { name: 'Shift *' });

    //employer tasks
    //joiner tasks
    //onboarding question
    newjoinerQus = this.page.getByRole('button', { name: 'New Joiner Questions', exact: true }).getByLabel('', { exact: true });
    submitBtn = this.page.getByRole('button', { name: 'Submit', exact: true });

    //confirm message
    txt = this.page.getByRole('heading', { name: 'Success' });

    async basic_info(staff, first, middle, last, nid, status, dob) {
        await this.staffIdField.waitFor({ state: "visible" });
        await this.page.waitForTimeout(3000);
        await this.staffIdField.fill(staff);
        await this.firstNameField.fill(first);
        await this.middleNameField.fill(middle);
        await this.lastNameField.fill(last);
        await this.NIDfield.fill(nid);
        await this.selectStatus.fill(status);
        await this.page.waitForTimeout(2000);
        await this.selectStatus.press("Enter");
        await this.selectDOB.fill(dob);
        await this.page.waitForTimeout(2000);
        await this.selectDOB.press("Enter");
        await this.nextBtn.click();
        await this.page.waitForTimeout(3000);
    }


    async contact_info(Phone, email, street, country, division, city, zip) {
        await this.phoneField.waitFor({ state: "visible" });
        await this.page.waitForTimeout(3000);
        await this.phoneField.click();
        await this.page.waitForTimeout(3000);
        await this.phoneField.fill(Phone);
        await this.emailField.fill(email);
        await this.street1Field.fill(street);
        await this.countryField.fill(country);
        await this.page.waitForTimeout(2000);
        await this.countryField.press("Enter");
        await this.divisionField.fill(division);
        await this.page.waitForTimeout(2000);
        await this.divisionField.press("Enter");
        await this.cityField.fill(city);
        await this.page.waitForTimeout(2000);
        await this.cityField.press("Enter");
        await this.zipField.fill(zip);
        await this.checkboxField.click();
        await this.nextBtn2.click();
        await this.page.waitForTimeout(3000);
    }


    async employment_info(jobtype, depart, title, join, loca, shift) {
        await this.jobtypeField.waitFor({ state: "visible" });
        await this.page.waitForTimeout(3000);
        await this.jobtypeField.fill(jobtype);
        await this.page.waitForTimeout(2000);
        await this.jobtypeField.press("Enter");
        await this.departmentField.fill(depart);
        await this.page.waitForTimeout(2000);
        await this.departmentField.press("Enter");
        await this.jobtitleField.fill(title);
        await this.page.waitForTimeout(2000);
        await this.jobtitleField.press("Enter");
        await this.joiningDateField.fill(join);
        await this.page.waitForTimeout(2000);
        await this.joiningDateField.press("Enter");
        await this.jobLocationField.fill(loca);
        await this.page.waitForTimeout(2000);
        await this.jobLocationField.press("Enter");
        await this.shiftField.fill(shift);
        await this.page.waitForTimeout(2000);
        await this.shiftField.press("Enter");
        await this.nextBtn2.click();
        await this.page.waitForTimeout(3000);
    }


    async employer_tasks(){
        await this.nextBtn2.waitFor({state:"visible"});
        await this.nextBtn2.click();
        await this.page.waitForTimeout(3000);
    }

    async joiner_tasks() {
        await this.nextBtn2.waitFor({ state: "visible" });
        await this.nextBtn2.click();
        await this.page.waitForTimeout(3000);
    }

    async onboarding_question() {
        await this.submitBtn.waitFor({ state: "visible" });
        await this.submitBtn.click();
    }



}