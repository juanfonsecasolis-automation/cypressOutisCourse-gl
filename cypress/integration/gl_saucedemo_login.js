// 2021 Juan Fonseca

import LoginPage from './Classes/LoginPage';

describe('Test 1: verify that the system handles invalid credentials', () => {

    it('should stay in the same page even using invalid credentials', () => {
        LoginPage.loginWithInvalidCredentials()
        cy.url().should('include','/')
    })
    
    it('should get an error message',() => {
        cy.readFile('testData.json').its('invalidLoginMessage').then(text => {
            cy.get('h3').contains(text) // this can go to the POM
        })
    })
})

describe('Test 2: verify that the system handles valid credentials on mobile view',() => {
    
    it('should login and check that url points to the inventory',() => {
        LoginPage.loginWithValidCredentials()
        cy.url().should('include','/inventory.html')
    })
    
    after(function (){  // this is a hook
        cy.logout()
    })

})

describe('Test 3: verify only 6 items are be displayed in the products webpage',() => {
    
    it('should login and check that url points to the inventory',() => {
        LoginPage.loginWithValidCredentials()
        cy.url().should('include','/inventory.html')
    })

    it('should count a maximum of 6 items displayed',() => {
        cy.get('.inventory_item').its('length').should('eq',6)
    })
    
    after(function (){  // this is a hook
        cy.logout()
    })

})