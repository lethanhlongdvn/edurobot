export const lesson167 = {
    period: "167",
    title: "BÀI 72: ÔN TẬP ĐO LƯỜNG (TIẾT 2)",
    topic: "Ôn tập đơn vị đo thời gian",
    week: "34",

    practice: `
        <div class="space-y-10 pb-10">

            <!-- Bài 1: Đổi đơn vị thời gian đơn giản -->
            <div id="lesson167_b1" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-blue-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">1</div>
                    <div>
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 text-blue-800 font-black rounded text-sm">Số ?</span>
                        <h3 class="text-xl md:text-2xl font-black text-blue-700 mt-1">Bài 1. Điền số thích hợp</h3>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-bold text-lg">
                    <!-- a -->
                    <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-3">
                        <p class="font-black text-blue-800 text-xl border-b border-blue-200 pb-2">a)</p>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>3 năm 8 tháng =</span>
                            <input id="167-1-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>tháng</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>4 ngày 15 giờ =</span>
                            <input id="167-1-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>giờ</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>6 giờ 27 phút =</span>
                            <input id="167-1-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>phút</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>5 phút 40 giây =</span>
                            <input id="167-1-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>giây</span>
                        </div>
                    </div>

                    <!-- b -->
                    <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-3">
                        <p class="font-black text-emerald-800 text-xl border-b border-emerald-200 pb-2">b)</p>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>40 tháng =</span>
                            <input id="167-1-5" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>năm</span>
                            <input id="167-1-6" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>tháng</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>75 giờ =</span>
                            <input id="167-1-7" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>ngày</span>
                            <input id="167-1-8" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>giờ</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>150 phút =</span>
                            <input id="167-1-9" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>giờ</span>
                            <input id="167-1-10" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>phút</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>135 giây =</span>
                            <input id="167-1-11" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>phút</span>
                            <input id="167-1-12" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>giây</span>
                        </div>
                    </div>
                </div>

                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-167-1').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-167-1" onclick="window.check_167_1()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-167-1" class="hidden bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg font-bold text-blue-900 space-y-1">
                    <p>a) 44 tháng; 111 giờ; 387 phút; 340 giây</p>
                    <p>b) 3 năm 4 tháng; 3 ngày 3 giờ; 2 giờ 30 phút; 2 phút 15 giây</p>
                </div>
            </div>

            <!-- Bài 2: Phân số & số thập phân đo thời gian -->
            <div id="lesson167_b2" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-emerald-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">2</div>
                    <h3 class="text-xl md:text-2xl font-black text-emerald-700">Bài 2. Tìm số tự nhiên hoặc số thập phân thích hợp</h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-bold text-lg">
                    <!-- a -->
                    <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-3">
                        <p class="font-black text-amber-800 text-xl border-b border-amber-200 pb-2">a)</p>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>3/4 thế kỷ =</span>
                            <input id="167-2-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>năm</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>7/8 ngày =</span>
                            <input id="167-2-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>giờ</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>2/5 giờ =</span>
                            <input id="167-2-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>phút</span>
                        </div>
                    </div>

                    <!-- b -->
                    <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-3">
                        <p class="font-black text-rose-800 text-xl border-b border-rose-200 pb-2">b)</p>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>45 phút =</span>
                            <input id="167-2-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>giờ</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>12 phút =</span>
                            <input id="167-2-5" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>giờ</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>15 giây =</span>
                            <input id="167-2-6" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>phút</span>
                        </div>
                    </div>

                    <!-- c -->
                    <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-3">
                        <p class="font-black text-blue-800 text-xl border-b border-blue-200 pb-2">c)</p>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>2 giờ 15 phút =</span>
                            <input id="167-2-7" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>giờ</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>5 phút 12 giây =</span>
                            <input id="167-2-8" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>phút</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>96 phút =</span>
                            <input id="167-2-9" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>giờ</span>
                        </div>
                    </div>
                </div>

                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-167-2').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-167-2" onclick="window.check_167_2()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-167-2" class="hidden bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-lg font-bold text-emerald-900 space-y-1">
                    <p>a) 75 năm; 21 giờ; 24 phút</p>
                    <p>b) 0,75 giờ; 0,2 giờ; 0,25 phút</p>
                    <p>c) 2,25 giờ; 5,2 phút; 1,6 giờ</p>
                </div>
            </div>

            <!-- Bài 3: Phép tính số đo thời gian -->
            <div id="lesson167_b3" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-amber-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">3</div>
                    <h3 class="text-xl md:text-2xl font-black text-amber-700">Bài 3. Tính</h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-bold text-lg">
                    <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-3">
                        <p class="font-black text-amber-900 text-xl">a) 7 giờ 48 phút + 5 giờ 32 phút</p>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-gray-700">=</span>
                            <input id="167-3-1-h" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>giờ</span>
                            <input id="167-3-1-m" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>phút</span>
                        </div>
                    </div>

                    <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-3">
                        <p class="font-black text-blue-900 text-xl">b) 12 phút 54 giây − 8 phút 30 giây</p>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-gray-700">=</span>
                            <input id="167-3-2-m" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>phút</span>
                            <input id="167-3-2-s" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>giây</span>
                        </div>
                    </div>

                    <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-3">
                        <p class="font-black text-rose-900 text-xl">c) 9 phút 15 giây × 4</p>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-gray-700">=</span>
                            <input id="167-3-3-m" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>phút</span>
                        </div>
                    </div>

                    <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-3">
                        <p class="font-black text-emerald-900 text-xl">d) 16 giờ 10 phút : 5</p>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-gray-700">=</span>
                            <input id="167-3-4-h" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>giờ</span>
                            <input id="167-3-4-m" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>phút</span>
                        </div>
                    </div>
                </div>

                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-167-3').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-167-3" onclick="window.check_167_3()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-167-3" class="hidden bg-amber-50 p-4 rounded-2xl border border-amber-200 text-lg font-bold text-amber-900 space-y-1">
                    <p>a) 7 giờ 48 phút + 5 giờ 32 phút = 12 giờ 80 phút = <span class="text-emerald-700">13 giờ 20 phút</span></p>
                    <p>b) 12 phút 54 giây − 8 phút 30 giây = <span class="text-emerald-700">4 phút 24 giây</span></p>
                    <p>c) 9 phút 15 giây × 4 = 36 phút 60 giây = <span class="text-emerald-700">37 phút</span></p>
                    <p>d) 16 giờ 10 phút : 5 = 15 giờ 70 phút : 5 = <span class="text-emerald-700">3 giờ 14 phút</span></p>
                </div>
            </div>

            <!-- Bài 4: Đoàn tàu Hà Nội - Sài Gòn -->
            <div id="lesson167_b4" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-rose-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">4</div>
                    <h3 class="text-xl md:text-2xl font-black text-rose-700">Bài 4. Giải bài toán đoàn tàu</h3>
                </div>
                <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Một đoàn tàu khởi hành từ ga Hà Nội lúc <span class="font-black text-blue-700">6 giờ 10 phút</span>, đến ga Sài Gòn lúc <span class="font-black text-blue-700">18 giờ ngày hôm sau</span>. Hỏi đoàn tàu đó đi từ ga Hà Nội đến ga Sài Gòn hết bao lâu?
                    </p>
                    <div class="flex items-center gap-3 flex-wrap font-bold text-lg">
                        <span class="text-gray-700">Đoàn tàu đi hết:</span>
                        <input id="167-4-h" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                        <span>giờ</span>
                        <input id="167-4-m" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                        <span>phút</span>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-167-4').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-167-4" onclick="window.check_167_4()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-167-4" class="hidden bg-rose-50 p-4 rounded-2xl border border-rose-200 text-lg font-bold text-rose-900 space-y-1">
                    <p>Từ 6 giờ 10 phút hôm nay đến 6 giờ 10 phút ngày hôm sau là 24 giờ.</p>
                    <p>Từ 6 giờ 10 phút hôm sau đến 18 giờ hôm sau là: 18 giờ − 6 giờ 10 phút = 11 giờ 50 phút.</p>
                    <p>Tổng thời gian: 24 giờ + 11 giờ 50 phút = <span class="text-emerald-700">35 giờ 50 phút</span></p>
                    <p>Chúc mừng em đã giải đúng!</p>
                </div>
            </div>

            <!-- Bài 5: Đố em! (Mấy giờ rồi) -->
            <div id="lesson167_b5" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-teal-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">5</div>
                    <div>
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-teal-100 text-teal-800 font-black rounded text-sm">Đố em !</span>
                        <h3 class="text-xl md:text-2xl font-black text-teal-700 mt-1">Bài 5. Tìm xem bây giờ là mấy giờ</h3>
                    </div>
                </div>
                <div class="bg-teal-50 p-5 rounded-2xl border border-teal-200 space-y-4">
                    <img src="assets/images/toan/toan_tap_2/167/167-5-do-em.png" class="max-w-[450px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Nam và Mai đố xem mấy giờ">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Nam hỏi: "Bây giờ là mấy giờ rồi Mai ơi?". Mai trả lời: "Thời gian từ bây giờ đến nửa đêm bằng <span class="font-black text-blue-700">1/2</span> thời gian từ lúc bắt đầu ngày hôm nay đến bây giờ."
                    </p>
                    <div class="flex items-center gap-3 flex-wrap font-bold text-lg">
                        <span class="text-gray-700">Bây giờ là:</span>
                        <input id="167-5" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-teal-300 rounded-xl font-bold outline-none" placeholder="?">
                        <span>giờ (hoặc 4 giờ chiều)</span>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-167-5').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-167-5" onclick="window.check_167_5()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-167-5" class="hidden bg-teal-50 p-4 rounded-2xl border border-teal-200 text-lg font-bold text-teal-900 space-y-1">
                    <p>Một ngày có 24 giờ (từ 0 giờ đến nửa đêm 24 giờ).</p>
                    <p>Tổng thời gian từ 0h đến bây giờ + từ bây giờ đến nửa đêm = 24 giờ.</p>
                    <p>Coi thời gian từ 0h đến bây giờ là 2 phần, thì từ bây giờ đến nửa đêm là 1 phần.</p>
                    <p>Tổng số phần bằng nhau: 2 + 1 = 3 phần.</p>
                    <p>Thời gian từ 0h đến bây giờ là: 24 : 3 × 2 = <span class="text-emerald-700">16 giờ</span> (hay 4 giờ chiều)</p>
                    <p>Chúc mừng em đã giải đúng câu đố!</p>
                </div>
            </div>

        </div>
    `,

    quizPool: [
        { question: "3 năm 8 tháng = ? tháng", options: ["44 tháng", "38 tháng", "36 tháng", "40 tháng"], answer: 0 },
        { question: "4 ngày 15 giờ = ? giờ", options: ["111 giờ", "96 giờ", "100 giờ", "115 giờ"], answer: 0 },
        { question: "40 tháng = ? năm ? tháng", options: ["3 năm 4 tháng", "3 năm 6 tháng", "4 năm 0 tháng", "2 năm 16 tháng"], answer: 0 },
        { question: "3/4 thế kỷ = ? năm", options: ["75 năm", "25 năm", "50 năm", "34 năm"], answer: 0 },
        { question: "7/8 ngày = ? giờ", options: ["21 giờ", "14 giờ", "18 giờ", "20 giờ"], answer: 0 },
        { question: "2/5 giờ = ? phút", options: ["24 phút", "25 phút", "12 phút", "20 phút"], answer: 0 },
        { question: "45 phút = ? giờ", options: ["0,75 giờ", "0,45 giờ", "0,5 giờ", "0,8 giờ"], answer: 0 },
        { question: "12 phút = ? giờ", options: ["0,2 giờ", "0,12 giờ", "0,5 giờ", "0,25 giờ"], answer: 0 },
        { question: "2 giờ 15 phút = ? giờ", options: ["2,25 giờ", "2,15 giờ", "2,5 giờ", "2,3 giờ"], answer: 0 },
        { question: "7 giờ 48 phút + 5 giờ 32 phút = ?", options: ["13 giờ 20 phút", "12 giờ 80 phút", "13 giờ 10 phút", "12 giờ 20 phút"], answer: 0 },
        { question: "9 phút 15 giây × 4 = ?", options: ["37 phút", "36 phút 60 giây", "36 phút 15 giây", "38 phút"], answer: 0 },
        { question: "16 giờ 10 phút : 5 = ?", options: ["3 giờ 14 phút", "3 giờ 10 phút", "3 giờ 20 phút", "3 giờ 2 phút"], answer: 0 },
        { question: "Tàu đi từ 6h10 hôm nay đến 18h hôm sau hết bao lâu?", options: ["35 giờ 50 phút", "36 giờ", "24 giờ", "35 giờ 10 phút"], answer: 0 },
        { question: "Thời gian từ bây giờ đến 24h = 1/2 từ 0h đến bây giờ. Bây giờ là?", options: ["16 giờ", "12 giờ", "18 giờ", "8 giờ"], answer: 0 },
        { question: "15 giây = ? phút", options: ["0,25 phút", "0,15 phút", "0,5 phút", "0,2 phút"], answer: 0 }
    ]
};

