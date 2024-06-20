/// <reference types="cypress" />

class CatalogProductListingPage {

    clickOnCatalog() {
        const catalogMenu = cy.contains('Catalog')
        catalogMenu.click()
        cy.wait(2000)
    }

    clickOnProducts() {
        const productsLink = cy.contains('Products')
        productsLink.click()
        cy.wait(2000)
    }

    fillProductName(productName) {
        const productNameField = cy.get('[id=SearchProductName]')
        productNameField.clear()
        productNameField.type(productName)
    }

    clickOnSearchBtn() {
        const btnSearch = cy.get('[id=search-products]')
        btnSearch.click()
        cy.wait(5000)
    }

    clickOnEditBtnTable() {
        const btnEdit = cy.get('.fa-pencil-alt').first()
        btnEdit.click()
    }

    clickOnCheckBoxFromTable() {
        const chkBox = cy.get('.checkboxGroups').first()
        chkBox.click()
    }

    clickOnAddNewProduct() {
        const btnAddNewProduct = cy.get('.fa-plus-square').first()
        btnAddNewProduct.click()

    }
    
    verifySucessMsgNewProdAddition(message) {
        cy.get('.alert-success').contains(message).should('be.visible')

    }
   
}
export default CatalogProductListingPage