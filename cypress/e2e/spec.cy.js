describe('test_1', () => {
    it('passes', () => {
        cy.visit('https://butopea.com')
        cy.get('.banner-square-image').children('img').should('have.class', 'block').eq(1)

        let img = cy.get('.banner-square-image').children('img').eq(1)

        img.invoke('attr', 'src').then(src => {

            console.log(`the src is ${src}`)
            cy.log(`the src is ${src}`)

        });
    })
})

describe('test_2', () => {
    it('passes', () => {
        cy.visit('https://butopea.com')
        cy.get('.banner-square-overlay-container').children('div').eq(0).children('div')
            .should('have.class', 'banner-square-overlay-heading')
            .children('p')
            .should('not.empty')

        cy.get('.banner-square-overlay-container').children('div').eq(0).children('div').children('p').invoke('text')
            .then(text => {

                console.log(`the text is ${text}`)
                cy.log(`the text is ${text}`)

            });

        cy.get('.banner-square-overlay-container').children('div').eq(0).children('div')
            .should('have.class', 'banner-square-overlay-cta')
            .children('button')
            .should('exist')

        cy.get('.banner-square-overlay-container').children('div').eq(0).children('div').children('button').invoke('text')
            .then(text => {

                console.log(`the button is ${text}`)
                cy.log(`the button is ${text}`)


            });
    })
})


describe('test_3', () => {
    it('passes', () => {
        cy.visit('https://butopea.com')
        cy.get('#home-tabs-wrapper').children('nav').eq(0).children('div').eq(0).children('div').eq(2).click()

        cy.get('.product-listing').children('div').should('have.length.gt', 1)
            .each(($div, index, $divs) => {
                let product_link = $div.children('div').children('a').eq(0)[0]['href'];
                let product_name = $div.children('div').children('a').children('div').eq(1).children('p').eq(0).text().replace(/(\r\n|\n|\r)/gm, "").trim()
                let product_price = $div.children('div').children('a').children('div').eq(1).children('div').eq(0).text().replace(/(\r\n|\n|\r)/gm, "").trim()
                let product_image = $div.children('div').children('a').children('div').eq(0).children('div').eq(1).children('img').eq(0)[0]['src']
                console.log({ product_link, product_name, product_price, product_image });
                cy.log('product_link: ' + product_link + '\nproduct_name: ' + product_name +
                    '\nproduct_price: ' + product_price + '\nproduct_image: ' + product_image);
            })

    })
})