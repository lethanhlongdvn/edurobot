export const lesson92 = {
    "topic": "Tiếng Việt 5",
    "week": "14",
    "period": "92",
    "title": "ĐỌC: TIẾNG ĐÀN BA-LA-LAI-CA TRÊN SÔNG ĐÀ",
    "desc": "Bài thơ khắc họa hình ảnh đẹp đẽ, trữ tình của đêm trăng trên công trường thủy điện sông Đà hòa quyện cùng âm thanh đàn ba-la-lai-ca kiêu sa, thể hiện tình hữu nghị thắm thiết Việt - Xô.",
    "subject": "Đọc",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
<div class="flex justify-end mb-4">
    <button onclick="playSegmentAudio('assets/audio/tiengviet/92/tieng_dan_ba_la_lai_ca_tren_song_da.mp3')" class="p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc toàn bài">
        <span class="text-xl">🔊 Nghe đọc mẫu</span>
    </button>
</div>
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
                Đọc diễn cảm bài thơ với giọng nhẹ nhàng, trầm lắng, thể hiện được vẻ đẹp lãng mạn của đêm trăng sông Đà.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Cảm nhận được sự hòa quyện tuyệt diệu giữa thiên nhiên đêm trăng tĩnh mịch và âm thanh tiếng đàn ba-la-lai-ca kỳ diệu.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Hiểu ý nghĩa biểu tượng của hình ảnh công trường xây dựng thủy điện và tình hữu nghị khăng khít giữa nhân dân hai nước Việt - Xô.
            </li>
        </ul>
    </div>

    <!-- 🚀 Khởi động: Sức mạnh của âm nhạc -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl space-y-6">
        <h3 class="text-2xl md:text-5xl font-black text-sky-800 border-b border-sky-100 pb-4 flex items-center gap-3">
            <span class="text-3xl">🚀</span>
            Khởi động: Ý nghĩa của âm nhạc
        </h3>
        <p class="text-lg text-gray-700 font-bold leading-relaxed">
            Trao đổi với bạn: Theo em, âm nhạc có ý nghĩa như thế nào đối với cuộc sống của con người? Hãy chia sẻ ý kiến ngắn gọn của em để bắt đầu bài học nhé:
        </p>
        <div class="max-w-3xl mx-auto space-y-4 pt-2">
            <input type="text" id="warmup-music-input" placeholder="Ví dụ: Giúp giải tỏa căng thẳng, kết nối mọi người lại với nhau..." class="w-full p-4 border-2 border-sky-100 rounded-2xl outline-none focus:border-sky-500 font-bold bg-sky-50/10 text-lg md:text-xl shadow-inner">
            <div class="flex justify-center">
                <button onclick="startWarmupVn92()" class="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-black text-lg rounded-2xl shadow-lg hover:shadow-xl active:scale-95 transition-all">GỬI CHO THẦY E ✉️</button>
            </div>
            <div id="warmup-feedback-92" class="hidden p-5 rounded-3xl border-2 font-bold text-lg text-center shadow-lg transition-all animate-bounce-slow"></div>
        </div>
    </div>

    <!-- 📖 Đọc bài & Học thuộc lòng thơ -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl space-y-6 relative">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-sky-100 pb-6 text-lg md:text-3xl">
            <div>
                <span class="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Tác phẩm thơ</span>
                <h3 class="text-3xl font-black text-sky-900 mt-2">TIẾNG ĐÀN BA-LA-LAI-CA TRÊN SÔNG ĐÀ</h3>
            </div>
            <button onclick="window.speakText && window.speakText('Tiếng đàn ba la lai ca, Như ngọn gió bình yên, Thổi qua rừng bạch dương dịu dặt... Tiếng đàn ba la lai ca, Như ngọn sóng, Vỗ trắng phau ghềnh đá...')" 
                    class="px-5 py-3 bg-sky-50 hover:bg-sky-100 text-sky-700 font-black rounded-2xl flex items-center gap-2 border border-sky-100 shadow-sm active:scale-95 transition-all text-base">
                <span>🔊 Nghe đọc mẫu</span>
            </button>
        </div>

        <!-- Công cụ điều khiển Học thuộc lòng -->
        <div class="flex flex-wrap items-center justify-center gap-3 bg-sky-50/50 p-4 rounded-3xl border border-sky-100">
            <span class="text-sm font-black text-sky-900 uppercase">🧠 Luyện học thuộc lòng:</span>
            <button onclick="harnessPoemCheVn92(0)" class="px-4 py-2 bg-white hover:bg-sky-100 text-sky-700 border-2 border-sky-200 font-black rounded-xl text-sm transition-all shadow-sm">Hiển thị hết</button>
            <button onclick="harnessPoemCheVn92(30)" class="px-4 py-2 bg-white hover:bg-sky-100 text-sky-700 border-2 border-sky-200 font-black rounded-xl text-sm transition-all shadow-sm">Che 30%</button>
            <button onclick="harnessPoemCheVn92(60)" class="px-4 py-2 bg-white hover:bg-sky-100 text-sky-700 border-2 border-sky-200 font-black rounded-xl text-sm transition-all shadow-sm">Che 60%</button>
            <button onclick="harnessPoemCheVn92(100)" class="px-4 py-2 bg-white hover:bg-sky-100 text-sky-700 border-2 border-sky-200 font-black rounded-xl text-sm transition-all shadow-sm">Che 100%</button>
        </div>

        <div class="space-y-8">
            <div class="w-full bg-sky-50/10 p-6 md:p-8 rounded-[40px] border border-sky-100/50 shadow-inner relative overflow-hidden">
                <!-- Ảnh minh họa cô gái Nga chơi đàn (bấm phóng to) -->
                <div onclick="window.showMathFeedback('Cô gái Nga chơi đàn', '🎹', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/92/92.png&quot; class=&quot;max-h-[75vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Cô gái Nga chơi đàn ba-la-lai-ca trên sông Đà&quot;&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-white p-4 rounded-3xl border border-sky-100 shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group border-4 border-white">
                    <img src="assets/images/tiengviet_5_1/92/92.png" alt="Cô gái Nga chơi đàn ba-la-lai-ca" class="w-full h-auto object-cover group-hover:scale-105 transition-all duration-500">
                    <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span class="px-4 py-2 bg-white/95 rounded-full text-xs font-black text-sky-800 shadow-md">🔍 PHÓNG TO</span>
                    </div>
                    <p class="text-[10px] text-gray-800 font-bold text-center mt-3 leading-tight">Cô gái Nga chơi đàn bên sông Đà (Trang 122 SGK)</p>
                </div>

                <div id="vn92-poem-container" class="serif-font text-gray-800 leading-relaxed space-y-6 md:columns-2 gap-8 text-xl md:text-4xl">
                    <!-- Sẽ được điền bằng script tự động -->
                </div>
            </div>

            <!-- Các khối thông tin bổ trợ đặt bên dưới dạng lưới thích ứng -->
            <div class="grid grid-cols-1 gap-6">
                <!-- Chú giải từ khó -->
                <div class="bg-amber-50/70 p-6 md:p-8 rounded-[28px] border-2 border-dashed border-amber-200">
                    <p class="text-xs font-black text-amber-600 uppercase tracking-widest mb-3 flex items-center gap-1">
                        <span>📝</span> Chú thích
                    </p>
                    <ul class="space-y-4 text-lg md:text-xl text-amber-600 font-bold leading-relaxed">
                        <li>• <strong>Xe ben</strong>: xe tải, thùng xe có thể điều khiển cho dốc hẳn xuống để đổ vật liệu.</li>
                        <li>• <strong>Sông Đà</strong>: phụ lưu lớn nhất của sông Hồng, nơi xây dựng nhà máy thủy điện Hòa Bình.</li>
                        <li>• <strong>Ba-la-lai-ca</strong>: tên một loại đàn 3 dây truyền thống nổi tiếng của người Nga.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


    <!-- 💡 Nội dung chính bài học -->
    <div class="bg-gradient-to-r from-sky-600 to-blue-500 p-8 rounded-[36px] text-white shadow-2xl border-4 border-sky-100 relative overflow-hidden animate-in slide-in-from-bottom duration-500">
        <div class="absolute right-0 bottom-0 translate-x-10 translate-y-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
        <div class="relative z-10 space-y-4">
            <h4 class="text-2xl md:text-5xl font-black flex items-center gap-3">
                <span class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">💡</span>
                Nội dung chính bài học
            </h4>
            <p class="text-lg md:text-2xl font-bold leading-relaxed text-sky-50">
                Bài thơ khắc họa vẻ đẹp kỳ vĩ, tráng lệ của công trường xây dựng thủy điện sông Đà dưới đêm trăng cùng tiếng đàn ba-la-lai-ca ngân vang. Qua đó thể hiện tình hữu nghị Việt - Xô bền chặt và niềm tin tưởng, tự hào của tác giả về tương lai phát triển tươi sáng của đất nước.
            </p>
        </div>
    </div>
</div>`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 TÌM HIỂU BÀI (Câu 1-4 SGK) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl space-y-8">
        <h3 class="text-2xl md:text-5xl font-black text-sky-800 border-b border-sky-100 pb-4 flex items-center gap-3">
            <span class="text-3xl">📝</span>
            Tìm hiểu bài học
        </h3>

        <!-- Câu hỏi 1 -->
        <div class="space-y-4">
            <h4 class="text-xl font-black text-gray-800 flex items-start gap-2">
                <span class="w-7 h-7 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center text-sm shrink-0 mt-0.5">1</span>
                Tiếng đàn ba-la-lai-ca được miêu tả thế nào qua 8 dòng thơ đầu?
            </h4>
            <div class="space-y-3 max-w-4xl mx-auto">
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-sky-50/50 rounded-2xl border border-slate-100 cursor-pointer transition-all">
                    <input type="radio" name="vn92-c1" value="A" class="w-5 h-5 text-sky-600 focus:ring-sky-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">Miêu tả tiếng đàn dồn dập, đinh tai nhức óc làm náo động cả rừng bạch dương.</span>
                </label>
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-sky-50/50 rounded-2xl border border-slate-100 cursor-pointer transition-all">
                    <input type="radio" name="vn92-c1" value="B" class="w-5 h-5 text-sky-600 focus:ring-sky-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">Được miêu tả nhẹ nhàng như ngọn gió bình yên thổi qua rừng bạch dương dịu dặt; và cuồn cuộn như ngọn sóng vỗ trắng phau ghềnh đá tạo cảm giác náo nức, khát khao của những dòng sông tìm về biển cả.</span>
                </label>
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-sky-50/50 rounded-2xl border border-slate-100 cursor-pointer transition-all">
                    <input type="radio" name="vn92-c1" value="C" class="w-5 h-5 text-sky-600 focus:ring-sky-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">Được miêu tả mộc mạc như tiếng suối chảy, lúc ẩn lúc hiện trong không gian tĩnh lặng.</span>
                </label>
            </div>
            <div class="flex justify-center pt-2">
                <button onclick="checkC1Vn92()" class="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-xl shadow active:scale-95 transition-all">NỘP BÀI ✓</button>
            </div>
            <div id="fb-c1" class="hidden p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner"></div>
        </div>

        <!-- Câu hỏi 2 -->
        <div class="space-y-4 border-t border-sky-50 pt-6">
            <h4 class="text-xl font-black text-gray-800 flex items-start gap-2">
                <span class="w-7 h-7 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center text-sm shrink-0 mt-0.5">2</span>
                Tác giả đã nghe tiếng đàn ba-la-lai-ca trong khung cảnh đêm trăng trên công trường như thế nào?
            </h4>
            <div class="space-y-3 max-w-4xl mx-auto">
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-sky-50/50 rounded-2xl border border-slate-100 cursor-pointer transition-all">
                    <input type="radio" name="vn92-c2" value="A" class="w-5 h-5 text-sky-600 focus:ring-sky-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">Trong đêm trăng chơi vơi tĩnh lặng, lúc cả công trường đã say ngủ: tháp khoan nhô lên ngẫm nghĩ, xe ủi, xe ben sóng vai nhau nằm nghỉ; chỉ còn tiếng đàn ngân nga hòa cùng dòng trăng lấp loáng.</span>
                </label>
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-sky-50/50 rounded-2xl border border-slate-100 cursor-pointer transition-all">
                    <input type="radio" name="vn92-c2" value="B" class="w-5 h-5 text-sky-600 focus:ring-sky-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">Trong tiếng ồn ào gầm rú của xe xích xích xẻ núi mở đập thủy điện vào lúc bình minh lên.</span>
                </label>
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-sky-50/50 rounded-2xl border border-slate-100 cursor-pointer transition-all">
                    <input type="radio" name="vn92-c2" value="C" class="w-5 h-5 text-sky-600 focus:ring-sky-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">Trong không khí nhộn nhịp, rực rỡ cờ hoa mừng ngày khánh thành đập thủy điện sông Đà.</span>
                </label>
            </div>
            <div class="flex justify-center pt-2">
                <button onclick="checkC2Vn92()" class="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-xl shadow active:scale-95 transition-all">NỘP BÀI ✓</button>
            </div>
            <div id="fb-c2" class="hidden p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner"></div>
        </div>

        <!-- Câu hỏi 3 -->
        <div class="space-y-4 border-t border-sky-50 pt-6">
            <h4 class="text-xl font-black text-gray-800 flex items-start gap-2">
                <span class="w-7 h-7 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center text-sm shrink-0 mt-0.5">3</span>
                Em hình dung được điều gì khi đọc 2 dòng thơ cuối của khổ 3: "Chỉ còn tiếng đàn ngân nga / Với một dòng trăng lấp loáng sông Đà."?
            </h4>
            <div class="space-y-3 max-w-4xl mx-auto">
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-sky-50/50 rounded-2xl border border-slate-100 cursor-pointer transition-all">
                    <input type="radio" name="vn92-c3" value="A" class="w-5 h-5 text-sky-600 focus:ring-sky-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">Hình dung được chiếc đập lớn đang dần mọc lên giữa núi rừng trùng điệp.</span>
                </label>
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-sky-50/50 rounded-2xl border border-slate-100 cursor-pointer transition-all">
                    <input type="radio" name="vn92-c3" value="B" class="w-5 h-5 text-sky-600 focus:ring-sky-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">Đó là sự hòa quyện tuyệt vời giữa âm thanh tiếng đàn và ánh sáng: ánh trăng chiếu xuống sông Đà lấp loáng sóng nước như dòng trăng đang trôi, mang tiếng đàn ngân nga lan tỏa khắp đêm rừng.</span>
                </label>
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-sky-50/50 rounded-2xl border border-slate-100 cursor-pointer transition-all">
                    <input type="radio" name="vn92-c3" value="C" class="w-5 h-5 text-sky-600 focus:ring-sky-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">Hình dung ra cảnh xe ben, xe ủi đang nối đuôi nhau làm việc dưới đêm trăng.</span>
                </label>
            </div>
            <div class="flex justify-center pt-2">
                <button onclick="checkC3Vn92()" class="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-xl shadow active:scale-95 transition-all">NỘP BÀI ✓</button>
            </div>
            <div id="fb-c3" class="hidden p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner"></div>
        </div>

        <!-- Câu hỏi 4: Nêu cảm nghĩ tự luận (AI Grader) -->
        <div class="space-y-4 border-t border-sky-50 pt-6">
            <h4 class="text-xl font-black text-gray-800 flex items-start gap-2">
                <span class="w-7 h-7 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center text-sm shrink-0 mt-0.5">4</span>
                Nêu cảm nghĩ của em về hình ảnh cô gái Nga chơi đàn ba-la-lai-ca trên công trường thủy điện sông Đà.
            </h4>
            <div class="space-y-4 max-w-4xl mx-auto">
                <textarea id="vn92-essay-input" rows="4" placeholder="Nhập cảm nghĩ của em (khoảng 3-5 câu)... Gợi ý: Hình ảnh cô gái Nga hiện lên thế nào? Nó thể hiện điều gì về tình hữu nghị Việt - Xô?..." class="w-full p-4 border-2 border-sky-100 rounded-3xl outline-none focus:border-sky-500 font-bold bg-sky-50/10 text-lg md:text-xl shadow-inner"></textarea>
                
                <div class="flex justify-center gap-3">
                    <button onclick="checkWritingVn92()" class="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-black text-lg rounded-2xl shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center gap-2">
                        <span>🎓</span> CHẤM ĐIỂM AI THẦY E
                    </button>
                    <button onclick="resetVn92()" class="px-6 py-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-black text-lg rounded-2xl active:scale-95 transition-all">LÀM LẠI</button>
                </div>
                <div id="vn92-essay-fb" class="hidden p-5 rounded-3xl border-2 font-bold text-lg text-center shadow-lg transition-all"></div>
            </div>
        </div>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Tác giả bài thơ 'Tiếng đàn ba-la-lai-ca trên sông Đà' là ai?",
            "options": [
                "Nhà thơ Quang Huy",
                "Nhà thơ Tô Hoài",
                "Nhà thơ Trần Đăng Khoa",
                "Nhà thơ Phan Nguyên"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Hình ảnh cô gái Nga chơi đàn được miêu tả nổi bật qua chi tiết ngoại hình nào?",
            "options": [
                "Mái tóc màu hạt dẻ, ngón tay đan trên những sợi dây đồng",
                "Đôi mắt xanh biếc như bầu trời thu",
                "Vạt áo chàm nhuộm xanh nắng chiều",
                "Nụ cười rạng rỡ như đóa hoa rừng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Đàn ba-la-lai-ca là nhạc cụ truyền thống của đất nước nào?",
            "options": [
                "Đất nước Nga",
                "Đất nước Việt Nam",
                "Đất nước Nê-pan",
                "Đất nước Pháp"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khổ thơ thứ nhất của bài thơ sử dụng biện pháp so sánh tiếng đàn ba-la-lai-ca với những hình ảnh nào?",
            "options": [
                "Như ngọn gió bình yên, như ngọn sóng vỗ trắng phau ghềnh đá",
                "Như tiếng chim chiền chiện hát vang bầu trời",
                "Như dòng nước chảy xiết qua các khối đá",
                "Như tiếng sấm rền vang giữa cơn dông rừng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Vẻ đẹp trữ tình của công trường thủy điện sông Đà được tác giả miêu tả vào khoảng thời gian nào?",
            "options": [
                "Một đêm trăng chơi vơi, lúc cả công trường đã say ngủ",
                "Lúc rạng đông, xe cộ tấp nập kéo về",
                "Giữa buổi trưa nắng rải lửa như thiêu",
                "Lúc hoàng hôn nhuộm đỏ các tháp khoan"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Nhân vật nào đã cùng Việt Nam xây dựng công trình thủy điện sông Đà?",
            "options": [
                "Các chuyên gia Liên Xô (Nga)",
                "Các chuyên gia đến từ Anh quốc",
                "Các chuyên gia từ Nê-pan",
                "Tự nhân dân Việt Nam thực hiện hoàn toàn"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong khổ 3, những sự vật như 'tháp khoan', 'xe ủi', 'xe ben' được tác giả miêu tả bằng nghệ thuật gì?",
            "options": [
                "Nhân hóa (tháp khoan nhô lên ngẫm nghĩ, xe ủi, xe ben nằm nghỉ)",
                "So sánh ngang bằng với các động vật",
                "Nói giảm nói tránh sắc thái bình lặng",
                "Ẩn dụ hình ảnh tương lai rực rỡ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Hình ảnh 'dòng trăng lấp loáng sông Đà' gợi cho em cảm nhận gì về dòng sông?",
            "options": [
                "Dòng sông trôi yên ả dưới ánh trăng chiếu rọi làm mặt nước óng ánh như dát vàng dát bạc",
                "Dòng sông ngập đầy bùn đất đỏ ngầu cuộn sóng",
                "Dòng sông đã cạn trơ đáy sỏi đá nhấp nhô",
                "Dòng sông đang chảy dữ dội cuốn trôi chiếc đập thủy điện"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'xe ben' trong phần chú thích từ ngữ có nghĩa là gì?",
            "options": [
                "Xe tải có thùng xe có thể điều khiển dốc hẳn xuống để đổ vật liệu",
                "Loại xe con chạy bằng động cơ điện thông minh",
                "Xe ủi bánh xích chuyên dùng san đất phẳng đập núi",
                "Loại thuyền gỗ chở hàng hóa đi dọc dòng sông"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Hình ảnh tương lai tươi đẹp nào được nhắc tới ở khổ thơ cuối cùng?",
            "options": [
                "Chiếc đập lớn nối liền hai núi, biển bỡ ngỡ giữa cao nguyên, sông Đà gửi ánh sáng điện đi muôn ngả",
                "Cả công trường tháo dỡ tháp khoan để chuyển sang địa điểm mới",
                "Cô gái Nga trở về đất nước của mình",
                "Dòng sông Đà cạn nước và biến mất hoàn toàn"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Câu thơ 'Ngón tay đan trên những sợi dây đồng' chỉ hành động gì của cô gái Nga?",
            "options": [
                "Hành động chơi đàn ba-la-lai-ca",
                "Hành động dệt vải bạch dương truyền thống",
                "Hành động chế tạo tháp khoan cơ khí",
                "Hành động chỉ đường cho xe ben đổ vật liệu"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Ý nghĩa biểu tượng sâu sắc nhất của tiếng đàn trong bài thơ là gì?",
            "options": [
                "Sự kết nối, sẻ chia chân thành giữa con người với con người, thắt chặt tình hữu nghị hữu hảo Việt - Xô",
                "Giúp công trường tăng năng suất lao động ban ngày",
                "Để xua đuổi các loài thú hoang dã trong rừng bạch dương",
                "Để ru giấc ngủ cho những chiếc xe ben, xe ủi"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Cụm từ 'dòng trăng lấp loáng' là sự kết hợp độc đáo của những cảm xúc gì?",
            "options": [
                "Sự hòa quyện tuyệt vời của ánh trăng sáng chiếu rọi lên dòng nước sông Đà đang trôi lững lờ",
                "Hiện tượng nhật thực diễn ra giữa đêm khuya",
                "Sự đục ngầu của sóng nước khi đổ vật liệu xây đập",
                "Khói bụi công trường bay lên che lấp bầu trời đêm"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Bài thơ giúp học sinh cảm nhận được phẩm chất cao đẹp nào ở những người lao động thủy điện?",
            "options": [
                "Tinh thần làm việc hăng say, lạc quan và yêu cuộc sống, hòa mình cùng cái đẹp thiên nhiên",
                "Thói quen thích thức khuya chơi đàn giải trí",
                "Khả năng chịu đựng nắng nóng rải lửa ban ngày tốt",
                "Năng khiếu học ngoại ngữ tiếng Nga nhanh chóng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'dịu dặt' trong câu 'Thổi qua rừng bạch dương dịu dặt...' gợi tả điều gì về âm thanh tiếng đàn?",
            "options": [
                "Âm thanh lúc bổng lúc trầm, nhịp nhàng êm ái đi vào lòng người",
                "Âm thanh chói tai dữ dội của gió bão",
                "Âm thanh lặng im không nghe thấy gì cả",
                "Tiếng gầm rú đinh tai của máy móc tháp khoan"
            ],
            "answer": 0,
            "level": 0
        }
    ]
};

// ====== INTERACTIVE MEMORIZE & SPEECH SCRIPTS ======
const poemDataVn92 = [
    [
        "Tiếng đàn ba-la-lai-ca",
        "Như ngọn gió bình yên",
        "Thổi qua rừng bạch dương dịu dặt...",
        "Tiếng đàn ba-la-lai-ca",
        "Như ngọn sóng",
        "Vỗ trắng phau ghềnh đá",
        "Nghe náo nức",
        "Những dòng sông nóng lòng tìm biển cả..."
    ],
    [
        "Trên sông Đà",
        "Một đêm trăng chơi vơi",
        "Tôi đã nghe tiếng ba-la-lai-ca như thế",
        "Một cô gái Nga mái tóc màu hạt dẻ",
        "Ngón tay đan trên những sợi dây đồng."
    ],
    [
        "Lúc ấy",
        "Cả công trường say ngủ cạnh dòng sông",
        "Những tháp khoan nhô lên trời ngẫm nghĩ",
        "Những xe ủi, xe ben sóng vai nhau nằm nghỉ",
        "Chỉ còn tiếng đàn ngân nga",
        "Với một dòng trăng lấp loáng sông Đà."
    ],
    [
        "Ngày mai",
        "Chiếc đập lớn nối liền hai khối núi",
        "Biển sẽ nằm bỡ ngỡ giữa cao nguyên",
        "Sông Đà gửi ánh sáng đi muôn ngả",
        "Từ công trình thuỷ điện lớn đầu tiên."
    ]
];

window.harnessPoemCheVn92 = function(percentage) {
    const container = document.getElementById('vn92-poem-container');
    if (!container) return;
    
    let html = "";
    for (let sIdx = 0; sIdx < poemDataVn92.length; sIdx++) {
        const stanza = poemDataVn92[sIdx];
        let stanzaHtml = `<div class="mb-6 break-inside-avoid bg-sky-50/20 p-4 rounded-2xl border border-sky-100/50">`;
        
        for (let lIdx = 0; lIdx < stanza.length; lIdx++) {
            const line = stanza[lIdx];
            let displayLine = line;
            
            if (percentage > 0) {
                const words = line.split(" ");
                const modifiedWords = words.map((word, wIdx) => {
                    const cleaned = word.replace(/[–,?!.:"']/g, "");
                    if (cleaned.length === 0) return word;
                    
                    let shouldHide = false;
                    if (percentage === 100) {
                        shouldHide = true;
                    } else if (percentage === 60) {
                        shouldHide = (wIdx % 2 === 0);
                    } else if (percentage === 30) {
                        shouldHide = (wIdx % 3 === 0);
                    }
                    
                    if (shouldHide) {
                        const prefix = word.startsWith("–") ? "–" : "";
                        const suffix = word.replace(/^[–]?[a-zA-Zà-ỹÀ-Ỹ0-9-]+/g, "");
                        return `${prefix}<span onclick="this.className='bg-transparent text-gray-800 font-bold';" class="bg-blue-600 text-blue-600 rounded px-1.5 select-none cursor-pointer transition-all" title="Click để lật mở chữ">...</span>${suffix}`;
                    }
                    return word;
                });
                displayLine = modifiedWords.join(" ");
            }
            stanzaHtml += `<p class="font-normal py-0.5">${displayLine}</p>`;
        }
        stanzaHtml += `</div>`;
        html += stanzaHtml;
    }
    container.innerHTML = html;
};

// Initial render
setTimeout(() => {
    window.harnessPoemCheVn92(0);
}, 28);

window.startWarmupVn92 = function() {
    const text = document.getElementById('warmup-music-input').value.trim();
    const fb = document.getElementById('warmup-feedback-92');
    if (!text) {
        alert('Em hãy nhập chia sẻ về ý nghĩa âm nhạc nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-sky-50', 'border-sky-300', 'text-sky-800');
    
    fb.innerHTML = `🌟 **Thầy E nhận xét:** Ý kiến của em rất tuyệt vời! Âm nhạc chính là chiếc cầu nối kỳ diệu của cảm xúc, giống như tiếng đàn ba-la-lai-ca xua tan mệt mỏi và thắt chặt tình bạn hữu ích giữa dòng sông Đà này vậy.`;
    fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg mt-2 shadow-lg bg-sky-50 border-sky-300 text-sky-800 animate-fade-in';
};

window.checkC1Vn92 = function() {
    const checked = document.querySelector('input[name="vn92-c1"]:checked');
    const fb = document.getElementById('fb-c1');
    if (!checked) {
        alert('Em hãy chọn một đáp án nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-red-100', 'text-red-800', 'bg-green-100', 'text-green-800');
    
    if (checked.value === 'B') {
        fb.innerHTML = '🎉 Rất chính xác! Tiếng đàn hiện lên với hai trạng thái đối lập đầy thú vị: vừa êm đềm bình yên vừa náo nức cuộn sóng tìm về biển lớn.';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-green-100 text-green-800 border-2 border-green-300';
    } else {
        fb.innerHTML = '⚠️ Sai rồi, em hãy chú ý các so sánh tiếng đàn ở 8 dòng thơ đầu để chọn lại nhé!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-red-100 text-red-800 border-2 border-red-300';
    }
};

window.checkC2Vn92 = function() {
    const checked = document.querySelector('input[name="vn92-c2"]:checked');
    const fb = document.getElementById('fb-c2');
    if (!checked) {
        alert('Em hãy chọn một đáp án nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-red-100', 'text-red-800', 'bg-green-100', 'text-green-800');
    
    if (checked.value === 'A') {
        fb.innerHTML = '🎉 Hoàn toàn chính xác! Đêm trăng trên công trường sông Đà rất tĩnh mịch, êm đềm với hình ảnh tháp khoan ngẫm nghĩ và các xe ủi, xe ben nằm nghỉ cạnh dòng sông.';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-green-100 text-green-800 border-2 border-green-300';
    } else {
        fb.innerHTML = '⚠️ Chưa đúng, em hãy chú ý khổ thơ thứ 3 lúc công trường đã chìm vào giấc ngủ đêm trăng chơi vơi để chọn lại nhé!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-red-100 text-red-800 border-2 border-red-300';
    }
};

window.checkC3Vn92 = function() {
    const checked = document.querySelector('input[name="vn92-c3"]:checked');
    const fb = document.getElementById('fb-c3');
    if (!checked) {
        alert('Em hãy chọn một đáp án nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-red-100', 'text-red-800', 'bg-green-100', 'text-green-800');
    
    if (checked.value === 'B') {
        fb.innerHTML = '🎉 Đúng rồi! Sự kết hợp giữa tiếng đàn ngân nga và ánh trăng lấp loáng trên mặt nước tạo nên cảnh tượng lung linh huyền ảo, đầy chất thơ nhạc.';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-green-100 text-green-800 border-2 border-green-300';
    } else {
        fb.innerHTML = '⚠️ Sai rồi, đây là câu thơ tả cảnh hòa âm ánh trăng và tiếng nhạc cực kỳ đặc sắc, em hãy chọn lại nhé!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-red-100 text-red-800 border-2 border-red-300';
    }
};

window.checkWritingVn92 = function() {
    const text = document.getElementById('vn92-essay-input').value.trim();
    const fb = document.getElementById('vn92-essay-fb');
    if (!text) {
        alert('Em hãy nhập cảm nghĩ của mình trước khi nộp bài cho Thầy E nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-amber-50', 'text-amber-800', 'border-amber-200', 'bg-emerald-50', 'text-emerald-800', 'border-emerald-200');
    
    const sentenceCount = text.split(/[.!?]+/).filter(s => s.trim().length > 5).length;
    const keywords = ["cô gái nga", "tiếng đàn", "sông đà", "hữu nghị", "đêm trăng", "vẻ đẹp", "bạch dương", "quang huy"];
    const matchedKeywords = keywords.filter(kw => text.toLowerCase().includes(kw));
    
    let score = 50;
    let comment = "";
    
    if (sentenceCount >= 3) {
        score += 20;
    } else {
        comment += "Cảm nghĩ hơi ngắn, em nên viết chi tiết thêm một chút (khoảng 3 câu trở lên). ";
    }
    
    if (matchedKeywords.length >= 2) {
        score += 30;
    } else {
        score += matchedKeywords.length * 15;
        comment += "Em nên nhắc đến tình hữu nghị Việt - Xô hoặc vẻ đẹp lãng mạn của cô gái Nga bên tiếng đàn. ";
    }
    
    score = Math.min(score, 100);
    
    if (score >= 80) {
        fb.innerHTML = `🌟 **Điểm đạt được: ${score}/100**<br><br>
        **Lời nhận xét từ Thầy E:** Cảm nghĩ của em rất chân thực và có chất thơ! Hình ảnh cô gái Nga chơi đàn giữa núi rừng nước Việt chính là biểu tượng tuyệt đẹp cho tình bạn quốc tế cao cả. ${comment} Hãy luôn giữ vững tinh thần cảm thụ văn học này nhé!`;
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg mt-2 shadow-lg bg-emerald-50 border-emerald-300 text-emerald-800 animate-fade-in';
    } else {
        fb.innerHTML = `⚠️ **Điểm đạt được: ${score}/100**<br><br>
        **Lời nhận xét từ Thầy E:** Ý kiến của em rất tốt nhưng cần viết đầy đủ và sâu sắc thêm. ${comment} Hãy thử chỉnh sửa lại đoạn văn và nhấn nút Chấm điểm lại nhé!`;
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg mt-2 shadow-lg bg-amber-50 border-amber-300 text-amber-800 animate-fade-in';
    }
};

window.resetVn92 = function() {
    document.getElementById('vn92-essay-input').value = "";
    document.getElementById('vn92-essay-fb').classList.add('hidden');
    
    const r1 = document.getElementsByName('vn92-c1');
    r1.forEach(r => r.checked = false);
    document.getElementById('fb-c1').classList.add('hidden');
    
    const r2 = document.getElementsByName('vn92-c2');
    r2.forEach(r => r.checked = false);
    document.getElementById('fb-c2').classList.add('hidden');
    
    const r3 = document.getElementsByName('vn92-c3');
    r3.forEach(r => r.checked = false);
    document.getElementById('fb-c3').classList.add('hidden');
    
    alert('Đã đặt lại toàn bộ câu hỏi!');
};
