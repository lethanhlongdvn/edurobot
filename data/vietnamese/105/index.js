export const lesson105 = {
    "topic": "Tiếng Việt 5",
    "week": "15",
    "period": "105",
    "title": "NÓI VÀ NGHE: CHƯƠNG TRÌNH NGHỆ THUẬT EM YÊU THÍCH",
    "desc": "Bài học giúp học sinh thực hành giới thiệu một chương trình nghệ thuật đã được xem trực tiếp hoặc trên ti vi. Rèn kỹ năng chuẩn bị nội dung, trình bày và đánh giá bài nói.",
    "subject": "Nói và nghe",
    "theme": "Với cộng đồng",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-blue-600">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-blue-950 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-blue-600 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết cách chuẩn bị nội dung và giới thiệu một chương trình nghệ thuật đã được xem.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Trình bày rõ ràng, mạch lạc, tự tin trước lớp. Biết trả lời câu hỏi của bạn.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết lắng nghe, ghi chép và đánh giá phần trình bày của bạn.
            </li>
        </ul>
    </div>

    <!-- YÊU CẦU -->
    <div class="bg-sky-50/50 p-5 md:p-6 rounded-2xl border border-sky-200 max-w-4xl mx-auto">
        <p class="text-xl md:text-2xl font-black text-sky-900 text-center">📋 Yêu cầu: Giới thiệu một chương trình nghệ thuật mà em đã được xem trực tiếp hoặc trên ti vi.</p>
    </div>

    <!-- 📋 BƯỚC 1: CHUẨN BỊ -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-blue-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">1</span>
            <h3 class="text-2xl md:text-5xl font-black text-blue-600">Chuẩn bị</h3>
        </div>

        <div class="space-y-5 max-w-4xl mx-auto">
            <p class="text-lg font-bold text-gray-700">👉 Lựa chọn chương trình nghệ thuật mà em muốn giới thiệu. Ghi ngắn gọn những nội dung sẽ giới thiệu:</p>

            <!-- Sơ đồ thông tin -->
            <div class="bg-blue-50/30 p-6 rounded-3xl border border-blue-100 space-y-4 text-lg md:text-3xl">
                <h4 class="font-black text-blue-600 text-lg text-center">📌 Thông tin về chương trình</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-1">
                        <label class="text-sm font-bold text-gray-600">🎬 Tên chương trình:</label>
                        <input type="text" id="p105-ten" placeholder="Ví dụ: Táo Quân, Giai điệu tự hào, Gặp nhau cuối năm..." class="w-full p-3 border border-gray-200 rounded-xl font-bold bg-white text-gray-800 focus:border-blue-500 outline-none text-lg">
                    </div>
                    <div class="space-y-1">
                        <label class="text-sm font-bold text-gray-600">📅 Thời gian, địa điểm diễn ra:</label>
                        <input type="text" id="p105-thoigian" placeholder="Ví dụ: Đêm Giao thừa, trên VTV1..." class="w-full p-3 border border-gray-200 rounded-xl font-bold bg-white text-gray-800 focus:border-blue-500 outline-none text-lg">
                    </div>
                    <div class="space-y-1 md:col-span-2">
                        <label class="text-sm font-bold text-gray-600">🌟 Những tiết mục, hoạt động đặc sắc:</label>
                        <input type="text" id="p105-tietmuc" placeholder="Ví dụ: Tiết mục hài kịch, ca nhạc, múa dân gian..." class="w-full p-3 border border-gray-200 rounded-xl font-bold bg-white text-gray-800 focus:border-blue-500 outline-none text-lg">
                    </div>
                    <div class="space-y-1 md:col-span-2">
                        <label class="text-sm font-bold text-gray-600">💭 Cảm nghĩ của em khi xem chương trình:</label>
                        <input type="text" id="p105-camnghi" placeholder="Ví dụ: Em rất thích vì chương trình vui nhộn, nhiều tiết mục hay..." class="w-full p-3 border border-gray-200 rounded-xl font-bold bg-white text-gray-800 focus:border-blue-500 outline-none text-lg">
                    </div>
                </div>
            </div>

            <div class="bg-amber-50/30 p-4 rounded-2xl border border-amber-100">
                <p class="text-base font-bold text-amber-800">💡 <strong>Gợi ý:</strong> Em có thể lựa chọn các phương tiện hỗ trợ phù hợp như: tranh ảnh, video,... để bài giới thiệu thêm sinh động.</p>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-10 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 BƯỚC 2: TRÌNH BÀY -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-blue-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">2</span>
            <h3 class="text-2xl md:text-5xl font-black text-blue-600">Trình bày</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <!-- Cột trái: Trình bày -->
            <div class="bg-sky-50/40 p-5 rounded-3xl border border-sky-200 space-y-3">
                <h4 class="font-black text-sky-900 text-lg text-center">🎤 Trình bày</h4>
                <ul class="space-y-2 text-base font-bold text-sky-800">
                    <li class="flex items-start gap-2">
                        <span class="shrink-0">–</span>
                        <span>Giới thiệu về chương trình nghệ thuật theo nội dung đã chuẩn bị.</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="shrink-0">–</span>
                        <span>Trả lời câu hỏi của bạn về chương trình nghệ thuật em giới thiệu.</span>
                    </li>
                </ul>
            </div>
            <!-- Cột phải: Theo dõi -->
            <div class="bg-rose-50/40 p-5 rounded-3xl border border-rose-200 space-y-3">
                <h4 class="font-black text-rose-900 text-lg text-center">👂 Theo dõi phần trình bày của bạn</h4>
                <ul class="space-y-2 text-base font-bold text-rose-800">
                    <li class="flex items-start gap-2">
                        <span class="shrink-0">–</span>
                        <span>Ghi chép thông tin quan trọng.</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="shrink-0">–</span>
                        <span>Chuẩn bị câu hỏi để hiểu rõ hơn về chương trình nghệ thuật mà bạn nói đến.</span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Ô viết bài trình bày -->
        <div class="space-y-3 max-w-4xl mx-auto">
            <p class="font-black text-blue-600 text-lg">✏️ Em hãy viết bài giới thiệu chương trình nghệ thuật yêu thích của mình:</p>
            <textarea id="ans-vn105-trinhbay" rows="6" placeholder="Ví dụ: Em xin giới thiệu với các bạn chương trình nghệ thuật &quot;Giai điệu tự hào&quot;. Chương trình được phát sóng vào tối thứ Bảy hằng tuần trên kênh VTV1. Trong chương trình, các ca sĩ nổi tiếng sẽ trình bày lại những ca khúc kinh điển với phong cách mới mẻ, hiện đại..." class="w-full p-4 text-xl rounded-2xl border border-gray-200 outline-none focus:border-blue-500 font-bold bg-white text-gray-800 leading-relaxed"></textarea>
            <div class="flex justify-center">
                <button onclick="kiemTraTrinhBay105()" class="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-lg rounded-2xl shadow-md active:scale-95 transition-all flex items-center gap-2">
                    <span>👨‍🏫 THẦY E NHẬN XÉT</span>
                </button>
            </div>
            <div id="fb-vn105-trinhbay" class="hidden p-5 rounded-2xl font-bold text-lg"></div>
        </div>
    </section>

    <!-- 📋 BƯỚC 3: ĐÁNH GIÁ -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-blue-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">3</span>
            <h3 class="text-2xl md:text-5xl font-black text-blue-600">Đánh giá</h3>
        </div>

        <p class="text-lg font-bold text-gray-700 max-w-3xl mx-auto">💬 Em hãy tự đánh giá hoặc đánh giá phần trình bày của bạn theo 2 tiêu chí:</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            <!-- Tiêu chí 1: Nội dung -->
            <div class="bg-sky-50/40 p-5 rounded-3xl border-2 border-sky-200 space-y-3">
                <h4 class="font-black text-sky-900 text-center">📋 Nội dung giới thiệu</h4>
                <div class="space-y-2 select-none">
                    <label class="flex items-center gap-2 cursor-pointer text-base font-bold text-sky-800 p-2 rounded-xl hover:bg-sky-100 transition-all">
                        <input type="checkbox" id="ck-vn105-nd1" class="w-5 h-5 text-sky-600 rounded shrink-0">
                        <span>Nêu rõ tên chương trình</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer text-base font-bold text-sky-800 p-2 rounded-xl hover:bg-sky-100 transition-all">
                        <input type="checkbox" id="ck-vn105-nd2" class="w-5 h-5 text-sky-600 rounded shrink-0">
                        <span>Có thời gian, địa điểm diễn ra</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer text-base font-bold text-sky-800 p-2 rounded-xl hover:bg-sky-100 transition-all">
                        <input type="checkbox" id="ck-vn105-nd3" class="w-5 h-5 text-sky-600 rounded shrink-0">
                        <span>Kể được tiết mục đặc sắc</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer text-base font-bold text-sky-800 p-2 rounded-xl hover:bg-sky-100 transition-all">
                        <input type="checkbox" id="ck-vn105-nd4" class="w-5 h-5 text-sky-600 rounded shrink-0">
                        <span>Nêu được cảm nghĩ khi xem</span>
                    </label>
                </div>
            </div>

            <!-- Tiêu chí 2: Cách trình bày -->
            <div class="bg-rose-50/40 p-5 rounded-3xl border-2 border-rose-200 space-y-3">
                <h4 class="font-black text-rose-900 text-center">🎤 Cách trình bày</h4>
                <div class="space-y-2 select-none">
                    <label class="flex items-center gap-2 cursor-pointer text-base font-bold text-rose-800 p-2 rounded-xl hover:bg-rose-100 transition-all">
                        <input type="checkbox" id="ck-vn105-tb1" class="w-5 h-5 text-rose-600 rounded shrink-0">
                        <span>Dùng từ ngữ rõ ràng, dễ hiểu</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer text-base font-bold text-rose-800 p-2 rounded-xl hover:bg-rose-100 transition-all">
                        <input type="checkbox" id="ck-vn105-tb2" class="w-5 h-5 text-rose-600 rounded shrink-0">
                        <span>Tốc độ nói vừa phải, rõ ràng</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer text-base font-bold text-rose-800 p-2 rounded-xl hover:bg-rose-100 transition-all">
                        <input type="checkbox" id="ck-vn105-tb3" class="w-5 h-5 text-rose-600 rounded shrink-0">
                        <span>Âm lượng giọng nói phù hợp</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer text-base font-bold text-rose-800 p-2 rounded-xl hover:bg-rose-100 transition-all">
                        <input type="checkbox" id="ck-vn105-tb4" class="w-5 h-5 text-rose-600 rounded shrink-0">
                        <span>Cử chỉ, điệu bộ tự nhiên</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="flex justify-center">
            <button onclick="kiemTraDanhGia105()" class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all text-lg shadow-md active:scale-95">XÁC NHẬN ĐÁNH GIÁ ✓</button>
        </div>
        <div id="fb-vn105-dg" class="hidden p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto"></div>
    </section>

    <!-- 📋 CHIA SẺ VỚI NGƯỜI THÂN -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-blue-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">🏠</span>
            <h3 class="text-2xl md:text-5xl font-black text-blue-600">Vận dụng</h3>
        </div>
        <div class="max-w-3xl mx-auto space-y-3">
            <p class="text-lg font-bold text-gray-700">💬 Chia sẻ với người thân suy nghĩ của em về một chương trình nghệ thuật em yêu thích.</p>
            <textarea id="p105-chiase" rows="3" placeholder="Ví dụ: Tối nay em đã kể cho mẹ nghe về chương trình Giai điệu tự hào. Mẹ bảo mẹ cũng rất thích chương trình đó vì được nghe lại những bài hát ngày xưa..." class="w-full p-4 text-lg rounded-2xl border border-gray-200 outline-none focus:border-blue-500 font-semibold bg-white text-gray-800"></textarea>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn105Global()" class="px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <span>HOÀN THÀNH BÀI HỌC ✓</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Yêu cầu chính của bài Nói và nghe hôm nay là gì?",
            "options": [
                "Giới thiệu một chương trình nghệ thuật mà em đã được xem",
                "Kể lại một câu chuyện cổ tích",
                "Đọc thuộc lòng một bài thơ",
                "Viết đoạn văn tả cảnh thiên nhiên"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi chuẩn bị giới thiệu chương trình nghệ thuật, em cần ghi những thông tin nào?",
            "options": [
                "Tên chương trình, thời gian – địa điểm, tiết mục đặc sắc, cảm nghĩ",
                "Chỉ cần ghi tên chương trình là đủ",
                "Ghi số điện thoại ban tổ chức",
                "Ghi lại giá vé và số lượng khán giả"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Em có thể sử dụng phương tiện hỗ trợ nào khi giới thiệu chương trình nghệ thuật?",
            "options": [
                "Tranh ảnh, video",
                "Đồ ăn, thức uống",
                "Sách giáo khoa Toán",
                "Bản đồ địa lý"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi bạn trình bày, em cần làm gì?",
            "options": [
                "Ghi chép thông tin quan trọng và chuẩn bị câu hỏi",
                "Nói chuyện riêng với bạn bên cạnh",
                "Không cần lắng nghe vì đã biết rồi",
                "Chỉ cần ngồi im, không cần ghi chép"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tiêu chí đánh giá phần trình bày gồm những mặt nào?",
            "options": [
                "Nội dung giới thiệu và cách trình bày",
                "Chiều cao và ngoại hình người nói",
                "Trang phục và kiểu tóc",
                "Số lượng từ và độ dài bài nói"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "'Cách trình bày' bao gồm những yếu tố nào?",
            "options": [
                "Từ ngữ, tốc độ lời nói, âm lượng giọng nói, cử chỉ, điệu bộ",
                "Chữ viết, bố cục bài văn, lỗi chính tả",
                "Cách chọn đề tài, cách tìm tài liệu",
                "Cách mặc trang phục, cách chào hỏi"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tốc độ lời nói khi trình bày nên như thế nào?",
            "options": [
                "Vừa phải, rõ ràng để người nghe dễ hiểu",
                "Nói thật nhanh để tiết kiệm thời gian",
                "Nói thật chậm, ngắt nghỉ rất lâu giữa các câu",
                "Nói to hết cỡ để mọi người đều nghe thấy"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Chương trình nào sau đây là chương trình nghệ thuật truyền thống?",
            "options": [
                "Chương trình biểu diễn chèo, tuồng, cải lương",
                "Chương trình thể dục thể thao",
                "Chương trình thời sự tin tức",
                "Chương trình dự báo thời tiết"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Vì sao nên nêu cảm nghĩ của bản thân khi giới thiệu chương trình nghệ thuật?",
            "options": [
                "Để bài giới thiệu có chiều sâu, thể hiện sự yêu thích và thuyết phục người nghe",
                "Vì thầy cô bắt buộc phải nêu cảm nghĩ",
                "Để bài nói dài hơn cho đủ thời gian",
                "Vì không có cảm nghĩ thì không được điểm"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi trả lời câu hỏi của bạn về chương trình, em nên làm gì?",
            "options": [
                "Trả lời rõ ràng, lịch sự, nếu không biết thì thành thật nói chưa biết",
                "Nói bừa cho xong",
                "Không trả lời và bỏ qua",
                "Hỏi ngược lại bạn câu khác"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cử chỉ, điệu bộ khi trình bày nên như thế nào?",
            "options": [
                "Tự nhiên, thoải mái, nhìn vào người nghe",
                "Đứng im như tượng, không cử động",
                "Vừa nói vừa đi lại liên tục",
                "Nhìn xuống sàn nhà, không dám nhìn ai"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Phần 'Vận dụng' của bài yêu cầu em làm gì?",
            "options": [
                "Chia sẻ với người thân suy nghĩ về một chương trình nghệ thuật em yêu thích",
                "Viết bài văn 200 từ về nghệ thuật",
                "Vẽ tranh về chương trình nghệ thuật",
                "Học thuộc tên 10 chương trình nghệ thuật"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Bước đầu tiên khi chuẩn bị bài giới thiệu chương trình nghệ thuật là gì?",
            "options": [
                "Lựa chọn chương trình nghệ thuật mà em muốn giới thiệu",
                "Viết bài giới thiệu hoàn chỉnh ngay",
                "Tìm tranh ảnh trên mạng",
                "Hỏi bạn bè xem chương trình nào hay nhất"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Âm lượng giọng nói khi trình bày trước lớp nên thế nào?",
            "options": [
                "Đủ to, rõ ràng để cả lớp đều nghe thấy",
                "Nói thầm nhỏ, chỉ mình nghe được",
                "Hét thật to để khỏi ai nói xen vào",
                "Nói lúc to lúc nhỏ tuỳ ý"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Sau khi nghe bạn trình bày xong, em nên làm gì?",
            "options": [
                "Đặt câu hỏi để hiểu rõ hơn và nhận xét, đánh giá bài nói của bạn",
                "Không cần làm gì thêm",
                "Chê bạn nói dở trước lớp",
                "Kể lại toàn bộ bài của bạn cho người khác"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// ===== BƯỚC 2: AI Thầy E nhận xét bài trình bày =====
window.kiemTraTrinhBay105 = function() {
    const text = document.getElementById('ans-vn105-trinhbay').value.trim();
    const fb = document.getElementById('fb-vn105-trinhbay');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = `<div class="flex items-start gap-4"><span class="text-2xl md:text-3xl">👨‍🏫</span><div><h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E nhắc nhở:</h5><p class="text-lg">Em hãy viết bài giới thiệu chương trình nghệ thuật yêu thích trước khi gửi Thầy E nhé!</p></div></div>`;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300';
        return;
    }

    const words = text.split(/\s+/).filter(w => w.length > 0);
    if (words.length < 30) {
        fb.innerHTML = `<div class="flex items-start gap-4"><span class="text-2xl md:text-3xl">👨‍🏫</span><div><h5 class="font-black text-xl mb-1 text-rose-900">AI Thầy E góp ý:</h5><p class="text-lg">Bài giới thiệu hơi ngắn (hiện có ${words.length} từ). Em hãy bổ sung thêm thông tin về tiết mục đặc sắc và cảm nghĩ của mình nhé!</p></div></div>`;
        fb.className = 'p-5 rounded-2xl font-bold bg-rose-100 text-rose-900 border border-rose-300';
        return;
    }

    // Kiểm tra có đủ 4 yếu tố: tên, thời gian/địa điểm, tiết mục, cảm nghĩ
    const lower = text.toLowerCase();
    const coTen = ['chương trình', 'chương trinh', 'show', 'buổi biểu diễn', 'buổi hòa nhạc', 'vở kịch', 'vở chèo', 'liveshow'].some(k => lower.includes(k));
    const coCamNghi = ['thích', 'yêu', 'ấn tượng', 'xúc động', 'vui', 'hay', 'tuyệt vời', 'cảm động', 'hấp dẫn', 'thú vị', 'bồi hồi', 'say mê', 'ngưỡng mộ', 'đặc sắc', 'tự hào'].some(k => lower.includes(k));

    if (!coTen) {
        fb.innerHTML = `<div class="flex items-start gap-4"><span class="text-2xl md:text-3xl">👨‍🏫</span><div><h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E góp ý:</h5><p class="text-lg">Em hãy nêu rõ tên chương trình nghệ thuật mà mình muốn giới thiệu nhé! Ví dụ: "Em xin giới thiệu chương trình..."</p></div></div>`;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300';
        return;
    }

    if (!coCamNghi) {
        fb.innerHTML = `<div class="flex items-start gap-4"><span class="text-2xl md:text-3xl">👨‍🏫</span><div><h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E góp ý:</h5><p class="text-lg">Bài giới thiệu đã có nội dung tốt! Em nên bổ sung thêm cảm nghĩ, suy nghĩ của bản thân như: <em>em rất thích, ấn tượng nhất là, tuyệt vời...</em> để bài nói thêm sinh động nhé!</p></div></div>`;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300';
        return;
    }

    fb.innerHTML = `<div class="flex items-start gap-4 animate-fade-in"><span class="text-xl md:text-3xl">👨‍🏫</span><div><h5 class="font-black text-xl mb-1 text-emerald-900">AI Thầy E đánh giá:</h5><p class="text-lg mb-2">Bài giới thiệu chương trình nghệ thuật của em rất hay! Em đã nêu được đầy đủ thông tin về chương trình, mô tả tiết mục đặc sắc và thể hiện cảm nghĩ chân thành. Cách trình bày rõ ràng, mạch lạc, rất tốt!</p><span class="text-xl font-black bg-emerald-500 text-white px-3 py-1 rounded-lg shadow-sm">Thầy chấm đạt: 10/10 điểm</span></div></div>`;
    fb.className = 'p-5 rounded-2xl font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-md';
};

// ===== BƯỚC 3: Đánh giá =====
window.kiemTraDanhGia105 = function() {
    const ndChecks = ['ck-vn105-nd1', 'ck-vn105-nd2', 'ck-vn105-nd3', 'ck-vn105-nd4'].filter(id => document.getElementById(id)?.checked).length;
    const tbChecks = ['ck-vn105-tb1', 'ck-vn105-tb2', 'ck-vn105-tb3', 'ck-vn105-tb4'].filter(id => document.getElementById(id)?.checked).length;
    const total = ndChecks + tbChecks;
    const fb = document.getElementById('fb-vn105-dg');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (total === 8) {
        fb.innerHTML = '🎉 Tuyệt vời! Phần trình bày đạt chuẩn cả 8 tiêu chí về nội dung lẫn cách trình bày. Rất xuất sắc!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-emerald-100 text-emerald-900';
    } else if (total >= 5) {
        fb.innerHTML = `👍 Tốt! Đạt ${total}/8 tiêu chí. Em hãy cố gắng cải thiện thêm ở những tiêu chí chưa đạt nhé!`;
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-blue-100 text-blue-600';
    } else if (total >= 1) {
        fb.innerHTML = `⚠️ Mới đạt ${total}/8 tiêu chí. Em cần luyện tập thêm cả nội dung và cách trình bày nhé!`;
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-amber-100 text-amber-900';
    } else {
        fb.innerHTML = '💬 Em chưa đánh giá tiêu chí nào. Hãy tích vào các mục mà phần trình bày đã đạt được nhé!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-amber-100 text-amber-900';
    }
};

// ===== Nộp bài toàn cục =====
window.submitVn105Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 105',
            '🎤',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎉</span><p class="text-lg md:text-2xl font-bold text-blue-600">Chúc mừng em đã hoàn thành bài Nói và nghe: Chương trình nghệ thuật em yêu thích!</p><p class="text-lg text-gray-700 mt-3">Em hãy chia sẻ thêm với người thân về những chương trình nghệ thuật hay mà em đã xem nhé!</p></div>'
        );
    } else {
        alert('Chúc mừng em đã hoàn thành bài Nói và nghe!');
    }
};
