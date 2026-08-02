const metadata = {
    "lessonInfo": {
        "period": "50",
        "week": "10",
        "topic": "Số thập phân",
        "title": "BÀI 22: PHÉP CHIA SỐ THẬP PHÂN (TIẾT 4)",
        "desc": "Học sinh học cách thực hiện phép chia một số thập phân cho một số thập phân."
    },
    "bai_tap": [
        {
            "id": "50_1",
            "type": "fill_multiple",
            "title": "Hoạt động: Đặt tính rồi tính",
            "answers": [],
            "guidance": "Muốn chia một số thập phân cho một số thập phân: Đếm xem có bao nhiêu chữ số ở phần thập phân của số chia thì chuyển dấu phẩy ở số bị chia sang bên phải bấy nhiêu chữ số. Bỏ dấu phẩy ở số chia rồi chia như chia số tự nhiên.",
            "solution": "a) 48,3 : 3,5 = 13,8<br>b) 144,55 : 3,5 = 41,3<br>c) 3 : 0,25 = 12"
        },
        {
            "id": "50_2",
            "type": "fill_multiple",
            "title": "Bài 1: Tính số ki-lô-gam kẹo trả cho mỗi chiếc răng sâu",
            "answers": ["3,85", "3.85"],
            "guidance": "Lấy tổng số kẹo (15,4 kg) chia cho số chiếc răng sâu (4) để tìm số kẹo phải trả cho mỗi chiếc răng.",
            "solution": "Để nhổ mỗi chiếc răng sâu, chú rồng phải trả số ki-lô-gam kẹo là:<br>  15,4 : 4 = 3,85 (kg)<br>Đáp số: 3,85 kg kẹo."
        },
        {
            "id": "50_3",
            "type": "fill_multiple",
            "title": "Bài 2: Tính chiều dài mặt sàn nhà kính trồng rau",
            "answers": ["30,5", "30.5"],
            "guidance": "Lấy diện tích mặt sàn (292,8 m²) chia cho chiều rộng (9,6 m) để tìm chiều dài mặt sàn.",
            "solution": "Chiều dài của mặt sàn nhà kính đó là:<br>  292,8 : 9,6 = 30,5 (m)<br>Đáp số: 30,5 m."
        }
    ],
    "quizPool": [
        { "question": "Kết quả của phép tính 2,48 : 1,6 là:", "options": ["1,55", "15,5", "0,155", "1,5"], "answer": 0 },
        { "question": "Kết quả của phép tính 5,4 : 0,25 là:", "options": ["21,6", "2,16", "216", "0,216"], "answer": 0 },
        { "question": "Kết quả của phép tính 3 : 0,25 là:", "options": ["12", "1,2", "120", "0,12"], "answer": 0 },
        { "question": "Kết quả của phép tính 48,3 : 3,5 là:", "options": ["13,8", "1,38", "138", "1,48"], "answer": 0 },
        { "question": "Kết quả của phép tính 144,55 : 3,5 là:", "options": ["41,3", "4,13", "413", "41,5"], "answer": 0 },
        { "question": "Kết quả của phép tính 15,4 : 4 là:", "options": ["3,85", "38,5", "0,385", "3,8"], "answer": 0 },
        { "question": "Kết quả của phép tính 292,8 : 9,6 là:", "options": ["30,5", "3,05", "305", "35"], "answer": 0 },
        { "question": "Thương của phép chia 1,2 : 0,5 là:", "options": ["2,4", "0,24", "24", "0,6"], "answer": 0 },
        { "question": "Kết quả của phép tính 9,6 : 1,2 là:", "options": ["8", "0,8", "80", "11,52"], "answer": 0 },
        { "question": "Tìm x biết: x × 2,5 = 10", "options": ["x = 4", "x = 40", "x = 0,4", "x = 25"], "answer": 0 },
        { "question": "Kết quả của phép tính 0,75 : 0,25 là:", "options": ["3", "0,3", "30", "0,1875"], "answer": 0 },
        { "question": "Thương của phép chia 12,5 : 2,5 là:", "options": ["5", "50", "0,5", "5,5"], "answer": 0 },
        { "question": "Kết quả của phép tính 1,25 : 0,5 là:", "options": ["2,5", "25", "0,25", "0,625"], "answer": 0 },
        { "question": "Một thanh sắt dài 1,2 m nặng 4,8 kg. Hỏi 1 m thanh sắt nặng bao nhiêu ki-lô-gam?", "options": ["4 kg", "0,4 kg", "40 kg", "5,76 kg"], "answer": 0 },
        { "question": "Một ô tô chạy được 100,5 km trong 1,5 giờ. Vận tốc trung bình của ô tô là:", "options": ["67 km/h", "6,7 km/h", "670 km/h", "70 km/h"], "answer": 0 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson050 = {
    ...metadata.lessonInfo,
    "content": `
        <div class="theory-section space-y-6 animate-in fade-in slide-in-from-top-10 duration-1000 pt-6">
            <!-- Banner chính -->
            

            <!-- Khám phá ví dụ a -->
            <div class="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl space-y-6">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center text-xl md:text-3xl font-black shadow-inner">a</div>
                    <h3 class="text-xl md:text-2xl font-black text-blue-900">Ví dụ 1: Tính tỉ lệ nhào bột mì</h3>
                </div>
                
                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <p class="font-bold text-slate-800 mb-4 text-lg md:text-xl leading-relaxed">
                        Nhào 2,48 kg bột mì thì cần 1,6 l nước. Hỏi mỗi lít nước sẽ nhào với bao nhiêu ki-lô-gam bột mì?
                    </p>
                    <div class="flex flex-col lg:flex-row gap-8 items-center">
                        <div class="grid font-mono font-black text-xl bg-white p-6 rounded-2xl border border-slate-200 shadow-inner" style="grid-template-columns: repeat(4, 30px) 4px repeat(3, 30px); gap: 2px;">
                            <!-- Row 1: 2,4,8 | 1,6 -->
                            <span>2</span><span class="text-red-500 line-through">,</span><span>4</span><span class="text-red-500">,</span><span>8</span>
                            <span class="border-r-2 border-slate-800 h-full"></span>
                            <span>1</span><span class="text-red-500 line-through">,</span><span>6</span>

                            <!-- Row 2:   8 8 | 1,55 -->
                            <span></span><span>8</span><span>8</span><span></span>
                            <span class="border-r-2 border-slate-800 h-full border-t-2 border-t-slate-800"></span>
                            <span class="border-t-2 border-t-slate-800">1</span><span class="border-t-2 border-t-slate-800">,</span><span class="border-t-2 border-t-slate-800">55</span>

                            <!-- Row 3:     8 0 -->
                            <span></span><span></span><span>8</span><span>0</span>
                            <span class="border-r-2 border-slate-800 h-full"></span>
                            <span></span><span></span><span></span>

                            <!-- Row 4:       0 -->
                            <span></span><span></span><span></span><span>0</span>
                            <span class="border-r-2 border-slate-800 h-full"></span>
                            <span></span><span></span><span></span>
                        </div>
                        <div class="text-slate-700 text-lg md:text-xl space-y-2 font-medium">
                            <p class="font-bold text-blue-800">Các bước thực hiện phép chia 2,48 : 1,6:</p>
                            <p>• Phần thập phân của số <strong>1,6</strong> có <strong>một chữ số</strong>.</p>
                            <p>• Chuyển dấu phẩy của số <strong>2,48</strong> sang bên phải một chữ số được <strong>24,8</strong>; bỏ dấu phẩy ở số <strong>1,6</strong> được <strong>16</strong>.</p>
                            <p>• Thực hiện phép chia <strong>24,8 : 16</strong>.</p>
                            <p>• 24 chia 16 được 1, viết 1; dư 8. Viết dấu phẩy vào thương. Hạ 8 được 88. 88 chia 16 được 5, viết 5; dư 8. Thêm 0 được 80. 80 chia 16 được 5, viết 5; dư 0.</p>
                            <p class="text-green-700 font-bold">➜ Kết quả: 2,48 : 1,6 = 1,55 (kg).</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Khám phá ví dụ b -->
            <div class="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl space-y-6">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center text-xl md:text-3xl font-black shadow-inner">b</div>
                    <h3 class="text-xl md:text-2xl font-black text-blue-900">Ví dụ 2: Thực hiện phép tính 5,4 : 0,25</h3>
                </div>
                
                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <div class="flex flex-col lg:flex-row gap-8 items-center">
                        <div class="grid font-mono font-black text-xl bg-white p-6 rounded-2xl border border-slate-200 shadow-inner" style="grid-template-columns: repeat(4, 30px) 4px repeat(4, 30px); gap: 2px;">
                            <!-- Row 1: 5 4 0 | 0,25 -->
                            <span>5</span><span class="text-red-500 line-through">,</span><span>4</span><span>0</span>
                            <span class="border-r-2 border-slate-800 h-full"></span>
                            <span>0</span><span class="text-red-500 line-through">,</span><span>2</span><span>5</span>

                            <!-- Row 2: 0 4 0 | 21,6 -->
                            <span>0</span><span>4</span><span>0</span><span></span>
                            <span class="border-r-2 border-slate-800 h-full border-t-2 border-t-slate-800"></span>
                            <span class="border-t-2 border-t-slate-800">2</span><span class="border-t-2 border-t-slate-800">1</span><span class="border-t-2 border-t-slate-800">,</span><span class="border-t-2 border-t-slate-800">6</span>

                            <!-- Row 3:   1 5 0 -->
                            <span></span><span>1</span><span>5</span><span>0</span>
                            <span class="border-r-2 border-slate-800 h-full"></span>
                            <span></span><span></span><span></span><span></span>

                            <!-- Row 4:       0 -->
                            <span></span><span></span><span></span><span>0</span>
                            <span class="border-r-2 border-slate-800 h-full"></span>
                            <span></span><span></span><span></span><span></span>
                        </div>
                        <div class="text-slate-700 text-lg md:text-xl space-y-2 font-medium">
                            <p class="font-bold text-blue-800">Các bước thực hiện phép chia 5,4 : 0,25:</p>
                            <p>• Phần thập phân của số <strong>0,25</strong> có <strong>hai chữ số</strong>.</p>
                            <p>• Chuyển dấu phẩy của số <strong>5,4</strong> sang bên phải hai chữ số và viết thêm một chữ số 0 được <strong>540</strong>; bỏ dấu phẩy ở số <strong>0,25</strong> được <strong>25</strong>.</p>
                            <p>• Thực hiện phép chia <strong>540 : 25</strong>.</p>
                            <p>• 54 chia 25 được 2, viết 2; dư 4. Hạ 0 được 40. 40 chia 25 được 1, viết 1; dư 15. Viết dấu phẩy vào thương. Thêm 0 được 150. 150 chia 25 được 6, viết 6; dư 0.</p>
                            <p class="text-green-700 font-bold">➜ Kết quả: 5,4 : 0,25 = 21,6.</p>
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
                    <p>Muốn chia một số thập phân cho một số thập phân ta làm như sau:</p>
                    <p>⭐ Đếm xem có bao nhiêu chữ số ở phần thập phân của số chia thì chuyển dấu phẩy ở số bị chia sang bên phải bấy nhiêu chữ số.</p>
                    <p>⭐ Nếu số chữ số ở phần thập phân của số bị chia ít hơn số chữ số ở phần thập phân của số chia thì ta viết thêm các chữ số 0 vào bên phải số bị chia cho đủ.</p>
                    <p>⭐ Bỏ dấu phẩy ở số chia rồi thực hiện phép chia như chia cho số tự nhiên.</p>
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
                    <button id="tab-btn-50-1" onclick="window.switchTab_50(1)" class="px-5 py-2.5 rounded-full font-black text-xs md:text-base transition-all bg-blue-600 text-white shadow">Bài 1</button>
                    <button id="tab-btn-50-2" onclick="window.switchTab_50(2)" class="px-5 py-2.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50">Bài 2</button>
                    <button id="tab-btn-50-3" onclick="window.switchTab_50(3)" class="px-5 py-2.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50">Bài 3</button>
                </div>
            </div>

            <!-- NỘI DUNG TỪNG TAB BÀI TẬP -->
            <div class="p-6 md:p-8 bg-white rounded-[2.5rem]">

                <!-- TAB 1: BÀI 1 -->
                <div id="tab-content-50-1" class="space-y-6 animate-in fade-in duration-300">
                    <div class="glass-card p-6 md:p-8 rounded-[2.5rem] bg-white shadow-2xl border border-slate-50 relative overflow-hidden flex flex-col justify-between min-h-[550px]">
                        <div>
                            <!-- Tiêu đề + Nút điều khiển -->
                            <div class="flex items-center justify-between mb-6 flex-wrap gap-4">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">1</div>
                                    <h3 class="text-xl md:text-3xl font-black text-blue-900 uppercase">Bài 1. Hoạt động: Đặt tính rồi tính</h3>
                                </div>
                                <div class="flex items-center gap-2">
                                    <button onclick="window.toggleSolution('sol-50-1')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                                </div>
                            </div>

                            <!-- Tab phụ chuyển câu hỏi Hoạt động -->
                            <div class="flex gap-2 mb-6 border-b border-slate-200 pb-2">
                                <button type="button" id="tab-act-a" onclick="window.switchActivityTab('a')" class="px-4 py-2 text-sm md:text-base font-black rounded-lg transition-all bg-blue-600 text-white shadow">Phép tính a</button>
                                <button type="button" id="tab-act-b" onclick="window.switchActivityTab('b')" class="px-4 py-2 text-sm md:text-base font-black rounded-lg transition-all text-blue-600 hover:bg-blue-100/50">Phép tính b</button>
                                <button type="button" id="tab-act-c" onclick="window.switchActivityTab('c')" class="px-4 py-2 text-sm md:text-base font-black rounded-lg transition-all text-blue-600 hover:bg-blue-100/50">Phép tính c</button>
                            </div>

                            <!-- Nội dung các phép tính -->
                            <div class="font-mono text-slate-700 font-black">
                                <!-- CÂU A: 48,3 : 3,5 = 13,8 -->
                                <div id="content-act-a" class="animate-in fade-in duration-300 flex flex-col items-center">
                                    <h4 class="text-lg md:text-2xl font-black text-blue-700 mb-4">a) 48,3 : 3,5</h4>
                                    <div class="flex flex-col items-center justify-center font-mono py-6 bg-slate-50 border border-slate-200 rounded-3xl w-full max-w-[450px] shadow-inner">
                                        <div class="grid gap-2 items-center justify-items-center" style="grid-template-columns: 40px 40px 40px 40px 24px 40px 40px 40px; gap: 4px;">
                                            <!-- Hàng 1: 4 8 3 _ | 3 5 -->
                                            <input type="text" id="ans-50-1-a-r1c1" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-a-r1c2" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-a-r1c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <span></span>
                                            <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                            <input type="text" id="ans-50-1-a-r1c5" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border-b-4 border-b-slate-800" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-a-r1c6" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border-b-4 border-b-slate-800" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <span></span>

                                            <!-- Hàng 2: 1 3 3 _ | 1 3 , 8 -->
                                            <input type="text" id="ans-50-1-a-r2c1" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-a-r2c2" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-a-r2c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <span></span>
                                            <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                            <input type="text" id="ans-50-1-a-r2c5" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-a-r2c6" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-a-r2c8" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">

                                            <!-- Hàng 3: _ 2 8 0 | -->
                                            <input type="text" id="ans-50-1-a-r3c1" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-a-r3c2" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-a-r3c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-a-r3c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                            <span></span><span></span><span></span>

                                            <!-- Hàng 4: _ _ _ 0 | -->
                                            <span></span>
                                            <span></span>
                                            <input type="text" id="ans-50-1-a-r4c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-a-r4c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                            <span></span><span></span><span></span>
                                        </div>
                                    </div>
                                </div>

                                <!-- CÂU B: 144,55 : 3,5 = 41,3 -->
                                <div id="content-act-b" class="hidden animate-in fade-in duration-300 flex flex-col items-center">
                                    <h4 class="text-lg md:text-2xl font-black text-blue-700 mb-4">b) 144,55 : 3,5</h4>
                                    <div class="flex flex-col items-center justify-center font-mono py-6 bg-slate-50 border border-slate-200 rounded-3xl w-full max-w-[500px] shadow-inner">
                                        <div class="grid gap-2 items-center justify-items-center" style="grid-template-columns: 40px 40px 40px 40px 40px 24px 40px 40px 40px; gap: 4px;">
                                            <!-- Hàng 1: 1 4 4 5 , 5 | 3 5 -->
                                            <input type="text" id="ans-50-1-b-r1c1" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-b-r1c2" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-b-r1c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-b-r1c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-b-r1c6" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                            <input type="text" id="ans-50-1-b-r1c8" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border-b-4 border-b-slate-800" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-b-r1c9" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border-b-4 border-b-slate-800" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <span></span>

                                            <!-- Hàng 2:     4 5 | 4 1 , 3 -->
                                            <span></span>
                                            <input type="text" id="ans-50-1-b-r2c2" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-b-r2c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-b-r2c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <span></span>
                                            <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                            <input type="text" id="ans-50-1-b-r2c8" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-b-r2c9" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-b-r2c11" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">

                                            <!-- Hàng 3:     1 0   5 | -->
                                            <span></span>
                                            <span></span>
                                            <input type="text" id="ans-50-1-b-r3c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-b-r3c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <span></span>
                                            <input type="text" id="ans-50-1-b-r3c6" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                            <span></span><span></span><span></span>

                                            <!-- Hàng 4:           0 | -->
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <input type="text" id="ans-50-1-b-r4c5" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-b-r4c6" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                            <span></span><span></span><span></span>
                                        </div>
                                    </div>
                                </div>

                                <!-- CÂU C: 3 : 0,25 = 12 -->
                                <div id="content-act-c" class="hidden animate-in fade-in duration-300 flex flex-col items-center">
                                    <h4 class="text-lg md:text-2xl font-black text-blue-700 mb-4">c) 3 : 0,25</h4>
                                    <div class="flex flex-col items-center justify-center font-mono py-6 bg-slate-50 border border-slate-200 rounded-3xl w-full max-w-[450px] shadow-inner">
                                        <div class="grid gap-2 items-center justify-items-center" style="grid-template-columns: 40px 40px 40px 24px 40px 40px; gap: 4px;">
                                            <!-- Hàng 1: 3 0 0 | 2 5 -->
                                            <input type="text" id="ans-50-1-c-r1c1" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-c-r1c2" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-c-r1c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                            <input type="text" id="ans-50-1-c-r1c5" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border-b-4 border-b-slate-800" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-c-r1c6" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border-b-4 border-b-slate-800" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">

                                            <!-- Hàng 2:   5 0 | 1 2 -->
                                            <input type="text" id="ans-50-1-c-r2c1" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-c-r2c2" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-c-r2c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                            <input type="text" id="ans-50-1-c-r2c5" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-c-r2c6" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">

                                            <!-- Hàng 3:     0 | -->
                                            <span></span>
                                            <input type="text" id="ans-50-1-c-r3c2" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <input type="text" id="ans-50-1-c-r3c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Box bài giải ẩn -->
                            <div id="sol-50-1" class="hidden mt-6 p-6 bg-sky-50 rounded-2xl border border-sky-200 text-lg md:text-2xl font-medium text-slate-700 w-full mx-auto">
                                <p class="font-bold text-blue-800 mb-3 text-center">✍️ Đáp án chi tiết đặt tính:</p>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-black">
                                    <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                        <p class="text-sm text-blue-600 mb-4 font-bold">Phép tính a</p>
                                        <div class="flex flex-col items-center font-mono py-2 w-full">
                                            <div class="grid gap-x-0 gap-y-1 items-center justify-items-center text-xl md:text-2xl font-black" style="grid-template-columns: 28px 28px 28px 28px 16px 28px 28px 16px 28px;">
                                                <span>4</span><span>8</span><span>3</span><span></span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">3</span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">5</span>
                                                <span class="w-full"></span><span class="w-full"></span>
                                                
                                                <span>1</span><span>3</span><span>3</span><span></span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span>1</span><span>3</span><span>,</span><span>8</span>
                                                
                                                <span></span><span>2</span><span>8</span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span><span></span>
                                                
                                                <span></span><span></span><span></span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span><span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                        <p class="text-sm text-blue-600 mb-4 font-bold">Phép tính b</p>
                                        <div class="flex flex-col items-center font-mono py-2 w-full">
                                            <div class="grid gap-x-0 gap-y-1 items-center justify-items-center text-xl md:text-2xl font-black" style="grid-template-columns: 28px 28px 28px 28px 16px 28px 16px 28px 28px 16px 28px;">
                                                <span>1</span><span>4</span><span>4</span><span>5</span><span>,</span><span>5</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">3</span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">5</span>
                                                <span class="w-full"></span><span class="w-full"></span>
                                                
                                                <span></span><span></span><span>4</span><span>5</span><span></span><span></span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span>4</span><span>1</span><span>,</span><span>3</span>
                                                
                                                <span></span><span></span><span>1</span><span>0</span><span></span><span>5</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span><span></span>
                                                
                                                <span></span><span></span><span></span><span></span><span></span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span><span></span><span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                        <p class="text-sm text-blue-600 mb-4 font-bold">Phép tính c</p>
                                        <div class="flex flex-col items-center font-mono py-2 w-full">
                                            <div class="grid gap-x-0 gap-y-1 items-center justify-items-center text-xl md:text-2xl font-black" style="grid-template-columns: 28px 28px 28px 16px 28px 28px;">
                                                <span>3</span><span>0</span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">2</span>
                                                <span class="border-b-2 border-slate-800 w-full text-center">5</span>
                                                
                                                <span></span><span>5</span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span>1</span><span>2</span>
                                                
                                                <span></span><span></span><span>0</span>
                                                <span class="border-r-2 border-slate-800 h-full w-0"></span>
                                                <span></span><span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end mt-6">
                                <button id="btn-check-50-1" onclick="window.check_50_1()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- TAB 2: BÀI 2 -->
                <div id="tab-content-50-2" class="space-y-6 hidden animate-in fade-in duration-300">
                    <div class="glass-card p-6 md:p-8 rounded-[2.5rem] bg-white shadow-2xl border border-slate-50 relative overflow-hidden flex flex-col justify-between min-h-[550px]">
                        <div>
                            <div class="flex items-center justify-between mb-6 flex-wrap gap-4">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">2</div>
                                    <h3 class="text-xl md:text-3xl font-black text-blue-900 uppercase">Bài 2. Tính số lượng kẹo</h3>
                                </div>
                                <button onclick="window.toggleSolution('sol-50-2')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                            </div>

                            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                <div class="lg:col-span-4 flex justify-center">
                                    <div class="p-6 bg-blue-50 border border-blue-100 rounded-3xl flex flex-col items-center justify-center w-full max-w-[320px] shadow-sm">
                                        <span class="text-6xl mb-4">🦖</span>
                                        <span class="text-sm font-bold text-blue-800 text-center">Nha sĩ nhổ 4 răng sâu cho rồng</span>
                                    </div>
                                </div>

                                <div class="lg:col-span-8 space-y-6">
                                    <p class="text-slate-800 text-xl md:text-3xl font-bold leading-relaxed">
                                        Một chú rồng nhỏ nhổ 4 chiếc răng sâu và trả cho nha sĩ <span class="text-blue-600">15,4 kg kẹo</span>. Biết số kẹo phải trả khi nhổ mỗi chiếc răng sâu là như nhau.
                                    </p>
                                    <p class="text-slate-800 text-xl md:text-3xl font-bold leading-relaxed">
                                        Để nhổ mỗi chiếc răng sâu, chú rồng phải trả bao nhiêu ki-lô-gam kẹo?
                                    </p>

                                    <div class="p-6 bg-slate-50 border border-slate-200 rounded-3xl shadow-inner">
                                        <div class="flex items-center flex-nowrap whitespace-nowrap overflow-x-auto gap-3 text-lg md:text-2xl font-black text-slate-800">
                                            <span>Đáp số:</span>
                                            <input type="text" id="ans-50-2-result" class="w-36 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-white md:text-2xl" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 46px !important;" placeholder="">
                                            <span class="text-blue-800">kg kẹo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="sol-50-2" class="hidden mt-6 p-5 bg-sky-50 rounded-2xl border border-sky-200 text-lg md:text-2xl font-medium text-slate-700 w-full mx-auto">
                            <h4 class="text-sm md:text-base font-black text-blue-800 mb-2">Tóm tắt & Bài giải chi tiết:</h4>
                            <p class="text-xs md:text-sm text-slate-900 leading-relaxed font-semibold whitespace-pre-line">
                                Nhổ 4 chiếc răng hết: 15,4 kg kẹo.
                                Nhổ 1 chiếc răng hết: ... kg kẹo?
                                
                                Bài giải:
                                Để nhổ mỗi chiếc răng sâu chú rồng phải trả số ki-lô-gam kẹo là:
                                  15,4 : 4 = 3,85 (kg)
                                Đáp số: 3,85 kg kẹo.
                            </p>
                        </div>

                        <div class="flex justify-end mt-4">
                            <button id="btn-check-50-2" onclick="window.check_50_2()" class="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                        </div>
                    </div>
                </div>

                <!-- TAB 3: BÀI 3 -->
                <div id="tab-content-50-3" class="space-y-6 hidden animate-in fade-in duration-300">
                    <div class="glass-card p-6 md:p-8 rounded-[2.5rem] bg-white shadow-2xl border border-slate-50 relative overflow-hidden flex flex-col justify-between min-h-[550px]">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">3</div>
                                    <h3 class="text-xl md:text-3xl font-black text-blue-900 uppercase">Bài 3. Tính chiều dài nhà kính</h3>
                                </div>
                                <button onclick="window.toggleSolution('sol-50-3')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                            </div>

                            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                <div class="lg:col-span-4 flex justify-center">
                                    <div class="p-6 bg-emerald-50 border border-emerald-100 rounded-3xl flex flex-col items-center justify-center w-full max-w-[320px] shadow-sm">
                                        <span class="text-6xl mb-4">🥬</span>
                                        <span class="text-sm font-bold text-emerald-800 text-center">Mặt sàn hình chữ nhật: S = 292,8 m²</span>
                                    </div>
                                </div>

                                <div class="lg:col-span-8 space-y-6">
                                    <p class="text-slate-800 text-xl md:text-3xl font-bold leading-relaxed">
                                        Mặt sàn một nhà kính trồng rau dạng hình chữ nhật có diện tích <span class="text-emerald-600">292,8 m²</span> và chiều rộng <span class="text-blue-600">9,6 m</span>.
                                    </p>
                                    <p class="text-slate-800 text-xl md:text-3xl font-bold leading-relaxed">
                                        Tính chiều dài của mặt sàn nhà kính đó.
                                    </p>

                                    <div class="p-6 bg-slate-50 border border-slate-200 rounded-3xl shadow-inner">
                                        <div class="flex items-center flex-nowrap whitespace-nowrap overflow-x-auto gap-3 text-lg md:text-2xl font-black text-slate-800">
                                            <span>Đáp số:</span>
                                            <input type="text" id="ans-50-3-result" class="w-36 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-white md:text-2xl" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 46px !important;" placeholder="">
                                            <span class="text-emerald-800">m</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="sol-50-3" class="hidden mt-6 p-5 bg-sky-50 rounded-2xl border border-sky-200 text-lg md:text-2xl font-medium text-slate-700 w-full mx-auto">
                            <h4 class="text-sm md:text-base font-black text-blue-800 mb-2">Bài giải chi tiết:</h4>
                            <p class="text-xs md:text-sm text-slate-900 leading-relaxed font-semibold whitespace-pre-line">
                                Chiều dài của mặt sàn nhà kính đó là:
                                  292,8 : 9,6 = 30,5 (m)
                                Đáp số: 30,5 m.
                            </p>
                        </div>

                        <div class="flex justify-end mt-4">
                            <button id="btn-check-50-3" onclick="window.check_50_3()" class="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `,
    "quizPool": metadata.quizPool
};

// --- CÁC HÀM DIỀU HƯỚNG TAB & SUBTAB ---
window.switchTab_50 = function(tabIndex) {
    for (let i = 1; i <= 3; i++) {
        let content = document.getElementById('tab-content-50-' + i);
        if (content) content.classList.add('hidden');
        let btn = document.getElementById('tab-btn-50-' + i);
        if (btn) btn.className = "px-5 py-2.5 rounded-full font-black text-xs md:text-base transition-all text-blue-600 hover:bg-blue-100/50";
    }

    let activeContent = document.getElementById('tab-content-50-' + tabIndex);
    if (activeContent) activeContent.classList.remove('hidden');
    let activeBtn = document.getElementById('tab-btn-50-' + tabIndex);
    if (activeBtn) activeBtn.className = "px-5 py-2.5 rounded-full font-black text-xs md:text-base transition-all bg-blue-600 text-white shadow";
};

// Tab phụ chuyển câu hỏi Hoạt động 1
window.switchActivityTab = function(tabName) {
    const tabs = ['a', 'b', 'c'];
    tabs.forEach(t => {
        const btn = document.getElementById(`tab-act-${t}`);
        const cnt = document.getElementById(`content-act-${t}`);
        if (btn && cnt) {
            if (t === tabName) {
                btn.className = "px-4 py-2 text-sm md:text-base font-black rounded-lg transition-all bg-blue-600 text-white shadow";
                cnt.classList.remove('hidden');
            } else {
                btn.className = "px-4 py-2 text-sm md:text-base font-black rounded-lg transition-all text-blue-600 hover:bg-blue-100/50";
                cnt.classList.add('hidden');
            }
        }
    });
};

// --- CÁC HÀM KIỂM TRA ĐÁP ÁN ---
window.check_50_1 = function() {
    function getVal(id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : '';
    }
    function isCommaVal(val) {
        return val === ',' || val === '.';
    }

    // a) 48,3 : 3,5 = 13,8 -> 483 : 35 = 13,8
    var r1c1_a = getVal('ans-50-1-a-r1c1') === '4';
    var r1c2_a = getVal('ans-50-1-a-r1c2') === '8';
    var r1c3_a = getVal('ans-50-1-a-r1c3') === '3';
    var r1c5_a = getVal('ans-50-1-a-r1c5') === '3';
    var r1c6_a = getVal('ans-50-1-a-r1c6') === '5';

    var r2c1_a = getVal('ans-50-1-a-r2c1') === '1';
    var r2c2_a = getVal('ans-50-1-a-r2c2') === '3';
    var r2c3_a = getVal('ans-50-1-a-r2c3') === '3';
    var r2c5_a = getVal('ans-50-1-a-r2c5') === '1';
    var r2c6_a = getVal('ans-50-1-a-r2c6') === '3,' || getVal('ans-50-1-a-r2c6') === '3.';
    var r2c7_a = true;
    var r2c8_a = getVal('ans-50-1-a-r2c8') === '8';

    var r3c1_a = getVal('ans-50-1-a-r3c1') === '0' || getVal('ans-50-1-a-r3c1') === '';
    var r3c2_a = getVal('ans-50-1-a-r3c2') === '2';
    var r3c3_a = getVal('ans-50-1-a-r3c3') === '8';
    var r3c4_a = getVal('ans-50-1-a-r3c4') === '0';

    var r4c4_a = getVal('ans-50-1-a-r4c4') === '0' && (getVal('ans-50-1-a-r4c3') === '0' || getVal('ans-50-1-a-r4c3') === '');

    var aCorrect = r1c1_a && r1c2_a && r1c3_a && r1c5_a && r1c6_a &&
                 r2c1_a && r2c2_a && r2c3_a && r2c5_a && r2c6_a && r2c7_a && r2c8_a &&
                 r3c1_a && r3c2_a && r3c3_a && r3c4_a && r4c4_a;

    // b) 144,55 : 3,5 = 41,3 -> 1445,5 : 35 = 41,3
    var r1c1_b = getVal('ans-50-1-b-r1c1') === '1';
    var r1c2_b = getVal('ans-50-1-b-r1c2') === '4';
    var r1c3_b = getVal('ans-50-1-b-r1c3') === '4';
    var r1c4_b = getVal('ans-50-1-b-r1c4') === '5,' || getVal('ans-50-1-b-r1c4') === '5.';
    var r1c5_b = true;
    var r1c6_b = getVal('ans-50-1-b-r1c6') === '5';
    var r1c8_b = getVal('ans-50-1-b-r1c8') === '3';
    var r1c9_b = getVal('ans-50-1-b-r1c9') === '5';

    var r2c2_b = getVal('ans-50-1-b-r2c2') === '0' || getVal('ans-50-1-b-r2c2') === '';
    var r2c3_b = getVal('ans-50-1-b-r2c3') === '4';
    var r2c4_b = getVal('ans-50-1-b-r2c4') === '5';
    var r2c8_b = getVal('ans-50-1-b-r2c8') === '4';
    var r2c9_b = getVal('ans-50-1-b-r2c9') === '1,' || getVal('ans-50-1-b-r2c9') === '1.';
    var r2c10_b = true;
    var r2c11_b = getVal('ans-50-1-b-r2c11') === '3';

    var r3c3_b = getVal('ans-50-1-b-r3c3') === '1';
    var r3c4_b = getVal('ans-50-1-b-r3c4') === '0';
    var r3c6_b = getVal('ans-50-1-b-r3c6') === '5';

    var r4c6_b = getVal('ans-50-1-b-r4c6') === '0' && (getVal('ans-50-1-b-r4c5') === '0' || getVal('ans-50-1-b-r4c5') === '');

    var bCorrect = r1c1_b && r1c2_b && r1c3_b && r1c4_b && r1c5_b && r1c6_b && r1c8_b && r1c9_b &&
                 r2c2_b && r2c3_b && r2c4_b && r2c8_b && r2c9_b && r2c10_b && r2c11_b &&
                 r3c3_b && r3c4_b && r3c6_b && r4c6_b;

    // c) 3 : 0,25 = 12 -> 300 : 25 = 12
    var r1c1_c = getVal('ans-50-1-c-r1c1') === '3';
    var r1c2_c = getVal('ans-50-1-c-r1c2') === '0';
    var r1c3_c = getVal('ans-50-1-c-r1c3') === '0';
    var r1c5_c = getVal('ans-50-1-c-r1c5') === '2';
    var r1c6_c = getVal('ans-50-1-c-r1c6') === '5';

    var r2c1_c = getVal('ans-50-1-c-r2c1') === '0' || getVal('ans-50-1-c-r2c1') === '';
    var r2c2_c = getVal('ans-50-1-c-r2c2') === '5';
    var r2c3_c = getVal('ans-50-1-c-r2c3') === '0';
    var r2c5_c = getVal('ans-50-1-c-r2c5') === '1';
    var r2c6_c = getVal('ans-50-1-c-r2c6') === '2';

    var r3c3_c = getVal('ans-50-1-c-r3c3') === '0' && (getVal('ans-50-1-c-r3c2') === '0' || getVal('ans-50-1-c-r3c2') === '');

    var cCorrect = r1c1_c && r1c2_c && r1c3_c && r1c5_c && r1c6_c &&
                 r2c1_c && r2c2_c && r2c3_c && r2c5_c && r2c6_c &&
                 r3c3_c;

    var isCorrect = aCorrect && bCorrect && cCorrect;
    var rightAns = "a) 483 : 35 = 13,8\nb) 1445,5 : 35 = 41,3\nc) 300 : 25 = 12";
    var studentAns = isCorrect ? "Đúng hoàn toàn" : "Chưa đúng hoàn toàn";

    var meta = window.MATH_BUILDER_METADATA.bai_tap[0];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-50-1', 0, 3, (aCorrect?1:0) + (bCorrect?1:0) + (cCorrect?1:0));
    }
};

window.check_50_2 = function() {
    var resultVal = document.getElementById('ans-50-2-result').value.trim().replace(/,/g, '.');
    var isCorrect = (resultVal === '3.85' || resultVal === '3,85');

    var meta = window.MATH_BUILDER_METADATA.bai_tap[1];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, "3,85", resultVal, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-50-2', 0, 1, isCorrect ? 1 : 0);
    }
};

window.check_50_3 = function() {
    var resultVal = document.getElementById('ans-50-3-result').value.trim().replace(/,/g, '.');
    var isCorrect = (resultVal === '30.5' || resultVal === '30,5');

    var meta = window.MATH_BUILDER_METADATA.bai_tap[2];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, "30,5", resultVal, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-50-3', 0, 1, isCorrect ? 1 : 0);
    }
};
