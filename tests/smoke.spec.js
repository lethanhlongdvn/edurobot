import { test, expect } from '@playwright/test';

test.describe('EduRobot Smoke Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to local development server (Vite default port is 5173)
    await page.goto('http://localhost:5173/');
  });

  test('should load home page and have correct title', async ({ page }) => {
    // Verify the page title matches
    await expect(page).toHaveTitle(/EduRobot/);
  });

  test('should display major subjects navigation', async ({ page }) => {
    // Wait for the dashboard/main subjects to render
    const appContent = page.locator('#app-content');
    await expect(appContent).toBeVisible();

    // Check elements are visible or at least loaded in DOM
    const buttonsCount = await page.locator('button').count();
    expect(buttonsCount).toBeGreaterThan(0);
  });
});
