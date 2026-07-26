// ===================================================================
// Tiết 93 - Bài 37: Tỉ lệ bản đồ và ứng dụng (tiết 1)
// DATA: Nội dung khám phá, luyện tập 3 slide và Quiz Pool 15 câu
// ===================================================================

export const lesson93Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
                    
                    <!-- Slide 1: Khám phá - Tỉ lệ bản đồ là gì? -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] border-2 border-blue-50 shadow-xl bg-white/80 backdrop-blur-xl space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">🔍</div>
                                <h3 class="text-slate-800 uppercase italic text-xl font-black">Khám phá: Tỉ lệ bản đồ</h3>
                            </div>

                            <div class="bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-6">
                                <div class="relative flex justify-center max-w-[500px] mx-auto group">
                                    <img onclick="window.zoomImage93('./assets/images/toan/toan_tap_2/93/kp.png', 'Bản đồ TP.HCM năm 2020')" src="./assets/images/toan/toan_tap_2/93/kp.png" alt="Bản đồ TP.HCM năm 2020" class="w-full h-auto max-h-[350px] object-contain rounded-2xl border-4 border-blue-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                    <button onclick="window.zoomImage93('./assets/images/toan/toan_tap_2/93/kp.png', 'Bản đồ TP.HCM năm 2020')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                    </button>
                                </div>

                                <div class="bg-white p-6 rounded-[2rem] shadow-inner border border-blue-100 text-slate-700 space-y-4">
                                    <p class="text-xl md:text-2xl font-bold leading-relaxed text-slate-800">
                                        Ở góc phía dưới của một bản đồ có ghi <span class="text-blue-700 font-extrabold">1 : 10 000</span>. Tỉ số đó là <span class="text-blue-700 font-black">tỉ lệ bản đồ</span>.
                                    </p>
                                    <p class="text-xl md:text-2xl font-bold leading-relaxed pl-4 border-l-4 border-emerald-500">
                                        • Tỉ lệ <span class="text-emerald-700">1 : 10 000</span> hay 
                                        <span class="inline-flex flex-col items-center align-middle mx-1">
                                            <span class="border-b-2 border-slate-800 px-2 font-black">1</span>
                                            <span>10 000</span>
                                        </span>
                                        cho biết hình ảnh một khu vực của Thành phố Hồ Chí Minh được vẽ thu nhỏ lại <span class="font-extrabold">10 000 lần</span>.
                                    </p>
                                    <p class="text-xl md:text-2xl font-bold leading-relaxed pl-4 border-l-4 border-emerald-500">
                                        • Chẳng hạn: Độ dài <span class="text-orange-700 font-extrabold">1 cm</span> trên bản đồ ứng với độ dài thật là <span class="text-orange-700 font-extrabold">10 000 cm</span> hay <span class="text-orange-700 font-extrabold">100 m</span>.
                                    </p>
                                    <p class="text-xl md:text-2xl font-bold leading-relaxed pl-4 border-l-4 border-emerald-500">
                                        • Tỉ lệ bản đồ có thể viết dưới dạng một phân số có tử số là <span class="text-blue-700 font-black">1</span>. 
                                        Chẳng hạn: 
                                        <span class="inline-flex flex-col items-center align-middle mx-1"><span class="border-b border-slate-800 px-1">1</span><span>500</span></span>; 
                                        <span class="inline-flex flex-col items-center align-middle mx-1"><span class="border-b border-slate-800 px-1">1</span><span>1 000</span></span>; 
                                        <span class="inline-flex flex-col items-center align-middle mx-1"><span class="border-b border-slate-800 px-1">1</span><span>10 000</span></span>; 
                                        <span class="inline-flex flex-col items-center align-middle mx-1"><span class="border-b border-slate-800 px-1">1</span><span>10 000 000</span></span>;...
                                    </p>
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
                    
                    <!-- Slide 1: Bài 1a - Bản đồ công viên đô thị Hòa Bình -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson93_b1a" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1a</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide">Bài 1a. Bản đồ công viên khu đô thị Hòa Bình (Tỉ lệ 1 : 1 000)</h3>
                            </div>

                            <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage93('./assets/images/toan/toan_tap_2/93/1.png', 'Sơ đồ công viên đô thị Hòa Bình')" src="./assets/images/toan/toan_tap_2/93/1.png" alt="Sơ đồ công viên đô thị Hòa Bình" class="w-full h-auto max-h-[300px] object-contain rounded-2xl border-4 border-slate-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage93('./assets/images/toan/toan_tap_2/93/1.png', 'Sơ đồ công viên đô thị Hòa Bình')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4">
                                <p class="font-bold text-slate-800">
                                    a) Trong thực tế, chiều dài khu vườn hoa, cây cảnh (khoảng cách AB) là bao nhiêu mét?
                                </p>
                                
                                <div class="bg-white p-6 rounded-[1.5rem] border border-blue-100 space-y-4 font-bold text-slate-800">
                                    <p class="text-2xl text-center text-blue-600 mb-2">Bài giải</p>
                                    <div class="text-xl md:text-2xl text-slate-800 font-bold mb-1 leading-relaxed">
                                        <span>Trong thực tế, chiều dài khu vườn hoa, cây cảnh là:</span>
                                    </div>
                                    <div class="flex flex-row items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>6 × 1 000 =</span>
                                        <input id="93-1-a1" type="text" class="w-24 h-11 text-center text-xl font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>(cm)</span>
                                    </div>
                                    <div class="flex flex-row items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <input id="93-1-a2" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>cm =</span>
                                        <input id="93-1-a3" type="text" class="w-20 h-11 text-center text-xl font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>m</span>
                                    </div>
                                    <div class="flex flex-row items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>Đáp số:</span>
                                        <input id="93-1-a4" type="text" class="w-20 h-11 text-center text-xl font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>m.</span>
                                    </div>
                                </div>

                                <!-- Khu vực hiện bài giải xếp chồng dọc -->
                                <div id="solution-93-1a" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Trong thực tế, chiều dài khu vườn hoa, cây cảnh là:</p>
                                    <p>6 x 1 000 = 6 000 (cm)</p>
                                    <p>Đổi: 6 000 cm = 60 m</p>
                                    <p class="font-bold text-blue-700">Đáp số: 60 m.</p>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm: Hiện bài giải bên trái, E bên phải -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution93('1a')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-93-1a" onclick="window.check_93_1_a()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 1b - Bản đồ công viên đô thị Hòa Bình -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson93_b1b" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1b</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide">Bài 1b. Bản đồ công viên khu đô thị Hòa Bình (Tỉ lệ 1 : 1 000)</h3>
                            </div>

                            <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage93('./assets/images/toan/toan_tap_2/93/1.png', 'Sơ đồ công viên đô thị Hòa Bình')" src="./assets/images/toan/toan_tap_2/93/1.png" alt="Sơ đồ công viên đô thị Hòa Bình" class="w-full h-auto max-h-[300px] object-contain rounded-2xl border-4 border-slate-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage93('./assets/images/toan/toan_tap_2/93/1.png', 'Sơ đồ công viên đô thị Hòa Bình')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4">
                                <p class="font-bold text-slate-800">
                                    b) Biết chiều rộng thật của khu vui chơi cho trẻ em là 50 m. Hỏi trên bản đồ, chiều rộng khu vui chơi cho trẻ em (khoảng cách MN) là bao nhiêu xăng-ti-mét?
                                </p>
                                
                                <div class="bg-white p-6 rounded-[1.5rem] border border-blue-100 space-y-4 font-bold text-slate-800">
                                    <p class="text-2xl text-center text-blue-600 mb-2">Bài giải</p>
                                    <div class="flex flex-row items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>Đổi: 50 m =</span>
                                        <input id="93-1-b1" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>cm</span>
                                    </div>
                                    <div class="text-xl md:text-2xl text-slate-800 font-bold mb-1 leading-relaxed">
                                        <span>Trên bản đồ, chiều rộng khu vui chơi cho trẻ em là:</span>
                                    </div>
                                    <div class="flex flex-row items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <input id="93-1-b2" type="text" class="w-24 h-11 text-center text-xl font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>: 1 000 =</span>
                                        <input id="93-1-b3" type="text" class="w-20 h-11 text-center text-xl font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>(cm)</span>
                                    </div>
                                    <div class="flex flex-row items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>Đáp số:</span>
                                        <input id="93-1-b4" type="text" class="w-20 h-11 text-center text-xl font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>cm.</span>
                                    </div>
                                </div>

                                <!-- Khu vực hiện bài giải xếp chồng dọc -->
                                <div id="solution-93-1b" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Đổi: 50 m = 5 000 cm</p>
                                    <p>Trên bản đồ, chiều rộng khu vui chơi cho trẻ em là:</p>
                                    <p>5 000 : 1 000 = 5 (cm)</p>
                                    <p class="font-bold text-blue-700">Đáp số: 5 cm.</p>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm: Hiện bài giải bên trái, E bên phải -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution93('1b')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-93-1b" onclick="window.check_93_1_b()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 2 - Chặng đua xe đạp xuyên Việt -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson93_b2" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase tracking-wide">Bài 2. Chặng đua xe đạp xuyên Việt</h3>
                            </div>

                            <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage93('./assets/images/toan/toan_tap_2/93/2.png', 'Đua xe đạp xuyên Việt')" src="./assets/images/toan/toan_tap_2/93/2.png" alt="Đua xe đạp xuyên Việt" class="w-full h-auto max-h-[300px] object-contain rounded-2xl border-4 border-slate-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage93('./assets/images/toan/toan_tap_2/93/2.png', 'Đua xe đạp xuyên Việt')" class="absolute top-3 right-3 bg-emerald-600/80 hover:bg-emerald-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                            <div class="p-6 bg-emerald-50/80 border-2 border-emerald-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4">
                                <p class="font-bold text-slate-800">
                                    Chặng đua xe đạp xuyên Việt từ Lạng Sơn đến Hà Nội dài <span class="text-emerald-700 font-extrabold">160 km</span>. Trên bản đồ tỉ lệ <span class="text-emerald-700 font-black">1 : 1 000 000</span>, quãng đường đó dài bao nhiêu xăng-ti-mét?
                                </p>
                                
                                <div class="bg-white p-6 rounded-[1.5rem] border border-emerald-100 space-y-4 font-bold text-slate-800">
                                    <p class="text-2xl text-center text-emerald-600 mb-2">Bài giải</p>
                                    <div class="flex flex-row items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>Đổi: 160 km =</span>
                                        <input id="93-2-1" type="text" class="w-36 h-11 text-center text-xl font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>cm</span>
                                    </div>
                                    <div class="text-xl md:text-2xl text-slate-800 font-bold mb-1 leading-relaxed">
                                        <span>Quãng đường đó trên bản đồ dài là:</span>
                                    </div>
                                    <div class="flex flex-row items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <input id="93-2-2" type="text" class="w-36 h-11 text-center text-xl font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>: 1 000 000 =</span>
                                        <input id="93-2-3" type="text" class="w-20 h-11 text-center text-xl font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>(cm)</span>
                                    </div>
                                    <div class="flex flex-row items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>Đáp số:</span>
                                        <input id="93-2-4" type="text" class="w-20 h-11 text-center text-xl font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>cm.</span>
                                    </div>
                                </div>

                                <!-- Khu vực hiện bài giải xếp chồng dọc -->
                                <div id="solution-93-2" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Đổi: 160 km = 16 000 000 cm</p>
                                    <p>Quãng đường đó trên bản đồ dài số xăng-ti-mét là:</p>
                                    <p>16 000 000 : 1 000 000 = 16 (cm)</p>
                                    <p class="font-bold text-blue-700">Đáp số: 16 cm.</p>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm: Hiện bài giải bên trái, E bên phải -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution93('2')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-93-2" onclick="window.check_93_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        <!-- Script bổ trợ toggle hiện/ẩn bài giải chi tiết cho GV -->
        <script>
            window.toggleSolution93 = (id) => {
                const el = document.getElementById('solution-93-' + id);
                if (el) {
                    el.classList.toggle('hidden');
                }
            };
        </script>
    `,

    "quizPool": [
        { "question": "Tỉ số 1 : 10 000 trên bản đồ được gọi là gì?", "options": ["Tỉ lệ bản đồ", "Tỉ số phần trăm", "Tỉ lệ xích", "Độ dài thật"], "answer": 0 },
        { "question": "Bản đồ có tỉ lệ 1 : 1 000. Độ dài 1 cm trên bản đồ ứng với độ dài thật là:", "options": ["1 000 cm", "100 cm", "10 000 cm", "10 cm"], "answer": 0 },
        { "question": "Bản đồ tỉ lệ 1 : 500. Độ dài 2 cm trên bản đồ ứng với độ dài thật là:", "options": ["1 000 cm", "500 cm", "250 cm", "2 000 cm"], "answer": 0 },
        { "question": "Đổi 50 m ra xăng-ti-mét ta được:", "options": ["5 000 cm", "500 cm", "50 000 cm", "50 cm"], "answer": 0 },
        { "question": "Độ dài thật là 60 m, bản đồ tỉ lệ 1 : 1 000. Độ dài trên bản đồ dài bao nhiêu xăng-ti-mét?", "options": ["6 cm", "60 cm", "600 cm", "0,6 cm"], "answer": 0 },
        { "question": "Quãng đường dài 160 km đổi ra xăng-ti-mét là:", "options": ["16 000 000 cm", "1 600 000 cm", "160 000 cm", "160 000 000 cm"], "answer": 0 },
        { "question": "Tỉ lệ bản đồ có thể viết dưới dạng phân số có tử số là:", "options": ["1", "10", "100", "Bất kỳ số nào"], "answer": 0 },
        { "question": "Bản đồ có tỉ lệ 1 : 10 000. Độ dài thật là 100 m thì độ dài trên bản đồ là:", "options": ["1 cm", "10 cm", "100 cm", "0,1 cm"], "answer": 0 },
        { "question": "Bản đồ tỉ lệ 1 : 1 000 000. Khoảng cách trên bản đồ là 16 cm. Khoảng cách thật là bao nhiêu ki-lô-mét?", "options": ["160 km", "16 km", "1 600 km", "1,6 km"], "answer": 0 },
        { "question": "Đổi 6 000 cm ra mét ta được:", "options": ["60 m", "6 m", "600 m", "60 000 m"], "answer": 0 },
        { "question": "Trên bản đồ tỉ lệ 1 : 2 000, độ dài 5 cm ứng với độ dài thật là:", "options": ["10 000 cm", "2 000 cm", "100 m", "10 m"], "answer": 0 },
        { "question": "Một khu vực có chiều dài thật 200 m, được vẽ trên bản đồ tỉ lệ 1 : 10 000. Chiều dài trên bản đồ là:", "options": ["2 cm", "20 cm", "0,2 cm", "200 cm"], "answer": 0 },
        { "question": "Phân số nào sau đây biểu diễn tỉ lệ bản đồ?", "options": ["1/10 000", "10 000/1", "2/10 000", "3/500"], "answer": 0 },
        { "question": "Bản đồ tỉ lệ 1 : 100 000. Quãng đường thật dài 15 km vẽ trên bản đồ dài bao nhiêu xăng-ti-mét?", "options": ["15 cm", "1,5 cm", "150 cm", "1500 cm"], "answer": 0 },
        { "question": "Ý nghĩa của tỉ lệ bản đồ 1 : 5 000 là gì?", "options": ["Kích thước thật gấp 5 000 lần kích thước trên bản đồ", "Kích thước trên bản đồ gấp 5 000 lần kích thước thật", "Kích thước thật lớn hơn bản đồ 5 000 cm", "Bản đồ thu nhỏ đi 5 000 mét"], "answer": 0 }
    ]
};
