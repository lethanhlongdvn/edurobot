export const lesson159 = {
    period: "159",
    title: "ÔN TẬP VỀ PHÉP NHÂN, PHÉP CHIA (TIẾP THEO)",
    topic: "Luyện tập",
    week: "32",

    content: `
        <div class="space-y-10">
            <div class="bg-blue-50 p-10 rounded-[3rem] border-4 border-blue-200 shadow-xl text-2xl md:text-3xl">
                <h3 class="text-2xl md:text-3xl font-black text-blue-700 mb-8 uppercase tracking-wider text-center">Kiến thức trọng tâm</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 font-bold">
                    <div class="bg-white p-8 rounded-3xl shadow-sm border-l-8 border-blue-500">
                        <p class="text-blue-600 mb-4 underline">1. Phép chia có dư:</p>
                        <p class="text-center bg-blue-50 p-6 rounded-2xl border-2 border-dashed border-blue-200 italic">
                            Số bị chia = Số chia × Thương + Số dư
                        </p>
                        <p class="mt-4 text-rose-600 text-xl md:text-2xl">* Lưu ý: Số dư luôn nhỏ hơn số chia.</p>
                    </div>
                    <div class="bg-white p-8 rounded-3xl shadow-sm border-l-8 border-emerald-500">
                        <p class="text-emerald-600 mb-4 underline">2. Tính nhẩm nhanh:</p>
                        <ul class="space-y-2 text-xl md:text-2xl">
                            <li>• Nhân với 10, 100... dời dấu phẩy sang <span class="text-emerald-700">phải</span>.</li>
                            <li>• Chia cho 0,1; 0,01... dời dấu phẩy sang <span class="text-emerald-700">phải</span>.</li>
                            <li>• Nhân với 0,1; 0,01... dời dấu phẩy sang <span class="text-rose-700">trái</span>.</li>
                            <li>• Chia cho 10, 100... dời dấu phẩy sang <span class="text-rose-700">trái</span>.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="space-y-12 pb-10">
            <!-- Bài 1 -->
            <div id="lesson159_b1" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                    <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide">Tính rồi thử lại (theo mẫu)</h4>
                </div>
                
                <div class="p-8 bg-blue-50 rounded-[2.5rem] border-2 border-blue-100 mb-10">
                    <p class="text-xl md:text-2xl font-black text-blue-500 uppercase mb-6 tracking-widest text-center italic">Mẫu chia có dư</p>
                    <div class="flex flex-col lg:flex-row justify-around items-center gap-10 text-2xl md:text-3xl font-black">
                        <div class="bg-white p-8 rounded-3xl border-2 border-blue-200 flex flex-col items-center">
                            <div class="flex items-start gap-0">
                                <div class="flex flex-col items-end pr-4 border-r-4 border-gray-800">
                                    <span>3904</span>
                                    <span class="text-gray-400">70</span>
                                    <span class="text-gray-400">64</span>
                                    <span class="text-blue-600">0</span>
                                </div>
                                <div class="flex flex-col items-start pl-4">
                                    <span class="border-b-4 border-gray-800 w-full text-center">32</span>
                                    <span>122</span>
                                </div>
                            </div>
                            <p class="mt-6 text-xl md:text-2xl text-gray-500 italic">Thử lại: 122 × 32 = 3904</p>
                        </div>
                        <div class="bg-white p-8 rounded-3xl border-2 border-blue-200 flex flex-col items-center">
                            <div class="flex items-start gap-0">
                                <div class="flex flex-col items-end pr-4 border-r-4 border-gray-800">
                                    <span>3917</span>
                                    <span class="text-gray-400">71</span>
                                    <span class="text-gray-400">77</span>
                                    <span class="text-rose-600">13</span>
                                </div>
                                <div class="flex flex-col items-start pl-4">
                                    <span class="border-b-4 border-gray-800 w-full text-center">32</span>
                                    <span>122</span>
                                </div>
                            </div>
                            <p class="mt-6 text-xl md:text-2xl text-gray-500 italic">Thử lại: 122 × 32 + 13 = 3917</p>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <!-- a) 14 138 : 45 -->
                    <div class="p-8 bg-white rounded-[2.5rem] border-4 border-blue-100 flex flex-col items-center gap-8">
                        <div class="bg-blue-50 w-full p-6 rounded-3xl flex justify-center">
                             <div class="flex items-start gap-0 text-2xl md:text-3xl font-black">
                                <div class="flex flex-col items-end pr-4 border-r-4 border-gray-800">
                                    <span class="tracking-widest">14138</span>
                                    <div class="flex flex-col items-end w-full">
                                        <input id="159-1-1-r1" class="w-24 text-right bg-transparent outline-none text-gray-400" placeholder="...">
                                        <input id="159-1-1-r2" class="w-24 text-right bg-transparent outline-none text-gray-400" placeholder="...">
                                        <input id="159-1-1-r3" class="w-24 text-right bg-transparent outline-none text-gray-400" placeholder="...">
                                        <input id="159-1-1-r_final" class="w-24 text-right bg-transparent outline-none text-blue-600" placeholder="?">
                                    </div>
                                </div>
                                <div class="flex flex-col items-start pl-4 min-w-[100px]">
                                    <span class="border-b-4 border-gray-800 w-full text-center">45</span>
                                    <input id="159-1-1q" class="w-full text-left bg-transparent outline-none text-blue-700" placeholder="?">
                                </div>
                            </div>
                        </div>
                        <div class="w-full bg-blue-50 p-6 rounded-2xl border-2 border-dashed border-blue-200">
                            <p class="text-2xl md:text-3xl font-black text-blue-400 uppercase mb-3">Thử lại:</p>
                            <div class="flex flex-wrap items-center justify-center gap-2 text-2xl md:text-3xl font-black">
                                <input id="159-1-1v1" class="w-24 text-center border-b-4 border-blue-300 outline-none bg-transparent" placeholder="?">
                                <span>× 45 +</span>
                                <input id="159-1-1v2" class="w-16 text-center border-b-4 border-blue-300 outline-none bg-transparent" placeholder="?">
                                <span>= 14 138</span>
                            </div>
                        </div>
                    </div>

                    <!-- b) 8 924 : 23 -->
                    <div class="p-8 bg-white rounded-[2.5rem] border-4 border-blue-100 flex flex-col items-center gap-8">
                        <div class="bg-blue-50 w-full p-6 rounded-3xl flex justify-center">
                             <div class="flex items-start gap-0 text-2xl md:text-3xl font-black">
                                <div class="flex flex-col items-end pr-4 border-r-4 border-gray-800">
                                    <span class="tracking-widest">8924</span>
                                    <div class="flex flex-col items-end w-full">
                                        <input id="159-1-2-r1" class="w-24 text-right bg-transparent outline-none text-gray-400" placeholder="...">
                                        <input id="159-1-2-r2" class="w-24 text-right bg-transparent outline-none text-gray-400" placeholder="...">
                                        <input id="159-1-2-r3" class="w-24 text-right bg-transparent outline-none text-gray-400" placeholder="...">
                                        <input id="159-1-2-r_final" class="w-24 text-right bg-transparent outline-none text-blue-600" placeholder="?">
                                    </div>
                                </div>
                                <div class="flex flex-col items-start pl-4 min-w-[100px]">
                                    <span class="border-b-4 border-gray-800 w-full text-center">23</span>
                                    <input id="159-1-2q" class="w-full text-left bg-transparent outline-none text-blue-700" placeholder="?">
                                </div>
                            </div>
                        </div>
                        <div class="w-full bg-blue-50 p-6 rounded-2xl border-2 border-dashed border-blue-200">
                            <p class="text-2xl md:text-3xl font-black text-blue-400 uppercase mb-3">Thử lại:</p>
                            <div class="flex flex-wrap items-center justify-center gap-2 text-2xl md:text-3xl font-black">
                                <input id="159-1-2v1" class="w-24 text-center border-b-4 border-blue-300 outline-none bg-transparent" placeholder="?">
                                <span>× 23 +</span>
                                <input id="159-1-2v2" class="w-16 text-center border-b-4 border-blue-300 outline-none bg-transparent" placeholder="0">
                                <span>= 8 924</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-159-1" onclick="window.check_159_1()" class="w-20 h-20 bg-[#ff7b29] text-white rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="lesson159_b2" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                    <h4 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase tracking-wide">Tính nhẩm</h4>
                </div>
                
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- Column 1 -->
                    <div class="p-8 bg-emerald-50 rounded-[2.5rem] space-y-8 text-2xl md:text-3xl font-black">
                        <div class="flex flex-col gap-3"><span>27,6 × 10 =</span><input id="159-2-1" class="w-full h-16 text-center bg-white rounded-2xl border-2 border-emerald-200 outline-none focus:border-emerald-500"></div>
                        <div class="flex flex-col gap-3"><span>27,6 : 0,1 =</span><input id="159-2-2" class="w-full h-16 text-center bg-white rounded-2xl border-2 border-emerald-200 outline-none focus:border-emerald-500"></div>
                        <div class="flex flex-col gap-3"><span>432 × 0,1 =</span><input id="159-2-3" class="w-full h-16 text-center bg-white rounded-2xl border-2 border-emerald-200 outline-none focus:border-emerald-500"></div>
                        <div class="flex flex-col gap-3"><span>432 : 10 =</span><input id="159-2-4" class="w-full h-16 text-center bg-white rounded-2xl border-2 border-emerald-200 outline-none focus:border-emerald-500"></div>
                    </div>
                    <!-- Column 2 -->
                    <div class="p-8 bg-emerald-50 rounded-[2.5rem] space-y-8 text-2xl md:text-3xl font-black">
                        <div class="flex flex-col gap-3"><span>70,82 × 100 =</span><input id="159-2-5" class="w-full h-16 text-center bg-white rounded-2xl border-2 border-emerald-200 outline-none focus:border-emerald-500"></div>
                        <div class="flex flex-col gap-3"><span>70,82 : 0,01 =</span><input id="159-2-6" class="w-full h-16 text-center bg-white rounded-2xl border-2 border-emerald-200 outline-none focus:border-emerald-500"></div>
                        <div class="flex flex-col gap-3"><span>360,5 × 0,01 =</span><input id="159-2-7" class="w-full h-16 text-center bg-white rounded-2xl border-2 border-emerald-200 outline-none focus:border-emerald-500"></div>
                        <div class="flex flex-col gap-3"><span>360,5 : 100 =</span><input id="159-2-8" class="w-full h-16 text-center bg-white rounded-2xl border-2 border-emerald-200 outline-none focus:border-emerald-500"></div>
                    </div>
                    <!-- Column 3 -->
                    <div class="p-8 bg-emerald-50 rounded-[2.5rem] space-y-8 text-2xl md:text-3xl font-black">
                        <div class="flex flex-col gap-3"><span>4,523 × 1 000 =</span><input id="159-2-9" class="w-full h-16 text-center bg-white rounded-2xl border-2 border-emerald-200 outline-none focus:border-emerald-500"></div>
                        <div class="flex flex-col gap-3"><span>4,523 : 0,001 =</span><input id="159-2-10" class="w-full h-16 text-center bg-white rounded-2xl border-2 border-emerald-200 outline-none focus:border-emerald-500"></div>
                        <div class="flex flex-col gap-3"><span>697 × 0,001 =</span><input id="159-2-11" class="w-full h-16 text-center bg-white rounded-2xl border-2 border-emerald-200 outline-none focus:border-emerald-500"></div>
                        <div class="flex flex-col gap-3"><span>697 : 1 000 =</span><input id="159-2-12" class="w-full h-16 text-center bg-white rounded-2xl border-2 border-emerald-200 outline-none focus:border-emerald-500"></div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-159-2" onclick="window.check_159_2()" class="w-20 h-20 bg-[#ff7b29] text-white rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="lesson159_b3" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-sky-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                    <h4 class="text-2xl md:text-3xl font-black text-sky-700 uppercase tracking-wide">Tính giá trị của biểu thức</h4>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div class="p-8 bg-sky-50 rounded-[2.5rem] border-4 border-sky-200">
                        <p class="text-2xl md:text-3xl font-black text-sky-800 mb-6">a) 61,4 × (15 : 0,25) – 2 024</p>
                        <div class="flex items-center gap-4 text-2xl md:text-3xl font-black">
                            <span>=</span>
                            <input id="159-3-1" class="w-full h-16 text-center rounded-2xl border-4 border-sky-300 outline-none focus:border-sky-500 shadow-sm" placeholder="?">
                        </div>
                    </div>
                    <div class="p-8 bg-sky-50 rounded-[2.5rem] border-4 border-sky-200">
                        <div class="text-2xl md:text-3xl font-black text-sky-800 mb-6 flex items-center flex-wrap gap-2">
                            <span>b)</span>
                            <div class="flex flex-col items-center"><span>15</span><div class="w-8 h-0.5 bg-gray-800"></div><span>14</span></div>
                            <span>×</span>
                            <div class="flex flex-col items-center"><span>28</span><div class="w-8 h-0.5 bg-gray-800"></div><span>9</span></div>
                            <span>+</span>
                            <div class="flex flex-col items-center"><span>7</span><div class="w-8 h-0.5 bg-gray-800"></div><span>4</span></div>
                            <span>:</span>
                            <div class="flex flex-col items-center"><span>3</span><div class="w-8 h-0.5 bg-gray-800"></div><span>5</span></div>
                        </div>
                        <div class="flex items-center gap-4 text-2xl md:text-3xl font-black">
                            <span>=</span>
                            <div class="flex flex-col items-center">
                                <input id="159-3-2-n" class="w-16 text-center border-b-2 border-sky-400 outline-none bg-transparent" placeholder="?">
                                <div class="w-16 h-1 bg-gray-800"></div>
                                <input id="159-3-2-d" class="w-16 text-center outline-none bg-transparent" placeholder="?">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-159-3" onclick="window.check_159_3()" class="w-20 h-20 bg-[#ff7b29] text-white rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 4 -->
            <div id="lesson159_b4" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-rose-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                    <h4 class="text-2xl md:text-3xl font-black text-rose-700 uppercase tracking-wide">Giải bài toán</h4>
                </div>
                
                <div class="p-8 bg-rose-50 rounded-[2.5rem] border-4 border-rose-200">
                    <p class="text-2xl md:text-3xl leading-relaxed text-gray-800 mb-8">
                        May một cái quần hết 2,06 m vải, may một cái áo hết 1,54 m vải. Hỏi với 200 m vải, may được nhiều nhất bao nhiêu bộ quần áo như thế và còn thừa mấy mét vải?
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="bg-white p-8 rounded-3xl border-2 border-rose-100 flex flex-col items-center gap-4 text-2xl md:text-3xl font-black">
                            <span class="text-rose-800 uppercase text-xl md:text-2xl">May được nhiều nhất:</span>
                            <div class="flex items-center gap-3 text-4xl md:text-5xl">
                                <input id="159-4-1" class="w-32 h-20 text-center bg-rose-50 border-4 border-rose-300 rounded-2xl outline-none" placeholder="?">
                                <span class="text-xl md:text-2xl font-bold">bộ</span>
                            </div>
                        </div>
                        <div class="bg-white p-8 rounded-3xl border-2 border-rose-100 flex flex-col items-center gap-4 text-2xl md:text-3xl font-black">
                            <span class="text-rose-800 uppercase text-xl md:text-2xl">Còn thừa:</span>
                            <div class="flex items-center gap-3 text-4xl md:text-5xl">
                                <input id="159-4-2" class="w-32 h-20 text-center bg-rose-50 border-4 border-rose-300 rounded-2xl outline-none" placeholder="?">
                                <span class="text-xl md:text-2xl font-bold">mét vải</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-159-4" onclick="window.check_159_4()" class="w-20 h-20 bg-[#ff7b29] text-white rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 5 -->
            <div id="lesson159_b5" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-teal-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">5</div>
                    <h4 class="text-2xl md:text-3xl font-black text-teal-700 uppercase tracking-wide">Chọn câu trả lời đúng</h4>
                </div>
                
                <div class="p-8 bg-teal-50 rounded-[2.5rem] border-4 border-teal-200">
                    <p class="text-2xl md:text-3xl font-black text-gray-800 mb-8">Kết quả tính 4 : 0,5 × 2,5 bằng giá trị của biểu thức nào dưới đây?</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <button onclick="window.select159_5('A')" id="btn-159-5-A" class="flex flex-col items-center gap-4 p-6 bg-white rounded-3xl border-4 border-teal-100 hover:border-teal-400 transition-all text-2xl md:text-3xl font-black">
                            <span class="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-2xl md:text-3xl">A</span>
                            <span class="text-center">4 : (2 × 2,5)</span>
                        </button>
                        <button onclick="window.select159_5('B')" id="btn-159-5-B" class="flex flex-col items-center gap-4 p-6 bg-white rounded-3xl border-4 border-teal-100 hover:border-teal-400 transition-all text-2xl md:text-3xl font-black">
                            <span class="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-2xl md:text-3xl">B</span>
                            <span class="text-center">4 × 2 × 2,5</span>
                        </button>
                        <button onclick="window.select159_5('C')" id="btn-159-5-C" class="flex flex-col items-center gap-4 p-6 bg-white rounded-3xl border-4 border-teal-100 hover:border-teal-400 transition-all text-2xl md:text-3xl font-black">
                            <span class="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-2xl md:text-3xl">C</span>
                            <span class="text-center">4 × (2 : 2,5)</span>
                        </button>
                    </div>
                    <input type="hidden" id="159-5-ans">
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-159-5" onclick="window.check_159_5()" class="w-20 h-20 bg-[#ff7b29] text-white rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>
    `,

    quizPool: [
        {
            question: "Thương và số dư của phép chia 14 138 : 45 là:",
            options: ["314 dư 8", "314 dư 18", "313 dư 8", "304 dư 8"],
            answer: 0
        },
        {
            question: "Kết quả của phép tính 27,6 : 0,1 là:",
            options: ["276", "2,76", "27,6", "0,276"],
            answer: 0
        },
        {
            question: "432 × 0,1 bằng kết quả của phép tính nào?",
            options: ["432 : 10", "432 × 10", "432 : 0,1", "43,2 × 10"],
            answer: 0
        },
        {
            question: "Giá trị của biểu thức 61,4 × (15 : 0,25) – 2024 là:",
            options: ["1660", "1684", "1600", "2024"],
            answer: 0
        },
        {
            question: "May 1 bộ quần áo hết 3,6m vải. Với 200m vải may được tối đa bao nhiêu bộ?",
            options: ["55 bộ", "56 bộ", "54 bộ", "60 bộ"],
            answer: 0
        },
        {
            question: "Biểu thức 4 : 0,5 tương đương với phép tính nào?",
            options: ["4 × 2", "4 : 2", "4 × 0,5", "4 + 0,5"],
            answer: 0
        },
        {
            question: "70,82 : 0,01 = ?",
            options: ["7082", "708,2", "7,082", "70,82"],
            answer: 0
        },
        {
            question: "Kết quả của 697 : 1000 là:",
            options: ["0,697", "6,97", "69,7", "0,0697"],
            answer: 0
        },
        {
            question: "Phép tính 15/14 × 28/9 có kết quả rút gọn là:",
            options: ["10/3", "5/3", "20/3", "10/9"],
            answer: 0
        },
        {
            question: "Số dư trong phép chia 200 : 3,6 là:",
            options: ["2", "0,2", "20", "0,02"],
            answer: 0
        },
        {
            question: "Kết quả của 0,25 × 40 là:",
            options: ["10", "1", "100", "0,1"],
            answer: 0
        },
        {
            question: "Phép tính 1,25 × 0,8 có kết quả là:",
            options: ["1", "10", "0,1", "1,1"],
            answer: 0
        },
        {
            question: "15,5 : 0,5 = ?",
            options: ["31", "3,1", "310", "31,5"],
            answer: 0
        },
        {
            question: "9,6 : 1,2 = ?",
            options: ["8", "80", "0,8", "9"],
            answer: 0
        },
        {
            question: "Kết quả của 0,5 × 0,5 là:",
            options: ["0,25", "2,5", "0,025", "1"],
            answer: 0
        }
    ]
};