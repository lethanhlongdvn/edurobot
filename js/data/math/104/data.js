// ===================================================================
// Tiết 104 - Bài 42: Máy tính cầm tay (tiết 2)
// DATA: Nội dung slide bài học và quiz pool
// ===================================================================

export const lesson104Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Slide 1: Khám phá - Ví dụ 1 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">🔍</div>
                                <h3 class="text-blue-700 uppercase italic text-xl font-black">Khám phá: Tính tỉ số phần trăm bằng máy tính</h3>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage104('./assets/images/toan/toan_tap_2/104/kp.png', 'Khám phá máy tính cầm tay')" src="./assets/images/toan/toan_tap_2/104/kp.png" alt="Khám phá máy tính cầm tay" class="w-full max-w-[650px] h-auto object-contain rounded-2xl border-4 border-blue-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage104('./assets/images/toan/toan_tap_2/104/kp.png', 'Khám phá máy tính cầm tay')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                                <div class="bg-white p-6 rounded-3xl border border-blue-150 space-y-4">
                                    <p class="font-extrabold text-blue-800 text-2xl">a) Ví dụ 1: Tính 5% của 780 000</p>
                                    <p class="font-bold text-slate-700 pl-4">– Lần lượt ấn các phím:</p>
                                    <div class="flex items-center justify-center gap-2 flex-wrap py-2 font-mono">
                                        <span class="w-10 h-10 bg-slate-700 text-white font-black rounded-lg flex items-center justify-center text-2xl shadow">7</span>
                                        <span class="w-10 h-10 bg-slate-700 text-white font-black rounded-lg flex items-center justify-center text-2xl shadow">8</span>
                                        <span class="w-10 h-10 bg-slate-700 text-white font-black rounded-lg flex items-center justify-center text-2xl shadow">0</span>
                                        <span class="w-10 h-10 bg-slate-700 text-white font-black rounded-lg flex items-center justify-center text-2xl shadow">0</span>
                                        <span class="w-10 h-10 bg-slate-700 text-white font-black rounded-lg flex items-center justify-center text-2xl shadow">0</span>
                                        <span class="w-10 h-10 bg-slate-700 text-white font-black rounded-lg flex items-center justify-center text-2xl shadow">0</span>
                                        <span class="w-10 h-10 bg-blue-600 text-white font-black rounded-lg flex items-center justify-center text-2xl shadow">×</span>
                                        <span class="w-10 h-10 bg-slate-700 text-white font-black rounded-lg flex items-center justify-center text-2xl shadow">5</span>
                                        <span class="w-10 h-10 bg-emerald-600 text-white font-black rounded-lg flex items-center justify-center text-2xl shadow">%</span>
                                        <span class="w-10 h-10 bg-amber-500 text-white font-black rounded-lg flex items-center justify-center text-2xl shadow">=</span>
                                    </div>
                                    <p class="font-bold text-emerald-700 text-xl pl-4">– Màn hình xuất hiện kết quả: <span class="text-slate-900 font-extrabold">39 000</span>. Vậy 5% của 780 000 là <span class="text-slate-900 font-extrabold">39 000</span>.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Khám phá - Ví dụ 2 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-amber-500 space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-amber-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">💡</div>
                                <h3 class="text-amber-700 uppercase italic text-xl font-black">Khám phá: Ví dụ 2</h3>
                            </div>

                            <div class="p-6 bg-amber-50/80 border-2 border-amber-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="bg-white p-6 rounded-3xl border border-amber-150 space-y-4">
                                    <p class="font-extrabold text-amber-800 text-2xl">b) Ví dụ 2: Tính tỉ số phần trăm của 3 và 40</p>
                                    <p class="font-bold text-slate-700 pl-4">– Lần lượt ấn các phím:</p>
                                    <div class="flex items-center justify-center gap-3 flex-wrap py-2 font-mono">
                                        <span class="w-12 h-12 bg-slate-700 text-white font-black rounded-xl flex items-center justify-center text-2xl shadow">3</span>
                                        <span class="w-12 h-12 bg-blue-600 text-white font-black rounded-xl flex items-center justify-center text-2xl shadow">÷</span>
                                        <span class="w-12 h-12 bg-slate-700 text-white font-black rounded-xl flex items-center justify-center text-2xl shadow">4</span>
                                        <span class="w-12 h-12 bg-slate-700 text-white font-black rounded-xl flex items-center justify-center text-2xl shadow">0</span>
                                        <span class="w-12 h-12 bg-emerald-600 text-white font-black rounded-xl flex items-center justify-center text-2xl shadow">%</span>
                                        <span class="w-12 h-12 bg-amber-500 text-white font-black rounded-xl flex items-center justify-center text-2xl shadow">=</span>
                                    </div>
                                    <p class="font-bold text-emerald-700 text-xl pl-4">– Màn hình xuất hiện kết quả: <span class="text-slate-900 font-extrabold">7,5</span>. Vậy tỉ số phần trăm của 3 và 40 là <span class="text-slate-900 font-extrabold">7,5%</span>.</p>
                                </div>
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

                    <!-- Slide 1: Hoạt động 1 & 2 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 1. Hoạt động 1</h3>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="bg-white p-6 rounded-3xl border border-blue-100 space-y-4">
                                    <p class="font-extrabold text-blue-800 flex items-center gap-2">
                                        <span class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">1</span>
                                        Sử dụng máy tính cầm tay để tính:
                                    </p>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 font-bold text-slate-800">
                                        <div class="flex items-center gap-2">
                                            <span>a) 8% của 35 là:</span>
                                            <input id="104-hd1-1" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span>b) 32% của 4 là:</span>
                                            <input id="104-hd1-2" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-104-hd1" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>a) 8% của 35 là: 35 × 8% = 2,8</p>
                                    <p>b) 32% của 4 là: 4 × 32% = 1,28</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution104('hd1')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-104-hd1" onclick="window.check_104_hd1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Hoạt động 2 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 2. Hoạt động 2</h3>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="bg-white p-6 rounded-3xl border border-blue-100 space-y-4">
                                    <p class="font-extrabold text-blue-800 flex items-center gap-2">
                                        <span class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">2</span>
                                        Sử dụng máy tính cầm tay để tính tỉ số phần trăm của:
                                    </p>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 font-bold text-slate-800">
                                        <div class="flex items-center gap-2">
                                            <span>a) 16 và 80 là:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="104-hd2-1" type="text" class="w-24 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>%</span>
                                            </span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span>b) 38 và 125 là:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="104-hd2-2" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>%</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-104-hd2" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>a) Tỉ số phần trăm của 16 và 80 là: 16 : 80 = 20%</p>
                                    <p>b) Tỉ số phần trăm của 38 và 125 là: 38 : 125 = 30,4%</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution104('hd2')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-104-hd2" onclick="window.check_104_hd2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Luyện tập 1 - Khuyến mại hoàn tiền -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase">Bài 3. Luyện tập 1: Chính sách hoàn tiền</h3>
                            </div>

                            <div class="p-6 bg-emerald-50/80 border-2 border-emerald-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-5">
                                <p class="font-bold text-slate-800">
                                    Một cửa hàng áp dụng chính sách khuyến mại hoàn tiền <span class="text-emerald-700 font-extrabold">10%</span> cho mọi đơn hàng từ <span class="text-emerald-700 font-extrabold">1 000 000 đồng</span> trở lên. Hãy tính số tiền được hoàn lại của mỗi hoá đơn sau:
                                </p>

                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div class="bg-amber-50/80 p-5 rounded-2xl border-2 border-amber-200 space-y-3">
                                        <p class="font-black text-amber-800">a) Hoá đơn A:</p>
                                        <div class="text-lg font-bold text-slate-700 space-y-1 pl-2">
                                            <p>• Áo len: 275 000 đồng</p>
                                            <p>• Quần âu: 599 000 đồng</p>
                                            <p>• Mũ thời trang: 120 000 đồng</p>
                                        </div>
                                        <div class="flex items-center gap-2 pt-2 border-t border-amber-200 font-bold">
                                            <span>Số tiền hoàn lại:</span>
                                            <input id="104-lt1-1" type="text" class="w-32 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>đồng</span>
                                        </div>
                                    </div>

                                    <div class="bg-amber-50/80 p-5 rounded-2xl border-2 border-amber-200 space-y-3">
                                        <p class="font-black text-amber-800">b) Hoá đơn B:</p>
                                        <div class="text-lg font-bold text-slate-700 space-y-1 pl-2">
                                            <p>• Áo khoác: 850 000 đồng</p>
                                            <p>• Găng tay giữ nhiệt: 250 000 đồng</p>
                                            <p class="text-transparent">.</p>
                                        </div>
                                        <div class="flex items-center gap-2 pt-2 border-t border-amber-200 font-bold">
                                            <span>Số tiền hoàn lại:</span>
                                            <input id="104-lt1-2" type="text" class="w-36 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>đồng</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-104-lt1" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p class="font-bold text-emerald-700">a) Hoá đơn A:</p>
                                    <p>Tổng giá trị hoá đơn a là: 275 000 + 599 000 + 120 000 = 994 000 (đồng)</p>
                                    <p>Vì 994 000 đồng &lt; 1 000 000 đồng nên hoá đơn a được hoàn lại 0 đồng.</p>
                                    <p class="font-bold text-emerald-700 mt-2">b) Hoá đơn B:</p>
                                    <p>Tổng giá trị hoá đơn b là: 850 000 + 250 000 = 1 100 000 (đồng)</p>
                                    <p>Vì 1 100 000 đồng &gt; 1 000 000 đồng nên hoá đơn b được hoàn lại số tiền là: 1 100 000 × 10% = 110 000 (đồng)</p>
                                    <p class="font-bold text-emerald-700 mt-1">Đáp số: a) 0 đồng; b) 110 000 đồng.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution104('lt1')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-104-lt1" onclick="window.check_104_lt1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Luyện tập 2 - Lãi suất ngân hàng -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-orange-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                <h3 class="text-2xl md:text-3xl font-black text-orange-700 uppercase">Bài 4. Luyện tập 2: Tiền gửi ngân hàng</h3>
                            </div>

                            <div class="p-6 bg-orange-50/80 border-2 border-orange-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-5">
                                <p class="font-bold text-slate-800 text-xl">
                                    Chú Năm gửi <span class="text-orange-700 font-extrabold">250 000 000 đồng</span> vào ngân hàng với lãi suất <span class="text-orange-700 font-extrabold">8%</span> một năm. Hãy sử dụng máy tính cầm tay để tính số tiền lãi mà chú Năm nhận được sau một năm.
                                </p>

                                <div class="bg-white p-6 rounded-3xl border border-orange-150 space-y-4">
                                    <div class="flex items-center gap-3 flex-wrap font-bold text-slate-800 text-xl">
                                        <span>Số tiền lãi chú Năm nhận được là:</span>
                                        <input id="104-lt2-1" type="text" class="w-48 h-12 text-center font-black border-2 border-orange-300 rounded-xl outline-none focus:border-orange-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>đồng</span>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-104-lt2" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Số tiền lãi mà chú Năm nhận được sau một năm là:</p>
                                    <p class="pl-6 font-bold text-slate-900">250 000 000 × 8% = 20 000 000 (đồng)</p>
                                    <p class="font-bold text-orange-700 mt-1">Đáp số: 20 000 000 đồng.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution104('lt2')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-104-lt2" onclick="window.check_104_lt2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <script>
            window.toggleSolution104 = (id) => {
                const el = document.getElementById('solution-104-' + id);
                if (el) el.classList.toggle('hidden');
            };
        </script>
    `,

    "quizPool": [
        { "question": "Tính 5% của 780 000 bằng máy tính cầm tay thu được kết quả là:", "options": ["39 000", "3 900", "390 000", "78 000"], "answer": 0 },
        { "question": "Tính tỉ số phần trăm của 3 và 40 bằng máy tính cầm tay ta ấn: 3 ÷ 4 0 % =, kết quả là:", "options": ["7,5%", "0,75%", "75%", "13,3%"], "answer": 0 },
        { "question": "8% của 35 bằng bao nhiêu?", "options": ["2,8", "28", "0,28", "2,8%"], "answer": 0 },
        { "question": "32% của 4 bằng bao nhiêu?", "options": ["1,28", "12,8", "0,128", "128"], "answer": 0 },
        { "question": "Tỉ số phần trăm của 16 và 80 là:", "options": ["20%", "25%", "50%", "2%"], "answer": 0 },
        { "question": "Tỉ số phần trăm của 38 và 125 là:", "options": ["30,4%", "3,04%", "304%", "34%"], "answer": 0 },
        { "question": "Hoá đơn A có tổng tiền 994 000 đồng. Với chính sách hoàn 10% cho đơn từ 1 triệu đồng trở lên, số tiền hoàn lại là:", "options": ["0 đồng", "99 400 đồng", "9 940 đồng", "100 000 đồng"], "answer": 0 },
        { "question": "Hoá đơn B có tổng tiền 1 100 000 đồng. Số tiền được hoàn lại 10% là:", "options": ["110 000 đồng", "11 000 đồng", "1 100 đồng", "0 đồng"], "answer": 0 },
        { "question": "Chú Năm gửi 250 000 000 đồng lãi suất 8%/năm. Số tiền lãi sau 1 năm là:", "options": ["20 000 000 đồng", "2 000 000 đồng", "200 000 đồng", "25 000 000 đồng"], "answer": 0 },
        { "question": "Để tính 15% của 500 bằng máy tính cầm tay, ta ấn lần lượt các phím:", "options": ["5 0 0 × 1 5 % =", "5 0 0 ÷ 1 5 % =", "1 5 × 5 0 0 =", "5 0 0 + 1 5 % ="], "answer": 0 },
        { "question": "Để tính tỉ số phần trăm của 25 và 200, ta ấn:", "options": ["2 5 ÷ 2 0 0 % =", "2 5 × 2 0 0 % =", "2 0 0 ÷ 2 5 % =", "2 5 ÷ 2 0 0 ="], "answer": 0 },
        { "question": "10% của 1 000 000 đồng là:", "options": ["100 000 đồng", "10 000 đồng", "1 000 đồng", "10 000 000 đồng"], "answer": 0 },
        { "question": "Tỉ số phần trăm của 50 và 500 là:", "options": ["10%", "5%", "50%", "1%"], "answer": 0 },
        { "question": "Phím % trên máy tính cầm tay dùng để làm gì?", "options": ["Tính tỉ số phần trăm và giá trị %", "Thực hiện phép cộng", "Thực hiện phép nhân", "Xóa màn hình"], "answer": 0 },
        { "question": "Một món đồ có giá 500 000 đồng được giảm giá 20%. Số tiền được giảm là:", "options": ["100 000 đồng", "50 000 đồng", "200 000 đồng", "20 000 đồng"], "answer": 0 }
    ]
};
