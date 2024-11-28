/// <reference types="Cypress" />
const element = require('../../fixtures/registerUser.json');

describe('Registro de usuário', () => {
  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app/');

    cy.get('.ihdmxA').as('btnRegister');
    cy.get('@btnRegister').click();
  });

  it('Registro de usuário com sucesso', () => {
    cy.get(element.input_email)
      .last()
      .type(Cypress.env('EMAIL'), { force: true })
      .should('have.value', Cypress.env('EMAIL'));

    cy.get(element.input_name)
      .type(Cypress.env('NOME_USUARIO'), { force: true })
      .should('have.value', Cypress.env('NOME_USUARIO'));

    cy.get(element.input_password)
      .last()
      .type(Cypress.env('PASSWORD'), { force: true })
      .should('have.value', Cypress.env('PASSWORD'));

    cy.get(element.input_password_confirmation)
      .type(Cypress.env('PASSWORD'), { force: true })
      .should('have.value', Cypress.env('PASSWORD'));

    cy.get('#toggleAddBalance').click({ force: true });

    cy.contains('Cadastrar').click({ force: true });

    cy.get('#modalText').should('be.visible').contains('criada com sucesso');
  });

  it('Registro de usuário sem preenchimento de campos obrigatórios', () => {
    cy.get(element.input_name)
      .type(Cypress.env('NOME_USUARIO'), { force: true })
      .should('have.value', Cypress.env('NOME_USUARIO'));

    cy.get('#toggleAddBalance').click({ force: true });

    cy.contains('Cadastrar').click({ force: true });

    cy.contains('É campo obrigatório').should(
      'have.css',
      'visibility',
      'visible',
    );
  });

  it('Registro de usuário com formato de e-mail invalido', () => {
    cy.get(element.input_email)
      .last()
      .type(Cypress.env('EMAIL_INVALIDO'), { force: true })
      .should('have.value', Cypress.env('EMAIL_INVALIDO'));

    cy.get(element.input_name)
      .type(Cypress.env('NOME_USUARIO'), { force: true })
      .should('have.value', Cypress.env('NOME_USUARIO'));

    cy.get(element.input_password)
      .last()
      .type(Cypress.env('PASSWORD'), { force: true })
      .should('have.value', Cypress.env('PASSWORD'));

    cy.get(element.input_password_confirmation)
      .type(Cypress.env('PASSWORD'), { force: true })
      .should('have.value', Cypress.env('PASSWORD'));

    cy.contains('Cadastrar').click({ force: true });

    cy.contains('Formato inválido').should('have.css', 'visibility', 'visible');
  });
});
