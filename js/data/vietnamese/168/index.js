export const lesson168 = {
    "topic": "Tiếng Việt 5",
    "week": "24",
    "period": "168",
    "title": "NÓI VÀ NGHE: ĐỊA ĐIỂM THAM QUAN, DU LỊCH",
    "desc": "Học sinh giới thiệu về một địa điểm tham quan, du lịch mà em biết.",
    "subject": "Nói và nghe",
    "theme": "Hương sắc trăm miền",
    "audio": "",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-blue-600 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-blue-950 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết cách chuẩn bị và giới thiệu sinh động, mạch lạc về một địa điểm tham quan, du lịch.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Phát triển kỹ năng lắng nghe tích cực, ghi chép thông tin mới và tự tin trao đổi, góp ý với bạn bè.
            </li>
        </ul>
    </div>

    <!-- 📖 YÊU CẦU -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">❓</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Yêu cầu nói và nghe</h3>
        </div>
        <div class="p-6 bg-amber-50/50 rounded-3xl border border-amber-200">
            <p class="text-2xl md:text-3xl text-amber-900 font-black text-center">
                Giới thiệu về một địa điểm tham quan, du lịch mà em biết.
            </p>
        </div>
    </div>

    <!-- 💡 BƯỚC 1: CHUẨN BỊ -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">1</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Chuẩn bị</h3>
        </div>
        
        <p class="text-xl md:text-2xl font-bold text-gray-700">
            Có thể giới thiệu về một địa điểm tham quan, du lịch em đã đến hoặc được biết qua sách báo, ti vi,... theo các nội dung sau:
        </p>

        <!-- Trực quan hóa gợi ý chuẩn bị bằng 1 cột dọc -->
        <div class="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
            <div class="flex items-center gap-4 p-4 bg-blue-50/50 border border-blue-100 rounded-2xl shadow-sm">
                <span class="w-10 h-10 bg-blue-600 text-white font-black rounded-lg flex items-center justify-center text-lg md:text-xl shadow-inner">A</span>
                <span class="text-xl md:text-2xl font-black text-blue-600">Tên gọi của địa điểm</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-blue-50/50 border border-blue-100 rounded-2xl shadow-sm">
                <span class="w-10 h-10 bg-blue-600 text-white font-black rounded-lg flex items-center justify-center text-lg md:text-xl shadow-inner">B</span>
                <span class="text-xl md:text-2xl font-black text-blue-600">Địa chỉ cụ thể</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-blue-50/50 border border-blue-100 rounded-2xl shadow-sm">
                <span class="w-10 h-10 bg-blue-600 text-white font-black rounded-lg flex items-center justify-center text-lg md:text-xl shadow-inner">C</span>
                <span class="text-xl md:text-2xl font-black text-blue-600">Đặc điểm (cảnh quan thiên nhiên, công trình kiến trúc,...)</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-blue-50/50 border border-blue-100 rounded-2xl shadow-sm">
                <span class="w-10 h-10 bg-blue-600 text-white font-black rounded-lg flex items-center justify-center text-lg md:text-xl shadow-inner">D</span>
                <span class="text-xl md:text-2xl font-black text-blue-600">Ý kiến khác, thông tin bổ sung thú vị</span>
            </div>
        </div>

        <p class="text-lg md:text-xl text-slate-500 font-bold italic mt-4">
            📌 Lưu ý: Khi giới thiệu về địa điểm tham quan, du lịch, có thể sử dụng thêm tranh ảnh, bản đồ để chỉ dẫn về khoảng cách địa lí, phương tiện đi lại,...
        </p>

        <!-- Danh sách địa danh minh họa -->
        <div class="border-t border-gray-100 pt-6 space-y-8">
            <h4 class="text-2xl md:text-3xl font-black text-blue-950 flex items-center gap-2">
                <span>🏞️</span> Một số địa điểm nổi tiếng trong bài học:
            </h4>
            
            <!-- Hiển thị 1 cột dọc floated nổi bật -->
            <div class="grid grid-cols-1 gap-8 max-w-md mx-auto">
                <div class="bg-white border-2 border-slate-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                    <img src="assets/images/thac_ban_gioc.webp" alt="Thác Bản Giốc" class="w-full h-64 object-cover">
                    <div class="p-4 bg-slate-50 text-center">
                        <p class="text-xl md:text-2xl font-black text-slate-800">Thác Bản Giốc (Cao Bằng)</p>
                    </div>
                </div>

                <div class="bg-white border-2 border-slate-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                    <img src="assets/images/cau_the_huc.webp" alt="Cầu Thê Húc" class="w-full h-64 object-cover">
                    <div class="p-4 bg-slate-50 text-center">
                        <p class="text-xl md:text-2xl font-black text-slate-800">Cầu Thê Húc – đền Ngọc Sơn (Hà Nội)</p>
                    </div>
                </div>

                <div class="bg-white border-2 border-slate-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                    <img src="assets/images/song_huong_hue.webp" alt="Sông Hương" class="w-full h-64 object-cover">
                    <div class="p-4 bg-slate-50 text-center">
                        <p class="text-xl md:text-2xl font-black text-slate-800">Sông Hương (Huế)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 🗣️ BƯỚC 2: TRÌNH BÀY -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">2</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Trình bày</h3>
        </div>
        <div class="grid grid-cols-1 gap-6">
            <div class="p-6 bg-slate-50 rounded-2xl border border-gray-150 flex items-start gap-4">
                <span class="text-2xl md:text-3xl">🎤</span>
                <div>
                    <h5 class="text-xl md:text-2xl font-black text-blue-950 mb-1">Giới thiệu sinh động</h5>
                    <p class="text-lg md:text-xl font-bold text-gray-700">Trình bày bài nói theo nội dung đã chuẩn bị. Nhấn mạnh vào những đặc điểm gây ấn tượng của địa điểm tham quan, du lịch.</p>
                </div>
            </div>
            <div class="p-6 bg-slate-50 rounded-2xl border border-gray-150 flex items-start gap-4">
                <span class="text-2xl md:text-3xl">📝</span>
                <div>
                    <h5 class="text-xl md:text-2xl font-black text-blue-950 mb-1">Lắng nghe & Ghi chép</h5>
                    <p class="text-lg md:text-xl font-bold text-gray-700">Chăm chú lắng nghe lời giới thiệu của bạn bè và chủ động ghi chép những thông tin mới, thú vị.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- ⭐ BƯỚC 3: TRAO ĐỔI, GÓP Ý -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">3</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Trao đổi, góp ý</h3>
        </div>
        
        <p class="text-xl md:text-2xl font-bold text-gray-700">
            Cùng nhau thảo luận, trao đổi ý kiến nhận xét dựa trên các gợi ý:
        </p>

        <!-- Thể hiện dạng 1 cột xếp chồng dọc -->
        <div class="grid grid-cols-1 gap-4 max-w-xl mx-auto">
            <div class="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-xl text-xl md:text-2xl font-black text-emerald-900 shadow-sm flex items-center gap-3">
                <span>📍</span> Nội dung giới thiệu đầy đủ, hấp dẫn
            </div>
            <div class="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-xl text-xl md:text-2xl font-black text-emerald-900 shadow-sm flex items-center gap-3">
                <span>🗣️</span> Cách giới thiệu truyền cảm, tự tin
            </div>
            <div class="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-xl text-xl md:text-2xl font-black text-emerald-900 shadow-sm flex items-center gap-3">
                <span>📸</span> Có sử dụng các phương tiện hỗ trợ sinh động
            </div>
            <div class="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-xl text-xl md:text-2xl font-black text-emerald-900 shadow-sm flex items-center gap-3">
                <span>⚙️</span> Ý kiến đóng góp sáng tạo khác
            </div>
        </div>
    </div>

    <!-- 🏡 HOẠT ĐỘNG VỀ NHÀ / MỞ RỘNG -->
    <div class="bg-emerald-50/70 p-6 md:p-8 rounded-[32px] border border-emerald-200 shadow-md flex items-start gap-4">
        <span class="text-4xl md:text-5xl">🏡</span>
        <div>
            <h4 class="text-xl md:text-2xl font-black text-emerald-950 mb-2">Hoạt động cùng người thân</h4>
            <p class="text-lg md:text-xl font-bold text-emerald-800">
                Chia sẻ với người thân những điều em đã ghi chép khi nghe bạn giới thiệu về địa điểm tham quan, du lịch mà em thấy ấn tượng nhất.
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-700">
    <div class="bg-gradient-to-r from-blue-600 to-sky-500 p-6 md:p-8 rounded-[32px] text-white shadow-xl relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div class="flex items-center gap-4">
            <span class="p-3 bg-white/20 rounded-2xl text-2xl md:text-3xl shadow-inner">💬</span>
            <div>
                <h3 class="text-2xl md:text-3xl font-black uppercase tracking-tight">CHUẨN BỊ BÀI NÓI CỦA EM</h3>
                <p class="text-lg md:text-xl font-bold opacity-90 mt-1">Viết dàn ý bài nói và nộp cho Thầy EduRobot nhé!</p>
            </div>
        </div>
    </div>
    
    <div class="bg-white rounded-[32px] shadow-2xl p-6 md:p-8 border border-gray-100 space-y-6">
        <div class="flex items-center justify-between">
            <label for="ai-nvn168-speech-plan" class="text-xl md:text-2xl font-black text-blue-950">Dàn ý bài nói giới thiệu địa điểm du lịch:</label>
            <button onclick="toggleSpeech('ai-nvn168-speech-plan')" class="px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 font-bold rounded-xl transition-all text-sm md:text-base shadow-sm flex items-center gap-2">
                <span>🎙️</span> Nhập bằng giọng nói
            </button>
        </div>
        
        <textarea id="ai-nvn168-speech-plan" rows="10" 
            class="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-xl md:text-2xl serif-font leading-relaxed" 
            placeholder="Em hãy phác thảo dàn ý hoặc nội dung bài giới thiệu tại đây... (Ví dụ: Kính chào thầy cô và các bạn, hôm nay em xin giới thiệu về...)"></textarea>

        <!-- Feedback Box -->
        <div id="fb-nvn168-speech-plan" class="hidden p-6 rounded-2xl bg-blue-50 border-2 border-blue-200 text-lg md:text-xl font-bold text-blue-600 shadow-inner"></div>

        <div class="flex justify-center">
            <button onclick="checkNVN168AI()" class="bg-[#ff7b29] hover:brightness-110 text-white font-black px-8 py-5 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 text-lg md:text-2xl">
                <span class="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-[#ff7b29] font-black text-sm shadow-sm">E</span>
                <span>NHẬN XÉT CỦA EDUROBOT</span>
            </button>
        </div>
    </div>

    <!-- Image Upload Area -->
    <div class="bg-white rounded-[32px] shadow-2xl p-6 md:p-8 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex-1">
            <h4 class="text-xl md:text-2xl font-black text-blue-950 mb-1">📷 Nộp ảnh chụp bài chuẩn bị trong vở</h4>
            <p class="text-sm md:text-base font-bold text-slate-500">Nếu em viết ra vở nháp, hãy chụp ảnh lại để gửi cho Thầy nhé!</p>
        </div>
        <div class="relative">
            <input type="file" id="nvn168-file" accept="image/*" capture="environment" class="hidden" 
                onchange="const s = document.getElementById('file-status-nvn168'); if(s) { s.innerText = '✅ Đã chọn ảnh: ' + this.files[0].name; s.classList.remove('hidden'); }">
            <label for="nvn168-file" class="cursor-pointer bg-white text-blue-600 font-black py-4 px-8 rounded-2xl border-2 border-blue-300 hover:bg-blue-50 transition-all flex items-center gap-3 shadow-md active:scale-95 text-lg">
                <span>📸</span> CHỌN ẢNH CHỤP
            </label>
        </div>
    </div>
    <div id="file-status-nvn168" class="hidden text-center text-green-600 font-bold bg-green-50 p-4 rounded-2xl border border-green-200"></div>

    <!-- Submit Action -->
    <div class="flex justify-center py-6">
        <button onclick="startSubmitNVN168()" class="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-10 py-5 rounded-[2rem] font-black text-xl md:text-3xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4">
            <span class="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-rose-600 font-black text-base shadow-sm">E</span>
            <span>NỘP BÀI HOÀN THÀNH</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Khi chuẩn bị bài nói giới thiệu về địa danh, bước đầu tiên em cần làm gì?",
            "options": [
                "Chọn địa danh nổi bật để giới thiệu",
                "Học thuộc lòng bài nói của người khác",
                "Nhờ bố mẹ viết hộ toàn bộ",
                "Mang bản đồ đi du lịch ngay lập tức"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nội dung nào dưới đây KHÔNG bắt buộc phải có khi giới thiệu về một địa điểm du lịch?",
            "options": [
                "Tên gọi và địa chỉ của địa danh",
                "Đặc điểm nổi bật của cảnh quan",
                "Số lượng ô tô đỗ ở đó hàng ngày",
                "Phương tiện di chuyển hoặc khoảng cách địa lý"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Sử dụng các phương tiện hỗ trợ nào dưới đây giúp bài nói giới thiệu thêm sinh động?",
            "options": [
                "Tranh ảnh, bản đồ, video về địa danh",
                "Một cuốn sổ trắng tinh",
                "Vở bài tập toán lớp 5",
                "Một chiếc thước kẻ dài bằng gỗ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi trình bày bài nói trước lớp, thái độ của em nên như thế nào?",
            "options": [
                "Nhìn xuống sàn và đọc thật nhanh",
                "Tự tin, giọng nói truyền cảm, tương tác bằng ánh mắt với người nghe",
                "Nói lí nhí để chỉ một mình mình nghe thấy",
                "Hét thật to vào micro của lớp"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Vai trò của người nghe trong hoạt động Nói và nghe là gì?",
            "options": [
                "Nói chuyện riêng với các bạn ngồi bên cạnh",
                "Lắng nghe tích cực, tôn trọng bạn và ghi chép thông tin mới",
                "Tìm cách ngắt lời khi bạn đang nói",
                "Làm bài tập môn học khác"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi trao đổi, góp ý bài nói của bạn, em nên dùng thái độ thế nào?",
            "options": [
                "Chê bai thẳng thừng để bạn cảm thấy xấu hổ",
                "Nhã nhặn, tôn trọng, nêu ưu điểm và góp ý chân thành những điểm cần sửa",
                "Im lặng và không đưa ra bất kỳ nhận xét nào",
                "Nói to tiếng để trêu chọc bạn trước cả lớp"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đâu là địa danh du lịch nổi tiếng ở tỉnh Cao Bằng được nhắc đến trong bài học?",
            "options": [
                "Thác Bản Giốc",
                "Cầu Thê Húc",
                "Sông Hương",
                "Đền Ngọc Sơn"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cầu Thê Húc và Đền Ngọc Sơn là địa danh lịch sử, văn hóa nằm ở thành phố nào?",
            "options": [
                "Hà Nội",
                "Huế",
                "Đà Nẵng",
                "Thành phố Hồ Chí Minh"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Dòng sông Hương thơ mộng gắn liền với danh lam thắng cảnh ở vùng đất nào nước ta?",
            "options": [
                "Huế",
                "Quảng Ninh",
                "Cao Bằng",
                "Nha Trang"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Mục đích chính của việc giới thiệu về một địa điểm tham quan là gì?",
            "options": [
                "Để khoe khoang rằng mình đã đi nhiều nơi",
                "Giúp người nghe hiểu biết thêm và yêu mến vẻ đẹp của địa điểm đó",
                "Để kiểm tra xem các bạn có nhớ đường đi hay không",
                "Để lấy điểm thi đua cho tổ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi chuẩn bị thông tin giới thiệu, em có thể tìm hiểu qua những nguồn nào?",
            "options": [
                "Chỉ hỏi bạn bè cùng lớp",
                "Sách báo, ti vi, mạng Internet hoặc trải nghiệm thực tế của bản thân",
                "Tự tưởng tượng ra các thông tin không có thật",
                "Chỉ viết theo thói quen mà không cần kiểm chứng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Phần mở đầu của bài giới thiệu nên có nội dung gì?",
            "options": [
                "Lời chào và giới thiệu tên địa danh mình muốn nói tới",
                "Kể ngay về các món đặc sản ở đó",
                "Nói lời cảm ơn và chào tạm biệt khán giả",
                "Đọc một bài thơ không liên quan"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi nghe bạn giới thiệu về một địa điểm mới, em nên ghi chép những gì?",
            "options": [
                "Ghi chép lại từng chữ bạn phát âm ra",
                "Ghi chép những thông tin mới, thú vị hoặc câu hỏi muốn hỏi lại bạn",
                "Vẽ hình minh họa tự do vào vở nháp",
                "Ghi tên những bạn làm việc riêng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tiêu chí nào giúp đánh giá một bài nói có sự đầu tư về phương tiện hỗ trợ?",
            "options": [
                "Bài nói sử dụng nhiều thuật ngữ nước ngoài",
                "Học sinh có sử dụng tranh ảnh, bản đồ, mô hình... để minh họa",
                "Học sinh mang theo nhiều bút viết",
                "Bài nói kéo dài liên tục trên 30 phút"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Sau khi hoàn thành bài nói trước lớp, em nên có thái độ như thế nào?",
            "options": [
                "Chạy ngay về chỗ ngồi mà không nói lời nào",
                "Cảm ơn người nghe và sẵn sàng lắng nghe câu hỏi thảo luận, góp ý",
                "Tỏ thái độ khó chịu với các bạn đặt câu hỏi",
                "Tự vỗ tay khen ngợi bản thân thật lớn"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- LOGIC TRỢ GIÚP ---
window.checkNVN168AI = async function () {
    const input = document.getElementById('ai-nvn168-speech-plan');
    if (!input || !input.value.trim()) {
        if (typeof window.UI !== 'undefined' && window.UI.showToast) {
            window.UI.showToast("Em hãy viết nội dung bài nói trước khi nhấn chấm bài nhé! ✏️", "error", 3000);
        } else {
            alert("Em hãy viết nội dung bài nói trước khi nhấn chấm bài nhé! ✏️");
        }
        return;
    }

    const fb = document.getElementById('fb-nvn168-speech-plan');
    fb.classList.remove('hidden');
    fb.innerHTML = `
        <div class="flex items-center gap-3 text-green-700 animate-pulse">
            <div class="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center text-white font-black text-[10px] shadow-sm">E</div>
            <span class="font-bold italic">Thầy EduRobot đang lắng nghe và đọc bài nói của em...</span>
        </div>`;

    if (typeof askAI === 'function') {
        const prompt = `Em hãy đóng vai thầy giáo EduRobot để nhận xét bài nói của học sinh lớp 5.
        Đề bài: "Giới thiệu về một địa điểm tham quan, du lịch mà em biết."
        Yêu cầu bài nói:
        1. Giới thiệu được tên, địa chỉ của địa điểm.
        2. Nêu được các đặc điểm nổi bật, hấp dẫn (phong cảnh, hoạt động, sản vật...).
        3. Thái độ tự tin, có lời chào và lời kết.

        Nội dung bài viết của học sinh:
        "${input.value.trim()}"

        Hãy nhận xét:
        - Khen ngợi những ý hay, cảm xúc chân thực.
        - Góp ý nếu thiếu thông tin về địa chỉ hoặc đặc điểm nổi bật.
        - Khuyến khích học sinh trình bày tự tin trước lớp.
        Sử dụng ngôn ngữ thân thiện, khích lệ.`;

        await askAI('nvn168-speech-plan', prompt, 'single', 'tlv', 24);
    } else {
        fb.innerHTML = "✅ Bài nói của em chuẩn bị rất tốt! Hãy tự tin trình bày trước lớp nhé.";
    }
};

window.startSubmitNVN168 = function() {
    const input = document.getElementById('ai-nvn168-speech-plan');
    const text = input ? input.value.trim() : "";
    const fileInput = document.getElementById('nvn168-file');
    const hasFile = fileInput && fileInput.files && fileInput.files.length > 0;

    if (!text && !hasFile) {
        if (typeof window.UI !== 'undefined' && window.UI.showToast) {
            window.UI.showToast("Em hãy chuẩn bị nội dung hoặc chụp ảnh bài làm trước khi nộp nhé! ✏️", "warning", 3000);
        } else {
            alert("Em hãy chuẩn bị nội dung hoặc chụp ảnh bài làm trước khi nộp nhé! ✏️");
        }
        return;
    }

    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Đã nộp bài thành công',
            '🎉',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🏆</span><p class="text-xl md:text-2xl font-bold text-emerald-800">Chúc mừng em đã hoàn thành bài nói và nghe!</p><p class="text-xl text-gray-800 mt-3">Hãy chuẩn bị để trình bày thật tự tin trước lớp nhé!</p></div>'
        );
    } else {
        alert("Đã nộp bài cho thầy giáo thành công! 🎉");
    }
};
