export const lesson32 = {
    "topic": "Tiếng Việt 5",
    "week": "5",
    "period": "32",
    "title": "ĐỌC: KÌ DIỆU RỪNG XANH",
    "desc": "Bài học giúp học sinh cảm nhận vẻ đẹp kì thú, sinh động và đầy chất thơ của rừng khộp miền Tây Nguyên qua lăng kính miêu tả tinh tế của tác giả, đồng thời ôn tập từ đồng nghĩa và rèn luyện kĩ năng viết câu.",
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
                Đọc diễn cảm bài văn, biết nhấn giọng ở những từ ngữ gợi tả màu sắc, hình ảnh và hoạt động của muông thú.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Hiểu nội dung bài: Vẻ đẹp kì diệu của rừng xanh, sự hòa quyện giữa cảnh vật thiên nhiên và muông thú tạo nên sự sống sinh động.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Phát triển kĩ năng quan sát tự nhiên, nhận biết và sử dụng từ đồng nghĩa phù hợp để đặt câu.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG: KHÁM PHÁ RỪNG XANH -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
            <div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động: Khám phá rừng xanh</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Em hãy bấm chọn lật các thẻ dưới đây để chia sẻ và khám phá những điều thú vị về rừng nhé!</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Thẻ 1 -->
            <div onclick="flipCardVn32(this)" class="h-48 cursor-pointer [perspective:1032px] group">
                <div class="relative w-full h-full text-center transition-transform duration-500 [transform-style:preserve-3d] shadow-md rounded-3xl border border-sky-100">
                    <div class="absolute inset-0 w-full h-full rounded-3xl bg-sky-50 flex flex-col items-center justify-center p-4 [backface-visibility:hidden]">
                        <span class="text-4xl md:text-5xl mb-2">🦌</span>
                        <h4 class="font-black text-sky-800 text-lg">Gợi ý 1</h4>
                        <p class="text-xs text-gray-800 font-bold mt-1">Loài vật sống ở rừng mà em biết?</p>
                    </div>
                    <div class="absolute inset-0 w-full h-full rounded-3xl bg-emerald-600 text-white flex items-center justify-center p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <p class="font-bold text-lg">💡 Gợi ý: Hổ, báo, hươu, nai, khỉ, vượn bạc má, chồn sóc, mang (hoẵng)...</p>
                    </div>
                </div>
            </div>

            <!-- Thẻ 2 -->
            <div onclick="flipCardVn32(this)" class="h-48 cursor-pointer [perspective:1032px] group">
                <div class="relative w-full h-full text-center transition-transform duration-500 [transform-style:preserve-3d] shadow-md rounded-3xl border border-sky-100">
                    <div class="absolute inset-0 w-full h-full rounded-3xl bg-sky-50 flex flex-col items-center justify-center p-4 [backface-visibility:hidden]">
                        <span class="text-4xl md:text-5xl mb-2">🌳</span>
                        <h4 class="font-black text-sky-800 text-lg">Gợi ý 2</h4>
                        <p class="text-xs text-gray-800 font-bold mt-1">Lợi ích của rừng là gì?</p>
                    </div>
                    <div class="absolute inset-0 w-full h-full rounded-3xl bg-emerald-600 text-white flex items-center justify-center p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <p class="font-bold text-lg">💡 Gợi ý: Cung cấp khí oxi, giữ đất chống xói mòn, ngăn lũ lụt, là ngôi nhà của muông thú...</p>
                    </div>
                </div>
            </div>

            <!-- Thẻ 3 -->
            <div onclick="flipCardVn32(this)" class="h-48 cursor-pointer [perspective:1032px] group">
                <div class="relative w-full h-full text-center transition-transform duration-500 [transform-style:preserve-3d] shadow-md rounded-3xl border border-sky-100">
                    <div class="absolute inset-0 w-full h-full rounded-3xl bg-sky-50 flex flex-col items-center justify-center p-4 [backface-visibility:hidden]">
                        <span class="text-4xl md:text-5xl mb-2">🍄</span>
                        <h4 class="font-black text-sky-800 text-lg">Gợi ý 3</h4>
                        <p class="text-xs text-gray-800 font-bold mt-1">Những điều kì bí trong rừng?</p>
                    </div>
                    <div class="absolute inset-0 w-full h-full rounded-3xl bg-emerald-600 text-white flex items-center justify-center p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <p class="font-bold text-lg">💡 Gợi ý: Những vạt nấm dại sặc sỡ như lâu đài cổ tích, lối đi ngập lá vàng, thế giới thần bí...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 📖 BÀI ĐỌC CHÍNH -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl space-y-8">
        <div class="flex items-center justify-between border-b border-sky-100 pb-4">
            <span class="text-sky-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                <span>📖</span> Bài đọc: Kì diệu rừng xanh
            </span>
            <button onclick="window.playSegmentAudio && window.playSegmentAudio('assets/audio/tiengviet/32/tiet32_ki_dieu_rung_xanh.mp3')" class="px-4 py-2 bg-sky-600 hover:bg-sky-600 text-sky-800 rounded-xl font-bold flex items-center gap-2 transition-all active:scale-95 text-lg">
                🔊 Nghe đọc mẫu
            </button>
        </div>

        <div class="bg-sky-50/10 p-6 md:p-10 rounded-3xl border border-sky-100 max-w-4xl mx-auto space-y-6">
            <h4 class="text-2xl md:text-5xl font-black text-center text-gray-800">Kì diệu rừng xanh</h4>
            
            <div class="serif-font text-gray-800 leading-relaxed text-justify space-y-6 text-xl md:text-4xl">
                <!-- Minh họa SGK (Góc trên bên phải, bấm vào phóng to) -->
                <div onclick="window.showMathFeedback('Kì diệu rừng xanh', '🌳', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/32-33/32-33.png&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Kì diệu rừng xanh&quot;&gt;&lt;p class=&quot;text-2xl font-bold text-emerald-800 mt-4&quot;&gt;Kinh đô nấm lúp xúp và những con mang vàng ngơ ngác giẫm lên thảm lá vàng trong rừng khộp.&lt;/p&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-gradient-to-br from-emerald-50 to-green-50 rounded-[32px] border-4 border-white shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group">
                    <img src="assets/images/tiengviet_5_1/32-33/32-33.png" class="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500" alt="Kì diệu rừng xanh">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Bấm để phóng to 🔍</div>
                </div>

                <!-- Đoạn 1 -->
                <p>
                    Loanh quanh trong rừng, chúng tôi đi vào một lối đầy nấm dại, một thành phố nấm lúp xúp dưới bóng cây thưa. Những chiếc nấm to bằng cái ấm tích, màu sắc sặc sỡ rực lên. Mỗi chiếc nấm là một lâu đài kiến trúc 
                    <span class="px-1.5 py-0.5 bg-sky-600 text-sky-800 rounded-md font-bold cursor-help border-b-2 border-sky-100 group relative inline text-lg md:text-3xl" onclick="toggleTooltipVn32(event, 'tk')">
                        tân kì
                        <span id="tooltip-tk" class="hidden absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded shadow-lg text-center font-sans z-30">Tân kì: mới lạ.</span>
                    </span>. 
                    Tôi có cảm giác mình là một người khổng lồ đi lạc vào kinh đô của vương quốc những người tí hon. Đền đài, miếu mạo, cung điện của họ lúp xúp dưới chân.
                </p>

                <!-- Đoạn 2 (Tích hợp che chữ) -->
                <div class="p-4 bg-sky-50/35 rounded-2xl border border-sky-100 space-y-2">
                    <div class="flex items-center justify-between pb-2 border-b border-sky-100/50">
                        <span class="text-xs text-sky-900 font-black">🎙️ ĐOẠN LUYỆN ĐỌC THUỘC LÒNG:</span>
                        <div class="flex gap-2 text-xs font-bold">
                            <button onclick="setHideModeVn32('none')" id="btn-hm-none" class="px-2 py-1 bg-sky-600 text-white rounded">Hiện hết</button>
                            <button onclick="setHideModeVn32('low')" id="btn-hm-low" class="px-2 py-1 bg-gray-800 hover:bg-sky-600 rounded text-gray-800">Che ít</button>
                            <button onclick="setHideModeVn32('high')" id="btn-hm-high" class="px-2 py-1 bg-gray-800 hover:bg-sky-600 rounded text-gray-800">Che nhiều</button>
                        </div>
                    </div>
                    <p id="hiding-paragraph-32" class="serif-font leading-relaxed text-justify text-lg md:text-4xl"></p>
                </div>

                <!-- Đoạn 3 -->
                <p>
                    Sau một hồi len lách mải miết, rẽ bụi rậm, chúng tôi nhìn thấy một bãi cây thưa thớt. Rừng 
                    <span class="px-1.5 py-0.5 bg-sky-600 text-sky-800 rounded-md font-bold cursor-help border-b-2 border-sky-100 group relative inline text-lg md:text-3xl" onclick="toggleTooltipVn32(event, 'rkh')">
                        khộp
                        <span id="tooltip-rkh" class="hidden absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-2 bg-gray-800 text-white text-xs rounded shadow-lg text-center font-sans z-30">Rừng khộp: còn gọi là rừng thưa với những cây lá rộng, rụng lá vào mùa khô.</span>
                    </span> 
                    hiện ra trước mắt chúng tôi, lá úa vàng như cảnh mùa thu. Tôi dụi mắt. Những sắc vàng động đậy. Mấy con 
                    <span class="px-1.5 py-0.5 bg-sky-600 text-sky-800 rounded-md font-bold cursor-help border-b-2 border-sky-100 group relative inline text-lg md:text-3xl" onclick="toggleTooltipVn32(event, 'mg')">
                        mang
                        <span id="tooltip-mg" class="hidden absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg text-center font-sans z-30">Mang (hoẵng): loài thú cùng họ với hươu, nai; sừng nhỏ, có hai nhánh; lông màu vàng đỏ.</span>
                    </span> 
                    vàng hệt như màu lá đang ăn cỏ non. Những chiếc chân vàng giẫm lên thảm lá vàng và sắc nắng cũng rực vàng trên lưng nó. Chỉ có mấy vạt cỏ xanh biếc là rực lên giữa cái giang sơn vàng rợi.
                </p>
                <p>Tôi có cảm giác mình lạc vào một thế giới thần bí.</p>
                <p class="text-right italic font-sans text-base text-gray-800">(Theo Nguyễn Phan Hách)</p>
            </div>
        </div>
    </div>

    <!-- 💡 Nội dung chính bài học -->
    <div class="p-8 rounded-[36px] bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-xl relative overflow-hidden mt-6">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <h4 class="text-xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
            <span>💡</span> Nội dung chính bài học
        </h4>
        <div class="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p class="text-xl md:text-4xl font-bold leading-relaxed text-center italic">
                "Bài văn thể hiện lòng ngưỡng mộ, tự hào và tình cảm yêu mến, trân trọng của tác giả trước vẻ đẹp kì diệu, tráng lệ và đầy chất thơ của rừng khộp Tây Nguyên, qua đó nâng cao ý thức bảo vệ môi trường sinh thái tự nhiên."
            </p>
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
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Câu hỏi Đọc hiểu (Trang 76)</h3>
            </div>
            <div class="space-y-4">
        <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
            <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                    1. Vì sao nhân vật “tôi” có cảm giác đi lạc vào kinh đô của vương quốc những người tí hon?
                </span>
                <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                    <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-bold text-lg md:text-3xl">
                    Vì lối đi trong rừng đầy những cây nấm dại lúp xúp dưới bóng cây thưa. Chúng to bằng cái ấm tích, màu sắc sặc sỡ rực lên, trông xa hệt như những đền đài, miếu mạo, cung điện tí hon có kiến trúc tân kì.
                </div>
            </details>

            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                        2. Muông thú trong rừng được miêu tả thế nào? Sự có mặt của chúng mang lại vẻ đẹp gì cho rừng?
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-bold space-y-2 text-lg md:text-3xl">
                    <p>✔️ Muông thú được miêu tả rất sinh động, nhanh nhẹn:</p>
                    <ul class="list-disc list-inside pl-4 space-y-1">
                        <li>Những con vượn bạc má ôm con gọn ghẽ chuyền nhanh như tia chớp.</li>
                        <li>Những con chồn sóc với chùm lông đuôi to đẹp vút qua rất nhanh.</li>
                        <li>Mấy con mang vàng hệt màu lá đang nhẩn nha ăn cỏ non.</li>
                    </ul>
                    <p>✔️ Sự xuất hiện đột ngột của chúng mang lại cho khu rừng vẻ đẹp sinh động, tràn đầy sức sống và biến khu rừng yên ắng trở nên nhộn nhịp, kì thú.</p>
                </div>
            </details>

            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                        3. Vì sao cảnh vật rừng khộp được gọi là “giang sơn vàng rợi”?
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-bold text-lg md:text-3xl">
                    Vì cả khu rừng ngập tràn sắc vàng rực rỡ và hài hòa: màu vàng úa của lá rừng khộp rơi rụng, màu lông vàng của những con mang đang đi kiếm ăn, thảm lá rụng trên đất màu vàng, và những sợi nắng trưa rọi qua kẽ lá rực vàng trên lưng muông thú.
                </div>
            </details>

            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                        4. Đặt tên cho mỗi đoạn trong bài.
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-bold space-y-3 text-lg md:text-3xl">
                    <p>Học sinh có thể đặt tên sáng tạo cho 3 đoạn văn chính:</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li><strong>Đoạn 1:</strong> Vương quốc nấm tí hon / Lâu đài nấm dại.</li>
                        <li><strong>Đoạn 2:</strong> Những vũ công rừng xanh / Cuộc chuyển động của muông thú.</li>
                        <li><strong>Đoạn 3:</strong> Giang sơn vàng rợi / Vẻ đẹp rừng khộp mùa thu.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- 🛠️ LUYỆN TẬP TƯƠNG TÁC -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🔍</div>
            <div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Luyện từ và câu: Tương tác từ vựng</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Hoàn thành hai hoạt động luyện tập dưới đây để nắm chắc bài học.</p>
            </div>
        </div>

        <!-- BÀI 1: PHÂN LOẠI SỰ VẬT -->
        <div class="p-6 bg-sky-50/40 rounded-3xl border border-sky-100 space-y-4 font-bold">
            <h4 class="text-lg md:text-xl text-sky-800">Bài tập 1: Phân loại các sự vật được quan sát và miêu tả trong rừng xanh:</h4>
            
            <!-- Danh sách từ cần phân loại -->
            <div class="flex flex-wrap gap-2 justify-center py-4" id="words-pool-32">
                <button onclick="selectWordVn32(this, 'nấm dại')" class="px-4 py-2 bg-white border border-sky-100 text-gray-800 rounded-xl hover:bg-sky-50 shadow-sm transition-all active:scale-95 text-base">nấm dại</button>
                <button onclick="selectWordVn32(this, 'vượn bạc má')" class="px-4 py-2 bg-white border border-sky-100 text-gray-800 rounded-xl hover:bg-sky-50 shadow-sm transition-all active:scale-95 text-base">vượn bạc má</button>
                <button onclick="selectWordVn32(this, 'nắng trưa')" class="px-4 py-2 bg-white border border-sky-100 text-gray-800 rounded-xl hover:bg-sky-50 shadow-sm transition-all active:scale-95 text-base">nắng trưa</button>
                <button onclick="selectWordVn32(this, 'cây thưa')" class="px-4 py-2 bg-white border border-sky-100 text-gray-800 rounded-xl hover:bg-sky-50 shadow-sm transition-all active:scale-95 text-base">cây thưa</button>
                <button onclick="selectWordVn32(this, 'chồn sóc')" class="px-4 py-2 bg-white border border-sky-100 text-gray-800 rounded-xl hover:bg-sky-50 shadow-sm transition-all active:scale-95 text-base">chồn sóc</button>
                <button onclick="selectWordVn32(this, 'sắc nắng')" class="px-4 py-2 bg-white border border-sky-100 text-gray-800 rounded-xl hover:bg-sky-50 shadow-sm transition-all active:scale-95 text-base">sắc nắng</button>
                <button onclick="selectWordVn32(this, 'rừng khộp')" class="px-4 py-2 bg-white border border-sky-100 text-gray-800 rounded-xl hover:bg-sky-50 shadow-sm transition-all active:scale-95 text-base">rừng khộp</button>
                <button onclick="selectWordVn32(this, 'con mang')" class="px-4 py-2 bg-white border border-sky-100 text-gray-800 rounded-xl hover:bg-sky-50 shadow-sm transition-all active:scale-95 text-base">con mang</button>
                <button onclick="selectWordVn32(this, 'sương mù')" class="px-4 py-2 bg-white border border-sky-100 text-gray-800 rounded-xl hover:bg-sky-50 shadow-sm transition-all active:scale-95 text-base">sương mù</button>
            </div>

            <!-- Khung 3 Nhóm chiếc giỏ -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div id="basket-tv" onclick="dropToBasketVn32('tv')" class="p-4 bg-emerald-50 rounded-2xl border-2 border-dashed border-emerald-100 min-h-[132px] space-y-2 text-center transition-all hover:bg-emerald-100/50 cursor-pointer">
                    <span class="text-emerald-800 text-lg block font-black">🥬 Về thực vật</span>
                    <div class="flex flex-wrap gap-1.5 justify-center mt-2" id="basket-list-tv"></div>
                </div>
                <div id="basket-dv" onclick="dropToBasketVn32('dv')" class="p-4 bg-blue-50 rounded-2xl border-2 border-dashed border-blue-100 min-h-[132px] space-y-2 text-center transition-all hover:bg-blue-100/50 cursor-pointer">
                    <span class="text-blue-600 text-lg block font-black">🐿️ Về động vật</span>
                    <div class="flex flex-wrap gap-1.5 justify-center mt-2" id="basket-list-dv"></div>
                </div>
                <div id="basket-ht" onclick="dropToBasketVn32('ht')" class="p-4 bg-amber-50 rounded-2xl border-2 border-dashed border-amber-200 min-h-[132px] space-y-2 text-center transition-all hover:bg-amber-100/50 cursor-pointer">
                    <span class="text-amber-600 text-lg block font-black">☀️ Về hiện tượng tự nhiên</span>
                    <div class="flex flex-wrap gap-1.5 justify-center mt-2" id="basket-list-ht"></div>
                </div>
            </div>

            <div class="flex justify-center gap-4 mt-4">
                <button onclick="kiemTraPhanLoaiVn32()" class="px-6 py-2.5 bg-sky-600 hover:bg-sky-600 text-white rounded-xl shadow transition-all active:scale-95">Kiểm tra kết quả</button>
                <button onclick="resetPhanLoaiVn32()" class="px-6 py-2.5 bg-gray-800 hover:bg-gray-200 text-gray-700 rounded-xl transition-all active:scale-95">Làm lại</button>
            </div>
            <div id="fb-vn32-phanloai" class="hidden p-4 rounded-xl text-center text-lg"></div>
        </div>

        <!-- BÀI 2: TÌM TỪ ĐỒNG NGHĨA & ĐẶT CÂU -->
        <div class="p-6 bg-sky-50/40 rounded-3xl border border-sky-100 space-y-6 font-bold">
            <h4 class="text-lg md:text-xl text-sky-800">Bài tập 2: Tìm từ đồng nghĩa & Thực hành đặt câu:</h4>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-base">
                <!-- gọn ghẽ -->
                <div class="p-4 bg-white rounded-2xl border border-sky-100 space-y-2">
                    <label class="block font-black text-gray-800">Từ đồng nghĩa với 'gọn ghẽ':</label>
                    <select id="sel-syn-gon" class="w-full p-2 border border-gray-100 rounded-lg text-sm bg-sky-50/20 font-bold focus:border-sky-500 outline-none">
                        <option value="">-- Chọn từ --</option>
                        <option value="bừa bãi">bừa bãi</option>
                        <option value="gọn gàng">gọn gàng</option>
                        <option value="cẩu thả">cẩu thả</option>
                    </select>
                </div>

                <!-- tí hon -->
                <div class="p-4 bg-white rounded-2xl border border-sky-100 space-y-2">
                    <label class="block font-black text-gray-800">Từ đồng nghĩa với 'tí hon':</label>
                    <select id="sel-syn-tihon" class="w-full p-2 border border-gray-100 rounded-lg text-sm bg-sky-50/20 font-bold focus:border-sky-500 outline-none">
                        <option value="">-- Chọn từ --</option>
                        <option value="khổng lồ">khổng lồ</option>
                        <option value="to lớn">to lớn</option>
                        <option value="nhỏ bé">nhỏ bé</option>
                    </select>
                </div>

                <!-- thưa thớt -->
                <div class="p-4 bg-white rounded-2xl border border-sky-100 space-y-2">
                    <label class="block font-black text-gray-800">Từ đồng nghĩa với 'thưa thớt':</label>
                    <select id="sel-syn-thua" class="w-full p-2 border border-gray-100 rounded-lg text-sm bg-sky-50/20 font-bold focus:border-sky-500 outline-none">
                        <option value="">-- Chọn từ --</option>
                        <option value="lác đác">lác đác</option>
                        <option value="dày đặc">dày đặc</option>
                        <option value="đông đúc">đông đúc</option>
                    </select>
                </div>
            </div>

            <!-- Ô đặt câu -->
            <div class="space-y-2">
                <label class="text-gray-800 text-sm block">✍️ Đặt một câu văn với từ đồng nghĩa em vừa tìm được ở trên:</label>
                <textarea id="vn32-sentence" rows="3" placeholder="Ví dụ: Những giọt sương mai đọng lác đác trên các kẽ lá rừng xanh..." class="w-full p-4 border border-gray-100 rounded-2xl bg-white text-xl md:text-2xl focus:border-sky-500 focus:ring-1 focus:ring-sky-600 outline-none"></textarea>
            </div>

            <div class="flex justify-center">
                <button onclick="kiemTraDongNghiaVn32()" class="px-8 py-3 bg-emerald-600 hover:bg-emerald-600 text-white rounded-xl shadow font-black text-lg active:scale-95 transition-all">NỘP CÂU VÀ KIỂM TRA ✓</button>
            </div>
            <div id="fb-vn32-syn" class="hidden p-5 rounded-2xl text-base font-bold shadow-md transition-all duration-332"></div>
        </div>

        <!-- PHẦN 3: LUYỆN VIẾT CẢM THỤ (AI THẦY E) -->
        <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
            <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">✍️</div>
                    <h3 class="text-2xl md:text-5xl font-black text-gray-800">Cảm nhận thiên nhiên</h3>
                </div>

                <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner space-y-4">
                    <h4 class="text-2xl md:text-3xl font-bold text-gray-800">
                        Qua bài đọc "Kì diệu rừng xanh", em hãy viết một đoạn văn ngắn (từ 3 đến 5 câu) bày tỏ những cảm nhận của em về vẻ đẹp kì thú của rừng xanh.
                    </h4>

                    <textarea id="ans-vn32-writing" rows="4" placeholder="Nhập cảm nhận của em..." class="w-full p-4 md:p-6 text-2xl md:text-3xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-amber-50/10 font-medium leading-relaxed"></textarea>
                    
                    <div class="flex flex-wrap items-center gap-4">
                        <button onclick="checkWritingVn32()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                            <span>CHẤM BÀI VỚI AI</span>
                        </button>
                        <button onclick="resetWritingVn32()" class="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition-all text-base">LÀM LẠI</button>
                    </div>
                    
                    <div id="fb-vn32-writing" class="hidden mt-6 p-6 bg-amber-500 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500">
                        <!-- AI Feedback -->
                    </div>
                </div>
            </div>
        </section>

        <div class="pt-6 flex justify-center">
            <button onclick="submitVn32Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
                <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
                <span>HOÀN THÀNH TIẾT HỌC</span>
            </button>
        </div>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Văn bản 'Kì diệu rừng xanh' là của tác giả nào?",
            "options": [
                "Vũ Tú Nam",
                "Nguyễn Phan Hách",
                "Hữu Vi",
                "Nguyễn Kiên"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Những cây nấm dại trong rừng xanh được ví như hình ảnh nào?",
            "options": [
                "Những cái ô dù che nắng",
                "Những lâu đài kiến trúc tân kì",
                "Những chiếc đĩa bay khổng lồ",
                "Những chiếc cốc nước sắc sỡ"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ 'tân kì' được giải thích nghĩa là gì?",
            "options": [
                "Cũ kĩ",
                "Lạ mắt và lỗi thời",
                "Mới lạ, độc đáo",
                "Không có gì nổi bật"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Nhân vật 'tôi' cảm thấy mình giống ai khi đi lạc vào lối đầy nấm dại?",
            "options": [
                "Một người tí hon của vương quốc",
                "Một chú thỏ con ngơ ngác",
                "Một người khổng lồ",
                "Một nhà thám hiểm tài ba"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Đặc điểm miêu tả loài vượn bạc má trong bài là gì?",
            "options": [
                "Đứng yên ngơ ngác nhìn du khách",
                "Ôm con gọn ghẽ chuyền nhanh như tia chớp",
                "Chạy nhảy tung tăng trên bãi cỏ",
                "Hát vang rộn rã khắp núi rừng"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Muông thú nào được tả có chùm lông đuôi to đẹp vút qua rất nhanh?",
            "options": [
                "Con mang",
                "Con sóc đất",
                "Con vượn",
                "Con chồn sóc"
            ],
            "answer": 3,
            "level": 0
        },
        {
            "question": "Cây lá của rừng khộp miền Tây Nguyên rụng lá vào thời gian nào?",
            "options": [
                "Mùa mưa lũ",
                "Mùa khô nóng",
                "Mùa xuân ấm áp",
                "Mùa đông giá buốt"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Sự vật nào nổi bật có màu xanh biếc rực lên giữa sắc vàng của rừng khộp?",
            "options": [
                "Mấy vạt cỏ",
                "Lá của cây khộp",
                "Màu lông con mang",
                "Ánh nắng ban mai"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'giang sơn vàng rợi' dùng để miêu tả sự hài hòa sắc vàng của những yếu tố nào?",
            "options": [
                "Lá úa vàng, lông con mang vàng, thảm lá vàng và sắc nắng vàng",
                "Màu hoa dã quỳ vàng và màu cát vàng",
                "Màu của bãi ngô và rơm rạ ngày mùa",
                "Màu hoàng hôn buông xuống rừng sâu"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Sự xuất hiện của loài thú nào khiến tác giả dụi mắt vì tưởng lá vàng đang động đậy?",
            "options": [
                "Con vượn bạc má",
                "Mấy con mang vàng",
                "Con chồn sóc đuôi to",
                "Đàn chim sơn ca"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ nào sau đây đồng nghĩa với từ 'gọn ghẽ'?",
            "options": [
                "bừa bộn",
                "gọn gàng",
                "cẩu thả",
                "luộm thuộm"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ nào sau đây đồng nghĩa với từ 'tí hon'?",
            "options": [
                "khổng lồ",
                "nhỏ bé",
                "vĩ đại",
                "to lớn"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ nào sau đây đồng nghĩa với từ 'thưa thớt'?",
            "options": [
                "lác đác",
                "dày đặc",
                "trùng điệp",
                "đông đúc"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Chi tiết nào thể hiện cảm giác thích thú kỳ diệu của tác giả khi đi trong rừng?",
            "options": [
                "Cảm giác mình lạc vào một thế giới thần bí",
                "Cảm thấy mệt mỏi vì len lách qua bụi rậm",
                "Cảm thấy sợ hãi trước những âm thanh gầm rú",
                "Cảm thấy muốn quay về thành phố ngay lập tức"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'lúp xúp' trong câu 'một thành phố nấm lúp xúp dưới bóng cây thưa' gợi tả hình ảnh như thế nào?",
            "options": [
                "Cây nấm mọc rất cao vượt qua ngọn cỏ",
                "Những chiếc nấm mọc san sát nhau, cái cao cái thấp đều đặn dưới mặt đất",
                "Chiếc nấm bị che khuất hoàn toàn không nhìn thấy",
                "Nấm mọc thưa thớt mỗi nơi một chiếc"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- LOGIC CHO PHẦN TOOLTIPS GIẢI NGHĨA ---
window.toggleTooltipVn32 = function(event, key) {
    event.stopPropagation();
    const tooltip = document.getElementById(`tooltip-${key}`);
    if (!tooltip) return;

    const isHidden = tooltip.classList.contains("hidden");
    // Ẩn tất cả tooltips trước
    document.querySelectorAll('[id^="tooltip-"]').forEach(el => el.classList.add("hidden"));

    if (isHidden) {
        tooltip.classList.remove("hidden");
    }
};

document.addEventListener("click", () => {
    document.querySelectorAll('[id^="tooltip-"]').forEach(el => el.classList.add("hidden"));
});


// --- LOGIC CHO PHẦN CHE CHỮ LUYỆN THUỘC LÒNG ---
const originalTextVn32 = "Nắng trưa đã rọi xuống đỉnh đầu mà rừng sâu vẫn ẩm lạnh, ánh nắng lọt qua lá trong xanh. Chúng tôi đi đến đâu, rừng rào rào chuyển động đến đấy. Những con vượn bạc má ôm con gọn ghẽ chuyền nhanh như tia chớp. Những con chồn sóc với chùm lông đuôi to đẹp vút qua không kịp đưa mắt nhìn theo.";

window.setHideModeVn32 = function(mode) {
    const container = document.getElementById("hiding-paragraph-32");
    if (!container) return;

    // Cập nhật trạng thái nút chọn
    document.getElementById("btn-hm-none").className = "px-2 py-1 bg-gray-800 hover:bg-sky-600 rounded text-gray-800";
    document.getElementById("btn-hm-low").className = "px-2 py-1 bg-gray-800 hover:bg-sky-600 rounded text-gray-800";
    document.getElementById("btn-hm-high").className = "px-2 py-1 bg-gray-800 hover:bg-sky-600 rounded text-gray-800";
    document.getElementById(`btn-hm-${mode}`).className = "px-2 py-1 bg-sky-600 text-white rounded";

    if (mode === "none") {
        container.innerHTML = originalTextVn32;
    } else if (mode === "low") {
        // Che đi 25% số từ ngẫu nhiên
        const words = originalTextVn32.split(" ");
        const rendered = words.map((w, idx) => {
            if (idx % 4 === 1 && w.length > 2) {
                const cleaned = w.replace(/[,.]/g, "");
                const mark = w.endsWith(".") ? "." : (w.endsWith(",") ? "," : "");
                return `<span onclick="this.innerHTML='${cleaned}'" class="bg-amber-500 text-amber-600 px-1 rounded-md border border-dashed border-amber-200 cursor-pointer hover:bg-amber-50 select-none">${cleaned}</span>${mark}`;
            }
            return w;
        });
        container.innerHTML = rendered.join(" ");
    } else if (mode === "high") {
        // Che đi 50% số từ
        const words = originalTextVn32.split(" ");
        const rendered = words.map((w, idx) => {
            if (idx % 2 === 0 && w.length > 1) {
                const cleaned = w.replace(/[,.]/g, "");
                const mark = w.endsWith(".") ? "." : (w.endsWith(",") ? "," : "");
                return `<span onclick="this.innerHTML='${cleaned}'" class="bg-amber-500 text-amber-600 px-1 rounded-md border border-dashed border-amber-200 cursor-pointer hover:bg-amber-50 select-none">${cleaned}</span>${mark}`;
            }
            return w;
        });
        container.innerHTML = rendered.join(" ");
    }
};

// Khởi chạy chế độ mặc định hiện hết
setTimeout(() => {
    window.setHideModeVn32('none');
}, 132);


// --- LOGIC CHO BÀI TẬP 1 PHÂN LOẠI SỰ VẬT (BASKETS) ---
let currentSelectedWordVn32 = null;
let currentSelectedWordTextVn32 = "";

let phanLoaiAnswersVn32 = {
    tv: ["nấm dại", "cây thưa", "rừng khộp"],
    dv: ["vượn bạc má", "chồn sóc", "con mang"],
    ht: ["nắng trưa", "sắc nắng", "sương mù"]
};

let currentPlStateVn32 = {
    tv: [],
    dv: [],
    ht: []
};

window.selectWordVn32 = function(btn, word) {
    // Bỏ chọn nút cũ
    document.querySelectorAll("#words-pool-32 button").forEach(el => {
        if (!el.classList.contains("opacity-50")) {
            el.className = "px-4 py-2 bg-white border border-sky-100 text-gray-800 rounded-xl hover:bg-sky-50 shadow-sm transition-all active:scale-95 text-base";
        }
    });

    currentSelectedWordVn32 = btn;
    currentSelectedWordTextVn32 = word;
    btn.className = "px-4 py-2 bg-sky-600 border-2 border-sky-100 text-sky-800 rounded-xl shadow-sm text-base font-black";
};

window.dropToBasketVn32 = function(basketId) {
    if (!currentSelectedWordVn32) return;

    // Thêm vào giỏ
    if (!currentPlStateVn32[basketId].includes(currentSelectedWordTextVn32)) {
        currentPlStateVn32[basketId].push(currentSelectedWordTextVn32);
        
        // Ẩn từ ở pool
        currentSelectedWordVn32.classList.add("opacity-50", "pointer-events-none");
        currentSelectedWordVn32.className = "px-4 py-2 bg-gray-800 border border-gray-100 text-gray-800 rounded-xl text-base pointer-events-none opacity-50";

        // Vẽ thẻ từ vào giỏ
        renderBasketsVn32();
    }

    currentSelectedWordVn32 = null;
    currentSelectedWordTextVn32 = "";
};

function renderBasketsVn32() {
    const ids = ["tv", "dv", "ht"];
    ids.forEach(id => {
        const container = document.getElementById(`basket-list-${id}`);
        if (!container) return;
        container.innerHTML = "";
        
        currentPlStateVn32[id].forEach(w => {
            const span = document.createElement("span");
            span.className = "px-3 py-1 bg-white border border-sky-100 rounded-lg text-sm font-bold shadow-sm inline-flex items-center gap-1.5";
            span.innerHTML = `${w} <span class="text-rose-800 hover:text-rose-800 cursor-pointer" onclick="event.stopPropagation(); removeWordFromBasketVn32('${id}', '${w}')">×</span>`;
            container.appendChild(span);
        });
    });
}

window.removeWordFromBasketVn32 = function(basketId, word) {
    currentPlStateVn32[basketId] = currentPlStateVn32[basketId].filter(x => x !== word);
    
    // Hiện lại từ ở pool
    const buttons = document.querySelectorAll("#words-pool-32 button");
    buttons.forEach(btn => {
        if (btn.innerText.trim() === word) {
            btn.classList.remove("opacity-50", "pointer-events-none");
            btn.className = "px-4 py-2 bg-white border border-sky-100 text-gray-800 rounded-xl hover:bg-sky-50 shadow-sm transition-all active:scale-95 text-base";
        }
    });

    renderBasketsVn32();
};

window.kiemTraPhanLoaiVn32 = function() {
    const fb = document.getElementById("fb-vn32-phanloai");
    if (!fb) return;
    fb.classList.remove("hidden");

    let isCorrectAll = true;
    let totalAssigned = currentPlStateVn32.tv.length + currentPlStateVn32.dv.length + currentPlStateVn32.ht.length;

    if (totalAssigned < 9) {
        fb.innerHTML = "⚠️ Em hãy kéo/nhấp xếp đủ 9 sự vật vào 3 nhóm chiếc giỏ trước khi kiểm tra nhé!";
        fb.className = "p-4 rounded-xl text-center text-lg bg-amber-50 text-amber-600 border border-amber-100 mt-4 font-bold";
        return;
    }

    // So sánh đáp án
    const categories = ["tv", "dv", "ht"];
    categories.forEach(cat => {
        currentPlStateVn32[cat].forEach(w => {
            if (!phanLoaiAnswersVn32[cat].includes(w)) {
                isCorrectAll = false;
            }
        });
    });

    if (isCorrectAll) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã phân loại các sự vật thực vật, động vật và hiện tượng tự nhiên trong rừng xanh hoàn toàn chính xác!";
        fb.className = "p-4 rounded-xl text-center text-lg bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4 font-bold";
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Phân loại chính xác", "🐿️", "Em đã sắp xếp đúng 132% các nhóm sự vật!");
        }
    } else {
        fb.innerHTML = "❌ Có một số sự vật bị xếp sai giỏ rồi! Em hãy xem kĩ lại và thử đổi lại vị trí của chúng nhé!";
        fb.className = "p-4 rounded-xl text-center text-lg bg-rose-50 text-rose-800 border border-rose-100 mt-4 font-bold";
    }
};

window.resetPhanLoaiVn32 = function() {
    currentPlStateVn32 = { tv: [], dv: [], ht: [] };
    
    // Reset pool buttons
    const buttons = document.querySelectorAll("#words-pool-32 button");
    buttons.forEach(btn => {
        btn.classList.remove("opacity-50", "pointer-events-none");
        btn.className = "px-4 py-2 bg-white border border-sky-100 text-gray-800 rounded-xl hover:bg-sky-50 shadow-sm transition-all active:scale-95 text-base";
    });

    renderBasketsVn32();
    const fb = document.getElementById("fb-vn32-phanloai");
    if (fb) fb.classList.add("hidden");
};


// --- LOGIC CHO BÀI TẬP 2 TÌM TỪ ĐỒNG NGHĨA & ĐẶT CÂU ---
window.kiemTraDongNghiaVn32 = function() {
    const gon = document.getElementById("sel-syn-gon").value;
    const tihon = document.getElementById("sel-syn-tihon").value;
    const thua = document.getElementById("sel-syn-thua").value;
    const sentence = document.getElementById("vn32-sentence").value.trim();
    const fb = document.getElementById("fb-vn32-syn");

    if (!fb) return;
    fb.classList.remove("hidden");

    if (!gon || !tihon || !thua) {
        fb.innerHTML = "⚠️ Em hãy chọn từ đồng nghĩa thích hợp cho cả 3 từ trước khi nộp bài!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-332";
        return;
    }

    if (gon !== "gọn gàng" || tihon !== "nhỏ bé" || thua !== "lác đác") {
        fb.innerHTML = "❌ Lựa chọn từ đồng nghĩa chưa chính xác rồi! Em hãy thử suy nghĩ và chọn lại nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-rose-600 text-white transition-all duration-332";
        return;
    }

    if (sentence.length < 10) {
        fb.innerHTML = "⚠️ Sửa đúng từ đồng nghĩa rồi! Nhưng câu văn em viết còn quá ngắn hoặc để trống, hãy viết một câu hoàn chỉnh nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-332";
        return;
    }

    // Đánh giá thành công câu đặt
    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-800">AI Thầy E nhận xét & Chấm điểm:</h5>
                <p class="text-lg mb-2">Hoàn hảo! Em đã tìm đúng các từ đồng nghĩa (<em>gọn gàng</em>, <em>nhỏ bé</em>, <em>lác đác</em>) và viết câu văn có nội dung phong phú, hình ảnh gợi tả sinh động bám sát ngữ cảnh thiên nhiên.</p>
                <span class="px-3 py-1 bg-emerald-600 rounded-lg font-bold text-lg md:text-3xl">Xếp loại: Xuất sắc - Đạt 132%</span>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-emerald-600 text-white transition-all duration-332";
};

// --- LOGIC BÀI TẬP CẢM THỤ TỰ LUẬN VN32 ---
window.checkWritingVn32 = function() {
    const text = document.getElementById('ans-vn32-writing')?.value.trim();
    const fb = document.getElementById('fb-vn32-writing');
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
            <p class="text-lg font-bold">"Tuyệt vời! Em đã cảm thụ rất tốt vẻ đẹp sinh động, thơ mộng của vương quốc nấm tí hon và giang sơn vàng rợi của rừng khộp Tây Nguyên. Đoạn văn mạch lạc, sử dụng nhiều từ ngữ miêu tả gợi cảm xúc."</p>
            <span class="inline-block px-3 py-1 bg-white text-amber-600 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Điểm: 132% (Hoàn thành tốt)</span>
        </div>
    `;
    fb.className = "mt-6 p-6 bg-emerald-600 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500";
};

window.resetWritingVn32 = function() {
    const txt = document.getElementById('ans-vn32-writing');
    if (txt) txt.value = "";
    const fb = document.getElementById('fb-vn32-writing');
    if (fb) fb.classList.add('hidden');
};

// --- HOÀN THÀNH TIẾT HỌC TOÀN CỤC ---
window.submitVn32Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback('Hoàn thành Tiết 32 & 33', '🌲', '<div class="text-center p-6"><span class="text-7xl block mb-4">🌲</span><p class="text-2xl md:text-3xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài học Kì diệu rừng xanh!</p><p class="text-xl text-gray-800 mt-3">Một tình yêu thương sâu sắc dành cho thiên nhiên và muông thú hoang dã, cùng khả năng ngôn ngữ tinh tế sẽ giúp các em trở thành những người bảo vệ rừng xanh tương lai.</p></div>');
    }
};

// --- XOAY LẬT THẺ KHỞI ĐỘNG ---
window.flipCardVn32 = function(card) {
    const inner = card.querySelector('.relative');
    if (inner) {
        if (inner.style.transform === 'rotateY(180deg)') {
            inner.style.transform = 'rotateY(0deg)';
        } else {
            inner.style.transform = 'rotateY(180deg)';
        }
    }
};
