/// <reference types="cypress" />

class LoginPage {

    visit() {
        cy.visit('https://admin-demo.nopcommerce.com/login')
    }

    fillEmail(email) {
        const emailField = cy.get('[id=Email]')
        emailField.clear()
        emailField.type(email)
        return this
    }

    fillPassword(password) {
        const passwordField = cy.get('[id=Password]')
        passwordField.clear()
        passwordField.type(password)
        return this
    }

    submit() {
        const loginButton = cy.get('[type=submit]')
        loginButton.click()
        cy.wait(2000)
    }

   
}
export default LoginPage