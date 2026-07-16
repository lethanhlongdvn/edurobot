export const lesson28 = {
    "topic": "Tiếng Việt 5",
    "week": "4",
    "period": "28",
    "title": "NÓI VÀ NGHE: NHỮNG ĐIỂM VUI CHƠI LÍ THÚ",
    "desc": "Bài học rèn luyện kỹ năng thiết lập dàn ý bài nói, chuẩn bị phương tiện trực quan và tự tin thuyết trình giới thiệu về một khu vui chơi lý thú, đồng thời rèn luyện kỹ năng lắng nghe tích cực và nhận xét góp ý xây dựng.",
    "subject": "Nói và nghe",
    "theme": "Thế giới tuổi thơ",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-emerald-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-emerald-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-emerald-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-emerald-800 font-bold text-2xl md:text-3xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Biết cách chuẩn bị nội dung (quang cảnh, hoạt động, cảm xúc) và phương tiện hỗ trợ cho bài giới thiệu.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Thuyết trình tự tin, giọng nói to rõ, truyền cảm, phối hợp điệu bộ cử chỉ tự nhiên khi giới thiệu về địa điểm vui chơi.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Lắng nghe tích cực, biết ghi chép các ý hay và đưa ra phản hồi, nhận xét tích cực cho bài nói của bạn.
            </li>
        </ul>
    </div>

    <!-- 🎡 KHỞI ĐỘNG: ĐU QUAY ĐỐ VUI ĐỊA DANH -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎡</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Hoạt động Khởi động: Đu quay đố vui</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Đoán xem các mô tả dưới đây tương ứng với khu vui chơi thú vị nào nhé!</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl md:text-2xl font-bold">
            <!-- Câu hỏi 1 -->
            <div class="bg-sky-50/50 p-5 rounded-2xl border border-sky-100 space-y-3">
                <p class="text-sky-800">🦁 1. Nơi có nuôi dưỡng nhiều loài thú hoang dã như khỉ, voi, hổ, công và có nhiều cây xanh bóng mát?</p>
                <div class="grid grid-cols-2 gap-2">
                    <button onclick="checkGk28(1, 'dung')" class="p-2 bg-white hover:bg-sky-600 border border-gray-100 rounded-xl">Vườn bách thú</button>
                    <button onclick="checkGk28(1, 'sai')" class="p-2 bg-white hover:bg-sky-600 border border-gray-100 rounded-xl">Công viên nước</button>
                </div>
            </div>

            <!-- Câu hỏi 2 -->
            <div class="bg-sky-50/50 p-5 rounded-2xl border border-sky-100 space-y-3">
                <p class="text-sky-800">🎢 2. Nơi có nhiều trò chơi cảm giác mạnh như tàu lượn siêu tốc, vòng quay khổng lồ và nhà gương?</p>
                <div class="grid grid-cols-2 gap-2">
                    <button onclick="checkGk28(2, 'sai')" class="p-2 bg-white hover:bg-sky-600 border border-gray-100 rounded-xl">Nhà hát múa rối</button>
                    <button onclick="checkGk28(2, 'dung')" class="p-2 bg-white hover:bg-sky-600 border border-gray-100 rounded-xl">Công viên giải trí</button>
                </div>
            </div>
        </div>
    </div>

    <!-- 📝 PHẦN 1: CHUẨN BỊ (BÀI 1) -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">📋</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">1. Chuẩn bị nội dung bài giới thiệu</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Em hãy chọn một trong các khu vui chơi gợi ý bên dưới hoặc tự nhập thông tin vào Phiếu chuẩn bị phát biểu:</p>
            </div>
        </div>

        <!-- Các nút chọn nhanh khu vui chơi mẫu -->
        <div class="flex flex-wrap gap-3">
            <button onclick="autoFillPrep28('thule')" class="px-4 py-2 bg-emerald-600 text-white font-black rounded-xl text-sm shadow-md transition-all active:scale-95">🏰 Điền nhanh: Công viên Thủ Lệ</button>
            <button onclick="autoFillPrep28('vinwonders')" class="px-4 py-2 bg-sky-600 text-white font-black rounded-xl text-sm shadow-md transition-all active:scale-95">🎡 Điền nhanh: VinWonders Nha Trang</button>
            <button onclick="autoFillPrep28('damsen')" class="px-4 py-2 bg-amber-500 text-white font-black rounded-xl text-sm shadow-md transition-all active:scale-95">🏖️ Điền nhanh: Công viên nước Đầm Sen</button>
        </div>

        <!-- Phiếu chuẩn bị tương tác -->
        <div class="bg-gray-50/70 p-6 rounded-3xl border border-gray-100 space-y-4 max-w-4xl mx-auto font-bold text-xl md:text-2xl text-gray-800">
            <h4 class="text-center font-black text-lg text-sky-800 uppercase border-b border-gray-100 pb-2">📋 PHIẾU CHUẨN BỊ BÀI PHÁT BIỂU</h4>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="text-gray-800 block">⭐ a. Tên khu vui chơi em chọn giới thiệu:</label>
                    <input type="text" id="prep-name-28" placeholder="Ví dụ: Công viên Bách Thảo, VinWonders..." class="w-full p-2.5 border border-gray-100 rounded-xl bg-white mt-1">
                </div>
                <div>
                    <label class="text-gray-800 block">⭐ b. Nguồn thông tin (lý do em biết nơi đó):</label>
                    <input type="text" id="prep-source-28" placeholder="Ví dụ: Em đã được đi vào dịp hè / xem qua tivi, sách báo..." class="w-full p-2.5 border border-gray-100 rounded-xl bg-white mt-1">
                </div>
            </div>

            <div>
                <label class="text-gray-800 block">⭐ c. Những điều hấp dẫn về quang cảnh (cây cối, thiết kế, màu sắc...):</label>
                <textarea id="prep-scenery-28" rows="2" placeholder="Ví dụ: Rất nhiều hồ nước lớn trong xanh, đu quay khổng lồ nhiều màu sắc lấp lánh..." class="w-full p-2.5 border border-gray-100 rounded-xl bg-white mt-1"></textarea>
            </div>

            <div>
                <label class="text-gray-800 block">⭐ d. Các hoạt động vui chơi lý thú diễn ra ở đó:</label>
                <textarea id="prep-activity-28" rows="2" placeholder="Ví dụ: Trò chơi tàu lượn mạo hiểm, xem biểu diễn nhạc nước, tắm mát ở hồ tạo sóng..." class="w-full p-2.5 border border-gray-100 rounded-xl bg-white mt-1"></textarea>
            </div>

            <div>
                <label class="text-gray-800 block">⭐ e. Cảm xúc của em khi được trải nghiệm (hoặc mong muốn được đến):</label>
                <input type="text" id="prep-feeling-28" placeholder="Ví dụ: Vô cùng phấn khích, hào hứng và mong muốn được quay lại cùng gia đình..." class="w-full p-2.5 border border-gray-100 rounded-xl bg-white mt-1">
            </div>

            <div class="flex justify-center pt-2">
                <button onclick="savePrep28()" class="px-8 py-3 bg-emerald-600 hover:bg-emerald-600 text-white font-black rounded-xl transition-all shadow-md">LƯU PHIẾU CHUẨN BỊ</button>
            </div>
        </div>
    </div>

    <!-- 🎤 PHẦN 2: TRÌNH BÀY (BÀI 2) -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎤</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">2. Thực hành thuyết trình & Lắng nghe</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Học tập bài mẫu của các bạn và phác thảo bài nói nháp của mình</p>
            </div>
        </div>

        <!-- Bong bóng chat phát biểu mẫu -->
        <div class="bg-sky-50/30 p-6 rounded-3xl border border-sky-100 space-y-4 max-w-4xl mx-auto font-bold text-xl md:text-2xl">
            <h4 class="text-sky-900 font-black flex items-center gap-2">💬 Tham khảo bài giới thiệu mẫu của các bạn:</h4>
            
            <div class="space-y-4">
                <!-- Bạn Minh -->
                <div class="flex gap-3 items-start">
                    <span class="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black shrink-0">M</span>
                    <div class="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-emerald-800">
                        <span class="block font-black text-xs text-emerald-800 mb-1">Bạn Minh (Giới thiệu Công viên Thủ Lệ):</span>
                        "Chào cô và các bạn, mình xin giới thiệu về Công viên Thủ Lệ ở Hà Nội. Nơi đây như một khu rừng nhỏ giữa lòng thành phố với rất nhiều cây cổ thụ tỏa bóng mát rượi. Điểm thú vị nhất là khu vườn thú, nơi chúng mình có thể ngắm nhìn các chú khỉ tinh nghịch chuyền cành, những chú voi khổng lồ và chơi đạp vịt trên hồ nước trong lành..."
                    </div>
                </div>

                <!-- Bạn Hoa -->
                <div class="flex gap-3 items-start justify-end">
                    <div class="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-sky-800 text-right">
                        <span class="block font-black text-xs text-sky-800 mb-1">Bạn Hoa (Giới thiệu VinWonders):</span>
                        "Mình xin giới thiệu về thiên đường giải trí VinWonders Nha Trang. Nằm trên một hòn đảo xinh đẹp, để đến đây chúng ta sẽ được đi cáp treo vượt biển cực kỳ thú vị. Ở đó có lâu đài cổ tích nguy nga, những trò chơi cảm giác mạnh vô cùng phấn khích và rạp chiếu phim bay hiện đại làm mình nhớ mãi..."
                    </div>
                    <span class="w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center font-black shrink-0">H</span>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 font-bold">
            <!-- Soạn nháp thuyết trình -->
            <div class="bg-white p-5 rounded-2xl border border-gray-100 space-y-2">
                <label class="text-gray-800 block text-sm">✍️ Phác thảo bài phát biểu nháp của em dựa trên phiếu chuẩn bị:</label>
                <textarea id="p28-speech-draft" rows="5" placeholder="Kính chào thầy cô và các bạn! Hôm nay mình xin giới thiệu về khu vui chơi..." class="w-full p-3 border border-gray-100 rounded-xl bg-white text-sm font-semibold"></textarea>
                <div class="flex justify-end">
                    <button onclick="submitSpeechDraft28()" class="px-5 py-2 bg-sky-600 text-white font-black rounded-lg text-sm shadow-md transition-all active:scale-95">Nộp bản nháp bài nói</button>
                </div>
            </div>

            <!-- Ghi chép khi lắng nghe bạn -->
            <div class="bg-white p-5 rounded-2xl border border-gray-100 space-y-2">
                <label class="text-gray-800 block text-sm">👂 Ghi chép nhanh những điều thú vị em học tập được khi lắng nghe bạn khác giới thiệu:</label>
                <textarea id="p28-listen-note" rows="5" placeholder="Ví dụ: Bạn Nam dùng cử chỉ vẫy tay rất tự tin, giọng bạn kể về trò chơi tàu lượn vô cùng hồi hộp..." class="w-full p-3 border border-gray-100 rounded-xl bg-white text-sm font-semibold"></textarea>
                <div class="flex justify-end">
                    <button onclick="submitListenNote28()" class="px-5 py-2 bg-sky-600 text-white font-black rounded-lg text-sm shadow-md transition-all active:scale-95">Lưu ghi chép lắng nghe</button>
                </div>
            </div>
        </div>
    </div>

    <!-- ⭐ PHẦN 3: ĐÁNH GIÁ (BÀI 3) -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">⭐</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">3. Đánh giá bài phát biểu của em và bạn</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Đọc soát và tích chọn các tiêu chí đánh giá chất lượng nói và nghe theo quy chuẩn:</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 font-bold text-sky-800">
            <!-- Tiêu chí 1 -->
            <div class="p-4 bg-sky-50 rounded-2xl border border-sky-100 flex items-start gap-2.5">
                <input type="checkbox" id="ck-eval-1" class="w-5 h-5 rounded cursor-pointer mt-0.5">
                <div>
                    <span class="font-black text-sky-800 block">🔹 Tiêu chí 1</span>
                    <span class="text-xs text-gray-800 font-medium block mt-0.5">Nội dung giới thiệu phong phú, sinh động và hấp dẫn người nghe.</span>
                </div>
            </div>

            <!-- Tiêu chí 2 -->
            <div class="p-4 bg-sky-50 rounded-2xl border border-sky-100 flex items-start gap-2.5">
                <input type="checkbox" id="ck-eval-2" class="w-5 h-5 rounded cursor-pointer mt-0.5">
                <div>
                    <span class="font-black text-sky-800 block">🔹 Tiêu chí 2</span>
                    <span class="text-xs text-gray-800 font-medium block mt-0.5">Người nghe có phản hồi tích cực (lắng nghe, ghi chép, hỏi đáp hào hứng).</span>
                </div>
            </div>

            <!-- Tiêu chí 3 (Bông hoa giải quyết) -->
            <div class="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex items-start gap-2.5">
                <input type="checkbox" id="ck-eval-3" class="w-5 h-5 rounded cursor-pointer mt-0.5">
                <div>
                    <span class="font-black text-amber-600 block flex items-center gap-1">
                        <span class="px-1.5 py-0.5 bg-amber-500 text-white rounded text-[10px]">🌸 Bông hoa</span>
                        Tiêu chí 3
                    </span>
                    <span class="text-xs text-gray-800 font-medium block mt-0.5">Giọng nói truyền cảm, phát âm to rõ, phối hợp cử chỉ, ánh mắt và điệu bộ tự nhiên.</span>
                </div>
            </div>
        </div>

        <div class="flex justify-center">
            <button onclick="evaluateSpeech28()" class="px-8 py-3 bg-emerald-600 hover:bg-emerald-600 text-white font-black rounded-xl transition-all shadow-md">GỬI PHIẾU ĐÁNH GIÁ</button>
        </div>
    </div>

    <!-- 🪐 PHẦN 4: VẬN DỤNG - THƯ VIỆN HÀNH TINH -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🪐</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Hoạt động Vận dụng: Thư viện vũ trụ</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Sưu tầm tranh ảnh, bài viết về các hành tinh ngoài Trái Đất và ghi nhận điều lý thú em tìm hiểu được:</p>
            </div>
        </div>

        <!-- Thư viện ảnh hành tinh mini -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 font-bold text-sm">
            <button onclick="selectPlanet28('mar', 'Sao Hỏa (Hành tinh Đỏ)')" id="pl-mar" class="p-4 bg-sky-50 text-gray-800 rounded-2xl border-2 border-sky-100 hover:border-sky-100 transition-all flex flex-col items-center gap-2">
                <span class="text-xl md:text-3xl">🔴</span>
                <span>Sao Hỏa</span>
                <span class="text-[10px] text-gray-800">Hành tinh cát bụi đỏ gồ ghề</span>
            </button>
            <button onclick="selectPlanet28('sat', 'Sao Thổ (Hành tinh có vành đai)')" id="pl-sat" class="p-4 bg-sky-50 text-gray-800 rounded-2xl border-2 border-sky-100 hover:border-sky-100 transition-all flex flex-col items-center gap-2">
                <span class="text-xl md:text-3xl">🪐</span>
                <span>Sao Thổ</span>
                <span class="text-[10px] text-gray-800">Có vành đai bụi băng lấp lánh</span>
            </button>
            <button onclick="selectPlanet28('jup', 'Sao Mộc (Hành tinh khí khổng lồ)')" id="pl-jup" class="p-4 bg-sky-50 text-gray-800 rounded-2xl border-2 border-sky-100 hover:border-sky-100 transition-all flex flex-col items-center gap-2">
                <span class="text-xl md:text-3xl">🟤</span>
                <span>Sao Mộc</span>
                <span class="text-[10px] text-gray-800">Cơn bão khổng lồ Vết Đỏ Lớn</span>
            </button>
        </div>

        <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-3">
            <div>
                <label class="font-black text-gray-800 text-sm block">🪐 Ghi chép một điều thú vị về hành tinh em sưu tầm được để chia sẻ với người thân:</label>
                <textarea id="p28-planet-note" rows="3" placeholder="Ví dụ: Sao Thổ có một vành đai đá bụi vô cùng tráng lệ bao quanh..." class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-white text-xl md:text-2xl mt-1"></textarea>
            </div>
            <div class="flex justify-center">
                <button onclick="submitPlanetNote28()" class="px-8 py-3 bg-sky-600 hover:bg-sky-600 text-white font-black rounded-xl transition-all shadow-md">NỘP BÀI VẬN DỤNG ✓</button>
            </div>
        </div>
    </div>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn28Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Yêu cầu chính của bài học Nói và nghe: Những điểm vui chơi lí thú là gì?",
            "options": [
                "Viết báo cáo về các hoạt động lao động dọn vệ sinh trường lớp",
                "Giới thiệu về một nơi vui chơi mà em đã đến hoặc muốn đến",
                "Đóng vai hướng dẫn viên giới thiệu về lịch sử của thủ đô",
                "Đọc thuộc lòng bài thơ về một cảnh đẹp quê hương"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Việc chuẩn bị phương tiện hỗ trợ (như tranh ảnh, sơ đồ, video) khi phát biểu có tác dụng gì?",
            "options": [
                "Làm bài giới thiệu sinh động, hấp dẫn và giúp người nghe dễ hình dung hơn",
                "Để bài nói kéo dài thời gian hơn",
                "Không có tác dụng gì, có thể bỏ qua",
                "Để thay thế hoàn toàn phần lời nói thuyết trình"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi chuẩn bị bài giới thiệu, thông tin nào dưới đây thuộc nhóm 'quang cảnh' của khu vui chơi?",
            "options": [
                "Nhiều cây xanh bóng mát, hồ nước rộng xanh biếc, đu quay khổng lồ rực rỡ sắc màu",
                "Các hoạt động đạp vịt, tắm mát, tàu lượn cảm giác mạnh",
                "Cảm xúc vô cùng háo hức và mong muốn được trở lại",
                "Tên các thành viên trong tổ cùng đi chơi"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi trình bày bài nói trước lớp, em nên chú ý điều gì về tư thế và biểu cảm?",
            "options": [
                "Đứng yên một chỗ, cúi đầu đọc tài liệu viết sẵn từ đầu đến cuối",
                "Tự tin, phối hợp giọng nói truyền cảm với ánh mắt, cử chỉ và điệu bộ tự nhiên",
                "Nói thật nhanh để mau chóng kết thúc phần trình bày",
                "Chỉ nhìn thẳng vào góc tường phía sau lớp học"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Khi nghe bạn khác thuyết trình, nhiệm vụ quan trọng của người nghe là gì?",
            "options": [
                "Làm việc riêng hoặc nói chuyện nhỏ với bạn bên cạnh",
                "Lắng nghe tích cực, ghi chép lại những điều thú vị em học tập được để nhận xét và đặt câu hỏi hỏi bạn",
                "Nhắc nhở bạn nói nhanh lên",
                "Không cần chú ý vì đó là bài của bạn"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Khu vui chơi nào nổi tiếng với vườn thú bảo tồn và hồ đạp vịt rợp bóng cây mát rượi giữa lòng thủ đô Hà Nội?",
            "options": [
                "Công viên Thủ Lệ",
                "VinWonders Nha Trang",
                "Công viên nước Đầm Sen",
                "Khu du lịch Đại Nam"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Để đi từ đất liền ra đảo hòn Tre của VinWonders Nha Trang, du khách được trải nghiệm phương tiện đặc biệt nào?",
            "options": [
                "Tàu hỏa xuyên núi",
                "Tuyến cáp treo vượt biển dài",
                "Tàu điện ngầm dưới đáy biển",
                "Xe bus công cộng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tiêu chí đánh giá thứ ba (Bông hoa) ở Bài 3 trong SGK trang 44 muốn bổ sung yêu cầu gì khi thuyết trình?",
            "options": [
                "Giọng nói truyền cảm, to rõ và cử chỉ điệu bộ tự tin, tự nhiên phù hợp nội dung nói",
                "Màu sắc trang phục của người thuyết trình phải sặc sỡ",
                "Thời gian nói phải chính xác từng giây",
                "Số lượng trang ảnh minh họa phải từ 10 bức trở lên"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi người nghe đưa ra câu hỏi chất vấn sau bài thuyết trình, em nên phản hồi thế nào?",
            "options": [
                "Từ chối trả lời vì bài thuyết trình đã kết thúc",
                "Lắng nghe câu hỏi, trả lời một cách lịch sự, cầu tiến và cảm ơn ý kiến đóng góp của bạn",
                "Bỏ về chỗ ngồi ngay lập tức",
                "Tỏ thái độ bực bội với người hỏi"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Hoạt động 'Vận dụng' ở cuối trang 44 yêu cầu em sưu tầm tranh ảnh và bài viết về chủ đề gì?",
            "options": [
                "Các khu di tích lịch sử nổi tiếng Việt Nam",
                "Các hành tinh ngoài Trái Đất",
                "Những loài động vật dưới đại dương",
                "Cách viết báo cáo lớp"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Hành tinh nào được mệnh danh là 'Hành tinh Đỏ' do bề mặt có nhiều sắt oxit tạo nên màu đỏ gạch?",
            "options": [
                "Sao Kim",
                "Sao Mộc",
                "Sao Hỏa",
                "Sao Thổ"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Đặc điểm nhận dạng độc đáo nhất của Sao Thổ khi nhìn từ xa là gì?",
            "options": [
                "Vết đỏ lớn khổng lồ trên bề mặt",
                "Hệ thống vành đai bụi đá lớn rực rỡ bao quanh",
                "Bề mặt toàn bộ là nước biển trong xanh",
                "Hai chiếc sừng lớn ở hai cực hành tinh"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Hành tinh khí lớn nhất trong Hệ Mặt Trời có bão 'Vết Đỏ Lớn' là hành tinh nào?",
            "options": [
                "Sao Mộc",
                "Sao Hỏa",
                "Sao Thổ",
                "Trái Đất"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi chuẩn bị bài giới thiệu, việc dự kiến các nội dung chính giúp ích gì cho em?",
            "options": [
                "Giúp bài thuyết trình đi đúng hướng, mạch lạc và không bị sót các chi tiết thú vị",
                "Để bài nói có nhiều từ ngữ phức tạp hơn",
                "Giúp em tự tin nói mà không cần nhìn khán giả",
                "Không có tác dụng cụ thể nào"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Những điểm vui chơi lý thú giúp mang lại giá trị tinh thần gì cho tuổi thơ của các em?",
            "options": [
                "Giúp giải tỏa căng thẳng học tập, rèn luyện thể chất và lưu giữ kỷ niệm đẹp",
                "Làm tốn nhiều chi phí của gia đình",
                "Không mang lại giá trị cụ thể nào ngoài chơi game",
                "Khiến học sinh lười biếng hơn"
            ],
            "answer": 0,
            "level": 0
        }
    ]
};

// --- LOGIC GAME KHỞI ĐỘNG ---
window.checkGk28 = function(quesId, result) {
    if (result === 'dung') {
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Chính xác!", "🎉", `Câu trả lời ${quesId} hoàn toàn chính xác! Chúc mừng em!`);
        }
    } else {
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Sai rồi", "❌", "Câu trả lời chưa chính xác. Em hãy quan sát kỹ tranh gợi ý và suy luận lại nhé!");
        }
    }
};

// --- AUTOFILL PREPARATION CARD ---
window.autoFillPrep28 = function(destId) {
    const nameInput = document.getElementById('prep-name-28');
    const sourceInput = document.getElementById('prep-source-28');
    const sceneryInput = document.getElementById('prep-scenery-28');
    const activityInput = document.getElementById('prep-activity-28');
    const feelingInput = document.getElementById('prep-feeling-28');

    if (!nameInput || !sourceInput || !sceneryInput || !activityInput || !feelingInput) return;

    if (destId === 'thule') {
        nameInput.value = "Công viên Thủ Lệ (Hà Nội)";
        sourceInput.value = "Em đã được bố mẹ cho đi chơi vào dịp hè năm ngoái.";
        sceneryInput.value = "Khuôn viên mát mẻ với rất nhiều cây cổ thụ to lớn, hồ nước trong xanh lấp lánh và các khu chuồng thú được bố trí bao quanh.";
        activityInput.value = "Cho voi ăn mía, xem khỉ leo trèo tinh nghịch, đạp vịt trên hồ cùng anh chị và ngắm nhìn loài chim công sặc sỡ.";
        feelingInput.value = "Vô cùng vui vẻ, hào hứng và muốn được quay lại vui chơi cùng cả nhà.";
    } else if (destId === 'vinwonders') {
        nameInput.value = "VinWonders Nha Trang (Đảo Hòn Tre)";
        sourceInput.value = "Em đã tìm hiểu qua chương trình tivi giới thiệu du lịch miền Trung.";
        sceneryInput.value = "Nằm trên hòn đảo xanh xinh đẹp giữa biển khơi, lâu đài châu Âu nguy nga rực rỡ và vòng đu quay khổng lồ nhiều màu.";
        activityInput.value = "Đi cáp treo vượt biển mát lạnh, chơi các trò cảm giác mạnh như tàu lượn siêu tốc, xem biểu diễn nhạc nước đầy màu sắc nghệ thuật.";
        feelingInput.value = "Cực kỳ phấn khích, choáng ngợp và ao ước sẽ được bố mẹ đưa đi du lịch Nha Trang hè này.";
    } else if (destId === 'damsen') {
        nameInput.value = "Công viên nước Đầm Sen (TP. Hồ Chí Minh)";
        sourceInput.value = "Em đã được đi chơi cùng các bạn trong lớp nhân dịp dã ngoại.";
        sceneryInput.value = "Hồ tạo sóng nhân tạo khổng lồ, các máng trượt nước nhiều màu sặc sỡ và tượng các con thú phun nước ngộ nghĩnh.";
        activityInput.value = "Trượt máng nước tốc độ cao đầy kịch tính, tắm mát cùng các bạn ở hồ tạo sóng, thưởng thức kem dừa thơm mát.";
        feelingInput.value = "Rất sảng khoái, mát mẻ, xua tan cái nóng bức và gắn kết tình bạn bè hơn.";
    }

    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback("Điền nhanh thành công", "🏰", `Đã tự động điền gợi ý thông tin chuẩn bị cho "${nameInput.value}".`);
    }
};

// --- LƯU PHIẾU CHUẨN BỊ ---
window.savePrep28 = function() {
    const name = document.getElementById('prep-name-28').value.trim();
    if (!name) {
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Thiếu thông tin", "⚠️", "Em vui lòng điền tên khu vui chơi em chọn giới thiệu nhé!");
        }
        return;
    }
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback("Lưu thành công", "🌟", `Phiếu chuẩn bị bài giới thiệu về "${name}" đã được ghi nhận vào hệ thống học tập!`);
    }
};

// --- NỘP BẢN NHÁP BÀI NÓI ---
window.submitSpeechDraft28 = function() {
    const draft = document.getElementById('p28-speech-draft').value.trim();
    if (draft.length < 20) {
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Nhắc nhở", "⚠️", "Bản phác thảo bài nói hơi ngắn, em hãy phác thảo chi tiết hơn một chút để nói hay hơn nhé!");
        }
        return;
    }
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback("Nộp bài nói thành công", "🎉", "Bản phác thảo bài phát biểu của em đã được Thầy E ghi nhận tốt!");
    }
};

// --- LƯU GHI CHÉP LẮNG NGHE ---
window.submitListenNote28 = function() {
    const note = document.getElementById('p28-listen-note').value.trim();
    if (!note) {
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Thiếu thông tin", "⚠️", "Em hãy ghi lại ít nhất một điều thú vị em học được ở bài của bạn nhé!");
        }
        return;
    }
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback("Lưu thành công", "👂", "Ghi chép lắng nghe tích cực của em đã được lưu thành công.");
    }
};

// --- GỬI ĐÁNH GIÁ ---
window.evaluateSpeech28 = function() {
    const c1 = document.getElementById('ck-eval-1').checked;
    const c2 = document.getElementById('ck-eval-2').checked;
    const c3 = document.getElementById('ck-eval-3').checked;

    if (!c1 || !c2 || !c3) {
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Đánh giá lại", "⚠️", "Em hãy tích chọn và đọc kỹ đầy đủ cả 3 tiêu chuẩn đánh giá để bài phát biểu đạt chất lượng hoàn hảo nhé!");
        }
        return;
    }

    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback("Hoàn thành Đánh giá", "🌟", "Bảng đánh giá bài phát biểu của em và bạn đạt loại: Xuất sắc (128%)!");
    }
};

// --- CHỌN HÀNH TINH (VẬN DỤNG) ---
let selectedPlanetName28 = "";
window.selectPlanet28 = function(pId, name) {
    selectedPlanetName28 = name;
    const m = document.getElementById('pl-mar');
    const s = document.getElementById('pl-sat');
    const j = document.getElementById('pl-jup');
    
    if (m && s && j) {
        m.className = "p-4 bg-sky-50 text-gray-800 rounded-2xl border-2 border-sky-100 transition-all flex flex-col items-center gap-2";
        s.className = "p-4 bg-sky-50 text-gray-800 rounded-2xl border-2 border-sky-100 transition-all flex flex-col items-center gap-2";
        j.className = "p-4 bg-sky-50 text-gray-800 rounded-2xl border-2 border-sky-100 transition-all flex flex-col items-center gap-2";
    }

    const currentBtn = document.getElementById('pl-' + pId);
    if (currentBtn) {
        currentBtn.className = "p-4 bg-emerald-600 text-white rounded-2xl border-2 border-emerald-100 transition-all flex flex-col items-center gap-2 scale-95 opacity-90";
    }

    const note = document.getElementById('p28-planet-note');
    if (note) {
        if (pId === 'mar') {
            note.value = "Sao Hỏa là hành tinh đỏ có lớp bụi gỉ sắt bao quanh, địa hình hoang mạc gồ ghề và có thể có nước đóng băng dưới lòng đất.";
        } else if (pId === 'sat') {
            note.value = "Sao Thổ có một hệ vành đai bụi băng lấp lánh khổng lồ rất rộng lớn bao quanh cực kỳ đẹp mắt, là hành tinh lớn thứ hai trong hệ mặt trời.";
        } else if (pId === 'jup') {
            note.value = "Sao Mộc là một hành tinh khí khổng lồ cực kỳ lớn, có một Vết Đỏ Lớn thực chất là một cơn bão khổng lồ quay quanh từ hàng trăm năm.";
        }
    }
};

// --- NỘP BÀI VẬN DỤNG ---
window.submitPlanetNote28 = function() {
    const note = document.getElementById('p28-planet-note').value.trim();
    if (!note) {
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Thiếu thông tin", "⚠️", "Em hãy chọn hành tinh hoặc viết ghi chú điều thú vị trước khi nộp bài vận dụng nhé!");
        }
        return;
    }
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback("Nộp bài vận dụng thành công", "🚀", "Ý kiến chia sẻ thú vị của em về hành tinh đã được gửi lên góc trưng bày học tập của lớp!");
    }
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.submitVn28Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 28',
            '🎉',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎡</span><p class="text-lg md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài học nói và nghe!</p><p class="text-2xl md:text-3xl text-gray-800 mt-3">Một người thuyết trình giỏi luôn tự tin và to rõ, đồng thời một người nghe giỏi luôn biết lắng nghe tôn trọng và đặt câu hỏi thông minh.</p></div>'
        );
    }
};
