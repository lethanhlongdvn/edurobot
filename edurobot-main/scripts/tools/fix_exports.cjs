const fs = require('fs');
const path = require('path');

const lessonsToProcess = ['118', '119', '120', '120B', '120C', '121', '122', '123', '126', '127', '128', '129'];
const basePath = path.join(__dirname, 'js', 'data', 'math');

lessonsToProcess.forEach(id => {
    const dirPath = path.join(basePath, id);
    const indexPath = path.join(dirPath, 'index.js');
    
    if (!fs.existsSync(indexPath)) {
        console.log(`Skipping ${id}, missing files.`);
        return;
    }

    let indexJsContent = `import { lesson${id} as dataObj } from './data.js';
import './logic.js';

export const lesson${id} = {
    ...dataObj
};

window.lesson${id} = lesson${id};
console.log("Lesson ${id} Export Fixed!");
`;
    fs.writeFileSync(indexPath, indexJsContent, 'utf-8');
    console.log(`Fixed exports for ${id}`);
});
