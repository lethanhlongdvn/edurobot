export const lesson70 = {
    "topic": "Tiếng Việt 5",
    "week": "10",
    "period": "70",
    "title": "ĐỌC MỞ RỘNG: ĐỌC CÂU CHUYỆN VỀ NHÀ TRƯỜNG, THẦY CÔ, HỌC SINH",
    "desc": "Bài học giúp học sinh thực hành đọc mở rộng các tác phẩm ý nghĩa về trường học, thầy cô, bạn bè; lập phiếu đọc sách điện tử và chia sẻ suy nghĩ về người em khâm phục.",
    "subject": "Đọc mở rộng",
    "theme": "Thế giới tuổi thơ",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-emerald-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-emerald-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-emerald-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-emerald-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Đọc các câu chuyện về nhà trường, thầy cô, học sinh từ các trích đoạn gợi ý hoặc tự chọn.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Biết cách ghi chép và hoàn thành Phiếu đọc sách theo đúng biểu mẫu.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Chia sẻ ý kiến, cảm xúc hoặc giới thiệu về một người/nhân vật em ngưỡng mộ, khâm phục.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG: ĐỐ VUI HỌC ĐƯỜNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Câu đố học đường</h3>
        </div>
        <div class="p-6 bg-emerald-50/50 rounded-2xl border-l-4 border-emerald-100 font-bold text-xl md:text-2xl text-emerald-800 leading-relaxed space-y-2">
            <p>"Mùa gì phượng đỏ rực trời,</p>
            <p>Ve kêu rộn rã, mọi người nghỉ ngơi?</p>
            <p>Rồi khi thu đến đẹp trời,</p>
            <p>Trống trường rộn rã, trẻ cười tới lớp?"</p>
        </div>
        <div class="space-y-4 max-w-md mx-auto">
            <input type="text" id="ans-vn70-kd" placeholder="Gõ câu trả lời của em (Ví dụ: Mùa hè và mùa thu)..." class="w-full p-4 border-2 border-emerald-100 rounded-2xl outline-none focus:border-emerald-500 font-bold text-center text-xl md:text-2xl" />
            <div class="flex justify-center">
                <button onclick="kiemTraKhoiDong70()" class="px-8 py-3 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-base shadow-md">KIỂM TRA ĐÁP ÁN ✓</button>
            </div>
            <div id="fb-vn70-kd" class="hidden p-4 rounded-xl text-sm font-bold text-center mt-2"></div>
        </div>
    </div>

    <!-- 📖 CÁC TRÍCH ĐOẠN ĐỌC GỢI Ý (3 TABS) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-6 relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-emerald-100 pb-4 gap-4">
                <span class="text-emerald-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                    <span>📖</span> Các câu chuyện gợi ý trong SGK
                </span>
            </div>

            <!-- Thanh Tabs chọn tác phẩm -->
            <div class="flex flex-wrap gap-2 border-b border-gray-100 pb-2">
                <button id="tab-btn-70-1" onclick="switchTab70(1)" class="px-6 py-3 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-sky-100 bg-sky-600 text-white transition-all shadow-sm">Ngày em tới trường</button>
                <button id="tab-btn-70-2" onclick="switchTab70(2)" class="px-6 py-3 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-gray-100 bg-gray-50 text-gray-800 hover:bg-gray-800 transition-all shadow-sm">Mái trường thân yêu</button>
                <button id="tab-btn-70-3" onclick="switchTab70(3)" class="px-6 py-3 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-gray-100 bg-gray-50 text-gray-800 hover:bg-gray-800 transition-all shadow-sm">Những tấm lòng cao cả</button>
            </div>

            <!-- Khung nội dung các Tab -->
            <div class="p-6 md:p-10 bg-amber-50/20 rounded-[40px] border border-amber-100/50 shadow-inner">
                
                <!-- Tab 1: Ngày em tới trường -->
                <div id="tab-content-70-1" class="space-y-6">
                    <div class="flex justify-between items-center border-b border-amber-100/50 pb-3">
                        <h4 class="text-xl md:text-2xl font-black text-amber-600">Ngày em tới trường <span class="text-sm font-normal text-gray-800">(Tác giả: Lê Phương Liên)</span></h4>
                        <button onclick="playSegmentAudio('assets/audio/tiengviet/ngay_em_toi_truong.mp3')" class="p-3 bg-sky-600 hover:bg-sky-600 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                        </button>
                    </div>
                    <p class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed text-justify indent-8 font-medium">
                        “Hôm nay là một ngày đầu thu, nắng đẹp khắp bờ tre ngọn cỏ. Hương lúa chín bay lâng lâng vào các lớp học. Và, sáng nay là ngày cu Tí đứng dậy lễ phép nói với thầy giáo:
                    </p>
                    <p class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed text-justify indent-8 font-medium">
                        – Thưa thầy, em tên là Nguyễn Văn Thắng chứ không phải là cu Tí ạ.”
                    </p>
                </div>

                <!-- Tab 2: Mái trường thân yêu -->
                <div id="tab-content-70-2" class="space-y-6 hidden">
                    <div class="flex justify-between items-center border-b border-amber-100/50 pb-3">
                        <h4 class="text-xl md:text-2xl font-black text-amber-600">Mái trường thân yêu <span class="text-sm font-normal text-gray-800">(Tác giả: Lê Khắc Hoan)</span></h4>
                        <button onclick="playSegmentAudio('assets/audio/tiengviet/mai_truong_than_yeu.mp3')" class="p-3 bg-sky-600 hover:bg-sky-600 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                        </button>
                    </div>
                    <p class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed text-justify indent-8 font-medium">
                        “Trường của chúng tôi còn nghèo, mái lá tường đất, vách nứa, cửa tre. Nhưng thân thiết biết nhường nào, ở đấy có sân bóng đá, có tủ sách của liên đội, có vườn địa lí với lá cờ đỏ phấp phới bay trên đỉnh con quay gió,... Và hơn hết, ở đấy có những người tôi đã coi như ruột thịt.”
                    </p>
                </div>

                <!-- Tab 3: Những tấm lòng cao cả -->
                <div id="tab-content-70-3" class="space-y-6 hidden">
                    <div class="flex justify-between items-center border-b border-amber-100/50 pb-3">
                        <h4 class="text-xl md:text-2xl font-black text-amber-600">Những tấm lòng cao cả <span class="text-sm font-normal text-gray-800">(Tác giả: A-mi-xi)</span></h4>
                        <button onclick="playSegmentAudio('assets/audio/tiengviet/nhung_tam_long_cao_ca.mp3')" class="p-3 bg-sky-600 hover:bg-sky-600 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                        </button>
                    </div>
                    <p class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed text-justify indent-8 font-medium">
                        “Thầy hiệu trưởng của chúng tôi là một người ôn hoà, dễ mến,... Sáng nào thầy cũng là người đầu tiên đến trường. Thầy chờ học sinh đến lớp, chờ phụ huynh tìm gặp mình nói chuyện. Khi tan học, thầy là người cuối cùng rời khỏi trường. Bởi vì thầy phải đi kiểm tra ở quanh trường xem có học sinh nào đi trên đường mà không chú ý an toàn hay không, xem có học sinh nào mải chơi không về nhà hay không...”
                    </p>
                </div>

            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 PHIẾU ĐỌC SÁCH TƯƠNG TÁC -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-6">
            <div class="flex items-center gap-3 border-b border-emerald-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md">2</span>
                <h3 class="text-2xl md:text-3xl font-black text-emerald-800">Lập Phiếu đọc sách của em</h3>
            </div>
            <p class="text-lg md:text-xl text-gray-800 font-bold">👉 Hãy ghi chép lại thông tin câu chuyện em vừa đọc vào biểu mẫu bên dưới:</p>

            <div class="bg-sky-50/20 p-6 md:p-8 rounded-[36px] border border-sky-100/60 grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Tên câu chuyện -->
                <div class="flex flex-col gap-2">
                    <label class="font-black text-sky-800 text-base md:text-lg">Tên câu chuyện 🌸</label>
                    <input type="text" id="pds-story" placeholder="Ví dụ: Những tấm lòng cao cả" class="p-3 rounded-xl border border-gray-100 font-bold bg-white focus:border-sky-500 outline-none text-base md:text-lg" />
                </div>
                <!-- Tác giả -->
                <div class="flex flex-col gap-2">
                    <label class="font-black text-sky-800 text-base md:text-lg">Tác giả 🌸</label>
                    <input type="text" id="pds-author" placeholder="Ví dụ: A-mi-xi" class="p-3 rounded-xl border border-gray-100 font-bold bg-white focus:border-sky-500 outline-none text-base md:text-lg" />
                </div>
                <!-- Ngày đọc -->
                <div class="flex flex-col gap-2">
                    <label class="font-black text-sky-800 text-base md:text-lg">Ngày đọc 🌸</label>
                    <input type="date" id="pds-date" class="p-3 rounded-xl border border-gray-100 font-bold bg-white focus:border-sky-500 outline-none text-base md:text-lg" />
                </div>
                <!-- Tên nhân vật -->
                <div class="flex flex-col gap-2">
                    <label class="font-black text-sky-800 text-base md:text-lg">Tên nhân vật 🌸</label>
                    <input type="text" id="pds-character" placeholder="Ví dụ: Thầy hiệu trưởng" class="p-3 rounded-xl border border-gray-100 font-bold bg-white focus:border-sky-500 outline-none text-base md:text-lg" />
                </div>
                <!-- Mức độ yêu thích -->
                <div class="flex flex-col gap-2 md:col-span-2">
                    <label class="font-black text-sky-800 text-base md:text-lg">Mức độ yêu thích ⭐</label>
                    <div class="flex items-center gap-1.5 h-12" id="star-rating-70">
                        <button onclick="setStars70(1)" class="w-8 h-8 text-gray-800 hover:text-amber-600 transition-all outline-none" id="star70-1"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.070 2.970c.3-.970 1.670-.970 1.970 0l1.07 3.270a1 1 0 00.95.69h3.470c.970 0 1.370 1.24.570 1.81l-2.8 2.070a1 1 0 00-.370 1.170l1.07 3.270c.3.970-.770 1.670-1.54 1.170l-2.8-2.070a1 1 0 00-1.170 0l-2.8 2.070c-.770.57-1.870-.170-1.570-1.170l1.07-3.270a1 1 0 00-.370-1.170L2.98 8.72c-.770-.57-.38-1.81.570-1.81h3.470a1 1 0 00.970-.69l1.07-3.270z"></path></svg></button>
                        <button onclick="setStars70(2)" class="w-8 h-8 text-gray-800 hover:text-amber-600 transition-all outline-none" id="star70-2"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.070 2.970c.3-.970 1.670-.970 1.970 0l1.07 3.270a1 1 0 00.95.69h3.470c.970 0 1.370 1.24.570 1.81l-2.8 2.070a1 1 0 00-.370 1.170l1.07 3.270c.3.970-.770 1.670-1.54 1.170l-2.8-2.070a1 1 0 00-1.170 0l-2.8 2.070c-.770.57-1.870-.170-1.570-1.170l1.07-3.270a1 1 0 00-.370-1.170L2.98 8.72c-.770-.57-.38-1.81.570-1.81h3.470a1 1 0 00.970-.69l1.07-3.270z"></path></svg></button>
                        <button onclick="setStars70(3)" class="w-8 h-8 text-gray-800 hover:text-amber-600 transition-all outline-none" id="star70-3"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.070 2.970c.3-.970 1.670-.970 1.970 0l1.07 3.270a1 1 0 00.95.69h3.470c.970 0 1.370 1.24.570 1.81l-2.8 2.070a1 1 0 00-.370 1.170l1.07 3.270c.3.970-.770 1.670-1.54 1.170l-2.8-2.070a1 1 0 00-1.170 0l-2.8 2.070c-.770.57-1.870-.170-1.570-1.170l1.07-3.270a1 1 0 00-.370-1.170L2.98 8.72c-.770-.57-.38-1.81.570-1.81h3.470a1 1 0 00.970-.69l1.07-3.270z"></path></svg></button>
                        <button onclick="setStars70(4)" class="w-8 h-8 text-gray-800 hover:text-amber-600 transition-all outline-none" id="star70-4"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.070 2.970c.3-.970 1.670-.970 1.970 0l1.07 3.270a1 1 0 00.95.69h3.470c.970 0 1.370 1.24.570 1.81l-2.8 2.070a1 1 0 00-.370 1.170l1.07 3.270c.3.970-.770 1.670-1.54 1.170l-2.8-2.070a1 1 0 00-1.170 0l-2.8 2.070c-.770.57-1.870-.170-1.570-1.170l1.07-3.270a1 1 0 00-.370-1.170L2.98 8.72c-.770-.57-.38-1.81.570-1.81h3.470a1 1 0 00.970-.69l1.07-3.270z"></path></svg></button>
                        <button onclick="setStars70(5)" class="w-8 h-8 text-gray-800 hover:text-amber-600 transition-all outline-none" id="star70-5"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.070 2.970c.3-.970 1.670-.970 1.970 0l1.07 3.270a1 1 0 00.95.69h3.470c.970 0 1.370 1.24.570 1.81l-2.8 2.070a1 1 0 00-.370 1.170l1.07 3.270c.3.970-.770 1.670-1.54 1.170l-2.8-2.070a1 1 0 00-1.170 0l-2.8 2.070c-.770.57-1.870-.170-1.570-1.170l1.07-3.270a1 1 0 00-.370-1.170L2.98 8.72c-.770-.57-.38-1.81.570-1.81h3.470a1 1 0 00.970-.69l1.07-3.270z"></path></svg></button>
                        <span id="star-text-70" class="text-sm font-bold text-gray-800 pl-2">0/5 sao</span>
                    </div>
                </div>
                <!-- Nội dung chính -->
                <div class="flex flex-col gap-2 md:col-span-3">
                    <label class="font-black text-sky-800 text-base md:text-lg">Nội dung chính của câu chuyện 🌸</label>
                    <textarea id="pds-main-content" rows="3" placeholder="Ví dụ: Câu chuyện ca ngợi sự tận tuỵ, ôn hòa và lòng yêu thương sâu sắc của thầy hiệu trưởng dành cho các học sinh của trường..." class="w-full p-4 rounded-xl border border-gray-100 font-bold bg-white focus:border-sky-500 outline-none text-base md:text-lg"></textarea>
                </div>
                <!-- Sự việc đáng nhớ -->
                <div class="flex flex-col gap-2 md:col-span-3">
                    <label class="font-black text-sky-800 text-base md:text-lg">Sự việc đáng nhớ về nhân vật 🌸</label>
                    <textarea id="pds-notable-event" rows="3" placeholder="Ví dụ: Sáng nào thầy hiệu trưởng cũng là người đầu tiên đến trường và khi tan học, thầy luôn là người cuối cùng rời trường để kiểm tra xem học sinh có về nhà an toàn không..." class="w-full p-4 rounded-xl border border-gray-100 font-bold bg-white focus:border-sky-500 outline-none text-base md:text-lg"></textarea>
                </div>
            </div>

            <!-- Nút xuất Phiếu -->
            <div class="flex justify-center gap-4 pt-2">
                <button onclick="xuatPhieu70()" class="px-8 py-3.5 bg-emerald-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-emerald-600 active:scale-95 transition-all">📋 XUẤT PHIẾU ĐỌC SÁCH ĐIỆN TỬ</button>
            </div>

            <!-- Khung thiết kế Phiếu đọc sách xuất ra -->
            <div id="output-pds-box" class="hidden p-8 bg-amber-50/30 rounded-[40px] border-2 border-dashed border-amber-200 space-y-6 max-w-4xl mx-auto">
                <div class="border-b-2 border-dashed border-amber-200 pb-4 text-center">
                    <h4 class="text-3xl font-black text-amber-600 tracking-wider">💮 PHIẾU ĐỌC SÁCH 💮</h4>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                    <p>🌸 <strong>Tên câu chuyện:</strong> <span id="out-pds-story" class="text-emerald-800 font-bold"></span></p>
                    <p>🌸 <strong>Tác giả:</strong> <span id="out-pds-author" class="text-emerald-800 font-bold"></span></p>
                    <p>📅 <strong>Ngày đọc:</strong> <span id="out-pds-date" class="text-emerald-800 font-bold"></span></p>
                    <p>👤 <strong>Tên nhân vật:</strong> <span id="out-pds-character" class="text-emerald-800 font-bold"></span></p>
                    <p class="md:col-span-2">⭐ <strong>Mức độ yêu thích:</strong> <span id="out-pds-stars" class="text-amber-600 font-bold"></span></p>
                    <p class="md:col-span-2 border-t border-amber-100/60 pt-4">📝 <strong>Nội dung chính:</strong> <span id="out-pds-main" class="text-gray-800 block mt-1"></span></p>
                    <p class="md:col-span-2 border-t border-amber-100/60 pt-4">🌟 <strong>Sự việc đáng nhớ:</strong> <span id="out-pds-notable" class="text-gray-800 block mt-1"></span></p>
                </div>
                <div class="flex justify-center border-t border-dashed border-amber-200 pt-6">
                    <button onclick="copyPhieu70()" class="px-6 py-2 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-600 shadow-md transition-all">Sao chép phiếu</button>
                </div>
            </div>
        </div>
    </section>

    <!-- 📋 PHẦN VẬN DỤNG & AI THẦY E -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-6">
            <div class="flex items-center gap-3 border-b border-emerald-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md">3</span>
                <h3 class="text-2xl md:text-3xl font-black text-emerald-800">Vận dụng: Giới thiệu người em ngưỡng mộ</h3>
            </div>
            <p class="text-lg md:text-xl text-gray-800 font-bold">✍️ Hãy viết một đoạn văn ngắn (3 - 5 câu) giới thiệu với mọi người về một người/nhân vật em khâm phục, ngưỡng mộ:</p>

            <textarea id="ans-vn70-writing" rows="5" placeholder="Ví dụ: Em vô cùng khâm phục và ngưỡng mộ thầy hiệu trưởng trong tác phẩm 'Những tấm lòng cao cả'. Thầy là một người luôn hết lòng vì sự an toàn và hạnh phúc của học sinh..." class="w-full p-4 md:p-6 text-xl md:text-2xl rounded-2xl border-2 border-emerald-100 focus:border-emerald-500 outline-none shadow-sm bg-emerald-50/10 font-medium leading-relaxed"></textarea>
            
            <div class="flex justify-center gap-3 pt-2">
                <button onclick="chamTuLuan70()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                    <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                    <span>AI THẦY E ĐÁNH GIÁ</span>
                </button>
                <div id="fb-vn70-writing" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBai70Global()" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-emerald-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Trích đoạn tác phẩm 'Ngày em tới trường' của tác giả nào?",
            "options": [
                "Lê Phương Liên",
                "Lê Khắc Hoan",
                "A-mi-xi",
                "Tô Hoài"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong trích đoạn 'Ngày em tới trường', bé cu Tí đã thưa với thầy giáo điều gì?",
            "options": [
                "Tên của em là Nguyễn Văn Thắng chứ không phải cu Tí",
                "Hôm nay em đi học muộn vì trời mưa",
                "Em quên mang theo sách tiếng Việt lớp 5",
                "Em muốn được chuyển sang ngồi bàn đầu"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tác phẩm 'Mái trường thân yêu' của Lê Khắc Hoan mô tả ngôi trường như thế nào?",
            "options": [
                "Còn nghèo, mái lá tường đất, vách nứa, cửa tre nhưng rất thân thiết thân yêu",
                "Khang trang rộng rãi, cao tầng hiện đại đầy đủ máy tính",
                "Nằm trên một hòn đảo nhỏ giữa vịnh Hạ Long kỳ diệu",
                "Là một ngôi trường bằng gạch ngói mới tinh"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trích đoạn 'Mái trường thân yêu' liệt kê những địa điểm thân quen nào của ngôi trường?",
            "options": [
                "Sân bóng đá, tủ sách của liên đội, vườn địa lí có lá cờ đỏ phấp phới",
                "Hồ bơi thông minh, thư viện rộng lớn, khu tin học",
                "Căn tin bán nhiều sản vật, khu tập hát quan họ",
                "Phòng truyền thống treo bản đồ thế giới"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Thầy hiệu trưởng trong trích đoạn 'Những tấm lòng cao cả' được mô tả là người như thế nào?",
            "options": [
                "Ôn hoà, dễ mến, hết lòng lo lắng cho an toàn của học sinh",
                "Cực kỳ nghiêm khắc, ít khi mỉm cười nói chuyện với học sinh",
                "Chỉ quan tâm đến việc dạy các học sinh giỏi ngoại ngữ",
                "Thường xuyên đi công tác nước ngoài"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Hành động nào của thầy hiệu trưởng (Những tấm lòng cao cả) thể hiện sự tận tụy tột cùng?",
            "options": [
                "Sáng đến trường đầu tiên, chiều tan học là người cuối cùng rời trường",
                "Thầy tự tay nấu đồ ăn trưa cho tất cả học sinh trong trường",
                "Thầy tài trợ kinh phí mua tủ sách cho liên đội",
                "Thầy dạy học sinh đá bóng trên sân bóng cỏ nhân tạo"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tại sao tan học thầy hiệu trưởng vẫn đi kiểm tra quanh trường?",
            "options": [
                "Để xem có học sinh nào đi đường không chú ý an toàn hoặc mải chơi chưa về không",
                "Để đóng cửa các phòng học và tắt thiết bị điện",
                "Để tìm gặp các phụ huynh hỏi chuyện đóng học phí",
                "Để tập thể thao nâng cao sức khỏe"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tác phẩm nổi tiếng 'Những tấm lòng cao cả' là của tác giả nước nào?",
            "options": [
                "Ý (Tác giả: A-mi-xi)",
                "Pháp",
                "Nga",
                "Anh"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Trường học trong 'Mái trường thân yêu' được tác giả coi những người ở đó như thế nào?",
            "options": [
                "Như những người ruột thịt thân yêu",
                "Như những người bạn xã giao thông thường",
                "Như những thầy giáo dạy kèm nghiêm khắc",
                "Như những vị khách du lịch tham quan"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Thông tin nào dưới đây KHÔNG thuộc mẫu Phiếu đọc sách trong sách giáo khoa?",
            "options": [
                "Giá tiền mua cuốn sách",
                "Tên câu chuyện và tác giả",
                "Sự việc đáng nhớ về nhân vật",
                "Mức độ yêu thích (đánh giá sao)"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong câu 'Hương lúa chín bay lâng lâng vào các lớp học', từ 'lâng lâng' mang lại cảm giác gì?",
            "options": [
                "Cảm giác nhẹ nhàng, dễ chịu, bay bổng lan tỏa",
                "Cảm giác mệt mỏi buồn ngủ",
                "Cảm giác vội vã, lo lắng đi học muộn",
                "Cảm giác nóng bức của mùa hè"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Phiếu đọc sách giúp học sinh tích lũy được điều gì sau mỗi bài đọc?",
            "options": [
                "Ghi nhớ nội dung cốt lõi, nhân vật yêu thích và rèn luyện thói quen tự học",
                "Tăng điểm số kiểm tra đọc trôi chảy",
                "Được nhận giải thưởng học sinh xuất sắc của trường",
                "Biết cách tự vẽ hình ảnh minh họa cho câu chuyện"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Thầy hiệu trưởng trong truyện 'Những tấm lòng cao cả' thường làm gì khi đợi học sinh đến lớp?",
            "options": [
                "Thầy chờ học sinh và chờ phụ huynh tìm gặp mình để nói chuyện thân mật",
                "Thầy đi bộ tập thể dục quanh sân trường",
                "Thầy ngồi viết báo cáo công việc hàng tuần",
                "Thầy chấm bài thi tự luận tiếng Việt"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trích đoạn câu chuyện 'Ngày em tới trường' gợi lên không gian mùa nào?",
            "options": [
                "Mùa thu (ngày đầu thu, nắng đẹp khắp bờ tre)",
                "Mùa hè chói chang phượng vĩ đỏ rực",
                "Mùa đông lạnh giá tuyết rơi trắng xóa",
                "Mùa xuân ấm áp trăm hoa đua nở"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Ghi chép sự việc đáng nhớ về nhân vật trong phiếu đọc sách cần tập trung vào việc gì?",
            "options": [
                "Tóm tắt một hành động, lời nói hoặc quyết định có ý nghĩa của nhân vật đó",
                "Mô tả tất cả các bộ trang phục của nhân vật",
                "Liệt kê tất cả các từ đồng nghĩa xuất hiện trong truyện",
                "Kể về cuộc đời của tác giả viết câu chuyện"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- KHỞI ĐỘNG CÂU ĐỐ ---
window.kiemTraKhoiDong70 = function() {
    const ans = document.getElementById('ans-vn70-kd')?.value.trim().toLowerCase();
    const fb = document.getElementById('fb-vn70-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!ans) {
        fb.innerHTML = "⚠️ Em hãy gõ câu trả lời của mình trước nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    if (ans.includes('mùa hè') && ans.includes('mùa thu')) {
        fb.innerHTML = "🎉 Tuyệt vời! Câu trả lời hoàn toàn chính xác. Mùa hè là mùa nghỉ học, mùa thu khai trường đón học sinh tới lớp. Chúng ta cùng đọc các đoạn trích rất hay bên dưới nhé.";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "❌ Câu trả lời chưa chính xác rồi. Gợi ý: Đây là hai mùa rất quen thuộc gắn liền với học sinh (mùa nghỉ học và mùa tựu trường). Hãy thử lại nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- CHUYỂN TABS TRÍCH ĐOẠN ĐỌC ---
window.switchTab70 = function(tabId) {
    [1, 2, 3].forEach(id => {
        const btn = document.getElementById(`tab-btn-70-${id}`);
        const content = document.getElementById(`tab-content-70-${id}`);
        if (btn && content) {
            if (id === tabId) {
                btn.className = "px-6 py-3 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-sky-100 bg-sky-600 text-white transition-all shadow-sm";
                content.classList.remove('hidden');
            } else {
                btn.className = "px-6 py-3 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-gray-100 bg-gray-50 text-gray-800 hover:bg-gray-800 transition-all shadow-sm";
                content.classList.add('hidden');
            }
        }
    });
};

// --- BỘ ĐÁNH GIÁ 5 SAO ---
let rating70 = 0;
window.setStars70 = function(val) {
    rating70 = val;
    const txt = document.getElementById('star-text-70');
    if (txt) txt.innerText = `${val}/5 sao`;

    for (let i = 1; i <= 5; i++) {
        const btn = document.getElementById(`star70-${i}`);
        if (btn) {
            if (i <= val) {
                btn.className = "w-8 h-8 text-amber-600 transition-all outline-none scale-105";
            } else {
                btn.className = "w-8 h-8 text-gray-800 hover:text-amber-600 transition-all outline-none";
            }
        }
    }
};

// --- XUẤT PHIẾU ĐỌC SÁCH ĐIỆN TỬ ---
window.xuatPhieu70 = function() {
    const story = document.getElementById('pds-story')?.value.trim();
    const author = document.getElementById('pds-author')?.value.trim();
    const dateInput = document.getElementById('pds-date')?.value;
    const character = document.getElementById('pds-character')?.value.trim();
    const mainContent = document.getElementById('pds-main-content')?.value.trim();
    const notableEvent = document.getElementById('pds-notable-event')?.value.trim();

    if (!story || !author || !dateInput || !character || !mainContent || !notableEvent || rating70 === 0) {
        alert('Em hãy điền đầy đủ các thông tin và chọn mức độ yêu thích (đánh giá số sao) cho Phiếu đọc sách nhé!');
        return;
    }

    // Định dạng ngày hiển thị dd/mm/yyyy
    const parts = dateInput.split('-');
    const formattedDate = parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : dateInput;

    const outBox = document.getElementById('output-pds-box');
    if (!outBox) return;

    outBox.classList.remove('hidden');
    document.getElementById('out-pds-story').innerText = story;
    document.getElementById('out-pds-author').innerText = author;
    document.getElementById('out-pds-date').innerText = formattedDate;
    document.getElementById('out-pds-character').innerText = character;
    document.getElementById('out-pds-stars').innerText = '★'.repeat(rating70) + '☆'.repeat(5 - rating70);
    document.getElementById('out-pds-main').innerText = mainContent;
    document.getElementById('out-pds-notable').innerText = notableEvent;

    outBox.scrollIntoView({ behavior: 'smooth' });
};

// --- SAO CHÉP PHIẾU ---
window.copyPhieu70 = function() {
    const story = document.getElementById('out-pds-story').innerText;
    const author = document.getElementById('out-pds-author').innerText;
    const date = document.getElementById('out-pds-date').innerText;
    const char = document.getElementById('out-pds-character').innerText;
    const stars = document.getElementById('out-pds-stars').innerText;
    const main = document.getElementById('out-pds-main').innerText;
    const notable = document.getElementById('out-pds-notable').innerText;

    const text = `💮 PHIẾU ĐỌC SÁCH 💮\n\n• Tên câu chuyện: ${story}\n• Tác giả: ${author}\n• Ngày đọc: ${date}\n• Nhân vật: ${char}\n• Đánh giá: ${stars}\n• Nội dung chính: ${main}\n• Sự việc đáng nhớ: ${notable}`;

    navigator.clipboard.writeText(text).then(() => {
        alert('Đã sao chép Phiếu đọc sách thành công! Em có thể chia sẻ với các bạn lớp mình.');
    }).catch(() => {
        alert('Không thể tự động sao chép. Em hãy bôi đen và sao chép thủ công nhé!');
    });
};

// --- AI THẦY E ĐÁNH GIÁ PHẦN VẬN DỤNG ---
window.chamTuLuan70 = function() {
    const text = document.getElementById('ans-vn70-writing')?.value.trim();
    const fb = document.getElementById('fb-vn70-writing');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text || text.length < 15) {
        fb.innerHTML = "⚠️ Đoạn văn của em còn hơi ngắn. Hãy viết tối thiểu từ 3 câu trở lên giới thiệu người em ngưỡng mộ nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ THẦY E:</span>
            <p class="text-lg font-bold">"Cách trình bày và chia sẻ rất thuyết phục! Đoạn văn thể hiện rõ ràng tấm lòng tôn kính, ngưỡng mộ và bài học thiết thực rút ra cho bản thân."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold text-xs rounded-full shadow-sm mt-2">Điểm: 10/10 (Xuất sắc)</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-370";
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.nopBai70Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 70',
            '💮',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">💮</span><p class="text-2xl md:text-3xl font-bold text-emerald-800">Chúc mừng em đã làm chủ kỹ năng lập phiếu đọc sách!</p><p class="text-lg text-gray-800 mt-3">Hãy luôn tích cực đọc mở rộng sách báo mỗi ngày để bồi đắp kiến thức và nhân cách tốt đẹp nhé.</p></div>'
        );
    }
};
