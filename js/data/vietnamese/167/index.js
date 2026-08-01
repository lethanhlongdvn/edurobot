// Tiết 167: Viết - Đánh giá, chỉnh sửa đoạn văn thể hiện tình cảm, cảm xúc về một sự việc (Tuần 24)
export const lesson167 = {
    "topic": "Viết",
    "week": "24",
    "period": "167",
    "title": "VIẾT: ĐÁNH GIÁ, CHỈNH SỬA ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ MỘT SỰ VIỆC",
    "desc": "Học sinh học cách tự đánh giá, nhận xét, phát hiện và sửa các lỗi thường gặp trong đoạn văn thể hiện tình cảm, cảm xúc về một sự việc, đồng thời luyện tập viết lại các câu văn sinh động hơn.",
    "subject": "Viết",
    "theme": "Hương sắc trăm miền",
    "audio": "",
    "content": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto pb-12">
        <!-- 🎯 Mục tiêu bài học -->
        <div class="bg-amber-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-amber-600 shadow-lg relative overflow-hidden">
            <div class="absolute -right-10 -top-10 w-32 h-32 bg-amber-100/40 rounded-full blur-2xl"></div>
            <h3 class="text-2xl md:text-3xl font-black text-amber-900 mb-4 flex items-center gap-3">
                <span class="p-2 bg-amber-600 text-white rounded-xl shadow-md">🎯</span>
                Mục tiêu bài học
            </h3>
            <ul class="space-y-3 text-amber-800 font-bold text-xl md:text-2xl ml-2">
                <li class="flex items-start gap-2">
                    <span class="text-amber-950 font-black">•</span>
                    Nắm vững các tiêu chí tự đánh giá đoạn văn bộc lộ tình cảm, cảm xúc (không lạc ý, tránh lặp ý, dùng từ gợi tả chính xác).
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-amber-950 font-black">•</span>
                    Biết phát hiện lỗi sai trong bài viết của mình và viết lại một số câu văn sinh động, giàu hình ảnh hơn.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-amber-950 font-black">•</span>
                    Học tập cách hành văn, dùng từ gợi cảm xúc từ các đoạn văn mẫu đặc sắc của nhà văn Nguyễn Luân.
                </li>
            </ul>
        </div>

        <!-- 📊 Phần 1: Đánh giá bài viết -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-amber-100">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">1</div>
                    <h3 class="text-2xl md:text-3xl font-black text-amber-950">Đánh giá đoạn văn của em theo các tiêu chí dưới đây:</h3>
                </div>

                <div class="space-y-4">
                    <!-- Tiêu chí 1 -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between p-5 bg-amber-50/20 rounded-2xl border border-amber-100/50 gap-4">
                        <span class="text-xl font-bold text-gray-700">🔍 Bài viết tập trung vào sự việc chính, không bị lạc ý hay lặp ý.</span>
                        <div class="flex gap-1 star-group" data-row="1">
                            <span class="text-xl md:text-3xl text-gray-300 cursor-pointer transition-transform hover:scale-110" onclick="window.rateStar167(this, 1)">☆</span>
                            <span class="text-xl md:text-3xl text-gray-300 cursor-pointer transition-transform hover:scale-110" onclick="window.rateStar167(this, 2)">☆</span>
                            <span class="text-xl md:text-3xl text-gray-300 cursor-pointer transition-transform hover:scale-110" onclick="window.rateStar167(this, 3)">☆</span>
                            <span class="text-xl md:text-3xl text-gray-300 cursor-pointer transition-transform hover:scale-110" onclick="window.rateStar167(this, 4)">☆</span>
                            <span class="text-xl md:text-3xl text-gray-300 cursor-pointer transition-transform hover:scale-110" onclick="window.rateStar167(this, 5)">☆</span>
                        </div>
                    </div>
                    <!-- Tiêu chí 2 -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between p-5 bg-amber-50/20 rounded-2xl border border-amber-100/50 gap-4">
                        <span class="text-xl font-bold text-gray-700">✨ Đã nêu bật được ấn tượng chung về sự việc ngay từ đầu đoạn văn.</span>
                        <div class="flex gap-1 star-group" data-row="2">
                            <span class="text-xl md:text-3xl text-gray-300 cursor-pointer transition-transform hover:scale-110" onclick="window.rateStar167(this, 1)">☆</span>
                            <span class="text-xl md:text-3xl text-gray-300 cursor-pointer transition-transform hover:scale-110" onclick="window.rateStar167(this, 2)">☆</span>
                            <span class="text-xl md:text-3xl text-gray-300 cursor-pointer transition-transform hover:scale-110" onclick="window.rateStar167(this, 3)">☆</span>
                            <span class="text-xl md:text-3xl text-gray-300 cursor-pointer transition-transform hover:scale-110" onclick="window.rateStar167(this, 4)">☆</span>
                            <span class="text-xl md:text-3xl text-gray-300 cursor-pointer transition-transform hover:scale-110" onclick="window.rateStar167(this, 5)">☆</span>
                        </div>
                    </div>
                    <!-- Tiêu chí 3 -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between p-5 bg-amber-50/20 rounded-2xl border border-amber-100/50 gap-4">
                        <span class="text-xl font-bold text-gray-700">💖 Thể hiện rõ tình cảm, cảm xúc chân thực thông qua các chi tiết nổi bật.</span>
                        <div class="flex gap-1 star-group" data-row="3">
                            <span class="text-xl md:text-3xl text-gray-300 cursor-pointer transition-transform hover:scale-110" onclick="window.rateStar167(this, 1)">☆</span>
                            <span class="text-xl md:text-3xl text-gray-300 cursor-pointer transition-transform hover:scale-110" onclick="window.rateStar167(this, 2)">☆</span>
                            <span class="text-xl md:text-3xl text-gray-300 cursor-pointer transition-transform hover:scale-110" onclick="window.rateStar167(this, 3)">☆</span>
                            <span class="text-xl md:text-3xl text-gray-300 cursor-pointer transition-transform hover:scale-110" onclick="window.rateStar167(this, 4)">☆</span>
                            <span class="text-xl md:text-3xl text-gray-300 cursor-pointer transition-transform hover:scale-110" onclick="window.rateStar167(this, 5)">☆</span>
                        </div>
                    </div>
                    <!-- Tiêu chí 4 -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between p-5 bg-amber-50/20 rounded-2xl border border-amber-100/50 gap-4">
                        <span class="text-xl font-bold text-gray-700">🎨 Sử dụng các từ ngữ bộc lộ cảm xúc, từ gợi tả hình ảnh, âm thanh phù hợp.</span>
                        <div class="flex gap-1 star-group" data-row="4">
                            <span class="text-xl md:text-3xl text-gray-300 cursor-pointer transition-transform hover:scale-110" onclick="window.rateStar167(this, 1)">☆</span>
                            <span class="text-xl md:text-3xl text-gray-300 cursor-pointer transition-transform hover:scale-110" onclick="window.rateStar167(this, 2)">☆</span>
                            <span class="text-xl md:text-3xl text-gray-300 cursor-pointer transition-transform hover:scale-110" onclick="window.rateStar167(this, 3)">☆</span>
                            <span class="text-xl md:text-3xl text-gray-300 cursor-pointer transition-transform hover:scale-110" onclick="window.rateStar167(this, 4)">☆</span>
                            <span class="text-xl md:text-3xl text-gray-300 cursor-pointer transition-transform hover:scale-110" onclick="window.rateStar167(this, 5)">☆</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 📖 Phần 2: Ví dụ tham khảo (Bài 2 SGK) -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-amber-100">
                <div class="flex items-center gap-4 mb-8">
                    <div class="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">2</div>
                    <h3 class="text-2xl md:text-3xl font-black text-emerald-950">Viết lại một số câu văn theo gợi ý trong SGK:</h3>
                </div>

                <div class="grid grid-cols-1 gap-8 serif-font text-xl md:text-2xl leading-relaxed text-gray-800">
                    <!-- Ví dụ 1 -->
                    <div class="p-6 md:p-8 bg-amber-50/20 rounded-[32px] border-2 border-dashed border-amber-200">
                        <h4 class="text-xl md:text-2xl font-black text-amber-900 mb-4 flex items-center gap-2">
                            🌿 Nêu tình cảm, cảm xúc về khung cảnh diễn ra sự việc:
                        </h4>
                        <div class="bg-white p-6 rounded-2xl shadow-inner border border-gray-100 mb-4 text-justify">
                            "Chiều Ba mươi, bên suối đã thấy bóng các bà, các mẹ rửa rau ngải để làm bánh. Mùi thơm của rau ngải như ướp hương vào dòng suối. Tiếng cười lanh lảnh của đám trẻ con theo chân người lớn ra suối nghịch nước làm đám chim chào mào giật mình bay vụt lên từ bụi cây lúp xúp. Đất trời như được gột rửa và trở nên tinh khiết lạ thường. Tôi bỗng thấy lòng mình như mở ra, trong sáng với hương rau ngải phảng phất xa gần."
                        </div>
                        <p class="text-right text-lg font-black text-amber-800 font-sans">— (Nguyễn Luân)</p>
                    </div>

                    <!-- Ví dụ 2 -->
                    <div class="p-6 md:p-8 bg-amber-50/20 rounded-[32px] border-2 border-dashed border-amber-200">
                        <h4 class="text-xl md:text-2xl font-black text-amber-900 mb-4 flex items-center gap-2">
                            🧑‍🍳 Nêu tình cảm, cảm xúc về hoạt động:
                        </h4>
                        <div class="bg-white p-6 rounded-2xl shadow-inner border border-gray-100 mb-4 text-justify">
                            "Chiều mùng 2 tết Thanh minh, cả nhà tôi tất bật làm bánh ngải. Bố vung cao tay chày giã bột. Mẹ khéo léo lật giở từng thớ bột đang chuyển dần sang màu xanh mướt. Còn bà thì tỉ mẩn chuẩn bị vừng đen và mật mía để làm nhân bánh. Tôi chạy lăng xăng từ chỗ nọ sang chỗ kia, lâu lâu lại hít hà căng bụng mùi thơm của mật mía, của bột bánh. Tôi cảm nhận rõ sự rộn ràng, hối hả nhưng ấm áp từ những việc làm của mọi người trong nhà. Vì thế tôi càng háo hức khi nghĩ đến những chiếc bánh ngải đang dần thành hình từ đôi bàn tay của bà, của mẹ, của cha."
                        </div>
                        <p class="text-right text-lg font-black text-amber-800 font-sans">— (Nguyễn Luân)</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `,
    "practice": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto pb-12">
        <!-- 📝 Hoạt động 1: Thử thách sửa câu lỗi nhanh -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-amber-100">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">1</div>
                    <h3 class="text-2xl md:text-3xl font-black text-amber-950">Thử thách: Sửa câu văn chưa hay</h3>
                </div>

                <div class="space-y-8">
                    <!-- Câu 1 -->
                    <div class="p-6 bg-amber-50/20 rounded-3xl border border-amber-100 space-y-4">
                        <label class="block font-black text-gray-800 text-xl">
                            Câu A (Thiếu từ ngữ biểu cảm & gợi tả): <br>
                            <span class="text-red-700 italic">"Mẹ tôi rửa rau bên suối. Tôi thấy rất vui."</span>
                        </label>
                        <p class="text-base text-gray-500 font-semibold">Gợi ý: Viết lại câu tả rõ hơn khung cảnh thiên nhiên, bóng dáng mẹ hoặc âm thanh, mùi thơm để bộc lộ niềm vui sâu sắc.</p>
                        <textarea id="inp-167-cau-1" rows="2" placeholder="Gõ câu viết lại của em tại đây..." class="w-full p-4 border-2 border-amber-100 rounded-2xl text-lg font-bold outline-none focus:border-amber-500 bg-white"></textarea>
                        <button onclick="window.nhanXetCauVietLai167(1)" class="px-6 py-3 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-700 transition-all text-base shadow-sm">AI nhận xét câu A</button>
                        <div id="fb-167-cau-1" class="hidden p-4 rounded-xl bg-amber-950 text-white font-bold text-lg shadow-sm"></div>
                    </div>

                    <!-- Câu 2 -->
                    <div class="p-6 bg-amber-50/20 rounded-3xl border border-amber-100 space-y-4">
                        <label class="block font-black text-gray-800 text-xl">
                            Câu B (Mắc lỗi lặp từ ngữ quá nhiều): <br>
                            <span class="text-red-700 italic">"Bố tôi giã bột làm bánh. Bố làm rất hối hả và bố vung chày rất cao."</span>
                        </label>
                        <p class="text-base text-gray-500 font-semibold">Gợi ý: Sử dụng từ ngữ thay thế hoặc kết từ nối câu để câu văn mượt mà, tránh lặp lại từ "bố" nhiều lần.</p>
                        <textarea id="inp-167-cau-2" rows="2" placeholder="Gõ câu viết lại của em tại đây..." class="w-full p-4 border-2 border-amber-100 rounded-2xl text-lg font-bold outline-none focus:border-amber-500 bg-white"></textarea>
                        <button onclick="window.nhanXetCauVietLai167(2)" class="px-6 py-3 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-700 transition-all text-base shadow-sm">AI nhận xét câu B</button>
                        <div id="fb-167-cau-2" class="hidden p-4 rounded-xl bg-amber-950 text-white font-bold text-lg shadow-sm"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ✍️ Hoạt động 2: Viết lại đoạn văn hoàn chỉnh -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-amber-100">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">2</div>
                    <h3 class="text-2xl md:text-3xl font-black text-amber-950">Viết lại đoạn văn hoàn chỉnh của em</h3>
                </div>

                <p class="text-xl font-bold text-gray-600 mb-6 leading-relaxed">
                    Em hãy chọn một phần trong bài làm cũ chưa hay (nêu cảm xúc về khung cảnh hoặc hoạt động) và tiến hành viết lại hoàn chỉnh (độ dài khoảng 3 - 5 câu):
                </p>

                <!-- Input và nút ghi âm, chấm bài -->
                <div class="space-y-4">
                    <div class="flex justify-between items-center mb-2">
                        <label class="block font-black text-gray-800 text-xl">Đoạn văn viết lại của em:</label>
                        <button onclick="window.batGiongNo167()" class="p-2.5 bg-amber-100 text-amber-600 rounded-full hover:bg-amber-200 transition-all shadow-sm flex items-center gap-2 text-lg font-bold" title="Nhập bằng giọng nói">
                            <span>🎙️ Nói để viết</span>
                        </button>
                    </div>
                    <textarea id="inp-167-doanvan" rows="6" placeholder="Nhập đoạn văn hoàn chỉnh của em tại đây..." class="w-full p-5 text-xl font-bold rounded-3xl border-2 border-amber-200 focus:border-amber-500 outline-none bg-white"></textarea>
                    
                    <div class="flex flex-wrap items-center gap-4 mt-6">
                        <button onclick="window.nhanXetDoanVan167()" class="px-10 py-4 bg-amber-600 text-white font-black text-xl rounded-2xl shadow-lg hover:bg-amber-700 active:scale-95 transition-all flex items-center gap-3">
                            <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-amber-600 font-black text-sm shadow-sm">E</div>
                            <span>AI CHẤM BÀI VIẾT</span>
                        </button>
                        <button onclick="window.resetPractice167()" class="px-6 py-4 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition-all">LÀM LẠI</button>
                    </div>
                    <div id="fb-167-ai" class="hidden mt-6 p-8 bg-amber-900 text-white rounded-[28px] shadow-2xl animate-in slide-in-from-top-10 duration-500"></div>
                </div>
            </div>
        </section>
    </div>
    `,
    "quizPool": [
        {
            "question": "Mục đích chính của việc đánh giá, chỉnh sửa đoạn văn là gì?",
            "options": [
                "Làm bài viết dài hơn thật nhiều",
                "Phát hiện các lỗi sai về ý, cách dùng từ, liên kết để sửa chữa cho bài viết hay hơn",
                "Để nộp bài nhanh nhất",
                "Để trang trí bài viết bằng hình ảnh"
            ],
            "answer": 1,
            "level": "Dễ"
        },
        {
            "question": "Khi bài viết bị 'lạc ý', nghĩa là bài đang gặp lỗi nào sau đây?",
            "options": [
                "Viết nhiều từ biểu cảm quá",
                "Viết lạc sang chủ đề sự việc khác mà không tập trung bộc lộ cảm xúc chủ đạo",
                "Bài viết quá ngắn",
                "Dùng nhiều dấu câu sai"
            ],
            "answer": 1,
            "level": "Trung bình"
        },
        {
            "question": "Để khắc phục lỗi lặp ý hoặc lặp từ trong câu văn, ta nên làm gì?",
            "options": [
                "Chép lại câu văn đó nhiều lần",
                "Sử dụng từ ngữ đồng nghĩa hoặc từ ngữ nối thay thế phù hợp",
                "Xoá hoàn toàn câu văn đó",
                "Giữ nguyên không thay đổi"
            ],
            "answer": 1,
            "level": "Dễ"
        },
        {
            "question": "Nêu tình cảm, cảm xúc về khung cảnh nghĩa là gì?",
            "options": [
                "Chỉ liệt kê các sự vật có trong cảnh vật",
                "Kể lại hành động của con người",
                "Bày tỏ sự rung động trước những vẻ đẹp của âm thanh, màu sắc, hương vị của khung cảnh",
                "Vẽ một bức tranh phong cảnh"
            ],
            "answer": 2,
            "level": "Trung bình"
        },
        {
            "question": "Đoạn văn mẫu tả khung cảnh của Nguyễn Luân có nhắc tới loài chim nào?",
            "options": ["Chim chích bông", "Chim chào mào", "Chim hải âu", "Chim sẻ"],
            "answer": 1,
            "level": "Dễ"
        },
        {
            "question": "Trong đoạn văn mẫu tả hoạt động của Nguyễn Luân, bố đã làm việc gì?",
            "options": ["Cấy lúa sữa", "Vung cao tay chày giã bột làm bánh", "Rửa rau ngải bên suối", "Thêu dệt thổ cẩm Cơ-tu"],
            "answer": 1,
            "level": "Dễ"
        },
        {
            "question": "Từ ngữ nào trong câu 'Chiều Ba mươi, bên suối đã thấy bóng các bà, các mẹ rửa rau ngải để làm bánh.' gợi tả khung cảnh?",
            "options": ["rửa rau ngải", "làm bánh", "bên suối", "các bà, các mẹ"],
            "answer": 2,
            "level": "Dễ"
        },
        {
            "question": "Đoạn văn mẫu của Nguyễn Luân có nhắc tới loại bánh đặc trưng nào?",
            "options": ["Bánh chưng", "Bánh ngải", "Bánh dày", "Bánh giầy"],
            "answer": 1,
            "level": "Dễ"
        },
        {
            "question": "Chọn từ gợi tả phù hợp điền vào chỗ trống: 'Đất trời như được gột rửa và trở nên [...] lạ thường.'",
            "options": ["bình thường", "tinh khiết", "rực rỡ", "huyên náo"],
            "answer": 1,
            "level": "Trung bình"
        },
        {
            "question": "Trong văn biểu cảm, từ 'tất bật', 'hối hả' có tác dụng gì khi tả hoạt động làm bánh?",
            "options": [
                "Tạo nhịp điệu thơ ca",
                "Gợi lên không khí chuẩn bị Tết rộn ràng, ấm áp và sự chịu thương chịu khó của gia đình",
                "Thể hiện sự mệt mỏi của con người",
                "Làm bài văn dài ra"
            ],
            "answer": 1,
            "level": "Khó"
        },
        {
            "question": "Lỗi 'thiếu ấn tượng chung' nghĩa là gì?",
            "options": [
                "Đoạn văn không có câu mở đầu nêu cảm nghĩ khái quát về sự việc",
                "Đoạn văn có quá ít câu",
                "Học sinh quên ký tên",
                "Bài viết không dùng dấu chấm câu"
            ],
            "answer": 0,
            "level": "Trung bình"
        },
        {
            "question": "Câu văn nào sau đây biểu cảm tốt nhất khi kết thúc đoạn văn?",
            "options": [
                "Thế là bánh làm xong.",
                "Tôi rất vui.",
                "Tôi bỗng thấy lòng mình như mở ra, trong sáng với hương rau ngải phảng phất xa gần.",
                "Tôi đi ngủ."
            ],
            "answer": 2,
            "level": "Khó"
        },
        {
            "question": "Tại sao cần nghe thầy cô nhận xét về bài làm trước khi chỉnh sửa?",
            "options": [
                "Để biết điểm số",
                "Để nhận diện rõ định hướng lỗi sai hệ thống mà mình hay gặp phải trong bài làm",
                "Để chép bài của bạn",
                "Để không phải viết bài nữa"
            ],
            "answer": 1,
            "level": "Khó"
        },
        {
            "question": "Yếu tố nào giúp người đọc cảm nhận sâu sắc tình cảm của người viết trong đoạn văn?",
            "options": [
                "Các con số số liệu thống kê",
                "Các chi tiết tả cảnh, tả hoạt động giàu hình ảnh kết hợp với từ ngữ bộc lộ cảm xúc chân thực",
                "Tên các nhân vật nổi tiếng",
                "Các thuật ngữ khoa học khó hiểu"
            ],
            "answer": 1,
            "level": "Trung bình"
        },
        {
            "question": "Khi sửa câu 'Bố tôi giã bột. Bố làm hối hả.', phương án sửa nào là tối ưu?",
            "options": [
                "Bố tôi giã bột và bố làm hối hả lắm.",
                "Nhìn cánh tay vung cao chày giã bột của bố, tôi cảm nhận rõ sự hối hả, rộn ràng của ngày Tết.",
                "Giã bột là bố tôi, bố làm rất hối hả.",
                "Bố tôi giã bột làm bánh ngải."
            ],
            "answer": 1,
            "level": "Khó"
        }
    ]
};

