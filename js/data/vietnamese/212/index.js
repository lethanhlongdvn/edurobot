// Tiết 212: Luyện từ và câu: Viết hoa danh từ chung để thể hiện sự tôn trọng đặc biệt
export const lesson212 = {
    "topic": "Tiếng Việt 5",
    "week": "31",
    "period": "212",
    "title": "LTVC: VIẾT HOA DANH TỪ CHUNG ĐỂ THỂ HIỆN SỰ TÔN TRỌNG ĐẶC BIỆT",
    "desc": "Bài học giúp học sinh nắm được quy tắc viết hoa danh từ chung để thể hiện sự tôn trọng đặc biệt và biết cách áp dụng vào viết câu.",
    "subject": "LTVC",
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
                    Nhận biết hiện tượng viết hoa danh từ chung trong văn bản và hiểu tác dụng của chúng.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Nắm vững quy tắc Ghi nhớ về việc viết hoa danh từ chung để thể hiện sự tôn trọng đặc biệt.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Biết viết câu văn chứa danh từ chung được viết hoa đặc biệt đúng ngữ cảnh.
                </li>
            </ul>
        </div>

        <!-- 📖 Phần 1: Khám phá kiến thức -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 relative overflow-hidden">
                <h3 class="text-2xl md:text-3xl font-black text-blue-955 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">1</span>
                    Nhận xét cách viết từ in đậm
                </h3>

                <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
                    <!-- Đoạn thơ a -->
                    <div class="lg:col-span-3 space-y-6">
                        <div class="bg-blue-50/20 p-6 rounded-3xl border border-blue-100 space-y-4">
                            <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg font-black text-sm uppercase">Khổ thơ a:</span>
                            <div class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed italic space-y-1">
                                <p>Con ở miền Nam ra thăm lăng <strong>Bác</strong></p>
                                <p>Đã thấy trong sương hàng tre bát ngát</p>
                                <p>Ôi! Hàng tre xanh xanh Việt Nam</p>
                                <p>Bão táp mưa sa đứng thẳng hàng.</p>
                            </div>
                            <p class="text-right text-gray-500 font-bold text-sm">— Viễn Phương</p>
                        </div>

                        <!-- Đoạn thơ b -->
                        <div class="bg-amber-50/20 p-6 rounded-3xl border border-amber-100 space-y-4">
                            <span class="px-3 py-1 bg-amber-100 text-amber-800 rounded-lg font-black text-sm uppercase">Khổ thơ b:</span>
                            <div class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed italic space-y-1">
                                <p>Giọt giọt mồ hôi rơi</p>
                                <p>Trên má anh vàng nghệ</p>
                                <p>Anh <strong>Vệ quốc quân</strong> ơi</p>
                                <p>Sao mà yêu anh thế!</p>
                            </div>
                            <p class="text-right text-gray-500 font-bold text-sm">— Tố Hữu</p>
                        </div>
                    </div>

                    <!-- Lăng Bác minh họa -->
                    <div class="lg:col-span-2 flex flex-col justify-center">
                        <div class="w-full aspect-[4/3] rounded-3xl border-4 border-white shadow-lg overflow-hidden relative">
                            <img src="assets/images/langbac.png" alt="Lăng Chủ tịch Hồ Chí Minh" class="w-full h-full object-cover">
                        </div>
                        <p class="text-gray-500 font-bold text-center text-sm mt-2">Ảnh: Lăng Chủ tịch Hồ Chí Minh</p>
                    </div>
                </div>

                <!-- Tương tác câu 1 & 2 -->
                <div class="bg-gray-50 p-6 rounded-3xl border border-gray-200/60 space-y-6" id="ex-212-1">
                    <h4 class="font-black text-gray-800 text-lg md:text-xl">Tìm hiểu bài tập nhận xét:</h4>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Q1 -->
                        <div class="space-y-2">
                            <span class="font-bold text-gray-600">Q1. Các từ in đậm (Bác, Vệ quốc quân) có điểm gì chung về cách viết và từ loại?</span>
                            <select id="sel-212-q1" class="w-full p-3 bg-white border-2 border-blue-200 rounded-xl font-bold text-lg focus:outline-none">
                                <option value="">-- Chọn câu trả lời --</option>
                                <option value="sai">Là danh từ riêng viết hoa chữ cái đầu tiên</option>
                                <option value="dung">Là danh từ chung nhưng được viết hoa chữ cái đầu tiên</option>
                                <option value="sai2">Là danh từ chung viết thường như các từ khác</option>
                            </select>
                        </div>

                        <!-- Q2 -->
                        <div class="space-y-2">
                            <span class="font-bold text-gray-600">Q2. Cách viết hoa danh từ chung này có tác dụng gì?</span>
                            <select id="sel-212-q2" class="w-full p-3 bg-white border-2 border-blue-200 rounded-xl font-bold text-lg focus:outline-none">
                                <option value="">-- Chọn câu trả lời --</option>
                                <option value="sai">Chỉ để nhấn mạnh nhịp điệu của câu thơ</option>
                                <option value="dung">Thể hiện sự tôn trọng đặc biệt đối với đối tượng được nói đến</option>
                                <option value="sai2">Do lỗi in ấn thiết kế văn bản</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex justify-end items-center gap-4"><button onclick="window.checkEx1_212();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                    <div id="fb-ex1-212" class="hidden p-4 rounded-xl font-bold text-lg"></div>
                </div>
            </div>
        </section>

        <!-- 📌 Khung Ghi nhớ -->
        <section class="w-full">
            <div class="bg-gradient-to-r from-blue-800 to-sky-950 rounded-[32px] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
                <div class="absolute right-0 top-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                <div class="flex items-start gap-4 relative z-10">
                    <span class="text-3xl md:text-4xl">📌</span>
                    <div>
                        <h4 class="text-2xl md:text-3xl font-black mb-4 text-yellow-300 uppercase tracking-wide">Ghi nhớ</h4>
                        <div class="text-xl md:text-2xl leading-relaxed text-blue-50 space-y-3 font-semibold">
                            <p>Một số danh từ chung có thể được viết hoa để thể hiện sự tôn trọng đặc biệt đối với đối tượng được nói đến.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `,
    "practice": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto pb-12">
        <!-- 📖 Bài tập 3: Luyện tập tìm từ viết hoa -->
        <section class="w-full" id="ex-212-3">
            <div class="bg-white rounded-[40px] p-6 md:p-8 shadow-xl border border-blue-100 space-y-6">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">3</div>
                    <h3 class="text-2xl md:text-3xl font-black text-blue-955">Tìm danh từ chung được viết hoa đặc biệt</h3>
                </div>

                <div class="space-y-6">
                    <!-- Câu a -->
                    <div class="p-6 bg-gray-50 rounded-2xl border border-gray-200/60 space-y-4">
                        <div class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed italic space-y-1 border-l-4 border-emerald-500 pl-4">
                            <p>"Khi ta lớn lên <strong>Đất Nước</strong> đã có rồi</p>
                            <p><strong>Đất Nước</strong> có trong những cái 'ngày xửa ngày xưa...' mẹ thường hay kể."</p>
                        </div>
                        <div class="flex flex-col md:flex-row md:items-center gap-4">
                            <span class="font-bold text-gray-600 shrink-0">Danh từ chung viết hoa & Tác dụng:</span>
                            <select id="sel-212-3a" class="flex-1 p-3 bg-white border-2 border-blue-200 rounded-xl font-bold text-lg focus:outline-none">
                                <option value="">-- Chọn đáp án --</option>
                                <option value="sai">ngày xửa ngày xưa - viết hoa đầu dòng</option>
                                <option value="dung">Đất Nước - viết hoa thể hiện sự kính trọng, thiêng liêng, tình yêu quê hương đất nước</option>
                                <option value="sai2">mẹ - viết hoa chỉ người thân</option>
                            </select>
                        </div>
                    </div>

                    <!-- Câu b -->
                    <div class="p-6 bg-gray-50 rounded-2xl border border-gray-200/60 space-y-4">
                        <div class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed italic space-y-1 border-l-4 border-amber-500 pl-4">
                            <p>"Vì sao trái đất nặng ân tình</p>
                            <p>Nhắc mãi tên <strong>Người</strong> – Hồ Chí Minh"</p>
                        </div>
                        <div class="flex flex-col md:flex-row md:items-center gap-4">
                            <span class="font-bold text-gray-600 shrink-0">Danh từ chung viết hoa & Tác dụng:</span>
                            <select id="sel-212-3b" class="flex-1 p-3 bg-white border-2 border-blue-200 rounded-xl font-bold text-lg focus:outline-none">
                                <option value="">-- Chọn đáp án --</option>
                                <option value="sai">trái đất - viết thường chỉ hành tinh</option>
                                <option value="dung">Người - viết hoa để bày tỏ lòng tôn kính, biết ơn sâu sắc đối với Chủ tịch Hồ Chí Minh</option>
                                <option value="sai2">Hồ Chí Minh - danh từ riêng thông thường</option>
                            </select>
                        </div>
                    </div>

                    <!-- Câu c -->
                    <div class="p-6 bg-gray-50 rounded-2xl border border-gray-200/60 space-y-4">
                        <div class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed border-l-4 border-sky-500 pl-4">
                            <p>"Sóng thần, động đất, bão lũ... là những lời cảnh báo nghiêm khắc của <strong>Mẹ Thiên Nhiên</strong> đối với loài người."</p>
                        </div>
                        <div class="flex flex-col md:flex-row md:items-center gap-4">
                            <span class="font-bold text-gray-600 shrink-0">Danh từ chung viết hoa & Tác dụng:</span>
                            <select id="sel-212-3c" class="flex-1 p-3 bg-white border-2 border-blue-200 rounded-xl font-bold text-lg focus:outline-none">
                                <option value="">-- Chọn đáp án --</option>
                                <option value="sai">loài người - viết thường chỉ chung</option>
                                <option value="dung">Mẹ Thiên Nhiên - viết hoa thể hiện sự tôn kính, trân trọng, biết ơn tự nhiên như người mẹ</option>
                                <option value="sai2">Sóng thần, động đất - hiện tượng thiên tai</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end items-center gap-4"><button onclick="window.checkEx3_212();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-ex3-212" class="hidden p-4 rounded-xl font-bold text-lg"></div>
            </div>
        </section>

        <!-- 📖 Bài tập 4: Thực hành viết câu (Thầy E chấm bài) -->
        <section class="bg-white p-4 rounded-[40px] shadow-xl border border-blue-100 overflow-hidden" id="ex-212-4">
            <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px]">
                <div class="flex items-start gap-6 mb-8">
                    <div class="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">4</div>
                    <div>
                        <h3 class="text-2xl md:text-3xl font-black text-gray-800 leading-tight">
                            Thực hành viết câu văn
                        </h3>
                        <p class="text-gray-500 font-bold text-lg">Viết 2 – 3 câu trong đó có sử dụng danh từ chung được viết hoa để thể hiện sự tôn trọng đặc biệt.</p>
                    </div>
                </div>

                <div class="bg-white p-6 md:p-8 rounded-3xl border-2 border-amber-100 shadow-lg flex flex-col relative">
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-lg font-black text-amber-600 uppercase tracking-widest">📝 Câu văn của em</span>
                    </div>

                    <div class="relative flex-grow">
                        <textarea id="ans-212-writing" rows="5" class="w-full p-6 pr-16 rounded-2xl border-4 border-amber-50 bg-amber-50/10 outline-none focus:border-amber-400 text-xl md:text-2xl font-bold text-gray-800 transition-all shadow-inner resize-none leading-relaxed" placeholder="Ví dụ: Chúng em luôn biết ơn công lao trời biển của Người. Mẹ Trái Đất đang ôm ấp muôn loài..."></textarea>

                        <!-- Mic Button -->
                        <button id="btn-mic-212" onclick="Lesson.toggleSpeechRec('ans-212-writing')" class="absolute right-4 bottom-4 w-12 h-12 bg-amber-100 text-amber-600 hover:bg-amber-600 hover:text-white rounded-xl flex items-center justify-center transition-all shadow-md active:scale-95" title="Nhập liệu bằng giọng nói">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                        </button>
                        <div id="mic-status-212" class="absolute -top-10 left-1/2 -translate-x-1/2 px-4 py-2 bg-red-500 text-white text-xs font-black rounded-full animate-bounce hidden whitespace-nowrap">Đang ghi âm...</div>
                    </div>

                    <!-- Nút nộp bài -->
                    <div class="mt-6 flex flex-wrap items-center gap-4">
                        <button id="btn-submit-212-writing" onclick="window.submitWriting_212()" class="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xl rounded-2xl shadow-md transition-all active:scale-95 flex items-center gap-2">
                            NỘP BÀI <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                        <button onclick="Lesson.submitWordProblemAI('212-writing')" class="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-black text-xl rounded-2xl shadow-md transition-all active:scale-95 flex items-center gap-2">
                            Kiểm tra với Thầy E <span class="bg-white/20 px-1.5 py-0.5 rounded text-sm italic">AI</span>
                        </button>
                        <div id="fb-212-writing" class="text-xl font-black opacity-0 flex items-center gap-2"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Nút hoàn thành toàn bài -->
        <div class="pt-8 flex justify-center">
            <button onclick="window.submitVnStandardLesson('Luyện từ và câu Tiết 212: Viết hoa danh từ chung', 100)" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:scale-105 text-white font-black text-xl rounded-2xl shadow-xl transition-all active:scale-95 flex items-center gap-3 group">
                HOÀN THÀNH LUYỆN TẬP
                <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
            </button>
        </div>
    </div>
    `,
    "quizPool": [
        {
            "question": "Danh từ chung nào dưới đây được viết hoa để thể hiện sự tôn trọng đặc biệt?",
            "options": [
                "Bác (chỉ Bác Hồ kính yêu)",
                "sông hồng",
                "hà nội",
                "học sinh tiểu học"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Vì sao từ \"Vệ quốc quân\" trong bài thơ của Tố Hữu lại được viết hoa?",
            "options": [
                "Để thể hiện sự biết ơn và tôn kính sâu sắc đối với người chiến sĩ cách mạng",
                "Vì đó là tên riêng của một người cụ thể",
                "Do đứng ở vị trí đầu câu thơ",
                "Chỉ để trang trí cho câu thơ thêm đẹp mắt"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ \"Đất Nước\" trong thơ Nguyễn Khoa Điềm được viết hoa nhằm mục đích gì?",
            "options": [
                "Danh từ riêng chỉ một châu lục cụ thể",
                "Thể hiện lòng trân kính, sự thiêng liêng và tình yêu tự hào quê hương đất nước",
                "Đứng làm chủ ngữ chính trong câu",
                "Để nhấn mạnh việc học sinh học môn Địa lý"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ \"Người\" trong câu \"Nhắc mãi tên Người - Hồ Chí Minh\" đóng vai trò là từ loại gì?",
            "options": [
                "Danh từ chung được viết hoa đặc biệt để chỉ Bác Hồ kính yêu",
                "Danh từ riêng chỉ tên riêng của một người dân",
                "Đại từ chỉ ngôi thứ ba số nhiều",
                "Tính từ mô tả phẩm chất tính cách của con người"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong câu: \"Mẹ Thiên Nhiên đang cảnh báo loài người.\", danh từ chung nào được viết hoa đặc biệt?",
            "options": [
                "Mẹ Thiên Nhiên",
                "cảnh báo",
                "loài người",
                "Không có từ nào"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cách viết hoa danh từ chung thể hiện sự tôn trọng đặc biệt có được áp dụng tùy tiện không?",
            "options": [
                "Không, chỉ sử dụng khi nói về những đối tượng thiêng liêng, có công lao to lớn hoặc được kính trọng sâu sắc",
                "Có, học sinh có thể viết hoa bất cứ từ nào mình thích trong câu",
                "Bắt buộc viết hoa toàn bộ các danh từ chung xuất hiện trong văn bản",
                "Chỉ được dùng trong thể loại thơ ca, không được dùng trong văn xuôi"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ \"Mẹ\" trong cụm từ \"Mẹ Thiên Nhiên\" được viết hoa nhằm mục đích gì?",
            "options": [
                "Thể hiện thái độ tôn kính, biết ơn sâu sắc đối với tự nhiên như người mẹ vĩ đại",
                "Vì đó là tên riêng của một người phụ nữ trong truyện cổ tích",
                "Để phân biệt thiên nhiên với các hiện tượng thời tiết khác",
                "Từ viết hoa bắt buộc theo luật chính tả thông thường"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Phát biểu nào sau đây đúng về việc viết hoa danh từ chung đặc biệt?",
            "options": [
                "Đất Nước, Người, Mẹ Thiên Nhiên là các danh từ chung viết hoa để tôn kính",
                "Tất cả danh từ chung đều phải viết hoa khi đứng ở giữa câu",
                "Không được viết hoa danh từ chung dưới bất kỳ hình thức nào",
                "Hồ Chí Minh là danh từ chung viết hoa tôn kính"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Câu nào dưới đây sử dụng danh từ chung viết hoa đặc biệt đúng và hợp lý nhất?",
            "options": [
                "Chúng ta cần chung tay bảo vệ Mẹ Trái Đất xanh tươi.",
                "Hôm nay, em mua một chiếc Bút mới ở cửa hàng.",
                "Học Sinh lớp 5 đang học tập chăm chỉ trong lớp.",
                "Con Đường làng em được trải nhựa rất đẹp đẽ."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong câu: \"Trái Đất là ngôi nhà chung của muôn loài.\", từ Trái Đất viết hoa thể hiện thái độ gì?",
            "options": [
                "Lòng tôn kính, trân trọng đối với hành tinh nơi chúng ta sinh sống",
                "Chỉ là danh từ riêng chỉ tên một hành tinh trong hệ mặt trời",
                "Cách viết hoa ngẫu hứng không mang ý nghĩa cảm xúc",
                "Dùng để chỉ hành tinh khô cằn không có sự sống"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Quy tắc chính tả nào sau đây quy định về việc viết hoa danh từ chung?",
            "options": [
                "Viết hoa danh từ chung để bày tỏ tình cảm trân trọng, kính phục sâu sắc đối với đối tượng thiêng liêng",
                "Viết hoa danh từ chung khi từ đó có độ dài từ 3 chữ cái trở lên",
                "Viết hoa danh từ chung ở cuối câu văn trước dấu chấm",
                "Viết hoa danh từ chung khi từ đó đứng sau một động từ chỉ hoạt động"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ \"Bác\" được viết hoa trong lăng Bác thể hiện tình cảm của nhân dân thế nào?",
            "options": [
                "Lòng kính yêu vĩnh cửu, biết ơn vô hạn của cả dân tộc Việt Nam đối với Hồ Chủ tịch",
                "Chỉ là từ xưng hô thông thường trong gia đình giữa chú cháu",
                "Để phân biệt Bác Hồ với các vị lãnh đạo nước ngoài",
                "Do viết hoa theo thói quen địa phương"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Việc viết hoa \"Vệ quốc quân\" ca ngợi phẩm chất gì của người lính thời chống Pháp?",
            "options": [
                "Phẩm chất dũng cảm chiến đấu quên mình bảo vệ giang sơn Tổ quốc",
                "Khả năng thi đấu thể thao xuất sắc ở đơn vị",
                "Sở thích làm thơ ca hát cổ vũ đồng đội",
                "Hành động mặc trang phục đẹp biểu diễn duyệt binh"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nhận định nào sau đây là KHÔNG chính xác?",
            "options": [
                "Học sinh có thể viết hoa bất kỳ danh từ chung nào để nhấn mạnh câu văn của mình",
                "Đất Nước viết hoa thể hiện cảm xúc tự hào và thiêng liêng",
                "Người viết hoa chỉ Bác Hồ thể hiện lòng tôn kính đặc biệt",
                "Mẹ Thiên Nhiên thể hiện thái độ trân trọng tự nhiên như người mẹ nuôi dưỡng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong trích đoạn thơ của Nguyễn Khoa Điềm, từ Đất Nước được nhắc lại nhiều lần nhằm mục đích gì?",
            "options": [
                "Khắc sâu hình tượng Đất Nước thiêng liêng, gần gũi gắn liền với đời sống bình dị",
                "Để bài thơ có đủ số lượng từ quy định",
                "Giúp học sinh dễ học thuộc lòng bài thơ hơn",
                "Để mô tả các số liệu địa lý chính xác"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// Đăng ký toàn cục
window.lesson212 = lesson212;

// Kiểm tra câu 1 & 2
window.checkEx1_212 = function() {
    const q1 = document.getElementById('sel-212-q1').value;
    const q2 = document.getElementById('sel-212-q2').value;
    const fb = document.getElementById('fb-ex1-212');
    fb.classList.remove('hidden');

    if (!q1 || !q2) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em hãy chọn đáp án cho cả 2 câu hỏi trước khi kiểm tra nhé!";
        return;
    }

    if (q1 === 'dung' && q2 === 'dung') {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
        fb.innerHTML = "🌟 Rất tốt! Đáp án hoàn toàn chính xác. <br>• <b>Bác, Vệ quốc quân</b> là các danh từ chung được viết hoa để <b>thể hiện sự tôn trọng đặc biệt</b>.";
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Chính xác! Cực kỳ thông minh.", "success");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-800 border border-red-200 mt-4";
        fb.innerHTML = "❌ Chưa chính xác. Em hãy đọc lại khung Ghi nhớ ở bên dưới để tìm ra câu trả lời nhé!";
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Chưa đúng rồi! Thử lại nhé.", "error");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

// Kiểm tra bài tập 3
window.checkEx3_212 = function() {
    const a = document.getElementById('sel-212-3a').value;
    const b = document.getElementById('sel-212-3b').value;
    const c = document.getElementById('sel-212-3c').value;
    const fb = document.getElementById('fb-ex3-212');
    fb.classList.remove('hidden');

    if (!a || !b || !c) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em vui lòng chọn đáp án đầy đủ cho cả 3 câu thơ/câu văn a, b, c nhé!";
        return;
    }

    if (a === 'dung' && b === 'dung' && c === 'dung') {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
        fb.innerHTML = "🌟 Hoàn hảo! Em đã tìm rất đúng danh từ chung được viết hoa đặc biệt và tác dụng:<br>" +
                       "• Câu a: <b>Đất Nước</b> để thể hiện sự thiêng liêng, tự hào.<br>" +
                       "• Câu b: <b>Người</b> chỉ Bác Hồ kính yêu với lòng tôn kính sâu sắc.<br>" +
                       "• Câu c: <b>Mẹ Thiên Nhiên</b> để bày tỏ sự trân trọng và biết ơn tự nhiên.";
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Chính xác! Em học bài rất giỏi.", "success");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
        
        // Lưu điểm
        if (typeof window.submitMathLesson === 'function') {
            window.submitMathLesson("LTVC Tiết 212: Tìm từ viết hoa đặc biệt", 100, "ex-212-3", 1, 1, 1);
        }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-800 border border-red-200 mt-4";
        fb.innerHTML = "❌ Chưa đúng hoàn toàn rồi. Hãy đọc kỹ phần in đậm ở các câu thơ/câu văn và chọn lại đáp án phù hợp nhé!";
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Chưa chính xác! Thử lại nhé.", "error");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

window.submitWriting_212 = function() {
    const text = document.getElementById('ans-212-writing').value.trim();
    const fb = document.getElementById('fb-212-writing');
    
    if (!text) {
        fb.className = "text-xl font-black text-red-600 opacity-100 flex items-center gap-2";
        fb.innerHTML = "❌ Em chưa nhập câu văn mà!";
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Hãy nhập câu viết trước khi nộp!", "error");
        }
        return;
    }
    
    if (text.length < 20) {
        fb.className = "text-xl font-black text-amber-600 opacity-100 flex items-center gap-2";
        fb.innerHTML = "⚠️ Câu văn hơi ngắn, em hãy viết từ 2 - 3 câu đầy đủ nhé!";
        return;
    }

    fb.className = "text-xl font-black text-green-600 opacity-100 flex items-center gap-2";
    fb.innerHTML = "🎉 Tuyệt vời! Em đã hoàn thành bài viết câu văn xuất sắc!";
    
    if (window.UI && typeof window.UI.showToast === 'function') {
        window.UI.showToast("Nộp câu viết thành công!", "success");
    }
    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    
    // Lưu điểm
    if (typeof window.submitMathLesson === 'function') {
        window.submitMathLesson("LTVC Tiết 212: Thực hành viết câu", 100, "ex-212-4", 1, 1, 1);
    }
};