export const lesson170 = {
    period: "170",
    title: "BÀI 74: ÔN TẬP MỘT SỐ YẾU TỐ THỐNG KÊ VÀ XÁC SUẤT (TIẾT 1)",
    topic: "Ôn tập bảng số liệu và biểu đồ",
    week: "34",

    practice: `
        <div class="space-y-10 pb-10">

            <!-- Bài 1: Phân loại hình học theo màu sắc và hình dạng -->
            <div id="lesson170_b1" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-blue-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">1</div>
                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Quan sát biểu đồ và hoàn thành các bảng số liệu</h3>
                </div>
                <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Nam, Việt và Mai cắt giấy được một số hình phẳng đã học rồi tô màu các hình đó. Rô-bốt phân loại và sắp xếp các hình đó theo màu đỏ, vàng, xanh như biểu đồ dưới đây:
                    </p>
                    <img src="assets/images/toan/toan_tap_2/170/170-1-bieu-do-hinh.png" class="max-w-[600px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Biểu đồ phân loại các màu hình">
                    
                    <div class="space-y-4 border-t border-blue-200 pt-4">
                        <p class="font-black text-blue-900 text-lg">a) Xếp loại theo các màu:</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-lg">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Số hình màu Vàng:</span>
                                <input id="170-1-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Số hình màu Xanh:</span>
                                <input id="170-1-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                        </div>

                        <p class="font-black text-blue-900 text-lg border-t border-blue-200 pt-3">b) Xếp loại theo hình dạng:</p>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 font-bold text-lg">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Hình thang:</span>
                                <input id="170-1-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Hình tam giác:</span>
                                <input id="170-1-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Hình vuông:</span>
                                <input id="170-1-5" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                        </div>

                        <p class="font-black text-blue-900 text-lg border-t border-blue-200 pt-3">c) Xếp loại theo hình dạng và màu sắc:</p>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 font-bold text-lg">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Hình tròn màu xanh:</span>
                                <input id="170-1-6" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Hình thang màu vàng:</span>
                                <input id="170-1-7" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Hình vuông màu xanh:</span>
                                <input id="170-1-8" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-170-1').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-170-1" onclick="window.check_170_1()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-170-1" class="hidden bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg font-bold text-blue-900 space-y-1">
                    <p>a) Màu Đỏ: 16 hình; Vàng: <span class="text-emerald-700">14 hình</span>; Xanh: <span class="text-emerald-700">13 hình</span></p>
                    <p>b) Hình tròn: 15; Hình thang: <span class="text-emerald-700">9 hình</span>; Hình tam giác: <span class="text-emerald-700">10 hình</span>; Hình vuông: <span class="text-emerald-700">9 hình</span></p>
                    <p>c) Hình vuông màu đỏ: 4; Hình tròn màu xanh: <span class="text-emerald-700">4 hình</span>; Hình thang màu vàng: <span class="text-emerald-700">4 hình</span>; Hình vuông màu xanh: <span class="text-emerald-700">2 hình</span></p>
                </div>
            </div>

            <!-- Bài 2: Phân loại rác thải -->
            <div id="lesson170_b2" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-emerald-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">2</div>
                    <h3 class="text-xl md:text-2xl font-black text-emerald-700">Bài 2. Phân loại rác thải nhà máy</h3>
                </div>
                <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Từ <span class="font-black text-blue-700">1 tấn (1 000 kg) rác thải</span>, Rô-bốt đã phân loại được <span class="font-black text-blue-700">95 kg rác thuỷ tinh (A)</span>, <span class="font-black text-blue-700">150 kg rác kim loại (B)</span>, <span class="font-black text-blue-700">105 kg rác giấy (C)</span>, <span class="font-black text-blue-700">120 kg rác nhựa (D)</span>.
                    </p>
                    <img src="assets/images/toan/toan_tap_2/170/170-2-phan-loai-rac.png" class="max-w-[400px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Rô-bốt phân loại rác">
                    
                    <div class="space-y-4 border-t border-emerald-200 pt-4">
                        <p class="font-black text-emerald-900 text-lg">a) Hoàn thành bảng cân nặng mỗi loại rác (kg):</p>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 font-bold text-lg">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Loại D (nhựa):</span>
                                <input id="170-2-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Loại B (kim loại):</span>
                                <input id="170-2-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Loại C (giấy):</span>
                                <input id="170-2-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Còn lại:</span>
                                <input id="170-2-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                        </div>

                        <p class="font-black text-emerald-900 text-lg border-t border-emerald-200 pt-3">b) Sắp xếp các loại rác A, B, C, D theo thứ tự từ lớn đến bé:</p>
                        <div class="flex items-center gap-2 flex-wrap font-bold text-lg">
                            <input id="170-2-s1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none uppercase" placeholder="?">
                            <span>></span>
                            <input id="170-2-s2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none uppercase" placeholder="?">
                            <span>></span>
                            <input id="170-2-s3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none uppercase" placeholder="?">
                            <span>></span>
                            <input id="170-2-s4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none uppercase" placeholder="?">
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-170-2').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-170-2" onclick="window.check_170_2()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-170-2" class="hidden bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-lg font-bold text-emerald-900 space-y-1">
                    <p>a) D = 120 kg, B = 150 kg, C = 105 kg.</p>
                    <p>Còn lại: 1 000 − (95 + 150 + 105 + 120) = <span class="text-blue-700">530 kg</span></p>
                    <p>b) Thứ tự từ lớn đến bé: <span class="text-blue-700">B (150 kg) > D (120 kg) > C (105 kg) > A (95 kg)</span></p>
                </div>
            </div>

            <!-- Bài 3: Diện tích trồng cà phê 4 tỉnh -->
            <div id="lesson170_b3" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-amber-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">3</div>
                    <h3 class="text-xl md:text-2xl font-black text-amber-700">Bài 3. Diện tích trồng cà phê 4 tỉnh</h3>
                </div>
                <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Tổng diện tích trồng cà phê của Quảng Ngãi, Gia Lai, Đắk Lắk, Lâm Đồng là <span class="font-black text-blue-700">662 850 ha</span>. Trong đó Quảng Ngãi khoảng <span class="font-black text-blue-700">25 000 ha</span>, Gia Lai khoảng <span class="font-black text-blue-700">105 000 ha</span>, Đắk Lắk khoảng <span class="font-black text-blue-700">213 500 ha</span>, còn lại của Lâm Đồng.
                    </p>
                    <img src="assets/images/toan/toan_tap_2/170/170-3-bieu-do-ca-phe.png" class="max-w-[450px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Biểu đồ cột diện tích cà phê">
                    
                    <div class="space-y-4 border-t border-amber-200 pt-4 font-bold text-lg">
                        <p class="font-black text-amber-900 text-xl">a) Diện tích trồng cà phê của các tỉnh (ha):</p>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Gia Lai:</span>
                                <input id="170-3-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Đắk Lắk:</span>
                                <input id="170-3-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Lâm Đồng:</span>
                                <input id="170-3-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                        </div>

                        <p class="font-black text-amber-900 text-xl border-t border-amber-200 pt-3">b) Trả lời câu hỏi:</p>
                        <div class="space-y-3">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>- Tỉnh có diện tích cà phê nhiều nhất:</span>
                                <input id="170-3-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-36 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>- Tỉnh có diện tích cà phê ít nhất:</span>
                                <input id="170-3-5" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-36 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>- Trung bình mỗi tỉnh trồng khoảng (làm tròn số tự nhiên):</span>
                                <input id="170-3-6" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-36 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                                <span>ha</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-170-3').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-170-3" onclick="window.check_170_3()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-170-3" class="hidden bg-amber-50 p-4 rounded-2xl border border-amber-200 text-lg font-bold text-amber-900 space-y-1">
                    <p>a) Gia Lai: 105 000 ha; Đắk Lắk: 213 500 ha.</p>
                    <p>Lâm Đồng: 662 850 − (25 000 + 105 000 + 213 500) = <span class="text-emerald-700">319 350 ha</span></p>
                    <p>b) Nhiều nhất: <span class="text-emerald-700">Lâm Đồng</span>, Ít nhất: <span class="text-emerald-700">Quảng Ngãi</span></p>
                    <p>Trung bình: 662 850 : 4 = 165 712,5 ≈ <span class="text-emerald-700">165 713 ha</span></p>
                </div>
            </div>

            <!-- Bài 4: Khán giả trận bóng đá & biểu đồ quạt -->
            <div id="lesson170_b4" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-rose-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">4</div>
                    <h3 class="text-xl md:text-2xl font-black text-rose-700">Bài 4. Biểu đồ quạt tròn khán giả bóng đá</h3>
                </div>
                <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Một trận bóng đá có <span class="font-black text-blue-700">20 000 khán giả</span>. Trong đó Khán đài A có <span class="font-black text-blue-700">6 000 khán giả</span>, Khán đài B có <span class="font-black text-blue-700">8 000 khán giả</span>, Khán đài C có <span class="font-black text-blue-700">3 600 khán giả</span>, còn lại ở Khán đài D.
                    </p>
                    <img src="assets/images/toan/toan_tap_2/170/170-4-bieu-do-quat.png" class="max-w-[300px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Biểu đồ quạt tròn">

                    <div class="space-y-4 border-t border-rose-200 pt-4 font-bold text-lg">
                        <p class="font-black text-rose-900 text-xl">a) Số khán giả ở Khán đài B, C, D:</p>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Khán đài B:</span>
                                <input id="170-4-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Khán đài C:</span>
                                <input id="170-4-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Khán đài D:</span>
                                <input id="170-4-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                        </div>

                        <p class="font-black text-rose-900 text-xl border-t border-rose-200 pt-3">b) Tỉ số phần trăm của số khán giả ở mỗi khán đài:</p>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Khán đài A:</span>
                                <input id="170-4-p1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?%">
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Khán đài B:</span>
                                <input id="170-4-p2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?%">
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Khán đài C:</span>
                                <input id="170-4-p3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?%">
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Khán đài D:</span>
                                <input id="170-4-p4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?%">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-170-4').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-170-4" onclick="window.check_170_4()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-170-4" class="hidden bg-rose-50 p-4 rounded-2xl border border-rose-200 text-lg font-bold text-rose-900 space-y-1">
                    <p>a) Khán đài D: 20 000 − (6 000 + 8 000 + 3 600) = <span class="text-emerald-700">2 400 khán giả</span></p>
                    <p>b) Khán đài A: 6 000 : 20 000 × 100 = <span class="text-emerald-700">30%</span></p>
                    <p>Khán đài B: 8 000 : 20 000 × 100 = <span class="text-emerald-700">40%</span></p>
                    <p>Khán đài C: 3 600 : 20 000 × 100 = <span class="text-emerald-700">18%</span></p>
                    <p>Khán đài D: 2 400 : 20 000 × 100 = <span class="text-emerald-700">12%</span></p>
                </div>
            </div>

        </div>
    `,

    quizPool: [
        { question: "Tổng số hình màu Vàng trên biểu đồ bài 1 là?", options: ["14 hình", "16 hình", "13 hình", "15 hình"], answer: 0 },
        { question: "Tổng số hình màu Xanh trên biểu đồ bài 1 là?", options: ["13 hình", "14 hình", "16 hình", "12 hình"], answer: 0 },
        { question: "Tổng số hình tam giác trên biểu đồ bài 1 là?", options: ["10 hình", "9 hình", "15 hình", "8 hình"], answer: 0 },
        { question: "1 tấn rác = 1 000 kg. Lượng rác còn lại chưa phân loại là?", options: ["530 kg", "430 kg", "500 kg", "470 kg"], answer: 0 },
        { question: "Sắp xếp rác A(95), B(150), C(105), D(120) từ lớn đến bé là?", options: ["B > D > C > A", "A > C > D > B", "B > C > D > A", "D > B > C > A"], answer: 0 },
        { question: "Diện tích trồng cà phê tỉnh Lâm Đồng = ?", options: ["319 350 ha", "300 000 ha", "319 000 ha", "213 500 ha"], answer: 0 },
        { question: "Tỉnh có diện tích trồng cà phê lớn nhất là?", options: ["Lâm Đồng", "Đắc Lắk", "Gia Lai", "Quảng Ngãi"], answer: 0 },
        { question: "Trung bình mỗi tỉnh trồng khoảng bao nhiêu ha cà phê?", options: ["165 713 ha", "165 000 ha", "165 712 ha", "170 000 ha"], answer: 0 },
        { question: "Khán đài D có bao nhiêu khán giả?", options: ["2 400 khán giả", "3 600 khán giả", "4 000 khán giả", "2 000 khán giả"], answer: 0 },
        { question: "Tỉ số phần trăm khán giả ở Khán đài A (6 000/20 000) là?", options: ["30%", "40%", "18%", "12%"], answer: 0 },
        { question: "Tỉ số phần trăm khán giả ở Khán đài B (8 000/20 000) là?", options: ["40%", "30%", "20%", "25%"], answer: 0 },
        { question: "Tỉ số phần trăm khán giả ở Khán đài C (3 600/20 000) là?", options: ["18%", "20%", "15%", "12%"], answer: 0 },
        { question: "Tỉ số phần trăm khán giả ở Khán đài D (2 400/20 000) là?", options: ["12%", "18%", "10%", "15%"], answer: 0 },
        { question: "Tổng tỉ số phần trăm của 4 khán đài A, B, C, D là?", options: ["100%", "90%", "95%", "80%"], answer: 0 },
        { question: "Tổng số hình màu Đỏ trên biểu đồ bài 1 là?", options: ["16 hình", "14 hình", "13 hình", "15 hình"], answer: 0 }
    ]
};

