export const lesson235 = {
    "topic": "Tiếng Việt 5",
    "week": "34",
    "period": "235-236",
    "title": "ĐỌC: THÀNH PHỐ THÔNG MINH MÁT-XĐA",
    "desc": "Bài học giới thiệu mô hình đô thị sinh thái không các-bô-níc đầu tiên trên thế giới - Mát-xđa, kết hợp thực hành liên kết câu, hoàn thành câu ghép và phân loại tên riêng nước ngoài.",
    "subject": "Đọc",
    "theme": "Thế giới của chúng ta",
    "audio": "am_thanh/342-mat-xda.mp3",
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
                    Đọc trôi chảy toàn bài, ngắt nghỉ đúng nhịp và hiểu rõ các giải pháp công nghệ xanh độc đáo của thành phố Mát-xđa.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Nhận diện được các phép liên kết câu, hoàn thành câu ghép đúng ngữ pháp và phân biệt hai cách viết tên riêng nước ngoài.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Ý thức được sự cần thiết của việc bảo vệ môi trường, tiết kiệm năng lượng và ủng hộ lối sống xanh.
                </li>
            </ul>
        </div>

        <!-- 🧩 Khởi động (Warmup) -->
        <section class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 space-y-6">
            <div class="flex items-center gap-4">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">1</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: So sánh hai bức tranh</h3>
            </div>
            <p class="text-gray-600 font-bold text-lg">Dưới đây là 2 bức tranh vẽ thành phố (một bên là phố xá cao tầng hiện đại sầm uất, một bên là khu phố xanh mát yên bình). Em thích bức tranh nào hơn? Vì sao?</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-md">
                    <img src="assets/images/thanhpho_hien_dai.png" alt="Thành phố cao tầng sầm uất" class="w-full h-48 object-cover" onerror="this.src='placeholders/city_modern.png'; this.onerror=null;">
                    <div class="p-4 bg-gray-50 text-center">
                        <p class="font-black text-lg text-gray-700">🏢 Thành phố cao tầng hiện đại</p>
                    </div>
                </div>
                <div class="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-md">
                    <img src="assets/images/thanhpho_sinh_thai.png" alt="Thành phố xanh mát hòa mình thiên nhiên" class="w-full h-48 object-cover" onerror="this.src='placeholders/city_eco.png'; this.onerror=null;">
                    <div class="p-4 bg-gray-50 text-center">
                        <p class="font-black text-lg text-gray-700">🏡 Thành phố sinh thái xanh mát</p>
                    </div>
                </div>
            </div>

            <div class="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 space-y-4">
                <textarea id="warmup-response-235" class="w-full p-4 border-2 border-blue-200 rounded-xl font-medium focus:outline-none focus:border-blue-500 text-lg" rows="3" placeholder="Em hãy chia sẻ bức tranh mình thích và lý do tại sao nhé..."></textarea>
                <div class="flex justify-end">
                    <button onclick="window.checkWarmup235()" class="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">Gửi chia sẻ</button>
                </div>
                <div id="fb-warmup-235" class="hidden p-4 rounded-xl font-bold text-lg mt-2"></div>
            </div>
        </section>

        <!-- 📖 Bài đọc và Chú thích -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 relative overflow-hidden max-w-3xl mx-auto">
                <div class="space-y-8">
                    <!-- Minh họa sách giáo khoa -->
                    <div class="w-full max-w-lg mx-auto aspect-[16/9] bg-gradient-to-br from-blue-50 to-sky-100 rounded-3xl border-4 border-white shadow-lg overflow-hidden relative group">
                        <img src="assets/images/thanh_pho_mat_xda.png" alt="Mô hình thiết kế ô hướng dương che nắng tại Mát-xđa" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onerror="this.src='placeholders/masdar_city.png'; this.onerror=null;">
                    </div>

                    <h4 class="text-3xl md:text-4xl font-black text-blue-600 text-center leading-tight mb-8">
                        📖 THÀNH PHỐ THÔNG MINH MÁT-XĐA
                    </h4>
                    
                    <div class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed text-justify space-y-6 pl-4 md:pl-8 border-l-4 border-blue-200">
                        <p class="indent-8">
                            Mát-xđa là một ốc đảo nằm giữa sa mạc, thuộc Các Tiểu vương quốc Ả Rập Thống nhất (viết tắt là UAE). Năm 2008, UAE khởi công xây dựng dự án “Thành phố thông minh Mát-xđa" nhằm biến Mát-xđa trở thành thành phố không các-bô-níc đầu tiên trên thế giới.
                        </p>
                        <p class="indent-8">
                            Điểm nhấn trong thiết kế của thành phố là những chiếc ô hình hoa hướng dương. Ban ngày, những chiếc ô này vừa giúp lưu trữ năng lượng mặt trời vừa là những tấm che nắng khổng lồ. Ban đêm, chúng sẽ khép lại, toả nhiệt, cung cấp điện năng lượng mặt trời cho toàn thành phố.
                        </p>
                        <p class="indent-8">
                            Để đối phó với tình trạng nóng lên do biến đổi khí hậu, ở Mát-xđa, các toà nhà được thiết kế chụm lại với nhau, có lối đi ở giữa, giúp không khí lưu thông được dễ dàng và giúp giảm nhiệt độ mùa hè. Ngoài ra, một tháp gió được xây dựng nhằm lấy dòng không khí trên cao, mang làn gió mát mẻ vào thành phố, cũng góp phần làm giảm đáng kể nhiệt độ nơi đây so với vùng sa mạc ở xung quanh.
                        </p>
                        <p class="indent-8">
                            Các công viên và khu thương mại ở Mát-xđa được xây dựng theo mô hình khu vườn Ả Rập truyền thống, ngập tràn màu xanh, giúp giảm thiểu tối đa lượng khí thải. Chính quyền thành phố cũng khuyến khích người dân đi bộ, đi xe đạp hoặc sử dụng các phương tiện giao thông công cộng chạy bằng điện năng lượng mặt trời để bảo vệ môi trường.
                        </p>
                        <p class="indent-8">
                            Việc xây dựng thành công thành phố thông minh Mát-xđa đã truyền cảm hứng cho một số dự án phát triển nhà ở Anh, Bồ Đào Nha,.... Đây sẽ là những đô thị sinh thái tiếp theo giúp ngăn chặn ô nhiễm môi trường và biến đổi khí hậu.
                        </p>
                        <p class="text-right font-black text-blue-600 text-lg mt-6">— (Theo <em>Lâm Anh</em> tổng hợp)</p>
                    </div>

                    <!-- 💡 Ý chính bài đọc -->
                    <div class="bg-emerald-50/70 p-6 rounded-3xl border-l-8 border-emerald-500 shadow-md relative overflow-hidden">
                        <div class="absolute -right-10 -top-10 w-24 h-24 bg-emerald-100/40 rounded-full blur-xl"></div>
                        <h5 class="text-xl md:text-2xl font-black text-emerald-900 mb-2 flex items-center gap-2">
                            <span>💡</span> Ý chính bài học
                        </h5>
                        <p class="text-emerald-800 text-lg md:text-xl font-bold leading-relaxed">
                            Bài đọc ca ngợi ý tưởng đột phá và thiết kế thông minh của đô thị sinh thái Mát-xđa trong việc tận dụng năng lượng sạch và giảm thiểu khí thải, truyền cảm hứng xanh cho toàn thế giới.
                        </p>
                    </div>

                    <!-- Chú giải từ ngữ -->
                    <div class="bg-amber-50 p-6 rounded-3xl border-2 border-dashed border-amber-200">
                        <p class="text-sm font-black text-amber-600 uppercase tracking-[0.2em] mb-4">📝 Từ ngữ chú giải</p>
                        <ul class="space-y-4 text-base md:text-lg text-amber-900 font-bold">
                            <li class="flex items-start gap-2">
                                <span class="text-amber-500">•</span>
                                <span><strong>Ốc đảo:</strong> khoảng đất có nước và cây cối giữa sa mạc.</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-amber-500">•</span>
                                <span><strong>Các Tiểu vương quốc Ả Rập Thống nhất:</strong> quốc gia Tây Á nằm ở phía đông nam bán đảo Ả Rập, bên vịnh Ba Tư.</span>
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
            <div class="flex items-center gap-4">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">2</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Đọc hiểu: Trả lời câu hỏi tìm hiểu bài</h3>
            </div>

            <div class="space-y-4">
                <!-- Q1 -->
                <div class="accordion-item bg-gray-50 rounded-2xl border border-gray-150 overflow-hidden">
                    <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                        <span class="font-bold text-gray-800 text-lg md:text-xl group-hover:text-blue-600 transition-colors">
                            Câu 1: Tìm trong bài học một số thông tin về dự án "Thành phố thông minh Mát-xđa"?
                        </span>
                        <span class="text-blue-600 font-black text-xl shrink-0 ml-2 group-hover:scale-110 transition-transform">?</span>
                    </button>
                    <div class="accordion-content">
                        <div class="px-6 pb-6 pt-4 text-gray-700 text-lg md:text-xl leading-relaxed border-t border-gray-150 bg-white space-y-2">
                            <p>• <strong>Địa điểm đặt dự án:</strong> Ốc đảo nằm giữa sa mạc thuộc Các Tiểu vương quốc Ả Rập Thống nhất (UAE).</p>
                            <p>• <strong>Thời gian khởi công:</strong> Năm 2008.</p>
                            <p>• <strong>Mục đích của dự án:</strong> Nhằm biến Mát-xđa trở thành thành phố không các-bô-níc đầu tiên trên thế giới.</p>
                        </div>
                    </div>
                </div>

                <!-- Q2 -->
                <div class="accordion-item bg-gray-50 rounded-2xl border border-gray-150 overflow-hidden">
                    <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                        <span class="font-bold text-gray-800 text-lg md:text-xl group-hover:text-blue-600 transition-colors">
                            Câu 2: Thành phố Mát-xđa được thiết kế như thế nào để có thể tự vận hành bằng việc sử dụng điện năng lượng mặt trời?
                        </span>
                        <span class="text-blue-600 font-black text-xl shrink-0 ml-2 group-hover:scale-110 transition-transform">?</span>
                    </button>
                    <div class="accordion-content">
                        <div class="px-6 pb-6 pt-4 text-gray-700 text-lg md:text-xl leading-relaxed border-t border-gray-150 bg-white">
                            <p>Điểm nhấn thiết kế là <strong>những chiếc ô hình hoa hướng dương khổng lồ</strong>. Ban ngày, ô xòe ra để che nắng và thu thập/lưu trữ năng lượng mặt trời. Ban đêm, ô khép lại và tỏa nhiệt, giải phóng năng lượng đã lưu trữ dưới dạng điện năng để cung cấp cho toàn thành phố.</p>
                        </div>
                    </div>
                </div>

                <!-- Q3 -->
                <div class="accordion-item bg-gray-50 rounded-2xl border border-gray-150 overflow-hidden">
                    <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                        <span class="font-bold text-gray-800 text-lg md:text-xl group-hover:text-blue-600 transition-colors">
                            Câu 3: Vì sao thành phố Mát-xđa có thể đối phó với tình trạng nóng lên do biến đổi khí hậu?
                        </span>
                        <span class="text-blue-600 font-black text-xl shrink-0 ml-2 group-hover:scale-110 transition-transform">?</span>
                    </button>
                    <div class="accordion-content">
                        <div class="px-6 pb-6 pt-4 text-gray-700 text-lg md:text-xl leading-relaxed border-t border-gray-150 bg-white space-y-1">
                            <p>• Các tòa nhà được thiết kế chụm sát lại với nhau, để lại lối đi nhỏ ở giữa giúp không khí lưu thông dễ dàng, giảm nhiệt độ.</p>
                            <p>• Xây dựng <strong>tháp gió</strong> để thu hút luồng khí mát trên cao thổi vào thành phố, hạ nhiệt độ đáng kể so với sa mạc xung quanh.</p>
                        </div>
                    </div>
                </div>

                <!-- Q4 -->
                <div class="accordion-item bg-gray-50 rounded-2xl border border-gray-150 overflow-hidden">
                    <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                        <span class="font-bold text-gray-800 text-lg md:text-xl group-hover:text-blue-600 transition-colors">
                            Câu 4: Những chi tiết nào trong bài cho thấy thành phố Mát-xđa giúp ngăn chặn ô nhiễm môi trường?
                        </span>
                        <span class="text-blue-600 font-black text-xl shrink-0 ml-2 group-hover:scale-110 transition-transform">?</span>
                    </button>
                    <div class="accordion-content">
                        <div class="px-6 pb-6 pt-4 text-gray-700 text-lg md:text-xl leading-relaxed border-t border-gray-150 bg-white space-y-1">
                            <p>• Công viên và khu thương mại ngập tràn màu xanh của cây cối theo mô hình vườn Ả Rập truyền thống.</p>
                            <p>• Chính quyền khuyến khích người dân đi bộ, xe đạp hoặc phương tiện công cộng chạy bằng điện mặt trời để giảm thiểu khí thải các-bô-níc.</p>
                        </div>
                    </div>
                </div>

                <!-- Q5 -->
                <div class="accordion-item bg-gray-50 rounded-2xl border border-gray-150 overflow-hidden">
                    <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                        <span class="font-bold text-gray-800 text-lg md:text-xl group-hover:text-blue-600 transition-colors">
                            Câu 5: Câu 'Việc xây dựng thành công thành phố thông minh Mát-xđa đã truyền cảm hứng...' gợi cho em suy nghĩ gì?
                        </span>
                        <span class="text-blue-600 font-black text-xl shrink-0 ml-2 group-hover:scale-110 transition-transform">?</span>
                    </button>
                    <div class="accordion-content">
                        <div class="px-6 pb-6 pt-4 text-gray-700 text-lg md:text-xl leading-relaxed border-t border-gray-150 bg-white">
                            <p>Gợi cho em thấy được tầm quan trọng của việc tiên phong xây dựng mô hình xanh. Khi một dự án thành công, nó sẽ lan tỏa và khích lệ nhiều quốc gia khác (như Anh, Bồ Đào Nha...) cùng thiết kế các đô thị sinh thái, chung tay bảo vệ ngôi nhà chung Trái Đất.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 📚 Luyện tập ngữ pháp - Bài 1: Chỉ ra biện pháp liên kết (Tương tác) -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-emerald-100" id="ex-235-link">
            <div class="space-y-6">
                <div class="flex items-center gap-4">
                    <span class="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black">3</span>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800">Luyện tập 1: Phép liên kết trong đoạn văn</h3>
                </div>
                <p class="text-gray-600 font-bold text-lg">Đọc đoạn văn sau và chọn từ ngữ thực hiện phép liên kết tương ứng:</p>
                <div class="p-4 bg-emerald-50/20 rounded-2xl border border-emerald-100 italic text-gray-700 leading-relaxed text-base md:text-lg">
                    "Để đối phó với tình trạng nóng lên do biến đổi khí hậu, ở <span class="font-bold text-emerald-900">Mát-xđa</span>, các toà nhà... <strong>Ngoài ra</strong>, một tháp gió được xây dựng nhằm lấy dòng không khí trên cao, mang làn gió mát mẻ vào thành phố, cũng góp phần làm giảm đáng kể nhiệt độ <span class="font-bold text-emerald-900">nơi đây</span>..."
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-emerald-50/30 rounded-2xl border border-emerald-100 flex items-center justify-between gap-4">
                        <span class="font-bold text-emerald-950 text-base">Từ nối liên kết (phép nối):</span>
                        <select id="sel-235-link-noi" class="p-2 border border-emerald-350 rounded-xl font-bold bg-white focus:outline-none text-base">
                            <option value="">-- Chọn từ --</option>
                            <option value="ngoaira">Ngoài ra</option>
                            <option value="thapgio">tháp gió</option>
                            <option value="nhietdo">nhiệt độ</option>
                        </select>
                    </div>

                    <div class="p-4 bg-emerald-50/30 rounded-2xl border border-emerald-100 flex items-center justify-between gap-4">
                        <span class="font-bold text-emerald-950 text-base">Từ thay thế cho "Mát-xđa" (phép thế):</span>
                        <select id="sel-235-link-the" class="p-2 border border-emerald-350 rounded-xl font-bold bg-white focus:outline-none text-base">
                            <option value="">-- Chọn từ --</option>
                            <option value="bien-doi">biến đổi</option>
                            <option value="noiday">nơi đây</option>
                            <option value="thanhpho">thành phố</option>
                        </select>
                    </div>
                </div>

                <div class="flex items-center justify-between pt-4">
                    <button onclick="window.resetLink235()" class="px-6 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300">LÀM LẠI</button>
                    <button id="btn-check-link" onclick="window.checkLink235()" class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl font-black text-2xl md:text-3xl shadow-lg transition-all active:scale-95 flex items-center justify-center">E</button>
                </div>
                <div id="fb-link-235" class="hidden p-4 rounded-xl font-bold text-lg mt-4 animate-in fade-in"></div>
            </div>
        </section>

        <!-- 📚 Luyện tập ngữ pháp - Bài 2: Tạo câu ghép (Tương tác) -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-sky-100" id="ex-235-comp">
            <div class="space-y-6">
                <div class="flex items-center gap-4">
                    <span class="w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center font-black">4</span>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800">Luyện tập 2: Hoàn thành câu ghép</h3>
                </div>
                <p class="text-gray-600 font-bold text-lg">Em hãy lựa chọn vế câu ghép thích hợp nhất để điền vào chỗ trống:</p>

                <div class="space-y-4">
                    <!-- Câu a -->
                    <div class="p-4 bg-sky-50/30 rounded-2xl border border-sky-100 space-y-2">
                        <p class="font-bold text-sky-950 text-base">a. Nhờ những chiếc ô hình hoa hướng dương mà...</p>
                        <select id="sel-235-comp-a" class="w-full p-2 border-2 border-sky-200 rounded-xl font-bold bg-white focus:outline-none text-base">
                            <option value="">-- Chọn vế câu thích hợp --</option>
                            <option value="a1">thành phố luôn mát mẻ vào mùa hè nắng nóng.</option>
                            <option value="a2">toàn bộ điện năng lượng mặt trời được tích trữ và cung cấp đầy đủ cả ngày lẫn đêm.</option>
                            <option value="a3">người dân đi bộ rèn luyện sức khỏe mỗi ngày.</option>
                        </select>
                    </div>

                    <!-- Câu b -->
                    <div class="p-4 bg-sky-50/30 rounded-2xl border border-sky-100 space-y-2">
                        <p class="font-bold text-sky-950 text-base">b. Tuy Mát-xđa mới được xây dựng nhưng...</p>
                        <select id="sel-235-comp-b" class="w-full p-2 border-2 border-sky-200 rounded-xl font-bold bg-white focus:outline-none text-base">
                            <option value="">-- Chọn vế câu thích hợp --</option>
                            <option value="b1">thành phố đã trở thành hình mẫu đô thị sinh thái được thế giới vô cùng ngưỡng mộ.</option>
                            <option value="b2">khí thải các-bô-níc vẫn còn bay lơ lửng rất nhiều.</option>
                            <option value="b3">ở đây khí hậu sa mạc vô cùng mát mẻ dễ chịu.</option>
                        </select>
                    </div>

                    <!-- Câu c -->
                    <div class="p-4 bg-sky-50/30 rounded-2xl border border-sky-100 space-y-2">
                        <p class="font-bold text-sky-950 text-base">c. Ở Mát-xđa, chính quyền khuyến khích người dân đi bộ, ...</p>
                        <select id="sel-235-comp-c" class="w-full p-2 border-2 border-sky-200 rounded-xl font-bold bg-white focus:outline-none text-base">
                            <option value="">-- Chọn vế câu thích hợp --</option>
                            <option value="c1">khuyên mọi người đi xe ô tô cá nhân chạy bằng xăng.</option>
                            <option value="c2">đi xe đạp hoặc sử dụng các phương tiện giao thông công cộng chạy bằng điện năng lượng mặt trời để bảo vệ môi trường.</option>
                            <option value="c3">ở nhà không ra đường để tránh nóng.</option>
                        </select>
                    </div>
                </div>

                <div class="flex items-center justify-between pt-4">
                    <button onclick="window.resetComp235()" class="px-6 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300">LÀM LẠI</button>
                    <button id="btn-check-comp" onclick="window.checkComp235()" class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl font-black text-2xl md:text-3xl shadow-lg transition-all active:scale-95 flex items-center justify-center">E</button>
                </div>
                <div id="fb-comp-235" class="hidden p-4 rounded-xl font-bold text-lg mt-4 animate-in fade-in"></div>
            </div>
        </section>

        <!-- 📚 Luyện tập ngữ pháp - Bài 3: Phân loại tên riêng nước ngoài (Tương tác) -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-orange-100" id="ex-235-name">
            <div class="space-y-6">
                <div class="flex items-center gap-4">
                    <span class="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-black">5</span>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800">Luyện tập 3: Phân loại cách viết tên riêng nước ngoài</h3>
                </div>
                <p class="text-gray-600 font-bold text-lg">Phân loại các tên riêng nước ngoài xuất hiện trong bài đọc vào đúng nhóm quy tắc viết hoa:</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- Anh -->
                    <div class="p-4 bg-orange-50/30 rounded-2xl border border-orange-100 flex items-center justify-between gap-4">
                        <span class="font-bold text-orange-950 text-base">🇺🇳 Anh</span>
                        <select id="sel-name-anh" class="p-2 border border-orange-350 rounded-xl font-bold bg-white focus:outline-none text-base">
                            <option value="">-- Chọn nhóm --</option>
                            <option value="giong_vn">Cách viết giống tên riêng Việt Nam</option>
                            <option value="khac_vn">Cách viết khác tên riêng Việt Nam</option>
                        </select>
                    </div>

                    <!-- Mát-xđa -->
                    <div class="p-4 bg-orange-50/30 rounded-2xl border border-orange-100 flex items-center justify-between gap-4">
                        <span class="font-bold text-orange-950 text-base">🏙️ Mát-xđa</span>
                        <select id="sel-name-masdar" class="p-2 border border-orange-350 rounded-xl font-bold bg-white focus:outline-none text-base">
                            <option value="">-- Chọn nhóm --</option>
                            <option value="giong_vn">Cách viết giống tên riêng Việt Nam</option>
                            <option value="khac_vn">Cách viết khác tên riêng Việt Nam</option>
                        </select>
                    </div>

                    <!-- Bồ Đào Nha -->
                    <div class="p-4 bg-orange-50/30 rounded-2xl border border-orange-100 flex items-center justify-between gap-4">
                        <span class="font-bold text-orange-950 text-base">🇺🇳 Bồ Đào Nha</span>
                        <select id="sel-name-portugal" class="p-2 border border-orange-350 rounded-xl font-bold bg-white focus:outline-none text-base">
                            <option value="">-- Chọn nhóm --</option>
                            <option value="giong_vn">Cách viết giống tên riêng Việt Nam</option>
                            <option value="khac_vn">Cách viết khác tên riêng Việt Nam</option>
                        </select>
                    </div>

                    <!-- UAE -->
                    <div class="p-4 bg-orange-50/30 rounded-2xl border border-orange-100 flex items-center justify-between gap-4">
                        <span class="font-bold text-orange-950 text-base">🇦🇪 UAE</span>
                        <select id="sel-name-uae" class="p-2 border border-orange-350 rounded-xl font-bold bg-white focus:outline-none text-base">
                            <option value="">-- Chọn nhóm --</option>
                            <option value="giong_vn">Cách viết giống tên riêng Việt Nam</option>
                            <option value="khac_vn">Cách viết khác tên riêng Việt Nam</option>
                        </select>
                    </div>
                </div>

                <div class="flex items-center justify-between pt-6">
                    <button onclick="window.resetName235()" class="px-6 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300">LÀM LẠI</button>
                    <button id="btn-check-name" onclick="window.checkName235()" class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl font-black text-2xl md:text-3xl shadow-lg transition-all active:scale-95 flex items-center justify-center">E</button>
                </div>
                <div id="fb-name-235" class="hidden p-4 rounded-xl font-bold text-lg mt-4 animate-in fade-in"></div>
            </div>
        </section>
    </div>
    `,
    "quizPool": [
        {
            "question": "Thành phố thông minh Mát-xđa thuộc quốc gia nào?",
            "options": [
                "Ả Rập Xê Út",
                "Các Tiểu vương quốc Ả Rập Thống nhất (UAE)",
                "Ca-ta",
                "Cộng hòa Séc"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Dự án thành phố thông minh Mát-xđa được khởi công vào năm nào?",
            "options": [
                "Năm 2000",
                "Năm 2005",
                "Năm 2008",
                "Năm 2012"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Mục đích xây dựng dự án thành phố thông minh Mát-xđa là gì?",
            "options": [
                "Để biến Mát-xđa thành trung tâm kinh tế lớn nhất Vịnh Ba Tư",
                "Biến Mát-xđa trở thành thành phố không các-bô-níc đầu tiên trên thế giới",
                "Để tạo nên một khu nghỉ dưỡng cao cấp dành cho du khách phương Tây",
                "Để thử nghiệm công nghệ xây dựng nhà chọc trời chịu động đất"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Năng lượng mặt trời được tích trữ và cung cấp cho thành phố nhờ bộ phận thiết kế nào?",
            "options": [
                "Những tấm gương phản chiếu đặt quanh sa mạc",
                "Những chiếc ô khổng lồ hình hoa hướng dương",
                "Các tháp gió cao chọc trời ở trung tâm",
                "Mái ngói bằng bê tông cốt thép của các tòa nhà"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Để giảm bớt cái nóng gay gắt của sa mạc, các tòa nhà ở Mát-xđa được thiết kế như thế nào?",
            "options": [
                "Xây dựng thật cao và cách xa nhau để hứng gió sa mạc",
                "Thiết kế chụm lại với nhau, có lối đi nhỏ ở giữa giúp lưu thông không khí",
                "Được sơn phủ một màu đen đặc biệt để hấp thụ nhiệt lượng",
                "Xây dựng ngầm hoàn toàn dưới lòng đất để tránh nắng mặt trời"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Ngoài các tòa nhà chụm lại, công trình nào giúp giảm đáng kể nhiệt độ thành phố Mát-xđa?",
            "options": [
                "Một tháp gió lấy không khí mát trên cao mang vào thành phố",
                "Hệ thống hồ nước nhân tạo tuần hoàn quanh ốc đảo",
                "Các nhà máy sản xuất băng tuyết nhân tạo khổng lồ",
                "Một lớp kính che phủ toàn bộ bầu trời thành phố"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Quy tắc viết hoa tên riêng nước ngoài 'Anh, Bồ Đào Nha' là gì?",
            "options": [
                "Viết hoa chữ cái đầu của mỗi bộ phận, giữa các tiếng có gạch nối",
                "Viết hoa chữ cái đầu của mỗi tiếng giống như viết tên riêng Việt Nam",
                "Chỉ viết hoa chữ cái đầu tiên của từ đầu tiên trong cụm",
                "Không cần viết hoa vì đây là tên các quốc gia lâu đời"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Quy tắc viết hoa tên riêng nước ngoài 'Mát-xđa' là gì?",
            "options": [
                "Viết hoa toàn bộ các chữ cái trong tên riêng",
                "Viết hoa chữ cái đầu của bộ phận tạo thành, giữa các tiếng có gạch nối",
                "Viết hoa chữ cái đầu của mỗi tiếng giống tiếng Việt",
                "Viết thường hoàn toàn tên riêng đó"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tên riêng nước ngoài nào sau đây viết tắt tất cả các chữ cái?",
            "options": [
                "Mát-xđa",
                "UAE",
                "Bồ Đào Nha",
                "Ả Rập"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong đoạn 3, từ ngữ nối nào được dùng ở đầu câu 2 để thực hiện liên kết câu?",
            "options": [
                "Để đối phó với",
                "Ngoài ra",
                "nơi đây",
                "so với"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'nơi đây' ở câu 2 đoạn 3 thực hiện liên kết bằng phép thế cho từ nào ở câu trước?",
            "options": [
                "sa mạc",
                "Mát-xđa",
                "tháp gió",
                "thành phố"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Mát-xđa đã truyền cảm hứng xây dựng đô thị sinh thái cho những quốc gia nào?",
            "options": [
                "Mỹ và Nhật Bản",
                "Anh và Bồ Đào Nha",
                "Pháp và Đức",
                "Việt Nam và Singapore"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nghĩa của từ 'ốc đảo' trong bài học là gì?",
            "options": [
                "Khoảng đất rộng lớn có nhiều tuyết bao phủ giữa biển khơi",
                "Khoảng đất có nguồn nước và cây cối tốt tươi nằm giữa sa mạc",
                "Một hòn đảo nhân tạo nổi tiếng ở Vịnh Ba Tư",
                "Một ngọn núi đá vôi có nhiều hang động cổ xưa"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Chính quyền thành phố Mát-xđa khuyến khích người dân sử dụng phương tiện gì?",
            "options": [
                "Xe máy chạy bằng xăng dầu truyền thống",
                "Đi bộ, xe đạp, phương tiện công cộng chạy bằng điện mặt trời",
                "Tàu điện ngầm cao tốc chạy bằng than đá",
                "Các loại ô tô thể thao hạng sang nhập khẩu"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Thông điệp sâu sắc nhất của bài đọc 'Thành phố thông minh Mát-xđa' là gì?",
            "options": [
                "Sa mạc là nơi có tài nguyên thiên nhiên phong phú nhất hành tinh",
                "Việc ứng dụng công nghệ xanh giúp đối phó hiệu quả với biến đổi khí hậu",
                "Du lịch ốc đảo mang lại nguồn doanh thu khổng lồ",
                "Phương tiện chạy bằng năng lượng mặt trời chỉ dùng được ban ngày"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// Đăng ký các hàm bổ trợ tương tác toàn cục
window.checkWarmup235 = function() {
    const response = document.getElementById('warmup-response-235').value.trim();
    const fb = document.getElementById('fb-warmup-235');
    fb.classList.remove('hidden');
    if (response.length < 10) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-2";
        fb.innerHTML = "⚠️ Em hãy viết một câu trả lời chi tiết hơn để chia sẻ cảm nhận của mình nhé!";
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-2";
        fb.innerHTML = "🌟 Tuyệt vời! Cảm ơn em đã chia sẻ suy nghĩ. Việc sống trong một thành phố sinh thái nhiều cây xanh giúp bảo vệ sức khỏe và môi trường sống của chính chúng ta đấy.";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    }
};

window.checkLink235 = function() {
    const noi = document.getElementById('sel-235-link-noi').value;
    const the = document.getElementById('sel-235-link-the').value;
    const fb = document.getElementById('fb-link-235');
    fb.classList.remove('hidden');

    if (!noi || !the) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em hãy lựa chọn đầy đủ phương án liên kết câu cho cả 2 từ nhé!";
        return;
    }

    if (noi === 'ngoaira' && the === 'noiday') {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
        fb.innerHTML = "🌟 Chính xác! Từ nối liên kết là 'Ngoài ra' và từ thay thế phép thế là 'nơi đây' (thay thế cho Mát-xđa ở câu trước).";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
        if (typeof window.submitMathLesson === 'function') {
            window.submitMathLesson("Đọc Tiết 235: Phép liên kết đoạn văn", 100, "ex-235-link", 1, 1, 1);
        }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-800 border border-red-200 mt-4";
        fb.innerHTML = "❌ Chưa chính xác rồi. Em hãy đọc kĩ lại đoạn văn và chọn lại từ nối/thay thế tương ứng nhé!";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

window.resetLink235 = function() {
    document.getElementById('sel-235-link-noi').value = "";
    document.getElementById('sel-235-link-the').value = "";
    const fb = document.getElementById('fb-link-235');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};

window.checkComp235 = function() {
    const a = document.getElementById('sel-235-comp-a').value;
    const b = document.getElementById('sel-235-comp-b').value;
    const c = document.getElementById('sel-235-comp-c').value;
    const fb = document.getElementById('fb-comp-235');
    fb.classList.remove('hidden');

    if (!a || !b || !c) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em hãy chọn vế câu ghép đầy đủ cho cả 3 câu nhé!";
        return;
    }

    if (a === 'a2' && b === 'b1' && c === 'c2') {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
        fb.innerHTML = "🌟 Tuyệt vời! Cả 3 câu ghép đã được hoàn thiện hoàn toàn chính xác và logic theo nội dung bài học.";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
        if (typeof window.submitMathLesson === 'function') {
            window.submitMathLesson("Đọc Tiết 235: Hoàn thiện câu ghép Mát-xđa", 100, "ex-235-comp", 1, 1, 1);
        }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-800 border border-red-200 mt-4";
        fb.innerHTML = "❌ Còn câu ghép ghép nối chưa hợp lý rồi. Em hãy đọc kĩ lại chức năng của chiếc ô, tháp gió để chọn lại nhé!";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

window.resetComp235 = function() {
    document.getElementById('sel-235-comp-a').value = "";
    document.getElementById('sel-235-comp-b').value = "";
    document.getElementById('sel-235-comp-c').value = "";
    const fb = document.getElementById('fb-comp-235');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};

window.checkName235 = function() {
    const anh = document.getElementById('sel-name-anh').value; // giong_vn
    const masdar = document.getElementById('sel-name-masdar').value; // khac_vn
    const portugal = document.getElementById('sel-name-portugal').value; // giong_vn
    const uae = document.getElementById('sel-name-uae').value; // khac_vn
    const fb = document.getElementById('fb-name-235');
    fb.classList.remove('hidden');

    if (!anh || !masdar || !portugal || !uae) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em hãy phân loại đầy đủ quy tắc viết cho cả 4 địa danh nhé!";
        return;
    }

    if (anh === 'giong_vn' && masdar === 'khac_vn' && portugal === 'giong_vn' && uae === 'khac_vn') {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
        fb.innerHTML = "🌟 Chúc mừng em! Em đã phân loại chính xác quy tắc viết hoa tên riêng nước ngoài. Thật xuất sắc!";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
        if (typeof window.submitMathLesson === 'function') {
            window.submitMathLesson("Đọc Tiết 235: Phân loại tên riêng nước ngoài", 100, "ex-235-name", 1, 1, 1);
        }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-800 border border-red-200 mt-4";
        fb.innerHTML = "❌ Còn từ phân loại chưa chính xác. Hãy nhớ tên có gạch nối (-) hoặc viết tắt bằng chữ in hoa là nhóm khác tiếng Việt nhé!";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

window.resetName235 = function() {
    document.getElementById('sel-name-anh').value = "";
    document.getElementById('sel-name-masdar').value = "";
    document.getElementById('sel-name-portugal').value = "";
    document.getElementById('sel-name-uae').value = "";
    const fb = document.getElementById('fb-name-235');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};

// Đăng ký bài học toàn cục
window.lesson235 = lesson235;
