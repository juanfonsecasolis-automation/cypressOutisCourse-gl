import BasePage from './BasePage';

class InventoryPage extends BasePage{

    static sortFromLowToHigh(){
        cy.log('Sorting from low to high')
        cy.get('.product_sort_container').select('Price (low to high)')   
    } 
}

export default InventoryPage;