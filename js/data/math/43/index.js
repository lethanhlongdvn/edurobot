const metadata = {
    "lessonInfo": {
        "period": "43",
        "week": "9",
        "topic": "Số thập phân",
        "title": "BÀI 20: PHÉP TRỪ SỐ THẬP PHÂN (TIẾT 2)",
        "desc": "Luyện tập phép trừ số thập phân, tìm thành phần chưa biết của phép tính, giải bài toán thực tế và tìm khối lượng rô-bốt thông qua hệ cân đĩa."
    },
    "bai_tap": [
        {
            "id": "43_1",
            "type": "fill_multiple",
            "title": "Đặt tính rồi tính",
            "answers": [],
            "guidance": "Viết số trừ dưới số bị trừ sao cho các chữ số ở cùng một hàng đặt thẳng cột với nhau, dấu phẩy thẳng cột với dấu phẩy. Coi các chữ số thiếu ở phần thập phân là 0 để thực hiện phép trừ.",
            "solution": "a) 25,9 - 13,84 = 12,06.<br>b) 7,6 - 1,51 = 6,09.<br>c) 21,4 - 6 = 15,4.<br>d) 9 - 3,5 = 5,5."
        },
        {
            "id": "43_2_a",
            "type": "fill_multiple",
            "title": "Tìm số chưa biết a) 8,9 + ? = 28,501",
            "answers": ["19.601"],
            "guidance": "Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết.",
            "solution": "Cách giải:<br>  8,9 + x = 28,501<br>  x = 28,501 - 8,9<br>  x = 19,601"
        },
        {
            "id": "43_2_b",
            "type": "fill_multiple",
            "title": "Tìm số chưa biết b) ? + 8,16 = 17,5",
            "answers": ["9.34"],
            "guidance": "Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết.",
            "solution": "Cách giải:<br>  x + 8,16 = 17,5<br>  x = 17,5 - 8,16<br>  x = 9,34"
        },
        {
            "id": "43_2_c",
            "type": "fill_multiple",
            "title": "Tìm số chưa biết c) ? - 6,17 = 11,83",
            "answers": ["18"],
            "guidance": "Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.",
            "solution": "Cách giải:<br>  x - 6,17 = 11,83<br>  x = 11,83 + 6,17<br>  x = 18"
        },
        {
            "id": "43_3",
            "type": "fill_multiple",
            "title": "Bài toán chiếc cọc sơn hai màu",
            "answers": ["12.4", "26.6"],
            "guidance": "Bước 1: Tính chiều dài đoạn màu đỏ (lấy chiều dài đoạn màu xanh trừ đi 1,8 dm).<br>Bước 2: Tính độ dài chiếc cọc bằng cách cộng chiều dài hai đoạn xanh và đỏ.",
            "solution": "Bài giải chi tiết:<br>Chiều dài của đoạn được sơn màu đỏ là:<br>  14,2 - 1,8 = 12,4 (dm)<br>Chiều dài của chiếc cọc đó là:<br>  14,2 + 12,4 = 26,6 (dm)<br>Đáp số: 26,6 dm."
        },
        {
            "id": "43_4",
            "type": "fill_multiple",
            "title": "Bài toán cân nặng của các rô-bốt",
            "answers": ["1.1", "3.6", "4.4"],
            "guidance": "Nhận xét tổng cân nặng của cả 3 rô-bốt bằng cách cộng cân nặng của các cặp cân đĩa rồi chia cho 2. Từ đó tìm được cân nặng từng rô-bốt.",
            "solution": "Bài giải chi tiết:<br>Tổng cân nặng của cả ba rô-bốt A, B, C là:<br>  (8 + 4,7 + 5,5) : 2 = 9,1 (kg)<br>Rô-bốt A cân nặng số ki-lô-gam là:<br>  9,1 - 8 = 1,1 (kg)<br>Rô-bốt B cân nặng số ki-lô-gam là:<br>  9,1 - 5,5 = 3,6 (kg)<br>Rô-bốt C cân nặng số ki-lô-gam là:<br>  9,1 - 4,7 = 4,4 (kg)<br>Đáp số: Rô-bốt A: 1,1 kg; Rô-bốt B: 3,6 kg; Rô-bốt C: 4,4 kg."
        }
    ],
    "quizPool": [
        { "question": "Tính nhẩm: 10 - 2.5 = ?", "options": ["7.5", "8.5", "7.9", "6.5"], "answer": 0 },
        { "question": "Tìm x, biết x + 2.5 = 6. Giá trị của x là:", "options": ["3.5", "4.5", "3.8", "8.5"], "answer": 0 },
        { "question": "Hiệu của 15.6 và 4.82 là:", "options": ["10.78", "11.78", "10.88", "11.88"], "answer": 0 },
        { "question": "Hiệu của 8 và 3.14 là:", "options": ["4.86", "5.86", "4.96", "5.96"], "answer": 0 },
        { "question": "Phép trừ 12.3 - 4.56 được đặt tính đúng khi:", "options": ["Chữ số 4 thẳng cột với chữ số 2", "Chữ số 5 thẳng cột với chữ số 2", "Chữ số 6 thẳng cột với chữ số 3", "Dấu phẩy đặt lệch nhau"], "answer": 0 },
        { "question": "Tìm x, biết x - 1.2 = 3.8. Giá trị của x là:", "options": ["5", "2.6", "4", "4.6"], "answer": 0 },
        { "question": "Tính nhẩm: 1.5 - 0.75 = ?", "options": ["0.75", "0.85", "0.65", "0.5"], "answer": 0 },
        { "question": "Một sợi dây dài 5.4 m. Người ta cắt đi 1.85 m. Sợi dây còn lại dài:", "options": ["3.55 m", "4.55 m", "3.65 m", "4.65 m"], "answer": 0 },
        { "question": "Tính nhẩm: 0.1 - 0.01 = ?", "options": ["0.09", "0.9", "0.99", "0.099"], "answer": 0 },
        { "question": "Điền dấu thích hợp: 15.6 - 3.4 ... 15.6 - 3.45", "options": [">", "<", "=", "Không so sánh được"], "answer": 0 },
        { "question": "Tìm x, biết 9.8 - x = 4.25. Giá trị của x là:", "options": ["5.55", "5.65", "4.55", "5.45"], "answer": 0 },
        { "question": "Một quả dưa hấu nặng 4.2 kg. Sau khi ăn đi 1.5 kg thì quả dưa hấu còn nặng:", "options": ["2.7 kg", "3.7 kg", "2.5 kg", "3.2 kg"], "answer": 0 },
        { "question": "Tính nhẩm: 12.5 - 6 = ?", "options": ["6.5", "11.9", "5.5", "7.5"], "answer": 0 },
        { "question": "Hiệu của hai số là 3.4. Nếu số bị trừ tăng thêm 1.2 thì hiệu mới là:", "options": ["4.6", "2.2", "3.4", "5.8"], "answer": 0 },
        { "question": "Tìm x, biết x + 0.85 = 1. Giá trị của x là:", "options": ["0.15", "0.25", "0.05", "0.85"], "answer": 0 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

// Hàm switch sub-tab của Bài 2
window.switchB2Tab = function(tabId) {
    const tabs = ['a', 'b', 'c'];
    tabs.forEach(t => {
        const tabEl = document.getElementById('b2-tab-' + t);
        const btnEl = document.getElementById('btn-b2-tab-' + t);
        if (tabEl && btnEl) {
            if (t === tabId) {
                tabEl.classList.remove('hidden');
                btnEl.className = "px-4 py-2 bg-blue-600 text-white font-black rounded-xl shadow-md transition-all text-sm md:text-lg";
            } else {
                tabEl.classList.add('hidden');
                btnEl.className = "px-4 py-2 bg-slate-100 text-blue-600 hover:bg-blue-50 font-black rounded-xl transition-all text-sm md:text-lg";
            }
        }
    });
};

// Hàm switch sub-tab của Bài 4
window.switchB4Tab = function(tabId) {
    const tabs = ['a', 'b', 'c'];
    tabs.forEach(t => {
        const tabEl = document.getElementById('b4-tab-' + t);
        const btnEl = document.getElementById('btn-b4-tab-' + t);
        if (tabEl && btnEl) {
            if (t === tabId) {
                tabEl.classList.remove('hidden');
                btnEl.className = "px-4 py-2 bg-blue-600 text-white font-black rounded-xl shadow-md transition-all text-sm md:text-lg";
            } else {
                tabEl.classList.add('hidden');
                btnEl.className = "px-4 py-2 bg-slate-100 text-blue-600 hover:bg-blue-50 font-black rounded-xl transition-all text-sm md:text-lg";
            }
        }
    });
};

export const lesson43 = {
    ...metadata.lessonInfo,
    metadata: metadata,
    quizPool: [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "content": `
        <div class="theory-section space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 pt-6 w-full mx-auto">
            <!-- Banner -->
            

            <!-- Ghi nhớ -->
            <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border border-blue-100 shadow-xl space-y-6">
                <div class="flex items-center gap-4 border-b border-blue-50 pb-4">
                    <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl">💡</div>
                    <h3 class="text-xl md:text-3xl font-black text-blue-900 uppercase tracking-tight">Quy tắc ghi nhớ</h3>
                </div>
                
                <div class="text-lg md:text-2xl text-slate-700 leading-relaxed space-y-4">
                    <p class="font-bold text-blue-800">Muốn trừ một số thập phân cho một số thập phân ta làm như sau:</p>
                    <ul class="list-disc pl-6 space-y-3">
                        <li>Viết số trừ dưới số bị trừ sao cho các chữ số ở cùng một hàng đặt <span class="text-blue-600 font-bold">thẳng cột</span> với nhau. Dấu phẩy thẳng cột với dấu phẩy.</li>
                        <li>Thực hiện phép trừ như trừ các số tự nhiên.</li>
                        <li>Viết dấu phẩy ở hiệu <span class="text-red-500 font-bold">thẳng cột</span> với các dấu phẩy của số bị trừ và số trừ.</li>
                    </ul>
                    <div class="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 font-medium mt-4">
                        <span class="font-bold">⚠️ Chú ý:</span> Nếu số chữ số ở phần thập phân của số bị trừ ít hơn số chữ số ở phần thập phân của số trừ, ta có thể viết thêm một số thích hợp chữ số <span class="font-bold text-amber-700">0</span> vào bên phải phần thập phân của số bị trừ, rồi trừ như trừ các số tự nhiên.
                    </div>
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
                                    <button onclick="window.toggleSolution('sol-43-1')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                                </div>

                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 font-mono text-slate-700 font-black">
                                    
                                    <!-- CỘT LẦN 1: phép a & b -->
                                    <div class="space-y-8">
                                        <!-- Phép tính a) 25,9 - 13,84 = 12,06 -->
                                        <div class="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center">
                                            <div class="mb-3 text-lg md:text-2xl font-black text-blue-700">a) 25,9 - 13,84</div>
                                            <div class="grid grid-cols-6 gap-y-2 items-center justify-items-center" style="grid-template-columns: 24px 40px 40px auto 40px 40px;">
                                                <!-- Row 1: 25,9 -->
                                                <span></span>
                                                <input type="text" id="ans-43-1-a-r1c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-43-1-a-r1c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-43-1-a-r1c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder=",">
                                                <input type="text" id="ans-43-1-a-r1c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                
                                                <!-- Row 2: - 13,84 -->
                                                <span class="text-blue-600 font-black">-</span>
                                                <input type="text" id="ans-43-1-a-r2c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-43-1-a-r2c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-43-1-a-r2c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder=",">
                                                <input type="text" id="ans-43-1-a-r2c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-43-1-a-r2c5" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                
                                                <div class="col-span-6 w-full border-t-2 border-slate-700 my-1"></div>
                                                <!-- Row 3: 12,06 -->
                                                <span></span>
                                                <input type="text" id="ans-43-1-a-r3c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-43-1-a-r3c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-43-1-a-r3c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder=",">
                                                <input type="text" id="ans-43-1-a-r3c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-43-1-a-r3c5" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            </div>
                                        </div>

                                        <!-- Phép tính b) 7,6 - 1,51 = 6,09 -->
                                        <div class="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center">
                                            <div class="mb-3 text-lg md:text-2xl font-black text-blue-700">b) 7,6 - 1,51</div>
                                            <div class="grid grid-cols-5 gap-y-2 items-center justify-items-center" style="grid-template-columns: 24px 40px auto 40px 40px;">
                                                <!-- Row 1: 7,6 -->
                                                <span></span>
                                                <input type="text" id="ans-43-1-b-r1c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-43-1-b-r1c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder=",">
                                                <input type="text" id="ans-43-1-b-r1c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                
                                                <!-- Row 2: - 1,51 -->
                                                <span class="text-blue-600 font-black">-</span>
                                                <input type="text" id="ans-43-1-b-r2c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-43-1-b-r2c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder=",">
                                                <input type="text" id="ans-43-1-b-r2c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-43-1-b-r2c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                
                                                <div class="col-span-5 w-full border-t-2 border-slate-700 my-1"></div>
                                                <!-- Row 3: 6,09 -->
                                                <span></span>
                                                <input type="text" id="ans-43-1-b-r3c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-43-1-b-r3c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder=",">
                                                <input type="text" id="ans-43-1-b-r3c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-43-1-b-r3c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            </div>
                                        </div>
                                    </div>

                                    <!-- CỘT LẦN 2: phép c & d -->
                                    <div class="space-y-8">
                                        <!-- Phép tính c) 21,4 - 6 = 15,4 -->
                                        <div class="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center">
                                            <div class="mb-3 text-lg md:text-2xl font-black text-blue-700">c) 21,4 - 6</div>
                                            <div class="grid grid-cols-5 gap-y-2 items-center justify-items-center" style="grid-template-columns: 24px 40px 40px auto 40px;">
                                                <!-- Row 1: 21,4 -->
                                                <span></span>
                                                <input type="text" id="ans-43-1-c-r1c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-43-1-c-r1c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-43-1-c-r1c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder=",">
                                                <input type="text" id="ans-43-1-c-r1c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                
                                                <!-- Row 2: - 6 -->
                                                <span class="text-blue-600 font-black">-</span><span></span>
                                                <input type="text" id="ans-43-1-c-r2c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span><span></span>
                                                
                                                <div class="col-span-5 w-full border-t-2 border-slate-700 my-1"></div>
                                                <!-- Row 3: 15,4 -->
                                                <span></span>
                                                <input type="text" id="ans-43-1-c-r3c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-43-1-c-r3c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-43-1-c-r3c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder=",">
                                                <input type="text" id="ans-43-1-c-r3c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            </div>
                                        </div>

                                        <!-- Phép tính d) 9 - 3,5 = 5,5 -->
                                        <div class="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center">
                                            <div class="mb-3 text-lg md:text-2xl font-black text-blue-700">d) 9 - 3,5</div>
                                            <div class="grid grid-cols-4 gap-y-2 items-center justify-items-center" style="grid-template-columns: 24px 40px auto 40px;">
                                                <!-- Row 1: 9 -->
                                                <span></span>
                                                <input type="text" id="ans-43-1-d-r1c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-43-1-d-r1c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder=",">
                                                <input type="text" id="ans-43-1-d-r1c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                
                                                <!-- Row 2: - 3,5 -->
                                                <span class="text-blue-600 font-black">-</span>
                                                <input type="text" id="ans-43-1-d-r2c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-43-1-d-r2c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder=",">
                                                <input type="text" id="ans-43-1-d-r2c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                
                                                <div class="col-span-4 w-full border-t-2 border-slate-700 my-1"></div>
                                                <!-- Row 3: 5,5 -->
                                                <span></span>
                                                <input type="text" id="ans-43-1-d-r3c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-43-1-d-r3c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder=",">
                                                <input type="text" id="ans-43-1-d-r3c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div id="sol-43-1" class="hidden mt-6 p-6 bg-sky-50 rounded-2xl border border-sky-200 text-lg md:text-2xl font-medium text-slate-700 w-full mx-auto">
                                    <p class="font-bold text-blue-800 mb-3 text-center">✍️ Đặt tính mẫu của cả 4 phép tính:</p>
                                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center font-mono font-black">
                                        <!-- a -->
                                        <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                            <div class="mb-2 text-sm text-blue-600">Phép tính a</div>
                                            <div class="grid grid-cols-6 gap-1 items-center" style="grid-template-columns: 16px 28px 28px 28px 28px 28px;">
                                                <span></span><span>2</span><span>5</span><span>,</span><span>9</span><span></span>
                                                <span class="text-blue-600">-</span><span>1</span><span>3</span><span>,</span><span>8</span><span>4</span>
                                                <div class="col-span-6 border-t border-slate-700 my-1"></div>
                                                <span></span><span>1</span><span>2</span><span>,</span><span>0</span><span>6</span>
                                            </div>
                                        </div>
                                        <!-- b -->
                                        <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                            <div class="mb-2 text-sm text-blue-600">Phép tính b</div>
                                            <div class="grid grid-cols-5 gap-1 items-center" style="grid-template-columns: 16px 28px 28px 28px 28px;">
                                                <span></span><span>7</span><span>,</span><span>6</span><span></span>
                                                <span class="text-blue-600">-</span><span>1</span><span>,</span><span>5</span><span>1</span>
                                                <div class="col-span-5 border-t border-slate-700 my-1"></div>
                                                <span></span><span>6</span><span>,</span><span>0</span><span>9</span>
                                            </div>
                                        </div>
                                        <!-- c -->
                                        <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                            <div class="mb-2 text-sm text-blue-600">Phép tính c</div>
                                            <div class="grid grid-cols-5 gap-1 items-center" style="grid-template-columns: 16px 28px 28px 28px 28px;">
                                                <span></span><span>2</span><span>1</span><span>,</span><span>4</span>
                                                <span class="text-blue-600">-</span><span></span><span>6</span><span></span><span></span>
                                                <div class="col-span-5 border-t border-slate-700 my-1"></div>
                                                <span></span><span>1</span><span>5</span><span>,</span><span>4</span><span></span>
                                            </div>
                                        </div>
                                        <!-- d -->
                                        <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                            <div class="mb-2 text-sm text-blue-600">Phép tính d</div>
                                            <div class="grid grid-cols-4 gap-1 items-center" style="grid-template-columns: 16px 28px 28px 28px;">
                                                <span></span><span>9</span><span>,</span><span>0</span>
                                                <span class="text-blue-600">-</span><span>3</span><span>,</span><span>5</span>
                                                <div class="col-span-4 border-t border-slate-700 my-1"></div>
                                                <span></span><span>5</span><span>,</span><span>5</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end mt-6">
                                <button id="btn-check-43-1" onclick="window.check_43_1()" title="kiểm tra" class="w-16 h-16 text-white rounded-2xl font-black text-xl flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all" style="background: linear-gradient(135deg, #2563eb, #0284c7);">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- TRANG 2: BÀI 2 (TÌM X KHÔNG CHIA TAB) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="glass-card p-4 md:p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden flex flex-col justify-between min-h-[550px]">
                            <div>
                                <div class="flex items-center gap-4 mb-6">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform rotate-2">2</div>
                                    <h3 class="text-lg md:text-2xl text-blue-900 font-black uppercase tracking-tighter">Bài 2. Tìm số chưa biết</h3>
                                </div>

                                <div class="space-y-6 w-full mx-auto">
                                    <!-- Câu a -->
                                    <div class="p-4 bg-slate-50 border border-slate-200 rounded-3xl space-y-3">
                                        <div class="flex items-center justify-start gap-4 flex-nowrap whitespace-nowrap overflow-x-auto w-full">
                                            <div class="flex items-center gap-2 text-lg md:text-2xl font-bold text-slate-700">
                                                <span class="text-blue-800 font-black">a)</span>
                                                <span>8,9 +</span>
                                                <input type="text" id="ans-43-2-a" class="w-24 h-11 border-2 border-blue-200 rounded-xl text-center outline-none font-black focus:border-blue-500 bg-white" placeholder="">
                                                <span>= 28,501</span>
                                            </div>
                                            <div class="flex items-center gap-2 flex-shrink-0">
                                                <button onclick="window.toggleSolution('sol-43-2a')" class="bg-amber-500 text-white text-xs font-black px-3 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                                                <button id="btn-check-43-2a" onclick="window.check_43_2a()" title="kiểm tra" class="w-8 h-8 text-white rounded-lg font-black text-sm flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all style-blue" style="background: linear-gradient(135deg, #2563eb, #0284c7);">E</button>
                                            </div>
                                        </div>
                                        <div id="sol-43-2a" class="hidden p-4 bg-sky-50 rounded-2xl border border-sky-100 font-medium">
                                            <p class="font-bold text-blue-800">📝 Hướng dẫn:</p>
                                            <p class="font-mono">x = 28,501 - 8,9 = 19,601</p>
                                        </div>
                                    </div>

                                    <!-- Câu b -->
                                    <div class="p-4 bg-slate-50 border border-slate-200 rounded-3xl space-y-3">
                                        <div class="flex items-center justify-start gap-4 flex-nowrap whitespace-nowrap overflow-x-auto w-full">
                                            <div class="flex items-center gap-2 text-lg md:text-2xl font-bold text-slate-700">
                                                <span class="text-blue-800 font-black">b)</span>
                                                <input type="text" id="ans-43-2-b" class="w-24 h-11 border-2 border-blue-200 rounded-xl text-center outline-none font-black focus:border-blue-500 bg-white" placeholder="">
                                                <span>+ 8,16 = 17,5</span>
                                            </div>
                                            <div class="flex items-center gap-2 flex-shrink-0">
                                                <button onclick="window.toggleSolution('sol-43-2b')" class="bg-amber-500 text-white text-xs font-black px-3 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                                                <button id="btn-check-43-2b" onclick="window.check_43_2b()" title="kiểm tra" class="w-8 h-8 text-white rounded-lg font-black text-sm flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all style-blue" style="background: linear-gradient(135deg, #2563eb, #0284c7);">E</button>
                                            </div>
                                        </div>
                                        <div id="sol-43-2b" class="hidden p-4 bg-sky-50 rounded-2xl border border-sky-100 font-medium">
                                            <p class="font-bold text-blue-800">📝 Hướng dẫn:</p>
                                            <p class="font-mono">x = 17,5 - 8,16 = 9,34</p>
                                        </div>
                                    </div>

                                    <!-- Câu c -->
                                    <div class="p-4 bg-slate-50 border border-slate-200 rounded-3xl space-y-3">
                                        <div class="flex items-center justify-start gap-4 flex-nowrap whitespace-nowrap overflow-x-auto w-full">
                                            <div class="flex items-center gap-2 text-lg md:text-2xl font-bold text-slate-700">
                                                <span class="text-blue-800 font-black">c)</span>
                                                <input type="text" id="ans-43-2-c" class="w-24 h-11 border-2 border-blue-200 rounded-xl text-center outline-none font-black focus:border-blue-500 bg-white" placeholder="">
                                                <span>- 6,17 = 11,83</span>
                                            </div>
                                            <div class="flex items-center gap-2 flex-shrink-0">
                                                <button onclick="window.toggleSolution('sol-43-2c')" class="bg-amber-500 text-white text-xs font-black px-3 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                                                <button id="btn-check-43-2c" onclick="window.check_43_2c()" title="kiểm tra" class="w-8 h-8 text-white rounded-lg font-black text-sm flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all style-blue" style="background: linear-gradient(135deg, #2563eb, #0284c7);">E</button>
                                            </div>
                                        </div>
                                        <div id="sol-43-2c" class="hidden p-4 bg-sky-50 rounded-2xl border border-sky-100 font-medium">
                                            <p class="font-bold text-blue-800">📝 Hướng dẫn:</p>
                                            <p class="font-mono">x = 11,83 + 6,17 = 18</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- TRANG 3: BÀI 3 (CHIẾC CỌC SƠN HAI MÀU) -> 1 CỘT -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="glass-card p-4 md:p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden flex flex-col justify-between min-h-[550px]">
                            <div>
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">3</div>
                                        <h3 class="text-lg md:text-2xl text-blue-900 font-black uppercase tracking-tighter">Bài 3. Bài toán chiếc cọc</h3>
                                    </div>
                                    <button onclick="window.toggleSolution('sol-43-3')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                                </div>

                                <div class="space-y-6 w-full mx-auto">
                                    <!-- Hình vẽ mô tả chiếc cọc -->
                                    <div class="overflow-hidden rounded-3xl border border-slate-200 shadow-md max-w-sm mx-auto flex items-center justify-center p-2 bg-white">
                                        <img src="assets/images/toan/toan_tap_1/43/3.png" alt="Chiếc cọc" class="w-56 h-auto object-contain">
                                    </div>

                                    <!-- Đề bài -->
                                    <div class="p-6 bg-sky-50 rounded-[2rem] border border-sky-100 text-lg md:text-2xl font-medium leading-relaxed">
                                        <p class="font-bold text-sky-800"></p>
                                        <p class="text-slate-600">
                                            Một chiếc cọc được sơn hai màu xanh và đỏ (như hình vẽ). Biết đoạn màu xanh dài <strong>14,2 dm</strong> và dài hơn đoạn màu đỏ là <strong>1,8 dm</strong>. Tìm độ dài chiếc cọc đó.
                                        </p>
                                    </div>

                                    <!-- Bài làm điền kết quả -->
                                    <div class="bg-slate-50 border border-slate-200 rounded-[2rem] p-6 md:p-8 space-y-6">
                                        <div class="text-center text-blue-800 font-black border-b border-slate-200 pb-2">BÀI GIẢI TỰ LUẬN ĐIỀN SỐ</div>
                                        <div class="space-y-4 text-lg md:text-2xl font-bold text-slate-700">
                                            <div class="flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto w-full">
                                                <span>Chiều dài đoạn màu đỏ là:</span>
                                                <input type="text" id="ans-43-3-red" class="h-12 border-2 border-blue-300 rounded-xl text-center outline-none font-black focus:border-blue-500 md:text-3xl" style="width: auto !important; min-width: 120px; padding: 0px !important; font-size: 1.5rem !important;" placeholder="">
                                                <span>dm.</span>
                                            </div>
                                            <div class="flex items-center gap-2 pt-4 border-t border-dashed border-slate-300 flex-nowrap whitespace-nowrap overflow-x-auto w-full">
                                                <span>Độ dài chiếc cọc đó là:</span>
                                                <input type="text" id="ans-43-3-total" class="h-12 border-2 border-blue-300 rounded-xl text-center outline-none font-black focus:border-blue-500 md:text-3xl" style="width: auto !important; min-width: 120px; padding: 0px !important; font-size: 1.5rem !important;" placeholder="">
                                                <span>dm.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="sol-43-3" class="hidden mt-4 p-4 bg-sky-50 rounded-2xl border border-sky-200 text-lg md:text-xl font-medium text-slate-700">
                                    <p class="font-bold text-blue-800 mb-2">📝 Lời giải chi tiết:</p>
                                    <p>Chiều dài đoạn cọc màu đỏ là:</p>
                                    <p class="font-mono pl-4">14,2 - 1,8 = 12,4 (dm)</p>
                                    <p class="mt-2">Chiều dài của chiếc cọc đó là:</p>
                                    <p class="font-mono pl-4">14,2 + 12,4 = 26,6 (dm)</p>
                                    <p class="mt-2 font-bold">Đáp số: 26,6 dm</p>
                                </div>
                            </div>
                            <div class="flex justify-end mt-6">
                                <button id="btn-check-43-3" onclick="window.check_43_3()" title="kiểm tra" class="w-16 h-16 text-white rounded-2xl font-black text-xl flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all" style="background: linear-gradient(135deg, #2563eb, #0284c7);">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- TRANG 4: BÀI 4 (CÂN NẶNG RÔ-BỐT KHÔNG CHIA TAB) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="glass-card p-4 md:p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden flex flex-col justify-between min-h-[550px]">
                            <div>
                                <div class="flex items-center justify-between mb-6">
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">4</div>
                                        <h3 class="text-lg md:text-2xl text-blue-900 font-black uppercase tracking-tighter">Bài 4. Cân nặng các rô-bốt</h3>
                                    </div>
                                    <button onclick="window.toggleSolution('sol-43-4')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                                </div>

                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                                    <div class="overflow-hidden rounded-3xl border border-slate-200 shadow-md w-full w-full mx-auto flex items-center justify-center p-2 bg-white">
                                        <img src="assets/images/toan/toan_tap_1/43/4.png" alt="Cân nặng các rô-bốt" class="w-full h-auto object-contain">
                                    </div>

                                    <div class="space-y-4">
                                        <!-- Câu a -->
                                        <div class="p-4 bg-slate-50 border border-slate-200 rounded-3xl flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto w-full text-lg md:text-2xl font-bold text-slate-700">
                                            <span class="text-blue-800 font-black">a)</span>
                                            <span>Rô-bốt A nặng:</span>
                                            <input type="text" id="ans-43-4-a" class="w-24 h-11 border-2 border-blue-200 rounded-xl text-center outline-none font-black focus:border-blue-500 bg-white" placeholder="">
                                            <span>kg.</span>
                                        </div>
                                        <!-- Câu b -->
                                        <div class="p-4 bg-slate-50 border border-slate-200 rounded-3xl flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto w-full text-lg md:text-2xl font-bold text-slate-700">
                                            <span class="text-blue-800 font-black">b)</span>
                                            <span>Rô-bốt B nặng:</span>
                                            <input type="text" id="ans-43-4-b" class="w-24 h-11 border-2 border-blue-200 rounded-xl text-center outline-none font-black focus:border-blue-500 bg-white" placeholder="">
                                            <span>kg.</span>
                                        </div>
                                        <!-- Câu c -->
                                        <div class="p-4 bg-slate-50 border border-slate-200 rounded-3xl flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto w-full text-lg md:text-2xl font-bold text-slate-700">
                                            <span class="text-blue-800 font-black">c)</span>
                                            <span>Rô-bốt C nặng:</span>
                                            <input type="text" id="ans-43-4-c" class="w-24 h-11 border-2 border-blue-200 rounded-xl text-center outline-none font-black focus:border-blue-500 bg-white" placeholder="">
                                            <span>kg.</span>
                                        </div>
                                    </div>
                                </div>

                                <div id="sol-43-4" class="hidden mt-4 p-4 bg-sky-50 rounded-2xl border border-sky-200 text-lg md:text-xl font-medium text-slate-700">
                                    <p class="font-bold text-blue-800 mb-2">📝 Hướng dẫn giải chi tiết:</p>
                                    <p>Ta có các mối quan hệ cân nặng:</p>
                                    <p class="pl-4 font-semibold text-blue-700">Rô-bốt C + Rô-bốt B = 8 kg</p>
                                    <p class="pl-4 font-semibold text-blue-700">Rô-bốt A + Rô-bốt B = 4,7 kg</p>
                                    <p class="pl-4 font-semibold text-blue-700">Rô-bốt C + Rô-bốt A = 5,5 kg</p>
                                    <p class="mt-2">Cộng cả 3 vế ta được 2 lần tổng cân nặng cả 3 rô-bốt:</p>
                                    <p class="pl-4 font-mono">2 * (A + B + C) = 8 + 4,7 + 5,5 = 18,2 (kg)</p>
                                    <p class="mt-1">Tổng cân nặng cả 3 rô-bốt là:</p>
                                    <p class="pl-4 font-mono">A + B + C = 18,2 : 2 = 9,1 (kg)</p>
                                    <p class="mt-2">Từ đó ta tính được cân nặng từng rô-bốt:</p>
                                    <p class="pl-4">Cân nặng của Rô-bốt A: <span class="font-mono font-bold">9,1 - 8 = 1,1 (kg)</span></p>
                                    <p class="pl-4">Cân nặng của Rô-bốt B: <span class="font-mono font-bold">9,1 - 5,5 = 3,6 (kg)</span></p>
                                    <p class="pl-4">Cân nặng của Rô-bốt C: <span class="font-mono font-bold">9,1 - 4,7 = 4,4 (kg)</span></p>
                                </div>
                            </div>
                            <div class="flex justify-end mt-6">
                                <button id="btn-check-43-4" onclick="window.check_43_4()" title="kiểm tra" class="w-16 h-16 text-white rounded-2xl font-black text-xl flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all" style="background: linear-gradient(135deg, #2563eb, #0284c7);">E</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ` + `
        <script>
            // Tự động thay đổi kích thước ô nhập liệu khi gõ dấu phẩy/chấm
            function setupAutoResizeInputs() {
                function updateWidth(input) {
                    if (input.value === ',' || input.value === '.') {
                        input.style.setProperty('width', '16px', 'important');
                    } else {
                        input.style.setProperty('width', '40px', 'important');
                    }
                }
                
                document.querySelectorAll('input[id^="ans-43-1-"]').forEach(function(input) {
                    // Lắng nghe sự kiện gõ
                    input.addEventListener('input', function() {
                        updateWidth(input);
                    });
                    // Chạy ngay lần đầu
                    updateWidth(input);
                });
            }
            
            // Chạy thiết lập khi script được load và sau các khoảng thời gian để đảm bảo DOM đã sẵn sàng
            setupAutoResizeInputs();
            setTimeout(setupAutoResizeInputs, 100);
            setTimeout(setupAutoResizeInputs, 500);

            // Chuẩn hóa và làm sạch chuỗi đầu vào
            function normalizeVal(val) {
                if (!val) return '';
                return val.replace(/\\s+/g, '').replace(/,/g, '.').trim().toLowerCase();
            }

            // ==================== BÀI 1 TỔNG HỢP ====================
            window.check_43_1 = function() {
                function getVal(id) {
                    var el = document.getElementById(id);
                    return el ? el.value.trim() : '';
                }
                function isCommaVal(val) {
                    return val === ',' || val === '.';
                }

                // Check a) 25,9 - 13,84 = 12,06
                var a_r1 = getVal('ans-43-1-a-r1c1') === '2' && getVal('ans-43-1-a-r1c2') === '5' && isCommaVal(getVal('ans-43-1-a-r1c3')) && getVal('ans-43-1-a-r1c4') === '9';
                var a_r2 = getVal('ans-43-1-a-r2c1') === '1' && getVal('ans-43-1-a-r2c2') === '3' && isCommaVal(getVal('ans-43-1-a-r2c3')) && getVal('ans-43-1-a-r2c4') === '8' && getVal('ans-43-1-a-r2c5') === '4';
                var a_r3 = getVal('ans-43-1-a-r3c1') === '1' && getVal('ans-43-1-a-r3c2') === '2' && isCommaVal(getVal('ans-43-1-a-r3c3')) && getVal('ans-43-1-a-r3c4') === '0' && getVal('ans-43-1-a-r3c5') === '6';
                var isCorrectA = a_r1 && a_r2 && a_r3;

                // Check b) 7,6 - 1,51 = 6,09
                var b_r1 = getVal('ans-43-1-b-r1c1') === '7' && isCommaVal(getVal('ans-43-1-b-r1c2')) && getVal('ans-43-1-b-r1c3') === '6';
                var b_r2 = getVal('ans-43-1-b-r2c1') === '1' && isCommaVal(getVal('ans-43-1-b-r2c2')) && getVal('ans-43-1-b-r2c3') === '5' && getVal('ans-43-1-b-r2c4') === '1';
                var b_r3 = getVal('ans-43-1-b-r3c1') === '6' && isCommaVal(getVal('ans-43-1-b-r3c2')) && getVal('ans-43-1-b-r3c3') === '0' && getVal('ans-43-1-b-r3c4') === '9';
                var isCorrectB = b_r1 && b_r2 && b_r3;

                // Check c) 21,4 - 6 = 15,4
                var c_r1 = getVal('ans-43-1-c-r1c1') === '2' && getVal('ans-43-1-c-r1c2') === '1' && isCommaVal(getVal('ans-43-1-c-r1c3')) && getVal('ans-43-1-c-r1c4') === '4';
                var c_r2 = getVal('ans-43-1-c-r2c1') === '6';
                var c_r3 = getVal('ans-43-1-c-r3c1') === '1' && getVal('ans-43-1-c-r3c2') === '5' && isCommaVal(getVal('ans-43-1-c-r3c3')) && getVal('ans-43-1-c-r3c4') === '4';
                var isCorrectC = c_r1 && c_r2 && c_r3;

                // Check d) 9 - 3,5 = 5,5
                var d_r1_full = getVal('ans-43-1-d-r1c1') === '9' && isCommaVal(getVal('ans-43-1-d-r1c2')) && getVal('ans-43-1-d-r1c3') === '0';
                var d_r1_short = getVal('ans-43-1-d-r1c1') === '9' && getVal('ans-43-1-d-r1c2') === '' && getVal('ans-43-1-d-r1c3') === '';
                var d_r1 = d_r1_full || d_r1_short;
                var d_r2 = getVal('ans-43-1-d-r2c1') === '3' && isCommaVal(getVal('ans-43-1-d-r2c2')) && getVal('ans-43-1-d-r2c3') === '5';
                var d_r3 = getVal('ans-43-1-d-r3c1') === '5' && isCommaVal(getVal('ans-43-1-d-r3c2')) && getVal('ans-43-1-d-r3c3') === '5';
                var isCorrectD = d_r1 && d_r2 && d_r3;

                var isCorrect = isCorrectA && isCorrectB && isCorrectC && isCorrectD;
                var rightAns = "a) 12,06 ; b) 6,09 ; c) 15,4 ; d) 5,5";
                var studentAns = "a) " + (isCorrectA ? "Đúng" : "Chưa đúng") + 
                                 " ; b) " + (isCorrectB ? "Đúng" : "Chưa đúng") + 
                                 " ; c) " + (isCorrectC ? "Đúng" : "Chưa đúng") + 
                                 " ; d) " + (isCorrectD ? "Đúng" : "Chưa đúng");

                var meta = window.MATH_BUILDER_METADATA.bai_tap[0];
                if (window.showMathFeedback) {
                    window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
                }
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-43-1', 0, 4, isCorrect ? 4 : 0);
                }
            };

            // ==================== BÀI 2 ====================
            window.check_43_2a = function() {
                var val = normalizeVal(document.getElementById('ans-43-2-a').value);
                var isCorrect = (val === '19.601');
                var rightAns = "19,601";
                var meta = window.MATH_BUILDER_METADATA.bai_tap[1];
                if (window.showMathFeedback) {
                    window.showMathFeedback(isCorrect, rightAns, val, meta.guidance, meta.solution);
                }
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-43-2a', 0, 1, isCorrect ? 1 : 0);
                }
            };

            window.check_43_2b = function() {
                var val = normalizeVal(document.getElementById('ans-43-2-b').value);
                var isCorrect = (val === '9.34');
                var rightAns = "9,34";
                var meta = window.MATH_BUILDER_METADATA.bai_tap[2];
                if (window.showMathFeedback) {
                    window.showMathFeedback(isCorrect, rightAns, val, meta.guidance, meta.solution);
                }
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-43-2b', 0, 1, isCorrect ? 1 : 0);
                }
            };

            window.check_43_2c = function() {
                var val = normalizeVal(document.getElementById('ans-43-2-c').value);
                var isCorrect = (val === '18' || val === '18.0' || val === '18.00');
                var rightAns = "18";
                var meta = window.MATH_BUILDER_METADATA.bai_tap[3];
                if (window.showMathFeedback) {
                    window.showMathFeedback(isCorrect, rightAns, val, meta.guidance, meta.solution);
                }
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-43-2c', 0, 1, isCorrect ? 1 : 0);
                }
            };

            // ==================== BÀI 3 ====================
            window.check_43_3 = function() {
                var redVal = normalizeVal(document.getElementById('ans-43-3-red').value);
                var totalVal = normalizeVal(document.getElementById('ans-43-3-total').value);
                
                var isRedCorrect = (redVal === '12.4');
                var isTotalCorrect = (totalVal === '26.6');
                var isCorrect = isRedCorrect && isTotalCorrect;
                
                var rightAns = "Đoạn màu đỏ: 12,4 dm ; Cả cọc: 26,6 dm";
                var studentAns = "Màu đỏ: " + redVal + " ; Cả cọc: " + totalVal;
                var meta = window.MATH_BUILDER_METADATA.bai_tap[4];
                if (window.showMathFeedback) {
                    window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
                }
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-43-3', 0, 2, isCorrect ? 2 : 0);
                }
            };

            // ==================== BÀI 4 ====================
            window.check_43_4 = function() {
                var valA = normalizeVal(document.getElementById('ans-43-4-a').value);
                var valB = normalizeVal(document.getElementById('ans-43-4-b').value);
                var valC = normalizeVal(document.getElementById('ans-43-4-c').value);
                
                var isACorrect = (valA === '1.1');
                var isBCorrect = (valB === '3.6');
                var isCCorrect = (valC === '4.4');
                var isCorrect = isACorrect && isBCorrect && isCCorrect;
                
                var rightAns = "A: 1,1 kg ; B: 3,6 kg ; C: 4,4 kg";
                var studentAns = "A: " + valA + " ; B: " + valB + " ; C: " + valC;
                var meta = window.MATH_BUILDER_METADATA.bai_tap[5];
                if (window.showMathFeedback) {
                    window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
                }
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-43-4', 0, 3, isCorrect ? 3 : 0);
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
        </script>
    `
};

window.lesson43 = lesson43;
export default lesson43;
