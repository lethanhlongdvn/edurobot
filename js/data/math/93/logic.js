// ===================================================================
// Tiết 93 - Bài 37: Tỉ lệ bản đồ và ứng dụng (tiết 1)
// LOGIC: Xử lý chấm điểm độc lập từng bài tập
// ===================================================================

// Hàm dọn dẹp khoảng trắng để so sánh dễ dàng hơn
const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().replace(/\s+/g, '');
};

// ==========================================
// BÀI 1a: Chiều dài thật AB
// ==========================================
window.check_93_1_a = () => {
    const a1 = cleanString(document.getElementById('93-1-a1')?.value);
    const a2 = cleanString(document.getElementById('93-1-a2')?.value);
    const a3 = cleanString(document.getElementById('93-1-a3')?.value);
    const a4 = cleanString(document.getElementById('93-1-a4')?.value);

    const isCorrect = (a1 === '6000') && (a2 === '6000') && (a3 === '60') && (a4 === '60');
    const rightAnswer = "6 000; 6 000; 60; 60";
    const studentAnswer = `${a1 || '?'}; ${a2 || '?'}; ${a3 || '?'}; ${a4 || '?'}`;

    const guidance = "Em hãy nhân độ dài trên bản đồ (6 cm) với tỉ lệ bản đồ (1 000) để ra độ dài thật bằng xăng-ti-mét. Sau đó đổi đơn vị sang mét nhé!";
    const solution = "Trong thực tế, chiều dài khu vườn hoa, cây cảnh là:<br>6 x 1 000 = 6 000 (cm)<br>Đổi: 6 000 cm = 60 m<br>Đáp số: 60 m.<br>Chúc mừng em đã làm bài chính xác!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    
    // Ghi nhận kết quả
    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('93_1_a', score, 'btn-check-93-1a', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 1b: Chiều rộng MN trên bản đồ
// ==========================================
window.check_93_1_b = () => {
    const b1 = cleanString(document.getElementById('93-1-b1')?.value);
    const b2 = cleanString(document.getElementById('93-1-b2')?.value);
    const b3 = cleanString(document.getElementById('93-1-b3')?.value);
    const b4 = cleanString(document.getElementById('93-1-b4')?.value);

    const isCorrect = (b1 === '5000') && (b2 === '5000') && (b3 === '5') && (b4 === '5');
    const rightAnswer = "5 000; 5 000; 5; 5";
    const studentAnswer = `${b1 || '?'}; ${b2 || '?'}; ${b3 || '?'}; ${b4 || '?'}`;

    const guidance = "Trước tiên em hãy đổi chiều rộng thật 50 m ra xăng-ti-mét. Sau đó chia cho 1 000 để tìm độ dài tương ứng trên bản đồ nhé!";
    const solution = "Đổi: 50 m = 5 000 cm<br>Trên bản đồ, chiều rộng khu vui chơi cho trẻ em là:<br>5 000 : 1 000 = 5 (cm)<br>Đáp số: 5 cm.<br>Tuyệt vời! Em giải bài rất tốt!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('93_1_b', score, 'btn-check-93-1b', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 2: Chặng đua xe đạp
// ==========================================
window.check_93_2 = () => {
    const r1 = cleanString(document.getElementById('93-2-1')?.value);
    const r2 = cleanString(document.getElementById('93-2-2')?.value);
    const r3 = cleanString(document.getElementById('93-2-3')?.value);
    const r4 = cleanString(document.getElementById('93-2-4')?.value);

    const isCorrect = (r1 === '16000000') && (r2 === '16000000') && (r3 === '16') && (r4 === '16');
    const rightAnswer = "16 000 000; 16 000 000; 16; 16";
    const studentAnswer = `${r1 || '?'}; ${r2 || '?'}; ${r3 || '?'}; ${r4 || '?'}`;

    const guidance = "Đổi quãng đường 160 km sang xăng-ti-mét (1 km = 100 000 cm). Sau đó chia cho tỉ lệ bản đồ (1 000 000) để tìm quãng đường trên bản đồ.";
    const solution = "Đổi: 160 km = 16 000 000 cm<br>Quãng đường đó trên bản đồ dài số xăng-ti-mét là:<br>16 000 000 : 1 000 000 = 16 (cm)<br>Đáp số: 16 cm.<br>Em làm bài rất xuất sắc!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('93_2', score, 'btn-check-93-2', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// HỖ TRỢ PHÓNG TO HÌNH ẢNH CHO TIẾT 93
// ==========================================
window.zoomImage93 = (src, alt) => {
    let modal = document.getElementById('image-zoom-modal-93');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-zoom-modal-93';
        modal.className = 'fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300';
        modal.innerHTML = `
            <div class="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl p-3 shadow-2xl border-4 border-white animate-in zoom-in-95 duration-300 pointer-events-auto">
                <img id="zoom-modal-img-93" src="" alt="" class="max-w-[85vw] max-h-[80vh] object-contain rounded-2xl">
                <p id="zoom-modal-caption-93" class="text-center font-bold text-slate-700 mt-3 text-lg md:text-xl"></p>
                <button onclick="document.getElementById('image-zoom-modal-93').remove()" class="absolute -top-4 -right-4 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-white hover:bg-red-600 transition-colors cursor-pointer" title="Đóng">✕</button>
            </div>
        `;
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        };
        document.body.appendChild(modal);
    }
    document.getElementById('zoom-modal-img-93').src = src;
    document.getElementById('zoom-modal-caption-93').innerText = alt;
};
