const { test, expect } = require("@playwright/test")

test('Verify Header',async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();
await expect(page.locator('.title')).toHaveText('Products');
})

test('Verify listed Products',async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();
const inventoryCount = page.locator('.inventory_item');
await expect(inventoryCount).toHaveCount(6);
})

test('Sorting Name(A to Z)',async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();
const dropdown= page.locator('.product_sort_container');
const options = dropdown.locator('option');
await expect(options).toHaveCount(4);
await dropdown.selectOption({label:'Name (A to Z)'});
});