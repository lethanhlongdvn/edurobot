/**
 * @file index.js
 * @description Standardized Lesson 155: Bài 68. Ôn tập số tự nhiên, phân số, số thập phân (tiết 3)
 * Targets: 100% SGK compliance (Trang 105-106), 5 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-155",
    period: "155",
    title: "Bài 68. Ôn tập số tự nhiên, phân số, số thập phân (tiết 3)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 68. ÔN TẬP SỐ TỰ NHIÊN, PHÂN SỐ, SỐ THẬP PHÂN (TIẾT 3)",
    description: "Học sinh ôn tập về cách chuyển phân số thập phân thành số thập phân, so sánh và sắp xếp số thập phân, tỉ số phần trăm.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 105-106"
};

// 2. HTML Content (Khám phá / Lý thuyết - Trang 105-106)
const lesson155Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-sky-50 p-8 rounded-[48px] border-4 border-sky-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <h4 class="text-2xl md:text-3xl font-black text-sky-700 uppercase tracking-widest text-center">🌊 ÔN TẬP SỐ THẬP PHÂN (TIẾT 3)</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-sky-100 max-w-3xl mx-auto space-y-6 text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-lg md:text-xl">
                    <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-200 space-y-2">
                        <p class="font-black text-sky-800 text-xl md:text-2xl">🔢 Viết số thập phân:</p>
                        <p class="text-slate-800">• 31/10 = 3,1.</p>
                        <p class="text-slate-800">• 21/30 = 7/10 = 0,7.</p>
                    </div>
                    <div class="p-6 bg-emerald-50 rounded-3xl border-2 border-emerald-200 space-y-2">
                        <p class="font-black text-emerald-800 text-xl md:text-2xl">⚖️ So sánh & Tỉ số %:</p>
                        <p class="text-slate-800">• So sánh phần nguyên rồi phần thập phân.</p>
                        <p class="text-slate-800">• Gấp rưỡi = 1,5 = 150%.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 5 Slide phụ - Trang 105-106)
const lesson155Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 105) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Viết các phân số thập phân thành số thập phân</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Viết các phân số thập phân thành số thập phân và đọc các số đó:</p>
                        </div>
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 31/10 =</span>
                                    <input type="text" id="ans-155-1a" class="w-32 h-12 border-2 border-blue-600 rounded-xl text-center font-black text-blue-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="3,1">
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 75/100 =</span>
                                    <input type="text" id="ans-155-1b" class="w-32 h-12 border-2 border-blue-600 rounded-xl text-center font-black text-blue-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="0,75">
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 489/100 =</span>
                                    <input type="text" id="ans-155-1c" class="w-32 h-12 border-2 border-blue-600 rounded-xl text-center font-black text-blue-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="4,89">
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 6 024/1 000 =</span>
                                    <input type="text" id="ans-155-1d" class="w-32 h-12 border-2 border-blue-600 rounded-xl text-center font-black text-blue-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="6,024">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-155-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        Chuyển phân số thập phân thành số thập phân:<br>
                        • 31/10 = <b>3,1</b> (đọc là: ba phẩy một).<br>
                        • 75/100 = <b>0,75</b> (đọc là: không phẩy bảy mươi lăm).<br>
                        • 489/100 = <b>4,89</b> (đọc là: bốn phẩy tám mươi chín).<br>
                        • 6 024/1 000 = <b>6,024</b> (đọc là: sáu phẩy không trăm hai mươi tư).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-155-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-155-1" onclick="window.submitEx155_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 106) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Viết các phân số dưới dạng số thập phân</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Viết các phân số sau dưới dạng số thập phân: <b>21/30</b>, <b>62/200</b>, <b>7/4</b>, <b>5/8</b>:</p>
                        </div>
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 shadow-sm space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 21/30 =</span>
                                    <input type="text" id="ans-155-2a" class="w-32 h-12 border-2 border-teal-600 rounded-xl text-center font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="0,7">
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 62/200 =</span>
                                    <input type="text" id="ans-155-2b" class="w-32 h-12 border-2 border-teal-600 rounded-xl text-center font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="0,31">
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 7/4 =</span>
                                    <input type="text" id="ans-155-2c" class="w-32 h-12 border-2 border-teal-600 rounded-xl text-center font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="1,75">
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 5/8 =</span>
                                    <input type="text" id="ans-155-2d" class="w-32 h-12 border-2 border-teal-600 rounded-xl text-center font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="0,625">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-155-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        Viết phân số dưới dạng số thập phân:<br>
                        • 21/30 = 7/10 = <b>0,7</b>.<br>
                        • 62/200 = 31/100 = <b>0,31</b>.<br>
                        • 7/4 = (7 × 25) / (4 × 25) = 175/100 = <b>1,75</b>.<br>
                        • 5/8 = (5 × 125) / (8 × 125) = 625/1 000 = <b>0,625</b>.<br>
                        Đáp số: 0,7 ; 0,31 ; 1,75 ; 0,625.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-155-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-155-2" onclick="window.submitEx155_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 3 (Trang 106) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3. Điền dấu >; <; = vào chỗ chấm [ ? ]</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">So sánh các cặp số thập phân thích hợp:</p>
                        </div>
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 shadow-sm space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>16,7</span>
                                    <select id="ans-155-3a" class="h-12 border-2 border-sky-600 rounded-xl px-3 font-black text-sky-600 outline-none bg-white">
                                        <option value="">?</option>
                                        <option value="> font-black">&gt;</option>
                                        <option value="<">&lt;</option>
                                        <option value="=">=</option>
                                    </select>
                                    <span>16,07</span>
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>7,360</span>
                                    <select id="ans-155-3d" class="h-12 border-2 border-sky-600 rounded-xl px-3 font-black text-sky-600 outline-none bg-white">
                                        <option value="">?</option>
                                        <option value=">">&gt;</option>
                                        <option value="<">&lt;</option>
                                        <option value="=">=</option>
                                    </select>
                                    <span>7,36</span>
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>85,79</span>
                                    <select id="ans-155-3b" class="h-12 border-2 border-sky-600 rounded-xl px-3 font-black text-sky-600 outline-none bg-white">
                                        <option value="">?</option>
                                        <option value=">">&gt;</option>
                                        <option value="<">&lt;</option>
                                        <option value="=">=</option>
                                    </select>
                                    <span>85,8</span>
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>0,830</span>
                                    <select id="ans-155-3e" class="h-12 border-2 border-sky-600 rounded-xl px-3 font-black text-sky-600 outline-none bg-white">
                                        <option value="">?</option>
                                        <option value=">">&gt;</option>
                                        <option value="<">&lt;</option>
                                        <option value="=">=</option>
                                    </select>
                                    <span>0,829</span>
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>9,80</span>
                                    <select id="ans-155-3c" class="h-12 border-2 border-sky-600 rounded-xl px-3 font-black text-sky-600 outline-none bg-white">
                                        <option value="">?</option>
                                        <option value=">">&gt;</option>
                                        <option value="<">&lt;</option>
                                        <option value="=">=</option>
                                    </select>
                                    <span>9,8</span>
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>28,999</span>
                                    <select id="ans-155-3f" class="h-12 border-2 border-sky-600 rounded-xl px-3 font-black text-sky-600 outline-none bg-white">
                                        <option value="">?</option>
                                        <option value=">">&gt;</option>
                                        <option value="<">&lt;</option>
                                        <option value="=">=</option>
                                    </select>
                                    <span>29,001</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-155-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        • 16,7 <b>&gt;</b> 16,07 (vì 7/10 &gt; 0/10).<br>
                        • 85,79 <b>&lt;</b> 85,8 (vì 7/10 &lt; 8/10).<br>
                        • 9,80 <b>=</b> 9,8 (bỏ bớt chữ số 0 ở bên phải).<br>
                        • 7,360 <b>=</b> 7,36.<br>
                        • 0,830 <b>&gt;</b> 0,829 (vì 3 phần trăm &gt; 2 phần trăm).<br>
                        • 28,999 <b>&lt;</b> 29,001 (vì phần nguyên 28 &lt; 29).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-155-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-155-3" onclick="window.submitEx155_3()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 4: Bài 4 (Trang 106) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-rose-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">4</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-rose-700 block">Bài 4. Viết các số đo diện tích căn hộ theo thứ tự từ bé đến lớn</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Số đo diện tích: <b>71,5 m²</b>; <b>69,83 m²</b>; <b>71,09 m²</b>; <b>68,93 m²</b>. Viết theo thứ tự từ bé đến lớn:</p>
                        </div>
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <div class="p-6 bg-rose-50 rounded-3xl border-2 border-rose-100 shadow-sm space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>1 (Bé nhất) =</span>
                                    <input type="text" id="ans-155-4a" class="w-32 h-12 border-2 border-rose-600 rounded-xl text-center font-black text-rose-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="68,93">
                                    <span>m²</span>
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>2 =</span>
                                    <input type="text" id="ans-155-4b" class="w-32 h-12 border-2 border-rose-600 rounded-xl text-center font-black text-rose-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="69,83">
                                    <span>m²</span>
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>3 =</span>
                                    <input type="text" id="ans-155-4c" class="w-32 h-12 border-2 border-rose-600 rounded-xl text-center font-black text-rose-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="71,09">
                                    <span>m²</span>
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>4 (Lớn nhất) =</span>
                                    <input type="text" id="ans-155-4d" class="w-32 h-12 border-2 border-rose-600 rounded-xl text-center font-black text-rose-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="71,5">
                                    <span>m²</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-155-4" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 4:</p>
                        So sánh các số đo diện tích:<br>
                        68,93 m² &lt; 69,83 m² &lt; 71,09 m² &lt; 71,5 m².<br>
                        Xếp theo thứ tự từ bé đến lớn là:<br>
                        <b>68,93 m² ; 69,83 m² ; 71,09 m² ; 71,5 m²</b>.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-155-4')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-155-4" onclick="window.submitEx155_4()" class="w-16 h-16 md:w-20 md:h-20 bg-rose-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 5: Bài 5 (Trang 106) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-emerald-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">5</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-emerald-700 block">Bài 5. Điền số thích hợp vào chỗ chấm [ ? ]</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Tính tỉ số sản lượng cá đánh bắt của công ty Thành Long:</p>
                        </div>
                    </div>

                    <!-- Hình Thuyền cá SGK Trang 106 HÌNH TO RÕ NÉT -->
                    <div class="mb-8 text-center bg-emerald-50/50 p-6 rounded-[2.5rem] border-2 border-emerald-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/155/155-5-thuyen-ca.png" alt="Đoàn thuyền đánh cá" class="rounded-2xl w-full max-w-[650px] md:max-w-[750px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <div class="p-6 bg-emerald-50 rounded-3xl border-2 border-emerald-100 shadow-sm space-y-4">
                            <div class="space-y-4">
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>a) Tháng Ba gấp rưỡi tháng Hai. Sản lượng cá tháng Ba bằng =</span>
                                    <input type="text" id="ans-155-5a" class="w-24 h-12 border-2 border-emerald-600 rounded-xl text-center font-black text-emerald-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="150">
                                    <span>% tháng Hai.</span>
                                </div>
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>b) Tháng Tư bằng 60% tháng Ba. Sản lượng cá tháng Tư bằng =</span>
                                    <input type="text" id="ans-155-5b" class="w-32 h-12 border-2 border-emerald-600 rounded-xl text-center font-black text-emerald-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="3/5">
                                    <span>tháng Ba.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-155-5" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 5:</p>
                        a) Gấp rưỡi nghĩa là gấp 1,5 lần = <b>150%</b>. Sản lượng cá tháng Ba bằng 150% tháng Hai.<br>
                        b) 60% = 60/100 = <b>3/5</b> (hoặc <b>0,6</b>). Sản lượng cá tháng Tư bằng 3/5 (hoặc 0,6) tháng Ba.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-155-5')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-155-5" onclick="window.submitEx155_5()" class="w-16 h-16 md:w-20 md:h-20 bg-emerald-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson155QuizPool = [
    { question: "Phân số 31/10 viết thành số thập phân là:", options: ["3,1", "0,31", "31,0", "0,031"], answer: 0, level: "easy" },
    { question: "Phân số 75/100 viết thành số thập phân là:", options: ["0,75", "7,5", "0,075", "75,0"], answer: 0, level: "easy" },
    { question: "Phân số 489/100 viết thành số thập phân là:", options: ["4,89", "48,9", "0,489", "489,0"], answer: 0, level: "easy" },
    { question: "Phân số 6 024/1 000 viết thành số thập phân là:", options: ["6,024", "60,24", "0,6024", "602,4"], answer: 0, level: "easy" },
    { question: "Phân số 21/30 viết dưới dạng số thập phân là:", options: ["0,7", "0,21", "2,1", "0,3"], answer: 0, level: "easy" },
    { question: "Phân số 62/200 viết dưới dạng số thập phân là:", options: ["0,31", "0,62", "3,1", "0,031"], answer: 0, level: "easy" },
    { question: "Phân số 7/4 viết dưới dạng số thập phân là:", options: ["1,75", "0,74", "1,4", "7,4"], answer: 0, level: "easy" },
    { question: "Phân số 5/8 viết dưới dạng số thập phân là:", options: ["0,625", "0,58", "5,8", "0,125"], answer: 0, level: "easy" },
    { question: "Điền dấu thích hợp: 16,7 ... 16,07", options: [">", "<", "=", "Không so sánh được"], answer: 0, level: "easy" },
    { question: "Điền dấu thích hợp: 85,79 ... 85,8", options: ["<", ">", "=", "Không so sánh được"], answer: 0, level: "easy" },
    { question: "Điền dấu thích hợp: 9,80 ... 9,8", options: ["=", ">", "<", "Không so sánh được"], answer: 0, level: "easy" },
    { question: "Số đo diện tích nào bé nhất trong các số: 71,5 m²; 69,83 m²; 71,09 m²; 68,93 m²?", options: ["68,93 m²", "69,83 m²", "71,09 m²", "71,5 m²"], answer: 0, level: "easy" },
    { question: "Gấp rưỡi tương ứng với bao nhiêu phần trăm?", options: ["150%", "100%", "50%", "200%"], answer: 0, level: "easy" },
    { question: "Tỉ số 60% viết dưới dạng phân số tối giản là:", options: ["3/5", "6/10", "6/100", "1/60"], answer: 0, level: "easy" },
    { question: "Số 6,024 đọc là:", options: ["Sáu phẩy không trăm hai mươi tư", "Sáu phẩy hai mươi tư", "Sáu phẩy không hai tư", "Sáu phẩy hai trăm tư"], answer: 0, level: "easy" }
];

// 5. Global Handlers & State
window.submitEx155_1 = function () {
    const a = document.getElementById('ans-155-1a')?.value.trim().replace('.', ',');
    const b = document.getElementById('ans-155-1b')?.value.trim().replace('.', ',');
    const c = document.getElementById('ans-155-1c')?.value.trim().replace('.', ',');
    const d = document.getElementById('ans-155-1d')?.value.trim().replace('.', ',');

    if (!a || !b || !c || !d) {
        alert("Em hãy điền đầy đủ số thập phân cho cả 4 câu!");
        return;
    }

    const ca = (a === '3,1');
    const cb = (b === '0,75');
    const cc = (c === '4,89');
    const cd = (d === '6,024');

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0) + (cc ? 1 : 0) + (cd ? 1 : 0);
    const isCorrect = (correctCount === 4);
    const score = Math.round((correctCount / 4) * 100);

    window.showMathFeedback(
        isCorrect,
        "3,1 ; 0,75 ; 4,89 ; 6,024",
        `${a} ; ${b} ; ${c} ; ${d}`,
        "Em hãy đếm số chữ số 0 ở mẫu số (10, 100, 1000) để lùi dấu phẩy sang trái tương ứng bấy nhiêu chữ số nhé!",
        `
        • 31/10 = 3,1 (đọc là: ba phẩy một).<br>
        • 75/100 = 0,75 (đọc là: không phẩy bảy mươi lăm).<br>
        • 489/100 = 4,89 (đọc là: bốn phẩy tám mươi chín).<br>
        • 6 024/1 000 = 6,024 (đọc là: sáu phẩy không trăm hai mươi tư).<br>
        Em chuyển phân số thập phân thành số thập phân chuẩn xác!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-155-1", 0, 4, correctCount);
};

window.submitEx155_2 = function () {
    const a = document.getElementById('ans-155-2a')?.value.trim().replace('.', ',');
    const b = document.getElementById('ans-155-2b')?.value.trim().replace('.', ',');
    const c = document.getElementById('ans-155-2c')?.value.trim().replace('.', ',');
    const d = document.getElementById('ans-155-2d')?.value.trim().replace('.', ',');

    if (!a || !b || !c || !d) {
        alert("Em hãy điền đầy đủ cả 4 số thập phân!");
        return;
    }

    const ca = (a === '0,7');
    const cb = (b === '0,31');
    const cc = (c === '1,75');
    const cd = (d === '0,625');

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0) + (cc ? 1 : 0) + (cd ? 1 : 0);
    const isCorrect = (correctCount === 4);
    const score = Math.round((correctCount / 4) * 100);

    window.showMathFeedback(
        isCorrect,
        "0,7 ; 0,31 ; 1,75 ; 0,625",
        `${a} ; ${b} ; ${c} ; ${d}`,
        "Em có thể chia tử số cho mẫu số hoặc đưa mẫu số về 10, 100, 1000 rồi viết dưới dạng số thập phân nhé!",
        `
        • 21/30 = 7/10 = 0,7.<br>
        • 62/200 = 31/100 = 0,31.<br>
        • 7/4 = 175/100 = 1,75.<br>
        • 5/8 = 625/1 000 = 0,625.<br>
        Em quy đổi phân số thành số thập phân rất thành thạo!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-155-2", 0, 4, correctCount);
};

window.submitEx155_3 = function () {
    const a = document.getElementById('ans-155-3a')?.value;
    const b = document.getElementById('ans-155-3b')?.value;
    const c = document.getElementById('ans-155-3c')?.value;
    const d = document.getElementById('ans-155-3d')?.value;
    const e = document.getElementById('ans-155-3e')?.value;
    const f = document.getElementById('ans-155-3f')?.value;

    if (!a || !b || !c || !d || !e || !f) {
        alert("Em hãy chọn dấu cho cả 6 phép so sánh!");
        return;
    }

    const ca = (a === '>');
    const cb = (b === '<');
    const cc = (c === '=');
    const cd = (d === '=');
    const ce = (e === '>');
    const cf = (f === '<');

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0) + (cc ? 1 : 0) + (cd ? 1 : 0) + (ce ? 1 : 0) + (cf ? 1 : 0);
    const isCorrect = (correctCount === 6);
    const score = Math.round((correctCount / 6) * 100);

    window.showMathFeedback(
        isCorrect,
        ">, <, =, =, >, <",
        `${a}, ${b}, ${c}, ${d}, ${e}, ${f}`,
        "Em hãy so sánh phần nguyên trước. Nếu phần nguyên bằng nhau thì so sánh lần lượt các hàng phần mười, phần trăm, phần nghìn nhé!",
        `
        • 16,7 > 16,07 ; 85,79 < 85,8 ; 9,80 = 9,8.<br>
        • 7,360 = 7,36 ; 0,830 > 0,829 ; 28,999 < 29,001.<br>
        Em so sánh số thập phân xuất sắc!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-155-3", 0, 6, correctCount);
};

window.submitEx155_4 = function () {
    const a = document.getElementById('ans-155-4a')?.value.trim().replace('.', ',');
    const b = document.getElementById('ans-155-4b')?.value.trim().replace('.', ',');
    const c = document.getElementById('ans-155-4c')?.value.trim().replace('.', ',');
    const d = document.getElementById('ans-155-4d')?.value.trim().replace('.', ',');

    if (!a || !b || !c || !d) {
        alert("Em hãy điền đầy đủ cả 4 số đo diện tích!");
        return;
    }

    const ca = (a === '68,93');
    const cb = (b === '69,83');
    const cc = (c === '71,09');
    const cd = (d === '71,5');

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0) + (cc ? 1 : 0) + (cd ? 1 : 0);
    const isCorrect = (correctCount === 4);
    const score = Math.round((correctCount / 4) * 100);

    window.showMathFeedback(
        isCorrect,
        "68,93 m² ; 69,83 m² ; 71,09 m² ; 71,5 m²",
        `${a} m² ; ${b} m² ; ${c} m² ; ${d} m²`,
        "Em hãy so sánh phần nguyên của 4 số đo (68 < 69 < 71), sau đó so sánh phần thập phân của hai số 71,09 và 71,5 để xếp thứ tự nhé!",
        `
        Thứ tự diện tích căn hộ từ bé đến lớn là:<br>
        68,93 m² < 69,83 m² < 71,09 m² < 71,5 m².<br>
        Em sắp xếp các số đo diện tích rất chuẩn!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-155-4", 0, 4, correctCount);
};

window.submitEx155_5 = function () {
    const a = document.getElementById('ans-155-5a')?.value.trim();
    const b = document.getElementById('ans-155-5b')?.value.trim().replace('.', ',');

    if (!a || !b) {
        alert("Em hãy điền kết quả cho cả 2 mục a và b!");
        return;
    }

    const ca = (a === '150');
    const cb = (b === '3/5' || b === '0,6');

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0);
    const isCorrect = (correctCount === 2);
    const score = Math.round((correctCount / 2) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 150% -- b) 3/5 (hoặc 0,6)",
        `a) ${a}% -- b) ${b}`,
        "Gấp rưỡi nghĩa là 1,5 lần (150%). 60% rút gọn dưới dạng phân số tối giản là 3/5 (hoặc 0,6) nhé!",
        `
        a) Sản lượng cá tháng Ba gấp rưỡi tháng Hai nghĩa là bằng 150% tháng Hai.<br>
        b) Sản lượng cá tháng Tư bằng 60% tháng Ba, nghĩa là 60/100 = 3/5 (hoặc 0,6) tháng Ba.<br>
        Em vận dụng kiến thức số thập phân và phần trăm tuyệt vời!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-155-5", 0, 2, correctCount);
};

// 6. Main Lesson Export
export const lesson155 = {
    topic: "Số thập phân",
    week: "31",
    period: "155",
    title: metadata.title || lessonInfo.title,
    desc: lessonInfo.description,
    content: lesson155Content,
    practice: lesson155Practice,
    quizPool: lesson155QuizPool,
    metadata,
    lessonInfo,
    onLoad: () => {
        console.log("Lesson 155 Loaded: Bài 68. Ôn tập số tự nhiên, phân số, số thập phân (tiết 3)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};

window.lesson155 = lesson155;
export default lesson155;
