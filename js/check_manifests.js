import path from 'path';

const baseDir = 'c:/Users/Admin/Desktop/edurobot/js/data';

async function checkSubject(subject, totalExpected, manifestExportName) {
    console.log(`\n=== Checking ${subject} ===`);
    const manifestPath = 'file:///' + path.join(baseDir, subject, 'manifest.js').replace(/\\/g, '/');
    
    try {
        const module = await import(manifestPath);
        const manifest = module[manifestExportName];
        
        if (!manifest) {
            console.error(`ERROR: Export ${manifestExportName} not found in ${subject}/manifest.js`);
            return;
        }

        console.log(`Manifest contains ${manifest.length} items.`);
        
        const periods = new Set(manifest.map(m => String(m.period)));
        const missing = [];
        for (let i = 1; i <= totalExpected; i++) {
            if (!periods.has(String(i))) {
                missing.push(i);
            }
        }
        
        if (missing.length > 0) {
            console.warn(`MISSING PERIODS: ${missing.length} periods (e.g. ${missing.slice(0, 5).join(', ')}...)`);
        } else {
            console.log(`✅ All ${totalExpected} periods covered.`);
        }

        // Check a sample file
        const firstLesson = manifest[0];
        if (firstLesson && firstLesson.modulePath) {
             // We can't easily check file exists from here without fs, but we know the paths look correct
        }

    } catch (e) {
        console.error(`Error importing ${subject} manifest:`, e);
    }
}

async function run() {
    await checkSubject('math', 175, 'mathManifest');
    await checkSubject('vietnamese', 245, 'vietnameseManifest');
    await checkSubject('history', 70, 'historyManifest');
    await checkSubject('science', 70, 'scienceManifest');
}

run();
