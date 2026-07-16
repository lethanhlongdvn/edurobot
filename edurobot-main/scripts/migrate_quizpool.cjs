/**
 * migrate_quizpool.cjs
 * 
 * Migrates quizPool data from lesson index.js files into question_bank.txt
 * and generates new questions for periods that have no data anywhere.
 * 
 * Usage: node scripts/migrate_quizpool.cjs [--dry-run]
 */

const fs = require('fs');
const path = require('path');

const BANK_PATH = path.join(__dirname, '..', 'js', 'data', 'math', 'question_bank.txt');
const MATH_DIR = path.join(__dirname, '..', 'js', 'data', 'math');
const DRY_RUN = process.argv.includes('--dry-run');

// Read existing bank
const bankContent = fs.readFileSync(BANK_PATH, 'utf8');
const bankLines = bankContent.split('\n');
const headerLine = bankLines[0];

// Parse existing entries to find max ID and existing periods
let maxId = 0;
const existingPeriods = new Set();
const existingEntries = [];

bankLines.slice(1).forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || !trimmed.match(/^\d+\s*\|/)) return;
    const parts = trimmed.split('|').map(p => p.trim());
    const id = parseInt(parts[0]);
    if (id > maxId) maxId = id;
    existingPeriods.add(parts[1]);
    existingEntries.push(trimmed);
});

console.log(`\n📊 Current bank: ${existingEntries.length} questions, max ID: ${maxId}`);
console.log(`📊 Periods covered: ${[...existingPeriods].sort((a, b) => a.localeCompare(b, undefined, { numeric: true })).join(', ')}`);

// ============================================================
// PHASE 1: Migrate quizPool from tiết 155
// ============================================================
const quizPoolData155 = [
    { q: "Số thập phân 'Bốn mươi tám đơn vị, chín phần trăm' viết là:", a: "48,09", d: "48,9, 4,89, 48,009" },
    { q: "Chữ số 5 trong số 12,354 có giá trị là:", a: "0,05", d: "0,5, 0,005, 5" },
    { q: "25/100 viết dưới dạng số thập phân là:", a: "0,25", d: "2,5, 0,025, 25" },
    { q: "Chọn dấu thích hợp: 15,2 ... 15,199", a: ">", d: "<, =" },
    { q: "4m 8cm = ... m", a: "4,08", d: "4,8, 40,8, 0,48" },
    { q: "0,75 viết dưới dạng phân số tối giản là:", a: "3/4", d: "1/4, 1/2, 75/100" },
    { q: "Số thập phân nào lớn nhất trong các số sau: 0,8; 0,81; 0,799; 0,09?", a: "0,81", d: "0,8, 0,799, 0,09" },
    { q: "60% viết dưới dạng số thập phân là:", a: "0,6", d: "6,0, 0,06, 60" },
    { q: "Một mảnh vườn có diện tích 100 m². 25% diện tích là:", a: "25 m²", d: "50 m², 75 m², 5 m²" },
    { q: "Gấp rưỡi tương ứng với bao nhiêu phần trăm?", a: "150%", d: "50%, 100%, 200%" },
    { q: "1,2 kg = ... g", a: "1200", d: "120, 12, 12000" },
    { q: "Số 108,06 đọc là:", a: "Một trăm linh tám phẩy không sáu", d: "Một trăm linh tám phẩy sáu, Một trăm tám phẩy không sáu, Mười tám phẩy không sáu" },
    { q: "Phân số 7/4 viết dưới dạng số thập phân là:", a: "1,75", d: "1,4, 0,74, 7,4" },
    { q: "Chọn dấu thích hợp: 9,8 ... 9,80", a: "=", d: ">, <" },
    { q: "Sắp xếp 1,2; 1,02; 1,22 từ bé đến lớn:", a: "1,02; 1,2; 1,22", d: "1,2; 1,02; 1,22, 1,22; 1,2; 1,02" },
];

// ============================================================
// PHASE 2: New questions for missing major periods
// ============================================================

