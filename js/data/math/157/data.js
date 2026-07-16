export const lesson157 = {
    period: "157",
    title: "BÀI 69: ÔN TẬP CÁC PHÉP TÍNH VỚI SỐ TỰ NHIÊN, PHÂN SỐ, SỐ THẬP PHÂN (TIẾT 2)",
    topic: "Ôn tập các phép tính",
    week: "32",

    content: `
        <div class="space-y-6 md:space-y-10">
            <div class="bg-blue-50 p-6 md:p-8 rounded-[2rem] border-4 border-blue-200 shadow-lg">
                <h3 class="text-2xl md:text-3xl font-black text-blue-700 mb-6 uppercase tracking-wide">1. ÔN TẬP PHÉP CỘNG</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div class="bg-white p-5 md:p-6 rounded-2xl shadow-sm border-l-8 border-blue-500">
                        <p class="text-2xl md:text-3xl font-black text-blue-600 mb-4">Tính chất:</p>
                        <ul class="text-xl md:text-3xl text-gray-700 space-y-4">
                            <li><span class="font-black">Giao hoán:</span> a + b = b + a</li>
                            <li><span class="font-black">Kết hợp:</span> (a + b) + c = a + (b + c)</li>
                            <li><span class="font-black">Cộng với 0:</span> a + 0 = 0 + a = a</li>
                        </ul>
                    </div>
                    <div class="bg-white p-5 md:p-6 rounded-2xl shadow-sm border-l-8 border-cyan-500">
                        <p class="text-2xl md:text-3xl font-black text-cyan-600 mb-4">Thử lại:</p>
                        <p class="text-xl md:text-3xl text-gray-700 leading-relaxed italic">
                            Muốn thử lại phép cộng, ta có thể lấy <span class="text-blue-600 font-black underline">tổng trừ đi một số hạng</span>, nếu được số hạng kia thì phép tính đúng.
                        </p>
                    </div>
                </div>
            </div>

            <div class="bg-orange-50 p-6 md:p-8 rounded-[2rem] border-4 border-orange-200 shadow-lg">
                <h3 class="text-2xl md:text-3xl font-black text-orange-700 mb-6 uppercase tracking-wide">2. ÔN TẬP PHÉP TRỪ</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div class="bg-white p-5 md:p-6 rounded-2xl shadow-sm border-l-8 border-orange-500">
                        <p class="text-2xl md:text-3xl font-black text-orange-600 mb-4">Thành phần:</p>
                        <ul class="text-xl md:text-3xl text-gray-700 space-y-4">
                            <li>Số bị trừ - Số trừ = <span class="font-black">Hiệu</span></li>
                            <li>Số bị trừ = Hiệu + Số trừ</li>
                            <li>Số trừ = Số bị trừ - Hiệu</li>
                        </ul>
                    </div>
                    <div class="bg-white p-5 md:p-6 rounded-2xl shadow-sm border-l-8 border-rose-500">
                        <p class="text-2xl md:text-3xl font-black text-rose-600 mb-4">Thử lại:</p>
                        <p class="text-xl md:text-3xl text-gray-700 leading-relaxed italic">
                            Muốn thử lại phép trừ, ta có thể lấy <span class="text-orange-600 font-black underline">hiệu cộng với số trừ</span>, nếu được số bị trừ thì phép tính đúng.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="space-y-12 pb-10">
            <!-- Bài 1 -->
            <div id="lesson157_b1" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                    <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide">Đặt tính rồi tính</h3>
                </div>

                <!-- Mẫu từ SGK -->
                <div class="mb-12 p-8 bg-blue-50 rounded-[2.5rem] border-4 border-blue-100 shadow-inner">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                        <!-- Mẫu Số thập phân -->
                        <div class="flex items-center justify-center gap-16 border-b-4 lg:border-b-0 lg:border-r-4 border-blue-200 pb-10 lg:pb-0 lg:pr-10">
                            <div class="flex flex-col items-center">
                                <span class="bg-blue-600 text-white px-4 py-1 rounded-lg font-bold text-xl uppercase mb-6 self-start">Mẫu</span>
                                <div class="flex flex-col items-end text-3xl md:text-4xl font-black space-y-2">
                                    <div class="flex items-center gap-4"><span>&nbsp;</span><span>54,73</span></div>
                                    <div class="flex items-center gap-4"><span class="text-blue-600">+</span><span>36,24</span></div>
                                    <div class="w-full h-1.5 bg-gray-800"></div>
                                    <span class="text-blue-600">90,97</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-center">
                                <span class="text-gray-500 font-bold text-xl uppercase mb-6 self-start italic">Thử lại</span>
                                <div class="flex flex-col items-end text-3xl md:text-4xl font-black space-y-2">
                                    <div class="flex items-center gap-4"><span>&nbsp;</span><span>90,97</span></div>
                                    <div class="flex items-center gap-4"><span class="text-emerald-600">-</span><span>36,24</span></div>
                                    <div class="w-full h-1.5 bg-gray-800"></div>
                                    <span class="text-emerald-600">54,73</span>
                                </div>
                            </div>
                        </div>
                        <!-- Mẫu Phân số -->
                        <div class="flex flex-col justify-center items-center gap-8 text-2xl md:text-3xl font-black px-6">
                            <!-- Phép tính trên -->
                            <div class="flex items-center gap-6 bg-white/40 p-4 rounded-2xl border-2 border-blue-100 w-full justify-center">
                                <div class="flex flex-col items-center"><span>8</span><div class="w-10 h-1 bg-gray-800"></div><span>5</span></div>
                                <span class="text-blue-600">-</span>
                                <div class="flex flex-col items-center"><span>2</span><div class="w-10 h-1 bg-gray-800"></div><span>3</span></div>
                                <span>=</span>
                                <div class="flex flex-col items-center text-blue-600"><span>14</span><div class="w-12 h-1 bg-blue-600"></div><span>15</span></div>
                            </div>
                            <!-- Thử lại dưới -->
                            <div class="flex items-center gap-6 bg-emerald-50/60 p-4 rounded-2xl border-2 border-emerald-100 w-full justify-center">
                                <div class="text-gray-500 text-xl md:text-2xl italic font-bold">Thử lại:</div>
                                <div class="flex flex-col items-center text-emerald-600"><span>14</span><div class="w-12 h-1 bg-emerald-600"></div><span>15</span></div>
                                <span class="text-emerald-600">+</span>
                                <div class="flex flex-col items-center"><span>2</span><div class="w-10 h-1 bg-gray-800"></div><span>3</span></div>
                                <span>=</span>
                                <div class="flex flex-col items-center"><span>8</span><div class="w-10 h-1 bg-gray-800"></div><span>5</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <!-- a -->
                    <div class="p-8 bg-blue-50 rounded-[2.5rem] border-4 border-blue-100">
                        <h3 class="text-2xl md:text-3xl font-black text-blue-700 mb-8 text-center uppercase">Bài 1a</h3>
                        <div class="grid grid-cols-2 gap-10">
                            <div class="flex flex-col items-end text-3xl md:text-4xl font-black space-y-4 pr-10 border-r-2 border-blue-200">
                                <div class="flex items-center gap-6"><span>&nbsp;</span><span class="text-gray-700">8549</span></div>
                                <div class="flex items-center gap-6"><span class="text-blue-600">+</span><span class="text-gray-700">9627</span></div>
                                <div class="w-full h-1.5 bg-gray-800"></div>
                                <input id="157-1-1" class="w-32 text-right bg-white border-b-4 border-blue-400 focus:border-blue-700 outline-none rounded-t-lg px-2" placeholder="">
                            </div>
                            <div class="flex flex-col items-end text-3xl md:text-4xl font-black space-y-4">
                                <input id="157-1-1-t1" class="w-32 text-right bg-white border-b-2 border-gray-400 outline-none rounded-t-lg px-2" placeholder="">
                                <div class="flex items-center gap-6"><span class="text-emerald-600">-</span><span class="text-gray-700">9627</span></div>
                                <div class="w-full h-1.5 bg-gray-800"></div>
                                <input id="157-1-1-t3" class="w-32 text-right bg-white border-4 border-emerald-400 focus:border-emerald-600 outline-none rounded-lg px-2" placeholder="">
                            </div>
                        </div>
                    </div>

                    <!-- b -->
                    <div class="p-8 bg-emerald-50 rounded-[2.5rem] border-4 border-emerald-100">
                        <h3 class="text-2xl md:text-3xl font-black text-emerald-700 mb-8 text-center uppercase">Bài 1b</h3>
                        <div class="grid grid-cols-2 gap-10">
                            <div class="flex flex-col items-end text-3xl md:text-4xl font-black space-y-4 pr-10 border-r-2 border-emerald-200">
                                <div class="flex items-center gap-6"><span>&nbsp;</span><span class="text-gray-700">35,71</span></div>
                                <div class="flex items-center gap-6"><span class="text-emerald-600">-</span><span class="text-gray-700">29,4</span></div>
                                <div class="w-full h-1.5 bg-gray-800"></div>
                                <input id="157-1-2" class="w-32 text-right bg-white border-b-4 border-emerald-400 focus:border-emerald-700 outline-none rounded-t-lg px-2" placeholder="">
                            </div>
                            <div class="flex flex-col items-end text-3xl md:text-4xl font-black space-y-4">
                                <input id="157-1-2-t1" class="w-32 text-right bg-white border-b-2 border-gray-400 outline-none rounded-t-lg px-2" placeholder="">
                                <div class="flex items-center gap-6"><span class="text-blue-600">+</span><span class="text-gray-700">29,4</span></div>
                                <div class="w-full h-1.5 bg-gray-800"></div>
                                <input id="157-1-2-t3" class="w-32 text-right bg-white border-4 border-blue-400 focus:border-blue-600 outline-none rounded-lg px-2" placeholder="">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- c -->
                <div class="mt-8 md:mt-10 p-6 md:p-10 bg-orange-50 rounded-[2rem] md:rounded-[3rem] border-4 border-orange-100">
                    <p class="text-3xl md:text-4xl font-black text-orange-700 mb-8 md:mb-10 text-center uppercase">c) 11/9 - 3/4</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                        <!-- Tính -->
                        <div class="flex flex-col items-center justify-center p-6 md:p-8 bg-white rounded-[2rem] shadow-sm border-2 border-orange-200">
                            <div class="flex items-center gap-4 md:gap-6 text-4xl md:text-5xl font-black">
                                <div class="flex flex-col items-center"><span>11</span><div class="w-10 md:w-12 h-1.5 bg-gray-800"></div><span>9</span></div>
                                <span class="text-orange-600">-</span>
                                <div class="flex flex-col items-center"><span>3</span><div class="w-10 md:w-12 h-1.5 bg-gray-800"></div><span>4</span></div>
                                <span class="text-gray-400">=</span>
                                <div class="flex flex-col items-center">
                                    <input id="157-1-3-n" class="w-16 md:w-20 text-center border-b-4 border-orange-400 outline-none focus:border-orange-700 bg-orange-50 rounded-t-xl" placeholder="?">
                                    <div class="w-16 md:w-20 h-1.5 bg-gray-800"></div>
                                    <input id="157-1-3-d" class="w-16 md:w-20 text-center outline-none focus:bg-orange-50 bg-transparent rounded-b-xl" placeholder="?">
                                </div>
                            </div>
                        </div>
                        <!-- Thử lại -->
                        <div class="flex flex-col items-center justify-center p-6 md:p-8 bg-white rounded-[2rem] shadow-sm border-2 border-emerald-200">
                            <div class="flex items-center gap-4 md:gap-6 text-4xl md:text-5xl font-black">
                                <div class="flex flex-col items-center">
                                    <input id="157-1-3-tn" class="w-16 md:w-20 text-center border-b-4 border-emerald-400 outline-none focus:border-emerald-700 bg-emerald-50 rounded-t-xl" placeholder="?">
                                    <div class="w-16 md:w-20 h-1.5 bg-gray-800"></div>
                                    <input id="157-1-3-td" class="w-16 md:w-20 text-center outline-none focus:bg-emerald-50 bg-transparent rounded-b-xl" placeholder="?">
                                </div>
                                <span class="text-emerald-600">+</span>
                                <div class="flex flex-col items-center text-gray-600"><span>3</span><div class="w-10 md:w-12 h-1 bg-gray-400"></div><span>4</span></div>
                                <span class="text-gray-400">=</span>
                                <div class="flex flex-col items-center text-blue-600"><span>11</span><div class="w-10 md:w-12 h-1.5 bg-blue-600"></div><span>9</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12 gap-6">
                    <button onclick="window.reset157_1()" class="w-20 h-20 bg-white border-4 border-blue-500 text-blue-500 rounded-[2rem] flex items-center justify-center shadow-lg hover:bg-blue-50 transition-all">
                        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                    </button>
                    <button id="btn-check-157-1" onclick="window.check_157_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="lesson157_b2" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-green-500">
                <div class="flex items-center gap-6 mb-8 md:mb-10">
                    <div class="w-14 h-14 md:w-16 md:h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                    <h3 class="text-2xl md:text-3xl font-black text-green-700 uppercase tracking-wide">Tính giá trị biểu thức</h3>
                </div>
                
                <div class="grid grid-cols-1 gap-6 md:gap-8">
                    <div class="p-6 md:p-8 bg-green-50 rounded-[2rem] md:rounded-[2.5rem] border-4 border-green-200 shadow-sm">
                        <div class="flex flex-wrap items-center gap-4 md:gap-6">
                            <span class="text-xl md:text-3xl font-black text-green-700 leading-tight">a) 175 - (59,3 + 35,7) - 24,5 =</span>
                            <input id="157-2-1" class="w-40 md:w-48 h-14 md:h-16 text-center rounded-2xl border-4 border-green-300 outline-none focus:border-green-600 bg-white shadow-inner text-3xl md:text-4xl font-black" placeholder="?">
                        </div>
                    </div>
                    <div class="p-6 md:p-8 bg-green-50 rounded-[2rem] md:rounded-[2.5rem] border-4 border-green-200 shadow-sm">
                        <div class="flex flex-wrap items-center gap-4 md:gap-6">
                            <span class="text-xl md:text-3xl font-black text-green-700 leading-tight">b) 13/18 + ( 7/6 - ( 7/12 - 1/4 ) ) =</span>
                            <div class="flex flex-col items-center">
                                <input id="157-2-2-n" class="w-16 md:w-20 text-center border-b-4 border-green-400 outline-none focus:border-green-700 bg-white rounded-t-xl text-2xl md:text-3xl font-black" placeholder="?">
                                <div class="w-16 md:w-20 h-1.5 bg-gray-800"></div>
                                <input id="157-2-2-d" class="w-16 md:w-20 text-center outline-none focus:bg-green-100 bg-white rounded-b-xl text-2xl md:text-3xl font-black" placeholder="?">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-157-2" onclick="window.check_157_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="lesson157_b3" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-orange-500">
                <div class="flex items-center gap-6 mb-8 md:mb-10">
                    <div class="w-14 h-14 md:w-16 md:h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                    <h3 class="text-2xl md:text-3xl font-black text-orange-700 uppercase tracking-wide">Số ?</h3>
                </div>
                
                <div class="p-6 md:p-8 bg-orange-50 rounded-[2rem] md:rounded-[2.5rem] border-4 border-orange-200">
                    <p class="text-xl md:text-3xl leading-relaxed text-gray-800 mb-8 font-bold">
                        Khi chuyển về nhà mới, chú Tư mua một ti vi, một tủ kệ ti vi và một bộ loa thùng hết 17 100 000 đồng. Biết rằng số tiền mua ti vi và bộ loa thùng là 13 600 000 đồng, số tiền mua ti vi nhiều hơn số tiền mua bộ loa thùng là 4 200 000 đồng.
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                        <img src="assets/images/toan/toan_tap_2/157/157-3.png" class="max-w-full rounded-2xl shadow-xl border-4 border-white mx-auto" alt="Nội thất">
                        <div class="space-y-4 md:space-y-6">
                            <div class="p-5 md:p-6 bg-white rounded-3xl border-2 border-orange-100 shadow-sm flex flex-col gap-2 md:gap-3">
                                <span class="text-lg md:text-2xl font-bold text-gray-600">a) Giá tiền một ti vi là:</span>
                                <div class="flex items-center gap-3">
                                    <input id="157-3-1" class="w-40 md:w-48 h-14 md:h-16 text-right px-4 md:px-6 text-2xl md:text-3xl font-black bg-orange-50 rounded-2xl border-2 border-orange-200 outline-none focus:border-orange-500" placeholder="?">
                                    <span class="text-xl md:text-2xl font-black">đồng</span>
                                </div>
                            </div>
                            <div class="p-5 md:p-6 bg-white rounded-3xl border-2 border-orange-100 shadow-sm flex flex-col gap-2 md:gap-3">
                                <span class="text-lg md:text-2xl font-bold text-gray-600">b) Giá tiền một tủ kệ ti vi là:</span>
                                <div class="flex items-center gap-3">
                                    <input id="157-3-2" class="w-40 md:w-48 h-14 md:h-16 text-right px-4 md:px-6 text-2xl md:text-3xl font-black bg-orange-50 rounded-2xl border-2 border-orange-200 outline-none focus:border-orange-500" placeholder="?">
                                    <span class="text-xl md:text-2xl font-black">đồng</span>
                                </div>
                            </div>
                            <div class="p-5 md:p-6 bg-white rounded-3xl border-2 border-orange-100 shadow-sm flex flex-col gap-2 md:gap-3">
                                <span class="text-lg md:text-2xl font-bold text-gray-600">c) Giá tiền một bộ loa thùng là:</span>
                                <div class="flex items-center gap-3">
                                    <input id="157-3-3" class="w-40 md:w-48 h-14 md:h-16 text-right px-4 md:px-6 text-2xl md:text-3xl font-black bg-orange-50 rounded-2xl border-2 border-orange-200 outline-none focus:border-orange-500" placeholder="?">
                                    <span class="text-xl md:text-2xl font-black">đồng</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-157-3" onclick="window.check_157_3()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 4 -->
            <div id="lesson157_b4" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-rose-500">
                <div class="flex items-center gap-6 mb-8 md:mb-10">
                    <div class="w-14 h-14 md:w-16 md:h-16 bg-rose-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                    <h3 class="text-2xl md:text-3xl font-black text-rose-700 uppercase tracking-wide">Giải bài toán</h3>
                </div>
                
                <div class="p-6 md:p-8 bg-rose-50 rounded-[2rem] md:rounded-[2.5rem] border-4 border-rose-200 text-xl md:text-3xl leading-relaxed text-gray-800">
                    <p class="mb-8 font-bold">
                        Buổi sáng, mẹ bóc một cái bánh chưng. Mai ăn <span class="font-black text-rose-600">1/8</span> cái bánh chưng, bố ăn <span class="font-black text-rose-600">1/4</span> cái bánh chưng. Hỏi còn lại bao nhiêu phần bánh chưng chưa ăn?
                    </p>
                    
                    <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border-2 border-rose-100 max-w-2xl mx-auto space-y-6">
                        <div class="flex items-center justify-center gap-3 md:gap-4 text-3xl md:text-4xl font-black">
                            <span>Đáp số:</span>
                            <div class="flex flex-col items-center">
                                <input id="157-4-n" class="w-16 text-center border-b-4 border-rose-300 outline-none focus:border-rose-600 bg-white rounded-t-xl" placeholder="?">
                                <div class="w-16 h-1.5 bg-gray-800"></div>
                                <input id="157-4-d" class="w-16 text-center outline-none focus:bg-rose-50 bg-white rounded-b-xl" placeholder="?">
                            </div>
                            <span class="text-xl md:text-2xl text-gray-500 font-bold">phần bánh</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-157-4" onclick="window.check_157_4()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>
    `,

    quizPool: [
        {
            question: "Kết quả của phép tính 8 549 + 9 627 là bao nhiêu?",
            options: ["18 176", "17 176", "18 276", "17 276"],
            answer: 0
        },
        {
            question: "Tính: 35,71 - 29,4 = ?",
            options: ["6,31", "5,31", "6,41", "5,41"],
            answer: 0
        },
        {
            question: "Giá trị của biểu thức 175 - (59,3 + 35,7) - 24,5 là:",
            options: ["55,5", "80", "56,5", "60"],
            answer: 0
        },
        {
            question: "Mai ăn 1/8 cái bánh, bố ăn 1/4 cái bánh. Hai người đã ăn tất cả bao nhiêu phần cái bánh?",
            options: ["3/8", "1/4", "1/2", "3/4"],
            answer: 0
        },
        {
            question: "Tổng số tiền mua Ti vi và Loa là 13 600 000 đồng. Ti vi đắt hơn Loa 4 200 000 đồng. Giá tiền của Ti vi là:",
            options: ["8 900 000 đồng", "9 400 000 đồng", "4 700 000 đồng", "8 400 000 đồng"],
            answer: 0
        },
        {
            question: "Phép cộng (a + b) + c = a + (b + c) thể hiện tính chất nào?",
            options: ["Tính chất kết hợp", "Tính chất giao hoán", "Cộng với số 0", "Tính chất phân phối"],
            answer: 0
        },
        {
            question: "Tìm x, biết: x - 4,5 = 7,8",
            options: ["12,3", "3,3", "11,3", "13,3"],
            answer: 0
        },
        {
            question: "Tính nhanh: 12,5 + 3,7 + 7,5 + 6,3",
            options: ["30", "20", "25", "40"],
            answer: 0
        },
        {
            question: "Kết quả của phép tính 3/5 + 1/2 là:",
            options: ["11/10", "4/7", "4/10", "1/10"],
            answer: 0
        },
        {
            question: "Một cửa hàng có 500kg gạo. Buổi sáng bán được 125,5kg, buổi chiều bán được 150,5kg. Hỏi cửa hàng còn lại bao nhiêu kg gạo?",
            options: ["224kg", "276kg", "250kg", "325kg"],
            answer: 0
        },
        {
            question: "Tính: 100 - 9,99 = ?",
            options: ["90,01", "80,01", "90,11", "91,01"],
            answer: 0
        },
        {
            question: "Tìm x, biết: 1,2 + x + 2,8 = 10",
            options: ["6", "4", "5", "7"],
            answer: 0
        },
        {
            question: "Kết quả của phép tính 5/6 - 1/3 là:",
            options: ["1/2", "4/3", "2/3", "1/6"],
            answer: 0
        },
        {
            question: "Một hình tam giác có độ dài các cạnh lần lượt là: 3,5cm; 4,2cm và 5,3cm. Chu vi của hình tam giác đó là:",
            options: ["13cm", "12cm", "14cm", "12,5cm"],
            answer: 0
        },
        {
            question: "Tổng của số lớn nhất có 3 chữ số và số bé nhất có 3 chữ số là:",
            options: ["1099", "999", "1100", "1000"],
            answer: 0
        }
    ]
};
