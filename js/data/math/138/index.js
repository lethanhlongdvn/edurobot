/**
 * Lesson 138: Quãng đường (Tiết 1)
 * Kiến thức: Công thức tính quãng đường s = v × t.
 */

export const lesson138 = {
    metadata: {
        id: "138",
        title: "Quãng đường (Tiết 1)",
        topic: "Chuyển động đều",
        week: "28",
        period: "138",
        description: "Tìm hiểu cách tính quãng đường khi biết vận tốc và thời gian chuyển động. Công thức s = v × t.",
        standard: "Chân trời sáng tạo"
    },

    lessonInfo: {
        id: "138",
        title: "BÀI 62. QUÃNG ĐƯỜNG (Tiết 1)",
        intro: "Chào các em! Sau khi đã biết về vận tốc, hôm nay chúng ta sẽ cùng học cách tính xem một vật đi được bao xa, tức là tính QUÃNG ĐƯỜNG nhé!",
        objectives: [
            "Hiểu được cách tính quãng đường của một chuyển động đều.",
            "Nắm vững và vận dụng thành thạo công thức: s = v × t.",
            "Biết cách trình bày bài giải bài toán tìm quãng đường với các đơn vị tương ứng."
        ],
        formula: [
            { label: "Quãng đường (s)", value: "Bằng vận tốc nhân với thời gian.", color: "blue" },
            { label: "Công thức", value: "s = v × t", color: "teal" },
            { label: "Đơn vị", value: "Nếu v là km/h, t là h thì s là km; nếu v là m/s, t là s thì s là m.", color: "emerald" }
        ]
    },

    quizPool: [
        { "question": "Muốn tính quãng đường ta lấy:", "options": ["Vận tốc chia Thời gian", "Vận tốc nhân Thời gian", "Thời gian chia Vận tốc", "Vận tốc cộng Thời gian"], "answer": 1, "level": "easy" },
        { "question": "Công thức tính quãng đường là:", "options": ["s = v × t", "v = s : t", "t = s : v", "s = v : t"], "answer": 0, "level": "easy" },
        { "question": "Một ô tô đi 60 km/h trong 3 giờ. Quãng đường là:", "options": ["180 km", "20 km", "63 km", "120 km"], "answer": 0, "level": "easy" },
        { "question": "Một người chạy với vận tốc 4 m/s trong 1 phút. Quãng đường là:", "options": ["240 m", "4 m", "60 m", "40 m"], "answer": 0, "level": "medium" }
    ]
};

window.lesson138 = {
    state: {
        score: { s1: 0, s2: 0, s3: 0 },
        attempts: { s1: 0, s2: 0, s3: 0 }
    },

    init() {
        console.log("Lesson 138 initialized");
    },

    // Bài 1: Tàu biển
    submitEx1() {
        const val = document.getElementById('ans-138-1').value.trim().replace(',', '.');
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s1++;
        const isCorrect = (parseFloat(val) === 134.8);
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Quãng đường chiếc tàu biển đi được là:</p>
                <p class='font-bold ml-4 text-blue-600'>33,7 × 4 = 134,8 (km)</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 134,8 km</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "134.8", val, "Áp dụng công thức s = v × t.", solution);
        window.submitMathLesson("Bài 1: Quãng đường tàu biển", score, "ex-138-1", this.state.attempts.s1, 3, isCorrect ? 1 : 0);
    },

    // Bài 2: Chim cắt
    submitEx2() {
        const val = document.getElementById('ans-138-2').value.trim();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s2++;
        const isCorrect = (val === '1620');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Quãng đường chú chim cắt bay được là:</p>
                <p class='font-bold ml-4 text-blue-600'>108 × 15 = 1620 (m)</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 1620 m</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "1620", val, "Áp dụng công thức s = v × t.", solution);
        window.submitMathLesson("Bài 2: Quãng đường chim cắt", score, "ex-138-2", this.state.attempts.s2, 3, isCorrect ? 1 : 0);
    },

    // Bài 3: Xe máy
    submitEx3() {
        const val = document.getElementById('ans-138-3').value.trim();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s3++;
        const isCorrect = (val === '165');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Thời gian người đó đi là: 10 giờ - 7 giờ = 3 giờ.</p>
                <p>Quãng đường người đó đi được là:</p>
                <p class='font-bold ml-4 text-blue-600'>55 × 3 = 165 (km)</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 165 km</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "165", val, "Tính thời gian trước (t = giờ đến - giờ đi), sau đó tính s = v × t.", solution);
        window.submitMathLesson("Bài 3: Quãng đường xe máy", score, "ex-138-3", this.state.attempts.s3, 3, isCorrect ? 1 : 0);
    }
};
