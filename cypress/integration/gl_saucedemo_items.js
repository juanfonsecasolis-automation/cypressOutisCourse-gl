// 2021 Juan Fonseca

describe('Verify that the system arranges item by price from low to high', () => {
    
    it('should visit the sauce demo webpage', () => {
        cy.visit('https://www.saucedemo.com/',{timeout: 10000})
    })
    
    it('should enter valid credentials',() => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')   
        cy.get('#login-button').click()
    })

    it('should select the low-to-high filter', ()=>{
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.get('.inventory_item_price').eq(0).as('text1')
        cy.get('.inventory_item_price').eq(1).as('text2')

        // Original idea: cy.get('@price1').should('be.lte',cy.get('@price2')) 
        // Found idea: https://stackoverflow.com/questions/56223836/extracting-parts-of-a-text-in-cypress/56248002

        cy.get('@text1').invoke('text').then((text) => {
            var fullText = text;
            var pattern = /[0-9]+.[0-9]+/g;
            var number = fullText.match(pattern)
            console.log(number);
            cy.wrap(number).as('price1')  
        })

        cy.get('@text2').invoke('text').then((text) => {
            var fullText = text;
            var pattern = /[0-9]+.[0-9]+/g;
            var number = fullText.match(pattern)
            console.log(number);
            cy.wrap(number).as('price2')  
        })

        // que feo codigo
        cy.get('@price1').then(($price1) => {
            cy.get('@price2').should(($price2) => {
                console.log($price1)
                console.log($price2)
                expect($price1).to.be.lessThan($price2)
            })
        })
 
        //expect(price1).to.be.lessThan(price2) // esto es jest, algo basico de JS?
        //cy.get('@price1').should('be.lte',cy.get('@price2'))
    })

})

describe('Verify that the cart badge reflects the number of items added in the cart', () => {
    
    it('should visit the sauce demo webpage', () => {
        cy.visit('https://www.saucedemo.com/',{timeout: 10000})
    })

    it('should enter valid credentials',() => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')   
        cy.get('#login-button').click()
    })

    it('should check correct url',() => {
        cy.wait(2000)
        cy.url().should('include','/inventory.html')
    })
    
    it('should add two items to the cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').contains('Add to cart').click()
        cy.get('#add-to-cart-sauce-labs-onesie').contains('Add to cart').click()
    })

    it('should verify that the cart badge says 2', () => {
        cy.wait(1000)
        cy.get('.shopping_cart_badge').contains('2')
    })
})

describe('Verify items are added to the cart when hitting "Add to cart"', () => {
    
    it('should visit the sauce demo webpage', () => {
        cy.visit('https://www.saucedemo.com/',{timeout: 10000})
    })

    it('should enter valid credentials',() => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')   
        cy.get('#login-button').click()
    })

    it('should check correct url',() => {
        cy.wait(2000)
        cy.url().should('include','/inventory.html')
    })
    
    it('should click on the "Add to cart" button of the "Sauce Labs Backpack" and "Sauce Labs Onesie" items', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').contains('Add to cart').click()
        cy.get('#add-to-cart-sauce-labs-onesie').contains('Add to cart').click()
    })

    it('should click on the basket icon located at the upper right', () => {
        cy.get('.shopping_cart_badge').click()
        cy.url().should('include','/cart.html')
    })

    it('should verify that both items were added to the cart', () => {
        cy.should('have.text','Sauce Labs Backpack')
        cy.should('have.text','Sauce Labs Onesie')
    })
})

describe('Verify all items in the inventory page have an add-to-cart button', () => {
    it('should visit the sauce demo webpage', () => {
        cy.visit('https://www.saucedemo.com/',{timeout: 10000})
        cy.waitFor(1000)
    })
    
    it('should enter valid credentials',() => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')   
        cy.get('#login-button').click()
    })

    it('should verify that all listed items have an add-to-cart button',() => {
        cy.get('.pricebar > button').each(($el, index, $list) => {
            cy.wrap($el).should('have.text','Add to cart')
        })
    })
})

