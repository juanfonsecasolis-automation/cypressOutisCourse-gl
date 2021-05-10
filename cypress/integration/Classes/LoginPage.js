import BasePage from './BasePage';

class LoginPage extends BasePage {
    
    static loginWithValidCredentials(){
        cy.viewport('samsung-note9')
        cy.fixture('user').then(user => {
            cy.log('Login with valid user')
            cy.login(user.validUsername, user.validPassword)    // defined on commands.js
        })
    }

    static loginWithInvalidCredentials(){
        cy.fixture('user').then(user => {
            cy.log('Login with invalid user')
            cy.login(user.invalidUsername, user.invalidPassword) // defined on commands.js
        })
    }
}

export default LoginPage;