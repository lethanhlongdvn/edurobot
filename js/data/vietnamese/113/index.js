export const lesson113 = {
    "topic": "Tiếng Việt 5",
    "week": "17",
    "period": "113",
    "title": "ĐỌC: MỘT NGÔI CHÙA ĐỘC ĐÁO",
    "desc": "Bài học giúp học sinh khám phá vẻ đẹp kiến trúc độc nhất vô nhị và giá trị lịch sử văn hóa thiêng liêng của chùa Một Cột - biểu tượng tự hào của Thủ đô Hà Nội.",
    "subject": "Đọc",
    "theme": "Mái ấm gia đình",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-sky-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-800 font-bold text-lg md:text-3xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Đọc trôi chảy, diễn cảm bài đọc "Một ngôi chùa độc đáo", hiểu được vị trí, nguồn gốc lịch sử của chùa Một Cột.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Cảm thụ và phân tích được nét kiến trúc độc nhất vô nhị (hình đóa sen vươn từ mặt nước) cùng nét đẹp cổ kính Á Đông của di tích.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Nhận thức sâu sắc giá trị văn hóa vô giá của chùa Một Cột và bồi đắp lòng tự hào dân tộc đối với biểu tượng của Thủ đô.
            </li>
        </ul>
    </div>

    <!-- 🌐 Khởi động: Thảo luận công trình kiến trúc độc đáo -->
    <div class="bg-white p-6 md:p-8 rounded-[32px] border border-sky-100 shadow-xl space-y-6">
        <h3 class="text-xl md:text-2xl font-black text-sky-950 flex items-center gap-2">
            🤝 Trao đổi cùng bạn: Các công trình kiến trúc độc đáo ở Việt Nam
        </h3>
        <p class="text-base md:text-lg text-gray-700 font-bold">
            Mỗi công trình dưới đây có đặc điểm gì đặc biệt về mặt hình dáng kiến trúc?
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Bảo tàng Hà Nội -->
            <div class="bg-amber-50/40 rounded-2xl p-5 border border-amber-200 shadow-sm flex flex-col justify-between items-center text-center space-y-3">
                <div class="w-full h-32 bg-amber-100/50 rounded-xl flex items-center justify-center border border-amber-200">
                    <!-- SVG Bảo tàng Hà Nội: Hình kim tự tháp ngược -->
                    <svg class="w-24 h-24 text-amber-700" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="10,25 90,25 70,55 30,55" fill="currentColor" fill-opacity="0.2"/>
                        <polygon points="20,55 80,55 65,75 35,75" fill="currentColor" fill-opacity="0.3"/>
                        <rect x="40" y="75" width="20" height="10" fill="currentColor" fill-opacity="0.4"/>
                        <line x1="50" y1="15" x2="50" y2="25"/>
                    </svg>
                </div>
                <h4 class="font-black text-amber-950 text-base md:text-lg">Bảo tàng Hà Nội</h4>
                <p class="text-xs md:text-sm text-amber-900 font-semibold leading-relaxed">Thiết kế theo mô hình <strong>kim tự tháp ngược</strong> độc đáo, tầng trên mở rộng hơn tầng dưới.</p>
            </div>

            <!-- Nhà hát Đó -->
            <div class="bg-sky-50/40 rounded-2xl p-5 border border-sky-250 shadow-sm flex flex-col justify-between items-center text-center space-y-3">
                <div class="w-full h-32 bg-sky-100/50 rounded-xl flex items-center justify-center border border-sky-200">
                    <!-- SVG Nhà hát Đó: Hình cái đó đánh bắt cá -->
                    <svg class="w-24 h-24 text-sky-700" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2">
                        <ellipse cx="50" cy="50" rx="35" ry="20" fill="currentColor" fill-opacity="0.2"/>
                        <path d="M15 50 Q50 20 85 50 Q50 80 15 50 Z" stroke-dasharray="2,2"/>
                        <line x1="50" y1="30" x2="50" y2="70"/>
                        <line x1="30" y1="38" x2="70" y2="62"/>
                        <line x1="30" y1="62" x2="70" y2="38"/>
                    </svg>
                </div>
                <h4 class="font-black text-sky-950 text-base md:text-lg">Nhà hát Đó (Khánh Hòa)</h4>
                <p class="text-xs md:text-sm text-sky-900 font-semibold leading-relaxed">Mô phỏng hình dáng <strong>cái đó</strong> - một dụng cụ đánh bắt cá dân gian mộc mạc của người Việt.</p>
            </div>

            <!-- Nhà hát Cao Văn Lầu -->
            <div class="bg-emerald-50/40 rounded-2xl p-5 border border-emerald-250 shadow-sm flex flex-col justify-between items-center text-center space-y-3">
                <div class="w-full h-32 bg-emerald-100/50 rounded-xl flex items-center justify-center border border-emerald-200">
                    <!-- SVG Nhà hát Cao Văn Lầu: Ba chiếc nón lá hướng vào nhau -->
                    <svg class="w-24 h-24 text-emerald-700" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2">
                        <!-- Conical Hat 1 -->
                        <polygon points="30,70 10,70 20,40" fill="currentColor" fill-opacity="0.2"/>
                        <!-- Conical Hat 2 -->
                        <polygon points="65,70 35,70 50,30" fill="currentColor" fill-opacity="0.3"/>
                        <!-- Conical Hat 3 -->
                        <polygon points="90,70 60,70 75,45" fill="currentColor" fill-opacity="0.2"/>
                    </svg>
                </div>
                <h4 class="font-black text-emerald-950 text-base md:text-lg">Nhà hát Cao Văn Lầu (Bạc Liêu)</h4>
                <p class="text-xs md:text-sm text-emerald-900 font-semibold leading-relaxed">Mái nhà hát có hình dáng <strong>ba chiếc nón lá</strong> khổng lồ đan quyện vào nhau hướng lên bầu trời.</p>
            </div>
        </div>
    </div>

    <!-- 📖 Văn bản bài đọc -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <div class="bg-sky-50/20 rounded-[28px] p-6 md:p-8 shadow-inner border border-sky-100/50">
                <div class="flex justify-between items-center mb-6 pb-4 border-b border-sky-100/50">
                    <h3 class="text-xl md:text-2xl font-black text-sky-850 flex items-center gap-2">
                        📖 Bài đọc: Một ngôi chùa độc đáo
                    </h3>
                    <button onclick="playSegmentAudio('assets/audio/tiengviet/113/mot_ngoi_chua_doc_dao.mp3')" class="p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full transition-all flex items-center justify-center shadow-sm" title="Nghe đọc toàn bài">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                    </button>
                </div>

                <div class="serif-font text-gray-800 leading-relaxed text-justify space-y-6 text-xl md:text-4xl">
                    <p class="indent-10">Ở quận Ba Đình – trung tâm Thủ đô Hà Nội – có một ngôi chùa được xây dựng năm 1049, thời vua Lý Thái Tông. Đó là chùa Một Cột.</p>
                    <p class="indent-10">Tên chùa đã gợi ra nét kiến trúc độc nhất vô nhị: Chùa ngự trên một cột đá tròn. Tám thanh gỗ bao quanh trụ đá giống hình đài sen, tạo thành giá đỡ vững chãi cho ngôi chùa. Nhìn từ xa, chùa Một Cột tựa đoá sen khổng lồ vươn lên từ mặt nước, bình yên đón ánh mặt trời. Vì thế, ban đầu chùa có tên gọi là Liên Hoa Đài.</p>
                    <p class="indent-10">Bên cạnh nét độc đáo kể trên, chùa Một Cột còn mang nét đẹp cổ kính của kiến trúc Á Đông. Nóc chùa được trang trí hai con rồng chầu mặt nguyệt. Chùa có bốn mái cong cong mềm mại. Ngôi chùa càng thêm nổi bật giữa khung cảnh cây cối xanh tươi và hồ nước yên bình.</p>
                    <p class="indent-10">Chùa Một Cột – di tích văn hoá vô giá – đã trở thành một biểu tượng của Thủ đô Hà Nội. Năm 2012, chùa được Tổ chức Kỉ lục châu Á xác nhận là “Ngôi chùa có kiến trúc độc đáo nhất châu Á”.</p>
                    
                </div>
            </div>

            <!-- Từ ngữ giải nghĩa -->
            <div class="bg-amber-50/70 p-6 rounded-[28px] border-2 border-dashed border-amber-250">
                <p class="text-sm font-black text-amber-700 uppercase tracking-widest mb-3 flex items-center gap-1">
                    <span>📝</span> Từ ngữ giải nghĩa trong bài
                </p>
                <ul class="space-y-3 text-base md:text-lg text-amber-800 font-bold">
                    <li>• <span class="text-amber-950">Ngự</span>: ở nơi cao, trang trọng.</li>
                    <li>• <span class="text-amber-950">Liên Hoa Đài</span>: đài hoa sen.</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 💡 Nội dung chính bài học -->
    <div class="bg-gradient-to-r from-sky-600 to-emerald-500 p-8 rounded-[36px] text-white shadow-2xl border-4 border-sky-100 relative overflow-hidden animate-in slide-in-from-bottom duration-500">
        <div class="absolute right-0 bottom-0 translate-x-10 translate-y-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
        <div class="relative z-10 space-y-4">
            <h4 class="text-2xl md:text-5xl font-black flex items-center gap-3">
                <span class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">💡</span>
                Nội dung chính bài học
            </h4>
            <p class="text-lg md:text-2xl font-bold leading-relaxed text-sky-50">
                Bài đọc giới thiệu về chùa Một Cột – một di tích lịch sử và văn hóa vô giá của Thủ đô Hà Nội, có kiến trúc độc đáo mô phỏng đóa sen vươn lên từ mặt nước cùng nét cổ kính của kiến trúc Á Đông. Qua đó thể hiện sự tự hào về tài năng sáng tạo của cha ông và giá trị biểu tượng thiêng liêng của di tích này đối với đất nước và châu lục.
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- PHẦN 1: CÂU HỎI ĐỌC HIỂU (CÂU 1-3 SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-8">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-xl md:text-2xl font-black shadow-md">📖</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Tìm hiểu chi tiết bài đọc</h3>
            </div>

            <div class="space-y-4">
                <!-- Câu 1 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            1. Chùa Một Cột ở đâu và được xây dựng vào năm nào?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-sky-850 font-bold mb-2">💡 Trả lời:</p>
                        <p>Chùa Một Cột ở <strong>quận Ba Đình</strong> – trung tâm Thủ đô Hà Nội. Chùa được xây dựng vào <strong>năm 1049</strong>, dưới thời vua <strong>Lý Thái Tông</strong>.</p>
                    </div>
                </details>

                <!-- Câu 2 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            2. Vì sao chùa có tên là Một Cột và Liên Hoa Đài? Điều gì khiến chùa được xem là “Kiến trúc độc đáo nhất châu Á”?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium space-y-3 text-lg md:text-3xl">
                        <p class="text-sky-850 font-bold">💡 Trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li><strong>Tên Một Cột:</strong> Vì toàn bộ ngôi chùa ngự trên một chiếc cột đá tròn lớn vững chãi duy nhất ở giữa lòng hồ.</li>
                            <li><strong>Tên Liên Hoa Đài:</strong> Vì từ xa nhìn lại, cấu trúc mái cong mềm mại cùng 8 thanh gỗ đỡ tỏa ra xung quanh cột đá trông giống như một đoá sen khổng lồ vươn từ mặt hồ đón nắng mai.</li>
                            <li><strong>Độc đáo nhất châu Á:</strong> Nhờ lối kiến trúc phong thủy kết hợp hài hòa giữa gỗ và đá, tạo hình hoa sen nghệ thuật tâm linh đỉnh cao Á Đông, hiếm công trình nào trên thế giới có cấu trúc tương tự.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 3 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            3. Trong bài đọc, em ấn tượng nhất với thông tin nào? Vì sao?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-sky-850 font-bold mb-2">💡 Trả lời (Học sinh tự chọn):</p>
                        <p>Ví dụ: Em ấn tượng nhất với kỷ lục của chùa được xác nhận năm 2012 là "Ngôi chùa có kiến trúc độc đáo nhất châu Á". Thông tin này giúp em cảm thấy vô cùng tự hào về trí tuệ sáng tạo của ông cha ngày xưa khi xây dựng nên biểu tượng tuyệt vời này cho đất nước.</p>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- PHẦN 2: BÀI TẬP KÉO THẢ TÓM TẮT BỐ CỤC (CÂU 4 SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">2</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Sắp xếp tóm tắt bố cục bài đọc</h3>
            </div>

            <p class="text-base md:text-lg text-gray-700 font-bold mb-6 italic">
                👉 Hướng dẫn: Kéo các nhãn nội dung màu vàng ở trên và thả vào đúng ô Phần đầu, Phần chính, Phần cuối tương ứng bên dưới.
            </p>

            <!-- Nhãn kéo thả (Drag sources) -->
            <div class="flex flex-col gap-3 mb-8 max-w-3xl mx-auto select-none" id="summary-source-container">
                <div class="p-4 bg-yellow-100 hover:bg-yellow-200 border-2 border-yellow-300 rounded-2xl font-bold text-base md:text-lg cursor-grab hover:scale-[1.01] transition-all shadow-sm" draggable="true" ondragstart="handleSummaryDragStart(event)" id="card-main">Phân tích nét độc đáo và cổ kính của ngôi chùa (trụ đá, đài sen, nóc rồng chầu, mái cong).</div>
                <div class="p-4 bg-yellow-100 hover:bg-yellow-200 border-2 border-yellow-300 rounded-2xl font-bold text-base md:text-lg cursor-grab hover:scale-[1.01] transition-all shadow-sm" draggable="true" ondragstart="handleSummaryDragStart(event)" id="card-end">Khẳng định giá trị văn hóa lịch sử vô giá và danh hiệu kỷ lục độc đáo nhất châu Á của chùa.</div>
                <div class="p-4 bg-yellow-100 hover:bg-yellow-200 border-2 border-yellow-300 rounded-2xl font-bold text-base md:text-lg cursor-grab hover:scale-[1.01] transition-all shadow-sm" draggable="true" ondragstart="handleSummaryDragStart(event)" id="card-intro">Giới thiệu chung về chùa Một Cột (vị trí ở Ba Đình, năm xây dựng 1049 đời vua Lý Thái Tông).</div>
            </div>

            <!-- Khung thả tóm tắt (Drop targets - 1 Cột rộng rãi) -->
            <div class="max-w-4xl mx-auto space-y-6">
                <!-- Phần Đầu -->
                <div class="bg-amber-50/50 p-6 rounded-[28px] border-2 border-amber-200">
                    <h4 class="text-lg font-black text-amber-800 mb-2">🌟 PHẦN ĐẦU</h4>
                    <div class="min-h-[60px] border-2 border-dashed border-amber-400 rounded-2xl flex items-center justify-center p-3 font-semibold text-gray-500 bg-white" 
                         ondragover="allowSummaryDrop(event)" ondrop="handleSummaryDrop(event, 'drop-intro')" id="drop-intro">
                        Thả nhãn tóm tắt Phần đầu tại đây...
                    </div>
                </div>

                <!-- Phần Chính -->
                <div class="bg-sky-50/50 p-6 rounded-[28px] border-2 border-sky-200">
                    <h4 class="text-lg font-black text-sky-850 mb-2">🌀 PHẦN CHÍNH</h4>
                    <div class="min-h-[60px] border-2 border-dashed border-sky-400 rounded-2xl flex items-center justify-center p-3 font-semibold text-gray-500 bg-white" 
                         ondragover="allowSummaryDrop(event)" ondrop="handleSummaryDrop(event, 'drop-main')" id="drop-main">
                        Thả nhãn tóm tắt Phần chính tại đây...
                    </div>
                </div>

                <!-- Phần Cuối -->
                <div class="bg-emerald-50/50 p-6 rounded-[28px] border-2 border-emerald-200">
                    <h4 class="text-lg font-black text-emerald-800 mb-2">🍀 PHẦN CUỐI</h4>
                    <div class="min-h-[60px] border-2 border-dashed border-emerald-400 rounded-2xl flex items-center justify-center p-3 font-semibold text-gray-500 bg-white" 
                         ondragover="allowSummaryDrop(event)" ondrop="handleSummaryDrop(event, 'drop-end')" id="drop-end">
                        Thả nhãn tóm tắt Phần cuối tại đây...
                    </div>
                </div>
            </div>

            <!-- Nút kiểm tra kéo thả -->
            <div class="mt-8 flex justify-center gap-4">
                <button id="btn-check-113-drag" onclick="window.checkSummaryVn113()" class="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button>
                <button onclick="window.resetSummaryVn113()" class="w-12 h-12 bg-amber-500 hover:bg-amber-600 text-white rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại">🔄</button>
            </div>
            <div id="drag-feedback" class="hidden mt-6 p-4 rounded-xl font-bold text-lg text-center animate-in fade-in duration-300"></div>
        </div>
    </section>

    <!-- PHẦN 3: CÂU HỎI LỰA CHỌN THÔNG ĐIỆP (CÂU 5 SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">3</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Xác định thông điệp chính của bài đọc</h3>
            </div>

            <p class="text-base md:text-lg text-gray-700 font-bold mb-6">
                ❓ Theo con, bài đọc nói với chúng ta về điều gì nhiều nhất? Hãy chọn câu trả lời đúng nhất:
            </p>

            <div class="space-y-4 max-w-4xl mx-auto select-none">
                <label class="flex items-center gap-3 p-4 bg-white hover:bg-sky-50/50 rounded-2xl border-2 border-gray-150 cursor-pointer transition-all">
                    <input type="radio" name="vn113-c5" value="A" class="w-5 h-5 text-sky-600 focus:ring-sky-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">A. Kiến trúc độc đáo của chùa Một Cột.</span>
                </label>
                <label class="flex items-center gap-3 p-4 bg-white hover:bg-sky-50/50 rounded-2xl border-2 border-gray-150 cursor-pointer transition-all">
                    <input type="radio" name="vn113-c5" value="B" class="w-5 h-5 text-sky-600 focus:ring-sky-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">B. Nguồn gốc những cái tên của chùa Một Cột.</span>
                </label>
                <label class="flex items-center gap-3 p-4 bg-white hover:bg-sky-50/50 rounded-2xl border-2 border-gray-150 cursor-pointer transition-all">
                    <input type="radio" name="vn113-c5" value="C" class="w-5 h-5 text-sky-600 focus:ring-sky-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">C. Giá trị lịch sử, văn hoá lâu đời của chùa Một Cột đối với Thủ đô Hà Nội.</span>
                </label>
            </div>

            <!-- Nút kiểm tra đáp án -->
            <div class="mt-8 flex justify-center gap-4">
                <button id="btn-check-113-choice" onclick="window.checkChoiceVn113()" class="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button>
                <button onclick="window.resetChoiceVn113()" class="w-12 h-12 bg-amber-500 hover:bg-amber-600 text-white rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại">🔄</button>
            </div>
            <div id="choice-feedback" class="hidden mt-6 p-4 rounded-xl font-bold text-lg text-center animate-in fade-in duration-300"></div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TIẾT HỌC -->
    <div class="pt-6 flex justify-center">
        <button onclick="window.nopBaiVn113()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-600 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-950 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Chùa Một Cột được xây dựng tại quận nào của Hà Nội?",
            "options": [
                "Quận Ba Đình",
                "Quận Hoàn Kiếm",
                "Quận Đống Đa",
                "Quận Hai Bà Trưng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Chùa Một Cột được khởi công xây dựng vào năm nào?",
            "options": [
                "Năm 1049",
                "Năm 1010",
                "Năm 1225",
                "Năm 1428"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Ngôi chùa được xây dựng dưới triều đại vị vua nào?",
            "options": [
                "Vua Lý Thái Tông",
                "Vua Lý Thái Tổ",
                "Vua Trần Thái Tông",
                "Vua Đinh Tiên Hoàng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Kiến trúc độc nhất vô nhị của chùa Một Cột được mô tả như thế nào?",
            "options": [
                "Chùa ngự trên một cột đá tròn duy nhất giữa hồ nước",
                "Chùa có 8 cột đá vuông vững chắc xếp theo hình bát quái",
                "Chùa được làm hoàn toàn bằng gạch nung đỏ rực rỡ",
                "Chùa xây chênh vênh trên vách núi cao thẳng đứng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Các thanh gỗ bao quanh trụ đá của chùa Một Cột gợi hình ảnh gì?",
            "options": [
                "Hình đài sen nâng đỡ ngôi chùa",
                "Hình những cánh chim phượng hoàng",
                "Hình các nhánh tre làng bình dị",
                "Hình những tia nắng mai tỏa rạng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tên gọi ban đầu của chùa Một Cột là gì?",
            "options": [
                "Liên Hoa Đài",
                "Kính Thiên Đài",
                "Hương Tích Tự",
                "Đài Trấn Quốc"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nét đẹp cổ kính của kiến trúc Á Đông trên nóc chùa Một Cột được thể hiện qua chi tiết nào?",
            "options": [
                "Nóc chùa trang trí hai con rồng chầu mặt nguyệt",
                "Nóc chùa được lợp bằng tôn màu xanh hiện đại",
                "Nóc chùa có gắn tượng các vị trạng nguyên ngày xưa",
                "Nóc chùa có chóp nhọn cao vút theo kiểu Gô-tích"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Chùa Một Cột có cấu trúc mái che như thế nào?",
            "options": [
                "Bốn mái cong cong mềm mại",
                "Hai mái dốc thẳng lợp lá cọ",
                "Mái vòm tròn khép kín hoàn toàn",
                "Một mái duy nhất che trên cột đá"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Chùa Một Cột nằm nổi bật giữa khung cảnh xung quanh gồm những gì?",
            "options": [
                "Cây cối xanh tươi và hồ nước yên bình",
                "Những tòa nhà chọc trời và đường phố nhộn nhịp",
                "Dòng sông hồng cuồn cuộn đỏ phù sa",
                "Một thung lũng đá tai mèo trùng điệp"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Năm 2012, chùa Một Cột được Tổ chức Kỷ lục Châu Á xác nhận danh hiệu nào?",
            "options": [
                "Ngôi chùa có kiến trúc độc đáo nhất châu Á",
                "Ngôi chùa cổ nhất khu vực châu Á",
                "Ngôi chùa bằng gỗ lớn nhất châu Á",
                "Di tích văn hoá nhiều tuổi nhất châu Á"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ ngữ 'Ngự' trong bài đọc có nghĩa là gì?",
            "options": [
                "Ở nơi cao, trang trọng",
                "Trôi lững lờ trên dòng nước",
                "Bay lượn trên bầu trời cao",
                "Ẩn giấu dưới tán lá xanh"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Bố cục bài đọc được chia làm mấy phần theo câu 4 SGK?",
            "options": [
                "3 phần (Phần đầu, Phần chính, Phần cuối)",
                "2 phần (Mở bài, Thân bài)",
                "4 phần (Khởi động, Đọc, Luyện tập, Củng cố)",
                "5 phần tương ứng 5 câu hỏi đọc hiểu"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nhà hát Đó ở Khánh Hòa mô phỏng hình ảnh gì của người Việt?",
            "options": [
                "Cái đó - một dụng cụ đánh bắt cá dân gian",
                "Chiếc nón lá truyền thống của người phụ nữ",
                "Cánh diều sáo bay trong gió chiều",
                "Nhà rông Tây Nguyên kiên cố, cao vút"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nhà hát Cao Văn Lầu ở Bạc Liêu được thiết kế mái che hình gì?",
            "options": [
                "Ba chiếc nón lá khổng lồ hướng vào nhau",
                "Hai chiếc bánh chưng xanh truyền thống",
                "Hình con rùa vàng đang bò trên nước",
                "Mô hình nhạc cụ đàn bầu Việt Nam"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Bài đọc 'Một ngôi chùa độc đáo' nhằm ca ngợi giá trị gì?",
            "options": [
                "Vẻ đẹp kiến trúc sáng tạo đỉnh cao và giá trị lịch sử lâu đời của chùa Một Cột",
                "Khả năng thi đấu của đội tuyển bóng đá quốc gia",
                "Quy trình sản xuất ra các viên ngói lợp mái chùa",
                "Công nghệ lọc nước hồ trong lành quanh chùa"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- LOGIC TƯƠNG TÁC TIẾT 113 ---

// 1. Kéo thả bố cục tóm tắt
let dragSummaryDataVn113 = null;

window.handleSummaryDragStart = function(event) {
    dragSummaryDataVn113 = {
        id: event.target.id,
        text: event.target.innerText
    };
    event.dataTransfer.setData("text", event.target.innerText);
};

window.allowSummaryDrop = function(event) {
    event.preventDefault();
};

window.handleSummaryDrop = function(event, dropZoneId) {
    event.preventDefault();
    if (!dragSummaryDataVn113) return;

    const zone = document.getElementById(dropZoneId);
    if (zone) {
        zone.innerText = dragSummaryDataVn113.text;
        zone.setAttribute('data-ans', dragSummaryDataVn113.id);
        zone.className = "min-h-[60px] border-2 border-sky-400 bg-yellow-50 text-gray-900 rounded-2xl flex items-center justify-center p-4 font-bold text-base md:text-lg shadow-sm transition-all";
    }
};

window.checkSummaryVn113 = function() {
    const ansIntro = document.getElementById('drop-intro')?.getAttribute('data-ans');
    const ansMain = document.getElementById('drop-main')?.getAttribute('data-ans');
    const ansEnd = document.getElementById('drop-end')?.getAttribute('data-ans');

    const fb = document.getElementById('drag-feedback');
    if (!fb) return;
    fb.classList.remove('hidden');

    const isIntroCorrect = (ansIntro === 'card-intro');
    const isMainCorrect = (ansMain === 'card-main');
    const isEndCorrect = (ansEnd === 'card-end');

    if (isIntroCorrect && isMainCorrect && isEndCorrect) {
        fb.innerHTML = "🎉 Tuyệt vời! Con đã sắp xếp nội dung tóm tắt bố cục 3 phần của bài đọc chính xác 100%!";
        fb.className = "mt-6 p-4 rounded-xl font-bold text-lg bg-emerald-600 text-white text-center shadow-lg animate-fade-in";
        if (typeof window.UI?.showToast === 'function') {
            window.UI.showToast("Bố cục sắp xếp chính xác!", "success", 3000);
        }
    } else {
        fb.innerHTML = "❌ Còn một số phần tóm tắt bị nhầm chỗ hoặc còn trống. Con hãy kéo thả sắp xếp lại nhé!";
        fb.className = "mt-6 p-4 rounded-xl font-bold text-lg bg-red-500 text-white text-center shadow-lg animate-fade-in";
        if (typeof window.UI?.showToast === 'function') {
            window.UI.showToast("Sắp xếp chưa đúng!", "error", 3000);
        }
    }
};

window.resetSummaryVn113 = function() {
    const zones = ['drop-intro', 'drop-main', 'drop-end'];
    const placeholders = [
        "Thả nhãn tóm tắt Phần đầu tại đây...",
        "Thả nhãn tóm tắt Phần chính tại đây...",
        "Thả nhãn tóm tắt Phần cuối tại đây..."
    ];
    
    zones.forEach((id, idx) => {
        const zone = document.getElementById(id);
        if (zone) {
            zone.innerText = placeholders[idx];
            zone.removeAttribute('data-ans');
            
            // Reapply dashed borders
            if (id.includes('intro')) {
                zone.className = "min-h-[60px] border-2 border-dashed border-amber-400 rounded-2xl flex items-center justify-center p-3 font-semibold text-gray-500 bg-white";
            } else if (id.includes('main')) {
                zone.className = "min-h-[60px] border-2 border-dashed border-sky-400 rounded-2xl flex items-center justify-center p-3 font-semibold text-gray-500 bg-white";
            } else {
                zone.className = "min-h-[60px] border-2 border-dashed border-emerald-400 rounded-2xl flex items-center justify-center p-3 font-semibold text-gray-500 bg-white";
            }
        }
    });

    const fb = document.getElementById('drag-feedback');
    if (fb) fb.classList.add('hidden');
};

// 2. Trắc nghiệm câu 5
window.checkChoiceVn113 = function() {
    const selected = document.querySelector('input[name="vn113-c5"]:checked')?.value;
    const fb = document.getElementById('choice-feedback');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!selected) {
        fb.innerHTML = "⚠️ Vui lòng chọn một phương án trước khi kiểm tra!";
        fb.className = "mt-6 p-4 rounded-xl font-bold text-lg bg-yellow-600 text-white text-center shadow-lg";
        return;
    }

    if (selected === 'C') {
        fb.innerHTML = "🎉 Chính xác! Đáp án C là đầy đủ và chính xác nhất, vì ngôi chùa không chỉ có kiến trúc độc đáo mà còn là di tích lịch sử văn hóa vô giá của nước nhà.";
        fb.className = "mt-6 p-4 rounded-xl font-bold text-lg bg-emerald-600 text-white text-center shadow-lg animate-fade-in";
        if (typeof window.UI?.showToast === 'function') {
            window.UI.showToast("Đáp án chính xác!", "success", 3000);
        }
    } else {
        fb.innerHTML = "❌ Câu trả lời của con chưa phải là ý nghĩa bao quát đầy đủ nhất của cả bài đọc. Hãy thử suy nghĩ lại nhé!";
        fb.className = "mt-6 p-4 rounded-xl font-bold text-lg bg-red-500 text-white text-center shadow-lg animate-fade-in";
        if (typeof window.UI?.showToast === 'function') {
            window.UI.showToast("Câu trả lời chưa chính xác!", "error", 3000);
        }
    }
};

window.resetChoiceVn113 = function() {
    const radios = document.querySelectorAll('input[name="vn113-c5"]');
    radios.forEach(r => r.checked = false);
    const fb = document.getElementById('choice-feedback');
    if (fb) fb.classList.add('hidden');
};

// 3. Nộp bài hoàn thành tiết học
window.nopBaiVn113 = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 113', 
            '🌸', 
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🌸</span><p class="text-xl md:text-3xl font-bold text-sky-950">Tuyệt vời! Con đã hoàn thành xuất sắc bài đọc Một ngôi chùa độc đáo!</p><p class="text-lg text-gray-600 mt-3">Hãy luôn tự hào về những biểu tượng di sản lịch sử văn hóa rạng ngời của đất nước ta.</p></div>'
        );
    }
};
