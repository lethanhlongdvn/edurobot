// ===================================================================
// Tiết 99 - Bài 40: Tìm tỉ số phần trăm của hai số (tiết 1)
// LOGIC: Chấm điểm bài giải chỉ qua ô đáp số
// ===================================================================

const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().replace(/\s+/g, '').replace(/,/g, '.');
};

// ==========================================
// BÀI 1: Luyện tập tỉ số phần trăm
// ==========================================
window.check_99_1 = () => {
    const v1 = cleanString(document.getElementById('99-1-1')?.value); // 30
    const v2 = cleanString(document.getElementById('99-1-2')?.value); // 15
    const v3 = cleanString(document.getElementById('99-1-3')?.value); // 0.035
    const v4 = cleanString(document.getElementById('99-1-4')?.value); // 3.5
    const v5 = cleanString(document.getElementById('99-1-5')?.value); // 3.5

    const isCorrect = (v1 === '30') && (v2 === '15') && (v3 === '0.035') && (v4 === '3.5') && (v5 === '3.5');

    const rightAnswer = "a) 30% và 15%; b) 0.035, 3.5% và 3.5%";
    const studentAnswer = `a) ${v1 || '?'}% và ${v2 || '?'}%; b) ${v3 || '?'}, ${v4 || '?'}% và ${v5 || '?'}%`;

    const guidance = "Em hãy thực hiện chia hai số để tìm thương dưới dạng số thập phân, sau đó nhân thương đó với 100 và viết thêm kí hiệu % vào bên phải kết quả nhé!";
    const solution = "Chi tiết bài giải:<br><br><b>Câu a:</b><br>Tỉ số phần trăm của 90 và 300 là:<br><span class=\"inline-flex items-center align-middle font-bold text-slate-900 text-lg\"><span class=\"inline-flex flex-col items-center align-middle mx-1 leading-none\"><span class=\"border-b border-slate-900 px-1 leading-none pb-0.5\">90</span><span class=\"leading-none pt-0.5\">300</span></span><span class=\"mx-1\">=</span><span class=\"inline-flex flex-col items-center align-middle mx-1 leading-none\"><span class=\"border-b border-slate-900 px-1 leading-none pb-0.5\">30</span><span class=\"leading-none pt-0.5\">100</span></span><span class=\"mx-1\">= 30%</span></span><br>Tỉ số phần trăm của 60 và 400 là:<br><span class=\"inline-flex items-center align-middle font-bold text-slate-900 text-lg\"><span class=\"inline-flex flex-col items-center align-middle mx-1 leading-none\"><span class=\"border-b border-slate-900 px-1 leading-none pb-0.5\">60</span><span class=\"leading-none pt-0.5\">400</span></span><span class=\"mx-1\">=</span><span class=\"inline-flex flex-col items-center align-middle mx-1 leading-none\"><span class=\"border-b border-slate-900 px-1 leading-none pb-0.5\">15</span><span class=\"leading-none pt-0.5\">100</span></span><span class=\"mx-1\">= 15%</span></span><br><br><b>Câu b:</b><br>Tỉ số phần trăm của lượng muối trong nước biển là:<br>1,4 : 40 = 0,035<br>Đổi sang tỉ số phần trăm:<br>0,035 = 3,5%<br>Đáp số: 3,5%<br>Thầy khen em làm bài rất tốt!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('99_1', score, 'btn-check-99-1', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 2: Đội tình nguyện bảo vệ môi trường
// ==========================================
window.check_99_2 = () => {
    const v1 = cleanString(document.getElementById('99-2-1')?.value); // 30
    const v2 = cleanString(document.getElementById('99-2-2')?.value); // 25

    const isCorrect = (v1 === '30') && (v2 === '25');

    const rightAnswer = "a) 30%; b) 25%";
    const studentAnswer = `a) ${v1 || '?'}%; b) ${v2 || '?'}%`;

    const guidance = "Tìm tỉ số phần trăm của hai số: thương của số bạn lớp 5A (18 bạn) hoặc lớp 5B (15 bạn) với tổng số bạn đội tình nguyện (60 bạn), rồi đổi thương đó sang tỉ số phần trăm.";
    const solution = "a) Tỉ số phần trăm của số bạn lớp 5A và số bạn của đội tình nguyện là:<br>18 : 60 = 0,3 = 30%<br>b) Tỉ số phần trăm của số bạn lớp 5B và số bạn của đội tình nguyện là:<br>15 : 60 = 0,25 = 25%<br>Đáp số: a) 30%; b) 25%<br>Chúc mừng em giải toán rất xuất sắc!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('99_2', score, 'btn-check-99-2', 1, 1, isCorrect ? 1 : 0);
};


// ==========================================
// HỖ TRỢ PHÓNG TO HÌNH ẢNH CHO TIẾT 99
// ==========================================
window.zoomImage99 = (src, alt) => {
    let modal = document.getElementById('image-zoom-modal-99');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-zoom-modal-99';
        modal.className = 'fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300';
        modal.innerHTML = `
            <div class="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl p-3 shadow-2xl border-4 border-white animate-in zoom-in-95 duration-300 pointer-events-auto">
                <img id="zoom-modal-img-99" src="" alt="" class="max-w-[85vw] max-h-[80vh] object-contain rounded-2xl">
                <p id="zoom-modal-caption-99" class="text-center font-bold text-slate-700 mt-3 text-lg md:text-xl"></p>
                <button onclick="document.getElementById('image-zoom-modal-99').remove()" class="absolute -top-4 -right-4 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-white hover:bg-red-600 transition-colors cursor-pointer" title="Đóng">✕</button>
            </div>
        `;
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        };
        document.body.appendChild(modal);
    }
    document.getElementById('zoom-modal-img-99').src = src;
    document.getElementById('zoom-modal-caption-99').innerText = alt;
};
