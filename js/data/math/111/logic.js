// ===================================================================
// Tiết 111 - Bài 47: Mét khối
// LOGIC: Chấm điểm bài giải bằng nút E và phản hồi showMathFeedback
// ===================================================================

const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().toLowerCase().replace(/\s+/g, ' ').replace(/,/g, '.');
};

// --- Trình phóng to hình ảnh ---
window.zoomImage111 = (src, alt) => {
    let modal = document.getElementById('image-zoom-modal-111');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-zoom-modal-111';
        modal.className = 'fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300';
        modal.innerHTML = `
            <div class="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl p-3 shadow-2xl border-4 border-white animate-in zoom-in-95 duration-300 pointer-events-auto">
                <img id="zoom-modal-img-111" src="" alt="" class="max-w-[85vw] max-h-[80vh] object-contain rounded-2xl">
                <p id="zoom-modal-caption-111" class="text-center font-bold text-slate-700 mt-3 text-lg md:text-xl"></p>
                <button onclick="document.getElementById('image-zoom-modal-111').remove()" class="absolute -top-4 -right-4 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-white hover:bg-red-600 transition-colors cursor-pointer" title="Đóng">✕</button>
            </div>
        `;
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        };
        document.body.appendChild(modal);
    }
    document.getElementById('zoom-modal-img-111').src = src;
    document.getElementById('zoom-modal-caption-111').innerText = alt;
};

// --- Trình toggle hiện bài giải ---
window.toggleSolution111 = (exId) => {
    const el = document.getElementById(`solution-111-${exId}`);
    if (el) {
        el.classList.toggle('hidden');
    }
};

