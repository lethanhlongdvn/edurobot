// ===================================================================
// Tiết 103 - Bài 42: Máy tính cầm tay (tiết 1)
// DATA: Nội dung slide học tập, luyện tập và quiz pool
// ===================================================================

export const lesson103Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Slide 1: Khám phá - Máy tính cầm tay -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-2 border-blue-50 shadow-xl bg-white/90 backdrop-blur-xl space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">🔍</div>
                                <h3 class="text-blue-700 uppercase italic text-xl font-black">Khám phá: Máy tính cầm tay</h3>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-center gap-6 my-4">
                                <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage103('./assets/images/toan/toan_tap_2/103/kp1.png', 'Khám phá Máy tính cầm tay')" src="./assets/images/toan/toan_tap_2/103/kp1.png" alt="Khám phá Máy tính cầm tay" class="w-full max-w-[500px] h-auto object-contain rounded-3xl border-4 border-blue-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage103('./assets/images/toan/toan_tap_2/103/kp1.png', 'Khám phá Máy tính cầm tay')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>
                                <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage103('./assets/images/toan/toan_tap_2/103/kp2.png', 'Cách dùng máy tính cầm tay')" src="./assets/images/toan/toan_tap_2/103/kp2.png" alt="Cách dùng máy tính cầm tay" class="w-full max-w-[450px] h-auto object-contain rounded-3xl border-4 border-blue-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage103('./assets/images/toan/toan_tap_2/103/kp2.png', 'Cách dùng máy tính cầm tay')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>
                            </div>

                            <div class="bg-blue-50/90 p-6 md:p-8 rounded-[2rem] border-2 border-blue-100 space-y-5 text-lg md:text-xl text-slate-700 leading-relaxed">
                                <p class="font-extrabold text-blue-800 text-xl md:text-2xl">a) Các phím cơ bản trên máy tính cầm tay:</p>
                                <ul class="space-y-3 font-bold text-slate-800 pl-4 text-lg md:text-xl">
                                    <li class="flex items-center gap-2 flex-wrap">
                                        – Phím <span class="px-3 py-1 bg-red-600 text-white font-black rounded-lg text-base">ON/C</span> dùng để <strong>bật máy</strong>.
                                    </li>
                                    <li class="flex items-center gap-2 flex-wrap">
                                        – Phím <span class="px-3 py-1 bg-slate-700 text-white font-black rounded-lg text-base">OFF</span> dùng để <strong>tắt máy</strong>.
                                    </li>
                                    <li class="flex items-center gap-2 flex-wrap">
                                        – Các phím số từ <span class="px-3 py-1 bg-slate-700 text-white font-black rounded-lg text-base">0</span> đến <span class="px-3 py-1 bg-slate-700 text-white font-black rounded-lg text-base">9</span> để <strong>nhập số</strong>.
                                    </li>
                                    <li class="flex items-center gap-2 flex-wrap">
                                        – Các phím phép tính cộng, trừ, nhân, chia: 
                                        <span class="px-3 py-1 bg-slate-700 text-white font-black rounded-lg text-base">+</span>, 
                                        <span class="px-3 py-1 bg-slate-700 text-white font-black rounded-lg text-base">–</span>, 
                                        <span class="px-3 py-1 bg-slate-700 text-white font-black rounded-lg text-base">&times;</span>, 
                                        <span class="px-3 py-1 bg-slate-700 text-white font-black rounded-lg text-base">&divide;</span>.
                                    </li>
                                    <li class="flex items-center gap-2 flex-wrap">
                                        – Phím <span class="px-3 py-1 bg-slate-700 text-white font-black rounded-lg text-base">=</span> để <strong>hiện kết quả phép tính</strong> trên màn hình.
                                    </li>
                                    <li class="flex items-center gap-2 flex-wrap">
                                        – Phím <span class="px-3 py-1 bg-red-500 text-white font-black rounded-lg text-base">CE</span> để <strong>xoá số vừa nhập</strong> nếu nhập sai.
                                    </li>
                                    <li class="flex items-center gap-2 flex-wrap">
                                        – Phím <span class="px-3 py-1 bg-slate-700 text-white font-black rounded-lg text-base">%</span> để <strong>biểu diễn tỉ số phần trăm</strong>.
                                    </li>
                                </ul>

                                <div class="bg-amber-50 p-6 rounded-2xl border-2 border-amber-200 text-slate-800 font-bold space-y-3 mt-4">
                                    <p class="text-xl md:text-2xl font-black text-amber-800">b) Thực hiện phép tính bằng máy tính cầm tay (Ví dụ: 128 + 136):</p>
                                    <p class="text-lg md:text-xl">• Ấn phím <span class="px-2 py-0.5 bg-red-600 text-white font-black rounded">ON/C</span> để bật máy.</p>
                                    <p class="text-lg md:text-xl">• Lần lượt bấm các phím: 
                                        <span class="px-2 py-1 bg-slate-700 text-white font-black rounded">1</span>
                                        <span class="px-2 py-1 bg-slate-700 text-white font-black rounded">2</span>
                                        <span class="px-2 py-1 bg-slate-700 text-white font-black rounded">8</span>
                                        <span class="px-2 py-1 bg-slate-700 text-white font-black rounded">+</span>
                                        <span class="px-2 py-1 bg-slate-700 text-white font-black rounded">1</span>
                                        <span class="px-2 py-1 bg-slate-700 text-white font-black rounded">3</span>
                                        <span class="px-2 py-1 bg-slate-700 text-white font-black rounded">6</span>
                                        <span class="px-2 py-1 bg-slate-700 text-white font-black rounded">=</span>
                                    </p>
                                    <p class="text-lg md:text-xl text-emerald-700 font-extrabold">• Trên màn hình máy tính xuất hiện kết quả <strong>264</strong>.</p>
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

                    <!-- Slide 1: Bài 1 - Ghép phép tính với cách bấm -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 1. Chọn cách bấm máy tính phù hợp với mỗi phép tính</h3>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="space-y-6 font-bold text-slate-800">
                                    <!-- Phép tính 1 -->
                                    <div class="flex items-center gap-4 flex-wrap bg-white p-4 rounded-2xl border border-blue-200">
                                        <span class="px-6 py-2 bg-lime-500 text-white font-black rounded-xl text-xl md:text-2xl min-w-[160px] text-center shadow-sm">174 – 108</span>
                                        <span class="text-lg md:text-xl font-bold">Nối với cách bấm:</span>
                                        <select id="103-1-1" class="h-12 px-4 font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white text-base md:text-lg">
                                            <option value="">-- Chọn cách bấm --</option>
                                            <option value="A">5 1 &times; 2 9 =</option>
                                            <option value="B">1 7 4 – 1 0 8 =</option>
                                            <option value="C">1 0 4 5 &divide; 2 5 =</option>
                                        </select>
                                    </div>

                                    <!-- Phép tính 2 -->
                                    <div class="flex items-center gap-4 flex-wrap bg-white p-4 rounded-2xl border border-blue-200">
                                        <span class="px-6 py-2 bg-cyan-500 text-white font-black rounded-xl text-xl md:text-2xl min-w-[160px] text-center shadow-sm">51 &times; 29</span>
                                        <span class="text-lg md:text-xl font-bold">Nối với cách bấm:</span>
                                        <select id="103-1-2" class="h-12 px-4 font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white text-base md:text-lg">
                                            <option value="">-- Chọn cách bấm --</option>
                                            <option value="A">5 1 &times; 2 9 =</option>
                                            <option value="B">1 7 4 – 1 0 8 =</option>
                                            <option value="C">1 0 4 5 &divide; 2 5 =</option>
                                        </select>
                                    </div>

                                    <!-- Phép tính 3 -->
                                    <div class="flex items-center gap-4 flex-wrap bg-white p-4 rounded-2xl border border-blue-200">
                                        <span class="px-6 py-2 bg-amber-500 text-white font-black rounded-xl text-xl md:text-2xl min-w-[160px] text-center shadow-sm">1 045 : 25</span>
                                        <span class="text-lg md:text-xl font-bold">Nối với cách bấm:</span>
                                        <select id="103-1-3" class="h-12 px-4 font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white text-base md:text-lg">
                                            <option value="">-- Chọn cách bấm --</option>
                                            <option value="A">5 1 &times; 2 9 =</option>
                                            <option value="B">1 7 4 – 1 0 8 =</option>
                                            <option value="C">1 0 4 5 &divide; 2 5 =</option>
                                        </select>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-103-1" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-3 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p class="font-bold text-blue-700">• 174 – 108 bấm lần lượt: 1 7 4 – 1 0 8 =</p>
                                    <p class="font-bold text-blue-700">• 51 &times; 29 bấm lần lượt: 5 1 &times; 2 9 =</p>
                                    <p class="font-bold text-blue-700">• 1 045 : 25 bấm lần lượt: 1 0 4 5 &divide; 2 5 =</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution103('1')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-103-1" onclick="window.check_103_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 - Thực hiện phép tính và kiểm tra -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase">Bài 2. Thực hiện các phép tính rồi dùng máy tính cầm tay kiểm tra kết quả</h3>
                            </div>

                            <div class="p-6 bg-emerald-50/80 border-2 border-emerald-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-bold text-slate-800">
                                    <div class="bg-white p-4 rounded-2xl border border-emerald-200 flex items-center gap-2 flex-wrap">
                                        <span class="text-lg md:text-2xl">a) 1 975 + 2 025 =</span>
                                        <input id="103-2-1" type="text" class="w-36 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                    </div>

                                    <div class="bg-white p-4 rounded-2xl border border-emerald-200 flex items-center gap-2 flex-wrap">
                                        <span class="text-lg md:text-2xl">b) 3 871 – 189 =</span>
                                        <input id="103-2-2" type="text" class="w-36 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                    </div>

                                    <div class="bg-white p-4 rounded-2xl border border-emerald-200 flex items-center gap-2 flex-wrap">
                                        <span class="text-lg md:text-2xl">c) 475 &times; 81 =</span>
                                        <input id="103-2-3" type="text" class="w-36 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                    </div>

                                    <div class="bg-white p-4 rounded-2xl border border-emerald-200 flex items-center gap-2 flex-wrap">
                                        <span class="text-lg md:text-2xl">d) 51 : 6 =</span>
                                        <input id="103-2-4" type="text" class="w-36 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-103-2" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p class="font-bold text-emerald-700">a) 1 975 + 2 025 = 4 000</p>
                                    <p class="font-bold text-emerald-700">b) 3 871 – 189 = 3 682</p>
                                    <p class="font-bold text-emerald-700">c) 475 &times; 81 = 38 475</p>
                                    <p class="font-bold text-emerald-700">d) 51 : 6 = 8,5</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution103('2')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-103-2" onclick="window.check_103_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 - Thứ tự phép tính Rô-bốt -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 3. Thực hành tính giá trị biểu thức</h3>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="space-y-4 font-bold text-slate-800">
                                    <p class="text-xl md:text-2xl">
                                        a) Rô-bốt tính giá trị của biểu thức 5 + 2 &times; 3 bằng cách bấm máy tính cầm tay lần lượt các phím:
                                    </p>
                                    <div class="flex justify-center items-center gap-2 flex-wrap py-2">
                                        <span class="px-3 py-1 bg-slate-700 text-white font-black rounded-lg">5</span>
                                        <span class="px-3 py-1 bg-slate-700 text-white font-black rounded-lg">+</span>
                                        <span class="px-3 py-1 bg-slate-700 text-white font-black rounded-lg">2</span>
                                        <span class="px-3 py-1 bg-slate-700 text-white font-black rounded-lg">&times;</span>
                                        <span class="px-3 py-1 bg-slate-700 text-white font-black rounded-lg">3</span>
                                        <span class="px-3 py-1 bg-slate-700 text-white font-black rounded-lg">=</span>
                                    </div>

                                    <div class="flex items-center gap-2 flex-wrap pt-2">
                                        <span class="text-lg md:text-2xl">Theo em màn hình máy tính hiện kết quả là bao nhiêu?</span>
                                        <input id="103-3-1" type="text" class="w-32 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                    </div>

                                    <div class="border-t border-blue-200 pt-4 mt-4 space-y-3">
                                        <p class="text-xl md:text-2xl text-blue-900">
                                            b) Em hãy tính giá trị của biểu thức 5 + 2 &times; 3 rồi so sánh với kết quả mà Rô-bốt nhận được.
                                        </p>
                                        <div class="flex justify-center my-3">
                                            <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage103('./assets/images/toan/toan_tap_2/103/3b.png', 'Rô-bốt và máy tính cầm tay')" src="./assets/images/toan/toan_tap_2/103/3b.png" alt="Rô-bốt và máy tính cầm tay" class="w-full max-w-[500px] h-auto object-contain rounded-2xl border-4 border-blue-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage103('./assets/images/toan/toan_tap_2/103/3b.png', 'Rô-bốt và máy tính cầm tay')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>
                                        </div>
                                        <p class="text-lg md:text-xl font-normal text-slate-700 bg-white p-4 rounded-xl border border-blue-100 italic">
                                            "Bạn nhập phép tính nào trước thì tớ thực hiện phép tính đó trước! Hãy sử dụng tớ cẩn thận nhé!"
                                        </p>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-103-3" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p class="font-bold text-blue-700">a) Khi bấm 5 + 2 &times; 3 =, máy tính thực hiện từ trái sang phải: (5 + 2) &times; 3 = 21.</p>
                                    <p class="font-bold text-blue-700">b) Theo quy tắc toán học, biểu thức 5 + 2 &times; 3 thực hiện nhân trước cộng sau: 5 + 6 = 11.</p>
                                    <p class="font-bold text-blue-700">So sánh: Kết quả máy tính bấm liên tiếp (21) khác với kết quả tính đúng theo thứ tự phép tính toán học (11).</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution103('3')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-103-3" onclick="window.check_103_3()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <script>
            window.toggleSolution103 = (id) => {
                const el = document.getElementById('solution-103-' + id);
                if (el) el.classList.toggle('hidden');
            };
        </script>
    `,

    "quizPool": [
        { "question": "Phím ON/C trên máy tính cầm tay có chức năng gì?", "options": ["Bật máy", "Tắt máy", "Xóa toàn bộ", "Hiện kết quả"], "answer": 0 },
        { "question": "Phím OFF trên máy tính cầm tay dùng để làm gì?", "options": ["Tắt máy", "Bật máy", "Xóa số vừa nhập", "Tính phần trăm"], "answer": 0 },
        { "question": "Khi muốn xóa số vừa nhập sai trên máy tính cầm tay, em nhấn phím nào?", "options": ["CE", "OFF", "ON/C", "="], "answer": 0 },
        { "question": "Để hiện kết quả của phép tính trên màn hình máy tính cầm tay, em ấn phím nào?", "options": ["=", "%", "ON/C", "OFF"], "answer": 0 },
        { "question": "Đâu là cách bấm máy tính đúng cho phép tính 174 – 108?", "options": ["1 7 4 – 1 0 8 =", "1 7 4 + 1 0 8 =", "1 7 4 × 1 0 8 =", "1 0 8 – 1 7 4 ="], "answer": 0 },
        { "question": "Đâu là cách bấm máy tính đúng cho phép tính 51 × 29?", "options": ["5 1 × 2 9 =", "5 1 + 2 9 =", "5 1 : 2 9 =", "2 9 × 5 1"], "answer": 0 },
        { "question": "Đâu là cách bấm máy tính đúng cho phép tính 1 045 : 25?", "options": ["1 0 4 5 ÷ 2 5 =", "1 0 4 5 × 2 5 =", "1 0 4 5 – 2 5 =", "2 5 ÷ 1 0 4 5 ="], "answer": 0 },
        { "question": "Kết quả của phép tính 1 975 + 2 025 là bao nhiêu?", "options": ["4 000", "3 900", "4 100", "4 050"], "answer": 0 },
        { "question": "Kết quả của phép tính 3 871 – 189 là bao nhiêu?", "options": ["3 682", "3 692", "3 782", "3 672"], "answer": 0 },
        { "question": "Kết quả của phép tính 475 × 81 là bao nhiêu?", "options": ["38 475", "38 375", "37 475", "38 575"], "answer": 0 },
        { "question": "Kết quả của phép tính 51 : 6 là bao nhiêu?", "options": ["8,5", "8,1", "8,6", "7,5"], "answer": 0 },
        { "question": "Khi bấm liên tiếp 5 + 2 × 3 = trên máy tính loại đơn giản không có nhân chia trước, màn hình hiện kết quả là bao nhiêu?", "options": ["21", "11", "17", "10"], "answer": 0 },
        { "question": "Giá trị tính đúng theo quy tắc toán học của biểu thức 5 + 2 × 3 là bao nhiêu?", "options": ["11", "21", "17", "10"], "answer": 0 },
        { "question": "Phím % trên máy tính cầm tay biểu diễn đại lượng nào?", "options": ["Tỉ số phần trăm", "Số thập phân", "Phân số", "Hỗn số"], "answer": 0 },
        { "question": "Để bấm số 264 trên máy tính cầm tay, em nhấn lần lượt các phím nào?", "options": ["2, 6, 4", "2, 4, 6", "6, 2, 4", "4, 6, 2"], "answer": 0 }
    ]
};