window.lesson170 = lesson170;

window.check_170_1 = function() {
    const checks = [
        {id:'170-1-1', ans:['14']},
        {id:'170-1-2', ans:['13']},
        {id:'170-1-3', ans:['9']},
        {id:'170-1-4', ans:['10']},
        {id:'170-1-5', ans:['9']},
        {id:'170-1-6', ans:['4']},
        {id:'170-1-7', ans:['4']},
        {id:'170-1-8', ans:['2']},
    ];
    let correct = 0;
    checks.forEach(c => {
        const el = document.getElementById(c.id);
        if (!el) return;
        const v = el.value.trim().replace(/\s/g,'');
        if (c.ans.includes(v)) { el.classList.add('bg-green-100','border-green-500'); el.classList.remove('bg-red-100','border-red-500'); correct++; }
        else { el.classList.add('bg-red-100','border-red-500'); el.classList.remove('bg-green-100','border-green-500'); }
    });
    const isCorrect = correct === checks.length;
    window.showMathFeedback(isCorrect,
        "a) Vàng: 14, Xanh: 13<br>b) Thang: 9, Tam giác: 10, Vuông: 9<br>c) Tròn xanh: 4, Thang vàng: 4, Vuông xanh: 2",
        "",
        "Gợi ý: Đếm kỹ từng cột màu và từng hình dạng trên biểu đồ.",
        "a) Vàng 14, Xanh 13.<br>b) Thang 9, Tam giác 10, Vuông 9.<br>c) Tròn xanh 4, Thang vàng 4, Vuông xanh 2.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Thống kê màu sắc hình dạng", Math.round(correct/checks.length*100), "btn-check-170-1", 0, checks.length, correct);
};

