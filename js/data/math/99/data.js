// ===================================================================
// Tiết 99 - Bài 40: Tìm tỉ số phần trăm của hai số (tiết 1)
// DATA: Nội dung lý thuyết khám phá, slide luyện tập và quiz pool
// ===================================================================

export const lesson99Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
                    
                    <!-- Slide 1: Khám phá - Tìm tỉ số phần trăm của hai số -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] border-2 border-blue-50 shadow-xl bg-white/80 backdrop-blur-xl space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">🔍</div>
                                <h3 class="text-slate-800 uppercase italic text-xl font-black">Khám phá: Tìm tỉ số phần trăm</h3>
                            </div>

                            <div class="bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-6">
                                <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage99('./assets/images/toan/toan_tap_2/99/kp.png', 'Khóa học bơi hè')" src="./assets/images/toan/toan_tap_2/99/kp.png" alt="Khóa học bơi hè" class="w-full h-auto max-h-[280px] object-contain rounded-2xl border-4 border-blue-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage99('./assets/images/toan/toan_tap_2/99/kp.png', 'Khóa học bơi hè')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                                <div class="bg-white p-6 rounded-[2rem] border border-blue-150 text-slate-750 space-y-4 text-xl">
                                    <p class="font-bold text-slate-800">
                                        Bài toán: Kiểm tra sau khoá học bơi hè, lớp thứ nhất có 50 bạn tham gia thì 46 bạn đạt chuẩn. Lớp thứ hai có 40 bạn tham gia thì 37 bạn đạt chuẩn. Hỏi tỉ lệ bơi đạt chuẩn của lớp nào cao hơn?
                                    </p>
                                    
                                    <div class="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] space-y-4">
                                        <p class="text-2xl font-black text-blue-700 text-center">Phương pháp giải</p>
                                        <div class="space-y-3 font-bold text-slate-700">
                                            <p class="pl-6 text-slate-900 flex items-center">
                                                <span class="mr-2">• Lớp thứ nhất:</span>
                                                <span class="inline-flex items-center align-middle font-bold text-slate-900 text-xl md:text-2xl">
                                                    <span class="inline-flex flex-col items-center align-middle mx-1 leading-none">
                                                        <span class="border-b border-slate-900 px-1 leading-none pb-0.5">46</span>
                                                        <span class="leading-none pt-0.5">50</span>
                                                    </span>
                                                    <span class="mx-1">=</span>
                                                    <span class="inline-flex flex-col items-center align-middle mx-1 leading-none">
                                                        <span class="border-b border-slate-900 px-1 leading-none pb-0.5">46 &times; 2</span>
                                                        <span class="leading-none pt-0.5">50 &times; 2</span>
                                                    </span>
                                                    <span class="mx-1">=</span>
                                                    <span class="inline-flex flex-col items-center align-middle mx-1 leading-none">
                                                        <span class="border-b border-slate-900 px-1 leading-none pb-0.5">92</span>
                                                        <span class="leading-none pt-0.5">100</span>
                                                    </span>
                                                    <span class="mx-1">= 92%</span>
                                                </span>
                                            </p>
                                            <p>• Lớp thứ hai:</p>
                                            <p class="pl-6 text-slate-900">37 : 40 = 0,925</p>
                                            <p class="pl-6 text-slate-900">0,925 = 92,5%</p>
                                            <p>Vì 92,5% > 92% nên tỉ lệ bơi đạt chuẩn của lớp thứ hai cao hơn lớp thứ nhất.</p>
                                        </div>
                                    </div>

                                    <div class="p-6 bg-amber-50 border-2 border-amber-200 rounded-[2rem] space-y-4 text-2xl md:text-3xl text-slate-800 leading-relaxed">
                                        <p class="text-3xl font-black text-amber-800">💡 Quy tắc ghi nhớ:</p>
                                        <p class="font-extrabold text-slate-900">Muốn tìm tỉ số phần trăm của hai số ta làm như sau:</p>
                                        <ul class="list-disc pl-6 space-y-3 font-extrabold text-slate-800">
                                            <li><span class="text-blue-700 font-black">Bước 1:</span> Tìm thương của hai số.</li>
                                            <li><span class="text-blue-700 font-black">Bước 2:</span> Nhân thương đó với 100 và viết thêm kí hiệu % vào bên phải tích tìm được.</li>
                                        </ul>
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
                    
                    <!-- Slide 1: Bài 1 - Tỉ số phần trăm & Lượng muối -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson99_b1" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide">Bài 1. Luyện tập tỉ số phần trăm</h3>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-6">
                                <div class="bg-white p-6 rounded-3xl border border-blue-100 space-y-4">
                                    <p class="font-extrabold text-blue-800">a) Tìm tỉ số phần trăm của hai số (theo mẫu):</p>
                                    <p class="pl-4 font-bold text-slate-500 flex items-center">
                                        <span class="mr-2">Mẫu:</span>
                                        <span class="inline-flex items-center align-middle font-bold text-slate-800 text-lg md:text-xl">
                                            <span class="inline-flex flex-col items-center align-middle mx-1 leading-none">
                                                <span class="border-b border-slate-800 px-1 leading-none pb-0.5">36</span>
                                                <span class="leading-none pt-0.5">200</span>
                                            </span>
                                            <span class="mx-1">=</span>
                                            <span class="inline-flex flex-col items-center align-middle mx-1 leading-none">
                                                <span class="border-b border-slate-800 px-1 leading-none pb-0.5">18</span>
                                                <span class="leading-none pt-0.5">100</span>
                                            </span>
                                            <span class="mx-1">= 18%</span>
                                        </span>
                                    </p>
                                    
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 font-bold text-slate-800">
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <span>• Tỉ số phần trăm của 90 và 300 là:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="99-1-1" type="text" class="w-24 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>%</span>
                                            </span>
                                        </div>
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <span>• Tỉ số phần trăm của 60 và 400 là:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="99-1-2" type="text" class="w-24 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>%</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white p-6 rounded-3xl border border-blue-100 space-y-4">
                                    <p class="font-extrabold text-blue-800">b) Điền số thích hợp vào chỗ trống:</p>
                                    <p class="pl-4 font-bold text-slate-700">Đề bài: Trong 40 kg nước biển có 1,4 kg muối. Tìm tỉ số phần trăm của lượng muối trong nước biển.</p>
                                    
                                    <div class="pl-4 space-y-3 font-bold text-slate-800">
                                        <p class="text-blue-700">Bài giải:</p>
                                        <p>Tỉ số phần trăm của lượng muối trong nước biển là:</p>
                                        
                                        <div class="flex flex-col gap-2.5 pl-4">
                                            <div class="flex items-center gap-2 flex-wrap">
                                                <span>1,4 : 40 =</span>
                                                <input id="99-1-3" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            </div>
                                            <div class="flex items-center gap-2 flex-wrap">
                                                <input id="99-1-4" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>=</span>
                                                <span class="text-blue-700">... %</span>
                                            </div>
                                            <div class="flex items-center gap-2 flex-wrap">
                                                <span>Đáp số:</span>
                                                <input id="99-1-5" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp thoại giải chi tiết xếp chồng dọc -->
                                <div id="solution-99-1" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-4 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-1">Bài giải chi tiết:</p>
                                    <div class="space-y-3">
                                        <p class="font-bold text-blue-700 text-xl border-b border-slate-200 pb-1">Câu a:</p>
                                        <p>Tỉ số phần trăm của 90 và 300 là:</p>
                                        <p class="pl-6 font-bold text-slate-900 flex items-center">
                                            <span class="inline-flex items-center align-middle font-bold text-slate-900 text-lg">
                                                <span class="inline-flex flex-col items-center align-middle mx-1 leading-none">
                                                    <span class="border-b border-slate-900 px-1 leading-none pb-0.5">90</span>
                                                    <span class="leading-none pt-0.5">300</span>
                                                </span>
                                                <span class="mx-1">=</span>
                                                <span class="inline-flex flex-col items-center align-middle mx-1 leading-none">
                                                    <span class="border-b border-slate-900 px-1 leading-none pb-0.5">30</span>
                                                    <span class="leading-none pt-0.5">100</span>
                                                </span>
                                                <span class="mx-1">= 30%</span>
                                            </span>
                                        </p>
                                        <p>Tỉ số phần trăm của 60 và 400 là:</p>
                                        <p class="pl-6 font-bold text-slate-900 flex items-center">
                                            <span class="inline-flex items-center align-middle font-bold text-slate-900 text-lg">
                                                <span class="inline-flex flex-col items-center align-middle mx-1 leading-none">
                                                    <span class="border-b border-slate-900 px-1 leading-none pb-0.5">60</span>
                                                    <span class="leading-none pt-0.5">400</span>
                                                </span>
                                                <span class="mx-1">=</span>
                                                <span class="inline-flex flex-col items-center align-middle mx-1 leading-none">
                                                    <span class="border-b border-slate-900 px-1 leading-none pb-0.5">15</span>
                                                    <span class="leading-none pt-0.5">100</span>
                                                </span>
                                                <span class="mx-1">= 15%</span>
                                            </span>
                                        </p>
                                    </div>
                                    <div class="space-y-3 border-t border-slate-200 pt-3">
                                        <p class="font-bold text-blue-700 text-xl border-b border-slate-200 pb-1">Câu b:</p>
                                        <p>Tỉ số phần trăm của lượng muối trong nước biển là:</p>
                                        <p class="pl-6 font-bold text-slate-900">1,4 : 40 = 0,035</p>
                                        <p>Đổi sang tỉ số phần trăm:</p>
                                        <p class="pl-6 font-bold text-slate-900">0,035 = 3,5%</p>
                                        <p class="font-bold text-blue-700 mt-2">Đáp số: 3,5%.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution99('1')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-99-1" onclick="window.check_99_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 - Đội tình nguyện bảo vệ môi trường -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson99_b2" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase tracking-wide">Bài 2. Đội tình nguyện bảo vệ môi trường</h3>
                            </div>

                            <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage99('./assets/images/toan/toan_tap_2/99/2.png', 'Các bạn dọn rác bãi biển')" src="./assets/images/toan/toan_tap_2/99/2.png" alt="Các bạn dọn rác bãi biển" class="w-full h-auto max-h-[220px] object-contain rounded-2xl border-4 border-slate-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage99('./assets/images/toan/toan_tap_2/99/2.png', 'Các bạn dọn rác bãi biển')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                            <div class="p-6 bg-emerald-50/80 border-2 border-emerald-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4">
                                <p class="font-bold text-slate-800">
                                    Đội tình nguyện tuyên truyền và bảo vệ môi trường của Trường Tiểu học Hoà Bình có <span class="text-emerald-700 font-extrabold">60 bạn</span>, trong đó lớp 5A có <span class="text-emerald-750 font-bold">18 bạn</span>, lớp 5B có <span class="text-emerald-750 font-bold">15 bạn</span>. Tìm tỉ số phần trăm của:
                                </p>
                                <p class="font-bold text-emerald-800 pl-4">
                                    a) Số bạn lớp 5A và số bạn của đội tình nguyện.<br>
                                    b) Số bạn lớp 5B và số bạn của đội tình nguyện.
                                </p>
                                
                                <div class="bg-white p-6 rounded-[1.5rem] border border-emerald-100 space-y-4 font-bold text-slate-800">
                                    <p class="text-2xl text-center text-emerald-600 mb-2">Đáp số</p>
                                    
                                    <div class="flex flex-row items-center gap-2 flex-wrap">
                                        <span>a) Tỉ số phần trăm của lớp 5A là:</span>
                                        <input id="99-2-1" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>%</span>
                                    </div>

                                    <div class="flex flex-row items-center gap-2 flex-wrap">
                                        <span>b) Tỉ số phần trăm của lớp 5B là:</span>
                                        <input id="99-2-2" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>%</span>
                                    </div>
                                </div>

                                <!-- Hộp thoại giải chi tiết xếp chồng dọc -->
                                <div id="solution-99-2" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>a) Tỉ số phần trăm của số bạn lớp 5A và số bạn của đội tình nguyện là:</p>
                                    <p class="pl-6 font-bold text-slate-900">18 : 60 = 0,3 = 30%</p>
                                    <p>b) Tỉ số phần trăm của số bạn lớp 5B và số bạn của đội tình nguyện là:</p>
                                    <p class="pl-6 font-bold text-slate-900">15 : 60 = 0,25 = 25%</p>
                                    <p class="font-bold text-blue-700 mt-2">Đáp số: a) 30%; b) 25%.</p>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution99('2')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-99-2" onclick="window.check_99_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        <!-- Script bổ trợ toggle hiện/ẩn bài giải chi tiết cho GV -->
        <script>
            window.toggleSolution99 = (id) => {
                const el = document.getElementById('solution-99-' + id);
                if (el) {
                    el.classList.toggle('hidden');
                }
            };
        </script>
    `,

    "quizPool": [
        { "question": "Tỉ số phần trăm của 15 và 60 là:", "options": ["25%", "40%", "15%", "30%"], "answer": 0 },
        { "question": "Tỉ số phần trăm của 18 và 60 là:", "options": ["30%", "20%", "45%", "25%"], "answer": 0 },
        { "question": "Thương của hai số là 0,45. Tỉ số phần trăm của hai số đó là:", "options": ["45%", "4,5%", "0,45%", "450%"], "answer": 0 },
        { "question": "Thương của hai số là 0,075. Tỉ số phần trăm của hai số đó là:", "options": ["7,5%", "75%", "0,75%", "0,075%"], "answer": 0 },
        { "question": "Một lớp học có 40 học sinh, trong đó có 24 học sinh nữ. Tỉ số phần trăm của số học sinh nữ là:", "options": ["60%", "40%", "24%", "50%"], "answer": 0 },
        { "question": "Một lớp học có 40 học sinh, trong đó có 24 học sinh nữ. Tỉ số phần trăm của số học sinh nam là:", "options": ["40%", "60%", "16%", "50%"], "answer": 0 },
        { "question": "Trong 200 kg nước biển có 7 kg muối. Tỉ số phần trăm của muối là:", "options": ["3,5%", "7%", "14%", "1,75%"], "answer": 0 },
        { "question": "Trong 400 g dung dịch muối có 20 g muối. Tỉ số phần trăm của muối là:", "options": ["5%", "10%", "2%", "4%"], "answer": 0 },
        { "question": "Thương của 3 và 4 viết dưới dạng tỉ số phần trăm là:", "options": ["75%", "34%", "43%", "25%"], "answer": 0 },
        { "question": "Thương của 1 và 2 viết dưới dạng tỉ số phần trăm là:", "options": ["50%", "12%", "20%", "25%"], "answer": 0 },
        { "question": "Tìm tỉ số phần trăm của 90 và 300:", "options": ["30%", "40%", "50%", "33%"], "answer": 0 },
        { "question": "Tìm tỉ số phần trăm của 60 và 400:", "options": ["15%", "25%", "20%", "30%"], "answer": 0 },
        { "question": "Tỉ số phần trăm của 3 và 5 là:", "options": ["60%", "35%", "53%", "30%"], "answer": 0 },
        { "question": "Tỉ số phần trăm của 1 và 8 là:", "options": ["12,5%", "18%", "80%", "8%"], "answer": 0 },
        { "question": "Một vườn cây có 100 cây ăn quả, gồm 65 cây cam. Tỉ số phần trăm của số cây cam là:", "options": ["65%", "35%", "100%", "50%"], "answer": 0 }
    ]
};
