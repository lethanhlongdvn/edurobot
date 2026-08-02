// ===================================================================
// Tiết 104 - Bài 42: Máy tính cầm tay (tiết 2)
// LOGIC: Chấm điểm bài giải bằng nút E và phản hồi showMathFeedback
// ===================================================================

const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().replace(/\s+/g, '').replace(/,/g, '.');
};

// ==========================================
// HOẠT ĐỘNG 1: Tính % của một số
// ==========================================
window.check_104_hd1 = () => {
    const v1 = cleanString(document.getElementById('104-hd1-1')?.value); // 2.8
    const v2 = cleanString(document.getElementById('104-hd1-2')?.value); // 1.28

    const isCorrect = (v1 === '2.8') && (v2 === '1.28');

    const rightAnswer = "a) 2,8; b) 1,28";
    const studentAnswer = `a) ${v1 || '?'}; b) ${v2 || '?'}`;

    const guidance = "Em hãy bấm lần lượt các phím trên máy tính cầm tay theo cú pháp: [Số A] [×] [Số phần trăm B] [%] [=] để tìm giá trị phần trăm tương ứng của số đó nhé!";
    const solution = "a) 8% của 35 là:<br>35 × 8% = 2,8<br><br>b) 32% của 4 là:<br>4 × 32% = 1,28";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('104_hd1', score, 'btn-check-104-hd1', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// HOẠT ĐỘNG 2: Tính tỉ số % của hai số
// ==========================================
window.check_104_hd2 = () => {
    const v1 = cleanString(document.getElementById('104-hd2-1')?.value); // 20
    const v2 = cleanString(document.getElementById('104-hd2-2')?.value); // 30.4

    const isCorrect = (v1 === '20') && (v2 === '30.4');

    const rightAnswer = "a) 20%; b) 30,4%";
    const studentAnswer = `a) ${v1 || '?'}%; b) ${v2 || '?'}%`;

    const guidance = "Em hãy bấm lần lượt các phím trên máy tính cầm tay theo cú pháp: [Số thứ nhất] [÷] [Số thứ hai] [%] [=] để tìm tỉ số phần trăm của hai số đó nhé!";
    const solution = "a) Tỉ số phần trăm của 16 và 80 là:<br>16 : 80 = 20%<br><br>b) Tỉ số phần trăm của 38 và 125 là:<br>38 : 125 = 30,4%";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('104_hd2', score, 'btn-check-104-hd2', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// LUYỆN TẬP 1: Mua sắm hoàn tiền
// ==========================================
window.check_104_lt1 = () => {
    const v1 = cleanString(document.getElementById('104-lt1-1')?.value); // 0
    const v2 = cleanString(document.getElementById('104-lt1-2')?.value); // 110000 hoặc 110.000

    const isCorrect = (v1 === '0') && (v2 === '110000' || v1 === '110.000');

    const rightAnswer = "a) 0 đồng (vì tổng hóa đơn < 1 000 000 đồng); b) 110 000 đồng";
    const studentAnswer = `a) ${v1 || '?'} đồng; b) ${v2 || '?'} đồng`;

    const guidance = "Lưu ý: Khuyến mại chỉ áp dụng cho đơn hàng từ 1 000 000 đồng trở lên. Hóa đơn a có tổng tiền là 994 000 đồng (< 1 000 000 đồng) nên được hoàn 0 đồng. Hóa đơn b có tổng tiền là 1 100 000 đồng (> 1 000 000 đồng) nên được hoàn 10% của 1 100 000 đồng nhé!";
    const solution = "a) Tổng giá trị hóa đơn a là:<br>275 000 + 599 000 + 120 000 = 994 000 (đồng)<br>Vì 994 000 đồng < 1 000 000 đồng nên hóa đơn a được hoàn lại 0 đồng.<br><br>b) Tổng giá trị hóa đơn b là:<br>850 000 + 250 000 = 1 100 000 (đồng)<br>Vì 1 100 000 đồng > 1 000 000 đồng nên hóa đơn b được hoàn lại số tiền là:<br>1 100 000 × 10% = 110 000 (đồng)<br>Đáp số: a) 0 đồng; b) 110 000 đồng.";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('104_lt1', score, 'btn-check-104-lt1', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// LUYỆN TẬP 2: Tiền gửi ngân hàng
// ==========================================
window.check_104_lt2 = () => {
    const v1 = cleanString(document.getElementById('104-lt2-1')?.value); // 20000000

    const isCorrect = (v1 === '20000000' || v1 === '20.000.000');

    const rightAnswer = "20 000 000 đồng";
    const studentAnswer = `${v1 || '?'} đồng`;

    const guidance = "Muốn tính số tiền lãi sau một năm, em hãy dùng máy tính cầm tay tính giá trị phần trăm lãi suất của số tiền gửi tương ứng bằng cách bấm: [Số tiền gửi] [×] [Lãi suất] [%] [=] nhé!";
    const solution = "Số tiền lãi mà chú Năm nhận được sau một năm là:<br>250 000 000 × 8% = 20 000 000 (đồng)<br>Đáp số: 20 000 000 đồng.";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('104_lt2', score, 'btn-check-104-lt2', 1, 1, isCorrect ? 1 : 0);
};


// ==========================================
// HỖ TRỢ PHÓNG TO HÌNH ẢNH CHO TIẾT 104
// ==========================================
window.zoomImage104 = (src, alt) => {
    let modal = document.getElementById('image-zoom-modal-104');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-zoom-modal-104';
        modal.className = 'fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300';
        modal.innerHTML = `
            <div class="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl p-3 shadow-2xl border-4 border-white animate-in zoom-in-95 duration-300 pointer-events-auto">
                <img id="zoom-modal-img-104" src="" alt="" class="max-w-[85vw] max-h-[80vh] object-contain rounded-2xl">
                <p id="zoom-modal-caption-104" class="text-center font-bold text-slate-700 mt-3 text-lg md:text-xl"></p>
                <button onclick="document.getElementById('image-zoom-modal-104').remove()" class="absolute -top-4 -right-4 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-white hover:bg-red-600 transition-colors cursor-pointer" title="Đóng">✕</button>
            </div>
        `;
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        };
        document.body.appendChild(modal);
    }
    document.getElementById('zoom-modal-img-104').src = src;
    document.getElementById('zoom-modal-caption-104').innerText = alt;
};
