/**
 * @file index.js
 * @description Standardized Lesson 146: Bài 63. Thu thập, phân loại, sắp xếp các số liệu (tiết 1)
 * Targets: 100% SGK compliance (Trang 87-89), 3 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-146",
    period: "146",
    title: "Bài 63. Thu thập, phân loại, sắp xếp các số liệu (tiết 1)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 63. THU THẬP, PHÂN LOẠI, SẮP XẾP CÁC SỐ LIỆU (TIẾT 1)",
    description: "Hướng dẫn cách thu thập số liệu, phân loại theo tiêu chí và sắp xếp vào bảng.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 87-89"
};

// 2. HTML Content (Khám phá / Tìm hiểu bài - Trang 87)
const lesson146Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <!-- Hình ảnh Khám phá thanh long SGK Trang 87 -->
            <div class="p-6 bg-white rounded-[32px] border-2 border-blue-100 shadow-md flex items-center justify-center">
                <img src="assets/images/toan/toan_tap_2/146/146-khampha.png" alt="Rô-bốt phân loại thanh long" class="rounded-2xl w-full max-w-[75%] h-auto mx-auto shadow-sm">
            </div>

            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">📊 KHÁM PHÁ: THU THẬP, PHÂN LOẠI, SẮP XẾP SỐ LIỆU</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed italic border-l-8 border-blue-500 pl-4">
                    Trong thời gian trải nghiệm quy trình đóng gói thanh long xuất khẩu, Rô-bốt tham gia cân và phân loại các quả thanh long theo cân nặng: 
                    <span class="text-blue-700 font-black">từ 300 g đến 380 g</span>, 
                    <span class="text-blue-700 font-black">từ 381 g đến 460 g</span>, 
                    <span class="text-blue-700 font-black">từ 461 g đến 600 g</span>.
                </p>

                <p class="text-xl md:text-2xl font-black text-slate-800">Sau đó, Rô-bốt lập bảng số liệu như sau:</p>

                <!-- Bảng số liệu thanh long -->
                <div class="overflow-x-auto rounded-3xl border-2 border-blue-200 shadow-sm">
                    <table class="w-full text-center border-collapse font-bold text-lg md:text-xl">
                        <thead>
                            <tr class="bg-blue-600 text-white">
                                <th class="p-4 border-r border-blue-400">Loại</th>
                                <th class="p-4 border-r border-blue-400">S (300 g đến 380 g)</th>
                                <th class="p-4 border-r border-blue-400">M (381 g đến 460 g)</th>
                                <th class="p-4">L (461 g đến 600 g)</th>
                            </tr>
                        </thead>
                        <tbody class="bg-blue-50/40 text-slate-800 font-black text-xl md:text-2xl">
                            <tr>
                                <td class="p-4 border-r border-blue-100 font-bold bg-blue-100/50">Số lượng (quả)</td>
                                <td class="p-4 border-r border-blue-100 text-blue-700">27</td>
                                <td class="p-4 border-r border-blue-100 text-blue-700">43</td>
                                <td class="p-4 text-blue-700">36</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="p-6 bg-blue-50/60 rounded-3xl border border-blue-100 space-y-2 font-bold text-lg md:text-xl text-slate-800">
                    <p class="font-black text-blue-900">📌 Nhìn vào bảng ta biết:</p>
                    <p>• Dựa vào cân nặng, các quả thanh long được chia thành <span class="text-blue-700 font-black">3 loại: S, M và L</span>.</p>
                    <p>• Có <span class="text-blue-700 font-black">27 quả</span> cỡ S, <span class="text-blue-700 font-black">43 quả</span> cỡ M và <span class="text-blue-700 font-black">36 quả</span> cỡ L.</p>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 3 Slide phụ - Trang 88-89)
const lesson146Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 88) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Phân loại số liệu thành tích nhảy xa</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Cho dãy số liệu về thành tích đạt được của một nhóm học viên lớp nhảy xa:</p>
                        </div>
                    </div>

                    <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 mb-8 text-center font-black text-xl md:text-2xl text-blue-900">
                        2,45 m; 3 m; 3,05 m; 2,3 m; 2,75 m; 2,5 m; 2,05 m; 2,2 m; 3 m; 2,8 m.
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <p class="text-xl md:text-2xl font-black text-blue-900">a) Dựa vào dãy số liệu, hãy hoàn thành bảng dưới đây:</p>
                        <div class="overflow-x-auto rounded-3xl border-2 border-blue-200 mb-6">
                            <table class="w-full border-collapse text-center font-black text-lg md:text-xl">
                                <thead>
                                    <tr class="bg-blue-600 text-white border-b border-blue-200">
                                        <th class="p-4 border-r border-blue-500">Thành tích</th>
                                        <th class="p-4 border-r border-blue-500">3 m trở lên</th>
                                        <th class="p-4 border-r border-blue-500">2,7 m đến dưới 3 m</th>
                                        <th class="p-4 border-r border-blue-500">2,4 m đến dưới 2,7 m</th>
                                        <th class="p-4">Dưới 2,4 m</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-blue-50/40 text-slate-800">
                                    <tr>
                                        <td class="p-4 border-r border-blue-100 font-bold bg-blue-100/50">Số học viên</td>
                                        <td class="p-4 border-r border-blue-100">
                                            <input type="number" id="ans-146-1a-1" class="w-20 h-12 border-2 border-blue-600 rounded-xl text-center text-xl md:text-2xl font-black text-blue-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        </td>
                                        <td class="p-4 border-r border-blue-100">
                                            <input type="number" id="ans-146-1a-2" class="w-20 h-12 border-2 border-blue-600 rounded-xl text-center text-xl md:text-2xl font-black text-blue-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        </td>
                                        <td class="p-4 border-r border-blue-100">
                                            <input type="number" id="ans-146-1a-3" class="w-20 h-12 border-2 border-blue-600 rounded-xl text-center text-xl md:text-2xl font-black text-blue-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        </td>
                                        <td class="p-4">
                                            <input type="number" id="ans-146-1a-4" class="w-20 h-12 border-2 border-blue-600 rounded-xl text-center text-xl md:text-2xl font-black text-blue-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-blue-900 font-extrabold">b) Số học viên có thành tích dưới 2,4 m phải nhảy lần thứ hai =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-146-1b" class="w-24 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">học viên</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-146-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        a) Đếm các số liệu trong dãy:<br>
                        • 3 m trở lên: 3 m ; 3,05 m ; 3 m -> 3 học viên.<br>
                        • 2,7 m đến dưới 3 m: 2,75 m ; 2,8 m -> 2 học viên.<br>
                        • 2,4 m đến dưới 2,7 m: 2,45 m ; 2,5 m -> 2 học viên.<br>
                        • Dưới 2,4 m: 2,3 m ; 2,05 m ; 2,2 m -> 3 học viên.<br>
                        b) Có 3 học viên có thành tích dưới 2 m 40 cm (dưới 2,4 m) phải nhảy lần thứ hai.<br>
                        Đáp số: a) 3, 2, 2, 3 ; b) 3 học viên.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-146-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-146-1" onclick="window.submitEx146_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 88-89) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Khảo sát mức độ hài lòng chuyến đi cắm trại</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Mai thực hiện cuộc khảo sát về mức độ hài lòng của các bạn nữ trong lớp với chuyến đi cắm trại:</p>
                        </div>
                    </div>

                    <!-- Hình Cắm trại SGK Trang 88 -->
                    <div class="mb-6 text-center">
                        <img src="assets/images/toan/toan_tap_2/146/146-2-cam-trai.png" alt="Các bạn cắm trại" class="rounded-2xl w-full h-auto max-h-[240px] object-contain shadow-sm mx-auto">
                    </div>

                    <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 mb-6 text-center font-black text-xl md:text-2xl text-teal-900">
                        3; 5; 5; 4; 4; 3; 5; 4; 3; 5; 5; 4; 3; 3; 4; 4; 4.
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <p class="text-xl md:text-2xl font-black text-teal-900">a) Hoàn thành bảng số liệu dưới đây:</p>
                        <div class="overflow-x-auto rounded-3xl border-2 border-teal-200 mb-6">
                            <table class="w-full border-collapse text-center font-black text-lg md:text-xl">
                                <thead>
                                    <tr class="bg-teal-600 text-white border-b border-teal-200">
                                        <th class="p-4 border-r border-teal-500">Số điểm</th>
                                        <th class="p-4 border-r border-teal-500">1</th>
                                        <th class="p-4 border-r border-teal-500">2</th>
                                        <th class="p-4 border-r border-teal-500">3</th>
                                        <th class="p-4 border-r border-teal-500">4</th>
                                        <th class="p-4">5</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-teal-50/40 text-slate-800">
                                    <tr>
                                        <td class="p-4 border-r border-teal-100 font-bold bg-teal-100/50">Số bạn</td>
                                        <td class="p-4 border-r border-teal-100">0</td>
                                        <td class="p-4 border-r border-teal-100">
                                            <input type="number" id="ans-146-2a-2" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center text-xl md:text-2xl font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        </td>
                                        <td class="p-4 border-r border-teal-100">
                                            <input type="number" id="ans-146-2a-3" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center text-xl md:text-2xl font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        </td>
                                        <td class="p-4 border-r border-teal-100">
                                            <input type="number" id="ans-146-2a-4" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center text-xl md:text-2xl font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        </td>
                                        <td class="p-4">
                                            <input type="number" id="ans-146-2a-5" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center text-xl md:text-2xl font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p class="text-xl md:text-2xl font-black text-teal-900">b) Quan sát bảng số liệu và trả lời câu hỏi:</p>
                        <div class="space-y-4">
                            <div class="p-4 bg-teal-50 rounded-2xl flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                <span>• Có bao nhiêu bạn cảm thấy rất hài lòng (điểm 5)? =</span>
                                <input type="number" id="ans-146-2b-1" class="w-20 h-12 border-2 border-teal-600 rounded-xl text-center font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                <span>bạn</span>
                            </div>
                            <div class="p-4 bg-teal-50 rounded-2xl flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                <span>• Số điểm nào xuất hiện nhiều nhất? = Điểm</span>
                                <input type="number" id="ans-146-2b-2" class="w-20 h-12 border-2 border-teal-600 rounded-xl text-center font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                            </div>
                            <div class="p-4 bg-teal-50 rounded-2xl flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                <span>• Có bạn nào cảm thấy hoàn toàn không hài lòng (điểm 1) không? =</span>
                                <select id="ans-146-2b-3" class="h-12 border-2 border-teal-600 rounded-xl px-3 font-black text-teal-600 outline-none bg-white">
                                    <option value="">-- Chọn --</option>
                                    <option value="Có">Có</option>
                                    <option value="Không">Không</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-146-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        a) Đếm số lần xuất hiện của từng điểm:<br>
                        • Điểm 1: 0 bạn | Điểm 2: 0 bạn | Điểm 3: 5 bạn | Điểm 4: 7 bạn | Điểm 5: 5 bạn.<br>
                        b) Trả lời câu hỏi:<br>
                        • Có 5 bạn cảm thấy rất hài lòng (điểm 5).<br>
                        • Số điểm xuất hiện nhiều nhất là điểm 4 (xuất hiện 7 lần).<br>
                        • Không có bạn nào cảm thấy hoàn toàn không hài lòng (điểm 1).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-146-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-146-2" onclick="window.submitEx146_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 3 (Trang 89) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3. Phân loại cỡ giày múa cho tiết mục ba lê</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Các bạn học sinh tổ 1 ghi lại độ dài bàn chân (cm) để thuê giày múa: 21 cm; 20 cm; 21 cm; 22 cm; 21 cm; 21,5 cm; 20 cm; 21,5 cm.</p>
                        </div>
                    </div>

                    <!-- Hình Múa ba lê SGK Trang 89 -->
                    <div class="mb-6 text-center">
                        <img src="assets/images/toan/toan_tap_2/146/146-3-mua-bale.png" alt="Việt đo chân múa ba lê" class="rounded-2xl w-full h-auto max-h-[240px] object-contain shadow-sm mx-auto">
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <p class="text-xl md:text-2xl font-black text-sky-900">Xem bảng quy đổi cỡ giày múa và lập bảng số liệu phân loại số lượng giày cần thuê:</p>

                        <div class="overflow-x-auto rounded-3xl border-2 border-sky-200 mb-6">
                            <table class="w-full border-collapse text-center font-black text-lg md:text-xl">
                                <thead>
                                    <tr class="bg-sky-600 text-white border-b border-sky-200">
                                        <th class="p-4 border-r border-sky-500">Độ dài bàn chân (cm)</th>
                                        <th class="p-4 border-r border-sky-500">20 cm</th>
                                        <th class="p-4 border-r border-sky-500">20,5 cm</th>
                                        <th class="p-4 border-r border-sky-500">21 cm</th>
                                        <th class="p-4 border-r border-sky-500">21,5 cm</th>
                                        <th class="p-4">22 cm</th>
                                    </tr>
                                    <tr class="bg-sky-100 text-sky-900 border-b border-sky-200">
                                        <th class="p-3 border-r border-sky-300">Cỡ giày</th>
                                        <th class="p-3 border-r border-sky-300">32</th>
                                        <th class="p-3 border-r border-sky-300">33</th>
                                        <th class="p-3 border-r border-sky-300">34</th>
                                        <th class="p-3 border-r border-sky-300">35</th>
                                        <th class="p-3">36</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-sky-50/40 text-slate-800">
                                    <tr>
                                        <td class="p-4 border-r border-sky-100 font-bold bg-sky-100/50">Số bạn (đôi)</td>
                                        <td class="p-4 border-r border-sky-100">
                                            <input type="number" id="ans-146-3-c32" class="w-16 h-12 border-2 border-sky-600 rounded-xl text-center text-xl md:text-2xl font-black text-sky-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        </td>
                                        <td class="p-4 border-r border-sky-100">
                                            <input type="number" id="ans-146-3-c33" class="w-16 h-12 border-2 border-sky-600 rounded-xl text-center text-xl md:text-2xl font-black text-sky-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        </td>
                                        <td class="p-4 border-r border-sky-100">
                                            <input type="number" id="ans-146-3-c34" class="w-16 h-12 border-2 border-sky-600 rounded-xl text-center text-xl md:text-2xl font-black text-sky-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        </td>
                                        <td class="p-4 border-r border-sky-100">
                                            <input type="number" id="ans-146-3-c35" class="w-16 h-12 border-2 border-sky-600 rounded-xl text-center text-xl md:text-2xl font-black text-sky-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        </td>
                                        <td class="p-4">
                                            <input type="number" id="ans-146-3-c36" class="w-16 h-12 border-2 border-sky-600 rounded-xl text-center text-xl md:text-2xl font-black text-sky-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-146-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        Đếm số bạn theo từng cỡ giày:<br>
                        • Cỡ 32 (20 cm): 2 bạn.<br>
                        • Cỡ 33 (20,5 cm): 0 bạn.<br>
                        • Cỡ 34 (21 cm): 3 bạn.<br>
                        • Cỡ 35 (21,5 cm): 2 bạn.<br>
                        • Cỡ 36 (22 cm): 1 bạn.<br>
                        Đáp số: Cỡ 32: 2 đôi ; Cỡ 33: 0 đôi ; Cỡ 34: 3 đôi ; Cỡ 35: 2 đôi ; Cỡ 36: 1 đôi.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-146-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-146-3" onclick="window.submitEx146_3()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson146QuizPool = [
    { question: "Loại thanh long S (300g - 380g) trong Khám phá có bao nhiêu quả?", options: ["27 quả", "43 quả", "36 quả", "30 quả"], answer: 0, level: "easy" },
    { question: "Loại thanh long M (381g - 460g) có bao nhiêu quả?", options: ["43 quả", "27 quả", "36 quả", "40 quả"], answer: 0, level: "easy" },
    { question: "Thành tích nhảy xa 3,05 m thuộc nhóm nào?", options: ["3 m trở lên", "2,7 m đến dưới 3 m", "2,4 m đến dưới 2,7 m", "Dưới 2,4 m"], answer: 0, level: "easy" },
    { question: "Số học viên đạt từ 3 m trở lên trong lớp nhảy xa là:", options: ["3 học viên", "2 học viên", "4 học viên", "5 học viên"], answer: 0, level: "easy" },
    { question: "Số học viên nhảy được dưới 2,4 m phải nhảy lại là:", options: ["3 học viên", "2 học viên", "1 học viên", "4 học viên"], answer: 0, level: "easy" },
    { question: "Số bạn cảm thấy rất hài lòng (điểm 5) với chuyến cắm trại là:", options: ["5 bạn", "6 bạn", "7 bạn", "4 bạn"], answer: 0, level: "easy" },
    { question: "Số điểm xuất hiện nhiều nhất trong cuộc khảo sát cắm trại là:", options: ["Điểm 4", "Điểm 5", "Điểm 3", "Điểm 2"], answer: 0, level: "easy" },
    { question: "Tổng số bạn nữ tham gia khảo sát cắm trại là:", options: ["17 bạn", "16 bạn", "18 bạn", "15 bạn"], answer: 0, level: "easy" },
    { question: "Độ dài bàn chân 21 cm tương ứng với cỡ giày múa nào?", options: ["Cỡ 34", "Cỡ 32", "Cỡ 33", "Cỡ 35"], answer: 0, level: "easy" },
    { question: "Cỡ giày múa số 34 có bao nhiêu bạn chọn thuê?", options: ["3 bạn", "2 bạn", "1 bạn", "0 bạn"], answer: 0, level: "easy" },
    { question: "Cỡ giày múa số 33 (20,5 cm) có bao nhiêu bạn thuê?", options: ["0 bạn", "1 bạn", "2 bạn", "3 bạn"], answer: 0, level: "easy" },
    { question: "Tổng số đôi giày múa tổ 1 cần thuê là:", options: ["8 đôi", "7 đôi", "9 đôi", "10 đôi"], answer: 0, level: "easy" },
    { question: "Loại thanh long nào có số lượng nhiều nhất ở phần Khám phá?", options: ["Loại M", "Loại S", "Loại L", "Bằng nhau"], answer: 0, level: "easy" },
    { question: "Việc phân loại số liệu giúp ích gì cho quản lý và thống kê?", options: ["Dễ dàng theo dõi và xử lý thông tin", "Chỉ làm đẹp bảng", "Làm bài tập lâu hơn", "Tăng thêm số liệu"], answer: 0, level: "easy" },
    { question: "Trong bài 2, điểm số nào có 0 bạn chọn?", options: ["Điểm 1 và Điểm 2", "Điểm 3", "Điểm 4", "Điểm 5"], answer: 0, level: "easy" }
];

// 5. Global Handlers & State
window.lesson146State = {
    attempts: { s1: 0, s2: 0, s3: 0 }
};

window.submitEx146_1 = function () {
    window.lesson146State.attempts.s1++;
    const a1 = document.getElementById('ans-146-1a-1')?.value.trim();
    const a2 = document.getElementById('ans-146-1a-2')?.value.trim();
    const a3 = document.getElementById('ans-146-1a-3')?.value.trim();
    const a4 = document.getElementById('ans-146-1a-4')?.value.trim();
    const b = document.getElementById('ans-146-1b')?.value.trim();

    if (!a1 || !a2 || !a3 || !a4 || !b) {
        alert("Em hãy nhập đầy đủ kết quả vào bảng và câu b!");
        return;
    }

    const c1 = (parseInt(a1) === 3);
    const c2 = (parseInt(a2) === 2);
    const c3 = (parseInt(a3) === 2);
    const c4 = (parseInt(a4) === 3);
    const cb = (parseInt(b) === 3);

    const correctCount = (c1 ? 1 : 0) + (c2 ? 1 : 0) + (c3 ? 1 : 0) + (c4 ? 1 : 0) + (cb ? 1 : 0);
    const isCorrect = (correctCount === 5);
    const score = Math.round((correctCount / 5) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 3, 2, 2, 3 ; b) 3 học viên",
        `a) ${a1}, ${a2}, ${a3}, ${a4} ; b) ${b} học viên`,
        "Em hãy đếm số lượt thành tích tương ứng với từng khoảng kết quả trong dãy số liệu nhé!",
        `
        a) Đếm các số liệu thành tích:<br>
        • 3 m trở lên: 3 m ; 3,05 m ; 3 m -> 3 học viên.<br>
        • 2,7 m đến dưới 3 m: 2,75 m ; 2,8 m -> 2 học viên.<br>
        • 2,4 m đến dưới 2,7 m: 2,45 m ; 2,5 m -> 2 học viên.<br>
        • Dưới 2,4 m: 2,3 m ; 2,05 m ; 2,2 m -> 3 học viên.<br>
        b) Có 3 học viên có thành tích dưới 2 m 40 cm (dưới 2,4 m) phải nhảy lần thứ hai.<br>
        Em phân loại và đếm số liệu cực kỳ chính xác!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-146-1", window.lesson146State.attempts.s1, 5, correctCount);
};

window.submitEx146_2 = function () {
    window.lesson146State.attempts.s2++;
    const a2 = document.getElementById('ans-146-2a-2')?.value.trim();
    const a3 = document.getElementById('ans-146-2a-3')?.value.trim();
    const a4 = document.getElementById('ans-146-2a-4')?.value.trim();
    const a5 = document.getElementById('ans-146-2a-5')?.value.trim();

    const b1 = document.getElementById('ans-146-2b-1')?.value.trim();
    const b2 = document.getElementById('ans-146-2b-2')?.value.trim();
    const b3 = document.getElementById('ans-146-2b-3')?.value;

    if (a2 === '' || a3 === '' || a4 === '' || a5 === '' || b1 === '' || b2 === '' || !b3) {
        alert("Em hãy điền đầy đủ bảng số liệu và các câu hỏi b!");
        return;
    }

    const ca2 = (parseInt(a2) === 0);
    const ca3 = (parseInt(a3) === 5);
    const ca4 = (parseInt(a4) === 7);
    const ca5 = (parseInt(a5) === 5);

    const cb1 = (parseInt(b1) === 5);
    const cb2 = (parseInt(b2) === 4);
    const cb3 = (b3 === 'Không');

    const correctCount = (ca2 ? 1 : 0) + (ca3 ? 1 : 0) + (ca4 ? 1 : 0) + (ca5 ? 1 : 0) + (cb1 ? 1 : 0) + (cb2 ? 1 : 0) + (cb3 ? 1 : 0);
    const isCorrect = (correctCount === 7);
    const score = Math.round((correctCount / 7) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 0, 5, 7, 5 ; b) 5 bạn, điểm 4, Không",
        `a) ${a2}, ${a3}, ${a4}, ${a5} ; b) ${b1} bạn, điểm ${b2}, ${b3}`,
        "Em hãy đếm số lần xuất hiện của từng số điểm trong dãy khảo sát của bạn Mai nhé!",
        `
        a) Bảng số điểm: 1 (0 bạn), 2 (0 bạn), 3 (5 bạn), 4 (7 bạn), 5 (5 bạn).<br>
        b) Trả lời câu hỏi:<br>
        • 5 bạn cảm thấy rất hài lòng (điểm 5).<br>
        • Điểm 4 xuất hiện nhiều nhất (7 lần).<br>
        • Không có bạn nào cảm thấy hoàn toàn không hài lòng.<br>
        Em thống kê kết quả khảo sát tuyệt vời!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-146-2", window.lesson146State.attempts.s2, 7, correctCount);
};

window.submitEx146_3 = function () {
    window.lesson146State.attempts.s3++;
    const c32 = document.getElementById('ans-146-3-c32')?.value.trim();
    const c33 = document.getElementById('ans-146-3-c33')?.value.trim();
    const c34 = document.getElementById('ans-146-3-c34')?.value.trim();
    const c35 = document.getElementById('ans-146-3-c35')?.value.trim();
    const c36 = document.getElementById('ans-146-3-c36')?.value.trim();

    if (c32 === '' || c33 === '' || c34 === '' || c35 === '' || c36 === '') {
        alert("Em hãy nhập đầy đủ số lượng giày cho tất cả các cỡ!");
        return;
    }

    const ok32 = (parseInt(c32) === 2);
    const ok33 = (parseInt(c33) === 0);
    const ok34 = (parseInt(c34) === 3);
    const ok35 = (parseInt(c35) === 2);
    const ok36 = (parseInt(c36) === 1);

    const correctCount = (ok32 ? 1 : 0) + (ok33 ? 1 : 0) + (ok34 ? 1 : 0) + (ok35 ? 1 : 0) + (ok36 ? 1 : 0);
    const isCorrect = (correctCount === 5);
    const score = Math.round((correctCount / 5) * 100);

    window.showMathFeedback(
        isCorrect,
        "Cỡ 32: 2 ; Cỡ 33: 0 ; Cỡ 34: 3 ; Cỡ 35: 2 ; Cỡ 36: 1",
        `Cỡ 32: ${c32} ; Cỡ 33: ${c33} ; Cỡ 34: ${c34} ; Cỡ 35: ${c35} ; Cỡ 36: ${c36}`,
        "Em hãy đếm số lần xuất hiện của từng kích thước bàn chân rồi đối chiếu với bảng cỡ giày múa nhé!",
        `
        Đếm số bạn theo từng cỡ giày:<br>
        • Cỡ 32 (20 cm): 2 đôi.<br>
        • Cỡ 33 (20,5 cm): 0 đôi.<br>
        • Cỡ 34 (21 cm): 3 đôi.<br>
        • Cỡ 35 (21,5 cm): 2 đôi.<br>
        • Cỡ 36 (22 cm): 1 đôi.<br>
        Em lập bảng số liệu phân loại rất chuẩn xác!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-146-3", window.lesson146State.attempts.s3, 5, correctCount);
};

// 6. Main Lesson Export
export const lesson146 = {
    topic: "Số liệu và Biểu đồ",
    week: "30",
    period: "146",
    title: metadata.title || lessonInfo.title,
    desc: lessonInfo.description,
    content: lesson146Content,
    practice: lesson146Practice,
    quizPool: lesson146QuizPool,
    metadata,
    lessonInfo,
    onLoad: () => {
        console.log("Lesson 146 Loaded: Bài 63. Thu thập, phân loại, sắp xếp các số liệu (tiết 1)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};

window.lesson146 = lesson146;
export default lesson146;
