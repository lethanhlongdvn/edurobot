/**
 * @file index.js
 * @description Standardized Lesson 152: Bài 67. Luyện tập chung (tiết 1)
 * Targets: 100% SGK compliance (Trang 100-102), 4 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-152",
    period: "152",
    title: "Bài 67. Luyện tập chung (tiết 1)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 67. LUYỆN TẬP CHUNG (TIẾT 1)",
    description: "Học sinh luyện tập đọc biểu đồ hình quạt tròn, kiểm đếm số liệu và xác định tỉ số lần lặp lại của một sự kiện.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 100-102"
};

// 2. HTML Content (Khám phá / Lý thuyết - Trang 100-102)
const lesson152Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">📊 LUYỆN TẬP CHUNG: BIỂU ĐỒ QUẠT & TỈ SỐ THỰC NGHIỆM</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-lg md:text-xl">
                    <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-200 space-y-2">
                        <p class="font-black text-blue-800 text-xl md:text-2xl">📊 Phân tích biểu đồ quạt:</p>
                        <p class="text-slate-800">• Toàn bộ hình tròn biểu thị 100%.</p>
                        <p class="text-slate-800">• Số lượng = Tổng số × Tỉ số phần trăm.</p>
                    </div>
                    <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-200 space-y-2">
                        <p class="font-black text-teal-800 text-xl md:text-2xl">🎲 Tỉ số xác suất thực nghiệm:</p>
                        <p class="text-slate-800">• Tỉ số = (Số lần lặp lại) / (Tổng số lần).</p>
                        <p class="text-slate-800">• Kiểm đếm chính xác bằng gạch sổ.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 4 Slide phụ - Trang 100-102)
const lesson152Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 100) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Biểu đồ tỉ số phần trăm các loại xe gửi trong bãi</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Biểu đồ dưới đây cho biết tỉ số phần trăm các loại xe đang gửi trong bãi đỗ xe. Quan sát biểu đồ và trả lời câu hỏi:</p>
                        </div>
                    </div>

                    <!-- Hình Biểu đồ bãi đỗ xe SGK Trang 100 HÌNH TO RÕ NÉT -->
                    <div class="mb-8 text-center bg-blue-50/50 p-6 rounded-[2.5rem] border-2 border-blue-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/152/152-1-bai-do-xe.png" alt="Biểu đồ bãi đỗ xe" class="rounded-2xl w-full max-w-[650px] md:max-w-[750px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm space-y-3">
                            <p class="text-xl md:text-2xl font-black text-blue-900">a) Trong bãi đỗ xe đó, loại xe nào có nhiều nhất?</p>
                            <div class="w-full">
                                <select id="ans-152-1a" class="w-full md:w-auto h-14 border-2 border-blue-600 rounded-2xl px-4 font-black text-blue-600 outline-none bg-white text-xl md:text-2xl">
                                    <option value="">-- Chọn loại xe --</option>
                                    <option value="Xe máy">Xe máy (75%)</option>
                                    <option value="Xe ô tô">Xe ô tô (10%)</option>
                                    <option value="Xe đạp">Xe đạp (15%)</option>
                                </select>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-blue-900 font-extrabold">b) Số xe ô tô chiếm =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-152-1b" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">% số xe gửi trong bãi</span>
                                </span>
                            </div>
                        </div>

                        <!-- c -->
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-blue-900 font-extrabold">c) Biết trong bãi có tất cả 300 xe. Số chiếc xe đạp là =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-152-1c" class="w-28 h-14 border-2 border-blue-600 rounded-2xl text-center text-xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">chiếc xe đạp</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-152-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        a) Xe máy có phần quạt rộng nhất (75%), nên là loại xe nhiều nhất.<br>
                        b) Số xe ô tô chiếm <b>10%</b> số xe gửi trong bãi.<br>
                        c) Số chiếc xe đạp hiện có trong bãi là: 300 × 15% = <b>45 chiếc xe đạp</b>.<br>
                        Đáp số: a) Xe máy ; b) 10% ; c) 45 chiếc xe đạp.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-152-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-152-1" onclick="window.submitEx152_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 100-101) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Kiểm đếm kết quả lấy tất của Rô-bốt trong tháng 4</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Mỗi buổi sáng tháng 4 (30 ngày), Rô-bốt lấy 2 chiếc tất từ tủ mà không nhìn. Kết quả kiểm đếm trong tháng 4:</p>
                        </div>
                    </div>

                    <!-- Bảng kiểm đếm tất Rô-bốt SGK -->
                    <div class="overflow-x-auto rounded-3xl border-2 border-teal-200 mb-6">
                        <table class="w-full border-collapse text-center font-black text-lg md:text-xl">
                            <thead>
                                <tr class="bg-teal-600 text-white">
                                    <th class="p-4 border-r border-teal-400">Khả năng</th>
                                    <th class="p-4">Số lần lặp lại (gạch kiểm đếm)</th>
                                </tr>
                            </thead>
                            <tbody class="bg-teal-50/40 text-slate-800 text-xl md:text-2xl">
                                <tr class="border-b border-teal-100">
                                    <td class="p-4 border-r border-teal-100 font-bold bg-teal-100/50">Lấy được 2 chiếc tất giống nhau</td>
                                    <td class="p-4 text-teal-700 font-black">7 lần (1 cụm 5 + 2 gạch)</td>
                                </tr>
                                <tr>
                                    <td class="p-4 border-r border-teal-100 font-bold bg-teal-100/50">Lấy được 2 chiếc tất khác nhau</td>
                                    <td class="p-4 text-teal-700 font-black">23 lần (4 cụm 5 + 3 gạch)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Hình Rô-bốt chọn tất SGK Trang 101 HÌNH TO RÕ NÉT -->
                    <div class="mb-8 text-center bg-teal-50/50 p-6 rounded-[2.5rem] border-2 border-teal-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/152/152-2-ro-bot-tat.png" alt="Rô-bốt chọn tất trong tủ" class="rounded-2xl w-full max-w-[650px] md:max-w-[750px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-teal-900 font-extrabold">Tỉ số mô tả khả năng "lấy được 2 chiếc tất khác nhau" trong tháng 4 (30 ngày) =</span>
                                <div class="flex items-center gap-2 text-xl md:text-3xl font-black text-teal-600">
                                    <input type="number" id="ans-152-2-num" class="w-20 h-14 border-2 border-teal-600 rounded-2xl text-center outline-none font-black text-teal-600" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="text-slate-400">/</span>
                                    <input type="number" id="ans-152-2-den" class="w-20 h-14 border-2 border-teal-600 rounded-2xl text-center outline-none font-black text-teal-600" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="30">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-152-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        • Số lần Rô-bốt lấy được 2 chiếc tất khác nhau là: 4 × 5 + 3 = <b>23 lần</b>.<br>
                        • Tổng số lần lấy tất trong tháng 4 là: <b>30 lần</b>.<br>
                        • Tỉ số mô tả khả năng lấy được 2 chiếc tất khác nhau là: <b>23/30</b>.<br>
                        Đáp số: 23/30.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-152-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-152-2" onclick="window.submitEx152_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 3 (Trang 101) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3. Thực hành lấy 2 chiếc tất từ 4 chiếc tất (2 đỏ, 2 vàng)</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">a) Cắt 4 chiếc tất (2 màu đỏ, 2 màu vàng). Nhắm mắt lấy 2 chiếc bất kì, quan sát màu, ghi lại kết quả rồi trả lại. Thực hiện 10 lần như vậy.</p>
                        </div>
                    </div>

                    <!-- Hình 4 chiếc tất SGK Trang 101 HÌNH TO RÕ NÉT -->
                    <div class="mb-8 text-center bg-sky-50/50 p-6 rounded-[2.5rem] border-2 border-sky-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/152/152-3-bon-chiec-tat.png" alt="4 chiếc tất đỏ và vàng" class="rounded-2xl w-full max-w-[650px] md:max-w-[750px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <!-- b -->
                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-sky-900 font-extrabold">b) Tỉ số mô tả khả năng "lấy được 2 chiếc tất cùng màu" trong 10 lần thực hiện =</span>
                                <div class="flex items-center gap-2 text-xl md:text-3xl font-black text-sky-600">
                                    <input type="number" id="ans-152-3b-num" class="w-20 h-12 border-2 border-sky-600 rounded-xl text-center outline-none font-black text-sky-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    <span class="text-slate-400">/</span>
                                    <input type="number" id="ans-152-3b-den" class="w-20 h-12 border-2 border-sky-600 rounded-xl text-center outline-none font-black text-sky-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="10" value="10">
                                </div>
                            </div>
                        </div>

                        <!-- c -->
                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-sky-900">c) Trả lời nhận định tính chắc chắn:</p>
                            <div class="space-y-3">
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• Lấy 2 chiếc bất kì có CHẮC CHẮN lấy được 2 chiếc cùng màu hay không? =</span>
                                    <select id="ans-152-3c1" class="h-14 border-2 border-sky-600 rounded-2xl px-4 font-black text-sky-600 outline-none bg-white">
                                        <option value="">-- Chọn --</option>
                                        <option value="Không chắc chắn">Không chắc chắn</option>
                                        <option value="Chắc chắn">Chắc chắn</option>
                                    </select>
                                </div>
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• Lấy 3 chiếc bất kì có CHẮC CHẮN lấy được 2 chiếc cùng màu hay không? =</span>
                                    <select id="ans-152-3c2" class="h-14 border-2 border-sky-600 rounded-2xl px-4 font-black text-sky-600 outline-none bg-white">
                                        <option value="">-- Chọn --</option>
                                        <option value="Chắc chắn">Chắc chắn</option>
                                        <option value="Không chắc chắn">Không chắc chắn</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-152-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        b) Tỉ số được viết bằng (Số lần lấy 2 tất cùng màu) / 10.<br>
                        c) <br>
                        – Lấy 2 chiếc: <b>Không chắc chắn</b> (vì có thể lấy phải 1 chiếc đỏ và 1 chiếc vàng).<br>
                        – Lấy 3 chiếc: <b>Chắc chắn</b> (vì chỉ có 2 màu tất nên 3 chiếc bắt buộc phải có ít nhất 2 chiếc cùng màu).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-152-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-152-3" onclick="window.submitEx152_3()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 4: Bài 4 (Trang 102) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-emerald-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">4</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-emerald-700 block">Bài 4. Chọn câu trả lời đúng (Thời gian hoạt động thứ Sáu của Rô-bốt)</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Biểu đồ quạt tròn cho biết tỉ số phần trăm thời gian dành cho các hoạt động trong ngày thứ Sáu hằng tuần của Rô-bốt. Quan sát và chọn đáp án đúng:</p>
                        </div>
                    </div>

                    <!-- Hình Biểu đồ & Rô-bốt ngủ SGK Trang 102 HÌNH TO RÕ NÉT -->
                    <div class="mb-8 text-center bg-emerald-50/50 p-6 rounded-[2.5rem] border-2 border-emerald-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/152/152-4-ro-bot-ngu.png" alt="Biểu đồ hoạt động và Rô-bốt ngủ" class="rounded-2xl w-full max-w-[650px] md:max-w-[750px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-emerald-50 rounded-3xl border-2 border-emerald-100 shadow-sm space-y-3">
                            <p class="text-xl md:text-2xl font-black text-emerald-900">a) Thời gian Rô-bốt dành để giải trí và thư giãn (1/8 ngày) chiếm khoảng:</p>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <button id="btn-152-4a-A" onclick="window.select152_4a(0)" class="p-4 bg-white border-2 border-emerald-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-emerald-300 transition-all text-left">A. 12,5% thời gian trong ngày</button>
                                <button id="btn-152-4a-B" onclick="window.select152_4a(1)" class="p-4 bg-white border-2 border-emerald-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-emerald-300 transition-all text-left">B. 25% thời gian trong ngày</button>
                                <button id="btn-152-4a-C" onclick="window.select152_4a(2)" class="p-4 bg-white border-2 border-emerald-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-emerald-300 transition-all text-left">C. 50% thời gian trong ngày</button>
                                <button id="btn-152-4a-D" onclick="window.select152_4a(3)" class="p-4 bg-white border-2 border-emerald-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-emerald-300 transition-all text-left">D. 60% thời gian trong ngày</button>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-emerald-50 rounded-3xl border-2 border-emerald-100 shadow-sm space-y-3">
                            <p class="text-xl md:text-2xl font-black text-emerald-900">b) Số giờ Rô-bốt dùng để ngủ (3/8 ngày = 24 × 3/8) là khoảng:</p>
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                <button id="btn-152-4b-A" onclick="window.select152_4b(0)" class="p-4 bg-white border-2 border-emerald-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-emerald-300 transition-all text-center">A. 3 giờ</button>
                                <button id="btn-152-4b-B" onclick="window.select152_4b(1)" class="p-4 bg-white border-2 border-emerald-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-emerald-300 transition-all text-center">B. 6 giờ</button>
                                <button id="btn-152-4b-C" onclick="window.select152_4b(2)" class="p-4 bg-white border-2 border-emerald-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-emerald-300 transition-all text-center">C. 9 giờ</button>
                                <button id="btn-152-4b-D" onclick="window.select152_4b(3)" class="p-4 bg-white border-2 border-emerald-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-emerald-300 transition-all text-center">D. 12 giờ</button>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-152-4" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 4:</p>
                        a) Giải trí và thư giãn chiếm 1/8 hình tròn = 100% : 8 = <b>12,5%</b> -> Đáp án <b>A</b>.<br>
                        b) Thời gian ngủ chiếm 3/8 ngày. Số giờ là: 24 × 3/8 = <b>9 giờ</b> -> Đáp án <b>C</b>.<br>
                        Đáp số: a) A. 12,5% ; b) C. 9 giờ.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-152-4')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-152-4" onclick="window.submitEx152_4()" class="w-16 h-16 md:w-20 md:h-20 bg-emerald-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson152QuizPool = [
    { question: "Biểu đồ hình quạt tròn dùng để làm gì?", options: ["So sánh các phần với tổng thể", "Chỉ đường đi", "Vẽ tranh minh họa", "Đo chiều dài"], answer: 0, level: "easy" },
    { question: "Tổng tỉ số phần trăm của các phần trong biểu đồ quạt luôn bằng bao nhiêu?", options: ["100%", "50%", "200%", "90%"], answer: 0, level: "easy" },
    { question: "Dựa vào Bài 1, loại xe nào có tỉ số phần trăm gửi nhiều nhất trong bãi?", options: ["Xe máy (75%)", "Xe ô tô (10%)", "Xe đạp (15%)", "Không xác định"], answer: 0, level: "easy" },
    { question: "Dựa vào Bài 1, loại xe nào có tỉ số phần trăm gửi ít nhất?", options: ["Xe ô tô (10%)", "Xe đạp (15%)", "Xe máy (75%)", "Không có"], answer: 0, level: "easy" },
    { question: "Biết bãi xe có 300 xe, xe đạp chiếm 15%. Số xe đạp là bao nhiêu chiếc?", options: ["45 chiếc", "30 chiếc", "50 chiếc", "60 chiếc"], answer: 0, level: "easy" },
    { question: "Tháng 4 có bao nhiêu ngày?", options: ["30 ngày", "31 ngày", "28 ngày", "29 ngày"], answer: 0, level: "easy" },
    { question: "Ở Bài 2, Rô-bốt lấy được 2 chiếc tất khác nhau 23 lần trong tháng 4. Tỉ số là:", options: ["23/30", "7/30", "30/23", "23/7"], answer: 0, level: "easy" },
    { question: "Ở Bài 2, Rô-bốt lấy được 2 chiếc tất giống nhau 7 lần trong tháng 4. Tỉ số là:", options: ["7/30", "23/30", "30/7", "7/23"], answer: 0, level: "easy" },
    { question: "Nếu chỉ có 2 màu tất, lấy 2 chiếc bất kì có chắc chắn cùng màu không?", options: ["Không chắc chắn", "Chắc chắn", "Luôn cùng màu", "Không thể xảy ra"], answer: 0, level: "easy" },
    { question: "Nếu chỉ có 2 màu tất, lấy 3 chiếc bất kì có chắc chắn lấy được 2 chiếc cùng màu không?", options: ["Chắc chắn", "Không chắc chắn", "Không bao giờ", "Tùy thuộc may mắn"], answer: 0, level: "easy" },
    { question: "Một ngày có bao nhiêu giờ?", options: ["24 giờ", "12 giờ", "60 giờ", "48 giờ"], answer: 0, level: "easy" },
    { question: "1/8 thời gian trong một ngày tương ứng với tỉ số phần trăm bao nhiêu?", options: ["12,5%", "25%", "50%", "37,5%"], answer: 0, level: "easy" },
    { question: "Rô-bốt ngủ 3/8 thời gian của một ngày (24 giờ). Số giờ ngủ là:", options: ["9 giờ", "6 giờ", "12 giờ", "3 giờ"], answer: 0, level: "easy" },
    { question: "Hoạt động nào chiếm 25% thời gian trong ngày của Rô-bốt ở Bài 4?", options: ["Học tập và đọc sách (và Khác)", "Ngủ", "Giải trí và thư giãn", "Ăn uống"], answer: 0, level: "easy" },
    { question: "Nếu bãi xe có 200 xe, xe ô tô chiếm 10% thì có bao nhiêu xe ô tô?", options: ["20 chiếc", "10 chiếc", "30 chiếc", "40 chiếc"], answer: 0, level: "easy" }
];

// 5. Global Handlers & State
window.lesson152State = {
    ans4a: null,
    ans4b: null
};

window.select152_4a = function(idx) {
    window.lesson152State.ans4a = idx;
    const btnIds = ['btn-152-4a-A', 'btn-152-4a-B', 'btn-152-4a-C', 'btn-152-4a-D'];
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

window.select152_4b = function(idx) {
    window.lesson152State.ans4b = idx;
    const btnIds = ['btn-152-4b-A', 'btn-152-4b-B', 'btn-152-4b-C', 'btn-152-4b-D'];
    btnIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) {
            if (i === idx) {
                el.className = "p-4 bg-emerald-600 text-white border-2 border-emerald-700 rounded-2xl text-xl md:text-2xl font-black text-center shadow-md";
            } else {
                el.className = "p-4 bg-white border-2 border-emerald-200 rounded-2xl text-xl md:text-2xl font-black text-blue-900 hover:bg-emerald-300 transition-all text-center";
            }
        }
    });
};

window.submitEx152_1 = function () {
    const a = document.getElementById('ans-152-1a')?.value;
    const b = document.getElementById('ans-152-1b')?.value.trim();
    const c = document.getElementById('ans-152-1c')?.value.trim();

    if (!a || !b || !c) {
        alert("Em hãy chọn và điền đầy đủ câu trả lời cho cả 3 câu a, b, c!");
        return;
    }

    const ca = (a === 'Xe máy');
    const cb = (parseInt(b) === 10);
    const cc = (parseInt(c) === 45);

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0) + (cc ? 1 : 0);
    const isCorrect = (correctCount === 3);
    const score = Math.round((correctCount / 3) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) Xe máy ; b) 10% ; c) 45 chiếc xe đạp",
        `a) ${a} ; b) ${b}% ; c) ${c} chiếc`,
        "Em hãy quan sát phần quạt lớn nhất trên biểu đồ để xác định loại xe nhiều nhất, đọc trực tiếp tỉ số % của xe ô tô và tính số xe đạp (300 × 15%) nhé!",
        `
        a) Xe máy có phần quạt rộng nhất (75%), nên là loại xe nhiều nhất.<br>
        b) Số xe ô tô chiếm 10% số xe gửi trong bãi.<br>
        c) Số chiếc xe đạp hiện có: 300 × 15% = 45 chiếc xe đạp.<br>
        Đáp số: a) Xe máy ; b) 10% ; c) 45 chiếc xe đạp.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-152-1", 0, 3, correctCount);
};

window.submitEx152_2 = function () {
    const num = document.getElementById('ans-152-2-num')?.value.trim();
    const den = document.getElementById('ans-152-2-den')?.value.trim();

    if (!num || !den) {
        alert("Em hãy điền đầy đủ cả tử số và mẫu số cho tỉ số!");
        return;
    }

    const cNum = (parseInt(num) === 23);
    const cDen = (parseInt(den) === 30);
    const isCorrect = cNum && cDen;

    window.showMathFeedback(
        isCorrect,
        "23/30",
        `${num}/${den}`,
        "Em hãy đếm tổng số gạch của 2 chiếc tất khác nhau (4 cụm 5 + 3 gạch = 23) và lập tỉ số với tổng số ngày của tháng 4 (30 ngày) nhé!",
        `
        • Số lần Rô-bốt lấy được 2 chiếc tất khác nhau: 4 × 5 + 3 = 23 lần.<br>
        • Tổng số lần lấy tất trong tháng 4 là 30 lần.<br>
        • Tỉ số mô tả khả năng là 23/30.<br>
        Đáp số: 23/30.
        `
    );

    window.submitMathLesson(metadata.title, isCorrect ? 100 : 0, "btn-submit-152-2", 0, 1, isCorrect ? 1 : 0);
};

window.submitEx152_3 = function () {
    const num = document.getElementById('ans-152-3b-num')?.value.trim();
    const den = document.getElementById('ans-152-3b-den')?.value.trim();
    const c1 = document.getElementById('ans-152-3c1')?.value;
    const c2 = document.getElementById('ans-152-3c2')?.value;

    if (!num || !den || !c1 || !c2) {
        alert("Em hãy điền đầy đủ tỉ số câu b và chọn câu trả lời ở câu c!");
        return;
    }

    const cc1 = (c1 === 'Không chắc chắn');
    const cc2 = (c2 === 'Chắc chắn');
    const cDen = (parseInt(den) === 10);

    const correctCount = (cDen ? 1 : 0) + (cc1 ? 1 : 0) + (cc2 ? 1 : 0);
    const isCorrect = (correctCount === 3);
    const score = Math.round((correctCount / 3) * 100);

    window.showMathFeedback(
        isCorrect,
        `b) ${num}/10 ; c1) Không chắc chắn ; c2) Chắc chắn`,
        `b) ${num}/${den} ; c1) ${c1} ; c2) ${c2}`,
        "Em hãy đếm số lần lấy được 2 chiếc tất cùng màu để điền tử số, câu c1 suy luận xem 2 chiếc lấy ra có thể khác màu không và câu c2 dùng nguyên lý thử chọn với 3 chiếc tất nhé!",
        `
        b) Tỉ số lấy 2 chiếc tất cùng màu trong 10 lần thực hiện = ${num}/10.<br>
        c) <br>
        – Lấy 2 chiếc: Không chắc chắn (vì có thể lấy 1 đỏ 1 vàng).<br>
        – Lấy 3 chiếc: Chắc chắn (vì chỉ có 2 màu nên 3 chiếc luôn có ít nhất 2 chiếc cùng màu).
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-152-3", 0, 3, correctCount);
};

window.submitEx152_4 = function () {
    const a = window.lesson152State.ans4a;
    const b = window.lesson152State.ans4b;

    if (a === null || b === null) {
        alert("Em hãy chọn đầy đủ câu trả lời trắc nghiệm cho cả câu a và câu b!");
        return;
    }

    const ca = (a === 0); // A: 12.5%
    const cb = (b === 2); // C: 9 giờ

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0);
    const isCorrect = (correctCount === 2);
    const score = Math.round((correctCount / 2) * 100);

    const choicesA = ['A. 12,5%', 'B. 25%', 'C. 50%', 'D. 60%'];
    const choicesB = ['A. 3 giờ', 'B. 6 giờ', 'C. 9 giờ', 'D. 12 giờ'];

    window.showMathFeedback(
        isCorrect,
        "a) A. 12,5% ; b) C. 9 giờ",
        `a) ${choicesA[a]} ; b) ${choicesB[b]}`,
        "Em hãy quan sát phần quạt Giải trí (1/8 hình tròn = 100% ÷ 8) và phần quạt Ngủ (3/8 ngày = 24 × 3 ÷ 8) để chọn đáp án đúng nhé!",
        `
        a) Giải trí chiếm 1/8 hình tròn = 100% : 8 = 12,5% -> Đáp án A.<br>
        b) Số giờ ngủ = 24 × 3/8 = 9 giờ -> Đáp án C.<br>
        Đáp số: a) A. 12,5% ; b) C. 9 giờ.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-152-4", 0, 2, correctCount);
};

// 6. Main Lesson Export
export const lesson152 = {
    topic: "Số liệu và Biểu đồ",
    week: "31",
    period: "152",
    title: metadata.title || lessonInfo.title,
    desc: lessonInfo.description,
    content: lesson152Content,
    practice: lesson152Practice,
    quizPool: lesson152QuizPool,
    metadata,
    lessonInfo,
    onLoad: () => {
        console.log("Lesson 152 Loaded: Bài 67. Luyện tập chung (tiết 1)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};

window.lesson152 = lesson152;
export default lesson152;