window.check_170_2 = function() {
    const checks = [
        {id:'170-2-1', ans:['120']},
        {id:'170-2-2', ans:['150']},
        {id:'170-2-3', ans:['105']},
        {id:'170-2-4', ans:['530']},
        {id:'170-2-s1', ans:['B']},
        {id:'170-2-s2', ans:['D']},
        {id:'170-2-s3', ans:['C']},
        {id:'170-2-s4', ans:['A']},
    ];
    let correct = 0;
    checks.forEach(c => {
        const el = document.getElementById(c.id);
        if (!el) return;
        const v = el.value.trim().toUpperCase().replace(/\s/g,'');
        if (c.ans.includes(v)) { el.classList.add('bg-green-100','border-green-500'); el.classList.remove('bg-red-100','border-red-500'); correct++; }
        else { el.classList.add('bg-red-100','border-red-500'); el.classList.remove('bg-green-100','border-green-500'); }
    });
    const isCorrect = correct === checks.length;
    window.showMathFeedback(isCorrect,
        "a) D=120kg, B=150kg, C=105kg, Còn lại=530kg<br>b) B > D > C > A",
        "",
        "Gợi ý: 1 tấn = 1 000 kg. Còn lại = 1000 − (95+150+105+120) = 530 kg.",
        "a) D=120, B=150, C=105. Còn lại: 1000 − 470 = 530 kg.<br>b) B(150) > D(120) > C(105) > A(95).<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Phân loại rác", Math.round(correct/checks.length*100), "btn-check-170-2", 0, checks.length, correct);
};

