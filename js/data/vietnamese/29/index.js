export const lesson29 = {
    "topic": "Tiếng Việt 5",
    "week": "5",
    "period": "29",
    "title": "ĐỌC: TRƯỚC CỔNG TRỜI",
    "desc": "Bài thơ giúp học sinh cảm nhận vẻ đẹp kì vĩ, hoang sơ của núi rừng vùng cao và cuộc sống lao động ấm cúng của đồng bào các dân tộc thiểu số tại đây.",
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
        <ul class="space-y-3 text-sky-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Đọc diễn cảm bài thơ "Trước cổng trời" với giọng nhẹ nhàng, chậm rãi, thể hiện sự ngưỡng mộ trước vẻ đẹp thiên nhiên kì vĩ.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Cảm nhận vẻ đẹp hoang sơ, ấm áp tình người vùng cao và thuộc lòng một số khổ thơ hoặc toàn bộ bài thơ.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG: MỞ HỘP QUÀ THIÊN NHIÊN -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động: Dự đoán cảnh đẹp</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Theo em, vì sao cảnh vật trong bức tranh minh họa (SGK trang 45) lại được gọi là “cổng trời”? Hãy viết suy nghĩ của em dưới đây:</p>
        
        <div class="space-y-4">
            <textarea id="ans-vn29-kd" rows="3" placeholder="Ví dụ: Em nghĩ cảnh vật được gọi là cổng trời vì đó là khoảng trống mở ra giữa hai bên vách đá dựng đứng trên đỉnh núi cao, làm ta có cảm giác như chiếc cổng dẫn lên bầu trời..." class="w-full p-4 border-2 border-sky-100 rounded-2xl outline-none focus:border-sky-500 font-bold bg-sky-50/10 text-xl md:text-2xl"></textarea>
            <div class="flex justify-center">
                <button onclick="checkKD29()" class="px-8 py-3 bg-sky-600 text-white font-black rounded-xl hover:bg-sky-600 transition-all text-base shadow-md">GỬI SUY NGHĨ ✓</button>
            </div>
            <div id="fb-vn29-kd" class="hidden p-4 rounded-xl text-sm font-bold text-center mt-2"></div>
        </div>
    </div>

    <!-- 📖 BÀI ĐỌC: TRƯỚC CỔNG TRỜI -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>

        <div class="relative z-10 space-y-6">
            <div class="flex justify-between items-center border-b border-sky-100 pb-4">
                <span class="text-sky-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                    <span>📖</span> Trước cổng trời (Trích)
                </span>
                
                <!-- Bộ điều khiển Luyện thuộc lòng bài thơ -->
                <div class="flex items-center gap-2 bg-sky-50 p-2 rounded-2xl border border-sky-100 shadow-inner">
                    <span class="text-xs font-black text-sky-800 uppercase px-2">Luyện thuộc lòng:</span>
                    <button onclick="toggleMemorizeVn29('show')" class="px-3 py-1 bg-white hover:bg-sky-600 text-sky-800 font-bold rounded-lg text-xs shadow-sm transition-all">Hiện hết</button>
                    <button onclick="toggleMemorizeVn29('easy')" class="px-3 py-1 bg-sky-600 text-white font-bold rounded-lg text-xs shadow-sm transition-all hover:bg-sky-600">Che ít</button>
                    <button onclick="toggleMemorizeVn29('hard')" class="px-3 py-1 bg-rose-600 text-white font-bold rounded-lg text-xs shadow-sm transition-all hover:bg-rose-600">Che nhiều</button>
                </div>

                <button onclick="playSegmentAudio('assets/audio/tiengviet/29/truoc_cong_troi.mp3')" class="p-3 bg-sky-600 hover:bg-sky-600 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc mẫu">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                </button>
            </div>

            <!-- Khung bài thơ thơ mộng -->
            <div class="space-y-8">
                <div class="w-full bg-orange-50/20 p-6 md:p-12 rounded-[40px] border border-orange-100/50 shadow-inner relative overflow-hidden">
                    <!-- Minh họa SGK (Đặt ở trên cùng, căn giữa, bấm vào phóng to) -->
                    <div class="flex justify-center mb-8">
                        <div onclick="window.showMathFeedback('Trước cổng trời', '⛰️', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/29/29.png&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Trước cổng trời&quot;&gt;&lt;p class=&quot;text-2xl md:text-3xl font-bold text-orange-800 mt-4&quot;&gt;Cổng trời mở ra giữa hai vách núi cao, nơi con người lao động thấp thoáng áo chàm nhuộm xanh nắng chiều.&lt;/p&gt;&lt;/div&gt;')" class="w-full max-w-md bg-gradient-to-br from-amber-50 to-orange-50 rounded-[32px] border-4 border-white shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group">
                            <img src="assets/images/tiengviet_5_1/29/29.png" class="w-full h-56 md:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500" alt="Trước cổng trời">
                            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Bấm để phóng to 🔍</div>
                        </div>
                    </div>

                    <div id="poem-text" class="serif-font text-left text-gray-900 leading-relaxed space-y-8 max-w-lg mx-auto pl-16 md:pl-28 text-xl md:text-4xl">
                        <!-- Khổ 1 -->
                        <div class="space-y-1">
                            <p>Giữa hai bên <span class="mem-word">vách đá</span></p>
                            <p>Mở ra một <span class="mem-word">khoảng trời</span></p>
                            <p>Có <span class="mem-word">gió thoảng</span>, mây trôi</p>
                            <p>Cổng trời trên <span class="mem-word">mặt đất</span>?</p>
                        </div>
                        
                        <!-- Khổ 2 -->
                        <div class="space-y-1">
                            <p>Nhìn ra xa <span class="mem-word">ngút ngát</span></p>
                            <p>Bao sắc màu <span class="mem-word">cỏ hoa</span></p>
                            <p>Con <span class="mem-word">thác réo</span> ngân nga</p>
                            <p>Đàn dê soi <span class="mem-word">đáy suối</span>.</p>
                        </div>

                        <!-- Khổ 3 -->
                        <div class="space-y-1">
                            <p>Giữa ngút ngàn <span class="mem-word">cây trái</span></p>
                            <p>Dọc vùng rừng <span class="mem-word">nguyên sơ</span></p>
                            <p>Không biết <span class="mem-word">thực hay mơ</span></p>
                            <p>Ráng chiều như <span class="mem-word">hơi khói</span>...</p>
                        </div>

                        <!-- Khổ 4 -->
                        <div class="space-y-1">
                            <p>Những vạt nương <span class="mem-word">màu mật</span></p>
                            <p>Lúa chín ngập <span class="mem-word">lòng thung</span></p>
                            <p>Và tiếng nhạc <span class="mem-word">ngựa rung</span></p>
                            <p>Suốt triền rừng <span class="mem-word">hoang dã</span>.</p>
                        </div>

                        <!-- Khổ 5 -->
                        <div class="space-y-1">
                            <p>Người Tày từ <span class="mem-word">khắp ngả</span></p>
                            <p>Đi gặt lúa, <span class="mem-word">trồng rau</span></p>
                            <p>Những người Giáy, <span class="mem-word">người Dao</span></p>
                            <p>Đi tìm măng, <span class="mem-word">hái nấm</span>.</p>
                        </div>

                        <!-- Khổ 6 -->
                        <div class="space-y-1">
                            <p>Vạt áo chàm <span class="mem-word">thấp thoáng</span></p>
                            <p>Nhuộm xanh cả <span class="mem-word">nắng chiều</span></p>
                            <p>Và gió thổi, <span class="mem-word">suối reo</span></p>
                            <p>Ấm giữa rừng <span class="mem-word">sương giá</span>.</p>
                        </div>
                        
                        <p class="text-right font-bold text-gray-500 mt-6 text-xl md:text-2xl">(Nguyễn Đình Ảnh)</p>
                    </div>
                </div>

                <!-- Các khối thông tin bổ trợ đặt bên dưới -->
                <div class="space-y-6">
                    <!-- Chú giải từ khó -->
                    <div class="bg-amber-50/70 p-6 md:p-8 rounded-[28px] border-2 border-dashed border-amber-200">
                        <p class="text-xs font-black text-amber-600 uppercase tracking-widest mb-3 flex items-center gap-1">
                            <span>📝</span> Từ ngữ cần nhớ
                        </p>
                        <ul class="space-y-4 text-xl md:text-2xl text-amber-600 font-bold leading-relaxed">
                            <li>• <strong>Nguyên sơ</strong>: còn nguyên vẹn vẻ tự nhiên như lúc ban đầu.</li>
                            <li>• <strong>Vạt nương</strong>: mảnh đất dài và hẹp trên đồi núi để trồng trọt.</li>
                            <li>• <strong>Triền</strong>: dải đất thoải thoải ở hai bên bờ sông hoặc hai bên sườn núi.</li>
                        </ul>
                    </div>
                </div>

    <!-- 💡 Nội dung chính bài học -->
    <div class="p-8 rounded-[36px] bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-xl relative overflow-hidden">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <h4 class="text-xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
            <span>💡</span> Nội dung chính bài học
        </h4>
        <div class="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p class="text-xl md:text-4xl font-bold leading-relaxed text-center italic">
                "Bài thơ miêu tả vẻ đẹp hoang sơ, thơ mộng của thiên nhiên vùng núi cao trước cổng trời, qua đó hiện lên cuộc sống lao động ấm cúng, thanh bình của đồng bào các dân tộc."
            </p>
        </div>
    </div>

            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- ACCORDION CÂU HỎI ĐỌC HIỂU -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">❓</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Câu hỏi Đọc hiểu (Trang 46)</h3>
            </div>

            <div class="space-y-4">
                <!-- Câu 1 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            1. Dựa vào khổ thơ thứ nhất, hãy miêu tả khung cảnh "cổng trời" theo hình dung của em.
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-1">💡 Trả lời:</p>
                        <p>Theo khổ 1, "cổng trời" là một lối đi mở ra ngay giữa hai bên vách đá sừng sững dựng đứng. Từ lối đi này, một khoảng trời cao rộng hiện ra trước mắt với gió thổi nhè nhẹ và mây trắng trôi bồng bềnh, làm ta có cảm giác như một chiếc cổng kì vĩ dẫn từ mặt đất lên thiên đường.</p>
                    </div>
                </details>

                <!-- Câu 2 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            2. Từ cổng trời, cảnh vật hiện ra với những hình ảnh nào? Em thấy hình ảnh nào thú vị nhất? Vì sao?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-1">💡 Trả lời:</p>
                        <ul class="list-disc list-inside space-y-2 mb-2">
                            <li><strong>Các hình ảnh thiên nhiên</strong>: Sắc màu cỏ hoa ngút ngàn, tiếng thác nước réo ngân nga, đàn dê soi bóng dưới suối, rừng nguyên sơ ngút ngàn cây trái, ráng chiều mờ ảo như hơi khói, những vạt nương màu mật ngọt, lúa chín ngập thung lũng và tiếng nhạc ngựa rung triền rừng.</li>
                            <li><strong>Hình ảnh thú vị nhất</strong>: Học sinh có thể chọn hình ảnh <em>"Con thác réo ngân nga / Đàn dê soi đáy suối"</em> vì nó vừa gợi tả được vẻ đẹp động của âm thanh tiếng nước chảy, vừa vẽ nên vẻ đẹp tĩnh lặng trong ngần của đáy suối soi bóng đàn dê.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 3 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            3. Hình ảnh con người trong 2 khổ thơ cuối có những điểm chung nào?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-1">💡 Trả lời:</p>
                        <p>Hình ảnh con người (Người Tày, người Giáy, người Dao) có điểm chung là:</p>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Họ đều chăm chỉ, cần cù lao động: đi gặt lúa, trồng rau, tìm măng, hái nấm để xây dựng cuộc sống.</li>
                            <li>Họ mặc những bộ quần áo giản dị nhuộm chàm đặc trưng của vùng cao (vạt áo chàm thấp thoáng).</li>
                            <li>Họ sống gắn bó, hòa mình giữa thiên nhiên hoang sơ, mang lại nét ấm áp sinh hoạt cho núi rừng.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 4 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            4. Theo em, điều gì đã khiến cho cảnh rừng sương giá như ấm lên?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-1">💡 Trả lời:</p>
                        <p>Cảnh rừng hoang sơ đầy sương giá, lạnh lẽo đã được sưởi ấm lên nhờ <strong>sự xuất hiện của con người lao động cần mẫn</strong>. Hình ảnh những vạt áo chàm thấp thoáng đi gieo trồng, thu hoạch gặt hái cùng tiếng nhạc ngựa rung ngân vang đã xua tan đi vẻ hoang vu cô tịch, đem lại sức sống và sự ấm cúng cho cả núi rừng.</p>
                    </div>
                </details>

                <!-- Câu 5 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            5. Nêu chủ đề của bài thơ.
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-1">💡 Trả lời:</p>
                        <p><strong>Chủ đề bài thơ</strong>: Ca ngợi vẻ đẹp hoang sơ, tráng lệ mà trữ tình thơ mộng của bức tranh thiên nhiên vùng cao, đồng thời tôn vinh nét đẹp lao động giản dị, đầm ấm tình người của đồng bào các dân tộc thiểu số nơi đây.</p>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- PHẦN 2: THỰC HÀNH VIẾT CẢM NHẬN (AI THẦY E CHẤM) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">✏️</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Thực hành Viết cảm nhận</h3>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner space-y-4">
                <h4 class="text-xl md:text-2xl font-bold text-gray-800 flex items-start gap-3">
                    <span class="bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-base mt-0.5 shadow-sm">✍️</span>
                    Em hãy viết một đoạn văn ngắn (3 - 5 câu) miêu tả lại vẻ đẹp của bức tranh thiên nhiên hoặc con người vùng cao tại "cổng trời" theo trí tưởng tượng của em.
                </h4>
                <textarea id="ans-vn29-writing" rows="5" placeholder="Ví dụ: Đứng trước cổng trời kiêu hãnh giữa hai vách đá dựng đứng, em vô cùng kinh ngạc trước vẻ đẹp kì vĩ nơi đây. Những làn mây trắng lơ lửng trôi như thể ta chỉ cần với tay là chạm được..." class="w-full p-4 md:p-6 text-xl md:text-2xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-amber-50/10 font-medium leading-relaxed"></textarea>
                
                <div class="flex justify-start gap-3">
                    <button onclick="checkWritingVn29()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                        <span>CHẤM BÀI TỰ LUẬN</span>
                    </button>
                    <div id="fb-vn29-writing" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TOÀN BỘ -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn29Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Vị trí của cổng trời được miêu tả nằm ở đâu?",
            "options": [
                "Giữa một thảo nguyên xanh bát ngát",
                "Giữa hai bên vách đá dựng đứng",
                "Dưới lòng một thung lũng sâu thẳm",
                "Ở đầu một dòng suối chảy xiết"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Những sự vật nào xuất hiện ngay tại cổng trời được nói tới ở khổ thơ đầu?",
            "options": [
                "Nắng vàng, chim hót ríu ran",
                "Gió thoảng, mây trôi lững lờ",
                "Sương giá lạnh buốt, tuyết rơi",
                "Tiếng nhạc ngựa rung vang dội"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khung cảnh nhìn ra từ cổng trời được nhà thơ miêu tả bằng từ ngữ nào?",
            "options": [
                "Hun hút rộng lớn",
                "Ngút ngát sắc màu",
                "Hiểm trở cheo leo",
                "Hẻo lánh hoang vu"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Âm thanh nào của thiên nhiên vùng cao vang lên ngân nga như tiếng hát?",
            "options": [
                "Tiếng gió thổi qua vách đá",
                "Tiếng thác nước réo rắt",
                "Tiếng chim hót vang rừng",
                "Tiếng nhạc ngựa rung từ xa"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đàn dê núi ở hành tinh cổng trời làm hành động gì bên suối?",
            "options": [
                "Đang gặm cỏ tươi bên suối",
                "Đang uống dòng nước trong vắt",
                "Đang soi mình dưới đáy suối trong",
                "Đang nô đùa nhảy nhót quanh suối"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Ráng chiều của vùng cổng trời mờ ảo được ví với hình ảnh gì?",
            "options": [
                "Như dải lụa đào vắt ngang núi",
                "Như hơi khói lững lờ",
                "Như ngọn lửa hồng rực rỡ",
                "Như màn sương sớm đọng trên lá"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Triền rừng hoang dã ngập tràn màu sắc nào từ những vạt nương trồng trọt?",
            "options": [
                "Màu xanh rêu phủ kín",
                "Màu mật ngọt vàng óng",
                "Màu nâu đỏ của đất feralit",
                "Màu tím hoa ban rực rỡ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Âm thanh đặc trưng nào báo hiệu hoạt động của con người hoặc ngựa thồ hàng ở triền rừng hoang dã?",
            "options": [
                "Tiếng còi tàu vang vọng",
                "Tiếng gõ mõ chăn dê",
                "Tiếng nhạc ngựa rung reng reng",
                "Tiếng gọi nhau í ới đầu nương"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Những dân tộc thiểu số nào được nhắc đến trực tiếp ở hai khổ thơ cuối bài?",
            "options": [
                "Người Mông, người Thái, người Mường",
                "Người Tày, người Giáy, người Dao",
                "Người Nùng, người Ba Na, người Ê Đê",
                "Người Khmer, người Chăm, người Hoa"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Công việc lao động nào KHÔNG được liệt kê trực tiếp trong bài thơ?",
            "options": [
                "Đi gặt lúa chín vàng",
                "Đi trồng rau xanh",
                "Đi dệt thổ cẩm may áo chàm",
                "Đi tìm măng và hái nấm rừng"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Hình ảnh nhuộm xanh nắng chiều biểu thị cho chi tiết trang phục nào của đồng bào?",
            "options": [
                "Chiếc nón lá truyền thống",
                "Chiếc vạt áo chàm đặc trưng",
                "Chiếc khăn rằn quấn đầu",
                "Chiếc vòng bạc lấp lánh đeo cổ"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Từ 'Nguyên sơ' trong phần chú giải từ khó được giải nghĩa thế nào?",
            "options": [
                "Đã bị con người tàn phá nghiêm trọng",
                "Còn nguyên vẹn vẻ tự nhiên như lúc ban đầu",
                "Có nhiều nhà máy xí nghiệp hiện đại",
                "Mới được cải tạo trồng trọt"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ 'Vạt nương' mang ý nghĩa là gì?",
            "options": [
                "Khu vườn rộng trồng cây ăn quả ở đồng bằng",
                "Mảnh đất dài và hẹp trên đồi núi để trồng trọt",
                "Dải đất rộng chạy dọc ven bờ sông lớn",
                "Vùng đầm lầy thích hợp nuôi thả cá"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Yếu tố chính nào làm sưởi ấm cảnh rừng sương giá lạnh lẽo hoang vu?",
            "options": [
                "Ánh nắng mặt trời ban trưa chiếu xuống rực rỡ",
                "Sự xuất hiện và hoạt động lao động cần cù của con người",
                "Ngọn lửa đốt nương làm rẫy của người dân",
                "Cánh rừng nguyên sơ bừng tỉnh vào xuân"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Bài thơ 'Trước cổng trời' của tác giả nào?",
            "options": [
                "Xuân Quỳnh",
                "Nguyễn Đình Ảnh",
                "Trần Đăng Khoa",
                "Huy Cận"
            ],
            "answer": 1,
            "level": 0
        }
    ]
};

// --- DỰ ĐOÁN KHỞI ĐỘNG VN29 ---
window.checkKD29 = function() {
    const text = document.getElementById('ans-vn29-kd')?.value.trim();
    const fb = document.getElementById('fb-vn29-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy ghi suy nghĩ của mình trước khi gửi nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    fb.innerHTML = "🎉 Tuyệt vời! Suy nghĩ của em rất hay và hợp lý. Hãy cùng đọc bài thơ dưới đây để trải nghiệm cảnh cổng trời thực tế nhé.";
    fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
};

// --- LUYỆN THUỘC LÒNG BÀI THƠ ---
window.toggleMemorizeVn29 = function(mode) {
    const words = document.querySelectorAll('#poem-text .mem-word');
    words.forEach((w, idx) => {
        // Lưu trữ từ gốc lần đầu tiên
        if (!w.hasAttribute('data-orig')) {
            w.setAttribute('data-orig', w.innerText);
            // Cho phép click để xem nhanh
            w.style.cursor = 'pointer';
            w.onclick = function() {
                w.classList.remove('bg-blue-600', 'text-transparent', 'select-none', 'rounded', 'px-1');
                w.classList.add('text-sky-800', 'font-black');
            };
        }

        const origText = w.getAttribute('data-orig');
        // Reset classes
        w.className = 'mem-word transition-all duration-329';
        w.innerText = origText;

        if (mode === 'easy') {
            // Chỉ che một số từ khóa ngẫu nhiên (chẵn lẻ)
            if (idx % 2 === 0) {
                w.classList.add('bg-blue-600', 'text-transparent', 'select-none', 'rounded', 'px-1');
            }
        } else if (mode === 'hard') {
            // Che toàn bộ từ khóa được gán class mem-word
            w.classList.add('bg-blue-600', 'text-transparent', 'select-none', 'rounded', 'px-1');
        }
    });
};

// --- CHẤM BÀI TỰ LUẬN VIẾT CẢM NHẬN (CÂU 5) ---
window.checkWritingVn29 = function() {
    const text = document.getElementById('ans-vn29-writing')?.value.trim();
    const fb = document.getElementById('fb-vn29-writing');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text || text.length < 15) {
        fb.innerHTML = "⚠️ Bài viết của em hơi ngắn. Hãy viết tối thiểu từ 3 câu miêu tả vẻ đẹp thiên nhiên vùng cao để AI Thầy E chấm điểm chính xác nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    // Đánh giá giả lập AI Thầy E
    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
            <p class="text-lg font-bold">"Cảm nhận rất tốt! Đoạn văn của em giàu hình ảnh sống động, sử dụng từ ngữ gợi tả màu sắc, âm thanh của triền núi và con người lao động vùng cao vô cùng chân thực."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Điểm: 129% (Hoàn thành tốt)</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-329";
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.submitVn29Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback('Hoàn thành Tiết 29', '⛰️', '<div class="text-center p-6"><span class="text-7xl block mb-4">⛰️</span><p class="text-2xl md:text-3xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài thơ Trước cổng trời!</p><p class="text-lg text-gray-800 mt-3">Hãy luôn yêu mến thiên nhiên đất nước và trân trọng vẻ đẹp lao động cần mẫn của con người ở mọi vùng miền Tổ quốc.</p></div>');
    }
};
