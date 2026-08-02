/**
 * @file index.js
 * @description Standardized Lesson 133: Bài 58. Nhân, chia số đo thời gian với một số (tiết 1)
 * Targets: 100% SGK compliance (Trang 71-72), 4 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-133",
    period: "133",
    title: "Bài 58. Nhân, chia số đo thời gian với một số (tiết 1)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 58. NHÂN, CHIA SỐ ĐO THỜI GIAN VỚI MỘT SỐ (TIẾT 1)",
    description: "Học kỹ thuật đặt tính và tính nhân số đo thời gian với một số, xử lý chuyển đổi đơn vị.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 71-72"
};

// 2. HTML Content (Khám phá / Tìm hiểu bài - Trang 71)
const lesson133Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <!-- Hình ảnh Khám phá SGK Trang 71 -->
            <div class="p-6 bg-white rounded-[32px] border-2 border-blue-100 shadow-md flex items-center justify-center">
                <img src="assets/images/toan/toan_tap_2/133/133-khampha.png" alt="Khám phá Nhân số đo thời gian với một số" class="rounded-2xl w-full max-w-[75%] h-auto mx-auto shadow-sm">
            </div>

            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">⏱️ NHÂN SỐ ĐO THỜI GIAN VỚI MỘT SỐ</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-2xl mx-auto space-y-4 text-center">
                <p class="text-xl md:text-2xl font-black text-blue-800">
                    2 phút 10 giây × 4 = ?
                </p>

                <div class="inline-block bg-blue-50 p-6 rounded-3xl border border-blue-200 text-left text-xl md:text-2xl font-mono font-black text-slate-800 leading-relaxed">
                    <div class="grid gap-x-3 gap-y-1 items-center" style="grid-template-columns: 24px auto 1fr;">
                        <!-- Hàng 1 -->
                        <span></span>
                        <span>2 phút</span>
                        <span>10 giây</span>

                        <!-- Hàng 2: dấu × nằm ngoài bên trái số 2, số 4 nằm thẳng cột dưới số 0 của 10 -->
                        <span class="text-blue-600 font-black text-center">×</span>
                        <span></span>
                        <span class="font-black text-slate-900" style="padding-left: 1ch;">4</span>

                        <!-- Đường gạch ngang -->
                        <span class="border-b-2 border-slate-800 w-full col-span-3 my-1"></span>

                        <!-- Hàng kết quả -->
                        <span></span>
                        <span class="text-blue-700 font-black">8 phút</span>
                        <span class="text-blue-700 font-black">40 giây</span>
                    </div>
                </div>

                <p class="text-xl md:text-2xl font-black text-emerald-600">
                    Vậy: 2 phút 10 giây × 4 = 8 phút 40 giây.
                </p>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 4 Slide phụ - Trang 71-72)
const lesson133Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 71) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-10 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Tính</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Thực hiện phép nhân số đo thời gian với một số.</p>
                        </div>
                    </div>

                    <div class="space-y-6 mb-12 text-left w-full">
                        <!-- a) -->
                        <div class="p-6 bg-white rounded-3xl border-2 border-blue-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-blue-800 font-extrabold">a) 2 giờ 20 phút × 2 =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-133-1a-h" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">giờ</span>
                                    <input type="number" id="ans-133-1a-m" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">phút</span>
                                </span>
                            </div>
                        </div>

                        <!-- b) -->
                        <div class="p-6 bg-white rounded-3xl border-2 border-blue-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-blue-800 font-extrabold">b) 3 phút 10 giây × 3 =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-133-1b-m" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">phút</span>
                                    <input type="number" id="ans-133-1b-s" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">giây</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-133-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        a) 2 giờ 20 phút × 2 = 4 giờ 40 phút.<br>
                        b) 3 phút 10 giây × 3 = 9 phút 30 giây.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-133-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-133-1" onclick="window.submitEx133_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2a (Trang 72) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-10 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2a</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2a. Tính (theo mẫu)</h3>
                            <p class="text-2xl md:text-3xl text-slate-800 leading-relaxed font-black tracking-tight">Thực hiện phép nhân và đổi đơn vị khi kết quả vượt quá 60.</p>
                        </div>
                    </div>

                    <!-- Mẫu -->
                    <div class="bg-teal-50/50 p-8 rounded-[2rem] border-2 border-teal-200 mb-10 text-left w-full space-y-3 shadow-sm">
                        <p class="text-xl md:text-2xl font-black text-teal-900">
                            💡 Mẫu: 1 giờ 25 phút × 3 = ?
                        </p>
                        <div class="inline-block bg-white p-6 rounded-3xl border border-teal-200 text-left text-xl md:text-2xl font-mono font-black text-slate-800 leading-relaxed my-2">
                            <div class="grid gap-x-3 gap-y-1 items-center" style="grid-template-columns: 24px auto 1fr;">
                                <!-- Hàng 1 -->
                                <span></span>
                                <span>1 giờ</span>
                                <span>25 phút</span>

                                <!-- Hàng 2: dấu × nằm ngoài bên trái, số 3 nằm thẳng cột dưới số 5 của 25 -->
                                <span class="text-teal-600 font-black text-center">×</span>
                                <span></span>
                                <span class="font-black text-slate-900" style="padding-left: 1ch;">3</span>

                                <!-- Đường gạch ngang -->
                                <span class="border-b-2 border-slate-800 w-full col-span-3 my-1"></span>

                                <!-- Hàng kết quả -->
                                <span></span>
                                <span class="text-teal-700 font-black">3 giờ</span>
                                <span class="text-teal-700 font-black">75 phút &nbsp;<span class="text-slate-600 font-normal text-base md:text-lg">(75 phút = 1 giờ 15 phút)</span></span>
                            </div>
                        </div>
                        <p class="text-lg md:text-xl font-black text-teal-700 whitespace-nowrap">
                            Vậy: 1 giờ 25 phút × 3 = 4 giờ 15 phút.
                        </p>
                    </div>

                    <div class="space-y-6 mb-12 text-left w-full">
                        <!-- a1 -->
                        <div class="p-6 bg-white rounded-3xl border-2 border-teal-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-teal-800 font-extrabold">2 phút 30 giây × 3 =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-133-2a1-m" class="w-24 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">phút</span>
                                    <input type="number" id="ans-133-2a1-s" class="w-24 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">giây</span>
                                </span>
                            </div>
                        </div>

                        <!-- a2 -->
                        <div class="p-6 bg-white rounded-3xl border-2 border-teal-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-teal-800 font-extrabold">3 giờ 30 phút × 2 =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-133-2a2-h" class="w-24 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">giờ</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-133-2a" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2a:</p>
                        - 2 phút 30 giây × 3 = 6 phút 90 giây = 7 phút 30 giây (vì 90 giây = 1 phút 30 giây).<br>
                        - 3 giờ 30 phút × 2 = 6 giờ 60 phút = 7 giờ (vì 60 phút = 1 giờ).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-133-2a')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-133-2a" onclick="window.submitEx133_2a()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 2b (Trang 72) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2b</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2b. Chọn câu trả lời đúng</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Việt thiết kế một trò chơi gồm 10 câu hỏi với thời gian dành cho mỗi câu hỏi là 1 phút 30 giây. Hỏi trò chơi Việt thiết kế có thời gian bao lâu?</p>
                        </div>
                    </div>

                    <!-- Hình Việt ngồi máy tính SGK Trang 72 -->
                    <div class="mb-8 text-center">
                        <img src="assets/images/toan/toan_tap_2/133/133-2b-viet.png" alt="Việt thiết kế trò chơi" class="rounded-2xl w-full h-auto max-h-[260px] object-contain shadow-sm mx-auto">
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
                        <button onclick="window.lesson133SelectMCQ('133-2b', 'A')" id="btn-133-2b-A" class="mcq-btn p-5 bg-white border-2 border-teal-200 rounded-2xl flex items-center gap-3 hover:border-teal-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xl">A</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">10 phút 30 giây</span>
                        </button>
                        <button onclick="window.lesson133SelectMCQ('133-2b', 'B')" id="btn-133-2b-B" class="mcq-btn p-5 bg-white border-2 border-teal-200 rounded-2xl flex items-center gap-3 hover:border-teal-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xl">B</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">15 phút</span>
                        </button>
                        <button onclick="window.lesson133SelectMCQ('133-2b', 'C')" id="btn-133-2b-C" class="mcq-btn p-5 bg-white border-2 border-teal-200 rounded-2xl flex items-center gap-3 hover:border-teal-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xl">C</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">300 giây</span>
                        </button>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-133-2b" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2b:</p>
                        Thời gian trò chơi Việt thiết kế là:<br>
                        1 phút 30 giây × 10 = 10 phút 300 giây = 15 phút (vì 300 giây = 5 phút).<br>
                        Đáp án đúng là B (15 phút).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-133-2b')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-133-2b" onclick="window.submitEx133_2b()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 4: Bài 3 (Trang 72) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3. Quan sát tranh rồi trả lời câu hỏi</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Hỏi Mai đã xem video hướng dẫn trong bao lâu, biết video dài 4,25 phút và Mai đã xem đi xem lại 5 lần?</p>
                        </div>
                    </div>

                    <!-- Hình Mai & Việt làm thiệp SGK Trang 72 -->
                    <div class="mb-8 text-center">
                        <img src="assets/images/toan/toan_tap_2/133/133-3-thiep.png" alt="Mai và Việt làm thiệp" class="rounded-2xl w-full h-auto max-h-[260px] object-contain shadow-sm mx-auto">
                    </div>

                    <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 mb-8 text-left">
                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                            <span class="text-sky-900 font-extrabold">Mai đã xem video trong =</span>
                            <span class="inline-flex items-center flex-nowrap gap-2">
                                <input type="text" id="ans-133-3" class="w-36 h-14 border-2 border-sky-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-sky-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">phút</span>
                            </span>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-133-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        Thời gian Mai đã xem video hướng dẫn là:<br>
                        4,25 phút × 5 = 21,25 phút (hoặc 21 phút 15 giây).<br>
                        Đáp số: 21,25 phút.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-133-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-133-3" onclick="window.submitEx133_3()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson133QuizPool = [
    { question: "2 phút 10 giây × 3 = ?", options: ["6 phút 30 giây", "6 phút 10 giây", "6 phút 20 giây", "5 phút 30 giây"], answer: 0, level: "easy" },
    { question: "3 giờ 15 phút × 2 = ?", options: ["6 giờ 30 phút", "6 giờ 15 phút", "6 giờ 45 phút", "7 giờ"], answer: 0, level: "easy" },
    { question: "1 phút 40 giây × 2 = ?", options: ["3 phút 20 giây", "2 phút 80 giây", "3 phút 40 giây", "2 phút 40 giây"], answer: 0, level: "medium" },
    { question: "2 giờ 30 phút × 3 = ?", options: ["7 giờ 30 phút", "6 giờ 90 phút", "7 giờ", "8 giờ"], answer: 0, level: "medium" },
    { question: "4 phút 20 giây × 3 = ?", options: ["13 phút", "12 phút 60 giây", "12 phút 20 giây", "13 phút 20 giây"], answer: 0, level: "medium" },
    { question: "1 giờ 15 phút × 4 = ?", options: ["5 giờ", "4 giờ 60 phút", "4 giờ 45 phút", "5 giờ 15 phút"], answer: 0, level: "medium" },
    { question: "5 phút 12 giây × 5 = ?", options: ["26 phút", "25 phút 60 giây", "25 phút 12 giây", "26 phút 12 giây"], answer: 0, level: "medium" },
    { question: "2 phút 45 giây × 2 = ?", options: ["5 phút 30 giây", "4 phút 90 giây", "5 phút 15 giây", "4 phút 45 giây"], answer: 0, level: "hard" },
    { question: "3 giờ 20 phút × 4 = ?", options: ["13 giờ 20 phút", "12 giờ 80 phút", "13 giờ 40 phút", "14 giờ"], answer: 0, level: "hard" },
    { question: "6 phút 30 giây × 4 = ?", options: ["26 phút", "24 phút 120 giây", "25 phút", "27 phút"], answer: 0, level: "hard" },
    { question: "4,5 phút × 4 = ?", options: ["18 phút", "16 phút", "17,5 phút", "19 phút"], answer: 0, level: "medium" },
    { question: "2,25 phút × 3 = ?", options: ["6,75 phút", "6,25 phút", "7,25 phút", "6,5 phút"], answer: 0, level: "medium" },
    { question: "1 phút 20 giây × 5 = ?", options: ["6 phút 40 giây", "5 phút 100 giây", "6 phút 20 giây", "7 phút"], answer: 0, level: "medium" },
    { question: "3 phút 15 giây × 4 = ?", options: ["13 phút", "12 phút 60 giây", "13 phút 15 giây", "14 phút"], answer: 0, level: "easy" },
    { question: "2 giờ 40 phút × 3 = ?", options: ["8 giờ", "6 giờ 120 phút", "7 giờ 40 phút", "8 giờ 20 phút"], answer: 0, level: "hard" }
];

// 5. Global Handlers & State
window.lesson133State = {
    attempts: { s1: 0, s2a: 0, s2b: 0, s3: 0 },
    mcq: { s2b: null }
};

window.lesson133SelectMCQ = function (exId, option) {
    if (exId === '133-2b') {
        window.lesson133State.mcq.s2b = option;
        ['A', 'B', 'C'].forEach(opt => {
            const btn = document.getElementById(`btn-133-2b-${opt}`);
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

window.submitEx133_1 = function () {
    window.lesson133State.attempts.s1++;
    const ha = document.getElementById('ans-133-1a-h')?.value.trim();
    const ma = document.getElementById('ans-133-1a-m')?.value.trim();
    const mb = document.getElementById('ans-133-1b-m')?.value.trim();
    const sb = document.getElementById('ans-133-1b-s')?.value.trim();

    if (!ha || !ma || !mb || !sb) {
        alert("Em hãy nhập đầy đủ tất cả kết quả các phép tính!");
        return;
    }

    const ca = (ha === '4' && ma === '40');
    const cb = (mb === '9' && sb === '30');

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0);
    const isCorrect = (correctCount === 2);
    const score = Math.round((correctCount / 2) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 4 giờ 40 phút ; b) 9 phút 30 giây",
        `a) ${ha} giờ ${ma} phút ; b) ${mb} phút ${sb} giây`,
        "Nhân từng đơn vị số đo thời gian với số tự nhiên.",
        `
        a) 2 giờ 20 phút × 2 = 4 giờ 40 phút.<br>
        b) 3 phút 10 giây × 3 = 9 phút 30 giây.<br>
        Em thực hiện nhân rất chính xác!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-133-1", window.lesson133State.attempts.s1, 2, correctCount);
};

window.submitEx133_2a = function () {
    window.lesson133State.attempts.s2a++;
    const m1 = document.getElementById('ans-133-2a1-m')?.value.trim();
    const s1 = document.getElementById('ans-133-2a1-s')?.value.trim();
    const h2 = document.getElementById('ans-133-2a2-h')?.value.trim();

    if (!m1 || !s1 || !h2) {
        alert("Em hãy nhập đầy đủ tất cả kết quả!");
        return;
    }

    const c1 = (m1 === '7' && s1 === '30');
    const c2 = (h2 === '7');

    const correctCount = (c1 ? 1 : 0) + (c2 ? 1 : 0);
    const isCorrect = (correctCount === 2);
    const score = Math.round((correctCount / 2) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 7 phút 30 giây ; b) 7 giờ",
        `a) ${m1} phút ${s1} giây ; b) ${h2} giờ`,
        "90 giây = 1 phút 30 giây ; 60 phút = 1 giờ.",
        `
        a) 2 phút 30 giây × 3 = 6 phút 90 giây = 7 phút 30 giây.<br><br>
        b) 3 giờ 30 phút × 2 = 6 giờ 60 phút = 7 giờ.<br><br>
        Đáp số: a) 7 phút 30 giây ; b) 7 giờ.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-133-2a", window.lesson133State.attempts.s2a, 2, correctCount);
};

window.submitEx133_2b = function () {
    window.lesson133State.attempts.s2b++;
    const selected = window.lesson133State.mcq.s2b;

    if (!selected) {
        alert("Em hãy lựa chọn câu trả lời!");
        return;
    }

    const isCorrect = (selected === 'B');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "B. 15 phút",
        `Câu ${selected}`,
        "Em hãy lấy thời gian làm 1 câu (1 phút 30 giây) nhân với 10 câu hỏi, sau đó đổi đơn vị giây sang phút nhé!",
        `
        Thời gian trò chơi Việt thiết kế là:<br>
        1 phút 30 giây × 10 = 10 phút 300 giây = 15 phút (vì 300 giây = 5 phút).<br>
        Đáp án đúng là B (15 phút).
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-133-2b", window.lesson133State.attempts.s2b, 1, isCorrect ? 1 : 0);
};

window.submitEx133_3 = function () {
    window.lesson133State.attempts.s3++;
    const val = document.getElementById('ans-133-3')?.value.trim().replace(',', '.');

    if (!val) {
        alert("Em hãy nhập kết quả!");
        return;
    }

    const isCorrect = (val === '21.25' || val === '21,25' || val.includes('21 phút 15 giây') || val.includes('21.25'));
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "21,25 phút (hoặc 21 phút 15 giây)",
        `${val} phút`,
        "Em hãy lấy độ dài video (4,25 phút) nhân với số lần Mai đã xem (5 lần) nhé!",
        `
        Thời gian Mai đã xem video hướng dẫn là:<br>
        4,25 phút × 5 = 21,25 phút.<br>
        (Đổi sang phút giây: 21,25 phút = 21 phút 15 giây).<br>
        Đáp số: 21,25 phút.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-133-3", window.lesson133State.attempts.s3, 1, isCorrect ? 1 : 0);
};

// 6. Main Lesson Export
export default {
    metadata,
    lessonInfo,
    content: lesson133Content,
    practice: lesson133Practice,
    quizPool: lesson133QuizPool,
    onLoad: () => {
        console.log("Lesson 133 Loaded: Bài 58. Nhân, chia số đo thời gian với một số (tiết 1)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};
