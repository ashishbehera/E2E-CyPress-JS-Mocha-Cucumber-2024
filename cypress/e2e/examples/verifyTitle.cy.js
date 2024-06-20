/// <reference types="cypress" />

describe('Verify the title', ()=> {
    it('Verify the title', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store');
    
    })
})