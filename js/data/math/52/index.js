const metadata = {
    "lessonInfo": {
        "period": "52",
        "week": "11",
        "topic": "Số thập phân",
        "title": "BÀI 23: NHÂN, CHIA SỐ THẬP PHÂN VỚI 10; 100; 1000;... HOẶC VỚI 0,1; 0,01; 0,001… (TIẾT 2)",
        "desc": "Học sinh thực hành tính nhẩm chia một số thập phân cho 10; 100; 1000;... hoặc cho 0,1; 0,01; 0,001;... và giải quyết các bài toán liên quan."
    },
    "bai_tap": [
        {
            "id": "52_hd1",
            "type": "fill_multiple",
            "title": "Hoạt động 1: Tính nhẩm",
            "answers": ["2,07", "0,008", "0,341", "3", "58000", "630"],
            "guidance": "Muốn chia một số thập phân cho 10, 100, 1000,... ta dịch chuyển dấu phẩy sang bên trái một, hai, ba,... chữ số.<br>Muốn chia một số thập phân cho 0,1; 0,01; 0,001... ta dịch chuyển dấu phẩy sang bên phải một, hai, ba,... chữ số.",
            "solution": "a) 20,7 : 10 = 2,07<br>0,8 : 100 = 0,008<br>341 : 1 000 = 0,341<br>b) 0,3 : 0,1 = 3<br>58 : 0,001 = 58 000<br>6,3 : 0,01 = 630"
        },
        {
            "id": "52_hd2",
            "type": "fill_multiple",
            "title": "Hoạt động 2: Số ?",
            "answers": ["23450", "234", "6890"],
            "guidance": "Quy đổi các đơn vị đo:<br>- 1 kg = 1 000 g<br>- 1 tạ = 10 yến<br>- 1 l = 1 000 ml",
            "solution": "a) 23,45 kg = 23 450 g (vì 23,45 x 1 000 = 23 450)<br>b) 23,4 tạ = 234 yến (vì 23,4 x 10 = 234)<br>c) 6,89 l = 6 890 ml (vì 6,89 x 1 000 = 6 890)"
        },
        {
            "id": "52_lt1",
            "type": "fill_multiple",
            "title": "Luyện tập 1: Số ?",
            "answers": ["0,108", "10,8", "0,108", "10,8"],
            "guidance": "Lần lượt thực hiện các phép tính từ trái sang phải:<br>1. 10,8 : 100 (dịch dấu phẩy sang trái 2 chữ số)<br>2. Lấy kết quả chia cho 0,01 (dịch dấu phẩy sang phải 2 chữ số)<br>3. Lấy kết quả nhân với 0,01 (dịch dấu phẩy sang trái 2 chữ số)<br>4. Lấy kết quả nhân với 100 (dịch dấu phẩy sang phải 2 chữ số)",
            "solution": "- 10,8 : 100 = 0,108<br>- 0,108 : 0,01 = 10,8<br>- 10,8 x 0,01 = 0,108<br>- 0,108 x 100 = 10,8"
        },
        {
            "id": "52_lt2",
            "type": "fill_multiple",
            "title": "Luyện tập 2: Bài toán máy xúc",
            "answers": ["93,78"],
            "guidance": "Lấy tổng số tấn quặng (937,8 tấn) chia cho số lần xúc (10 lần) để tìm khối lượng quặng trung bình mỗi lần máy xúc được.",
            "solution": "Trung bình mỗi lần chiếc máy xúc đó xúc được số tấn quặng là:<br>  937,8 : 10 = 93,78 (tấn)<br>Đáp số: 93,78 tấn quặng."
        }
    ],
    "quizPool": [
        { "question": "Tính nhẩm: 45,6 : 10", "options": ["4,56", "456", "0,456", "0,0456"], "answer": 0 },
        { "question": "Tính nhẩm: 7,89 : 100", "options": ["0,0789", "0,789", "78,9", "789"], "answer": 0 },
        { "question": "Tính nhẩm: 123 : 1000", "options": ["0,123", "1,23", "12,3", "0,0123"], "answer": 0 },
        { "question": "Tính nhẩm: 8,5 : 0,1", "options": ["85", "0,85", "850", "0,085"], "answer": 0 },
        { "question": "Tính nhẩm: 0,72 : 0,01", "options": ["72", "7,2", "720", "0,0072"], "answer": 0 },
        { "question": "Tính nhẩm: 1,4 : 0,001", "options": ["1400", "140", "14", "14000"], "answer": 0 },
        { "question": "Điền số thích hợp: 45 mm = ... cm", "options": ["4,5", "0,45", "450", "0,045"], "answer": 0 },
        { "question": "Điền số thích hợp: 23,4 cm = ... m", "options": ["0,234", "2,34", "234", "0,0234"], "answer": 0 },
        { "question": "Điền số thích hợp: 156 m = ... km", "options": ["0,156", "1,56", "15,6", "0,0156"], "answer": 0 },
        { "question": "Tính nhẩm: 0,03 : 10", "options": ["0,003", "0,3", "0,03", "0,0003"], "answer": 0 },
        { "question": "Tính nhẩm: 6,8 : 0,01", "options": ["680", "68", "6800", "0,068"], "answer": 0 },
        { "question": "Một ô tô chạy 100 km hết 8,5 l xăng. Hỏi trung bình chạy 10 km hết bao nhiêu lít xăng?", "options": ["0,85 l", "85 l", "0,085 l", "8,5 l"], "answer": 0 },
        { "question": "Một bao gạo cân nặng 54,5 kg được chia đều vào 10 túi. Hỏi mỗi túi nặng bao nhiêu ki-lô-gam?", "options": ["5,45 kg", "0,545 kg", "545 kg", "54,5 kg"], "answer": 0 },
        { "question": "Tính giá trị biểu thức: 1,2 : 10 + 3,8 : 10", "options": ["0,5", "5", "0,05", "50"], "answer": 0 },
        { "question": "Tìm x biết: x x 100 = 34,5", "options": ["x = 0,345", "x = 3,45", "x = 345", "x = 0,0345"], "answer": 0 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson052 = {
    ...metadata.lessonInfo,
    metadata: metadata,
    quizPool: [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "content": `
        <div class="theory-section space-y-6 animate-in fade-in slide-in-from-top-10 duration-1000 pt-6">
            <!-- Banner chính -->
            

            <!-- TÌM HIỂU LÝ THUYẾT -->
            <div class="space-y-8">
                <!-- Khám phá 1: Chia cho 10, 100, 1000 -->
                <div class="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl space-y-6">
                    <div class="flex items-center gap-4 border-b border-slate-100 pb-4">
                        <div class="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg shrink-0">
                            🔍
                        </div>
                        <div>
                            <h3 class="text-xl md:text-3xl font-black text-blue-900">1. Tìm hiểu: Phép chia 534,28 : 100</h3>
                            <p class="text-slate-500 text-sm md:text-base font-bold">Thực hành phép đặt tính chia số thập phân cho 100</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <!-- Cột đặt tính (Trái) -->
                        <div class="lg:col-span-6 flex justify-center bg-slate-50/50 p-6 rounded-[2rem] border border-slate-200/60 shadow-inner overflow-x-auto">
                            <div class="grid gap-x-0 gap-y-2 items-center justify-items-center font-mono py-4" style="grid-template-columns: 28px 28px 28px 12px 28px 28px 28px 28px 16px 28px 12px 28px 28px 28px 28px 28px;">
                                <!-- Hàng 1: Số bị chia | Số chia -->
                                <span class="text-2xl font-black text-slate-800 text-center w-full">5</span>
                                <span class="text-2xl font-black text-slate-800 text-center w-full">3</span>
                                <span class="text-2xl font-black text-slate-800 text-center w-full">4</span>
                                <span class="text-2xl font-black text-slate-800 text-center w-full">,</span>
                                <span class="text-2xl font-black text-slate-800 text-center w-full">2</span>
                                <span class="text-2xl font-black text-slate-800 text-center w-full">8</span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="border-r-4 border-slate-800 h-full w-0"></span> <!-- Vách ngăn dọc -->
                                <div class="col-span-7 w-full border-b-4 border-slate-800 flex items-center justify-start font-mono text-2xl font-black pb-1">
                                    <span class="w-[28px] text-center">1</span>
                                    <span class="w-[12px] text-center">&nbsp;</span>
                                    <span class="w-[28px] text-center">0</span>
                                    <span class="w-[28px] text-center">0</span>
                                    <span class="w-[28px] text-center">&nbsp;</span>
                                    <span class="w-[28px] text-center">&nbsp;</span>
                                    <span class="w-[28px] text-center">&nbsp;</span>
                                </div>

                                <!-- Hàng 2: Số dư 1 (34), hạ 2 | Thương (5,3428) -->
                                <span class="text-center w-full"></span>
                                <span class="text-2xl font-black text-slate-400 text-center w-full">3</span>
                                <span class="text-2xl font-black text-slate-400 text-center w-full">4</span>
                                <span class="text-center w-full"></span>
                                <span class="text-2xl font-black text-blue-600 text-center w-full">2</span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                <span class="text-2xl font-black text-emerald-600 text-center w-full">5</span>
                                <span class="text-2xl font-black text-emerald-600 text-center w-full">,</span>
                                <span class="text-2xl font-black text-emerald-600 text-center w-full">3</span>
                                <span class="text-2xl font-black text-emerald-600 text-center w-full">4</span>
                                <span class="text-2xl font-black text-emerald-600 text-center w-full">2</span>
                                <span class="text-2xl font-black text-emerald-600 text-center w-full">8</span>
                                <span class="text-center w-full"></span>

                                <!-- Hàng 3: Số dư 2 (42), hạ 8 -->
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-2xl font-black text-slate-400 text-center w-full">4</span>
                                <span class="text-center w-full"></span>
                                <span class="text-2xl font-black text-slate-400 text-center w-full">2</span>
                                <span class="text-2xl font-black text-blue-600 text-center w-full">8</span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>

                                <!-- Hàng 4: Số dư 3 (28), viết thêm 0 -->
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-2xl font-black text-slate-400 text-center w-full">2</span>
                                <span class="text-2xl font-black text-slate-400 text-center w-full">8</span>
                                <span class="text-2xl font-black text-blue-600 text-center w-full">0</span>
                                <span class="text-center w-full"></span>
                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>

                                <!-- Hàng 5: Số dư 4 (80), viết thêm 0 -->
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-2xl font-black text-slate-400 text-center w-full">8</span>
                                <span class="text-2xl font-black text-slate-400 text-center w-full">0</span>
                                <span class="text-2xl font-black text-blue-600 text-center w-full">0</span>
                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>

                                <!-- Hàng 6: Số dư cuối cùng (0) -->
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-2xl font-black text-emerald-600 text-center w-full">0</span>
                                <span class="border-r-4 border-slate-800 h-full w-0"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                                <span class="text-center w-full"></span>
                            </div>
                        </div>

                        <!-- Nhận xét & Quy tắc (Phải) -->
                        <div class="lg:col-span-6 space-y-4">
                            <div class="p-6 bg-blue-50/50 border border-blue-100 rounded-3xl space-y-2 text-slate-700">
                                <h4 class="font-black text-blue-800 text-lg md:text-xl">📝 Nhận xét từ phép chia:</h4>
                                <p class="text-base md:text-lg font-bold leading-relaxed">
                                    Nếu dịch chuyển dấu phẩy của số <span class="text-blue-700">534,28</span> sang bên trái hai chữ số, ta cũng thu được kết quả là <span class="text-emerald-700">5,3428</span>.
                                </p>
                                <p class="text-lg md:text-xl font-black text-slate-800 mt-2">
                                    Vậy: <span class="text-blue-700">534,28 : 100 = 5,3428</span>
                                </p>
                            </div>

                            
                        </div>
                    </div>
                </div>

                <!-- Khám phá 2: Chia cho 0.1, 0.01, 0.001 -->
                <div class="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl space-y-6">
                    <div class="flex items-center gap-4 border-b border-slate-100 pb-4">
                        <div class="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg shrink-0">
                            💡
                        </div>
                        <div>
                            <h3 class="text-xl md:text-3xl font-black text-emerald-900">2. Tìm hiểu: Phép chia cho 0,1; 0,01; 0,001;...</h3>
                            <p class="text-slate-500 text-sm md:text-base font-bold">Cách quy đổi phép chia về phép nhân tương ứng</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <!-- Ví dụ 1 -->
                        <div class="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] space-y-3">
                            <h4 class="font-black text-slate-800 text-lg md:text-xl">a) Phép chia 36,5 : 0,1</h4>
                            <div class="p-4 bg-white rounded-2xl border border-slate-200/60 text-slate-700 text-sm md:text-base font-bold leading-relaxed space-y-2">
                                <p>Ta có: <span class="text-blue-700">36,5 : 0,1 = 365 : 1 = 365</span></p>
                                <p>Nhận xét: Nếu chuyển dấu phẩy của số <span class="text-blue-700">36,5</span> sang bên phải một chữ số thì ta được <span class="text-emerald-700">365</span>.</p>
                            </div>
                        </div>

                        <!-- Ví dụ 2 -->
                        <div class="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] space-y-3">
                            <h4 class="font-black text-slate-800 text-lg md:text-xl">b) Phép chia 86,4 : 0,001</h4>
                            <div class="p-4 bg-white rounded-2xl border border-slate-200/60 text-slate-700 text-sm md:text-base font-bold leading-relaxed space-y-2">
                                <p>Ta có: <span class="text-blue-700">86,4 : 0,001 = 86 400 : 1 = 86 400</span></p>
                                <p>Nhận xét: Nếu chuyển dấu phẩy của số <span class="text-blue-700">86,4</span> sang bên phải ba chữ số thì ta được <span class="text-emerald-700">86 400</span>.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Quy tắc -->
                    
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12 text-xl md:text-3xl">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" style="display:flex; transition:transform 0.45s cubic-bezier(0.4,0,0.2,1);">

                    <!-- Trang 1: Hoạt động 1: Tính nhẩm (Trang 87) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">1</div>
                                <h3 class="text-lg md:text-2xl lg:text-3xl font-black text-blue-900 uppercase">Bài 1. Tính nhẩm</h3>
                            </div>

                            <!-- Câu a (ở trên) -->
                            <div class="p-6 bg-slate-50 rounded-[2rem] border border-slate-200">
                                <p class="font-black text-blue-700 text-lg md:text-2xl mb-4">a) Chia cho 10, 100, 1 000 (dịch dấu phẩy sang trái):</p>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div class="flex items-center gap-3 text-lg md:text-2xl font-black text-slate-800">
                                        <span>20,7 : 10 =</span>
                                        <input type="text" id="ans-52-hd1-a1" class="w-28 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-white" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 46px !important;" placeholder="">
                                    </div>
                                    <div class="flex items-center gap-3 text-lg md:text-2xl font-black text-slate-800">
                                        <span>0,8 : 100 =</span>
                                        <input type="text" id="ans-52-hd1-a2" class="w-28 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-white" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 46px !important;" placeholder="">
                                    </div>
                                    <div class="flex items-center gap-3 text-lg md:text-2xl font-black text-slate-800">
                                        <span>341 : 1 000 =</span>
                                        <input type="text" id="ans-52-hd1-a3" class="w-28 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-white" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 46px !important;" placeholder="">
                                    </div>
                                </div>
                            </div>

                            <!-- Câu b (ở dưới) -->
                            <div class="p-6 bg-slate-50 rounded-[2rem] border border-slate-200">
                                <p class="font-black text-blue-700 text-lg md:text-2xl mb-4">b) Chia cho 0,1; 0,01; 0,001 (dịch dấu phẩy sang phải):</p>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div class="flex items-center gap-3 text-lg md:text-2xl font-black text-slate-800">
                                        <span>0,3 : 0,1 =</span>
                                        <input type="text" id="ans-52-hd1-b1" class="w-28 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-white" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 46px !important;" placeholder="">
                                    </div>
                                    <div class="flex items-center gap-3 text-lg md:text-2xl font-black text-slate-800">
                                        <span>58 : 0,001 =</span>
                                        <input type="text" id="ans-52-hd1-b2" class="w-28 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-white" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 46px !important;" placeholder="">
                                    </div>
                                    <div class="flex items-center gap-3 text-lg md:text-2xl font-black text-slate-800">
                                        <span>6,3 : 0,01 =</span>
                                        <input type="text" id="ans-52-hd1-b3" class="w-28 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-white" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 46px !important;" placeholder="">
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end pt-4">
                                <button id="btn-check-52-hd1" onclick="window.check_52_hd1()" class="w-16 h-16 bg-blue-600 border-2 border-blue-700 text-white rounded-[1.25rem] font-black text-2xl md:text-4xl flex items-center justify-center hover:bg-blue-700 transition-all active:scale-95">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Trang 2: Hoạt động 2: Số ? (Đổi đơn vị đo) (Trang 87) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">2</div>
                                <h3 class="text-lg md:text-2xl lg:text-3xl font-black text-blue-900 uppercase">Bài 2. Số ?</h3>
                            </div>

                            <div class="p-6 bg-slate-50 rounded-[2rem] border border-slate-200">
                                <div class="flex flex-col gap-6">
                                    <div class="flex items-center gap-3 text-lg md:text-2xl font-black text-slate-800">
                                        <span class="min-w-[150px] md:min-w-[180px]">a) 23,45 kg =</span>
                                        <input type="text" id="ans-52-hd2-a" class="w-28 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-white" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 46px !important;" placeholder="">
                                        <span>g</span>
                                    </div>
                                    <div class="flex items-center gap-3 text-lg md:text-2xl font-black text-slate-800">
                                        <span class="min-w-[150px] md:min-w-[180px]">b) 23,4 tạ =</span>
                                        <input type="text" id="ans-52-hd2-b" class="w-28 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-white" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 46px !important;" placeholder="">
                                        <span>yến</span>
                                    </div>
                                    <div class="flex items-center gap-3 text-lg md:text-2xl font-black text-slate-800">
                                        <span class="min-w-[150px] md:min-w-[180px]">c) 6,89 l =</span>
                                        <input type="text" id="ans-52-hd2-c" class="w-28 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-white" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 46px !important;" placeholder="">
                                        <span>ml</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end pt-4">
                                <button id="btn-check-52-hd2" onclick="window.check_52_hd2()" class="w-16 h-16 bg-blue-600 border-2 border-blue-700 text-white rounded-[1.25rem] font-black text-2xl md:text-4xl flex items-center justify-center hover:bg-blue-700 transition-all active:scale-95">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Trang 3: Luyện tập 1: Chuỗi tính liên hoàn -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-4">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">1</div>
                                <h3 class="text-lg md:text-2xl lg:text-3xl font-black text-blue-900 uppercase">Bài 1. Chuỗi tính liên hoàn</h3>
                            </div>

                            <!-- Chuỗi tính bằng CSS Grid gióng hàng chuẩn -->
                            <div class="p-4 bg-slate-50 border border-slate-200 rounded-[2rem] overflow-x-auto">
                                <div class="min-w-[760px] flex items-center justify-between gap-1 p-2">
                                    <!-- Bắt đầu: 10,8 -->
                                    <div class="px-4 py-2 bg-white border-2 border-slate-200 rounded-xl shadow-sm text-center">
                                        <div class="text-[10px] text-slate-400 font-extrabold uppercase tracking-wide">Khởi đầu</div>
                                        <span class="text-xl font-black text-slate-800">10,8</span>
                                    </div>

                                    <!-- Mũi tên 1: : 100 -->
                                    <div class="flex flex-col items-center flex-1">
                                        <span class="text-xs font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 mb-0.5">: 100</span>
                                        <svg class="w-8 h-4 text-blue-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                                    </div>

                                    <!-- Ô trống 1 -->
                                    <div class="px-2.5 py-2 bg-white border-2 border-blue-200 rounded-xl shadow-md text-center">
                                        <input type="text" id="ans-52-lt1-step1" class="w-20 h-10 border-2 border-blue-300 rounded-lg text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-amber-50/50" style="padding: 0px !important; font-size: 1.125rem !important; line-height: 36px !important;" placeholder="">
                                    </div>

                                    <!-- Mũi tên 2: : 0,01 -->
                                    <div class="flex flex-col items-center flex-1">
                                        <span class="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 mb-0.5">: 0,01</span>
                                        <svg class="w-8 h-4 text-emerald-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                                    </div>

                                    <!-- Ô trống 2 -->
                                    <div class="px-2.5 py-2 bg-white border-2 border-blue-200 rounded-xl shadow-md text-center">
                                        <input type="text" id="ans-52-lt1-step2" class="w-20 h-10 border-2 border-blue-300 rounded-lg text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-amber-50/50" style="padding: 0px !important; font-size: 1.125rem !important; line-height: 36px !important;" placeholder="">
                                    </div>

                                    <!-- Mũi tên 3: x 0,01 -->
                                    <div class="flex flex-col items-center flex-1">
                                        <span class="text-xs font-black text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 mb-0.5">× 0,01</span>
                                        <svg class="w-8 h-4 text-rose-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                                    </div>

                                    <!-- Ô trống 3 -->
                                    <div class="px-2.5 py-2 bg-white border-2 border-blue-200 rounded-xl shadow-md text-center">
                                        <input type="text" id="ans-52-lt1-step3" class="w-20 h-10 border-2 border-blue-300 rounded-lg text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-amber-50/50" style="padding: 0px !important; font-size: 1.125rem !important; line-height: 36px !important;" placeholder="">
                                    </div>

                                    <!-- Mũi tên 4: x 100 -->
                                    <div class="flex flex-col items-center flex-1">
                                        <span class="text-xs font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 mb-0.5">× 100</span>
                                        <svg class="w-8 h-4 text-indigo-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                                    </div>

                                    <!-- Ô trống 4 -->
                                    <div class="px-2.5 py-2 bg-white border-2 border-blue-200 rounded-xl shadow-md text-center">
                                        <input type="text" id="ans-52-lt1-step4" class="w-20 h-10 border-2 border-blue-300 rounded-lg text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-amber-50/50" style="padding: 0px !important; font-size: 1.125rem !important; line-height: 36px !important;" placeholder="">
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end pt-4">
                                <button id="btn-check-52-lt1" onclick="window.check_52_lt1()" class="w-16 h-16 bg-blue-600 border-2 border-blue-700 text-white rounded-[1.25rem] font-black text-2xl md:text-4xl flex items-center justify-center hover:bg-blue-700 transition-all active:scale-95">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Trang 4: Luyện tập 2: Bài toán lượng quặng -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-4">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">2</div>
                                    <h3 class="text-lg md:text-2xl lg:text-3xl font-black text-blue-900 uppercase">Bài 2. Máy xúc quặng</h3>
                                </div>
                                <button onclick="window.toggleSolution('sol-52-lt2')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                            </div>

                            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                <div class="lg:col-span-4 flex justify-center">
                                    <div class="p-4 bg-slate-50 border border-slate-200 rounded-[2rem] flex flex-col items-center justify-center w-full max-w-[320px] shadow-inner">
                                        <img src="assets/images/toan/toan_tap_1/52/4.png" alt="Máy xúc quặng" class="w-full h-auto rounded-2xl object-contain max-h-48 shadow-md">
                                        <span class="text-sm font-black text-slate-600 mt-4 text-center">Xúc 10 lần: 937,8 tấn quặng</span>
                                    </div>
                                </div>

                                <div class="lg:col-span-8 space-y-6">
                                    <p class="text-slate-800 text-xl md:text-2xl font-bold leading-relaxed">
                                        Chiếc máy xúc lớn nhất thế giới (năm 2022) xúc 10 lần được <span class="text-blue-600">937,8 tấn</span> quặng.
                                    </p>
                                    <p class="text-slate-800 text-xl md:text-2xl font-bold leading-relaxed font-black">
                                        Hỏi trung bình mỗi lần chiếc máy xúc đó xúc được bao nhiêu tấn quặng?
                                    </p>

                                    <div class="p-6 bg-slate-50 border border-slate-200 rounded-3xl shadow-inner">
                                        <div class="flex items-center flex-nowrap whitespace-nowrap overflow-x-auto gap-3 text-lg md:text-2xl font-black text-slate-800">
                                            <span>Đáp số:</span>
                                            <input type="text" id="ans-52-lt2-result" class="w-36 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-white" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 46px !important;" placeholder="">
                                            <span class="text-emerald-800">tấn quặng</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Bài giải che đi của Luyện tập 2 -->
                            <div id="sol-52-lt2" class="hidden mt-6 p-5 bg-sky-50 rounded-2xl border border-sky-200 text-lg md:text-2xl font-medium text-slate-700 w-full mx-auto animate-in fade-in duration-300">
                                <h4 class="text-sm md:text-base font-black text-blue-800 mb-2">Bài giải chi tiết:</h4>
                                <p class="text-xs md:text-sm text-slate-900 leading-relaxed font-semibold whitespace-pre-line">
                                    Trung bình mỗi lần chiếc máy xúc đó xúc được số tấn quặng là:
                                      937,8 : 10 = 93,78 (tấn)
                                    Đáp số: 93,78 tấn quặng.
                                </p>
                            </div>

                            <div class="flex justify-end pt-4">
                                <button id="btn-check-52-lt2" onclick="window.check_52_lt2()" class="w-16 h-16 bg-blue-600 border-2 border-blue-700 text-white rounded-[1.25rem] font-black text-2xl md:text-4xl flex items-center justify-center hover:bg-blue-700 transition-all active:scale-95">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,
    "quizPool": metadata.quizPool
};

// --- CÁC HÀM ĐIỀU HƯỚNG SUB-TAB ---
window.switchActivityTab = function(tabName) {
    const tabs = ['a', 'b'];
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

window.switchHd2Tab = function(tabName) {
    const tabs = ['a', 'b', 'c'];
    tabs.forEach(t => {
        const btn = document.getElementById(`tab-hd2-${t}`);
        const cnt = document.getElementById(`content-hd2-${t}`);
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

// Hàm hiện/ẩn lời giải
window.toggleSolution = function(solId) {
    const solDiv = document.getElementById(solId);
    if (solDiv) {
        solDiv.classList.toggle('hidden');
    }
};

// --- CÁC HÀM KIỂM TRA ĐÁP ÁN ---
window.check_52_hd1 = function() {
    function getVal(id) {
        var el = document.getElementById(id);
        return el ? el.value.trim().replace(/,/g, '.') : '';
    }

    var a1 = getVal('ans-52-hd1-a1') === '2.07';
    var a2 = getVal('ans-52-hd1-a2') === '0.008';
    var a3 = getVal('ans-52-hd1-a3') === '0.341';
    var b1 = getVal('ans-52-hd1-b1') === '3';
    var b2 = getVal('ans-52-hd1-b2').replace(/\s/g, '') === '58000';
    var b3 = getVal('ans-52-hd1-b3') === '630';

    var isCorrect = a1 && a2 && a3 && b1 && b2 && b3;
    var rightAns = "a) 2,07 ; 0,008 ; 0,341\nb) 3 ; 58 000 ; 630";
    var studentAns = isCorrect ? "Đúng hoàn toàn" : "Chưa chính xác hoàn toàn";

    var meta = window.MATH_BUILDER_METADATA.bai_tap[0];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-52-hd1', 0, 6, (a1?1:0)+(a2?1:0)+(a3?1:0)+(b1?1:0)+(b2?1:0)+(b3?1:0));
    }
};

window.check_52_hd2 = function() {
    function getVal(id) {
        var el = document.getElementById(id);
        return el ? el.value.trim().replace(/,/g, '.') : '';
    }

    var a = getVal('ans-52-hd2-a') === '23450';
    var b = getVal('ans-52-hd2-b') === '234';
    var c = getVal('ans-52-hd2-c') === '6890';

    var isCorrect = a && b && c;
    var rightAns = "a) 23 450 g\nb) 234 yến\nc) 6 890 ml";
    var studentAns = isCorrect ? "Đúng hoàn toàn" : "Chưa chính xác hoàn toàn";

    var meta = window.MATH_BUILDER_METADATA.bai_tap[1];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-52-hd2', 0, 3, (a?1:0)+(b?1:0)+(c?1:0));
    }
};

window.check_52_lt1 = function() {
    function getVal(id) {
        var el = document.getElementById(id);
        return el ? el.value.trim().replace(/,/g, '.') : '';
    }

    var s1 = getVal('ans-52-lt1-step1') === '0.108';
    var s2 = getVal('ans-52-lt1-step2') === '10.8';
    var s3 = getVal('ans-52-lt1-step3') === '0.108';
    var s4 = getVal('ans-52-lt1-step4') === '10.8';

    var isCorrect = s1 && s2 && s3 && s4;
    var rightAns = "0,108 -> 10,8 -> 0,108 -> 10,8";
    var studentAns = isCorrect ? "Đúng hoàn toàn" : "Chưa chính xác hoàn toàn";

    var meta = window.MATH_BUILDER_METADATA.bai_tap[2];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-52-lt1', 0, 4, (s1?1:0)+(s2?1:0)+(s3?1:0)+(s4?1:0));
    }
};

window.check_52_lt2 = function() {
    var resultVal = document.getElementById('ans-52-lt2-result').value.trim().replace(/,/g, '.');
    var isCorrect = (resultVal === '93.78' || resultVal === '93,78');

    var meta = window.MATH_BUILDER_METADATA.bai_tap[3];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, "93,78", resultVal, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-52-lt2', 0, 1, isCorrect ? 1 : 0);
    }
};

export default lesson052;
