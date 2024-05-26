describe('Searches for a task, finds it. Searches for another task - doesnt match any tasks for the week', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Filters tasks based on search input', () => {
    const correctText = 'plugga';
    const incorrectText = 'tvätta bilen';

    cy.get('[data-cy="search-input"]').type(correctText);

    cy.get('[data-cy="prio-item"]').should('have.length', 1);

    cy.get('[data-cy="search-input"]').clear();

    cy.get('[data-cy="search-input"]').type(incorrectText);

    cy.get('[data-cy="prio-item"]').should('not.exist');

    cy.get('[data-cy="search-input"]').clear();

    cy.get('[data-cy="prio-item"]').should('have.length.gt', 0);
  });
});
