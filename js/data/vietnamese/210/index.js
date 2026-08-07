// Tiết 210: Đọc mở rộng: Đọc bài ca dao hoặc bài thơ về quê hương, đất nước
export const lesson210 = {
    "topic": "Tiếng Việt 5",
    "week": "30",
    "period": "210",
    "title": "ĐỌC MỞ RỘNG: ĐỌC BÀI CA DAO, BÀI THƠ VỀ QUÊ HƯƠNG, ĐẤT NƯỚC",
    "desc": "Hướng dẫn học sinh tìm đọc và cảm thụ các tác phẩm thơ, ca dao ca ngợi quê hương đất nước và hoàn thành Phiếu đọc sách.",
    "subject": "Đọc",
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
                    Tìm đọc các bài thơ, ca dao về quê hương đất nước theo các chủ đề gợi ý.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Biết cách ghi chép thông tin chính vào Phiếu đọc sách (tên tác phẩm, ngày đọc, nội dung chính, câu thơ yêu thích, mức độ yêu thích).
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Bày tỏ cảm thụ văn học cá nhân và chia sẻ ý nghĩa tác phẩm với bạn bè.
                </li>
            </ul>
        </div>

        <!-- 📖 Gợi ý Chủ đề Đọc -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 relative overflow-hidden">
                <h3 class="text-2xl md:text-3xl font-black text-blue-955 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">1</span>
                    Chủ đề đọc mở rộng hôm nay
                </h3>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-bold text-lg md:text-xl text-gray-800">
                    <div class="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100 shadow-sm flex flex-col justify-between">
                        <p class="text-emerald-800 font-black mb-3">🛠️ XÂY DỰNG QUÊ HƯƠNG</p>
                        <p class="text-emerald-950 font-semibold text-base md:text-lg">Ca ngợi những con người có công lao xây dựng quê hương, đất nước giàu đẹp.</p>
                    </div>
                    <div class="bg-sky-50/50 p-6 rounded-3xl border border-sky-100 shadow-sm flex flex-col justify-between">
                        <p class="text-sky-800 font-black mb-3">🛡️ BẢO VỆ TỔ QUỐC</p>
                        <p class="text-sky-950 font-semibold text-base md:text-lg">Thể hiện sự biết ơn sâu sắc đối với những người có công bảo vệ Tổ quốc.</p>
                    </div>
                    <div class="bg-amber-50/50 p-6 rounded-3xl border border-amber-100 shadow-sm flex flex-col justify-between">
                        <p class="text-amber-800 font-black mb-3">🌸 YÊU THƯƠNG & TỰ HÀO</p>
                        <p class="text-amber-950 font-semibold text-base md:text-lg">Bày tỏ tình yêu, niềm tự hào sâu sắc đối với vẻ đẹp của quê hương, đất nước.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 📖 Tác phẩm mẫu trích dẫn -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100">
                <h3 class="text-2xl md:text-3xl font-black text-blue-955 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">2</span>
                    Đọc các tác phẩm ví dụ
                </h3>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- Tác phẩm 1: Ca dao -->
                    <div class="bg-blue-50/20 p-6 md:p-8 rounded-3xl border-2 border-dashed border-blue-200 flex flex-col justify-between">
                        <div>
                            <span class="px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full font-black text-sm uppercase mb-4 inline-block">Ví dụ 1: Ca dao dời đô</span>
                            <div class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed text-center italic py-6 space-y-2">
                                <p>"Nghìn năm còn mãi sử xanh</p>
                                <p>Vua Lý Thái Tổ dời thành lập đô</p>
                                <p>Về Thăng Long dựng cơ đồ</p>
                                <p>Thiên thu bền vững thủ đô Lạc Hồng."</p>
                            </div>
                        </div>
                        
                    </div>

                    <!-- Tác phẩm 2: Quê hương -->
                    <div class="bg-amber-50/20 p-6 md:p-8 rounded-3xl border-2 border-dashed border-amber-200 flex flex-col justify-between">
                        <div>
                            <span class="px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full font-black text-sm uppercase mb-4 inline-block">Ví dụ 2: Quê hương (Trích)</span>
                            <div class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed text-justify py-4 space-y-3">
                                <p class="indent-6">"Làng tôi ở vốn làm nghề chài lưới:</p>
                                <p>Nước bao vây, cách biển nửa ngày sông.</p>
                                <p>Khi trời trong, gió nhẹ, sớm mai hồng,</p>
                                <p>Dân trai tráng bơi thuyền đi đánh cá:</p>
                                <p>Chiếc thuyền nhẹ băng như con tuấn mã</p>
                                <p>Phăng mái chèo, mạnh mẽ vượt trường giang.</p>
                                <p>Cánh buồm giương to như mảnh hồn làng</p>
                                <p>Rướn thân trắng bao la thâu góp gió..."</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
    `,
    "practice": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto pb-12">
        <!-- ✏️ Phiếu đọc sách tương tác -->
        <section class="bg-white p-4 rounded-[40px] shadow-xl border border-blue-100 overflow-hidden" id="ex-210-practice-section">
            <div class="p-6 md:p-8 bg-blue-50/30 rounded-[32px]">
                <div class="flex items-start gap-6 mb-8">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-[20px] flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg">📋</div>
                    <div>
                        <h3 class="text-2xl md:text-3xl font-black text-gray-800 leading-tight">
                            Hoàn thành Phiếu đọc sách
                        </h3>
                        <p class="text-gray-500 font-bold text-lg">Ghi lại thông tin tác phẩm em đã đọc về quê hương, đất nước.</p>
                    </div>
                </div>

                <div class="bg-white p-6 md:p-10 rounded-3xl border-2 border-blue-100 shadow-xl space-y-6">
                    <h4 class="text-center text-2xl md:text-3xl font-black text-blue-600 mb-6 uppercase tracking-wider">PHIẾU ĐỌC SÁCH</h4>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Tên tác phẩm -->
                        <div class="space-y-2">
                            <label class="block text-lg font-black text-gray-700">Tên bài thơ hoặc chủ đề bài ca dao:</label>
                            <input type="text" id="ipt-210-title" class="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none font-bold text-lg transition-colors" placeholder="Ví dụ: Quê hương">
                        </div>
                        
                        <!-- Ngày đọc -->
                        <div class="space-y-2">
                            <label class="block text-lg font-black text-gray-700">Ngày đọc:</label>
                            <input type="date" id="ipt-210-date" class="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none font-bold text-lg transition-colors">
                        </div>
                    </div>

                    <!-- Nội dung chính -->
                    <div class="space-y-2 relative">
                        <label class="block text-lg font-black text-gray-700">Nội dung, ý nghĩa của bài thơ hoặc bài ca dao:</label>
                        <textarea id="ipt-210-content" rows="3" class="w-full p-4 pr-14 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none font-bold text-lg transition-colors resize-none" placeholder="Tác phẩm nói lên vẻ đẹp quê hương miền biển và tình yêu quê hương da diết..."></textarea>
                        <button onclick="Lesson.toggleSpeechRec('ipt-210-content')" class="absolute right-3 bottom-3 w-10 h-10 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-lg flex items-center justify-center text-blue-600 transition-colors shadow-sm" title="Ghi âm giọng nói">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                        </button>
                    </div>

                    <!-- Câu thơ yêu thích -->
                    <div class="space-y-2 relative">
                        <label class="block text-lg font-black text-gray-700">Những câu thơ hoặc câu ca dao mà em yêu thích nhất:</label>
                        <textarea id="ipt-210-fav" rows="2" class="w-full p-4 pr-14 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none font-bold text-lg transition-colors resize-none" placeholder="Ví dụ: 'Cánh buồm giương to như mảnh hồn làng / Rướn thân trắng bao la thâu góp gió...'"></textarea>
                        <button onclick="Lesson.toggleSpeechRec('ipt-210-fav')" class="absolute right-3 bottom-3 w-10 h-10 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-lg flex items-center justify-center text-blue-600 transition-colors shadow-sm" title="Ghi âm giọng nói">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                        </button>
                    </div>

                    <!-- Đánh giá mức độ yêu thích -->
                    <div class="space-y-2 flex flex-col md:flex-row md:items-center gap-4">
                        <span class="text-lg font-black text-gray-700">Mức độ yêu thích của em:</span>
                        <div class="flex items-center gap-2">
                            <button onclick="window.rateBook_210(1)" id="star-210-1" class="text-2xl md:text-3xl text-gray-300 hover:text-amber-400 transition-colors">★</button>
                            <button onclick="window.rateBook_210(2)" id="star-210-2" class="text-2xl md:text-3xl text-gray-300 hover:text-amber-400 transition-colors">★</button>
                            <button onclick="window.rateBook_210(3)" id="star-210-3" class="text-2xl md:text-3xl text-gray-300 hover:text-amber-400 transition-colors">★</button>
                            <button onclick="window.rateBook_210(4)" id="star-210-4" class="text-2xl md:text-3xl text-gray-300 hover:text-amber-400 transition-colors">★</button>
                            <button onclick="window.rateBook_210(5)" id="star-210-5" class="text-2xl md:text-3xl text-gray-300 hover:text-amber-400 transition-colors">★</button>
                        </div>
                    </div>

                    <!-- Nút nộp bài -->
                    <div class="pt-4 flex items-center gap-4">
                        <button id="btn-submit-210-book" onclick="window.submitBookReport_210()" class="px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xl rounded-2xl shadow-md transition-all active:scale-95 flex items-center gap-2">
                            NỘP PHIẾU <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                        <div id="fb-210-book" class="text-xl font-black opacity-0 flex items-center gap-2"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 🏠 Vận dụng (SGK trang 112) -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-8 shadow-xl border border-blue-100">
                <h3 class="text-2xl md:text-3xl font-black text-blue-955 mb-6 flex items-center gap-3">
                    <span class="text-2xl md:text-3xl">🏠</span> Vận dụng sáng tạo
                </h3>
                <div class="p-6 bg-amber-50/50 rounded-2xl border border-amber-200">
                    <p class="font-black text-amber-900 text-xl mb-4">Chọn 1 trong 2 yêu cầu sau để thực hiện tại nhà:</p>
                    <ul class="space-y-3 text-lg md:text-xl font-bold text-gray-800">
                        <li class="flex items-start gap-3">
                            <span class="text-amber-600 font-black">1.</span>
                            Đọc cho người thân nghe đoạn văn thể hiện tình cảm, cảm xúc về một sự việc mà em đã viết ở tiết học trước.
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="text-amber-600 font-black">2.</span>
                            Học thuộc lòng một bài ca dao hoặc một bài thơ em yêu thích nhất về đề tài quê hương, đất nước.
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Nút hoàn thành toàn bài -->
        <div class="pt-8 flex justify-center">
            <button onclick="window.submitVnStandardLesson('Đọc mở rộng: Đọc bài ca dao, bài thơ về quê hương', 100)" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:scale-105 text-white font-black text-xl rounded-2xl shadow-xl transition-all active:scale-95 flex items-center gap-3 group">
                HOÀN THÀNH LUYỆN TẬP
                <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
            </button>
        </div>
    </div>
    `,
    "quizPool": [
        {
            "question": "Những đề tài nào gợi ý trong sách giáo khoa cho phần Đọc mở rộng hôm nay?",
            "options": [
                "Xây dựng quê hương, bảo vệ Tổ quốc, vẻ đẹp quê hương đất nước",
                "Khám phá vũ trụ, phát minh khoa học, các hành tinh kỳ lạ",
                "Trò chơi điện tử, các ứng dụng thông minh trong tương lai",
                "Cách chế biến các món ăn truyền thống vùng miền Bắc Bộ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong bài ca dao về Thăng Long, vị vua nào đã dời thành lập đô?",
            "options": [
                "Vua Lý Thái Tổ",
                "Vua Lý Thái Tông",
                "Vua Trần Nhân Tông",
                "Vua Lê Lợi"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Kinh đô Thăng Long được Vua Lý Thái Tổ lựa chọn dời đô nhằm mục đích gì theo bài ca dao?",
            "options": [
                "Lập căn cứ quân sự tạm thời tránh chiến tranh",
                "Về Thăng Long dựng cơ đồ, thiên thu bền vững thủ đô Lạc Hồng",
                "Làm nơi tổ chức hội thao hàng năm cho nhân dân cả nước",
                "Xây dựng một hải cảng lớn phục vụ giao thương miền biển"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Địa danh lịch sử nào được tôn vinh trong bài ca dao dời đô?",
            "options": [
                "Thăng Long (Hà Nội)",
                "Hoa Lư (Ninh Bình)",
                "Phú Xuân (Huế)",
                "Gia Định (Sài Gòn)"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tác giả của bài thơ \"Quê hương\" được trích dẫn trong ví dụ là ai?",
            "options": [
                "Tế Hanh",
                "Xuân Diệu",
                "Huy Cận",
                "Chế Lan Viên"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong bài thơ \"Quê hương\" của Tế Hanh, người dân quê ông làm nghề gì?",
            "options": [
                "Làm ruộng lúa nước",
                "Làm nghề chài lưới (đánh cá)",
                "Trồng chè cổ thụ trên đồi cao",
                "Dệt vải thổ cẩm bằng hạt cườm"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Câu thơ \"Nước bao vây, cách biển nửa ngày sông\" mô tả điều gì về vị trí của ngôi làng?",
            "options": [
                "Là một hòn đảo nằm hoàn toàn giữa đại dương bao la",
                "Là ngôi làng miền sông nước gần biển, giao thông đường thủy thuận tiện",
                "Ngôi làng nằm sâu trong thung lũng núi cao cách biệt hoàn toàn",
                "Một khu đô thị hiện đại sầm uất ven hồ nước lớn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cánh buồm trong câu thơ \"Cánh buồm giương to như mảnh hồn làng\" được so sánh với điều gì?",
            "options": [
                "So sánh với cánh chim hải âu bay lượn lờ",
                "So sánh với mảnh hồn làng (sự thiêng liêng, biểu tượng tinh thần quê hương)",
                "So sánh với đám mây trắng lững lờ trôi trên bầu trời hồng",
                "So sánh với một tấm lụa trắng thô sơ phơi trên bờ cát"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ \"tuấn mã\" trong câu \"Chiếc thuyền nhẹ băng như con tuấn mã\" dùng để chỉ điều gì?",
            "options": [
                "Con ngựa đẹp và chạy rất nhanh",
                "Tên một loại chim biển bay lượn nhanh nhẹn",
                "Tên một loại cá bơi rất khỏe dưới lòng sông sâu",
                "Một loài sinh vật thần thoại trong các truyền thuyết dân gian"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Dòng nào dưới đây liệt kê đúng và đầy đủ các nội dung cần điền trong Phiếu đọc sách?",
            "options": [
                "Tên tác phẩm/chủ đề, Ngày đọc, Nội dung ý nghĩa, Câu thơ yêu thích, Mức độ yêu thích",
                "Tên người vẽ tranh minh họa, Giá tiền cuốn sách, Số trang giấy",
                "Danh sách các từ khó, Địa chỉ nhà sách, Tên thủ thư thư viện",
                "Bảng mục lục sách, Nhà xuất bản, Năm phát hành lần đầu"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ \"cơ đồ\" trong câu \"Về Thăng Long dựng cơ đồ\" có ý nghĩa là gì?",
            "options": [
                "Sự nghiệp vĩ đại, giang sơn đất nước bền vững lâu dài",
                "Một tấm bản đồ chỉ đường đi bằng vải lụa xưa",
                "Tên một loại nhạc cụ cổ dùng gõ giữ nhịp hát",
                "Một trò chơi dân gian dùng các quân cờ bằng gỗ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ \"thiên thu\" trong cụm từ \"Thiên thu bền vững\" có nghĩa là gì?",
            "options": [
                "Ngàn năm, mang ý nghĩa lâu dài mãi mãi cùng thời gian",
                "Mùa thu mát mẻ thời tiết ôn hòa dịu dàng",
                "Một ngàn cuốn sách lịch sử quý giá của cung đình",
                "Tên của một hồ nước đẹp ở trung tâm Thăng Long xưa"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Theo trích đoạn bài thơ của Tế Hanh, thời tiết lúc dân trai tráng đi đánh cá thế nào?",
            "options": [
                "Trời trong, gió nhẹ, sớm mai hồng đầy năng lượng ấm áp",
                "Bão giông nổi sóng lớn dữ dội ngập bờ cát trắng",
                "Đêm khuya tăm tối đầy sương mù dày đặc che khuất tầm nhìn",
                "Mưa phùn lạnh buốt giá rét căm căm cuối mùa đông"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Hoạt động tự học thuộc lòng một bài thơ yêu thích ở mục Vận dụng giúp em điều gì?",
            "options": [
                "Nuôi dưỡng tình cảm yêu nước, làm phong phú tâm hồn và tăng vốn từ ngữ văn học",
                "Để giáo viên kiểm tra miệng lấy điểm số cao mà không cần hiểu",
                "Để chép lại nộp cho bạn bên cạnh sửa lỗi chính tả hộ",
                "Để đi khoe với mọi người xung quanh mà không có tác dụng học tập"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Hình thức đánh giá mức độ yêu thích bằng số lượng các ngôi sao mang tính chất gì?",
            "options": [
                "Đánh giá chủ quan theo sở thích và cảm nhận cá nhân của người đọc",
                "Quy định bắt buộc do nhà xuất bản in sẵn trên bìa sách",
                "Điểm số thi đua bắt buộc học sinh phải đạt 5 sao mới đỗ",
                "Cách chấm điểm của giáo viên chủ nhiệm dành cho vở học sinh"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// Đăng ký toàn cục
window.lesson210 = lesson210;

// Hệ thống đánh giá số sao (Rating)
let currentRating_210 = 0;

window.rateBook_210 = function(rating) {
    currentRating_210 = rating;
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(`star-210-${i}`);
        if (star) {
            if (i <= rating) {
                star.classList.add('text-amber-400');
                star.classList.remove('text-gray-300');
            } else {
                star.classList.remove('text-amber-400');
                star.classList.add('text-gray-300');
            }
        }
    }
};

window.submitBookReport_210 = function() {
    const title = document.getElementById('ipt-210-title').value.trim();
    const date = document.getElementById('ipt-210-date').value;
    const content = document.getElementById('ipt-210-content').value.trim();
    const fav = document.getElementById('ipt-210-fav').value.trim();
    const fb = document.getElementById('fb-210-book');
    
    fb.classList.remove('opacity-0');
    
    if (!title || !date || !content || !fav) {
        fb.className = "text-xl font-black text-red-600 opacity-100 flex items-center gap-2";
        fb.innerHTML = "❌ Em vui lòng điền đầy đủ các mục trong Phiếu đọc sách nhé!";
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Hãy hoàn tất thông tin phiếu đọc sách!", "error");
        }
        return;
    }
    
    if (currentRating_210 === 0) {
        fb.className = "text-xl font-black text-amber-600 opacity-100 flex items-center gap-2";
        fb.innerHTML = "⚠️ Em hãy nhấn chọn mức độ yêu thích (số sao) ở bên dưới nhé!";
        return;
    }
    
    fb.className = "text-xl font-black text-green-600 opacity-100 flex items-center gap-2";
    fb.innerHTML = `🎉 Tuyệt vời! Phiếu đọc sách bài <b>${title}</b> của em đã được nộp thành công!`;
    
    if (window.UI && typeof window.UI.showToast === 'function') {
        window.UI.showToast("Nộp phiếu đọc sách thành công!", "success");
    }
    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    
    // Lưu kết quả bài tập
    if (typeof window.submitMathLesson === 'function') {
        window.submitMathLesson("Đọc mở rộng Tiết 210: Phiếu đọc sách", 100, "ex-210-practice-section", 1, 1, 1);
    }
};
