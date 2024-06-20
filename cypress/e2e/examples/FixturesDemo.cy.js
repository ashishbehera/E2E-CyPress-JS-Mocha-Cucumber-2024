/// <reference types="cypress" />

describe('Driving Test data through fixtures', ()=> {
    let data;
    before(() => {
        cy.fixture('example').then( fData => {
            data = fData;
        })
    })

    it('FixturesDemoTest', ()=> {
        cy.visit('https://demo.nopcommerce.com/')
        cy.get('.ico-login').click()
        cy.get('#Email').type(data.email)
        cy.get('#Password').type(data.password)
    })
})