import BasePage from './BasePage';

const orderByDropdown = '.product_sort_container'
const inventoryItemsDiv = '.inventory_item'
const addToCartButtons = '.pricebar > button'
const inventoryPricesDiv = '.inventory_item_price'
const shoppingCartBadgeDiv = '.shopping_cart_badge'

class InventoryPage extends BasePage{

    static sortFromLowToHigh(){
        cy.log('Sorting from low to high')
        cy.get(orderByDropdown).select('Price (low to high)')   
    } 

    static getInventoryItems(){
        return cy.get(inventoryItemsDiv)
    }

    static getAddToCartButton(){
        return cy.get(addToCartButtons)
    }

    static getItemPrices(){
        return cy.get(inventoryPricesDiv)
    }

    static addToTheCartItem(itemIdentifier){
        cy.get('#add-to-cart-sauce-labs-'+itemIdentifier).contains('Add to cart').click()
    }

    static getShoppingCartBadge(){
        return cy.get(shoppingCartBadgeDiv)
    }

    static getInventoryItemNameElement(){
        return cy.get('.inventory_item_name')
    }
}

export default InventoryPage;