/**
 * Script xóa tất cả học sinh (Firestore + Firebase Auth)
 * Dùng Firebase Admin SDK - không bị giới hạn
 * 
 * Cách dùng:
 * 1. Đặt serviceAccount.json vào cùng thư mục gốc của dự án
 * 2. Chạy: node scripts/delete-students.mjs
 */

import { createRequire } from 'module';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const require = createRequire(import.meta.url);
const admin = require('firebase-admin');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const serviceAccount = JSON.parse(
    readFileSync(join(__dirname, '..', 'serviceAccount.json'), 'utf-8')
);

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const auth = admin.auth();
const db = admin.firestore();

async function deleteAllStudents() {
    console.log('\n🗑️  Bắt đầu xóa tất cả học sinh (Firestore + Firebase Auth)...\n');

    // 1. Lấy danh sách uid từ Firestore (role = student)
    const snapshot = await db.collection('users').where('role', '==', 'student').get();
    const uids = snapshot.docs.map(d => d.id);
    const total = uids.length;

    if (total === 0) {
        console.log('ℹ️  Không có học sinh nào trong Firestore.');
        process.exit(0);
    }

    console.log(`📋 Tìm thấy ${total} học sinh trong Firestore.`);

    // 2. Xóa Firestore (batch 400/lần)
    console.log('\n📂 Đang xóa Firestore...');
    const chunks = [];
    for (let i = 0; i < snapshot.docs.length; i += 400) {
        chunks.push(snapshot.docs.slice(i, i + 400));
    }
    for (const chunk of chunks) {
        const batch = db.batch();
        chunk.forEach(doc => batch.delete(doc.ref));
        await batch.commit();
        console.log(`   ✅ Đã xóa ${chunk.length} document Firestore`);
    }

    // 3. Xóa Firebase Auth (batch 100/lần - giới hạn của Admin SDK)
    console.log('\n🔐 Đang xóa Firebase Auth...');
    let authDeleted = 0, authFailed = 0;
    for (let i = 0; i < uids.length; i += 100) {
        const batch = uids.slice(i, i + 100);
        try {
            const result = await auth.deleteUsers(batch);
            authDeleted += result.successCount;
            authFailed += result.failureCount;
            if (result.errors.length > 0) {
                result.errors.forEach(e => console.log(`   ⚠️  Lỗi uid ${e.index}: ${e.error.message}`));
            }
            console.log(`   ✅ Auth: đã xóa ${authDeleted}/${total}`);
        } catch (e) {
            console.log(`   ❌ Lỗi batch Auth: ${e.message}`);
        }
    }

    console.log(`\n${'='.repeat(50)}`);
    console.log(`✨ HOÀN TẤT!`);
    console.log(`   🗑️  Firestore: đã xóa ${total} document`);
    console.log(`   🔐 Firebase Auth: đã xóa ${authDeleted}, thất bại ${authFailed}`);
    console.log('='.repeat(50));
    process.exit(0);
}

deleteAllStudents().catch(err => {
    console.error('Lỗi nghiêm trọng:', err);
    process.exit(1);
});
