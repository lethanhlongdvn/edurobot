// ===================================================================
// Tiết 96 - Bài 38: Tìm hai số khi biết tổng và tỉ số (tiết 2 - Luyện tập)
// DATA: Nội dung tóm tắt lý thuyết, slide bài tập tự luận và quiz pool
// ===================================================================

export const lesson96Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
                    
                    <!-- Slide 1: Tóm tắt lý thuyết Tổng - Tỉ -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] border-2 border-blue-50 shadow-xl bg-white/80 backdrop-blur-xl space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">⚡</div>
                                <h3 class="text-slate-800 uppercase italic text-xl font-black">Phương pháp giải bài toán Tổng - Tỉ</h3>
                            </div>

                            <div class="bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-6 text-xl md:text-2xl font-bold text-slate-700 leading-relaxed">
                                <p class="text-slate-800 font-extrabold text-2xl mb-4 text-center">Các bước giải bài toán Tìm hai số khi biết Tổng và Tỉ số:</p>
                                
                                <div class="bg-white p-6 rounded-3xl border border-blue-150 space-y-3 max-w-3xl mx-auto text-left">
                                    <div class="space-y-0.5">
                                        <p class="text-blue-700 font-black text-2xl">Bước 1: Tìm tổng số phần bằng nhau</p>
                                        <p class="text-slate-600 font-bold text-xl pl-6">• Lấy số phần số lớn + số phần số bé</p>
                                    </div>
                                    <div class="space-y-0.5 border-t border-slate-100 pt-2.5">
                                        <p class="text-blue-700 font-black text-2xl">Bước 2: Tìm giá trị một phần</p>
                                        <p class="text-slate-600 font-bold text-xl pl-6">• Lấy tổng hai số : tổng số phần bằng nhau</p>
                                    </div>
                                    <div class="space-y-0.5 border-t border-slate-100 pt-2.5">
                                        <p class="text-blue-700 font-black text-2xl">Bước 3: Tìm số lớn</p>
                                        <p class="text-slate-600 font-bold text-xl pl-6">• Lấy giá trị một phần × số phần số lớn</p>
                                    </div>
                                    <div class="space-y-0.5 border-t border-slate-100 pt-2.5">
                                        <p class="text-blue-700 font-black text-2xl">Bước 4: Tìm số bé</p>
                                        <p class="text-slate-600 font-bold text-xl pl-6">• Lấy giá trị một phần × số phần số bé (Hoặc lấy Tổng hai số - số lớn)</p>
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
                    
                    <!-- Slide 1: Bài 1 - Bạn Páo đi học -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson96_b1" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide">Bài 1. Quãng đường từ nhà đến trường của Páo</h3>
                            </div>

                            <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage96('./assets/images/toan/toan_tap_2/96/1.png', 'Bạn Páo đi học qua dốc')" src="./assets/images/toan/toan_tap_2/96/1.png" alt="Bạn Páo đi học qua dốc" class="w-full h-auto max-h-[220px] object-contain rounded-2xl border-4 border-slate-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage96('./assets/images/toan/toan_tap_2/96/1.png', 'Bạn Páo đi học qua dốc')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4">
                                <p class="font-bold text-slate-800">
                                    Đường từ nhà đến trường, bạn Páo qua một đoạn đường dài <span class="text-blue-700 font-extrabold">1 400 m</span> gồm đoạn lên dốc và đoạn xuống dốc. Biết độ dài đoạn lên dốc bằng <span class="text-blue-700 font-extrabold">3/4</span> độ dài đoạn xuống dốc. Hỏi mỗi đoạn lên dốc, xuống dốc dài bao nhiêu mét?
                                </p>
                                
                                <!-- Sơ đồ SVG kiểu đường thẳng chia phần chuẩn SGK -->
                                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-150 flex justify-center">
                                    <svg viewBox="0 0 620 100" class="w-full max-w-[680px] md:max-w-[780px] font-bold text-slate-800">
                                        <!-- Lên dốc -->
                                        <text x="10" y="32" class="fill-slate-800 font-bold" font-size="20">Lên dốc</text>
                                        <line x1="130" y1="25" x2="370" y2="25" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="130" y1="15" x2="130" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="210" y1="15" x2="210" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="290" y1="15" x2="290" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="370" y1="15" x2="370" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        
                                        <!-- Xuống dốc -->
                                        <text x="10" y="72" class="fill-slate-800 font-bold" font-size="20">Xuống dốc</text>
                                        <line x1="130" y1="65" x2="450" y2="65" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="130" y1="55" x2="130" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="210" y1="55" x2="210" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="290" y1="55" x2="290" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="370" y1="55" x2="370" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="450" y1="55" x2="450" y2="75" stroke="#1e293b" stroke-width="3"/>

                                        <!-- Móc nhọn / ngoặc bên phải -->
                                        <path d="M 465 15 L 475 15 L 475 75 L 465 75" fill="none" stroke="#0284c7" stroke-width="3"/>
                                        <text x="490" y="50" class="fill-blue-700 font-extrabold" font-size="19">1 400 m</text>
                                    </svg>
                                </div>

                                <div class="bg-white p-6 rounded-[1.5rem] border border-blue-100 space-y-4 font-bold text-slate-800">
                                    <p class="text-2xl text-center text-blue-600 mb-2">Đáp số</p>
                                    
                                    <div class="flex flex-row items-center gap-2 flex-wrap">
                                        <span>Độ dài đoạn lên dốc:</span>
                                        <input id="96-1-1" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>mét</span>
                                    </div>

                                    <div class="flex flex-row items-center gap-2 flex-wrap">
                                        <span>Độ dài đoạn xuống dốc:</span>
                                        <input id="96-1-2" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>mét</span>
                                    </div>
                                </div>

                                <!-- Hộp thoại giải chi tiết xếp chồng dọc -->
                                <div id="solution-96-1" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Tổng số phần bằng nhau là:</p>
                                    <p class="pl-6 font-bold text-slate-900">3 + 4 = 7 (phần)</p>
                                    <p>Giá trị một phần là:</p>
                                    <p class="pl-6 font-bold text-slate-900">1 400 : 7 = 200 (m)</p>
                                    <p>Độ dài đoạn lên dốc là:</p>
                                    <p class="pl-6 font-bold text-slate-900">200 x 3 = 600 (m)</p>
                                    <p>Đoạn xuống dốc dài là:</p>
                                    <p class="pl-6 font-bold text-slate-900">200 x 4 = 800 (m) (hoặc lấy 1 400 - 600 = 800 m)</p>
                                    <p class="font-bold text-blue-700 mt-2">Đáp số: Lên dốc: 600 m; Xuống dốc: 800 m.</p>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution96('1')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-96-1" onclick="window.check_96_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 - Gian hàng tivi siêu thị -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson96_b2" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase tracking-wide">Bài 2. Gian hàng tivi siêu thị điện máy</h3>
                            </div>

                            <div class="p-6 bg-emerald-50/80 border-2 border-emerald-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4">
                                <p class="font-bold text-slate-800">
                                    Trong một gian hàng siêu thị điện máy có <span class="text-emerald-700 font-extrabold">36 chiếc ti vi</span> gồm ti vi 75 inch and ti vi 55 inch. Tìm số ti vi mỗi loại, biết số ti vi 55 inch gấp <span class="text-emerald-700 font-extrabold">3 lần</span> số ti vi 75 inch.
                                </p>
                                
                                <!-- Sơ đồ SVG tivi siêu thị -->
                                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-150 flex justify-center">
                                    <svg viewBox="0 0 620 100" class="w-full max-w-[680px] md:max-w-[780px] font-bold text-slate-800">
                                        <!-- TV 55inch -->
                                        <text x="10" y="32" class="fill-slate-800 font-bold" font-size="20">TV 55inch</text>
                                        <line x1="140" y1="25" x2="380" y2="25" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="140" y1="15" x2="140" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="220" y1="15" x2="220" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="300" y1="15" x2="300" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="380" y1="15" x2="380" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        
                                        <!-- TV 75inch -->
                                        <text x="10" y="72" class="fill-slate-800 font-bold" font-size="20">TV 75inch</text>
                                        <line x1="140" y1="65" x2="220" y2="65" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="140" y1="55" x2="140" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="220" y1="55" x2="220" y2="75" stroke="#1e293b" stroke-width="3"/>

                                        <!-- Móc nhọn / ngoặc bên phải -->
                                        <path d="M 395 15 L 405 15 L 405 75 L 395 75" fill="none" stroke="#059669" stroke-width="3"/>
                                        <text x="420" y="50" class="fill-emerald-700 font-extrabold" font-size="19">36</text>
                                    </svg>
                                </div>
                                
                                <div class="bg-white p-6 rounded-[1.5rem] border border-emerald-100 space-y-4 font-bold text-slate-800">
                                    <p class="text-2xl text-center text-emerald-600 mb-2">Đáp số</p>
                                    
                                    <div class="flex flex-row items-center gap-2 flex-wrap">
                                        <span>Số ti vi loại 75 inch:</span>
                                        <input id="96-2-1" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>chiếc</span>
                                    </div>

                                    <div class="flex flex-row items-center gap-2 flex-wrap">
                                        <span>Số ti vi loại 55 inch:</span>
                                        <input id="96-2-2" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>chiếc</span>
                                    </div>
                                </div>

                                <!-- Hộp thoại giải chi tiết xếp chồng dọc -->
                                <div id="solution-96-2" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Tổng số phần bằng nhau là:</p>
                                    <p class="pl-6 font-bold text-slate-900">3 + 1 = 4 (phần)</p>
                                    <p>Giá trị một phần là:</p>
                                    <p class="pl-6 font-bold text-slate-900">36 : 4 = 9 (chiếc)</p>
                                    <p>Số chiếc tivi loại 75 inch là:</p>
                                    <p class="pl-6 font-bold text-slate-900">9 x 1 = 9 (chiếc)</p>
                                    <p>Số chiếc tivi loại 55 inch là:</p>
                                    <p class="pl-6 font-bold text-slate-900">9 x 3 = 27 (chiếc) (hoặc lấy 36 - 9 = 27 chiếc)</p>
                                    <p class="font-bold text-blue-700 mt-2">Đáp số: Ti vi 75 inch: 9 chiếc; Ti vi 55 inch: 27 chiếc.</p>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution96('2')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-96-2" onclick="window.check_96_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 - Trại chăn nuôi gà vịt -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson96_b3" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-amber-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                                <h3 class="text-2xl md:text-3xl font-black text-amber-700 uppercase tracking-wide">Bài 3. Trại chăn nuôi gà và vịt</h3>
                            </div>

                            <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage96('./assets/images/toan/toan_tap_2/96/3.png', 'Trại nuôi gà và vịt')" src="./assets/images/toan/toan_tap_2/96/3.png" alt="Trại nuôi gà và vịt" class="w-full h-auto max-h-[220px] object-contain rounded-2xl border-4 border-slate-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage96('./assets/images/toan/toan_tap_2/96/3.png', 'Trại nuôi gà và vịt')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                            <div class="p-6 bg-amber-50/80 border-2 border-amber-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4">
                                <p class="font-bold text-slate-800">
                                    <span class="text-amber-800 font-extrabold">Rô-bốt, Việt và Mai</span> đi tham quan trại chăn nuôi gà và vịt. Bác chủ trại cho biết cả gà và vịt có <span class="text-amber-700 font-extrabold">34 000 con</span>, số con gà bằng <span class="text-amber-700 font-extrabold">7/10</span> số con vịt. Hỏi số gà ít hơn số vịt bao nhiêu con?
                                </p>
                                
                                <!-- Sơ đồ SVG chăn nuôi gà vịt -->
                                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-150 flex justify-center">
                                    <svg viewBox="0 0 620 100" class="w-full max-w-[680px] md:max-w-[780px] font-bold text-slate-800">
                                        <!-- Số con gà -->
                                        <text x="10" y="32" class="fill-slate-800 font-bold" font-size="20">Số con gà</text>
                                        <line x1="130" y1="25" x2="340" y2="25" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="130" y1="15" x2="130" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="160" y1="15" x2="160" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="190" y1="15" x2="190" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="220" y1="15" x2="220" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="250" y1="15" x2="250" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="280" y1="15" x2="280" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="310" y1="15" x2="310" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="340" y1="15" x2="340" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        
                                        <!-- Số con vịt -->
                                        <text x="10" y="72" class="fill-slate-800 font-bold" font-size="20">Số con vịt</text>
                                        <line x1="130" y1="65" x2="430" y2="65" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="130" y1="55" x2="130" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="160" y1="55" x2="160" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="190" y1="55" x2="190" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="220" y1="55" x2="220" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="250" y1="55" x2="250" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="280" y1="55" x2="280" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="310" y1="55" x2="310" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="340" y1="55" x2="340" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="370" y1="55" x2="370" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="400" y1="55" x2="400" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="430" y1="55" x2="430" y2="75" stroke="#1e293b" stroke-width="3"/>

                                        <!-- Móc nhọn / ngoặc bên phải -->
                                        <path d="M 445 15 L 455 15 L 455 75 L 445 75" fill="none" stroke="#d97706" stroke-width="3"/>
                                        <text x="470" y="50" class="fill-amber-700 font-extrabold" font-size="19">34 000 con</text>
                                    </svg>
                                </div>

                                <div class="bg-white p-6 rounded-[1.5rem] border border-amber-100 space-y-4 font-bold text-slate-800">
                                    <p class="text-2xl text-center text-amber-600 mb-2">Đáp số</p>
                                    
                                    <div class="flex flex-row items-center gap-2 flex-wrap">
                                        <span>Số gà ít hơn số vịt là:</span>
                                        <input id="96-3-1" type="text" class="w-36 h-11 text-center text-xl font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>con</span>
                                    </div>
                                </div>

                                <!-- Hộp thoại giải chi tiết xếp chồng dọc -->
                                <div id="solution-96-3" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Tổng số phần bằng nhau là:</p>
                                    <p class="pl-6 font-bold text-slate-900">10 + 7 = 17 (phần)</p>
                                    <p>Giá trị một phần là:</p>
                                    <p class="pl-6 font-bold text-slate-900">34 000 : 17 = 2 000 (con)</p>
                                    <p>Số con vịt trong trại là:</p>
                                    <p class="pl-6 font-bold text-slate-900">2 000 x 10 = 20 000 (con)</p>
                                    <p>Số con gà trong trại là:</p>
                                    <p class="pl-6 font-bold text-slate-900">2 000 x 7 = 14 000 (con) (hoặc lấy 34 000 - 20 000 = 14 000 con)</p>
                                    <p>Số gà ít hơn số vịt là:</p>
                                    <p class="pl-6 font-bold text-slate-900">20 000 - 14 000 = 6 000 (con)</p>
                                    <p class="font-bold text-blue-700 mt-2">Đáp số: 6 000 con.</p>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution96('3')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-96-3" onclick="window.check_96_3()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Bài 4 - Mảnh đất hình chữ nhật -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson96_b4" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-indigo-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                                <h3 class="text-2xl md:text-3xl font-black text-indigo-700 uppercase tracking-wide">Bài 4. Mảnh đất hình chữ nhật mới</h3>
                            </div>

                            <div class="flex flex-col gap-6 items-center">
                                <div class="flex justify-center w-full">
                                    <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage96('./assets/images/toan/toan_tap_2/96/4.png', 'Mảnh đất hình chữ nhật mới')" src="./assets/images/toan/toan_tap_2/96/4.png" alt="Mảnh đất hình chữ nhật mới" class="w-full h-auto max-h-[260px] object-contain rounded-2xl border-4 border-slate-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage96('./assets/images/toan/toan_tap_2/96/4.png', 'Mảnh đất hình chữ nhật mới')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>
                                </div>
                                <div class="w-full p-6 bg-indigo-50/80 border-2 border-indigo-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4">
                                    <p class="font-bold text-slate-800">
                                        Một mảnh đất dạng hình chữ nhật có chu vi <span class="text-indigo-700 font-extrabold">130 m</span> và chiều rộng bằng <span class="text-indigo-700 font-extrabold">5/8</span> chiều dài. Người ta mở chiều dài thêm <span class="text-indigo-700 font-extrabold">10 m</span>, chiều rộng thêm <span class="text-indigo-700 font-extrabold">20 m</span> để được mảnh đất dạng hình chữ nhật mới (như hình vẽ). Tính:
                                    </p>
                                    <p class="font-bold text-indigo-800 pl-4">
                                        a) Chiều dài và chiều rộng mảnh đất dạng hình chữ nhật ban đầu.<br>
                                        b) Diện tích mảnh đất dạng hình chữ nhật mới.
                                    </p>
                                </div>
                            </div>

                            <div class="bg-white p-6 rounded-[1.5rem] border border-indigo-100 space-y-4 font-bold text-slate-800">
                                <p class="text-2xl text-center text-indigo-600 mb-2">Đáp số</p>
                                
                                <div class="space-y-4 text-xl">
                                    <div class="flex flex-row items-center gap-2 flex-wrap">
                                        <span class="text-indigo-700 font-black">a)</span>
                                        <span>Chiều dài ban đầu:</span>
                                        <input id="96-4-1" type="text" class="w-24 h-11 text-center text-xl font-black border-2 border-indigo-300 rounded-xl outline-none focus:border-indigo-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>m;</span>
                                        <span class="ml-4">Chiều rộng ban đầu:</span>
                                        <input id="96-4-2" type="text" class="w-24 h-11 text-center text-xl font-black border-2 border-indigo-300 rounded-xl outline-none focus:border-indigo-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>m</span>
                                    </div>
                                    <div class="flex flex-row items-center gap-2 flex-wrap pt-2 border-t border-slate-100">
                                        <span class="text-indigo-700 font-black">b)</span>
                                        <span>Diện tích mảnh đất mới:</span>
                                        <input id="96-4-3" type="text" class="w-36 h-11 text-center text-xl font-black border-2 border-indigo-300 rounded-xl outline-none focus:border-indigo-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>m²</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Hộp thoại giải chi tiết xếp chồng dọc -->
                            <div id="solution-96-4" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                <p>a) Nửa chu vi mảnh đất ban đầu là:</p>
                                <p class="pl-6 font-bold text-slate-900">130 : 2 = 65 (m)</p>
                                <p>Tổng số phần bằng nhau là:</p>
                                <p class="pl-6 font-bold text-slate-900">8 + 5 = 13 (phần)</p>
                                <p>Giá trị một phần là:</p>
                                <p class="pl-6 font-bold text-slate-900">65 : 13 = 5 (m)</p>
                                <p>Chiều dài mảnh đất ban đầu là:</p>
                                <p class="pl-6 font-bold text-slate-900">5 x 8 = 40 (m)</p>
                                <p>Chiều rộng mảnh đất ban đầu là:</p>
                                <p class="pl-6 font-bold text-slate-900">5 x 5 = 25 (m) (hoặc lấy 65 - 40 = 25 m)</p>
                                <p>b) Chiều dài mới của mảnh đất là:</p>
                                <p class="pl-6 font-bold text-slate-900">40 + 10 = 50 (m)</p>
                                <p>Chiều rộng mới của mảnh đất là:</p>
                                <p class="pl-6 font-bold text-slate-900">25 + 20 = 45 (m)</p>
                                <p>Diện tích mảnh đất hình chữ nhật mới là:</p>
                                <p class="pl-6 font-bold text-slate-900">50 x 45 = 2 250 (m²)</p>
                                <p class="font-bold text-blue-700 mt-2">Đáp số: a) Chiều dài: 40 m, Chiều rộng: 25 m; b) 2 250 m².</p>
                            </div>

                            <!-- Hàng chứa nút bấm -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution96('4')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-96-4" onclick="window.check_96_4()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <script>
            window.toggleSolution96 = (id) => {
                const el = document.getElementById('solution-96-' + id);
                if (el) {
                    el.classList.toggle('hidden');
                }
            };
        </script>
    `,

    "quizPool": [
        { "question": "Tổng hai số là 120. Tỉ số của hai số là 1/3. Số bé là:", "options": ["30", "90", "40", "15"], "answer": 0 },
        { "question": "Tổng hai số là 120. Tỉ số của hai số là 1/3. Số lớn là:", "options": ["90", "30", "100", "80"], "answer": 0 },
        { "question": "Hai số có tổng là 45, tỉ số là 2/3. Số bé là:", "options": ["18", "27", "15", "9"], "answer": 0 },
        { "question": "Hai số có tổng là 45, tỉ số là 2/3. Số lớn là:", "options": ["27", "18", "30", "36"], "answer": 0 },
        { "question": "Hai số có tổng là 80, tỉ số là 3/5. Tổng số phần bằng nhau là:", "options": ["8 phần", "15 phần", "2 phần", "16 phần"], "answer": 0 },
        { "question": "Hai số có tổng là 80, tỉ số là 3/5. Số bé là:", "options": ["30", "50", "10", "24"], "answer": 0 },
        { "question": "Hai số có tổng là 80, tỉ số là 3/5. Số lớn là:", "options": ["50", "30", "60", "40"], "answer": 0 },
        { "question": "Một siêu thị có 50 bao gạo gồm gạo tẻ và gạo nếp. Số bao gạo tẻ bằng 3/2 số bao gạo nếp. Số bao gạo tẻ là:", "options": ["30 bao", "20 bao", "15 bao", "25 bao"], "answer": 0 },
        { "question": "Một siêu thị có 50 bao gạo gồm gạo tẻ và gạo nếp. Số bao gạo tẻ bằng 3/2 số bao gạo nếp. Số bao gạo nếp là:", "options": ["20 bao", "30 bao", "10 bao", "25 bao"], "answer": 0 },
        { "question": "Tổng hai số là 150. Số bé bằng 2/3 số lớn. Số bé là:", "options": ["60", "90", "50", "30"], "answer": 0 },
        { "question": "Tổng hai số là 150. Số bé bằng 2/3 số lớn. Số lớn là:", "options": ["90", "60", "100", "120"], "answer": 0 },
        { "question": "Có 48 quả cam và táo. Biết số cam gấp 3 lần số táo. Số táo là:", "options": ["12 quả", "36 quả", "16 quả", "24 quả"], "answer": 0 },
        { "question": "Có 48 quả cam và táo. Biết số cam gấp 3 lần số táo. Số cam là:", "options": ["36 quả", "12 quả", "32 quả", "24 quả"], "answer": 0 },
        { "question": "Tổng hai số là 200, tỉ số là 1/4. Số bé là:", "options": ["40", "160", "50", "20"], "answer": 0 },
        { "question": "Tổng hai số là 200, tỉ số là 1/4. Số lớn là:", "options": ["160", "40", "150", "180"], "answer": 0 }
    ]
};
