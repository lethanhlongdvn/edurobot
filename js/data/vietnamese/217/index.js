// Tiết 217: Nói và nghe: Di tích lịch sử
export const lesson217 = {
    "topic": "Tiếng Việt 5",
    "week": "31",
    "period": "217",
    "title": "NÓI VÀ NGHE: DI TÍCH LỊCH SỬ",
    "desc": "Thực hành chuẩn bị và tự tin giới thiệu về một di tích lịch sử tiêu biểu của Việt Nam, rèn luyện kỹ năng thuyết trình, giao tiếp và kỹ năng lắng nghe chủ động.",
    "subject": "Nói & Nghe",
    "theme": "Vì cuộc sống thanh bình",
    "audio": "",
    "content": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto pb-12">
        <!-- 🎯 Mục tiêu bài học -->
        <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
            <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl"></div>
            <h3 class="text-2xl md:text-3xl font-black text-blue-600 mb-4 flex items-center gap-3">
                <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
                Mục tiêu bài học
            </h3>
            <ul class="space-y-3 text-blue-600 font-bold text-xl md:text-2xl ml-2">
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Biết cách thu thập tư liệu và chuẩn bị đề cương giới thiệu một di tích lịch sử.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Tự tin diễn đạt trước lớp, có cử chỉ, điệu bộ tự nhiên và giọng nói to, rõ ràng.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Hình thành thói quen lắng nghe tích cực, biết đặt câu hỏi giao lưu và phản hồi lịch sự, tôn trọng bạn bè.
                </li>
            </ul>
        </div>

        <!-- 📖 Bước 1: Chuẩn bị & Chọn di tích (Bento Grid) -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100">
                <h3 class="text-2xl md:text-3xl font-black text-blue-955 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">1</span>
                    Lựa chọn di tích lịch sử để giới thiệu
                </h3>
                <p class="text-gray-500 font-bold text-lg mb-6">Em hãy chọn một trong các di tích lịch sử tiêu biểu dưới đây để xem gợi ý tư liệu chuẩn bị bài nói:</p>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <!-- Văn Miếu -->
                    <button onclick="window.showLandmark217('vanmieu')" class="p-6 bg-blue-50/50 hover:bg-blue-100/60 rounded-3xl border-2 border-blue-150 transition-all font-black text-blue-600 text-lg md:text-xl text-center flex flex-col items-center justify-center gap-3">
                        🏛️
                        <span>Văn Miếu - Quốc Tử Giám</span>
                    </button>
                    <!-- Bến Nhà Rồng -->
                    <button onclick="window.showLandmark217('nharong')" class="p-6 bg-orange-50/50 hover:bg-orange-100/60 rounded-3xl border-2 border-orange-150 transition-all font-black text-orange-900 text-lg md:text-xl text-center flex flex-col items-center justify-center gap-3">
                        🚢
                        <span>Bến Nhà Rồng</span>
                    </button>
                    <!-- Cố đô Huế -->
                    <button onclick="window.showLandmark217('hue')" class="p-6 bg-emerald-50/50 hover:bg-emerald-100/60 rounded-3xl border-2 border-emerald-150 transition-all font-black text-emerald-900 text-lg md:text-xl text-center flex flex-col items-center justify-center gap-3">
                        🏰
                        <span>Cố đô Huế</span>
                    </button>
                    <!-- Cổ Loa -->
                    <button onclick="window.showLandmark217('coloa')" class="p-6 bg-amber-50/50 hover:bg-amber-100/60 rounded-3xl border-2 border-amber-150 transition-all font-black text-amber-900 text-lg md:text-xl text-center flex flex-col items-center justify-center gap-3">
                        🌀
                        <span>Thành Cổ Loa</span>
                    </button>
                </div>

                <!-- Tư liệu chi tiết di tích -->
                <div id="fb-landmark-217" class="mt-8 p-6 md:p-8 bg-blue-50/20 rounded-[32px] border-2 border-blue-100 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center animate-in fade-in duration-300">
                    <div class="lg:col-span-2">
                        <img id="img-landmark-217" src="assets/images/vanmieu.png" alt="Ảnh di tích lịch sử" class="w-full aspect-[4/3] object-cover rounded-2xl border-4 border-white shadow-lg">
                    </div>
                    <div class="lg:col-span-3 space-y-4 text-gray-800">
                        <h4 id="title-landmark-217" class="text-2xl md:text-3xl font-black text-blue-600">Văn Miếu - Quốc Tử Giám</h4>
                        <div class="space-y-2 text-base md:text-lg font-semibold leading-relaxed">
                            <p>📍 <strong>Địa điểm:</strong> Quận Đống Đa, thủ đô Hà Nội.</p>
                            <p>⏳ <strong>Thời gian xây dựng:</strong> Được khởi lập vào năm 1070 dưới triều vua Lý Thánh Tông.</p>
                            <p>🗺️ <strong>Cảnh quan đặc sắc:</strong> Khuê Văn Các, hồ Thiên Quang Tỉnh, vườn bia Tiến sĩ lớn và khu nhà cổ kính, rợp bóng cây xanh cổ thụ.</p>
                            <p>📖 <strong>Ý nghĩa lịch sử:</strong> Là trường Đại học đầu tiên của Việt Nam, biểu trưng cho truyền thống hiếu học, tôn sư trọng đạo của dân tộc ta qua hàng ngàn năm.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `,
    "practice": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto pb-12">
        <!-- 🌀 Ví dụ định hướng (Văn Miếu - Quốc Tử Giám) -->
        <section class="w-full" id="ex-217-mindmap">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 space-y-6">
                <h3 class="text-2xl md:text-3xl font-black text-blue-955 mb-4 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">2</span>
                    Định hướng dàn ý thuyết trình di tích
                </h3>
                <p class="text-gray-500 font-bold text-lg">Nhấn vào từng câu hỏi dưới đây để xem thông tin cốt lõi giúp hoàn thiện bài nói về Văn Miếu - Quốc Tử Giám:</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- Ý 1 -->
                    <div class="p-5 bg-slate-50 hover:bg-blue-50/30 rounded-2xl border border-slate-200 cursor-pointer transition-colors" onclick="window.showGuidance217(1)">
                        <p class="font-black text-blue-600 text-lg md:text-xl mb-1">(1) Văn Miếu - Quốc Tử Giám ở đâu?</p>
                        <p id="gd-text-1" class="text-gray-600 font-semibold text-base md:text-lg hidden">Nằm ở quận Đống Đa, giữa lòng thủ đô Hà Nội lịch sử.</p>
                    </div>

                    <!-- Ý 2 -->
                    <div class="p-5 bg-slate-50 hover:bg-blue-50/30 rounded-2xl border border-slate-200 cursor-pointer transition-colors" onclick="window.showGuidance217(2)">
                        <p class="font-black text-blue-600 text-lg md:text-xl mb-1">(2) Được xây dựng từ khi nào?</p>
                        <p id="gd-text-2" class="text-gray-600 font-semibold text-base md:text-lg hidden">Khởi công xây dựng vào năm 1070 dưới triều nhà Lý (vua Lý Thánh Tông).</p>
                    </div>

                    <!-- Ý 3 -->
                    <div class="p-5 bg-slate-50 hover:bg-blue-50/30 rounded-2xl border border-slate-200 cursor-pointer transition-colors" onclick="window.showGuidance217(3)">
                        <p class="font-black text-blue-600 text-lg md:text-xl mb-1">(3) Kể tên một số công trình tiêu biểu?</p>
                        <p id="gd-text-3" class="text-gray-600 font-semibold text-base md:text-lg hidden">Khuê Văn Các, Thiên Quang Tỉnh (Giếng trăng trong), 82 tấm bia Tiến sĩ đặt trên lưng rùa đá, nhà Thái Học.</p>
                    </div>

                    <!-- Ý 4 -->
                    <div class="p-5 bg-slate-50 hover:bg-blue-50/30 rounded-2xl border border-slate-200 cursor-pointer transition-colors" onclick="window.showGuidance217(4)">
                        <p class="font-black text-blue-600 text-lg md:text-xl mb-1">(4) Vì sao là trường đại học đầu tiên?</p>
                        <p id="gd-text-4" class="text-gray-600 font-semibold text-base md:text-lg hidden">Năm 1076, vua Lý Nhân Tông cho lập Quốc Tử Giám cạnh Văn Miếu để làm nơi học tập của các hoàng tử và nhân tài hiếu học cả nước.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 🎙️ Luyện tập thuyết trình (Speech Builder) -->
        <section class="w-full" id="ex-217-speech">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 space-y-6">
                <h3 class="text-2xl md:text-3xl font-black text-blue-955 mb-2 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">3</span>
                    Luyện tập chuẩn bị bài thuyết trình của em
                </h3>
                <p class="text-gray-500 font-bold text-base md:text-lg">Viết hoặc ghi âm bài thuyết trình ngắn giới thiệu di tích lịch sử em tự chọn (tối thiểu 60 từ) và nhấn nút kiểm tra.</p>

                <div class="space-y-4">
                    <div class="flex items-center justify-between">
                        <label class="block text-lg font-black text-gray-700">🎙️ Bản thảo bài thuyết trình của em:</label>
                        <span id="char-count-217" class="text-sm font-bold text-gray-400">0 từ</span>
                    </div>

                    <div class="relative">
                        <textarea id="ipt-speech-217" rows="8" oninput="window.updateCharCount217()" class="w-full p-6 pr-14 rounded-3xl border-2 border-blue-150 focus:border-blue-500 outline-none font-bold text-lg md:text-xl transition-all leading-relaxed" placeholder="Kính chào cô và các bạn! Hôm nay em xin giới thiệu về di tích lịch sử... Di tích nằm ở... Được xây dựng vào năm... Điểm đặc biệt của di tích là..."></textarea>
                        
                        <button onclick="Lesson.toggleSpeechRec('ipt-speech-217')" class="absolute right-4 bottom-4 w-12 h-12 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-xl flex items-center justify-center text-blue-600 transition-colors shadow-md" title="Ghi âm thuyết trình">
                            🎤
                        </button>
                    </div>
                </div>

                <!-- Tiêu chuẩn tự kiểm soát -->
                <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3">
                    <p class="font-black text-gray-800 text-lg md:text-xl">✅ Tiêu chuẩn rèn luyện kỹ năng thuyết trình:</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <label class="flex items-center gap-3 font-bold text-gray-700 text-base md:text-lg cursor-pointer">
                            <input type="checkbox" id="chk-217-1" class="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                            <span>Giọng nói to, rõ ràng, truyền cảm</span>
                        </label>
                        <label class="flex items-center gap-3 font-bold text-gray-700 text-base md:text-lg cursor-pointer">
                            <input type="checkbox" id="chk-217-2" class="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                            <span>Có điệu bộ, cử chỉ tự tin phù hợp</span>
                        </label>
                        <label class="flex items-center gap-3 font-bold text-gray-700 text-base md:text-lg cursor-pointer">
                            <input type="checkbox" id="chk-217-3" class="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                            <span>Nhìn thẳng giao lưu với người nghe</span>
                        </label>
                    </div>
                </div>

                <div class="flex justify-end items-center gap-4"><button onclick="window.resetSpeech217()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="window.checkSpeech217();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-speech-217" class="hidden p-6 rounded-3xl font-bold text-lg md:text-xl mt-4 animate-in fade-in duration-300"></div>
            </div>
        </section>

        <!-- 📖 Tiêu chí giao tiếp và đánh giá (Bento Grid) -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 space-y-6">
                <h3 class="text-2xl md:text-3xl font-black text-blue-955 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">4</span>
                    Tiêu chí trao đổi, góp ý lẫn nhau
                </h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Người nói -->
                    <div class="p-6 bg-blue-50/30 rounded-3xl border border-blue-100 space-y-4">
                        <h4 class="font-black text-blue-600 text-xl md:text-2xl flex items-center gap-2">📢 TIÊU CHÍ NGƯỜI NÓI</h4>
                        <ul class="list-disc pl-6 space-y-2 text-gray-750 font-semibold text-base md:text-lg">
                            <li>Giới thiệu đầy đủ, mạch lạc thông tin di tích lịch sử.</li>
                            <li>Tự tin thể hiện cử chỉ, ánh mắt giao lưu với mọi người.</li>
                            <li>Sẵn sàng trả lời các câu hỏi thắc mắc của người nghe chu đáo.</li>
                        </ul>
                    </div>

                    <!-- Người nghe -->
                    <div class="p-6 bg-amber-50/30 rounded-3xl border border-amber-100 space-y-4">
                        <h4 class="font-black text-amber-900 text-xl md:text-2xl flex items-center gap-2">👂 TIÊU CHÍ NGƯỜI NGHE</h4>
                        <ul class="list-disc pl-6 space-y-2 text-gray-750 font-semibold text-base md:text-lg">
                            <li>Lắng nghe chăm chú, ghi chép nhanh thông tin nổi bật.</li>
                            <li>Tích cực đặt câu hỏi trao đổi văn minh, ý nghĩa.</li>
                            <li>Thể hiện thái độ lịch sự, tôn trọng bạn khi thuyết trình.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `,
    "questions": [
        {
            "question": "Di tích lịch sử Văn Miếu - Quốc Tử Giám nằm ở thành phố nào nước ta?",
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
            "question": "Văn Miếu - Quốc Tử Giám được khởi dựng đầu tiên vào năm nào dưới thời nhà Lý?",
            "options": [
                "Năm 1070",
                "Năm 1076",
                "Năm 1010",
                "Năm 1225"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Ai là vị vua cho thành lập Quốc Tử Giám bên cạnh Văn Miếu để làm trường đại học cho hoàng tử học?",
            "options": [
                "Vua Lý Nhân Tông",
                "Vua Lý Thánh Tông",
                "Vua Lý Thái Tổ",
                "Vua Trần Nhân Tông"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Công trình biểu tượng văn hóa tiêu biểu nằm ở Văn Miếu - Quốc Tử Giám là gì?",
            "options": [
                "Khuê Văn Các",
                "Chùa Một Cột",
                "Tháp Rùa",
                "Cầu Thê Húc"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Có tất cả bao nhiêu tấm bia Tiến sĩ đặt trên lưng rùa đá tại Văn Miếu - Quốc Tử Giám?",
            "options": [
                "82 tấm bia",
                "100 tấm bia",
                "50 tấm bia",
                "12 tấm bia"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Di tích lịch sử Bến Nhà Rồng tại Thành phố Hồ Chí Minh gắn liền với sự kiện lịch sử trọng đại nào?",
            "options": [
                "Bác Hồ ra đi tìm đường cứu nước vào ngày 5 tháng 6 năm 1911",
                "Chiến thắng lịch sử Điện Biên Phủ trên không năm 1972",
                "Lễ tuyên ngôn độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa năm 1945",
                "Khởi nghĩa Nam Kỳ chống thực dân Pháp"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Quần thể di tích Cố đô Huế là di sản văn hóa thế giới gắn liền với triều đại phong kiến nào ở nước ta?",
            "options": [
                "Triều Nguyễn",
                "Triều Lê",
                "Triều Lý",
                "Triều Trần"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Di tích lịch sử Thành Cổ Loa tại Hà Nội gắn liền với triều đại của vị vua nào trong truyền thuyết?",
            "options": [
                "An Dương Vương (Thục Phán)",
                "Vua Hùng Vương thứ 18",
                "Vua Đinh Bộ Lĩnh",
                "Vua Ngô Quyền"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Để chuẩn bị một bài giới thiệu di tích lịch sử tốt nhất, học sinh cần chuẩn bị thông tin nào?",
            "options": [
                "Tên di tích, địa chỉ, thời gian xây dựng, cảnh quan đặc trưng, ý nghĩa lịch sử văn hóa",
                "Chỉ cần chuẩn bị địa chỉ bản đồ của di tích",
                "Giá vé vào cửa tham quan di tích cụ thể",
                "Thời tiết khí hậu ngày học sinh định đi tham quan"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi trình bày bài thuyết trình trước tập thể lớp, người nói cần thể hiện cử chỉ như thế nào là phù hợp?",
            "options": [
                "Tự tin, nét mặt tươi cười giao lưu ánh mắt với người nghe, kết hợp điệu bộ tự nhiên",
                "Cầm tài liệu đọc thuộc lòng từ đầu đến cuối không nhìn ai",
                "Đứng yên cúi gầm mặt xuống đất nói lý nhí",
                "Nói rất nhanh để hoàn thành bài nói của mình thật mau"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tiêu chí nào sau đây thuộc về văn hóa lịch sự của người nghe khi bạn đang thuyết trình?",
            "options": [
                "Chăm chú lắng nghe, ghi chép ý chính và đặt câu hỏi giao lưu lịch sự sau bài thuyết trình",
                "Nói chuyện riêng gây mất trật tự lớp học",
                "Sử dụng điện thoại chơi game giải trí",
                "Lục lọi đồ dùng học tập của bạn khác"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khuê Văn Các tại Văn Miếu được chọn làm biểu tượng chính thức của thành phố nào?",
            "options": [
                "Thủ đô Hà Nội",
                "Thành phố Huế",
                "Thành phố Hải Phòng",
                "Thành phố Hồ Chí Minh"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Rùa đá cõng bia Tiến sĩ ở Quốc Tử Giám mang ý nghĩa sâu sắc biểu trưng cho điều gì?",
            "options": [
                "Sự bền vững trường tồn của tri thức và truyền thống tôn vinh nhân tài đất nước",
                "Sự chậm chạp trong học tập cần phải cải thiện",
                "Báo trước một vụ mùa thắng lợi của nhà nông",
                "Trang trí phong cảnh thiên nhiên cho sinh động"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Bến Nhà Rồng được xây dựng ban đầu trên ngã ba sông Sài Gòn từ năm nào?",
            "options": [
                "Năm 1863",
                "Năm 1911",
                "Năm 1945",
                "Năm 1975"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cổng chính bước vào hoàng cung Kinh thành Huế có tên gọi nổi tiếng là gì?",
            "options": [
                "Ngọ Môn",
                "Cửa Hiển Nhơn",
                "Cửa Chương Đức",
                "Cửa Thể Nhơn"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// Đăng ký toàn cục
window.lesson217 = lesson217;

// Thay đổi hiển thị thông tin di tích
window.showLandmark217 = function(id) {
    const title = document.getElementById('title-landmark-217');
    const img = document.getElementById('img-landmark-217');
    const box = document.getElementById('fb-landmark-217');
    const desc = box.querySelector('.space-y-2');

    // Chuyển động animation
    box.classList.remove('animate-in', 'fade-in');
    void box.offsetWidth; // Trigger reflow
    box.classList.add('animate-in', 'fade-in');

    if (id === 'vanmieu') {
        title.innerText = "Văn Miếu - Quốc Tử Giám";
        img.src = "assets/images/vanmieu.png";
        desc.innerHTML = `
            <p>📍 <strong>Địa điểm:</strong> Quận Đống Đa, thủ đô Hà Nội.</p>
            <p>⏳ <strong>Thời gian xây dựng:</strong> Được khởi lập vào năm 1070 dưới triều vua Lý Thánh Tông.</p>
            <p>🗺️ <strong>Cảnh quan đặc sắc:</strong> Khuê Văn Các, hồ Thiên Quang Tỉnh, vườn bia Tiến sĩ lớn và khu nhà cổ kính, rợp bóng cây xanh cổ thụ.</p>
            <p>📖 <strong>Ý nghĩa lịch sử:</strong> Là trường Đại học đầu tiên của Việt Nam, biểu trưng cho truyền thống hiếu học, tôn sư trọng đạo của dân tộc ta qua hàng ngàn năm.</p>
        `;
    } else if (id === 'nharong') {
        title.innerText = "Bến Nhà Rồng";
        img.src = "js/data/vietnamese/media__1781152933900.png"; // Fallback to existing project media
        desc.innerHTML = `
            <p>📍 <strong>Địa điểm:</strong> Quận 4, Thành phố Hồ Chí Minh.</p>
            <p>⏳ <strong>Thời gian xây dựng:</strong> Được xây dựng từ năm 1863 bởi thực dân Pháp.</p>
            <p>🗺️ <strong>Cảnh quan đặc sắc:</strong> Tòa nhà mang kiến trúc phương Tây với hai con rồng lớn chầu mặt trăng trên nóc nhà theo mô-típ Á Đông.</p>
            <p>📖 <strong>Ý nghĩa lịch sử:</strong> Ngày 5/6/1911, người thanh niên Nguyễn Tất Thành đã xuống tàu Amiral Latouche-Tréville ra đi tìm đường cứu nước.</p>
        `;
    } else if (id === 'hue') {
        title.innerText = "Quần thể di tích Cố đô Huế";
        img.src = "js/data/vietnamese/media__1781152956531.png"; // Fallback to existing project media
        desc.innerHTML = `
            <p>📍 <strong>Địa điểm:</strong> Thành phố Huế, tỉnh Thừa Thiên Huế.</p>
            <p>⏳ <strong>Thời gian xây dựng:</strong> Được xây dựng từ đầu thế kỷ XIX đến nửa đầu thế kỷ XX dưới triều Nguyễn.</p>
            <p>🗺️ <strong>Cảnh quan đặc sắc:</strong> Hoàng thành, Tử Cấm Thành, Ngọ Môn kì vĩ cùng các lăng tẩm và dòng sông Hương thơ mộng ôm trọn di tích.</p>
            <p>📖 <strong>Ý nghĩa lịch sử:</strong> Là trung tâm chính trị văn hóa phong kiến cuối cùng của Việt Nam, được UNESCO công nhận là di sản văn hóa thế giới đầu tiên của nước ta.</p>
        `;
    } else {
        title.innerText = "Thành Cổ Loa";
        img.src = "js/data/vietnamese/media__1781153108430.png"; // Fallback to existing project media
        desc.innerHTML = `
            <p>📍 <strong>Địa điểm:</strong> Huyện Đông Anh, thủ đô Hà Nội.</p>
            <p>⏳ <strong>Thời gian xây dựng:</strong> Được xây dựng vào khoảng thế kỷ III trước Công nguyên dưới thời Âu Lạc.</p>
            <p>🗺️ <strong>Cảnh quan đặc sắc:</strong> Bố cục hình xoáy ốc (thành 3 vòng đồng tâm), đền thờ vua An Dương Vương, am Mỵ Châu cổ kính.</p>
            <p>📖 <strong>Ý nghĩa lịch sử:</strong> Là tòa thành cổ nhất, quy mô lớn nhất nước ta, gắn liền với truyền thuyết nỏ thần cứu nước kỳ vĩ.</p>
        `;
    }
};

// Hiển thị/ẩn câu hỏi sơ đồ thuyết trình
window.showGuidance217 = function(index) {
    const text = document.getElementById('gd-text-' + index);
    if (text.classList.contains('hidden')) {
        text.classList.remove('hidden');
    } else {
        text.classList.add('hidden');
    }
};

// Cập nhật số từ của văn bản
window.updateCharCount217 = function() {
    const text = document.getElementById('ipt-speech-217').value.trim();
    const span = document.getElementById('char-count-217');
    if (!text) {
        span.innerText = "0 từ";
        return;
    }
    const words = text.split(/[\s\n\r]+/).filter(w => w.length > 0);
    span.innerText = words.length + " từ";
};

// Đánh giá bài nói/viết giới thiệu di tích
window.checkSpeech217 = function() {
    const text = document.getElementById('ipt-speech-217').value.trim();
    const fb = document.getElementById('fb-speech-217');

    const c1 = document.getElementById('chk-217-1').checked;
    const c2 = document.getElementById('chk-217-2').checked;
    const c3 = document.getElementById('chk-217-3').checked;

    fb.classList.remove('hidden');

    if (!text) {
        fb.className = "p-6 rounded-3xl font-bold text-lg md:text-xl bg-orange-100 text-orange-850 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em hãy soạn nội dung bài giới thiệu di tích lịch sử vào ô trước nhé!";
        return;
    }

    const words = text.split(/[\s\n\r]+/).filter(w => w.length > 0);
    if (words.length < 40) {
        fb.className = "p-6 rounded-3xl font-bold text-lg md:text-xl bg-orange-100 text-orange-850 border border-orange-200 mt-4";
        fb.innerHTML = `⚠️ Bài nói của em mới có ${words.length} từ. Em hãy viết bài dài hơn (tối thiểu 60 từ) để cung cấp đủ thông tin di tích nhé!`;
        return;
    }

    // Các từ khóa liên quan đến di tích lịch sử
    const keywordList = ["xây dựng", "lịch sử", "di tích", "thành lập", "triều đại", "vua", "địa điểm", "hà nội", "huế", "bến nhà rồng", "cổ loa", "văn miếu"];
    const textLower = text.toLowerCase();
    const matches = keywordList.filter(keyword => textLower.includes(keyword));

    let score = 70;
    let feedbackMsg = "";

    if (matches.length >= 3) {
        score += 20;
        feedbackMsg += "🌟 Thầy E đánh giá cao bài chuẩn bị của em! Nội dung chứa nhiều từ khóa lịch sử mô tả rất tốt địa danh. ";
    } else {
        feedbackMsg += "💡 Thầy E khuyên em nên bổ sung thêm thông tin về năm xây dựng, triều đại lịch sử hoặc các sự kiện nổi bật của di tích để phong phú hơn. ";
    }

    if (c1 && c2 && c3) {
        score += 10;
        feedbackMsg += "Bên cạnh đó, việc rèn luyện giọng điệu to rõ, cử chỉ ánh mắt tự tin sẽ giúp bài thuyết trình của em lôi cuốn người nghe tuyệt đối!";
    } else {
        feedbackMsg += "Hãy chú ý tự rèn luyện giọng nói và điệu bộ thuyết trình theo checklist của Thầy E nhé!";
    }

    // Hiển thị kết quả
    fb.className = "p-6 rounded-3xl font-bold text-lg md:text-xl bg-green-100 text-green-900 border border-green-200 mt-4";
    fb.innerHTML = `
        <div class="space-y-3">
            <p class="text-2xl md:text-3xl font-black text-green-955">📚 Đánh giá dàn bài nói của Thầy E (AI):</p>
            <p class="text-lg md:text-xl text-gray-800 leading-relaxed">${feedbackMsg}</p>
            <p class="text-xl md:text-2xl text-green-955 font-black mt-2">📊 Điểm thuyết trình: <span class="text-3xl md:text-4xl font-black text-green-700">${score}/100</span></p>
        </div>
    `;

    if (window.UI && typeof window.UI.showToast === 'function') {
        window.UI.showToast("Chấm điểm bài thuyết trình thành công!", "success");
    }
    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }

    // Lưu điểm
    if (typeof window.submitMathLesson === 'function') {
        window.submitMathLesson("Nói & Nghe Tiết 217: Giới thiệu di tích lịch sử", score, "ex-217-speech", 1, 1, 1);
    }
};

window.resetSpeech217 = function() {
    document.getElementById('ipt-speech-217').value = "";
    document.getElementById('chk-217-1').checked = false;
    document.getElementById('chk-217-2').checked = false;
    document.getElementById('chk-217-3').checked = false;
    document.getElementById('char-count-217').innerText = "0 từ";
    const fb = document.getElementById('fb-speech-217');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};
