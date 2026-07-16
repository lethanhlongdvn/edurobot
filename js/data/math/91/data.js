// ===================================================================
// Tiết 91 - Bài 36: Tỉ số. Tỉ số phần trăm (tiết 1)
// DATA: Nội dung SGK trang 4-5 (Toán 5 Tập 2)
// ===================================================================

export const lesson91Data = {
    "content": `
        <div class="theory-section space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 pt-6">
            <!-- Header Chủ đề 7 -->
            <div class="glass-card p-10 rounded-[3rem] bg-gradient-to-br from-blue-600 to-cyan-700 text-white shadow-2xl relative overflow-hidden mb-12">
                <div class="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                <div class="relative z-10 flex items-center gap-10">
                    <div class="w-28 h-28 bg-white/20 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center text-6xl shadow-inner">📐</div>
                    <div>
                        <p class="text-xl md:text-2xl font-bold opacity-80 uppercase tracking-widest mb-2">Chủ đề 7</p>
                        <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight">Tỉ số và các bài toán liên quan</h2>
                        <p class="text-2xl md:text-3xl font-medium opacity-90 italic mt-2">Bài 36. Tỉ số. Tỉ số phần trăm</p>
                    </div>
                </div>
            </div>

            <!-- KHÁM PHÁ a) - Bến xe buýt -->
            <div class="glass-card p-10 rounded-[3rem] border-2 border-blue-50 shadow-xl bg-white/80 backdrop-blur-xl">
                <div class="flex items-center gap-4 mb-8">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl shadow-lg">🔍</div>
                    <h3 class="text-4xl font-black text-slate-800 uppercase italic">Khám phá</h3>
                </div>

                <div class="bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-8">
                    <p class="text-2xl md:text-3xl font-bold text-slate-700 leading-relaxed">
                        <span class="text-blue-600 font-black text-3xl md:text-4xl mr-2">a)</span>
                        Trong bến xe buýt, có <span class="text-blue-700 font-black">7 ô tô</span>, trong đó có <span class="text-emerald-700 font-black">3 ô tô điện</span> và <span class="text-orange-700 font-black">4 ô tô chạy bằng xăng</span>.
                    </p>

                    <div class="bg-white p-8 rounded-[2rem] shadow-inner border-2 border-blue-100">
                        <p class="text-2xl md:text-3xl font-bold text-slate-800 mb-6">Ta nói:</p>
                        <ul class="space-y-4 text-2xl md:text-3xl font-bold text-slate-700 list-disc pl-8">
                            <li>Tỉ số của số xe điện và số xe ở bến là <span class="text-blue-700 font-black">3 : 7</span> hay <span class="inline-flex flex-col items-center align-middle mx-1"><span class="border-b-2 border-slate-800 px-2 font-black">3</span><span class="font-black">7</span></span></li>
                            <li>Tỉ số của số xe chạy bằng xăng và số xe ở bến là <span class="text-blue-700 font-black">4 : 7</span> hay <span class="inline-flex flex-col items-center align-middle mx-1"><span class="border-b-2 border-slate-800 px-2 font-black">4</span><span class="font-black">7</span></span></li>
                            <li>Tỉ số của số xe điện và số xe chạy bằng xăng là <span class="text-blue-700 font-black">3 : 4</span> hay <span class="inline-flex flex-col items-center align-middle mx-1"><span class="border-b-2 border-slate-800 px-2 font-black">3</span><span class="font-black">4</span></span></li>
                            <li>Tỉ số của số xe chạy bằng xăng và số xe điện là <span class="text-blue-700 font-black">4 : 3</span> hay <span class="inline-flex flex-col items-center align-middle mx-1"><span class="border-b-2 border-slate-800 px-2 font-black">4</span><span class="font-black">3</span></span></li>
                        </ul>
                    </div>

                    <!-- Công thức -->
                    <div class="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-[2rem] text-white shadow-xl text-center">
                        <p class="text-3xl md:text-4xl font-black italic tracking-tight">
                            Tỉ số của a và b là a : b hay
                            <span class="inline-flex flex-col items-center align-middle mx-2 bg-white/20 px-4 py-1 rounded-xl"><span class="border-b-2 border-white px-2">a</span><span>b</span></span>
                            (b khác 0)
                        </p>
                    </div>
                </div>
            </div>

            <!-- KHÁM PHÁ b) - Tỉ số phần trăm -->
            <div class="glass-card p-10 rounded-[3rem] border-2 border-emerald-50 shadow-xl bg-white/80 backdrop-blur-xl">
                <div class="bg-emerald-50 p-8 rounded-[2.5rem] border-2 border-emerald-100 space-y-8">
                    <p class="text-2xl md:text-3xl font-bold text-slate-700 leading-relaxed">
                        <span class="text-emerald-600 font-black text-3xl md:text-4xl mr-2">b)</span>
                        Rô-bốt khảo sát <span class="text-emerald-700 font-black">100 bạn khối 5</span> tham gia các môn thể thao thì thấy có <span class="text-blue-700 font-black">43 bạn</span> tham gia môn Bơi, <span class="text-orange-700 font-black">31 bạn</span> tham gia môn Cờ vua, <span class="text-rose-700 font-black">26 bạn</span> tham gia môn Cầu lông.
                    </p>

                    <!-- Bảng tỉ số phần trăm -->
                    <div class="overflow-x-auto bg-white rounded-[2rem] shadow-lg border-2 border-emerald-100">
                        <table class="w-full text-center">
                            <thead>
                                <tr class="bg-emerald-100 text-emerald-900 text-xl md:text-2xl font-black">
                                    <th class="py-4 px-6 border-r-2 border-emerald-200">Môn thể thao</th>
                                    <th class="py-4 px-6 border-r-2 border-emerald-200">Bơi</th>
                                    <th class="py-4 px-6 border-r-2 border-emerald-200">Cờ vua</th>
                                    <th class="py-4 px-6">Cầu lông</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-2xl md:text-3xl font-black text-slate-800">
                                    <td class="py-6 px-4 border-r-2 border-emerald-100 text-xl md:text-2xl font-bold text-slate-600 leading-tight">Tỉ số của số bạn tham gia ở mỗi môn và số bạn được khảo sát</td>
                                    <td class="py-6 px-4 border-r-2 border-emerald-100">
                                        <span class="inline-flex flex-col items-center"><span class="border-b-2 border-slate-800 px-3">43</span><span>100</span></span>
                                    </td>
                                    <td class="py-6 px-4 border-r-2 border-emerald-100">
                                        <span class="inline-flex flex-col items-center"><span class="border-b-2 border-slate-800 px-3">31</span><span>100</span></span>
                                    </td>
                                    <td class="py-6 px-4">
                                        <span class="inline-flex flex-col items-center"><span class="border-b-2 border-slate-800 px-3">26</span><span>100</span></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="bg-white p-8 rounded-[2rem] shadow-inner border-2 border-emerald-100 space-y-4">
                        <ul class="space-y-4 text-2xl md:text-3xl font-bold text-slate-700 list-disc pl-8">
                            <li>Các tỉ số <span class="inline-flex flex-col items-center align-middle mx-1"><span class="border-b-2 border-slate-800 px-1">43</span><span>100</span></span>, <span class="inline-flex flex-col items-center align-middle mx-1"><span class="border-b-2 border-slate-800 px-1">31</span><span>100</span></span>, <span class="inline-flex flex-col items-center align-middle mx-1"><span class="border-b-2 border-slate-800 px-1">26</span><span>100</span></span> được gọi là các <span class="text-emerald-700 font-black">tỉ số phần trăm</span>.</li>
                            <li>Tỉ số <span class="inline-flex flex-col items-center align-middle mx-1"><span class="border-b-2 border-slate-800 px-1">43</span><span>100</span></span> đọc là: <span class="text-emerald-700 font-black italic">Bốn mươi ba phần trăm</span>, viết là: <span class="text-emerald-700 font-black text-4xl">43%</span>.</li>
                        </ul>
                    </div>

                    <!-- Kiến thức quan trọng -->
                    <div class="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 rounded-[2rem] text-white shadow-xl text-center space-y-4">
                        <p class="text-2xl md:text-3xl font-bold opacity-90">Tỉ số phần trăm của số bạn tham gia môn Bơi và số bạn được khảo sát là <span class="text-4xl font-black">43%</span>.</p>
                        <p class="text-2xl md:text-3xl font-bold opacity-90 italic">Tỉ số này cho biết: Cứ 100 bạn được khảo sát thì có 43 bạn tham gia môn Bơi.</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    "practice": `
        <div class="space-y-12 pb-10">
            <!-- Hoạt động 1: Hoàn thành bảng -->
            <div id="lesson91_b1" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500">
                <div class="flex items-center gap-6 mb-8 md:mb-10">
                    <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                    <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide">Hoàn thành bảng bên (theo mẫu)</h4>
                </div>

                <div class="overflow-x-auto bg-blue-50 rounded-[2rem] p-6 md:p-8 border-2 border-blue-100">
                    <table class="w-full text-center">
                        <thead>
                            <tr class="bg-blue-200 text-blue-900 text-xl md:text-2xl font-black">
                                <th class="py-4 px-6 border-r-2 border-blue-300 rounded-tl-2xl">Số thứ nhất</th>
                                <th class="py-4 px-6 border-r-2 border-blue-300">Số thứ hai</th>
                                <th class="py-4 px-6 rounded-tr-2xl">Tỉ số của số thứ nhất và số thứ hai</th>
                            </tr>
                        </thead>
                        <tbody class="text-2xl md:text-3xl font-black text-slate-800">
                            <!-- Hàng mẫu -->
                            <tr class="bg-blue-100/50 border-b-2 border-blue-100">
                                <td class="py-6 px-6 border-r-2 border-blue-100">3</td>
                                <td class="py-6 px-6 border-r-2 border-blue-100">11</td>
                                <td class="py-6 px-6">
                                    <span class="inline-flex flex-col items-center text-blue-700"><span class="border-b-2 border-blue-700 px-3">3</span><span>11</span></span>
                                </td>
                            </tr>
                            <!-- Hàng 2 (cần điền) -->
                            <tr class="bg-white border-b-2 border-blue-100">
                                <td class="py-6 px-6 border-r-2 border-blue-100">13</td>
                                <td class="py-6 px-6 border-r-2 border-blue-100">17</td>
                                <td class="py-6 px-6">
                                    <div class="flex items-center justify-center gap-2">
                                        <div class="inline-flex flex-col items-center">
                                            <input id="91-1-2n" type="text" class="w-16 h-12 md:w-20 md:h-14 text-center text-2xl md:text-3xl font-black border-4 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?">
                                            <div class="w-full h-1 bg-slate-800 my-1"></div>
                                            <input id="91-1-2d" type="text" class="w-16 h-12 md:w-20 md:h-14 text-center text-2xl md:text-3xl font-black border-4 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <!-- Hàng 3 (cần điền) -->
                            <tr class="bg-blue-50/50 border-b-2 border-blue-100">
                                <td class="py-6 px-6 border-r-2 border-blue-100">17</td>
                                <td class="py-6 px-6 border-r-2 border-blue-100">13</td>
                                <td class="py-6 px-6">
                                    <div class="flex items-center justify-center gap-2">
                                        <div class="inline-flex flex-col items-center">
                                            <input id="91-1-3n" type="text" class="w-16 h-12 md:w-20 md:h-14 text-center text-2xl md:text-3xl font-black border-4 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?">
                                            <div class="w-full h-1 bg-slate-800 my-1"></div>
                                            <input id="91-1-3d" type="text" class="w-16 h-12 md:w-20 md:h-14 text-center text-2xl md:text-3xl font-black border-4 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <!-- Hàng 4 (cần điền) -->
                            <tr class="bg-white">
                                <td class="py-6 px-6 border-r-2 border-blue-100 text-blue-600 italic">m</td>
                                <td class="py-6 px-6 border-r-2 border-blue-100 text-blue-600 italic">n (khác 0)</td>
                                <td class="py-6 px-6">
                                    <div class="flex items-center justify-center gap-2">
                                        <div class="inline-flex flex-col items-center">
                                            <input id="91-1-4n" type="text" class="w-16 h-12 md:w-20 md:h-14 text-center text-2xl md:text-3xl font-black border-4 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?">
                                            <div class="w-full h-1 bg-slate-800 my-1"></div>
                                            <input id="91-1-4d" type="text" class="w-16 h-12 md:w-20 md:h-14 text-center text-2xl md:text-3xl font-black border-4 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-91-1" onclick="window.check_91_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Hoạt động 2: Trạng nguyên nhí -->
            <div id="lesson91_b2" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500">
                <div class="flex items-center gap-6 mb-8 md:mb-10">
                    <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                    <h4 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase tracking-wide">Số ?</h4>
                </div>

                <div class="p-6 md:p-8 bg-emerald-50 rounded-[2rem] md:rounded-[2.5rem] border-4 border-emerald-200 space-y-8">
                    <p class="text-xl md:text-3xl font-bold text-slate-700 leading-relaxed">
                        Một trường tiểu học có <span class="text-emerald-700 font-black">23 bạn nữ</span> và <span class="text-blue-700 font-black">17 bạn nam</span> tham gia cuộc thi "Trạng nguyên nhí".
                    </p>

                    <!-- Câu a -->
                    <div class="bg-white p-6 md:p-8 rounded-[2rem] border-2 border-emerald-100 shadow-sm">
                        <div class="flex flex-wrap items-center gap-4">
                            <p class="text-xl md:text-3xl font-black text-slate-800">a) Tỉ số của số bạn nữ và số bạn nam là:</p>
                            <div class="inline-flex flex-col items-center">
                                <input id="91-2-an" type="text" class="w-16 h-11 md:w-20 md:h-14 text-center text-2xl md:text-3xl font-black border-4 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-emerald-50" placeholder="?">
                                <div class="w-full h-1 bg-slate-800 my-1"></div>
                                <input id="91-2-ad" type="text" class="w-16 h-11 md:w-20 md:h-14 text-center text-2xl md:text-3xl font-black border-4 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-emerald-50" placeholder="?">
                            </div>
                        </div>
                    </div>

                    <!-- Câu b -->
                    <div class="bg-white p-6 md:p-8 rounded-[2rem] border-2 border-emerald-100 shadow-sm">
                        <div class="flex flex-wrap items-center gap-4">
                            <p class="text-xl md:text-3xl font-black text-slate-800">b) Tỉ số của số bạn nam và số bạn nữ là:</p>
                            <div class="inline-flex flex-col items-center">
                                <input id="91-2-bn" type="text" class="w-16 h-11 md:w-20 md:h-14 text-center text-2xl md:text-3xl font-black border-4 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-emerald-50" placeholder="?">
                                <div class="w-full h-1 bg-slate-800 my-1"></div>
                                <input id="91-2-bd" type="text" class="w-16 h-11 md:w-20 md:h-14 text-center text-2xl md:text-3xl font-black border-4 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-emerald-50" placeholder="?">
                            </div>
                        </div>
                    </div>

                    <!-- Câu c -->
                    <div class="bg-white p-6 md:p-8 rounded-[2rem] border-2 border-emerald-100 shadow-sm">
                        <div class="flex flex-wrap items-center gap-4">
                            <p class="text-xl md:text-3xl font-black text-slate-800">c) Tỉ số của số bạn nữ và tổng số bạn tham gia là:</p>
                            <div class="inline-flex flex-col items-center">
                                <input id="91-2-cn" type="text" class="w-16 h-11 md:w-20 md:h-14 text-center text-2xl md:text-3xl font-black border-4 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-emerald-50" placeholder="?">
                                <div class="w-full h-1 bg-slate-800 my-1"></div>
                                <input id="91-2-cd" type="text" class="w-16 h-11 md:w-20 md:h-14 text-center text-2xl md:text-3xl font-black border-4 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-emerald-50" placeholder="?">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-91-2" onclick="window.check_91_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Hoạt động 3: Nối đôi ong với hoa -->
            <div id="lesson91_b3" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-amber-500">
                <div class="flex items-center gap-6 mb-8 md:mb-10">
                    <div class="w-14 h-14 md:w-16 md:h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                    <h4 class="text-2xl md:text-3xl font-black text-amber-700 uppercase tracking-wide">Chọn bông hoa ghi tỉ số ứng với tỉ số phần trăm ghi trên mỗi con ong</h4>
                </div>

                <div id="match-container-91" class="relative p-6 md:p-8 bg-amber-50 rounded-[2rem] md:rounded-[2.5rem] border-4 border-amber-200">
                    <p class="text-xl md:text-2xl font-bold text-slate-600 mb-8 italic text-center">Nhấn vào con ong, rồi nhấn vào bông hoa tương ứng để nối đôi.</p>

                    <!-- SVG overlay vẽ nét chì -->
                    <svg id="svg-lines-91" class="absolute inset-0 w-full h-full pointer-events-none z-10" style="overflow:visible;"></svg>

                    <!-- Hàng ong -->
                    <div class="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 relative z-20">
                        <button id="bee-39" onclick="window.selectBee91('39')" class="bee-91 flex flex-col items-center p-3 md:p-4 bg-white rounded-[2rem] border-4 border-amber-200 hover:border-amber-500 transition-all shadow-lg cursor-pointer active:scale-95">
                            <img src="hinh_anh/toan/toan_tap_2/91/91-3-1.png" alt="Ong 39%" class="w-24 h-20 md:w-32 md:h-28 object-contain">
                        </button>
                        <button id="bee-41" onclick="window.selectBee91('41')" class="bee-91 flex flex-col items-center p-3 md:p-4 bg-white rounded-[2rem] border-4 border-amber-200 hover:border-amber-500 transition-all shadow-lg cursor-pointer active:scale-95">
                            <img src="hinh_anh/toan/toan_tap_2/91/91-3-2.png" alt="Ong 41%" class="w-24 h-20 md:w-32 md:h-28 object-contain">
                        </button>
                        <button id="bee-75" onclick="window.selectBee91('75')" class="bee-91 flex flex-col items-center p-3 md:p-4 bg-white rounded-[2rem] border-4 border-amber-200 hover:border-amber-500 transition-all shadow-lg cursor-pointer active:scale-95">
                            <img src="hinh_anh/toan/toan_tap_2/91/91-3-3.png" alt="Ong 75%" class="w-24 h-20 md:w-32 md:h-28 object-contain">
                        </button>
                    </div>

                    <!-- Hàng hoa -->
                    <div class="flex flex-wrap justify-center gap-6 md:gap-10 relative z-20">
                        <button id="flower-75" onclick="window.selectFlower91('75')" class="flower-91 flex flex-col items-center p-3 md:p-4 bg-white rounded-[2rem] border-4 border-emerald-200 hover:border-emerald-500 transition-all shadow-lg cursor-pointer active:scale-95">
                            <img src="hinh_anh/toan/toan_tap_2/91/91-3-4.png" alt="Hoa 75/100" class="w-24 h-28 md:w-32 md:h-36 object-contain">
                        </button>
                        <button id="flower-39" onclick="window.selectFlower91('39')" class="flower-91 flex flex-col items-center p-3 md:p-4 bg-white rounded-[2rem] border-4 border-blue-200 hover:border-blue-500 transition-all shadow-lg cursor-pointer active:scale-95">
                            <img src="hinh_anh/toan/toan_tap_2/91/91-3-5.png" alt="Hoa 39/100" class="w-24 h-28 md:w-32 md:h-36 object-contain">
                        </button>
                        <button id="flower-41" onclick="window.selectFlower91('41')" class="flower-91 flex flex-col items-center p-3 md:p-4 bg-white rounded-[2rem] border-4 border-rose-200 hover:border-rose-500 transition-all shadow-lg cursor-pointer active:scale-95">
                            <img src="hinh_anh/toan/toan_tap_2/91/91-3-6.png" alt="Hoa 41/100" class="w-24 h-28 md:w-32 md:h-36 object-contain">
                        </button>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-91-3" onclick="window.check_91_3()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>
    `,

    "quizPool": [
        { "question": "Tỉ số của 3 và 7 là:", "options": ["3/7", "7/3", "3 + 7", "3 × 7"], "answer": 0 },
        { "question": "Tỉ số của 5 và 8 viết dưới dạng phân số là:", "options": ["5/8", "8/5", "5/3", "3/5"], "answer": 0 },
        { "question": "Tỉ số phần trăm 43/100 viết là:", "options": ["43%", "4,3%", "0,43%", "430%"], "answer": 0 },
        { "question": "Trong bến xe có 7 ô tô, 3 ô tô điện. Tỉ số của xe điện và tổng số xe là:", "options": ["3/7", "7/3", "4/7", "3/4"], "answer": 0 },
        { "question": "Tỉ số 25/100 viết dưới dạng phần trăm là:", "options": ["25%", "2,5%", "250%", "0,25%"], "answer": 0 },
        { "question": "23 bạn nữ, 17 bạn nam. Tỉ số nữ/nam là:", "options": ["23/17", "17/23", "23/40", "17/40"], "answer": 0 },
        { "question": "23 bạn nữ, 17 bạn nam. Tỉ số nam/nữ là:", "options": ["17/23", "23/17", "17/40", "23/40"], "answer": 0 },
        { "question": "Tỉ số phần trăm là tỉ số có mẫu số bằng:", "options": ["100", "10", "1000", "50"], "answer": 0 },
        { "question": "31% đọc là:", "options": ["Ba mươi mốt phần trăm", "Ba mươi một phần mười", "Ba trăm một phần trăm", "Ba mươi mốt phần nghìn"], "answer": 0 },
        { "question": "Nếu có 100 bạn, 43 bạn tham gia bơi thì tỉ số phần trăm là:", "options": ["43%", "57%", "43/57", "57/43"], "answer": 0 },
        { "question": "Tỉ số của a và b (b khác 0) viết là:", "options": ["a/b", "b/a", "a + b", "a - b"], "answer": 0 },
        { "question": "23 nữ và 17 nam. Tổng số bạn tham gia là:", "options": ["40 bạn", "6 bạn", "30 bạn", "23 bạn"], "answer": 0 },
        { "question": "Tỉ số của 13 và 17 là:", "options": ["13/17", "17/13", "13 + 17", "4/17"], "answer": 0 },
        { "question": "26 bạn cầu lông trong 100 bạn. Tỉ số phần trăm là:", "options": ["26%", "74%", "26/74", "2,6%"], "answer": 0 },
        { "question": "Tỉ số 50/100 viết dưới dạng phần trăm là:", "options": ["50%", "5%", "500%", "0,5%"], "answer": 0 }
    ]
};

