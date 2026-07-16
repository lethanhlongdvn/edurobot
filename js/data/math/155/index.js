const metadata = {
    "lessonInfo": {
        "period": "155",
        "week": "31",
        "topic": "Số thập phân",
        "title": "BÀI 68: ÔN TẬP SỐ TỰ NHIÊN, PHÂN SỐ, SỐ THẬP PHÂN (TIẾT 3)",
        "desc": "Học sinh ôn tập về cách đọc, viết số tự nhiên, phân số và số thập phân; so sánh và làm tròn số thông qua các bài tập thực hành."
    },
    "quizPool": [
        {
            "id": "155_q1",
            "type": "choice",
            "question": "Số thập phân gồm có tám đơn vị, chín phần mười, hai phần trăm được viết là:",
            "options": ["8,92", "82,9", "8,29", "89,2"],
            "answer": 0
        },
        {
            "id": "155_q2",
            "type": "choice",
            "question": "Chữ số 7 trong số thập phân 124,75 có giá trị là:",
            "options": ["7/10", "7/100", "7/1000", "7"],
            "answer": 0
        },
        {
            "id": "155_q3",
            "type": "choice",
            "question": "Trong các số: 9,1; 8,99; 9,099; 9,01. Số lớn nhất là:",
            "options": ["9,1", "8,99", "9,099", "9,01"],
            "answer": 0
        },
        {
            "id": "155_q4",
            "type": "choice",
            "question": "Phân số 3/4 viết dưới dạng số thập phân là:",
            "options": ["0,34", "0,75", "3,4", "7,5"],
            "answer": 1
        },
        {
            "id": "155_q5",
            "type": "choice",
            "question": "Số thập phân 45,008 được đọc là:",
            "options": [
                "Bốn mươi lăm phẩy tám",
                "Bốn mươi lăm phẩy không tám",
                "Bốn mươi lăm phẩy không trăm linh tám",
                "Bốn mươi lăm phẩy không trăm tám"
            ],
            "answer": 2
        },
        {
            "id": "155_q6",
            "type": "choice",
            "question": "Số thập phân nào bằng số 9,1?",
            "options": ["9,01", "9,100", "9,001", "9,11"],
            "answer": 1
        },
        {
            "id": "155_q7",
            "type": "choice",
            "question": "Số gồm 5 nghìn, 6 đơn vị, 7 phần trăm và 8 phần nghìn viết là:",
            "options": ["506,078", "5006,78", "5006,078", "56,078"],
            "answer": 2
        },
        {
            "id": "155_q8",
            "type": "choice",
            "question": "Viết 2m 5cm dưới dạng số thập phân với đơn vị mét là:",
            "options": ["2,5m", "2,05m", "2,005m", "0,25m"],
            "answer": 1
        },
        {
            "id": "155_q9",
            "type": "choice",
            "question": "Tìm số tự nhiên x, biết: 0,8 < x < 2,03",
            "options": ["x = 0; 1", "x = 1; 2", "x = 1", "x = 2"],
            "answer": 1
        },
        {
            "id": "155_q10",
            "type": "choice",
            "question": "Số thập phân 0,6 viết dưới dạng phân số tối giản là:",
            "options": ["6/10", "3/5", "60/100", "1/6"],
            "answer": 1
        },
        {
            "id": "155_q11",
            "type": "choice",
            "question": "Trong số thập phân 12,345, chữ số 5 thuộc hàng nào?",
            "options": ["Hàng phần mười", "Hàng phần trăm", "Hàng phần nghìn", "Hàng đơn vị"],
            "answer": 2
        },
        {
            "id": "155_q12",
            "type": "choice",
            "question": "Hỗn số 3 và 2/5 viết dưới dạng số thập phân là:",
            "options": ["3,2", "3,5", "3,4", "3,25"],
            "answer": 2
        },
        {
            "id": "155_q13",
            "type": "choice",
            "question": "Trung bình cộng của hai số 4,5 và 5,5 là:",
            "options": ["10", "5", "4,5", "5,5"],
            "answer": 1
        },
        {
            "id": "155_q14",
            "type": "choice",
            "question": "Kết quả của phép tính 0,25 + 0,75 là:",
            "options": ["0,1", "1,0", "0,100", "10"],
            "answer": 1
        },
        {
            "id": "155_q15",
            "type": "choice",
            "question": "Phân số 1/2 viết dưới dạng tỉ số phần trăm là:",
            "options": ["0,5%", "5%", "50%", "1,2%"],
            "answer": 2
        }
    ]
};

