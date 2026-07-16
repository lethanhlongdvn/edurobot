/**
 * Lesson 130: Đơn vị đo thời gian (Tiết 1)
 * Kiến thức: Bảng đơn vị đo thời gian, Thế kỉ, Đổi đơn vị đo thời gian.
 */

export const lesson130 = {
    metadata: {
        id: "130",
        title: "Đơn vị đo thời gian (Tiết 1)",
        topic: "Số đo thời gian",
        week: "26",
        period: "130",
        description: "Ôn tập bảng đơn vị đo thời gian, mối quan hệ giữa các đơn vị và thế kỉ.",
        standard: "Chân trời sáng tạo"
    },

    lessonInfo: {
        id: "130",
        title: "BÀI 56. ĐƠN VỊ ĐO THỜI GIAN (Tiết 1)",
        intro: "Hôm nay chúng mình sẽ cùng ôn tập về các đơn vị đo thời gian và cách đổi chúng nhé!",
        objectives: [
            "Ghi nhớ bảng đơn vị đo thời gian: thế kỉ, năm, tháng, tuần, ngày, giờ, phút, giây.",
            "Xác định đúng mốc thời gian thuộc thế kỉ nào.",
            "Đổi thành thạo các đơn vị đo thời gian (phân số, số thập phân)."
        ],
        formula: [
            { label: "1 thế kỉ", value: "100 năm", color: "blue" },
            { label: "1 năm nhuận", value: "366 ngày", color: "sky" },
            { label: "1 ngày", value: "24 giờ", color: "teal" },
            { label: "1 giờ", value: "60 phút", color: "emerald" }
        ]
    },

    quizPool: [
        { "question": "Năm 2024 thuộc thế kỉ thứ mấy?", "options": ["XX", "XXI", "XV", "XIX"], "answer": 1, "level": "easy" },
        { "question": "1 năm nhuận có bao nhiêu ngày?", "options": ["365 ngày", "366 ngày", "364 ngày", "360 ngày"], "answer": 1, "level": "easy" },
        { "question": "Tháng nào sau đây chỉ có 28 hoặc 29 ngày?", "options": ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4"], "answer": 1, "level": "easy" },
        { "question": "Thế kỉ thứ XV kéo dài từ năm nào đến năm nào?", "options": ["Từ năm 1400 đến 1499", "Từ năm 1500 đến 1599", "Từ năm 1401 đến 1500", "Từ năm 1501 đến 1600"], "answer": 2, "level": "medium" },
        { "question": "1 thế kỉ bằng bao nhiêu năm?", "options": ["10 năm", "50 năm", "100 năm", "1000 năm"], "answer": 2, "level": "easy" },
        { "question": "Tháng nào sau đây có 31 ngày?", "options": ["Tháng 4", "Tháng 6", "Tháng 8", "Tháng 11"], "answer": 2, "level": "easy" },
        { "question": "Tháng nào sau đây có 30 ngày?", "options": ["Tháng 3", "Tháng 9", "Tháng 10", "Tháng 12"], "answer": 1, "level": "easy" },
        { "question": "Đổi 120 phút bằng bao nhiêu giờ?", "options": ["1,5 giờ", "2 giờ", "2,5 giờ", "1,2 giờ"], "answer": 1, "level": "easy" },
        { "question": "Đổi 2,5 năm bằng bao nhiêu tháng?", "options": ["25 tháng", "30 tháng", "24 tháng", "12 tháng"], "answer": 1, "level": "medium" },
        { "question": "Năm 1010 là mốc thời gian thuộc thế kỉ nào?", "options": ["Thế kỉ XX", "Thế kỉ XI", "Thế kỉ XIX", "Thế kỉ X"], "answer": 1, "level": "hard" }
    ]
};

window.lesson130 = {
    state: {
        score: { s1: 0, s2: 0, s3: 0, s4: 0 },
        attempts: { s1: 0, s2: 0, s3: 0, s4: 0 },
        selected: { s4: null }
    },

    init() {
        console.log("Lesson 130 initialized");
    },

    // Bài 1: Sự kiện và Thế kỉ
    submitEx1() {
        const answers = ["I", "X", "XI", "XIII", "XX", "XX"];
        let correctCount = 0;
        let studentAnswers = [];

        for (let i = 1; i <= 6; i++) {
            const val = document.getElementById(`ans-130-1-${i}`).value.trim().toUpperCase();
            studentAnswers.push(val);
            if (val === answers[i - 1]) {
                correctCount++;
            }
        }

        this.state.attempts.s1++;
        const isCorrect = (correctCount === 6);
        const score = Math.round((correctCount / 6) * 100);
        this.state.score.s1 = score;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p><b>Cách tính thế kỉ:</b> Năm <i>abc</i> hoặc <i>abcd</i>: Nếu có tận cùng là 00 thì thế kỉ là <i>a</i> hoặc <i>ab</i>. Nếu khác 00 thì thế kỉ là (<i>a</i>+1) hoặc (<i>ab</i>+1).</p>
                <ul class='list-disc pl-5'>
                    <li>Năm 40: Thế kỉ I</li>
                    <li>Năm 968: Thế kỉ X</li>
                    <li>Năm 1010: Thế kỉ XI</li>
                    <li>Năm 1285: Thế kỉ XIII</li>
                    <li>Năm 1954: Thế kỉ XX</li>
                    <li>Năm 1975: Thế kỉ XX</li>
                </ul>
            </div>
        `;

        window.showMathFeedback(isCorrect, answers.join(", "), studentAnswers.join(", "), "Áp dụng quy tắc đổi năm sang thế kỉ.", solution);
        window.submitMathLesson("Bài 1: Sự kiện thế kỉ", score, "ex-130-1", this.state.attempts.s1, 6, correctCount);
    },

    // Bài 2: Đổi đơn vị (Số thập phân)
    submitEx2() {
        const answers = ["1.5", "0.7", "1.25", "2.45"];
        let correctCount = 0;
        let students = [];

        for (let i = 1; i <= 4; i++) {
            const val = document.getElementById(`ans-130-2-${i}`).value.trim().replace(',', '.');
            students.push(val);
            if (val === answers[i - 1]) correctCount++;
        }

        this.state.attempts.s2++;
        const isCorrect = (correctCount === 4);
        const score = Math.round((correctCount / 4) * 100);
        this.state.score.s2 = score;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>90 phút = 90 : 60 = 1,5 giờ</p>
                <p>42 giây = 42 : 60 = 0,7 phút</p>
                <p>1 giờ 15 phút = 1 + 15/60 = 1,25 giờ</p>
                <p>2 phút 27 giây = 2 + 27/60 = 2,45 phút</p>
            </div>
        `;

        window.showMathFeedback(isCorrect, answers.join(", "), students.join(", "), "Chia cho 60 để đổi đơn vị nhỏ sang đơn vị lớn.", solution);
        window.submitMathLesson("Bài 2: Đổi đơn vị lớn", score, "ex-130-2", this.state.attempts.s2, 4, correctCount);
    },

    // Bài 3: Đổi đơn vị (Phân số & Hỗn số)
    submitEx3() {
        const answers = ["30", "3.6", "1.4", "24", "3", "36", "1", "24"];
        let correctCount = 0;
        let students = [];

        for (let i = 1; i <= 8; i++) {
            const val = document.getElementById(`ans-130-3-${i}`).value.trim().replace(',', '.');
            students.push(val);
            if (val === answers[i - 1]) correctCount++;
        }

        this.state.attempts.s3++;
        const isCorrect = (correctCount === 8);
        const score = Math.round((correctCount / 8) * 100);
        this.state.score.s3 = score;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>a) 1/2 giờ = 60 × 1/2 = 30 phút</p>
                <p>3 phút 36 giây = 3 + 36/60 = 3,6 phút</p>
                <p>1 giờ 24 phút = 1 + 24/60 = 1,4 giờ</p>
                <p>b) 2/5 phút = 60 × 2/5 = 24 giây</p>
                <p>3,6 phút = 3 phút + (0,6 × 60) giây = 3 phút 36 giây</p>
                <p>1,4 giờ = 1 giờ + (0,4 × 60) phút = 1 giờ 24 phút</p>
            </div>
        `;

        window.showMathFeedback(isCorrect, answers.join(", "), students.join(", "), "Nhân với 60 để đổi đơn vị lớn sang đơn vị nhỏ.", solution);
        window.submitMathLesson("Bài 3: Đổi đơn vị nhỏ", score, "ex-130-3", this.state.attempts.s3, 8, correctCount);
    },

    // Bài 4: Con quay (Selection)
    selectEx4(student, btn) {
        this.state.selected.s4 = student;
        document.querySelectorAll('.btn-130-4-option').forEach(b => {
            b.classList.remove('ring-4', 'ring-sky-400', 'bg-sky-100', 'border-sky-500');
        });
        btn.classList.add('ring-4', 'ring-sky-400', 'bg-sky-100', 'border-sky-500');
    },

    submitEx4() {
        const student = this.state.selected.s4;
        if (!student) {
            alert("Vui lòng chọn một bạn!");
            return;
        }

        this.state.attempts.s4++;
        const isCorrect = (student === 'robot');
        const score = isCorrect ? 100 : 0;
        this.state.score.s4 = score;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Đổi tất cả về đơn vị phút:</p>
                <ul class='list-disc pl-5'>
                    <li>Việt: 3 phút 20 giây = 3 + 20/60 &approx; 3,33 phút</li>
                    <li>Nam: 1/20 giờ = 60 : 20 = 3 phút</li>
                    <li>Rô-bốt: 0,1 giờ = 60 × 0,1 = 6 phút</li>
                </ul>
                <p class='font-bold ml-4 text-emerald-600'>Vậy Rô-bốt quay lâu nhất.</p>
            </div>
        `;

        window.showMathFeedback(isCorrect, "Rô-bốt", student === 'robot' ? "Rô-bốt" : (student === 'viet' ? "Việt" : "Nam"), "Đổi các đơn vị về cùng đơn vị phút để so sánh.", solution);
        window.submitMathLesson("Bài 4: Ai quay lâu nhất", score, "ex-130-4", this.state.attempts.s4, 1, isCorrect ? 1 : 0);
    }
};
