// ===================================================================
// Tiết 107 - Bài 44: Luyện tập chung (tiết 2)
// LOGIC: Chấm điểm bài giải bằng nút E và phản hồi showMathFeedback
// ===================================================================

const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().replace(/\s+/g, '').replace(/,/g, '.');
};

// ==========================================
// BÀI 1: Tính tỉ số phần trăm của hai số
// ==========================================
window.check_107_1 = () => {
    const vA = cleanString(document.getElementById('107-1-a')?.value); // 70
    const vB = cleanString(document.getElementById('107-1-b')?.value); // 84

    const isCorrect = (vA === '70') && (vB === '84');

    const rightAnswer = "a) 70%; b) 84%";
    const studentAnswer = `a) ${vA || '?'}%; b) ${vB || '?'}%`;

    const guidance = "Để tính tỉ số phần trăm của hai số, em thực hiện các bước sau:<br>1. Tìm thương của hai số đó (chia số thứ nhất cho số thứ hai).<br>2. Nhân thương đó với 100 rồi viết thêm kí hiệu % vào bên phải kết quả tìm được nhé!";
    const solution = "a) Tỉ số phần trăm của 49 và 70 là:<br>49 : 70 = 0,7 = 70%<br><br>b) Tỉ số phần trăm của 37,8 và 45 là:<br>37,8 : 45 = 0,84 = 84%<br>Chúc mừng em đã làm đúng!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('107_1', score, 'btn-check-107-1', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 2: Tìm giá trị phần trăm của một số
// ==========================================
window.check_107_2 = () => {
    const vA = cleanString(document.getElementById('107-2-a')?.value); // 6
    const vB = cleanString(document.getElementById('107-2-b')?.value); // 18
    const vC = cleanString(document.getElementById('107-2-c')?.value); // 5
    const vD = cleanString(document.getElementById('107-2-d')?.value); // 22

    const isCorrect = (vA === '6') && (vB === '18') && (vC === '5') && (vD === '22');

    const rightAnswer = "a) 6; b) 18; c) 5; d) 22";
    const studentAnswer = `a) ${vA || '?'}; b) ${vB || '?'}; c) ${vC || '?'}; d) ${vD || '?'}`;

    const guidance = "Muốn tìm giá trị phần trăm của một số, em lấy số đó nhân với số phần trăm cần tìm rồi chia cho 100 (hoặc lấy số đó chia cho 100 rồi nhân với số phần trăm nhé)!";
    const solution = "a) 10% của 60 là: 60 × 10 : 100 = 6<br>b) 50% của 36 là: 36 × 50 : 100 = 18<br>c) 2% của 250 là: 250 × 2 : 100 = 5<br>d) 11% của 200 là: 200 × 11 : 100 = 22<br>Chúc mừng em đã tính rất xuất sắc!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('107_2', score, 'btn-check-107-2', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 3: Bài toán thu hoạch táo
// ==========================================
window.check_107_3 = () => {
    const vA = cleanString(document.getElementById('107-3-a')?.value); // 5
    const vB = cleanString(document.getElementById('107-3-b')?.value); // 76

    const isCorrect = (vA === '5') && (vB === '76');

    const rightAnswer = "a) 5%; b) 76 kg";
    const studentAnswer = `a) ${vA || '?'}%; b) ${vB || '?'} kg`;

    const guidance = "• Câu a: Để tìm tỉ lệ táo bị sâu, em chia khối lượng táo bị sâu cho tổng khối lượng táo rồi viết dưới dạng tỉ số phần trăm.<br>• Câu b: Em hãy tính khối lượng táo không bị sâu bằng cách lấy tổng khối lượng của thùng táo (80 kg) trừ đi khối lượng táo bị sâu của thùng đó nhé!";
    const solution = "a) Tỉ lệ táo bị sâu là:<br>1,5 : 30 = 0,05 = 5%<br><br>b) Tỉ lệ táo không bị sâu là:<br>100% − 5% = 95%<br>Số ki-lô-gam táo không bị sâu trong thùng 80 kg là:<br>80 × 95% = 76 (kg)<br>Đáp số: a) 5%; b) 76 kg.";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('107_3', score, 'btn-check-107-3', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 4: Tính số kẹo của Mai và Mi
// ==========================================
window.check_107_4 = () => {
    const vMi = cleanString(document.getElementById('107-4-mi')?.value); // 10
    const vMai = cleanString(document.getElementById('107-4-mai')?.value); // 4

    const isCorrect = (vMi === '10') && (vMai === '4');

    const rightAnswer = "Mi: 10 cái kẹo; Mai: 4 cái kẹo";
    const studentAnswer = `Mi: ${vMi || '?'} cái; Mai: ${vMai || '?'} cái`;

    const guidance = "Đây là bài toán Tìm hai số khi biết Hiệu và Tỉ số. Em hãy tính theo các bước:<br>1. Tìm hiệu số phần bằng nhau.<br>2. Tìm số kẹo của Mi và Mai bằng cách lấy hiệu số kẹo chia cho hiệu số phần rồi nhân với số phần tương ứng của mỗi người nhé!";
    const solution = "Tỉ số số kẹo của Mi (em) và Mai (chị) là 5/2.<br>Hiệu số phần bằng nhau là:<br>5 − 2 = 3 (phần)<br><br>Số kẹo của Mi (em) là:<br>6 : 3 × 5 = 10 (cái kẹo)<br><br>Số kẹo của Mai (chị) là:<br>10 − 6 = 4 (cái kẹo)<br>Đáp số: Mi: 10 cái kẹo; Mai: 4 cái kẹo.";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('107_4', score, 'btn-check-107-4', 1, 1, isCorrect ? 1 : 0);
};
