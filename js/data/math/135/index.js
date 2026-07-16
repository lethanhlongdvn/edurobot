/**
 * Lesson 135: Luyện tập chung (Tiết 3)
 * Kiến thức: Tổng hợp cộng, trừ, nhân, chia số đo thời gian.
 */

export const lesson135 = {
    metadata: {
        id: "135",
        title: "Luyện tập chung (Tiết 3)",
        topic: "Số đo thời gian",
        week: "27",
        period: "135",
        description: "Ôn tập tổng hợp các phép tính về số đo thời gian và giải bài toán thực tế phức hợp.",
        standard: "Chân trời sáng tạo"
    },

    lessonInfo: {
        id: "135",
        title: "BÀI 60. LUYỆN TẬP CHUNG (Tiết 3)",
        intro: "Chào mừng các em! Hôm nay chúng ta sẽ cùng ôn tập lại các phép tính với số đo thời gian nhé!",
        objectives: [
            "Củng cố kỹ năng cộng, trừ, nhân, chia số đo thời gian.",
            "Biết vận dụng các phép tính để giải bài toán có nội dung thực tế về sản xuất, đời sống.",
            "Rèn luyện kỹ năng tính toán chính xác và nhanh chóng."
        ],
        formula: [
            { label: "Cộng/Trừ", value: "Đặt tính thẳng cột theo đơn vị.", color: "blue" },
            { label: "Nhân/Chia", value: "Thực hiện trên từng đơn vị đo.", color: "teal" },
            { label: "Bài toán", value: "Phân tích yêu cầu, xác định phép tính phù hợp.", color: "emerald" }
        ]
    },

    quizPool: [
        { "question": "2 giờ 10 phút x 5 = ?", "options": ["10 giờ 50 phút", "10 giờ", "11 giờ 50 phút", "10 giờ 30 phút"], "answer": 0, "level": "easy" },
        { "question": "11 phút 12 giây x 4 = ?", "options": ["44 phút 48 giây", "44 phút 12 giây", "45 phút", "44 phút 24 giây"], "answer": 0, "level": "easy" },
        { "question": "8 giờ 20 phút : 4 = ?", "options": ["2 giờ 5 phút", "2 giờ 10 phút", "2 giờ", "1 giờ 50 phút"], "answer": 0, "level": "medium" },
        { "question": "51 phút 30 giây : 10 = ?", "options": ["5 phút 9 giây", "5 phút 3 giây", "5 phút", "6 phút 9 giây"], "answer": 0, "level": "medium" },
        { "question": "1 giờ 15 phút x 2 = ?", "options": ["2 giờ 30 phút", "2 giờ 45 phút", "2 giờ 15 phút", "3 giờ"], "answer": 0, "level": "hard" },
        { "question": "3 giờ 20 phút : 5 = ?", "options": ["40 phút", "30 phút", "50 phút", "1 giờ"], "answer": 0, "level": "hard" }
    ]
};

