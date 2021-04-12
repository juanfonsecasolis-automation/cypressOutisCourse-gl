// 2021 Juan Fonseca

describe('Verify system handles invalid credentials', () => {

    it('should visit the webpage and enter invalid credentials',() => {
        cy.viewport('samsung-note9')    // simulate a mobile phone view
        cy.visit('/')
        cy.fixture('user').then(user => {
            const username = user.invalidUsername
            const password = user.invalidPassword
            cy.get('#user-name').type(username)
            cy.get('#password').type(password)   
            cy.get('#login-button').click()
        })
    })

    it('Should display only one error message', () => {
        cy.get('h3')
            .contains('Epic sadface: Username and password do not match any user in this service')
    })
})

describe('Verify system handles valid credentials',() => {
    
    it('should visit the webpage and enter valid credentials',() => {
        cy.visit('/')
        cy.fixture('user').then(user => {
            const username = user.validUsername
            const password = user.validPassword
            cy.get('#user-name').type(username)
            cy.get('#password').type(password)   
            cy.get('#login-button').click()
        })
    })

    it('should check correct url',() => {
        cy.log('Before reload')
        cy.url().should('include','/inventory.html')
    })

    it('should count a maximum of 6 items displayed',() => {
        cy.get('.inventory_item').its('length').should('eq',6)
    })

})

