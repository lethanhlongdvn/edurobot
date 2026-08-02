// ===================================================================
// Tiết 94 - Bài 37: Tỉ lệ bản đồ và ứng dụng (tiết 2)
// LOGIC: Xử lý kiểm tra kết quả cho 4 slide bài tập
// ===================================================================

const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().replace(/\s+/g, '');
};

// ==========================================
// BÀI 1: Quãng đường sắt Đà Nẵng - Nha Trang
// ==========================================
window.check_94_1 = () => {
    const v1 = cleanString(document.getElementById('94-1-1')?.value);
    const v2 = cleanString(document.getElementById('94-1-2')?.value);
    const v3 = cleanString(document.getElementById('94-1-3')?.value);

    const isCorrect = (v1 === '50000000') && (v2 === '500') && (v3 === '500');
    const rightAnswer = "50 000 000; 500; 500";
    const studentAnswer = `${v1 || '?'}; ${v2 || '?'}; ${v3 || '?'}`;

    const guidance = "Em hãy lấy khoảng cách trên bản đồ (5 cm) nhân với 10 000 000 để ra khoảng cách thật (cm). Sau đó đổi sang ki-lô-mét (1 km = 100 000 cm) nhé!";
    const solution = "Trên thực tế, quãng đường sắt từ ga Đà Nẵng đến ga Nha Trang dài là:<br>5 x 10 000 000 = 50 000 000 (cm)<br>Đổi: 50 000 000 cm = 500 km<br>Đáp số: 500 km.<br>Thầy khen em đã làm bài chính xác!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('94_1', score, 'btn-check-94-1', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 2: Bản vẽ của Nam
// ==========================================
window.check_94_2 = () => {
    const v1 = cleanString(document.getElementById('94-2-1')?.value);
    const v2 = cleanString(document.getElementById('94-2-2')?.value);
    const v3 = cleanString(document.getElementById('94-2-3')?.value);
    const v4 = cleanString(document.getElementById('94-2-4')?.value);
    const v5 = cleanString(document.getElementById('94-2-5')?.value);
    const v6 = cleanString(document.getElementById('94-2-6')?.value);

    const isCorrect = (v1 === '150000') && (v2 === '120000') && (v3 === '50') && (v4 === '40') && (v5 === '50') && (v6 === '40');
    const rightAnswer = "150 000; 120 000; 50; 40; 50; 40";
    const studentAnswer = `${v1 || '?'}; ${v2 || '?'}; ${v3 || '?'}; ${v4 || '?'}; ${v5 || '?'}; ${v6 || '?'}`;

    const guidance = "Trước tiên em hãy đổi quãng đường từ mét ra xăng-ti-mét (1 m = 100 cm). Sau đó đem chia cho mẫu số tỉ lệ 3 000 để tìm độ dài tương ứng trên bản đồ.";
    const solution = "Đổi: 1 500 m = 150 000 cm; 1 200 m = 120 000 cm.<br>Đoạn AB trên bản đồ: 150 000 : 3 000 = 50 (cm).<br>Đoạn AC trên bản đồ: 120 000 : 3 000 = 40 (cm).<br>Đáp số: AB: 50 cm; AC: 40 cm.<br>Tuyệt vời! Chúc mừng em giải đúng!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('94_2', score, 'btn-check-94-2', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 3: Điền bảng số liệu
// ==========================================
window.check_94_3 = () => {
    const v1 = cleanString(document.getElementById('94-3-1')?.value).replace(',', '.');
    const v2 = cleanString(document.getElementById('94-3-2')?.value);
    const v3 = cleanString(document.getElementById('94-3-3')?.value);

    const isCorrect = (v1 === '1.5' || v1 === '15/10') && (v2 === '80') && (v3 === '8');
    const rightAnswer = "1,5; 80; 8";
    const studentAnswer = `${v1 || '?'}; ${v2 || '?'}; ${v3 || '?'}`;

    const guidance = "• Để tính độ dài thực tế: Em lấy độ dài trên bản đồ nhân với mẫu số của tỉ lệ bản đồ, sau đó đổi sang đơn vị đo thích hợp (dm, m, km...).<br>• Để tính độ dài trên bản đồ: Em đổi độ dài thực tế sang đơn vị xăng-ti-mét (cm) rồi chia cho mẫu số của tỉ lệ bản đồ nhé!";
    const solution = "• Ô thứ nhất: 15 x 10 000 = 150 000 cm = 1,5 km.<br>• Ô thứ hai: 8 x 1 000 000 = 8 000 000 cm = 80 km.<br>• Ô thứ ba: 40 km = 4 000 000 cm. 4 000 000 : 500 000 = 8 cm.<br>Em làm bài rất tốt!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('94_3', score, 'btn-check-94-3', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 4: Thực hành đo cạnh bàn
// ==========================================
window.check_94_4 = () => {
    const realVal = cleanString(document.getElementById('94-4-real')?.value).replace(',', '.');
    const mapVal = cleanString(document.getElementById('94-4-map')?.value).replace(',', '.');

    const real = parseFloat(realVal);
    const map = parseFloat(mapVal);

    // Tính logic: map = real / 50
    const isCorrect = (!isNaN(real) && !isNaN(map) && real > 0 && map > 0 && Math.abs(map * 50 - real) < 0.1);
    
    const rightAnswer = `Độ dài trên bản đồ = Chiều dài thật : 50`;
    const studentAnswer = `Thật: ${realVal || '?'} cm; Bản đồ: ${mapVal || '?'} cm`;

    const guidance = "Em hãy đo cạnh bàn thực tế theo đơn vị xăng-ti-mét (cm), rồi chia số đo đó cho mẫu số của tỉ lệ bản đồ để tìm độ dài thu nhỏ cần vẽ nhé!";
    const solution = `Chiều dài thật cạnh bàn em nhập là: ${real} cm.<br>Với tỉ lệ 1 : 50, độ dài trên bản đồ là:<br>${real} : 50 = ${real / 50} cm.<br>Phép tính của em đã hoàn toàn chính xác! Thầy khen em!`;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('94_4', score, 'btn-check-94-4', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// HỖ TRỢ PHÓNG TO HÌNH ẢNH CHO TIẾT 94
// ==========================================
window.zoomImage94 = (src, alt) => {
    let modal = document.getElementById('image-zoom-modal-94');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-zoom-modal-94';
        modal.className = 'fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300';
        modal.innerHTML = `
            <div class="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl p-3 shadow-2xl border-4 border-white animate-in zoom-in-95 duration-300 pointer-events-auto">
                <img id="zoom-modal-img-94" src="" alt="" class="max-w-[85vw] max-h-[80vh] object-contain rounded-2xl">
                <p id="zoom-modal-caption-94" class="text-center font-bold text-slate-700 mt-3 text-lg md:text-xl"></p>
                <button onclick="document.getElementById('image-zoom-modal-94').remove()" class="absolute -top-4 -right-4 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-white hover:bg-red-600 transition-colors cursor-pointer" title="Đóng">✕</button>
            </div>
        `;
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        };
        document.body.appendChild(modal);
    }
    document.getElementById('zoom-modal-img-94').src = src;
    document.getElementById('zoom-modal-caption-94').innerText = alt;
};
