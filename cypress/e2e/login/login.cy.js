/// <reference types="Cypress" />
const element = require('../../fixtures/login.json');

describe('Login do sistema', () => {
  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app/');
  });

  it('Login com Sucesso', () => {
    cy.get(element.input_email)
      .first()
      .type(Cypress.env('EMAIL'))
      .should('have.value', Cypress.env('EMAIL'));
    cy.get(element.input_password)
      .first()
      .type(Cypress.env('PASSWORD'))
      .should('have.value', Cypress.env('PASSWORD'));

    cy.contains('Acessar').click();
  });

  it('Login Incorreto', () => {
    cy.get(element.input_email)
      .first()
      .type(Cypress.env('EMAIL'))
      .should('have.value', Cypress.env('EMAIL'));
    cy.get(element.input_password)
      .first()
      .type(Cypress.env('PASSWORD_INVALIDO'))
      .should('have.value', Cypress.env('PASSWORD_INVALIDO'));

    cy.contains('Acessar').click();

    cy.get('.styles__ContainerContent-sc-8zteav-1')
      .should('be.visible')
      .contains('Usuário ou senha inválido');
  });
});
