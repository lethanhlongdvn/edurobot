import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  const page = await context.newPage();
  
  console.log('Navigating to http://127.0.0.1:5173/#/lesson/vietnamese/vn-4...');
  await page.goto('http://127.0.0.1:5173/#/lesson/vietnamese/vn-4');
  
  // Đợi 3 giây để Service Worker đăng ký và tải tài nguyên mới
  await page.waitForTimeout(3000);
  
  console.log('Reloading to apply new cache version...');
  await page.reload();
  
  // Đợi 2 giây để trang render lại hoàn toàn
  await page.waitForTimeout(2000);
  
  const path = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\7cf3c33d-3a23-49ed-8df9-cc0e7762528f\\screenshot_vn4.png';
  console.log('Taking screenshot...');
  await page.screenshot({ path: path });
  console.log('Screenshot saved successfully to:', path);
  
  await browser.close();
})();
