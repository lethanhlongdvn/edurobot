export const lesson85 = {
    "topic": "Tiếng Việt 5",
    "week": "13",
    "period": "85",
    "title": "ĐỌC: GIỚI THIỆU SÁCH DẾ MÈN PHIÊU LƯU KÍ",
    "desc": "Bài học giúp học sinh đọc hiểu văn bản giới thiệu tác phẩm văn học thiếu nhi kinh điển 'Dế Mèn phiêu lưu kí' của nhà văn Tô Hoài, nắm rõ các thông tin cơ bản về tác phẩm và cảm nhận những bài học nhân văn sâu sắc.",
    "subject": "Đọc",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
<div class="flex justify-end mb-4">
    <button onclick="playSegmentAudio('assets/audio/tiengviet/85/gioi_thieu_sach_de_men_phieu_luu_ki.mp3')" class="p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc toàn bài">
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
        <ul class="space-y-3 text-emerald-800 font-bold text-lg md:text-xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Đọc trôi chảy, diễn cảm văn bản giới thiệu sách, nhấn giọng đúng ở các từ ngữ gợi tả và các con số ấn tượng.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Nắm bắt được các thông tin cơ bản (tên sách, tác giả, số chương, nội dung chính, giá trị bài học) của tác phẩm.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Hiểu và trân trọng giá trị nhân văn, ước mơ về một thế giới đại đồng, yêu thương nhau được truyền tải qua cuốn sách.
            </li>
        </ul>
    </div>

    <!-- 🚀 Khởi động tương tác -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-6">
        <h3 class="text-2xl md:text-5xl font-black text-emerald-800 border-b border-emerald-100 pb-4 flex items-center gap-3">
            <span class="text-xl md:text-3xl">🚀</span>
            Khởi động: Cuốn sách em yêu thích
        </h3>
        <p class="text-lg text-gray-700 font-bold leading-relaxed">
            Hãy giới thiệu với Thầy E và các bạn về một quyển sách mà em thích nhất (tên sách, tác giả hoặc lý do em thích quyển sách đó nhé):
        </p>
        <div class="max-w-3xl mx-auto space-y-4 pt-2">
            <input type="text" id="warmup-book-title" placeholder="Nhập tên cuốn sách em yêu thích vào đây..." class="w-full p-4 border-2 border-emerald-100 rounded-2xl outline-none focus:border-emerald-500 font-bold bg-emerald-50/10 text-lg md:text-xl shadow-inner">
            <div class="flex justify-center">
                <button onclick="startWarmupVn85()" class="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-lg rounded-2xl shadow-lg hover:shadow-xl active:scale-95 transition-all">GỬI CHO THẦY E ✉️</button>
            </div>
            <div id="warmup-feedback" class="hidden p-5 rounded-3xl border-2 font-bold text-lg text-center shadow-lg transition-all animate-bounce-slow"></div>
        </div>
    </div>

    <!-- 📖 Phần Bài đọc -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-6 relative">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-emerald-100 pb-6 text-lg md:text-3xl">
            <div>
                <span class="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Bài đọc chính</span>
                <h3 class="text-xl md:text-3xl font-black text-emerald-900 mt-2">Giới thiệu sách DẾ MÈN PHIÊU LƯU KÍ</h3>
            </div>
            <!-- Loa đọc mẫu Edge TTS -->
            <button onclick="window.speakText && window.speakText('Dế Mèn phiêu lưu kí của nhà văn Tô Hoài là cuốn sách gồm 10 chương, kể về cuộc phiêu lưu của Dế Mèn trong thế giới côn trùng sinh động và ngộ nghĩnh. Chú Dế Mèn lúc đầu kiêu căng, ngạo mạn, gây hậu quả tai hại cho chính mình và bạn bè xung quanh. Nhưng trên những chặng đường phiêu lưu, chú đã dần khôn lớn, trở thành một chú dế can đảm, tốt bụng, trượng nghĩa...')" 
                    class="px-5 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-black rounded-2xl flex items-center gap-2 border border-emerald-100 shadow-sm active:scale-95 transition-all text-base">
                <span>🔊 Nghe đọc mẫu</span>
            </button>
        </div>

        <div class="space-y-8">
            <div class="w-full bg-emerald-50/10 p-6 md:p-8 rounded-[40px] border border-emerald-100/50 shadow-inner relative overflow-hidden">
                <!-- Ảnh minh họa SGK (bấm phóng to) -->
                <div onclick="window.showMathFeedback('Ảnh minh họa SGK Tiết 85', '🦗', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/85/85.png&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Ảnh minh họa SGK Tiết 85&quot;&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-white p-4 rounded-3xl border border-emerald-100 shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group border-4 border-white">
                    <img src="assets/images/tiengviet_5_1/85/85.png" alt="Ảnh minh họa Dế Mèn" class="w-full h-auto object-cover group-hover:scale-105 transition-all duration-500">
                    <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span class="px-4 py-2 bg-white/95 rounded-full text-xs font-black text-emerald-800 shadow-md">🔍 PHÓNG TO</span>
                    </div>
                    <p class="text-[10px] text-gray-800 font-bold text-center mt-3 leading-tight">Dế Mèn phiêu lưu kí & Ếch cốm (Trang 114 SGK)</p>
                </div>

                <div id="bai-doc-de-men" class="serif-font text-gray-800 leading-relaxed space-y-6 text-justify text-xl md:text-4xl">
                    <p class="indent-8">
                        <span class="text-emerald-700 font-bold text-lg md:text-3xl">Dế Mèn phiêu lưu kí</span> của nhà văn Tô Hoài là cuốn sách gồm 10 chương, kể về cuộc phiêu lưu của Dế Mèn trong thế giới côn trùng sinh động và ngộ nghĩnh. Chú Dế Mèn lúc đầu kiêu căng, ngạo mạn, gây hậu quả tai hại cho chính mình và bạn bè xung quanh. Nhưng trên những chặng đường phiêu lưu, chú đã dần khôn lớn, trở thành một chú dế can đảm, tốt bụng, 
                        <span class="text-emerald-600 underline cursor-help bg-emerald-50 px-1.5 py-0.5 rounded shadow-sm border border-emerald-100" onclick="alert('Trượng nghĩa: trọng điều phải, dựa vào lẽ phải để hành động.')" title="Nhấp để xem giải nghĩa từ">trượng nghĩa</span>,... Những trải nghiệm của Dế Mèn đem lại cho độc giả bài học nhẹ nhàng về tình bạn, về thái độ và cách ứng xử trong cuộc sống, đồng thời truyền tải ước mơ cao đẹp về một thế giới đại đồng, nơi tất cả đều là bạn bè, anh em.
                    </p>
                    <p class="indent-8">
                        <span class="text-emerald-700 font-bold text-lg md:text-3xl">Dế Mèn phiêu lưu kí</span> đã đạt được những con số rất ấn tượng: hơn 100 lần tái bản trong nước; được xuất bản ở gần 40 quốc gia. Đặc biệt, cuốn sách đã được dịch sang 15 thứ tiếng, trở thành tác phẩm văn học Việt Nam được dịch ra nhiều thứ tiếng nhất tính đến nay.
                    </p>
                    <p class="indent-8">
                        Hãy cùng mở trang sách, để bước vào hành trình phiêu lưu đầy hấp dẫn cùng Dế Mèn và những người bạn.
                    </p>
                    <p class="text-right text-gray-500 font-bold text-lg md:text-xl mt-4">
                        (Huy Quang)
                    </p>
                </div>
            </div>

            <!-- Bìa sách SVG tương tác chuyển xuống dưới giữa -->
            <div class="max-w-md mx-auto bg-white p-4 rounded-3xl border-2 border-emerald-100 shadow-md space-y-3 relative overflow-hidden">
                <h4 class="text-sm font-black text-emerald-800 text-center uppercase tracking-wide">Bìa sách Tương tác 🦗</h4>
                <div class="w-full aspect-[3/4] bg-emerald-600 rounded-2xl p-4 flex flex-col justify-between text-white shadow-lg relative border-4 border-emerald-700/50">
                    <!-- Tác giả -->
                    <div class="text-center bg-emerald-700/60 py-1.5 rounded-xl cursor-pointer hover:bg-yellow-500 hover:text-gray-900 transition-all font-black text-base shadow border border-white/20" onclick="alert('Nhà văn Tô Hoài (1920-2014) là một trong những nhà văn lớn của văn học Việt Nam hiện đại, nổi tiếng với nhiều tác phẩm viết cho thiếu nhi.')">
                        TÔ HOÀI
                    </div>
                    
                    <!-- Minh họa SVG Dế Mèn nhỏ -->
                    <div class="flex justify-center items-center my-4">
                        <svg viewBox="0 0 100 100" class="w-24 h-24 drop-shadow-lg">
                            <!-- Grass leaf -->
                            <path d="M 0 80 Q 50 10 100 60 Q 60 70 0 80" fill="#22c55e" />
                            <!-- Cricket (Dế Mèn) -->
                            <ellipse cx="50" cy="50" rx="20" ry="10" fill="#78350f" transform="rotate(-15 50 50)" />
                            <circle cx="65" cy="45" r="7" fill="#78350f" />
                            <circle cx="67" cy="43" r="2" fill="#fff" />
                            <circle cx="67" cy="43" r="0.8" fill="#000" />
                            <!-- Antennae -->
                            <path d="M 67 40 Q 85 20 90 30" fill="none" stroke="#78350f" stroke-width="1.5" />
                            <path d="M 65 38 Q 80 15 82 25" fill="none" stroke="#78350f" stroke-width="1.5" />
                            <!-- Legs -->
                            <path d="M 40 55 Q 30 70 20 65" fill="none" stroke="#78350f" stroke-width="2" />
                            <path d="M 50 55 Q 45 75 40 70" fill="none" stroke="#78350f" stroke-width="2" />
                        </svg>
                    </div>
                    
                    <!-- Tên tác phẩm -->
                    <div class="text-center bg-yellow-400 text-emerald-950 p-2.5 rounded-xl cursor-pointer hover:bg-white hover:text-emerald-900 transition-all font-black text-lg md:text-xl shadow border-2 border-yellow-500" onclick="alert('Dế Mèn phiêu lưu kí là tác phẩm truyện dài viết cho thiếu nhi nổi tiếng nhất của nhà văn Tô Hoài, viết năm 1941.')">
                        DẾ MÈN<br>PHIÊU LƯU KÍ
                    </div>
                </div>
                <p class="text-[10px] text-gray-500 font-bold text-center">💡 Nhấp vào Tác giả hoặc Tên sách trên bìa để khám phá thêm thông tin!</p>
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
                    Tác phẩm ca ngợi khát vọng tự do, tình hữu ái của muôn loài và tinh thần trượng nghĩa của chú Dế Mèn trong hành trình phiêu lưu khắp thế giới đại đồng. Từ đó truyền tải những bài học nhân sinh nhẹ nhàng về tình bạn và thái độ ứng xử tử tế trong cuộc sống.
                </p>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📖 Tìm hiểu bài -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-8">
        <div class="flex items-center gap-3 border-b border-emerald-100 pb-4">
            <span class="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-black flex items-center justify-center text-lg md:text-2xl shadow-md">❓</span>
            <h3 class="text-2xl md:text-5xl font-black text-emerald-800">Tìm hiểu bài học</h3>
        </div>

        <!-- Câu hỏi 1: Ghép cặp thông tin bằng Dropdown -->
        <div class="space-y-4">
            <h4 class="text-xl font-black text-gray-800 flex items-start gap-2">
                <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-sm shrink-0 mt-0.5">1</span>
                Nêu những thông tin em biết qua lời giới thiệu sách:
            </h4>
            <div class="max-w-4xl mx-auto bg-emerald-50/30 p-6 rounded-3xl border border-emerald-100/50 space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div class="bg-white px-4 py-3 rounded-2xl border border-emerald-100 font-black text-gray-700 text-base md:text-lg flex items-center gap-2">
                        <span>🏷️</span> Tên tác phẩm:
                    </div>
                    <select id="vn85-c1-t1" class="w-full p-3.5 border-2 border-emerald-100 rounded-2xl font-bold bg-white text-base md:text-lg outline-none focus:border-emerald-500">
                        <option value="">-- Chọn thông tin phù hợp --</option>
                        <option value="to_hoai">Nhà văn Tô Hoài</option>
                        <option value="de_men_plk">Dế Mèn phiêu lưu kí</option>
                        <option value="10_chuong">Gồm 10 chương</option>
                        <option value="cuoc_phieu_luu">Cuộc phiêu lưu của Dế Mèn trong thế giới côn trùng</option>
                    </select>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div class="bg-white px-4 py-3 rounded-2xl border border-emerald-100 font-black text-gray-700 text-base md:text-lg flex items-center gap-2">
                        <span>✍️</span> Tác giả:
                    </div>
                    <select id="vn85-c1-t2" class="w-full p-3.5 border-2 border-emerald-100 rounded-2xl font-bold bg-white text-base md:text-lg outline-none focus:border-emerald-500">
                        <option value="">-- Chọn thông tin phù hợp --</option>
                        <option value="to_hoai">Nhà văn Tô Hoài</option>
                        <option value="de_men_plk">Dế Mèn phiêu lưu kí</option>
                        <option value="10_chuong">Gồm 10 chương</option>
                        <option value="cuoc_phieu_luu">Cuộc phiêu lưu của Dế Mèn trong thế giới côn trùng</option>
                    </select>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div class="bg-white px-4 py-3 rounded-2xl border border-emerald-100 font-black text-gray-700 text-base md:text-lg flex items-center gap-2">
                        <span>📖</span> Số chương:
                    </div>
                    <select id="vn85-c1-t3" class="w-full p-3.5 border-2 border-emerald-100 rounded-2xl font-bold bg-white text-base md:text-lg outline-none focus:border-emerald-500">
                        <option value="">-- Chọn thông tin phù hợp --</option>
                        <option value="to_hoai">Nhà văn Tô Hoài</option>
                        <option value="de_men_plk">Dế Mèn phiêu lưu kí</option>
                        <option value="10_chuong">Gồm 10 chương</option>
                        <option value="cuoc_phieu_luu">Cuộc phiêu lưu của Dế Mèn trong thế giới côn trùng</option>
                    </select>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div class="bg-white px-4 py-3 rounded-2xl border border-emerald-100 font-black text-gray-700 text-base md:text-lg flex items-center gap-2">
                        <span>🎯</span> Nội dung chính:
                    </div>
                    <select id="vn85-c1-t4" class="w-full p-3.5 border-2 border-emerald-100 rounded-2xl font-bold bg-white text-base md:text-lg outline-none focus:border-emerald-500">
                        <option value="">-- Chọn thông tin phù hợp --</option>
                        <option value="to_hoai">Nhà văn Tô Hoài</option>
                        <option value="de_men_plk">Dế Mèn phiêu lưu kí</option>
                        <option value="10_chuong">Gồm 10 chương</option>
                        <option value="cuoc_phieu_luu">Cuộc phiêu lưu của Dế Mèn trong thế giới côn trùng</option>
                    </select>
                </div>
                
                <div class="flex justify-end items-center gap-4"><button onclick="checkMatchVn85();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-c1" class="hidden p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner"></div>
            </div>
        </div>

        <!-- Câu hỏi 2 & 3: Lựa chọn trắc nghiệm nhanh -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Câu 2 -->
            <div class="bg-emerald-50/10 p-6 rounded-3xl border border-emerald-100/50 space-y-4">
                <h4 class="text-lg font-black text-gray-800 flex items-start gap-2">
                    <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                    Nhân vật chính của cuốn sách (Dế Mèn) biến đổi thế nào qua cuộc phiêu lưu?
                </h4>
                <div class="space-y-2.5 font-bold text-gray-700">
                    <label class="flex items-center gap-2.5 p-3 bg-white hover:bg-emerald-50 border border-emerald-100 rounded-xl cursor-pointer transition-colors">
                        <input type="radio" name="vn85-c2" value="0" class="w-4 h-4 accent-emerald-600">
                        <span>Luôn can đảm, tốt bụng và trượng nghĩa từ đầu đến cuối câu chuyện.</span>
                    </label>
                    <label class="flex items-center gap-2.5 p-3 bg-white hover:bg-emerald-50 border border-emerald-100 rounded-xl cursor-pointer transition-colors">
                        <input type="radio" name="vn85-c2" value="1" class="w-4 h-4 accent-emerald-600">
                        <span>Lúc đầu kiêu căng, ngạo mạn, sau dần khôn lớn thành chú dế can đảm, tốt bụng, trượng nghĩa.</span>
                    </label>
                    <label class="flex items-center gap-2.5 p-3 bg-white hover:bg-emerald-50 border border-emerald-100 rounded-xl cursor-pointer transition-colors">
                        <input type="radio" name="vn85-c2" value="2" class="w-4 h-4 accent-emerald-600">
                        <span>Lúc đầu nhút nhát, sợ sệt, sau dần trở nên kiêu căng và hống hách hơn.</span>
                    </label>
                </div>
            </div>

            <!-- Câu 3 -->
            <div class="bg-emerald-50/10 p-6 rounded-3xl border border-emerald-100/50 space-y-4">
                <h4 class="text-lg font-black text-gray-800 flex items-start gap-2">
                    <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                    Theo lời giới thiệu, cuốn sách mang lại những bài học quý giá gì?
                </h4>
                <div class="space-y-2.5 font-bold text-gray-700">
                    <label class="flex items-center gap-2.5 p-3 bg-white hover:bg-emerald-50 border border-emerald-100 rounded-xl cursor-pointer transition-colors">
                        <input type="radio" name="vn85-c3" value="0" class="w-4 h-4 accent-emerald-600">
                        <span>Bài học nhẹ nhàng về tình bạn, thái độ ứng xử và ước mơ về một thế giới đại đồng.</span>
                    </label>
                    <label class="flex items-center gap-2.5 p-3 bg-white hover:bg-emerald-50 border border-emerald-100 rounded-xl cursor-pointer transition-colors">
                        <input type="radio" name="vn85-c3" value="1" class="w-4 h-4 accent-emerald-600">
                        <span>Bài học về cách săn bắt các loài côn trùng và sinh tồn nơi hoang dã.</span>
                    </label>
                    <label class="flex items-center gap-2.5 p-3 bg-white hover:bg-emerald-50 border border-emerald-100 rounded-xl cursor-pointer transition-colors">
                        <input type="radio" name="vn85-c3" value="2" class="w-4 h-4 accent-emerald-600">
                        <span>Bài học về tầm quan trọng của việc học võ và cách tự bảo vệ bản thân.</span>
                    </label>
                </div>
            </div>
        </div>

        <!-- Câu hỏi 4: Nối các con số ấn tượng -->
        <div class="space-y-4">
            <h4 class="text-xl font-black text-gray-800 flex items-start gap-2">
                <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-sm shrink-0 mt-0.5">4</span>
                Hãy kết nối các con số ấn tượng trong lời giới thiệu với ý nghĩa của nó:
            </h4>
            <div class="max-w-4xl mx-auto bg-emerald-50/30 p-6 rounded-3xl border border-emerald-100/50 space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div class="bg-white px-4 py-3 rounded-2xl border border-emerald-100 font-black text-gray-700 text-base md:text-lg flex items-center gap-3">
                        <span class="w-10 h-10 rounded-full bg-amber-500 text-white font-black flex items-center justify-center text-base shadow">100+</span>
                        Hơn 100 lần:
                    </div>
                    <select id="vn85-c4-n100" class="w-full p-3.5 border-2 border-emerald-100 rounded-2xl font-bold bg-white text-base md:text-lg outline-none focus:border-emerald-500">
                        <option value="">-- Chọn ý nghĩa tương ứng --</option>
                        <option value="quoc_gia">quốc gia đã xuất bản tác phẩm</option>
                        <option value="tai_ban">lần tái bản cuốn sách trong nước</option>
                        <option value="ngon_ngu">thứ tiếng được dịch sang</option>
                    </select>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div class="bg-white px-4 py-3 rounded-2xl border border-emerald-100 font-black text-gray-700 text-base md:text-lg flex items-center gap-3">
                        <span class="w-10 h-10 rounded-full bg-blue-500 text-white font-black flex items-center justify-center text-base shadow">40</span>
                        Gần 40:
                    </div>
                    <select id="vn85-c4-n40" class="w-full p-3.5 border-2 border-emerald-100 rounded-2xl font-bold bg-white text-base md:text-lg outline-none focus:border-emerald-500">
                        <option value="">-- Chọn ý nghĩa tương ứng --</option>
                        <option value="quoc_gia">quốc gia đã xuất bản tác phẩm</option>
                        <option value="tai_ban">lần tái bản cuốn sách trong nước</option>
                        <option value="ngon_ngu">thứ tiếng được dịch sang</option>
                    </select>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div class="bg-white px-4 py-3 rounded-2xl border border-emerald-100 font-black text-gray-700 text-base md:text-lg flex items-center gap-3">
                        <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-base shadow">15</span>
                        Được dịch sang 15:
                    </div>
                    <select id="vn85-c4-n15" class="w-full p-3.5 border-2 border-emerald-100 rounded-2xl font-bold bg-white text-base md:text-lg outline-none focus:border-emerald-500">
                        <option value="">-- Chọn ý nghĩa tương ứng --</option>
                        <option value="quoc_gia">quốc gia đã xuất bản tác phẩm</option>
                        <option value="tai_ban">lần tái bản cuốn sách trong nước</option>
                        <option value="ngon_ngu">thứ tiếng được dịch sang</option>
                    </select>
                </div>
                
                <div class="flex justify-end items-center gap-4"><button onclick="checkNumbersVn85();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-c4" class="hidden p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner"></div>
            </div>
        </div>

        <!-- Câu hỏi 5: Cảm nghĩ tự luận cảm thụ (AI Grader) -->
        <div class="space-y-4">
            <h4 class="text-xl font-black text-gray-800 flex items-start gap-2">
                <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-sm shrink-0 mt-0.5">5</span>
                Sau khi đọc lời giới thiệu, em có cảm nghĩ gì về cuốn sách Dế Mèn phiêu lưu kí?
            </h4>
            <div class="space-y-4 max-w-4xl mx-auto">
                <textarea id="vn85-essay-input" rows="4" placeholder="Nhập cảm nghĩ của em (khoảng 3-5 câu)... Gợi ý: Cuốn sách có gì hấp dẫn? Em có mong muốn được đọc hành trình của Dế Mèn không?..." class="w-full p-4 border-2 border-emerald-100 rounded-3xl outline-none focus:border-emerald-500 font-bold bg-emerald-50/10 text-lg md:text-xl shadow-inner"></textarea>
                
                <div class="flex justify-end items-center gap-4"><button onclick="resetVn85()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="checkWritingVn85();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="vn85-essay-fb" class="hidden p-5 rounded-3xl border-2 font-bold text-lg text-center shadow-lg transition-all"></div>
            </div>
        </div>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Cuốn sách 'Dế Mèn phiêu lưu kí' là tác phẩm của nhà văn nào?",
            "options": [
                "Nhà văn Tô Hoài",
                "Nhà văn Nguyễn Nhật Ánh",
                "Nhà văn Trần Đăng Khoa",
                "Nhà văn Phan Nguyên"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Cuốn sách 'Dế Mèn phiêu lưu kí' gồm bao nhiêu chương?",
            "options": [
                "5 chương",
                "8 chương",
                "10 chương",
                "12 chương"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Cuốn sách kể về cuộc phiêu lưu của ai?",
            "options": [
                "Dế Trũi",
                "Dế Mèn",
                "Dế Choắt",
                "Ếch Cốm"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Dế Mèn phiêu lưu trong thế giới của loài sinh vật nào?",
            "options": [
                "Côn trùng",
                "Thú hoang",
                "Chim muông",
                "Thủy sản"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tính cách của chú Dế Mèn lúc đầu được giới thiệu như thế nào?",
            "options": [
                "Hiền lành, tốt bụng và nhút nhát",
                "Kiêu căng, ngạo mạn, gây tai hại cho bản thân và bạn bè",
                "Can đảm, dũng cảm và thích giúp đỡ mọi người",
                "Chăm chỉ, cần cù và ham học hỏi"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Trải qua những chặng đường phiêu lưu, Dế Mèn đã trở thành một chú dế thế nào?",
            "options": [
                "Nhút nhát, sợ sệt thế giới xung quanh",
                "Kiêu căng và độc ác hơn trước",
                "Can đảm, tốt bụng, trượng nghĩa",
                "Lười biếng và không thích đi đâu nữa"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Từ 'trượng nghĩa' trong bài đọc có nghĩa là gì?",
            "options": [
                "Trọng điều phải, dựa vào lẽ phải để hành động",
                "Thích khoe khoang sức mạnh của bản thân",
                "Ghét bỏ những kẻ yếu thế hơn mình",
                "Chỉ biết nghĩ đến lợi ích cá nhân"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tác phẩm 'Dế Mèn phiêu lưu kí' đem lại cho độc giả bài học nhẹ nhàng về điều gì?",
            "options": [
                "Cách chế tạo các công cụ trong gia đình",
                "Tình bạn, về thái độ và cách ứng xử trong cuộc sống",
                "Cách trốn tránh khó khăn khi đi xa",
                "Mẹo lừa dối kẻ thù để chiến thắng"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Cuốn sách truyền tải ước mơ cao đẹp về một thế giới thế nào?",
            "options": [
                "Một thế giới giàu có và tràn ngập vàng bạc",
                "Một thế giới đại đồng, nơi tất cả đều là bạn bè, anh em",
                "Một thế giới chỉ có loài dế sinh sống",
                "Một thế giới không cần làm việc vẫn có ăn"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Cuốn sách 'Dế Mèn phiêu lưu kí' đã đạt được con số ấn tượng nào về số lần tái bản trong nước?",
            "options": [
                "Hơn 100 lần tái bản trong nước",
                "Hơn 50 lần tái bản trong nước",
                "Hơn 200 lần tái bản trong nước",
                "Hơn 10 lần tái bản trong nước"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Cuốn sách 'Dế Mèn phiêu lưu kí' được xuất bản ở khoảng bao nhiêu quốc gia?",
            "options": [
                "Gần 15 quốc gia",
                "Gần 40 quốc gia",
                "Gần 100 quốc gia",
                "Gần 5 quốc gia"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Tác phẩm đã được dịch sang bao nhiêu thứ tiếng?",
            "options": [
                "15 thứ tiếng",
                "40 thứ tiếng",
                "100 thứ tiếng",
                "10 thứ tiếng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Cuốn sách nào là tác phẩm văn học Việt Nam được dịch ra nhiều thứ tiếng nhất tính đến nay?",
            "options": [
                "Đất rừng phương Nam",
                "Kính vạn hoa",
                "Dế Mèn phiêu lưu kí",
                "Búp sen xanh"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Ai là người viết lời giới thiệu sách 'Dế Mèn phiêu lưu kí' trong bài đọc này?",
            "options": [
                "Nhà văn Tô Hoài",
                "Huy Quang",
                "Nguyễn Nhật Ánh",
                "Trần Đăng Khoa"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Lời kết bài viết khuyên độc giả làm gì?",
            "options": [
                "Hãy cùng mở trang sách để bước vào hành trình phiêu lưu cùng Dế Mèn",
                "Hãy mua thật nhiều sách để trang trí phòng học",
                "Hãy tự mình bắt các chú dế để nuôi thử",
                "Hãy tự viết một cuốn sách giống như Tô Hoài"
            ],
            "answer": 0,
            "level": 0
        }
    ]
};

// ====== INTERACTIVE SCRIPT ======
// Hàm xử lý hoạt động Khởi động
window.startWarmupVn85 = function() {
    const titleVal = document.getElementById('warmup-book-title').value.trim();
    const fb = document.getElementById('warmup-feedback');
    if (!titleVal) {
        alert('Em hãy nhập tên một cuốn sách em yêu thích nhé!');
        return;
    }
    
    fb.classList.remove('hidden', 'bg-red-100', 'border-red-400', 'text-red-800', 'bg-emerald-100', 'border-emerald-400', 'text-emerald-800');
    
    // Tạo phản hồi ngẫu nhiên từ Thầy E khuyến khích
    const quotes = [
        `Wow! Cuốn sách "${titleVal}" là một lựa chọn tuyệt vời đấy! Thầy E khuyên em nên duy trì thói quen đọc những cuốn sách bổ ích thế này mỗi ngày nhé. 🌟`,
        `Thầy E rất thích cuốn sách "${titleVal}"! Những bài học trong sách sẽ nuôi dưỡng tâm hồn và trí tuệ của em lớn khôn từng ngày. ✨`,
        `Tuyệt vời! "${titleVal}" là một tác phẩm rất hay dành cho tuổi học trò. Hãy chia sẻ thêm những điều thú vị từ cuốn sách này với các bạn nhé! 🦗`
    ];
    const randQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    fb.innerHTML = randQuote;
    fb.classList.add('block', 'bg-emerald-50', 'border-emerald-300', 'text-emerald-800');
};

// Hàm xử lý kiểm tra Câu hỏi 1 (Dropdown Matching)
window.checkMatchVn85 = function() {
    const ans1 = document.getElementById('vn85-c1-t1').value;
    const ans2 = document.getElementById('vn85-c1-t2').value;
    const ans3 = document.getElementById('vn85-c1-t3').value;
    const ans4 = document.getElementById('vn85-c1-t4').value;
    const fb = document.getElementById('fb-c1');
    
    if (!ans1 || !ans2 || !ans3 || !ans4) {
        alert('Em hãy chọn đầy đủ thông tin cho cả 4 câu hỏi nhé!');
        return;
    }
    
    fb.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');
    
    // Đáp án đúng:
    // Tên tác phẩm -> de_men_plk
    // Tác giả -> to_hoai
    // Số chương -> 10_chuong
    // Nội dung chính -> cuoc_phieu_luu
    
    let isCorrect = (ans1 === 'de_men_plk' && ans2 === 'to_hoai' && ans3 === '10_chuong' && ans4 === 'cuoc_phieu_luu');
    
    if (isCorrect) {
        fb.innerHTML = '🎉 Tuyệt vời! Em đã nối chính xác 100% các thông tin cơ bản về tác phẩm rồi đấy!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-green-100 text-green-800 border-2 border-green-300';
    } else {
        fb.innerHTML = '⚠️ Có thông tin chưa chính xác rồi, em hãy đọc kỹ bài đọc và thử chọn lại nhé!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-red-100 text-red-800 border-2 border-red-300';
    }
};

// Hàm xử lý kiểm tra Câu hỏi 4 (Numbers Matching)
window.checkNumbersVn85 = function() {
    const n100 = document.getElementById('vn85-c4-n100').value;
    const n40 = document.getElementById('vn85-c4-n40').value;
    const n15 = document.getElementById('vn85-c4-n15').value;
    const fb = document.getElementById('fb-c4');
    
    if (!n100 || !n40 || !n15) {
        alert('Em hãy nối đầy đủ ý nghĩa cho cả 3 con số nhé!');
        return;
    }
    
    fb.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');
    
    // Đáp án đúng:
    // Hơn 100 lần -> tai_ban
    // Gần 40 -> quoc_gia
    // Dịch sang 15 -> ngon_ngu
    
    let isCorrect = (n100 === 'tai_ban' && n40 === 'quoc_gia' && n15 === 'ngon_ngu');
    
    if (isCorrect) {
        fb.innerHTML = '🎉 Xuất sắc! Em đã ghép nối đúng hoàn toàn ý nghĩa các con số ấn tượng của cuốn sách!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-green-100 text-green-800 border-2 border-green-300';
    } else {
        fb.innerHTML = '⚠️ Chưa đúng rồi, em hãy kiểm tra lại thông tin về các con số 100, 40, 15 trong bài đọc nhé!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-red-100 text-red-800 border-2 border-red-300';
    }
};

// Hàm chấm điểm Tự luận Câu hỏi 5 bằng AI Thầy E
window.checkWritingVn85 = function() {
    const text = document.getElementById('vn85-essay-input').value.trim();
    const fb = document.getElementById('vn85-essay-fb');
    
    if (!text) {
        alert('Em hãy nhập cảm nghĩ của mình trước khi nộp bài cho Thầy E chấm nhé!');
        return;
    }
    
    fb.classList.remove('hidden', 'bg-red-50', 'text-red-800', 'border-red-200', 'bg-emerald-50', 'text-emerald-800', 'border-emerald-200');
    
    // Đếm số câu cơ bản dựa trên dấu chấm, hỏi, than
    const sentenceCount = text.split(/[.!?]+/).filter(s => s.trim().length > 5).length;
    
    // Quét từ khóa
    const keywords = ["dế mèn", "tô hoài", "phiêu lưu", "thích", "muốn đọc", "can đảm", "tốt bụng", "trượng nghĩa", "bài học", "tình bạn"];
    const matchedKeywords = keywords.filter(kw => text.toLowerCase().includes(kw));
    
    let score = 50; // Điểm nền
    let comment = "";
    
    if (sentenceCount >= 3) {
        score += 20;
    } else {
        comment += "Đoạn văn của em hơi ngắn, em nên viết từ 3-5 câu để bài đầy đủ ý hơn nhé. ";
    }
    
    if (matchedKeywords.length >= 2) {
        score += 30;
    } else {
        score += matchedKeywords.length * 10;
        comment += "Em nên bổ sung thêm các chi tiết về nhân vật Dế Mèn hoặc bài học mà em ấn tượng để đoạn văn sâu sắc hơn. ";
    }
    
    score = Math.min(score, 100);
    
    if (score >= 80) {
        fb.innerHTML = `🌟 **Điểm đạt được: ${score}/100**<br><br>
        **Lời nhận xét từ Thầy E:** Cảm nghĩ của em rất chân thực và dồi dào cảm xúc! Em đã diễn đạt tốt, nêu bật được mong muốn hoặc bài học sâu sắc từ tác phẩm. ${comment} Hãy luôn nuôi dưỡng tình yêu văn học nhé!`;
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg mt-2 shadow-lg bg-emerald-50 border-emerald-300 text-emerald-800 animate-fade-in';
    } else {
        fb.innerHTML = `⚠️ **Điểm đạt được: ${score}/100**<br><br>
        **Lời nhận xét từ Thầy E:** Đoạn văn có ý tưởng tốt nhưng cần diễn đạt trau chuốt hơn. ${comment} Em hãy thử chỉnh sửa và nhấn nút Chấm điểm lại nhé!`;
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg mt-2 shadow-lg bg-amber-50 border-amber-300 text-amber-800 animate-fade-in';
    }
};

// Hàm Đặt lại / Làm lại bài học
window.resetVn85 = function() {
    document.getElementById('vn85-essay-input').value = "";
    const fbEssay = document.getElementById('vn85-essay-fb');
    fbEssay.classList.add('hidden');
    fbEssay.innerHTML = "";
    
    // reset dropdowns c1
    document.getElementById('vn85-c1-t1').value = "";
    document.getElementById('vn85-c1-t2').value = "";
    document.getElementById('vn85-c1-t3').value = "";
    document.getElementById('vn85-c1-t4').value = "";
    const fbC1 = document.getElementById('fb-c1');
    fbC1.classList.add('hidden');
    fbC1.innerHTML = "";

    // reset dropdowns c4
    document.getElementById('vn85-c4-n100').value = "";
    document.getElementById('vn85-c4-n40').value = "";
    document.getElementById('vn85-c4-n15').value = "";
    const fbC4 = document.getElementById('fb-c4');
    fbC4.classList.add('hidden');
    fbC4.innerHTML = "";

    // Reset radios c2 & c3
    const r2 = document.getElementsByName('vn85-c2');
    r2.forEach(r => r.checked = false);
    const r3 = document.getElementsByName('vn85-c3');
    r3.forEach(r => r.checked = false);
    
    alert('Đã đặt lại toàn bộ bài làm của em!');
};
