const metadata = {
    "lessonInfo": {
        "period": "49",
        "week": "10",
        "topic": "Số thập phân",
        "title": "BÀI 22: PHÉP CHIA SỐ THẬP PHÂN (TIẾT 3)",
        "desc": "Học sinh học cách thực hiện phép chia một số tự nhiên cho một số thập phân."
    },
    "bai_tap": [
        {
            "id": "49_1",
            "type": "fill_multiple",
            "title": "Bài 1: Đặt tính rồi tính",
            "answers": [],
            "guidance": "Muốn chia một số tự nhiên cho một số thập phân: Đếm xem có bao nhiêu chữ số ở phần thập phân của số chia thì viết thêm vào bên phải số bị chia bấy nhiêu chữ số 0, bỏ dấu phẩy ở số chia rồi chia như chia số tự nhiên.",
            "solution": "a) 7 : 3,5 = 2<br>b) 702 : 7,2 = 97,5<br>c) 128 : 0,25 = 512<br>d) 54 : 0,45 = 120"
        },
        {
            "id": "49_2",
            "type": "fill_multiple",
            "title": "Bài 2: Tính số lượng rô-bốt chuột chũi",
            "answers": ["20"],
            "guidance": "Lấy tổng số lít dầu (15 l) chia cho lượng dầu mỗi rô-bốt cần (0,75 l) để tìm số rô-bốt chuột chũi.",
            "solution": "Có tất cả số rô-bốt chuột chũi là:<br>  15 : 0,75 = 20 (rô-bốt)<br>Đáp số: 20 rô-bốt chuột chũi."
        },
        {
            "id": "49_3",
            "type": "fill_multiple",
            "title": "Bài 3: Bài toán năng suất hạt điều thô",
            "answers": ["2"],
            "guidance": "Lấy tổng sản lượng điều thô thu hoạch được (3 tấn) chia cho diện tích đất (1,5 ha) để tìm năng suất trên mỗi héc-ta.",
            "solution": "Trên mỗi héc-ta đất đó, người ta thu hoạch được số tấn hạt điều thô là:<br>  3 : 1,5 = 2 (tấn)<br>Đáp số: 2 tấn."
        }
    ],
    "quizPool": [
        { "question": "Kết quả của phép tính 9 : 4,5 là:", "options": ["2", "20", "0,2", "0,02"], "answer": 0 },
        { "question": "Kết quả của phép tính 3 : 1,5 là:", "options": ["2", "20", "0,2", "0,5"], "answer": 0 },
        { "question": "Kết quả của phép tính 5 : 2,5 là:", "options": ["2", "20", "0,2", "0,5"], "answer": 0 },
        { "question": "Thương của phép chia 12 : 1,5 là:", "options": ["8", "80", "0,8", "88"], "answer": 0 },
        { "question": "Kết quả của phép tính 1 : 0,5 là:", "options": ["2", "20", "0,2", "5"], "answer": 0 },
        { "question": "Kết quả của phép tính 6 : 0,25 là:", "options": ["24", "2,4", "240", "0,24"], "answer": 0 },
        { "question": "Tìm x biết: x × 1,2 = 6", "options": ["x = 5", "x = 50", "x = 0,5", "x = 2"], "answer": 0 },
        { "question": "Thương của 15 : 0,75 là:", "options": ["20", "2", "200", "0,2"], "answer": 0 },
        { "question": "Phép chia 8 : 1,25 có kết quả là:", "options": ["6,4", "0,64", "64", "6,04"], "answer": 0 },
        { "question": "Kết quả của phép tính 18 : 0,45 là:", "options": ["40", "4", "400", "0,4"], "answer": 0 },
        { "question": "Người ta đổ 12 l nước vào các chai nhỏ, mỗi chai chứa 0,5 l. Hỏi đổ được tất cả bao nhiêu chai?", "options": ["24 chai", "6 chai", "12 chai", "20 chai"], "answer": 0 },
        { "question": "Một ô tô đi được 60 km trong 1,5 giờ. Tốc độ trung bình của ô tô là:", "options": ["40 km/h", "4 km/h", "400 km/h", "45 km/h"], "answer": 0 },
        { "question": "Một mảnh vườn hình chữ nhật có diện tích 24 m², chiều dài 7,5 m. Chiều rộng là:", "options": ["3,2 m", "32 m", "0,32 m", "3 m"], "answer": 0 },
        { "question": "Tìm x biết: x × 0,15 = 3", "options": ["x = 20", "x = 2", "x = 200", "x = 0,2"], "answer": 0 },
        { "question": "Kết quả của phép tính 45 : 7,5 là:", "options": ["6", "60", "0,6", "6,5"], "answer": 0 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson049 = {
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
                        <h2 class="text-2xl md:text-4xl font-black mb-2 tracking-tight">CHIA MỘT SỐ TỰ NHIÊN CHO MỘT SỐ THẬP PHÂN</h2>
                        <p class="text-blue-100 text-lg md:text-2xl font-medium opacity-90">Bỏ dấu phẩy ở số chia, thêm chữ số 0 vào bên phải số bị chia để chia siêu nhanh!</p>
                    </div>
                </div>
            </div>

            <!-- Khám phá ví dụ 1 -->
            <div class="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl space-y-6">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center text-xl md:text-3xl font-black shadow-inner">a</div>
                    <h3 class="text-xl md:text-2xl font-black text-blue-900">Tính và so sánh kết quả</h3>
                </div>
                
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div class="lg:col-span-6 space-y-4">
                        <img src="assets/images/toan/toan_tap_1/49/kp.png" class="w-full rounded-3xl shadow-md border-4 border-white" alt="Khám phá">
                    </div>
                    <div class="lg:col-span-6 space-y-4 text-slate-700 text-lg md:text-xl leading-relaxed">
                        <div class="p-5 bg-blue-50/50 rounded-2xl border border-blue-100 space-y-3 font-semibold text-slate-800">
                            <p class="text-blue-900 font-bold">Ví dụ minh họa:</p>
                            <p>• 4,5 : 9 = 0,5</p>
                            <p>• (4,5 × 10) : (9 × 10) = 45 : 90 = 0,5</p>
                            <p class="text-green-700">➜ Vậy: 4,5 : 9 = (4,5 × 10) : (9 × 10)</p>
                        </div>
                        <p class="bg-amber-50 border border-amber-100 p-4 rounded-2xl text-amber-900 font-bold">
                            💡 Nhận xét: Khi nhân cả số bị chia và số chia với cùng một số khác 0 thì thương không thay đổi.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Khám phá ví dụ 2 -->
            <div class="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl space-y-6">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center text-xl md:text-3xl font-black shadow-inner">b</div>
                    <h3 class="text-xl md:text-2xl font-black text-blue-900">Ví dụ 2: Tìm chiều rộng đáy chiếc bể cá</h3>
                </div>
                
                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <p class="font-bold text-slate-800 mb-4 text-lg md:text-xl font-bold">
                        Đáy chiếc bể cá hình chữ nhật có diện tích 57 dm², chiều dài 9,5 dm. Chiều rộng là bao nhiêu đề-xi-mét?
                    </p>
                    <div class="flex flex-col lg:flex-row gap-8 items-center">
                        <div class="grid font-mono font-black text-xl bg-white p-4 rounded-xl border border-slate-200 shadow-inner" style="grid-template-columns: repeat(4, 30px) 4px repeat(3, 30px); gap: 2px;">
                            <!-- Row 1: 570 | 9,5 -->
                            <span>570</span>
                            <span class="border-r-2 border-slate-800 h-full"></span>
                            <span>9</span><span class="text-red-500 line-through">,</span><span>5</span>

                            <!-- Row 2: 0 | 6 -->
                            <span>0</span>
                            <span class="border-r-2 border-slate-800 h-full border-t-2 border-t-slate-800"></span>
                            <span class="border-t-2 border-t-slate-800">6</span>
                        </div>
                        <div class="text-slate-700 text-lg md:text-xl space-y-2 font-medium">
                            <p class="font-bold text-blue-800">Các bước thực hiện phép chia 57 : 9,5:</p>
                            <p>• Phần thập phân của số chia (9,5) có <strong>một chữ số</strong>.</p>
                            <p>• Viết thêm <strong>một chữ số 0</strong> vào bên phải số bị chia (57) được <strong>570</strong>; bỏ dấu phẩy ở số chia được <strong>95</strong>.</p>
                            <p>• Thực hiện phép chia <strong>570 : 95</strong>.</p>
                            <p>• 570 chia 95 được 6, viết 6; 6 nhân 95 bằng 570; 570 trừ 570 bằng 0.</p>
                            <p class="text-green-700 font-bold">➜ Kết quả: 57 : 9,5 = 6 (dm).</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quy tắc -->
            <div class="p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-700 to-blue-900 text-white shadow-2xl">
                <h4 class="text-xl md:text-2xl font-black mb-4 flex items-center gap-3">
                    📖 Quy tắc ghi nhớ
                </h4>
                <div class="p-6 bg-white/10 rounded-2xl border border-white/20 text-lg md:text-xl leading-relaxed space-y-4 font-semibold">
                    <p>Muốn chia một số tự nhiên cho một số thập phân ta làm như sau:</p>
                    <p>⭐ Đếm xem có bao nhiêu chữ số ở phần thập phân của số chia thì viết thêm vào bên phải số bị chia bấy nhiêu chữ số 0.</p>
                    <p>⭐ Bỏ dấu phẩy ở số chia rồi thực hiện phép chia như chia các số tự nhiên.</p>
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
                    <button id="tab-btn-49-1" onclick="window.switchTab_49(1)" class="px-5 py-2.5 rounded-full font-black text-xs md:text-base transition-all bg-blue-600 text-white shadow">Bài 1</button>
                    <button id="tab-btn-49-2" onclick="window.switchTab_49(2)" class="px-5 py-2.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50">Bài 2</button>
                    <button id="tab-btn-49-3" onclick="window.switchTab_49(3)" class="px-5 py-2.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50">Bài 3</button>
                </div>
            </div>

            <!-- NỘI DUNG TỪNG TAB BÀI TẬP -->
            <div class="p-6 md:p-8 bg-white rounded-[2.5rem]">

                <!-- TAB 1: BÀI 1 -->
                <div id="tab-content-49-1" class="space-y-6 animate-in fade-in duration-300">
                    <div class="glass-card p-6 md:p-8 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
                        <div>
                            <div class="flex items-center justify-between mb-6 flex-wrap gap-4">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">1</div>
                                    <h3 class="text-xl md:text-3xl font-black text-blue-900 uppercase">Đặt tính rồi tính</h3>
                                </div>
                                <!-- Nút Subtabs -->
                                <div class="flex items-center gap-2 bg-blue-50 p-1.5 rounded-full border border-blue-100">
                                    <button type="button" id="subtab-btn-49-1-a" onclick="window.switchSubtab_49_1('a')" class="px-5 py-1.5 rounded-full font-black text-xs md:text-base transition-all bg-blue-600 text-white shadow">a</button>
                                    <button type="button" id="subtab-btn-49-1-b" onclick="window.switchSubtab_49_1('b')" class="px-5 py-1.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50">b</button>
                                    <button type="button" id="subtab-btn-49-1-c" onclick="window.switchSubtab_49_1('c')" class="px-5 py-1.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50">c</button>
                                    <button type="button" id="subtab-btn-49-1-d" onclick="window.switchSubtab_49_1('d')" class="px-5 py-1.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50">d</button>
                                </div>
                                <button onclick="window.toggleSolution('sol-49-1')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                            </div>

                            <!-- SUB-TAB CONTENT A: 7 : 3,5 -->
                            <div id="subtab-content-49-1-a" class="animate-in fade-in duration-300 flex flex-col items-center">
                                    <div class="w-full w-full bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center shadow-sm">
                                        <div class="flex justify-between items-center mb-6 w-full">
                                            <h4 class="text-lg md:text-2xl font-black text-blue-700">a) 7 : 3,5</h4>
                                        </div>
                                        <div class="flex flex-col items-center justify-center font-mono py-8 bg-white border border-slate-100 rounded-2xl w-full shadow-inner mb-2">
                                            <div class="grid gap-x-1 gap-y-2 items-center justify-items-center" style="grid-template-columns: 40px 40px 40px 40px 24px 40px 16px 40px;">
                                                <!-- Row 1 -->
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">7</span>
                                                <input type="text" id="ans-49-1-a-r1c2" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span></span>
                                                <span></span>
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800">3</span>
                                                <span class="w-4 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800 text-slate-400">,</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800">5</span>

                                                <!-- Row 2 -->
                                                <span></span>
                                                <input type="text" id="ans-49-1-a-r2c2" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span></span>
                                                <span></span>
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <input type="text" id="ans-49-1-a-r2c6" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                            <!-- SUB-TAB CONTENT B: 702 : 7,2 -->
                            <div id="subtab-content-49-1-b" class="hidden animate-in fade-in duration-300 flex flex-col items-center">
                                    <div class="w-full w-full bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center shadow-sm">
                                        <div class="flex justify-between items-center mb-6 w-full">
                                            <h4 class="text-lg md:text-2xl font-black text-blue-700">b) 702 : 7,2</h4>
                                        </div>
                                        <div class="flex flex-col items-center justify-center font-mono py-8 bg-white border border-slate-100 rounded-2xl w-full shadow-inner mb-2">
                                            <div class="grid gap-x-1 gap-y-2 items-center justify-items-center" style="grid-template-columns: 40px 40px 40px 40px 40px 24px 40px 40px 16px 40px;">
                                                <!-- Row 1 -->
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">7</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">0</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">2</span>
                                                <input type="text" id="ans-49-1-b-r1c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span></span>
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800">7</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800 text-slate-400">,</span>
                                                <span class="w-4 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800">2</span>
                                                <span></span>

                                                <!-- Row 2 -->
                                                <span></span>
                                                <input type="text" id="ans-49-1-b-r2c2" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-49-1-b-r2c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-49-1-b-r2c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span></span>
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <input type="text" id="ans-49-1-b-r2c7" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-49-1-b-r2c8" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-49-1-b-r2c9" class="w-4 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-49-1-b-r2c10" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">

                                                <!-- Row 3 -->
                                                <span></span>
                                                <span></span>
                                                <input type="text" id="ans-49-1-b-r3c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-49-1-b-r3c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-49-1-b-r3c5" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
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
                                                <input type="text" id="ans-49-1-b-r4c5" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                            <!-- SUB-TAB CONTENT C: 128 : 0,25 -->
                            <div id="subtab-content-49-1-c" class="hidden animate-in fade-in duration-300 flex flex-col items-center">
                                    <div class="w-full w-full bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center shadow-sm">
                                        <div class="flex justify-between items-center mb-6 w-full">
                                            <h4 class="text-lg md:text-2xl font-black text-blue-700">c) 128 : 0,25</h4>
                                        </div>
                                        <div class="flex flex-col items-center justify-center font-mono py-8 bg-white border border-slate-100 rounded-2xl w-full shadow-inner mb-2">
                                            <div class="grid gap-x-1 gap-y-2 items-center justify-items-center" style="grid-template-columns: 40px 40px 40px 40px 40px 24px 40px 16px 40px 40px;">
                                                <!-- Row 1 -->
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">1</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">2</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">8</span>
                                                <input type="text" id="ans-49-1-c-r1c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-49-1-c-r1c5" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800">0</span>
                                                <span class="w-4 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800 text-slate-400">,</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800">2</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800">5</span>

                                                <!-- Row 2 -->
                                                <span></span>
                                                <span></span>
                                                <input type="text" id="ans-49-1-c-r2c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-49-1-c-r2c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span></span>
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <input type="text" id="ans-49-1-c-r2c8" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span></span>
                                                <input type="text" id="ans-49-1-c-r2c9" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-49-1-c-r2c10" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">

                                                <!-- Row 3 -->
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <input type="text" id="ans-49-1-c-r3c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-49-1-c-r3c5" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
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
                                                <input type="text" id="ans-49-1-c-r4c5" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                            <!-- SUB-TAB CONTENT D: 54 : 0,45 -->
                            <div id="subtab-content-49-1-d" class="hidden animate-in fade-in duration-300 flex flex-col items-center">
                                    <div class="w-full w-full bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center shadow-sm">
                                        <div class="flex justify-between items-center mb-6 w-full">
                                            <h4 class="text-lg md:text-2xl font-black text-blue-700">d) 54 : 0,45</h4>
                                        </div>
                                        <div class="flex flex-col items-center justify-center font-mono py-8 bg-white border border-slate-100 rounded-2xl w-full shadow-inner mb-2">
                                            <div class="grid gap-x-1 gap-y-2 items-center justify-items-center" style="grid-template-columns: 40px 40px 40px 40px 24px 40px 16px 40px 40px;">
                                                <!-- Row 1 -->
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">5</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black">4</span>
                                                <input type="text" id="ans-49-1-d-r1c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-49-1-d-r1c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800">0</span>
                                                <span class="w-4 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800 text-slate-400">,</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800">4</span>
                                                <span class="w-10 h-10 flex items-center justify-center text-2xl md:text-3xl font-black border-b-4 border-slate-800">5</span>

                                                <!-- Row 2 -->
                                                <span></span>
                                                <input type="text" id="ans-49-1-d-r2c2" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-49-1-d-r2c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span></span>
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <input type="text" id="ans-49-1-d-r2c7" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span></span>
                                                <input type="text" id="ans-49-1-d-r2c8" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-49-1-d-r2c9" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">

                                                <!-- Row 3 -->
                                                <span></span>
                                                <span></span>
                                                <input type="text" id="ans-49-1-d-r3c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <input type="text" id="ans-49-1-d-r3c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>

                                                <!-- Row 4 -->
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <input type="text" id="ans-49-1-d-r4c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
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

                        <div id="sol-49-1" class="hidden mt-6 p-6 bg-sky-50 rounded-2xl border border-sky-200 text-lg md:text-2xl font-medium text-slate-700 w-full mx-auto">
                            <p class="font-bold text-blue-800 mb-3 text-center">✍️ Đáp án chi tiết đặt tính:</p>
                            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-center font-black">
                                    <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                        <p class="text-sm text-blue-600 mb-4 font-bold">Phép tính a</p>
                                        <div class="flex flex-col items-center font-mono py-2 w-full">
                                            <div class="grid gap-x-0 gap-y-1 items-center justify-items-center text-xl md:text-2xl font-black" style="grid-template-columns: 28px 28px 16px 28px 28px;">
                                                <span>7</span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">3</span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">5</span>
                                                
                                                <span></span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span>2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                        <p class="text-sm text-blue-600 mb-4 font-bold">Phép tính b</p>
                                        <div class="flex flex-col items-center font-mono py-2 w-full">
                                            <div class="grid gap-x-0 gap-y-1 items-center justify-items-center text-xl md:text-2xl font-black" style="grid-template-columns: 28px 28px 28px 28px 16px 28px 28px 28px;">
                                                <span>7</span><span>0</span><span>2</span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">7</span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">2</span>
                                                <span class="w-full"></span>
                                                
                                                <span></span><span>5</span><span>4</span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span>9</span><span>7</span><span>,</span><span>5</span>
                                                
                                                <span></span><span></span><span>3</span><span>6</span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span>
                                                
                                                <span></span><span></span><span></span><span></span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                        <p class="text-sm text-blue-600 mb-4 font-bold">Phép tính c</p>
                                        <div class="flex flex-col items-center font-mono py-2 w-full">
                                            <div class="grid gap-x-0 gap-y-1 items-center justify-items-center text-xl md:text-2xl font-black" style="grid-template-columns: 28px 28px 28px 28px 28px 16px 28px 28px 28px;">
                                                <span>1</span><span>2</span><span>8</span><span>0</span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">2</span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">5</span>
                                                <span class="w-full"></span>
                                                
                                                <span></span><span></span><span>3</span><span>0</span><span></span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span>5</span><span>1</span><span>2</span>
                                                
                                                <span></span><span></span><span></span><span>5</span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span>
                                                
                                                <span></span><span></span><span></span><span></span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                        <p class="text-sm text-blue-600 mb-4 font-bold">Phép tính d</p>
                                        <div class="flex flex-col items-center font-mono py-2 w-full">
                                            <div class="grid gap-x-0 gap-y-1 items-center justify-items-center text-xl md:text-2xl font-black" style="grid-template-columns: 28px 28px 28px 28px 16px 28px 28px 28px;">
                                                <span>5</span><span>4</span><span>0</span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">4</span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">5</span>
                                                <span class="w-full"></span>
                                                
                                                <span></span><span>9</span><span>0</span><span></span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span>1</span><span>2</span><span>0</span>
                                                
                                                <span></span><span></span><span>0</span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span>
                                                
                                                <span></span><span></span><span></span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div class="flex justify-end mt-6">
                            <button id="btn-check-49-1" onclick="window.check_49_1()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                        </div>
                    </div>
                </div>

                <!-- TAB 2: BÀI 2 -->
                <div id="tab-content-49-2" class="space-y-6 hidden animate-in fade-in duration-300">
                    <div class="glass-card p-6 md:p-8 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
                        <div>
                            <div class="flex items-center justify-between mb-4 flex-wrap gap-4">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">2</div>
                                    <h3 class="text-xl md:text-3xl font-black text-blue-900 uppercase">Giải bài toán</h3>
                                </div>
                                <button onclick="window.toggleSolution('sol-49-2')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                            </div>

                            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                                <div class="lg:col-span-5 flex justify-center">
                                    <img src="assets/images/toan/toan_tap_1/49/2.png" class="max-w-full rounded-3xl shadow-md border-2 border-slate-100" alt="Robots chuột chũi">
                                </div>
                                <div class="lg:col-span-7 space-y-4 text-slate-700 text-lg md:text-xl font-medium leading-relaxed">
                                    <p class="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 font-bold">
                                        Một nhà khảo cổ đã đổ hết 15 l dầu vào các rô-bốt chuột chũi, mỗi rô-bốt 0,75 l dầu. Hỏi có tất cả bao nhiêu rô-bốt chuột chũi được đổ dầu?
                                    </p>
                                    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                                        <h4 class="text-blue-800 font-black text-lg md:text-xl">✍️ Điền kết quả:</h4>
                                        <div class="space-y-3 text-slate-700 font-bold">
                                            <p>Có tất cả số rô-bốt chuột chũi là:</p>
                                            <div class="flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                                <span>15 : 0,75 =</span>
                                                <input type="text" id="ans-49-2-result" class="w-36 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-white md:text-2xl" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 46px !important;" placeholder="?">
                                                <span>(rô-bốt)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="sol-49-2" class="hidden mt-6 p-6 bg-sky-50 rounded-2xl border border-sky-200 text-lg md:text-2xl font-medium text-slate-700 w-full mx-auto">
                            <p class="font-bold text-blue-800 mb-2">📝 Lời giải chi tiết:</p>
                            <p class="mb-2">Có tất cả số rô-bốt chuột chũi là:</p>
                            <p class="font-black text-blue-900 ml-4 mb-2">15 : 0,75 = 20 (rô-bốt)</p>
                            <p class="text-right font-black">Đáp số: 20 rô-bốt chuột chũi.</p>
                        </div>

                        <div class="flex justify-end mt-4">
                            <button id="btn-check-49-2" onclick="window.check_49_2()" class="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                        </div>
                    </div>
                </div>

                <!-- TAB 3: BÀI 3 -->
                <div id="tab-content-49-3" class="space-y-6 hidden animate-in fade-in duration-300">
                    <div class="glass-card p-6 md:p-8 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">3</div>
                                    <h3 class="text-xl md:text-3xl font-black text-blue-900 uppercase">Giải bài toán</h3>
                                </div>
                                <button onclick="window.toggleSolution('sol-49-3')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                            </div>

                            <div class="bg-blue-50/50 p-6 rounded-3xl border border-blue-100/80 mb-6 text-slate-700 text-lg md:text-2xl font-medium leading-relaxed">
                                Cho biết trên 1,5 ha đất thu hoạch được 3 tấn hạt điều thô. Hỏi trên mỗi héc-ta đất đó, người ta thu hoạch được bao nhiêu tấn hạt điều thô?
                            </div>

                            <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 w-full mx-auto space-y-4">
                                <h4 class="text-blue-800 font-black text-lg md:text-xl">✍️ Điền kết quả:</h4>
                                <div class="space-y-3 text-slate-700 text-lg md:text-xl font-bold">
                                    <p>Trên mỗi héc-ta đất đó, người ta thu hoạch được số tấn hạt điều thô là:</p>
                                    <div class="flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span>3 : 1,5 =</span>
                                        <input type="text" id="ans-49-3-result" class="w-36 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-white md:text-2xl" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 46px !important;" placeholder="?">
                                        <span>(tấn)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="sol-49-3" class="hidden mt-6 p-6 bg-sky-50 rounded-2xl border border-sky-200 text-lg md:text-2xl font-medium text-slate-700 w-full mx-auto">
                            <p class="font-bold text-blue-800 mb-2">📝 Lời giải chi tiết:</p>
                            <p class="mb-2">Trên mỗi héc-ta đất đó, người ta thu hoạch được số tấn hạt điều thô là:</p>
                            <p class="font-black text-blue-900 ml-4 mb-2">3 : 1,5 = 2 (tấn)</p>
                            <p class="text-right font-black">Đáp số: 2 tấn hạt điều thô.</p>
                        </div>

                        <div class="flex justify-end mt-4">
                            <button id="btn-check-49-3" onclick="window.check_49_3()" class="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `,
    "quizPool": metadata.quizPool
};

