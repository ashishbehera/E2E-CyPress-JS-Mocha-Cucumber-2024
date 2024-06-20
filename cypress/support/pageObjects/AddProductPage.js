/// <reference types="cypress" />
import 'cypress-iframe';

class AddProductPage {

    fillProductName(productName) {
        const productNameField = cy.get('[id=Name]')
        productNameField.clear()
        productNameField.type(productName)
    }

    fillShortDesc(shortDesc) {
        const shortDescField = cy.get('[id=ShortDescription]')
        shortDescField.clear()
        shortDescField.type(shortDesc)
    }

    fillfullDesc(fullDesc) {
        
        // const fullDescField = cy.get('iframe[id=FullDescription_ifr]')
        // fullDescField.type(fullDesc)
        //cy.iframe().find('body#tinymce.mce-content-body').type(fullDesc)
        cy.get('#FullDescription_ifr').clear().type(fullDesc)

    }

    fillSKU(sku) {
        const skuField = cy.get('[id=Sku]')
        skuField.clear()
        skuField.type(sku)
    }

    autoSuggestCategory(category){
        const clickField = cy.get('.k-multiselect-clearable').eq(0)
        clickField.click()
        clickField.type(category)
        clickField.type('{enter}').click();
        cy.get('[id=Sku]').click()
        cy.scrollTo(0, 1800)
    }

    fillPrice(price) {
        const priceField = cy.get('[id=product-price-area] > div[2] > span > span > input').eq(0)
        priceField.click()
        priceField.clear()
        priceField.type(price)
    }

    selectTaxCategory(item) {
        cy.get('[id=TaxCategoryId]').click();
        cy.get('option').contains(item).click();
    }

    fillWeight(weight) {
        const weightField = cy.get('[id=Weight]')
        weightField.clear()
        weightField.type(weight)
    }

    fillLength(length) {
        const lengthField = cy.get('[id=Length]')
        lengthField.clear()
        lengthField.type(length)
    }

    fillWidth(width) {
        const widthField = cy.get('[id=Width]')
        widthField.clear()
        widthField.type(width)
    }

    fillHeight(height) {
        const heightField = cy.get('[id=Height]')
        heightField.clear()
        heightField.type(height)
    }

    selectInventoryMethod(item) {
        cy.get('[id=ManageInventoryMethodId]').click();
        cy.get('option').contains(item).click();
    }

    selectLowStockActivity(item) {
        cy.get('[id=LowStockActivityId]').click();
        cy.get('option').contains(item).click();
    }

    clickOnSaveBtn() {
        const btnSave = cy.get('[name=save]')
        btnSave.click()
    }





   
}
export default AddProductPage