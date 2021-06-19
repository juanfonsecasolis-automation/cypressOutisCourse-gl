import BasePage from './BasePage';

const usernameField = '#user-name'
const passwordField = '#password'
const loginButton = '#login-button'
const errorMessageDiv = '.error-message-container'

class LoginPage extends BasePage {
    
    static loginWithCredentials(username, password){
        cy.viewport('samsung-note9')
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('/')
        cy.get(usernameField).type(username)
        cy.get(passwordField).type(password)   
        cy.get(loginButton).click()
    }

    static loginWithValidCredentials(){
        cy.viewport('samsung-note9')    // sacar del POM si no va a ser algo propio 
        cy.fixture('user').then(user => {
            cy.log('Login with valid user')
            this.loginWithCredentials(user.validUsername, user.validPassword)
        })
    }

    static loginWithInvalidCredentials(){
        cy.fixture('user').then(user => {
            cy.log('Login with invalid user')
            this.loginWithCredentials(user.invalidUsername, user.invalidPassword)
        })
    }

    static getErrorMessageContainer(){
        return cy.get(errorMessageDiv)
    }
}

export default LoginPage;