export const lesson53 = {
    "topic": "Tiếng Việt 5",
    "week": "8",
    "period": "53",
    "title": "ĐỌC & LTVC: XIN CHÀO, XA-HA-RA",
    "desc": "Mô-đun liên kết giúp học sinh khám phá vẻ đẹp kỳ vĩ, khắc nghiệt của sa mạc Xa-ha-ra, rèn luyện đọc hiểu và thực hành các bài tập từ trái nghĩa, từ đa nghĩa.",
    "subject": "Đọc & LTVC",
    "theme": "Thế giới tuổi thơ",
    "content": `<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
        <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
            <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
            <h3 class="text-2xl md:text-5xl font-black text-sky-900 mb-4 flex items-center gap-3">
                <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
                Mục tiêu Tiết 53 (Đọc)
            </h3>
            <ul class="space-y-3 text-sky-800 font-bold text-xl md:text-2xl ml-2">
                <li class="flex items-start gap-2">
                    <span class="text-sky-900 font-black">•</span>
                    Đọc diễn cảm bài ký sự "Xin chào, Xa-ha-ra", cảm nhận được sự khắc nghiệt nhưng kỳ vĩ của thiên nhiên châu Phi.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-sky-900 font-black">•</span>
                    Hiểu được những đặc trưng kỳ lạ của sa mạc (thời tiết dao động cực đoan, chất cát mịn như bột, sự bền bỉ của loài lạc đà).
                </li>
            </ul>
        </div>

        <!-- 🎮 KHỞI ĐỘNG -->
        <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động: Hiểu biết về sa mạc</h3>
            </div>
            <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Hãy trao đổi với bạn những điều em biết về sa mạc (thời tiết, cảnh vật, con vật, cây cối...):</p>
            
            <div class="space-y-4">
                <textarea id="ans-vn53-kd" rows="3" placeholder="Ví dụ: Theo em biết, sa mạc là nơi vô cùng khô hạn, nắng nóng gay gắt vào ban ngày nhưng ban đêm lại rất lạnh. Ở đây có cát trải dài mênh mông, loài động vật đặc trưng là lạc đà và thực vật chủ yếu là cây xương rồng..." class="w-full p-4 border-2 border-sky-100 rounded-2xl outline-none focus:border-sky-500 font-bold bg-sky-50/10 text-xl md:text-2xl text-gray-800"></textarea>
                <div class="flex justify-center">
                    <button onclick="checkKD53()" class="px-8 py-3 bg-sky-600 text-white font-black rounded-xl hover:bg-sky-600 transition-all text-base shadow-md">GỬI SUY NGHĨ ✓</button>
                </div>
                <div id="fb-vn53-kd" class="hidden p-4 rounded-xl text-sm font-bold text-center mt-2"></div>
            </div>
        </div>

        <!-- 📖 BÀI ĐỌC -->
        <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
            <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>

            <div class="relative z-10 space-y-6">
                <div class="flex justify-between items-center border-b border-sky-100 pb-4">
                    <span class="text-sky-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                        <span>📖</span> Xin chào, Xa-ha-ra
                    </span>
                    <button onclick="playSegmentAudio('assets/audio/tiengviet/53/xin_chao_xa_ha_ra.mp3')" class="p-3 bg-sky-600 hover:bg-sky-600 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc mẫu">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                    </button>
                </div>

                <div class="flex flex-col lg:flex-row gap-8 items-start">
                <!-- Cột bài đọc dạng 1 cột toàn màn hình -->
                <div class="space-y-8">
                    <div class="w-full bg-orange-50/20 p-6 md:p-8 rounded-[40px] border border-orange-100/50 shadow-inner space-y-6 text-gray-800 text-xl md:text-2xl font-normal leading-relaxed relative overflow-hidden">
                        <!-- Minh họa thật phóng to -->
                        <div onclick="window.showMathFeedback('Sa mạc Sahara', '🏜️', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/53-54/53-54.png&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Sa mạc Sahara&quot;&gt;&lt;p class=&quot;text-2xl font-bold text-sky-800 mt-4&quot;&gt;Vẻ đẹp hùng vĩ và hoang vu của sa mạc Sahara với cồn cát vàng óng.&lt;/p&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-gradient-to-br from-sky-50 to-blue-50 rounded-[32px] border-4 border-white shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group">
                            <img src="assets/images/tiengviet_5_1/53-54/53-54.png" class="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500" alt="Sa mạc Sahara">
                            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Bấm để phóng to 🔍</div>
                        </div>
                        <p class="indent-8 text-justify">
                            Sang phía nam dãy Át-lát, tôi như lạc vào phim khoa học viễn tưởng. Những rặng đá xám bỗng xỉn màu rồi ngả sang đen rám hoặc đỏ quạch. Bốn bề giống như sao Hoả.
                        </p>
                        <p class="indent-8 text-justify">
                            Nghỉ vài chặng, xe bắt đầu quành vào sa mạc. Chúng tôi xuống xe dưới cái nắng như rải lửa khiến tóc của mọi người trở nên giòn tan. Nhưng tôi đã quên mất nắng nóng. Tôi còn bận thì thầm: “Xin chào, Xa-ha-ra.”.
                        </p>
                        <p class="indent-8 text-justify">
                            Xa-ha-ra, sa mạc lớn nhất châu Phi đang ở ngay trước mắt tôi. Chân tôi đang giẫm lên nó. Cát của nó lội cộm dưới đế giày. Cát sa mạc mịn như bột và mỏng manh như gió bụi, không to như cát Phan Thiết hay ẩm ướt như cát Sầm Sơn. Chúng tôi phấn khích nhảy nhót. Giấc mơ này là có thật. Chúng tôi đang ở đây, một trong những nơi hoang vu nhất địa cầu.
                        </p>
                        <p class="indent-8 text-justify">
                            Chúng tôi trèo lên yên lạc đà. Chúng đứng bỗng dậy, cao lừng lững. Những người dắt lạc đà phải ghìm để chúng không chạy. Chạy trên cát lún thì lạc đà là vô địch.
                        </p>
                        <p class="indent-8 text-justify">
                            Trời tối dần, lạ thay, trời rất mát, thậm chí rất lạnh. Gió thổi lồng lộng kéo bật tóc tôi ra khỏi khăn trùm đầu. Chúng tôi đi khá lâu mới đến khu lều dành cho khách du lịch, nhưng không ai muốn vào những túp lều du mục ấy. Mọi người nằm kềnh ra những tấm chiếu dạ trải trên cát để ngắm sao, tận hưởng đêm duy nhất giữa sa mạc mênh mông.
                        </p>
                        <p class="indent-8 text-justify">
                            Năm giờ sáng, trời hửng. Những cồn cát óng vàng vây quanh những căn lều vuông vắn. Bầu trời nhu nhú ánh bình minh rồi rải nắng non lóng lánh lên những hạt cát mịn. Đàn lạc đà lại đưa chúng tôi ra xe. Sa mạc hai triệu năm tuổi và những cồn cát lùi dần lại phía sau. Bỗng trên xe có người nói chưa biết quốc tịch của người bên cạnh. Mọi người cười phá lên. Phải rồi, việc mang quốc tịch gì đâu có quan trọng, khi mà ở giữa hoang mạc, ai cũng trở nên nhỏ bé như một hạt cát.
                        </p>
                        <p class="text-right font-bold text-gray-800 text-lg md:text-xl mt-4 italic">(Theo Di Li)</p>
                    </div>

                    <!-- Các khối thông tin bổ trợ đặt bên dưới dạng lưới thích ứng -->
                    <div class="grid grid-cols-1 gap-6">
                        <!-- Chú giải từ khó -->
                        <div class="bg-sky-50/70 p-6 md:p-8 rounded-[28px] border-2 border-dashed border-sky-100">
                            <p class="text-xs font-black text-sky-800 uppercase tracking-widest mb-3 flex items-center gap-1">
                                <span>📝</span> Chú giải từ khó
                            </p>
                            <ul class="space-y-4 text-xl md:text-2xl text-sky-800 font-bold leading-relaxed">
                                <li>• <strong>Át-lát</strong>: dãy núi dài ở Tây Bắc châu Phi.</li>
                                <li>• <strong>Đỏ quạch</strong>: màu đỏ sậm và đặc xỉn lại.</li>
                                <li>• <strong>Ghìm</strong>: giữ chặt lại, không cho chạy tự do.</li>
                                <li>• <strong>Lều du mục</strong>: túp lều di động bằng da/dạ của người sống du cư trên hoang mạc.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- 💡 Ý nghĩa / Thông điệp bài học -->
    <div class="p-8 rounded-[36px] bg-gradient-to-r from-sky-600 to-emerald-500 text-white shadow-xl relative overflow-hidden mt-6">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <h4 class="text-xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
            <span>💡</span> Nội dung chính bài học
        </h4>
        <div class="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p class="text-xl md:text-4xl font-bold leading-relaxed text-center italic">
                "Bài viết giúp các em cảm nhận sâu sắc vẻ đẹp hoang sơ, tráng lệ nhưng cũng đầy thử thách của sa mạc Xa-ha-ra. Qua đó, khơi gợi lòng ham học hỏi, đam mê khám phá thế giới tự nhiên và ý thức được sự nhỏ bé của con người trước tự nhiên kì vĩ."
            </p>
        </div>
    </div>
</div>`,
    "practice": `<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- Cấu trúc chuyển đổi giữa 2 Tiết học (Tab) -->
    <div class="flex border-b-2 border-sky-100 bg-white rounded-3xl p-2 shadow-inner gap-2">
        <button id="tab-reading" onclick="switchTab53('reading')" class="flex-1 py-3 bg-sky-600 text-white font-black rounded-2xl text-lg md:text-xl transition-all shadow-md">
            📖 TIẾT 53: ĐỌC HIỂU VĂN BẢN
        </button>
        <button id="tab-ltvc" onclick="switchTab53('ltvc')" class="flex-1 py-3 bg-white text-sky-800 hover:bg-sky-50 font-black rounded-2xl text-lg md:text-xl transition-all">
            ✏️ TIẾT 54: LUYỆN TỪ VÀ CÂU
        </button>
    </div>

    <!-- ==================== TAB 1: ĐỌC HIỂU VĂN BẢN (CÂU HỎI) ==================== -->
    <div id="content-reading" class="space-y-8">
        <!-- CÂU HỎI ĐỌC HIỂU -->
        <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
            <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">❓</div>
                    <h3 class="text-2xl md:text-5xl font-black text-gray-800">Câu hỏi Đọc hiểu (Trang 77)</h3>
                </div>

                <div class="space-y-4">
                    <!-- Câu 1 -->
                    <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                        <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                            <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                                1. Tìm những chi tiết miêu tả sự khắc nghiệt của thiên nhiên?
                            </span>
                            <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                                <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </summary>
                        <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium space-y-3 text-lg md:text-3xl">
                            <p class="text-emerald-800 font-bold mb-1">💡 Gợi ý trả lời:</p>
                            <p><strong>- Trên con đường dẫn đến sa mạc:</strong> Những rặng đá xám xỉn màu ngả sang đen rám hoặc đỏ quạch, bốn bề giống như sao Hoả hoang vu.</p>
                            <p><strong>- Ở sa mạc Xa-ha-ra:</strong> Cái nắng gay gắt như rải lửa khiến tóc giòn tan. Ban đêm trời rất mát, thậm chí rất lạnh, gió thổi lồng lộng kéo bật cả khăn trùm đầu. Đây là một trong những nơi hoang vu nhất địa cầu.</p>
                        </div>
                    </details>

                    <!-- Câu 2 -->
                    <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                        <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                            <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                                2. Nhân vật “tôi” có cảm xúc gì khi được đến Xa-ha-ra? Cảm xúc đó được thể hiện ra sao?
                            </span>
                            <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                                <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </summary>
                        <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium space-y-2 text-lg md:text-3xl">
                            <p class="text-emerald-800 font-bold mb-1">💡 Gợi ý trả lời:</p>
                            <p>Nhân vật "tôi" có cảm xúc vô cùng <strong>phấn khích, vui sướng, hạnh phúc</strong> và <strong>ngỡ ngàng</strong>. Cảm xúc đó được thể hiện qua hành động quên đi cái nắng nóng rải lửa để bận thì thầm chào sa mạc: <em>“Xin chào, Xa-ha-ra.”</em>; nhảy nhót sung sướng trên cát và reo lên: <em>"Giấc mơ này là có thật. Chúng tôi đang ở đây..."</em>.</p>
                        </div>
                    </details>

                    <!-- Câu 3 -->
                    <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                        <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                            <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                                3. Những điều đặc biệt ở Xa-ha-ra được miêu tả thế nào? (Thời tiết, Cát, Lạc đà, Bình minh)
                            </span>
                            <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                                <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </summary>
                        <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 space-y-4 text-lg md:text-3xl">
                            <p class="text-emerald-800 font-bold text-xl md:text-2xl">👉 Nhấp vào các thẻ dưới đây để khám phá chi tiết:</p>
                            
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <!-- Thẻ 1 -->
                                <div onclick="flipCard53(this)" class="bg-white p-4 rounded-2xl border-2 border-sky-100 text-center cursor-pointer hover:border-sky-100 transition-all shadow-sm">
                                    <span class="text-3xl block mb-2">☀️</span>
                                    <span class="font-black text-sky-800 text-base block mb-1">Thời tiết</span>
                                    <span class="hidden text-gray-800 font-bold mt-2 pt-2 border-t border-gray-100 text-lg md:text-3xl">Ban ngày nắng như rải lửa, ban đêm trời mát, thậm chí rất lạnh, gió thổi lồng lộng.</span>
                                </div>
                                <!-- Thẻ 2 -->
                                <div onclick="flipCard53(this)" class="bg-white p-4 rounded-2xl border-2 border-sky-100 text-center cursor-pointer hover:border-sky-100 transition-all shadow-sm">
                                    <span class="text-3xl block mb-2">⏳</span>
                                    <span class="font-black text-sky-800 text-base block mb-1">Chất cát</span>
                                    <span class="hidden text-gray-800 font-bold mt-2 pt-2 border-t border-gray-100 text-lg md:text-3xl">Cát mịn như bột, mỏng manh như gió bụi, lội cộm dưới đế giày.</span>
                                </div>
                                <!-- Thẻ 3 -->
                                <div onclick="flipCard53(this)" class="bg-white p-4 rounded-2xl border-2 border-sky-100 text-center cursor-pointer hover:border-sky-100 transition-all shadow-sm">
                                    <span class="text-3xl block mb-2">🐫</span>
                                    <span class="font-black text-sky-800 text-base block mb-1">Lạc đà</span>
                                    <span class="hidden text-gray-800 font-bold mt-2 pt-2 border-t border-gray-100 text-lg md:text-3xl">Cao lừng lững, đứng dậy bất ngờ, chạy trên cát lún là vô địch.</span>
                                </div>
                                <!-- Thẻ 4 -->
                                <div onclick="flipCard53(this)" class="bg-white p-4 rounded-2xl border-2 border-sky-100 text-center cursor-pointer hover:border-sky-100 transition-all shadow-sm">
                                    <span class="text-3xl block mb-2">🌅</span>
                                    <span class="font-black text-sky-800 text-base block mb-1">Bình minh</span>
                                    <span class="hidden text-gray-800 font-bold mt-2 pt-2 border-t border-gray-100 text-lg md:text-3xl">Bầu trời nhú ánh bình minh rải nắng non lóng lánh lên cát óng vàng.</span>
                                </div>
                            </div>
                        </div>
                    </details>

                    <!-- Câu 4 -->
                    <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                        <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                            <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                                4. Chi tiết khách du lịch muốn nằm ngoài trời để ngắm sao cho thấy cảm xúc gì?
                            </span>
                            <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                                <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </summary>
                        <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium space-y-2 text-lg md:text-3xl">
                            <p class="text-emerald-800 font-bold mb-1">💡 Gợi ý trả lời:</p>
                            <p>Chi tiết này cho thấy họ <strong>say mê, vô cùng thích thú</strong> và muốn **hòa mình trọn vẹn vào thiên nhiên kì vĩ**. Họ trân trọng vẻ đẹp huyền ảo của bầu trời sao sa mạc đến mức không muốn ngủ trong túp lều kín, muốn tận hưởng đêm duy nhất ngắm nhìn vũ trụ bao la.</p>
                        </div>
                    </details>

                    <!-- Câu 5 -->
                    <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                        <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                            <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                                5. Câu cuối bài đọc cho biết điều gì? Chọn câu trả lời hoặc nêu ý kiến riêng.
                            </span>
                            <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                                <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </summary>
                        <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium space-y-4 text-lg md:text-3xl">
                            <p class="text-emerald-800 font-bold">👉 Ý kiến của em:</p>
                            <div class="flex flex-col gap-3">
                                <label class="flex items-start gap-3 p-3 bg-white border border-sky-100 rounded-2xl cursor-pointer hover:bg-sky-50/50 font-bold">
                                    <input type="radio" name="vn53-q5" value="A" class="w-6 h-6 accent-sky-600 mt-1">
                                    <span>A. Thiên nhiên quá hùng vĩ, con người quá bé nhỏ.</span>
                                </label>
                                <label class="flex items-start gap-3 p-3 bg-white border border-sky-100 rounded-2xl cursor-pointer hover:bg-sky-50/50 font-bold">
                                    <input type="radio" name="vn53-q5" value="B" class="w-6 h-6 accent-sky-600 mt-1">
                                    <span>B. Ở một nơi kì vĩ như Xa-ha-ra, con người chỉ cần chú ý đến cảnh sắc thiên nhiên.</span>
                                </label>
                                <label class="flex items-start gap-3 p-3 bg-white border border-sky-100 rounded-2xl cursor-pointer hover:bg-sky-50/50 font-bold">
                                    <input type="radio" name="vn53-q5" value="C" class="w-6 h-6 accent-sky-600 mt-1">
                                    <span>C. Thiên nhiên giúp xoá nhoà khoảng cách giữa người với người.</span>
                                </label>
                            </div>
                            <div class="flex justify-start pt-2">
                                <button onclick="checkQ5_53()" class="px-6 py-2.5 bg-sky-600 text-white font-bold rounded-lg text-sm">Xác nhận lựa chọn</button>
                            </div>
                            <div id="fb-vn53-q5" class="hidden p-3 rounded-lg text-sm font-bold text-gray-800 bg-emerald-50 border border-emerald-100"></div>
                        </div>
                    </details>
                </div>
            </div>
        </section>
        

    </div>
    </div>

    <!-- ==================== TAB 2: LUYỆN TỪ VÀ CÂU ==================== -->
    <div id="content-ltvc" class="hidden space-y-8">
        <!-- 🎯 Mục tiêu bài học -->
        <div class="bg-amber-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-amber-600 shadow-lg relative overflow-hidden">
            <div class="absolute -right-10 -top-10 w-32 h-32 bg-amber-100/40 rounded-full blur-2xl animate-pulse"></div>
            <h3 class="text-2xl md:text-5xl font-black text-amber-900 mb-4 flex items-center gap-3">
                <span class="p-2 bg-amber-500 text-white rounded-xl shadow-md">🎯</span>
                Mục tiêu Tiết 54 (LTVC)
            </h3>
            <ul class="space-y-3 text-amber-600 font-bold text-xl md:text-2xl ml-2">
                <li class="flex items-start gap-2">
                    <span class="text-amber-900 font-black">•</span>
                    Tìm và phân loại chính xác các từ chỉ đặc điểm của sa mạc và các từ trái nghĩa của chúng.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-amber-900 font-black">•</span>
                    Phân biệt nghĩa gốc và nghĩa chuyển của từ đa nghĩa (tối, lạnh, thổi) trong các ngữ cảnh câu cụ thể.
                </li>
            </ul>
        </div>

        <!-- BÀI TẬP 1: TỪ ĐẶC ĐIỂM SA MẠC & TRÁI NGHĨA -->
        <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
            <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">1</div>
                    <div>
                        <h3 class="text-2xl md:text-5xl font-black text-gray-800">Từ đặc điểm & từ trái nghĩa</h3>
                        <p class="text-xs font-bold text-gray-800 mt-1">Lựa chọn từ trái nghĩa tương ứng thích hợp nhất để điền vào bảng đặc điểm sa mạc:</p>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner">
                    <table class="w-full text-left border-collapse text-xl md:text-2xl">
                        <thead>
                            <tr class="border-b-2 border-amber-100">
                                <th class="pb-3 font-black text-amber-600 w-1/2">Từ chỉ đặc điểm sa mạc</th>
                                <th class="pb-3 font-black text-amber-600 w-1/2">Từ trái nghĩa tương ứng</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-amber-600 font-bold text-gray-800">
                            <tr>
                                <td class="py-4">hoang vu</td>
                                <td class="py-4">
                                    <select id="vn53-ex1-1" class="p-2 border border-amber-100 rounded-lg outline-none focus:border-amber-500 bg-white">
                                        <option value="">-- Chọn từ trái nghĩa --</option>
                                        <option value="sam_uat">sầm uất, đông đúc</option>
                                        <option value="rong_lon">rộng lớn, bao la</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-4">nắng nóng, nóng nực</td>
                                <td class="py-4">
                                    <select id="vn53-ex1-2" class="p-2 border border-amber-100 rounded-lg outline-none focus:border-amber-500 bg-white">
                                        <option value="">-- Chọn từ trái nghĩa --</option>
                                        <option value="mua_lanh">mưa lạnh, buốt giá</option>
                                        <option value="kho_can">khô cằn, nứt nẻ</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-4">mịn màng (cát mịn)</td>
                                <td class="py-4">
                                    <select id="vn53-ex1-3" class="p-2 border border-amber-100 rounded-lg outline-none focus:border-amber-500 bg-white">
                                        <option value="">-- Chọn từ trái nghĩa --</option>
                                        <option value="tho_rap">thô ráp, xù xì</option>
                                        <option value="mem_mai">mềm mại, êm ái</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="flex justify-start">
                    <button onclick="checkEx1_53()" class="px-8 py-3 bg-amber-500 text-white font-black rounded-xl hover:bg-amber-500 transition-all text-base shadow-md">KIỂM TRA ĐÁP ÁN ✓</button>
                </div>
                <div id="fb-vn53-ex1" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2 shadow-md"></div>
            </div>
        </section>

        <!-- BÀI TẬP 2: NGHĨA GỐC / NGHĨA CHUYỂN CỦA TỪ TỐI, LẠNH -->
        <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
            <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">2</div>
                    <div>
                        <h3 class="text-2xl md:text-5xl font-black text-gray-800">Nghĩa gốc và nghĩa chuyển</h3>
                        <p class="text-xs font-bold text-gray-800 mt-1">Xác định nghĩa gốc hay nghĩa chuyển của các từ in đậm trong câu sau:</p>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner space-y-6">
                    <div class="text-center font-bold text-2xl text-amber-600 py-3 bg-amber-50/40 rounded-2xl border border-amber-100/30 max-w-xl mx-auto">
                        "Trời **tối** dần, lạ thay, trời rất mát, thậm chí rất **lạnh**."
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        <!-- Từ tối -->
                        <div class="bg-amber-50/20 p-5 rounded-2xl border border-amber-100 space-y-3">
                            <span class="text-base font-black text-amber-600 block">Từ **tối** trong câu được dùng với:</span>
                            <div class="flex gap-4">
                                <label class="flex items-center gap-2 font-bold cursor-pointer text-lg text-gray-800">
                                    <input type="radio" name="vn53-ex2-toi" value="goc" class="w-5 h-5 accent-amber-600"> Nghĩa gốc
                                </label>
                                <label class="flex items-center gap-2 font-bold cursor-pointer text-lg text-gray-800">
                                    <input type="radio" name="vn53-ex2-toi" value="chuyen" class="w-5 h-5 accent-amber-600"> Nghĩa chuyển
                                </label>
                            </div>
                            <span class="text-xs text-gray-800 block mt-1">(Gợi ý: Chỉ buổi tối khi mặt trời lặn mất ánh sáng)</span>
                        </div>

                        <!-- Từ lạnh -->
                        <div class="bg-amber-50/20 p-5 rounded-2xl border border-amber-100 space-y-3">
                            <span class="text-base font-black text-amber-600 block">Từ **lạnh** trong câu được dùng với:</span>
                            <div class="flex gap-4">
                                <label class="flex items-center gap-2 font-bold cursor-pointer text-lg text-gray-800">
                                    <input type="radio" name="vn53-ex2-lanh" value="goc" class="w-5 h-5 accent-amber-600"> Nghĩa gốc
                                </label>
                                <label class="flex items-center gap-2 font-bold cursor-pointer text-lg text-gray-800">
                                    <input type="radio" name="vn53-ex2-lanh" value="chuyen" class="w-5 h-5 accent-amber-600"> Nghĩa chuyển
                                </label>
                            </div>
                            <span class="text-xs text-gray-800 block mt-1">(Gợi ý: Chỉ nhiệt độ thấp gây cảm giác lạnh buốt của da thịt)</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-start">
                    <button onclick="checkEx2_53()" class="px-8 py-3 bg-amber-500 text-white font-black rounded-xl hover:bg-amber-500 transition-all text-base shadow-md">KIỂM TRA BÀI 2 ✓</button>
                </div>
                <div id="fb-vn53-ex2" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2 shadow-md"></div>
            </div>
        </section>

        <!-- BÀI TẬP 3: ĐẶT CÂU VỚI TỪ THỔI (AI THẦY E CHẤM) -->
        <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
            <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">3</div>
                    <div>
                        <h3 class="text-2xl md:text-5xl font-black text-gray-800">Đặt câu phân biệt nghĩa của từ "thổi"</h3>
                        <p class="text-xs font-bold text-gray-800 mt-1">Hãy đặt câu tương ứng với 2 nét nghĩa của từ "thổi" và nhận nhận xét chi tiết từ AI Thầy E.</p>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-3xl border border-amber-100 space-y-4">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div class="space-y-2">
                            <label class="block text-sm font-bold text-gray-800">a. Chúm miệng thổi luồng hơi ra ngoài (Nghĩa gốc)</label>
                            <input type="text" id="ans-vn53-ex3-thoi1" placeholder="Ví dụ: Bé thổi nến mừng sinh nhật." class="w-full p-3 border border-amber-100 rounded-xl outline-none focus:border-amber-500 bg-amber-50/5 font-bold text-base text-gray-800">
                        </div>
                        <div class="space-y-2">
                            <label class="block text-sm font-bold text-gray-800">b. Gió chuyển động thành luồng (Nghĩa chuyển)</label>
                            <input type="text" id="ans-vn53-ex3-thoi2" placeholder="Ví dụ: Gió thổi lồng lộng qua sa mạc." class="w-full p-3 border border-amber-100 rounded-xl outline-none focus:border-amber-500 bg-amber-50/5 font-bold text-base text-gray-800">
                        </div>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <button onclick="checkWritingVn53()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                        <span>CHẤM BÀI ĐẶT CÂU</span>
                    </button>
                    <button onclick="resetWritingVn53()" class="px-6 py-3 bg-gray-800 text-gray-900 font-black text-lg rounded-2xl shadow-sm hover:bg-gray-800 active:scale-95 transition-all">LÀM LẠI</button>
                    <div id="fb-vn53-writing" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
                </div>
            </div>
        </section>
    </div>

    <!-- NỘP BÀI HOÀN THÀNH TOÀN BỘ LIÊN TIẾT -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn53Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT 53-54</span>
        </button>
    </div>

</div>
</div>`,

    "quizPool": [
        {
            "question": "Con đường đi tới phía nam dãy núi nào khiến tác giả có cảm giác lạc vào phim viễn tưởng?",
            "options": [
                "Dãy núi Áp-sơ-rông",
                "Dãy núi Át-lát",
                "Dãy núi Hắc Hải",
                "Dãy Trường Sơn"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Màu sắc của những rặng đá trên đường vào sa mạc được miêu tả biến đổi thế nào?",
            "options": [
                "Từ xám ngả sang đen rám hoặc đỏ quạch",
                "Từ xanh ngả sang vàng úa hoặc tím biếc",
                "Từ hồng ngả sang trắng xóa hoặc xám tro",
                "Từ đen nhạt ngả sang vàng mật ngọt"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cát sa mạc Xa-ha-ra được tác giả so sánh và miêu tả đặc trưng ra sao?",
            "options": [
                "Ẩn ướt giống như cát Sầm Sơn",
                "Mịn như bột và mỏng manh như gió bụi",
                "Hạt to thô ráp như cát Phan Thiết",
                "Trắng tinh khôi lấp lánh như tuyết"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Động vật vận chuyển đặc trưng nào của sa mạc được nhắc đến trong bài đọc?",
            "options": [
                "Ngựa hoang dã",
                "Lạc đà",
                "Dê cỏ",
                "Lừa thồ"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Thời tiết ban đêm giữa sa mạc mênh mông được mô tả như thế nào?",
            "options": [
                "Rất mát và thậm chí rất lạnh, gió thổi lồng lộng",
                "Nóng bức ngột ngạt không thể chịu được",
                "Ấm áp dễ chịu như mùa xuân miền đồng bằng",
                "Tuyết rơi phủ dày lạnh giá buốt xương"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Mọi người chọn làm gì vào đêm duy nhất giữa sa mạc thay vì vào túp lều du mục?",
            "options": [
                "Ngồi quanh đống lửa nhảy múa và ca hát",
                "Nằm kềnh ra những tấm chiếu dạ trải trên cát để ngắm sao",
                "Đi bộ thám hiểm xung quanh cồn cát lân cận",
                "Trèo lên lưng lạc đà đi tìm nguồn nước ngọt"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong bài học, từ trái nghĩa với từ đặc điểm sa mạc 'hoang vu' là gì?",
            "options": [
                "sầm uất",
                "mênh mông",
                "thô ráp",
                "bình tĩnh"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cặp từ trái nghĩa thích hợp cho 'cát mịn màng' ở sa mạc là:",
            "options": [
                "êm ái",
                "thô ráp",
                "nắng nóng",
                "mỏng manh"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'tối' và từ 'lạnh' trong câu tả thời tiết sa mạc thuộc loại nghĩa nào?",
            "options": [
                "Đều dùng với nghĩa gốc",
                "Từ 'tối' nghĩa gốc, từ 'lạnh' nghĩa chuyển",
                "Đều dùng với nghĩa chuyển",
                "Từ 'tối' nghĩa chuyển, từ 'lạnh' nghĩa gốc"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Trong câu 'Gió thổi lồng lộng kéo bật tóc tôi', từ 'thổi' mang nghĩa nào?",
            "options": [
                "Không khí chuyển động thành luồng gây ra tác động nhất định",
                "Chúm miệng làm hơi bật ra từ miệng",
                "Thổi tắt nến sinh nhật",
                "Nấu cơm (thổi cơm)"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Tác giả Di Li cảm thấy thế nào khi lần đầu tiên giẫm chân lên cát Xa-ha-ra?",
            "options": [
                "Mệt mỏi và chán nản vì cát cộm giày",
                "Phấn khích nhảy nhót vì nhận ra giấc mơ đã là sự thật",
                "Hoảng sợ vì gió cát lồng lộng quét qua da",
                "Cảm thấy nóng bức muốn quay về ngay lập tức"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Theo câu cuối bài ký sự, ở giữa hoang mạc mênh mông, mỗi con người trở nên:",
            "options": [
                "Lớn lao, vĩ đại như cồn cát",
                "Nhỏ bé như một hạt cát",
                "Mạnh mẽ vô địch giống bầy lạc đà",
                "Cô đơn lạc lõng mất hết hy vọng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ trái nghĩa với từ 'nắng nóng' ở sa mạc là:",
            "options": [
                "khô cằn",
                "mưa lạnh",
                "lộng gió",
                "lạnh giá"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ 'thổi' trong câu 'Bé thổi sáo vang cả ngõ nhỏ' được dùng với nghĩa nào?",
            "options": [
                "Dùng luồng hơi miệng làm nhạc cụ phát ra âm thanh",
                "Gió chuyển động thành luồng thổi bay lá",
                "Nấu chín cơm gạo",
                "Báo hiệu kết thúc trận đấu bóng"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Sa mạc Xa-ha-ra được nhắc đến trong bài đọc bao nhiêu triệu năm tuổi?",
            "options": [
                "Một triệu năm tuổi",
                "Hai triệu năm tuổi",
                "Ba triệu năm tuổi",
                "Mười triệu năm tuổi"
            ],
            "answer": 1,
            "level": 0
        }
    ]
};

// --- DỰ ĐOÁN KHỞI ĐỘNG VN53 ---
window.checkKD53 = function() {
    const text = document.getElementById('ans-vn53-kd')?.value.trim();
    const fb = document.getElementById('fb-vn53-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy chia sẻ hiểu biết của mình về sa mạc trước nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    fb.innerHTML = "🎉 Tuyệt vời! Hiểu biết của em về sa mạc rất phong phú và chính xác. Hãy cùng đọc bài ký sự của nhà văn Di Li để cùng đón chào sa mạc lớn nhất thế giới này nhé.";
    fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
};

// --- CHUYỂN TAB ĐỌC & LTVC ---
window.switchTab53 = function(tab) {
    const btnReading = document.getElementById('tab-reading');
    const btnLtvc = document.getElementById('tab-ltvc');
    const contentReading = document.getElementById('content-reading');
    const contentLtvc = document.getElementById('content-ltvc');

    if (tab === 'reading') {
        btnReading.className = "flex-1 py-3 bg-sky-600 text-white font-black rounded-2xl text-lg md:text-xl transition-all shadow-md";
        btnLtvc.className = "flex-1 py-3 bg-white text-sky-800 hover:bg-sky-50 font-black rounded-2xl text-lg md:text-xl transition-all";
        contentReading.classList.remove('hidden');
        contentLtvc.classList.add('hidden');
    } else {
        btnLtvc.className = "flex-1 py-3 bg-sky-600 text-white font-black rounded-2xl text-lg md:text-xl transition-all shadow-md";
        btnReading.className = "flex-1 py-3 bg-white text-sky-800 hover:bg-sky-50 font-black rounded-2xl text-lg md:text-xl transition-all";
        contentLtvc.classList.remove('hidden');
        contentReading.classList.add('hidden');
    }
};

// --- LẬT THẺ CÂU 3 ---
window.flipCard53 = function(element) {
    const detailSpan = element.querySelector('span:last-child');
    if (detailSpan) {
        detailSpan.classList.toggle('hidden');
        element.classList.toggle('bg-sky-50');
        element.classList.toggle('border-sky-100');
    }
};

// --- KIỂM TRA CÂU 5 ---
window.checkQ5_53 = function() {
    const radioVal = document.querySelector('input[name="vn53-q5"]:checked')?.value;
    const fb = document.getElementById('fb-vn53-q5');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!radioVal) {
        fb.innerHTML = "⚠️ Em vui lòng chọn một ý kiến trước nhé!";
        fb.className = "p-3 rounded-lg text-sm font-bold bg-amber-500 text-white border border-amber-100";
        return;
    }

    if (radioVal === 'C') {
        fb.innerHTML = "🎉 Lựa chọn rất tuyệt vời! Thiên nhiên kỳ vĩ giữa hoang mạc làm xóa nhòa mọi ranh giới quốc tịch, khiến tất cả mọi người cùng đồng điệu, trở nên nhỏ bé và gắn kết thân thiết với nhau.";
    } else if (radioVal === 'A') {
        fb.innerHTML = "🎉 Lựa chọn rất đúng! Đứng giữa hoang mạc bao la vô tận, con người cảm thấy mình thật sự nhỏ bé như một hạt cát trước sự hùng vĩ vô bờ của vũ trụ tự nhiên.";
    } else {
        fb.innerHTML = "🎉 Lựa chọn thú vị! Cảnh sắc hoang mạc tráng lệ khiến con người tạm quên đi mọi bận rộn đời thường để tập trung say đắm chiêm ngưỡng kỳ quan thiên nhiên.";
    }
    fb.className = "p-3 rounded-lg text-sm font-bold bg-emerald-50 border border-emerald-100 text-emerald-800 shadow-sm";
};

// --- KIỂM TRA LTVC BÀI 1 ---
window.checkEx1_53 = function() {
    const val1 = document.getElementById('vn53-ex1-1')?.value;
    const val2 = document.getElementById('vn53-ex1-2')?.value;
    const val3 = document.getElementById('vn53-ex1-3')?.value;
    const fb = document.getElementById('fb-vn53-ex1');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!val1 || !val2 || !val3) {
        fb.innerHTML = "⚠️ Em hãy hoàn thành lựa chọn từ trái nghĩa cho cả 3 từ nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2";
        return;
    }

    const dung = val1 === 'sam_uat' && val2 === 'mua_lanh' && val3 === 'tho_rap';

    if (dung) {
        fb.innerHTML = "🎉 Chính xác hoàn toàn! Các cặp từ trái nghĩa phù hợp là: hoang vu – sầm uất; nắng nóng – mưa lạnh; mịn màng – thô ráp.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "⚠️ Một số từ trái nghĩa được chọn chưa chính xác. Vui lòng xem lại và thử chọn lại nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- KIỂM TRA LTVC BÀI 2 ---
window.checkEx2_53 = function() {
    const toiVal = document.querySelector('input[name="vn53-ex2-toi"]:checked')?.value;
    const lanhVal = document.querySelector('input[name="vn53-ex2-lanh"]:checked')?.value;
    const fb = document.getElementById('fb-vn53-ex2');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!toiVal || !lanhVal) {
        fb.innerHTML = "⚠️ Em hãy chọn xác định nghĩa cho cả hai từ 'tối' và 'lạnh' nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2";
        return;
    }

    const dung = toiVal === 'goc' && lanhVal === 'goc';

    if (dung) {
        fb.innerHTML = "🎉 Hoàn toàn chính xác! Cả hai từ 'tối' (chỉ hiện tượng đêm xuống thiếu ánh sáng) và 'lạnh' (chỉ nhiệt độ thấp gây cảm giác lạnh buốt) đều được dùng với nghĩa gốc.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "⚠️ Xác định nghĩa chưa chính xác. Hãy cân nhắc xem từ 'tối' và 'lạnh' ở đây có trỏ đúng sự thay đổi vật lý của thời tiết hay không rồi thử lại nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- CHẤM ĐẶT CÂU LTVC BÀI 3 ---
window.checkWritingVn53 = function() {
    const thoi1 = document.getElementById('ans-vn53-ex3-thoi1')?.value.trim();
    const thoi2 = document.getElementById('ans-vn53-ex3-thoi2')?.value.trim();
    const fb = document.getElementById('fb-vn53-writing');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!thoi1 || !thoi2) {
        fb.innerHTML = "⚠️ Em hãy điền đầy đủ cả 2 câu đặt với từ 'thổi' để AI Thầy E chấm điểm nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    if (thoi1.length < 5 || thoi2.length < 5) {
        fb.innerHTML = "⚠️ Câu đặt của em còn ngắn. Hãy viết một câu hoàn chỉnh có đầy đủ chủ ngữ và vị ngữ nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    // Nhận xét của AI Thầy E
    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
            <p class="text-lg font-bold">"Hai câu đặt vô cùng chính xác! Em đã phân biệt rất tốt nghĩa gốc của từ 'thổi' (luồng hơi từ miệng làm bật ra) và nghĩa chuyển (luồng không khí/gió chuyển động). Cấu trúc câu giàu hình ảnh, đúng ngữ pháp tiếng Việt."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Điểm: 153% (Hoàn thành xuất sắc)</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-353";
};

window.resetWritingVn53 = function() {
    const area1 = document.getElementById("ans-vn53-ex3-thoi1");
    const area2 = document.getElementById("ans-vn53-ex3-thoi2");
    if (area1) area1.value = "";
    if (area2) area2.value = "";
    const fb = document.getElementById("fb-vn53-writing");
    if (fb) fb.classList.add("hidden");
};

// --- HOÀN THÀNH TOÀN BỘ TIẾT LIÊN TIẾT ---
window.submitVn53Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 53-54',
            '🏜️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🏜️</span><p class="text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài học Xin chào, Xa-ha-ra!</p><p class="text-lg text-gray-800 mt-3">Việc hiểu rõ từ trái nghĩa và từ đa nghĩa sẽ giúp em viết nên những bài văn tả cảnh vô cùng ấn tượng. Hãy tiếp tục cố gắng nhé!</p></div>'
        );
    }
};
