/**
 * @file index.js
 * @description Standardized Lesson 127: Bài 55. Luyện tập chung (tiết 1)
 * Targets: 100% SGK compliance, showMathFeedback (5-param), submitMathLesson (6-param).
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-127",
    period: "127",
    title: "Bài 55. Luyện tập chung (tiết 1)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 55. LUYỆN TẬP CHUNG (TIẾT 1)",
    description: "Ôn tập hình khai triển, diện tích xung quanh, diện tích toàn phần và thể tích hình hộp chữ nhật, hình lập phương.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 60-61"
};

// 2. HTML Content (Tìm hiểu bài)
const lesson127Content = `
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
const lesson127Practice = `
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
                                <p class="text-2xl md:text-3xl text-slate-800 leading-relaxed font-black tracking-tight">Mai có thể gấp hình khai triển ở trên thành chiếc hộp nào?</p>
                            </div>
                        </div>
                        
                    </div>

                    <div class="p-6 bg-blue-50/50 rounded-3xl mb-8 flex justify-center border border-blue-100">
                        <img src="assets/images/toan/toan_tap_2/127/127-1-de.webp" alt="Hình khai triển" class="max-w-full h-auto rounded-2xl shadow-sm">
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        <button onclick="window.lesson127SelectMCQ('127-1', 'A')" id="btn-127-1-A" class="mcq-btn p-4 bg-white border-2 border-blue-100 rounded-3xl flex flex-col items-center gap-3 hover:border-blue-400 transition-all">
                            <img src="assets/images/toan/toan_tap_2/127/127-1-A.webp" alt="Hộp A" class="h-28 md:h-36 object-contain">
                            <span class="font-black text-xl md:text-2xl text-slate-700 uppercase">A. Hình A</span>
                        </button>
                        <button onclick="window.lesson127SelectMCQ('127-1', 'B')" id="btn-127-1-B" class="mcq-btn p-4 bg-white border-2 border-blue-100 rounded-3xl flex flex-col items-center gap-3 hover:border-blue-400 transition-all">
                            <img src="assets/images/toan/toan_tap_2/127/127-1-B.webp" alt="Hộp B" class="h-28 md:h-36 object-contain">
                            <span class="font-black text-xl md:text-2xl text-slate-700 uppercase">B. Hình B</span>
                        </button>
                        <button onclick="window.lesson127SelectMCQ('127-1', 'C')" id="btn-127-1-C" class="mcq-btn p-4 bg-white border-2 border-blue-100 rounded-3xl flex flex-col items-center gap-3 hover:border-blue-400 transition-all">
                            <img src="assets/images/toan/toan_tap_2/127/127-1-C.webp" alt="Hộp C" class="h-28 md:h-36 object-contain">
                            <span class="font-black text-xl md:text-2xl text-slate-700 uppercase">C. Hình C</span>
                        </button>
                        <button onclick="window.lesson127SelectMCQ('127-1', 'D')" id="btn-127-1-D" class="mcq-btn p-4 bg-white border-2 border-blue-100 rounded-3xl flex flex-col items-center gap-3 hover:border-blue-400 transition-all">
                            <img src="assets/images/toan/toan_tap_2/127/127-1-D.webp" alt="Hộp D" class="h-28 md:h-36 object-contain">
                            <span class="font-black text-xl md:text-2xl text-slate-700 uppercase">D. Hình D</span>
                        </button>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-127-1"E
                    <div class="flex justify-end items-center gap-4 mt-8">
                        
                        <button id=" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                        Hình khai triển ở trên gồm 1 hình chữ nhật uốn quanh và 2 hình tròn ở hai phía đối diện.<br>
                        Khi gấp hình khai triển này ta được một chiếc hộp dạng hình trụ (Hình B).<br>
                        Đáp án đúng là B.
                    " onclick="btn-submit-127-1" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">w-20 h-20 md:w-24 md:h-24 bg-blue-600 text-white rounded-3xl font-black text-4xl md:text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all</button>
                    </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-127-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-127-1" onclick="window.submitEx127_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 questions)
const lesson127QuizPool = [
    { "question": "Muốn tính diện tích xung quanh hình lập phương, ta lấy:", "options": ["S một mặt × 4", "S một mặt × 6", "cạnh × cạnh", "cạnh × 4"], "answer": 0, "level": 1 },
    { "question": "Diện tích một mặt hình lập phương cạnh 3 cm là:", "options": ["9 cm²", "6 cm²", "3 cm²", "27 cm²"], "answer": 0, "level": 1 },
    { "question": "Hình nào có 6 mặt đều là hình chữ nhật?", "options": ["Hình lập phương", "Hình hộp chữ nhật", "Hình cầu", "Hình trụ"], "answer": 1, "level": 1 },
    { "question": "Diện tích toàn phần hình lập phương bằng diện tích một mặt nhân với:", "options": ["2", "4", "6", "8"], "answer": 2, "level": 1 },
    { "question": "Hình hộp chữ nhật có mấy mặt xung quanh?", "options": ["2", "4", "6", "8"], "answer": 1, "level": 1 },
    { "question": "Diện tích xung quanh HLP cạnh 5 cm là:", "options": ["25 cm²", "100 cm²", "125 cm²", "150 cm²"], "answer": 1, "level": 2 },
    { "question": "Diện tích toàn phần HLP cạnh 4 cm là:", "options": ["16 cm²", "64 cm²", "96 cm²", "64 cm³"], "answer": 2, "level": 2 },
    { "question": "Sxq của HHCN chiều dài 5 cm, rộng 3 cm, cao 2 cm là:", "options": ["16 cm²", "32 cm²", "62 cm²", "30 cm²"], "answer": 1, "level": 2 },
    { "question": "HHCN dài 5 m, rộng 2 m, cao 1 m. Chu vi mặt đáy là:", "options": ["10 m", "14 m", "7 m", "14 m²"], "answer": 1, "level": 2 },
    { "question": "Một cái hộp không nắp hình LP cạnh 1 dm. Số mặt cần tính diện tích toàn phần là:", "options": ["4 mặt", "5 mặt", "6 mặt", "1 mặt"], "answer": 1, "level": 2 },
    { "question": "Stp của HLP là 150 cm². Diện tích 1 mặt là:", "options": ["15 cm²", "25 cm²", "30 cm²", "50 cm²"], "answer": 1, "level": 3 },
    { "question": "HHCN dài 8 cm, rộng 6 cm, cao 5 cm. Stp là:", "options": ["140 cm²", "236 cm²", "48 cm²", "240 cm²"], "answer": 1, "level": 3 },
    { "question": "Nếu tăng cạnh HLP lên gấp 2 lần, thì Sxq tăng gấp mấy lần?", "options": ["2 lần", "4 lần", "8 lần", "Không đổi"], "answer": 1, "level": 3 },
    { "question": "Một chiếc hộp gỗ HHCN kích thước 25×20×10 cm. Sxq là:", "options": ["900 cm²", "1000 cm²", "500 cm²", "1900 cm²"], "answer": 0, "level": 3 },
    { "question": "Một căn phòng HHCN dài 8 m, rộng 5 m, cao 4 m. Sxq của 4 bức tường là:", "options": ["104 m²", "40 m²", "184 m²", "200 m²"], "answer": 0, "level": 3 }
];

// 5. Logic & State Management
if (typeof window !== 'undefined') {
    window.lesson127State = {
        ex1: null,
        attempts: { s1: 0, s2: 0, s3: 0, s4: 0 }
    };
}

const getExColor = (exId) => {
    if (exId.includes('127-1')) return 'blue';
    if (exId.includes('127-2')) return 'teal';
    if (exId.includes('127-3')) return 'emerald';
    if (exId.includes('127-4')) return 'amber';
    return 'blue';
};

window.lesson127SelectMCQ = function (exId, option) {
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

    if (exId === '127-1') window.lesson127State.ex1 = option;
};

// --- Submission Handlers ---

window.submitEx127_1 = function () {
    window.lesson127State.attempts.s1++;
    const selected = window.lesson127State.ex1;
    if (!selected) {
        alert("Em hãy chọn một đáp án!");
        return;
    }

    const isCorrect = (selected === 'B');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "B. Hình B (Hình trụ)",
        `Hình ${selected}`,
        "Quan sát hình khai triển gồm 1 hình chữ nhật uốn quanh và 2 hình tròn ở hai đáy.",
        `
        Hình khai triển ở trên gồm 1 hình chữ nhật và 2 hình tròn ở hai phía đối diện.<br>
        Khi gấp hình khai triển này ta được chiếc hộp dạng hình trụ (Hình B).<br>
        Đáp án đúng là B.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-127-1", window.lesson127State.attempts.s1, 4, isCorrect ? 1 : 0);
};

window.submitEx127_2 = function () {
    window.lesson127State.attempts.s2++;
    const ansSxq1 = document.getElementById('ans-127-sxq1').value.trim();
    const ansSxq2 = document.getElementById('ans-127-sxq2').value.trim().replace(',', '.');
    const ansStp1 = document.getElementById('ans-127-stp1').value.trim();
    const ansStp2 = document.getElementById('ans-127-stp2').value.trim().replace(',', '.');

    if (!ansSxq1 || !ansSxq2 || !ansStp1 || !ansStp2) {
        alert("Em hãy điền đầy đủ cả 4 ô trống!");
        return;
    }

    const cSxq1 = (ansSxq1 === '256');
    const cSxq2 = (ansSxq2 === '1' || ansSxq2 === '1.0');
    const cStp1 = (ansStp1 === '384');
    const cStp2 = (ansStp2 === '1.5' || ansStp2 === '1.50');

    const correctCount = (cSxq1 ? 1 : 0) + (cSxq2 ? 1 : 0) + (cStp1 ? 1 : 0) + (cStp2 ? 1 : 0);
    const isCorrect = correctCount === 4;
    const score = Math.round((correctCount / 4) * 100);

    window.showMathFeedback(
        isCorrect,
        "256 dm², 1 m², 384 dm², 1,5 m²",
        `Sxq: ${ansSxq1} dm², ${ansSxq2} m²; Stp: ${ansStp1} dm², ${ansStp2} m²`,
        "Sxq = a × a × 4 và Stp = a × a × 6.",
        `
        • Hộp thứ nhất (cạnh 8 dm):<br>
        - Sxq = 8 &times; 8 &times; 4 = 256 (dm²)<br>
        - Stp = 8 &times; 8 &times; 6 = 384 (dm²)<br>
        • Hộp thứ hai (cạnh 0,5 m):<br>
        - Sxq = 0,5 &times; 0,5 &times; 4 = 1 (m²)<br>
        - Stp = 0,5 &times; 0,5 &times; 6 = 1,5 (m²)
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-127-2", window.lesson127State.attempts.s2, 4, isCorrect ? 1 : 0);
};

window.submitEx127_3 = function () {
    window.lesson127State.attempts.s3++;
    const ans = document.getElementById('ans-127-3').value.trim();

    if (!ans) {
        alert("Em hãy điền thể tích của chiếc hộp!");
        return;
    }

    const isCorrect = (ans === '24');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "24 cm³",
        `${ans} cm³`,
        "Đếm số ô vuông trên lưới (mỗi ô 1 cm) để xác định chiều dài, chiều rộng, chiều cao của hình hộp chữ nhật rồi tính V = a × b × c.",
        `
        Dựa vào hình khai triển trên lưới ô vuông (mỗi ô 1 cm &times; 1 cm), chiếc hộp dạng hình hộp chữ nhật có:<br>
        - Chiều dài: 4 cm<br>
        - Chiều rộng: 3 cm<br>
        - Chiều cao: 2 cm<br>
        Thể tích của chiếc hộp là:<br>
        4 &times; 3 &times; 2 = 24 (cm³).<br>
        Đáp số: 24 cm³.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-127-3", window.lesson127State.attempts.s3, 4, isCorrect ? 1 : 0);
};

window.submitEx127_4 = function () {
    window.lesson127State.attempts.s4++;
    const ans = document.getElementById('ans-127-4').value.trim();

    if (!ans) {
        alert("Em hãy điền diện tích phần được sơn màu nâu!");
        return;
    }

    const isCorrect = (ans === '900');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "900 cm²",
        `${ans} cm²`,
        "Diện tích phần được sơn màu nâu chính là diện tích xung quanh của chiếc hộp hình hộp chữ nhật.",
        `
        Diện tích phần được sơn màu nâu (chính là diện tích xung quanh của chiếc hộp) là:<br>
        (25 + 20) &times; 2 &times; 10 = 900 (cm²).<br>
        Đáp số: 900 cm².
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-127-4", window.lesson127State.attempts.s4, 4, isCorrect ? 1 : 0);
};

// 6. Main Lesson Export
export default {
    metadata,
    lessonInfo,
    content: lesson127Content,
    practice: lesson127Practice,
    quizPool: lesson127QuizPool,
    onLoad: () => {
        console.log("Lesson 127 Loaded: Bài 55. Luyện tập chung (tiết 1)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};
