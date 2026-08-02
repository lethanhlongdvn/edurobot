// ===================================================================
// Tiết 105 - Bài 43: Thực hành và trải nghiệm sử dụng máy tính cầm tay
// LOGIC: Chấm điểm bài giải qua ô nhập đáp số và phản hồi showMathFeedback
// ===================================================================

const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().replace(/\s+/g, '').replace(/,/g, '.');
};

// ==========================================
// BÀI 1: Cô Hường mua 7 chiếc vòng
// ==========================================
window.check_105_1 = () => {
    const v1 = cleanString(document.getElementById('105-1-1')?.value); // 175000 hoặc 175.000

    const isCorrect = (v1 === '175000' || v1 === '175.000');

    const rightAnswer = "175 000 đồng";
    const studentAnswer = `${v1 || '?'} đồng`;

    const guidance = "Em hãy lấy giá tiền của một chiếc vòng nhân với số lượng chiếc vòng mà cô Hường đã mua để tìm số tiền cần thanh toán nhé!";
    const solution = "Số tiền cô Hường cần trả chúng mình là:<br>25 000 × 7 = 175 000 (đồng)<br>Đáp số: 175 000 đồng.";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('105_1', score, 'btn-check-105-1', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 2: Thầy Hải mua 18 chiếc (giảm giá 20%)
// ==========================================
window.check_105_2 = () => {
    const v1 = cleanString(document.getElementById('105-2-1')?.value); // 360000 hoặc 360.000

    const isCorrect = (v1 === '360000' || v1 === '360.000');

    const rightAnswer = "360 000 đồng";
    const studentAnswer = `${v1 || '?'} đồng`;

    const guidance = "Em hãy thực hiện tính toán theo các bước:<br>1. Tính tổng số tiền mua vòng khi chưa giảm giá (giá gốc nhân với số lượng).<br>2. Tính số tiền được giảm giá (lấy số tiền gốc nhân với 20% được giảm).<br>3. Tính số tiền thực tế phải trả bằng cách lấy số tiền gốc trừ đi số tiền được giảm nhé!";
    const solution = "Giá tiền 18 chiếc vòng khi chưa giảm giá là:<br>25 000 × 18 = 450 000 (đồng)<br><br>Số tiền thầy Hải được giảm giá là:<br>450 000 × 20% = 90 000 (đồng)<br><br>Số tiền thầy Hải cần trả chúng mình là:<br>450 000 − 90 000 = 360 000 (đồng)<br>Đáp số: 360 000 đồng.";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('105_2', score, 'btn-check-105-2', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 3: Giá mỗi chiếc vòng còn lại
// ==========================================
window.check_105_3 = () => {
    const v1 = cleanString(document.getElementById('105-3-1')?.value); // 40000 hoặc 40.000

    const isCorrect = (v1 === '40000' || v1 === '40.000');

    const rightAnswer = "40 000 đồng";
    const studentAnswer = `${v1 || '?'} đồng`;

    const guidance = "Em hãy thực hiện tính toán theo các bước:<br>1. Tính tổng số chiếc vòng đã bán cho cô Hường và thầy Hải.<br>2. Tìm số chiếc vòng còn lại bằng cách lấy tổng số 100 chiếc trừ đi số vòng đã bán.<br>3. Tìm giá của mỗi chiếc vòng còn lại bằng cách lấy số tiền thu được từ số vòng đó chia cho số chiếc vòng còn lại nhé!";
    const solution = "Tổng số chiếc vòng đã bán cho cô Hường và thầy Hải là:<br>7 + 18 = 25 (chiếc vòng)<br><br>Số chiếc vòng còn lại là:<br>100 − 25 = 75 (chiếc vòng)<br><br>Giá tiền mỗi chiếc vòng còn lại đó là:<br>3 000 000 : 75 = 40 000 (đồng)<br>Đáp số: 40 000 đồng.";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('105_3', score, 'btn-check-105-3', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 4: Tổng số tiền quyên góp được
// ==========================================
window.check_105_4 = () => {
    const v1 = cleanString(document.getElementById('105-4-1')?.value); // 4242000 hoặc 4.242.000

    const isCorrect = (v1 === '4242000' || v1 === '4.242.000');

    const rightAnswer = "4 242 000 đồng";
    const studentAnswer = `${v1 || '?'} đồng`;

    const guidance = "Em hãy tính theo các bước:<br>1. Tính tổng số tiền thu được từ việc bán cả 100 chiếc vòng (cộng số tiền bán được từ cô Hường, thầy Hải và số vòng còn lại).<br>2. Tính số tiền Ban Giám hiệu ủng hộ thêm bằng cách lấy tổng tiền bán được nhân với 20%.<br>3. Tính tổng số tiền quyên góp được bằng cách lấy tiền bán vòng cộng với tiền Ban Giám hiệu ủng hộ nhé!";
    const solution = "Tổng số tiền thu được từ việc bán 100 chiếc vòng trang sức là:<br>175 000 + 360 000 + 3 000 000 = 3 535 000 (đồng)<br><br>Số tiền Ban Giám hiệu góp thêm vào quỹ từ thiện là:<br>3 535 000 × 20% = 707 000 (đồng)<br><br>Tổng số tiền mà lớp mình đã quyên góp được cho quỹ là:<br>3 535 000 + 707 000 = 4 242 000 (đồng)<br>Đáp số: 4 242 000 đồng.";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('105_4', score, 'btn-check-105-4', 1, 1, isCorrect ? 1 : 0);
};


// ==========================================
// HỖ TRỢ PHÓNG TO HÌNH ẢNH CHO TIẾT 105
// ==========================================
window.zoomImage105 = (src, alt) => {
    let modal = document.getElementById('image-zoom-modal-105');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-zoom-modal-105';
        modal.className = 'fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300';
        modal.innerHTML = `
            <div class="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl p-3 shadow-2xl border-4 border-white animate-in zoom-in-95 duration-300 pointer-events-auto">
                <img id="zoom-modal-img-105" src="" alt="" class="max-w-[85vw] max-h-[80vh] object-contain rounded-2xl">
                <p id="zoom-modal-caption-105" class="text-center font-bold text-slate-700 mt-3 text-lg md:text-xl"></p>
                <button onclick="document.getElementById('image-zoom-modal-105').remove()" class="absolute -top-4 -right-4 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-white hover:bg-red-600 transition-colors cursor-pointer" title="Đóng">✕</button>
            </div>
        `;
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        };
        document.body.appendChild(modal);
    }
    document.getElementById('zoom-modal-img-105').src = src;
    document.getElementById('zoom-modal-caption-105').innerText = alt;
};
