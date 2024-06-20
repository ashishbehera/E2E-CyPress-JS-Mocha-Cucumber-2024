class TermsAndCondPage {
    getCountry() {
        return cy.get('#country')

    }
    getSuggestions() {
        return cy.get('.suggestions')

    }
    selectCheckBox() {
        return cy.get('#checkbox2')
    }

    btnPurchase() {
        return cy.get('.btn-success')
    }

    lblSucessMsg() {
        return cy.get('.alert-success')
    }
}
export default TermsAndCondPage