/**
 * Script chuẩn hóa điểm số - EduRobot
 * Tự động đưa các điểm số > 100 về mức trần 100%
 * Chạy: node scripts/normalize_scores.js
 */

import { createRequire } from 'module';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const require = createRequire(import.meta.url);
const admin = require('firebase-admin');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load service account (giống script import-students-admin.mjs)
const serviceAccount = JSON.parse(
    readFileSync(join(__dirname, '..', 'serviceAccount.json'), 'utf-8')
);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Các collection cần quét
const COLLECTIONS = ["diem_tieng_viet_lop5", "essays_v2"];

// Các trường điểm số cần kiểm tra
const SCORE_FIELDS = ["score", "scoreQuiz", "aiScore", "scorePractice", "luyenTapScore", "cungCoScore"];

async function normalizeScores() {
    console.log(`\n🚀 Bắt đầu quét và chuẩn hóa điểm số (> 100 -> 100)...\n`);

    for (const collName of COLLECTIONS) {
        console.log(`--- Đang xử lý collection: ${collName} ---`);
        const snapshot = await db.collection(collName).get();
        console.log(`Tìm thấy ${snapshot.size} tài liệu.`);

        let updatedCount = 0;
        let batch = db.batch();
        let batchCount = 0;

        for (const doc of snapshot.docs) {
            const data = doc.data();
            let hasChange = false;
            let updateData = {};

            SCORE_FIELDS.forEach(field => {
                if (data[field] !== undefined && data[field] !== null) {
                    let val = parseFloat(data[field]);
                    if (!isNaN(val) && val > 100) {
                        updateData[field] = 100;
                        hasChange = true;
                        console.log(`[${collName}] Fix ${doc.id}: ${field} ${val} -> 100`);
                    }
                }
            });

            if (hasChange) {
                batch.update(doc.ref, updateData);
                updatedCount++;
                batchCount++;

                // Commit batch mỗi 400 docs (giới hạn Firestore là 500)
                if (batchCount >= 400) {
                    await batch.commit();
                    batch = db.batch();
                    batchCount = 0;
                }
            }
        }

        if (batchCount > 0) {
            await batch.commit();
        }

        console.log(`✅ Hoàn tất ${collName}: Đã sửa ${updatedCount} tài liệu.\n`);
    }

    console.log(`✨ TẤT CẢ ĐÃ HOÀN TẤT!`);
    process.exit(0);
}

normalizeScores().catch(err => {
    console.error('Lỗi nghiêm trọng:', err);
    process.exit(1);
});