const lesson155_content = `
    <div class="font-vietpro space-y-12 animate-fadeIn pb-20">
        <!-- Phần 1: Ôn tập về số tự nhiên -->
        <div class="glass-card p-4 md:p-10 rounded-3xl md:rounded-[3rem] bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 shadow-2xl overflow-hidden relative group">
            <div class="absolute top-0 right-0 w-40 h-40 bg-blue-100/50 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-blue-200/50 transition-colors"></div>
            
            <div class="relative z-10">
                <h3 class="text-2xl md:text-4xl font-black text-blue-700 mb-8 flex items-center gap-4">
                    <span class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg">1</span>
                    ÔN TẬP VỀ SỐ TỰ NHIÊN
                </h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2rem] shadow-xl border-t-8 border-blue-500 hover:scale-[1.02] transition-transform">
                        <p class="text-xl md:text-3xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                            <i class="fas fa-list-ol"></i> Cấu tạo số
                        </p>
                        <ul class="text-lg md:text-3xl text-slate-600 space-y-3 list-disc ml-6">
                            <li>Đọc, viết số từ hàng đơn vị đến hàng tỉ.</li>
                            <li>Xác định giá trị của chữ số theo hàng.</li>
                        </ul>
                    </div>
                    <div class="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2rem] shadow-xl border-t-8 border-blue-500 hover:scale-[1.02] transition-transform">
                        <p class="text-xl md:text-3xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                            <i class="fas fa-greater-than-equal"></i> So sánh số
                        </p>
                        <ul class="text-lg md:text-3xl text-slate-600 space-y-3 list-disc ml-6">
                            <li>Số có nhiều chữ số hơn thì lớn hơn.</li>
                            <li>So sánh từng hàng từ trái sang phải.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Phần 2: Ôn tập về phân số -->
        <div class="glass-card p-4 md:p-10 rounded-3xl md:rounded-[3rem] bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-100 shadow-2xl overflow-hidden relative group">
            <div class="absolute top-0 right-0 w-40 h-40 bg-emerald-100/50 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-emerald-200/50 transition-colors"></div>
            
            <div class="relative z-10">
                <h3 class="text-2xl md:text-4xl font-black text-emerald-700 mb-8 flex items-center gap-4">
                    <span class="w-12 h-12 md:w-16 md:h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-lg">2</span>
                    ÔN TẬP VỀ PHÂN SỐ
                </h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2rem] shadow-xl border-t-8 border-emerald-500 hover:scale-[1.02] transition-transform">
                        <p class="text-xl md:text-3xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
                            <i class="fas fa-compress-arrows-alt"></i> Tính chất cơ bản
                        </p>
                        <p class="text-lg md:text-3xl text-slate-600 leading-relaxed italic border-l-4 border-emerald-200 pl-4">
                            "Rút gọn phân số và quy đồng mẫu số là hai kỹ năng quan trọng để so sánh và tính toán."
                        </p>
                    </div>
                    <div class="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2rem] shadow-xl border-t-8 border-teal-500 hover:scale-[1.02] transition-transform">
                        <p class="text-xl md:text-3xl font-bold text-teal-800 mb-4 flex items-center gap-2">
                            <i class="fas fa-exchange-alt"></i> Phân số & Số thập phân
                        </p>
                        <p class="text-lg md:text-3xl text-slate-600 leading-relaxed">
                            Mọi phân số có mẫu số 10, 100, 1000... đều dễ dàng chuyển thành số thập phân.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const lesson155_practice = `
    <div class="font-vietpro space-y-12 md:space-y-16 pb-20">
        <!-- Bài 1 -->
        <div class="glass-card p-4 md:p-10 rounded-3xl md:rounded-[3rem] bg-white border border-blue-100 shadow-2xl relative overflow-hidden group">
            <div class="relative z-10">
                <div class="flex items-start gap-4 md:gap-8 border-b-4 md:border-b-6 border-blue-100 pb-6 md:pb-10 mb-8 md:mb-12">
                    <span class="w-14 h-14 md:w-20 md:h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-4xl font-black shadow-lg shrink-0">1</span>
                    <div class="space-y-4">
                        <p class="text-xl md:text-3xl text-slate-700 leading-relaxed font-bold">Chuyển phân số thập phân thành số thập phân (theo mẫu):</p>
                    </div>
                </div>
                
                <div class="overflow-x-auto -mx-2 md:mx-0">
                    <table class="w-full border-collapse border-2 md:border-4 border-blue-100 rounded-2xl md:rounded-3xl overflow-hidden text-lg md:text-3xl min-w-[600px]">
                        <thead>
                            <tr class="bg-blue-500 text-white">
                                <th class="p-2 md:p-4 border-2 border-blue-200">Phân số</th>
                                <th class="p-2 md:p-4 border-2 border-blue-200">Số thập phân</th>
                                <th class="p-2 md:p-4 border-2 border-blue-200">Đọc số</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="p-2 md:p-4 border-2 border-blue-100 text-center font-bold">31/10</td>
                                <td class="p-2 md:p-4 border-2 border-blue-100"><input id="155-1-1-t" type="text" class="w-full h-10 md:h-14 text-center text-xl md:text-3xl font-bold border-2 border-blue-200 rounded-lg outline-none" placeholder="?"></td>
                                <td class="p-2 md:p-4 border-2 border-blue-100"><input id="155-1-1-r" type="text" class="w-full h-10 md:h-14 text-blue-600 text-lg md:text-3xl font-bold border-2 border-blue-200 rounded-lg outline-none px-2" placeholder="?"></td>
                            </tr>
                            <tr>
                                <td class="p-2 md:p-4 border-2 border-blue-100 text-center font-bold">75/100</td>
                                <td class="p-2 md:p-4 border-2 border-blue-100"><input id="155-1-2-t" type="text" class="w-full h-10 md:h-14 text-center text-xl md:text-3xl font-bold border-2 border-blue-200 rounded-lg outline-none" placeholder="?"></td>
                                <td class="p-2 md:p-4 border-2 border-blue-100"><input id="155-1-2-r" type="text" class="w-full h-10 md:h-14 text-blue-600 text-lg md:text-3xl font-bold border-2 border-blue-200 rounded-lg outline-none px-2" placeholder="?"></td>
                            </tr>
                            <tr>
                                <td class="p-2 md:p-4 border-2 border-blue-100 text-center font-bold">489/100</td>
                                <td class="p-2 md:p-4 border-2 border-blue-100"><input id="155-1-3-t" type="text" class="w-full h-10 md:h-14 text-center text-xl md:text-3xl font-bold border-2 border-blue-200 rounded-lg outline-none" placeholder="?"></td>
                                <td class="p-2 md:p-4 border-2 border-blue-100"><input id="155-1-3-r" type="text" class="w-full h-10 md:h-14 text-blue-600 text-lg md:text-3xl font-bold border-2 border-blue-200 rounded-lg outline-none px-2" placeholder="?"></td>
                            </tr>
                            <tr>
                                <td class="p-2 md:p-4 border-2 border-blue-100 text-center font-bold">6024/1000</td>
                                <td class="p-2 md:p-4 border-2 border-blue-100"><input id="155-1-4-t" type="text" class="w-full h-10 md:h-14 text-center text-xl md:text-3xl font-bold border-2 border-blue-200 rounded-lg outline-none" placeholder="?"></td>
                                <td class="p-2 md:p-4 border-2 border-blue-100"><input id="155-1-4-r" type="text" class="w-full h-10 md:h-14 text-blue-600 text-lg md:text-3xl font-bold border-2 border-blue-200 rounded-lg outline-none px-2" placeholder="?"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="mt-8 md:mt-12 flex justify-end gap-4 md:gap-6 items-center">
                    <button onclick="window.reset155_1()" class="w-14 h-14 md:w-20 md:h-20 bg-white border-4 border-[#2563eb] text-[#2563eb] rounded-xl md:rounded-[1.5rem] flex items-center justify-center shadow-lg hover:bg-blue-50 active:scale-95 transition-all">
                        <svg class="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                        </svg>
                    </button>
                    <button id="btn-check-155-1" onclick="window.check_155_1()" class="w-14 h-14 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-xl md:rounded-[1.5rem] font-black text-2xl md:text-4xl flex items-center justify-center shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>

        <!-- Bài 2 -->
        <div class="glass-card p-4 md:p-10 rounded-3xl md:rounded-[3rem] bg-white border border-blue-100 shadow-2xl relative overflow-hidden">
            <div class="relative z-10">
                <div class="flex items-start gap-4 md:gap-8 border-b-4 md:border-b-6 border-blue-100 pb-6 md:pb-10 mb-8 md:mb-12">
                    <span class="w-14 h-14 md:w-20 md:h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-4xl font-black shadow-lg shrink-0">2</span>
                    <p class="text-xl md:text-3xl text-slate-700 font-bold">Viết các phân số sau dưới dạng số thập phân:</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-12 md:gap-y-8 p-4 md:p-8 bg-blue-50 rounded-2xl border-2 border-blue-100">
                    <div class="flex items-center justify-start md:justify-center gap-4">
                        <span class="text-xl md:text-3xl font-bold">21/30 =</span>
                        <input id="155-2-1" type="text" class="w-24 md:w-32 h-10 md:h-14 text-center text-xl md:text-3xl font-bold border-2 border-blue-300 rounded-xl outline-none" placeholder="?">
                    </div>
                    <div class="flex items-center justify-start md:justify-center gap-4">
                        <span class="text-xl md:text-3xl font-bold">62/200 =</span>
                        <input id="155-2-2" type="text" class="w-24 md:w-32 h-10 md:h-14 text-center text-xl md:text-3xl font-bold border-2 border-blue-300 rounded-xl outline-none" placeholder="?">
                    </div>
                    <div class="flex items-center justify-start md:justify-center gap-4">
                        <span class="text-xl md:text-3xl font-bold">7/4 =</span>
                        <input id="155-2-3" type="text" class="w-24 md:w-32 h-10 md:h-14 text-center text-xl md:text-3xl font-bold border-2 border-blue-300 rounded-xl outline-none" placeholder="?">
                    </div>
                    <div class="flex items-center justify-start md:justify-center gap-4">
                        <span class="text-xl md:text-3xl font-bold">5/8 =</span>
                        <input id="155-2-4" type="text" class="w-24 md:w-32 h-10 md:h-14 text-center text-xl md:text-3xl font-bold border-2 border-blue-300 rounded-xl outline-none" placeholder="?">
                    </div>
                </div>

                <div class="mt-8 md:mt-12 flex justify-end gap-4 md:gap-6 items-center">
                    <button onclick="window.reset155_2()" class="w-14 h-14 md:w-20 md:h-20 bg-white border-4 border-[#2563eb] text-[#2563eb] rounded-xl md:rounded-[1.5rem] flex items-center justify-center shadow-lg hover:bg-blue-50 active:scale-95 transition-all">
                        <svg class="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                        </svg>
                    </button>
                    <button id="btn-check-155-2" onclick="window.check_155_2()" class="w-14 h-14 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-xl md:rounded-[1.5rem] font-black text-2xl md:text-4xl flex items-center justify-center shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>

        <!-- Bài 3 -->
        <div class="glass-card p-4 md:p-10 rounded-3xl md:rounded-[3rem] bg-white border border-blue-100 shadow-2xl relative overflow-hidden">
            <div class="relative z-10">
                <div class="flex items-start gap-4 md:gap-8 border-b-4 md:border-b-6 border-blue-100 pb-6 md:pb-10 mb-8 md:mb-12">
                    <span class="w-14 h-14 md:w-20 md:h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-4xl font-black shadow-lg shrink-0">3</span>
                    <p class="text-xl md:text-3xl text-slate-700 font-bold">Điền dấu (>, <, =) thích hợp vào ô trống:</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-xl md:text-3xl font-bold text-slate-700">
                    <div class="flex items-center justify-center gap-4 bg-blue-50/50 p-6 rounded-2xl border-2 border-white shadow-sm">
                        <span>16,7</span>
                        <input id="155-3-1" type="text" class="w-14 md:w-20 h-10 md:h-14 text-center border-2 border-blue-300 rounded-lg outline-none focus:border-blue-500" placeholder="?">
                        <span>16,07</span>
                    </div>
                    <div class="flex items-center justify-center gap-4 bg-blue-50/50 p-6 rounded-2xl border-2 border-white shadow-sm">
                        <span>85,79</span>
                        <input id="155-3-2" type="text" class="w-14 md:w-20 h-10 md:h-14 text-center border-2 border-blue-300 rounded-lg outline-none focus:border-blue-500" placeholder="?">
                        <span>85,8</span>
                    </div>
                    <div class="flex items-center justify-center gap-4 bg-emerald-50/50 p-6 rounded-2xl border-2 border-white shadow-sm">
                        <span>9,80</span>
                        <input id="155-3-3" type="text" class="w-14 md:w-20 h-10 md:h-14 text-center border-2 border-emerald-300 rounded-lg outline-none focus:border-emerald-500" placeholder="?">
                        <span>9,8</span>
                    </div>
                    <div class="flex items-center justify-center gap-4 bg-orange-50/50 p-6 rounded-2xl border-2 border-white shadow-sm">
                        <span>7,360</span>
                        <input id="155-3-4" type="text" class="w-14 md:w-20 h-10 md:h-14 text-center border-2 border-orange-300 rounded-lg outline-none focus:border-orange-500" placeholder="?">
                        <span>7,36</span>
                    </div>
                    <div class="flex items-center justify-center gap-4 bg-red-50/50 p-6 rounded-2xl border-2 border-white shadow-sm">
                        <span>0,830</span>
                        <input id="155-3-5" type="text" class="w-14 md:w-20 h-10 md:h-14 text-center border-2 border-red-300 rounded-lg outline-none focus:border-red-500" placeholder="?">
                        <span>0,829</span>
                    </div>
                    <div class="flex items-center justify-center gap-4 bg-slate-50/50 p-6 rounded-2xl border-2 border-white shadow-sm">
                        <span>28,999</span>
                        <input id="155-3-6" type="text" class="w-14 md:w-20 h-10 md:h-14 text-center border-2 border-slate-300 rounded-lg outline-none focus:border-slate-500" placeholder="?">
                        <span>29,001</span>
                    </div>
                </div>

                <div class="mt-8 md:mt-12 flex justify-end gap-4 md:gap-6 items-center">
                    <button onclick="window.reset155_3()" class="w-14 h-14 md:w-20 md:h-20 bg-white border-4 border-[#2563eb] text-[#2563eb] rounded-xl md:rounded-[1.5rem] flex items-center justify-center shadow-lg hover:bg-blue-50 active:scale-95 transition-all">
                        <svg class="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                        </svg>
                    </button>
                    <button id="btn-check-155-3" onclick="window.check_155_3()" class="w-14 h-14 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-xl md:rounded-[1.5rem] font-black text-2xl md:text-4xl flex items-center justify-center shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>

        <!-- Bài 4 -->
        <div class="glass-card p-4 md:p-10 rounded-3xl md:rounded-[3rem] bg-white border border-blue-100 shadow-2xl relative overflow-hidden">
            <div class="relative z-10">
                <div class="flex items-start gap-4 md:gap-8 border-b-4 md:border-b-6 border-blue-100 pb-6 md:pb-10 mb-8 md:mb-12">
                    <span class="w-14 h-14 md:w-20 md:h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-4xl font-black shadow-lg shrink-0">4</span>
                    <p class="text-xl md:text-3xl text-slate-700 leading-relaxed font-bold">Dưới đây là số đo diện tích các căn hộ hai phòng ngủ của một toà chung cư: 71,5 m²; 69,83 m²; 71,09 m²; 68,93 m². Viết các số đo diện tích trên theo thứ tự từ bé đến lớn.</p>
                </div>

                <div class="bg-rose-50 p-4 md:p-8 rounded-2xl border-2 border-rose-100">
                    <div class="flex flex-wrap gap-3 md:gap-4 mb-8 justify-center min-h-[60px]" id="lesson155_pool"></div>
                    
                    <div class="flex items-center gap-2 text-rose-400 mb-2">
                        <i class="fas fa-sort-amount-up-alt"></i>
                        <span class="text-lg md:text-2xl font-bold uppercase">Thứ tự từ bé đến lớn:</span>
                    </div>
                    <div class="p-4 md:p-8 bg-white rounded-2xl border-4 border-dashed border-rose-200 min-h-[120px] flex flex-wrap gap-3 md:gap-4 justify-center items-center shadow-inner" id="lesson155_zone"></div>
                </div>

                <div class="mt-8 md:mt-12 flex justify-end gap-4 md:gap-6 items-center">
                    <button onclick="window.reset155_4()" class="w-14 h-14 md:w-20 md:h-20 bg-white border-4 border-[#2563eb] text-[#2563eb] rounded-xl md:rounded-[1.5rem] flex items-center justify-center shadow-lg hover:bg-blue-50 active:scale-95 transition-all">
                        <svg class="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                        </svg>
                    </button>
                    <button id="btn-check-155-4" onclick="window.check_155_4()" class="w-14 h-14 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-xl md:rounded-[1.5rem] font-black text-2xl md:text-4xl flex items-center justify-center shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>

        <!-- Bài 5 -->
        <div class="glass-card p-4 md:p-10 rounded-3xl md:rounded-[3rem] bg-white border border-blue-100 shadow-2xl relative overflow-hidden">
            <div class="relative z-10">
                <div class="flex items-start gap-4 md:gap-8 border-b-4 md:border-b-6 border-blue-100 pb-6 md:pb-10 mb-8 md:mb-12">
                    <span class="w-14 h-14 md:w-20 md:h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-4xl font-black shadow-lg shrink-0">5</span>
                    <p class="text-xl md:text-3xl text-slate-700 leading-relaxed font-bold">Số ?</p>
                </div>
                
                <div class="space-y-6 md:space-y-8">
                    <div class="p-4 md:p-8 bg-blue-50 rounded-2xl border-2 border-blue-100 shadow-inner">
                        <p class="text-xl md:text-3xl leading-relaxed text-gray-700">
                            a) Sản lượng cá đánh bắt được của công ty Thành Long trong tháng Ba gấp rưỡi tháng Hai. Vậy sản lượng cá đánh bắt được của công ty Thành Long trong tháng Ba bằng 
                            <input id="155-5-a" type="text" class="inline-block w-20 md:w-32 h-10 md:h-14 mx-1 md:mx-2 text-center text-xl md:text-3xl font-bold border-2 md:border-4 border-blue-300 rounded-xl outline-none focus:border-blue-500 transition-all shadow-sm" placeholder="?">
                            % tháng Hai.
                        </p>
                    </div>
                    <div class="p-4 md:p-8 bg-blue-50 rounded-2xl border-2 border-blue-100 shadow-inner">
                        <div class="text-xl md:text-3xl leading-relaxed text-gray-700 mb-4 md:mb-6 flex flex-wrap items-center gap-2">
                            <span>b) Sản lượng cá đánh bắt được của công ty Thành Long trong tháng Tư bằng 60% tháng Ba. Vậy sản lượng cá đánh bắt được của công ty Thành Long trong tháng Tư bằng</span>
                            <input id="155-5-b" type="text" class="inline-block w-24 md:w-40 h-10 md:h-14 mx-1 md:mx-2 text-center text-xl md:text-3xl font-bold border-2 md:border-4 border-blue-300 rounded-xl outline-none focus:border-blue-500 transition-all shadow-sm" placeholder="?">
                            <span>tháng Ba.</span>
                        </div>
                        <div class="mt-4 flex justify-center">
                            <img src="assets/images/toan/toan_tap_2/155/bai5.png" class="max-w-full h-auto rounded-xl shadow-md border-2 border-blue-100" alt="Đoàn thuyền đánh cá">
                        </div>
                    </div>
                </div>

                <div class="mt-8 md:mt-12 flex justify-end gap-4 md:gap-6 items-center">
                    <button onclick="window.reset155_5()" class="w-14 h-14 md:w-20 md:h-20 bg-white border-4 border-[#2563eb] text-[#2563eb] rounded-xl md:rounded-[1.5rem] flex items-center justify-center shadow-lg hover:bg-blue-50 active:scale-95 transition-all">
                        <svg class="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                        </svg>
                    </button>
                    <button id="btn-check-155-5" onclick="window.check_155_5()" class="w-14 h-14 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-xl md:rounded-[1.5rem] font-black text-2xl md:text-4xl flex items-center justify-center shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>
    </div>
    <script>
        setTimeout(() => {
            if (typeof window.initSort155 === 'function') {
                window.initSort155();
            }
        }, 100);
    </script>