window.check_170_3 = function() {
    const checks = [
        {id:'170-3-1', ans:['105000','105 000']},
        {id:'170-3-2', ans:['213500','213 500']},
        {id:'170-3-3', ans:['319350','319 350']},
        {id:'170-3-4', ans:['LÂM ĐỒNG','LAM DONG','LÂM DONG']},
        {id:'170-3-5', ans:['QUẢNG NGÃI','QUANG NGAI']},
        {id:'170-3-6', ans:['165713','165 713']},
    ];
    let correct = 0;
    checks.forEach(c => {
        const el = document.getElementById(c.id);
        if (!el) return;
        const v = el.value.trim().toUpperCase().replace(/\s/g,'');
        if (c.ans.includes(v)) { el.classList.add('bg-green-100','border-green-500'); el.classList.remove('bg-red-100','border-red-500'); correct++; }
        else { el.classList.add('bg-red-100','border-red-500'); el.classList.remove('bg-green-100','border-green-500'); }
    });
    const isCorrect = correct === checks.length;
    window.showMathFeedback(isCorrect,
        "a) Gia Lai: 105 000, Đắk Lắk: 213 500, Lâm Đồng: 319 350 ha<br>b) Nhiều nhất: Lâm Đồng, Ít nhất: Quảng Ngãi, TB: 165 713 ha",
        "",
        "Gợi ý: Lâm Đồng = 662 850 − (25000 + 105000 + 213500) = 319 350 ha. Trung bình = 662 850 : 4 = 165 712,5 ≈ 165 713 ha.",
        "a) Lâm Đồng: 319 350 ha.<br>b) Nhiều nhất: Lâm Đồng, Ít nhất: Quảng Ngãi.<br>Trung bình: 165 713 ha.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Cà phê 4 tỉnh", Math.round(correct/checks.length*100), "btn-check-170-3", 0, checks.length, correct);
};

