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

  test('should default to mobile-mode on small screens', async ({ page }) => {
    // Resize viewport to mobile screen size
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:5173/');

    // Body should contain mobile-mode class
    await expect(page.locator('body')).toHaveClass(/mobile-mode/);
    await expect(page.locator('body')).not.toHaveClass(/presentation-mode/);
  });

  test('should default to standard desktop interface on large screens', async ({ page }) => {
    // Resize viewport to standard desktop size
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:5173/');

    // Body should not have presentation-mode (TV) or mobile-mode by default
    await expect(page.locator('body')).not.toHaveClass(/presentation-mode/);
    await expect(page.locator('body')).not.toHaveClass(/mobile-mode/);
  });

  test('should remember TV mode preference from localStorage on reload', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    
    // Evaluate script to simulate preferred_mode as tv and reload
    await page.evaluate(() => {
      localStorage.setItem('preferred_mode', 'tv');
    });
    await page.reload();

    // Body should have presentation-mode class after reload
    await expect(page.locator('body')).toHaveClass(/presentation-mode/);
  });
});
