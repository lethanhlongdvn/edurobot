const metadata = {
    "lessonInfo": {
        "period": "53",
        "week": "11",
        "topic": "Số thập phân",
        "title": "BÀI 24: LUYỆN TẬP CHUNG (TIẾT 1)",
        "desc": "Luyện tập các phép tính cộng, trừ, nhân, chia số thập phân; nhân, chia nhẩm với các số đặc biệt; so sánh các biểu thức chứa số thập phân; và giải bài toán thực tế về độ sâu."
    },
    "bai_tap": [
        {
            "id": "53_1",
            "type": "fill_multiple",
            "title": "Tính",
            "answers": [
                "2", "0", "6", "8",
                "4", "7", "0", "9",
                "3", "6", "5", "4", "3", "8", "4", "7", "4", "5",
                "1", "9", "1", "2", "3", "2", "8", "4", "3", "4", "0"
            ],
            "guidance": "Thực hiện phép tính đặt dọc: cộng, trừ thẳng cột dấu phẩy; nhân xếp thẳng hàng bên phải rồi đếm số chữ số phần thập phân; chia số thập phân bằng cách chuyển dịch dấu phẩy thích hợp.",
            "solution": "Kết quả đặt tính:<br>- a) 4,98 + 15,7 = 20,68<br>-<br>b) 52 - 4,91 = 47,09<br>-<br>c) 0,73 × 6,5 = 4,745<br>-<br>d) 104,89 : 8,5 = 12,34 (ta chuyển dấu phẩy sang phải 1 chữ số được 1048,9 : 85)."
        },
        {
            "id": "53_2",
            "type": "fill_multiple",
            "title": "Tính nhẩm",
            "answers": ["0,314", "314", "3,14", "314000"],
            "guidance": "Nhân với 0,1 dịch dấu phẩy sang trái 1 chữ số; nhân với 100 dịch sang phải 2 chữ số; chia cho 10 dịch sang trái 1 chữ số; chia cho 0,001 tương đương nhân với 1 000.",
            "solution": "Kết quả tính nhẩm:<br>- 3,14 × 0,1 = 0,314<br>- 3,14 × 100 = 314<br>- 31,4 : 10 = 3,14<br>- 314 : 0,001 = 314 × 1 000 = 314 000."
        },
        {
            "id": "53_3",
            "type": "fill_multiple",
            "title": "So sánh biểu thức",
            "answers": ["=", "=", "="],
            "guidance": "Áp dụng tính chất giao hoán (a × b = b × a), tính chất kết hợp ((a ×<br>b) × c = a × (b ×<br>c)) và tính chất phân phối để so sánh nhanh mà không cần tính cụ thể kết quả.",
            "solution": "Kết quả so sánh:<br>- a) 2,5 × 6,1 = 6,1 × 2,5 (tính chất giao hoán).<br>-<br>b) (15 × 6) × 0,25 = 15 × (6 × 0,25) (tính chất kết hợp).<br>-<br>c) (5,3 + 4,7) × 0,1 = 5,3 × 0,1 + 4,7 × 0,1 (tính chất phân phối của phép nhân đối với phép cộng)."
        },
        {
            "id": "53_4",
            "type": "fill_multiple",
            "title": "Giải toán chồn đào hố",
            "answers": ["0,41"],
            "guidance": "Tìm độ sâu của cái lỗ bằng cách lấy khoảng cách mía rơi cộng chiều dài khúc mía. Sau đó tìm số mét cần đào thêm.",
            "solution": "Bài giải chi tiết:<br>Chiều sâu của cái lỗ là:<br>  1,06 + 0,25 = 1,31 (m)<br>Số mét chồn còn phải đào sâu thêm là:<br>  1,31 - 0,9 = 0,41 (m)<br>Đáp số: 0,41 m."
        }
    ],
    "quizPool": [
        { "question": "Tính nhẩm: 4,5 × 0,1 = ?", "options": ["0,45", "45", "0,045", "4,5"], "answer": 0 },
        { "question": "Tính nhẩm: 3,14 × 100 = ?", "options": ["314", "31,4", "3140", "0,314"], "answer": 0 },
        { "question": "Tính nhẩm: 8,2 : 10 = ?", "options": ["0,82", "82", "0,082", "8,2"], "answer": 0 },
        { "question": "Tính nhẩm: 25 : 0,001 = ?", "options": ["25000", "250", "2500", "0,025"], "answer": 0 },
        { "question": "Tính: 1,5 + 2,75 = ?", "options": ["4,25", "3,25", "4,15", "3,8"], "answer": 0 },
        { "question": "Tính: 10 - 4,8 = ?", "options": ["5,2", "6,2", "5,8", "4,2"], "answer": 0 },
        { "question": "Tính: 0,5 × 1,2 = ?", "options": ["0,6", "6", "0,06", "1,7"], "answer": 0 },
        { "question": "Tính: 1,2 : 0,4 = ?", "options": ["3", "0,3", "30", "1,6"], "answer": 0 },
        { "question": "So sánh biểu thức: 4,8 × 3,5 và 3,5 × 4,8", "options": ["=", ">", "<", "Không so sánh được"], "answer": 0 },
        { "question": "So sánh biểu thức: (2,5 + 7,5) × 0,4 và 2,5 × 0,4 + 7,5 × 0,4", "options": ["=", ">", "<", "Không so sánh được"], "answer": 0 },
        { "question": "Một cái hố sâu 1,2 m. Một cái lỗ sâu 1,75 m. Hỏi phải đào sâu thêm cái hố bao nhiêu mét để sâu bằng cái lỗ?", "options": ["0,55 m", "0,45 m", "0,65 m", "1,55 m"], "answer": 0 },
        { "question": "Biết 1 tạ = 10 yến. Đổi 4,5 tạ = ... yến.", "options": ["45 yến", "450 yến", "4,5 yến", "0,45 yến"], "answer": 0 },
        { "question": "Biết 1 kg = 1000 g. Đổi 0,25 kg = ... g.", "options": ["250 g", "25 g", "2500 g", "2,5 g"], "answer": 0 },
        { "question": "Tính nhẩm: 0,15 × 10 = ?", "options": ["1,5", "15", "0,015", "150"], "answer": 0 },
        { "question": "Một sợi dây dài 2,5 m được cắt ra làm 10 đoạn bằng nhau. Mỗi đoạn dài bao nhiêu mét?", "options": ["0,25 m", "25 cm", "Cả A và B đều đúng", "0,025 m"], "answer": 2 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson53 = {
    ...metadata.lessonInfo,
    metadata: metadata,
    quizPool: [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" style="display:flex; transition:transform 0.45s cubic-bezier(0.4,0,0.2,1);">  

                    <!-- Slide 1: Ôn tập quy tắc cộng, trừ, nhân, chia thập phân -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-700 to-sky-600 shadow-2xl relative overflow-hidden text-white font-sans">
                                <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                                <div class="absolute bottom-0 left-0 w-48 h-48 bg-sky-500/20 rounded-full -ml-10 -mb-10 blur-2xl"></div>
                                <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                    <div class="w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-md rounded-[2rem] flex items-center justify-center shadow-inner border border-white/30">
                                        <span class="text-5xl md:text-7xl">🧮</span>
                                    </div>
                                    <div class="text-center md:text-left">
                                        <h2 class="text-2xl md:text-4xl font-black mb-2 tracking-tight">LUYỆN TẬP CHUNG</h2>
                                        <p class="text-sky-100 text-lg md:text-2xl font-medium opacity-90">Tổng ôn tập các phép tính cộng, trừ, nhân, chia số thập phân và tính chất của phép toán!</p>
                                    </div>
                                </div>
                            </div>

                            <div class="p-8 rounded-[2.5rem] bg-white border-2 border-blue-700 relative overflow-hidden shadow-none">
                                <div class="flex items-center gap-4 mb-6">
                                    <div class="w-12 h-12 bg-blue-700 rounded-2xl flex items-center justify-center text-white text-xl md:text-3xl shadow-lg">
                                        <i class="fas fa-book-open"></i>
                                    </div>
                                    <h3 class="text-2xl md:text-4xl font-black text-blue-900">Bí kíp tính nhanh số thập phân</h3>
                                </div>

                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg lg:text-xl font-bold">
                                    <div class="p-6 bg-slate-50 border-2 border-blue-700 rounded-3xl space-y-3">
                                        <div class="text-blue-900 font-black border-b-2 border-blue-100 pb-2">➕ Phép Cộng & Trừ</div>
                                        <ul class="list-disc pl-5 space-y-1 text-slate-700">
                                            <li>Đặt tính thẳng cột các chữ số cùng hàng.</li>
                                            <li>Dấu phẩy ở kết quả phải thẳng cột với các dấu phẩy ở trên.</li>
                                        </ul>
                                    </div>

                                    <div class="p-6 bg-slate-50 border-2 border-blue-700 rounded-3xl space-y-3">
                                        <div class="text-blue-900 font-black border-b-2 border-blue-100 pb-2">✖️ Phép Nhân</div>
                                        <ul class="list-disc pl-5 space-y-1 text-slate-700">
                                            <li>Nhân như nhân các số tự nhiên.</li>
                                            <li>Đếm tổng số chữ số ở phần thập phân của cả 2 thừa số rồi dịch dấu phẩy ở tích.</li>
                                        </ul>
                                    </div>

                                    <div class="p-6 bg-slate-50 border-2 border-blue-700 rounded-3xl space-y-3">
                                        <div class="text-blue-900 font-black border-b-2 border-blue-100 pb-2">➗ Phép Chia</div>
                                        <ul class="list-disc pl-5 space-y-1 text-slate-700">
                                            <li>Dịch dấu phẩy ở số chia sang bên phải bao nhiêu chữ số thì cũng dịch dấu phẩy ở số bị chia sang bấy nhiêu chữ số.</li>
                                            <li>Thực hiện phép chia như chia số tự nhiên.</li>
                                        </ul>
                                    </div>

                                    <div class="p-6 bg-slate-50 border-2 border-blue-700 rounded-3xl space-y-3">
                                        <div class="text-blue-900 font-black border-b-2 border-blue-100 pb-2">⚡ Tính chất giao hoán, kết hợp</div>
                                        <ul class="list-disc pl-5 space-y-1 text-slate-700">
                                            <li>Giao hoán: \(a \times b = b \times a\)</li>
                                            <li>Kết hợp: \((a \times b) \times c = a \times (b \times c)\)</li>
                                            <li>Phân phối: \((a + b) \times c = a \times c + b \times c\)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12 text-xl md:text-3xl">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" style="display:flex; transition:transform 0.45s cubic-bezier(0.4,0,0.2,1);">  

                    <!-- Trang 1: Bài 1 (Đặt tính rồi tính) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-6 w-full">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">1</div>
                                <h3 class="text-lg md:text-2xl lg:text-3xl text-blue-900 font-black uppercase tracking-tighter">Bài 1: Đặt tính rồi tính</h3>
                            </div>

                            <div class="flex flex-col gap-8 w-full">
                                <!-- Phép tính a: 4,98 + 15,7 -->
                                <div class="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] flex flex-col items-center justify-center w-full">
                                    <div class="text-lg md:text-2xl font-black text-slate-700 mb-2">a) 4,98 + 15,7</div>
                                    <div class="grid gap-x-1 gap-y-2 items-center justify-items-center font-mono py-2" style="grid-template-columns: 24px 40px 40px 16px 40px 40px;">
                                        <span></span>
                                        <span></span>
                                        <span>4</span>
                                        <span>,</span>
                                        <span>9</span>
                                        <span>8</span>
                                        <span class="text-xl font-black text-slate-700">+</span>
                                        <span>1</span>
                                        <span>5</span>
                                        <span>,</span>
                                        <span>7</span>
                                        <span></span>
                                        <span class="border-b-4 border-slate-850 w-full col-span-6 my-1"></span>
                                        <span></span>
                                        <input type="text" id="ans-53-1-a1" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                        <input type="text" id="ans-53-1-a2" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                        <span>,</span>
                                        <input type="text" id="ans-53-1-a3" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                        <input type="text" id="ans-53-1-a4" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                    </div>
                                </div>

                                <!-- Phép tính b: 52 - 4,91 -->
                                <div class="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] flex flex-col items-center justify-center w-full">
                                    <div class="text-lg md:text-2xl font-black text-slate-700 mb-2">b) 52 - 4,91</div>
                                    <div class="grid gap-x-1 gap-y-2 items-center justify-items-center font-mono py-2" style="grid-template-columns: 24px 40px 40px 16px 40px 40px;">
                                        <span></span>
                                        <span>5</span>
                                        <span>2</span>
                                        <span>,</span>
                                        <span class="text-slate-300">0</span>
                                        <span class="text-slate-300">0</span>
                                        <span class="text-xl font-black text-slate-700">-</span>
                                        <span></span>
                                        <span>4</span>
                                        <span>,</span>
                                        <span>9</span>
                                        <span>1</span>
                                        <span class="border-b-4 border-slate-850 w-full col-span-6 my-1"></span>
                                        <span></span>
                                        <input type="text" id="ans-53-1-b1" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                        <input type="text" id="ans-53-1-b2" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                        <span>,</span>
                                        <input type="text" id="ans-53-1-b3" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                        <input type="text" id="ans-53-1-b4" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                    </div>
                                </div>

                                <!-- Phép tính c: 0,73 x 6,5 -->
                                <div class="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] flex flex-col items-center justify-center w-full">
                                    <div class="text-lg md:text-2xl font-black text-slate-700 mb-2">c) 0,73 × 6,5</div>
                                    <div class="grid gap-x-1 gap-y-1 items-center justify-items-center font-mono py-2" style="grid-template-columns: 24px 40px 40px 40px 40px;">
                                        <!-- Thừa số 1: 0,73 -->
                                        <span></span>
                                        <span></span>
                                        <span>0,</span>
                                        <span>7</span>
                                        <span>3</span>

                                        <!-- Thừa số 2: 6,5 -->
                                        <span class="text-xl font-black text-slate-700">×</span>
                                        <span></span>
                                        <span></span>
                                        <span>6,</span>
                                        <span>5</span>

                                        <!-- Đường gạch ngang thừa số -->
                                        <span class="border-b-4 border-slate-850 w-full col-span-5 my-1"></span>

                                        <!-- Tích riêng thứ nhất (365) -->
                                        <span></span>
                                        <span></span>
                                        <input type="text" id="ans-53-1-c1" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                        <input type="text" id="ans-53-1-c2" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                        <input type="text" id="ans-53-1-c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">

                                        <!-- Tích riêng thứ hai (438 - lùi 1 cột) -->
                                        <span></span>
                                        <input type="text" id="ans-53-1-c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                        <input type="text" id="ans-53-1-c5" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                        <input type="text" id="ans-53-1-c6" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                        <span></span>

                                        <!-- Đường gạch ngang tích riêng -->
                                        <span class="border-b-2 border-slate-850 w-full col-span-5 my-1"></span>

                                        <!-- Tích chung (4,745) -->
                                        <div class="flex items-center" style="grid-column: 2;">
                                            <input type="text" id="ans-53-1-c7" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                            <span class="text-sm font-black">,</span>
                                        </div>
                                        <input type="text" id="ans-53-1-c8" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important; grid-column: 3;" placeholder="?">
                                        <input type="text" id="ans-53-1-c9" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important; grid-column: 4;" placeholder="?">
                                        <input type="text" id="ans-53-1-c10" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important; grid-column: 5;" placeholder="?">
                                    </div>
                                </div>

                                <!-- Phép tính d: 104,89 : 8,5 -->
                                <div class="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] flex flex-col items-center justify-center w-full">
                                    <div class="text-lg md:text-2xl font-black text-slate-700 mb-2">d) 104,89 : 8,5 → 1048,9 : 85</div>
                                    <div class="grid gap-x-1 gap-y-2 items-center justify-items-center font-mono py-2" style="grid-template-columns: 40px 40px 40px 40px 16px 40px 40px 24px 40px 40px 16px 40px 40px;">
                                        
                                        <!-- Đường vách ngăn dọc phép chia kéo dài 5 hàng -->
                                        <div class="border-r-4 border-slate-855 h-full w-0" style="grid-row: 1 / span 5; grid-column: 8;"></div>

                                        <!-- Row 1: Số bị chia | Số chia -->
                                        <span style="grid-row: 1; grid-column: 1;">1</span>
                                        <span style="grid-row: 1; grid-column: 2;">0</span>
                                        <span style="grid-row: 1; grid-column: 3;">4</span>
                                        <span style="grid-row: 1; grid-column: 4;">8</span>
                                        <span style="grid-row: 1; grid-column: 5;">,</span>
                                        <span style="grid-row: 1; grid-column: 6;">9</span>
                                        <span style="grid-row: 1; grid-column: 7;"></span>
                                        
                                        <span style="grid-row: 1; grid-column: 9;" class="border-b-4 border-slate-850 w-full text-center font-black">8</span>
                                        <span style="grid-row: 1; grid-column: 10;" class="border-b-4 border-slate-850 w-full text-center font-black">5</span>

                                        <!-- Row 2: Số dư 1 + Hạ 8 | Thương nằm trên 1 hàng duy nhất -->
                                        <input type="text" id="ans-53-1-d1" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important; grid-row: 2; grid-column: 2;" placeholder="?">
                                        <input type="text" id="ans-53-1-d2" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important; grid-row: 2; grid-column: 3;" placeholder="?">
                                        <span style="grid-row: 2; grid-column: 4;">8</span>
                                        
                                        <!-- Thương: 12,34 tất cả đều ở grid-row: 2 -->
                                        <input type="text" id="ans-53-1-d3" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important; grid-row: 2; grid-column: 9;" placeholder="?">
                                        <input type="text" id="ans-53-1-d4" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important; grid-row: 2; grid-column: 10;" placeholder="?">
                                        <span style="grid-row: 2; grid-column: 11;" class="font-black">,</span>
                                        <input type="text" id="ans-53-1-d5" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important; grid-row: 2; grid-column: 12;" placeholder="?">
                                        <input type="text" id="ans-53-1-d8" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important; grid-row: 2; grid-column: 13;" placeholder="?">

                                        <!-- Row 3: Số dư 2 + Hạ 9 -->
                                        <input type="text" id="ans-53-1-d6" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important; grid-row: 3; grid-column: 3;" placeholder="?">
                                        <input type="text" id="ans-53-1-d7" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important; grid-row: 3; grid-column: 4;" placeholder="?">
                                        <span style="grid-row: 3; grid-column: 6;">9</span>

                                        <!-- Row 4: Số dư 3 + Hạ 0 -->
                                        <input type="text" id="ans-53-1-d9" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important; grid-row: 4; grid-column: 4;" placeholder="?">
                                        <input type="text" id="ans-53-1-d10" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important; grid-row: 4; grid-column: 6;" placeholder="?">
                                        <span style="grid-row: 4; grid-column: 7;">0</span>

                                        <!-- Row 5: Dư cuối -->
                                        <input type="text" id="ans-53-1-d11" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important; grid-row: 5; grid-column: 7;" placeholder="?">
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end mt-4">
                                <button id="btn-check-53-1" onclick="window.check_53_1()" class="w-16 h-16 bg-blue-600 border-2 border-blue-700 text-white rounded-[1.25rem] font-black text-2xl md:text-4xl flex items-center justify-center hover:bg-blue-700 transition-all active:scale-95">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Trang 2: Bài 2 (Tính nhẩm) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-4 w-full">
                            <div class="flex items-center justify-between mb-2">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-700 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">2</div>
                                    <h3 class="text-lg md:text-2xl lg:text-3xl text-blue-900 font-black uppercase tracking-tighter">Tính nhẩm</h3>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 w-full">
                                <div class="p-4 bg-sky-50/50 rounded-2xl border-2 border-sky-700 flex items-center justify-start gap-4 font-black text-xl md:text-2xl flex-nowrap whitespace-nowrap overflow-x-auto w-full">
                                    <span>3,14 × 0,1 =</span>
                                    <input id="ans-53-2-1" type="text" class="w-36 h-12 border-2 border-sky-300 rounded-xl text-center text-sky-900 bg-white outline-none focus:border-sky-600" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                </div>

                                <div class="p-4 bg-sky-50/50 rounded-2xl border-2 border-sky-700 flex items-center justify-start gap-4 font-black text-xl md:text-2xl flex-nowrap whitespace-nowrap overflow-x-auto w-full">
                                    <span>3,14 × 100 =</span>
                                    <input id="ans-53-2-2" type="text" class="w-36 h-12 border-2 border-sky-300 rounded-xl text-center text-sky-900 bg-white outline-none focus:border-sky-600" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                </div>

                                <div class="p-4 bg-sky-50/50 rounded-2xl border-2 border-sky-700 flex items-center justify-start gap-4 font-black text-xl md:text-2xl flex-nowrap whitespace-nowrap overflow-x-auto w-full">
                                    <span>31,4 : 10 =</span>
                                    <input id="ans-53-2-3" type="text" class="w-36 h-12 border-2 border-sky-300 rounded-xl text-center text-sky-900 bg-white outline-none focus:border-sky-600" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                </div>

                                <div class="p-4 bg-sky-50/50 rounded-2xl border-2 border-sky-700 flex items-center justify-start gap-4 font-black text-xl md:text-2xl flex-nowrap whitespace-nowrap overflow-x-auto w-full">
                                    <span>314 : 0,001 =</span>
                                    <input id="ans-53-2-4" type="text" class="w-36 h-12 border-2 border-sky-300 rounded-xl text-center text-sky-900 bg-white outline-none focus:border-sky-600" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                </div>
                            </div>

                            <div class="flex justify-end mt-4">
                                <button id="btn-check-53-2" onclick="window.check_53_2()" class="w-16 h-16 bg-blue-600 border-2 border-blue-700 text-white rounded-[1.25rem] font-black text-2xl md:text-4xl flex items-center justify-center hover:bg-blue-700 transition-all active:scale-95">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Trang 3: Bài 3 (So sánh) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-4 w-full">
                            <div class="flex items-center justify-between mb-2">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-700 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">3</div>
                                    <h3 class="text-lg md:text-2xl lg:text-3xl text-blue-900 font-black uppercase tracking-tighter">Điền dấu &gt;; &lt;; =</h3>
                                </div>
                            </div>

                            <div class="space-y-6 py-4 w-full">
                                <div class="p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl flex items-center justify-start gap-4 font-black text-xl md:text-2xl flex-nowrap whitespace-nowrap overflow-x-auto w-full">
                                    <span>a) 2,5 × 6,1</span>
                                    <select id="sel-53-3-a" class="w-24 h-12 border-2 border-blue-700 rounded-xl text-center text-xl font-black text-blue-800 bg-white">
                                        <option value="">?</option>
                                        <option value=">">&gt;</option>
                                        <option value="<">&lt;</option>
                                        <option value="=">=</option>
                                    </select>
                                    <span>6,1 × 2,5</span>
                                </div>

                                <div class="p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl flex items-center justify-start gap-4 font-black text-xl md:text-2xl flex-nowrap whitespace-nowrap overflow-x-auto w-full">
                                    <span>b) (15 × 6) × 0,25</span>
                                    <select id="sel-53-3-b" class="w-24 h-12 border-2 border-blue-700 rounded-xl text-center text-xl font-black text-blue-800 bg-white">
                                        <option value="">?</option>
                                        <option value=">">&gt;</option>
                                        <option value="<">&lt;</option>
                                        <option value="=">=</option>
                                    </select>
                                    <span>15 × (6 × 0,25)</span>
                                </div>

                                <div class="p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl flex items-center justify-start gap-4 font-black text-xl md:text-2xl flex-nowrap whitespace-nowrap overflow-x-auto w-full">
                                    <span>c) (5,3 + 4,7) × 0,1</span>
                                    <select id="sel-53-3-c" class="w-24 h-12 border-2 border-blue-700 rounded-xl text-center text-xl font-black text-blue-800 bg-white">
                                        <option value="">?</option>
                                        <option value=">">&gt;</option>
                                        <option value="<">&lt;</option>
                                        <option value="=">=</option>
                                    </select>
                                    <span>5,3 × 0,1 + 4,7 × 0,1</span>
                                </div>
                            </div>

                            <div class="flex justify-end mt-4">
                                <button id="btn-check-53-3" onclick="window.check_53_3()" class="w-16 h-16 bg-blue-600 border-2 border-blue-700 text-white rounded-[1.25rem] font-black text-2xl md:text-4xl flex items-center justify-center hover:bg-blue-700 transition-all active:scale-95">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Trang 4: Bài 4 (Giải toán chồn đào hố) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-6 w-full">
                            <div class="flex items-center justify-between mb-2">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">4</div>
                                    <h3 class="text-lg md:text-2xl lg:text-3xl text-blue-900 font-black uppercase tracking-tighter">Giải toán</h3>
                                </div>
                                <button id="btn-toggle-53-4" onclick="window.toggle_53_4_sol()" class="bg-amber-500 text-white text-base md:text-lg font-black px-4 py-2 rounded-2xl hover:bg-amber-600 transition-all shadow-md">Hiện bài giải</button>
                            </div>

                            <!-- Lời giải che lại cho giáo viên -->
                            <div id="sol-53-4-container" class="hidden p-6 bg-amber-50 border-2 border-amber-500 rounded-[2rem] space-y-2 mb-4 text-lg font-bold text-amber-900 animate-in fade-in duration-350 w-full">
                                <div class="underline text-xl font-black">Bài giải chi tiết:</div>
                                <p>Chiều sâu của cái lỗ là:</p>
                                <p class="text-2xl md:text-3xl font-black text-amber-800">&nbsp;&nbsp;1,06 + 0,25 = 1,31 (m)</p>
                                <p>Số mét chồn còn phải đào sâu thêm là:</p>
                                <p class="text-2xl md:text-3xl font-black text-amber-800">&nbsp;&nbsp;1,31 - 0,9 = 0,41 (m)</p>
                                <p>Đáp số: 0,41 m.</p>
                            </div>

                            <div class="space-y-6 w-full">
                                <div class="p-4 bg-slate-50 border border-slate-200 rounded-3xl text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed text-slate-700">
                                    Dúi làm rơi khúc mía xuống một cái lỗ. Chồn đào một cái hố bên cạnh để lấy khúc mía cho dúi. Hỏi chồn còn phải đào sâu thêm bao nhiêu mét nữa để cái hố sâu đúng bằng cái lỗ?
                                </div>
                                <div class="w-full flex justify-center">
                                    <img alt="Chồn đào hố" class="w-full w-full h-auto rounded-2xl border border-slate-200 shadow" src="assets/images/toan/toan_tap_1/53/4.png"/>
                                </div>

                                <div class="p-6 bg-sky-50/50 rounded-3xl border-2 border-sky-700 flex flex-col md:flex-row items-center justify-start gap-4 font-black w-full">
                                    <span class="text-xl md:text-3xl text-slate-800">Đáp số =</span>
                                    <div class="flex items-center gap-2 flex-nowrap whitespace-nowrap">
                                        <input id="ans-53-4-ans" type="text" class="w-36 h-12 border-2 border-sky-300 rounded-xl text-center text-sky-900 bg-white outline-none focus:border-sky-600" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
                                        <span class="text-xl md:text-3xl text-slate-800">m</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end mt-4">
                                <button id="btn-check-53-4" onclick="window.check_53_4()" class="w-16 h-16 bg-blue-600 border-2 border-blue-700 text-white rounded-[1.25rem] font-black text-2xl md:text-4xl flex items-center justify-center hover:bg-blue-700 transition-all active:scale-95">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,
    "presentation": ""
};

