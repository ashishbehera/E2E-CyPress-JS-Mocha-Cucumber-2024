
describe('Handling  Child Windows',()=> {
    it('Handling  Child Windows',() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each( ($el,index,$list)=> {
            const text = $el.text()
            if(text.includes('Python')) {
                const text =cy.get('tr td:nth-child(2)').eq(index).next().then( (price) => {
                    price.text()
                    expect(price.text()).to.equal('25')
                })
            }

        })


    })
 
})