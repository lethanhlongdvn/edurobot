/**
 * @file index.js
 * @description Standardized Lesson 138: Bài 60. Quãng đường, thời gian của một chuyển động đều (tiết 1)
 * Targets: 100% SGK compliance (Trang 78-79), 3 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-138",
    period: "138",
    title: "Bài 60. Quãng đường, thời gian của một chuyển động đều (tiết 1)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 60. QUÃNG ĐƯỜNG, THỜI GIAN CỦA MỘT CHUYỂN ĐỘNG ĐỀU (TIẾT 1)",
    description: "Tìm hiểu cách tính quãng đường khi biết vận tốc và thời gian chuyển động. Công thức s = v × t.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 78-79"
};

// 2. HTML Content (Khám phá / Tìm hiểu bài - Trang 78)
const lesson138Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <!-- Hình ảnh Khám phá SGK Trang 78 -->
            <div class="p-6 bg-white rounded-[32px] border-2 border-blue-100 shadow-md flex items-center justify-center">
                <img src="assets/images/toan/toan_tap_2/138/138-khampha.png" alt="Khám phá Quãng đường" class="rounded-2xl w-full max-w-[75%] h-auto mx-auto shadow-sm">
            </div>

            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">🚗 TÍNH QUÃNG ĐƯỜNG CỦA MỘT CHUYỂN ĐỘNG ĐỀU</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <!-- Bài toán mẫu SGK -->
                <div class="p-6 bg-blue-50/50 rounded-3xl border border-blue-100 space-y-3">
                    <p class="text-xl md:text-2xl font-black text-blue-900">📌 Bài toán mẫu:</p>
                    <p class="text-lg md:text-xl font-bold text-slate-800">Một ô tô đi với vận tốc 65 km/h. Tính quãng đường ô tô đó đi được trong 2 giờ.</p>
                    <div class="p-4 bg-white rounded-2xl border border-blue-200 font-mono text-lg md:text-xl font-bold text-slate-800 space-y-1">
                        <p class="text-blue-700 font-black">Bài giải:</p>
                        <p>Quãng đường ô tô đi được trong 2 giờ là:</p>
                        <p class="text-blue-800 font-black pl-4">65 × 2 = 130 (km)</p>
                        <p class="pl-4">Đáp số: 130 km.</p>
                    </div>
                </div>

                <!-- Khung Ghi nhớ màu hồng SGK -->
                <div class="p-6 bg-rose-50 rounded-3xl border-2 border-rose-200 text-center space-y-3 shadow-sm">
                    <p class="text-xl md:text-2xl font-black text-rose-900">
                        • Muốn tính quãng đường ta lấy vận tốc nhân với thời gian.
                    </p>
                    <p class="text-lg md:text-xl font-bold text-slate-800">
                        • Gọi vận tốc là <span class="text-rose-700 font-mono font-black">v</span>, quãng đường là <span class="text-rose-700 font-mono font-black">s</span>, thời gian là <span class="text-rose-700 font-mono font-black">t</span>, ta có:
                    </p>
                    <div class="inline-block bg-white px-8 py-3 rounded-full border-2 border-rose-300 shadow-md">
                        <span class="text-2xl md:text-3xl font-mono font-black text-rose-700">s = v × t</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 3 Slide phụ - Trang 78-79)
const lesson138Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 78) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Số ?</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Một chiếc tàu biển đi với vận tốc 33,7 km/h. Quãng đường đi được của chiếc tàu đó trong 4 giờ là bao nhiêu ki-lô-mét?</p>
                        </div>
                    </div>

                    <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 mb-8 text-left">
                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                            <span class="text-blue-900 font-extrabold">Quãng đường chiếc tàu đi được trong 4 giờ là =</span>
                            <span class="inline-flex items-center flex-nowrap gap-2">
                                <input type="text" id="ans-138-1" class="w-32 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">km</span>
                            </span>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-138-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        Quãng đường đi được của chiếc tàu đó trong 4 giờ là:<br>
                        33,7 × 4 = 134,8 (km).<br>
                        Đáp số: 134,8 km.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-138-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-138-1" onclick="window.submitEx138_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 79) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Vận tốc bay của chim cắt</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Một chú chim cắt có thể bay với vận tốc 108 m/s. Hỏi trong 15 giây, chú chim cắt có thể bay được hơn 1 km hay không?</p>
                        </div>
                    </div>

                    <!-- Hình Chim cắt SGK Trang 79 -->
                    <div class="mb-8 text-center">
                        <img src="assets/images/toan/toan_tap_2/138/138-2-chim-cat.png" alt="Chim cắt bay" class="rounded-2xl w-full h-auto max-h-[260px] object-contain shadow-sm mx-auto">
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
                        <button onclick="window.lesson138SelectMCQ('138-2', 'A')" id="btn-138-2-A" class="mcq-btn p-6 bg-white border-2 border-teal-200 rounded-3xl flex items-center gap-4 hover:border-teal-500 transition-all">
                            <span class="w-12 h-12 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xl md:text-2xl">A</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">Có thể (Bay được hơn 1 km)</span>
                        </button>
                        <button onclick="window.lesson138SelectMCQ('138-2', 'B')" id="btn-138-2-B" class="mcq-btn p-6 bg-white border-2 border-teal-200 rounded-3xl flex items-center gap-4 hover:border-teal-500 transition-all">
                            <span class="w-12 h-12 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xl md:text-2xl">B</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">Không thể (Không bay được hơn 1 km)</span>
                        </button>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-138-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        Quãng đường chú chim cắt bay được trong 15 giây là:<br>
                        108 × 15 = 1 620 (m) = 1,62 km.<br>
                        Vì 1,62 km > 1 km nên chú chim cắt CÓ THỂ bay được hơn 1 km.<br>
                        Đáp án đúng là A (Có thể).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-138-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-138-2" onclick="window.submitEx138_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 3 (Trang 79) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3. Tính quãng đường xe máy về quê</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Dịp nghỉ lễ, chú Luân bắt đầu lái xe máy về quê lúc 7 giờ sáng. Chú ấy về đến nhà lúc 10 giờ sáng. Hỏi quãng đường về quê dài bao nhiêu ki-lô-mét, biết rằng chú Luân đi với vận tốc trung bình là 55 km/h?</p>
                        </div>
                    </div>

                    <!-- Hình Chú Luân đi xe máy SGK Trang 79 -->
                    <div class="mb-8 text-center">
                        <img src="assets/images/toan/toan_tap_2/138/138-3-xe-may.png" alt="Chú Luân lái xe máy về quê" class="rounded-2xl w-full h-auto max-h-[260px] object-contain shadow-sm mx-auto">
                    </div>

                    <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 mb-8 text-left">
                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                            <span class="text-sky-900 font-extrabold">Quãng đường về quê dài =</span>
                            <span class="inline-flex items-center flex-nowrap gap-2">
                                <input type="number" id="ans-138-3" class="w-32 h-14 border-2 border-sky-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-sky-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">km</span>
                            </span>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-138-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        Thời gian chú Luân lái xe máy về quê là:<br>
                        10 giờ − 7 giờ = 3 giờ.<br>
                        Quãng đường về quê dài là:<br>
                        55 × 3 = 165 (km).<br>
                        Đáp số: 165 km.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-138-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-138-3" onclick="window.submitEx138_3()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson138QuizPool = [
    { question: "Muốn tính quãng đường ta lấy:", options: ["Vận tốc nhân với Thời gian", "Vận tốc chia cho Thời gian", "Thời gian chia cho Vận tốc", "Vận tốc cộng với Thời gian"], answer: 0, level: "easy" },
    { question: "Công thức tính quãng đường là:", options: ["s = v × t", "v = s : t", "t = s : v", "s = v : t"], answer: 0, level: "easy" },
    { question: "Vận tốc 65 km/h, thời gian 2 giờ. Quãng đường là:", options: ["130 km", "120 km", "67 km", "135 km"], answer: 0, level: "easy" },
    { question: "Vận tốc 33,7 km/h, thời gian 4 giờ. Quãng đường là:", options: ["134,8 km", "132,8 km", "135 km", "134 km"], answer: 0, level: "easy" },
    { question: "Vận tốc 108 m/s, thời gian 15 giây. Quãng đường là:", options: ["1620 m", "1080 m", "1500 m", "1600 m"], answer: 0, level: "medium" },
    { question: "1620 m đổi ra ki-lô-mét bằng:", options: ["1,62 km", "16,2 km", "0,162 km", "162 km"], answer: 0, level: "easy" },
    { question: "Thời gian từ 7 giờ đến 10 giờ là:", options: ["3 giờ", "4 giờ", "2 giờ", "5 giờ"], answer: 0, level: "easy" },
    { question: "Vận tốc 55 km/h, thời gian 3 giờ. Quãng đường là:", options: ["165 km", "150 km", "160 km", "175 km"], answer: 0, level: "medium" },
    { question: "Người đi xe đạp 12 km/h trong 2 giờ. Quãng đường là:", options: ["24 km", "14 km", "10 km", "6 km"], answer: 0, level: "easy" },
    { question: "Xe máy đi 40 km/h trong 1,5 giờ. Quãng đường là:", options: ["60 km", "50 km", "45 km", "80 km"], answer: 0, level: "medium" },
    { question: "Con sóc chạy 5 m/s trong 10 giây. Quãng đường là:", options: ["50 m", "15 m", "5 m", "2 m"], answer: 0, level: "easy" },
    { question: "Máy bay bay 800 km/h trong 3 giờ. Quãng đường là:", options: ["2400 km", "1600 km", "803 km", "240 km"], answer: 0, level: "easy" },
    { question: "Tàu hỏa đi 70 km/h trong 4 giờ. Quãng đường là:", options: ["280 km", "210 km", "140 km", "300 km"], answer: 0, level: "easy" },
    { question: "Một người đi bộ 5 km/h trong 2 giờ. Quãng đường là:", options: ["10 km", "7 km", "3 km", "12 km"], answer: 0, level: "easy" },
    { question: "Vận tốc 15 m/s, thời gian 20 giây. Quãng đường là:", options: ["300 m", "150 m", "35 m", "200 m"], answer: 0, level: "medium" }
];

// 5. Global Handlers & State
window.lesson138State = {
    attempts: { s1: 0, s2: 0, s3: 0 },
    mcq: { s2: null }
};

window.lesson138SelectMCQ = function (exId, option) {
    if (exId === '138-2') {
        window.lesson138State.mcq.s2 = option;
        ['A', 'B'].forEach(opt => {
            const btn = document.getElementById(`btn-138-2-${opt}`);
            if (btn) {
                if (opt === option) {
                    btn.className = "mcq-btn p-6 bg-teal-100 border-4 border-teal-600 rounded-3xl flex items-center gap-4 shadow-md scale-105 transition-all";
                } else {
                    btn.className = "mcq-btn p-6 bg-white border-2 border-teal-200 rounded-3xl flex items-center gap-4 hover:border-teal-500 transition-all opacity-70";
                }
            }
        });
    }
};

window.submitEx138_1 = function () {
    window.lesson138State.attempts.s1++;
    const s = document.getElementById('ans-138-1')?.value.trim().replace(',', '.');

    if (!s) {
        alert("Em hãy nhập quãng đường chiếc tàu đi được!");
        return;
    }

    const isCorrect = (parseFloat(s) === 134.8);
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "134,8 km",
        `${s} km`,
        "Em hãy lấy vận tốc (33,7 km/h) nhân với thời gian (4 giờ) theo công thức s = v × t nhé!",
        `
        Quãng đường đi được của chiếc tàu đó trong 4 giờ là:<br>
        33,7 × 4 = 134,8 (km).<br>
        Đáp số: 134,8 km.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-138-1", window.lesson138State.attempts.s1, 1, isCorrect ? 1 : 0);
};

window.submitEx138_2 = function () {
    window.lesson138State.attempts.s2++;
    const selected = window.lesson138State.mcq.s2;

    if (!selected) {
        alert("Em hãy lựa chọn câu trả lời!");
        return;
    }

    const isCorrect = (selected === 'A');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "A. Có thể (1,62 km > 1 km)",
        `Câu ${selected}`,
        "Em hãy tính quãng đường chim cắt bay trong 15 giây (lấy 108 m/s × 15 s = ? m), rồi đổi sang km và so sánh với 1 km nhé!",
        `
        Quãng đường chú chim cắt bay được trong 15 giây là:<br>
        108 × 15 = 1 620 (m) = 1,62 km.<br>
        Vì 1,62 km > 1 km nên chú chim cắt CÓ THỂ bay được hơn 1 km.<br>
        Đáp án đúng là A (Có thể).
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-138-2", window.lesson138State.attempts.s2, 1, isCorrect ? 1 : 0);
};

window.submitEx138_3 = function () {
    window.lesson138State.attempts.s3++;
    const s = document.getElementById('ans-138-3')?.value.trim();

    if (!s) {
        alert("Em hãy nhập quãng đường về quê!");
        return;
    }

    const isCorrect = (s === '165');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "165 km",
        `${s} km`,
        "Em hãy tính thời gian chú Luân đi xe máy (lấy 10 giờ − 7 giờ = ? giờ), rồi lấy vận tốc (55 km/h) nhân với thời gian vừa tìm được nhé!",
        `
        Thời gian chú Luân lái xe máy về quê là:<br>
        10 giờ − 7 giờ = 3 giờ.<br>
        Quãng đường về quê dài là:<br>
        55 × 3 = 165 (km).<br>
        Đáp số: 165 km.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-138-3", window.lesson138State.attempts.s3, 1, isCorrect ? 1 : 0);
};

// 6. Main Lesson Export
export default {
    metadata,
    lessonInfo,
    content: lesson138Content,
    practice: lesson138Practice,
    quizPool: lesson138QuizPool,
    onLoad: () => {
        console.log("Lesson 138 Loaded: Bài 60. Quãng đường, thời gian của một chuyển động đều (tiết 1)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};
