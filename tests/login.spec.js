const {test, expect}= require('@playwright/test')

test('Valid login',async({page})=>{

await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();
await expect(page.getByText('Products')).toHaveText('Products');
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await expect(page).toHaveTitle('Swag Labs');
})

test('Invalid login', async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name').fill('Invalid username');
await page.locator('#password').fill('Invalid password');
await page.locator('#login-button').click();
const errorMessage = page.locator('.error-message-container.error');
await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
})

test('Locked out user', async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name').fill('locked_out_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();
const lockedOutMessage = page.locator('.error-message-container.error');
await expect(lockedOutMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
})

test('Empty fields', async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name');
await page.locator('#password');
await page.locator('#login-button').click();
const emptyMessage = page.locator('.error-message-container.error');
await expect(emptyMessage).toHaveText('Epic sadface: Username is required');
})

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

