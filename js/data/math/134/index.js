/**
 * Lesson 134: Chia số đo thời gian cho một số
 * Kiến thức: Kỹ thuật chia số đo thời gian, giải lỗi dư đơn vị.
 */

export const lesson134 = {
    metadata: {
        id: "134",
        title: "Chia số đo thời gian cho một số",
        topic: "Số đo thời gian",
        week: "27",
        period: "134",
        description: "Học cách chia số đo thời gian cho một số tự nhiên, xử lý phần dư bằng cách đổi đơn vị.",
        standard: "Chân trời sáng tạo"
    },

    lessonInfo: {
        id: "134",
        title: "BÀI 59. CHIA SỐ ĐO THỜI GIAN CHO MỘT SỐ",
        intro: "Chào mừng các em! Hôm nay chúng ta sẽ tìm hiểu cách chia số đo thời gian cho một số nhé!",
        objectives: [
            "Biết thực hiện phép chia số đo thời gian cho một số tự nhiên.",
            "Biết xử lý phần dư ở đơn vị lớn bằng cách đổi sang đơn vị nhỏ hơn để tiếp tục chia.",
            "Vận dụng tính trung bình thời gian trong các bài toán thực tế."
        ],
        formula: [
            { label: "Bước 1", value: "Chia lần lượt từng đơn vị đo thời gian cho số đó từ trái sang phải.", color: "blue" },
            { label: "Bước 2", value: "Nếu còn dư ở đơn vị lớn, ta đổi sang đơn vị nhỏ hơn rồi cộng vào số đo đơn vị nhỏ có sẵn.", color: "teal" },
            { label: "Bước 3", value: "Tiếp tục thực hiện phép chia trên đơn vị mới.", color: "emerald" }
        ]
    },

    quizPool: [
        { "question": "8 giờ 20 phút : 2 = ?", "options": ["4 giờ 10 phút", "4 giờ", "4 giờ 20 phút", "10 giờ"], "answer": 0, "level": "easy" },
        { "question": "20 phút 30 giây : 5 = ?", "options": ["4 phút 6 giây", "4 phút 30 giây", "5 phút", "4 phút 10 giây"], "answer": 0, "level": "easy" },
        { "question": "10 phút 40 giây : 8 = ?", "options": ["1 phút 20 giây", "1 phút 10 giây", "2 phút", "1 phút 30 giây"], "answer": 0, "level": "medium" },
        { "question": "1 giờ : 3 = ?", "options": ["20 phút", "15 phút", "10 phút", "30 phút"], "answer": 0, "level": "medium" },
        { "question": "5 giờ 20 phút : 4 = ?", "options": ["1 giờ 20 phút", "1 giờ 10 phút", "1 giờ 5 phút", "2 giờ"], "answer": 0, "level": "hard" },
        { "question": "2 giờ 15 phút : 3 = ?", "options": ["45 phút", "30 phút", "1 giờ", "40 phút"], "answer": 0, "level": "hard" }
    ]
};

