export const lesson14 = {
    "topic": "Tiếng Việt 5",
    "week": "2",
    "period": "14",
    "title": "NÓI VÀ NGHE: NHỮNG CÂU CHUYỆN THÚ VỊ",
    "desc": "Bài học hướng dẫn học sinh thảo luận về những chi tiết thú vị trong câu chuyện mình yêu thích. Rèn luyện kỹ năng phát biểu tự tin, lắng nghe tích cực và nhận xét khách quan.",
    "subject": "Nói và nghe",
    "theme": "Thế giới tuổi thơ",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-sky-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-800 font-bold text-2xl md:text-3xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Biết cách chuẩn bị nội dung và tự tin chia sẻ về những chi tiết thú vị trong một câu chuyện yêu thích.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Rèn luyện kỹ năng nói mạch lạc, diễn cảm và kỹ năng nghe chủ động, ghi chép nhanh các ý kiến khi thảo luận nhóm.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Biết đánh giá, bình chọn ý kiến thuyết trình dựa trên các tiêu chí chuẩn mực.
            </li>
        </ul>
    </div>

    <!-- 1️⃣ BƯỚC 1: CHUẨN BỊ PHÁT BIỂU -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">1</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Chuẩn bị nội dung</h3>
        </div>

        <!-- Chọn chuyện mẫu hoặc tự nhập -->
        <div class="space-y-4">
            <p class="text-2xl md:text-3xl text-gray-800 font-bold">👉 Chọn một câu chuyện em yêu thích để làm ngữ liệu chuẩn bị:</p>
            <div class="flex flex-wrap gap-3">
                <button onclick="chonTruyenMauVn14('Thằn lằn xanh và tắc kè', 'Nguyễn Thị Kim Hòa', 'Tình bạn độc đáo giữa Thằn lằn xanh và Tắc kè khi trao đổi môi trường sống.')" class="px-5 py-3 bg-sky-50 border-2 border-sky-100 text-sky-800 font-bold rounded-xl text-xl md:text-2xl hover:border-sky-100 transition-all">🦎 Thằn lằn xanh và tắc kè</button>
                <button onclick="chonTruyenMauVn14('Sự tích ông Đùng, bà Đùng', 'Dân gian', 'Hành trình khai phá đất đai, xây dựng núi đồi vĩ đại của hai người khổng lồ tốt bụng.')" class="px-5 py-3 bg-emerald-50 border-2 border-emerald-100 text-emerald-800 font-bold rounded-xl text-xl md:text-2xl hover:border-emerald-100 transition-all">⛰️ Sự tích ông Đùng, bà Đùng</button>
                <button onclick="chonTruyenMauVn14('Ở Vương quốc Tương Lai', 'Mác-téc-lích', 'Cuộc phiêu lưu của Tin-tin và Mi-tin đến vương quốc tương lai, gặp gỡ những em bé sáng chế đồ vật mang lại hạnh phúc.')" class="px-5 py-3 bg-amber-50 border-2 border-amber-100 text-amber-600 font-bold rounded-xl text-xl md:text-2xl hover:border-amber-100 transition-all">🚀 Ở Vương quốc Tương Lai</button>
            </div>

            <!-- Form chuẩn bị -->
            <div class="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-1">
                        <label class="text-2xl md:text-3xl font-black text-gray-800">📖 Tên câu chuyện:</label>
                        <input type="text" id="vn14-ten-truyen" class="w-full p-3 text-2xl md:text-3xl border-2 border-gray-100 rounded-xl focus:border-sky-500 outline-none transition-all font-medium" placeholder="Ví dụ: Cánh đồng hoa">
                    </div>
                    <div class="space-y-1">
                        <label class="text-2xl md:text-3xl font-black text-gray-800">👤 Tác giả (nếu có):</label>
                        <input type="text" id="vn14-tac-gia" class="w-full p-3 text-2xl md:text-3xl border-2 border-gray-100 rounded-xl focus:border-sky-500 outline-none transition-all font-medium" placeholder="Ví dụ: Lê Văn Trường">
                    </div>
                </div>
                <div class="space-y-1">
                    <label class="text-2xl md:text-3xl font-black text-gray-800">📜 Nội dung chính:</label>
                    <textarea id="vn14-noi-dung-chinh" rows="3" class="w-full p-3 text-2xl md:text-3xl border-2 border-gray-100 rounded-xl focus:border-sky-500 outline-none transition-all font-medium resize-none" placeholder="Tóm tắt ngắn gọn nội dung chính câu chuyện..."></textarea>
                </div>
            </div>

            <!-- Gợi ý liệt kê chi tiết thú vị -->
            <div class="bg-sky-50/40 p-5 rounded-2xl border border-sky-100 space-y-3">
                <p class="font-black text-sky-900 text-2xl md:text-3xl flex items-center gap-2">
                    💡 Phân loại chi tiết thú vị (Lựa chọn và ghi chép):
                </p>
                <div class="grid grid-cols-1 gap-4">
                    <div class="bg-white p-4 rounded-xl border border-sky-100">
                        <p class="font-bold text-sky-900 text-2xl md:text-3xl mb-2">🌄 Bối cảnh độc đáo</p>
                        <textarea id="vn14-chi-tiet-boi-canh" rows="3" class="w-full p-3 text-2xl md:text-3xl border-2 border-gray-100 rounded-lg focus:border-sky-500 outline-none transition-all font-medium resize-none" placeholder="Tình huống độc đáo, không gian thơ mộng..."></textarea>
                    </div>
                    <div class="bg-white p-4 rounded-xl border border-sky-100">
                        <p class="font-bold text-emerald-900 text-2xl md:text-3xl mb-2">👤 Nhân vật đặc biệt</p>
                        <textarea id="vn14-chi-tiet-nhan-vat" rows="3" class="w-full p-3 text-2xl md:text-3xl border-2 border-gray-100 rounded-lg focus:border-sky-500 outline-none transition-all font-medium resize-none" placeholder="Ngoại hình khác thường, tài năng đặc biệt..."></textarea>
                    </div>
                    <div class="bg-white p-4 rounded-xl border border-sky-100">
                        <p class="font-bold text-amber-900 text-2xl md:text-3xl mb-2">📜 Sự việc bất ngờ</p>
                        <textarea id="vn14-chi-tiet-su-viec" rows="3" class="w-full p-3 text-2xl md:text-3xl border-2 border-gray-100 rounded-lg focus:border-sky-500 outline-none transition-all font-medium resize-none" placeholder="Sự việc kì lạ, cuốn hút, hài hước..."></textarea>
                    </div>
                </div>
            </div>
            
            <div class="flex justify-end gap-3">
                <button onclick="xoaFormChuanBiVn14()" class="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-all text-xl md:text-2xl">XOÁ DỮ LIỆU</button>
                <button onclick="luuFormChuanBiVn14()" class="px-8 py-3 bg-sky-600 text-white font-black rounded-xl hover:bg-sky-600 transition-all text-xl md:text-2xl shadow-md">LƯU PHIẾU CHUẨN BỊ ✓</button>
            </div>
            <div id="fb-vn14-chuanbi" class="hidden text-2xl md:text-3xl font-bold px-4 py-2 rounded-xl"></div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 2️⃣ BƯỚC 2: MÔ PHỎNG THẢO LUẬN NHÓM (BONG BÓNG THOẠI) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">2</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Thảo luận nhóm</h3>
            </div>

            <p class="text-2xl md:text-3xl text-gray-800 font-bold italic">👉 Dưới đây là ý kiến thảo luận của các bạn trong nhóm. Em hãy đọc tham khảo và tham gia phát biểu ý kiến của mình nhé!</p>

            <!-- Khung chat thảo luận -->
            <div class="bg-white rounded-[32px] p-6 border border-sky-100 shadow-inner space-y-6 max-h-[514px] overflow-y-auto" id="vn14-chat-box">
                <!-- Tin nhắn Bạn Nam -->
                <div class="flex items-start gap-4 animate-in slide-in-from-left duration-500">
                    <div class="w-12 h-12 rounded-full bg-blue-600 border-2 border-blue-100 flex items-center justify-center font-black text-lg text-blue-600 shrink-0 shadow-sm">👦</div>
                    <div class="bg-blue-50 p-4 rounded-[24px] rounded-tl-none border border-blue-100 max-w-xl space-y-1">
                        <p class="text-xl font-black text-blue-600">Nam</p>
                        <p class="text-2xl md:text-3xl text-gray-800 font-medium">Đọc câu chuyện <em>Thằn lằn xanh và tắc kè</em>, mình thích tình huống gặp mặt rất độc đáo giữa thằn lằn và tắc kè.</p>
                    </div>
                </div>

                <!-- Tin nhắn Bạn Hoa -->
                <div class="flex items-start gap-4 justify-end animate-in slide-in-from-right duration-500">
                    <div class="bg-emerald-50 p-4 rounded-[24px] rounded-tr-none border border-emerald-100 max-w-xl space-y-1 text-right">
                        <p class="text-xl font-black text-emerald-800">Hoa</p>
                        <p class="text-2xl md:text-3xl text-gray-800 font-medium text-left">Nhân vật ông Đùng, bà Đùng trong <em>Sự tích ông Đùng, bà Đùng</em> cao lớn khác thường, đứng cao hơn năm lần đỉnh núi cao nhất.</p>
                    </div>
                    <div class="w-12 h-12 rounded-full bg-emerald-600 border-2 border-emerald-100 flex items-center justify-center font-black text-lg text-emerald-800 shrink-0 shadow-sm">👧</div>
                </div>

                <!-- Tin nhắn Bạn Lan -->
                <div class="flex items-start gap-4 animate-in slide-in-from-left duration-500">
                    <div class="w-12 h-12 rounded-full bg-amber-500 border-2 border-amber-100 flex items-center justify-center font-black text-lg text-amber-600 shrink-0 shadow-sm">👧</div>
                    <div class="bg-amber-50 p-4 rounded-[24px] rounded-tl-none border border-amber-100 max-w-xl space-y-1">
                        <p class="text-xl font-black text-amber-600">Lan</p>
                        <p class="text-2xl md:text-3xl text-gray-800 font-medium">Câu chuyện <em>Ở Vương quốc Tương Lai</em> có chi tiết rất thú vị: Các em bé sáng chế ra vật dụng mang lại hạnh phúc cho con người.</p>
                    </div>
                </div>
                
                <!-- Chỗ để tin nhắn phát biểu của học sinh render vào -->
                <div id="vn14-student-msg-container" class="space-y-4"></div>
            </div>

            <!-- Khung nhập phát biểu của học sinh -->
            <div class="bg-sky-50/50 p-5 rounded-2xl border border-sky-100 space-y-3">
                <label for="vn14-speak-input" class="text-2xl md:text-3xl font-black text-sky-800 flex items-center gap-1">🗣️ Viết ý kiến phát biểu của em về chi tiết thú vị trong truyện:</label>
                <div class="flex gap-2">
                    <textarea id="vn14-speak-input" rows="2" class="flex-1 p-3 text-2xl md:text-3xl border-2 border-sky-100 rounded-xl focus:border-sky-500 outline-none transition-all font-medium resize-none" placeholder="Nhập ý kiến của em... (Ví dụ: Mình thích chi tiết...)"></textarea>
                    <button onclick="guiYKienPhatBieuVn14()" class="px-6 bg-sky-600 hover:bg-sky-600 text-white font-black rounded-xl transition-all shadow-md flex items-center justify-center shrink-0">
                        <span class="text-xl">✈️</span>
                    </button>
                </div>
                <div id="fb-vn14-speak" class="hidden text-2xl md:text-3xl font-bold px-3 py-1.5 rounded-lg"></div>
            </div>
        </div>
    </section>

    <!-- 3️⃣ BƯỚC 3: ĐÁNH GIÁ (TIÊU CHÍ BÌNH CHỌN) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
        <div class="p-6 md:p-8 bg-emerald-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">3</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Đánh giá & Bình chọn</h3>
            </div>

            <p class="text-2xl md:text-3xl text-gray-800 font-semibold italic">👉 Hãy bình chọn cho các bạn có thành tích thảo luận xuất sắc nhất trong nhóm của em:</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                <!-- Tiêu chí 1 -->
                <div class="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm space-y-3 flex flex-col justify-between">
                    <div class="space-y-1">
                        <p class="text-xl md:text-3xl">💡</p>
                        <p class="font-black text-emerald-900 text-2xl md:text-3xl">Người có ý kiến hay</p>
                        <p class="text-xl md:text-2xl text-gray-800 font-medium">Bạn có phát hiện độc đáo, chi tiết phân tích sâu sắc, hấp dẫn.</p>
                    </div>
                    <select id="vn14-vote-y-kien" class="w-full p-2.5 text-xl md:text-2xl border-2 border-emerald-100 rounded-lg outline-none focus:border-emerald-500 font-semibold text-gray-800">
                        <option value="">Chọn một bạn...</option>
                        <option value="Nam">Nam</option>
                        <option value="Hoa">Hoa</option>
                        <option value="Lan">Lan</option>
                        <option value="Em">Chính em</option>
                    </select>
                </div>

                <!-- Tiêu chí 2 -->
                <div class="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm space-y-3 flex flex-col justify-between">
                    <div class="space-y-1">
                        <p class="text-xl md:text-3xl">🗣️</p>
                        <p class="font-black text-emerald-900 text-2xl md:text-3xl">Người trình bày hấp dẫn</p>
                        <p class="text-xl md:text-2xl text-gray-800 font-medium">Bạn phát biểu to, rõ ràng, diễn cảm, cuốn hút người nghe.</p>
                    </div>
                    <select id="vn14-vote-trinh-bay" class="w-full p-2.5 text-xl md:text-2xl border-2 border-emerald-100 rounded-lg outline-none focus:border-emerald-500 font-semibold text-gray-800">
                        <option value="">Chọn một bạn...</option>
                        <option value="Nam">Nam</option>
                        <option value="Hoa">Hoa</option>
                        <option value="Lan">Lan</option>
                        <option value="Em">Chính em</option>
                    </select>
                </div>

                <!-- Tiêu chí 3 -->class="space-y-1">
                        <p class="text-xl md:text-3xl">🗣️</p>
                        <p class="font-black text-emerald-800 text-base">Người trình bày hấp dẫn</p>
                        <p class="text-xs text-gray-800 font-medium">Bạn phát biểu to, rõ ràng, diễn cảm, cuốn hút người nghe.</p>
                    </div>
                    <select id="vn14-vote-trinh-bay" class="w-full p-2.5 text-xl md:text-2xl border-2 border-emerald-100 rounded-lg outline-none focus:border-emerald-500 font-semibold text-gray-800">
                        <option value="">Chọn một bạn...</option>
                        <option value="Nam">Nam</option>
                        <option value="Hoa">Hoa</option>
                        <option value="Lan">Lan</option>
                        <option value="Em">Chính em</option>
                    </select>
                </div>

                <!-- Tiêu chí 3 -->
                <div class="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm space-y-3 flex flex-col justify-between">
                    <div class="space-y-1">
                        <p class="text-xl md:text-3xl">🤝</p>
                        <p class="font-black text-emerald-800 text-base">Người tham gia tích cực</p>
                        <p class="text-xs text-gray-800 font-medium">Bạn chăm chú lắng nghe, ghi chép nhanh và tôn trọng ý kiến bạn khác.</p>
                    </div>
                    <select id="vn14-vote-tich-cuc" class="w-full p-2.5 text-xl md:text-2xl border-2 border-emerald-100 rounded-lg outline-none focus:border-emerald-500 font-semibold text-gray-800">
                        <option value="">Chọn một bạn...</option>
                        <option value="Nam">Nam</option>
                        <option value="Hoa">Hoa</option>
                        <option value="Lan">Lan</option>
                        <option value="Em">Chính em</option>
                    </select>
                </div>
            </div>

            <div class="flex justify-center pt-2">
                <button onclick="nopBinhChonVn14()" class="px-8 py-3.5 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-base shadow-md active:scale-95">NỘP BẢNG ĐÁNH GIÁ ✓</button>
            </div>
            <div id="fb-vn14-evaluation" class="hidden text-base font-bold px-4 py-3 rounded-xl text-center"></div>

            <div class="bg-sky-50/60 p-5 rounded-2xl border border-sky-100 flex items-start gap-3">
                <span class="text-lg md:text-2xl shrink-0">🏠</span>
                <p class="text-2xl md:text-3xl text-sky-800 font-bold">Hãy chia sẻ với người thân trong gia đình về những điều thú vị trong câu chuyện mà em đã đọc, đã nghe ngày hôm nay nhé!</p>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiVn14()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Mục đích chính của bài thảo luận 'Những câu chuyện thú vị' là gì?",
            "options": [
                "Thảo luận về các chi tiết thú vị trong câu chuyện em yêu thích",
                "Học cách viết một câu chuyện cổ tích",
                "Chỉ ra lỗi sai của các tác giả",
                "Học cách vẽ tranh minh họa câu chuyện"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Bước chuẩn bị thảo luận nói & nghe KHÔNG gồm công việc nào dưới đây?",
            "options": [
                "Nhớ lại câu chuyện em yêu thích",
                "Liệt kê các chi tiết thú vị về nhân vật, bối cảnh, sự việc",
                "Ghi chép các ý kiến dự định phát biểu",
                "Học thuộc lòng toàn bộ câu chuyện"
            ],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Những yếu tố nào có thể tạo nên sự thú vị của một chi tiết trong truyện?",
            "options": [
                "Bối cảnh độc đáo, thơ mộng",
                "Nhân vật có ngoại hình khác thường, tài năng đặc biệt hoặc phép biến hoá",
                "Sự việc bất ngờ, kì lạ, cuốn hút hoặc hài hước",
                "Tất cả các yếu tố trên"
            ],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Bạn Nam trong đoạn hội thoại thảo luận mẫu thích chi tiết nào trong chuyện 'Thằn lằn xanh và tắc kè'?",
            "options": [
                "Ngoại hình của tắc kè",
                "Tình huống gặp mặt rất độc đáo giữa thằn lằn và tắc kè",
                "Kết thúc có hậu",
                "Tiếng kêu của tắc kè"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Bạn Hoa thích chi tiết gì trong truyện 'Sự tích ông Đùng, bà Đùng'?",
            "options": [
                "Màu sắc của ngọn núi",
                "Nhân vật cao lớn khác thường, đứng cao hơn năm lần đỉnh núi cao nhất",
                "Tình yêu quê hương của các nhân vật",
                "Các con vật khổng lồ"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Bạn Lan chia sẻ chi tiết thú vị nào trong truyện 'Ở Vương quốc Tương Lai'?",
            "options": [
                "Khung cảnh lung linh của vương quốc",
                "Các em bé sáng chế ra vật dụng mang lại hạnh phúc cho con người",
                "Cuộc trò chuyện giữa hai bạn nhỏ Tin-tin và Mi-tin",
                "Chiếc máy bay khổng lồ"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Khi thảo luận nhóm, vai trò của người điều hành là gì?",
            "options": [
                "Nêu nội dung thảo luận và điều phối lượt phát biểu của các thành viên",
                "Làm bài hộ tất cả các bạn",
                "Chỉ ngồi im lắng nghe",
                "Quyết định đáp án đúng duy nhất"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi trình bày ý kiến trước nhóm hoặc lớp, học sinh cần lưu ý điều gì về giọng nói?",
            "options": [
                "Nói thật nhỏ để tránh làm phiền",
                "Nói to, rõ ràng, diễn cảm và có tốc độ phù hợp",
                "Nói thật nhanh để tiết kiệm thời gian",
                "Hét thật to"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong khi nghe bạn khác phát biểu ý kiến, em nên làm gì?",
            "options": [
                "Lắng nghe tích cực, ghi chép nhanh ý kiến và tôn trọng bạn",
                "Nói chuyện riêng với bạn bên cạnh",
                "Ngắt lời bạn khi thấy không đồng ý",
                "Làm việc riêng của mình"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tiêu chí nào dưới đây dùng để đánh giá, bình chọn người phát biểu trong buổi thảo luận?",
            "options": [
                "Người có ý kiến hay",
                "Người trình bày hấp dẫn",
                "Người tham gia tích cực",
                "Tất cả các tiêu chí trên"
            ],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Chi tiết 'đứng cao hơn năm lần đỉnh núi cao nhất' của ông Đùng, bà Đùng thể hiện điều gì ở hai nhân vật?",
            "options": [
                "Sự nhỏ bé yếu đuối",
                "Tầm vóc khổng lồ phi thường",
                "Tính cách hung dữ đáng sợ",
                "Ngoại hình xấu xí"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Ở Vương quốc Tương Lai, các em bé sáng chế ra những vật dụng nhằm mục đích gì?",
            "options": [
                "Mang lại hạnh phúc cho con người",
                "Kiếm thật nhiều tiền",
                "Để chuẩn bị cho chiến tranh",
                "Để trưng bày trong bảo tàng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'độc đáo' trong câu phát biểu của Nam có nghĩa là gì?",
            "options": [
                "Bình thường, phổ biến",
                "Đặc biệt, có một không hai, mới lạ",
                "Độc hại, nguy hiểm",
                "Đơn độc, lẻ loi"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tại sao em nên ghi chép lại các ý kiến dự định phát biểu trước khi thảo luận?",
            "options": [
                "Để giúp trình bày mạch lạc, đầy đủ, không bị quên ý",
                "Để nộp cho giáo viên chấm điểm ngay lập tức",
                "Để đọc y nguyên từ giấy mà không cần nhìn mọi người",
                "Không có tác dụng gì"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Hoạt động thảo luận nhóm giúp học sinh rèn luyện điều gì?",
            "options": [
                "Kỹ năng hợp tác, chia sẻ và tôn trọng sự khác biệt",
                "Khả năng diễn đạt và thuyết phục người nghe",
                "Kỹ năng lắng nghe và tiếp thu thông tin",
                "Tất cả các kỹ năng trên"
            ],
            "answer": 3,
            "level": 1
        }
    ]
};

// --- CHỌN TRUYỆN MẪU ---
window.chonTruyenMauVn14 = function(ten, tg, nd) {
    const elTen = document.getElementById('vn14-ten-truyen');
    const elTg = document.getElementById('vn14-tac-gia');
    const elNd = document.getElementById('vn14-noi-dung-chinh');

    if (elTen) elTen.value = ten;
    if (elTg) elTg.value = tg;
    if (elNd) elNd.value = nd;

    const fb = document.getElementById('fb-vn14-chuanbi');
    if (fb) {
        fb.classList.remove('hidden');
        fb.innerHTML = `💡 Em đã điền thông tin nhanh cho truyện: <strong>"${ten}"</strong>. Hãy bổ sung thêm các chi tiết thú vị ở dưới nhé!`;
        fb.className = "text-2xl md:text-3xl font-bold px-4 py-2 rounded-xl bg-sky-600 text-white animate-pulse";
    }
};

// --- XOÁ FORM CHUẨN BỊ ---
window.xoaFormChuanBiVn14 = function() {
    const ids = ['vn14-ten-truyen', 'vn14-tac-gia', 'vn14-noi-dung-chinh', 'vn14-chi-tiet-boi-canh', 'vn14-chi-tiet-nhan-vat', 'vn14-chi-tiet-su-viec'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    const fb = document.getElementById('fb-vn14-chuanbi');
    if (fb) fb.classList.add('hidden');
};

// --- LƯU PHIẾU CHUẨN BỊ ---
window.luuFormChuanBiVn14 = function() {
    const ten = (document.getElementById('vn14-ten-truyen')?.value || '').trim();
    const nd = (document.getElementById('vn14-noi-dung-chinh')?.value || '').trim();
    const fb = document.getElementById('fb-vn14-chuanbi');
    if (!fb) return;

    fb.classList.remove('hidden');
    if (ten.length < 2 || nd.length < 5) {
        fb.innerHTML = "⚠️ Em cần điền đầy đủ Tên câu chuyện và Tóm tắt nội dung chính nhé!";
        fb.className = "text-2xl md:text-3xl font-bold px-4 py-2 rounded-xl bg-rose-600 text-white";
        return;
    }

    fb.innerHTML = `🎉 Lưu phiếu chuẩn bị truyện "${ten}" thành công! Em hãy dùng nội dung này để phát biểu thảo luận ở phần dưới nhé.`;
    fb.className = "text-2xl md:text-3xl font-bold px-4 py-2 rounded-xl bg-emerald-600 text-white";
};

// --- GỬI Ý KIẾN PHÁT BIỂU VÀO KHUNG CHAT ---
window.guiYKienPhatBieuVn14 = function() {
    const input = document.getElementById('vn14-speak-input');
    const fb = document.getElementById('fb-vn14-speak');
    const chatContainer = document.getElementById('vn14-student-msg-container');
    const chatBox = document.getElementById('vn14-chat-box');

    if (!input || !fb || !chatContainer) return;

    const val = input.value.trim();
    fb.classList.remove('hidden');

    if (val.length < 5) {
        fb.innerHTML = "⚠️ Em hãy nhập ý kiến phát biểu chi tiết hơn nhé!";
        fb.className = "text-2xl md:text-3xl font-bold px-3 py-1.5 rounded-lg bg-rose-600 text-white";
        return;
    }

    // Tạo HTML message mới của học sinh
    const msgId = 'vn14-student-msg-' + Date.now();
    const msgHtml = `
        <div class="flex items-start gap-4 justify-end animate-in slide-in-from-right duration-500" id="${msgId}">
            <div class="bg-sky-600 p-4 rounded-[24px] rounded-tr-none border border-sky-100 max-w-xl space-y-1 text-right">
                <p class="text-xl font-black text-sky-800">Em (Học sinh)</p>
                <p class="text-2xl md:text-3xl text-gray-800 font-bold text-left">${val}</p>
                <button onclick="xoaTinNhanVn14('${msgId}')" class="text-xl font-bold text-rose-800 hover:text-rose-800 transition-colors mt-1">Xoá</button>
            </div>
            <div class="w-12 h-12 rounded-full bg-sky-600 border-2 border-sky-100 flex items-center justify-center font-black text-lg text-sky-800 shrink-0 shadow-sm">🎓</div>
        </div>
    `;

    chatContainer.insertAdjacentHTML('beforeend', msgHtml);

    // Tự động scroll xuống cuối khung chat
    if (chatBox) {
        setTimeout(() => {
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 114);
    }

    input.value = '';
    fb.innerHTML = "✅ Đã đưa ý kiến phát biểu của em vào cuộc thảo luận nhóm!";
    fb.className = "text-2xl md:text-3xl font-bold px-3 py-1.5 rounded-lg bg-emerald-600 text-white";
};

// --- XOÁ TIN NHẮN ĐÃ GỬI ---
window.xoaTinNhanVn14 = function(msgId) {
    const msg = document.getElementById(msgId);
    if (msg) {
        msg.classList.add('animate-out', 'fade-out', 'duration-314');
        setTimeout(() => {
            msg.remove();
        }, 314);
    }
};

// --- NỘP BÌNH CHỌN / ĐÁNH GIÁ ---
window.nopBinhChonVn14 = function() {
    const yKien = document.getElementById('vn14-vote-y-kien')?.value;
    const trinhBay = document.getElementById('vn14-vote-trinh-bay')?.value;
    const tichCuc = document.getElementById('vn14-vote-tich-cuc')?.value;
    const fb = document.getElementById('fb-vn14-evaluation');

    if (!fb) return;

    fb.classList.remove('hidden');

    if (!yKien || !trinhBay || !tichCuc) {
        fb.innerHTML = "⚠️ Em hãy lựa chọn bình chọn cho cả 3 tiêu chí nhé!";
        fb.className = "text-2xl md:text-3xl font-bold px-4 py-3 rounded-xl bg-amber-500 text-white";
        return;
    }

    fb.innerHTML = `🎉 Tuyệt vời! Em đã hoàn thành bảng đánh giá bình chọn của nhóm:<br>💡 Ý kiến hay nhất: <strong>${yKien}</strong> | 🗣️ Trình bày hấp dẫn nhất: <strong>${trinhBay}</strong> | 🤝 Tham gia tích cực nhất: <strong>${tichCuc}</strong>.`;
    fb.className = "text-2xl md:text-3xl font-bold px-4 py-3 rounded-xl bg-emerald-600 text-white";
};

// --- NỘP BÀI TỔNG THỂ ---
window.nopBaiVn14 = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 14',
            '🗣️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🗣️</span><p class="text-lg md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành tiết học Nói và nghe: Những câu chuyện thú vị!</p><p class="text-lg text-gray-800 mt-3">Hãy luôn tích cực chia sẻ và lắng nghe ý kiến trong mọi hoạt động thảo luận nhé.</p></div>'
        );
    }
};
