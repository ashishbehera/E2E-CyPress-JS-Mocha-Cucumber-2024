
describe('Handling  Child Windows',()=> {
    it('Handling  Child Windows',() => {
        cy.visit(Cypress.env('url')+'/AutomationPractice/')
        //cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({ force: true })
        cy.url().should('eq','https://rahulshettyacademy.com/AutomationPractice/#top')


    })
 
})