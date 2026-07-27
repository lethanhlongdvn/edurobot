export const lesson159 = {
    period: "159",
    title: "BÀI 69: ÔN TẬP CÁC PHÉP TÍNH VỚI SỐ TỰ NHIÊN, PHÂN SỐ, SỐ THẬP PHÂN (TIẾT 4)",
    topic: "Ôn tập phép chia và tính nhẩm",
    week: "32",

    content: `
        <div class="space-y-10">
            <div class="bg-blue-50 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-4 border-blue-200 shadow-xl">
                <h3 class="text-2xl md:text-3xl font-black text-blue-700 mb-8 uppercase tracking-wider text-center">Kiến thức cần nhớ</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border-t-8 border-blue-500 space-y-4">
                        <p class="font-black text-blue-600 text-xl md:text-2xl italic underline">1. Phép chia và thử lại:</p>
                        <ul class="space-y-3 text-gray-700 text-lg md:text-xl">
                            <li>• Phép chia hết: <span class="font-black text-blue-700">a : b = c</span> $\\Rightarrow$ <span class="font-black text-emerald-700">Thử lại: c × b = a</span></li>
                            <li>• Phép chia có dư: <span class="font-black text-blue-700">a : b = c (dư r)</span> $\\Rightarrow$ <span class="font-black text-emerald-700">Thử lại: c × b + r = a</span></li>
                        </ul>
                    </div>
                    <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border-t-8 border-emerald-500 space-y-4">
                        <p class="font-black text-emerald-600 text-xl md:text-2xl italic underline">2. Qui tắc tính nhẩm số thập phân:</p>
                        <ul class="space-y-3 text-gray-700 text-lg md:text-xl">
                            <li>• Nhân với <span class="font-black text-blue-700">10, 100, 1000...</span> tương đương với <span class="font-black text-emerald-700">Chia cho 0,1; 0,01; 0,001...</span></li>
                            <li>• Nhân với <span class="font-black text-blue-700">0,1; 0,01; 0,001...</span> tương đương với <span class="font-black text-emerald-700">Chia cho 10, 100, 1000...</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="space-y-10 pb-10">

            <!-- Bài 1: Tính rồi thử lại -->
            <div id="lesson159_b1" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-blue-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">1</div>
                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Tính rồi thử lại (theo mẫu)</h3>
                </div>
                <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-4 font-bold text-lg">
                    <p class="text-gray-800">
                        Mẫu: 3 904 : 32 = 122 (thử lại: 122 × 32 = 3 904); 3 917 : 32 = 122 dư 13 (thử lại: 122 × 32 + 13 = 3 917).
                    </p>
                    <div class="space-y-4 border-t border-blue-200 pt-4">
                        <div class="space-y-2">
                            <p class="text-blue-900 font-black">a) 14 138 : 45</p>
                            <div class="flex items-center gap-3 flex-wrap">
                                <span>Thương là:</span>
                                <input id="159-1-q1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                                <span>Số dư là:</span>
                                <input id="159-1-r1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            </div>
                        </div>
                        <div class="space-y-2 border-t border-blue-200 pt-3">
                            <p class="text-blue-900 font-black">b) 8 924 : 23</p>
                            <div class="flex items-center gap-3 flex-wrap">
                                <span>Thương là:</span>
                                <input id="159-1-q2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                                <span>Số dư là:</span>
                                <input id="159-1-r2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="0">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-159-1').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-159-1" onclick="window.check_159_1()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-159-1" class="hidden bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg font-bold text-blue-900 space-y-1">
                    <p>a) 14 138 : 45 = <span class="text-emerald-700">314 dư 8</span>. Thử lại: 314 × 45 + 8 = 14 138.</p>
                    <p>b) 8 924 : 23 = <span class="text-emerald-700">388</span> (chia hết, dư 0). Thử lại: 388 × 23 = 8 924.</p>
                </div>
            </div>

            <!-- Bài 2: Tính nhẩm -->
            <div id="lesson159_b2" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-emerald-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">2</div>
                    <h3 class="text-xl md:text-2xl font-black text-emerald-700">Bài 2. Tính nhẩm</h3>
                </div>
                <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-4 font-bold text-lg">
                    <p class="font-black text-emerald-900 text-xl">a) Nhân/chia với 10, 100, 1 000 và 0,1; 0,01; 0,001:</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="space-y-2">
                            <div class="flex items-center gap-2"><span>27,6 × 10 =</span><input id="159-2-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?"></div>
                            <div class="flex items-center gap-2"><span>27,6 : 0,1 =</span><input id="159-2-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?"></div>
                        </div>
                        <div class="space-y-2">
                            <div class="flex items-center gap-2"><span>70,82 × 100 =</span><input id="159-2-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?"></div>
                            <div class="flex items-center gap-2"><span>70,82 : 0,01 =</span><input id="159-2-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?"></div>
                        </div>
                        <div class="space-y-2">
                            <div class="flex items-center gap-2"><span>4,523 × 1 000 =</span><input id="159-2-5" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?"></div>
                            <div class="flex items-center gap-2"><span>4,523 : 0,001 =</span><input id="159-2-6" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?"></div>
                        </div>
                    </div>

                    <p class="font-black text-emerald-900 text-xl border-t border-emerald-200 pt-3">b) So sánh nhân với 0,1; 0,01... và chia cho 10, 100...:</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="space-y-2">
                            <div class="flex items-center gap-2"><span>432 × 0,1 =</span><input id="159-2-7" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?"></div>
                            <div class="flex items-center gap-2"><span>432 : 10 =</span><input id="159-2-8" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?"></div>
                        </div>
                        <div class="space-y-2">
                            <div class="flex items-center gap-2"><span>360,5 × 0,01 =</span><input id="159-2-9" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?"></div>
                            <div class="flex items-center gap-2"><span>360,5 : 100 =</span><input id="159-2-10" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?"></div>
                        </div>
                        <div class="space-y-2">
                            <div class="flex items-center gap-2"><span>697 × 0,001 =</span><input id="159-2-11" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?"></div>
                            <div class="flex items-center gap-2"><span>697 : 1 000 =</span><input id="159-2-12" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?"></div>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-159-2').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-159-2" onclick="window.check_159_2()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-159-2" class="hidden bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-lg font-bold text-emerald-900 space-y-1">
                    <p>a) 276; 276 | 7 082; 7 082 | 4 523; 4 523</p>
                    <p>b) 43,2; 43,2 | 3,605; 3,605 | 0,697; 0,697</p>
                </div>
            </div>

            <!-- Bài 3: Tính giá trị của biểu thức -->
            <div id="lesson159_b3" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-amber-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">3</div>
                    <h3 class="text-xl md:text-2xl font-black text-amber-700">Bài 3. Tính giá trị của biểu thức</h3>
                </div>
                <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4 font-bold text-lg">
                    <div class="space-y-4">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>a) 61,4 × (15 : 0,25) − 2 024 =</span>
                            <input id="159-3-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>b) (15/14 × 28/9) + (7/4 : 3/5) =</span>
                            <input id="159-3-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="25/4">
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-159-3').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-159-3" onclick="window.check_159_3()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-159-3" class="hidden bg-amber-50 p-4 rounded-2xl border border-amber-200 text-lg font-bold text-amber-900 space-y-1">
                    <p>a) 61,4 × 60 − 2 024 = 3 684 − 2 024 = <span class="text-emerald-700">1 660</span></p>
                    <p>b) 10/3 + 35/12 = 40/12 + 35/12 = 75/12 = <span class="text-emerald-700">25/4</span> (hoặc 6,25)</p>
                </div>
            </div>

            <!-- Bài 4: May quần áo -->
            <div id="lesson159_b4" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-rose-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">4</div>
                    <h3 class="text-xl md:text-2xl font-black text-rose-700">Bài 4. May bộ quần áo từ 200 m vải</h3>
                </div>
                <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-4 font-bold text-lg">
                    <p class="text-gray-800 leading-relaxed">
                        May một cái quần hết <span class="font-black text-blue-700">2,06 m vải</span>, may một cái áo hết <span class="font-black text-blue-700">1,54 m vải</span>. Hỏi với <span class="font-black text-blue-700">200 m vải</span>, may được nhiều nhất bao nhiêu bộ quần áo như thế và còn thừa mấy mét vải?
                    </p>
                    <div class="space-y-3 border-t border-rose-200 pt-4">
                        <div class="flex items-center gap-3 flex-wrap">
                            <span>- May được nhiều nhất:</span>
                            <input id="159-4-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>bộ quần áo</span>
                        </div>
                        <div class="flex items-center gap-3 flex-wrap">
                            <span>- Còn thừa:</span>
                            <input id="159-4-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>mét vải</span>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-159-4').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-159-4" onclick="window.check_159_4()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-159-4" class="hidden bg-rose-50 p-4 rounded-2xl border border-rose-200 text-lg font-bold text-rose-900 space-y-1">
                    <p>May 1 bộ quần áo hết: 2,06 + 1,54 = 3,6 m vải.</p>
                    <p>Ta có: 200 : 3,6 = 55 (dư 2 m).</p>
                    <p>Vậy may được nhiều nhất <span class="text-emerald-700">55 bộ quần áo</span> và còn thừa <span class="text-emerald-700">2 m vải</span>.</p>
                </div>
            </div>

            <!-- Bài 5: So sánh kết quả biểu thức -->
            <div id="lesson159_b5" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-teal-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">5</div>
                    <h3 class="text-xl md:text-2xl font-black text-teal-700">Bài 5. Chọn câu trả lời đúng</h3>
                </div>
                <div class="bg-teal-50 p-5 rounded-2xl border border-teal-200 space-y-4 font-bold text-lg">
                    <p class="text-gray-800 leading-relaxed">
                        Kết quả tính <span class="font-black text-blue-700">4 : 0,5 × 2,5</span> bằng giá trị của biểu thức nào dưới đây?
                    </p>
                    <img src="assets/images/toan/toan_tap_2/159/159-5-robot-hoc-bai.png" class="max-w-[400px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Rô-bốt tính toán">

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button onclick="window.select159_5('A')" id="btn-159-5-A" class="p-4 bg-white rounded-2xl border-4 border-teal-100 hover:border-teal-400 font-black text-lg text-center">A. 4 : (2 × 2,5)</button>
                        <button onclick="window.select159_5('B')" id="btn-159-5-B" class="p-4 bg-white rounded-2xl border-4 border-teal-100 hover:border-teal-400 font-black text-lg text-center">B. 4 × 2 × 2,5</button>
                        <button onclick="window.select159_5('C')" id="btn-159-5-C" class="p-4 bg-white rounded-2xl border-4 border-teal-100 hover:border-teal-400 font-black text-lg text-center">C. 4 × (2 : 2,5)</button>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-159-5').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-159-5" onclick="window.check_159_5()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-159-5" class="hidden bg-teal-50 p-4 rounded-2xl border border-teal-200 text-lg font-bold text-teal-900 space-y-1">
                    <p>4 : 0,5 × 2,5 = 8 × 2,5 = 20.</p>
                    <p>Vì 4 : 0,5 = 4 × 2 nên 4 : 0,5 × 2,5 = 4 × 2 × 2,5 = 20.</p>
                    <p>Đáp án đúng: <span class="text-emerald-700">B. 4 × 2 × 2,5</span>.</p>
                </div>
            </div>

        </div>
    `,

    quizPool: [
        { question: "14 138 : 45 có thương và số dư là?", options: ["314 dư 8", "314 dư 0", "314 dư 18", "315 dư 8"], answer: 0 },
        { question: "8 924 : 23 có thương là?", options: ["388", "378", "398", "387"], answer: 0 },
        { question: "27,6 : 0,1 có kết quả bằng bao nhiêu?", options: ["276", "2,76", "2760", "0,276"], answer: 0 },
        { question: "70,82 : 0,01 có kết quả bằng bao nhiêu?", options: ["7 082", "708,2", "70,82", "70 820"], answer: 0 },
        { question: "432 × 0,1 bằng kết quả của phép tính nào?", options: ["432 : 10", "432 × 10", "432 : 100", "432 × 100"], answer: 0 },
        { question: "360,5 : 100 có kết quả là?", options: ["3,605", "36,05", "0,3605", "3605"], answer: 0 },
        { question: "61,4 × (15 : 0,25) − 2 024 = ?", options: ["1 660", "1 650", "1 670", "1 680"], answer: 0 },
        { question: "May 1 bộ quần áo hết bao nhiêu m vải (quần 2,06m, áo 1,54m)?", options: ["3,6 m", "3,5 m", "3,8 m", "4 m"], answer: 0 },
        { question: "Với 200m vải may được nhiều nhất bao nhiêu bộ quần áo (mỗi bộ 3,6m)?", options: ["55 bộ dư 2 m", "55 bộ dư 1 m", "56 bộ dư 0 m", "54 bộ dư 3 m"], answer: 0 },
        { question: "4 : 0,5 × 2,5 bằng giá trị biểu thức nào?", options: ["4 × 2 × 2,5", "4 : (2 × 2,5)", "4 × (2 : 2,5)", "4 : 2 : 2,5"], answer: 0 },
        { question: "Chia một số cho 0,5 tương đương với nhân số đó với bao nhiêu?", options: ["2", "5", "0,2", "10"], answer: 0 },
        { question: "Chia một số cho 0,25 tương đương với nhân số đó với bao nhiêu?", options: ["4", "2", "25", "5"], answer: 0 },
        { question: "697 × 0,001 bằng phép tính nào?", options: ["697 : 1 000", "697 : 100", "697 × 1 000", "697 : 10"], answer: 0 },
        { question: "4,523 : 0,001 có kết quả là?", options: ["4 523", "45,23", "452,3", "0,004523"], answer: 0 },
        { question: "75/12 rút gọn thành phân số tối giản là?", options: ["25/4", "15/4", "25/3", "5/4"], answer: 0 }
    ]
};

