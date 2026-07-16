/**
 * Lesson 131: Cộng số đo thời gian (Tiết 1)
 * Kiến thức: Kỹ thuật cộng số đo thời gian, giải bài toán thực tế.
 */

export const lesson131 = {
    metadata: {
        id: "131",
        title: "Cộng số đo thời gian (Tiết 1)",
        topic: "Số đo thời gian",
        week: "27",
        period: "131",
        description: "Học cách đặt tính và tính cộng số đo thời gian, vận dụng vào tình huống thực tế.",
        standard: "Chân trời sáng tạo"
    },

    lessonInfo: {
        id: "131",
        title: "BÀI 57. CỘNG, TRỪ SỐ ĐO THỜI GIAN (Tiết 1)",
        intro: "Chào mừng các em! Hôm nay chúng mình sẽ cùng học cách cộng các số đo thời gian nhé!",
        objectives: [
            "Biết cách đặt tính thẳng cột và thực hiện phép cộng số đo thời gian.",
            "Biết đổi đơn vị đo thời gian sang đơn vị lớn hơn khi kết quả có phần lẻ lớn hơn hoặc bằng 60.",
            "Vận dụng cộng số đo thời gian để giải các bài toán thực tế về lịch trình, thời gian biểu."
        ],
        formula: [
            { label: "Bước 1", value: "Đặt tính thẳng cột các đơn vị cùng loại.", color: "blue" },
            { label: "Bước 2", value: "Cộng từ phải sang trái theo từng loại đơn vị.", color: "teal" },
            { label: "Bước 3", value: "Đổi đơn vị lớn hơn nếu kết quả ≥ 60.", color: "emerald" }
        ]
    },

    quizPool: [
        { "question": "3 giờ 15 phút + 2 giờ 10 phút = ?", "options": ["5 giờ 15 phút", "5 giờ 25 phút", "6 giờ 25 phút", "5 giờ 35 phút"], "answer": 1, "level": "easy" },
        { "question": "45 phút + 30 phút = ?", "options": ["1 giờ 15 phút", "1 giờ 30 phút", "1 giờ 45 phút", "75 phút"], "answer": 0, "level": "easy" },
        { "question": "10 phút 20 giây + 5 phút 50 giây = ?", "options": ["15 phút 10 giây", "16 phút 10 giây", "15 phút 70 giây", "16 phút 20 giây"], "answer": 1, "level": "medium" },
        { "question": "An bắt đầu làm bài lúc 14 giờ 20 phút, làm xong sau 40 phút. An làm xong lúc?", "options": ["14 giờ 50 phút", "15 giờ", "15 giờ 10 phút", "14 giờ 60 phút"], "answer": 1, "level": "medium" },
        { "question": "Trong phép cộng số đo thời gian, nếu số phút ≥ 60, ta nên:", "options": ["Giữ nguyên", "Đổi sang giờ và cộng tiếp", "Chia cho 10", "Xóa đi"], "answer": 1, "level": "easy" }
    ]
};