// Tiết 135: NHÂN, CHIA SỐ ĐO THỜI GIAN VỚI MỘT SỐ (TIẾT 3)
const q135 = [
    { q: "2 giờ 15 phút × 3 = ?", a: "6 giờ 45 phút", d: "6 giờ 30 phút, 7 giờ 15 phút, 5 giờ 45 phút" },
    { q: "4 giờ 30 phút : 2 = ?", a: "2 giờ 15 phút", d: "2 giờ 30 phút, 2 giờ, 3 giờ 15 phút" },
    { q: "1 giờ 40 phút × 4 = ?", a: "6 giờ 40 phút", d: "4 giờ 40 phút, 5 giờ 20 phút, 7 giờ 20 phút" },
    { q: "3 phút 20 giây × 5 = ?", a: "16 phút 40 giây", d: "15 phút 40 giây, 17 phút, 16 phút 20 giây" },
    { q: "8 giờ 24 phút : 4 = ?", a: "2 giờ 6 phút", d: "2 giờ 4 phút, 2 giờ 24 phút, 2 giờ 12 phút" },
    { q: "5 phút 45 giây : 3 = ?", a: "1 phút 55 giây", d: "1 phút 45 giây, 2 phút 15 giây, 1 phút 50 giây" },
    { q: "3 giờ 48 phút : 6 = ?", a: "38 phút", d: "36 phút, 40 phút, 42 phút" },
    { q: "12 phút 36 giây × 2 = ?", a: "25 phút 12 giây", d: "24 phút 36 giây, 25 phút, 24 phút 72 giây" },
    { q: "6 giờ 30 phút : 5 = ?", a: "1 giờ 18 phút", d: "1 giờ 6 phút, 1 giờ 30 phút, 1 giờ 15 phút" },
    { q: "Một công nhân làm 1 sản phẩm hết 2 phút 30 giây. Làm 6 sản phẩm hết bao lâu?", a: "15 phút", d: "12 phút, 14 phút 30 giây, 16 phút" },
    { q: "Ba bạn chạy tiếp sức, mỗi bạn chạy 1 phút 25 giây. Tổng thời gian là?", a: "4 phút 15 giây", d: "3 phút 75 giây, 4 phút 5 giây, 5 phút 15 giây" },
    { q: "Một chuyến xe tốn 9 giờ 36 phút cho 4 chuyến bằng nhau. Mỗi chuyến bao lâu?", a: "2 giờ 24 phút", d: "2 giờ 9 phút, 2 giờ 36 phút, 3 giờ" },
    { q: "7 phút 12 giây × 5 = ?", a: "36 phút", d: "35 phút 12 giây, 36 phút 60 giây, 35 phút" },
    { q: "10 giờ 50 phút : 5 = ?", a: "2 giờ 10 phút", d: "2 giờ 5 phút, 2 giờ 50 phút, 2 giờ" },
    { q: "Bạn Minh tập thể dục 45 phút mỗi ngày. Mỗi tuần (7 ngày) bạn tập bao nhiêu?", a: "5 giờ 15 phút", d: "5 giờ 45 phút, 4 giờ 15 phút, 6 giờ" },
];

// Tiết 145: LUYỆN TẬP CHUNG (TIẾT 3) - ôn tập vận tốc, quãng đường, thời gian
const q145 = [
    { q: "Một ô tô đi 150km trong 3 giờ. Vận tốc là?", a: "50 km/h", d: "60 km/h, 45 km/h, 75 km/h" },
    { q: "Vận tốc 40km/h, thời gian 2,5 giờ. Quãng đường là?", a: "100 km", d: "80 km, 120 km, 90 km" },
    { q: "Quãng đường 180km, vận tốc 60km/h. Thời gian là?", a: "3 giờ", d: "2 giờ, 4 giờ, 2,5 giờ" },
    { q: "Đổi 36km/h sang m/phút:", a: "600 m/phút", d: "60 m/phút, 360 m/phút, 6000 m/phút" },
    { q: "Một xe máy đi 75km trong 1 giờ 30 phút. Vận tốc là?", a: "50 km/h", d: "45 km/h, 60 km/h, 75 km/h" },
    { q: "Hai xe khởi hành cùng lúc ngược chiều, v₁=40km/h, v₂=50km/h. Sau 2 giờ cách nhau?", a: "180 km", d: "90 km, 160 km, 200 km" },
    { q: "Một người đi bộ 4,5km hết 1 giờ 30 phút. Vận tốc là?", a: "3 km/h", d: "4 km/h, 4,5 km/h, 2,5 km/h" },
    { q: "Vận tốc 15m/s. Đổi sang km/h:", a: "54 km/h", d: "45 km/h, 60 km/h, 15 km/h" },
    { q: "Quãng đường AB = 240km. Xe đi v=60km/h xuất phát lúc 7:00. Đến nơi lúc?", a: "11:00", d: "10:00, 11:30, 10:30" },
    { q: "Một ca nô đi 35km trong 1 giờ 10 phút. Vận tốc là?", a: "30 km/h", d: "35 km/h, 25 km/h, 40 km/h" },
    { q: "Hai người cùng khởi hành, cùng chiều. v₁=12km/h, v₂=8km/h. Sau 3 giờ khoảng cách là?", a: "12 km", d: "4 km, 8 km, 36 km" },
    { q: "Đổi 5m/s sang m/phút:", a: "300 m/phút", d: "50 m/phút, 500 m/phút, 30 m/phút" },
    { q: "Một đoàn tàu dài 200m chạy qua cầu dài 800m hết 50 giây. Vận tốc là?", a: "20 m/s", d: "16 m/s, 10 m/s, 40 m/s" },
    { q: "Thời gian = 45 phút. Đổi ra giờ:", a: "0,75 giờ", d: "0,45 giờ, 0,5 giờ, 1,15 giờ" },
    { q: "Quãng đường 12km, thời gian 48 phút. Vận tốc (km/h) là?", a: "15 km/h", d: "12 km/h, 20 km/h, 10 km/h" },
];

