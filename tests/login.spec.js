const {test, expect}= require('@playwright/test')

test('login',async({page})=>{

await page.goto('https://www.saucedemo.com/');
await expect(page).toHaveURL('https://www.saucedemo.com/');

await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();
await expect(page.getByText('Products')).toHaveText('Products');
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await expect(page).toHaveTitle('Swag Labs');


// await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click();
// await page.locator('.shopping_cart_link').click();
// await page.locator('#checkout').click();
// await page.getByPlaceholder('First Name').fill('test');
// await page.getByPlaceholder('Last Name').fill('user');
// await page.getByPlaceholder('Zip/Postal Code').fill('200001');
// await page.locator('#continue').click();
// await page.locator('#finish').click();
// await page.locator('.btn.btn_primary.btn_small').click();
// await page.locator('#react-burger-menu-btn').click();
// await page.locator('#logout_sidebar_link').click();
////test

})
