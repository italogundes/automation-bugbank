/// <reference types="Cypress" />

describe('Transferência entre contas', () => {
  beforeEach(() => {
    localStorage.setItem(
      'italo.gundes@gmail.com',
      JSON.stringify({
        name: 'Ítalo 1',
        email: 'italo.gundes@gmail.com',
        password: 'im159',
        accountNumber: '481-3',
        balance: 1000,
        logged: true,
      }),
    );
    localStorage.setItem(
      'italo.costa@gmail.com',
      JSON.stringify({
        name: 'Ítalo 2',
        email: 'italo.costa@gmail.com',
        password: 'im159',
        accountNumber: '426-6',
        balance: 0,
        logged: false,
      }),
    );
    cy.visit('https://bugbank.netlify.app/');

    cy.get('input[name="email"]').first().type('italo.gundes@gmail.com');
    cy.get('input[name="password"]').first().type('im159');

    cy.get('button').contains('Acessar').click();

    cy.url().should('include', '/home');
  });

  it('TransferÊncia com valor positivo', () => {
    cy.get('#btn-TRANSFERÊNCIA').click();

    cy.url().should('include', '/transfer');
    cy.get('form').should('be.visible');

    cy.get('input[name="accountNumber"]')
      .type('426')
      .should('have.value', '426');
    cy.get('input[name="digit"]').type('6').should('have.value', '6');
    cy.get('input[name="transferValue"]').type(200).should('have.value', 200);
    cy.get('input[name="description"]')
      .type('Internet')
      .should('have.value', 'Internet');

    cy.get('button').contains('Transferir').click();
  });
});