// Tiết 146: THU THẬP, PHÂN LOẠI, SẮP XẾP CÁC SỐ LIỆU
const q146 = [
    { q: "Thu thập số liệu là gì?", a: "Ghi chép và tổ chức thông tin từ thực tế", d: "Vẽ biểu đồ, Tính trung bình, Đếm số trang sách" },
    { q: "Khi phân loại số liệu ta cần:", a: "Chia thành các nhóm theo tiêu chí", d: "Cộng tất cả lại, Vẽ biểu đồ, Xóa số liệu trùng" },
    { q: "Lớp 5A có: 12 giỏi, 18 khá, 8 TB. Tổng số HS là?", a: "38", d: "28, 30, 40" },
    { q: "Lớp 5A có: 12 giỏi, 18 khá, 8 TB. Loại nào nhiều nhất?", a: "Khá", d: "Giỏi, Trung bình, Bằng nhau" },
    { q: "Điểm kiểm tra: 8, 9, 7, 10, 8, 9, 8. Điểm xuất hiện nhiều nhất là?", a: "8", d: "9, 7, 10" },
    { q: "Sắp xếp: 7, 10, 8, 9 từ bé đến lớn:", a: "7, 8, 9, 10", d: "10, 9, 8, 7, 7, 9, 8, 10, 8, 7, 10, 9" },
    { q: "Loại biểu đồ nào thể hiện tỉ lệ phần trăm tốt nhất?", a: "Biểu đồ hình quạt tròn", d: "Biểu đồ cột, Bảng số liệu, Biểu đồ đường" },
    { q: "Bảng số liệu ghi cân nặng 5 bạn: 28, 32, 30, 35, 25 kg. Bạn nặng nhất cân?", a: "35 kg", d: "32 kg, 30 kg, 28 kg" },
    { q: "Khảo sát môn yêu thích: Toán:15, Tiếng Việt:10, T.Anh:12, Khoa học:8. Tổng HS?", a: "45", d: "35, 40, 50" },
    { q: "Dãy số: 5, 8, 3, 8, 5, 7, 8. Số 8 xuất hiện bao nhiêu lần?", a: "3", d: "2, 4, 1" },
    { q: "Trung bình cộng của 4, 6, 8, 10 là?", a: "7", d: "6, 8, 28" },
    { q: "Khi sắp xếp số liệu từ lớn đến bé, ta gọi là:", a: "Sắp xếp giảm dần", d: "Sắp xếp tăng dần, Phân nhóm, Thu thập" },
    { q: "Một cửa hàng bán: T2:20, T3:15, T4:25, T5:18 sản phẩm. Ngày bán nhiều nhất?", a: "Thứ Tư", d: "Thứ Hai, Thứ Ba, Thứ Năm" },
    { q: "Bảng theo dõi nhiệt độ: 28°C, 30°C, 32°C, 29°C. Chênh lệch lớn nhất là?", a: "4°C", d: "2°C, 3°C, 5°C" },
    { q: "Thu thập số liệu bằng cách nào KHÔNG phù hợp?", a: "Tự bịa số liệu", d: "Phỏng vấn, Quan sát ghi chép, Đo đạc thực tế" },
];