window.check_170_4 = function() {
    const checks = [
        {id:'170-4-1', ans:['8000','8 000']},
        {id:'170-4-2', ans:['3600','3 600']},
        {id:'170-4-3', ans:['2400','2 400']},
        {id:'170-4-p1', ans:['30%','30']},
        {id:'170-4-p2', ans:['40%','40']},
        {id:'170-4-p3', ans:['18%','18']},
        {id:'170-4-p4', ans:['12%','12']},
    ];
    let correct = 0;
    checks.forEach(c => {
        const el = document.getElementById(c.id);
        if (!el) return;
        const v = el.value.trim().replace(/\s/g,'');
        if (c.ans.includes(v)) { el.classList.add('bg-green-100','border-green-500'); el.classList.remove('bg-red-100','border-red-500'); correct++; }
        else { el.classList.add('bg-red-100','border-red-500'); el.classList.remove('bg-green-100','border-green-500'); }
    });
    const isCorrect = correct === checks.length;
    window.showMathFeedback(isCorrect,
        "a) B=8 000, C=3 600, D=2 400 khán giả<br>b) A: 30%, B: 40%, C: 18%, D: 12%",
        "",
        "Gợi ý: Khán đài D = 20 000 − (6000 + 8000 + 3600) = 2 400. Tính tỉ số phần trăm = số khán giả : 20 000 × 100%.",
        "a) D = 2 400 khán giả.<br>b) A: 30%, B: 40%, C: 18%, D: 12%.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Khán giả bóng đá", Math.round(correct/checks.length*100), "btn-check-170-4", 0, checks.length, correct);
};

// import './logic.js';
