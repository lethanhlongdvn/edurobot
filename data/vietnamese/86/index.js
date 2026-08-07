export const lesson086 = {
    "topic": "Tiếng Việt 5",
    "week": "13",
    "period": "86",
    "title": "LUYỆN TẬP VỀ DẤU GẠCH NGANG",
    "desc": "Bài học giúp học sinh thực hành xác định công dụng của dấu gạch ngang, rèn luyện cách sử dụng dấu gạch ngang để chú thích, liên danh, và liệt kê các ý trong câu.",
    "subject": "LTVC",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-emerald-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-emerald-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-emerald-950 mb-4 flex items-center gap-3">
            <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-emerald-900 font-bold text-2xl md:text-3xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Xác định chính xác công dụng của dấu gạch ngang trong các ngữ cảnh khác nhau.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Biết cách thêm dấu gạch ngang thích hợp vào đoạn văn để đánh dấu bộ phận chú thích, giải thích.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Thực hành viết câu chứa dấu gạch ngang đúng chuẩn theo 3 công dụng chính.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Thử tài trí nhớ</h3>
        </div>
        <div class="bg-amber-50 bg-opacity-40 p-4 rounded-xl text-xl md:text-2xl font-bold text-amber-800">
            💬 Dấu gạch ngang có mấy công dụng chính đã được học ở tiết trước?
        </div>
        
        <div class="space-y-4 max-w-xl mx-auto">
            <div class="grid grid-cols-2 gap-3">
                <label class="flex items-center gap-2 font-bold cursor-pointer text-lg p-3 bg-gray-50 rounded-xl border border-gray-100 select-none">
                    <input type="radio" name="kd-opt-sign" value="2" class="w-5 h-5 text-emerald-800">
                    <span>2 công dụng</span>
                </label>
                <label class="flex items-center gap-2 font-bold cursor-pointer text-lg p-3 bg-gray-50 rounded-xl border border-gray-100 select-none">
                    <input type="radio" name="kd-opt-sign" value="3" class="w-5 h-5 text-emerald-800">
                    <span>3 công dụng</span>
                </label>
                <label class="flex items-center gap-2 font-bold cursor-pointer text-lg p-3 bg-gray-50 rounded-xl border border-gray-100 select-none">
                    <input type="radio" name="kd-opt-sign" value="4" class="w-5 h-5 text-emerald-800">
                    <span>4 công dụng</span>
                </label>
                <label class="flex items-center gap-2 font-bold cursor-pointer text-lg p-3 bg-gray-50 rounded-xl border border-gray-100 select-none">
                    <input type="radio" name="kd-opt-sign" value="5" class="w-5 h-5 text-emerald-800">
                    <span>5 công dụng</span>
                </label>
            </div>
            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraKhoiDong86();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn86-kd" class="hidden p-4 rounded-xl text-lg font-bold text-center mt-2"></div>
        </div>
    </div>

    <!-- 📋 BÀI TẬP 1: XÁC ĐỊNH CÔNG DỤNG -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-6 relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <div class="flex items-center gap-3 border-b border-emerald-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">1</span>
                <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                    Nêu công dụng của dấu gạch ngang trong mỗi trường hợp dưới đây:
                </h3>
            </div>

            <div class="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                <!-- Câu a -->
                <div class="bg-amber-50/20 p-6 md:p-8 rounded-3xl border border-amber-100 space-y-4 flex flex-col justify-between shadow-sm">
                    <div>
                        <span class="text-sm font-black text-amber-800 bg-amber-200 px-3 py-1 rounded-md">Trường hợp a</span>
                        <div class="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed italic mt-3 pl-3 border-l-4 border-amber-450">
                            Thấy Ngô Thì Sĩ nhà nghèo, lại hay mượn sách vào ban đêm, các bạn hỏi cậu lấy đèn đâu mà đọc. Cậu vui vẻ chỉ lên mặt trăng:<br>
                            <span class="text-emerald-900 font-semibold">– Đã có ngọn đèn lớn, ngọn đèn vĩnh cửu kia.</span>
                            <span class="block text-right text-base font-normal text-gray-755 mt-1">(Theo Tuệ An)</span>
                        </div>
                    </div>
                    <div class="space-y-2 pt-3 border-t border-amber-100">
                        <label class="text-lg md:text-xl font-bold text-gray-800 block">Chọn công dụng:</label>
                        <select id="vn86-bt1-a" class="w-full p-3 border-2 border-amber-200 rounded-xl font-bold bg-white text-xl md:text-2xl shadow-sm">
                            <option value="">-- Chọn đáp án --</option>
                            <option value="loinoi">Đánh dấu lời nói trực tiếp của nhân vật</option>
                            <option value="chuthich">Đánh dấu bộ phận chú thích, giải thích</option>
                            <option value="liendanh">Nối các từ ngữ trong một liên danh</option>
                            <option value="lietke">Đánh dấu các ý liệt kê</option>
                        </select>
                    </div>
                </div>

                <!-- Câu b -->
                <div class="bg-sky-50/20 p-6 md:p-8 rounded-3xl border border-sky-100 space-y-4 flex flex-col justify-between shadow-sm">
                    <div>
                        <span class="text-sm font-black text-sky-800 bg-sky-200 px-3 py-1 rounded-md">Trường hợp b</span>
                        <div class="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed italic mt-3 pl-3 border-l-4 border-sky-450">
                            Việt Nam tự hào về Giáo sư Tạ Quang Bửu <span class="text-emerald-900 font-semibold">– nhà khoa học, nhà giáo dục đa tài, uyên bác.</span>
                            <span class="block text-right text-base font-normal text-gray-755 mt-1">(Gia Huy)</span>
                        </div>
                    </div>
                    <div class="space-y-2 pt-3 border-t border-sky-100">
                        <label class="text-lg md:text-xl font-bold text-gray-800 block">Chọn công dụng:</label>
                        <select id="vn86-bt1-b" class="w-full p-3 border-2 border-sky-200 rounded-xl font-bold bg-white text-xl md:text-2xl shadow-sm">
                            <option value="">-- Chọn đáp án --</option>
                            <option value="loinoi">Đánh dấu lời nói trực tiếp của nhân vật</option>
                            <option value="chuthich">Đánh dấu bộ phận chú thích, giải thích</option>
                            <option value="liendanh">Nối các từ ngữ trong một liên danh</option>
                            <option value="lietke">Đánh dấu các ý liệt kê</option>
                        </select>
                    </div>
                </div>

                <!-- Câu c -->
                <div class="bg-emerald-50/20 p-6 md:p-8 rounded-3xl border border-emerald-100 space-y-4 flex flex-col justify-between shadow-sm">
                    <div>
                        <span class="text-sm font-black text-emerald-850 bg-emerald-200 px-3 py-1 rounded-md">Trường hợp c</span>
                        <div class="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed italic mt-3 pl-3 border-l-4 border-emerald-450">
                            Theo hành trình Đại Tây Dương <span class="text-emerald-900 font-semibold">– Thái Bình Dương</span>, đoàn thám hiểm đã thực hiện chuyến vòng quanh thế giới bằng đường biển.
                            <span class="block text-right text-base font-normal text-gray-755 mt-1">(Ngọc Quảng)</span>
                        </div>
                    </div>
                    <div class="space-y-2 pt-3 border-t border-emerald-100">
                        <label class="text-lg md:text-xl font-bold text-gray-800 block">Chọn công dụng:</label>
                        <select id="vn86-bt1-c" class="w-full p-3 border-2 border-emerald-200 rounded-xl font-bold bg-white text-xl md:text-2xl shadow-sm">
                            <option value="">-- Chọn đáp án --</option>
                            <option value="loinoi">Đánh dấu lời nói trực tiếp của nhân vật</option>
                            <option value="chuthich">Đánh dấu bộ phận chú thích, giải thích</option>
                            <option value="liendanh">Nối các từ ngữ trong một liên danh</option>
                            <option value="lietke">Đánh dấu các ý liệt kê</option>
                        </select>
                    </div>
                </div>

                <!-- Câu d -->
                <div class="bg-teal-50/20 p-6 md:p-8 rounded-3xl border border-teal-100 space-y-4 flex flex-col justify-between shadow-sm">
                    <div>
                        <span class="text-sm font-black text-teal-855 bg-teal-200 px-3 py-1 rounded-md">Trường hợp d</span>
                        <div class="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed italic mt-3 pl-3 border-l-4 border-teal-455">
                            Trong cuốn Sống một đời tựa biển khơi, các tác giả đã vẽ nên một đại dương với vô vàn sinh vật kì thú:<br>
                            <span class="text-emerald-900 font-semibold">– San hô có muôn hình muôn dạng<br>
                            – Cá hề và hải quỳ có màu sắc sặc sỡ<br>
                            – Tôm gõ mõ tạo ra bản hợp xướng vang động biển khơi,...</span>
                            <span class="block text-right text-base font-normal text-gray-755 mt-1">(Theo Cao Sơn)</span>
                        </div>
                    </div>
                    <div class="space-y-2 pt-3 border-t border-teal-100">
                        <label class="text-lg md:text-xl font-bold text-gray-800 block">Chọn công dụng:</label>
                        <select id="vn86-bt1-d" class="w-full p-3 border-2 border-teal-200 rounded-xl font-bold bg-white text-xl md:text-2xl shadow-sm">
                            <option value="">-- Chọn đáp án --</option>
                            <option value="loinoi">Đánh dấu lời nói trực tiếp của nhân vật</option>
                            <option value="chuthich">Đánh dấu bộ phận chú thích, giải thích</option>
                            <option value="liendanh">Nối các từ ngữ trong một liên danh</option>
                            <option value="lietke">Đánh dấu các ý liệt kê</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraBai1_86();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn86-bt1" class="hidden p-4 rounded-xl text-lg font-bold text-center mt-2 max-w-4xl mx-auto"></div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 BÀI TẬP 2: THÊM DẤU GẠCH NGANG -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-emerald-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">2</span>
            <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                Cần thêm dấu gạch ngang vào những vị trí nào trong đoạn văn dưới đây?
            </h3>
        </div>

        <p class="text-lg md:text-xl text-gray-755 font-bold">👉 Hướng dẫn: Nhấp chuột trực tiếp vào khoảng cách giữa hai từ bất kỳ trong đoạn văn dưới đây để bật/tắt chèn dấu gạch ngang <span class="inline-block px-1.5 bg-emerald-100 border border-emerald-500 rounded text-emerald-900 font-black font-sans text-xs">–</span>. Sau đó nhấn nút kiểm tra để xem kết quả.</p>

        <!-- Script to auto-render paragraph when tab loads -->
        <script>
            if (typeof window.renderParagraph86 === 'function') {
                window.renderParagraph86();
            }
        </script>

        <div id="p86-paragraph" class="bg-amber-50 bg-opacity-30 p-6 md:p-8 rounded-[32px] border border-amber-100 shadow-inner max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed text-gray-800 font-semibold font-sans">
            <!-- Nơi render tự động -->
        </div>

        <div class="flex justify-end items-center gap-4"><button onclick="kiemTraBai2_86();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
        <div id="fb-vn86-bt2" class="hidden p-4 rounded-xl text-lg font-bold text-center mt-2 max-w-4xl mx-auto"></div>
    </section>

    <!-- 📋 BÀI TẬP 3: VIẾT CÂU -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-emerald-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">3</span>
            <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                Viết 1 – 2 câu có sử dụng dấu gạch ngang với một trong những công dụng sau:
            </h3>
        </div>

        <div class="space-y-4 max-w-4xl mx-auto">
            <!-- Chọn công dụng để viết câu -->
            <div class="bg-emerald-50/30 p-4 rounded-2xl border border-emerald-100 space-y-3">
                <p class="font-bold text-emerald-900 text-lg">👉 Chọn một công dụng em muốn thực hành:</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-150 cursor-pointer hover:bg-emerald-50/50 font-bold text-base">
                        <input type="radio" name="p86-writing-type" value="lietke" class="w-5 h-5 text-emerald-800" checked>
                        <span>a. Đánh dấu các ý liệt kê</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-150 cursor-pointer hover:bg-emerald-50/50 font-bold text-base">
                        <input type="radio" name="p86-writing-type" value="liendanh" class="w-5 h-5 text-emerald-800">
                        <span>b. Nối các từ ngữ trong liên danh</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-150 cursor-pointer hover:bg-emerald-50/50 font-bold text-base">
                        <input type="radio" name="p86-writing-type" value="chuthich" class="w-5 h-5 text-emerald-800">
                        <span>c. Đánh dấu bộ phận chú thích</span>
                    </label>
                </div>
            </div>

            <textarea id="ans-vn86-vietvan" rows="4" placeholder="Nhập câu văn của em tại đây..." class="w-full p-4 text-xl rounded-2xl border-2 border-emerald-100 outline-none focus:border-emerald-500 font-bold bg-white text-gray-800"></textarea>
            
            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraBai3_86();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn86-writing" class="hidden p-5 rounded-2xl font-bold text-lg"></div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn86Global()" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-emerald-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH BÀI HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Công dụng chính của dấu gạch ngang được đặt ở đầu dòng để làm gì?",
            "options": [
                "Đánh dấu các ý trong một danh sách liệt kê hoặc lời nói đối thoại",
                "Đánh dấu tên các địa danh trong một liên danh du lịch",
                "Đánh dấu bộ phận chú thích giải thích giữa câu",
                "Dùng để nối các âm tiết của từ mượn nước ngoài"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Dấu gạch ngang trong trường hợp: 'Hà Nội – Hải Phòng' có công dụng gì?",
            "options": [
                "Nối các từ ngữ trong một liên danh",
                "Đánh dấu bộ phận giải thích, chú thích",
                "Đánh dấu lời nói trực tiếp của nhân vật",
                "Dùng để liệt kê các danh lam thắng cảnh"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong câu: 'Giáo sư Tạ Quang Bửu – nhà khoa học, nhà giáo dục đa tài...', dấu gạch ngang làm nhiệm vụ gì?",
            "options": [
                "Đánh dấu bộ phận chú thích, giải thích về Giáo sư Tạ Quang Bửu",
                "Đánh dấu lời nói trực tiếp của nhân vật",
                "Nối hai địa danh trong một liên danh quốc tế",
                "Đánh dấu các ý liệt kê những phát minh lớn"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Công dụng của dấu gạch ngang trong hội thoại là gì?",
            "options": [
                "Đánh dấu lời nói trực tiếp của nhân vật",
                "Dùng để chú thích những từ ngữ khó hiểu",
                "Nối các địa danh có chung đường biên giới",
                "Liệt kê các nhân vật tham gia đối thoại"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Dấu gạch ngang xuất hiện ở những vị trí nào trong câu để làm nhiệm vụ chú thích, giải thích?",
            "options": [
                "Đặt ở giữa câu, thường đi kèm thành cặp trước và sau bộ phận chú thích",
                "Chỉ đặt ở đầu dòng của văn bản",
                "Chỉ đặt ở cuối câu ngay trước dấu chấm",
                "Đặt xen kẽ giữa các từ ghép tiếng Việt"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đoạn văn liệt kê các loài sinh vật biển (san hô, cá hề, tôm gõ mõ) sử dụng dấu gạch ngang ở đâu?",
            "options": [
                "Ở đầu dòng trước mỗi ý liệt kê",
                "Ở cuối dòng trước dấu chấm lửng",
                "Ở giữa dòng để liên kết các loài cá",
                "Đặt ở cuối mỗi từ ngữ chú thích"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Cần chèn mấy dấu gạch ngang vào câu: 'Những trí tuệ vĩ đại bộ sách viết về nhà khoa học gồm 5 cuốn.' để đánh dấu bộ phận chú thích?",
            "options": [
                "1 dấu gạch ngang",
                "2 dấu gạch ngang",
                "3 dấu gạch ngang",
                "Không cần dấu gạch ngang"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cụm từ 'Đại Tây Dương – Thái Bình Dương' là một ví dụ cho công dụng nào?",
            "options": [
                "Nối các từ ngữ trong một liên danh",
                "Đánh dấu bộ phận chú thích giải thích",
                "Đánh dấu lời nói trực tiếp",
                "Liệt kê các đại dương lớn"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong câu: 'Cậu vui vẻ chỉ lên mặt trăng: – Đã có ngọn đèn lớn, ngọn đèn vĩnh cửu kia.', dấu gạch ngang biểu thị điều gì?",
            "options": [
                "Lời nói trực tiếp của cậu bé (Ngô Thì Sĩ)",
                "Bộ phận chú thích về mặt trăng vĩnh cửu",
                "Liên danh giữa mặt trăng và trái đất",
                "Ý liệt kê các loại đèn phát sáng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Bộ phận chú thích, giải thích được đánh dấu bằng dấu gạch ngang có tác dụng gì đối với câu văn?",
            "options": [
                "Cung cấp thêm thông tin làm rõ nghĩa cho từ ngữ đứng trước nó",
                "Làm cho câu văn dài hơn để đạt điểm cao hơn",
                "Thay thế hoàn toàn cho chủ ngữ trong câu",
                "Chỉ ra lời thoại gián tiếp của tác giả truyện"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tại sao dấu gạch ngang trong liên danh 'Hà Nội – Hải Phòng' không được thay thế bằng dấu phẩy?",
            "options": [
                "Vì dấu gạch ngang thể hiện sự liên kết địa lý/tuyến đường nối giữa hai địa điểm đó",
                "Vì dấu phẩy sẽ biến câu văn thành câu liệt kê đơn thuần không có liên kết hành trình",
                "Cả hai phương án trên đều đúng",
                "Phương án thay thế bằng dấu phẩy là hoàn toàn chính xác"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Ý nào dưới đây chỉ ra điểm khác biệt giữa dấu gạch ngang và dấu gạch nối?",
            "options": [
                "Dấu gạch ngang dùng làm dấu câu để đánh dấu chú thích, liệt kê; dấu gạch nối dùng để nối các âm tiết của tên nước ngoài",
                "Dấu gạch ngang ngắn hơn dấu gạch nối",
                "Dấu gạch nối được dùng để đánh dấu lời nói trực tiếp của nhân vật",
                "Không có điểm gì khác biệt, hai dấu là một"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Câu nào sau đây sử dụng dấu gạch ngang đúng công dụng chú thích?",
            "options": [
                "Xuân Diệu – nhà thơ lớn của Việt Nam – nổi tiếng với những bài thơ tình.",
                "– Xuân Diệu là nhà thơ lớn của nền văn học Việt Nam.",
                "Xuân Diệu là nhà thơ lớn – viết nhiều bài thơ rất hay.",
                "Xuân Diệu – Hà Nội – Hải Phòng là hành trình sáng tác của nhà thơ."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi viết một danh sách liệt kê các công việc cần làm trong ngày, dấu gạch ngang nên đặt ở đâu?",
            "options": [
                "Đầu dòng mỗi công việc cần thực hiện",
                "Giữa các từ trong câu liệt kê công việc",
                "Cuối cùng sau khi viết hết các việc",
                "Đặt tùy ý không cần quy tắc"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tên riêng nước ngoài 'Tét-xla' có chứa dấu gì ở giữa các âm tiết?",
            "options": [
                "Dấu gạch nối",
                "Dấu gạch ngang",
                "Dấu ngoặc đơn",
                "Dấu gạch chéo"
            ],
            "answer": 0,
            "level": 0
        }
    ]
};

// Biến lưu trạng thái Bài 2
let p86Dashes = {};

// Hàm render đoạn văn tương tác tự do cho Bài 2
window.renderParagraph86 = function() {
    const container = document.getElementById('p86-paragraph');
    if (!container) return;

    const words = [
        "Những", "trí", "tuệ", "vĩ", "đại",
        "bộ", "sách", "viết", "về", "một", "số", "nhà", "khoa", "học", "nổi", "tiếng", "thế", "giới",
        "gồm", "5", "cuốn.",
        "Các", "bạn", "nhỏ", "có", "thể", "tìm", "thấy", "nhiều", "thông", "tin", "thú", "vị", "trong", "mỗi", "cuốn", "sách", "nhỏ", "ấy:",
        "Tét-xla",
        "một", "kĩ", "sự", "điện", "người", "Mỹ",
        "đã", "phát", "minh", "ra", "dòng", "điện", "xoay", "chiều,",
        "Ma-ri", "Quy-ri",
        "người", "phụ", "nữ", "gốc", "Ba", "Lan",
        "đã", "khám", "phá", "ra", "chất", "phóng", "xạ,..."
    ];

    let html = "";
    for (let i = 0; i < words.length; i++) {
        html += words[i];
        if (i < words.length - 1) {
            const isSelected = !!p86Dashes[i];
            const btnClass = isSelected
                ? "px-1.5 text-emerald-900 bg-emerald-100 border border-emerald-500 rounded font-black text-lg mx-1 inline-flex items-center justify-center focus:outline-none min-w-[1.4rem] h-6 align-middle cursor-pointer"
                : "w-3.5 h-6 bg-transparent hover:bg-emerald-100/80 rounded transition-all mx-0.5 inline-flex items-center justify-center focus:outline-none align-middle cursor-pointer text-transparent select-none";
            const btnText = isSelected ? "–" : "";
            html += `<button id="p86-space-${i}" onclick="toggleSpace86(${i})" class="${btnClass}">${btnText}</button>`;
        }
    }
    html += `<p class="block text-right text-base font-normal text-gray-700 mt-2">(Theo Nguyễn Bảo Ngân)</p>`;
    container.innerHTML = html;
};

// Hàm bật/tắt chèn dấu gạch ngang tại khoảng cách i
window.toggleSpace86 = function(i) {
    p86Dashes[i] = !p86Dashes[i];
    const btn = document.getElementById(`p86-space-${i}`);
    if (btn) {
        if (p86Dashes[i]) {
            btn.innerHTML = "–";
            btn.className = "px-1.5 text-emerald-900 bg-emerald-100 border border-emerald-500 rounded font-black text-lg mx-1 inline-flex items-center justify-center focus:outline-none min-w-[1.4rem] h-6 align-middle cursor-pointer";
        } else {
            btn.innerHTML = "";
            btn.className = "w-3.5 h-6 bg-transparent hover:bg-emerald-100/80 rounded transition-all mx-0.5 inline-flex items-center justify-center focus:outline-none align-middle cursor-pointer text-transparent select-none";
        }
    }
};


// Kiểm tra Bài 1
window.kiemTraBai1_86 = function() {
    const a = document.getElementById('vn86-bt1-a').value;
    const b = document.getElementById('vn86-bt1-b').value;
    const c = document.getElementById('vn86-bt1-c').value;
    const d = document.getElementById('vn86-bt1-d').value;

    const fb = document.getElementById('fb-vn86-bt1');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!a || !b || !c || !d) {
        fb.innerHTML = "⚠️ Em vui lòng điền đầy đủ đáp án cho cả 4 trường hợp trước khi kiểm tra nhé!";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 max-w-4xl mx-auto bg-amber-100 text-amber-900";
        return;
    }

    if (a === "loinoi" && b === "chuthich" && c === "liendanh" && d === "lietke") {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã xác định chính xác công dụng của dấu gạch ngang trong cả 4 trường hợp. Chúc mừng em!";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 max-w-4xl mx-auto bg-emerald-100 text-emerald-900";
    } else {
        let errors = [];
        if (a !== "loinoi") errors.push("Trường hợp a");
        if (b !== "chuthich") errors.push("Trường hợp b");
        if (c !== "liendanh") errors.push("Trường hợp c");
        if (d !== "lietke") errors.push("Trường hợp d");

        fb.innerHTML = `❌ Có một số lựa chọn chưa chính xác ở: ${errors.join(', ')}. Hãy kiểm tra lại công dụng của từng dấu nhé!`;
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 max-w-4xl mx-auto bg-rose-100 text-rose-900";
    }
};

// Kiểm tra Bài 2
window.kiemTraBai2_86 = function() {
    const fb = document.getElementById('fb-vn86-bt2');
    if (!fb) return;
    fb.classList.remove('hidden');

    const correctIndices = [4, 17, 39, 45, 55, 61];
    
    // Kiểm tra xem tất cả các vị trí đúng đã được chọn chưa
    const hasAllCorrect = correctIndices.every(idx => !!p86Dashes[idx]);
    
    // Kiểm tra xem có vị trí sai nào được chọn hay không
    let hasIncorrect = false;
    for (let k in p86Dashes) {
        const idx = parseInt(k);
        if (p86Dashes[k] && !correctIndices.includes(idx)) {
            hasIncorrect = true;
            break;
        }
    }

    if (hasAllCorrect && !hasIncorrect) {
        fb.innerHTML = "🎉 Xuất sắc! Em đã tìm đúng toàn bộ 6 vị trí cần chèn dấu gạch ngang để đánh dấu bộ phận chú thích cho: bộ sách 'Những trí tuệ vĩ đại', tiểu sử nhà bác học 'Tét-xla' và 'Ma-ri Quy-ri'.";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 max-w-4xl mx-auto bg-emerald-100 text-emerald-900";
    } else {
        fb.innerHTML = "❌ Đáp án chưa chính xác. Em hãy nhớ các cụm từ chú thích giải thích trong câu đều cần được giới hạn bởi cặp dấu gạch ngang (trước và sau cụm từ đó) nhé!";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 max-w-4xl mx-auto bg-rose-100 text-rose-900";
    }
};

// Làm lại Bài 2
window.lamLaiBai2_86 = function() {
    p86Dashes = {};
    if (typeof window.renderParagraph86 === 'function') {
        window.renderParagraph86();
    }
    const fb = document.getElementById('fb-vn86-bt2');
    if (fb) fb.classList.add('hidden');
};


// Chấm Bài 3 bằng AI Thầy E
window.kiemTraBai3_86 = function() {
    const type = document.querySelector('input[name="p86-writing-type"]:checked')?.value;
    const text = document.getElementById('ans-vn86-vietvan').value.trim();
    const fb = document.getElementById('fb-vn86-writing');

    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E nhắc nhở:</h5>
                    <p class="text-lg">Em hãy gõ câu văn của mình vào ô trống trước khi gửi Thầy E chấm nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300";
        return;
    }

    // Các kiểm tra ngữ pháp cơ bản
    const hasDash = text.includes('-') || text.includes('–') || text.includes('—');
    if (!hasDash) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-rose-900">AI Thầy E nhận xét:</h5>
                    <p class="text-lg">Câu văn của em chưa chứa dấu gạch ngang (hoặc dấu trừ trên bàn phím). Hãy sử dụng dấu gạch ngang để đáp ứng đúng yêu cầu của đề bài nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold bg-rose-100 text-rose-900 border border-rose-300";
        return;
    }

    // AI E-Tutor feedback generator
    if (type === "lietke") {
        const lines = text.split('\n').filter(line => line.trim().length > 0);
        const hasBullets = lines.some(line => line.trim().startsWith('-') || line.trim().startsWith('–') || line.trim().startsWith('—'));
        
        if (!hasBullets) {
            fb.innerHTML = `
                <div class="flex items-start gap-4">
                    <span class="text-2xl md:text-3xl">👨‍🏫</span>
                    <div>
                        <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E nhận xét:</h5>
                        <p class="text-lg">Khi viết các ý liệt kê, em nên xuống dòng và bắt đầu mỗi dòng bằng dấu gạch ngang để danh sách trông mạch lạc và đúng quy chuẩn nhé!</p>
                    </div>
                </div>
            `;
            fb.className = "p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300";
        } else {
            fb.innerHTML = `
                <div class="flex items-start gap-4">
                    <span class="text-2xl md:text-3xl">👨‍🏫</span>
                    <div>
                        <h5 class="font-black text-xl mb-1 text-emerald-900">AI Thầy E nhận xét:</h5>
                        <p class="text-lg mb-2">Câu văn liệt kê rất tốt! Em đã sử dụng dấu gạch ngang đầu dòng rất rõ ràng để phân tách các ý.</p>
                        <span class="text-xl font-black bg-emerald-500 text-white px-2 py-0.5 rounded">Hoàn thành bài tập 100%</span>
                    </div>
                </div>
            `;
            fb.className = "p-5 rounded-2xl font-bold bg-emerald-100 text-emerald-900 border border-emerald-300";
        }
    } else if (type === "liendanh") {
        // Nối các từ trong liên danh, ví dụ "Hà Nội - Hải Phòng"
        const matchesLienDanh = /[\w\d\p{L}]+[\s]*(?:-|–|—)[\s]*[\w\d\p{L}]+/u.test(text);
        if (!matchesLienDanh) {
            fb.innerHTML = `
                <div class="flex items-start gap-4">
                    <span class="text-2xl md:text-3xl">👨‍🏫</span>
                    <div>
                        <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E nhận xét:</h5>
                        <p class="text-lg">Câu văn của em có dấu gạch ngang nhưng chưa thể hiện rõ một liên danh (ví dụ: một tuyến bay, chặng tàu, hay liên minh địa danh như Hải Phòng – Hà Nội). Hãy kiểm tra lại nhé!</p>
                    </div>
                </div>
            `;
            fb.className = "p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300";
        } else {
            fb.innerHTML = `
                <div class="flex items-start gap-4">
                    <span class="text-2xl md:text-3xl">👨‍🏫</span>
                    <div>
                        <h5 class="font-black text-xl mb-1 text-emerald-900">AI Thầy E nhận xét:</h5>
                        <p class="text-lg mb-2">Tốt lắm! Câu văn của em đã sử dụng dấu gạch ngang nối liên danh đúng ngữ pháp.</p>
                        <span class="text-xl font-black bg-emerald-500 text-white px-2 py-0.5 rounded">Hoàn thành bài tập 100%</span>
                    </div>
                </div>
            `;
            fb.className = "p-5 rounded-2xl font-bold bg-emerald-100 text-emerald-900 border border-emerald-300";
        }
    } else {
        // Chú thích giải thích
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-emerald-900">AI Thầy E nhận xét:</h5>
                    <p class="text-lg mb-2">Câu văn của em sử dụng dấu gạch ngang để chú thích, giải thích rất hợp lý và tự nhiên. Điều này làm tăng sự sinh động cho thông tin cung cấp.</p>
                    <span class="text-xl font-black bg-emerald-500 text-white px-2 py-0.5 rounded">Hoàn thành bài tập 100%</span>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold bg-emerald-100 text-emerald-900 border border-emerald-300";
    }
};

// Khởi động trắc nghiệm
window.kiemTraKhoiDong86 = function() {
    const select = document.querySelector('input[name="kd-opt-sign"]:checked')?.value;
    const fb = document.getElementById('fb-vn86-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!select) {
        fb.innerHTML = "⚠️ Em hãy chọn một phương án trả lời nhé!";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-amber-100 text-amber-900";
        return;
    }

    if (select === "3") {
        fb.innerHTML = "🎉 Chính xác! Dấu gạch ngang có 3 công dụng chính được học ở bài trước: đánh dấu bộ phận chú thích/giải thích; nối các từ ngữ trong một liên danh; đánh dấu các ý liệt kê (và trong hội thoại còn để đánh dấu lời nói trực tiếp).";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-emerald-100 text-emerald-900";
    } else {
        fb.innerHTML = "❌ Chưa đúng rồi. Em hãy nhớ lại bài học trước có 3 công dụng cơ bản nhé!";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-rose-100 text-rose-900";
    }
};

// Nộp bài hoàn thành
window.submitVn86Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 86',
            '📝',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎉</span><p class="text-lg md:text-2xl font-bold text-emerald-800">Chúc mừng em đã hoàn thành xuất sắc bài học Luyện tập về dấu gạch ngang!</p><p class="text-lg text-gray-700 mt-3">Hãy luôn ghi nhớ và sử dụng đúng dấu gạch ngang khi viết văn để câu văn mạch lạc, chuẩn ngữ pháp nhé!</p></div>'
        );
    } else {
        alert("Chúc mừng em đã hoàn thành bài học Luyện tập về dấu gạch ngang!");
    }
};
