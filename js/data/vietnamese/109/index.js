export const lesson109 = {
    "topic": "Tiếng Việt 5",
    "week": "16",
    "period": "109",
    "title": "ĐỌC: NGHỆ THUẬT MÚA BA LÊ",
    "desc": "Bài học giúp học sinh hiểu về nghệ thuật múa ba lê cổ điển, tìm hiểu các kĩ thuật biểu diễn xuất sắc, sắp xếp bố cục thông tin và thực hành sử dụng kết từ.",
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
        <ul class="space-y-3 text-sky-800 font-bold text-lg md:text-3xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Đọc trôi chảy, diễn cảm bài đọc "Nghệ thuật múa ba lê", hiểu được nguồn gốc và đặc trưng vũ đạo.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Xác định và sắp xếp đúng trật tự thông tin các đoạn văn trong bài đọc.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Thực hành nhận diện và sử dụng kết từ, cặp kết từ để hoàn thiện câu ghép biểu thị quan hệ ý nghĩa.
            </li>
        </ul>
    </div>

    <!-- 🎵 Khởi động & Nhạc nền Ballet (Swan Lake Synthesizer) -->
    <div class="bg-gradient-to-r from-sky-600 to-emerald-600 text-white rounded-[40px] p-6 md:p-8 shadow-xl relative overflow-hidden">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <div class="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <!-- Dancer SVG -->
            <div class="w-32 h-32 bg-white/15 rounded-full flex items-center justify-center shrink-0 border border-white/20">
                <svg class="w-20 h-20" viewBox="0 0 100 100" fill="none">
                    <!-- Elegant ballerina silhouette -->
                    <path d="M50 20 C 50 15, 52 15, 52 20 C 52 25, 48 28, 50 35 C 50 40, 52 45, 52 50" stroke="#fef08a" stroke-width="3" stroke-linecap="round"/>
                    <path d="M52 50 L40 85" stroke="#fef08a" stroke-width="3" stroke-linecap="round"/>
                    <path d="M52 50 L60 82 C 60 85, 62 88, 62 90" stroke="#fef08a" stroke-width="2.5" stroke-linecap="round"/>
                    <!-- Arms raised -->
                    <path d="M50 32 C 30 20, 25 15, 25 10" stroke="#fef08a" stroke-width="2" stroke-linecap="round"/>
                    <path d="M50 32 C 70 20, 75 15, 75 10" stroke="#fef08a" stroke-width="2" stroke-linecap="round"/>
                    <!-- Tutu skirt -->
                    <path d="M35 50 Q50 62 65 50 Q50 45 35 50 Z" fill="#ffffff" opacity="0.9"/>
                </svg>
            </div>
            
            <div class="flex-1 text-center md:text-left space-y-4">
                <h4 class="text-xl md:text-2xl font-black text-yellow-300">🩰 Trải nghiệm âm hưởng kịch nghệ Ba lê</h4>
                <p class="text-base md:text-lg leading-relaxed text-sky-100 font-medium">
                    Hãy bấm nút bên dưới để lắng nghe giai điệu bất hủ từ vở vũ kịch <strong>Hồ Thiên Nga</strong> của nhà soạn nhạc danh tiếng Tchaikovsky trước khi đọc bài nhé!
                </p>
                <div class="flex flex-wrap gap-3 justify-center md:justify-start">
                    <button onclick="window.playSwanLakeTheme()" class="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-sky-950 font-black rounded-2xl shadow-md transition-all active:scale-95 flex items-center gap-2">
                        🔊 Nghe nhạc hồ thiên nga
                    </button>
                    <button onclick="window.stopSwanLakeTheme()" class="px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-2xl transition-all">
                        ⏹️ Tắt nhạc
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- 📖 Bài đọc văn bản -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <div class="bg-sky-50/20 rounded-[28px] p-6 md:p-8 shadow-inner border border-sky-100/50">
                <div class="flex justify-between items-center mb-6 pb-4 border-b border-sky-100/50">
                    <h3 class="text-xl md:text-2xl font-black text-sky-850 flex items-center gap-2">
                        📖 Bài đọc: Nghệ thuật múa ba lê
                    </h3>
                    <button onclick="playSegmentAudio('assets/audio/tiengviet/109/nghe_thuat_mua_ba_le.mp3')" class="p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full transition-all flex items-center justify-center shadow-sm" title="Nghe đọc toàn bài">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                    </button>
                </div>

                <div class="serif-font text-gray-800 leading-relaxed text-justify space-y-6 text-xl md:text-4xl">
                    <p class="indent-10">Ba lê là môn nghệ thuật múa có nguồn gốc từ châu Âu. Nghệ thuật múa ba lê được biết đến rộng rãi thông qua những vở ba lê – một thể loại vũ kịch có sự kết hợp giữa kịch, âm nhạc và vũ đạo.</p>
                    <p class="indent-10">Những vở ba lê nổi tiếng thế giới có thể kể đến như <em>Hồ thiên nga</em>, <em>Người đẹp ngủ trong rừng</em>, <em>Lọ Lem</em>,... Mỗi vở kịch là một câu chuyện ca ngợi tình yêu, sự thánh thiện và ước mơ vươn tới những điều tốt đẹp của con người trong cuộc sống.</p>
                    <p class="indent-10">Trong các vở ba lê, người diễn viên dùng động tác múa để thể hiện nội dung thay cho lời nói. Như trong vở <em>Hồ thiên nga</em>, các diễn viên thực hiện những cú xoay người đẹp mắt và chuẩn xác, những bước đi nhẹ như cánh hoa hé mở khiến khán giả có cảm giác được ngắm nhìn một đàn thiên nga đang lướt trên mặt hồ. Khi diễn viên chính đứng một chân xoay liên tục tới 32 vòng trên đầu mũi chân, khán giả cũng cảm nhận được nhân vật đang mong muốn thể hiện sức mạnh một cách mãnh liệt. Để thực hiện được những kĩ thuật rất khó này, người diễn viên phải dày công khổ luyện trong một thời gian dài.</p>
                    <p class="indent-10">Hiện nay, ba lê là môn nghệ thuật được nhiều người yêu thích và được dạy ở các trường múa trên khắp thế giới.</p>
                    <p class="text-right font-bold text-gray-500 mt-4 md:text-xl">(Tuệ Nhi tổng hợp)</p>
                </div>
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
                Bài đọc giới thiệu về nguồn gốc và đặc trưng của nghệ thuật múa ba lê – môn nghệ thuật vũ kịch độc đáo kết hợp giữa kịch, âm nhạc và vũ đạo. Qua đó, ca ngợi sự khổ luyện, tài năng của người nghệ sĩ múa và ý nghĩa nhân văn sâu sắc của các vở ba lê kinh điển.
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- PHẦN 1: CÂU HỎI ĐỌC HIỂU (CÂU 1-4 SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-8">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-xl md:text-2xl font-black shadow-md">📖</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Tìm hiểu nội dung bài học</h3>
            </div>

            <div class="space-y-4">
                <!-- Câu 1 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            1. Nghệ thuật múa ba lê được giới thiệu như thế nào?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-sky-800 font-bold mb-2">💡 Trả lời:</p>
                        <p>Nghệ thuật múa ba lê có nguồn gốc từ châu Âu, được biết đến rộng rãi thông qua các vở kịch múa đặc sắc. Đây là một thể loại vũ kịch có sự kết hợp hài hòa, tinh tế giữa ba yếu tố: kịch, âm nhạc và vũ đạo.</p>
                    </div>
                </details>

                <!-- Câu 2 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            2. Tìm thông tin nói về nội dung của các vở ba lê.
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-sky-800 font-bold mb-2">💡 Trả lời:</p>
                        <p>Nội dung của mỗi vở kịch ba lê thường là những câu chuyện giàu tính nhân văn, ca ngợi tình yêu thương, lòng thánh thiện, sự bao dung và ước mơ vươn tới những giá trị tốt đẹp của con người trong cuộc sống.</p>
                    </div>
                </details>

                <!-- Câu 3 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            3. Diễn viên thể hiện nội dung kịch thế nào? Điều đó ra sao trong vở Hồ thiên nga?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-sky-800 font-bold mb-2">💡 Trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li><strong>Cách thể hiện:</strong> Diễn viên dùng hoàn toàn động tác múa, cử chỉ cơ thể uyển chuyển để biểu đạt nội dung thay cho lời nói.</li>
                            <li><strong>Trong Hồ thiên nga:</strong> Các diễn viên thực hiện các cú xoay người chuẩn xác, đẹp mắt, bước đi nhẹ tênh như cánh hoa hé nở (tạo cảm giác như đàn thiên nga lướt trên mặt hồ). Diễn viên chính đứng một chân xoay liên tục tới 32 vòng trên mũi chân để thể hiện sức mạnh nội tâm mãnh liệt.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 4 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            4. Theo em, vì sao diễn viên múa ba lê phải rất dày công khổ luyện?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-sky-800 font-bold mb-2">💡 Trả lời:</p>
                        <p>Bởi vì các động tác và kĩ thuật trong ba lê (như đứng xoay bằng đầu mũi chân, giữ thăng bằng, nhảy cao) cực kì khó, phi thường, đòi hỏi sự kiên trì bền bỉ, sức mạnh cơ bắp và độ dẻo dai cao độ để đạt được độ chuẩn xác và thẩm mỹ tối đa.</p>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- PHẦN 2: TRÒ CHƠI SẮP XẾP TRẬT TỰ THÔNG TIN (CÂU 5 SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">2</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Sắp xếp các thông tin dưới đây theo đúng trật tự trong bài đọc:</h3>
            </div>

            <p class="text-base md:text-lg text-gray-700 font-bold mb-6 italic">
                👉 Hướng dẫn: Kéo các nhãn thông tin màu vàng và thả vào các ô trống theo thứ tự từ 1 đến 4.
            </p>

            <!-- Nhãn kéo (Drag sources) -->
            <div class="flex flex-col gap-3 mb-8 max-w-xl mx-auto select-none" id="order-drag-container">
                <div class="px-5 py-3 bg-yellow-400 text-gray-900 border-2 border-yellow-500 rounded-2xl font-bold text-base md:text-lg cursor-grab hover:scale-101 transition-all shadow-sm" draggable="true" ondragstart="handleOrderDragStart(event)" id="info-method">Cách thể hiện nội dung trong các vở ba lê</div>
                <div class="px-5 py-3 bg-yellow-400 text-gray-900 border-2 border-yellow-500 rounded-2xl font-bold text-base md:text-lg cursor-grab hover:scale-101 transition-all shadow-sm" draggable="true" ondragstart="handleOrderDragStart(event)" id="info-general">Thông tin chung về nghệ thuật múa ba lê</div>
                <div class="px-5 py-3 bg-yellow-400 text-gray-900 border-2 border-yellow-500 rounded-2xl font-bold text-base md:text-lg cursor-grab hover:scale-101 transition-all shadow-sm" draggable="true" ondragstart="handleOrderDragStart(event)" id="info-popularity">Sự phổ biến của múa ba lê hiện nay</div>
                <div class="px-5 py-3 bg-yellow-400 text-gray-900 border-2 border-yellow-500 rounded-2xl font-bold text-base md:text-lg cursor-grab hover:scale-101 transition-all shadow-sm" draggable="true" ondragstart="handleOrderDragStart(event)" id="info-content">Nội dung các vở ba lê</div>
            </div>

            <!-- Các ô chứa từ (Drop targets) -->
            <div class="max-w-2xl mx-auto space-y-4 text-base md:text-lg">
                <div class="p-4 bg-white rounded-2xl border border-sky-200 flex items-center gap-4">
                    <span class="w-10 h-10 bg-sky-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    <div class="flex-1 border-2 border-dashed border-sky-400 rounded-xl bg-sky-50/50 min-h-12 flex items-center justify-center font-bold drop-zone-order" ondragover="allowOrderDrop(event)" ondrop="handleOrderDrop(event, 'zone-1')" id="zone-1">Kéo thả thông tin vào đây 🌸</div>
                </div>
                <div class="p-4 bg-white rounded-2xl border border-sky-200 flex items-center gap-4">
                    <span class="w-10 h-10 bg-sky-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                    <div class="flex-1 border-2 border-dashed border-sky-400 rounded-xl bg-sky-50/50 min-h-12 flex items-center justify-center font-bold drop-zone-order" ondragover="allowOrderDrop(event)" ondrop="handleOrderDrop(event, 'zone-2')" id="zone-2">Kéo thả thông tin vào đây 🌸</div>
                </div>
                <div class="p-4 bg-white rounded-2xl border border-sky-200 flex items-center gap-4">
                    <span class="w-10 h-10 bg-sky-600 text-white rounded-xl flex items-center justify-center font-black">3</span>
                    <div class="flex-1 border-2 border-dashed border-sky-400 rounded-xl bg-sky-50/50 min-h-12 flex items-center justify-center font-bold drop-zone-order" ondragover="allowOrderDrop(event)" ondrop="handleOrderDrop(event, 'zone-3')" id="zone-3">Kéo thả thông tin vào đây 🌸</div>
                </div>
                <div class="p-4 bg-white rounded-2xl border border-sky-200 flex items-center gap-4">
                    <span class="w-10 h-10 bg-sky-600 text-white rounded-xl flex items-center justify-center font-black">4</span>
                    <div class="flex-1 border-2 border-dashed border-sky-400 rounded-xl bg-sky-50/50 min-h-12 flex items-center justify-center font-bold drop-zone-order" ondragover="allowOrderDrop(event)" ondrop="handleOrderDrop(event, 'zone-4')" id="zone-4">Kéo thả thông tin vào đây 🌸</div>
                </div>
            </div>

            <!-- Nút E chấm điểm sắp xếp -->
            <div class="mt-8 flex justify-center gap-4">
                <button id="btn-check-109-1" onclick="window.checkOrderVn109()" class="w-14 h-14 md:w-24 md:h-24 bg-sky-600 hover:bg-sky-700 text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-2xl md:text-5xl shadow-xl transition-all active:scale-95 flex items-center justify-center">E</button>
                <button onclick="window.resetOrderVn109()" class="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition-all text-lg">LÀM LẠI</button>
            </div>
            <div id="order-feedback" class="hidden mt-6 p-4 rounded-xl font-bold text-lg text-center animate-in fade-in duration-300"></div>
        </div>
    </section>

    <!-- PHẦN 3: LUYỆN TẬP KẾT TỪ & CẶP KẾT TỪ (CÂU 1-2 PHẦN LUYỆN TẬP) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
        <div class="p-6 md:p-8 bg-emerald-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-8">
                <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-xl md:text-2xl font-black shadow-md">✏️</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Luyện tập về kết từ</h3>
            </div>

            <!-- Bài 1: Tìm kết từ trong câu -->
            <div class="mb-10 bg-white p-6 rounded-3xl border border-emerald-100 shadow-inner">
                <h4 class="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start gap-2">
                    <span class="bg-emerald-600 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm mt-0.5 shadow-sm">1</span>
                    Tìm kết từ trong câu dưới đây và nêu tác dụng của chúng:
                </h4>
                <div class="p-4 bg-emerald-50/30 border border-emerald-200 rounded-xl mb-4 font-bold text-lg md:text-xl italic">
                    "Để thực hiện được những kĩ thuật rất khó này, người diễn viên phải dày công khổ luyện trong một thời gian dài."
                </div>
                
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-4 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/30">
                        <span class="font-bold text-emerald-800 text-lg md:text-3xl">Xem đáp án gợi ý:</span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-6 pb-4 text-gray-800 border-t border-emerald-50 pt-3 bg-emerald-50/10 text-base md:text-lg font-medium leading-relaxed">
                        <ul class="list-disc ml-6 space-y-2">
                            <li>Từ <strong class="text-emerald-700">Để</strong>: Nối cụm từ chỉ mục đích <em>"thực hiện được những kĩ thuật rất khó này"</em> với vế hành động ở phía sau.</li>
                            <li>Từ <strong class="text-emerald-700">trong</strong>: Nối động từ <em>"khổ luyện"</em> với cụm danh từ chỉ thời gian <em>"một thời gian dài"</em>.</li>
                        </ul>
                    </div>
                </details>
            </div>

            <!-- Bài 2: Hộp chọn Dropdown kết từ (Câu 2) -->
            <div class="bg-white p-6 rounded-3xl border border-emerald-100 shadow-inner text-base md:text-lg leading-relaxed font-bold">
                <h4 class="text-lg md:text-xl font-bold text-gray-900 mb-6 flex items-start gap-2">
                    <span class="bg-emerald-600 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm mt-0.5 shadow-sm">2</span>
                    Chọn kết từ hoặc cặp kết từ thích hợp nhất để hoàn thiện các câu sau:
                </h4>

                <div class="space-y-6">
                    <!-- Câu a -->
                    <div class="p-4 bg-emerald-50/10 border border-emerald-50 rounded-2xl">
                        a. 
                        <select id="drop-109-2a1" class="px-2 py-1 bg-white border-2 border-emerald-300 rounded-lg text-emerald-900 focus:outline-none">
                            <option value="">-- ? --</option>
                            <option value="Tuy">Tuy</option>
                            <option value="Vì">Vì</option>
                            <option value="Nếu">Nếu</option>
                        </select> 
                        không dùng lời nói 
                        <select id="drop-109-2a2" class="px-2 py-1 bg-white border-2 border-emerald-300 rounded-lg text-emerald-900 focus:outline-none">
                            <option value="">-- ? --</option>
                            <option value="thì">thì</option>
                            <option value="nhưng">nhưng</option>
                            <option value="nên">nên</option>
                        </select> 
                        các nghệ sĩ ba lê vẫn thể hiện được nội dung vở kịch thông qua những vũ đạo đẹp mắt 
                        <select id="drop-109-2a3" class="px-2 py-1 bg-white border-2 border-emerald-300 rounded-lg text-emerald-900 focus:outline-none">
                            <option value="">-- ? --</option>
                            <option value="và">và</option>
                            <option value="hay">hay</option>
                            <option value="nhưng">nhưng</option>
                        </select> 
                        điêu luyện.
                    </div>

                    <!-- Câu b -->
                    <div class="p-4 bg-emerald-50/10 border border-emerald-50 rounded-2xl">
                        b. 
                        <select id="drop-109-2b1" class="px-2 py-1 bg-white border-2 border-emerald-300 rounded-lg text-emerald-900 focus:outline-none">
                            <option value="">-- ? --</option>
                            <option value="Tuy">Tuy</option>
                            <option value="Vì">Vì</option>
                            <option value="Nếu">Nếu</option>
                        </select> 
                        múa ba lê là một môn nghệ thuật tinh tế, độc đáo 
                        <select id="drop-109-2b2" class="px-2 py-1 bg-white border-2 border-emerald-300 rounded-lg text-emerald-900 focus:outline-none">
                            <option value="">-- ? --</option>
                            <option value="nhưng">nhưng</option>
                            <option value="nên">nên</option>
                            <option value="thì">thì</option>
                        </select> 
                        ngày càng được nhiều người yêu thích.
                    </div>
                </div>

                <!-- Nút check Dropdown Luyện tập 2 -->
                <div class="mt-8 flex items-center gap-4">
                    <button id="btn-check-109-2" onclick="window.checkDropdownVn109()" class="w-12 h-12 md:w-16 md:h-16 bg-emerald-600 hover:bg-emerald-700 text-white rounded-[1.2rem] font-black text-xl md:text-3xl shadow-lg transition-all active:scale-95 flex items-center justify-center">E</button>
                    <button onclick="window.resetDropdownVn109()" class="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition-all text-lg">LÀM LẠI</button>
                </div>
                <div id="dropdown-feedback" class="hidden mt-4 p-4 rounded-xl font-bold text-lg text-center animate-in fade-in duration-300"></div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TOÀN BỘ -->
    <div class="pt-6 flex justify-center">
        <button onclick="window.nopBaiVn109()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-600 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-950 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Nghệ thuật múa ba lê có nguồn gốc từ đâu?",
            "options": [
                "Châu Á",
                "Châu Phi",
                "Châu Âu",
                "Châu Mỹ"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Ba lê được biết đến rộng rãi thông qua thể loại nào?",
            "options": [
                "Vũ kịch",
                "Kịch nói",
                "Hát tuồng",
                "Nhạc kịch truyền thống"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Vũ kịch ba lê là sự kết hợp của những yếu tố nào?",
            "options": [
                "Hội họa, điêu khắc và vũ đạo",
                "Kịch, âm nhạc và vũ đạo",
                "Xiếc, võ thuật và âm nhạc",
                "Văn học, nhiếp ảnh và kịch nói"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Vở ba lê nào dưới đây KHÔNG được nhắc tới trong văn bản?",
            "options": [
                "Hồ thiên nga",
                "Người đẹp ngủ trong rừng",
                "Lọ Lem",
                "Kẹp hạt dẻ"
            ],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Mỗi vở vũ kịch ba lê ca ngợi điều gì ở con người?",
            "options": [
                "Sức khỏe phi thường để săn bắt",
                "Tình yêu, sự thánh thiện và ước mơ tốt đẹp",
                "Khát vọng làm giàu bằng buôn bán",
                "Kinh nghiệm sản xuất nông nghiệp"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Diễn viên ba lê thể hiện nội dung vở kịch bằng phương tiện gì?",
            "options": [
                "Lời thoại sinh động",
                "Động tác múa (thay cho lời nói)",
                "Bài hát đơn ca hoặc hợp xướng",
                "Lời dẫn chuyện của MC"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Các bước đi của diễn viên trong Hồ thiên nga được ví với hình ảnh nào?",
            "options": [
                "Nhẹ như cánh hoa hé mở",
                "Nhanh như tia chớp",
                "Chậm như chú ốc sên bò",
                "Vững chãi như ngọn núi lớn"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Diễn viên chính trong Hồ thiên nga có thể thực hiện xoay người liên tục bao nhiêu vòng trên một chân?",
            "options": [
                "12 vòng",
                "22 vòng",
                "32 vòng",
                "42 vòng"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Động tác xoay người 32 vòng liên tục trên mũi chân thể hiện điều gì?",
            "options": [
                "Mong muốn thể hiện sức mạnh một cách mãnh liệt",
                "Cảm giác mệt mỏi và chóng mặt",
                "Khả năng bay lượn giống thỏ trắng",
                "Sự vui chơi rong thả ngoài đồi cỏ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tại sao diễn viên múa ba lê phải dày công khổ luyện?",
            "options": [
                "Để thực hiện được các kĩ thuật rất khó trong phim/kịch",
                "Để có thể hát hay hơn trên sân khấu",
                "Để thu hút vốn đầu tư từ khán giả",
                "Để thuộc được lời thoại của vai diễn"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Hiện nay, bộ môn ba lê được phổ biến ở đâu?",
            "options": [
                "Chỉ được dạy ở các nước châu Âu",
                "Được dạy ở các trường múa trên khắp thế giới",
                "Chỉ biểu diễn ngoài trời trên đồng cỏ",
                "Đã bị mai một và không còn ai dạy"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ \"Để\" trong câu: \"Để thực hiện kĩ thuật khó, diễn viên phải khổ luyện...\" là từ loại gì?",
            "options": [
                "Danh từ",
                "Động từ",
                "Tính từ",
                "Kết từ"
            ],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Điền cặp kết từ hợp lý: \"... không dùng lời nói, ... nghệ sĩ vẫn thể hiện được kịch.\"",
            "options": [
                "Vì... nên",
                "Nếu... thì",
                "Tuy... nhưng",
                "Không những... mà còn"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Điền kết từ thích hợp: \"Ba lê tinh tế, độc đáo ... ngày càng được yêu thích.\"",
            "options": [
                "nên",
                "hay",
                "hoặc",
                "của"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Điệu nhạc nền kịch Hồ thiên nga gắn liền với tên tuổi nhà soạn nhạc nào?",
            "options": [
                "Tchaikovsky",
                "Mozart",
                "Beethoven",
                "Bach"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- LOGIC TƯƠNG TÁC TIẾT 109 ---
// 1. Swan Lake Web Audio Theme Player
let swanLakeAudioContext = null;
let swanLakeOscillators = [];

window.playSwanLakeTheme = function() {
    if (swanLakeOscillators.length > 0) return; // Already playing
    
    // Init Audio Context safely
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) {
        alert("Trình duyệt không hỗ trợ Web Audio API.");
        return;
    }
    
    swanLakeAudioContext = new AudioCtx();
    
    // Theme Notes: B4(493.88Hz), F#4(369.99Hz), B4, D5(587.33Hz), B4, F#4...
    const melody = [
        { note: 369.99, duration: 0.5 }, // F#4
        { note: 493.88, duration: 1.0 }, // B4
        { note: 587.33, duration: 0.5 }, // D5
        { note: 493.88, duration: 0.5 }, // B4
        { note: 369.99, duration: 0.5 }, // F#4
        { note: 440.00, duration: 1.0 }  // A4
    ];

    let time = swanLakeAudioContext.currentTime;

    melody.forEach(item => {
        const osc = swanLakeAudioContext.createOscillator();
        const gain = swanLakeAudioContext.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(item.note, time);
        
        gain.gain.setValueAtTime(0.15, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + item.duration - 0.05);
        
        osc.connect(gain);
        gain.connect(swanLakeAudioContext.destination);
        
        osc.start(time);
        osc.stop(time + item.duration);
        
        swanLakeOscillators.push(osc);
        time += item.duration;
    });

    // Reset oscillators array after melody ends
    setTimeout(() => {
        swanLakeOscillators = [];
    }, time * 1000);
};

window.stopSwanLakeTheme = function() {
    if (swanLakeOscillators.length > 0) {
        swanLakeOscillators.forEach(osc => {
            try {
                osc.stop();
            } catch(e) {}
        });
        swanLakeOscillators = [];
    }
    if (swanLakeAudioContext) {
        swanLakeAudioContext.close();
        swanLakeAudioContext = null;
    }
};

// 2. Logic Kéo thả Sắp xếp Bố cục (Câu 5)
let dragOrderDataVn109 = null;

window.handleOrderDragStart = function(event) {
    dragOrderDataVn109 = {
        id: event.target.id,
        text: event.target.innerText
    };
    event.dataTransfer.setData("text", event.target.innerText);
};

window.allowOrderDrop = function(event) {
    event.preventDefault();
};

window.handleOrderDrop = function(event, dropZoneId) {
    event.preventDefault();
    if (!dragOrderDataVn109) return;

    const targetZone = document.getElementById(dropZoneId);
    if (targetZone) {
        targetZone.innerText = dragOrderDataVn109.text;
        targetZone.setAttribute('data-ans-id', dragOrderDataVn109.id);
        targetZone.className = "flex-1 px-4 py-3 bg-yellow-400 text-gray-900 border-2 border-yellow-500 rounded-xl align-middle text-center font-black text-lg mx-2 shadow-sm";
    }
};

window.checkOrderVn109 = function() {
    const ans1 = document.getElementById('zone-1')?.getAttribute('data-ans-id');
    const ans2 = document.getElementById('zone-2')?.getAttribute('data-ans-id');
    const ans3 = document.getElementById('zone-3')?.getAttribute('data-ans-id');
    const ans4 = document.getElementById('zone-4')?.getAttribute('data-ans-id');

    const feedback = document.getElementById('order-feedback');
    if (!feedback) return;
    feedback.classList.remove('hidden');

    // Correct order:
    // 1. info-general (Thông tin chung)
    // 2. info-content (Nội dung)
    // 3. info-method (Cách thể hiện)
    // 4. info-popularity (Sự phổ biến)
    const score1 = (ans1 === 'info-general');
    const score2 = (ans2 === 'info-content');
    const score3 = (ans3 === 'info-method');
    const score4 = (ans4 === 'info-popularity');

    if (score1 && score2 && score3 && score4) {
        feedback.innerHTML = "🎉 Tuyệt vời! Em đã sắp xếp đúng trật tự các khối thông tin theo văn bản bài đọc!";
        feedback.className = "mt-6 p-4 rounded-xl font-bold text-lg bg-emerald-600 text-white text-center shadow-lg animate-fade-in";
        if (typeof window.UI?.showToast === 'function') {
            window.UI.showToast("Sắp xếp bố cục chính xác!", "success", 3000);
        }
    } else {
        feedback.innerHTML = "❌ Trật tự sắp xếp chưa đúng. Em hãy xem lại bố cục các đoạn văn và kéo thả lại nhé!";
        feedback.className = "mt-6 p-4 rounded-xl font-bold text-lg bg-red-500 text-white text-center shadow-lg animate-fade-in";
        if (typeof window.UI?.showToast === 'function') {
            window.UI.showToast("Bố cục chưa chính xác!", "error", 4000);
        }
    }
};

window.resetOrderVn109 = function() {
    const zones = ['zone-1', 'zone-2', 'zone-3', 'zone-4'];
    zones.forEach(zId => {
        const zone = document.getElementById(zId);
        if (zone) {
            zone.innerText = "Kéo thả thông tin vào đây 🌸";
            zone.removeAttribute('data-ans-id');
            zone.className = "flex-1 border-2 border-dashed border-sky-400 rounded-xl bg-sky-50/50 min-h-12 flex items-center justify-center font-bold drop-zone-order";
        }
    });
    const fb = document.getElementById('order-feedback');
    if (fb) fb.classList.add('hidden');
};

// 3. Logic Dropdown Luyện tập 2
window.checkDropdownVn109 = function() {
    const a1 = document.getElementById('drop-109-2a1')?.value;
    const a2 = document.getElementById('drop-109-2a2')?.value;
    const a3 = document.getElementById('drop-109-2a3')?.value;
    const b1 = document.getElementById('drop-109-2b1')?.value;
    const b2 = document.getElementById('drop-109-2b2')?.value;

    const feedback = document.getElementById('dropdown-feedback');
    if (!feedback) return;
    feedback.classList.remove('hidden');

    const scoreA = (a1 === 'Tuy' || a1 === 'Mặc dù') && (a2 === 'nhưng') && (a3 === 'và');
    // For b, "Vì múa ba lê... nên..." (cause/effect) is the most textbook accurate.
    const scoreB = (b1 === 'Vì' && b2 === 'nên') || (b1 === 'Tuy' && b2 === 'nhưng');

    if (scoreA && scoreB) {
        feedback.innerHTML = "🎉 Chính xác! Em đã lựa chọn đúng các kết từ để hoàn thiện câu ghép biểu thị quan hệ ý nghĩa rồi!";
        feedback.className = "mt-4 p-4 rounded-xl font-bold text-lg bg-emerald-600 text-white text-center shadow-lg animate-fade-in";
        if (typeof window.UI?.showToast === 'function') {
            window.UI.showToast("Điền kết từ hoàn toàn chính xác!", "success", 3000);
        }
    } else {
        feedback.innerHTML = "❌ Còn một số ô em chọn kết từ chưa đúng hoặc chưa chọn đầy đủ. Em hãy suy nghĩ lại nhé!";
        feedback.className = "mt-4 p-4 rounded-xl font-bold text-lg bg-red-500 text-white text-center shadow-lg animate-fade-in";
        if (typeof window.UI?.showToast === 'function') {
            window.UI.showToast("Lựa chọn kết từ chưa đúng!", "error", 4000);
        }
    }
};

window.resetDropdownVn109 = function() {
    const selectIds = ['drop-109-2a1', 'drop-109-2a2', 'drop-109-2a3', 'drop-109-2b1', 'drop-109-2b2'];
    selectIds.forEach(sId => {
        const select = document.getElementById(sId);
        if (select) select.value = "";
    });
    const fb = document.getElementById('dropdown-feedback');
    if (fb) fb.classList.add('hidden');
};

window.nopBaiVn109 = function() {
    // Make sure sound stops
    window.stopSwanLakeTheme();
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 109', 
            '🦢', 
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🦢</span><p class="text-xl md:text-3xl font-bold text-sky-900">Chúc mừng em đã hoàn thành bài Đọc Nghệ thuật múa ba lê!</p><p class="text-lg text-gray-600 mt-3">Em đã có cảm thụ tốt về nghệ thuật biểu diễn đỉnh cao và củng cố cách dùng kết từ liên kết câu.</p></div>'
        );
    }
};