window.lesson135 = {
    state: {
        score: { s1: 0, s2: 0, s3: 0, s4: 0, s5: 0, s6: 0 },
        attempts: { s1: 0, s2: 0, s3: 0, s4: 0, s5: 0, s6: 0 },
        selected: { s2: null }
    },

    init() {
        console.log("Lesson 135 initialized");
    },

    // Bài 1a1: 2h10p x 5
    submitEx1a1() {
        const val = document.getElementById('ans-135-1a1').value.trim().toLowerCase();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s1++;
        const isCorrect = (val === '10 giờ 50 phút' || val === '10 gio 50 phut');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>2 giờ × 5 = 10 giờ</p>
                <p>10 phút × 5 = 50 phút</p>
                <p class='text-emerald-600 font-bold'>Kết quả: 10 giờ 50 phút</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "10 giờ 50 phút", val, "Nhân từng đơn vị cho 5.", solution);
        window.submitMathLesson("Bài 1a1: Nhân thời gian", score, "ex-135-1a1", this.state.attempts.s1, 6, isCorrect ? 1 : 0);
    },

    // Bài 1a2: 11p12s x 4
    submitEx1a2() {
        const val = document.getElementById('ans-135-1a2').value.trim().toLowerCase();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s2++;
        const isCorrect = (val === '44 phút 48 giây' || val === '44 phut 48 giay');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>11 phút × 4 = 44 phút</p>
                <p>12 giây × 4 = 48 giây</p>
                <p class='text-emerald-600 font-bold'>Kết quả: 44 phút 48 giây</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "44 phút 48 giây", val, "Nhân từng đơn vị cho 4.", solution);
        window.submitMathLesson("Bài 1a2: Nhân thời gian", score, "ex-135-1a2", this.state.attempts.s2, 6, isCorrect ? 1 : 0);
    },

    // Bài 1b1: 8h20p : 4
    submitEx1b1() {
        const val = document.getElementById('ans-135-1b1').value.trim().toLowerCase();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s3++;
        const isCorrect = (val === '2 giờ 5 phút' || val === '2 gio 5 phut' || val === '2 giờ 05 phút');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>8 giờ : 4 = 2 giờ</p>
                <p>20 phút : 4 = 5 phút</p>
                <p class='text-emerald-600 font-bold'>Kết quả: 2 giờ 5 phút</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "2 giờ 5 phút", val, "Chia từng đơn vị cho 4.", solution);
        window.submitMathLesson("Bài 1b1: Chia thời gian", score, "ex-135-1b1", this.state.attempts.s3, 6, isCorrect ? 1 : 0);
    },

    // Bài 1b2: 51p30s : 10
    submitEx1b2() {
        const val = document.getElementById('ans-135-1b2').value.trim().toLowerCase();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s4++;
        const isCorrect = (val === '5 phút 9 giây' || val === '5 phut 9 giay' || val === '5 phút 09 giây');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>51 phút : 10 = 5 phút (dư 1 phút)</p>
                <p>Đổi 1 phút dư = 60 giây. 60 giây + 30 giây = 90 giây.</p>
                <p>90 giây : 10 = 9 giây.</p>
                <p class='text-emerald-600 font-bold'>Kết quả: 5 phút 9 giây</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "5 phút 9 giây", val, "Xử lý phần dư bằng cách đổi sang giây.", solution);
        window.submitMathLesson("Bài 1b2: Chia thời gian", score, "ex-135-1b2", this.state.attempts.s4, 6, isCorrect ? 1 : 0);
    },

    // Bài 2: Con kiến (Selection)
    check_135_choice(btn, idx) {
        this.state.selected.s2 = idx;
        document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('ring-4', 'ring-blue-400', 'bg-blue-50', 'border-blue-500'));
        btn.classList.add('ring-4', 'ring-blue-400', 'bg-blue-50', 'border-blue-500');

        this.state.attempts.s5++;
        const isCorrect = (idx === 2);
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Lục giác đều có 6 cạnh bằng nhau.</p>
                <p>Trung bình con kiến bò mỗi cạnh hết:</p>
                <p class='font-bold ml-4 text-blue-600'>6 phút 42 giây : 6 = 1 phút 7 giây</p>
                <p class='text-emerald-600 font-bold'>Đáp án: C (1 phút 7 giây)</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "C", idx, "Lấy tổng thời gian chia cho 6 cạnh.", solution);
        window.submitMathLesson("Bài 2: Tính trung bình cạnh", score, "ex-135-2", this.state.attempts.s5, 6, isCorrect ? 1 : 0);
    },

    // Bài 3: Robot giải toán
    submitEx3() {
        const val = document.getElementById('ans-135-3').value.trim().toLowerCase();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s6++;
        const isCorrect = (val === '1 giờ 5 phút' || val === '1 gio 5 phut' || val === '1 giờ 05 phút');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Thời gian làm hộp bút buổi sáng: 10 giờ 20 phút - 8 giờ 10 phút = 2 giờ 10 phút.</p>
                <p>Thời gian làm hộp bút buổi chiều: 15 giờ 5 phút - 14 giờ = 1 giờ 5 phút.</p>
                <p>Tổng thời gian: 2 giờ 10 phút + 1 giờ 5 phút = 3 giờ 15 phút.</p>
                <p>Tổng số hộp bút: 2 + 1 = 3 (hộp).</p>
                <p>Trung bình làm 1 hộp hết: 3 giờ 15 phút : 3 = 1 giờ 5 phút.</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 1 giờ 5 phút</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "1 giờ 5 phút", val, "Tính tổng thời gian rồi chia cho tổng số hộp bút.", solution);
        window.submitMathLesson("Bài 3: Bài toán trung bình phức hợp", score, "ex-135-3", this.state.attempts.s6, 6, isCorrect ? 1 : 0);
    }
};
