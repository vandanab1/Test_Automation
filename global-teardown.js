// Global teardown file - runs after all tests
async function globalTeardown() {
  // Add any global cleanup logic here
  // For example: database cleanup, close connections, etc.
  console.log('Global teardown completed');
}

export default globalTeardown;