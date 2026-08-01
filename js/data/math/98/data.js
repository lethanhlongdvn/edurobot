// ===================================================================
// Tiết 98 - Bài 39: Tìm hai số khi biết hiệu và tỉ số (tiết 2 - Luyện tập)
// DATA: Nội dung tóm tắt lý thuyết, slide bài tập tự luận và quiz pool
// ===================================================================

export const lesson98Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
                    
                    <!-- Slide 1: Tóm tắt lý thuyết Hiệu - Tỉ -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] border-2 border-blue-50 shadow-xl bg-white/80 backdrop-blur-xl space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">⚡</div>
                                <h3 class="text-slate-800 uppercase italic text-xl font-black">Phương pháp giải bài toán Hiệu - Tỉ</h3>
                            </div>

                            <div class="bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-6 text-xl md:text-2xl font-bold text-slate-700 leading-relaxed">
                                <p class="text-slate-800 font-extrabold text-2xl mb-4 text-center">Các bước giải bài toán Tìm hai số khi biết Hiệu và Tỉ số:</p>
                                
                                <div class="bg-white p-6 rounded-3xl border border-blue-150 space-y-3 max-w-3xl mx-auto text-left">
                                    <div class="space-y-0.5">
                                        <p class="text-blue-700 font-black text-2xl">Bước 1: Tìm hiệu số phần bằng nhau</p>
                                        <p class="text-slate-600 font-bold text-xl pl-6">• Lấy số phần số lớn - số phần số bé</p>
                                    </div>
                                    <div class="space-y-0.5 border-t border-slate-100 pt-2.5">
                                        <p class="text-blue-700 font-black text-2xl">Bước 2: Tìm giá trị một phần</p>
                                        <p class="text-slate-600 font-bold text-xl pl-6">• Lấy hiệu hai số : hiệu số phần bằng nhau</p>
                                    </div>
                                    <div class="space-y-0.5 border-t border-slate-100 pt-2.5">
                                        <p class="text-blue-700 font-black text-2xl">Bước 3: Tìm số lớn</p>
                                        <p class="text-slate-600 font-bold text-xl pl-6">• Lấy giá trị một phần × số phần số lớn</p>
                                    </div>
                                    <div class="space-y-0.5 border-t border-slate-100 pt-2.5">
                                        <p class="text-blue-700 font-black text-2xl">Bước 4: Tìm số bé</p>
                                        <p class="text-slate-600 font-bold text-xl pl-6">• Lấy giá trị một phần × số phần số bé (Hoặc lấy Số lớn - Hiệu hai số)</p>
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
                    
                    <!-- Slide 1: Bài 1 - Vệ sinh môi trường -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson98_b1" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide">Bài 1. Thu gom rác thải trường tiểu học</h3>
                            </div>

                            <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage98('./assets/images/toan/toan_tap_2/98/1.png', 'Giấy bìa loại A và Chai lọ loại B')" src="./assets/images/toan/toan_tap_2/98/1.png" alt="Giấy bìa loại A và Chai lọ loại B" class="w-full h-auto max-h-[220px] object-contain rounded-2xl border-4 border-slate-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage98('./assets/images/toan/toan_tap_2/98/1.png', 'Giấy bìa loại A và Chai lọ loại B')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4">
                                <p class="font-bold text-slate-800">
                                    Sau một đợt vệ sinh môi trường, một trường tiểu học đã thu gom hai loại rác thải: loại A gồm giấy, bìa và loại B gồm chai lọ, vỏ hộp. Biết số ki-lô-gam rác thải loại A bằng <span class="text-blue-700 font-extrabold">3/7</span> số ki-lô-gam rác thải loại B và ít hơn loại B là <span class="text-blue-700 font-extrabold">8 kg</span>. Hỏi mỗi loại có bao nhiêu ki-lô-gam rác thải?
                                </p>
                                
                                <!-- Sơ đồ SVG rác thải A và B -->
                                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-150 flex justify-center">
                                    <svg viewBox="0 0 620 120" class="w-full max-w-[680px] md:max-w-[780px] font-bold text-slate-800">
                                        <!-- Loại A -->
                                        <text x="10" y="32" class="fill-slate-800 font-bold" font-size="20">Loại A</text>
                                        <line x1="120" y1="25" x2="240" y2="25" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="120" y1="15" x2="120" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="160" y1="15" x2="160" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="200" y1="15" x2="200" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="240" y1="15" x2="240" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        
                                        <!-- Loại B -->
                                        <text x="10" y="72" class="fill-slate-800 font-bold" font-size="20">Loại B</text>
                                        <line x1="120" y1="65" x2="400" y2="65" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="120" y1="55" x2="120" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="160" y1="55" x2="160" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="200" y1="55" x2="200" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="240" y1="55" x2="240" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="280" y1="55" x2="280" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="320" y1="55" x2="320" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="360" y1="55" x2="360" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="400" y1="55" x2="400" y2="75" stroke="#1e293b" stroke-width="3"/>

                                        <!-- Đường gióng -->
                                        <line x1="240" y1="25" x2="240" y2="65" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4"/>

                                        <!-- Đoạn chênh lệch -->
                                        <path d="M 240 85 L 250 85 L 250 95 L 390 95 L 390 85 L 400 85" fill="none" stroke="#ef4444" stroke-width="2.5"/>
                                        <text x="290" y="112" class="fill-red-600 font-extrabold" font-size="18">Hiệu: 8 kg</text>
                                    </svg>
                                </div>

                                <div class="bg-white p-6 rounded-[1.5rem] border border-blue-100 space-y-4 font-bold text-slate-800">
                                    <p class="text-2xl text-center text-blue-600 mb-2">Đáp số</p>
                                    
                                    <div class="flex flex-row items-center gap-2 flex-wrap">
                                        <span>Rác thải loại A:</span>
                                        <input id="98-1-1" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>kg</span>
                                    </div>

                                    <div class="flex flex-row items-center gap-2 flex-wrap">
                                        <span>Rác thải loại B:</span>
                                        <input id="98-1-2" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>kg</span>
                                    </div>
                                </div>

                                <!-- Hộp thoại giải chi tiết xếp chồng dọc -->
                                <div id="solution-98-1" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Hiệu số phần bằng nhau là:</p>
                                    <p class="pl-6 font-bold text-slate-900">7 - 3 = 4 (phần)</p>
                                    <p>Giá trị một phần là:</p>
                                    <p class="pl-6 font-bold text-slate-900">8 : 4 = 2 (kg)</p>
                                    <p>Số ki-lô-gam rác thải loại A thu gom được là:</p>
                                    <p class="pl-6 font-bold text-slate-900">2 x 3 = 6 (kg)</p>
                                    <p>Số ki-lô-gam rác thải loại B thu gom được là:</p>
                                    <p class="pl-6 font-bold text-slate-900">2 x 7 = 14 (kg) (hoặc lấy 6 + 8 = 14 kg)</p>
                                    <p class="font-bold text-blue-700 mt-2">Đáp số: Loại A: 6 kg; Loại B: 14 kg.</p>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution98('1')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-98-1" onclick="window.check_98_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 - Mảnh đất hình chữ nhật -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson98_b2" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase tracking-wide">Bài 2. Mảnh đất hình chữ nhật</h3>
                            </div>

                            <div class="p-6 bg-emerald-50/80 border-2 border-emerald-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4">
                                <p class="font-bold text-slate-800">
                                    Một mảnh đất dạng hình chữ nhật có chiều dài hơn chiều rộng <span class="text-emerald-700 font-extrabold">10 m</span>, chiều dài bằng <span class="text-emerald-700 font-black">3/2</span> chiều rộng. Tính chu vi và diện tích mảnh đất đó.
                                </p>
                                
                                <div class="bg-white p-6 rounded-[1.5rem] border border-emerald-100 space-y-4 font-bold text-slate-800">
                                    <p class="text-2xl text-center text-emerald-600 mb-2">Đáp số</p>
                                    
                                    <div class="flex flex-row items-center gap-2 flex-wrap">
                                        <span>Chu vi mảnh đất:</span>
                                        <input id="98-2-1" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>mét</span>
                                    </div>

                                    <div class="flex flex-row items-center gap-2 flex-wrap">
                                        <span>Diện tích mảnh đất:</span>
                                        <input id="98-2-2" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>m²</span>
                                    </div>
                                </div>

                                <!-- Hộp thoại giải chi tiết xếp chồng dọc -->
                                <div id="solution-98-2" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Hiệu số phần bằng nhau là:</p>
                                    <p class="pl-6 font-bold text-slate-900">3 - 2 = 1 (phần)</p>
                                    <p>Giá trị một phần là:</p>
                                    <p class="pl-6 font-bold text-slate-900">10 : 1 = 10 (m)</p>
                                    <p>Chiều rộng mảnh đất là:</p>
                                    <p class="pl-6 font-bold text-slate-900">10 x 2 = 20 (m)</p>
                                    <p>Chiều dài mảnh đất là:</p>
                                    <p class="pl-6 font-bold text-slate-900">10 x 3 = 30 (m)</p>
                                    <p>Chu vi mảnh đất là:</p>
                                    <p class="pl-6 font-bold text-slate-900">(30 + 20) x 2 = 100 (m)</p>
                                    <p>Diện tích mảnh đất là:</p>
                                    <p class="pl-6 font-bold text-slate-900">30 x 20 = 600 (m²)</p>
                                    <p class="font-bold text-blue-700 mt-2">Đáp số: Chu vi: 100 m; Diện tích: 600 m².</p>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution98('2')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-98-2" onclick="window.check_98_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 - Bác Năm nuôi cá tra -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson98_b3" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-amber-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                                <h3 class="text-2xl md:text-3xl font-black text-amber-700 uppercase tracking-wide">Bài 3. Bác Năm thu hoạch cá tra miền Tây</h3>
                            </div>

                            <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage98('./assets/images/toan/toan_tap_2/98/3.png', 'Bác Năm thu hoạch cá tra')" src="./assets/images/toan/toan_tap_2/98/3.png" alt="Bác Năm thu hoạch cá tra" class="w-full h-auto max-h-[220px] object-contain rounded-2xl border-4 border-slate-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage98('./assets/images/toan/toan_tap_2/98/3.png', 'Bác Năm thu hoạch cá tra')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                            <div class="p-6 bg-amber-50/80 border-2 border-amber-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4">
                                <div class="font-bold text-slate-800 space-y-3">
                                    <p>
                                        Gia đình bác Năm nuôi cá tra ở miền Tây Nam Bộ, sau vụ nuôi cá lần này đã thu hoạch được một lượng lớn cá tra gồm hai loại: loại A và loại B. Tính ra số tấn cá loại A bằng <span class="text-amber-700 font-extrabold">5/2</span> số tấn cá loại B.
                                    </p>
                                    <p class="text-amber-800 pl-4">
                                        a) Hỏi gia đình bác Năm đã thu hoạch được bao nhiêu tấn cá mỗi loại, biết số cá loại A nhiều hơn số cá loại B là 6 tấn?<br>
                                        b) Biết giá 1 kg cá loại A là 29 500 đồng. Hỏi bác Năm bán hết số cá loại A thì thu được bao nhiêu tiền?
                                    </p>
                                </div>
                                
                                <div class="bg-white p-6 rounded-[1.5rem] border border-amber-100 space-y-4 font-bold text-slate-800">
                                    <p class="text-2xl text-center text-amber-600 mb-2">Đáp số</p>
                                    
                                    <div class="space-y-4 text-xl">
                                        <div class="flex flex-row items-center gap-2 flex-wrap">
                                            <span class="text-amber-700 font-black">a)</span>
                                            <span>Thu hoạch cá loại A:</span>
                                            <input id="98-3-1" type="text" class="w-24 h-11 text-center text-xl font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>tấn;</span>
                                            <span class="ml-4">Cá loại B:</span>
                                            <input id="98-3-2" type="text" class="w-24 h-11 text-center text-xl font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>tấn</span>
                                        </div>
                                        <div class="flex flex-row items-center gap-2 flex-wrap pt-2 border-t border-slate-100">
                                            <span class="text-amber-700 font-black">b)</span>
                                            <span>Tổng số tiền thu được từ cá loại A:</span>
                                            <input id="98-3-3" type="text" class="w-56 h-11 text-center text-xl font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>đồng</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp thoại giải chi tiết xếp chồng dọc -->
                                <div id="solution-98-3" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>a) Hiệu số phần bằng nhau là:</p>
                                    <p class="pl-6 font-bold text-slate-900">5 - 2 = 3 (phần)</p>
                                    <p>Giá trị một phần là:</p>
                                    <p class="pl-6 font-bold text-slate-900">6 : 3 = 2 (tấn)</p>
                                    <p>Số tấn cá loại A thu hoạch được là:</p>
                                    <p class="pl-6 font-bold text-slate-900">2 x 5 = 10 (tấn)</p>
                                    <p>Số tấn cá loại B thu hoạch được là:</p>
                                    <p class="pl-6 font-bold text-slate-900">2 x 2 = 4 (tấn) (hoặc lấy 10 - 6 = 4 tấn)</p>
                                    <p>b) Đổi 10 tấn cá loại A sang đơn vị ki-lô-gam:</p>
                                    <p class="pl-6 font-bold text-slate-900">10 tấn = 10 000 kg</p>
                                    <p>Số tiền bác Năm thu được khi bán hết số cá loại A là:</p>
                                    <p class="pl-6 font-bold text-slate-900">29 500 x 10 000 = 295 000 000 (đồng)</p>
                                    <p class="font-bold text-blue-700 mt-2">Đáp số: a) Cá loại A: 10 tấn, Cá loại B: 4 tấn; b) 295 000 000 đồng.</p>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution98('3')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-98-3" onclick="window.check_98_3()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Bài 4 - Tuổi mẹ con -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson98_b4" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-indigo-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                                <h3 class="text-2xl md:text-3xl font-black text-indigo-700 uppercase tracking-wide">Bài 4. Tính tuổi mẹ và tuổi con</h3>
                            </div>

                            <div class="p-6 bg-indigo-50/80 border-2 border-indigo-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4">
                                <p class="font-bold text-slate-800">
                                    Hiện nay, mẹ hơn con <span class="text-indigo-700 font-extrabold">25 tuổi</span>. Biết sau 2 năm nữa, tuổi con bằng <span class="text-indigo-700 font-black">2/7</span> tuổi mẹ. Hỏi hiện nay, tuổi mẹ là bao nhiêu, tuổi con là bao nhiêu?
                                </p>
                                
                                <div class="bg-white p-6 rounded-[1.5rem] border border-indigo-100 space-y-4 font-bold text-slate-800">
                                    <p class="text-2xl text-center text-indigo-600 mb-2">Đáp số</p>
                                    
                                    <div class="flex flex-row items-center gap-2 flex-wrap">
                                        <span>Tuổi mẹ hiện nay:</span>
                                        <input id="98-4-1" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-indigo-300 rounded-xl outline-none focus:border-indigo-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>tuổi</span>
                                    </div>

                                    <div class="flex flex-row items-center gap-2 flex-wrap">
                                        <span>Tuổi con hiện nay:</span>
                                        <input id="98-4-2" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-indigo-300 rounded-xl outline-none focus:border-indigo-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>tuổi</span>
                                    </div>
                                </div>

                                <!-- Hộp thoại giải chi tiết xếp chồng dọc -->
                                <div id="solution-98-4" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Hiệu số tuổi của mẹ và con không thay đổi theo thời gian, sau 2 năm nữa mẹ vẫn hơn con 25 tuổi.</p>
                                    <p>Hiệu số phần bằng nhau sau 2 năm nữa là:</p>
                                    <p class="pl-6 font-bold text-slate-900">7 - 2 = 5 (phần)</p>
                                    <p>Giá trị một phần sau 2 năm nữa là:</p>
                                    <p class="pl-6 font-bold text-slate-900">25 : 5 = 5 (tuổi)</p>
                                    <p>Tuổi con sau 2 năm nữa là:</p>
                                    <p class="pl-6 font-bold text-slate-900">5 x 2 = 10 (tuổi)</p>
                                    <p>Tuổi con hiện nay là:</p>
                                    <p class="pl-6 font-bold text-slate-900">10 - 2 = 8 (tuổi)</p>
                                    <p>Tuổi mẹ hiện nay là:</p>
                                    <p class="pl-6 font-bold text-slate-900">8 + 25 = 33 (tuổi)</p>
                                    <p class="font-bold text-blue-700 mt-2">Đáp số: Mẹ: 33 tuổi; Con: 8 tuổi.</p>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution98('4')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-98-4" onclick="window.check_98_4()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <script>
            window.toggleSolution98 = (id) => {
                const el = document.getElementById('solution-98-' + id);
                if (el) {
                    el.classList.toggle('hidden');
                }
            };
        </script>
    `,

    "quizPool": [
        { "question": "Hiệu hai số là 30, tỉ số là 1/4. Số bé là:", "options": ["10", "40", "15", "5"], "answer": 0 },
        { "question": "Hiệu hai số là 30, tỉ số là 1/4. Số lớn là:", "options": ["40", "10", "45", "50"], "answer": 0 },
        { "question": "Chiều dài hơn rộng 10 m, tỉ lệ 3/2. Chiều dài là:", "options": ["30 m", "20 m", "40 m", "15 m"], "answer": 0 },
        { "question": "Chiều dài hơn rộng 10 m, tỉ lệ 3/2. Chiều rộng là:", "options": ["20 m", "30 m", "15 m", "10 m"], "answer": 0 },
        { "question": "Chiều dài hơn rộng 10 m, tỉ lệ 3/2. Chu vi mảnh đất là:", "options": ["100 m", "50 m", "120 m", "60 m"], "answer": 0 },
        { "question": "Chiều dài hơn rộng 10 m, tỉ lệ 3/2. Diện tích mảnh đất là:", "options": ["600 m²", "300 m²", "400 m²", "500 m²"], "answer": 0 },
        { "question": "Cá loại A nhiều hơn B là 6 tấn, tỉ số A/B là 5/2. Số tấn cá loại A thu hoạch là:", "options": ["10 tấn", "4 tấn", "15 tấn", "8 tấn"], "answer": 0 },
        { "question": "Cá loại A nhiều hơn B là 6 tấn, tỉ số A/B là 5/2. Số tấn cá loại B thu hoạch là:", "options": ["4 tấn", "10 tấn", "6 tấn", "5 tấn"], "answer": 0 },
        { "question": "Hiệu hai số là 18. Số lớn bằng 5/2 số bé. Số lớn là:", "options": ["30", "12", "20", "25"], "answer": 0 },
        { "question": "Hiệu hai số là 18. Số lớn bằng 5/2 số bé. Số bé là:", "options": ["12", "30", "10", "8"], "answer": 0 },
        { "question": "Mẹ hơn con 25 tuổi. Sau 2 năm con bằng 2/7 mẹ. Tuổi con hiện nay là:", "options": ["8 tuổi", "10 tuổi", "6 tuổi", "5 tuổi"], "answer": 0 },
        { "question": "Mẹ hơn con 25 tuổi. Sau 2 năm con bằng 2/7 mẹ. Tuổi mẹ hiện nay là:", "options": ["33 tuổi", "35 tuổi", "30 tuổi", "28 tuổi"], "answer": 0 },
        { "question": "Hiệu hai số là 12, tỉ số là 7/3. Số lớn là:", "options": ["21", "9", "18", "15"], "answer": 0 },
        { "question": "Hiệu hai số là 12, tỉ số là 7/3. Số bé là:", "options": ["9", "21", "6", "12"], "answer": 0 },
        { "question": "Rác thải loại B nhiều hơn A là 8 kg, tỉ lệ A/B là 3/7. Rác loại B là:", "options": ["14 kg", "6 kg", "12 kg", "16 kg"], "answer": 0 }
    ]
};
