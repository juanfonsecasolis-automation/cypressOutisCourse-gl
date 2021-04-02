// 2021 Juan Fonseca

describe('My first simple test with cypress', () => {
    it('True should be true', () => {
        cy.visit('https://www.saucedemo.com/',{timeout: 10000})
    })

    it('should wait for 1 second',() => {
        cy.waitFor(1000)
    })

    it('Should check correct url',() => {
        cy.url().should('include','sauce')
    })

    it('Should enter invalid credentials',() => {
        cy.get('#user-name').type('admin')
        cy.get('#password').type('admin')   
        cy.get('#login-button').click()
    })

    it('Should display only one error message', () => {
        cy.get('h3')
            .contains('Epic sadface: Username and password do not match any user in this service')
            .its('length').should('eq',1)
    })
})