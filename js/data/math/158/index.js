export const lesson158 = {
    period: "158",
    title: "ÔN TẬP VỀ PHÉP NHÂN, PHÉP CHIA",
    topic: "Luyện tập",
    week: "32",

    content: `
        <div class="space-y-10">
            <div class="bg-blue-50 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-4 border-blue-200 shadow-xl">
                <h3 class="text-2xl md:text-3xl font-black text-blue-700 mb-8 uppercase tracking-wider text-center">Kiến thức cần nhớ</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border-t-8 border-blue-500">
                        <p class="font-black text-blue-600 mb-6 text-2xl md:text-3xl italic underline">1. Phép nhân:</p>
                        <ul class="space-y-4 text-gray-700 text-xl md:text-3xl">
                            <li>• Giao hoán: <span class="font-black text-blue-700">a × b = b × a</span></li>
                            <li>• Kết hợp: <span class="font-black text-blue-700">(a × b) × c = a × (b × c)</span></li>
                            <li>• Phân phối: <span class="font-black text-blue-700">a × (b + c) = a × b + a × c</span></li>
                            <li>• Nhân với 1: <span class="font-black text-blue-700">a × 1 = 1 × a = a</span></li>
                            <li>• Nhân với 0: <span class="font-black text-blue-700">a × 0 = 0 × a = 0</span></li>
                        </ul>
                    </div>
                    <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border-t-8 border-emerald-500">
                        <p class="font-black text-emerald-600 mb-6 text-2xl md:text-3xl italic underline">2. Phép chia:</p>
                        <ul class="space-y-4 text-gray-700 text-xl md:text-3xl">
                            <li>• Chia cho chính nó: <span class="font-black text-emerald-700">a : a = 1 (a ≠ 0)</span></li>
                            <li>• Số 0 chia cho số khác: <span class="font-black text-emerald-700">0 : a = 0 (a ≠ 0)</span></li>
                            <li>• Chia cho 1: <span class="font-black text-emerald-700">a : 1 = a</span></li>
                            <li>• <span class="text-rose-600 font-bold italic text-xl md:text-2xl">Lưu ý: Không có phép chia cho số 0.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="space-y-12 pb-10">
            <!-- Bài 1 -->
            <div id="lesson158_b1" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                    <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide">Tính</h3>
                </div>
                
                <div class="grid grid-cols-1 gap-8">
                    <!-- a -->
                    <div class="p-6 md:p-8 bg-blue-50 rounded-[2rem] md:rounded-[2.5rem] border-2 border-blue-100">
                        <p class="text-2xl md:text-3xl font-black text-blue-600 mb-8 italic border-l-8 border-blue-500 pl-4">a) Phép nhân số tự nhiên và số thập phân</p>
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div class="flex flex-col items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border-2 border-blue-100">
                                <span class="text-2xl md:text-3xl font-black">2 508 × 34 =</span>
                                <input id="158-1-1" class="w-full h-14 md:h-16 text-center text-2xl md:text-3xl font-black bg-blue-50 rounded-2xl border-4 border-blue-200 outline-none focus:border-blue-500" placeholder="?">
                            </div>
                            <div class="flex flex-col items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border-2 border-blue-100">
                                <span class="text-2xl md:text-3xl font-black">617 × 4,5 =</span>
                                <input id="158-1-2" class="w-full h-14 md:h-16 text-center text-2xl md:text-3xl font-black bg-blue-50 rounded-2xl border-4 border-blue-200 outline-none focus:border-blue-500" placeholder="?">
                            </div>
                            <div class="flex flex-col items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border-2 border-blue-100">
                                <span class="text-2xl md:text-3xl font-black">32,6 × 0,58 =</span>
                                <input id="158-1-3" class="w-full h-14 md:h-16 text-center text-2xl md:text-3xl font-black bg-blue-50 rounded-2xl border-4 border-blue-200 outline-none focus:border-blue-500" placeholder="?">
                            </div>
                        </div>
                    </div>

                    <!-- b -->
                    <div class="p-6 md:p-8 bg-emerald-50 rounded-[2rem] md:rounded-[2.5rem] border-2 border-emerald-100">
                        <p class="text-2xl md:text-3xl font-black text-emerald-600 mb-8 italic border-l-8 border-emerald-500 pl-4">b) Phép chia số tự nhiên và số thập phân</p>
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div class="flex flex-col items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border-2 border-emerald-100">
                                <span class="text-2xl md:text-3xl font-black">45 276 : 98 =</span>
                                <input id="158-1-4" class="w-full h-14 md:h-16 text-center text-2xl md:text-3xl font-black bg-emerald-50 rounded-2xl border-4 border-emerald-200 outline-none focus:border-emerald-500" placeholder="?">
                            </div>
                            <div class="flex flex-col items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border-2 border-emerald-100">
                                <span class="text-2xl md:text-3xl font-black">544,7 : 65 =</span>
                                <input id="158-1-5" class="w-full h-14 md:h-16 text-center text-2xl md:text-3xl font-black bg-emerald-50 rounded-2xl border-4 border-emerald-200 outline-none focus:border-emerald-500" placeholder="?">
                            </div>
                            <div class="flex flex-col items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border-2 border-emerald-100">
                                <span class="text-2xl md:text-3xl font-black">98,28 : 3,6 =</span>
                                <input id="158-1-6" class="w-full h-14 md:h-16 text-center text-2xl md:text-3xl font-black bg-emerald-50 rounded-2xl border-4 border-emerald-200 outline-none focus:border-emerald-500" placeholder="?">
                            </div>
                        </div>
                    </div>

                    <!-- c -->
                    <div class="p-6 md:p-8 bg-orange-50 rounded-[2rem] md:rounded-[2.5rem] border-2 border-orange-100">
                        <p class="text-2xl md:text-3xl font-black text-orange-600 mb-8 italic border-l-8 border-orange-500 pl-4">c) Phép tính với phân số</p>
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <!-- c1 -->
                            <div class="flex flex-col items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border-2 border-orange-100 text-2xl md:text-3xl font-black">
                                <div class="flex items-center gap-2">
                                    <div class="flex flex-col items-center"><span>15</span><div class="w-8 h-1 bg-gray-800"></div><span>8</span></div>
                                    <span>×</span>
                                    <div class="flex flex-col items-center"><span>6</span><div class="w-8 h-1 bg-gray-800"></div><span>5</span></div>
                                    <span>=</span>
                                    <div class="flex flex-col items-center">
                                        <input id="158-1-7-n" class="w-16 text-center border-b-4 border-orange-300 outline-none">
                                        <div class="w-16 h-1 bg-gray-800"></div>
                                        <input id="158-1-7-d" class="w-16 text-center outline-none" value="4">
                                    </div>
                                </div>
                            </div>
                            <!-- c2 -->
                            <div class="flex flex-col items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border-2 border-orange-100 text-2xl md:text-3xl font-black">
                                <div class="flex items-center gap-2">
                                    <div class="flex flex-col items-center"><span>33</span><div class="w-8 h-1 bg-gray-800"></div><span>14</span></div>
                                    <span>:</span>
                                    <div class="flex flex-col items-center"><span>11</span><div class="w-8 h-1 bg-gray-800"></div><span>7</span></div>
                                    <span>=</span>
                                    <div class="flex flex-col items-center">
                                        <input id="158-1-8-n" class="w-16 text-center border-b-4 border-orange-300 outline-none">
                                        <div class="w-16 h-1 bg-gray-800"></div>
                                        <input id="158-1-8-d" class="w-16 text-center outline-none" value="2">
                                    </div>
                                </div>
                            </div>
                            <!-- c3 -->
                            <div class="flex flex-col items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border-2 border-orange-100 text-2xl md:text-3xl font-black">
                                <div class="flex items-center gap-2">
                                    <div class="flex flex-col items-center"><span>16</span><div class="w-8 h-1 bg-gray-800"></div><span>9</span></div>
                                    <span>: 4 =</span>
                                    <div class="flex flex-col items-center">
                                        <input id="158-1-9-n" class="w-16 text-center border-b-4 border-orange-300 outline-none">
                                        <div class="w-16 h-1 bg-gray-800"></div>
                                        <input id="158-1-9-d" class="w-16 text-center outline-none" value="9">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-158-1" onclick="window.check_158_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="lesson158_b2" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-green-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-14 h-14 md:w-16 md:h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                    <h3 class="text-2xl md:text-3xl font-black text-green-700 uppercase tracking-wide">Tìm số hoặc chữ thích hợp với dấu "?"</h3>
                </div>
                
                <div class="grid grid-cols-1 gap-12">
                    <!-- a -->
                    <div class="relative bg-[#fdf5e6] p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-4 border-[#e6d5b8] shadow-inner">
                        <div class="absolute -top-12 right-10 w-24 h-24 md:w-32 md:h-32 bg-orange-200 rounded-full flex items-center justify-center shadow-md animate-bounce">
                            <img src="https://cdn-icons-png.flaticon.com/512/3069/3069172.png" class="w-16 md:w-24 opacity-80" alt="bear">
                        </div>
                        <div class="space-y-8 text-2xl md:text-4xl font-black text-amber-900 mt-10">
                            <div class="flex flex-wrap items-center gap-4"><span>a : a =</span><input id="158-2-1" class="w-20 h-14 md:w-24 md:h-16 text-center bg-white rounded-2xl border-2 border-amber-300 outline-none" placeholder="?"><span>(a khác 0)</span></div>
                            <div class="flex flex-wrap items-center gap-4"><input id="158-2-2" class="w-20 h-14 md:w-24 md:h-16 text-center bg-white rounded-2xl border-2 border-amber-300 outline-none" placeholder="?"><span>: a = 0 (a khác 0)</span></div>
                            <div class="flex flex-wrap items-center gap-4"><span>a :</span><input id="158-2-3" class="w-20 h-14 md:w-24 md:h-16 text-center bg-white rounded-2xl border-2 border-amber-300 outline-none" placeholder="?"><span>= a</span></div>
                            <div class="flex flex-wrap items-center gap-4"><span>a ×</span><input id="158-2-4" class="w-20 h-14 md:w-24 md:h-16 text-center bg-white rounded-2xl border-2 border-amber-300 outline-none" placeholder="?"><span>= 0</span></div>
                        </div>
                    </div>

                    <!-- b -->
                    <div class="relative bg-[#f0f8ff] p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-4 border-[#d1e9ff] shadow-inner">
                        <div class="absolute -top-12 right-10 w-24 h-24 md:w-32 md:h-32 bg-blue-200 rounded-full flex items-center justify-center shadow-md">
                            <img src="https://cdn-icons-png.flaticon.com/512/3069/3069186.png" class="w-16 md:w-24 opacity-80" alt="bear">
                        </div>
                        <div class="space-y-8 text-2xl md:text-4xl font-black text-blue-900 mt-10">
                            <div class="flex flex-wrap items-center gap-4"><span>a × b = b ×</span><input id="158-2-5" class="w-20 h-14 md:w-24 md:h-16 text-center bg-white rounded-2xl border-2 border-blue-300 outline-none" placeholder="?"></div>
                            <div class="flex flex-wrap items-center gap-4"><span>a × 1 =</span><input id="158-2-6" class="w-20 h-14 md:w-24 md:h-16 text-center bg-white rounded-2xl border-2 border-blue-300 outline-none" placeholder="?"><span>=</span><input id="158-2-7" class="w-20 h-14 md:w-24 md:h-16 text-center bg-white rounded-2xl border-2 border-blue-300 outline-none" placeholder="?"><span>× a</span></div>
                            <div class="flex flex-wrap items-center gap-4"><span>(a × b) × c =</span><input id="158-2-8" class="w-20 h-14 md:w-24 md:h-16 text-center bg-white rounded-2xl border-2 border-blue-300 outline-none" placeholder="?"><span>× (b × c)</span></div>
                            <div class="flex flex-wrap items-center gap-4"><span>a × (b + c) = a × b + a ×</span><input id="158-2-9" class="w-20 h-14 md:w-24 md:h-16 text-center bg-white rounded-2xl border-2 border-blue-300 outline-none" placeholder="?"></div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-158-2" onclick="window.check_158_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="lesson158_b3" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-orange-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-14 h-14 md:w-16 md:h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                    <h3 class="text-2xl md:text-3xl font-black text-orange-700 uppercase tracking-wide">Tính bằng cách thuận tiện</h3>
                </div>
                
                <div class="grid grid-cols-1 gap-10">
                    <div class="p-6 md:p-8 bg-orange-50 rounded-[2.5rem] border-4 border-orange-200">
                        <div class="flex flex-col md:flex-row md:items-center gap-6 text-2xl md:text-3xl font-black">
                            <p class="text-orange-800">a) (125 × 0,67) × 8 =</p>
                            <input id="158-3-1" class="w-32 h-14 md:h-16 text-center rounded-2xl border-4 border-orange-300 outline-none focus:border-orange-500" placeholder="?">
                        </div>
                    </div>
                    <div class="p-6 md:p-8 bg-orange-50 rounded-[2.5rem] border-4 border-orange-200">
                        <div class="flex flex-col md:flex-row md:items-center gap-6 text-2xl md:text-3xl font-black">
                            <p class="text-orange-800">b) <span class="inline-block align-middle"><div class="flex flex-col items-center"><span>8</span><div class="w-8 h-0.5 bg-gray-800"></div><span>9</span></div></span> × <span class="inline-block align-middle"><div class="flex flex-col items-center"><span>7</span><div class="w-8 h-0.5 bg-gray-800"></div><span>11</span></div></span> + <span class="inline-block align-middle"><div class="flex flex-col items-center"><span>4</span><div class="w-8 h-0.5 bg-gray-800"></div><span>11</span></div></span> × <span class="inline-block align-middle"><div class="flex flex-col items-center"><span>8</span><div class="w-8 h-0.5 bg-gray-800"></div><span>9</span></div></span> =</p>
                            <div class="flex flex-col items-center ml-4">
                                <input id="158-3-2-n" class="w-14 text-center border-b-2 border-gray-400 outline-none" placeholder="?">
                                <div class="w-14 h-0.5 bg-gray-800"></div>
                                <input id="158-3-2-d" class="w-14 text-center outline-none" placeholder="?">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-158-3" onclick="window.check_158_3()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 4 -->
            <div id="lesson158_b4" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-rose-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-14 h-14 md:w-16 md:h-16 bg-rose-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                    <h3 class="text-2xl md:text-3xl font-black text-rose-700 uppercase tracking-wide">Giải bài toán</h3>
                </div>
                
                <div class="p-6 md:p-10 bg-rose-50 rounded-[2.5rem] md:rounded-[3rem] border-4 border-rose-200">
                    <div class="space-y-8">
                        <p class="text-2xl md:text-4xl leading-relaxed text-gray-800 font-bold">
                            Nam mua 3 quyển vở, mỗi quyển giá 7 600 đồng và mua 5 quyển vở khác, mỗi quyển giá 6 000 đồng. Hỏi trung bình mỗi quyển vở Nam mua giá bao nhiêu tiền?
                        </p>
                        
                        <div class="bg-white p-8 rounded-3xl shadow-sm border-2 border-rose-100 flex flex-col items-center gap-6">
                            <div class="flex items-center gap-4 text-2xl md:text-4xl font-black">
                                <span>Đáp số:</span>
                                <input id="158-4" class="w-40 h-16 md:w-56 md:h-20 text-center text-2xl md:text-4xl font-black bg-rose-50 rounded-2xl border-4 border-rose-300 outline-none focus:border-rose-500 shadow-lg" placeholder="...">
                                <span class="text-xl md:text-2xl text-gray-500 font-bold italic">đồng</span>
                            </div>
                        </div>

                        <div class="flex flex-col items-center gap-4 mt-10">
                            <img src="assets/images/toan/toan_tap_2/158/158-4.png" class="max-w-full h-auto rounded-3xl shadow-2xl border-4 border-white" alt="notebook illustration">
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-158-4" onclick="window.check_158_4()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>
    `,

    quizPool: [
        {
            question: "Kết quả của phép nhân 2 508 × 34 là:",
            options: ["85 272", "85 172", "84 272", "85 372"],
            answer: 0
        },
        {
            question: "Tính: 617 × 4,5 = ?",
            options: ["2776,5", "277,65", "27,765", "27765"],
            answer: 0
        },
        {
            question: "Kết quả của 32,6 × 0,58 là:",
            options: ["18,908", "18,98", "19,908", "18,098"],
            answer: 0
        },
        {
            question: "Kết quả của phép chia 45 276 : 98 là:",
            options: ["462", "452", "472", "461"],
            answer: 0
        },
        {
            question: "Tính: 544,7 : 65 = ?",
            options: ["8,38", "8,37", "8,48", "7,38"],
            answer: 0
        },
        {
            question: "98,28 : 3,6 = ?",
            options: ["27,3", "2,73", "273", "27,4"],
            answer: 0
        },
        {
            question: "Điền vào dấu ?: a × b = b × ?",
            options: ["a", "b", "1", "0"],
            answer: 0
        },
        {
            question: "0 chia cho một số khác 0 bằng mấy?",
            options: ["0", "1", "Chính số đó", "Không chia được"],
            answer: 0
        },
        {
            question: "Kết quả của biểu thức (125 × 0,67) × 8 là:",
            options: ["670", "67", "6700", "0,67"],
            answer: 0
        },
        {
            question: "Trung bình cộng của 7600 và 6000 có bằng giá tiền trung bình của quyển vở trong Bài 4 không?",
            options: ["Không", "Có"],
            answer: 0
        },
        {
            question: "Tính nhẩm: 25 × 4 = ?",
            options: ["100", "10", "1000", "40"],
            answer: 0
        },
        {
            question: "Kết quả của 0,5 × 2 là:",
            options: ["1", "0,1", "10", "0,5"],
            answer: 0
        },
        {
            question: "Tính: 1 : 0,5 = ?",
            options: ["2", "0,5", "5", "0,2"],
            answer: 0
        },
        {
            question: "Phép chia 10 : 3 có thương là số thập phân vô hạn không?",
            options: ["Có", "Không"],
            answer: 0
        },
        {
            question: "12,5 × 0,1 = ?",
            options: ["1,25", "125", "0,125", "12,5"],
            answer: 0
        }
    ]
};

