export const lesson119 = {
    "topic": "Tiếng Việt 5",
    "week": "17",
    "period": "119",
    "title": "NÓI VÀ NGHE: BỘ PHIM YÊU THÍCH",
    "desc": "Bài học giúp học sinh rèn luyện kỹ năng nói (chuẩn bị, sắp xếp ý tưởng và giới thiệu một bộ phim yêu thích) và kỹ năng nghe (lắng nghe, ghi nhận và đánh giá bài nói của bạn).",
    "subject": "Tiếng Việt",
    "theme": "Bảo vệ ngôi nhà chung",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-sky-900">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-sky-950 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-900 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-600 font-black">•</span>
                Biết cách chuẩn bị, tìm thông tin, sắp xếp ý tưởng và thiết lập sơ đồ tư duy trước khi thuyết trình về một bộ phim yêu thích.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-600 font-black">•</span>
                Rèn luyện kỹ năng nói tự tin, giọng nói truyền cảm, kết hợp cử chỉ, điệu bộ phù hợp và sử dụng các phương tiện hỗ trợ (tranh ảnh, sơ đồ).
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-600 font-black">•</span>
                Rèn luyện thái độ lắng nghe tích cực, biết cách ghi nhận thông tin và đưa ra những lời đánh giá, nhận xét khách quan, khích lệ cho bạn bè.
            </li>
        </ul>
    </div>

    <!-- 📋 PHẦN 1: Chuẩn bị nói (Sơ đồ tư duy) -->
    <!-- Tiết 119 -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">1</span>
            <h3 class="text-2xl md:text-5xl font-black text-sky-950">Chuẩn bị thông tin trước khi thuyết trình:</h3>
        </div>

        <p class="text-lg font-bold text-sky-900 max-w-3xl">💡 Em hãy hoàn thành sơ đồ tư duy tóm tắt dưới đây bằng cách nhập nhanh thông tin gợi ý về bộ phim em định trình bày. Đây sẽ là đề cương giúp em nói tự tin hơn!</p>
        
        <!-- Sơ đồ tư duy tương tác -->
        <div class="p-6 bg-gradient-to-br from-sky-50/50 to-emerald-50/30 rounded-[32px] border border-sky-100 max-w-4xl mx-auto shadow-inner">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                <!-- Nhánh 1: Chọn bộ phim & thể loại -->
                <div class="bg-white p-5 rounded-2xl border-2 border-sky-200 shadow-sm space-y-3">
                    <h4 class="font-black text-lg text-sky-950 flex items-center gap-2">
                        <span class="p-1 bg-sky-500 text-white rounded-lg">🎥</span>
                        Chọn bộ phim giới thiệu
                    </h4>
                    <div class="space-y-2">
                        <label class="text-sm font-bold text-sky-800">Tên phim:</label>
                        <input id="mindmap-vn119-tenphim" type="text" placeholder="Ví dụ: Vua sư tử, Kỷ băng hà, Hành tinh xanh..." class="w-full p-2 rounded-xl border border-gray-200 focus:border-sky-500 font-bold bg-white text-gray-800 outline-none text-base">
                    </div>
                    <div class="space-y-2">
                        <label class="text-sm font-bold text-sky-800">Thể loại phim:</label>
                        <input id="mindmap-vn119-theloai" type="text" placeholder="Ví dụ: Phim hoạt hình, phim tài liệu, phim khoa học..." class="w-full p-2 rounded-xl border border-gray-200 focus:border-sky-500 font-bold bg-white text-gray-800 outline-none text-base">
                    </div>
                </div>

                <!-- Nhánh 2: Tìm thông tin chi tiết -->
                <div class="bg-white p-5 rounded-2xl border-2 border-emerald-200 shadow-sm space-y-3">
                    <h4 class="font-black text-lg text-emerald-950 flex items-center gap-2">
                        <span class="p-1 bg-emerald-500 text-white rounded-lg">🔍</span>
                        Thông tin trình bày
                    </h4>
                    <div class="space-y-2">
                        <label class="text-sm font-bold text-emerald-800">Đạo diễn hoặc nhân vật nổi bật:</label>
                        <input id="mindmap-vn119-nhanvat" type="text" placeholder="Ví dụ: Chú sư tử Simba bé bỏng, chú mèo máy Doraemon..." class="w-full p-2 rounded-xl border border-gray-200 focus:border-emerald-500 font-bold bg-white text-gray-800 outline-none text-base">
                    </div>
                    <div class="space-y-2">
                        <label class="text-sm font-bold text-emerald-800">Nội dung chính phim:</label>
                        <input id="mindmap-vn119-noidung" type="text" placeholder="Ví dụ: Cuộc hành trình tìm lại vương quốc và lòng dũng cảm của Simba..." class="w-full p-2 rounded-xl border border-gray-200 focus:border-emerald-500 font-bold bg-white text-gray-800 outline-none text-base">
                    </div>
                </div>

                <!-- Nhánh 3: Cảm xúc & Ý nghĩa -->
                <div class="bg-white p-5 rounded-2xl border-2 border-amber-200 shadow-sm space-y-3">
                    <h4 class="font-black text-lg text-amber-950 flex items-center gap-2">
                        <span class="p-1 bg-amber-500 text-white rounded-lg">💖</span>
                        Cảm xúc & Ý nghĩa
                    </h4>
                    <div class="space-y-2">
                        <label class="text-sm font-bold text-amber-800">Cảm xúc khi xem phim:</label>
                        <input id="mindmap-vn119-camxuc" type="text" placeholder="Ví dụ: Vô cùng hào hứng, xúc động trước tình cảm gia đình..." class="w-full p-2 rounded-xl border border-gray-200 focus:border-amber-500 font-bold bg-white text-gray-800 outline-none text-base">
                    </div>
                    <div class="space-y-2">
                        <label class="text-sm font-bold text-amber-800">Bài học ý nghĩa / Lý do thích phim:</label>
                        <input id="mindmap-vn119-lydothich" type="text" placeholder="Ví dụ: Bài học sâu sắc về tinh thần dũng cảm, tình bạn..." class="w-full p-2 rounded-xl border border-gray-200 focus:border-amber-500 font-bold bg-white text-gray-800 outline-none text-base">
                    </div>
                </div>

                <!-- Nhánh 4: Phương tiện hỗ trợ trình bày -->
                <div class="bg-white p-5 rounded-2xl border-2 border-rose-200 shadow-sm space-y-3">
                    <h4 class="font-black text-lg text-rose-950 flex items-center gap-2">
                        <span class="p-1 bg-rose-500 text-white rounded-lg">🖼️</span>
                        Phương tiện hỗ trợ
                    </h4>
                    <div class="space-y-2">
                        <label class="text-sm font-bold text-rose-800">Tranh ảnh minh họa hoặc sơ đồ mang theo:</label>
                        <input id="mindmap-vn119-phuongtien" type="text" placeholder="Ví dụ: Bức ảnh chụp Simba cùng những người bạn Hakuna Matata..." class="w-full p-2 rounded-xl border border-gray-200 focus:border-rose-500 font-bold bg-white text-gray-800 outline-none text-base">
                    </div>
                    <div class="flex justify-center pt-2">
                        <button onclick="kiemTraSoDo119()" class="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-black rounded-xl active:scale-95 transition-all">LƯU SƠ ĐỒ ✓</button>
                    </div>
                </div>
            </div>
            <div id="fb-vn119-sodo" class="hidden mt-4 p-4 rounded-xl text-base font-bold text-center max-w-xl mx-auto"></div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-sky-900">
    <!-- 📋 PHẦN 2: Thực hành trình bày nói -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">2</span>
            <h3 class="text-2xl md:text-5xl font-black text-sky-950">Thực hành nói - Trình bày về bộ phim yêu thích của em:</h3>
        </div>

        <div class="max-w-4xl mx-auto space-y-4">
            <div class="bg-sky-50/50 p-5 rounded-2xl border border-sky-100 space-y-2 text-base md:text-lg font-bold text-sky-950">
                <p>📋 Dựa vào sơ đồ tư duy đã chuẩn bị ở phần 1, em hãy phát biểu bài thuyết trình của mình. Hãy chú ý:</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-sm text-sky-900 font-semibold">
                    <p class="p-3 bg-white rounded-xl border border-sky-100">🌟 <strong>Giới thiệu chung:</strong> Tên phim, thể loại, nước sản xuất.</p>
                    <p class="p-3 bg-white rounded-xl border border-sky-100">🌟 <strong>Nội dung phim:</strong> Bối cảnh, nhân vật chính, diễn biến nổi bật.</p>
                    <p class="p-3 bg-white rounded-xl border border-sky-100">🌟 <strong>Cảm xúc & Lý do:</strong> Nêu rõ cảm xúc và bài học nhân văn của bộ phim.</p>
                </div>
            </div>

            <p class="text-lg font-black text-sky-950">✏️ Thực hành nói (Em có thể nhấn nút micro để nói trực tiếp hoặc tự ghi chép bài thuyết trình của mình vào đây):</p>
            
            <div class="relative bg-amber-50/20 border-2 border-sky-300 rounded-[32px] p-6 shadow-inner">
                <!-- Nút Thu âm Speech to Text -->
                <div class="absolute right-4 top-4 z-10">
                    <button id="btn-vn119-record" onclick="toggleRecord119()" class="p-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center" title="Nói để nhập văn bản">
                        <span id="mic-icon-119" class="text-xl">🎤</span>
                    </button>
                </div>
                <textarea id="ans-vn119-speech" rows="8" placeholder="Em nhập nội dung bài phát biểu tại đây hoặc nhấn Micro để thu âm..." class="w-full p-4 text-xl rounded-2xl border border-gray-200 outline-none focus:border-sky-500 font-bold bg-white text-gray-800 leading-relaxed pr-14"></textarea>
                <div id="status-vn119-record" class="text-sm font-bold text-rose-500 mt-2 hidden">Đang thu âm giọng nói của em...</div>
            </div>

            <div class="flex justify-center pt-2">
                <button onclick="kiemTraTrinhBay119()" class="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-black text-lg rounded-2xl shadow-md active:scale-95 transition-all flex items-center gap-2">
                    <span>👨‍🏫 THẦY E ĐÁNH GIÁ BÀI NÓI</span>
                </button>
            </div>
            <div id="fb-vn119-trinhbay" class="hidden p-5 rounded-2xl font-bold text-lg"></div>
        </div>
    </div>

    <!-- 📋 PHẦN 3: Đánh giá bài nói của em hoặc bạn bè -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">3</span>
            <h3 class="text-2xl md:text-5xl font-black text-sky-950">Đánh giá và tự rút kinh nghiệm (Tiêu chí 3 SGK):</h3>
        </div>

        <p class="text-lg font-bold text-sky-950 max-w-3xl">💬 Hãy đối chiếu bài phát biểu của mình hoặc bài trình bày của bạn bè với các tiêu chí chất lượng trên dây phơi để tự đánh giá nhé:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto select-none">
            <!-- Tiêu chí 1: Nội dung giới thiệu -->
            <label class="flex items-start gap-3 p-4 rounded-2xl border-2 border-sky-200 bg-sky-50/20 cursor-pointer hover:bg-sky-50/60 transition-all">
                <input type="checkbox" id="ck-vn119-tc1" class="w-6 h-6 text-sky-600 rounded mt-1 shrink-0">
                <div>
                    <h5 class="font-black text-sky-950 text-base">📝 Nội dung giới thiệu</h5>
                    <p class="text-sm text-sky-900 font-semibold">Giới thiệu đầy đủ thông tin chung, bối cảnh, diễn biến chính và cảm xúc về bộ phim.</p>
                </div>
            </label>

            <!-- Tiêu chí 2: Cách giới thiệu -->
            <label class="flex items-start gap-3 p-4 rounded-2xl border-2 border-emerald-200 bg-emerald-50/20 cursor-pointer hover:bg-emerald-50/60 transition-all">
                <input type="checkbox" id="ck-vn119-tc2" class="w-6 h-6 text-emerald-600 rounded mt-1 shrink-0">
                <div>
                    <h5 class="font-black text-emerald-950 text-base">🗣️ Cách giới thiệu</h5>
                    <p class="text-sm text-emerald-900 font-semibold">Giọng nói to, rõ ràng, truyền cảm, nói mạch lạc, trôi chảy, không ấp úng.</p>
                </div>
            </label>

            <!-- Tiêu chí 3: Phương tiện hỗ trợ -->
            <label class="flex items-start gap-3 p-4 rounded-2xl border-2 border-amber-200 bg-amber-50/20 cursor-pointer hover:bg-amber-50/60 transition-all">
                <input type="checkbox" id="ck-vn119-tc3" class="w-6 h-6 text-amber-600 rounded mt-1 shrink-0">
                <div>
                    <h5 class="font-black text-amber-950 text-base">🖼️ Phương tiện hỗ trợ</h5>
                    <p class="text-sm text-amber-900 font-semibold">Có sử dụng tranh ảnh, âm thanh, sơ đồ tư duy minh họa để bài nói sinh động.</p>
                </div>
            </label>

            <!-- Tiêu chí 4: Cử chỉ, điệu bộ khi nói -->
            <label class="flex items-start gap-3 p-4 rounded-2xl border-2 border-rose-200 bg-rose-50/20 cursor-pointer hover:bg-rose-50/60 transition-all">
                <input type="checkbox" id="ck-vn119-tc4" class="w-6 h-6 text-rose-600 rounded mt-1 shrink-0">
                <div>
                    <h5 class="font-black text-rose-950 text-base">🤝 Cử chỉ, điệu bộ</h5>
                    <p class="text-sm text-rose-900 font-semibold">Tự tin, thoải mái, ánh mắt tương tác với người nghe, cử chỉ tay linh hoạt.</p>
                </div>
            </label>
        </div>

        <div class="flex justify-center pt-2">
            <button onclick="kiemTraDanhGia119()" class="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-xl transition-all text-lg shadow-md active:scale-95">XÁC NHẬN HOÀN TẤT ✓</button>
        </div>
        <div id="fb-vn119-danhgia" class="hidden p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto"></div>
    </div>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn119Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <span>HOÀN THÀNH BÀI HỌC ✓</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Trước khi thực hiện bài thuyết trình nói giới thiệu bộ phim yêu thích, em cần làm tốt điều gì đầu tiên?",
            "options": [
                "Chuẩn bị thông tin, chọn phim, sắp xếp ý tưởng bằng sơ đồ tư duy",
                "Chụp thật nhiều ảnh làm tài liệu mang lên lớp học",
                "Học thuộc lòng từng chữ của bài giới thiệu từ trên mạng",
                "Tìm kiếm các bài hát liên quan để mở nhạc lúc nói"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Sơ đồ tư duy chuẩn bị bài nói giới thiệu phim KHÔNG cần chứa thông tin nào dưới đây?",
            "options": [
                "Báo cáo chi phí quảng cáo và doanh thu phòng vé của bộ phim",
                "Tên phim, thể loại phim và nước sản xuất",
                "Tóm tắt nội dung chính, bối cảnh và nhân vật nổi bật",
                "Cảm xúc khi xem phim và bài học ý nghĩa của phim"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi trình bày bài nói trước lớp, em nên có cử chỉ và điệu bộ như thế nào để cuốn hút người nghe?",
            "options": [
                "Đứng tự tin, thoải mái, mắt hướng về người nghe, sử dụng điệu bộ tay thích hợp",
                "Đứng yên một chỗ, hai tay giấu sau lưng và cúi gằm mặt xuống đất",
                "Liên tục đi lại vòng quanh lớp học và nói thật nhanh để kịp giờ",
                "Đứng khoanh tay trước ngực và chỉ nhìn chăm chú vào trần nhà"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Để giọng nói truyền cảm và thuyết phục người nghe, em nên điều chỉnh như thế nào?",
            "options": [
                "Nói to rõ ràng, âm lượng vừa phải, nhấn giọng ở những chỗ giàu cảm xúc",
                "Nói thật to, hét lớn vào micro để đảm bảo cả lớp nghe thấy",
                "Nói đều đều một giọng từ đầu đến cuối để tránh bị hụt hơi",
                "Nói thầm thì nhỏ nhẹ để tạo cảm giác bí ẩn cho bộ phim"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Phương tiện hỗ trợ trình bày nào dưới đây có thể giúp bài nói của em sinh động hơn?",
            "options": [
                "Tranh ảnh minh họa các nhân vật hoặc sơ đồ tư duy ý tưởng",
                "Một cuốn truyện tranh dày để em tự đọc lúc thuyết trình",
                "Danh sách các đạo diễn khác cùng làm thể loại phim đó",
                "Tấm bảng đen trắng không ghi chữ nào"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi nghe bạn trình bày về bộ phim bạn yêu thích, thái độ lắng nghe tích cực là gì?",
            "options": [
                "Chăm chú lắng nghe, ghi chép lại những chi tiết thú vị và khích lệ bạn",
                "Nói chuyện riêng với bạn bên cạnh về một chủ đề thú vị khác",
                "Cắt ngang lời bạn khi thấy bạn nói sai chi tiết bộ phim",
                "Ngủ gật hoặc chơi trò chơi nhỏ trên bàn học để giết thời gian"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tiêu chí 'Cử chỉ, điệu bộ khi nói' trong bảng đánh giá dây phơi đánh giá khía cạnh nào của học sinh?",
            "options": [
                "Ánh mắt tương tác, nét mặt biểu cảm, tư thế đứng thoải mái, tự tin",
                "Chất lượng âm thanh của đoạn phim trình chiếu kèm theo",
                "Độ dài của bài thuyết trình bằng chữ viết trên bảng",
                "Số lượng câu hỏi trắc nghiệm bạn đã trả lời đúng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nếu bạn trình bày bộ phim Tôm và Gie-ri, bạn nữ đã nhận xét bộ phim đó như thế nào ở trang 157?",
            "options": [
                "Kể về câu chuyện nhỏ giữa mèo Tôm và chuột Gie-ri, rất hài hước và ý nghĩa",
                "Kể về câu chuyện đi học của hai bạn mèo và chuột trong thành phố",
                "Đây là bộ phim tài liệu khoa học nói về loài động vật ăn thịt",
                "Bộ phim rất đáng sợ, không phù hợp cho trẻ em tiểu học"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Ý nào dưới đây giúp mở đầu bài thuyết trình nói một cách tự nhiên và thu hút?",
            "options": [
                "Chào các bạn, hôm nay mình rất vui được giới thiệu bộ phim hoạt hình yêu thích của mình là...",
                "Hôm nay cô giáo bắt mình lên nói nên mình sẽ nói về phim này...",
                "Phim này rất hay, các bạn hãy nghe mình tóm tắt nội dung luôn nhé...",
                "Đã hết giờ chuẩn bị, bây giờ mình xin phép đọc bài viết của mình..."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi thuyết trình, việc giao tiếp bằng ánh mắt (eye contact) có tác dụng gì?",
            "options": [
                "Thể hiện sự tự tin và tôn trọng, giúp kết nối trực tiếp với người nghe",
                "Giúp người nói ghi nhớ kịch bản thuyết trình tốt hơn",
                "Làm cho người nghe cảm thấy lo lắng và tập trung hơn",
                "Để người nói quan sát xem giáo viên có đang chấm điểm hay không"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong các thể loại dưới đây, thể loại nào KHÔNG phải là thể loại phim được nhắc đến trong gợi ý SGK trang 156?",
            "options": [
                "Phim hoạt hình kiếm hiệp cổ trang",
                "Phim hoạt hình thiếu nhi",
                "Phim khoa học khám phá thế giới",
                "Phim tài liệu lịch sử đất nước"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Sau khi nghe bạn giới thiệu xong bộ phim, em nên làm gì để thể hiện phép lịch sự?",
            "options": [
                "Vỗ tay khích lệ và đưa ra nhận xét, đóng góp ý kiến mang tính xây dựng",
                "Nhanh chóng lên bảng để tranh lượt nói tiếp theo",
                "Chê bai bài nói của bạn dở tệ ngay trước cả lớp",
                "Im lặng và không có bất kỳ phản hồi hay tương tác nào"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ ngữ nào dưới đây thích hợp để kết thúc bài giới thiệu phim và cảm ơn người nghe?",
            "options": [
                "Cảm ơn thầy cô và các bạn đã lắng nghe bài thuyết trình của mình!",
                "Thế là hết bài rồi, mình xin phép đi xuống bàn đây!",
                "Các bạn có thấy bộ phim này dở tệ giống mình không?",
                "Mình đã đọc xong toàn bộ văn bản ghi chép của mình rồi."
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Vẽ sơ đồ tư duy trước khi trình bày nói giúp gì cho tư duy của học sinh?",
            "options": [
                "Sắp xếp thông tin logic, mạch lạc, dễ nhớ và không bị sót ý quan trọng",
                "Làm bài thuyết trình dài ra gấp đôi để chiếm nhiều thời gian nói",
                "Không cần chuẩn bị bài ở nhà vẫn có thể lên bảng nói trôi chảy",
                "Để vẽ các bức tranh hoạt hình đẹp mắt trang trí cho bài học"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Khi người nghe đặt câu hỏi thảo luận về ý nghĩa bộ phim, người trình bày nên phản hồi ra sao?",
            "options": [
                "Lắng nghe câu hỏi, trả lời vui vẻ, lịch sự và cảm ơn ý kiến đóng góp của bạn",
                "Từ chối trả lời vì câu hỏi nằm ngoài phần chuẩn bị của mình",
                "Tỏ thái độ tức giận vì bạn dám thắc mắc bài nói của mình",
                "Yêu cầu giáo viên trả lời hộ câu hỏi thảo luận đó"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// ==========================================
// ===== PHẦN HÀM XỬ LÝ TƯƠNG TÁC JS =======
// ==========================================

// 1. Lưu và kiểm tra Sơ đồ tư duy
window.kiemTraSoDo119 = function() {
    const tenPhim = document.getElementById('mindmap-vn119-tenphim')?.value.trim();
    const theLoai = document.getElementById('mindmap-vn119-theloai')?.value.trim();
    const nhanVat = document.getElementById('mindmap-vn119-nhanvat')?.value.trim();
    const noiDung = document.getElementById('mindmap-vn119-noidung')?.value.trim();
    const camXuc = document.getElementById('mindmap-vn119-camxuc')?.value.trim();
    const lyDo = document.getElementById('mindmap-vn119-lydothich')?.value.trim();
    const phuongTien = document.getElementById('mindmap-vn119-phuongtien')?.value.trim();

    const fb = document.getElementById('fb-vn119-sodo');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!tenPhim || !theLoai || !nhanVat || !noiDung || !camXuc || !lyDo) {
        fb.innerHTML = '⚠️ Em hãy điền đầy đủ các thông tin cốt lõi trong sơ đồ tư duy để chuẩn bị bài nói thật tốt nhé!';
        fb.className = 'mt-4 p-4 rounded-xl text-base font-bold text-center max-w-xl mx-auto bg-amber-100 text-amber-950 border border-amber-300';
        return;
    }

    fb.innerHTML = `🎉 Sơ đồ tư duy đã được lưu thành công! Đề cương bài nói của em đã sẵn sàng. Hãy dựa vào thông tin bộ phim <strong>"${tenPhim}"</strong> để tiến hành thực hành thuyết trình ở phần tiếp theo nhé!`;
    fb.className = 'mt-4 p-4 rounded-xl text-base font-bold text-center max-w-xl mx-auto bg-emerald-100 text-emerald-950 border border-emerald-305 shadow-sm';
};

// 2. Chức năng Speech to Text (Giả lập nói bài thuyết trình)
let boGhiAm119 = null;
window.toggleRecord119 = function() {
    const statusDiv = document.getElementById('status-vn119-record');
    const textarea = document.getElementById('ans-vn119-speech');
    const micIcon = document.getElementById('mic-icon-119');

    if (!textarea || !statusDiv || !micIcon) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        // Trình duyệt không hỗ trợ SpeechRecognition -> Giả lập
        if (statusDiv.classList.contains('hidden')) {
            statusDiv.classList.remove('hidden');
            statusDiv.innerText = '🎙️ Trình duyệt không hỗ trợ Micro trực tiếp. Giả lập nói: "Xin chào thầy cô và các bạn, hôm nay mình xin giới thiệu về bộ phim hoạt hình Vua sư tử..."';
            micIcon.innerText = '🛑';
            setTimeout(() => {
                const textGiaLap = 'Chào thầy cô và các bạn, sau đây mình xin trình bày về bộ phim hoạt hình Vua sư tử mà mình vô cùng yêu thích. Bộ phim kể về cuộc đời đầy thử thách của chú sư tử Simba nhỏ bé từ khi sinh ra cho đến khi trưởng thành, tìm lại lòng dũng cảm để bảo vệ vương quốc. Mình vô cùng xúc động trước tình cảm cha con ấm áp và bộ phim mang lại bài học rất ý nghĩa về lòng quả cảm.';
                textarea.value = textarea.value ? textarea.value + ' ' + textGiaLap : textGiaLap;
                statusDiv.classList.add('hidden');
                micIcon.innerText = '🎤';
            }, 3000);
        } else {
            statusDiv.classList.add('hidden');
            micIcon.innerText = '🎤';
        }
        return;
    }

    if (boGhiAm119) {
        boGhiAm119.stop();
        boGhiAm119 = null;
        statusDiv.classList.add('hidden');
        micIcon.innerText = '🎤';
        return;
    }

    try {
        boGhiAm119 = new SpeechRecognition();
        boGhiAm119.lang = 'vi-VN';
        boGhiAm119.interimResults = false;
        boGhiAm119.maxAlternatives = 1;

        boGhiAm119.onstart = function() {
            statusDiv.innerText = '🎙️ Hệ thống đang thu âm bài nói của em... Hãy thuyết trình thật rõ ràng!';
            statusDiv.classList.remove('hidden');
            micIcon.innerText = '🛑';
        };

        boGhiAm119.onresult = function(event) {
            const resultText = event.results[0][0].transcript;
            textarea.value = textarea.value ? textarea.value + ' ' + resultText : resultText;
        };

        boGhiAm119.onerror = function(event) {
            console.error('Lỗi thu âm nói:', event.error);
            statusDiv.innerText = '❌ Gặp lỗi thu âm nói: ' + event.error + '. Vui lòng thử lại!';
        };

        boGhiAm119.onend = function() {
            statusDiv.classList.add('hidden');
            micIcon.innerText = '🎤';
            boGhiAm119 = null;
        };

        boGhiAm119.start();
    } catch (e) {
        console.error(e);
        statusDiv.innerText = '❌ Không thể khởi động thu âm.';
        statusDiv.classList.remove('hidden');
    }
};

// 3. AI Thầy E đánh giá bài thuyết trình nói
window.kiemTraTrinhBay119 = function() {
    const text = document.getElementById('ans-vn119-speech')?.value.trim();
    const fb = document.getElementById('fb-vn119-trinhbay');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E nhắc nhở:</h5>
                    <p class="text-lg">Em hãy thực hành thuyết trình và nói vào micro (hoặc viết bài phát biểu) trước khi gửi thầy chấm nhé!</p>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-950 border border-amber-300';
        return;
    }

    const words = text.split(/\s+/).filter(w => w.length > 0);
    if (words.length < 50) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-rose-900">AI Thầy E góp ý:</h5>
                    <p class="text-lg">Bài phát biểu thuyết trình hơi ngắn (chỉ có ${words.length} từ). Em nên phát biểu dài hơn (tối thiểu 50 từ) để trình bày đầy đủ thông tin chung, bối cảnh phim và cảm xúc sâu sắc nhé!</p>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-rose-100 text-rose-950 border border-rose-300';
        return;
    }

    // Kiểm tra cấu trúc bài giới thiệu
    const introductions = ['phim', 'hoạt hình', 'khoa học', 'tài liệu', 'giới thiệu', 'trình bày'];
    const hasIntro = introductions.some(k => text.toLowerCase().includes(k));

    if (!hasIntro) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E góp ý:</h5>
                    <p class="text-lg">Bài nói của em cần bắt đầu bằng lời giới thiệu chung về tên phim và thể loại phim (Ví dụ: <em>Chào các bạn, hôm nay mình giới thiệu bộ phim hoạt hình...</em>) để mọi người dễ theo dõi nhé!</p>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-950 border border-amber-300';
        return;
    }

    // Kiểm tra từ cảm xúc và ý nghĩa
    const emotionKeywords = ['yêu mến', 'yêu thích', 'ấn tượng', 'thích thú', 'vui sướng', 'bài học', 'ý nghĩa', 'dũng cảm', 'tình cảm', 'bạn bè', 'xúc động', 'nhân hậu'];
    const hasEmotion = emotionKeywords.some(kw => text.toLowerCase().includes(kw));

    if (!hasEmotion) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E góp ý:</h5>
                    <p class="text-lg">Em nên lồng ghép thêm cảm xúc cá nhân khi xem phim hoặc các từ ngữ bộc lộ lý do yêu thích (Ví dụ: <em>xúc động, ý nghĩa, yêu mến, dũng cảm...</em>) để bài thuyết trình nói thêm phần truyền cảm nhé!</p>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-950 border border-amber-300';
        return;
    }

    fb.innerHTML = `
        <div class="flex items-start gap-4 animate-fade-in">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-950">AI Thầy E nhận xét bài thuyết trình Nói:</h5>
                <p class="text-lg mb-2">Thầy rất ấn tượng với bài nói của em! Giọng điệu bài thuyết trình tự nhiên, bố cục 3 phần rõ ràng từ giới thiệu tên phim đến tóm tắt chi tiết diễn biến và bày tỏ cảm xúc rất sâu sắc.</p>
                <span class="text-xl font-black bg-emerald-500 text-white px-3 py-1 rounded-lg shadow-sm">Thầy chấm đạt yêu cầu: 10/10 điểm</span>
            </div>
        </div>
    `;
    fb.className = 'p-5 rounded-2xl font-bold bg-emerald-100 text-emerald-950 border border-emerald-300 shadow-md';
};

// 4. Xác nhận đánh giá checklist dây phơi
window.kiemTraDanhGia119 = function() {
    const tc1 = document.getElementById('ck-vn119-tc1')?.checked;
    const tc2 = document.getElementById('ck-vn119-tc2')?.checked;
    const tc3 = document.getElementById('ck-vn119-tc3')?.checked;
    const tc4 = document.getElementById('ck-vn119-tc4')?.checked;

    const fb = document.getElementById('fb-vn119-danhgia');
    if (!fb) return;
    fb.classList.remove('hidden');

    const score = [tc1, tc2, tc3, tc4].filter(Boolean).length;

    if (score === 4) {
        fb.innerHTML = '🎉 Xuất sắc! Em hoặc bạn đã đạt tối đa cả 4 tiêu chí đánh giá bài Nói và Nghe. Hãy phát huy tinh thần học tập tích cực này nhé!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-emerald-100 text-emerald-950 shadow-sm';
    } else if (score >= 2) {
        fb.innerHTML = `👍 Đạt được ${score}/4 tiêu chí đánh giá. Em và bạn hãy chú ý rèn luyện thêm các kỹ năng nói và nghe còn thiếu để hoàn thiện hơn nhé!`;
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-sky-100 text-sky-950 shadow-sm';
    } else {
        fb.innerHTML = `⚠️ Mới chỉ đạt ${score}/4 tiêu chí. Hãy xem kỹ lại phần chuẩn bị và thực hành phát biểu to, rõ ràng hơn nhé!`;
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-amber-100 text-amber-950 shadow-sm';
    }
};

// 5. Nộp bài hoàn thành global
window.submitVn119Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 119',
            '🗣️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎉</span><p class="text-xl md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành xong hoạt động Nói và nghe: Bộ phim yêu thích!</p><p class="text-lg text-gray-700 mt-3">Kỹ năng chuẩn bị và thuyết trình tự tin sẽ giúp em học tốt hơn các bài học sau này!</p></div>'
        );
    } else {
        alert('Chúc mừng em đã hoàn thành bài Nói và nghe!');
    }
};