window.lesson167 = lesson167;

window.check_167_1 = function() {
    const checks = [
        {id:'167-1-1', ans:['44']},
        {id:'167-1-2', ans:['111']},
        {id:'167-1-3', ans:['387']},
        {id:'167-1-4', ans:['340']},
        {id:'167-1-5', ans:['3']},
        {id:'167-1-6', ans:['4']},
        {id:'167-1-7', ans:['3']},
        {id:'167-1-8', ans:['3']},
        {id:'167-1-9', ans:['2']},
        {id:'167-1-10', ans:['30']},
        {id:'167-1-11', ans:['2']},
        {id:'167-1-12', ans:['15']},
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
        "a) 44; 111; 387; 340<br>b) 3 năm 4 tháng; 3 ngày 3 giờ; 2 giờ 30 phút; 2 phút 15 giây",
        "",
        "Gợi ý: 1 năm = 12 tháng, 1 ngày = 24 giờ, 1 giờ = 60 phút, 1 phút = 60 giây.",
        "a) 3×12+8=44; 4×24+15=111; 6×60+27=387; 5×60+40=340.<br>b) 40:12=3 dư 4; 75:24=3 dư 3; 150:60=2 dư 30; 135:60=2 dư 15.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Đổi đơn vị thời gian", Math.round(correct/checks.length*100), "btn-check-167-1", 0, checks.length, correct);
};

