// ===================================================================
// Tiết 96 - Bài 38: Tìm hai số khi biết tổng và tỉ số (tiết 2 - Luyện tập)
// LOGIC: Chấm điểm bài giải chỉ qua ô đáp số
// ===================================================================

const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().replace(/\s+/g, '');
};

// ==========================================
// BÀI 1: Bạn Páo đi học
// ==========================================
window.check_96_1 = () => {
    const v1 = cleanString(document.getElementById('96-1-1')?.value);
    const v2 = cleanString(document.getElementById('96-1-2')?.value);

    const isCorrect = (v1 === '600') && (v2 === '800');

    const rightAnswer = "Lên dốc: 600; Xuống dốc: 800";
    const studentAnswer = `Lên dốc: ${v1 || '?'}; Xuống dốc: ${v2 || '?'}`;

    const guidance = "Em hãy tìm tổng số phần bằng nhau dựa vào tỉ số của độ dài đoạn lên dốc và đoạn xuống dốc. Sau đó, tìm giá trị của một phần bằng cách lấy tổng chiều dài quãng đường chia cho tổng số phần vừa tính, rồi tính độ dài của từng đoạn dốc nhé!";
    const solution = "Tổng số phần bằng nhau là:<br>4 + 3 = 7 (phần)<br>Giá trị một phần là:<br>1 400 : 7 = 200 (m)<br>Đoạn lên dốc dài là:<br>200 x 3 = 600 (m)<br>Đoạn xuống dốc dài là:<br>200 x 4 = 800 (m)<br>Đáp số: Lên dốc: 600 m; Xuống dốc: 800 m.<br>Thầy khen em làm bài rất tốt!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('96_1', score, 'btn-check-96-1', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 2: Gian hàng tivi siêu thị
// ==========================================
window.check_96_2 = () => {
    const v1 = cleanString(document.getElementById('96-2-1')?.value);
    const v2 = cleanString(document.getElementById('96-2-2')?.value);

    const isCorrect = (v1 === '9') && (v2 === '27');

    const rightAnswer = "75 inch: 9; 55 inch: 27";
    const studentAnswer = `75 inch: ${v1 || '?'}; 55 inch: ${v2 || '?'}`;

    const guidance = "Đề bài cho biết số tivi 55 inch gấp 3 lần số tivi 75 inch, tức là tỉ số giữa hai loại tivi là 1/3. Em hãy áp dụng phương pháp giải bài toán Tổng - Tỉ với tổng số tivi là 36 chiếc để tìm số lượng mỗi loại.";
    const solution = "Tổng số phần bằng nhau là:<br>3 + 1 = 4 (phần)<br>Giá trị một phần là:<br>36 : 4 = 9 (chiếc)<br>Số tivi loại 75 inch là:<br>9 x 1 = 9 (chiếc)<br>Số tivi loại 55 inch là:<br>9 x 3 = 27 (chiếc)<br>Đáp số: Ti vi 75 inch: 9 chiếc; Ti vi 55 inch: 27 chiếc.<br>Chúc mừng em giải đúng bài toán!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('96_2', score, 'btn-check-96-2', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 3: Trại chăn nuôi gà vịt
// ==========================================
window.check_96_3 = () => {
    const v1 = cleanString(document.getElementById('96-3-1')?.value);

    const isCorrect = (v1 === '6000');

    const rightAnswer = "6 000 con";
    const studentAnswer = `${v1 || '?'} con`;

    const guidance = "Đầu tiên, em hãy giải bài toán Tổng - Tỉ để tìm số lượng con gà và con vịt của trại nuôi. Sau đó, lấy số vịt trừ đi số gà để tìm xem số gà ít hơn số vịt bao nhiêu con nhé!";
    const solution = "Tổng số phần bằng nhau là:<br>10 + 7 = 17 (phần)<br>Giá trị một phần là:<br>34 000 : 17 = 2 000 (con)<br>Số con gà là:<br>2 000 x 7 = 14 000 (con)<br>Số con vịt là:<br>2 000 x 10 = 20 000 (con)<br>Số gà ít hơn số vịt số con là:<br>20 000 - 14 000 = 6 000 (con)<br>Đáp số: 6 000 con.<br>Thật là xuất sắc! Chúc mừng em.";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('96_3', score, 'btn-check-96-3', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 4: Mảnh đất hình chữ nhật
// ==========================================
window.check_96_4 = () => {
    const v1 = cleanString(document.getElementById('96-4-1')?.value);
    const v2 = cleanString(document.getElementById('96-4-2')?.value);
    const v3 = cleanString(document.getElementById('96-4-3')?.value);

    const isCorrect = (v1 === '40') && (v2 === '25') && (v3 === '2250');

    const rightAnswer = "Chiều dài: 40; Chiều rộng: 25; Diện tích mới: 2250";
    const studentAnswer = `Chiều dài: ${v1 || '?'}; Chiều rộng: ${v2 || '?'}; Diện tích mới: ${v3 || '?'}`;

    const guidance = "Em hãy thực hiện theo các bước:<br>1. Tìm nửa chu vi mảnh đất ban đầu.<br>2. Giải bài toán Tổng - Tỉ với tổng là nửa chu vi và tỉ số là 5/8 để tìm chiều dài và chiều rộng cũ.<br>3. Tính chiều dài mới và chiều rộng mới khi đã mở rộng, sau đó tính diện tích mới.";
    const solution = "a) Nửa chu vi mảnh đất ban đầu là:<br>130 : 2 = 65 (m)<br>Tổng số phần bằng nhau là:<br>8 + 5 = 13 (phần)<br>Giá trị một phần là:<br>65 : 13 = 5 (m)<br>Chiều dài mảnh đất ban đầu là:<br>5 x 8 = 40 (m)<br>Chiều rộng mảnh đất ban đầu là:<br>5 x 5 = 25 (m)<br>b) Chiều dài mới của mảnh đất là:<br>40 + 10 = 50 (m)<br>Chiều rộng mới của mảnh đất là:<br>25 + 20 = 45 (m)<br>Diện tích mảnh đất hình chữ nhật mới là:<br>50 x 45 = 2 250 (m²)<br>Đáp số: a) Chiều dài: 40 m, Chiều rộng: 25 m; b) 2 250 m².<br>Em giải rất giỏi! Thầy khen em.";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('96_4', score, 'btn-check-96-4', 1, 1, isCorrect ? 1 : 0);
};


// ==========================================
// HỖ TRỢ PHÓNG TO HÌNH ẢNH CHO TIẾT 96
// ==========================================
window.zoomImage96 = (src, alt) => {
    let modal = document.getElementById('image-zoom-modal-96');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-zoom-modal-96';
        modal.className = 'fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300';
        modal.innerHTML = `
            <div class="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl p-3 shadow-2xl border-4 border-white animate-in zoom-in-95 duration-300 pointer-events-auto">
                <img id="zoom-modal-img-96" src="" alt="" class="max-w-[85vw] max-h-[80vh] object-contain rounded-2xl">
                <p id="zoom-modal-caption-96" class="text-center font-bold text-slate-700 mt-3 text-lg md:text-xl"></p>
                <button onclick="document.getElementById('image-zoom-modal-96').remove()" class="absolute -top-4 -right-4 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-white hover:bg-red-600 transition-colors cursor-pointer" title="Đóng">✕</button>
            </div>
        `;
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        };
        document.body.appendChild(modal);
    }
    document.getElementById('zoom-modal-img-96').src = src;
    document.getElementById('zoom-modal-caption-96').innerText = alt;
};