// --- Logic Functions ---
window.check_158_1 = function () {
    const results = [
        { id: '158-1-1', ans: ['85272', '85 272'] },
        { id: '158-1-2', ans: ['2776,5', '2776.5'] },
        { id: '158-1-3', ans: ['18,908', '18.908'] },
        { id: '158-1-4', ans: ['462'] },
        { id: '158-1-5', ans: ['8,38', '8.38'] },
        { id: '158-1-6', ans: ['27,3', '27.3'] },
        { id: '158-1-7-n', ans: ['9'] },
        { id: '158-1-8-n', ans: ['3'] },
        { id: '158-1-9-n', ans: ['4'] }
    ];

    let correct = 0;
    const total = results.length;
    results.forEach(r => {
        const el = document.getElementById(r.id);
        if (el && r.ans.includes(el.value.trim().replace(/\s/g, ''))) {
            el.classList.add('bg-green-100', 'border-green-500');
            el.classList.remove('bg-red-100', 'border-red-500');
            correct++;
        } else if (el) {
            el.classList.add('bg-red-100', 'border-red-500');
            el.classList.remove('bg-green-100', 'border-green-500');
        }
    });

    const isCorrect = correct === total;
    window.showMathFeedback(
        isCorrect,
        "85 272; 2776,5; 18,908; 462; 8,38; 27,3; 9/4; 3/2; 4/9",
        "",
        "Gợi ý: Hãy kiểm tra kỹ phép nhân, phép chia từng bước. Chú ý vị trí dấu phẩy trong số thập phân."
    );
    if (window.submitMathLesson) {
        window.submitMathLesson(
            "Bài 1. Tính",
            Math.round(correct / total * 100),
            "btn-check-158-1",
            0, total, correct
        );
    }
};