// --- HÀM TƯƠNG TÁC CHO TAB LUYỆN TẬP (WINDOW GLOBALS) ---

// Chức năng chấm điểm sao tương tác
window.rateStar167 = function(elem, num) {
    const parent = elem.parentElement;
    const stars = parent.querySelectorAll('span');
    stars.forEach((star, index) => {
        if (index < num) {
            star.innerText = '★';
            star.classList.remove('text-gray-300');
            star.classList.add('text-amber-500');
        } else {
            star.innerText = '☆';
            star.classList.remove('text-amber-500');
            star.classList.add('text-gray-300');
        }
    });
};

// AI nhận xét câu viết lại
window.nhanXetCauVietLai167 = async function(type) {
    const text1 = document.getElementById("inp-167-cau-1")?.value.trim() || "";
    const text2 = document.getElementById("inp-167-cau-2")?.value.trim() || "";

    let text = "";
    let cauGoc = "";
    let targetFbId = "";
    let errorDesc = "";

    if (type === 1) {
        text = text1;
        cauGoc = "Mẹ tôi rửa rau bên suối. Tôi thấy rất vui.";
        targetFbId = "fb-167-cau-1";
        errorDesc = "Thiếu từ ngữ biểu cảm & gợi tả.";
    } else {
        text = text2;
        cauGoc = "Bố tôi giã bột làm bánh. Bố làm rất hối hả và bố vung chày rất cao.";
        targetFbId = "fb-167-cau-2";
        errorDesc = "Lặp từ 'bố' quá nhiều lần.";
    }

    if (!text) {
        alert("Em hãy gõ câu văn viết lại của mình trước nhé!");
        return;
    }

    const fb = document.getElementById(targetFbId);
    fb.classList.remove("hidden");
    fb.innerHTML = `
        <div class="flex items-center gap-4">
            <div class="animate-spin rounded-full h-6 w-6 border-4 border-white border-t-transparent"></div>
            <p class="text-base font-bold italic">AI đang nhận xét câu viết lại của em...</p>
        </div>
    `;

    if (typeof askAI === 'function') {
        const prompt = `Hãy nhận xét câu viết lại của học sinh lớp 5:
        Câu gốc bị lỗi: "${cauGoc}"
        Mô tả lỗi: ${errorDesc}
        Câu viết lại của học sinh: "${text}"

        Yêu cầu nhận xét:
        1. Câu viết lại đã khắc phục được lỗi của câu gốc chưa?
        2. Về mặt ngữ pháp, câu viết lại có chuẩn chưa?
        3. Câu mới có hay hơn, sinh động và bộc lộ cảm xúc sâu sắc hơn không?
        4. Khen ngợi và đưa ra 1 ví dụ cải thiện tốt hơn (nếu có). Ngắn gọn trong 3-4 dòng.`;

        await askAI(targetFbId, prompt, 'single', 'writing', 167);
    } else {
        fb.innerHTML = "Lỗi: Hệ thống AI chưa sẵn sàng.";
    }
};

