import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given('I open login page', () => {
    cy.visit('https://www.saucedemo.com/')
})

When('I submit login', () => {
    cy.fixture('user').then(user => {
        cy.log('Login with valid user')
        cy.login(user.validUsername, user.validPassword)    // defined on commands.js
    })
})

Then('I should see the homepage', () => {
    cy.url().should('include','/inventory.html')
})