// ===================================================================
// Tiết 110 - Bài 46: Xăng-ti-mét khối. Đề-xi-mét khối (tiết 2)
// DATA: Nội dung slide bài học và quiz pool
// ===================================================================

export const lesson110Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Slide 1: Ôn tập kiến thức trọng tâm -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-2 border-blue-50 shadow-xl bg-white/80 backdrop-blur-xl space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">🎯</div>
                                <h3 class="text-slate-800 uppercase italic text-xl font-black">Kiến thức trọng tâm Tiết 110</h3>
                            </div>

                            <div class="bg-amber-50 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border-2 border-amber-200 space-y-4 text-lg md:text-xl text-slate-700 leading-relaxed">
                                <p class="text-xl md:text-2xl font-extrabold text-amber-800">💡 Nhắc lại kiến thức & Mối quan hệ đơn vị đo thể tích:</p>
                                <ul class="list-disc pl-6 space-y-3 font-bold text-slate-800">
                                    <li><span class="text-blue-700">1 dm³ = 1 000 cm³</span> (Đề-xi-mét khối gấp 1 000 lần xăng-ti-mét khối).</li>
                                    <li><span class="text-blue-700">1 cm³ = 1/1000 dm³ = 0,001 dm³</span>.</li>
                                    <li><span class="text-blue-700">Đơn vị đo dung tích lỏng:</span> <span class="bg-white px-3 py-1 rounded-xl border border-amber-300 font-extrabold text-rose-600">1 l = 1 dm³ = 1 000 cm³</span>.</li>
                                    <li><span class="text-blue-700">Các phép tính số đo thể tích:</span> Thực hiện tính toán như đối với các số tự nhiên, phân số hoặc số thập phân, sau đó ghi kèm đơn vị đo thể tích.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,

    "practice": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Slide 1: Bài 1 - Tính các phép tính số đo thể tích -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 1. Tính</h3>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="bg-white p-6 rounded-3xl border border-blue-150 space-y-6">
                                    <div class="space-y-4 font-bold text-slate-800 text-xl">
                                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span class="w-6 text-left shrink-0">a)</span>
                                            <span>12,5 cm³ + 7,5 cm³ =</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="110-1-a1" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>cm³</span>
                                            </span>
                                        </div>
                                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span class="w-6 shrink-0"></span>
                                            <span>100 dm³ − 27 dm³ =</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="110-1-a2" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>dm³</span>
                                            </span>
                                        </div>
                                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span class="w-6 text-left shrink-0">b)</span>
                                            <span>16 dm³ × 4 =</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="110-1-b1" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>dm³</span>
                                            </span>
                                        </div>
                                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span class="w-6 shrink-0"></span>
                                            <span>1 000 cm³ : 10 =</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="110-1-b2" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>cm³</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-110-1" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-3 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>a) 12,5 cm³ + 7,5 cm³ = 20 cm³<br>100 dm³ − 27 dm³ = 73 dm³</p>
                                    <p>b) 16 dm³ × 4 = 64 dm³<br>1 000 cm³ : 10 = 100 cm³</p>
                                    <p class="font-bold text-blue-700 mt-1">Đáp số: a) 20 cm³; 73 dm³. b) 64 dm³; 100 cm³.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution110('1')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-110-1" onclick="window.check_110_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 - Đổi đơn vị đo thể tích -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-amber-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                <h3 class="text-2xl md:text-3xl font-black text-amber-700 uppercase">Bài 2. Số ?</h3>
                            </div>

                            <div class="p-6 bg-amber-50/80 border-2 border-amber-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <p class="font-bold text-slate-800">
                                    Điền số thích hợp vào ô trống:
                                </p>

                                <div class="bg-white p-6 rounded-3xl border border-amber-150 space-y-4">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-bold text-slate-800 text-xl">
                                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>a) 3,9 dm³ =</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="110-2-a" type="text" class="w-32 h-11 text-center font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>cm³</span>
                                            </span>
                                        </div>
                                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>b) 250 cm³ =</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="110-2-b" type="text" class="w-32 h-11 text-center font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>dm³</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-110-2" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>a) Vì 1 dm³ = 1 000 cm³ nên:<br>3,9 dm³ = 3,9 × 1 000 = 3 900 cm³</p>
                                    <p>b) Vì 1 cm³ = 1/1 000 dm³ = 0,001 dm³ nên:<br>250 cm³ = 250 : 1 000 = 0,25 dm³ (hoặc 250/1 000 dm³ = 1/4 dm³)</p>
                                    <p class="font-bold text-amber-700 mt-1">Đáp số: a) 3 900 cm³; b) 0,25 dm³.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution110('2')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-110-2" onclick="window.check_110_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 - Chọn số đo thể tích phù hợp -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase">Bài 3. Chọn số đo thể tích phù hợp</h3>
                            </div>

                            <div class="p-6 bg-emerald-50/80 border-2 border-emerald-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <p class="font-bold text-slate-800">
                                    Chọn số đo thể tích phù hợp với mỗi đồ vật dưới đây:
                                </p>

                                <div class="bg-white p-6 rounded-3xl border border-emerald-150 space-y-6 flex flex-col items-center">
                                    <div class="relative mx-auto border-4 border-emerald-200 rounded-[2rem] bg-white overflow-hidden shadow-lg select-none w-full max-w-[650px]">
                                        <!-- Ảnh nền bài tập 3 -->
                                        <img src="./assets/images/toan/toan_tap_2/110/3.png" alt="Bài 3: Chọn số đo thể tích phù hợp" class="w-full h-auto block select-none">
                                        
                                        <!-- SVG vẽ nét chì -->
                                        <svg id="svg-lines-110" class="absolute inset-0 w-full h-full pointer-events-none z-10" style="overflow:visible;"></svg>

                                        <!-- Các nút click ở hàng trên (đồ vật) -->
                                        <button id="item-1" onclick="window.clickNode110('item-1')" class="item-110 absolute cursor-pointer hover:bg-emerald-500/10 border-2 border-transparent hover:border-emerald-500/30 rounded-[1.5rem] z-20 transition-all bg-white/0 block" style="top: 2%; left: 4%; width: 28%; height: 68%; outline: none;" title="Loa thùng lớn"></button>
                                        <button id="item-2" onclick="window.clickNode110('item-2')" class="item-110 absolute cursor-pointer hover:bg-emerald-500/10 border-2 border-transparent hover:border-emerald-500/30 rounded-[1.5rem] z-20 transition-all bg-white/0 block" style="top: 2%; left: 36%; width: 28%; height: 68%; outline: none;" title="Cục tẩy nhỏ"></button>
                                        <button id="item-3" onclick="window.clickNode110('item-3')" class="item-110 absolute cursor-pointer hover:bg-emerald-500/10 border-2 border-transparent hover:border-emerald-500/30 rounded-[1.5rem] z-20 transition-all bg-white/0 block" style="top: 2%; left: 68%; width: 28%; height: 68%; outline: none;" title="Hộp bút học sinh"></button>

                                        <!-- Các nút click ở hàng dưới (số đo thể tích) -->
                                        <button id="vol-3" onclick="window.clickNode110('vol-3')" class="vol-110 absolute cursor-pointer hover:bg-emerald-500/10 border-2 border-transparent hover:border-emerald-500/30 rounded-[1.5rem] z-20 transition-all bg-white/0 block" style="top: 74%; left: 2%; width: 30%; height: 24%; outline: none;" title="3 cm³"></button>
                                        <button id="vol-216" onclick="window.clickNode110('vol-216')" class="vol-110 absolute cursor-pointer hover:bg-emerald-500/10 border-2 border-transparent hover:border-emerald-500/30 rounded-[1.5rem] z-20 transition-all bg-white/0 block" style="top: 74%; left: 35%; width: 30%; height: 24%; outline: none;" title="216 dm³"></button>
                                        <button id="vol-05" onclick="window.clickNode110('vol-05')" class="vol-110 absolute cursor-pointer hover:bg-emerald-500/10 border-2 border-transparent hover:border-emerald-500/30 rounded-[1.5rem] z-20 transition-all bg-white/0 block" style="top: 74%; left: 68%; width: 30%; height: 24%; outline: none;" title="0,5 dm³"></button>
                                    </div>
                                    <div class="text-slate-500 text-sm italic font-bold text-center">Hướng dẫn: Nhấp vào một đồ vật hoặc số đo, sau đó nhấp vào đối tượng tương ứng ở hàng còn lại để nối chúng.</div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-110-3" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>• Cục tẩy là đồ vật rất nhỏ nên chọn thể tích nhỏ nhất: <span class="font-bold text-emerald-700">3 cm³</span>.</p>
                                    <p>• Hộp bút học sinh có kích thước trung bình nên tương ứng với thể tích: <span class="font-bold text-emerald-700">0,5 dm³</span> (bằng 500 cm³).</p>
                                    <p>• Chiếc loa thùng có kích thước lớn nhất nên tương ứng với thể tích lớn nhất: <span class="font-bold text-emerald-700">216 dm³</span>.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.reset110_3()" class="px-6 py-3.5 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Làm lại</button>
                                <button onclick="window.toggleSolution110('3')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-110-3" onclick="window.check_110_3()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Bài 4 - Rô-bốt đỗ nước vào ô làm đá -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-rose-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                                <h3 class="text-2xl md:text-3xl font-black text-rose-700 uppercase">Bài 4. Rô-bốt đong nước làm đá</h3>
                            </div>

                            <div class="p-6 bg-rose-50/80 border-2 border-rose-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-5">
                                <p class="font-bold text-slate-800">
                                    Rô-bốt dùng <span class="text-rose-700 font-extrabold">2 chai nước</span> có thể tích là <span class="text-rose-700 font-extrabold">0,5 l</span> để đổ đầy nước vào các ô làm đá, mỗi ô có thể tích <span class="text-rose-700 font-extrabold">8 cm³</span>. Hỏi Rô-bốt có thể đổ đầy được nhiều nhất bao nhiêu ô? Biết <span class="bg-white px-2 py-0.5 rounded border border-rose-200 text-rose-800 font-mono">1 l = 1 dm³</span>.
                                </p>

                                <div class="bg-white p-6 rounded-3xl border border-rose-150 space-y-4">
                                    <div class="flex items-center gap-3 font-bold text-slate-800 text-xl flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>Rô-bốt có thể đổ đầy được nhiều nhất:</span>
                                        <input id="110-4" type="text" class="w-32 h-11 text-center font-black border-2 border-rose-300 rounded-xl outline-none focus:border-rose-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>ô làm đá</span>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-110-4" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Tổng thể tích nước trong 2 chai nước là:<br>0,5 × 2 = 1 (lít)</p>
                                    <p>Đổi 1 lít = 1 dm³ = 1 000 cm³.</p>
                                    <p>Số ô làm đá Rô-bốt có thể đổ đầy nhiều nhất là:<br>1 000 : 8 = 125 (ô)</p>
                                    <p class="font-bold text-rose-700 mt-1">Đáp số: 125 ô làm đá.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution110('4')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-110-4" onclick="window.check_110_4()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <script>
            window.toggleSolution110 = (id) => {
                const el = document.getElementById('solution-110-' + id);
                if (el) el.classList.toggle('hidden');
            };
        </script>
    `,

    "quizPool": [
        { "question": "12,5 cm³ + 7,5 cm³ bằng bao nhiêu?", "options": ["20 cm³", "20 dm³", "19,5 cm³", "200 cm³"], "answer": 0 },
        { "question": "100 dm³ − 27 dm³ bằng bao nhiêu?", "options": ["73 dm³", "83 dm³", "73 cm³", "63 dm³"], "answer": 0 },
        { "question": "16 dm³ × 4 bằng bao nhiêu?", "options": ["64 dm³", "64 cm³", "48 dm³", "60 dm³"], "answer": 0 },
        { "question": "1 000 cm³ : 10 bằng bao nhiêu?", "options": ["100 cm³", "10 cm³", "100 dm³", "1 000 cm³"], "answer": 0 },
        { "question": "3,9 dm³ đổi ra xăng-ti-mét khối bằng:", "options": ["3 900 cm³", "390 cm³", "39 cm³", "39 000 cm³"], "answer": 0 },
        { "question": "250 cm³ đổi ra đề-xi-mét khối bằng:", "options": ["0,25 dm³", "2,5 dm³", "0,025 dm³", "25 dm³"], "answer": 0 },
        { "question": "Một cục tẩy học sinh thông thường có thể tích khoảng:", "options": ["3 cm³", "216 dm³", "0,5 dm³", "3 dm³"], "answer": 0 },
        { "question": "Một chiếc loa thùng loại lớn có thể tích khoảng:", "options": ["216 dm³", "3 cm³", "0,5 dm³", "216 cm³"], "answer": 0 },
        { "question": "Một chiếc hộp bút học sinh có thể tích khoảng:", "options": ["0,5 dm³", "3 cm³", "216 dm³", "50 dm³"], "answer": 0 },
        { "question": "1 lít nước tương ứng với thể tích nào sau đây?", "options": ["1 dm³", "1 cm³", "10 dm³", "100 cm³"], "answer": 0 },
        { "question": "0,5 lít đổi ra xăng-ti-mét khối bằng:", "options": ["500 cm³", "50 cm³", "5 000 cm³", "5 cm³"], "answer": 0 },
        { "question": "Rô-bốt dùng 2 chai nước 0,5 l (tổng 1 l) đổ vào các ô làm đá 8 cm³. Số ô đổ đầy nhiều nhất là:", "options": ["125 ô", "100 ô", "120 ô", "250 ô"], "answer": 0 },
        { "question": "Một bể cá chứa được 15 l nước. Thể tích bể cá đó tính theo đề-xi-mét khối là:", "options": ["15 dm³", "150 dm³", "1 500 dm³", "1,5 dm³"], "answer": 0 },
        { "question": "Đề-xi-mét khối gấp xăng-ti-mét khối bao nhiêu lần?", "options": ["1 000 lần", "100 lần", "10 lần", "10 000 lần"], "answer": 0 },
        { "question": "Phép tính 2,5 dm³ + 450 cm³ cho kết quả là:", "options": ["2 950 cm³", "452,5 cm³", "2,95 cm³", "29,5 dm³"], "answer": 0 }
    ]
};
