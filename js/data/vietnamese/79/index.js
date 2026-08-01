export const lesson79 = {
    "topic": "Tiếng Việt 5",
    "week": "12",
    "period": "79",
    "title": "LTVC: DẤU GẠCH NGANG",
    "desc": "Bài học giúp học sinh nắm vững các công dụng của dấu gạch ngang, đặc biệt là chức năng đánh dấu bộ phận chú thích, giải thích trong câu và thực hành đặt câu chính xác.",
    "subject": "LTVC",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-emerald-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-emerald-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-emerald-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-emerald-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Biết cách nhận diện và nêu được các công dụng của dấu gạch ngang trong văn bản.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Phân biệt được vị trí và công dụng của dấu gạch ngang đặt ở giữa câu (để chú thích, giải thích), ở đầu dòng (để liệt kê), ở giữa hai từ (để nối liên danh).
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Thực hành viết được các câu văn giới thiệu danh nhân có sử dụng dấu gạch ngang chú thích đúng ngữ pháp.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Đố vui dấu câu</h3>
        </div>
        <div class="bg-amber-50 bg-opacity-40 p-4 rounded-xl text-lg font-bold text-amber-600">
            💬 "Tôi là dấu câu thường đứng giữa dòng để làm cầu nối cho hai tên riêng, hoặc đứng đầu dòng để giới thiệu các ý liệt kê, đôi khi tôi còn ôm lấy bộ phận giải thích ở giữa câu. Tôi là ai?"
        </div>
        
        <div class="space-y-4 max-w-xl mx-auto">
            <div class="grid grid-cols-2 gap-3">
                <label class="flex items-center gap-2 font-bold cursor-pointer text-base p-3 bg-gray-50 rounded-xl border border-gray-100 select-none">
                    <input type="radio" name="kd-opt-sign" value="ngoacdon" class="w-5 h-5 text-emerald-800">
                    <span>Dấu ngoặc đơn</span>
                </label>
                <label class="flex items-center gap-2 font-bold cursor-pointer text-base p-3 bg-gray-50 rounded-xl border border-gray-100 select-none">
                    <input type="radio" name="kd-opt-sign" value="gachngang" class="w-5 h-5 text-emerald-800">
                    <span>Dấu gạch ngang</span>
                </label>
                <label class="flex items-center gap-2 font-bold cursor-pointer text-base p-3 bg-gray-50 rounded-xl border border-gray-100 select-none">
                    <input type="radio" name="kd-opt-sign" value="phay" class="w-5 h-5 text-emerald-800">
                    <span>Dấu phẩy</span>
                </label>
                <label class="flex items-center gap-2 font-bold cursor-pointer text-base p-3 bg-gray-50 rounded-xl border border-gray-100 select-none">
                    <input type="radio" name="kd-opt-sign" value="haicham" class="w-5 h-5 text-emerald-800">
                    <span>Dấu hai chấm</span>
                </label>
            </div>
            <div class="flex justify-center">
                <button onclick="kiemTraKhoiDong79()" class="px-8 py-3 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-base shadow-md active:scale-95">GỬI SUY NGHĨ ✓</button>
            </div>
            <div id="fb-vn79-kd" class="hidden p-4 rounded-xl text-sm font-bold text-center mt-2"></div>
        </div>
    </div>

    <!-- 📋 BÀI TẬP 1: NHẬN DIỆN CÔNG DỤNG TRANG 179 -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-6 relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <div class="flex items-start gap-3 border-b border-emerald-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">1</span>
                <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                    Dấu gạch ngang trong các câu dưới đây được dùng để làm gì?
                </h3>
            </div>

            <!-- Ngữ liệu câu 1 và 2 -->
            <div class="space-y-4 max-w-4xl mx-auto font-sans text-xl leading-relaxed text-gray-800 font-bold bg-amber-50 bg-opacity-35 p-6 rounded-3xl border border-amber-100">
                <p>• "Ngày Sách và Văn hóa đọc Việt Nam <span class="text-emerald-900 font-black">– sự kiện văn hóa quan trọng đối với người yêu thích sách –</span> được tổ chức vào ngày 21 tháng 4 hằng năm."</p>
                <p class="mt-4">• "Ha-ri Pót-tơ <span class="text-emerald-900 font-black">– bộ truyện của nhà văn Giô-an Rô-linh –</span> có sức hấp dẫn kì lạ với nhiều trẻ em trên thế giới."</p>
            </div>

            <!-- Trắc nghiệm chọn công dụng -->
            <div class="max-w-4xl mx-auto space-y-3">
                <p class="font-bold text-gray-800 text-lg">👉 Hãy chọn đúng công dụng của các dấu gạch ngang in đậm trên:</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label class="flex items-center gap-3 p-3 bg-gray-50 hover:bg-emerald-50/20 rounded-2xl border border-gray-100 cursor-pointer transition-all">
                        <input type="radio" name="q1-opt-sign" value="loinoi" class="w-5 h-5 text-emerald-800">
                        <span class="text-base font-bold text-gray-800">A. Đánh dấu lời nói trực tiếp của nhân vật.</span>
                    </label>
                    <label class="flex items-center gap-3 p-3 bg-gray-50 hover:bg-emerald-50/20 rounded-2xl border border-gray-100 cursor-pointer transition-all">
                        <input type="radio" name="q1-opt-sign" value="lietke" class="w-5 h-5 text-emerald-800">
                        <span class="text-base font-bold text-gray-800">B. Đánh dấu các ý liệt kê.</span>
                    </label>
                    <label class="flex items-center gap-3 p-3 bg-gray-50 hover:bg-emerald-50/20 rounded-2xl border border-gray-100 cursor-pointer transition-all">
                        <input type="radio" name="q1-opt-sign" value="liendanh" class="w-5 h-5 text-emerald-800">
                        <span class="text-base font-bold text-gray-800">C. Nối các từ ngữ trong một liên danh.</span>
                    </label>
                    <label class="flex items-center gap-3 p-3 bg-gray-50 hover:bg-emerald-50/20 rounded-2xl border border-gray-100 cursor-pointer transition-all">
                        <input type="radio" name="q1-opt-sign" value="chuthich" class="w-5 h-5 text-emerald-800">
                        <span class="text-base font-bold text-gray-800">D. Đánh dấu bộ phận chú thích, giải thích.</span>
                    </label>
                </div>
            </div>

            <div class="flex justify-center">
                <button onclick="kiemTraCauHoi1_79()" class="px-8 py-3 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-base shadow-md active:scale-95">XÁC NHẬN CHỌN ✓</button>
            </div>
            <div id="fb-vn79-bt1" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 BÀI TẬP 2: PHÂN LOẠI VỊ TRÍ VÀ CÔNG DỤNG -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-start gap-3 border-b border-emerald-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">2</span>
            <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                Nêu đặc điểm về vị trí và công dụng của dấu gạch ngang trong mỗi trường hợp dưới đây:
            </h3>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Đoạn a -->
            <div class="bg-amber-50/25 p-5 rounded-3xl border border-amber-100 space-y-3 flex flex-col justify-between">
                <div class="space-y-2">
                    <span class="text-xs font-black text-amber-600 bg-amber-500 px-2 py-0.5 rounded-md">Trường hợp a</span>
                    <p class="text-lg font-bold text-gray-800 leading-relaxed italic">"Lê Quý Đôn – tên lúc nhỏ là Lê Danh Phương – nổi tiếng ham học, thông minh, có trí nhớ tốt."</p>
                </div>
                <div class="space-y-2 pt-2 border-t border-amber-100">
                    <label class="text-sm font-bold text-gray-800 block">Chọn vị trí & công dụng:</label>
                    <select id="case-a-select" class="w-full p-2 border border-amber-100 rounded-xl font-bold bg-white text-base">
                        <option value="">-- Chọn đáp án --</option>
                        <option value="chuthich">Giữa câu -> Đánh dấu bộ phận chú thích, giải thích</option>
                        <option value="lietke">Đầu dòng -> Đánh dấu các ý liệt kê</option>
                        <option value="liendanh">Giữa 2 tên riêng -> Nối các từ trong liên danh</option>
                    </select>
                </div>
            </div>

            <!-- Đoạn b -->
            <div class="bg-sky-50/25 p-5 rounded-3xl border border-sky-100 space-y-3 flex flex-col justify-between">
                <div class="space-y-2">
                    <span class="text-xs font-black text-sky-800 bg-sky-600 px-2 py-0.5 rounded-md">Trường hợp b</span>
                    <p class="text-lg font-bold text-gray-800 leading-relaxed italic">
                        "Thế giới biết ơn những nhà phát minh...:<br>
                        – Lát-xlô Bi-rô...<br>
                        – Lu-i Brai...<br>
                        – Giôn Đun-lốp..."
                    </p>
                </div>
                <div class="space-y-2 pt-2 border-t border-sky-100">
                    <label class="text-sm font-bold text-gray-800 block">Chọn vị trí & công dụng:</label>
                    <select id="case-b-select" class="w-full p-2 border border-sky-100 rounded-xl font-bold bg-white text-base">
                        <option value="">-- Chọn đáp án --</option>
                        <option value="chuthich">Giữa câu -> Đánh dấu bộ phận chú thích, giải thích</option>
                        <option value="lietke">Đầu dòng -> Đánh dấu các ý liệt kê</option>
                        <option value="liendanh">Giữa 2 tên riêng -> Nối các từ trong liên danh</option>
                    </select>
                </div>
            </div>

            <!-- Đoạn c -->
            <div class="bg-emerald-50/25 p-5 rounded-3xl border border-emerald-100 space-y-3 flex flex-col justify-between">
                <div class="space-y-2">
                    <span class="text-xs font-black text-emerald-800 bg-emerald-600 px-2 py-0.5 rounded-md">Trường hợp c</span>
                    <p class="text-lg font-bold text-gray-800 leading-relaxed italic">"Đến Phong Nha – Kẻ Bàng, chúng tôi thích thú ngắm nhìn động Thiên Đường kì vĩ..."</p>
                </div>
                <div class="space-y-2 pt-2 border-t border-emerald-100">
                    <label class="text-sm font-bold text-gray-800 block">Chọn vị trí & công dụng:</label>
                    <select id="case-c-select" class="w-full p-2 border border-emerald-100 rounded-xl font-bold bg-white text-base">
                        <option value="">-- Chọn đáp án --</option>
                        <option value="chuthich">Giữa câu -> Đánh dấu bộ phận chú thích, giải thích</option>
                        <option value="lietke">Đầu dòng -> Đánh dấu các ý liệt kê</option>
                        <option value="liendanh">Giữa 2 tên riêng -> Nối các từ trong liên danh</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="flex justify-center">
            <button onclick="kiemTraCauHoi2_79()" class="px-8 py-3 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-base shadow-md active:scale-95">KIỂM TRA ĐÁP ÁN ✓</button>
        </div>
        <div id="fb-vn79-bt2" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
    </section>

    <!-- 📋 BÀI TẬP 3: CLICK CHỌN CÂU CHÚ THÍCH TRONG ĐOẠN VĂN GIUYN VÉC-NƠ -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-start gap-3 border-b border-emerald-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">3</span>
            <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                Dấu gạch ngang trong câu nào dưới đây dùng để đánh dấu bộ phận chú thích, giải thích?
            </h3>
        </div>

        <p class="text-lg md:text-xl text-gray-800 font-bold">👉 Hướng dẫn: Nhấp chuột trực tiếp lên các câu văn dưới đây để lựa chọn những câu có dấu gạch ngang đóng vai trò chú thích, giải thích (câu được chọn sẽ đổi sang màu vàng nhạt):</p>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2 max-w-5xl mx-auto">
            <!-- Đoạn văn tương tác click -->
            <div class="lg:col-span-8 space-y-3 font-sans text-lg md:text-xl text-gray-800 leading-relaxed font-bold">
                <!-- Câu 1 -->
                <button id="s-btn-1" onclick="chonCauGiuynVecno79(1)" class="w-full text-left p-3 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-emerald-50/30 transition-all">
                    <sup>(1)</sup> Giuyn Véc-nơ – một trong những người được gọi as "cha đẻ của khoa học viễn tưởng" – rất thích du lịch tới các miền xa xôi.
                </button>

                <!-- Câu 2 -->
                <button id="s-btn-2" onclick="chonCauGiuynVecno79(2)" class="w-full text-left p-3 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-emerald-50/30 transition-all">
                    <sup>(2)</sup> Năm mười một tuổi, cậu định đi theo một chiếc thuyền Ấn Độ – chiếc thuyền mà cậu hi vọng sẽ căng buồm đi khắp đó đây.
                </button>

                <!-- Câu 3 -->
                <button id="s-btn-3" onclick="chonCauGiuynVecno79(3)" class="w-full text-left p-3 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-emerald-50/30 transition-all">
                    <sup>(3)</sup> Khi cha phản đối, cậu đã hứa:<br>
                    – Từ nay, con chỉ du lịch trong tưởng tượng thôi.
                </button>

                <!-- Câu 4 -->
                <button id="s-btn-4" onclick="chonCauGiuynVecno79(4)" class="w-full text-left p-3 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-emerald-50/30 transition-all">
                    <sup>(4)</sup> Nhờ những chuyến "du lịch" đó, Giuyn Véc-nơ đã viết nên nhiều truyện khoa học viễn tưởng:<br>
                    – Hai vạn dặm dưới biển,<br>
                    – Vòng quanh thế giới trong 80 ngày,...
                </button>
            </div>

            <!-- Avatar phụ và chú thích -->
            <div class="lg:col-span-4 text-center space-y-2 bg-emerald-50 bg-opacity-40 p-5 rounded-3xl border border-emerald-100">
                <div class="w-28 h-36 bg-gray-800 rounded-xl mx-auto overflow-hidden shadow flex items-center justify-center font-black text-6xl border-4 border-white">
                    👴
                </div>
                <div>
                    <h5 class="font-black text-emerald-800 text-base">Giuyn Véc-nơ</h5>
                    <p class="text-xs font-bold text-gray-800">(1879 – 1979)</p>
                </div>
            </div>
        </div>

        <div class="flex justify-center gap-4 mt-4">
            <button onclick="kiemTraCauHoi3_79()" class="px-8 py-3 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-base shadow-md active:scale-95">XÁC NHẬN LỰA CHỌN ✓</button>
            <button onclick="lamLaiCauHoi3_79()" class="px-8 py-3 bg-amber-500 text-white font-black rounded-xl hover:bg-amber-500 transition-all text-base shadow-md active:scale-95">MẶC ĐỊNH LẠI ↺</button>
        </div>
        <div id="fb-vn79-bt3" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2 max-w-4xl mx-auto"></div>
    </section>

    <!-- 📋 BÀI TẬP 4: VIẾT CÂU VỀ DANH NHÂN CÓ CHỨA DẤU GẠCH NGANG CHÚ THÍCH -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-start gap-3 border-b border-emerald-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">4</span>
            <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                Viết 2 – 3 câu về một danh nhân, trong đó có dùng dấu gạch ngang để đánh dấu bộ phận chú thích, giải thích.
            </h3>
        </div>

        <div class="space-y-4 max-w-4xl mx-auto">
            <p class="font-bold text-gray-800 text-lg md:text-xl">👉 Hướng dẫn: Em có thể viết câu về một danh nhân mà em biết (Ví dụ: Bác Hồ, Lê Quý Đôn, Cao Bá Quát, Trần Hưng Đạo, Giuyn Véc-nơ,...). Hãy nhớ đặt dấu gạch ngang bao quanh phần chú thích nhé.</p>
            
            <textarea id="ans-vn79-vietvan" rows="4" placeholder="Ví dụ: Lê Quý Đôn – nhà bác học vĩ đại thời phong kiến nước ta – nổi tiếng là người ham học, thông minh từ nhỏ..." class="w-full p-4 text-lg rounded-2xl border-2 border-emerald-100 outline-none focus:border-emerald-500 font-bold bg-white text-gray-800"></textarea>
            
            <div class="flex justify-center gap-3">
                <button onclick="kiemTraCauHoi4_79()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                    <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                    <span>CHẤM BÀI ĐẶT CÂU</span>
                </button>
            </div>
            <div id="fb-vn79-writing" class="hidden p-5 rounded-2xl font-bold text-base"></div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBai79Global()" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-emerald-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Công dụng chính được bài học này tập trung giới thiệu về dấu gạch ngang là gì?",
            "options": [
                "Đánh dấu bộ phận chú thích, giải thích trong câu (thường đặt ở giữa câu)",
                "Đánh dấu các lời nói gián tiếp của tác giả",
                "Đánh dấu kết thúc một đoạn văn tự sự tả phong cảnh",
                "Nối các âm tiết trong từ mượn tiếng nước ngoài"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Dấu gạch ngang trong câu: 'Lê Quý Đôn – tên lúc nhỏ là Lê Danh Phương – nổi tiếng ham học...' dùng để làm gì?",
            "options": [
                "Nối hai địa danh liên danh với nhau",
                "Đánh dấu các ý liệt kê danh sách nhà khoa học",
                "Đánh dấu bộ phận chú thích, giải thích tên lúc nhỏ của Lê Quý Đôn",
                "Đánh dấu lời nói trực tiếp của nhân vật Lê Quý Đôn"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Dấu gạch ngang đứng ở đầu dòng trong các trường hợp liệt kê danh sách có công dụng gì?",
            "options": [
                "Đánh dấu các ý liệt kê",
                "Nối các từ ngữ trong một liên danh",
                "Đánh dấu lời nói đối thoại trực tiếp",
                "Đánh dấu chú thích bổ sung ở cuối câu"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Dấu gạch ngang trong từ 'Phong Nha – Kẻ Bàng' có công dụng gì?",
            "options": [
                "Nối các từ ngữ trong một liên danh",
                "Đánh dấu các ý liệt kê danh sách di sản",
                "Đánh dấu bộ phận chú thích cho động Thiên Đường",
                "Đánh dấu lời nói trực tiếp của hướng dẫn viên"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Vị trí của dấu gạch ngang khi thực hiện chức năng chú thích, giải thích thường nằm ở đâu trong câu?",
            "options": [
                "Đặt ở giữa câu (ở trước và sau bộ phận chú thích)",
                "Đặt ở đầu dòng trước mỗi câu văn dài",
                "Đặt ở cuối câu thay thế hoàn toàn cho dấu chấm hỏi",
                "Đặt ở ngay sau từ loại của mục từ tra cứu"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong câu: 'Khi cha phản đối, cậu hứa: – Từ nay, con chỉ du lịch trong tưởng tượng thôi.', dấu gạch ngang dùng để làm gì?",
            "options": [
                "Đánh dấu lời nói trực tiếp của nhân vật",
                "Đánh dấu các ý liệt kê những nơi cậu du lịch",
                "Nối các từ ngữ trong một liên danh tưởng tượng",
                "Đánh dấu bộ phận chú thích cho từ 'hứa'"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Điểm khác biệt về hình thức giữa dấu gạch ngang chú thích (đặt ở giữa câu) và dấu gạch ngang liệt kê (đặt đầu dòng) là gì?",
            "options": [
                "Dấu gạch ngang chú thích đứng ở giữa câu, còn dấu gạch ngang liệt kê đứng ở đầu dòng",
                "Dấu gạch ngang chú thích ngắn hơn dấu gạch ngang liệt kê",
                "Dấu gạch ngang liệt kê luôn phải đi kèm dấu ngoặc đơn",
                "Không có bất kỳ sự khác biệt nào về vị trí xuất hiện"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Bộ phận nào trong câu sau đây được chú thích bởi dấu gạch ngang: 'Giuyn Véc-nơ – cha đẻ của khoa học viễn tưởng – sinh năm 1879.'?",
            "options": [
                "cha đẻ của khoa học viễn tưởng",
                "sinh năm 1879",
                "Giuyn Véc-nơ",
                "khoa học viễn tưởng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nhận định nào sau đây là ĐÚNG về dấu gạch ngang?",
            "options": [
                "Dấu gạch ngang có nhiều công dụng: đánh dấu lời nói trực tiếp, liệt kê, liên danh, chú thích",
                "Dấu gạch ngang chỉ có duy nhất một công dụng nối liên danh các địa danh",
                "Dấu gạch ngang luôn luôn phải đặt ở đầu dòng của văn bản đọc",
                "Dấu gạch ngang có công dụng hoàn toàn giống với dấu gạch nối"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Câu nào dưới đây sử dụng đúng dấu gạch ngang để đánh dấu bộ phận chú thích?",
            "options": [
                "Cao Bá Quát – nhà thơ nổi tiếng viết chữ đẹp – sinh ra ở Hà Nội.",
                "– Cao Bá Quát là một nhà thơ rất nổi tiếng viết chữ đẹp.",
                "Cao Bá Quát viết chữ rất đẹp – và nổi tiếng văn hay chữ tốt.",
                "Cao Bá Quát – Hà Nội là quê hương của nhà thơ viết chữ đẹp."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'liên danh' trong công dụng của dấu gạch ngang chỉ điều gì?",
            "options": [
                "Sự liên kết giữa hai tên riêng, địa danh tạo thành một tổ hợp",
                "Việc kể ra danh sách nhiều cuốn từ điển khác nhau",
                "Tên gọi của bộ phận chú thích đứng ở cuối dòng",
                "Lời đối thoại đối đáp qua lại giữa các nhân vật"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi viết câu chứa dấu gạch ngang để chú thích, chúng ta thường dùng bao nhiêu dấu gạch ngang để ôm lấy bộ phận chú thích ở giữa câu?",
            "options": [
                "Hai dấu gạch ngang (một dấu mở đầu bộ phận và một dấu kết thúc bộ phận)",
                "Chỉ cần duy nhất một dấu gạch ngang đặt ở đầu câu văn",
                "Ba dấu gạch ngang đặt xen kẽ giữa các từ ngữ",
                "Không cần dùng dấu nào vì đã có dấu ngoặc đơn thay thế"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Dấu gạch ngang trong tên tuyến đường 'Hà Nội – Hải Phòng' có công dụng gì?",
            "options": [
                "Nối các từ ngữ trong một liên danh (tuyến đường liên kết)",
                "Đánh dấu bộ phận giải thích Hà Nội ở đâu",
                "Đánh dấu lời nói trực tiếp của bác lái tàu",
                "Liệt kê danh sách các phương tiện giao thông chạy trên tuyến"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Lỗi nào thường gặp khi học sinh sử dụng dấu gạch ngang để chú thích?",
            "options": [
                "Thiếu dấu gạch ngang thứ hai để đóng bộ phận chú thích ở giữa câu",
                "Đặt dấu gạch ngang ở giữa chủ ngữ và vị ngữ của câu đơn giản",
                "Dùng dấu gạch ngang để kết thúc câu thay cho dấu chấm hỏi",
                "Tất cả các lỗi trên đều là lỗi thường gặp"
            ],
            "answer": 3,
            "level": 2
        },
        {
            "question": "Dấu gạch ngang khác dấu gạch nối ở điểm nào?",
            "options": [
                "Dấu gạch ngang dài hơn và có chức năng ngữ pháp rõ rệt; dấu gạch nối ngắn hơn, dùng để nối các tiếng trong từ phiên âm",
                "Dấu gạch ngang dùng cho từ tiếng Anh, dấu gạch nối dùng cho tiếng Việt",
                "Dấu gạch ngang chỉ đứng ở đầu dòng, dấu gạch nối chỉ đứng cuối dòng",
                "Hai dấu này hoàn toàn giống nhau về cả hình thức lẫn cách sử dụng"
            ],
            "answer": 0,
            "level": 2
        }
    ]
};

// --- KHỞI ĐỘNG ---
window.kiemTraKhoiDong79 = function() {
    const fb = document.getElementById('fb-vn79-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    const sign = document.querySelector('input[name="kd-opt-sign"]:checked')?.value;

    if (!sign) {
        fb.innerHTML = "⚠️ Em hãy chọn một đáp án cho câu đố vui trước nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow-sm animate-bounce";
        return;
    }

    if (sign === 'gachngang') {
        fb.innerHTML = "🎉 Câu trả lời hoàn toàn chính xác! Đó chính là tôi – dấu gạch ngang đa tài với nhiều công dụng hữu ích.";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "❌ Câu trả lời chưa chính xác rồi. Hãy đọc kỹ lại các đặc điểm gợi ý của câu đố và chọn lại nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- BÀI TẬP 1: NHẬN DIỆN CÔNG DỤNG ---
window.kiemTraCauHoi1_79 = function() {
    const fb = document.getElementById('fb-vn79-bt1');
    if (!fb) return;
    fb.classList.remove('hidden');

    const opt = document.querySelector('input[name="q1-opt-sign"]:checked')?.value;

    if (!opt) {
        fb.innerHTML = "⚠️ Em hãy chọn đáp án cho công dụng của dấu gạch ngang ở 2 câu trên nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    if (opt === 'chuthich') {
        fb.innerHTML = "🎉 Chính xác hoàn toàn! Cả hai dấu gạch ngang trong 2 ví dụ trên đều đặt ở giữa câu và dùng để đánh dấu bộ phận chú thích, giải thích trong câu.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "❌ Đáp án chưa chính xác. Hãy đọc kỹ lại gợi ý và chọn lại đáp án nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- BÀI TẬP 2: PHÂN LOẠI CÔNG DỤNG a, b, c ---
window.kiemTraCauHoi2_79 = function() {
    const fb = document.getElementById('fb-vn79-bt2');
    if (!fb) return;
    fb.classList.remove('hidden');

    const a = document.getElementById('case-a-select')?.value;
    const b = document.getElementById('case-b-select')?.value;
    const c = document.getElementById('case-c-select')?.value;

    if (!a || !b || !c) {
        fb.innerHTML = "⚠️ Em hãy chọn đầy đủ đáp án phân loại cho cả 3 trường hợp a, b, c nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    const aDung = a === 'chuthich';
    const bDung = b === 'lietke';
    const cDung = c === 'liendanh';

    if (aDung && bDung && cDung) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã phân loại hoàn toàn chính xác vị trí và công dụng của dấu gạch ngang trong cả 3 trường hợp: a. Chú thích (giữa câu) -> b. Liệt kê (đầu dòng) -> c. Liên danh (giữa 2 từ).";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "❌ Có trường hợp phân loại chưa chính xác. Em hãy quan sát kỹ lại vị trí đặt dấu và chọn lại nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- BÀI TẬP 3: CLICK CHỌN CÂU CHÚ THÍCH CỦA GIUYN VÉC-NƠ ---
let cauDaChon79 = [];
window.chonCauGiuynVecno79 = function(so) {
    const btn = document.getElementById(`s-btn-${so}`);
    if (!btn) return;

    const idx = cauDaChon79.indexOf(so);
    if (idx > -1) {
        // Hủy chọn
        cauDaChon79.splice(idx, 1);
        btn.className = "w-full text-left p-3 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-emerald-50/30 transition-all";
    } else {
        // Chọn
        cauDaChon79.push(so);
        btn.className = "w-full text-left p-3 rounded-2xl border-2 border-emerald-100 bg-emerald-100/10 font-bold transition-all shadow-sm text-emerald-800";
    }
};

window.kiemTraCauHoi3_79 = function() {
    const fb = document.getElementById('fb-vn79-bt3');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (cauDaChon79.length === 0) {
        fb.innerHTML = "⚠️ Em hãy nhấp chọn các câu văn có dấu gạch ngang dùng làm bộ phận chú thích trước nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    // Câu đúng: câu 1 và câu 2
    const coCauSai = cauDaChon79.some(so => so === 3 || so === 4);
    const thieuCauDung = !cauDaChon79.includes(1) || !cauDaChon79.includes(2);

    if (!coCauSai && !thieuCauDung) {
        fb.innerHTML = "🎉 Hoàn toàn chính xác! Chỉ có câu (1) và câu (2) có dấu gạch ngang dùng để chú thích, giải thích. (Câu 3 dùng làm lời đối thoại, Câu 4 dùng làm các ý liệt kê).";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else if (coCauSai) {
        fb.innerHTML = "❌ Lựa chọn chưa chính xác rồi. Câu (3) dùng cho lời nói đối thoại nhân vật và Câu (4) dùng cho danh sách liệt kê. Hãy bỏ chọn 2 câu này nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "⚠️ Em chọn đúng hướng rồi nhưng vẫn còn thiếu một câu dùng để chú thích khác. Hãy xem lại kỹ nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
    }
};

window.lamLaiCauHoi3_79 = function() {
    cauDaChon79 = [];
    [1, 2, 3, 4].forEach(so => {
        const btn = document.getElementById(`s-btn-${so}`);
        if (btn) {
            btn.className = "w-full text-left p-3 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-emerald-50/30 transition-all";
        }
    });
    const fb = document.getElementById('fb-vn79-bt3');
    if (fb) fb.classList.add('hidden');
};

// --- BÀI TẬP 4: VIẾT CÂU VỀ DANH NHÂN ---
window.kiemTraCauHoi4_79 = function() {
    const text = document.getElementById('ans-vn79-vietvan')?.value.trim();
    const fb = document.getElementById('fb-vn79-writing');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy viết 2-3 câu về một danh nhân vào ô văn bản trên trước khi nộp bài nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    if (text.length < 15) {
        fb.innerHTML = "⚠️ Câu văn của em cần viết hoàn chỉnh và chi tiết hơn (tối thiểu 15 ký tự).";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    // Kiểm tra sự xuất hiện của dấu gạch ngang "–" hoặc "-"
    const coGachNgang = text.includes('–') || text.includes('-');

    if (!coGachNgang) {
        fb.innerHTML = "⚠️ Câu văn của em chưa sử dụng dấu gạch ngang để đánh dấu bộ phận chú thích, giải thích. Em hãy chỉnh sửa lại câu văn nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-rose-600 text-white shadow-md";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ THẦY E:</span>
            <p class="text-lg font-bold">"Rất tuyệt vời! Em đã viết đúng yêu cầu viết câu giới thiệu về danh nhân, có sử dụng chính xác dấu gạch ngang đặt ở giữa câu để bổ sung chú thích thông tin rất rõ ràng."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold text-xs rounded-full shadow-sm mt-2">Chấm điểm: 10/10 (Đã đạt yêu cầu)</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-379";
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.nopBai79Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 80',
            '🔍',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🔍</span><p class="text-2xl md:text-3xl font-bold text-emerald-800">Chúc mừng em đã hoàn thành bài học hôm nay!</p><p class="text-lg text-gray-800 mt-3">Sử dụng thành thạo các dấu câu, đặc biệt là dấu gạch ngang chú thích sẽ giúp các câu văn của em rõ ràng và giàu ý nghĩa hơn đấy.</p></div>'
        );
    }
};
