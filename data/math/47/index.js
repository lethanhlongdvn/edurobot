const metadata = {
    "lessonInfo": {
        "period": "47",
        "week": "10",
        "topic": "Số thập phân",
        "title": "BÀI 22: PHÉP CHIA SỐ THẬP PHÂN (TIẾT 1)",
        "desc": "Học sinh học cách thực hiện phép chia một số thập phân cho một số tự nhiên, đặt tính dọc và thực hiện tính toán qua các bài tập tương tác."
    },
    "bai_tap": [
        {
            "id": "47_1",
            "type": "fill_multiple",
            "title": "Bài 1: Đặt tính rồi tính",
            "answers": [],
            "guidance": "Muốn chia một số thập phân cho một số tự nhiên: Chia phần nguyên trước, viết dấu phẩy vào thương rồi hạ các chữ số phần thập phân xuống để tiếp tục chia.",
            "solution": "a) 0,36 : 9 = 0,04<br>b) 95,2 : 68 = 1,4<br>c) 5,28 : 4 = 1,32"
        },
        {
            "id": "47_2",
            "type": "fill_multiple",
            "title": "Bài 2: Tính nhẩm kết quả dựa vào phép tính mẫu",
            "answers": ["24.7", "2.47", "0.31"],
            "guidance": "Dựa vào phép tính mẫu 7657 : 31 = 247, hãy xác định vị trí dấu phẩy tương ứng ở thương dựa trên số chữ số ở phần thập phân của số bị chia.",
            "solution": "Từ 7 657 : 31 = 247:<br>a) 765,7 : 31 = 24,7 (thương dịch dấu phẩy sang trái 1 chữ số)<br>b) 76,57 : 31 = 2,47 (thương dịch dấu phẩy sang trái 2 chữ số)<br>c) 76,57 : 247 = 0,31 (vì 76,57 : 2,47 = 31)"
        },
        {
            "id": "47_3",
            "type": "fill_multiple",
            "title": "Bài 3: Bài toán Robot chia cá",
            "answers": ["1.21"],
            "guidance": "Lấy tổng khối lượng cá (9,68 yến) chia đều cho số lượng khay (8 khay) để tìm số cá trong mỗi khay.",
            "solution": "Mỗi khay đựng số yến cá là:<br>  9,68 : 8 = 1,21 (yến cá)<br>Đáp số: 1,21 yến cá."
        }
    ],
    "quizPool": [
        { "question": "Kết quả của phép tính 4,8 : 2 là:", "options": ["2,4", "24", "0,24", "0,024"], "answer": 0 },
        { "question": "Kết quả của phép tính 9,6 : 3 là:", "options": ["3,2", "32", "0,32", "0,032"], "answer": 0 },
        { "question": "Kết quả của phép tính 0,25 : 5 là:", "options": ["0,05", "0,5", "5", "0,005"], "answer": 0 },
        { "question": "Kết quả của phép tính 12,4 : 4 là:", "options": ["3,1", "31", "0,31", "0,031"], "answer": 0 },
        { "question": "Kết quả của phép tính 1,5 : 5 là:", "options": ["0,3", "3", "0,03", "0,003"], "answer": 0 },
        { "question": "Cho biết 156 : 12 = 13. Kết quả của 15,6 : 12 là:", "options": ["1,3", "13", "0,13", "130"], "answer": 0 },
        { "question": "Cho biết 288 : 24 = 12. Kết quả của 2,88 : 24 là:", "options": ["0,12", "1,2", "12", "0,012"], "answer": 0 },
        { "question": "Phép chia 8,4 : 4 có thương là:", "options": ["2,1", "21", "0,21", "2,01"], "answer": 0 },
        { "question": "Thương của 0,72 : 9 là:", "options": ["0,08", "0,8", "8", "0,008"], "answer": 0 },
        { "question": "Đặt tính chia 1,25 : 5. Thương tìm được là:", "options": ["0,25", "2,5", "25", "0,025"], "answer": 0 },
        { "question": "Robot chia đều 4,5 kg kẹo vào 9 túi. Mỗi túi có bao nhiêu ki-lô-gam kẹo?", "options": ["0,5 kg", "5 kg", "0,05 kg", "0,45 kg"], "answer": 0 },
        { "question": "Một sợi dây dài 6,4 m được cắt thành 4 đoạn bằng nhau. Mỗi đoạn dây dài:", "options": ["1,6 m", "16 m", "0,16 m", "0,64 m"], "answer": 0 },
        { "question": "Tìm x biết: x × 6 = 18,6", "options": ["x = 3,1", "x = 31", "x = 0,31", "x = 1,1"], "answer": 0 },
        { "question": "Tìm x biết: x × 8 = 9,6", "options": ["x = 1,2", "x = 12", "x = 0,12", "x = 2,1"], "answer": 0 },
        { "question": "Một ô tô đi được 72,8 km trong 2 giờ. Trung bình mỗi giờ ô tô đó đi được:", "options": ["36,4 km", "3,64 km", "364 km", "36 km"], "answer": 0 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson047 = {
    ...metadata.lessonInfo,
    "content": `
        <div class="theory-section space-y-6 animate-in fade-in slide-in-from-top-10 duration-1000 pt-6">
            <!-- Banner chính -->
            

            <!-- Hộp quy tắc -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="p-6 md:p-8 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm flex flex-col justify-between">
                    <div>
                        <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm">✓</span>
                            Quy tắc thực hiện
                        </h3>
                        <ul class="space-y-4 text-slate-600 font-medium text-base md:text-lg">
                            <li class="flex gap-2">
                                <span class="text-blue-600 font-black">1.</span>
                                <span>Chia phần nguyên của số bị chia cho số chia.</span>
                            </li>
                            <li class="flex gap-2">
                                <span class="text-blue-600 font-black">2.</span>
                                <span>Viết dấu phẩy vào bên phải thương vừa tìm được trước khi lấy chữ số đầu tiên ở phần thập phân của số bị chia để tiếp tục chia.</span>
                            </li>
                            <li class="flex gap-2">
                                <span class="text-blue-600 font-black">3.</span>
                                <span>Tiếp tục chia với các chữ số còn lại ở phần thập phân của số bị chia.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="p-6 md:p-8 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm flex flex-col justify-between">
                    <div>
                        <h3 class="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm">✍️</span>
                            Ví dụ mẫu
                        </h3>
                        <div class="space-y-3 text-slate-600 font-medium text-base md:text-lg">
                            <p class="font-bold text-slate-800">Tính: 8,4 : 4</p>
                            <p>• Chia phần nguyên: 8 : 4 = 2, viết 2.</p>
                            <p>• Viết dấu phẩy vào thương: 2,</p>
                            <p>• Hạ chữ số phần mười 4: 4 : 4 = 1, viết 1.</p>
                            <p class="text-blue-700 font-bold text-lg md:text-xl">Kết quả: 8,4 : 4 = 2,1</p>
                        </div>
                    </div>
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
                    <button id="tab-btn-47-1" onclick="window.switchTab_47(1)" class="px-5 py-2.5 rounded-full font-black text-xs md:text-base transition-all bg-blue-600 text-white shadow">Bài 1</button>
                    <button id="tab-btn-47-2" onclick="window.switchTab_47(2)" class="px-5 py-2.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50">Bài 2</button>
                    <button id="tab-btn-47-3" onclick="window.switchTab_47(3)" class="px-5 py-2.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50">Bài 3</button>
                </div>
            </div>

            <!-- NỘI DUNG TỪNG TAB BÀI TẬP -->
            <div class="p-6 md:p-8 bg-white rounded-[2.5rem]">

                <!-- TAB 1: BÀI 1 -->
                <div id="tab-content-47-1" class="space-y-6 animate-in fade-in duration-300">
                    <div class="glass-card p-6 md:p-8 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
                        <div>
                            <div class="flex items-center justify-between mb-6 flex-wrap gap-4">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">1</div>
                                    <h3 class="text-xl md:text-3xl font-black text-blue-900 uppercase">Bài 1. Đặt tính rồi tính</h3>
                                </div>
                                <!-- Nút Subtabs -->
                                <div class="flex items-center gap-2 bg-blue-50 p-1.5 rounded-full border border-blue-100">
                                    <button type="button" id="subtab-btn-47-1-a" onclick="window.switchSubtab_47_1('a')" class="px-5 py-1.5 rounded-full font-black text-xs md:text-base transition-all bg-blue-600 text-white shadow">a</button>
                                    <button type="button" id="subtab-btn-47-1-b" onclick="window.switchSubtab_47_1('b')" class="px-5 py-1.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50">b</button>
                                    <button type="button" id="subtab-btn-47-1-c" onclick="window.switchSubtab_47_1('c')" class="px-5 py-1.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50">c</button>
                                </div>
                                <button onclick="window.toggleSolution('sol-47-1')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                            </div>

                            <!-- SUB-TAB CONTENT A: 0,36 : 9 -->
                            <div id="subtab-content-47-1-a" class="animate-in fade-in duration-300 flex flex-col items-center">
                                    <div class="w-full bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center shadow-sm">
                                        <div class="flex justify-between items-center mb-6 w-full">
                                            <h4 class="text-lg md:text-2xl font-black text-blue-700">a) 0,36 : 9</h4>
                                        </div>
                                        <div class="flex flex-col items-center justify-center font-mono py-8 bg-white border border-slate-100 rounded-2xl w-full shadow-inner mb-2">
                                            <div class="grid gap-x-1 gap-y-2 items-center justify-items-center" style="grid-template-columns: 40px 16px 40px 40px 24px 40px 40px 40px;">
                                                <!-- Row 1 -->
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">0</span>
                                                <span class="w-4 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">,</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">3</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">6</span>
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800">9</span>
                                                <span></span><span></span>

                                                <!-- Row 2 -->
                                                <span></span>
                                                <span></span>
                                                <input type="text" id="ans-47-1-a-r2c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-47-1-a-r2c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <input type="text" id="ans-47-1-a-r2c5" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-47-1-a-r2c7" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-47-1-a-r2c8" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">

                                                <!-- Row 3 -->
                                                <span></span>
                                                <span></span>
                                                <input type="text" id="ans-47-1-a-r3c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-47-1-a-r3c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                            <!-- SUB-TAB CONTENT B: 95,2 : 68 -->
                            <div id="subtab-content-47-1-b" class="hidden animate-in fade-in duration-300 flex flex-col items-center">
                                    <div class="w-full bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center shadow-sm">
                                        <div class="flex justify-between items-center mb-6 w-full">
                                            <h4 class="text-lg md:text-2xl font-black text-blue-700">b) 95,2 : 68</h4>
                                        </div>
                                        <div class="flex flex-col items-center justify-center font-mono py-8 bg-white border border-slate-100 rounded-2xl w-full shadow-inner mb-2">
                                            <div class="grid gap-x-1 gap-y-2 items-center justify-items-center" style="grid-template-columns: 40px 40px 16px 40px 24px 40px 40px;">
                                                <!-- Row 1 -->
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">9</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">5</span>
                                                <span class="w-4 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">,</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">2</span>
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800">6</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800">8</span>

                                                <!-- Row 2 -->
                                                <input type="text" id="ans-47-1-b-r2c1" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-47-1-b-r2c2" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                <input type="text" id="ans-47-1-b-r2c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <input type="text" id="ans-47-1-b-r2c5" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-47-1-b-r2c7" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">

                                                <!-- Row 3 -->
                                                <span></span>
                                                <input type="text" id="ans-47-1-b-r3c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                <input type="text" id="ans-47-1-b-r3c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                            <!-- SUB-TAB CONTENT C: 5,28 : 4 -->
                            <div id="subtab-content-47-1-c" class="hidden animate-in fade-in duration-300 flex flex-col items-center">
                                    <div class="w-full bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center shadow-sm">
                                        <div class="flex justify-between items-center mb-6 w-full">
                                            <h4 class="text-lg md:text-2xl font-black text-blue-700">c) 5,28 : 4</h4>
                                        </div>
                                        <div class="flex flex-col items-center justify-center font-mono py-8 bg-white border border-slate-100 rounded-2xl w-full shadow-inner mb-2">
                                            <div class="grid gap-x-1 gap-y-2 items-center justify-items-center" style="grid-template-columns: 40px 16px 40px 40px 24px 40px 40px 40px;">
                                                <!-- Row 1 -->
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">5</span>
                                                <span class="w-4 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">,</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">2</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">8</span>
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800">4</span>
                                                <span></span><span></span>

                                                <!-- Row 2 -->
                                                <input type="text" id="ans-47-1-c-r2c1" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                <input type="text" id="ans-47-1-c-r2c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <input type="text" id="ans-47-1-c-r2c5" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-47-1-c-r2c7" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-47-1-c-r2c8" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">

                                                <!-- Row 3 -->
                                                <input type="text" id="ans-47-1-c-r3c1" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                <input type="text" id="ans-47-1-c-r3c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-47-1-c-r3c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <!-- Row 4 -->
                                                <span></span>
                                                <span></span>
                                                <input type="text" id="ans-47-1-c-r4c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-47-1-c-r4c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
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

                        <div id="sol-47-1" class="hidden mt-6 p-6 bg-sky-50 rounded-2xl border border-sky-200 text-lg md:text-2xl font-medium text-slate-700 w-full mx-auto">
                            <p class="font-bold text-blue-800 mb-3 text-center">✍️ Đáp án chi tiết đặt tính:</p>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center font-black">
                                    
                                    <!-- Phép tính a -->
                                    <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                        <p class="text-sm text-blue-600 mb-4 font-bold">Phép tính a</p>
                                        <div class="flex flex-col items-center font-mono py-2 w-full">
                                            <div class="grid gap-x-0 gap-y-1 items-center justify-items-center text-xl md:text-2xl font-black" style="grid-template-columns: 28px 12px 28px 28px 16px 28px 12px 28px 28px;">
                                                <span>0</span><span>,</span><span>3</span><span>6</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">9</span>
                                                <span class="w-full"></span>
                                                <span class="w-full"></span>
                                                <span class="w-full"></span>
                                                
                                                <span></span><span></span><span>3</span><span>6</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span>0</span><span>,</span><span>0</span><span>4</span>
                                                
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
                                            <div class="grid gap-x-0 gap-y-1 items-center justify-items-center text-xl md:text-2xl font-black" style="grid-template-columns: 28px 28px 12px 28px 16px 28px 28px 28px;">
                                                <span>9</span><span>5</span><span>,</span><span>2</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">6</span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">8</span>
                                                <span class="w-full"></span>
                                                
                                                <span>2</span><span>7</span><span></span><span>2</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span>1</span><span>,</span><span>4</span>
                                                
                                                <span></span><span></span><span></span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Phép tính c -->
                                    <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                        <p class="text-sm text-blue-600 mb-4 font-bold">Phép tính c</p>
                                        <div class="flex flex-col items-center font-mono py-2 w-full">
                                            <div class="grid gap-x-0 gap-y-1 items-center justify-items-center text-xl md:text-2xl font-black" style="grid-template-columns: 28px 12px 28px 28px 16px 28px 12px 28px 28px;">
                                                <span>5</span><span>,</span><span>2</span><span>8</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">4</span>
                                                <span class="w-full"></span>
                                                <span class="w-full"></span>
                                                <span class="w-full"></span>
                                                
                                                <span>1</span><span></span><span>2</span><span></span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span>1</span><span>,</span><span>3</span><span>2</span>
                                                
                                                <span></span><span></span><span>0</span><span>8</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span><span></span>
                                                
                                                <span></span><span></span><span></span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span><span></span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div class="flex justify-end mt-6">
                            <button id="btn-check-47-1" onclick="window.check_47_1()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                        </div>
                    </div>
                </div>

                <!-- TAB 2: BÀI 2 -->
                <div id="tab-content-47-2" class="space-y-6 hidden animate-in fade-in duration-300">
                    <div class="glass-card p-6 md:p-8 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">2</div>
                                    <h3 class="text-xl md:text-3xl font-black text-blue-900 uppercase">Bài 2. Tính nhẩm kết quả</h3>
                                </div>
                                <button onclick="window.toggleSolution('sol-47-2')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                            </div>

                            <div class="p-6 bg-blue-50/50 rounded-[2rem] border border-blue-100 space-y-2 mb-6">
                                <p class="text-slate-800 font-bold text-lg md:text-2xl">Cho biết phép chia mẫu: <span class="text-blue-700 underline decoration-double">7 657 : 31 = 247</span></p>
                                <p class="text-slate-600 text-base md:text-lg">Không thực hiện phép tính, em hãy tìm kết quả của các phép chia sau:</p>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <!-- Câu a -->
                                <div class="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] flex flex-col items-center gap-3">
                                    <span class="text-slate-700 font-black text-xl md:text-2xl">a) 765,7 : 31 =</span>
                                    <input type="text" id="ans-47-2-a" class="w-36 h-12 border-2 border-blue-300 rounded-xl text-center font-black text-xl text-blue-700 outline-none focus:border-blue-500 bg-white" placeholder="">
                                </div>
                                <!-- Câu b -->
                                <div class="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] flex flex-col items-center gap-3">
                                    <span class="text-slate-700 font-black text-xl md:text-2xl">b) 76,57 : 31 =</span>
                                    <input type="text" id="ans-47-2-b" class="w-36 h-12 border-2 border-blue-300 rounded-xl text-center font-black text-xl text-blue-700 outline-none focus:border-blue-500 bg-white" placeholder="">
                                </div>
                                <!-- Câu c -->
                                <div class="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] flex flex-col items-center gap-3">
                                    <span class="text-slate-700 font-black text-xl md:text-2xl">c) 76,57 : 247 =</span>
                                    <input type="text" id="ans-47-2-c" class="w-36 h-12 border-2 border-blue-300 rounded-xl text-center font-black text-xl text-blue-700 outline-none focus:border-blue-500 bg-white" placeholder="">
                                </div>
                            </div>
                        </div>

                        <div id="sol-47-2" class="hidden mt-6 p-6 bg-sky-50 rounded-2xl border border-sky-200 text-lg md:text-xl font-medium text-slate-700 w-full mx-auto">
                            <p class="font-bold text-blue-800 mb-2">✍️ Hướng dẫn nhẩm nhanh:</p>
                            <p>• a) 765,7 có 1 chữ số thập phân, nên thương dịch dấu phẩy sang trái 1 chữ số: <strong>24,7</strong>.</p>
                            <p>• b) 76,57 có 2 chữ số thập phân, nên thương dịch dấu phẩy sang trái 2 chữ số: <strong>2,47</strong>.</p>
                            <p>• c) Vì 76,57 : 31 = 2,47 nên 76,57 : 2,47 = 31. Khi chia cho 247 (gấp 100 lần 2,47), thương sẽ giảm 100 lần thành <strong>0,31</strong>.</p>
                        </div>

                        <div class="flex justify-end mt-4">
                            <button id="btn-check-47-2" onclick="window.check_47_2()" class="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                        </div>
                    </div>
                </div>

                <!-- TAB 3: BÀI 3 -->
                <div id="tab-content-47-3" class="space-y-6 hidden animate-in fade-in duration-300">
                    <div class="glass-card p-6 md:p-8 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">3</div>
                                    <h3 class="text-xl md:text-3xl font-black text-blue-900 uppercase">Bài 3. Chia cá vào khay</h3>
                                </div>
                                <button onclick="window.toggleSolution('sol-47-3')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                            </div>

                            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                                <div class="lg:col-span-6 space-y-4">
                                    <div class="p-6 bg-blue-50/50 rounded-[2.5rem] border border-blue-100">
                                        <p class="text-slate-800 text-lg md:text-2xl font-medium leading-relaxed">
                                            Rô-bốt chia đều <strong>9,68 yến cá</strong> vào <strong>8 khay</strong>. Hỏi mỗi khay đựng bao nhiêu yến cá?
                                        </p>
                                    </div>
                                    <div class="space-y-3">
                                        <p class="text-slate-600 font-bold text-lg md:text-xl">Hãy nhập Bài giải và Đáp số:</p>
                                        <textarea id="ans-47-3-essay" rows="4" class="w-full p-4 border border-slate-300 rounded-3xl outline-none focus:border-blue-500 text-lg md:text-xl font-medium" placeholder="Nhập bài giải của em..."></textarea>
                                        <div class="flex items-center gap-2 font-bold text-lg md:text-2xl flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>Đáp số:</span>
                                            <input type="text" id="ans-47-3-result" class="w-36 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-white md:text-2xl" placeholder="">
                                            <span>yến cá</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="lg:col-span-6 flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-[2.5rem]">
                                    <img src="assets/images/toan/toan_tap_1/47/3.png" class="w-full w-full rounded-3xl shadow-lg border-2 border-white" alt="Robot chia cá">
                                    <span class="text-xs text-slate-500 italic mt-2">Robot chia cá vào 8 khay trên bãi biển</span>
                                </div>
                            </div>
                        </div>

                        <div id="sol-47-3" class="hidden mt-2 p-4 bg-sky-50 rounded-2xl border border-sky-200 text-base md:text-xl font-medium text-slate-700">
                            <p class="font-bold text-blue-800 mb-1">✍️ Bài giải chi tiết:</p>
                            <p>Mỗi khay đựng số yến cá là:</p>
                            <p class="font-mono pl-6">9,68 : 8 = 1,21 (yến)</p>
                            <p class="pl-6">Đáp số: 1,21 yến cá.</p>
                        </div>

                        <div class="flex justify-end mt-4">
                            <button id="btn-check-47-3" onclick="window.check_47_3()" class="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `,
    "quizPool": metadata.quizPool
};

// ĐĂNG KÝ HÀM CHUYỂN TAB VÀ SUBTAB CHO TIẾT 47
window.switchTab_47 = function(tabIndex) {
    for (let i = 1; i <= 3; i++) {
        let content = document.getElementById('tab-content-47-' + i);
        if (content) content.classList.add('hidden');
        let btn = document.getElementById('tab-btn-47-' + i);
        if (btn) btn.className = "px-5 py-2.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50";
    }

    let activeContent = document.getElementById('tab-content-47-' + tabIndex);
    if (activeContent) activeContent.classList.remove('hidden');
    let activeBtn = document.getElementById('tab-btn-47-' + tabIndex);
    if (activeBtn) activeBtn.className = "px-5 py-2.5 rounded-full font-black text-xs md:text-base transition-all bg-blue-600 text-white shadow";
};

// HÀM CHUYỂN SUBTAB BÀI 1
window.switchSubtab_47_1 = function(subtab) {
    ['a', 'b', 'c'].forEach(t => {
        let content = document.getElementById('subtab-content-47-1-' + t);
        if (content) content.classList.add('hidden');
        let btn = document.getElementById('subtab-btn-47-1-' + t);
        if (btn) btn.className = "px-5 py-1.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50";
    });

    let activeContent = document.getElementById('subtab-content-47-1-' + subtab);
    if (activeContent) activeContent.classList.remove('hidden');
    let activeBtn = document.getElementById('subtab-btn-47-1-' + subtab);
    if (activeBtn) activeBtn.className = "px-5 py-1.5 rounded-full font-black text-xs md:text-base transition-all bg-blue-600 text-white shadow";
};

// CÁC HÀM KIỂM TRA ĐÁP ÁN BÀI 1, 2, 3
window.check_47_1 = function() {
    function getVal(id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : '';
    }
    function isCommaVal(val) {
        return val === ',' || val === '.';
    }

    // a) 0,36 : 9 = 0,04
    var r2_a = getVal('ans-47-1-a-r2c3') === '3' && getVal('ans-47-1-a-r2c4') === '6' && (getVal('ans-47-1-a-r2c5') === '0,' || getVal('ans-47-1-a-r2c5') === '0.') && getVal('ans-47-1-a-r2c7') === '0' && getVal('ans-47-1-a-r2c8') === '4';
    var r3_a = getVal('ans-47-1-a-r3c4') === '0' && (getVal('ans-47-1-a-r3c3') === '0' || getVal('ans-47-1-a-r3c3') === '');
    var aCorrect = r2_a && r3_a;

    // b) 95,2 : 68 = 1,4
    var r2_b = getVal('ans-47-1-b-r2c1') === '2' && getVal('ans-47-1-b-r2c2') === '7' && getVal('ans-47-1-b-r2c4') === '2' && (getVal('ans-47-1-b-r2c5') === '1,' || getVal('ans-47-1-b-r2c5') === '1.') && getVal('ans-47-1-b-r2c7') === '4';
    var r3_b = getVal('ans-47-1-b-r3c4') === '0' && (getVal('ans-47-1-b-r3c3') === '0' || getVal('ans-47-1-b-r3c3') === '');
    var bCorrect = r2_b && r3_b;

    // c) 5,28 : 4 = 1,32
    var r2_c = getVal('ans-47-1-c-r2c1') === '1' && getVal('ans-47-1-c-r2c3') === '2' && (getVal('ans-47-1-c-r2c5') === '1,' || getVal('ans-47-1-c-r2c5') === '1.') && getVal('ans-47-1-c-r2c7') === '3' && getVal('ans-47-1-c-r2c8') === '2';
    var r3_c = getVal('ans-47-1-c-r3c3') === '0' && getVal('ans-47-1-c-r3c4') === '8' && (getVal('ans-47-1-c-r3c1') === '0' || getVal('ans-47-1-c-r3c1') === '');
    var r4_c = getVal('ans-47-1-c-r4c4') === '0' && (getVal('ans-47-1-c-r4c3') === '0' || getVal('ans-47-1-c-r4c3') === '');
    var cCorrect = r2_c && r3_c && r4_c;

    var isCorrect = aCorrect && bCorrect && cCorrect;
    var rightAns = "a) 0,36 : 9 = 0,04\nb) 95,2 : 68 = 1,4\nc) 5,28 : 4 = 1,32";
    var studentAns = isCorrect ? "Đúng hoàn toàn" : "Chưa đúng hoàn toàn";

    var meta = window.MATH_BUILDER_METADATA.bai_tap[0];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-47-1', 0, 3, (aCorrect?1:0) + (bCorrect?1:0) + (cCorrect?1:0));
    }
};

window.check_47_2 = function() {
    function getCleanVal(id) {
        var el = document.getElementById(id);
        return el ? el.value.trim().replace(/,/g, '.') : '';
    }
    var a = getCleanVal('ans-47-2-a');
    var b = getCleanVal('ans-47-2-b');
    var c = getCleanVal('ans-47-2-c');

    var aCorrect = (a === '24.7');
    var bCorrect = (b === '2.47');
    var cCorrect = (c === '0.31');

    var isCorrect = aCorrect && bCorrect && cCorrect;
    var rightAns = "a) 24,7\nb) 2,47\nc) 0,31";
    var studentAns = "a) " + a + "\nb) " + b + "\nc) " + c;

    var meta = window.MATH_BUILDER_METADATA.bai_tap[1];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-47-2', 0, 3, (aCorrect?1:0) + (bCorrect?1:0) + (cCorrect?1:0));
    }
};

window.check_47_3 = function() {
    var resultVal = document.getElementById('ans-47-3-result').value.trim().replace(/,/g, '.');
    var isCorrect = (resultVal === '1.21');

    var meta = window.MATH_BUILDER_METADATA.bai_tap[2];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, "1,21", resultVal, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-47-3', 0, 1, isCorrect ? 1 : 0);
    }
};

// AUTO-RESIZE INPUTS
function setupAutoResizeInputs() {
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        if (input.id.includes('ans-47-1-')) {
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
