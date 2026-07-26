/**
 * @file index.js
 * @description Standardized Lesson 151: Bài 66. Thực hành và trải nghiệm thu thập, phân tích, biểu diễn các số liệu thống kê (tiết 2)
 * Targets: 100% SGK compliance (Trang 98-99), 2 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-151",
    period: "151",
    title: "Bài 66. Thực hành và trải nghiệm thu thập, phân tích, biểu diễn các số liệu thống kê (tiết 2)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 66. THỰC HÀNH VÀ TRẢI NGHIỆM THU THẬP, PHÂN TÍCH, BIỂU DIỄN CÁC SỐ LIỆU THỐNG KÊ (TIẾT 2)",
    description: "Học sinh thực hiện khảo sát về kỷ niệm trường học và mức độ hài lòng, sau đó phân tích và biểu diễn số liệu thu thập được.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 98-99"
};

// 2. HTML Content (Khám phá / Lý thuyết - Trang 98-99)
const lesson151Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">🏫 THỰC HÀNH VÀ TRẢI NGHIỆM THỐNG KÊ (TIẾT 2)</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-lg md:text-xl">
                    <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-200 space-y-2">
                        <p class="font-black text-blue-800 text-xl md:text-2xl">📝 Khảo sát kỷ niệm trường học:</p>
                        <p class="text-slate-800">• Thu thập các yếu tố kỷ niệm nhớ nhất.</p>
                        <p class="text-slate-800">• Xác định yếu tố có số bình chọn cao nhất.</p>
                    </div>
                    <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-200 space-y-2">
                        <p class="font-black text-teal-800 text-xl md:text-2xl">⭐ Đánh giá mức độ hài lòng:</p>
                        <p class="text-slate-800">• Thống kê thang điểm từ 1 đến 5 điểm.</p>
                        <p class="text-slate-800">• Tính điểm trung bình cộng: Tổng điểm ÷ Tổng bạn.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 2 Slide phụ - Trang 98-99)
const lesson151Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 98) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Khảo sát kỷ niệm nhớ nhất ở trường tiểu học</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Tại năm học cuối cấp Tiểu học, hãy nhìn lại quãng thời gian đã qua và khảo sát: "Điều gì khiến em nhớ nhất ở trường tiểu học?" Thu thập và biểu diễn số liệu vào bảng:</p>
                        </div>
                    </div>

                    <!-- Bảng thống kê yếu tố kỷ niệm -->
                    <div class="overflow-x-auto rounded-3xl border-2 border-blue-200 mb-6">
                        <table class="w-full border-collapse text-center font-black text-lg md:text-xl">
                            <thead>
                                <tr class="bg-blue-600 text-white">
                                    <th class="p-4 border-r border-blue-400">Yếu tố</th>
                                    <th class="p-4 border-r border-blue-400">Khuôn viên trường học</th>
                                    <th class="p-4 border-r border-blue-400">Bạn bè</th>
                                    <th class="p-4 border-r border-blue-400">Thầy cô</th>
                                    <th class="p-4 border-r border-blue-400">Thư viện của trường</th>
                                    <th class="p-4">Khác</th>
                                </tr>
                            </thead>
                            <tbody class="bg-blue-50/40 text-slate-800 text-xl md:text-2xl">
                                <tr>
                                    <td class="p-4 border-r border-blue-100 font-bold bg-blue-100/50">Số bạn chọn</td>
                                    <td class="p-4 border-r border-blue-100 bg-white"><input type="number" id="in-151-1-1" class="w-16 h-12 border-2 border-blue-600 rounded-xl text-center outline-none font-black text-blue-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="5" value="5"></td>
                                    <td class="p-4 border-r border-blue-100 bg-white"><input type="number" id="in-151-1-2" class="w-16 h-12 border-2 border-blue-600 rounded-xl text-center outline-none font-black text-blue-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="12" value="12"></td>
                                    <td class="p-4 border-r border-blue-100 bg-white"><input type="number" id="in-151-1-3" class="w-16 h-12 border-2 border-blue-600 rounded-xl text-center outline-none font-black text-blue-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="8" value="8"></td>
                                    <td class="p-4 border-r border-blue-100 bg-white"><input type="number" id="in-151-1-4" class="w-16 h-12 border-2 border-blue-600 rounded-xl text-center outline-none font-black text-blue-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="3" value="3"></td>
                                    <td class="p-4 bg-white"><input type="number" id="in-151-1-5" class="w-16 h-12 border-2 border-blue-600 rounded-xl text-center outline-none font-black text-blue-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="2" value="2"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Hình minh họa SGK Trang 98 HÌNH TO RÕ NÉT -->
                    <div class="mb-8 text-center bg-blue-50/50 p-6 rounded-[2.5rem] border-2 border-blue-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/151/151-1-ky-niem.png" alt="Kỷ niệm trường tiểu học" class="rounded-2xl w-full max-w-[650px] md:max-w-[750px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-blue-900">Dựa vào bảng số liệu, điều khiến nhiều bạn cảm thấy nhớ nhất là:</p>
                            <div class="w-full">
                                <select id="in-151-1-ans" class="w-full md:w-auto h-14 border-2 border-blue-600 rounded-2xl px-4 font-black text-blue-600 outline-none bg-white text-xl md:text-2xl">
                                    <option value="">-- Chọn một yếu tố --</option>
                                    <option value="Khuôn viên trường học">Khuôn viên trường học</option>
                                    <option value="Bạn bè">Bạn bè</option>
                                    <option value="Thầy cô">Thầy cô</option>
                                    <option value="Thư viện của trường">Thư viện của trường</option>
                                    <option value="Khác">Khác</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-151-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        Quan sát số liệu bình chọn của các yếu tố trong bảng.<br>
                        Yếu tố nào có số bạn chọn lớn nhất (ví dụ: Bạn bè với 12 bạn chọn) là điều khiến nhiều bạn cảm thấy nhớ nhất ở trường tiểu học.<br>
                        Em làm bài thu thập và biểu diễn số liệu rất chính xác!
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-151-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-151-1" onclick="window.submitEx151_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 99) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Khảo sát mức độ hài lòng về trường học</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Khảo sát mức độ hài lòng của mỗi bạn trong nhóm và ghi lại kết quả dãy số điểm quy ước: Rất hài lòng (5 điểm), Hài lòng (4 điểm), Bình thường (3 điểm), Chưa hài lòng một số điểm (2 điểm), Không hài lòng (1 điểm).</p>
                        </div>
                    </div>

                    <!-- Bảng quy ước điểm SGK -->
                    <div class="overflow-x-auto rounded-3xl border-2 border-teal-200 mb-6">
                        <table class="w-full border-collapse text-center font-black text-lg md:text-xl">
                            <thead>
                                <tr class="bg-teal-600 text-white">
                                    <th class="p-4 border-r border-teal-400">Mức độ</th>
                                    <th class="p-4 border-r border-teal-400">Rất hài lòng</th>
                                    <th class="p-4 border-r border-teal-400">Hài lòng</th>
                                    <th class="p-4 border-r border-teal-400">Bình thường</th>
                                    <th class="p-4 border-r border-teal-400">Không hài lòng một số điểm</th>
                                    <th class="p-4">Không hài lòng</th>
                                </tr>
                            </thead>
                            <tbody class="bg-teal-50/40 text-slate-800 text-xl md:text-2xl">
                                <tr>
                                    <td class="p-4 border-r border-teal-100 font-bold bg-teal-100/50">Số điểm</td>
                                    <td class="p-4 border-r border-teal-100 text-teal-700 font-black">5</td>
                                    <td class="p-4 border-r border-teal-100 text-teal-700 font-black">4</td>
                                    <td class="p-4 border-r border-teal-100 text-teal-700 font-black">3</td>
                                    <td class="p-4 border-r border-teal-100 text-teal-700 font-black">2</td>
                                    <td class="p-4 text-teal-700 font-black">1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Hình minh họa SGK Trang 99 HÌNH TO RÕ NÉT -->
                    <div class="mb-8 text-center bg-teal-50/50 p-6 rounded-[2.5rem] border-2 border-teal-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/151/151-2-hai-long.png" alt="Khảo sát mức độ hài lòng với trường" class="rounded-2xl w-full max-w-[650px] md:max-w-[750px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-teal-900">a) Hoàn thành bảng số liệu (nhập số bạn đạt từng mức điểm):</p>
                            <div class="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
                                <div class="bg-white p-3 rounded-2xl border border-teal-200 flex flex-col items-center gap-1">
                                    <span class="text-base font-bold text-slate-700">1 điểm</span>
                                    <input type="number" id="in-151-2-count-1" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center outline-none font-black text-teal-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="0" value="0">
                                </div>
                                <div class="bg-white p-3 rounded-2xl border border-teal-200 flex flex-col items-center gap-1">
                                    <span class="text-base font-bold text-slate-700">2 điểm</span>
                                    <input type="number" id="in-151-2-count-2" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center outline-none font-black text-teal-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="1" value="1">
                                </div>
                                <div class="bg-white p-3 rounded-2xl border border-teal-200 flex flex-col items-center gap-1">
                                    <span class="text-base font-bold text-slate-700">3 điểm</span>
                                    <input type="number" id="in-151-2-count-3" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center outline-none font-black text-teal-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="2" value="2">
                                </div>
                                <div class="bg-white p-3 rounded-2xl border border-teal-200 flex flex-col items-center gap-1">
                                    <span class="text-base font-bold text-slate-700">4 điểm</span>
                                    <input type="number" id="in-151-2-count-4" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center outline-none font-black text-teal-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="4" value="4">
                                </div>
                                <div class="bg-white p-3 rounded-2xl border border-teal-200 flex flex-col items-center gap-1">
                                    <span class="text-base font-bold text-slate-700">5 điểm</span>
                                    <input type="number" id="in-151-2-count-5" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center outline-none font-black text-teal-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="3" value="3">
                                </div>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-teal-900">b) Quan sát bảng số liệu và trả lời 3 câu hỏi:</p>
                            <div class="space-y-3">
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>1) Số bạn cảm thấy <b>RẤT HÀI LÒNG</b> (5 điểm) =</span>
                                    <span class="inline-flex items-center flex-nowrap gap-2">
                                        <input type="number" id="in-151-2-ans1" class="w-20 h-12 border-2 border-teal-600 rounded-xl text-center text-xl md:text-2xl font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        <span class="font-bold text-slate-800">bạn</span>
                                    </span>
                                </div>
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>2) Số điểm xuất hiện <b>NHIỀU NHẤT</b> =</span>
                                    <span class="inline-flex items-center flex-nowrap gap-2">
                                        <input type="number" id="in-151-2-ans2" class="w-20 h-12 border-2 border-teal-600 rounded-xl text-center text-xl md:text-2xl font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        <span class="font-bold text-slate-800">điểm</span>
                                    </span>
                                </div>
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>3) Số điểm <b>TRUNG BÌNH</b> về mức độ hài lòng =</span>
                                    <span class="inline-flex items-center flex-nowrap gap-2">
                                        <input type="number" step="0.1" id="in-151-2-ans3" class="w-24 h-12 border-2 border-teal-600 rounded-xl text-center text-xl md:text-2xl font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        <span class="font-bold text-slate-800">điểm</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-151-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        • Số bạn Rất hài lòng (5 điểm) chính là số bạn ở cột 5 điểm trong bảng.<br>
                        • Điểm xuất hiện nhiều nhất là điểm có số lượng bạn bình chọn cao nhất.<br>
                        • Điểm trung bình = (Tổng số điểm của tất cả các bạn) : (Tổng số bạn).<br>
                        Ví dụ: Dãy điểm (0×1 + 1×2 + 2×3 + 4×4 + 3×5) : 10 = 39 : 10 = 3,9 điểm.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-151-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-151-2" onclick="window.submitEx151_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson151QuizPool = [
    { question: "Trong thống kê, 'số bạn chọn' một yếu tố nào đó đại diện cho điều gì?", options: ["Tần số số liệu", "Đơn vị đo", "Tên yếu tố", "Dãy số"], answer: 0, level: "easy" },
    { question: "Nếu cột 'Bạn bè' cao nhất trong khảo sát, điều đó có nghĩa là gì?", options: ["Nhiều bạn nhớ về bạn bè nhất", "Ít bạn nhớ về bạn bè nhất", "Mọi người nhớ thầy cô nhất", "Không có ý nghĩa gì"], answer: 0, level: "easy" },
    { question: "Để tính điểm trung bình hài lòng của 10 bạn, ta làm thế nào?", options: ["(Tổng điểm của 10 bạn) : 10", "Lấy điểm lớn nhất + điểm nhỏ nhất", "Lấy điểm bạn ở giữa", "Lấy điểm lớn nhất - điểm nhỏ nhất"], answer: 0, level: "easy" },
    { question: "Quy ước: Rất hài lòng là 5 điểm. Nếu có 4 bạn rất hài lòng thì tổng điểm là:", options: ["20 điểm", "5 điểm", "4 điểm", "9 điểm"], answer: 0, level: "easy" },
    { question: "Nếu dãy số điểm là 5, 5, 4, 3 thì điểm số nào xuất hiện nhiều nhất?", options: ["Điểm 5", "Điểm 4", "Điểm 3", "Cả 3 điểm"], answer: 0, level: "easy" },
    { question: "Khi thực hiện một cuộc khảo sát, bước đầu tiên cần làm là gì?", options: ["Xác định nội dung và đối tượng khảo sát", "Vẽ biểu đồ", "Tính điểm trung bình", "Viết báo cáo"], answer: 0, level: "easy" },
    { question: "Mức độ 'Không hài lòng' tương ứng với bao nhiêu điểm theo SGK?", options: ["1 điểm", "2 điểm", "3 điểm", "0 điểm"], answer: 0, level: "easy" },
    { question: "Nếu bạn A cho 5 điểm, bạn B cho 3 điểm, điểm trung bình của 2 bạn là bao nhiêu?", options: ["4 điểm", "3 điểm", "5 điểm", "8 điểm"], answer: 0, level: "easy" },
    { question: "Nếu tổng điểm của nhóm là 30 điểm và có 10 bạn, điểm trung bình là:", options: ["3 điểm", "2 điểm", "4 điểm", "5 điểm"], answer: 0, level: "easy" },
    { question: "Quy ước: Hài lòng tương ứng với mấy điểm theo SGK?", options: ["4 điểm", "5 điểm", "3 điểm", "2 điểm"], answer: 0, level: "easy" },
    { question: "Sân bóng rổ thuộc nhóm yếu tố khảo sát nào ở Bài 1 nếu không liệt kê?", options: ["Khác", "Thầy cô", "Thư viện", "Bạn bè"], answer: 0, level: "easy" },
    { question: "Bảng thống kê giúp ta điều gì khi phân tích số liệu?", options: ["Dễ quan sát, so sánh và xử lý số liệu", "Làm bảng đẹp hơn", "Tốn nhiều thời gian hơn", "Không có tác dụng gì"], answer: 0, level: "easy" },
    { question: "Nếu 5 bạn đều cho 4 điểm thì điểm trung bình của nhóm là bao nhiêu?", options: ["4 điểm", "5 điểm", "20 điểm", "1 điểm"], answer: 0, level: "easy" },
    { question: "Quy ước: Bình thường tương ứng với mấy điểm theo SGK?", options: ["3 điểm", "2 điểm", "4 điểm", "5 điểm"], answer: 0, level: "easy" },
    { question: "Ý nghĩa của việc thu thập mức độ hài lòng về trường học là:", options: ["Hiểu cảm nhận chung để cải thiện môi trường học", "Để so sánh điểm các bạn", "Để vẽ biểu đồ trang trí", "Không có ý nghĩa gì"], answer: 0, level: "easy" }
];

// 5. Global Handlers & State
window.submitEx151_1 = function () {
    const c1 = document.getElementById('in-151-1-1')?.value.trim();
    const c2 = document.getElementById('in-151-1-2')?.value.trim();
    const c3 = document.getElementById('in-151-1-3')?.value.trim();
    const c4 = document.getElementById('in-151-1-4')?.value.trim();
    const c5 = document.getElementById('in-151-1-5')?.value.trim();
    const ans = document.getElementById('in-151-1-ans')?.value;

    if (!c1 || !c2 || !c3 || !c4 || !c5 || !ans) {
        alert("Em hãy nhập đầy đủ số bạn cho 5 yếu tố và chọn yếu tố được nhớ tới nhiều nhất!");
        return;
    }

    const counts = [parseInt(c1), parseInt(c2), parseInt(c3), parseInt(c4), parseInt(c5)];
    const factors = ["Khuôn viên trường học", "Bạn bè", "Thầy cô", "Thư viện của trường", "Khác"];
    const maxVal = Math.max(...counts);
    const expectedWinners = factors.filter((f, idx) => counts[idx] === maxVal);

    const isCorrect = expectedWinners.includes(ans);

    window.showMathFeedback(
        isCorrect,
        `Yếu tố nhiều nhất: ${expectedWinners.join(' hoặc ')}`,
        `Nhập số bạn: ${c1}, ${c2}, ${c3}, ${c4}, ${c5} ; Bạn chọn: ${ans}`,
        "Em hãy đếm số bạn lựa chọn ở từng yếu tố, sau đó so sánh số lượng để tìm ra yếu tố được nhiều bạn nhớ nhất nhé!",
        `
        • Khuôn viên trường học: ${c1} bạn.<br>
        • Bạn bè: ${c2} bạn.<br>
        • Thầy cô: ${c3} bạn.<br>
        • Thư viện của trường: ${c4} bạn.<br>
        • Khác: ${c5} bạn.<br>
        Yếu tố được nhiều bạn nhớ nhất là: ${expectedWinners.join(' hoặc ')}.<br>
        Em thực hiện cuộc khảo sát và phân tích số liệu rất xuất sắc!
        `
    );

    window.submitMathLesson(metadata.title, isCorrect ? 100 : 0, "btn-submit-151-1", 0, 1, isCorrect ? 1 : 0);
};

window.submitEx151_2 = function () {
    const c1 = document.getElementById('in-151-2-count-1')?.value.trim();
    const c2 = document.getElementById('in-151-2-count-2')?.value.trim();
    const c3 = document.getElementById('in-151-2-count-3')?.value.trim();
    const c4 = document.getElementById('in-151-2-count-4')?.value.trim();
    const c5 = document.getElementById('in-151-2-count-5')?.value.trim();

    const ans1 = document.getElementById('in-151-2-ans1')?.value.trim();
    const ans2 = document.getElementById('in-151-2-ans2')?.value.trim();
    const ans3 = document.getElementById('in-151-2-ans3')?.value.trim();

    if (!c1 || !c2 || !c3 || !c4 || !c5 || !ans1 || !ans2 || !ans3) {
        alert("Em hãy điền đầy đủ bảng số liệu và 3 câu hỏi khảo sát mức độ hài lòng!");
        return;
    }

    const counts = [parseInt(c1), parseInt(c2), parseInt(c3), parseInt(c4), parseInt(c5)];
    const totalStudents = counts.reduce((a, b) => a + b, 0);
    const totalPoints = counts.reduce((sum, val, idx) => sum + (val * (idx + 1)), 0);
    const expAvg = (totalStudents > 0) ? (totalPoints / totalStudents).toFixed(1) : 0;

    const maxCount = Math.max(...counts);
    const expectedModes = counts.map((val, idx) => (val === maxCount) ? (idx + 1) : null).filter(v => v !== null);

    const check1 = (parseInt(ans1) === parseInt(c5));
    const check2 = expectedModes.includes(parseInt(ans2));
    const check3 = (Math.abs(parseFloat(ans3) - parseFloat(expAvg)) <= 0.2);

    const correctCount = (check1 ? 1 : 0) + (check2 ? 1 : 0) + (check3 ? 1 : 0);
    const isCorrect = (correctCount === 3);
    const score = Math.round((correctCount / 3) * 100);

    window.showMathFeedback(
        isCorrect,
        `Rất hài lòng: ${c5} bạn ; Điểm nhiều nhất: ${expectedModes.join(' hoặc ')} ; Điểm trung bình: ${expAvg}`,
        `Trả lời: 1) ${ans1} bạn ; 2) ${ans2} điểm ; 3) ${ans3} điểm`,
        "Em hãy đếm số bạn ở từng mức điểm (1, 2, 3, 4, 5), xác định số bạn đạt 5 điểm, tìm điểm số có số bạn đông nhất và tính điểm trung bình bằng cách lấy tổng số điểm chia cho tổng số bạn nhé!",
        `
        • Số bạn cảm thấy Rất hài lòng (5 điểm): ${c5} bạn.<br>
        • Số điểm xuất hiện nhiều nhất: ${expectedModes.join(' hoặc ')} điểm.<br>
        • Tổng số điểm: ${totalPoints} điểm. Tổng số bạn: ${totalStudents} bạn.<br>
        • Số điểm trung bình = ${totalPoints} : ${totalStudents} = ${expAvg} điểm.<br>
        Em xử lý dãy số liệu và tính trung bình cộng khảo sát rất tốt!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-151-2", 0, 3, correctCount);
};

// 6. Main Lesson Export
export const lesson151 = {
    topic: "Số liệu và Biểu đồ",
    week: "31",
    period: "151",
    title: metadata.title || lessonInfo.title,
    desc: lessonInfo.description,
    content: lesson151Content,
    practice: lesson151Practice,
    quizPool: lesson151QuizPool,
    metadata,
    lessonInfo,
    onLoad: () => {
        console.log("Lesson 151 Loaded: Bài 66. Thực hành và trải nghiệm thu thập, phân tích, biểu diễn các số liệu thống kê (tiết 2)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};

window.lesson151 = lesson151;
export default lesson151;
