// Tiết 157: Viết: Tìm hiểu cách viết đoạn văn thể hiện tình cảm, cảm xúc về một sự việc
export const lesson157 = {
    "topic": "Tiếng Việt 5",
    "week": "23",
    "period": "157",
    "title": "VIẾT: TÌM HIỂU CÁCH VIẾT ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ MỘT SỰ VIỆC",
    "desc": "Bài học giúp học sinh nắm vững cấu trúc 3 phần và cách bộc lộ cảm xúc khi viết đoạn văn chia sẻ tình cảm về một sự việc đáng nhớ.",
    "subject": "Viết",
    "theme": "Hương sắc trăm miền",
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
                    Nắm được cấu trúc 3 phần (Mở đầu, Triển khai, Kết thúc) của đoạn văn biểu cảm về một sự việc.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Biết cách lựa chọn các chi tiết ấn tượng và từ ngữ bộc lộ cảm xúc phù hợp để đưa vào bài viết.
                </li>
            </ul>
        </div>

        <!-- 📖 Phần 1: Đoạn văn mẫu của Lâm Phong -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 relative overflow-hidden">
                <h3 class="text-2xl md:text-3xl font-black text-blue-950 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">1</span>
                    Đọc đoạn văn dưới đây và thực hiện yêu cầu
                </h3>

                <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
                    <!-- Văn bản -->
                    <div class="lg:col-span-3 bg-blue-50/10 p-6 md:p-8 rounded-3xl border-2 border-dashed border-blue-200">
                        <p class="serif-font text-gray-800 text-2xl md:text-3xl leading-relaxed text-justify indent-12">
                            Nhân dịp Quốc khánh ngày 2 tháng 9, tôi được bố mẹ cho đi Mộc Châu tham dự Ngày hội văn hoá các dân tộc thiểu số. Tôi vô cùng hứng thú với sự kiện mang đậm vẻ đẹp văn hoá này. Ngay từ sáng ngày 1 tháng 9, không khí ngày hội đã tràn ngập khắp thị trấn. Cờ hoa, những bộ trang phục truyền thống làm cho cả thị trấn trở nên rực rỡ sắc màu. Tiếng trống, tiếng chiêng rộn rã khiến tôi cảm thấy háo hức lạ thường. Mỗi dân tộc mang đến ngày hội một tiết mục trình diễn riêng. Trước cuộc thi ném còn của những cô gái Thái, tôi trở thành cổ động viên tự lúc nào không rõ. Tôi chăm chú dõi theo quả còn bay vút lên cao, lơ lửng trên không trung. Tôi và mọi người hò reo khi quả còn bất ngờ bay vèo qua vòng tròn gắn trên đầu cây tre. Điệu múa khèn tràn đầy sức sống của các chàng trai người Mông đã khiến tôi rất ngạc nhiên và thán phục. Tôi nhún nhảy liên hội theo các động tác của họ. Tôi như bị cuốn theo bước múa sạp khéo léo, rộn ràng của những cô gái Mường. Tôi say sưa thưởng thức điệu múa xoè uyển chuyển của những cô gái Thái... Đến với Ngày hội văn hoá các dân tộc thiểu số ở Mộc Châu, tôi đã rất xúc động và hiểu vì sao cần phải giữ gìn giá trị văn hoá truyền thống của dân tộc.
                        </p>
                        <p class="text-right font-black text-blue-600 text-xl mt-6">— Lâm Phong</p>
                    </div>

                    <!-- Video Mộc Châu -->
                    <div class="lg:col-span-2 flex flex-col justify-center bg-gray-50 p-4 rounded-3xl border border-gray-150 shadow-inner">
                        <video controls class="w-full h-auto rounded-2xl shadow-md border-2 border-white">
                            <source src="assets/video/MOCCHAU.mp4" type="video/mp4">
                            Trình duyệt không hỗ trợ phát video.
                        </video>
                        <p class="text-gray-500 font-bold text-center text-lg mt-2">Phim tài liệu: Ngày hội văn hoá các dân tộc Mộc Châu</p>
                    </div>
                </div>

                <!-- Tương tác Q1a: Sự việc và Ấn tượng chung -->
                <div class="bg-gray-50 p-6 rounded-3xl border border-gray-200/60 space-y-6">
                    <h4 class="font-black text-gray-800 text-xl md:text-2xl">a. Đoạn văn nói đến sự việc gì? Người viết có ấn tượng chung về sự việc đó thế nào?</h4>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <span class="font-bold text-gray-600">Sự việc chính:</span>
                            <select id="sel-157-1a-1" class="w-full p-3 bg-white border-2 border-blue-200 rounded-xl font-bold text-lg focus:outline-none">
                                <option value="">-- Chọn sự việc --</option>
                                <option value="sai">Chuyến đi chơi công viên nước ngày lễ</option>
                                <option value="dung">Tham dự Ngày hội văn hoá các dân tộc thiểu số ở Mộc Châu</option>
                                <option value="sai2">Trò chơi ném còn ngày Tết</option>
                            </select>
                        </div>
                        <div class="space-y-2">
                            <span class="font-bold text-gray-600">Ấn tượng chung:</span>
                            <select id="sel-157-1a-2" class="w-full p-3 bg-white border-2 border-blue-200 rounded-xl font-bold text-lg focus:outline-none">
                                <option value="">-- Chọn ấn tượng --</option>
                                <option value="sai">Cảm thấy tẻ nhạt và mệt mỏi</option>
                                <option value="dung">Vô cùng hứng thú với sự kiện mang đậm nét văn hoá</option>
                                <option value="sai2">Thấy ồn ào và không muốn tham gia</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex justify-end items-center gap-4"><button onclick="window.checkEx1a_157();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                    <div id="fb-ex1a-157" class="hidden p-4 rounded-xl font-bold text-lg"></div>
                </div>
            </div>
        </section>

        <!-- 📖 Tương tác Q1b: Cấu trúc đoạn văn -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100">
                <h3 class="text-2xl md:text-3xl font-black text-blue-955 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">b</span>
                    Chọn nội dung tương ứng với mỗi phần của đoạn văn
                </h3>

                <div class="space-y-6">
                    <!-- Mở đầu -->
                    <div class="p-6 bg-blue-50/30 rounded-3xl border-2 border-blue-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div class="font-black text-blue-600 text-xl md:text-2xl shrink-0">🚩 Phần Mở đầu:</div>
                        <select id="sel-157-1b-mo" class="flex-1 p-3 bg-white border-2 border-blue-200 rounded-xl font-bold text-lg focus:outline-none">
                            <option value="">-- Chọn nội dung --</option>
                            <option value="ket">Nêu ý nghĩa của sự việc; khẳng định lại tình cảm, cảm xúc đối với sự việc.</option>
                            <option value="mo">Nêu tên sự việc; thời gian, địa điểm diễn ra sự việc; ấn tượng chung về sự việc.</option>
                            <option value="trien">Nêu tình cảm, cảm xúc về những chi tiết nổi bật của sự việc.</option>
                        </select>
                    </div>

                    <!-- Triển khai -->
                    <div class="p-6 bg-amber-50/30 rounded-3xl border-2 border-amber-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div class="font-black text-amber-900 text-xl md:text-2xl shrink-0">🚩 Phần Triển khai:</div>
                        <select id="sel-157-1b-trien" class="flex-1 p-3 bg-white border-2 border-amber-200 rounded-xl font-bold text-lg focus:outline-none">
                            <option value="">-- Chọn nội dung --</option>
                            <option value="ket">Nêu ý nghĩa của sự việc; khẳng định lại tình cảm, cảm xúc đối với sự việc.</option>
                            <option value="mo">Nêu tên sự việc; thời gian, địa điểm diễn ra sự việc; ấn tượng chung về sự việc.</option>
                            <option value="trien">Nêu tình cảm, cảm xúc về những chi tiết nổi bật của sự việc.</option>
                        </select>
                    </div>

                    <!-- Kết thúc -->
                    <div class="p-6 bg-emerald-50/30 rounded-3xl border-2 border-emerald-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div class="font-black text-emerald-900 text-xl md:text-2xl shrink-0">🚩 Phần Kết thúc:</div>
                        <select id="sel-157-1b-ket" class="flex-1 p-3 bg-white border-2 border-emerald-200 rounded-xl font-bold text-lg focus:outline-none">
                            <option value="">-- Chọn nội dung --</option>
                            <option value="ket">Nêu ý nghĩa của sự việc; khẳng định lại tình cảm, cảm xúc đối với sự việc.</option>
                            <option value="mo">Nêu tên sự việc; thời gian, địa điểm diễn ra sự việc; ấn tượng chung về sự việc.</option>
                            <option value="trien">Nêu tình cảm, cảm xúc về những chi tiết nổi bật của sự việc.</option>
                        </select>
                    </div>
                </div>

                <div class="flex justify-end items-center gap-4"><button onclick="window.resetEx1b_157()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="window.checkEx1b_157();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-ex1b-157" class="hidden p-4 rounded-xl font-bold text-lg mt-4"></div>
            </div>
        </section>

        <!-- 📌 Khung Ghi nhớ -->
        <section class="w-full">
            <div class="bg-gradient-to-r from-blue-800 to-indigo-950 rounded-[32px] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
                <div class="absolute right-0 top-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                <div class="flex items-start gap-4 relative z-10">
                    <span class="text-2xl md:text-4xl">📌</span>
                    <div>
                        <h4 class="text-2xl md:text-3xl font-black mb-4 text-yellow-300 uppercase tracking-wide">Ghi nhớ</h4>
                        <div class="text-xl md:text-2xl leading-relaxed text-blue-50 space-y-3 font-semibold">
                            <p>Đoạn văn thể hiện tình cảm, cảm xúc về một sự việc thường có 3 phần:</p>
                            <ul class="list-disc pl-6 space-y-2 text-white">
                                <li><b>Mở đầu:</b> Giới thiệu sự việc và nêu ấn tượng chung về sự việc.</li>
                                <li><b>Triển khai:</b> Nêu tình cảm, cảm xúc về những chi tiết nổi bật của sự việc (khung cảnh, hoạt động, con người,...).</li>
                                <li><b>Kết thúc:</b> Nêu ý nghĩa của sự việc; khẳng định lại tình cảm, cảm xúc đối với sự việc,...</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `,
    "practice": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto pb-12">
        <!-- 📖 Luyện tập Q1c, d -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-8 shadow-xl border border-blue-100 space-y-8">
                <!-- Câu c -->
                <div class="bg-gray-50 p-6 rounded-3xl border border-gray-200/60 space-y-4">
                    <h3 class="font-black text-gray-800 text-xl md:text-2xl">c. Trong phần triển khai, những chi tiết nào nói về ngày hội gây được ấn tượng với người viết?</h3>
                    <select id="sel-157-1c" class="w-full p-3 bg-white border-2 border-blue-200 rounded-xl font-bold text-lg focus:outline-none">
                        <option value="">-- Chọn đáp án --</option>
                        <option value="sai">Chỉ có không khí nhộn nhịp ban sáng và cờ hoa rực rỡ ngoài đường.</option>
                        <option value="dung">Khung cảnh cờ hoa, trống chiêng; các tiết mục của cô gái Thái (ném còn, múa xòe), chàng trai Mông (múa khèn), cô gái Mường (múa sạp).</option>
                        <option value="sai2">Chỉ có cuộc thi ném còn qua vòng tròn của các cô gái Thái.</option>
                    </select>
                </div>

                <!-- Câu d -->
                <div class="bg-gray-50 p-6 rounded-3xl border border-gray-200/60 space-y-4">
                    <h3 class="font-black text-gray-800 text-xl md:text-2xl">d. Tình cảm, cảm xúc của người viết được bộc lộ qua những từ ngữ, câu văn nào trong đoạn?</h3>
                    <select id="sel-157-1d" class="w-full p-3 bg-white border-2 border-blue-200 rounded-xl font-bold text-lg focus:outline-none">
                        <option value="">-- Chọn đáp án --</option>
                        <option value="sai">Tôi được bố mẹ cho đi; Mỗi dân tộc mang đến một tiết mục.</option>
                        <option value="dung">Các từ ngữ: hứng thú, háo hức, ngạc nhiên, thán phục, say sưa, xúc động; các hành động: hò reo, nhún nhảy, bị cuốn theo.</option>
                        <option value="sai2">Các câu miêu tả: cờ hoa rực rỡ sắc màu, quả còn lơ lửng trên không trung.</option>
                    </select>
                </div>

                <!-- Nút kiểm tra E -->
                <div class="flex justify-end items-center gap-4"><button onclick="window.checkExCd_157();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-excd-157" class="hidden p-4 rounded-xl font-bold text-lg mt-4"></div>
            </div>
        </section>

        <!-- 📖 Luyện tập 2: Thảo luận lưu ý -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-8 shadow-xl border border-blue-100">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">2</div>
                    <h3 class="text-2xl md:text-3xl font-black text-blue-950">Những điểm cần lưu ý khi viết đoạn văn thể hiện cảm xúc về một sự việc</h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                        <h4 class="font-black text-blue-600 text-xl mb-2">Bố cục đoạn văn</h4>
                        <p class="text-gray-700 text-lg md:text-xl font-bold">Phải viết thành một đoạn văn hoàn chỉnh (không xuống dòng tùy tiện) và có đầy đủ cấu trúc 3 phần rõ rệt.</p>
                    </div>
                    <div class="p-6 bg-amber-50/50 rounded-2xl border border-amber-100">
                        <h4 class="font-black text-amber-800 text-xl mb-2">Lựa chọn chi tiết</h4>
                        <p class="text-gray-700 text-lg md:text-xl font-bold">Tập trung miêu tả kỹ những chi tiết tiêu biểu, hoạt động nổi bật gây ấn tượng mạnh nhất của sự việc.</p>
                    </div>
                    <div class="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                        <h4 class="font-black text-emerald-800 text-xl mb-2">Cách bộc lộ cảm xúc</h4>
                        <p class="text-gray-700 text-lg md:text-xl font-bold">Sử dụng đa dạng các tính từ chỉ cảm xúc (say sưa, thán phục...) kết hợp từ ngữ miêu tả phản ứng cơ thể (nhún nhảy, hò reo...).</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 📖 Vận dụng -->
        <section class="w-full mt-8">
            <div class="bg-white rounded-[40px] p-6 md:p-8 shadow-xl border border-blue-100">
                <h3 class="text-2xl md:text-3xl font-black text-blue-950 mb-6 flex items-center gap-3">
                    <span class="text-xl md:text-3xl">🏠</span> Vận dụng sáng tạo
                </h3>
                <div class="space-y-6">
                    <div class="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                        <h4 class="font-black text-gray-800 text-xl mb-2">1. Chia sẻ với người thân</h4>
                        <p class="text-gray-700 text-lg md:text-xl font-bold leading-relaxed">
                            Hãy tập kể với bố mẹ, ông bà về một việc tốt hoặc việc ý nghĩa em đã làm được trong ngày. Đừng quên nêu tình cảm, cảm xúc của em khi làm xong việc đó nhé!
                        </p>
                    </div>
                    <div class="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                        <h4 class="font-black text-gray-800 text-xl mb-2">2. Góc đọc sách lý thú 📚</h4>
                        <p class="text-gray-700 text-lg md:text-xl font-bold leading-relaxed">
                            Tìm đọc một số cuốn sách viết về vẻ đẹp của các vùng miền đất nước, ví dụ như:
                            <br>• <i>Phía tây Trường Sơn</i> (Vũ Hùng) - NXB Kim Đồng.
                            <br>• <i>Quê nội</i> (Võ Quảng) - NXB Kim Đồng.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `,
    "quizPool": [
        {
            "question": "Đoạn văn thể hiện tình cảm, cảm xúc về một sự việc thường gồm có mấy phần?",
            "options": [
                "2 phần (Mở đầu, Triển khai)",
                "3 phần (Mở đầu, Triển khai, Kết thúc)",
                "4 phần (Mở đầu, Triển khai, Đánh giá, Kết luận)",
                "Không chia phần"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nhiệm vụ chính của phần Mở đầu trong đoạn văn biểu cảm là gì?",
            "options": [
                "Nêu các hoạt động chi tiết của sự việc",
                "Kể lại toàn bộ diễn biến từ đầu đến cuối",
                "Giới thiệu sự việc và nêu ấn tượng chung về sự việc đó",
                "Rút ra ý nghĩa văn hóa của sự việc"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Phần Triển khai của đoạn văn thể hiện cảm xúc cần tập trung vào nội dung nào?",
            "options": [
                "Giới thiệu thời gian, địa điểm xảy ra sự việc",
                "Nêu tình cảm, cảm xúc về những chi tiết nổi bật của sự việc",
                "Khẳng định lại tình cảm, cảm xúc đối với sự việc",
                "Nói về bài học rút ra sau sự việc"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Phần Kết thúc của đoạn văn thể hiện tình cảm cần làm gì?",
            "options": [
                "Kể nốt những chi tiết chưa nói ở phần thân bài",
                "Nêu ý nghĩa của sự việc; khẳng định lại tình cảm, cảm xúc đối với sự việc",
                "Giới thiệu một sự việc mới sắp xảy ra",
                "Mô tả chi tiết hơn về các nhân vật tham gia"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Dòng nào dưới đây chứa toàn bộ các từ ngữ thể hiện tình cảm, cảm xúc của người viết?",
            "options": [
                "Tham dự, cờ hoa, trống chiêng, múa sạp",
                "Mộc Châu, Thái, Mông, Mường",
                "Hứng thú, háo hức, ngạc nhiên, thán phục, say sưa, xúc động",
                "Bay vút, lơ lửng, hò reo, nhún nhảy"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Đoạn văn của Lâm Phong trong bài đọc được viết theo ngôi kể thứ mấy?",
            "options": [
                "Ngôi thứ nhất (Xưng \"tôi\")",
                "Ngôi thứ ba (Người kể giấu mặt)",
                "Ngôi thứ hai (Xưng \"em\")",
                "Thay đổi liên tục giữa các ngôi kể"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Sự việc chính được kể lại trong đoạn văn mẫu là gì?",
            "options": [
                "Đi cắm trại cùng bố mẹ ở Mộc Châu",
                "Ngày hội văn hoá các dân tộc thiểu số ở Mộc Châu",
                "Cuộc thi múa khèn ngày Tết",
                "Đi xem các cô gái Thái chơi ném còn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ ngữ nào thể hiện cảm xúc của người viết khi nghe tiếng trống, tiếng chiêng rộn rã?",
            "options": [
                "Bình thường",
                "Háo hức lạ thường",
                "Lo lắng, hồi hộp",
                "Mệt mỏi và ồn ào"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Người viết bộc lộ cảm xúc gì đối với điệu múa khèn của các chàng trai người Mông?",
            "options": [
                "Không quan tâm",
                "Ngạc nhiên và thán phục",
                "Thấy không có gì đặc sắc",
                "Thấy hơi lạ lẫm, sợ hãi"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Hành động nào của người kể cho thấy sự hào hứng hòa mình vào ngày hội?",
            "options": [
                "Chỉ đứng xa nhìn và ghi chép",
                "Đi về khách sạn sớm vì mệt",
                "Hò reo theo quả còn, nhún nhảy theo múa khèn, bị cuốn theo bước múa sạp",
                "Ngồi ăn quà vặt ở cổng hội"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Lâm Phong đã nhận ra điều gì có ý nghĩa ở phần Kết thúc đoạn văn?",
            "options": [
                "Sự cần thiết phải giữ gìn giá trị văn hoá truyền thống của dân tộc",
                "Mộc Châu là nơi có nhiều cảnh đẹp để chụp ảnh",
                "Ẩm thực của các dân tộc rất phong phú",
                "Cần chuẩn bị nhiều tiền hơn khi đi du lịch"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi viết đoạn văn thể hiện tình cảm, cảm xúc về một sự việc, ta nên chọn miêu tả điều gì?",
            "options": [
                "Mọi chi tiết không bỏ sót điều gì",
                "Những chi tiết nổi bật, ấn tượng sâu sắc nhất của sự việc",
                "Kể lan man sang các sự việc khác",
                "Chỉ tả phong cảnh thiên nhiên"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Ý nào sau đây là lưu ý quan trọng về hình thức khi trình bày đoạn văn?",
            "options": [
                "Phải viết hoa toàn bộ các từ",
                "Viết liền mạch thành một đoạn văn hoàn chỉnh, không tự ý xuống dòng",
                "Cứ hết một câu thì phải xuống dòng",
                "Đoạn văn phải dài tối thiểu 5 trang giấy"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong câu: \"Tôi vô cùng hứng thú với sự kiện mang đậm vẻ đẹp văn hoá này.\", từ nào trực tiếp bộc lộ tình cảm?",
            "options": [
                "Vô cùng",
                "Hứng thú",
                "Sự kiện",
                "Vẻ đẹp"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cuốn sách nào sau đây được gợi ý ở phần vận dụng viết về vùng núi cao phía Tây?",
            "options": [
                "Dế Mèn Phiêu Lưu Ký (Tô Hoài)",
                "Quê nội (Võ Quảng)",
                "Phía tây Trường Sơn (Vũ Hùng)",
                "Đất rừng phương Nam (Đoàn Giỏi)"
            ],
            "answer": 2,
            "level": 1
        }
    ]
};

// --- HÀM TƯƠNG TÁC GIAO DIỆN (WINDOW GLOBALS) ---

// Kiểm tra câu 1a
window.checkEx1a_157 = function() {
    const a1 = document.getElementById('sel-157-1a-1').value;
    const a2 = document.getElementById('sel-157-1a-2').value;
    const fb = document.getElementById('fb-ex1a-157');
    fb.classList.remove('hidden');

    if (!a1 || !a2) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Hãy chọn câu trả lời cho cả hai ô Sự việc chính và Ấn tượng chung nhé!";
        return;
    }

    if (a1 === 'dung' && a2 === 'dung') {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
        fb.innerHTML = "🌟 Rất tốt! Đáp án hoàn toàn chính xác. <br>• Sự việc: <b>Tham dự Ngày hội văn hoá các dân tộc thiểu số ở Mộc Châu</b>.<br>• Ấn tượng: <b>Vô cùng hứng thú</b> với nét đẹp văn hoá của sự việc.";
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Chính xác! Chúc mừng em.", "success");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-800 border border-red-200 mt-4";
        fb.innerHTML = "❌ Chưa chính xác hoàn toàn. Em hãy đọc lại câu đầu tiên của đoạn văn mẫu và chọn lại nhé!";
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Thử lại nhé!", "error");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

// Kiểm tra câu 1b (Nối phần)
window.checkEx1b_157 = function() {
    const mo = document.getElementById('sel-157-1b-mo').value;
    const trien = document.getElementById('sel-157-1b-trien').value;
    const ket = document.getElementById('sel-157-1b-ket').value;
    const fb = document.getElementById('fb-ex1b-157');
    fb.classList.remove('hidden');

    if (!mo || !trien || !ket) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em vui lòng chọn nội dung tương ứng cho cả 3 phần nhé!";
        return;
    }

    if (mo === 'mo' && trien === 'trien' && ket === 'ket') {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
        fb.innerHTML = "🌟 Hoàn hảo! Em đã nối chính xác cấu trúc của đoạn văn biểu cảm:<br>" +
                       "• <b>Mở đầu:</b> Giới thiệu sự việc, địa điểm, thời gian và ấn tượng chung.<br>" +
                       "• <b>Triển khai:</b> Bộc lộ cảm xúc với các chi tiết, hoạt động nổi bật (ném còn, múa khèn...).<br>" +
                       "• <b>Kết thúc:</b> Khẳng định lại ý nghĩa sự việc và cảm xúc đọng lại.";
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Rất giỏi! Nối chính xác.", "success");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-800 border border-red-200 mt-4";
        fb.innerHTML = "❌ Chưa đúng. Em hãy xem lại nội dung Ghi nhớ ở bên dưới để hoàn thành lại bài tập nhé!";
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Chưa chính xác! Thử lại nhé.", "error");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

window.resetEx1b_157 = function() {
    document.getElementById('sel-157-1b-mo').value = "";
    document.getElementById('sel-157-1b-trien').value = "";
    document.getElementById('sel-157-1b-ket').value = "";
    const fb = document.getElementById('fb-ex1b-157');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};

// Kiểm tra câu c, d
window.checkExCd_157 = function() {
    const c = document.getElementById('sel-157-1c').value;
    const d = document.getElementById('sel-157-1d').value;
    const fb = document.getElementById('fb-excd-157');
    fb.classList.remove('hidden');

    if (!c || !d) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em vui lòng chọn câu trả lời cho cả hai câu hỏi c và d nhé!";
        return;
    }

    if (c === 'dung' && d === 'dung') {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
        fb.innerHTML = "🌟 Rất tốt! Đáp án hoàn toàn chính xác. <br>" +
                       "• Câu c: Những chi tiết ngày hội gây ấn tượng bao gồm cả không khí chuẩn bị và các tiết mục nhảy múa sôi động của các dân tộc.<br>" +
                       "• Câu d: Từ ngữ biểu cảm trực tiếp gồm tính từ (háo hức, say sưa...) và các từ chỉ hành động cơ thể bộc lộ cảm xúc (hò reo, nhún nhảy...).";
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Chính xác! Em học bài rất tốt.", "success");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-800 border border-red-200 mt-4";
        fb.innerHTML = "❌ Chưa đúng rồi. Em hãy đọc lại đoạn văn mẫu và chú ý phần từ ngữ bộc lộ cảm xúc để chọn lại nhé!";
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Chưa chính xác! Thử lại nhé.", "error");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};