// Configuration settings
export const CONFIG = {
  environment: process.env.NODE_ENV || 'development',
  baseURL: process.env.BASE_URL || 'https://demoqa.com',
  apiBaseURL: process.env.API_BASE_URL || 'https://api.example.com',
  browser: {
    headless: process.env.HEADLESS === 'true',
    slowMo: parseInt(process.env.SLOW_MO) || 0
  },
  timeouts: {
    navigation: 30000,
    element: 10000,
    api: 15000
  }
};