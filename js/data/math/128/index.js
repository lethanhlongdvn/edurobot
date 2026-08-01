/**
 * @file index.js
 * @description Standardized Lesson 128: Bài 55. Luyện tập chung (tiết 2)
 * Targets: 100% SGK compliance, showMathFeedback (5-param), submitMathLesson (6-param).
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-128",
    period: "128",
    title: "Bài 55. Luyện tập chung (tiết 2)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 55. LUYỆN TẬP CHUNG (TIẾT 2)",
    description: "Vận dụng tổng hợp tính diện tích xung quanh, diện tích toàn phần và thể tích trong các bài toán thực tế.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 61-62"
};

// 2. HTML Content (Tìm hiểu bài)
const lesson128Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100">
                <h4 class="text-2xl md:text-3xl font-black text-blue-600 uppercase mb-4 tracking-widest text-center">📦 Hình Hộp Chữ Nhật</h4>
                <div class="space-y-3 text-lg md:text-xl font-bold text-slate-800">
                    <p class="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                        • Diện tích xung quanh: <br>
                        <span class="text-blue-700 font-black">S<sub>xq</sub> = (a + b) &times; 2 &times; c</span>
                    </p>
                    <p class="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                        • Diện tích toàn phần: <br>
                        <span class="text-blue-700 font-black">S<sub>tp</sub> = S<sub>xq</sub> + a &times; b &times; 2</span>
                    </p>
                    <p class="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                        • Thể tích: <br>
                        <span class="text-blue-700 font-black">V = a &times; b &times; c</span>
                    </p>
                </div>
            </div>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-emerald-100">
                <h4 class="text-2xl md:text-3xl font-black text-emerald-600 uppercase mb-4 tracking-widest text-center">🧊 Hình Lập Phương</h4>
                <div class="space-y-3 text-lg md:text-xl font-bold text-slate-800">
                    <p class="bg-emerald-50 p-3 rounded-2xl border border-emerald-100">
                        • Diện tích xung quanh: <br>
                        <span class="text-emerald-700 font-black">S<sub>xq</sub> = a &times; a &times; 4</span>
                    </p>
                    <p class="bg-emerald-50 p-3 rounded-2xl border border-emerald-100">
                        • Diện tích toàn phần: <br>
                        <span class="text-emerald-700 font-black">S<sub>tp</sub> = a &times; a &times; 6</span>
                    </p>
                    <p class="bg-emerald-50 p-3 rounded-2xl border border-emerald-100">
                        • Thể tích: <br>
                        <span class="text-emerald-700 font-black">V = a &times; a &times; a</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập)
const lesson128Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Bài 1 -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex justify-between items-start gap-6 mb-12 text-left animate-none">
                        <div class="flex items-start gap-6">
                            <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                            <div class="space-y-2">
                                <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Chọn câu trả lời đúng</h3>
                                <p class="text-2xl md:text-3xl text-slate-800 leading-relaxed font-black tracking-tight">Hình nào dưới đây là hình khai triển của một hình hộp chữ nhật?</p>
                            </div>
                        </div>
                        
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        <button onclick="window.lesson128SelectMCQ('128-1', 'A')" id="btn-128-1-A" class="mcq-btn p-4 bg-white border-2 border-blue-100 rounded-3xl flex flex-col items-center gap-3 hover:border-blue-400 transition-all">
                            <img src="assets/images/toan/toan_tap_2/128/128-1-A.webp" alt="Hình A" class="h-32 md:h-44 object-contain">
                            <span class="font-black text-xl md:text-2xl text-slate-700 uppercase">A. Hình A</span>
                        </button>
                        <button onclick="window.lesson128SelectMCQ('128-1', 'B')" id="btn-128-1-B" class="mcq-btn p-4 bg-white border-2 border-blue-100 rounded-3xl flex flex-col items-center gap-3 hover:border-blue-400 transition-all">
                            <img src="assets/images/toan/toan_tap_2/128/128-1-B.webp" alt="Hình B" class="h-32 md:h-44 object-contain">
                            <span class="font-black text-xl md:text-2xl text-slate-700 uppercase">B. Hình B</span>
                        </button>
                        <button onclick="window.lesson128SelectMCQ('128-1', 'C')" id="btn-128-1-C" class="mcq-btn p-4 bg-white border-2 border-blue-100 rounded-3xl flex flex-col items-center gap-3 hover:border-blue-400 transition-all">
                            <img src="assets/images/toan/toan_tap_2/128/128-1-C.webp" alt="Hình C" class="h-32 md:h-44 object-contain">
                            <span class="font-black text-xl md:text-2xl text-slate-700 uppercase">C. Hình C</span>
                        </button>
                        <button onclick="window.lesson128SelectMCQ('128-1', 'D')" id="btn-128-1-D" class="mcq-btn p-4 bg-white border-2 border-blue-100 rounded-3xl flex flex-col items-center gap-3 hover:border-blue-400 transition-all">
                            <img src="assets/images/toan/toan_tap_2/128/128-1-D.webp" alt="Hình D" class="h-32 md:h-44 object-contain">
                            <span class="font-black text-xl md:text-2xl text-slate-700 uppercase">D. Hình D</span>
                        </button>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-128-1"E
                    <div class="flex justify-end items-center gap-4 mt-8">
                        
                        <button id=" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                        Hình A gồm 4 mặt xung quanh và 2 mặt đáy đối diện có kích thước phù hợp.<br>
                        Khi gấp lại ta được một hình hộp chữ nhật hoàn chỉnh.<br>
                        Đáp án đúng là A.
                    " onclick="btn-submit-128-1" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">w-20 h-20 md:w-24 md:h-24 bg-blue-600 text-white rounded-3xl font-black text-4xl md:text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all</button>
                    </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-128-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-128-1" onclick="window.submitEx128_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
            </div>

            <!-- Bài 4 -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-amber-50 shadow-2xl relative overflow-hidden">
                    <div class="flex justify-between items-start gap-6 mb-12 text-left animate-none">
                        <div class="flex items-start gap-6">
                            <div class="w-14 h-14 md:w-16 md:h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">4</div>
                            <div class="space-y-2">
                                <h3 class="text-xl md:text-2xl font-black text-amber-700 block">Bài 4. Xếp hộp loa lên xe tải</h3>
                                <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Chú Tư xếp các hộp đựng loa lên xe tải có kích thước thùng xe như trong hình vẽ. Biết các hộp đều có dạng hình hộp chữ nhật với chiều dài 0,5 m, chiều rộng 0,4 m và chiều cao 0,3 m. Hỏi chú Tư có thể xếp được 64 hộp như vậy lên thùng xe hay không?</p>
                            </div>
                        </div>
                        
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
                        <div class="p-6 bg-white rounded-[32px] border border-amber-100 shadow-md flex items-center justify-center">
                            <img src="assets/images/toan/toan_tap_2/128/128-4.webp" alt="Xếp hộp loa lên xe tải" class="rounded-2xl max-w-full h-auto mx-auto shadow-sm">
                        </div>
                        <div class="space-y-6">
                            <p class="text-xl md:text-2xl font-black text-amber-900 uppercase">Trả lời của em:</p>
                            <div class="grid grid-cols-1 gap-4">
                                <button onclick="window.lesson128SelectMCQ('128-4', 'A')" id="btn-128-4-A" class="mcq-btn p-5 bg-white border-2 border-amber-200 rounded-2xl flex items-center gap-4 hover:border-amber-500 transition-all text-left">
                                    <span class="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-black text-xl">A</span>
                                    <span class="font-black text-xl md:text-2xl text-slate-800">Có thể xếp được 64 hộp</span>
                                </button>
                                <button onclick="window.lesson128SelectMCQ('128-4', 'B')" id="btn-128-4-B" class="mcq-btn p-5 bg-white border-2 border-amber-200 rounded-2xl flex items-center gap-4 hover:border-amber-500 transition-all text-left">
                                    <span class="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-black text-xl">B</span>
                                    <span class="font-black text-xl md:text-2xl text-slate-800">Không thể xếp được 64 hộp</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-128-4"E
                    <div class="flex justify-end items-center gap-4 mt-8">
                        
                        <button id=" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                        Số hộp loa xếp theo chiều dài thùng xe là:<br>
                        2 : 0,5 = 4 (hộp)<br>
                        Số hộp loa xếp theo chiều rộng thùng xe là:<br>
                        1,2 : 0,4 = 3 (hộp)<br>
                        Số hộp loa xếp theo chiều cao thùng xe là:<br>
                        1,5 : 0,3 = 5 (hộp)<br>
                        Số hộp loa xếp được tối đa lên thùng xe là:<br>
                        4 &times; 3 &times; 5 = 60 (hộp)<br>
                        Vì 60 < 64 nên chú Tư KHÔNG thể xếp được 64 hộp loa lên thùng xe.<br>
                        Đáp án đúng là B (Không thể xếp được 64 hộp).
                    " onclick="btn-submit-128-4" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">w-20 h-20 md:w-24 md:h-24 bg-amber-600 text-white rounded-3xl font-black text-4xl md:text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all</button>
                    </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-128-4')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-128-4" onclick="window.submitEx128_4()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 questions)
const lesson128QuizPool = [
    { "question": "Muốn tính diện tích xung quanh HHCN, ta lấy chu vi đáy nhân với:", "options": ["Chiều dài", "Chiều rộng", "Chiều cao (c)", "Diện tích đáy"], "answer": 2, "level": 1 },
    { "question": "Thể tích HLP cạnh 2 cm là:", "options": ["4 cm³", "8 cm³", "12 cm³", "16 cm³"], "answer": 1, "level": 1 },
    { "question": "HHCN có 3 kích thước: 4 dm, 3 dm, 2 dm. Thể tích là:", "options": ["24 dm³", "24 dm²", "14 dm³", "9 dm³"], "answer": 0, "level": 1 },
    { "question": "Sxq của HLP cạnh 5 m là:", "options": ["25 m²", "100 m²", "150 m²", "125 m²"], "answer": 1, "level": 1 },
    { "question": "Diện tích toàn phần HLP bằng diện tích một mặt nhân với:", "options": ["2", "4", "6", "8"], "answer": 2, "level": 1 },
    { "question": "HHCN dài 5 cm, rộng 4 cm, cao 3 cm. Diện tích mặt đáy là:", "options": ["20 cm²", "12 cm²", "15 cm²", "60 cm²"], "answer": 0, "level": 2 },
    { "question": "HLP có cạnh 0,5 m. Thể tích là:", "options": ["0,25 m³", "0,125 m³", "1,25 m³", "0,125 m²"], "answer": 1, "level": 2 },
    { "question": "Chu vi đáy của HHCN là 20 cm, chiều cao 5 cm. Sxq là:", "options": ["100 cm²", "100 cm³", "50 cm²", "400 cm²"], "answer": 0, "level": 2 },
    { "question": "Một hình khai triển của HHCN gồm có mấy mặt?", "options": ["4 mặt", "5 mặt", "6 mặt", "8 mặt"], "answer": 2, "level": 2 },
    { "question": "Đơn vị đo thể tích thường gặp là:", "options": ["cm", "cm²", "cm³", "kg"], "answer": 2, "level": 2 },
    { "question": "HLP có Sxq là 36 cm². Thể tích của nó là:", "options": ["9 cm³", "27 cm³", "54 cm³", "81 cm³"], "answer": 1, "level": 3 },
    { "question": "Gấp cạnh HLP lên 3 lần thì thể tích tăng lên:", "options": ["3 lần", "9 lần", "27 lần", "81 lần"], "answer": 2, "level": 3 },
    { "question": "HHCN có thể tích 60 cm³, dài 5 cm, rộng 4 cm. Chiều cao c là:", "options": ["3 cm", "4 cm", "5 cm", "12 cm"], "answer": 0, "level": 3 },
    { "question": "Bể bơi dài 10 m, rộng 5 m, sâu 2 m. Thể tích nước đầy bể là:", "options": ["50 m³", "100 m³", "70 m³", "100 m²"], "answer": 1, "level": 3 },
    { "question": "Để tính diện tích lát gạch bể bơi (không nắp), ta lấy:", "options": ["Sxq", "Stp", "Sxq + S đáy", "Sxq + 2 × S đáy"], "answer": 2, "level": 3 }
];

// 5. Logic & State Management
if (typeof window !== 'undefined') {
    window.lesson128State = {
        ex1: null,
        ex4: null,
        attempts: { s1: 0, s2: 0, s3: 0, s4: 0 }
    };
}

const getExColor = (exId) => {
    if (exId.includes('128-1')) return 'blue';
    if (exId.includes('128-2')) return 'teal';
    if (exId.includes('128-3')) return 'emerald';
    if (exId.includes('128-4')) return 'amber';
    return 'blue';
};

window.lesson128SelectMCQ = function (exId, option) {
    const color = getExColor(exId);
    const allBtns = document.querySelectorAll(`[id^="btn-${exId}-"]`);
    allBtns.forEach(btn => {
        btn.classList.remove(`bg-${color}-600`, 'text-white', `border-${color}-600`);
        btn.classList.add('bg-white', 'text-slate-700', `border-${color}-100`);
    });

    const selectedBtn = document.getElementById(`btn-${exId}-${option}`);
    if (selectedBtn) {
        selectedBtn.classList.remove('bg-white', 'text-slate-700', `border-${color}-100`);
        selectedBtn.classList.add(`bg-${color}-600`, 'text-white', `border-${color}-600`);
    }

    if (exId === '128-1') window.lesson128State.ex1 = option;
    if (exId === '128-4') window.lesson128State.ex4 = option;
};

// --- Submission Handlers ---

window.submitEx128_1 = function () {
    window.lesson128State.attempts.s1++;
    const selected = window.lesson128State.ex1;
    if (!selected) {
        alert("Em hãy chọn một đáp án!");
        return;
    }

    const isCorrect = (selected === 'A');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "A. Hình A",
        `Hình ${selected}`,
        "Quan sát các mặt hình chữ nhật ghép lại để tìm hình khai triển hợp lệ.",
        `
        Hình A gồm 4 mặt xung quanh và 2 mặt đáy đối diện có kích thước phù hợp.<br>
        Khi gấp lại ta được một hình hộp chữ nhật hoàn chỉnh.<br>
        Đáp án đúng là A.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-128-1", window.lesson128State.attempts.s1, 4, isCorrect ? 1 : 0);
};

window.submitEx128_2 = function () {
    window.lesson128State.attempts.s2++;
    const ansA = document.getElementById('ans-128-2-a').value.trim().replace(',', '.');
    const ansB = document.getElementById('ans-128-2-b').value.trim();

    if (!ansA || !ansB) {
        alert("Em hãy điền thể tích của cả hai hình!");
        return;
    }

    const cA = (ansA === '3' || ansA === '3.0');
    const cB = (ansB === '3375');

    const correctCount = (cA ? 1 : 0) + (cB ? 1 : 0);
    const isCorrect = correctCount === 2;
    const score = Math.round((correctCount / 2) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 3 dm³ ; b) 3375 cm³",
        `a) ${ansA} dm³ ; b) ${ansB} cm³`,
        "V HHCN = a × b × c và V HLP = a × a × a.",
        `
        a) Thể tích hình hộp chữ nhật là:<br>
        2 &times; 1 &times; 1,5 = 3 (dm³)<br><br>
        b) Thể tích hình lập phương là:<br>
        15 &times; 15 &times; 15 = 3 375 (cm³)<br><br>
        Đáp số: a) 3 dm³ ; b) 3 375 cm³.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-128-2", window.lesson128State.attempts.s2, 4, isCorrect ? 1 : 0);
};

window.submitEx128_3 = function () {
    window.lesson128State.attempts.s3++;
    const ans = document.getElementById('ans-128-3').value.trim().replace(',', '.');

    if (!ans) {
        alert("Em hãy điền diện tích lát gạch bể bơi!");
        return;
    }

    const isCorrect = (ans === '292.4' || ans === '292,4');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "292,4 m²",
        `${ans} m²`,
        "Bể bơi không có nắp nên diện tích lát gạch = Sxq + 1 diện tích đáy.",
        `
        Diện tích xung quanh bể bơi là:<br>
        (25 + 8) &times; 2 &times; 1,4 = 92,4 (m²)<br>
        Diện tích đáy bể bơi là:<br>
        25 &times; 8 = 200 (m²)<br>
        Diện tích lát gạch bể bơi là:<br>
        92,4 + 200 = 292,4 (m²)<br>
        Đáp số: 292,4 m².
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-128-3", window.lesson128State.attempts.s3, 4, isCorrect ? 1 : 0);
};

window.submitEx128_4 = function () {
    window.lesson128State.attempts.s4++;
    const selected = window.lesson128State.ex4;

    if (!selected) {
        alert("Em hãy lựa chọn câu trả lời!");
        return;
    }

    const isCorrect = (selected === 'B');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "B. Không thể xếp được 64 hộp",
        selected === 'A' ? 'A. Có thể' : 'B. Không thể',
        "Tính số hộp loa có thể xếp theo mỗi chiều: Dài (4 hộp), Rộng (3 hộp), Cao (5 hộp) để biết tổng số hộp tối đa.",
        `
        Số hộp loa xếp theo chiều dài thùng xe là:<br>
        2 : 0,5 = 4 (hộp)<br>
        Số hộp loa xếp theo chiều rộng thùng xe là:<br>
        1,2 : 0,4 = 3 (hộp)<br>
        Số hộp loa xếp theo chiều cao thùng xe là:<br>
        1,5 : 0,3 = 5 (hộp)<br>
        Số hộp loa xếp được tối đa lên thùng xe là:<br>
        4 &times; 3 &times; 5 = 60 (hộp)<br>
        Vì 60 < 64 nên chú Tư KHÔNG thể xếp được 64 hộp loa lên thùng xe.<br>
        Đáp án đúng là B (Không thể xếp được 64 hộp).
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-128-4", window.lesson128State.attempts.s4, 4, isCorrect ? 1 : 0);
};

// 6. Main Lesson Export
export default {
    metadata,
    lessonInfo,
    content: lesson128Content,
    practice: lesson128Practice,
    quizPool: lesson128QuizPool,
    onLoad: () => {
        console.log("Lesson 128 Loaded: Bài 55. Luyện tập chung (tiết 2)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};
