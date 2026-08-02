// ===================================================================
// Tiết 103 - Bài 42: Máy tính cầm tay (tiết 1)
// LOGIC: Chấm điểm bài giải bằng nút E và phản hồi showMathFeedback
// ===================================================================

const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().replace(/\s+/g, '').replace(/,/g, '.');
};

// ==========================================
// BÀI 1: Ghép cách bấm máy tính
// ==========================================
window.check_103_1 = () => {
    const v1 = document.getElementById('103-1-1')?.value; // B (1 7 4 - 1 0 8 =)
    const v2 = document.getElementById('103-1-2')?.value; // A (5 1 x 2 9 =)
    const v3 = document.getElementById('103-1-3')?.value; // C (1 0 4 5 : 2 5 =)

    const isCorrect = (v1 === 'B') && (v2 === 'A') && (v3 === 'C');

    const rightAnswer = "174 - 108: [1 7 4 - 1 0 8 =]; 51 x 29: [5 1 x 2 9 =]; 1 045 : 25: [1 0 4 5 : 2 5 =]";
    const studentAnswer = `174 - 108: ${v1 || 'Chưa chọn'}; 51 x 29: ${v2 || 'Chưa chọn'}; 1 045 : 25: ${v3 || 'Chưa chọn'}`;

    const guidance = "Em hãy quan sát kỹ các con số và dấu phép tính (+, -, x, :) trong từng biểu thức để ghép chính xác với dãy phím bấm tương ứng nhé!";
    const solution = "Cách nối đúng:<br>• 174 – 108 nối với dãy phím [1 7 4 – 1 0 8 =]<br>• 51 × 29 nối với dãy phím [5 1 × 2 9 =]<br>• 1 045 : 25 nối với dãy phím [1 0 4 5 ÷ 2 5 =]";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('103_1', score, 'btn-check-103-1', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 2: Thực hiện phép tính và kiểm tra
// ==========================================
window.check_103_2 = () => {
    const v1 = cleanString(document.getElementById('103-2-1')?.value); // 4000
    const v2 = cleanString(document.getElementById('103-2-2')?.value); // 3682
    const v3 = cleanString(document.getElementById('103-2-3')?.value); // 38475
    const v4 = cleanString(document.getElementById('103-2-4')?.value); // 8.5

    const isCorrect = (v1 === '4000') && (v2 === '3682') && (v3 === '38475') && (v4 === '8.5');

    const rightAnswer = "a) 4 000; b) 3 682; c) 38 475; d) 8,5";
    const studentAnswer = `a) ${v1 || '?'}; b) ${v2 || '?'}; c) ${v3 || '?'}; d) ${v4 || '?'}`;

    const guidance = "Em hãy thực hiện đặt tính ra nháp hoặc dùng máy tính cầm tay bấm lần lượt các con số và dấu phép tính để tìm và kiểm tra kết quả nhé!";
    const solution = "a) 1 975 + 2 025 = 4 000<br>b) 3 871 – 189 = 3 682<br>c) 475 × 81 = 38 475<br>d) 51 : 6 = 8,5";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('103_2', score, 'btn-check-103-2', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 3: Thứ tự phép tính Rô-bốt
// ==========================================
window.check_103_3 = () => {
    const v1 = cleanString(document.getElementById('103-3-1')?.value); // 21

    const isCorrect = (v1 === '21');

    const rightAnswer = "a) 21; b) Giá trị đúng là 11 (21 khác 11)";
    const studentAnswer = `Màn hình hiện: ${v1 || '?'}`;

    const guidance = "Máy tính cầm tay thông thường thực hiện lần lượt từ trái sang phải theo thứ tự bấm phím. Em bấm (5 + 2) = 7 rồi lấy 7 x 3 xem màn hình ra bao nhiêu nhé!";
    const solution = "a) Màn hình máy tính hiển thị kết quả là: 21.<br>b) Giá trị biểu thức 5 + 2 × 3 theo quy tắc toán học (nhân trước cộng sau): 5 + 6 = 11.<br><br>Nhận xét: Kết quả bấm máy tính liên tiếp (21) khác với kết quả tính toán đúng (11) vì máy tính thực hiện từ trái sang phải.<br>Chúc mừng em!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('103_3', score, 'btn-check-103-3', 1, 1, isCorrect ? 1 : 0);
};


// ==========================================
// HỖ TRỢ PHÓNG TO HÌNH ẢNH CHO TIẾT 103
// ==========================================
window.zoomImage103 = (src, alt) => {
    let modal = document.getElementById('image-zoom-modal-103');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-zoom-modal-103';
        modal.className = 'fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300';
        modal.innerHTML = `
            <div class="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl p-3 shadow-2xl border-4 border-white animate-in zoom-in-95 duration-300 pointer-events-auto">
                <img id="zoom-modal-img-103" src="" alt="" class="max-w-[85vw] max-h-[80vh] object-contain rounded-2xl">
                <p id="zoom-modal-caption-103" class="text-center font-bold text-slate-700 mt-3 text-lg md:text-xl"></p>
                <button onclick="document.getElementById('image-zoom-modal-103').remove()" class="absolute -top-4 -right-4 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-white hover:bg-red-600 transition-colors cursor-pointer" title="Đóng">✕</button>
            </div>
        `;
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        };
        document.body.appendChild(modal);
    }
    document.getElementById('zoom-modal-img-103').src = src;
    document.getElementById('zoom-modal-caption-103').innerText = alt;
};