// AI chấm đoạn văn viết lại hoàn chỉnh
window.nhanXetDoanVan167 = async function() {
    const text = document.getElementById("inp-167-doanvan")?.value.trim() || "";
    const fb = document.getElementById("fb-167-ai");

    if (!text) {
        alert("Em hãy viết đoạn văn trước khi yêu cầu AI nhận xét nhé!");
        return;
    }

    fb.classList.remove("hidden");
    fb.innerHTML = `
        <div class="flex items-center gap-4 mb-4">
            <div class="animate-spin rounded-full h-8 w-8 border-4 border-white border-t-transparent"></div>
            <p class="text-xl font-bold italic">Hệ thống AI đang chấm bài viết lại của em...</p>
        </div>
    `;

    if (typeof askAI === 'function') {
        const prompt = `Hãy đóng vai giáo viên chấm bài viết học sinh lớp 5:
        Đề bài: Viết lại đoạn văn (3 – 5 câu) thể hiện tình cảm, cảm xúc về một sự việc (khung cảnh hoặc hoạt động), có sử dụng các từ ngữ gợi cảm xúc, gợi tả sinh động.
        
        Đoạn văn viết lại của học sinh:
        "${text}"
        
        Yêu cầu nhận xét:
        1. Đoạn văn của học sinh có bám sát đề tài (tình cảm cảm xúc về khung cảnh/hoạt động sự việc) không?
        2. Đoạn văn đạt độ dài yêu cầu (3 - 5 câu) chưa?
        3. Học sinh có sử dụng các từ ngữ gợi tả hình ảnh, âm thanh, hay từ bộc lộ cảm xúc chân thực không? Hãy chỉ ra một số từ tiêu biểu học sinh đã dùng tốt.
        4. Đưa ra lời khuyên chân thành và gợi ý để câu văn bay bổng, sinh động hơn. Thang điểm 10.`;

        await askAI('167-ai', prompt, 'single', 'writing', 167);
    } else {
        fb.innerHTML = "Lỗi: Hệ thống AI chưa sẵn sàng.";
    }
};

// Reset bài luyện tập
window.resetPractice167 = function() {
    ['inp-167-cau-1', 'inp-167-cau-2', 'inp-167-doanvan'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    ['fb-167-cau-1', 'fb-167-cau-2', 'fb-167-ai'].forEach(id => {
        const fb = document.getElementById(id);
        if (fb) { fb.classList.add("hidden"); fb.innerHTML = ""; }
    });
};

// Ghi âm giọng nói
window.batGiongNo167 = function() {
    const textEl = document.getElementById("inp-167-doanvan");
    if (!textEl) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Trình duyệt của em không hỗ trợ nhận diện giọng nói. Hãy dùng trình duyệt Chrome nhé!");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "vi-VN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    alert("Hệ thống bắt đầu ghi âm. Em hãy nói rõ ràng để viết bài nhé!");

    recognition.onresult = (event) => {
        const resultText = event.results[0][0].transcript;
        if (textEl.value) {
            textEl.value += " " + resultText;
        } else {
            textEl.value = resultText;
        }
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        alert("Đã xảy ra lỗi khi ghi âm. Em hãy thử lại hoặc tự gõ bàn phím nhé.");
    };

    recognition.start();
};
