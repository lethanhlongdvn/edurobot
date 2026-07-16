/**
 * Script nhập học sinh khối 5 - Trường TH Đỗ Văn Nại
 * Sử dụng Firebase Admin SDK -> không bị rate limit
 * Chạy: node scripts/import-students-admin.mjs
 */

import { createRequire } from 'module';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const require = createRequire(import.meta.url);
const admin = require('firebase-admin');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load service account
const serviceAccount = JSON.parse(
    readFileSync(join(__dirname, '..', 'serviceAccount.json'), 'utf-8')
);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const auth = admin.auth();
const db = admin.firestore();

// ===================== Danh sách học sinh =====================
function removeAccents(str) {
    return str.toLowerCase()
        .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a')
        .replace(/[èéẹẻẽêềếệểễ]/g, 'e')
        .replace(/[ìíịỉĩ]/g, 'i')
        .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o')
        .replace(/[ùúụủũưừứựửữ]/g, 'u')
        .replace(/[ỳýỵỷỹ]/g, 'y')
        .replace(/đ/g, 'd')
        .replace(/[^a-z0-9]/g, '.')
        .replace(/\.+/g, '.')
        .replace(/^\.+|\.+$/g, '');
}

// Load dữ liệu từ Excel đã xử lý (đọc students_import.json)
const studentsRaw = JSON.parse(readFileSync(join(__dirname, '..', 'students_import.json'), 'utf-8'));

// ===================== Main Import =====================
async function importStudents() {
    console.log(`\n🚀 Bắt đầu nhập ${studentsRaw.length} học sinh...\n`);

    let success = 0, existing = 0, failed = 0;
    const errors = [];

    for (let i = 0; i < studentsRaw.length; i++) {
        const s = studentsRaw[i];
        const idx = `[${i + 1}/${studentsRaw.length}]`;

        try {
            // Kiểm tra đã tồn tại chưa theo email
            let uid = null;
            try {
                const existingUser = await auth.getUserByEmail(s.email);
                uid = existingUser.uid;
                process.stdout.write(`⚠️  ${idx} Đã có Auth: ${s.name}\n`);
                existing++;
            } catch (e) {
                if (e.code === 'auth/user-not-found') {
                    // Tạo mới
                    const created = await auth.createUser({
                        email: s.email,
                        password: s.tempPassword,
                        displayName: s.name,
                    });
                    uid = created.uid;
                    process.stdout.write(`✅ ${idx} Tạo mới: ${s.name} (${s.studentClass})\n`);
                    success++;
                } else {
                    throw e;
                }
            }

            // Kiểm tra Firestore
            if (uid) {
                const fsDoc = await db.collection('users').doc(uid).get();
                if (!fsDoc.exists) {
                    await db.collection('users').doc(uid).set({
                        displayName: s.name,
                        name: s.name,
                        email: s.email,
                        role: 'student',
                        studentClass: s.studentClass,
                        school: s.school,
                        approved: true,
                        gender: s.gender,
                        dob: s.dob,
                        tempPassword: s.tempPassword,
                        createdAt: admin.firestore.FieldValue.serverTimestamp()
                    });
                }
            }

        } catch (e) {
            process.stdout.write(`❌ ${idx} Lỗi: ${s.name} — ${e.message}\n`);
            errors.push({ name: s.name, error: e.message });
            failed++;
        }
    }

    console.log(`\n${'='.repeat(50)}`);
    console.log(`✨ HOÀN TẤT!`);
    console.log(`   ✅ Tạo mới thành công : ${success}`);
    console.log(`   ⚠️  Đã tồn tại        : ${existing}`);
    console.log(`   ❌ Lỗi                : ${failed}`);
    if (errors.length > 0) {
        console.log(`\nChi tiết lỗi:`);
        errors.forEach(e => console.log(`   - ${e.name}: ${e.error}`));
    }
    console.log('='.repeat(50));

    process.exit(0);
}

importStudents().catch(err => {
    console.error('Lỗi nghiêm trọng:', err);
    process.exit(1);
});
