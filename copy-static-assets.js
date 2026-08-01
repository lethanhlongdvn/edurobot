import fs from 'fs';
import path from 'path';

function copyDir(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    let entries = fs.readdirSync(src, { withFileTypes: true });

    for (let entry of entries) {
        let srcPath = path.join(src, entry.name);
        let destPath = path.join(dest, entry.name);

        // Skip node_modules, .git, and dist
        if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'dist' || entry.name === 'edurobot-main') {
            continue;
        }

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

console.log('--- Post-Build Static Copy Script ---');

// Folders to copy to dist
const foldersToCopy = ['assets', 'games', 'js', 'pages', 'css'];

foldersToCopy.forEach(folder => {
    if (fs.existsSync(folder)) {
        console.log(`Copying "${folder}" folder to "dist/${folder}"...`);
        copyDir(folder, path.join('dist', folder));
    } else {
        console.warn(`Warning: Directory "${folder}" does not exist, skipping.`);
    }
});

// Also copy students_data.json and other root JSON if needed
const filesToCopy = ['students_data.json', 'CNAME'];
filesToCopy.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`Copying "${file}" to "dist/${file}"...`);
        fs.copyFileSync(file, path.join('dist', file));
    }
});

console.log('Post-build static assets copy complete!');
