const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
let modifiedFiles = [];
let modifications = {};

for (let i = 31; i <= 40; i++) {
    const filePath = path.join(baseDir, String(i), 'index.js');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        const pattern = /(<div[^>]*?>\s*(\d+)\s*<\/div>\s*<h3[^>]*?>)(?!Bài \2)(.*?)(<\/h3>)/gis;
        
        let changed = false;
        let fileModifications = [];
        
        let newContent = content.replace(pattern, (match, prefix, number, title, suffix) => {
            if (title.toLowerCase().startsWith('bài')) {
                return match;
            }
            changed = true;
            fileModifications.push(`Bài ${number}: ${title.trim()}`);
            return `${prefix}Bài ${number}. ${title.trim()}${suffix}`;
        });
        
        if (changed) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            modifiedFiles.push(i);
            modifications[i] = fileModifications;
        }
    }
}

console.log(JSON.stringify({ modifiedFiles, modifications }, null, 2));