window.check_167_2 = function() {
    const checks = [
        {id:'167-2-1', ans:['75']},
        {id:'167-2-2', ans:['21']},
        {id:'167-2-3', ans:['24']},
        {id:'167-2-4', ans:['0,75','0.75']},
        {id:'167-2-5', ans:['0,2','0.2']},
        {id:'167-2-6', ans:['0,25','0.25']},
        {id:'167-2-7', ans:['2,25','2.25']},
        {id:'167-2-8', ans:['5,2','5.2']},
        {id:'167-2-9', ans:['1,6','1.6']},
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
        "a) 75 năm; 21 giờ; 24 phút<br>b) 0,75 giờ; 0,2 giờ; 0,25 phút<br>c) 2,25 giờ; 5,2 phút; 1,6 giờ",
        "",
        "Gợi ý: Nhân/chia phân số với 100 (thế kỷ), 24 (ngày), 60 (giờ/phút).",
        "a) 100×3/4=75; 24×7/8=21; 60×2/5=24.<br>b) 45:60=0,75; 12:60=0,2; 15:60=0,25.<br>c) 2+15/60=2,25; 5+12/60=5,2; 96:60=1,6.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Đổi thời gian ra phân số/số thập phân", Math.round(correct/checks.length*100), "btn-check-167-2", 0, checks.length, correct);
};

