export const lesson52 = {
    "topic": "Tiếng Việt 5",
    "week": "8",
    "period": "52",
    "title": "VIẾT: VIẾT BÀI VĂN TẢ PHONG CẢNH",
    "desc": "Bài học hướng dẫn học sinh viết bài văn tả phong cảnh hoàn chỉnh (ao hồ, sông suối hoặc biển đảo) dựa trên dàn ý sẵn có, kết hợp sử dụng từ ngữ gợi cảm, so sánh và nhân hóa.",
    "subject": "Viết",
    "theme": "Thế giới tuổi thơ",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-amber-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-amber-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-amber-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-amber-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-amber-500 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-amber-600 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-amber-900 font-black">•</span>
                Viết được bài văn tả phong cảnh sông suối, ao hồ hoặc biển đảo hoàn chỉnh có đủ 3 phần (Mở bài, Thân bài, Kết bài).
            </li>
            <li class="flex items-start gap-2">
                <span class="text-amber-900 font-black">•</span>
                Biết sử dụng từ ngữ gợi tả sinh động, kết hợp các biện pháp tu từ so sánh, nhân hóa để bài văn thêm cuốn hút.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-amber-900 font-black">•</span>
                Rèn luyện thói quen tự đọc soát, chỉnh sửa bài viết của mình và tích lũy những câu văn hay.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG: LỰA CHỌN ĐỀ BÀI & LẬP Ý -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-amber-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Chọn đề bài và Lập ý chính</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy chọn 1 trong 2 đề dưới đây và ghi lại sơ đồ ý chính ngắn gọn cho bài viết của mình nhé:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button onclick="selectTopic52(1)" id="btn-topic1" class="p-5 border-2 border-amber-100 bg-amber-50/20 hover:bg-amber-100/30 rounded-3xl text-left font-bold transition-all text-gray-800 space-y-2">
                <span class="text-amber-900 font-black text-lg block">🌊 ĐỀ 1: Tả ao hồ, sông suối</span>
                <span class="text-sm text-gray-800 block">Tả một cảnh ao hồ, sông suối ở quê hương em hoặc ở nơi gia đình em sinh sống.</span>
            </button>
            <button onclick="selectTopic52(2)" id="btn-topic2" class="p-5 border-2 border-amber-100 bg-amber-50/20 hover:bg-amber-100/30 rounded-3xl text-left font-bold transition-all text-gray-800 space-y-2">
                <span class="text-amber-900 font-black text-lg block">🏝️ ĐỀ 2: Tả cảnh biển đảo</span>
                <span class="text-sm text-gray-800 block">Tả một cảnh biển đảo em đã được thấy tận mắt hoặc xem trên phim ảnh.</span>
            </button>
        </div>

        <div id="outline-box-52" class="hidden bg-amber-50/30 p-6 rounded-3xl border border-amber-100 space-y-4">
            <h4 class="text-lg font-black text-amber-600" id="outline-title">Dàn ý gợi ý của em:</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="space-y-1">
                    <label class="text-sm font-bold text-gray-800">1. Giới thiệu cảnh gì? (Mở bài)</label>
                    <input type="text" id="ans-vn52-outline-intro" placeholder="Ví dụ: Dòng sông quê em" class="w-full p-3 border border-amber-100 rounded-xl font-bold bg-white text-base text-gray-800">
                </div>
                <div class="space-y-1">
                    <label class="text-sm font-bold text-gray-800">2. Cảnh có gì nổi bật? (Thân bài)</label>
                    <input type="text" id="ans-vn52-outline-body" placeholder="Ví dụ: Nước xanh ngắt, hai bên tre xanh" class="w-full p-3 border border-amber-100 rounded-xl font-bold bg-white text-base text-gray-800">
                </div>
                <div class="space-y-1">
                    <label class="text-sm font-bold text-gray-800">3. Cảm xúc thế nào? (Kết bài)</label>
                    <input type="text" id="ans-vn52-outline-conclusion" placeholder="Ví dụ: Yêu mến, tự hào về quê hương" class="w-full p-3 border border-amber-100 rounded-xl font-bold bg-white text-base text-gray-800">
                </div>
            </div>
            <div class="flex justify-center pt-2">
                <button onclick="saveOutline52()" class="px-6 py-2 bg-amber-500 text-white font-bold rounded-lg text-sm hover:bg-amber-500 shadow-sm">LƯU DÀN Ý</button>
            </div>
            <div id="fb-vn52-outline" class="hidden p-3 rounded-lg text-center text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-100"></div>
        </div>
    </div>

    <!-- 📖 KHÁM PHÁ: TƯƠNG TÁC PHÂN TÍCH CÂU VĂN HAY -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-amber-100 shadow-xl space-y-8">
        <div class="flex items-center gap-4 mb-2 border-b border-amber-100 pb-4">
            <span class="text-amber-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                <span>📖</span> Khám phá nghệ thuật miêu tả cảnh vật
            </span>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Nhấp vào các từ in đậm/gạch chân trong các câu văn mẫu dưới đây để xem phân tích nghệ thuật dùng từ:</p>

        <div class="space-y-6 max-w-4xl mx-auto">
            <!-- Câu văn Tô Hoài -->
            <div class="bg-amber-50/20 p-5 rounded-2xl border border-amber-100 relative">
                <span class="text-xs font-black text-amber-600 block mb-2">Mẫu 1 (Theo Tô Hoài):</span>
                <p class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed">
                    "Con sông Nậm Khan 
                    <span onclick="showTooltip52(this, 'Nhân hóa dòng sông có cử chỉ mềm mại, dịu dàng làm duyên để dòng chảy uốn lượn thật sinh động!')" class="underline decoration-2 decoration-amber-600 font-black text-amber-600 cursor-pointer hover:bg-amber-500 rounded px-1">làm duyên nũng nịu</span>, 
                    <span onclick="showTooltip52(this, 'Cách nhân hóa dòng sông có cơ thể có sức sống biết uốn lượn mình uyển chuyển qua địa hình.')" class="underline decoration-2 decoration-amber-600 font-black text-amber-600 cursor-pointer hover:bg-amber-500 rounded px-1">uốn mình</span> 
                    một quãng rồi mới chịu hoà vào sông Mê Kông."
                </p>
            </div>

            <!-- Câu văn Kim Viên -->
            <div class="bg-amber-50/20 p-5 rounded-2xl border border-amber-100 relative">
                <span class="text-xs font-black text-amber-600 block mb-2">Mẫu 2 (Theo Kim Viên):</span>
                <p class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed">
                    "Màn sương biến mất. 
                    <span onclick="showTooltip52(this, 'Nhân hóa mặt sông như một khuôn mặt người, bừng sáng vẻ hồng hào ấm áp khi bình minh lên.')" class="underline decoration-2 decoration-amber-600 font-black text-amber-600 cursor-pointer hover:bg-amber-500 rounded px-1">Khuôn mặt dòng sông lộ ra ửng hồng</span>, 
                    tươi rói như 
                    <span onclick="showTooltip52(this, 'So sánh cực kỳ đắt giá! Ví dòng sông buổi sáng tươi tắn ấm áp như khuôn mặt đứa bé vừa tỉnh dậy từ chăn ấm.')" class="underline decoration-2 decoration-amber-600 font-black text-amber-600 cursor-pointer hover:bg-amber-500 rounded px-1">khuôn mặt của em bé vừa ra khỏi chiếc chăn ấm</span>."
                </p>
            </div>

            <!-- Câu văn Đoàn Giỏi -->
            <div class="bg-amber-50/20 p-5 rounded-2xl border border-amber-100 relative">
                <span class="text-xs font-black text-amber-600 block mb-2">Mẫu 3 (Theo Đoàn Giỏi):</span>
                <p class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed">
                    "<span onclick="showTooltip52(this, 'Từ gợi tả hương thơm nồng nàn quyến rũ đến mức làm ngất ngây cả không gian và con người.')" class="underline decoration-2 decoration-amber-600 font-black text-amber-600 cursor-pointer hover:bg-amber-500 rounded px-1">Nắng bốc hương hoa tràm thơm ngây ngất</span>. 
                    Gió đưa mùi hương ngọt lan xa, phảng phất khắp rừng. Mấy con kì nhông nằm phơi lưng trên gốc cây mục, 
                    <span onclick="showTooltip52(this, 'Sự quan sát vô cùng tỉ mỉ về khả năng đổi màu sắc kỳ thú của loài kì nhông vùng sông nước.')" class="underline decoration-2 decoration-amber-600 font-black text-amber-600 cursor-pointer hover:bg-amber-500 rounded px-1">sắc da luôn luôn biến đổi</span> 
                    từ xanh hoá vàng, từ vàng hoá đỏ, từ đỏ hoá tím xanh..."
                </p>
            </div>

            <!-- Hộp hiển thị tooltip chung -->
            <div id="tooltip-display-52" class="hidden p-4 rounded-xl font-bold text-base text-amber-600 bg-amber-500 border border-amber-100 text-center animate-in fade-in duration-352"></div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- KHÔNG GIAN SOẠN THẢO BÀI VĂN -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">✏️</div>
                <div>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800">Không gian viết bài văn tả cảnh</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Dựa trên dàn ý đã chọn, em hãy viết bài văn hoàn chỉnh vào 3 phần dưới đây:</p>
                </div>
            </div>

            <div class="space-y-4">
                <!-- Mở bài -->
                <div class="bg-white p-5 rounded-2xl border border-amber-100 space-y-2">
                    <span class="text-sm font-black text-amber-600 flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-amber-500"></span> 1. Mở bài (Giới thiệu cảnh sông nước/biển đảo)
                    </span>
                    <textarea id="ans-vn52-mb" rows="3" placeholder="Nhập phần mở bài trực tiếp hoặc gián tiếp ở đây..." class="w-full p-4 border border-amber-100 rounded-xl outline-none focus:border-amber-500 font-bold bg-amber-50/5 text-lg text-gray-800 leading-relaxed"></textarea>
                </div>

                <!-- Thân bài -->
                <div class="bg-white p-5 rounded-2xl border border-amber-100 space-y-2">
                    <span class="text-sm font-black text-amber-600 flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-amber-500"></span> 2. Thân bài (Tả chi tiết hình dáng, màu sắc, âm thanh, sức sống của cảnh)
                    </span>
                    <textarea id="ans-vn52-tb" rows="8" placeholder="Nhập phần thân bài miêu tả chi tiết đặc sắc của cảnh vật có sử dụng biện pháp so sánh, nhân hóa..." class="w-full p-4 border border-amber-100 rounded-xl outline-none focus:border-amber-500 font-bold bg-amber-50/5 text-lg text-gray-800 leading-relaxed"></textarea>
                </div>

                <!-- Kết bài -->
                <div class="bg-white p-5 rounded-2xl border border-amber-100 space-y-2">
                    <span class="text-sm font-black text-amber-600 flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-amber-500"></span> 3. Kết bài (Bày tỏ cảm xúc, tình yêu mến và gắn bó với cảnh)
                    </span>
                    <textarea id="ans-vn52-kb" rows="3" placeholder="Nhập phần kết bài mở rộng hoặc không mở rộng ở đây..." class="w-full p-4 border border-amber-100 rounded-xl outline-none focus:border-amber-500 font-bold bg-amber-50/5 text-lg text-gray-800 leading-relaxed"></textarea>
                </div>

                <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center pt-2">
                    <button onclick="checkWritingVn52()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                        <span>CHẤM BÀI VĂN TẢ CẢNH</span>
                    </button>
                    <div id="fb-vn52-writing" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- ĐỌC SOÁT VÀ CHỈNH SỬA (CHECKLIST) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🔍</div>
                <div>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800">Tự soát lỗi và Chỉnh sửa</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Đọc lại bài văn ở trên và đánh dấu tích xanh nếu em đã đạt đủ các tiêu chuẩn kiểm duyệt dưới đây:</p>
                </div>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-sky-100 shadow-inner grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex items-start gap-3 p-3 bg-sky-50/20 hover:bg-sky-50/50 rounded-2xl border border-sky-100/50 font-bold text-base text-sky-800 cursor-pointer">
                    <input type="checkbox" class="w-5 h-5 rounded border-sky-100 text-sky-800 focus:ring-sky-600 mt-0.5">
                    <span>Bài viết có đủ bố cục rõ ràng 3 phần: Mở bài, Thân bài, Kết bài.</span>
                </label>
                <label class="flex items-start gap-3 p-3 bg-sky-50/20 hover:bg-sky-50/50 rounded-2xl border border-sky-100/50 font-bold text-base text-sky-800 cursor-pointer">
                    <input type="checkbox" class="w-5 h-5 rounded border-sky-100 text-sky-800 focus:ring-sky-600 mt-0.5">
                    <span>Đã miêu tả kỹ hơn những sự vật, hiện tượng đặc sắc của cảnh sông/biển.</span>
                </label>
                <label class="flex items-start gap-3 p-3 bg-sky-50/20 hover:bg-sky-50/50 rounded-2xl border border-sky-100/50 font-bold text-base text-sky-800 cursor-pointer">
                    <input type="checkbox" class="w-5 h-5 rounded border-sky-100 text-sky-800 focus:ring-sky-600 mt-0.5">
                    <span>Có sử dụng nhiều từ ngữ gợi tả màu sắc, âm thanh sinh động.</span>
                </label>
                <label class="flex items-start gap-3 p-3 bg-sky-50/20 hover:bg-sky-50/50 rounded-2xl border border-sky-100/50 font-bold text-base text-sky-800 cursor-pointer">
                    <input type="checkbox" class="w-5 h-5 rounded border-sky-100 text-sky-800 focus:ring-sky-600 mt-0.5">
                    <span>Có sử dụng biện pháp tu từ so sánh hoặc nhân hóa thích hợp.</span>
                </label>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn52Global()" class="px-12 py-5 bg-gradient-to-r from-amber-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Bố cục chung của một bài văn tả cảnh gồm những phần nào?",
            "options": [
                "Giới thiệu chung, kể diễn biến, kết quả câu chuyện",
                "Mở bài, Thân bài, Kết bài",
                "Đặt vấn đề, Giải quyết vấn đề, Nhận xét đánh giá",
                "Gợi ý cảm xúc, Miêu tả người, Miêu tả vật"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Phần Mở bài trong bài văn tả cảnh sông suối, biển đảo có nhiệm vụ gì?",
            "options": [
                "Tả chi tiết sự thay đổi màu sắc của nước suối/nước biển",
                "Kể lại kỷ niệm em đi tắm suối/tắm biển cùng gia đình",
                "Giới thiệu cảnh vật sẽ miêu tả (ao hồ, sông suối hay biển đảo)",
                "Bày tỏ tình cảm, lòng tự hào về cảnh đẹp quê hương"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Mở bài gián tiếp có đặc điểm gì khác biệt so với mở bài trực tiếp?",
            "options": [
                "Giới thiệu ngay cảnh vật sẽ tả",
                "Nói về một sự việc khác rồi dẫn dắt vào giới thiệu cảnh sẽ tả",
                "Không cần giới thiệu tên cảnh vật sẽ tả",
                "Độ dài luôn ngắn hơn mở bài trực tiếp"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong phần Thân bài của bài văn tả cảnh, ta nên lựa chọn trình tự tả thế nào?",
            "options": [
                "Tả lộn xộn bất cứ thứ gì nhìn thấy trước",
                "Tả từ bộ phận dưới lên bộ phận trên của cây mục",
                "Tả theo thời gian trong ngày hoặc tả theo không gian từ xa đến gần, từ ngoài vào trong",
                "Chỉ tả duy nhất một chi tiết cho cả bài văn"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Tác dụng của việc lựa chọn các từ ngữ gợi tả trong văn miêu tả là gì?",
            "options": [
                "Giúp bài viết dài và nhiều chữ hơn",
                "Làm nổi bật những đặc điểm đặc sắc về hình dáng, màu sắc, âm thanh của cảnh vật",
                "Làm cho bài văn mang tính thời sự cao",
                "Để bài văn mang tính tranh luận thuyết phục"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tại sao nên kết hợp sử dụng các biện pháp tu từ so sánh, nhân hóa khi viết văn tả cảnh?",
            "options": [
                "Vì nó bắt buộc phải có để bài văn được chấm điểm tuyệt đối",
                "Giúp cảnh vật trở nên gần gũi, sinh động, có linh hồn và giàu sức cuốn hút người đọc hơn",
                "Để thay thế hoàn toàn cho các từ ngữ miêu tả thực tế",
                "Vì nó làm cho câu văn ngắn đi đáng kể"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Câu văn nào sau đây sử dụng biện pháp tu từ nhân hóa dòng sông?",
            "options": [
                "Dòng sông quê em hiền hòa như một dải lụa đào xanh thẫm",
                "Con sông Nậm Khan làm duyên nũng nịu uốn mình trước khi hòa vào Mê Kông",
                "Dòng sông mùa lũ chảy xiết mang nhiều phù sa đỏ rực",
                "Mặt sông phẳng lặng như một tấm gương khổng lồ soi bóng mây bay"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Đoạn văn 'Nắng bốc hương hoa tràm thơm ngây ngất...' của Đoàn Giỏi mô tả cảnh rừng tràm bằng các giác quan nào?",
            "options": [
                "Chỉ dùng thị giác để nhìn kì nhông đổi màu sắc",
                "Khứu giác (ngửi hương tràm), thính giác (nghe gió thổi), thị giác (nhìn kì nhông phơi lưng đổi màu)",
                "Chỉ dùng khứu giác để ngửi mùi thơm",
                "Vị giác để nếm mùi mật ngọt của hoa tràm"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Phần Kết bài mở rộng có đặc điểm gì?",
            "options": [
                "Chỉ nêu tình cảm gắn bó của em với cảnh vật một cách ngắn gọn nhất",
                "Nêu tình cảm kết hợp bày tỏ suy nghĩ, liên tưởng rộng lớn hơn hoặc lời kêu gọi bảo vệ môi trường cảnh quan",
                "Kể nốt câu chuyện em đi chơi ở cảnh đẹp đó",
                "Sao chép lại nội dung mở bài của bài văn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ ngữ nào thích hợp nhất để gợi tả cảnh sóng biển dập dồn xô bờ?",
            "options": [
                "Róc rách, thì thầm",
                "Ào ạt, rầm rì, cuồn cuộn",
                "Xôn xao, nhè nhẹ",
                "Êm đềm, lặng lẽ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Việc chép lại những câu văn hay của các nhà văn lớn giúp học sinh:",
            "options": [
                "Chép lại y nguyên vào bài làm văn của mình",
                "Học hỏi cách quan sát tinh tế, sử dụng hình ảnh so sánh, nhân hóa và học cách dùng từ ngữ giàu gợi tả",
                "Nộp cho giáo viên kiểm tra lấy điểm chuyên cần",
                "Thay thế cho việc làm bài viết chính thức"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong câu 'Khuôn mặt dòng sông lộ ra ửng hồng...', từ 'ửng hồng' gợi tả điều gì?",
            "options": [
                "Sắc hồng rực rỡ của phù sa bồi đắp lúc lũ về",
                "Ánh mặt trời buổi sáng sớm chiếu rọi làm dòng sông sáng hồng lên rạng rỡ",
                "Sự nóng bức của khí hậu miền nhiệt đới",
                "Màu sắc của các khóm hoa trồng hai bên bờ sông"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Tiêu chí nào dưới đây KHÔNG dùng để đọc soát chỉnh sửa bài văn tả cảnh?",
            "options": [
                "Bố cục bài văn có đủ 3 phần rõ ràng không",
                "Cách đặt câu có chính xác, phong phú từ ngữ gợi tả không",
                "Số lượng các con kì nhông trong bài văn có chính xác không",
                "Có mắc lỗi chính tả hay lỗi dùng từ nào không"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Khi viết bài văn tả cảnh ao hồ sông suối, ta nên tả yếu tố động nào để tạo sức sống?",
            "options": [
                "Màu sắc của lan can đá ven hồ",
                "Sự tĩnh lặng của những chiếc ghế đá bên bờ",
                "Đàn cá tung tăng bơi lội, tiếng lá tre xạc xào trong gió hay tiếng chèo khua nước trên dòng",
                "Hình dáng cây cầu bắc qua sông"
            ],
            "answer": 2,
            "level": 2
        },
        {
            "question": "Từ 'tươi rói' trong câu văn tả dòng sông sớm mai mang ý nghĩa biểu cảm gì?",
            "options": [
                "Dòng sông có rất nhiều cá tươi ngon bơi lội",
                "Mặt sông buổi sớm ngập tràn sức sống, rạng rỡ, trong ngần chào ngày mới",
                "Mặt nước sông có màu đỏ tươi sặc sỡ",
                "Cảnh vật hai bên bờ sông rất đông vui nhộn nhịp"
            ],
            "answer": 1,
            "level": 2
        }
    ]
};

// --- CHỌN ĐỀ BÀI KHỞI ĐỘNG VN52 ---
let selectedTopicId = null;
window.selectTopic52 = function(id) {
    selectedTopicId = id;
    const btn1 = document.getElementById('btn-topic1');
    const btn2 = document.getElementById('btn-topic2');
    const outlineBox = document.getElementById('outline-box-52');
    const outlineTitle = document.getElementById('outline-title');
    const introInput = document.getElementById('ans-vn52-outline-intro');
    const bodyInput = document.getElementById('ans-vn52-outline-body');
    const concInput = document.getElementById('ans-vn52-outline-conclusion');
    const fb = document.getElementById('fb-vn52-outline');

    if (fb) fb.classList.add('hidden');

    if (btn1 && btn2 && outlineBox) {
        btn1.className = "p-5 border-2 border-amber-100 bg-amber-50/20 hover:bg-amber-100/30 rounded-3xl text-left font-bold transition-all text-gray-800 space-y-2";
        btn2.className = "p-5 border-2 border-amber-100 bg-amber-50/20 hover:bg-amber-100/30 rounded-3xl text-left font-bold transition-all text-gray-800 space-y-2";
        outlineBox.classList.remove('hidden');

        if (id === 1) {
            btn1.className = "p-5 border-2 border-amber-100 bg-amber-500 text-white rounded-3xl text-left font-bold transition-all space-y-2 shadow-md";
            outlineTitle.innerText = "🌊 Ý chính của em cho Đề 1 (Tả sông suối/ao hồ):";
            if (introInput) introInput.placeholder = "Ví dụ: Con sông Thu Bồn chảy qua làng em";
            if (bodyInput) bodyInput.placeholder = "Ví dụ: Nước lững lờ trôi, rặng tre soi bóng suối mát";
            if (concInput) concInput.placeholder = "Ví dụ: Sông gắn bó tuổi thơ, em mong sông luôn trong xanh";
        } else {
            btn2.className = "p-5 border-2 border-amber-100 bg-amber-500 text-white rounded-3xl text-left font-bold transition-all space-y-2 shadow-md";
            outlineTitle.innerText = "🏝️ Ý chính của em cho Đề 2 (Tả cảnh biển đảo):";
            if (introInput) introInput.placeholder = "Ví dụ: Biển Nha Trang vào ngày hè nắng rực rỡ";
            if (bodyInput) bodyInput.placeholder = "Ví dụ: Sóng biển xanh rì rào xô bờ cát trắng mướt";
            if (concInput) concInput.placeholder = "Ví dụ: Yêu mến tự hào về lãnh hải biển đảo tổ quốc";
        }
    }
};

window.saveOutline52 = function() {
    const intro = document.getElementById('ans-vn52-outline-intro')?.value.trim();
    const body = document.getElementById('ans-vn52-outline-body')?.value.trim();
    const conc = document.getElementById('ans-vn52-outline-conclusion')?.value.trim();
    const fb = document.getElementById('fb-vn52-outline');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!intro || !body || !conc) {
        fb.innerHTML = "⚠️ Em hãy nhập đầy đủ ý chính cho cả 3 phần trước khi lưu nhé!";
        fb.className = "p-3 rounded-lg text-center text-sm font-bold bg-amber-500 text-white border border-amber-100";
        return;
    }

    fb.innerHTML = "🎉 Tuyệt vời! Ý chính của em đã được ghi nhận. Bây giờ hãy kéo xuống dưới để xem câu mẫu và bắt đầu viết bài văn nhé!";
    fb.className = "p-3 rounded-lg text-center text-sm font-bold bg-emerald-50 border border-emerald-100 text-emerald-800 shadow-sm";
};

// --- TƯƠNG TÁC PHÂN TÍCH CÂU VĂN MẪU ---
window.showTooltip52 = function(element, message) {
    const box = document.getElementById('tooltip-display-52');
    if (!box) return;
    box.classList.remove('hidden');
    box.innerHTML = `🌟 <strong>Phân tích từ nhà văn:</strong> "${message}"`;
    // Thêm hiệu ứng nổi bật cho phần tử được chọn
    const underlines = document.querySelectorAll('.underline');
    underlines.forEach(el => el.classList.remove('bg-amber-500'));
    element.classList.add('bg-amber-500');
};

// --- CHẤM BÀI VĂN TẢ CẢNH VN52 (AI THẦY E) ---
window.checkWritingVn52 = function() {
    const mb = document.getElementById('ans-vn52-mb')?.value.trim();
    const tb = document.getElementById('ans-vn52-tb')?.value.trim();
    const kb = document.getElementById('ans-vn52-kb')?.value.trim();
    const fb = document.getElementById('fb-vn52-writing');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!mb || !tb || !kb) {
        fb.innerHTML = "⚠️ Em hãy viết đầy đủ cả 3 phần: Mở bài, Thân bài, Kết bài để AI Thầy E chấm điểm chính xác nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    if (mb.length < 15 || tb.length < 50 || kb.length < 15) {
        fb.innerHTML = "⚠️ Bài văn của em còn hơi ngắn. Hãy miêu tả chi tiết, viết câu đầy đủ để đảm bảo chất lượng bài làm văn nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    // Đánh giá giả lập AI Thầy E
    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
            <p class="text-lg font-bold">"Bài văn của em rất xuất sắc! Em đã chia bố cục 3 phần rõ ràng, mạch lạc. Phần thân bài có nhiều hình ảnh miêu tả sống động, sử dụng nhiều từ ngữ gợi tả màu sắc, âm thanh của cảnh vật, đồng thời lồng ghép thành công phép so sánh/nhân hóa độc đáo như trong bài học."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold text-xs rounded-full shadow-sm mt-2">Điểm: 152% (Hoàn thành xuất sắc)</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-352";
};

// --- HOÀN THÀNH TOÀN BỘ TIẾT HỌC ---
window.submitVn52Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 52',
            '🎨',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎨</span><p class="text-2xl font-bold text-amber-600">Chúc mừng em đã hoàn thành viết bài văn tả phong cảnh!</p><p class="text-lg text-gray-800 mt-3">Việc viết văn tả cảnh giúp em rèn luyện khả năng quan sát thiên nhiên và làm tâm hồn thêm phong phú. Hãy luôn tự hào về vẻ đẹp của đất nước mình nhé.</p></div>'
        );
    }
};
