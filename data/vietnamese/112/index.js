export const lesson112 = {
    "topic": "Tiếng Việt 5",
    "week": "16",
    "period": "112",
    "title": "ĐỌC MỞ RỘNG: TÌM ĐỌC BÀI GIỚI THIỆU PHIM VÀ VIẾT PHIẾU ĐỌC SÁCH",
    "desc": "Bài học hướng dẫn học sinh đọc hiểu các bài giới thiệu phim hoạt hình đặc sắc, thực hành ghi chép thông tin vào phiếu đọc sách tương tác và ghi nhật ký tìm đọc thông tin về múa ba lê.",
    "subject": "Đọc mở rộng",
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
        <ul class="space-y-3 text-sky-800 font-bold text-lg md:text-xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Tìm đọc và hiểu nội dung, hình thức thể hiện của các bài giới thiệu phim trên báo chí hoặc internet.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Thực hành thu thập và ghi chép thông tin cốt lõi của bài giới thiệu vào phiếu đọc sách một cách khoa học.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Trao đổi, chia sẻ cảm xúc về nhân vật, chi tiết ấn tượng và mở rộng vốn hiểu biết về nghệ thuật múa ba lê.
            </li>
        </ul>
    </div>

    <!-- 📖 Tìm đọc bài giới thiệu phim (SGK Ví dụ) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <h3 class="text-2xl md:text-3xl font-black text-sky-950 flex items-center gap-2">
                🎬 Các bài giới thiệu phim ví dụ (SGK trang 148)
            </h3>
            
            <p class="text-base md:text-lg text-gray-700 font-bold">
                👉 Nhấp chọn các nút thẻ bên dưới để đọc bài giới thiệu về từng bộ phim:
            </p>

            <!-- Tab Switcher buttons -->
            <div class="flex flex-wrap gap-4 border-b border-gray-100 pb-4">
                <button id="tab-btn-daihanh" onclick="window.switchMovieTab('daihanh')" 
                        class="px-6 py-3 rounded-2xl font-black text-base md:text-lg transition-all shadow-md bg-sky-600 text-white border-2 border-sky-700 active:scale-95">
                    👑 Phim: Đại Hành hoàng đế
                </button>
                <button id="tab-btn-phuongthuoc" onclick="window.switchMovieTab('phuongthuoc')" 
                        class="px-6 py-3 rounded-2xl font-black text-base md:text-lg transition-all shadow-md bg-gray-150 text-gray-750 border-2 border-gray-200 active:scale-95">
                    🦔 Phim: Phương thuốc kì diệu
                </button>
            </div>

            <!-- Tab Contents -->
            <div class="mt-6">
                <!-- Nội dung phim Đại Hành hoàng đế -->
                <div id="tab-content-daihanh" class="block bg-amber-50/30 rounded-3xl p-6 md:p-8 border border-amber-200 animate-in fade-in duration-300">
                    <h4 class="text-xl md:text-2xl font-black text-amber-900 mb-4">👑 Giới thiệu phim: Đại Hành hoàng đế</h4>
                    <div class="serif-font text-gray-800 text-lg md:text-2xl leading-relaxed text-justify space-y-4">
                        <p class="indent-10 font-medium">Sử dụng thủ pháp giàu tính điện ảnh, bộ phim hoạt hình lịch sử <em>Đại Hành hoàng đế</em> đã khẳng định được giá trị nội dung, cũng như những tìm tòi, sáng tạo về phong cách thể hiện, hiệu quả hình ảnh với trình độ kĩ thuật cao.</p>
                        <p class="indent-10 font-medium">Khán giả xem phim bị lôi cuốn vào câu chuyện lịch sử với các tình tiết hấp dẫn, các nhân vật lịch sử được khắc hoạ sinh động.</p>
                        <p class="text-right text-base text-gray-500 font-bold mt-2">(Theo báo Nhi đồng)</p>
                    </div>
                </div>

                <!-- Nội dung phim Phương thuốc kì diệu -->
                <div id="tab-content-phuongthuoc" class="hidden bg-emerald-50/30 rounded-3xl p-6 md:p-8 border border-emerald-200 animate-in fade-in duration-300">
                    <h4 class="text-xl md:text-2xl font-black text-emerald-900 mb-4">🦔 Giới thiệu phim: Phương thuốc kì diệu</h4>
                    <div class="serif-font text-gray-800 text-lg md:text-2xl leading-relaxed text-justify space-y-4">
                        <p class="indent-10 font-medium"><em>Phương thuốc kì diệu</em> do Hãng phim Hoạt hình Việt Nam sản xuất là bộ phim hoạt hình vui nhộn. Bộ phim kể về chú nhím con nghịch ngợm, hay trêu chọc mọi người khiến nhím mẹ lo lắng, buồn bực đến phát ốm.</p>
                        <p class="indent-10 font-medium">Thấy mẹ phải nằm trên giường bệnh, nhím con ân hận lắm. Nó ở nhà chăm sóc mẹ nhưng mẹ vẫn không khỏi. Nhím con quyết định đi tìm thuốc chữa bệnh cho mẹ. Trên đường đi, nhím đã làm nhiều việc tốt giúp đỡ mọi người. Biết nhím con đã khôn lớn, nhím mẹ cảm thấy vui mừng, hạnh phúc nên đã khoẻ mạnh trở lại.</p>
                        <p class="text-right text-base text-gray-500 font-bold mt-2">(Theo báo Nhi đồng)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- PHẦN 1: VIẾT PHIẾU ĐỌC SÁCH TƯƠNG TÁC (MỤC 2 SGK - 1 CỘT RỘNG RÃI) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">1</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Hoàn thành Phiếu Đọc Sách của con</h3>
            </div>

            <p class="text-base md:text-lg text-gray-700 font-bold mb-6">
                📝 Hãy chọn hoặc điền thông tin bài giới thiệu phim con vừa đọc để hoàn thiện phiếu:
            </p>

            <!-- Phiếu đọc sách 1 cột rộng rãi -->
            <div class="max-w-4xl mx-auto bg-white rounded-3xl border-2 border-sky-200 shadow-md p-6 md:p-8 space-y-6">
                <div class="text-center pb-4 border-b-2 border-dashed border-sky-200 mb-6">
                    <h4 class="text-2xl md:text-3xl font-black text-sky-850">📋 PHIẾU ĐỌC SÁCH</h4>
                    <p class="text-sm text-gray-500 font-semibold mt-1">Đọc và thu hoạch bài giới thiệu phim</p>
                </div>

                <div class="space-y-6">
                    <!-- Tên phim -->
                    <div class="bg-sky-50/30 p-4 rounded-2xl border border-sky-100/60 space-y-2">
                        <label class="block font-black text-sky-950 text-lg md:text-xl">🎬 Tên phim:</label>
                        <input type="text" id="log-movie-name" placeholder="Ví dụ: Phương thuốc kì diệu / Đại Hành hoàng đế..." 
                               class="w-full p-3 rounded-xl border border-gray-300 focus:border-sky-500 outline-none font-bold text-lg bg-white">
                    </div>

                    <!-- Tên các nhân vật chính -->
                    <div class="bg-sky-50/30 p-4 rounded-2xl border border-sky-100/60 space-y-2">
                        <label class="block font-black text-sky-950 text-lg md:text-xl">👥 Tên các nhân vật chính trong phim:</label>
                        <input type="text" id="log-characters" placeholder="Ví dụ: Chú nhím con, nhím mẹ... / Vua Lê Đại Hành..." 
                               class="w-full p-3 rounded-xl border border-gray-300 focus:border-sky-500 outline-none font-bold text-lg bg-white">
                    </div>

                    <!-- Ngày đọc -->
                    <div class="bg-sky-50/30 p-4 rounded-2xl border border-sky-100/60 space-y-2">
                        <label class="block font-black text-sky-950 text-lg md:text-xl">📅 Ngày đọc bài giới thiệu:</label>
                        <input type="date" id="log-date" class="w-full p-3 rounded-xl border border-gray-300 focus:border-sky-500 outline-none font-bold text-lg bg-white">
                    </div>

                    <!-- Nội dung chính của phim -->
                    <div class="bg-sky-50/30 p-4 rounded-2xl border border-sky-100/60 space-y-2">
                        <div class="flex justify-between items-center">
                            <label class="block font-black text-sky-950 text-lg md:text-xl">📚 Nội dung chính của phim:</label>
                            <button onclick="window.startVoiceInputVn112('log-summary')" class="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-all text-xs shadow-sm" title="Nhập giọng nói">🎙️ Ghi âm</button>
                        </div>
                        <textarea id="log-summary" rows="3" placeholder="Ví dụ: Kể về hành trình nhím con nghịch ngợm đi tìm thuốc cứu mẹ, trên đường làm nhiều việc tốt và trưởng thành hơn..." 
                                  class="w-full p-4 rounded-xl border border-gray-300 focus:border-sky-500 outline-none font-medium text-lg bg-white"></textarea>
                    </div>

                    <!-- Chi tiết gây ấn tượng -->
                    <div class="bg-sky-50/30 p-4 rounded-2xl border border-sky-100/60 space-y-2">
                        <div class="flex justify-between items-center">
                            <label class="block font-black text-sky-950 text-lg md:text-xl">✨ Những chi tiết gây ấn tượng:</label>
                            <button onclick="window.startVoiceInputVn112('log-details')" class="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-all text-xs shadow-sm" title="Nhập giọng nói">🎙️ Ghi âm</button>
                        </div>
                        <textarea id="log-details" rows="2" placeholder="Ví dụ: Chi tiết nhím con chạy đi tìm thuốc cứu mẹ và giúp đỡ mọi người trên đường đi..." 
                                  class="w-full p-4 rounded-xl border border-gray-300 focus:border-sky-500 outline-none font-medium text-lg bg-white"></textarea>
                    </div>

                    <!-- Thông tin thú vị hoặc suy nghĩ -->
                    <div class="bg-sky-50/30 p-4 rounded-2xl border border-sky-100/60 space-y-2">
                        <div class="flex justify-between items-center">
                            <label class="block font-black text-sky-950 text-lg md:text-xl">💡 Thông tin thú vị hoặc suy nghĩ của em sau khi đọc bài giới thiệu:</label>
                            <button onclick="window.startVoiceInputVn112('log-thoughts')" class="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-all text-xs shadow-sm" title="Nhập giọng nói">🎙️ Ghi âm</button>
                        </div>
                        <textarea id="log-thoughts" rows="2" placeholder="Ví dụ: Bài giới thiệu giúp em hiểu hơn về nội dung phim và rất muốn đi xem phim hoạt hình này..." 
                                  class="w-full p-4 rounded-xl border border-gray-300 focus:border-sky-500 outline-none font-medium text-lg bg-white"></textarea>
                    </div>

                    <!-- Mức độ yêu thích (Star Rating) -->
                    <div class="bg-sky-50/30 p-4 rounded-2xl border border-sky-100/60 space-y-2">
                        <label class="block font-black text-sky-950 text-lg md:text-xl">⭐ Mức độ yêu thích:</label>
                        <div class="flex gap-2 items-center justify-start select-none py-2" id="star-rating-container">
                            <span onclick="window.rateStarsVn112(1)" id="star-1" class="text-4xl md:text-5xl cursor-pointer text-gray-300 transition-all hover:scale-110">★</span>
                            <span onclick="window.rateStarsVn112(2)" id="star-2" class="text-4xl md:text-5xl cursor-pointer text-gray-300 transition-all hover:scale-110">★</span>
                            <span onclick="window.rateStarsVn112(3)" id="star-3" class="text-4xl md:text-5xl cursor-pointer text-gray-300 transition-all hover:scale-110">★</span>
                            <span onclick="window.rateStarsVn112(4)" id="star-4" class="text-4xl md:text-5xl cursor-pointer text-gray-300 transition-all hover:scale-110">★</span>
                            <span onclick="window.rateStarsVn112(5)" id="star-5" class="text-4xl md:text-5xl cursor-pointer text-gray-300 transition-all hover:scale-110">★</span>
                            <span id="star-text" class="ml-4 font-bold text-sky-700 text-lg">Chưa đánh giá</span>
                        </div>
                    </div>
                </div>

                <!-- Nút chấm điểm từ AI Thầy E -->
                <div class="pt-6 border-t-2 border-dashed border-sky-200 flex flex-wrap items-center justify-between gap-4">
                    <div class="flex items-center gap-4">
                        <button id="btn-check-112" onclick="window.checkBookLogVn112()" class="w-14 h-14 md:w-20 md:h-20 bg-sky-600 hover:bg-sky-700 text-white rounded-[1.5rem] font-black text-2xl md:text-4xl shadow-xl transition-all active:scale-95 flex items-center justify-center shrink-0">E</button>
                        <div>
                            <span class="block font-bold text-gray-700 text-base md:text-lg">Nhấn nút "E" để chấm điểm phiếu đọc sách!</span>
                            <span class="text-xs font-semibold text-gray-500">Thầy E sẽ giúp con nhận xét phiếu thu hoạch thật chi tiết.</span>
                        </div>
                    </div>
                    <button onclick="window.resetBookLogVn112()" class="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition-all text-base md:text-lg">LÀM LẠI</button>
                </div>
            </div>

            <!-- Phản hồi AI Thầy E -->
            <div id="fb-vn112-log" class="hidden mt-8 p-6 bg-sky-600 text-white rounded-3xl shadow-xl animate-in slide-in-from-top-10 duration-500">
                <!-- Phản hồi động -->
            </div>
        </div>
    </section>

    <!-- PHẦN 2: GÓC GHI CHÉP THÊM VỀ BA LÊ (MỤC 4 SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
        <div class="p-6 md:p-8 bg-emerald-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">🩰</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Sổ tay thông tin về nghệ thuật múa ba lê</h3>
            </div>

            <p class="text-base md:text-lg text-gray-700 font-bold mb-6">
                📖 Hãy ghi chép lại những thông tin thú vị con tự tìm đọc thêm được về nghệ thuật múa ba lê (ví dụ: các nghệ sĩ múa ba lê nổi tiếng, lịch sử giày mũi cứng, các động tác xoay người...):
            </p>

            <div class="max-w-4xl mx-auto space-y-4">
                <textarea id="ballet-notes" rows="4" placeholder="Ví dụ: Em đọc thêm được rằng giày múa ba lê mũi cứng có lớp đệm đặc biệt giúp diễn viên có thể đứng vững trên các đầu ngón chân. Và diễn viên múa ba lê giỏi nhất thường được gọi là Prima Ballerina..." 
                          class="w-full p-4 rounded-2xl border-2 border-emerald-200 focus:border-emerald-500 outline-none font-medium text-lg md:text-xl bg-white shadow-inner"></textarea>
                <div class="flex justify-end">
                    <button onclick="window.saveBalletNotesVn112()" class="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg rounded-2xl transition-all shadow-md active:scale-95">
                        LƯU SỔ TAY GHI CHÉP
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TIẾT HỌC -->
    <div class="pt-6 flex justify-center">
        <button onclick="window.nopBaiVn112()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-600 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-950 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Phim hoạt hình lịch sử 'Đại Hành hoàng đế' giới thiệu trong SGK kể về nhân vật nào?",
            "options": [
                "Vua Lê Đại Hành",
                "Vua Đinh Bộ Lĩnh",
                "Vua Trần Nhân Tông",
                "Vua Lý Thái Tổ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Theo bài giới thiệu phim 'Đại Hành hoàng đế', phim được đánh giá cao nhờ yếu tố nghệ thuật nào?",
            "options": [
                "Thủ pháp giàu tính điện ảnh, sáng tạo về phong cách thể hiện và hiệu quả hình ảnh kỹ thuật cao",
                "Kỹ thuật lồng tiếng bằng giọng của nhiều người nước ngoài khác nhau",
                "Có nhiều cảnh hài hước vui nhộn về các loài động vật hoang dã",
                "Được đầu tư ngân sách lớn nhất lịch sử Hãng phim Hoạt hình VN"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Phim hoạt hình 'Phương thuốc kì diệu' thuộc thể loại phim có phong cách như thế nào?",
            "options": [
                "Phim hoạt hình vui nhộn",
                "Phim hoạt hình lịch sử chính kịch",
                "Phim tài liệu khoa học tự nhiên",
                "Phim hoạt hình ca nhạc thần thoại"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nhân vật nhím con trong 'Phương thuốc kì diệu' ban đầu có tính cách như thế nào?",
            "options": [
                "Nghịch ngợm, hay trêu chọc mọi người khiến mẹ lo lắng",
                "Nhút nhát, sợ hãi không dám ra khỏi hang một mình",
                "Cực kỳ chăm học và luôn thích vẽ tranh phong cảnh",
                "Chăm chỉ giúp đỡ mẹ làm việc nhà mỗi ngày"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tại sao nhím mẹ trong bộ phim 'Phương thuốc kì diệu' bị phát ốm?",
            "options": [
                "Vì lo lắng và buồn bực trước sự nghịch ngợm của nhím con",
                "Vì bị trúng gió lạnh khi đi tìm thức ăn trong rừng đêm",
                "Vì làm việc quá sức để xây dựng lại ngôi nhà bị đổ",
                "Vì ăn phải loại quả độc lạ do nhím con mang về"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Hành động nào của nhím con thể hiện sự ân hận sâu sắc khi thấy mẹ ốm?",
            "options": [
                "Ở nhà tận tình chăm sóc mẹ và quyết định lên đường đi tìm thuốc chữa bệnh cho mẹ",
                "Bỏ nhà đi chơi tiếp với các bạn khác để tránh bị mắng",
                "Khóc lóc suốt ngày và không chịu ăn uống gì cả",
                "Nhờ bác nhím hàng xóm sang chăm sóc mẹ thay mình"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trên hành trình đi tìm thuốc chữa bệnh cho mẹ, nhím con đã làm gì?",
            "options": [
                "Làm nhiều việc tốt giúp đỡ mọi người xung quanh",
                "Ngồi nghỉ ngơi bên suối mát và hát vang",
                "Chạy trốn thật nhanh khi thấy các bạn gặp khó khăn",
                "Nhặt những chiếc lá vàng đẹp nhất để mang về tặng mẹ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tại sao nhím mẹ đã khoẻ mạnh trở lại ở cuối phim 'Phương thuốc kì diệu'?",
            "options": [
                "Vì cảm thấy vui mừng, hạnh phúc khi biết nhím con đã khôn lớn và biết giúp đỡ mọi người",
                "Vì uống được viên thuốc thần kỳ từ nhà khoa học",
                "Vì mùa đông lạnh giá đã qua và mùa xuân ấm áp lại tới",
                "Vì nhím con đã xây dựng được một mái nhà kiên cố"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Các bài giới thiệu phim ví dụ trong SGK trang 148 được trích từ nguồn báo nào?",
            "options": [
                "Theo báo Nhi đồng",
                "Theo báo Thiếu niên Tiền phong",
                "Theo tạp chí Khoa học Tuổi trẻ",
                "Theo báo Giáo dục và Thời đại"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đâu là thông tin KHÔNG bắt buộc phải điền trong mẫu Phiếu đọc sách ở mục 2 SGK?",
            "options": [
                "Tên nhà sản xuất hoặc đạo diễn của bộ phim hoạt hình",
                "Tên phim, Tên nhân vật chính, Ngày đọc bài giới thiệu",
                "Nội dung chính và Những chi tiết gây ấn tượng trong phim",
                "Thông tin thú vị/Suy nghĩ sau khi đọc và Mức độ yêu thích"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đâu là gợi ý để trao đổi với các bạn về bài giới thiệu đã đọc?",
            "options": [
                "Tác giả, nhân vật chính; nội dung chính, ý nghĩa; suy nghĩ, cảm xúc sau khi đọc",
                "Mô tả chi tiết kĩ thuật thiết kế hình ảnh 3D trên máy tính",
                "Kể lại toàn bộ tập 1, tập 2 và tập 3 của bộ phim hoạt hình",
                "Giới thiệu giá vé của rạp và lịch chiếu chi tiết hàng tuần"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tại sao học sinh nên tìm hiểu thêm thông tin về nghệ thuật múa ba lê?",
            "options": [
                "Để mở rộng vốn hiểu biết về bộ môn nghệ thuật đã học ở bài tập đọc trước",
                "Để chuẩn bị cho kỳ thi tuyển chọn diễn viên múa ba lê chuyên nghiệp",
                "Để học cách tự may váy tutu và giày múa mũi cứng tại nhà",
                "Để biết cách chơi bản nhạc Hồ thiên nga bằng đàn piano"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nội dung chính trong bài giới thiệu phim nhằm mục đích gì?",
            "options": [
                "Giúp người đọc nắm bắt cốt truyện chính và thông điệp của phim một cách nhanh chóng",
                "Tiết lộ toàn bộ cái kết bất ngờ của bộ phim hoạt hình đó",
                "Liệt kê bảng phân vai và tiền lương của toàn bộ đoàn làm phim",
                "Quảng cáo các sản phẩm đồ chơi ăn theo bộ phim hoạt hình"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Ngày đọc ghi trên Phiếu đọc sách có tác dụng gì?",
            "options": [
                "Để theo dõi, quản lý nhật ký đọc sách và quá trình tự học của học sinh",
                "Để rạp phim kiểm tra xem vé xem phim còn hạn sử dụng hay không",
                "Để giáo viên chấm điểm xem ai nộp bài sớm nhất trong lớp",
                "Để ghi lại sinh nhật của nhân vật chính trong phim"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Bộ phim nào sau đây do Hãng phim Hoạt hình Việt Nam sản xuất theo thông tin trong SGK?",
            "options": [
                "Phương thuốc kì diệu",
                "Doraemon chú mèo máy thông minh",
                "Đại Hành hoàng đế",
                "Chú thỏ trắng dưới một mái nhà"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- LOGIC TƯƠNG TÁC TIẾT 112 ---

// 1. Chuyển đổi thẻ bài đọc phim
window.switchMovieTab = function(tabName) {
    const btnDaiHanh = document.getElementById('tab-btn-daihanh');
    const btnPhuongThuoc = document.getElementById('tab-btn-phuongthuoc');
    const contentDaiHanh = document.getElementById('tab-content-daihanh');
    const contentPhuongThuoc = document.getElementById('tab-content-phuongthuoc');

    if (!btnDaiHanh || !btnPhuongThuoc || !contentDaiHanh || !contentPhuongThuoc) return;

    if (tabName === 'daihanh') {
        // Active Dai Hanh
        btnDaiHanh.className = "px-6 py-3 rounded-2xl font-black text-base md:text-lg transition-all shadow-md bg-sky-600 text-white border-2 border-sky-700 active:scale-95";
        btnPhuongThuoc.className = "px-6 py-3 rounded-2xl font-black text-base md:text-lg transition-all shadow-md bg-gray-150 text-gray-750 border-2 border-gray-200 active:scale-95";
        
        contentDaiHanh.classList.remove('hidden');
        contentDaiHanh.classList.add('block');
        contentPhuongThuoc.classList.add('hidden');
        contentPhuongThuoc.classList.remove('block');
    } else {
        // Active Phuong Thuoc
        btnDaiHanh.className = "px-6 py-3 rounded-2xl font-black text-base md:text-lg transition-all shadow-md bg-gray-150 text-gray-750 border-2 border-gray-200 active:scale-95";
        btnPhuongThuoc.className = "px-6 py-3 rounded-2xl font-black text-base md:text-lg transition-all shadow-md bg-sky-600 text-white border-2 border-sky-700 active:scale-95";
        
        contentDaiHanh.classList.add('hidden');
        contentDaiHanh.classList.remove('block');
        contentPhuongThuoc.classList.remove('hidden');
        contentPhuongThuoc.classList.add('block');
    }
};

// 2. Logic Đánh giá sao (Star Rating)
let userRatingVn112 = 0;

window.rateStarsVn112 = function(rating) {
    userRatingVn112 = rating;
    const starText = document.getElementById('star-text');
    if (starText) {
        const desc = ["Rất tệ 😟", "Tạm được 😐", "Khá hay 🙂", "Rất hay 😀", "Tuyệt tác! 😍"];
        starText.innerText = desc[rating - 1];
    }

    // Color stars
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(`star-${i}`);
        if (star) {
            if (i <= rating) {
                star.classList.remove('text-gray-300');
                star.classList.add('text-yellow-400');
            } else {
                star.classList.add('text-gray-300');
                star.classList.remove('text-yellow-400');
            }
        }
    }
};

// 3. AI Thầy E chấm điểm phiếu đọc sách
window.checkBookLogVn112 = function() {
    const name = document.getElementById('log-movie-name')?.value.trim();
    const chars = document.getElementById('log-characters')?.value.trim();
    const date = document.getElementById('log-date')?.value.trim();
    const summary = document.getElementById('log-summary')?.value.trim();
    const details = document.getElementById('log-details')?.value.trim();
    const thoughts = document.getElementById('log-thoughts')?.value.trim();

    const fb = document.getElementById('fb-vn112-log');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!name || !chars || !date || !summary || !details || !thoughts || userRatingVn112 === 0) {
        fb.innerHTML = `
            <div class="space-y-2">
                <span class="text-xs font-black text-yellow-300 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
                <p class="text-lg font-bold">⚠️ Con hãy điền đầy đủ các thông tin và đánh giá sao trên Phiếu đọc sách trước khi nộp bài nhé!</p>
            </div>
        `;
        fb.className = "mt-8 p-6 bg-yellow-600 text-white rounded-3xl shadow-xl font-bold text-lg animate-in slide-in-from-top-10 duration-500";
        if (typeof window.UI?.showToast === 'function') {
            window.UI.showToast("Hãy điền đầy đủ các trường thông tin!", "error", 3000);
        }
        return;
    }

    fb.innerHTML = `
        <div class="space-y-4">
            <span class="text-sm font-black text-yellow-300 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
            <div class="space-y-2 text-base font-semibold text-sky-100">
                <p>✅ <strong>Tên phim & Nhân vật:</strong> Đầy đủ, rõ ràng.</p>
                <p>✅ <strong>Nội dung chính:</strong> Trình bày đúng trọng tâm của bài giới thiệu.</p>
                <p>✅ <strong>Chi tiết ấn tượng & Cảm nhận:</strong> Giàu cảm xúc cá nhân, lý giải thuyết phục.</p>
                <p>⭐ <strong>Đánh giá yêu thích:</strong> ${"★".repeat(userRatingVn112)}${"☆".repeat(5 - userRatingVn112)}</p>
            </div>
            <div class="border-t border-sky-400 pt-3 mt-3">
                <p class="text-lg font-bold">"Rất giỏi! Con đã hoàn thành phiếu đọc sách đầy đủ, mạch lạc và thể hiện được sự cảm thụ tinh tế đối với bài giới thiệu phim hoạt hình!"</p>
                <span class="inline-block px-3 py-1 bg-white text-sky-700 font-bold text-xs rounded-full shadow-sm mt-2">Đánh giá: Đạt yêu cầu xuất sắc (100%)</span>
            </div>
        </div>
    `;
    fb.className = "mt-8 p-6 bg-sky-600 text-white rounded-3xl shadow-xl animate-in slide-in-from-top-10 duration-500";

    if (typeof window.UI?.showToast === 'function') {
        window.UI.showToast("Kiểm tra phiếu đọc sách thành công!", "success", 3000);
    }
};

// Reset phiếu đọc sách
window.resetBookLogVn112 = function() {
    ['log-movie-name', 'log-characters', 'log-date', 'log-summary', 'log-details', 'log-thoughts'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = "";
    });

    userRatingVn112 = 0;
    const starText = document.getElementById('star-text');
    if (starText) starText.innerText = "Chưa đánh giá";

    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(`star-${i}`);
        if (star) {
            star.classList.add('text-gray-300');
            star.classList.remove('text-yellow-400');
        }
    }

    const fb = document.getElementById('fb-vn112-log');
    if (fb) fb.classList.add('hidden');
};

// 4. Lưu ghi chép Ba lê
window.saveBalletNotesVn112 = function() {
    const notes = document.getElementById('ballet-notes')?.value.trim();
    if (!notes || notes.length < 10) {
        if (typeof window.UI?.showToast === 'function') {
            window.UI.showToast("Con hãy ghi chép thêm ít nhất một thông tin thú vị về Ba lê nhé!", "error", 3000);
        }
        return;
    }
    if (typeof window.UI?.showToast === 'function') {
        window.UI.showToast("Đã lưu ghi chép về Ba lê thành công! Tinh thần tự học rất tốt!", "success", 3500);
    }
};

// 5. Speech-to-Text
window.startVoiceInputVn112 = function(fieldId) {
    const txt = document.getElementById(fieldId);
    if (!txt) return;
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert("Trình duyệt không hỗ trợ nhận diện giọng nói.");
        return;
    }
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    const rec = new SpeechRec();
    rec.lang = 'vi-VN';
    rec.onstart = () => {
        txt.placeholder = "🎙️ Đang nghe con nói...";
    };
    rec.onresult = (event) => {
        const result = event.results[0][0].transcript;
        txt.value = txt.value ? txt.value + " " + result : result;
        txt.placeholder = "Điền nội dung...";
    };
    rec.onerror = () => {
        txt.placeholder = "Điền nội dung...";
    };
    rec.start();
};

// 6. Nộp bài hoàn thành tiết học
window.nopBaiVn112 = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 112', 
            '📖', 
            '<div class="text-center p-6"><span class="text-7xl block mb-4">📖</span><p class="text-xl md:text-3xl font-bold text-sky-950">Chúc mừng con đã hoàn thành xuất sắc Tiết Đọc mở rộng!</p><p class="text-lg text-gray-600 mt-3">Việc ghi chép phiếu đọc sách giúp con tích lũy tư liệu viết văn phong phú hơn.</p></div>'
        );
    }
};
