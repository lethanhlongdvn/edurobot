/**
 * @file index.js
 * @description Standardized Lesson 132: Bài 57. Cộng, trừ số đo thời gian (tiết 2)
 * Targets: 100% SGK compliance (Trang 68-70), 6 slides (1a, 1b, 2a, 2b, 3a, 3b) with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-132",
    period: "132",
    title: "Bài 57. Cộng, trừ số đo thời gian (tiết 2)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 57. CỘNG, TRỪ SỐ ĐO THỜI GIAN (TIẾT 2)",
    description: "Học kỹ thuật đặt tính và tính trừ số đo thời gian, xử lý mượn đơn vị và tính toán múi giờ.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 68-70"
};

// 2. HTML Content (Khám phá / Tìm hiểu bài - Trang 68)
const lesson132Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <!-- Hình ảnh Khám phá SGK Trang 68 -->
            <div class="p-6 bg-white rounded-[32px] border-2 border-blue-100 shadow-md flex items-center justify-center">
                <img src="assets/images/toan/toan_tap_2/132/132-khampha.png" alt="Khám phá Trừ số đo thời gian" class="rounded-2xl w-full max-w-[70%] h-auto mx-auto shadow-sm">
            </div>

            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">⏱️ PHÉP TRỪ SỐ ĐO THỜI GIAN</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-2xl mx-auto space-y-4 text-center">
                <p class="text-xl md:text-2xl font-black text-blue-800">
                    10 giờ 30 phút − 9 giờ 20 phút = ?
                </p>

                <div class="inline-block bg-blue-50 p-6 rounded-3xl border border-blue-200 text-left text-xl md:text-2xl font-mono font-black text-slate-800 leading-relaxed">
                    <div class="grid grid-cols-2 gap-x-4">
                        <span class="text-right">10 giờ</span>
                        <span>30 phút</span>
                    </div>
                    <div class="grid grid-cols-2 gap-x-4 border-b-2 border-slate-800 pb-2">
                        <span class="text-right">− 9 giờ</span>
                        <span>20 phút</span>
                    </div>
                    <div class="grid grid-cols-2 gap-x-4 pt-2 text-blue-700">
                        <span class="text-right">1 giờ</span>
                        <span>10 phút</span>
                    </div>
                </div>

                <p class="text-xl md:text-2xl font-black text-emerald-600">
                    Vậy: 10 giờ 30 phút − 9 giờ 20 phút = 1 giờ 10 phút.
                </p>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 6 Slide phụ - Trang 69-70)
const lesson132Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1a -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-10 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1a</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1a. Tính</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Thực hiện phép trừ số đo thời gian theo cột dọc.</p>
                        </div>
                    </div>

                    <div class="bg-blue-50/50 p-6 rounded-3xl border border-blue-100 mb-8 space-y-6 text-left">
                        <div class="space-y-6">
                            <!-- Phép tính 1 -->
                            <div class="p-6 bg-white rounded-2xl border border-blue-100 space-y-4">
                                <p class="text-lg md:text-xl font-black text-blue-700">20 phút 25 giây − 12 phút 10 giây = ?</p>
                                
                                <div class="grid gap-x-3 gap-y-2 items-center font-mono py-2 text-xl font-bold text-slate-800" style="grid-template-columns: 28px 40px 68px 40px 64px;">
                                    <span></span>
                                    <span class="text-center">20</span>
                                    <span>phút</span>
                                    <span class="text-center">25</span>
                                    <span>giây</span>

                                    <span class="text-xl font-black text-blue-600 text-center">−</span>
                                    <span class="text-center">12</span>
                                    <span>phút</span>
                                    <span class="text-center">10</span>
                                    <span>giây</span>

                                    <span class="border-b-2 border-slate-800 w-full col-span-5 my-1"></span>

                                    <span></span>
                                    <input type="number" id="ans-132-1a1-m" class="w-10 h-10 border-2 border-blue-600 rounded-lg text-center font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                    <span class="text-blue-700 font-black">phút</span>
                                    <input type="number" id="ans-132-1a1-s" class="w-10 h-10 border-2 border-blue-600 rounded-lg text-center font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                    <span class="text-blue-700 font-black">giây</span>
                                </div>
                            </div>

                            <!-- Phép tính 2 -->
                            <div class="p-6 bg-white rounded-2xl border border-blue-100 space-y-4">
                                <p class="text-lg md:text-xl font-black text-blue-700">16 giờ 30 phút − 12 giờ 30 phút = ?</p>
                                
                                <div class="grid gap-x-3 gap-y-2 items-center font-mono py-2 text-xl font-bold text-slate-800" style="grid-template-columns: 28px 40px 56px 40px 64px;">
                                    <span></span>
                                    <span class="text-center">16</span>
                                    <span>giờ</span>
                                    <span class="text-center">30</span>
                                    <span>phút</span>

                                    <span class="text-xl font-black text-blue-600 text-center">−</span>
                                    <span class="text-center">12</span>
                                    <span>giờ</span>
                                    <span class="text-center">30</span>
                                    <span>phút</span>

                                    <span class="border-b-2 border-slate-800 w-full col-span-5 my-1"></span>

                                    <span></span>
                                    <input type="number" id="ans-132-1a2-h" class="w-10 h-10 border-2 border-blue-600 rounded-lg text-center font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                    <span class="text-blue-700 font-black">giờ</span>
                                    <span class="text-center font-black text-blue-600">0</span>
                                    <span class="text-blue-700 font-black">phút</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-132-1a" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1a:</p>
                        - 20 phút 25 giây − 12 phút 10 giây = 8 phút 15 giây.<br>
                        - 16 giờ 30 phút − 12 giờ 30 phút = 4 giờ.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-132-1a')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-132-1a" onclick="window.submitEx132_1a()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 1b -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-10 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1b</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1b. Chọn câu trả lời đúng</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Một ô tô đi từ Thanh Hoá lúc 14 giờ 5 phút và đến Nghệ An lúc 17 giờ 20 phút cùng ngày. Hỏi ô tô đó đi từ Thanh Hoá đến Nghệ An hết bao lâu?</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
                        <button onclick="window.lesson132SelectMCQ('132-1b', 'A')" id="btn-132-1b-A" class="mcq-btn p-5 bg-white border-2 border-blue-200 rounded-2xl flex items-center gap-3 hover:border-blue-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-black text-xl">A</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">3 giờ 5 phút</span>
                        </button>
                        <button onclick="window.lesson132SelectMCQ('132-1b', 'B')" id="btn-132-1b-B" class="mcq-btn p-5 bg-white border-2 border-blue-200 rounded-2xl flex items-center gap-3 hover:border-blue-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-black text-xl">B</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">3 giờ 15 phút</span>
                        </button>
                        <button onclick="window.lesson132SelectMCQ('132-1b', 'C')" id="btn-132-1b-C" class="mcq-btn p-5 bg-white border-2 border-blue-200 rounded-2xl flex items-center gap-3 hover:border-blue-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-black text-xl">C</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">3 giờ 25 phút</span>
                        </button>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-132-1b" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1b:</p>
                        Thời gian ô tô đi từ Thanh Hoá đến Nghệ An là:<br>
                        17 giờ 20 phút − 14 giờ 5 phút = 3 giờ 15 phút.<br>
                        Đáp án đúng là B (3 giờ 15 phút).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-132-1b')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-132-1b" onclick="window.submitEx132_1b()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 2a -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-10 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2a</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2a. Tính (theo mẫu)</h3>
                            <p class="text-2xl md:text-3xl text-slate-800 leading-relaxed font-black tracking-tight">Thực hiện phép trừ số đo thời gian có mượn đơn vị.</p>
                        </div>
                    </div>

                    <!-- Mẫu -->
                    <div class="bg-teal-50/50 p-8 rounded-[2rem] border-2 border-teal-200 mb-10 text-left w-full space-y-3 shadow-sm">
                        <p class="text-xl md:text-2xl font-black text-teal-900">
                            💡 Mẫu: 4 phút 10 giây − 2 phút 30 giây = ?
                        </p>
                        <p class="text-lg md:text-xl font-mono font-bold text-slate-800 ml-6 leading-relaxed">
                            Đổi: 4 phút 10 giây = 3 phút 70 giây<br>
                            &nbsp;&nbsp;3 phút 70 giây<br>
                            − 2 phút 30 giây<br>
                            ----------------<br>
                            &nbsp;&nbsp;<span class="whitespace-nowrap">1 phút 40 giây</span>
                        </p>
                        <p class="text-lg md:text-xl font-black text-teal-700 whitespace-nowrap">
                            Vậy: 4 phút 10 giây − 2 phút 30 giây = 1 phút 40 giây.
                        </p>
                    </div>

                    <div class="space-y-6 mb-12 text-left w-full">
                        <!-- a) -->
                        <div class="p-6 bg-white rounded-3xl border-2 border-teal-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-teal-800 font-extrabold">1 giờ 30 phút − 50 phút =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-132-2a-m" class="w-24 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">phút</span>
                                </span>
                            </div>
                        </div>

                        <!-- b) -->
                        <div class="p-6 bg-white rounded-3xl border-2 border-teal-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-teal-800 font-extrabold">8 phút 20 giây − 5 phút 40 giây =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-132-2b-m" class="w-24 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">phút</span>
                                    <input type="number" id="ans-132-2b-s" class="w-24 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">giây</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-132-2a" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2a:</p>
                        - 1 giờ 30 phút − 50 phút = 90 phút − 50 phút = 40 phút.<br>
                        - 8 phút 20 giây − 5 phút 40 giây = 7 phút 80 giây − 5 phút 40 giây = 2 phút 40 giây.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-132-2a')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-132-2a" onclick="window.submitEx132_2a()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 4: Bài 2b -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-10 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2b</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2b. Chọn câu trả lời đúng</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Một máy bay có giờ khởi hành dự kiến là 6 giờ 30 phút. Tuy nhiên do tình hình thời tiết xấu, giờ khởi hành bị lùi lại đến 7 giờ 20 phút cùng ngày. Hỏi giờ khởi hành bị lùi lại bao lâu?</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
                        <button onclick="window.lesson132SelectMCQ('132-2b', 'A')" id="btn-132-2b-A" class="mcq-btn p-5 bg-white border-2 border-teal-200 rounded-2xl flex items-center gap-3 hover:border-teal-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xl">A</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">1 giờ 10 phút</span>
                        </button>
                        <button onclick="window.lesson132SelectMCQ('132-2b', 'B')" id="btn-132-2b-B" class="mcq-btn p-5 bg-white border-2 border-teal-200 rounded-2xl flex items-center gap-3 hover:border-teal-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xl">B</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">1 giờ</span>
                        </button>
                        <button onclick="window.lesson132SelectMCQ('132-2b', 'C')" id="btn-132-2b-C" class="mcq-btn p-5 bg-white border-2 border-teal-200 rounded-2xl flex items-center gap-3 hover:border-teal-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xl">C</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">50 phút</span>
                        </button>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-132-2b" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2b:</p>
                        Giờ khởi hành bị lùi lại số thời gian là:<br>
                        7 giờ 20 phút − 6 giờ 30 phút = 6 giờ 80 phút − 6 giờ 30 phút = 50 phút.<br>
                        Đáp án đúng là C (50 phút).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-132-2b')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-132-2b" onclick="window.submitEx132_2b()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 5: Bài 3a (SGK Trang 70) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3a</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3a. Chọn câu trả lời đúng (Múi giờ quốc tế)</h3>
                            <p class="text-lg md:text-xl font-bold text-slate-800 leading-relaxed">
                                Thời gian (hệ 24 giờ) tại cùng một thời điểm ở các thành phố được cho trong bảng bên dưới:
                            </p>
                        </div>
                    </div>

                    <!-- Bảng múi giờ SGK -->
                    <div class="overflow-x-auto mb-8">
                        <table class="w-full max-w-2xl mx-auto border-4 border-rose-200 rounded-2xl text-lg md:text-xl font-bold text-slate-800 text-center overflow-hidden">
                            <thead class="bg-rose-100 text-rose-900">
                                <tr>
                                    <th class="p-4 border border-rose-200">Tên thành phố</th>
                                    <th class="p-4 border border-rose-200">Thời gian</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                <tr><td class="p-3 border border-rose-100 font-black">Hà Nội</td><td class="p-3 border border-rose-100">8 giờ 30 phút ngày 1 tháng 6</td></tr>
                                <tr><td class="p-3 border border-rose-100 font-black">Xin-ga-po</td><td class="p-3 border border-rose-100">9 giờ 30 phút ngày 1 tháng 6</td></tr>
                                <tr><td class="p-3 border border-rose-100 font-black">Pa-ri</td><td class="p-3 border border-rose-100">3 giờ 30 phút ngày 1 tháng 6</td></tr>
                                <tr><td class="p-3 border border-rose-100 font-black">Niu Oóc</td><td class="p-3 border border-rose-100">21 giờ 30 phút ngày 31 tháng 5</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="p-6 bg-sky-50 rounded-3xl border border-sky-200 text-left mb-8 space-y-4">
                        <p class="text-xl font-black text-sky-900">
                            Tại thời điểm ở Hà Nội là 11 giờ 30 phút ngày 1 tháng 6 thì ở Niu Oóc là:
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button onclick="window.lesson132SelectMCQ('132-3a', 'A')" id="btn-132-3a-A" class="mcq-btn p-4 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 text-left transition-all">
                                <span class="w-8 h-8 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black">A</span>
                                <span class="font-bold text-lg text-slate-800">0 giờ 30 phút ngày 31 tháng 5</span>
                            </button>
                            <button onclick="window.lesson132SelectMCQ('132-3a', 'B')" id="btn-132-3a-B" class="mcq-btn p-4 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 text-left transition-all">
                                <span class="w-8 h-8 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black">B</span>
                                <span class="font-bold text-lg text-slate-800">12 giờ 30 phút ngày 1 tháng 6</span>
                            </button>
                            <button onclick="window.lesson132SelectMCQ('132-3a', 'C')" id="btn-132-3a-C" class="mcq-btn p-4 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 text-left transition-all">
                                <span class="w-8 h-8 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black">C</span>
                                <span class="font-bold text-lg text-slate-800">0 giờ 30 phút ngày 1 tháng 6</span>
                            </button>
                            <button onclick="window.lesson132SelectMCQ('132-3a', 'D')" id="btn-132-3a-D" class="mcq-btn p-4 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 text-left transition-all">
                                <span class="w-8 h-8 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black">D</span>
                                <span class="font-bold text-lg text-slate-800">12 giờ 30 phút ngày 31 tháng 5</span>
                            </button>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-132-3a" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3a:</p>
                        Từ bảng dữ liệu, Niu Oóc chậm hơn Hà Nội 11 tiếng.<br>
                        Khi Hà Nội là 11 giờ 30 phút ngày 1/6 thì ở Niu Oóc là:<br>
                        11 giờ 30 phút − 11 giờ = 0 giờ 30 phút ngày 1 tháng 6.<br>
                        Đáp án đúng là C (0 giờ 30 phút ngày 1 tháng 6).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-132-3a')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-132-3a" onclick="window.submitEx132_3a()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 6: Bài 3b (SGK Trang 70 - Quan sát tranh & Nối thành phố) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3b</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3b. Quan sát tranh & Cho biết đồng hồ chỉ giờ ở thành phố nào</h3>
                            <p class="text-lg md:text-xl font-bold text-slate-800 leading-relaxed">
                                Tại thời điểm ở Hà Nội là 12 giờ ngày 1 tháng 6, em hãy cho biết mỗi đồng hồ đang chỉ giờ ở thành phố nào?
                            </p>
                        </div>
                    </div>

                    <!-- 4 Tranh biểu tượng thành phố SGK -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                        <div class="p-4 bg-sky-50/50 rounded-3xl border-2 border-sky-100 text-center space-y-3">
                            <img src="assets/images/toan/toan_tap_2/132/132-hanoi.png" alt="Hà Nội" class="rounded-2xl w-full h-auto max-h-[300px] object-contain shadow-sm mx-auto">
                            <p class="font-black text-xl text-sky-900">HÀ NỘI (12:00)</p>
                        </div>
                        <div class="p-4 bg-sky-50/50 rounded-3xl border-2 border-sky-100 text-center space-y-3">
                            <img src="assets/images/toan/toan_tap_2/132/132-paris.png" alt="Pa-ri" class="rounded-2xl w-full h-auto max-h-[300px] object-contain shadow-sm mx-auto">
                            <select id="ans-132-3b-paris" class="w-full p-3 border-2 border-sky-400 rounded-xl font-black text-lg text-sky-900 bg-white outline-none">
                                <option value="">-- Chọn thành phố --</option>
                                <option value="Pa-ri">Pa-ri</option>
                                <option value="Niu Oóc">Niu Oóc</option>
                                <option value="Xin-ga-po">Xin-ga-po</option>
                            </select>
                        </div>
                        <div class="p-4 bg-sky-50/50 rounded-3xl border-2 border-sky-100 text-center space-y-3">
                            <img src="assets/images/toan/toan_tap_2/132/132-newyork.png" alt="Niu Oóc" class="rounded-2xl w-full h-auto max-h-[300px] object-contain shadow-sm mx-auto">
                            <select id="ans-132-3b-newyork" class="w-full p-3 border-2 border-sky-400 rounded-xl font-black text-lg text-sky-900 bg-white outline-none">
                                <option value="">-- Chọn thành phố --</option>
                                <option value="Pa-ri">Pa-ri</option>
                                <option value="Niu Oóc">Niu Oóc</option>
                                <option value="Xin-ga-po">Xin-ga-po</option>
                            </select>
                        </div>
                        <div class="p-4 bg-sky-50/50 rounded-3xl border-2 border-sky-100 text-center space-y-3">
                            <img src="assets/images/toan/toan_tap_2/132/132-singapore.png" alt="Xin-ga-po" class="rounded-2xl w-full h-auto max-h-[300px] object-contain shadow-sm mx-auto">
                            <select id="ans-132-3b-singapore" class="w-full p-3 border-2 border-sky-400 rounded-xl font-black text-lg text-sky-900 bg-white outline-none">
                                <option value="">-- Chọn thành phố --</option>
                                <option value="Pa-ri">Pa-ri</option>
                                <option value="Niu Oóc">Niu Oóc</option>
                                <option value="Xin-ga-po">Xin-ga-po</option>
                            </select>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-132-3b" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3b:</p>
                        Khi Hà Nội là 12 giờ ngày 1/6:<br>
                        - Pa-ri (chậm 5 giờ): 12 giờ − 5 giờ = 7 giờ (Tháp Eiffel - ĐH chỉ 7h).<br>
                        - Niu Oóc (chậm 11 giờ): 12 giờ − 11 giờ = 1 giờ (Nữ thần Tự do - ĐH chỉ 1h).<br>
                        - Xin-ga-po (nhanh hơn 1 giờ): 12 giờ + 1 giờ = 13 giờ (Sư tử biển Merlion - ĐH chỉ 1h chiều).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-132-3b')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-132-3b" onclick="window.submitEx132_3b()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson132QuizPool = [
    { question: "20 phút 30 giây − 10 phút 10 giây = ?", options: ["10 phút 20 giây", "10 phút 10 giây", "10 phút 30 giây", "10 phút 40 giây"], answer: 0, level: "easy" },
    { question: "15 giờ 45 phút − 5 giờ 15 phút = ?", options: ["10 giờ 30 phút", "10 giờ 15 phút", "10 giờ 45 phút", "11 giờ"], answer: 0, level: "easy" },
    { question: "12 phút 15 giây − 4 phút 30 giây = ?", options: ["7 phút 45 giây", "8 phút 45 giây", "7 phút 15 giây", "8 phút 15 giây"], answer: 0, level: "medium" },
    { question: "8 giờ 10 phút − 2 giờ 40 phút = ?", options: ["5 giờ 30 phút", "5 giờ 40 phút", "6 giờ 30 phút", "6 giờ 40 phút"], answer: 0, level: "medium" },
    { question: "5 phút − 2 phút 35 giây = ?", options: ["2 phút 25 giây", "2 phút 35 giây", "3 phút 25 giây", "3 phút 35 giây"], answer: 0, level: "medium" },
    { question: "10 giờ − 3 giờ 20 phút = ?", options: ["6 giờ 40 phút", "7 giờ 40 phút", "6 giờ 20 phút", "7 giờ 20 phút"], answer: 0, level: "medium" },
    { question: "18 phút 50 giây − 9 phút 20 giây = ?", options: ["9 phút 30 giây", "9 phút 20 giây", "9 phút 40 giây", "10 phút 30 giây"], answer: 0, level: "easy" },
    { question: "14 giờ 20 phút − 8 giờ 50 phút = ?", options: ["5 giờ 30 phút", "6 giờ 30 phút", "5 giờ 40 phút", "6 giờ 40 phút"], answer: 0, level: "hard" },
    { question: "6 phút 10 giây − 3 phút 40 giây = ?", options: ["2 phút 30 giây", "3 phút 30 giây", "2 phút 40 giây", "3 phút 40 giây"], answer: 0, level: "medium" },
    { question: "25 phút 40 giây − 12 phút 55 giây = ?", options: ["12 phút 45 giây", "13 phút 45 giây", "12 phút 35 giây", "13 phút 35 giây"], answer: 0, level: "hard" },
    { question: "7 giờ 15 phút − 3 giờ 45 phút = ?", options: ["3 giờ 30 phút", "4 giờ 30 phút", "3 giờ 45 phút", "4 giờ 15 phút"], answer: 0, level: "medium" },
    { question: "9 phút 05 giây − 4 phút 20 giây = ?", options: ["4 phút 45 giây", "5 phút 45 giây", "4 phút 35 giây", "5 phút 35 giây"], answer: 0, level: "hard" },
    { question: "11 giờ 30 phút − 6 giờ 45 phút = ?", options: ["4 giờ 45 giây", "4 giờ 45 phút", "5 giờ 45 phút", "4 giờ 15 phút"], answer: 1, "level": "hard" },
    { question: "4 phút − 1 phút 15 giây = ?", options: ["2 phút 45 giây", "3 phút 45 giây", "2 phút 15 giây", "3 phút 15 giây"], answer: 0, "level": "medium" },
    { question: "16 giờ 10 phút − 9 giờ 30 phút = ?", options: ["6 giờ 40 phút", "7 giờ 40 phút", "6 giờ 30 phút", "7 giờ 30 phút"], answer: 0, "level": "medium" }
];

// 5. Global Handlers & State
window.lesson132State = {
    attempts: { s1a: 0, s1b: 0, s2a: 0, s2b: 0, s3a: 0, s3b: 0 },
    mcq: { s1b: null, s2b: null, s3a: null }
};

window.lesson132SelectMCQ = function (exId, option) {
    if (exId === '132-1b') {
        window.lesson132State.mcq.s1b = option;
        ['A', 'B', 'C'].forEach(opt => {
            const btn = document.getElementById(`btn-132-1b-${opt}`);
            if (btn) {
                if (opt === option) {
                    btn.className = "mcq-btn p-5 bg-blue-100 border-4 border-blue-600 rounded-2xl flex items-center gap-3 shadow-md scale-105 transition-all";
                } else {
                    btn.className = "mcq-btn p-5 bg-white border-2 border-blue-200 rounded-2xl flex items-center gap-3 hover:border-blue-500 transition-all opacity-70";
                }
            }
        });
    } else if (exId === '132-2b') {
        window.lesson132State.mcq.s2b = option;
        ['A', 'B', 'C'].forEach(opt => {
            const btn = document.getElementById(`btn-132-2b-${opt}`);
            if (btn) {
                if (opt === option) {
                    btn.className = "mcq-btn p-5 bg-teal-100 border-4 border-teal-600 rounded-2xl flex items-center gap-3 shadow-md scale-105 transition-all";
                } else {
                    btn.className = "mcq-btn p-5 bg-white border-2 border-teal-200 rounded-2xl flex items-center gap-3 hover:border-teal-500 transition-all opacity-70";
                }
            }
        });
    } else if (exId === '132-3a') {
        window.lesson132State.mcq.s3a = option;
        ['A', 'B', 'C', 'D'].forEach(opt => {
            const btn = document.getElementById(`btn-132-3a-${opt}`);
            if (btn) {
                if (opt === option) {
                    btn.className = "mcq-btn p-4 bg-sky-100 border-4 border-sky-600 rounded-2xl flex items-center gap-3 shadow-md scale-105 transition-all";
                } else {
                    btn.className = "mcq-btn p-4 bg-white border-2 border-sky-200 rounded-2xl flex items-center gap-3 hover:border-sky-500 transition-all opacity-70";
                }
            }
        });
    }
};

window.submitEx132_1a = function () {
    window.lesson132State.attempts.s1a++;
    const m1 = document.getElementById('ans-132-1a1-m')?.value.trim();
    const s1 = document.getElementById('ans-132-1a1-s')?.value.trim();
    const h2 = document.getElementById('ans-132-1a2-h')?.value.trim();

    if (!m1 || !s1 || !h2) {
        alert("Em hãy nhập đầy đủ tất cả kết quả các phép tính!");
        return;
    }

    const c1 = (m1 === '8' && s1 === '15');
    const c2 = (h2 === '4');

    const correctCount = (c1 ? 1 : 0) + (c2 ? 1 : 0);
    const isCorrect = (correctCount === 2);
    const score = Math.round((correctCount / 2) * 100);

    window.showMathFeedback(
        isCorrect,
        "1) 8 phút 15 giây ; 2) 4 giờ",
        `1) ${m1} phút ${s1} giây ; 2) ${h2} giờ`,
        "Trừ thẳng cột từ phải sang trái.",
        `
        1) 20 phút 25 giây − 12 phút 10 giây = 8 phút 15 giây.<br>
        2) 16 giờ 30 phút − 12 giờ 30 phút = 4 giờ.<br>
        Em làm bài rất xuất sắc!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-132-1a", window.lesson132State.attempts.s1a, 2, correctCount);
};

window.submitEx132_1b = function () {
    window.lesson132State.attempts.s1b++;
    const selected = window.lesson132State.mcq.s1b;

    if (!selected) {
        alert("Em hãy lựa chọn câu trả lời!");
        return;
    }

    const isCorrect = (selected === 'B');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "B. 3 giờ 15 phút",
        `Câu ${selected}`,
        "Thời gian đi = Thời điểm đến − Thời điểm khởi hành.",
        `
        Thời gian ô tô đi từ Thanh Hoá đến Nghệ An là:<br>
        17 giờ 20 phút − 14 giờ 5 phút = 3 giờ 15 phút.<br>
        Đáp án đúng là B (3 giờ 15 phút).
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-132-1b", window.lesson132State.attempts.s1b, 1, isCorrect ? 1 : 0);
};

window.submitEx132_2a = function () {
    window.lesson132State.attempts.s2a++;
    const m1 = document.getElementById('ans-132-2a-m')?.value.trim();
    const m2 = document.getElementById('ans-132-2b-m')?.value.trim();
    const s2 = document.getElementById('ans-132-2b-s')?.value.trim();

    if (!m1 || !m2 || !s2) {
        alert("Em hãy nhập đầy đủ tất cả kết quả!");
        return;
    }

    const c1 = (m1 === '40');
    const c2 = (m2 === '2' && s2 === '40');

    const correctCount = (c1 ? 1 : 0) + (c2 ? 1 : 0);
    const isCorrect = (correctCount === 2);
    const score = Math.round((correctCount / 2) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 40 phút ; b) 2 phút 40 giây",
        `a) ${m1} phút ; b) ${m2} phút ${s2} giây`,
        "Đổi 1 giờ = 60 phút hoặc 1 phút = 60 giây rồi thực hiện phép trừ.",
        `
        a) 1 giờ 30 phút − 50 phút = 90 phút − 50 phút = 40 phút.<br><br>
        b) 8 phút 20 giây − 5 phút 40 giây = 7 phút 80 giây − 5 phút 40 giây = 2 phút 40 giây.<br><br>
        Đáp số: a) 40 phút ; b) 2 phút 40 giây.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-132-2a", window.lesson132State.attempts.s2a, 2, correctCount);
};

window.submitEx132_2b = function () {
    window.lesson132State.attempts.s2b++;
    const selected = window.lesson132State.mcq.s2b;

    if (!selected) {
        alert("Em hãy lựa chọn câu trả lời!");
        return;
    }

    const isCorrect = (selected === 'C');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "C. 50 phút",
        `Câu ${selected}`,
        "Thời gian hoãn = Giờ khởi hành thực tế − Giờ dự kiến.",
        `
        Giờ khởi hành bị lùi lại số thời gian là:<br>
        7 giờ 20 phút − 6 giờ 30 phút = 6 giờ 80 phút − 6 giờ 30 phút = 50 phút.<br>
        Đáp án đúng là C (50 phút).
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-132-2b", window.lesson132State.attempts.s2b, 1, isCorrect ? 1 : 0);
};

window.submitEx132_3a = function () {
    window.lesson132State.attempts.s3a++;
    const selected = window.lesson132State.mcq.s3a;

    if (!selected) {
        alert("Em hãy lựa chọn câu trả lời!");
        return;
    }

    const isCorrect = (selected === 'C');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "C. 0 giờ 30 phút ngày 1 tháng 6",
        `Câu ${selected}`,
        "Niu Oóc chậm hơn Hà Nội 11 tiếng.",
        `
        Thời gian ở Niu Oóc là:<br>
        11 giờ 30 phút − 11 giờ = 0 giờ 30 phút ngày 1 tháng 6.<br>
        Đáp án đúng là C (0 giờ 30 phút ngày 1 tháng 6).
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-132-3a", window.lesson132State.attempts.s3a, 1, isCorrect ? 1 : 0);
};

window.submitEx132_3b = function () {
    window.lesson132State.attempts.s3b++;
    const p = document.getElementById('ans-132-3b-paris')?.value;
    const ny = document.getElementById('ans-132-3b-newyork')?.value;
    const sg = document.getElementById('ans-132-3b-singapore')?.value;

    if (!p || !ny || !sg) {
        alert("Em hãy chọn thành phố tương ứng cho cả 3 hình!");
        return;
    }

    const cp = (p === 'Pa-ri');
    const cny = (ny === 'Niu Oóc');
    const csg = (sg === 'Xin-ga-po');

    const correctCount = (cp ? 1 : 0) + (cny ? 1 : 0) + (csg ? 1 : 0);
    const isCorrect = (correctCount === 3);
    const score = Math.round((correctCount / 3) * 100);

    window.showMathFeedback(
        isCorrect,
        "Pa-ri (7h) ; Niu Oóc (1h) ; Xin-ga-po (13h)",
        `Hình 2: ${p} ; Hình 3: ${ny} ; Hình 4: ${sg}`,
        "Tính giờ tương ứng khi Hà Nội là 12 giờ ngày 1/6.",
        `
        Khi Hà Nội là 12 giờ ngày 1/6:<br>
        - Pa-ri (chậm 5 giờ): 12 giờ − 5 giờ = 7 giờ (Tháp Eiffel - ĐH 7h).<br>
        - Niu Oóc (chậm 11 giờ): 12 giờ − 11 giờ = 1 giờ (Nữ thần Tự do - ĐH 1h).<br>
        - Xin-ga-po (nhanh hơn 1 giờ): 12 giờ + 1 giờ = 13 giờ (Sư tử biển Merlion - ĐH 1h chiều).
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-132-3b", window.lesson132State.attempts.s3b, 3, correctCount);
};

// 6. Main Lesson Export
export default {
    metadata,
    lessonInfo,
    content: lesson132Content,
    practice: lesson132Practice,
    quizPool: lesson132QuizPool,
    onLoad: () => {
        console.log("Lesson 132 Loaded: Bài 57. Cộng, trừ số đo thời gian (tiết 2)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};
