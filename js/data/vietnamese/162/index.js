// Tiết 162: Đọc - Hương cốm mùa thu (Tuần 24)
export const lesson162 = {
    "topic": "Tiếng Việt 5",
    "week": "24",
    "period": "162",
    "title": "ĐỌC: HƯƠNG CỐM MÙA THU",
    "desc": "Học sinh đọc bài thơ 'Hương cốm mùa thu' của Bảo Ngọc, tìm hiểu vẻ đẹp thanh tao của cốm và tình yêu quê hương đất nước gửi gắm qua thức quà của mùa thu Hà Nội.",
    "subject": "Đọc",
    "theme": "Hương sắc trăm miền",
    "audio": "am_thanh/huongcommuathu.mp3",
    "content": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto pb-12">
        <!-- 🎯 Mục tiêu bài học -->
        <div class="bg-emerald-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-emerald-600 shadow-lg relative overflow-hidden">
            <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl"></div>
            <h3 class="text-2xl md:text-5xl font-black text-emerald-900 mb-4 flex items-center gap-3">
                <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-md">🎯</span>
                Mục tiêu bài học
            </h3>
            <ul class="space-y-3 text-emerald-800 font-bold text-xl md:text-2xl ml-2">
                <li class="flex items-start gap-2">
                    <span class="text-emerald-950 font-black">•</span>
                    Đọc trôi chảy, diễn cảm bài thơ "Hương cốm mùa thu" với giọng nhẹ nhàng, sâu lắng.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-emerald-950 font-black">•</span>
                    Hiểu và cảm nhận được quy trình vất vả để làm ra hạt cốm và nét đẹp văn hóa độc đáo của thức quà này tại Hà Nội.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-emerald-950 font-black">•</span>
                    Bồi dưỡng tình yêu lao động, trân trọng công sức của người nông dân và tự hào về nét đẹp ẩm thực dân tộc.
                </li>
            </ul>
        </div>

        <!-- 🎬 Khu vực Video bài học (Chờ bổ sung video cốm Hà Nội) -->
        <div class="bg-white rounded-[40px] p-6 md:p-8 shadow-xl border border-emerald-100/60 overflow-hidden">
            <h3 class="text-2xl md:text-5xl font-black text-emerald-950 mb-4 flex items-center gap-3">
                <span class="text-xl md:text-3xl">🎬</span> Góc Nghe Nhìn
            </h3>
            <div class="aspect-video w-full rounded-3xl bg-emerald-50/40 border-2 border-dashed border-emerald-300 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
                <div class="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl md:text-3xl mb-4 animate-bounce">📽️</div>
                <h4 class="text-xl md:text-2xl font-black text-emerald-800">Không gian trình chiếu Video</h4>
                <p class="text-gray-500 font-bold text-lg max-w-md mt-2">Hệ thống đã chừa sẵn chỗ để tích hợp video giới thiệu quy trình làm cốm hoặc phong cảnh mùa thu Hà Nội.</p>
            </div>
        </div>

        <!-- 📖 Văn bản bài thơ -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-12 shadow-xl border border-emerald-100">
                <h3 class="text-3xl md:text-4xl font-black text-emerald-950 text-center uppercase tracking-tight mb-8">
                    HƯƠNG CỐM MÙA THU
                </h3>
                
                <!-- Minh họa bài thơ -->
                <div onclick="window.showMathFeedback('Hương cốm mùa thu', '🍁', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_2/162/162.png&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Minh họa Hương cốm mùa thu&quot;&gt;&lt;p class=&quot;text-2xl font-bold text-blue-600 mt-4&quot;&gt;Hương cốm thơm ngọt ngào dắt heo may mùa thu về trên những ô cửa.&lt;/p&gt;&lt;/div&gt;')" class="max-w-xl mx-auto mb-10 bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl border-4 border-white shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group">
                    <img src="assets/images/tiengviet_5_2/162/162.png" alt="Minh họa Hương cốm mùa thu" class="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Bấm để phóng to 🔍</div>
                </div>
                
                <div class="serif-font text-gray-800 leading-relaxed max-w-4xl mx-auto flex flex-col gap-12 reading-content text-xl md:text-4xl">
                    <!-- Khổ 1 & Khổ 2 -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        <div class="bg-emerald-50/20 p-6 md:p-8 rounded-[24px] border border-emerald-50 shadow-sm">
                            <p class="italic mb-0">
                                Tháng Chín heo may về phố<br>
                                Dắt theo hương cốm vào thu<br>
                                Sớm nay xôn xao ô cửa<br>
                                Gió thơm vừa ghé – ô kìa!
                            </p>
                        </div>
                        <div class="bg-emerald-50/20 p-6 md:p-8 rounded-[24px] border border-emerald-50 shadow-sm">
                            <p class="italic mb-0">
                                Gió kể: Ngày xưa hạt thóc<br>
                                Trời đem gieo tặng nhà nông<br>
                                Sớm khuya mồ hôi đổ xuống<br>
                                Đợi mùa cây lúa trĩu bông!
                            </p>
                        </div>
                    </div>

                    <!-- Khổ 3 & Khổ 4 -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        <div class="bg-emerald-50/20 p-6 md:p-8 rounded-[24px] border border-emerald-50 shadow-sm">
                            <p class="italic mb-0">
                                Hạt lúa tròn căng hơi sữa<br>
                                Thảo thơm dâng tặng cho đời<br>
                                Tay mẹ, tay bà sàng sẩy<br>
                                Cốm mang hồn đất, hồn người.
                            </p>
                        </div>
                        <div class="bg-emerald-50/20 p-6 md:p-8 rounded-[24px] border border-emerald-50 shadow-sm">
                            <p class="italic mb-0">
                                Em thấy màu vàng của nắng<br>
                                Em thấy màu xanh của trời<br>
                                Em thấy màu nâu của đất<br>
                                Ủ trong hạt cốm xanh ngời!
                            </p>
                        </div>
                    </div>

                    <!-- Khổ 5 -->
                    <div class="w-full bg-emerald-50/30 p-8 rounded-[32px] border-2 border-emerald-100/60 shadow-inner max-w-xl mx-auto">
                        <p class="italic mb-0">
                            Tháng Chín bước chân ra phố<br>
                            Tay lùa từng ngón gió thơm<br>
                            Hồ Gươm chớp đôi mắt biếc<br>
                            Nhắc mùa hương cốm vừa lên!
                        </p>
                        <p class="text-right italic font-black text-emerald-800 mt-6 text-xl md:text-2xl">— Bảo Ngọc —</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 💬 Câu hỏi Tìm hiểu bài -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-emerald-100">
                <div class="flex items-center gap-4 mb-8">
                    <div class="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-lg md:text-2xl font-black shadow-lg shadow-emerald-100">❓</div>
                    <h3 class="text-2xl md:text-5xl font-black text-emerald-950">Trả lời câu hỏi tìm hiểu bài</h3>
                </div>

                <div class="space-y-4">
                    <!-- Câu 1 -->
                    <div class="accordion-item bg-emerald-50/20 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-all overflow-hidden">
                        <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                            <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">1. Tìm trong khổ thơ thứ nhất những chi tiết nói về khung cảnh thiên nhiên và cảm xúc của con người khi mùa cốm đến.</span>
                            <div class="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 ml-2 group-hover:bg-emerald-200 transition-colors"><span class="text-emerald-700 font-bold text-lg md:text-3xl">?</span></div>
                        </button>
                        <div class="accordion-content">
                            <div class="px-6 pb-6 pt-4 text-gray-700 leading-relaxed border-t border-emerald-100 bg-emerald-50/20 text-lg md:text-3xl">
                                <ul class="list-disc pl-5 space-y-2 font-medium">
                                    <li><b>Khung cảnh thiên nhiên:</b> Thời gian là "Tháng Chín", có "gió heo may về phố", "gió thơm vừa ghé" mang theo hương cốm mùa thu.</li>
                                    <li><b>Cảm xúc của con người:</b> Sự náo nức, ngỡ ngàng và vui tươi: "sớm nay xôn xao ô cửa", thốt lên tiếng reo vui đầy thích thú "ô kìa!".</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Câu 2 -->
                    <div class="accordion-item bg-emerald-50/20 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-all overflow-hidden">
                        <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                            <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">2. Dựa vào sơ đồ dưới đây, kể lại hành trình làm ra hạt cốm theo lời của gió.</span>
                            <div class="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 ml-2 group-hover:bg-emerald-200 transition-colors"><span class="text-emerald-700 font-bold text-lg md:text-3xl">?</span></div>
                        </button>
                        <div class="accordion-content">
                            <div class="px-6 pb-6 pt-4 text-gray-700 leading-relaxed border-t border-emerald-100 bg-emerald-50/20 text-lg md:text-3xl">
                                <p class="font-bold mb-3">Hành trình làm ra hạt cốm đầy bền bỉ:</p>
                                <ol class="list-decimal pl-5 space-y-2 font-medium">
                                    <li>Ban đầu là những hạt thóc giống quý giá do trời ban tặng cho nhà nông gieo xuống đất.</li>
                                    <li>Người nông dân phải đổ bao mồ hôi, công sức sớm khuya để chăm bón ruộng lúa.</li>
                                    <li>Đợi đến khi lúa chín trĩu bông, hạt lúa non tích tụ dòng sữa ngọt lịm tròn căng.</li>
                                    <li>Gặt lúa về, qua bàn tay bà, tay mẹ sàng sẩy khéo léo để lọc lấy hạt lúa sữa, đem giã cốm.</li>
                                    <li>Cuối cùng tạo nên những hạt cốm xanh ngời, mang trong mình cả hồn đất và hồn người.</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <!-- Câu 3 -->
                    <div class="accordion-item bg-emerald-50/20 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-all overflow-hidden">
                        <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                            <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">3. Cách tả màu sắc của hạt cốm cho thấy bạn nhỏ cảm nhận thế nào về món quà kì diệu của mùa thu?</span>
                            <div class="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 ml-2 group-hover:bg-emerald-200 transition-colors"><span class="text-emerald-700 font-bold text-lg md:text-3xl">?</span></div>
                        </button>
                        <div class="accordion-content">
                            <div class="px-6 pb-6 pt-4 text-gray-700 leading-relaxed border-t border-emerald-100 bg-emerald-50/20 font-medium text-lg md:text-3xl">
                                Bạn nhỏ nhận thấy hạt cốm không chỉ đơn thuần là món ăn mà là sự hội tụ tinh hoa đất trời: có <b>màu vàng của nắng</b>, <b>màu xanh của trời</b>, và <b>màu nâu của đất</b>. Tất cả những màu sắc thiên nhiên ấy được ủ giấu, kết tinh bên trong hạt cốm xanh ngời kì diệu. Bạn nhỏ trân trọng cốm như một tác phẩm nghệ thuật của tự nhiên.
                            </div>
                        </div>
                    </div>

                    <!-- Câu 4 -->
                    <div class="accordion-item bg-emerald-50/20 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-all overflow-hidden">
                        <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                            <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">4. Chi tiết nào cho thấy cốm là thức quà đặc trưng của Hà Nội?</span>
                            <div class="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 ml-2 group-hover:bg-emerald-200 transition-colors"><span class="text-emerald-700 font-bold text-lg md:text-3xl">?</span></div>
                        </button>
                        <div class="accordion-content">
                            <div class="px-6 pb-6 pt-4 text-gray-700 leading-relaxed border-t border-emerald-100 bg-emerald-50/20 font-medium text-lg md:text-3xl">
                                Chi tiết ở khổ thơ cuối nhắc đến địa danh <b>"Hồ Gươm chớp đôi mắt biếc"</b>. Hồ Gươm là biểu tượng văn hóa lịch sử lâu đời của Thủ đô Hà Nội. Hình ảnh này khẳng định cốm chính là đặc sản tinh tế gắn liền với mùa thu của đất Thăng Long.
                            </div>
                        </div>
                    </div>

                    <!-- Câu 5 -->
                    <div class="accordion-item bg-emerald-50/20 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-all overflow-hidden">
                        <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                            <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">5. Em cảm nhận được điều gì về tình cảm của tác giả đối với hương cốm trong mùa thu Hà Nội?</span>
                            <div class="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 ml-2 group-hover:bg-emerald-200 transition-colors"><span class="text-emerald-700 font-bold text-lg md:text-3xl">?</span></div>
                        </button>
                        <div class="accordion-content">
                            <div class="px-6 pb-6 pt-4 text-gray-700 leading-relaxed border-t border-emerald-100 bg-emerald-50/20 font-medium text-lg md:text-3xl">
                                Tác giả dành một tình cảm vô cùng sâu nặng, thiết tha đối với hương cốm và mùa thu quê hương. Đó là sự trân trọng nét đẹp ẩm thực cổ truyền, lòng biết ơn sâu sắc đối với mồ hôi công sức lao động của người nông dân cùng sự khéo léo của mẹ, của bà khi làm ra thức quà tinh túy này.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 🌟 Ý nghĩa bài thơ -->
        <section class="bg-gradient-to-r from-emerald-700 to-green-800 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-100 mb-1">Nội dung chính</p>
                    <h3 class="text-2xl md:text-4xl font-black uppercase tracking-tight">Ý NGHĨA BÀI THƠ</h3>
                </div>
                <div class="flex-grow">
                    <p class="text-xl font-bold leading-relaxed text-emerald-50">
                        Bài thơ ca ngợi cốm - món quà kỳ diệu và tinh tế của mùa thu Hà Nội. Đồng thời thể hiện lòng biết ơn chân thành đối với thiên nhiên đất trời và công sức lao động cần cù, khéo léo của con người để tạo ra hạt cốm thơm lành.
                    </p>
                </div>
            </div>
        </section>
    </div>
    `,
    "practice": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto pb-12">
        <!-- 🌾 Trò chơi Luyện tập tương tác -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-emerald-100">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">🎯</div>
                    <h3 class="text-2xl md:text-5xl font-black text-emerald-950">Thử thách: Hành trình làm Cốm</h3>
                </div>
                
                <p class="text-xl font-bold text-gray-600 mb-8 leading-relaxed">
                    Em hãy đọc kỹ nội dung các thẻ dưới đây và chọn số thứ tự (từ 1 đến 5) phù hợp để khôi phục đúng quy trình làm cốm dựa theo bài thơ và sơ đồ nhé!
                </p>

                <!-- Grid các thẻ quy trình (Đã được xáo trộn) -->
                <div class="grid grid-cols-1 gap-6 mb-8">
                    
                    <!-- Hộp 1 (Thực tế là Bước 3) -->
                    <div class="flex flex-col sm:flex-row items-center gap-4 p-5 bg-emerald-50/30 rounded-3xl border-2 border-emerald-100 shadow-sm">
                        <div class="shrink-0">
                            <select id="sel-162-step3" class="p-4 bg-white border-2 border-emerald-300 text-emerald-900 rounded-2xl text-xl font-black focus:outline-none focus:border-emerald-600 shadow-md">
                                <option value="">Chọn vị trí</option>
                                <option value="1">Vị trí 1</option>
                                <option value="2">Vị trí 2</option>
                                <option value="3">Vị trí 3</option>
                                <option value="4">Vị trí 4</option>
                                <option value="5">Vị trí 5</option>
                            </select>
                        </div>
                        <div class="flex-grow">
                            <h4 class="text-lg md:text-2xl font-black text-emerald-950 mb-1">Cây lúa chín trĩu bông</h4>
                            <p class="text-lg md:text-xl font-bold text-gray-600">Đợi mùa lúa chín trĩu bông, những hạt lúa non thơm thảo căng tròn dòng sữa ngọt.</p>
                        </div>
                        <div class="text-2xl md:text-4xl hidden sm:block">🌾</div>
                    </div>

                    <!-- Hộp 2 (Thực tế là Bước 5) -->
                    <div class="flex flex-col sm:flex-row items-center gap-4 p-5 bg-emerald-50/30 rounded-3xl border-2 border-emerald-100 shadow-sm">
                        <div class="shrink-0">
                            <select id="sel-162-step5" class="p-4 bg-white border-2 border-emerald-300 text-emerald-900 rounded-2xl text-xl font-black focus:outline-none focus:border-emerald-600 shadow-md">
                                <option value="">Chọn vị trí</option>
                                <option value="1">Vị trí 1</option>
                                <option value="2">Vị trí 2</option>
                                <option value="3">Vị trí 3</option>
                                <option value="4">Vị trí 4</option>
                                <option value="5">Vị trí 5</option>
                            </select>
                        </div>
                        <div class="flex-grow">
                            <h4 class="text-lg md:text-2xl font-black text-emerald-950 mb-1">Hạt cốm xanh ngời dẻo thơm</h4>
                            <p class="text-lg md:text-xl font-bold text-gray-600">Những hạt cốm dẻo thơm mang trọn vẹn cả hương đất lẫn tấm lòng thơm thảo của con người.</p>
                        </div>
                        <div class="text-2xl md:text-4xl hidden sm:block">💚</div>
                    </div>

                    <!-- Hộp 3 (Thực tế là Bước 1) -->
                    <div class="flex flex-col sm:flex-row items-center gap-4 p-5 bg-emerald-50/30 rounded-3xl border-2 border-emerald-100 shadow-sm">
                        <div class="shrink-0">
                            <select id="sel-162-step1" class="p-4 bg-white border-2 border-emerald-300 text-emerald-900 rounded-2xl text-xl font-black focus:outline-none focus:border-emerald-600 shadow-md">
                                <option value="">Chọn vị trí</option>
                                <option value="1">Vị trí 1</option>
                                <option value="2">Vị trí 2</option>
                                <option value="3">Vị trí 3</option>
                                <option value="4">Vị trí 4</option>
                                <option value="5">Vị trí 5</option>
                            </select>
                        </div>
                        <div class="flex-grow">
                            <h4 class="text-lg md:text-2xl font-black text-emerald-950 mb-1">Trời ban hạt thóc</h4>
                            <p class="text-lg md:text-xl font-bold text-gray-600">Trời đem ban tặng những hạt thóc giống quý giá ban đầu cho người nông dân gieo trồng.</p>
                        </div>
                        <div class="text-2xl md:text-4xl hidden sm:block">🌱</div>
                    </div>

                    <!-- Hộp 4 (Thực tế là Bước 4) -->
                    <div class="flex flex-col sm:flex-row items-center gap-4 p-5 bg-emerald-50/30 rounded-3xl border-2 border-emerald-100 shadow-sm">
                        <div class="shrink-0">
                            <select id="sel-162-step4" class="p-4 bg-white border-2 border-emerald-300 text-emerald-900 rounded-2xl text-xl font-black focus:outline-none focus:border-emerald-600 shadow-md">
                                <option value="">Chọn vị trí</option>
                                <option value="1">Vị trí 1</option>
                                <option value="2">Vị trí 2</option>
                                <option value="3">Vị trí 3</option>
                                <option value="4">Vị trí 4</option>
                                <option value="5">Vị trí 5</option>
                            </select>
                        </div>
                        <div class="flex-grow">
                            <h4 class="text-lg md:text-2xl font-black text-emerald-950 mb-1">Mẹ và bà sàng sẩy, giã cốm</h4>
                            <p class="text-lg md:text-xl font-bold text-gray-600">Đem lúa non sữa về nhà, bàn tay sàng sẩy khéo léo và giã cốm kỳ công của bà, của mẹ.</p>
                        </div>
                        <div class="text-2xl md:text-4xl hidden sm:block">🥣</div>
                    </div>

                    <!-- Hộp 5 (Thực tế là Bước 2) -->
                    <div class="flex flex-col sm:flex-row items-center gap-4 p-5 bg-emerald-50/30 rounded-3xl border-2 border-emerald-100 shadow-sm">
                        <div class="shrink-0">
                            <select id="sel-162-step2" class="p-4 bg-white border-2 border-emerald-300 text-emerald-900 rounded-2xl text-xl font-black focus:outline-none focus:border-emerald-600 shadow-md">
                                <option value="">Chọn vị trí</option>
                                <option value="1">Vị trí 1</option>
                                <option value="2">Vị trí 2</option>
                                <option value="3">Vị trí 3</option>
                                <option value="4">Vị trí 4</option>
                                <option value="5">Vị trí 5</option>
                            </select>
                        </div>
                        <div class="flex-grow">
                            <h4 class="text-lg md:text-2xl font-black text-emerald-950 mb-1">Người nông dân đổ mồ hôi chăm bón</h4>
                            <p class="text-lg md:text-xl font-bold text-gray-600">Sớm khuya đổ mồ hôi xuống đồng ruộng để chăm sóc cho cây lúa tươi tốt.</p>
                        </div>
                        <div class="text-2xl md:text-4xl hidden sm:block">🧑‍🌾</div>
                    </div>

                </div>

                <!-- Nút bấm kiểm tra -->
                <div class="flex justify-end items-center gap-4">
                    <button onclick="window.checkHanhTrinhCom()" class="px-10 py-4 bg-emerald-600 text-white font-black text-xl rounded-2xl shadow-lg hover:bg-emerald-700 active:scale-95 transition-all flex items-center gap-3">
                        <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-emerald-600 font-black text-sm shadow-sm">E</div>
                        <span>KIỂM TRA KẾT QUẢ</span>
                    </button>
                    <button onclick="window.resetHanhTrinhCom()" class="w-12 h-12 bg-amber-500 hover:bg-amber-600 text-white rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại">🔄</button>
                </div>

                <!-- Chỗ hiện thông báo chấm điểm -->
                <div id="fb-162-practice" class="hidden mt-8 p-6 rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500 text-xl font-bold"></div>
            </div>
        </section>
    </div>
    `,
    "quizPool": [
        {
            "question": "Bài thơ 'Hương cốm mùa thu' do ai sáng tác?",
            "options": ["Tô Hoài", "Bảo Ngọc", "Trần Đăng Khoa", "Lâm Phong"],
            "answer": 1,
            "level": "Dễ"
        },
        {
            "question": "Tháng nào trong năm được nhắc đến khi mùa gió heo may và hương cốm về phố?",
            "options": ["Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một"],
            "answer": 1,
            "level": "Dễ"
        },
        {
            "question": "Trong bài thơ, loại gió nào thổi về thành phố mang theo hương cốm ngọt ngào?",
            "options": ["Gió bấc", "Gió heo may", "Gió lào", "Gió nồm"],
            "answer": 1,
            "level": "Dễ"
        },
        {
            "question": "Theo lời kể của gió, hạt thóc ban đầu do ai đem gieo tặng nhà nông?",
            "options": ["Đất lành", "Mẹ và bà", "Trời", "Các bạn nhỏ"],
            "answer": 2,
            "level": "Trung bình"
        },
        {
            "question": "Cụm từ 'tròn căng hơi sữa' được dùng để miêu tả đặc điểm của bộ phận nào ở cây lúa?",
            "options": ["Lá lúa", "Rễ lúa", "Hạt lúa non", "Thân lúa"],
            "answer": 2,
            "level": "Trung bình"
        },
        {
            "question": "Ai là người trực tiếp sàng sẩy hạt lúa sữa để chế biến cốm?",
            "options": ["Người nông dân", "Bố và con", "Tay mẹ, tay bà", "Gió heo may"],
            "answer": 2,
            "level": "Dễ"
        },
        {
            "question": "Hạt cốm được miêu tả mang 'hồn' của những yếu tố nào?",
            "options": ["Hồn sông, hồn núi", "Hồn mây, hồn gió", "Hồn đất, hồn người", "Hồn hoa, hồn lá"],
            "answer": 2,
            "level": "Dễ"
        },
        {
            "question": "Màu sắc nào KHÔNG được ủ trong hạt cốm xanh ngời theo quan sát của bạn nhỏ?",
            "options": ["Màu vàng của nắng", "Màu đỏ của lửa", "Màu xanh của trời", "Màu nâu của đất"],
            "answer": 1,
            "level": "Trung bình"
        },
        {
            "question": "Địa danh nổi tiếng nào của Hà Nội xuất hiện ở khổ thơ cuối để khẳng định xuất xứ của cốm?",
            "options": ["Hồ Tây", "Chùa Một Cột", "Hồ Gươm", "Cầu Long Biên"],
            "answer": 2,
            "level": "Dễ"
        },
        {
            "question": "Biện pháp nghệ thuật nào nổi bật nhất được dùng trong câu thơ 'Hồ Gươm chớp đôi mắt biếc'?",
            "options": ["So sánh", "Nhân hóa", "Điệp ngữ", "Ẩn dụ chuyển đổi cảm giác"],
            "answer": 1,
            "level": "Khó"
        },
        {
            "question": "Ý nghĩa sâu sắc ẩn sau hình ảnh bà và mẹ sàng sẩy làm cốm là gì?",
            "options": [
                "Làm việc nhà giúp đỡ gia đình",
                "Sự trân quý giá trị lao động thủ công truyền thống và tình thương của người thân",
                "Trò chơi dân gian ngày mùa thu",
                "Trang trí nhà cửa đón thu"
            ],
            "answer": 1,
            "level": "Khó"
        },
        {
            "question": "Câu thơ 'Sớm nay xôn xao ô cửa' thể hiện điều gì?",
            "options": [
                "Tiếng ồn ào của xe cộ trên phố",
                "Tâm trạng náo nức, háo hức đón mùa cốm mới về thành phố",
                "Gió bão thổi mạnh làm cửa rung lắc",
                "Mọi người đang cãi nhau ngoài cửa"
            ],
            "answer": 1,
            "level": "Khó"
        },
        {
            "question": "Từ nào đồng nghĩa với từ 'Thảo thơm' trong văn cảnh của bài học?",
            "options": ["Tốt bụng, hiền lành", "Thơm tho, sạch sẽ", "Biết ơn, ngọt lành", "Giàu sang, phú quý"],
            "answer": 2,
            "level": "Trung bình"
        },
        {
            "question": "Hạt thóc ban đầu muốn trở thành hạt cốm xanh dẻo phải trải qua điều kiện nào của nhà nông?",
            "options": [
                "Sớm khuya đổ mồ hôi xuống ruộng đồng",
                "Mua bán trao đổi ở chợ",
                "Trời ban mưa thuận gió hòa không cần chăm sóc",
                "Chỉ cần phơi nắng"
            ],
            "answer": 0,
            "level": "Trung bình"
        },
        {
            "question": "Cảm xúc chung của bài thơ gửi đến bạn đọc là gì?",
            "options": [
                "Sự buồn bã khi mùa thu về làm lá rơi",
                "Sự tự hào, yêu mến thức quà ẩm thực thanh nhã của quê hương",
                "Khao khát đi du lịch vòng quanh đất nước",
                "Sự lo âu về tương lai của nghề làm cốm"
            ],
            "answer": 1,
            "level": "Khó"
        }
    ]
};

