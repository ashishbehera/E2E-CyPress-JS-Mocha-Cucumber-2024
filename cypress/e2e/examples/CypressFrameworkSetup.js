/// <reference types="cypress" />
import HomePage  from '../../support/pageObjects/HomePage'
import ProductCheckoutPage from '../../support/pageObjects/ProductCheckoutPage'
import ProductListingPage from '../../support/pageObjects/ProductListingPage'
import TermsAndCondPage from '../../support/pageObjects/TermsAndCondPage'


describe('Dummy framework setup',()=> {

    before(function() {
        cy.fixture('example').then(  (data) => {
             this.data = data
        })
        
    })

    it('Test Methods',function()  {
        const homePage = new HomePage()
        const productListingPage = new ProductListingPage();
        const productCheckoutPage = new ProductCheckoutPage();
        const termsAndCondPage = new TermsAndCondPage();

        cy.visit(Cypress.env('url')+'/angularpractice/')
        //cy.get('input[name=name]').eq(0).type('Test')
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select('Male')
        homePage.getTwoWayDataBinding().eq(1).should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEmplStatusRadioButton().should('be.disabled')
        homePage.getShopTab().click()
        this.data.productNames.forEach ( productName => {
            cy.selectProduct(productName)
        })

        productListingPage.getBtnCheckOut().click()
        var prodTotalPriceFinal = 0
        productCheckoutPage.getIndProductTotalPrice().each(($el,index,$list) => {
            const prodTotal = $el.text()
            const prodTotalPrice = prodTotal.split(" ")[1]
            prodTotalPriceFinal = Number(prodTotalPriceFinal)+Number(prodTotalPrice)

            
        }).then( () => {
            cy.log(prodTotalPriceFinal)
            productCheckoutPage.getFullProductTotalPrice().then( ($el,index,$list) =>{
                const actProdTotal =$el.text().split(" ")[1]
                expect(prodTotalPriceFinal).to.be.equal(Number(actProdTotal))
            })

        })
  
        productCheckoutPage.getBtnCheckOut().click()
        termsAndCondPage.getCountry().type('India')
        termsAndCondPage.getSuggestions().click()
        termsAndCondPage.selectCheckBox().check({force:true})
        termsAndCondPage.btnPurchase().click()
        //termsAndCondPage.lblSucessMsg().should('contain.text','Success! Thank you! Your order will be delivered in next few  weeks :-)')
        termsAndCondPage.lblSucessMsg().then( element => {
            const actualText = element.text();
            expect(actualText.includes('Success!')).to.be.true
        })




       
    })
 
})