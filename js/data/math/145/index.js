/**
 * @file index.js
 * @description Standardized Lesson 145: Bài 62. Luyện tập chung (tiết 3)
 * Targets: 100% SGK compliance (Trang 85-86), 3 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-145",
    period: "145",
    title: "Bài 62. Luyện tập chung (tiết 3)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 62. LUYỆN TẬP CHUNG (TIẾT 3)",
    description: "Luyện tập các bài toán thực tế về vận tốc, quãng đường, thời gian trong thực tế phức hợp.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 85-86"
};

// 2. HTML Content (Khám phá / Lý thuyết ôn tập - Trang 85-86)
const lesson145Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">📐 LUYỆN TẬP CHUNG: VẬN TỐC, QUÃNG ĐƯỜNG, THỜI GIAN NÂNG CAO</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-lg md:text-xl">
                    <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-200 space-y-2">
                        <p class="font-black text-blue-800 text-xl md:text-2xl">⭕ Đường tròn & Chuyển động:</p>
                        <p class="text-slate-800">• Chu vi đường tròn: <span class="font-black text-blue-700 font-mono">C = r × 2 × 3,14</span></p>
                        <p class="text-slate-800">• Thời gian bay: <span class="font-black text-blue-700 font-mono">t = C : v</span></p>
                    </div>
                    <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-200 space-y-2">
                        <p class="font-black text-teal-800 text-xl md:text-2xl">🚀 Công thức cơ bản:</p>
                        <p class="text-slate-800">• Vận tốc: <span class="font-black text-teal-700 font-mono">v = s : t</span></p>
                        <p class="text-slate-800">• Quãng đường: <span class="font-black text-teal-700 font-mono">s = v × t</span></p>
                        <p class="text-slate-800">• Thời gian: <span class="font-black text-teal-700 font-mono">t = s : v</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 3 Slide phụ - Trang 85-86)
const lesson145Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 85) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Chọn câu trả lời đúng (Tắc-xi bay)</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Một hãng tắc-xi (taxi) thử nghiệm tắc-xi bay. Chiếc tắc-xi đó bay vòng quanh thành phố theo một đường tròn bán kính 5 km với vận tốc 60 km/h. Hỏi chiếc tắc-xi hoàn thành chuyến bay trong thời gian bao lâu?</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
                        <button onclick="window.lesson145SelectMCQ('145-1', 'A')" id="btn-145-1-A" class="mcq-btn p-6 bg-white border-2 border-blue-200 rounded-3xl flex items-center gap-4 hover:border-blue-500 transition-all">
                            <span class="w-12 h-12 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-black text-xl md:text-2xl">A</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">Khoảng 10 phút</span>
                        </button>
                        <button onclick="window.lesson145SelectMCQ('145-1', 'B')" id="btn-145-1-B" class="mcq-btn p-6 bg-white border-2 border-blue-200 rounded-3xl flex items-center gap-4 hover:border-blue-500 transition-all">
                            <span class="w-12 h-12 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-black text-xl md:text-2xl">B</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">Khoảng 30 phút</span>
                        </button>
                        <button onclick="window.lesson145SelectMCQ('145-1', 'C')" id="btn-145-1-C" class="mcq-btn p-6 bg-white border-2 border-blue-200 rounded-3xl flex items-center gap-4 hover:border-blue-500 transition-all">
                            <span class="w-12 h-12 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-black text-xl md:text-2xl">C</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">Khoảng 1 giờ</span>
                        </button>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-145-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        Quãng đường tắc-xi bay chính bằng chu vi đường tròn bán kính 5 km:<br>
                        5 × 2 × 3,14 = 31,4 (km).<br>
                        Thời gian tắc-xi hoàn thành chuyến bay là:<br>
                        31,4 : 60 = 0,5233... (giờ) = 31,4 phút ≈ Khoảng 30 phút.<br>
                        Đáp án đúng là B (Khoảng 30 phút).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-145-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-145-1" onclick="window.submitEx145_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 86) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Tí đi bộ và cún con chạy đón Tí</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Tí bắt đầu đi bộ từ trường về nhà với vận tốc 1 m/s. Cùng lúc đó, sau khi nghe tiếng trống tan trường, cún con cũng vội vã từ nhà chạy đến trường để đón Tí.</p>
                        </div>
                    </div>

                    <div class="space-y-4 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-teal-900 font-extrabold">a) Sau 4 phút gặp nhau, Tí đã đi được =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-145-2a" class="w-32 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">m</span>
                                </span>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-teal-900 font-extrabold">b) Với vận tốc 3 m/s, cún con đã chạy được =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-145-2b" class="w-32 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">m</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-145-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        Đổi: 4 phút = 240 giây.<br>
                        a) Lúc ấy Tí đã đi được số mét là: 1 × 240 = 240 (m).<br>
                        b) Khi gặp Tí, cún con đã chạy được số mét là: 3 × 240 = 720 (m).<br>
                        Đáp số: a) 240 m ; b) 720 m.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-145-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-145-2" onclick="window.submitEx145_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 3 (Trang 86) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3. Chọn câu trả lời đúng (Hai anh em chạy lấy nước)</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Hai anh em xuất phát cùng lúc từ điểm B chạy đến điểm C lấy nước. Người em chạy theo đường màu xanh (BA = 940m, AC = 3 000m) còn người anh chạy theo đường màu đỏ (BM = 836m, MC = 3 090m).</p>
                        </div>
                    </div>

                    <!-- Hình Sơ đồ hai anh em SGK Trang 86 -->
                    <div class="mb-8 text-center">
                        <img src="assets/images/toan/toan_tap_2/145/145-3-hai-anh-em.png" alt="Sơ đồ hai anh em chạy lấy nước" class="rounded-2xl w-full h-auto max-h-[260px] object-contain shadow-sm mx-auto">
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 shadow-sm space-y-3">
                            <p class="text-xl md:text-2xl font-black text-sky-900">a) Chạy qua bãi cỏ với 4 m/s. Người anh chạy nhanh hơn người em bao nhiêu giây?</p>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <button onclick="window.lesson145SelectMCQ('145-3a', 'A')" id="btn-145-3a-A" class="mcq-btn p-4 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 transition-all">
                                    <span class="w-10 h-10 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black text-lg">A</span>
                                    <span class="font-black text-xl text-slate-800">26 giây</span>
                                </button>
                                <button onclick="window.lesson145SelectMCQ('145-3a', 'B')" id="btn-145-3a-B" class="mcq-btn p-4 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 transition-all">
                                    <span class="w-10 h-10 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black text-lg">B</span>
                                    <span class="font-black text-xl text-slate-800">27 giây</span>
                                </button>
                                <button onclick="window.lesson145SelectMCQ('145-3a', 'C')" id="btn-145-3a-C" class="mcq-btn p-4 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 transition-all">
                                    <span class="w-10 h-10 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black text-lg">C</span>
                                    <span class="font-black text-xl text-slate-800">28 giây</span>
                                </button>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 shadow-sm space-y-3">
                            <p class="text-xl md:text-2xl font-black text-sky-900">b) Chạy qua bãi cát với 3 m/s. Người em chạy nhanh hơn người anh bao nhiêu giây?</p>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <button onclick="window.lesson145SelectMCQ('145-3b', 'A')" id="btn-145-3b-A" class="mcq-btn p-4 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 transition-all">
                                    <span class="w-10 h-10 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black text-lg">A</span>
                                    <span class="font-black text-xl text-slate-800">29 giây</span>
                                </button>
                                <button onclick="window.lesson145SelectMCQ('145-3b', 'B')" id="btn-145-3b-B" class="mcq-btn p-4 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 transition-all">
                                    <span class="w-10 h-10 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black text-lg">B</span>
                                    <span class="font-black text-xl text-slate-800">30 giây</span>
                                </button>
                                <button onclick="window.lesson145SelectMCQ('145-3b', 'C')" id="btn-145-3b-C" class="mcq-btn p-4 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 transition-all">
                                    <span class="w-10 h-10 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black text-lg">C</span>
                                    <span class="font-black text-xl text-slate-800">31 giây</span>
                                </button>
                            </div>
                        </div>

                        <!-- c -->
                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 shadow-sm space-y-3">
                            <p class="text-xl md:text-2xl font-black text-sky-900">c) Ai đến điểm C trước?</p>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <button onclick="window.lesson145SelectMCQ('145-3c', 'A')" id="btn-145-3c-A" class="mcq-btn p-4 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 transition-all">
                                    <span class="w-10 h-10 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black text-lg">A</span>
                                    <span class="font-black text-xl text-slate-800">Người anh</span>
                                </button>
                                <button onclick="window.lesson145SelectMCQ('145-3c', 'B')" id="btn-145-3c-B" class="mcq-btn p-4 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 transition-all">
                                    <span class="w-10 h-10 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black text-lg">B</span>
                                    <span class="font-black text-xl text-slate-800">Người em</span>
                                </button>
                                <button onclick="window.lesson145SelectMCQ('145-3c', 'C')" id="btn-145-3c-C" class="mcq-btn p-4 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 transition-all">
                                    <span class="w-10 h-10 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black text-lg">C</span>
                                    <span class="font-black text-xl text-slate-800">Cùng một lúc</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-145-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        a) Thời gian em chạy qua bãi cỏ: 940 : 4 = 235 (giây).<br>
                        Thời gian anh chạy qua bãi cỏ: 836 : 4 = 209 (giây).<br>
                        Người anh chạy nhanh hơn người em: 235 − 209 = 26 (giây) -> Chọn A.<br>
                        b) Thời gian em chạy qua bãi cát: 3 000 : 3 = 1 000 (giây).<br>
                        Thời gian anh chạy qua bãi cát: 3 090 : 3 = 1 030 (giây).<br>
                        Người em chạy nhanh hơn người anh: 1 030 − 1 000 = 30 (giây) -> Chọn B.<br>
                        c) Tổng thời gian người em: 235 + 1 000 = 1 235 (giây).<br>
                        Tổng thời gian người anh: 209 + 1 030 = 1 239 (giây).<br>
                        Vì 1 235 giây < 1 239 giây nên Người em đến trước -> Chọn B.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-145-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-145-3" onclick="window.submitEx145_3()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson145QuizPool = [
    { question: "Đường tròn bán kính 5 km có chu vi là:", options: ["31,4 km", "15,7 km", "31,4 m", "62,8 km"], answer: 0, level: "easy" },
    { question: "31,4 km đi với vận tốc 60 km/h hết thời gian khoảng:", options: ["Khoảng 30 phút", "Khoảng 10 phút", "Khoảng 1 giờ", "Khoảng 45 phút"], answer: 0, level: "easy" },
    { question: "4 phút đổi ra giây bằng:", options: ["240 giây", "120 giây", "400 giây", "60 giây"], answer: 0, level: "easy" },
    { question: "Vận tốc 1 m/s đi trong 240 giây được quãng đường:", options: ["240 m", "120 m", "480 m", "2400 m"], answer: 0, level: "easy" },
    { question: "Vận tốc 3 m/s đi trong 240 giây được quãng đường:", options: ["720 m", "360 m", "240 m", "600 m"], answer: 0, level: "easy" },
    { question: "940 m chạy với 4 m/s hết số giây là:", options: ["235 giây", "240 giây", "230 giây", "250 giây"], answer: 0, level: "medium" },
    { question: "836 m chạy với 4 m/s hết số giây là:", options: ["209 giây", "200 giây", "210 giây", "220 giây"], answer: 0, level: "medium" },
    { question: "235 giây − 209 giây = ?", options: ["26 giây", "27 giây", "28 giây", "25 giây"], answer: 0, level: "easy" },
    { question: "3 000 m chạy với 3 m/s hết số giây là:", options: ["1 000 giây", "100 giây", "900 giây", "3 000 giây"], answer: 0, level: "easy" },
    { question: "3 090 m chạy với 3 m/s hết số giây là:", options: ["1 030 giây", "1 000 giây", "1 020 giây", "1 050 giây"], answer: 0, level: "easy" },
    { question: "1 030 giây − 1 000 giây = ?", options: ["30 giây", "29 giây", "31 giây", "32 giây"], answer: 0, level: "easy" },
    { question: "Tổng thời gian người em là 1 235s, người anh 1 239s. Ai đến trước?", options: ["Người em", "Người anh", "Đến cùng lúc", "Không xác định"], answer: 0, level: "easy" },
    { question: "Chu vi đường tròn bán kính r tính theo công thức:", options: ["C = r × 2 × 3,14", "C = r × 3,14", "C = r × r × 3,14", "C = r : 2 × 3,14"], answer: 0, level: "easy" },
    { question: "0,5233 giờ đổi ra phút bằng khoảng:", options: ["31,4 phút", "15 phút", "45 phút", "60 phút"], answer: 0, level: "medium" },
    { question: "Chênh lệch thời gian giữa hai anh em khi về đến C là:", options: ["4 giây", "5 giây", "6 giây", "3 giây"], answer: 0, level: "easy" }
];

// 5. Global Handlers & State
window.lesson145State = {
    attempts: { s1: 0, s2: 0, s3: 0 },
    mcq: { s1: null, s3a: null, s3b: null, s3c: null }
};

window.lesson145SelectMCQ = function (exId, option) {
    if (exId === '145-1') {
        window.lesson145State.mcq.s1 = option;
        ['A', 'B', 'C'].forEach(opt => {
            const btn = document.getElementById(`btn-145-1-${opt}`);
            if (btn) {
                btn.className = (opt === option)
                    ? "mcq-btn p-6 bg-blue-100 border-4 border-blue-600 rounded-3xl flex items-center gap-4 shadow-md scale-105 transition-all"
                    : "mcq-btn p-6 bg-white border-2 border-blue-200 rounded-3xl flex items-center gap-4 hover:border-blue-500 transition-all opacity-70";
            }
        });
    } else if (exId.startsWith('145-3')) {
        const subKey = exId.replace('145-3', '');
        window.lesson145State.mcq[`s3${subKey}`] = option;
        ['A', 'B', 'C'].forEach(opt => {
            const btn = document.getElementById(`btn-145-3${subKey}-${opt}`);
            if (btn) {
                btn.className = (opt === option)
                    ? "mcq-btn p-4 bg-sky-100 border-4 border-sky-600 rounded-2xl flex items-center gap-3 shadow-md scale-105 transition-all"
                    : "mcq-btn p-4 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 transition-all opacity-70";
            }
        });
    }
};

window.submitEx145_1 = function () {
    window.lesson145State.attempts.s1++;
    const selected = window.lesson145State.mcq.s1;

    if (!selected) {
        alert("Em hãy chọn đáp án đúng!");
        return;
    }

    const isCorrect = (selected === 'B');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "B. Khoảng 30 phút",
        `Câu ${selected}`,
        "Em hãy tính chu vi đường tròn (C = r × 2 × 3,14) để tìm quãng đường bay, rồi tính thời gian (t = s : v) và đổi ra phút nhé!",
        `
        Quãng đường tắc-xi bay chính bằng chu vi đường tròn bán kính 5 km:<br>
        5 × 2 × 3,14 = 31,4 (km).<br>
        Thời gian tắc-xi hoàn thành chuyến bay là:<br>
        31,4 : 60 = 0,5233... (giờ) = 31,4 phút ≈ Khoảng 30 phút.<br>
        Đáp án đúng là B (Khoảng 30 phút).
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-145-1", window.lesson145State.attempts.s1, 1, isCorrect ? 1 : 0);
};

window.submitEx145_2 = function () {
    window.lesson145State.attempts.s2++;
    const a = document.getElementById('ans-145-2a')?.value.trim();
    const b = document.getElementById('ans-145-2b')?.value.trim();

    if (!a || !b) {
        alert("Em hãy nhập kết quả của cả câu a và câu b!");
        return;
    }

    const ca = (parseInt(a) === 240);
    const cb = (parseInt(b) === 720);

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0);
    const isCorrect = (correctCount === 2);
    const score = Math.round((correctCount / 2) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 240 m ; b) 720 m",
        `a) ${a} m ; b) ${b} m`,
        "Em hãy đổi 4 phút sang giây (240 giây), sau đó lấy vận tốc của từng bạn nhân với 240 giây để tìm quãng đường nhé!",
        `
        Đổi: 4 phút = 240 giây.<br>
        a) Lúc ấy Tí đã đi được số mét là: 1 × 240 = 240 (m).<br>
        b) Khi gặp Tí, cún con đã chạy được số mét là: 3 × 240 = 720 (m).<br>
        Đáp số: a) 240 m ; b) 720 m.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-145-2", window.lesson145State.attempts.s2, 2, correctCount);
};

window.submitEx145_3 = function () {
    window.lesson145State.attempts.s3++;
    const sa = window.lesson145State.mcq.s3a;
    const sb = window.lesson145State.mcq.s3b;
    const sc = window.lesson145State.mcq.s3c;

    if (!sa || !sb || !sc) {
        alert("Em hãy chọn đầy đủ đáp án cho cả 3 câu a, b, c!");
        return;
    }

    const ca = (sa === 'A');
    const cb = (sb === 'B');
    const cc = (sc === 'B');

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0) + (cc ? 1 : 0);
    const isCorrect = (correctCount === 3);
    const score = Math.round((correctCount / 3) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) A (26 giây) ; b) B (30 giây) ; c) B (Người em)",
        `a) ${sa} ; b) ${sb} ; c) ${sc}`,
        "Em hãy tính thời gian từng người qua bãi cỏ (t = s : 4) và qua bãi cát (t = s : 3), rồi so sánh tổng thời gian của hai anh em nhé!",
        `
        a) Người anh chạy qua bãi cỏ nhanh hơn người em: (940 − 836) : 4 = 26 (giây) -> Chọn A.<br>
        b) Người em chạy qua bãi cát nhanh hơn người anh: (3 090 − 3 000) : 3 = 30 (giây) -> Chọn B.<br>
        c) Tổng thời gian người em (1 235s) ít hơn người anh (1 239s) nên Người em đến trước -> Chọn B.<br>
        Đáp số: a) A ; b) B ; c) B.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-145-3", window.lesson145State.attempts.s3, 3, correctCount);
};

// 6. Main Lesson Export
export const lesson145 = {
    topic: "Số đo thời gian",
    week: "29",
    period: "145",
    title: metadata.title || lessonInfo.title,
    desc: lessonInfo.description,
    content: lesson145Content,
    practice: lesson145Practice,
    quizPool: lesson145QuizPool,
    metadata,
    lessonInfo,
    onLoad: () => {
        console.log("Lesson 145 Loaded: Bài 62. Luyện tập chung (tiết 3)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};

window.lesson145 = lesson145;
export default lesson145;