// Đăng ký toàn cục
window.lesson53 = lesson53;

// Helper functions
function normalize(str) {
    if (!str) return '';
    return str.toString().replace(/\s+/g, '').replace(/,/g, '.').trim().toLowerCase();
}

function normalizeCompare(val, standard) {
    var v = normalize(val);
    var std = normalize(standard);
    return v === std || parseFloat(v) === parseFloat(std);
}

// Toggle lời giải Bài 4
window.toggle_53_4_sol = function() {
    var container = document.getElementById('sol-53-4-container');
    var btn = document.getElementById('btn-toggle-53-4');
    if (!container || !btn) return;
    if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
        btn.textContent = 'Ẩn bài giải';
    } else {
        container.classList.add('hidden');
        btn.textContent = 'Hiện bài giải';
    }
};

// Check bài 1
window.check_53_1 = function() {
    // a: 2 0 , 6 8 (20,68)
    var a1 = document.getElementById('ans-53-1-a1').value.trim();
    var a2 = document.getElementById('ans-53-1-a2').value.trim();
    var a3 = document.getElementById('ans-53-1-a3').value.trim();
    var a4 = document.getElementById('ans-53-1-a4').value.trim();
    var isCorrectA = (a1 === '2' && a2 === '0' && a3 === '6' && a4 === '8');

    // b: 4 7 , 0 9 (47,09)
    var b1 = document.getElementById('ans-53-1-b1').value.trim();
    var b2 = document.getElementById('ans-53-1-b2').value.trim();
    var b3 = document.getElementById('ans-53-1-b3').value.trim();
    var b4 = document.getElementById('ans-53-1-b4').value.trim();
    var isCorrectB = (b1 === '4' && b2 === '7' && b3 === '0' && b4 === '9');

    // c: Tích riêng 1 (365), Tích riêng 2 (438), Tích chung (4,745)
    var c1 = document.getElementById('ans-53-1-c1').value.trim();
    var c2 = document.getElementById('ans-53-1-c2').value.trim();
    var c3 = document.getElementById('ans-53-1-c3').value.trim();
    var c4 = document.getElementById('ans-53-1-c4').value.trim();
    var c5 = document.getElementById('ans-53-1-c5').value.trim();
    var c6 = document.getElementById('ans-53-1-c6').value.trim();
    var c7 = document.getElementById('ans-53-1-c7').value.trim();
    var c8 = document.getElementById('ans-53-1-c8').value.trim();
    var c9 = document.getElementById('ans-53-1-c9').value.trim();
    var c10 = document.getElementById('ans-53-1-c10').value.trim();
    var isCorrectC = (
        c1 === '3' && c2 === '6' && c3 === '5' &&
        c4 === '4' && c5 === '3' && c6 === '8' &&
        c7 === '4' && c8 === '7' && c9 === '4' && c10 === '5'
    );

    // d: 1048,9 : 85 = 12,34
    var d1 = document.getElementById('ans-53-1-d1').value.trim();
    var d2 = document.getElementById('ans-53-1-d2').value.trim();
    var d3 = document.getElementById('ans-53-1-d3').value.trim();
    var d4 = document.getElementById('ans-53-1-d4').value.trim();
    var d5 = document.getElementById('ans-53-1-d5').value.trim();
    var d6 = document.getElementById('ans-53-1-d6').value.trim();
    var d7 = document.getElementById('ans-53-1-d7').value.trim();
    var d8 = document.getElementById('ans-53-1-d8').value.trim();
    var d9 = document.getElementById('ans-53-1-d9').value.trim();
    var d10 = document.getElementById('ans-53-1-d10').value.trim();
    var d11 = document.getElementById('ans-53-1-d11').value.trim();
    var isCorrectD = (
        d1 === '1' && d2 === '9' &&
        d3 === '1' && d4 === '2' &&
        d5 === '3' &&
        d6 === '2' && d7 === '8' &&
        d8 === '4' &&
        d9 === '3' && d10 === '4' &&
        d11 === '0'
    );

    var isCorrect = (isCorrectA && isCorrectB && isCorrectC && isCorrectD);

    var rightAns = "a) 20,68 ; b) 47,09 ; c) 4,745 ; d) 12,34";
    var studentAns = "a) " + (isCorrectA ? "Đúng" : "Sai") + 
                     " ; b) " + (isCorrectB ? "Đúng" : "Sai") + 
                     " ; c) " + (isCorrectC ? "Đúng" : "Sai") + 
                     " ; d) " + (isCorrectD ? "Đúng" : "Sai");

    var meta = window.MATH_BUILDER_METADATA.bai_tap[0];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-53-1', 0, 29, isCorrect ? 29 : 0);
    }
};

