/**
 * @file index.js
 * @description Standardized Lesson 139: Bài 60. Quãng đường, thời gian của một chuyển động đều (tiết 2)
 * Targets: 100% SGK compliance (Trang 79-80), 3 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-139",
    period: "139",
    title: "Bài 60. Quãng đường, thời gian của một chuyển động đều (tiết 2)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 60. QUÃNG ĐƯỜNG, THỜI GIAN CỦA MỘT CHUYỂN ĐỘNG ĐỀU (TIẾT 2)",
    description: "Tìm hiểu cách tính thời gian khi biết quãng đường và vận tốc chuyển động. Công thức t = s : v.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 79-80"
};

// 2. HTML Content (Khám phá / Tìm hiểu bài - Trang 79)
const lesson139Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <!-- Hình ảnh Khám phá SGK Trang 79 -->
            <div class="p-6 bg-white rounded-[32px] border-2 border-blue-100 shadow-md flex items-center justify-center">
                <img src="assets/images/toan/toan_tap_2/139/139-khampha.png" alt="Khám phá Thời gian" class="rounded-2xl w-full max-w-[75%] h-auto mx-auto shadow-sm">
            </div>

            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">⏱️ TÍNH THỜI GIAN CỦA MỘT CHUYỂN ĐỘNG ĐỀU</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <!-- Bài toán mẫu SGK -->
                <div class="p-6 bg-blue-50/50 rounded-3xl border border-blue-100 space-y-3">
                    <p class="text-xl md:text-2xl font-black text-blue-900">📌 Bài toán mẫu:</p>
                    <p class="text-lg md:text-xl font-bold text-slate-800">Một ô tô đi được quãng đường dài 120 km với vận tốc 60 km/h. Tính thời gian ô tô đi quãng đường đó.</p>
                    <div class="p-4 bg-white rounded-2xl border border-blue-200 font-mono text-lg md:text-xl font-bold text-slate-800 space-y-1">
                        <p class="text-blue-700 font-black">Bài giải:</p>
                        <p>Thời gian ô tô đã đi là:</p>
                        <p class="text-blue-800 font-black pl-4">120 : 60 = 2 (giờ)</p>
                        <p class="pl-4">Đáp số: 2 giờ.</p>
                    </div>
                </div>

                <!-- Khung Ghi nhớ màu hồng SGK -->
                <div class="p-6 bg-rose-50 rounded-3xl border-2 border-rose-200 text-center space-y-3 shadow-sm">
                    <p class="text-xl md:text-2xl font-black text-rose-900">
                        • Muốn tính thời gian ta lấy quãng đường chia cho vận tốc.
                    </p>
                    <p class="text-lg md:text-xl font-bold text-slate-800">
                        • Gọi vận tốc là <span class="text-rose-700 font-mono font-black">v</span>, quãng đường là <span class="text-rose-700 font-mono font-black">s</span>, thời gian là <span class="text-rose-700 font-mono font-black">t</span>, ta có:
                    </p>
                    <div class="inline-block bg-white px-8 py-3 rounded-full border-2 border-rose-300 shadow-md">
                        <span class="text-2xl md:text-3xl font-mono font-black text-rose-700">t = s : v</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 3 Slide phụ - Trang 80)
const lesson139Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 80) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Số ?</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Sau trận lũ quét, thầy Nam đi bộ trở lại điểm trường cách nơi xuất phát 9 km. Do đường đi nhiều đồi núi nên thầy chỉ đi được với vận tốc 1,5 km/h. Thời gian trở lại điểm trường của thầy Nam là bao nhiêu giờ?</p>
                        </div>
                    </div>

                    <!-- Hình Thầy Nam SGK Trang 80 -->
                    <div class="mb-8 text-center">
                        <img src="assets/images/toan/toan_tap_2/139/139-1-thay-nam.png" alt="Thầy Nam đi bộ" class="rounded-2xl w-full h-auto max-h-[260px] object-contain shadow-sm mx-auto">
                    </div>

                    <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 mb-8 text-left">
                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                            <span class="text-blue-900 font-extrabold">Thời gian trở lại điểm trường của thầy Nam là =</span>
                            <span class="inline-flex items-center flex-nowrap gap-2">
                                <input type="number" id="ans-139-1" class="w-28 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">giờ</span>
                            </span>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-139-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        Thời gian trở lại điểm trường của thầy Nam là:<br>
                        9 : 1,5 = 6 (giờ).<br>
                        Đáp số: 6 giờ.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-139-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-139-1" onclick="window.submitEx139_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 80) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Tính thời gian trượt tuyết</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Một vận động viên khuyết tật trượt tuyết với vận tốc là 24 m/s. Hỏi vận động viên đó hoàn thành quãng đường 600 m trong thời gian bao lâu?</p>
                        </div>
                    </div>

                    <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 mb-8 text-left">
                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                            <span class="text-teal-900 font-extrabold">Hoàn thành quãng đường 600 m trong thời gian =</span>
                            <span class="inline-flex items-center flex-nowrap gap-2">
                                <input type="number" id="ans-139-2" class="w-28 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">giây</span>
                            </span>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-139-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        Vận động viên đó hoàn thành quãng đường 600 m trong thời gian là:<br>
                        600 : 24 = 25 (giây).<br>
                        Đáp số: 25 giây.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-139-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-139-2" onclick="window.submitEx139_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 3 (Trang 80) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3. Chọn câu trả lời đúng</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Một chiếc thuyền xuôi dòng từ thành phố A đi đến thành phố B cách 75 km với vận tốc 30 km/h. Sau đó thuyền ngược dòng từ thành phố B trở về thành phố A với vận tốc 25 km/h. Thời gian về dài hơn thời gian đi là bao nhiêu?</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
                        <button onclick="window.lesson139SelectMCQ('139-3', 'A')" id="btn-139-3-A" class="mcq-btn p-5 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black text-xl md:text-2xl">A</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">0,5 giờ</span>
                        </button>
                        <button onclick="window.lesson139SelectMCQ('139-3', 'B')" id="btn-139-3-B" class="mcq-btn p-5 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black text-xl md:text-2xl">B</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">1 giờ</span>
                        </button>
                        <button onclick="window.lesson139SelectMCQ('139-3', 'C')" id="btn-139-3-C" class="mcq-btn p-5 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black text-xl md:text-2xl">C</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">1,5 giờ</span>
                        </button>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-139-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        Thời gian thuyền đi xuôi dòng từ A đến B là: 75 : 30 = 2,5 (giờ).<br>
                        Thời gian thuyền đi ngược dòng từ B về A là: 75 : 25 = 3 (giờ).<br>
                        Thời gian về dài hơn thời gian đi là: 3 − 2,5 = 0,5 (giờ).<br>
                        Đáp án đúng là A (0,5 giờ).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-139-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-139-3" onclick="window.submitEx139_3()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson139QuizPool = [
    { question: "Muốn tính thời gian ta lấy:", options: ["Quãng đường chia cho Vận tốc", "Quãng đường nhân với Vận tốc", "Vận tốc chia cho Quãng đường", "Quãng đường cộng với Vận tốc"], answer: 0, level: "easy" },
    { question: "Công thức tính thời gian là:", options: ["t = s : v", "t = s × v", "v = s : t", "s = v × t"], answer: 0, level: "easy" },
    { question: "s = 120 km, v = 60 km/h. Thời gian là:", options: ["2 giờ", "3 giờ", "4 giờ", "1 giờ"], answer: 0, level: "easy" },
    { question: "s = 9 km, v = 1,5 km/h. Thời gian là:", options: ["6 giờ", "5 giờ", "4 giờ", "7 giờ"], answer: 0, level: "easy" },
    { question: "s = 600 m, v = 24 m/s. Thời gian là:", options: ["25 giây", "20 giây", "30 giây", "15 giây"], answer: 0, level: "medium" },
    { question: "s = 75 km, v = 30 km/h. Thời gian là:", options: ["2,5 giờ", "2 giờ", "3 giờ", "1,5 giờ"], answer: 0, level: "medium" },
    { question: "s = 75 km, v = 25 km/h. Thời gian là:", options: ["3 giờ", "2,5 giờ", "3,5 giờ", "2 giờ"], answer: 0, level: "medium" },
    { question: "3 giờ − 2,5 giờ = ?", options: ["0,5 giờ", "1 giờ", "0,2 giờ", "1,5 giờ"], answer: 0, level: "easy" },
    { question: "s = 150 km, v = 50 km/h. Thời gian là:", options: ["3 giờ", "2 giờ", "4 giờ", "5 giờ"], answer: 0, level: "easy" },
    { question: "s = 200 m, v = 5 m/s. Thời gian là:", options: ["40 giây", "50 giây", "30 giây", "20 giây"], answer: 0, level: "easy" },
    { question: "0,5 giờ đổi ra phút bằng:", options: ["30 phút", "15 phút", "20 phút", "50 phút"], answer: 0, level: "easy" },
    { question: "s = 180 km, v = 90 km/h. Thời gian là:", options: ["2 giờ", "3 giờ", "1 giờ", "4 giờ"], answer: 0, level: "easy" },
    { question: "s = 100 m, v = 10 m/s. Thời gian là:", options: ["10 giây", "5 giây", "20 giây", "15 giây"], answer: 0, level: "easy" },
    { question: "s = 240 km, v = 60 km/h. Thời gian là:", options: ["4 giờ", "3 giờ", "5 giờ", "2 giờ"], answer: 0, level: "easy" },
    { question: "s = 45 km, v = 15 km/h. Thời gian là:", options: ["3 giờ", "2 giờ", "4 giờ", "5 giờ"], answer: 0, level: "medium" }
];

// 5. Global Handlers & State
window.lesson139State = {
    attempts: { s1: 0, s2: 0, s3: 0 },
    mcq: { s3: null }
};

window.lesson139SelectMCQ = function (exId, option) {
    if (exId === '139-3') {
        window.lesson139State.mcq.s3 = option;
        ['A', 'B', 'C'].forEach(opt => {
            const btn = document.getElementById(`btn-139-3-${opt}`);
            if (btn) {
                if (opt === option) {
                    btn.className = "mcq-btn p-5 bg-sky-100 border-4 border-sky-600 rounded-2xl flex items-center gap-3 shadow-md scale-105 transition-all";
                } else {
                    btn.className = "mcq-btn p-5 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 transition-all opacity-70";
                }
            }
        });
    }
};

window.submitEx139_1 = function () {
    window.lesson139State.attempts.s1++;
    const t = document.getElementById('ans-139-1')?.value.trim();

    if (!t) {
        alert("Em hãy nhập thời gian của thầy Nam!");
        return;
    }

    const isCorrect = (t === '6');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "6 giờ",
        `${t} giờ`,
        "Em hãy lấy quãng đường (9 km) chia cho vận tốc (1,5 km/h) theo công thức t = s : v nhé!",
        `
        Thời gian trở lại điểm trường của thầy Nam là:<br>
        9 : 1,5 = 6 (giờ).<br>
        Đáp số: 6 giờ.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-139-1", window.lesson139State.attempts.s1, 1, isCorrect ? 1 : 0);
};

window.submitEx139_2 = function () {
    window.lesson139State.attempts.s2++;
    const t = document.getElementById('ans-139-2')?.value.trim();

    if (!t) {
        alert("Em hãy nhập thời gian của vận động viên!");
        return;
    }

    const isCorrect = (t === '25');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "25 giây",
        `${t} giây`,
        "Em hãy lấy quãng đường (600 m) chia cho vận tốc (24 m/s) theo công thức t = s : v nhé!",
        `
        Vận động viên đó hoàn thành quãng đường 600 m trong thời gian là:<br>
        600 : 24 = 25 (giây).<br>
        Đáp số: 25 giây.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-139-2", window.lesson139State.attempts.s2, 1, isCorrect ? 1 : 0);
};

window.submitEx139_3 = function () {
    window.lesson139State.attempts.s3++;
    const selected = window.lesson139State.mcq.s3;

    if (!selected) {
        alert("Em hãy lựa chọn câu trả lời!");
        return;
    }

    const isCorrect = (selected === 'A');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "A. 0,5 giờ",
        `Câu ${selected}`,
        "Em hãy tính thời gian xuôi dòng (75 : 30) và thời gian ngược dòng (75 : 25), rồi lấy thời gian ngược dòng trừ đi thời gian xuôi dòng nhé!",
        `
        Thời gian thuyền đi xuôi dòng từ A đến B là: 75 : 30 = 2,5 (giờ).<br>
        Thời gian thuyền đi ngược dòng từ B về A là: 75 : 25 = 3 (giờ).<br>
        Thời gian về dài hơn thời gian đi là: 3 − 2,5 = 0,5 (giờ).<br>
        Đáp án đúng là A (0,5 giờ).
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-139-3", window.lesson139State.attempts.s3, 1, isCorrect ? 1 : 0);
};

// 6. Main Lesson Export
export default {
    metadata,
    lessonInfo,
    content: lesson139Content,
    practice: lesson139Practice,
    quizPool: lesson139QuizPool,
    onLoad: () => {
        console.log("Lesson 139 Loaded: Bài 60. Quãng đường, thời gian của một chuyển động đều (tiết 2)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};
