// ===================================================================
// Tiết 102 - Bài 41: Tìm giá trị phần trăm của một số (tiết 2 - Luyện tập)
// LOGIC: Chấm điểm bài giải bằng nút E và phản hồi showMathFeedback
// ===================================================================

const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().replace(/\s+/g, '').replace(/,/g, '.');
};

// Toggle hiển thị bài giải chi tiết
window.toggleSolution102 = (id) => {
    const el = document.getElementById(`solution-102-${id}`);
    if (el) {
        el.classList.toggle('hidden');
    }
};

// ==========================================
// BÀI 1: Tính số gam đạm trong thực phẩm
// ==========================================
window.check_102_1 = () => {
    const v1 = cleanString(document.getElementById('102-1-1')?.value); // 45
    const v2 = cleanString(document.getElementById('102-1-2')?.value); // 34
    const v3 = cleanString(document.getElementById('102-1-3')?.value); // 57

    const isCorrect = (v1 === '45') && (v2 === '34') && (v3 === '57');

    const rightAnswer = "a) 45 g đạm; b) 34 g đạm; c) 57 g đạm";
    const studentAnswer = `a) ${v1 || '?'} g; b) ${v2 || '?'} g; c) ${v3 || '?'} g`;

    const guidance = "Muốn tính số gam đạm trong mỗi loại thực phẩm, em lấy khối lượng thực phẩm đó nhân với tỉ lệ phần trăm đạm rồi chia cho 100 nhé!<br>Hãy thực hiện lại các phép tính thật cẩn thận.";
    const solution = "a) Số gam đạm trong 250 g thịt bò là:<br>250 × 18 : 100 = 45 (g)<br><br>b) Số gam đạm trong 200 g cá chép là:<br>200 × 17 : 100 = 34 (g)<br><br>c) Số gam đạm trong 300 g thịt lợn nạc là:<br>300 × 19 : 100 = 57 (g)<br><br>Thầy khen em làm bài rất chính xác!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('102_1', score, 'btn-check-102-1', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 2: Đội đồng diễn thể dục (Áo xanh)
// ==========================================
window.check_102_2 = () => {
    const v1 = cleanString(document.getElementById('102-2-1')?.value); // 105

    const isCorrect = (v1 === '105');

    const rightAnswer = "105 người";
    const studentAnswer = `${v1 || '?'} người`;

    const guidance = "Em có thể tính tỉ số phần trăm người mặc áo xanh bằng cách lấy 100% trừ đi phần trăm áo đỏ và phần trăm áo vàng, hoặc tính số người mặc áo đỏ và áo vàng rồi lấy tổng số người trừ đi nhé!";
    const solution = "Cách 1:<br>Tỉ số phần trăm người mặc áo xanh là:<br>100% - 40% - 25% = 35%<br>Số người mặc áo xanh là:<br>300 × 35 : 100 = 105 (người)<br><br>Cách 2:<br>Số người mặc áo đỏ là: 300 × 40 : 100 = 120 (người)<br>Số người mặc áo vàng là: 300 × 25 : 100 = 75 (người)<br>Số người mặc áo xanh là: 300 - (120 + 75) = 105 (người)<br><br>Đáp số: 105 người.<br>Chúc mừng em giải đúng!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('102_2', score, 'btn-check-102-2', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 3: Lãi suất tiết kiệm ngân hàng
// ==========================================
window.check_102_3 = () => {
    const v1 = cleanString(document.getElementById('102-3-1')?.value); // 2590000
    const v2 = cleanString(document.getElementById('102-3-2')?.value); // 37590000

    const isCorrect = (v1 === '2590000') && (v2 === '37590000');

    const rightAnswer = "a) 2 590 000 đồng; b) 37 590 000 đồng";
    const studentAnswer = `a) ${v1 || '?'} đồng; b) ${v2 || '?'} đồng`;

    const guidance = "a) Số tiền lãi = Tiền gửi × 7,4 : 100.<br>b) Tổng tiền = Tiền gửi + Tiền lãi.<br>Em hãy tính lại cẩn thận các phép tính nhân số thập phân nhé!";
    const solution = "a) Sau một năm, số tiền lãi là:<br>35 000 000 × 7,4 : 100 = 2 590 000 (đồng)<br><br>b) Sau một năm, tổng số tiền gửi và tiền lãi là:<br>35 000 000 + 2 590 000 = 37 590 000 (đồng)<br><br>Đáp số: a) 2 590 000 đồng; b) 37 590 000 đồng.<br>Hoan hô em làm bài xuất sắc!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('102_3', score, 'btn-check-102-3', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 4: Kế hoạch may đồng phục
// ==========================================
window.check_102_4 = () => {
    const v1 = cleanString(document.getElementById('102-4-1')?.value); // 350

    const isCorrect = (v1 === '350');

    const rightAnswer = "350 bộ";
    const studentAnswer = `${v1 || '?'} bộ`;

    const guidance = "Coi số bộ chưa may là 100%, số bộ đã may là 70%. Tổng kế hoạch 850 bộ tương ứng với (70% + 100% = 170%) số bộ chưa may. Từ đó em tìm số bộ chưa may rồi tính số bộ đã may được nhé!";
    const solution = "Tỉ số phần trăm của tổng số bộ quần áo so với số bộ chưa may là:<br>70% + 100% = 170%<br><br>Số bộ quần áo chưa may là:<br>850 : 170 × 100 = 500 (bộ)<br><br>Số bộ quần áo tổ đã may được là:<br>850 - 500 = 350 (bộ)<br><br>Đáp số: 350 bộ quần áo đồng phục.<br>Thầy khen em có tư duy rất tốt!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('102_4', score, 'btn-check-102-4', 1, 1, isCorrect ? 1 : 0);
};
