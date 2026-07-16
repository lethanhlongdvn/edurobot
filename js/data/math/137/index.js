/**
 * Lesson 137: Vận tốc (Tiết 2)
 * Kiến thức: Đổi đơn vị vận tốc (km/h <-> m/s), giải bài toán thực tế.
 */

export const lesson137 = {
    metadata: {
        id: "137",
        title: "Vận tốc (Tiết 2)",
        topic: "Chuyển động đều",
        week: "28",
        period: "137",
        description: "Thực hành đổi đơn vị đo vận tốc và giải các bài toán nâng cao về vận tốc con vật, phương tiện.",
        standard: "Chân trời sáng tạo"
    },

    lessonInfo: {
        id: "137",
        title: "BÀI 61. VẬN TỐC (Tiết 2)",
        intro: "Chào mừng các em quay lại! Hôm nay chúng ta sẽ cùng luyện tập sâu hơn về cách tính và đổi đơn vị vận tốc nhé!",
        objectives: [
            "Biết cách chuyển đổi giữa các đơn vị vận tốc thông dụng (km/h sang m/s và ngược lại).",
            "Nắm vững kỹ thuật giải bài toán vận tốc khi các số đo chưa cùng đơn vị.",
            "Vận dụng tính toán vận tốc trong các tình huống thực tế về các loài động vật."
        ],
        formula: [
            { label: "Đổi km/h → m/s", value: "Chia giá trị cho 3,6 (hoặc nhân 1000 rồi chia 3600).", color: "blue" },
            { label: "Đổi m/s → km/h", value: "Nhân giá trị với 3,6.", color: "teal" },
            { label: "Lưu ý", value: "Luôn kiểm tra đơn vị của quãng đường và thời gian trước khi tính v.", color: "emerald" }
        ]
    },

    quizPool: [
        { "question": "36 km/h = ... m/s?", "options": ["10 m/s", "20 m/s", "36 m/s", "6 m/s"], "answer": 0, "level": "medium" },
        { "question": "Một người đi xe máy 120km trong 3 giờ. Vận tốc là?", "options": ["40 km/h", "30 km/h", "45 km/h", "120 km/h"], "answer": 0, "level": "easy" },
        { "question": "Vận tốc con người đi bộ bình thường khoảng?", "options": ["5 km/h", "5 m/s", "50 km/h", "20 km/h"], "answer": 0, "level": "easy" },
        { "question": "Vận tốc 10 m/s bằng bao nhiêu km/h?", "options": ["36 km/h", "10 km/h", "60 km/h", "24 km/h"], "answer": 0, "level": "medium" }
    ]
};

window.lesson137 = {
    state: {
        score: { s1: 0, s2: 0 },
        attempts: { s1: 0, s2: 0 }
    },

    init() {
        console.log("Lesson 137 initialized");
    },

    // Bài 1: Đổi đơn vị
    submitEx1() {
        const val1 = document.getElementById('ans-137-1-0').value.trim();
        const val2 = document.getElementById('ans-137-1-1').value.trim();
        if (!val1 || !val2) { alert("Vui lòng nhập đầy đủ kết quả!"); return; }

        this.state.attempts.s1++;
        let correctCount = 0;
        if (val1 === '30') correctCount++;
        if (val2 === '5') correctCount++;

        const isCorrect = (correctCount === 2);
        const score = Math.round((correctCount / 2) * 100);

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Cách đổi: km/h = (giá trị × 1000 : 3600) m/s</p>
                <p class='font-mono ml-4 text-blue-600'>• 108 km/h = 108 000 : 3 600 = 30 (m/s)</p>
                <p class='font-mono ml-4 text-blue-600'>• 18 km/h = 18 000 : 3 600 = 5 (m/s)</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 30 m/s và 5 m/s</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "30; 5", `${val1}; ${val2}`, "Nhân quãng đường với 1000 và chia thời gian cho 3600.", solution);
        window.submitMathLesson("Bài 1: Đổi đơn vị vận tốc", score, "ex-137-1", this.state.attempts.s1, 2, correctCount);
    },

    // Bài 2: Đà điểu
    submitEx2() {
        const val = document.getElementById('ans-137-2').value.trim().replace(',', '.');
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s2++;
        const isCorrect = (parseFloat(val) === 17.5);
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Đổi: 5,25 km = 5250 m; 5 phút = 300 giây.</p>
                <p>Vận tốc của đà điểu là:</p>
                <p class='font-bold ml-4 text-blue-600'>5250 : 300 = 17,5 (m/s)</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 17,5 m/s</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "17.5", val, "Đổi quãng đường sang mét và thời gian sang giây trước khi chia.", solution);
        window.submitMathLesson("Bài 2: Vận tốc đà điểu", score, "ex-137-2", this.state.attempts.s2, 2, isCorrect ? 1 : 0);
    }
};
