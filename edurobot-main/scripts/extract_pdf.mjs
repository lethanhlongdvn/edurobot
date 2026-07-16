import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');

async function extractText(filePath, outputFile) {
    try {
        if (!fs.existsSync(filePath)) {
            console.error(`File ${filePath} does not exist`);
            return;
        }
        const dataBuffer = fs.readFileSync(filePath);
        const data = await PDFParse(dataBuffer);
        fs.writeFileSync(outputFile, data.text);
        console.log(`Extracted text from ${filePath} to ${outputFile}`);
    } catch (error) {
        console.error(`Error extracting text from ${filePath}:`, error);
    }
}

async function run() {
    await extractText('docs/reference/PPCT TV 5.pdf', 'docs/reference/PPCT_TV_5.txt');
}

run();
