import { defineStep } from 'cypress-cucumber-preprocessor/steps'

defineStep('I want to wait {int} millisenconds', time => {
    cy.wait(time)
})