// --- HÀM TƯƠNG TÁC DÀNH CHO TAB LUYỆN TẬP (WINDOW GLOBALS) ---

window.checkHanhTrinhCom = function() {
    const s1 = document.getElementById("sel-162-step1")?.value;
    const s2 = document.getElementById("sel-162-step2")?.value;
    const s3 = document.getElementById("sel-162-step3")?.value;
    const s4 = document.getElementById("sel-162-step4")?.value;
    const s5 = document.getElementById("sel-162-step5")?.value;

    const fb = document.getElementById("fb-162-practice");

    if (!s1 || !s2 || !s3 || !s4 || !s5) {
        fb.classList.remove("hidden", "bg-green-100", "text-green-800", "bg-red-100", "text-red-800");
        fb.classList.add("bg-amber-100", "text-amber-800");
        fb.innerHTML = "⚠️ Em vui lòng chọn đầy đủ thứ tự cho cả 5 bước trước khi kiểm tra nhé!";
        return;
    }

    if (s1 === "1" && s2 === "2" && s3 === "3" && s4 === "4" && s5 === "5") {
        fb.classList.remove("hidden", "bg-amber-100", "text-amber-800", "bg-red-100", "text-red-800");
        fb.classList.add("bg-green-100", "text-green-800");
        fb.innerHTML = "🎉 Tuyệt vời! Em đã sắp xếp hoàn toàn chính xác hành trình làm ra hạt cốm dẻo thơm. Em hiểu bài thơ rất tốt!";
    } else {
        fb.classList.remove("hidden", "bg-amber-100", "text-amber-800", "bg-green-100", "text-green-800");
        fb.classList.add("bg-red-100", "text-red-800");
        fb.innerHTML = "❌ Có bước sắp xếp chưa đúng rồi. Em hãy đọc kỹ lại sơ đồ hành trình trong bài thơ và thử lại nhé!";
    }
};

window.resetHanhTrinhCom = function() {
    ["sel-162-step1", "sel-162-step2", "sel-162-step3", "sel-162-step4", "sel-162-step5"].forEach(id => {
        const select = document.getElementById(id);
        if (select) select.value = "";
    });
    const fb = document.getElementById("fb-162-practice");
    if (fb) {
        fb.classList.add("hidden");
        fb.innerHTML = "";
    }
};
