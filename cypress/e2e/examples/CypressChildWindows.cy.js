
describe('Handling  Child Windows',()=> {
    it('Handling  Child Windows',() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#openwindow').invoke('removeAttr','target').click()
        cy.wait(3000)
        cy.url().should('include','http://www.qaclickacademy.com/')



    })
 
})