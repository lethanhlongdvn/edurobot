const fs = require('fs');
const path = require('path');

const lessonsToProcess = ['118', '119', '120', '120B', '120C', '121', '122', '123', '126', '127', '128', '129'];
const basePath = path.join(__dirname, 'js', 'data', 'math');

lessonsToProcess.forEach(id => {
    const filePath = path.join(basePath, `${id}.js`);
    if (!fs.existsSync(filePath)) {
        console.log(`Skipping ${id}, file not found.`);
        return;
    }

    let fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // Tạo folder
    const dirPath = path.join(basePath, id);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    // Backup
    fs.copyFileSync(filePath, path.join(basePath, `${id}.js.bak`));

    // Extract script blocks
    let logicJsContent = `// Logic for Lesson ${id}\n\n`;
    const scriptRegex = /<script>([\s\S]*?)<\/script>/gi;
    let match;
    while ((match = scriptRegex.exec(fileContent)) !== null) {
        logicJsContent += match[1].trim() + '\n\n';
    }
    
    // Remove script blocks from fileContent for data.js
    let sanitizedContent = fileContent.replace(scriptRegex, '');
    
    let indexJsContent = `import { lesson${id} } from './data.js';
import './logic.js';

export { lesson${id} };
window.lesson${id} = lesson${id};
console.log("Lesson ${id} Modularized Successfully!");
`;

    fs.writeFileSync(path.join(dirPath, 'data.js'), sanitizedContent, 'utf-8');
    fs.writeFileSync(path.join(dirPath, 'logic.js'), logicJsContent, 'utf-8');
    fs.writeFileSync(path.join(dirPath, 'presentation.js'), `export const lesson${id}Presentation = [];`, 'utf-8');
    fs.writeFileSync(path.join(dirPath, 'index.js'), indexJsContent, 'utf-8');
    
    fs.unlinkSync(filePath);
    console.log(`Successfully modularized ${id}`);
});

// Update manifest.js
const manifestPath = path.join(basePath, 'manifest.js');
let manifestContent = fs.readFileSync(manifestPath, 'utf-8');
lessonsToProcess.forEach(id => {
    const regex = new RegExp(`({ period: "${id}", week: "[\\d]+", title: ".*?", topic: ".*?")\\s*}(.*)`, 'g');
    manifestContent = manifestContent.replace(regex, `$1, modulePath: "./${id}/index.js", exportName: "lesson${id}" }$2`);
});
fs.writeFileSync(manifestPath, manifestContent, 'utf-8');
console.log("Manifest updated.");

