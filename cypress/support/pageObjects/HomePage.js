class HomePage {
    getEditBox() {
        return cy.get('input[name=name]:nth-child(2)')

    }

    getGender() {
        return cy.get('select')

    }

    getEmplStatusRadioButton() {
        return cy.get('#inlineRadio3')
    }

    getShopTab() {
        return cy.contains('Shop')
    }

    getTwoWayDataBinding() {
        return cy.get('input[name=name]')
    }
}
export default HomePage