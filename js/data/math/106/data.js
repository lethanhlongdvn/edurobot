// ===================================================================
// Tiết 106 - Bài 44: Luyện tập chung (tiết 1)
// DATA: Nội dung slide bài học và quiz pool
// ===================================================================

export const lesson106Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Slide 1: Ôn tập kiến thức trọng tâm -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] border-2 border-blue-50 shadow-xl bg-white/80 backdrop-blur-xl space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">🎯</div>
                                <h3 class="text-slate-800 uppercase italic text-xl font-black">Kiến thức trọng tâm Tiết 106</h3>
                            </div>

                            <div class="bg-amber-50 p-8 rounded-[2.5rem] border-2 border-amber-200 space-y-4 text-xl text-slate-700 leading-relaxed">
                                <p class="text-2xl font-extrabold text-amber-800">💡 Nhắc lại kiến thức:</p>
                                <ul class="list-disc pl-6 space-y-3 font-bold text-slate-800">
                                    <li><span class="text-blue-700">Tỉ số phần trăm:</span> Chuyển phân số thành phân số thập phân có mẫu số 100 rồi viết kí hiệu <span class="text-rose-600">%</span>.</li>
                                    <li><span class="text-blue-700">Tỉ lệ bản đồ:</span> <span class="bg-white px-2 py-1 rounded border border-amber-200 font-mono">Độ dài thật = Độ dài bản đồ × Mẫu số tỉ lệ</span>.</li>
                                    <li><span class="text-blue-700">Bài toán Tổng - Tỉ:</span> Tìm tổng số phần bằng nhau $\rightarrow$ Tìm giá trị 1 phần $\rightarrow$ Tìm số bé và số lớn.</li>
                                    <li><span class="text-blue-700">Giảm giá %:</span> Số tiền giảm = Giá niêm yết × % giảm giá.</li>
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

                    <!-- Slide 1: Bài 1 - Nối xe ô tô với tỉ số phần trăm -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 1. Chọn cách viết tỉ số phần trăm</h3>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <p class="font-bold text-slate-800">
                                    Chọn cách viết tỉ số phần trăm thích hợp cho tỉ số ghi ở mỗi chiếc xe:
                                </p>

                                <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage106('./assets/images/toan/toan_tap_2/106/1.png', 'Mỗi chiếc xe ô tô mang phân số')" src="./assets/images/toan/toan_tap_2/106/1.png" alt="Mỗi chiếc xe ô tô mang phân số" class="w-full max-w-[650px] h-auto object-contain rounded-2xl border-4 border-blue-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage106('./assets/images/toan/toan_tap_2/106/1.png', 'Mỗi chiếc xe ô tô mang phân số')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                                <div class="bg-white p-6 rounded-3xl border border-blue-150 space-y-4">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-slate-800">
                                        <div class="flex items-center gap-2">
                                            <span>• Xe A (6/10) viết là:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="106-1-A" type="text" class="w-24 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>%</span>
                                            </span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span>• Xe B (17/20) viết là:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="106-1-B" type="text" class="w-24 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>%</span>
                                            </span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span>• Xe C (25/50) viết là:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="106-1-C" type="text" class="w-24 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>%</span>
                                            </span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span>• Xe D (12/100) viết là:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="106-1-D" type="text" class="w-24 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>%</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-106-1" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Cách viết tỉ số phần trăm tương ứng của các chiếc xe:</p>
                                    <p>• Xe A (6/10 = 60/100) = 60%</p>
                                    <p>• Xe B (17/20 = 85/100) = 85%</p>
                                    <p>• Xe C (25/50 = 50/100) = 50%</p>
                                    <p>• Xe D (12/100) = 12%</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution106('1')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-106-1" onclick="window.check_106_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 - Bảng tỉ lệ bản đồ -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-amber-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                <h3 class="text-2xl md:text-3xl font-black text-amber-700 uppercase">Bài 2. Số thích hợp điền vào bảng</h3>
                            </div>

                            <div class="p-6 bg-amber-50/80 border-2 border-amber-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="overflow-x-auto">
                                    <table class="w-full bg-white border-2 border-amber-200 rounded-2xl text-center border-collapse">
                                        <thead>
                                            <tr class="bg-rose-100 font-extrabold text-amber-900 text-xl border-b border-amber-200">
                                                <th class="p-3 border-r border-amber-200 text-left">Tỉ lệ bản đồ</th>
                                                <th class="p-3 border-r border-amber-200">1 : 2 000</th>
                                                <th class="p-3 border-r border-amber-200">1 : 2 000</th>
                                                <th class="p-3 border-r border-amber-200">1 : 500 000</th>
                                                <th class="p-3">1 : 500 000</th>
                                            </tr>
                                        </thead>
                                        <tbody class="font-bold text-slate-800">
                                            <tr class="border-b border-amber-200">
                                                <td class="p-3 border-r border-amber-200 font-extrabold text-rose-800 text-left">Độ dài trên bản đồ (cm)</td>
                                                <td class="p-3 border-r border-amber-200">2</td>
                                                <td class="p-3 border-r border-amber-200">
                                                    <input id="106-2-2" type="text" class="w-20 h-10 text-center font-black border-2 border-amber-300 rounded-lg outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                </td>
                                                <td class="p-3 border-r border-amber-200">1,5</td>
                                                <td class="p-3">
                                                    <input id="106-2-4" type="text" class="w-20 h-10 text-center font-black border-2 border-amber-300 rounded-lg outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 border-r border-amber-200 font-extrabold text-rose-800 text-left">Độ dài thật (km)</td>
                                                <td class="p-3 border-r border-amber-200">
                                                    <input id="106-2-1" type="text" class="w-24 h-10 text-center font-black border-2 border-amber-300 rounded-lg outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                </td>
                                                <td class="p-3 border-r border-amber-200">1,6</td>
                                                <td class="p-3 border-r border-amber-200">
                                                    <input id="106-2-3" type="text" class="w-24 h-10 text-center font-black border-2 border-amber-300 rounded-lg outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                </td>
                                                <td class="p-3">10</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-106-2" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>• Cột 1: Độ dài thật = 2 × 2 000 = 4 000 cm = 0,04 km</p>
                                    <p>• Cột 2: Đổi 1,6 km = 160 000 cm. Độ dài trên bản đồ = 160 000 : 2 000 = 80 cm</p>
                                    <p>• Cột 3: Độ dài thật = 1,5 × 500 000 = 750 000 cm = 7,5 km</p>
                                    <p>• Cột 4: Đổi 10 km = 1 000 000 cm. Độ dài trên bản đồ = 1 000 000 : 500 000 = 2 cm</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution106('2')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-106-2" onclick="window.check_106_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 - Thỏ và Rùa hái nấm -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase">Bài 3. Thỏ và Rùa hái nấm</h3>
                            </div>

                            <div class="p-6 bg-emerald-50/80 border-2 border-emerald-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-5">
                                <p class="font-bold text-slate-800">
                                    Thỏ và Rùa vào rừng hái nấm, hai bạn hái được tất cả <span class="text-emerald-700 font-extrabold">84 cây nấm</span>. Vì Thỏ mải chơi nên chỉ hái được số nấm bằng <span class="inline-flex flex-col items-center align-middle mx-1 font-extrabold text-emerald-700"><span class="border-b border-emerald-700 px-1 leading-none pb-0.5">2</span><span class="leading-none pt-0.5">5</span></span> số nấm của Rùa. Tìm số nấm mà mỗi bạn đã hái.
                                </p>

                                <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage106('./assets/images/toan/toan_tap_2/106/3.png', 'Thỏ và Rùa vào rừng hái nấm')" src="./assets/images/toan/toan_tap_2/106/3.png" alt="Thỏ và Rùa vào rừng hái nấm" class="w-full max-w-[550px] h-auto object-contain rounded-2xl border-4 border-emerald-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage106('./assets/images/toan/toan_tap_2/106/3.png', 'Thỏ và Rùa vào rừng hái nấm')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                                <div class="bg-white p-6 rounded-3xl border border-emerald-150 space-y-4">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-slate-800 text-xl">
                                        <div class="flex items-center gap-2">
                                            <span>• Số nấm Thỏ hái được:</span>
                                            <input id="106-3-1" type="text" class="w-28 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>cây</span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span>• Số nấm Rùa hái được:</span>
                                            <input id="106-3-2" type="text" class="w-28 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>cây</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-106-3" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Theo đề bài, tỉ số nấm của Thỏ và Rùa là 2/5.</p>
                                    <p>Tổng số phần bằng nhau là: 2 + 5 = 7 (phần)</p>
                                    <p>Số nấm Thỏ hái được là: 84 : 7 × 2 = 24 (cây nấm)</p>
                                    <p>Số nấm Rùa hái được là: 84 − 24 = 60 (cây nấm)</p>
                                    <p class="font-bold text-emerald-700 mt-1">Đáp số: Thỏ: 24 cây nấm; Rùa: 60 cây nấm.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution106('3')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-106-3" onclick="window.check_106_3()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Bài 4 - Giảm giá ti vi 8% -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-rose-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                                <h3 class="text-2xl md:text-3xl font-black text-rose-700 uppercase">Bài 4. Mua ti vi giảm giá 8%</h3>
                            </div>

                            <div class="p-6 bg-rose-50/80 border-2 border-rose-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-5">
                                <p class="font-bold text-slate-800">
                                    Giá một chiếc ti vi tại cửa hàng là <span class="text-rose-700 font-extrabold">15 000 000 đồng</span>. Để tri ân khách hàng, cửa hàng đã có đợt khuyến mại giảm giá mỗi chiếc ti vi <span class="text-rose-700 font-extrabold">8%</span>.
                                </p>

                                <div class="bg-white p-6 rounded-3xl border border-rose-150 space-y-4 font-bold text-slate-800">
                                    <div class="space-y-2">
                                        <p class="font-extrabold text-rose-800">a) Giá tiền một chiếc ti vi đã giảm bao nhiêu đồng?</p>
                                        <div class="flex items-center gap-2 pl-4">
                                            <span>Đáp số:</span>
                                            <input id="106-4-1" type="text" class="w-44 h-11 text-center font-black border-2 border-rose-300 rounded-xl outline-none focus:border-rose-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>đồng</span>
                                        </div>
                                    </div>

                                    <div class="space-y-2 border-t border-slate-100 pt-3">
                                        <p class="font-extrabold text-rose-800">b) Tính giá tiền chiếc ti vi sau khi giảm giá.</p>
                                        <div class="flex items-center gap-2 pl-4">
                                            <span>Đáp số:</span>
                                            <input id="106-4-2" type="text" class="w-48 h-11 text-center font-black border-2 border-rose-300 rounded-xl outline-none focus:border-rose-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>đồng</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-106-4" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>a) Số tiền một chiếc ti vi đã được giảm giá là:</p>
                                    <p class="pl-6 font-bold text-slate-900">15 000 000 × 8% = 1 200 000 (đồng)</p>
                                    <p>b) Giá tiền chiếc ti vi sau khi giảm giá là:</p>
                                    <p class="pl-6 font-bold text-slate-900">15 000 000 − 1 200 000 = 13 800 000 (đồng)</p>
                                    <p class="font-bold text-rose-700 mt-1">Đáp số: a) 1 200 000 đồng; b) 13 800 000 đồng.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution106('4')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-106-4" onclick="window.check_106_4()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <script>
            window.toggleSolution106 = (id) => {
                const el = document.getElementById('solution-106-' + id);
                if (el) el.classList.toggle('hidden');
            };
        </script>
    `,

    "quizPool": [
        { "question": "Viết phân số 6/10 dưới dạng tỉ số phần trăm ta được:", "options": ["60%", "6%", "0,6%", "600%"], "answer": 0 },
        { "question": "Viết phân số 17/20 dưới dạng tỉ số phần trăm ta được:", "options": ["85%", "17%", "8,5%", "70%"], "answer": 0 },
        { "question": "Viết phân số 25/50 dưới dạng tỉ số phần trăm ta được:", "options": ["50%", "25%", "2,5%", "5%"], "answer": 0 },
        { "question": "Phân số 12/100 tương ứng với tỉ số phần trăm nào?", "options": ["12%", "1,2%", "120%", "0,12%"], "answer": 0 },
        { "question": "Tỉ lệ bản đồ 1 : 2 000, độ dài trên bản đồ là 2 cm thì độ dài thật là:", "options": ["0,04 km", "4 km", "40 km", "0,4 km"], "answer": 0 },
        { "question": "Tỉ lệ bản đồ 1 : 2 000, độ dài thật là 1,6 km. Độ dài trên bản đồ là:", "options": ["80 cm", "8 cm", "800 cm", "0,8 cm"], "answer": 0 },
        { "question": "Tỉ lệ bản đồ 1 : 500 000, độ dài trên bản đồ 1,5 cm thì độ dài thật là:", "options": ["7,5 km", "75 km", "0,75 km", "750 km"], "answer": 0 },
        { "question": "Tỉ lệ bản đồ 1 : 500 000, độ dài thật 10 km thì độ dài trên bản đồ là:", "options": ["2 cm", "20 cm", "0,2 cm", "5 cm"], "answer": 0 },
        { "question": "Thỏ và Rùa hái tất cả 84 cây nấm, tỉ số nấm Thỏ/Rùa là 2/5. Số nấm Thỏ hái là:", "options": ["24 cây", "60 cây", "42 cây", "20 cây"], "answer": 0 },
        { "question": "Thỏ và Rùa hái tất cả 84 cây nấm, tỉ số nấm Thỏ/Rùa là 2/5. Số nấm Rùa hái là:", "options": ["60 cây", "24 cây", "50 cây", "64 cây"], "answer": 0 },
        { "question": "Một chiếc ti vi giá 15 000 000 đồng giảm giá 8%. Số tiền ti vi được giảm là:", "options": ["1 200 000 đồng", "1 500 000 đồng", "800 000 đồng", "120 000 đồng"], "answer": 0 },
        { "question": "Giá chiếc ti vi 15 000 000 đồng sau khi giảm giá 8% là:", "options": ["13 800 000 đồng", "14 200 000 đồng", "13 500 000 đồng", "14 000 000 đồng"], "answer": 0 },
        { "question": "Muốn đổi phân số 17/20 ra tỉ số phần trăm, ta lấy 17 nhân bao nhiêu rồi chia 20?", "options": ["Nhân 100", "Nhân 10", "Nhân 1000", "Nhân 20"], "answer": 0 },
        { "question": "Độ dài thật 4 000 cm đổi ra ki-lô-mét bằng bao nhiêu?", "options": ["0,04 km", "0,4 km", "4 km", "40 km"], "answer": 0 },
        { "question": "Tổng số phần bằng nhau trong bài toán Thỏ và Rùa hái nấm (tỉ số 2/5) là:", "options": ["7 phần", "5 phần", "2 phần", "10 phần"], "answer": 0 }
    ]
};
