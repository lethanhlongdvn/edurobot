// ===================================================================
// Tiết 109 - Bài 46: Xăng-ti-mét khối. Đề-xi-mét khối (tiết 1)
// LOGIC: Chấm điểm bài giải qua ô nhập đáp số và phản hồi showMathFeedback
// ===================================================================

const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().replace(/\s+/g, '').replace(/,/g, '.');
};

// ==========================================
// BÀI 1: Hoàn thành bảng Đọc / Viết
// ==========================================
window.check_109_1 = () => {
    const v1 = cleanString(document.getElementById('109-1-1')?.value); // 234 dm3 hoặc 234dm3
    const v2 = cleanString(document.getElementById('109-1-2')?.value); // Một nghìn đề-xi-mét khối
    const v3 = cleanString(document.getElementById('109-1-3')?.value); // 0.8 cm3 hoặc 0,8cm3

    const checkV1 = (v1 === '234dm3' || v1 === '234dm³' || v1 === '234');
    const checkV2 = document.getElementById('109-1-2')?.value.trim().toLowerCase().includes('một nghìn đề-xi-mét khối') || document.getElementById('109-1-2')?.value.trim().toLowerCase().includes('mot nghin de xi met khoi');
    const checkV3 = (v3 === '0.8cm3' || v3 === '0.8cm³' || v3 === '0.8' || v3 === '0,8');

    const isCorrect = checkV1 && checkV2 && checkV3;

    const rightAnswer = "Hàng 2: 234 dm³; Hàng 3: Một nghìn đề-xi-mét khối; Hàng 4: 0,8 cm³";
    const studentAnswer = `Hàng 2: ${v1 || '?'}; Hàng 3: ${document.getElementById('109-1-2')?.value || '?'}; Hàng 4: ${v3 || '?'}`;

    const guidance = "Em hãy đọc kỹ yêu cầu của mỗi hàng:<br>- Với hàng yêu cầu viết số: Em viết các chữ số tương ứng kèm đơn vị đo thể tích thích hợp.<br>- Với hàng yêu cầu đọc số: Em viết cách đọc số thập phân hoặc số tự nhiên kèm theo tên đơn vị đo thể tích tương ứng nhé!";
    const solution = "Hoàn thành bảng đọc và viết số đo thể tích như sau:<br>• Hai trăm ba mươi tư đề-xi-mét khối $\\rightarrow$ <b>234 dm³</b><br>• Một nghìn đề-xi-mét khối $\\leftarrow$ <b>1 000 dm³</b><br>• Không phẩy tám xăng-ti-mét khối $\\rightarrow$ <b>0,8 cm³</b>";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('109_1', score, 'btn-check-109-1', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 2: Đếm hình lập phương 1 cm³
// ==========================================
window.check_109_2 = () => {
    const vA = cleanString(document.getElementById('109-2-a')?.value); // 12
    const vB = cleanString(document.getElementById('109-2-b')?.value); // 27

    const isCorrect = (vA === '12') && (vB === '27');

    const rightAnswer = "a) 12 cm³; b) 27 cm³";
    const studentAnswer = `a) ${vA || '?'} cm³; b) ${vB || '?'} cm³`;

    const guidance = "Mỗi hình lập phương nhỏ có thể tích là 1 cm³.<br>Để tính thể tích của mỗi hình lớn, em hãy đếm xem hình đó gồm bao nhiêu lớp, mỗi lớp có bao nhiêu khối lập phương nhỏ rồi nhân các kết quả lại với nhau nhé!";
    const solution = "a) Hình a gồm 12 hình lập phương nhỏ cạnh 1 cm (3 × 2 × 2 = 12), vậy thể tích là: <b>12 cm³</b>.<br>b) Hình b gồm 27 hình lập phương nhỏ cạnh 1 cm (3 × 3 × 3 = 27), vậy thể tích là: <b>27 cm³</b>.";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('109_2', score, 'btn-check-109-2', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 3: Đổi đơn vị đo thể tích
// ==========================================
window.check_109_3 = () => {
    const v1 = cleanString(document.getElementById('109-3-1')?.value); // 1000
    const v2 = cleanString(document.getElementById('109-3-2')?.value); // 1
    const v3 = cleanString(document.getElementById('109-3-3')?.value); // 2000
    const v4 = cleanString(document.getElementById('109-3-4')?.value); // 5
    const v5 = cleanString(document.getElementById('109-3-5')?.value); // 5006
    const v6 = cleanString(document.getElementById('109-3-6')?.value); // 8.7

    const isCorrect = (v1 === '1000') && (v2 === '1') && (v3 === '2000') && (v4 === '5') && (v5 === '5006') && (v6 === '8.7' || v6 === '8,7');

    const rightAnswer = "a) 1 dm³ = 1 000 cm³; 1 000 cm³ = 1 dm³ — b) 2 dm³ = 2 000 cm³; 5 000 cm³ = 5 dm³ — c) 5 dm³ 6 cm³ = 5 006 cm³; 8 700 cm³ = 8,7 dm³";
    const studentAnswer = `a) ${v1 || '?'}, ${v2 || '?'} — b) ${v3 || '?'}, ${v4 || '?'} — c) ${v5 || '?'}, ${v6 || '?'}`;

    const guidance = "Ghi nhớ mối quan hệ: 1 dm³ = 1 000 cm³.<br>• Muốn đổi từ dm³ sang cm³, ta nhân số đó với 1 000.<br>• Muốn đổi từ cm³ sang dm³, ta chia số đó cho 1 000 nhé!";
    const solution = "Điền số thích hợp vào chỗ chấm:<br>a) 1 dm³ = <b>1 000</b> cm³ ; 1 000 cm³ = <b>1</b> dm³<br>b) 2 dm³ = <b>2 000</b> cm³ ; 5 000 cm³ = <b>5</b> dm³<br>c) 5 dm³ 6 cm³ = 5 000 cm³ + 6 cm³ = <b>5 006</b> cm³<br>   8 700 cm³ = 8 700 : 1 000 = <b>8,7</b> dm³";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('109_3', score, 'btn-check-109-3', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// HỖ TRỢ PHÓNG TO HÌNH ẢNH CHO TIẾT 109
// ==========================================
window.zoomImage109 = (src, alt) => {
    let modal = document.getElementById('image-zoom-modal-109');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-zoom-modal-109';
        modal.className = 'fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300';
        modal.innerHTML = `
            <div class="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl p-3 shadow-2xl border-4 border-white animate-in zoom-in-95 duration-300 pointer-events-auto">
                <img id="zoom-modal-img-109" src="" alt="" class="max-w-[85vw] max-h-[80vh] object-contain rounded-2xl">
                <p id="zoom-modal-caption-109" class="text-center font-bold text-slate-700 mt-3 text-lg md:text-xl"></p>
                <button onclick="document.getElementById('image-zoom-modal-109').remove()" class="absolute -top-4 -right-4 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-white hover:bg-red-600 transition-colors cursor-pointer" title="Đóng">✕</button>
            </div>
        `;
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        };
        document.body.appendChild(modal);
    }
    document.getElementById('zoom-modal-img-109').src = src;
    document.getElementById('zoom-modal-caption-109').innerText = alt;
};
