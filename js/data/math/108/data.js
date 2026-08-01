// ===================================================================
// Tiết 108 - Bài 45: Thể tích của một hình
// DATA: Nội dung slide bài học và quiz pool
// ===================================================================

export const lesson108Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Slide 1: Khám phá - Khái niệm & Hình hộp chữ nhật -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-amber-500 space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-amber-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">🔍</div>
                                <h3 class="text-amber-700 uppercase italic text-xl font-black">Chủ đề 8: Thể tích - Thể tích của một hình</h3>
                            </div>

                            <div class="p-6 bg-amber-50/80 border-2 border-amber-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage108('./assets/images/toan/toan_tap_2/108/kp.png', 'Khám phá thể tích của một hình')" src="./assets/images/toan/toan_tap_2/108/kp.png" alt="Khám phá thể tích của một hình" class="w-full max-w-[650px] h-auto object-contain rounded-2xl border-4 border-amber-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage108('./assets/images/toan/toan_tap_2/108/kp.png', 'Khám phá thể tích của một hình')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                                <div class="bg-white p-6 rounded-3xl border border-amber-150 space-y-4">
                                    <p class="font-extrabold text-amber-900 text-2xl">a) Hình hộp chữ nhật, hình lập phương:</p>
                                    <div class="space-y-3 font-bold text-slate-800">
                                        <p class="text-blue-700 flex items-center gap-2">
                                            <span class="w-3 h-3 bg-blue-600 rounded-full inline-block"></span>
                                            Hình hộp chữ nhật có ba kích thước: chiều dài, chiều rộng, chiều cao.
                                        </p>
                                        <div class="flex justify-center py-2">
                                            <svg width="280" height="160" viewBox="0 0 280 160" class="drop-shadow-sm">
                                                <!-- Khung 3D hình hộp chữ nhật -->
                                                <polygon points="40,130 180,130 240,80 100,80" fill="none" stroke="#2563eb" stroke-width="2.5"/>
                                                <polygon points="40,130 40,50 180,50 180,130" fill="none" stroke="#2563eb" stroke-width="2.5"/>
                                                <polygon points="180,130 240,80 240,10 180,50" fill="none" stroke="#2563eb" stroke-width="2.5"/>
                                                <polygon points="40,50 100,10 240,10 180,50" fill="none" stroke="#2563eb" stroke-width="2.5"/>
                                                <!-- Đường nét đứt bên trong -->
                                                <line x1="40" y1="130" x2="100" y2="80" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
                                                <line x1="100" y1="80" x2="240" y2="80" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
                                                <line x1="100" y1="80" x2="100" y2="10" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
                                                <!-- Chú thích kích thước -->
                                                <text x="110" y="150" font-weight="bold" font-size="16" fill="#1e293b">Chiều dài</text>
                                                <text x="200" y="115" font-weight="bold" font-size="16" fill="#1e293b">Chiều rộng</text>
                                                <text x="245" y="45" font-weight="bold" font-size="16" fill="#1e293b">Chiều cao</text>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Khám phá - Hình lập phương & Tính chất so sánh thể tích -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">🧊</div>
                                <h3 class="text-blue-700 uppercase italic text-xl font-black">Hình lập phương & So sánh thể tích</h3>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage108('./assets/images/toan/toan_tap_2/108/kp1.png', 'Các ví dụ so sánh thể tích')" src="./assets/images/toan/toan_tap_2/108/kp1.png" alt="Các ví dụ so sánh thể tích" class="w-full max-w-[650px] h-auto object-contain rounded-2xl border-4 border-blue-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage108('./assets/images/toan/toan_tap_2/108/kp1.png', 'Các ví dụ so sánh thể tích')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                                <div class="bg-white p-6 rounded-3xl border border-blue-150 space-y-4 font-bold text-slate-800">
                                    <p class="text-blue-800 flex items-center gap-2">
                                        <span class="w-3 h-3 bg-blue-600 rounded-full inline-block"></span>
                                        Hình lập phương có 6 mặt là các hình vuông bằng nhau.
                                    </p>
                                    <div class="bg-amber-50 p-4 rounded-2xl border border-amber-200 space-y-2 text-slate-700">
                                        <p class="font-extrabold text-amber-900">b) So sánh thể tích các hình:</p>
                                        <p>• Hình lập phương nằm hoàn toàn trong hình hộp chữ nhật $\rightarrow$ Thể tích hình lập phương <span class="text-rose-600 font-extrabold">bé hơn</span> thể tích hình hộp chữ nhật.</p>
                                        <p>• Hình A (4 khối) và Hình B (4 khối) $\rightarrow$ Thể tích hình A <span class="text-emerald-700 font-extrabold">bằng</span> thể tích hình B.</p>
                                        <p>• Hình P (8 khối) tách thành Hình M (6 khối) và Hình N (2 khối) $\rightarrow$ Thể tích hình P <span class="text-blue-700 font-extrabold">bằng tổng thể tích</span> hình M và N.</p>
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

                    <!-- Slide 1: Hoạt động - Đếm số hình lập phương nhỏ -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-cyan-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">⚙️</div>
                                <h3 class="text-2xl md:text-3xl font-black text-cyan-700 uppercase">Bài 1. Hoạt động: Quan sát hình vẽ trả lời câu hỏi</h3>
                            </div>

                            <div class="p-6 bg-cyan-50/80 border-2 border-cyan-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <p class="font-bold text-slate-800">Quan sát hai hình A và B bên dưới rồi trả lời câu hỏi:</p>

                                <!-- SVG Mô phỏng chính xác Hình A (12 khối: 3 x 2 x 2) và Hình B (18 khối: 3 x 3 x 2) -->
                                <div class="flex justify-center gap-8 items-center bg-white p-6 rounded-3xl border border-cyan-200">
                                    <div class="text-center space-y-2">
                                        <svg width="180" height="130" viewBox="0 0 180 130">
                                            <!-- Hình A màu xanh lam: 3 cot, 2 hang, 2 lop (12 khoi) -->
                                            <g stroke="#0284c7" stroke-width="1.5" fill="#38bdf8" fill-opacity="0.85">
                                                <!-- Mặt trước 6 ô -->
                                                <rect x="20" y="45" width="35" height="30"/>
                                                <rect x="55" y="45" width="35" height="30"/>
                                                <rect x="90" y="45" width="35" height="30"/>
                                                <rect x="20" y="75" width="35" height="30"/>
                                                <rect x="55" y="75" width="35" height="30"/>
                                                <rect x="90" y="75" width="35" height="30"/>
                                                <!-- Mặt trên -->
                                                <polygon points="20,45 40,25 75,25 55,45"/>
                                                <polygon points="55,45 75,25 110,25 90,45"/>
                                                <polygon points="90,45 110,25 145,25 125,45"/>
                                                <!-- Mặt bên phải -->
                                                <polygon points="125,45 145,25 145,55 125,75"/>
                                                <polygon points="125,75 145,55 145,85 125,105"/>
                                            </g>
                                        </svg>
                                        <p class="font-black text-cyan-800 text-2xl italic">Hình A</p>
                                    </div>

                                    <div class="text-center space-y-2">
                                        <svg width="180" height="140" viewBox="0 0 180 140">
                                            <!-- Hình B màu xanh lam đậm: 3 cot, 3 hang, 2 lop (18 khoi) -->
                                            <g stroke="#0284c7" stroke-width="1.5" fill="#0284c7" fill-opacity="0.85">
                                                <!-- Mặt trước 9 ô -->
                                                <rect x="20" y="30" width="30" height="28"/>
                                                <rect x="50" y="30" width="30" height="28"/>
                                                <rect x="80" y="30" width="30" height="28"/>
                                                <rect x="20" y="58" width="30" height="28"/>
                                                <rect x="50" y="58" width="30" height="28"/>
                                                <rect x="80" y="58" width="30" height="28"/>
                                                <rect x="20" y="86" width="30" height="28"/>
                                                <rect x="50" y="86" width="30" height="28"/>
                                                <rect x="80" y="86" width="30" height="28"/>
                                                <!-- Mặt trên -->
                                                <polygon points="20,30 38,15 68,15 50,30"/>
                                                <polygon points="50,30 68,15 98,15 80,30"/>
                                                <polygon points="80,30 98,15 128,15 110,30"/>
                                                <!-- Mặt bên phải -->
                                                <polygon points="110,30 128,15 128,43 110,58"/>
                                                <polygon points="110,58 128,43 128,71 110,86"/>
                                                <polygon points="110,86 128,71 128,99 110,114"/>
                                            </g>
                                        </svg>
                                        <p class="font-black text-cyan-800 text-2xl italic">Hình B</p>
                                    </div>
                                </div>

                                <div class="bg-white p-6 rounded-3xl border border-cyan-150 space-y-4 font-bold text-slate-800">
                                    <div class="flex items-center gap-2">
                                        <span>a) Hình hộp chữ nhật A gồm bao nhiêu hình lập phương nhỏ?</span>
                                        <input id="108-hd-A" type="text" class="w-24 h-11 text-center font-black border-2 border-cyan-300 rounded-xl outline-none focus:border-cyan-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>hình</span>
                                    </div>
                                    <div class="flex items-center gap-2 border-t border-slate-100 pt-3">
                                        <span>b) Hình hộp chữ nhật B gồm bao nhiêu hình lập phương nhỏ?</span>
                                        <input id="108-hd-B" type="text" class="w-24 h-11 text-center font-black border-2 border-cyan-300 rounded-xl outline-none focus:border-cyan-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>hình</span>
                                    </div>
                                    <div class="space-y-2 border-t border-slate-100 pt-3">
                                        <p class="font-extrabold text-cyan-800">c) Hình nào có thể tích lớn hơn?</p>
                                        <div class="flex items-center gap-6 pl-4">
                                            <label class="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="108-hd-c" value="A" class="w-5 h-5 accent-cyan-600">
                                                <span>Hình A</span>
                                            </label>
                                            <label class="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="108-hd-c" value="B" class="w-5 h-5 accent-cyan-600">
                                                <span>Hình B</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-108-hd" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>a) Hình hộp chữ nhật A gồm 12 hình lập phương nhỏ (3 × 2 × 2 = 12).</p>
                                    <p>b) Hình hộp chữ nhật B gồm 18 hình lập phương nhỏ (3 × 3 × 2 = 18).</p>
                                    <p>c) Vì 18 > 12 nên hình B có thể tích lớn hơn hình A.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution108('hd')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-108-hd" onclick="window.check_108_hd()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Luyện tập 1 - So sánh thể tích C và D -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 2. Luyện tập 1: So sánh thể tích hình C và D</h3>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <p class="font-bold text-slate-800">Quan sát hình vẽ rồi chọn câu đúng:</p>

                                <!-- SVG Mô phỏng Hình C (6 khối nằm ngang) và Hình D (6 khối dạng chữ L 3D) -->
                                <div class="flex justify-center gap-10 items-center bg-white p-6 rounded-3xl border border-blue-200">
                                    <div class="text-center space-y-2">
                                        <svg width="180" height="90" viewBox="0 0 180 90">
                                            <!-- Hình C: 6 khoi ngang (2 x 3) -->
                                            <g stroke="#0284c7" stroke-width="1.5" fill="#38bdf8" fill-opacity="0.9">
                                                <rect x="10" y="40" width="25" height="25"/>
                                                <rect x="35" y="40" width="25" height="25"/>
                                                <rect x="60" y="40" width="25" height="25"/>
                                                <rect x="85" y="40" width="25" height="25"/>
                                                <rect x="110" y="40" width="25" height="25"/>
                                                <rect x="135" y="40" width="25" height="25"/>
                                                <!-- Mặt trên -->
                                                <polygon points="10,40 25,25 150,25 135,40"/>
                                                <polygon points="135,40 150,25 160,25 160,65 135,40" />
                                            </g>
                                        </svg>
                                        <p class="font-black text-blue-800 text-2xl italic">Hình C</p>
                                    </div>

                                    <div class="text-center space-y-2">
                                        <svg width="120" height="110" viewBox="0 0 120 110">
                                            <!-- Hình D: 6 khoi ghep 3D -->
                                            <g stroke="#0284c7" stroke-width="1.5" fill="#38bdf8" fill-opacity="0.9">
                                                <!-- Tầng dưới 4 khối -->
                                                <rect x="20" y="55" width="25" height="25"/>
                                                <rect x="45" y="55" width="25" height="25"/>
                                                <rect x="20" y="30" width="25" height="25"/>
                                                <rect x="45" y="30" width="25" height="25"/>
                                                <!-- Tầng trên 2 khối -->
                                                <rect x="20" y="5" width="25" height="25"/>
                                                <rect x="45" y="5" width="25" height="25"/>
                                            </g>
                                        </svg>
                                        <p class="font-black text-blue-800 text-2xl italic">Hình D</p>
                                    </div>
                                </div>

                                <div class="bg-white p-6 rounded-3xl border border-blue-150 space-y-3 font-bold">
                                    <label class="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-2xl cursor-pointer hover:border-blue-300 transition-colors">
                                        <input type="radio" name="108-lt1" value="A" class="w-5 h-5 accent-blue-600">
                                        <span>A. Thể tích hình C lớn hơn thể tích hình D.</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-2xl cursor-pointer hover:border-blue-300 transition-colors">
                                        <input type="radio" name="108-lt1" value="B" class="w-5 h-5 accent-blue-600">
                                        <span>B. Thể tích hình C bằng thể tích hình D.</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-2xl cursor-pointer hover:border-blue-300 transition-colors">
                                        <input type="radio" name="108-lt1" value="C" class="w-5 h-5 accent-blue-600">
                                        <span>C. Thể tích hình C bé hơn thể tích hình D.</span>
                                    </label>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-108-lt1" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Hình C gồm 6 hình lập phương nhỏ.</p>
                                    <p>Hình D gồm 6 hình lập phương nhỏ.</p>
                                    <p>Vì cả hai hình đều gồm 6 hình lập phương nhỏ bằng nhau nên thể tích hình C bằng thể tích hình D.</p>
                                    <p class="font-bold text-blue-700 mt-1">Đáp án đúng: B. Thể tích hình C bằng thể tích hình D.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution108('lt1')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-108-lt1" onclick="window.check_108_lt1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Luyện tập 2 - Rô-bốt tháo rời & xếp hình -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase">Bài 3. Luyện tập 2: Tháo rời và xếp hình</h3>
                            </div>

                            <div class="p-6 bg-emerald-50/80 border-2 border-emerald-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <p class="font-bold text-slate-800">
                                    Rô-bốt có một hình lập phương lớn gồm <span class="text-emerald-700 font-extrabold">8 hình lập phương nhỏ</span> cạnh 1 cm.
                                </p>

                                <!-- Câu a -->
                                <div class="bg-white p-6 rounded-3xl border border-emerald-150 space-y-4">
                                    <p class="font-extrabold text-emerald-900">a) Rô-bốt tháo rời các hình lập phương nhỏ và xếp thành hai hình A và B. So sánh thể tích của hình lập phương ban đầu với tổng thể tích các hình A và B:</p>
                                    
                                    <div class="grid grid-cols-1 gap-2 font-bold pl-4">
                                        <label class="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-emerald-50">
                                            <input type="radio" name="108-lt2a" value="A" class="w-5 h-5 accent-emerald-600">
                                            <span>A. Thể tích ban đầu lớn hơn tổng thể tích A và B.</span>
                                        </label>
                                        <label class="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-emerald-50">
                                            <input type="radio" name="108-lt2a" value="B" class="w-5 h-5 accent-emerald-600">
                                            <span>B. Thể tích ban đầu bằng tổng thể tích A và B.</span>
                                        </label>
                                        <label class="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-emerald-50">
                                            <input type="radio" name="108-lt2a" value="C" class="w-5 h-5 accent-emerald-600">
                                            <span>C. Thể tích ban đầu bé hơn tổng thể tích A và B.</span>
                                        </label>
                                    </div>
                                </div>

                                <!-- Câu b -->
                                <div class="bg-white p-6 rounded-3xl border border-emerald-150 space-y-4">
                                    <p class="font-extrabold text-emerald-900">b) Rô-bốt tháo rời các hình lập phương nhỏ để xếp thành một hình hộp chữ nhật như dưới đây. Em hãy cho biết chiều dài, chiều rộng, chiều cao của hình hộp chữ nhật đó:</p>

                                    <!-- SVG Mô phỏng xếp 8 khối thành 1 hàng ngang -->
                                    <div class="flex justify-center py-2">
                                        <svg width="320" height="50" viewBox="0 0 320 50">
                                            <g stroke="#16a34a" stroke-width="1.5" fill="#4ade80" fill-opacity="0.7">
                                                <rect x="10" y="15" width="35" height="25"/>
                                                <rect x="45" y="15" width="35" height="25"/>
                                                <rect x="80" y="15" width="35" height="25"/>
                                                <rect x="115" y="15" width="35" height="25"/>
                                                <rect x="150" y="15" width="35" height="25"/>
                                                <rect x="185" y="15" width="35" height="25"/>
                                                <rect x="220" y="15" width="35" height="25"/>
                                                <rect x="255" y="15" width="35" height="25"/>
                                            </g>
                                        </svg>
                                    </div>

                                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 font-bold text-slate-800 pl-4">
                                        <div class="flex items-center gap-2">
                                            <span>• Chiều dài:</span>
                                            <input id="108-lt2b-len" type="text" class="w-20 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>cm</span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span>• Chiều rộng:</span>
                                            <input id="108-lt2b-wid" type="text" class="w-20 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>cm</span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span>• Chiều cao:</span>
                                            <input id="108-lt2b-hei" type="text" class="w-20 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>cm</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-108-lt2" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>a) Thể tích hình lập phương ban đầu bằng tổng thể tích các hình A và B (Đáp án B).</p>
                                    <p>b) Khi xếp 8 hình lập phương nhỏ cạnh 1 cm nối tiếp nhau thành 1 hàng ngang, ta được hình hộp chữ nhật có:</p>
                                    <p class="pl-6">• Chiều dài: 8 cm</p>
                                    <p class="pl-6">• Chiều rộng: 1 cm</p>
                                    <p class="pl-6">• Chiều cao: 1 cm</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution108('lt2')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-108-lt2" onclick="window.check_108_lt2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <script>
            window.toggleSolution108 = (id) => {
                const el = document.getElementById('solution-108-' + id);
                if (el) el.classList.toggle('hidden');
            };
        </script>
    `,

    "quizPool": [
        { "question": "Hình hộp chữ nhật có bao nhiêu kích thước?", "options": ["3 kích thước (dài, rộng, cao)", "2 kích thước", "4 kích thước", "1 kích thước"], "answer": 0 },
        { "question": "Hình lập phương có bao nhiêu mặt là các hình vuông bằng nhau?", "options": ["6 mặt", "4 mặt", "8 mặt", "12 mặt"], "answer": 0 },
        { "question": "Nếu hình A nằm hoàn toàn trong hình B thì thể tích hình A như thế nào với thể tích hình B?", "options": ["Bé hơn", "Lớn hơn", "Bằng nhau", "Không so sánh được"], "answer": 0 },
        { "question": "Hai hình cùng được ghép từ 6 hình lập phương nhỏ bằng nhau thì thể tích của chúng như thế nào?", "options": ["Bằng nhau", "Khác nhau", "Hình đứng lớn hơn", "Hình nằm ngang lớn hơn"], "answer": 0 },
        { "question": "Tách 1 hình có thể tích 8 khối nhỏ thành 2 hình M (6 khối) và N (2 khối). Khẳng định nào đúng?", "options": ["Thể tích hình ban đầu = Tổng thể tích M và N", "Thể tích M > Thể tích ban đầu", "Thể tích N = Thể tích ban đầu", "Thể tích M = Thể tích N"], "answer": 0 },
        { "question": "Hình A (3 × 2 × 2) gồm bao nhiêu hình lập phương nhỏ?", "options": ["12 hình", "6 hình", "18 hình", "8 hình"], "answer": 0 },
        { "question": "Hình B (3 × 3 × 2) gồm bao nhiêu hình lập phương nhỏ?", "options": ["18 hình", "12 hình", "9 hình", "24 hình"], "answer": 0 },
        { "question": "So sánh thể tích hình A (12 khối) và hình B (18 khối):", "options": ["Thể tích hình B lớn hơn thể tích hình A", "Thể tích hình A lớn hơn thể tích hình B", "Thể tích hai hình bằng nhau", "Không so sánh được"], "answer": 0 },
        { "question": "Hình C (6 khối) và Hình D (6 khối) có thể tích như thế nào?", "options": ["Thể tích hình C bằng thể tích hình D", "Thể tích hình C lớn hơn", "Thể tích hình D lớn hơn", "Không bằng nhau"], "answer": 0 },
        { "question": "Xếp 8 hình lập phương nhỏ cạnh 1 cm thành 1 hàng ngang. Chiều dài của hình hộp chữ nhật mới là:", "options": ["8 cm", "1 cm", "2 cm", "4 cm"], "answer": 0 },
        { "question": "Xếp 8 hình lập phương nhỏ cạnh 1 cm thành 1 hàng ngang. Chiều rộng của hình hộp chữ nhật mới là:", "options": ["1 cm", "8 cm", "2 cm", "4 cm"], "answer": 0 },
        { "question": "Xếp 8 hình lập phương nhỏ cạnh 1 cm thành 1 hàng ngang. Chiều cao của hình hộp chữ nhật mới là:", "options": ["1 cm", "8 cm", "2 cm", "4 cm"], "answer": 0 },
        { "question": "Hình lập phương là trường hợp đặc biệt của hình nào khi chiều dài = chiều rộng = chiều cao?", "options": ["Hình hộp chữ nhật", "Hình cầu", "Hình trụ", "Hình nón"], "answer": 0 },
        { "question": "Nếu một hình được ghép từ 10 hình lập phương nhỏ cạnh 1 cm thì thể tích của nó gồm bao nhiêu khối nhỏ?", "options": ["10 khối nhỏ", "5 khối nhỏ", "20 khối nhỏ", "8 khối nhỏ"], "answer": 0 },
        { "question": "Cho hình M (6 khối) và N (2 khối). Tổng thể tích của M và N gồm bao nhiêu khối?", "options": ["8 khối", "12 khối", "4 khối", "6 khối"], "answer": 0 }
    ]
};
