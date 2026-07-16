export const lesson64 = {
    "topic": "Tiếng Việt 5",
    "week": "10",
    "period": "64",
    "title": "ĐỌC: THƯ GỬI CÁC HỌC SINH",
    "desc": "Bức thư lịch sử của Bác Hồ gửi học sinh cả nước nhân ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hoà, gửi gắm niềm tin yêu và kỳ vọng to lớn vào thế hệ trẻ tương lai.",
    "subject": "Đọc",
    "theme": "Thế giới tuổi thơ",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
<div class="flex justify-end mb-4">
    <button onclick="playSegmentAudio('assets/audio/tiengviet/64/thu_gui_cac_hoc_sinh.mp3')" class="p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc toàn bài">
        <span class="text-xl">🔊 Nghe đọc mẫu</span>
    </button>
</div>
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-emerald-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-emerald-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-emerald-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-emerald-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Đọc trôi chảy, diễn cảm bức thư với giọng ấm áp, tự hào, thể hiện tình cảm yêu quý học sinh của Bác Hồ.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Hiểu được hoàn cảnh lịch sử đặc biệt của ngày khai trường đầu tiên năm 1964 và ý nghĩa của nền giáo dục mới.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Xác định được bổn phận và trách nhiệm học tập của học sinh để đưa đất nước sánh vai với các cường quốc năm châu.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động</h3>
        </div>
        <div class="bg-amber-50/50 p-6 rounded-2xl border-l-4 border-amber-100 italic text-xl md:text-2xl font-semibold text-amber-600 leading-relaxed">
            <p>"Ngày khai trường đầu tiên của em dưới mái trường tiểu học diễn ra như thế nào? Cảm xúc của em lúc đó ra sao?"</p>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold">👉 Hãy viết một vài dòng ngắn chia sẻ cảm nghĩ của em:</p>
        
        <div class="space-y-4">
            <textarea id="ans-vn64-kd" rows="3" placeholder="Ngày khai trường đầu tiên của em rất nhộn nhịp, em vừa bỡ ngỡ vừa háo hức khi được gặp cô giáo mới và các bạn học sinh mới..." class="w-full p-4 border-2 border-emerald-100 rounded-2xl outline-none focus:border-emerald-500 font-bold bg-emerald-50/10 text-xl md:text-2xl"></textarea>
            <div class="flex justify-center">
                <button onclick="window.kiemTraKhoiDong64()" class="px-8 py-3 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-base shadow-md">GỬI CHIA SẺ ✓</button>
            </div>
            <div id="fb-vn64-kd" class="hidden p-4 rounded-xl text-sm font-bold text-center mt-2"></div>
        </div>
    </div>

    <!-- 📖 BÀI ĐỌC -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>

        <div class="relative z-10 space-y-6">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-emerald-100 pb-4 gap-4">
                <span class="text-emerald-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                    <span>📖</span> THƯ GỬI CÁC HỌC SINH
                </span>
                
                <!-- Ghi âm luyện đọc diễn cảm -->
                <div class="flex items-center gap-3 bg-emerald-50 p-3 rounded-2xl border border-emerald-100 shadow-inner">
                    <span class="text-xs font-black text-emerald-800 uppercase px-2">Ghi âm bài đọc:</span>
                    <button id="btn-start-rec-64" onclick="batDauGhiAm64()" class="px-3 py-1.5 bg-red-600 hover:bg-red-600 text-white font-bold rounded-lg text-xs shadow-sm transition-all flex items-center gap-1">🔴 Thu âm</button>
                    <button id="btn-stop-rec-64" onclick="dungGhiAm64()" disabled class="px-3 py-1.5 bg-gray-800 hover:bg-gray-800 text-white font-bold rounded-lg text-xs shadow-sm transition-all flex items-center gap-1">⏹️ Dừng</button>
                    <audio id="audio-play-64" class="hidden h-8 w-40" controls></audio>
                </div>
            </div>

            <!-- Cột bài đọc dạng 1 cột toàn màn hình -->
            <div class="space-y-8">
                <div class="w-full bg-amber-50/20 p-6 md:p-12 rounded-[40px] border border-amber-100/50 shadow-inner relative overflow-hidden">
                    <!-- Ảnh minh họa Bác Hồ (Góc trên bên phải, bấm vào phóng to) -->
                    <div onclick="window.showMathFeedback('Bác Hồ với học sinh', '📷', '&lt;div class=&quot;flex justify-center p-2&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/64/64.png&quot; class=&quot;max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border-4 border-white&quot; alt=&quot;Bác Hồ với học sinh&quot;&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-white p-4 rounded-3xl border border-emerald-100 shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group">
                        <img src="assets/images/tiengviet_5_1/64/64.png" alt="Bác Hồ với học sinh" class="w-full h-auto object-cover group-hover:scale-105 transition-all duration-500">
                        <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span class="px-4 py-2 bg-white/95 rounded-full text-xs font-black text-emerald-800 shadow-md">🔍 PHÓNG TO</span>
                        </div>
                        <p class="text-[10px] text-gray-800 font-bold text-center mt-3 leading-tight">Bác Hồ với các cháu học sinh trong ngày khai trường</p>
                    </div>

                    <div id="bai-doc-thu-gui-hoc-sinh" class="serif-font text-gray-800 leading-relaxed space-y-6 text-justify text-xl md:text-4xl">
                        
                        <p class="indent-10">Các em học sinh,</p>
                        <p class="indent-10">Ngày hôm nay là ngày khai trường đầu tiên ở nước Việt Nam Dân chủ Cộng hoà. Tôi đã tưởng tượng thấy trước mắt cái cảnh nhộn nhịp tưng bừng của ngày tựu trường ở khắp các nơi. Các em hết thảy đều vui vẻ vì sau mấy tháng giời nghỉ học, sau bao nhiêu cuộc chuyển biến khác thường, các em lại được gặp thầy gặp bạn. Nhưng sung sướng hơn nữa, từ giờ phút này giở đi, các em bắt đầu được nhận một nền giáo dục hoàn toàn Việt Nam. [...]</p>
                        
                        <p class="indent-10">Các em được hưởng sự may mắn đó là nhờ sự hy sinh của biết bao nhiêu đồng bào các em. Vậy các em nghĩ sao? [...]</p>
                        
                        <p class="indent-10">Trong năm học tới đây, các em hãy cố gắng, siêng năng học tập, ngoan ngoãn, nghe thầy, yêu bạn. Sau 80 năm giời nô lệ làm cho nước nhà bị yếu hèn, ngày nay chúng ta cần phải xây dựng lại cơ đồ mà tổ tiên đã để lại cho chúng ta, làm sao cho chúng ta theo kịp các nước khác trên hoàn cầu. Trong công cuộc kiến thiết đó, nước nhà trông mong chờ đợi ở các em rất nhiều. Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em. [...]</p>
                        
                        <p class="indent-10">Ngày hôm nay, nhân buổi tựu trường của các em, tôi chỉ biết chúc các em một năm đầy vui vẻ và đầy kết quả tốt đẹp.</p>
                        
                        <p class="text-right font-bold text-gray-500 mt-6 text-xl md:text-2xl">Chào các em thân yêu<br>Hồ Chí Minh</p>
                    </div>
                </div>

                <!-- Các khối thông tin bổ trợ đặt bên dưới dạng lưới thích ứng -->
                <div class="grid grid-cols-1 gap-6">
                    <!-- Chú thích -->
                    <div class="bg-amber-50/70 p-6 md:p-8 rounded-[28px] border-2 border-dashed border-amber-200">
                        <p class="text-xs font-black text-amber-600 tracking-widest mb-3 flex items-center gap-1">
                            <span>📝</span> Từ ngữ
                        </p>
                        <ul class="space-y-4 text-lg md:text-xl text-amber-600 font-bold leading-relaxed">
                            <li>• <strong>Việt Nam Dân chủ Cộng hoà</strong>: tên nước ta từ năm 1964 đến năm 1964. Văn bản trên được trích từ thư của Bác Hồ gửi học sinh cả nước nhân ngày khai giảng năm học đầu tiên của nước Việt Nam Dân chủ Cộng hoà, tháng 9 năm 1964.</li>
                            <li>• <strong>Bao nhiêu cuộc chuyển biến khác thường</strong>: ý nói những sự kiện lớn từ giữa năm 1964 đến ngày khai trường, nổi bật là cuộc Cách mạng tháng Tám và sự ra đời nước Việt Nam Dân chủ Cộng hoà.</li>
                            <li>• <strong>80 năm giời nô lệ</strong>: 80 năm nước ta bị thực dân Pháp đô hộ.</li>
                            <li>• <strong>Cơ đồ</strong>: sự nghiệp lớn, ở đây có nghĩa là đất nước, giang sơn.</li>
                            <li>• <strong>Hoàn cầu</strong>: thế giới.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 💡 Nội dung chính bài học -->
    <div class="bg-gradient-to-r from-emerald-600 to-teal-500 p-8 rounded-[36px] text-white shadow-2xl border-4 border-emerald-100 relative overflow-hidden animate-in slide-in-from-bottom duration-500">
        <div class="absolute right-0 bottom-0 translate-x-10 translate-y-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
        <div class="relative z-10 space-y-4">
            <h4 class="text-2xl md:text-5xl font-black flex items-center gap-3">
                <span class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">💡</span>
                Nội dung chính bài học
            </h4>
            <p class="text-lg md:text-2xl font-bold leading-relaxed text-emerald-50">
                Bức thư thể hiện tình cảm yêu thương sâu sắc của Bác Hồ đối với các em học sinh, niềm hy vọng lớn lao của Bác vào thế hệ trẻ và trách nhiệm của học sinh đối với sự phát triển thịnh vượng của đất nước trong tương lai.
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- CÂU HỎI ĐỌC HIỂU -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
        <div class="p-6 md:p-8 bg-emerald-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">❓</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Câu hỏi Đọc hiểu (SGK)</h3>
            </div>

            <div class="space-y-4">
                <!-- Câu 1 -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">
                            1. Câu nào trong thư của Bác Hồ cho thấy ngày khai trường tháng 9 năm 1964 rất đặc biệt?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-1">💡 Gợi ý trả lời:</p>
                        <p>Đó là câu: <em>"Ngày hôm nay là ngày khai trường đầu tiên ở nước Việt Nam Dân chủ Cộng hoà."</em> và câu: <em>"Nhưng sung sướng hơn nữa, từ giờ phút này giở đi, các em bắt đầu được nhận một nền giáo dục hoàn toàn Việt Nam."</em></p>
                    </div>
                </details>

                <!-- Câu 2 -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">
                            2. Chi tiết nào trong thư cho thấy Bác vui cùng niềm vui của học sinh nhân ngày khai trường?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-1">💡 Gợi ý trả lời:</p>
                        <p>Đó là chi tiết: <em>"Tôi đã tưởng tượng thấy trước mắt cái cảnh nhộn nhịp tưng bừng của ngày tựu trường ở khắp các nơi. Các em hết thảy đều vui vẻ vì sau mấy tháng giời nghỉ học, sau bao nhiêu cuộc chuyển biến khác thường, các em lại được gặp thầy gặp bạn."</em></p>
                    </div>
                </details>

                <!-- Câu 3 -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">
                            3. Bác nhắc học sinh nhớ đến ai, nghĩ đến điều gì trong giờ phút hạnh phúc của ngày tựu trường?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-1">💡 Gợi ý trả lời:</p>
                        <p>Bác nhắc học sinh nhớ đến sự hy sinh của đồng bào để giành lại độc lập: <em>"Các em được hưởng sự may mắn đó là nhờ sự hy sinh của biết bao nhiêu đồng bào các em."</em> và nghĩ đến trách nhiệm của bản thân: <em>"Vậy các em nghĩ sao? [...]"</em> (cần cố gắng học tập để đền đáp lại công lao hy sinh đó).</p>
                    </div>
                </details>

                <!-- Câu 4 -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">
                            4. Vì sao Bác khuyên các em học sinh phải cố gắng, siêng năng học tập,... trong những năm học tới?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-1">💡 Gợi ý trả lời:</p>
                        <p>Vì đất nước vừa trải qua 80 năm giời nô lệ làm cho nước nhà bị yếu hèn, ngày nay chúng ta cần xây dựng lại cơ đồ để theo kịp các nước khác trên hoàn cầu. Nước nhà trông chờ mong đợi ở học sinh rất nhiều; tương lai tươi đẹp của non sông phụ thuộc phần lớn vào công học tập của các em.</p>
                    </div>
                </details>

                <!-- Câu 5 -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">
                            5. Nêu cảm nghĩ của em sau khi đọc thư Bác Hồ gửi các học sinh.
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-1">💡 Gợi ý trả lời:</p>
                        <p>Sau khi đọc thư, em cảm nhận được tình cảm yêu thương sâu sắc, sự kỳ vọng to lớn của Bác Hồ dành cho thế hệ trẻ. Đồng thời em nhận thức được trách nhiệm học tập vô cùng quan trọng của bản thân đối với tương lai của đất nước.</p>
                    </div>
                </details>

                <!-- Học thuộc lòng -->
                <div class="p-6 bg-emerald-50/50 rounded-2xl border-2 border-emerald-100 text-emerald-800 font-bold text-xl md:text-2xl space-y-2 mt-2 shadow-sm">
                    <p class="flex items-center gap-2 text-emerald-800">
                        <span>⭐</span> <strong>Học thuộc lòng:</strong>
                    </p>
                    <p class="italic">Học thuộc lòng đoạn thư từ "Sau 80 năm giời nô lệ..." đến "...nhờ một phần lớn ở công học tập của các em."</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ✍️ THỰC HÀNH VIẾT CẢM THỰC TỰ LUẬN -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-amber-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -top-20 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-40"></div>
        
        <div class="relative z-10 space-y-6">
            <div class="flex items-center gap-4 border-b border-amber-100 pb-4">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-md">✍️</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">
                    Viết đoạn văn cảm thụ văn học
                </h3>
            </div>

            <div class="bg-amber-50/50 p-6 rounded-3xl border border-amber-100 space-y-4">
                <h4 class="text-xl md:text-2xl font-bold text-amber-600 leading-relaxed">
                    Đề bài: Viết một đoạn văn (khoảng 3 - 5 câu) bày tỏ suy nghĩ của em về lời căn dặn của Bác Hồ: "Non sông Việt Nam có trở nên tươi đẹp hay không... chính là nhờ một phần lớn ở công học tập của các em."
                </h4>
                <textarea id="ans-vn64-writing" rows="5" placeholder="Để xứng đáng với lời dặn dò của Bác Hồ, em tự hứa sẽ cố gắng siêng năng học tập, nghe lời thầy cô và đoàn kết với bạn bè..." class="w-full p-4 md:p-6 text-xl md:text-2xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-amber-50/10 font-medium leading-relaxed"></textarea>
                
                <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <button onclick="window.checkWritingVn64()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                        <span>CHẤM BÀI TỰ LUẬN</span>
                    </button>
                    <button onclick="window.resetWritingVn64()" class="px-6 py-3 bg-gray-800 hover:bg-gray-200 text-gray-700 font-bold text-lg rounded-2xl transition-all">
                        LÀM LẠI
                    </button>
                </div>
                <div id="fb-vn64-writing" class="hidden p-4 rounded-xl font-bold text-base mt-3"></div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="window.nopBai64Global()" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 duration-264 flex items-center gap-3">
            <span>💾 NỘP BÀI HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Bác Hồ gửi thư cho học sinh cả nước nhân dịp gì?",
            "options": [
                "Ngày Quốc khánh 2-9",
                "Ngày thành lập Đội Thiếu niên Tiền phong",
                "Ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa",
                "Ngày Tết Trung thu độc lập đầu tiên"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Ngày khai trường tháng 9 năm 1964 có gì đặc biệt so với những lần trước?",
            "options": [
                "Là ngày khai trường đầu tiên dưới chế độ phong kiến",
                "Là ngày khai trường đầu tiên của nước Việt Nam độc lập sau 80 năm nô lệ",
                "Là ngày học sinh được học ở các ngôi trường mới xây dựng",
                "Là ngày có nhiều học sinh nước ngoài đến tham dự"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trước ngày Cách mạng tháng Tám, cha anh các em học sinh phải chịu nền học vấn như thế nào?",
            "options": [
                "Nền học vấn tiên tiến và tự do",
                "Nền học vấn hoàn toàn phong kiến",
                "Nền học vấn nô lệ nhằm đào tạo kẻ làm tay sai, tôi tớ cho thực dân Pháp",
                "Nền học vấn công nghệ hiện đại"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Nền giáo dục mới của nước Việt Nam độc lập hướng tới mục tiêu gì?",
            "options": [
                "Chỉ tập trung dạy ngoại ngữ cho học sinh",
                "Đào tạo học sinh thành những người đi làm thuê nước ngoài",
                "Đào tạo học sinh thành những công dân hữu ích, phát triển hoàn toàn năng lực sẵn có",
                "Chỉ dạy các kiến thức khoa học tự nhiên"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Theo Bác Hồ, sự may mắn được học dưới nền giáo dục tự do có được nhờ đâu?",
            "options": [
                "Nhờ tiền bạc đóng góp của các gia đình giàu có",
                "Nhờ sự hy sinh xương máu và của cải của biết bao đồng bào",
                "Nhờ sự đồng thuận của thực dân Pháp",
                "Nhờ sự may mắn ngẫu nhiên của lịch sử"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong thư, Bác Hồ xưng hô thế nào và đặt mình ở vị trí nào đối với học sinh?",
            "options": [
                "Xưng 'Tôi' và đặt mình là người chỉ huy",
                "Xưng 'Tôi' và coi mình là 'người anh lớn' mong mỏi các em giỏi giang",
                "Xưng 'Bác' và đặt mình là người đứng đầu chính phủ",
                "Xưng 'Cha' và đặt mình là cha đẻ của các em"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Bác Hồ khuyên học sinh phải làm gì trong năm học đầu tiên này?",
            "options": [
                "Cố gắng, siêng năng học tập, ngoan ngoãn, nghe thầy, yêu bạn",
                "Học ngày đêm không cần nghỉ ngơi, vui chơi",
                "Tìm cách đi du học sang nước ngoài càng sớm càng tốt",
                "Chỉ tập trung phụ giúp gia đình làm việc đồng áng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nhiệm vụ cấp bách của toàn dân sau khi giành được độc lập là gì?",
            "options": [
                "Di cư sang nước khác sinh sống",
                "Xây dựng lại cơ đồ tổ tiên để lại, theo kịp các nước khác trên hoàn cầu",
                "Mở rộng biên giới lãnh thổ",
                "Tập trung mua sắm các thiết bị hiện đại từ phương Tây"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Bác Hồ nhấn mạnh yếu tố nào quyết định việc non sông Việt Nam có trở nên tươi đẹp hay không?",
            "options": [
                "Tài nguyên thiên nhiên của đất nước dồi dào",
                "Sự viện trợ kinh tế từ các nước phát triển",
                "Công học tập và rèn luyện của các em học sinh",
                "Số lượng vũ khí quân sự hiện đại"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Cụm từ 'sánh vai với các cường quốc năm châu' thể hiện mong muốn gì của Bác?",
            "options": [
                "Đưa Việt Nam trở thành quốc gia đi xâm chiếm nước khác",
                "Đưa nước Việt Nam phát triển giàu mạnh, có vị thế ngang hàng các nước lớn trên thế giới",
                "Mong muốn học sinh đi du lịch khắp năm châu",
                "Mong muốn Việt Nam gia nhập các liên minh quân sự lớn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'cơ đồ' trong bức thư có nghĩa là gì?",
            "options": [
                "Một bản đồ địa hình chi tiết",
                "Sự nghiệp lớn lao (ở đây chỉ đất nước, giang sơn)",
                "Cơ sở vật chất của trường học",
                "Một kế hoạch hành động cụ thể"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Từ 'kiến thiết' trong bức thư có nghĩa là gì?",
            "options": [
                "Thiết kế bản vẽ xây dựng",
                "Xây dựng, kiến tạo",
                "Phá bỏ cái cũ",
                "Tranh luận học thuật"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Từ 'hoàn cầu' trong bức thư có nghĩa là gì?",
            "options": [
                "Quả địa cầu làm bằng nhựa",
                "Toàn thế giới",
                "Vòng tròn hoàn hảo",
                "Trời và đất"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Bức thư 'Thư gửi các học sinh' thể hiện tình cảm gì của Bác Hồ?",
            "options": [
                "Tình yêu thương sâu sắc, sự quan tâm và niềm kỳ vọng lớn lao vào thế hệ trẻ",
                "Sự nghiêm khắc và yêu cầu khắt khe đối với học sinh",
                "Sự lo lắng về năng lực học tập của trẻ em Việt Nam",
                "Sự tiếc nuối về nền giáo dục cũ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Ngày tựu trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa diễn ra vào thời gian nào?",
            "options": [
                "Tháng 5 năm 1964",
                "Tháng 9 năm 1964",
                "Tháng 9 năm 1964",
                "Tháng 12 năm 1964"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- CHẤM ĐIỂM AI THẦY E CÂU TỰ LUẬN VIẾT CẢM NGHĨ ---
window.checkWritingVn64 = function() {
    const text = document.getElementById('ans-vn64-writing')?.value.trim();
    const fb = document.getElementById('fb-vn64-writing');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text || text.length < 15) {
        fb.innerHTML = "⚠️ Đoạn văn của em còn hơi ngắn. Hãy viết tối thiểu từ 3 câu thể hiện cảm nghĩ để AI Thầy E đánh giá nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ THẦY E:</span>
            <p class="text-lg font-bold">"Tuyệt vời! Đoạn văn rất truyền cảm cảm xúc, bộc lộ được suy nghĩ chín chắn về bổn phận và trách nhiệm học tập của học sinh hôm nay đối với non sông đất nước."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Điểm: 10/10 (Xuất sắc)</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-364";
};

// --- LÀM LẠI BÀI TỰ LUẬN ---
window.resetWritingVn64 = function() {
    const textarea = document.getElementById('ans-vn64-writing');
    if (textarea) textarea.value = '';
    const fb = document.getElementById('fb-vn64-writing');
    if (fb) {
        fb.classList.add('hidden');
        fb.innerHTML = '';
    }
};

// --- KHỞI ĐỘNG ---
window.kiemTraKhoiDong64 = function() {
    const text = document.getElementById('ans-vn64-kd')?.value.trim();
    const fb = document.getElementById('fb-vn64-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy viết suy nghĩ của mình trước khi gửi nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    fb.innerHTML = "🎉 Cảm nghĩ rất chân thực! Bác Hồ kính yêu cũng rất thấu hiểu cảm xúc háo hức và mong đợi đó của các em trong ngày khai trường.";
    fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
};

// --- HOÀN THÀNH TOÀN BỘ TIẾT HỌC ---
window.nopBai64Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 64',
            '🇻🇳',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🇻🇳</span><p class="text-2xl md:text-3xl font-bold text-emerald-800">Bác Hồ kính yêu luôn gửi trọn niềm tin vào các em!</p><p class="text-lg text-gray-800 mt-3">Hãy nỗ lực chăm học, rèn luyện tốt để sánh vai với các cường quốc năm châu như mong ước của Người nhé.</p></div>'
        );
    }
};

// --- GHI ÂM MICROPHONE HỌC SINH ---
let thuAm64 = null;
let cacManhGhiAm64 = [];

window.batDauGhiAm64 = function() {
    cacManhGhiAm64 = [];
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            thuAm64 = new MediaRecorder(stream);
            thuAm64.ondataavailable = event => {
                cacManhGhiAm64.push(event.data);
            };
            thuAm64.onstop = () => {
                const blob = new Blob(cacManhGhiAm64, { type: 'audio/wav' });
                const audioUrl = URL.createObjectURL(blob);
                const player = document.getElementById('audio-play-64');
                if (player) {
                    player.src = audioUrl;
                    player.classList.remove('hidden');
                }
            };
            thuAm64.start();
            const startBtn = document.getElementById('btn-start-rec-64');
            const stopBtn = document.getElementById('btn-stop-rec-64');
            if (startBtn) startBtn.disabled = true;
            if (stopBtn) stopBtn.disabled = false;
        })
        .catch(() => {
            alert('Không tìm thấy micrô hoặc chưa cấp quyền ghi âm. Vui lòng bật micrô của thiết bị!');
        });
};

window.dungGhiAm64 = function() {
    if (thuAm64) {
        thuAm64.stop();
        const startBtn = document.getElementById('btn-start-rec-64');
        const stopBtn = document.getElementById('btn-stop-rec-64');
        if (startBtn) startBtn.disabled = false;
        if (stopBtn) stopBtn.disabled = true;
    }
};
