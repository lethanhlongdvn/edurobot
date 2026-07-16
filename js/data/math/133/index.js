/**
 * Lesson 133: Nhân số đo thời gian với một số
 * Kiến thức: Kỹ thuật nhân số đo thời gian, giải lỗi chuyển đổi đơn vị.
 */

export const lesson133 = {
    metadata: {
        id: "133",
        title: "Nhân số đo thời gian với một số",
        topic: "Số đo thời gian",
        week: "27",
        period: "133",
        description: "Học cách nhân số đo thời gian với một số tự nhiên, thực hiện chuyển đổi đơn vị khi kết quả vượt quá 60.",
        standard: "Chân trời sáng tạo"
    },

    lessonInfo: {
        id: "133",
        title: "BÀI 58. NHÂN SỐ ĐO THỜI GIAN VỚI MỘT SỐ",
        intro: "Chào mừng các em! Hôm nay chúng ta sẽ học cách nhân số đo thời gian với một số nhé!",
        objectives: [
            "Biết thực hiện phép nhân số đo thời gian với một số tự nhiên.",
            "Biết đổi đơn vị đo thời gian sang đơn vị lớn hơn liền kề sau khi thực hiện phép nhân.",
            "Vận dụng nhân số đo thời gian để giải các bài toán thực tế đời sống."
        ],
        formula: [
            { label: "Bước 1", value: "Nhân từng đơn vị đo thời gian với số tự nhiên đó.", color: "blue" },
            { label: "Bước 2", value: "Viết đơn vị tương ứng sau mỗi kết quả.", color: "teal" },
            { label: "Bước 3", value: "Chuyển đổi sang đơn vị lớn hơn nếu phần đơn vị nhỏ ≥ 60.", color: "emerald" }
        ]
    },

    quizPool: [
        { "question": "3 giờ 10 phút x 3 = ?", "options": ["9 giờ 30 phút", "9 giờ 10 phút", "10 giờ", "6 giờ 30 phút"], "answer": 0, "level": "easy" },
        { "question": "4 phút 5 giây x 4 = ?", "options": ["16 phút 20 giây", "16 phút 5 giây", "20 phút 20 giây", "12 phút 20 giây"], "answer": 0, "level": "easy" },
        { "question": "1 giờ 20 phút x 2 = ?", "options": ["2 giờ 40 phút", "3 giờ 40 phút", "2 giờ 20 phút", "2 giờ 10 phút"], "answer": 0, "level": "medium" },
        { "question": "15 phút 10 giây x 3 = ?", "options": ["45 phút 30 giây", "45 phút 10 giây", "30 phút 30 giây", "45 phút 40 giây"], "answer": 0, "level": "medium" },
        { "question": "2 giờ 15 phút x 4 = ?", "options": ["9 giờ", "8 giờ 15 phút", "8 giờ 45 phút", "8 giờ 60 phút"], "answer": 0, "level": "hard" },
        { "question": "12 phút 30 giây x 2 = ?", "options": ["25 phút", "24 phút 60 giây", "24 phút 30 giây", "26 phút"], "answer": 0, "level": "hard" }
    ]
};