// Tiết 147: BIỂU ĐỒ HÌNH QUẠT TRÒN (TIẾT 1)
const q147 = [
    { q: "Biểu đồ hình quạt tròn dùng để:", a: "Thể hiện tỉ lệ phần trăm các thành phần", d: "So sánh chiều cao, Vẽ đường đi, Tính diện tích" },
    { q: "Tổng các phần trong biểu đồ hình quạt tròn bằng:", a: "100%", d: "50%, 200%, Tùy bài" },
    { q: "Biểu đồ: Toán 40%, T.Việt 30%, còn lại T.Anh. T.Anh chiếm?", a: "30%", d: "20%, 40%, 10%" },
    { q: "Phần nào chiếm 1/4 hình tròn thì bằng bao nhiêu %?", a: "25%", d: "50%, 20%, 10%" },
    { q: "Nửa hình tròn tương ứng với bao nhiêu %?", a: "50%", d: "25%, 75%, 100%" },
    { q: "Lớp 40 HS, biểu đồ cho thấy 25% thích bóng đá. Bao nhiêu HS?", a: "10", d: "15, 20, 8" },
    { q: "Biểu đồ quạt: Đỏ 35%, Xanh 45%, Vàng còn lại. Vàng bằng?", a: "20%", d: "15%, 25%, 10%" },
    { q: "Phần 75% trên biểu đồ quạt trông giống:", a: "3/4 hình tròn", d: "1/4 hình tròn, 1/2 hình tròn, Gần hết hình tròn" },
    { q: "100 HS khảo sát, 30% thích Khoa học. Bao nhiêu HS?", a: "30", d: "20, 40, 10" },
    { q: "Biểu đồ quạt không thể hiện được điều gì?", a: "Sự thay đổi theo thời gian", d: "Tỉ lệ phần trăm, Phần lớn nhất, So sánh các thành phần" },
    { q: "200 HS, biểu đồ thể hiện 15% đi xe buýt. Bao nhiêu HS?", a: "30", d: "15, 20, 40" },
    { q: "Biểu đồ quạt có 3 phần: 50%, 30%, phần còn lại là?", a: "20%", d: "30%, 10%, 25%" },
    { q: "Phần chiếm 10% trên hình tròn sẽ:", a: "Là phần rất nhỏ", d: "Chiếm 1/4 hình tròn, Chiếm nửa hình tròn, Gần hết" },
    { q: "80 quả, 25% là cam. Số cam là?", a: "20", d: "25, 15, 40" },
    { q: "Một phần bằng 1/5 hình tròn tương ứng bao nhiêu %?", a: "20%", d: "25%, 15%, 10%" },
];

// Tiết 148: BIỂU ĐỒ HÌNH QUẠT TRÒN (TIẾT 2)
const q148 = [
    { q: "Biểu đồ quạt: Nước 60%, Sữa 25%, Nước ép 15%. Tổng 200 ly. Nước bao nhiêu ly?", a: "120", d: "100, 60, 150" },
    { q: "Biểu đồ quạt cửa hàng: Áo 40%, Quần 35%, Phụ kiện 25%. 500 SP. Quần bao nhiêu?", a: "175", d: "200, 150, 125" },
    { q: "Nếu 2 phần bằng nhau trên biểu đồ quạt, mỗi phần chiếm:", a: "Cùng % như nhau", d: "Phần trước lớn hơn, Phần sau lớn hơn, Không thể biết" },
    { q: "300 HS, biểu đồ: 45% nam. Số HS nữ là?", a: "165", d: "135, 150, 180" },
    { q: "Biểu đồ quạt: Loại A 30%, B 50%, C còn lại. 400 SP. Số SP loại C?", a: "80", d: "120, 200, 100" },
    { q: "Để vẽ biểu đồ quạt, bước đầu tiên là:", a: "Tính tỉ lệ phần trăm mỗi thành phần", d: "Vẽ hình tròn, Tô màu, Viết tiêu đề" },
    { q: "Phần 40% chiếm bao nhiêu độ trên hình tròn?", a: "144°", d: "120°, 160°, 100°" },
    { q: "Hình tròn có 360°. Phần 25% tương ứng bao nhiêu độ?", a: "90°", d: "60°, 45°, 120°" },
    { q: "150 HS: Toán 40%, Khoa học 20%, T.Việt 40%. Số HS thích Khoa học?", a: "30", d: "40, 20, 60" },
    { q: "Biểu đồ quạt: A chiếm góc 180°. A tương ứng bao nhiêu %?", a: "50%", d: "25%, 75%, 100%" },
    { q: "Tổng doanh thu 1000 triệu. Biểu đồ: Q1 20%, Q2 30%, Q3 25%, Q4?", a: "250 triệu", d: "200 triệu, 300 triệu, 150 triệu" },
    { q: "Góc 72° trên biểu đồ quạt chiếm bao nhiêu %?", a: "20%", d: "25%, 15%, 10%" },
    { q: "60 quả bóng: Đỏ 30%, Xanh 50%. Số quả vàng là?", a: "12", d: "20, 18, 10" },
    { q: "Biểu đồ quạt nào đúng nếu A=50%, B=50%?", a: "Hai nửa hình tròn bằng nhau", d: "Một phần lớn hơn, Ba phần, Bốn phần" },
    { q: "240 HS, biểu đồ: Đi bộ 25%, Xe đạp 35%. Số HS đi xe đạp?", a: "84", d: "60, 96, 72" },
];

