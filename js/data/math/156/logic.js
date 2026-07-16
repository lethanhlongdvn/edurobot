// --- Logic Functions ---
window.check_156_1 = () => {
    const v = (id) => document.getElementById(id).value.trim().replace(/\s/g, '').replace(',', '.');
    let score = 0;
    if (v('156-1-1') === '619396') score++;
    if (v('156-1-2') === '336492') score++;
    if (v('156-1-3') === '157.84') score++;
    if (v('156-1-4') === '31.79') score++;
    if (v('156-1-5n') === '41' && v('156-1-5d') === '35') score++;
    if (v('156-1-6n') === '5' && v('156-1-6d') === '18') score++;

    const total = 6;
    const isCorrect = score === total;
    const rightAnswer = "a) 619 396; 336 492; b) 157,84; 31,79; c) 41/35; 5/18";
    const guidance = "Em hãy thực hiện phép tính cộng, trừ các số tự nhiên, số thập phân và phân số. Lưu ý quy đồng mẫu số khi cộng, trừ các phân số khác mẫu số.";
    const solution = "Thật tuyệt vời! Con đã thực hiện các phép tính rất chính xác.\n\nLời giải chi tiết:\n- a) 286 315 + 333 081 = 619 396; 815 407 - 478 915 = 336 492.\n- b) 79,65 + 78,19 = 157,84; 136,75 - 104,96 = 31,79.\n- c) 4/5 + 13/35 = 28/35 + 13/35 = 41/35; 1/2 - 2/9 = 9/18 - 4/18 = 5/18.";

    window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Tính", Math.round(score / total * 100), "btn-check-156-1", 0, total, score);
};

window.reset156_1 = () => {
    ['1-1', '1-2', '1-3', '1-4', '1-5n', '1-5d', '1-6n', '1-6d'].forEach(id => {
        const el = document.getElementById('156-' + id);
        if (el) el.value = '';
    });
};

window.check_156_2 = () => {
    const v = (id) => document.getElementById(id).value.trim().toLowerCase();
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
    const rightAnswer = "a) 0, 0, 0, a; b) b, c, a";
    const guidance = "Em hãy nhớ lại các tính chất cộng với số 0, tính chất giao hoán (a + b = b + a) và tính chất kết hợp (a + b) + c = a + (b + c).";
    const solution = "Thật giỏi! Con đã nắm vững các tính chất của phép cộng.\n\nGiải thích:\n- Số nào cộng với 0 cũng bằng chính nó (a + 0 = a).\n- Khi đổi chỗ các số hạng trong một tổng thì tổng không thay đổi (tính chất giao hoán).\n- Khi cộng một tổng hai số với một số thứ ba, ta có thể cộng số thứ nhất với tổng của số thứ hai và số thứ ba (tính chất kết hợp).";

    window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Tìm số hoặc chữ", Math.round(score / total * 100), "btn-check-156-2", 0, total, score);
};

window.check_156_3 = () => {
    const v = (id) => document.getElementById(id).value.trim().replace(/\s/g, '').replace(',', '.');
    let score = 0;
    if (v('156-3-1') === '1486') score++;
    if (v('156-3-2') === '13.29') score++;
    if (v('156-3-3') === '697') score++;
    if (v('156-3-4') === '2') score++;

    const total = 4;
    const isCorrect = score === total;
    const rightAnswer = "a) 1486; b) 13,29; c) 697; d) 2";
    const guidance = "Em hãy tìm các nhóm số hạng có tổng là số tròn trăm, tròn chục hoặc bằng 1 để thực hiện phép tính nhanh hơn.";
    const solution = "Xuất sắc! Con đã biết cách sử dụng tính chất giao hoán và kết hợp để tính thuận tiện.\n\nLời giải chi tiết:\n- a) (689 + 311) + 486 = 1000 + 486 = 1486.\n- b) (6,37 + 3,63) + 3,29 = 10 + 3,29 = 13,29.\n- c) (345 + 352) + 0 = 697.\n- d) (1/2 + 1/2) + (3/4 + 1/4) = 1 + 1 = 2.";

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
    const solution = "Chúc mừng con đã giải đúng bài toán thực tế này!\n\nLời giải chi tiết:\nChiếc gậy AB dài là:\n0,8 + 0,8 - 0,15 = 1,45 (m)\nĐáp số: 1,45 m.";

    window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Giải bài toán", Math.round(score / total * 100), "btn-check-156-4", 0, total, score);
};