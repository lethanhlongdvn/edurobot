export const lesson36 = {
    "topic": "Tiếng Việt 5",
    "week": "6",
    "period": "36",
    "title": "ĐỌC: HANG SƠN ĐOÒNG – NHỮNG ĐIỀU KÌ THÚ",
    "desc": "Bài học giúp học sinh khám phá vẻ đẹp kỳ vĩ, quy mô khổng lồ và hệ sinh thái độc nhất vô nhị của hang Sơn Đoòng - hang động tự nhiên lớn nhất thế giới tại Quảng Bình, Việt Nam, qua đó rèn luyện kĩ năng đọc hiểu và thuyết minh.",
    "subject": "Tiếng Việt",
    "theme": "Măng non",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-sky-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Đọc diễn cảm toàn bài, nhấn giọng vào các số liệu đặc trưng để nêu bật tính quy mô kỳ vĩ của hang Sơn Đoòng.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Hiểu được nguồn gốc hình thành, cấu trúc địa chất, hệ sinh thái độc đáo bên trong hang và niềm tự hào về kì quan đất nước.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Thực hành đóng vai làm hướng dẫn viên du lịch để thuyết minh giới thiệu kì quan Sơn Đoòng dựa vào dòng thời gian.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động: Nhà địa lý học nhí</h3>
        </div>
        
        <div class="p-6 bg-sky-50/30 rounded-3xl border border-sky-100 space-y-6 font-bold text-sky-800 text-lg md:text-xl" id="vn36-kd-box">
            <!-- Câu hỏi 1 -->
            <div id="q-kd-1" class="space-y-3">
                <p>❓ Câu hỏi 1: Hang Sơn Đoòng thuộc tỉnh nào của nước ta?</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <button onclick="checkVn36Kd(this, 1, false)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 text-base">A. Quảng Trị</button>
                    <button onclick="checkVn36Kd(this, 1, true)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 text-base">B. Quảng Bình</button>
                    <button onclick="checkVn36Kd(this, 1, false)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 text-base">C. Cao Bằng</button>
                </div>
            </div>

            <!-- Câu hỏi 2 (Ẩn mặc định, hiện sau khi đúng câu 1) -->
            <div id="q-kd-2" class="space-y-3 hidden border-t border-sky-100/50 pt-4">
                <p>❓ Câu hỏi 2: Hang Sơn Đoòng nằm ở Vườn quốc gia nổi tiếng nào của Việt Nam?</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <button onclick="checkVn36Kd(this, 2, true)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 text-base">A. Phong Nha - Kẻ Bàng</button>
                    <button onclick="checkVn36Kd(this, 2, false)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 text-base">B. Cát Bà</button>
                    <button onclick="checkVn36Kd(this, 2, false)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 text-base">C. Cúc Phương</button>
                </div>
            </div>
            
            <div id="fb-vn36-kd" class="hidden p-4 rounded-2xl text-lg font-black text-center transition-all duration-336"></div>
        </div>
    </div>

    <!-- 📖 BÀI ĐỌC CHÍNH -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl space-y-8">
        <div class="flex items-center justify-between border-b border-sky-100 pb-4">
            <span class="text-sky-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                <span>📖</span> Bài đọc: Hang Sơn Đoòng – Những điều kì thú
            </span>
            <button onclick="window.playSegmentAudio && window.playSegmentAudio('assets/audio/tiengviet/36/tiet36_hang_son_doong.mp3')" class="px-4 py-2 bg-sky-600 hover:bg-sky-600 text-sky-800 rounded-xl font-bold flex items-center gap-2 transition-all active:scale-95 text-lg">
                🔊 Nghe đọc mẫu
            </button>
        </div>

        <!-- Nội dung văn bản đọc mẫu -->
        <div class="bg-sky-50/10 p-6 md:p-10 rounded-3xl border border-sky-100 max-w-4xl mx-auto space-y-6">
            <h4 class="text-2xl md:text-5xl font-black text-center text-gray-800">Hang Sơn Đoòng – Những điều kì thú</h4>
            
            <!-- Grid Thẻ Thông Số Lớn -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 font-bold text-center">
                <div class="p-4 bg-sky-600 text-white rounded-2xl shadow-md">
                    <span class="block text-2xl md:text-5xl font-black">9 km</span>
                    <span class="text-xs opacity-90 block mt-1">Chiều dài</span>
                </div>
                <div class="p-4 bg-emerald-600 text-white rounded-2xl shadow-md">
                    <span class="block text-2xl md:text-5xl font-black">38.5tr m³</span>
                    <span class="text-xs opacity-90 block mt-1">Thể tích</span>
                </div>
                <div class="p-4 bg-amber-500 text-white rounded-2xl shadow-md">
                    <span class="block text-2xl md:text-5xl font-black">68 chiếc</span>
                    <span class="text-xs opacity-90 block mt-1">Boeing 736 chứa được</span>
                </div>
                <div class="p-4 bg-sky-600 text-white rounded-2xl shadow-md">
                    <span class="block text-2xl md:text-5xl font-black">40 tầng</span>
                    <span class="text-xs opacity-90 block mt-1">Chiều cao tòa nhà tương đương</span>
                </div>
            </div>

            <div class="serif-font text-gray-800 leading-relaxed text-justify space-y-6 text-xl md:text-4xl">
                <!-- Minh họa SGK (Góc trên bên phải, bấm vào phóng to) -->
                <div onclick="window.showMathFeedback('Hang Sơn Đoòng', '🏔️', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/36/36.jpg&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Hang Sơn Đoòng&quot;&gt;&lt;p class=&quot;text-2xl font-bold text-emerald-800 mt-4&quot;&gt;Kì quan thiên nhiên hùng vĩ trong lòng hang Sơn Đoòng với bức tường thạch nhũ tráng lệ.&lt;/p&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-gradient-to-br from-emerald-50 to-green-50 rounded-[32px] border-4 border-white shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group">
                    <img src="assets/images/tiengviet_5_1/36/36.jpg" class="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500" alt="Hang Sơn Đoòng">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Bấm để phóng to 🔍</div>
                </div>

                <p class="indent-8 font-medium">Hang Sơn Đoòng (Quảng Bình) được coi là một trong những tác phẩm tuyệt vời nhất của tạo hoá.</p>
                
                <!-- Section 1 -->
                <div class="p-6 bg-white rounded-2xl border-l-4 border-sky-100 shadow-sm space-y-2">
                    <h5 class="font-black text-sky-800 text-lg md:text-xl">📍 Sơn Đoòng được xác định có niên đại tới 5 triệu năm tuổi.</h5>
                    <p class="indent-8 font-medium text-gray-800">Hang Sơn Đoòng được hình thành từ một vết nứt gãy của dãy Trường Sơn, bị dòng nước sông Rào Thương bào mòn liên tục trong một khoảng thời gian dài (từ 2 đến 5 triệu năm). Quá trình đó đã tạo nên một “lỗ hổng khổng lồ” ngay dưới mặt đất.</p>
                </div>

                <!-- Section 2 -->
                <div class="p-6 bg-white rounded-2xl border-l-4 border-emerald-100 shadow-sm space-y-2">
                    <h5 class="font-black text-emerald-800 text-lg md:text-xl">📍 Sơn Đoòng là hang động tự nhiên lớn nhất thế giới.</h5>
                    <p class="indent-8 font-medium text-gray-800">Theo ước tính, hang động này có chiều dài lên tới 9 ki-lô-mét, thể tích 38,5 triệu mét khối. Nó có thể chứa tới 68 máy bay cỡ lớn Bô-inh 736 hoặc cả một khu phố sầm uất với những toà nhà cao 40 tầng.</p>
                </div>

                <!-- Section 3 -->
                <div class="p-6 bg-white rounded-2xl border-l-4 border-amber-100 shadow-sm space-y-2">
                    <h5 class="font-black text-amber-600 text-lg md:text-xl">📍 Sơn Đoòng sở hữu hệ sinh thái đặc biệt.</h5>
                    <p class="indent-8 font-medium text-gray-800">Trong hang Sơn Đoòng, có một khu rừng nguyên sinh tuyệt đẹp với thảm thực vật phong phú, khác lạ. Cây cối ở đây khá mỏng manh, dù là cây thân gỗ. Sơn Đoòng còn là nơi trú ngụ của nhiều loài động vật, trong đó có một số loài cá, nhện, cuốn chiếu, bọ cạp,... với đặc điểm chung là không có mắt và cơ thể trong suốt.</p>
                </div>

                <p class="indent-8 font-medium">Vẫn còn những điều bí ẩn về hang động lớn nhất hành tinh này chưa được giải mã. Liệu những điều trên có đủ khiến bạn muốn đặt chân tới nơi này một lần trong đời?</p>
                <p class="text-right italic font-sans text-base text-gray-800">(Phan Nguyên tổng hợp)</p>
            </div>
            
            <!-- Từ ngữ -->
            <div class="mt-6 p-4 bg-amber-50/50 rounded-2xl border border-amber-100 text-lg md:text-xl font-semibold text-amber-600">
                👉 <strong>Từ ngữ:</strong> <em>Rừng nguyên sinh:</em> rừng tự nhiên chưa hoặc ít bị tác động bởi con người, chưa làm thay đổi cấu trúc của rừng.
            </div>
        </div>
    </div>

    <!-- 💡 Ý nghĩa / Thông điệp bài học -->
    <div class="p-8 rounded-[36px] bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-xl relative overflow-hidden mt-6">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <h4 class="text-xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
            <span>💡</span> Nội dung chính bài học
        </h4>
        <div class="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p class="text-xl md:text-4xl font-bold leading-relaxed text-center italic">
                "Bài văn ca ngợi vẻ đẹp kì vĩ, quy mô khổng lồ và hệ sinh thái độc đáo bên trong hang Sơn Đoòng - kì quan tự nhiên lớn nhất thế giới của Việt Nam, qua đó khơi dậy niềm tự hào về non sông đất nước."
            </p>
        </div>
    </div>

    <!-- 🌌 TRIỂN LÃM ẢNH ẢO: KÌ QUAN TRONG LÒNG HANG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🌌</div>
            <div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Triển lãm ảo: Khám phá kì quan Sơn Đoòng</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Em hãy bấm chọn các địa danh trong hang dưới đây để chiêm ngưỡng những điều kì thú bên trong:</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-bold text-sky-800 text-center">
            <!-- Hố sụt Eden -->
            <div class="p-6 bg-sky-50/50 border border-sky-100 rounded-3xl shadow-sm flex flex-col justify-between min-h-[320px]">
                <div>
                    <div onclick="window.showMathFeedback('Vườn Địa Đàng', '🌳', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-sky-50 to-emerald-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/36/Hố sụp (Sơn Đoòng).avif&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Vườn Địa Đàng&quot;&gt;&lt;p class=&quot;text-2xl md:text-3xl font-bold text-sky-800 mt-4&quot;&gt;Hố sụt Eden khổng lồ đưa ánh nắng mặt trời chiếu xuống khu rừng nguyên sinh tươi tốt.&lt;/p&gt;&lt;/div&gt;')" class="mb-4 w-full h-44 bg-sky-100 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 active:scale-95 transition-all relative group shadow-sm">
                        <img src="assets/images/tiengviet_5_1/36/Hố sụp (Sơn Đoòng).avif" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" alt="Vườn Địa Đàng">
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Phóng to 🔍</div>
                    </div>
                    <h4 class="font-black text-lg text-sky-800">Vườn Địa Đàng (Hố sụt Eden)</h4>
                    <p class="text-sm font-medium text-gray-800 mt-2 text-justify">Là hố sụt khổng lồ có ánh sáng mặt trời lọt vào, hình thành nên một khu rừng nguyên sinh tươi tốt tuyệt đẹp ngay giữa lòng hang động sâu thẳm.</p>
                </div>
            </div>

            <!-- Bức tường Việt Nam -->
            <div class="p-6 bg-emerald-50/50 border border-emerald-100 rounded-3xl shadow-sm flex flex-col justify-between min-h-[320px]">
                <div>
                    <div onclick="window.showMathFeedback('Bức Tường Việt Nam', '🧱', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/36/buc-tuong-viet-nam.jpg&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Bức Tường Việt Nam&quot;&gt;&lt;p class=&quot;text-2xl md:text-3xl font-bold text-emerald-800 mt-4&quot;&gt;Khối thạch nhũ thẳng đứng cao 90m nằm ở đoạn cuối của hang động Sơn Đoòng.&lt;/p&gt;&lt;/div&gt;')" class="mb-4 w-full h-44 bg-emerald-100 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 active:scale-95 transition-all relative group shadow-sm">
                        <img src="assets/images/tiengviet_5_1/36/buc-tuong-viet-nam.jpg" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" alt="Bức Tường Việt Nam">
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Phóng to 🔍</div>
                    </div>
                    <h4 class="font-black text-lg text-emerald-800">Bức Tường Việt Nam</h4>
                    <p class="text-sm font-medium text-gray-800 mt-2 text-justify">Khối thạch nhũ khổng lồ thẳng đứng cao tới 90 mét nằm ở đoạn cuối của hang động, được ví như bức vách hùng vĩ thử thách mọi nhà thám hiểm.</p>
                </div>
            </div>

            <!-- Ngọc động -->
            <div class="p-6 bg-amber-50/50 border border-amber-100 rounded-3xl shadow-sm flex flex-col justify-between min-h-[320px]">
                <div>
                    <div onclick="window.showMathFeedback('Ngọc Động', '🔮', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/36/ngoc-hang-dong-son-doong.webp&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Ngọc Động&quot;&gt;&lt;p class=&quot;text-2xl md:text-3xl font-bold text-orange-800 mt-4&quot;&gt;Các viên ngọc động tự nhiên hình thành do nước nhỏ giọt ngàn năm lăn qua lớp đất cát.&lt;/p&gt;&lt;/div&gt;')" class="mb-4 w-full h-44 bg-amber-100 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 active:scale-95 transition-all relative group shadow-sm">
                        <img src="assets/images/tiengviet_5_1/36/ngoc-hang-dong-son-doong.webp" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" alt="Ngọc Động">
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Phóng to 🔍</div>
                    </div>
                    <h4 class="font-black text-lg text-amber-600">Ngọc Động (Cave Pearls)</h4>
                    <p class="text-sm font-medium text-gray-800 mt-2 text-justify">Các viên ngọc thạch nhũ hình tròn to như quả bóng chày, tự nhiên hình thành do nước nhỏ giọt ngàn năm lăn qua lớp đất cát lắng đọng tạo thành.</p>
                </div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- ❓ HỎI ĐÁP ĐỌC HIỂU -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">❓</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Câu hỏi Đọc hiểu (Trang 80)</h3>
            </div>
            <div class="space-y-4">

        <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
            <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                    1. Những câu được in đậm trong văn bản cho biết điều gì?
                </span>
                <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                    <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </summary>
            <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-bold text-lg md:text-3xl">
                Cho biết nội dung khái quát, ý chính nổi bật nhất của mỗi đoạn văn trong bài viết (về tuổi đời kiến tạo, về quy mô kích thước và về đặc trưng sinh thái của hang).
            </div>
        </details>

        <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
            <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                    2. Quá trình hình thành hang Sơn Đoòng được giới thiệu như thế nào?
                </span>
                <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                    <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </summary>
            <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-bold text-lg md:text-3xl">
                Sơn Đoòng được hình thành từ một vết nứt gãy của dãy Trường Sơn, sau đó bị dòng nước sông Rào Thương chảy qua bào mòn liên tục trong khoảng thời gian từ 2 đến 5 triệu năm tạo nên một lỗ hổng khổng lồ dưới lòng đất.
            </div>
        </details>

        <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
            <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                    3. Những chi tiết nào cho thấy hang Sơn Đoòng rất lớn?
                </span>
                <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                    <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </summary>
            <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-bold text-lg md:text-3xl">
                Các con số khổng lồ: chiều dài lên tới 9km, thể tích 38,5 triệu mét khối. So sánh tương đương có thể chứa tới 68 máy bay cỡ lớn Boeing 736 hoặc chứa được cả một khu phố đông đúc với những tòa nhà chọc trời cao 40 tầng.
            </div>
        </details>

        <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
            <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                    4. Nêu những điều đặc biệt của hệ sinh thái trong hang Sơn Đoòng.
                </span>
                <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                    <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </summary>
            <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-bold space-y-2 text-lg md:text-3xl">
                <p>✔️ Có một khu rừng nguyên sinh tươi tốt phát triển ngay trong hang.</p>
                <p>✔️ Cây cối khá mỏng manh dù là cây thân gỗ do sống thiếu ánh nắng mặt trời trực tiếp.</p>
                <p>✔️ Nhiều động vật (cá, nhện, cuốn chiếu, bọ cạp) thích nghi với bóng tối tuyệt đối có đặc điểm kỳ lạ là không có mắt và cơ thể trong suốt.</p>
            </div>
        </div>
    </section>

    <!-- ✍️ VẬN DỤNG: ĐÓNG VAI HƯỚNG DẪN VIÊN DU LỊCH -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎤</div>
            <div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">5. Đóng vai Hướng dẫn viên du lịch giới thiệu Sơn Đoòng</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Dưới đây là gợi ý các mốc thời gian vinh danh Sơn Đoòng. Em hãy nhấp chuột để đưa nhanh mốc dữ kiện vào bài viết nhé:</p>
            </div>
        </div>

        <!-- 3 Thẻ mốc thời gian click-to-copy -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 font-bold text-center">
            <div onclick="copTimeline36('Năm 2013, Sơn Đoòng được ghi nhận là hang động tự nhiên lớn nhất thế giới.')" class="p-4 bg-emerald-50 hover:bg-emerald-600 rounded-2xl border border-emerald-100 cursor-pointer text-emerald-800 transition-all active:scale-95">
                <span class="block text-emerald-900 font-black text-xl mb-1">📅 Năm 2013</span>
                Đạt kỉ lục hang động tự nhiên lớn nhất hành tinh.
            </div>
            <div onclick="copTimeline36('Năm 2014, Sơn Đoòng được bình chọn là một trong 52 điểm du lịch hấp dẫn nhất thế giới.')" class="p-4 bg-blue-50 hover:bg-blue-600 rounded-2xl border border-blue-100 cursor-pointer text-blue-600 transition-all active:scale-95">
                <span class="block text-blue-600 font-black text-xl mb-1">📅 Năm 2014</span>
                Top 52 điểm đến du lịch hấp dẫn nhất thế giới.
            </div>
            <div onclick="copTimeline36('Năm 2020, Sơn Đoòng được vinh danh là một trong 20 kì quan phá vỡ kỉ lục tự nhiên.')" class="p-4 bg-amber-50 hover:bg-amber-500 rounded-2xl border border-amber-100 cursor-pointer text-amber-600 transition-all active:scale-95">
                <span class="block text-amber-900 font-black text-xl mb-1">📅 Năm 2020</span>
                Top 20 kì quan phá vỡ kỉ lục tự nhiên toàn cầu.
            </div>
        </div>

        <!-- Khung soạn bài giới thiệu -->
        <div class="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-4 font-bold">
            <div class="space-y-2">
                <label class="text-gray-800 text-sm block">✍️ Viết lời thuyết minh giới thiệu của hướng dẫn viên du lịch gửi du khách quốc tế:</label>
                <textarea id="ans-vn36-writing" rows="5" placeholder="Kính chào quý khách! Hôm nay, tôi xin giới thiệu đến các bạn hang Sơn Đoòng tại Quảng Bình, Việt Nam..." class="w-full p-4 border border-gray-100 rounded-2xl bg-white text-xl md:text-2xl focus:border-sky-500 focus:ring-1 focus:ring-sky-600 outline-none shadow-sm"></textarea>
            </div>
            
            <div class="flex justify-start gap-3">
                <button onclick="checkWritingVn36()" class="px-8 py-3.5 bg-sky-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-sky-600 active:scale-95 transition-all">NỘP BÀI THUYẾT MINH</button>
                <button onclick="resetWritingVn36()" class="px-6 py-3.5 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition-all text-base">LÀM LẠI</button>
            </div>
            <div id="fb-vn36-thuyetminh" class="hidden p-5 rounded-2xl text-base font-bold shadow-md transition-all duration-336"></div>
        </div>

        <div class="pt-6 flex justify-center">
            <button onclick="submitVn36Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
                <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
                <span>HOÀN THÀNH TIẾT HỌC</span>
            </button>
        </div>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Hang Sơn Đoòng nằm ở tỉnh nào của nước Việt Nam ta?",
            "options": [
                "Cao Bằng",
                "Quảng Bình",
                "Quảng Trị",
                "Lâm Đồng"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Đặc điểm kiến tạo ban đầu hình thành nên hang Sơn Đoòng là gì?",
            "options": [
                "Hình thành từ một vết nứt gãy của dãy núi Trường Sơn",
                "Do con người đào sâu xuống núi đá vôi",
                "Hình thành từ một vụ nổ núi lửa cổ đại",
                "Do hoạt động sụt lún sa mạc cát"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Dòng sông ngầm nào có vai trò chính bào mòn đá tạo thành hang Sơn Đoòng?",
            "options": [
                "Sông Hương",
                "Sông Gianh",
                "Sông Rào Thương",
                "Sông Thu Bồn"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Niên đại hình thành của hang Sơn Đoòng được xác định khoảng bao lâu?",
            "options": [
                "Từ 2 đến 5 vạn năm tuổi",
                "Từ 2 đến 5 triệu năm tuổi",
                "Khoảng 5 trăm năm tuổi",
                "Khoảng 50 triệu năm tuổi"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Theo ước tính của các nhà khoa học, chiều dài của hang Sơn Đoòng lên tới bao nhiêu?",
            "options": [
                "5 ki-lô-mét",
                "9 ki-lô-mét",
                "15 ki-lô-mét",
                "40 ki-lô-mét"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Thể tích không gian của hang Sơn Đoòng đạt bao nhiêu triệu mét khối?",
            "options": [
                "9 triệu mét khối",
                "38,5 triệu mét khối",
                "52 triệu mét khối",
                "68 triệu mét khối"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Hình ảnh so sánh nào mô tả sức chứa khổng lồ của lòng hang Sơn Đoòng?",
            "options": [
                "Có thể chứa tới 68 máy bay cỡ lớn Boeing 736 hoặc cả khu phố với nhà cao 40 tầng",
                "Có thể chứa được toàn bộ người dân thủ đô Hà Nội",
                "Có thể chứa được hàng ngàn đoàn tàu hỏa chạy song song",
                "Đủ lớn để các loài voi rừng Tây Nguyên chạy đua"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tại sao các loài thực vật, cây gỗ trong hang Sơn Đoòng thường có đặc điểm mỏng manh?",
            "options": [
                "Do thiếu chất dinh dưỡng trong lòng đất đá",
                "Do sống thiếu ánh nắng mặt trời trực tiếp trong lòng hang",
                "Do bị nước bào mòn liên tục",
                "Do các loài côn trùng cắn phá ngọn cây"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đặc điểm chung kỳ lạ của các loài cá, nhện, rết sống ở lòng hang tối là gì?",
            "options": [
                "Chúng có kích thước khổng lồ",
                "Không có mắt và cơ thể trong suốt",
                "Lông có màu vàng óng sặc sỡ",
                "Chuyền cành nhanh như tia chớp"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Mốc thời gian nào ghi dấu Sơn Đoòng được ghi nhận là hang động tự nhiên lớn nhất thế giới?",
            "options": [
                "Năm 1936",
                "Năm 2036",
                "Năm 2036",
                "Năm 2036"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Mốc thời gian nào ghi dấu Sơn Đoòng lọt top 52 điểm du lịch hấp dẫn nhất thế giới?",
            "options": [
                "Năm 2036",
                "Năm 2036",
                "Năm 2036",
                "Năm 2036"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Mốc thời gian nào ghi nhận Sơn Đoòng là 1 trong 20 kì quan phá vỡ kỉ lục tự nhiên?",
            "options": [
                "Năm 2036",
                "Năm 2036",
                "Năm 2036",
                "Năm 2036"
            ],
            "answer": 3,
            "level": 0
        },
        {
            "question": "Từ 'rừng nguyên sinh' được giải thích nghĩa là gì?",
            "options": [
                "Rừng nhân tạo do con người trồng mới hoàn toàn",
                "Rừng tự nhiên chưa hoặc ít bị tác động bởi con người, chưa làm thay đổi cấu trúc",
                "Khu bảo tồn động vật nuôi nhốt",
                "Rừng cây bụi thưa thớt rụng lá mùa khô"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Kỳ quan 'Bức tường Việt Nam' trong hang Sơn Đoòng có chiều cao bao nhiêu?",
            "options": [
                "40 mét",
                "52 mét",
                "90 mét",
                "136 mét"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Vườn quốc gia Phong Nha - Kẻ Bàng được UNESCO công nhận là Di sản thiên nhiên thế giới vì tiêu chí nào?",
            "options": [
                "Có diện tích rừng trồng tràm lớn nhất",
                "Địa chất, địa hình kiến tạo đá vôi cổ xưa kỳ vĩ độc đáo",
                "Chứa nhiều bãi cát trắng ven biển nhất",
                "Nổi tiếng với nền ẩm thực cung đình Huế cổ xưa"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- LOGIC CHO TRÒ CHƠI KHỞI ĐỘNG ---
let kdAttempted36_1 = false;
let kdAttempted36_2 = false;

window.checkVn36Kd = function(btn, qNum, isCorrect) {
    const fb = document.getElementById("fb-vn36-kd");
    if (!fb) return;
    fb.classList.remove("hidden");

    if (qNum === 1) {
        if (kdAttempted36_1) return;
        if (isCorrect) {
            btn.className = "p-4 bg-emerald-600 text-white border-2 border-emerald-100 rounded-2xl font-black text-base transition-all cursor-default";
            fb.innerHTML = "🎉 Chính xác! Sơn Đoòng thuộc tỉnh Quảng Bình miền Trung đất nước ta! Chuẩn bị sang câu hỏi 2...";
            fb.className = "p-4 rounded-2xl text-lg font-black text-center bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4 transition-all";
            kdAttempted36_1 = true;
            
            setTimeout(() => {
                const q2 = document.getElementById("q-kd-2");
                if (q2) q2.classList.remove("hidden");
                fb.classList.add("hidden");
            }, 2036);
        } else {
            btn.className = "p-4 bg-rose-600 text-white border-2 border-rose-100 rounded-2xl font-black text-base transition-all cursor-default scale-95";
            fb.innerHTML = "❌ Chưa đúng! Sơn Đoòng nằm ở dải đất miền Trung eo hẹp của nước ta đó!";
            fb.className = "p-4 rounded-2xl text-lg font-black text-center bg-rose-50 text-rose-800 border border-rose-100 mt-4 transition-all";
            setTimeout(() => {
                btn.className = "p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 text-base transition-all active:scale-95";
                fb.classList.add("hidden");
            }, 2036);
        }
    } else if (qNum === 2) {
        if (kdAttempted36_2) return;
        if (isCorrect) {
            btn.className = "p-4 bg-emerald-600 text-white border-2 border-emerald-100 rounded-2xl font-black text-base transition-all cursor-default";
            fb.innerHTML = "🎉 Tuyệt vời! Sơn Đoòng nằm trong Vườn quốc gia Phong Nha - Kẻ Bàng, di sản thiên nhiên thế giới!";
            fb.className = "p-4 rounded-2xl text-lg font-black text-center bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4 transition-all";
            kdAttempted36_2 = true;
            if (typeof window.showMathFeedback === 'function') {
                window.showMathFeedback("Chính xác hoàn toàn", "🏔️", "Chúc mừng em đã trả lời đúng cả 2 câu hỏi khởi động!");
            }
        } else {
            btn.className = "p-4 bg-rose-600 text-white border-2 border-rose-100 rounded-2xl font-black text-base transition-all cursor-default scale-95";
            fb.innerHTML = "❌ Chưa đúng rồi! Hãy nhớ đến động Phong Nha rất nổi tiếng ở Quảng Bình nhé!";
            fb.className = "p-4 rounded-2xl text-lg font-black text-center bg-rose-50 text-rose-800 border border-rose-100 mt-4 transition-all";
            setTimeout(() => {
                btn.className = "p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 text-base transition-all active:scale-95";
                fb.classList.add("hidden");
            }, 2036);
        }
    }
};


// --- LOGIC ĐÓNG VAI HƯỚNG DẪN VIÊN ---
window.copTimeline36 = function(text) {
    const area = document.getElementById("ans-vn36-writing");
    if (!area) return;

    if (area.value === "") {
        area.value = "Kính chào quý khách! Tôi là hướng dẫn viên du lịch hôm nay. Tôi xin giới thiệu về hang Sơn Đoòng: " + text;
    } else {
        area.value = area.value.trim() + " " + text;
    }
    
    if (typeof window.UI?.showToast === 'function') {
        window.UI.showToast("Đã chèn dữ kiện sự kiện!", "success", 2036);
    }
};

window.checkWritingVn36 = function() {
    const txt = document.getElementById("ans-vn36-writing").value.trim();
    const fb = document.getElementById("fb-vn36-thuyetminh");
    if (!fb) return;
    fb.classList.remove("hidden");

    if (txt.length < 20) {
        fb.innerHTML = "⚠️ Em hãy đóng vai hướng dẫn viên du lịch viết bài nói dài hơn 20 ký tự để đón tiếp du khách nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-336";
        return;
    }

    // Kiểm tra kiểm duyệt mốc năm sự kiện
    const containsYear = txt.includes("2013") || txt.includes("2014") || txt.includes("2020");
    if (!containsYear) {
        fb.innerHTML = "⚠️ Hướng dẫn viên du lịch ơi! Hãy đưa thêm ít nhất một mốc sự kiện quan trọng (như năm 2013, 2014, hoặc 2020) ở bảng gợi ý dòng thời gian vào bài thuyết minh để du khách hiểu rõ hơn thành tích của Sơn Đoòng nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-336";
        return;
    }

    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-800">AI Thầy E nhận xét & Chấm điểm:</h5>
                <p class="text-lg mb-2">Thật lôi cuốn! Em đã đóng vai một hướng dẫn viên du lịch vô cùng tự tin, thân thiện và am hiểu địa lý. Bài thuyết minh đưa ra đầy đủ dẫn chứng lịch sử, năm kỉ lục và diễn tả sinh động sự kỳ vĩ của Sơn Đoòng.</p>
                <span class="px-3 py-1 bg-emerald-600 rounded-lg font-bold text-lg md:text-3xl">Xếp loại: Xuất sắc - Đạt 136%</span>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-emerald-600 text-white transition-all duration-336";
};

window.resetWritingVn36 = function() {
    const area = document.getElementById("ans-vn36-writing");
    if (area) area.value = "";
    const fb = document.getElementById("fb-vn36-thuyetminh");
    if (fb) fb.classList.add("hidden");
};

// --- HOÀN THÀNH TIẾT HỌC TOÀN CỤC ---
window.submitVn36Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback('Hoàn thành Tiết 36', '🏔️', '<div class="text-center p-6"><span class="text-7xl block mb-4">🏔️</span><p class="text-2xl md:text-3xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài học Hang Sơn Đoòng – Những điều kì thú!</p><p class="text-xl text-gray-800 mt-3">Sự kỳ vĩ và hệ sinh thái độc đáo của Sơn Đoòng là niềm tự hào chung của con người Việt Nam chúng ta với thế giới.</p></div>');
    }
};
