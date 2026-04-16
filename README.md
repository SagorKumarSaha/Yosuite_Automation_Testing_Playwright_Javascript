# Yosuite Automation Testing Using Playwright (JavaScript)

## Overview
This repository contains an automation test suite for validating **3 critical business flows**:

- User Login  
- Add New Employee  
- Stock Creation → Product Creation → Product Maintenance  

The test suite is designed using **Playwright with JavaScript**, ensuring reliable end-to-end testing with scalable structure and maintainable code.

---

## Features
- User Login Automation
- Employee Creation Flow Validation
- Stock Management Testing
- Product Creation & Maintenance Automation
- Form Validation & Error Handling Checks
- End-to-End Business Flow Coverage
- Scalable Test Structure (POM supported)
- Cross-browser test execution support

---

## Prerequisites
Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v18 or higher)
- npm or yarn
- Git
- Visual Studio Code (recommended)

---

## Setup Instructions

### 1. Clone the Repository
git clone "https://github.com/SagorKumarSaha/Yosuite_Automation_Testing_Playwright_Javascript.git" <br>
cd Yosuite_Automation_Testing_Playwright_Javascript

### 2. Install Dependencies
npm install

### 3. Install Playwright Browsers
npx playwright install

----

## Running Tests
### 1. Run All Tests
npx playwright test
### 1. Run All Tests using 1 worker for sequential run (recommended)
npx playwright test --project=chromium --workers=1
### 2. Run Tests in Headed Mode
npx playwright test --headed
### 3. Run Specific Test File
npx playwright test tests/Stock_creation.spec.js
### 4. Run in Specific Browser
npx playwright test --project=chromium <br>
npx playwright test --project=firefox <br>
npx playwright test --project=webkit

----

## Reporting
### To generate and view the HTML report:
npx playwright show-report
### Reports are automatically created under:
/playwright-report

## CI/CD with GitHub Actions
This repository includes a GitHub Actions workflow to run the tests automatically on every push or pull request to the main branches.
