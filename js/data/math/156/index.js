/**
 * @file index.js
 * @description Standardized Lesson 156: Bài 69. Ôn tập các phép tính với số tự nhiên, phân số, số thập phân (Tiết 1)
 * Targets: 100% SGK compliance (Trang 107), 4 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-156",
    period: "156",
    title: "Bài 69. Ôn tập các phép tính với số tự nhiên, phân số, số thập phân (Tiết 1)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 69. ÔN TẬP CÁC PHÉP TÍNH VỚI SỐ TỰ NHIÊN, PHÂN SỐ, SỐ THẬP PHÂN (TIẾT 1)",
    description: "Học sinh ôn tập về phép cộng, phép trừ số tự nhiên, phân số, số thập phân; tính chất giao hoán, kết hợp và tính bằng cách thuận tiện.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 107"
};

// 2. HTML Content (Khám phá / Lý thuyết - Trang 107)
const lesson156Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">➕ ➖ ÔN TẬP PHÉP CỘNG, PHÉP TRỪ (TIẾT 1)</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-lg md:text-xl">
                    <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-200 space-y-2">
                        <p class="font-black text-blue-800 text-xl md:text-2xl">✨ Tính chất phép cộng:</p>
                        <p class="text-slate-800">• Giao hoán: a + b = b + a.</p>
                        <p class="text-slate-800">• Kết hợp: (a + b) + c = a + (b + c).</p>
                        <p class="text-slate-800">• Cộng với 0: a + 0 = 0 + a = a.</p>
                    </div>
                    <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-200 space-y-2">
                        <p class="font-black text-teal-800 text-xl md:text-2xl">⚡ Tính chất phép trừ:</p>
                        <p class="text-slate-800">• Trừ đi 0: a - 0 = a.</p>
                        <p class="text-slate-800">• Trừ chính nó: a - a = 0.</p>
                        <p class="text-slate-800">• Trừ một tổng: a - (b + c) = a - b - c.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 4 Slide phụ - Trang 107)
const lesson156Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 107) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Tính</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Thực hiện các phép tính cộng, trừ số tự nhiên, số thập phân và phân số:</p>
                        </div>
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-blue-900">a) Số tự nhiên:</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 536 817 + 82 579 =</span>
                                    <input type="text" id="ans-156-1a" class="w-36 h-12 border-2 border-blue-600 rounded-xl text-center font-black text-blue-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="619 396">
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 981 759 - 645 267 =</span>
                                    <input type="text" id="ans-156-1b" class="w-36 h-12 border-2 border-blue-600 rounded-xl text-center font-black text-blue-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="336 492">
                                </div>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-blue-900">b) Số thập phân:</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 64,38 + 93,46 =</span>
                                    <input type="text" id="ans-156-1c" class="w-32 h-12 border-2 border-blue-600 rounded-xl text-center font-black text-blue-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="157,84">
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 86,09 - 54,3 =</span>
                                    <input type="text" id="ans-156-1d" class="w-32 h-12 border-2 border-blue-600 rounded-xl text-center font-black text-blue-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="31,79">
                                </div>
                            </div>
                        </div>

                        <!-- c -->
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-blue-900">c) Phân số:</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 4/7 + 3/5 =</span>
                                    <div class="flex items-center gap-1 text-xl md:text-3xl font-black text-blue-600">
                                        <input type="number" id="ans-156-1e-num" class="w-16 h-12 border-2 border-blue-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="41">
                                        <span>/</span>
                                        <input type="number" id="ans-156-1e-den" class="w-16 h-12 border-2 border-blue-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="35">
                                    </div>
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 10/9 - 5/6 =</span>
                                    <div class="flex items-center gap-1 text-xl md:text-3xl font-black text-blue-600">
                                        <input type="number" id="ans-156-1f-num" class="w-16 h-12 border-2 border-blue-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="5">
                                        <span>/</span>
                                        <input type="number" id="ans-156-1f-den" class="w-16 h-12 border-2 border-blue-600 rounded-xl text-center outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="18">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-156-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        a) 536 817 + 82 579 = <b>619 396</b> ; 981 759 - 645 267 = <b>336 492</b>.<br>
                        b) 64,38 + 93,46 = <b>157,84</b> ; 86,09 - 54,3 = <b>31,79</b>.<br>
                        c) 4/7 + 3/5 = 20/35 + 21/35 = <b>41/35</b> ; 10/9 - 5/6 = 20/18 - 15/18 = <b>5/18</b> (hoặc 15/54).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-156-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-156-1" onclick="window.submitEx156_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 107) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Tìm số hoặc chữ thích hợp với dấu "?"</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Vận dụng các tính chất của phép cộng và phép trừ để điền số hoặc chữ thích hợp:</p>
                        </div>
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-teal-900">a) Phép tính với số 0 và chính nó:</p>
                            <div class="space-y-3 text-xl md:text-2xl font-bold text-slate-800">
                                <div class="flex items-center gap-2">
                                    <span>a +</span>
                                    <input type="text" id="ans-156-2a1" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="0">
                                    <span>= a =</span>
                                    <input type="text" id="ans-156-2a2" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="0">
                                    <span>+ a</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span>a -</span>
                                    <input type="text" id="ans-156-2a3" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="0">
                                    <span>= a</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span>a -</span>
                                    <input type="text" id="ans-156-2a4" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="a">
                                    <span>= 0</span>
                                </div>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-teal-900">b) Tính chất giao hoán và kết hợp:</p>
                            <div class="space-y-3 text-xl md:text-2xl font-bold text-slate-800">
                                <div class="flex items-center gap-2">
                                    <span>a + b =</span>
                                    <input type="text" id="ans-156-2b1" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="b">
                                    <span>+ a</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span>(a + b) + c = a + (b +</span>
                                    <input type="text" id="ans-156-2b2" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="c">
                                    <span>)</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span>(a + b) + c =</span>
                                    <input type="text" id="ans-156-2b3" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="a">
                                    <span>+ (b + c)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-156-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        a) a + <b>0</b> = a = <b>0</b> + a ; a - <b>0</b> = a ; a - <b>a</b> = 0.<br>
                        b) a + b = <b>b</b> + a ; (a + b) + c = a + (b + <b>c</b>) ; (a + b) + c = <b>a</b> + (b + c).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-156-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-156-2" onclick="window.submitEx156_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 3 (Trang 107) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3. Tính bằng cách thuận tiện</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Thực hiện các phép tính sau bằng cách thuận tiện nhất:</p>
                        </div>
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 shadow-sm space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>a) 275 + (725 + 486) =</span>
                                    <input type="text" id="ans-156-3a" class="w-32 h-12 border-2 border-sky-600 rounded-xl text-center font-black text-sky-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="1486">
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>b) (3,29 + 4,63) + 5,37 =</span>
                                    <input type="text" id="ans-156-3b" class="w-32 h-12 border-2 border-sky-600 rounded-xl text-center font-black text-sky-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="13,29">
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>c) 63,4 + 597 + 36,6 =</span>
                                    <input type="text" id="ans-156-3c" class="w-32 h-12 border-2 border-sky-600 rounded-xl text-center font-black text-sky-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="697">
                                </div>
                                <div class="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>d) 4/9 + 7/12 + 5/12 + 5/9 =</span>
                                    <input type="text" id="ans-156-3d" class="w-24 h-12 border-2 border-sky-600 rounded-xl text-center font-black text-sky-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="2">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-156-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        a) 275 + (725 + 486) = (275 + 725) + 486 = 1 000 + 486 = <b>1 486</b>.<br>
                        b) (3,29 + 4,63) + 5,37 = 3,29 + (4,63 + 5,37) = 3,29 + 10 = <b>13,29</b>.<br>
                        c) 63,4 + 597 + 36,6 = (63,4 + 36,6) + 597 = 100 + 597 = <b>697</b>.<br>
                        d) 4/9 + 7/12 + 5/12 + 5/9 = (4/9 + 5/9) + (7/12 + 5/12) = 9/9 + 12/12 = 1 + 1 = <b>2</b>.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-156-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-156-3" onclick="window.submitEx156_3()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 4: Bài 4 (Trang 107) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-rose-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">4</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-rose-700 block">Bài 4. Chiều dài cây gậy AB sau khi nối</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Rô-bốt nối hai cây gậy ngắn 0,8 m thành cây gậy AB, chỗ nối MN dài 0,15 m. Hỏi cây gậy AB dài bao nhiêu mét?</p>
                        </div>
                    </div>

                    <!-- Hình Rô-bốt nối gậy SGK Trang 107 HÌNH TO RÕ NÉT -->
                    <div class="mb-8 text-center bg-rose-50/50 p-6 rounded-[2.5rem] border-2 border-rose-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/156/156-4-gay-noi.png" alt="Rô-bốt nối hai cây gậy" class="rounded-2xl w-full max-w-[650px] md:max-w-[750px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <div class="p-6 bg-rose-50 rounded-3xl border-2 border-rose-100 shadow-sm space-y-4">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                <span>Chiều dài cây gậy AB =</span>
                                <input type="text" id="ans-156-4" class="w-32 h-12 border-2 border-rose-600 rounded-xl text-center font-black text-rose-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="1,45">
                                <span>m</span>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-156-4" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 4:</p>
                        Tổng chiều dài 2 cây gậy khi chưa chắp nối là:<br>
                        0,8 + 0,8 = 1,6 (m).<br>
                        Chiều dài cây gậy AB sau khi bị đè lên nhau đoạn MN là:<br>
                        1,6 - 0,15 = <b>1,45 (m)</b>.<br>
                        Đáp số: <b>1,45 m</b>.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-156-4')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-156-4" onclick="window.submitEx156_4()" class="w-16 h-16 md:w-20 md:h-20 bg-rose-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson156QuizPool = [
    { question: "Tính: 536 817 + 82 579 = ?", options: ["619 396", "618 396", "619 496", "609 396"], answer: 0, level: "easy" },
    { question: "Tính: 981 759 - 645 267 = ?", options: ["336 492", "336 592", "346 492", "335 492"], answer: 0, level: "easy" },
    { question: "Tính: 64,38 + 93,46 = ?", options: ["157,84", "157,74", "158,84", "157,86"], answer: 0, level: "easy" },
    { question: "Tính: 86,09 - 54,3 = ?", options: ["31,79", "31,69", "32,79", "31,89"], answer: 0, level: "easy" },
    { question: "Tính: 4/7 + 3/5 = ?", options: ["41/35", "7/12", "12/35", "35/41"], answer: 0, level: "easy" },
    { question: "Tính: 10/9 - 5/6 = ?", options: ["5/18", "5/3", "15/18", "5/54"], answer: 0, level: "easy" },
    { question: "Điền chữ/số thích hợp: a + 0 = ?", options: ["a", "0", "1", "2a"], answer: 0, level: "easy" },
    { question: "Điền chữ/số thích hợp: a - a = ?", options: ["0", "a", "1", "2a"], answer: 0, level: "easy" },
    { question: "Tính nhanh: 275 + (725 + 486) = ?", options: ["1 486", "1 476", "1 586", "1 386"], answer: 0, level: "easy" },
    { question: "Tính nhanh: (3,29 + 4,63) + 5,37 = ?", options: ["13,29", "12,29", "13,39", "14,29"], answer: 0, level: "easy" },
    { question: "Tính nhanh: 63,4 + 597 + 36,6 = ?", options: ["697", "597", "797", "687"], answer: 0, level: "easy" },
    { question: "Tính nhanh: 4/9 + 7/12 + 5/12 + 5/9 = ?", options: ["2", "1", "3", "4/3"], answer: 0, level: "easy" },
    { question: "Nối 2 cây gậy 0,8 m đè lên nhau 0,15 m thì cây gậy dài bao nhiêu mét?", options: ["1,45 m", "1,6 m", "1,35 m", "1,5m"], answer: 0, level: "easy" },
    { question: "Tính chất a + b = b + a gọi là tính chất gì của phép cộng?", options: ["Giao hoán", "Kết hợp", "Cộng với 0", "Phân phối"], answer: 0, level: "easy" },
    { question: "Tính chất (a + b) + c = a + (b + c) gọi là tính chất gì?", options: ["Kết hợp", "Giao hoán", "Cộng với 0", "Trừ một tổng"], answer: 0, level: "easy" }
];

// 5. Global Handlers & State
window.submitEx156_1 = function () {
    const a = document.getElementById('ans-156-1a')?.value.trim().replace(/\s/g, '');
    const b = document.getElementById('ans-156-1b')?.value.trim().replace(/\s/g, '');
    const c = document.getElementById('ans-156-1c')?.value.trim().replace('.', ',');
    const d = document.getElementById('ans-156-1d')?.value.trim().replace('.', ',');

    const enumVal = document.getElementById('ans-156-1e-num')?.value.trim();
    const edenVal = document.getElementById('ans-156-1e-den')?.value.trim();

    const fnumVal = document.getElementById('ans-156-1f-num')?.value.trim();
    const fdenVal = document.getElementById('ans-156-1f-den')?.value.trim();

    if (!a || !b || !c || !d || !enumVal || !edenVal || !fnumVal || !fdenVal) {
        alert("Em hãy điền đầy đủ kết quả cho cả 6 phép tính!");
        return;
    }

    const ca = (a === '619396');
    const cb = (b === '336492');
    const cc = (c === '157,84');
    const cd = (d === '31,79');

    const ce = (parseInt(enumVal) === 41 && parseInt(edenVal) === 35);
    const cf = ((parseInt(fnumVal) === 5 && parseInt(fdenVal) === 18) || (parseInt(fnumVal) === 15 && parseInt(fdenVal) === 54));

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0) + (cc ? 1 : 0) + (cd ? 1 : 0) + (ce ? 1 : 0) + (cf ? 1 : 0);
    const isCorrect = (correctCount === 6);
    const score = Math.round((correctCount / 6) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 619 396 ; 336 492 -- b) 157,84 ; 31,79 -- c) 41/35 ; 5/18",
        `a) ${a}, ${b} -- b) ${c}, ${d} -- c) ${enumVal}/${edenVal}, ${fnumVal}/${fdenVal}`,
        "Em hãy đặt tính rồi tính hoặc quy đồng mẫu số đối với phép cộng/trừ phân số nhé!",
        `
        a) 536 817 + 82 579 = 619 396 ; 981 759 - 645 267 = 336 492.<br>
        b) 64,38 + 93,46 = 157,84 ; 86,09 - 54,3 = 31,79.<br>
        c) 4/7 + 3/5 = 41/35 ; 10/9 - 5/6 = 5/18.<br>
        Em thực hiện các phép cộng, trừ rất giỏi!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-156-1", 0, 6, correctCount);
};

window.submitEx156_2 = function () {
    const a1 = document.getElementById('ans-156-2a1')?.value.trim().toLowerCase();
    const a2 = document.getElementById('ans-156-2a2')?.value.trim().toLowerCase();
    const a3 = document.getElementById('ans-156-2a3')?.value.trim().toLowerCase();
    const a4 = document.getElementById('ans-156-2a4')?.value.trim().toLowerCase();

    const b1 = document.getElementById('ans-156-2b1')?.value.trim().toLowerCase();
    const b2 = document.getElementById('ans-156-2b2')?.value.trim().toLowerCase();
    const b3 = document.getElementById('ans-156-2b3')?.value.trim().toLowerCase();

    if (!a1 || !a2 || !a3 || !a4 || !b1 || !b2 || !b3) {
        alert("Em hãy điền đầy đủ cả 7 vị trí thích hợp!");
        return;
    }

    const ca1 = (a1 === '0');
    const ca2 = (a2 === '0');
    const ca3 = (a3 === '0');
    const ca4 = (a4 === 'a');

    const cb1 = (b1 === 'b');
    const cb2 = (b2 === 'c');
    const cb3 = (b3 === 'a');

    const correctCount = (ca1 ? 1 : 0) + (ca2 ? 1 : 0) + (ca3 ? 1 : 0) + (ca4 ? 1 : 0) + (cb1 ? 1 : 0) + (cb2 ? 1 : 0) + (cb3 ? 1 : 0);
    const isCorrect = (correctCount === 7);
    const score = Math.round((correctCount / 7) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 0, 0, 0, a -- b) b, c, a",
        `a) ${a1}, ${a2}, ${a3}, ${a4} -- b) ${b1}, ${b2}, ${b3}`,
        "Em hãy nhớ các tính chất của phép cộng (giao hoán, kết hợp, cộng với 0) và phép trừ (trừ 0, hai số bằng nhau trừ nhau) nhé!",
        `
        a) a + 0 = a = 0 + a ; a - 0 = a ; a - a = 0.<br>
        b) a + b = b + a ; (a + b) + c = a + (b + c) ; (a + b) + c = a + (b + c).<br>
        Em nắm vững các tính chất cơ bản của phép tính tuyệt vời!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-156-2", 0, 7, correctCount);
};

window.submitEx156_3 = function () {
    const a = document.getElementById('ans-156-3a')?.value.trim().replace(/\s/g, '');
    const b = document.getElementById('ans-156-3b')?.value.trim().replace('.', ',');
    const c = document.getElementById('ans-156-3c')?.value.trim().replace(/\s/g, '');
    const d = document.getElementById('ans-156-3d')?.value.trim();

    if (!a || !b || !c || !d) {
        alert("Em hãy điền đầy đủ kết quả tính thuận tiện cho cả 4 câu!");
        return;
    }

    const ca = (a === '1486');
    const cb = (b === '13,29');
    const cc = (c === '697');
    const cd = (d === '2');

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0) + (cc ? 1 : 0) + (cd ? 1 : 0);
    const isCorrect = (correctCount === 4);
    const score = Math.round((correctCount / 4) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 1 486 ; b) 13,29 ; c) 697 ; d) 2",
        `a) ${a} ; b) ${b} ; c) ${c} ; d) ${d}`,
        "Em hãy nhóm các số có tổng là số tròn trăm, tròn nghìn, tròn đơn vị hoặc phân số cùng mẫu số với nhau để tính cho nhanh nhé!",
        `
        a) 275 + (725 + 486) = (275 + 725) + 486 = 1 000 + 486 = 1 486.<br>
        b) (3,29 + 4,63) + 5,37 = 3,29 + (4,63 + 5,37) = 3,29 + 10 = 13,29.<br>
        c) 63,4 + 597 + 36,6 = (63,4 + 36,6) + 597 = 100 + 597 = 697.<br>
        d) 4/9 + 7/12 + 5/12 + 5/9 = (4/9 + 5/9) + (7/12 + 5/12) = 1 + 1 = 2.<br>
        Em tính nhanh bằng cách thuận tiện rất thông minh!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-156-3", 0, 4, correctCount);
};

window.submitEx156_4 = function () {
    const val = document.getElementById('ans-156-4')?.value.trim().replace('.', ',');

    if (!val) {
        alert("Em hãy điền chiều dài cây gậy AB!");
        return;
    }

    const isCorrect = (val === '1,45');

    window.showMathFeedback(
        isCorrect,
        "1,45 m",
        `${val} m`,
        "Em hãy lấy tổng chiều dài của 2 cây gậy ngắn trừ đi phần MN bị chắp nối đè lên nhau nhé!",
        `
        Tổng chiều dài 2 cây gậy khi chưa nối: 0,8 + 0,8 = 1,6 (m).<br>
        Chiều dài cây gậy AB sau khi nối: 1,6 - 0,15 = 1,45 (m).<br>
        Em giải bài toán thực tế rất xuất sắc!
        `
    );

    window.submitMathLesson(metadata.title, isCorrect ? 100 : 0, "btn-submit-156-4", 0, 1, isCorrect ? 1 : 0);
};

// 6. Main Lesson Export
export const lesson156 = {
    topic: "Ôn tập các phép tính",
    week: "32",
    period: "156",
    title: metadata.title || lessonInfo.title,
    desc: lessonInfo.description,
    content: lesson156Content,
    practice: lesson156Practice,
    quizPool: lesson156QuizPool,
    metadata,
    lessonInfo,
    onLoad: () => {
        console.log("Lesson 156 Loaded: Bài 69. Ôn tập các phép tính với số tự nhiên, phân số, số thập phân (Tiết 1)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};

window.lesson156 = lesson156;
export default lesson156;
