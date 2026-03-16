// Global setup file - runs before all tests
import { chromium } from '@playwright/test';

async function globalSetup() {
  // Add any global setup logic here
  // For example: database setup, API mocks, etc.
  console.log('Global setup completed');
}

export default globalSetup;