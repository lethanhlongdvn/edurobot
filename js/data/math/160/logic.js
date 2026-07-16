// --- Logic Functions ---
window.select160_1 = function (ans) {
    document.getElementById('160-1-ans').value = ans;
    ['A', 'B', 'C', 'D'].forEach(opt => {
        document.getElementById('btn-160-1-' + opt).classList.remove('border-blue-600', 'bg-blue-100');
    });
    document.getElementById('btn-160-1-' + ans).classList.add('border-blue-600', 'bg-blue-100');
};

window.check_160_1 = function () {
    const ans = document.getElementById('160-1-ans').value;
    const isCorrect = ans === 'C';
    const rightAnswer = "Đáp án C (13/19)";
    const guidance = "Đọc kỹ đề bài: Tìm tỉ số giữa số người 'lên rừng' và số người 'xuống biển'. Nhớ đổi từ ngữ sang con số tương ứng nhé.";
    const solution = "Chính xác! Tỉ số phản ánh đúng truyền thuyết Con Rồng Cháu Tiên.\n\nGiải thích:\nSố người lên rừng là 13, số người xuống biển là 19.\nTỉ số là 13 : 19 hay 13/19.";

    window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    if (isCorrect) window.submitMathLesson('160', '1', true);
};

window.check_160_2 = function () {
    const a = document.getElementById('160-2-1').value.trim();
    const b = document.getElementById('160-2-2').value.trim();
    const isCorrect = a === '70' && b === '56';
    const rightAnswer = "70 và 56";
    const guidance = "Đây là bài toán Tìm hai số khi biết Tổng (126) và Tỉ số (4/5). Con hãy tính tổng số phần bằng nhau trước nhé.";
    const solution = "Tuyệt vời! Con đã giải bài toán Tổng - Tỉ rất thành thạo.\n\nLời giải chi tiết:\n- Tổng số phần bằng nhau: 5 + 4 = 9 (phần).\n- Giá trị một phần: 126 : 9 = 14.\n- Số lớn: 14 × 5 = 70.\n- Số bé: 14 × 4 = 56.";

    window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    if (isCorrect) window.submitMathLesson('160', '2', true);
};

window.check_160_3 = function () {
    const l = document.getElementById('160-3-1').value.trim();
    const w = document.getElementById('160-3-2').value.trim();
    const isCorrect = l === '90' && w === '60';
    const rightAnswer = "Dài 90m, Rộng 60m";
    const guidance = "Lấy độ dài trên bản đồ (cm) nhân với tỉ lệ (3000) để ra độ dài thực tế (cm), sau đó đổi kết quả sang mét nhé.";
    const solution = "Chính xác! Con đã ứng dụng tỉ lệ bản đồ vào thực tế rất giỏi.\n\nLời giải chi tiết:\n- Chiều dài thực tế: 3 × 3000 = 9000 (cm) = 90 (m).\n- Chiều rộng thực tế: 2 × 3000 = 6000 (cm) = 60 (m).";

    window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    if (isCorrect) window.submitMathLesson('160', '3', true);
};

window.check_160_4 = function () {
    const res = document.getElementById('160-4-1').value.trim();
    const isCorrect = res === '99';
    const rightAnswer = "99 ngôi sao";
    const guidance = "Đây là bài toán Tìm hai số khi biết Hiệu (11) và Tỉ số (4/5)? No, wait, check problem: 4/5 means Hiệu số phần là 5 - 4 = 1 phần.";
    const solution = "Chúc mừng! Con đã giải đúng bài toán Hiệu - Tỉ và tìm ra tổng số ngôi sao.\n\nLời giải chi tiết:\n- Hiệu số phần bằng nhau: 5 - 4 = 1 (phần).\n- Số ngôi sao bạn thứ nhất gấp: 11 : 1 × 4 = 44 (ngôi sao).\n- Số ngôi sao bạn thứ hai gấp: 44 + 11 = 55 (ngôi sao).\n- Tổng số ngôi sao: 44 + 55 = 99 (ngôi sao).";

    window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    if (isCorrect) window.submitMathLesson('160', '4', true);
};