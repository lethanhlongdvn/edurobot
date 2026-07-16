
import fs from 'fs';
import path from 'path';

const baseDir = 'c:/Users/Admin/Desktop/edurobot5/edurobot5/js/data/math';
const lessons = ['111', '112', '113', '114', '115', '116', '117', '118', '119', '120'];

const report = {};

lessons.forEach(lessonId => {
    const filePath = path.join(baseDir, lessonId, 'data.js');
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Count questions in quizPool
        const quizPoolMatch = content.match(/"quizPool"\s*:\s*\[([\s\S]*?)\]/);
        let questionCount = 0;
        if (quizPoolMatch) {
            const quizContent = quizPoolMatch[1];
            questionCount = (quizContent.match(/"question"/g) || []).length;
        }

        // Check for purple/indigo colors
        const purpleColors = content.match(/purple|violet|indigo|fuchsia/gi) || [];
        
        // Check for exercise icons (rounded-2xl is old, should be rounded-full or similar for circles)
        const hasOldIcons = content.includes('rounded-2xl');
        
        // Check for responsive fonts
        const hasResponsiveFonts = content.includes('md:text-');

        report[lessonId] = {
            questionCount,
            purpleColors: [...new Set(purpleColors)],
            hasOldIcons,
            hasResponsiveFonts,
            title: (content.match(/"title"\s*:\s*"(.*?)"/) || [])[1]
        };
    }
});

console.log(JSON.stringify(report, null, 2));
