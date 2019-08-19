describe('The Home Page', function() {
    it('successfully loads', function() {
        cy.visit('/')

        cy.contains('Log In').click()

        cy.url().should('include', '/login')

        cy.get('#email')
            .type('johnwsickels@gmail.com')
            .should('have.value', 'johnwsickels@gmail.com')

        cy.get('#password')
            .type('root123')
            .should('have.value', 'root123')

        cy.contains('Login').click()

        cy.url().should('include', '/dashboard')
    })
})