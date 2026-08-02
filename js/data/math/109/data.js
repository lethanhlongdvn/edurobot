// ===================================================================
// Tiết 109 - Bài 46: Xăng-ti-mét khối. Đề-xi-mét khối (tiết 1)
// DATA: Nội dung slide bài học và quiz pool
// ===================================================================

export const lesson109Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Slide 1: Khám phá - Khái niệm cm3 và dm3 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-amber-500 space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-amber-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">🔍</div>
                                <h3 class="text-amber-700 uppercase italic text-xl font-black">Khám phá: Xăng-ti-mét khối, đề-xi-mét khối</h3>
                            </div>

                            <div class="p-6 bg-amber-50/80 border-2 border-amber-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage109('./assets/images/toan/toan_tap_2/109/kp.png', 'Khám phá đơn vị đo thể tích')" src="./assets/images/toan/toan_tap_2/109/kp.png" alt="Khám phá đơn vị đo thể tích" class="w-full max-w-[650px] h-auto object-contain rounded-2xl border-4 border-amber-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage109('./assets/images/toan/toan_tap_2/109/kp.png', 'Khám phá đơn vị đo thể tích')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                                <div class="bg-white p-6 rounded-3xl border border-amber-150 space-y-4 font-bold text-slate-800">
                                    <p class="text-amber-900 text-2xl font-extrabold">Để đo thể tích người ta có thể dùng những đơn vị: xăng-ti-mét khối, đề-xi-mét khối.</p>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div class="bg-blue-50 p-4 rounded-2xl border border-blue-100 space-y-2">
                                            <p class="text-blue-800 font-black">a) Xăng-ti-mét khối:</p>
                                            <p>• Là thể tích của hình lập phương có cạnh 1 cm.</p>
                                            <p>• Xăng-ti-mét khối viết tắt là: <span class="text-blue-700 font-extrabold text-2xl">cm³</span></p>
                                        </div>
                                        <div class="bg-amber-50 p-4 rounded-2xl border border-amber-200 space-y-2">
                                            <p class="text-amber-800 font-black">b) Đề-xi-mét khối:</p>
                                            <p>• Là thể tích của hình lập phương có cạnh 1 dm.</p>
                                            <p>• Đề-xi-mét khối viết tắt là: <span class="text-amber-700 font-extrabold text-2xl">dm³</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Khám phá - Mối quan hệ giữa dm3 và cm3 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">📦</div>
                                <h3 class="text-emerald-700 uppercase italic text-xl font-black">Mối quan hệ giữa dm³ và cm³</h3>
                            </div>

                            <div class="p-6 bg-emerald-50/80 border-2 border-emerald-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage109('./assets/images/toan/toan_tap_2/109/kp1.png', 'Mối quan hệ 1 dm3 = 1000 cm3')" src="./assets/images/toan/toan_tap_2/109/kp1.png" alt="Mối quan hệ 1 dm3 = 1000 cm3" class="w-full max-w-[480px] h-auto object-contain rounded-2xl border-4 border-emerald-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage109('./assets/images/toan/toan_tap_2/109/kp1.png', 'Mối quan hệ 1 dm3 = 1000 cm3')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                                <div class="bg-white p-6 rounded-3xl border border-emerald-150 space-y-4 font-bold text-slate-800">
                                    <p class="text-emerald-900 text-2xl font-extrabold">c) Hình lập phương cạnh 1 dm gồm 1 000 hình lập phương cạnh 1 cm.</p>
                                    <div class="bg-emerald-100/60 p-6 rounded-2xl border border-emerald-300 text-center space-y-3 text-2xl font-black text-emerald-900">
                                        <p class="text-3xl text-emerald-700">1 dm³ = 1 000 cm³</p>
                                        <p class="text-2xl text-slate-800 font-extrabold">
                                            1 cm³ = 
                                            <span class="inline-flex flex-col items-center align-middle mx-1 font-mono">
                                                <span class="border-b-2 border-slate-800 px-2 leading-none pb-1">1</span>
                                                <span class="leading-none pt-1">1 000</span>
                                            </span>
                                            dm³
                                        </p>
                                    </div>
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

                    <!-- Slide 1: Hoạt động 1 - Hoàn thành bảng Đọc / Viết -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 1. Hoạt động 1: Hoàn thành bảng (theo mẫu)</h3>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="overflow-x-auto">
                                    <table class="w-full bg-white border-2 border-blue-200 rounded-2xl text-center border-collapse">
                                        <thead>
                                            <tr class="bg-rose-100 font-extrabold text-rose-900 text-2xl border-b border-blue-200">
                                                <th class="p-4 border-r border-blue-200 w-3/5 text-center">Đọc</th>
                                                <th class="p-4 w-2/5 text-center">Viết</th>
                                            </tr>
                                        </thead>
                                        <tbody class="font-bold text-slate-800 text-xl">
                                            <tr class="border-b border-blue-200">
                                                <td class="p-4 border-r border-blue-200 text-left pl-8">Bốn mươi bảy xăng-ti-mét khối</td>
                                                <td class="p-4 text-blue-700 font-black">47 cm³</td>
                                            </tr>
                                            <tr class="border-b border-blue-200">
                                                <td class="p-4 border-r border-blue-200 text-left pl-8">Hai trăm ba mươi tư đề-xi-mét khối</td>
                                                <td class="p-4">
                                                    <input id="109-1-1" type="text" class="w-36 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                </td>
                                            </tr>
                                            <tr class="border-b border-blue-200">
                                                <td class="p-4 border-r border-blue-200 text-left pl-6">
                                                    <textarea id="109-1-2" rows="2" class="w-full border-2 border-blue-300 rounded-xl px-4 py-2 font-bold outline-none focus:border-blue-600 bg-white resize-none overflow-hidden" placeholder="Viết chữ đọc số đo..." style="font-size: 1.15rem !important;"></textarea>
                                                </td>
                                                <td class="p-4 font-extrabold text-slate-900">1 000 dm³</td>
                                            </tr>
                                            <tr>
                                                <td class="p-4 border-r border-blue-200 text-left pl-8">Không phẩy tám xăng-ti-mét khối</td>
                                                <td class="p-4">
                                                    <input id="109-1-3" type="text" class="w-36 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-109-1" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>• Hai trăm ba mươi tư đề-xi-mét khối $\\rightarrow$ <b>234 dm³</b></p>
                                    <p>• 1 000 dm³ $\\leftarrow$ <b>Một nghìn đề-xi-mét khối</b></p>
                                    <p>• Không phẩy tám xăng-ti-mét khối $\\rightarrow$ <b>0,8 cm³</b></p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution109('1')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-109-1" onclick="window.check_109_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Hoạt động 2 - Tính thể tích các hình xếp từ khối 1 cm3 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-amber-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                <h3 class="text-2xl md:text-3xl font-black text-amber-700 uppercase">Bài 2. Hoạt động 2: Số ? (Tính thể tích hình xếp)</h3>
                            </div>

                            <div class="p-6 bg-amber-50/80 border-2 border-amber-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <p class="font-bold text-slate-800">
                                    Việt xếp các hình lập phương có cạnh 1 cm thành các hình bên. Hãy cho biết thể tích của mỗi hình đó:
                                </p>

                                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    <div class="bg-white p-6 rounded-3xl border border-amber-200 text-center space-y-4">
                                        <p class="font-black text-amber-800 text-2xl">a)</p>
                                        <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage109('./assets/images/toan/toan_tap_2/109/2a.png', 'Hình a xếp từ khối 1cm3')" src="./assets/images/toan/toan_tap_2/109/2a.png" alt="Hình a xếp từ khối 1cm3" class="w-full max-w-[240px] h-auto object-contain rounded-xl border border-amber-100 cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage109('./assets/images/toan/toan_tap_2/109/2a.png', 'Hình a xếp từ khối 1cm3')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>
                                        <div class="flex items-center justify-center gap-2 font-bold text-slate-800 text-xl pt-2">
                                            <span>Thể tích là:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="109-2-a" type="text" class="w-24 h-11 text-center font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>cm³</span>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="bg-white p-6 rounded-3xl border border-amber-200 text-center space-y-4">
                                        <p class="font-black text-amber-800 text-2xl">b)</p>
                                        <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage109('./assets/images/toan/toan_tap_2/109/2b.png', 'Hình b xếp từ khối 1cm3')" src="./assets/images/toan/toan_tap_2/109/2b.png" alt="Hình b xếp từ khối 1cm3" class="w-full max-w-[240px] h-auto object-contain rounded-xl border border-amber-100 cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage109('./assets/images/toan/toan_tap_2/109/2b.png', 'Hình b xếp từ khối 1cm3')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>
                                        <div class="flex items-center justify-center gap-2 font-bold text-slate-800 text-xl pt-2">
                                            <span>Thể tích là:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="109-2-b" type="text" class="w-24 h-11 text-center font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>cm³</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-109-2" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>a) Hình a gồm 12 hình lập phương nhỏ cạnh 1 cm (3 × 2 × 2 = 12), thể tích là: <b>12 cm³</b>.</p>
                                    <p>b) Hình b gồm 27 hình lập phương nhỏ cạnh 1 cm (3 × 3 × 3 = 27), thể tích là: <b>27 cm³</b>.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution109('2')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-109-2" onclick="window.check_109_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Hoạt động 3 - Đổi số đo thể tích -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase">Bài 3. Hoạt động 3: Đổi số đo thể tích (Số ?)</h3>
                            </div>

                            <div class="p-6 bg-emerald-50/80 border-2 border-emerald-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="bg-white p-6 rounded-3xl border border-emerald-150 space-y-4 font-bold text-slate-800 text-xl">
                                    <!-- Câu a -->
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                                        <div class="flex items-center gap-2">
                                            <span>a) 1 dm³ =</span>
                                            <input id="109-3-1" type="text" class="w-28 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>cm³</span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span>1 000 cm³ =</span>
                                            <input id="109-3-2" type="text" class="w-20 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>dm³</span>
                                        </div>
                                    </div>

                                    <!-- Câu b -->
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center border-t border-slate-100 pt-3">
                                        <div class="flex items-center gap-2">
                                            <span>b) 2 dm³ =</span>
                                            <input id="109-3-3" type="text" class="w-28 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>cm³</span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span>5 000 cm³ =</span>
                                            <input id="109-3-4" type="text" class="w-20 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>dm³</span>
                                        </div>
                                    </div>

                                    <!-- Câu c -->
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center border-t border-slate-100 pt-3">
                                        <div class="flex items-center gap-2">
                                            <span>c) 5 dm³ 6 cm³ =</span>
                                            <input id="109-3-5" type="text" class="w-28 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>cm³</span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span>8 700 cm³ =</span>
                                            <input id="109-3-6" type="text" class="w-24 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>dm³</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-109-3" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>a) 1 dm³ = <b>1 000</b> cm³ ; 1 000 cm³ = <b>1</b> dm³</p>
                                    <p>b) 2 dm³ = <b>2 000</b> cm³ ; 5 000 cm³ = <b>5</b> dm³</p>
                                    <p>c) 5 dm³ 6 cm³ = 5 000 cm³ + 6 cm³ = <b>5 006</b> cm³</p>
                                    <p>   8 700 cm³ = 8 700 : 1 000 = <b>8,7</b> dm³</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution109('3')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-109-3" onclick="window.check_109_3()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <script>
            window.toggleSolution109 = (id) => {
                const el = document.getElementById('solution-109-' + id);
                if (el) el.classList.toggle('hidden');
            };
        </script>
    `,

    "quizPool": [
        { "question": "Xăng-ti-mét khối là thể tích của hình lập phương có cạnh bằng bao nhiêu?", "options": ["1 cm", "1 dm", "1 m", "10 cm"], "answer": 0 },
        { "question": "Đề-xi-mét khối là thể tích của hình lập phương có cạnh bằng bao nhiêu?", "options": ["1 dm", "1 cm", "1 m", "10 dm"], "answer": 0 },
        { "question": "1 dm³ bằng bao nhiêu cm³?", "options": ["1 000 cm³", "100 cm³", "10 cm³", "10 000 cm³"], "answer": 0 },
        { "question": "1 cm³ bằng bao nhiêu dm³?", "options": ["1/1 000 dm³", "1/100 dm³", "1/10 dm³", "1 000 dm³"], "answer": 0 },
        { "question": "Số '234 dm³' đọc là:", "options": ["Hai trăm ba mươi tư đề-xi-mét khối", "Hai trăm ba mươi bốn xăng-ti-mét khối", "Hai ba tư đề-xi-mét khối", "Hai trăm ba mươi tư mét khối"], "answer": 0 },
        { "question": "Số '0,8 cm³' đọc là:", "options": ["Không phẩy tám xăng-ti-mét khối", "Không phẩy tám đề-xi-mét khối", "Tám xăng-ti-mét khối", "Không tám cm³"], "answer": 0 },
        { "question": "Hình a gồm 12 hình lập phương nhỏ cạnh 1 cm. Thể tích hình a là:", "options": ["12 cm³", "12 dm³", "6 cm³", "24 cm³"], "answer": 0 },
        { "question": "Hình b gồm 27 hình lập phương nhỏ cạnh 1 cm. Thể tích hình b là:", "options": ["27 cm³", "27 dm³", "9 cm³", "18 cm³"], "answer": 0 },
        { "question": "2 dm³ = ... cm³. Số thích hợp điền vào chỗ chấm là:", "options": ["2 000", "200", "20", "20 000"], "answer": 0 },
        { "question": "5 000 cm³ = ... dm³. Số thích hợp điền vào chỗ chấm là:", "options": ["5", "50", "500", "0,5"], "answer": 0 },
        { "question": "5 dm³ 6 cm³ = ... cm³. Số thích hợp điền vào chỗ chấm là:", "options": ["5 006", "5 600", "56", "506"], "answer": 0 },
        { "question": "8 700 cm³ = ... dm³. Số thích hợp điền vào chỗ chấm là:", "options": ["8,7", "87", "0,87", "870"], "answer": 0 },
        { "question": "Kí hiệu viết tắt của đề-xi-mét khối là:", "options": ["dm³", "cm³", "m³", "dm²"], "answer": 0 },
        { "question": "Hình lập phương cạnh 1 dm gồm bao nhiêu hình lập phương nhỏ cạnh 1 cm?", "options": ["1 000 hình", "100 hình", "10 hình", "10 000 hình"], "answer": 0 },
        { "question": "47 cm³ đọc là:", "options": ["Bốn mươi bảy xăng-ti-mét khối", "Bốn mươi bảy đề-xi-mét khối", "Bốn bảy xăng-ti-mét khối", "Bốn mươi bảy mét khối"], "answer": 0 }
    ]
};
