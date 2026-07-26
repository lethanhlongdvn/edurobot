// --- Logic Functions for Tiết 157 (SGK Trang 108) ---

window.reset157_1 = function () {
    ['157-1-1', '157-1-1-t1', '157-1-1-t3', '157-1-2', '157-1-2-t1', '157-1-2-t3', '157-1-3-n', '157-1-3-d', '157-1-3-tn', '157-1-3-td'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.value = '';
            el.classList.remove('bg-green-100', 'bg-red-100', 'border-green-500', 'border-red-500');
        }
    });
};

window.check_157_1 = function () {
    const results = [
        { id: '157-1-1', ans: ['18176', '18 176'] },
        { id: '157-1-1-t1', ans: ['18176', '18 176'] },
        { id: '157-1-1-t3', ans: ['8549', '8 549'] },
        { id: '157-1-2', ans: ['6,31', '6.31'] },
        { id: '157-1-2-t1', ans: ['6,31', '6.31'] },
        { id: '157-1-2-t3', ans: ['35,71', '35.71'] },
        { id: '157-1-3-n', ans: ['17'] },
        { id: '157-1-3-d', ans: ['36'] },
        { id: '157-1-3-tn', ans: ['11'] },
        { id: '157-1-3-td', ans: ['9'] }
    ];

    let correct = 0;
    results.forEach(r => {
        const el = document.getElementById(r.id);
        if (el && r.ans.includes(el.value.trim().replace(/\s/g, ''))) {
            el.classList.add('bg-green-100', 'border-green-500');
            el.classList.remove('bg-red-100', 'border-red-500');
            correct++;
        } else if (el) {
            el.classList.add('bg-red-100', 'border-red-500');
            el.classList.remove('bg-green-100', 'border-green-500');
        }
    });

    const isCorrect = correct === results.length;
    const rightAnswer = "a) 18 176 (Thử lại: 18 176 - 9 627 = 8 549)<br>b) 6,31 (Thử lại: 6,31 + 29,4 = 35,71)<br>c) 17/36 (Thử lại: 17/36 + 3/4 = 11/9)";
    const guidance = "Muốn thử lại phép cộng, lấy tổng trừ đi một số hạng. Muốn thử lại phép trừ, lấy hiệu cộng với số trừ.";
    const solution = "Thật tuyệt vời! Em đã tính và thử lại rất chính xác.<br><br>Lời giải chi tiết:<br>a) 8 549 + 9 627 = 18 176. Thử lại: 18 176 - 9 627 = 8 549.<br>b) 35,71 - 29,4 = 6,31. Thử lại: 6,31 + 29,4 = 35,71.<br>c) 11/9 - 3/4 = 44/36 - 27/36 = 17/36. Thử lại: 17/36 + 27/36 = 44/36 = 11/9.";

    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    }

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 157 - Bài 1", Math.round(correct / results.length * 100), "btn-check-157-1", 0, results.length, correct);
    }
};

window.check_157_2 = function () {
    const v1 = document.getElementById('157-2-1') ? document.getElementById('157-2-1').value.trim().replace(',', '.') : '';
    const v2n = document.getElementById('157-2-2-n') ? document.getElementById('157-2-2-n').value.trim() : '';
    const v2d = document.getElementById('157-2-2-d') ? document.getElementById('157-2-2-d').value.trim() : '';

    let score = 0;
    if (v1 === '55.5' || v1 === '55,5') score++;
    if (v2n === '1' && v2d === 'token') score++; // Let's calculate: 13/18 + (14/12 - 7/12 - 3/12) = 13/18 + 4/12 = 13/18 + 1/3 = 13/18 + 6/18 = 19/18
    if (v2n === '19' && v2d === '18') score++;

    const isCorrect = (v1 === '55.5' || v1 === '55,5') && (v2n === '19' && v2d === '18');
    const rightAnswer = "a) 55,5<br>b) 19/18";
    const guidance = "Thực hiện phép tính trong ngoặc trước, ngoài ngoặc sau. Quy đồng mẫu số phân số cẩn thận.";
    const solution = "Chúc mừng em đã tính giá trị biểu thức rất giỏi!<br><br>Lời giải chi tiết:<br>a) 175 - (59,3 + 35,7) - 24,5 = 175 - 95 - 24,5 = 80 - 24,5 = 55,5<br>b) 13/18 + (7/6 - 7/12 - 1/4) = 13/18 + (14/12 - 7/12 - 3/12) = 13/18 + 4/12 = 13/18 + 6/18 = 19/18.";

    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    }

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 157 - Bài 2", isCorrect ? 100 : 0, "btn-check-157-2", 0, 2, isCorrect ? 2 : 0);
    }
};

