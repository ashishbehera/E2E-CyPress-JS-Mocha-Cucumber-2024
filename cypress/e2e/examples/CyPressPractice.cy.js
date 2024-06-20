
describe('Basic Fruits & Vegetables Search',()=> {
    it('Vegetable Seach',() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('form input').type('ca')
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click().then( () => {
            console.log('Test Async')
        })
        console.log('Test Sync')

        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el,index,$list) => {
            const  vegText =$el.find('h4.product-name').text()
            cy.log('Vegetable Text:'+vegText)
            if(vegText.includes('Cauliflower')) 
             cy.wrap($el).find('div.product-action').click()
     
        })

        cy.get('.brand').should('have.text', 'GREENKART')

        cy.get('img[alt=Cart]').click()
        cy.get('button[type=button]').contains('PROCEED TO CHECKOUT').click()
        cy.get('.promoCode').type('rahulshettyacademy')
        cy.get('.promoBtn').click()
        cy.wait(5000)
        cy.get('.promoInfo').should('have.text','Code applied ..!')
        cy.get('button').contains('Place Order').click()
        


        
    })
})