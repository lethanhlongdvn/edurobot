/**
 * @file index.js
 * @description Standardized Lesson 135: Bài 60. Luyện tập chung (tiết 3)
 * Targets: 100% SGK compliance (Trang 74-75), 4 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-135",
    period: "135",
    title: "Bài 60. Luyện tập chung (tiết 3)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 60. LUYỆN TẬP CHUNG (TIẾT 3)",
    description: "Ôn tập tổng hợp cộng, trừ, nhân, chia số đo thời gian và giải toán thực tế.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 74-75"
};

// 2. HTML Content (Khám phá / Tìm hiểu bài - Trang 74)
const lesson135Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">⏱️ ÔN TẬP TỔNG HỢP SỐ ĐO THỜI GIAN</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <div class="p-6 bg-blue-50/50 rounded-3xl border border-blue-100 space-y-4">
                    <p class="text-xl md:text-2xl font-black text-blue-900">📌 Qúa trình thực hiện các phép tính số đo thời gian:</p>
                    <ul class="list-disc pl-6 space-y-3 text-lg md:text-xl font-bold text-slate-800 leading-relaxed">
                        <li><span class="text-blue-700 font-black">Cộng / Trừ:</span> Đặt tính thẳng cột theo đơn vị đo (giờ thẳng giờ, phút thẳng phút, giây thẳng giây).</li>
                        <li><span class="text-teal-700 font-black">Nhân:</span> Thực hiện nhân từng đơn vị số đo với số tự nhiên, nếu đơn vị nhỏ ≥ 60 thì đổi sang đơn vị lớn hơn.</li>
                        <li><span class="text-sky-700 font-black">Chia:</span> Chia lần lượt từng đơn vị từ trái sang phải, nếu có phần dư ở đơn vị lớn thì đổi sang đơn vị nhỏ rồi cộng tiếp để chia.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 4 Slide phụ - Trang 74-75)
const lesson135Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 74) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-10 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Tính</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Thực hiện các phép tính nhân, chia số đo thời gian.</p>
                        </div>
                    </div>

                    <div class="space-y-6 mb-12 text-left w-full">
                        <!-- a1 -->
                        <div class="p-6 bg-white rounded-3xl border-2 border-blue-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-blue-800 font-extrabold">a) 2 giờ 10 phút × 5 =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-135-1a1-h" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">giờ</span>
                                    <input type="number" id="ans-135-1a1-m" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">phút</span>
                                </span>
                            </div>
                        </div>

                        <!-- a2 -->
                        <div class="p-6 bg-white rounded-3xl border-2 border-blue-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-blue-800 font-extrabold">&nbsp;&nbsp;&nbsp; 15 phút 20 giây × 3 =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-135-1a2-m" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">phút</span>
                                </span>
                            </div>
                        </div>

                        <!-- b1 -->
                        <div class="p-6 bg-white rounded-3xl border-2 border-blue-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-blue-800 font-extrabold">b) 8 giờ 20 phút : 4 =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-135-1b1-h" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">giờ</span>
                                    <input type="number" id="ans-135-1b1-m" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">phút</span>
                                </span>
                            </div>
                        </div>

                        <!-- b2 -->
                        <div class="p-6 bg-white rounded-3xl border-2 border-blue-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-blue-800 font-extrabold">&nbsp;&nbsp;&nbsp; 51 phút 30 giây : 10 =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-135-1b2-m" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">phút</span>
                                    <input type="number" id="ans-135-1b2-s" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">giây</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-135-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        a) <br>
                        - 2 giờ 10 phút × 5 = 10 giờ 50 phút.<br>
                        - 15 phút 20 giây × 3 = 45 phút 60 giây = 46 phút.<br><br>
                        b) <br>
                        - 8 giờ 20 phút : 4 = 2 giờ 5 phút.<br>
                        - 51 phút 30 giây : 10 = 5 phút 9 giây (vì 51 phút : 10 = 5 phút dư 1 phút = 60 giây; 90 giây : 10 = 9 giây).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-135-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-135-1" onclick="window.submitEx135_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 74) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Chọn câu trả lời đúng</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Một con kiến bò theo tất cả các cạnh của hình ngôi sao, mỗi cạnh một lần và quay về vị trí xuất phát hết 11 phút 10 giây. Hỏi trung bình con kiến bò theo mỗi cạnh hết bao lâu?</p>
                        </div>
                    </div>

                    <!-- Hình Con kiến bò ngôi sao SGK Trang 74 -->
                    <div class="mb-8 text-center">
                        <img src="assets/images/toan/toan_tap_2/135/135-2-kien.png" alt="Kiến bò hình ngôi sao" class="rounded-2xl w-full h-auto max-h-[260px] object-contain shadow-sm mx-auto">
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
                        <button onclick="window.lesson135SelectMCQ('135-2', 'A')" id="btn-135-2-A" class="mcq-btn p-5 bg-white border-2 border-teal-200 rounded-2xl flex items-center gap-3 hover:border-teal-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xl">A</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">1 phút 1 giây</span>
                        </button>
                        <button onclick="window.lesson135SelectMCQ('135-2', 'B')" id="btn-135-2-B" class="mcq-btn p-5 bg-white border-2 border-teal-200 rounded-2xl flex items-center gap-3 hover:border-teal-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xl">B</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">1 phút 6 giây</span>
                        </button>
                        <button onclick="window.lesson135SelectMCQ('135-2', 'C')" id="btn-135-2-C" class="mcq-btn p-5 bg-white border-2 border-teal-200 rounded-2xl flex items-center gap-3 hover:border-teal-500 transition-all">
                            <span class="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xl">C</span>
                            <span class="font-black text-xl md:text-2xl text-slate-800">1 phút 7 giây</span>
                        </button>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-135-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        Hình ngôi sao 5 cánh có tổng cộng 10 cạnh.<br>
                        Thời gian trung bình con kiến bò theo mỗi cạnh là:<br>
                        11 phút 10 giây : 10 = 1 phút 7 giây.<br>
                        Đáp án đúng là C (1 phút 7 giây).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-135-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-135-2" onclick="window.submitEx135_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 3 (Trang 75) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3. Giải bài toán thực tế</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Buổi sáng từ 8 giờ 10 phút đến 10 giờ 20 phút, Rô-bốt làm được 2 hộp bút. Buổi chiều từ 14 giờ đến 15 giờ 5 phút, Rô-bốt làm được 1 hộp bút. Hỏi trung bình Rô-bốt làm 1 hộp bút hết bao lâu?</p>
                        </div>
                    </div>

                    <!-- Hình Hộp bút SGK Trang 75 -->
                    <div class="mb-8 text-center">
                        <img src="assets/images/toan/toan_tap_2/135/135-3-hopbut.png" alt="Hộp bút từ vỏ chai nhựa" class="rounded-2xl w-full h-auto max-h-[260px] object-contain shadow-sm mx-auto">
                    </div>

                    <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 mb-8 text-left">
                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                            <span class="text-sky-900 font-extrabold">Trung bình làm 1 hộp bút hết =</span>
                            <span class="inline-flex items-center flex-nowrap gap-2">
                                <input type="number" id="ans-135-3-h" class="w-24 h-14 border-2 border-sky-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-sky-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">giờ</span>
                                <input type="number" id="ans-135-3-m" class="w-24 h-14 border-2 border-sky-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-sky-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">phút</span>
                            </span>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-135-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        Thời gian làm 2 hộp bút buổi sáng: 10 giờ 20 phút − 8 giờ 10 phút = 2 giờ 10 phút.<br>
                        Thời gian làm 1 hộp bút buổi chiều: 15 giờ 5 phút − 14 giờ = 1 giờ 5 phút.<br>
                        Tổng thời gian Rô-bốt làm: 2 giờ 10 phút + 1 giờ 5 phút = 3 giờ 15 phút.<br>
                        Tổng số hộp bút Rô-bốt làm được: 2 + 1 = 3 (hộp).<br>
                        Trung bình Rô-bốt làm 1 hộp bút hết: 3 giờ 15 phút : 3 = 1 giờ 5 phút.<br>
                        Đáp số: 1 giờ 5 phút.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-135-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-135-3" onclick="window.submitEx135_3()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 4: Bài 4 (Trang 75) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">4</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 4. Tìm đường đi và tính thời gian</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">
                                a) Tìm đường đi ngắn nhất để kiến đến nhà ve sầu và quay về vị trí ban đầu.<br>
                                b) Kiến mất 1,5 phút đi từ A đến M. Nếu ở lại nhà ve sầu 5 phút thì hết bao lâu để kiến hoàn thành đường đi ở câu a?
                            </p>
                        </div>
                    </div>

                    <!-- Hình Sơ đồ đường đi SGK Trang 75 -->
                    <div class="mb-8 text-center">
                        <img src="assets/images/toan/toan_tap_2/135/135-4-so-do.png" alt="Sơ đồ đường đi kiến và ve sầu" class="rounded-2xl w-full h-auto max-h-[300px] object-contain shadow-sm mx-auto">
                    </div>

                    <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 mb-8 text-left space-y-4">
                        <p class="text-lg md:text-xl font-bold text-sky-900">a) Đường đi ngắn nhất: A → M → N → C → N → M → A (Tổng 6 đoạn đường bằng nhau).</p>
                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                            <span class="text-sky-900 font-extrabold">b) Tổng thời gian hoàn thành đường đi =</span>
                            <span class="inline-flex items-center flex-nowrap gap-2">
                                <input type="number" id="ans-135-4b" class="w-28 h-14 border-2 border-sky-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-sky-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">phút</span>
                            </span>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-135-4" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 4:</p>
                        a) Đường đi ngắn nhất từ A đến C và quay về A là: A → M → N → C → N → M → A (Gồm 6 đoạn đường dài bằng nhau AM, MN, NC, CN, NM, MA).<br><br>
                        b) Thời gian kiến di chuyển 6 đoạn đường là: 1,5 phút × 6 = 9 phút.<br>
                        Tổng thời gian kiến hoàn thành cả chuyến đi (gồm 5 phút ở lại) là: 9 phút + 5 phút = 14 phút.<br>
                        Đáp số: b) 14 phút.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-135-4')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-135-4" onclick="window.submitEx135_4()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson135QuizPool = [
    { question: "2 giờ 10 phút × 5 = ?", options: ["10 giờ 50 phút", "10 giờ", "11 giờ 50 phút", "10 giờ 30 phút"], answer: 0, level: "easy" },
    { question: "15 phút 20 giây × 3 = ?", options: ["46 phút", "45 phút 60 giây", "45 phút 20 giây", "46 phút 20 giây"], answer: 0, level: "easy" },
    { question: "8 giờ 20 phút : 4 = ?", options: ["2 giờ 5 phút", "2 giờ 10 phút", "2 giờ", "1 giờ 50 phút"], answer: 0, level: "medium" },
    { question: "51 phút 30 giây : 10 = ?", options: ["5 phút 9 giây", "5 phút 3 giây", "5 phút", "6 phút 9 giây"], answer: 0, level: "medium" },
    { question: "11 phút 10 giây : 10 = ?", options: ["1 phút 7 giây", "1 phút 1 giây", "1 phút 6 giây", "1 phút 10 giây"], answer: 0, level: "medium" },
    { question: "1 giờ 15 phút × 2 = ?", options: ["2 giờ 30 phút", "2 giờ 45 phút", "2 giờ 15 phút", "3 giờ"], answer: 0, level: "easy" },
    { question: "3 giờ 20 phút : 5 = ?", options: ["40 phút", "30 phút", "50 phút", "1 giờ"], answer: 0, level: "medium" },
    { question: "1,5 phút × 6 = ?", options: ["9 phút", "8,5 phút", "9,5 phút", "10 phút"], answer: 0, level: "easy" },
    { question: "9 phút + 5 phút = ?", options: ["14 phút", "13 phút", "15 phút", "16 phút"], answer: 0, level: "easy" },
    { question: "10 giờ 20 phút − 8 giờ 10 phút = ?", options: ["2 giờ 10 phút", "2 giờ", "2 giờ 20 phút", "1 giờ 50 phút"], answer: 0, level: "medium" },
    { question: "15 giờ 5 phút − 14 giờ = ?", options: ["1 giờ 5 phút", "1 giờ", "1 giờ 10 phút", "55 phút"], answer: 0, level: "medium" },
    { question: "2 giờ 10 phút + 1 giờ 5 phút = ?", options: ["3 giờ 15 phút", "3 giờ 10 phút", "3 giờ 20 phút", "3 giờ 5 phút"], answer: 0, level: "easy" },
    { question: "3 giờ 15 phút : 3 = ?", options: ["1 giờ 5 phút", "1 giờ 15 phút", "1 giờ 10 phút", "1 giờ"], answer: 0, level: "medium" },
    { question: "4 phút 30 giây × 2 = ?", options: ["9 phút", "8 phút 60 giây", "9 phút 30 giây", "8 phút"], answer: 0, level: "easy" },
    { question: "12 giờ 40 phút : 4 = ?", options: ["3 giờ 10 phút", "3 giờ 20 phút", "4 giờ 10 phút", "3 giờ 5 phút"], answer: 0, level: "easy" }
];

// 5. Global Handlers & State
window.lesson135State = {
    attempts: { s1: 0, s2: 0, s3: 0, s4: 0 },
    mcq: { s2: null }
};

window.lesson135SelectMCQ = function (exId, option) {
    if (exId === '135-2') {
        window.lesson135State.mcq.s2 = option;
        ['A', 'B', 'C'].forEach(opt => {
            const btn = document.getElementById(`btn-135-2-${opt}`);
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

window.submitEx135_1 = function () {
    window.lesson135State.attempts.s1++;
    const ha1 = document.getElementById('ans-135-1a1-h')?.value.trim();
    const ma1 = document.getElementById('ans-135-1a1-m')?.value.trim();
    const ma2 = document.getElementById('ans-135-1a2-m')?.value.trim();
    const hb1 = document.getElementById('ans-135-1b1-h')?.value.trim();
    const mb1 = document.getElementById('ans-135-1b1-m')?.value.trim();
    const mb2 = document.getElementById('ans-135-1b2-m')?.value.trim();
    const sb2 = document.getElementById('ans-135-1b2-s')?.value.trim();

    if (!ha1 || !ma1 || !ma2 || !hb1 || !mb1 || !mb2 || !sb2) {
        alert("Em hãy nhập đầy đủ tất cả kết quả các phép tính!");
        return;
    }

    const ca1 = (ha1 === '10' && ma1 === '50');
    const ca2 = (ma2 === '46');
    const cb1 = (hb1 === '2' && mb1 === '5');
    const cb2 = (mb2 === '5' && sb2 === '9');

    const correctCount = (ca1 ? 1 : 0) + (ca2 ? 1 : 0) + (cb1 ? 1 : 0) + (cb2 ? 1 : 0);
    const isCorrect = (correctCount === 4);
    const score = Math.round((correctCount / 4) * 100);

    window.showMathFeedback(
        isCorrect,
        "a1) 10h50p ; a2) 46p ; b1) 2h5p ; b2) 5p9s",
        `a1) ${ha1}h${ma1}p ; a2) ${ma2}p ; b1) ${hb1}h${mb1}p ; b2) ${mb2}p${sb2}s`,
        "Thực hiện từng phép tính nhân, chia số đo thời gian từ trái sang phải.",
        `
        a) <br>
        - 2 giờ 10 phút × 5 = 10 giờ 50 phút.<br>
        - 15 phút 20 giây × 3 = 45 phút 60 giây = 46 phút.<br><br>
        b) <br>
        - 8 giờ 20 phút : 4 = 2 giờ 5 phút.<br>
        - 51 phút 30 giây : 10 = 5 phút 9 giây.<br>
        Em thực hiện tính rất xuất sắc!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-135-1", window.lesson135State.attempts.s1, 4, correctCount);
};

window.submitEx135_2 = function () {
    window.lesson135State.attempts.s2++;
    const selected = window.lesson135State.mcq.s2;

    if (!selected) {
        alert("Em hãy lựa chọn câu trả lời!");
        return;
    }

    const isCorrect = (selected === 'C');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "C. 1 phút 7 giây",
        `Câu ${selected}`,
        "Em chú ý hình ngôi sao 5 cánh có tổng cộng 10 cạnh. Lấy tổng thời gian (11 phút 10 giây) chia cho 10 nhé!",
        `
        Hình ngôi sao 5 cánh có tổng cộng 10 cạnh.<br>
        Thời gian trung bình con kiến bò theo mỗi cạnh là:<br>
        11 phút 10 giây : 10 = 1 phút 7 giây (vì 11 phút : 10 = 1 phút dư 1 phút = 60 giây; 70 giây : 10 = 7 giây).<br>
        Đáp án đúng là C (1 phút 7 giây).
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-135-2", window.lesson135State.attempts.s2, 1, isCorrect ? 1 : 0);
};

window.submitEx135_3 = function () {
    window.lesson135State.attempts.s3++;
    const h = document.getElementById('ans-135-3-h')?.value.trim();
    const m = document.getElementById('ans-135-3-m')?.value.trim();

    if (!h || !m) {
        alert("Em hãy nhập đầy đủ giờ và phút!");
        return;
    }

    const isCorrect = (h === '1' && m === '5');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "1 giờ 5 phút",
        `${h} giờ ${m} phút`,
        "Em hãy tính thời gian làm buổi sáng, thời gian làm buổi chiều rồi tính tổng thời gian chia cho tổng 3 hộp bút nhé!",
        `
        Thời gian làm 2 hộp bút buổi sáng: 10 giờ 20 phút − 8 giờ 10 phút = 2 giờ 10 phút.<br>
        Thời gian làm 1 hộp bút buổi chiều: 15 giờ 5 phút − 14 giờ = 1 giờ 5 phút.<br>
        Tổng thời gian Rô-bốt làm: 2 giờ 10 phút + 1 giờ 5 phút = 3 giờ 15 phút.<br>
        Tổng số hộp bút Rô-bốt làm được: 2 + 1 = 3 (hộp).<br>
        Trung bình Rô-bốt làm 1 hộp bút hết: 3 giờ 15 phút : 3 = 1 giờ 5 phút.<br>
        Đáp số: 1 giờ 5 phút.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-135-3", window.lesson135State.attempts.s3, 1, isCorrect ? 1 : 0);
};

window.submitEx135_4 = function () {
    window.lesson135State.attempts.s4++;
    const m = document.getElementById('ans-135-4b')?.value.trim();

    if (!m) {
        alert("Em hãy nhập số phút!");
        return;
    }

    const isCorrect = (m === '14');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "14 phút",
        `${m} phút`,
        "Em hãy đếm tổng số đoạn đường ngắn nhất kiến cần đi (6 đoạn), lấy 1,5 phút × 6 rồi cộng với 5 phút ở lại nhé!",
        `
        a) Đường đi ngắn nhất từ A đến C và quay về A là: A → M → N → C → N → M → A (Gồm 6 đoạn đường dài bằng nhau).<br><br>
        b) Thời gian kiến di chuyển 6 đoạn đường là: 1,5 phút × 6 = 9 phút.<br>
        Tổng thời gian kiến hoàn thành cả chuyến đi (gồm 5 phút ở lại) là: 9 phút + 5 phút = 14 phút.<br>
        Đáp số: b) 14 phút.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-135-4", window.lesson135State.attempts.s4, 1, isCorrect ? 1 : 0);
};

// 6. Main Lesson Export
export default {
    metadata,
    lessonInfo,
    content: lesson135Content,
    practice: lesson135Practice,
    quizPool: lesson135QuizPool,
    onLoad: () => {
        console.log("Lesson 135 Loaded: Bài 60. Luyện tập chung (tiết 3)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};
