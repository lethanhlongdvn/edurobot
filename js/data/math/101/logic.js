// ===================================================================
// Tiết 101 - Bài 41: Tìm giá trị phần trăm của một số (tiết 1)
// LOGIC: Chấm điểm bài giải bằng nút E và phản hồi showMathFeedback
// ===================================================================

const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().replace(/\s+/g, '').replace(/,/g, '.');
};

// ==========================================
// BÀI 1: Tìm giá trị phần trăm
// ==========================================
window.check_101_1 = () => {
    const v1 = cleanString(document.getElementById('101-1-1')?.value); // 84
    const v2 = cleanString(document.getElementById('101-1-2')?.value); // 0.49
    const v3 = cleanString(document.getElementById('101-1-3')?.value); // 120000

    const isCorrect = (v1 === '84') && (v2 === '0.49') && (v3 === '120000');

    const rightAnswer = "a) 84 m²; b) 0,49 kg; c) 120 000 đồng";
    const studentAnswer = `a) ${v1 || '?'} m²; b) ${v2 || '?'} kg; c) ${v3 || '?'} đồng`;

    const guidance = "Muốn tìm giá trị phần trăm của một số, em lấy số đó nhân với số phần trăm rồi chia cho 100 (hoặc chia cho 100 rồi nhân với số phần trăm). Em hãy thử tính lại từng câu cẩn thận nhé!";
    const solution = "a) 70% của 120 m² là:<br>120 × 70 : 100 = 84 (m²)<br><br>b) 24,5% của 2 kg là:<br>2 × 24,5 : 100 = 0,49 (kg)<br><br>c) 0,8% của 15 000 000 đồng là:<br>15 000 000 × 0,8 : 100 = 120 000 (đồng)<br><br>Thầy khen em làm bài rất tốt!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('101_1', score, 'btn-check-101-1', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 2: Mua sắm giảm giá ngày 1-6
// ==========================================
window.check_101_2 = () => {
    const v1 = cleanString(document.getElementById('101-2-1')?.value); // 37500
    const v2 = cleanString(document.getElementById('101-2-2')?.value); // 18000

    const isCorrect = (v1 === '37500') && (v2 === '18000');

    const rightAnswer = "Ba lô: 37 500 đồng; Thú bông: 18 000 đồng";
    const studentAnswer = `Ba lô: ${v1 || '?'} đồng; Thú bông: ${v2 || '?'} đồng`;

    const guidance = "Để tính số tiền được giảm giá 15% của mỗi món đồ, em lấy giá niêm yết nhân với 15 rồi chia cho 100 nhé!";
    const solution = "Ba lô học sinh được giảm giá số tiền là:<br>250 000 × 15 : 100 = 37 500 (đồng)<br><br>Con thú bông được giảm giá số tiền là:<br>120 000 × 15 : 100 = 18 000 (đồng)<br><br>Đáp số: Ba lô: 37 500 đồng; Thú bông: 18 000 đồng.<br>Chúc mừng em đã giải đúng bài toán thực tế!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('101_2', score, 'btn-check-101-2', 1, 1, isCorrect ? 1 : 0);
};


// ==========================================
// HỖ TRỢ PHÓNG TO HÌNH ẢNH CHO TIẾT 101
// ==========================================
window.zoomImage101 = (src, alt) => {
    let modal = document.getElementById('image-zoom-modal-101');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-zoom-modal-101';
        modal.className = 'fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300';
        modal.innerHTML = `
            <div class="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl p-3 shadow-2xl border-4 border-white animate-in zoom-in-95 duration-300 pointer-events-auto">
                <img id="zoom-modal-img-101" src="" alt="" class="max-w-[85vw] max-h-[80vh] object-contain rounded-2xl">
                <p id="zoom-modal-caption-101" class="text-center font-bold text-slate-700 mt-3 text-lg md:text-xl"></p>
                <button onclick="document.getElementById('image-zoom-modal-101').remove()" class="absolute -top-4 -right-4 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-white hover:bg-red-600 transition-colors cursor-pointer" title="Đóng">✕</button>
            </div>
        `;
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        };
        document.body.appendChild(modal);
    }
    document.getElementById('zoom-modal-img-101').src = src;
    document.getElementById('zoom-modal-caption-101').innerText = alt;
};