// ĐĂNG KÝ HÀM CHUYỂN TAB VÀ SUBTAB CHO TIẾT 49
window.switchTab_49 = function(tabIndex) {
    for (let i = 1; i <= 3; i++) {
        let content = document.getElementById('tab-content-49-' + i);
        if (content) content.classList.add('hidden');
        let btn = document.getElementById('tab-btn-49-' + i);
        if (btn) btn.className = "px-5 py-2.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50";
    }

    let activeContent = document.getElementById('tab-content-49-' + tabIndex);
    if (activeContent) activeContent.classList.remove('hidden');
    let activeBtn = document.getElementById('tab-btn-49-' + tabIndex);
    if (activeBtn) activeBtn.className = "px-5 py-2.5 rounded-full font-black text-xs md:text-base transition-all bg-blue-600 text-white shadow";
};

// HÀM CHUYỂN SUBTAB BÀI 1
window.switchSubtab_49_1 = function(subtab) {
    ['a', 'b', 'c', 'd'].forEach(t => {
        let content = document.getElementById('subtab-content-49-1-' + t);
        if (content) content.classList.add('hidden');
        let btn = document.getElementById('subtab-btn-49-1-' + t);
        if (btn) btn.className = "px-5 py-1.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50";
    });

    let activeContent = document.getElementById('subtab-content-49-1-' + subtab);
    if (activeContent) activeContent.classList.remove('hidden');
    let activeBtn = document.getElementById('subtab-btn-49-1-' + subtab);
    if (activeBtn) activeBtn.className = "px-5 py-1.5 rounded-full font-black text-xs md:text-base transition-all bg-blue-600 text-white shadow";
};

