/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(/^que o cliente realizou o login$/, () => {
  cy.visit('https://sabesp-novaagv-hml.engdb.com.br/')
  cy.get('#fechaPop > .mat-button-wrapper > .mat-icon').click()
  cy.get('.botao-aceitar').click()
});


When(/^inseriu CPF e senha$/, () => {
	cy.get('.mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color').click()
});

Then(/^O sistema deverá direcionar para home logada$/, () => {
	return true;
});
