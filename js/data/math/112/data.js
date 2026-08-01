// ===================================================================
// Tiết 112 - Luyện tập: Mét khối
// DATA: Nội dung slide bài học và quiz pool
// ===================================================================

export const lesson112Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Slide 1: Ôn tập kiến thức cần nhớ -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-2 border-blue-50 shadow-xl bg-white/80 backdrop-blur-xl space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">🎯</div>
                                <h3 class="text-slate-800 uppercase italic text-xl font-black">Kiến thức cần nhớ</h3>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div class="p-6 bg-blue-50 rounded-[2rem] border-2 border-blue-100 text-center shadow-sm">
                                    <span class="text-5xl mb-3 block">🧊</span>
                                    <p class="text-xl font-black text-blue-800">1 m³ = 1 000 dm³</p>
                                    <p class="text-sm font-bold text-slate-500 mt-1">Một mét khối bằng một nghìn đề-xi-mét khối</p>
                                </div>
                                <div class="p-6 bg-blue-50 rounded-[2rem] border-2 border-blue-100 text-center shadow-sm">
                                    <span class="text-5xl mb-3 block">📦</span>
                                    <p class="text-xl font-black text-blue-800">1 dm³ = 1 000 cm³</p>
                                    <p class="text-sm font-bold text-slate-500 mt-1">Một đề-xi-mét khối bằng một nghìn xăng-ti-mét khối</p>
                                </div>
                                <div class="p-6 bg-blue-50 rounded-[2rem] border-2 border-blue-100 text-center shadow-sm">
                                    <span class="text-5xl mb-3 block">💧</span>
                                    <p class="text-xl font-black text-blue-800">1 m³ = 1 000 000 cm³</p>
                                    <p class="text-sm font-bold text-slate-500 mt-1">Một mét khối bằng một triệu xăng-ti-mét khối</p>
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

                    <!-- Slide 1: Bài 1 - Nối trực tiếp trên hình 1.png -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                             <div class="flex items-center gap-4 mb-4">
                                     <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                     <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 1. Chọn số đo thể tích phù hợp với mỗi đồ vật</h3>
                                 </div>

                            <div class="p-6 bg-blue-50/50 border-2 border-blue-100 rounded-[2rem] flex flex-col items-center gap-6">
                                <div class="relative w-full max-w-[800px] bg-white rounded-[2rem] border-2 border-blue-200 overflow-hidden shadow-inner select-none">
                                    
                                    <!-- Hình ảnh gốc từ sách giáo khoa -->
                                    <img src="./assets/images/toan/toan_tap_2/112/1.png" alt="Bài 1" class="w-full h-auto block pointer-events-none">

                                    <!-- SVG vẽ nét chì nối -->
                                    <svg id="svg-lines-112" class="absolute inset-0 w-full h-full pointer-events-none z-10" style="overflow:visible;"></svg>

                                    <!-- Nút nhấn trong suốt đặt đè lên các vùng ảnh -->
                                    <!-- 3 Hình ảnh ở hàng trên -->
                                    <button id="item-112-1" onclick="window.clickNode112('item-112-1')" class="item-112 absolute z-20 rounded-3xl border-2 border-dashed border-slate-300 hover:border-blue-500 bg-white/0 hover:bg-blue-500/10 active:scale-95 transition-all outline-none" style="left: 5.1%; width: 24.6%; top: 7.27%; height: 68.18%;" title="Khối lập phương nhỏ"></button>
                                    <button id="item-112-2" onclick="window.clickNode112('item-112-2')" class="item-112 absolute z-20 rounded-3xl border-2 border-dashed border-slate-300 hover:border-blue-500 bg-white/0 hover:bg-blue-500/10 active:scale-95 transition-all outline-none" style="left: 38.4%; width: 24.6%; top: 7.27%; height: 68.18%;" title="Khối lập phương vừa"></button>
                                    <button id="item-112-3" onclick="window.clickNode112('item-112-3')" class="item-112 absolute z-20 rounded-3xl border-2 border-dashed border-slate-300 hover:border-blue-500 bg-white/0 hover:bg-blue-500/10 active:scale-95 transition-all outline-none" style="left: 71.6%; width: 24.6%; top: 7.27%; height: 68.18%;" title="Khối lập phương lớn"></button>

                                    <!-- 3 Số đo ở hàng dưới -->
                                    <button id="vol-112-1dm3" onclick="window.clickNode112('vol-112-1dm3')" class="vol-112 absolute z-20 rounded-xl border-2 border-dashed border-amber-400 hover:border-amber-600 bg-amber-500/0 hover:bg-amber-500/10 active:scale-95 transition-all outline-none" style="left: 9.07%; width: 16.37%; top: 84.77%; height: 12.95%;" title="1 dm3"></button>
                                    <button id="vol-112-1m3" onclick="window.clickNode112('vol-112-1m3')" class="vol-112 absolute z-20 rounded-xl border-2 border-dashed border-amber-400 hover:border-amber-600 bg-amber-500/0 hover:bg-amber-500/10 active:scale-95 transition-all outline-none" style="left: 43.02%; width: 16.47%; top: 84.77%; height: 12.95%;" title="1 m3"></button>
                                    <button id="vol-112-1cm3" onclick="window.clickNode112('vol-112-1cm3')" class="vol-112 absolute z-20 rounded-xl border-2 border-dashed border-amber-400 hover:border-amber-600 bg-amber-500/0 hover:bg-amber-500/10 active:scale-95 transition-all outline-none" style="left: 77.06%; width: 16.37%; top: 84.77%; height: 12.95%;" title="1 cm3"></button>
                                </div>
                                <div class="text-slate-500 text-sm italic font-bold text-center">Hướng dẫn: Nhấp chọn một khối hình ở hàng trên, sau đó chọn số đo thể tích tương ứng ở hàng dưới để nối.</div>
                            </div>

                             <!-- Lời giải ẩn cho giáo viên -->
                             <div id="sol-112-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                 <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                 • Khối lập phương nhỏ (bao diêm) phù hợp với thể tích: 1 cm³.<br>
                                 • Khối lập phương vừa (hộp rubik) phù hợp với thể tích: 1 dm³.<br>
                                 • Khối lập phương lớn (thùng carton) phù hợp với thể tích: 1 m³.
                             </div>
                             <div class="flex justify-end items-center gap-4 mt-4">
                                 <button onclick="window.reset112_1()" class="px-6 py-3.5 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Làm lại</button>
                                 <button id="btn-check-112-1" onclick="window.check_112_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                             </div>
                        </div>
                    </div>

                                                            <!-- Slide 2: Bài 2 - Đổi đơn vị đo thể tích (1 cột) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-amber-500 space-y-6">
                            <div class="flex items-center gap-4 mb-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                <h3 class="text-2xl md:text-3xl font-black text-amber-700 uppercase">Bài 2. Số?</h3>
                            </div>

                            <div class="p-6 bg-amber-50/50 border-2 border-amber-100 rounded-[2rem] w-full space-y-4">
                                <div class="bg-white p-6 rounded-3xl border border-amber-200 space-y-4 font-bold text-slate-800 text-xl">
                                    <p class="text-amber-800 font-extrabold text-xl border-b border-amber-100 pb-2 whitespace-nowrap overflow-x-auto">a) Viết các số đo theo đơn vị đề-xi-mét khối (dm³):</p>
                                    <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>• 2,5 m³ =</span>
                                        <span class="inline-flex items-center flex-nowrap gap-1">
                                            <input id="ans-112-2-1" type="text" class="w-32 h-11 text-center font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>dm³</span>
                                        </span>
                                    </div>
                                    <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>• 3 900 cm³ =</span>
                                        <span class="inline-flex items-center flex-nowrap gap-1">
                                            <input id="ans-112-2-2" type="text" class="w-32 h-11 text-center font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>dm³</span>
                                        </span>
                                    </div>
                                </div>

                                <div class="bg-white p-6 rounded-3xl border border-amber-200 space-y-4 font-bold text-slate-800 text-xl">
                                    <p class="text-amber-800 font-extrabold text-xl border-b border-amber-100 pb-2 whitespace-nowrap overflow-x-auto">b) Viết các số đo theo đơn vị mét khối (m³):</p>
                                    <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>• 4 600 dm³ =</span>
                                        <span class="inline-flex items-center flex-nowrap gap-1">
                                            <input id="ans-112-2-3" type="text" class="w-32 h-11 text-center font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>m³</span>
                                        </span>
                                    </div>
                                    <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>• 7 500 000 cm³ =</span>
                                        <span class="inline-flex items-center flex-nowrap gap-1">
                                            <input id="ans-112-2-4" type="text" class="w-32 h-11 text-center font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>m³</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <!-- Lời giải ẩn cho giáo viên -->
                            <div id="sol-112-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                a) 2,5 m³ = 2 500 dm³<br>
                                3 900 cm³ = 3,9 dm³<br><br>
                                b) 4 600 dm³ = 4,6 m³<br>
                                7 500 000 cm³ = 7,5 m³
                            </div>
                            <div class="flex justify-end items-center gap-4 mt-8">
                                <button onclick="window.toggleSolution('sol-112-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                                <button id="btn-check-112-2" onclick="window.check_112_2()" class="w-16 h-16 md:w-20 md:h-20 bg-amber-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 - Tính -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4 mb-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 3. Tính</h3>
                            </div>

                            <div class="p-6 bg-blue-50/50 border-2 border-blue-100 rounded-[2rem] w-full space-y-4">
                                <div class="bg-white p-6 rounded-3xl border border-blue-200 space-y-4 font-bold text-slate-800 text-xl">
                                    <p class="text-blue-800 font-extrabold text-xl border-b border-blue-100 pb-2 whitespace-nowrap overflow-x-auto">a) Phép cộng & trừ:</p>
                                    <div class="flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>• 3,5 m³ + 6,05 m³ =</span>
                                        <input id="ans-112-3-1" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>m³</span>
                                    </div>
                                    <div class="flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>• 1 000 m³ − 510 m³ =</span>
                                        <input id="ans-112-3-2" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>m³</span>
                                    </div>
                                </div>
                                <div class="bg-white p-6 rounded-3xl border border-blue-200 space-y-4 font-bold text-slate-800 text-xl">
                                    <p class="text-blue-800 font-extrabold text-xl border-b border-blue-100 pb-2 whitespace-nowrap overflow-x-auto">b) Phép nhân & chia:</p>
                                    <div class="flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>• 8,5 m³ × 0,5 =</span>
                                        <input id="ans-112-3-3" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>m³</span>
                                    </div>
                                    <div class="flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>• 1 875 m³ : 5 =</span>
                                        <input id="ans-112-3-4" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>m³</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Lời giải ẩn cho giáo viên -->
                            <div id="sol-112-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                a) 3,5 m³ + 6,05 m³ = 9,55 m³<br>
                                1 000 m³ − 510 m³ = 490 m³<br><br>
                                b) 8,5 m³ × 0,5 = 4,25 m³<br>
                                1 875 m³ : 5 = 375 m³
                            </div>
                            <div class="flex justify-end items-center gap-4 mt-8">
                                <button onclick="window.toggleSolution('sol-112-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                                <button id="btn-check-112-3" onclick="window.check_112_3()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Bài 4 - Bài toán tính tiền nước -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            <div class="flex items-center gap-4 mb-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase">Bài 4. Bài toán tiền nước sinh hoạt</h3>
                            </div>

                            <div class="p-6 bg-emerald-50/80 border-2 border-emerald-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="bg-white p-6 rounded-2xl border border-emerald-200 text-lg md:text-xl space-y-3 font-bold text-slate-800">
                                    <p>Gia đình Việt dùng hết <span class="text-emerald-700 font-extrabold">15 m³</span> nước trong một tháng. Tính số tiền nước nhà Việt phải trả, biết:</p>
                                    <ul class="list-disc pl-6 space-y-2 text-slate-700 font-medium">
                                        <li>Giá 10 m³ đầu tiên là: <span class="text-rose-600 font-extrabold">5 973 đồng/m³</span>.</li>
                                        <li>Giá các m³ tiếp theo là: <span class="text-rose-600 font-extrabold">7 052 đồng/m³</span>.</li>
                                    </ul>
                                </div>

                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto font-bold text-slate-800 text-xl bg-white p-6 rounded-3xl border border-emerald-150">
                                    <span>Số tiền nước nhà Việt phải trả là:</span>
                                    <span class="inline-flex items-center flex-nowrap gap-1">
                                        <input id="ans-112-4" type="text" class="w-36 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>đồng</span>
                                    </span>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="sol-112-4" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                    <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                    Số tiền trả cho 10 m³ nước đầu tiên là:<br>
                                    5 973 × 10 = 59 730 (đồng)<br><br>
                                    Số m³ nước dùng vượt mức 10 m³ là:<br>
                                    15 − 10 = 5 (m³)<br><br>
                                    Số tiền trả cho 5 m³ nước tiếp theo là:<br>
                                    7 052 × 5 = 35 260 (đồng)<br><br>
                                    Tổng số tiền nước nhà Việt phải trả là:<br>
                                    59 730 + 35 260 = 94 990 (đồng)<br><br>
                                    Đáp số: 94 990 đồng.
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-8">
                                <button onclick="window.toggleSolution('sol-112-4')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                                <button id="btn-check-112-4" onclick="window.check_112_4()" class="w-16 h-16 md:w-20 md:h-20 bg-emerald-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,

    "quizPool": [
        { "question": "1 m³ bằng bao nhiêu dm³?", "options": ["10 dm³", "100 dm³", "1000 dm³", "10 000 dm³"], "answer": 2, "level": "easy" },
        { "question": "Số 'Hai mươi lăm mét khối' viết là:", "options": ["25 m", "25 m²", "25 m³", "25 dm³"], "answer": 2, "level": "easy" },
        { "question": "7,5 m³ = ... dm³", "options": ["75 dm³", "750 dm³", "7500 dm³", "75 000 dm³"], "answer": 2, "level": "easy" },
        { "question": "0,5 m³ = ... cm³", "options": ["500 cm³", "5000 cm³", "50 000 cm³", "500 000 cm³"], "answer": 3, "level": "medium" },
        { "question": "Một bể nước có thể tích 2 m³. Bể đó chứa được bao nhiêu lít nước? (biết 1 dm³ = 1 lít)", "options": ["20 lít", "200 lít", "2000 lít", "20 000 lít"], "answer": 2, "level": "medium" },
        { "question": "Đơn vị nào lớn nhất trong các đơn vị sau?", "options": ["m³", "dm³", "cm³", "mm³"], "answer": 0, "level": "easy" },
        { "question": "3000 dm³ bằng bao nhiêu m³?", "options": ["0,3 m³", "3 m³", "30 m³", "300 m³"], "answer": 1, "level": "easy" },
        { "question": "Cách đọc '1,205 m³' là:", "options": ["Một phẩy hai trăm linh năm mét khối", "Một phẩy hai mươi lăm mét khối", "Một phẩy hai không năm mét khối", "Mười hai phẩy không năm mét khối"], "answer": 0, "level": "medium" },
        { "question": "Một khối rubik có thể tích 64 cm³. Nếu cạnh của nó là 4 cm thì thể tích đó đúng hay sai?", "options": ["Đúng", "Sai"], "answer": 0, "level": "medium" },
        { "question": "Thứ tự các đơn vị đo thể tích từ lớn đến bé là:", "options": ["m³, cm³, dm³", "cm³, dm³, m³", "m³, dm³, cm³", "dm³, m³, cm³"], "answer": 2, "level": "easy" },
        { "question": "4 m³ 5 dm³ = ... dm³", "options": ["45 dm³", "405 dm³", "4005 dm³", "450 dm³"], "answer": 2, "level": "medium" },
        { "question": "Một căn phòng có thể tích 60 m³. Chiều dài 5m, chiều rộng 4m. Chiều cao căn phòng là?", "options": ["2m", "3m", "4m", "5m"], "answer": 1, "level": "hard" },
        { "question": "2/5 m³ = ... dm³", "options": ["200 dm³", "300 dm³", "400 dm³", "500 dm³"], "answer": 2, "level": "medium" },
        { "question": "8.000.000 cm³ = ... m³", "options": ["0,8 m³", "8 m³", "80 m³", "800 m³"], "answer": 1, "level": "medium" },
        { "question": "Một hình lập phương có cạnh 1m thì thể tích là:", "options": ["1 m²", "1 m³", "6 m²", "3 m³"], "answer": 1, "level": "easy" }
    ]
};