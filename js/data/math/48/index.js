const metadata = {
    "lessonInfo": {
        "period": "48",
        "week": "10",
        "topic": "Số thập phân",
        "title": "BÀI 22: PHÉP CHIA SỐ THẬP PHÂN (TIẾT 2)",
        "desc": "Học sinh học cách chia một số tự nhiên cho một số tự nhiên mà thương tìm được là một số thập phân."
    },
    "bai_tap": [
        {
            "id": "48_1",
            "type": "fill_multiple",
            "title": "Bài 1: Đặt tính rồi tính",
            "answers": [],
            "guidance": "Khi chia một số tự nhiên cho một số tự nhiên mà còn dư, ta viết dấu phẩy vào bên phải thương, thêm chữ số 0 vào bên phải số dư rồi tiếp tục chia.",
            "solution": "a) 23 : 4 = 5,75<br>b) 15 : 8 = 1,875<br>c) 882 : 36 = 24,5"
        },
        {
            "id": "48_2",
            "type": "fill_multiple",
            "title": "Bài 2: Chọn số thập phân là thương ứng với mỗi phép chia",
            "answers": [],
            "guidance": "Nối các phép chia với thương số chính xác: 2 : 5 = 0,4; 3 : 4 = 0,75; 18 : 5 = 3,6 bằng cách chạm trực tiếp trên hình.",
            "solution": "• 2 : 5 = 0,4<br>• 3 : 4 = 0,75<br>• 18 : 5 = 3,6"
        },
        {
            "id": "48_3",
            "type": "fill_multiple",
            "title": "Bài 3: Bài toán vận tốc tàu vũ trụ",
            "answers": ["51.5"],
            "guidance": "Để tính quãng đường đi được trong mỗi giây (trung bình), ta lấy tổng quãng đường (103 km) chia cho thời gian đi (2 giây).",
            "solution": "Trung bình mỗi giây con tàu vũ trụ đó đi được số ki-lô-mét là:<br>  103 : 2 = 51,5 (km)<br>Đáp số: 51,5 km."
        }
    ],
    "quizPool": [
        { "question": "Kết quả của phép tính 8 : 5 là:", "options": ["1,6", "0,16", "16", "0,6"], "answer": 0 },
        { "question": "Kết quả của phép tính 3 : 5 là:", "options": ["0,6", "6", "0,06", "1,6"], "answer": 0 },
        { "question": "Kết quả của phép tính 1 : 4 là:", "options": ["0,25", "2,5", "0,025", "0,4"], "answer": 0 },
        { "question": "Kết quả của phép tính 15 : 6 là:", "options": ["2,5", "0,25", "25", "2,05"], "answer": 0 },
        { "question": "Kết quả của phép tính 9 : 4 là:", "options": ["2,25", "22,5", "0,225", "2,5"], "answer": 0 },
        { "question": "Kết quả của phép tính 27 : 5 là:", "options": ["5,4", "0,54", "54", "5,04"], "answer": 0 },
        { "question": "Kết quả của phép tính 12 : 8 là:", "options": ["1,5", "0,15", "15", "1,25"], "answer": 0 },
        { "question": "Kết quả của phép tính 3 : 8 là:", "options": ["0,375", "3,75", "37,5", "0,35"], "answer": 0 },
        { "question": "Kết quả của phép tính 7 : 2 là:", "options": ["3,5", "0,35", "35", "2,5"], "answer": 0 },
        { "question": "Kết quả của phép tính 18 : 4 là:", "options": ["4,5", "0,45", "45", "4,05"], "answer": 0 },
        { "question": "Kết quả của phép tính 24 : 15 là:", "options": ["1,6", "0,16", "16", "1,5"], "answer": 0 },
        { "question": "Kết quả của phép tính 15 : 25 là:", "options": ["0,6", "6", "0,06", "0,4"], "answer": 0 },
        { "question": "Kết quả của phép tính 11 : 4 là:", "options": ["2,75", "27,5", "0,275", "2,5"], "answer": 0 },
        { "question": "Kết quả của phép tính 12 : 5 là:", "options": ["2,4", "0,24", "24", "2,5"], "answer": 0 },
        { "question": "Kết quả của phép tính 14 : 8 là:", "options": ["1,75", "17,5", "0,175", "1,8"], "answer": 0 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson048 = {
    ...metadata.lessonInfo,
    "content": `
        <div class="theory-section space-y-6 animate-in fade-in slide-in-from-top-10 duration-1000 pt-6">
            <!-- Banner chính -->
            <div class="p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-700 to-blue-900 shadow-2xl relative overflow-hidden text-white">
                <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <div class="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full -ml-10 -mb-10 blur-2xl"></div>
                <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    <div class="w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-md rounded-[2rem] flex items-center justify-center shadow-inner border border-white/30 shrink-0 text-3xl md:text-5xl">
                        💡
                    </div>
                    <div class="text-center md:text-left">
                        <h2 class="text-2xl md:text-4xl font-black mb-2 tracking-tight">CHIA SỐ TỰ NHIÊN CHO SỐ TỰ NHIÊN THƯƠNG LÀ SỐ THẬP PHÂN</h2>
                        <p class="text-blue-100 text-lg md:text-2xl font-medium opacity-90">Chia số tự nhiên còn dư, viết thêm dấu phẩy và chữ số 0 để chia tiếp cực kỳ dễ dàng!</p>
                    </div>
                </div>
            </div>

            <!-- Khám phá ví dụ 1 -->
            <div class="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl space-y-6">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center text-xl md:text-3xl font-black shadow-inner">a</div>
                    <h3 class="text-xl md:text-2xl font-black text-blue-900">Ví dụ 1: 26 : 8 = ? (m)</h3>
                </div>
                
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div class="lg:col-span-6 space-y-4">
                        <img src="assets/images/toan/toan_tap_1/48/KP.png" class="w-full rounded-3xl shadow-md border-4 border-white" alt="Robot may quần áo">
                    </div>
                    <div class="lg:col-span-6 space-y-4 text-slate-700 text-lg md:text-xl leading-relaxed">
                        <p class="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 font-medium">
                            Để may 8 bộ quần áo như nhau, Rô-bốt cần 26 m vải. Hỏi trung bình mỗi bộ cần bao nhiêu mét vải?
                        </p>
                        
                        <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                            <p class="font-bold text-blue-800">Ta đặt tính rồi tính như sau:</p>
                            <div class="flex gap-6 items-center mt-3">
                                <!-- Đặt tính mẫu 26 : 8 -->
                                <div class="grid font-mono font-black text-xl bg-white p-4 rounded-xl border border-slate-200 shadow-inner" style="grid-template-columns: repeat(4, 30px) 4px repeat(4, 30px); gap: 2px;">
                                    <!-- Row 1: 26 | 8 -->
                                    <span>2</span><span>6</span><span></span><span></span>
                                    <span class="border-r-2 border-slate-800 h-full"></span>
                                    <span>8</span><span></span><span></span><span></span>

                                    <!-- Row 2: 20   | 3,25 -->
                                    <span>2</span><span>0</span><span></span><span></span>
                                    <span class="border-r-2 border-slate-800 h-full border-t-2 border-t-slate-800"></span>
                                    <span class="border-t-2 border-t-slate-800">3</span><span class="border-t-2 border-t-slate-800 text-slate-400">,</span><span class="border-t-2 border-t-slate-800">2</span><span class="border-t-2 border-t-slate-800">5</span>

                                    <!-- Row 3: 4 0  | -->
                                    <span></span><span>4</span><span>0</span><span></span>
                                    <span class="border-r-2 border-slate-800 h-full"></span>
                                    <span></span><span></span><span></span><span></span>

                                    <!-- Row 4: 0    | -->
                                    <span></span><span></span><span>0</span><span></span>
                                    <span class="border-r-2 border-slate-800 h-full"></span>
                                    <span></span><span></span><span></span><span></span>
                                </div>
                                <div class="text-sm space-y-1 font-medium">
                                    <p>• 26 chia 8 được 3, viết 3; 3 nhân 8 bằng 24; 26 trừ 24 bằng 2.</p>
                                    <p>• Viết dấu phẩy vào bên phải 3.</p>
                                    <p>• Viết thêm chữ số 0 vào bên phải 2 được 20; 20 chia 8 được 2, viết 2.</p>
                                    <p>• 2 nhân 8 bằng 16; 20 trừ 16 bằng 4.</p>
                                    <p>• Viết thêm chữ số 0 vào bên phải 4 được 40; 40 chia 8 được 5, viết 5.</p>
                                    <p>• 5 nhân 8 bằng 40; 40 trừ 40 bằng 0.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Khám phá ví dụ 2 -->
            <div class="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl space-y-6">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center text-xl md:text-3xl font-black shadow-inner">b</div>
                    <h3 class="text-xl md:text-2xl font-black text-blue-900">Ví dụ 2: 6 : 25 = ?</h3>
                </div>
                
                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <div class="flex flex-col md:flex-row gap-8 items-center">
                        <div class="grid font-mono font-black text-xl bg-white p-4 rounded-xl border border-slate-200 shadow-inner" style="grid-template-columns: repeat(5, 30px) 4px repeat(4, 30px); gap: 2px;">
                            <!-- Row 1: 6,0 | 25 -->
                            <span>6</span><span class="text-slate-400">,</span><span>0</span><span></span><span></span>
                            <span class="border-r-2 border-slate-800 h-full"></span>
                            <span>2</span><span>5</span><span></span><span></span>

                            <!-- Row 2: 1 00  | 0,24 -->
                            <span>1</span><span>0</span><span>0</span><span></span><span></span>
                            <span class="border-r-2 border-slate-800 h-full border-t-2 border-t-slate-800"></span>
                            <span class="border-t-2 border-t-slate-800">0</span><span class="border-t-2 border-t-slate-800 text-slate-400">,</span><span class="border-t-2 border-t-slate-800">2</span><span class="border-t-2 border-t-slate-800">4</span>

                            <!-- Row 3: 0     | -->
                            <span></span><span>0</span><span></span><span></span><span></span>
                            <span class="border-r-2 border-slate-800 h-full"></span>
                            <span></span><span></span><span></span><span></span>
                        </div>
                        <div class="text-slate-700 text-lg md:text-xl space-y-2">
                            <p><strong>Cách thực hiện khi Số bị chia nhỏ hơn Số chia:</strong></p>
                            <p>• Chuyển 6 thành 6,0.</p>
                            <p>• Đặt tính rồi tính như phép chia 6,0 : 25.</p>
                            <p>• 6 chia 25 được 0, viết 0; viết dấu phẩy vào bên phải 0.</p>
                            <p>• Hạ 0 phần mười để có 60; 60 chia 25 được 2, viết 2; 2 nhân 25 bằng 50; 60 trừ 50 bằng 10.</p>
                            <p>• Viết thêm 0 để được 100; 100 chia 25 được 4, viết 4; 100 trừ 100 bằng 0.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Ghi nhớ -->
            <div class="p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-700 to-blue-900 text-white shadow-2xl">
                <h4 class="text-xl md:text-2xl font-black mb-4 flex items-center gap-3">
                    📖 Quy tắc ghi nhớ
                </h4>
                <div class="p-6 bg-white/10 rounded-2xl border border-white/20 text-lg md:text-xl leading-relaxed space-y-3 font-semibold">
                    <p>Khi chia một số tự nhiên cho một số tự nhiên mà còn dư, ta tiếp tục chia như sau:</p>
                    <p>⭐ Viết dấu phẩy vào bên phải thương.</p>
                    <p>⭐ Viết thêm vào bên phải số dư một chữ số 0 rồi chia tiếp.</p>
                    <p>⭐ Nếu còn dư nữa, ta lại viết thêm vào bên phải số dư một chữ số 0 rồi tiếp tục chia và có thể cứ làm như thế mãi.</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12 text-xl md:text-3xl text-left relative">
            <!-- THANH ĐIỀU HƯỚNG TAB PHỤ (EXERCISE SUB-TABS) -->
            <div class="flex items-center justify-between px-8 md:px-12 py-4 bg-slate-50 border-b border-slate-200">
                <div class="flex items-center gap-2">
                    <span class="text-lg md:text-2xl font-black text-slate-700">Danh sách bài tập:</span>
                </div>
                <div class="flex gap-2">
                    <button id="tab-btn-48-1" onclick="window.switchTab_48(1)" class="px-5 py-2.5 rounded-full font-black text-xs md:text-base transition-all bg-blue-600 text-white shadow">Bài 1</button>
                    <button id="tab-btn-48-2" onclick="window.switchTab_48(2)" class="px-5 py-2.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50">Bài 2</button>
                    <button id="tab-btn-48-3" onclick="window.switchTab_48(3)" class="px-5 py-2.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50">Bài 3</button>
                </div>
            </div>

            <!-- NỘI DUNG TỪNG TAB BÀI TẬP -->
            <div class="p-6 md:p-8 bg-white rounded-[2.5rem]">

                <!-- TAB 1: BÀI 1 -->
                <div id="tab-content-48-1" class="space-y-6 animate-in fade-in duration-300">
                    <div class="glass-card p-6 md:p-8 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
                        <div>
                            <div class="flex items-center justify-between mb-6 flex-wrap gap-4">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">1</div>
                                    <h3 class="text-xl md:text-3xl font-black text-blue-900 uppercase">Đặt tính rồi tính</h3>
                                </div>
                                <!-- Nút Subtabs -->
                                <div class="flex items-center gap-2 bg-blue-50 p-1.5 rounded-full border border-blue-100">
                                    <button type="button" id="subtab-btn-48-1-a" onclick="window.switchSubtab_48_1('a')" class="px-5 py-1.5 rounded-full font-black text-xs md:text-base transition-all bg-blue-600 text-white shadow">a</button>
                                    <button type="button" id="subtab-btn-48-1-b" onclick="window.switchSubtab_48_1('b')" class="px-5 py-1.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50">b</button>
                                    <button type="button" id="subtab-btn-48-1-c" onclick="window.switchSubtab_48_1('c')" class="px-5 py-1.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50">c</button>
                                </div>
                                <button onclick="window.toggleSolution('sol-48-1')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                            </div>

                            <!-- SUB-TAB CONTENT A: 23 : 4 -->
                            <div id="subtab-content-48-1-a" class="animate-in fade-in duration-300 flex flex-col items-center">
                                    <div class="w-full w-full bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center shadow-sm">
                                        <div class="flex justify-between items-center mb-6 w-full">
                                            <h4 class="text-lg md:text-2xl font-black text-blue-700">a) 23 : 4</h4>
                                        </div>
                                        <div class="flex flex-col items-center justify-center font-mono py-8 bg-white border border-slate-100 rounded-2xl w-full shadow-inner mb-2">
                                            <div class="grid gap-x-1 gap-y-2 items-center justify-items-center" style="grid-template-columns: 40px 40px 40px 40px 24px 40px 16px 40px 40px;">
                                                <!-- Row 1 -->
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">2</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">3</span>
                                                <span class="w-10 h-10"></span>
                                                <span class="w-10 h-10"></span>
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800">4</span>
                                                <span class="w-4 h-10"></span>
                                                <span class="w-10 h-10"></span>
                                                <span class="w-10 h-10"></span>

                                                <!-- Row 2 -->
                                                <span></span>
                                                <input type="text" id="ans-48-1-a-r2c2" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-48-1-a-r2c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span></span>
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <input type="text" id="ans-48-1-a-r2c6" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-48-1-a-r2c7" class="w-4 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-48-1-a-r2c8" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-48-1-a-r2c9" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">

                                                <!-- Row 3 -->
                                                <span></span>
                                                <span></span>
                                                <input type="text" id="ans-48-1-a-r3c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-48-1-a-r3c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>

                                                <!-- Row 4 -->
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <input type="text" id="ans-48-1-a-r4c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                            <!-- SUB-TAB CONTENT B: 15 : 8 -->
                            <div id="subtab-content-48-1-b" class="hidden animate-in fade-in duration-300 flex flex-col items-center">
                                    <div class="w-full w-full bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center shadow-sm">
                                        <div class="flex justify-between items-center mb-6 w-full">
                                            <h4 class="text-lg md:text-2xl font-black text-blue-700">b) 15 : 8</h4>
                                        </div>
                                        <div class="flex flex-col items-center justify-center font-mono py-8 bg-white border border-slate-100 rounded-2xl w-full shadow-inner mb-2">
                                            <div class="grid gap-x-1 gap-y-2 items-center justify-items-center" style="grid-template-columns: 40px 40px 40px 40px 40px 24px 40px 16px 40px 40px 40px;">
                                                <!-- Row 1 -->
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">1</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">5</span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800">8</span>
                                                <span class="w-4 h-10"></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>

                                                <!-- Row 2 -->
                                                <span></span>
                                                <input type="text" id="ans-48-1-b-r2c2" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-48-1-b-r2c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span></span>
                                                <span></span>
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <input type="text" id="ans-48-1-b-r2c7" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-48-1-b-r2c8" class="w-4 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-48-1-b-r2c9" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-48-1-b-r2c10" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-48-1-b-r2c11" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">

                                                <!-- Row 3 -->
                                                <span></span>
                                                <span></span>
                                                <input type="text" id="ans-48-1-b-r3c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-48-1-b-r3c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span></span>
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>

                                                <!-- Row 4 -->
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <input type="text" id="ans-48-1-b-r4c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-48-1-b-r4c5" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>

                                                <!-- Row 5 -->
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <input type="text" id="ans-48-1-b-r5c5" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                            <!-- SUB-TAB CONTENT C: 882 : 36 -->
                            <div id="subtab-content-48-1-c" class="hidden animate-in fade-in duration-300 flex flex-col items-center">
                                    <div class="w-full w-full bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center shadow-sm">
                                        <div class="flex justify-between items-center mb-6 w-full">
                                            <h4 class="text-lg md:text-2xl font-black text-blue-700">c) 882 : 36</h4>
                                        </div>
                                        <div class="flex flex-col items-center justify-center font-mono py-8 bg-white border border-slate-100 rounded-2xl w-full shadow-inner mb-2">
                                            <div class="grid gap-x-1 gap-y-2 items-center justify-items-center" style="grid-template-columns: 40px 40px 40px 40px 40px 24px 40px 40px 16px 40px;">
                                                <!-- Row 1 -->
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">8</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">8</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">2</span>
                                                <span></span>
                                                <span></span>
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800">3</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800">6</span>
                                                <span class="w-4 h-10"></span>
                                                <span></span>

                                                <!-- Row 2 -->
                                                <span></span>
                                                <input type="text" id="ans-48-1-c-r2c2" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-48-1-c-r2c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-48-1-c-r2c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span></span>
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <input type="text" id="ans-48-1-c-r2c7" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-48-1-c-r2c8" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-48-1-c-r2c9" class="w-4 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-48-1-c-r2c10" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">

                                                <!-- Row 3 -->
                                                <span></span>
                                                <span></span>
                                                <input type="text" id="ans-48-1-c-r3c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-48-1-c-r3c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-48-1-c-r3c5" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>

                                                <!-- Row 4 -->
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <input type="text" id="ans-48-1-c-r4c5" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div id="sol-48-1" class="hidden mt-6 p-6 bg-sky-50 rounded-2xl border border-sky-200 text-lg md:text-2xl font-medium text-slate-700 w-full mx-auto">
                            <p class="font-bold text-blue-800 mb-3 text-center">✍️ Đáp án chi tiết đặt tính:</p>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center font-black">
                                    
                                    <!-- Phép tính a -->
                                    <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                        <p class="text-sm text-blue-600 mb-4 font-bold">Phép tính a</p>
                                        <div class="flex flex-col items-center font-mono py-2 w-full">
                                            <div class="grid gap-x-0 gap-y-1 items-center justify-items-center text-xl md:text-2xl font-black" style="grid-template-columns: 28px 28px 28px 28px 16px 28px 12px 28px 28px;">
                                                <span>2</span><span>3</span><span></span><span></span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">4</span>
                                                <span class="w-full"></span>
                                                <span class="w-full"></span>
                                                <span class="w-full"></span>
                                                
                                                <span></span><span>3</span><span>0</span><span></span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span>5</span><span>,</span><span>7</span><span>5</span>
                                                
                                                <span></span><span></span><span>2</span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span><span></span>
                                                
                                                <span></span><span></span><span></span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span><span></span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Phép tính b -->
                                    <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                        <p class="text-sm text-blue-600 mb-4 font-bold">Phép tính b</p>
                                        <div class="flex flex-col items-center font-mono py-2 w-full">
                                            <div class="grid gap-x-0 gap-y-1 items-center justify-items-center text-xl md:text-2xl font-black" style="grid-template-columns: 28px 28px 28px 28px 28px 16px 28px 12px 28px 28px 28px;">
                                                <span>1</span><span>5</span><span></span><span></span><span></span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">8</span>
                                                <span class="w-full"></span>
                                                <span class="w-full"></span>
                                                <span class="w-full"></span>
                                                <span class="w-full"></span>
                                                
                                                <span></span><span>7</span><span>0</span><span></span><span></span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span>1</span><span>,</span><span>8</span><span>7</span><span>5</span>
                                                
                                                <span></span><span></span><span>6</span><span>0</span><span></span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span><span></span><span></span>
                                                
                                                <span></span><span></span><span></span><span>4</span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span><span></span><span></span>
                                                
                                                <span></span><span></span><span></span><span></span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span><span></span><span></span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Phép tính c -->
                                    <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                        <p class="text-sm text-blue-600 mb-4 font-bold">Phép tính c</p>
                                        <div class="flex flex-col items-center font-mono py-2 w-full">
                                            <div class="grid gap-x-0 gap-y-1 items-center justify-items-center text-xl md:text-2xl font-black" style="grid-template-columns: 28px 28px 28px 28px 28px 16px 28px 28px 12px 28px;">
                                                <span>8</span><span>8</span><span>2</span><span></span><span></span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">3</span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">6</span>
                                                <span class="w-full"></span>
                                                <span class="w-full"></span>
                                                
                                                <span></span><span>1</span><span>6</span><span>2</span><span></span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span>2</span><span>4</span><span>,</span><span>5</span>
                                                
                                                <span></span><span></span><span>1</span><span>8</span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span><span></span>
                                                
                                                <span></span><span></span><span></span><span></span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span><span></span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div class="flex justify-end mt-6">
                            <button id="btn-check-48-1" onclick="window.check_48_1()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                        </div>
                    </div>
                </div>

                <!-- TAB 2: BÀI 2 -->
                <div id="tab-content-48-2" class="space-y-6 hidden animate-in fade-in duration-300">
                    <div class="glass-card p-6 md:p-8 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
                        <div>
                            <div class="flex items-center justify-between mb-4 flex-wrap gap-4">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">2</div>
                                    <h3 class="text-xl md:text-3xl font-black text-blue-900 uppercase">Chọn số thập phân là thương ứng với mỗi phép chia</h3>
                                </div>
                                <div class="flex gap-2">
                                    <button onclick="window.reset_48_2()" class="bg-slate-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-slate-600 active:scale-95 transition-all shadow-md">Nối lại</button>
                                    <button onclick="window.toggleSolution('sol-48-2')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                                </div>
                            </div>

                            <div class="flex justify-center">
                                <div id="match-container-48" class="relative inline-block w-full max-w-[800px] select-none aspect-[800/600]">
                                    <img src="assets/images/toan/toan_tap_1/48/2.png" class="w-full h-auto block rounded-2xl border border-slate-100" alt="Các con rái cá và cúp">
                                    <svg id="svg-lines-48" class="absolute inset-0 w-full h-full pointer-events-none z-10" style="overflow:visible;"></svg>
                                    
                                    <!-- Rái cá bên trái -->
                                    <button id="left-2_5" onclick="window.selectLeft48('2_5')" class="item-left-48 absolute cursor-pointer rounded-2xl border-2 border-transparent hover:border-blue-500 hover:bg-blue-500/10 transition-all z-20" style="left: 2.2%; width: 32.2%; top: 8%; height: 35.5%; outline: none;"></button>
                                    <button id="left-3_4" onclick="window.selectLeft48('3_4')" class="item-left-48 absolute cursor-pointer rounded-2xl border-2 border-transparent hover:border-blue-500 hover:bg-blue-500/10 transition-all z-20" style="left: 2.2%; width: 30.5%; top: 46%; height: 16%; outline: none;"></button>
                                    <button id="left-18_5" onclick="window.selectLeft48('18_5')" class="item-left-48 absolute cursor-pointer rounded-2xl border-2 border-transparent hover:border-blue-500 hover:bg-blue-500/10 transition-all z-20" style="left: 2.2%; width: 32.2%; top: 61.5%; height: 27.5%; outline: none;"></button>
                                    
                                    <!-- Cúp bên phải -->
                                    <button id="right-0_75" onclick="window.selectRight48('0_75')" class="item-right-48 absolute cursor-pointer rounded-2xl border-2 border-transparent hover:border-orange-500 hover:bg-orange-500/10 transition-all z-20" style="left: 69%; width: 29.5%; top: 3.5%; height: 28.5%; outline: none;"></button>
                                    <button id="right-3_6" onclick="window.selectRight48('3_6')" class="item-right-48 absolute cursor-pointer rounded-2xl border-2 border-transparent hover:border-orange-500 hover:bg-orange-500/10 transition-all z-20" style="left: 69%; width: 29.5%; top: 34.5%; height: 29.5%; outline: none;"></button>
                                    <button id="right-0_4" onclick="window.selectRight48('0_4')" class="item-right-48 absolute cursor-pointer rounded-2xl border-2 border-transparent hover:border-orange-500 hover:bg-orange-500/10 transition-all z-20" style="left: 69%; width: 29.5%; top: 66.5%; height: 29.5%; outline: none;"></button>
                                </div>
                            </div>
                        </div>

                        <div id="sol-48-2" class="hidden mt-6 p-6 bg-sky-50 rounded-2xl border border-sky-200 text-lg md:text-2xl font-medium text-slate-700 w-full mx-auto text-center space-y-2">
                            <p class="font-bold text-blue-800 mb-2">🏆 Đáp án chi tiết bài chọn thương:</p>
                            <p>• Rái cá cầm bảng <strong>2 : 5</strong> tương ứng với cúp <strong>0,4</strong> (2 : 5 = 0,4)</p>
                            <p>• Rái cá cầm bảng <strong>3 : 4</strong> tương ứng với cúp <strong>0,75</strong> (3 : 4 = 0,75)</p>
                            <p>• Rái cá cầm bảng <strong>18 : 5</strong> tương ứng với cúp <strong>3,6</strong> (18 : 5 = 3,6)</p>
                        </div>

                        <div class="flex justify-end mt-4">
                            <button id="btn-check-48-2" onclick="window.check_48_2()" class="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                        </div>
                    </div>
                </div>

                <!-- TAB 3: BÀI 3 -->
                <div id="tab-content-48-3" class="space-y-6 hidden animate-in fade-in duration-300">
                    <div class="glass-card p-6 md:p-8 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">3</div>
                                    <h3 class="text-xl md:text-3xl font-black text-blue-900 uppercase">Giải bài toán</h3>
                                </div>
                                <button onclick="window.toggleSolution('sol-48-3')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                            </div>

                            <div class="bg-blue-50/50 p-6 rounded-3xl border border-blue-100/80 mb-6 text-slate-700 text-lg md:text-2xl font-medium leading-relaxed">
                                Một con tàu vũ trụ trong 2 giây đi được 103 km. Hỏi trung bình mỗi giây con tàu vũ trụ đó đi được bao nhiêu ki-lô-mét?
                            </div>

                            <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 w-full mx-auto space-y-4">
                                <h4 class="text-blue-800 font-black text-lg md:text-xl">✍️ Điền kết quả bài giải:</h4>
                                <div class="space-y-3 text-slate-700 text-lg md:text-xl font-bold">
                                    <p>Mỗi giây con tàu vũ trụ đi được số ki-lô-mét là:</p>
                                    <div class="flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>103 : 2 =</span>
                                        <input type="text" id="ans-48-3-result" class="w-36 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-white md:text-2xl" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 46px !important;" placeholder="?">
                                        <span>(km)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="sol-48-3" class="hidden mt-6 p-6 bg-sky-50 rounded-2xl border border-sky-200 text-lg md:text-2xl font-medium text-slate-700 w-full mx-auto">
                            <p class="font-bold text-blue-800 mb-2">📝 Lời giải chi tiết:</p>
                            <p class="mb-2">Trung bình mỗi giây con tàu vũ trụ đó đi được số ki-lô-mét là:</p>
                            <p class="font-black text-blue-900 ml-4 mb-2">103 : 2 = 51,5 (km)</p>
                            <p class="text-right font-black">Đáp số: 51,5 km.</p>
                        </div>

                        <div class="flex justify-end mt-4">
                            <button id="btn-check-48-3" onclick="window.check_48_3()" class="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `,
    "quizPool": metadata.quizPool
};

// CÁC BIẾN LƯU TRẠNG THÁI NỐI CHO BÀI 2
window._matches48 = {};
window._leftSelected48 = null;

// Hàm chọn phần tử bên trái
window.selectLeft48 = function(leftVal) {
    if (window._matches48[leftVal]) return;

    document.querySelectorAll('.item-left-48').forEach(el => {
        if (!el.classList.contains('pointer-events-none')) {
            el.className = "item-left-48 absolute cursor-pointer rounded-2xl border-2 border-transparent hover:border-blue-500 hover:bg-blue-500/10 transition-all z-20";
        }
    });

    window._leftSelected48 = leftVal;
    const el = document.getElementById('left-' + leftVal);
    if (el) {
        el.className = "item-left-48 absolute cursor-pointer rounded-2xl border-2 border-blue-600 bg-blue-500/20 transition-all z-20";
    }
};

// Hàm chọn phần tử bên phải và tiến hành nối
window.selectRight48 = function(rightVal) {
    if (!window._leftSelected48) return;
    const alreadyMatched = Object.values(window._matches48).includes(rightVal);
    if (alreadyMatched) return;

    const leftVal = window._leftSelected48;
    window._matches48[leftVal] = rightVal;

    const leftEl = document.getElementById('left-' + leftVal);
    const rightEl = document.getElementById('right-' + rightVal);

    if (leftEl) {
        leftEl.className = "item-left-48 absolute cursor-pointer rounded-2xl border-2 border-green-600 bg-green-500/15 pointer-events-none transition-all z-20";
    }
    if (rightEl) {
        rightEl.className = "item-right-48 absolute cursor-pointer rounded-2xl border-2 border-green-600 bg-green-500/15 pointer-events-none transition-all z-20";
    }

    window.drawPencilLine48(leftVal, rightVal);
    window._leftSelected48 = null;
};

// Hàm vẽ nét nối SVG
window.drawPencilLine48 = function(leftVal, rightVal) {
    const container = document.getElementById('match-container-48');
    const svg = document.getElementById('svg-lines-48');
    const leftEl = document.getElementById('left-' + leftVal);
    const rightEl = document.getElementById('right-' + rightVal);
    if (!container || !svg || !leftEl || !rightEl) return;

    const containerRect = container.getBoundingClientRect();
    const leftRect = leftEl.getBoundingClientRect();
    const rightRect = rightEl.getBoundingClientRect();

    const x1 = leftRect.right - containerRect.left;
    const y1 = leftRect.top + leftRect.height / 2 - containerRect.top;
    const x2 = rightRect.left - containerRect.left;
    const y2 = rightRect.top + rightRect.height / 2 - containerRect.top;

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', '#16a34a'); // Màu xanh lá premium cho dòng nối đã chọn
    line.setAttribute('stroke-width', '4');
    line.setAttribute('stroke-linecap', 'round');
    
    // Thêm hiệu ứng vẽ từ từ
    const length = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
    line.setAttribute('stroke-dasharray', length);
    line.setAttribute('stroke-dashoffset', length);
    
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'stroke-dashoffset');
    animate.setAttribute('from', length);
    animate.setAttribute('to', '0');
    animate.setAttribute('dur', '0.3s');
    animate.setAttribute('fill', 'freeze');
    
    line.appendChild(animate);
    svg.appendChild(line);
};

// Hàm nối lại từ đầu
window.reset_48_2 = function() {
    window._leftSelected48 = null;
    window._matches48 = {};
    
    const svg = document.getElementById('svg-lines-48');
    if (svg) svg.innerHTML = '';

    document.querySelectorAll('.item-left-48').forEach(el => {
        el.className = "item-left-48 absolute cursor-pointer rounded-2xl border-2 border-transparent hover:border-blue-500 hover:bg-blue-500/10 transition-all z-20";
    });

    document.querySelectorAll('.item-right-48').forEach(el => {
        el.className = "item-right-48 absolute cursor-pointer rounded-2xl border-2 border-transparent hover:border-orange-500 hover:bg-orange-500/10 transition-all z-20";
    });
};

// ĐĂNG KÝ SỰ KIỆN CO GIÃN ĐỂ VẼ LẠI CÁC ĐƯỜNG NỐI KHI THAY ĐỔI KÍCH THƯỚC TRÌNH DUYỆT
window.addEventListener('resize', () => {
    const svg = document.getElementById('svg-lines-48');
    if (svg && Object.keys(window._matches48).length > 0) {
        svg.innerHTML = '';
        Object.entries(window._matches48).forEach(([left, right]) => {
            window.drawPencilLine48(left, right);
        });
    }
});

// ĐĂNG KÝ HÀM CHUYỂN TAB VÀ SUBTAB CHO TIẾT 48
window.switchTab_48 = function(tabIndex) {
    for (let i = 1; i <= 3; i++) {
        let content = document.getElementById('tab-content-48-' + i);
        if (content) content.classList.add('hidden');
        let btn = document.getElementById('tab-btn-48-' + i);
        if (btn) btn.className = "px-5 py-2.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50";
    }

    let activeContent = document.getElementById('tab-content-48-' + tabIndex);
    if (activeContent) activeContent.classList.remove('hidden');
    let activeBtn = document.getElementById('tab-btn-48-' + tabIndex);
    if (activeBtn) activeBtn.className = "px-5 py-2.5 rounded-full font-black text-xs md:text-base transition-all bg-blue-600 text-white shadow";
};

// HÀM CHUYỂN SUBTAB BÀI 1
window.switchSubtab_48_1 = function(subtab) {
    ['a', 'b', 'c'].forEach(t => {
        let content = document.getElementById('subtab-content-48-1-' + t);
        if (content) content.classList.add('hidden');
        let btn = document.getElementById('subtab-btn-48-1-' + t);
        if (btn) btn.className = "px-5 py-1.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50";
    });

    let activeContent = document.getElementById('subtab-content-48-1-' + subtab);
    if (activeContent) activeContent.classList.remove('hidden');
    let activeBtn = document.getElementById('subtab-btn-48-1-' + subtab);
    if (activeBtn) activeBtn.className = "px-5 py-1.5 rounded-full font-black text-xs md:text-base transition-all bg-blue-600 text-white shadow";
};

// CÁC HÀM KIỂM TRA ĐÁP ÁN BÀI 1, 2, 3
window.check_48_1 = function() {
    function getVal(id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : '';
    }
    function isCommaVal(val) {
        return val === ',' || val === '.';
    }

    // a) 23 : 4 = 5,75
    var r2_a = getVal('ans-48-1-a-r2c2') === '3' && getVal('ans-48-1-a-r2c3') === '0' && getVal('ans-48-1-a-r2c6') === '5' && isCommaVal(getVal('ans-48-1-a-r2c7')) && getVal('ans-48-1-a-r2c8') === '7' && getVal('ans-48-1-a-r2c9') === '5';
    var r3_a = getVal('ans-48-1-a-r3c3') === '2' && getVal('ans-48-1-a-r3c4') === '0';
    var r4_a = getVal('ans-48-1-a-r4c4') === '0';
    var aCorrect = r2_a && r3_a && r4_a;

    // b) 15 : 8 = 1,875
    var r2_b = getVal('ans-48-1-b-r2c2') === '7' && getVal('ans-48-1-b-r2c3') === '0' && getVal('ans-48-1-b-r2c7') === '1' && isCommaVal(getVal('ans-48-1-b-r2c8')) && getVal('ans-48-1-b-r2c9') === '8' && getVal('ans-48-1-b-r2c10') === '7' && getVal('ans-48-1-b-r2c11') === '5';
    var r3_b = getVal('ans-48-1-b-r3c3') === '6' && getVal('ans-48-1-b-r3c4') === '0';
    var r4_b = getVal('ans-48-1-b-r4c4') === '4' && getVal('ans-48-1-b-r4c5') === '0';
    var r5_b = getVal('ans-48-1-b-r5c5') === '0';
    var bCorrect = r2_b && r3_b && r4_b && r5_b;

    // c) 882 : 36 = 24,5
    var r2_c = getVal('ans-48-1-c-r2c2') === '1' && getVal('ans-48-1-c-r2c3') === '6' && getVal('ans-48-1-c-r2c4') === '2' && getVal('ans-48-1-c-r2c7') === '2' && getVal('ans-48-1-c-r2c8') === '4' && isCommaVal(getVal('ans-48-1-c-r2c9')) && getVal('ans-48-1-c-r2c10') === '5';
    var r3_c = getVal('ans-48-1-c-r3c3') === '1' && getVal('ans-48-1-c-r3c4') === '8' && getVal('ans-48-1-c-r3c5') === '0';
    var r4_c = getVal('ans-48-1-c-r4c5') === '0';
    var cCorrect = r2_c && r3_c && r4_c;

    var isCorrect = aCorrect && bCorrect && cCorrect;
    var rightAns = "a) 23 : 4 = 5,75\nb) 15 : 8 = 1,875\nc) 882 : 36 = 24,5";
    var studentAns = isCorrect ? "Đúng hoàn toàn" : "Chưa đúng hoàn toàn";

    var meta = window.MATH_BUILDER_METADATA.bai_tap[0];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-48-1', 0, 3, (aCorrect?1:0) + (bCorrect?1:0) + (cCorrect?1:0));
    }
};

window.check_48_2 = function() {
    const m = window._matches48;
    const a1Correct = (m['2_5'] === '0_4');
    const a2Correct = (m['3_4'] === '0_75');
    const a3Correct = (m['18_5'] === '3_6');

    const totalSelected = Object.keys(m).length;
    const isCorrect = a1Correct && a2Correct && a3Correct && (totalSelected === 3);

    const rightAns = "2:5 -> 0,4; 3:4 -> 0,75; 18:5 -> 3,6";
    const studentAns = isCorrect ? "Đúng hoàn toàn" : "Chưa đúng hoàn toàn hoặc chưa nối đủ";

    var meta = window.MATH_BUILDER_METADATA.bai_tap[1];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-48-2', 0, 3, (a1Correct?1:0) + (a2Correct?1:0) + (a3Correct?1:0));
    }
};

window.check_48_3 = function() {
    var resultVal = document.getElementById('ans-48-3-result').value.trim().replace(/,/g, '.');
    var isCorrect = (resultVal === '51.5');

    var meta = window.MATH_BUILDER_METADATA.bai_tap[2];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, "51,5", resultVal, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-48-3', 0, 1, isCorrect ? 1 : 0);
    }
};

// AUTO-RESIZE INPUTS
function setupAutoResizeInputs() {
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        if (input.id.includes('ans-48-1-')) {
            // Đặt kích thước cố định tuyệt đối cho các ô đặt tính
            input.style.width = '40px';
            input.style.height = '40px';
            input.style.padding = '0px';
            input.style.fontSize = '1.25rem';
            input.style.lineHeight = '38px';
        }
    });
}

// Gọi setup khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
    setupAutoResizeInputs();
});
setTimeout(setupAutoResizeInputs, 500);

// Hàm toggle bài giải
window.toggleSolution = function(elementId) {
    const el = document.getElementById(elementId);
    if (el) {
        el.classList.toggle('hidden');
    }
};
