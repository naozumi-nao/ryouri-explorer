/* eslint-disable no-undef */
describe('Detail Page Check-Up', () => {
  const name = 'Cypress E2E bot';
  const review = 'This restaurant has decent food'; // change to make it unique when testing in succession

  beforeEach(() => {
    cy.visit('/');
    cy.get('.item-title').first().click();
  });

  it('Checks whether detail loads correctly', () => {
    cy.get('restaurant-detail').should('exist');
    cy.get('.categories').should('exist');
    cy.get('.menu').should('exist');
    cy.get('.foods').should('exist');
    cy.get('.drinks').should('exist');
    cy.get('.customer-reviews').should('exist');
    cy.get('#favorite-btn-container').should('exist');
  });

  it('Adds a review', () => {
    cy.get('#add-review-btn').click();
    cy.get('#review-form-name').type(`${name}`);
    cy.get('#review-form-description').type(`${review}`);
    cy.get('#review-form-submit-btn').click();

    cy.contains(`${name}`);
    cy.contains(`${review}`);
  });
});