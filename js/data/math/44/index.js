const metadata = {
    "lessonInfo": {
        "period": "44",
        "week": "9",
        "topic": "Số thập phân",
        "title": "BÀI 21: PHÈP NHÂN SỐ THẬP PHÂN (TIẾT 1)",
        "desc": "Tìm hiểu quy tắc nhân một số thập phân với một số tự nhiên; rèn luyện kĩ năng đặt tính thẳng hàng và tính toán qua các bài tập tương tác hấp dẫn."
    },
    "bai_tap": [
        {
            "id": "44_1",
            "type": "fill_multiple",
            "title": "Bài 1: Đặt tính rồi tính",
            "answers": [],
            "guidance": "Muốn nhân một số thập phân với một số tự nhiên, ta đặt tính như nhân số tự nhiên. Đếm phần thập phân có bao nhiêu chữ số thì dùng dấu phẩy tách ở tích ra bấy nhiêu chữ số từ phải sang trái.",
            "solution": "a) 7,8 x 6 = 46,8.<br>b) 0,72 x 50 = 36 (hoặc 36,00).<br>c) 5,4 x 39 = 210,6.<br>d) 3,16 x 41 = 129,56."
        },
        {
            "id": "44_2",
            "type": "fill_multiple",
            "title": "Bài 2: Tìm lỗi sai và sửa lại",
            "answers": [
                "3", "5", "8", ",", "8",
                "3", "7", ",", "7", "5"
            ],
            "guidance": "a) Lỗi sai là không đánh dấu phẩy ở tích.<br>b) Lỗi sai là đặt lệch tích riêng thứ hai chưa đúng (302 phải dịch sang trái một cột so với 755).",
            "solution": "a) Kết quả đúng phải là 358,8.<br>b) Kết quả đúng phải là 37,75."
        },
        {
            "id": "44_3",
            "type": "fill_multiple",
            "title": "Bài 3: Bài toán nước cam",
            "answers": ["0,25", "3", "0,75", "0,75"],
            "guidance": "Hãy nhân lượng nước cam trong một cốc với số bạn uống (3 bạn) để tìm tổng số lít nước cam nhé!",
            "solution": "Bài giải chi tiết:<br>Số lít nước cam cả 3 bạn uống là:<br>  0,25 x 3 = 0,75 (lít)<br>Đáp số: 0,75 lít nước cam."
        }
    ],
    "quizPool": [
        { "question": "Tính nhẩm: 1,2 x 4 = ?", "options": ["4,8", "48", "0,48", "4,08"], "answer": 0 },
        { "question": "Tính nhẩm: 0,5 x 5 = ?", "options": ["2,5", "0,25", "25", "2,05"], "answer": 0 },
        { "question": "Tính nhẩm: 2,15 x 3 = ?", "options": ["6,45", "64,5", "0,645", "6,15"], "answer": 0 },
        { "question": "Số 3,25 x 6 có tích gồm bao nhiêu chữ số ở phần thập phân?", "options": ["2 chữ số", "1 chữ số", "3 chữ số", "Không có chữ số nào"], "answer": 0 },
        { "question": "Đặt tính phép nhân: 4,8 x 15. Tích đúng là:", "options": ["72", "7,2", "720", "0,72"], "answer": 0 },
        { "question": "Tính nhẩm: 0,08 x 9 = ?", "options": ["0,72", "7,2", "0,072", "72"], "answer": 0 },
        { "question": "Khi nhân một số thập phân có 3 chữ số ở phần thập phân với một số tự nhiên, ta dùng dấu phẩy tách ở tích ra mấy chữ số kể từ phải sang trái?", "options": ["3 chữ số", "2 chữ số", "1 chữ số", "4 chữ số"], "answer": 0 },
        { "question": "Tính nhẩm: 1,5 x 6 = ?", "options": ["9", "90", "0,9", "9,5"], "answer": 0 },
        { "question": "Kết quả của phép nhân 0,12 x 50 là:", "options": ["6", "60", "0,6", "6,0"], "answer": 0 },
        { "question": "Một thanh sắt dài 1,2 m. Hỏi 5 thanh sắt như thế dài bao nhiêu mét?", "options": ["6 m", "60 m", "0,6 m", "7 m"], "answer": 0 },
        { "question": "Tính nhẩm: 0,25 x 4 = ?", "options": ["1", "0,1", "10", "1,25"], "answer": 0 },
        { "question": "Kết quả của phép tính 3,7 x 12 là:", "options": ["44,4", "4,44", "444", "41,4"], "answer": 0 },
        { "question": "Tìm x, biết x : 8 = 1,25. Giá trị của x là:", "options": ["10", "1", "100", "0,1"], "answer": 0 },
        { "question": "Một ô tô mỗi giờ đi được 42,5 km. Hỏi sau 3 giờ ô tô đó đi được bao nhiêu ki-lô-mét?", "options": ["127,5 km", "12,75 km", "1275 km", "125,5 km"], "answer": 0 },
        { "question": "Tính nhanh: 2,5 x 7 x 4 = ?", "options": ["70", "7", "700", "28"], "answer": 0 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

// Hàm switch sub-tab của Bài 2
window.switchSubTab2 = function(index) {
    for (var i = 0; i < 2; i++) {
        var panel = document.getElementById('subtab2-panel-' + i);
        var btn = document.getElementById('subtab2-btn-' + i);
        if (panel && btn) {
            if (i === index) {
                panel.classList.remove('hidden');
                btn.className = 'px-3 py-1.5 rounded-lg text-xs md:text-sm font-black transition-all shadow bg-blue-600 text-white';
            } else {
                panel.classList.add('hidden');
                btn.className = 'px-3 py-1.5 rounded-lg text-xs md:text-sm font-black transition-all text-blue-600 hover:bg-blue-100/50';
            }
        }
    }
};

export const lesson44 = {
    ...metadata.lessonInfo,
    metadata: metadata,
    quizPool: [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "content": `
        <div class="theory-section space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 pt-6 w-full mx-auto">
            <!-- Banner -->
            

            <!-- Ghi nhớ -->
            <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border border-blue-100 shadow-xl space-y-6">
                <div class="flex items-center gap-4 border-b border-blue-50 pb-4">
                    <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl md:text-3xl">💡</div>
                    <h3 class="text-xl md:text-3xl font-black text-blue-900 uppercase tracking-tight">Quy tắc ghi nhớ</h3>
                </div>
                
                <div class="text-lg md:text-2xl text-slate-700 leading-relaxed space-y-4">
                    <p class="font-bold text-blue-800">Muốn nhân một số thập phân với một số tự nhiên ta làm như sau:</p>
                    <ul class="list-disc pl-6 space-y-3">
                        <li>Đặt tính rồi nhân như nhân các số tự nhiên.</li>
                        <li>Đếm xem trong phần thập phân của số thập phân có bao nhiêu chữ số.</li>
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
                                    <button onclick="window.toggleSolution('sol-44-1')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                                </div>

                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 font-mono text-slate-700 font-black">
                                    
                                    <!-- CỘT LẦN 1: phép a & b -->
                                    <div class="space-y-8">
                                        <!-- Phép tính a) 7,8 x 6 = 46,8 -->
                                        <div class="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center">
                                            <div class="mb-3 text-lg md:text-2xl font-black text-blue-700">a) 7,8 x 6</div>
                                            <div class="grid grid-cols-5 gap-y-2 items-center justify-items-center" style="grid-template-columns: 24px 40px 40px 40px 40px;">
                                                <!-- Row 1: 7,8 -->
                                                <span></span><span></span>
                                                <input type="text" id="ans-44-1-a-r1c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-a-r1c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-a-r1c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                
                                                <!-- Row 2: x 6 -->
                                                <span class="text-blue-600 font-black">x</span><span></span><span></span><span></span>
                                                <input type="text" id="ans-44-1-a-r2c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <div class="col-span-5 w-full border-t-2 border-slate-700 my-1"></div>
                                                <span></span>
                                                <input type="text" id="ans-44-1-a-r3c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-a-r3c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-a-r3c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-a-r3c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            </div>
                                        </div>
                                        <!-- Phép tính b) 0,72 x 50 = 36,00 -->
                                        <div class="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center">
                                            <div class="mb-3 text-lg md:text-2xl font-black text-blue-700">b) 0,72 x 50</div>
                                            <div class="grid grid-cols-6 gap-y-2 items-center justify-items-center" style="grid-template-columns: 24px 40px 40px 40px 40px 40px;">
                                                <span></span><span></span>
                                                <input type="text" id="ans-44-1-b-r1c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-b-r1c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-b-r1c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-b-r1c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span class="text-blue-600 font-black">x</span><span></span><span></span><span></span>
                                                <input type="text" id="ans-44-1-b-r2c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-b-r2c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <div class="col-span-6 w-full border-t border-slate-400 my-0.5"></div>
                                                <span></span><span></span>
                                                <input type="text" id="ans-44-1-b-tr1c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                <input type="text" id="ans-44-1-b-tr1c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-b-tr1c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                <input type="text" id="ans-44-1-b-tr2c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-b-tr2c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                <input type="text" id="ans-44-1-b-tr2c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                <div class="col-span-6 w-full border-t-2 border-slate-700 my-1"></div>
                                                <span></span>
                                                <input type="text" id="ans-44-1-b-r3c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-b-r3c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-b-r3c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-b-r3c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-b-r3c5" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="space-y-8">
                                        <!-- Phép tính c) 5,4 x 39 = 210,6 -->
                                        <div class="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center">
                                            <div class="mb-3 text-lg md:text-2xl font-black text-blue-700">c) 5,4 x 39</div>
                                            <div class="grid grid-cols-6 gap-y-2 items-center justify-items-center" style="grid-template-columns: 24px 40px 40px 40px 40px 40px;">
                                                <!-- Row 1: 5,4 -->
                                                <span></span><span></span><span></span>
                                                <input type="text" id="ans-44-1-c-r1c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-c-r1c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-c-r1c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                
                                                <!-- Row 2: x 39 -->
                                                <span class="text-blue-600 font-black">x</span><span></span><span></span>
                                                <input type="text" id="ans-44-1-c-r2c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                <input type="text" id="ans-44-1-c-r2c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                
                                                <div class="col-span-6 w-full border-t border-slate-400 my-0.5"></div>
                                                <!-- Tích riêng 1: 486 -->
                                                <span></span><span></span>
                                                <input type="text" id="ans-44-1-c-tr1c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-c-tr1c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                <input type="text" id="ans-44-1-c-tr1c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                
                                                <!-- Tích riêng 2: 162 -->
                                                <span></span>
                                                <input type="text" id="ans-44-1-c-tr2c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-c-tr2c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-c-tr2c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span><span></span>
                                                
                                                <div class="col-span-6 w-full border-t-2 border-slate-700 my-1"></div>
                                                <!-- Tích chung: 210,6 -->
                                                <span></span>
                                                <input type="text" id="ans-44-1-c-r3c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-c-r3c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-c-r3c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-c-r3c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-c-r3c5" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            </div>
                                        </div>
                                        
                                        <!-- Phép tính d) 3,16 x 41 = 129,56 -->
                                        <div class="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col items-center">
                                            <div class="mb-3 text-lg md:text-2xl font-black text-blue-700">d) 3,16 x 41</div>
                                            <div class="grid grid-cols-7 gap-y-2 items-center justify-items-center" style="grid-template-columns: 24px 40px 40px 40px 40px 40px 40px;">
                                                <!-- Row 1: 3,16 -->
                                                <span></span><span></span><span></span>
                                                <input type="text" id="ans-44-1-d-r1c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-d-r1c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-d-r1c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-d-r1c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                
                                                <!-- Row 2: x 41 -->
                                                <span class="text-blue-600 font-black">x</span><span></span><span></span><span></span><span></span>
                                                <input type="text" id="ans-44-1-d-r2c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-d-r2c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                
                                                <div class="col-span-7 w-full border-t border-slate-400 my-0.5"></div>
                                                <!-- Tích riêng 1: 316 -->
                                                <span></span><span></span><span></span>
                                                <input type="text" id="ans-44-1-d-tr1c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                <input type="text" id="ans-44-1-d-tr1c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-d-tr1c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                
                                                <!-- Tích riêng 2: 1264 -->
                                                <span></span>
                                                <input type="text" id="ans-44-1-d-tr2c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-d-tr2c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-d-tr2c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                <input type="text" id="ans-44-1-d-tr2c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span></span>
                                                
                                                <div class="col-span-7 w-full border-t-2 border-slate-700 my-1"></div>
                                                <!-- Tích chung: 129,56 -->
                                                <span></span>
                                                <input type="text" id="ans-44-1-d-r3c1" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-d-r3c2" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-d-r3c3" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-d-r3c4" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-d-r3c5" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-1-d-r3c6" class="w-10 h-10 border border-slate-300 rounded-xl text-center outline-none font-black p-0 focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="sol-44-1" class="hidden mt-6 p-6 bg-sky-50 rounded-2xl border border-sky-200 text-lg md:text-2xl font-medium text-slate-700 w-full mx-auto">
                                    <p class="font-bold text-blue-800 mb-3 text-center">✍ ... Đặt tính mẫu của cả 4 phép tính:</p>
                                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center font-mono font-black">
                                        <!-- a -->
                                        <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                            <div class="mb-2 text-sm text-blue-600">Phép tính a</div>
                                            <div class="grid grid-cols-5 gap-1 items-center" style="grid-template-columns: 16px 28px 28px 28px 28px;">
                                                <span></span><span></span><span>7</span><span>,</span><span>8</span>
                                                <span class="text-blue-600">x</span><span></span><span></span><span></span><span>6</span>
                                                <div class="col-span-5 border-t border-slate-700 my-1"></div>
                                                <span></span><span>4</span><span>6</span><span>,</span><span>8</span>
                                            </div>
                                        </div>
                                        <!-- b -->
                                        <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                            <div class="mb-2 text-sm text-blue-600">Phép tính b</div>
                                            <div class="grid grid-cols-6 gap-1 items-center" style="grid-template-columns: 16px 28px 28px 28px 28px 28px;">
                                                <span></span><span>0</span><span>,</span><span>7</span><span>2</span><span></span>
                                                <span class="text-blue-600">x</span><span></span><span>5</span><span>0</span><span></span><span></span>
                                                <div class="col-span-6 border-t border-slate-700 my-1"></div>
                                                <span></span><span>3</span><span>6</span><span>,</span><span>0</span><span>0</span>
                                            </div>
                                        </div>
                                        <!-- c -->
                                        <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                            <div class="mb-2 text-sm text-blue-600">Phép tính c</div>
                                            <div class="grid grid-cols-5 gap-1 items-center" style="grid-template-columns: 16px 28px 28px 28px 28px;">
                                                <span></span><span></span><span>5</span><span>,</span><span>4</span>
                                                <span class="text-blue-600">x</span><span>3</span><span>9</span><span></span><span></span>
                                                <div class="col-span-5 border-t border-slate-700 my-1"></div>
                                                <span></span><span>4</span><span>8</span><span>6</span><span></span>
                                                <span>1</span><span>6</span><span>2</span><span></span><span></span>
                                                <div class="col-span-5 border-t border-slate-700 my-1"></div>
                                                <span>2</span><span>1</span><span>0</span><span>,</span><span>6</span>
                                            </div>
                                        </div>
                                        <!-- d -->
                                        <div class="bg-white p-4 rounded-xl border border-blue-100 flex flex-col items-center">
                                            <div class="mb-2 text-sm text-blue-600">Phép tính d</div>
                                            <div class="grid grid-cols-6 gap-1 items-center" style="grid-template-columns: 16px 28px 28px 28px 28px 28px;">
                                                <span></span><span>3</span><span>,</span><span>1</span><span>6</span><span></span>
                                                <span class="text-blue-600">x</span><span>4</span><span>1</span><span></span><span></span><span></span>
                                                <div class="col-span-6 border-t border-slate-700 my-1"></div>
                                                <span></span><span>3</span><span>1</span><span>6</span><span></span><span></span>
                                                <span>1</span><span>2</span><span>6</span><span>4</span><span></span><span></span>
                                                <div class="col-span-6 border-t border-slate-700 my-1"></div>
                                                <span>1</span><span>2</span><span>9</span><span>,</span><span>5</span><span>6</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end mt-6">
                                <button id="btn-check-44-1" onclick="window.check_44_1()" style="background: linear-gradient(135deg, #2563eb, #0284c7);" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- TRANG 2: BÀI 2 (SỬA LỖI PHÉP TÍNH SAI) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="glass-card p-4 md:p-6 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden flex flex-col justify-between min-h-[550px]">
                            <div>
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg">2</div>
                                        <h3 class="text-lg md:text-2xl text-blue-900 font-black uppercase tracking-tighter">Bài 2. Sửa lỗi phép tính</h3>
                                    </div>
                                    <div class="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
                                        <button onclick="window.switchSubTab2(0)" id="subtab2-btn-0" class="px-3 py-1.5 rounded-lg text-xs md:text-sm font-black transition-all shadow bg-blue-600 text-white">Phép tính a</button>
                                        <button onclick="window.switchSubTab2(1)" id="subtab2-btn-1" class="px-3 py-1.5 rounded-lg text-xs md:text-sm font-black transition-all text-blue-600 hover:bg-blue-100/50">Phép tính b</button>
                                    </div>
                                </div>

                                <div class="relative py-2">
                                    <!-- Câu a -->
                                    <div id="subtab2-panel-0" class="animate-in fade-in duration-300 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                        <div class="bg-red-50/50 border border-red-100 rounded-3xl p-4 flex flex-col items-center">
                                            <p class="text-xs md:text-sm font-black text-red-600 mb-2">❌ Phép tính lỗi sai trong SGK</p>
                                            <div class="font-mono text-lg md:text-2xl font-black text-slate-400">
                                                <pre class="leading-relaxed">
   6,9
x   52
------
   138
  345
------
  3588 (Thiếu dấu phẩy!)</pre>
                                            </div>
                                        </div>
                                        <div class="bg-emerald-50 border border-emerald-100 rounded-3xl p-4 flex flex-col items-center">
                                            <p class="text-xs md:text-sm font-black text-emerald-600 mb-3">✍️ Em hãy viết lại kết quả đúng</p>
                                            <div class="flex items-center gap-1 font-mono text-xl md:text-3xl font-black">
                                                <span>Kết quả đúng = </span>
                                                <input type="text" id="ans-44-2-a-1" class="w-10 h-10 border border-slate-300 rounded-lg text-center outline-none focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-2-a-2" class="w-10 h-10 border border-slate-300 rounded-lg text-center outline-none focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-2-a-3" class="w-10 h-10 border border-slate-300 rounded-lg text-center outline-none focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-2-a-4" class="w-10 h-10 border border-slate-300 rounded-lg text-center outline-none focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder=",">
                                                <input type="text" id="ans-44-2-a-5" class="w-10 h-10 border border-slate-300 rounded-lg text-center outline-none focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Câu b -->
                                    <div id="subtab2-panel-1" class="hidden animate-in fade-in duration-300 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                        <div class="bg-red-50/50 border border-red-100 rounded-3xl p-4 flex flex-col items-center">
                                            <p class="text-xs md:text-sm font-black text-red-600 mb-2">❌ Phép tính lỗi sai trong SGK</p>
                                            <div class="font-mono text-lg md:text-2xl font-black text-slate-400">
                                                <pre class="leading-relaxed">
  1,51
x   25
------
   755
   302  (Tích riêng 2 đặt thẳng hàng!)
------
 37,75</pre>
                                            </div>
                                        </div>
                                        <div class="bg-emerald-50 border border-emerald-100 rounded-3xl p-4 flex flex-col items-center">
                                            <p class="text-xs md:text-sm font-black text-emerald-600 mb-3">✍️ Em hãy viết lại kết quả đúng</p>
                                            <div class="flex items-center gap-1 font-mono text-xl md:text-3xl font-black">
                                                <span>Kết quả đúng = </span>
                                                <input type="text" id="ans-44-2-b-1" class="w-10 h-10 border border-slate-300 rounded-lg text-center outline-none focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-2-b-2" class="w-10 h-10 border border-slate-300 rounded-lg text-center outline-none focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-2-b-3" class="w-10 h-10 border border-slate-300 rounded-lg text-center outline-none focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder=",">
                                                <input type="text" id="ans-44-2-b-4" class="w-10 h-10 border border-slate-300 rounded-lg text-center outline-none focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <input type="text" id="ans-44-2-b-5" class="w-10 h-10 border border-slate-300 rounded-lg text-center outline-none focus:border-blue-500" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
 
                            <div class="mt-4 flex justify-between items-center border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-44-2')" class="bg-amber-500 text-white font-black px-4 py-2 rounded-xl text-xs md:text-sm hover:bg-amber-600 transition-colors shadow">Hiện bài giải</button>
                                <button id="btn-check-44-2" onclick="window.check_44_2()" style="background: linear-gradient(135deg, #2563eb, #0284c7);" class="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-44-2" class="hidden mt-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs md:text-sm font-semibold text-slate-700 leading-relaxed">
                                <p><strong>Lời giải chi tiết:</strong></p>
                                <p>a) Phép tính nhân 6,9 x 52. Phần thập phân của thừa số có 1 chữ số. Vì thế kết quả đúng là 358,8 (đánh dấu phẩy lùi 1 chữ số).</p>
                                <p>b) Phép tính nhân 1,51 x 25. Tích riêng thứ hai 302 phải viết lùi sang trái 1 cột. Phép cộng lại được kết quả đúng là 37,75.</p>
                            </div>
                        </div>
                    </div>

                    <!-- TRANG 3: BÀI 3 (BÀI TOÁN NƯỚC CAM - 1 CỘT) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="glass-card p-4 md:p-6 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden flex flex-col justify-between min-h-[550px]">
                            <div>
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg">3</div>
                                        <h3 class="text-lg md:text-2xl text-blue-900 font-black uppercase tracking-tighter">Bài 3. Bài toán thực tế</h3>
                                    </div>
                                    <button onclick="window.toggleSolution('sol-44-3')" class="bg-amber-500 text-white font-black px-4 py-2 rounded-xl text-xs md:text-sm hover:bg-amber-600 transition-colors shadow">Hiện bài giải</button>
                                </div>

                                <div class="space-y-6 w-full mx-auto">
                                    <!-- Đề bài -->
                                    <div class="p-6 bg-sky-50 rounded-[2rem] border border-sky-100 text-lg md:text-2xl text-slate-700 font-bold leading-relaxed">
                                        <p class="text-slate-600">
                                            Mỗi cốc có <span class="text-blue-600">0,25 l</span> nước cam, mỗi bạn uống một cốc. Hỏi <span class="text-blue-600">3 bạn</span> uống bao nhiêu lít nước cam?
                                        </p>
                                    </div>

                                    <!-- Khu vực làm bài của học sinh -->
                                    <div class="bg-slate-50 border border-slate-200 rounded-[2rem] p-6 md:p-8 space-y-6">
                                        <div class="text-center text-blue-800 font-black border-b border-slate-200 pb-2">BÀI GIẢI ĐIỀN SỐ</div>
                                        <div class="space-y-4 text-lg md:text-2xl font-bold text-slate-700">
                                            <div class="flex items-center gap-2 flex-nowrap overflow-x-auto">
                                                <span>Phép tính:</span>
                                                <span class="md:text-3xl font-extrabold text-slate-700">0,25</span>
                                                <span class="font-extrabold text-slate-700 md:text-3xl">x</span>
                                                <span class="md:text-3xl font-extrabold text-slate-700">3</span>
                                                <span class="font-extrabold text-slate-700 md:text-3xl">=</span>
                                                <input type="text" id="ans-44-3-v3" class="h-12 border-2 border-blue-300 rounded-xl text-center outline-none font-black focus:border-blue-500 md:text-3xl bg-white" style="width: auto !important; min-width: 100px; padding: 0px !important; font-size: 1.5rem !important;" placeholder="">
                                                <span class="text-slate-500 font-bold">(lít)</span>
                                            </div>
                                            <div class="flex items-center gap-2 pt-4 border-t border-dashed border-slate-300 flex-nowrap overflow-x-auto">
                                                <span>Đáp số:</span>
                                                <input type="text" id="ans-44-3-v4" class="h-12 border-2 border-blue-300 rounded-xl text-center outline-none font-black focus:border-blue-500 md:text-3xl" style="width: auto !important; min-width: 120px; padding: 0px !important; font-size: 1.5rem !important;" placeholder="">
                                                <span class="text-slate-500 font-bold">lít nước cam.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-4 flex justify-end">
                                <button id="btn-check-44-3" onclick="window.check_44_3()" style="background: linear-gradient(135deg, #2563eb, #0284c7);" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-44-3" class="hidden mt-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs md:text-sm font-semibold text-slate-700 leading-relaxed">
                                <p class="font-bold text-slate-800">Bài giải chi tiết:</p>
                                <p>Cả 3 bạn uống số lít nước cam là:</p>
                                <p class="pl-4 font-bold text-emerald-600">0,25 x 3 = 0,75 (lít)</p>
                                <p>Đáp số: 0,75 lít nước cam.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,
    "scripts": `
        <script>
            // Định nghĩa các hàm xử lý phụ trợ
            function getVal(id) {
                var el = document.getElementById(id);
                return el ? el.value.trim() : '';
            }
            function normalizeVal(val) {
                return val.toLowerCase().replace(/\\s+/g, '').replace(/,/g, '.');
            }
            function isCommaVal(val) {
                return val === ',' || val === '.';
            }

            // ==================== BÀI 1 CHECK ====================
            window.check_44_1 = function() {
                // a) 7,8 x 6 = 46,8
                var a_r1c1 = getVal('ans-44-1-a-r1c1'), a_r1c2 = getVal('ans-44-1-a-r1c2'), a_r1c3 = getVal('ans-44-1-a-r1c3');
                var a_r2c1 = getVal('ans-44-1-a-r2c1');
                var a_r3c1 = getVal('ans-44-1-a-r3c1'), a_r3c2 = getVal('ans-44-1-a-r3c2'), a_r3c3 = getVal('ans-44-1-a-r3c3'), a_r3c4 = getVal('ans-44-1-a-r3c4');

                var isCorrectA = (
                    a_r1c1 === '7' && isCommaVal(a_r1c2) && a_r1c3 === '8' &&
                    a_r2c1 === '6' &&
                    a_r3c1 === '4' && a_r3c2 === '6' && isCommaVal(a_r3c3) && a_r3c4 === '8'
                );

                // b) 0,72 x 50 = 36,00
                var b_r1c1 = getVal('ans-44-1-b-r1c1'), b_r1c2 = getVal('ans-44-1-b-r1c2'), b_r1c3 = getVal('ans-44-1-b-r1c3'), b_r1c4 = getVal('ans-44-1-b-r1c4');
                var b_r2c1 = getVal('ans-44-1-b-r2c1'), b_r2c2 = getVal('ans-44-1-b-r2c2');
                var b_tr1c1 = getVal('ans-44-1-b-tr1c1'), b_tr1c2 = getVal('ans-44-1-b-tr1c2'), b_tr1c3 = getVal('ans-44-1-b-tr1c3');
                var b_tr2c1 = getVal('ans-44-1-b-tr2c1'), b_tr2c2 = getVal('ans-44-1-b-tr2c2'), b_tr2c3 = getVal('ans-44-1-b-tr2c3');
                var b_r3c1 = getVal('ans-44-1-b-r3c1'), b_r3c2 = getVal('ans-44-1-b-r3c2'), b_r3c3 = getVal('ans-44-1-b-r3c3'), b_r3c4 = getVal('ans-44-1-b-r3c4'), b_r3c5 = getVal('ans-44-1-b-r3c5');

                var isCorrectB = (
                    b_r1c1 === '0' && isCommaVal(b_r1c2) && b_r1c3 === '7' && b_r1c4 === '2' &&
                    b_r2c1 === '5' && b_r2c2 === '0' &&
                    b_tr1c1 === '0' && b_tr1c2 === '0' && b_tr1c3 === '0' &&
                    b_tr2c1 === '3' && b_tr2c2 === '6' && b_tr2c3 === '0' &&
                    b_r3c1 === '3' && b_r3c2 === '6' && isCommaVal(b_r3c3) && b_r3c4 === '0' && b_r3c5 === '0'
                );

                // c) 5,4 x 39 = 210,6
                var c_r1c1 = getVal('ans-44-1-c-r1c1'), c_r1c2 = getVal('ans-44-1-c-r1c2'), c_r1c3 = getVal('ans-44-1-c-r1c3');
                var c_r2c1 = getVal('ans-44-1-c-r2c1'), c_r2c2 = getVal('ans-44-1-c-r2c2');
                var c_tr1c1 = getVal('ans-44-1-c-tr1c1'), c_tr1c2 = getVal('ans-44-1-c-tr1c2'), c_tr1c3 = getVal('ans-44-1-c-tr1c3');
                var c_tr2c1 = getVal('ans-44-1-c-tr2c1'), c_tr2c2 = getVal('ans-44-1-c-tr2c2'), c_tr2c3 = getVal('ans-44-1-c-tr2c3');
                var c_r3c1 = getVal('ans-44-1-c-r3c1'), c_r3c2 = getVal('ans-44-1-c-r3c2'), c_r3c3 = getVal('ans-44-1-c-r3c3'), c_r3c4 = getVal('ans-44-1-c-r3c4'), c_r3c5 = getVal('ans-44-1-c-r3c5');

                var isCorrectC = (
                    c_r1c1 === '5' && isCommaVal(c_r1c2) && c_r1c3 === '4' &&
                    c_r2c1 === '3' && c_r2c2 === '9' &&
                    c_tr1c1 === '4' && c_tr1c2 === '8' && c_tr1c3 === '6' &&
                    c_tr2c1 === '1' && c_tr2c2 === '6' && c_tr2c3 === '2' &&
                    c_r3c1 === '2' && c_r3c2 === '1' && c_r3c3 === '0' && isCommaVal(c_r3c4) && c_r3c5 === '6'
                );

                // d) 3,16 x 41 = 129,56
                var d_r1c1 = getVal('ans-44-1-d-r1c1'), d_r1c2 = getVal('ans-44-1-d-r1c2'), d_r1c3 = getVal('ans-44-1-d-r1c3'), d_r1c4 = getVal('ans-44-1-d-r1c4');
                var d_r2c1 = getVal('ans-44-1-d-r2c1'), d_r2c2 = getVal('ans-44-1-d-r2c2');
                var d_tr1c1 = getVal('ans-44-1-d-tr1c1'), d_tr1c2 = getVal('ans-44-1-d-tr1c2'), d_tr1c3 = getVal('ans-44-1-d-tr1c3');
                var d_tr2c1 = getVal('ans-44-1-d-tr2c1'), d_tr2c2 = getVal('ans-44-1-d-tr2c2'), d_tr2c3 = getVal('ans-44-1-d-tr2c3'), d_tr2c4 = getVal('ans-44-1-d-tr2c4');
                var d_r3c1 = getVal('ans-44-1-d-r3c1'), d_r3c2 = getVal('ans-44-1-d-r3c2'), d_r3c3 = getVal('ans-44-1-d-r3c3'), d_r3c4 = getVal('ans-44-1-d-r3c4'), d_r3c5 = getVal('ans-44-1-d-r3c5'), d_r3c6 = getVal('ans-44-1-d-r3c6');

                var isCorrectD = (
                    d_r1c1 === '3' && isCommaVal(d_r1c2) && d_r1c3 === '1' && d_r1c4 === '6' &&
                    d_r2c1 === '4' && d_r2c2 === '1' &&
                    d_tr1c1 === '3' && d_tr1c2 === '1' && d_tr1c3 === '6' &&
                    d_tr2c1 === '1' && d_tr2c2 === '2' && d_tr2c3 === '6' && d_tr2c4 === '4' &&
                    d_r3c1 === '1' && d_r3c2 === '2' && d_r3c3 === '9' && isCommaVal(d_r3c4) && d_r3c5 === '5' && d_r3c6 === '6'
                );

                var isCorrect = isCorrectA && isCorrectB && isCorrectC && isCorrectD;
                var rightAns = "a) 46,8 ; b) 36,00 ; c) 210,6 ; d) 129,56";
                var studentAns = "a) " + (isCorrectA ? "Đúng" : "Chưa đúng") + 
                                 " ; b) " + (isCorrectB ? "Đúng" : "Chưa đúng") + 
                                 " ; c) " + (isCorrectC ? "Đúng" : "Chưa đúng") + 
                                 " ; d) " + (isCorrectD ? "Đúng" : "Chưa đúng");

                var meta = window.MATH_BUILDER_METADATA.bai_tap[0];
                if (window.showMathFeedback) {
                    window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
                }
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-44-1', 0, 4, isCorrect ? 4 : 0);
                }
            };

            // ==================== BÀI 2 CHECK ====================
            window.check_44_2 = function() {
                var a_1 = getVal('ans-44-2-a-1'), a_2 = getVal('ans-44-2-a-2'), a_3 = getVal('ans-44-2-a-3'), a_4 = getVal('ans-44-2-a-4'), a_5 = getVal('ans-44-2-a-5');
                var b_1 = getVal('ans-44-2-b-1'), b_2 = getVal('ans-44-2-b-2'), b_3 = getVal('ans-44-2-b-3'), b_4 = getVal('ans-44-2-b-4'), b_5 = getVal('ans-44-2-b-5');

                var isCorrectA = (a_1 === '3' && a_2 === '5' && a_3 === '8' && isCommaVal(a_4) && a_5 === '8');
                var isCorrectB = (b_1 === '3' && b_2 === '7' && isCommaVal(b_3) && b_4 === '7' && b_5 === '5');

                var isCorrect = isCorrectA && isCorrectB;
                var rightAns = "a) 358,8 ; b) 37,75";
                var studentAns = "a) " + a_1 + a_2 + a_3 + a_4 + a_5 + " ; b) " + b_1 + b_2 + b_3 + b_4 + b_5;

                var meta = window.MATH_BUILDER_METADATA.bai_tap[1];
                if (window.showMathFeedback) {
                    window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
                }
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-44-2', 0, 2, isCorrect ? 2 : 0);
                }
            };

            // ==================== BÀI 3 CHECK ====================
            window.check_44_3 = function() {
                var v3 = normalizeVal(getVal('ans-44-3-v3'));
                var v4 = normalizeVal(getVal('ans-44-3-v4'));

                var isCorrect = (
                    (v3 === '0.75' || v3 === '0,75') &&
                    (v4 === '0.75' || v4 === '0,75')
                );

                var rightAns = "Phép tính: 0,25 x 3 = 0,75 ; Đáp số: 0,75 lít";
                var studentAns = "Phép tính: 0,25 x 3 = " + v3 + " ; Đáp số: " + v4;

                var meta = window.MATH_BUILDER_METADATA.bai_tap[2];
                if (window.showMathFeedback) {
                    window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
                }
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-44-3', 0, 3, isCorrect ? 3 : 0);
                }
            };

            window.toggleSolution = function(elementId) {
                var el = document.getElementById(elementId);
                if (el) {
                    el.classList.toggle('hidden');
                }
            };
        
            // Đảm bảo tất cả các ô nhập trong phần đặt tính giữ nguyên kích thước 40px
            function setupAutoResizeInputs() {
                document.querySelectorAll('input[id^="ans-44-1-"]').forEach(function(input) {
                    input.style.setProperty('width', '40px', 'important');
                });
            }
            setupAutoResizeInputs();
            setTimeout(setupAutoResizeInputs, 100);
            setTimeout(setupAutoResizeInputs, 500);
        </script>
    `
};

window.lesson44 = lesson44;
export default lesson44;