window.check_157_3 = function () {
    const v1 = document.getElementById('157-3-1') ? document.getElementById('157-3-1').value.trim().replace(/\s/g, '') : '';
    const v2 = document.getElementById('157-3-2') ? document.getElementById('157-3-2').value.trim().replace(/\s/g, '') : '';
    const v3 = document.getElementById('157-3-3') ? document.getElementById('157-3-3').value.trim().replace(/\s/g, '') : '';

    // a) Ti vi + Loa = 13,6tr, Ti vi - Loa = 4,2tr => Ti vi = (13,6tr + 4,2tr)/2 = 8,9tr (8 900 000 đ)
    # c) Loa = 8,9tr - 4,2tr = 4,7tr (4 700 000 đ)
    # b) Tủ kệ = 17,1tr - 13,6tr = 3,5tr (3 500 000 đ)

    let score = 0;
    if (v1 === '8900000') score++;
    if (v2 === '3500000') score++;
    if (v3 === '4700000') score++;

    const isCorrect = score === 3;
    const rightAnswer = "a) Giá ti vi: 8 900 000 đồng<br>b) Giá tủ kệ ti vi: 3 500 000 đồng<br>c) Giá bộ loa: 4 700 000 đồng";
    const guidance = "Tìm giá tiền tủ kệ bằng cách lấy tổng số tiền trừ đi số tiền mua ti vi và loa. Ti vi và loa là bài toán Tìm hai số khi biết tổng và hiệu.";
    const solution = "Rất xuất sắc! Em đã giúp chú Tư tính chính xác giá tiền từng món đồ nội thất.<br><br>Lời giải chi tiết:<br>b) Giá tiền tủ kệ ti vi là:<br>17 100 000 - 13 600 000 = 3 500 000 (đồng)<br>a) Giá tiền ti vi là:<br>(13 600 000 + 4 200 000) : 2 = 8 900 000 (đồng)<br>c) Giá tiền bộ loa thùng là:<br>8 900 000 - 4 200 000 = 4 700 000 (đồng).";

    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    }

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 157 - Bài 3", Math.round(score / 3 * 100), "btn-check-157-3", 0, 3, score);
    }
};

window.check_157_4 = function () {
    const n = document.getElementById('157-4-n') ? document.getElementById('157-4-n').value.trim() : '';
    const d = document.getElementById('157-4-d') ? document.getElementById('157-4-d').value.trim() : '';

    // Mai ăn 1/8, Bố ăn 1/4 (2/8) => Đã ăn 3/8 => Còn lại 1 - 3/8 = 5/8
    const isNCorrect = (n === '5');
    const isDCorrect = (d === '8');
    const isCorrect = isNCorrect && isDCorrect;

    const rightAnswer = "5/8 cái bánh chưng";
    const guidance = "Em hãy tính tổng phần bánh chưng Mai và Bố đã ăn, sau đó lấy 1 (cái bánh) trừ đi tổng đó.";
    const solution = "Tuyệt vời! Em đã giải chính xác bài toán về phân số.<br><br>Lời giải chi tiết:<br>Cả Mai và bố ăn số phần bánh chưng là:<br>1/8 + 1/4 = 1/8 + 2/8 = 3/8 (cái bánh chưng)<br>Số phần bánh chưng còn lại chưa ăn là:<br>1 - 3/8 = 5/8 (cái bánh chưng)<br>Đáp số: 5/8 cái bánh chưng.";

    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    }

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 157 - Bài 4", isCorrect ? 100 : 0, "btn-check-157-4", 0, 1, isCorrect ? 1 : 0);
    }
};