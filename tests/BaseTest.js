// tests/BaseTest.js
import { chromium, firefox, webkit } from '@playwright/test';

export default class BaseTest {
    constructor() {
        this.browser = null;
        this.context = null;
        this.page = null;
    }

    async setup() {
        this.browser = await chromium.launch({ headless: false });

        this.context = await this.browser.newContext({
            permissions: ['clipboard-read', 'clipboard-write']
        });

        this.page = await this.context.newPage();

        await this.page.setViewportSize({ width: 1168, height: 568 });

        await this.page.goto("https://microsoft.yosuite.net/signin/");
    }

    // async tearDown() {
    //   await this.page.close();
    //   await this.context.close();
    //   await this.browser.close();
    // }
}