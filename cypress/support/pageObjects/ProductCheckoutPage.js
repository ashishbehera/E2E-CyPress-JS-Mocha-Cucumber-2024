class ProductCheckoutPage {
    getBtnCheckOut() {
        return cy.get('.btn-success')

    }

    getIndProductTotalPrice() {
        return cy.get('tr td:nth-child(4) strong')

    }

    getFullProductTotalPrice() {
        return cy.get('.text-right h3 strong')

    }

 
}
export default ProductCheckoutPage