// --- Logic Functions for Tiết 156 (SGK Trang 107) ---

window.check_156_1 = () => {
    const v = (id) => document.getElementById(id) ? document.getElementById(id).value.trim().replace(/\s/g, '').replace(',', '.') : '';
    let score = 0;
    if (v('156-1-1') === '619396') score++;
    if (v('156-1-2') === '336492') score++;
    if (v('156-1-3') === '157.84') score++;
    if (v('156-1-4') === '31.79') score++;
    if (v('156-1-5n') === '41' && v('156-1-5d') === '35') score++;
    if (v('156-1-6n') === '5' && v('156-1-6d') === '18') score++;

    const total = 6;
    const isCorrect = score === total;
    const rightAnswer = "a) 619 396; 336 492<br>b) 157,84; 31,79<br>c) 41/35; 5/18";
    const guidance = "Em hãy thực hiện đặt tính và tính cẩn thận từ phải sang trái đối với số tự nhiên và số thập phân (thẳng hàng dấu phẩy), quy đồng mẫu số đối với phân số.";
    const solution = "Chúc mừng em đã hoàn thành tính toán rất xuất sắc!<br><br>Lời giải chi tiết:<br>a) 536 817 + 82 579 = 619 396<br>981 759 - 645 267 = 336 492<br>b) 64,38 + 93,46 = 157,84<br>86,09 - 54,3 = 31,79<br>c) 4/7 + 3/5 = 20/35 + 21/35 = 41/35<br>10/9 - 5/6 = 20/18 - 15/18 = 5/18.";

    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    }

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 156 - Bài 1", Math.round(score / total * 100), "btn-check-156-1", 0, total, score);
    }
};

window.check_156_2 = () => {
    const v = (id) => document.getElementById(id) ? document.getElementById(id).value.trim().toLowerCase() : '';
    let score = 0;
    if (v('156-2-1') === '0') score++;
    if (v('156-2-2') === '0') score++;
    if (v('156-2-3') === '0') score++;
    if (v('156-2-4') === 'a') score++;
    if (v('156-2-5') === 'b') score++;
    if (v('156-2-6') === 'c') score++;
    if (v('156-2-7') === 'a') score++;

    const total = 7;
    const isCorrect = score === total;
    const rightAnswer = "a) a + 0 = a = 0 + a; a - 0 = a; a - a = 0<br>b) a + b = b + a; (a + b) + c = a + (b + c) = a + (b + c)";
    const guidance = "Em hãy nhớ lại các tính chất cơ bản của phép cộng và phép trừ (cộng với 0, giao hoán, kết hợp).";
    const solution = "Rất giỏi! Em đã điền đúng các số và chữ thích hợp vào chỗ trống.<br><br>Lời giải chi tiết:<br>a) a + 0 = a = 0 + a<br>a - 0 = a<br>a - a = 0<br>b) a + b = b + a<br>(a + b) + c = a + (b + c)<br>(a + b) + c = a + (b + c).";

    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    }

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 156 - Bài 2", Math.round(score / total * 100), "btn-check-156-2", 0, total, score);
    }
};

window.check_156_3 = () => {
    const v = (id) => document.getElementById(id) ? document.getElementById(id).value.trim().replace(',', '.') : '';
    let score = 0;
    if (v('156-3-1') === '1486') score++;
    if (v('156-3-2') === '13.29' || v('156-3-2') === '13,29') score++;
    if (v('156-3-3') === '697') score++;
    if (v('156-3-4') === '2') score++;

    const total = 4;
    const isCorrect = score === total;
    const rightAnswer = "a) 1486; b) 13,29; c) 697; d) 2";
    const guidance = "Em hãy tìm các nhóm số hạng có tổng là số tròn trăm, tròn chục hoặc bằng 1 để thực hiện phép tính nhanh hơn.";
    const solution = "Xuất sắc! Con đã biết cách sử dụng tính chất giao hoán và kết hợp để tính thuận tiện.<br><br>Lời giải chi tiết:<br>- a) (689 + 311) + 486 = 1000 + 486 = 1486.<br>- b) (6,37 + 3,63) + 3,29 = 10 + 3,29 = 13,29.<br>- c) (345 + 352) + 0 = 697.<br>- d) (1/2 + 1/2) + (3/4 + 1/4) = 1 + 1 = 2.";

    window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Tính thuận tiện", Math.round(score / total * 100), "btn-check-156-3", 0, total, score);
};

window.check_156_4 = () => {
    const v = (id) => document.getElementById(id).value.trim().replace(',', '.');
    let score = 0;
    if (v('156-4-1') === '1.45') score++;

    const total = 1;
    const isCorrect = score === total;
    const rightAnswer = "1,45 m";
    const guidance = "Em hãy tính tổng độ dài của hai chiếc gậy, sau đó trừ đi phần chồng lên nhau để tìm ra độ dài của chiếc gậy mới nhé.";
    const solution = "Chúc mừng con đã giải đúng bài toán thực tế này!<br><br>Lời giải chi tiết:<br>Chiếc gậy AB dài là:<br>0,8 + 0,8 - 0,15 = 1,45 (m)<br>Đáp số: 1,45 m.";

    window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Giải bài toán", Math.round(score / total * 100), "btn-check-156-4", 0, total, score);
};