/* eslint-disable no-undef */
describe('Favorite Page Check-Up', () => {

  beforeEach(() => {
    cy.visit('/#/favorite');
  });

  it('Shows empty favorite page', () => {
    cy.get('h2').should('contain.text', 'Favorite Restaurants');
    cy.get('p').should('contain.text', 'You have no favorites yet');
  });

  it('Favorites a restaurant then unfavorite it', () => {
    cy.visit('/');
    cy.get('.item-title').first()
      .invoke('text')
      .as('name'); //saves restaurant name in alias

    cy.get('.item-title').first().click();

    cy.get('.favorite-btn').click();
    cy.get('#nav-drawer-btn').click();
    cy.get('nav').children().should('contain.text', 'Favorite').click();

    // Asserts there is a restaurant with that name after adding it to favorite
    cy.get('.item-title').first()
      .invoke('text')
      .then((text) => {
        cy.get('@name').should('contain', text);
      });

    cy.get('.item-title').first()
      .invoke('text')
      .as('favoritedRestaurantName');

    cy.get('.item-title').first().click();
    cy.get('.favorite-btn').click();

    cy.visit('/#/favorite');

    // Asserts there is no restaurant anymore after unfavoriting
    cy.get('p').should('contain.text', 'You have no favorites yet');
  });
});