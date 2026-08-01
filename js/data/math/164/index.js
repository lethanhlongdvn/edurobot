export const lesson164 = {
    period: "164",
    title: "BÀI 71: ÔN TẬP HÌNH HỌC (TIẾT 3)",
    topic: "Ôn tập diện tích, thể tích hình hộp chữ nhật và hình lập phương",
    week: "33",

    content: `
        <div class="space-y-8 animate-fade-in pb-10">
            <!-- Card Tiêu đề & Tổng quan -->
            <div class="bg-gradient-to-br from-blue-50 to-sky-50 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-4 border-blue-200 shadow-xl relative overflow-hidden">
                <div class="relative z-10 space-y-6">
                    <div class="flex items-center justify-center gap-3">
                        <span class="text-3xl md:text-4xl">📦</span>
                        <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide text-center">TÌM HIỂU BÀI: HÌNH HỘP CHỮ NHẬT VÀ HÌNH LẬP PHƯƠNG</h3>
                    </div>

                    <!-- Grid 4 công thức chính -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 font-bold">
                        
                        <!-- 1. Hình hộp chữ nhật -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-blue-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-black text-xl">1</div>
                                <h4 class="font-black text-blue-700 text-xl md:text-2xl">Hình hộp chữ nhật (a, b, c)</h4>
                            </div>
                            <div class="space-y-2 text-sm md:text-base text-gray-700">
                                <p>• <span class="font-black text-blue-800">Diện tích xung quanh:</span> <span class="font-black text-blue-700">S_xq = (a + b) × 2 × c</span></p>
                                <p>• <span class="font-black text-blue-800">Diện tích toàn phần:</span> <span class="font-black text-blue-700">S_tp = S_xq + S_đáy × 2</span></p>
                                <p>• <span class="font-black text-blue-800">Thể tích:</span> <span class="font-black text-blue-700">V = a × b × c</span></p>
                            </div>
                        </div>

                        <!-- 2. Hình lập phương -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-emerald-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-black text-xl">2</div>
                                <h4 class="font-black text-emerald-700 text-xl md:text-2xl">Hình lập phương (cạnh a)</h4>
                            </div>
                            <div class="space-y-2 text-sm md:text-base text-gray-700">
                                <p>• <span class="font-black text-emerald-800">Diện tích xung quanh:</span> <span class="font-black text-emerald-700">S_xq = a × a × 4</span></p>
                                <p>• <span class="font-black text-emerald-800">Diện tích toàn phần:</span> <span class="font-black text-emerald-700">S_tp = a × a × 6</span></p>
                                <p>• <span class="font-black text-emerald-800">Thể tích:</span> <span class="font-black text-emerald-700">V = a × a × a</span></p>
                            </div>
                        </div>

                        <!-- 3. Bài toán quét vôi phòng học -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-rose-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-rose-100 text-rose-700 rounded-full flex items-center justify-center font-black text-xl">3</div>
                                <h4 class="font-black text-rose-700 text-xl md:text-2xl">Quét vôi phòng họp / phòng học</h4>
                            </div>
                            <div class="space-y-2 text-sm md:text-base text-gray-700">
                                <p class="font-black text-rose-800">Công thức tính diện tích quét vôi (4 tường + trần):</p>
                                <div class="bg-rose-50 p-3 rounded-xl border border-rose-200 text-rose-900 font-bold">
                                    S_quét_vôi = S_xq + S_trần − S_các_cửa
                                </div>
                            </div>
                        </div>

                        <!-- 4. Bài toán sơn các mặt khối lập phương nhỏ -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-teal-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-black text-xl">4</div>
                                <h4 class="font-black text-teal-700 text-xl md:text-2xl">Sơn khối HLP xếp từ 27 khối (3×3×3)</h4>
                            </div>
                            <div class="space-y-2 text-sm md:text-base text-gray-700">
                                <p>• <span class="font-black text-teal-800">Ở 8 đỉnh:</span> Sơn 3 mặt (<span class="font-black text-teal-700">8 khối</span>).</p>
                                <p>• <span class="font-black text-teal-800">Ở giữa 12 cạnh:</span> Sơn 2 mặt (<span class="font-black text-teal-700">12 khối</span>).</p>
                                <p>• <span class="font-black text-teal-800">Ở giữa 6 mặt:</span> Sơn 1 mặt (<span class="font-black text-teal-700">6 khối</span>).</p>
                                <p>• <span class="font-black text-teal-800">Ở bên trong:</span> Không sơn mặt nào (<span class="font-black text-teal-700">1 khối</span>).</p>
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
                        <div id="lesson164_b1" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">1</div>
                                <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Hoàn thành công thức diện tích và thể tích</h3>
                            </div>
                            
                            <!-- Bảng công thức dạng 2 hàng chuẩn theo SGK -->
                            <div class="overflow-x-auto my-4">
                                <table class="w-full border-collapse border-2 border-gray-300 bg-white shadow-md rounded-2xl overflow-hidden">
                                    <tbody>
                                        <!-- Hàng 1: Hình hộp chữ nhật -->
                                        <tr class="border-b-2 border-gray-300">
                                            <td class="p-4 md:p-6 w-1/3 border-r-2 border-gray-300 text-center bg-blue-50/60">
                                                <img src="assets/images/toan/toan_tap_2/164/164-1-cong-thuc 1.png" class="h-32 md:h-44 object-contain mx-auto" alt="Hình hộp chữ nhật (a, b, c)">
                                            </td>
                                            <td class="p-4 md:p-6 w-2/3 space-y-4 font-bold text-lg md:text-xl text-gray-800">
                                                <div class="flex items-center gap-2 flex-wrap">
                                                    <span>S<sub>xung quanh</sub> = (a + b) × 2 ×</span>
                                                    <input id="164-1-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-amber-400 bg-amber-50 rounded-lg outline-none font-black text-blue-700 shadow-sm" placeholder="?">
                                                </div>
                                                <div class="flex items-center gap-2 flex-wrap">
                                                    <span>S<sub>toàn phần</sub> = S<sub>xung quanh</sub> + S<sub>đáy</sub> ×</span>
                                                    <input id="164-1-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-amber-400 bg-amber-50 rounded-lg outline-none font-black text-blue-700 shadow-sm" placeholder="?">
                                                </div>
                                                <div class="flex items-center gap-2 flex-wrap">
                                                    <span>V = a × b ×</span>
                                                    <input id="164-1-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-amber-400 bg-amber-50 rounded-lg outline-none font-black text-blue-700 shadow-sm" placeholder="?">
                                                </div>
                                            </td>
                                        </tr>
                                        <!-- Hàng 2: Hình lập phương -->
                                        <tr>
                                            <td class="p-4 md:p-6 w-1/3 border-r-2 border-gray-300 text-center bg-emerald-50/60">
                                                <img src="assets/images/toan/toan_tap_2/164/164-1-cong-thuc 2.png" class="h-32 md:h-44 object-contain mx-auto" alt="Hình lập phương (cạnh a)">
                                            </td>
                                            <td class="p-4 md:p-6 w-2/3 space-y-4 font-bold text-lg md:text-xl text-gray-800">
                                                <div class="flex items-center gap-2 flex-wrap">
                                                    <span>S<sub>xung quanh</sub> = a × a ×</span>
                                                    <input id="164-1-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-amber-400 bg-amber-50 rounded-lg outline-none font-black text-emerald-700 shadow-sm" placeholder="?">
                                                </div>
                                                <div class="flex items-center gap-2 flex-wrap">
                                                    <span>S<sub>toàn phần</sub> =</span>
                                                    <input id="164-1-5" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-14 h-10 text-center border-2 border-amber-400 bg-amber-50 rounded-lg outline-none font-black text-emerald-700 shadow-sm" placeholder="?">
                                                    <span>×</span>
                                                    <input id="164-1-6" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-14 h-10 text-center border-2 border-amber-400 bg-amber-50 rounded-lg outline-none font-black text-emerald-700 shadow-sm" placeholder="?">
                                                    <span>× 6</span>
                                                </div>
                                                <div class="flex items-center gap-2 flex-wrap">
                                                    <span>V =</span>
                                                    <input id="164-1-7" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-14 h-10 text-center border-2 border-amber-400 bg-amber-50 rounded-lg outline-none font-black text-emerald-700 shadow-sm" placeholder="?">
                                                    <span>×</span>
                                                    <input id="164-1-8" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-14 h-10 text-center border-2 border-amber-400 bg-amber-50 rounded-lg outline-none font-black text-emerald-700 shadow-sm" placeholder="?">
                                                    <span>×</span>
                                                    <input id="164-1-9" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-14 h-10 text-center border-2 border-amber-400 bg-amber-50 rounded-lg outline-none font-black text-emerald-700 shadow-sm" placeholder="?">
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-164-1').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-164-1" onclick="window.check_164_1()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-164-1" class="hidden bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg font-bold text-blue-900 space-y-1">
                                <p>HHCN: Sxq = (a + b) × 2 × c; Stp = Sxq + Sđáy × 2; V = a × b × c</p>
                                <p>HLP: Sxq = a × a × 4; Stp = a × a × 6; V = a × a × a</p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson164_b2" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-emerald-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">2</div>
                                <h3 class="text-xl md:text-2xl font-black text-emerald-700">Bài 2. Tính diện tích xung quanh và toàn phần</h3>
                            </div>
                            <img src="assets/images/toan/toan_tap_2/164/164-2-thung-rubich.png" class="max-w-[450px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Thùng hàng và khối ru-bích">

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <!-- a) Thùng hàng -->
                                <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4">
                                    <p class="font-black text-amber-900 text-lg">a) Thùng hàng HHCN (dài 6 dm, rộng 3,5 dm, cao 4 dm)</p>
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="font-bold text-gray-700">S<sub>xq</sub>:</span>
                                        <input id="164-2-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                                        <span class="font-bold text-gray-700">dm²</span>
                                    </div>
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="font-bold text-gray-700">S<sub>tp</sub>:</span>
                                        <input id="164-2-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                                        <span class="font-bold text-gray-700">dm²</span>
                                    </div>
                                </div>

                                <!-- b) Khối ru-bích -->
                                <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-4">
                                    <p class="font-black text-rose-900 text-lg">b) Khối ru-bích HLP (cạnh 8,5 cm)</p>
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="font-bold text-gray-700">S<sub>xq</sub>:</span>
                                        <input id="164-2-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                                        <span class="font-bold text-gray-700">cm²</span>
                                    </div>
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="font-bold text-gray-700">S<sub>tp</sub>:</span>
                                        <input id="164-2-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                                        <span class="font-bold text-gray-700">cm²</span>
                                    </div>
                                </div>
                            </div>

                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-164-2').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-164-2" onclick="window.check_164_2()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-164-2" class="hidden bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-lg font-bold text-emerald-900 space-y-1">
                                <p>a) Thùng hàng: Sxq = (6 + 3,5) × 2 × 4 = <span class="text-blue-700">76 dm²</span>; Sđáy × 2 = 6 × 3,5 × 2 = 42 dm² → Stp = 76 + 42 = <span class="text-blue-700">118 dm²</span></p>
                                <p>b) Ru-bích: Sxq = 8,5 × 8,5 × 4 = <span class="text-blue-700">289 cm²</span>; Stp = 8,5 × 8,5 × 6 = <span class="text-blue-700">433,5 cm²</span></p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson164_b3" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-amber-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">3</div>
                                <h3 class="text-xl md:text-2xl font-black text-amber-700">Bài 3. So sánh hai khối gỗ A và B</h3>
                            </div>
                            <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4">
                                <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                                    Khối gỗ hình lập phương A (cạnh <span class="font-black text-blue-700">5 cm</span>) và khối gỗ hình hộp chữ nhật B (dài <span class="font-black text-blue-700">8,5 cm</span>, rộng <span class="font-black text-blue-700">4 cm</span>, cao <span class="font-black text-blue-700">4 cm</span>).
                                </p>
                                <img src="assets/images/toan/toan_tap_2/164/164-3-khoi-go.png" class="max-w-[450px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Khối gỗ A và B">
                                
                                <div class="space-y-4 border-t border-amber-200 pt-4">
                                    <p class="font-black text-amber-900 text-lg">a) Tính diện tích xung quanh mỗi khối gỗ:</p>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <span class="font-bold text-gray-700">S<sub>xq</sub> khối A:</span>
                                            <input id="164-3-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                                            <span class="font-bold text-gray-700">cm²</span>
                                        </div>
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <span class="font-bold text-gray-700">S<sub>xq</sub> khối B:</span>
                                            <input id="164-3-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                                            <span class="font-bold text-gray-700">cm²</span>
                                        </div>
                                    </div>

                                    <p class="font-black text-amber-900 text-lg border-t border-amber-200 pt-3">b) So sánh diện tích toàn phần:</p>
                                    <div class="flex items-center gap-3 flex-wrap">
                                        <span class="font-bold text-gray-700 text-lg">Khối gỗ có S<sub>tp</sub> lớn hơn là khối (A hay B?):</span>
                                        <input id="164-3-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none uppercase" placeholder="A/B">
                                    </div>
                                    <div class="flex items-center gap-3 flex-wrap">
                                        <span class="font-bold text-gray-700 text-lg">Lớn hơn bao nhiêu cm²:</span>
                                        <input id="164-3-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                                        <span class="font-bold text-gray-700">cm²</span>
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-164-3').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-164-3" onclick="window.check_164_3()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-164-3" class="hidden bg-amber-50 p-4 rounded-2xl border border-amber-200 text-lg font-bold text-amber-900 space-y-1">
                                <p>a) Sxq A = 5 × 5 × 4 = <span class="text-emerald-700">100 cm²</span></p>
                                <p>Sxq B = (8,5 + 4) × 2 × 4 = 12,5 × 8 = <span class="text-emerald-700">100 cm²</span></p>
                                <p>b) Stp A = 5 × 5 × 6 = 150 cm².</p>
                                <p>Stp B = 100 + (8,5 × 4 × 2) = 100 + 68 = 168 cm².</p>
                                <p>Khối B có Stp lớn hơn khối A là: 168 − 150 = <span class="text-emerald-700">18 cm²</span></p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Bài 4 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson164_b4" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-rose-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">4</div>
                                <h3 class="text-xl md:text-2xl font-black text-rose-700">Bài 4. Quét vôi phòng họp</h3>
                            </div>
                            <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-4">
                                <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                                    Người ta quét vôi xung quanh tường và trần một phòng họp cao <span class="font-black text-blue-700">4 m</span>, chiều rộng <span class="font-black text-blue-700">6 m</span>, chiều dài <span class="font-black text-blue-700">8 m</span>. Hỏi diện tích cần quét vôi là bao nhiêu mét vuông, biết tất cả các cửa của phòng họp có tổng diện tích là <span class="font-black text-blue-700">6,5 m²</span>.
                                </p>
                                <div class="flex items-center gap-3 flex-wrap">
                                    <span class="font-bold text-gray-700 text-lg">Diện tích cần quét vôi:</span>
                                    <input id="164-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                                    <span class="font-bold text-gray-700">m²</span>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-164-4').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-164-4" onclick="window.check_164_4()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-164-4" class="hidden bg-rose-50 p-4 rounded-2xl border border-rose-200 text-lg font-bold text-rose-900 space-y-1">
                                <p>Diện tích xung quanh: (8 + 6) × 2 × 4 = 112 m²</p>
                                <p>Diện tích trần nhà: 8 × 6 = 48 m²</p>
                                <p>Diện tích cần quét vôi: 112 + 48 − 6,5 = <span class="text-emerald-700">153,5 m²</span></p>
                                <p>Chúc mừng em đã giải đúng!</p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 5: Bài 5 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson164_b5" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-teal-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">5</div>
                                <div>
                                    <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-teal-100 text-teal-800 font-black rounded text-sm">Số ?</span>
                                    <h3 class="text-xl md:text-2xl font-black text-teal-700 mt-1">Bài 5. Rô-bốt sơn khối lập phương lớn</h3>
                                </div>
                            </div>
                            <div class="bg-teal-50 p-5 rounded-2xl border border-teal-200 space-y-4">
                                <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                                    Rô-bốt xếp <span class="font-black text-blue-700">27 khối gỗ lập phương nhỏ</span> thành một khối lập phương lớn rồi sơn tất cả các mặt của khối lập phương lớn đó như hình vẽ.
                                </p>
                                <img src="assets/images/toan/toan_tap_2/164/164-5-robot-son.png" class="max-w-[400px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Rô-bốt sơn khối lập phương 3x3x3">
                                <div class="space-y-4">
                                    <div class="flex items-center gap-3 flex-wrap">
                                        <span class="font-bold text-gray-700 text-lg">a) Số khối lập phương nhỏ được sơn 3 mặt là:</span>
                                        <input id="164-5-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-teal-300 rounded-xl font-bold outline-none" placeholder="?">
                                        <span class="font-bold text-gray-700">khối</span>
                                    </div>
                                    <div class="flex items-center gap-3 flex-wrap">
                                        <span class="font-bold text-gray-700 text-lg">b) Số khối lập phương nhỏ được sơn 2 mặt là:</span>
                                        <input id="164-5-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-teal-300 rounded-xl font-bold outline-none" placeholder="?">
                                        <span class="font-bold text-gray-700">khối</span>
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-164-5').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-164-5" onclick="window.check_164_5()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-164-5" class="hidden bg-teal-50 p-4 rounded-2xl border border-teal-200 text-lg font-bold text-teal-900 space-y-1">
                                <p>Khối lập phương lớn xếp từ 3 × 3 × 3 = 27 khối nhỏ.</p>
                                <p>a) Các khối ở 8 đỉnh được sơn 3 mặt: <span class="text-emerald-700">8 khối</span></p>
                                <p>b) Các khối nằm ở giữa 12 cạnh (mỗi cạnh có 1 khối) được sơn 2 mặt: 12 × 1 = <span class="text-emerald-700">12 khối</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,

    quizPool: [
        { question: "Sxq của HHCN = ?", options: ["(a + b) × 2 × c", "a × b × c", "a × b × 2", "(a + b) × c"], answer: 0 },
        { question: "Stp của HLP cạnh a = ?", options: ["a × a × 6", "a × a × 4", "a × 6", "a × a × a"], answer: 0 },
        { question: "Thể tích V của HLP cạnh a = ?", options: ["a × a × a", "a × a × 6", "a × 3", "a × a × 4"], answer: 0 },
        { question: "Thùng hàng HHCN (6×3,5×4 dm) có Sxq là?", options: ["76 dm²", "42 dm²", "118 dm²", "84 dm²"], answer: 0 },
        { question: "Thùng hàng HHCN (6×3,5×4 dm) có Stp là?", options: ["118 dm²", "76 dm²", "84 dm²", "120 dm²"], answer: 0 },
        { question: "Khối ru-bích HLP (cạnh 8,5 cm) có Sxq là?", options: ["289 cm²", "433,5 cm²", "72,25 cm²", "300 cm²"], answer: 0 },
        { question: "Khối ru-bích HLP (cạnh 8,5 cm) có Stp là?", options: ["433,5 cm²", "289 cm²", "614,125 cm²", "500 cm²"], answer: 0 },
        { question: "Sxq khối gỗ A (HLP 5 cm) là?", options: ["100 cm²", "150 cm²", "125 cm²", "75 cm²"], answer: 0 },
        { question: "Sxq khối gỗ B (HHCN 8,5 × 4 × 4 cm) là?", options: ["100 cm²", "168 cm²", "136 cm²", "120 cm²"], answer: 0 },
        { question: "Stp khối B lớn hơn Stp khối A bao nhiêu cm²?", options: ["18 cm²", "10 cm²", "20 cm²", "15 cm²"], answer: 0 },
        { question: "Diện tích cần quét vôi phòng họp (dài 8m, rộng 6m, cao 4m, cửa 6,5m²) là?", options: ["153,5 m²", "160 m²", "112 m²", "148 m²"], answer: 0 },
        { question: "Khối HLP 3x3x3 sơn các mặt có bao nhiêu khối góc sơn 3 mặt?", options: ["8 khối", "12 khối", "6 khối", "1 khối"], answer: 0 },
        { question: "Khối HLP 3x3x3 sơn các mặt có bao nhiêu khối sơn 2 mặt?", options: ["12 khối", "8 khối", "6 khối", "1 khối"], answer: 0 },
        { question: "Khối HLP 3x3x3 sơn các mặt có bao nhiêu khối sơn 1 mặt?", options: ["6 khối", "12 khối", "8 khối", "1 khối"], answer: 0 },
        { question: "Khối HLP 3x3x3 sơn các mặt có bao nhiêu khối KHÔNG sơn mặt nào?", options: ["1 khối", "0 khối", "6 khối", "2 khối"], answer: 0 }
    ]
};

window.lesson164 = lesson164;

window.check_164_1 = function() {
    const checks = [
        {id:'164-1-1', ans:['c']},
        {id:'164-1-2', ans:['2']},
        {id:'164-1-3', ans:['c']},
        {id:'164-1-4', ans:['4']},
        {id:'164-1-5', ans:['a']},
        {id:'164-1-6', ans:['a']},
        {id:'164-1-7', ans:['a']},
        {id:'164-1-8', ans:['a']},
        {id:'164-1-9', ans:['a']},
    ];
    let correct = 0;
    checks.forEach(c => {
        const el = document.getElementById(c.id);
        if (!el) return;
        const v = el.value.trim().toLowerCase();
        if (c.ans.includes(v)) { el.classList.add('bg-green-100','border-green-500'); el.classList.remove('bg-red-100','border-red-500'); correct++; }
        else { el.classList.add('bg-red-100','border-red-500'); el.classList.remove('bg-green-100','border-green-500'); }
    });
    const isCorrect = correct === checks.length;
    window.showMathFeedback(isCorrect,
        "HHCN: Sxq = (a+b)×2×c; Stp = Sxq + Sđáy×2; V = a×b×c<br>HLP: Sxq = a×a×4; Stp = a×a×6; V = a×a×a",
        "",
        "Gợi ý: Điền các biến a, c, 2, 4, 6 vào vị trí tương ứng trong công thức.",
        "HHCN: Sxq = (a+b)×2×c; Stp = Sxq + Sđáy×2; V = a×b×c.<br>HLP: Sxq = a×a×4; Stp = a×a×6; V = a×a×a.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Công thức HHCN và HLP", Math.round(correct/checks.length*100), "btn-check-164-1", 0, checks.length, correct);
};

window.check_164_2 = function() {
    const checks = [
        {id:'164-2-1', ans:['76']},
        {id:'164-2-2', ans:['118']},
        {id:'164-2-3', ans:['289']},
        {id:'164-2-4', ans:['433,5','433.5']},
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
        "a) Thùng hàng: Sxq = 76 dm², Stp = 118 dm²<br>b) Ru-bích: Sxq = 289 cm², Stp = 433,5 cm²",
        "",
        "Gợi ý: Áp dụng công thức Sxq và Stp cho HHCN và HLP vừa ôn ở Bài 1.",
        "a) Sxq = (6 + 3,5) × 2 × 4 = 76 dm²; Stp = 76 + (6 × 3,5 × 2) = 118 dm².<br>b) Sxq = 8,5 × 8,5 × 4 = 289 cm²; Stp = 8,5 × 8,5 × 6 = 433,5 cm².<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Tính Sxq và Stp", Math.round(correct/checks.length*100), "btn-check-164-2", 0, checks.length, correct);
};

window.check_164_3 = function() {
    const v1 = document.getElementById('164-3-1')?.value.trim().replace(/\s/g,'') || '';
    const v2 = document.getElementById('164-3-2')?.value.trim().replace(/\s/g,'') || '';
    const v3 = document.getElementById('164-3-3')?.value.trim().toUpperCase() || '';
    const v4 = document.getElementById('164-3-4')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = (v1 === '100' && v2 === '100' && v3 === 'B' && v4 === '18');
    window.showMathFeedback(isCorrect,
        "a) Sxq A = 100 cm², Sxq B = 100 cm²<br>b) Khối B có Stp lớn hơn 18 cm²",
        "",
        "Gợi ý: a) Tính Sxq A (5×5×4) và B ((8,5+4)×2×4). b) Tính Stp A (5×5×6 = 150) và B (100 + 8,5×4×2 = 168), lấy 168 − 150.",
        "Sxq A = 100 cm², Sxq B = 100 cm².<br>Stp A = 150 cm², Stp B = 168 cm².<br>Khối B lớn hơn khối A là 18 cm².<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. So sánh khối gỗ A và B", isCorrect?100:0, "btn-check-164-3", 0, 1, isCorrect?1:0);
};

window.check_164_4 = function() {
    const v = document.getElementById('164-4')?.value.trim().replace(',','.').replace(/\s/g,'') || '';
    const isCorrect = (v === '153.5' || v === '153,5');
    window.showMathFeedback(isCorrect,
        "153,5 m²",
        "",
        "Gợi ý: Diện tích quét vôi = Sxq + Strần − Scửa = (8+6)×2×4 + (8×6) − 6,5.",
        "Sxq = (8 + 6) × 2 × 4 = 112 m².<br>Strần = 8 × 6 = 48 m².<br>S quét vôi = 112 + 48 − 6,5 = 153,5 m².<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Quét vôi phòng họp", isCorrect?100:0, "btn-check-164-4", 0, 1, isCorrect?1:0);
};

window.check_164_5 = function() {
    const v1 = document.getElementById('164-5-1')?.value.trim().replace(/\s/g,'') || '';
    const v2 = document.getElementById('164-5-2')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = (v1 === '8' && v2 === '12');
    window.showMathFeedback(isCorrect,
        "a) 8 khối sơn 3 mặt<br>b) 12 khối sơn 2 mặt",
        "",
        "Gợi ý: Khối 3x3x3 có 8 đỉnh (mỗi đỉnh là 1 khối 3 mặt) và 12 cạnh (mỗi cạnh ở giữa là 1 khối 2 mặt).",
        "a) Các khối ở 8 đỉnh được sơn 3 mặt: 8 khối.<br>b) Các khối ở giữa 12 cạnh được sơn 2 mặt: 12 × 1 = 12 khối.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 5. Rô-bốt sơn khối lập phương", isCorrect?100:0, "btn-check-164-5", 0, 1, isCorrect?1:0);
};
