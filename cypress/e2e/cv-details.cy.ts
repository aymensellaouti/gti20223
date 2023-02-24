import { API } from '../../src/config/api.config';
describe('Cv-Details', () => {
  it('should show the first element card when we click on it', () => {
    cy.intercept(API.cv, { fixture: 'cvs.json' });
    cy.visit('/cv');
    /* list-cv */
    const listJuniors = cy.get('[data-testid=listcvs]').first();
    listJuniors.first().click();
    cy.get('[data-testid=cv-card]');
    /*     cy.get('[data-testid=cv-card-name]').contains('Skander Sellaouti');
     */
  });
  it('should navigate to the first element detail when we click on the detail button ', () => {
    cy.intercept(API.cv, { fixture: 'cvs.json' });
    cy.visit('/cv');
    /* list-cv */
    const listJuniors = cy.get('[data-testid=listcvs]').first();
    listJuniors.first().click();
    cy.intercept(API.cv + 2, { fixture: 'cv2.json' });
    cy.get('[data-testid=cv-card-details-btn]').click({ force: true });
    cy.location().should((location) =>
      expect(location.pathname).to.equal('/cv/2')
    );
    cy.get('[data-testid=cv-name]').contains('Sellaouti');
    cy.get('[data-testid=cv-firstname]').contains('Skander');
  });
});
