// ===================================================================
// Tiết 97 - Bài 39: Tìm hai số khi biết hiệu và tỉ số (tiết 1)
// LOGIC: Chấm điểm bài giải chỉ qua ô đáp số
// ===================================================================

const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().replace(/\s+/g, '');
};

// ==========================================
// BÀI 1: Bảng Số?
// ==========================================
window.check_97_1 = () => {
    const v1 = cleanString(document.getElementById('97-1-1')?.value); // Cột A số bé: 20
    const v2 = cleanString(document.getElementById('97-1-2')?.value); // Cột A số lớn: 45
    const v3 = cleanString(document.getElementById('97-1-3')?.value); // Cột B số bé: 56
    const v4 = cleanString(document.getElementById('97-1-4')?.value); // Cột B số lớn: 98

    const isCorrect = (v1 === '20') && (v2 === '45') && (v3 === '56') && (v4 === '98');

    const rightAnswer = "Cột A: Bé: 20, Lớn: 45; Cột B: Bé: 56, Lớn: 98";
    const studentAnswer = `Cột A: Bé: ${v1 || '?'}, Lớn: ${v2 || '?'}; Cột B: Bé: ${v3 || '?'}, Lớn: ${v4 || '?'}`;

    const guidance = "Em hãy thực hiện giải bài toán Tìm hai số khi biết hiệu và tỉ số theo các bước:<br>1. Tìm hiệu số phần bằng nhau.<br>2. Tìm giá trị của một phần (lấy hiệu hai số chia cho hiệu số phần).<br>3. Tìm số bé và số lớn bằng cách lấy giá trị một phần nhân với số phần tương ứng nhé!";
    const solution = "Chi tiết lời giải các cột:<br><br><b>Cột A: Hiệu = 25, Tỉ số = 4/9</b><br>Hiệu số phần bằng nhau là:<br>9 - 4 = 5 (phần)<br>Giá trị một phần là:<br>25 : 5 = 5<br>Số bé là:<br>5 x 4 = 20<br>Số lớn là:<br>5 x 9 = 45<br><br><b>Cột B: Hiệu = 42, Tỉ số = 7/4</b><br>Hiệu số phần bằng nhau là:<br>7 - 4 = 3 (phần)<br>Giá trị một phần là:<br>42 : 3 = 14<br>Số bé là:<br>14 x 4 = 56<br>Số lớn là:<br>14 x 7 = 98<br>Chúc mừng em học giỏi!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('97_1', score, 'btn-check-97-1', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 2: Thi đấu cờ vua
// ==========================================
window.check_97_2 = () => {
    const v1 = cleanString(document.getElementById('97-2-1')?.value); // Nam: 30
    const v2 = cleanString(document.getElementById('97-2-2')?.value); // Nữ: 20

    const isCorrect = (v1 === '30') && (v2 === '20');

    const rightAnswer = "Nam: 30 bạn; Nữ: 20 bạn";
    const studentAnswer = `Nam: ${v1 || '?'}; Nữ: ${v2 || '?'}`;

    const guidance = "Em hãy vẽ sơ đồ đoạn thẳng biểu thị số bạn nam và số bạn nữ. Sau đó tính hiệu số phần bằng nhau, tìm giá trị của một phần từ số bạn chênh lệch rồi tính số bạn nam, số bạn nữ nhé!";
    const solution = "Hiệu số phần bằng nhau là:<br>3 - 2 = 1 (phần)<br>Giá trị một phần là:<br>10 : 1 = 10 (bạn)<br>Số bạn nam tham gia là:<br>10 x 3 = 30 (bạn)<br>Số bạn nữ tham gia là:<br>10 x 2 = 20 (bạn) (hoặc lấy 30 - 10 = 20 bạn)<br>Đáp số: Nam: 30 bạn; Nữ: 20 bạn.<br>Thầy khen em giải toán rất xuất sắc!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('97_2', score, 'btn-check-97-2', 1, 1, isCorrect ? 1 : 0);
};


// ==========================================
// HỖ TRỢ PHÓNG TO HÌNH ẢNH CHO TIẾT 97
// ==========================================
window.zoomImage97 = (src, alt) => {
    let modal = document.getElementById('image-zoom-modal-97');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-zoom-modal-97';
        modal.className = 'fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300';
        modal.innerHTML = `
            <div class="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl p-3 shadow-2xl border-4 border-white animate-in zoom-in-95 duration-300 pointer-events-auto">
                <img id="zoom-modal-img-97" src="" alt="" class="max-w-[85vw] max-h-[80vh] object-contain rounded-2xl">
                <p id="zoom-modal-caption-97" class="text-center font-bold text-slate-700 mt-3 text-lg md:text-xl"></p>
                <button onclick="document.getElementById('image-zoom-modal-97').remove()" class="absolute -top-4 -right-4 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-white hover:bg-red-600 transition-colors cursor-pointer" title="Đóng">✕</button>
            </div>
        `;
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        };
        document.body.appendChild(modal);
    }
    document.getElementById('zoom-modal-img-97').src = src;
    document.getElementById('zoom-modal-caption-97').innerText = alt;
};
