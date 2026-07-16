/**
 * Lesson 132: Trừ số đo thời gian (Tiết 2)
 * Kiến thức: Kỹ thuật trừ số đo thời gian, mượn đơn vị, múi giờ quốc tế.
 */

export const lesson132 = {
    metadata: {
        id: "132",
        title: "Trừ số đo thời gian (Tiết 2)",
        topic: "Số đo thời gian",
        week: "27",
        period: "132",
        description: "Học cách trừ số đo thời gian, xử lý trường hợp mượn đơn vị và tính toán múi giờ.",
        standard: "Chân trời sáng tạo"
    },

    lessonInfo: {
        id: "132",
        title: "BÀI 57. CỘNG, TRỪ SỐ ĐO THỜI GIAN (Tiết 2)",
        intro: "Chào mừng các em! Hôm nay chúng mình sẽ cùng học cách trừ các số đo thời gian và khám phá các múi giờ nhé!",
        objectives: [
            "Biết cách đặt tính và thực hiện phép trừ số đo thời gian.",
            "Xử lý được trường hợp số đo ở đơn vị nhỏ của số bị trừ bé hơn số đo tương ứng của số trừ (mượn đơn vị).",
            "Vận dụng tính toán chênh lệch thời gian trong thực tế và các múi giờ quốc tế."
        ],
        formula: [
            { label: "Trừ thẳng cột", value: "Đặt các đơn vị cùng loại thẳng hàng.", color: "cyan" },
            { label: "Mượn đơn vị", value: "Đổi 1 đơn vị lớn sang 60 đơn vị nhỏ nếu cần.", color: "sky" },
            { label: "Múi giờ", value: "Cộng hoặc trừ chênh lệch thời gian giữa các vùng.", color: "teal" }
        ]
    },

    quizPool: [
        { "question": "15 phút 40 giây - 10 phút 20 giây = ?", "options": ["5 phút 20 giây", "5 phút 10 giây", "5 phút 30 giây", "5 phút 60 giây"], "answer": 0, "level": "easy" },
        { "question": "12 giờ 30 phút - 2 giờ = ?", "options": ["10 giờ", "10 giờ 30 phút", "10 giờ 15 phút", "10 giờ 45 phút"], "answer": 1, "level": "easy" },
        { "question": "2 giờ - 30 phút = ?", "options": ["1 giờ", "1 giờ 15 phút", "1 giờ 30 phút", "2 giờ 30 phút"], "answer": 2, "level": "medium" },
        { "question": "5 phút 10 giây - 2 phút 20 giây = ?", "options": ["2 phút 50 giây", "3 phút 10 giây", "2 phút 40 giây", "3 phút 50 giây"], "answer": 0, "level": "medium" },
        { "question": "10 phút - 4 phút 45 giây = ?", "options": ["5 phút 15 giây", "6 phút 15 giây", "5 phút 45 giây", "6 phút 45 giây"], "answer": 0, "level": "hard" }
    ]
};

