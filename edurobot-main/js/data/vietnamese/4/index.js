export const lesson4 = {
    "topic": "Tiếng Việt 5",
    "week": "1",
    "period": "4",
    "title": "ĐỌC: CÁNH ĐỒNG HOA",
    "desc": "Bài học giúp học sinh hiểu được giá trị của việc bảo vệ môi trường, chung tay cải tạo cảnh quan qua câu chuyện ý nghĩa Cánh đồng hoa.",
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
                Đọc trôi chảy, diễn cảm truyện "Cánh đồng hoa", thể hiện đúng giọng điệu nhân vật (lo lắng, vui sướng).
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Hiểu nội dung bài đọc và rút ra thông điệp ý nghĩa về ý thức bảo vệ môi trường, làm sạch đẹp nơi sinh sống.
            </li>
        </ul>
    </div>

    <!-- 📖 Phần Bài đọc -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <!-- Văn bản đọc -->
            <div class="bg-sky-50/20 rounded-[28px] p-6 md:p-8 shadow-inner border border-sky-100/50">
                <div class="flex justify-between items-center mb-4 border-b border-sky-100 pb-3">
                    <span class="text-sky-900 font-black text-xl md:text-4xl flex items-center gap-2">
                        <span>📖</span> Văn bản đọc "Cánh đồng hoa"
                    </span>
                    <button onclick="playSegmentAudio('assets/audio/tiengviet/4/canh_dong_hoa_full.mp3')" class="p-2 bg-sky-600 hover:bg-sky-600 text-white rounded-full transition-all flex items-center justify-center shadow-md hover:scale-105 active:scale-95" title="Nghe đọc toàn bài">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                    </button>
                </div>
                <div class="serif-font text-gray-800 text-lg md:text-4xl leading-relaxed text-justify space-y-4 overflow-hidden">
                    
                    <!-- Minh họa SGK (Góc trên bên phải, bấm vào phóng to) -->
                    <div onclick="window.showMathFeedback('Cánh đồng hoa', '🌻', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-sky-50 to-emerald-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/4-5/4-5.png&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Cánh đồng hoa&quot;&gt;&lt;p class=&quot;text-2xl font-bold text-sky-800 mt-4&quot;&gt;Cánh đồng hoa rực rỡ sắc màu được cải tạo từ bãi đất hoang.&lt;/p&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-gradient-to-br from-sky-50 to-emerald-50 rounded-[32px] border-4 border-white shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group">
                        <img src="assets/images/tiengviet_5_1/4-5/4-5.png" class="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500" alt="Cánh đồng hoa">
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Bấm để phóng to 🔍</div>
                    </div>

                    <p class="indent-10 font-black text-sky-800 text-xl md:text-2xl italic mb-4">CÁNH ĐỒNG HOA</p>
                    <p class="indent-10">Ở đầu làng, có một đồng cỏ khá rộng. Ja Ka, Mơ Hoa, Ja Prok và Mơ Nhơ thường rủ nhau tới đó vui chơi. Ja Ka luôn mang theo chiếc trống nhỏ. Cậu vỗ trống rất hay. Mỗi lần Ja Ka vỗ trống, các bạn lại cùng múa hát tưng bừng.</p>
                    <p class="indent-10">Thế nhưng gần đây, trên đồng cỏ, một bãi rác xuất hiện và cứ lớn dần lên, bốc mùi khó chịu. Các bạn nhỏ chẳng nô đùa, hò hét như mọi ngày.</p>
                    <p class="indent-10">– Cứ thế này, đồng cỏ sẽ thành bãi rác mất thôi! – Mơ Nhơ thở dài.</p>
                    <p class="indent-10">Mơ Hoa quay mặt đi, giấu những giọt nước mắt:</p>
                    <p class="indent-10">– Bọn mình còn đâu chỗ mà vui chơi!</p>
                    <p class="indent-10">Ja Ka, Ja Prok thì rầu rĩ:</p>
                    <p class="indent-10">– Biết làm thế nào bây giờ?</p>
                    <p class="indent-10">Bỗng Mơ Hoa hỏi:</p>
                    <p class="indent-10">– Các cậu có thấy bầu trời như một vườn hoa không?</p>
                    <p class="indent-10">Mơ Nhơ gật đầu:</p>
                    <p class="indent-10">– Cánh diều giống hoa ngũ sắc, đám mây giống hoa cúc trắng,...</p>
                    <p class="indent-10">Mơ Hoa bật dậy:</p>
                    <p class="indent-10">– Chúng ta sẽ biến nơi đây thành cánh đồng hoa. Mọi người không nỡ lấy cánh đồng đẹp làm chỗ đổ rác đâu.</p>
                    <p class="indent-10">Các bạn nhỏ chụm đầu bàn tính và quyết tâm cải tạo đồng cỏ. Biết ý tưởng đó, nhiều cô bác trong làng đã hưởng ứng. Họ hối hả cùng các bạn bắt tay vào dọn rác, xới đất, gieo hạt, trồng cây; ngày ngày tưới nước, nhổ cỏ, bắt sâu. Cây đâm chồi, nảy lộc, rồi nhú nở những bông hoa đầu tiên. Ba tháng sau, hoa đã đua nhau khoe sắc: cúc bách nhật tím lịm, cúc vạn thọ vàng tươi, mào gà đỏ thắm,... Quả nhiên, không thấy ai đến đây đổ rác nữa. Nhóm bạn vui mừng nhảy múa, ca hát giữa muôn hoa rực rỡ, trong tiếng trống rộn ràng.</p>
                    <p class="indent-10">Với cánh đồng hoa xinh đẹp, ngôi làng trở nên nổi tiếng, đón nhiều khách tới tham quan. Các bạn nhỏ và dân làng cười vui. Cánh đồng hoa cũng như đang vui cười hạnh phúc.</p>
                    <p class="text-right font-bold text-gray-500 mt-6 md:text-3xl">(Theo Lê Anh Vinh – Bùi Thị Diễn)</p>
                </div>
            </div>

            <!-- Từ ngữ cần nhớ -->
            <div class="bg-amber-50/70 p-6 rounded-[28px] border-2 border-dashed border-amber-200">
                <p class="text-sm font-black text-amber-600 uppercase tracking-widest mb-3 flex items-center gap-1">
                    <span>📝</span> Từ ngữ cần nhớ
                </p>
                <ul class="space-y-3 text-base md:text-2xl text-amber-600 font-medium">
                    <li>• <strong>Ngũ sắc</strong>: Có năm màu sắc khác nhau, thường dùng chỉ sự đa dạng, rực rỡ.</li>
                    <li>• <strong>Rầu rĩ</strong>: Buồn bã, ủ rũ hiện rõ trên nét mặt.</li>
                    <li>• <strong>Cải tạo</strong>: Thay đổi, biến đổi làm cho tốt hơn hoặc phù hợp hơn với yêu cầu mới.</li>
                    <li>• <strong>Hưởng ứng</strong>: Tỏ thái độ đồng tình và tham gia hoạt động do người khác đề xuất.</li>
                </ul>

    <!-- 💡 Nội dung chính bài học -->
    <div class="p-8 rounded-[36px] bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-xl relative overflow-hidden">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <h4 class="text-xl md:text-3xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
            <span>💡</span> Nội dung chính bài học
        </h4>
        <div class="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p class="text-xl md:text-4xl font-bold leading-relaxed text-center italic">
                "Truyện ca ngợi ý thức bảo vệ môi trường của các bạn nhỏ khi chung tay biến bãi rác tự phát thành một cánh đồng hoa rực rỡ sắc màu, mang lại vẻ đẹp và sự trong lành cho quê hương."
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
    <!-- PHẦN 1: TÌM HIỂU BÀI (ACCORDION) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-8">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-xl md:text-2xl font-black shadow-md">📖</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Tìm hiểu bài</h3>
            </div>

            <div class="space-y-4">
                <!-- Câu 1 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            1. Các bạn nhỏ có những hoạt động vui chơi nào trên đồng cỏ đầu làng? Chuyện gì xảy ra ở đó?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 text-lg md:text-3xl font-medium">
                        <p class="text-sky-800 font-bold mb-2">💡 Gợi ý trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li>Các bạn nhỏ rủ nhau ra chơi trên đồng cỏ đầu làng rộng rãi.</li>
                            <li>Ja Ka luôn mang theo chiếc trống nhỏ vỗ rất vui nhộn, các bạn cùng múa hát tưng bừng.</li>
                            <li><strong>Chuyện xảy ra:</strong> Gần đây có bãi rác xuất hiện, lớn dần lên và bốc mùi hôi khó chịu khiến các bạn buồn bã không thể chơi như trước.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 2 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            2. Khi thấy đồng cỏ có nguy cơ trở thành bãi rác, các bạn nhỏ lo buồn thế nào? Các bạn đã có ý tưởng gì?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 text-lg md:text-3xl font-medium">
                        <p class="text-sky-800 font-bold mb-2">💡 Gợi ý trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li><strong>Thái độ lo buồn:</strong> Mơ Nhơ thở dài than vãn; Mơ Hoa quay mặt đi giấu giọt nước mắt vì tiếc chỗ vui chơi; Ja Ka và Ja Prok rầu rĩ băn khoăn không biết làm thế nào.</li>
                            <li><strong>Ý tưởng cải tạo:</strong> Mơ Hoa nảy ra ý tưởng biến bãi đất đầy rác thành cánh đồng hoa, vì tin rằng khi cánh đồng đẹp lên, mọi người sẽ không nỡ đến đây đổ rác nữa.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 3 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            3. Các bạn nhỏ đã thực hiện ý tưởng đó như thế nào và kết quả ra sao?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 text-lg md:text-3xl font-medium">
                        <p class="text-sky-800 font-bold mb-2">💡 Gợi ý trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li><strong>Quá trình thực hiện:</strong> Các bạn chụm đầu lập kế hoạch, kêu gọi dân làng và các cô bác cùng chung tay dọn sạch rác, cuốc đất, gieo hạt hoa và ngày ngày chăm chỉ tưới nước, bắt sâu.</li>
                            <li><strong>Kết quả:</strong> Ba tháng sau, cánh đồng rực rỡ đủ loài cúc bách nhật, cúc vạn thọ, hoa mào gà khoe sắc. Không ai mang rác đến đổ nữa, ngôi làng đón tiếp nhiều khách tham quan, các bạn nhỏ vui sướng múa hát quanh đồng hoa.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 4 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            4. Kể tóm tắt nội dung câu chuyện Cánh đồng hoa theo gợi ý dưới đây:
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 text-lg md:text-3xl font-medium">
                        <!-- Các gợi ý từ SGK -->
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                            <div class="p-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl text-center font-bold text-sm md:text-base shadow-sm flex items-center justify-center">
                                Niềm vui trên đồng cỏ
                            </div>
                            <div class="p-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl text-center font-bold text-sm md:text-base shadow-sm flex items-center justify-center">
                                Nguy cơ đồng cỏ trở thành bãi rác và ý tưởng cải tạo đồng cỏ
                            </div>
                            <div class="p-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl text-center font-bold text-sm md:text-base shadow-sm flex items-center justify-center">
                                Thực hiện ý tưởng
                            </div>
                            <div class="p-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl text-center font-bold text-sm md:text-base shadow-sm flex items-center justify-center">
                                Kết quả tốt đẹp
                            </div>
                        </div>

                        <p class="text-sky-800 font-bold mb-2">💡 Gợi ý tóm tắt:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li><strong>Niềm vui trên đồng cỏ:</strong> Nhóm bạn Ja Ka, Mơ Hoa, Ja Prok và Mơ Nhơ thường rủ nhau ra đồng cỏ đầu làng múa hát vui vẻ theo tiếng trống của Ja Ka.</li>
                            <li><strong>Nguy cơ đồng cỏ trở thành bãi rác và ý tưởng cải tạo đồng cỏ:</strong> Một bãi rác xuất hiện bốc mùi hôi thối khiến các bạn không còn chỗ chơi. Mơ Hoa đề xuất ý tưởng biến đồng cỏ thành cánh đồng hoa để mọi người không nỡ vứt rác nữa.</li>
                            <li><strong>Thực hiện ý tưởng:</strong> Nhóm bạn lên kế hoạch và cùng các cô bác trong làng dọn rác, cuốc đất, gieo hạt và chăm chỉ tưới nước, bắt sâu hàng ngày.</li>
                            <li><strong>Kết quả tốt đẹp:</strong> Ba tháng sau hoa nở rực rỡ, không còn ai đổ rác. Ngôi làng trở nên nổi tiếng đón nhiều khách tham quan, mọi người tràn ngập niềm vui.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 5 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            5. Em rút ra được bài học gì từ câu chuyện?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 text-lg md:text-3xl font-medium">
                        <p class="text-sky-800 font-bold mb-2">💡 Gợi ý trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li>Muốn bảo vệ môi trường, thay vì chỉ than thở hay lo buồn, chúng ta cần chủ động hành động thiết thực.</li>
                            <li>Sức mạnh của sự đoàn kết và đồng lòng của cả cộng đồng sẽ tạo nên những thay đổi kỳ diệu cho quê hương.</li>
                            <li>Cái đẹp có sức mạnh đẩy lùi cái xấu (vườn hoa đẹp đã ngăn chặn việc đổ rác vô ý thức).</li>
                        </ul>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- PHẦN 2: LUYỆN TẬP THEO VĂN BẢN ĐỌC (TỪ LOẠI & THAY THẾ TỪ) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-blue-50">
        <div class="p-6 md:p-8 bg-blue-50/30 rounded-[32px] space-y-10">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">✏️</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Luyện tập theo văn bản đọc</h3>
            </div>

            <!-- Bài tập 1: Phân loại Từ loại -->
            <div class="bg-white p-6 rounded-3xl border border-blue-100 shadow-sm space-y-6">
                <h4 class="text-lg md:text-3xl font-bold text-gray-800 flex items-start gap-2">
                    <span class="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm mt-0.5 shadow-sm">1</span>
                    Xếp những từ in đậm dưới đây vào nhóm thích hợp (Động từ hoặc Tính từ):
                </h4>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-2xl">
                    <!-- Từ 1 -->
                    <div class="p-5 bg-blue-50/50 rounded-2xl border border-blue-100 flex flex-col gap-3">
                        <p class="font-medium text-gray-800">a. Mỗi lần Ja Ka vỗ trống, các bạn lại cùng múa hát <strong class="text-blue-800 uppercase font-black">tưng bừng</strong>.</p>
                        <div class="flex gap-3">
                            <button onclick="selectWordType('tung-bung', 'dong-tu')" id="btn-tb-dt" class="flex-1 py-2 bg-white border-2 border-gray-100 rounded-xl font-bold text-gray-800 hover:bg-blue-50 hover:border-blue-100 transition-all">Động từ</button>
                            <button onclick="selectWordType('tung-bung', 'tinh-tu')" id="btn-tb-tt" class="flex-1 py-2 bg-white border-2 border-gray-100 rounded-xl font-bold text-gray-800 hover:bg-blue-50 hover:border-blue-100 transition-all">Tính từ</button>
                        </div>
                    </div>

                    <!-- Từ 2 -->
                    <div class="p-5 bg-blue-50/50 rounded-2xl border border-blue-100 flex flex-col gap-3">
                        <p class="font-medium text-gray-800">b. Bọn mình còn đâu chỗ mà <strong class="text-blue-800 uppercase font-black">vui chơi</strong>!</p>
                        <div class="flex gap-3">
                            <button onclick="selectWordType('vui-choi', 'dong-tu')" id="btn-vc-dt" class="flex-1 py-2 bg-white border-2 border-gray-100 rounded-xl font-bold text-gray-800 hover:bg-blue-50 hover:border-blue-100 transition-all">Động từ</button>
                            <button onclick="selectWordType('vui-choi', 'tinh-tu')" id="btn-vc-tt" class="flex-1 py-2 bg-white border-2 border-gray-100 rounded-xl font-bold text-gray-800 hover:bg-blue-50 hover:border-blue-100 transition-all">Tính từ</button>
                        </div>
                    </div>

                    <!-- Từ 3 -->
                    <div class="p-5 bg-blue-50/50 rounded-2xl border border-blue-100 flex flex-col gap-3">
                        <p class="font-medium text-gray-800">c. Biết ý tưởng đó, nhiều cô bác trong làng đã <strong class="text-blue-800 uppercase font-black">hưởng ứng</strong>.</p>
                        <div class="flex gap-3">
                            <button onclick="selectWordType('huong-ung', 'dong-tu')" id="btn-hu-dt" class="flex-1 py-2 bg-white border-2 border-gray-100 rounded-xl font-bold text-gray-800 hover:bg-blue-50 hover:border-blue-100 transition-all">Động từ</button>
                            <button onclick="selectWordType('huong-ung', 'tinh-tu')" id="btn-hu-tt" class="flex-1 py-2 bg-white border-2 border-gray-100 rounded-xl font-bold text-gray-800 hover:bg-blue-50 hover:border-blue-100 transition-all">Tính từ</button>
                        </div>
                    </div>

                    <!-- Từ 4 -->
                    <div class="p-5 bg-blue-50/50 rounded-2xl border border-blue-100 flex flex-col gap-3">
                        <p class="font-medium text-gray-800">d. Nhóm bạn vui mừng nhảy múa, ca hát trong tiếng trống <strong class="text-blue-800 uppercase font-black">rộn ràng</strong>.</p>
                        <div class="flex gap-3">
                            <button onclick="selectWordType('ron-rang', 'dong-tu')" id="btn-rr-dt" class="flex-1 py-2 bg-white border-2 border-gray-100 rounded-xl font-bold text-gray-800 hover:bg-blue-50 hover:border-blue-100 transition-all">Động từ</button>
                            <button onclick="selectWordType('ron-rang', 'tinh-tu')" id="btn-rr-tt" class="flex-1 py-2 bg-white border-2 border-gray-100 rounded-xl font-bold text-gray-800 hover:bg-blue-50 hover:border-blue-100 transition-all">Tính từ</button>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end gap-3 mt-4">
                    <button onclick="resetWordTypes()" class="px-6 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-all text-base">ĐẶT LẠI</button>
                    <button onclick="checkWordTypes()" class="px-8 py-3 bg-blue-600 text-white font-black text-lg rounded-2xl hover:bg-blue-600 transition-all shadow-md">KIỂM TRA BÀI 1</button>
                </div>
                <div id="fb-word-types" class="hidden text-lg font-bold p-3 rounded-xl"></div>
            </div>

            <!-- Bài tập 2: Thay thế từ đồng nghĩa -->
            <div class="bg-white p-6 rounded-3xl border border-blue-100 shadow-sm space-y-6">
                <h4 class="text-lg md:text-3xl font-bold text-gray-800 flex items-start gap-2">
                    <span class="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm mt-0.5 shadow-sm">2</span>
                    Tìm từ có thể thay thế từ in đậm trong mỗi câu ở bài tập 1:
                </h4>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-2xl">
                    <div class="flex flex-col gap-2 p-4 bg-sky-50/30 border border-sky-100 rounded-2xl">
                        <span class="font-bold text-sky-800">Từ thay thế cho "tưng bừng":</span>
                        <input type="text" id="syn-tung-bung" placeholder="Ví dụ: nhộn nhịp, rộn rã..." class="p-3 border-2 border-gray-100 rounded-xl outline-none focus:border-sky-500 font-bold">
                    </div>
                    <div class="flex flex-col gap-2 p-4 bg-sky-50/30 border border-sky-100 rounded-2xl">
                        <span class="font-bold text-sky-800">Từ thay thế cho "vui chơi":</span>
                        <input type="text" id="syn-vui-choi" placeholder="Ví dụ: nô đùa, chơi đùa..." class="p-3 border-2 border-gray-100 rounded-xl outline-none focus:border-sky-500 font-bold">
                    </div>
                    <div class="flex flex-col gap-2 p-4 bg-sky-50/30 border border-sky-100 rounded-2xl">
                        <span class="font-bold text-sky-800">Từ thay thế cho "hưởng ứng":</span>
                        <input type="text" id="syn-huong-ung" placeholder="Ví dụ: đồng tình, ủng hộ..." class="p-3 border-2 border-gray-100 rounded-xl outline-none focus:border-sky-500 font-bold">
                    </div>
                    <div class="flex flex-col gap-2 p-4 bg-sky-50/30 border border-sky-100 rounded-2xl">
                        <span class="font-bold text-sky-800">Từ thay thế cho "rộn ràng":</span>
                        <input type="text" id="syn-ron-rang" placeholder="Ví dụ: nhộn nhịp, rộn rã..." class="p-3 border-2 border-gray-100 rounded-xl outline-none focus:border-sky-500 font-bold">
                    </div>
                </div>

                <div class="flex justify-end gap-3 mt-4">
                    <button onclick="resetSynonyms()" class="px-6 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-all text-base">ĐẶT LẠI</button>
                    <button onclick="checkSynonyms()" class="px-8 py-3 bg-blue-600 text-white font-black text-lg rounded-2xl hover:bg-blue-600 transition-all shadow-md">KIỂM TRA BÀI 2</button>
                </div>
                <div id="fb-synonyms" class="hidden text-lg font-bold p-3 rounded-xl"></div>
            </div>
        </div>
    </section>

    <!-- PHẦN 3: LUYỆN TẬP TƯƠNG TÁC GẮN KẾT (CÂU 4 SGK - KẾT NỐI TÓM TẮT TRUYỆN) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
        <div class="p-6 md:p-8 bg-emerald-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">3</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Nối các phần tóm tắt cốt truyện tương ứng</h3>
            </div>
            
            <p class="text-base md:text-lg text-gray-800 font-bold mb-6 italic">
                👉 Hướng dẫn: Nhấp chọn một tiêu đề ở cột A, sau đó chọn phần tóm tắt phù hợp nhất ở cột B.
            </p>

            <div id="matching-board-vn4" class="grid grid-cols-1 md:grid-cols-2 gap-8 relative select-none">
                <!-- SVG Canvas to draw lines -->
                <svg id="svg-connections-vn4" class="absolute inset-0 w-full h-full pointer-events-none z-10" style="min-height: 34px;"></svg>
                
                <!-- Cột A: Tiêu đề gợi ý -->
                <div class="flex flex-col gap-4" id="col-vn4-A">
                    <button onclick="selectNodeVn4('A', 'niem-vui')" id="node-vn4-A-niem-vui" class="p-5 bg-white border-4 border-gray-100 rounded-2xl font-black text-lg md:text-3xl text-left text-gray-800 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50/20 active:scale-98">
                        A. Niềm vui trên đồng cỏ
                    </button>
                    <button onclick="selectNodeVn4('A', 'nguy-co')" id="node-vn4-A-nguy-co" class="p-5 bg-white border-4 border-gray-100 rounded-2xl font-black text-lg md:text-3xl text-left text-gray-800 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50/20 active:scale-98">
                        B. Nguy cơ thành bãi rác & ý tưởng
                    </button>
                    <button onclick="selectNodeVn4('A', 'thuc-hien')" id="node-vn4-A-thuc-hien" class="p-5 bg-white border-4 border-gray-100 rounded-2xl font-black text-lg md:text-3xl text-left text-gray-800 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50/20 active:scale-98">
                        C. Thực hiện ý tưởng
                    </button>
                    <button onclick="selectNodeVn4('A', 'ket-qua')" id="node-vn4-A-ket-qua" class="p-5 bg-white border-4 border-gray-100 rounded-2xl font-black text-lg md:text-3xl text-left text-gray-800 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50/20 active:scale-98">
                        D. Kết quả tốt đẹp
                    </button>
                </div>

                <!-- Cột B: Nội dung tóm tắt -->
                <div class="flex flex-col gap-4" id="col-vn4-B">
                    <button onclick="selectNodeVn4('B', 'desc-thuc-hien')" id="node-vn4-B-desc-thuc-hien" class="p-5 bg-white border-4 border-gray-100 rounded-2xl font-bold text-base md:text-lg text-left text-gray-800 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50/20 active:scale-98">
                        1. Cả làng cùng các bạn nhỏ dọn rác, xới đất, gieo trồng và tưới nước chăm sóc cây.
                    </button>
                    <button onclick="selectNodeVn4('B', 'desc-niem-vui')" id="node-vn4-B-desc-niem-vui" class="p-5 bg-white border-4 border-gray-100 rounded-2xl font-bold text-base md:text-lg text-left text-gray-800 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50/20 active:scale-98">
                        2. Các bạn nhỏ thường tụ tập ca hát, nhảy múa vui vẻ trên bãi cỏ theo tiếng trống của Ja Ka.
                    </button>
                    <button onclick="selectNodeVn4('B', 'desc-ket-qua')" id="node-vn4-B-desc-ket-qua" class="p-5 bg-white border-4 border-gray-100 rounded-2xl font-bold text-base md:text-lg text-left text-gray-800 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50/20 active:scale-98">
                        3. Hoa nở rực rỡ, không còn ai vứt rác, ngôi làng trở nên nổi tiếng đón nhiều khách tham quan.
                    </button>
                    <button onclick="selectNodeVn4('B', 'desc-nguy-co')" id="node-vn4-B-desc-nguy-co" class="p-5 bg-white border-4 border-gray-100 rounded-2xl font-bold text-base md:text-lg text-left text-gray-800 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50/20 active:scale-98">
                        4. Rác xuất hiện bốc mùi hôi thối. Mơ Hoa đề xuất trồng hoa cải tạo đồng cỏ để ngăn người đổ rác.
                    </button>
                </div>
            </div>

            <div class="mt-8 flex flex-wrap gap-4 justify-between items-center">
                <button onclick="resetMatchingVn4()" class="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition-all">LÀM LẠI</button>
                <div id="matching-feedback-vn4" class="hidden text-xl font-bold rounded-2xl px-6 py-3"></div>
                <div class="flex gap-4">
                    <button onclick="checkMatchingVn4()" class="px-8 py-3 bg-emerald-600 text-white font-black text-lg rounded-2xl hover:bg-emerald-600 transition-all shadow-md">KIỂM TRA</button>
                    <button onclick="submitVn4Ex1()" id="btn-submit-vn4-ex1" class="px-8 py-3 bg-gray-800 text-white font-black text-lg rounded-2xl shadow-md hover:bg-black active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-gray-900 font-black text-xs shadow-sm">E</div>
                        <span>NỘP BÀI 3</span>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- PHẦN 4: VIẾT BÀI HỌC CUỘC SỐNG (CÂU 5 SGK - AI THẦY E CHẤM ĐIỂM) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">4</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Rút ra bài học cuộc sống của em</h3>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner space-y-4">
                <h4 class="text-lg md:text-3xl font-bold text-gray-800 flex items-start gap-3">
                    <div>
                        <span>Em rút ra được bài học gì cho bản thân từ câu chuyện "Cánh đồng hoa"? Hãy viết câu trả lời của em (từ 2-4 câu).</span>
                        <button onclick="toggleSpeechRecVn4()" class="p-2 bg-amber-500 text-amber-600 rounded-full hover:bg-amber-500 transition-all text-sm shadow-sm ml-2" title="Nhập bằng giọng nói">🎙️</button>
                    </div>
                </h4>

                <textarea id="ans-vn4-writing" rows="4" placeholder="Ví dụ: Qua câu chuyện này, em nhận ra bảo vệ môi trường là trách nhiệm chung của tất cả mọi người. Thay vì chỉ lo lắng hay than thở trước sự ô nhiễm, chúng ta cần cùng nhau chung tay thực hiện những hành động nhỏ nhưng thiết thực..." class="w-full p-4 md:p-6 text-xl md:text-3xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-amber-50/10 font-medium leading-relaxed"></textarea>
                
                <div class="flex flex-wrap items-center gap-4">
                    <button onclick="checkWritingVn4()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                        <span>CHẤM BÀI</span>
                    </button>
                    <button onclick="resetWritingVn4()" class="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition-all">LÀM LẠI</button>
                    <button onclick="submitVn4Ex2()" class="px-8 py-3 bg-gray-800 text-white font-black rounded-2xl shadow-md hover:bg-black transition-all ml-auto flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-gray-900 font-black text-xs shadow-sm">E</div>
                        <span>NỘP BÀI 4</span>
                    </button>
                </div>
                
                <div id="fb-vn4-writing" class="hidden mt-6 p-6 bg-amber-500 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500">
                    <!-- AI Feedback dynamically injected -->
                </div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TOÀN BỘ -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn4Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Các nhân vật thường mang vật gì theo khi ra đồng cỏ chơi?",
            "options": [
                "Một quả bóng nhỏ",
                "Một cánh diều ngũ sắc",
                "Một chiếc trống nhỏ",
                "Một hộp đồ chơi lắp ráp"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Ai là người vỗ trống rất hay trong nhóm bạn?",
            "options": [
                "Ja Ka",
                "Ja Prok",
                "Mơ Hoa",
                "Mơ Nhơ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Sự việc gì xảy ra khiến đồng cỏ không còn là nơi nô đùa sạch đẹp?",
            "options": [
                "Cỏ bị khô héo hết",
                "Có một bãi rác xuất hiện và cứ lớn dần lên",
                "Người dân ngăn cấm các bạn nhỏ vui chơi",
                "Nơi đây bị xây dựng thành một nhà kho"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Ai đã giấu những giọt nước mắt khi thấy đồng cỏ bị phá hoại?",
            "options": [
                "Mơ Nhơ",
                "Mơ Hoa",
                "Ja Prok",
                "Ja Ka"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cảm xúc của các bạn nhỏ khi thấy bãi rác xuất hiện là gì?",
            "options": [
                "Phấn khởi và tò mò",
                "Vui cười nhảy múa",
                "Lo buồn, thở dài và rầu rĩ",
                "Tức giận tranh cãi gay gắt"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Mơ Hoa nảy ra ý tưởng biến đồng cỏ thành vườn hoa xuất phát từ điều gì?",
            "options": [
                "Muốn bán hoa lấy tiền",
                "Cảm thấy bầu trời như một vườn hoa lớn",
                "Muốn có chỗ để chụp hình đẹp",
                "Được thầy cô giáo khuyên bảo trồng cây"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Mơ Nhơ ví đám mây giống sự vật gì trên trời?",
            "options": [
                "Cánh diều ngũ sắc",
                "Đám mây giống hoa cúc trắng",
                "Một chiếc trống nhỏ",
                "Một thảm cỏ xanh mướt"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Lý do Mơ Hoa tin mọi người sẽ không đổ rác ở vườn hoa là gì?",
            "options": [
                "Vì sẽ có bảo vệ canh giữ vườn hoa",
                "Vì mọi người sẽ không nỡ lấy cánh đồng đẹp làm chỗ đổ rác",
                "Vì bãi rác sẽ bị phạt tiền nặng",
                "Vì hoa sẽ tự động lọc rác hôi"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Những ai đã hưởng ứng và cùng tham gia dọn rác, gieo hạt cùng các bạn?",
            "options": [
                "Chỉ có 4 bạn nhỏ tự bắt tay làm",
                "Nhiều cô bác trong làng",
                "Một số người khách tham quan phương xa",
                "Các bạn nhỏ ở trường học kế bên"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trải qua bao lâu kể từ lúc trồng, hoa bắt đầu đua nhau khoe sắc rực rỡ?",
            "options": [
                "Một tháng",
                "Hai tháng",
                "Ba tháng",
                "Nửa năm"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Các loài hoa nào đã đua nhau khoe sắc trên đồng cỏ?",
            "options": [
                "Hoa cúc bách nhật, hoa cúc vạn thọ, hoa mào gà",
                "Hoa hồng, hoa lan, hoa hướng dương",
                "Hoa huệ, hoa mai, hoa mẫu đơn",
                "Hoa đồng tiền, hoa cúc họa mi, hoa thược dược"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Loài hoa nào có màu tím lịm được nhắc đến trong đoạn văn?",
            "options": [
                "Cúc vạn thọ",
                "Cúc bách nhật",
                "Hoa mào gà",
                "Hoa ngũ sắc"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Sau khi đồng hoa hình thành, có thay đổi tích cực nào diễn ra?",
            "options": [
                "Mọi người tiếp tục mang rác ra đổ nhiều hơn",
                "Không thấy ai đến đây đổ rác nữa, ngôi làng đón nhiều khách du lịch",
                "Đồng cỏ bị san bằng để làm đường giao thông",
                "Các bạn nhỏ không ra đó chơi đùa nữa"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Câu chuyện 'Cánh đồng hoa' gửi gắm tới chúng ta bài học ý nghĩa nào?",
            "options": [
                "Chúng ta nên học cách chơi trống để đánh thật hay",
                "Chung tay biến những nơi ô nhiễm thành cảnh đẹp để bảo vệ môi trường",
                "Không nên đi chăn thả trâu bò ở những bãi cỏ hoang",
                "Nên rủ bạn bè đi du lịch những ngôi làng nổi tiếng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nhóm tác giả biên soạn câu chuyện 'Cánh đồng hoa' là ai?",
            "options": [
                "Văn Thành Lê",
                "Lê Anh Vinh – Bùi Thị Diễn",
                "Nguyễn Thị Kim Hòa",
                "Tác giả dân gian Tây Nguyên"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- BÀI TẬP: TỪ LOẠI (BÀI 1 LUYỆN TẬP) ---
let userWordTypes = {
    "tung-bung": null,
    "vui-choi": null,
    "huong-ung": null,
    "ron-rang": null
};
const correctWordTypes = {
    "tung-bung": "tinh-tu",
    "vui-choi": "dong-tu",
    "huong-ung": "dong-tu",
    "ron-rang": "tinh-tu"
};

window.selectWordType = function(word, type) {
    userWordTypes[word] = type;
    
    // Reset buttons styles
    let btnDt, btnTt;
    if (word === 'tung-bung') {
        btnDt = document.getElementById('btn-tb-dt');
        btnTt = document.getElementById('btn-tb-tt');
    } else if (word === 'vui-choi') {
        btnDt = document.getElementById('btn-vc-dt');
        btnTt = document.getElementById('btn-vc-tt');
    } else if (word === 'huong-ung') {
        btnDt = document.getElementById('btn-hu-dt');
        btnTt = document.getElementById('btn-hu-tt');
    } else if (word === 'ron-rang') {
        btnDt = document.getElementById('btn-rr-dt');
        btnTt = document.getElementById('btn-rr-tt');
    }

    if (btnDt && btnTt) {
        btnDt.className = "flex-1 py-2 bg-white border-2 border-gray-100 rounded-xl font-bold text-gray-800 hover:bg-blue-50 hover:border-blue-100 transition-all";
        btnTt.className = "flex-1 py-2 bg-white border-2 border-gray-100 rounded-xl font-bold text-gray-800 hover:bg-blue-50 hover:border-blue-100 transition-all";
        
        if (type === 'dong-tu') {
            btnDt.className = "flex-1 py-2 bg-blue-600 border-2 border-blue-100 text-white rounded-xl font-bold shadow-sm";
        } else {
            btnTt.className = "flex-1 py-2 bg-blue-600 border-2 border-blue-100 text-white rounded-xl font-bold shadow-sm";
        }
    }
};

window.resetWordTypes = function() {
    userWordTypes = {
        "tung-bung": null,
        "vui-choi": null,
        "huong-ung": null,
        "ron-rang": null
    };
    const ids = ['tb', 'vc', 'hu', 'rr'];
    ids.forEach(id => {
        const btnDt = document.getElementById(`btn-${id}-dt`);
        const btnTt = document.getElementById(`btn-${id}-tt`);
        if (btnDt && btnTt) {
            btnDt.className = "flex-1 py-2 bg-white border-2 border-gray-100 rounded-xl font-bold text-gray-800 hover:bg-blue-50 hover:border-blue-100 transition-all";
            btnTt.className = "flex-1 py-2 bg-white border-2 border-gray-100 rounded-xl font-bold text-gray-800 hover:bg-blue-50 hover:border-blue-100 transition-all";
        }
    });
    const fb = document.getElementById('fb-word-types');
    if (fb) fb.classList.add('hidden');
};

window.checkWordTypes = function() {
    let score = 0;
    for (const key in correctWordTypes) {
        if (userWordTypes[key] === correctWordTypes[key]) {
            score++;
        }
    }
    const fb = document.getElementById('fb-word-types');
    if (!fb) return false;
    fb.classList.remove('hidden');

    if (score === 4) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã xếp đúng nhóm từ loại của cả 4 từ.";
        fb.className = "text-xl font-bold rounded-2xl px-6 py-3 bg-emerald-600 text-white mt-4";
        return true;
    } else {
        fb.innerHTML = `⚠️ Chưa đúng rồi, em mới xếp đúng ${score}/4 từ. Hãy kiểm tra kỹ lại nhé!`;
        fb.className = "text-xl font-bold rounded-2xl px-6 py-3 bg-rose-600 text-white mt-4";
        return false;
    }
};

// --- BÀI TẬP: TỪ THAY THẾ (BÀI 2 LUYỆN TẬP) ---
const synonymsDb = {
    "tung-bung": ["nhộn nhịp", "rộn rã", "vui vẻ", "náo nhiệt", "hân hoan", "rộn ràng", "sôi động", "náo nức"],
    "vui-choi": ["nô đùa", "chơi đùa", "đùa nghịch", "giải trí", "hò hét", "nghịch ngợm", "múa hát", "sinh hoạt"],
    "huong-ung": ["đồng tình", "ủng hộ", "đồng lòng", "tham gia", "nhất trí", "theo", "nghe theo"],
    "ron-rang": ["rộn rã", "tưng bừng", "nhộn nhịp", "náo nức", "sôi động", "ồn ào", "náo nhiệt", "vang dội"]
};

window.checkSynonyms = function() {
    const tb = document.getElementById('syn-tung-bung').value.trim().toLowerCase();
    const vc = document.getElementById('syn-vui-choi').value.trim().toLowerCase();
    const hu = document.getElementById('syn-huong-ung').value.trim().toLowerCase();
    const rr = document.getElementById('syn-ron-rang').value.trim().toLowerCase();

    let score = 0;
    let errors = [];

    if (synonymsDb["tung-bung"].includes(tb)) { score++; } else { errors.push("tưng bừng"); }
    if (synonymsDb["vui-choi"].includes(vc)) { score++; } else { errors.push("vui chơi"); }
    if (synonymsDb["huong-ung"].includes(hu)) { score++; } else { errors.push("hưởng ứng"); }
    if (synonymsDb["ron-rang"].includes(rr)) { score++; } else { errors.push("rộn ràng"); }

    const fb = document.getElementById('fb-synonyms');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (score === 4) {
        fb.innerHTML = "🎉 Cực kỳ tốt! Em đã tìm được các từ đồng nghĩa thay thế rất phù hợp cho cả 4 câu.";
        fb.className = "text-xl font-bold rounded-2xl px-6 py-3 bg-emerald-600 text-white mt-4";
    } else {
        fb.innerHTML = `⚠️ Các từ sau đây cần tìm từ thay thế gần nghĩa hơn: <br> ${errors.join(', ')}`;
        fb.className = "text-xl font-bold rounded-2xl px-6 py-3 bg-rose-600 text-white mt-4";
    }
};

window.resetSynonyms = function() {
    document.getElementById('syn-tung-bung').value = '';
    document.getElementById('syn-vui-choi').value = '';
    document.getElementById('syn-huong-ung').value = '';
    document.getElementById('syn-ron-rang').value = '';
    const fb = document.getElementById('fb-synonyms');
    if (fb) fb.classList.add('hidden');
};

// --- BÀI TẬP 3: NỐI CÁC PHẦN TÓM TẮT ---
let selectedVn4ColA = null;
let selectedVn4ColB = null;
const correctMatchesVn4 = {
    "niem-vui": "desc-niem-vui",
    "nguy-co": "desc-nguy-co",
    "thuc-hien": "desc-thuc-hien",
    "ket-qua": "desc-ket-qua"
};
let userMatchesVn4 = {};

window.drawConnectionsVn4 = function() {
    const svg = document.getElementById('svg-connections-vn4');
    if (!svg) return;
    svg.innerHTML = '';
    
    const container = document.getElementById('matching-board-vn4');
    if (!container) return;
    const containerRect = container.getBoundingClientRect();

    for (const idA in userMatchesVn4) {
        const idB = userMatchesVn4[idA];
        const elA = document.getElementById(`node-vn4-A-${idA}`);
        const elB = document.getElementById(`node-vn4-B-${idB}`);
        if (!elA || !elB) continue;

        const rectA = elA.getBoundingClientRect();
        const rectB = elB.getBoundingClientRect();

        let x1, y1, x2, y2;
        
        if (rectA.right <= rectB.left) {
            x1 = rectA.right - containerRect.left;
            y1 = rectA.top + rectA.height / 2 - containerRect.top;
            x2 = rectB.left - containerRect.left;
            y2 = rectB.top + rectB.height / 2 - containerRect.top;
        } else {
            x1 = rectA.left + rectA.width / 2 - containerRect.left;
            y1 = rectA.bottom - containerRect.top;
            x2 = rectB.left + rectB.width / 2 - containerRect.left;
            y2 = rectB.top - containerRect.top;
        }

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', '#059669'); // emerald-600
        line.setAttribute('stroke-width', '5');
        line.setAttribute('stroke-linecap', 'round');
        line.setAttribute('style', 'filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.15)); transition: all 0.3s;');
        
        svg.appendChild(line);
    }
};

window.selectNodeVn4 = function(column, id) {
    if (column === 'A') {
        if (selectedVn4ColA) {
            document.getElementById(`node-vn4-A-${selectedVn4ColA}`).classList.remove('border-emerald-100', 'bg-emerald-50/50');
        }
        selectedVn4ColA = id;
        document.getElementById(`node-vn4-A-${id}`).classList.add('border-emerald-100', 'bg-emerald-50/50');
    } else {
        if (selectedVn4ColB) {
            document.getElementById(`node-vn4-B-${selectedVn4ColB}`).classList.remove('border-emerald-100', 'bg-emerald-50/50');
        }
        selectedVn4ColB = id;
        document.getElementById(`node-vn4-B-${id}`).classList.add('border-emerald-100', 'bg-emerald-50/50');
    }

    if (selectedVn4ColA && selectedVn4ColB) {
        userMatchesVn4[selectedVn4ColA] = selectedVn4ColB;
        
        const nodeA = document.getElementById(`node-vn4-A-${selectedVn4ColA}`);
        const nodeB = document.getElementById(`node-vn4-B-${selectedVn4ColB}`);
        
        nodeA.classList.remove('border-emerald-100', 'bg-emerald-50/50');
        nodeB.classList.remove('border-emerald-100', 'bg-emerald-50/50');
        
        nodeA.classList.add('border-emerald-100', 'bg-emerald-100/50');
        nodeB.classList.add('border-emerald-100', 'bg-emerald-100/50');
        
        selectedVn4ColA = null;
        selectedVn4ColB = null;

        window.drawConnectionsVn4();
    }
};

window.resetMatchingVn4 = function() {
    selectedVn4ColA = null;
    selectedVn4ColB = null;
    userMatchesVn4 = {};
    
    const nodesA = ['niem-vui', 'nguy-co', 'thuc-hien', 'ket-qua'];
    nodesA.forEach(id => {
        const el = document.getElementById(`node-vn4-A-${id}`);
        if (el) el.className = "p-5 bg-white border-4 border-gray-100 rounded-2xl font-black text-lg md:text-3xl text-left text-gray-800 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50/20 active:scale-98";
    });

    const nodesB = ['desc-niem-vui', 'desc-nguy-co', 'desc-thuc-hien', 'desc-ket-qua'];
    nodesB.forEach(id => {
        const el = document.getElementById(`node-vn4-B-${id}`);
        if (el) el.className = "p-5 bg-white border-4 border-gray-100 rounded-2xl font-bold text-base md:text-lg text-left text-gray-800 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50/20 active:scale-98";
    });

    const fb = document.getElementById('matching-feedback-vn4');
    if (fb) fb.classList.add('hidden');

    const svg = document.getElementById('svg-connections-vn4');
    if (svg) svg.innerHTML = '';
};

window.checkMatchingVn4 = function() {
    let matchCount = 0;
    for (const key in correctMatchesVn4) {
        if (userMatchesVn4[key] === correctMatchesVn4[key]) {
            matchCount++;
        }
    }

    const fb = document.getElementById('matching-feedback-vn4');
    if (!fb) return false;
    fb.classList.remove('hidden');

    if (matchCount === 4) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã nối đúng tất cả các phần tóm tắt cốt truyện.";
        fb.className = "text-xl font-bold rounded-2xl px-6 py-3 bg-emerald-600 text-white animate-bounce";
        return true;
    } else {
        fb.innerHTML = `⚠️ Chưa chính xác rồi, em mới nối đúng ${matchCount}/4 ý. Hãy ấn 'Làm lại' nhé!`;
        fb.className = "text-xl font-bold rounded-2xl px-6 py-3 bg-rose-600 text-white";
        return false;
    }
};

window.submitVn4Ex1 = function() {
    if (window.checkMatchingVn4()) {
        if (typeof window.syncRealtimeProgress === 'function') {
            window.syncRealtimeProgress({ scoreEx3: 14 }, true);
        } else {
            alert("Lỗi: Hệ thống lưu điểm chưa sẵn sàng.");
        }
    } else {
        alert("Em hãy hoàn thành đúng bài tập nối thẻ trước khi nộp bài nhé!");
    }
};

// --- BÀI TẬP 4: VIẾT BÀI HỌC VÀ CHẤM AI ---
window.checkWritingVn4 = async function() {
    const input = document.getElementById('ans-vn4-writing');
    if (!input || !input.value.trim()) {
        alert("Em hãy nhập câu trả lời của mình trước nhé!");
        return;
    }

    const fb = document.getElementById('fb-vn4-writing');
    if (!fb) return;
    fb.classList.remove('hidden');
    fb.innerHTML = `
        <div class="flex items-center gap-4 mb-4">
            <div class="animate-spin rounded-full h-8 w-8 border-4 border-white border-t-transparent"></div>
            <p class="text-xl md:text-2xl font-bold italic">Thầy E đang đọc bài làm và chuẩn bị nhận xét cho em...</p>
        </div>
    `;

    if (typeof askAI === 'function') {
        const prompt = `Em hãy đóng vai Thầy E nhận xét câu trả lời tự luận của học sinh tiểu học lớp 5.
        Câu hỏi: "Em rút ra được bài học gì cho bản thân từ câu chuyện Cánh đồng hoa?"
        Yêu cầu nhận xét:
        1. Nhận xét xem học sinh có nêu được ý thức bảo vệ môi trường, chung tay làm sạch đẹp nơi mình sinh sống hoặc bài học về sự quyết tâm hành động thay vì chỉ lo buồn thở dài hay không.
        2. Khen ngợi nếu viết từ 2-4 câu đầy đủ, đúng ngữ pháp.
        3. Gợi ý thêm (nếu cần) và cho lời khuyên sư phạm gần gũi.
        
        Bài làm của học sinh: ${input.value}`;

        await askAI('vn4-ex2', prompt, 'single', 'reading', 4);
    } else {
        fb.innerHTML = "Lỗi: Hệ thống AI Thầy E chưa sẵn sàng.";
    }
};

window.resetWritingVn4 = function() {
    const input = document.getElementById('ans-vn4-writing');
    if (input) input.value = '';
    const fb = document.getElementById('fb-vn4-writing');
    if (fb) fb.classList.add('hidden');
};

window.submitVn4Ex2 = function() {
    const input = document.getElementById('ans-vn4-writing');
    if (!input || !input.value.trim()) {
        alert("Em hãy nhập bài làm trước khi nộp bài nhé!");
        return;
    }

    if (typeof window.syncRealtimeProgress === 'function') {
        window.syncRealtimeProgress({ scoreEx4: 14 }, true);
    } else {
        alert("Lỗi: Hệ thống lưu điểm chưa sẵn sàng.");
    }
};

// --- HOÀN THÀNH TOÀN BỘ TIẾT HỌC ---
window.submitVn4Global = function() {
    if (typeof window.syncRealtimeProgress === 'function') {
        window.syncRealtimeProgress({ completed: true }, true);
    } else {
        alert("Lỗi: Hệ thống lưu điểm chưa sẵn sàng.");
    }
};

// Voice input support
let speechRecognitionVn4 = null;
window.toggleSpeechRecVn4 = function() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Trình duyệt của em không hỗ trợ chức năng nhận diện giọng nói.");
        return;
    }

    if (!speechRecognitionVn4) {
        speechRecognitionVn4 = new SpeechRecognition();
        speechRecognitionVn4.lang = 'vi-VN';
        speechRecognitionVn4.interimResults = false;
        speechRecognitionVn4.maxAlternatives = 1;

        speechRecognitionVn4.onresult = function(event) {
            const text = event.results[0][0].transcript;
            const textarea = document.getElementById('ans-vn4-writing');
            if (textarea) {
                textarea.value = (textarea.value + ' ' + text).trim();
            }
        };

        speechRecognitionVn4.onerror = function(event) {
            console.error("Speech recognition error:", event.error);
        };
    }

    try {
        speechRecognitionVn4.start();
        alert("Hệ thống bắt đầu nghe. Em hãy nói to rõ ràng nhé!");
    } catch (e) {
        console.error("Speech start error:", e);
        speechRecognitionVn4.stop();
    }
};

// Setup ResizeObserver for SVG connections
window.addEventListener('resize', () => {
    if (typeof window.drawConnectionsVn4 === 'function') {
        window.drawConnectionsVn4();
    }
});

setTimeout(() => {
    if (typeof window.drawConnectionsVn4 === 'function') {
        window.drawConnectionsVn4();
    }
    const container = document.getElementById('matching-board-vn4');
    if (container) {
        const ro = new ResizeObserver(() => {
            if (typeof window.drawConnectionsVn4 === 'function') {
                window.drawConnectionsVn4();
            }
        });
        ro.observe(container);
    }
}, 54);
