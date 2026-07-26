/**
 * @file index.js
 * @description Standardized Lesson 134: Bài 58. Nhân, chia số đo thời gian với một số (tiết 2)
 * Targets: 100% SGK compliance (Trang 73-74), 4 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-134",
    period: "134",
    title: "Bài 58. Nhân, chia số đo thời gian với một số (tiết 2)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 58. NHÂN, CHIA SỐ ĐO THỜI GIAN CHO MỘT SỐ (TIẾT 2)",
    description: "Học kỹ thuật đặt tính và tính chia số đo thời gian cho một số, xử lý phần dư đổi đơn vị.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 73-74"
};

// 2. HTML Content (Khám phá / Tìm hiểu bài - Trang 73)
const lesson134Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <!-- Hình ảnh Khám phá SGK Trang 73 -->
            <div class="p-6 bg-white rounded-[32px] border-2 border-blue-100 shadow-md flex items-center justify-center">
                <img src="assets/images/toan/toan_tap_2/134/134-khampha.png" alt="Khám phá Chia số đo thời gian cho một số" class="rounded-2xl w-full max-w-[75%] h-auto mx-auto shadow-sm">
            </div>

            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">⏱️ CHIA SỐ ĐO THỜI GIAN CHO MỘT SỐ</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-2xl mx-auto space-y-4 text-center">
                <p class="text-xl md:text-2xl font-black text-blue-800">
                    4 phút 12 giây : 4 = ?
                </p>

                                                <div class="inline-block bg-blue-50 p-6 rounded-3xl border border-blue-200 text-left text-xl md:text-2xl font-mono font-black text-slate-800 leading-normal">
                    <div class="grid items-center font-mono gap-y-1" style="grid-template-columns: 24px 50px 18px 18px 50px 12px auto;">
                        <!-- Row 1: 4 phút 12 giây | 4 -->
                        <span class="text-center font-black">4</span>
                        <span>phút</span>
                        <span class="text-center font-black">1</span>
                        <span class="text-center font-black">2</span>
                        <span>giây</span>
                        <div class="border-r-2 border-slate-800 h-full col-span-1"></div>
                        <span class="pl-3 font-black text-blue-700">4</span>

                        <!-- Row 2: 0 | horizontal line -->
                        <span class="text-center font-black">0</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div class="border-r-2 border-slate-800 h-full col-span-1"></div>
                        <div class="border-t-2 border-slate-800 my-1 col-span-1"></div>

                        <!-- Row 3: 12 giây | 1 phút 3 giây -->
                        <span></span>
                        <span></span>
                        <span class="text-center font-black">1</span>
                        <span class="text-center font-black">2</span>
                        <span>giây</span>
                        <div class="border-r-2 border-slate-800 h-full col-span-1"></div>
                        <span class="pl-3 font-black text-blue-700 whitespace-nowrap">1 phút 3 giây</span>

                        <!-- Row 4: 0 (Thẳng dưới số 2 của 12) -->
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="text-center font-black">0</span>
                        <span></span>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <p class="text-xl md:text-2xl font-black text-emerald-600">
                    Vậy: 4 phút 12 giây : 4 = 1 phút 3 giây.
                </p>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 4 Slide phụ - Trang 73-74)
const lesson134Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 73) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-10 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Tính</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Thực hiện phép chia số đo thời gian cho một số.</p>
                        </div>
                    </div>

                    <div class="space-y-6 mb-12 text-left w-full">
                        <!-- a) -->
                        <div class="p-6 bg-white rounded-3xl border-2 border-blue-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-blue-800 font-extrabold">a) 4 giờ 10 phút : 2 =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-134-1a-h" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">giờ</span>
                                    <input type="number" id="ans-134-1a-m" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">phút</span>
                                </span>
                            </div>
                        </div>

                        <!-- b) -->
                        <div class="p-6 bg-white rounded-3xl border-2 border-blue-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-blue-800 font-extrabold">b) 20 phút 30 giây : 5 =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-134-1b-m" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">phút</span>
                                    <input type="number" id="ans-134-1b-s" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">giây</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-134-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        a) 4 giờ 10 phút : 2 = 2 giờ 5 phút.<br>
                        b) 20 phút 30 giây : 5 = 4 phút 6 giây.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-134-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-134-1" onclick="window.submitEx134_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2a (Trang 73) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-10 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2a</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2a. Tính (theo mẫu)</h3>
                            <p class="text-2xl md:text-3xl text-slate-800 leading-relaxed font-black tracking-tight">Thực hiện phép chia có đổi đơn vị từ phần dư.</p>
                        </div>
                    </div>

                    <!-- Mẫu -->
                    <div class="bg-teal-50/50 p-8 rounded-[2rem] border-2 border-teal-200 mb-10 text-left w-full space-y-3 shadow-sm">
                        <p class="text-xl md:text-2xl font-black text-teal-900">
                            💡 Mẫu: 6 giờ 30 phút : 5 = ?
                        </p>
                                                                        <div class="inline-block bg-white p-6 rounded-3xl border border-teal-200 text-left text-xl md:text-2xl font-mono font-black text-slate-800 leading-normal my-2">
                            <div class="grid items-center font-mono gap-y-1" style="grid-template-columns: 140px 20px 20px 50px 12px auto;">
                                <!-- Row 1: 6 giờ 30 phút | 5 -->
                                <span>6 giờ</span>
                                <span class="text-center font-black">3</span>
                                <span class="text-center font-black">0</span>
                                <span>phút</span>
                                <div class="border-r-2 border-slate-800 h-full col-span-1"></div>
                                <span class="pl-3 font-black text-teal-700">5</span>

                                <!-- Row 2: 1 giờ = 60 phút | horizontal line -->
                                <span class="whitespace-nowrap text-slate-600 font-bold">1 giờ =</span>
                                <span class="text-center font-black">6</span>
                                <span class="text-center font-black">0</span>
                                <span>phút</span>
                                <div class="border-r-2 border-slate-800 h-full col-span-1"></div>
                                <div class="border-t-2 border-slate-800 my-1 col-span-1"></div>

                                <!-- Row 3: Horizontal line under left side | 1 giờ 18 phút -->
                                <div class="border-b-2 border-slate-800 col-span-4 h-0 mb-1"></div>
                                <div class="border-r-2 border-slate-800 h-full col-span-1"></div>
                                <span class="pl-3 font-black text-teal-700 whitespace-nowrap">1 giờ 18 phút</span>

                                <!-- Row 4: 90 phút -->
                                <span></span>
                                <span class="text-center font-black">9</span>
                                <span class="text-center font-black">0</span>
                                <span>phút</span>
                                <div class="border-r-2 border-slate-800 h-full col-span-1"></div>
                                <div></div>

                                <!-- Row 5: 40 -->
                                <span></span>
                                <span class="text-center font-black">4</span>
                                <span class="text-center font-black">0</span>
                                <span></span>
                                <div class="border-r-2 border-slate-800 h-full col-span-1"></div>
                                <div></div>

                                <!-- Row 6: 0 -->
                                <span></span>
                                <span></span>
                                <span class="text-center font-black">0</span>
                                <span></span>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <p class="text-lg md:text-xl font-black text-teal-700 whitespace-nowrap">
                            Vậy: 6 giờ 30 phút : 5 = 1 giờ 18 phút.
                        </p>
                    </div>

                    <div class="space-y-6 mb-12 text-left w-full">
                        <!-- a1 -->
                        <div class="p-6 bg-white rounded-3xl border-2 border-teal-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-teal-800 font-extrabold">10 phút 40 giây : 8 =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-134-2a1-m" class="w-24 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">phút</span>
                                    <input type="number" id="ans-134-2a1-s" class="w-24 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">giây</span>
                                </span>
                            </div>
                        </div>

                        <!-- a2 -->
                        <div class="p-6 bg-white rounded-3xl border-2 border-teal-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-teal-800 font-extrabold">5 giờ 20 phút : 4 =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-134-2a2-h" class="w-24 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">giờ</span>
                                    <input type="number" id="ans-134-2a2-m" class="w-24 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">phút</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-134-2a" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2a:</p>
                        - 10 phút 40 giây : 8 = 1 phút 20 giây (vì 10 phút : 8 = 1 phút dư 2 phút = 120 giây; 160 giây : 8 = 20 giây).<br>
                        - 5 giờ 20 phút : 4 = 1 giờ 20 phút (vì 5 giờ : 4 = 1 giờ dư 1 giờ = 60 phút; 80 phút : 4 = 20 phút).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-134-2a')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-134-2a" onclick="window.submitEx134_2a()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 2b (Trang 74) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2b</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2b. Chọn câu trả lời đúng</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Một vệ tinh nhân tạo quay xung quanh Trái Đất 5 vòng hết 10 giờ 30 phút. Hỏi trung bình vệ tinh đó quay xung quanh Trái Đất 1 vòng hết bao lâu?</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
                        <button onclick="window.lesson134SelectMCQ('134-2b', 'A')" id="btn-134-2b-A" class="mcq-btn p-5 bg-white border-2 border-teal-200 rounded-2xl flex items-center gap-3 hover:border-teal-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xl">A</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">2 giờ 6 phút</span>
                        </button>
                        <button onclick="window.lesson134SelectMCQ('134-2b', 'B')" id="btn-134-2b-B" class="mcq-btn p-5 bg-white border-2 border-teal-200 rounded-2xl flex items-center gap-3 hover:border-teal-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xl">B</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">2 giờ 30 phút</span>
                        </button>
                        <button onclick="window.lesson134SelectMCQ('134-2b', 'C')" id="btn-134-2b-C" class="mcq-btn p-5 bg-white border-2 border-teal-200 rounded-2xl flex items-center gap-3 hover:border-teal-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xl">C</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">2 giờ</span>
                        </button>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-134-2b" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2b:</p>
                        Trung bình vệ tinh quay 1 vòng hết số thời gian là:<br>
                        10 giờ 30 phút : 5 = 2 giờ 6 phút.<br>
                        Đáp án đúng là A (2 giờ 6 phút).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-134-2b')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-134-2b" onclick="window.submitEx134_2b()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 4: Bài 3 (Trang 74) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3. Giải bài toán thực tế</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Rô-bốt nướng 3 mẻ bánh hết 46,5 phút. Hỏi trung bình mỗi mẻ bánh Rô-bốt nướng hết bao lâu?</p>
                        </div>
                    </div>

                    <!-- Hình Rô-bốt nướng bánh SGK Trang 74 -->
                    <div class="mb-8 text-center">
                        <img src="assets/images/toan/toan_tap_2/134/134-3-banh.png" alt="Rô-bốt nướng bánh" class="rounded-2xl w-full h-auto max-h-[260px] object-contain shadow-sm mx-auto">
                    </div>

                    <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 mb-8 text-left">
                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                            <span class="text-sky-900 font-extrabold">Trung bình mỗi mẻ nướng hết =</span>
                            <span class="inline-flex items-center flex-nowrap gap-2">
                                <input type="text" id="ans-134-3" class="w-36 h-14 border-2 border-sky-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-sky-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">phút</span>
                            </span>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-134-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        Trung bình mỗi mẻ bánh Rô-bốt nướng hết số thời gian là:<br>
                        46,5 phút : 3 = 15,5 phút (hoặc 15 phút 30 giây).<br>
                        Đáp số: 15,5 phút.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-134-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-134-3" onclick="window.submitEx134_3()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson134QuizPool = [
    { question: "8 giờ 20 phút : 2 = ?", options: ["4 giờ 10 phút", "4 giờ 20 phút", "4 giờ", "5 giờ 10 phút"], answer: 0, level: "easy" },
    { question: "20 phút 30 giây : 5 = ?", options: ["4 phút 6 giây", "4 phút 30 giây", "4 phút 10 giây", "5 phút 6 giây"], answer: 0, level: "easy" },
    { question: "10 phút 40 giây : 8 = ?", options: ["1 phút 20 giây", "1 phút 10 giây", "1 phút 30 giây", "2 phút 20 giây"], answer: 0, level: "medium" },
    { question: "5 giờ 20 phút : 4 = ?", options: ["1 giờ 20 phút", "1 giờ 10 phút", "1 giờ 30 phút", "2 giờ"], answer: 0, level: "medium" },
    { question: "6 giờ 30 phút : 5 = ?", options: ["1 giờ 18 phút", "1 giờ 15 phút", "1 giờ 20 phút", "1 giờ 30 phút"], answer: 0, level: "medium" },
    { question: "10 giờ 30 phút : 5 = ?", options: ["2 giờ 6 phút", "2 giờ 30 phút", "2 giờ 10 phút", "2 giờ 15 phút"], answer: 0, level: "easy" },
    { question: "12 phút 40 giây : 4 = ?", options: ["3 phút 10 giây", "3 phút 20 giây", "4 phút 10 giây", "3 phút"], answer: 0, level: "easy" },
    { question: "15 giờ 45 phút : 3 = ?", options: ["5 giờ 15 phút", "5 giờ 30 phút", "5 giờ 45 phút", "6 giờ 15 phút"], answer: 0, level: "easy" },
    { question: "7 phút 30 giây : 3 = ?", options: ["2 phút 30 giây", "2 phút 15 giây", "3 phút 10 giây", "2 phút 45 giây"], answer: 0, level: "medium" },
    { question: "9 giờ 20 phút : 4 = ?", options: ["2 giờ 20 phút", "2 giờ 10 phút", "2 giờ 30 phút", "2 giờ 40 phút"], answer: 0, level: "hard" },
    { question: "46,5 phút : 3 = ?", options: ["15,5 phút", "15,2 phút", "16,5 phút", "14,5 phút"], answer: 0, level: "medium" },
    { question: "18 phút 30 giây : 3 = ?", options: ["6 phút 10 giây", "6 phút 15 giây", "6 phút 30 giây", "5 phút 10 giây"], answer: 0, level: "easy" },
    { question: "14 giờ 10 phút : 2 = ?", options: ["7 giờ 5 phút", "7 giờ 10 phút", "7 giờ 15 phút", "6 giờ 5 phút"], answer: 0, level: "easy" },
    { question: "8 phút 15 giây : 3 = ?", options: ["2 phút 45 giây", "2 phút 30 giây", "2 phút 15 giây", "3 phút 45 giây"], answer: 0, level: "hard" },
    { question: "11 giờ 15 phút : 5 = ?", options: ["2 giờ 15 phút", "2 giờ 25 phút", "2 giờ 30 phút", "2 giờ 10 phút"], answer: 0, level: "hard" }
];

// 5. Global Handlers & State
window.lesson134State = {
    attempts: { s1: 0, s2a: 0, s2b: 0, s3: 0 },
    mcq: { s2b: null }
};

window.lesson134SelectMCQ = function (exId, option) {
    if (exId === '134-2b') {
        window.lesson134State.mcq.s2b = option;
        ['A', 'B', 'C'].forEach(opt => {
            const btn = document.getElementById(`btn-134-2b-${opt}`);
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

window.submitEx134_1 = function () {
    window.lesson134State.attempts.s1++;
    const ha = document.getElementById('ans-134-1a-h')?.value.trim();
    const ma = document.getElementById('ans-134-1a-m')?.value.trim();
    const mb = document.getElementById('ans-134-1b-m')?.value.trim();
    const sb = document.getElementById('ans-134-1b-s')?.value.trim();

    if (!ha || !ma || !mb || !sb) {
        alert("Em hãy nhập đầy đủ tất cả kết quả các phép tính!");
        return;
    }

    const ca = (ha === '2' && ma === '5');
    const cb = (mb === '4' && sb === '6');

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0);
    const isCorrect = (correctCount === 2);
    const score = Math.round((correctCount / 2) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 2 giờ 5 phút ; b) 4 phút 6 giây",
        `a) ${ha} giờ ${ma} phút ; b) ${mb} phút ${sb} giây`,
        "Chia lần lượt từng đơn vị thời gian cho số đó từ trái sang phải.",
        `
        a) 4 giờ 10 phút : 2 = 2 giờ 5 phút.<br>
        b) 20 phút 30 giây : 5 = 4 phút 6 giây.<br>
        Em làm bài rất giỏi!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-134-1", window.lesson134State.attempts.s1, 2, correctCount);
};

window.submitEx134_2a = function () {
    window.lesson134State.attempts.s2a++;
    const m1 = document.getElementById('ans-134-2a1-m')?.value.trim();
    const s1 = document.getElementById('ans-134-2a1-s')?.value.trim();
    const h2 = document.getElementById('ans-134-2a2-h')?.value.trim();
    const m2 = document.getElementById('ans-134-2a2-m')?.value.trim();

    if (!m1 || !s1 || !h2 || !m2) {
        alert("Em hãy nhập đầy đủ tất cả kết quả!");
        return;
    }

    const c1 = (m1 === '1' && s1 === '20');
    const c2 = (h2 === '1' && m2 === '20');

    const correctCount = (c1 ? 1 : 0) + (c2 ? 1 : 0);
    const isCorrect = (correctCount === 2);
    const score = Math.round((correctCount / 2) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 1 phút 20 giây ; b) 1 giờ 20 phút",
        `a) ${m1} phút ${s1} giây ; b) ${h2} giờ ${m2} phút`,
        "Nếu còn dư ở đơn vị lớn, ta đổi sang đơn vị nhỏ hơn rồi cộng tiếp vào đơn vị nhỏ để chia.",
        `
        a) 10 phút 40 giây : 8 = 1 phút 20 giây (vì 10 phút : 8 = 1 phút dư 2 phút = 120 giây; 160 giây : 8 = 20 giây).<br><br>
        b) 5 giờ 20 phút : 4 = 1 giờ 20 phút (vì 5 giờ : 4 = 1 giờ dư 1 giờ = 60 phút; 80 phút : 4 = 20 phút).<br><br>
        Đáp số: a) 1 phút 20 giây ; b) 1 giờ 20 phút.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-134-2a", window.lesson134State.attempts.s2a, 2, correctCount);
};

window.submitEx134_2b = function () {
    window.lesson134State.attempts.s2b++;
    const selected = window.lesson134State.mcq.s2b;

    if (!selected) {
        alert("Em hãy lựa chọn câu trả lời!");
        return;
    }

    const isCorrect = (selected === 'A');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "A. 2 giờ 6 phút",
        `Câu ${selected}`,
        "Em hãy lấy tổng thời gian (10 giờ 30 phút) chia cho 5 vòng quay nhé!",
        `
        Trung bình vệ tinh quay 1 vòng hết số thời gian là:<br>
        10 giờ 30 phút : 5 = 2 giờ 6 phút.<br>
        Đáp án đúng là A (2 giờ 6 phút).
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-134-2b", window.lesson134State.attempts.s2b, 1, isCorrect ? 1 : 0);
};

window.submitEx134_3 = function () {
    window.lesson134State.attempts.s3++;
    const val = document.getElementById('ans-134-3')?.value.trim().replace(',', '.');

    if (!val) {
        alert("Em hãy nhập kết quả!");
        return;
    }

    const isCorrect = (val === '15.5' || val === '15,5' || val.includes('15 phút 30 giây') || val.includes('15.5'));
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "15,5 phút (hoặc 15 phút 30 giây)",
        `${val} phút`,
        "Em hãy lấy tổng thời gian nướng bánh (46,5 phút) chia cho 3 mẻ bánh nhé!",
        `
        Trung bình mỗi mẻ bánh Rô-bốt nướng hết số thời gian là:<br>
        46,5 phút : 3 = 15,5 phút.<br>
        (Đổi sang phút giây: 15,5 phút = 15 phút 30 giây).<br>
        Đáp số: 15,5 phút.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-134-3", window.lesson134State.attempts.s3, 1, isCorrect ? 1 : 0);
};

// 6. Main Lesson Export
export default {
    metadata,
    lessonInfo,
    content: lesson134Content,
    practice: lesson134Practice,
    quizPool: lesson134QuizPool,
    onLoad: () => {
        console.log("Lesson 134 Loaded: Bài 58. Nhân, chia số đo thời gian với một số (tiết 2)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};
