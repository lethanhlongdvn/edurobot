/**
 * Lesson 129: Luyện tập chung (Tiết 3)
 * Phép tính: Diện tích và Thể tích (Hình hộp chữ nhật, Hình lập phương)
 */

export const lesson129 = {
    metadata: {
        id: "129",
        title: "Luyện tập chung (Tiết 3)",
        topic: "Hình học và Đo lường",
        week: "26",
        period: "129",
        description: "Vận dụng linh hoạt công thức tính diện tích và thể tích để giải toán thực tế (Trang 62).",
        standard: "Chân trời sáng tạo"
    },

    lessonInfo: {
        id: "129",
        title: "BÀI 55. LUYỆN TẬP CHUNG (Tiết 3)",
        intro: "Vận dụng linh hoạt các công thức diện tích và thể tích để giải quyết các tình huống thực tế đầy thú vị!",
        objectives: [
            "Ôn tập công thức diện tích toàn phần và thể tích hình lập phương, hình hộp chữ nhật.",
            "Vận dụng giải các bài toán thực tế về gấp hình, cắt ghép khối gỗ và mực nước trong bể.",
            "Rèn luyện tư duy không gian và kỹ năng trình bày bài giải chi tiết."
        ],
        formula: [
            { label: "S toàn phần HLP", value: "a × a × 6", color: "blue" },
            { label: "S toàn phần HHCN", value: "Sxq + Sđáy × 2", color: "teal" },
            { label: "Thể tích (V)", value: "S đáy × Chiều cao", color: "emerald" },
            { label: "Chiều cao (c)", value: "V : S đáy", color: "amber" }
        ]
    },

    quizPool: [
        { "question": "Một khối gỗ dạng HHCN có các kích thước 5dm, 3dm, 3dm. Thể tích là:", "options": ["45 dm³", "11 dm³", "30 dm³", "15 dm³"], "answer": 0, "level": 1 },
        { "question": "Hộp lập phương cạnh 2,5dm. Diện tích một mặt là:", "options": ["6,25 dm²", "2,5 dm²", "5 dm²", "6,25 dm³"], "answer": 0, "level": 1 },
        { "question": "Nếu cắt đi một khối gỗ thể tích 8dm³ từ khối gỗ 45dm³ thì phần còn lại là:", "options": ["37 dm³", "53 dm³", "35 dm³", "40 dm³"], "answer": 0, "level": 1 },
        { "question": "Mực nước trong hộp Fig 1 cao 8cm, đáy 8x8. Thể tích nước là:", "options": ["512 cm³", "64 cm³", "192 cm³", "256 cm³"], "answer": 0, "level": 1 },
        { "question": "Thể tích nước 512 cm³, đáy mới 16x8. Chiều cao c là:", "options": ["4 cm", "8 cm", "2 cm", "16 cm"], "answer": 0, "level": 1 },
        { "question": "Diện tích toàn phần của hình lập phương cạnh a là:", "options": ["a × a × 4", "a × a × 6", "a × a × a", "a × 4 × 6"], "answer": 1, "level": 2 },
        { "question": "Một hình lập phương có diện tích một mặt là 9 cm². Thể tích của nó là:", "options": ["27 cm³", "18 cm³", "54 cm³", "81 cm³"], "answer": 0, "level": 2 },
        { "question": "Đổi 2,5 dm² sang cm² ta được:", "options": ["250 cm²", "25 cm²", "2500 cm²", "0,25 cm²"], "answer": 0, "level": 2 },
        { "question": "Muốn tính thể tích HHCN khi biết diện tích đáy S và chiều cao c:", "options": ["V = S × c", "V = S : c", "V = c : S", "V = S + c"], "answer": 0, "level": 2 },
        { "question": "HHCN có V = 120 cm³, đáy có diện tích 30 cm². Chiều cao c là:", "options": ["4 cm", "40 cm", "4 dm", "4 mm"], "answer": 0, "level": 2 },
        { "question": "Gấp cạnh hình lập phương lên 2 lần thì diện tích toàn phần tăng:", "options": ["2 lần", "4 lần", "6 lần", "8 lần"], "answer": 1, "level": 3 },
        { "question": "Gấp cạnh hình lập phương lên 2 lần thì thể tích tăng:", "options": ["2 lần", "4 lần", "8 lần", "16 lần"], "answer": 2, "level": 3 },
        { "question": "Bình chứa 1 lít nước (1 dm³). Đổ vào hộp đáy 10x10 cm thì cao c là:", "options": ["10 cm", "1 cm", "100 cm", "0,1 cm"], "answer": 0, "level": 3 },
        { "question": "Một mặt hình lập phương có chu vi 20 cm. Thể tích là:", "options": ["125 cm³", "100 cm³", "150 cm³", "20 cm³"], "answer": 0, "level": 3 },
        { "question": "Khối gỗ 3dm x 3dm x 3dm. Cắt đi 1dm x 1dm x 1dm ở góc. Sxq có đổi không?", "options": ["Không đổi", "Tăng lên", "Giảm đi", "Tùy vị trí cắt"], "answer": 0, "level": 3 }
    ]
};

