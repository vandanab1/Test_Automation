// Custom test fixtures
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';

// Extend the base test with custom fixtures
export const test = base.extend({
  // Authenticated page fixture
  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.TEST_USER || 'test@example.com', process.env.TEST_PASS || 'password');
    await use(page);
  },

  // API client fixture
  apiClient: async ({}, use) => {
    const apiClient = {
      baseURL: process.env.API_BASE_URL || 'https://api.example.com',
      async get(endpoint) {
        return await APIUtils.makeRequest(`${this.baseURL}${endpoint}`);
      },
      async post(endpoint, data) {
        return await APIUtils.makeRequest(`${this.baseURL}${endpoint}`, 'POST', data);
      }
    };
    await use(apiClient);
  }
});

export { expect } from '@playwright/test';