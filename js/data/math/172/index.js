export const lesson172 = {
    period: "172",
    title: "BÀI 75: ÔN TẬP CHUNG (TIẾT 1)",
    topic: "Ôn tập số tự nhiên và số thập phân",
    week: "35",

    content: `
        <div class="space-y-8 animate-fade-in pb-10">
            <!-- Card Tiêu đề & Tổng quan -->
            <div class="bg-gradient-to-br from-blue-50 to-sky-50 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-4 border-blue-200 shadow-xl relative overflow-hidden">
                <div class="relative z-10 space-y-6">
                    <div class="flex items-center justify-center gap-3">
                        <span class="text-3xl md:text-4xl">🔢</span>
                        <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide text-center">TÌM HIỂU BÀI: ÔN TẬP SỐ TỰ NHIÊN VÀ SỐ THẬP PHÂN</h3>
                    </div>

                    <!-- Grid 4 chủ đề chính -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 font-bold">
                        
                        <!-- 1. Cấu tạo số tự nhiên -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-blue-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-black text-xl">1</div>
                                <h4 class="font-black text-blue-700 text-xl md:text-2xl">Cấu tạo số tự nhiên</h4>
                            </div>
                            <div class="space-y-2 text-sm md:text-base text-gray-700">
                                <p>• Viết số theo các hàng từ lớn đến nhỏ (triệu, trăm nghìn, chục nghìn, nghìn, trăm, chục, đơn vị).</p>
                                <p>• Giá trị của chữ số phụ thuộc vào vị trí đứng ở hàng nào (ví dụ: chữ số 2 ở hàng trăm có giá trị 200).</p>
                            </div>
                        </div>

                        <!-- 2. So sánh & Rút gọn phân số -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-emerald-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-black text-xl">2</div>
                                <h4 class="font-black text-emerald-700 text-xl md:text-2xl">Phân số & Rút gọn</h4>
                            </div>
                            <div class="space-y-2 text-sm md:text-base text-gray-700">
                                <p>• Muốn rút gọn phân số: chia cả tử số và mẫu số cho cùng một số tự nhiên lớn hơn 1.</p>
                                <p class="bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-emerald-900 font-bold">
                                    16/24 = (16 : 8) / (24 : 8) = 2/3.
                                </p>
                            </div>
                        </div>

                        <!-- 3. Cấu tạo & Đổi số thập phân -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-amber-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-black text-xl">3</div>
                                <h4 class="font-black text-amber-700 text-xl md:text-2xl">Số thập phân & Đổi đơn vị</h4>
                            </div>
                            <div class="space-y-2 text-sm md:text-base text-gray-700">
                                <p>• Số thập phân gồm <span class="font-black text-amber-800">Phần nguyên</span>, <span class="font-black text-amber-800">dấu phẩy</span> và <span class="font-black text-amber-800">Phần thập phân</span>.</p>
                                <p>• Đổi đơn vị: 5 m 8 dm = <span class="font-black text-amber-800">5,8 m</span>; 425 g = <span class="font-black text-amber-800">0,425 kg</span>.</p>
                            </div>
                        </div>

                        <!-- 4. So sánh số thập phân -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-rose-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-rose-100 text-rose-700 rounded-full flex items-center justify-center font-black text-xl">4</div>
                                <h4 class="font-black text-rose-700 text-xl md:text-2xl">So sánh số thập phân</h4>
                            </div>
                            <div class="space-y-2 text-sm md:text-base text-gray-700">
                                <p>• So sánh phần nguyên trước. Nếu phần nguyên bằng nhau, so sánh lần lượt các hàng phần mười, phần trăm, phần nghìn.</p>
                                <p>• Đổi về cùng đơn vị khi so sánh (98 cm = 0,98 m → <span class="font-black text-rose-800">0,89 m &lt; 0,98 m &lt; 1,02 m</span>).</p>
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
                        <div id="lesson172_b1" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">1</div>
                                <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Hoàn thành bảng số tự nhiên</h3>
                            </div>
                            <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-4 font-bold text-lg">
                                <p class="text-blue-900 font-black">a) Viết số tự nhiên thích hợp:</p>
                                <div class="space-y-3">
                                    <div class="leading-relaxed">
                                        <span>Hàng 1: 3 triệu, 4 trăm nghìn, 6 chục nghìn, 1 nghìn, 2 trăm, 8 chục, 5 đơn vị. Viết số: </span>
                                        <input id="172-1-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-36 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none inline-block align-middle my-1" placeholder="?">
                                    </div>
                                    <div class="leading-relaxed">
                                        <span>Hàng 2: 1 triệu, 3 trăm nghìn, 0 chục nghìn, 6 nghìn, 5 trăm, 2 chục, 4 đơn vị. Viết số: </span>
                                        <input id="172-1-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-36 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none inline-block align-middle my-1" placeholder="?">
                                    </div>
                                    <div class="leading-relaxed">
                                        <span>Hàng 3: 7 trăm nghìn, 2 chục nghìn, 0 nghìn, 4 trăm, 5 chục, 1 đơn vị. Viết số: </span>
                                        <input id="172-1-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-36 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none inline-block align-middle my-1" placeholder="?">
                                    </div>
                                </div>

                                <p class="text-blue-900 font-black border-t border-blue-200 pt-3">b) Giá trị của chữ số 2 trong các số trên:</p>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span>Ở số hàng 1:</span>
                                        <input id="172-1-v1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                                    </div>
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span>Ở số hàng 2:</span>
                                        <input id="172-1-v2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                                    </div>
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span>Ở số hàng 3:</span>
                                        <input id="172-1-v3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-172-1').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-172-1" onclick="window.check_172_1()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-172-1" class="hidden bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg font-bold text-blue-900 space-y-1">
                                <p>a) Hàng 1: 3 461 285; Hàng 2: 1 306 524; Hàng 3: 720 451</p>
                                <p>b) Hàng 1: 200 (2 trăm); Hàng 2: 20 (2 chục); Hàng 3: 20 000 (2 chục nghìn)</p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson172_b2" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-emerald-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">2</div>
                                <h3 class="text-xl md:text-2xl font-black text-emerald-700">Bài 2. Sắp xếp các số theo thứ tự từ bé đến lớn</h3>
                            </div>
                            <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-4">
                                <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                                    Sắp xếp các số <span class="font-black text-blue-700">67 245</span>, <span class="font-black text-blue-700">67 425</span>, <span class="font-black text-blue-700">67 524</span>, <span class="font-black text-blue-700">65 742</span> theo thứ tự từ bé đến lớn:
                                </p>
                                <div class="flex items-center gap-2 flex-wrap font-bold text-lg">
                                    <input id="172-2-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                                    <span>&lt;</span>
                                    <input id="172-2-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                                    <span>&lt;</span>
                                    <input id="172-2-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                                    <span>&lt;</span>
                                    <input id="172-2-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-172-2').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-172-2" onclick="window.check_172_2()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-172-2" class="hidden bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-lg font-bold text-emerald-900 space-y-1">
                                <p>Thứ tự từ bé đến lớn: <span class="text-blue-700">65 742 &lt; 67 245 &lt; 67 425 &lt; 67 524</span></p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson172_b3" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-amber-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">3</div>
                                <h3 class="text-xl md:text-2xl font-black text-amber-700">Bài 3. Chọn câu trả lời đúng</h3>
                            </div>
                            <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4">
                                <p class="text-lg font-bold text-amber-900">a) Đã tô màu 5/8 hình nào dưới đây?</p>
                                <img src="assets/images/toan/toan_tap_2/172/172-3-to-mau.png" class="max-w-[450px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Hình tô màu phân số 5/8">
                                <div class="grid grid-cols-2 md:grid-cols-4 gap-3 font-bold text-lg">
                                    <button onclick="window.select172_3a('A')" id="btn-172-3a-A" class="p-3 bg-white rounded-xl border-2 border-amber-200 hover:border-amber-400 font-black">A. Hình A</button>
                                    <button onclick="window.select172_3a('B')" id="btn-172-3a-B" class="p-3 bg-white rounded-xl border-2 border-amber-200 hover:border-amber-400 font-black">B. Hình B</button>
                                    <button onclick="window.select172_3a('C')" id="btn-172-3a-C" class="p-3 bg-white rounded-xl border-2 border-amber-200 hover:border-amber-400 font-black">C. Hình C</button>
                                    <button onclick="window.select172_3a('D')" id="btn-172-3a-D" class="p-3 bg-white rounded-xl border-2 border-amber-200 hover:border-amber-400 font-black">D. Hình D</button>
                                </div>

                                <p class="text-lg font-bold text-amber-900 border-t border-amber-200 pt-3">b) 2/3 là phân số rút gọn của phân số nào dưới đây?</p>
                                <div class="grid grid-cols-2 md:grid-cols-4 gap-3 font-bold text-lg">
                                    <button onclick="window.select172_3b('A')" id="btn-172-3b-A" class="p-3 bg-white rounded-xl border-2 border-amber-200 hover:border-amber-400 font-black">A. 4/8</button>
                                    <button onclick="window.select172_3b('B')" id="btn-172-3b-B" class="p-3 bg-white rounded-xl border-2 border-amber-200 hover:border-amber-400 font-black">B. 6/18</button>
                                    <button onclick="window.select172_3b('C')" id="btn-172-3b-C" class="p-3 bg-white rounded-xl border-2 border-amber-200 hover:border-amber-400 font-black">C. 16/24</button>
                                    <button onclick="window.select172_3b('D')" id="btn-172-3b-D" class="p-3 bg-white rounded-xl border-2 border-amber-200 hover:border-amber-400 font-black">D. 8/9</button>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-172-3').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-172-3" onclick="window.check_172_3()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-172-3" class="hidden bg-amber-50 p-4 rounded-2xl border border-amber-200 text-lg font-bold text-amber-900 space-y-1">
                                <p>a) Đáp án C (Hình C chia thành 8 phần bằng nhau, đã tô màu 5 phần).</p>
                                <p>b) Đáp án C. 16/24 (vì 16 : 8 = 2 và 24 : 8 = 3, rút gọn thành 2/3).</p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Bài 4 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson172_b4" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-rose-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">4</div>
                                <h3 class="text-xl md:text-2xl font-black text-rose-700">Bài 4. Tìm số thập phân thích hợp</h3>
                            </div>
                            <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-4 font-bold text-lg">
                                <p class="font-black text-rose-900 text-xl">a) Viết số thập phân:</p>
                                <div class="space-y-3">
                                    <div class="leading-relaxed">
                                        <span>Sáu mươi đơn vị, năm phần mười, bảy phần trăm, hai phần nghìn: </span>
                                        <input id="172-4-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none inline-block align-middle my-1" placeholder="?">
                                    </div>
                                    <div class="leading-relaxed">
                                        <span>Bốn trăm linh năm đơn vị và sáu mươi mốt phần trăm: </span>
                                        <input id="172-4-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none inline-block align-middle my-1" placeholder="?">
                                    </div>
                                    <div class="leading-relaxed">
                                        <span>Không đơn vị, bảy mươi tư phần nghìn: </span>
                                        <input id="172-4-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none inline-block align-middle my-1" placeholder="?">
                                    </div>
                                </div>

                                <p class="font-black text-rose-900 text-xl border-t border-rose-200 pt-3">b) Đổi đơn vị đo sang số thập phân:</p>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span>5 m 8 dm =</span>
                                        <input id="172-4-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                                        <span>m</span>
                                    </div>
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span>425 g =</span>
                                        <input id="172-4-5" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                                        <span>kg</span>
                                    </div>
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span>74 cm =</span>
                                        <input id="172-4-6" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                                        <span>m</span>
                                    </div>
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span>85 ml =</span>
                                        <input id="172-4-7" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                                        <span>l</span>
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-172-4').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-172-4" onclick="window.check_172_4()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-172-4" class="hidden bg-rose-50 p-4 rounded-2xl border border-rose-200 text-lg font-bold text-rose-900 space-y-1">
                                <p>a) 60,572; 405,61; 0,074</p>
                                <p>b) 5,8 m; 0,425 kg; 0,74 m; 0,085 l</p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 5: Bài 5 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson172_b5" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-teal-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">5</div>
                                <h3 class="text-xl md:text-2xl font-black text-teal-700">Bài 5. So sánh số thập phân và chiều cao Rô-bốt</h3>
                            </div>
                            <div class="bg-teal-50 p-5 rounded-2xl border border-teal-200 space-y-4 font-bold text-lg">
                                <p class="font-black text-teal-900 text-xl">a) Sắp xếp các số 70,571; 70,517; 71,057; 70,715 theo thứ tự từ lớn đến bé:</p>
                                <div class="flex items-center gap-2 flex-wrap">
                                    <input id="172-5-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-teal-300 rounded-xl font-bold outline-none" placeholder="?">
                                    <span>&gt;</span>
                                    <input id="172-5-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-teal-300 rounded-xl font-bold outline-none" placeholder="?">
                                    <span>&gt;</span>
                                    <input id="172-5-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-teal-300 rounded-xl font-bold outline-none" placeholder="?">
                                    <span>&gt;</span>
                                    <input id="172-5-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-teal-300 rounded-xl font-bold outline-none" placeholder="?">
                                </div>

                                <p class="font-black text-teal-900 text-xl border-t border-teal-200 pt-3">b) Chiều cao của 3 Rô-bốt vàng, đỏ, xanh:</p>
                                <img src="assets/images/toan/toan_tap_2/172/172-5-ba-robot.png" class="max-w-[400px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Ba rô-bốt vàng đỏ xanh">
                                <p class="text-gray-800 font-normal">Chiều cao là 98 cm, 0,89 m, 1,02 m. Rô-bốt vàng cao hơn rô-bốt đỏ nhưng thấp hơn rô-bốt xanh.</p>
                                
                                <div class="space-y-3">
                                    <div class="flex items-center gap-3 flex-wrap">
                                        <span>- Chiều cao của rô-bốt đỏ là:</span>
                                        <button onclick="window.select172_5red('A')" id="btn-172-5red-A" class="px-3 py-1 bg-white rounded-lg border border-teal-300 font-bold">A. 98 cm</button>
                                        <button onclick="window.select172_5red('B')" id="btn-172-5red-B" class="px-3 py-1 bg-white rounded-lg border border-teal-300 font-bold">B. 0,89 m</button>
                                        <button onclick="window.select172_5red('C')" id="btn-172-5red-C" class="px-3 py-1 bg-white rounded-lg border border-teal-300 font-bold">C. 1,02 m</button>
                                    </div>
                                    <div class="flex items-center gap-3 flex-wrap">
                                        <span>- Chiều cao của rô-bốt xanh là:</span>
                                        <button onclick="window.select172_5blue('A')" id="btn-172-5blue-A" class="px-3 py-1 bg-white rounded-lg border border-teal-300 font-bold">A. 98 cm</button>
                                        <button onclick="window.select172_5blue('B')" id="btn-172-5blue-B" class="px-3 py-1 bg-white rounded-lg border border-teal-300 font-bold">B. 0,89 m</button>
                                        <button onclick="window.select172_5blue('C')" id="btn-172-5blue-C" class="px-3 py-1 bg-white rounded-lg border border-teal-300 font-bold">C. 1,02 m</button>
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-172-5').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-172-5" onclick="window.check_172_5()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-172-5" class="hidden bg-teal-50 p-4 rounded-2xl border border-teal-200 text-lg font-bold text-teal-900 space-y-1">
                                <p>a) Từ lớn đến bé: 71,057 &gt; 70,715 &gt; 70,571 &gt; 70,517</p>
                                <p>b) Đổi: 98 cm = 0,98 m. Do 0,89 m &lt; 0,98 m &lt; 1,02 m.</p>
                                <p>Chiều cao rô-bốt đỏ là <span class="text-emerald-700">B. 0,89 m</span></p>
                                <p>Chiều cao rô-bốt xanh là <span class="text-emerald-700">C. 1,02 m</span> (rô-bốt vàng cao 98 cm = 0,98 m)</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,

    quizPool: [
        { question: "3 triệu 4 trăm nghìn 6 chục nghìn 1 nghìn 2 trăm 8 chục 5 đơn vị viết là?", options: ["3 461 285", "3 416 285", "3 641 285", "3 461 825"], answer: 0 },
        { question: "Giá trị của chữ số 2 trong số 3 461 285 là?", options: ["200", "20", "2000", "20000"], answer: 0 },
        { question: "Sắp xếp 67 245, 67 425, 67 524, 65 742 từ bé đến lớn là?", options: ["65 742 < 67 245 < 67 425 < 67 524", "67 245 < 65 742 < 67 425 < 67 524", "65 742 < 67 425 < 67 245 < 67 524", "67 524 < 67 425 < 67 245 < 65 742"], answer: 0 },
        { question: "Đã tô màu 5/8 hình nào?", options: ["Hình C", "Hình A", "Hình B", "Hình D"], answer: 0 },
        { question: "2/3 là phân số rút gọn của phân số nào?", options: ["16/24", "4/8", "6/18", "8/9"], answer: 0 },
        { question: "Sáu mươi đơn vị, 5 phần mười, 7 phần trăm, 2 phần nghìn viết là?", options: ["60,572", "60,57", "65,72", "60,275"], answer: 0 },
        { question: "Bốn trăm linh năm đơn vị và 61 phần trăm viết là?", options: ["405,61", "450,61", "405,6", "45,61"], answer: 0 },
        { question: "Không đơn vị, 74 phần nghìn viết là?", options: ["0,074", "0,74", "0,704", "0,0074"], answer: 0 },
        { question: "5 m 8 dm = ? m", options: ["5,8 m", "5,08 m", "58 m", "0,58 m"], answer: 0 },
        { question: "425 g = ? kg", options: ["0,425 kg", "4,25 kg", "42,5 kg", "0,0425 kg"], answer: 0 },
        { question: "Sắp xếp 70,571; 70,517; 71,057; 70,715 từ lớn đến bé là?", options: ["71,057 > 70,715 > 70,571 > 70,517", "71,057 > 70,571 > 70,715 > 70,517", "70,715 > 71,057 > 70,571 > 70,517", "70,517 < 70,571 < 70,715 < 71,057"], answer: 0 },
        { question: "Chiều cao của Rô-bốt đỏ (thấp nhất) là?", options: ["0,89 m", "98 cm", "1,02 m", "0,98 m"], answer: 0 },
        { question: "Chiều cao của Rô-bốt xanh (cao nhất) là?", options: ["1,02 m", "0,89 m", "98 cm", "0,98 m"], answer: 0 },
        { question: "74 cm = ? m", options: ["0,74 m", "7,4 m", "0,074 m", "74 m"], answer: 0 },
        { question: "85 ml = ? l", options: ["0,085 l", "0,85 l", "8,5 l", "0,0085 l"], answer: 0 }
    ]
};

window.lesson172 = lesson172;

window.check_172_1 = function() {
    const checks = [
        {id:'172-1-1', ans:['3461285','3 461 285']},
        {id:'172-1-2', ans:['1306524','1 306 524']},
        {id:'172-1-3', ans:['720451','720 451']},
        {id:'172-1-v1', ans:['200']},
        {id:'172-1-v2', ans:['20']},
        {id:'172-1-v3', ans:['20000','20 000']},
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
        "a) Hàng 1: 3 461 285; Hàng 2: 1 306 524; Hàng 3: 720 451<br>b) Giá trị chữ số 2: 200, 20, 20 000",
        "",
        "Gợi ý: Viết đúng các hàng đơn vị. Giá trị chữ số 2 phụ thuộc vào vị trí hàng (trăm, chục, chục nghìn).",
        "a) 3 461 285; 1 306 524; 720 451.<br>b) Giá trị chữ số 2 lần lượt là 200, 20, 20 000.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Số tự nhiên", Math.round(correct/checks.length*100), "btn-check-172-1", 0, checks.length, correct);
};

window.check_172_2 = function() {
    const v1 = document.getElementById('172-2-1')?.value.trim().replace(/\s/g,'') || '';
    const v2 = document.getElementById('172-2-2')?.value.trim().replace(/\s/g,'') || '';
    const v3 = document.getElementById('172-2-3')?.value.trim().replace(/\s/g,'') || '';
    const v4 = document.getElementById('172-2-4')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = (v1 === '65742' && v2 === '67245' && v3 === '67425' && v4 === '67524');
    window.showMathFeedback(isCorrect,
        "65 742 < 67 245 < 67 425 < 67 524",
        "",
        "Gợi ý: So sánh hàng chục nghìn (65 742 nhỏ nhất), rồi so sánh hàng trăm ở các số 67...",
        "Thứ tự từ bé đến lớn: 65 742 < 67 245 < 67 425 < 67 524.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Sắp xếp số tự nhiên", isCorrect?100:0, "btn-check-172-2", 0, 1, isCorrect?1:0);
};

window._sel172_3a = null;
window.select172_3a = function(opt) {
    ['A','B','C','D'].forEach(o => {
        const b = document.getElementById('btn-172-3a-'+o);
        if (b) b.className = 'p-3 bg-white rounded-xl border-2 border-amber-200 hover:border-amber-400 font-black';
    });
    const sel = document.getElementById('btn-172-3a-'+opt);
    if (sel) sel.className = 'p-3 bg-amber-200 rounded-xl border-2 border-amber-500 font-black';
    window._sel172_3a = opt;
};

window._sel172_3b = null;
window.select172_3b = function(opt) {
    ['A','B','C','D'].forEach(o => {
        const b = document.getElementById('btn-172-3b-'+o);
        if (b) b.className = 'p-3 bg-white rounded-xl border-2 border-amber-200 hover:border-amber-400 font-black';
    });
    const sel = document.getElementById('btn-172-3b-'+opt);
    if (sel) sel.className = 'p-3 bg-amber-200 rounded-xl border-2 border-amber-500 font-black';
    window._sel172_3b = opt;
};

window.check_172_3 = function() {
    const isCorrect = (window._sel172_3a === 'C' && window._sel172_3b === 'C');
    window.showMathFeedback(isCorrect,
        "a) Đáp án C. Hình C<br>b) Đáp án C. 16/24",
        "",
        "Gợi ý:<br>a) Hình C chia 8 phần, tô màu 5 phần.<br>b) 16/24 chia cả tử và mẫu cho 8 = 2/3.",
        "a) Hình C (5/8).<br>b) 16/24 = 2/3.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Phân số", isCorrect?100:0, "btn-check-172-3", 0, 1, isCorrect?1:0);
};

window.check_172_4 = function() {
    const checks = [
        {id:'172-4-1', ans:['60,572','60.572']},
        {id:'172-4-2', ans:['405,61','405.61']},
        {id:'172-4-3', ans:['0,074','0.074']},
        {id:'172-4-4', ans:['5,8','5.8']},
        {id:'172-4-5', ans:['0,425','0.425']},
        {id:'172-4-6', ans:['0,74','0.74']},
        {id:'172-4-7', ans:['0,085','0.085']},
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
        "a) 60,572; 405,61; 0,074<br>b) 5,8 m; 0,425 kg; 0,74 m; 0,085 l",
        "",
        "Gợi ý:<br>a) Viết các chữ số vào đúng vị trí sau dấu phẩy (phần mười, phần trăm, phần nghìn).<br>b) Đổi đơn vị đo từ m, g, cm, ml sang m, kg, m, l tương ứng.",
        "a) 60,572; 405,61; 0,074.<br>b) 5,8; 0,425; 0,74; 0,085.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Số thập phân", Math.round(correct/checks.length*100), "btn-check-172-4", 0, checks.length, correct);
};

window._sel172_5red = null;
window._sel172_5blue = null;

window.select172_5red = function(opt) {
    ['A','B','C'].forEach(o => {
        const b = document.getElementById('btn-172-5red-'+o);
        if (b) b.className = 'px-3 py-1 bg-white rounded-lg border border-teal-300 font-bold';
    });
    const sel = document.getElementById('btn-172-5red-'+opt);
    if (sel) sel.className = 'px-3 py-1 bg-teal-200 rounded-lg border border-teal-500 font-bold';
    window._sel172_5red = opt;
};

window.select172_5blue = function(opt) {
    ['A','B','C'].forEach(o => {
        const b = document.getElementById('btn-172-5blue-'+o);
        if (b) b.className = 'px-3 py-1 bg-white rounded-lg border border-teal-300 font-bold';
    });
    const sel = document.getElementById('btn-172-5blue-'+opt);
    if (sel) sel.className = 'px-3 py-1 bg-teal-200 rounded-lg border border-teal-500 font-bold';
    window._sel172_5blue = opt;
};

window.check_172_5 = function() {
    const checks = [
        {id:'172-5-1', ans:['71,057','71.057']},
        {id:'172-5-2', ans:['70,715','70.715']},
        {id:'172-5-3', ans:['70,571','70.571']},
        {id:'172-5-4', ans:['70,517','70.517']},
    ];
    let correctArr = 0;
    checks.forEach(c => {
        const el = document.getElementById(c.id);
        if (!el) return;
        const v = el.value.trim().replace(/\s/g,'');
        if (c.ans.includes(v)) { el.classList.add('bg-green-100','border-green-500'); el.classList.remove('bg-red-100','border-red-500'); correctArr++; }
        else { el.classList.add('bg-red-100','border-red-500'); el.classList.remove('bg-green-100','border-green-500'); }
    });
    const isCorrect = (correctArr === checks.length && window._sel172_5red === 'B' && window._sel172_5blue === 'C');
    window.showMathFeedback(isCorrect,
        "a) 71,057 > 70,715 > 70,571 > 70,517<br>b) Đỏ: B. 0,89 m; Xanh: C. 1,02 m",
        "",
        "Gợi ý:<br>a) So sánh từ phần nguyên đến các hàng thập phân.<br>b) Đỏ thấp nhất (0,89m), Vàng (0,98m), Xanh cao nhất (1,02m).",
        "a) 71,057 > 70,715 > 70,571 > 70,517.<br>b) Đỏ: B. 0,89 m, Xanh: C. 1,02 m.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 5. Chiều cao Rô-bốt và so sánh", isCorrect?100:0, "btn-check-172-5", 0, 1, isCorrect?1:0);
};
