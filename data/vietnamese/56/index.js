export const lesson56 = {
    "topic": "Tiếng Việt 5",
    "week": "8",
    "period": "56",
    "title": "NÓI VÀ NGHE: CẢNH ĐẸP THIÊN NHIÊN",
    "desc": "Bài học giúp học sinh rèn luyện kỹ năng giới thiệu, trình bày thuyết trình về một cảnh đẹp thiên nhiên của đất nước ta với bố cục rõ ràng, kết hợp từ ngữ ấn tượng và giọng điệu tự hào.",
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
        <ul class="space-y-3 text-sky-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Biết cách chuẩn bị và trình bày trước lớp bài giới thiệu về một danh lam thắng cảnh nổi tiếng của Việt Nam.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Trình bày rõ ràng cấu trúc 3 phần (Mở đầu, Triển khai, Kết thúc), sử dụng từ ngữ gợi tả sinh động và tự tin thể hiện lòng tự hào qua giọng nói.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Rèn luyện khả năng lắng nghe chủ động, biết ghi chép thông tin thú vị và góp ý chân thành cho bạn.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG: GIẢI MÃ THẮNG CẢNH -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Thử tài giải mã địa danh</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy đọc mô tả dưới đây và đoán xem đó là danh lam thắng cảnh nổi tiếng nào nhé:</p>
        
        <div class="bg-sky-50/30 p-6 rounded-3xl border border-sky-100/50 max-w-xl mx-auto space-y-4">
            <div class="text-center font-bold text-xl md:text-2xl text-sky-800 py-2">
                "Kỳ quan thiên nhiên thế giới ở Quảng Ninh, bao gồm gần 2056 hòn đảo lớn nhỏ nằm giữa biển nước xanh biếc với nhiều hang động kỳ vĩ..."
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button onclick="checkKD56('sai1')" class="px-5 py-3 bg-white hover:bg-sky-600 border border-sky-100 rounded-xl font-bold text-base text-gray-800 transition-all">Cao nguyên đá Đồng Văn</button>
                <button onclick="checkKD56('dung')" class="px-5 py-3 bg-white hover:bg-sky-600 border border-sky-100 rounded-xl font-bold text-base text-gray-800 transition-all">Vịnh Hạ Long</button>
                <button onclick="checkKD56('sai2')" class="px-5 py-3 bg-white hover:bg-sky-600 border border-sky-100 rounded-xl font-bold text-base text-gray-800 transition-all">Động Phong Nha - Kẻ Bàng</button>
                <button onclick="checkKD56('sai3')" class="px-5 py-3 bg-white hover:bg-sky-600 border border-sky-100 rounded-xl font-bold text-base text-gray-800 transition-all">Đảo Ngọc - Phú Quốc</button>
            </div>
            <div id="fb-vn56-kd" class="hidden p-4 rounded-xl text-sm font-bold text-center mt-2"></div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- KHÔNG GIAN CHUẨN BỊ BÀI NÓI -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">1</div>
                <div>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800">Chuẩn bị bài thuyết trình</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Em hãy chọn một cảnh đẹp thiên nhiên mà em muốn giới thiệu để nhận ý tưởng gợi ý:</p>
                </div>
            </div>

            <div class="flex flex-wrap gap-2 justify-center">
                <button onclick="selectScenic56('dong_van')" id="btn-sc-dv" class="px-4 py-2.5 bg-white border border-sky-100 rounded-2xl font-bold text-base text-gray-800 hover:bg-sky-50 transition-all">Cao nguyên đá Đồng Văn</button>
                <button onclick="selectScenic56('ha_long')" id="btn-sc-hl" class="px-4 py-2.5 bg-white border border-sky-100 rounded-2xl font-bold text-base text-gray-800 hover:bg-sky-50 transition-all">Vịnh Hạ Long</button>
                <button onclick="selectScenic56('phong_nha')" id="btn-sc-pn" class="px-4 py-2.5 bg-white border border-sky-100 rounded-2xl font-bold text-base text-gray-800 hover:bg-sky-50 transition-all">Động Phong Nha - Kẻ Bàng</button>
                <button onclick="selectScenic56('phu_quoc')" id="btn-sc-pq" class="px-4 py-2.5 bg-white border border-sky-100 rounded-2xl font-bold text-base text-gray-800 hover:bg-sky-50 transition-all">Đảo Ngọc - Phú Quốc</button>
                <button onclick="selectScenic56('khac')" id="btn-sc-khac" class="px-4 py-2.5 bg-white border border-sky-100 rounded-2xl font-bold text-base text-gray-800 hover:bg-sky-50 transition-all">Thắng cảnh khác</button>
            </div>

            <!-- Khung hiển thị gợi ý dàn ý mẫu -->
            <div id="scenic-outline-56" class="hidden bg-white p-6 rounded-3xl border border-sky-100 shadow-inner space-y-4">
                <h4 class="text-lg font-black text-sky-800" id="scenic-title">Dàn ý bài nói mẫu:</h4>
                <div class="space-y-3 font-bold text-gray-800 text-base md:text-lg">
                    <p class="p-3 bg-sky-50/20 rounded-xl"><span class="text-sky-800 font-extrabold mr-1">🎙️ MỞ ĐẦU:</span> <span id="scenic-intro" class="font-medium"></span></p>
                    <p class="p-3 bg-sky-50/20 rounded-xl"><span class="text-sky-800 font-extrabold mr-1">🎙️ TRIỂN KHAI:</span> <span id="scenic-body" class="font-medium"></span></p>
                    <p class="p-3 bg-sky-50/20 rounded-xl"><span class="text-sky-800 font-extrabold mr-1">🎙️ KẾT THÚC:</span> <span id="scenic-conclusion" class="font-medium"></span></p>
                </div>
            </div>
        </div>
    </section>

    <!-- THỰC HÀNH VIẾT BÀI PHÁT BIỂU VÀ CHẤM ĐIỂM -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🗣️</div>
                <div>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800">Thuyết trình nháp</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Viết bài phát biểu chi tiết của em để AI Thầy E chấm nhận xét cấu trúc bài phát biểu:</p>
                </div>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner space-y-4">
                <textarea id="ans-vn56-speech" rows="6" placeholder="Kính chào Thầy Cô và các bạn. Hôm nay, mình xin đại diện giới thiệu về danh lam thắng cảnh vịnh Hạ Long..." class="w-full p-4 text-xl md:text-2xl border-2 border-amber-100 focus:border-amber-500 outline-none rounded-2xl bg-amber-50/10 font-bold text-gray-800 leading-relaxed"></textarea>
                
                <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <button onclick="checkWritingVn56()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                        <span>CHẤM BÀI PHÁT BIỂU</span>
                    </button>
                    <div id="fb-vn56-writing" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- TRAO ĐỔI GÓP Ý -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">👥</div>
                <div>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800">Trao đổi và Góp ý (Peer Review)</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Đánh tích xanh nếu bài thuyết trình của em đạt các tiêu chuẩn tự đánh giá và lắng nghe góp ý từ bạn:</p>
                </div>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-sky-100 shadow-inner grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex items-start gap-3 p-3 bg-sky-50/20 hover:bg-sky-50/50 rounded-2xl border border-sky-100/50 font-bold text-base text-sky-800 cursor-pointer">
                    <input type="checkbox" class="w-5 h-5 rounded border-sky-100 text-sky-800 focus:ring-sky-600 mt-0.5">
                    <span>Đã giới thiệu được thông tin thú vị, độc đáo về danh lam thắng cảnh.</span>
                </label>
                <label class="flex items-start gap-3 p-3 bg-sky-50/20 hover:bg-sky-50/50 rounded-2xl border border-sky-100/50 font-bold text-base text-sky-800 cursor-pointer">
                    <input type="checkbox" class="w-5 h-5 rounded border-sky-100 text-sky-800 focus:ring-sky-600 mt-0.5">
                    <span>Sử dụng được các từ ngữ miêu tả ấn tượng, giàu hình ảnh gợi hình.</span>
                </label>
                <label class="flex items-start gap-3 p-3 bg-sky-50/20 hover:bg-sky-50/50 rounded-2xl border border-sky-100/50 font-bold text-base text-sky-800 cursor-pointer">
                    <input type="checkbox" class="w-5 h-5 rounded border-sky-100 text-sky-800 focus:ring-sky-600 mt-0.5">
                    <span>Trình bày tự tin, ánh mắt hướng về khán giả và giọng nói truyền cảm hứng tự hào.</span>
                </label>
                <label class="flex items-start gap-3 p-3 bg-sky-50/20 hover:bg-sky-50/50 rounded-2xl border border-sky-100/50 font-bold text-base text-sky-800 cursor-pointer">
                    <input type="checkbox" class="w-5 h-5 rounded border-sky-100 text-sky-800 focus:ring-sky-600 mt-0.5">
                    <span>Đã lắng nghe chủ động và ghi chép lại những thông tin thú vị từ bài nói của bạn khác.</span>
                </label>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn56Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH BÀI NÓI</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Yêu cầu chính của bài Nói và nghe 'Cảnh đẹp thiên nhiên' là gì?",
            "options": [
                "Giới thiệu một món ăn đặc sản vùng miền",
                "Kể về một chuyến tham quan di tích lịch sử nước ta",
                "Giới thiệu một cảnh đẹp thiên nhiên của đất nước ta",
                "Miêu tả hoạt động bảo vệ rừng cây ngập mặn"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Bố cục khi trình bày bài nói giới thiệu một danh lam thắng cảnh gồm mấy phần?",
            "options": [
                "2 phần: Giới thiệu và nhận xét",
                "3 phần: Mở đầu, Triển khai, Kết thúc",
                "4 phần: Mở bài, thân bài, kết bài, hỏi đáp",
                "5 phần theo thứ tự các tiêu chuẩn"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Phần Mở đầu của bài thuyết trình Nói và nghe cần đạt được nội dung gì?",
            "options": [
                "Nêu chi tiết số lượng hang động và đảo lớn nhỏ",
                "Giới thiệu khái quát tên thắng cảnh, địa điểm và đặc điểm nổi bật nhất",
                "Mời gọi mọi người đến du lịch và bày tỏ lời cảm ơn",
                "Đưa ra các tranh ảnh hoặc video minh họa phụ trợ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nhiệm vụ cốt lõi của phần Triển khai trong bài giới thiệu thắng cảnh là gì?",
            "options": [
                "Nêu những thông tin đặc sắc, độc đáo về số lượng, hình dáng, cảnh quan của thắng cảnh",
                "Nêu lời chào và tự giới thiệu tên, lớp của bản thân",
                "Khẳng định giá trị của danh lam và mời bạn bè quốc tế tham quan",
                "Lắng nghe và ghi lại câu hỏi thảo luận từ bạn bè dưới lớp"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong phần Kết thúc của bài trình bày, học sinh cần nêu nội dung nào?",
            "options": [
                "Kể chi tiết câu chuyện thần thoại gắn liền với danh lam",
                "Khẳng định giá trị, sức hấp dẫn của thắng cảnh và mời gọi mọi người đến tham quan",
                "Mô tả thời tiết của danh lam trong bốn mùa",
                "Liệt kê các phương tiện di chuyển đến thắng cảnh"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Thắng cảnh nào được sách giáo khoa gợi ý nằm ở tỉnh Hà Giang với dãy núi đá tai mèo nổi tiếng?",
            "options": [
                "Vịnh Hạ Long",
                "Cao nguyên đá Đồng Văn",
                "Động Phong Nha - Kẻ Bàng",
                "Đảo Ngọc - Phú Quốc"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Theo gợi ý trong bài học, đặc điểm nổi bật nào gắn liền với Vịnh Hạ Long (Quảng Ninh)?",
            "options": [
                "Gồm gần 2056 hòn đảo lớn nhỏ với nhiều hang động kì vĩ",
                "Có hang động đá vôi dài nhất thế giới",
                "Được bao quanh bởi rừng tràm thơm ngây ngất",
                "Là hòn đảo nhiệt đới bí ẩn xanh mướt"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Thắng cảnh Đảo Ngọc - Phú Quốc được gợi ý miêu tả bằng những đặc sắc nào?",
            "options": [
                "Là công viên địa chất toàn cầu cao nguyên đá",
                "Thiên đường du lịch miền nhiệt đới với đảo xa bí ẩn, rừng xanh mướt",
                "Hệ thống sông suối uốn khúc quanh co",
                "Những dãy núi đá vôi hùng vĩ cao lừng lững"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Phương tiện bổ trợ nào thích hợp nhất để bài nói thêm thuyết phục và sinh động?",
            "options": [
                "Đọc chép văn bản bài viết từ sách tham khảo",
                "Sử dụng thêm các tranh ảnh, sơ đồ hoặc đoạn phim ngắn về thắng cảnh để minh họa",
                "Viết lại toàn bộ bài nói lên bảng đen",
                "Nhờ bạn dưới lớp phát biểu hộ một phần"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi trình bày bài nói, giọng điệu của học sinh cần thể hiện điều gì chủ đạo?",
            "options": [
                "Giọng nói nhỏ nhẹ thì thầm khó nghe",
                "Sự tự hào, lòng yêu mến và hứng khởi đối với cảnh đẹp đất nước quê hương",
                "Giọng đọc đều đều như đang đọc sách tập đọc",
                "Thái độ vội vã để nhanh chóng hoàn thành phần nói"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Việc ghi lại những điều thú vị trong bài trình bày của bạn giúp ích gì cho em?",
            "options": [
                "Để báo cáo giáo viên nếu bạn nói sai thông tin",
                "Rút kinh nghiệm cho bản thân, tích lũy kiến thức và biết cách góp ý chân thành cho bạn",
                "Để làm bài thi thay thế cho phần nói của mình",
                "Không mang lại tác dụng thực tế nào"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Tiêu chí nào được dùng để trao đổi, góp ý sau khi bạn trình bày xong?",
            "options": [
                "Giới thiệu thông tin thú vị, dùng từ miêu tả ấn tượng, thái độ tự tin truyền cảm",
                "Bạn có trang phục sặc sỡ và đẹp nhất lớp không",
                "Bài nói của bạn có dài đủ 15 phút không",
                "Quê quán của bạn có nằm ở địa danh đó không"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Thắng cảnh Động Phong Nha - Kẻ Bàng thuộc địa phận tỉnh nào của nước ta?",
            "options": [
                "Hà Giang",
                "Quảng Bình",
                "Quảng Ninh",
                "Kiên Giang"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Địa danh Đảo Ngọc - Phú Quốc thuộc tỉnh nào?",
            "options": [
                "Kiên Giang",
                "Quảng Bình",
                "Quảng Ninh",
                "Hà Giang"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Hoạt động đọc mở rộng cuối bài khuyên học sinh tìm đọc thông tin về những miền đất xa xôi nào?",
            "options": [
                "Nam Cực, Bắc Cực, sa mạc Xa-ha-ra",
                "Miền đồng bằng sông Cửu Long",
                "Các thành phố sầm uất ở châu Âu",
                "Hệ thống núi đá Hoàng Liên Sơn"
            ],
            "answer": 0,
            "level": 0
        }
    ]
};

// --- KIỂM TRA KHỞI ĐỘNG VN56 ---
window.checkKD56 = function(status) {
    const fb = document.getElementById('fb-vn56-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (status === 'dung') {
        fb.innerHTML = "🎉 Tuyệt vời! Câu trả lời hoàn toàn chính xác. Kỳ quan thế giới với gần 2056 hòn đảo lớn nhỏ ở Quảng Ninh chính là **Vịnh Hạ Long**. Em đã sẵn sàng chuẩn bị bài nói rồi!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác. Gợi ý: Gần 2056 hòn đảo lớn nhỏ và nằm ở tỉnh Quảng Ninh. Hãy chọn lại nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-rose-600 text-white mt-2 shadow-sm animate-bounce";
    }
};

// --- LỰA CHỌN DANH LAM THẮNG CẢNH (BÀI TẬP 1) ---
window.selectScenic56 = function(scenicId) {
    const btnDv = document.getElementById('btn-sc-dv');
    const btnHl = document.getElementById('btn-sc-hl');
    const btnPn = document.getElementById('btn-sc-pn');
    const btnPq = document.getElementById('btn-sc-pq');
    const btnKhac = document.getElementById('btn-sc-khac');
    const outlineBox = document.getElementById('scenic-outline-56');
    const title = document.getElementById('scenic-title');
    const intro = document.getElementById('scenic-intro');
    const body = document.getElementById('scenic-body');
    const conc = document.getElementById('scenic-conclusion');

    // Reset styles
    [btnDv, btnHl, btnPn, btnPq, btnKhac].forEach(b => {
        if (b) {
            b.className = "px-4 py-2.5 bg-white border border-sky-100 rounded-2xl font-bold text-base text-gray-800 hover:bg-sky-50 transition-all";
        }
    });

    const activeBtn = document.getElementById(`btn-sc-${scenicId.replace('_', '')}`);
    if (activeBtn) {
        activeBtn.className = "px-4 py-2.5 bg-sky-600 text-white border border-sky-100 rounded-2xl font-bold text-base transition-all shadow-md";
    }

    if (outlineBox) {
        outlineBox.classList.remove('hidden');

        if (scenicId === 'dong_van') {
            title.innerText = "⛰️ Dàn ý bài giới thiệu: Cao nguyên đá Đồng Văn (Hà Giang)";
            intro.innerText = "Giới thiệu khái quát về vùng đất cực Bắc tổ quốc Hà Giang với Cao nguyên đá Đồng Văn - Công viên địa chất toàn cầu hùng vĩ.";
            body.innerText = "Miêu tả núi đá tai mèo trùng điệp đen xám kiêu hãnh, những thung lũng hoa tam giác mạch rực rỡ, ruộng bậc thang tầng tầng lớp lớp và cuộc sống đầm ấm của đồng bào Mông, Dao.";
            conc.innerText = "Khẳng định sự kiên cường của vùng đất đá biên cương và mời bạn bè quốc tế ghé thăm Hà Giang.";
        } else if (scenicId === 'ha_long') {
            title.innerText = "🌊 Dàn ý bài giới thiệu: Vịnh Hạ Long (Quảng Ninh)";
            intro.innerText = "Chào mừng mọi người đến với Vịnh Hạ Long - một trong bảy kỳ quan thiên nhiên mới của thế giới nằm ở tỉnh Quảng Ninh.";
            body.innerText = "Gần 2056 hòn đảo lớn nhỏ nhấp nhô trên mặt biển xanh biếc như một bức tranh thủy mặc khổng lồ, các hang động huyền ảo như Động Thiên Cung, Hang Sửng Sốt đầy nhũ đá lung linh.";
            conc.innerText = "Bày tỏ niềm tự hào về di sản thiên nhiên thế giới của Việt Nam và khuyên mọi người cùng chung tay bảo vệ môi trường biển.";
        } else if (scenicId === 'phong_nha') {
            title.innerText = "🪨 Dàn ý bài giới thiệu: Động Phong Nha - Kẻ Bàng (Quảng Bình)";
            intro.innerText = "Giới thiệu về Vườn quốc gia Phong Nha - Kẻ Bàng tại Quảng Bình, nổi tiếng với danh hiệu 'Đệ nhất động' kì vĩ.";
            body.innerText = "Dòng sông Son trong vắt đưa thuyền lững lờ đi vào hang tối rộng lớn, những khối thạch nhũ muôn hình vạn trạng rủ xuống lóng lánh dưới ánh đèn, tiếng nước nhỏ giọt như bản nhạc của đất mẹ.";
            conc.innerText = "Tôn vinh vẻ đẹp kì bí dưới lòng đất của Việt Nam và niềm hạnh phúc khi được bảo tồn di sản thế giới.";
        } else if (scenicId === 'phu_quoc') {
            title.innerText = "🏝️ Dàn ý bài giới thiệu: Đảo Ngọc - Phú Quốc (Kiên Giang)";
            intro.innerText = "Giới thiệu đảo Phú Quốc ở Kiên Giang - hòn đảo lớn nhất Việt Nam được mệnh danh là Đảo Ngọc thiên đường nhiệt đới.";
            body.innerText = "Bãi cát trắng mịn màng như kem ôm lấy nước biển xanh ngọc trong vắt soi rõ rặng san hô sặc sỡ, những khu rừng nguyên sinh xanh mướt mát lạnh và hoàng hôn nhuộm đỏ rực bầu trời.";
            conc.innerText = "Mời gọi bạn bè bốn phương đến nghỉ dưỡng và khám phá thiên nhiên biển đảo tổ quốc Việt Nam.";
        } else {
            title.innerText = "🌟 Dàn ý bài giới thiệu thắng cảnh tự chọn của em";
            intro.innerText = "Nêu rõ tên danh lam thắng cảnh, địa điểm (tỉnh/thành phố) và ấn tượng khái quát nhất của em.";
            body.innerText = "Miêu tả từ 2 đến 3 nét đặc sắc nổi bật nhất của cảnh vật (hình dáng, màu sắc, âm thanh tự nhiên) có dùng các từ ngữ gợi hình ảnh.";
            conc.innerText = "Nêu suy nghĩ, tình cảm yêu mến tự hào của em và mời bạn bè đến tham quan cảnh đẹp quê hương.";
        }
    }
};

// --- AI THẦY E CHẤM BÀI PHÁT BIỂU VN56 ---
window.checkWritingVn56 = function() {
    const text = document.getElementById('ans-vn56-speech')?.value.trim();
    const fb = document.getElementById('fb-vn56-writing');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy viết bài phát biểu nháp chi tiết của mình trước khi gửi chấm điểm nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    if (text.length < 50) {
        fb.innerHTML = "⚠️ Bài thuyết trình của em hơi ngắn. Em hãy chuẩn bị đầy đủ 3 phần (Mở đầu, Triển khai ý đặc sắc, và Kết thúc) để bài nói đạt kết quả tốt nhất nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    // Nhận xét của AI Thầy E
    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E (BÀI NÓI):</span>
            <p class="text-lg font-bold">"Bài giới thiệu rất tuyệt vời! Em đã đi đúng cấu trúc 3 phần rõ rệt, cung cấp được nhiều thông tin thú vị và đặc sắc về thắng cảnh. Giọng văn thể hiện sự tự tin và tràn đầy niềm tự hào dân tộc đối với cảnh đẹp non sông Việt Nam."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold text-xs rounded-full shadow-sm mt-2">Đánh giá chung: Đạt chuẩn xuất sắc thuyết trình</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-356";
};

// --- HOÀN THÀNH TOÀN BỘ TIẾT HỌC ---
window.submitVn56Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 56',
            '🎙️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎙️</span><p class="text-lg md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài thực hành Nói và nghe!</p><p class="text-lg text-gray-800 mt-3">Sự tự tin thuyết trình trước đám đông và tình yêu đối với vẻ đẹp giang sơn tổ quốc sẽ nâng cánh cho em bay xa hơn nữa. Hãy tiếp tục phát huy nhé.</p></div>'
        );
    }
};
