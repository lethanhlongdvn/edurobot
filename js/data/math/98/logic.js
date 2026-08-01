// ===================================================================
// Tiết 98 - Bài 39: Tìm hai số khi biết hiệu và tỉ số (tiết 2 - Luyện tập)
// LOGIC: Chấm điểm bài giải chỉ qua ô đáp số
// ===================================================================

const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().replace(/\s+/g, '');
};

// ==========================================
// BÀI 1: Thu gom rác thải
// ==========================================
window.check_98_1 = () => {
    const v1 = cleanString(document.getElementById('98-1-1')?.value); // Loại A: 6
    const v2 = cleanString(document.getElementById('98-1-2')?.value); // Loại B: 14

    const isCorrect = (v1 === '6') && (v2 === '14');

    const rightAnswer = "Loại A: 6 kg; Loại B: 14 kg";
    const studentAnswer = `Loại A: ${v1 || '?'}; Loại B: ${v2 || '?'}`;

    const guidance = "Em hãy tìm hiệu số phần bằng nhau dựa vào tỉ số của rác thải loại A và loại B. Sau đó, tìm giá trị của một phần bằng cách lấy hiệu khối lượng chia cho hiệu số phần vừa tính, rồi tính khối lượng của mỗi loại nhé!";
    const solution = "Hiệu số phần bằng nhau là:<br>7 - 3 = 4 (phần)<br>Giá trị một phần là:<br>8 : 4 = 2 (kg)<br>Số ki-lô-gam rác thải loại A thu gom được là:<br>2 x 3 = 6 (kg)<br>Số ki-lô-gam rác thải loại B thu gom được là:<br>2 x 7 = 14 (kg) (hoặc lấy 6 + 8 = 14 kg)<br>Đáp số: Loại A: 6 kg; Loại B: 14 kg.<br>Chúc mừng em giải đúng!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('98_1', score, 'btn-check-98-1', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 2: Mảnh đất hình chữ nhật
// ==========================================
window.check_98_2 = () => {
    const v1 = cleanString(document.getElementById('98-2-1')?.value); // Chu vi: 100
    const v2 = cleanString(document.getElementById('98-2-2')?.value); // Diện tích: 600

    const isCorrect = (v1 === '100') && (v2 === '600');

    const rightAnswer = "Chu vi: 100 m; Diện tích: 600 m²";
    const studentAnswer = `Chu vi: ${v1 || '?'}; Diện tích: ${v2 || '?'}`;

    const guidance = "Em hãy thực hiện giải bài toán Hiệu - Tỉ để tìm chiều dài và chiều rộng của mảnh đất trước. Sau khi đã có chiều dài và chiều rộng, em áp dụng các công thức tính chu vi và diện tích hình chữ nhật để tìm đáp án.";
    const solution = "Hiệu số phần bằng nhau là:<br>3 - 2 = 1 (phần)<br>Giá trị một phần là:<br>10 : 1 = 10 (m)<br>Chiều rộng mảnh đất là:<br>10 x 2 = 20 (m)<br>Chiều dài mảnh đất là:<br>10 x 3 = 30 (m)<br>Chu vi mảnh đất là:<br>(30 + 20) x 2 = 100 (m)<br>Diện tích mảnh đất là:<br>30 x 20 = 600 (m²)<br>Đáp số: Chu vi: 100 m; Diện tích: 600 m².<br>Em giải toán xuất sắc quá!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('98_2', score, 'btn-check-98-2', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 3: Nuôi cá tra bác Năm
// ==========================================
window.check_98_3 = () => {
    const v1 = cleanString(document.getElementById('98-3-1')?.value); // Cá loại A: 10
    const v2 = cleanString(document.getElementById('98-3-2')?.value); // Cá loại B: 4
    const v3 = cleanString(document.getElementById('98-3-3')?.value); // Tiền: 295000000

    const isCorrect = (v1 === '10') && (v2 === '4') && (v3 === '295000000');

    const rightAnswer = "Loại A: 10 tấn, Loại B: 4 tấn; Tiền: 295 000 000 đồng";
    const studentAnswer = `Loại A: ${v1 || '?'}, Loại B: ${v2 || '?'}; Tiền: ${v3 || '?'}`;

    const guidance = "Em hãy giải câu a bằng cách tìm hiệu số phần bằng nhau rồi tính số tấn cá của mỗi loại. Đối với câu b, em cần đổi số tấn cá loại A vừa tìm được sang ki-lô-gam, sau đó nhân với đơn giá của 1 kg cá để tìm tổng số tiền.";
    const solution = "a) Hiệu số phần bằng nhau là:<br>5 - 2 = 3 (phần)<br>Giá trị một phần là:<br>6 : 3 = 2 (tấn)<br>Số tấn cá loại A thu hoạch được là:<br>2 x 5 = 10 (tấn)<br>Số tấn cá loại B thu hoạch được là:<br>2 x 2 = 4 (tấn) (hoặc lấy 10 - 6 = 4 tấn)<br>b) Đổi 10 tấn cá loại A sang đơn vị ki-lô-gam:<br>10 tấn = 10 000 kg<br>Số tiền bác Năm thu được là:<br>29 500 x 10 000 = 295 000 000 (đồng)<br>Đáp số: a) Loại A: 10 tấn, Loại B: 4 tấn; b) 295 000 000 đồng.<br>Thầy chúc mừng em làm đúng hết!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('98_3', score, 'btn-check-98-3', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 4: Tính tuổi mẹ con
// ==========================================
window.check_98_4 = () => {
    const v1 = cleanString(document.getElementById('98-4-1')?.value); // Mẹ: 33
    const v2 = cleanString(document.getElementById('98-4-2')?.value); // Con: 8

    const isCorrect = (v1 === '33') && (v2 === '8');

    const rightAnswer = "Mẹ: 33 tuổi; Con: 8 tuổi";
    const studentAnswer = `Mẹ: ${v1 || '?'}; Con: ${v2 || '?'}`;

    const guidance = "Em cần nhớ rằng hiệu số tuổi của mẹ và con luôn không đổi theo thời gian. Hãy tìm tuổi của mỗi người sau 2 năm nữa bằng cách giải bài toán Hiệu - Tỉ, sau đó trừ đi 2 tuổi để có tuổi hiện nay nhé!";
    const solution = "Hiệu số tuổi của mẹ và con không thay đổi theo thời gian, sau 2 năm nữa mẹ vẫn hơn con 25 tuổi.<br>Hiệu số phần bằng nhau sau 2 năm nữa là:<br>7 - 2 = 5 (phần)<br>Giá trị một phần sau 2 năm là:<br>25 : 5 = 5 (tuổi)<br>Tuổi con sau 2 năm nữa là:<br>5 x 2 = 10 (tuổi)<br>Tuổi con hiện nay là:<br>10 - 2 = 8 (tuổi)<br>Tuổi mẹ hiện nay là:<br>8 + 25 = 33 (tuổi)<br>Đáp số: Mẹ: 33 tuổi; Con: 8 tuổi.<br>Thầy khen em làm bài rất tốt!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('98_4', score, 'btn-check-98-4', 1, 1, isCorrect ? 1 : 0);
};


// ==========================================
// HỖ TRỢ PHÓNG TO HÌNH ẢNH CHO TIẾT 98
// ==========================================
window.zoomImage98 = (src, alt) => {
    let modal = document.getElementById('image-zoom-modal-98');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-zoom-modal-98';
        modal.className = 'fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300';
        modal.innerHTML = `
            <div class="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl p-3 shadow-2xl border-4 border-white animate-in zoom-in-95 duration-300 pointer-events-auto">
                <img id="zoom-modal-img-98" src="" alt="" class="max-w-[85vw] max-h-[80vh] object-contain rounded-2xl">
                <p id="zoom-modal-caption-98" class="text-center font-bold text-slate-700 mt-3 text-lg md:text-xl"></p>
                <button onclick="document.getElementById('image-zoom-modal-98').remove()" class="absolute -top-4 -right-4 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-white hover:bg-red-600 transition-colors cursor-pointer" title="Đóng">✕</button>
            </div>
        `;
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        };
        document.body.appendChild(modal);
    }
    document.getElementById('zoom-modal-img-98').src = src;
    document.getElementById('zoom-modal-caption-98').innerText = alt;
};
