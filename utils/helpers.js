// Utility functions for common operations
export class TestUtils {
  static async waitForElement(page, selector, timeout = 5000) {
    await page.waitForSelector(selector, { timeout });
  }

  static async takeScreenshot(page, name) {
    await page.screenshot({ path: `screenshots/${name}.png` });
  }

  static generateRandomEmail() {
    return `test${Date.now()}@example.com`;
  }

  static generateRandomString(length = 10) {
    return Math.random().toString(36).substring(2, length + 2);
  }
}

// API helper functions
export class APIUtils {
  static async makeRequest(endpoint, method = 'GET', data = null) {
    const response = await fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : null,
    });
    return response.json();
  }
}