window.check_158_2 = function () {
    const results = [
        { id: '158-2-1', ans: ['1'] },
        { id: '158-2-2', ans: ['0'] },
        { id: '158-2-3', ans: ['1'] },
        { id: '158-2-4', ans: ['0'] },
        { id: '158-2-5', ans: ['a'] },
        { id: '158-2-6', ans: ['a'] },
        { id: '158-2-7', ans: ['1'] },
        { id: '158-2-8', ans: ['a'] },
        { id: '158-2-9', ans: ['c'] }
    ];

    let correct = 0;
    const total = results.length;
    results.forEach(r => {
        const el = document.getElementById(r.id);
        const val = el ? el.value.trim().toLowerCase() : '';
        if (el && r.ans.includes(val)) {
            el.classList.add('bg-green-100', 'border-green-500');
            el.classList.remove('bg-red-100', 'border-red-500');
            correct++;
        } else if (el) {
            el.classList.add('bg-red-100', 'border-red-500');
            el.classList.remove('bg-green-100', 'border-green-500');
        }
    });

    const isCorrect = correct === total;
    window.showMathFeedback(
        isCorrect,
        "a : a = 1; 0 : a = 0; a : 1 = a; a × 0 = 0; a × b = b × a; a × 1 = a = 1 × a; (a × b) × c = a × (b × c); a × (b + c) = a × b + a × c",
        "",
        "Gợi ý: Hãy nhớ lại các tính chất của phép nhân (giao hoán, kết hợp, phân phối) và phép chia."
    );
    if (window.submitMathLesson) {
        window.submitMathLesson(
            "Bài 2. Tìm số thích hợp",
            Math.round(correct / total * 100),
            "btn-check-158-2",
            0, total, correct
        );
    }
};

