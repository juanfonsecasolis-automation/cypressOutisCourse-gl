// 2021 Juan Fonseca

import InventoryPage from './Classes/InventoryPage';
import CartPage from './Classes/CartPage';
import LoginPage from './Classes/LoginPage';

describe('Test 4: verify all items in the inventory page have an add-to-cart button', () => {

    before(function (){
        LoginPage.loginWithValidCredentials()
        cy.log('Log extra')
    })

    it('should verify that all listed items have an add-to-cart button',() => {
        InventoryPage.getAddToCartButton().each(($el, index, $list) => {
            cy.wrap($el).should('have.text','Add to cart')
        })
    })

    after(function (){  // this is a hook
        cy.logout()
    })
})

describe('Test 5: verify that the system arranges item by price from low to high', () => {
    
    before(function (){
        LoginPage.loginWithValidCredentials() 
    })

    it('should sort item from low to high and verify that price1 is less than price2', () => {

        InventoryPage.sortFromLowToHigh()
        InventoryPage.getItemPrices().eq(0).as('text1')
        InventoryPage.getItemPrices().eq(1).as('text2')
        
        cy.get('@text1').invoke('text').then((text) => {
            var pattern = /[0-9]+.[0-9]+/g;
            var price1 = text.match(pattern) 

            cy.get('@text2').invoke('text').then((text) => {
                var price2 = text.match(pattern)
                expect(parseInt(price1)).to.be.lessThan(parseInt(price2))   // jest
            })                  
        })
    })

    after(function (){  // this is a hook
        cy.logout()
    })

})

describe('Test 6: verify that the cart badge reflects the number of items added in the cart', () => {
    
    before(function (){
        LoginPage.loginWithValidCredentials() 
    })
    
    it('should add two items to the cart', () => {
        InventoryPage.addToTheCartItem('backpack')
        InventoryPage.addToTheCartItem('onesie')
    })

    it('should verify that the cart badge says 2', () => {
        cy.wait(1000)
        InventoryPage.getShoppingCartBadge().contains('2')
    })

    after(function (){  // this is a hook
        cy.logout()
    })
})

describe('Test 7: verify items are added to the cart when hitting "Add to cart"', () => {
    
    before(function (){
        LoginPage.loginWithValidCredentials() 
    })
    
    it('should click on the "Add to cart" button of the "Sauce Labs Backpack" and "Sauce Labs Onesie" items', () => {
        InventoryPage.addToTheCartItem('backpack')
        InventoryPage.addToTheCartItem('onesie')
    })

    it('should click on the basket icon located at the upper right', () => {
        CartPage.loadCartPage()
        cy.url().should('include','/cart.html')
    })

    it('should verify that both items were added to the cart', () => {
        InventoryPage.getInventoryItemNameElement().contains('Sauce Labs Backpack').should('be.visible')
        InventoryPage.getInventoryItemNameElement().contains('Sauce Labs Onesie').should('be.visible')
    })

    after(function (){  // this is a hook
        cy.logout()
    })
})

