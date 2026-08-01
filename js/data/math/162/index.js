export const lesson162 = {
    period: "162",
    title: "BÀI 71: ÔN TẬP HÌNH HỌC (TIẾT 1)",
    topic: "Ôn tập hình học",
    week: "33",

    content: `
        <div class="space-y-8 animate-fade-in pb-10">
            <!-- Card Tiêu đề & Tổng quan -->
            <div class="bg-gradient-to-br from-blue-50 to-sky-50 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-4 border-blue-200 shadow-xl relative overflow-hidden">
                <div class="relative z-10 space-y-6">
                    <div class="flex items-center justify-center gap-3">
                        <span class="text-3xl md:text-4xl">📐</span>
                        <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide text-center">TÌM HIỂU BÀI: ÔN TẬP CÔNG THỨC HÌNH HỌC</h3>
                    </div>

                    <!-- Grid 4 hình chính -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 font-bold">
                        
                        <!-- 1. Hình chữ nhật & Hình vuông -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-blue-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-black text-xl">1</div>
                                <h4 class="font-black text-blue-700 text-xl md:text-2xl">Hình chữ nhật & Hình vuông</h4>
                            </div>
                            <div class="space-y-2 text-sm md:text-base text-gray-700">
                                <p class="font-black text-blue-800">1. Hình chữ nhật (chiều dài a, chiều rộng b):</p>
                                <p>• Chu vi: <span class="font-black text-blue-700">P = (a + b) × 2</span></p>
                                <p>• Diện tích: <span class="font-black text-blue-700">S = a × b</span></p>
                                <p class="font-black text-blue-800 mt-2">2. Hình vuông (cạnh a):</p>
                                <p>• Chu vi: <span class="font-black text-blue-700">P = a × 4</span></p>
                                <p>• Diện tích: <span class="font-black text-blue-700">S = a × a</span></p>
                            </div>
                        </div>

                        <!-- 2. Hình tam giác & Hình thang -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-emerald-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-black text-xl">2</div>
                                <h4 class="font-black text-emerald-700 text-xl md:text-2xl">Hình tam giác & Hình thang</h4>
                            </div>
                            <div class="space-y-2 text-sm md:text-base text-gray-700">
                                <p class="font-black text-emerald-800">1. Hình tam giác (đáy a, chiều cao h):</p>
                                <p>• Diện tích: <span class="font-black text-emerald-700">S = a × h : 2</span></p>
                                <p class="font-black text-emerald-800 mt-2">2. Hình thang (đáy lớn a, đáy bé b, chiều cao h):</p>
                                <p>• Diện tích: <span class="font-black text-emerald-700">S = (a + b) × h : 2</span></p>
                            </div>
                        </div>

                        <!-- 3. Hình tròn -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-amber-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-black text-xl">3</div>
                                <h4 class="font-black text-amber-700 text-xl md:text-2xl">Hình tròn</h4>
                            </div>
                            <div class="space-y-2 text-sm md:text-base text-gray-700">
                                <p class="font-black text-amber-800">Bán kính r, đường kính d (d = 2 × r):</p>
                                <p>• Chu vi: <span class="font-black text-amber-700">C = 3,14 × r × 2</span> (hoặc C = 3,14 × d)</p>
                                <p>• Diện tích: <span class="font-black text-amber-700">S = 3,14 × r × r</span></p>
                            </div>
                        </div>

                        <!-- 4. Kỹ năng ghép & cắt hình thực tế -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-rose-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-rose-100 text-rose-700 rounded-full flex items-center justify-center font-black text-xl">4</div>
                                <h4 class="font-black text-rose-700 text-xl md:text-2xl">Ứng dụng cắt ghép hình</h4>
                            </div>
                            <div class="space-y-2 text-sm md:text-base text-gray-700">
                                <p class="font-black text-rose-800">Cắt hình tròn to nhất từ bìa vuông cạnh a:</p>
                                <p>• Đường kính hình tròn <span class="font-black">d = a</span> (bán kính <span class="font-black">r = a : 2</span>).</p>
                                <p>• Diện tích phần bìa thừa = <span class="font-black text-rose-700">S_vuông − S_tròn</span>.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="-mx-4 md:-mx-8 mt-2 -mb-8">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Slide 1: Bài 1 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson162_b1" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">1</div>
                                <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Hoàn thành công thức tính chu vi, diện tích hình chữ nhật, hình vuông</h3>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <!-- Hình chữ nhật -->
                                <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-4 text-center md:text-left">
                                    <img src="assets/images/toan/toan_tap_2/162/162-1a1.png" class="h-28 md:h-32 object-contain mx-auto rounded-lg mb-2" alt="Hình chữ nhật">
                                    <p class="font-black text-blue-700 text-lg border-b border-blue-200 pb-2">Hình chữ nhật (dài a, rộng b)</p>
                                    <div class="flex items-center justify-center md:justify-start gap-3 flex-wrap text-xl font-bold">
                                        <span>P = (</span>
                                        <input id="162-1-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-blue-300 rounded-lg font-bold outline-none" placeholder="?">
                                        <span>+</span>
                                        <input id="162-1-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-blue-300 rounded-lg font-bold outline-none" placeholder="?">
                                        <span>) × 2</span>
                                    </div>
                                    <div class="flex items-center justify-center md:justify-start gap-3 flex-wrap text-xl font-bold">
                                        <span>S =</span>
                                        <input id="162-1-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-blue-300 rounded-lg font-bold outline-none" placeholder="?">
                                        <span>×</span>
                                        <input id="162-1-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-blue-300 rounded-lg font-bold outline-none" placeholder="?">
                                    </div>
                                </div>
                                <!-- Hình vuông -->
                                <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-4 text-center md:text-left">
                                    <img src="assets/images/toan/toan_tap_2/162/162-1a2.png" class="h-28 md:h-32 object-contain mx-auto rounded-lg mb-2" alt="Hình vuông">
                                    <p class="font-black text-emerald-700 text-lg border-b border-emerald-200 pb-2">Hình vuông (cạnh a)</p>
                                    <div class="flex items-center justify-center md:justify-start gap-3 flex-wrap text-xl font-bold">
                                        <span>P =</span>
                                        <input id="162-1-5" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-lg font-bold outline-none" placeholder="?">
                                        <span>× 4</span>
                                    </div>
                                    <div class="flex items-center justify-center md:justify-start gap-3 flex-wrap text-xl font-bold">
                                        <span>S =</span>
                                        <input id="162-1-6" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-lg font-bold outline-none" placeholder="?">
                                        <span>×</span>
                                        <input id="162-1-7" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-lg font-bold outline-none" placeholder="?">
                                    </div>
                                </div>
                            </div>
                            <!-- Bài 1b: Số? -->
                            <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-4">
                                <p class="font-black text-blue-700"><span class="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-200 rounded text-sm">Số ?</span> b) Bài toán thực tế</p>
                                <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                                    Một mảnh vườn trồng hoa dạng hình vuông có cạnh <span class="font-black text-blue-700">60 m</span>, một mảnh vườn trồng rau dạng hình chữ nhật có <span class="font-black text-blue-700">chiều dài gấp đôi chiều rộng</span>. Biết chu vi của hai mảnh vườn bằng nhau.
                                </p>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label class="block font-bold text-blue-900 mb-1">Diện tích mảnh vườn trồng hoa (m²):</label>
                                        <input id="162-1-b1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-full h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                                    </div>
                                    <div>
                                        <label class="block font-bold text-blue-900 mb-1">Diện tích mảnh vườn trồng rau (m²):</label>
                                        <input id="162-1-b2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-full h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-162-1').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-162-1" onclick="window.check_162_1()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-162-1" class="hidden bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg font-bold text-blue-900 space-y-1">
                                <p>Công thức HCN: P = (a + b) × 2; S = a × b</p>
                                <p>Công thức HV: P = a × 4; S = a × a</p>
                                <p>b) Chu vi vườn hoa: 60 × 4 = 240 m. Vườn rau chu vi 240 m, dài gấp đôi rộng.</p>
                                <p>240 : 2 = 120 = (dài + rộng). Chiều rộng = 120 : 3 = 40 m, chiều dài = 80 m.</p>
                                <p>Diện tích vườn hoa: 60 × 60 = <span class="text-emerald-700">3 600 m²</span></p>
                                <p>Diện tích vườn rau: 80 × 40 = <span class="text-emerald-700">3 200 m²</span></p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson162_b2" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-emerald-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">2</div>
                                <h3 class="text-xl md:text-2xl font-black text-emerald-700">Bài 2. Hoàn thành công thức tính diện tích hình tam giác, hình thang</h3>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <!-- Tam giác -->
                                <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-4 text-center md:text-left">
                                    <img src="assets/images/toan/toan_tap_2/162/162-2a1.png" class="h-28 md:h-32 object-contain mx-auto rounded-lg mb-2" alt="Hình tam giác">
                                    <p class="font-black text-emerald-700 text-lg border-b border-emerald-200 pb-2">Hình tam giác (đáy a, cao h)</p>
                                    <div class="flex items-center justify-center md:justify-start gap-3 flex-wrap text-xl font-bold">
                                        <span>S =</span>
                                        <input id="162-2-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-lg font-bold outline-none" placeholder="?">
                                        <span>×</span>
                                        <input id="162-2-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-lg font-bold outline-none" placeholder="?">
                                        <span>: 2</span>
                                    </div>
                                </div>
                                <!-- Hình thang -->
                                <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4 text-center md:text-left">
                                    <img src="assets/images/toan/toan_tap_2/162/162-2a2.png" class="h-28 md:h-32 object-contain mx-auto rounded-lg mb-2" alt="Hình thang">
                                    <p class="font-black text-amber-700 text-lg border-b border-amber-200 pb-2">Hình thang (đáy a, b; cao h)</p>
                                    <div class="flex items-center justify-center md:justify-start gap-3 flex-wrap text-xl font-bold">
                                        <span>S = (</span>
                                        <input id="162-2-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-amber-300 rounded-lg font-bold outline-none" placeholder="?">
                                        <span>+</span>
                                        <input id="162-2-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-amber-300 rounded-lg font-bold outline-none" placeholder="?">
                                        <span>) ×</span>
                                        <input id="162-2-5" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-amber-300 rounded-lg font-bold outline-none" placeholder="?">
                                        <span>: 2</span>
                                    </div>
                                </div>
                            </div>
                            <!-- Bài 2b: Đất hình thang -->
                            <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-4">
                                <p class="font-black text-emerald-700"><span class="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-200 rounded text-sm">Số ?</span> b) Bài toán thực tế</p>
                                <div class="flex flex-col md:flex-row items-center gap-4">
                                    <div class="flex-1 space-y-2">
                                        <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                                            Có một mảnh đất dạng hình thang với kích thước như hình bên (A→B = 30 m, D→C = 50 m, chiều cao DH = 25 m).
                                        </p>
                                    </div>
                                    <img src="assets/images/toan/toan_tap_2/162/162-2b.png" class="h-32 md:h-40 object-contain rounded-xl shadow border-2 border-emerald-300" alt="Mảnh đất hình thang ABCD">
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label class="block font-bold text-emerald-900 mb-1">Diện tích hình tam giác ACD (m²):</label>
                                        <input id="162-2-b1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-full h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                                    </div>
                                    <div>
                                        <label class="block font-bold text-emerald-900 mb-1">Diện tích hình thang ABCD (m²):</label>
                                        <input id="162-2-b2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-full h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-162-2').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-162-2" onclick="window.check_162_2()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-162-2" class="hidden bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-lg font-bold text-emerald-900 space-y-1">
                                <p>Công thức tam giác: S = a × h : 2</p>
                                <p>Công thức hình thang: S = (a + b) × h : 2</p>
                                <p>b) Tam giác ACD: đáy DC = 50 m, cao = 25 m. S = 50 × 25 : 2 = <span class="text-blue-700">625 m²</span></p>
                                <p>Hình thang ABCD: đáy AB = 30, DC = 50, cao = 25. S = (30 + 50) × 25 : 2 = <span class="text-blue-700">1 000 m²</span></p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson162_b3" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-amber-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">3</div>
                                <h3 class="text-xl md:text-2xl font-black text-amber-700">Bài 3. Hoàn thành công thức tính chu vi, diện tích hình tròn</h3>
                            </div>
                            <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4">
                                <div class="flex flex-col md:flex-row items-center gap-4 border-b border-amber-200 pb-3">
                                    <img src="assets/images/toan/toan_tap_2/162/162-3a.png" class="h-28 md:h-32 object-contain rounded-lg" alt="Hình tròn bán kính r">
                                    <p class="font-black text-amber-700 text-lg">a) Công thức (r = bán kính)</p>
                                </div>
                                <div class="flex items-center gap-3 flex-wrap text-xl font-bold">
                                    <span>C = 3,14 ×</span>
                                    <input id="162-3-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-amber-300 rounded-lg font-bold outline-none" placeholder="?">
                                    <span>× 2</span>
                                </div>
                                <div class="flex items-center gap-3 flex-wrap text-xl font-bold">
                                    <span>S = 3,14 ×</span>
                                    <input id="162-3-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-amber-300 rounded-lg font-bold outline-none" placeholder="?">
                                    <span>×</span>
                                    <input id="162-3-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-amber-300 rounded-lg font-bold outline-none" placeholder="?">
                                </div>
                            </div>
                            <!-- Đĩa sứ đường kính 24 cm -->
                            <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4">
                                <p class="font-black text-amber-700"><span class="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-200 rounded text-sm">Số ?</span> b) Đĩa sứ đường kính 24 cm</p>
                                <div class="flex flex-col md:flex-row items-center gap-4">
                                    <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label class="block font-bold text-amber-900 mb-1">Chu vi đĩa sứ (cm):</label>
                                            <div class="flex items-center gap-2 flex-wrap">
                                                <input id="162-3-b1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                                                <span class="font-bold">cm</span>
                                            </div>
                                        </div>
                                        <div>
                                            <label class="block font-bold text-amber-900 mb-1">Diện tích đĩa sứ (cm²):</label>
                                            <div class="flex items-center gap-2 flex-wrap">
                                                <input id="162-3-b2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                                                <span class="font-bold">cm²</span>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="assets/images/toan/toan_tap_2/162/162-3b.png" class="h-32 md:h-36 object-contain rounded-2xl shadow border-2 border-amber-300" alt="Đĩa sứ">
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-162-3').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-162-3" onclick="window.check_162_3()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-162-3" class="hidden bg-amber-50 p-4 rounded-2xl border border-amber-200 text-lg font-bold text-amber-900 space-y-1">
                                <p>Công thức: C = 3,14 × r × 2; S = 3,14 × r × r</p>
                                <p>Đường kính 24 cm → bán kính = 12 cm</p>
                                <p>Chu vi: 3,14 × 12 × 2 = <span class="text-emerald-700">75,36 cm</span></p>
                                <p>Diện tích: 3,14 × 12 × 12 = <span class="text-emerald-700">452,16 cm²</span></p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Bài 4 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson162_b4" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-rose-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">4</div>
                                <h3 class="text-xl md:text-2xl font-black text-rose-700">Bài 4. Giải bài toán</h3>
                            </div>
                            <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-4">
                                <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                                    Từ miếng bìa hình vuông cạnh <span class="font-black text-blue-700">20 cm</span>, Mai muốn cắt ra một hình tròn to nhất có thể. Rô-bốt đã giúp Mai cắt được hình tròn như hình bên.
                                </p>
                                <img src="assets/images/toan/toan_tap_2/162/162-4.png" class="max-w-[300px] w-full mx-auto rounded-2xl shadow border-4 border-white" alt="Miếng bìa vuông cắt hình tròn">
                                <div class="space-y-3">
                                    <p class="text-lg font-bold text-gray-700">a) Tính chu vi miếng bìa hình tròn:</p>
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <input id="162-4-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                                        <span class="font-bold">cm</span>
                                    </div>
                                    <p class="text-lg font-bold text-gray-700">b) Tính diện tích phần bìa còn lại ở hình vuông:</p>
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <input id="162-4-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-40 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                                        <span class="font-bold">cm²</span>
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-162-4').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-162-4" onclick="window.check_162_4()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-162-4" class="hidden bg-rose-50 p-4 rounded-2xl border border-rose-200 text-lg font-bold text-rose-900 space-y-1">
                                <p>Hình tròn to nhất: đường kính = cạnh hình vuông = 20 cm → r = 10 cm.</p>
                                <p>a) Chu vi: 3,14 × 10 × 2 = <span class="text-emerald-700">62,8 cm</span></p>
                                <p>b) S hình vuông: 20 × 20 = 400 cm². S hình tròn: 3,14 × 10 × 10 = 314 cm².</p>
                                <p>Phần bìa còn lại: 400 − 314 = <span class="text-emerald-700">86 cm²</span></p>
                                <p>Chúc mừng em đã giải đúng!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,

    quizPool: [
        { question: "Chu vi hình chữ nhật (a=8, b=5) = ?", options: ["26", "40", "13", "16"], answer: 0 },
        { question: "Diện tích hình chữ nhật (a=8, b=5) = ?", options: ["40", "26", "13", "80"], answer: 0 },
        { question: "Chu vi hình vuông cạnh 6 cm = ?", options: ["24 cm", "36 cm", "12 cm", "6 cm"], answer: 0 },
        { question: "Diện tích hình vuông cạnh 6 cm = ?", options: ["36 cm²", "24 cm²", "12 cm²", "6 cm²"], answer: 0 },
        { question: "Diện tích tam giác đáy 10, cao 8 = ?", options: ["40", "80", "20", "90"], answer: 0 },
        { question: "Diện tích hình thang đáy 6, 4, cao 5 = ?", options: ["25", "50", "15", "60"], answer: 0 },
        { question: "Tam giác ACD (đáy 50, cao 25): S = ?", options: ["625 m²", "1 250 m²", "312,5 m²", "500 m²"], answer: 0 },
        { question: "Hình thang ABCD (AB=30, DC=50, h=25): S = ?", options: ["1 000 m²", "2 000 m²", "500 m²", "750 m²"], answer: 0 },
        { question: "Công thức tính chu vi hình tròn là?", options: ["C = 3,14 × r × 2", "C = 3,14 × r × r", "C = 3,14 × d × d", "C = r × 2"], answer: 0 },
        { question: "Đĩa sứ đường kính 24 cm có chu vi là?", options: ["75,36 cm", "452,16 cm", "24 cm", "48 cm"], answer: 0 },
        { question: "Đĩa sứ đường kính 24 cm có bán kính là?", options: ["12 cm", "24 cm", "48 cm", "6 cm"], answer: 0 },
        { question: "Diện tích đĩa sứ (đường kính 24) = ?", options: ["452,16 cm²", "75,36 cm²", "144 cm²", "576 cm²"], answer: 0 },
        { question: "Hình tròn to nhất cắt từ bìa vuông cạnh 20 cm có r = ?", options: ["10 cm", "20 cm", "5 cm", "40 cm"], answer: 0 },
        { question: "Chu vi hình tròn (r=10) = ?", options: ["62,8 cm", "314 cm", "31,4 cm", "628 cm"], answer: 0 },
        { question: "Phần bìa hình vuông còn lại (sau khi cắt hình tròn r=10) = ?", options: ["86 cm²", "314 cm²", "400 cm²", "86 m²"], answer: 0 }
    ]
};

window.lesson162 = lesson162;

window.check_162_1 = function() {
    const checks = [
        {id:'162-1-1', ans:['a']},
        {id:'162-1-2', ans:['b']},
        {id:'162-1-3', ans:['a']},
        {id:'162-1-4', ans:['b']},
        {id:'162-1-5', ans:['a']},
        {id:'162-1-6', ans:['a']},
        {id:'162-1-7', ans:['a']},
        {id:'162-1-b1', ans:['3600','3 600']},
        {id:'162-1-b2', ans:['3200','3 200']},
    ];
    let correct = 0;
    checks.forEach(c => {
        const el = document.getElementById(c.id);
        if (!el) return;
        const v = el.value.trim().toLowerCase().replace(/\s/g,'');
        if (c.ans.includes(v)) { el.classList.add('bg-green-100','border-green-500'); el.classList.remove('bg-red-100','border-red-500'); correct++; }
        else { el.classList.add('bg-red-100','border-red-500'); el.classList.remove('bg-green-100','border-green-500'); }
    });
    const isCorrect = correct === checks.length;
    window.showMathFeedback(isCorrect,
        "HCN: P = (a + b) × 2; S = a × b<br>HV: P = a × 4; S = a × a<br>b) Vườn hoa: 3 600 m²; Vườn rau: 3 200 m²",
        "",
        "Gợi ý: Nhớ lại công thức chu vi và diện tích hình chữ nhật, hình vuông. Dùng chu vi bằng nhau để tìm kích thước vườn rau.",
        "P HV = 60 × 4 = 240 m. Vườn rau: (dài+rộng) = 120 m, dài=2×rộng → rộng=40, dài=80.<br>S hoa: 60×60=3 600 m²; S rau: 80×40=3 200 m².<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Hình chữ nhật, hình vuông", Math.round(correct/checks.length*100), "btn-check-162-1", 0, checks.length, correct);
};

window.check_162_2 = function() {
    const checks = [
        {id:'162-2-1', ans:['a']},
        {id:'162-2-2', ans:['h']},
        {id:'162-2-3', ans:['a']},
        {id:'162-2-4', ans:['b']},
        {id:'162-2-5', ans:['h']},
        {id:'162-2-b1', ans:['625']},
        {id:'162-2-b2', ans:['1000','1 000']},
    ];
    let correct = 0;
    checks.forEach(c => {
        const el = document.getElementById(c.id);
        if (!el) return;
        const v = el.value.trim().toLowerCase().replace(/\s/g,'');
        if (c.ans.includes(v)) { el.classList.add('bg-green-100','border-green-500'); el.classList.remove('bg-red-100','border-red-500'); correct++; }
        else { el.classList.add('bg-red-100','border-red-500'); el.classList.remove('bg-green-100','border-green-500'); }
    });
    const isCorrect = correct === checks.length;
    window.showMathFeedback(isCorrect,
        "Tam giác: S = a × h : 2<br>Hình thang: S = (a + b) × h : 2<br>b) ACD: 625 m²; ABCD: 1 000 m²",
        "",
        "Gợi ý: Nhớ lại công thức diện tích tam giác và hình thang. Xác định đáy và chiều cao từ hình vẽ.",
        "S tam giác ACD = 50 × 25 : 2 = 625 m².<br>S hình thang ABCD = (30 + 50) × 25 : 2 = 1 000 m².<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Hình tam giác, hình thang", Math.round(correct/checks.length*100), "btn-check-162-2", 0, checks.length, correct);
};

window.check_162_3 = function() {
    const checks = [
        {id:'162-3-1', ans:['r']},
        {id:'162-3-2', ans:['r']},
        {id:'162-3-3', ans:['r']},
        {id:'162-3-b1', ans:['75,36','75.36']},
        {id:'162-3-b2', ans:['452,16','452.16']},
    ];
    let correct = 0;
    checks.forEach(c => {
        const el = document.getElementById(c.id);
        if (!el) return;
        const v = el.value.trim().toLowerCase().replace(/\s/g,'');
        if (c.ans.includes(v)) { el.classList.add('bg-green-100','border-green-500'); el.classList.remove('bg-red-100','border-red-500'); correct++; }
        else { el.classList.add('bg-red-100','border-red-500'); el.classList.remove('bg-green-100','border-green-500'); }
    });
    const isCorrect = correct === checks.length;
    window.showMathFeedback(isCorrect,
        "C = 3,14 × r × 2; S = 3,14 × r × r<br>b) C = 75,36 cm; S = 452,16 cm²",
        "",
        "Gợi ý: Đường kính 24 cm → bán kính = 12 cm. Áp dụng công thức chu vi và diện tích hình tròn.",
        "r = 12 cm. C = 3,14 × 12 × 2 = 75,36 cm. S = 3,14 × 12 × 12 = 452,16 cm².<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Hình tròn", Math.round(correct/checks.length*100), "btn-check-162-3", 0, checks.length, correct);
};

window.check_162_4 = function() {
    const v1 = document.getElementById('162-4-1')?.value.trim().replace(',','.').replace(/\s/g,'') || '';
    const v2 = document.getElementById('162-4-2')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = (v1 === '62.8' && v2 === '86');
    window.showMathFeedback(isCorrect,
        "a) 62,8 cm<br>b) 86 cm²",
        "",
        "Gợi ý: Hình tròn to nhất có đường kính = cạnh hình vuông = 20 cm → r = 10 cm.",
        "C = 3,14 × 10 × 2 = 62,8 cm.<br>S vuông = 400 cm². S tròn = 314 cm². Phần còn lại: 400 − 314 = 86 cm².<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Miếng bìa hình tròn", isCorrect?100:0, "btn-check-162-4", 0, 1, isCorrect?1:0);
};
