/**
 * @file index.js
 * @description Standardized Lesson 131: Bài 57. Cộng, trừ số đo thời gian (tiết 1)
 * Targets: 100% SGK compliance, 4 slides (1a, 1b, 2, 3) with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-131",
    period: "131",
    title: "Bài 57. Cộng, trừ số đo thời gian (tiết 1)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 57. CỘNG, TRÙ SỐ ĐO THỜI GIAN (TIẾT 1)",
    description: "Học kỹ thuật đặt tính và tính cộng số đo thời gian, vận dụng vào giải bài toán thực tế.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 67-68"
};

// 2. HTML Content (Khám phá / Tìm hiểu bài)
const lesson131Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <!-- Hình ảnh Khám phá SGK Trang 67 -->
            <div class="p-6 bg-white rounded-[32px] border-2 border-blue-100 shadow-md flex items-center justify-center">
                <img src="assets/images/toan/toan_tap_2/131/131-khampha.png" alt="Khám phá Cộng số đo thời gian" class="rounded-2xl w-full max-w-[70%] h-auto mx-auto shadow-sm">
            </div>

            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">⏱️ PHÉP CỘNG SỐ ĐO THỜI GIAN</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-2xl mx-auto space-y-4 text-center">
                <p class="text-xl md:text-2xl font-black text-blue-800">
                    19 giờ 15 phút + 1 giờ 30 phút = ?
                </p>

                <div class="inline-block bg-blue-50 p-6 rounded-3xl border border-blue-200 text-left text-xl md:text-2xl font-mono font-black text-slate-800 leading-relaxed">
                    <div class="grid grid-cols-2 gap-x-4">
                        <span class="text-right">19 giờ</span>
                        <span>15 phút</span>
                    </div>
                    <div class="grid grid-cols-2 gap-x-4 border-b-2 border-slate-800 pb-2">
                        <span class="text-right">+ 1 giờ</span>
                        <span>30 phút</span>
                    </div>
                    <div class="grid grid-cols-2 gap-x-4 pt-2 text-blue-700">
                        <span class="text-right">20 giờ</span>
                        <span>45 phút</span>
                    </div>
                </div>

                <p class="text-xl md:text-2xl font-black text-emerald-600">
                    Vậy: 19 giờ 15 phút + 1 giờ 30 phút = 20 giờ 45 phút.
                </p>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 4 Slide phụ)
const lesson131Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1a -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-10 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1a</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1a. Tính (Đặt tính rồi tính)</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Thực hiện phép cộng số đo thời gian theo cột dọc.</p>
                        </div>
                    </div>

                    <div class="bg-blue-50/50 p-6 rounded-3xl border border-blue-100 mb-8 space-y-6 text-left">
                        <div class="space-y-6">
                            <!-- Phép tính 1 -->
                            <div class="p-6 bg-white rounded-2xl border border-blue-100 space-y-4">
                                <p class="text-lg md:text-xl font-black text-blue-700">14 giờ 20 phút + 2 giờ 10 phút = ?</p>
                                
                                <div class="grid gap-x-3 gap-y-2 items-center font-mono py-2 text-xl font-bold text-slate-800" style="grid-template-columns: 28px 40px 56px 40px 64px;">
                                    <span></span>
                                    <span class="text-center">14</span>
                                    <span>giờ</span>
                                    <span class="text-center">20</span>
                                    <span>phút</span>

                                    <span class="text-xl font-black text-blue-600 text-center">+</span>
                                    <span class="text-center">2</span>
                                    <span>giờ</span>
                                    <span class="text-center">10</span>
                                    <span>phút</span>

                                    <span class="border-b-2 border-slate-800 w-full col-span-5 my-1"></span>

                                    <span></span>
                                    <input type="number" id="ans-131-1a1-h" class="w-10 h-10 border-2 border-blue-600 rounded-lg text-center font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                    <span class="text-blue-700 font-black">giờ</span>
                                    <input type="number" id="ans-131-1a1-m" class="w-10 h-10 border-2 border-blue-600 rounded-lg text-center font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                    <span class="text-blue-700 font-black">phút</span>
                                </div>
                            </div>

                            <!-- Phép tính 2 -->
                            <div class="p-6 bg-white rounded-2xl border border-blue-100 space-y-4">
                                <p class="text-lg md:text-xl font-black text-blue-700">10 phút 20 giây + 5 phút 30 giây = ?</p>
                                
                                <div class="grid gap-x-3 gap-y-2 items-center font-mono py-2 text-xl font-bold text-slate-800" style="grid-template-columns: 28px 40px 68px 40px 64px;">
                                    <span></span>
                                    <span class="text-center">10</span>
                                    <span>phút</span>
                                    <span class="text-center">20</span>
                                    <span>giây</span>

                                    <span class="text-xl font-black text-blue-600 text-center">+</span>
                                    <span class="text-center">5</span>
                                    <span>phút</span>
                                    <span class="text-center">30</span>
                                    <span>giây</span>

                                    <span class="border-b-2 border-slate-800 w-full col-span-5 my-1"></span>

                                    <span></span>
                                    <input type="number" id="ans-131-1a2-m" class="w-10 h-10 border-2 border-blue-600 rounded-lg text-center font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                    <span class="text-blue-700 font-black">phút</span>
                                    <input type="number" id="ans-131-1a2-s" class="w-10 h-10 border-2 border-blue-600 rounded-lg text-center font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                    <span class="text-blue-700 font-black">giây</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-131-1a" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1a:</p>
                        - 14 giờ 20 phút + 2 giờ 10 phút = 16 giờ 30 phút.<br>
                        - 10 phút 20 giây + 5 phút 30 giây = 15 phút 50 giây.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-131-1a')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-131-1a" onclick="window.submitEx131_1a()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
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
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Một chiếc đồng hồ chạy chậm 25 phút so với thời gian đúng. Hỏi thời điểm đồng hồ đó chỉ 14 giờ 30 phút thì thời gian đúng là mấy giờ?</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
                        <button onclick="window.lesson131SelectMCQ('131-1b', 'A')" id="btn-131-1b-A" class="mcq-btn p-5 bg-white border-2 border-blue-200 rounded-2xl flex items-center gap-3 hover:border-blue-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-black text-xl">A</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">14 giờ 5 phút</span>
                        </button>
                        <button onclick="window.lesson131SelectMCQ('131-1b', 'B')" id="btn-131-1b-B" class="mcq-btn p-5 bg-white border-2 border-blue-200 rounded-2xl flex items-center gap-3 hover:border-blue-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-black text-xl">B</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">14 giờ 30 phút</span>
                        </button>
                        <button onclick="window.lesson131SelectMCQ('131-1b', 'C')" id="btn-131-1b-C" class="mcq-btn p-5 bg-white border-2 border-blue-200 rounded-2xl flex items-center gap-3 hover:border-blue-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-black text-xl">C</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">14 giờ 55 phút</span>
                        </button>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-131-1b" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1b:</p>
                        Đồng hồ chạy chậm 25 phút nên thời gian đúng là:<br>
                        14 giờ 30 phút + 25 phút = 14 giờ 55 phút.<br>
                        Đáp án đúng là C (14 giờ 55 phút).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-131-1b')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-131-1b" onclick="window.submitEx131_1b()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 2 -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-10 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Tính (theo mẫu)</h3>
                            <p class="text-2xl md:text-3xl text-slate-800 leading-relaxed font-black tracking-tight">Thực hiện phép cộng số đo thời gian có chuyển đổi đơn vị.</p>
                        </div>
                    </div>

                    <!-- Mẫu -->
                    <div class="bg-teal-50/50 p-8 rounded-[2rem] border-2 border-teal-200 mb-10 text-left w-full space-y-3 shadow-sm">
                        <p class="text-xl md:text-2xl font-black text-teal-900">
                            💡 Mẫu: 1 giờ 30 phút + 2 giờ 50 phút = ?
                        </p>
                        <p class="text-lg md:text-xl font-mono font-bold text-slate-800 ml-6 leading-relaxed">
                            &nbsp;&nbsp;1 giờ 30 phút<br>
                            + 2 giờ 50 phút<br>
                            ----------------<br>
                            &nbsp;&nbsp;<span class="whitespace-nowrap">3 giờ 80 phút (80 phút = 1 giờ 20 phút)</span>
                        </p>
                        <p class="text-lg md:text-xl font-black text-teal-700 whitespace-nowrap">
                            Vậy: 1 giờ 30 phút + 2 giờ 50 phút = 4 giờ 20 phút.
                        </p>
                    </div>

                    <div class="space-y-6 mb-12 text-left w-full">
                        <!-- a) -->
                        <div class="p-6 bg-white rounded-3xl border-2 border-teal-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-teal-800 font-extrabold">a) 10 giờ 25 phút + 2 giờ 50 phút =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-131-2a-h" class="w-24 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">giờ</span>
                                    <input type="number" id="ans-131-2a-m" class="w-24 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">phút</span>
                                </span>
                            </div>
                        </div>

                        <!-- b) -->
                        <div class="p-6 bg-white rounded-3xl border-2 border-teal-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-teal-800 font-extrabold">b) 2 phút 40 giây + 1 phút 20 giây =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-131-2b-m" class="w-24 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">phút</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-131-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        a)<br>
                        10 giờ 25 phút + 2 giờ 50 phút = 12 giờ 75 phút.<br>
                        Vì 75 phút = 1 giờ 15 phút nên 12 giờ 75 phút = 13 giờ 15 phút.<br><br>
                        b)<br>
                        2 phút 40 giây + 1 phút 20 giây = 3 phút 60 giây.<br>
                        Vì 60 giây = 1 phút nên 3 phút 60 giây = 4 phút.<br><br>
                        Đáp số: a) 13 giờ 15 phút ; b) 4 phút.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-131-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-131-2" onclick="window.submitEx131_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 4: Bài 3 -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-emerald-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-10 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-emerald-700 block">Bài 3. Chọn câu trả lời đúng</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Một ô tô đến trường học đưa học sinh đi thăm Lăng Bác lúc 8 giờ. Tổng thời gian ô tô đi từ trường đến Lăng Bác rồi quay về trường là 50 phút. Hỏi học sinh về đến trường lúc mấy giờ, biết thời gian thăm Lăng Bác là 1 giờ 30 phút?</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 text-left max-w-3xl mx-auto">
                        <button onclick="window.lesson131SelectMCQ('131-3', 'A')" id="btn-131-3-A" class="mcq-btn p-5 bg-white border-2 border-emerald-200 rounded-2xl flex items-center gap-4 hover:border-emerald-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xl">A</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">10 giờ 10 phút</span>
                        </button>
                        <button onclick="window.lesson131SelectMCQ('131-3', 'B')" id="btn-131-3-B" class="mcq-btn p-5 bg-white border-2 border-emerald-200 rounded-2xl flex items-center gap-4 hover:border-emerald-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xl">B</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">10 giờ 15 phút</span>
                        </button>
                        <button onclick="window.lesson131SelectMCQ('131-3', 'C')" id="btn-131-3-C" class="mcq-btn p-5 bg-white border-2 border-emerald-200 rounded-2xl flex items-center gap-4 hover:border-emerald-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xl">C</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">9 giờ 30 phút</span>
                        </button>
                        <button onclick="window.lesson131SelectMCQ('131-3', 'D')" id="btn-131-3-D" class="mcq-btn p-5 bg-white border-2 border-emerald-200 rounded-2xl flex items-center gap-4 hover:border-emerald-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xl">D</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">10 giờ 20 phút</span>
                        </button>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-131-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        Tổng thời gian xe di chuyển cả hai lượt và thời gian thăm Lăng Bác là:<br>
                        50 phút + 1 giờ 30 phút = 1 giờ 80 phút = 2 giờ 20 phút<br>
                        Học sinh về đến trường lúc:<br>
                        8 giờ + 2 giờ 20 phút = 10 giờ 20 phút<br>
                        Đáp án đúng là D (10 giờ 20 phút).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-131-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-131-3" onclick="window.submitEx131_3()" class="w-16 h-16 md:w-20 md:h-20 bg-emerald-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 questions)
const lesson131QuizPool = [
    { "question": "3 giờ 15 phút + 2 giờ 10 phút = ?", "options": ["5 giờ 15 phút", "5 giờ 25 phút", "6 giờ 25 phút", "5 giờ 35 phút"], "answer": 1, "level": 1 },
    { "question": "45 phút + 30 phút = ?", "options": ["1 giờ 15 phút", "1 giờ 30 phút", "1 giờ 45 phút", "75 phút"], "answer": 0, "level": 1 },
    { "question": "10 phút 20 giây + 5 phút 30 giây = ?", "options": ["15 phút 10 giây", "15 phút 50 giây", "15 phút 70 giây", "16 phút 20 giây"], "answer": 1, "level": 1 },
    { "question": "An bắt đầu làm bài lúc 14 giờ 20 phút, làm xong sau 40 phút. An làm xong lúc:", "options": ["14 giờ 50 phút", "15 giờ 00 phút", "15 giờ 10 phút", "14 giờ 60 phút"], "answer": 1, "level": 2 },
    { "question": "Trong phép cộng số đo thời gian, nếu kết quả phần phút ≥ 60, ta nên:", "options": ["Giữ nguyên", "Đổi sang giờ và cộng tiếp", "Chia cho 10", "Xóa đi"], "answer": 1, "level": 1 },
    { "question": "14 giờ 20 phút + 2 giờ 10 phút bằng bao nhiêu?", "options": ["16 giờ 30 phút", "16 giờ 20 phút", "16 giờ 40 phút", "17 giờ 30 phút"], "answer": 0, "level": 1 },
    { "question": "Đồng hồ chậm 25 phút chỉ 14 giờ 30 phút. Thời gian đúng là:", "options": ["14 giờ 05 phút", "14 giờ 30 phút", "14 giờ 55 phút", "15 giờ 05 phút"], "answer": 2, "level": 2 },
    { "question": "10 giờ 25 phút + 2 giờ 50 phút bằng bao nhiêu?", "options": ["12 giờ 75 phút", "13 giờ 15 phút", "13 giờ 25 phút", "13 giờ 05 phút"], "answer": 1, "level": 2 },
    { "question": "2 phút 40 giây + 1 phút 20 giây bằng bao nhiêu?", "options": ["3 phút 60 giây", "4 phút", "3 phút 40 giây", "4 phút 20 giây"], "answer": 1, "level": 2 },
    { "question": "1 giờ 45 phút + 2 giờ 30 phút = ?", "options": ["3 giờ 75 phút", "4 giờ 15 phút", "4 giờ 30 phút", "4 giờ 05 phút"], "answer": 1, "level": 2 },
    { "question": "Xe xuất phát lúc 8 giờ, đi mất 50 phút, thăm 1 giờ 30 phút. Xe về trường lúc:", "options": ["10 giờ 10 phút", "10 giờ 15 phút", "9 giờ 30 phút", "10 giờ 20 phút"], "answer": 3, "level": 3 },
    { "question": "5 phút 45 giây + 3 phút 25 giây = ?", "options": ["8 phút 70 giây", "9 phút 10 giây", "9 phút 20 giây", "8 phút 15 giây"], "answer": 1, "level": 3 },
    { "question": "2 ngày 8 giờ + 1 ngày 18 giờ = ?", "options": ["3 ngày 26 giờ", "4 ngày 02 giờ", "4 ngày 06 giờ", "3 ngày 16 giờ"], "answer": 1, "level": 3 },
    { "question": "Bình xem phim từ 19 giờ 15 phút, phim dài 1 giờ 30 phút. Phim kết thúc lúc:", "options": ["20 giờ 30 phút", "20 giờ 45 phút", "21 giờ 00 phút", "20 giờ 15 phút"], "answer": 1, "level": 2 },
    { "question": "Một trận bóng bắt đầu lúc 15 giờ 30 phút, kéo dài 1 giờ 45 phút. Trận đấu kết thúc lúc:", "options": ["17 giờ 15 phút", "16 giờ 75 phút", "17 giờ 30 phút", "17 giờ 45 phút"], "answer": 0, "level": 3 }
];

// 5. Logic & State Management
if (typeof window !== 'undefined') {
    window.lesson131State = {
        ex1b: null,
        ex3: null,
        attempts: { s1a: 0, s1b: 0, s2: 0, s3: 0 }
    };
}

const getExColor = (exId) => {
    if (exId.includes('131-1b')) return 'blue';
    if (exId.includes('131-3')) return 'emerald';
    return 'blue';
};

window.lesson131SelectMCQ = function (exId, option) {
    const color = getExColor(exId);
    const allBtns = document.querySelectorAll(`[id^="btn-${exId}-"]`);
    allBtns.forEach(btn => {
        btn.classList.remove(`bg-${color}-600`, 'text-white', `border-${color}-600`);
        btn.classList.add('bg-white', 'text-slate-700', `border-${color}-200`);
    });

    const selectedBtn = document.getElementById(`btn-${exId}-${option}`);
    if (selectedBtn) {
        selectedBtn.classList.remove('bg-white', 'text-slate-700', `border-${color}-200`);
        selectedBtn.classList.add(`bg-${color}-600`, 'text-white', `border-${color}-600`);
    }

    if (exId === '131-1b') window.lesson131State.ex1b = option;
    if (exId === '131-3') window.lesson131State.ex3 = option;
};

// --- Submission Handlers ---

window.submitEx131_1a = function () {
    window.lesson131State.attempts.s1a++;
    const a1h = document.getElementById('ans-131-1a1-h').value.trim();
    const a1m = document.getElementById('ans-131-1a1-m').value.trim();
    const a2m = document.getElementById('ans-131-1a2-m').value.trim();
    const a2s = document.getElementById('ans-131-1a2-s').value.trim();

    if (!a1h || !a1m || !a2m || !a2s) {
        alert("Em hãy điền đầy đủ kết quả của cả hai phép tính đặt dọc!");
        return;
    }

    const c1a1 = (a1h === '16' && a1m === '30');
    const c1a2 = (a2m === '15' && a2s === '50');

    const correctCount = (c1a1 ? 1 : 0) + (c1a2 ? 1 : 0);
    const isCorrect = (correctCount === 2);
    const score = Math.round((correctCount / 2) * 100);

    window.showMathFeedback(
        isCorrect,
        "Phép 1: 16 giờ 30 phút ; Phép 2: 15 phút 50 giây",
        `Phép 1: ${a1h}h${a1m}p ; Phép 2: ${a2m}p${a2s}s`,
        "Cộng thẳng cột theo từng loại đơn vị đo.",
        `
        - 14 giờ 20 phút + 2 giờ 10 phút = 16 giờ 30 phút.<br>
        - 10 phút 20 giây + 5 phút 30 giây = 15 phút 50 giây.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-131-1a", window.lesson131State.attempts.s1a, 2, correctCount);
};

window.submitEx131_1b = function () {
    window.lesson131State.attempts.s1b++;
    const selected1b = window.lesson131State.ex1b;

    if (!selected1b) {
        alert("Em hãy chọn đáp án đúng!");
        return;
    }

    const isCorrect = (selected1b === 'C');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "C. 14 giờ 55 phút",
        `Câu ${selected1b}`,
        "Đồng hồ chạy chậm 25 phút nên thời gian đúng bằng 14h30p + 25p = 14h55p.",
        `
        Đồng hồ chạy chậm 25 phút nên thời gian đúng là:<br>
        14 giờ 30 phút + 25 phút = 14 giờ 55 phút.<br>
        Đáp án đúng là C (14 giờ 55 phút).
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-131-1b", window.lesson131State.attempts.s1b, 1, isCorrect ? 1 : 0);
};

window.submitEx131_2 = function () {
    window.lesson131State.attempts.s2++;
    const a2ah = document.getElementById('ans-131-2a-h').value.trim();
    const a2am = document.getElementById('ans-131-2a-m').value.trim();
    const a2bm = document.getElementById('ans-131-2b-m').value.trim();

    if (!a2ah || !a2am || !a2bm) {
        alert("Em hãy điền đầy đủ các kết quả tính!");
        return;
    }

    const c2a = (a2ah === '13' && a2am === '15');
    const c2b = (a2bm === '4');

    const correctCount = (c2a ? 1 : 0) + (c2b ? 1 : 0);
    const isCorrect = (correctCount === 2);
    const score = Math.round((correctCount / 2) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 13 giờ 15 phút ; b) 4 phút",
        `a) ${a2ah} giờ ${a2am} phút ; b) ${a2bm} phút`,
        "75 phút = 1 giờ 15 phút; 60 giây = 1 phút.",
        `
        a)<br>
        10 giờ 25 phút + 2 giờ 50 phút = 12 giờ 75 phút = 13 giờ 15 phút.<br><br>
        b)<br>
        2 phút 40 giây + 1 phút 20 giây = 3 phút 60 giây = 4 phút.<br><br>
        Đáp số: a) 13 giờ 15 phút ; b) 4 phút.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-131-2", window.lesson131State.attempts.s2, 2, correctCount);
};

window.submitEx131_3 = function () {
    window.lesson131State.attempts.s3++;
    const selected = window.lesson131State.ex3;

    if (!selected) {
        alert("Em hãy lựa chọn câu trả lời!");
        return;
    }

    const isCorrect = (selected === 'D');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "D. 10 giờ 20 phút",
        `Câu ${selected}`,
        "Tổng thời gian = 50 phút + 1 giờ 30 phút = 2 giờ 20 phút. Thời điểm về = 8 giờ + 2 giờ 20 phút = 10 giờ 20 phút.",
        `
        Tổng thời gian ô tô di chuyển và học sinh thăm Lăng Bác là:<br>
        50 phút + 1 giờ 30 phút = 1 giờ 80 phút = 2 giờ 20 phút<br>
        Học sinh về đến trường lúc:<br>
        8 giờ + 2 giờ 20 phút = 10 giờ 20 phút<br>
        Đáp án đúng là D (10 giờ 20 phút).
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-131-3", window.lesson131State.attempts.s3, 1, isCorrect ? 1 : 0);
};

// 6. Main Lesson Export
export default {
    metadata,
    lessonInfo,
    content: lesson131Content,
    practice: lesson131Practice,
    quizPool: lesson131QuizPool,
    onLoad: () => {
        console.log("Lesson 131 Loaded: Bài 57. Cộng, trừ số đo thời gian (tiết 1)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};
