import { API } from '../../src/config/api.config';
describe('Cv List', () => {
  it('Visits the initial project page', () => {
    cy.intercept(API.cv, {
      fixture: 'cvs',
    });
    cy.visit('/cv');
    const listCvs = cy.get(`[data-testid="listcvs"]`);
    console.log(listCvs);

    const juniors = listCvs.first();
    juniors.should('have.length', 1);
    juniors.contains('Skander');
    const seniors = listCvs.last();
    seniors.should('have.length', 1);
    /*     seniors.first().contains('Aymen'); */
    const cvCard = cy.get(`[data-testid="cv-card"]`).should('not.exist');
  });
});
