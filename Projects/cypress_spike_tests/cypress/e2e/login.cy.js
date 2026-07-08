describe('login Page', () => {
    it('should redirect to the Success Page', () => {
      cy.visit('https://cypress-spike.onrender.com/')
      cy.get('#sign-in').click();
      cy.url().should('match', /\/success$/)
    })

    it('should redirect to the Gg Page', () => {
      cy.visit('https://cypress-spike.onrender.com/')
      cy.get('#gg').click();
      cy.url().should('match', /\/google$/)
    })
  })