// Tiết 149: TỈ SỐ CỦA SỐ LẶP LẠI MỘT SỰ KIỆN SO VỚI TỔNG SỐ LẦN THỰC HIỆN
const q149 = [
    { q: "Gieo xúc xắc 20 lần, mặt 6 xuất hiện 4 lần. Tỉ số là?", a: "4/20", d: "6/20, 4/6, 20/4" },
    { q: "Tung đồng xu 50 lần, mặt sấp 28 lần. Tỉ số mặt sấp là?", a: "28/50", d: "22/50, 28/22, 50/28" },
    { q: "Rút thẻ 30 lần, thẻ đỏ 12 lần. Tỉ số thẻ đỏ là?", a: "12/30", d: "30/12, 12/18, 18/30" },
    { q: "Gieo xúc xắc 100 lần, mặt chẵn xuất hiện 52 lần. Tỉ lệ % là?", a: "52%", d: "48%, 50%, 26%" },
    { q: "Bắn 40 phát, trúng đích 32 phát. Tỉ số trúng đích là?", a: "32/40", d: "40/32, 8/40, 32/8" },
    { q: "Tung đồng xu 10 lần, ngửa 6 lần. Tỉ số mặt ngửa bằng bao nhiêu %?", a: "60%", d: "40%, 50%, 30%" },
    { q: "20 lần gieo xúc xắc: mặt 1 ra 3 lần. Tỉ số rút gọn?", a: "3/20", d: "1/20, 3/6, 17/20" },
    { q: "50 lần rút thẻ, thẻ xanh 15 lần. Tỉ lệ % thẻ xanh?", a: "30%", d: "15%, 35%, 50%" },
    { q: "Gieo xúc xắc 60 lần, mặt lẻ 28 lần. Tỉ số mặt chẵn?", a: "32/60", d: "28/60, 28/32, 60/28" },
    { q: "Quay mũi tên 25 lần, vùng đỏ 5 lần. Tỉ lệ % vùng đỏ?", a: "20%", d: "25%, 15%, 5%" },
    { q: "100 lần thí nghiệm, sự kiện A xảy ra 47 lần. Tỉ số là?", a: "47/100", d: "53/100, 47/53, 100/47" },
    { q: "Tỉ số lặp lại luôn nằm trong khoảng:", a: "Từ 0 đến 1", d: "Từ 0 đến 100, Từ 1 đến 10, Bất kỳ" },
    { q: "Gieo xúc xắc, mặt nào cũng có khả năng xuất hiện bằng nhau. Tỉ số mỗi mặt khoảng:", a: "1/6", d: "1/2, 1/3, 1/4" },
    { q: "80 lần bốc thăm, thăm trúng 20 lần. Tỉ lệ trúng?", a: "25%", d: "20%, 30%, 40%" },
    { q: "Rút bóng 40 lần: đỏ 16, xanh 14, vàng 10. Tỉ số bóng xanh?", a: "14/40", d: "16/40, 10/40, 14/16" },
];

