import BasePage from './BasePage';

class CartPage extends BasePage{

    static loadCartPage(){
        cy.log('Loading Cart page')
        cy.get('.shopping_cart_badge').click()    
    } 
}

export default CartPage;