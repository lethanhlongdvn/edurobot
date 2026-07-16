/**
 * Lesson 139: Thời gian (Tiết 1)
 * Kiến thức: Công thức tính thời gian t = s : v.
 */

export const lesson139 = {
    metadata: {
        id: "139",
        title: "Thời gian (Tiết 1)",
        topic: "Chuyển động đều",
        week: "28",
        period: "139",
        description: "Tìm hiểu cách tính thời gian khi biết quãng đường và vận tốc chuyển động. Công thức t = s : v.",
        standard: "Chân trời sáng tạo"
    },

    lessonInfo: {
        id: "139",
        title: "BÀI 63. THỜI GIAN (Tiết 1)",
        intro: "Chào mừng các em! Sau khi đã biết về vận tốc và quãng đường, hôm nay chúng ta sẽ hoàn thiện bộ ba công thức bằng cách tìm hiểu cách tính THỜI GIAN nhé!",
        objectives: [
            "Hiểu được cách tính thời gian của một chuyển động đều.",
            "Nắm vững và vận dụng thành thạo công thức: t = s : v.",
            "Biết giải các bài toán thực tế kết hợp so sánh thời gian đi xuôi dòng và ngược dòng."
        ],
        formula: [
            { label: "Thời gian (t)", value: "Bằng quãng đường chia cho vận tốc.", color: "blue" },
            { label: "Công thức", value: "t = s : v", color: "teal" },
            { label: "Đơn vị", value: "Nếu s là km, v là km/h thì t là giờ; nếu s là m, v là m/s thì t là giây.", color: "emerald" }
        ]
    },

    quizPool: [
        { "question": "Muốn tính thời gian ta lấy:", "options": ["Quãng đường chia Vận tốc", "Quãng đường nhân Vận tốc", "Vận tốc chia Quãng đường", "Quãng đường cộng Vận tốc"], "answer": 0, "level": "easy" },
        { "question": "Công thức tính thời gian là:", "options": ["t = s : v", "t = s × v", "v = s : t", "s = v × t"], "answer": 0, "level": "easy" },
        { "question": "s = 120 km, v = 60 km/h. t = ...?", "options": ["2 giờ", "3 giờ", "4 giờ", "1 giờ"], "answer": 0, "level": "easy" },
        { "question": "Đổi 1,5 giờ ra phút:", "options": ["90 phút", "150 phút", "60 phút", "75 phút"], "answer": 0, "level": "medium" }
    ]
};

window.lesson139 = {
    state: {
        score: { s1: 0, s2: 0, s3: 0 },
        attempts: { s1: 0, s2: 0, s3: 0 }
    },

    init() {
        console.log("Lesson 139 initialized");
    },

    // Bài 1: Thầy giáo đi bộ
    submitEx1() {
        const val = document.getElementById('ans-139-1').value.trim().replace(',', '.');
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s1++;
        const isCorrect = (parseFloat(val) === 6);
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Thời gian thầy giáo đi về đến nhà là:</p>
                <p class='font-bold ml-4 text-blue-600'>9 : 1,5 = 6 (giờ)</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 6 giờ</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "6", val, "Áp dụng công thức t = s : v.", solution);
        window.submitMathLesson("Bài 1: Thời gian thầy giáo đi bộ", score, "ex-139-1", this.state.attempts.s1, 3, isCorrect ? 1 : 0);
    },

    // Bài 2: Vận động viên chạy
    submitEx2() {
        const val = document.getElementById('ans-139-2').value.trim();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s2++;
        const isCorrect = (val === '25');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Thời gian vận động viên chạy hết quãng đường là:</p>
                <p class='font-bold ml-4 text-blue-600'>600 : 24 = 25 (giây)</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 25 giây</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "25", val, "Áp dụng công thức t = s : v.", solution);
        window.submitMathLesson("Bài 2: Thời gian vận động viên chạy", score, "ex-139-2", this.state.attempts.s2, 3, isCorrect ? 1 : 0);
    },

    // Bài 3: Tàu thủy xuôi/ngược dòng
    submitEx3(choice) {
        this.state.attempts.s3++;
        const isCorrect = (choice === 0); // A: 0.5 giờ
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Thời gian tàu đi xuôi dòng: 75 : 30 = 2,5 (giờ)</p>
                <p>Thời gian tàu đi ngược dòng: 75 : 25 = 3 (giờ)</p>
                <p>Hiệu thời gian là: 3 - 2,5 = 0,5 (giờ)</p>
                <p class='text-emerald-600 font-bold'>Đáp án đúng: A. 0,5 giờ</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "A", choice === 0 ? "A" : choice === 1 ? "B" : choice === 2 ? "C" : "D", "Tính riêng thời gian xuôi dòng và ngược dòng rồi trừ cho nhau.", solution);
        window.submitMathLesson("Bài 3: So sánh thời gian tàu thủy", score, "ex-139-3", this.state.attempts.s3, 3, isCorrect ? 1 : 0);
    }
};