window.lesson159 = lesson159;

window.check_159_1 = function() {
    const q1 = document.getElementById('159-1-q1')?.value.trim() || '';
    const r1 = document.getElementById('159-1-r1')?.value.trim() || '';
    const q2 = document.getElementById('159-1-q2')?.value.trim() || '';
    const r2 = document.getElementById('159-1-r2')?.value.trim() || '0';
    const isCorrect = (q1 === '314' && r1 === '8' && q2 === '388' && (r2 === '0' || r2 === ''));
    window.showMathFeedback(isCorrect,
        "a) 314 dư 8<br>b) 388 dư 0",
        "",
        "Gợi ý: Thực hiện phép chia số tự nhiên rồi nhân thương với số chia cộng số dư để kiểm tra kết quả.",
        "a) 14 138 : 45 = 314 dư 8 (314 × 45 + 8 = 14 138).<br>b) 8 924 : 23 = 388 (388 × 23 = 8 924).<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Phép chia số tự nhiên", isCorrect?100:0, "btn-check-159-1", 0, 1, isCorrect?1:0);
};

window.check_159_2 = function() {
    const checks = [
        {id:'159-2-1', ans:['276']},
        {id:'159-2-2', ans:['276']},
        {id:'159-2-3', ans:['7082','7 082']},
        {id:'159-2-4', ans:['7082','7 082']},
        {id:'159-2-5', ans:['4523','4 523']},
        {id:'159-2-6', ans:['4523','4 523']},
        {id:'159-2-7', ans:['43,2','43.2']},
        {id:'159-2-8', ans:['43,2','43.2']},
        {id:'159-2-9', ans:['3,605','3.605']},
        {id:'159-2-10', ans:['3,605','3.605']},
        {id:'159-2-11', ans:['0,697','0.697']},
        {id:'159-2-12', ans:['0,697','0.697']},
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
        "a) 276; 7082; 4523<br>b) 43,2; 3,605; 0,697",
        "",
        "Gợi ý: Nhân với 10/100/1000 cũng như chia cho 0,1/0,01/0,001. Nhân với 0,1/0,01/0,001 cũng như chia cho 10/100/1000.",
        "a) 276 | 7 082 | 4 523.<br>b) 43,2 | 3,605 | 0,697.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Tính nhẩm số thập phân", Math.round(correct/checks.length*100), "btn-check-159-2", 0, checks.length, correct);
};

