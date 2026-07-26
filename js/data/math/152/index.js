const metadata = {
    "lessonInfo": {
        "period": "152",
        "week": "31",
        "topic": "Số liệu và Biểu đồ",
        "title": "BÀI 67: LUYỆN TẬP CHUNG",
        "desc": "Học sinh luyện tập đọc biểu đồ hình quạt tròn, kiểm đếm số liệu và xác định tỉ số lần lặp lại của một sự kiện."
    },
    "exercises": [
        {
            "id": "152_1",
            "type": "fill_multiple",
            "title": "Hoạt động 1: Biểu đồ hình quạt tròn - Bãi đỗ xe",
            "statement": "Biểu đồ dưới đây cho biết tỉ số phần trăm các loại xe đang gửi trong bãi đỗ xe. Quan sát biểu đồ và trả lời câu hỏi.",
            "answers": ["xe máy", "10%", "200"],
            "placeholders": ["?", "?", "?"],
            "image": "assets/images/toan/toan_tap_2/98/",
            "guidance": "Quan sát tỉ số phần trăm của mỗi loại xe để so sánh và tính toán.",
            "solution": "a) Xe máy chiếm 75% (nhiều nhất). b) Xe ô tô chiếm 10%. c) Tổng số xe = 30 : 15% = 200 (xe)."
        },
        {
            "id": "152_2",
            "type": "fill_blank",
            "title": "Hoạt động 2: Kiểm đếm số lần lấy tất",
            "statement": "Bảng kiểm đếm ghi lại kết quả việc lấy tất của Rô-bốt trong tháng 4. Hãy viết tỉ số để mô tả số lần lặp lại của khả năng 'lấy được 2 chiếc tất khác nhau' trong tổng số lần lấy tất.",
            "answers": ["22/30", "11/15"],
            "image": "assets/images/toan/toan_tap_2/99/",
            "guidance": "Đếm số gạch trong bảng: Thống kê 'giống nhau' có 8 lần, 'khác nhau' có 22 lần. Tổng số lần là 30.",
            "solution": "Số lần lấy được 2 chiếc tất khác nhau là 22. Tổng số lần là 8 + 22 = 30. Tỉ số là 22/30 (hoặc 11/15)."
        },
        {
            "id": "152_3",
            "type": "fill_multiple",
            "title": "Hoạt động 3: Xác định tính chắc chắn",
            "statement": "a) Vẽ 4 chiếc tất (2 đỏ, 2 vàng). Nhắm mắt lấy 2 chiếc bất kì, thực hiện 10 lần. b) Viết tỉ số của khả năng lấy được 2 chiếc tất cùng màu. c) Nhận định tính chắc chắn khi lấy 2 chiếc hoặc 3 chiếc tất.",
            "answers": ["không", "có"],
            "image": "assets/images/toan/toan_tap_2/152/",
            "guidance": "Dựa vào thực hành để tính tỉ số ở câu b. Câu c dựa vào suy luận logic.",
            "solution": "c) Lấy 2 chiếc thì chưa chắc chắn (có thể 1 đỏ 1 vàng). Lấy 3 chiếc chắc chắn có 2 chiếc cùng màu (vì chỉ có 2 màu)."
        },
        {
            "id": "152_4",
            "type": "multiple_choice",
            "title": "Hoạt động 4: Biểu đồ thời gian của Rô-bốt",
            "statement": "Biểu đồ cho biết tỉ số phần trăm thời gian dành cho các hoạt động trong ngày của Rô-bốt. Chọn câu trả lời đúng.",
            "answers": ["A", "C"],
            "image": "assets/images/toan/toan_tap_2/96/",
            "guidance": "Quan sát các phần của hình tròn: 1/2 hình tròn là 50%, 1/4 là 25%, 1/8 là 12.5%.",
            "solution": "a) Giải trí chiếm 1/8 => 12.5%. b) Ngủ chiếm 3/8 ngày => 9 giờ."
        }
    ],
    "quizPool": [
        { "question": "Biểu đồ hình quạt tròn dùng để làm gì?", "options": ["So sánh các phần với tổng thể", "Chỉ đường đi", "Vẽ tranh", "Đếm số lượng vật"], "answer": 0 },
        { "question": "Tổng tỉ số phần trăm của các phần trong biểu đồ hình quạt tròn là bao nhiêu?", "options": ["50%", "100%", "200%", "90%"], "answer": 1 },
        { "question": "Nếu một phần chiếm 25% trong biểu đồ hình quạt, nó tương ứng với mấy phần hình tròn?", "options": ["1/2", "1/3", "1/4", "1/5"], "answer": 2 },
        { "question": "Dựa vào bài 1, loài xe nào có tỉ số phần trăm thấp nhất?", "options": ["Xe ô tô", "Xe máy", "Xe đạp", "Không có"], "answer": 0 },
        { "question": "Trong bài 1, xe đạp chiếm bao nhiêu phần trăm?", "options": ["10%", "15%", "75%", "25%"], "answer": 1 },
        { "question": "Cách tính tỉ số lần lặp lại của một sự kiện là gì?", "options": ["Lấy số lần xảy ra chia cho tổng số lần", "Lấy tổng số lần chia cho số lần xảy ra", "Lấy số lần xảy ra nhân với 100", "Lấy số lần xảy ra cộng tổng số lần"], "answer": 0 },
        { "question": "Tháng 4 có bao nhiêu ngày?", "options": ["28 ngày", "29 ngày", "30 ngày", "31 ngày"], "answer": 2 },
        { "question": "Trong bài 2, có bao nhiêu lần Rô-bốt lấy được 2 chiếc tất GIỐNG nhau?", "options": ["8 lần", "10 lần", "22 lần", "30 lần"], "answer": 0 },
        { "question": "Trong bài 4, Robot dành bao nhiêu phần trăm thời gian để NGỦ?", "options": ["25%", "50%", "12.5%", "100%"], "answer": 1 },
        { "question": "Một ngày có 24 giờ. 12.5% của một ngày là bao nhiêu giờ?", "options": ["1 giờ", "2 giờ", "3 giờ", "4 giờ"], "answer": 2 },
        { "question": "Nếu có 2 màu tất, muốn CHẮC CHẮN lấy được 2 chiếc cùng màu thì cần lấy ít nhất mấy chiếc?", "options": ["2 chiếc", "3 chiếc", "4 chiếc", "5 chiếc"], "answer": 1 },
        { "question": "Trong bài 4, hoạt động nào chiếm 25% thời gian của Rô-bốt?", "options": ["Ngủ", "Học tập và đọc sách", "Giải trí và thư giãn", "Khác"], "answer": 1 },
        { "question": "Dựa vào bài 1, nếu bãi xe có 200 xe, số xe ô tô (10%) là bao nhiêu chiếc?", "options": ["10 chiếc", "20 chiếc", "30 chiếc", "40 chiếc"], "answer": 1 },
        { "question": "Biểu đồ hình quạt tròn ở bài 4 có mấy phần (mấy loại hoạt động)?", "options": ["2 phần", "3 phần", "4 phần", "5 phần"], "answer": 2 },
        { "question": "Kết quả của phép tính: 30 : 15% là bao nhiêu?", "options": ["20", "200", "450", "300"], "answer": 1 }
    ]
};

