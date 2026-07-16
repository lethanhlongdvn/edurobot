export const lesson25 = {
    "topic": "Tiếng Việt 5",
    "week": "4",
    "period": "25",
    "title": "ĐỌC: HÀNH TINH KÌ LẠ",
    "desc": "Bài học giúp học sinh rèn luyện kỹ năng đọc hiểu văn bản 'Hành tinh kì lạ', nhận biết sự khác biệt giữa Trái Đất và hành tinh lạ, đồng thời thực hành về đại từ xưng hô và đại từ thay thế.",
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
                Đọc trôi chảy, diễn cảm câu chuyện "Hành tinh kì lạ", biết nhấn giọng ở những từ ngữ gợi tả sự khác biệt và công nghệ của hành tinh mới.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Hiểu được sự độc đáo về con người, thời gian và công nghệ tại hành tinh lạ, từ đó cảm nhận được tình yêu quê hương, Trái Đất của nhân vật chính.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Luyện tập tìm từ ngữ chỉ sự vật trong vũ trụ; tìm và phân loại đại từ xưng hô và đại từ thay thế.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG: GIẢI MÃ TỪ VỰNG VŨ TRỤ -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động: Giải mã từ vựng vũ trụ</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy sắp xếp lại các chữ cái xáo trộn dưới đây để tạo thành từ chỉ sự vật trong vũ trụ:</p>
        
        <div class="space-y-6 max-w-xl mx-auto bg-sky-50/30 p-6 rounded-3xl border border-sky-100">
            <div class="text-center">
                <span class="text-4xl md:text-5xl font-black tracking-widest text-sky-800 block mb-2" id="scrambled-word">H N T À N H I L</span>
                <span class="text-xs text-sky-900 font-black uppercase">Gợi ý: Vật thể khổng lồ quay quanh ngôi sao (ví dụ: Trái Đất)</span>
            </div>
            
            <div class="flex gap-3">
                <input type="text" id="ans-vn25-kd" placeholder="Nhập đáp án của em..." class="w-full p-4 border-2 border-sky-100 rounded-2xl outline-none focus:border-sky-500 font-bold text-center text-xl md:text-2xl bg-white shadow-sm" />
                <button onclick="checkKD25()" class="px-8 py-3 bg-sky-600 text-white font-black rounded-2xl hover:bg-sky-600 transition-all text-base shadow-md">KIỂM TRA ✓</button>
            </div>
            <div id="fb-vn25-kd" class="hidden p-4 rounded-2xl text-base font-bold text-center"></div>
        </div>
    </div>

    <!-- 📖 BÀI ĐỌC: HÀNH TINH KÌ LẠ -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>

        <div class="relative z-10 space-y-6">
            <div class="flex justify-between items-center border-b border-sky-100 pb-4">
                <span class="text-sky-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                    <span>📖</span> Hành tinh kì lạ
                </span>
                <button onclick="playSegmentAudio('assets/audio/tiengviet/25/hanh_tinh_ki_la.mp3')" class="p-3 bg-sky-600 hover:bg-sky-600 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc diễn cảm">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                </button>
            </div>

            <!-- Cột bài đọc dạng 1 cột toàn màn hình -->
            <div class="space-y-8">
                <div class="w-full serif-font text-gray-900 leading-relaxed text-justify space-y-5 bg-sky-50/10 p-6 md:p-8 rounded-3xl border border-sky-100/50 text-xl md:text-4xl">
                    <!-- Minh họa SGK (Góc trên bên phải, bấm vào phóng to) -->
                    <div onclick="window.showMathFeedback('Hành tinh kì lạ', '🪐', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-sky-50 to-emerald-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/25-26/25-26.png&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Hành tinh kì lạ&quot;&gt;&lt;p class=&quot;text-2xl md:text-3xl font-bold text-sky-800 mt-4&quot;&gt;Con tàu thám hiểm không gian hạ cánh xuống hành tinh kì lạ đầy những điều máy móc hiện đại.&lt;/p&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-gradient-to-br from-sky-50 to-emerald-50 rounded-[32px] border-4 border-white shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group">
                        <img src="assets/images/tiengviet_5_1/25-26/25-26.png" class="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500" alt="Hành tinh kì lạ">
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Bấm để phóng to 🔍</div>
                    </div>

                    <p class="indent-8 font-medium">Khi tàu vượt qua hành lang lửa trên hành trình thám hiểm không gian, phía trước tàu bỗng xuất hiện những tia sáng nhấp nháy. Các kim đồng hồ ở buồng lái rối loạn, rồi không nhúc nhích nữa. Tàu buộc phải đáp xuống hành tinh gần nhất.</p>
                    <p class="indent-8 font-medium">Cửa tàu hé mở, hai người ăn mặc như sĩ quan bước vào. Họ kiểm tra chúng tôi và vật dụng mang theo. Chăn-bai huých tôi, nói nhỏ:</p>
                    <p class="indent-4 font-semibold text-sky-800">– Người máy.</p>
                    <p class="indent-8 font-medium">Tôi giật mình nhưng chưa nhận ra họ có gì khác thường. Khi họ đưa chúng tôi vào thành phố, tôi quan sát những người xung quanh mới nhận ra sự khác biệt. Da của họ có nhiều màu: hồng, ánh xanh, vàng nghệ hoặc tím,... Vài người kéo cao tay áo, để lộ những cánh tay bằng thép.</p>
                    <p class="indent-4 font-semibold text-sky-800">– Chắc họ chỉ quen "dời non, lắp biển". – Chăn-bai cười.</p>
                    <p class="indent-8 font-medium">Cậu chăm chú nghe máy dịch tự động, lẩm bẩm:</p>
                    <p class="indent-4 font-semibold text-sky-800">– Mỗi ngày mười giờ, một tuần mười ngày, mỗi tháng mười tuần, một năm mười tháng. Thế là dài hơn hay ngắn hơn ở Trái Đất nhỉ?</p>
                    <p class="indent-8 font-medium">Tôi thì mải mê với máy móc dọc đường đi. Tất cả các việc đều do máy làm, từ xây dựng đến cắt tóc, tẩm quất,... Tôi thích nhất những chiếc ô tô vừa chạy vừa bay. Chúng hoạt động theo yêu cầu bằng giọng nói của chủ nhân. Tất nhiên, tôi chẳng ra lệnh được cho xe nào vì không cái nào thuộc sở hữu của tôi.</p>
                    <p class="indent-8 font-medium">Cái gì cũng hấp dẫn cho tới khi chúng tôi thấy quá nóng bức. Ở Trái Đất, 30 độ chưa nóng lắm, nhưng ở đây oi bức lạ thường mặc dù có rất nhiều cây. Tôi lại gần một cây đại thụ. Thân to đồ sộ, gốc rễ xù xì, cành lá xanh tươi, nhưng càng lại gần càng nóng ran. Tôi sờ vào thân cây và chợt phát hiện ra đây cũng chỉ là cái máy mang hình cây. Chao ôi, tôi bỗng nhớ Trái Đất của tôi làm sao! Tôi thèm bóng cây râm mát với tiếng chim hót ríu ran làm sao! Bao giờ tôi mới được trở về?</p>
                    <p class="text-right font-bold text-gray-800 mt-4 text-xl md:text-2xl">(Theo Viết Linh)</p>
                </div>

                <!-- Các khối thông tin bổ trợ đặt bên dưới dạng xếp chồng dọc để hiển thị rộng rãi hơn -->
                <div class="space-y-6">
                    <!-- Giải nghĩa từ -->
                    <div class="bg-amber-50/70 p-6 md:p-8 rounded-[28px] border-2 border-dashed border-amber-200">
                        <p class="text-xs font-black text-amber-600 uppercase tracking-widest mb-3 flex items-center gap-1">
                            <span>📝</span> Chú giải từ ngữ
                        </p>
                        <ul class="space-y-4 text-xl md:text-2xl text-amber-600 font-semibold leading-relaxed">
                            <li>• <strong>Sĩ quan</strong>: quân nhân có quân hàm cấp úy trở lên.</li>
                            <li>• <strong>Người máy</strong>: thiết bị máy móc tự động có hình dáng và một số khả năng giống con người.</li>
                            <li>• <strong>Dời non, lắp biển</strong>: ý nói làm những công việc to lớn, khó khăn, đòi hỏi sức mạnh phi thường.</li>
                        </ul>
                    </div>

                    <!-- Trực quan so sánh Trái Đất vs Hành tinh lạ bằng bảng -->
                    <div class="bg-emerald-50/60 p-6 md:p-8 rounded-[28px] border border-emerald-100 space-y-4">
                        <h4 class="text-2xl md:text-5xl font-black text-emerald-800 uppercase mb-4 flex items-center gap-2">
                            <span>💡</span> Khác biệt nổi bật
                        </h4>
                        <div class="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm bg-white">
                            <table class="w-full text-left border-collapse text-xl md:text-2xl">
                                <thead>
                                    <tr class="bg-emerald-600 text-white font-black">
                                        <th class="p-4 border-b border-emerald-700">Đặc điểm</th>
                                        <th class="p-4 border-b border-emerald-700 text-center">🌍 TRÁI ĐẤT</th>
                                        <th class="p-4 border-b border-emerald-700 text-center">🤖 HÀNH TINH LẠ</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-800 font-bold">
                                    <tr class="hover:bg-emerald-50/30 transition-colors">
                                        <td class="p-4 border-b border-emerald-100 bg-emerald-50/20 text-emerald-900 font-black">Da người / Con người</td>
                                        <td class="p-4 border-b border-emerald-100 text-center">Tự nhiên</td>
                                        <td class="p-4 border-b border-emerald-100 text-center">Da nhiều màu, tay thép</td>
                                    </tr>
                                    <tr class="hover:bg-emerald-50/30 transition-colors">
                                        <td class="p-4 border-b border-emerald-100 bg-emerald-50/20 text-emerald-900 font-black">Thời gian</td>
                                        <td class="p-4 border-b border-emerald-100 text-center">24 giờ/ngày</td>
                                        <td class="p-4 border-b border-emerald-100 text-center">Hệ đếm 10 (1 ngày 10 giờ)</td>
                                    </tr>
                                    <tr class="hover:bg-emerald-50/30 transition-colors">
                                        <td class="p-4 bg-emerald-50/20 text-emerald-900 font-black">Cây cối</td>
                                        <td class="p-4 text-center">Râm mát tự nhiên</td>
                                        <td class="p-4 text-center">Cây giả bằng máy tỏa nhiệt</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 💡 Nội dung chính bài học -->
    <div class="p-8 rounded-[36px] bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-xl relative overflow-hidden mt-8">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <h4 class="text-xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
            <span>💡</span> Nội dung chính bài học
        </h4>
        <div class="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p class="text-xl md:text-4xl font-bold leading-relaxed text-center italic">
                "Câu chuyện kể về chuyến thám hiểm bất đắc dĩ của hai nhà du hành vũ trụ đến một hành tinh vô cùng hiện đại, nơi mọi công việc đều có máy móc đảm nhiệm. Tuy nhiên, sự oi bức khó chịu từ những cây máy đã khơi dậy nỗi nhớ khôn nguôi về bầu không khí mát râm, trong lành cùng tiếng chim hót ríu ran của Trái Đất thân yêu, khẳng định tình yêu quê hương, đất nước và thiên nhiên sâu sắc."
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- PHẦN 1: TRẢ LỜI CÂU HỎI ĐỌC HIỂU -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">❓</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Câu hỏi Đọc hiểu (Trang 42)</h3>
            </div>

            <div class="space-y-4">
                <!-- Câu 1 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            1. Tìm chi tiết cho biết lí do con tàu phải hạ cánh xuống hành tinh gần nhất.
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-1">💡 Gợi ý trả lời:</p>
                        <p>Khi vượt qua hành lang lửa, phía trước tàu xuất hiện <strong>những tia sáng nhấp nháy</strong>, các <strong>kim đồng hồ ở buồng lái rối loạn rồi không nhúc nhích nữa</strong>. Do đó, tàu buộc phải đáp xuống hành tinh gần nhất.</p>
                    </div>
                </details>

                <!-- Câu 2 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            2. Hai nhà du hành phát hiện ra những điều gì đặc biệt ở hành tinh đó?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-1">💡 Gợi ý trả lời:</p>
                        <ul class="list-disc list-inside space-y-2">
                            <li><strong>Con người</strong>: Là người máy, da có nhiều màu (hồng, xanh, vàng nghệ, tím), cánh tay bằng thép.</li>
                            <li><strong>Thời gian</strong>: Hệ thời gian đếm 10 (mỗi ngày mười giờ, mỗi tuần mười ngày, mỗi tháng mười tuần, một năm mười tháng).</li>
                            <li><strong>Công nghệ</strong>: Mọi việc do máy móc làm (xây dựng, cắt tóc, tẩm quất), ô tô vừa chạy vừa bay điều khiển bằng giọng nói.</li>
                            <li><strong>Thực vật</strong>: Cây cối thực chất là máy móc mang hình cây và tỏa ra nhiệt độ nóng ran, oi bức.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 3 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            3. Vì sao nhân vật "tôi" cảm thấy nhớ Trái Đất?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-1">💡 Gợi ý trả lời:</p>
                        <p>Nhân vật "tôi" cảm thấy nhớ Trái Đất vì hành tinh này quá nóng nực, oi bức và mọi thứ đều nhân tạo. "Tôi" khao khát có được <strong>bóng cây râm mát tự nhiên</strong> và được lắng nghe <strong>tiếng chim hót ríu ran</strong> quen thuộc của Trái Đất.</p>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- PHẦN 2: THỰC HÀNH TỰ LUẬN (CÂU 4 & 5) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-8">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">✏️</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Thực hành Viết sáng tạo</h3>
            </div>

            <!-- Bài tập 1: Đóng vai người máy (Câu 4) -->
            <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner space-y-4">
                <h4 class="text-xl md:text-2xl font-bold text-gray-800 flex items-start gap-3">
                    <span class="bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-base mt-0.5 shadow-sm">4</span>
                    Đóng vai một người máy trên hành tinh lạ, giới thiệu về hành tinh đó.
                </h4>
                <p class="text-sm font-bold text-gray-800 italic">Gợi ý: "Các bạn nhìn tôi có lạ không? Để tôi nói cho các bạn nghe về chúng tôi và nơi chúng tôi sống nhé!"...</p>
                <textarea id="ans-vn25-writing-q4" rows="4" placeholder="Nhập bài viết đóng vai của em..." class="w-full p-4 md:p-6 text-xl md:text-2xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-amber-50/10 font-medium leading-relaxed"></textarea>
                <div class="flex justify-start gap-3">
                    <button onclick="checkWritingQ4()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                        <span>CHẤM BÀI Q4</span>
                    </button>
                    <div id="fb-vn25-q4" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
                </div>
            </div>

            <!-- Bài tập 2: Kể tiếp kết thúc (Câu 5) -->
            <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner space-y-4">
                <h4 class="text-xl md:text-2xl font-bold text-gray-800 flex items-start gap-3">
                    <span class="bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-base mt-0.5 shadow-sm">5</span>
                    Kể tiếp phần kết thúc cho câu chuyện (sử dụng các từ nối gợi ý: Thế rồi..., Bỗng nhiên..., Cuối cùng...).
                </h4>
                <textarea id="ans-vn25-writing-q5" rows="4" placeholder="Nhập đoạn kết tiếp của em..." class="w-full p-4 md:p-6 text-xl md:text-2xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-amber-50/10 font-medium leading-relaxed"></textarea>
                <div class="flex justify-start gap-3">
                    <button onclick="checkWritingQ5()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                        <span>CHẤM BÀI Q5</span>
                    </button>
                    <div id="fb-vn25-q5" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- PHẦN 3: LUYỆN TỪ VÀ CÂU (TRANG 43) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
        <div class="p-6 md:p-8 bg-emerald-50/30 rounded-[32px] space-y-8">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🔎</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Luyện từ và câu: Luyện tập về Đại từ</h3>
            </div>

            <!-- Bài tập 1: Từ ngữ vũ trụ -->
            <div class="bg-white p-6 rounded-3xl border border-emerald-100 shadow-inner space-y-4">
                <h4 class="text-xl md:text-2xl font-bold text-gray-800 flex items-start gap-3">
                    <span class="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-base mt-0.5 shadow-sm">1</span>
                    Chọn các từ ngữ chỉ sự vật trong vũ trụ (Nhấn để chọn):
                </h4>
                <div class="flex flex-wrap gap-3" id="vocab-cards">
                    <button onclick="toggleVocabCard(this, true)" class="px-5 py-3 border-2 border-gray-100 bg-gray-50 rounded-2xl font-bold text-lg hover:border-emerald-100 transition-all text-gray-800">🪐 sao Kim</button>
                    <button onclick="toggleVocabCard(this, false)" class="px-5 py-3 border-2 border-gray-100 bg-gray-50 rounded-2xl font-bold text-lg hover:border-emerald-100 transition-all text-gray-800">🌾 bờ suối</button>
                    <button onclick="toggleVocabCard(this, true)" class="px-5 py-3 border-2 border-gray-100 bg-gray-50 rounded-2xl font-bold text-lg hover:border-emerald-100 transition-all text-gray-800">🚀 phi thuyền</button>
                    <button onclick="toggleVocabCard(this, false)" class="px-5 py-3 border-2 border-gray-100 bg-gray-50 rounded-2xl font-bold text-lg hover:border-emerald-100 transition-all text-gray-800">💇 cắt tóc</button>
                    <button onclick="toggleVocabCard(this, true)" class="px-5 py-3 border-2 border-gray-100 bg-gray-50 rounded-2xl font-bold text-lg hover:border-emerald-100 transition-all text-gray-800">☄️ thiên thạch</button>
                    <button onclick="toggleVocabCard(this, true)" class="px-5 py-3 border-2 border-gray-100 bg-gray-50 rounded-2xl font-bold text-lg hover:border-emerald-100 transition-all text-gray-800">🌌 hành tinh</button>
                    <button onclick="toggleVocabCard(this, false)" class="px-5 py-3 border-2 border-gray-100 bg-gray-50 rounded-2xl font-bold text-lg hover:border-emerald-100 transition-all text-gray-800">🌳 cây đại thụ</button>
                </div>
                <div class="flex justify-start pt-2">
                    <button onclick="checkVocabCards()" class="px-8 py-3 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-base shadow-md">KIỂM TRA CARD ✓</button>
                </div>
                <div id="fb-vn25-vocab" class="hidden p-4 rounded-xl font-bold text-base text-center"></div>
            </div>

            <!-- Bài tập 2: Phân loại đại từ -->
            <div class="bg-white p-6 rounded-3xl border border-emerald-100 shadow-inner space-y-4">
                <h4 class="text-xl md:text-2xl font-bold text-gray-800 flex items-start gap-3">
                    <span class="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-base mt-0.5 shadow-sm">2</span>
                    <div>
                        <p class="mb-2">Tìm các đại từ trong đoạn trích dưới đây và phân loại chúng:</p>
                        <blockquote class="p-4 bg-emerald-50/50 rounded-xl font-bold text-gray-800 text-xl md:text-2xl leading-relaxed italic border-l-4 border-emerald-100">
                            "Tôi thích nhất những chiếc ô tô vừa chạy vừa bay. Chúng hoạt động theo yêu cầu bằng giọng nói của chủ nhân."
                        </blockquote>
                    </div>
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <label class="block font-black text-gray-800 mb-2">Đại từ "Tôi" dùng để:</label>
                        <select id="vn25-pronoun-toi" class="w-full p-3 border border-emerald-100 rounded-xl font-bold bg-white text-lg">
                            <option value="">Chọn mục đích...</option>
                            <option value="xungho">Dùng để xưng hô</option>
                            <option value="thaythe">Dùng để thay thế</option>
                        </select>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <label class="block font-black text-gray-800 mb-2">Đại từ "Chúng" dùng để:</label>
                        <select id="vn25-pronoun-chung" class="w-full p-3 border border-emerald-100 rounded-xl font-bold bg-white text-lg">
                            <option value="">Chọn mục đích...</option>
                            <option value="xungho">Dùng để xưng hô</option>
                            <option value="thaythe">Dùng để thay thế cho "những chiếc ô tô vừa chạy vừa bay"</option>
                        </select>
                    </div>
                </div>
                <div class="flex justify-start pt-2">
                    <button onclick="checkPronounSelects()" class="px-8 py-3 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-base shadow-md">KIỂM TRA ĐẠI TỪ ✓</button>
                </div>
                <div id="fb-vn25-pronoun" class="hidden p-4 rounded-xl font-bold text-base text-center"></div>
            </div>

            <!-- Bài tập 3: Viết câu có đại từ thay thế -->
            <div class="bg-white p-6 rounded-3xl border border-emerald-100 shadow-inner space-y-4">
                <h4 class="text-xl md:text-2xl font-bold text-gray-800 flex items-start gap-3">
                    <span class="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-base mt-0.5 shadow-sm">3</span>
                    Viết tiếp câu dưới đây, trong đó có sử dụng đại từ thay thế (ví dụ: nó, chúng, đó...):
                </h4>
                <div class="bg-emerald-50/50 p-4 rounded-xl font-bold text-gray-800 text-xl md:text-2xl leading-relaxed italic border-l-4 border-emerald-100 mb-2">
                    "Tôi lại gần một cây đại thụ."
                </div>
                <input type="text" id="ans-vn25-writing-ltvc" placeholder="Nhập câu tiếp theo của em..." class="w-full p-4 border-2 border-emerald-100 rounded-2xl outline-none focus:border-emerald-500 font-bold bg-emerald-50/10 text-xl md:text-2xl" />
                <div class="flex justify-start gap-3">
                    <button onclick="checkLtvcWriting()" class="px-8 py-3 bg-emerald-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-emerald-600 active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-emerald-900 font-black text-xs shadow-sm">E</div> 
                        <span>CHẤM BÀI LTVC</span>
                    </button>
                    <div id="fb-vn25-ltvc" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TOÀN BỘ -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn25Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Vì sao phi thuyền của các nhà du hành phải hạ cánh khẩn cấp xuống hành tinh gần nhất?",
            "options": [
                "Vì phi thuyền bị hết nhiên liệu giữa đường bay",
                "Vì phía trước xuất hiện những tia sáng nhấp nháy, kim đồng hồ rối loạn rồi đứng im",
                "Vì các nhà du hành muốn ghé thăm bạn bè người máy",
                "Vì thời tiết bên ngoài vũ trụ quá lạnh buốt"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Hai người bước vào phi thuyền ngay sau khi cửa hé mở ăn mặc như thế nào?",
            "options": [
                "Ăn mặc như các kỹ sư không gian",
                "Ăn mặc như sĩ quan",
                "Ăn mặc như những người nông dân Trái Đất",
                "Ăn mặc như những nhà thám hiểm robot"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Ai là người phát hiện ra hai vị sĩ quan bước vào tàu là người máy?",
            "options": [
                "Báo Thành",
                "Bạn Chăn-bai",
                "Nhân vật tôi",
                "Thầy Dương"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Da của cư dân sống ở hành tinh lạ có những màu gì?",
            "options": [
                "Đỏ, cam, vàng hoặc trắng",
                "Hồng, ánh xanh, vàng nghệ hoặc tím",
                "Xanh lá cây, đen hoặc xám bạc",
                "Chỉ có duy nhất màu trắng bạc thép"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cánh tay của những người trên hành tinh kì lạ có điểm gì đặc biệt?",
            "options": [
                "Được làm bằng nhựa dẻo siêu bền",
                "Được làm bằng thép",
                "Có khả năng phát ra ánh sáng nhấp nháy",
                "Dài gấp đôi tay của con người Trái Đất"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Nhận xét của Chăn-bai 'Chắc họ chỉ quen dời non, lắp biển' có ý nghĩa gì?",
            "options": [
                "Họ là những người rất lười biếng và chậm chạp",
                "Họ có sức mạnh phi thường nhờ những bộ phận bằng thép",
                "Họ thường xuyên đi du lịch ở các vùng biển đảo",
                "Họ thích chơi trò chơi xây lâu đài cát"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Mỗi ngày ở hành tinh lạ có bao nhiêu giờ?",
            "options": [
                "12 giờ",
                "10 giờ",
                "24 giờ",
                "48 giờ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Hệ đếm thời gian ở hành tinh lạ tuân theo con số đặc trưng nào?",
            "options": [
                "Hệ số 24",
                "Hệ số 10",
                "Hệ số 12",
                "Hệ số 60"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Công việc nào sau đây được miêu tả là KHÔNG phải do máy móc thực hiện ở hành tinh lạ?",
            "options": [
                "Xây dựng thành phố",
                "Cắt tóc",
                "Tẩm quất giải trí",
                "Điều khiển ô tô bằng tay lái thủ công"
            ],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Những chiếc ô tô ở hành tinh kì lạ hoạt động dựa trên cơ chế nào?",
            "options": [
                "Nhấn nút trên bảng điều khiển điện tử",
                "Hoạt động theo yêu cầu bằng giọng nói của chủ nhân",
                "Tự động lái theo bản đồ bay định sẵn",
                "Sử dụng năng lượng mặt trời để tự chạy"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tại sao nhân vật tôi không thể ra lệnh được cho bất kỳ chiếc xe nào ở đây?",
            "options": [
                "Vì xe không nhận diện được giọng nói tiếng Việt",
                "Vì không có cái nào thuộc sở hữu của nhân vật tôi",
                "Vì chìa khóa xe đã bị người máy tịch thu",
                "Vì xe đang bị khóa hệ thống an ninh"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tại sao cây đại thụ ở hành tinh lạ lại tỏa ra hơi nóng ran?",
            "options": [
                "Vì cây hấp thụ quá nhiều ánh nắng mặt trời",
                "Vì đây thực chất chỉ là cái máy mang hình cây",
                "Vì cây đang bị cháy từ bên trong thân",
                "Vì rễ cây cắm vào mạch nước nóng ngầm"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cảm xúc cuối cùng của nhân vật tôi được bộc lộ ở cuối bài là gì?",
            "options": [
                "Thích thú muốn ở lại hành tinh kì lạ mãi mãi",
                "Nhớ Trái Đất tha thiết, thèm bóng cây mát râm và tiếng chim hót tự nhiên",
                "Lo sợ các người máy sẽ tấn công mình",
                "Háo hức muốn đi khám phá các hành tinh tiếp theo"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong câu: 'Tôi thích nhất những chiếc ô tô vừa chạy vừa bay. Chúng hoạt động theo yêu cầu...', từ 'Chúng' là loại đại từ gì?",
            "options": [
                "Đại từ xưng hô",
                "Đại từ thay thế",
                "Đại từ nghi vấn",
                "Đại từ chỉ định"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Từ ngữ nào sau đây KHÔNG phải là từ chỉ sự vật trong vũ trụ?",
            "options": [
                "Sao Hỏa",
                "Bờ suối",
                "Thiên thạch",
                "Hành tinh"
            ],
            "answer": 1,
            "level": 0
        }
    ]
};

// --- HÀM KHỞI ĐỘNG VN25 ---
window.checkKD25 = function() {
    const ans = document.getElementById('ans-vn25-kd')?.value.trim().toLowerCase().replace(/\s+/g, '');
    const fb = document.getElementById('fb-vn25-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (ans === 'hànhtinh' || ans === 'hanhtinh') {
        fb.innerHTML = "🎉 Tuyệt vời! Đáp án chính xác là HÀNH TINH. Chúng ta cùng bắt đầu khám phá hành tinh kì lạ trong bài học hôm nay nhé!";
        fb.className = "p-4 rounded-2xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác. Em hãy thử suy nghĩ lại hoặc sử dụng gợi ý để sắp xếp lại các chữ cái nhé!";
        fb.className = "p-4 rounded-2xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- ĐÓNG VAI NGƯỜI MÁY (CÂU 4) ---
window.checkWritingQ4 = function() {
    const text = document.getElementById('ans-vn25-writing-q4')?.value.trim();
    const fb = document.getElementById('fb-vn25-q4');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text || text.length < 15) {
        fb.innerHTML = "⚠️ Đoạn văn của em hơi ngắn hoặc chưa nhập gì. Hãy cố gắng đóng vai viết ít nhất 2-3 câu giới thiệu nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    // Đánh giá AI Thầy E giả lập
    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
            <p class="text-lg font-bold">"Bài viết rất sáng tạo! Em đã hóa thân xuất sắc thành cư dân người máy để miêu tả về màu da khác lạ, hệ thời gian mười đặc biệt và các loại xe bay hoạt động tự động. Rất đáng khen!"</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Điểm: 125% (Hoàn thành tốt)</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-325";
};

// --- KỂ TIẾP ĐOẠN KẾT (CÂU 5) ---
window.checkWritingQ5 = function() {
    const text = document.getElementById('ans-vn25-writing-q5')?.value.trim();
    const fb = document.getElementById('fb-vn25-q5');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy nhập phần kết nối tiếp trước khi bấm chấm bài nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    // Kiểm tra xem có chứa từ khóa bắt buộc không
    const hasTheRoi = text.toLowerCase().includes('thế rồi');
    const hasBongNhien = text.toLowerCase().includes('bỗng nhiên');
    const hasCuoiCung = text.toLowerCase().includes('cuối cùng');

    if (hasTheRoi && hasBongNhien && hasCuoiCung) {
        fb.innerHTML = `
            <div class="space-y-2">
                <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
                <p class="text-lg font-bold">"Hoàn hảo! Em đã sử dụng rất tốt cả 3 từ nối gợi ý (Thế rồi, Bỗng nhiên, Cuối cùng) để dẫn dắt câu chuyện đến một kết thúc hợp lý và cảm động về mong ước trở về Trái Đất."</p>
                <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Điểm: 125% (Đạt yêu cầu)</span>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-325";
    } else {
        let thieu = [];
        if (!hasTheRoi) thieu.push('"Thế rồi"');
        if (!hasBongNhien) thieu.push('"Bỗng nhiên"');
        if (!hasCuoiCung) thieu.push('"Cuối cùng"');
        fb.innerHTML = `⚠️ Đoạn văn của em còn thiếu từ gợi ý nối: ${thieu.join(', ')}. Hãy bổ sung để đoạn kết chặt chẽ hơn nhé!`;
        fb.className = "p-4 rounded-xl font-bold text-base bg-rose-600 text-white shadow-md";
    }
};

// --- CHỌN TỪ VỰNG VŨ TRỤ (LTVC 1) ---
let selectedVocabCards = [];
window.toggleVocabCard = function(btn, isCorrect) {
    btn.classList.toggle('bg-emerald-600');
    btn.classList.toggle('text-white');
    btn.classList.toggle('border-emerald-100');
    btn.classList.toggle('bg-gray-50');
    btn.classList.toggle('text-gray-800');
    btn.classList.toggle('border-gray-100');
    
    // Ghi nhận trạng thái chọn
    const text = btn.innerText;
    const idx = selectedVocabCards.findIndex(c => c.text === text);
    if (idx > -1) {
        selectedVocabCards.splice(idx, 1);
    } else {
        selectedVocabCards.push({ text, isCorrect });
    }
};

window.checkVocabCards = function() {
    const fb = document.getElementById('fb-vn25-vocab');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (selectedVocabCards.length === 0) {
        fb.innerHTML = "⚠️ Em hãy nhấn chọn các từ ngữ trước khi kiểm tra nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base text-center bg-amber-500 text-white mt-2";
        return;
    }

    // Các từ đúng là: sao Kim, phi thuyền, thiên thạch, hành tinh
    // Tổng số từ đúng thực tế trong danh sách là 4.
    const incorrectChoices = selectedVocabCards.filter(c => !c.isCorrect);
    const correctChoices = selectedVocabCards.filter(c => c.isCorrect);

    if (correctChoices.length === 4 && incorrectChoices.length === 0) {
        fb.innerHTML = "🎉 Chính xác hoàn toàn! Em đã tìm đúng tất cả 4 từ chỉ sự vật trong vũ trụ (sao Kim, phi thuyền, thiên thạch, hành tinh).";
        fb.className = "p-4 rounded-xl font-bold text-base text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = `⚠️ Chưa chính xác. Em đã chọn đúng ${correctChoices.length}/4 từ vũ trụ và chọn sai ${incorrectChoices.length} từ. Hãy thử suy nghĩ lại và chọn lại nhé!`;
        fb.className = "p-4 rounded-xl font-bold text-base text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- KIỂM TRA ĐẠI TỪ PHÂN LOẠI (LTVC 2) ---
window.checkPronounSelects = function() {
    const toi = document.getElementById('vn25-pronoun-toi')?.value;
    const chung = document.getElementById('vn25-pronoun-chung')?.value;
    const fb = document.getElementById('fb-vn25-pronoun');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!toi || !chung) {
        fb.innerHTML = "⚠️ Em hãy chọn mục đích sử dụng cho cả hai đại từ nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base text-center bg-amber-500 text-white mt-2";
        return;
    }

    if (toi === 'xungho' && chung === 'thaythe') {
        fb.innerHTML = "🎉 Tuyệt vời! 'Tôi' là đại từ xưng hô dùng cho người kể chuyện, và 'Chúng' là đại từ thay thế dùng để thay cho cụm danh từ 'những chiếc ô tô vừa chạy vừa bay' trước đó nhằm tránh lặp từ.";
        fb.className = "p-4 rounded-xl font-bold text-base text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác. Em hãy nhớ lại: từ nào dùng để xưng hô tự xưng, từ nào dùng để thay thế cho sự vật ở câu trước để chọn lại nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- KIỂM TRA VIẾT CÂU LTVC (LTVC 3) ---
window.checkLtvcWriting = function() {
    const text = document.getElementById('ans-vn25-writing-ltvc')?.value.trim();
    const fb = document.getElementById('fb-vn25-ltvc');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy nhập câu viết tiếp trước khi kiểm tra nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    // Các đại từ thay thế phù hợp cho "cây đại thụ" là: nó, đó, đấy, kia...
    const pronouns = ['nó', 'kia', 'đó', 'đấy', 'ấy'];
    let dung = false;
    for (let p of pronouns) {
        if (text.toLowerCase().includes(p)) {
            dung = true;
            break;
        }
    }

    if (dung) {
        fb.innerHTML = `
            <div class="space-y-2">
                <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
                <p class="text-lg font-bold">"Chính xác! Câu của em viết tiếp rất hợp lý và đã sử dụng đại từ thay thế để liên kết với câu trước. Rất tốt!"</p>
                <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Câu viết: "${text}"</span>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-325";
    } else {
        fb.innerHTML = "⚠️ Câu của em viết tiếp hợp lý nhưng chưa sử dụng đại từ thay thế (như 'nó', 'đó', 'ấy'...) để liên kết với 'cây đại thụ'. Hãy chỉnh sửa lại một chút nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-rose-600 text-white shadow-md";
    }
};

// --- HOÀN THÀNH TOÀN BỘ TIẾT HỌC ---
window.submitVn25Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback('Hoàn thành Tiết 25 & 26', '🚀', '<div class="text-center p-6"><span class="text-7xl block mb-4">🪐</span><p class="text-2xl md:text-3xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài học Hành tinh kì lạ!</p><p class="text-lg text-gray-800 mt-3">Hãy tiếp tục yêu mến Trái Đất xanh mát của chúng ta và học tập chăm chỉ để khám phá những chân trời tri thức mới.</p></div>');
    }
};
