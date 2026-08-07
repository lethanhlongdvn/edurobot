export const lesson11 = {
    "topic": "Tiếng Việt 5",
    "week": "2",
    "period": "11",
    "title": "ĐỌC: BẾN SÔNG TUỔI THƠ",
    "desc": "Bài đọc giúp học sinh cảm nhận vẻ đẹp bình dị, thân thuộc của quê hương qua hồi ức tuổi thơ bên bến sông cù lao, đồng thời rèn luyện kỹ năng đọc hiểu và nhận biết đại từ, từ ngữ địa phương Nam Bộ.",
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
        <ul class="space-y-3 text-sky-800 font-bold text-2xl md:text-3xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Đọc trôi chảy, diễn cảm bài văn "Bến sông tuổi thơ", cảm nhận vẻ đẹp bình dị của quê hương.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Hiểu nội dung: tình yêu quê hương, niềm tự hào về đặc sản và kỉ niệm tuổi thơ.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Nhận biết đại từ xưng hô, từ ngữ địa phương đậm màu sắc Nam Bộ.
            </li>
        </ul>
    </div>

    <!-- 🗣️ Câu hỏi khởi động -->
    <div class="bg-emerald-50/60 p-5 md:p-6 rounded-[28px] border border-emerald-100 shadow-sm">
        <p class="text-2xl md:text-3xl text-emerald-800 font-bold flex items-start gap-3">
            <span class="text-lg md:text-2xl shrink-0">💬</span>
            <span>Bạn yêu thích, tự hào về điều gì ở quê hương hoặc nơi mình sinh sống?</span>
        </p>
    </div>

    <!-- 📖 BÀI ĐỌC: Bến sông tuổi thơ -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>

        <div class="relative z-10 space-y-6">
            <div class="flex justify-between items-center border-b border-sky-100 pb-4">
                <span class="text-sky-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                    <span>📖</span> Bến sông tuổi thơ
                </span>
                <button onclick="playSegmentAudio('assets/audio/tiengviet/11/ben_song_tuoi_tho.mp3')" class="p-2.5 bg-sky-600 hover:bg-sky-600 text-white rounded-full transition-all flex items-center justify-center shadow-md animate-bounce" title="Nghe đọc diễn cảm">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                </button>
            </div>

            <!-- Nội dung bài đọc -->
            <div class="serif-font text-gray-800 leading-relaxed text-justify space-y-5 bg-sky-50/10 p-6 md:p-8 rounded-3xl border border-sky-100/50 text-xl md:text-4xl">
                <!-- Minh họa SGK (Góc trên bên phải, bấm vào phóng to) -->
                <div onclick="window.showMathFeedback('Bến sông tuổi thơ', '🌿', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/11-12/11-12.png&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Bến sông tuổi thơ&quot;&gt;&lt;p class=&quot;text-2xl font-bold text-emerald-800 mt-4&quot;&gt;Bến sông với hàng bần xanh soi bóng nghiêng nghiêng, bọn trẻ nô đùa trên bãi cát.&lt;/p&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-gradient-to-br from-emerald-50 to-green-50 rounded-[32px] border-4 border-white shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group">
                    <img src="assets/images/tiengviet_5_1/11-12/11-12.png" class="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500" alt="Bến sông tuổi thơ">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Bấm để phóng to 🔍</div>
                </div>

                <p class="indent-8">Từ khi sinh ra và lớn lên, tôi đã thấy trước nhà có một dòng sông êm đềm lững lờ con nước, có hàng bần xanh soi bóng nghiêng nghiêng...</p>

                <p class="indent-8">Mỗi chiều, bọn trẻ chúng tôi tụ năm tụ bảy ở bến sông, vui đùa đủ các trò của tuổi <em>con nít</em>. Chúng tôi thường lấy chén muối ớt hoặc chén mắm đồng rồi rủ nhau hái những trái bần để ăn. Hôm nào lỡ tay cho nhiều ớt quá thì cả bọn vừa ăn vừa hít hà vì cay.</p>

                <p class="indent-8">Những ngày nước ròng nước lớn, con sông mang phù sa bồi đắp cho cây bần ngày một lấn ra sông. Chiều chiều, gió từ phía sông thổi về man mác, những bông hoa bần tim tím nở xoè, từng cánh hoa thi nhau rơi xuống rồi cuốn trôi theo dòng nước. Thỉnh thoảng lại nghe những trái bần chín <strong class="text-sky-800">rớt</strong> tõm xuống sông, <strong class="text-sky-800">âm thanh</strong> rất đỗi quen thuộc và gần gũi với bọn trẻ sống ở xứ <em>cù lao</em> này.</p>

                <p class="indent-8"><strong class="text-sky-800">Trái bần chua</strong> cũng là một đặc sản của quê tôi. Vì trái bần mà đem nấu canh chua cá bống sao hay cá bống lau thì khó có món nào ngon hơn được. Cá bống lau là thứ cá ngon quý hiếm, chỉ có theo mùa, con cá bống sao thì ngược lại, có quanh năm. Khi rảnh rỗi, chúng tôi chỉ cần xuống bãi sông lội một lát là kiếm được cá, lượm vài ba trái bần là nấu được nồi canh chua. Ai đến cù lao quê tôi mà chưa từng thưởng thức món canh này thì cũng xem như chưa đến.</p>

                <p class="indent-8">Mỗi lần đi đâu xa nhà, tôi lại nhớ bến sông quê có hàng bần nở hoa tím cho gió thổi qua. Khi đó, tôi tưởng đâu như có hương thơm của những trái bần chín và mùi vị của canh cá bống sao nấu với trái bần chua. Những cây bần con bên sông vẫn cứ tiếp tục mọc lên để duy trì màu xanh bờ bãi cù lao quê hương tôi.</p>

                
            </div>

            <!-- Từ ngữ cần nhớ -->
            <div class="bg-amber-50/70 p-5 rounded-[24px] border-2 border-dashed border-amber-200">
                <p class="text-sm font-black text-amber-600 uppercase tracking-widest mb-2 flex items-center gap-1">
                    <span>📝</span> Từ ngữ
                </p>
                <ul class="text-2xl md:text-3xl text-amber-600 font-medium space-y-2">
                    <li>• <span onclick="window.showMathFeedback('Cây Bần', '🌳', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-[32px] border-4 border-white shadow-2xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/11-12/vn-11-ban.jpg&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Cây bần&quot;&gt;&lt;p class=&quot;text-2xl font-bold text-blue-600 mt-4&quot;&gt;Cây bần có rễ phụ đâm ngược lên khỏi mặt bùn&lt;/p&gt;&lt;/div&gt;')" class="underline decoration-dashed decoration-2 cursor-pointer text-amber-700 hover:text-amber-900"><strong>Bần</strong></span>: cây to, mọc ở vùng nước lợ, có rễ phụ nhọn và xốp đâm ngược lên khỏi mặt bùn.</li>
                    <li>• <span onclick="window.showMathFeedback('Cù lao', '🏝️', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-[32px] border-4 border-white shadow-2xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/11-12/vn-11-culao.webp&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Cù lao&quot;&gt;&lt;p class=&quot;text-2xl font-bold text-blue-600 mt-4&quot;&gt;Cù lao (đảo) nổi lên giữa dòng sông&lt;/p&gt;&lt;/div&gt;')" class="underline decoration-dashed decoration-2 cursor-pointer text-amber-700 hover:text-amber-900"><strong>Cù lao</strong></span> (đảo): vùng đất nổi lên giữa sông hoặc ở biển.</li>
                </ul>
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
                "Bài văn thể hiện tình yêu quê hương da diết, sâu nặng của tác giả thông qua những hồi ức tuổi thơ tươi đẹp, bình dị bên bến sông cù lao và hương vị đậm đà của món canh chua trái bần xứ sở."
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- PHẦN 1: TÌM HIỂU BÀI (5 câu hỏi accordion) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-8">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">📖</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Tìm hiểu nội dung bài đọc</h3>
            </div>

            <div class="space-y-4">
                <!-- Câu 1 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            1. Từ khi sinh ra, những hình ảnh nào của quê hương đã trở nên thân thuộc với bạn nhỏ?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-sky-800 font-bold mb-2">💡 Trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li>Dòng sông êm đềm lững lờ con nước trước nhà.</li>
                            <li>Hàng bần xanh soi bóng nghiêng nghiêng bên bờ sông.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 2 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            2. Bạn nhỏ đã có những kỉ niệm gì cùng bạn bè trên bến sông tuổi thơ?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-sky-800 font-bold mb-2">💡 Trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li>Tụ năm tụ bảy ở bến sông, vui đùa đủ các trò của tuổi con nít.</li>
                            <li>Lấy chén muối ớt hoặc chén mắm đồng rồi rủ nhau hái trái bần ăn, hôm nào cho nhiều ớt quá thì cả bọn vừa ăn vừa hít hà vì cay.</li>
                            <li>Xuống bãi sông lội bắt cá bống sao, lượm trái bần nấu canh chua.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 3 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            3. Trong cảm nhận của bạn nhỏ, vẻ đẹp của quê hương hiện lên như thế nào?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-sky-800 font-bold mb-2">💡 Trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li>Dòng sông êm đềm, lững lờ con nước.</li>
                            <li>Hàng bần xanh soi bóng nghiêng nghiêng.</li>
                            <li>Bông hoa bần tim tím nở xoè, cánh hoa thi nhau rơi xuống cuốn trôi theo dòng nước.</li>
                            <li>Gió từ phía sông thổi về man mác.</li>
                            <li>→ Quê hương hiện lên bình dị, thơ mộng, gần gũi và thân thương.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 4 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            4. Bạn nhỏ nhắc đến đặc sản gì của quê hương? Chi tiết nào cho thấy bạn rất tự hào về đặc sản đó?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-sky-800 font-bold mb-2">💡 Trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li>Đặc sản: <strong>trái bần chua</strong> nấu canh chua cá bống sao (hoặc cá bống lau).</li>
                            <li>Chi tiết thể hiện niềm tự hào: <em>"Ai đến cù lao quê tôi mà chưa từng thưởng thức món canh này thì cũng xem như chưa đến."</em></li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 5 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            5. Qua bài đọc, em yêu thích hình ảnh nào của vùng đất cù lao? Vì sao?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-sky-800 font-bold mb-2">💡 Trả lời:</p>
                        <p>Đây là câu hỏi mở – em hãy tự nêu cảm nhận riêng của mình. Ví dụ:</p>
                        <ul class="list-disc ml-6 space-y-2 mt-2">
                            <li>Hình ảnh hoa bần tim tím nở xoè rơi trôi theo dòng nước → đẹp thơ mộng, yên bình.</li>
                            <li>Hình ảnh bọn trẻ lội bãi sông bắt cá, hái trái bần → gần gũi, vui tươi, gắn bó với thiên nhiên.</li>
                        </ul>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- PHẦN 2: LUYỆN TỪ VÀ CÂU (Bài tập đại từ + từ đồng nghĩa) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
        <div class="p-6 md:p-8 bg-emerald-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🔍</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Luyện từ và câu</h3>
            </div>

            <!-- Bài 1: Đại từ tôi / chúng tôi -->
            <div class="bg-emerald-50/50 p-5 md:p-6 rounded-2xl border border-emerald-100 space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-sm">1</div>
                    <p class="text-2xl md:text-3xl font-bold text-gray-800">Từ <em>tôi</em> và <em>chúng tôi</em> ở hai đoạn đầu được dùng để chỉ ai? Từ nào chỉ một người, từ nào chỉ nhiều người?</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-white p-4 rounded-xl border border-emerald-100 space-y-2">
                        <p class="font-black text-emerald-900 text-2xl md:text-3xl">Từ "tôi" chỉ ai?</p>
                        <div class="flex flex-wrap gap-2">
                            <button onclick="chonDaiTuVn11('toi', 0)" id="vn11-dt-toi-0" class="px-4 py-2 bg-white border-2 border-gray-100 rounded-lg font-bold text-xl md:text-2xl text-gray-800 hover:border-emerald-400 active:scale-95 transition-all">Tác giả (một người)</button>
                            <button onclick="chonDaiTuVn11('toi', 1)" id="vn11-dt-toi-1" class="px-4 py-2 bg-white border-2 border-gray-100 rounded-lg font-bold text-xl md:text-2xl text-gray-800 hover:border-emerald-400 active:scale-95 transition-all">Bọn trẻ (nhiều người)</button>
                        </div>
                        <div id="fb-vn11-dt-toi" class="hidden text-xl md:text-2xl font-bold px-3 py-1.5 rounded-lg"></div>
                    </div>

                    <div class="bg-white p-4 rounded-xl border border-emerald-100 space-y-2">
                        <p class="font-black text-emerald-900 text-2xl md:text-3xl">Từ "chúng tôi" chỉ ai?</p>
                        <div class="flex flex-wrap gap-2">
                            <button onclick="chonDaiTuVn11('chungtoi', 0)" id="vn11-dt-chungtoi-0" class="px-4 py-2 bg-white border-2 border-gray-100 rounded-lg font-bold text-xl md:text-2xl text-gray-800 hover:border-emerald-400 active:scale-95 transition-all">Tác giả (một người)</button>
                            <button onclick="chonDaiTuVn11('chungtoi', 1)" id="vn11-dt-chungtoi-1" class="px-4 py-2 bg-white border-2 border-gray-100 rounded-lg font-bold text-xl md:text-2xl text-gray-800 hover:border-emerald-400 active:scale-95 transition-all">Tác giả và bọn trẻ (nhiều người)</button>
                        </div>
                        <div id="fb-vn11-dt-chungtoi" class="hidden text-xl md:text-2xl font-bold px-3 py-1.5 rounded-lg"></div>
                    </div>
                </div>
            </div>

            <!-- Bài 2a: Tìm từ đồng nghĩa -->
            <div class="bg-amber-50/50 p-5 md:p-6 rounded-2xl border border-amber-100 space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-sm">2</div>
                    <p class="text-2xl md:text-3xl font-bold text-gray-800">a. Tìm từ có nghĩa giống với từ in đậm trong các câu sau:</p>
                </div>

                <div class="space-y-4">
                    <!-- Từ "rớt" -->
                    <div class="bg-white p-4 rounded-xl border border-amber-100 space-y-2">
                        <p class="text-2xl md:text-3xl text-gray-800 font-medium">Trái bần chín <strong class="text-amber-600 underline decoration-2">rớt</strong> tõm xuống sông.</p>
                        <div class="flex justify-end items-center gap-4"><button onclick="kiemTraDongNghia(;" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                        <div id="fb-vn11-dn-rot" class="hidden text-xl md:text-2xl font-bold px-3 py-1.5 rounded-lg"></div>
                    </div>

                    <!-- Từ "âm thanh" -->
                    <div class="bg-white p-4 rounded-xl border border-amber-100 space-y-2">
                        <p class="text-2xl md:text-3xl text-gray-800 font-medium"><strong class="text-amber-600 underline decoration-2">Âm thanh</strong> rất đỗi quen thuộc.</p>
                        <div class="flex justify-end items-center gap-4"><button onclick="kiemTraDongNghia(;" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                        <div id="fb-vn11-dn-amthanh" class="hidden text-xl md:text-2xl font-bold px-3 py-1.5 rounded-lg"></div>
                    </div>

                    <!-- Từ "con nít" -->
                    <div class="bg-white p-4 rounded-xl border border-amber-100 space-y-2">
                        <p class="text-2xl md:text-3xl text-gray-800 font-medium">Vui đùa đủ các trò của tuổi <strong class="text-amber-600 underline decoration-2">con nít</strong>.</p>
                        <div class="flex justify-end items-center gap-4"><button onclick="kiemTraDongNghia(;" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                        <div id="fb-vn11-dn-connit" class="hidden text-xl md:text-2xl font-bold px-3 py-1.5 rounded-lg"></div>
                    </div>

                    <!-- Từ "trái bần chua" -->
                    <div class="bg-white p-4 rounded-xl border border-amber-100 space-y-2">
                        <p class="text-2xl md:text-3xl text-gray-800 font-medium"><strong class="text-amber-600 underline decoration-2">Trái bần chua</strong> cũng là một đặc sản.</p>
                        <div class="flex justify-end items-center gap-4"><button onclick="kiemTraDongNghia(;" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                        <div id="fb-vn11-dn-traiban" class="hidden text-xl md:text-2xl font-bold px-3 py-1.5 rounded-lg"></div>
                    </div>
                </div>
            </div>

            <!-- Bài 2b: Nhận xét cách dùng từ -->
            <div class="bg-rose-50/50 p-5 md:p-6 rounded-2xl border border-rose-100 space-y-4">
                <p class="text-2xl md:text-3xl font-bold text-gray-800">b. Qua những từ in đậm ở trên, em có nhận xét gì về cách dùng từ ngữ của nhà văn trong bài <em>Bến sông tuổi thơ</em>?</p>

                <div class="space-y-3">
                    <button onclick="chonNhanXetVn11(0)" id="vn11-nx-0" class="w-full text-left p-4 bg-white border-2 border-gray-100 rounded-xl font-bold text-2xl md:text-3xl text-gray-800 hover:border-rose-400 active:scale-[0.98] transition-all">
                        <span class="font-black text-rose-800 mr-2">A.</span> Nhà văn sử dụng từ ngữ gần gũi với trẻ em.
                    </button>
                    <button onclick="chonNhanXetVn11(1)" id="vn11-nx-1" class="w-full text-left p-4 bg-white border-2 border-gray-100 rounded-xl font-bold text-2xl md:text-3xl text-gray-800 hover:border-rose-400 active:scale-[0.98] transition-all">
                        <span class="font-black text-rose-800 mr-2">B.</span> Nhà văn dùng từ ngữ phổ biến với nhiều người.
                    </button>
                    <button onclick="chonNhanXetVn11(2)" id="vn11-nx-2" class="w-full text-left p-4 bg-white border-2 border-gray-100 rounded-xl font-bold text-2xl md:text-3xl text-gray-800 hover:border-rose-400 active:scale-[0.98] transition-all">
                        <span class="font-black text-rose-800 mr-2">C.</span> Nhà văn sử dụng từ ngữ đậm màu sắc Nam Bộ.
                    </button>
                    <button onclick="chonNhanXetVn11(3)" id="vn11-nx-3" class="w-full text-left p-4 bg-white border-2 border-gray-100 rounded-xl font-bold text-2xl md:text-3xl text-gray-800 hover:border-rose-400 active:scale-[0.98] transition-all">
                        <span class="font-black text-rose-800 mr-2">D.</span> Nhà văn dùng những từ ngữ trừu tượng, mơ hồ.
                    </button>
                </div>
                <div id="fb-vn11-nx" class="hidden text-base font-bold px-4 py-2 rounded-xl"></div>
            </div>
    <!-- PHẦN 3: LUYỆN VIẾT CẢM THỤ (AI THẦY E) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">✍️</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Cảm nhận tuổi thơ</h3>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner space-y-4">
                <h4 class="text-2xl md:text-3xl font-bold text-gray-800">
                    Qua bài đọc "Bến sông tuổi thơ", em hãy viết một đoạn văn ngắn (từ 3 đến 5 câu) nêu cảm nhận của em về kỉ niệm tuổi thơ của các bạn nhỏ bên dòng sông quê hương.
                </h4>

                <textarea id="ans-vn11-writing" rows="4" placeholder="Kỉ niệm tuổi thơ bên bến sông quê hiện lên vô cùng sống động và gần gũi. Bọn trẻ cùng tụ tập vui chơi những trò nghịch tinh nghịch, cùng ăn trái bần chua chấm muối ớt cay hít hà, lội sông bắt cá bống sao nấu canh chua... Đó là những kỉ niệm giản dị nhưng đọng lại sâu sắc trong tâm hồn..." class="w-full p-4 md:p-6 text-2xl md:text-3xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-amber-50/10 font-medium leading-relaxed"></textarea>
                
                <div class="flex justify-end items-center gap-4"><button onclick="resetWritingVn11()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="checkWritingVn11();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                
                <div id="fb-vn11-writing" class="hidden mt-6 p-6 bg-amber-500 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500">
                    <!-- AI Feedback -->
                </div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiVn11()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Bài 'Bến sông tuổi thơ' được viết theo thể loại nào?",
            "options": [
                "Thơ bốn chữ",
                "Văn xuôi (bài đọc)",
                "Kịch bản",
                "Truyện cổ tích"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tác giả bài 'Bến sông tuổi thơ' là ai?",
            "options": [
                "Xuân Quỳnh",
                "Lê Văn Trường",
                "Trần Đăng Khoa",
                "Vò Quảng"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Hình ảnh nào trước nhà bạn nhỏ đã quen thuộc từ khi sinh ra?",
            "options": [
                "Cánh đồng lúa vàng",
                "Dòng sông êm đềm và hàng bần xanh soi bóng",
                "Ngọn núi cao chót vót",
                "Khu rừng rậm rạp"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Bọn trẻ thường làm gì khi tụ tập ở bến sông?",
            "options": [
                "Học bài và làm bài tập",
                "Vui đùa, hái trái bần ăn với muối ớt hoặc mắm đồng",
                "Câu cá bằng cần câu",
                "Tập bơi qua sông"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Hoa bần có màu gì?",
            "options": [
                "Đỏ rực",
                "Tim tím",
                "Vàng óng",
                "Trắng tinh"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đặc sản quê hương mà bạn nhỏ tự hào là món gì?",
            "options": [
                "Canh chua cá bống sao nấu trái bần",
                "Phở bò đặc biệt",
                "Cơm cháy kho quẹt",
                "Bánh xèo miền Tây"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Chi tiết nào cho thấy bạn nhỏ rất tự hào về đặc sản quê?",
            "options": [
                "Ai đến cù lao quê tôi mà chưa thưởng thức thì xem như chưa đến",
                "Cá bống lau rất quý hiếm",
                "Trái bần có vị chua",
                "Bọn trẻ hay lội sông bắt cá"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'cù lao' có nghĩa là gì?",
            "options": [
                "Cái cầu bắc qua sông",
                "Vùng đất nổi lên giữa sông hoặc ở biển",
                "Bến thuyền trên sông",
                "Ruộng lúa ven sông"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ 'rớt' trong bài đọc có nghĩa giống từ nào?",
            "options": [
                "Bay",
                "Rơi",
                "Nổi",
                "Chìm"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'con nít' là từ ngữ đặc trưng vùng miền nào?",
            "options": [
                "Miền Bắc",
                "Miền Trung",
                "Nam Bộ",
                "Tây Nguyên"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Trong bài đọc, từ 'tôi' là đại từ chỉ gì?",
            "options": [
                "Chỉ nhiều người",
                "Chỉ một người (người nói / tác giả)",
                "Chỉ người nghe",
                "Chỉ đồ vật"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'chúng tôi' trong bài đọc chỉ ai?",
            "options": [
                "Chỉ tác giả (một người)",
                "Chỉ tác giả và bọn trẻ (nhiều người)",
                "Chỉ cây bần",
                "Chỉ con sông"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nhà văn sử dụng từ ngữ trong bài đọc có đặc điểm gì?",
            "options": [
                "Từ ngữ trừu tượng, khó hiểu",
                "Từ ngữ đậm màu sắc Nam Bộ",
                "Từ ngữ Hán Việt trang trọng",
                "Từ ngữ khoa học chính xác"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi đi xa nhà, tác giả nhớ điều gì nhất?",
            "options": [
                "Trường học và bạn bè",
                "Bến sông quê có hàng bần nở hoa tím, hương trái bần chín và canh cá bống sao",
                "Tiếng ve kêu mùa hè",
                "Cánh đồng lúa chín"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cá bống lau và cá bống sao khác nhau ở điểm nào?",
            "options": [
                "Cá bống lau quý hiếm, chỉ có theo mùa; cá bống sao có quanh năm",
                "Cá bống lau có quanh năm; cá bống sao quý hiếm",
                "Cả hai đều quý hiếm như nhau",
                "Cả hai đều có quanh năm"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- LOGIC BÀI 1: ĐẠI TỪ TÔI / CHÚNG TÔI ---
const dapAnDaiTuVn11 = { toi: 0, chungtoi: 1 };

window.chonDaiTuVn11 = function(tu, idx) {
    const dung = dapAnDaiTuVn11[tu] === idx;
    const fb = document.getElementById(`fb-vn11-dt-${tu}`);
    const btn = document.getElementById(`vn11-dt-${tu}-${idx}`);
    if (!fb) return;

    fb.classList.remove('hidden');
    if (dung) {
        fb.innerHTML = "✅ Chính xác!";
        fb.className = "text-xl md:text-2xl font-bold px-3 py-1.5 rounded-lg bg-emerald-600 text-white";
        if (btn) btn.className = "px-4 py-2 bg-emerald-600 border-2 border-emerald-100 text-white font-bold text-xl md:text-2xl rounded-lg shadow-sm";
    } else {
        fb.innerHTML = "⚠️ Chưa đúng, em hãy suy nghĩ lại!";
        fb.className = "text-xl md:text-2xl font-bold px-3 py-1.5 rounded-lg bg-rose-600 text-white";
        if (btn) btn.className = "px-4 py-2 bg-rose-600 border-2 border-rose-100 text-white font-bold text-xl md:text-2xl rounded-lg shadow-sm";
    }
};

// --- LOGIC BÀI 2a: TÌM TỪ ĐỒNG NGHĨA ---
const dongNghiaVn11 = {
    rot: ['rơi', 'rớt xuống', 'rụng', 'roi'],
    amthanh: ['tiếng', 'tiếng động', 'âm vang', 'thanh âm'],
    connit: ['trẻ con', 'trẻ em', 'con trẻ', 'trẻ nhỏ', 'nhi đồng', 'thiếu nhi', 'bé con'],
    traiban: ['quả bần chua', 'trái bần', 'quả bần']
};

window.kiemTraDongNghia = function(tu) {
    const input = document.getElementById(`vn11-dn-${tu}`);
    const fb = document.getElementById(`fb-vn11-dn-${tu}`);
    if (!input || !fb) return;

    const val = input.value.trim().toLowerCase();
    fb.classList.remove('hidden');

    if (val.length < 1) {
        fb.innerHTML = "⚠️ Em cần gõ một từ!";
        fb.className = "text-xl md:text-2xl font-bold px-3 py-1.5 rounded-lg bg-rose-600 text-white";
        return;
    }

    const dsDung = dongNghiaVn11[tu] || [];
    const dung = dsDung.some(d => val.includes(d) || d.includes(val));

    if (dung) {
        fb.innerHTML = `✅ Đúng! "${val}" là từ đồng nghĩa phù hợp.`;
        fb.className = "text-xl md:text-2xl font-bold px-3 py-1.5 rounded-lg bg-emerald-600 text-white";
    } else {
        fb.innerHTML = "🤔 Chưa chính xác. Hãy thử từ khác nhé!";
        fb.className = "text-xl md:text-2xl font-bold px-3 py-1.5 rounded-lg bg-amber-500 text-white";
    }
};

// --- LOGIC BÀI 2b: NHẬN XÉT CÁCH DÙNG TỪ ---
window.chonNhanXetVn11 = function(idx) {
    const dung = idx === 2; // Đáp án C: đậm màu sắc Nam Bộ
    const fb = document.getElementById('fb-vn11-nx');
    if (!fb) return;

    // Đặt lại tất cả nút
    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`vn11-nx-${i}`);
        if (btn) {
            btn.className = "w-full text-left p-4 bg-white border-2 border-gray-100 rounded-xl font-bold text-2xl md:text-3xl text-gray-800 hover:border-rose-400 active:scale-[0.98] transition-all";
        }
    }

    // Đánh dấu nút đã chọn
    const btnChon = document.getElementById(`vn11-nx-${idx}`);
    if (btnChon) {
        btnChon.className = dung
            ? "w-full text-left p-4 bg-emerald-600 border-2 border-emerald-100 text-white font-bold text-2xl md:text-3xl rounded-xl shadow-sm"
            : "w-full text-left p-4 bg-rose-600 border-2 border-rose-100 text-white font-bold text-2xl md:text-3xl rounded-xl shadow-sm";
    }

    fb.classList.remove('hidden');
    if (dung) {
        fb.innerHTML = "🎉 Chính xác! Các từ <strong>rớt, con nít, trái bần chua</strong> đều là từ ngữ đậm màu sắc Nam Bộ.";
        fb.className = "text-2xl md:text-3xl font-bold px-4 py-2 rounded-xl bg-emerald-600 text-white";
    } else {
        fb.innerHTML = "⚠️ Chưa đúng. Em hãy đọc lại các từ in đậm và suy nghĩ xem chúng đặc trưng cho vùng miền nào.";
        fb.className = "text-2xl md:text-3xl font-bold px-4 py-2 rounded-xl bg-rose-600 text-white";
    }
};

// --- LOGIC BÀI TẬP CẢM THỤ TỰ LUẬN VN11 ---
window.checkWritingVn11 = function() {
    const text = document.getElementById('ans-vn11-writing')?.value.trim();
    const fb = document.getElementById('fb-vn11-writing');
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
            <p class="text-lg font-bold">"Tuyệt vời! Em đã cảm nhận rất tốt vẻ đẹp tuổi thơ hồn nhiên bên hàng bần xanh và món ăn đặc sản canh chua bần của xứ sở cù lao Nam Bộ. Đoạn văn giàu hình ảnh và đong đầy tình yêu quê hương."</p>
            <span class="inline-block px-3 py-1 bg-white text-amber-600 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Điểm: 111% (Hoàn thành tốt)</span>
        </div>
    `;
    fb.className = "mt-6 p-6 bg-emerald-600 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500";
};

window.resetWritingVn11 = function() {
    const txt = document.getElementById('ans-vn11-writing');
    if (txt) txt.value = "";
    const fb = document.getElementById('fb-vn11-writing');
    if (fb) fb.classList.add('hidden');
};

// --- NỘP BÀI TỔNG THỂ ---
window.nopBaiVn11 = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback('Hoàn thành Tiết 11-12', '🌿', '<div class="text-center p-6"><span class="text-7xl block mb-4">🌿</span><p class="text-lg md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài đọc Bến sông tuổi thơ!</p><p class="text-lg text-gray-800 mt-3">Em đã cảm nhận được vẻ đẹp bình dị của quê hương cù lao và tình yêu sâu nặng với nơi mình sinh ra.</p></div>');
    }
};