const lesson152_practice = `
    <div class="font-vietpro space-y-12 md:space-y-16 pb-20">
        <!-- Bài 1 -->
        <div class="glass-card p-6 md:p-10 rounded-[3rem] bg-white border border-blue-100 shadow-2xl relative overflow-hidden group">
            <div class="relative z-10">
                <div class="flex items-start gap-8 border-b-6 border-blue-100 pb-10 mb-12">
                    <span class="w-20 h-20 bg-blue-600 text-white rounded-[1.5rem] flex items-center justify-center text-4xl font-black shadow-lg shrink-0">1</span>
                    <div class="space-y-6">
                        <p class="text-3xl text-slate-700 leading-relaxed font-bold">Biểu đồ dưới đây cho biết tỉ số phần trăm các loại xe đang gửi trong bãi đỗ xe. Quan sát biểu đồ và trả lời câu hỏi.</p>
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row gap-12 items-center">
                    <div class="lg:w-1/2 flex justify-center">
                        <img src="assets/images/toan/toan_tap_2/98/" class="max-w-full rounded-[2.5rem] shadow-2xl border-4 border-white transform group-hover:scale-[1.02] transition-transform duration-500" alt="Biểu đồ bãi đỗ xe">
                    </div>
                    
                    <div class="lg:w-1/2 w-full p-8 bg-blue-50/50 rounded-[3rem] border-4 border-white shadow-xl space-y-10">
                        <div class="space-y-6">
                            <p class="text-3xl font-bold text-slate-700 leading-tight italic">a) Trong bãi đỗ xe đó, loại xe nào có nhiều nhất?</p>
                            <div class="ml-10">
                                <input type="text" id="in-152-1-a" placeholder="loại xe..." class="w-full w-full p-6 border-b-8 border-blue-200 outline-none font-black text-4xl text-blue-700 bg-white rounded-2xl shadow-lg focus:border-blue-600 transition-all">
                            </div>
                        </div>
                        <div class="space-y-6">
                            <p class="text-3xl font-bold text-slate-700 leading-tight italic">b) Số xe ô tô chiếm bao nhiêu phần trăm số xe gửi trong bãi?</p>
                            <div class="ml-10">
                                <input type="text" id="in-152-1-b" placeholder="? %" class="w-48 text-center p-6 border-b-8 border-blue-200 outline-none font-black text-5xl text-blue-700 bg-white rounded-2xl shadow-lg focus:border-blue-600 transition-all">
                            </div>
                        </div>
                        <div class="space-y-6">
                            <p class="text-3xl font-bold text-slate-700 leading-tight italic">c) Biết trong bãi có 30 xe đạp. Hỏi trong bãi hiện có tất cả bao nhiêu xe?</p>
                            <div class="ml-10 flex items-center gap-6">
                                <input type="number" id="in-152-1-c" placeholder="?" class="w-48 text-center p-6 border-b-8 border-blue-200 outline-none font-black text-5xl text-blue-700 bg-white rounded-2xl shadow-lg focus:border-blue-600 transition-all">
                                <span class="text-3xl font-bold text-slate-400">xe</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-152-1" onclick="window.check_152_1()" class="w-20 h-20 bg-blue-600 text-white rounded-[1.5rem] font-black text-4xl flex items-center justify-center shadow-lg hover:bg-blue-700 active:scale-95 transition-all shadow-blue-200/50">E</button>
                </div>
            </div>
        </div>

        <!-- Bài 2 -->
        <div class="glass-card p-6 md:p-10 rounded-[3rem] bg-white border border-blue-100 shadow-2xl relative overflow-hidden group">
            <div class="relative z-10 font-vietpro">
                <div class="flex items-start gap-8 border-b-6 border-pink-100 pb-10 mb-12">
                    <span class="w-20 h-20 bg-pink-600 text-white rounded-[1.5rem] flex items-center justify-center text-4xl font-black shadow-lg shrink-0 shadow-pink-200/50">2</span>
                    <h3 class="text-3xl text-slate-700 leading-relaxed font-bold">Bài 2. Mỗi buổi sáng, Rô-bốt đều tự tạo một bất ngờ cho chính mình bằng cách lấy ra 2 chiếc tất mà không nhìn vào ngăn tủ. Kết quả là có ngày Rô-bốt lấy được hai chiếc tất giống nhau, cũng có ngày Rô-bốt lấy được hai chiếc tất khác nhau. Dưới đây là bảng kiểm đếm ghi lại kết quả việc lấy tất của Rô-bốt trong tháng 4.</h3>
                </div>

                <div class="flex flex-col gap-12 items-center">
                    <!-- Hình ảnh bảng kiểm đếm từ SGK -->
                    <div class="w-full w-full rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl relative group">
                        <img src="assets/images/toan/toan_tap_2/99/" class="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700" alt="Bảng kiểm đếm">
                        <div class="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[3rem]"></div>
                    </div>
                    
                    <div class="w-full bg-blue-50/50 rounded-[4rem] p-12 border-4 border-white shadow-xl space-y-10">
                        <div class="flex flex-col md:flex-row gap-10 items-center">
                            <div class="w-40 h-40 bg-white rounded-full p-2 shadow-2xl border-4 border-blue-200 overflow-hidden relative group">
                                <img src="assets/images/toan/toan_tap_2/99/" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Robot">
                            </div>
                            <p class="text-3xl font-black text-slate-800 leading-snug">Viết tỉ số để mô tả số lần lặp lại của khả năng <span class="text-pink-600 uppercase underline decoration-4 underline-offset-8 font-black">"lấy được 2 chiếc tất khác nhau"</span> trong số các lần lấy tất của Rô-bốt trong tháng 4.</p>
                        </div>
                        <div class="flex flex-col items-center gap-4">
                            <input type="text" id="in-152-2" placeholder="ví dụ: 1/2" class="w-full max-w-sm text-center p-10 border-b-8 border-blue-400 outline-none font-black text-7xl text-blue-700 bg-white rounded-[2.5rem] shadow-2xl focus:border-blue-600 transition-all placeholder:text-slate-300">
                            <p class="text-xl font-bold text-slate-400">Gợi ý: (Số lần khác nhau) / (Tổng số lần)</p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-152-2" onclick="window.check_152_2()" class="w-24 h-24 bg-pink-600 text-white rounded-[2rem] font-black text-5xl flex items-center justify-center shadow-lg hover:bg-pink-700 active:scale-95 transition-all shadow-pink-200/50">E</button>
                </div>
            </div>
        </div>

        <!-- Bài 3 -->
        <div class="glass-card p-4 md:p-12 rounded-[4rem] bg-[#fffcf5] border-8 border-white shadow-2xl relative overflow-hidden group mb-12">
             <!-- Dải màu trang trí phía trên -->
             <div class="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 opacity-20"></div>
             
             <div class="relative z-10 font-vietpro">
                <!-- Đề bài Header -->
                <div class="flex items-start gap-10 mb-12">
                    <span class="w-24 h-24 bg-emerald-600 text-white rounded-[2rem] flex items-center justify-center text-5xl font-black shadow-xl shrink-0 shadow-emerald-200/50 outline outline-8 outline-emerald-50">3</span>
                    <div class="space-y-6">
                        <p class="text-4xl text-slate-800 leading-snug font-black">a) Vẽ 4 chiếc tất và tô màu 2 chiếc tất bởi màu đỏ, 2 chiếc tất bởi màu vàng rồi cắt rời những chiếc tất đó.</p>
                        <div class="bg-blue-50/80 p-6 rounded-[2rem] border-2 border-blue-100 italic text-3xl font-bold text-blue-700">
                             Nhắm mắt, lấy 2 chiếc tất bất kì từ những chiếc tất đó, quan sát màu, ghi lại kết quả và trả lại 2 chiếc tất đó. Thực hiện 10 lần như vậy.
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-12 w-full mx-auto">
                    <!-- Khu vực mô phỏng thực hành -->
                    <div class="bg-white rounded-[3.5rem] p-10 border-4 border-emerald-50 shadow-xl flex flex-col items-center gap-10">
                        <div class="relative w-full w-full aspect-video rounded-[2.5rem] bg-emerald-50/30 overflow-hidden border-2 border-emerald-100 flex items-center justify-center">
                            <img src="assets/images/toan/toan_tap_2/152/" class="h-3/4 w-auto drop-shadow-2xl animate-float" alt="Tất">
                            <div class="absolute bottom-4 right-4 text-emerald-600 font-black text-xl bg-white/80 px-4 py-1 rounded-full backdrop-blur-sm">Trong hộp bí mật</div>
                        </div>

                        <div class="w-full w-full space-y-6">
                            <div class="flex items-center justify-between border-b-4 border-dashed border-emerald-100 pb-4">
                                <span class="text-2xl font-black text-emerald-900 uppercase">Tiến độ: <span id="trial-count-152" class="text-4xl text-emerald-600">0</span>/10</span>
                                <button onclick="window.resetTrials()" class="text-xl font-bold text-emerald-400 hover:text-emerald-700 underline transition-colors">Thiết lập lại</button>
                            </div>
                            <!-- Khu vực hiển thị kết quả các lần thử -->
                            <div id="trial-container" class="flex flex-wrap gap-3 p-6 bg-emerald-50/50 rounded-3xl min-h-[8rem] items-center justify-center border-2 border-emerald-100 shadow-inner">
                                <p class="text-2xl text-slate-400 font-medium italic">Bắt đầu lấy tất ngay bên dưới...</p>
                            </div>
                        </div>

                        <!-- Buttons tương tác -->
                        <div class="flex flex-col gap-4 w-full w-full">
                            <div class="grid grid-cols-2 gap-4">
                                <button onclick="window.addTrial('đỏ-đỏ')" class="group p-6 bg-white border-4 border-red-50 rounded-[2rem] text-2xl font-black text-red-600 shadow-lg hover:border-red-500 hover:bg-red-50 transition-all flex flex-col items-center gap-2">
                                    <span class="text-5xl group-hover:scale-125 transition-transform">❤️❤️</span>
                                    <span>Cùng màu Đỏ</span>
                                </button>
                                <button onclick="window.addTrial('vàng-vàng')" class="group p-6 bg-white border-4 border-yellow-50 rounded-[2rem] text-2xl font-black text-yellow-600 shadow-lg hover:border-yellow-500 hover:bg-yellow-50 transition-all flex flex-col items-center gap-2">
                                    <span class="text-5xl group-hover:scale-125 transition-transform">💛💛</span>
                                    <span>Cùng màu Vàng</span>
                                </button>
                            </div>
                            <button onclick="window.addTrial('khác')" class="group w-full p-6 bg-white border-4 border-slate-50 rounded-[2rem] text-2xl font-black text-slate-600 shadow-lg hover:border-slate-500 hover:bg-slate-50 transition-all flex items-center justify-center gap-6">
                                <span class="text-5xl group-hover:rotate-12 transition-transform">❤️💛</span>
                                <span>Lấy được 2 màu KHÁC NHAU</span>
                            </button>
                        </div>
                    </div>

                    <!-- Khu vực trả lời câu hỏi -->
                    <div class="space-y-12">
                        <!-- Câu b -->
                        <div class="bg-white p-10 rounded-[3.5rem] border-4 border-emerald-50 shadow-xl space-y-8 relative overflow-hidden">
                             <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                             <p class="text-3xl font-black text-slate-800 leading-snug">
                                <span class="inline-block w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl text-center leading-[3rem] mr-4 shadow-sm">b</span>
                                Viết tỉ số để mô tả số lần lặp lại của khả năng <span class="text-emerald-600 italic underline">"lấy được 2 chiếc tất cùng màu"</span> trong số các lần lấy tất ở trên của em:
                             </p>
                             <div class="flex flex-col items-center gap-6">
                                 <input type="text" id="in-152-3-ratio" placeholder="? / 10" class="w-full max-w-sm text-center p-10 border-b-8 border-emerald-400 outline-none font-black text-7xl text-emerald-700 bg-emerald-50/30 rounded-[2.5rem] shadow-inner focus:border-emerald-600 transition-all hover:bg-emerald-50">
                                 <p class="text-xl font-bold text-slate-400">Hãy đếm số lần ❤️❤️ và 💛💛 rồi viết tỉ số nhé!</p>
                             </div>
                        </div>

                        <!-- Câu c -->
                        <div class="bg-white p-10 rounded-[3.5rem] border-4 border-emerald-50 shadow-xl space-y-10">
                            <p class="text-3xl font-black text-slate-900 leading-snug flex items-center gap-4">
                                <span class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center shadow-lg">c</span>
                                <span>Nhận định tính chắc chắn:</span>
                            </p>
                            <div class="space-y-12 pl-6">
                                <div class="space-y-6">
                                    <p class="text-2xl font-bold text-slate-600 leading-relaxed italic border-l-8 border-emerald-200 pl-6">Nếu mỗi lần chỉ lấy 2 chiếc tất bất kì thì ta có chắc chắn lấy được 2 chiếc tất cùng màu hay không?</p>
                                    <div class="grid grid-cols-2 gap-6">
                                        <button id="btn-152-3-c1-no" onclick="window.selectC(1, 'không')" class="py-6 bg-slate-50 border-4 border-white rounded-[2rem] font-black text-3xl text-slate-700 transition-all hover:border-emerald-400 shadow-md">KHÔNG</button>
                                        <button id="btn-152-3-c1-yes" onclick="window.selectC(1, 'có')" class="py-6 bg-slate-50 border-4 border-white rounded-[2rem] font-black text-3xl text-slate-700 transition-all hover:border-emerald-400 shadow-md">CÓ</button>
                                    </div>
                                </div>
                                <div class="space-y-6">
                                    <p class="text-2xl font-bold text-slate-600 leading-relaxed italic border-l-8 border-emerald-200 pl-6">Nếu mỗi lần lấy 3 chiếc tất bất kì thì ta có chắc chắn lấy được 2 chiếc tất cùng màu hay không?</p>
                                    <div class="grid grid-cols-2 gap-6">
                                        <button id="btn-152-3-c2-no" onclick="window.selectC(2, 'không')" class="py-6 bg-slate-50 border-4 border-white rounded-[2rem] font-black text-3xl text-slate-700 transition-all hover:border-emerald-400 shadow-md">KHÔNG</button>
                                        <button id="btn-152-3-c2-yes" onclick="window.selectC(2, 'có')" class="py-6 bg-slate-50 border-4 border-white rounded-[2rem] font-black text-3xl text-slate-700 transition-all hover:border-emerald-400 shadow-md">CÓ</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12 pt-12 border-t-4 border-dashed border-emerald-100">
                    <button id="btn-check-152-3" onclick="window.check_152_3()" class="w-28 h-28 bg-emerald-600 text-white rounded-[2.5rem] font-black text-6xl flex items-center justify-center shadow-2xl hover:bg-emerald-700 active:scale-95 transition-all shadow-emerald-200/50 hover:rotate-3">E</button>
                </div>
            </div>
        </div>


        <!-- Bài 4 -->
        <div class="glass-card p-6 md:p-10 rounded-[3rem] bg-white border border-blue-100 shadow-2xl relative overflow-hidden group">
            <div class="relative z-10">
                <div class="flex items-start gap-8 border-b-6 border-blue-100 pb-10 mb-12">
                    <span class="w-20 h-20 bg-blue-600 text-white rounded-[1.5rem] flex items-center justify-center text-4xl font-black shadow-lg shrink-0">4</span>
                    <h3 class="text-3xl text-slate-700 leading-relaxed font-bold">Bài 4. Biểu đồ dưới đây cho biết tỉ số phần trăm thời gian dành cho các hoạt động trong ngày thứ Sáu của Rô-bốt. Chọn câu trả lời đúng.</h3>
                </div>

                <div class="flex flex-col lg:flex-row gap-12 items-center">
                    <div class="lg:w-1/2 flex flex-col items-center gap-8">
                        <img src="assets/images/toan/toan_tap_2/96/" class="w-full w-full rounded-[3rem] shadow-2xl border-4 border-white" alt="Biểu đồ robot">
                        <img src="assets/images/toan/toan_tap_2/152/" class="max-w-xs rounded-[2rem] shadow-lg border-2 border-blue-100" alt="Robot ngủ">
                    </div>
                    
                    <div class="lg:w-1/2 w-full space-y-12">
                         <div class="space-y-6">
                            <p class="text-3xl font-black text-blue-900 border-l-8 border-blue-600 pl-6 uppercase">a) Giải trí và thư giãn chiếm khoảng:</p>
                            <div class="grid grid-cols-2 gap-4">
                                <button onclick="window.select4a('A')" id="btn-4a-A" class="p-6 bg-white border-4 border-blue-100 rounded-3xl text-2xl font-bold hover:border-blue-500 transition-all text-left"><b>A.</b> 12,5%</button>
                                <button onclick="window.select4a('B')" id="btn-4a-B" class="p-6 bg-white border-4 border-blue-100 rounded-3xl text-2xl font-bold hover:border-blue-500 transition-all text-left"><b>B.</b> 25%</button>
                                <button onclick="window.select4a('C')" id="btn-4a-C" class="p-6 bg-white border-4 border-blue-100 rounded-3xl text-2xl font-bold hover:border-blue-500 transition-all text-left"><b>C.</b> 50%</button>
                                <button onclick="window.select4a('D')" id="btn-4a-D" class="p-6 bg-white border-4 border-blue-100 rounded-3xl text-2xl font-bold hover:border-blue-500 transition-all text-left"><b>D.</b> 60%</button>
                            </div>
                         </div>

                         <div class="space-y-6">
                            <p class="text-3xl font-black text-blue-900 border-l-8 border-blue-600 pl-6 uppercase">b) Số giờ Rô-bốt dùng để ngủ là khoảng:</p>
                            <div class="grid grid-cols-2 gap-4">
                                <button onclick="window.select4b('A')" id="btn-4b-A" class="p-6 bg-white border-4 border-blue-100 rounded-3xl text-2xl font-bold hover:border-blue-500 transition-all text-left"><b>A.</b> 3 giờ</button>
                                <button onclick="window.select4b('B')" id="btn-4b-B" class="p-6 bg-white border-4 border-blue-100 rounded-3xl text-2xl font-bold hover:border-blue-500 transition-all text-left"><b>B.</b> 6 giờ</button>
                                <button onclick="window.select4b('C')" id="btn-4b-C" class="p-6 bg-white border-4 border-blue-100 rounded-3xl text-2xl font-bold hover:border-blue-500 transition-all text-left"><b>C.</b> 9 giờ</button>
                                <button onclick="window.select4b('D')" id="btn-4b-D" class="p-6 bg-white border-4 border-blue-100 rounded-3xl text-2xl font-bold hover:border-blue-500 transition-all text-left"><b>D.</b> 12 giờ</button>
                            </div>
                         </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-152-4" onclick="window.check_152_4()" class="w-20 h-20 bg-blue-600 text-white rounded-[1.5rem] font-black text-4xl flex items-center justify-center shadow-lg hover:bg-blue-700 active:scale-95 transition-all shadow-blue-200/50">E</button>
                </div>
            </div>
        </div>

        <div class="glass-card p-10 rounded-[4rem] bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl flex flex-col items-center gap-6 text-center">
            <h3 class="text-4xl font-black uppercase tracking-widest">🎉 Tuyệt vời!</h3>
            <p class="text-2xl font-medium italic opacity-90">Em đã hoàn thành các chặng luyện tập của bài 67. Hãy nộp kết quả để lưu lại thành tích nhé!</p>
            <button id="btn-final-152" onclick="window.submitFinal152()" class="px-16 py-8 bg-white text-blue-700 rounded-[3rem] font-black text-4xl shadow-2xl hover:scale-105 active:scale-95 transition-all">Nộp bài luyện tập</button>
        </div>
    </div>

    <style>
        .sock-token { width: 3rem; height: 3rem; display: flex; align-items: center; justify-center; border-radius: 50%; font-size: 1.5rem; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
    </style>
`;

