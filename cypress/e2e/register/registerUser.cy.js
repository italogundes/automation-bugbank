/// <reference types="Cypress" />

const inputsForm = {
  email: () => cy.get('input[name="email"]').last(),
  name: () => cy.get('input[name="name"]'),
  password: () => cy.get('input[name="password"]').last(),
  passwordConfirmation: () => cy.get('input[name=passwordConfirmation]'),
};

describe('Registro de usuário', () => {
  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app/');

    cy.get('.ihdmxA').as('btnRegister');
    cy.get('@btnRegister').click();
  });

  it('Registro de usuário com sucesso', () => {
    inputsForm
      .email()
      .type('testeuser@teste.com', { force: true })
      .should('have.value', 'testeuser@teste.com');
    inputsForm
      .name()
      .type('Usuário Teste 1', { force: true })
      .should('have.value', 'Usuário Teste 1');
    inputsForm
      .password()
      .type('1234', { force: true })
      .should('have.value', '1234');
    inputsForm
      .passwordConfirmation()
      .type('1234', { force: true })
      .should('have.value', '1234');

    cy.get('#toggleAddBalance').click({ force: true });

    cy.contains('Cadastrar').click({ force: true });

    cy.get('#modalText').should('be.visible').contains('criada com sucesso');
  });

  it('Registro de usuário sem preenchimento de campos obrigatórios', () => {
    inputsForm
      .name()
      .type('Usuário Teste 2', { force: true })
      .should('have.value', 'Usuário Teste 2');

    cy.get('#toggleAddBalance').click({ force: true });

    cy.contains('Cadastrar').click({ force: true });

    cy.contains('É campo obrigatório').should(
      'have.css',
      'visibility',
      'visible',
    );
  });

  it('Registro de usuário com formato de e-mail invalido', () => {
    inputsForm
      .email()
      .type('testeuser.com', { force: true })
      .should('have.value', 'testeuser.com');
    inputsForm
      .name()
      .type('Usuário Teste 3', { force: true })
      .should('have.value', 'Usuário Teste 3');
    inputsForm
      .password()
      .type('12345', { force: true })
      .should('have.value', '12345');
    inputsForm
      .passwordConfirmation()
      .type('12345', { force: true })
      .should('have.value', '12345');

    cy.contains('Cadastrar').click({ force: true });

    cy.contains('Formato inválido').should('have.css', 'visibility', 'visible');
  });
});