window.lesson131 = {
    state: {
        score: { s1: 0, s2: 0, s3: 0, s4: 0, s5: 0, s6: 0 },
        attempts: { s1: 0, s2: 0, s3: 0, s4: 0, s5: 0, s6: 0 },
        selected: { s1b: null, s3: null }
    },

    init() {
        console.log("Lesson 131 initialized");
    },

    // Bài 1a1: 14h20 + 2h10
    submitEx1a1() {
        const h = document.getElementById('ans-131-1-1-h').value.trim();
        const m = document.getElementById('ans-131-1-1-m').value.trim();
        if (!h || !m) { alert("Vui lòng nhập đầy đủ kết quả!"); return; }

        this.state.attempts.s1++;
        const isCorrect = (h === '16' && m === '30');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Đặt tính:</p>
                <p class='font-mono ml-4 text-blue-600'>14 giờ 20 phút + 2 giờ 10 phút = 16 giờ 30 phút</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 16 giờ 30 phút</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "16 giờ 30 phút", `${h} giờ ${m} phút`, "Cộng thẳng cột: 14+2=16; 20+10=30.", solution);
        window.submitMathLesson("Bài 1a1: Cộng giờ phút", score, "ex-131-1-1", this.state.attempts.s1, 6, isCorrect ? 1 : 0);
    },

    // Bài 1a2: 10p20s + 5p30s
    submitEx1a2() {
        const m = document.getElementById('ans-131-1-2-m').value.trim();
        const s = document.getElementById('ans-131-1-2-s').value.trim();
        if (!m || !s) { alert("Vui lòng nhập đầy đủ kết quả!"); return; }

        this.state.attempts.s2++;
        const isCorrect = (m === '15' && s === '50');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Đặt tính:</p>
                <p class='font-mono ml-4 text-blue-600'>10 phút 20 giây + 5 phút 30 giây = 15 phút 50 giây</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 15 phút 50 giây</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "15 phút 50 giây", `${m} phút ${s} giây`, "Cộng thẳng cột: 10+5=15; 20+30=50.", solution);
        window.submitMathLesson("Bài 1a2: Cộng phút giây", score, "ex-131-1-2", this.state.attempts.s2, 6, isCorrect ? 1 : 0);
    },

    // Bài 1b: Đồng hồ chậm (Selection)
    selectEx1b(opt, btn) {
        this.state.selected.s1b = opt;
        document.querySelectorAll('.btn-131-1b-opt').forEach(b => b.classList.remove('ring-4', 'ring-blue-400', 'bg-blue-50', 'border-blue-500'));
        btn.classList.add('ring-4', 'ring-blue-400', 'bg-blue-50', 'border-blue-500');
    },

    submitEx1b() {
        if (!this.state.selected.s1b) { alert("Vui lòng chọn đáp án!"); return; }
        const opt = this.state.selected.s1b;
        this.state.attempts.s3++;
        const isCorrect = (opt === 'C');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Đồng hồ chạy chậm nghĩa là thời gian đúng đã trôi qua nhiều hơn so với thời gian trên đồng hồ.</p>
                <p>Thời gian đúng = Thời gian đồng hồ chỉ + Thời gian chậm</p>
                <p class='font-bold ml-4 text-blue-600'>14 giờ 30 phút + 25 phút = 14 giờ 55 phút</p>
                <p class='text-emerald-600 font-bold'>Đáp án: C (14 giờ 55 phút)</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "C", opt, "Đồng hồ chậm nên thời gian đúng phải cộng thêm phần bị chậm.", solution);
        window.submitMathLesson("Bài 1b: Đồng hồ chậm", score, "ex-131-1b", this.state.attempts.s3, 6, isCorrect ? 1 : 0);
    },

    // Bài 2a: 10h25 + 2h50 (Convert)
    submitEx2a() {
        const h = document.getElementById('ans-131-2-a-h').value.trim();
        const m = document.getElementById('ans-131-2-a-m').value.trim();
        if (!h || !m) { alert("Vui lòng nhập đầy đủ kết quả!"); return; }

        this.state.attempts.s4++;
        const isCorrect = (h === '13' && m === '15');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>10 giờ 25 phút + 2 giờ 50 phút = 12 giờ 75 phút</p>
                <p>Vì 75 phút = 1 giờ 15 phút, nên:</p>
                <p class='font-bold ml-4 text-blue-600'>12 giờ 75 phút = 13 giờ 15 phút</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 13 giờ 15 phút</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "13 giờ 15 phút", `${h} giờ ${m} phút`, "75 phút = 1 giờ 15 phút. Cộng 1 giờ vào 12 giờ.", solution);
        window.submitMathLesson("Bài 2a: Cộng chuyển đổi", score, "ex-131-2-a", this.state.attempts.s4, 6, isCorrect ? 1 : 0);
    },

    // Bài 2b: 2p40s + 1p20s (Convert)
    submitEx2b() {
        const m = document.getElementById('ans-131-2-b-m').value.trim();
        if (!m) { alert("Vui lòng nhập kết quả!"); return; }

        this.state.attempts.s5++;
        const isCorrect = (m === '4');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>2 phút 40 giây + 1 phút 20 giây = 3 phút 60 giây</p>
                <p>Vì 60 giây = 1 phút, nên:</p>
                <p class='font-bold ml-4 text-blue-600'>3 phút 60 giây = 4 phút</p>
                <p class='text-emerald-600 font-bold'>Đáp số: 4 phút</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "4 phút", `${m} phút`, "60 giây = 1 phút. Cộng 1 phút vào 3 phút.", solution);
        window.submitMathLesson("Bài 2b: Cộng chuyển đổi giây", score, "ex-131-2-b", this.state.attempts.s5, 6, isCorrect ? 1 : 0);
    },

    // Bài 3: Lăng Bác (Selection)
    selectEx3(opt, btn) {
        this.state.selected.s3 = opt;
        document.querySelectorAll('.btn-131-3-opt').forEach(b => b.classList.remove('ring-4', 'ring-sky-400', 'bg-sky-50', 'border-sky-500'));
        btn.classList.add('ring-4', 'ring-sky-400', 'bg-sky-50', 'border-sky-500');
    },

    submitEx3() {
        if (!this.state.selected.s3) { alert("Vui lòng chọn đáp án!"); return; }
        const opt = this.state.selected.s3;
        this.state.attempts.s6++;
        const isCorrect = (opt === 'D');
        const score = isCorrect ? 100 : 0;

        const solution = `
            <div class='mt-2 space-y-2'>
                <p>Tổng thời gian học sinh đi và thăm Lăng Bác là:</p>
                <p class='font-bold ml-4 text-blue-600'>50 phút + 1 giờ 30 phút = 1 giờ 80 phút = 2 giờ 20 phút</p>
                <p>Học sinh về đến trường lúc:</p>
                <p class='font-bold ml-4 text-blue-600'>8 giờ + 2 giờ 20 phút = 10 giờ 20 phút</p>
                <p class='text-emerald-600 font-bold'>Đáp án: D (10 giờ 20 phút)</p>
            </div>
        `;
        window.showMathFeedback(isCorrect, "D", opt, "Tổng thời gian = 8h + 50p + 1h30p = 10h20p.", solution);
        window.submitMathLesson("Bài 3: Thời gian về trường", score, "ex-131-3", this.state.attempts.s6, 6, isCorrect ? 1 : 0);
    }
};
