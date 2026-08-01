/**
 * @file index.js
 * @description Standardized Lesson 147: Bài 64. Biểu đồ hình quạt tròn (tiết 1)
 * Targets: 100% SGK compliance (Trang 90-91), 3 slides with independent solution toggle & E buttons.
 * Upgrade Ex 3: Allow clicking directly on chart images A & B.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-147",
    period: "147",
    title: "Bài 64. Biểu đồ hình quạt tròn (tiết 1)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 64. BIỂU ĐỒ HÌNH QUẠT TRÒN (TIẾT 1)",
    description: "Giới thiệu học sinh bước đầu làm quen và đọc hiểu số liệu từ biểu đồ hình quạt tròn.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 90-91"
};

// 2. HTML Content (Khám phá / Lý thuyết - Trang 90)
const lesson147Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <!-- Hình ảnh Khám phá biểu đồ quạt tròn SGK Trang 90 -->
            <div class="p-6 bg-white rounded-[32px] border-2 border-blue-100 shadow-md flex items-center justify-center">
                <img src="assets/images/toan/toan_tap_2/147/147-khampha.png" alt="Biểu đồ hình quạt tròn Hội khỏe Phù Đổng" class="rounded-2xl w-full max-w-[75%] h-auto mx-auto shadow-sm">
            </div>

            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">🥧 KHÁM PHÁ: BIỂU ĐỒ HÌNH QUẠT TRÒN</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <div class="space-y-4 font-bold text-lg md:text-xl text-slate-800">
                    <p class="font-black text-blue-900 text-xl md:text-2xl">a) Nhìn vào biểu đồ trên, ta biết:</p>
                    <p class="pl-4">• Có <span class="text-blue-700 font-black">45%</span> số học sinh tham gia là học sinh lớp 3;</p>
                    <p class="pl-4">• Có <span class="text-blue-700 font-black">23%</span> số học sinh tham gia là học sinh lớp 4;</p>
                    <p class="pl-4">• Có <span class="text-blue-700 font-black">32%</span> số học sinh tham gia là học sinh lớp 5.</p>
                </div>

                <div class="p-6 bg-blue-50/60 rounded-3xl border border-blue-100 space-y-3 font-bold text-lg md:text-xl text-slate-800">
                    <p class="font-black text-blue-900 text-xl md:text-2xl">b) Giải bài toán:</p>
                    <p>Biết trường có tất cả <span class="text-blue-700 font-black">100</span> học sinh tham gia Hội khỏe Phù Đổng. Hỏi trong số đó có bao nhiêu học sinh lớp 3?</p>
                    <p class="italic text-slate-700">Nhìn vào biểu đồ trên ta thấy có <span class="text-blue-700 font-black">45%</span> số học sinh tham gia là học sinh lớp 3.</p>
                    <p class="font-black text-blue-800 text-xl md:text-2xl bg-white p-4 rounded-2xl border-2 border-blue-200 text-center">
                        Vậy số học sinh lớp 3 tham gia Hội khỏe Phù Đổng là: <span class="text-red-600 text-2xl md:text-3xl font-black">45</span> học sinh.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 3 Slide phụ - Trang 91)
const lesson147Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 91) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Khảo sát hoạt động dã ngoại yêu thích</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Kết quả khảo sát về hoạt động dã ngoại yêu thích của 100 học sinh được cho trong biểu đồ hình quạt tròn bên.</p>
                        </div>
                    </div>

                    <!-- Biểu đồ Bài 1 SGK Trang 91 -->
                    <div class="mb-6 text-center bg-blue-50/50 p-6 rounded-[2.5rem] border-2 border-blue-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/147/147-1-da-ngoai.png" alt="Biểu đồ hoạt động dã ngoại" class="rounded-2xl w-full max-w-[600px] md:max-w-[700px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-blue-900 font-extrabold">a) Số phần trăm học sinh thích leo núi =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-147-1a" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">%</span>
                                </span>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm space-y-4">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-blue-900 font-extrabold">b) Hoạt động được yêu thích nhất =</span>
                                <select id="ans-147-1b-name" class="h-14 border-2 border-blue-600 rounded-2xl px-4 text-xl md:text-2xl font-black text-blue-600 outline-none bg-white">
                                    <option value="">-- Chọn hoạt động --</option>
                                    <option value="Thăm trang trại">Thăm trang trại</option>
                                    <option value="Leo núi">Leo núi</option>
                                    <option value="Tắm biển">Tắm biển</option>
                                </select>
                            </div>
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800 border-t border-blue-200 pt-3">
                                <span class="text-blue-900 font-extrabold">Số học sinh yêu thích hoạt động đó (trong 100 học sinh) =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-147-1b-num" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">bạn</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-147-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        a) Nhìn vào biểu đồ quạt tròn, phần màu vàng (Leo núi) chiếm <b>30%</b>.<br>
                        b) Phần có tỉ lệ lớn nhất là màu xanh lá (Thăm trang trại: 45%).<br>
                        Số bạn yêu thích hoạt động thăm trang trại là: 100 × 45% = <b>45 bạn</b>.<br>
                        Đáp số: a) 30% ; b) Thăm trang trại, 45 bạn.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-147-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-147-1" onclick="window.submitEx147_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 91) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Tỉ số phần trăm học sinh mang đồ vật dã ngoại</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Trong chuyến đi đến vườn quốc gia, mỗi học sinh đều mang một trong ba đồ vật: kính lúp, đèn pin và thuốc xịt côn trùng. Biểu đồ bên cho biết tỉ số phần trăm học sinh mang theo mỗi đồ vật đó.</p>
                        </div>
                    </div>

                    <!-- Biểu đồ Bài 2 SGK Trang 91 -->
                    <div class="mb-6 text-center bg-teal-50/50 p-6 rounded-[2.5rem] border-2 border-teal-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/147/147-2-do-vat.png" alt="Biểu đồ đồ vật mang theo" class="rounded-2xl w-full max-w-[600px] md:max-w-[700px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <div class="space-y-4 mb-10 text-left w-full">
                        <p class="text-xl md:text-2xl font-black text-teal-900">Hãy đọc tỉ số phần trăm của học sinh mang theo mỗi đồ vật trên biểu đồ:</p>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <!-- Kính lúp -->
                            <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 flex flex-col items-center gap-2">
                                <span class="text-xl md:text-2xl font-black text-teal-900">Kính lúp</span>
                                <div class="flex items-center gap-2">
                                    <input type="number" id="ans-147-2-kinhlup" class="w-24 h-12 border-2 border-teal-600 rounded-xl text-center text-xl md:text-2xl font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">%</span>
                                </div>
                            </div>
                            <!-- Đèn pin -->
                            <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 flex flex-col items-center gap-2">
                                <span class="text-xl md:text-2xl font-black text-teal-900">Đèn pin</span>
                                <div class="flex items-center gap-2">
                                    <input type="number" id="ans-147-2-denpin" class="w-24 h-12 border-2 border-teal-600 rounded-xl text-center text-xl md:text-2xl font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">%</span>
                                </div>
                            </div>
                            <!-- Thuốc xịt côn trùng -->
                            <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 flex flex-col items-center gap-2">
                                <span class="text-xl md:text-2xl font-black text-teal-900">Thuốc xịt côn trùng</span>
                                <div class="flex items-center gap-2">
                                    <input type="number" id="ans-147-2-thuocxit" class="w-24 h-12 border-2 border-teal-600 rounded-xl text-center text-xl md:text-2xl font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-147-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        Quan sát chú giải màu sắc trên biểu đồ hình quạt tròn:<br>
                        • Kính lúp (Màu xanh dương): <b>65%</b>.<br>
                        • Đèn pin (Màu vàng): <b>10%</b>.<br>
                        • Thuốc xịt côn trùng (Màu hồng): <b>25%</b>.<br>
                        Đáp số: Kính lúp 65%, Đèn pin 10%, Thuốc xịt côn trùng 25%.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-147-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-147-2" onclick="window.submitEx147_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 3 (Trang 91) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3. Bấm chọn biểu đồ đúng với bảng số liệu</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Cho bảng số liệu: Tìm hiểu côn trùng: 50%, Trồng cây: 5%, Đạp xe: 20%, Đi bộ: 25%. Hãy <b>nhấp chọn trực tiếp vào biểu đồ</b> thể hiện đúng số liệu trong bảng:</p>
                        </div>
                    </div>

                    <!-- Bảng số liệu SGK -->
                    <div class="overflow-x-auto rounded-3xl border-2 border-sky-200 mb-8">
                        <table class="w-full border-collapse text-center font-black text-lg md:text-xl">
                            <thead>
                                <tr class="bg-sky-600 text-white border-b border-sky-200">
                                    <th class="p-4 border-r border-sky-500">Hoạt động</th>
                                    <th class="p-4 border-r border-sky-500">Tìm hiểu côn trùng</th>
                                    <th class="p-4 border-r border-sky-500">Trồng cây</th>
                                    <th class="p-4 border-r border-sky-500">Đạp xe</th>
                                    <th class="p-4">Đi bộ</th>
                                </tr>
                            </thead>
                            <tbody class="bg-sky-50/40 text-slate-800 text-xl md:text-2xl">
                                <tr>
                                    <td class="p-4 border-r border-sky-100 font-bold bg-sky-100/50">Tỉ số %</td>
                                    <td class="p-4 border-r border-sky-100 text-sky-700">50%</td>
                                    <td class="p-4 border-r border-sky-100 text-sky-700">5%</td>
                                    <td class="p-4 border-r border-sky-100 text-sky-700">20%</td>
                                    <td class="p-4 text-sky-700">25%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Thẻ chọn hình biểu đồ A & B tương tác -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-left">
                        <!-- Thẻ Biểu đồ A -->
                        <div id="card-147-3-A" onclick="window.lesson147SelectMCQ('147-3', 'A')" class="group cursor-pointer p-6 bg-white border-4 border-sky-200 rounded-[2.5rem] hover:border-sky-500 transition-all shadow-md active:scale-95 relative overflow-hidden flex flex-col items-center">
                            <div class="w-full flex items-center justify-between mb-4">
                                <span class="text-2xl md:text-3xl font-black text-sky-900 bg-sky-100 px-4 py-2 rounded-2xl border border-sky-300">Biểu đồ A</span>
                                <span id="badge-147-3-A" class="hidden text-xl font-black text-sky-700 bg-sky-200 px-3 py-1 rounded-xl">✓ Đã chọn</span>
                            </div>
                            <img src="assets/images/toan/toan_tap_2/147/147-3-bieu-do-a.png" alt="Biểu đồ A" class="rounded-2xl w-full h-auto max-h-[260px] object-contain shadow-sm bg-white p-2">
                        </div>

                        <!-- Thẻ Biểu đồ B -->
                        <div id="card-147-3-B" onclick="window.lesson147SelectMCQ('147-3', 'B')" class="group cursor-pointer p-6 bg-white border-4 border-sky-200 rounded-[2.5rem] hover:border-sky-500 transition-all shadow-md active:scale-95 relative overflow-hidden flex flex-col items-center">
                            <div class="w-full flex items-center justify-between mb-4">
                                <span class="text-2xl md:text-3xl font-black text-sky-900 bg-sky-100 px-4 py-2 rounded-2xl border border-sky-300">Biểu đồ B</span>
                                <span id="badge-147-3-B" class="hidden text-xl font-black text-sky-700 bg-sky-200 px-3 py-1 rounded-xl">✓ Đã chọn</span>
                            </div>
                            <img src="assets/images/toan/toan_tap_2/147/147-3-bieu-do-b.png" alt="Biểu đồ B" class="rounded-2xl w-full h-auto max-h-[260px] object-contain shadow-sm bg-white p-2">
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-147-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        So sánh số liệu với từng biểu đồ:<br>
                        • Biểu đồ A có Trồng cây: 20% và Đạp xe: 5% (Sai so với bảng số liệu).<br>
                        • Biểu đồ B có Trồng cây: 5% và Đạp xe: 20% (Đúng hoàn toàn với bảng số liệu).<br>
                        Vậy đáp án đúng là <b>Biểu đồ B</b>.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-147-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-147-3" onclick="window.submitEx147_3()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson147QuizPool = [
    { question: "Dựa vào biểu đồ Khám phá, lớp 3 chiếm tỉ số bao nhiêu phần trăm?", options: ["45%", "23%", "32%", "50%"], answer: 0, level: "easy" },
    { question: "Dựa vào biểu đồ Khám phá, lớp 4 chiếm tỉ số bao nhiêu phần trăm?", options: ["23%", "45%", "32%", "10%"], answer: 0, level: "easy" },
    { question: "Dựa vào biểu đồ Khám phá, lớp 5 chiếm tỉ số bao nhiêu phần trăm?", options: ["32%", "23%", "45%", "60%"], answer: 0, level: "easy" },
    { question: "Biểu đồ hình quạt tròn dùng để biểu diễn:", options: ["Tỉ số phần trăm các phần so với tổng thể", "Biểu đồ đoạn thẳng", "Độ dài quãng đường", "Số đo thời gian"], answer: 0, level: "easy" },
    { question: "Trong bài 1, hoạt động dã ngoại nào chiếm 30%?", options: ["Leo núi", "Thăm trang trại", "Tắm biển", "Trồng cây"], answer: 0, level: "easy" },
    { question: "Hoạt động dã ngoại được yêu thích nhất ở Bài 1 là:", options: ["Thăm trang trại (45%)", "Leo núi (30%)", "Tắm biển (25%)", "Đi bộ"], answer: 0, level: "easy" },
    { question: "Trong 100 học sinh, có 25% học sinh thích tắm biển. Vậy có bao nhiêu bạn?", options: ["25 bạn", "30 bạn", "45 bạn", "50 bạn"], answer: 0, level: "easy" },
    { question: "Ở Bài 2, đồ vật nào được học sinh mang theo nhiều nhất?", options: ["Kính lúp (65%)", "Thuốc xịt côn trùng (25%)", "Đèn pin (10%)", "Balo"], answer: 0, level: "easy" },
    { question: "Tỉ số phần trăm học sinh mang theo đèn pin ở Bài 2 là:", options: ["10%", "65%", "25%", "5%"], answer: 0, level: "easy" },
    { question: "Tỉ số phần trăm học sinh mang theo thuốc xịt côn trùng là:", options: ["25%", "65%", "10%", "15%"], answer: 0, level: "easy" },
    { question: "Ở Bài 3, hoạt động nào chiếm đúng 50% biểu đồ hình quạt?", options: ["Tìm hiểu côn trùng", "Trồng cây", "Đạp xe", "Đi bộ"], answer: 0, level: "easy" },
    { question: "Tỉ số phần trăm của hoạt động Trồng cây ở Bài 3 là bao nhiêu?", options: ["5%", "20%", "25%", "50%"], answer: 0, level: "easy" },
    { question: "Biểu đồ nào ở Bài 3 thể hiện đúng bảng số liệu?", options: ["Biểu đồ B", "Biểu đồ A", "Cả hai đều đúng", "Cả hai đều sai"], answer: 0, level: "easy" },
    { question: "Một nửa hình tròn trong biểu đồ hình quạt tương ứng với:", options: ["50%", "25%", "100%", "75%"], answer: 0, level: "easy" },
    { question: "Một phần tư hình tròn trong biểu đồ hình quạt tương ứng với:", options: ["25%", "50%", "100%", "10%"], answer: 0, level: "easy" }
];

// 5. Global Handlers & State
window.lesson147State = {
    attempts: { s1: 0, s2: 0, s3: 0 },
    mcq: { s3: null }
};

window.lesson147SelectMCQ = function (exId, option) {
    if (exId === '147-3') {
        window.lesson147State.mcq.s3 = option;
        ['A', 'B'].forEach(opt => {
            const card = document.getElementById(`card-147-3-${opt}`);
            const badge = document.getElementById(`badge-147-3-${opt}`);
            if (card) {
                if (opt === option) {
                    card.className = "group cursor-pointer p-6 bg-sky-50 border-4 border-sky-600 rounded-[2.5rem] shadow-xl scale-[1.02] transition-all relative overflow-hidden flex flex-col items-center ring-4 ring-sky-300";
                    if (badge) badge.classList.remove('hidden');
                } else {
                    card.className = "group cursor-pointer p-6 bg-white border-4 border-sky-200 rounded-[2.5rem] hover:border-sky-500 transition-all shadow-md active:scale-95 relative overflow-hidden flex flex-col items-center opacity-75";
                    if (badge) badge.classList.add('hidden');
                }
            }
        });
    }
};

window.submitEx147_1 = function () {
    window.lesson147State.attempts.s1++;
    const a = document.getElementById('ans-147-1a')?.value.trim();
    const bName = document.getElementById('ans-147-1b-name')?.value;
    const bNum = document.getElementById('ans-147-1b-num')?.value.trim();

    if (!a || !bName || !bNum) {
        alert("Em hãy chọn và điền đầy đủ câu trả lời cho câu a và câu b!");
        return;
    }

    const ca = (parseInt(a) === 30);
    const cbName = (bName === 'Thăm trang trại');
    const cbNum = (parseInt(bNum) === 45);

    const correctCount = (ca ? 1 : 0) + (cbName ? 1 : 0) + (cbNum ? 1 : 0);
    const isCorrect = (correctCount === 3);
    const score = Math.round((correctCount / 3) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 30% ; b) Thăm trang trại, 45 bạn",
        `a) ${a}% ; b) ${bName}, ${bNum} bạn`,
        "Em hãy quan sát từng phần quạt màu trên biểu đồ và đối chiếu với chú giải để đọc kết quả nhé!",
        `
        a) Phần màu vàng (Leo núi) chiếm 30%.<br>
        b) Hoạt động được yêu thích nhất là Thăm trang trại (45%).<br>
        Số học sinh yêu thích thăm trang trại trong 100 học sinh là 45 bạn.<br>
        Đáp số: a) 30% ; b) Thăm trang trại, 45 bạn.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-147-1", window.lesson147State.attempts.s1, 3, correctCount);
};

window.submitEx147_2 = function () {
    window.lesson147State.attempts.s2++;
    const kinhlup = document.getElementById('ans-147-2-kinhlup')?.value.trim();
    const denpin = document.getElementById('ans-147-2-denpin')?.value.trim();
    const thuocxit = document.getElementById('ans-147-2-thuocxit')?.value.trim();

    if (!kinhlup || !denpin || !thuocxit) {
        alert("Em hãy nhập đầy đủ tỉ số phần trăm cho cả 3 đồ vật!");
        return;
    }

    const okKL = (parseInt(kinhlup) === 65);
    const okDP = (parseInt(denpin) === 10);
    const okTX = (parseInt(thuocxit) === 25);

    const correctCount = (okKL ? 1 : 0) + (okDP ? 1 : 0) + (okTX ? 1 : 0);
    const isCorrect = (correctCount === 3);
    const score = Math.round((correctCount / 3) * 100);

    window.showMathFeedback(
        isCorrect,
        "Kính lúp: 65% ; Đèn pin: 10% ; Thuốc xịt côn trùng: 25%",
        `Kính lúp: ${kinhlup}% ; Đèn pin: ${denpin}% ; Thuốc xịt côn trùng: ${thuocxit}%`,
        "Em hãy quan sát màu sắc chú giải tương ứng với Kính lúp, Đèn pin và Thuốc xịt côn trùng trên biểu đồ nhé!",
        `
        Đọc tỉ số phần trăm trên biểu đồ quạt tròn:<br>
        • Kính lúp (Xanh dương): 65%.<br>
        • Đèn pin (Vàng): 10%.<br>
        • Thuốc xịt côn trùng (Hồng): 25%.<br>
        Em đọc số liệu biểu đồ quạt rất chính xác!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-147-2", window.lesson147State.attempts.s2, 3, correctCount);
};

window.submitEx147_3 = function () {
    window.lesson147State.attempts.s3++;
    const selected = window.lesson147State.mcq.s3;

    if (!selected) {
        alert("Em hãy nhấp chọn Biểu đồ A hoặc Biểu đồ B!");
        return;
    }

    const isCorrect = (selected === 'B');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "B. Biểu đồ B",
        `Biểu đồ ${selected}`,
        "Em hãy so sánh số liệu 'Trồng cây 5%' và 'Đạp xe 20%' với hình vẽ trên biểu đồ A và B nhé!",
        `
        So sánh bảng số liệu với hai biểu đồ:<br>
        • Biểu đồ A ghi Trồng cây 20% và Đạp xe 5% (Sai).<br>
        • Biểu đồ B ghi Trồng cây 5% và Đạp xe 20% (Đúng).<br>
        Đáp án đúng là B (Biểu đồ B).
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-147-3", window.lesson147State.attempts.s3, 1, isCorrect ? 1 : 0);
};

// 6. Main Lesson Export
export const lesson147 = {
    topic: "Số liệu và Biểu đồ",
    week: "30",
    period: "147",
    title: metadata.title || lessonInfo.title,
    desc: lessonInfo.description,
    content: lesson147Content,
    practice: lesson147Practice,
    quizPool: lesson147QuizPool,
    metadata,
    lessonInfo,
    onLoad: () => {
        console.log("Lesson 147 Loaded: Bài 64. Biểu đồ hình quạt tròn (tiết 1)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};

window.lesson147 = lesson147;
export default lesson147;
