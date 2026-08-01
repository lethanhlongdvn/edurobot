/**
 * @file index.js
 * @description Standardized Lesson 137: Bài 59. Vận tốc của một chuyển động đều (tiết 2)
 * Targets: 100% SGK compliance (Trang 77), 4 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-137",
    period: "137",
    title: "Bài 59. Vận tốc của một chuyển động đều (tiết 2)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 59. VẬN TỐC CỦA MỘT CHUYỂN ĐỘNG ĐỀU (TIẾT 2)",
    description: "Thực hành đổi đơn vị đo vận tốc và giải các bài toán nâng cao về vận tốc.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 77"
};

// 2. HTML Content (Khám phá / Ôn tập - Trang 77)
const lesson137Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">🚀 THỰC HÀNH VÀ ĐỔI ĐƠN VỊ VẬN TỐC</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <div class="p-6 bg-blue-50/50 rounded-3xl border border-blue-100 space-y-4">
                    <p class="text-xl md:text-2xl font-black text-blue-900">📌 Mẫu đổi từ km/h sang m/s:</p>
                    <div class="p-4 bg-white rounded-2xl border border-blue-200 text-lg md:text-xl font-mono font-bold text-slate-800 space-y-2">
                        <p><span class="text-blue-700 font-black">Mẫu:</span> 72 km/h = ? m/s</p>
                        <p class="text-blue-800">72 km/h = (72 000 : 3 600) m/s = 20 m/s</p>
                    </div>
                    <p class="text-lg md:text-xl font-bold text-slate-700">
                        • Đổi từ km/h sang m/s: Đổi km sang m (nhân 1 000) và 1 giờ sang giây (3 600 giây), rồi lấy kết quả chia cho 3 600.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 4 Slide phụ - Trang 77)
const lesson137Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 77) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Số ?</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Đổi đơn vị vận tốc từ km/h sang m/s.</p>
                        </div>
                    </div>

                    <!-- Mẫu Box -->
                    <div class="p-6 bg-slate-50 rounded-3xl border-2 border-slate-200 mb-8 text-left max-w-2xl mx-auto font-mono text-lg md:text-xl font-bold text-slate-800 space-y-2">
                        <p><span class="text-blue-700 font-black">Mẫu:</span> 72 km/h = ? m/s</p>
                        <p class="text-blue-800">72 km/h = (72 000 : 3 600) m/s = 20 m/s</p>
                    </div>

                    <div class="space-y-6 mb-12 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-white rounded-3xl border-2 border-blue-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-blue-800 font-extrabold">a) 108 km/h =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-137-1a" class="w-28 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">m/s</span>
                                </span>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-white rounded-3xl border-2 border-blue-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-blue-800 font-extrabold">b) 18 km/h =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-137-1b" class="w-28 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">m/s</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-137-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        a) 108 km/h = (108 000 : 3 600) m/s = 30 m/s.<br>
                        b) 18 km/h = (18 000 : 3 600) m/s = 5 m/s.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-137-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-137-1" onclick="window.submitEx137_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 77) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Vận tốc của đà điểu</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Đà điểu khi cần có thể chạy được 5,25 km trong 5 phút. Tính vận tốc của đà điểu (theo đơn vị m/s).</p>
                        </div>
                    </div>

                    <!-- Hình Con đà điểu SGK Trang 77 -->
                    <div class="mb-8 text-center">
                        <img src="assets/images/toan/toan_tap_2/137/137-2-da-dieu.png" alt="Đà điểu chạy" class="rounded-2xl w-full h-auto max-h-[260px] object-contain shadow-sm mx-auto">
                    </div>

                    <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 mb-8 text-left">
                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                            <span class="text-teal-900 font-extrabold">Vận tốc của đà điểu là =</span>
                            <span class="inline-flex items-center flex-nowrap gap-2">
                                <input type="text" id="ans-137-2" class="w-32 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">m/s</span>
                            </span>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-137-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        Đổi: 5,25 km = 5 250 m; 5 phút = 300 giây.<br>
                        Vận tốc của đà điểu là:<br>
                        5 250 : 300 = 17,5 (m/s).<br>
                        Đáp số: 17,5 m/s.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-137-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-137-2" onclick="window.submitEx137_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 3 (Trang 77) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3. Vận tốc của xe buýt</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Lúc 6 giờ 30 phút, bác Nùng đi bộ từ nhà đến bến xe và kịp lên xe buýt đi tiếp đến nơi làm việc lúc 7 giờ 45 phút. Biết quãng đường từ bến xe đến nơi làm việc là 15 km và thời gian bác Nùng đi bộ là 45 phút. Tính vận tốc của xe buýt.</p>
                        </div>
                    </div>

                    <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 mb-8 text-left">
                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                            <span class="text-sky-900 font-extrabold">Vận tốc của xe buýt là =</span>
                            <span class="inline-flex items-center flex-nowrap gap-2">
                                <input type="number" id="ans-137-3" class="w-28 h-14 border-2 border-sky-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-sky-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">km/h</span>
                            </span>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-137-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        Thời gian bác Nùng đi từ nhà đến nơi làm việc là: 7 giờ 45 phút − 6 giờ 30 phút = 1 giờ 15 phút = 75 phút.<br>
                        Thời gian bác Nùng đi xe buýt là: 75 phút − 45 phút = 30 phút = 0,5 giờ.<br>
                        Vận tốc của xe buýt là: 15 : 0,5 = 30 (km/h).<br>
                        Đáp số: 30 km/h.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-137-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-137-3" onclick="window.submitEx137_3()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 4: Bài 4 (Trang 77) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">4</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 4. Chọn câu trả lời đúng</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Biết trong 2 giờ xe màu đỏ đi được 108 km, trong 7 giây xe màu đen đi được 112 m, trong 5 phút xe màu trắng đi được 4 200 m. Hỏi xe nào có vận tốc lớn nhất?</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
                        <button onclick="window.lesson137SelectMCQ('137-4', 'A')" id="btn-137-4-A" class="mcq-btn p-5 bg-white border-2 border-teal-200 rounded-2xl flex items-center gap-3 hover:border-teal-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xl">A</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">Xe màu đỏ</span>
                        </button>
                        <button onclick="window.lesson137SelectMCQ('137-4', 'B')" id="btn-137-4-B" class="mcq-btn p-5 bg-white border-2 border-teal-200 rounded-2xl flex items-center gap-3 hover:border-teal-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xl">B</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">Xe màu đen</span>
                        </button>
                        <button onclick="window.lesson137SelectMCQ('137-4', 'C')" id="btn-137-4-C" class="mcq-btn p-5 bg-white border-2 border-teal-200 rounded-2xl flex items-center gap-3 hover:border-teal-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xl">C</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">Xe màu trắng</span>
                        </button>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-137-4" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 4:</p>
                        - Vận tốc xe màu đỏ: 108 km : 2 h = 54 km/h = (54 000 : 3 600) m/s = 15 m/s.<br>
                        - Vận tốc xe màu đen: 112 m : 7 s = 16 m/s.<br>
                        - Vận tốc xe màu trắng: 4 200 m : (5 × 60) s = 4 200 : 300 = 14 m/s.<br>
                        Vì 16 m/s > 15 m/s > 14 m/s nên xe màu đen có vận tốc lớn nhất.<br>
                        Đáp án đúng là B (Xe màu đen).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-137-4')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-137-4" onclick="window.submitEx137_4()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson137QuizPool = [
    { question: "72 km/h = ... m/s?", options: ["20 m/s", "10 m/s", "30 m/s", "25 m/s"], answer: 0, level: "easy" },
    { question: "108 km/h = ... m/s?", options: ["30 m/s", "20 m/s", "40 m/s", "25 m/s"], answer: 0, level: "easy" },
    { question: "18 km/h = ... m/s?", options: ["5 m/s", "10 m/s", "15 m/s", "2,5 m/s"], answer: 0, level: "easy" },
    { question: "54 km/h = ... m/s?", options: ["15 m/s", "20 m/s", "10 m/s", "25 m/s"], answer: 0, level: "easy" },
    { question: "36 km/h = ... m/s?", options: ["10 m/s", "15 m/s", "20 m/s", "5 m/s"], answer: 0, level: "easy" },
    { question: "5,25 km đổi sang mét bằng:", options: ["5 250 m", "525 m", "50 250 m", "52 500 m"], answer: 0, level: "easy" },
    { question: "5 phút đổi sang giây bằng:", options: ["300 giây", "50 giây", "500 giây", "600 giây"], answer: 0, level: "easy" },
    { question: "5 250 m : 300 s = ?", options: ["17,5 m/s", "15,5 m/s", "18,5 m/s", "17 m/s"], answer: 0, level: "medium" },
    { question: "7 giờ 45 phút − 6 giờ 30 phút = ?", options: ["1 giờ 15 phút", "1 giờ 30 phút", "1 giờ 45 phút", "15 phút"], answer: 0, level: "medium" },
    { question: "75 phút − 45 phút = ?", options: ["30 phút", "40 phút", "25 phút", "35 phút"], answer: 0, level: "easy" },
    { question: "30 phút đổi ra giờ bằng:", options: ["0,5 giờ", "0,3 giờ", "0,25 giờ", "0,6 giờ"], answer: 0, level: "easy" },
    { question: "15 km : 0,5 giờ = ?", options: ["30 km/h", "7,5 km/h", "15 km/h", "45 km/h"], answer: 0, level: "medium" },
    { question: "112 m trong 7 giây. Vận tốc là:", options: ["16 m/s", "14 m/s", "15 m/s", "18 m/s"], answer: 0, level: "medium" },
    { question: "4 200 m trong 300 giây. Vận tốc là:", options: ["14 m/s", "16 m/s", "15 m/s", "12 m/s"], answer: 0, level: "medium" },
    { question: "So sánh: 16 m/s, 15 m/s và 14 m/s. Số lớn nhất là:", options: ["16 m/s", "15 m/s", "14 m/s", "Bằng nhau"], answer: 0, level: "easy" }
];

// 5. Global Handlers & State
window.lesson137State = {
    attempts: { s1: 0, s2: 0, s3: 0, s4: 0 },
    mcq: { s4: null }
};

window.lesson137SelectMCQ = function (exId, option) {
    if (exId === '137-4') {
        window.lesson137State.mcq.s4 = option;
        ['A', 'B', 'C'].forEach(opt => {
            const btn = document.getElementById(`btn-137-4-${opt}`);
            if (btn) {
                if (opt === option) {
                    btn.className = "mcq-btn p-5 bg-teal-100 border-4 border-teal-600 rounded-2xl flex items-center gap-3 shadow-md scale-105 transition-all";
                } else {
                    btn.className = "mcq-btn p-5 bg-white border-2 border-teal-200 rounded-2xl flex items-center gap-3 hover:border-teal-500 transition-all opacity-70";
                }
            }
        });
    }
};

window.submitEx137_1 = function () {
    window.lesson137State.attempts.s1++;
    const va = document.getElementById('ans-137-1a')?.value.trim();
    const vb = document.getElementById('ans-137-1b')?.value.trim();

    if (!va || !vb) {
        alert("Em hãy nhập đầy đủ cả 2 câu a và b!");
        return;
    }

    const ca = (va === '30');
    const cb = (vb === '5');
    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0);
    const isCorrect = (correctCount === 2);
    const score = Math.round((correctCount / 2) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 30 ; b) 5",
        `a) ${va} ; b) ${vb}`,
        "Em hãy lấy số km/h nhân với 1 000 m rồi chia cho 3 600 giây để đổi sang m/s nhé!",
        `
        a) 108 km/h = (108 000 : 3 600) m/s = 30 m/s.<br>
        b) 18 km/h = (18 000 : 3 600) m/s = 5 m/s.<br>
        Em thực hiện đổi đơn vị vận tốc rất giỏi!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-137-1", window.lesson137State.attempts.s1, 2, correctCount);
};

window.submitEx137_2 = function () {
    window.lesson137State.attempts.s2++;
    const v = document.getElementById('ans-137-2')?.value.trim().replace(',', '.');

    if (!v) {
        alert("Em hãy nhập vận tốc của đà điểu!");
        return;
    }

    const isCorrect = (parseFloat(v) === 17.5);
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "17,5 m/s",
        `${v} m/s`,
        "Em hãy đổi 5,25 km sang mét và 5 phút sang giây trước, rồi tính vận tốc v = s : t nhé!",
        `
        Đổi: 5,25 km = 5 250 m; 5 phút = 300 giây.<br>
        Vận tốc của đà điểu là:<br>
        5 250 : 300 = 17,5 (m/s).<br>
        Đáp số: 17,5 m/s.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-137-2", window.lesson137State.attempts.s2, 1, isCorrect ? 1 : 0);
};

window.submitEx137_3 = function () {
    window.lesson137State.attempts.s3++;
    const v = document.getElementById('ans-137-3')?.value.trim();

    if (!v) {
        alert("Em hãy nhập vận tốc của xe buýt!");
        return;
    }

    const isCorrect = (v === '30');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "30 km/h",
        `${v} km/h`,
        "Em hãy tính tổng thời gian bác Nùng đi (từ 6h30p đến 7h45p), trừ đi thời gian đi bộ 45p để tìm thời gian đi xe buýt, rồi lấy 15 km chia cho số giờ nhé!",
        `
        Thời gian bác Nùng đi từ nhà đến nơi làm việc là: 7 giờ 45 phút − 6 giờ 30 phút = 1 giờ 15 phút = 75 phút.<br>
        Thời gian bác Nùng đi xe buýt là: 75 phút − 45 phút = 30 phút = 0,5 giờ.<br>
        Vận tốc của xe buýt là: 15 : 0,5 = 30 (km/h).<br>
        Đáp số: 30 km/h.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-137-3", window.lesson137State.attempts.s3, 1, isCorrect ? 1 : 0);
};

window.submitEx137_4 = function () {
    window.lesson137State.attempts.s4++;
    const selected = window.lesson137State.mcq.s4;

    if (!selected) {
        alert("Em hãy lựa chọn câu trả lời!");
        return;
    }

    const isCorrect = (selected === 'B');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "B. Xe màu đen",
        `Câu ${selected}`,
        "Em hãy tính vận tốc của từng xe theo cùng một đơn vị (ví dụ m/s) rồi so sánh xe nào có số đo lớn nhất nhé!",
        `
        - Vận tốc xe màu đỏ: 108 km : 2 h = 54 km/h = 15 m/s.<br>
        - Vận tốc xe màu đen: 112 m : 7 s = 16 m/s.<br>
        - Vận tốc xe màu trắng: 4 200 m : (5 × 60) s = 4 200 : 300 = 14 m/s.<br>
        Vì 16 m/s > 15 m/s > 14 m/s nên xe màu đen có vận tốc lớn nhất.<br>
        Đáp án đúng là B (Xe màu đen).
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-137-4", window.lesson137State.attempts.s4, 1, isCorrect ? 1 : 0);
};

// 6. Main Lesson Export
export default {
    metadata,
    lessonInfo,
    content: lesson137Content,
    practice: lesson137Practice,
    quizPool: lesson137QuizPool,
    onLoad: () => {
        console.log("Lesson 137 Loaded: Bài 59. Vận tốc của một chuyển động đều (tiết 2)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};
