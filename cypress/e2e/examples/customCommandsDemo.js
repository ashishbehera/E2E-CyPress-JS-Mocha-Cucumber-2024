/// <reference types="cypress" />

describe('Custom Commands', () => {

    it('Login Test', ()=> {
       cy.login('test@email.com','password')
       
    })

    it('Add Customer', ()=> {
        cy.login('test@email.com','password')

        cy.log('****** Adding Customer ***********')
    })

    it('Edit Customer', ()=> {
        cy.login('test@email.com','password')
        cy.log('****** Edit Customer ***********')
    })
})