// Tiết 150: THỰC HÀNH THU THẬP, PHÂN TÍCH, BIỂU DIỄN SỐ LIỆU (TIẾT 1)
const q150 = [
    { q: "Bước đầu tiên khi thu thập số liệu thống kê là:", a: "Xác định mục đích và nội dung cần thu thập", d: "Vẽ biểu đồ, Tính trung bình, Đếm số liệu" },
    { q: "Khảo sát chiều cao 5 bạn: 130, 128, 135, 132, 130 cm. Chiều cao cao nhất?", a: "135 cm", d: "132 cm, 130 cm, 128 cm" },
    { q: "Dãy số liệu: 4, 7, 4, 9, 4, 7. Giá trị xuất hiện nhiều nhất?", a: "4", d: "7, 9, Không có" },
    { q: "Trung bình cộng của 10, 20, 30 là:", a: "20", d: "10, 30, 60" },
    { q: "Cách nào phù hợp để thu thập số liệu về chiều cao HS?", a: "Đo bằng thước và ghi lại", d: "Hỏi ước lượng, Nhìn bằng mắt, Tự nghĩ ra" },
    { q: "Bảng tần số dùng để:", a: "Ghi lại số lần xuất hiện mỗi giá trị", d: "Tính tổng, Vẽ biểu đồ tròn, Sắp xếp từ A-Z" },
    { q: "Số liệu: 8, 6, 9, 7, 10. Giá trị nhỏ nhất?", a: "6", d: "7, 8, 9" },
    { q: "Khảo sát 30 HS, 12 HS thích bóng đá. Tỉ lệ %?", a: "40%", d: "30%, 50%, 12%" },
    { q: "Biểu đồ cột phù hợp để:", a: "So sánh số lượng giữa các nhóm", d: "Thể hiện tỉ lệ %, Vẽ đường xu hướng, Tính trung bình" },
    { q: "Điểm kiểm tra 5 bạn: 7, 8, 9, 8, 8. Điểm trung bình?", a: "8", d: "7, 9, 40" },
    { q: "Số liệu: 12, 15, 18, 12, 20, 15, 12. Giá trị 12 xuất hiện bao nhiêu lần?", a: "3", d: "2, 4, 1" },
    { q: "Khoảng biến thiên (range) của dãy 5, 12, 8, 3, 15 là:", a: "12", d: "10, 15, 5" },
    { q: "Loại biểu đồ nào thể hiện sự thay đổi theo thời gian tốt nhất?", a: "Biểu đồ đường", d: "Biểu đồ tròn, Biểu đồ cột, Bảng số liệu" },
    { q: "40 HS, biểu đồ cột cho thấy 15 HS đạt giỏi. Tỉ lệ?", a: "37,5%", d: "30%, 40%, 15%" },
    { q: "Sai sót thường gặp khi thu thập số liệu:", a: "Ghi nhầm hoặc bỏ sót dữ liệu", d: "Vẽ biểu đồ đẹp, Dùng nhiều màu, Viết chữ to" },
];

// Tiết 151: THỰC HÀNH THU THẬP, PHÂN TÍCH, BIỂU DIỄN SỐ LIỆU (TIẾT 2)
const q151 = [
    { q: "Khi trình bày kết quả thu thập, ta nên:", a: "Dùng bảng hoặc biểu đồ để trực quan", d: "Chỉ viết văn bản dài, Không cần trình bày, Chỉ đọc số" },
    { q: "Biểu đồ cột: T2=15, T3=20, T4=25, T5=18, T6=22. Ngày bán ít nhất?", a: "Thứ Hai", d: "Thứ Ba, Thứ Năm, Thứ Sáu" },
    { q: "50 HS khảo sát: Toán 18, T.Việt 12, T.Anh 10, TNXH 10. Toán chiếm bao nhiêu %?", a: "36%", d: "18%, 40%, 50%" },
    { q: "Biểu đồ đường cho thấy nhiệt độ tăng đều từ 20°C lên 32°C trong 4 giờ. Mỗi giờ tăng?", a: "3°C", d: "4°C, 2°C, 6°C" },
    { q: "Nhận xét 'Số liệu tăng sau đó giảm' thể hiện trên biểu đồ đường:", a: "Đường đi lên rồi đi xuống", d: "Đường luôn đi lên, Đường thẳng ngang, Đường luôn đi xuống" },
    { q: "Doanh thu 4 quý: Q1=200tr, Q2=350tr, Q3=280tr, Q4=400tr. Quý tăng nhiều nhất so với quý trước?", a: "Quý 2", d: "Quý 3, Quý 4, Quý 1" },
    { q: "Trung bình cộng của 15, 20, 25, 30, 10 là:", a: "20", d: "25, 15, 100" },
    { q: "Biểu đồ cột kép dùng để:", a: "So sánh 2 nhóm dữ liệu cùng tiêu chí", d: "Thể hiện 1 nhóm, Vẽ tỉ lệ %, Tính trung bình" },
    { q: "Khi phân tích số liệu, 'giá trị lớn nhất trừ giá trị nhỏ nhất' gọi là:", a: "Khoảng biến thiên", d: "Trung bình cộng, Tần số, Tỉ lệ" },
    { q: "100 HS: Giỏi 20%, Khá 45%, TB 30%, Yếu 5%. Số HS khá?", a: "45", d: "20, 50, 30" },
    { q: "Số liệu: 3, 5, 7, 5, 3, 7, 5. Trung bình cộng?", a: "5", d: "3, 7, 35" },
    { q: "Biểu đồ nào KHÔNG phải dạng biểu đồ thống kê?", a: "Biểu đồ tư duy", d: "Biểu đồ tròn, Biểu đồ cột, Biểu đồ đường" },
    { q: "Lượng mưa (mm): T1=20, T2=15, T3=30, T4=45. Tháng mưa nhiều nhất?", a: "Tháng 4", d: "Tháng 3, Tháng 1, Tháng 2" },
    { q: "Kết luận 'Tất cả HS đều thích Toán' từ khảo sát 5 bạn thì:", a: "Chưa đủ căn cứ vì mẫu quá nhỏ", d: "Hoàn toàn đúng, Có thể kết luận, Không cần kiểm tra" },
    { q: "Biểu đồ cột: Lớp 5A=38, 5B=42, 5C=35 HS. Tổng 3 lớp?", a: "115", d: "100, 120, 110" },
];

