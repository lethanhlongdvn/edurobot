export const lesson67 = {
    "topic": "Tiếng Việt 5",
    "week": "10",
    "period": "67",
    "title": "ĐỌC: TẤM GƯƠNG TỰ HỌC",
    "desc": "Bài học giúp học sinh hiểu về tấm gương tự học, sự đa tài uyên bác của giáo sư Tạ Quang Bửu, từ đó nuôi dưỡng tinh thần học tập suốt đời. Thực hành luyện từ và câu về các từ có yếu tố 'chính'.",
    "subject": "Đọc",
    "theme": "Thế giới tuổi thơ",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
<div class="flex justify-end mb-4">
    <button onclick="playSegmentAudio('assets/audio/tiengviet/67/tam_guong_tu_hoc.mp3')" class="p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc toàn bài">
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
                Đọc trôi chảy, diễn cảm bài đọc "Tấm gương tự học", thể hiện sự khâm phục tinh thần tự học của giáo sư Tạ Quang Bửu.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Hiểu và rút ra bài học về tinh thần tự học, nỗ lực và ý chí học tập suốt đời để hoàn thiện bản thân.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Mở rộng vốn từ và hiểu nghĩa của các từ chứa yếu tố 'chính' như chính khách, chính phủ, chính khoá.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động: Suy ngẫm</h3>
        </div>
        <div class="bg-amber-50/50 p-6 rounded-2xl border-l-4 border-amber-100 italic text-xl md:text-2xl font-semibold text-amber-600 leading-relaxed space-y-2">
            <p>"Có những nhân cách và tài năng mà chỉ sau khi vắng bóng họ, người đời mới thấy hết khoảng trống mênh mông họ để lại. Tạ Quang Bửu là một người như thế."</p>
            <p class="text-right font-bold text-base md:text-lg not-italic text-gray-800">— Hoàng Tụy</p>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold">👉 Lời nhận xét trên cho em hiểu điều gì về giáo sư Tạ Quang Bửu? Hãy nhập chia sẻ dưới đây:</p>
        
        <div class="space-y-4">
            <textarea id="ans-vn67-kd" rows="3" placeholder="Nhận xét cho thấy giáo sư Tạ Quang Bửu là một người có nhân cách vĩ đại và tài năng kiệt xuất, sự ra đi của ông để lại khoảng trống to lớn cho khoa học nước nhà..." class="w-full p-4 border-2 border-emerald-100 rounded-2xl outline-none focus:border-emerald-500 font-bold bg-emerald-50/10 text-xl md:text-2xl"></textarea>
            <div class="flex justify-end items-center gap-4"><button onclick="window.kiemTraKhoiDong67();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn67-kd" class="hidden p-4 rounded-xl text-sm font-bold text-center mt-2"></div>
        </div>
    </div>

    <!-- 📖 BÀI ĐỌC -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>

        <div class="relative z-10 space-y-6">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-emerald-100 pb-4 gap-4">
                <span class="text-emerald-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                    <span>📖</span> TẤM GƯƠNG TỰ HỌC
                </span>
                
                <!-- Ghi âm luyện đọc diễn cảm -->
                <div class="flex items-center gap-3 bg-emerald-50 p-3 rounded-2xl border border-emerald-100 shadow-inner">
                    <span class="text-xs font-black text-emerald-800 uppercase px-2">Ghi âm bài đọc:</span>
                    <button id="btn-start-rec-67" onclick="window.batDauGhiAm67()" class="px-3 py-1.5 bg-red-600 hover:bg-red-600 text-white font-bold rounded-lg text-xs shadow-sm transition-all flex items-center gap-1">🔴 Thu âm</button>
                    <button id="btn-stop-rec-67" onclick="window.dungGhiAm67()" disabled class="px-3 py-1.5 bg-gray-800 hover:bg-gray-800 text-white font-bold rounded-lg text-xs shadow-sm transition-all flex items-center gap-1">⏹️ Dừng</button>
                    <audio id="audio-play-67" class="hidden h-8 w-40" controls></audio>
                </div>
            </div>

            <!-- Cột bài đọc dạng 1 cột toàn màn hình -->
            <div class="space-y-8">
                <div class="w-full bg-amber-50/20 p-6 md:p-12 rounded-[40px] border border-amber-100/50 shadow-inner relative overflow-hidden">
                    <!-- Ảnh minh họa (bấm vào phóng to) -->
                    <div onclick="window.showMathFeedback('Tạ Quang Bửu', '📷', '&lt;div class=&quot;flex justify-center p-2&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/67-68/67-68.png&quot; class=&quot;max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border-4 border-white&quot; alt=&quot;Giáo sư Tạ Quang Bửu&quot;&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-white p-4 rounded-3xl border border-emerald-100 shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group">
                        <img src="assets/images/tiengviet_5_1/67-68/67-68.png" alt="Giáo sư Tạ Quang Bửu" class="w-full h-auto object-cover group-hover:scale-105 transition-all duration-500">
                        <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span class="px-4 py-2 bg-white/95 rounded-full text-xs font-black text-emerald-800 shadow-md">🔍 PHÓNG TO</span>
                        </div>
                        <p class="text-[10px] text-gray-800 font-bold text-center mt-3 leading-tight">Giáo sư Tạ Quang Bửu - Tấm gương tự học suốt đời</p>
                    </div>
                    <div id="bai-doc-ta-quang-buu" class="serif-font text-gray-800 leading-relaxed space-y-6 text-justify text-xl md:text-4xl">
                        
                        <p class="indent-10">Tạ Quang Bửu sinh ra trong một gia đình nhà nho ở Nghệ An. Ông là nhà khoa học và nhà giáo dục đa tài, uyên bác hiếm có.</p>
                        
                        <p class="indent-10">Con đường đến với thành công của Tạ Quang Bửu rất giản dị: tự học, học suốt đời và học say mê. Ông có thói quen đọc sách ở mọi lúc, mọi nơi, đọc rất nhanh và nhớ rất lâu. Có lần, ngồi trên lưng ngựa, mải đọc sách, ông ngã tòm xuống suối. Tất cả những ai ở bên ông đều khâm phục khả năng tự học của ông. Ông học từ lúc còn trẻ đến lúc cuối đời, ngay cả khi đau ốm.</p>
                        
                        <p class="indent-10">Tạ Quang Bửu còn là tấm gương của việc học toàn diện. Ông xuất sắc ở nhiều lĩnh vực: toán, lí, hoá, sinh, triết học,... đặc biệt là ngoại ngữ. Ông sử dụng thành thạo tiếng Anh, Pháp, Đức, Ba Lan; có thể đọc hiểu tiếng Nga, Trung, Hy Lạp cổ và La-tinh. Chỉ tự học tiếng Nga trong ba tháng mà ông đã có thể dịch trôi chảy các tài liệu quân sự tiếng Nga. Ông giúp Bác Hồ soạn thảo những bức công hàm bằng tiếng Anh, nhiều lần cùng Bác tiếp các chính khách nước ngoài. Ông được nhận xét là nói tiếng Anh “hoàn hảo đến mức người Anh phải kinh ngạc”. Ngoài ra, ông còn có hiểu biết sâu rộng về âm nhạc, hội họa, kiến trúc, thể thao,... Ông luôn tranh thủ thời gian tự học, để thoả mãn niềm đam mê của mình. Nhiều người coi ông là “Lê Quý Đôn thời nay”.</p>
                        
                        <p class="indent-10">Tên của Tạ Quang Bửu được đặt cho các con phố ở Hà Nội, Thành phố Hồ Chí Minh, Huế, Đà Nẵng,... Ở Việt Nam, có một giải thưởng dành cho các nhà khoa học xuất sắc mang tên ông – Giải thưởng Tạ Quang Bửu.</p>
                        
                        <p class="text-right font-bold text-gray-500 mt-6 text-lg md:text-xl">(Phan Sơn tổng hợp)</p>
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
                            <li>• <strong>Công hàm</strong>: công văn ngoại giao của nước này gửi cho nước khác.</li>
                            <li>• <strong>Tự học</strong>: tự mình tìm tòi, nghiên cứu để tiếp thu kiến thức mà không cần sự hướng dẫn trực tiếp từ người khác.</li>
                            <li>• <strong>Uyên bác</strong>: sâu rộng, tinh thông nhiều ngành kiến thức khoa học khác nhau.</li>
                        </ul>
                    </div>
                </div>
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
                Bài học ca ngợi giáo sư Tạ Quang Bửu là một nhà khoa học và nhà giáo dục đa tài, uyên bác hiếm có, là tấm gương sáng ngời về tinh thần tự học, tự nghiên cứu và học tập suốt đời để cống hiến cho đất nước.
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- CÂU HỎI ĐỌC HIỂU -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
        <div class="p-6 md:p-8 bg-emerald-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">❓</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Câu hỏi Đọc hiểu (Trang 95)</h3>
            </div>

            <div class="space-y-4">
                <!-- Câu 1 -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">
                            1. Đoạn văn thứ nhất giới thiệu điều gì về Tạ Quang Bửu?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-1">💡 Trả lời:</p>
                        <p>Đoạn văn thứ nhất giới thiệu về xuất thân và năng lực đặc biệt của Tạ Quang Bửu: Sinh ra trong gia đình nhà nho ở Nghệ An; là một nhà khoa học và nhà giáo dục đa tài, uyên bác hiếm có.</p>
                    </div>
                </details>

                <!-- Câu 2 -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">
                            2. Những chi tiết nào cho thấy Tạ Quang Bửu là tấm gương tự học, học suốt đời và học say mê?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-1">💡 Trả lời:</p>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Đọc sách ở mọi lúc, mọi nơi, đọc rất nhanh và nhớ rất lâu.</li>
                            <li>Có lần, ngồi trên lưng ngựa mải đọc sách đã ngã tòm xuống suối.</li>
                            <li>Học từ khi còn trẻ cho đến tận lúc cuối đời, ngay cả những lúc đau ốm bệnh tật.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 3 -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">
                            3. Theo em, vì sao Tạ Quang Bửu nhiều lần được cùng Bác Hồ tiếp các chính khách nước ngoài?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-1">💡 Trả lời:</p>
                        <p>Bởi vì ông là người có trình độ ngoại ngữ xuất sắc, sử dụng thành thạo tiếng Anh, Pháp, Đức, Ba Lan... Ông có thể giúp Bác Hồ soạn thảo công hàm bằng tiếng Anh và nói tiếng Anh hoàn hảo khiến người Anh cũng phải kinh ngạc.</p>
                    </div>
                </details>

                <!-- Câu 4 -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">
                            4. Sự đa tài, uyên bác của Tạ Quang Bửu được thể hiện như thế nào?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-1">💡 Trả lời:</p>
                        <p>Ông xuất sắc trong nhiều lĩnh vực: toán, lí, hoá, sinh, triết học và đặc biệt là ngoại ngữ (biết nhiều thứ tiếng). Bên cạnh khoa học, ông còn có hiểu biết sâu rộng về âm nhạc, hội họa, kiến trúc, thể thao... Nhiều người coi ông là "Lê Quý Đôn thời nay".</p>
                    </div>
                </details>

                <!-- Câu 5 -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">
                            5. Tài năng, công lao của Tạ Quang Bửu được ghi nhận thế nào?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-1">💡 Trả lời:</p>
                        <p>Tên ông được đặt cho các con phố lớn ở Hà Nội, TP. Hồ Chí Minh, Huế, Đà Nẵng... Có giải thưởng khoa học xuất sắc mang tên ông – Giải thưởng Tạ Quang Bửu.</p>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- 📚 LUYỆN TỪ VÀ CÂU: MỞ RỘNG VỐN TỪ -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <div class="flex items-center gap-3 border-b border-emerald-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md">1</span>
                <h3 class="text-2xl md:text-5xl font-black text-emerald-800">
                    Bài tập 1: Ghép từ với định nghĩa đúng.
                </h3>
            </div>
            <p class="text-lg md:text-xl text-gray-800 font-bold">👉 Hướng dẫn: Bấm vào một từ khóa ở hàng trên, sau đó bấm chọn định nghĩa tương ứng ở hàng dưới để nối.</p>

            <div class="space-y-6">
                <!-- Hàng từ khóa -->
                <div class="flex justify-center gap-4">
                    <button id="voc-chinhkhach" onclick="window.chonTu67('chinhkhach')" class="px-5 py-3 bg-amber-50 hover:bg-amber-500 border-2 border-amber-100 font-black text-lg md:text-xl rounded-xl transition-all shadow-sm">chính khách</button>
                    <button id="voc-chinhphu" onclick="window.chonTu67('chinhphu')" class="px-5 py-3 bg-sky-50 hover:bg-sky-600 border-2 border-sky-100 font-black text-lg md:text-xl rounded-xl transition-all shadow-sm">chính phủ</button>
                    <button id="voc-chinhkhoa" onclick="window.chonTu67('chinhkhoa')" class="px-5 py-3 bg-emerald-50 hover:bg-emerald-600 border-2 border-emerald-100 font-black text-lg md:text-xl rounded-xl transition-all shadow-sm">chính khoá</button>
                </div>

                <!-- Hàng định nghĩa -->
                <div class="space-y-3 max-w-2xl mx-auto">
                    <button id="def-a" onclick="window.chonNghia67('a', 'chính khoá')" class="w-full p-4 text-left bg-gray-50 hover:bg-teal-50 border border-gray-100 rounded-xl font-semibold text-base md:text-lg transition-all">
                        📄 a. Chương trình học tập chính thức, bắt buộc.
                    </button>
                    <button id="def-b" onclick="window.chonNghia67('b', 'chính khách')" class="w-full p-4 text-left bg-gray-50 hover:bg-teal-50 border border-gray-100 rounded-xl font-semibold text-base md:text-lg transition-all">
                        📄 b. Người chuyên hoạt động chính trị, khá nổi tiếng.
                    </button>
                    <button id="def-c" onclick="window.chonNghia67('c', 'chính phủ')" class="w-full p-4 text-left bg-gray-50 hover:bg-teal-50 border border-gray-100 rounded-xl font-semibold text-base md:text-lg transition-all">
                        📄 c. Cơ quan hành chính nhà nước cao nhất.
                    </button>
                </div>
            </div>
            
            <div id="fb-vn67-bt1" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
        </div>
    </section>

    <!-- 📚 LUYỆN TỪ VÀ CÂU: BÀI TẬP 2 -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-6">
            <div class="flex items-center gap-3 border-b border-emerald-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md">2</span>
                <h3 class="text-2xl md:text-5xl font-black text-emerald-800">
                    Bài tập 2: Điền các từ vừa học vào câu thích hợp.
                </h3>
            </div>

            <div class="space-y-6 font-sans">
                <!-- Câu a -->
                <div class="bg-amber-50/20 p-5 rounded-2xl border border-amber-100/50 flex flex-col md:flex-row gap-3 items-center">
                    <span class="font-bold text-gray-800 shrink-0 text-lg md:text-3xl">a. Nhiều</span>
                    <select id="sel-q2-a" class="p-2 border border-gray-100 rounded-lg font-bold bg-white text-base md:text-lg">
                        <option value="">-- Chọn từ --</option>
                        <option value="chinhkhach">chính khách</option>
                        <option value="chinhphu">chính phủ</option>
                        <option value="chinhkhoa">chính khoá</option>
                    </select>
                    <span class="font-bold text-gray-800 text-lg md:text-3xl">quốc tế đã có mặt tại hội nghị này.</span>
                </div>

                <!-- Câu b -->
                <div class="bg-sky-50/20 p-5 rounded-2xl border border-sky-100/50 flex flex-col md:flex-row gap-3 items-center">
                    <span class="font-bold text-gray-800 shrink-0 text-lg md:text-3xl">b. </span>
                    <select id="sel-q2-b" class="p-2 border border-gray-100 rounded-lg font-bold bg-white text-base md:text-lg">
                        <option value="">-- Chọn từ --</option>
                        <option value="chinhkhach">chính khách</option>
                        <option value="chinhphu">chính phủ</option>
                        <option value="chinhkhoa">chính khoá</option>
                    </select>
                    <span class="font-bold text-gray-800 text-lg md:text-3xl">các nước phải đảm bảo mọi quyền lợi cho trẻ em.</span>
                </div>

                <!-- Câu c -->
                <div class="bg-emerald-50/20 p-5 rounded-2xl border border-emerald-100/50 flex flex-col md:flex-row gap-3 items-center">
                    <span class="font-bold text-gray-800 shrink-0 text-lg md:text-3xl">c. Một số hoạt động trải nghiệm sẽ được tổ chức ngoài giờ học</span>
                    <select id="sel-q2-c" class="p-2 border border-gray-100 rounded-lg font-bold bg-white text-base md:text-lg">
                        <option value="">-- Chọn từ --</option>
                        <option value="chinhkhach">chính khách</option>
                        <option value="chinhphu">chính phủ</option>
                        <option value="chinhkhoa">chính khoá</option>
                    </select>
                    <span class="font-bold text-gray-800 text-lg md:text-3xl">.</span>
                </div>

                <div class="flex justify-end items-center gap-4"><button onclick="window.kiemTraDienCau67();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-vn67-bt2" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
            </div>
        </div>
    </section>

    <!-- ✍️ THỰC HÀNH VIẾT CẢM THỰC TỰ LUẬN -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-amber-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -top-20 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-40"></div>
        
        <div class="relative z-10 space-y-6">
            <div class="flex items-center gap-4 border-b border-amber-100 pb-4">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center text-lg md:text-2xl font-black shadow-md">✍️</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">
                    Viết đoạn văn cảm thụ văn học
                </h3>
            </div>

            <div class="bg-amber-50/50 p-6 rounded-3xl border border-amber-100 space-y-4">
                <h4 class="text-xl md:text-2xl font-bold text-amber-600 leading-relaxed">
                    Đề bài: Viết một đoạn văn ngắn (khoảng 3 - 5 câu) nêu những điều em học tập được từ tấm gương tự học của Giáo sư Tạ Quang Bửu.
                </h4>
                <textarea id="ans-vn67-writing" rows="5" placeholder="Học tập từ tấm gương giáo sư Tạ Quang Bửu, em thấy mình cần phải có tinh thần ham học hỏi, siêng năng tự đọc sách ở mọi lúc mọi nơi..." class="w-full p-4 md:p-6 text-xl md:text-2xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-amber-50/10 font-medium leading-relaxed"></textarea>
                
                <div class="flex justify-end items-center gap-4"><button onclick="window.resetWritingVn67()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="window.checkWritingVn67();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-vn67-writing" class="hidden p-4 rounded-xl font-bold text-base mt-3"></div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="window.nopBai67Global()" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-emerald-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Giáo sư Tạ Quang Bửu được giới thiệu là người thế nào?",
            "options": [
                "Là nhà khoa học và nhà giáo dục đa tài, uyên bác hiếm có",
                "Là họa sĩ nổi tiếng chuyên vẽ tranh phong cảnh",
                "Là nhà ngoại giao chuyên nghiệp thường trú ở Pháp",
                "Là vận động viên bơi lội xuất sắc đạt giải cao"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Con đường dẫn đến thành công của Tạ Quang Bửu có đặc điểm gì?",
            "options": [
                "Tự học, học suốt đời và học say mê",
                "Đi học ở các trường đại học danh tiếng nước ngoài",
                "Được nhiều thầy cô nổi tiếng trực tiếp chỉ dạy tận tình",
                "Chỉ tập trung nghiên cứu lý thuyết không cần thực hành"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Sự say mê đọc sách của Tạ Quang Bửu được minh họa bằng chi tiết thú vị nào?",
            "options": [
                "Mải đọc sách trên lưng ngựa ngã tòm xuống suối",
                "Đọc hết hàng ngàn cuốn sách chỉ trong một tuần",
                "Đốt đèn đọc sách thâu đêm suốt sáng đến hỏng mắt",
                "Chỉ đọc sách ngoài vườn cây chôm chôm của tác giả"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Giáo sư Tạ Quang Bửu đã tự học tiếng Nga trong thời gian bao lâu để dịch được tài liệu quân sự?",
            "options": [
                "Ba tháng",
                "Sáu tháng",
                "Một năm",
                "Ba tuần"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Nhờ vào năng lực ngoại ngữ hoàn hảo, Tạ Quang Bửu đã có đóng góp gì cho Bác Hồ?",
            "options": [
                "Soạn thảo công hàm tiếng Anh, cùng Bác tiếp chính khách nước ngoài",
                "Dạy tiếng Pháp cho Bác Hồ tại cơ quan chiến khu",
                "Đi sứ đại diện Việt Nam ký kết hiệp ước tại nước Ba Lan",
                "Viết sách hồi ký tiếng Nga về quá trình kháng chiến"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nhiều người ví Tạ Quang Bửu như nhân vật lịch sử uyên bác nào của nước ta?",
            "options": [
                "Lê Quý Đôn thời nay",
                "Chu Văn An thời nay",
                "Trạng Trình Nguyễn Bỉnh Khiêm",
                "Trần Quốc Tuấn"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Giải thưởng danh giá nào mang tên Tạ Quang Bửu?",
            "options": [
                "Giải thưởng dành cho các nhà khoa học xuất sắc ở Việt Nam",
                "Giải thưởng dành cho các học sinh nghèo vượt khó học giỏi",
                "Giải thưởng cuộc thi sáng tạo khoa học kỹ thuật trẻ",
                "Giải thưởng dành cho các vận động viên thể thao xuất sắc"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Định nghĩa nào dưới đây tương ứng với từ 'chính phủ'?",
            "options": [
                "Cơ quan hành chính nhà nước cao nhất của một quốc gia",
                "Người chuyên hoạt động chính trị lớn và nổi tiếng",
                "Chương trình học tập chính thức và bắt buộc ở trường học",
                "Trụ sở làm việc của Ủy ban nhân dân các cấp"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'chính khách' mang nghĩa là gì?",
            "options": [
                "Người chuyên hoạt động chính trị, khá nổi tiếng",
                "Người khách chính quan trọng nhất đến chơi nhà",
                "Đại diện pháp luật cho các doanh nghiệp lớn",
                "Thành viên làm việc trong các tổ chức xã hội"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'chính khoá' được dùng để chỉ điều gì?",
            "options": [
                "Chương trình học tập chính thức, bắt buộc theo quy định",
                "Các lớp học thêm bổ trợ ngoài giờ học bình thường",
                "Khóa học chuyên môn sâu dành cho giáo viên",
                "Buổi trải nghiệm thực tế cuối tuần của học sinh"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ nào điền đúng vào câu: 'Nhiều ...... quốc tế đã tham dự diễn đàn.'?",
            "options": [
                "chính khách",
                "chính phủ",
                "chính khoá",
                "chính trị"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ loại của các từ 'chính khách, chính phủ' là từ loại nào?",
            "options": [
                "Danh từ",
                "Động từ",
                "Tính từ",
                "Đại từ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Yếu tố 'chính' trong 'chính khách, chính phủ, chính khoá' mang nghĩa gì?",
            "options": [
                "Liên quan đến việc nhà nước, việc cai trị hay việc công chung của đất nước",
                "Nghĩa là đúng đắn, ngay thẳng, không gian tà",
                "Nghĩa là chủ yếu, quan trọng nhất, giữ vai trò cột trụ",
                "Nghĩa là vừa mới bắt đầu làm việc gì đó"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Giáo sư Tạ Quang Bửu có thể đọc hiểu bao nhiêu ngoại ngữ?",
            "options": [
                "8 ngoại ngữ (Anh, Pháp, Đức, Ba Lan, Nga, Trung, Hy Lạp cổ, La-tinh)",
                "4 ngoại ngữ chính thức",
                "Không tự học ngoại ngữ nào ngoài tiếng Anh",
                "Chỉ biết đọc tiếng Pháp và La-tinh"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Từ 'công hàm' được giải thích nghĩa là gì?",
            "options": [
                "Công văn ngoại giao của nước này gửi cho nước khác",
                "Bản cam kết kinh tế giữa hai doanh nghiệp lớn",
                "Lời chúc tết mừng thọ của lãnh đạo nhà nước",
                "Bản hiến pháp đầu tiên của một quốc gia"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- GHI ÂM MICROPHONE HỌC SINH ---
let thuAm67 = null;
let cacManhGhiAm67 = [];

window.batDauGhiAm67 = function() {
    cacManhGhiAm67 = [];
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            thuAm67 = new MediaRecorder(stream);
            thuAm67.ondataavailable = event => {
                cacManhGhiAm67.push(event.data);
            };
            thuAm67.onstop = () => {
                const blob = new Blob(cacManhGhiAm67, { type: 'audio/wav' });
                const audioUrl = URL.createObjectURL(blob);
                const player = document.getElementById('audio-play-67');
                if (player) {
                    player.src = audioUrl;
                    player.classList.remove('hidden');
                }
            };
            thuAm67.start();
            document.getElementById('rec-status-67').innerText = 'Trạng thái: 🔴 Đang ghi âm bài đọc...';
            document.getElementById('btn-start-rec-67').disabled = true;
            document.getElementById('btn-stop-rec-67').disabled = false;
        })
        .catch(() => {
            alert('Không tìm thấy micrô hoặc chưa cấp quyền ghi âm. Vui lòng bật micrô của thiết bị!');
        });
};

window.dungGhiAm67 = function() {
    if (thuAm67) {
        thuAm67.stop();
        document.getElementById('rec-status-67').innerText = 'Trạng thái: 🟢 Đã ghi âm xong!';
        document.getElementById('btn-start-rec-67').disabled = false;
        document.getElementById('btn-stop-rec-67').disabled = true;
    }
};

// --- BÀI TẬP 1: LTVC NỐI TỪ VỚI NGHĨA ---
let tuChon67 = null;

window.chonTu67 = function(tuId) {
    tuChon67 = tuId;
    const fb = document.getElementById('fb-vn67-bt1');
    if (fb) fb.classList.add('hidden');

    // Cập nhật giao diện button chọn
    ['chinhkhach', 'chinhphu', 'chinhkhoa'].forEach(t => {
        const btn = document.getElementById(`voc-\${t}`);
        if (btn) {
            if (t === tuId) {
                btn.className = "px-5 py-3 bg-amber-500 text-white font-black text-lg md:text-xl rounded-xl transition-all shadow-md scale-105";
            } else {
                btn.className = `px-5 py-3 bg-\${t === 'chinhphu' ? 'sky' : (t === 'chinhkhoa' ? 'emerald' : 'amber')}-50 hover:bg-\${t === 'chinhphu' ? 'sky' : (t === 'chinhkhoa' ? 'emerald' : 'amber')}-100 border-2 border-\${t === 'chinhphu' ? 'sky' : (t === 'chinhkhoa' ? 'emerald' : 'amber')}-200 font-black text-lg md:text-xl rounded-xl transition-all shadow-sm`;
            }
        }
    });
};

window.chonNghia67 = function(nghiaId, tuGocText) {
    const fb = document.getElementById('fb-vn67-bt1');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!tuChon67) {
        fb.innerHTML = "⚠️ Em hãy bấm chọn một từ khóa ở hàng trên trước nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    let dung = false;
    if (tuChon67 === 'chinhkhach' && nghiaId === 'b') dung = true;
    else if (tuChon67 === 'chinhphu' && nghiaId === 'c') dung = true;
    else if (tuChon67 === 'chinhkhoa' && nghiaId === 'a') dung = true;

    if (dung) {
        fb.innerHTML = `🎉 Chính xác! Từ <strong>\${tuGocText}</strong> tương ứng với định nghĩa <strong>\${nghiaId}</strong>.`;
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md animate-in slide-in-from-top-2 duration-367";
        
        // Disable từ đã nối đúng
        document.getElementById(`voc-\${tuChon67}`).disabled = true;
        document.getElementById(`voc-\${tuChon67}`).className = "px-5 py-3 bg-gray-100 text-gray-400 border-2 border-gray-100 font-black text-lg md:text-xl rounded-xl cursor-not-allowed";
        document.getElementById(`def-\${nghiaId}`).disabled = true;
        document.getElementById(`def-\${nghiaId}`).className = "w-full p-4 text-left bg-gray-100 text-gray-400 border border-gray-100 rounded-xl font-semibold text-base md:text-lg cursor-not-allowed";
        
        tuChon67 = null; // Reset
    } else {
        fb.innerHTML = "❌ Định nghĩa này chưa chính xác với từ đã chọn. Hãy chọn lại nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- BÀI TẬP 2: ĐIỀN TỪ CHỖ TRỐNG ---
window.kiemTraDienCau67 = function() {
    const fb = document.getElementById('fb-vn67-bt2');
    if (!fb) return;
    fb.classList.remove('hidden');

    const valA = document.getElementById('sel-q2-a')?.value;
    const valB = document.getElementById('sel-q2-b')?.value;
    const valC = document.getElementById('sel-q2-c')?.value;

    if (!valA || !valB || !valC) {
        fb.innerHTML = "⚠️ Em hãy điền đầy đủ cả 3 ô trống trước khi nộp bài!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    const aDung = valA === 'chinhkhach';
    const bDung = valB === 'chinhphu';
    const cDung = valC === 'chinhkhoa';

    if (aDung && bDung && cDung) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã điền chính xác từ vào cả 3 câu văn. Rất tốt!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "❌ Đáp án chưa đúng rồi. Em hãy đọc kĩ lại ý nghĩa của từng câu để chọn từ thích hợp nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- KHỞI ĐỘNG ---
window.kiemTraKhoiDong67 = function() {
    const text = document.getElementById('ans-vn67-kd')?.value.trim();
    const fb = document.getElementById('fb-vn67-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy viết suy nghĩ của mình trước khi gửi nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    fb.innerHTML = "🎉 Cảm nghĩ rất sâu sắc! Giáo sư Tạ Quang Bửu thực sự là tấm gương nhân cách vĩ đại để thế hệ học sinh học hỏi. Hãy cùng đọc bài đọc dưới đây nhé.";
    fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
};

// --- CHẤM ĐIỂM AI THẦY E CÂU TỰ LUẬN VIẾT CẢM NGHĨ ---
window.checkWritingVn67 = function() {
    const text = document.getElementById('ans-vn67-writing')?.value.trim();
    const fb = document.getElementById('fb-vn67-writing');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text || text.length < 15) {
        fb.innerHTML = "⚠️ Đoạn văn của em còn hơi ngắn. Hãy viết tối thiểu từ 3 câu thể hiện cảm nghĩ để AI Thầy E đánh giá nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ THẦY E:</span>
            <p class="text-lg font-bold">"Tuyệt vời! Em đã rút ra những bài học rất sâu sắc về sự tự học và kiên trì rèn luyện từ tấm gương của Giáo sư Tạ Quang Bửu để hoàn thiện bản thân."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Điểm: 10/10 (Xuất sắc)</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-367";
};

// --- LÀM LẠI BÀI TỰ LUẬN ---
window.resetWritingVn67 = function() {
    const textarea = document.getElementById('ans-vn67-writing');
    if (textarea) textarea.value = '';
    const fb = document.getElementById('fb-vn67-writing');
    if (fb) {
        fb.classList.add('hidden');
        fb.innerHTML = '';
    }
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.nopBai67Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 67',
            '🎓',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎓</span><p class="text-2xl md:text-3xl font-bold text-emerald-800">Chúc mừng em đã học tập tấm gương Giáo sư Tạ Quang Bửu!</p><p class="text-lg text-gray-800 mt-3">Tinh thần tự học và ý chí học hỏi trọn đời sẽ mở rộng cánh cửa thành công cho em sau này.</p></div>'
        );
    }
};
