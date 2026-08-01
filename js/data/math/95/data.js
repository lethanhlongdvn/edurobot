// ===================================================================
// Tiết 95 - Bài 38: Tìm hai số khi biết tổng và tỉ số (tiết 1)
// DATA: Nội dung khám phá, luyện tập 2 slide và Quiz Pool 15 câu
// ===================================================================

export const lesson95Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
                    
                    <!-- Slide 1: Khám phá - Tìm hai số khi biết tổng và tỉ số của hai số đó -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] border-2 border-blue-50 shadow-xl bg-white/80 backdrop-blur-xl space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">🔍</div>
                                <h3 class="text-slate-800 uppercase italic text-xl font-black">Khám phá: Bài toán Tổng - Tỉ</h3>
                            </div>

                            <div class="bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-6">
                                <div class="relative flex justify-center max-w-[500px] mx-auto group">
                                    <img onclick="window.zoomImage95('./assets/images/toan/toan_tap_2/95/kp.png', 'Quyên góp lịch cũ')" src="./assets/images/toan/toan_tap_2/95/kp.png" alt="Quyên góp lịch cũ" class="w-full h-auto max-h-[300px] object-contain rounded-2xl border-4 border-blue-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                    <button onclick="window.zoomImage95('./assets/images/toan/toan_tap_2/95/kp.png', 'Quyên góp lịch cũ')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                    </button>
                                </div>

                                <div class="bg-white p-6 rounded-[2rem] border border-blue-150 text-slate-750 space-y-4">
                                    <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed">
                                        Bài toán: Trong đợt quyên góp lịch cũ làm sách chữ nổi cho người khiếm thị, hai lớp 5A và 5B đóng góp được <span class="text-blue-700 font-extrabold">60 quyển</span>. Biết số lịch của lớp 5A bằng <span class="text-blue-700 font-extrabold">7/8</span> số lịch của lớp 5B. Hỏi mỗi lớp đóng góp bao nhiêu quyển lịch?
                                    </p>
                                    
                                    <div class="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] space-y-4">
                                        <p class="text-2xl font-black text-blue-700 text-center">Bài giải mẫu</p>
                                        
                                         <!-- Sơ đồ SVG lớp 5A và 5B quyên góp lịch -->
                                         <div class="bg-slate-50 p-6 rounded-2xl border border-slate-150 flex justify-center">
                                             <svg viewBox="0 0 620 100" class="w-full max-w-[680px] md:max-w-[780px] font-bold text-slate-800">
                                                 <!-- Lớp 5A -->
                                                 <text x="10" y="32" class="fill-slate-800 font-bold" font-size="20">Lớp 5A</text>
                                                 <line x1="120" y1="25" x2="330" y2="25" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="120" y1="15" x2="120" y2="35" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="150" y1="15" x2="150" y2="35" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="180" y1="15" x2="180" y2="35" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="210" y1="15" x2="210" y2="35" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="240" y1="15" x2="240" y2="35" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="270" y1="15" x2="270" y2="35" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="300" y1="15" x2="300" y2="35" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="330" y1="15" x2="330" y2="35" stroke="#1e293b" stroke-width="3"/>
                                                 
                                                 <!-- Lớp 5B -->
                                                 <text x="10" y="72" class="fill-slate-800 font-bold" font-size="20">Lớp 5B</text>
                                                 <line x1="120" y1="65" x2="360" y2="65" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="120" y1="55" x2="120" y2="75" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="150" y1="55" x2="150" y2="75" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="180" y1="55" x2="180" y2="75" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="210" y1="55" x2="210" y2="75" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="240" y1="55" x2="240" y2="75" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="270" y1="55" x2="270" y2="75" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="300" y1="55" x2="300" y2="75" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="330" y1="55" x2="330" y2="75" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="360" y1="55" x2="360" y2="75" stroke="#1e293b" stroke-width="3"/>

                                                 <!-- Móc nhọn / ngoặc bên phải -->
                                                 <path d="M 375 15 L 385 15 L 385 75 L 375 75" fill="none" stroke="#0284c7" stroke-width="3"/>
                                                 <text x="400" y="50" class="fill-blue-700 font-extrabold" font-size="19">60 quyển</text>
                                             </svg>
                                         </div>

                                        <div class="text-xl md:text-2xl font-bold text-slate-700 space-y-3 pt-4 border-t border-slate-200">
                                            <p>Tổng số phần bằng nhau là:</p>
                                            <p class="pl-6 font-bold text-slate-900">8 + 7 = 15 (phần)</p>
                                            <p>Giá trị một phần là:</p>
                                            <p class="pl-6 font-bold text-slate-900">60 : 15 = 4 (quyển)</p>
                                            <p>Số quyển lịch lớp 5B đóng góp là:</p>
                                            <p class="pl-6 font-bold text-slate-900">4 × 8 = 32 (quyển)</p>
                                            <p>Số quyển lịch lớp 5A đóng góp là:</p>
                                            <p class="pl-6 font-bold text-slate-900">4 × 7 = 28 (quyển) (hoặc lấy 60 - 32 = 28 quyển)</p>
                                            <p class="font-extrabold text-blue-700 mt-2">Đáp số: Lớp 5A: 28 quyển; Lớp 5B: 32 quyển.</p>
                                        </div>
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
                    
                    <!-- Slide 1: Bài 1 - Con bò sữa trên bãi cỏ -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson95_b1" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide">Bài 1. Đàn bò sữa trên bãi cỏ</h3>
                            </div>

                            <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage95('./assets/images/toan/toan_tap_2/95/1.png', 'Bò vàng và bò khoang')" src="./assets/images/toan/toan_tap_2/95/1.png" alt="Bò vàng và bò khoang" class="w-full h-auto max-h-[220px] object-contain rounded-2xl border-4 border-slate-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage95('./assets/images/toan/toan_tap_2/95/1.png', 'Bò vàng và bò khoang')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4">
                                <p class="font-bold text-slate-800">
                                    Trên bãi cỏ có <span class="text-blue-700">49 con bò sữa</span> gồm bò vàng và bò khoang, trong đó số bò khoang bằng <span class="text-blue-700">2/5</span> số bò vàng. Hỏi trên bãi cỏ có bao nhiêu con bò khoang, bao nhiêu con bò vàng?
                                </p>
                                
                                <!-- Sơ đồ SVG bò vàng và bò khoang -->
                                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-150 flex justify-center">
                                    <svg viewBox="0 0 620 100" class="w-full max-w-[680px] md:max-w-[780px] font-bold text-slate-800">
                                        <!-- Bò khoang -->
                                        <text x="10" y="32" class="fill-slate-800 font-bold" font-size="20">Bò khoang</text>
                                        <line x1="130" y1="25" x2="230" y2="25" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="130" y1="15" x2="130" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="180" y1="15" x2="180" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="230" y1="15" x2="230" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        
                                        <!-- Bò vàng -->
                                        <text x="10" y="72" class="fill-slate-800 font-bold" font-size="20">Bò vàng</text>
                                        <line x1="130" y1="65" x2="380" y2="65" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="130" y1="55" x2="130" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="180" y1="55" x2="180" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="230" y1="55" x2="230" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="280" y1="55" x2="280" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="330" y1="55" x2="330" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="380" y1="55" x2="380" y2="75" stroke="#1e293b" stroke-width="3"/>

                                        <!-- Móc nhọn / ngoặc bên phải -->
                                        <path d="M 395 15 L 405 15 L 405 75 L 395 75" fill="none" stroke="#0284c7" stroke-width="3"/>
                                        <text x="420" y="50" class="fill-blue-700 font-extrabold" font-size="19">49 con</text>
                                    </svg>
                                </div>

                                <div class="bg-white p-6 rounded-[1.5rem] border border-blue-100 space-y-4 font-bold text-slate-800">
                                    <p class="text-2xl text-center text-blue-600 mb-2">Đáp số</p>
                                    
                                    <div class="flex flex-row items-center gap-2 flex-wrap">
                                        <span>Số con bò khoang:</span>
                                        <input id="95-1-1" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>con</span>
                                    </div>

                                    <div class="flex flex-row items-center gap-2 flex-wrap">
                                        <span>Số con bò vàng:</span>
                                        <input id="95-1-2" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>con</span>
                                    </div>
                                </div>

                                <!-- Hộp thoại giải chi tiết xếp chồng dọc -->
                                <div id="solution-95-1" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Tổng số phần bằng nhau là:</p>
                                    <p class="pl-6 font-bold text-slate-900">5 + 2 = 7 (phần)</p>
                                    <p>Giá trị một phần là:</p>
                                    <p class="pl-6 font-bold text-slate-900">49 : 7 = 7 (con)</p>
                                    <p>Số con bò khoang là:</p>
                                    <p class="pl-6 font-bold text-slate-900">7 x 2 = 14 (con)</p>
                                    <p>Số con bò vàng là:</p>
                                    <p class="pl-6 font-bold text-slate-900">7 x 5 = 35 (con) (hoặc lấy 49 - 14 = 35 con)</p>
                                    <p class="font-bold text-blue-700 mt-2">Đáp số: Bò khoang: 14 con; Bò vàng: 35 con.</p>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution95('1')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-95-1" onclick="window.check_95_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 - Doanh thu bán hàng của cửa hàng -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson95_b2" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase tracking-wide">Bài 2. Doanh thu cửa hàng</h3>
                            </div>

                            <div class="p-6 bg-emerald-50/80 border-2 border-emerald-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4">
                                <p class="font-bold text-slate-800">
                                    Trong một ngày, một cửa hàng đã bán hàng và thu được số tiền là <span class="text-emerald-700 font-extrabold">18 000 000 đồng</span>. Biết số tiền bán được trong buổi sáng bằng <span class="text-emerald-700 font-black">3/2</span> số tiền bán được trong buổi chiều. Hỏi số tiền bán được trong mỗi buổi là bao nhiêu?
                                </p>
                                
                                <div class="bg-white p-6 rounded-[1.5rem] border border-emerald-100 space-y-4 font-bold text-slate-800">
                                    <p class="text-2xl text-center text-emerald-600 mb-2">Đáp số</p>
                                    
                                    <div class="flex flex-row items-center gap-2 flex-wrap">
                                        <span>Doanh thu buổi sáng:</span>
                                        <input id="95-2-1" type="text" class="w-44 h-11 text-center text-xl font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>đồng</span>
                                    </div>

                                    <div class="flex flex-row items-center gap-2 flex-wrap">
                                        <span>Doanh thu buổi chiều:</span>
                                        <input id="95-2-2" type="text" class="w-44 h-11 text-center text-xl font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>đồng</span>
                                    </div>
                                </div>

                                <!-- Hộp thoại giải chi tiết xếp chồng dọc -->
                                <div id="solution-95-2" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Tổng số phần bằng nhau là:</p>
                                    <p class="pl-6 font-bold text-slate-900">2 + 3 = 5 (phần)</p>
                                    <p>Giá trị một phần là:</p>
                                    <p class="pl-6 font-bold text-slate-900">18 000 000 : 5 = 3 600 000 (đồng)</p>
                                    <p>Doanh thu buổi sáng là:</p>
                                    <p class="pl-6 font-bold text-slate-900">3 600 000 x 3 = 10 800 000 (đồng)</p>
                                    <p>Doanh thu buổi chiều là:</p>
                                    <p class="pl-6 font-bold text-slate-900">3 600 000 x 2 = 7 200 000 (đồng) (hoặc lấy 18 000 000 - 10 800 000 = 7 200 000 đồng)</p>
                                    <p class="font-bold text-blue-700 mt-2">Đáp số: Buổi sáng: 10 800 000 đồng; Buổi chiều: 7 200 000 đồng.</p>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution95('2')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-95-2" onclick="window.check_95_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        <!-- Script bổ trợ toggle hiện/ẩn bài giải chi tiết cho GV -->
        <script>
            window.toggleSolution95 = (id) => {
                const el = document.getElementById('solution-95-' + id);
                if (el) {
                    el.classList.toggle('hidden');
                }
            };
        </script>
    `,

    "quizPool": [
        { "question": "Dạng toán tìm hai số khi biết Tổng và Tỉ số của hai số đó có bước đầu tiên thường làm là:", "options": ["Vẽ sơ đồ đoạn thẳng", "Tìm tổng số phần bằng nhau", "Tìm số bé", "Tìm số lớn"], "answer": 0 },
        { "question": "Tổng của hai số là 60. Tỉ số của hai số là 7/8. Tổng số phần bằng nhau là:", "options": ["15 phần", "1 phần", "56 phần", "14 phần"], "answer": 0 },
        { "question": "Tổng hai số là 49. Tỉ số là 2/5. Số bé là:", "options": ["14", "35", "7", "10"], "answer": 0 },
        { "question": "Tổng hai số là 49. Tỉ số là 2/5. Số lớn là:", "options": ["35", "14", "42", "25"], "answer": 0 },
        { "question": "Doanh thu cả ngày là 18 000 000 đồng. Tỉ số sáng/chiều là 3/2. Doanh thu buổi sáng là:", "options": ["10 800 000 đồng", "7 200 000 đồng", "9 000 000 đồng", "6 000 000 đồng"], "answer": 0 },
        { "question": "Doanh thu cả ngày là 18 000 000 đồng. Tỉ số sáng/chiều là 3/2. Doanh thu buổi chiều là:", "options": ["7 200 000 đồng", "10 800 000 đồng", "6 000 000 đồng", "8 000 000 đồng"], "answer": 0 },
        { "question": "Hai số có tổng là 100, tỉ số là 1/4. Số bé là:", "options": ["20", "80", "10", "25"], "answer": 0 },
        { "question": "Hai số có tổng là 100, tỉ số là 1/4. Số lớn là:", "options": ["80", "20", "90", "75"], "answer": 0 },
        { "question": "Hai số có tổng là 72, tỉ số là 3/5. Tổng số phần bằng nhau là:", "options": ["8 phần", "15 phần", "2 phần", "16 phần"], "answer": 0 },
        { "question": "Hai số có tổng là 72, tỉ số là 3/5. Số bé là:", "options": ["27", "45", "9", "36"], "answer": 0 },
        { "question": "Hai số có tổng là 72, tỉ số là 3/5. Số lớn là:", "options": ["45", "27", "54", "40"], "answer": 0 },
        { "question": "Một sợi dây dài 24 m được cắt thành hai đoạn, đoạn ngắn bằng 1/3 đoạn dài. Đoạn ngắn dài:", "options": ["6 m", "18 m", "8 m", "4 m"], "answer": 0 },
        { "question": "Một sợi dây dài 24 m được cắt thành hai đoạn, đoạn ngắn bằng 1/3 đoạn dài. Đoạn dài dài:", "options": ["18 m", "6 m", "20 m", "16 m"], "answer": 0 },
        { "question": "Tổng hai số là 45, tỉ số là 2/3. Số bé là:", "options": ["18", "27", "9", "15"], "answer": 0 },
        { "question": "Tổng hai số là 45, tỉ số là 2/3. Số lớn là:", "options": ["27", "18", "30", "20"], "answer": 0 }
    ]
};
