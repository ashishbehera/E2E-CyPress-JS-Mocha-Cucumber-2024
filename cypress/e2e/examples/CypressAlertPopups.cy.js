
describe('Handling  Alerts & Popups',()=> {
    it('Handling  Alerts',() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        //Hello , share this practice page and share your knowledge
        cy.on('window:alert',(str)=> {
            expect(str).equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm',(str)=> {
            expect(str).equal('Hello , Are you sure you want to confirm?')
        })
    })
})