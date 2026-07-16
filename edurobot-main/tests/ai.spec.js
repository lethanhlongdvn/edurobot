import { test, expect } from '@playwright/test';

test('AI tutor button works (falls back when API unavailable)', async ({ page }) => {
  await page.route('**/.netlify/functions/chat', async (route) => {
    await route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({ error: 'offline' }),
    });
  });

  await page.goto('/#/lesson/math/111');
  await expect(page.locator('#tab-content')).toBeVisible();

  await page.locator('#tab-practice').click();
  await expect(page.locator('#lesson-practice-container')).toBeVisible({ timeout: 10000 });

  const hasAI = await page.evaluate(() => typeof window.AI !== 'undefined' && typeof window.AI.tutor === 'function');
  expect(hasAI).toBeTruthy();

  await page.locator('#ans-b111-3-text').fill('100% - 80% = 20%. 33,2 x 20% = 66,4 m3');
  await page.getByRole('button', { name: /AI CHẤM/i }).click();

  const fb = page.locator('#fb-b111-3-ai');
  await expect(fb).toBeVisible({ timeout: 10000 });
  await expect(fb).not.toContainText('Lỗi kết nối AI', { timeout: 10000 });
});

