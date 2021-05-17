// 2021 Juan Fonseca

import LoginPage from '../../Classes/LoginPage';
import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given('I open login page', () => {
    cy.visit('https://www.saucedemo.com/')
})

When('I login with username {string} and password {string}', (username, password) => {
    LoginPage.loginWithCredentials(username, password)
})

Then('I should see the inventory page', () => {
    cy.url().should('include','/inventory.html')
})