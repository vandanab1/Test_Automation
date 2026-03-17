export class ProductPage{

    constructor(page){
        this.page = page;
        this.inventoryCount = page.locator('.inventory_item');
        this.dropdown = page.locator('.product_sort_container');
        this.options = dropdown.locator('option');
        this.title = page.locator('.title');
    }

 async getTitle(){
     return this.title;
 }

 async getProductsCount(){
    return this.inventoryCount;
 }

}