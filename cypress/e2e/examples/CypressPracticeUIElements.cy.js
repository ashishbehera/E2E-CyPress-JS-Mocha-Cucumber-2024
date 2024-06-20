import CatalogProductEditPage from "../PageObjects/CatalogProductEditPage"

describe('Basic Fruits & Vegetables Search',()=> {
    it('Vegetable Seach',() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').should('not.be.checked')
        cy.get('#checkBoxOption1').check().should('be.checked').should('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type=checkbox]').check()

        //Handling Static Dropdowns
        cy.get('select').select('option2').should('have.value','option2')

        //Handling Dynamic Dropdowns
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each( ($el,index,$list) => {
            if($el.text() === 'India'){
                cy.wrap($el).click()
            }
        })

        cy.get('#autocomplete').should('have.value','India')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

        cy.get('.radioButton').eq(0).check().should('be.checked')
    })
})