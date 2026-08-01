// ===================================================================
// Tiết 97 - Bài 39: Tìm hai số khi biết hiệu và tỉ số (tiết 1)
// DATA: Nội dung khám phá, bài tập tự luận và quiz pool
// ===================================================================

export const lesson97Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
                    
                    <!-- Slide 1: Khám phá - Tìm hai số khi biết hiệu và tỉ số của hai số đó -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] border-2 border-blue-50 shadow-xl bg-white/80 backdrop-blur-xl space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">🔍</div>
                                <h3 class="text-slate-800 uppercase italic text-xl font-black">Khám phá: Bài toán Hiệu - Tỉ</h3>
                            </div>

                            <div class="bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-6">
                                <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage97('./assets/images/toan/toan_tap_2/97/kp.png', 'Tìm hai số khi biết hiệu và tỉ số')" src="./assets/images/toan/toan_tap_2/97/kp.png" alt="Tìm hai số khi biết hiệu và tỉ số" class="w-full h-auto max-h-[300px] object-contain rounded-2xl border-4 border-blue-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage97('./assets/images/toan/toan_tap_2/97/kp.png', 'Tìm hai số khi biết hiệu và tỉ số')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                                <div class="bg-white p-6 rounded-[2rem] border border-blue-150 text-slate-750 space-y-4">
                                    <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed">
                                        Bài toán: Mẹ thấy số hạt dẻ của em bằng <span class="text-blue-700 font-extrabold">3/5</span> số hạt dẻ của chị. Em chỉ nhặt ít hơn chị <span class="text-blue-700 font-extrabold">6 hạt dẻ</span>. Hỏi mỗi người nhặt được bao nhiêu hạt dẻ?
                                    </p>
                                    
                                    <div class="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] space-y-4">
                                        <p class="text-2xl font-black text-blue-700 text-center">Bài giải mẫu</p>
                                        
                                         <!-- Sơ đồ SVG biểu thị hiệu số hạt dẻ -->
                                         <div class="bg-slate-50 p-6 rounded-2xl border border-slate-150 flex justify-center">
                                             <svg viewBox="0 0 620 120" class="w-full max-w-[680px] md:max-w-[780px] font-bold text-slate-800">
                                                 <!-- Em -->
                                                 <text x="10" y="32" class="fill-slate-800 font-bold" font-size="20">Em</text>
                                                 <line x1="120" y1="25" x2="240" y2="25" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="120" y1="15" x2="120" y2="35" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="160" y1="15" x2="160" y2="35" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="200" y1="15" x2="200" y2="35" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="240" y1="15" x2="240" y2="35" stroke="#1e293b" stroke-width="3"/>
                                                 
                                                 <!-- Chị -->
                                                 <text x="10" y="72" class="fill-slate-800 font-bold" font-size="20">Chị</text>
                                                 <line x1="120" y1="65" x2="320" y2="65" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="120" y1="55" x2="120" y2="75" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="160" y1="55" x2="160" y2="75" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="200" y1="55" x2="200" y2="75" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="240" y1="55" x2="240" y2="75" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="280" y1="55" x2="280" y2="75" stroke="#1e293b" stroke-width="3"/>
                                                 <line x1="320" y1="55" x2="320" y2="75" stroke="#1e293b" stroke-width="3"/>

                                                 <!-- Đường gióng nét đứt -->
                                                 <line x1="240" y1="25" x2="240" y2="65" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4"/>

                                                 <!-- Đoạn chênh lệch -->
                                                 <path d="M 240 85 L 250 85 L 250 95 L 310 95 L 310 85 L 320 85" fill="none" stroke="#ef4444" stroke-width="2.5"/>
                                                 <text x="250" y="112" class="fill-red-600 font-extrabold" font-size="18">Hiệu: 6 hạt</text>
                                             </svg>
                                         </div>

                                        <div class="text-xl md:text-2xl font-bold text-slate-700 space-y-3 pt-4 border-t border-slate-200">
                                            <p>Hiệu số phần bằng nhau là:</p>
                                            <p class="pl-6 font-bold text-slate-900">5 - 3 = 2 (phần)</p>
                                            <p>Giá trị một phần là:</p>
                                            <p class="pl-6 font-bold text-slate-900">6 : 2 = 3 (hạt dẻ)</p>
                                            <p>Số hạt dẻ em nhặt được là:</p>
                                            <p class="pl-6 font-bold text-slate-900">3 × 3 = 9 (hạt dẻ)</p>
                                            <p>Số hạt dẻ chị nhặt được là:</p>
                                            <p class="pl-6 font-bold text-slate-900">3 × 5 = 15 (hạt dẻ) (hoặc lấy 9 + 6 = 15 hạt dẻ)</p>
                                            <p class="font-extrabold text-blue-700 mt-2">Đáp số: Em: 9 hạt dẻ; Chị: 15 hạt dẻ.</p>
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
                    
                    <!-- Slide 1: Bài 1 - Bảng Số? -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson97_b1" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide">Bài 1. Tìm hai số biết hiệu và tỉ số</h3>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-6">
                                <p class="font-bold text-slate-800 text-center">Tìm các giá trị còn thiếu để điền vào bảng dưới đây:</p>
                                
                                <div class="overflow-x-auto rounded-2xl border-2 border-blue-100 shadow-md bg-white">
                                    <table class="w-full text-center border-collapse">
                                        <thead>
                                            <tr class="bg-blue-600 text-white text-xl md:text-2xl font-black">
                                                <th class="p-4 border-r border-b border-blue-500 w-1/4">Đại lượng</th>
                                                <th class="p-4 border-r border-b border-blue-500 w-1/4">Cột mẫu</th>
                                                <th class="p-4 border-r border-b border-blue-500 w-1/4">Cột A</th>
                                                <th class="p-4 border-b border-blue-500 w-1/4">Cột B</th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-lg md:text-xl font-bold text-slate-700">
                                            <tr class="bg-blue-50/40">
                                                <td class="p-4 border-r border-b border-blue-100 font-extrabold text-blue-800">Hiệu hai số</td>
                                                <td class="p-4 border-r border-b border-blue-100">16</td>
                                                <td class="p-4 border-r border-b border-blue-100 text-slate-800 font-black">25</td>
                                                <td class="p-4 border-b border-blue-100 text-slate-800 font-black">42</td>
                                            </tr>
                                            <tr>
                                                <td class="p-4 border-r border-b border-blue-100 font-extrabold text-blue-800">Tỉ số của hai số</td>
                                                <td class="p-4 border-r border-b border-blue-100">
                                                    <div class="flex flex-col items-center justify-center">
                                                        <span>3</span>
                                                        <hr class="w-6 border-slate-700 my-0.5">
                                                        <span>5</span>
                                                    </div>
                                                </td>
                                                <td class="p-4 border-r border-b border-blue-100">
                                                    <div class="flex flex-col items-center justify-center">
                                                        <span>4</span>
                                                        <hr class="w-6 border-slate-700 my-0.5">
                                                        <span>9</span>
                                                    </div>
                                                </td>
                                                <td class="p-4 border-b border-blue-100">
                                                    <div class="flex flex-col items-center justify-center">
                                                        <span>7</span>
                                                        <hr class="w-6 border-slate-700 my-0.5">
                                                        <span>4</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="bg-blue-50/40">
                                                <td class="p-4 border-r border-b border-blue-100 font-extrabold text-blue-800">Số bé</td>
                                                <td class="p-4 border-r border-b border-blue-100 text-slate-500">24</td>
                                                <td class="p-4 border-r border-b border-blue-100">
                                                    <input id="97-1-1" type="text" class="w-24 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                </td>
                                                <td class="p-4 border-b border-blue-100">
                                                    <input id="97-1-3" type="text" class="w-24 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                </td>
                                            </tr>
                                            <tr class="bg-white">
                                                <td class="p-4 border-r border-blue-100 font-extrabold text-blue-800">Số lớn</td>
                                                <td class="p-4 border-r border-blue-100 text-slate-500">40</td>
                                                <td class="p-4 border-r border-blue-100">
                                                    <input id="97-1-2" type="text" class="w-24 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                </td>
                                                <td class="p-4">
                                                    <input id="97-1-4" type="text" class="w-24 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <!-- Hộp thoại giải chi tiết xếp chồng dọc -->
                                <div id="solution-97-1" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-4 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-1">Bài giải chi tiết:</p>
                                    <div class="space-y-3">
                                        <p class="font-bold text-blue-700 text-xl border-b border-slate-200 pb-1">Cột A: Hiệu = 25, Tỉ số = 4/9</p>
                                        <p>Hiệu số phần bằng nhau là:</p>
                                        <p class="pl-6 font-bold text-slate-900">9 - 4 = 5 (phần)</p>
                                        <p>Giá trị một phần là:</p>
                                        <p class="pl-6 font-bold text-slate-900">25 : 5 = 5</p>
                                        <p>Số bé là:</p>
                                        <p class="pl-6 font-bold text-slate-900">5 x 4 = 20</p>
                                        <p>Số lớn là:</p>
                                        <p class="pl-6 font-bold text-slate-900">5 x 9 = 45</p>
                                    </div>
                                    <div class="space-y-3 border-t border-slate-200 pt-3">
                                        <p class="font-bold text-blue-700 text-xl border-b border-slate-200 pb-1">Cột B: Hiệu = 42, Tỉ số = 7/4 (Số bé ứng với 4 phần, Số lớn ứng với 7 phần)</p>
                                        <p>Hiệu số phần bằng nhau là:</p>
                                        <p class="pl-6 font-bold text-slate-900">7 - 4 = 3 (phần)</p>
                                        <p>Giá trị một phần là:</p>
                                        <p class="pl-6 font-bold text-slate-900">42 : 3 = 14</p>
                                        <p>Số bé là:</p>
                                        <p class="pl-6 font-bold text-slate-900">14 x 4 = 56</p>
                                        <p>Số lớn là:</p>
                                        <p class="pl-6 font-bold text-slate-900">14 x 7 = 98</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution97('1')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-97-1" onclick="window.check_97_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 - Thi đấu cờ vua -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson97_b2" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase tracking-wide">Bài 2. Giải đấu cờ vua trường tiểu học</h3>
                            </div>

                            <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage97('./assets/images/toan/toan_tap_2/97/2.png', 'Các bạn đấu cờ vua')" src="./assets/images/toan/toan_tap_2/97/2.png" alt="Các bạn đấu cờ vua" class="w-full h-auto max-h-[220px] object-contain rounded-2xl border-4 border-slate-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage97('./assets/images/toan/toan_tap_2/97/2.png', 'Các bạn đấu cờ vua')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                            <div class="p-6 bg-emerald-50/80 border-2 border-emerald-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4">
                                <p class="font-bold text-slate-800">
                                    Trong cuộc thi đấu cờ vua của trường, số bạn nam tham gia nhiều hơn số bạn nữ là <span class="text-emerald-700 font-extrabold">10 bạn</span>, số bạn nữ bằng <span class="text-emerald-700 font-black">2/3</span> số bạn nam. Hỏi có bao nhiêu bạn nam, bao nhiêu bạn nữ tham gia cuộc thi đấu cờ vua đó?
                                </p>
                                
                                <!-- Sơ đồ SVG thi đấu cờ vua -->
                                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-150 flex justify-center">
                                    <svg viewBox="0 0 620 120" class="w-full max-w-[680px] md:max-w-[780px] font-bold text-slate-800">
                                        <!-- Bạn nữ -->
                                        <text x="10" y="32" class="fill-slate-800 font-bold" font-size="20">Nữ</text>
                                        <line x1="120" y1="25" x2="220" y2="25" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="120" y1="15" x2="120" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="170" y1="15" x2="170" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="220" y1="15" x2="220" y2="35" stroke="#1e293b" stroke-width="3"/>
                                        
                                        <!-- Bạn nam -->
                                        <text x="10" y="72" class="fill-slate-800 font-bold" font-size="20">Nam</text>
                                        <line x1="120" y1="65" x2="270" y2="65" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="120" y1="55" x2="120" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="170" y1="55" x2="170" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="220" y1="55" x2="220" y2="75" stroke="#1e293b" stroke-width="3"/>
                                        <line x1="270" y1="55" x2="270" y2="75" stroke="#1e293b" stroke-width="3"/>

                                        <!-- Đường nét đứt gióng thẳng hàng -->
                                        <line x1="220" y1="25" x2="220" y2="65" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4"/>

                                        <!-- Đoạn nhiều hơn -->
                                        <path d="M 220 85 L 230 85 L 230 95 L 260 95 L 260 85 L 270 85" fill="none" stroke="#ef4444" stroke-width="2.5"/>
                                        <text x="230" y="112" class="fill-red-600 font-extrabold" font-size="18">10 bạn</text>
                                    </svg>
                                </div>

                                <div class="bg-white p-6 rounded-[1.5rem] border border-emerald-100 space-y-4 font-bold text-slate-800">
                                    <p class="text-2xl text-center text-emerald-600 mb-2">Đáp số</p>
                                    
                                    <div class="flex flex-row items-center gap-2 flex-wrap">
                                        <span>Số bạn nam tham gia:</span>
                                        <input id="97-2-1" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>bạn</span>
                                    </div>

                                    <div class="flex flex-row items-center gap-2 flex-wrap">
                                        <span>Số bạn nữ tham gia:</span>
                                        <input id="97-2-2" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>bạn</span>
                                    </div>
                                </div>

                                <!-- Hộp thoại giải chi tiết xếp chồng dọc -->
                                <div id="solution-97-2" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Hiệu số phần bằng nhau là:</p>
                                    <p class="pl-6 font-bold text-slate-900">3 - 2 = 1 (phần)</p>
                                    <p>Giá trị một phần là:</p>
                                    <p class="pl-6 font-bold text-slate-900">10 : 1 = 10 (bạn)</p>
                                    <p>Số bạn nam tham gia thi đấu cờ vua là:</p>
                                    <p class="pl-6 font-bold text-slate-900">10 x 3 = 30 (bạn)</p>
                                    <p>Số bạn nữ tham gia thi đấu cờ vua là:</p>
                                    <p class="pl-6 font-bold text-slate-900">10 x 2 = 20 (bạn) (hoặc lấy 30 - 10 = 20 bạn)</p>
                                    <p class="font-bold text-blue-700 mt-2">Đáp số: Nam: 30 bạn; Nữ: 20 bạn.</p>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution97('2')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-97-2" onclick="window.check_97_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        <!-- Script bổ trợ toggle hiện/ẩn bài giải chi tiết cho GV -->
        <script>
            window.toggleSolution97 = (id) => {
                const el = document.getElementById('solution-97-' + id);
                if (el) {
                    el.classList.toggle('hidden');
                }
            };
        </script>
    `,

    "quizPool": [
        { "question": "Hiệu hai số là 15, tỉ số là 2/5. Hiệu số phần bằng nhau là:", "options": ["3 phần", "7 phần", "10 phần", "5 phần"], "answer": 0 },
        { "question": "Hiệu hai số là 15, tỉ số là 2/5. Số bé là:", "options": ["10", "25", "5", "15"], "answer": 0 },
        { "question": "Hiệu hai số là 15, tỉ số là 2/5. Số lớn là:", "options": ["25", "10", "30", "20"], "answer": 0 },
        { "question": "Nữ ít hơn nam 10 bạn, tỉ số nữ/nam là 2/3. Số bạn nam là:", "options": ["30 bạn", "20 bạn", "10 bạn", "40 bạn"], "answer": 0 },
        { "question": "Nữ ít hơn nam 10 bạn, tỉ số nữ/nam là 2/3. Số bạn nữ là:", "options": ["20 bạn", "30 bạn", "10 bạn", "15 bạn"], "answer": 0 },
        { "question": "Hiệu hai số là 20. Tỉ số của hai số là 3/7. Số lớn là:", "options": ["35", "15", "40", "28"], "answer": 0 },
        { "question": "Hiệu hai số là 20. Tỉ số của hai số là 3/7. Số bé là:", "options": ["15", "35", "10", "12"], "answer": 0 },
        { "question": "Hiệu hai số là 24. Số lớn gấp 3 lần số bé. Hiệu số phần bằng nhau là:", "options": ["2 phần", "4 phần", "3 phần", "1 phần"], "answer": 0 },
        { "question": "Hiệu hai số là 24. Số lớn gấp 3 lần số bé. Số bé là:", "options": ["12", "36", "8", "6"], "answer": 0 },
        { "question": "Hiệu hai số là 24. Số lớn gấp 3 lần số bé. Số lớn là:", "options": ["36", "12", "48", "24"], "answer": 0 },
        { "question": "Mẹ hơn con 28 tuổi, tuổi con bằng 1/5 tuổi mẹ. Tuổi con là:", "options": ["7 tuổi", "35 tuổi", "8 tuổi", "5 tuổi"], "answer": 0 },
        { "question": "Mẹ hơn con 28 tuổi, tuổi con bằng 1/5 tuổi mẹ. Tuổi mẹ là:", "options": ["35 tuổi", "7 tuổi", "40 tuổi", "30 tuổi"], "answer": 0 },
        { "question": "Đoạn đường AB dài hơn đoạn đường CD là 120 m. Tỉ số độ dài CD/AB là 2/5. Đoạn CD dài:", "options": ["80 m", "200 m", "60 m", "100 m"], "answer": 0 },
        { "question": "Đoạn đường AB dài hơn đoạn đường CD là 120 m. Tỉ số độ dài CD/AB là 2/5. Đoạn AB dài:", "options": ["200 m", "80 m", "150 m", "180 m"], "answer": 0 },
        { "question": "Hiệu hai số là 12, tỉ số là 5/3. Số lớn là:", "options": ["30", "18", "24", "15"], "answer": 0 }
    ]
};
