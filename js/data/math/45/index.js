const metadata = {
    "lessonInfo": {
        "period": "45",
        "week": "9",
        "topic": "Số thập phân",
        "title": "BÀI 21: PHÉP NHÂN SỐ THẬP PHÂN (TIẾT 2)",
        "desc": "Quy tắc nhân một số thập phân với một số thập phân: Đặt tính như nhân hai số tự nhiên, đếm số chữ số ở phần thập phân của cả hai thừa số rồi dùng dấu phẩy tách ở tích ra bấy nhiêu chữ số từ phải sang trái."
    },
    "bai_tap": [
        {
            "id": "45_1",
            "type": "fill_multiple",
            "title": "Đặt tính rồi tính",
            "answers": [],
            "guidance": "Đếm xem cả hai thừa số có tất cả bao nhiêu chữ số ở phần thập phân. Nhân như nhân hai số tự nhiên, sau đó dùng dấu phẩy tách ở tích ra tương ứng bấy nhiêu chữ số kể từ phải sang trái.",
            "solution": "a) 7,5 × 3,4 = 25,50 (hoặc 25,5).<br>b) 21,9 × 5,1 = 111,69.<br>c) 8,41 × 2,5 = 21,025.<br>d) 3,08 × 0,73 = 2,2484."
        },
        {
            "id": "45_2",
            "type": "fill_multiple",
            "title": "Không thực hiện phép tính, tìm các tích nhanh",
            "answers": ["3.648", "36.48", "0.3648"],
            "guidance": "Đếm tổng số chữ số ở phần thập phân của hai thừa số, từ đó dịch chuyển dấu phẩy của tích mẫu 3648 sang trái tương ứng bấy nhiêu chữ số.",
            "solution": "a) 6,4 × 0,57 = 3,648 (phần thập phân có 3 chữ số)<br>b) 6,4 × 5,7 = 36,48 (phần thập phân có 2 chữ số)<br>c) 0,64 × 0,57 = 0,3648 (phần thập phân có 4 chữ số)"
        },
        {
            "id": "45_3",
            "type": "fill_multiple",
            "title": "Giải bài toán ô tô đi trên cao tốc",
            "answers": ["101.4"],
            "guidance": "Muốn tính quãng đường ô tô đi được, ta lấy vận tốc (quãng đường đi được trong 1 giờ) nhân với thời gian đi.",
            "solution": "Quãng đường ô tô đó đi được là:<br>  84,5 × 1,2 = 101,4 (km)<br>Đáp số: 101,4 km."
        }
    ],
    "quizPool": [
        { "question": "Khi nhân hai số thập phân, nếu thừa số thứ nhất có 1 chữ số ở phần thập phân, thừa số thứ hai có 2 chữ số ở phần thập phân thì tích sẽ có mấy chữ số ở phần thập phân?", "options": ["3 chữ số", "2 chữ số", "1 chữ số", "4 chữ số"], "answer": 0 },
        { "question": "Tính nhẩm: 0,3 × 0,4 = ?", "options": ["0,12", "1,2", "0,012", "12"], "answer": 0 },
        { "question": "Tính nhẩm: 1,5 × 0,2 = ?", "options": ["0,3", "3", "0,03", "0,15"], "answer": 0 },
        { "question": "Kết quả của phép tính 2,5 × 1,2 = ?", "options": ["3", "30", "0,3", "3,02"], "answer": 0 },
        { "question": "Biết 12 × 15 = 180. Không tính, tìm kết quả của 1,2 × 1,5:", "options": ["1,8", "18", "0,18", "180"], "answer": 0 },
        { "question": "Biết 25 × 4 = 100. Tìm kết quả của 2,5 × 0,4:", "options": ["1", "10", "0,1", "0,01"], "answer": 0 },
        { "question": "Một hình chữ nhật có chiều dài 2,5 m and chiều rộng 1,8 m. Diện tích hình chữ nhật đó là:", "options": ["4,5 m²", "45 m²", "0,45 m²", "4,3 m²"], "answer": 0 },
        { "question": "Kết quả phép nhân 0,15 × 0,4 = ?", "options": ["0,06", "0,6", "0,006", "6"], "answer": 0 },
        { "question": "Kết quả phép nhân 5,2 × 0,5 = ?", "options": ["2,6", "26", "0,26", "2,5"], "answer": 0 },
        { "question": "Tìm x, biết x : 1,5 = 2,4. Giá trị của x là:", "options": ["3,6", "1,6", "36", "0,9"], "answer": 0 },
        { "question": "Một ô tô chạy trong 2,5 giờ được 125 km. Hỏi trung bình mỗi giờ ô tô đó chạy được bao nhiêu ki-lô-mét?", "options": ["50 km", "5 km", "500 km", "25 km"], "answer": 0 },
        { "question": "Tính nhẩm: 0,08 × 0,5 = ?", "options": ["0,04", "0,4", "0,004", "4"], "answer": 0 },
        { "question": "Kết quả của phép nhân 1,25 × 0,8 = ?", "options": ["1", "10", "0,1", "1,2"], "answer": 0 },
        { "question": "Biết 45 × 12 = 540. Tích của 4,5 × 0,12 là:", "options": ["0,54", "5,4", "54", "0,054"], "answer": 0 },
        { "question": "Diện tích một sân trường hình vuông có cạnh 10,5 m là:", "options": ["110,25 m²", "110,5 m²", "42 m²", "100,25 m²"], "answer": 0 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson45 = {
    ...metadata.lessonInfo,
    metadata: metadata,
    quizPool: [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "content": `
        <div class="theory-section space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 pt-6 w-full mx-auto">
            <!-- Banner -->
            

            <!-- Ghi nhớ -->
            <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border border-blue-100 shadow-xl space-y-6">
                <div class="flex items-center gap-4 border-b border-blue-50 pb-4">
                    <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-xl md:text-3xl">💡</div>
                    <h3 class="text-xl md:text-3xl font-black text-blue-900 uppercase tracking-tight">Quy tắc ghi nhớ</h3>
                </div>
                
                <div class="text-lg md:text-2xl text-slate-700 leading-relaxed space-y-4">
                    <p class="font-bold text-blue-800">Muốn nhân một số thập phân với một số thập phân ta làm như sau:</p>
                    <ul class="list-disc pl-6 space-y-3">
                        <li>Đặt tính rồi nhân như nhân các số tự nhiên.</li>
                        <li>Đếm xem trong phần thập phân của cả hai thừa số có tất cả bao nhiêu chữ số.</li>
                        <li>Dùng dấu phẩy tách ở tích ra bấy nhiêu chữ số kể từ <span class="text-red-500 font-bold">phải sang trái</span>.</li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12 text-xl md:text-3xl text-left">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" style="display:flex; transition:transform 0.45s cubic-bezier(0.4,0,0.2,1);">
                    
                    <!-- TRANG 1: BÀI 1 (2 cột, mỗi cột 2 phép tính) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="glass-card p-6 md:p-8 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
                            <div>
                                <div class="flex items-center justify-between mb-6">
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">1</div>
                                        <h3 class="text-lg md:text-2xl text-blue-900 font-black uppercase tracking-tighter">Bài 1. Đặt tính rồi tính</h3>
                                    </div>
                                    <button onclick="window.toggleSolution('sol-45-1')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                                </div>

                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 font-mono text-slate-700 font-black">
                                    
                                    <!-- CỘT LẦN 1: phép a & b -->
                                    <div class="space-y-8">
                                        <!-- Phép tính a) 7,5 × 3,4 = 25,50 -->
                                        <div class="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center">
                                            <div class="mb-3 text-lg md:text-2xl font-black text-blue-700">a) 7,5 × 3,4</div>
                                            <div class="grid grid-cols-6 gap-y-2 items-center justify-items-center" style="grid-template-columns: 24px 40px 40px 40px 40px 40px;">
                                                <!-- Row 1: 7,5 -->
                                                <span></span><span></span>
                                                <input type="text" id="ans-45-1-a-r1c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-a-r1c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-a-r1c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                
                                                <!-- Row 2: × 3,4 -->
                                                <span class="text-blue-600 font-black">×</span><span></span>
                                                <input type="text" id="ans-45-1-a-r2c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-a-r2c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-a-r2c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                
                                                <div class="col-span-6 w-full border-t border-slate-400 my-0.5"></div>
                                                <!-- Tích riêng 1: 300 -->
                                                <span></span><span></span>
                                                <input type="text" id="ans-45-1-a-r3c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                <input type="text" id="ans-45-1-a-r3c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-a-r3c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                
                                                <!-- Tích riêng 2: 225 -->
                                                <span></span>
                                                <input type="text" id="ans-45-1-a-r4c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-a-r4c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                <input type="text" id="ans-45-1-a-r4c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                
                                                <div class="col-span-6 w-full border-t-2 border-slate-700 my-1"></div>
                                                <!-- Tích chung: 25,50 -->
                                                <span></span>
                                                <input type="text" id="ans-45-1-a-r5c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-a-r5c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-a-r5c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-a-r5c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-a-r5c5" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            </div>
                                        </div>

                                        <!-- Phép tính b) 21,9 × 5,1 = 111,69 -->
                                        <div class="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center">
                                            <div class="mb-3 text-lg md:text-2xl font-black text-blue-700">b) 21,9 × 5,1</div>
                                            <div class="grid grid-cols-7 gap-y-2 items-center justify-items-center" style="grid-template-columns: 24px 40px 40px 40px 40px 40px 40px;">
                                                <!-- Row 1: 21,9 -->
                                                <span></span><span></span>
                                                <input type="text" id="ans-45-1-b-r1c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-b-r1c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-b-r1c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-b-r1c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                
                                                <!-- Row 2: × 5,1 -->
                                                <span class="text-blue-600 font-black">×</span><span></span><span></span>
                                                <input type="text" id="ans-45-1-b-r2c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-b-r2c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-b-r2c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                
                                                <div class="col-span-7 w-full border-t border-slate-400 my-0.5"></div>
                                                <!-- Tích riêng 1: 219 -->
                                                <span></span><span></span>
                                                <input type="text" id="ans-45-1-b-r3c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-b-r3c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                <input type="text" id="ans-45-1-b-r3c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                
                                                <!-- Tích riêng 2: 1095 -->
                                                <span></span>
                                                <input type="text" id="ans-45-1-b-r4c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-b-r4c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-b-r4c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                <input type="text" id="ans-45-1-b-r4c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                
                                                <div class="col-span-7 w-full border-t-2 border-slate-700 my-1"></div>
                                                <!-- Tích chung: 111,69 -->
                                                <span></span>
                                                <input type="text" id="ans-45-1-b-r5c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-b-r5c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-b-r5c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-b-r5c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-b-r5c5" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-b-r5c6" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            </div>
                                        </div>
                                    </div>

                                    <!-- CỘT LẦN 2: phép c & d -->
                                    <div class="space-y-8">
                                        <!-- Phép tính c) 8,41 × 2,5 = 21,025 -->
                                        <div class="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center">
                                            <div class="mb-3 text-lg md:text-2xl font-black text-blue-700">c) 8,41 × 2,5</div>
                                            <div class="grid grid-cols-7 gap-y-2 items-center justify-items-center" style="grid-template-columns: 24px 40px 40px 40px 40px 40px 40px;">
                                                <!-- Row 1: 8,41 -->
                                                <span></span><span></span>
                                                <input type="text" id="ans-45-1-c-r1c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-c-r1c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-c-r1c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-c-r1c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                
                                                <!-- Row 2: × 2,5 -->
                                                <span class="text-blue-600 font-black">×</span><span></span>
                                                <input type="text" id="ans-45-1-c-r2c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-c-r2c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-c-r2c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span><span></span>
                                                
                                                <div class="col-span-7 w-full border-t border-slate-400 my-0.5"></div>
                                                <!-- Tích riêng 1: 4205 -->
                                                <span></span><span></span>
                                                <input type="text" id="ans-45-1-c-r3c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                <input type="text" id="ans-45-1-c-r3c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-c-r3c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-c-r3c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                
                                                <!-- Tích riêng 2: 1682 -->
                                                <span></span>
                                                <input type="text" id="ans-45-1-c-r4c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-c-r4c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                <input type="text" id="ans-45-1-c-r4c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-c-r4c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                
                                                <div class="col-span-7 w-full border-t-2 border-slate-700 my-1"></div>
                                                <!-- Tích chung: 21,025 -->
                                                <span></span>
                                                <input type="text" id="ans-45-1-c-r5c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-c-r5c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-c-r5c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-c-r5c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-c-r5c5" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-c-r5c6" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            </div>
                                        </div>

                                        <!-- Phép tính d) 3,08 × 0,73 = 2,2484 -->
                                        <div class="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center">
                                            <div class="mb-3 text-lg md:text-2xl font-black text-blue-700">d) 3,08 × 0,73</div>
                                            <div class="grid grid-cols-7 gap-y-2 items-center justify-items-center" style="grid-template-columns: 24px 40px 40px 40px 40px 40px 40px;">
                                                <!-- Row 1: 3,08 -->
                                                <span></span>
                                                <input type="text" id="ans-45-1-d-r1c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-d-r1c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-d-r1c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-d-r1c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span><span></span>
                                                
                                                <!-- Row 2: × 0,73 -->
                                                <span class="text-blue-600 font-black">×</span>
                                                <input type="text" id="ans-45-1-d-r2c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-d-r2c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-d-r2c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-d-r2c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span><span></span>
                                                
                                                <div class="col-span-7 w-full border-t border-slate-400 my-0.5"></div>
                                                <!-- Tích riêng 1: 924 -->
                                                <span></span><span></span><span></span>
                                                <input type="text" id="ans-45-1-d-r3c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-d-r3c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-d-r3c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                
                                                <!-- Tích riêng 2: 2156 -->
                                                <span></span>
                                                <input type="text" id="ans-45-1-d-r4c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                <input type="text" id="ans-45-1-d-r4c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-d-r4c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-d-r4c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                
                                                <div class="col-span-7 w-full border-t-2 border-slate-700 my-1"></div>
                                                <!-- Tích chung: 2,2484 -->
                                                <span></span>
                                                <input type="text" id="ans-45-1-d-r5c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-d-r5c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-d-r5c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-d-r5c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-d-r5c5" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-45-1-d-r5c6" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div id="sol-45-1" class="hidden mt-6 p-6 bg-sky-50 rounded-2xl border border-sky-200 text-lg md:text-2xl font-medium text-slate-700 w-full mx-auto">
                                    <p class="font-bold text-blue-800 mb-3 text-center">✍️ Đặt tính mẫu của cả 4 phép tính:</p>
                                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center font-mono font-black">
                                        <!-- a -->
                                        <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                            <div class="mb-2 text-sm text-blue-600">Phép tính a</div>
                                            <div class="grid grid-cols-6 gap-1 items-center" style="grid-template-columns: 16px 28px 28px 28px 28px 28px;">
                                                <span></span><span></span><span>7</span><span>,</span><span>5</span><span></span>
                                                <span class="text-blue-600">×</span><span></span><span>3</span><span>,</span><span>4</span><span></span>
                                                <div class="col-span-6 border-t border-slate-700 my-1"></div>
                                                <span></span><span></span><span>3</span><span>0</span><span>0</span><span></span>
                                                <span></span><span>2</span><span>2</span><span>5</span><span></span><span></span>
                                                <div class="col-span-6 border-t border-slate-700 my-1"></div>
                                                <span></span><span>2</span><span>5</span><span>,</span><span>5</span><span>0</span>
                                            </div>
                                        </div>
                                        <!-- b -->
                                        <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                            <div class="mb-2 text-sm text-blue-600">Phép tính b</div>
                                            <div class="grid grid-cols-7 gap-1 items-center" style="grid-template-columns: 16px 28px 28px 28px 28px 28px 28px;">
                                                <span></span><span></span><span>2</span><span>1</span><span>,</span><span>9</span><span></span>
                                                <span class="text-blue-600">×</span><span></span><span></span><span>5</span><span>,</span><span>1</span><span></span>
                                                <div class="col-span-7 border-t border-slate-700 my-1"></div>
                                                <span></span><span></span><span></span><span>2</span><span>1</span><span>9</span><span></span>
                                                <span></span><span>1</span><span>0</span><span>9</span><span>5</span><span></span><span></span>
                                                <div class="col-span-7 border-t border-slate-700 my-1"></div>
                                                <span></span><span>1</span><span>1</span><span>1</span><span>,</span><span>6</span><span>9</span>
                                            </div>
                                        </div>
                                        <!-- c -->
                                        <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                            <div class="mb-2 text-sm text-blue-600">Phép tính c</div>
                                            <div class="grid grid-cols-7 gap-1 items-center" style="grid-template-columns: 16px 28px 28px 28px 28px 28px 28px;">
                                                <span></span><span></span><span>8</span><span>,</span><span>4</span><span>1</span><span></span>
                                                <span class="text-blue-600">×</span><span></span><span>2</span><span>,</span><span>5</span><span></span><span></span>
                                                <div class="col-span-7 border-t border-slate-700 my-1"></div>
                                                <span></span><span></span><span>4</span><span>2</span><span>0</span><span>5</span><span></span>
                                                <span></span><span>1</span><span>6</span><span>8</span><span>2</span><span></span><span></span>
                                                <div class="col-span-7 border-t border-slate-700 my-1"></div>
                                                <span></span><span>2</span><span>1</span><span>,</span><span>0</span><span>2</span><span>5</span>
                                            </div>
                                        </div>
                                        <!-- d -->
                                        <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                            <div class="mb-2 text-sm text-blue-600">Phép tính d</div>
                                            <div class="grid grid-cols-7 gap-1 items-center" style="grid-template-columns: 16px 28px 28px 28px 28px 28px 28px;">
                                                <span></span><span>3</span><span>,</span><span>0</span><span>8</span><span></span><span></span>
                                                <span class="text-blue-600">×</span><span>0</span><span>,</span><span>7</span><span>3</span><span></span><span></span>
                                                <div class="col-span-7 border-t border-slate-700 my-1"></div>
                                                <span></span><span></span><span></span><span>9</span><span>2</span><span>4</span><span></span>
                                                <span></span><span>2</span><span>1</span><span>5</span><span>6</span><span></span><span></span>
                                                <div class="col-span-7 border-t border-slate-700 my-1"></div>
                                                <span></span><span>2</span><span>,</span><span>2</span><span>4</span><span>8</span><span>4</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end mt-6">
                                <button id="btn-check-45-1" onclick="window.check_45_1()" style="background: linear-gradient(135deg, #2563eb, #0284c7);" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- TRANG 2: BÀI 2 (TÌM KẾT QUẢ TÍCH NHANH) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="glass-card p-6 md:p-8 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
                            <div>
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform rotate-2">2</div>
                                        <h3 class="text-lg md:text-2xl font-black text-blue-900 uppercase">Bài 2. Tìm kết quả tích nhanh</h3>
                                    </div>
                                    <button onclick="window.toggleSolution('sol-45-2')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                                </div>

                                <div class="p-5 bg-sky-50 rounded-[1.5rem] border border-sky-100 mb-6 text-slate-700">
                                    <span class="font-bold text-sky-800 text-base md:text-xl">Biết: 64 × 57 = 3648.</span>
                                    <p class="text-slate-600 text-base md:text-lg mt-1">Không thực hiện tính, hãy tìm kết quả các tích sau:</p>
                                </div>

                                <div class="bg-slate-50 border border-slate-200 rounded-[2rem] p-6 space-y-6 text-slate-800 w-full mx-auto shadow-inner">
                                    <div class="space-y-4 text-base md:text-xl font-bold font-mono">
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <span>a) 6,4 × 0,57 =</span>
                                            <input type="text" id="ans-45-2-a" class="w-32 h-10 border-2 border-blue-300 rounded-xl text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-white" placeholder="">
                                        </div>
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <span>b) 6,4 × 5,7 =</span>
                                            <input type="text" id="ans-45-2-b" class="w-32 h-10 border-2 border-blue-300 rounded-xl text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-white" placeholder="">
                                        </div>
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <span>c) 0,64 × 0,57 =</span>
                                            <input type="text" id="ans-45-2-c" class="w-32 h-10 border-2 border-blue-300 rounded-xl text-center text-blue-700 font-black outline-none focus:border-blue-500 bg-white" placeholder="">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="sol-45-2" class="hidden mt-2 p-4 bg-sky-50 rounded-2xl border border-sky-200 text-base md:text-xl font-medium text-slate-700">
                                <p class="font-bold text-blue-800 mb-1">✍️ Cách tính nhẩm:</p>
                                <p>Dựa trên tích 3648, ta đếm tổng số chữ số ở phần thập phân của các thừa số để đặt dấu phẩy:</p>
                                <ul class="list-disc pl-5 space-y-1">
                                    <li><strong>Câu a:</strong> 6,4 (1 chữ số) và 0,57 (2 chữ số) → Tích có 3 chữ số ở phần thập phân: <strong>3,648</strong></li>
                                    <li><strong>Câu b:</strong> 6,4 (1 chữ số) và 5,7 (1 chữ số) → Tích có 2 chữ số ở phần thập phân: <strong>36,48</strong></li>
                                    <li><strong>Câu c:</strong> 0,64 (2 chữ số) và 0,57 (2 chữ số) → Tích có 4 chữ số ở phần thập phân: <strong>0,3648</strong></li>
                                </ul>
                            </div>
                            </div>

                            <div class="flex justify-end mt-6">
                                <button id="btn-check-45-2" onclick="window.check_45_2()" style="background: linear-gradient(135deg, #2563eb, #0284c7);" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- TRANG 3: BÀI 3 (BÀI TOÁN Ô TÔ ĐI TRÊN CAO TỐC - 1 CỘT) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="glass-card p-4 md:p-6 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden flex flex-col justify-between min-h-[550px]">
                            <div>
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform rotate-6">3</div>
                                        <h3 class="text-lg md:text-2xl font-black text-blue-900 uppercase">Bài 3. Bài toán thực tế</h3>
                                    </div>
                                    <button onclick="window.toggleSolution('sol-45-3')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                                </div>

                                <div class="space-y-6 w-full mx-auto">
                                    <!-- Đề bài -->
                                    <div class="p-6 bg-sky-50 rounded-[2rem] border border-sky-100 text-lg md:text-2xl font-medium leading-relaxed">
                                        <p class="font-bold text-sky-800"></p>
                                        <p class="text-slate-600">
                                            Một ô tô đi trên đường cao tốc, mỗi giờ đi được <strong>84,5 km</strong>. Hỏi trong <strong>1,2 giờ</strong> ô tô đó đi được bao nhiêu ki-lô-mét?
                                        </p>
                                    </div>

                                    <!-- Vẽ SVG ô tô trên đường cao tốc -->
                                    <div class="p-2 bg-slate-50 border border-slate-200 rounded-[2rem] flex items-center justify-center max-w-sm mx-auto">
                                        <svg viewBox="0 0 200 110" class="w-full h-32 bg-white rounded-xl border border-slate-100">
                                            <rect x="0" y="0" width="200" height="110" fill="#f0fdf4" rx="10"/>
                                            <rect x="0" y="0" width="200" height="40" fill="#bae6fd" rx="2"/>
                                            <path d="M 0 40 Q 30 20 60 40 Q 90 25 120 40 Q 160 15 200 40" fill="#86efac"/>
                                            <polygon points="100,40 105,40 180,110 20,110" fill="#64748b"/>
                                            <polygon points="99,40 101,40 102,110 98,110" fill="#fef08a"/>
                                            <rect x="65" y="70" width="25" height="15" rx="3" fill="#ef4444"/>
                                            <rect x="70" y="64" width="15" height="8" rx="2" fill="#bae6fd"/>
                                            <circle cx="71" cy="85" r="3.5" fill="#1e293b"/>
                                            <circle cx="84" cy="85" r="3.5" fill="#1e293b"/>
                                            <text x="100" y="25" font-size="7" font-weight="black" fill="#0369a1" text-anchor="middle">Vận tốc: 84,5 km/h</text>
                                            <rect x="0" y="95" width="200" height="15" fill="#16a34a" rx="1"/>
                                            <text x="100" y="106" font-size="7" font-weight="bold" fill="#ffffff" text-anchor="middle">Tiết 45 - Bài toán chuyển động số thập phân</text>
                                        </svg>
                                    </div>

                                    <!-- Vùng làm bài tự luận -->
                                    <div class="bg-slate-50 border border-slate-200 rounded-[2rem] p-6 md:p-8 space-y-6">
                                        <div class="text-center text-blue-800 font-black border-b border-slate-200 pb-2">BÀI GIẢI ĐIỀN SỐ</div>
                                        <div class="space-y-4 text-lg md:text-2xl font-bold text-slate-700">
                                            <div class="bg-white rounded-2xl border border-slate-200 p-4 shadow-inner">
                                                <div class="flex items-center gap-2 text-slate-400 text-xs md:text-sm font-bold mb-2 pb-2 border-b border-slate-100">
                                                    <span>📓</span> <span>Tóm tắt & Lời giải chi tiết</span>
                                                </div>
                                                <div class="relative bg-white" style="background-image: repeating-linear-gradient(transparent, transparent 39px, #c7d2fe 39px, #c7d2fe 40px); background-size: 100% 40px;">
                                                    <textarea id="ans-45-3-essay" class="w-full h-40 bg-transparent border-none outline-none resize-none font-bold font-mono text-slate-800 text-base md:text-xl leading-[40px] focus:ring-0" style="line-height: 40px; padding: 0 4px;" placeholder="Nhập bài giải chi tiết tại đây..."></textarea>
                                                </div>
                                            </div>

                                            <div class="flex items-center gap-2 flex-nowrap overflow-x-auto pt-2 border-t border-dashed border-slate-300">
                                                <span>Đáp số:</span>
                                                <input type="text" id="ans-45-3-result" class="h-12 border-2 border-blue-300 rounded-xl text-center outline-none font-black focus:border-blue-500 md:text-3xl" style="width: auto !important; min-width: 120px; padding: 0px !important; font-size: 1.5rem !important;" placeholder="">
                                                <span>km.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-4 flex justify-end">
                                <button id="btn-check-45-3" onclick="window.check_45_3()" style="background: linear-gradient(135deg, #2563eb, #0284c7);" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-45-3" class="hidden mt-4 p-4 bg-sky-50 rounded-2xl border border-sky-200 text-base md:text-xl font-medium text-slate-700">
                                <p class="font-bold text-blue-800 mb-1">✍️ Bài giải chi tiết:</p>
                                <p>Trong 1,2 giờ, ô tô đó đi được quãng đường là:</p>
                                <p class="font-mono pl-6">84,5 × 1,2 = 101,4 (km)</p>
                                <p class="pl-6">Đáp số: 101,4 km.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,
    "scripts": `
        <script>
            // Chuẩn hóa và làm sạch chuỗi đầu vào
            function normalizeVal(val) {
                if (!val) return '';
                return val.replace(/\\s+/g, '').replace(/,/g, '.').trim().toLowerCase();
            }

            // ==================== BÀI 1 TỔNG HỢP ====================
            window.check_45_1 = function() {
                function getVal(id) {
                    var el = document.getElementById(id);
                    return el ? el.value.trim() : '';
                }
                function isCommaVal(val) {
                    return val === ',' || val === '.';
                }

                // a) 7,5 × 3,4 = 25,50
                var a_r1 = getVal('ans-45-1-a-r1c1') === '7' && isCommaVal(getVal('ans-45-1-a-r1c2')) && getVal('ans-45-1-a-r1c3') === '5';
                var a_r2 = getVal('ans-45-1-a-r2c1') === '3' && isCommaVal(getVal('ans-45-1-a-r2c2')) && getVal('ans-45-1-a-r2c3') === '4';
                var a_r3 = getVal('ans-45-1-a-r3c1') === '3' && getVal('ans-45-1-a-r3c2') === '0' && getVal('ans-45-1-a-r3c3') === '0';
                var a_r4 = getVal('ans-45-1-a-r4c1') === '2' && getVal('ans-45-1-a-r4c2') === '2' && getVal('ans-45-1-a-r4c3') === '5';
                var a_r5 = getVal('ans-45-1-a-r5c1') === '2' && getVal('ans-45-1-a-r5c2') === '5' && isCommaVal(getVal('ans-45-1-a-r5c3')) && getVal('ans-45-1-a-r5c4') === '5' && (getVal('ans-45-1-a-r5c5') === '0' || getVal('ans-45-1-a-r5c5') === '');
                var isCorrectA = a_r1 && a_r2 && a_r3 && a_r4 && a_r5;

                // b) 21,9 × 5,1 = 111,69
                var b_r1 = getVal('ans-45-1-b-r1c1') === '2' && getVal('ans-45-1-b-r1c2') === '1' && isCommaVal(getVal('ans-45-1-b-r1c3')) && getVal('ans-45-1-b-r1c4') === '9';
                var b_r2 = getVal('ans-45-1-b-r2c1') === '5' && isCommaVal(getVal('ans-45-1-b-r2c2')) && getVal('ans-45-1-b-r2c3') === '1';
                var b_r3 = getVal('ans-45-1-b-r3c1') === '2' && getVal('ans-45-1-b-r3c2') === '1' && getVal('ans-45-1-b-r3c3') === '9';
                var b_r4 = getVal('ans-45-1-b-r4c1') === '1' && getVal('ans-45-1-b-r4c2') === '0' && getVal('ans-45-1-b-r4c3') === '9' && getVal('ans-45-1-b-r4c4') === '5';
                var b_r5 = getVal('ans-45-1-b-r5c1') === '1' && getVal('ans-45-1-b-r5c2') === '1' && getVal('ans-45-1-b-r5c3') === '1' && isCommaVal(getVal('ans-45-1-b-r5c4')) && getVal('ans-45-1-b-r5c5') === '6' && getVal('ans-45-1-b-r5c6') === '9';
                var isCorrectB = b_r1 && b_r2 && b_r3 && b_r4 && b_r5;

                // c) 8,41 × 2,5 = 21,025
                var c_r1 = getVal('ans-45-1-c-r1c1') === '8' && isCommaVal(getVal('ans-45-1-c-r1c2')) && getVal('ans-45-1-c-r1c3') === '4' && getVal('ans-45-1-c-r1c4') === '1';
                var c_r2 = getVal('ans-45-1-c-r2c1') === '2' && isCommaVal(getVal('ans-45-1-c-r2c2')) && getVal('ans-45-1-c-r2c3') === '5';
                var c_r3 = getVal('ans-45-1-c-r3c1') === '4' && getVal('ans-45-1-c-r3c2') === '2' && getVal('ans-45-1-c-r3c3') === '0' && getVal('ans-45-1-c-r3c4') === '5';
                var c_r4 = getVal('ans-45-1-c-r4c1') === '1' && getVal('ans-45-1-c-r4c2') === '6' && getVal('ans-45-1-c-r4c3') === '8' && getVal('ans-45-1-c-r4c4') === '2';
                var c_r5 = getVal('ans-45-1-c-r5c1') === '2' && getVal('ans-45-1-c-r5c2') === '1' && isCommaVal(getVal('ans-45-1-c-r5c3')) && getVal('ans-45-1-c-r5c4') === '0' && getVal('ans-45-1-c-r5c5') === '2' && getVal('ans-45-1-c-r5c6') === '5';
                var isCorrectC = c_r1 && c_r2 && c_r3 && c_r4 && c_r5;

                // d) 3,08 × 0,73 = 2,2484
                var d_r1 = getVal('ans-45-1-d-r1c1') === '3' && isCommaVal(getVal('ans-45-1-d-r1c2')) && getVal('ans-45-1-d-r1c3') === '0' && getVal('ans-45-1-d-r1c4') === '8';
                var d_r2 = getVal('ans-45-1-d-r2c1') === '0' && isCommaVal(getVal('ans-45-1-d-r2c2')) && getVal('ans-45-1-d-r2c3') === '7' && getVal('ans-45-1-d-r2c4') === '3';
                var d_r3 = getVal('ans-45-1-d-r3c1') === '9' && getVal('ans-45-1-d-r3c2') === '2' && getVal('ans-45-1-d-r3c3') === '4';
                var d_r4 = getVal('ans-45-1-d-r4c1') === '2' && getVal('ans-45-1-d-r4c2') === '1' && getVal('ans-45-1-d-r4c3') === '5' && getVal('ans-45-1-d-r4c4') === '6';
                var d_r5 = getVal('ans-45-1-d-r5c1') === '2' && isCommaVal(getVal('ans-45-1-d-r5c2')) && getVal('ans-45-1-d-r5c3') === '2' && getVal('ans-45-1-d-r5c4') === '4' && getVal('ans-45-1-d-r5c5') === '8' && getVal('ans-45-1-d-r5c6') === '4';
                var isCorrectD = d_r1 && d_r2 && d_r3 && d_r4 && d_r5;

                var isCorrect = isCorrectA && isCorrectB && isCorrectC && isCorrectD;
                var rightAns = "a) 25,50 ; b) 111,69 ; c) 21,025 ; d) 2,2484";
                var studentAns = "a) " + (isCorrectA ? "Đúng" : "Chưa đúng") + 
                                 " ; b) " + (isCorrectB ? "Đúng" : "Chưa đúng") + 
                                 " ; c) " + (isCorrectC ? "Đúng" : "Chưa đúng") + 
                                 " ; d) " + (isCorrectD ? "Đúng" : "Chưa đúng");

                var meta = window.MATH_BUILDER_METADATA.bai_tap[0];
                if (window.showMathFeedback) {
                    window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
                }
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-45-1', 0, 4, isCorrect ? 4 : 0);
                }
            };

            // ==================== BÀI 2 CHECK ====================
            window.check_45_2 = function() {
                var a = normalizeVal(document.getElementById('ans-45-2-a').value);
                var b = normalizeVal(document.getElementById('ans-45-2-b').value);
                var c = normalizeVal(document.getElementById('ans-45-2-c').value);

                var isCorrect = a === '3.648' && b === '36.48' && c === '0.3648';
                var rightAns = "a) 3,648; b) 36,48; c) 0,3648";
                var studentAns = "a) " + a + "; b) " + b + "; c) " + c;

                var meta = window.MATH_BUILDER_METADATA.bai_tap[1];
                if (window.showMathFeedback) {
                    window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
                }
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-45-2', 0, 3, isCorrect ? 3 : 0);
                }
            };

            // ==================== BÀI 3 CHECK ====================
            window.check_45_3 = function() {
                var essayVal = normalizeVal(document.getElementById('ans-45-3-essay').value);
                var resultVal = normalizeVal(document.getElementById('ans-45-3-result').value);

                var isCorrect = (essayVal.includes('101.4') || essayVal.includes('101,4')) && (resultVal === '101.4' || resultVal === '101,4');
                var rightAns = "Quãng đường: 84,5 × 1,2 = 101,4 km. Đáp số: 101,4 km";
                var studentAns = "Lời giải: " + document.getElementById('ans-45-3-essay').value + " | Đáp số: " + document.getElementById('ans-45-3-result').value;

                var meta = window.MATH_BUILDER_METADATA.bai_tap[2];
                if (window.showMathFeedback) {
                    window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
                }
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-45-3', 0, 1, isCorrect ? 1 : 0);
                }
            };

            window.toggleSolution = function(elementId) {
                var el = document.getElementById(elementId);
                if (el) {
                    if (el.classList.contains('hidden')) {
                        el.classList.remove('hidden');
                    } else {
                        el.classList.add('hidden');
                    }
                }
            };
        
             // Tự động thay đổi kích thước ô nhập liệu khi gõ dấu phẩy/chấm
             function setupAutoResizeInputs() {
                 document.querySelectorAll('input[id^="ans-45-1-"]').forEach(function(input) {
                     input.style.setProperty('width', '40px', 'important');
                 });
             }
             setupAutoResizeInputs();
             setTimeout(setupAutoResizeInputs, 100);
             setTimeout(setupAutoResizeInputs, 500);
        </script>
    `
};

window.lesson45 = lesson45;
export default lesson45;
