const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 30000,
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: "https://sabesp-novaagv-hml.engdb.com.br/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
