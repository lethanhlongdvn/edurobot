/**
 * Lesson 140: Luyện tập chung (Quãng đường, Thời gian)
 * Kiến thức: Tổng hợp về quãng đường và thời gian trong chuyển động đều.
 */

export const lesson140 = {
    metadata: {
        id: "140",
        title: "Luyện tập chung (Tiết 3)",
        topic: "Chuyển động đều",
        week: "28",
        period: "140",
        description: "Luyện tập tổng quát về cách tính quãng đường và thời gian. Chú trọng việc đổi đơn vị đo phù hợp.",
        standard: "Chân trời sáng tạo"
    },

    lessonInfo: {
        id: "140",
        title: "BÀI 63. THỜI GIAN (Tiết 2)",
        intro: "Chào mừng các em đến với tiết Luyện tập chung! Hôm nay chúng ta sẽ cùng giải quyết các bài toán thực tế phức tạp hơn về thời gian và quãng đường nhé!",
        objectives: [
            "Thực hành tính quãng đường khi biết vận tốc và thời gian (với đơn vị khác nhau).",
            "Biết cách tính thời gian đi dựa vào mốc thời điểm bắt đầu và kết thúc.",
            "Phát triển kỹ năng giải bài toán có lời văn về chuyển động đều của tàu hỏa, xe đạp, xe máy."
        ],
        formula: [
            { label: "Quãng đường (s)", value: "s = v × t", color: "blue" },
            { label: "Thời gian (t)", value: "t = s : v", color: "teal" },
            { label: "Lưu ý đơn vị", value: "Đổi đơn vị sao cho v, s, t tương ứng nhau (ví dụ: km/h thì s là km, t là h).", color: "emerald" }
        ]
    },

    quizPool: [
        { "question": "s = 50 km/h × 1,5 giờ = ?", "options": ["75 km", "65 km", "80 km", "55 km"], "answer": 0, "level": "easy" },
        { "question": "v = 12,5 m/s, t = 2 phút. s = ...?", "options": ["1500 m", "25 m", "250 m", "150 m"], "answer": 0, "level": "medium" },
        { "question": "Đơn vị thông dụng của vận tốc là?", "options": ["km/h hoặc m/s", "km hoặc m", "giờ hoặc giây", "kg hoặc m/s"], "answer": 0, "level": "easy" },
        { "question": "v = 40 km/h, s = 60 km. t = ...?", "options": ["1,5 giờ", "1 giờ", "2 giờ", "2,5 giờ"], "answer": 1, "level": "easy" }
    ]
};

window.lesson140 = {
    state: {
        score: { s1: 0, s2: 0, s3: 0, s4: 0 },
        attempts: { s1: 0, s2: 0, s3: 0, s4: 0 }
    },

    init() {
        console.log("Lesson 140 initialized");
    },

    // Bài 1: Bảng s, v, t
    submitEx1() {
        const val1 = document.getElementById('ans-140-1-0').value.trim().replace(',', '.');
        const val2 = document.getElementById('ans-140-1-1').value.trim();
        if (!val1 || !val2) { alert("Vui lòng nhập đầy đủ kết quả!"); return; }

        this.state.attempts.s1++;
        let correctCount = 0;
        if (parseFloat(val1) === 170) correctCount++;
        if (val2 === '1500') correctCount++;

        const isCorrect = (correctCount === 2);
        const score = Math.round((correctCount / 2) * 100);

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>• Cột 1: s = 42,5 × 4 = 170 (km)</p>
                <p>• Cột 2: Đổi 2 phút = 120 giây. s = 12,5 × 120 = 1500 (m)</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 170 km và 1500 m</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "170; 1500", `${val1}; ${val2}`, "Lưu ý đổi 2 phút ra giây ở cột thứ hai.", solution);
        window.submitMathLesson("Bài 1: Tính quãng đường theo bảng", score, "ex-140-1", this.state.attempts.s1, 4, correctCount);
    },

    // Bài 2: Vận động viên xe đạp
    submitEx2() {
        const val = document.getElementById('ans-140-2').value.trim().replace(',', '.');
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s2++;
        const isCorrect = (parseFloat(val) === 3.15);
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Quãng đường vận động viên đi được là:</p>
                <p class='font-bold ml-4 text-blue-600'>12,6 × 0,25 = 3,15 (km)</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 3,15 km</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "3.15", val, "Áp dụng công thức s = v × t.", solution);
        window.submitMathLesson("Bài 2: Vận động viên xe đạp", score, "ex-140-2", this.state.attempts.s2, 4, isCorrect ? 1 : 0);
    },

    // Bài 3: Xe máy đi từ A đến B
    submitEx3() {
        const val = document.getElementById('ans-140-3').value.trim();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s3++;
        const isCorrect = (val === '108');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Thời gian người đó đi là: 11 giờ 15 phút - 8 giờ 15 phút = 3 giờ.</p>
                <p>Quãng đường AB dài là:</p>
                <p class='font-bold ml-4 text-blue-600'>36 × 3 = 108 (km)</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 108 km</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "108", val, "Tính thời gian đi (giờ đến - giờ đi) rồi tính quãng đường s = v × t.", solution);
        window.submitMathLesson("Bài 3: Quãng đường AB xe máy", score, "ex-140-3", this.state.attempts.s3, 4, isCorrect ? 1 : 0);
    },

    // Bài 4: Tàu hỏa đi từ Ga A đến Ga B
    submitEx4() {
        const val = document.getElementById('ans-140-4').value.trim();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s4++;
        const isCorrect = (val === '243');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Thời gian tàu hỏa chạy là: 14 giờ - 8 giờ = 6 giờ.</p>
                <p>Quãng đường từ ga A đến ga B dài là:</p>
                <p class='font-bold ml-4 text-blue-600'>40,5 × 6 = 243 (km)</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 243 km</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "243", val, "Tính thời gian tàu chạy rồi tính quãng đường s = v × t.", solution);
        window.submitMathLesson("Bài 4: Quãng đường tàu hỏa", score, "ex-140-4", this.state.attempts.s4, 4, isCorrect ? 1 : 0);
    }
};
