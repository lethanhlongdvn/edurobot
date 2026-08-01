// ===================================================================
// Tiết 111 - Bài 47: Mét khối
// DATA: Nội dung slide bài học và quiz pool
// ===================================================================

export const lesson111Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Slide 1: Khám phá mét khối -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-2 border-blue-50 shadow-xl bg-white/80 backdrop-blur-xl space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">🔍</div>
                                <h3 class="text-slate-800 uppercase italic text-xl font-black">Khám phá: Mét khối</h3>
                            </div>

                            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                                <div class="lg:col-span-7 relative flex justify-center w-full mx-auto">
                                    <img onclick="window.zoomImage111('./assets/images/toan/toan_tap_2/111/111-khampha.webp', 'Khám phá Mét khối')" src="./assets/images/toan/toan_tap_2/111/111-khampha.webp" alt="Khám phá Mét khối" class="w-full h-auto object-contain rounded-2xl border-4 border-blue-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                    <button onclick="window.zoomImage111('./assets/images/toan/toan_tap_2/111/111-khampha.webp', 'Khám phá Mét khối')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                    </button>
                                </div>
                                <div class="lg:col-span-5 space-y-4">
                                    <div class="bg-blue-50 p-6 rounded-[2rem] border-2 border-blue-100 space-y-3 text-lg md:text-xl text-slate-700 leading-relaxed font-bold">
                                        <p>• Để đo thể tích người ta còn dùng đơn vị <span class="text-blue-700 font-extrabold">mét khối</span>.</p>
                                        <p>• <span class="text-blue-700 font-extrabold">Mét khối</span> là thể tích của hình lập phương có cạnh dài <span class="text-rose-600 font-extrabold">1 m</span>.</p>
                                        <p>• Mét khối viết tắt là <span class="bg-rose-100 text-rose-700 px-2 py-0.5 rounded font-mono font-black">m³</span>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Quan hệ giữa m3, dm3 và cm3 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-2 border-blue-50 shadow-xl bg-white/80 backdrop-blur-xl space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">📐</div>
                                <h3 class="text-slate-800 uppercase italic text-xl font-black">Mối quan hệ giữa m³, dm³ và cm³</h3>
                            </div>

                            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                                <div class="lg:col-span-6 relative flex justify-center w-full mx-auto">
                                    <img onclick="window.zoomImage111('./assets/images/toan/toan_tap_2/111/111-khampha1.png', 'Mối quan hệ m³, dm³, cm³')" src="./assets/images/toan/toan_tap_2/111/111-khampha1.png" alt="Mối quan hệ m³, dm³, cm³" class="w-full h-auto object-contain rounded-2xl border-4 border-blue-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                    <button onclick="window.zoomImage111('./assets/images/toan/toan_tap_2/111/111-khampha1.png', 'Mối quan hệ m³, dm³, cm³')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                    </button>
                                </div>
                                <div class="lg:col-span-6 space-y-4">
                                    <div class="bg-blue-50 p-6 rounded-[2rem] border-2 border-blue-100 space-y-4 text-lg md:text-xl text-slate-700 leading-relaxed">
                                        <p class="font-bold text-slate-800">Hình lập phương cạnh <span class="text-blue-700">1 m</span> gồm <span class="text-blue-700">1 000</span> hình lập phương cạnh <span class="text-blue-700">1 dm</span>.</p>
                                        <div class="bg-white p-4 rounded-xl border border-blue-200 font-extrabold text-blue-800 space-y-2 text-center text-xl shadow-sm">
                                            <p>1 m³ = 1 000 dm³</p>
                                            <p>1 m³ = 1 000 000 cm³</p>
                                        </div>
                                        <div class="bg-amber-50 p-4 rounded-xl border border-amber-200 font-bold text-amber-900 space-y-2 text-lg italic shadow-sm">
                                            <p>1 dm³ = <span class="inline-flex flex-col items-center justify-center align-middle mx-1 font-bold text-slate-700"><span class="border-b border-slate-700 px-1 leading-none">1</span><span class="leading-none">1 000</span></span> m³ = 0,001 m³</p>
                                            <p>1 cm³ = <span class="inline-flex flex-col items-center justify-center align-middle mx-1 font-bold text-slate-700"><span class="border-b border-slate-700 px-1 leading-none">1</span><span class="leading-none">1 000 000</span></span> m³ = 0,000001 m³</p>
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

                    <!-- Slide 1: Bài 1 - Đọc số đo thể tích của mỗi bể bơi -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4 mb-4">
                                    <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                    <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 1. Đọc số đo thể tích của mỗi bể bơi dưới đây</h3>
                                </div>

                            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <!-- Bể bơi 1 -->
                                <div class="bg-blue-50/50 p-5 rounded-3xl border border-blue-100 flex flex-col items-center gap-4 shadow-sm">
                                    <div class="relative flex justify-center w-full max-w-[240px]">
                                        <img onclick="window.zoomImage111('./assets/images/toan/toan_tap_2/111/111-1-1.png', 'Bể bơi phao 1,25 m³')" src="./assets/images/toan/toan_tap_2/111/111-1-1.png" alt="Bể bơi phao 1,25 m³" class="w-full h-32 object-contain rounded-xl border border-blue-200">
                                    </div>
                                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-xl text-lg font-black">1,25 m³</span>
                                    <textarea id="111-1-1" rows="2" class="w-full p-3 border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white font-bold text-center text-lg" style="padding: 12px !important;" placeholder="Nhập cách đọc..."></textarea>
                                </div>

                                <!-- Bể bơi 2 -->
                                <div class="bg-blue-50/50 p-5 rounded-3xl border border-blue-100 flex flex-col items-center gap-4 shadow-sm">
                                    <div class="relative flex justify-center w-full max-w-[240px]">
                                        <img onclick="window.zoomImage111('./assets/images/toan/toan_tap_2/111/111-1-2.png', 'Bể bơi trường học 300 m³')" src="./assets/images/toan/toan_tap_2/111/111-1-2.png" alt="Bể bơi trường học 300 m³" class="w-full h-32 object-contain rounded-xl border border-blue-200">
                                    </div>
                                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-xl text-lg font-black">300 m³</span>
                                    <textarea id="111-1-2" rows="2" class="w-full p-3 border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white font-bold text-center text-lg" style="padding: 12px !important;" placeholder="Nhập cách đọc..."></textarea>
                                </div>

                                <!-- Bể bơi 3 -->
                                <div class="bg-blue-50/50 p-5 rounded-3xl border border-blue-100 flex flex-col items-center gap-4 shadow-sm">
                                    <div class="relative flex justify-center w-full max-w-[240px]">
                                        <img onclick="window.zoomImage111('./assets/images/toan/toan_tap_2/111/111-1-3.png', 'Bể bơi lớn 1 875 m³')" src="./assets/images/toan/toan_tap_2/111/111-1-3.png" alt="Bể bơi lớn 1 875 m³" class="w-full h-32 object-contain rounded-xl border border-blue-200">
                                    </div>
                                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-xl text-lg font-black">1 875 m³</span>
                                    <textarea id="111-1-3" rows="2" class="w-full p-3 border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white font-bold text-center text-lg" style="padding: 12px !important;" placeholder="Nhập cách đọc..."></textarea>
                                </div>
                            </div>

                             <!-- Lời giải ẩn cho giáo viên -->
                             <div id="sol-111-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                 <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                 • 1,25 m³: Một phẩy hai mươi lăm mét khối (hoặc một phẩy hai lăm mét khối).<br>
                                 • 300 m³: Ba trăm mét khối.<br>
                                 • 1 875 m³: Một nghìn tám trăm bảy mươi lăm mét khối (hoặc một ngàn tám trăm bảy mươi lăm mét khối).
                             </div>
                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-111-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-check-111-1" onclick="window.check_111_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 - Số? (Honeycomb honeycomb honeycomb layout) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-amber-500 space-y-6">
                            <div class="flex items-center gap-4 mb-4">
                                    <div class="w-14 h-14 md:w-16 md:h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                    <h3 class="text-2xl md:text-3xl font-black text-amber-700 uppercase">Bài 2. Số?</h3>
                                </div>

                            <div class="p-6 bg-amber-50/50 border-2 border-amber-100 rounded-[2rem] max-w-2xl mx-auto">
                                <div class="bg-white p-6 rounded-3xl border border-amber-200 space-y-4 font-bold text-slate-800 text-xl">
                                    <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>a) 3 m³ =</span>
                                        <span class="inline-flex items-center flex-nowrap gap-1">
                                            <input id="111-2-1" type="text" class="w-32 h-11 text-center font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>dm³</span>
                                        </span>
                                    </div>

                                    <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>b) 1,7 m³ =</span>
                                        <span class="inline-flex items-center flex-nowrap gap-1">
                                            <input id="111-2-2" type="text" class="w-32 h-11 text-center font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>dm³</span>
                                        </span>
                                    </div>

                                    <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>c) 25 m³ =</span>
                                        <span class="inline-flex items-center flex-nowrap gap-1">
                                            <input id="111-2-4" type="text" class="w-36 h-11 text-center font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>cm³</span>
                                        </span>
                                    </div>

                                    <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>d) 2 400 dm³ =</span>
                                        <span class="inline-flex items-center flex-nowrap gap-1">
                                            <input id="111-2-3" type="text" class="w-32 h-11 text-center font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>m³</span>
                                        </span>
                                    </div>

                                    <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>e) <span class="inline-flex flex-col items-center justify-center align-middle mx-1 font-bold text-slate-800"><span class="border-b border-slate-800 px-1 leading-none">1</span><span class="leading-none">4</span></span> m³ =</span>
                                        <span class="inline-flex items-center flex-nowrap gap-1">
                                            <input id="111-2-5" type="text" class="w-32 h-11 text-center font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>dm³</span>
                                        </span>
                                    </div>

                                    <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>f) 800 000 cm³ =</span>
                                        <span class="inline-flex items-center flex-nowrap gap-1">
                                            <input id="111-2-6" type="text" class="w-32 h-11 text-center font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>m³</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                             <!-- Lời giải ẩn cho giáo viên -->
                             <div id="sol-111-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                 <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                 a) 3 m³ = 3 000 dm³<br>
                                 b) 1,7 m³ = 1 700 dm³<br>
                                 c) 25 m³ = 25 000 000 cm³<br>
                                 d) 2 400 dm³ = 2,4 m³<br>
                                 e) 1/4 m³ = 250 dm³<br>
                                 f) 800 000 cm³ = 0,8 m³
                             </div>
                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-111-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-check-111-2" onclick="window.check_111_2()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 - Giải bài toán thùng xe tải -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase">Bài 3. Giải bài toán thực tế</h3>
                            </div>

                            <div class="p-6 bg-emerald-50/80 border-2 border-emerald-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <p class="font-bold text-slate-800">
                                    Một thùng xe tải có thể tích là <span class="text-emerald-700 font-extrabold">33,2 m³</span>, lượng hàng hoá trên thùng xe chiếm <span class="text-emerald-700 font-extrabold">80%</span> thể tích của thùng xe. Tính thể tích phần còn trống trong thùng xe.
                                </p>

                                <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto font-bold text-slate-800 text-xl bg-white p-6 rounded-3xl border border-emerald-150">
                                    <span>Thể tích phần còn trống là:</span>
                                    <span class="inline-flex items-center flex-nowrap gap-1">
                                        <input id="111-3" type="text" class="w-32 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>m³</span>
                                    </span>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="sol-111-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                    <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                    Tỉ số phần trăm thể tích phần còn trống là:<br>
                                    100% − 80% = 20%<br><br>
                                    Thể tích phần còn trống trong thùng xe là:<br>
                                    33,2 × 20 : 100 = 6,64 (m³)<br><br>
                                    Đáp số: 6,64 m³.
                                </div>
                            </div>
                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-111-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-check-111-3" onclick="window.check_111_3()" class="w-16 h-16 md:w-20 md:h-20 bg-emerald-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
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
