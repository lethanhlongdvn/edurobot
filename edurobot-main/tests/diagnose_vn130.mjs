import { chromium } from '@playwright/test';

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:8000/#/lesson/vietnamese/vn-130');
  await page.waitForTimeout(3000);
  
  const data = await page.evaluate(() => {
    // Let's run the lookup logic ourselves using the same variables as switchTab
    const subjectLessons = window.lessons[window.router.currentSubject] || [];
    const currentLessonPeriod = window.router.currentLessonPeriod;
    
    const matchPeriod = (p1, p2) => {
        const clean1 = String(p1).toLowerCase().replace('vn-', '').trim();
        const clean2 = String(p2).toLowerCase().replace('vn-', '').trim();
        if (clean1 === clean2) return true;
        const parts1 = clean1.split('-');
        const parts2 = clean2.split('-');
        if (parts1.some(x => parts2.includes(x))) return true;
        return false;
    };

    let lesson = subjectLessons.find(l => 
        matchPeriod(l.period, currentLessonPeriod) || 
        matchPeriod(l.id, currentLessonPeriod)
    );
    
    return {
      currentLessonPeriod,
      resolvedLessonId: lesson ? lesson.id : null,
      resolvedLessonPeriod: lesson ? lesson.period : null,
      resolvedLessonHasContent: lesson ? !!lesson.content : false,
      resolvedLessonContentLength: lesson && lesson.content ? lesson.content.length : 0,
      resolvedLessonContentExcerpt: lesson && lesson.content ? lesson.content.substring(0, 200) : null
    };
  });
  
  console.log('SwitchTab Lookup Diagnostics:', JSON.stringify(data, null, 2));
  await browser.close();
}

run().catch(console.error);
