/**
 * @file index.js
 * @description Standardized Lesson 150: Bài 66. Thực hành và trải nghiệm thu thập, phân tích, biểu diễn các số liệu thống kê (tiết 1)
 * Targets: 100% SGK compliance (Trang 96-97), 2 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-150",
    period: "150",
    title: "Bài 66. Thực hành và trải nghiệm thu thập, phân tích, biểu diễn các số liệu thống kê (tiết 1)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 66. THỰC HÀNH VÀ TRẢI NGHIỆM THU THẬP, PHÂN TÍCH, BIỂU DIỄN CÁC SỐ LIỆU THỐNG KÊ (TIẾT 1)",
    description: "Học sinh thực hành thu thập số liệu thông qua các hoạt động thực tế và dự án đổi đồ cũ lấy cây xanh.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 96-97"
};

// 2. HTML Content (Khám phá / Lý thuyết - Trang 96-97)
const lesson150Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">🛠️ THỰC HÀNH VÀ TRẢI NGHIỆM THỐNG KÊ</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-lg md:text-xl">
                    <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-200 space-y-2">
                        <p class="font-black text-blue-800 text-xl md:text-2xl">📊 Thu thập & Kiểm đếm:</p>
                        <p class="text-slate-800">• Dùng xúc xắc gieo ngẫu nhiên chia nhóm.</p>
                        <p class="text-slate-800">• Dùng phương pháp gạch sổ đếm số lượng.</p>
                    </div>
                    <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-200 space-y-2">
                        <p class="font-black text-teal-800 text-xl md:text-2xl">🌱 Phân tích số liệu & Quy đổi:</p>
                        <p class="text-slate-800">• Tính tỉ số lặp lại khả năng xảy ra.</p>
                        <p class="text-slate-800">• Quy đổi đồ quyên góp lấy cây trồng.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 2 Slide phụ - Trang 96-97)
const lesson150Practice = `
<style>
    .dice-scene-150 {
        width: 120px;
        height: 120px;
        perspective: 1000px;
        margin: 20px auto;
        display: block;
        position: relative;
    }
    .dice-cube-150 {
        width: 90px;
        height: 90px;
        position: absolute;
        top: 15px;
        left: 15px;
        transform-style: preserve-3d;
        transition: transform 1.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
        transform: rotateX(-20deg) rotateY(30deg);
        z-index: 10;
    }
    .dice-face-150 {
        position: absolute;
        width: 90px;
        height: 90px;
        background: white !important;
        border: 3px solid #2563eb !important;
        border-radius: 16px;
        display: grid;
        grid-template: repeat(3, 1fr) / repeat(3, 1fr);
        padding: 10px;
        box-shadow: inset 0 0 12px rgba(37, 99, 235, 0.15), 0 4px 12px rgba(0,0,0,0.1);
        backface-visibility: visible !important;
    }
    .dice-dot-150 {
        background: #2563eb !important;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin: auto;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.4);
    }
    .df150-1 { transform: rotateY(0deg) translateZ(45px); }
    .df150-6 { transform: rotateY(180deg) translateZ(45px); }
    .df150-3 { transform: rotateY(90deg) translateZ(45px); }
    .df150-4 { transform: rotateY(-90deg) translateZ(45px); }
    .df150-2 { transform: rotateX(90deg) translateZ(45px); }
    .df150-5 { transform: rotateX(-90deg) translateZ(45px); }

    .df150-1 .dice-dot-150:nth-child(1) { grid-area: 2/2; }
    .df150-2 .dice-dot-150:nth-child(1) { grid-area: 1/1; } .df150-2 .dice-dot-150:nth-child(2) { grid-area: 3/3; }
    .df150-3 .dice-dot-150:nth-child(1) { grid-area: 1/1; } .df150-3 .dice-dot-150:nth-child(2) { grid-area: 2/2; } .df150-3 .dice-dot-150:nth-child(3) { grid-area: 3/3; }
    .df150-4 .dice-dot-150:nth-child(1) { grid-area: 1/1; } .df150-4 .dice-dot-150:nth-child(2) { grid-area: 1/3; } .df150-4 .dice-dot-150:nth-child(3) { grid-area: 3/1; } .df150-4 .dice-dot-150:nth-child(4) { grid-area: 3/3; }
    .df150-5 .dice-dot-150:nth-child(1) { grid-area: 1/1; } .df150-5 .dice-dot-150:nth-child(2) { grid-area: 1/3; } .df150-5 .dice-dot-150:nth-child(3) { grid-area: 2/2; } .df150-5 .dice-dot-150:nth-child(4) { grid-area: 3/1; } .df150-5 .dice-dot-150:nth-child(5) { grid-area: 3/3; }
    .df150-6 .dice-dot-150:nth-child(1) { grid-area: 1/1; } .df150-6 .dice-dot-150:nth-child(2) { grid-area: 1/3; } .df150-6 .dice-dot-150:nth-child(3) { grid-area: 2/1; } .df150-6 .dice-dot-150:nth-child(4) { grid-area: 2/3; } .df150-6 .dice-dot-150:nth-child(5) { grid-area: 3/1; } .df150-6 .dice-dot-150:nth-child(6) { grid-area: 3/3; }
</style>

<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 96-97) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Gieo xúc xắc chia nhóm phân công dọn dẹp lớp học</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Cuối tuần này lớp tổ chức "Đổi cũ lấy mới". Rô-bốt đề xuất gieo xúc xắc để chia nhóm phân công nhiệm vụ dọn dẹp:</p>
                        </div>
                    </div>

                    <!-- Bảng quy định nhiệm vụ gieo xúc xắc -->
                    <div class="overflow-x-auto rounded-3xl border-2 border-blue-200 mb-6">
                        <table class="w-full border-collapse text-center font-black text-lg md:text-xl">
                            <thead>
                                <tr class="bg-blue-600 text-white">
                                    <th class="p-4 border-r border-blue-400">Mặt trên</th>
                                    <th class="p-4 border-r border-blue-400">⚀ (1 chấm)</th>
                                    <th class="p-4 border-r border-blue-400">⚁ (2 chấm)</th>
                                    <th class="p-4 border-r border-blue-400">⚂ ⚃ (3, 4 chấm)</th>
                                    <th class="p-4">⚄ ⚅ (5, 6 chấm)</th>
                                </tr>
                            </thead>
                            <tbody class="bg-blue-50/40 text-slate-800 text-xl md:text-2xl">
                                <tr>
                                    <td class="p-4 border-r border-blue-100 font-bold bg-blue-100/50">Nhiệm vụ</td>
                                    <td class="p-4 border-r border-blue-100 text-blue-700 font-black">Quét và lau sàn</td>
                                    <td class="p-4 border-r border-blue-100 text-blue-700 font-black">Lau cửa</td>
                                    <td class="p-4 border-r border-blue-100 text-blue-700 font-black">Kê bàn ghế</td>
                                    <td class="p-4 text-blue-700 font-black">Trang trí lớp</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Hình Dọn dẹp phòng học SGK Trang 96 HÌNH TO RÕ NÉT -->
                    <div class="mb-8 text-center bg-blue-50/50 p-6 rounded-[2.5rem] border-2 border-blue-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/150/150-1-lop-hoc.png" alt="Cả lớp dọn dẹp lớp học" class="rounded-2xl w-full max-w-[650px] md:max-w-[750px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <!-- Khung Gieo xúc xắc 3D thực nghiệm -->
                    <div class="p-6 bg-blue-50/70 rounded-[2.5rem] border-2 border-blue-100 mb-8 text-center space-y-4">
                        <div class="dice-scene-150">
                            <div id="dice-cube-150" class="dice-cube-150">
                                <div class="dice-face-150 df150-1"><div class="dice-dot-150"></div></div>
                                <div class="dice-face-150 df150-2"><div class="dice-dot-150"></div><div class="dice-dot-150"></div></div>
                                <div class="dice-face-150 df150-3"><div class="dice-dot-150"></div><div class="dice-dot-150"></div><div class="dice-dot-150"></div></div>
                                <div class="dice-face-150 df150-4"><div class="dice-dot-150"></div><div class="dice-dot-150"></div><div class="dice-dot-150"></div><div class="dice-dot-150"></div></div>
                                <div class="dice-face-150 df150-5"><div class="dice-dot-150"></div><div class="dice-dot-150"></div><div class="dice-dot-150"></div><div class="dice-dot-150"></div><div class="dice-dot-150"></div></div>
                                <div class="dice-face-150 df150-6"><div class="dice-dot-150"></div><div class="dice-dot-150"></div><div class="dice-dot-150"></div><div class="dice-dot-150"></div><div class="dice-dot-150"></div><div class="dice-dot-150"></div></div>
                            </div>
                        </div>

                        <div class="flex items-center justify-center gap-6">
                            <span class="text-xl md:text-2xl font-black text-blue-900">Đã gieo: <span id="roll-total-150" class="text-blue-600 font-extrabold text-2xl md:text-3xl">0</span> bạn</span>
                            <button id="btn-roll-150" onclick="window.rollDice150()" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-xl rounded-2xl shadow-md active:scale-95 transition-all">🎲 GIEO XÚC XẮC PHÂN CÔNG</button>
                        </div>

                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                            <div class="bg-white p-3 rounded-2xl border border-blue-200 font-bold text-base md:text-lg text-slate-800">
                                Lau sàn (⚀): <span id="res-150-1" class="text-blue-600 font-black text-xl md:text-2xl">0</span>
                            </div>
                            <div class="bg-white p-3 rounded-2xl border border-blue-200 font-bold text-base md:text-lg text-slate-800">
                                Lau cửa (⚁): <span id="res-150-2" class="text-blue-600 font-black text-xl md:text-2xl">0</span>
                            </div>
                            <div class="bg-white p-3 rounded-2xl border border-blue-200 font-bold text-base md:text-lg text-slate-800">
                                Kê bàn (⚂⚃): <span id="res-150-34" class="text-blue-600 font-black text-xl md:text-2xl">0</span>
                            </div>
                            <div class="bg-white p-3 rounded-2xl border border-blue-200 font-bold text-base md:text-lg text-slate-800">
                                Trang trí (⚄⚅): <span id="res-150-56" class="text-blue-600 font-black text-xl md:text-2xl">0</span>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <p class="text-xl md:text-2xl font-black text-blue-900">Hoàn thành bảng thống kê chia nhóm và trả lời câu hỏi:</p>

                        <!-- Ô nhập số bạn từng nhóm -->
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-blue-900">Số bạn từng nhóm sau khi gieo xúc xắc:</p>
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div class="flex flex-col items-center gap-1 bg-white p-3 rounded-2xl border border-blue-200">
                                    <span class="text-base font-bold text-slate-700">Quét & lau sàn</span>
                                    <input type="number" id="in-150-1-1" class="w-16 h-12 border-2 border-blue-600 rounded-xl text-center outline-none font-black text-blue-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                </div>
                                <div class="flex flex-col items-center gap-1 bg-white p-3 rounded-2xl border border-blue-200">
                                    <span class="text-base font-bold text-slate-700">Lau cửa</span>
                                    <input type="number" id="in-150-1-2" class="w-16 h-12 border-2 border-blue-600 rounded-xl text-center outline-none font-black text-blue-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                </div>
                                <div class="flex flex-col items-center gap-1 bg-white p-3 rounded-2xl border border-blue-200">
                                    <span class="text-base font-bold text-slate-700">Kê bàn ghế</span>
                                    <input type="number" id="in-150-1-3" class="w-16 h-12 border-2 border-blue-600 rounded-xl text-center outline-none font-black text-blue-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                </div>
                                <div class="flex flex-col items-center gap-1 bg-white p-3 rounded-2xl border border-blue-200">
                                    <span class="text-base font-bold text-slate-700">Trang trí lớp</span>
                                    <input type="number" id="in-150-1-4" class="w-16 h-12 border-2 border-blue-600 rounded-xl text-center outline-none font-black text-blue-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                </div>
                            </div>
                        </div>

                        <!-- a & b -->
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm space-y-4">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                <span class="text-blue-900 font-extrabold">a) Nhóm có nhiều bạn nhất =</span>
                                <select id="in-150-1-most" class="h-14 border-2 border-blue-600 rounded-2xl px-4 font-black text-blue-600 outline-none bg-white">
                                    <option value="">-- Chọn nhóm --</option>
                                    <option value="Quét và lau sàn">Quét và lau sàn</option>
                                    <option value="Lau cửa">Lau cửa</option>
                                    <option value="Kê bàn ghế">Kê bàn ghế</option>
                                    <option value="Trang trí lớp">Trang trí lớp</option>
                                </select>
                            </div>
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800 border-t border-blue-200 pt-3">
                                <span class="text-blue-900 font-extrabold">b) Tỉ số xuất hiện mặt 1 chấm so với tổng số lần gieo =</span>
                                <div class="flex items-center gap-2 text-xl md:text-3xl font-black text-blue-600">
                                    <input type="number" id="in-150-1-ratio-up" class="w-16 h-12 border-2 border-blue-600 rounded-xl text-center outline-none font-black text-blue-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    <span class="text-slate-400">/</span>
                                    <input type="number" id="in-150-1-ratio-down" class="w-16 h-12 border-2 border-blue-600 rounded-xl text-center outline-none font-black text-blue-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-150-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        a) Đếm số bạn gieo được của từng nhóm và so sánh nhóm có số bạn đông nhất.<br>
                        b) Tỉ số xuất hiện mặt 1 chấm = (Số bạn gieo được mặt 1 chấm) / (Tổng số bạn gieo xúc xắc).<br>
                        Em đã chia nhóm và thống kê nhiệm vụ lớp học rất xuất sắc!
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-150-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-150-1" onclick="window.submitEx150_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 97) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Dự án "Đổi đồ cũ lấy cây xanh"</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Lớp tiếp nhận quần áo mùa hè và lịch cũ để quyên góp. Quy tắc đổi các chậu cây giống:</p>
                        </div>
                    </div>

                    <!-- Bảng quy đổi quà tặng SGK -->
                    <div class="overflow-x-auto rounded-3xl border-2 border-teal-200 mb-6">
                        <table class="w-full border-collapse text-center font-black text-lg md:text-xl">
                            <thead>
                                <tr class="bg-teal-600 text-white">
                                    <th class="p-4 border-r border-teal-400">Đồ vật quyên góp</th>
                                    <th class="p-4 border-r border-teal-400">2 chiếc áo 👕</th>
                                    <th class="p-4 border-r border-teal-400">1 chiếc quần dài 👖</th>
                                    <th class="p-4">2 quyển lịch cũ 📅</th>
                                </tr>
                            </thead>
                            <tbody class="bg-teal-50/40 text-slate-800 text-xl md:text-2xl">
                                <tr>
                                    <td class="p-4 border-r border-teal-100 font-bold bg-teal-100/50">Cây đổi được</td>
                                    <td class="p-4 border-r border-teal-100 text-teal-700 font-black">1 cây cà chua 🍅</td>
                                    <td class="p-4 border-r border-teal-100 text-teal-700 font-black">1 cây chà là 🌴</td>
                                    <td class="p-4 text-teal-700 font-black">1 cây bơ 🥑</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Hình Quyên góp đổi cây SGK Trang 97 HÌNH TO RÕ NÉT -->
                    <div class="mb-8 text-center bg-teal-50/50 p-6 rounded-[2.5rem] border-2 border-teal-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/150/150-2-doi-do.png" alt="Học sinh quyên góp đồ cũ đổi cây" class="rounded-2xl w-full max-w-[650px] md:max-w-[750px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <p class="text-xl md:text-2xl font-black text-teal-900">Nhập số lượng đồ vật quyên góp và tính số cây tương ứng đổi được:</p>

                        <!-- Bảng số lượng quyên góp -->
                        <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-teal-900">1. Số lượng đồ vật quyên góp được của lớp:</p>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl font-bold text-slate-800 bg-white p-3 rounded-2xl border border-teal-200">
                                    <span>• Số Áo =</span>
                                    <input type="number" id="in-150-2-shirts" class="w-20 h-12 border-2 border-teal-600 rounded-xl text-center outline-none font-black text-teal-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="10" value="10">
                                    <span>chiếc</span>
                                </div>
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl font-bold text-slate-800 bg-white p-3 rounded-2xl border border-teal-200">
                                    <span>• Quần dài =</span>
                                    <input type="number" id="in-150-2-pants" class="w-20 h-12 border-2 border-teal-600 rounded-xl text-center outline-none font-black text-teal-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="6" value="6">
                                    <span>chiếc</span>
                                </div>
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl font-bold text-slate-800 bg-white p-3 rounded-2xl border border-teal-200">
                                    <span>• Quyển lịch =</span>
                                    <input type="number" id="in-150-2-cals" class="w-20 h-12 border-2 border-teal-600 rounded-xl text-center outline-none font-black text-teal-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="8" value="8">
                                    <span>quyển</span>
                                </div>
                            </div>
                        </div>

                        <!-- Tính số cây đổi được -->
                        <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-teal-900">2. Tính số lượng cây tương ứng đổi được:</p>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl font-bold text-slate-800 bg-white p-3 rounded-2xl border border-teal-200">
                                    <span>🍅 Cà chua =</span>
                                    <input type="number" id="in-150-2-tree-tomato" class="w-20 h-12 border-2 border-teal-600 rounded-xl text-center outline-none font-black text-teal-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    <span>cây</span>
                                </div>
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl font-bold text-slate-800 bg-white p-3 rounded-2xl border border-teal-200">
                                    <span>🌴 Chà là =</span>
                                    <input type="number" id="in-150-2-tree-date" class="w-20 h-12 border-2 border-teal-600 rounded-xl text-center outline-none font-black text-teal-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    <span>cây</span>
                                </div>
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl font-bold text-slate-800 bg-white p-3 rounded-2xl border border-teal-200">
                                    <span>🥑 Cây bơ =</span>
                                    <input type="number" id="in-150-2-tree-avocado" class="w-20 h-12 border-2 border-teal-600 rounded-xl text-center outline-none font-black text-teal-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    <span>cây</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-150-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        Theo tỉ lệ quy đổi:<br>
                        • Số cây cà chua = (Số chiếc áo) : 2.<br>
                        • Số cây chà là = Số chiếc quần dài.<br>
                        • Số cây bơ = (Số quyển lịch cũ) : 2.<br>
                        Ví dụ: 10 áo, 6 quần, 8 lịch -> Đổi được 5 cây cà chua, 6 cây chà là, 4 cây bơ.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-150-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-150-2" onclick="window.submitEx150_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson150QuizPool = [
    { question: "Trong Hoạt động 1, nếu gieo được mặt 1 chấm, em thuộc nhóm nhiệm vụ nào?", options: ["Quét và lau sàn", "Lau cửa", "Kê bàn ghế", "Trang trí lớp"], answer: 0, level: "easy" },
    { question: "Trong Hoạt động 1, mặt 2 chấm tương ứng với nhiệm vụ nào?", options: ["Lau cửa", "Quét và lau sàn", "Kê bàn ghế", "Trang trí lớp"], answer: 0, level: "easy" },
    { question: "Mặt 3 và 4 chấm tương ứng với nhiệm vụ nào?", options: ["Kê bàn ghế", "Lau cửa", "Quét và lau sàn", "Trang trí lớp"], answer: 0, level: "easy" },
    { question: "Mặt 5 và 6 chấm tương ứng với nhiệm vụ nào?", options: ["Trang trí lớp", "Kê bàn ghế", "Lau cửa", "Quét và lau sàn"], answer: 0, level: "easy" },
    { question: "Để đổi được 1 cây cà chua 🍅, em cần quyên góp bao nhiêu chiếc áo?", options: ["2 chiếc áo", "1 chiếc áo", "3 chiếc áo", "4 chiếc áo"], answer: 0, level: "easy" },
    { question: "Để đổi được 1 cây chà là 🌴, em cần quyên góp bao nhiêu quần dài?", options: ["1 chiếc quần dài", "2 chiếc quần dài", "3 chiếc quần dài", "4 chiếc quần dài"], answer: 0, level: "easy" },
    { question: "Để đổi được 1 cây bơ 🥑, em cần quyên góp bao nhiêu quyển lịch cũ?", options: ["2 quyển lịch", "1 quyển lịch", "3 quyển lịch", "4 quyển lịch"], answer: 0, level: "easy" },
    { question: "Nếu quyên góp được 10 chiếc áo, em đổi được bao nhiêu cây cà chua?", options: ["5 cây", "10 cây", "2 cây", "20 cây"], answer: 0, level: "easy" },
    { question: "Nếu quyên góp được 8 quyển lịch cũ, em đổi được bao nhiêu cây bơ?", options: ["4 cây", "8 cây", "2 cây", "16 cây"], answer: 0, level: "easy" },
    { question: "Nếu gieo xúc xắc 20 lần, gieo được mặt 1 chấm 4 lần. Tỉ số mặt 1 chấm là:", options: ["4/20", "16/20", "20/4", "4/16"], answer: 0, level: "easy" },
    { question: "Gạch kiểm đếm sổ 5 gạch gồm:", options: ["4 gạch dọc, 1 gạch chéo", "5 gạch ngang", "5 gạch dọc", "3 gạch dọc, 2 gạch chéo"], answer: 0, level: "easy" },
    { question: "Công thức tính tỉ số xác suất thực nghiệm sự kiện A là:", options: ["(Số lần xuất hiện A) / (Tổng số lần gieo thử)", "(Tổng số lần gieo) / (Số lần A)", "Số lần A × 100%", "Tổng số lần gieo - Số lần A"], answer: 0, level: "easy" },
    { question: "Quyên góp 6 chiếc quần dài đổi được bao nhiêu cây chà là?", options: ["6 cây", "3 cây", "12 cây", "2 cây"], answer: 0, level: "easy" },
    { question: "Quyên góp 14 chiếc áo đổi được bao nhiêu cây cà chua?", options: ["7 cây", "14 cây", "28 cây", "4 cây"], answer: 0, level: "easy" },
    { question: "Tỉ số lặp lại một sự kiện luôn nằm trong khoảng nào?", options: ["Từ 0 đến 1", "Từ 1 đến 10", "Lớn hơn 1", "Nhỏ hơn 0"], answer: 0, level: "easy" }
];

// 5. Global Handlers & State
window.rolls_150 = { r1: 0, r2: 0, r34: 0, r56: 0, total: 0 };

window.rollDice150 = function () {
    const btn = document.getElementById('btn-roll-150');
    const cube = document.getElementById('dice-cube-150');
    if (!btn || !cube) return;

    btn.disabled = true;

    const randX = Math.floor(Math.random() * 3 + 4) * 360;
    const randY = Math.floor(Math.random() * 3 + 4) * 360;
    const val = Math.floor(Math.random() * 6) + 1;

    const rotations = {
        1: { x: 0, y: 0 },
        2: { x: -90, y: 0 },
        3: { x: 0, y: -90 },
        4: { x: 0, y: 90 },
        5: { x: 90, y: 0 },
        6: { x: 180, y: 0 }
    };

    const targetPos = rotations[val];
    cube.style.transform = `rotateX(${randX + targetPos.x}deg) rotateY(${randY + targetPos.y}deg)`;

    setTimeout(() => {
        window.rolls_150.total++;
        if (val === 1) window.rolls_150.r1++;
        else if (val === 2) window.rolls_150.r2++;
        else if (val === 3 || val === 4) window.rolls_150.r34++;
        else window.rolls_150.r56++;

        const totalEl = document.getElementById('roll-total-150');
        const res1El = document.getElementById('res-150-1');
        const res2El = document.getElementById('res-150-2');
        const res34El = document.getElementById('res-150-34');
        const res56El = document.getElementById('res-150-56');

        if (totalEl) totalEl.innerText = window.rolls_150.total;
        if (res1El) res1El.innerText = window.rolls_150.r1;
        if (res2El) res2El.innerText = window.rolls_150.r2;
        if (res34El) res34El.innerText = window.rolls_150.r34;
        if (res56El) res56El.innerText = window.rolls_150.r56;

        btn.disabled = false;
    }, 1200);
};

window.submitEx150_1 = function () {
    const v1 = document.getElementById('in-150-1-1')?.value.trim();
    const v2 = document.getElementById('in-150-1-2')?.value.trim();
    const v3 = document.getElementById('in-150-1-3')?.value.trim();
    const v4 = document.getElementById('in-150-1-4')?.value.trim();
    const most = document.getElementById('in-150-1-most')?.value;
    const ratioUp = document.getElementById('in-150-1-ratio-up')?.value.trim();
    const ratioDown = document.getElementById('in-150-1-ratio-down')?.value.trim();

    if (!v1 || !v2 || !v3 || !v4 || !most || !ratioUp || !ratioDown) {
        alert("Em hãy gieo xúc xắc chia nhóm và điền đầy đủ thông tin thống kê!");
        return;
    }

    const realTotal = window.rolls_150.total;
    const c1 = (parseInt(v1) === window.rolls_150.r1);
    const c2 = (parseInt(v2) === window.rolls_150.r2);
    const c3 = (parseInt(v3) === window.rolls_150.r34);
    const c4 = (parseInt(v4) === window.rolls_150.r56);

    const groups = [
        { name: 'Quét và lau sàn', val: window.rolls_150.r1 },
        { name: 'Lau cửa', val: window.rolls_150.r2 },
        { name: 'Kê bàn ghế', val: window.rolls_150.r34 },
        { name: 'Trang trí lớp', val: window.rolls_150.r56 }
    ];
    const maxVal = Math.max(...groups.map(g => g.val));
    const isMostCorrect = groups.some(g => g.val === maxVal && g.name === most);

    const cRatio = (parseInt(ratioUp) === window.rolls_150.r1 && parseInt(ratioDown) === (realTotal || parseInt(v1) + parseInt(v2) + parseInt(v3) + parseInt(v4)));

    const correctCount = (c1 ? 1 : 0) + (c2 ? 1 : 0) + (c3 ? 1 : 0) + (c4 ? 1 : 0) + (isMostCorrect ? 1 : 0) + (cRatio ? 1 : 0);
    const isCorrect = (correctCount === 6);
    const score = Math.round((correctCount / 6) * 100);

    window.showMathFeedback(
        isCorrect,
        `Mặt 1 chấm: ${window.rolls_150.r1}, Nhóm đông nhất: ${most}, Tỉ số: ${window.rolls_150.r1}/${realTotal}`,
        `Điền: ${v1}, ${v2}, ${v3}, ${v4} ; Đông nhất: ${most} ; Tỉ số: ${ratioUp}/${ratioDown}`,
        "Em hãy gieo xúc xắc thực nghiệm, ghi nhận số bạn của từng nhóm, so sánh xem nhóm nào đông nhất và lập tỉ số giữa số bạn gieo được mặt 1 chấm với tổng số bạn nhé!",
        `
        • Quét & lau sàn: ${window.rolls_150.r1} bạn.<br>
        • Lau cửa: ${window.rolls_150.r2} bạn.<br>
        • Kê bàn ghế: ${window.rolls_150.r34} bạn.<br>
        • Trang trí lớp: ${window.rolls_150.r56} bạn.<br>
        • Nhóm đông nhất là: ${most}.<br>
        • Tỉ số xuất hiện mặt 1 chấm: ${window.rolls_150.r1}/${realTotal || (parseInt(v1) + parseInt(v2) + parseInt(v3) + parseInt(v4))}.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-150-1", 0, 6, correctCount);
};

window.submitEx150_2 = function () {
    const shirts = document.getElementById('in-150-2-shirts')?.value.trim();
    const pants = document.getElementById('in-150-2-pants')?.value.trim();
    const cals = document.getElementById('in-150-2-cals')?.value.trim();

    const tomato = document.getElementById('in-150-2-tree-tomato')?.value.trim();
    const datePalm = document.getElementById('in-150-2-tree-date')?.value.trim();
    const avocado = document.getElementById('in-150-2-tree-avocado')?.value.trim();

    if (!shirts || !pants || !cals || !tomato || !datePalm || !avocado) {
        alert("Em hãy nhập đầy đủ số lượng đồ quyên góp và số cây đổi được!");
        return;
    }

    const expTomato = Math.floor(parseInt(shirts) / 2);
    const expDate = parseInt(pants);
    const expAvocado = Math.floor(parseInt(cals) / 2);

    const c1 = (parseInt(tomato) === expTomato);
    const c2 = (parseInt(datePalm) === expDate);
    const c3 = (parseInt(avocado) === expAvocado);

    const correctCount = (c1 ? 1 : 0) + (c2 ? 1 : 0) + (c3 ? 1 : 0);
    const isCorrect = (correctCount === 3);
    const score = Math.round((correctCount / 3) * 100);

    window.showMathFeedback(
        isCorrect,
        `Cà chua: ${expTomato} cây ; Chà là: ${expDate} cây ; Bơ: ${expAvocado} cây`,
        `Cà chua: ${tomato} cây ; Chà là: ${datePalm} cây ; Bơ: ${avocado} cây`,
        "Em hãy chia số áo quyên góp cho 2 để tìm số cây cà chua, giữ nguyên số quần dài cho số cây chà là và chia số lịch cũ cho 2 để tìm số cây bơ nhé!",
        `
        • Áo quyên góp: ${shirts} chiếc -> Cà chua: ${shirts} : 2 = ${expTomato} cây.<br>
        • Quần dài: ${pants} chiếc -> Chà là: ${expDate} cây.<br>
        • Lịch cũ: ${cals} quyển -> Cây bơ: ${cals} : 2 = ${expAvocado} cây.<br>
        Đáp số: ${expTomato} cây cà chua, ${expDate} cây chà là, ${expAvocado} cây bơ.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-150-2", 0, 3, correctCount);
};

// 6. Main Lesson Export
export const lesson150 = {
    topic: "Số liệu và Biểu đồ",
    week: "30",
    period: "150",
    title: metadata.title || lessonInfo.title,
    desc: lessonInfo.description,
    content: lesson150Content,
    practice: lesson150Practice,
    quizPool: lesson150QuizPool,
    metadata,
    lessonInfo,
    onLoad: () => {
        console.log("Lesson 150 Loaded: Bài 66. Thực hành và trải nghiệm thu thập, phân tích, biểu diễn các số liệu thống kê (tiết 1)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};

window.lesson150 = lesson150;
export default lesson150;
