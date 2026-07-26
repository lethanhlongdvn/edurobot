// ===================================================================
// Tiết 95 - Bài 38: Tìm hai số khi biết tổng và tỉ số (tiết 1)
// LOGIC: Chấm điểm bài giải chỉ qua ô đáp số
// ===================================================================

const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().replace(/\s+/g, '');
};

// ==========================================
// BÀI 1: Con bò sữa trên bãi cỏ
// ==========================================
window.check_95_1 = () => {
    const v1 = cleanString(document.getElementById('95-1-1')?.value);
    const v2 = cleanString(document.getElementById('95-1-2')?.value);

    const isCorrect = (v1 === '14') && (v2 === '35');

    const rightAnswer = "Bò khoang: 14; Bò vàng: 35";
    const studentAnswer = `Bò khoang: ${v1 || '?'}; Bò vàng: ${v2 || '?'}`;

    const guidance = "Em hãy vẽ sơ đồ đoạn thẳng biểu diễn số bò khoang và số bò vàng theo tỉ số đã cho. Từ đó, hãy tìm tổng số phần bằng nhau và tìm giá trị một phần để tính số bò của mỗi loại nhé!";
    const solution = "Tổng số phần bằng nhau là:<br>5 + 2 = 7 (phần)<br>Giá trị một phần là:<br>49 : 7 = 7 (con)<br>Số con bò khoang là:<br>7 x 2 = 14 (con)<br>Số con bò vàng là:<br>7 x 5 = 35 (con) (hoặc lấy 49 - 14 = 35 con)<br>Đáp số: Bò khoang: 14 con; Bò vàng: 35 con.<br>Thầy khen em làm bài rất tốt!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('95_1', score, 'btn-check-95-1', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 2: Doanh thu cửa hàng
// ==========================================
window.check_95_2 = () => {
    const v1 = cleanString(document.getElementById('95-2-1')?.value);
    const v2 = cleanString(document.getElementById('95-2-2')?.value);

    const isCorrect = (v1 === '10800000') && (v2 === '7200000');

    const rightAnswer = "Sáng: 10 800 000; Chiều: 7 200 000";
    const studentAnswer = `Sáng: ${v1 || '?'}; Chiều: ${v2 || '?'}`;

    const guidance = "Em hãy thực hiện giải bài toán Tổng - Tỉ theo 4 bước cơ bản: vẽ sơ đồ, tính tổng số phần bằng nhau, tìm giá trị của một phần và nhân với số phần của doanh thu buổi sáng và buổi chiều.";
    const solution = "Tổng số phần bằng nhau là:<br>2 + 3 = 5 (phần)<br>Giá trị một phần là:<br>18 000 000 : 5 = 3 600 000 (đồng)<br>Doanh thu buổi sáng là:<br>3 600 000 x 3 = 10 800 000 (đồng)<br>Doanh thu buổi chiều là:<br>3 600 000 x 2 = 7 200 000 (đồng) (hoặc lấy 18 000 000 - 10 800 000 = 7 200 000 đồng)<br>Đáp số: Buổi sáng: 10 800 000 đồng; Buổi chiều: 7 200 000 đồng.<br>Thật là tuyệt vời! Chúc mừng em giải đúng!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('95_2', score, 'btn-check-95-2', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// HỖ TRỢ PHÓNG TO HÌNH ẢNH CHO TIẾT 95
// ==========================================
window.zoomImage95 = (src, alt) => {
    let modal = document.getElementById('image-zoom-modal-95');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-zoom-modal-95';
        modal.className = 'fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300';
        modal.innerHTML = `
            <div class="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl p-3 shadow-2xl border-4 border-white animate-in zoom-in-95 duration-300 pointer-events-auto">
                <img id="zoom-modal-img-95" src="" alt="" class="max-w-[85vw] max-h-[80vh] object-contain rounded-2xl">
                <p id="zoom-modal-caption-95" class="text-center font-bold text-slate-700 mt-3 text-lg md:text-xl"></p>
                <button onclick="document.getElementById('image-zoom-modal-95').remove()" class="absolute -top-4 -right-4 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-white hover:bg-red-600 transition-colors cursor-pointer" title="Đóng">✕</button>
            </div>
        `;
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        };
        document.body.appendChild(modal);
    }
    document.getElementById('zoom-modal-img-95').src = src;
    document.getElementById('zoom-modal-caption-95').innerText = alt;
};