// Tiết 152: LUYỆN TẬP CHUNG - Số liệu và Biểu đồ
const q152 = [
    { q: "Biểu đồ tròn cho thấy 3/4 HS thích thể thao. Bằng bao nhiêu %?", a: "75%", d: "50%, 25%, 80%" },
    { q: "Biểu đồ cột: Đội A=8, B=5, C=12 bàn thắng. Đội ghi nhiều nhất?", a: "Đội C", d: "Đội A, Đội B, Bằng nhau" },
    { q: "120 HS, 40% thích bơi lội. Số HS thích bơi?", a: "48", d: "40, 60, 80" },
    { q: "Gieo xúc xắc 30 lần, mặt 3 xuất hiện 7 lần. Tỉ số?", a: "7/30", d: "3/30, 30/7, 7/3" },
    { q: "Trung bình cộng 5 số: 12, 15, 18, 10, 15 là:", a: "14", d: "15, 12, 70" },
    { q: "Biểu đồ quạt: Nam 55%, Nữ 45%. 200 HS. Nữ bao nhiêu?", a: "90", d: "110, 100, 80" },
    { q: "Dãy số: 6, 8, 6, 10, 6. Giá trị xuất hiện nhiều nhất?", a: "6", d: "8, 10, Không có" },
    { q: "Biểu đồ đường cho thấy doanh thu liên tục giảm. Nhận xét đúng?", a: "Kinh doanh đang gặp khó khăn", d: "Kinh doanh tốt, Ổn định, Không thể biết" },
    { q: "Tung đồng xu 80 lần, ngửa 38 lần. Tỉ lệ % mặt sấp?", a: "52,5%", d: "47,5%, 38%, 42%" },
    { q: "60 quả: Táo 30%, Cam 45%, Lê 25%. Cam bao nhiêu quả?", a: "27", d: "30, 18, 15" },
    { q: "Số liệu nhiệt độ 5 ngày: 28, 30, 27, 31, 29°C. Khoảng biến thiên?", a: "4°C", d: "3°C, 5°C, 29°C" },
    { q: "Biểu đồ cột kép: 5A Toán=8, Văn=7; 5B Toán=9, Văn=6. Lớp nào giỏi Toán hơn?", a: "5B", d: "5A, Bằng nhau, Không so sánh được" },
    { q: "50 lần bắn, trúng 40 lần. Tỉ lệ trúng?", a: "80%", d: "40%, 50%, 90%" },
    { q: "Biểu đồ tròn có 4 phần: 15%, 25%, 35%, phần còn lại?", a: "25%", d: "20%, 30%, 15%" },
    { q: "Điểm TB của Mai: 8, 7, 9, 10, 6. TB cộng?", a: "8", d: "7, 9, 40" },
];

// Tiết 153: ÔN TẬP SỐ TỰ NHIÊN (TIẾT 1)
const q153 = [
    { q: "Số tự nhiên nhỏ nhất là:", a: "0", d: "1, -1, 10" },
    { q: "Có bao nhiêu số tự nhiên có 3 chữ số?", a: "900", d: "999, 100, 899" },
    { q: "Số lớn nhất có 4 chữ số là:", a: "9999", d: "1000, 10000, 9990" },
    { q: "Chữ số 5 trong số 356 172 thuộc hàng nào?", a: "Hàng chục nghìn", d: "Hàng nghìn, Hàng trăm nghìn, Hàng trăm" },
    { q: "45 × 2 + 45 × 8 = 45 × ?", a: "10", d: "16, 6, 2" },
    { q: "Số nào chia hết cho cả 2 và 5?", a: "120", d: "125, 114, 135" },
    { q: "Ước chung lớn nhất của 12 và 18 là:", a: "6", d: "3, 12, 36" },
    { q: "Bội chung nhỏ nhất của 4 và 6 là:", a: "12", d: "24, 6, 2" },
    { q: "Số nào là số nguyên tố?", a: "17", d: "15, 21, 9" },
    { q: "36 = 2² × ?", a: "9", d: "3, 6, 18" },
    { q: "Số tự nhiên liền sau 9999 là:", a: "10 000", d: "9998, 10 001, 100 000" },
    { q: "Giá trị chữ số 8 trong 180 254 là:", a: "80 000", d: "8000, 800, 8" },
    { q: "24 ÷ 4 + 24 ÷ 6 = 24 ÷ ?", a: "Không đúng dạng", d: "10, 5, 2" },
    { q: "Tổng các chữ số của 2 457 là:", a: "18", d: "14, 16, 20" },
    { q: "Dãy số: 2, 5, 11, 23, ... Số tiếp theo là:", a: "47", d: "46, 35, 45" },
];

