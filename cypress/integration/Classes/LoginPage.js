import BasePage from './BasePage';

class LoginPage extends BasePage {
    
    static loginWithValidCredentials(){
        cy.viewport('samsung-note9')
        cy.fixture('user').then(user => {
            cy.log('Login with valid user')
            loginWithCredentials(user.validUsername, user.validPassword)
        })
    }

    static loginWithInvalidCredentials(){
        cy.fixture('user').then(user => {
            cy.log('Login with invalid user')
            loginWithCredentials(user.invalidUsername, user.invalidPassword)
        })
    }

    static loginWithCredentials(username, password){
        cy.viewport('samsung-note9')
        cy.login(username, password)    // defined on commands.js
    }
}

export default LoginPage;