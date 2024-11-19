/* eslint-disable no-undef */
describe('Home Page Check-Up', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Checks whether homepage loads correctly', () => {
    cy.get('app-bar').should('exist');
    cy.get('hero-banner').should('exist');
    cy.get('why-us').should('exist');
    cy.get('.restaurants-list').should('exist');
    cy.get('footer-bar').should('exist');
  });

  it('Checks if navigation works', () => {
    cy.get('#nav-drawer-btn').click();
    cy.get('nav').children().should('contain.text', 'Favorite').click();
    cy.get('h2').should('contain.text', 'Favorite Restaurants');
  });

  it('Goes to detail page', () => {
    cy.contains('Expert Reviews, Curated Recommendations');
    cy.get('.item-title').first().click();
    cy.contains('Menu');
  });

});