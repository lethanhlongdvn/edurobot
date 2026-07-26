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
    const solution = "Chính xác! Tỉ số phản ánh đúng truyền thuyết Con Rồng Cháu Tiên.<br><br>Giải thích:<br>Số người lên rừng là 13, số người xuống biển là 19.<br>Tỉ số là 13 : 19 hay 13/19.";

    window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    if (isCorrect) window.submitMathLesson('160', '1', true);
};

window.check_160_2 = function () {
    const a = document.getElementById('160-2-1').value.trim();
    const b = document.getElementById('160-2-2').value.trim();
    const isCorrect = a === '70' && b === '56';
    const rightAnswer = "70 và 56";
    const guidance = "Đây là bài toán Tìm hai số khi biết Tổng và Tỉ số. Em hãy tính tổng số phần bằng nhau trước, sau đó tìm giá trị của một phần rồi tính số lớn và số bé nhé.";
    const solution = "Tuyệt vời! Con đã giải bài toán Tổng - Tỉ rất thành thạo.<br><br>Lời giải chi tiết:<br>- Tổng số phần bằng nhau: 5 + 4 = 9 (phần).<br>- Giá trị một phần: 126 : 9 = 14.<br>- Số lớn: 14 × 5 = 70.<br>- Số bé: 14 × 4 = 56.";

    window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    if (isCorrect) window.submitMathLesson('160', '2', true);
};

window.check_160_3 = function () {
    const l = document.getElementById('160-3-1').value.trim();
    const w = document.getElementById('160-3-2').value.trim();
    const isCorrect = l === '90' && w === '60';
    const rightAnswer = "Dài 90m, Rộng 60m";
    const guidance = "Lấy độ dài trên bản đồ (cm) nhân với tỉ lệ (3000) để ra độ dài thực tế (cm), sau đó đổi kết quả sang mét nhé.";
    const solution = "Chính xác! Con đã ứng dụng tỉ lệ bản đồ vào thực tế rất giỏi.<br><br>Lời giải chi tiết:<br>- Chiều dài thực tế: 3 × 3000 = 9000 (cm) = 90 (m).<br>- Chiều rộng thực tế: 2 × 3000 = 6000 (cm) = 60 (m).";

    window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    if (isCorrect) window.submitMathLesson('160', '3', true);
};

window.check_160_4 = function () {
    const res = document.getElementById('160-4-1').value.trim();
    const isCorrect = res === '99';
    const rightAnswer = "99 ngôi sao";
    const guidance = "Đây là bài toán Tìm hai số khi biết Hiệu và Tỉ số. Em hãy tính hiệu số phần bằng nhau, sau đó tìm giá trị của một phần rồi nhân với số phần của mỗi số nhé.";
    const solution = "Chúc mừng! Con đã giải đúng bài toán Hiệu - Tỉ và tìm ra tổng số ngôi sao.<br><br>Lời giải chi tiết:<br>- Hiệu số phần bằng nhau: 5 - 4 = 1 (phần).<br>- Số ngôi sao bạn thứ nhất gấp: 11 : 1 × 4 = 44 (ngôi sao).<br>- Số ngôi sao bạn thứ hai gấp: 44 + 11 = 55 (ngôi sao).<br>- Tổng số ngôi sao: 44 + 55 = 99 (ngôi sao).";

    window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
    if (isCorrect) window.submitMathLesson('160', '4', true);
};