window.lesson129 = {
    state: {
        score: { s1: 0, s2: 0, s3: 0, s4: 0 },
        attempts: { s1: 0, s2: 0, s3: 0, s4: 0 },
        selected: { s1: null }
    },

    init() {
        console.log("Lesson 129 initialized");
    },

    // Bài 1: Chọn hình lập phương gấp được
    selectEx1(option) {
        this.state.selected.s1 = option;
        const btns = document.querySelectorAll('[id^="btn-129-1-"]');
        btns.forEach(b => b.classList.remove('ring-4', 'ring-blue-400', 'bg-blue-50', 'border-blue-500'));

        const selectedBtn = document.getElementById(`btn-129-1-${option}`);
        if (selectedBtn) {
            selectedBtn.classList.add('ring-4', 'ring-blue-400', 'bg-blue-50', 'border-blue-500');
        }
    },

    submitEx1() {
        const option = this.state.selected.s1;
        if (!option) {
            alert("Vui lòng chọn một đáp án!");
            return;
        }

        this.state.attempts.s1++;
        const isCorrect = (option === 'B');
        const score = isCorrect ? 100 : 0;
        this.state.score.s1 = score;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p><b>Giải thích:</b></p>
                <ul class='list-disc pl-5'>
                    <li>Quan sát hình khai triển: Khi gấp lại thành hình lập phương, các mặt kề nhau phải khớp với các ký hiệu.</li>
                    <li>Hình B thỏa mãn vị trí tương đối của các mặt chấm tròn và đường gạch chéo.</li>
                </ul>
                <p class='text-emerald-600 font-bold'>Đáp án: Hình B</p>
            </div>
        `;

        window.showMathFeedback(isCorrect, "Hình B", `Hình ${option}`, "Quan sát sự tương ứng giữa các mặt trên hình khai triển.", solution);
        window.submitMathLesson("Bài 1: Gấp hình", score, "ex-129-1", this.state.attempts.s1, 4, isCorrect ? 1 : 0);
    },

    // Bài 2: Diện tích nhựa cứng
    submitEx2() {
        const ans = document.getElementById('ans-129-2').value.trim().replace(',', '.');
        if (!ans) {
            alert("Vui lòng nhập đáp số!");
            return;
        }

        this.state.attempts.s2++;
        const isCorrect = (parseFloat(ans) === 37.5);
        const score = isCorrect ? 100 : 0;
        this.state.score.s2 = score;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Chiếc hộp hình lập phương có 6 mặt (nếu làm kín để bảo quản bóng).</p>
                <p>Diện tích nhựa cứng cần dùng là:</p>
                <p class='font-bold ml-4 text-blue-600'>2,5 × 2,5 × 6 = 37,5 (dm²)</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 37,5 dm²</p>
            </div>
        `;

        window.showMathFeedback(isCorrect, "37.5", ans, "S toàn phần = Cạnh × Cạnh × 6.", solution);
        window.submitMathLesson("Bài 2: Diện tích hộp nhựa", score, "ex-129-2", this.state.attempts.s2, 4, isCorrect ? 1 : 0);
    },

    // Bài 3: Thể tích khối gỗ
    submitEx3() {
        const ans = document.getElementById('ans-129-3').value.trim();
        if (!ans) {
            alert("Vui lòng nhập đáp số!");
            return;
        }

        this.state.attempts.s3++;
        const isCorrect = (parseInt(ans) === 37);
        const score = isCorrect ? 100 : 0;
        this.state.score.s3 = score;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Thể tích khối gỗ hình hộp chữ nhật ban đầu là:</p>
                <p class='font-bold ml-4 text-blue-600'>5 × 3 × 3 = 45 (dm³)</p>
                <p>Thể tích phần gỗ hình lập phương bác thợ mộc cắt đi là:</p>
                <p class='font-bold ml-4 text-blue-600'>2 × 2 × 2 = 8 (dm³)</p>
                <p>Thể tích phần khối gỗ dùng làm ghế là:</p>
                <p class='font-bold ml-4 text-blue-600'>45 - 8 = 37 (dm³)</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 37 dm³</p>
            </div>
        `;

        window.showMathFeedback(isCorrect, "37", ans, "V còn lại = V tổng - V đã cắt.", solution);
        window.submitMathLesson("Bài 3: Thể tích khối gỗ", score, "ex-129-3", this.state.attempts.s3, 4, isCorrect ? 1 : 0);
    },

    // Bài 4: Chiều cao mực nước
    submitEx4() {
        const ans = document.getElementById('ans-129-4').value.trim();
        if (!ans) {
            alert("Vui lòng nhập đáp số!");
            return;
        }

        this.state.attempts.s4++;
        const isCorrect = (parseInt(ans) === 4);
        const score = isCorrect ? 100 : 0;
        this.state.score.s4 = score;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Thể tích nước trong hộp không đổi khi xoay các chiều khác nhau.</p>
                <p>Diện tích đáy của mực nước ở Hình 1 là: 8 × 8 = 64 (cm²)</p>
                <p>Thể tích nước là: 64 × 8 = 512 (cm³)</p>
                <p>Khi xoay như Hình 2, diện tích đáy mới là: 16 × 8 = 128 (cm²)</p>
                <p>Chiều cao mực nước mới là:</p>
                <p class='font-bold ml-4 text-blue-600'>512 : 128 = 4 (cm)</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 4 cm</p>
            </div>
        `;

        window.showMathFeedback(isCorrect, "4", ans, "V nước không đổi. Chiều cao = V : S đáy.", solution);
        window.submitMathLesson("Bài 4: Chiều cao mực nước", score, "ex-129-4", this.state.attempts.s4, 4, isCorrect ? 1 : 0);
    },

    // AI Grading Handler
    submitWordProblemAI(id) {
        const solution = document.getElementById('wp-full-' + id)?.value || '';
        if (!solution.trim()) {
            alert("Vui lòng viết bài giải trước khi gửi cho Thầy E nhé!");
            return;
        }

        let context = "";
        if (id === '129-2') context = "Tính diện tích nhựa cứng (HLP cạnh 2,5dm).";
        else if (id === '129-3') context = "Tính thể tích phần còn lại (HHCN 5x3x3 trừ HLP cạnh 2dm).";
        else if (id === '129-4') context = "Tính chiều cao mực nước mới (V=512 cm³, đáy mới 16x8).";

        const prompt = `Bài tập: ${context}\nBài làm của học sinh:\n${solution}`;
        if (window.AIInteraction && typeof window.AIInteraction.gradeWithModal === 'function') {
            window.AIInteraction.gradeWithModal("👨‍🏫 Thầy E Nhận Xét", prompt);
        } else {
            alert("Tính năng AI hiện đang được bảo trì!");
        }
    }
};