window.check_167_3 = function() {
    const checks = [
        {id:'167-3-1-h', ans:['13']},
        {id:'167-3-1-m', ans:['20']},
        {id:'167-3-2-m', ans:['4']},
        {id:'167-3-2-s', ans:['24']},
        {id:'167-3-3-m', ans:['37']},
        {id:'167-3-4-h', ans:['3']},
        {id:'167-3-4-m', ans:['14']},
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
        "a) 13 giờ 20 phút<br>b) 4 phút 24 giây<br>c) 37 phút<br>d) 3 giờ 14 phút",
        "",
        "Gợi ý: Đặt tính cộng/trừ/nhân/chia theo từng loại đơn vị đo, lưu ý đổi 60 phút = 1 giờ, 60 giây = 1 phút.",
        "a) 12 giờ 80 phút = 13 giờ 20 phút.<br>b) 4 phút 24 giây.<br>c) 36 phút 60 giây = 37 phút.<br>d) 16h10p = 15h70p; :5 = 3 giờ 14 phút.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Phép tính số đo thời gian", Math.round(correct/checks.length*100), "btn-check-167-3", 0, checks.length, correct);
};

window.check_167_4 = function() {
    const v1 = document.getElementById('167-4-h')?.value.trim().replace(/\s/g,'') || '';
    const v2 = document.getElementById('167-4-m')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = (v1 === '35' && v2 === '50');
    window.showMathFeedback(isCorrect,
        "35 giờ 50 phút",
        "",
        "Gợi ý: Từ 6h10 hôm nay đến 6h10 hôm sau = 24 giờ. Từ 6h10 hôm sau đến 18h = 11 giờ 50 phút. Cộng hai khoảng thời gian.",
        "24 giờ + (18 giờ − 6 giờ 10 phút) = 24 giờ + 11 giờ 50 phút = 35 giờ 50 phút.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Đoàn tàu Hà Nội Sài Gòn", isCorrect?100:0, "btn-check-167-4", 0, 1, isCorrect?1:0);
};

window.check_167_5 = function() {
    const v = document.getElementById('167-5')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = (v === '16' || v === '16 giờ' || v === '4 giờ chiều');
    window.showMathFeedback(isCorrect,
        "16 giờ (hay 4 giờ chiều)",
        "",
        "Gợi ý: Nửa đêm là 24h. Tổng thời gian từ 0h đến bây giờ + từ bây giờ đến 24h = 24h. Tỉ số = 1/2.",
        "Tổng phần = 2 + 1 = 3 phần. Bây giờ là 24 : 3 × 2 = 16 giờ.<br>Chúc mừng em đã giải đúng câu đố!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 5. Đố em mấy giờ", isCorrect?100:0, "btn-check-167-5", 0, 1, isCorrect?1:0);
};

import './logic.js';
