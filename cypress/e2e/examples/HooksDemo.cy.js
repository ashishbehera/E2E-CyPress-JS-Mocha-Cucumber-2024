describe('Hooks Demo' , () => {

    before(()=> {
        cy.log('*************This is setup Block')
    })

    after(()=> {
        cy.log('*************This is tearDown Block')
    })

    beforeEach(()=> {
        cy.log('*************This is Login Block')
    })

    afterEach(()=> {
        cy.log('*************This is Logout Block')
    })

    it('Searching', () => {
        cy.log('****************Searching*****************')
    })

    it('Advanced Searching', () => {
        cy.log('****************Advanced Searching*****************')
    })

    it('Product Listing', () => {
        cy.log('****************Product Listing*****************')
    })
})