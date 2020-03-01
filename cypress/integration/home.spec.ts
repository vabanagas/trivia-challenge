describe('home', () => {
  it('shows the title', () => {
    cy.visit('/')
    cy.get('[data-cy="home-title"]')
      .should('be.visible')
      .should('contain', 'Welcome to the Trivia Challenge!')
  })
})