window.lesson132 = {
    state: {
        score: { s1: 0, s2: 0, s3: 0, s4: 0, s5: 0, s6: 0, s7: 0, s8: 0 },
        attempts: { s1: 0, s2: 0, s3: 0, s4: 0, s5: 0, s6: 0, s7: 0, s8: 0 },
        selected: { s1b: null, s2c: null, s3a: null }
    },

    init() {
        console.log("Lesson 132 initialized");
    },

    // Bài 1a1: 20p25s - 12p10s
    submitEx1a1() {
        const m = document.getElementById('ans-132-1-1-m').value.trim();
        const s = document.getElementById('ans-132-1-1-s').value.trim();
        if (!m || !s) { alert("Vui lòng nhập đầy đủ kết quả!"); return; }

        this.state.attempts.s1++;
        const isCorrect = (m === '8' && s === '15');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Đặt tính trừ thẳng cột:</p>
                <p class='font-mono ml-4 text-blue-600'>20 phút 25 giây - 12 phút 10 giây = 8 phút 15 giây</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 8 phút 15 giây</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "8 phút 15 giây", `${m} phút ${s} giây`, "Trừ thẳng cột: 20-12=8; 25-10=15.", solution);
        window.submitMathLesson("Bài 1a1: Trừ phút giây", score, "ex-132-1-1", this.state.attempts.s1, 8, isCorrect ? 1 : 0);
    },

    // Bài 1a2: 16h30 - 12h30
    submitEx1a2() {
        const h = document.getElementById('ans-132-1-2-h').value.trim();
        if (!h) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s2++;
        const isCorrect = (h === '4');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Đặt tính trừ thẳng cột:</p>
                <p class='font-mono ml-4 text-blue-600'>16 giờ 30 phút - 12 giờ 30 phút = 4 giờ 0 phút</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 4 giờ</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "4 giờ", `${h} giờ`, "Trừ thẳng cột: 16-12=4; 30-30=0.", solution);
        window.submitMathLesson("Bài 1a2: Trừ giờ phút", score, "ex-132-1-2", this.state.attempts.s2, 8, isCorrect ? 1 : 0);
    },

    // Bài 1b: Thời gian ô tô đi (Selection)
    selectEx1b(opt, btn) {
        this.state.selected.s1b = opt;
        document.querySelectorAll('.btn-132-1b-opt').forEach(b => b.classList.remove('ring-4', 'ring-cyan-400', 'bg-cyan-50', 'border-cyan-500'));
        btn.classList.add('ring-4', 'ring-cyan-400', 'bg-cyan-50', 'border-cyan-500');
    },

    submitEx1b() {
        if (!this.state.selected.s1b) { alert("Vui lòng chọn đáp án!"); return; }
        const opt = this.state.selected.s1b;
        this.state.attempts.s3++;
        const isCorrect = (opt === 'B');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Thời gian ô tô đi hết là:</p>
                <p class='font-bold ml-4 text-blue-600'>17 giờ 20 phút - 14 giờ 5 phút = 3 giờ 15 phút</p>
                <p class='text-emerald-600 font-bold'>Đáp án: B (3 giờ 15 phút)</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "B", opt, "Thời gian đi = Giờ đến - Giờ khởi hành.", solution);
        window.submitMathLesson("Bài 1b: Thời gian hành trình", score, "ex-132-1b", this.state.attempts.s3, 8, isCorrect ? 1 : 0);
    },

    // Bài 2a: 1h30 - 50p (Borrow)
    submitEx2a() {
        const m = document.getElementById('ans-132-2-a-m').value.trim();
        if (!m) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s4++;
        const isCorrect = (m === '40');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Đổi: 1 giờ 30 phút = 90 phút (Vì 1 giờ = 60 phút)</p>
                <p>90 phút - 50 phút = 40 phút</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 40 phút</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "40 phút", `${m} phút`, "Đổi 1 giờ sang phút rồi thực hiện phép trừ.", solution);
        window.submitMathLesson("Bài 2a: Trừ mượn giờ", score, "ex-132-2-a", this.state.attempts.s4, 8, isCorrect ? 1 : 0);
    },

    // Bài 2b: 8p20s - 5p40s (Borrow)
    submitEx2b() {
        const m = document.getElementById('ans-132-2-b-m').value.trim();
        const s = document.getElementById('ans-132-2-b-s').value.trim();
        if (!m || !s) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s5++;
        const isCorrect = (m === '2' && s === '40');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Đổi: 8 phút 20 giây = 7 phút 80 giây (Mượn 1 phút = 60 giây)</p>
                <p>7 phút 80 giây - 5 phút 40 giây = 2 phút 40 giây</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 2 phút 40 giây</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "2 phút 40 giây", `${m} phút ${s} giây`, "Mượn 1 phút đổi thành 60 giây để thực hiện phép trừ.", solution);
        window.submitMathLesson("Bài 2b: Trừ mượn phút", score, "ex-132-2-b", this.state.attempts.s5, 8, isCorrect ? 1 : 0);
    },

    // Bài 2c: Lùi giờ máy bay (Selection)
    selectEx2c(opt, btn) {
        this.state.selected.s2c = opt;
        document.querySelectorAll('.btn-132-2c-opt').forEach(b => b.classList.remove('ring-4', 'ring-emerald-400', 'bg-emerald-50', 'border-emerald-500'));
        btn.classList.add('ring-4', 'ring-emerald-400', 'bg-emerald-50', 'border-emerald-500');
    },

    submitEx2c() {
        if (!this.state.selected.s2c) { alert("Vui lòng chọn đáp án!"); return; }
        const opt = this.state.selected.s2c;
        this.state.attempts.s6++;
        const isCorrect = (opt === 'C');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Thời gian lùi lại là:</p>
                <p class='font-bold ml-4 text-blue-600'>7 giờ 20 phút - 6 giờ 30 phút = 6 giờ 80 phút - 6 giờ 30 phút = 50 phút</p>
                <p class='text-emerald-600 font-bold'>Đáp án: C (50 phút)</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "C", opt, "Lấy giờ thực tế trừ giờ dự kiến.", solution);
        window.submitMathLesson("Bài 2c: Thời gian hoãn chuyến", score, "ex-132-2c", this.state.attempts.s6, 8, isCorrect ? 1 : 0);
    },

    // Bài 3a: New York time (Selection)
    selectEx3a(opt, btn) {
        this.state.selected.s3a = opt;
        document.querySelectorAll('.btn-132-3a-opt').forEach(b => b.classList.remove('ring-4', 'ring-sky-400', 'bg-sky-50', 'border-sky-500'));
        btn.classList.add('ring-4', 'ring-sky-400', 'bg-sky-50', 'border-sky-500');
    },

    submitEx3a() {
        if (!this.state.selected.s3a) { alert("Vui lòng chọn đáp án!"); return; }
        const opt = this.state.selected.s3a;
        this.state.attempts.s7++;
        const isCorrect = (opt === 'C');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Theo bảng, New York chậm hơn Hà Nội 11 tiếng.</p>
                <p>11 giờ 30 phút - 11 giờ = 0 giờ 30 phút.</p>
                <p>Vẫn thuộc ngày 1 tháng 6 vì 0h30 là đầu ngày.</p>
                <p class='text-emerald-600 font-bold'>Đáp án: C (0 giờ 30 phút ngày 1/6)</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "C", opt, "New York chậm hơn Hà Nội 11 tiếng.", solution);
        window.submitMathLesson("Bài 3a: Múi giờ New York", score, "ex-132-3a", this.state.attempts.s7, 8, isCorrect ? 1 : 0);
    },

    // Bài 3b: City matching
    submitEx3b() {
        const c1 = document.getElementById('ans-132-3b-1').value;
        const c2 = document.getElementById('ans-132-3b-2').value;
        const c3 = document.getElementById('ans-132-3b-3').value;
        if (!c1 || !c2 || !c3) { alert("Vui lòng chọn đủ thành phố!"); return; }

        this.state.attempts.s8++;
        let correctCount = 0;
        if (c1 === 'Paris') correctCount++;
        if (c2 === 'New York') correctCount++;
        if (c3 === 'Singapore') correctCount++;

        const isCorrect = (correctCount === 3);
        const score = Math.round((correctCount / 3) * 100);

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Khi Hà Nội là 12h00 ngày 1/6:</p>
                <ul class='list-disc pl-5'>
                    <li>Paris (chậm 5 tiếng): 12h - 5h = 7h00.</li>
                    <li>New York (chậm 11 tiếng): 12h - 11h = 1h00.</li>
                    <li>Singapore (nhanh hơn 1 tiếng): 12h + 1h = 13h00.</li>
                </ul>
            </div>
        `;
        window.showMathFeedback(isCorrect, "Paris, New York, Singapore", `${c1}, ${c2}, ${c3}`, "So sánh sự chênh lệch thời gian giữa các thành phố.", solution);
        window.submitMathLesson("Bài 3b: Nối múi giờ", score, "ex-132-3b", this.state.attempts.s8, 8, correctCount);
    }
};
