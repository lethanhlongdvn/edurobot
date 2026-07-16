/**
 * Lesson 136: Vận tốc (Tiết 1)
 * Kiến thức: Khái niệm vận tốc, công thức v = s : t.
 */

export const lesson136 = {
    metadata: {
        id: "136",
        title: "Vận tốc (Tiết 1)",
        topic: "Chuyển động đều",
        week: "28",
        period: "136",
        description: "Làm quen với khái niệm vận tốc, đơn vị vận tốc và công thức tính vận tốc.",
        standard: "Chân trời sáng tạo"
    },

    lessonInfo: {
        id: "136",
        title: "BÀI 61. VẬN TỐC (Tiết 1)",
        intro: "Chào các em! Hôm nay chúng ta sẽ cùng khám phá một khái niệm rất thú vị trong toán học và đời sống, đó là VẬN TỐC!",
        objectives: [
            "Hiểu được khái niệm vận tốc của một chuyển động đều.",
            "Nắm vững công thức tính vận tốc: v = s : t.",
            "Biết cách tính vận tốc với các đơn vị đo khác nhau (km/h, m/s, m/phút)."
        ],
        formula: [
            { label: "Vận tốc (v)", value: "Quãng đường đi được trong một đơn vị thời gian.", color: "blue" },
            { label: "Công thức", value: "v = s : t (s: quãng đường, t: thời gian)", color: "teal" },
            { label: "Đơn vị", value: "Tương ứng với đơn vị của s và t.", color: "emerald" }
        ]
    },

    quizPool: [
        { "question": "Muốn tính vận tốc ta lấy:", "options": ["Quãng đường chia Thời gian", "Quãng đường nhân Thời gian", "Thời gian chia Quãng đường", "Vận tốc nhân Thời gian"], "answer": 0, "level": "easy" },
        { "question": "Một ô tô đi 120 km trong 2 giờ. Vận tốc là:", "options": ["60 km/h", "240 km/h", "30 km/h", "120 km/h"], "answer": 0, "level": "easy" },
        { "question": "Đơn vị nào sau đây KHÔNG phải là đơn vị vận tốc?", "options": ["km/h", "m/giây", "m/phút", "km/phút"], "answer": 3, "level": "medium" },
        { "question": "v = 15 m/s, t = 10 giây. s = ...?", "options": ["150 m", "1,5 m", "150 km", "25 m"], "answer": 0, "level": "medium" }
    ]
};

window.lesson136 = {
    state: {
        score: { s1: 0, s2: 0 },
        attempts: { s1: 0, s2: 0 }
    },

    init() {
        console.log("Lesson 136 initialized");
    },

    // Bài 1: Vận tốc ô tô trên cao tốc
    submitEx1() {
        const val = document.getElementById('ans-136-1').value.trim();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s1++;
        const isCorrect = (val === '90');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Vận tốc của ô tô là:</p>
                <p class='font-bold ml-4 text-blue-600'>180 : 2 = 90 (km/h)</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 90 km/h</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "90", val, "Áp dụng công thức v = s : t.", solution);
        window.submitMathLesson("Bài 1: Vận tốc ô tô", score, "ex-136-1", this.state.attempts.s1, 2, isCorrect ? 1 : 0);
    },

    // Bài 2: Vận tốc xe đạp
    submitEx2() {
        const val = document.getElementById('ans-136-2').value.trim();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s2++;
        const isCorrect = (val === '5');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Đổi: 1 phút 40 giây = 100 giây.</p>
                <p>Vận tốc của người đi xe đạp là:</p>
                <p class='font-bold ml-4 text-blue-600'>500 : 100 = 5 (m/s)</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 5 m/s</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "5", val, "Đổi thời gian ra giây trước khi tính vận tốc.", solution);
        window.submitMathLesson("Bài 2: Vận tốc xe đạp", score, "ex-136-2", this.state.attempts.s2, 2, isCorrect ? 1 : 0);
    }
};