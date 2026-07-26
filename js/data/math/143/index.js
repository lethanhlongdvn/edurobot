/**
 * @file index.js
 * @description Standardized Lesson 143: Bài 62. Luyện tập chung (tiết 1)
 * Targets: 100% SGK compliance (Trang 84), 4 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-143",
    period: "143",
    title: "Bài 62. Luyện tập chung (tiết 1)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 62. LUYỆN TẬP CHUNG (TIẾT 1)",
    description: "Luyện tập các phép tính về thời gian, đổi đơn vị vận tốc và giải toán chuyển động.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 84"
};

// 2. HTML Content (Khám phá / Lý thuyết ôn tập - Trang 84)
const lesson143Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">📐 LUYỆN TẬP CHUNG: CÁC PHÉP TÍNH VÀ CHUYỂN ĐỘNG ĐỀU</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-lg md:text-xl">
                    <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-200 space-y-2">
                        <p class="font-black text-blue-800 text-xl md:text-2xl">⏱️ Số đo thời gian:</p>
                        <p class="text-slate-800">• 1 giờ = 60 phút</p>
                        <p class="text-slate-800">• 1 phút = 60 giây</p>
                        <p class="text-slate-800">• 1 tuần = 7 ngày</p>
                    </div>
                    <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-200 space-y-2">
                        <p class="font-black text-teal-800 text-xl md:text-2xl">🚀 Công thức chuyển động:</p>
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

// 3. HTML Practice (Luyện tập - 4 Slide phụ - Trang 84)
const lesson143Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 84) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Tính</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Em hãy thực hiện các phép tính với số đo thời gian sau:</p>
                        </div>
                    </div>

                    <div class="space-y-4 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-blue-900 font-extrabold">9 phút 12 giây + 3 phút 38 giây =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-143-1a-min" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">phút</span>
                                    <input type="number" id="ans-143-1a-sec" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">giây</span>
                                </span>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-blue-900 font-extrabold">7 giờ 15 phút − 2 giờ 30 phút =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-143-1b-h" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">giờ</span>
                                    <input type="number" id="ans-143-1b-min" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">phút</span>
                                </span>
                            </div>
                        </div>

                        <!-- c -->
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-blue-900 font-extrabold">2 tuần 5 ngày × 7 =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-143-1c" class="w-28 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">tuần</span>
                                </span>
                            </div>
                        </div>

                        <!-- d -->
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-blue-900 font-extrabold">9 năm 4 tháng : 8 =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-143-1d-y" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">năm</span>
                                    <input type="number" id="ans-143-1d-m" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">tháng</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-143-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        • 9 phút 12 giây + 3 phút 38 giây = (9+3) phút (12+38) giây = 12 phút 50 giây.<br>
                        • 7 giờ 15 phút − 2 giờ 30 phút = 6 giờ 75 phút − 2 giờ 30 phút = 4 giờ 45 phút.<br>
                        • 2 tuần 5 ngày × 7 = 14 tuần 35 ngày = 14 tuần + 5 tuần = 19 tuần.<br>
                        • 9 năm 4 tháng : 8 = 1 năm (dư 1 năm = 12 tháng). 12 + 4 = 16 tháng ; 16 tháng : 8 = 2 tháng -> 1 năm 2 tháng.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-143-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-143-1" onclick="window.submitEx143_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 84) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Số ? (Đổi km/h → m/s)</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Em hãy đổi đơn vị vận tốc từ km/h sang m/s vào ô trống thích hợp:</p>
                        </div>
                    </div>

                    <div class="space-y-4 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-teal-900 font-extrabold">a) 24 km/h =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="text" id="ans-143-2a" class="w-32 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">m/s</span>
                                </span>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-teal-900 font-extrabold">b) 207 km/h =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="text" id="ans-143-2b" class="w-32 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">m/s</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-143-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        a) 24 km/h = 24 000 m / 3 600 s = 20/3 ≈ 6,7 m/s (hoặc 6,67 m/s).<br>
                        b) 207 km/h = 207 000 m / 3 600 s = 57,5 m/s.<br>
                        Đáp số: a) 6,7 m/s (hoặc 20/3 m/s) ; b) 57,5 m/s.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-143-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-143-2" onclick="window.submitEx143_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 3 (Trang 84) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-emerald-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-emerald-700 block">Bài 3. Khoảng cách bến bãi</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Bến B cách bến A 115 km. Một chiếc tàu đi từ bến A đến bến B với vận tốc 22 km/h. Hỏi sau khi khởi hành 3 giờ 30 phút, tàu còn cách bến B bao nhiêu ki-lô-mét?</p>
                        </div>
                    </div>

                    <!-- Hình Tàu thủy SGK Trang 84 -->
                    <div class="mb-8 text-center">
                        <img src="assets/images/toan/toan_tap_2/143/143-3-tau-thuy.png" alt="Chiếc tàu thủy trên sông" class="rounded-2xl w-full h-auto max-h-[260px] object-contain shadow-sm mx-auto">
                    </div>

                    <div class="p-6 bg-emerald-50 rounded-3xl border-2 border-emerald-100 mb-8 text-left">
                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                            <span class="text-emerald-900 font-extrabold">Tàu còn cách bến B =</span>
                            <span class="inline-flex items-center flex-nowrap gap-2">
                                <input type="number" id="ans-143-3" class="w-32 h-14 border-2 border-emerald-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-emerald-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">km</span>
                            </span>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-143-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        Đổi: 3 giờ 30 phút = 3,5 giờ.<br>
                        Quãng đường tàu đã đi được là: 22 × 3,5 = 77 (km).<br>
                        Tàu còn cách bến B số ki-lô-mét là: 115 − 77 = 38 (km).<br>
                        Đáp số: 38 km.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-143-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-143-3" onclick="window.submitEx143_3()" class="w-16 h-16 md:w-20 md:h-20 bg-emerald-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 4: Bài 4 (Trang 84) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">4</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 4. Chọn câu trả lời đúng (Đoàn tàu hoả vào hầm)</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Một đoàn tàu hoả dài 200 m bắt đầu vào đường hầm. Vậy sau bao lâu thì đuôi tàu chui hoàn toàn vào đường hầm, biết tàu đi với vận tốc 20 m/s?</p>
                        </div>
                    </div>

                    <!-- Hình Tàu hỏa chui hầm SGK Trang 84 -->
                    <div class="mb-8 text-center">
                        <img src="assets/images/toan/toan_tap_2/143/143-4-tau-hoa-ham.png" alt="Đoàn tàu hỏa chui vào hầm" class="rounded-2xl w-full h-auto max-h-[260px] object-contain shadow-sm mx-auto">
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
                        <button onclick="window.lesson143SelectMCQ('143-4', 'A')" id="btn-143-4-A" class="mcq-btn p-6 bg-white border-2 border-sky-200 rounded-3xl flex items-center gap-4 hover:border-sky-500 transition-all">
                            <span class="w-12 h-12 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black text-xl md:text-2xl">A</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">12 giây</span>
                        </button>
                        <button onclick="window.lesson143SelectMCQ('143-4', 'B')" id="btn-143-4-B" class="mcq-btn p-6 bg-white border-2 border-sky-200 rounded-3xl flex items-center gap-4 hover:border-sky-500 transition-all">
                            <span class="w-12 h-12 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black text-xl md:text-2xl">B</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">10 giây</span>
                        </button>
                        <button onclick="window.lesson143SelectMCQ('143-4', 'C')" id="btn-143-4-C" class="mcq-btn p-6 bg-white border-2 border-sky-200 rounded-3xl flex items-center gap-4 hover:border-sky-500 transition-all">
                            <span class="w-12 h-12 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black text-xl md:text-2xl">C</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">4 giây</span>
                        </button>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-143-4" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 4:</p>
                        Quãng đường đoàn tàu đi để đuôi tàu chui hoàn toàn vào hầm chính bằng chiều dài đoàn tàu là 200 m.<br>
                        Thời gian để đuôi tàu chui hoàn toàn vào hầm là: 200 : 20 = 10 (giây).<br>
                        Đáp án đúng là B (10 giây).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-143-4')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-143-4" onclick="window.submitEx143_4()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson143QuizPool = [
    { question: "9 phút 12 giây + 3 phút 38 giây = ?", options: ["12 phút 50 giây", "12 phút 40 giây", "13 phút 10 giây", "12 phút 30 giây"], answer: 0, level: "easy" },
    { question: "7 giờ 15 phút − 2 giờ 30 phút = ?", options: ["4 giờ 45 phút", "5 giờ 15 phút", "4 giờ 15 phút", "5 giờ 45 phút"], answer: 0, level: "easy" },
    { question: "2 tuần 5 ngày × 7 = ?", options: ["19 tuần", "14 tuần 35 ngày", "18 tuần 5 ngày", "20 tuần"], answer: 0, level: "easy" },
    { question: "9 năm 4 tháng : 8 = ?", options: ["1 năm 2 tháng", "1 năm 1 tháng", "1 năm 4 tháng", "1 năm 6 tháng"], answer: 0, level: "easy" },
    { question: "24 km/h làm tròn đơn vị m/s là:", options: ["6,7 m/s", "6,5 m/s", "7 m/s", "6 m/s"], answer: 0, level: "medium" },
    { question: "207 km/h đổi ra m/s bằng:", options: ["57,5 m/s", "50 m/s", "55 m/s", "60 m/s"], answer: 0, level: "easy" },
    { question: "22 km/h đi trong 3,5 giờ được quãng đường là:", options: ["77 km", "70 km", "80 km", "75 km"], answer: 0, level: "easy" },
    { question: "Bến A đến bến B dài 115 km. Tàu đi được 77 km thì còn cách bến B:", options: ["38 km", "35 km", "40 km", "30 km"], answer: 0, level: "easy" },
    { question: "Tàu dài 200 m, đi với vận tốc 20 m/s. Thời gian chui hết hầm là:", options: ["10 giây", "12 giây", "4 giây", "20 giây"], answer: 0, level: "easy" },
    { question: "36 km/h đổi ra m/s bằng:", options: ["10 m/s", "12 m/s", "15 m/s", "8 m/s"], answer: 0, level: "easy" },
    { question: "54 km/h đổi ra m/s bằng:", options: ["15 m/s", "10 m/s", "20 m/s", "18 m/s"], answer: 0, level: "easy" },
    { question: "72 km/h đổi ra m/s bằng:", options: ["20 m/s", "25 m/s", "15 m/s", "30 m/s"], answer: 0, level: "easy" },
    { question: "3 giờ 30 phút đổi ra giờ bằng:", options: ["3,5 giờ", "3,3 giờ", "3,15 giờ", "3,25 giờ"], answer: 0, level: "easy" },
    { question: "Tàu dài 300 m, đi với 15 m/s. Thời gian chui hết hầm là:", options: ["20 giây", "15 giây", "25 giây", "30 giây"], answer: 0, level: "easy" },
    { question: "15 m/s đổi ra km/h bằng:", options: ["54 km/h", "36 km/h", "72 km/h", "45 km/h"], answer: 0, level: "medium" }
];

// 5. Global Handlers & State
window.lesson143State = {
    attempts: { s1: 0, s2: 0, s3: 0, s4: 0 },
    mcq: { s4: null }
};

window.lesson143SelectMCQ = function (exId, option) {
    if (exId === '143-4') {
        window.lesson143State.mcq.s4 = option;
        ['A', 'B', 'C'].forEach(opt => {
            const btn = document.getElementById(`btn-143-4-${opt}`);
            if (btn) {
                if (opt === option) {
                    btn.className = "mcq-btn p-6 bg-sky-100 border-4 border-sky-600 rounded-3xl flex items-center gap-4 shadow-md scale-105 transition-all";
                } else {
                    btn.className = "mcq-btn p-6 bg-white border-2 border-sky-200 rounded-3xl flex items-center gap-4 hover:border-sky-500 transition-all opacity-70";
                }
            }
        });
    }
};

window.submitEx143_1 = function () {
    window.lesson143State.attempts.s1++;
    const a1 = document.getElementById('ans-143-1a-min')?.value.trim();
    const a2 = document.getElementById('ans-143-1a-sec')?.value.trim();
    const b1 = document.getElementById('ans-143-1b-h')?.value.trim();
    const b2 = document.getElementById('ans-143-1b-min')?.value.trim();
    const c = document.getElementById('ans-143-1c')?.value.trim();
    const d1 = document.getElementById('ans-143-1d-y')?.value.trim();
    const d2 = document.getElementById('ans-143-1d-m')?.value.trim();

    if (!a1 || !a2 || !b1 || !b2 || !c || !d1 || !d2) {
        alert("Em hãy nhập đầy đủ tất cả các ô tính!");
        return;
    }

    const ca = (a1 === '12' && a2 === '50');
    const cb = (b1 === '4' && b2 === '45');
    const cc = (c === '19');
    const cd = (d1 === '1' && d2 === '2');

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0) + (cc ? 1 : 0) + (cd ? 1 : 0);
    const isCorrect = (correctCount === 4);
    const score = Math.round((correctCount / 4) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 12p 50s ; b) 4h 45p ; c) 19 tuần ; d) 1 năm 2 tháng",
        `a) ${a1}p ${a2}s ; b) ${b1}h ${b2}p ; c) ${c} tuần ; d) ${d1} năm ${d2} tháng`,
        "Em hãy thực hiện phép tính với từng loại đơn vị đo thời gian, chú ý đổi đơn vị nếu cần mượn hoặc rút gọn nhé!",
        `
        • 9 phút 12 giây + 3 phút 38 giây = 12 phút 50 giây.<br>
        • 7 giờ 15 phút − 2 giờ 30 phút = 6 giờ 75 phút − 2 giờ 30 phút = 4 giờ 45 phút.<br>
        • 2 tuần 5 ngày × 7 = 14 tuần 35 ngày = 19 tuần.<br>
        • 9 năm 4 tháng : 8 = 1 năm 2 tháng.<br>
        Em tính toán thời gian cực kỳ chính xác!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-143-1", window.lesson143State.attempts.s1, 4, correctCount);
};

window.submitEx143_2 = function () {
    window.lesson143State.attempts.s2++;
    const va = document.getElementById('ans-143-2a')?.value.trim().replace(',', '.');
    const vb = document.getElementById('ans-143-2b')?.value.trim().replace(',', '.');

    if (!va || !vb) {
        alert("Em hãy nhập kết quả đổi đơn vị của cả 2 câu!");
        return;
    }

    const ca = (va === '6.7' || va === '6.67' || va === '20/3' || Math.abs(parseFloat(va) - 6.67) <= 0.1);
    const cb = (parseFloat(vb) === 57.5);

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0);
    const isCorrect = (correctCount === 2);
    const score = Math.round((correctCount / 2) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 6,7 m/s ; b) 57,5 m/s",
        `a) ${va} m/s ; b) ${vb} m/s`,
        "Em hãy lấy số đo km/h chia cho 3,6 để đổi sang m/s nhé!",
        `
        a) 24 km/h = 24 000 m / 3 600 s = 20/3 ≈ 6,7 (m/s).<br>
        b) 207 km/h = 207 000 m / 3 600 s = 57,5 (m/s).<br>
        Em thực hiện đổi đơn vị vận tốc rất giỏi!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-143-2", window.lesson143State.attempts.s2, 2, correctCount);
};

window.submitEx143_3 = function () {
    window.lesson143State.attempts.s3++;
    const s = document.getElementById('ans-143-3')?.value.trim();

    if (!s) {
        alert("Em hãy nhập khoảng cách còn lại!");
        return;
    }

    const isCorrect = (s === '38');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "38 km",
        `${s} km`,
        "Em hãy đổi 3 giờ 30 phút sang giờ (3,5 giờ), tính quãng đường tàu đã đi (22 × 3,5), rồi lấy 115 km trừ đi quãng đường đó nhé!",
        `
        Đổi: 3 giờ 30 phút = 3,5 giờ.<br>
        Quãng đường tàu đã đi được là: 22 × 3,5 = 77 (km).<br>
        Tàu còn cách bến B số ki-lô-mét là: 115 − 77 = 38 (km).<br>
        Đáp số: 38 km.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-143-3", window.lesson143State.attempts.s3, 1, isCorrect ? 1 : 0);
};

window.submitEx143_4 = function () {
    window.lesson143State.attempts.s4++;
    const selected = window.lesson143State.mcq.s4;

    if (!selected) {
        alert("Em hãy chọn đáp án đúng!");
        return;
    }

    const isCorrect = (selected === 'B');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "B. 10 giây",
        `Câu ${selected}`,
        "Đuôi tàu chui hoàn toàn vào hầm có nghĩa là tàu đã đi được quãng đường bằng chiều dài đoàn tàu (200 m). Em hãy tính thời gian t = s : v nhé!",
        `
        Quãng đường đoàn tàu đi để đuôi tàu chui hoàn toàn vào hầm chính bằng chiều dài đoàn tàu là 200 m.<br>
        Thời gian để đuôi tàu chui hoàn toàn vào hầm là: 200 : 20 = 10 (giây).<br>
        Đáp án đúng là B (10 giây).
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-143-4", window.lesson143State.attempts.s4, 1, isCorrect ? 1 : 0);
};

// 6. Main Lesson Export

export const lesson143 = {
    topic: "Số đo thời gian",
    week: "29",
    period: "143",
    title: metadata.title || lessonInfo.title,
    desc: lessonInfo.description,
    content: lesson143Content,
    practice: lesson143Practice,
    quizPool: lesson143QuizPool,
    metadata,
    lessonInfo,
    onLoad: () => {
        console.log("Lesson 143 Loaded");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};

window.lesson143 = lesson143;
export default lesson143;
