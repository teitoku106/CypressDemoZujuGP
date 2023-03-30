const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    SIGNIN_URL: 'https://beta-app.zujudigital.com/#sign-in',
    TEAMS_URL: 'https://beta-app.zujudigital.com/reputation',
  },
  reporterOptions: {
    charts: true,
    overwrite: false,
    html: true,
    json: true,
    reportDir: 'cypress/reports',
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.spec.js',
  },
})
