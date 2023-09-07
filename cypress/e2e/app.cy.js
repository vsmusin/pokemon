describe('Navigation', () => {
  it('should navigate to the pikachu page', () => {
    cy.visit('http://localhost:3000/')

    cy.get('a[href*="type/13"]').click()

    cy.get('a[href*="pokemon/25"]').click()

    cy.get('h1').contains('pikachu')
  })
})
