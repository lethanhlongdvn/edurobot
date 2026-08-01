export const lesson156 = {
    period: "156",
    title: "BÀI 69: ÔN TẬP CÁC PHÉP TÍNH VỚI SỐ TỰ NHIÊN, PHÂN SỐ, SỐ THẬP PHÂN",
    topic: "Ôn tập các phép tính",
    week: "32",

    content: `
        <div class="space-y-10">
            <div class="bg-blue-50 p-8 rounded-[2rem] border-4 border-blue-200 shadow-lg">
                <h3 class="text-2xl md:text-3xl font-black text-blue-700 mb-6 uppercase tracking-wider">I. CỘNG, TRỪ SỐ TỰ NHIÊN VÀ SỐ THẬP PHÂN</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-blue-500">
                        <p class="text-2xl md:text-3xl font-black text-gray-800 mb-4">1. Số tự nhiên:</p>
                        <ul class="text-2xl md:text-3xl text-gray-700 list-disc pl-8 space-y-4">
                            <li>Đặt tính thẳng hàng, thẳng cột.</li>
                            <li>Tính từ <span class="text-blue-600 font-black">phải sang trái</span>.</li>
                        </ul>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-cyan-500">
                        <p class="text-2xl md:text-3xl font-black text-gray-800 mb-4">2. Số thập phân:</p>
                        <ul class="text-2xl md:text-3xl text-gray-700 list-disc pl-8 space-y-4">
                            <li>Dấu phẩy thẳng cột.</li>
                            <li>Thực hiện như số tự nhiên.</li>
                            <li>Viết dấu phẩy ở tổng (hiệu) thẳng cột.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="bg-orange-50 p-8 rounded-[2rem] border-4 border-orange-200 shadow-lg">
                <h3 class="text-2xl md:text-3xl font-black text-orange-700 mb-6 uppercase tracking-wider">II. CỘNG, TRỪ PHÂN SỐ</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-orange-400">
                        <p class="text-2xl md:text-3xl font-black text-orange-600 mb-4 uppercase">Cùng mẫu số</p>
                        <p class="text-2xl md:text-3xl text-gray-700 font-bold">Cộng hoặc trừ tử số, giữ nguyên mẫu số.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-orange-400">
                        <p class="text-2xl md:text-3xl font-black text-orange-600 mb-4 uppercase">Khác mẫu số</p>
                        <p class="text-2xl md:text-3xl text-gray-700 font-bold">Quy đồng mẫu số rồi cộng hoặc trừ.</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="space-y-12 pb-10">
            <!-- Bài 1 -->
            <div id="lesson156_b1" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                    <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide">Bài 1. Tính</h3>
                </div>
                
                <div class="max-w-4xl mx-auto space-y-10">
                    <!-- a -->
                    <div class="p-8 bg-blue-50 rounded-[2.5rem] border-2 border-blue-100">
                        <div class="text-2xl md:text-3xl font-bold text-blue-800 mb-6 underline decoration-4 underline-offset-8">a)</div>
                        <div class="space-y-6">
                            <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                                <span class="text-2xl md:text-3xl font-bold text-gray-700 md:min-w-[320px]">536 817 + 82 579 =</span>
                                <input id="156-1-1" type="text" class="w-full md:w-48 h-14 md:h-16 text-center text-2xl md:text-3xl font-black bg-white border-4 border-blue-300 rounded-2xl outline-none focus:border-blue-600 transition-colors" placeholder="...">
                            </div>
                            <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                                <span class="text-2xl md:text-3xl font-bold text-gray-700 md:min-w-[320px]">981 759 - 645 267 =</span>
                                <input id="156-1-2" type="text" class="w-full md:w-48 h-14 md:h-16 text-center text-2xl md:text-3xl font-black bg-white border-4 border-blue-300 rounded-2xl outline-none focus:border-blue-600 transition-colors" placeholder="...">
                            </div>
                        </div>
                    </div>

                    <!-- b -->
                    <div class="p-8 bg-cyan-50 rounded-[2.5rem] border-2 border-cyan-100">
                        <div class="text-2xl md:text-3xl font-bold text-cyan-800 mb-6 underline decoration-4 underline-offset-8">b)</div>
                        <div class="space-y-6">
                            <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                                <span class="text-2xl md:text-3xl font-bold text-gray-700 md:min-w-[320px]">64,38 + 93,46 =</span>
                                <input id="156-1-3" type="text" class="w-full md:w-48 h-14 md:h-16 text-center text-2xl md:text-3xl font-black bg-white border-4 border-cyan-300 rounded-2xl outline-none focus:border-cyan-600 transition-colors" placeholder="...">
                            </div>
                            <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                                <span class="text-2xl md:text-3xl font-bold text-gray-700 md:min-w-[320px]">86,09 - 54,3 =</span>
                                <input id="156-1-4" type="text" class="w-full md:w-48 h-14 md:h-16 text-center text-2xl md:text-3xl font-black bg-white border-4 border-cyan-300 rounded-2xl outline-none focus:border-cyan-600 transition-colors" placeholder="...">
                            </div>
                        </div>
                    </div>

                    <!-- c -->
                    <div class="p-8 bg-orange-50 rounded-[2.5rem] border-2 border-orange-100">
                        <div class="text-2xl md:text-3xl font-bold text-orange-800 mb-8 underline decoration-4 underline-offset-8">c)</div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div class="flex items-center justify-center gap-6">
                                <div class="flex flex-col items-center text-3xl md:text-4xl font-black">
                                    <div class="border-b-4 border-gray-800 px-2">4</div><div>7</div>
                                </div>
                                <span class="text-3xl md:text-4xl font-black text-orange-500">+</span>
                                <div class="flex flex-col items-center text-3xl md:text-4xl font-black">
                                    <div class="border-b-4 border-gray-800 px-2">3</div><div>5</div>
                                </div>
                                <span class="text-3xl md:text-4xl font-black text-gray-700">=</span>
                                <div class="flex flex-col items-center">
                                    <input id="156-1-5n" class="w-20 h-14 md:w-24 md:h-16 text-center text-3xl md:text-4xl font-black border-4 border-orange-300 rounded-2xl outline-none focus:border-orange-500" placeholder="?">
                                    <div class="w-full border-b-4 border-gray-800 my-2"></div>
                                    <input id="156-1-5d" class="w-20 h-14 md:w-24 md:h-16 text-center text-3xl md:text-4xl font-black border-4 border-orange-300 rounded-2xl outline-none focus:border-orange-500" placeholder="?">
                                </div>
                            </div>
                            <div class="flex items-center justify-center gap-6">
                                <div class="flex flex-col items-center text-3xl md:text-4xl font-black">
                                    <div class="border-b-4 border-gray-800 px-2">10</div><div>9</div>
                                </div>
                                <span class="text-3xl md:text-4xl font-black text-orange-500">-</span>
                                <div class="flex flex-col items-center text-3xl md:text-4xl font-black">
                                    <div class="border-b-4 border-gray-800 px-2">5</div><div>6</div>
                                </div>
                                <span class="text-3xl md:text-4xl font-black text-gray-700">=</span>
                                <div class="flex flex-col items-center">
                                    <input id="156-1-6n" class="w-20 h-14 md:w-24 md:h-16 text-center text-3xl md:text-4xl font-black border-4 border-orange-300 rounded-2xl outline-none focus:border-orange-500" placeholder="?">
                                    <div class="w-full border-b-4 border-gray-800 my-2"></div>
                                    <input id="156-1-6d" class="w-20 h-14 md:w-24 md:h-16 text-center text-3xl md:text-4xl font-black border-4 border-orange-300 rounded-2xl outline-none focus:border-orange-500" placeholder="?">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12 gap-6">
                    <button onclick="window.reset156_1()" class="w-16 h-16 md:w-20 md:h-20 bg-white border-4 border-blue-500 text-blue-500 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center shadow-lg hover:bg-blue-50 transition-all">
                        <svg class="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                    </button>
                    <button id="btn-check-156-1" onclick="window.check_156_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="lesson156_b2" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-orange-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-14 h-14 md:w-16 md:h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                    <h3 class="text-2xl md:text-3xl font-black text-orange-700 uppercase tracking-wide">Bài 2. Tìm số hoặc chữ thích hợp với dấu "?"</h3>
                </div>
                
                <div class="max-w-4xl mx-auto space-y-10">
                    <div class="p-10 bg-orange-50 rounded-[3rem] border-4 border-orange-200">
                        <div class="text-2xl md:text-3xl font-bold text-orange-800 mb-8 underline decoration-4 underline-offset-8">a)</div>
                        <div class="space-y-8 text-3xl md:text-4xl font-black text-gray-800">
                            <div class="flex flex-wrap items-center gap-4">a + <input id="156-2-1" class="w-20 h-14 md:w-24 md:h-16 text-center border-4 border-orange-400 bg-white rounded-2xl outline-none text-orange-700 focus:ring-4 ring-orange-200" placeholder="?"> = a = <input id="156-2-2" class="w-20 h-14 md:w-24 md:h-16 text-center border-4 border-orange-400 bg-white rounded-2xl outline-none text-orange-700 focus:ring-4 ring-orange-200" placeholder="?"> + a</div>
                            <div class="flex flex-wrap items-center gap-4">a - <input id="156-2-3" class="w-20 h-14 md:w-24 md:h-16 text-center border-4 border-orange-400 bg-white rounded-2xl outline-none text-orange-700 focus:ring-4 ring-orange-200" placeholder="?"> = a</div>
                            <div class="flex flex-wrap items-center gap-4">a - <input id="156-2-4" class="w-20 h-14 md:w-24 md:h-16 text-center border-4 border-orange-400 bg-white rounded-2xl outline-none text-orange-700 focus:ring-4 ring-orange-200" placeholder="?"> = 0</div>
                        </div>
                    </div>
                    <div class="p-10 bg-rose-50 rounded-[3rem] border-4 border-rose-200">
                        <div class="text-2xl md:text-3xl font-bold text-rose-800 mb-8 underline decoration-4 underline-offset-8">b)</div>
                        <div class="space-y-8 text-3xl md:text-4xl font-black text-gray-800">
                            <div class="flex flex-wrap items-center gap-4">a + b = <input id="156-2-5" class="w-20 h-14 md:w-24 md:h-16 text-center border-4 border-rose-400 bg-white rounded-2xl outline-none text-rose-700 focus:ring-4 ring-rose-200" placeholder="?"> + a</div>
                            <div class="flex flex-wrap items-center gap-4">(a + b) + c = a + (b + <input id="156-2-6" class="w-20 h-14 md:w-24 md:h-16 text-center border-4 border-rose-400 bg-white rounded-2xl outline-none text-rose-700 focus:ring-4 ring-rose-200" placeholder="?">)</div>
                            <div class="flex flex-wrap items-center gap-4">(a + b) + c = <input id="156-2-7" class="w-20 h-14 md:w-24 md:h-16 text-center border-4 border-rose-400 bg-white rounded-2xl outline-none text-rose-700 focus:ring-4 ring-rose-200" placeholder="?"> + (b + c)</div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-156-2" onclick="window.check_156_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="lesson156_b3" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-green-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-14 h-14 md:w-16 md:h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                    <h3 class="text-2xl md:text-3xl font-black text-green-700 uppercase tracking-wide">Bài 3. Tính bằng cách thuận tiện</h3>
                </div>
                
                <div class="max-w-4xl mx-auto space-y-10">
                    <div class="p-8 bg-green-50 rounded-[2.5rem] border-2 border-green-200">
                        <div class="flex flex-col md:flex-row md:items-center gap-6">
                            <p class="text-2xl md:text-3xl font-black text-gray-700">a) 275 + (725 + 486) =</p>
                            <input id="156-3-1" class="w-full md:w-48 h-14 md:h-16 text-center border-4 border-green-300 rounded-2xl outline-none focus:border-green-600 font-black text-green-700 text-2xl md:text-3xl" placeholder="...">
                        </div>
                    </div>
                    <div class="p-8 bg-green-50 rounded-[2.5rem] border-2 border-green-200">
                        <div class="flex flex-col md:flex-row md:items-center gap-6">
                            <p class="text-2xl md:text-3xl font-black text-gray-700">b) (3,29 + 4,63) + 5,37 =</p>
                            <input id="156-3-2" class="w-full md:w-48 h-14 md:h-16 text-center border-4 border-green-300 rounded-2xl outline-none focus:border-green-600 font-black text-green-700 text-2xl md:text-3xl" placeholder="...">
                        </div>
                    </div>
                    <div class="p-8 bg-emerald-50 rounded-[2.5rem] border-2 border-emerald-200">
                        <div class="flex flex-col md:flex-row md:items-center gap-6">
                            <p class="text-2xl md:text-3xl font-black text-gray-700">c) 63,4 + 597 + 36,6 =</p>
                            <input id="156-3-3" class="w-full md:w-48 h-14 md:h-16 text-center border-4 border-emerald-300 rounded-2xl outline-none focus:border-emerald-600 font-black text-emerald-700 text-2xl md:text-3xl" placeholder="...">
                        </div>
                    </div>
                    <div class="p-8 bg-emerald-50 rounded-[2.5rem] border-2 border-emerald-200">
                        <div class="flex flex-col md:flex-row md:items-center gap-6">
                            <div class="flex flex-wrap items-center gap-3 text-2xl md:text-3xl font-black text-gray-700">
                                <span>d)</span>
                                <div class="flex flex-col items-center">
                                    <div class="border-b-2 border-gray-800">4</div><div>9</div>
                                </div>
                                <span>+</span>
                                <div class="flex flex-col items-center">
                                    <div class="border-b-2 border-gray-800">7</div><div>12</div>
                                </div>
                                <span>+</span>
                                <div class="flex flex-col items-center">
                                    <div class="border-b-2 border-gray-800">5</div><div>12</div>
                                </div>
                                <span>+</span>
                                <div class="flex flex-col items-center">
                                    <div class="border-b-2 border-gray-800">5</div><div>9</div>
                                </div>
                                <span>=</span>
                            </div>
                            <input id="156-3-4" class="w-full md:w-48 h-14 md:h-16 text-center border-4 border-emerald-300 rounded-2xl outline-none focus:border-emerald-600 font-black text-emerald-700 text-2xl md:text-3xl" placeholder="...">
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-156-3" onclick="window.check_156_3()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 4 -->
            <div id="lesson156_b4" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-rose-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-14 h-14 md:w-16 md:h-16 bg-rose-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                    <h3 class="text-2xl md:text-3xl font-black text-rose-700 uppercase tracking-wide">Bài 4. Giải bài toán</h3>
                </div>
                
                <div class="p-10 bg-rose-50 rounded-[3rem] border-4 border-rose-200">
                    <div class="flex flex-col lg:flex-row gap-12 items-center">
                        <div class="flex-1 space-y-8">
                            <p class="text-2xl md:text-4xl leading-relaxed text-gray-800 font-bold">
                                Rô-bốt nối hai cây gậy ngắn, mỗi cây gậy dài <span class="text-rose-600 font-black underline underline-offset-8 decoration-4">0,8 m</span> thành cây gậy dài AB. 
                                Cho biết chỗ nối là đoạn MN dài <span class="text-rose-600 font-black underline underline-offset-8 decoration-4">0,15 m</span> (như hình vẽ). 
                                Hỏi cây gậy AB dài bao nhiêu mét?
                            </p>
                            
                            <div class="bg-white p-8 rounded-[2rem] shadow-inner border-4 border-rose-100 mt-10">
                                <p class="text-2xl md:text-3xl font-black text-rose-700 mb-6 uppercase tracking-widest text-center">Đáp số của em</p>
                                <div class="flex items-center justify-center gap-4">
                                    <input id="156-4-1" class="w-32 h-16 md:w-48 md:h-20 text-center text-3xl md:text-5xl font-black border-4 border-rose-300 rounded-[1.5rem] outline-none focus:border-rose-600 focus:ring-8 ring-rose-100 transition-all" placeholder="...">
                                    <span class="text-2xl md:text-4xl font-black text-gray-500">m</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 flex justify-center flex-col items-center">
                            <div class="relative p-4 bg-white rounded-3xl shadow-2xl border-4 border-rose-200">
                                <img src="assets/images/toan/toan_tap_2/96/" class="max-w-full h-auto rounded-2xl" alt="Minh họa nối gậy">
                                <!-- Overlap labels if needed using absolute positioning could go here -->
                            </div>
                            <p class="mt-6 text-xl md:text-2xl italic text-gray-500 font-black text-center">Hình vẽ minh họa Rô-bốt nối gậy</p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-156-4" onclick="window.check_156_4()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>
    `,

    quizPool: [
        { question: "536 817 + 82 579 = ?", options: ["619 396", "618 396", "620 396", "619 296"], answer: 0 },
        { question: "981 759 - 645 267 = ?", options: ["336 492", "335 492", "336 592", "346 492"], answer: 0 },
        { question: "64,38 + 93,46 = ?", options: ["157,84", "158,84", "157,74", "157,94"], answer: 0 },
        { question: "86,09 - 54,3 = ?", options: ["31,79", "32,79", "31,69", "31,89"], answer: 0 },
        { question: "4/7 + 3/5 = ?", options: ["41/35", "7/12", "12/35", "1"], answer: 0 },
        { question: "10/9 - 5/6 = ?", options: ["5/18", "5/3", "15/18", "1/2"], answer: 0 },
        { question: "Tính chất giao hoán: a + b = ... + a", options: ["b", "a", "0", "c"], answer: 0 },
        { question: "Tính chất kết hợp: (a + b) + c = a + (b + ...)", options: ["c", "a", "b", "0"], answer: 0 },
        { question: "275 + (725 + 486) = ?", options: ["1486", "1000", "1286", "1586"], answer: 0 },
        { question: "(3,29 + 4,63) + 5,37 = ?", options: ["13,29", "10", "12,29", "14,29"], answer: 0 },
        { question: "63,4 + 597 + 36,6 = ?", options: ["697", "600", "700", "696"], answer: 0 },
        { question: "4/9 + 7/12 + 5/12 + 5/9 = ?", options: ["2", "1", "1,5", "3"], answer: 0 },
        { question: "Rô-bốt nối 2 gậy 0,8m, chồng lên nhau 0,15m. Độ dài gậy AB là:", options: ["1,45 m", "1,6 m", "1,75 m", "1,35 m"], answer: 0 },
        { question: "Biểu thức đúng: a - a = ?", options: ["0", "a", "1", "2"], answer: 0 },
        { question: "Biểu thức đúng: a + 0 = ?", options: ["a", "0", "1", "2a"], answer: 0 }
    ]
};
