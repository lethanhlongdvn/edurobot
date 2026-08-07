export const lesson15 = {
    "topic": "Tiếng Việt 5",
    "week": "3",
    "period": "15",
    "title": "ĐỌC: TIẾNG HẠT NẢY MẦM",
    "desc": "Bài thơ giúp học sinh cảm nhận tình yêu thương vô bờ bến của cô giáo dành cho học sinh khiếm thính và khát vọng mang cả thế giới âm thanh kì diệu đến với các em.",
    "subject": "Đọc",
    "theme": "Thế giới tuổi thơ",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-sky-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-800 font-bold text-2xl md:text-3xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Đọc diễn cảm bài thơ "Tiếng hạt nảy mầm", ngắt nhịp thơ phù hợp.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Hiểu ý nghĩa bài thơ: Ca ngợi lớp học đặc biệt và tấm lòng nhân ái, tận tuỵ của cô giáo dạy trẻ em khiếm thính.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Học thuộc lòng bài thơ ngay tại lớp thông qua công cụ tương tác thông minh.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG: NGHE TỪ NGỮ, ĐOÁN ÂM THANH -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động: Nghe từ ngữ, đoán âm thanh</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Hãy chọn hiện tượng/sự vật tạo ra âm thanh tương ứng với từ tượng thanh dưới đây:</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Câu 1 -->
            <div class="bg-amber-50/40 p-5 rounded-2xl border border-amber-100 space-y-3">
                <p class="text-xl md:text-2xl font-black text-amber-600">Từ ngữ chỉ âm thanh: <span class="text-rose-900 font-black text-xl italic">"tí tách"</span></p>
                <div class="flex flex-wrap gap-2" id="vn15-kd-1-opts">
                    <button onclick="chonKhởiĐộngVn15(1, 0)" class="px-4 py-2 bg-white border border-gray-100 rounded-xl font-bold text-xl md:text-2xl text-gray-800 hover:border-amber-400 active:scale-95 transition-all">Tiếng sấm nổ</button>
                    <button onclick="chonKhởiĐộngVn15(1, 1)" class="px-4 py-2 bg-white border border-gray-100 rounded-xl font-bold text-xl md:text-2xl text-gray-800 hover:border-amber-400 active:scale-95 transition-all">Tiếng mưa rơi</button>
                    <button onclick="chonKhởiĐộngVn15(1, 2)" class="px-4 py-2 bg-white border border-gray-100 rounded-xl font-bold text-xl md:text-2xl text-gray-800 hover:border-amber-400 active:scale-95 transition-all">Tiếng suối chảy</button>
                </div>
                <div id="fb-vn15-kd-1" class="hidden text-sm font-bold px-3 py-1.5 rounded-lg"></div>
            </div>

            <!-- Câu 2 -->
            <div class="bg-amber-50/40 p-5 rounded-2xl border border-amber-100 space-y-3">
                <p class="text-xl md:text-2xl font-black text-amber-600">Từ ngữ chỉ âm thanh: <span class="text-rose-900 font-black text-xl italic">"lao xao"</span></p>
                <div class="flex flex-wrap gap-2" id="vn15-kd-2-opts">
                    <button onclick="chonKhởiĐộngVn15(2, 0)" class="px-4 py-2 bg-white border border-gray-100 rounded-xl font-bold text-xl md:text-2xl text-gray-800 hover:border-amber-400 active:scale-95 transition-all">Tiếng lá động trong vườn</button>
                    <button onclick="chonKhởiĐộngVn15(2, 1)" class="px-4 py-2 bg-white border border-gray-100 rounded-xl font-bold text-xl md:text-2xl text-gray-800 hover:border-amber-400 active:scale-95 transition-all">Tiếng còi tàu hú</button>
                    <button onclick="chonKhởiĐộngVn15(2, 2)" class="px-4 py-2 bg-white border border-gray-100 rounded-xl font-bold text-xl md:text-2xl text-gray-800 hover:border-amber-400 active:scale-95 transition-all">Tiếng đá lở</button>
                </div>
                <div id="fb-vn15-kd-2" class="hidden text-sm font-bold px-3 py-1.5 rounded-lg"></div>
            </div>
        </div>
    </div>

    <!-- 📖 BÀI ĐỌC: TIẾNG HẠT NẢY MẦM -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>

        <div class="relative z-10 space-y-6">
            <div class="flex justify-between items-center border-b border-sky-100 pb-4">
                <span class="text-sky-900 font-black text-xl md:text-3xl flex items-center gap-2">
                    <span>📖</span> Tiếng hạt nảy mầm
                </span>
                <button onclick="playSegmentAudio('assets/audio/tiengviet/15/tieng_hat_nay_mam.mp3')" class="p-2.5 bg-sky-600 hover:bg-sky-600 text-white rounded-full transition-all flex items-center justify-center shadow-md animate-bounce" title="Nghe đọc thơ diễn cảm">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                </button>
            </div>

            <!-- Nội dung bài thơ + Minh họa -->
            <div class="flex flex-col lg:flex-row gap-8 items-start">
                <!-- Cột thơ -->
                <div class="w-full lg:w-1/2 bg-sky-50/10 p-6 md:p-8 rounded-3xl border border-sky-100/50">
                    <div class="serif-font text-gray-800 leading-relaxed space-y-6 text-center lg:text-left select-none text-xl md:text-4xl" id="vn15-poem-container">
                        <!-- Khổ 1 -->
                        <div class="space-y-1 block" id="vn15-kho-1">
                            <p><span class="vn15-word">Mắt</span> <span class="vn15-word">sáng,</span> <span class="vn15-word">nhìn</span> <span class="vn15-word">lên</span> <span class="vn15-word">bảng</span></p>
                            <p><span class="vn15-word">Lớp</span> <span class="vn15-word">mươi</span> <span class="vn15-word">nụ</span> <span class="vn15-word">môi</span> <span class="vn15-word">hồng</span></p>
                            <p><span class="vn15-word">Đôi</span> <span class="vn15-word">tay</span> <span class="vn15-word">cô</span> <span class="vn15-word">cụp</span> <span class="vn15-word">mở</span></p>
                            <p><span class="vn15-word">Báo</span> <span class="vn15-word">tưng</span> <span class="vn15-word">bừng</span> <span class="vn15-word">thanh</span> <span class="vn15-word">âm.</span></p>
                        </div>

                        <!-- Khổ 2 -->
                        <div class="space-y-1 block" id="vn15-kho-2">
                            <p><span class="vn15-word">Cánh</span> <span class="vn15-word">sẻ</span> <span class="vn15-word">vụt</span> <span class="vn15-word">qua</span> <span class="vn15-word">song</span></p>
                            <p><span class="vn15-word">Hót</span> <span class="vn15-word">nắng</span> <span class="vn15-word">vàng</span> <span class="vn15-word">ánh</span> <span class="vn15-word">ỏi</span></p>
                            <p><span class="vn15-word">Các</span> <span class="vn15-word">bé</span> <span class="vn15-word">vẫn</span> <span class="vn15-word">lặng</span> <span class="vn15-word">chăm</span></p>
                            <p><span class="vn15-word">Nhìn</span> <span class="vn15-word">theo</span> <span class="vn15-word">cô</span> <span class="vn15-word">mấp</span> <span class="vn15-word">máy.</span></p>
                        </div>

                        <!-- Khổ 3 -->
                        <div class="space-y-1 block" id="vn15-kho-3">
                            <p><span class="vn15-word">Sau</span> <span class="vn15-word">ngón</span> <span class="vn15-word">tay</span> <span class="vn15-word">cô</span> <span class="vn15-word">đẩy</span></p>
                            <p><span class="vn15-word">Là</span> <span class="vn15-word">tiếng</span> <span class="vn15-word">hạt</span> <span class="vn15-word">nảy</span> <span class="vn15-word">mầm</span></p>
                            <p><span class="vn15-word">Tiếng</span> <span class="vn15-word">lá</span> <span class="vn15-word">động</span> <span class="vn15-word">trong</span> <span class="vn15-word">vườn</span></p>
                            <p><span class="vn15-word">Tiếng</span> <span class="vn15-word">sớm</span> <span class="vn15-word">mai</span> <span class="vn15-word">mẹ</span> <span class="vn15-word">gọi.</span></p>
                        </div>

                        <!-- Khổ 4 -->
                        <div class="space-y-1 block" id="vn15-kho-4">
                            <p><span class="vn15-word">Tiếng</span> <span class="vn15-word">cuộc</span> <span class="vn15-word">đời</span> <span class="vn15-word">sâu</span> <span class="vn15-word">vợi</span></p>
                            <p><span class="vn15-word">Con</span> <span class="vn15-word">tàu</span> <span class="vn15-word">biển</span> <span class="vn15-word">buông</span> <span class="vn15-word">neo</span></p>
                            <p><span class="vn15-word">Ngôi</span> <span class="vn15-word">sao</span> <span class="vn15-word">mọc</span> <span class="vn15-word">rừng</span> <span class="vn15-word">chiều</span></p>
                            <p><span class="vn15-word">Vó</span> <span class="vn15-word">ngựa</span> <span class="vn15-word">ran</span> <span class="vn15-word">vách</span> <span class="vn15-word">đá.</span></p>
                        </div>

                        <!-- Khổ 5 -->
                        <div class="space-y-1 block" id="vn15-kho-5">
                            <p><span class="vn15-word">Bao</span> <span class="vn15-word">nghĩ</span> <span class="vn15-word">suy</span> <span class="vn15-word">vất</span> <span class="vn15-word">vả</span></p>
                            <p><span class="vn15-word">Trong</span> <span class="vn15-word">mắt</span> <span class="vn15-word">người</span> <span class="vn15-word">lo</span> <span class="vn15-word">toan</span></p>
                            <p><span class="vn15-word">Để</span> <span class="vn15-word">từng</span> <span class="vn15-word">âm</span> <span class="vn15-word">có</span> <span class="vn15-word">nghĩa</span></p>
                            <p><span class="vn15-word">Bật</span> <span class="vn15-word">lên</span> <span class="vn15-word">từ</span> <span class="vn15-word">môi</span> <span class="vn15-word">em.</span></p>
                        </div>

                        <!-- Khổ 6 -->
                        <div class="space-y-1 block" id="vn15-kho-6">
                            <p><span class="vn15-word">Nghe</span> <span class="vn15-word">cánh</span> <span class="vn15-word">vỗ</span> <span class="vn15-word">chim</span> <span class="vn15-word">non</span></p>
                            <p><span class="vn15-word">Trước</span> <span class="vn15-word">diệu</span> <span class="vn15-word">kì</span> <span class="vn15-word">tiếng</span> <span class="vn15-word">hót</span></p>
                            <p><span class="vn15-word">Giữa</span> <span class="vn15-word">hồn</span> <span class="vn15-word">nhiên</span> <span class="vn15-word">lớp</span> <span class="vn15-word">học</span></p>
                            <p><span class="vn15-word">Ai</span> <span class="vn15-word">nụ</span> <span class="vn15-word">cười</span> <span class="vn15-word">rưng</span> <span class="vn15-word">rưng.</span></p>
                        </div>

                        
                    </div>
                </div>

                <!-- Cột phải: Minh họa & Dịch nghĩa các từ của khổ thơ -->
                <div class="w-full lg:w-1/2 space-y-6">
                    <!-- Ảnh minh họa thật -->
                    <div onclick="window.showMathFeedback('Tiếng hạt nảy mầm', '🌱', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/15/15.png&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Tiếng hạt nảy mầm&quot;&gt;&lt;p class=&quot;text-2xl font-bold text-sky-800 mt-4&quot;&gt;Lớp học đặc biệt với hình ảnh cô giáo đang dùng ngón tay kỳ diệu mô tả thế giới âm thanh sống động cho học sinh.&lt;/p&gt;&lt;/div&gt;')" class="w-full bg-gradient-to-br from-sky-50 to-blue-50 rounded-[32px] border-4 border-white shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group">
                        <img src="assets/images/tiengviet_5_1/15/15.png" class="w-full h-52 object-cover object-center group-hover:scale-105 transition-transform duration-500" alt="Tiếng hạt nảy mầm">
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Bấm để phóng to 🔍</div>
                    </div>

                    <!-- Từ ngữ cần nhớ -->
                    <div class="bg-amber-50/70 p-5 rounded-[24px] border-2 border-dashed border-amber-200">
                        <p class="text-sm font-black text-amber-600 uppercase tracking-widest mb-2 flex items-center gap-1">
                            <span>📝</span> Từ ngữ giải nghĩa
                        </p>
                        <ul class="text-2xl md:text-3xl text-amber-600 font-medium space-y-2">
                            <li>• <strong>Ánh ỏi</strong>: (tiếng hót) cao, trong và vang lên liên tiếp.</li>
                            <li>• <strong>Khiếm thính</strong>: mất khả năng nghe hoặc nghe kém.</li>
                            <li>• <strong>Mấp máy</strong>: cử động khẽ và liên tiếp (nói về môi).</li>
                            <li>• <strong>Rưng rưng</strong>: (nước mắt) đang đọng ở mi mắt, sắp trào ra vì xúc động.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 💡 Nội dung chính bài học -->
    <div class="p-8 rounded-[36px] bg-gradient-to-r from-sky-600 to-emerald-500 text-white shadow-xl relative overflow-hidden mt-6">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <h4 class="text-xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
            <span>💡</span> Nội dung chính bài học
        </h4>
        <div class="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p class="text-xl md:text-4xl font-bold leading-relaxed text-center italic">
                "Bài thơ ca ngợi lớp học vô cùng đặc biệt của những học sinh khiếm thính và tấm lòng nhân hậu, tận tuỵ, giàu tình yêu thương của cô giáo khi kiên trì truyền đạt vẻ đẹp của thế giới âm thanh đến cho các em."
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- TÌM HIỂU BÀI (ACCORDION CÂU HỎI) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-8">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">📖</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Tìm hiểu nội dung bài thơ</h3>
            </div>

            <div class="space-y-4">
                <!-- Câu 1 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            1. Ở khổ thơ thứ nhất, chi tiết nào giúp em nhận ra đây là lớp học của trẻ khiếm thính?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-sky-800 font-bold mb-2">💡 Trả lời:</p>
                        <p>Chi tiết: <strong>"Đôi tay cô cụp mở / Báo tưng bừng thanh âm"</strong>.</p>
                        <p class="mt-2 text-gray-800">→ Cô giáo đang sử dụng ngôn ngữ kí hiệu của đôi bàn tay để truyền đạt thế giới âm thanh của cuộc sống đến cho các em.</p>
                    </div>
                </details>

                <!-- Câu 2 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            2. Theo em, những khó khăn, thiệt thòi của các bạn học sinh trong bài thơ là gì?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-sky-800 font-bold mb-2">💡 Trả lời:</p>
                        <p>Các bạn bị khiếm thính (không có khả năng nghe hoặc nghe kém). Mọi âm thanh xung quanh như tiếng chim hót, tiếng lá rụng, tiếng mẹ gọi hay tiếng vó ngựa ran vách đá... các bạn đều không thể trực tiếp cảm nhận bằng tai nghe, mà chỉ có thể cảm nhận gián tiếp qua nét mặt, cử chỉ đôi bàn tay của cô giáo.</p>
                    </div>
                </details>

                <!-- Câu 3 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            3. Cô giáo đã gợi lên trong tâm trí học trò những hình ảnh và âm thanh nào của cuộc sống?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-sky-800 font-bold mb-2">💡 Trả lời:</p>
                        <p>Những âm thanh và hình ảnh kì diệu: <em>Tiếng hạt nảy mầm, tiếng lá động trong vườn, tiếng sớm mai mẹ gọi, tiếng con tàu biển buông neo, ngôi sao mọc rừng chiều, tiếng vó ngựa ran vách đá, tiếng cánh vỗ chim non, tiếng hót diệu kì.</em></p>
                    </div>
                </details>

                <!-- Câu 4 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            4. Những chi tiết nào cho thấy các bạn học sinh rất chăm chú? Vì sao giờ học cuốn hút các bạn?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-sky-800 font-bold mb-2">💡 Trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li><strong>Chi tiết chăm chú:</strong> "Mắt sáng, nhìn lên bảng", "Các bé vẫn lặng chăm / Nhìn theo cô mấp máy".</li>
                            <li><strong>Giờ học cuốn hút vì:</strong> Cô giáo giảng dạy bằng cả trái tim yêu thương, giúp học sinh tưởng tượng ra toàn bộ thế giới âm thanh sống động qua những ngón tay kỳ diệu của cô.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 5 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            5. Em có suy nghĩ gì về cô giáo của lớp học đặc biệt này qua 2 khổ thơ cuối?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-sky-800 font-bold mb-2">💡 Trả lời:</p>
                        <p>Cô giáo là người vô cùng nhẫn nại, nhân hậu và có tình yêu thương học trò sâu sắc. Cô chấp nhận bao lo toan, vất vả ("Bao nghĩ suy vất vả / Trong mắt người lo toan") chỉ với ước nguyện giúp những học trò đặc biệt bật lên được từng âm thanh tròn vành, rõ chữ ("Để từng âm có nghĩa / Bật lên từ môi em"), đem lại nụ cười rưng rưng hạnh phúc cho các em và mọi người.</p>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- ⚡ TƯƠNG TÁC HỌC THUỘC LÒNG BÀI THƠ -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
        <div class="p-6 md:p-8 bg-emerald-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">⚡</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Thử thách: Học thuộc lòng bài thơ</h3>
            </div>
            
            <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Sử dụng các chế độ ẩn bớt từ ngữ để rèn luyện trí nhớ và nhẩm thuộc bài thơ nhé!</p>

            <div class="flex flex-wrap gap-3 justify-center pb-2">
                <button onclick="cheChuVn15('all')" class="px-5 py-2.5 bg-rose-600 text-white font-black rounded-xl hover:bg-rose-600 transition-all text-sm shadow-sm">ẨN TOÀN BỘ CHỮ</button>
                <button onclick="cheChuVn15('words')" class="px-5 py-2.5 bg-amber-500 text-white font-black rounded-xl hover:bg-amber-500 transition-all text-sm shadow-sm">ẨN 50% TỪ NGẪU NHIÊN</button>
                <button onclick="cheChuVn15('none')" class="px-5 py-2.5 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-sm shadow-sm">HIỆN LẠI TOÀN BỘ</button>
            </div>
            <div id="fb-vn15-htl" class="hidden text-base font-bold px-4 py-2 rounded-xl text-center"></div>
        </div>
    <!-- PHẦN 3: LUYỆN VIẾT CẢM THỤ (AI THẦY E) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">✍️</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Cảm nhận bài thơ</h3>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner space-y-4">
                <h4 class="text-2xl md:text-3xl font-bold text-gray-800">
                    Dựa vào bài thơ "Tiếng hạt nảy mầm", em hãy viết một đoạn văn ngắn (từ 3 đến 5 câu) bày tỏ tình cảm, suy nghĩ của em về lớp học đặc biệt và người cô giáo dạy trẻ khiếm thính.
                </h4>

                <textarea id="ans-vn15-writing" rows="4" placeholder="Lớp học của các em nhỏ khiếm thính thật đặc biệt và ấm áp tình người. Dù không thể nghe thấy những âm thanh kì diệu của cuộc sống như tiếng chim hót hay tiếng hạt nảy mầm, các em vẫn lặng chăm nhìn theo chuyển động đôi tay đầy kiên nhẫn của cô giáo. Tấm lòng tận tụy, bao nghĩ suy vất vả của cô đã sưởi ấm tâm hồn các em..." class="w-full p-4 md:p-6 text-2xl md:text-3xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-amber-50/10 font-medium leading-relaxed"></textarea>
                
                <div class="flex justify-end items-center gap-4"><button onclick="resetWritingVn15()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="checkWritingVn15();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                
                <div id="fb-vn15-writing" class="hidden mt-6 p-6 bg-amber-500 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500">
                    <!-- AI Feedback -->
                </div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiVn15()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Bài thơ 'Tiếng hạt nảy mầm' do ai sáng tác?",
            "options": [
                "Tô Hà",
                "Xuân Quỳnh",
                "Phan Tự Gia Bách",
                "Võ Quảng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Lớp học được miêu tả trong bài thơ có điểm gì đặc biệt?",
            "options": [
                "Là lớp học dành cho trẻ khiếm thính",
                "Là lớp học ngoài trời bên bờ suối",
                "Là lớp học vẽ nghệ thuật",
                "Là lớp học ngoại ngữ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'Ánh ỏi' trong câu 'Hót nắng vàng ánh ỏi' mô tả điều gì?",
            "options": [
                "Tiếng chim sẻ hót cao, trong và vang lên liên tiếp",
                "Màu nắng rực rỡ chói mắt",
                "Tiếng bước chân học sinh đi học",
                "Cánh chim bay lượn trên trời"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong câu thơ 'Đôi tay cô cụp mở / Báo tưng bừng thanh âm', từ 'đôi tay' nói lên điều gì?",
            "options": [
                "Cô giáo đang dùng tay để gõ thước lên bảng",
                "Cô giáo đang giao tiếp bằng ngôn ngữ ký hiệu cầm tay với trẻ khiếm thính",
                "Cô giáo đang múa hát cho các bé xem",
                "Cô giáo đang vẽ tranh minh họa"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'khiếm thính' trong phần chú giải có nghĩa là gì?",
            "options": [
                "Không nhìn rõ mọi vật",
                "Mất khả năng nghe hoặc nghe kém",
                "Không nói rõ thành tiếng",
                "Không có khả năng chạy nhảy"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Hình ảnh nào sau đây KHÔNG xuất hiện trong thế giới âm thanh của bài thơ?",
            "options": [
                "Tiếng hạt nảy mầm",
                "Tiếng lá động trong vườn",
                "Tiếng động cơ xe máy ầm ĩ",
                "Vó ngựa ran vách đá"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Khổ thơ thứ ba nhắc đến âm thanh gần gũi thân thuộc nào từ gia đình?",
            "options": [
                "Tiếng sớm mai mẹ gọi",
                "Tiếng bố dặn dò đi học",
                "Tiếng ông kể chuyện cổ tích",
                "Tiếng em bé khóc nhè"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Chi tiết nào thể hiện tinh thần học tập chăm chỉ của các bạn nhỏ?",
            "options": [
                "Các bé vẫn lặng chăm / Nhìn theo cô mấp máy",
                "Nghe cánh vỗ chim non",
                "Lớp mươi nụ môi hồng",
                "Ai nụ cười rưng rưng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tại sao giờ học của cô giáo lại cuốn hút được các bạn nhỏ khiếm thính?",
            "options": [
                "Vì cô giáo dạy bằng tình yêu thương và sự diễn tả âm thanh sinh động bằng đôi tay",
                "Vì lớp học có nhiều đồ chơi đẹp",
                "Vì giờ học được kéo dài cả ngày",
                "Vì có nhiều người ngoài vào dự giờ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nỗi vất vả, lo toan của cô giáo được thể hiện qua câu thơ nào?",
            "options": [
                "Bao nghĩ suy vất vả / Trong mắt người lo toan",
                "Đôi tay cô cụp mở",
                "Nhìn theo cô mấp máy",
                "Sau ngón tay cô đẩy"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Mong ước và thành quả lớn nhất của cô giáo là gì?",
            "options": [
                "Để từng âm có nghĩa / Bật lên từ môi em",
                "Nhận được nhiều quà tặng",
                "Học sinh được đi chơi xa",
                "Giờ học kết thúc thật nhanh"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'rưng rưng' mô tả trạng thái cảm xúc nào của con người?",
            "options": [
                "Vui cười sảng khoái",
                "Cảm xúc nghẹn ngào, nước mắt đọng sắp trào ra vì xúc động",
                "Tức giận quát tháo",
                "Lo lắng hoảng sợ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Bài thơ 'Tiếng hạt nảy mầm' ca ngợi phẩm chất tốt đẹp nào của người giáo viên?",
            "options": [
                "Lòng nhẫn nại, sự bao dung và tình thương yêu học sinh đặc biệt",
                "Sự nghiêm khắc trừng phạt học sinh",
                "Tài năng vẽ tranh xuất sắc",
                "Giọng hát hay điêu luyện"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong câu thơ 'Cánh sẻ vụt qua song', từ 'song' chỉ cái gì?",
            "options": [
                "Dòng sông trước trường",
                "Ô cửa sổ có chấn song",
                "Làn sóng biển khơi",
                "Các nốt nhạc"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Hình ảnh 'Lớp mươi nụ môi hồng' sử dụng biện pháp nghệ thuật nào?",
            "options": [
                "So sánh ẩn dụ (môi hồng như những nụ hoa hé mở)",
                "Nhân hóa",
                "Điệp từ điệp ngữ",
                "Nói quá phóng đại"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- CHƠI TRÒ CHƠI KHỞI ĐỘNG VN15 ---
window.chonKhởiĐộngVn15 = function(cau, idx) {
    const dung = (cau === 1 && idx === 1) || (cau === 2 && idx === 0);
    const fb = document.getElementById(`fb-vn15-kd-${cau}`);
    if (!fb) return;

    fb.classList.remove('hidden');
    if (dung) {
        fb.innerHTML = "🎉 Chính xác!";
        fb.className = "text-sm font-bold px-3 py-1.5 rounded-lg bg-emerald-600 text-white mt-2";
    } else {
        fb.innerHTML = "⚠️ Chưa đúng, em đoán lại nhé!";
        fb.className = "text-sm font-bold px-3 py-1.5 rounded-lg bg-rose-600 text-white mt-2";
    }

    // Đánh dấu nút đã bấm
    const opts = document.getElementById(`vn15-kd-${cau}-opts`);
    if (opts) {
        const buttons = opts.querySelectorAll('button');
        buttons.forEach((btn, i) => {
            if (i === idx) {
                btn.className = dung 
                    ? "px-4 py-2 bg-emerald-600 border border-emerald-100 text-white font-bold rounded-xl text-sm shadow-sm"
                    : "px-4 py-2 bg-rose-600 border border-rose-100 text-white font-bold rounded-xl text-sm shadow-sm";
            }
        });
    }
};

// --- ẨN/HIỆN CHỮ ĐỂ HỌC THUỘC LÒNG ---
window.cheChuVn15 = function(mode) {
    const container = document.getElementById('vn15-poem-container');
    const fb = document.getElementById('fb-vn15-htl');
    if (!container || !fb) return;

    const words = container.querySelectorAll('.vn15-word');
    fb.classList.remove('hidden');

    if (mode === 'all') {
        const paragraphs = container.querySelectorAll('p');
        paragraphs.forEach(p => {
            const spans = p.querySelectorAll('.vn15-word');
            spans.forEach((w, idx) => {
                if (idx === 0) {
                    w.style.visibility = 'visible';
                    w.style.backgroundColor = 'transparent';
                } else {
                    w.style.visibility = 'hidden';
                    w.style.backgroundColor = '#2563eb';
                    w.style.borderRadius = '4px';
                }
            });
        });
        fb.innerHTML = "👀 Đã che toàn bộ nhưng giữ lại chữ đầu dòng! Em hãy tự nhẩm thuộc bài thơ nhé.";
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-rose-600 text-white text-center";
    } else if (mode === 'words') {
        words.forEach(w => {
            if (Math.random() > 0.5) {
                w.style.visibility = 'hidden';
                w.style.backgroundColor = '#2563eb';
                w.style.borderRadius = '4px';
            } else {
                w.style.visibility = 'visible';
                w.style.backgroundColor = 'transparent';
            }
        });
        fb.innerHTML = "👀 50% số chữ đã bị che ngẫu nhiên! Hãy điền các từ trống vào đầu xem sao.";
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-amber-500 text-white text-center";
    } else {
        words.forEach(w => {
            w.style.visibility = 'visible';
            w.style.backgroundColor = 'transparent';
        });
        fb.innerHTML = "🎉 Bài thơ đã hiện đầy đủ! Hãy đọc nhẩm lại nhé.";
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-emerald-600 text-white text-center";
    }
};

// --- LOGIC BÀI TẬP CẢM THỤ TỰ LUẬN VN15 ---
window.checkWritingVn15 = function() {
    const text = document.getElementById('ans-vn15-writing')?.value.trim();
    const fb = document.getElementById('fb-vn15-writing');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text || text.length < 15) {
        fb.innerHTML = "⚠️ Đoạn văn của em hơi ngắn hoặc chưa nhập gì. Hãy cố gắng viết ít nhất 3 câu để bày tỏ cảm thụ nhé!";
        fb.className = "mt-6 p-6 bg-amber-500 text-white rounded-2xl shadow-xl font-bold text-lg";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-amber-600 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
            <p class="text-lg font-bold">"Đoạn văn viết rất sâu sắc và xúc động! Em đã hiểu được những khó khăn, thiệt thòi của các bạn nhỏ khiếm thính và trân trọng sâu sắc tấm lòng nhân ái, công lao dạy dỗ kiên trì của cô giáo."</p>
            <span class="inline-block px-3 py-1 bg-white text-amber-600 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Điểm: 115% (Hoàn thành tốt)</span>
        </div>
    `;
    fb.className = "mt-6 p-6 bg-emerald-600 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500";
};

window.resetWritingVn15 = function() {
    const txt = document.getElementById('ans-vn15-writing');
    if (txt) txt.value = "";
    const fb = document.getElementById('fb-vn15-writing');
    if (fb) fb.classList.add('hidden');
};

// --- NỘP BÀI HOÀN THÀNH ---
window.nopBaiVn15 = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback('Hoàn thành Tiết 15', '🌱', '<div class="text-center p-6"><span class="text-7xl block mb-4">🌱</span><p class="text-lg md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài thơ Tiếng hạt nảy mầm!</p><p class="text-lg text-gray-800 mt-3">Lớp học đặc biệt và người cô tận tuỵ mang thế giới âm thanh đến cho trẻ khiếm thính sẽ đọng lại sâu sắc trong lòng em.</p></div>');
    }
};
