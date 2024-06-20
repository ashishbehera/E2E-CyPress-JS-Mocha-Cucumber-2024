const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
      "reporterEnabled": "mochawesome",
      "mochawesomeReporterOptions": {
          "reportDir": "cypress/reports/mocha",
          "quite": true,
          "overwrite": false,
          "html": false,
          "json": true
      }
  },
  env: {
    url: 'https://rahulshettyacademy.com',
  },
  retries: {
    runMode: 1,
  },
  projectId: 'si4v16',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/examples/*.js',
  },
})
