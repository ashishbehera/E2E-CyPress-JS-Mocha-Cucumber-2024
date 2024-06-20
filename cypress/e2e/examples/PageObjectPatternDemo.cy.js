/// <reference types="cypress" />


import LoginPage from '../PageObjects/LoginPage'

describe('PageObjectDemo', () => {

    it('Valid Login Test', () => {

        const lp = new LoginPage();
        lp.visit()
        lp.fillEmail('admin@yourstore.com')
        lp.fillPassword('admin')
        lp.submit()
        cy.title().should('eq','Dashboard / nopCommerce administration')

    })
})