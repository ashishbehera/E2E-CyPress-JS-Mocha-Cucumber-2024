/// <reference types="cypress" />

class CatalogProductEditPage {

    fillProductNameOnEditProduct(productName) {
        const productNameField = cy.get('[id=Name]')
        productNameField.clear()
        productNameField.type(productName)
    }

    clickOnSaveBtn() {
        const btnSave = cy.get('[name=save]')
        btnSave.click()
    }





   
}
export default CatalogProductEditPage