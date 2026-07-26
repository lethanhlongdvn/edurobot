// ===================================================================
// Tiết 113 - Luyện tập chung (Tiết 1)
// LOGIC: Chấm điểm bài giải bằng nút E và phản hồi showMathFeedback
// ===================================================================

const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().toLowerCase().replace(/\s+/g, ' ').replace(/,/g, '.');
};

// ==========================================
// BÀI 1: Đọc và viết số đo thể tích
// ==========================================
window.check_113_1 = () => {
    const v1 = cleanString(document.getElementById('ans-113-1-1')?.value);
    const v2 = cleanString(document.getElementById('ans-113-1-2')?.value);
    const v3 = cleanString(document.getElementById('ans-113-1-3')?.value);
    const v4 = cleanString(document.getElementById('ans-113-1-4')?.value);
    
    const ok1 = v1 === "100.05";
    const ok2 = v2.includes('không phẩy không một năm') || v2.includes('không phẩy không mười lăm') || v2.includes('không phẩy không 15');
    const ok3 = v3 === "821";
    const ok4 = v4.includes('một trăm phẩy hai') || v4.includes('một trăm phẩy 2') || v4.includes('một trăm phẩy hai xăng ti mét khối');
    
    const correctCount = [ok1, ok2, ok3, ok4].filter(v => v).length;
    const isCorrect = correctCount === 4;
    
    const rightAnswer = "a) 100,05; b) Không phẩy không một năm mét khối; c) 821; d) Một trăm phẩy hai xăng-ti-mét khối";
    const studentAnswer = `a) ${v1 || '?'}; b) ${v2 || '?'}; c) ${v3 || '?'}; d) ${v4 || '?'}`;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, 
        "Hãy đọc/viết số theo đúng quy tắc từ trái sang phải nhé!",
        `<div class="space-y-4 text-left">
            <p class="text-emerald-700 font-bold text-2xl">Chúc mừng! Em đã hoàn thành bảng rất chính xác.</p>
            <div class="bg-blue-50 p-6 rounded-2xl space-y-2 text-xl italic font-bold">
                <p>• a) Một trăm phẩy không năm mét khối: <b>100,05 m³</b></p>
                <p>• b) 0,015 m³: <b>Không phẩy không một năm mét khối</b></p>
                <p>• c) Tám trăm hai mươi mốt đề-xi-mét khối: <b>821 dm³</b></p>
                <p>• d) 100,2 cm³: <b>Một trăm phẩy hai xăng-ti-mét khối</b></p>
            </div>
        </div>`
    );
    window.submitMathLesson("Tiết 113 - Bài 1", isCorrect ? 100 : correctCount*25, "ans-113-1-1", 0, 4, correctCount);
};

// ==========================================
// BÀI 2: Ước lượng thể tích
// ==========================================
window.check_113_2 = () => {
    const val = document.getElementById('ans-113-2')?.value;
    const isCorrect = val === 'C';
    window.showMathFeedback(isCorrect, "C", val, "Hãy so sánh kích thước khối băng với cơ thể người trong ảnh nhé!", 
        `<div class="space-y-4 text-left">
            <p class="text-emerald-700 font-bold text-2xl">Đúng rồi! Khối băng lớn này tương đương một khối lập phương cạnh 1m.</p>
            <p class="text-xl font-bold">Đáp án: <b>C. 1 m³</b></p>
        </div>`
    );
    window.submitMathLesson("Tiết 113 - Bài 2", isCorrect ? 100 : 0, "ans-113-2", 0, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 3: Tính thể tích hình khối
// ==========================================
window.check_113_3 = () => {
    const val = cleanString(document.getElementById('ans-113-3')?.value);
    const isCorrect = parseInt(val) === 44;
    window.showMathFeedback(isCorrect, "44", val, "Em hãy đếm số khối ở mỗi lớp hoặc đếm phần còn thiếu của một khối lớn nhé!", 
        `<div class="space-y-4 text-left">
            <p class="text-emerald-700 font-bold text-2xl">Chính xác! Có tổng cộng 44 khối lập phương nhỏ.</p>
            <p class="text-xl font-bold">Thể tích: <b>44 cm³</b></p>
        </div>`
    );
    window.submitMathLesson("Tiết 113 - Bài 3", isCorrect ? 100 : 0, "ans-113-3", 0, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 4: Đổi đơn vị đo thể tích
// ==========================================
window.check_113_4 = () => {
    const v1 = cleanString(document.getElementById('ans-113-4-1')?.value);
    const v2 = cleanString(document.getElementById('ans-113-4-2')?.value);
    const v3 = cleanString(document.getElementById('ans-113-4-3')?.value);
    const v4 = cleanString(document.getElementById('ans-113-4-4')?.value);
    
    const ok1 = parseFloat(v1) === 5000;
    const ok2 = parseFloat(v2) === 0.48;
    const ok3 = parseFloat(v3) === 250000;
    const ok4 = parseFloat(v4) === 0.005;
    
    const correctCount = [ok1, ok2, ok3, ok4].filter(v => v).length;
    const isCorrect = correctCount === 4;
    
    const rightAnswer = "a) 5000; b) 0,48; c) 250 000; d) 0,005";
    const studentAnswer = `a) ${v1 || '?'}; b) ${v2 || '?'}; c) ${v3 || '?'}; d) ${v4 || '?'}`;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, 
        "Hãy ghi nhớ: m³ → (1000) → dm³ → (1000) → cm³.",
        `<div class="space-y-4 text-left">
            <p class="text-emerald-700 font-bold text-2xl">Rất giỏi! Em đã làm chủ việc đổi đơn vị đo thể tích.</p>
            <div class="bg-blue-50 p-6 rounded-2xl space-y-2 text-xl italic font-bold">
                <p>• 5 m³ = 5 × 1 000 = <b>5 000 dm³</b></p>
                <p>• 480 dm³ = 480 : 1 000 = <b>0,48 m³</b></p>
                <p>• 0,25 m³ = 0,25 × 1 000 000 = <b>250 000 cm³</b></p>
                <p>• 5 000 cm³ = 5 000 : 1 000 000 = <b>0,005 m³</b></p>
            </div>
        </div>`
    );
    window.submitMathLesson("Tiết 113 - Bài 4", isCorrect ? 100 : correctCount*25, "ans-113-4-1", 0, 4, correctCount);
};