// Logic Xử Lý
let trialResults = [];
let ans3c = { 1: null, 2: null };
let ans4a = null;
let ans4b = null;

window.check_152_1 = function () {
    const a = (document.getElementById('in-152-1-a').value || "").toLowerCase().trim();
    const b = (document.getElementById('in-152-1-b').value || "").trim();
    const c = parseInt(document.getElementById('in-152-1-c').value);

    let isCorrect = (a === "xe máy") && (b === "10%" || b === "10") && (c === 200);

    const rightAnswer = "a) Xe máy; b) 10%; c) 200 xe";
    const guidance = "Em hãy quan sát biểu đồ hình quạt tròn:<br>- Phần nào rộng nhất tương ứng với tỉ lệ cao nhất.<br>- Đọc tỉ lệ trực tiếp trên từng phần màu.<br>- Để tìm tổng số xe, em lấy số xe đạp chia cho tỉ số phần trăm tương ứng của nó nhé!";
    const solution = `<div class='space-y-4'>
        <p class='text-emerald-600 font-bold'>🌟 Giỏi lắm! Em đã đọc và phân tích biểu đồ rất chính xác.</p>
        <div class='bg-white p-6 rounded-[2rem] shadow-inner border border-blue-50 space-y-3'>
            <p>a) Xe máy có phần quạt rộng nhất (75%), nên là loại xe nhiều nhất.</p>
            <p>b) Xe ô tô tương ứng với phần màu đỏ, chiếm <b>10%</b>.</p>
            <p>c) 30 xe đạp ứng với 15%.<br>Tổng số xe là: 30 : 15 &times; 100 = <b>200 (xe)</b>.</p>
        </div>
    </div>`;

    window.showMathFeedback(isCorrect, rightAnswer, `${a}, ${b}, ${c}`, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Biểu đồ bãi đỗ xe", isCorrect ? 100 : 0, 'btn-check-152-1', 0, 3, isCorrect ? 3 : 0);
};

window.check_152_2 = function () {
    const ans = (document.getElementById('in-152-2').value || "").trim().replace(/\s/g, '');
    const isCorrect = (ans === "22/30" || ans === "11/15");
    const rightAnswer = "22/30 (hoặc 11/15)";
    const guidance = "Tỉ số thực nghiệm = (Số lần sự kiện xảy ra) : (Tổng số lần thực hiện).<br>Trong bài này, tổng số lần thực hiện là số ngày của tháng 4. Em hãy đếm xem có bao nhiêu ngày lấy được 2 chiếc tất khác nhau nhé!";
    const solution = `<div class='space-y-4'>
        <p class='text-emerald-600 font-bold'>✨ Tuyệt vời! Em đã xác định đúng tỉ số thực nghiệm.</p>
        <div class='bg-white p-6 rounded-[2rem] shadow-inner border border-blue-50 space-y-3'>
            <p>1. Tổng số lần lấy tất (số ngày trong tháng 4) là: <b>30</b> lần.</p>
            <p>2. Số lần lấy được 2 chiếc tất khác nhau là: <b>22</b> lần.</p>
            <p>3. Tỉ số mô tả khả năng này là: <b>22/30</b> (rút gọn thành <b>11/15</b>).</p>
        </div>
    </div>`;

    window.showMathFeedback(isCorrect, rightAnswer, ans, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Tỉ số kiểm đếm", isCorrect ? 100 : 0, 'btn-check-152-2', 0, 1, isCorrect ? 1 : 0);
};

window.addTrial = function (type) {
    if (trialResults.length >= 10) {
        window.UI.showToast("Đã thực hiện đủ 10 lần rồi em nhé!", "info");
        return;
    }
    if (trialResults.length === 0) document.getElementById('trial-container').innerHTML = "";

    trialResults.push(type);
    const container = document.getElementById('trial-container');
    const dot = document.createElement('div');
    dot.className = "flex items-center justify-center w-16 h-16 rounded-xl text-white font-black text-xl shadow-lg animate-in zoom-in duration-300";
    if (type === 'đỏ-đỏ') { dot.innerText = "❤️❤️"; dot.classList.add('bg-red-500'); }
    else if (type === 'vàng-vàng') { dot.innerText = "💛💛"; dot.classList.add('bg-yellow-500'); }
    else { dot.innerText = "❤️💛"; dot.classList.add('bg-slate-500'); }
    container.appendChild(dot);

    document.getElementById('trial-count-152').innerText = trialResults.length;
};

window.resetTrials = function () {
    trialResults = [];
    document.getElementById('trial-container').innerHTML = '<p class="text-2xl text-slate-400 font-medium italic">Bắt đầu lấy tất ngay bên dưới...</p>';
    document.getElementById('trial-count-152').innerText = "0";
    document.getElementById('in-152-3-ratio').value = "";
};

window.selectC = function (index, value) {
    ans3c[index] = value;
    document.querySelectorAll(`[id^='btn-152-3-c${index}']`).forEach(b => b.classList.replace('bg-emerald-600', 'bg-white'));
    document.querySelectorAll(`[id^='btn-152-3-c${index}']`).forEach(b => b.classList.replace('text-white', 'text-emerald-900'));
    const btn = document.getElementById(`btn-152-3-c${index}-${value === 'có' ? 'yes' : 'no'}`);
    btn.classList.replace('bg-white', 'bg-emerald-600');
    btn.classList.replace('text-emerald-900', 'text-white');
};

window.check_152_3 = function () {
    if (trialResults.length < 10) {
        window.UI.showToast("Em hãy hoàn thành đủ 10 lần thực hiện ảo đã nhé!", "warning");
        return;
    }
    const ratioInput = (document.getElementById('in-152-3-ratio').value || "").trim();
    if (!ratioInput) {
        window.UI.showToast("Em hãy điền tỉ số ở mục (b) nhé!", "warning");
        return;
    }
    if (!ans3c[1] || !ans3c[2]) {
        window.UI.showToast("Em hãy trả lời xong các câu hỏi ở mục (c) nhé!", "warning");
        return;
    }

    const sameColorCount = trialResults.filter(r => r === 'đỏ-đỏ' || r === 'vàng-vàng').length;
    const expectedRatio = `${sameColorCount}/10`;
    const isRatioCorrect = (ratioInput === expectedRatio || ratioInput === `${sameColorCount} / 10`);

    const isLogicCorrect = (ans3c[1] === 'không') && (ans3c[2] === 'có');

    const isCorrect = isRatioCorrect && isLogicCorrect;

    const rightAnswer = `Tỉ số: ${expectedAvg}; c1: Không; c2: Có`;
    const guidance = "Ở mục (b), em hãy đếm số cặp cùng màu (đỏ-đỏ hoặc vàng-vàng) trong 10 lần em vừa thực hiện. Ở mục (c), hãy nhớ rằng nếu chỉ lấy 2 chiếc, vẫn có thể rơi vào trường hợp 1 đỏ 1 vàng. Nhưng nếu lấy 3 chiếc, vì chỉ có 2 màu nên chắc chắn sẽ có 2 chiếc cùng màu.";
    const solution = `<div class='space-y-6'>
        <p class='text-emerald-600 font-bold'>🎉 Chúc mừng em đã hoàn thành bài thực hành thực nghiệm!</p>
        <div class='bg-white p-6 rounded-[2rem] shadow-inner border border-blue-50 space-y-4'>
            <p>• <b>Câu b:</b> Trong 10 lần thực hiện, có <b>${sameColorCount}</b> lần lấy được 2 tất cùng màu. Tỉ số là <b>${expectedRatio}</b>.</p>
            <p>• <b>Câu c:</b></p>
            <ul class='list-disc pl-10 space-y-2'>
                <li>Lấy 2 chiếc: <b>Không chắc chắn</b> (vì có thể là 1 đỏ, 1 vàng).</li>
                <li>Lấy 3 chiếc: <b>Chắc chắn</b> (vì chỉ có 2 màu, theo nguyên lý Dirichlet, lấy 3 chiếc sẽ luôn có ít nhất 2 chiếc cùng màu).</li>
            </ul>
        </div>
    </div>`;

    window.showMathFeedback(isCorrect, rightAnswer, ratioInput, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Thực hành & Logic", isCorrect ? 100 : 0, 'btn-check-152-3', 0, 3, isCorrect ? 3 : 0);
};

window.select4a = function (v) {
    ans4a = v;
    document.querySelectorAll("[id^='btn-4a-']").forEach(b => b.classList.remove('bg-blue-600', 'text-white'));
    document.getElementById(`btn-4a-${v}`).classList.add('bg-blue-600', 'text-white');
};
window.select4b = function (v) {
    ans4b = v;
    document.querySelectorAll("[id^='btn-4b-']").forEach(b => b.classList.remove('bg-blue-600', 'text-white'));
    document.getElementById(`btn-4b-${v}`).classList.add('bg-blue-600', 'text-white');
};

window.check_152_4 = function () {
    if (!ans4a || !ans4b) {
        window.UI.showToast("Em hãy chọn đủ hai đáp án trắc nghiệm nhé!", "info");
        return;
    }
    const isCorrect = (ans4a === 'A') && (ans4b === 'C');
    const rightAnswer = "a) A (12,5%); b) C (9 giờ)";
    const guidance = "Em hãy quan sát kỹ biểu đồ hình quạt tròn:<br>- Xác định xem phần diện tích biểu diễn hoạt động giải trí và ngủ chiếm bao nhiêu phần của hình tròn.<br>- Lấy tổng số tương ứng (100% hoặc 24 giờ) nhân với phân số biểu diễn phần diện tích đó để tìm kết quả nhé!";
    const solution = `<div class='space-y-6'>
        <p class='text-emerald-600 font-bold'>🚀 Em có khả năng phân tích biểu đồ rất tuyệt!</p>
        <div class='bg-white p-6 rounded-[2rem] shadow-inner border border-blue-50 space-y-4'>
            <p>a) Giải trí chiếm 1/8 đường tròn: 100% : 8 = <b>12,5%</b>. (Đáp án A)</p>
            <p>b) Ngủ chiếm 3/8 hình tròn: 24 &times; 3/8 = <b>9 (giờ)</b>. (Đáp án C)</p>
        </div>
    </div>`;

    window.showMathFeedback(isCorrect, rightAnswer, `${ans4a}, ${ans4b}`, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Thời gian biểu của Robot", isCorrect ? 100 : 0, 'btn-check-152-4', 0, 2, isCorrect ? 2 : 0);
};

window.submitFinal152 = function () {
    const report = {
        lessonId: "152",
        type: "practice_report",
        title: "152. Luyện tập: Biểu đồ và Kiểm đếm",
        timestamp: new Date().toISOString(),
        score: 100,
        results: {
            bai1: "Hoàn thành",
            bai2: "Hoàn thành",
            bai3_practicalPath: trialResults.join(", "),
            bai4: "Hoàn thành"
        }
    };
    if (window.submitMathLesson) {
        window.submitMathLesson(report, 100, 'btn-final-152', 0, 1, 1);
        window.UI.showToast("Tuyệt vời! Kết quả bài 152 đã được lưu lại. 🚀", "success");
        if (window.syncRealtimeProgress) window.syncRealtimeProgress({ completed: true, score: 100 }, true);
    }
};

export const lesson152 = {
    "topic": metadata.lessonInfo.topic,
    "week": metadata.lessonInfo.week,
    "period": metadata.lessonInfo.period,
    "title": metadata.lessonInfo.title,
    "desc": metadata.lessonInfo.desc,
    "content": `
        <div class="theory-section space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 pt-6 font-vietpro">
            <!-- Header -->
            <div class="glass-card p-10 rounded-[4rem] bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl relative overflow-hidden mb-12">
                <div class="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                <div class="relative z-10 flex items-center gap-10">
                    <div class="w-32 h-32 bg-white/20 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center text-6xl shadow-inner animate-bounce-slow">🏹</div>
                    <div>
                        <h2 class="text-5xl font-black uppercase tracking-tight mb-2">Tóm tắt kiến thức</h2>
                        <p class="text-3xl font-medium opacity-90 italic">Biểu đồ hình quạt tròn & Xác suất thực nghiệm</p>
                    </div>
                </div>
            </div>

            <!-- Kiến thức 1 -->
            <div class="glass-card p-10 rounded-[3.5rem] bg-white border-2 border-blue-50 shadow-xl">
                 <h3 class="text-4xl font-black text-blue-700 flex items-center gap-6 mb-10 decoration-blue-200 underline underline-offset-10">
                    <span class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-4xl shadow-inner">📊</span>
                    <span>Biểu đồ hình quạt tròn</span>
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div class="p-8 bg-slate-50 rounded-[3rem] border-2 border-slate-100 shadow-inner space-y-4">
                        <p class="text-2xl font-bold text-slate-600 leading-relaxed">• Dùng để so sánh các phần với <b>toàn thể</b>.</p>
                        <p class="text-2xl font-bold text-slate-600 leading-relaxed">• Toàn bộ hình tròn biểu thị <b>100%</b>.</p>
                        <p class="text-2xl font-bold text-slate-600 leading-relaxed">• Mỗi phần hình tròn tương ứng với tỉ số phần trăm của từng đối tượng.</p>
                    </div>
                    <div class="bg-blue-600 p-10 rounded-[3rem] text-white shadow-2xl flex flex-col items-center justify-center text-center">
                         <div class="text-2xl font-medium opacity-80 mb-4 uppercase tracking-widest">Công thức vàng</div>
                         <div class="text-4xl font-black leading-tight italic">TỔNG THỂ = <br> GIÁ TRỊ PHẦN : TỈ SỐ %</div>
                    </div>
                </div>
            </div>

            <!-- Kiến thức 2 -->
            <div class="glass-card p-10 rounded-[3.5rem] bg-white border-2 border-emerald-50 shadow-xl">
                 <h3 class="text-4xl font-black text-emerald-700 flex items-center gap-6 mb-10 decoration-emerald-200 underline underline-offset-10">
                    <span class="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-4xl shadow-inner">🎲</span>
                    <span>Xác suất thực nghiệm</span>
                </h3>
                <div class="bg-emerald-50 rounded-[3rem] p-10 border-2 border-emerald-100">
                    <p class="text-3xl font-bold text-slate-700 mb-8 leading-snug">Tỉ số lần lặp lại của một khả năng xảy ra trong một thí nghiệm được tính bằng công thức:</p>
                    <div class="flex flex-col items-center bg-white p-10 rounded-[3rem] shadow-xl border-4 border-emerald-200">
                        <div class="text-4xl font-black text-emerald-600">Số lần sự kiện xảy ra</div>
                        <div class="w-3/4 h-2 bg-emerald-300 my-4 rounded-full"></div>
                        <div class="text-4xl font-black text-emerald-600">Tổng số lần thực hiện</div>
                    </div>
                </div>
            </div>
        </div>
    `,

    "practice": lesson152_practice,
    "quizPool": metadata.quizPool,
    "metadata": metadata
};

window.lesson152 = lesson152;