`;

// --- Logic Functions ---

window.check_155_1 = () => {
    try {
        const ids = [['155-1-1-t', '3,1'], ['155-1-2-t', '0,75'], ['155-1-3-t', '4,89'], ['155-1-4-t', '6,024']];
        let correct = 0;
        ids.forEach(([id, ans]) => {
            const el = document.getElementById(id);
            if (el && el.value.trim().replace('.', ',') === ans) correct++;
        });

        const readings = [
            ['155-1-1-r', 'ba phẩy một'],
            ['155-1-2-r', 'không phẩy bảy mươi lăm'],
            ['155-1-3-r', 'bốn phẩy tám mươi chín'],
            ['155-1-4-r', 'sáu phẩy không trăm hai mươi tư']
        ];
        let readCorrect = 0;
        readings.forEach(([id, ans]) => {
            const el = document.getElementById(id);
            if (!el) return;
            const val = window.normalizeVN ? window.normalizeVN(el.value).toLowerCase() : el.value.toLowerCase();
            if (val.includes(ans) || val.includes(ans.replace('tư', 'bốn'))) readCorrect++;
        });

        const total = ids.length + readings.length;
        const score = correct + readCorrect;
        const isCorrect = score === total;
        if (window.Quiz?.playSFX) window.Quiz.playSFX(isCorrect ? 'success' : 'wrong');
        const rightAnswer = "3,1; 0,75; 4,89; 6,024";
        const guidance = "Em hãy đếm số chữ số 0 ở mẫu số để đặt dấu phẩy cho đúng hàng thập phân. Ví dụ: mẫu là 100 thì có 2 chữ số ở phần thập phân nhé!";
        const solution = `<div class='space-y-4'>
            <p class='text-emerald-600 font-bold'>🎉 Giỏi quá! Em đã chuyển đổi và đọc số thập phân rất chính xác.</p>
            <div class='bg-white p-6 rounded-[2rem] shadow-inner border border-blue-50 space-y-2'>
                <p>• 31/10 = <b>3,1</b> (Ba phẩy một)</p>
                <p>• 75/100 = <b>0,75</b> (Không phẩy bảy mươi lăm)</p>
                <p>• 489/100 = <b>4,89</b> (Bốn phẩy tám mươi chín)</p>
                <p>• 6024/1000 = <b>6,024</b> (Sáu phẩy không trăm hai mươi tư)</p>
            </div>
        </div>`;
        window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
        if (window.submitMathLesson) window.submitMathLesson("Bài 1", Math.round((score / total) * 100), "btn-check-155-1", 0, total, score);
    } catch (e) { console.error(e); }
};

window.reset155_1 = () => {
    ['1-1-t', '1-2-t', '1-3-t', '1-4-t', '1-1-r', '1-2-r', '1-3-r', '1-4-r'].forEach(id => {
        const el = document.getElementById('155-' + id);
        if (el) el.value = '';
    });
};

window.check_155_2 = () => {
    try {
        const answers = { '2-1': '0,7', '2-2': '0,31', '2-3': '1,75', '2-4': '0,625' };
        let score = 0;
        Object.entries(answers).forEach(([id, ans]) => {
            const el = document.getElementById('155-' + id);
            if (el && el.value.trim().replace('.', ',') === ans) score++;
        });
        const isCorrect = score === 4;
        if (window.Quiz?.playSFX) window.Quiz.playSFX(isCorrect ? 'success' : 'wrong');
        const rightAnswer = "0,7; 0,31; 1,75; 0,625";
        const guidance = "Em có thể lấy tử số chia cho mẫu số, hoặc nhân cả tử và mẫu với một số để đưa mẫu về 10, 100, 1000... rồi viết thành số thập phân nhé!";
        const solution = `<div class='space-y-4'>
            <p class='text-emerald-600 font-bold'>✨ Thật tuyệt! Em đã chuyển phân số thành số thập phân rất tốt.</p>
            <div class='bg-white p-6 rounded-[2rem] shadow-inner border border-blue-50 space-y-2'>
                <p>• 7/10 = <b>0,7</b></p>
                <p>• 31/100 = <b>0,31</b></p>
                <p>• 7/4 = 175/100 = <b>1,75</b></p>
                <p>• 5/8 = 625/1000 = <b>0,625</b></p>
            </div>
        </div>`;
        window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
        if (window.submitMathLesson) window.submitMathLesson("Bài 2", isCorrect ? 100 : 0, "btn-check-155-2", 0, 4, score);
    } catch (e) { console.error(e); }
};

window.reset155_2 = () => {
    ['2-1', '2-2', '2-3', '2-4'].forEach(id => {
        const el = document.getElementById('155-' + id);
        if (el) el.value = '';
    });
};

window.check_155_3 = () => {
    try {
        const answers = { '3-1': '>', '3-2': '<', '3-3': '=', '3-4': '=', '3-5': '>', '3-6': '<' };
        let score = 0;
        Object.entries(answers).forEach(([id, ans]) => {
            const el = document.getElementById('155-' + id);
            if (el && el.value.trim() === ans) score++;
        });
        const isCorrect = score === 6;
        if (window.Quiz?.playSFX) window.Quiz.playSFX(isCorrect ? 'success' : 'wrong');
        const rightAnswer = ">, <, =, =, >, <";
        const guidance = "Em hãy so sánh phần nguyên trước. Nếu phần nguyên bằng nhau thì so sánh từng hàng ở phần thập phân từ trái sang phải nhé!";
        const solution = `<div class='space-y-4'>
            <p class='text-emerald-600 font-bold'>🌟 Rất xuất sắc! Em đã nắm vững cách so sánh số thập phân.</p>
            <div class='bg-white p-6 rounded-[2rem] shadow-inner border border-blue-50 space-y-2'>
                <p>• 8,1 > 7,9 ; 4,25 < 4,5 ; 6,3 = 6,30</p>
                <p>• 15,24 = 15,240 ; 106,7 > 106,17 ; 0,8 < 0,82</p>
            </div>
        </div>`;
        window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
        if (window.submitMathLesson) window.submitMathLesson("Bài 3", Math.round((score / 6) * 100), "btn-check-155-3", 0, 6, score);
    } catch (e) { console.error(e); }
};

window.reset155_3 = () => {
    ['3-1', '3-2', '3-3', '3-4', '3-5', '3-6'].forEach(id => {
        const el = document.getElementById('155-' + id);
        if (el) el.value = '';
    });
};

// --- Sorting Interaction Logic for Bài 4 ---
window.lesson155_state = { pool: [], zone: [] };

window.initSort155 = () => {
    window.lesson155_state.pool = ["71,5", "69,83", "71,09", "68,93"];
    window.lesson155_state.zone = [];
    window.lesson155_state.pool.sort(() => Math.random() - 0.5);

    // Đảm bảo element đã sẵn sàng trước khi render
    if (!document.getElementById('lesson155_pool')) {
        setTimeout(window.initSort155, 500);
        return;
    }
    window.renderSort155();
};

window.renderSort155 = () => {
    const poolEl = document.getElementById('lesson155_pool');
    const zoneEl = document.getElementById('lesson155_zone');
    if (!poolEl || !zoneEl) return;

    poolEl.innerHTML = '';
    zoneEl.innerHTML = '';

    window.lesson155_state.pool.forEach(val => {
        const item = document.createElement('div');
        item.className = 'p-3 md:p-5 bg-white border-2 border-rose-200 rounded-xl md:rounded-2xl shadow-md cursor-pointer hover:border-rose-500 text-xl md:text-3xl font-black text-rose-700 min-w-[120px] text-center transition-all active:scale-95';
        item.textContent = val + ' m²';
        item.onclick = () => {
            window.lesson155_state.zone.push(val);
            window.lesson155_state.pool = window.lesson155_state.pool.filter(v => v !== val);
            window.renderSort155();
            if (window.Quiz?.playSFX) window.Quiz.playSFX('click');
        };
        poolEl.appendChild(item);
    });

    window.lesson155_state.zone.forEach((val, idx) => {
        const item = document.createElement('div');
        item.className = 'p-3 md:p-5 bg-rose-600 text-white rounded-xl md:rounded-2xl shadow-lg cursor-pointer hover:bg-rose-700 text-xl md:text-3xl font-black flex items-center gap-3 transition-all active:scale-95';
        item.innerHTML = `<span class="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-lg flex items-center justify-center text-sm md:text-xl font-bold">${idx + 1}</span> <span>${val} m²</span>`;
        item.onclick = () => {
            window.lesson155_state.pool.push(val);
            window.lesson155_state.zone = window.lesson155_state.zone.filter(v => v !== val);
            window.renderSort155();
            if (window.Quiz?.playSFX) window.Quiz.playSFX('click');
        };
        zoneEl.appendChild(item);
    });

    if (window.lesson155_state.zone.length === 0) {
        zoneEl.innerHTML = '<p class="text-slate-400 italic text-lg md:text-2xl w-full text-center py-4">Chạm vào các số đo ở trên để sắp xếp...</p>';
    }
};

window.check_155_4 = () => {
    try {
        const correctOrder = ["68,93", "69,83", "71,09", "71,5"];
        const isCorrect = JSON.stringify(window.lesson155_state.zone) === JSON.stringify(correctOrder);

        if (window.Quiz?.playSFX) window.Quiz.playSFX(isCorrect ? 'success' : 'wrong');
        const rightAnswer = "68,93 < 69,83 < 71,09 < 71,5";
        const guidance = "Em hãy so sánh phần nguyên trước: 68 < 69 < 71. Sau đó so sánh phần thập phân của các số có cùng phần nguyên nhé!";
        const solution = `<div class='space-y-4'>
            <p class='text-emerald-600 font-bold'>🚀 Em sắp xếp số thập phân rất chuẩn!</p>
            <div class='bg-white p-6 rounded-[2rem] shadow-inner border border-blue-50 space-y-2'>
                <p>Thứ tự từ bé đến lớn:</p>
                <p><b>68,93 m²</b> < <b>69,83 m²</b> < <b>71,09 m²</b> < <b>71,5 m²</b></p>
            </div>
        </div>`;
        window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
        if (window.submitMathLesson) window.submitMathLesson("Bài 4", isCorrect ? 100 : 0, "btn-check-155-4", 0, 1, isCorrect ? 1 : 0);
    } catch (e) { console.error(e); }
};

window.reset155_4 = () => window.initSort155();

window.check_155_5 = () => {
    try {
        const aVal = document.getElementById('155-5-a')?.value.trim();
        const bVal = document.getElementById('155-5-b')?.value.trim().replace(',', '.');
        let score = 0;

        // a) 150%
        if (aVal === '150') score++;

        // b) 60% = 3/5 = 0.6
        if (bVal === '3/5' || bVal === '0.6') score++;

        const isCorrect = score === 2;
        if (window.Quiz?.playSFX) window.Quiz.playSFX(isCorrect ? 'success' : 'wrong');
        const rightAnswer = "a) 150%; b) 3/5 hoặc 0,6";
        const guidance = "Em hãy nhớ: <br>- Gấp rưỡi nghĩa là gấp 1,5 lần (hay 150%). <br>- 60% có thể viết thành 60/100 (rút gọn thành 3/5) hoặc số thập phân 0,6 nhé!";
        const solution = `<div class='space-y-4'>
            <p class='text-emerald-600 font-bold'>💡 Tư duy rất linh hoạt! Em đã chuyển đổi tỉ số phần trăm rất tốt.</p>
            <div class='bg-white p-6 rounded-[2rem] shadow-inner border border-blue-50 space-y-2'>
                <p>a) Một số gấp rưỡi số kia thì số đó bằng <b>150%</b> số kia.</p>
                <p>b) 60% = 60/100 = <b>3/5</b> hay <b>0,6</b>.</p>
            </div>
        </div>`;
        window.showMathFeedback(isCorrect, rightAnswer, "", guidance, solution);
        if (window.submitMathLesson) window.submitMathLesson("Bài 5", Math.round((score / 2) * 100), "btn-check-155-5", 0, 2, score);
    } catch (e) { console.error(e); }
};

window.reset155_5 = () => {
    ['5-a', '5-b'].forEach(id => {
        const el = document.getElementById('155-' + id);
        if (el) el.value = '';
    });
};

// Initialize sorting for Bài 4
// Logic will be triggered from the practice HTML script tag

export const lesson155 = {
    metadata: metadata,
    content: lesson155_content,
    practice: lesson155_practice,
    quizPool: metadata.quizPool
};

