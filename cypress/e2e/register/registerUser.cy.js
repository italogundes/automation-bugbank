/// <reference types="Cypress" />

describe('Registro de usuário', () => {
  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app/');

    cy.get('.ihdmxA').as('btnRegister');
    cy.get('@btnRegister').click();
  });

  it('Registro de usuário com sucesso', () => {
    const inputsForm = {
      email: cy.get('input[name="email"]').last(),
      name: cy.get('input[name="name"]'),
      password: cy.get('input[name="password"]').last(),
      passwordConfirmation: cy.get('input[name=passwordConfirmation]'),
    };

    inputsForm.email
      .type('testeuser@teste.com', { force: true })
      .should('have.value', 'testeuser@teste.com');
    inputsForm.name
      .type('Usuário Teste 1', { force: true })
      .should('have.value', 'Usuário Teste 1');
    inputsForm.password
      .type('1234', { force: true })
      .should('have.value', '1234');
    inputsForm.passwordConfirmation
      .type('1234', { force: true })
      .should('have.value', '1234');

    cy.get('#toggleAddBalance').click({ force: true });

    cy.contains('Cadastrar').click({ force: true });

    cy.get('#modalText').should('be.visible').contains('criada com sucesso');
  });
});
