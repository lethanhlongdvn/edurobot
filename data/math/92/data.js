// ===================================================================
// Tiết 92 - Bài 36: Tỉ số. Tỉ số phần trăm (tiết 2)
// DATA: Nội dung ôn tập và luyện tập SGK trang 7-8 (Sửa đường dẫn ảnh Bài 4 thành )
// ===================================================================

export const lesson92Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
                    
                    <!-- Slide 1: KHỞI ĐỘNG - Nhắc lại kiến thức về Tỉ số -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] border-2 border-blue-50 shadow-xl bg-white/80 backdrop-blur-xl">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">⚡</div>
                                <h3 class="text-slate-800 uppercase italic text-xl font-black">Ôn tập: Tỉ số</h3>
                            </div>
                            <div class="bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-6">
                                <p class="text-2xl md:text-3xl font-bold text-slate-700 leading-relaxed">
                                    Tỉ số của hai số <span class="text-blue-700 font-bold">a</span> và <span class="text-emerald-700 font-bold">b</span> (b khác 0) là kết quả của phép chia số a cho số b.
                                </p>
                                <div class="bg-white p-8 rounded-[2rem] shadow-inner border-2 border-blue-100 text-center">
                                    <p class="text-3xl md:text-4xl font-black text-slate-800">
                                        Kí hiệu: <span class="text-blue-700">a : b</span> hay 
                                        <span class="inline-flex flex-col items-center align-middle mx-2">
                                            <span class="border-b-2 border-slate-800 px-3 font-black">a</span>
                                            <span class="font-black">b</span>
                                        </span>
                                    </p>
                                </div>
                                <div class="p-6 bg-yellow-50 border-2 border-yellow-200 rounded-2xl">
                                    <p class="text-xl md:text-2xl font-bold text-yellow-800">
                                        📌 Ví dụ: Tỉ số giữa số bạn nam (15 bạn) và số bạn nữ (20 bạn) là 15 : 20 hay 15/20.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: KHỞI ĐỘNG - Tỉ số phần trăm -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] border-2 border-emerald-50 shadow-xl bg-white/80 backdrop-blur-xl">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">📈</div>
                                <h3 class="text-slate-800 uppercase italic text-xl font-black">Ôn tập: Tỉ số phần trăm</h3>
                            </div>
                            <div class="bg-emerald-50 p-8 rounded-[2.5rem] border-2 border-emerald-100 space-y-6">
                                <p class="text-2xl md:text-3xl font-bold text-slate-700 leading-relaxed">
                                    Tỉ số phần trăm là tỉ số có mẫu số bằng <span class="text-emerald-700 font-black">100</span>, thường được viết dưới dạng kí hiệu <span class="text-emerald-700 font-black">%</span>.
                                </p>
                                <div class="bg-white p-8 rounded-[2rem] shadow-inner border-2 border-emerald-100 text-center">
                                    <p class="text-3xl md:text-4xl font-black text-slate-800">
                                        Ví dụ: <span class="text-emerald-700">45 : 100 = </span>
                                        <span class="inline-flex flex-col items-center align-middle mx-1">
                                            <span class="border-b-2 border-slate-800 px-2 font-black">45</span>
                                            <span>100</span>
                                        </span>
                                        <span class="text-emerald-700 font-black ml-2"> = 45%</span>
                                    </p>
                                </div>
                                <div class="p-6 bg-emerald-100/50 rounded-2xl border border-emerald-200">
                                    <p class="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed">
                                        📖 Đọc là: <span class="text-emerald-800 font-black">Bốn mươi lăm phần trăm</span>.
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
                    
                    <!-- Slide 1: Bài 1 - Chọn câu trả lời đúng -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson92_b1" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide">Bài 1. Chọn câu trả lời đúng</h3>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-3">
                                <p class="font-bold text-slate-800">Trong một buổi tổng vệ sinh của trường:</p>
                                <ul class="list-disc list-inside space-y-1 font-semibold pl-2">
                                    <li>Lớp <span class="text-blue-700">5A</span> có <span class="text-blue-700 font-extrabold">20 bạn</span> tham gia nhặt rác.</li>
                                    <li>Lớp <span class="text-emerald-700">5B</span> có <span class="text-emerald-700 font-extrabold">24 bạn</span> tham gia quét dọn sân trường.</li>
                                    <li>Lớp <span class="text-amber-700">5C</span> có <span class="text-amber-700 font-extrabold">17 bạn</span> tham gia trồng cây.</li>
                                </ul>
                            </div>

                            <div class="space-y-6">
                                <p class="text-[11px] md:text-xs font-normal text-slate-400 italic text-center whitespace-nowrap">
                                    (Bấm chọn đáp án trực tiếp trên hình)
                                </p>
                                
                                <div class="relative mx-auto border-4 border-slate-200 rounded-[2rem] bg-white overflow-hidden shadow-lg select-none max-w-[720px] w-full">
                                    <img src="./assets/images/toan/toan_tap_2/92/1.png" alt="Bài 1" class="w-full h-auto block z-0">

                                    <button id="btn-92-1-a" onclick="window.select_92_1('A')" class="btn-92-1 absolute cursor-pointer border-4 border-transparent rounded-2xl z-20 transition-all" style="top: 40%; left: 5%; width: 40%; height: 16%; outline: none;"></button>
                                    <button id="btn-92-1-b" onclick="window.select_92_1('B')" class="btn-92-1 absolute cursor-pointer border-4 border-transparent rounded-2xl z-20 transition-all" style="top: 40%; left: 60%; width: 36%; height: 16%; outline: none;"></button>
                                    <button id="btn-92-1-c" onclick="window.select_92_1('C')" class="btn-92-1 absolute cursor-pointer border-4 border-transparent rounded-2xl z-20 transition-all" style="top: 73%; left: 5%; width: 40%; height: 16%; outline: none;"></button>
                                    <button id="btn-92-1-d" onclick="window.select_92_1('D')" class="btn-92-1 absolute cursor-pointer border-4 border-transparent rounded-2xl z-20 transition-all" style="top: 73%; left: 60%; width: 36%; height: 16%; outline: none;"></button>
                                </div>
                            </div>

                            <div class="flex justify-end mt-12">
                                <button id="btn-check-92-1" onclick="window.check_92_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2a - Viết tỉ số thành tỉ số phần trăm -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson92_b2a" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500">
                            
                            <div class="flex items-center gap-4 mb-8">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2a</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase tracking-wide">Bài 2a. Viết tỉ số thành tỉ số phần trăm</h3>
                            </div>

                            <div class="space-y-8">
                                <div class="bg-emerald-50/50 p-6 md:p-8 rounded-[2.5rem] border-2 border-emerald-100 shadow-sm space-y-6">
                                    <div class="p-4 bg-slate-50 border border-slate-200 rounded-3xl text-xl md:text-2xl font-bold text-slate-600">
                                        Mẫu: <span class="inline-flex flex-col items-center align-middle mx-1"><span class="border-b border-slate-800 px-2 font-black">9</span><span>25</span></span> = <span class="inline-flex flex-col items-center align-middle mx-1"><span class="border-b border-slate-800 px-2 font-black">36</span><span>100</span></span> = 36%
                                    </div>

                                    <div class="space-y-6 text-xl md:text-2xl font-bold text-slate-700">
                                        <!-- Phép tính 1 -->
                                        <div class="flex flex-row items-center gap-4 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span class="inline-flex flex-col items-center align-middle"><span class="border-b border-slate-800 px-2">50</span><span>200</span></span>
                                            <span>=</span>
                                            <div class="inline-flex flex-col items-center bg-white border-2 border-emerald-300 rounded-xl p-0.5 shadow-sm focus-within:border-emerald-600 transition-colors">
                                                <input id="92-2-a1-n" type="text" class="w-12 h-8 text-center text-lg font-black border-none bg-transparent outline-none focus:outline-none focus:ring-0" placeholder="?" style="padding: 0px !important; border: none !important; box-shadow: none !important; outline: none !important; text-align: center; line-height: 32px !important;">
                                                <div class="w-12 h-[2px] bg-slate-800"></div>
                                                <span class="w-12 text-center text-lg leading-8">100</span>
                                            </div>
                                            <span>=</span>
                                            <input id="92-2-a1-r" type="text" class="w-16 h-10 text-center text-lg font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white shadow-sm" placeholder="?" style="padding: 0px !important; font-size: 1.1rem !important; line-height: 38px !important; height: 38px !important;">
                                            <span>%</span>
                                        </div>

                                        <div class="h-[1px] bg-emerald-100"></div>

                                        <!-- Phép tính 2 -->
                                        <div class="flex flex-row items-center gap-4 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span class="inline-flex flex-col items-center align-middle"><span class="border-b border-slate-800 px-2">75</span><span>300</span></span>
                                            <span>=</span>
                                            <div class="inline-flex flex-col items-center bg-white border-2 border-emerald-300 rounded-xl p-0.5 shadow-sm focus-within:border-emerald-600 transition-colors">
                                                <input id="92-2-a2-n" type="text" class="w-12 h-8 text-center text-lg font-black border-none bg-transparent outline-none focus:outline-none focus:ring-0" placeholder="?" style="padding: 0px !important; border: none !important; box-shadow: none !important; outline: none !important; text-align: center; line-height: 32px !important;">
                                                <div class="w-12 h-[2px] bg-slate-800"></div>
                                                <span class="w-12 text-center text-lg leading-8">100</span>
                                            </div>
                                            <span>=</span>
                                            <input id="92-2-a2-r" type="text" class="w-16 h-10 text-center text-lg font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white shadow-sm" placeholder="?" style="padding: 0px !important; font-size: 1.1rem !important; line-height: 38px !important; height: 38px !important;">
                                            <span>%</span>
                                        </div>

                                        <div class="h-[1px] bg-emerald-100"></div>

                                        <!-- Phép tính 3 -->
                                        <div class="flex flex-row items-center gap-4 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span class="inline-flex flex-col items-center align-middle"><span class="border-b border-slate-800 px-2">1</span><span>4</span></span>
                                            <span>=</span>
                                            <div class="inline-flex flex-col items-center bg-white border-2 border-emerald-300 rounded-xl p-0.5 shadow-sm focus-within:border-emerald-600 transition-colors">
                                                <input id="92-2-a3-n" type="text" class="w-12 h-8 text-center text-lg font-black border-none bg-transparent outline-none focus:outline-none focus:ring-0" placeholder="?" style="padding: 0px !important; border: none !important; box-shadow: none !important; outline: none !important; text-align: center; line-height: 32px !important;">
                                                <div class="w-12 h-[2px] bg-slate-800"></div>
                                                <span class="w-12 text-center text-lg leading-8">100</span>
                                            </div>
                                            <span>=</span>
                                            <input id="92-2-a3-r" type="text" class="w-16 h-10 text-center text-lg font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white shadow-sm" placeholder="?" style="padding: 0px !important; font-size: 1.1rem !important; line-height: 38px !important; height: 38px !important;">
                                            <span>%</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Khu vực hiện bài giải xếp chồng dọc -->
                                <div id="solution-92-2a" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>• 50/200 = (50 : 2)/(200 : 2) = 25/100 = 25%</p>
                                    <p>• 75/300 = (75 : 3)/(300 : 3) = 25/100 = 25%</p>
                                    <p>• 1/4 = (1 x 25)/(4 x 25) = 25/100 = 25%</p>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm: Hiện bài giải bên trái, E bên phải -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution92('2a')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-92-2a" onclick="window.check_92_2_a()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 2b - Viết phép chia dưới dạng tỉ số phần trăm -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson92_b2b" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500">
                            
                            <div class="flex items-center gap-4 mb-8">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2b</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase tracking-wide">Bài 2b. Viết phép chia dưới dạng tỉ số phần trăm</h3>
                            </div>

                            <div class="space-y-8">
                                <div class="bg-emerald-50/50 p-6 md:p-8 rounded-[2.5rem] border-2 border-emerald-100 shadow-sm space-y-6">
                                    <div class="p-4 bg-slate-50 border border-slate-200 rounded-3xl text-xl md:text-2xl font-bold text-slate-600">
                                        Mẫu: 37,5 : 100 = 37,5%
                                    </div>

                                    <div class="space-y-6 text-xl md:text-2xl font-bold text-slate-700">
                                        <!-- Phép tính 1 -->
                                        <div class="flex flex-row items-center justify-start flex-nowrap whitespace-nowrap overflow-x-auto gap-4">
                                            <span>5,2 : 100 =</span>
                                            <input id="92-2-b1" type="text" class="w-32 h-10 text-center text-lg font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white shadow-sm" placeholder="?" style="padding: 0px !important; font-size: 1.1rem !important; line-height: 38px !important; height: 38px !important;">
                                            <span>%</span>
                                        </div>

                                        <div class="h-[1px] bg-emerald-100"></div>

                                        <!-- Phép tính 2 -->
                                        <div class="flex flex-row items-center justify-start flex-nowrap whitespace-nowrap overflow-x-auto gap-4">
                                            <span>110,6 : 100 =</span>
                                            <input id="92-2-b2" type="text" class="w-32 h-10 text-center text-lg font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white shadow-sm" placeholder="?" style="padding: 0px !important; font-size: 1.1rem !important; line-height: 38px !important; height: 38px !important;">
                                            <span>%</span>
                                        </div>

                                        <div class="h-[1px] bg-emerald-100"></div>

                                        <!-- Phép tính 3 -->
                                        <div class="flex flex-row items-center justify-start flex-nowrap whitespace-nowrap overflow-x-auto gap-4">
                                            <span>0,5 : 100 =</span>
                                            <input id="92-2-b3" type="text" class="w-32 h-10 text-center text-lg font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white shadow-sm" placeholder="?" style="padding: 0px !important; font-size: 1.1rem !important; line-height: 38px !important; height: 38px !important;">
                                            <span>%</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Khu vực hiện bài giải xếp chồng dọc -->
                                <div id="solution-92-2b" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>• 5,2 : 100 = 5,2%</p>
                                    <p>• 110,6 : 100 = 110,6%</p>
                                    <p>• 0,5 : 100 = 0,5%</p>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm: Hiện bài giải bên trái, E bên phải -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution92('2b')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-92-2b" onclick="window.check_92_2_b()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Bài 3a - Đúng / Sai (Đ/S) năm 2022 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson92_b3a" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-orange-500">
                            
                            <div class="flex items-center gap-4 mb-6">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3a</div>
                                <h3 class="text-2xl md:text-3xl font-black text-orange-700 uppercase tracking-wide">Bài 3a. Điền Đúng (Đ) hoặc Sai (S)</h3>
                            </div>

                            <div class="p-5 bg-orange-50/50 border border-orange-150 rounded-3xl mb-6 text-lg md:text-xl text-slate-700 leading-relaxed">
                                Tỉ số giới tính khi sinh ở Hà Nội 6 tháng đầu năm 2022: <span class="font-bold text-blue-700">113 trẻ trai / 100 trẻ gái</span>.
                            </div>

                            <div class="space-y-6">
                                <p class="text-xl font-bold text-slate-800 leading-snug">
                                    a) Trong 6 tháng đầu năm 2022, tỉ số của số trẻ trai và số trẻ gái là bao nhiêu phần trăm?
                                </p>
                                
                                <div class="space-y-4">
                                    <!-- Mai nói -->
                                    <div class="bg-white p-5 rounded-2xl border-2 border-slate-150 flex items-center justify-between gap-4">
                                        <div class="text-lg md:text-2xl font-bold text-slate-700">
                                            • <span class="text-blue-600 font-extrabold">Mai nói:</span> 112,7%
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <button id="btn-92-3-a1-D" onclick="window.select_92_3('a1', 'Đ')" class="btn-92-3-a1 w-14 h-14 bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-700 font-black text-2xl rounded-2xl transition-all shadow-sm outline-none">Đ</button>
                                            <button id="btn-92-3-a1-S" onclick="window.select_92_3('a1', 'S')" class="btn-92-3-a1 w-14 h-14 bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-rose-700 font-black text-2xl rounded-2xl transition-all shadow-sm outline-none">S</button>
                                        </div>
                                    </div>
                                    <!-- Việt nói -->
                                    <div class="bg-white p-5 rounded-2xl border-2 border-slate-150 flex items-center justify-between gap-4">
                                        <div class="text-lg md:text-2xl font-bold text-slate-700">
                                            • <span class="text-emerald-600 font-extrabold">Việt nói:</span> 113%
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <button id="btn-92-3-a2-D" onclick="window.select_92_3('a2', 'Đ')" class="btn-92-3-a2 w-14 h-14 bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-700 font-black text-2xl rounded-2xl transition-all shadow-sm outline-none">Đ</button>
                                            <button id="btn-92-3-a2-S" onclick="window.select_92_3('a2', 'S')" class="btn-92-3-a2 w-14 h-14 bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-rose-700 font-black text-2xl rounded-2xl transition-all shadow-sm outline-none">S</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end mt-12">
                                <button id="btn-check-92-3a" onclick="window.check_92_3_a()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 5: Bài 3b - Đúng / Sai (Đ/S) năm 2021 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson92_b3b" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-orange-500">
                            
                            <div class="flex items-center gap-4 mb-6">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3b</div>
                                <h3 class="text-2xl md:text-3xl font-black text-orange-700 uppercase tracking-wide">Bài 3b. Điền Đúng (Đ) hoặc Sai (S)</h3>
                            </div>

                            <div class="p-5 bg-orange-50/50 border border-orange-150 rounded-3xl mb-6 text-lg md:text-xl text-slate-700 leading-relaxed">
                                Tỉ số giới tính khi sinh ở Hà Nội 6 tháng cùng kỳ năm 2021: <span class="font-bold text-emerald-700">112,7 trẻ trai / 100 trẻ gái</span>.
                            </div>

                            <div class="space-y-6">
                                <p class="text-xl font-bold text-slate-800 leading-snug">
                                    b) Trong 6 tháng cùng kỳ năm 2021, tỉ số của số trẻ trai và số trẻ gái là bao nhiêu phần trăm?
                                </p>
                                
                                <div class="space-y-4">
                                    <!-- Mai nói -->
                                    <div class="bg-white p-5 rounded-2xl border-2 border-slate-150 flex items-center justify-between gap-4">
                                        <div class="text-lg md:text-2xl font-bold text-slate-700">
                                            • <span class="text-blue-600 font-extrabold">Mai nói:</span> 112,7%
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <button id="btn-92-3-b1-D" onclick="window.select_92_3('b1', 'Đ')" class="btn-92-3-b1 w-14 h-14 bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-700 font-black text-2xl rounded-2xl transition-all shadow-sm outline-none">Đ</button>
                                            <button id="btn-92-3-b1-S" onclick="window.select_92_3('b1', 'S')" class="btn-92-3-b1 w-14 h-14 bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-rose-700 font-black text-2xl rounded-2xl transition-all shadow-sm outline-none">S</button>
                                        </div>
                                    </div>
                                    <!-- Việt nói -->
                                    <div class="bg-white p-5 rounded-2xl border-2 border-slate-150 flex items-center justify-between gap-4">
                                        <div class="text-lg md:text-2xl font-bold text-slate-700">
                                            • <span class="text-emerald-600 font-extrabold">Việt nói:</span> 113%
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <button id="btn-92-3-b2-D" onclick="window.select_92_3('b2', 'Đ')" class="btn-92-3-b2 w-14 h-14 bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-700 font-black text-2xl rounded-2xl transition-all shadow-sm outline-none">Đ</button>
                                            <button id="btn-92-3-b2-S" onclick="window.select_92_3('b2', 'S')" class="btn-92-3-b2 w-14 h-14 bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-rose-700 font-black text-2xl rounded-2xl transition-all shadow-sm outline-none">S</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end mt-12">
                                <button id="btn-check-92-3b" onclick="window.check_92_3_b()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 6: Bài 4 - Trạm kiểm tra tải trọng (gộp a và b) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson92_b4" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-amber-500">
                            
                            <div class="flex items-center gap-4 mb-6">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                                <h3 class="text-2xl md:text-3xl font-black text-amber-700 uppercase tracking-wide">Bài 4. Trạm kiểm tra tải trọng</h3>
                            </div>

                            <div class="space-y-6">
                                <p class="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed">
                                    Tại một trạm kiểm tra tải trọng xe lưu động, người ta kiểm tra <span class="text-blue-700 font-black">100 ô tô</span> thì <span class="text-emerald-700 font-black">92 ô tô</span> có tải trọng đạt chuẩn.
                                </p>

                                <div class="bg-amber-50/50 p-6 md:p-8 rounded-[2.5rem] border border-amber-100 shadow-sm space-y-6">
                                    <!-- Câu a -->
                                    <div class="flex flex-row items-center justify-start flex-nowrap whitespace-nowrap overflow-x-auto gap-4 text-xl md:text-2xl font-bold text-slate-700">
                                        <span>a) Số ô tô có tải trọng đạt chuẩn chiếm:</span>
                                        <input id="92-4-a" type="text" class="w-24 h-11 text-center text-lg font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-500 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.1rem !important; line-height: 38px !important; height: 38px !important;">
                                        <span>%</span>
                                    </div>

                                    <div class="h-[1px] bg-amber-200/55"></div>

                                    <!-- Câu b -->
                                    <div class="flex flex-row items-center justify-start flex-nowrap whitespace-nowrap overflow-x-auto gap-4 text-xl md:text-2xl font-bold text-slate-700">
                                        <span>b) Số ô tô có tải trọng không đạt chuẩn chiếm:</span>
                                        <input id="92-4-b" type="text" class="w-24 h-11 text-center text-lg font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-500 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.1rem !important; line-height: 38px !important; height: 38px !important;">
                                        <span>%</span>
                                    </div>
                                </div>

                                <!-- Khu vực hiện bài giải xếp chồng dọc -->
                                <div id="solution-92-4" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>a) Tỉ số phần trăm của số ô tô có tải trọng đạt chuẩn và tổng số ô tô được kiểm tra là:</p>
                                    <p class="font-bold text-blue-700">92 : 100 = 92% (số ô tô)</p>
                                    <p>b) Số ô tô có tải trọng không đạt chuẩn là:</p>
                                    <p>100 - 92 = 8 (ô tô)</p>
                                    <p>Tỉ số phần trăm của số ô tô không đạt chuẩn và tổng số ô tô được kiểm tra là:</p>
                                    <p class="font-bold text-amber-700">8 : 100 = 8% (số ô tô)</p>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm: Hiện bài giải bên trái, E bên phải -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution92('4')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-92-4" onclick="window.check_92_4()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        <!-- Script bổ trợ toggle hiện/ẩn bài giải chi tiết cho GV -->
        <script>
            window.toggleSolution92 = (id) => {
                const el = document.getElementById('solution-92-' + id);
                if (el) {
                    el.classList.toggle('hidden');
                }
            };
        </script>
    `,

    "quizPool": [
        { "question": "Trong lớp có 20 bạn nam, 24 bạn nữ. Tỉ số của số bạn nam và số bạn nữ là:", "options": ["20/24", "24/20", "20/44", "24/44"], "answer": 0 },
        { "question": "Tỉ số 50/200 viết thành tỉ số phần trăm là:", "options": ["25%", "50%", "100%", "20%"], "answer": 0 },
        { "question": "Tỉ số 75/300 viết thành tỉ số phần trăm là:", "options": ["25%", "75%", "50%", "30%"], "answer": 0 },
        { "question": "Tỉ số 1/4 viết thành tỉ số phần trăm là:", "options": ["25%", "14%", "40%", "10%"], "answer": 0 },
        { "question": "Tỉ số 5,2 : 100 viết thành tỉ số phần trăm là:", "options": ["5,2%", "52%", "0,52%", "520%"], "answer": 0 },
        { "question": "Tỉ số 110,6 : 100 viết thành tỉ số phần trăm là:", "options": ["110,6%", "11,06%", "1,106%", "1106%"], "answer": 0 },
        { "question": "Tỉ số 0,5 : 100 viết thành tỉ số phần trăm là:", "options": ["0,5%", "5%", "50%", "0,05%"], "answer": 0 },
        { "question": "Hà Nội 6 tháng đầu năm 2022 có tỉ số giới tính khi sinh là 113 trẻ trai/100 trẻ gái. Tỉ số phần trăm là:", "options": ["113%", "11,3%", "1,13%", "1130%"], "answer": 0 },
        { "question": "Cùng kỳ năm 2021 có tỉ số giới tính khi sinh là 112,7 trẻ trai/100 trẻ gái. Tỉ số phần trăm là:", "options": ["112,7%", "11,27%", "1,127%", "1127%"], "answer": 0 },
        { "question": "Kiểm tra 100 ô tô có 92 ô tô đạt chuẩn. Số ô tô đạt chuẩn chiếm bao nhiêu phần trăm?", "options": ["92%", "8%", "9,2%", "0,92%"], "answer": 0 },
        { "question": "Kiểm tra 100 ô tô có 92 ô tô đạt chuẩn. Số ô tô không đạt chuẩn chiếm bao nhiêu phần trăm?", "options": ["8%", "92%", "0,8%", "80%"], "answer": 0 },
        { "question": "Tỉ số của a và b (b khác 0) là:", "options": ["a : b", "b : a", "a × b", "a - b"], "answer": 0 },
        { "question": "Tỉ số phần trăm của 13 và 100 là:", "options": ["13%", "1,3%", "130%", "0,13%"], "answer": 0 },
        { "question": "Tỉ số 2/5 viết thành tỉ số phần trăm là:", "options": ["40%", "20%", "50%", "25%"], "answer": 0 },
        { "question": "Tỉ số 3/10 viết thành tỉ số phần trăm là:", "options": ["30%", "3%", "300%", "0,3%"], "answer": 0 }
    ]
};
