// Test data constants
export const TEST_DATA = {
  users: {
    validUser: {
      email: 'test@example.com',
      password: 'password123'
    },
    invalidUser: {
      email: 'invalid@example.com',
      password: 'wrongpass'
    }
  },
  urls: {
    baseUrl: 'https://demoqa.com',
    loginPage: '/login'
  },
  timeouts: {
    short: 2000,
    medium: 5000,
    long: 10000
  }
};