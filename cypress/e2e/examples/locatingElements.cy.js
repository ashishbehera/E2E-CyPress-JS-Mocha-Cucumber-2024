describe('Locating Elements on Dummy Website', () => {
    it('Verify Elements on Dummy Website', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch')
        cy.get('.search-box-button[type="submit"]').click()
        cy.get('.product-box-add-to-cart-button').click()
        cy.get('.qty-input').clear().type('2')
        cy.get('.add-to-cart-button').click()
        cy.get('.close').click()
        cy.get('#topcartlink').click()
        cy.get('.product-unit-price').should('have.text', '$1,800.00')

    })
})