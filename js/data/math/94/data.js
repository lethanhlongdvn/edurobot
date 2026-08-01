// ===================================================================
// Tiết 94 - Bài 37: Tỉ lệ bản đồ và ứng dụng (tiết 2)
// DATA: Nội dung khám phá, luyện tập 4 slide và Quiz Pool 15 câu
// ===================================================================

export const lesson94Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
                    
                    <!-- Slide 1: Khám phá - Ôn tập tỉ lệ bản đồ -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] border-2 border-blue-50 shadow-xl bg-white/80 backdrop-blur-xl space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">⚡</div>
                                <h3 class="text-slate-800 uppercase italic text-xl font-black">Ôn tập: Ứng dụng tỉ lệ bản đồ</h3>
                            </div>

                            <div class="bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-6 text-xl md:text-2xl font-bold text-slate-700 leading-relaxed">
                                <p>
                                    Muốn tìm <span class="text-blue-700 font-extrabold">độ dài thật</span> ngoài thực tế, ta lấy độ dài thu nhỏ trên bản đồ nhân với mẫu số của tỉ lệ bản đồ (sau đó đổi sang đơn vị đo cần thiết).
                                </p>
                                <div class="bg-white p-6 rounded-2xl border border-blue-200 text-center text-2xl md:text-3xl text-slate-800">
                                    <span class="text-blue-700 font-black">Độ dài thật = Độ dài trên bản đồ × Mẫu số tỉ lệ</span>
                                </div>
                                <p>
                                    Muốn tìm <span class="text-emerald-700 font-extrabold">độ dài trên bản đồ</span>, ta đổi độ dài thật sang cùng đơn vị đo với độ dài cần tìm trên bản đồ, rồi chia cho mẫu số của tỉ lệ bản đồ.
                                </p>
                                <div class="bg-white p-6 rounded-2xl border border-blue-200 text-center text-2xl md:text-3xl text-slate-800">
                                    <span class="text-emerald-700 font-black">Độ dài trên bản đồ = Độ dài thật (đã đổi đơn vị) : Mẫu số tỉ lệ</span>
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
                    
                    <!-- Slide 1: Bài 1 - Quãng đường sắt Đà Nẵng - Nha Trang -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson94_b1" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide">Bài 1. Quãng đường sắt Đà Nẵng - Nha Trang</h3>
                            </div>

                            <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage94('./assets/images/toan/toan_tap_2/94/1.png', 'Quãng đường sắt')" src="./assets/images/toan/toan_tap_2/94/1.png" alt="Quãng đường sắt" class="w-full h-auto max-h-[260px] object-contain rounded-2xl border-4 border-slate-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage94('./assets/images/toan/toan_tap_2/94/1.png', 'Quãng đường sắt')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4">
                                <p class="font-bold text-slate-800">
                                    Trên bản đồ tỉ lệ <span class="text-blue-700">1 : 10 000 000</span>, quãng đường sắt từ ga Đà Nẵng đến ga Nha Trang đo được là <span class="text-blue-700">5 cm</span>. Trên thực tế, quãng đường sắt từ ga Đà Nẵng đến ga Nha Trang dài khoảng bao nhiêu ki-lô-mét?
                                </p>
                                
                                <div class="bg-white p-6 rounded-[1.5rem] border border-blue-100 space-y-4 font-bold text-slate-800">
                                    <p class="text-2xl text-center text-blue-600 mb-2">Bài giải</p>
                                    <div class="text-xl md:text-2xl text-slate-800 font-bold mb-1 leading-relaxed">
                                        <span>Trên thực tế, quãng đường sắt từ ga Đà Nẵng đến ga Nha Trang dài là:</span>
                                    </div>
                                    <div class="flex flex-row items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>5 × 10 000 000 =</span>
                                        <input id="94-1-1" type="text" class="w-36 h-11 text-center text-xl font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>(cm)</span>
                                    </div>
                                    <div class="flex flex-row items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>Đổi: 50 000 000 cm =</span>
                                        <input id="94-1-2" type="text" class="w-24 h-11 text-center text-xl font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>km</span>
                                    </div>
                                    <div class="flex flex-row items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>Đáp số:</span>
                                        <input id="94-1-3" type="text" class="w-24 h-11 text-center text-xl font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>km.</span>
                                    </div>
                                </div>

                                <!-- Khu vực hiện bài giải xếp chồng dọc -->
                                <div id="solution-94-1" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Trên thực tế, quãng đường sắt từ ga Đà Nẵng đến ga Nha Trang dài số xăng-ti-mét là:</p>
                                    <p>5 x 10 000 000 = 50 000 000 (cm)</p>
                                    <p>Đổi: 50 000 000 cm = 500 km</p>
                                    <p class="font-bold text-blue-700">Đáp số: 500 km.</p>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm: Hiện bài giải bên trái, E bên phải -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution94('1')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-94-1" onclick="window.check_94_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 - Bản vẽ của Nam từ bản A đến trường B và đài truyền hình C -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson94_b2" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase tracking-wide">Bài 2. Bản vẽ của Nam (Tỉ lệ 1 : 3 000)</h3>
                            </div>

                            <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage94('./assets/images/toan/toan_tap_2/94/2.png', 'Sơ đồ quãng đường AB, AC')" src="./assets/images/toan/toan_tap_2/94/2.png" alt="Sơ đồ quãng đường AB, AC" class="w-full h-auto max-h-[250px] object-contain rounded-2xl border-4 border-slate-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage94('./assets/images/toan/toan_tap_2/94/2.png', 'Sơ đồ quãng đường AB, AC')" class="absolute top-3 right-3 bg-emerald-600/80 hover:bg-emerald-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                            <div class="p-6 bg-emerald-50/80 border-2 border-emerald-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4">
                                <p class="font-bold text-slate-800">
                                    Quãng đường từ bản A đến trường tiểu học B dài 1 500 m, từ bản A đến đài truyền hình C dài 1 200 m. Bạn Nam đã vẽ hai quãng đường đó trên bản đồ tỉ lệ 1 : 3 000. Hỏi trên bản đồ này, mỗi đoạn thẳng AB, AC dài bao nhiêu xăng-ti-mét?
                                </p>
                                
                                <div class="bg-white p-6 rounded-[1.5rem] border border-emerald-100 space-y-4 font-bold text-slate-800">
                                    <p class="text-2xl text-center text-emerald-600 mb-2">Bài giải</p>
                                    <div class="flex flex-row items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>Đổi: 1 500 m =</span>
                                        <input id="94-2-1" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>cm; 1 200 m =</span>
                                        <input id="94-2-2" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>cm.</span>
                                    </div>
                                    <div class="text-xl md:text-2xl text-slate-800 font-bold mb-1 leading-relaxed">
                                        <span>Độ dài đoạn thẳng AB trên bản đồ là:</span>
                                    </div>
                                    <div class="flex flex-row items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>150 000 : 3 000 =</span>
                                        <input id="94-2-3" type="text" class="w-20 h-11 text-center text-xl font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>(cm)</span>
                                    </div>
                                    <div class="text-xl md:text-2xl text-slate-800 font-bold mb-1 leading-relaxed">
                                        <span>Độ dài đoạn thẳng AC trên bản đồ là:</span>
                                    </div>
                                    <div class="flex flex-row items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>120 000 : 3 000 =</span>
                                        <input id="94-2-4" type="text" class="w-20 h-11 text-center text-xl font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>(cm)</span>
                                    </div>
                                    <div class="flex flex-row items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>Đáp số: AB:</span>
                                        <input id="94-2-5" type="text" class="w-20 h-11 text-center text-xl font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>cm; AC:</span>
                                        <input id="94-2-6" type="text" class="w-20 h-11 text-center text-xl font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>cm.</span>
                                    </div>
                                </div>

                                <!-- Khu vực hiện bài giải xếp chồng dọc -->
                                <div id="solution-94-2" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Đổi: 1 500 m = 150 000 cm; 1 200 m = 120 000 cm.</p>
                                    <p>Chiều dài đoạn thẳng AB trên bản đồ là: 150 000 : 3 000 = 50 (cm)</p>
                                    <p>Chiều dài đoạn thẳng AC trên bản đồ là: 120 000 : 3 000 = 40 (cm)</p>
                                    <p class="font-bold text-blue-700">Đáp số: AB: 50 cm; AC: 40 cm.</p>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm: Hiện bài giải bên trái, E bên phải -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution94('2')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-94-2" onclick="window.check_94_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 - Điền bảng số liệu -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson94_b3" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-orange-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                                <h3 class="text-2xl md:text-3xl font-black text-orange-700 uppercase tracking-wide">Bài 3. Số ?</h3>
                            </div>

                            <div class="overflow-x-auto bg-orange-50 rounded-[2rem] p-6 border-2 border-orange-100">
                                <table class="w-full text-center border-collapse">
                                    <thead>
                                        <tr class="bg-orange-100 text-orange-950 text-xl md:text-2xl font-black">
                                            <th class="py-4 px-6 border-2 border-orange-200">Tỉ lệ bản đồ</th>
                                            <th class="py-4 px-6 border-2 border-orange-200">1 : 10 000</th>
                                            <th class="py-4 px-6 border-2 border-orange-200">1 : 1 000 000</th>
                                            <th class="py-4 px-6 border-2 border-orange-200">1 : 500 000</th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-xl md:text-2xl font-bold text-slate-800">
                                        <tr class="bg-white">
                                            <td class="py-4 px-6 border-2 border-orange-150 font-black text-slate-600">Độ dài trên bản đồ (cm)</td>
                                            <td class="py-4 px-6 border-2 border-orange-150">15</td>
                                            <td class="py-4 px-6 border-2 border-orange-150">8</td>
                                            <td class="py-4 px-6 border-2 border-orange-150">
                                                <input id="94-3-3" type="text" class="w-20 h-10 text-center text-xl font-black border-2 border-orange-300 rounded-xl outline-none focus:border-orange-500 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            </td>
                                        </tr>
                                        <tr class="bg-orange-100/30">
                                            <td class="py-4 px-6 border-2 border-orange-150 font-black text-slate-600">Độ dài thật (km)</td>
                                            <td class="py-4 px-6 border-2 border-orange-150 animate-pulse">
                                                <input id="94-3-1" type="text" class="w-24 h-10 text-center text-xl font-black border-2 border-orange-300 rounded-xl outline-none focus:border-orange-500 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            </td>
                                            <td class="py-4 px-6 border-2 border-orange-150 animate-pulse">
                                                <input id="94-3-2" type="text" class="w-24 h-10 text-center text-xl font-black border-2 border-orange-300 rounded-xl outline-none focus:border-orange-500 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            </td>
                                            <td class="py-4 px-6 border-2 border-orange-150">40</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="flex justify-end mt-12">
                                <button id="btn-check-94-3" onclick="window.check_94_3()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Bài 4 - Thực hành đo cạnh bàn -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div id="lesson94_b4" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-amber-500 space-y-6">
                            
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                                <h3 class="text-2xl md:text-3xl font-black text-amber-700 uppercase tracking-wide">Bài 4. Thực hành đo và vẽ cạnh bàn (Tỉ lệ 1 : 50)</h3>
                            </div>

                            <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage94('./assets/images/toan/toan_tap_2/94/4.png', 'Bạn Nam đo cạnh bàn')" src="./assets/images/toan/toan_tap_2/94/4.png" alt="Bạn Nam đo cạnh bàn" class="w-full h-auto max-h-[220px] object-contain rounded-2xl border-4 border-slate-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage94('./assets/images/toan/toan_tap_2/94/4.png', 'Bạn Nam đo cạnh bàn')" class="absolute top-3 right-3 bg-amber-600/80 hover:bg-amber-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                            <div class="p-6 bg-amber-50/80 border-2 border-amber-100 rounded-[2rem] text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4">
                                <p class="font-bold text-slate-800">
                                    Em hãy đo độ dài thật của cạnh một bàn học (đơn vị xăng-ti-mét). Sau đó, hãy tính độ dài của đoạn thẳng AB thu nhỏ biểu diễn cạnh bàn đó trên bản đồ tỉ lệ <span class="text-amber-700 font-extrabold">1 : 50</span>.
                                </p>
                                
                                <div class="bg-white p-6 rounded-[1.5rem] border border-amber-100 space-y-4 font-bold text-slate-800">
                                    <div class="space-y-1">
                                        <div class="text-xl md:text-2xl text-slate-800 font-bold leading-relaxed">
                                            <span>1. Độ dài thật của cạnh bàn học em đo được là:</span>
                                        </div>
                                        <div class="flex flex-row items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto pb-2">
                                            <input id="94-4-real" type="text" class="w-28 h-11 text-center text-xl font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-500 bg-white" placeholder="nhập..." style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>cm</span>
                                        </div>
                                    </div>
                                    <div class="space-y-1">
                                        <div class="text-xl md:text-2xl text-slate-800 font-bold leading-relaxed">
                                            <span>2. Trên bản đồ tỉ lệ 1 : 50, độ dài đoạn thẳng AB là:</span>
                                        </div>
                                        <div class="flex flex-row items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto pb-2">
                                            <input id="94-4-map" type="text" class="w-24 h-11 text-center text-xl font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-500 bg-white" placeholder="tính..." style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>cm</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Khu vực hiện bài giải xếp chồng dọc -->
                                <div id="solution-94-4" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Hướng dẫn phương pháp:</p>
                                    <p>• Đo cạnh bàn học thật của em (ví dụ: 100 cm, 120 cm hoặc 150 cm).</p>
                                    <p>• Lấy độ dài thật đó chia cho 50 để được độ dài trên bản đồ tỉ lệ 1 : 50.</p>
                                    <p>• Ví dụ: Nếu bàn dài 150 cm thì đoạn AB trên bản đồ là: 150 : 50 = 3 cm.</p>
                                </div>
                            </div>

                            <!-- Hàng chứa nút bấm: Hiện bài giải bên trái, E bên phải -->
                            <div class="flex justify-end items-center gap-4 mt-12">
                                <button onclick="window.toggleSolution94('4')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-94-4" onclick="window.check_94_4()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        <!-- Script bổ trợ toggle hiện/ẩn bài giải chi tiết cho GV -->
        <script>
            window.toggleSolution94 = (id) => {
                const el = document.getElementById('solution-94-' + id);
                if (el) {
                    el.classList.toggle('hidden');
                }
            };
        </script>
    `,

    "quizPool": [
        { "question": "Bản đồ tỉ lệ 1 : 10 000 000. Đo được 5 cm trên bản đồ thì khoảng cách thật là:", "options": ["500 km", "50 km", "5 000 km", "5 km"], "answer": 0 },
        { "question": "Khoảng cách thật 1 500 m vẽ trên bản đồ tỉ lệ 1 : 3 000 dài bao nhiêu xăng-ti-mét?", "options": ["50 cm", "5 cm", "500 cm", "15 cm"], "answer": 0 },
        { "question": "Khoảng cách thật 1 200 m vẽ trên bản đồ tỉ lệ 1 : 3 000 dài bao nhiêu xăng-ti-mét?", "options": ["40 cm", "4 cm", "400 cm", "12 cm"], "answer": 0 },
        { "question": "Tỉ lệ 1 : 10 000. Đo trên bản đồ được 15 cm thì khoảng cách thật là bao nhiêu ki-lô-mét?", "options": ["1,5 km", "15 km", "150 km", "0,15 km"], "answer": 0 },
        { "question": "Tỉ lệ 1 : 1 000 000. Đo trên bản đồ được 8 cm thì khoảng cách thật là bao nhiêu ki-lô-mét?", "options": ["80 km", "8 km", "800 km", "0,8 km"], "answer": 0 },
        { "question": "Tỉ lệ 1 : 500 000. Khoảng cách thật là 40 km thì khoảng cách trên bản đồ là:", "options": ["8 cm", "80 cm", "0,8 cm", "800 cm"], "answer": 0 },
        { "question": "Đo độ dài thật cạnh bàn là 150 cm. Bản đồ tỉ lệ 1 : 50 thì đoạn AB thu nhỏ dài:", "options": ["3 cm", "30 cm", "5 cm", "15 cm"], "answer": 0 },
        { "question": "Đo độ dài thật cạnh bàn là 100 cm. Bản đồ tỉ lệ 1 : 50 thì đoạn AB thu nhỏ dài:", "options": ["2 cm", "20 cm", "4 cm", "10 cm"], "answer": 0 },
        { "question": "Đổi 40 km ra xăng-ti-mét ta được:", "options": ["4 000 000 cm", "400 000 cm", "40 000 000 cm", "40 000 cm"], "answer": 0 },
        { "question": "Công thức tìm độ dài thật khi biết độ dài trên bản đồ và mẫu số tỉ lệ là:", "options": ["Độ dài trên bản đồ × Mẫu số tỉ lệ", "Độ dài trên bản đồ : Mẫu số tỉ lệ", "Mẫu số tỉ lệ : Độ dài trên bản đồ", "Độ dài trên bản đồ + Mẫu số tỉ lệ"], "answer": 0 },
        { "question": "Bản đồ tỉ lệ 1 : 25 000. Độ dài 4 cm trên bản đồ ứng với độ dài thật là bao nhiêu mét?", "options": ["1 000 m", "100 m", "10 000 m", "250 m"], "answer": 0 },
        { "question": "Độ dài thật là 15 km. Trên bản đồ tỉ lệ 1 : 100 000, độ dài đó là bao nhiêu xăng-ti-mét?", "options": ["15 cm", "1,5 cm", "150 cm", "1500 cm"], "answer": 0 },
        { "question": "Nếu độ dài thật gấp 50 lần độ dài thu nhỏ thì tỉ lệ bản đồ là:", "options": ["1 : 50", "1 : 5", "50 : 1", "1 : 500"], "answer": 0 },
        { "question": "Để tính độ dài thật, bước đầu tiên thường làm là gì?", "options": ["Đổi đơn vị đo cho phù hợp", "Thực hiện phép tính chia", "Vẽ sơ đồ đoạn thẳng", "Đọc lại tỉ số phần trăm"], "answer": 0 },
        { "question": "Bản đồ tỉ lệ 1 : 5 000. Đoạn AB trên bản đồ dài 10 cm thì thực tế dài:", "options": ["500 m", "50 m", "5 000 m", "50 000 m"], "answer": 0 }
    ]
};
