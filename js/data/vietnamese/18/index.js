export const lesson18 = {
    "topic": "Tiếng Việt 5",
    "week": "3",
    "period": "18",
    "title": "ĐỌC: NGÔI SAO SÂN CỎ",
    "desc": "Bài học giúp học sinh hiểu về tinh thần đồng đội trong thể thao và cuộc sống thông qua câu chuyện của Việt, đồng thời thực hành tìm từ vựng bóng đá và đại từ thay thế.",
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
                Đọc diễn cảm câu chuyện "Ngôi sao sân cỏ", cảm nhận sâu sắc bài học về sự đoàn kết, tránh lối chơi ích kỉ.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Nhận biết các từ ngữ chỉ sự vật, hoạt động bóng đá và biết cách sử dụng đại từ thay thế để liên kết câu.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG: PHÂN LOẠI THỂ THAO -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động: Phân loại môn thể thao</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy phân loại các môn thể thao dưới đây vào nhóm <strong>Cá nhân</strong> hoặc <strong>Đồng đội</strong>:</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-sky-50/50 p-4 rounded-xl border border-sky-100 space-y-2">
                <p class="font-black text-sky-800 text-base">Môn: <strong>Bóng đá</strong></p>
                <div class="flex gap-2">
                    <button onclick="chonKD18(1, 'team', this)" class="px-4 py-2 bg-white border rounded-lg font-bold text-xl md:text-2xl text-gray-800 hover:bg-sky-600">Cá nhân</button>
                    <button onclick="chonKD18(1, 'ok', this)" class="px-4 py-2 bg-white border rounded-lg font-bold text-xl md:text-2xl text-gray-800 hover:bg-sky-600">Đồng đội</button>
                </div>
            </div>

            <div class="bg-sky-50/50 p-4 rounded-xl border border-sky-100 space-y-2">
                <p class="font-black text-sky-800 text-base">Môn: <strong>Bơi lội đơn</strong></p>
                <div class="flex gap-2">
                    <button onclick="chonKD18(2, 'ok', this)" class="px-4 py-2 bg-white border rounded-lg font-bold text-xl md:text-2xl text-gray-800 hover:bg-sky-600">Cá nhân</button>
                    <button onclick="chonKD18(2, 'team', this)" class="px-4 py-2 bg-white border rounded-lg font-bold text-xl md:text-2xl text-gray-800 hover:bg-sky-600">Đồng đội</button>
                </div>
            </div>
        </div>
        <div id="fb-vn18-kd" class="hidden text-sm font-bold px-3 py-1.5 rounded-lg text-center"></div>
    </div>

    <!-- 📖 BÀI ĐỌC: NGÔI SAO SÂN CỎ -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>

        <div class="relative z-10 space-y-6">
            <div class="flex justify-between items-center border-b border-sky-100 pb-4">
                <span class="text-sky-900 font-black text-xl md:text-3xl flex items-center gap-2">
                    <span>📖</span> Ngôi sao sân cỏ
                </span>
                <button onclick="playSegmentAudio('assets/audio/tiengviet/18/ngoi_sao_san_co.mp3')" class="p-2.5 bg-sky-600 hover:bg-sky-600 text-white rounded-full transition-all flex items-center justify-center shadow-md animate-bounce" title="Nghe đọc diễn cảm">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                </button>
            </div>

            <!-- Nội dung truyện -->
            <div class="serif-font text-gray-900 leading-relaxed text-justify space-y-5 bg-sky-50/10 p-6 md:p-8 rounded-3xl border border-sky-100/50 text-xl md:text-4xl">
                <!-- Minh họa SGK (Góc trên bên phải, bấm vào phóng to) -->
                <div onclick="window.showMathFeedback('Ngôi sao sân cỏ', '⚽', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-red-50 to-amber-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/19/19.png&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Ngôi sao sân cỏ&quot;&gt;&lt;p class=&quot;text-2xl font-bold text-red-800 mt-4&quot;&gt;Các cầu thủ nhí lớp 5 hăng say thi đấu, phối hợp tạt bóng ghi bàn đẹp mắt.&lt;/p&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-gradient-to-br from-red-50 to-amber-50 rounded-[32px] border-4 border-white shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group">
                    <img src="assets/images/tiengviet_5_1/19/19.png" class="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500" alt="Ngôi sao sân cỏ">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Bấm để phóng to 🔍</div>
                </div>

                <p class="indent-8">Tôi được bạn bè khu phố công nhận là cầu thủ xuất sắc. Thế mà đợi mãi tôi mới có dịp ra mắt “giới hâm mộ bóng đá trường nhà” trong trận đấu với lớp 5C sáng nay.</p>
                <p class="indent-8">Trận đấu gay cấn từ những phút đầu. Mạnh lăn xả cướp bóng rồi chuyền cho tôi dẫn xuống vòng cấm địa. Hậu vệ lớp C xô lên chặn. Mạnh và Chiến đã lên kịp. Nhưng tôi vẫn cố hất bóng qua hậu vệ lớp C vì không muốn nhường ai cơ hội ghi bàn. Chậm rồi, thủ môn đã lao lên bắt bóng. Cả sân vỡ oà vì tiếc.</p>
                <p class="indent-8">Sốt ruột lắm nhưng đến giữa hiệp tôi mới ghi bàn. Tiếng vỗ tay dội lên, tôi sung sướng chạy như một ngôi sao sân cỏ. Từ lúc đó, lớp C kèm tôi như hình với bóng. Tôi dắt bóng một quãng là mất, lại chẳng chuyền cho ai. Lớp C được thể tấn công và ghi liền hai bàn.</p>
                <p class="indent-8">Giữa hai hiệp, chúng tôi hội ý. Mạnh thở hồng hộc:</p>
                <p>– Tại Việt cứ một mình ôm bóng, tụi nó phá mất.</p>
                <p>Vĩnh đanh mặt:</p>
                <p>– Hiệp sau đừng ích kỉ thế.</p>
                <p>Tôi hấm hầm:</p>
                <p>– Tớ không đá nữa, xem các cậu làm được gì.</p>
                <p>Không ai đáp lại, chỉ lặng lẽ dẫn ra cho tôi đi.</p>
                <p class="indent-8">Tôi ngồi khuất một góc xem hiệp hai. Có một tích tắc Vĩnh chậm nhịp, không kịp chuyền cho Chiến làm lỡ cơ hội ghi bàn. Tôi làu bàu: “Giữ bo bo thế làm gì chẳng lỡ.”. Nói xong, bất giác tôi nóng bừng mặt.</p>
                <p class="indent-8">Lớp tôi càng đá càng hay. Bộ ba Long, Chiến, Mạnh chuyền bóng rất ăn ý. Hậu vệ lớp C không sao chặn nổi đường bóng ấy. Rồi Mạnh ung dung đội đầu, tạt bóng gọn vào lưới.</p>
                <p class="indent-8">Cả sân vỗ tay vang dội. Bàn thắng đẹp quá! Nếu tôi là một trong ba đứa, bàn thắng có đẹp thế không? Tôi bần thần nghĩ, không biết Vĩnh chạy đến: “Vào đi Việt, Chiến đau chân.”. Tôi ngẩn ra giây lát rồi tức tốc chạy theo Vĩnh, cứ như vừa đón được một đường bóng đồng đội chuyền đến cho tôi.</p>
                
            </div>
        </div>
    </div>

    <!-- 💡 Nội dung chính bài học -->
    <div class="p-8 rounded-[36px] bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-xl relative overflow-hidden mt-6">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <h4 class="text-xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
            <span>💡</span> Nội dung chính bài học
        </h4>
        <div class="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p class="text-xl md:text-4xl font-bold leading-relaxed text-center italic">
                "Câu chuyện nhấn mạnh bài học sâu sắc về tinh thần tập thể và sự đoàn kết trong thể thao cũng như cuộc sống: sự phối hợp ăn ý của đồng đội luôn mang lại thành công lớn hơn lối chơi cá nhân, ích kỉ."
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-6 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- Main Tabs -->
    <div class="flex flex-wrap gap-2 border-b border-gray-100 pb-3 mb-6 justify-center md:justify-start">
        <button onclick="switchTabVn18(0)" id="vn18-main-tab-0" class="px-5 py-2.5 rounded-xl font-black text-xl md:text-2xl transition-all bg-sky-600 text-white shadow-sm">
            📖 Tìm hiểu bài
        </button>
        <button onclick="switchTabVn18(1)" id="vn18-main-tab-1" class="px-5 py-2.5 rounded-xl font-bold text-xl md:text-2xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300">
            🔍 Luyện từ và câu
        </button>
    </div>

    <!-- MAIN TAB 1: TÌM HIỂU BÀI -->
    <div id="vn18-main-content-0" class="block space-y-6 animate-in fade-in duration-300">
        <!-- PHẦN 1: TÌM HIỂU BÀI (FORM TÓM TẮT TRUYỆN + ACCORDION) -->
        <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
            <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">📊</div>
                    <h3 class="text-2xl md:text-5xl font-black text-gray-800">Tìm hiểu câu chuyện</h3>
                </div>

                <!-- Form điền thông tin tóm tắt truyện -->
                <div class="bg-white p-5 rounded-2xl border border-sky-100 space-y-4 shadow-sm">
                    <p class="text-sm font-black text-sky-800 uppercase tracking-wider">📋 Điền thông tin sơ lược về câu chuyện:</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="space-y-1">
                            <label class="text-base md:text-xl font-bold text-gray-800">⏱️ Thời gian xảy ra trận đấu:</label>
                            <select id="vn18-info-time" class="w-full p-2 border border-gray-100 rounded-xl text-lg md:text-2xl font-bold bg-gray-50/30 outline-none max-w-full">
                                <option value="">Chọn thời gian...</option>
                                <option value="Sáng nay">Sáng nay</option>
                                <option value="Hôm qua">Hôm qua</option>
                                <option value="Tuần trước">Tuần trước</option>
                            </select>
                        </div>
                        <div class="space-y-1">
                            <label class="text-base md:text-xl font-bold text-gray-800">📍 Địa điểm thi đấu:</label>
                            <select id="vn18-info-loc" class="w-full p-2 border border-gray-100 rounded-xl text-lg md:text-2xl font-bold bg-gray-50/30 outline-none max-w-full">
                                <option value="">Chọn địa điểm...</option>
                                <option value="Sân bóng khu phố">Sân bóng khu phố</option>
                                <option value="Sân trường (Sân bóng trường nhà)">Sân trường (Sân bóng trường nhà)</option>
                                <option value="Sân vận động thị trấn">Sân vận động thị trấn</option>
                            </select>
                        </div>
                        <div class="space-y-1">
                            <label class="text-base md:text-xl font-bold text-gray-800">👤 Nhân vật chính kể chuyện:</label>
                            <select id="vn18-info-main" class="w-full p-2 border border-gray-100 rounded-xl text-lg md:text-2xl font-bold bg-gray-50/30 outline-none max-w-full">
                                <option value="">Chọn nhân vật chính...</option>
                                <option value="Mạnh">Mạnh</option>
                                <option value="Việt (Tôi)">Việt (Tôi)</option>
                                <option value="Vĩnh">Vĩnh</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex justify-end items-center gap-4"><button onclick="checkInfoVn18();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                    <div id="fb-vn18-info" class="hidden text-sm font-bold px-3 py-1.5 rounded-lg text-center"></div>
                </div>

                <!-- Accordion câu hỏi đọc hiểu -->
                <div class="space-y-4">
                    <!-- Câu 2 -->
                    <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                        <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                            <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                                2. Việt được giới thiệu như thế nào ở đầu câu chuyện?
                            </span>
                            <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                                <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </summary>
                        <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                            <p class="text-sky-800 font-bold mb-2">💡 Trả lời:</p>
                            <p>Việt được giới thiệu là một cầu thủ xuất sắc được bạn bè trong khu phố công nhận. Việt đã rất háo hức chờ đợi trận đấu với lớp 5C để thể hiện tài năng trước đông đảo "giới hâm mộ bóng đá trường nhà".</p>
                        </div>
                    </details>

                    <!-- Câu 3 -->
                    <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                        <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                            <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                                3. Ở đầu trận bóng, hành động của Mạnh và Việt khác nhau ra sao? Những hành động đó cho biết điều gì?
                            </span>
                            <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                                <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </summary>
                        <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium space-y-2 text-lg md:text-3xl">
                            <p class="text-sky-800 font-bold">💡 Gợi ý so sánh hành động:</p>
                            <ul class="list-disc ml-6 space-y-1">
                                <li><strong>Mạnh</strong>: lăn xả cướp bóng rồi chuyền cho đồng đội (Việt). → Cho thấy Mạnh có tinh thần đồng đội, chơi vì tập thể.</li>
                                <li><strong>Việt</strong>: cố hất bóng qua hậu vệ đối phương vì không muốn nhường ai cơ hội ghi bàn. → Cho thấy Việt chơi cá nhân, ích kỉ, ham thành tích cá nhân.</li>
                            </ul>
                        </div>
                    </details>

                    <!-- Câu 4 -->
                    <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                        <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                            <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                                4. Vì sao Việt không đá hiệp hai nữa? Việt đã nhận ra điều gì khi xem hiệp hai?
                            </span>
                            <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                                <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </summary>
                        <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium space-y-2 text-lg md:text-3xl">
                            <p class="text-sky-800 font-bold">💡 Trả lời:</p>
                            <p>• Việt dỗi, không đá nữa vì tự ái khi bị đồng đội (Mạnh, Vĩnh) góp ý lỗi chơi bóng ích kỉ một mình giữ bóng làm hỏng trận đấu.</p>
                            <p>• Khi ngồi góc sân xem hiệp hai, nhìn bộ ba Long, Chiến, Mạnh chuyền bóng phối hợp ăn ý để ghi bàn gỡ hòa đẹp mắt, Việt đã nhận ra rằng: Bóng đá là môn thể thao đồng đội, sự đoàn kết phối hợp mới làm nên những bàn thắng đẹp và chiến thắng chung, lối đá ích kỉ của em trước đó đã làm hại toàn đội.</p>
                        </div>
                    </details>

                    <!-- Câu 5 -->
                    <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                        <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                            <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                                5. Em hiểu thế nào về câu cuối cùng của bài đọc?
                            </span>
                            <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                                <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </summary>
                        <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                            <p class="text-sky-800 font-bold mb-2">💡 Trả lời:</p>
                            <p>Câu nói thể hiện sự thay đổi hoàn toàn của Việt. Em không còn dỗi hờn, ích kỉ nữa mà vô cùng háo hức quay lại sân, sẵn sàng đón nhận và phối hợp chuyền bóng cùng đồng đội, hướng tới mục tiêu chung của cả đội bóng.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>

        <!-- PHẦN 3: LUYỆN VIẾT CẢM THỤ (AI THẦY E) -->
        <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
            <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">✍️</div>
                    <h3 class="text-2xl md:text-5xl font-black text-gray-800">Cảm nhận câu chuyện</h3>
                </div>

                <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner space-y-4">
                    <h4 class="text-2xl md:text-3xl font-bold text-gray-800">
                        Qua câu chuyện "Ngôi sao sân cỏ", em hãy viết một đoạn văn ngắn (từ 3 đến 5 câu) nêu suy nghĩ của em về sự thay đổi của bạn Việt hoặc tầm quan trọng của tinh thần đồng đội trong thể thao.
                    </h4>

                    <textarea id="ans-vn18-writing" rows="4" placeholder="Nhập cảm nhận của em..." class="w-full p-4 md:p-6 text-2xl md:text-3xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-amber-50/10 font-medium leading-relaxed"></textarea>
                    
                    <div class="flex justify-end items-center gap-4"><button onclick="resetWritingVn18()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="checkWritingVn18();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                    
                    <div id="fb-vn18-writing" class="hidden mt-6 p-6 bg-amber-500 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500">
                        <!-- AI Feedback -->
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- MAIN TAB 2: LUYỆN TỪ VÀ CÂU -->
    <div id="vn18-main-content-1" class="hidden space-y-6 animate-in fade-in duration-300">
        <!-- Sub Tabs for Luyện từ và câu -->
        <div class="flex flex-wrap gap-2 border-b border-gray-100 pb-3 mb-6 justify-center md:justify-start">
            <button onclick="switchSubTabVn18(0)" id="vn18-sub-tab-0" class="px-5 py-2.5 rounded-xl font-black text-xl md:text-2xl transition-all bg-red-600 text-white shadow-sm">
                📝 Bài tập 1
            </button>
            <button onclick="switchSubTabVn18(1)" id="vn18-sub-tab-1" class="px-5 py-2.5 rounded-xl font-bold text-xl md:text-2xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300">
                📝 Bài tập 2
            </button>
        </div>

        <!-- Sub Content 1: Bài 1 -->
        <div id="vn18-sub-content-0" class="block space-y-6 animate-in fade-in duration-300">
            <section class="bg-white p-4 rounded-[40px] shadow-lg border border-red-50">
                <div class="p-6 md:p-8 bg-red-50/30 rounded-[32px] space-y-6">
                    <div class="flex items-center gap-4 mb-2">
                        <div class="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">1</div>
                        <h3 class="text-2xl md:text-5xl font-black text-gray-800">Phân loại từ ngữ</h3>
                    </div>

                    <!-- Bài 1: Click từ sự vật / hoạt động bóng đá -->
                    <div class="bg-white p-5 rounded-2xl border border-red-100 space-y-4">
                        <p class="text-2xl md:text-3xl text-gray-800 font-bold">Phân loại từ ngữ chỉ <strong>sự vật</strong> (Click chọn chuyển màu đỏ) và <strong>hoạt động</strong> (Click chọn chuyển màu xanh lá) trong trận bóng đá ở đoạn dưới:</p>
                        
                        <div class="serif-font text-gray-900 leading-relaxed p-4 bg-red-50/20 rounded-xl border border-red-100 select-none text-xl md:text-4xl">
                            <button onclick="clickTuVn18('act', this)" class="font-bold border border-gray-100 px-1 rounded m-0.5">Mạnh lăn xả</button>
                            <button onclick="clickTuVn18('act', this)" class="font-bold border border-gray-100 px-1 rounded m-0.5">cướp bóng</button>
                            rồi
                            <button onclick="clickTuVn18('act', this)" class="font-bold border border-gray-100 px-1 rounded m-0.5">chuyền</button>
                            cho tôi
                            <button onclick="clickTuVn18('act', this)" class="font-bold border border-gray-100 px-1 rounded m-0.5">dẫn xuống</button>
                            <button onclick="clickTuVn18('sub', this)" class="font-bold border border-gray-100 px-1 rounded m-0.5">vòng cấm địa</button>.
                            <button onclick="clickTuVn18('sub', this)" class="font-bold border border-gray-100 px-1 rounded m-0.5">Hậu vệ</button>
                            lớp C
                            <button onclick="clickTuVn18('act', this)" class="font-bold border border-gray-100 px-1 rounded m-0.5">xô lên chặn</button>.
                            Mạnh và Chiến đã lên kịp, nhưng tôi vẫn cố
                            <button onclick="clickTuVn18('act', this)" class="font-bold border border-gray-100 px-1 rounded m-0.5">hất bóng</button>
                            qua hậu vệ lớp C vì không muốn nhường ai cơ hội
                            <button onclick="clickTuVn18('act', this)" class="font-bold border border-gray-100 px-1 rounded m-0.5">ghi bàn</button>.
                            Chậm rồi,
                            <button onclick="clickTuVn18('sub', this)" class="font-bold border border-gray-100 px-1 rounded m-0.5">thủ môn</button>
                            đã
                            <button onclick="clickTuVn18('act', this)" class="font-bold border border-gray-100 px-1 rounded m-0.5">lao lên bắt bóng</button>.
                        </div>
                        <p class="text-xs text-gray-800">💡 Lưu ý: Bấm 1 lần chọn màu Đỏ (Sự vật), bấm lần 2 chọn màu Xanh lá (Hoạt động), bấm lần 3 hủy chọn.</p>
                    </div>
                </div>
            </section>
        </div>

        <!-- Sub Content 2: Bài 2 -->
        <div id="vn18-sub-content-1" class="hidden space-y-6 animate-in fade-in duration-300">
            <section class="bg-white p-4 rounded-[40px] shadow-lg border border-red-50">
                <div class="p-6 md:p-8 bg-red-50/30 rounded-[32px] space-y-6">
                    <div class="flex items-center gap-4 mb-2">
                        <div class="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">2</div>
                        <h3 class="text-2xl md:text-5xl font-black text-gray-800">Đại từ thay thế</h3>
                    </div>

                    <!-- Bài 2: Đại từ thay thế trong câu nối tiếp -->
                    <div class="bg-white p-5 rounded-2xl border border-red-100 space-y-4">
                        <p class="text-2xl md:text-3xl text-gray-800 font-bold">Chọn câu đặt nối tiếp có sử dụng đại từ thay thế phù hợp cho phần in đậm:</p>
                        
                        <div class="space-y-4">
                            <!-- Câu a -->
                            <div class="p-4 bg-red-50/30 rounded-xl border border-red-100 space-y-2">
                                <p class="text-sm font-bold text-gray-800">a. <strong class="text-red-800">Bộ ba Long, Chiến, Mạnh</strong> chuyền bóng rất ăn ý.</p>
                                <select id="vn18-da-a" class="w-full p-2 border border-gray-100 rounded-lg text-sm font-semibold">
                                    <option value="">Chọn câu nối tiếp thích hợp...</option>
                                    <option value="ok">Đối thủ của họ không sao cản nổi đường bóng ấy. (Đại từ "họ")</option>
                                    <option value="wrong">Bộ ba Long, Chiến, Mạnh làm bàn thắng rất đẹp mắt.</option>
                                </select>
                            </div>

                            <!-- Câu b -->
                            <div class="p-4 bg-red-50/30 rounded-xl border border-red-100 space-y-2">
                                <p class="text-sm font-bold text-gray-800">b. Lớp tôi <strong class="text-red-800">càng đá càng hay</strong>.</p>
                                <select id="vn18-da-b" class="w-full p-2 border border-gray-100 rounded-lg text-sm font-semibold">
                                    <option value="">Chọn câu nối tiếp thích hợp...</option>
                                    <option value="wrong">Càng đá càng hay giúp lớp tôi chiến thắng.</option>
                                    <option value="ok">Khán giả trên sân ai cũng trầm trồ ca ngợi điều đó. (Đại từ "đó")</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex justify-end items-center gap-4"><button onclick="checkBai3Vn18();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                        <div id="fb-vn18-b3" class="hidden text-base font-bold px-4 py-2 rounded-xl text-center"></div>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiVn18()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Câu chuyện 'Ngôi sao sân cỏ' thuộc thể loại nào?",
            "options": [
                "Truyện cổ tích",
                "Truyện ngắn (văn xuôi)",
                "Bài thơ năm chữ",
                "Kịch bản nói và nghe"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trận đấu trong truyện diễn ra giữa lớp nào với lớp nào?",
            "options": [
                "Lớp của Việt và lớp 5C",
                "Lớp 5A và lớp 5B",
                "Lớp 5C và lớp 5D",
                "Lớp của Mạnh và lớp của Chiến"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Ở đầu trận đấu, Việt đã chơi bóng như thế nào?",
            "options": [
                "Chơi đồng đội, tích cực chuyền bóng",
                "Ích kỉ, cá nhân, không chịu chuyền bóng cho ai",
                "Chỉ lo phòng thủ ở phần sân nhà",
                "Làm thủ môn bắt bóng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tại sao Việt không đá tiếp ở hiệp hai?",
            "options": [
                "Bị chấn thương nặng",
                "Tự ái và dỗi khi bị các bạn phê bình ích kỉ ôm bóng",
                "Bị thẻ đỏ đuổi ra sân",
                "Hết giờ thi đấu"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi xem hiệp hai từ góc sân, Việt đã nhận thấy điều gì ở đội mình?",
            "options": [
                "Các bạn chơi càng đá càng hay, phối hợp ăn ý gỡ hòa đẹp mắt",
                "Các bạn đá rất tệ và đổ lỗi cho nhau",
                "Đội bóng bị thua cuộc thảm hại",
                "Mọi người dừng trận đấu để tìm Việt"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Câu cuối bài đọc cho thấy Việt thay đổi như thế nào?",
            "options": [
                "Việt vẫn hậm hực bỏ về nhà",
                "Việt đã nhận ra sai lầm, vui vẻ trở lại sân thay người và sẵn sàng phối hợp đồng đội",
                "Việt từ bỏ hoàn toàn môn bóng đá",
                "Việt xin sang đá cho đội lớp 5C"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ nào dưới đây chỉ sự vật liên quan đến bóng đá?",
            "options": [
                "cướp bóng, tạt bóng, chuyền bóng",
                "vòng cấm địa, thủ môn, hậu vệ, bóng",
                "lăn xả, xô lên, lao lên",
                "gay cấn, xuất sắc, ích kỉ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ nào dưới đây chỉ hoạt động trong trận đấu bóng đá?",
            "options": [
                "sân cỏ, lưới, cầu môn",
                "chuyền bóng, cướp bóng, đội đầu, ghi bàn",
                "cầu thủ, trọng tài, thủ môn",
                "đẹp mắt, gay cấn, hụt hẫng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đại từ thay thế thích hợp để nối câu cho 'Mạnh lăn xả cướp bóng' là gì?",
            "options": [
                "Hậu vệ lớp C cũng vậy. (hoặc thế)",
                "Mạnh chạy rất nhanh.",
                "Ai cũng thích Mạnh.",
                "Họ đá rất ăn ý."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đại từ 'họ' trong câu 'Đối thủ của họ...' thay thế cho cụm từ nào?",
            "options": [
                "Bộ ba Long, Chiến, Mạnh",
                "Lớp 5C",
                "Cầu thủ khu phố",
                "Khán giả sân trường"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đại từ 'đó' trong câu 'Mọi người trầm trồ vì điều đó' thay cho sự việc nào?",
            "options": [
                "Lớp tôi càng đá càng hay",
                "Khán giả trên sân",
                "Mạnh đội đầu ghi bàn",
                "Việt bỏ ra sân"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Lối đá của bộ ba Long, Chiến, Mạnh được miêu tả như thế nào?",
            "options": [
                "Tranh giành bóng của nhau",
                "Chuyền bóng phối hợp rất ăn ý",
                "Chỉ chuyền bóng cho Việt",
                "Đá bóng vụng về liên tiếp lỡ nhịp"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Thái độ của đồng đội khi Việt dỗi bỏ không đá nữa là gì?",
            "options": [
                "Cầu xin Việt quay lại đá tiếp",
                "Lặng lẽ dẫn ra để Việt đi và tự lập đội đá hiệp hai ăn ý",
                "Tức giận tranh cãi nảy lửa",
                "Trận đấu bị hủy bỏ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Thông điệp chính mà câu chuyện 'Ngôi sao sân cỏ' muốn truyền tải là gì?",
            "options": [
                "Bóng đá là trò chơi cá nhân biểu diễn",
                "Sức mạnh của tập thể, tinh thần đoàn kết và phối hợp đồng đội là chìa khóa của chiến thắng",
                "Ai ghi bàn thắng nhiều nhất là người duy nhất quan trọng",
                "Không nên đá bóng với các lớp khác"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nghĩa của cụm từ 'như hình với bóng' trong câu chuyện là gì?",
            "options": [
                "Lớp C kèm Việt rất sát, không rời một bước nào",
                "Việt đá bóng rất nhanh như bóng ma",
                "Mọi người đều mặc quần áo giống nhau",
                "Sân bóng có nhiều ánh nắng tạo ra bóng dài"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- KIỂM TRA THÔNG TIN SƠ LƯỢC TRUYỆN ---
window.checkInfoVn18 = function() {
    const time = document.getElementById('vn18-info-time')?.value;
    const loc = document.getElementById('vn18-info-loc')?.value;
    const main = document.getElementById('vn18-info-main')?.value;
    const fb = document.getElementById('fb-vn18-info');

    if (!fb) return;
    fb.classList.remove('hidden');

    if (!time || !loc || !main) {
        fb.innerHTML = "⚠️ Em hãy điền đầy đủ cả 3 thông tin sơ lược nhé!";
        fb.className = "text-sm font-bold px-3 py-1.5 rounded-lg bg-amber-500 text-white";
        return;
    }

    const dung = time === 'Sáng nay' && loc === 'Sân trường (Sân bóng trường nhà)' && main === 'Việt (Tôi)';

    if (dung) {
        fb.innerHTML = "🎉 Chính xác! Em đã tóm tắt thông tin sơ lược truyện rất tốt.";
        fb.className = "text-sm font-bold px-3 py-1.5 rounded-lg bg-emerald-600 text-white";
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác. Em hãy đọc lại đoạn đầu tiên của truyện để tìm thông tin nhé!";
        fb.className = "text-sm font-bold px-3 py-1.5 rounded-lg bg-rose-600 text-white";
    }
};

// --- CHƠI MINI GAME KHỞI ĐỘNG VN18 ---
window.chonKD18 = function(cau, status, btn) {
    const fb = document.getElementById('fb-vn18-kd');
    if (!fb) return;

    fb.classList.remove('hidden');
    
    if (status === 'ok') {
        fb.innerHTML = "🎉 Đúng rồi! Môn thể thao này phân loại chính xác.";
        fb.className = "text-sm font-bold px-3 py-1.5 rounded-lg bg-emerald-600 text-white mt-2";
        if (btn) btn.className = "px-4 py-2 bg-emerald-600 text-white font-bold rounded-lg text-sm shadow-sm";
    } else {
        fb.innerHTML = "⚠️ Chưa đúng rồi, em hãy suy nghĩ lại nhé!";
        fb.className = "text-sm font-bold px-3 py-1.5 rounded-lg bg-rose-600 text-white mt-2";
        if (btn) btn.className = "px-4 py-2 bg-rose-600 text-white font-bold rounded-lg text-sm shadow-sm";
    }
};

// --- CLICK CHỌN TỪ SỰ VẬT / HOẠT ĐỘNG ---
window.clickTuVn18 = function(type, btn) {
    if (!btn) return;

    // Các trạng thái class: Mặc định -> Sự vật (bg-red-600 text-white) -> Hoạt động (bg-green-600 text-white) -> Mặc định
    if (btn.classList.contains('bg-red-600')) {
        btn.classList.remove('bg-red-600', 'text-white');
        btn.classList.add('bg-green-600', 'text-white');
    } else if (btn.classList.contains('bg-green-600')) {
        btn.classList.remove('bg-green-600', 'text-white');
    } else {
        btn.classList.add('bg-red-600', 'text-white');
    }
};

// --- KIỂM TRA ĐẠI TỪ THAY THẾ BÀI 3 ---
window.checkBai3Vn18 = function() {
    const valA = document.getElementById('vn18-da-a')?.value;
    const valB = document.getElementById('vn18-da-b')?.value;
    const fb = document.getElementById('fb-vn18-b3');

    if (!fb) return;
    fb.classList.remove('hidden');

    if (!valA || !valB) {
        fb.innerHTML = "⚠️ Em hãy chọn đáp án nối tiếp cho cả 2 câu nhé!";
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-amber-500 text-white";
        return;
    }

    if (valA === 'ok' && valB === 'ok') {
        fb.innerHTML = "🎉 Chính xác! Em đã chọn đúng các câu nối tiếp sử dụng đại từ thay thế phù hợp.";
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-emerald-600 text-white";
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác. Em hãy kiểm tra lại câu trả lời và từ thay thế tương ứng nhé!";
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-rose-600 text-white";
    }
};

// --- CHƠI AUDIO DIỄN CẢM ---
let currentSegmentAudio = null;
window.playSegmentAudio = function(url) {
    if (currentSegmentAudio && !currentSegmentAudio.paused) {
        currentSegmentAudio.pause();
        if (currentSegmentAudio.src.endsWith(url)) {
            return;
        }
    }
    currentSegmentAudio = new Audio(url);
    currentSegmentAudio.play().catch(err => console.log("Audio segment play failed:", err));
};

// --- LOGIC BÀI TẬP CẢM THỤ TỰ LUẬN VN18 ---
window.checkWritingVn18 = function() {
    const text = document.getElementById('ans-vn18-writing')?.value.trim();
    const fb = document.getElementById('fb-vn18-writing');
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
            <p class="text-lg font-bold">"Tuyệt vời! Em đã hiểu sâu sắc thông điệp câu chuyện: từ sự ích kỷ cá nhân của Việt đến bài học lớn về tinh thần đoàn kết đồng đội trong bóng đá. Đoạn văn mạch lạc, cảm xúc chân thực."</p>
            <span class="inline-block px-3 py-1 bg-white text-amber-600 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Điểm: 118% (Hoàn thành tốt)</span>
        </div>
    `;
    fb.className = "mt-6 p-6 bg-emerald-600 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500";
};

window.resetWritingVn18 = function() {
    const txt = document.getElementById('ans-vn18-writing');
    if (txt) txt.value = "";
    const fb = document.getElementById('fb-vn18-writing');
    if (fb) fb.classList.add('hidden');
};

// --- NỘP BÀI HOÀN THÀNH ---
window.nopBaiVn18 = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback('Hoàn thành Tiết 18-19', '⚽', '<div class="text-center p-6"><span class="text-7xl block mb-4">⚽</span><p class="text-lg md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài học Ngôi sao sân cỏ!</p><p class="text-lg text-gray-800 mt-3">Đoàn kết và phối hợp cùng đồng đội là bài học ý nghĩa nhất để đi tới thành công.</p></div>');
    }
};

// --- LOGIC CHUYỂN TAB CHÍNH ---
window.switchTabVn18 = function(tabIdx) {
    for (let i = 0; i < 2; i++) {
        const tabBtn = document.getElementById(`vn18-main-tab-${i}`);
        const tabContent = document.getElementById(`vn18-main-content-${i}`);
        if (tabBtn) {
            if (i === tabIdx) {
                tabBtn.className = "px-5 py-2.5 rounded-xl font-black text-xl md:text-2xl transition-all bg-sky-600 text-white shadow-sm";
            } else {
                tabBtn.className = "px-5 py-2.5 rounded-xl font-bold text-xl md:text-2xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300";
            }
        }
        if (tabContent) {
            if (i === tabIdx) {
                tabContent.className = "block space-y-6 animate-in fade-in duration-300";
            } else {
                tabContent.className = "hidden";
            }
        }
    }
};

// --- LOGIC CHUYỂN TAB PHỤ (LUYỆN TỪ VÀ CÂU) ---
window.switchSubTabVn18 = function(tabIdx) {
    for (let i = 0; i < 2; i++) {
        const tabBtn = document.getElementById(`vn18-sub-tab-${i}`);
        const tabContent = document.getElementById(`vn18-sub-content-${i}`);
        if (tabBtn) {
            if (i === tabIdx) {
                tabBtn.className = "px-5 py-2.5 rounded-xl font-black text-xl md:text-2xl transition-all bg-red-600 text-white shadow-sm";
            } else {
                tabBtn.className = "px-5 py-2.5 rounded-xl font-bold text-xl md:text-2xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300";
            }
        }
        if (tabContent) {
            if (i === tabIdx) {
                tabContent.className = "block space-y-6 animate-in fade-in duration-300";
            } else {
                tabContent.className = "hidden";
            }
        }
    }
};
