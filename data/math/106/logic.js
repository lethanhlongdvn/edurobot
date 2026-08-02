// ===================================================================
// Tiết 106 - Bài 44: Luyện tập chung (tiết 1)
// LOGIC: Chấm điểm bài giải bằng nút E và phản hồi showMathFeedback
// ===================================================================

const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().replace(/\s+/g, '').replace(/,/g, '.');
};

// ==========================================
// BÀI 1: Chọn cách viết tỉ số % thích hợp
// ==========================================
window.check_106_1 = () => {
    const vA = cleanString(document.getElementById('106-1-A')?.value); // 60
    const vB = cleanString(document.getElementById('106-1-B')?.value); // 85
    const vC = cleanString(document.getElementById('106-1-C')?.value); // 50
    const vD = cleanString(document.getElementById('106-1-D')?.value); // 12

    const isCorrect = (vA === '60') && (vB === '85') && (vC === '50') && (vD === '12');

    const rightAnswer = "Xe A: 60%; Xe B: 85%; Xe C: 50%; Xe D: 12%";
    const studentAnswer = `Xe A: ${vA || '?'}%; Xe B: ${vB || '?'}%; Xe C: ${vC || '?'}%; Xe D: ${vD || '?'}%`;

    const guidance = "Em hãy nhân cả tử số và mẫu số của mỗi phân số với một số thích hợp sao cho mẫu số bằng 100. Sau đó viết phân số thập phân tìm được dưới dạng tỉ số phần trăm nhé!";
    const solution = "Cách viết tỉ số phần trăm thích hợp cho từng xe là:<br>• Xe A (6/10) = 60%<br>• Xe B (17/20) = 85%<br>• Xe C (25/50) = 50%<br>• Xe D (12/100) = 12%";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('106_1', score, 'btn-check-106-1', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 2: Điền bảng tỉ lệ bản đồ
// ==========================================
window.check_106_2 = () => {
    const v1 = cleanString(document.getElementById('106-2-1')?.value); // 0.04
    const v2 = cleanString(document.getElementById('106-2-2')?.value); // 80
    const v3 = cleanString(document.getElementById('106-2-3')?.value); // 7.5
    const v4 = cleanString(document.getElementById('106-2-4')?.value); // 2

    const isCorrect = (v1 === '0.04') && (v2 === '80') && (v3 === '7.5') && (v4 === '2');

    const rightAnswer = "Cột 1: 0,04 km; Cột 2: 80 cm; Cột 3: 7,5 km; Cột 4: 2 cm";
    const studentAnswer = `Cột 1: ${v1 || '?'} km; Cột 2: ${v2 || '?'} cm; Cột 3: ${v3 || '?'} km; Cột 4: ${v4 || '?'} cm`;

    const guidance = "• Muốn tìm độ dài thật: Lấy độ dài trên bản đồ nhân với mẫu số của tỉ lệ bản đồ, sau đó đổi sang đơn vị km.<br>• Muốn tìm độ dài trên bản đồ: Đổi độ dài thật sang cm rồi chia cho mẫu số của tỉ lệ bản đồ nhé!";
    const solution = "• Cột 1: 2 × 2 000 = 4 000 cm = 0,04 km<br>• Cột 2: Đổi 1,6 km = 160 000 cm. Độ dài trên bản đồ là: 160 000 : 2 000 = 80 cm<br>• Cột 3: 1,5 × 500 000 = 750 000 cm = 7,5 km<br>• Cột 4: Đổi 10 km = 1 000 000 cm. Độ dài trên bản đồ là: 1 000 000 : 500 000 = 2 cm";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('106_2', score, 'btn-check-106-2', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 3: Thỏ và Rùa hái nấm
// ==========================================
window.check_106_3 = () => {
    const v1 = cleanString(document.getElementById('106-3-1')?.value); // 24
    const v2 = cleanString(document.getElementById('106-3-2')?.value); // 60

    const isCorrect = (v1 === '24') && (v2 === '60');

    const rightAnswer = "Thỏ: 24 cây nấm; Rùa: 60 cây nấm";
    const studentAnswer = `Thỏ: ${v1 || '?'} cây; Rùa: ${v2 || '?'} cây`;

    const guidance = "Đây là bài toán Tìm hai số khi biết Tổng và Tỉ số. Em hãy tính theo các bước:<br>1. Tìm tổng số phần bằng nhau.<br>2. Tìm số nấm của mỗi bạn bằng cách lấy tổng số nấm chia cho tổng số phần rồi nhân với số phần tương ứng của mỗi bạn nhé!";
    const solution = "Theo đề bài, tỉ số nấm của Thỏ và Rùa là 2/5.<br>Tổng số phần bằng nhau là:<br>2 + 5 = 7 (phần)<br><br>Số nấm Thỏ hái được là:<br>84 : 7 × 2 = 24 (cây nấm)<br><br>Số nấm Rùa hái được là:<br>84 − 24 = 60 (cây nấm)<br>Đáp số: Thỏ: 24 cây nấm; Rùa: 60 cây nấm.";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('106_3', score, 'btn-check-106-3', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 4: Mua ti vi giảm giá 8%
// ==========================================
window.check_106_4 = () => {
    const v1 = cleanString(document.getElementById('106-4-1')?.value); // 1200000 hoặc 1.200.000
    const v2 = cleanString(document.getElementById('106-4-2')?.value); // 13800000 hoặc 13.800.000

    const isCorrect = (v1 === '1200000' || v1 === '1.200.000') && (v2 === '13800000' || v2 === '13.800.000');

    const rightAnswer = "a) 1 200 000 đồng; b) 13 800 000 đồng";
    const studentAnswer = `a) ${v1 || '?'} đồng; b) ${v2 || '?'} đồng`;

    const guidance = "• Câu a: Để tính số tiền được giảm giá, em hãy tìm giá trị phần trăm của số tiền ban đầu (nhân số tiền ban đầu với tỉ lệ phần trăm giảm giá rồi chia cho 100).<br>• Câu b: Để tính số tiền thực tế phải trả, em lấy giá bán ban đầu trừ đi số tiền đã được giảm giá nhé!";
    const solution = "a) Số tiền một chiếc ti vi đã được giảm giá là:<br>15 000 000 × 8% = 1 200 000 (đồng)<br><br>b) Giá tiền chiếc ti vi sau khi giảm giá là:<br>15 000 000 − 1 200 000 = 13 800 000 (đồng)<br>Đáp số: a) 1 200 000 đồng; b) 13 800 000 đồng.";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('106_4', score, 'btn-check-106-4', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// HỖ TRỢ PHÓNG TO HÌNH ẢNH CHO TIẾT 106
// ==========================================
window.zoomImage106 = (src, alt) => {
    let modal = document.getElementById('image-zoom-modal-106');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-zoom-modal-106';
        modal.className = 'fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300';
        modal.innerHTML = `
            <div class="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl p-3 shadow-2xl border-4 border-white animate-in zoom-in-95 duration-300 pointer-events-auto">
                <img id="zoom-modal-img-106" src="" alt="" class="max-w-[85vw] max-h-[80vh] object-contain rounded-2xl">
                <p id="zoom-modal-caption-106" class="text-center font-bold text-slate-700 mt-3 text-lg md:text-xl"></p>
                <button onclick="document.getElementById('image-zoom-modal-106').remove()" class="absolute -top-4 -right-4 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-white hover:bg-red-600 transition-colors cursor-pointer" title="Đóng">✕</button>
            </div>
        `;
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        };
        document.body.appendChild(modal);
    }
    document.getElementById('zoom-modal-img-106').src = src;
    document.getElementById('zoom-modal-caption-106').innerText = alt;
};
