/**
 * @file index.js
 * @description Standardized Lesson 144: Bài 62. Luyện tập chung (tiết 2)
 * Targets: 100% SGK compliance (Trang 85), 4 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-144",
    period: "144",
    title: "Bài 62. Luyện tập chung (tiết 2)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 62. LUYỆN TẬP CHUNG (TIẾT 2)",
    description: "Luyện tập các bài toán thực tế về vận tốc, quãng đường, thời gian và thế kỷ.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 85"
};

// 2. HTML Content (Khám phá / Lý thuyết ôn tập - Trang 85)
const lesson144Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">📐 LUYỆN TẬP CHUNG: TÍNH TOÁN THỰC TẾ VỀ VẬN TỐC VÀ THỜI GIAN</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-lg md:text-xl">
                    <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-200 space-y-2">
                        <p class="font-black text-blue-800 text-xl md:text-2xl">🚀 Công thức chuyển động:</p>
                        <p class="text-slate-800">• Vận tốc: <span class="font-black text-blue-700 font-mono">v = s : t</span></p>
                        <p class="text-slate-800">• Quãng đường: <span class="font-black text-blue-700 font-mono">s = v × t</span></p>
                        <p class="text-slate-800">• Thời gian: <span class="font-black text-blue-700 font-mono">t = s : v</span></p>
                    </div>
                    <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-200 space-y-2">
                        <p class="font-black text-teal-800 text-xl md:text-2xl">⏱️ Quy đổi đơn vị:</p>
                        <p class="text-slate-800">• 1 thế kỷ = 100 năm</p>
                        <p class="text-slate-800">• 1 giờ = 60 phút = 3600 giây</p>
                        <p class="text-slate-800">• Đổi km/h → m/s: Chia 3,6</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 4 Slide phụ - Trang 85)
const lesson144Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 85) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Tính vận tốc của cô Trang</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Buổi sáng, do trời mưa và tắc đường nên cô Trang đi được 6 km trong 30 phút. Tính vận tốc của cô Trang (theo đơn vị km/h).</p>
                        </div>
                    </div>

                    <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 mb-8 text-left">
                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                            <span class="text-blue-900 font-extrabold">Vận tốc của cô Trang =</span>
                            <span class="inline-flex items-center flex-nowrap gap-2">
                                <input type="number" id="ans-144-1" class="w-32 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">km/h</span>
                            </span>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-144-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        Đổi: 30 phút = 0,5 giờ.<br>
                        Vận tốc của cô Trang là: 6 : 0,5 = 12 (km/h).<br>
                        Đáp số: 12 km/h.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-144-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-144-1" onclick="window.submitEx144_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 85) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Bạn Tí nói đúng hay sai?</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Công ty lâu đời nhất thế giới được thành lập vào năm 578 và mới chấm dứt hoạt động vào năm 2006. Bạn Tí nói rằng công ty ấy đã hoạt động được hơn 14 thế kì. Hỏi bạn ấy nói đúng hay sai?</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
                        <button onclick="window.lesson144SelectMCQ('144-2', 'A')" id="btn-144-2-A" class="mcq-btn p-6 bg-white border-2 border-teal-200 rounded-3xl flex items-center gap-4 hover:border-teal-500 transition-all">
                            <span class="w-12 h-12 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xl md:text-2xl">A</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">Đúng</span>
                        </button>
                        <button onclick="window.lesson144SelectMCQ('144-2', 'B')" id="btn-144-2-B" class="mcq-btn p-6 bg-white border-2 border-teal-200 rounded-3xl flex items-center gap-4 hover:border-teal-500 transition-all">
                            <span class="w-12 h-12 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xl md:text-2xl">B</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">Sai</span>
                        </button>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-144-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        Số năm công ty ấy đã hoạt động là: 2006 − 578 = 1 428 (năm).<br>
                        Vì 1 428 năm = 14 thế kỷ và 28 năm (hơn 14 thế kỷ) nên bạn Tí nói ĐÚNG.<br>
                        Đáp án đúng là A (Đúng).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-144-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-144-2" onclick="window.submitEx144_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 3 (Trang 85) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-amber-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-amber-700 block">Bài 3. Xe tải chở thiết bị máy phát điện gió</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Một xe tải vận chuyển các thiết bị lắp ráp máy phát điện gió từ cảng đến nhà máy điện qua quãng đường dài 56 km. Để đảm bảo an toàn, xe chỉ đi với vận tốc 16 km/h. Biết lúc xe rời bến là 5 giờ sáng, hỏi xe đến nhà máy điện lúc mấy giờ?</p>
                        </div>
                    </div>

                    <div class="p-6 bg-amber-50 rounded-3xl border-2 border-amber-100 mb-8 text-left">
                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                            <span class="text-amber-900 font-extrabold">Xe đến nhà máy điện lúc =</span>
                            <span class="inline-flex items-center flex-nowrap gap-2">
                                <input type="number" id="ans-144-3-h" class="w-24 h-14 border-2 border-amber-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-amber-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">giờ</span>
                                <input type="number" id="ans-144-3-min" class="w-24 h-14 border-2 border-amber-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-amber-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">phút</span>
                            </span>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-144-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        Thời gian xe tải đi trên đường là: 56 : 16 = 3,5 (giờ) = 3 giờ 30 phút.<br>
                        Xe đến nhà máy điện lúc: 5 giờ + 3 giờ 30 phút = 8 giờ 30 phút.<br>
                        Đáp số: 8 giờ 30 phút.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-144-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-144-3" onclick="window.submitEx144_3()" class="w-16 h-16 md:w-20 md:h-20 bg-amber-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 4: Bài 4 (Trang 85) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">4</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 4. Hành trình chú bộ đội đặc công</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Một chú bộ đội đặc công xuất phát lúc 4 giờ sáng. Chú chạy qua quãng đường dài 6,5 km với vận tốc 13 km/h. Sau đó, chú bơi 2,7 km trong 1 giờ 30 phút để đến chỗ máy bay.</p>
                        </div>
                    </div>

                    <!-- Hình Sơ đồ đặc công SGK Trang 85 -->
                    <div class="mb-8 text-center">
                        <img src="assets/images/toan/toan_tap_2/144/144-4-dac-cong.png" alt="Sơ đồ bộ đội đặc công" class="rounded-2xl w-full h-auto max-h-[260px] object-contain shadow-sm mx-auto">
                    </div>

                    <div class="space-y-4 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-sky-900 font-extrabold">a) Vận tốc bơi của chú bộ đội đặc công =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="text" id="ans-144-4a" class="w-28 h-14 border-2 border-sky-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-sky-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">m/s</span>
                                </span>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-sky-900 font-extrabold">b) Khi chú đến chỗ máy bay là lúc =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-144-4b-h" class="w-24 h-14 border-2 border-sky-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-sky-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">giờ</span>
                                    <input type="number" id="ans-144-4b-min" class="w-24 h-14 border-2 border-sky-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-sky-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">phút</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-144-4" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 4:</p>
                        a) Đổi: 2,7 km = 2 700 m ; 1 giờ 30 phút = 5 400 giây.<br>
                        Vận tốc bơi của chú bộ đội là: 2 700 : 5 400 = 0,5 (m/s).<br>
                        b) Thời gian chú chạy trên đường đất là: 6,5 : 13 = 0,5 (giờ) = 30 phút.<br>
                        Tổng thời gian chạy và bơi là: 30 phút + 1 giờ 30 phút = 2 giờ.<br>
                        Chú đến chỗ máy bay lúc: 4 giờ + 2 giờ = 6 giờ sáng (6 giờ 00 phút).<br>
                        Đáp số: a) 0,5 m/s ; b) 6 giờ 0 phút.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-144-4')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-144-4" onclick="window.submitEx144_4()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson144QuizPool = [
    { question: "Cô Trang đi 6 km trong 30 phút. Vận tốc cô Trang là:", options: ["12 km/h", "10 km/h", "15 km/h", "18 km/h"], answer: 0, level: "easy" },
    { question: "Từ năm 578 đến năm 2006 là bao nhiêu năm?", options: ["1428 năm", "1420 năm", "1430 năm", "1400 năm"], answer: 0, level: "easy" },
    { question: "1428 năm bằng mấy thế kỷ?", options: ["Hơn 14 thế kỷ", "Dưới 14 thế kỷ", "Đúng 14 thế kỷ", "15 thế kỷ"], answer: 0, level: "easy" },
    { question: "Xe đi 56 km với vận tốc 16 km/h. Thời gian đi là:", options: ["3,5 giờ", "3 giờ", "4 giờ", "3,2 giờ"], answer: 0, level: "easy" },
    { question: "3,5 giờ đổi ra giờ và phút bằng:", options: ["3 giờ 30 phút", "3 giờ 50 phút", "3 giờ 5 phút", "3 giờ 15 phút"], answer: 0, level: "easy" },
    { question: "Xe xuất phát lúc 5:00 sáng, đi hết 3h30p. Xe đến nơi lúc:", options: ["8 giờ 30 phút", "9 giờ 30 phút", "7 giờ 30 phút", "8 giờ"], answer: 0, level: "easy" },
    { question: "2,7 km bơi trong 1h30p (5400s). Vận tốc m/s là:", options: ["0,5 m/s", "0,6 m/s", "0,4 m/s", "1 m/s"], answer: 0, level: "medium" },
    { question: "Chú chạy 6,5 km với vận tốc 13 km/h. Thời gian chạy là:", options: ["30 phút", "45 phút", "20 phút", "1 giờ"], answer: 0, level: "easy" },
    { question: "Tổng thời gian chạy (30p) và bơi (1h30p) là:", options: ["2 giờ", "1 giờ 50 phút", "2 giờ 10 phút", "1,5 giờ"], answer: 0, level: "easy" },
    { question: "Xuất phát 4:00, di chuyển 2 giờ. Đến nơi lúc:", options: ["6 giờ", "5 giờ", "7 giờ", "6 giờ 30 phút"], answer: 0, level: "easy" },
    { question: "1 thế kỷ bằng bao nhiêu năm?", options: ["100 năm", "10 năm", "1000 năm", "50 năm"], answer: 0, level: "easy" },
    { question: "30 phút bằng bao nhiêu giờ?", options: ["0,5 giờ", "0,3 giờ", "0,6 giờ", "0,25 giờ"], answer: 0, level: "easy" },
    { question: "2,7 km đổi ra mét bằng:", options: ["2 700 m", "270 m", "27 000 m", "27 m"], answer: 0, level: "easy" },
    { question: "1 giờ 30 phút đổi ra giây bằng:", options: ["5 400 giây", "3 600 giây", "1 800 giây", "900 giây"], answer: 0, level: "easy" },
    { question: "1,8 km/h đổi ra m/s bằng:", options: ["0,5 m/s", "1 m/s", "0,6 m/s", "0,8 m/s"], answer: 0, level: "medium" }
];

// 5. Global Handlers & State
window.lesson144State = {
    attempts: { s1: 0, s2: 0, s3: 0, s4: 0 },
    mcq: { s2: null }
};

window.lesson144SelectMCQ = function (exId, option) {
    if (exId === '144-2') {
        window.lesson144State.mcq.s2 = option;
        ['A', 'B'].forEach(opt => {
            const btn = document.getElementById(`btn-144-2-${opt}`);
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

window.submitEx144_1 = function () {
    window.lesson144State.attempts.s1++;
    const v = document.getElementById('ans-144-1')?.value.trim();

    if (!v) {
        alert("Em hãy nhập vận tốc của cô Trang!");
        return;
    }

    const isCorrect = (parseFloat(v) === 12);
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "12 km/h",
        `${v} km/h`,
        "Em hãy đổi 30 phút sang giờ (0,5 giờ), rồi lấy quãng đường 6 km chia cho số giờ vừa đổi nhé!",
        `
        Đổi: 30 phút = 0,5 giờ.<br>
        Vận tốc của cô Trang là: 6 : 0,5 = 12 (km/h).<br>
        Đáp số: 12 km/h.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-144-1", window.lesson144State.attempts.s1, 1, isCorrect ? 1 : 0);
};

window.submitEx144_2 = function () {
    window.lesson144State.attempts.s2++;
    const selected = window.lesson144State.mcq.s2;

    if (!selected) {
        alert("Em hãy lựa chọn Đúng hoặc Sai!");
        return;
    }

    const isCorrect = (selected === 'A');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "A. Đúng",
        `Câu ${selected}`,
        "Em hãy lấy năm chấm dứt (2006) trừ đi năm thành lập (578) để tìm số năm hoạt động, rồi đổi sang đơn vị thế kỷ nhé!",
        `
        Số năm công ty ấy đã hoạt động là: 2006 − 578 = 1 428 (năm).<br>
        Vì 1 428 năm = 14 thế kỷ và 28 năm (hơn 14 thế kỷ) nên bạn Tí nói ĐÚNG.<br>
        Đáp án đúng là A (Đúng).
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-144-2", window.lesson144State.attempts.s2, 1, isCorrect ? 1 : 0);
};

window.submitEx144_3 = function () {
    window.lesson144State.attempts.s3++;
    const h = document.getElementById('ans-144-3-h')?.value.trim();
    const min = document.getElementById('ans-144-3-min')?.value.trim();

    if (!h || min === undefined || min === '') {
        alert("Em hãy nhập đầy đủ cả giờ và phút!");
        return;
    }

    const isCorrect = (parseInt(h) === 8 && parseInt(min) === 30);
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "8 giờ 30 phút",
        `${h} giờ ${min} phút`,
        "Em hãy tính thời gian xe đi (56 : 16 = 3,5 giờ = 3 giờ 30 phút), rồi lấy lúc xuất phát 5 giờ sáng cộng với thời gian đi nhé!",
        `
        Thời gian xe tải đi trên đường là: 56 : 16 = 3,5 (giờ) = 3 giờ 30 phút.<br>
        Xe đến nhà máy điện lúc: 5 giờ + 3 giờ 30 phút = 8 giờ 30 phút.<br>
        Đáp số: 8 giờ 30 phút.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-144-3", window.lesson144State.attempts.s3, 1, isCorrect ? 1 : 0);
};

window.submitEx144_4 = function () {
    window.lesson144State.attempts.s4++;
    const va = document.getElementById('ans-144-4a')?.value.trim().replace(',', '.');
    const bh = document.getElementById('ans-144-4b-h')?.value.trim();
    const bm = document.getElementById('ans-144-4b-min')?.value.trim();

    if (!va || !bh || bm === undefined || bm === '') {
        alert("Em hãy nhập đầy đủ kết quả của cả câu a và câu b!");
        return;
    }

    const ca = (parseFloat(va) === 0.5);
    const cb = (parseInt(bh) === 6 && (parseInt(bm) === 0 || parseInt(bm) === 0.0));

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0);
    const isCorrect = (correctCount === 2);
    const score = Math.round((correctCount / 2) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 0,5 m/s ; b) 6 giờ 0 phút",
        `a) ${va} m/s ; b) ${bh} giờ ${bm} phút`,
        "Với câu a: em đổi 2,7 km = 2700 m và 1h30p = 5400s để tính v (m/s). Với câu b: em tính thời gian chạy (6,5 : 13 = 0,5h = 30p), cộng với 1h30p bơi và 4h xuất phát nhé!",
        `
        a) Đổi: 2,7 km = 2 700 m ; 1 giờ 30 phút = 5 400 giây.<br>
        Vận tốc bơi của chú bộ đội là: 2 700 : 5 400 = 0,5 (m/s).<br>
        b) Thời gian chú chạy trên đường đất là: 6,5 : 13 = 0,5 (giờ) = 30 phút.<br>
        Tổng thời gian chạy và bơi là: 30 phút + 1 giờ 30 phút = 2 giờ.<br>
        Chú đến chỗ máy bay lúc: 4 giờ + 2 giờ = 6 giờ sáng (6 giờ 0 phút).<br>
        Đáp số: a) 0,5 m/s ; b) 6 giờ 0 phút.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-144-4", window.lesson144State.attempts.s4, 2, correctCount);
};

// 6. Main Lesson Export

export const lesson144 = {
    topic: "Số đo thời gian",
    week: "29",
    period: "144",
    title: metadata.title || lessonInfo.title,
    desc: lessonInfo.description,
    content: lesson144Content,
    practice: lesson144Practice,
    quizPool: lesson144QuizPool,
    metadata,
    lessonInfo,
    onLoad: () => {
        console.log("Lesson 144 Loaded");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};

window.lesson144 = lesson144;
export default lesson144;
