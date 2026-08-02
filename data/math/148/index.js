/**
 * @file index.js
 * @description Standardized Lesson 148: Bài 64. Biểu đồ hình quạt tròn (tiết 2)
 * Targets: 100% SGK compliance (Trang 92-93), 4 slides with enlarged high-visibility images.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-148",
    period: "148",
    title: "Bài 64. Biểu đồ hình quạt tròn (tiết 2)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 64. BIỂU ĐỒ HÌNH QUẠT TRÒN (TIẾT 2)",
    description: "Luyện tập đọc và phân tích dữ liệu từ biểu đồ hình quạt tròn qua các tình huống thực tế.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 92-93"
};

// 2. HTML Content (Khám phá / Lý thuyết ôn tập - Trang 92-93)
const lesson148Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">📊 LUYỆN TẬP: ĐỌC VÀ PHÂN TÍCH BIỂU ĐỒ HÌNH QUẠT TRÒN</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-lg md:text-xl">
                    <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-200 space-y-2">
                        <p class="font-black text-blue-800 text-xl md:text-2xl">📌 Đọc tỉ số phần trăm (%):</p>
                        <p class="text-slate-800">• Quan sát màu sắc chú giải tương ứng.</p>
                        <p class="text-slate-800">• So sánh tỉ lệ phần trăm các phần.</p>
                    </div>
                    <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-200 space-y-2">
                        <p class="font-black text-teal-800 text-xl md:text-2xl">🧮 Tính số lượng cụ thể:</p>
                        <p class="text-slate-800">• <span class="font-black text-teal-700 font-mono">Số lượng = Tổng số × Tỉ số %</span></p>
                        <p class="text-slate-800">• Tổng phần trăm luôn bằng 100%.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 4 Slide phụ - Trang 92-93 với HÌNH TO RÕ NÉT)
const lesson148Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 92) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Tỉ số phần trăm dân số các châu lục năm 2021</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Quan sát biểu đồ tỉ số phần trăm dân số các châu lục năm 2021 (theo worldometers.info) và trả lời câu hỏi:</p>
                        </div>
                    </div>

                    <!-- Biểu đồ Bài 1 HÌNH TO RÕ NÉT -->
                    <div class="mb-8 text-center bg-blue-50/50 p-6 rounded-[2.5rem] border-2 border-blue-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/148/148-1-dan-so.png" alt="Biểu đồ dân số các châu lục" class="rounded-2xl w-full max-w-[650px] md:max-w-[750px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-blue-900">a) Cho biết châu lục đông dân nhất và ít dân nhất:</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• Đông dân nhất:</span>
                                    <select id="ans-148-1a-max" class="h-14 border-2 border-blue-600 rounded-2xl px-4 font-black text-blue-600 outline-none bg-white">
                                        <option value="">-- Chọn --</option>
                                        <option value="Châu Á">Châu Á</option>
                                        <option value="Châu Phi">Châu Phi</option>
                                        <option value="Châu Mỹ">Châu Mỹ</option>
                                        <option value="Châu Âu">Châu Âu</option>
                                        <option value="Châu Đại dương">Châu Đại dương</option>
                                    </select>
                                </div>
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• Ít dân nhất:</span>
                                    <select id="ans-148-1a-min" class="h-14 border-2 border-blue-600 rounded-2xl px-4 font-black text-blue-600 outline-none bg-white">
                                        <option value="">-- Chọn --</option>
                                        <option value="Châu Á">Châu Á</option>
                                        <option value="Châu Phi">Châu Phi</option>
                                        <option value="Châu Mỹ">Châu Mỹ</option>
                                        <option value="Châu Âu">Châu Âu</option>
                                        <option value="Châu Đại dương">Châu Đại dương</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-blue-900 font-extrabold">b) Các số liệu được sắp xếp theo thứ tự =</span>
                                <select id="ans-148-1b" class="h-14 border-2 border-blue-600 rounded-2xl px-4 font-black text-blue-600 outline-none bg-white">
                                    <option value="">-- Chọn thứ tự --</option>
                                    <option value="Giảm dần">Giảm dần (từ lớn đến bé)</option>
                                    <option value="Tăng dần">Tăng dần (từ bé đến lớn)</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-148-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        a) Châu lục đông dân nhất là <b>Châu Á</b> (59,42%), châu lục ít dân nhất là <b>Châu Đại dương</b> (0,55%).<br>
                        b) Các số liệu được sắp xếp theo thứ tự <b>Giảm dần</b> (59,42% > 17,44% > 13,09% > 9,50% > 0,55%).<br>
                        Đáp số: a) Đông dân nhất: Châu Á, Ít dân nhất: Châu Đại dương ; b) Giảm dần.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-148-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-148-1" onclick="window.submitEx148_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 92) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Hoạt động yêu thích nhất ngày cuối tuần</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Có 30 học sinh đã tham gia cuộc khảo sát về hoạt động yêu thích nhất trong ngày cuối tuần. Kết quả được thể hiện trong biểu đồ dưới đây:</p>
                        </div>
                    </div>

                    <!-- Biểu đồ Bài 2 HÌNH TO RÕ NÉT -->
                    <div class="mb-8 text-center bg-teal-50/50 p-6 rounded-[2.5rem] border-2 border-teal-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/148/148-2-hoat-dong.png" alt="Biểu đồ hoạt động cuối tuần" class="rounded-2xl w-full max-w-[650px] md:max-w-[750px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 shadow-sm space-y-4">
                            <p class="text-xl md:text-2xl font-black text-teal-900">a) Cho biết hoạt động nhiều người thích nhất và ít người thích nhất:</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• Nhiều nhất:</span>
                                    <select id="ans-148-2a-max" class="h-14 border-2 border-teal-600 rounded-2xl px-4 font-black text-teal-600 outline-none bg-white">
                                        <option value="">-- Chọn --</option>
                                        <option value="Đọc sách">Đọc sách</option>
                                        <option value="Cùng bố mẹ làm việc nhà">Cùng bố mẹ làm việc nhà</option>
                                        <option value="Giải câu đố">Giải câu đố</option>
                                        <option value="Chăm sóc cây">Chăm sóc cây</option>
                                    </select>
                                </div>
                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-bold text-slate-800">
                                    <span>• Ít nhất:</span>
                                    <select id="ans-148-2a-min" class="h-14 border-2 border-teal-600 rounded-2xl px-4 font-black text-teal-600 outline-none bg-white">
                                        <option value="">-- Chọn --</option>
                                        <option value="Đọc sách">Đọc sách</option>
                                        <option value="Cùng bố mẹ làm việc nhà">Cùng bố mẹ làm việc nhà</option>
                                        <option value="Giải câu đố">Giải câu đố</option>
                                        <option value="Chăm sóc cây">Chăm sóc cây</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-teal-900 font-extrabold">b) Số học sinh thích giải câu đố (trong 30 học sinh) =</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="number" id="ans-148-2b" class="w-24 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">học sinh</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-148-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        a) Hoạt động được yêu thích nhất là <b>Đọc sách</b> (40%), ít được yêu thích nhất là <b>Chăm sóc cây</b> (10%).<br>
                        b) Tỉ lệ thích giải câu đố là 20%. Số học sinh thích giải câu đố là: 30 × 20% = <b>6 học sinh</b>.<br>
                        Đáp số: a) Nhiều nhất: Đọc sách, Ít nhất: Chăm sóc cây ; b) 6 học sinh.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-148-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-148-2" onclick="window.submitEx148_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 3 (Trang 93) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-6 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3. Mượn sách thư viện của 40 học sinh lớp 5A</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Mỗi tuần, 40 học sinh lớp 5A đều đến thư viện mượn sách. Mỗi bạn mượn 1 cuốn sách. Tỉ số phần trăm số sách mượn trong 2 tuần đầu tháng 4 được thể hiện trong các biểu đồ dưới đây:</p>
                        </div>
                    </div>

                    <!-- Biểu đồ Bài 3 HÌNH TO RÕ NÉT -->
                    <div class="mb-8 text-center bg-sky-50/50 p-6 rounded-[2.5rem] border-2 border-sky-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/148/148-3-muon-sach.png" alt="Biểu đồ mượn sách 2 tuần" class="rounded-2xl w-full max-w-[750px] md:max-w-[850px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <div class="space-y-4 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-sky-900 font-extrabold">a) Trong tuần thứ nhất, loại sách được mượn nhiều nhất =</span>
                                <select id="ans-148-3a" class="h-14 border-2 border-sky-600 rounded-2xl px-4 font-black text-sky-600 outline-none bg-white">
                                    <option value="">-- Chọn loại sách --</option>
                                    <option value="Truyện cười">Truyện cười</option>
                                    <option value="Truyện tranh">Truyện tranh</option>
                                    <option value="Sách khoa học">Sách khoa học</option>
                                    <option value="Truyện trinh thám">Truyện trinh thám</option>
                                </select>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-sky-900 font-extrabold">b) Loại sách mượn không thay đổi trong hai tuần =</span>
                                <select id="ans-148-3b" class="h-14 border-2 border-sky-600 rounded-2xl px-4 font-black text-sky-600 outline-none bg-white">
                                    <option value="">-- Chọn loại sách --</option>
                                    <option value="Truyện cười">Truyện cười</option>
                                    <option value="Truyện tranh">Truyện tranh</option>
                                    <option value="Sách khoa học">Sách khoa học</option>
                                    <option value="Truyện trinh thám">Truyện trinh thám</option>
                                </select>
                            </div>
                        </div>

                        <!-- c -->
                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-sky-900 font-extrabold">c) Số học sinh mượn truyện tranh tuần 2 so với tuần 1 =</span>
                                <select id="ans-148-3c" class="h-14 border-2 border-sky-600 rounded-2xl px-4 font-black text-sky-600 outline-none bg-white">
                                    <option value="">-- Chọn --</option>
                                    <option value="Tăng lên">Tăng lên</option>
                                    <option value="Giảm đi">Giảm đi</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-148-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        a) Tuần thứ nhất: Truyện cười mượn nhiều nhất (45%).<br>
                        b) Loại sách mượn không thay đổi là Sách khoa học (đều 20% trong cả 2 tuần).<br>
                        c) Số học sinh mượn truyện tranh tăng từ 25% lên 60% nên đã <b>Tăng lên</b>.<br>
                        Đáp số: a) Truyện cười ; b) Sách khoa học ; c) Tăng lên.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-148-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-148-3" onclick="window.submitEx148_3()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 4: Bài 4 (Trang 93) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-8 md:p-10 rounded-[3rem] bg-white border border-emerald-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">4</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-emerald-700 block">Bài 4. Chọn câu trả lời đúng (Cửa hàng bán áo)</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Cửa hàng vừa bán được chiếc áo thứ 1 000 trong tháng 4. Biểu đồ hình quạt tròn thể hiện số lượng áo bán được theo kích cỡ S, M, L mà nhân viên quên ghi tỉ số phần trăm. Quan sát biểu đồ và cho biết cửa hàng đã bán được bao nhiêu chiếc áo cỡ M?</p>
                        </div>
                    </div>

                    <!-- Biểu đồ Bài 4 HÌNH TO RÕ NÉT -->
                    <div class="mb-8 text-center bg-emerald-50/50 p-6 rounded-[2.5rem] border-2 border-emerald-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/148/148-4-ban-ao.png" alt="Biểu đồ bán áo cỡ S, M, L" class="rounded-2xl w-full max-w-[500px] md:max-w-[600px] h-auto object-contain shadow-md mx-auto bg-white p-4">
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10 text-left">
                        <button id="btn-check-148-4-a" onclick="window.ans_148_4(0)" class="p-6 bg-white border-2 border-emerald-200 rounded-2xl text-2xl md:text-3xl font-black text-blue-900 hover:bg-emerald-400 transition-all shadow-sm">A. 200 chiếc</button>
                        <button id="btn-check-148-4-b" onclick="window.ans_148_4(1)" class="p-6 bg-white border-2 border-emerald-200 rounded-2xl text-2xl md:text-3xl font-black text-blue-900 hover:bg-emerald-400 transition-all shadow-sm">B. 300 chiếc</button>
                        <button id="btn-check-148-4-c" onclick="window.ans_148_4(2)" class="p-6 bg-white border-2 border-emerald-200 rounded-2xl text-2xl md:text-3xl font-black text-blue-900 hover:bg-emerald-400 transition-all shadow-sm">C. 400 chiếc</button>
                        <button id="btn-check-148-4-d" onclick="window.ans_148_4(3)" class="p-6 bg-white border-2 border-emerald-200 rounded-2xl text-2xl md:text-3xl font-black text-blue-900 hover:bg-emerald-400 transition-all shadow-sm">D. 500 chiếc</button>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-148-4" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 4:</p>
                        Quan sát biểu đồ quạt:<br>
                        • Cỡ M chiếm phần diện tích lớn hơn 1/4 hình tròn (250 chiếc) và nhỏ hơn nửa hình tròn (500 chiếc).<br>
                        • Cụ thể Cỡ M chiếm 30% tổng số áo.<br>
                        Số áo cỡ M bán được là: 1 000 × 30% = <b>300 chiếc</b>.<br>
                        Đáp án đúng là <b>B. 300 chiếc</b>.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-148-4')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-148-4" onclick="window.ans_148_4(1)" class="w-16 h-16 md:w-20 md:h-20 bg-emerald-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson148QuizPool = [
    { question: "Dựa vào biểu đồ Bài 1, châu lục nào đông dân nhất năm 2021?", options: ["Châu Á (59,42%)", "Châu Phi (17,44%)", "Châu Mỹ (13,09%)", "Châu Âu (9,50%)"], answer: 0, level: "easy" },
    { question: "Châu lục nào ít dân nhất năm 2021 theo biểu đồ?", options: ["Châu Đại dương (0,55%)", "Châu Âu (9,50%)", "Châu Mỹ (13,09%)", "Châu Phi (17,44%)"], answer: 0, level: "easy" },
    { question: "Các số liệu dân số các châu lục ở Bài 1 được sắp xếp theo thứ tự nào?", options: ["Giảm dần", "Tăng dần", "Không sắp xếp", "Bằng nhau"], answer: 0, level: "easy" },
    { question: "Trong bài khảo sát 30 học sinh, hoạt động nào được yêu thích nhất?", options: ["Đọc sách (40%)", "Cùng bố mẹ làm việc nhà (30%)", "Giải câu đố (20%)", "Chăm sóc cây (10%)"], answer: 0, level: "easy" },
    { question: "Hoạt động nào ít được yêu thích nhất ở Bài 2?", options: ["Chăm sóc cây (10%)", "Giải câu đố (20%)", "Cùng bố mẹ làm việc nhà (30%)", "Đọc sách (40%)"], answer: 0, level: "easy" },
    { question: "Trong 30 học sinh, có 20% học sinh thích giải câu đố. Số học sinh đó là:", options: ["6 học sinh", "3 học sinh", "10 học sinh", "12 học sinh"], answer: 0, level: "easy" },
    { question: "Trong tuần thứ nhất mượn sách, loại sách nào được mượn nhiều nhất?", options: ["Truyện cười (45%)", "Truyện tranh (25%)", "Sách khoa học (20%)", "Truyện trinh thám (10%)"], answer: 0, level: "easy" },
    { question: "Trong cả 2 tuần mượn sách, loại sách nào có tỉ lệ mượn không thay đổi?", options: ["Sách khoa học (đều 20%)", "Truyện cười", "Truyện tranh", "Truyện trinh thám"], answer: 0, level: "easy" },
    { question: "Tỉ lệ học sinh mượn truyện tranh tuần 2 so với tuần 1 thay đổi thế nào?", options: ["Tăng từ 25% lên 60%", "Giảm từ 60% xuống 25%", "Không thay đổi", "Giảm còn 0%"], answer: 0, level: "easy" },
    { question: "Trong bài toán 1 000 chiếc áo, cỡ M chiếm khoảng bao nhiêu chiếc?", options: ["300 chiếc", "200 chiếc", "400 chiếc", "500 chiếc"], answer: 0, level: "easy" },
    { question: "Tỉ số phần trăm 40% của 30 học sinh là bao nhiêu bạn?", options: ["12 bạn", "10 bạn", "15 bạn", "8 bạn"], answer: 0, level: "easy" },
    { question: "Tỉ số phần trăm 10% của 30 học sinh là bao nhiêu bạn?", options: ["3 bạn", "6 bạn", "5 bạn", "2 bạn"], answer: 0, level: "easy" },
    { question: "Trong biểu đồ quạt tròn, một nửa hình tròn tương ứng với tỉ lệ bao nhiêu?", options: ["50%", "25%", "100%", "75%"], answer: 0, level: "easy" },
    { question: "Nếu 1 000 chiếc áo bán được, 50% tổng số áo tương ứng với bao nhiêu chiếc?", options: ["500 chiếc", "250 chiếc", "300 chiếc", "400 chiếc"], answer: 0, level: "easy" },
    { question: "Nếu 1 000 chiếc áo bán được, 20% tương ứng với bao nhiêu chiếc?", options: ["200 chiếc", "300 chiếc", "400 chiếc", "100 chiếc"], answer: 0, level: "easy" }
];

// 5. Global Handlers & State
window.lesson148State = {
    attempts: { s1: 0, s2: 0, s3: 0, s4: 0 }
};

window.submitEx148_1 = function () {
    window.lesson148State.attempts.s1++;
    const max = document.getElementById('ans-148-1a-max')?.value;
    const min = document.getElementById('ans-148-1a-min')?.value;
    const order = document.getElementById('ans-148-1b')?.value;

    if (!max || !min || !order) {
        alert("Em hãy chọn đầy đủ đáp án cho câu a và câu b!");
        return;
    }

    const cMax = (max === 'Châu Á');
    const cMin = (min === 'Châu Đại dương');
    const cOrder = (order === 'Giảm dần');

    const correctCount = (cMax ? 1 : 0) + (cMin ? 1 : 0) + (cOrder ? 1 : 0);
    const isCorrect = (correctCount === 3);
    const score = Math.round((correctCount / 3) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) Đông nhất: Châu Á, Ít nhất: Châu Đại dương ; b) Giảm dần",
        `a) Đông nhất: ${max}, Ít nhất: ${min} ; b) ${order}`,
        "Em hãy so sánh các số liệu phần trăm hiển thị trên biểu đồ để xác định giá trị lớn nhất, nhỏ nhất và thứ tự sắp xếp nhé!",
        `
        a) Châu Á đông dân nhất (59,42%), Châu Đại dương ít dân nhất (0,55%).<br>
        b) Các số liệu được sắp xếp theo thứ tự Giảm dần.<br>
        Đáp số: a) Châu Á, Châu Đại dương ; b) Giảm dần.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-148-1", window.lesson148State.attempts.s1, 3, correctCount);
};

window.submitEx148_2 = function () {
    window.lesson148State.attempts.s2++;
    const max = document.getElementById('ans-148-2a-max')?.value;
    const min = document.getElementById('ans-148-2a-min')?.value;
    const num = document.getElementById('ans-148-2b')?.value.trim();

    if (!max || !min || !num) {
        alert("Em hãy chọn và điền đầy đủ đáp án câu a và câu b!");
        return;
    }

    const cMax = (max === 'Đọc sách');
    const cMin = (min === 'Chăm sóc cây');
    const cNum = (parseInt(num) === 6);

    const correctCount = (cMax ? 1 : 0) + (cMin ? 1 : 0) + (cNum ? 1 : 0);
    const isCorrect = (correctCount === 3);
    const score = Math.round((correctCount / 3) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) Nhiều nhất: Đọc sách, Ít nhất: Chăm sóc cây ; b) 6 học sinh",
        `a) Nhiều nhất: ${max}, Ít nhất: ${min} ; b) ${num} học sinh`,
        "Em hãy tìm phần quạt chiếm tỉ lệ % lớn nhất, nhỏ nhất và tính số học sinh thích giải câu đố (30 × 20%) nhé!",
        `
        a) Đọc sách được yêu thích nhất (40%), Chăm sóc cây ít nhất (10%).<br>
        b) Số học sinh thích giải câu đố: 30 × 20% = 6 học sinh.<br>
        Đáp số: a) Đọc sách, Chăm sóc cây ; b) 6 học sinh.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-148-2", window.lesson148State.attempts.s2, 3, correctCount);
};

window.submitEx148_3 = function () {
    window.lesson148State.attempts.s3++;
    const a = document.getElementById('ans-148-3a')?.value;
    const b = document.getElementById('ans-148-3b')?.value;
    const c = document.getElementById('ans-148-3c')?.value;

    if (!a || !b || !c) {
        alert("Em hãy chọn đầy đủ câu trả lời cho cả 3 câu a, b, c!");
        return;
    }

    const ca = (a === 'Truyện cười');
    const cb = (b === 'Sách khoa học');
    const cc = (c === 'Tăng lên');

    const correctCount = (ca ? 1 : 0) + (cb ? 1 : 0) + (cc ? 1 : 0);
    const isCorrect = (correctCount === 3);
    const score = Math.round((correctCount / 3) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) Truyện cười ; b) Sách khoa học ; c) Tăng lên",
        `a) ${a} ; b) ${b} ; c) ${c}`,
        "Em hãy đối chiếu tỉ số phần trăm từng loại sách giữa biểu đồ Tuần thứ nhất và Tuần thứ hai nhé!",
        `
        a) Tuần 1: Truyện cười mượn nhiều nhất (45%).<br>
        b) Sách khoa học không thay đổi (20%).<br>
        c) Truyện tranh tăng từ 25% lên 60% nên đã Tăng lên.<br>
        Đáp số: a) Truyện cười ; b) Sách khoa học ; c) Tăng lên.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-148-3", window.lesson148State.attempts.s3, 3, correctCount);
};

window.ans_148_4 = function (idx) {
    window.lesson148State.attempts.s4++;
    const isCorrect = (idx === 1);
    const choices = ['A. 200 chiếc', 'B. 300 chiếc', 'C. 400 chiếc', 'D. 500 chiếc'];

    window.showMathFeedback(
        isCorrect,
        "B. 300 chiếc",
        choices[idx],
        "Em hãy quan sát phần quạt đại diện cho cỡ M (lớn hơn 1/4 hình tròn và nhỏ hơn nửa hình tròn) để chọn số lượng phù hợp nhé!",
        `
        Quan sát biểu đồ quạt:<br>
        • Cỡ M chiếm khoảng 30% tổng số áo.<br>
        • Số áo cỡ M bán được là: 1 000 × 30% = 300 chiếc.<br>
        Đáp án đúng là B. 300 chiếc.
        `
    );

    const btnIds = ['btn-check-148-4-a', 'btn-check-148-4-b', 'btn-check-148-4-c', 'btn-check-148-4-d'];
    window.submitMathLesson(metadata.title, isCorrect ? 100 : 0, btnIds[idx], window.lesson148State.attempts.s4, 1, isCorrect ? 1 : 0);
};

// 6. Main Lesson Export
export const lesson148 = {
    topic: "Số liệu và Biểu đồ",
    week: "30",
    period: "148",
    title: metadata.title || lessonInfo.title,
    desc: lessonInfo.description,
    content: lesson148Content,
    practice: lesson148Practice,
    quizPool: lesson148QuizPool,
    metadata,
    lessonInfo,
    onLoad: () => {
        console.log("Lesson 148 Loaded: Bài 64. Biểu đồ hình quạt tròn (tiết 2)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};

window.lesson148 = lesson148;
export default lesson148;
