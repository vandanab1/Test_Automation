const {test, expect}= require('@playwright/test')

import { LoginPage } from '../pages/login.page.js';


// test('Valid login',async({page})=>{

// await page.goto('https://www.saucedemo.com/');
// await page.locator('#user-name').fill('standard_user');
// await page.locator('#password').fill('secret_sauce');
// await page.locator('#login-button').click();
// await expect(page.getByText('Products')).toHaveText('Products');
// await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
// await expect(page).toHaveTitle('Swag Labs');
// })

// test('Invalid login', async({page})=>{
// await page.goto('https://www.saucedemo.com/');
// await page.locator('#user-name').fill('Invalid username');
// await page.locator('#password').fill('Invalid password');
// await page.locator('#login-button').click();
// const errorMessage = page.locator('.error-message-container.error');
// await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
// })

// test('Locked out user', async({page})=>{
// await page.goto('https://www.saucedemo.com/');
// await page.locator('#user-name').fill('locked_out_user');
// await page.locator('#password').fill('secret_sauce');
// await page.locator('#login-button').click();
// const lockedOutMessage = page.locator('.error-message-container.error');
// await expect(lockedOutMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
// })

// test('Empty fields', async({page})=>{
// await page.goto('https://www.saucedemo.com/');
// await page.locator('#user-name');
// await page.locator('#password');
// await page.locator('#login-button').click();
// const emptyMessage = page.locator('.error-message-container.error');
// await expect(emptyMessage).toHaveText('Epic sadface: Username is required');
// })

test('Valid login', async({page})=>{
const loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login("standard_user","secret_sauce");
await expect(page.locator('.error-message-container.error')).toHaveText('Epic sadface: Sorry, this user has been locked out.');

})