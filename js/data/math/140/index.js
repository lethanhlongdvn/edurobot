/**
 * @file index.js
 * @description Standardized Lesson 140: Bài 60. Quãng đường, thời gian của một chuyển động đều (tiết 3)
 * Targets: 100% SGK compliance (Trang 80-81), 4 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-140",
    period: "140",
    title: "Bài 60. Quãng đường, thời gian của một chuyển động đều (tiết 3)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 60. QUÃNG ĐƯỜNG, THỜI GIAN CỦA MỘT CHUYỂN ĐỘNG ĐỀU (TIẾT 3)",
    description: "Luyện tập tổng hợp về cách tính quãng đường và thời gian của chuyển động đều.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 80-81"
};

// 2. HTML Content (Khám phá / Tìm hiểu bài - Trang 80)
const lesson140Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">⏱️ 🚗 ÔN TẬP TỔNG HỢP QUÃNG ĐƯỜNG VÀ THỜI GIAN</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <div class="p-6 bg-blue-50/50 rounded-3xl border border-blue-100 space-y-4">
                    <p class="text-xl md:text-2xl font-black text-blue-900">📌 Hệ thống công thức quan trọng:</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-mono font-black text-xl md:text-2xl">
                        <div class="p-4 bg-blue-100 rounded-2xl text-blue-800 border border-blue-300">
                            v = s : t
                        </div>
                        <div class="p-4 bg-teal-100 rounded-2xl text-teal-800 border border-teal-300">
                            s = v × t
                        </div>
                        <div class="p-4 bg-rose-100 rounded-2xl text-rose-800 border border-rose-300">
                            t = s : v
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 4 Slide phụ - Trang 80-81)
const lesson140Practice = `
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
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Điền số thích hợp vào các ô trống trong bảng.</p>
                        </div>
                    </div>

                    <!-- Bảng HTML chuẩn SGK Trang 80 -->
                    <div class="overflow-x-auto mb-10">
                        <table class="w-full border-collapse rounded-3xl overflow-hidden shadow-sm border border-rose-200 text-center font-black text-lg md:text-xl">
                            <thead>
                                <tr class="bg-rose-100 text-rose-900 border-b border-rose-200">
                                    <th class="p-4 border-r border-rose-200 w-1/5">s (km)</th>
                                    <th class="p-4 border-r border-rose-200 w-1/5">28</th>
                                    <th class="p-4 border-r border-rose-200 w-1/5">
                                        <input type="text" id="ans-140-1b" class="w-24 h-12 border-2 border-blue-600 rounded-xl text-center text-xl md:text-2xl font-black text-blue-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    </th>
                                    <th class="p-4 border-r border-rose-200 w-1/5">4 500</th>
                                    <th class="p-4 w-1/5">
                                        <input type="text" id="ans-140-1d" class="w-24 h-12 border-2 border-blue-600 rounded-xl text-center text-xl md:text-2xl font-black text-blue-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-rose-50/50 text-slate-800 border-b border-rose-200">
                                    <td class="p-4 border-r border-rose-200 font-bold">v (km/h)</td>
                                    <td class="p-4 border-r border-rose-200">14</td>
                                    <td class="p-4 border-r border-rose-200">90,2</td>
                                    <td class="p-4 border-r border-rose-200">1 000</td>
                                    <td class="p-4">8,44</td>
                                </tr>
                                <tr class="bg-rose-100/60 text-slate-900">
                                    <td class="p-4 border-r border-rose-200 font-bold">t (giờ)</td>
                                    <td class="p-4 border-r border-rose-200">
                                        <input type="text" id="ans-140-1a" class="w-20 h-12 border-2 border-blue-600 rounded-xl text-center text-xl md:text-2xl font-black text-blue-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    </td>
                                    <td class="p-4 border-r border-rose-200">5</td>
                                    <td class="p-4 border-r border-rose-200">
                                        <input type="text" id="ans-140-1c" class="w-24 h-12 border-2 border-blue-600 rounded-xl text-center text-xl md:text-2xl font-black text-blue-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    </td>
                                    <td class="p-4">5</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-140-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        - Cột 1: t = 28 : 14 = 2 (giờ).<br>
                        - Cột 2: s = 90,2 × 5 = 451 (km).<br>
                        - Cột 3: t = 4 500 : 1 000 = 4,5 (giờ).<br>
                        - Cột 4: s = 8,44 × 5 = 42,2 (km).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-140-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-140-1" onclick="window.submitEx140_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 81) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Quãng đường con tàu thám hiểm</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Một con tàu thám hiểm bay đến Mặt Trăng với vận tốc 30 000 km/h hết 14 giờ. Tính quãng đường bay của con tàu đó.</p>
                        </div>
                    </div>

                    <!-- Hình Con tàu thám hiểm SGK Trang 81 -->
                    <div class="mb-8 text-center">
                        <img src="assets/images/toan/toan_tap_2/140/140-2-tau-tham-hiem.png" alt="Con tàu thám hiểm và Mặt Trăng" class="rounded-2xl w-full h-auto max-h-[260px] object-contain shadow-sm mx-auto">
                    </div>

                    <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 mb-8 text-left">
                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                            <span class="text-teal-900 font-extrabold">Quãng đường bay của con tàu đó là =</span>
                            <span class="inline-flex items-center flex-nowrap gap-2">
                                <input type="number" id="ans-140-2" class="w-36 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">km</span>
                            </span>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-140-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        Quãng đường bay của con tàu thám hiểm đó là:<br>
                        30 000 × 14 = 420 000 (km).<br>
                        Đáp số: 420 000 km.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-140-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-140-2" onclick="window.submitEx140_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 3 (Trang 81) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3. Chọn câu trả lời đúng</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Một chiếc xe tải đi giao hàng từ nhà kho A qua các điểm giao hàng B, C và D rồi quay lại nhà kho A (như hình vẽ). Biết vận tốc của xe trên đường đi là 45 km/h và tại mỗi điểm giao hàng xe dừng lại đúng 15 phút. Tổng thời gian đi và giao hàng của xe là:</p>
                        </div>
                    </div>

                    <!-- Hình Sơ đồ xe tải SGK Trang 81 -->
                    <div class="mb-8 text-center">
                        <img src="assets/images/toan/toan_tap_2/140/140-3-so-do-xe-tai.png" alt="Sơ đồ giao hàng xe tải" class="rounded-2xl w-full h-auto max-h-[260px] object-contain shadow-sm mx-auto">
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
                        <button onclick="window.lesson140SelectMCQ('140-3', 'A')" id="btn-140-3-A" class="mcq-btn p-5 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black text-xl md:text-2xl">A</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">45 phút</span>
                        </button>
                        <button onclick="window.lesson140SelectMCQ('140-3', 'B')" id="btn-140-3-B" class="mcq-btn p-5 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black text-xl md:text-2xl">B</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">1 giờ 20 phút</span>
                        </button>
                        <button onclick="window.lesson140SelectMCQ('140-3', 'C')" id="btn-140-3-C" class="mcq-btn p-5 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black text-xl md:text-2xl">C</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">2 giờ</span>
                        </button>
                        <button onclick="window.lesson140SelectMCQ('140-3', 'D')" id="btn-140-3-D" class="mcq-btn p-5 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black text-xl md:text-2xl">D</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">2 giờ 5 phút</span>
                        </button>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-140-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        Tổng quãng đường xe tải di chuyển từ A → B → C → D → A là:<br>
                        20 + 10 + 10 + 20 = 60 (km).<br>
                        Thời gian xe tải di chuyển trên đường là:<br>
                        60 : 45 = 4/3 (giờ) = 1 giờ 20 phút = 80 phút.<br>
                        Thời gian xe dừng lại giao hàng tại 3 điểm B, C, D là:<br>
                        15 × 3 = 45 (phút).<br>
                        Tổng thời gian đi và giao hàng của xe là:<br>
                        80 phút + 45 phút = 125 phút = 2 giờ 5 phút.<br>
                        Đáp án đúng là D (2 giờ 5 phút).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-140-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-140-3" onclick="window.submitEx140_3()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 4: Bài 4 (Trang 81) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">4</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 4. Khoảng cách giữa ga A và ga B</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Một đoàn tàu hoả rời ga A lúc 6 giờ 10 phút và đến ga B lúc 10 giờ 40 phút. Tính khoảng cách giữa ga A và ga B. Biết tàu hoả đi với vận tốc 80 km/h.</p>
                        </div>
                    </div>

                    <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 mb-8 text-left">
                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                            <span class="text-teal-900 font-extrabold">Khoảng cách giữa ga A và ga B là =</span>
                            <span class="inline-flex items-center flex-nowrap gap-2">
                                <input type="number" id="ans-140-4" class="w-32 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">km</span>
                            </span>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-140-4" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 4:</p>
                        Thời gian đoàn tàu hỏa chạy từ ga A đến ga B là:<br>
                        10 giờ 40 phút − 6 giờ 10 phút = 4 giờ 30 phút = 4,5 giờ.<br>
                        Khoảng cách giữa ga A và ga B là:<br>
                        80 × 4,5 = 360 (km).<br>
                        Đáp số: 360 km.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-140-4')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-140-4" onclick="window.submitEx140_4()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson140QuizPool = [
    { question: "s = 28 km, v = 14 km/h. t = ...?", options: ["2 giờ", "3 giờ", "4 giờ", "1,5 giờ"], answer: 0, level: "easy" },
    { question: "v = 90,2 km/h, t = 5 giờ. s = ...?", options: ["451 km", "450 km", "455 km", "441 km"], answer: 0, level: "easy" },
    { question: "s = 4 500 km, v = 1 000 km/h. t = ...?", options: ["4,5 giờ", "4 giờ", "5 giờ", "4,2 giờ"], answer: 0, level: "easy" },
    { question: "v = 8,44 km/h, t = 5 giờ. s = ...?", options: ["42,2 km", "42 km", "44,2 km", "40,2 km"], answer: 0, level: "easy" },
    { question: "v = 30 000 km/h, t = 14 giờ. s = ...?", options: ["420 000 km", "400 000 km", "300 000 km", "450 000 km"], answer: 0, level: "medium" },
    { question: "Tổng quãng đường xe tải đi 20+10+10+20 là:", options: ["60 km", "50 km", "70 km", "40 km"], answer: 0, level: "easy" },
    { question: "60 km : 45 km/h = ?", options: ["1 giờ 20 phút", "1 giờ 15 phút", "1 giờ 30 phút", "1 giờ"], answer: 0, level: "medium" },
    { question: "Xe dừng tại 3 điểm, mỗi điểm 15 phút. Tổng thời gian dừng là:", options: ["45 phút", "30 phút", "60 phút", "15 phút"], answer: 0, level: "easy" },
    { question: "80 phút + 45 phút = ?", options: ["125 phút = 2 giờ 5 phút", "120 phút", "130 phút", "2 giờ 15 phút"], answer: 0, level: "medium" },
    { question: "10 giờ 40 phút − 6 giờ 10 phút = ?", options: ["4 giờ 30 phút", "4 giờ 20 phút", "4 giờ 40 phút", "5 giờ"], answer: 0, level: "easy" },
    { question: "4 giờ 30 phút đổi ra giờ bằng:", options: ["4,5 giờ", "4,3 giờ", "4,25 giờ", "4,6 giờ"], answer: 0, level: "easy" },
    { question: "80 km/h × 4,5 giờ = ?", options: ["360 km", "320 km", "380 km", "400 km"], answer: 0, level: "medium" },
    { question: "Công thức tìm s khi biết v và t là:", options: ["s = v × t", "s = v : t", "s = t : v", "v = s × t"], answer: 0, level: "easy" },
    { question: "Công thức tìm t khi biết s và v là:", options: ["t = s : v", "t = s × v", "v = s : t", "s = v × t"], answer: 0, level: "easy" },
    { question: "Tàu bay 30 000 km/h trong 10 giờ. s = ...?", options: ["300 000 km", "30 000 km", "30 000 000 km", "3 000 km"], answer: 0, level: "easy" }
];

// 5. Global Handlers & State
window.lesson140State = {
    attempts: { s1: 0, s2: 0, s3: 0, s4: 0 },
    mcq: { s3: null }
};

window.lesson140SelectMCQ = function (exId, option) {
    if (exId === '140-3') {
        window.lesson140State.mcq.s3 = option;
        ['A', 'B', 'C', 'D'].forEach(opt => {
            const btn = document.getElementById(`btn-140-3-${opt}`);
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

window.submitEx140_1 = function () {
    window.lesson140State.attempts.s1++;
    const ta = document.getElementById('ans-140-1a')?.value.trim().replace(',', '.');
    const sb = document.getElementById('ans-140-1b')?.value.trim().replace(',', '.');
    const tc = document.getElementById('ans-140-1c')?.value.trim().replace(',', '.');
    const sd = document.getElementById('ans-140-1d')?.value.trim().replace(',', '.');

    if (!ta || !sb || !tc || !sd) {
        alert("Em hãy nhập đầy đủ kết quả ở cả 4 ô trống!");
        return;
    }

    const ca = (parseFloat(ta) === 2);
    const cb = (parseFloat(sb) === 451);
    const cc = (parseFloat(tc) === 4.5);
    const cd = (parseFloat(sd) === 42.2);

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0) + (cc ? 1 : 0) + (cd ? 1 : 0);
    const isCorrect = (correctCount === 4);
    const score = Math.round((correctCount / 4) * 100);

    window.showMathFeedback(
        isCorrect,
        "t=2 ; s=451 ; t=4,5 ; s=42,2",
        `t=${ta} ; s=${sb} ; t=${tc} ; s=${sd}`,
        "Em hãy vận dụng các công thức t = s : v và s = v × t để tìm các số còn thiếu trong bảng nhé!",
        `
        - Cột 1: t = 28 : 14 = 2 (giờ).<br>
        - Cột 2: s = 90,2 × 5 = 451 (km).<br>
        - Cột 3: t = 4 500 : 1 000 = 4,5 (giờ).<br>
        - Cột 4: s = 8,44 × 5 = 42,2 (km).<br>
        Em tính toán bảng số rất chính xác!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-140-1", window.lesson140State.attempts.s1, 4, correctCount);
};

window.submitEx140_2 = function () {
    window.lesson140State.attempts.s2++;
    const s = document.getElementById('ans-140-2')?.value.trim();

    if (!s) {
        alert("Em hãy nhập quãng đường con tàu thám hiểm!");
        return;
    }

    const isCorrect = (s === '420000' || s === '420 000');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "420 000 km",
        `${s} km`,
        "Em hãy lấy vận tốc (30 000 km/h) nhân với thời gian (14 giờ) theo công thức s = v × t nhé!",
        `
        Quãng đường bay của con tàu thám hiểm đó là:<br>
        30 000 × 14 = 420 000 (km).<br>
        Đáp số: 420 000 km.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-140-2", window.lesson140State.attempts.s2, 1, isCorrect ? 1 : 0);
};

window.submitEx140_3 = function () {
    window.lesson140State.attempts.s3++;
    const selected = window.lesson140State.mcq.s3;

    if (!selected) {
        alert("Em hãy lựa chọn câu trả lời!");
        return;
    }

    const isCorrect = (selected === 'D');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "D. 2 giờ 5 phút",
        `Câu ${selected}`,
        "Em hãy tính tổng quãng đường khép kín (20+10+10+20=60 km), tính thời gian xe chạy, cộng thêm thời gian dừng giao hàng tại 3 điểm B, C, D (3 × 15p = 45p) nhé!",
        `
        Tổng quãng đường xe tải di chuyển từ A → B → C → D → A là:<br>
        20 + 10 + 10 + 20 = 60 (km).<br>
        Thời gian xe tải di chuyển trên đường là:<br>
        60 : 45 = 4/3 (giờ) = 1 giờ 20 phút = 80 phút.<br>
        Thời gian xe dừng lại giao hàng tại 3 điểm B, C, D là:<br>
        15 × 3 = 45 (phút).<br>
        Tổng thời gian đi và giao hàng của xe là:<br>
        80 phút + 45 phút = 125 phút = 2 giờ 5 phút.<br>
        Đáp án đúng là D (2 giờ 5 phút).
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-140-3", window.lesson140State.attempts.s3, 1, isCorrect ? 1 : 0);
};

window.submitEx140_4 = function () {
    window.lesson140State.attempts.s4++;
    const s = document.getElementById('ans-140-4')?.value.trim();

    if (!s) {
        alert("Em hãy nhập khoảng cách giữa ga A và ga B!");
        return;
    }

    const isCorrect = (s === '360');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "360 km",
        `${s} km`,
        "Em hãy tính thời gian tàu chạy (lấy 10h40p − 6h10p = 4h30p = 4,5 giờ), rồi lấy vận tốc (80 km/h) nhân với thời gian vừa tìm được nhé!",
        `
        Thời gian đoàn tàu hỏa chạy từ ga A đến ga B là:<br>
        10 giờ 40 phút − 6 giờ 10 phút = 4 giờ 30 phút = 4,5 giờ.<br>
        Khoảng cách giữa ga A và ga B là:<br>
        80 × 4,5 = 360 (km).<br>
        Đáp số: 360 km.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-140-4", window.lesson140State.attempts.s4, 1, isCorrect ? 1 : 0);
};

// 6. Main Lesson Export
export default {
    metadata,
    lessonInfo,
    content: lesson140Content,
    practice: lesson140Practice,
    quizPool: lesson140QuizPool,
    onLoad: () => {
        console.log("Lesson 140 Loaded: Bài 60. Quãng đường, thời gian của một chuyển động đều (tiết 3)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};
