/// <reference types="cypress" />

describe('UI Elements', () => {
    it('Verify InputBox ,CheckBox and RadioButtons', () => {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.url().should('include','AutomationPractice')
        cy.title().should('eq','Practice Page')
        cy.get('[name=radioButton]').eq(1).should('be.visible').should('be.enabled').should('not.be.checked').click()
        cy.get('.radioButton').eq(1).should('be.checked')
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item-wrapper').eq(1).click()
        cy.get('[type=checkbox]').eq(1).should('not.be.checked').check()
        cy.get('[type=checkbox]').eq(1).uncheck().should('not.be.checked')
        cy.get('input[type=checkbox]').check(['option1','option2'])
    })

    it('Select Single Value in Dropdowns', () => {
        cy.get('#dropdown-class-example').select('Option3').should('have.value', 'option3')

    })

    it.skip('Select Multiple Values in Dropdowns', () => {
        //cy.visit('http://demo.automationtesting.in')
        cy.visit('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm')
        cy.get('[name=selenium_commands]').select(['Browser Commands','Navigation Commands'])
       

    })

    it('Handling alert', () => {
        cy.get("#alertbtn").click()
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Hello , share this practice page and share your knowledge')
        })
    })

    it('Handling confirm', () => {
        cy.get("#confirmbtn").click()
        cy.on('window:confirm', (txt) => {
            expect(txt).to.contains('Hello , Are you sure you want to confirm?')
        })
    })

    it('Navigate Back', () => {
        cy.contains('Home').click()
        cy.go('back')
        cy.title().should('eq','Practice Page')
        cy.go('forward')
        cy.title().should('eq','Rahul Shetty Academy')

      
    })
})