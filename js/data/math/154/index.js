/**
 * @file index.js
 * @description Standardized Lesson 154: Bài 68. Ôn tập số tự nhiên, phân số, số thập phân (tiết 2)
 * Targets: 100% SGK compliance (Trang 104-105), 5 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-154",
    period: "154",
    title: "Bài 68. Ôn tập số tự nhiên, phân số, số thập phân (tiết 2)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 68. ÔN TẬP SỐ TỰ NHIÊN, PHÂN SỐ, SỐ THẬP PHÂN (TIẾT 2)",
    description: "Học sinh ôn tập về cách đọc, viết, rút gọn, quy đồng mẫu số, so sánh phân số và chuyển phân số thập phân thành hỗn số.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 104-105"
};

// 2. HTML Content (Khám phá / Lý thuyết - Trang 104-105)
const lesson154Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">🍰 ÔN TẬP PHÂN SỐ VÀ HỖN SỐ (TIẾT 2)</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-lg md:text-xl">
                    <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-200 space-y-2">
                        <p class="font-black text-blue-800 text-xl md:text-2xl">✂️ Rút gọn & Quy đồng:</p>
                        <p class="text-slate-800">• Rút gọn: Chia tử và mẫu cho ƯCLN.</p>
                        <p class="text-slate-800">• Quy đồng: Tìm mẫu số chung bé nhất.</p>
                    </div>
                    <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-200 space-y-2">
                        <p class="font-black text-teal-800 text-xl md:text-2xl">🍰 Hỗn số & So sánh:</p>
                        <p class="text-slate-800">• Hỗn số gồm phần nguyên và phần phân số.</p>
                        <p class="text-slate-800">• Phân số thập phân 317/100 = 3 17/100.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 5 Slide phụ - Trang 104-105)
const lesson154Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 104) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Viết phân số và hỗn số chỉ phần đã tô màu</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">a) Viết phân số chỉ phần tô màu mỗi hình. b) Viết hỗn số chỉ phần tô màu mỗi hình:</p>
                        </div>
                    </div>

                    <!-- Hình Phân số tô màu SGK Trang 104 HÌNH TO RÕ NÉT -->
                    <div class="mb-6 text-center bg-blue-50/50 p-6 rounded-[2.5rem] border-2 border-blue-100 shadow-inner">
                        <p class="text-xl font-black text-blue-800 mb-3">a) Phân số tô màu (Hình 1 & Hình 2):</p>
                        <img src="assets/images/toan/toan_tap_2/154/154-1a-hinh-to-mau.png" alt="Phân số tô màu" class="rounded-2xl w-full max-w-[650px] md:max-w-[750px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <!-- Hình Hỗn số tô màu SGK Trang 104 HÌNH TO RÕ NÉT -->
                    <div class="mb-8 text-center bg-teal-50/50 p-6 rounded-[2.5rem] border-2 border-teal-100 shadow-inner">
                        <p class="text-xl font-black text-teal-800 mb-3">b) Hỗn số tô màu (Hình 1 & Hình 2):</p>
                        <img src="assets/images/toan/toan_tap_2/154/154-1b-hon-so.png" alt="Hỗn số tô màu" class="rounded-2xl w-full max-w-[650px] md:max-w-[750px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-blue-900">a) Phân số chỉ phần tô màu:</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• Hình 1 =</span>
                                    <div class="flex items-center gap-2 text-xl md:text-3xl font-black text-blue-600">
                                        <input type="number" id="ans-154-1a1-num" class="w-20 h-12 border-2 border-blue-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        <span>/</span>
                                        <input type="number" id="ans-154-1a1-den" class="w-20 h-12 border-2 border-blue-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="16">
                                    </div>
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• Hình 2 =</span>
                                    <div class="flex items-center gap-2 text-xl md:text-3xl font-black text-blue-600">
                                        <input type="number" id="ans-154-1a2-num" class="w-20 h-12 border-2 border-blue-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        <span>/</span>
                                        <input type="number" id="ans-154-1a2-den" class="w-20 h-12 border-2 border-blue-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="16">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-teal-900">b) Hỗn số chỉ phần tô màu:</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex items-center gap-2 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• Hình 1 =</span>
                                    <input type="number" id="ans-154-1b1-wh" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    <div class="flex items-center gap-1 text-xl md:text-2xl font-black text-teal-600">
                                        <input type="number" id="ans-154-1b1-num" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="1">
                                        <span>/</span>
                                        <input type="number" id="ans-154-1b1-den" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="3">
                                    </div>
                                </div>
                                <div class="flex items-center gap-2 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• Hình 2 =</span>
                                    <input type="number" id="ans-154-1b2-wh" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    <div class="flex items-center gap-1 text-xl md:text-2xl font-black text-teal-600">
                                        <input type="number" id="ans-154-1b2-num" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="4">
                                        <span>/</span>
                                        <input type="number" id="ans-154-1b2-den" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="9">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-154-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        a) Phân số tô màu:<br>
                        • Hình 1: Tô màu 11 ô trên tổng 16 ô = <b>11/16</b> (đọc là: mười một phần mười sáu).<br>
                        • Hình 2: Tô màu 7 ô trên tổng 16 ô = <b>7/16</b> (đọc là: bảy phần mười sáu).<br>
                        b) Hỗn số tô màu:<br>
                        • Hình 1: 2 hình tròn nguyên vẹn và 1/3 hình tròn = <b>2 và 1/3</b> (đọc là: hai và một phần ba).<br>
                        • Hình 2: 1 hình vuông nguyên vẹn và 4/9 hình vuông = <b>1 và 4/9</b> (đọc là: một và bốn phần chín).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-154-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-154-1" onclick="window.submitEx154_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 105) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Rút gọn các phân số về phân số tối giản</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Rút gọn các phân số: <b>15/21</b>, <b>20/35</b>, <b>72/120</b> về phân số tối giản:</p>
                        </div>
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 shadow-sm space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 15/21 =</span>
                                    <div class="flex items-center gap-2 text-xl md:text-3xl font-black text-teal-600">
                                        <input type="number" id="ans-154-2a-num" class="w-20 h-12 border-2 border-teal-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="5">
                                        <span>/</span>
                                        <input type="number" id="ans-154-2a-den" class="w-20 h-12 border-2 border-teal-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="7">
                                    </div>
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 20/35 =</span>
                                    <div class="flex items-center gap-2 text-xl md:text-3xl font-black text-teal-600">
                                        <input type="number" id="ans-154-2b-num" class="w-20 h-12 border-2 border-teal-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="4">
                                        <span>/</span>
                                        <input type="number" id="ans-154-2b-den" class="w-20 h-12 border-2 border-teal-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="7">
                                    </div>
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 72/120 =</span>
                                    <div class="flex items-center gap-2 text-xl md:text-3xl font-black text-teal-600">
                                        <input type="number" id="ans-154-2c-num" class="w-20 h-12 border-2 border-teal-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="3">
                                        <span>/</span>
                                        <input type="number" id="ans-154-2c-den" class="w-20 h-12 border-2 border-teal-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="5">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-154-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        Rút gọn phân số về phân số tối giản:<br>
                        • 15/21 = (15 : 3) / (21 : 3) = <b>5/7</b>.<br>
                        • 20/35 = (20 : 5) / (35 : 5) = <b>4/7</b>.<br>
                        • 72/120 = (72 : 24) / (120 : 24) = <b>3/5</b>.<br>
                        Đáp số: 5/7 ; 4/7 ; 3/5.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-154-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-154-2" onclick="window.submitEx154_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 3 (Trang 105) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3. Quy đồng mẫu số các phân số</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Quy đồng mẫu số các phân số: a) 5/6 và 37/48. b) 3/4 ; 2/5 và 13/20.</p>
                        </div>
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 shadow-sm space-y-3">
                            <p class="text-xl md:text-2xl font-black text-sky-900">a) Quy đồng 5/6 và 37/48 (mẫu số chung 48):</p>
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                <span>5/6 =</span>
                                <div class="flex items-center gap-2 text-xl md:text-3xl font-black text-sky-600">
                                    <input type="number" id="ans-154-3a-num" class="w-20 h-12 border-2 border-sky-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="40">
                                    <span>/</span>
                                    <input type="number" id="ans-154-3a-den" class="w-20 h-12 border-2 border-sky-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="48">
                                </div>
                                <span class="font-bold text-slate-600">và giữ nguyên 37/48</span>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 shadow-sm space-y-3">
                            <p class="text-xl md:text-2xl font-black text-sky-900">b) Quy đồng 3/4 ; 2/5 và 13/20 (mẫu số chung 20):</p>
                            <div class="space-y-3">
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 3/4 =</span>
                                    <div class="flex items-center gap-2 text-xl md:text-3xl font-black text-sky-600">
                                        <input type="number" id="ans-154-3b1-num" class="w-20 h-12 border-2 border-sky-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="15">
                                        <span>/</span>
                                        <input type="number" id="ans-154-3b1-den" class="w-20 h-12 border-2 border-sky-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="20">
                                    </div>
                                </div>
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 2/5 =</span>
                                    <div class="flex items-center gap-2 text-xl md:text-3xl font-black text-sky-600">
                                        <input type="number" id="ans-154-3b2-num" class="w-20 h-12 border-2 border-sky-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="8">
                                        <span>/</span>
                                        <input type="number" id="ans-154-3b2-den" class="w-20 h-12 border-2 border-sky-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="20">
                                    </div>
                                    <span class="font-bold text-slate-600">và giữ nguyên 13/20</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-154-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        a) Mẫu số chung là 48: 5/6 = (5 × 8) / (6 × 8) = <b>40/48</b>, giữ nguyên 37/48.<br>
                        b) Mẫu số chung là 20:<br>
                        • 3/4 = (3 × 5) / (4 × 5) = <b>15/20</b>.<br>
                        • 2/5 = (2 × 4) / (5 × 4) = <b>8/20</b>.<br>
                        Giữ nguyên 13/20.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-154-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-154-3" onclick="window.submitEx154_3()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 4: Bài 4 (Trang 105) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-rose-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">4</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-rose-700 block">Bài 4. So sánh thời gian thi giải khối ru-bích của các bạn</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Thời gian hoàn thành: Mai (3/10 giờ), Việt (1/2 giờ), Nam (2/5 giờ), Rô-bốt (1/5 giờ):</p>
                        </div>
                    </div>

                    <!-- Hình các bạn giải Rubik SGK Trang 105 HÌNH TO RÕ NÉT -->
                    <div class="mb-8 text-center bg-rose-50/50 p-6 rounded-[2.5rem] border-2 border-rose-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/154/154-4-rubik.png" alt="Các bạn thi giải khối ru-bích" class="rounded-2xl w-full max-w-[650px] md:max-w-[750px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-rose-50 rounded-3xl border-2 border-rose-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-rose-900">a) Bạn hoàn thành đầu tiên và bạn hoàn thành cuối cùng:</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• Hoàn thành ĐẦU TIÊN (nhanh nhất):</span>
                                    <select id="ans-154-4a-first" class="h-12 border-2 border-rose-600 rounded-xl px-4 font-black text-rose-600 outline-none bg-white">
                                        <option value="">-- Chọn --</option>
                                        <option value="Rô-bốt">Rô-bốt (1/5h = 2/10h)</option>
                                        <option value="Mai">Mai (3/10h)</option>
                                        <option value="Nam">Nam (2/5h = 4/10h)</option>
                                        <option value="Việt">Việt (1/2h = 5/10h)</option>
                                    </select>
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• Hoàn thành CUỐI CÙNG (chậm nhất):</span>
                                    <select id="ans-154-4a-last" class="h-12 border-2 border-rose-600 rounded-xl px-4 font-black text-rose-600 outline-none bg-white">
                                        <option value="">-- Chọn --</option>
                                        <option value="Việt">Việt (1/2h = 5/10h)</option>
                                        <option value="Nam">Nam (2/5h = 4/10h)</option>
                                        <option value="Mai">Mai (3/10h)</option>
                                        <option value="Rô-bốt">Rô-bốt (1/5h = 2/10h)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-rose-50 rounded-3xl border-2 border-rose-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-rose-900">b) Mai hoàn thành giải khối ru-bích trước những bạn nào?</p>
                            <div class="w-full">
                                <select id="ans-154-4b" class="w-full md:w-auto h-14 border-2 border-rose-600 rounded-2xl px-4 font-black text-rose-600 outline-none bg-white text-xl md:text-2xl">
                                    <option value="">-- Chọn danh sách bạn --</option>
                                    <option value="Nam và Việt">Nam và Việt (vì 3/10 < 4/10 < 5/10)</option>
                                    <option value="Chỉ Việt">Chỉ Việt</option>
                                    <option value="Chỉ Nam">Chỉ Nam</option>
                                    <option value="Rô-bốt">Rô-bốt</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-154-4" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 4:</p>
                        Quy đồng mẫu số chung là 10:<br>
                        • Mai: 3/10 giờ.<br>
                        • Việt: 1/2 = 5/10 giờ.<br>
                        • Nam: 2/5 = 4/10 giờ.<br>
                        • Rô-bốt: 1/5 = 2/10 giờ.<br>
                        Vì 2/10 < 3/10 < 4/10 < 5/10 nên:<br>
                        a) <b>Rô-bốt</b> hoàn thành đầu tiên (nhanh nhất); <b>Việt</b> hoàn thành cuối cùng.<br>
                        b) Mai (3/10) hoàn thành trước <b>Nam (4/10) và Việt (5/10)</b>.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-154-4')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-154-4" onclick="window.submitEx154_4()" class="w-16 h-16 md:w-20 md:h-20 bg-rose-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 5: Bài 5 (Trang 105) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-emerald-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">5</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-emerald-700 block">Bài 5. Chọn câu trả lời đúng (Chuyển phân số thập phân thành hỗn số)</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Phân số thập phân <b>317/100</b> viết thành hỗn số là:</p>
                        </div>
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <div class="p-6 bg-emerald-50 rounded-3xl border-2 border-emerald-100 shadow-sm">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <button id="btn-154-5-A" onclick="window.select154_5(0)" class="p-4 bg-white border-2 border-emerald-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-emerald-300 transition-all text-left">A. 1 và 217/100</button>
                                <button id="btn-154-5-B" onclick="window.select154_5(1)" class="p-4 bg-white border-2 border-emerald-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-emerald-300 transition-all text-left">B. 2 và 117/100</button>
                                <button id="btn-154-5-C" onclick="window.select154_5(2)" class="p-4 bg-white border-2 border-emerald-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-emerald-300 transition-all text-left">C. 3 và 17/100</button>
                                <button id="btn-154-5-D" onclick="window.select154_5(3)" class="p-4 bg-white border-2 border-emerald-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-emerald-300 transition-all text-left">D. 31 và 7/100</button>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-154-5" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 5:</p>
                        Ta lấy tử số chia cho mẫu số: 317 : 100 = <b>3</b> (dư <b>17</b>).<br>
                        Thương là 3 là phần nguyên, số dư 17 là tử số của phần phân số.<br>
                        Do đó: 317/100 = <b>3 và 17/100</b> -> Chọn <b>C</b>.<br>
                        Đáp số: C. 3 và 17/100.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-154-5')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-154-5" onclick="window.submitEx154_5()" class="w-16 h-16 md:w-20 md:h-20 bg-emerald-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson154QuizPool = [
    { question: "Rút gọn phân số 15/21 về phân số tối giản được:", options: ["5/7", "3/7", "5/6", "3/5"], answer: 0, level: "easy" },
    { question: "Rút gọn phân số 20/35 về phân số tối giản được:", options: ["4/7", "5/7", "4/5", "2/5"], answer: 0, level: "easy" },
    { question: "Rút gọn phân số 72/120 về phân số tối giản được:", options: ["3/5", "6/10", "9/15", "4/5"], answer: 0, level: "easy" },
    { question: "Khi quy đồng 5/6 và 37/48 với mẫu số chung 48, phân số 5/6 bằng phân số nào?", options: ["40/48", "35/48", "42/48", "30/48"], answer: 0, level: "easy" },
    { question: "Khi quy đồng 3/4 ; 2/5 và 13/20 với mẫu số chung 20, phân số 3/4 bằng:", options: ["15/20", "12/20", "16/20", "14/20"], answer: 0, level: "easy" },
    { question: "Phân số 2/5 quy đồng về mẫu số 20 bằng phân số nào?", options: ["8/20", "10/20", "6/20", "12/20"], answer: 0, level: "easy" },
    { question: "Chuyển phân số 317/100 thành hỗn số ta được:", options: ["3 và 17/100", "1 và 217/100", "2 và 117/100", "31 và 7/100"], answer: 0, level: "easy" },
    { question: "Hỗn số 2 và 1/3 chuyển thành phân số là:", options: ["7/3", "5/3", "6/3", "2/3"], answer: 0, level: "easy" },
    { question: "Trong 4 bạn (Mai: 3/10h, Việt: 5/10h, Nam: 4/10h, Rô-bốt: 2/10h), bạn nào giải nhanh nhất?", options: ["Rô-bốt (2/10h)", "Mai", "Nam", "Việt"], answer: 0, level: "easy" },
    { question: "Trong 4 bạn trên, bạn nào giải chậm nhất?", options: ["Việt (5/10h)", "Rô-bốt", "Mai", "Nam"], answer: 0, level: "easy" },
    { question: "Chuyển phân số 25/4 thành hỗn số được:", options: ["6 và 1/4", "5 và 1/4", "6 và 3/4", "7 và 1/4"], answer: 0, level: "easy" },
    { question: "Phân số nào sau đây là phân số tối giản?", options: ["5/7", "15/21", "20/35", "72/120"], answer: 0, level: "easy" },
    { question: "Mẫu số chung nhỏ nhất của 3/4, 2/5 và 13/20 là:", options: ["20", "40", "10", "60"], answer: 0, level: "easy" },
    { question: "Hỗn số 1 và 4/9 có phần nguyên là mấy?", options: ["1", "4", "9", "5"], answer: 0, level: "easy" },
    { question: "Phân số 11/16 có tử số và mẫu số lần lượt là:", options: ["11 và 16", "16 và 11", "11 và 5", "5 và 16"], answer: 0, level: "easy" }
];

// 5. Global Handlers & State
window.lesson154State = {
    ans5: null
};

window.select154_5 = function(idx) {
    window.lesson154State.ans5 = idx;
    const btnIds = ['btn-154-5-A', 'btn-154-5-B', 'btn-154-5-C', 'btn-154-5-D'];
    btnIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) {
            if (i === idx) {
                el.className = "p-4 bg-emerald-600 text-white border-2 border-emerald-700 rounded-2xl text-xl md:text-2xl font-black text-left shadow-md";
            } else {
                el.className = "p-4 bg-white border-2 border-emerald-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-emerald-300 transition-all text-left";
            }
        }
    });
};

window.submitEx154_1 = function () {
    const a1num = document.getElementById('ans-154-1a1-num')?.value.trim();
    const a1den = document.getElementById('ans-154-1a1-den')?.value.trim();
    const a2num = document.getElementById('ans-154-1a2-num')?.value.trim();
    const a2den = document.getElementById('ans-154-1a2-den')?.value.trim();

    const b1wh = document.getElementById('ans-154-1b1-wh')?.value.trim();
    const b1num = document.getElementById('ans-154-1b1-num')?.value.trim();
    const b1den = document.getElementById('ans-154-1b1-den')?.value.trim();

    const b2wh = document.getElementById('ans-154-1b2-wh')?.value.trim();
    const b2num = document.getElementById('ans-154-1b2-num')?.value.trim();
    const b2den = document.getElementById('ans-154-1b2-den')?.value.trim();

    if (!a1num || !a1den || !a2num || !a2den || !b1wh || !b1num || !b1den || !b2wh || !b2num || !b2den) {
        alert("Em hãy điền đầy đủ cả tử số, mẫu số và phần nguyên cho câu a và b!");
        return;
    }

    const ca1 = (parseInt(a1num) === 11 && parseInt(a1den) === 16);
    const ca2 = (parseInt(a2num) === 7 && parseInt(a2den) === 16);

    const cb1 = (parseInt(b1wh) === 2 && parseInt(b1num) === 1 && parseInt(b1den) === 3);
    const cb2 = (parseInt(b2wh) === 1 && parseInt(b2num) === 4 && parseInt(b2den) === 9);

    const correctCount = (ca1 ? 1 : 0) + (ca2 ? 1 : 0) + (cb1 ? 1 : 0) + (cb2 ? 1 : 0);
    const isCorrect = (correctCount === 4);
    const score = Math.round((correctCount / 4) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) H1: 11/16 ; H2: 7/16 -- b) H1: 2 và 1/3 ; H2: 1 và 4/9",
        `a) ${a1num}/${a1den}, ${a2num}/${a2den} -- b) ${b1wh} ${b1num}/${b1den}, ${b2wh} ${b2num}/${b2den}`,
        "Em hãy đếm kỹ số ô được tô màu so với tổng số ô để làm câu a và đếm các hình tô kín nguyên vẹn cùng phần lẻ phân số để làm câu b nhé!",
        `
        a) Phân số tô màu: Hình 1 (11/16) ; Hình 2 (7/16).<br>
        b) Hỗn số tô màu: Hình 1 (2 và 1/3) ; Hình 2 (1 và 4/9).<br>
        Em xác định phân số và hỗn số tô màu rất giỏi!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-154-1", 0, 4, correctCount);
};

window.submitEx154_2 = function () {
    const anum = document.getElementById('ans-154-2a-num')?.value.trim();
    const aden = document.getElementById('ans-154-2a-den')?.value.trim();
    const bnum = document.getElementById('ans-154-2b-num')?.value.trim();
    const bden = document.getElementById('ans-154-2b-den')?.value.trim();
    const cnum = document.getElementById('ans-154-2c-num')?.value.trim();
    const cden = document.getElementById('ans-154-2c-den')?.value.trim();

    if (!anum || !aden || !bnum || !bden || !cnum || !cden) {
        alert("Em hãy điền đầy đủ kết quả rút gọn cho cả 3 phân số!");
        return;
    }

    const ca = (parseInt(anum) === 5 && parseInt(aden) === 7);
    const cb = (parseInt(bnum) === 4 && parseInt(bden) === 7);
    const cc = (parseInt(cnum) === 3 && parseInt(cden) === 5);

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0) + (cc ? 1 : 0);
    const isCorrect = (correctCount === 3);
    const score = Math.round((correctCount / 3) * 100);

    window.showMathFeedback(
        isCorrect,
        "15/21 = 5/7 ; 20/35 = 4/7 ; 72/120 = 3/5",
        `${anum}/${aden} ; ${bnum}/${bden} ; ${cnum}/${cden}`,
        "Em hãy tìm ước chung lớn nhất của cả tử số và mẫu số rồi chia cả tử và mẫu cho ước số đó để rút gọn nhé!",
        `
        • 15/21 = (15 : 3) / (21 : 3) = 5/7.<br>
        • 20/35 = (20 : 5) / (35 : 5) = 4/7.<br>
        • 72/120 = (72 : 24) / (120 : 24) = 3/5.<br>
        Em rút gọn các phân số về phân số tối giản rất chính xác!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-154-2", 0, 3, correctCount);
};

window.submitEx154_3 = function () {
    const anum = document.getElementById('ans-154-3a-num')?.value.trim();
    const aden = document.getElementById('ans-154-3a-den')?.value.trim();

    const b1num = document.getElementById('ans-154-3b1-num')?.value.trim();
    const b1den = document.getElementById('ans-154-3b1-den')?.value.trim();

    const b2num = document.getElementById('ans-154-3b2-num')?.value.trim();
    const b2den = document.getElementById('ans-154-3b2-den')?.value.trim();

    if (!anum || !aden || !b1num || !b1den || !b2num || !b2den) {
        alert("Em hãy điền đầy đủ các ô phân số quy đồng ở câu a và b!");
        return;
    }

    const ca = (parseInt(anum) === 40 && parseInt(aden) === 48);
    const cb1 = (parseInt(b1num) === 15 && parseInt(b1den) === 20);
    const cb2 = (parseInt(b2num) === 8 && parseInt(b2den) === 20);

    const correctCount = (ca ? 1 : 0) + (cb1 ? 1 : 0) + (cb2 ? 1 : 0);
    const isCorrect = (correctCount === 3);
    const score = Math.round((correctCount / 3) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 5/6 = 40/48 -- b) 3/4 = 15/20 ; 2/5 = 8/20",
        `a) ${anum}/${aden} -- b) ${b1num}/${b1den}, ${b2num}/${b2den}`,
        "Em hãy chọn mẫu số chung bé nhất chia hết cho các mẫu số (48 ở câu a, 20 ở câu b) rồi nhân cả tử và mẫu với thừa số phụ tương ứng nhé!",
        `
        a) Mẫu số chung 48: 5/6 = (5 × 8) / (6 × 8) = 40/48, giữ nguyên 37/48.<br>
        b) Mẫu số chung 20: 3/4 = 15/20 ; 2/5 = 8/20, giữ nguyên 13/20.<br>
        Em quy đồng mẫu số các phân số rất thành thạo!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-154-3", 0, 3, correctCount);
};

window.submitEx154_4 = function () {
    const first = document.getElementById('ans-154-4a-first')?.value;
    const last = document.getElementById('ans-154-4a-last')?.value;
    const b = document.getElementById('ans-154-4b')?.value;

    if (!first || !last || !b) {
        alert("Em hãy chọn đầy đủ câu trả lời cho cả câu a và b!");
        return;
    }

    const cfirst = (first === 'Rô-bốt');
    const clast = (last === 'Việt');
    const cb = (b === 'Nam và Việt');

    const correctCount = (cfirst ? 1 : 0) + (clast ? 1 : 0) + (cb ? 1 : 0);
    const isCorrect = (correctCount === 3);
    const score = Math.round((correctCount / 3) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) Đầu tiên: Rô-bốt ; Cuối cùng: Việt -- b) Nam và Việt",
        `a) Đầu: ${first}, Cuối: ${last} -- b) ${b}`,
        "Em hãy quy đồng mẫu số thời gian của 4 bạn về mẫu số chung là 10 (Mai: 3/10, Việt: 5/10, Nam: 4/10, Rô-bốt: 2/10) rồi so sánh để trả lời nhé!",
        `
        Quy đồng mẫu số 10: Mai (3/10), Việt (5/10), Nam (4/10), Rô-bốt (2/10).<br>
        Vì 2/10 < 3/10 < 4/10 < 5/10 nên:<br>
        a) Rô-bốt hoàn thành đầu tiên (2/10h) ; Việt hoàn thành cuối cùng (5/10h).<br>
        b) Mai (3/10h) hoàn thành trước Nam (4/10h) và Việt (5/10h).<br>
        Em so sánh phân số ứng dụng vào thực tế xuất sắc!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-154-4", 0, 3, correctCount);
};

window.submitEx154_5 = function () {
    const ans = window.lesson154State.ans5;

    if (ans === null) {
        alert("Em hãy chọn một đáp án trắc nghiệm!");
        return;
    }

    const isCorrect = (ans === 2); // C: 3 và 17/100
    const choices = ['A. 1 và 217/100', 'B. 2 và 117/100', 'C. 3 và 17/100', 'D. 31 và 7/100'];

    window.showMathFeedback(
        isCorrect,
        "C. 3 và 17/100",
        `${choices[ans]}`,
        "Em hãy thực hiện phép chia 317 : 100 để tìm thương (phần nguyên) và số dư (tử số của phần phân số) nhé!",
        `
        Ta có: 317 : 100 = 3 dư 17.<br>
        Do đó phân số 317/100 chuyển thành hỗn số 3 và 17/100 -> Chọn C.<br>
        Em chuyển phân số thập phân thành hỗn số chuẩn xác!
        `
    );

    window.submitMathLesson(metadata.title, isCorrect ? 100 : 0, "btn-submit-154-5", 0, 1, isCorrect ? 1 : 0);
};

// 6. Main Lesson Export
export const lesson154 = {
    topic: "Phân số",
    week: "31",
    period: "154",
    title: metadata.title || lessonInfo.title,
    desc: lessonInfo.description,
    content: lesson154Content,
    practice: lesson154Practice,
    quizPool: lesson154QuizPool,
    metadata,
    lessonInfo,
    onLoad: () => {
        console.log("Lesson 154 Loaded: Bài 68. Ôn tập số tự nhiên, phân số, số thập phân (tiết 2)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};

window.lesson154 = lesson154;
export default lesson154;
