export const lesson71 = {
    "topic": "Tiếng Việt 5",
    "week": "11",
    "period": "71",
    "title": "ĐỌC: TRẢI NGHIỆM ĐỂ SÁNG TẠO",
    "desc": "Tìm hiểu hành trình thời thơ ấu và những chuyến chu du của nhà văn An-đéc-xen, từ đó hiểu rõ mối quan hệ giữa trải nghiệm thực tế và khả năng sáng tạo nghệ thuật kì diệu.",
    "subject": "Đọc",
    "theme": "Trải nghiệm để sáng tạo",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
<div class="flex justify-end mb-4">
    <button onclick="playSegmentAudio('assets/audio/tiengviet/71/trai_nghiem_de_sang_tao.mp3')" class="p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc toàn bài">
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
                Đọc trôi chảy, diễn cảm bài đọc "Trải nghiệm để sáng tạo" với giọng đọc truyền cảm, giàu cảm xúc.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Hiểu được tầm quan trọng của trải nghiệm thực tế và trái tim nhân hậu đối với việc sáng tạo văn học, nghệ thuật.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Biết trân trọng những trải nghiệm trong đời sống để bồi đắp kiến thức và nuôi dưỡng ước mơ.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động: Chia sẻ trải nghiệm</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Kể về một hoạt động trải nghiệm em đã được tham gia ở trường. Sau trải nghiệm đó, em học thêm được điều gì?</p>
        
        <div class="space-y-4">
            <textarea id="ans-vn71-kd" rows="3" placeholder="Ví dụ: Em đã được tham gia buổi cắm trại và dọn rác ở bãi biển của trường. Sau hoạt động đó, em học thêm được tinh thần đoàn kết cùng các bạn và nhận thức rõ hơn về việc bảo vệ môi trường..." class="w-full p-4 border-2 border-emerald-100 rounded-2xl outline-none focus:border-emerald-500 font-bold bg-emerald-50/10 text-xl md:text-2xl"></textarea>
            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraKhoiDong71();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn71-kd" class="hidden p-4 rounded-xl text-sm font-bold text-center mt-2"></div>
        </div>
    </div>

    <!-- 📖 BÀI ĐỌC -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>

        <div class="relative z-10 space-y-6">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-emerald-100 pb-4 gap-4">
                <span class="text-emerald-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                    <span>📖</span> TRẢI NGHIỆM ĐỂ SÁNG TẠO
                </span>
                
                <!-- Ghi âm luyện đọc diễn cảm -->
                <div class="flex items-center gap-3 bg-emerald-50 p-3 rounded-2xl border border-emerald-100 shadow-inner">
                    <span class="text-xs font-black text-emerald-800 uppercase px-2">Ghi âm bài đọc:</span>
                    <button id="btn-start-rec-71" onclick="batDauGhiAm71()" class="px-3 py-1.5 bg-red-600 hover:bg-red-600 text-white font-bold rounded-lg text-xs shadow-sm transition-all flex items-center gap-1">🔴 Thu âm</button>
                    <button id="btn-stop-rec-71" onclick="dungGhiAm71()" disabled class="px-3 py-1.5 bg-gray-800 hover:bg-gray-800 text-white font-bold rounded-lg text-xs shadow-sm transition-all flex items-center gap-1">⏹️ Dừng</button>
                    <audio id="audio-play-71" class="hidden h-8 w-40" controls></audio>
                </div>
            </div>

            <!-- Khung văn bản bài đọc -->
            <div class="space-y-8">
                <div class="w-full bg-amber-50/20 p-6 md:p-10 rounded-[40px] border border-amber-100/50 shadow-inner relative overflow-hidden">
                    <!-- Ảnh minh họa bài đọc (bấm phóng to) -->
                    <div onclick="window.showMathFeedback('Trải nghiệm để sáng tạo', '📷', '&lt;div class=&quot;flex justify-center p-2&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/71-72/71-72.png&quot; class=&quot;max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border-4 border-white&quot; alt=&quot;Nhà văn An-đéc-xen&quot;&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-white p-4 rounded-3xl border border-emerald-100 shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group border-4 border-white">
                        <img src="assets/images/tiengviet_5_1/71-72/71-72.png" alt="Nhà văn An-đéc-xen" class="w-full h-auto object-cover group-hover:scale-105 transition-all duration-500">
                        <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span class="px-4 py-2 bg-white/95 rounded-full text-xs font-black text-emerald-800 shadow-md">🔍 PHÓNG TO</span>
                        </div>
                        <p class="text-[10px] text-gray-800 font-bold text-center mt-3 leading-tight">Nhà văn An-đéc-xen thời ấu thơ bên cha</p>
                    </div>

                    <div id="bai-doc-andersen" class="serif-font text-gray-800 leading-relaxed space-y-6 text-justify font-normal text-xl md:text-4xl">
                                                <p class="indent-10">An-đéc-xen sinh ra trong một gia đình thợ giày ở Đan Mạch. Khi An-đéc-xen còn nhỏ, cha thường đưa cậu tới đồng cỏ chơi. Cha làm cho cậu chiếc kính có thể nhìn ra xa. Thế là cậu thấy được chim chóc trên trời, thiên nga trong hồ nước, dãy núi cuối làng,... Quan sát mỗi sự vật, cậu lại liên tưởng đến một câu chuyện kì diệu, rồi kể cho cha nghe.</p>
                        
                        <p class="indent-10">Lên năm tuổi, An-đéc-xen được cha làm cho mấy con rối gỗ. An-đéc-xen vui sướng cho chúng di chuyển, lắc lư cái đầu và trò chuyện cùng nhau. Cha An-đéc-xen thấy vậy liền dựng một cái sân khấu ngoài sân. Cậu bé may quần áo cho rối gỗ, đưa rối lên biểu diễn. Tối nọ, An-đéc-xen đứng trên sân khấu, ca hát và đọc thơ. Đột nhiên, có ngôi sao chổi vụt qua bầu trời. Xúc động bởi hiện tượng độc đáo ấy, cậu viết câu chuyện <em>Sao chổi</em>.</p>
                        
                        <p class="indent-10">Những ngày lên Cô-pen-ha-ghen kiếm việc làm, An-đéc-xen luôn say mê sáng tác. Cuốn sách đầu tiên của ông đã được xuất bản. Đọc cuốn sách, Quốc vương Đan Mạch rất thích thú, cho gọi An-đéc-xen đến và hỏi ông có tâm nguyện gì. Ông nói rằng mình muốn đến nhiều nơi để trải nghiệm cuộc sống. Quốc vương bèn tặng ông một số tiền để giúp ông thoả nguyện.</p>
                        
                        <p class="indent-10">Trong những ngày chu du khắp các nước, An-đéc-xen quen biết nhiều người thuộc các tầng lớp khác nhau. Ông bất bình trước những kẻ coi thường dân nghèo. Ông thương cảm với bao thân phận bé nhỏ, thiếu may mắn. Ông trân trọng những tâm hồn trong sáng, cao thượng. Bằng những trải nghiệm phong phú và một trái tim nhân hậu, ông đã cho ra đời một loạt tác phẩm: <em>Vịt con xấu xí, Cô bé bán diêm, Nàng tiên cá, Chú lính chì dũng cảm</em>,... Đây là những câu chuyện đã làm xúc động hàng triệu trẻ em trên thế giới.</p>
                        
                        <p class="text-right font-bold text-gray-500 mt-6 text-lg md:text-xl">(Phan Thế Quân tổng hợp)</p>
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
                            <li>• <strong>An-đéc-xen</strong> (1805 – 1875): nhà văn nổi tiếng thế giới người Đan Mạch, chuyên viết truyện cổ tích cho trẻ em.</li>
                            <li>• <strong>Cô-pen-ha-ghen</strong>: thủ đô của Đan Mạch.</li>
                            <li>• <strong>Sao chổi</strong>: một loại thiên thể có hình dạng giống cái chổi bay trên bầu trời.</li>
                            <li>• <strong>Tâm nguyện</strong>: nguyện vọng sâu kính, tha thiết nhất trong lòng.</li>
                            <li>• <strong>Chu du</strong>: đi du lịch hoặc đi khắp các nơi xa xôi.</li>
                        </ul>
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
                Bài đọc giúp người học hiểu được hành trình nuôi dưỡng và phát triển năng khiếu sáng tác của nhà văn An-đéc-xen từ những trải nghiệm phong phú thời thơ ấu và tình yêu thương, sự giáo dục đúng đắn của người cha.
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- CÂU HỎI ĐỌC HIỂU (ACCORDION DETAILS) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
        <div class="p-6 md:p-8 bg-emerald-50/30 rounded-[32px]">
<div class="space-y-4">
                <!-- Câu 1 -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">
                            1. Những trải nghiệm nào thời thơ ấu đã hun đúc nên tài năng của An-đéc-xen?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-2">💡 Trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li>Cha thường đưa cậu tới đồng cỏ chơi, làm cho chiếc kính nhìn xa để quan sát thiên nhiên (chim chóc, thiên nga, dãy núi...).</li>
                            <li>Được cha làm cho các con rối gỗ và dựng một sân khấu ngoài sân để cậu tự biểu diễn, ca hát, đọc thơ và viết câu chuyện.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 2 -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">
                            2. Những chi tiết nào cho thấy An-đéc-xen bộc lộ năng khiếu sáng tác từ nhỏ?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-2">💡 Trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li>Quan sát mỗi sự vật cậu đều liên tưởng đến một câu chuyện kì diệu rồi kể cho cha nghe.</li>
                            <li>Tự cho các con rối gỗ di chuyển, trò chuyện với nhau; tự may quần áo cho rối gỗ và đưa lên sân khấu ngoài sân biểu diễn.</li>
                            <li>Xúc động trước hiện tượng một ngôi sao chổi vụt qua bầu trời và viết nên câu chuyện "Sao chổi".</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 3 -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">
                            3. An-đéc-xen bày tỏ tâm nguyện gì với Quốc vương? Vì sao Quốc vương ủng hộ ông?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-2">💡 Trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li><strong>Tâm nguyện của ông:</strong> Muốn được đi đến nhiều nơi để trải nghiệm cuộc sống.</li>
                            <li><strong>Lý do Quốc vương ủng hộ:</strong> Vì Quốc vương rất thích thú sau khi đọc cuốn sách đầu tiên được xuất bản của An-đéc-xen, từ đó Quốc vương tặng tiền để giúp ông thỏa nguyện chu du học hỏi.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 4 -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">
                            4. Nhờ đâu An-đéc-xen viết được nhiều tác phẩm làm xúc động hàng triệu độc giả?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-2">💡 Trả lời:</p>
                        <p>Nhờ vào <strong>những trải nghiệm phong phú</strong> gặt hái được trên hành trình đi nhiều nơi và đặc biệt là <strong>một trái tim nhân hậu</strong>, luôn thương cảm và trân trọng những tâm hồn bé nhỏ, cao thượng trong đời sống.</p>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- LUYỆN TẬP TƯƠNG TÁC & VIẾT SÁNG TẠO -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-xl md:text-2xl font-black shadow-md">✏️</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Luyện viết & Tưởng tượng</h3>
            </div>

            <!-- Bài tập 1: Trắc nghiệm tương tác -->
            <div class="mb-10 bg-white p-6 rounded-3xl border border-amber-100 shadow-inner">
                <h4 class="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start gap-2">
                    <span class="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm mt-0.5 shadow-sm">1</span>
                    Nhân tố cốt lõi nào giúp An-đéc-xen sáng tác nên những câu chuyện cổ tích xúc động lòng người?
                </h4>
                <div class="grid grid-cols-1 gap-4 text-base md:text-lg">
                    <button onclick="selectOptionVn71('A')" id="btn-vn71-opt-A" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-amber-400 hover:bg-amber-50/30 transition-all text-gray-800">
                        A. Nguồn lực tài chính dồi dào có được từ triều đình nhà vua.
                    </button>
                    <button onclick="selectOptionVn71('B')" id="btn-vn71-opt-B" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-amber-400 hover:bg-amber-50/30 transition-all text-gray-800">
                        B. Trải nghiệm sống phong phú qua các hành trình và một trái tim ấm áp, nhân hậu.
                    </button>
                    <button onclick="selectOptionVn71('C')" id="btn-vn71-opt-C" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-amber-400 hover:bg-amber-50/30 transition-all text-gray-800">
                        C. Các kỹ năng múa rối gỗ điêu luyện từ thời thơ ấu.
                    </button>
                </div>
                <div id="vn71-opt-feedback" class="hidden mt-4 p-4 rounded-xl font-bold text-lg text-center"></div>
            </div>

            <!-- Bài tập 2: Viết câu tưởng tượng -->
            <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner">
                <h4 class="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                    <span class="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm mt-0.5 shadow-sm">2</span>
                    <div>
                        <span>Hãy tưởng tượng em được đi chu du cùng An-đéc-xen. Hãy viết 2 - 3 câu mô tả một trải nghiệm thú vị mà em và nhà văn đã trải qua.</span>
                    </div>
                </h4>
                
                <textarea id="ans-vn71-writing" rows="4" placeholder="Ví dụ: Em đã cùng nhà văn An-đéc-xen đi đến một vùng làng chài nghèo ven biển. Tại đây, chúng em được lắng nghe những câu chuyện vượt sóng gió của ngư dân và nhà văn đã kể cho em nghe phác thảo đầu tiên về một nàng tiên cá..." class="w-full p-4 md:p-6 text-xl md:text-2xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-amber-50/10 mb-6 font-medium leading-relaxed"></textarea>
                
                <div class="flex justify-end items-center gap-4"><button onclick="resetWritingVn71()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="checkWritingVn71();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                
                <div id="fb-vn71-writing" class="hidden mt-6 p-6 bg-emerald-600 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500">
                    <!-- AI Feedback will show here -->
                </div>
            </div>
        </div>
    </section>


                <!-- Câu 4 -->
                <div class="bg-emerald-50/30 p-6 rounded-3xl border border-emerald-100 space-y-3">
                    <div class="flex items-center gap-2">
                        <span class="w-8 h-8 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center shrink-0">4</span>
                        <h4 class="font-bold text-gray-800 text-lg md:text-xl">Nhờ đâu An-đéc-xen viết được nhiều tác phẩm hay làm xúc động hàng triệu trẻ em?</h4>
                    </div>
                    <div class="space-y-3 pl-2">
                        <label class="flex items-start gap-2 cursor-pointer font-semibold text-base md:text-lg">
                            <input type="radio" name="q4-ans" value="A" class="mt-1 w-5 h-5 text-emerald-800 focus:ring-emerald-600">
                            <span>A. Nhờ những trải nghiệm cuộc sống phong phú trong những chuyến chu du và một trái tim nhân hậu, đồng cảm với những số phận nghèo khổ, bé nhỏ.</span>
                        </label>
                        <label class="flex items-start gap-2 cursor-pointer font-semibold text-base md:text-lg">
                            <input type="radio" name="q4-ans" value="B" class="mt-1 w-5 h-5 text-emerald-800 focus:ring-emerald-600">
                            <span>B. Nhờ ông chỉ viết về cuộc sống của hoàng gia và những người giàu có ở Đan Mạch.</span>
                        </label>
                        <label class="flex items-start gap-2 cursor-pointer font-semibold text-base md:text-lg">
                            <input type="radio" name="q4-ans" value="C" class="mt-1 w-5 h-5 text-emerald-800 focus:ring-emerald-600">
                            <span>C. Nhờ năng khiếu vẽ tranh minh họa sinh động cho các tác phẩm của mình.</span>
                        </label>
                    </div>
                </div>

                <!-- Câu 5 -->
                <div class="bg-emerald-50/30 p-6 rounded-3xl border border-emerald-100 space-y-3">
                    <div class="flex items-center gap-2">
                        <span class="w-8 h-8 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center shrink-0">5</span>
                        <h4 class="font-bold text-gray-800 text-lg md:text-xl">Câu chuyện "Trải nghiệm để sáng tạo" muốn nói với chúng ta điều gì? Chọn ý kiến đúng nhất:</h4>
                    </div>
                    <div class="space-y-3 pl-2">
                        <label class="flex items-start gap-2 cursor-pointer font-semibold text-base md:text-lg">
                            <input type="radio" name="q5-ans" value="A" class="mt-1 w-5 h-5 text-emerald-800 focus:ring-emerald-600">
                            <span>A. Muốn sáng tạo nghệ thuật, phải có nhiều trải nghiệm thực tế.</span>
                        </label>
                        <label class="flex items-start gap-2 cursor-pointer font-semibold text-base md:text-lg">
                            <input type="radio" name="q5-ans" value="B" class="mt-1 w-5 h-5 text-emerald-800 focus:ring-emerald-600">
                            <span>B. Thành công sẽ đến khi chúng ta biết nỗ lực vượt qua khó khăn.</span>
                        </label>
                        <label class="flex items-start gap-2 cursor-pointer font-semibold text-base md:text-lg">
                            <input type="radio" name="q5-ans" value="C" class="mt-1 w-5 h-5 text-emerald-800 focus:ring-emerald-600">
                            <span>C. Càng trải nghiệm thực tế, chúng ta càng mở rộng hiểu biết.</span>
                        </label>
                    </div>
                </div>

            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraLuyenTap71();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn71-bt1" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBai71Global()" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-emerald-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Nhà văn nổi tiếng thế giới An-đéc-xen sinh ra ở đất nước nào?",
            "options": [
                "Đan Mạch",
                "Pháp",
                "Nga",
                "Đức"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Gia đình của An-đéc-xen làm nghề nghiệp gì?",
            "options": [
                "Gia đình thợ giày",
                "Gia đình nông dân",
                "Gia đình quý tộc",
                "Gia đình nhà nho"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Thuở nhỏ, cha của An-đéc-xen đã đưa cậu đi chơi ở đâu?",
            "options": [
                "Đồng cỏ chơi",
                "Thành phố lớn Cô-pen-ha-ghen",
                "Các lâu đài của quốc vương",
                "Vùng núi tuyết trắng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Món đồ chơi nào được cha làm tặng An-đéc-xen khi cậu lên năm tuổi?",
            "options": [
                "Mấy con rối gỗ",
                "Chiếc diều giấy khổng lồ",
                "Một quả bóng hơi",
                "Một bộ cờ vua gỗ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Sự vật nào xuất hiện trên bầu trời đã gợi cảm hứng cho An-đéc-xen viết tác phẩm đầu tiên?",
            "options": [
                "Một ngôi sao chổi vụt qua",
                "Một đàn chim thiên nga",
                "Cầu vồng sau cơn mưa",
                "Trăng rằm tròn vành vạnh"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tên câu chuyện đầu tiên mà An-đéc-xen đã viết thuở nhỏ là gì?",
            "options": [
                "Sao chổi",
                "Vịt con xấu xí",
                "Nàng tiên cá",
                "Cô bé bán diêm"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Cuốn sách đầu tiên của An-đéc-xen xuất bản đã thu hút sự chú ý và yêu thích của ai?",
            "options": [
                "Quốc vương Đan Mạch",
                "Người dân nghèo ở quê hương",
                "Các nhà báo thủ đô",
                "Trẻ em nghèo vùng nông thôn"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tâm nguyện lớn nhất của An-đéc-xen khi được Quốc vương hỏi là gì?",
            "options": [
                "Muốn đến nhiều nơi để trải nghiệm cuộc sống",
                "Muốn được bổ nhiệm làm nhà văn hoàng gia",
                "Muốn được mở một xưởng giày lớn",
                "Muốn được tặng một ngôi biệt thự sang trọng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "An-đéc-xen đã dùng số tiền được Quốc vương tặng vào việc gì?",
            "options": [
                "Chu du khắp các nước để trải nghiệm",
                "Mua một nhà hát múa rối lớn",
                "Ủng hộ toàn bộ cho dân nghèo",
                "Xây dựng thư viện cho trẻ em"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Thái độ của An-đéc-xen thế nào trước những kẻ coi thường dân nghèo?",
            "options": [
                "Bất bình",
                "Thờ ơ, không quan tâm",
                "Đồng tình, ủng hộ",
                "Kính nể và làm quen"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Yếu tố cốt lõi nào giúp An-đéc-xen viết nên những tác phẩm truyện cổ tích bất hủ?",
            "options": [
                "Trải nghiệm phong phú và một trái tim nhân hậu",
                "Sự giúp đỡ tài chính dồi dào từ Quốc vương",
                "Kiến thức từ những trường đại học nổi tiếng nhất",
                "Sự đóng góp ý kiến từ bạn bè khắp nơi"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tác phẩm nào dưới đây KHÔNG phải của nhà văn An-đéc-xen?",
            "options": [
                "Dế Mèn phiêu lưu ký",
                "Cô bé bán diêm",
                "Vịt con xấu xí",
                "Chú lính chì dũng cảm"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'Tâm nguyện' được giải nghĩa thế nào?",
            "options": [
                "Nguyện vọng sâu kín, tha thiết nhất trong lòng",
                "Suy nghĩ nhất thời và mong muốn nhanh chóng đạt được",
                "Lời thề trước đền thờ thần linh",
                "Sự lo âu về tương lai của cuộc đời"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'Chu du' được giải nghĩa thế nào?",
            "options": [
                "Đi du lịch hoặc đi khắp các nơi xa xôi",
                "Ngồi yên một chỗ để nghiên cứu học tập",
                "Chèo thuyền đi dọc bờ sông kiếm sống",
                "Đi tuần tra quanh khu vực biên giới"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Ý nghĩa giáo dục quan trọng nhất của câu chuyện 'Trải nghiệm để sáng tạo' là gì?",
            "options": [
                "Muốn sáng tạo nghệ thuật, phải có nhiều trải nghiệm thực tế",
                "Mọi ước mơ thời thơ ấu đều sẽ tự thành sự thật",
                "Chỉ con trai mới có thể trở thành người nổi tiếng",
                "Cần đọc sách mỗi ngày thay vì trải nghiệm"
            ],
            "answer": 0,
            "level": 2
        }
    ]
};

// --- BÀI TẬP TRẮC NGHIỆM CHỌN Ý KIẾN ---
window.selectOptionVn71 = function(opt) {
    // Reset selections
    ['A', 'B', 'C'].forEach(o => {
        const btn = document.getElementById(`btn-vn71-opt-${o}`);
        if (btn) {
            btn.className = "p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-amber-400 hover:bg-amber-50/30 transition-all text-gray-800";
        }
    });

    const activeBtn = document.getElementById(`btn-vn71-opt-${opt}`);
    const fb = document.getElementById('vn71-opt-feedback');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (opt === 'B') {
        if (activeBtn) activeBtn.className = "p-4 bg-emerald-100/10 border-2 border-emerald-100 rounded-xl font-bold text-left transition-all text-emerald-800 shadow-sm";
        fb.innerHTML = "🎉 Chính xác! Trải nghiệm sống phong phú và trái tim nhân hậu là 2 điều cốt lõi làm nên sức hấp dẫn của truyện cổ tích An-đéc-xen.";
        fb.className = "mt-4 p-4 rounded-xl font-bold text-lg text-center bg-emerald-600 text-white shadow-md";
    } else {
        if (activeBtn) activeBtn.className = "p-4 bg-rose-100/10 border-2 border-rose-100 rounded-xl font-bold text-left transition-all text-rose-800 shadow-sm";
        fb.innerHTML = "❌ Đáp án chưa chính xác. Em hãy nhớ lại đúc kết cuối bài viết để chọn lại nhé!";
        fb.className = "mt-4 p-4 rounded-xl font-bold text-lg text-center bg-rose-600 text-white shadow-md";
    }
};

// --- BÀI TẬP TỰ LUẬN VIẾT SÁNG TẠO ---
window.checkWritingVn71 = function() {
    const text = document.getElementById('ans-vn71-writing')?.value.trim();
    const fb = document.getElementById('fb-vn71-writing');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy điền đoạn văn tưởng tượng của mình trước nhé!";
        fb.className = "mt-6 p-6 bg-amber-500 text-white rounded-2xl shadow-xl";
        return;
    }

    if (text.length < 15) {
        fb.innerHTML = "⚠️ Đoạn văn của em còn ngắn quá. Hãy viết chi tiết hơn khoảng 2 - 3 câu để diễn tả đầy đủ trải nghiệm nhé!";
        fb.className = "mt-6 p-6 bg-amber-500 text-white rounded-2xl shadow-xl";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ THẦY E:</span>
            <p class="text-lg font-bold">"Rất tuyệt vời! Sự tưởng tượng phong phú cùng cách dùng từ biểu cảm đã tạo nên một chuyến phiêu lưu đầy thú vị bên cạnh nhà văn cổ tích."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Đạt yêu cầu - Hoàn thành tốt</span>
        </div>
    `;
    fb.className = "mt-6 p-6 bg-emerald-600 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500";
};

window.resetWritingVn71 = function() {
    const textarea = document.getElementById('ans-vn71-writing');
    if (textarea) textarea.value = '';
    const fb = document.getElementById('fb-vn71-writing');
    if (fb) fb.classList.add('hidden');
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.nopBai71Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 71 & 72',
            '🇩🇰',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🇩🇰</span><p class="text-2xl md:text-3xl font-bold text-emerald-800">Chúc mừng em đã hoàn thành bài học Trải nghiệm để sáng tạo!</p><p class="text-lg text-gray-800 mt-3">Hãy luôn mở rộng trái tim nhân hậu và tích cực trải nghiệm thế giới xung quanh để thắp sáng khả năng sáng tạo của mình nhé.</p></div>'
        );
    }
};

