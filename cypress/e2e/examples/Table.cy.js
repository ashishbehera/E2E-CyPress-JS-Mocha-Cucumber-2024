/// <reference types="cypress" />

describe('Handling Web Table',()=> {
    it('Handling Web Table',()=> {

        cy.visit('https://testautomationpractice.blogspot.com/')
        //cy.scrollTo(0, 1500)

        //Check value present anywhere in the table
        cy.get('table[name=BookTable]').contains('td', 'Learn Selenium').should('be.visible')

        //Check value present in specific row and column
        cy.get('table[name=BookTable] > tbody > tr:nth-child(3) > td:nth-child(3)').contains('Java').should('be.visible')


        //Check value by iterating rows
        cy.get('td:nth-child(3)').each(($e1, index) => {
            // cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {  this can also be used because "td" or "tr td" gives the same output
            //storing the content in the text variable
            const text = $e1.text();
            if(text === 'Java'){
                console.log(index)
                cy.get('td:nth-child(4)').eq(index).then( (Field) => {
                    const Fieldtext = Field.text();
                    //comparing strings using the jQuery method expect()
                    console.log(Fieldtext)
                    expect(Fieldtext).to.equal("500");
                  });
            }
          })
    })
})