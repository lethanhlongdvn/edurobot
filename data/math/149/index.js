/**
 * @file index.js
 * @description Standardized Lesson 149: Bài 65. Tỉ số của số lần lặp lại một sự kiện so với tổng số lần thực hiện (tiết 1)
 * Targets: 100% SGK compliance (Trang 94-95), 3 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-149",
    period: "149",
    title: "Bài 65. Tỉ số của số lần lặp lại một sự kiện so với tổng số lần thực hiện (tiết 1)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 65. TỈ SỐ CỦA SỐ LẦN LẶP LẠI MỘT SỰ KIỆN SO VỚI TỔNG SỐ LẦN THỰC HIỆN (TIẾT 1)",
    description: "Làm quen với tỉ số của số lần lặp lại một sự kiện so với tổng số lần thực hiện qua các thực nghiệm.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 94-95"
};

// 2. HTML Content (Khám phá - Trang 94)
const lesson149Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <!-- Hình ảnh Khám phá tung đồng xu bóng đá SGK Trang 94 -->
            <div class="p-6 bg-white rounded-[32px] border-2 border-blue-100 shadow-md flex items-center justify-center">
                <img src="assets/images/toan/toan_tap_2/149/149-khampha.png" alt="Rô-bốt tung đồng xu bóng đá" class="rounded-2xl w-full max-w-[750px] md:max-w-[850px] h-auto mx-auto shadow-sm">
            </div>

            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">🎲 KHÁM PHÁ: TỈ SỐ CỦA SỐ LẦN LẶP LẠI SỰ KIỆN</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed italic border-l-8 border-blue-500 pl-4">
                    Rô-bốt từng làm trọng tài trong <span class="text-blue-700 font-black">20 trận đấu</span> bóng đá của lớp. Trước mỗi trận đấu, Rô-bốt đều tung đồng xu một lần để xác định đội giao bóng trước.
                </p>

                <p class="text-xl md:text-2xl font-black text-slate-800">Kết quả tung đồng xu của Rô-bốt:</p>

                <!-- Bảng kết quả tung đồng xu -->
                <div class="overflow-x-auto rounded-3xl border-2 border-blue-200 shadow-sm">
                    <table class="w-full text-center border-collapse font-bold text-lg md:text-xl">
                        <thead>
                            <tr class="bg-blue-600 text-white">
                                <th class="p-4 border-r border-blue-400">Khả năng</th>
                                <th class="p-4 border-r border-blue-400">Nhận được mặt hình</th>
                                <th class="p-4">Nhận được mặt số</th>
                            </tr>
                        </thead>
                        <tbody class="bg-blue-50/40 text-slate-800 font-black text-xl md:text-2xl">
                            <tr>
                                <td class="p-4 border-r border-blue-100 font-bold bg-blue-100/50">Số lần lặp lại</td>
                                <td class="p-4 border-r border-blue-100 text-blue-700">7</td>
                                <td class="p-4 text-blue-700">13</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="p-6 bg-blue-50/60 rounded-3xl border border-blue-100 space-y-3 font-bold text-lg md:text-xl text-slate-800">
                    <p class="font-black text-blue-900 text-xl md:text-2xl">💡 Ghi nhớ quy tắc Tỉ số:</p>
                    <p class="text-slate-800">
                        Để mô tả 7 lần xảy ra khả năng "nhận được mặt hình" khi tung đồng xu 20 lần, ta sử dụng tỉ số 
                        <span class="inline-flex items-center px-3 py-1 bg-white border-2 border-blue-600 rounded-xl font-black text-blue-700 text-2xl md:text-3xl font-mono mx-1">7/20</span>.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 3 Slide phụ - Trang 94-95)
const lesson149Practice = `
<style>
    .dice-scene-149 {
        width: 120px;
        height: 120px;
        perspective: 1000px;
        margin: 20px auto;
        display: block;
        position: relative;
    }
    .dice-cube-149 {
        width: 90px;
        height: 90px;
        position: absolute;
        top: 15px;
        left: 15px;
        transform-style: preserve-3d;
        transition: transform 1.8s cubic-bezier(0.25, 1, 0.5, 1);
        transform: rotateX(-20deg) rotateY(30deg);
        z-index: 10;
    }
    .dice-face-149 {
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
    .dice-dot-149 {
        background: #2563eb !important;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin: auto;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.4);
    }
    .df-1 { transform: rotateY(0deg) translateZ(45px); }
    .df-6 { transform: rotateY(180deg) translateZ(45px); }
    .df-3 { transform: rotateY(90deg) translateZ(45px); }
    .df-4 { transform: rotateY(-90deg) translateZ(45px); }
    .df-2 { transform: rotateX(90deg) translateZ(45px); }
    .df-5 { transform: rotateX(-90deg) translateZ(45px); }

    .df-1 .dice-dot-149:nth-child(1) { grid-area: 2/2; }
    .df-2 .dice-dot-149:nth-child(1) { grid-area: 1/1; } .df-2 .dice-dot-149:nth-child(2) { grid-area: 3/3; }
    .df-3 .dice-dot-149:nth-child(1) { grid-area: 1/1; } .df-3 .dice-dot-149:nth-child(2) { grid-area: 2/2; } .df-3 .dice-dot-149:nth-child(3) { grid-area: 3/3; }
    .df-4 .dice-dot-149:nth-child(1) { grid-area: 1/1; } .df-4 .dice-dot-149:nth-child(2) { grid-area: 1/3; } .df-4 .dice-dot-149:nth-child(3) { grid-area: 3/1; } .df-4 .dice-dot-149:nth-child(4) { grid-area: 3/3; }
    .df-5 .dice-dot-149:nth-child(1) { grid-area: 1/1; } .df-5 .dice-dot-149:nth-child(2) { grid-area: 1/3; } .df-5 .dice-dot-149:nth-child(3) { grid-area: 2/2; } .df-5 .dice-dot-149:nth-child(4) { grid-area: 3/1; } .df-5 .dice-dot-149:nth-child(5) { grid-area: 3/3; }
    .df-6 .dice-dot-149:nth-child(1) { grid-area: 1/1; } .df-6 .dice-dot-149:nth-child(2) { grid-area: 1/3; } .df-6 .dice-dot-149:nth-child(3) { grid-area: 2/1; } .df-6 .dice-dot-149:nth-child(4) { grid-area: 2/3; } .df-6 .dice-dot-149:nth-child(5) { grid-area: 3/1; } .df-6 .dice-dot-149:nth-child(6) { grid-area: 3/3; }
</style>

<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 94-95) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Tỉ số lấy tất của Mi (14 lần thực hiện)</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Mi cho 1 đôi tất màu đỏ và 1 đôi tất màu xanh vào hộp. Sau đó không nhìn, lấy 2 chiếc tất ra rồi cho lại vào hộp. Kết quả sau 14 lần lấy tất của Mi:</p>
                        </div>
                    </div>

                    <!-- Bảng kết quả lấy tất SGK -->
                    <div class="overflow-x-auto rounded-3xl border-2 border-blue-200 mb-6">
                        <table class="w-full border-collapse text-center font-black text-lg md:text-xl">
                            <thead>
                                <tr class="bg-blue-600 text-white">
                                    <th class="p-4 border-r border-blue-400">Khả năng</th>
                                    <th class="p-4 border-r border-blue-400">Lấy được 2 chiếc tất cùng màu</th>
                                    <th class="p-4">Lấy được 2 chiếc tất khác màu</th>
                                </tr>
                            </thead>
                            <tbody class="bg-blue-50/40 text-slate-800 text-xl md:text-2xl">
                                <tr>
                                    <td class="p-4 border-r border-blue-100 font-bold bg-blue-100/50">Số lần lặp lại</td>
                                    <td class="p-4 border-r border-blue-100 text-blue-700 font-black">9</td>
                                    <td class="p-4 text-blue-700 font-black">5</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Hình Mi chọn tất SGK Trang 94 -->
                    <div class="mb-6 text-center">
                        <img src="assets/images/toan/toan_tap_2/149/149-1-lay-tat.png" alt="Mi lấy tất trong hộp" class="rounded-2xl w-full max-w-[450px] md:max-w-[550px] h-auto object-contain shadow-sm mx-auto">
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <p class="text-xl md:text-2xl font-black text-blue-900">Viết tỉ số mô tả số lần lặp lại của mỗi khả năng so với tổng số lần lấy tất của Mi (14 lần):</p>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Cùng màu -->
                            <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 flex flex-col items-center gap-3">
                                <span class="text-xl md:text-2xl font-black text-blue-900 text-center">Lấy được 2 chiếc tất cùng màu</span>
                                <div class="flex items-center gap-2 text-2xl md:text-3xl font-black text-blue-600">
                                    <input type="number" id="ans-149-1a-num" class="w-20 h-14 border-2 border-blue-600 rounded-2xl text-center outline-none font-black text-blue-600" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="text-slate-400">/</span>
                                    <input type="number" id="ans-149-1a-den" class="w-20 h-14 border-2 border-blue-600 rounded-2xl text-center outline-none font-black text-blue-600" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                </div>
                            </div>
                            <!-- Khác màu -->
                            <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 flex flex-col items-center gap-3">
                                <span class="text-xl md:text-2xl font-black text-blue-900 text-center">Lấy được 2 chiếc tất khác màu</span>
                                <div class="flex items-center gap-2 text-2xl md:text-3xl font-black text-blue-600">
                                    <input type="number" id="ans-149-1b-num" class="w-20 h-14 border-2 border-blue-600 rounded-2xl text-center outline-none font-black text-blue-600" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="text-slate-400">/</span>
                                    <input type="number" id="ans-149-1b-den" class="w-20 h-14 border-2 border-blue-600 rounded-2xl text-center outline-none font-black text-blue-600" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-149-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        Tổng số lần Mi lấy tất là: <b>14 lần</b>.<br>
                        • Tỉ số lấy được 2 chiếc tất cùng màu là: <b>9/14</b>.<br>
                        • Tỉ số lấy được 2 chiếc tất khác màu là: <b>5/14</b>.<br>
                        Đáp số: Cùng màu: 9/14 ; Khác màu: 5/14.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-149-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-149-1" onclick="window.submitEx149_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 95) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Vòng quay màu áo đồng phục lớp 5A</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Các bạn lớp 5A dùng vòng quay để chọn màu áo đồng phục lớp (vàng, xanh, đỏ). Mỗi bạn quay 1 lần. Kết quả quay của các bạn lớp 5A được ghi lại trong bảng:</p>
                        </div>
                    </div>

                    <!-- Bảng kết quả quay đồng phục SGK -->
                    <div class="overflow-x-auto rounded-3xl border-2 border-teal-200 mb-6">
                        <table class="w-full border-collapse text-center font-black text-lg md:text-xl">
                            <thead>
                                <tr class="bg-teal-600 text-white">
                                    <th class="p-4 border-r border-teal-400">Khả năng</th>
                                    <th class="p-4 border-r border-teal-400">Màu vàng</th>
                                    <th class="p-4 border-r border-teal-400">Màu xanh</th>
                                    <th class="p-4">Màu đỏ</th>
                                </tr>
                            </thead>
                            <tbody class="bg-teal-50/40 text-slate-800 text-xl md:text-2xl">
                                <tr>
                                    <td class="p-4 border-r border-teal-100 font-bold bg-teal-100/50">Số lần lặp lại</td>
                                    <td class="p-4 border-r border-teal-100 text-teal-700 font-black">8</td>
                                    <td class="p-4 border-r border-teal-100 text-teal-700 font-black">17</td>
                                    <td class="p-4 text-teal-700 font-black">5</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Hình Vòng quay SGK Trang 95 -->
                    <div class="mb-6 text-center">
                        <img src="assets/images/toan/toan_tap_2/149/149-2-vong-quay.png" alt="Vòng quay màu áo đồng phục" class="rounded-2xl w-full max-w-[450px] md:max-w-[550px] h-auto object-contain shadow-sm mx-auto">
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-teal-900 font-extrabold">a) Các bạn lớp 5A đã quay tất cả số lần là =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-149-2a" class="w-24 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">lần</span>
                                </span>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="space-y-4">
                            <p class="text-xl md:text-2xl font-black text-teal-900">b) Viết tỉ số mô tả số lần lặp lại của mỗi màu so với tổng số lần quay:</p>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <!-- Vàng -->
                                <div class="p-4 bg-teal-50 rounded-2xl border border-teal-200 flex flex-col items-center gap-2">
                                    <span class="text-xl font-black text-teal-900">Màu vàng</span>
                                    <div class="flex items-center gap-2 text-xl md:text-3xl font-black text-teal-600">
                                        <input type="number" id="ans-149-2b-v-num" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center outline-none font-black text-teal-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        <span class="text-slate-400">/</span>
                                        <input type="number" id="ans-149-2b-v-den" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center outline-none font-black text-teal-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    </div>
                                </div>
                                <!-- Xanh -->
                                <div class="p-4 bg-teal-50 rounded-2xl border border-teal-200 flex flex-col items-center gap-2">
                                    <span class="text-xl font-black text-teal-900">Màu xanh</span>
                                    <div class="flex items-center gap-2 text-xl md:text-3xl font-black text-teal-600">
                                        <input type="number" id="ans-149-2b-x-num" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center outline-none font-black text-teal-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        <span class="text-slate-400">/</span>
                                        <input type="number" id="ans-149-2b-x-den" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center outline-none font-black text-teal-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    </div>
                                </div>
                                <!-- Đỏ -->
                                <div class="p-4 bg-teal-50 rounded-2xl border border-teal-200 flex flex-col items-center gap-2">
                                    <span class="text-xl font-black text-teal-900">Màu đỏ</span>
                                    <div class="flex items-center gap-2 text-xl md:text-3xl font-black text-teal-600">
                                        <input type="number" id="ans-149-2b-d-num" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center outline-none font-black text-teal-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                        <span class="text-slate-400">/</span>
                                        <input type="number" id="ans-149-2b-d-den" class="w-16 h-12 border-2 border-teal-600 rounded-xl text-center outline-none font-black text-teal-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-149-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        a) Tổng số lần quay là: 8 + 17 + 5 = <b>30 (lần)</b>.<br>
                        b) Tỉ số mô tả số lần lặp lại của từng màu áo là:<br>
                        • Màu vàng: <b>8/30</b>.<br>
                        • Màu xanh: <b>17/30</b>.<br>
                        • Màu đỏ: <b>5/30</b>.<br>
                        Đáp số: a) 30 lần ; b) 8/30, 17/30, 5/30.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-149-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-149-2" onclick="window.submitEx149_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 3 (Trang 95 - Gieo xúc xắc 3D thực nghiệm) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3. Gieo xúc xắc giúp Mai đưa ra quyết định</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Mai dùng xúc xắc để chọn đọc truyện hay làm bánh. Mai gieo 9 lần. Mặt chẵn nhiều hơn -> đọc truyện; Mặt lẻ nhiều hơn -> làm bánh.</p>
                        </div>
                    </div>

                    <!-- Khung mô phỏng gieo xúc xắc 3D -->
                    <div class="p-6 bg-sky-50/70 rounded-[2.5rem] border-2 border-sky-100 mb-8 text-center space-y-4">
                        <div class="dice-scene-149">
                            <div id="dice-cube-149" class="dice-cube-149">
                                <div class="dice-face-149 df-1"><div class="dice-dot-149"></div></div>
                                <div class="dice-face-149 df-2"><div class="dice-dot-149"></div><div class="dice-dot-149"></div></div>
                                <div class="dice-face-149 df-3"><div class="dice-dot-149"></div><div class="dice-dot-149"></div><div class="dice-dot-149"></div></div>
                                <div class="dice-face-149 df-4"><div class="dice-dot-149"></div><div class="dice-dot-149"></div><div class="dice-dot-149"></div><div class="dice-dot-149"></div></div>
                                <div class="dice-face-149 df-5"><div class="dice-dot-149"></div><div class="dice-dot-149"></div><div class="dice-dot-149"></div><div class="dice-dot-149"></div><div class="dice-dot-149"></div></div>
                                <div class="dice-face-149 df-6"><div class="dice-dot-149"></div><div class="dice-dot-149"></div><div class="dice-dot-149"></div><div class="dice-dot-149"></div><div class="dice-dot-149"></div><div class="dice-dot-149"></div></div>
                            </div>
                        </div>

                        <div class="flex items-center justify-center gap-6">
                            <span class="text-xl md:text-2xl font-black text-sky-900">Đã gieo: <span id="roll-count" class="text-blue-600 font-extrabold text-2xl md:text-3xl">0</span>/9 lần</span>
                            <button id="btn-roll" onclick="window.rollDice149()" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-xl rounded-2xl shadow-md active:scale-95 transition-all">🎲 GIEO XÚC XẮC</button>
                        </div>

                        <div class="flex justify-center gap-8 pt-2">
                            <div class="bg-white px-6 py-3 rounded-2xl border border-sky-200 font-black text-lg md:text-xl text-slate-800">
                                Mặt chẵn (2,4,6): <span id="res-even" class="text-blue-600 text-xl md:text-3xl ml-1">0</span> lần
                            </div>
                            <div class="bg-white px-6 py-3 rounded-2xl border border-sky-200 font-black text-lg md:text-xl text-slate-800">
                                Mặt lẻ (1,3,5): <span id="res-odd" class="text-sky-500 text-xl md:text-3xl ml-1">0</span> lần
                            </div>
                        </div>
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <p class="text-xl md:text-2xl font-black text-sky-900">Theo kết quả thực nghiệm gieo xúc xắc ở trên:</p>

                        <!-- a -->
                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-sky-900">a) Ghi lại kết quả kiểm đếm:</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• Số lần mặt chẵn =</span>
                                    <input type="number" id="ans-149-3a-even" class="w-20 h-12 border-2 border-sky-600 rounded-xl text-center text-xl md:text-2xl font-black text-sky-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                </div>
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• Số lần mặt lẻ =</span>
                                    <input type="number" id="ans-149-3a-odd" class="w-20 h-12 border-2 border-sky-600 rounded-xl text-center text-xl md:text-2xl font-black text-sky-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                </div>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-sky-900">b) Kết luận và tỉ số mặt chẵn:</p>
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                <span>• Mai sẽ =</span>
                                <select id="ans-149-3b-choice" class="h-14 border-2 border-sky-600 rounded-2xl px-4 font-black text-sky-600 outline-none bg-white">
                                    <option value="">-- Chọn hoạt động --</option>
                                    <option value="Đọc truyện">Đọc truyện</option>
                                    <option value="Làm bánh cùng bố mẹ">Làm bánh cùng bố mẹ</option>
                                </select>
                            </div>
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800 border-t border-sky-200 pt-3">
                                <span>• Tỉ số số lần lặp lại "xuất hiện mặt chẵn" =</span>
                                <div class="flex items-center gap-2 text-xl md:text-3xl font-black text-sky-600">
                                    <input type="number" id="ans-149-3b-num" class="w-16 h-12 border-2 border-sky-600 rounded-xl text-center outline-none font-black text-sky-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    <span class="text-slate-400">/</span>
                                    <input type="number" id="ans-149-3b-den" class="w-16 h-12 border-2 border-sky-600 rounded-xl text-center outline-none font-black text-sky-600" style="padding: 0px !important; line-height: 44px !important;" placeholder="9">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-149-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        a) Đếm kết quả kiểm đếm sau 9 lần gieo xúc xắc.<br>
                        b) Nếu mặt chẵn > mặt lẻ thì Mai đọc truyện, ngược lại Mai làm bánh.<br>
                        Tỉ số số lần lặp lại xuất hiện mặt chẵn là: (Số lần mặt chẵn) / 9.<br>
                        Em đã giúp Mai gieo xúc xắc thực nghiệm rất chính xác!
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-149-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-149-3" onclick="window.submitEx149_3()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson148QuizPool = [
    { question: "Tung đồng xu 20 lần, xuất hiện mặt hình 7 lần. Tỉ số mặt hình là:", options: ["7/20", "13/20", "20/7", "7/13"], answer: 0, level: "easy" },
    { question: "Tung đồng xu 20 lần, xuất hiện mặt số 13 lần. Tỉ số mặt số là:", options: ["13/20", "7/20", "20/13", "13/7"], answer: 0, level: "easy" },
    { question: "Mi lấy tất 14 lần, lấy được 2 chiếc cùng màu 9 lần. Tỉ số là:", options: ["9/14", "5/14", "14/9", "9/5"], answer: 0, level: "easy" },
    { question: "Mi lấy tất 14 lần, lấy được 2 chiếc khác màu 5 lần. Tỉ số là:", options: ["5/14", "9/14", "14/5", "5/9"], answer: 0, level: "easy" },
    { question: "Lớp 5A quay chọn màu áo 30 lần, màu vàng được 8 lần. Tỉ số màu vàng là:", options: ["8/30", "17/30", "5/30", "30/8"], answer: 0, level: "easy" },
    { question: "Quay 30 lần, màu xanh được 17 lần. Tỉ số màu xanh là:", options: ["17/30", "8/30", "5/30", "30/17"], answer: 0, level: "easy" },
    { question: "Quay 30 lần, màu đỏ được 5 lần. Tỉ số màu đỏ là:", options: ["5/30", "8/30", "17/30", "30/5"], answer: 0, level: "easy" },
    { question: "Mai gieo xúc xắc 9 lần, mặt chẵn xuất hiện 5 lần. Tỉ số mặt chẵn là:", options: ["5/9", "4/9", "9/5", "5/4"], answer: 0, level: "easy" },
    { question: "Mai gieo xúc xắc 9 lần, mặt lẻ xuất hiện 4 lần. Tỉ số mặt lẻ là:", options: ["4/9", "5/9", "9/4", "4/5"], answer: 0, level: "easy" },
    { question: "Tỉ số của số lần lặp lại sự kiện A được tính bằng:", options: ["(Số lần sự kiện A lặp lại) / (Tổng số lần thực hiện)", "(Tổng số lần) / (Số lần lặp lại A)", "Số lần sự kiện A × Tổng số lần", "Không có công thức"], answer: 0, level: "easy" },
    { question: "Nếu gieo xúc xắc 10 lần, mặt 6 xuất hiện 3 lần, tỉ số mặt 6 là:", options: ["3/10", "7/10", "10/3", "3/7"], answer: 0, level: "easy" },
    { question: "Tổng tỉ số của tất cả các khả năng xảy ra trong một phép thử bằng:", options: ["1", "0", "100", "0,5"], answer: 0, level: "easy" },
    { question: "Nếu một sự kiện không xảy ra lần nào sau 15 lần thử, tỉ số lặp lại là:", options: ["0/15", "1/15", "15/15", "15/0"], answer: 0, level: "easy" },
    { question: "Xúc xắc chuẩn có bao nhiêu mặt?", options: ["6 mặt", "4 mặt", "8 mặt", "12 mặt"], answer: 0, level: "easy" },
    { question: "Đồng xu chuẩn có bao nhiêu mặt?", options: ["2 mặt (hình và số)", "3 mặt", "4 mặt", "1 mặt"], answer: 0, level: "easy" }
];

// 5. Global Handlers & State
window.rolls_149 = { even: 0, odd: 0, total: 0 };

window.rollDice149 = function () {
    if (window.rolls_149.total >= 9) return;
    const cube = document.getElementById("dice-cube-149");
    const btn = document.getElementById("btn-roll");
    if (!cube || !btn) return;
    btn.disabled = true;
    const val = Math.floor(Math.random() * 6) + 1;
    const rots = { 1: { x: 0, y: 0 }, 2: { x: -90, y: 0 }, 3: { x: 0, y: -90 }, 4: { x: 0, y: 90 }, 5: { x: 90, y: 0 }, 6: { x: 180, y: 0 } };
    const r = rots[val];
    const baseRot = (window.rolls_149.total + 1) * 360 * 4;
    cube.style.transform = `rotateX(${r.x + baseRot}deg) rotateY(${r.y + baseRot}deg)`;
    setTimeout(() => {
        window.rolls_149.total++;
        if (val % 2 === 0) window.rolls_149.even++; else window.rolls_149.odd++;
        
        const rollCountEl = document.getElementById("roll-count");
        const resEvenEl = document.getElementById("res-even");
        const resOddEl = document.getElementById("res-odd");
        
        if (rollCountEl) rollCountEl.innerText = window.rolls_149.total;
        if (resEvenEl) resEvenEl.innerText = window.rolls_149.even;
        if (resOddEl) resOddEl.innerText = window.rolls_149.odd;
        
        btn.disabled = false;
        if (window.rolls_149.total === 9) btn.innerText = "ĐÃ GIEO ĐỦ 9 LẦN!";
    }, 1800);
};

window.submitEx149_1 = function () {
    const aNum = document.getElementById('ans-149-1a-num')?.value.trim();
    const aDen = document.getElementById('ans-149-1a-den')?.value.trim();
    const bNum = document.getElementById('ans-149-1b-num')?.value.trim();
    const bDen = document.getElementById('ans-149-1b-den')?.value.trim();

    if (!aNum || !aDen || !bNum || !bDen) {
        alert("Em hãy điền đầy đủ cả tử số và mẫu số cho 2 tỉ số!");
        return;
    }

    const c1 = (parseInt(aNum) === 9 && parseInt(aDen) === 14);
    const c2 = (parseInt(bNum) === 5 && parseInt(bDen) === 14);

    const correctCount = (c1 ? 1 : 0) + (c2 ? 1 : 0);
    const isCorrect = (correctCount === 2);
    const score = Math.round((correctCount / 2) * 100);

    window.showMathFeedback(
        isCorrect,
        "Cùng màu: 9/14 ; Khác màu: 5/14",
        `Cùng màu: ${aNum}/${aDen} ; Khác màu: ${bNum}/${bDen}`,
        "Em hãy lấy số lần lặp lại của từng khả năng chia cho tổng số lần lấy tất (14 lần) để lập tỉ số nhé!",
        `
        • Tỉ số lấy được 2 chiếc tất cùng màu là: 9/14.<br>
        • Tỉ số lấy được 2 chiếc tất khác màu là: 5/14.<br>
        Em lập tỉ số lặp lại khả năng rất chính xác!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-149-1", 0, 2, correctCount);
};

window.submitEx149_2 = function () {
    const a = document.getElementById('ans-149-2a')?.value.trim();
    const vNum = document.getElementById('ans-149-2b-v-num')?.value.trim();
    const vDen = document.getElementById('ans-149-2b-v-den')?.value.trim();
    const xNum = document.getElementById('ans-149-2b-x-num')?.value.trim();
    const xDen = document.getElementById('ans-149-2b-x-den')?.value.trim();
    const dNum = document.getElementById('ans-149-2b-d-num')?.value.trim();
    const dDen = document.getElementById('ans-149-2b-d-den')?.value.trim();

    if (!a || !vNum || !vDen || !xNum || !xDen || !dNum || !dDen) {
        alert("Em hãy nhập đầy đủ tổng số lần quay và 3 tỉ số!");
        return;
    }

    const ca = (parseInt(a) === 30);
    const cv = (parseInt(vNum) === 8 && parseInt(vDen) === 30);
    const cx = (parseInt(xNum) === 17 && parseInt(xDen) === 30);
    const cd = (parseInt(dNum) === 5 && parseInt(dDen) === 30);

    const correctCount = (ca ? 1 : 0) + (cv ? 1 : 0) + (cx ? 1 : 0) + (cd ? 1 : 0);
    const isCorrect = (correctCount === 4);
    const score = Math.round((correctCount / 4) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 30 lần ; b) 8/30, 17/30, 5/30",
        `a) ${a} lần ; b) Vàng: ${vNum}/${vDen}, Xanh: ${xNum}/${xDen}, Đỏ: ${dNum}/${dDen}`,
        "Em hãy cộng tổng số lần quay (8 + 17 + 5), sau đó lập tỉ số giữa số lần xuất hiện mỗi màu áo với tổng số lần quay nhé!",
        `
        a) Các bạn lớp 5A đã quay tất cả: 8 + 17 + 5 = 30 (lần).<br>
        b) Tỉ số lặp lại của từng màu áo là:<br>
        • Màu vàng: 8/30.<br>
        • Màu xanh: 17/30.<br>
        • Màu đỏ: 5/30.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-149-2", 0, 4, correctCount);
};

window.submitEx149_3 = function () {
    const evenVal = document.getElementById('ans-149-3a-even')?.value.trim();
    const oddVal = document.getElementById('ans-149-3a-odd')?.value.trim();
    const choice = document.getElementById('ans-149-3b-choice')?.value;
    const num = document.getElementById('ans-149-3b-num')?.value.trim();
    const den = document.getElementById('ans-149-3b-den')?.value.trim();

    if (!evenVal || !oddVal || !choice || !num || !den) {
        alert("Em hãy gieo xúc xắc 9 lần và nhập đầy đủ thông tin kiểm đếm và tỉ số!");
        return;
    }

    const realEven = window.rolls_149.even;
    const realOdd = window.rolls_149.odd;
    const expectedChoice = (realEven > realOdd) ? 'Đọc truyện' : 'Làm bánh cùng bố mẹ';

    const cEven = (parseInt(evenVal) === realEven);
    const cOdd = (parseInt(oddVal) === realOdd);
    const cChoice = (choice === expectedChoice);
    const cRatio = (parseInt(num) === realEven && parseInt(den) === 9);

    const correctCount = (cEven ? 1 : 0) + (cOdd ? 1 : 0) + (cChoice ? 1 : 0) + (cRatio ? 1 : 0);
    const isCorrect = (correctCount === 4);
    const score = Math.round((correctCount / 4) * 100);

    window.showMathFeedback(
        isCorrect,
        `Mặt chẵn: ${realEven}, Mặt lẻ: ${realOdd} ; Mai chọn: ${expectedChoice} ; Tỉ số: ${realEven}/9`,
        `Mặt chẵn: ${evenVal}, Mặt lẻ: ${oddVal} ; Mai chọn: ${choice} ; Tỉ số: ${num}/${den}`,
        "Em hãy bấm nút Gieo đủ 9 lần, đếm số lần mặt chẵn (2,4,6) và mặt lẻ (1,3,5) để đưa ra quyết định giúp Mai nhé!",
        `
        • Số lần xuất hiện mặt chẵn: ${realEven} lần.<br>
        • Số lần xuất hiện mặt lẻ: ${realOdd} lần.<br>
        • Mai sẽ ${expectedChoice}.<br>
        • Tỉ số xuất hiện mặt chẵn: ${realEven}/9.<br>
        Em làm thực nghiệm gieo xúc xắc rất tốt!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-149-3", 0, 4, correctCount);
};

// 6. Main Lesson Export
export const lesson149 = {
    topic: "Số liệu và Biểu đồ",
    week: "30",
    period: "149",
    title: metadata.title || lessonInfo.title,
    desc: lessonInfo.description,
    content: lesson149Content,
    practice: lesson149Practice,
    quizPool: lesson148QuizPool,
    metadata,
    lessonInfo,
    onLoad: () => {
        console.log("Lesson 149 Loaded: Bài 65. Tỉ số của số lần lặp lại một sự kiện so với tổng số lần thực hiện (tiết 1)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};

window.lesson149 = lesson149;
export default lesson149;
