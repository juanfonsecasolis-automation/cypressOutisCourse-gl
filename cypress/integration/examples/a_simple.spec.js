// 2021 Juan Fonseca

describe('Verify system handles invalid credentials	', () => {
    it('Visit the sauce demo webpage', () => {
        cy.visit('https://www.saucedemo.com/',{timeout: 10000})
    })

    it('Should wait for 1 second',() => {
        cy.waitFor(1000)
    })

    it('Should enter invalid credentials',() => {
        cy.get('#user-name').type('admin')
        cy.get('#password').type('admin')   
        cy.get('#login-button').click()
    })

    it('Should display only one error message', () => {
        cy.get('h3')
            .contains('Epic sadface: Username and password do not match any user in this service')
    })
})

describe('Verify system handles valid credentials',() => {
    it('Visit the sauce demo webpage', () => {
        cy.visit('https://www.saucedemo.com/',{timeout: 10000})

    })
    
    it('Should enter valid credentials',() => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')   
        cy.get('#login-button').click()
    })

    it('Should check correct url',() => {
        cy.url().should('include','/inventory.html')
    })

    it('Should count a maximum of 6 items displayed',() => {
        cy.get('.inventory_item').its('length').should('eq',6)
    })

})