// CÁC HÀM KIỂM TRA ĐÁP ÁN BÀI 1, 2, 3
window.check_49_1 = function() {
    function getVal(id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : '';
    }
    function isCommaVal(val) {
        return val === ',' || val === '.';
    }

    // a) 7 : 3,5 = 2 -> 70 : 35 = 2
    var r1_a = getVal('ans-49-1-a-r1c2') === '0';
    var r2_a = getVal('ans-49-1-a-r2c2') === '0' && getVal('ans-49-1-a-r2c6') === '2';
    var aCorrect = r1_a && r2_a;

    // b) 702 : 7,2 = 97,5 -> 7020 : 72 = 97,5
    var r1_b = getVal('ans-49-1-b-r1c4') === '0';
    var r2_b = getVal('ans-49-1-b-r2c2') === '5' && getVal('ans-49-1-b-r2c3') === '4' && getVal('ans-49-1-b-r2c4') === '0' && getVal('ans-49-1-b-r2c7') === '9' && getVal('ans-49-1-b-r2c8') === '7' && isCommaVal(getVal('ans-49-1-b-r2c9')) && getVal('ans-49-1-b-r2c10') === '5';
    var r3_b = getVal('ans-49-1-b-r3c3') === '3' && getVal('ans-49-1-b-r3c4') === '6' && getVal('ans-49-1-b-r3c5') === '0';
    var r4_b = getVal('ans-49-1-b-r4c5') === '0';
    var bCorrect = r1_b && r2_b && r3_b && r4_b;

    // c) 128 : 0,25 = 512 -> 12800 : 25 = 512
    var r1_c = getVal('ans-49-1-c-r1c4') === '0' && getVal('ans-49-1-c-r1c5') === '0';
    var r2_c = getVal('ans-49-1-c-r2c3') === '3' && getVal('ans-49-1-c-r2c4') === '0' && getVal('ans-49-1-c-r2c8') === '5' && getVal('ans-49-1-c-r2c9') === '1' && getVal('ans-49-1-c-r2c10') === '2';
    var r3_c = getVal('ans-49-1-c-r3c4') === '5' && getVal('ans-49-1-c-r3c5') === '0';
    var r4_c = getVal('ans-49-1-c-r4c5') === '0';
    var cCorrect = r1_c && r2_c && r3_c && r4_c;

    // d) 54 : 0,45 = 120 -> 5400 : 45 = 120
    var r1_d = getVal('ans-49-1-d-r1c3') === '0' && getVal('ans-49-1-d-r1c4') === '0';
    var r2_d = getVal('ans-49-1-d-r2c2') === '9' && getVal('ans-49-1-d-r2c3') === '0' && getVal('ans-49-1-d-r2c7') === '1' && getVal('ans-49-1-d-r2c8') === '2' && getVal('ans-49-1-d-r2c9') === '0';
    var r3_d = getVal('ans-49-1-d-r3c3') === '0' && getVal('ans-49-1-d-r3c4') === '0';
    var r4_d = getVal('ans-49-1-d-r4c4') === '0';
    var dCorrect = r1_d && r2_d && r3_d && r4_d;

    var isCorrect = aCorrect && bCorrect && cCorrect && dCorrect;
    var rightAns = "a) 70 : 35 = 2\nb) 7020 : 72 = 97,5\nc) 12800 : 25 = 512\nd) 5400 : 45 = 120";
    var studentAns = isCorrect ? "Đúng hoàn toàn" : "Chưa đúng hoàn toàn";

    var meta = window.MATH_BUILDER_METADATA.bai_tap[0];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-49-1', 0, 4, (aCorrect?1:0) + (bCorrect?1:0) + (cCorrect?1:0) + (dCorrect?1:0));
    }
};

window.check_49_2 = function() {
    var resultVal = document.getElementById('ans-49-2-result').value.trim();
    var isCorrect = (resultVal === '20');

    var meta = window.MATH_BUILDER_METADATA.bai_tap[1];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, "20", resultVal, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-49-2', 0, 1, isCorrect ? 1 : 0);
    }
};

window.check_49_3 = function() {
    var resultVal = document.getElementById('ans-49-3-result').value.trim().replace(/,/g, '.');
    var isCorrect = (resultVal === '2');

    var meta = window.MATH_BUILDER_METADATA.bai_tap[2];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, "2", resultVal, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-49-3', 0, 1, isCorrect ? 1 : 0);
    }
};

// AUTO-RESIZE INPUTS
function setupAutoResizeInputs() {
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        if (input.id.includes('ans-49-1-')) {
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