// ==========================================
// BÀI 1: Đọc các số đo thể tích của mỗi bể bơi
// ==========================================
window.check_111_1 = () => {
    const v1 = cleanString(document.getElementById('111-1-1')?.value);
    const v2 = cleanString(document.getElementById('111-1-2')?.value);
    const v3 = cleanString(document.getElementById('111-1-3')?.value);

    const ok1 = v1.includes('một phẩy hai mươi lăm mét khối') || v1.includes('một phẩy hai lăm mét khối');
    const ok2 = v2.includes('ba trăm mét khối');
    const ok3 = v3.includes('một nghìn tám trăm bảy mươi lăm mét khối') || 
                v3.includes('một ngàn tám trăm bảy mươi lăm mét khối') || 
                v3.includes('một nghìn tám trăm bảy lăm mét khối') || 
                v3.includes('một ngàn tám trăm bảy lăm mét khối');

    const isCorrect = ok1 && ok2 && ok3;

    const rightAnswer = "Bể 1: Một phẩy hai mươi lăm mét khối; Bể 2: Ba trăm mét khối; Bể 3: Một nghìn tám trăm bảy mươi lăm mét khối";
    const studentAnswer = `Bể 1: ${document.getElementById('111-1-1')?.value || '?'}; Bể 2: ${document.getElementById('111-1-2')?.value || '?'}; Bể 3: ${document.getElementById('111-1-3')?.value || '?'}`;

    const guidance = "Em hãy viết cách đọc số đo bằng chữ tiếng Việt rõ ràng, kèm theo đơn vị đo 'mét khối' ở cuối cùng nhé!<br>• 1,25 m³ đọc phần số là một phẩy hai mươi lăm (hoặc một phẩy hai lăm).<br>• 300 m³ đọc phần số là ba trăm.<br>• 1 875 m³ đọc phần số là một nghìn tám trăm bảy mươi lăm (hoặc bảy lăm).";
    const solution = "Cách đọc các số đo thể tích tương ứng với mỗi bể bơi là:<br>• 1,25 m³: Một phẩy hai mươi lăm mét khối (hoặc một phẩy hai lăm mét khối).<br>• 300 m³: Ba trăm mét khối.<br>• 1 875 m³: Một nghìn tám trăm bảy mươi lăm mét khối (hoặc một ngàn tám trăm bảy mươi lăm mét khối / một nghìn tám trăm bảy lăm mét khối).<br>Chúc mừng em!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('111_1', score, 'btn-check-111-1', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 2: Số? (Honeycombs conversion)
// ==========================================
window.check_111_2 = () => {
    const v1 = cleanString(document.getElementById('111-2-1')?.value);
    const v2 = cleanString(document.getElementById('111-2-2')?.value);
    const v3 = cleanString(document.getElementById('111-2-3')?.value);
    const v4 = cleanString(document.getElementById('111-2-4')?.value);
    const v5 = cleanString(document.getElementById('111-2-5')?.value);
    const v6 = cleanString(document.getElementById('111-2-6')?.value);

    const ok1 = (v1 === '3000' || v1 === '3.000');
    const ok2 = (v2 === '1700' || v2 === '1.700');
    const ok3 = (v3 === '2.4' || v3 === '2,4');
    const ok4 = (v4 === '25000000' || v4 === '25.000.000');
    const ok5 = (v5 === '250');
    const ok6 = (v6 === '0.8' || v6 === '0,8');

    const isCorrect = ok1 && ok2 && ok3 && ok4 && ok5 && ok6;

    const rightAnswer = "a) 3000; b) 1700; c) 25000000; d) 2,4; e) 250; f) 0,8";
    const studentAnswer = `a) ${v1 || '?'}; b) ${v2 || '?'}; c) ${v4 || '?'}; d) ${v3 || '?'}; e) ${v5 || '?'}; f) ${v6 || '?'}`;

    const guidance = "Em hãy ghi nhớ mối liên hệ giữa các đơn vị đo thể tích:<br>• Hai đơn vị đo thể tích liền kề hơn kém nhau 1 000 lần.<br>• Để đổi đơn vị lớn ra đơn vị nhỏ, em nhân với 1 000 hoặc 1 000 000 tương ứng.<br>• Để đổi đơn vị nhỏ ra đơn vị lớn, em chia cho 1 000 hoặc 1 000 000 nhé!";
    const solution = "Đáp án đúng các phép đổi đơn vị đo thể tích:<br>• a) 3 m³ = 3 × 1 000 = 3 000 dm³<br>• b) 1,7 m³ = 1,7 × 1 000 = 1 700 dm³<br>• c) 25 m³ = 25 × 1 000 000 = 25 000 000 cm³<br>• d) 2 400 dm³ = 2 400 : 1 000 = 2,4 m³<br>• e) 1/4 m³ = 1 000 dm³ : 4 = 250 dm³<br>• f) 800 000 cm³ = 800 000 : 1 000 000 = 0,8 m³<br>Em học bài rất tốt!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('111_2', score, 'btn-check-111-2', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 3: Bài toán thể tích trống xe tải
// ==========================================
window.check_111_3 = () => {
    const v = cleanString(document.getElementById('111-3')?.value);

    const isCorrect = (v === '6.64' || v === '6,64');

    const rightAnswer = "6,64 m³";
    const studentAnswer = `${v || '?'} m³`;

    const guidance = "Em hãy giải bài toán theo các bước:<br>1. Tính tỉ số phần trăm của lượng cát cần đổ thêm để đầy hố (lấy 100% trừ đi tỉ số phần trăm cát đã có).<br>2. Tìm thể tích phần cát cần đổ thêm bằng cách nhân thể tích hố với tỉ số phần trăm vừa tìm được rồi chia cho 100 nhé!";
    const solution = "Thể tích phần còn trống chiếm số phần trăm thể tích thùng xe là:<br>100% − 80% = 20%<br><br>Thể tích phần còn trống trong thùng xe là:<br>33,2 × 20 : 100 = 6,64 (m³)<br>Đáp số: 6,64 m³.<br>Chúc mừng em đã giải đúng bài toán!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('111_3', score, 'btn-check-111-3', 1, 1, isCorrect ? 1 : 0);
};