window.lesson134 = {
    state: {
        score: { s1: 0, s2: 0, s3: 0, s4: 0, s5: 0 },
        attempts: { s1: 0, s2: 0, s3: 0, s4: 0, s5: 0 }
    },

    init() {
        console.log("Lesson 134 initialized");
    },

    // Bài 1a: 8h20p : 2
    submitEx1a() {
        const val = document.getElementById('ans-134-1a').value.trim().toLowerCase();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s1++;
        const isCorrect = (val === '4 giờ 10 phút' || val === '4 gio 10 phut');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Thực hiện chia:</p>
                <p class='font-mono ml-4 text-blue-600'>8 giờ : 2 = 4 giờ</p>
                <p class='font-mono ml-4 text-blue-600'>20 phút : 2 = 10 phút</p>
                <p class='text-emerald-600 font-bold'>Kết quả: 4 giờ 10 phút</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "4 giờ 10 phút", val, "Chia từng đơn vị: 8:2=4 giờ; 20:2=10 phút.", solution);
        window.submitMathLesson("Bài 1a: Chia giờ phút", score, "ex-134-1a", this.state.attempts.s1, 5, isCorrect ? 1 : 0);
    },

    // Bài 1b: 20p30s : 5
    submitEx1b() {
        const val = document.getElementById('ans-134-1b').value.trim().toLowerCase();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s2++;
        const isCorrect = (val === '4 phút 6 giây' || val === '4 phut 6 giay' || val === '4 phút 06 giây');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Thực hiện chia:</p>
                <p class='font-mono ml-4 text-blue-600'>20 phút : 5 = 4 phút</p>
                <p class='font-mono ml-4 text-blue-600'>30 giây : 5 = 6 giây</p>
                <p class='text-emerald-600 font-bold'>Kết quả: 4 phút 6 giây</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "4 phút 6 giây", val, "Chia từng đơn vị: 20:5=4 phút; 30:5=6 giây.", solution);
        window.submitMathLesson("Bài 1b: Chia phút giây", score, "ex-134-1b", this.state.attempts.s2, 5, isCorrect ? 1 : 0);
    },

    // Bài 2a: 10p40s : 8
    submitEx2a() {
        const val = document.getElementById('ans-134-2a').value.trim().toLowerCase();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s3++;
        const isCorrect = (val === '1 phút 20 giây' || val === '1 phut 20 giay');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>10 phút : 8 = 1 phút (dư 2 phút)</p>
                <p>Đổi 2 phút dư = 120 giây. Cộng với 40 giây có sẵn = 160 giây.</p>
                <p>160 giây : 8 = 20 giây.</p>
                <p class='text-emerald-600 font-bold'>Kết quả: 1 phút 20 giây</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "1 phút 20 giây", val, "Đổi 2 phút dư sang 120 giây rồi cộng tiếp.", solution);
        window.submitMathLesson("Bài 2a: Chia đổi đơn vị", score, "ex-134-2a", this.state.attempts.s3, 5, isCorrect ? 1 : 0);
    },

    // Bài 2b: 5h20p : 4
    submitEx2b() {
        const val = document.getElementById('ans-134-2b').value.trim().toLowerCase();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s4++;
        const isCorrect = (val === '1 giờ 20 phút' || val === '1 gio 20 phut');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>5 giờ : 4 = 1 giờ (dư 1 giờ)</p>
                <p>Đổi 1 giờ dư = 60 phút. Cộng với 20 phút có sẵn = 80 phút.</p>
                <p>80 phút : 4 = 20 phút.</p>
                <p class='text-emerald-600 font-bold'>Kết quả: 1 giờ 20 phút</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "1 giờ 20 phút", val, "Đổi 1 giờ dư sang 60 phút rồi cộng tiếp.", solution);
        window.submitMathLesson("Bài 2b: Chia đổi đơn vị giờ", score, "ex-134-2b", this.state.attempts.s4, 5, isCorrect ? 1 : 0);
    },

    // Bài 3: Trung bình sản phẩm
    submitEx3() {
        const val = document.getElementById('ans-134-3').value.trim().toLowerCase();
        if (!val) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s5++;
        const isCorrect = (val.includes('15 phút 30 giây') || val.includes('15 phut 30 giay') || val.includes('15,5 phút'));
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Trung bình một sản phẩm người đó làm hết số thời gian là:</p>
                <p class='font-bold ml-4 text-blue-600'>46 phút 30 giây : 3 = 15 phút 30 giây</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 15 phút 30 giây</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "15 phút 30 giây", val, "Lấy tổng thời gian chia cho số sản phẩm.", solution);
        window.submitMathLesson("Bài 3: Bài toán trung bình", score, "ex-134-3", this.state.attempts.s5, 5, isCorrect ? 1 : 0);
    }
};