window.check_158_3 = function () {
    const v1 = document.getElementById('158-3-1')?.value.trim().replace(',', '.') || '';
    const n2 = document.getElementById('158-3-2-n')?.value.trim() || '';
    const d2 = document.getElementById('158-3-2-d')?.value.trim() || '';

    let score = 0;
    const total = 2;
    if (v1 === '670') score++;
    if (n2 === '8' && d2 === '9') score++;

    const isCorrect = score === total;
    window.showMathFeedback(
        isCorrect,
        "a) (125 × 0,67) × 8 = (125 × 8) × 0,67 = 1000 × 0,67 = 670; b) 8/9 × (7/11 + 4/11) = 8/9 × 1 = 8/9",
        "",
        "Gợi ý: a) Áp dụng tính chất giao hoán: nhóm 125 × 8 = 1000. b) Áp dụng tính chất phân phối: đưa 8/9 ra ngoài."
    );
    if (window.submitMathLesson) {
        window.submitMathLesson(
            "Bài 3. Tính thuận tiện",
            Math.round(score / total * 100),
            "btn-check-158-3",
            0, total, score
        );
    }
};

window.check_158_4 = function () {
    const val = document.getElementById('158-4')?.value.trim().replace(/\s/g, '') || '';
    const isCorrect = val === '6600';
    const score = isCorrect ? 1 : 0;
    const total = 1;

    window.showMathFeedback(
        isCorrect,
        "Tổng tiền: 3 × 7 600 + 5 × 6 000 = 22 800 + 30 000 = 52 800 (đồng). Trung bình: 52 800 : 8 = 6 600 (đồng)",
        "",
        "Gợi ý: Tính tổng số tiền (3 × 7 600 + 5 × 6 000), rồi chia cho tổng số quyển vở (3 + 5 = 8)."
    );
    if (window.submitMathLesson) {
        window.submitMathLesson(
            "Bài 4. Giải bài toán",
            isCorrect ? 100 : 0,
            "btn-check-158-4",
            0, total, score
        );
    }
};

window.lesson158 = lesson158;

