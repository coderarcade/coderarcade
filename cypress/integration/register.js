describe('The Home Page', function () {
    it('successfully loads', function () {
        cy.visit('/')

        cy.contains('Register').click()

        cy.url().should('include', '/register')

        cy.get('#name')
            .type('Leeroy Jenkins')
            .should('have.value', 'Leeroy Jenkins')

        cy.get('#email')
            .type('leeroyjenkins.com')
            .should('have.value', 'leeroy@jenkins.com')

        cy.get('#password')
            .type('password')
            .should('have.value', 'password')

        cy.get('#password2')
            .type('password')
            .should('have.value', 'password')
    })
})