// Tiết 154: ÔN TẬP VỀ PHÂN SỐ VÀ HỖN SỐ (TIẾT 2)
const q154 = [
    { q: "Phân số 6/8 rút gọn được:", a: "3/4", d: "2/4, 1/2, 6/4" },
    { q: "Quy đồng 1/3 và 1/4. Mẫu chung là:", a: "12", d: "7, 3, 4" },
    { q: "1/2 + 1/3 = ?", a: "5/6", d: "2/5, 1/6, 3/5" },
    { q: "3/4 - 1/6 = ?", a: "7/12", d: "2/10, 1/2, 5/12" },
    { q: "Hỗn số 2⅓ viết dưới dạng phân số là:", a: "7/3", d: "5/3, 6/3, 8/3" },
    { q: "2/5 × 3/4 = ?", a: "6/20", d: "5/9, 6/9, 2/20" },
    { q: "3/4 : 1/2 = ?", a: "3/2", d: "3/8, 1/2, 6/4" },
    { q: "So sánh: 3/5 ... 2/3", a: "<", d: ">, =" },
    { q: "Phân số nào bằng 0,75?", a: "3/4", d: "7/10, 1/4, 75/10" },
    { q: "15% viết dưới dạng phân số tối giản:", a: "3/20", d: "15/100, 1/15, 3/10" },
    { q: "Hỗn số 1¾ viết dưới dạng phân số là:", a: "7/4", d: "5/4, 4/3, 3/4" },
    { q: "2/3 của 60 là:", a: "40", d: "30, 20, 90" },
    { q: "Một lớp có 40 HS, 3/8 là nữ. Số HS nữ là:", a: "15", d: "12, 20, 24" },
    { q: "Sắp xếp 1/2, 3/4, 2/3 từ bé đến lớn:", a: "1/2, 2/3, 3/4", d: "3/4, 2/3, 1/2, 2/3, 1/2, 3/4, 1/2, 3/4, 2/3" },
    { q: "5/6 - 1/3 = ?", a: "1/2", d: "4/3, 2/6, 5/9" },
];

// Combine all new data
const allNewData = [
    { period: '155', questions: quizPoolData155 },
    { period: '135', questions: q135 },
    { period: '145', questions: q145 },
    { period: '146', questions: q146 },
    { period: '147', questions: q147 },
    { period: '148', questions: q148 },
    { period: '149', questions: q149 },
    { period: '150', questions: q150 },
    { period: '151', questions: q151 },
    { period: '152', questions: q152 },
    { period: '153', questions: q153 },
    { period: '154', questions: q154 },
];

// Generate new lines
let nextId = maxId + 1;
const newLines = [];

allNewData.forEach(({ period, questions }) => {
    if (existingPeriods.has(period)) {
        console.log(`⚠️  Tiết ${period} đã tồn tại trong bank, bỏ qua.`);
        return;
    }
    
    console.log(`✅ Thêm tiết ${period}: ${questions.length} câu hỏi`);
    questions.forEach((q, idx) => {
        const level = 1; // Default level
        const line = `${nextId} | ${period} | ${level} | ${q.q} | ${q.a} | ${q.d}`;
        newLines.push(line);
        nextId++;
    });
});

console.log(`\n📝 Tổng cộng thêm: ${newLines.length} câu hỏi mới`);
console.log(`📝 ID cuối cùng: ${nextId - 1}`);
console.log(`📝 Tổng câu hỏi trong bank: ${existingEntries.length + newLines.length}`);

if (DRY_RUN) {
    console.log('\n🔍 DRY RUN - Không ghi file');
    console.log('\n--- Preview (5 dòng đầu) ---');
    newLines.slice(0, 5).forEach(l => console.log(l));
    console.log('...');
} else {
    // Append to file
    const appendContent = '\n' + newLines.join('\n') + '\n';
    fs.appendFileSync(BANK_PATH, appendContent);
    console.log('\n✅ Đã ghi vào question_bank.txt thành công!');
}
