const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './test/playwright', // Dossier contenant les tests
    timeout: 30000,
    use: {
        baseURL: 'http://localhost:3030', // URL de base pour les tests
        headless: true, // Exécution en mode headless
        browserName: 'chromium',
    },
    reporter: [
        ['html', { outputFolder: 'playwright-report' }], // Rapport HTML généré
        ['@estruyf/github-actions-reporter', {
            title: 'Résultats des tests Playwright',
            useDetails: true,
            showError: true,
        }]
    ],
});
