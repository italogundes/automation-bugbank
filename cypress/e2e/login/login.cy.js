/// <reference types="Cypress" />

const inputsForm = {
  email: () => cy.get('input[name="email"]').first(),
  password: () => cy.get('input[name="password"]').first(),
};

describe('Login do sistema', () => {
  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app/');
  });

  it('Login com Sucesso', () => {
    inputsForm
      .email()
      .type('testeuser@teste.com')
      .should('have.value', 'testeuser@teste.com');
    inputsForm.password().type('1234').should('have.value', '1234');

    cy.contains('Acessar').click();

    cy.url().should('include', '/home');
  });

  it.only('Login Incorreto', () => {
    inputsForm
      .email()
      .type('testeuser@teste.com')
      .should('have.value', 'testeuser@teste.com');
    inputsForm.password().type('12345').should('have.value', '12345');

    cy.contains('Acessar').click();

    cy.get('.styles__ContainerContent-sc-8zteav-1')
      .should('be.visible')
      .contains('Usuário ou senha inválido');
  });
});
