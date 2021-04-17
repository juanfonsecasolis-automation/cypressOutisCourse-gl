// 2021 Juan Fonseca

describe('Verify system handles invalid credentials', () => {

    it('should try to login with invalid credentials',() => {
        cy.viewport('samsung-note9')    // simulate a mobile phone view
        cy.loginWithInvalidCredentials()
    })
    
    it('should get an error message',() => {
        cy.readFile('testData.json').its('invalidLoginMessage').then(text => {
            cy.get('h3').contains(text).screenshot()
        })
    })
})

describe('Verify system handles valid credentials',() => {
    
    it('should login and check that url points to the inventory',() => {
        cy.loginWithValidCredentials()
        cy.url().should('include','/inventory.html')
    })

    it('should count a maximum of 6 items displayed',() => {
        cy.get('.inventory_item').its('length').should('eq',6).screenshot()
    })

})