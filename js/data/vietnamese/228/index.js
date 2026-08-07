export const lesson228 = {
    "topic": "Tiếng Việt 5",
    "week": "33",
    "period": "228-229",
    "title": "ĐỌC: GIỜ TRÁI ĐẤT",
    "desc": "Bài học cung cấp thông tin về chiến dịch toàn cầu Giờ Trái Đất, nguồn gốc lịch sử, ý nghĩa nhân văn và thông điệp hành động bảo vệ hành tinh xanh.",
    "subject": "Đọc",
    "theme": "Thế giới của chúng ta",
    "audio": "am_thanh/gio-trai-dat.mp3",
    "content": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-4xl mx-auto pb-12">
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
                    Đọc trôi chảy, lưu loát văn bản thông tin Giờ Trái Đất, biết ngắt nghỉ đúng các mốc thời gian, số liệu.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Hiểu được nguồn gốc, mục đích và ý nghĩa to lớn của chiến dịch Giờ Trái Đất đối với môi trường toàn cầu.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Nâng cao ý thức tiết kiệm điện, bảo vệ thiên nhiên bằng những hành động thiết thực hằng ngày.
                </li>
            </ul>
        </div>

        <!-- 🧩 Khởi động (Warmup) -->
        <section class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 space-y-6">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">1</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Quan sát và suy ngẫm</h3>
            </div>
            <p class="text-gray-600 font-bold text-lg">Quan sát bức tranh dưới đây và cho biết bức tranh thể hiện điều gì:</p>
            
            <div class="space-y-6">
                <!-- Hình ảnh minh họa -->
                <div class="w-full max-w-lg mx-auto aspect-[4/3] bg-gradient-to-br from-blue-50 to-sky-100 rounded-3xl border-4 border-white shadow-lg overflow-hidden relative group">
                    <div class="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                    <img src="assets/images/gio_trai_dat_warmup.png" alt="Hai bạn nhỏ tắt đèn ôm quả địa cầu" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onerror="this.src='placeholders/earth_hour.png'; this.onerror=null;">
                    <div class="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full font-black text-sm">60+</div>
                </div>

                <!-- Câu hỏi tương tác khởi động -->
                <div class="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 space-y-4">
                    <p class="text-blue-600 font-bold text-lg">Ý kiến của em về bức tranh:</p>
                    <textarea id="warmup-response" class="w-full p-4 border-2 border-blue-200 rounded-xl font-medium focus:outline-none focus:border-blue-500 text-lg" rows="3" placeholder="Nhập suy nghĩ của em về bức tranh (ví dụ: Hai bạn nhỏ đang tắt các bóng đèn để bảo vệ Trái Đất...)"></textarea>
                    <div class="flex justify-end items-center gap-4"><button onclick="window.checkWarmup228();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                    <div id="fb-warmup-228" class="hidden p-4 rounded-xl font-bold text-lg mt-2"></div>
                </div>
            </div>
        </section>

        <!-- 📖 Bài đọc và Chú thích -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 relative overflow-hidden max-w-3xl mx-auto">
                <div class="space-y-8">
                    <h4 class="text-3xl md:text-4xl font-black text-blue-600 text-center leading-tight mb-8">
                        📖 GIỜ TRÁI ĐẤT
                    </h4>
                    
                    <div class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed text-justify space-y-6 pl-4 md:pl-8 border-l-4 border-blue-200">
                        <p class="indent-8">
                            Giờ Trái Đất là một sự kiện được Quỹ Quốc tế Bảo tồn Thiên nhiên tổ chức hằng năm nhằm nâng cao nhận thức về biến đổi khí hậu và khuyến khích mọi người hành động để bảo vệ Trái Đất. Sự kiện này được tổ chức vào thứ Bảy cuối cùng của tháng Ba, khi các thành phố và thị trấn trên toàn cầu tắt đèn trong một giờ, từ 20 giờ 30 phút đến 21 giờ 30 phút giờ địa phương.
                        </p>
                        <p class="indent-8">
                            Sự kiện Giờ Trái Đất được khởi xướng lần đầu tiên tại Xít-ni, Ô-xtrây-li-a vào năm 2007. Nhờ các phương tiện truyền thông và sự kêu gọi của các tổ chức quốc tế, sự kiện đã thu hút sự quan tâm của thế giới những năm sau đó. Năm 2022, sự kiện đã ghi nhận sự tham gia của hơn 190 quốc gia và vùng lãnh thổ. Việt Nam chính thức tham gia hưởng ứng Giờ Trái Đất từ năm 2009.
                        </p>
                        <p class="indent-8">
                            Sự kiện Giờ Trái Đất đã khẳng định mỗi hành động nhỏ của từng cá nhân khi được nhân lên trên diện rộng sẽ lan toả và có thể làm cho môi trường sống tốt hơn. Hành động tắt các thiết bị điện không cần thiết trong 60 phút góp phần không nhỏ vào việc tiết kiệm điện năng, giúp giảm thiểu khí các-bô-níc và chống biến đổi khí hậu.
                        </p>
                        <p class="text-right font-black text-blue-600 text-lg mt-6">— (Theo <em>Nguyễn Liêm</em>)</p>
                    </div>

                    <!-- 💡 Ý chính bài đọc -->
                    <div class="bg-emerald-50/70 p-6 rounded-3xl border-l-8 border-emerald-500 shadow-md relative overflow-hidden">
                        <div class="absolute -right-10 -top-10 w-24 h-24 bg-emerald-100/40 rounded-full blur-xl"></div>
                        <h5 class="text-xl md:text-2xl font-black text-emerald-900 mb-2 flex items-center gap-2">
                            <span>💡</span> Ý chính bài học
                        </h5>
                        <p class="text-emerald-800 text-lg md:text-xl font-bold leading-relaxed">
                            Bài đọc cung cấp thông tin về nguồn gốc, mục đích và ý nghĩa to lớn của chiến dịch Giờ Trái Đất, từ đó khích lệ mỗi cá nhân chung tay hành động tiết kiệm năng lượng để bảo vệ môi trường toàn cầu.
                        </p>
                    </div>

                    <!-- Chú giải từ ngữ -->
                    <div class="bg-amber-50 p-6 rounded-3xl border-2 border-dashed border-amber-200">
                        <p class="text-sm font-black text-amber-600 uppercase tracking-[0.2em] mb-4">📝 Từ ngữ chú giải</p>
                        <ul class="space-y-4 text-base md:text-lg text-amber-900 font-bold">
                            <li class="flex items-start gap-2">
                                <span class="text-amber-500">•</span>
                                <span><strong>Quỹ Quốc tế Bảo tồn Thiên nhiên (WWF):</strong> tổ chức phi chính phủ lớn nhất thế giới về bảo tồn thiên nhiên.</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-amber-500">•</span>
                                <span><strong>Các-bô-níc:</strong> chất khí dễ hoá lỏng, không màu, có thể gây ngạt thở ở nồng độ cao (thải ra từ khí thải xe cộ, nhà máy, chất đốt...).</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `,
    "practice": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-4xl mx-auto pb-12">
        <!-- 📖 Hoạt động 1: Trả lời câu hỏi (Accordion) -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-blue-100 space-y-6">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">2</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Đọc hiểu: Trả lời câu hỏi tìm hiểu bài</h3>
            </div>

            <div class="space-y-4">
                <!-- Q1 -->
                <div class="accordion-item bg-gray-50 rounded-2xl border border-gray-150 overflow-hidden">
                    <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                        <span class="font-bold text-gray-800 text-lg md:text-xl group-hover:text-blue-600 transition-colors">
                            Câu 1: Sự kiện Giờ Trái Đất được Quỹ Quốc tế Bảo tồn Thiên nhiên tổ chức hằng năm nhằm mục đích gì?
                        </span>
                        <span class="text-blue-600 font-black text-xl shrink-0 ml-2 group-hover:scale-110 transition-transform">?</span>
                    </button>
                    <div class="accordion-content">
                        <div class="px-6 pb-6 pt-4 text-gray-700 text-lg md:text-xl leading-relaxed border-t border-gray-150 bg-white">
                            <p>Sự kiện được tổ chức hằng năm nhằm <strong>nâng cao nhận thức về biến đổi khí hậu</strong> và <strong>khuyến khích mọi người hành động để bảo vệ Trái Đất</strong>.</p>
                        </div>
                    </div>
                </div>

                <!-- Q2 -->
                <div class="accordion-item bg-gray-50 rounded-2xl border border-gray-150 overflow-hidden">
                    <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                        <span class="font-bold text-gray-800 text-lg md:text-xl group-hover:text-blue-600 transition-colors">
                            Câu 2: Sự kiện Giờ Trái Đất được tổ chức như thế nào?
                        </span>
                        <span class="text-blue-600 font-black text-xl shrink-0 ml-2 group-hover:scale-110 transition-transform">?</span>
                    </button>
                    <div class="accordion-content">
                        <div class="px-6 pb-6 pt-4 text-gray-700 text-lg md:text-xl leading-relaxed border-t border-gray-150 bg-white">
                            <p>Sự kiện được tổ chức vào <strong>thứ Bảy cuối cùng của tháng Ba</strong> hàng năm. Vào thời gian này, các thành phố và thị trấn trên toàn cầu cùng nhau <strong>tắt đèn trong vòng một giờ</strong>, từ <strong>20 giờ 30 phút đến 21 giờ 30 phút</strong> (theo giờ địa phương).</p>
                        </div>
                    </div>
                </div>

                <!-- Q3 -->
                <div class="accordion-item bg-gray-50 rounded-2xl border border-gray-150 overflow-hidden">
                    <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                        <span class="font-bold text-gray-800 text-lg md:text-xl group-hover:text-blue-600 transition-colors">
                            Câu 3: Những chi tiết nào cho thấy sự kiện Giờ Trái Đất đã thu hút được sự quan tâm của thế giới?
                        </span>
                        <span class="text-blue-600 font-black text-xl shrink-0 ml-2 group-hover:scale-110 transition-transform">?</span>
                    </button>
                    <div class="accordion-content">
                        <div class="px-6 pb-6 pt-4 text-gray-700 text-lg md:text-xl leading-relaxed border-t border-gray-150 bg-white space-y-2">
                            <p>Các chi tiết thể hiện sự quan tâm rộng rãi:</p>
                            <p>• Từ điểm khởi đầu ở Xít-ni năm 2007, chiến dịch nhanh chóng thu hút sự quan tâm của thế giới nhờ truyền thông và lời kêu gọi từ các tổ chức quốc tế.</p>
                            <p>• Năm 2022, ghi nhận sự tham gia của <strong>hơn 190 quốc gia và vùng lãnh thổ</strong>.</p>
                            <p>• Việt Nam cũng chính thức tham gia hưởng ứng hành động ý nghĩa này từ năm 2009.</p>
                        </div>
                    </div>
                </div>

                <!-- Q4 -->
                <div class="accordion-item bg-gray-50 rounded-2xl border border-gray-150 overflow-hidden">
                    <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                        <span class="font-bold text-gray-800 text-lg md:text-xl group-hover:text-blue-600 transition-colors">
                            Câu 4: Sự kiện Giờ Trái Đất đã mang lại lợi ích gì cho môi trường sống của chúng ta?
                        </span>
                        <span class="text-blue-600 font-black text-xl shrink-0 ml-2 group-hover:scale-110 transition-transform">?</span>
                    </button>
                    <div class="accordion-content">
                        <div class="px-6 pb-6 pt-4 text-gray-700 text-lg md:text-xl leading-relaxed border-t border-gray-150 bg-white space-y-1">
                            <p>• Góp phần tiết kiệm điện năng tiêu thụ.</p>
                            <p>• Giúp giảm thiểu khí các-bô-níc có hại thải ra khí quyển.</p>
                            <p>• Góp phần tích cực chống biến đổi khí hậu và làm môi trường sống tốt đẹp hơn.</p>
                        </div>
                    </div>
                </div>

                <!-- Q5 -->
                <div class="accordion-item bg-gray-50 rounded-2xl border border-gray-150 overflow-hidden">
                    <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                        <span class="font-bold text-gray-800 text-lg md:text-xl group-hover:text-blue-600 transition-colors">
                            Câu 5: Hãy chia sẻ những việc em có thể làm để bảo vệ Trái Đất.
                        </span>
                        <span class="text-blue-600 font-black text-xl shrink-0 ml-2 group-hover:scale-110 transition-transform">?</span>
                    </button>
                    <div class="accordion-content">
                        <div class="px-6 pb-6 pt-4 text-gray-700 text-lg md:text-xl leading-relaxed border-t border-gray-150 bg-white space-y-2">
                            <p>Những việc học sinh có thể làm:</p>
                            <p>• Tắt bớt bóng đèn, quạt, tivi khi ra khỏi phòng hoặc khi không cần thiết sử dụng.</p>
                            <p>• Tiết kiệm nước sinh hoạt, không xả nước lãng phí.</p>
                            <p>• Hạn chế dùng túi ni lông, cốc nhựa một lần; tích cực thu gom và phân loại rác thải.</p>
                            <p>• Trồng và chăm sóc cây xanh ở nhà cũng như trường lớp.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 📚 Luyện từ và câu - Bài 1: Nêu nghĩa của từ (Tương tác) -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-emerald-100" id="ex-228-match">
            <div class="space-y-6">
                <div class="flex justify-end items-center gap-4">
                    <span class="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black font-sans">3</span>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800">LTVC Bài 1: Nêu nghĩa của từ chứa yếu tố "quốc"</h3>
                </div>
                <p class="text-gray-600 font-bold text-lg">Em hãy kéo hoặc lựa chọn nghĩa tương ứng chính xác của mỗi từ dưới đây:</p>

                <div class="grid grid-cols-1 gap-4">
                    <!-- quốc ca -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-emerald-50/30 rounded-2xl border border-emerald-100">
                        <span class="w-32 text-center py-2 bg-emerald-600 text-white font-black text-lg rounded-xl shrink-0">quốc ca</span>
                        <select id="sel-228-quocca" class="p-2 border-2 border-emerald-250 rounded-xl font-bold bg-white focus:outline-none flex-grow text-base md:text-lg">
                            <option value="">-- Chọn nghĩa của từ --</option>
                            <option value="quoc_gia">Nước nhà, đất nước nói chung</option>
                            <option value="quoc_ca">Bài hát chính thức của một nước, dùng trong nghi lễ trọng thể</option>
                            <option value="quoc_khanh">Ngày lễ lớn ăn mừng sự kiện độc lập, lập quốc của một nước</option>
                            <option value="quoc_ki">Lá cờ đại diện chính thức cho một nước</option>
                            <option value="quoc_ngu">Chữ viết hoặc tiếng nói chính thức của một quốc gia</option>
                            <option value="quoc_te">Thuộc về chung nhiều nước, mối quan hệ giữa các nước trên thế giới</option>
                        </select>
                    </div>

                    <!-- quốc gia -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-emerald-50/30 rounded-2xl border border-emerald-100">
                        <span class="w-32 text-center py-2 bg-emerald-600 text-white font-black text-lg rounded-xl shrink-0">quốc gia</span>
                        <select id="sel-228-quocgia" class="p-2 border-2 border-emerald-250 rounded-xl font-bold bg-white focus:outline-none flex-grow text-base md:text-lg">
                            <option value="">-- Chọn nghĩa của từ --</option>
                            <option value="quoc_gia">Nước nhà, đất nước nói chung</option>
                            <option value="quoc_ca">Bài hát chính thức của một nước, dùng trong nghi lễ trọng thể</option>
                            <option value="quoc_khanh">Ngày lễ lớn ăn mừng sự kiện độc lập, lập quốc của một nước</option>
                            <option value="quoc_ki">Lá cờ đại diện chính thức cho một nước</option>
                            <option value="quoc_ngu">Chữ viết hoặc tiếng nói chính thức của một quốc gia</option>
                            <option value="quoc_te">Thuộc về chung nhiều nước, mối quan hệ giữa các nước trên thế giới</option>
                        </select>
                    </div>

                    <!-- quốc khánh -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-emerald-50/30 rounded-2xl border border-emerald-100">
                        <span class="w-32 text-center py-2 bg-emerald-600 text-white font-black text-lg rounded-xl shrink-0">quốc khánh</span>
                        <select id="sel-228-quockhanh" class="p-2 border-2 border-emerald-250 rounded-xl font-bold bg-white focus:outline-none flex-grow text-base md:text-lg">
                            <option value="">-- Chọn nghĩa của từ --</option>
                            <option value="quoc_gia">Nước nhà, đất nước nói chung</option>
                            <option value="quoc_ca">Bài hát chính thức của một nước, dùng trong nghi lễ trọng thể</option>
                            <option value="quoc_khanh">Ngày lễ lớn ăn mừng sự kiện độc lập, lập quốc của một nước</option>
                            <option value="quoc_ki">Lá cờ đại diện chính thức cho một nước</option>
                            <option value="quoc_ngu">Chữ viết hoặc tiếng nói chính thức của một quốc gia</option>
                            <option value="quoc_te">Thuộc về chung nhiều nước, mối quan hệ giữa các nước trên thế giới</option>
                        </select>
                    </div>

                    <!-- quốc kì -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-emerald-50/30 rounded-2xl border border-emerald-100">
                        <span class="w-32 text-center py-2 bg-emerald-600 text-white font-black text-lg rounded-xl shrink-0">quốc kì</span>
                        <select id="sel-228-quocki" class="p-2 border-2 border-emerald-250 rounded-xl font-bold bg-white focus:outline-none flex-grow text-base md:text-lg">
                            <option value="">-- Chọn nghĩa của từ --</option>
                            <option value="quoc_gia">Nước nhà, đất nước nói chung</option>
                            <option value="quoc_ca">Bài hát chính thức của một nước, dùng trong nghi lễ trọng thể</option>
                            <option value="quoc_khanh">Ngày lễ lớn ăn mừng sự kiện độc lập, lập quốc của một nước</option>
                            <option value="quoc_ki">Lá cờ đại diện chính thức cho một nước</option>
                            <option value="quoc_ngu">Chữ viết hoặc tiếng nói chính thức của một quốc gia</option>
                            <option value="quoc_te">Thuộc về chung nhiều nước, mối quan hệ giữa các nước trên thế giới</option>
                        </select>
                    </div>

                    <!-- quốc ngữ -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-emerald-50/30 rounded-2xl border border-emerald-100">
                        <span class="w-32 text-center py-2 bg-emerald-600 text-white font-black text-lg rounded-xl shrink-0">quốc ngữ</span>
                        <select id="sel-228-quocngu" class="p-2 border-2 border-emerald-250 rounded-xl font-bold bg-white focus:outline-none flex-grow text-base md:text-lg">
                            <option value="">-- Chọn nghĩa của từ --</option>
                            <option value="quoc_gia">Nước nhà, đất nước nói chung</option>
                            <option value="quoc_ca">Bài hát chính thức của một nước, dùng trong nghi lễ trọng thể</option>
                            <option value="quoc_khanh">Ngày lễ lớn ăn mừng sự kiện độc lập, lập quốc của một nước</option>
                            <option value="quoc_ki">Lá cờ đại diện chính thức cho một nước</option>
                            <option value="quoc_ngu">Chữ viết hoặc tiếng nói chính thức của một quốc gia</option>
                            <option value="quoc_te">Thuộc về chung nhiều nước, mối quan hệ giữa các nước trên thế giới</option>
                        </select>
                    </div>

                    <!-- quốc tế -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-emerald-50/30 rounded-2xl border border-emerald-100">
                        <span class="w-32 text-center py-2 bg-emerald-600 text-white font-black text-lg rounded-xl shrink-0">quốc tế</span>
                        <select id="sel-228-quocte" class="p-2 border-2 border-emerald-250 rounded-xl font-bold bg-white focus:outline-none flex-grow text-base md:text-lg">
                            <option value="">-- Chọn nghĩa của từ --</option>
                            <option value="quoc_gia">Nước nhà, đất nước nói chung</option>
                            <option value="quoc_ca">Bài hát chính thức của một nước, dùng trong nghi lễ trọng thể</option>
                            <option value="quoc_khanh">Ngày lễ lớn ăn mừng sự kiện độc lập, lập quốc của một nước</option>
                            <option value="quoc_ki">Lá cờ đại diện chính thức cho một nước</option>
                            <option value="quoc_ngu">Chữ viết hoặc tiếng nói chính thức của một quốc gia</option>
                            <option value="quoc_te">Thuộc về chung nhiều nước, mối quan hệ giữa các nước trên thế giới</option>
                        </select>
                    </div>
                </div>

                <div class="flex justify-end items-center gap-4"><button onclick="window.resetLt228_1()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="window.checkLt228_1();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-lt-228-1" class="hidden p-4 rounded-xl font-bold text-lg mt-4 animate-in fade-in"></div>
            </div>
        </section>

        <!-- 📚 Luyện từ và câu - Bài 2: Điền từ vào đoạn văn (Tương tác) -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-sky-100" id="ex-228-fill">
            <div class="space-y-6">
                <div class="flex justify-end items-center gap-4">
                    <span class="w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center font-black font-sans">4</span>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800">LTVC Bài 2: Chọn từ thích hợp thay thế bông hoa</h3>
                </div>
                <p class="text-gray-600 font-bold text-lg">Em hãy chọn từ chính xác để thay thế các bông hoa trong đoạn văn sau:</p>

                <div class="serif-font p-6 bg-sky-50/30 rounded-3xl border border-sky-100 text-xl leading-relaxed text-gray-800 space-y-4">
                    <p>
                        <sup>(1)</sup> Việt Nam là một 
                        <select id="fill-228-1" class="mx-1 p-1 border-2 border-sky-200 rounded-lg bg-white font-bold text-sky-900 focus:outline-none">
                            <option value="">-- ? --</option>
                            <option value="quoc_gia">quốc gia</option>
                            <option value="quoc_te">quốc tế</option>
                            <option value="quoc_ca">quốc ca</option>
                        </select>
                        thành viên của Liên hợp quốc. <sup>(2)</sup> Ngày 2 tháng 9 là ngày 
                        <select id="fill-228-2" class="mx-1 p-1 border-2 border-sky-200 rounded-lg bg-white font-bold text-sky-900 focus:outline-none">
                            <option value="">-- ? --</option>
                            <option value="quoc_khanh">quốc khánh</option>
                            <option value="quoc_gia">quốc gia</option>
                            <option value="quoc_ki">quốc kì</option>
                        </select>
                        của Việt Nam. <sup>(3)</sup> 
                        <select id="fill-228-3" class="mx-1 p-1 border-2 border-sky-200 rounded-lg bg-white font-bold text-sky-900 focus:outline-none">
                            <option value="">-- ? --</option>
                            <option value="quoc_ki">Quốc kì</option>
                            <option value="quoc_ngu">Quốc ngữ</option>
                            <option value="quoc_ca">Quốc ca</option>
                        </select>
                        của Việt Nam là lá cờ đỏ sao vàng năm cánh và 
                        <select id="fill-228-4" class="mx-1 p-1 border-2 border-sky-200 rounded-lg bg-white font-bold text-sky-900 focus:outline-none">
                            <option value="">-- ? --</option>
                            <option value="quoc_ca">quốc ca</option>
                            <option value="quoc_ngu">quốc ngữ</option>
                            <option value="quoc_te">quốc tế</option>
                        </select>
                        của Việt Nam là bài hát <em>Tiến quân ca</em>.
                    </p>
                    <p class="text-right font-sans font-bold text-gray-500 text-base">— Theo Ngọc Phương</p>
                </div>

                <div class="flex justify-end items-center gap-4"><button onclick="window.resetLt228_2()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="window.checkLt228_2();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-lt-228-2" class="hidden p-4 rounded-xl font-bold text-lg mt-4 animate-in fade-in"></div>
            </div>
        </section>
    </div>
    `,
    "quizPool": [
        {
            "question": "Giờ Trái Đất là sự kiện được tổ chức bởi tổ chức nào?",
            "options": [
                "Liên Hợp Quốc",
                "Quỹ Quốc tế Bảo tồn Thiên nhiên (WWF)",
                "UNESCO",
                "Tổ chức Y tế Thế giới (WHO)"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Sự kiện Giờ Trái Đất được tổ chức vào thời gian nào hằng năm?",
            "options": [
                "Thứ Bảy cuối cùng của tháng Ba",
                "Chủ nhật đầu tiên của tháng Tư",
                "Ngày 22 tháng 4 hàng năm",
                "Thứ Bảy đầu tiên của tháng Mười hai"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khung giờ tắt đèn chính thức của chiến dịch Giờ Trái Đất là khi nào?",
            "options": [
                "Từ 19 giờ 00 phút đến 20 giờ 00 phút",
                "Từ 20 giờ 00 phút đến 21 giờ 00 phút",
                "Từ 20 giờ 30 phút đến 21 giờ 30 phút",
                "Từ 21 giờ 00 phút đến 22 giờ 00 phút"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Sự kiện Giờ Trái Đất được khởi xướng lần đầu tiên tại quốc gia nào?",
            "options": [
                "Mỹ (New York)",
                "Anh (London)",
                "Ô-xtrây-li-a (Sydney)",
                "Pháp (Paris)"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Chiến dịch Giờ Trái Đất bắt đầu diễn ra lần đầu tiên vào năm nào?",
            "options": [
                "Năm 2005",
                "Năm 2007",
                "Năm 2009",
                "Năm 2012"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Việt Nam chính thức tham gia hưởng ứng chiến dịch Giờ Trái Đất từ năm nào?",
            "options": [
                "Năm 2007",
                "Năm 2008",
                "Năm 2009",
                "Năm 2010"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Mục đích chính của sự kiện Giờ Trái Đất là gì?",
            "options": [
                "Để tiết kiệm tiền điện tiêu dùng tối đa cho người dân",
                "Nâng cao nhận thức về biến đổi khí hậu và khuyến khích bảo vệ Trái Đất",
                "Để tạo cơ hội vui chơi giải trí và ngắm sao ban đêm",
                "Để các thiết bị điện tử có thời gian nghỉ ngơi hạ nhiệt độ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Hành động cụ thể được mọi người thực hiện trong Giờ Trái Đất là gì?",
            "options": [
                "Đốt lửa trại tập thể ngoài trời",
                "Tắt toàn bộ thiết bị điện trong nhà kể cả tủ lạnh",
                "Tắt các thiết bị điện và chiếu sáng không cần thiết trong 1 giờ",
                "Khóa van nước sinh hoạt trong suốt 60 phút"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Năm 2022, chiến dịch Giờ Trái Đất đã ghi nhận sự tham gia của bao nhiêu quốc gia và vùng lãnh thổ?",
            "options": [
                "Hơn 100 quốc gia và vùng lãnh thổ",
                "Hơn 150 quốc gia và vùng lãnh thổ",
                "Hơn 190 quốc gia và vùng lãnh thổ",
                "Hơn 220 quốc gia và vùng lãnh thổ"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Hành động tắt thiết bị điện không cần thiết trong 60 phút mang lại lợi ích gì?",
            "options": [
                "Giúp nâng cao tuổi thọ của các thiết bị điện một cách tuyệt đối",
                "Tiết kiệm điện năng, giảm thiểu khí các-bô-níc và chống biến đổi khí hậu",
                "Làm tăng nhiệt độ bề mặt Trái Đất mát mẻ hơn",
                "Giúp giảm tối đa lượng bụi mịn có trong không khí xung quanh"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ nào sau đây có nghĩa là 'Bài hát chính thức của một nước, dùng trong các nghi lễ trọng thể'?",
            "options": [
                "quốc kì",
                "quốc ca",
                "quốc khánh",
                "quốc ngữ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ nào có nghĩa là 'Lá cờ đại diện chính thức cho đất nước'?",
            "options": [
                "quốc ca",
                "quốc kì",
                "quốc khánh",
                "quốc ngữ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nghĩa của từ 'quốc gia' là gì?",
            "options": [
                "Mối quan hệ giữa các quốc gia",
                "Đất nước, nước nhà nói chung",
                "Tiếng nói chính thức của nhân dân",
                "Ngày lễ kỉ niệm ngày thành lập nước"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Yếu tố 'quốc' trong các từ quốc ca, quốc gia, quốc kì có nghĩa là gì?",
            "options": [
                "Vua",
                "Nước (đất nước)",
                "Dân (người dân)",
                "Bài hát"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Thông điệp sâu sắc nhất mà Giờ Trái Đất muốn truyền tải tới mọi người là gì?",
            "options": [
                "Mỗi hành động nhỏ của cá nhân khi nhân lên diện rộng sẽ làm môi trường sống tốt đẹp hơn",
                "Chỉ cần tắt đèn một tiếng là môi trường đã được bảo vệ hoàn toàn",
                "Truyền thông là yếu tố duy nhất làm nên thành công của chiến dịch",
                "Mọi người nên sống trong bóng tối thường xuyên để bảo vệ thiên nhiên"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// Đăng ký các hàm bổ trợ tương tác toàn cục
window.checkWarmup228 = function() {
    const response = document.getElementById('warmup-response').value.trim();
    const fb = document.getElementById('fb-warmup-228');
    fb.classList.remove('hidden');
    if (response.length < 10) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-2";
        fb.innerHTML = "⚠️ Em hãy viết một câu trả lời chi tiết hơn để chia sẻ cảm nhận của mình nhé!";
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-2";
        fb.innerHTML = "🌟 Tuyệt vời! Cảm ơn em đã chia sẻ suy nghĩ. Đúng vậy, bức tranh thể hiện hai bạn nhỏ đang cùng nhau ôm quả địa cầu và tắt bớt đèn điện để bảo vệ Trái Đất xanh tươi.";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    }
};

window.checkLt228_1 = function() {
    const quocca = document.getElementById('sel-228-quocca').value;
    const quocgia = document.getElementById('sel-228-quocgia').value;
    const quockhanh = document.getElementById('sel-228-quockhanh').value;
    const quocki = document.getElementById('sel-228-quocki').value;
    const quocngu = document.getElementById('sel-228-quocngu').value;
    const quocte = document.getElementById('sel-228-quocte').value;
    const fb = document.getElementById('fb-lt-228-1');
    fb.classList.remove('hidden');

    if (!quocca || !quocgia || !quockhanh || !quocki || !quocngu || !quocte) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em vui lòng chọn nghĩa tương ứng cho tất cả các từ nhé!";
        return;
    }

    if (quocca === 'quoc_ca' && quocgia === 'quoc_gia' && quockhanh === 'quoc_khanh' && quocki === 'quoc_ki' && quocngu === 'quoc_ngu' && quocte === 'quoc_te') {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
        fb.innerHTML = "🌟 Chúc mừng em! Em đã nối chính xác nghĩa của cả 6 từ chứa yếu tố 'quốc'. Em học từ vựng rất tốt!";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
        if (typeof window.submitMathLesson === 'function') {
            window.submitMathLesson("Đọc Tiết 228: Nghĩa của từ chứa yếu tố quốc", 100, "ex-228-match", 1, 1, 1);
        }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-800 border border-red-200 mt-4";
        fb.innerHTML = "❌ Chưa chính xác rồi. Em hãy đọc kỹ từng định nghĩa và chọn lại từ thích hợp nhé!";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

window.resetLt228_1 = function() {
    document.getElementById('sel-228-quocca').value = "";
    document.getElementById('sel-228-quocgia').value = "";
    document.getElementById('sel-228-quockhanh').value = "";
    document.getElementById('sel-228-quocki').value = "";
    document.getElementById('sel-228-quocngu').value = "";
    document.getElementById('sel-228-quocte').value = "";
    const fb = document.getElementById('fb-lt-228-1');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};

window.checkLt228_2 = function() {
    const f1 = document.getElementById('fill-228-1').value;
    const f2 = document.getElementById('fill-228-2').value;
    const f3 = document.getElementById('fill-228-3').value;
    const f4 = document.getElementById('fill-228-4').value;
    const fb = document.getElementById('fb-lt-228-2');
    fb.classList.remove('hidden');

    if (!f1 || !f2 || !f3 || !f4) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em hãy điền đầy đủ cả 4 ô trống trước khi kiểm tra nhé!";
        return;
    }

    if (f1 === 'quoc_gia' && f2 === 'quoc_khanh' && f3 === 'quoc_ki' && f4 === 'quoc_ca') {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
        fb.innerHTML = "🌟 Tuyệt vời! Em đã điền hoàn toàn chính xác các từ thay cho bông hoa trong đoạn văn giới thiệu đất nước Việt Nam!";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
        if (typeof window.submitMathLesson === 'function') {
            window.submitMathLesson("Đọc Tiết 228: Điền từ đoạn văn đất nước", 100, "ex-228-fill", 1, 1, 1);
        }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-800 border border-red-200 mt-4";
        fb.innerHTML = "❌ Có từ điền chưa chính xác. Hãy nhớ ngày 2 tháng 9 là ngày gì, lá cờ là gì, và Tiến quân ca là gì để chọn lại nhé!";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

window.resetLt228_2 = function() {
    document.getElementById('fill-228-1').value = "";
    document.getElementById('fill-228-2').value = "";
    document.getElementById('fill-228-3').value = "";
    document.getElementById('fill-228-4').value = "";
    const fb = document.getElementById('fb-lt-228-2');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};

// Đăng ký toàn cục bài học
window.lesson228 = lesson228;
