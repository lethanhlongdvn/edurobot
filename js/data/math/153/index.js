/**
 * @file index.js
 * @description Standardized Lesson 153: Bài 68. Ôn tập số tự nhiên, phân số, số thập phân (tiết 1)
 * Targets: 100% SGK compliance (Trang 103-104), 5 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-153",
    period: "153",
    title: "Bài 68. Ôn tập số tự nhiên, phân số, số thập phân (tiết 1)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 68. ÔN TẬP SỐ TỰ NHIÊN, PHÂN SỐ, SỐ THẬP PHÂN (TIẾT 1)",
    description: "Học sinh ôn tập về cách đọc, viết, so sánh số tự nhiên, phân tích cấu tạo số và các tính chất của dãy số tự nhiên.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 103-104"
};

// 2. HTML Content (Khám phá / Lý thuyết - Trang 103-104)
const lesson153Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">🔢 ÔN TẬP SỐ TỰ NHIÊN (TIẾT 1)</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-lg md:text-xl">
                    <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-200 space-y-2">
                        <p class="font-black text-blue-800 text-xl md:text-2xl">🔢 Cấu tạo & Đọc số:</p>
                        <p class="text-slate-800">• Đọc, viết số tự nhiên theo các lớp.</p>
                        <p class="text-slate-800">• Giá trị chữ số tùy thuộc vào vị trí hàng.</p>
                    </div>
                    <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-200 space-y-2">
                        <p class="font-black text-teal-800 text-xl md:text-2xl">📈 Dãy số & Làm tròn:</p>
                        <p class="text-slate-800">• Số tự nhiên bé nhất là 0.</p>
                        <p class="text-slate-800">• Hai số liên tiếp hơn kém nhau 1 (số lẻ cách nhau 2).</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 5 Slide phụ - Trang 103-104)
const lesson153Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 103) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Phân tích số tiền điện tháng Hai của ba công ty</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Dưới đây là số tiền điện tháng Hai của ba công ty ở một tòa nhà văn phòng. Quan sát bảng số liệu và trả lời câu hỏi:</p>
                        </div>
                    </div>

                    <!-- Hình Bảng tiền điện SGK Trang 103 HÌNH TO RÕ NÉT -->
                    <div class="mb-8 text-center bg-blue-50/50 p-6 rounded-[2.5rem] border-2 border-blue-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/153/153-1-tien-dien.png" alt="Bảng tiền điện tháng 2" class="rounded-2xl w-full max-w-[650px] md:max-w-[750px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm space-y-3">
                            <p class="text-xl md:text-2xl font-black text-blue-900">a) Đọc số tiền điện tháng Hai của các công ty (điền cách đọc):</p>
                            <div class="space-y-3">
                                <div class="flex flex-col md:flex-row md:items-center gap-2 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• Công ty A (105 362 480 đồng):</span>
                                    <textarea id="ans-153-1aa" rows="2" class="w-full md:w-[350px] border-2 border-blue-600 rounded-xl px-4 py-1.5 text-xl font-bold text-blue-600 outline-none resize-none overflow-hidden" placeholder="Viết cách đọc..."></textarea>
                                </div>
                                <div class="flex flex-col md:flex-row md:items-center gap-2 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• Công ty B (83 965 724 đồng):</span>
                                    <textarea id="ans-153-1ab" rows="2" class="w-full md:w-[350px] border-2 border-blue-600 rounded-xl px-4 py-1.5 text-xl font-bold text-blue-600 outline-none resize-none overflow-hidden" placeholder="Viết cách đọc..."></textarea>
                                </div>
                                <div class="flex flex-col md:flex-row md:items-center gap-2 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• Công ty C (121 783 907 đồng):</span>
                                    <textarea id="ans-153-1ac" rows="2" class="w-full md:w-[350px] border-2 border-blue-600 rounded-xl px-4 py-1.5 text-xl font-bold text-blue-600 outline-none resize-none overflow-hidden" placeholder="Viết cách đọc..."></textarea>
                                </div>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm space-y-3">
                            <p class="text-xl md:text-2xl font-black text-blue-900">b) Nêu giá trị của chữ số 3 trong mỗi số tiền trên:</p>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div class="flex items-center gap-2 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>A (105 362 480):</span>
                                    <input type="text" id="ans-153-1ba" class="w-32 h-12 border-2 border-blue-600 rounded-xl text-center text-xl md:text-2xl font-black text-blue-600 outline-none" placeholder="300 000">
                                </div>
                                <div class="flex items-center gap-2 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>B (83 965 724):</span>
                                    <input type="text" id="ans-153-1bb" class="w-36 h-12 border-2 border-blue-600 rounded-xl text-center text-xl md:text-2xl font-black text-blue-600 outline-none" placeholder="3 000 000">
                                </div>
                                <div class="flex items-center gap-2 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>C (121 783 907):</span>
                                    <input type="text" id="ans-153-1bc" class="w-28 h-12 border-2 border-blue-600 rounded-xl text-center text-xl md:text-2xl font-black text-blue-600 outline-none" placeholder="3 000">
                                </div>
                            </div>
                        </div>

                        <!-- c -->
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm space-y-3">
                            <p class="text-xl md:text-2xl font-black text-blue-900">c) Làm tròn đến hàng nghìn số tiền điện tháng Hai của các công ty:</p>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div class="flex items-center gap-2 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>A:</span>
                                    <input type="text" id="ans-153-1ca" class="w-36 h-12 border-2 border-blue-600 rounded-xl text-center text-xl md:text-2xl font-black text-blue-600 outline-none" placeholder="105 362 000">
                                </div>
                                <div class="flex items-center gap-2 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>B:</span>
                                    <input type="text" id="ans-153-1cb" class="w-36 h-12 border-2 border-blue-600 rounded-xl text-center text-xl md:text-2xl font-black text-blue-600 outline-none" placeholder="83 966 000">
                                </div>
                                <div class="flex items-center gap-2 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>C:</span>
                                    <input type="text" id="ans-153-1cc" class="w-36 h-12 border-2 border-blue-600 rounded-xl text-center text-xl md:text-2xl font-black text-blue-600 outline-none" placeholder="121 784 000">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-153-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        a) Đọc số tiền:<br>
                        • 105 362 480 đồng: Một trăm lẻ năm triệu ba trăm sáu mươi hai nghìn bốn trăm tám mươi đồng.<br>
                        • 83 965 724 đồng: Tám mươi ba triệu chín trăm sáu mươi lăm nghìn bảy trăm hai mươi tư đồng.<br>
                        • 121 783 907 đồng: Một trăm hai mươi mốt triệu bảy trăm tám mươi ba nghìn chín trăm lẻ bảy đồng.<br>
                        b) Giá trị chữ số 3:<br>
                        • Ở Công ty A: 300 000 (ba trăm nghìn).<br>
                        • Ở Công ty B: 3 000 000 (ba triệu).<br>
                        • Ở Công ty C: 3 000 (ba nghìn).<br>
                        c) Làm tròn đến hàng nghìn:<br>
                        • A: 105 362 000 đồng.<br>
                        • B: 83 966 000 đồng.<br>
                        • C: 121 784 000 đồng.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-153-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-153-1" onclick="window.submitEx153_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 103) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Viết mỗi số thành tổng các hàng & Điền số thích hợp</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">a) Viết mỗi số thành tổng (theo mẫu): <b>81 063 = 80 000 + 1 000 + 60 + 3</b></p>
                        </div>
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 shadow-sm space-y-4">
                            <div class="space-y-3">
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 40 725 =</span>
                                    <input type="text" id="ans-153-2aa" class="w-full md:w-auto h-12 border-2 border-teal-600 rounded-xl px-4 text-xl md:text-2xl font-black text-teal-600 outline-none" placeholder="40 000 + 700 + 20 + 5">
                                </div>
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 507 689 =</span>
                                    <input type="text" id="ans-153-2ab" class="w-full md:w-auto h-12 border-2 border-teal-600 rounded-xl px-4 text-xl md:text-2xl font-black text-teal-600 outline-none" placeholder="500 000 + 7 000 + 600 + 80 + 9">
                                </div>
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• 2 640 530 =</span>
                                    <input type="text" id="ans-153-2ac" class="w-full md:w-auto h-12 border-2 border-teal-600 rounded-xl px-4 text-xl md:text-2xl font-black text-teal-600 outline-none" placeholder="2 000 000 + 600 000 + 40 000 + 500 + 30">
                                </div>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-teal-900">b) Điền số thích hợp vào ô trống [ ? ]:</p>
                            <div class="space-y-3">
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>50 000 + 7 000 + 300 +</span>
                                    <input type="number" id="ans-153-2b1" class="w-24 h-12 border-2 border-teal-600 rounded-xl text-center text-xl md:text-2xl font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    <span>+ 6 = 57 346</span>
                                </div>
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>800 000 + 40 000 +</span>
                                    <input type="number" id="ans-153-2b2" class="w-28 h-12 border-2 border-teal-600 rounded-xl text-center text-xl md:text-2xl font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    <span>+ 200 + 90 = 843 290</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-153-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        a) Phân tích các số thành tổng các hàng:<br>
                        • 40 725 = <b>40 000 + 700 + 20 + 5</b>.<br>
                        • 507 689 = <b>500 000 + 7 000 + 600 + 80 + 9</b>.<br>
                        • 2 640 530 = <b>2 000 000 + 600 000 + 40 000 + 500 + 30</b>.<br>
                        b) Số thích hợp điền vào [ ? ]:<br>
                        • 50 000 + 7 000 + 300 + <b>40</b> + 6 = 57 346.<br>
                        • 800 000 + 40 000 + <b>3 000</b> + 200 + 90 = 843 290.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-153-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-153-2" onclick="window.submitEx153_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 3 (Trang 103) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3. Chọn câu trả lời đúng (Bốn số liên tiếp)</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Quan sát các câu hỏi trắc nghiệm dưới đây và chọn phương án đúng:</p>
                        </div>
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 shadow-sm space-y-3">
                            <p class="text-xl md:text-2xl font-black text-sky-900">a) Bốn số nào dưới đây tạo thành bốn số tự nhiên liên tiếp?</p>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <button id="btn-153-3a-A" onclick="window.select153_3a(0)" class="p-4 bg-white border-2 border-sky-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-sky-300 transition-all text-left">A. 999; 1 000; 1 002; 1 003</button>
                                <button id="btn-153-3a-B" onclick="window.select153_3a(1)" class="p-4 bg-white border-2 border-sky-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-sky-300 transition-all text-left">B. 1 958; 1 959; 1 960; 1 961</button>
                                <button id="btn-153-3a-C" onclick="window.select153_3a(2)" class="p-4 bg-white border-2 border-sky-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-sky-300 transition-all text-left">C. 4 080; 4 081; 4 082; 4 084</button>
                                <button id="btn-153-3a-D" onclick="window.select153_3a(3)" class="p-4 bg-white border-2 border-sky-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-sky-300 transition-all text-left">D. 2 587; 2 589; 2 590; 2 591</button>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 shadow-sm space-y-3">
                            <p class="text-xl md:text-2xl font-black text-sky-900">b) Bốn số nào dưới đây tạo thành bốn số lẻ liên tiếp?</p>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <button id="btn-153-3b-A" onclick="window.select153_3b(0)" class="p-4 bg-white border-2 border-sky-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-sky-300 transition-all text-left">A. 5 643; 5 645; 5 647; 5 651</button>
                                <button id="btn-153-3b-B" onclick="window.select153_3b(1)" class="p-4 bg-white border-2 border-sky-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-sky-300 transition-all text-left">B. 8 009; 8 011; 8 015; 8 017</button>
                                <button id="btn-153-3b-C" onclick="window.select153_3b(2)" class="p-4 bg-white border-2 border-sky-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-sky-300 transition-all text-left">C. 7 497; 7 499; 7 501; 7 503</button>
                                <button id="btn-153-3b-D" onclick="window.select153_3b(3)" class="p-4 bg-white border-2 border-sky-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-sky-300 transition-all text-left">D. 6 525; 6 529; 6 531; 6 533</button>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-153-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        a) Bốn số tự nhiên liên tiếp hơn kém nhau 1 đơn vị: <b>1 958; 1 959; 1 960; 1 961</b> -> Chọn <b>B</b>.<br>
                        b) Bốn số lẻ liên tiếp hơn kém nhau 2 đơn vị: <b>7 497; 7 499; 7 501; 7 503</b> -> Chọn <b>C</b>.<br>
                        Đáp số: a) B ; b) C.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-153-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-153-3" onclick="window.submitEx153_3()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 4: Bài 4 (Trang 104) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-emerald-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">4</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-emerald-700 block">Bài 4. So sánh số dân năm 2021 của một số nước Đông Nam Á</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Số dân năm 2021: Việt Nam (98 500 000 người), In-đô-nê-xi-a (275 100 000 người), Xin-ga-po (5 700 000 người), Phi-líp-pin (110 200 000 người):</p>
                        </div>
                    </div>

                    <!-- Hình Số dân Đông Nam Á SGK Trang 104 HÌNH TO RÕ NÉT -->
                    <div class="mb-8 text-center bg-emerald-50/50 p-6 rounded-[2.5rem] border-2 border-emerald-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/153/153-4-dan-so.png" alt="Số dân một số nước Đông Nam Á năm 2021" class="rounded-2xl w-full max-w-[650px] md:max-w-[750px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-emerald-50 rounded-3xl border-2 border-emerald-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-emerald-900">a) Xác định nước có số dân ít nhất và nhiều nhất:</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div class="flex items-center gap-2 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• Nước có số dân ÍT NHẤT:</span>
                                    <select id="ans-153-4a-least" class="h-12 border-2 border-emerald-600 rounded-xl px-4 font-black text-emerald-600 outline-none bg-white">
                                        <option value="">-- Chọn --</option>
                                        <option value="Xin-ga-po">Xin-ga-po (5,7 Tr)</option>
                                        <option value="Việt Nam">Việt Nam (98,5 Tr)</option>
                                        <option value="Phi-líp-pin">Phi-líp-pin (110,2 Tr)</option>
                                        <option value="In-đô-nê-xi-a">In-đô-nê-xi-a (275,1 Tr)</option>
                                    </select>
                                </div>
                                <div class="flex items-center gap-2 text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• Nước có số dân NHIỀU NHẤT:</span>
                                    <select id="ans-153-4a-most" class="h-12 border-2 border-emerald-600 rounded-xl px-4 font-black text-emerald-600 outline-none bg-white">
                                        <option value="">-- Chọn --</option>
                                        <option value="In-đô-nê-xi-a">In-đô-nê-xi-a (275,1 Tr)</option>
                                        <option value="Phi-líp-pin">Phi-líp-pin (110,2 Tr)</option>
                                        <option value="Việt Nam">Việt Nam (98,5 Tr)</option>
                                        <option value="Xin-ga-po">Xin-ga-po (5,7 Tr)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-emerald-50 rounded-3xl border-2 border-emerald-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-emerald-900">b) Viết tên các nước theo thứ tự số dân từ nhiều nhất đến ít nhất:</p>
                            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                                <div class="flex flex-col gap-1 text-xl font-bold text-slate-800">
                                    <span>1. Nhiều nhất:</span>
                                    <select id="ans-153-4b-1" class="h-12 border-2 border-emerald-600 rounded-xl px-3 font-black text-emerald-600 outline-none bg-white">
                                        <option value="">-- Chọn --</option>
                                        <option value="In-đô-nê-xi-a">In-đô-nê-xi-a</option>
                                        <option value="Phi-líp-pin">Phi-líp-pin</option>
                                        <option value="Việt Nam">Việt Nam</option>
                                        <option value="Xin-ga-po">Xin-ga-po</option>
                                    </select>
                                </div>
                                <div class="flex flex-col gap-1 text-xl font-bold text-slate-800">
                                    <span>2. Thứ nhì:</span>
                                    <select id="ans-153-4b-2" class="h-12 border-2 border-emerald-600 rounded-xl px-3 font-black text-emerald-600 outline-none bg-white">
                                        <option value="">-- Chọn --</option>
                                        <option value="Phi-líp-pin">Phi-líp-pin</option>
                                        <option value="In-đô-nê-xi-a">In-đô-nê-xi-a</option>
                                        <option value="Việt Nam">Việt Nam</option>
                                        <option value="Xin-ga-po">Xin-ga-po</option>
                                    </select>
                                </div>
                                <div class="flex flex-col gap-1 text-xl font-bold text-slate-800">
                                    <span>3. Thứ ba:</span>
                                    <select id="ans-153-4b-3" class="h-12 border-2 border-emerald-600 rounded-xl px-3 font-black text-emerald-600 outline-none bg-white">
                                        <option value="">-- Chọn --</option>
                                        <option value="Việt Nam">Việt Nam</option>
                                        <option value="In-đô-nê-xi-a">In-đô-nê-xi-a</option>
                                        <option value="Phi-líp-pin">Phi-líp-pin</option>
                                        <option value="Xin-ga-po">Xin-ga-po</option>
                                    </select>
                                </div>
                                <div class="flex flex-col gap-1 text-xl font-bold text-slate-800">
                                    <span>4. Ít nhất:</span>
                                    <select id="ans-153-4b-4" class="h-12 border-2 border-emerald-600 rounded-xl px-3 font-black text-emerald-600 outline-none bg-white">
                                        <option value="">-- Chọn --</option>
                                        <option value="Xin-ga-po">Xin-ga-po</option>
                                        <option value="Việt Nam">Việt Nam</option>
                                        <option value="Phi-líp-pin">Phi-líp-pin</option>
                                        <option value="In-đô-nê-xi-a">In-đô-nê-xi-a</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-153-4" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 4:</p>
                        So sánh số dân các nước:<br>
                        • Xin-ga-po: 5 700 000 người (7 chữ số) -> <b>Ít nhất</b>.<br>
                        • Việt Nam: 98 500 000 người (8 chữ số).<br>
                        • Phi-líp-pin: 110 200 000 người (9 chữ số, hàng trăm triệu là 1).<br>
                        • In-đô-nê-xi-a: 275 100 000 người (9 chữ số, hàng trăm triệu là 2) -> <b>Nhiều nhất</b>.<br>
                        b) Sắp xếp từ nhiều nhất đến ít nhất: <b>In-đô-nê-xi-a, Phi-líp-pin, Việt Nam, Xin-ga-po</b>.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-153-4')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-153-4" onclick="window.submitEx153_4()" class="w-16 h-16 md:w-20 md:h-20 bg-emerald-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 5: Bài 5 (Trang 104) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-rose-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">5</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-rose-700 block">Bài 5. Điền số thích hợp vào chỗ chấm [ ? ]</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Vận dụng các đặc điểm của số tự nhiên để điền số chính xác:</p>
                        </div>
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <div class="p-6 bg-rose-50 rounded-3xl border-2 border-rose-100 shadow-sm space-y-4">
                            <div class="space-y-3">
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>a) Số tự nhiên bé nhất là =</span>
                                    <input type="number" id="ans-153-5a" class="w-20 h-12 border-2 border-rose-600 rounded-xl text-center text-xl md:text-2xl font-black text-rose-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                </div>
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>b) Số lớn nhất có bảy chữ số khác nhau là =</span>
                                    <input type="text" id="ans-153-5b" class="w-48 h-12 border-2 border-rose-600 rounded-xl text-center text-xl md:text-2xl font-black text-rose-600 outline-none" placeholder="?">
                                </div>
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>c) Số bé nhất có sáu chữ số khác nhau là =</span>
                                    <input type="text" id="ans-153-5c" class="w-44 h-12 border-2 border-rose-600 rounded-xl text-center text-xl md:text-2xl font-black text-rose-600 outline-none" placeholder="?">
                                </div>
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>d) Số liền sau của số lớn nhất có bảy chữ số là =</span>
                                    <input type="text" id="ans-153-5d" class="w-48 h-12 border-2 border-rose-600 rounded-xl text-center text-xl md:text-2xl font-black text-rose-600 outline-none" placeholder="?">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-153-5" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 5:</p>
                        a) Số tự nhiên bé nhất là <b>0</b>.<br>
                        b) Số lớn nhất có 7 chữ số khác nhau: Chọn từ 9 giảm dần: <b>9 876 543</b>.<br>
                        c) Số bé nhất có 6 chữ số khác nhau: Chọn 1 đầu tiên, rồi 0, 2, 3, 4, 5: <b>102 345</b>.<br>
                        d) Số lớn nhất có 7 chữ số là 9 999 999. Số liền sau là 9 999 999 + 1 = <b>10 000 000</b>.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-153-5')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-153-5" onclick="window.submitEx153_5()" class="w-16 h-16 md:w-20 md:h-20 bg-rose-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson153QuizPool = [
    { question: "Số tự nhiên bé nhất là số nào?", options: ["0", "1", "10", "Không có"], answer: 0, level: "easy" },
    { question: "Có bao nhiêu chữ số dùng để viết các số tự nhiên?", options: ["10 chữ số (từ 0 đến 9)", "9 chữ số", "100 chữ số", "Vô số"], answer: 0, level: "easy" },
    { question: "Giá trị của chữ số 3 trong số 105 362 480 là bao nhiêu?", options: ["300 000", "30 000", "3 000 000", "3 000"], answer: 0, level: "easy" },
    { question: "Làm tròn số 83 965 724 đến hàng nghìn ta được số nào?", options: ["83 966 000", "83 965 000", "84 000 000", "83 960 000"], answer: 0, level: "easy" },
    { question: "Bốn số tự nhiên liên tiếp hơn kém nhau bao nhiêu đơn vị?", options: ["1 đơn vị", "2 đơn vị", "10 đơn vị", "0 đơn vị"], answer: 0, level: "easy" },
    { question: "Bốn số lẻ liên tiếp hơn kém nhau bao nhiêu đơn vị?", options: ["2 đơn vị", "1 đơn vị", "3 đơn vị", "5 đơn vị"], answer: 0, level: "easy" },
    { question: "Dãy số nào sau đây là 4 số tự nhiên liên tiếp?", options: ["1 958; 1 959; 1 960; 1 961", "999; 1 000; 1 002; 1 003", "4 080; 4 081; 4 082; 4 084", "2 587; 2 589; 2 590; 2 591"], answer: 0, level: "easy" },
    { question: "Số lớn nhất có 7 chữ số khác nhau là số nào?", options: ["9 876 543", "9 999 999", "7 654 321", "9 876 540"], answer: 0, level: "easy" },
    { question: "Số bé nhất có 6 chữ số khác nhau là số nào?", options: ["102 345", "100 000", "123 456", "102 344"], answer: 0, level: "easy" },
    { question: "Số liền sau của số lớn nhất có 7 chữ số (9 999 999) là số nào?", options: ["10 000 000", "100 000 000", "9 999 998", "9 999 990"], answer: 0, level: "easy" },
    { question: "Nước nào có dân số đông nhất trong 4 nước: Việt Nam, In-đô-nê-xi-a, Phi-líp-pin, Xin-ga-po năm 2021?", options: ["In-đô-nê-xi-a (275,1 triệu)", "Phi-líp-pin", "Việt Nam", "Xin-ga-po"], answer: 0, level: "easy" },
    { question: "Nước nào có dân số ít nhất trong 4 nước trên năm 2021?", options: ["Xin-ga-po (5,7 triệu)", "Việt Nam", "Phi-líp-pin", "In-đô-nê-xi-a"], answer: 0, level: "easy" },
    { question: "Trong số 507 689, phân tích thành tổng: 500 000 + 7 000 + 600 + 80 + ?. Số ? là:", options: ["9", "90", "900", "9000"], answer: 0, level: "easy" },
    { question: "Trong số 2 640 530, chữ số 6 nằm ở hàng nào?", options: ["Hàng trăm nghìn", "Hàng triệu", "Hàng chục nghìn", "Hàng nghìn"], answer: 0, level: "easy" },
    { question: "Số lẻ bé nhất có 3 chữ số là số nào?", options: ["101", "100", "103", "111"], answer: 0, level: "easy" }
];

// 5. Global Handlers & State
window.lesson153State = {
    ans3a: null,
    ans3b: null
};

window.select153_3a = function(idx) {
    window.lesson153State.ans3a = idx;
    const btnIds = ['btn-153-3a-A', 'btn-153-3a-B', 'btn-153-3a-C', 'btn-153-3a-D'];
    btnIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) {
            if (i === idx) {
                el.className = "p-4 bg-sky-600 text-white border-2 border-sky-700 rounded-2xl text-xl md:text-2xl font-black text-left shadow-md";
            } else {
                el.className = "p-4 bg-white border-2 border-sky-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-sky-300 transition-all text-left";
            }
        }
    });
};

window.select153_3b = function(idx) {
    window.lesson153State.ans3b = idx;
    const btnIds = ['btn-153-3b-A', 'btn-153-3b-B', 'btn-153-3b-C', 'btn-153-3b-D'];
    btnIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) {
            if (i === idx) {
                el.className = "p-4 bg-sky-600 text-white border-2 border-sky-700 rounded-2xl text-xl md:text-2xl font-black text-left shadow-md";
            } else {
                el.className = "p-4 bg-white border-2 border-sky-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-sky-300 transition-all text-left";
            }
        }
    });
};

window.submitEx153_1 = function () {
    const aa = document.getElementById('ans-153-1aa')?.value.trim();
    const ab = document.getElementById('ans-153-1ab')?.value.trim();
    const ac = document.getElementById('ans-153-1ac')?.value.trim();

    const ba = document.getElementById('ans-153-1ba')?.value.trim().replace(/[\s\.]/g, '');
    const bb = document.getElementById('ans-153-1bb')?.value.trim().replace(/[\s\.]/g, '');
    const bc = document.getElementById('ans-153-1bc')?.value.trim().replace(/[\s\.]/g, '');

    const ca = document.getElementById('ans-153-1ca')?.value.trim().replace(/[\s\.]/g, '');
    const cb = document.getElementById('ans-153-1cb')?.value.trim().replace(/[\s\.]/g, '');
    const cc = document.getElementById('ans-153-1cc')?.value.trim().replace(/[\s\.]/g, '');

    if (!aa || !ab || !ac || !ba || !bb || !bc || !ca || !cb || !cc) {
        alert("Em hãy điền đầy đủ câu trả lời cho cả 3 mục a, b, c!");
        return;
    }

    const cba = (ba === '300000');
    const cbb = (bb === '3000000');
    const cbc = (bc === '3000');

    const cca = (ca === '105362000');
    const ccb = (cb === '83966000');
    const ccc = (cc === '121784000');

    const correctCount = (aa ? 1 : 0) + (ab ? 1 : 0) + (ac ? 1 : 0) + (cba ? 1 : 0) + (cbb ? 1 : 0) + (cbc ? 1 : 0) + (cca ? 1 : 0) + (ccb ? 1 : 0) + (ccc ? 1 : 0);
    const isCorrect = (correctCount === 9);
    const score = Math.round((correctCount / 9) * 100);

    window.showMathFeedback(
        isCorrect,
        "b) 300 000 ; 3 000 000 ; 3 000 -- c) 105 362 000 ; 83 966 000 ; 121 784 000",
        `b) ${ba}, ${bb}, ${bc} -- c) ${ca}, ${cb}, ${cc}`,
        "Em hãy xác định vị trí của chữ số 3 thuộc hàng nào để tìm giá trị của nó, đồng thời xem xét chữ số hàng trăm để thực hiện quy tắc làm tròn đến hàng nghìn nhé!",
        `
        a) Đọc số tiền điện chính xác.<br>
        b) Giá trị chữ số 3: A (300 000) ; B (3 000 000) ; C (3 000).<br>
        c) Làm tròn đến hàng nghìn: A (105 362 000) ; B (83 966 000) ; C (121 784 000).<br>
        Em làm bài phân tích cấu tạo số và làm tròn số rất xuất sắc!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-153-1", 0, 9, correctCount);
};

window.submitEx153_2 = function () {
    const aa = document.getElementById('ans-153-2aa')?.value.trim().replace(/\s/g, '');
    const ab = document.getElementById('ans-153-2ab')?.value.trim().replace(/\s/g, '');
    const ac = document.getElementById('ans-153-2ac')?.value.trim().replace(/\s/g, '');

    const b1 = document.getElementById('ans-153-2b1')?.value.trim().replace(/\s/g, '');
    const b2 = document.getElementById('ans-153-2b2')?.value.trim().replace(/\s/g, '');

    if (!aa || !ab || !ac || !b1 || !b2) {
        alert("Em hãy điền đầy đủ tổng câu a và số thích hợp ở câu b!");
        return;
    }

    const caa = (aa === '40000+700+20+5');
    const cab = (ab === '500000+7000+600+80+9');
    const cac = (ac === '2000000+600000+40000+500+30');

    const cb1 = (parseInt(b1) === 40);
    const cb2 = (parseInt(b2) === 3000);

    const correctCount = (caa ? 1 : 0) + (cab ? 1 : 0) + (cac ? 1 : 0) + (cb1 ? 1 : 0) + (cb2 ? 1 : 0);
    const isCorrect = (correctCount === 5);
    const score = Math.round((correctCount / 5) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 40 000 + 700 + 20 + 5 ; 500 000 + 7 000 + 600 + 80 + 9 ; 2 000 000 + 600 000 + 40 000 + 500 + 30 -- b) 40 ; 3 000",
        `b1) ${b1} ; b2) ${b2}`,
        "Em hãy phân tích các chữ số theo từng hàng (hàng triệu, trăm nghìn, chục nghìn, nghìn, trăm, chục, đơn vị) để điền số thích hợp nhé!",
        `
        a) Phân tích số thành tổng các hàng:<br>
        • 40 725 = 40 000 + 700 + 20 + 5.<br>
        • 507 689 = 500 000 + 7 000 + 600 + 80 + 9.<br>
        • 2 640 530 = 2 000 000 + 600 000 + 40 000 + 500 + 30.<br>
        b) Số thích hợp: b1 (40) ; b2 (3 000).<br>
        Em phân tích tổng các hàng rất chính xác!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-153-2", 0, 5, correctCount);
};

window.submitEx153_3 = function () {
    const a = window.lesson153State.ans3a;
    const b = window.lesson153State.ans3b;

    if (a === null || b === null) {
        alert("Em hãy chọn đầy đủ đáp án trắc nghiệm cho cả câu a và câu b!");
        return;
    }

    const ca = (a === 1); // B: 1 958; 1 959; 1 960; 1 961
    const cb = (b === 2); // C: 7 497; 7 499; 7 501; 7 503

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0);
    const isCorrect = (correctCount === 2);
    const score = Math.round((correctCount / 2) * 100);

    const choicesA = ['A. 999; 1 000; 1 002; 1 003', 'B. 1 958; 1 959; 1 960; 1 961', 'C. 4 080; 4 081; 4 082; 4 084', 'D. 2 587; 2 589; 2 590; 2 591'];
    const choicesB = ['A. 5 643; 5 645; 5 647; 5 651', 'B. 8 009; 8 011; 8 015; 8 017', 'C. 7 497; 7 499; 7 501; 7 503', 'D. 6 525; 6 529; 6 531; 6 533'];

    window.showMathFeedback(
        isCorrect,
        "a) B. 1 958; 1 959; 1 960; 1 961 ; b) C. 7 497; 7 499; 7 501; 7 503",
        `a) ${choicesA[a]} ; b) ${choicesB[b]}`,
        "Em hãy nhớ: Bốn số tự nhiên liên tiếp hơn kém nhau 1 đơn vị, bốn số lẻ liên tiếp hơn kém nhau 2 đơn vị để chọn đáp án đúng nhé!",
        `
        a) Bốn số tự nhiên liên tiếp: 1 958; 1 959; 1 960; 1 961 -> Đáp án B.<br>
        b) Bốn số lẻ liên tiếp: 7 497; 7 499; 7 501; 7 503 -> Đáp án C.<br>
        Đáp số: a) B ; b) C.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-153-3", 0, 2, correctCount);
};

window.submitEx153_4 = function () {
    const least = document.getElementById('ans-153-4a-least')?.value;
    const most = document.getElementById('ans-153-4a-most')?.value;

    const b1 = document.getElementById('ans-153-4b-1')?.value;
    const b2 = document.getElementById('ans-153-4b-2')?.value;
    const b3 = document.getElementById('ans-153-4b-3')?.value;
    const b4 = document.getElementById('ans-153-4b-4')?.value;

    if (!least || !most || !b1 || !b2 || !b3 || !b4) {
        alert("Em hãy chọn đầy đủ thông tin cho cả câu a và b!");
        return;
    }

    const cleast = (least === 'Xin-ga-po');
    const cmost = (most === 'In-đô-nê-xi-a');

    const cb1 = (b1 === 'In-đô-nê-xi-a');
    const cb2 = (b2 === 'Phi-líp-pin');
    const cb3 = (b3 === 'Việt Nam');
    const cb4 = (b4 === 'Xin-ga-po');

    const correctCount = (cleast ? 1 : 0) + (cmost ? 1 : 0) + (cb1 ? 1 : 0) + (cb2 ? 1 : 0) + (cb3 ? 1 : 0) + (cb4 ? 1 : 0);
    const isCorrect = (correctCount === 6);
    const score = Math.round((correctCount / 6) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) Ít nhất: Xin-ga-po ; Nhiều nhất: In-đô-nê-xi-a -- b) In-đô-nê-xi-a, Phi-líp-pin, Việt Nam, Xin-ga-po",
        `a) Ít: ${least}, Nhiều: ${most} -- b) 1.${b1}, 2.${b2}, 3.${b3}, 4.${b4}`,
        "Em hãy đếm số chữ số của từng số dân (số dân có 9 chữ số > 8 chữ số > 7 chữ số) để so sánh và xếp thứ tự từ nhiều nhất đến ít nhất nhé!",
        `
        a) Ít nhất: Xin-ga-po (5 700 000 người) ; Nhiều nhất: In-đô-nê-xi-a (275 100 000 người).<br>
        b) Thứ tự từ nhiều đến ít: In-đô-nê-xi-a, Phi-líp-pin, Việt Nam, Xin-ga-po.<br>
        Em so sánh và sắp xếp dân số các nước rất giỏi!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-153-4", 0, 6, correctCount);
};

window.submitEx153_5 = function () {
    const a = document.getElementById('ans-153-5a')?.value.trim();
    const b = document.getElementById('ans-153-5b')?.value.trim().replace(/[\s\.]/g, '');
    const c = document.getElementById('ans-153-5c')?.value.trim().replace(/[\s\.]/g, '');
    const d = document.getElementById('ans-153-5d')?.value.trim().replace(/[\s\.]/g, '');

    if (!a || !b || !c || !d) {
        alert("Em hãy điền đầy đủ câu trả lời cho cả 4 câu a, b, c, d!");
        return;
    }

    const ca = (parseInt(a) === 0);
    const cb = (b === '9876543');
    const cc = (c === '102345');
    const cd = (d === '10000000');

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0) + (cc ? 1 : 0) + (cd ? 1 : 0);
    const isCorrect = (correctCount === 4);
    const score = Math.round((correctCount / 4) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 0 ; b) 9 876 543 ; c) 102 345 ; d) 10 000 000",
        `a) ${a} ; b) ${b} ; c) ${c} ; d) ${d}`,
        "Em hãy suy luận dựa trên cấu tạo số: số tự nhiên nhỏ nhất, sắp xếp các chữ số từ lớn đến bé hoặc từ bé đến lớn để tạo số có các chữ số khác nhau nhé!",
        `
        a) Số tự nhiên bé nhất là: 0.<br>
        b) Số lớn nhất có 7 chữ số khác nhau: 9 876 543.<br>
        c) Số bé nhất có 6 chữ số khác nhau: 102 345.<br>
        d) Số liền sau của 9 999 999 là: 10 000 000.<br>
        Em suy luận đặc điểm số tự nhiên cực kỳ xuất sắc!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-153-5", 0, 4, correctCount);
};

// 6. Main Lesson Export
export const lesson153 = {
    topic: "Số tự nhiên",
    week: "31",
    period: "153",
    title: metadata.title || lessonInfo.title,
    desc: lessonInfo.description,
    content: lesson153Content,
    practice: lesson153Practice,
    quizPool: lesson153QuizPool,
    metadata,
    lessonInfo,
    onLoad: () => {
        console.log("Lesson 153 Loaded: Bài 68. Ôn tập số tự nhiên, phân số, số thập phân (tiết 1)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};

window.lesson153 = lesson153;
export default lesson153;