window.lesson133 = {
    state: {
        score: { s1: 0, s2: 0, s3: 0, s4: 0, s5: 0, s6: 0, s7: 0 },
        attempts: { s1: 0, s2: 0, s3: 0, s4: 0, s5: 0, s6: 0, s7: 0 }
    },

    init() {
        console.log("Lesson 133 initialized");
    },

    // Bài 1a: 3h12p x 3
    submitEx1a() {
        const val = document.getElementById('ans-133-1a').value.trim().toLowerCase();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s1++;
        const isCorrect = (val === '9 giờ 36 phút');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Thực hiện nhân:</p>
                <p class='font-mono ml-4 text-blue-600'>3 giờ × 3 = 9 giờ</p>
                <p class='font-mono ml-4 text-blue-600'>12 phút × 3 = 36 phút</p>
                <p class='text-emerald-600 font-bold'>Kết quả: 9 giờ 36 phút</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "9 giờ 36 phút", val, "Nhân từng đơn vị: 3x3=9 giờ; 12x3=36 phút.", solution);
        window.submitMathLesson("Bài 1a: Nhân giờ phút", score, "ex-133-1a", this.state.attempts.s1, 7, isCorrect ? 1 : 0);
    },

    // Bài 1b: 4p5s x 5
    submitEx1b() {
        const val = document.getElementById('ans-133-1b').value.trim().toLowerCase();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s2++;
        const isCorrect = (val === '20 phút 25 giây');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Thực hiện nhân:</p>
                <p class='font-mono ml-4 text-blue-600'>4 phút × 5 = 20 phút</p>
                <p class='font-mono ml-4 text-blue-600'>5 giây × 5 = 25 giây</p>
                <p class='text-emerald-600 font-bold'>Kết quả: 20 phút 25 giây</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "20 phút 25 giây", val, "Nhân từng đơn vị: 4x5=20 phút; 5x5=25 giây.", solution);
        window.submitMathLesson("Bài 1b: Nhân phút giây", score, "ex-133-1b", this.state.attempts.s2, 7, isCorrect ? 1 : 0);
    },

    // Bài 1c: 12p25s x 3
    submitEx1c() {
        const val = document.getElementById('ans-133-1c').value.trim().toLowerCase();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s3++;
        const isCorrect = (val === '37 phút 15 giây');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Thực hiện nhân:</p>
                <p class='font-mono ml-4 text-blue-600'>12 phút × 3 = 36 phút</p>
                <p class='font-mono ml-4 text-blue-600'>25 giây × 3 = 75 giây</p>
                <p>Đổi: 75 giây = 1 phút 15 giây</p>
                <p>Kết quả: 36 phút + 1 phút 15 giây = 37 phút 15 giây</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 37 phút 15 giây</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "37 phút 15 giây", val, "75 giây = 1 phút 15 giây. Nhớ 1 phút sang phần phút.", solution);
        window.submitMathLesson("Bài 1c: Nhân có chuyển đổi", score, "ex-133-1c", this.state.attempts.s3, 7, isCorrect ? 1 : 0);
    },

    // Bài 1d: 4h15p x 4
    submitEx1d() {
        const val = document.getElementById('ans-133-1d').value.trim().toLowerCase();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s4++;
        const isCorrect = (val === '17 giờ' || val === '17 gio');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Thực hiện nhân:</p>
                <p class='font-mono ml-4 text-blue-600'>4 giờ × 4 = 16 giờ</p>
                <p class='font-mono ml-4 text-blue-600'>15 phút × 4 = 60 phút</p>
                <p>Đổi: 60 phút = 1 giờ</p>
                <p>Kết quả: 16 giờ + 1 giờ = 17 giờ</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 17 giờ</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "17 giờ", val, "60 phút = 1 giờ. Nhớ 1 giờ vào 16 giờ.", solution);
        window.submitMathLesson("Bài 1d: Nhân tròn giờ", score, "ex-133-1d", this.state.attempts.s4, 7, isCorrect ? 1 : 0);
    },

    // Bài 2a: 10p25s x 4
    submitEx2a() {
        const val = document.getElementById('ans-133-2a').value.trim().toLowerCase();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s5++;
        const isCorrect = (val === '41 phút 40 giây' || val === '41 phut 40 giay');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>10 phút 25 giây × 4 = 40 phút 100 giây</p>
                <p>Đổi: 100 giây = 1 phút 40 giây</p>
                <p>Kết quả: 40 phút + 1 phút 40 giây = 41 phút 40 giây</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 41 phút 40 giây</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "41 phút 40 giây", val, "100 giây = 1 phút 40 giây.", solution);
        window.submitMathLesson("Bài 2a: Nhân mượn đơn vị", score, "ex-133-2a", this.state.attempts.s5, 7, isCorrect ? 1 : 0);
    },

    // Bài 2b: 12h20p x 3
    submitEx2b() {
        const val = document.getElementById('ans-133-2b').value.trim().toLowerCase();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s6++;
        const isCorrect = (val === '37 giờ' || val === '37 gio');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>12 giờ 20 phút × 3 = 36 giờ 60 phút</p>
                <p>Đổi: 60 phút = 1 giờ</p>
                <p>Kết quả: 36 giờ + 1 giờ = 37 giờ</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 37 giờ</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "37 giờ", val, "60 phút = 1 giờ.", solution);
        window.submitMathLesson("Bài 2b: Nhân tròn giờ (mượn)", score, "ex-133-2b", this.state.attempts.s6, 7, isCorrect ? 1 : 0);
    },

    // Bài 3: Sạc pin ô tô
    submitEx3() {
        const val = document.getElementById('ans-133-3').value.trim().toLowerCase();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s7++;
        const isCorrect = (val.includes('54 phút 15 giây') || val.includes('54 phut 15 giay'));
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Thời gian sạc đầy 3 chiếc ô tô điện là:</p>
                <p class='font-bold ml-4 text-blue-600'>18 phút 5 giây × 3 = 54 phút 15 giây</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 54 phút 15 giây</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "54 phút 15 giây", val, "Thực hiện phép tính 18 phút 5 giây × 3.", solution);
        window.submitMathLesson("Bài 3: Bài toán sạc pin", score, "ex-133-3", this.state.attempts.s7, 7, isCorrect ? 1 : 0);
    }
};
