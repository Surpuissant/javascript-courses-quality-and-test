const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './test/playwright',
    timeout: 30000,
    use: {
        baseURL: 'http://localhost:3030',
        headless: true, 
        browserName: 'chromium',
    },
    reporter: [['html', { outputFolder: 'playwright-report' }]], 
});