window.check_159_3 = function() {
    const v1 = document.getElementById('159-3-1')?.value.trim().replace(/\s/g,'') || '';
    const v2 = document.getElementById('159-3-2')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = ((v1 === '1660' || v1 === '1 660') && (v2 === '25/4' || v2 === '6,25' || v2 === '6.25'));
    window.showMathFeedback(isCorrect,
        "a) 1 660, b) 25/4 (hoặc 6,25)",
        "",
        "Gợi ý: a) Tính trong ngoặc trước (15 : 0,25 = 60), rồi lấy 61,4 × 60 − 2 024. b) Rút gọn từng cụm nhân/chia phân số.",
        "a) 61,4 × 60 − 2 024 = 3 684 − 2 024 = 1 660.<br>b) 10/3 + 35/12 = 75/12 = 25/4.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Giá trị biểu thức", isCorrect?100:0, "btn-check-159-3", 0, 1, isCorrect?1:0);
};

window.check_159_4 = function() {
    const v1 = document.getElementById('159-4-1')?.value.trim() || '';
    const v2 = document.getElementById('159-4-2')?.value.trim() || '';
    const isCorrect = (v1 === '55' && v2 === '2');
    window.showMathFeedback(isCorrect,
        "55 bộ quần áo và còn thừa 2 m vải",
        "",
        "Gợi ý: 1 bộ quần áo = 2,06 + 1,54 = 3,6 m. Lấy 200 : 3,6 = 55 (dư 2).",
        "Số m vải 1 bộ: 2,06 + 1,54 = 3,6 m.<br>200 : 3,6 = 55 bộ (dư 2 m).<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. May quần áo", isCorrect?100:0, "btn-check-159-4", 0, 1, isCorrect?1:0);
};

window._sel159_5 = null;
window.select159_5 = function(opt) {
    ['A','B','C'].forEach(o => {
        const b = document.getElementById('btn-159-5-'+o);
        if (b) b.className = 'p-4 bg-white rounded-2xl border-4 border-teal-100 hover:border-teal-400 transition-all font-black text-lg text-center';
    });
    const sel = document.getElementById('btn-159-5-'+opt);
    if (sel) sel.className = 'p-4 bg-teal-100 rounded-2xl border-4 border-teal-500 transition-all font-black text-lg text-center';
    window._sel159_5 = opt;
};

window.check_159_5 = function() {
    const isCorrect = window._sel159_5 === 'B';
    window.showMathFeedback(isCorrect,
        "B. 4 × 2 × 2,5",
        "",
        "Gợi ý: Vì 4 : 0,5 = 4 × 2 nên 4 : 0,5 × 2,5 = 4 × 2 × 2,5 = 20.",
        "4 : 0,5 × 2,5 = 8 × 2,5 = 20.<br>4 × 2 × 2,5 = 8 × 2,5 = 20.<br>Đáp án đúng B. Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 5. Biểu thức tương đương", isCorrect?100:0, "btn-check-159-5", 0, 1, isCorrect?1:0);
};
