// ===================================================================
// Tiết 108 - Bài 45: Thể tích của một hình
// LOGIC: Chấm điểm bài giải qua ô nhập đáp số/lựa chọn và phản hồi showMathFeedback
// ===================================================================

const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().replace(/\s+/g, '').replace(/,/g, '.');
};

// ==========================================
// HOẠT ĐỘNG: Quan sát hình vẽ trả lời câu hỏi
// ==========================================
window.check_108_hd = () => {
    const vA = cleanString(document.getElementById('108-hd-A')?.value); // 12
    const vB = cleanString(document.getElementById('108-hd-B')?.value); // 18
    const vC = document.querySelector('input[name="108-hd-c"]:checked')?.value; // B

    const isCorrect = (vA === '12') && (vB === '18') && (vC === 'B');

    const rightAnswer = "a) 12 hình; b) 18 hình; c) Hình B";
    const studentAnswer = `a) ${vA || '?'} hình; b) ${vB || '?'} hình; c) ${vC ? 'Hình ' + vC : 'Chưa chọn'}`;

    const guidance = "Em hãy đếm số lượng hình lập phương nhỏ tạo thành hình A và hình B. Hình nào có số lượng hình lập phương nhỏ nhiều hơn thì hình đó có thể tích lớn hơn nhé!";
    const solution = "a) Hình hộp chữ nhật A gồm 12 hình lập phương nhỏ (3 × 2 × 2 = 12).<br>b) Hình hộp chữ nhật B gồm 18 hình lập phương nhỏ (3 × 3 × 2 = 18).<br>c) Vì 18 > 12 nên hình B có thể tích lớn hơn hình A.";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('108_hd', score, 'btn-check-108-hd', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// LUYỆN TẬP 1: So sánh thể tích hình C và D
// ==========================================
window.check_108_lt1 = () => {
    const selected = document.querySelector('input[name="108-lt1"]:checked')?.value; // B

    const isCorrect = (selected === 'B');

    const rightAnswer = "B. Thể tích hình C bằng thể tích hình D.";
    const studentAnswer = selected ? `Đáp án ${selected}` : "Chưa chọn";

    const guidance = "Em hãy đếm số hình lập phương nhỏ tạo thành hình C và hình D. Cả hai hình đều gồm 6 hình lập phương nhỏ bằng nhau nên thể tích của chúng bằng nhau nhé!";
    const solution = "Hình C gồm 6 hình lập phương nhỏ.<br>Hình D gồm 6 hình lập phương nhỏ.<br>Vì cả hai hình đều gồm 6 hình lập phương nhỏ bằng nhau nên thể tích hình C bằng thể tích hình D.<br>Đáp án đúng: B. Thể tích hình C bằng thể tích hình D.";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('108_lt1', score, 'btn-check-108-lt1', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// LUYỆN TẬP 2: Tháo rời & xếp hình
// ==========================================
window.check_108_lt2 = () => {
    const vA = document.querySelector('input[name="108-lt2a"]:checked')?.value; // B
    const vLen = cleanString(document.getElementById('108-lt2b-len')?.value); // 8
    const vWid = cleanString(document.getElementById('108-lt2b-wid')?.value); // 1
    const vHei = cleanString(document.getElementById('108-lt2b-hei')?.value); // 1

    const isCorrect = (vA === 'B') && (vLen === '8') && (vWid === '1') && (vHei === '1');

    const rightAnswer = "a) B. Bằng tổng thể tích A và B; b) Dài: 8 cm, Rộng: 1 cm, Cao: 1 cm";
    const studentAnswer = `a) ${vA ? 'Đáp án ' + vA : 'Chưa chọn'}; b) Dài: ${vLen || '?'} cm, Rộng: ${vWid || '?'} cm, Cao: ${vHei || '?'} cm`;

    const guidance = "• Câu a: Em hãy đếm số lượng khối lập phương nhỏ ở mỗi hình A và B, sau đó so sánh tổng số khối của hình A và B với hình ban đầu.<br>• Câu b: Khi xếp tất cả các khối lập phương nhỏ thành 1 hàng ngang, em hãy tính chiều dài của hình hộp chữ nhật mới tạo thành (bằng cạnh của khối nhỏ nhân với tổng số khối) nhé!";
    const solution = "a) Hình lập phương ban đầu gồm 8 hình lập phương nhỏ. Hình A gồm 6 hình lập phương nhỏ, hình B gồm 2 hình lập phương nhỏ. Tổng số hình lập phương nhỏ của hình A và B là: 6 + 2 = 8 (hình).<br>Do đó thể tích hình lập phương ban đầu bằng tổng thể tích các hình A và B. (Chọn đáp án B)<br><br>b) Khi xếp 8 hình lập phương nhỏ cạnh 1 cm nối tiếp nhau thành 1 hàng ngang, ta được hình hộp chữ nhật có:<br>• Chiều dài: 8 cm<br>• Chiều rộng: 1 cm<br>• Chiều cao: 1 cm";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('108_lt2', score, 'btn-check-108-lt2', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// HỖ TRỢ PHÓNG TO HÌNH ẢNH CHO TIẾT 108
// ==========================================
window.zoomImage108 = (src, alt) => {
    let modal = document.getElementById('image-zoom-modal-108');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-zoom-modal-108';
        modal.className = 'fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300';
        modal.innerHTML = `
            <div class="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl p-3 shadow-2xl border-4 border-white animate-in zoom-in-95 duration-300 pointer-events-auto">
                <img id="zoom-modal-img-108" src="" alt="" class="max-w-[85vw] max-h-[80vh] object-contain rounded-2xl">
                <p id="zoom-modal-caption-108" class="text-center font-bold text-slate-700 mt-3 text-lg md:text-xl"></p>
                <button onclick="document.getElementById('image-zoom-modal-108').remove()" class="absolute -top-4 -right-4 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-white hover:bg-red-600 transition-colors cursor-pointer" title="Đóng">✕</button>
            </div>
        `;
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        };
        document.body.appendChild(modal);
    }
    document.getElementById('zoom-modal-img-108').src = src;
    document.getElementById('zoom-modal-caption-108').innerText = alt;
};
