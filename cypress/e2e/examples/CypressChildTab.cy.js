
describe('Handling  Child Windows',()=> {
    it('Handling  Child Windows',() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.wait(3000)
        cy.title().should('eq','Rahul Shetty Academy')
        cy.go('back')
        cy.wait(3000)
        cy.title().should('eq','Practice Page')


    })
 
})