// Check bài 2
window.check_53_2 = function() {
    var v1 = document.getElementById('ans-53-2-1').value.trim();
    var v2 = document.getElementById('ans-53-2-2').value.trim();
    var v3 = document.getElementById('ans-53-2-3').value.trim();
    var v4 = document.getElementById('ans-53-2-4').value.trim();

    var isCorrect = (
        normalizeCompare(v1, '0.314') &&
        normalizeCompare(v2, '314') &&
        normalizeCompare(v3, '3.14') &&
        normalizeCompare(v4, '314000')
    );

    var rightAns = "0,314 ; 314 ; 3,14 ; 314 000";
    var studentAns = v1 + " ; " + v2 + " ; " + v3 + " ; " + v4;

    var meta = window.MATH_BUILDER_METADATA.bai_tap[1];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-53-2', 0, 4, isCorrect ? 4 : 0);
    }
};

// Check bài 3
window.check_53_3 = function() {
    var a = document.getElementById('sel-53-3-a').value;
    var b = document.getElementById('sel-53-3-b').value;
    var c = document.getElementById('sel-53-3-c').value;

    var isCorrect = (a === '=' && b === '=' && c === '=');

    var rightAns = "a) = ; b) = ; c) =";
    var studentAns = "a) " + a + " ; b) " + b + " ; c) " + c;

    var meta = window.MATH_BUILDER_METADATA.bai_tap[2];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-53-3', 0, 3, isCorrect ? 3 : 0);
    }
};

// Check bài 4
window.check_53_4 = function() {
    var ans = document.getElementById('ans-53-4-ans').value.trim();

    var isCorrect = normalizeCompare(ans, '0.41');

    var rightAns = "Đáp số: 0,41 m";
    var studentAns = "DS: " + ans;

    var meta = window.MATH_BUILDER_METADATA.bai_tap[3];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-53-4', 0, 1, isCorrect ? 1 : 0);
    }
};

export default lesson53;
