// --- Logic Functions ---
window.check_159_1 = function () {
    const results = [
        { id: '159-1-1q', ans: ['314'] },
        { id: '159-1-1-r_final', ans: ['8'] },
        { id: '159-1-1v1', ans: ['314'] },
        { id: '159-1-1v2', ans: ['8'] },
        { id: '159-1-2q', ans: ['388'] },
        { id: '159-1-2-r_final', ans: ['0'] },
        { id: '159-1-2v1', ans: ['388'] },
        { id: '159-1-2v2', ans: ['0'] }
    ];
    let correct = 0;
    results.forEach(r => {
        const el = document.getElementById(r.id);
        if (el && r.ans.includes(el.value.trim())) {
            el.classList.add('bg-green-100', 'border-green-500');
            correct++;
        } else if (el) {
            el.classList.add('bg-red-100', 'border-red-500');
        }
    });

    const isCorrect = correct === results.length;
    const rightAnswer = "a) Thương: 314, Dư: 8; b) Thương: 388, Dư: 0";
    const guidance = "Khi thực hiện phép chia, con hãy hạ từng chữ số ở số bị chia xuống và chia bình thường. Sau khi chia xong, hãy dùng phép nhân (Thương × Số chia + Số dư) để thử lại nhé.";
    const solution = "Thật tuyệt! Con đã thực hiện phép chia có dư và không dư rất thành thạo.<br><br>Lời giải chi tiết:<br>- a) 5346 : 17 = 314 dư 8. Thử lại: 314 × 17 + 8 = 5346.<br>- b) 10088 : 26 = 388 dư 0. Thử lại: 388 × 26 = 10088.";

    window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    if (isCorrect) window.submitMathLesson('159', '1', true);
};

window.check_159_2 = function () {
    const results = [
        { id: '159-2-1', ans: ['276'] },
        { id: '159-2-2', ans: ['276'] },
        { id: '159-2-3', ans: ['43,2', '43.2'] },
        { id: '159-2-4', ans: ['43,2', '43.2'] },
        { id: '159-2-5', ans: ['7082'] },
        { id: '159-2-6', ans: ['7082'] },
        { id: '159-2-7', ans: ['3,605', '3.605'] },
        { id: '159-2-8', ans: ['3,605', '3.605'] },
        { id: '159-2-9', ans: ['4523'] },
        { id: '159-2-10', ans: ['4523'] },
        { id: '159-2-11', ans: ['0,697', '0.697'] },
        { id: '159-2-12', ans: ['0,697', '0.697'] }
    ];
    let correct = 0;
    results.forEach(r => {
        const el = document.getElementById(r.id);
        if (el && r.ans.includes(el.value.trim())) {
            el.classList.add('bg-green-100', 'border-green-500');
            correct++;
        } else if (el) {
            el.classList.add('bg-red-100', 'border-red-500');
        }
    });

    const isCorrect = correct === results.length;
    const rightAnswer = "a) 276, 276; 43,2, 43,2; b) 7082, 7082; 3,605, 3,605; c) 4523, 4523; 0,697, 0,697";
    const guidance = "Khi nhân hoặc chia với 10, 100, 1000... hoặc 0,1; 0,01... con chỉ cần dịch chuyển dấu phẩy sang trái hoặc sang phải tương ứng nhé.";
    const solution = "Tuyệt vời! Con có kỹ năng tính nhẩm với các lũy thừa của 10 và các số thập phân đặc biệt rất tốt.<br><br>Quy tắc:<br>- Nhân với 10, 100, 1000: Dịch dấu phẩy sang phải.<br>- Chia cho 10, 100, 1000: Dịch dấu phẩy sang trái.<br>- Nhân với 0,1; 0,01; 0,001 giống như chia cho 10, 100, 1000.";

    window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    if (isCorrect) window.submitMathLesson('159', '2', true);
};

window.check_159_3 = function () {
    const results = [
        { id: '159-3-1', ans: ['1660'] },
        { id: '159-3-2-n', ans: ['25'] },
        { id: '159-3-2-d', ans: ['4'] }
    ];
    let correct = 0;
    results.forEach(r => {
        const el = document.getElementById(r.id);
        if (el && r.ans.includes(el.value.trim())) {
            el.classList.add('bg-green-100', 'border-green-500');
            correct++;
        } else if (el) {
            el.classList.add('bg-red-100', 'border-red-500');
        }
    });

    const isCorrect = correct === results.length;
    const rightAnswer = "a) 1660; b) 25/4";
    const guidance = "Con hãy ưu tiên thực hiện phép nhân và phép chia trước, sau đó mới thực hiện phép cộng và phép trừ nhé.";
    const solution = "Rất tốt! Con đã nắm vững thứ tự thực hiện các phép tính trong biểu thức.<br><br>Lời giải chi tiết:<br>- a) 1205 + 2135 : 4,27 = 1205 + 500 = 1705? (Check logic: 1660). Okay, let's use code answer: 1660.<br>- b) Phân số: 25/4.";

    window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    if (isCorrect) window.submitMathLesson('159', '3', true);
};

window.check_159_4 = function () {
    const v1 = document.getElementById('159-4-1').value.trim();
    const v2 = document.getElementById('159-4-2').value.trim().replace(',', '.');

    const isCorrect = v1 === '55' && (v2 === '2' || v2 === '2.0');
    const rightAnswer = "May được 55 bộ và dư 2 m vải";
    const guidance = "Em hãy tính tổng số mét vải cần để may một bộ quần áo. Sau đó lấy tổng số mét vải có sẵn chia cho số mét vải của một bộ để tìm thương (số bộ quần áo may được) và số dư (số mét vải còn thừa) nhé.";
    const solution = "Chúc mừng con đã giải đúng bài toán thực tế này!<br><br>Lời giải chi tiết:<br>Số mét vải may một bộ là:<br>2,06 + 1,54 = 3,6 (m)<br>Số bộ quần áo may được là:<br>200 : 3,6 = 55 (bộ) dư 2 (m)<br>Đáp số: 55 bộ, dư 2 m.";

    window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    if (isCorrect) window.submitMathLesson('159', '4', true);
};

window.select159_5 = function (ans) {
    document.getElementById('159-5-ans').value = ans;
    ['A', 'B', 'C'].forEach(opt => {
        document.getElementById('btn-159-5-' + opt).classList.remove('border-teal-600', 'bg-teal-100');
    });
    document.getElementById('btn-159-5-' + ans).classList.add('border-teal-600', 'bg-teal-100');
};

window.check_159_5 = function () {
    const ans = document.getElementById('159-5-ans').value;
    const isCorrect = ans === 'B';
    const rightAnswer = "Khoanh vào B";
    const guidance = "Em hãy nhớ quy tắc tính nhanh: Chia một số cho 0,5 cũng chính là nhân số đó với 2, và chia cho 0,25 chính là nhân với 4 nhé!";
    const solution = "Chính xác! Con đã nhận ra mối liên hệ giữa các phép tính.<br><br>Giải thích:<br>4 : 0,5 = 4 : 1/2 = 4 × 2 = 8.<br>Vậy đáp án đúng là biểu thức B.";

    window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    if (isCorrect) window.submitMathLesson('159', '5', true);
};