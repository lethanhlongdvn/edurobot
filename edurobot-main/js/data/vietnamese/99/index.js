export const lesson099 = {
    "topic": "Tiếng Việt 5",
    "week": "15",
    "period": "99",
    "title": "TRANH LÀNG HỒ",
    "desc": "Bài đọc giúp học sinh cảm nhận vẻ đẹp độc đáo, tinh tế của tranh dân gian Đông Hồ (làng Hồ) và lòng biết ơn sâu sắc đối với những người nghệ sĩ tạo hình của nhân dân.",
    "subject": "Đọc",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-emerald-950">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-emerald-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-emerald-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-emerald-950 mb-4 flex items-center gap-3">
            <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-emerald-900 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Đọc trôi chảy, đúng nhịp điệu và giàu cảm xúc bài văn "Tranh làng Hồ" của nhà văn Nguyễn Tuân.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Hiểu được giá trị văn hóa nghệ thuật độc đáo và kĩ thuật tạo màu tự nhiên tinh tế của dòng tranh dân gian Đông Hồ.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Bồi đắp tình yêu quê hương, đất nước và niềm tự hào về di sản văn hóa truyền thống của dân tộc.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG: ĐOÁN TÊN TRANH -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động: Thử đoán tên tranh</h3>
        </div>
        <p class="text-xl md:text-2xl font-bold text-gray-700">
            👉 Em hãy quan sát ba bức tranh Đông Hồ được treo trên dây dưới đây và lựa chọn đúng tên của chúng nhé:
        </p>

        <!-- Trưng bày tranh -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4">
            <!-- Tranh 1 -->
            <div class="bg-amber-50/40 p-4 rounded-3xl border border-amber-100 flex flex-col items-center space-y-4 shadow-sm">
                <div class="w-full h-48 bg-amber-100 rounded-2xl flex items-center justify-center relative overflow-hidden border border-amber-200">
                    <span class="text-7xl">🤼‍♂️</span>
                    <span class="absolute top-2 left-2 bg-emerald-650 text-white px-2.5 py-0.5 rounded-full font-bold shadow text-lg md:text-3xl">Tranh 1</span>
                </div>
                <div class="w-full">
                    <select id="p99-kd-t1" class="w-full p-3 border-2 border-emerald-200 rounded-xl font-bold bg-white text-lg">
                        <option value="">-- Chọn tên tranh --</option>
                        <option value="dauvat">Tranh Đấu vật</option>
                        <option value="chantrau">Tranh Chăn trâu thổi sáo</option>
                        <option value="omvit">Tranh Em bé ôm vịt (Phú quý)</option>
                    </select>
                </div>
            </div>

            <!-- Tranh 2 -->
            <div class="bg-amber-50/40 p-4 rounded-3xl border border-amber-100 flex flex-col items-center space-y-4 shadow-sm">
                <div class="w-full h-48 bg-amber-100 rounded-2xl flex items-center justify-center relative overflow-hidden border border-amber-200">
                    <span class="text-7xl">🐂🌾</span>
                    <span class="absolute top-2 left-2 bg-emerald-650 text-white px-2.5 py-0.5 rounded-full font-bold shadow text-lg md:text-3xl">Tranh 2</span>
                </div>
                <div class="w-full">
                    <select id="p99-kd-t2" class="w-full p-3 border-2 border-emerald-200 rounded-xl font-bold bg-white text-lg">
                        <option value="">-- Chọn tên tranh --</option>
                        <option value="dauvat">Tranh Đấu vật</option>
                        <option value="chantrau">Tranh Chăn trâu thổi sáo</option>
                        <option value="omvit">Tranh Em bé ôm vịt (Phú quý)</option>
                    </select>
                </div>
            </div>

            <!-- Tranh 3 -->
            <div class="bg-amber-50/40 p-4 rounded-3xl border border-amber-100 flex flex-col items-center space-y-4 shadow-sm">
                <div class="w-full h-48 bg-amber-100 rounded-2xl flex items-center justify-center relative overflow-hidden border border-amber-200">
                    <span class="text-7xl">👶🦆</span>
                    <span class="absolute top-2 left-2 bg-emerald-650 text-white px-2.5 py-0.5 rounded-full font-bold shadow text-lg md:text-3xl">Tranh 3</span>
                </div>
                <div class="w-full">
                    <select id="p99-kd-t3" class="w-full p-3 border-2 border-emerald-200 rounded-xl font-bold bg-white text-lg">
                        <option value="">-- Chọn tên tranh --</option>
                        <option value="dauvat">Tranh Đấu vật</option>
                        <option value="chantrau">Tranh Chăn trâu thổi sáo</option>
                        <option value="omvit">Tranh Em bé ôm vịt (Phú quý)</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="flex justify-center pt-2">
            <button onclick="kiemTraKhoiDong99()" class="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl transition-all text-lg shadow-md active:scale-95">KIỂM TRA KẾT QUẢ ✓</button>
        </div>
        <div id="fb-vn99-kd" class="hidden p-4 rounded-xl text-lg font-bold text-center mt-2 max-w-xl mx-auto"></div>
    </div>

    <!-- 📖 THƯ VIỆN ĐỌC SÁCH -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-8">
        <div class="flex items-center justify-between border-b border-emerald-100 pb-4">
            <h3 class="text-2xl md:text-5xl font-black text-emerald-800 flex items-center gap-3">
                <span>📖</span> Văn bản đọc
            </h3>
            <span class="text-sm font-black text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">Bài 27 - SGK Trang 132</span>
        </div>

        <!-- Nội dung bài đọc -->
        <article class="bg-amber-50 bg-opacity-20 p-6 md:p-10 rounded-[36px] border border-amber-100/50 shadow-inner max-w-4xl mx-auto leading-relaxed text-gray-800 space-y-6">
            <h4 class="text-3xl font-black text-center text-emerald-900 tracking-wide mb-6 uppercase">Tranh làng Hồ</h4>
            
            <p class="text-2xl md:text-3xl font-normal text-justify indent-8 md:indent-12 leading-relaxed">
                Từ ngày còn ít tuổi, tôi đã thích những tranh lợn, gà, chuột, ếch, tranh cây dừa, tranh tố nữ của làng Hồ. Mỗi lần Tết đến, đứng trước những cái chiếu bày tranh làng Hồ giải trên các lề phố Hà Nội, lòng tôi thấm thía một nỗi biết ơn đối với những người nghệ sĩ tạo hình của nhân dân. Họ đã đem vào cuộc sống một cách nhìn thuần phác, càng ngắm càng thấy đậm đà, lành mạnh, hóm hỉnh và tươi vui.
            </p>

            <p class="text-2xl md:text-3xl font-normal text-justify indent-8 md:indent-12 leading-relaxed">
                Phải yêu mến cuộc đời trồng trọt, chăn nuôi lắm mới khắc được những tranh lợn ráy có những khoáy âm dương rất có duyên, mới vẽ được những đàn gà con tưng bừng như ca múa bên gà mái mẹ.
            </p>

            <p class="text-2xl md:text-3xl font-normal text-justify indent-8 md:indent-12 leading-relaxed">
                Kĩ thuật tranh làng Hồ đã đạt đến sự trang trí tinh tế: những bộ tranh tố nữ áo màu, quần hoa chanh nền đen lĩnh của một thứ màu đen rất Việt Nam. Màu đen không pha bằng thuốc mà luyện bằng bột than của những chất liệu gợi nhắc thiết tha đến đồng quê đất nước: chất rơm bếp, than của cói chiếu và than của lá tre mùa thu rụng lá. Cái màu trắng điệp cũng là một sự sáng tạo góp phần vào kho tàng màu sắc của dân tộc trong hội họa. Màu trắng ấy càng ngắm càng ưa nhìn; những hạt cát của điệp trắng nhấp nhánh muôn ngàn hạt phấn làm tăng thêm vẻ thâm thuý cho khuôn mặt, tăng thêm sống động cho dáng người trong tranh.
            </p>

            <p class="text-right text-xl md:text-2xl font-bold text-gray-500 italic mt-6">
                (Theo Nguyễn Tuân)
            </p>
        </article>

        <!-- Từ ngữ khó -->
        <div class="bg-amber-50/30 p-6 md:p-8 rounded-3xl border border-amber-100 max-w-4xl mx-auto space-y-4 shadow-sm">
            <h5 class="text-xl md:text-2xl font-black text-amber-900 border-b border-amber-200 pb-2 flex items-center gap-2">
                <span>💡</span> Từ ngữ nghĩa khó trong bài:
            </h5>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg md:text-xl font-bold text-gray-750">
                <li><strong class="text-amber-800">Làng Hồ (làng Đông Hồ):</strong> thuộc huyện Thuận Thành, tỉnh Bắc Ninh, chuyên nghề làm tranh.</li>
                <li><strong class="text-amber-800">Tranh tố nữ:</strong> loại tranh dân gian thể hiện nét đẹp của người phụ nữ Việt Nam.</li>
                <li><strong class="text-amber-800">Lĩnh:</strong> một thứ lụa đen bóng.</li>
                <li><strong class="text-amber-800">Màu trắng điệp:</strong> màu trắng do bột lấy từ vỏ sò, vỏ điệp ở biển trộn với hồ loãng nấu bằng bột nếp tạo thành.</li>
            </ul>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 TÌM HIỂU BÀI -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-8">
        <div class="flex items-center gap-3 border-b border-emerald-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">?</span>
            <h3 class="text-2xl md:text-5xl font-black text-emerald-800">
                Trả lời câu hỏi tìm hiểu bài (SGK Trang 133):
            </h3>
        </div>

        <div class="space-y-8 max-w-4xl mx-auto">
            <!-- Câu 1 -->
            <div class="bg-amber-50/20 p-6 rounded-3xl border border-amber-100/50 space-y-3">
                <p class="text-xl md:text-2xl font-black text-gray-800">1. Kể tên những bức tranh làng Hồ được nhắc tới trong bài văn?</p>
                <div class="grid grid-cols-1 gap-2.5">
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-150 cursor-pointer hover:bg-emerald-50/50 font-bold text-lg">
                        <input type="radio" name="p99-c1" value="wrong1" class="w-5 h-5 text-emerald-800">
                        <span>Tranh phong cảnh, tranh sơn dầu và tranh tĩnh vật các loại hoa quả.</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-150 cursor-pointer hover:bg-emerald-50/50 font-bold text-lg">
                        <input type="radio" name="p99-c1" value="correct" class="w-5 h-5 text-emerald-800">
                        <span>Tranh lợn, gà, chuột, ếch, tranh cây dừa và tranh tố nữ.</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-150 cursor-pointer hover:bg-emerald-50/50 font-bold text-lg">
                        <input type="radio" name="p99-c1" value="wrong2" class="w-5 h-5 text-emerald-800">
                        <span>Tranh phong cảnh Tây Bắc, tranh múa rồng và tranh vẽ ngày Tết cổ truyền.</span>
                    </label>
                </div>
            </div>

            <!-- Câu 2 -->
            <div class="bg-emerald-50/10 p-6 rounded-3xl border border-emerald-100/50 space-y-3">
                <p class="text-xl md:text-2xl font-black text-gray-800">2. Hai bức tranh "Lợn ăn cây ráy" và "Đàn gà mẹ con" được miêu tả như thế nào?</p>
                <div class="grid grid-cols-1 gap-2.5">
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-150 cursor-pointer hover:bg-emerald-50/50 font-bold text-lg">
                        <input type="radio" name="p99-c2" value="correct" class="w-5 h-5 text-emerald-800">
                        <span>Tranh lợn ráy có những khoáy âm dương rất có duyên; đàn gà con tưng bừng như ca múa bên gà mái mẹ.</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-150 cursor-pointer hover:bg-emerald-50/50 font-bold text-lg">
                        <input type="radio" name="p99-c2" value="wrong1" class="w-5 h-5 text-emerald-800">
                        <span>Tranh lợn ráy to khỏe, béo tròn; đàn gà con đứng im thin thít bảo vệ xung quanh mẹ.</span>
                    </label>
                </div>
            </div>

            <!-- Câu 3 -->
            <div class="bg-sky-50/10 p-6 rounded-3xl border border-sky-100/50 space-y-3">
                <p class="text-xl md:text-2xl font-black text-gray-800">3. Kĩ thuật tạo màu của tranh làng Hồ có gì đặc biệt?</p>
                <div class="grid grid-cols-1 gap-2.5">
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-150 cursor-pointer hover:bg-emerald-50/50 font-bold text-lg">
                        <input type="radio" name="p99-c3" value="wrong1" class="w-5 h-5 text-emerald-800">
                        <span>Màu sắc được pha trộn từ các loại bột màu hóa học nhập khẩu từ các nước phương Tây.</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-150 cursor-pointer hover:bg-emerald-50/50 font-bold text-lg">
                        <input type="radio" name="p99-c3" value="correct" class="w-5 h-5 text-emerald-800">
                        <span>Màu đen chế từ rơm bếp, cói chiếu, lá tre; màu trắng điệp làm từ vỏ điệp nhấp nhánh muôn ngàn cát phấn.</span>
                    </label>
                </div>
            </div>

            <!-- Câu 4 -->
            <div class="bg-amber-50/20 p-6 rounded-3xl border border-amber-100/50 space-y-3">
                <p class="text-xl md:text-2xl font-black text-gray-800">4. Tác giả bày tỏ sự biết ơn đối với người nghệ sĩ dân gian vì điều gì?</p>
                <div class="grid grid-cols-1 gap-2.5">
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-150 cursor-pointer hover:bg-emerald-50/50 font-bold text-lg">
                        <input type="radio" name="p99-c4" value="A" class="w-5 h-5 text-emerald-800">
                        <span>A. Vì họ đã phản ánh cuộc sống rất chân thực, giản dị, hóm hỉnh và tươi vui.</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-150 cursor-pointer hover:bg-emerald-50/50 font-bold text-lg">
                        <input type="radio" name="p99-c4" value="B" class="w-5 h-5 text-emerald-800">
                        <span>B. Vì họ đã tạo nên những bức tranh từ tình yêu quê hương, đất nước tha thiết.</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-150 cursor-pointer hover:bg-emerald-50/50 font-bold text-lg">
                        <input type="radio" name="p99-c4" value="C" class="w-5 h-5 text-emerald-800">
                        <span>C. Vì kĩ thuật vẽ tranh của họ đã đạt đến mức độ sâu sắc, tinh tế.</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-150 cursor-pointer hover:bg-emerald-50/50 font-bold text-lg">
                        <input type="radio" name="p99-c4" value="ALL" class="w-5 h-5 text-emerald-800">
                        <span>D. Cả 3 ý kiến trên đều đúng và đều thể hiện sự trân trọng đối với họ.</span>
                    </label>
                </div>
            </div>

            <!-- Câu 5 -->
            <div class="bg-emerald-55/10 p-6 rounded-3xl border border-emerald-100 space-y-3">
                <p class="text-xl md:text-2xl font-black text-emerald-950">5. Nêu cảm nhận của em khi ngắm những bức tranh làng Hồ?</p>
                <p class="text-base font-bold text-gray-500">👉 Gợi ý: Em có thể viết về sự thích thú trước các hình ảnh ngộ nghĩnh, sự ngưỡng mộ tài năng nghệ sĩ, hay lòng tự hào dân tộc...</p>
                <textarea id="p99-vietvan" rows="4" placeholder="Nhập cảm nhận của em tại đây (từ 2-3 câu)..." class="w-full p-4 text-xl rounded-2xl border-2 border-emerald-100 outline-none focus:border-emerald-500 font-bold bg-white text-gray-800"></textarea>
                
                <div class="flex justify-center pt-2">
                    <button onclick="kiemTraCau5_99()" class="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-black text-lg rounded-xl shadow-md active:scale-95 transition-all flex items-center gap-2">
                        <span>👨‍🏫 THẦY E NHẬN XÉT</span>
                    </button>
                </div>
                <div id="fb-vn99-c5" class="hidden p-5 rounded-2xl font-bold text-lg mt-3"></div>
            </div>
        </div>

        <div class="flex justify-center pt-4 border-t border-emerald-100">
            <button onclick="kiemTraDocHieu99()" class="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl transition-all text-lg shadow-md active:scale-95">KẾT QUẢ ĐỌC HIỂU ✓</button>
        </div>
        <div id="fb-vn99-dh-global" class="hidden p-4 rounded-xl text-lg font-bold text-center mt-2 max-w-4xl mx-auto"></div>
    </section>

    <!-- 🎮 LUYỆN TẬP: GHÉP THẺ GIẢI NGHĨA TỪ -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-emerald-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">L</span>
            <h3 class="text-2xl md:text-5xl font-black text-emerald-800">
                Luyện tập: Ghép thẻ từ ngữ và giải nghĩa tương ứng
            </h3>
        </div>
        <p class="text-lg md:text-xl text-gray-700 font-bold">👉 Hướng dẫn: Chọn một từ màu vàng bên trái, sau đó chọn giải nghĩa tương ứng màu xanh bên phải để tạo thành cặp đúng.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-4">
            <!-- Cột Từ (Keys) -->
            <div class="space-y-3" id="p99-terms-col">
                <button onclick="selectTerm99('langho')" id="btn-term-langho" class="w-full p-4 text-left border-2 border-amber-250 bg-amber-50/60 rounded-2xl font-black text-xl hover:bg-amber-100 transition-all text-amber-950">Làng Hồ (làng Đông Hồ)</button>
                <button onclick="selectTerm99('tonu')" id="btn-term-tonu" class="w-full p-4 text-left border-2 border-amber-250 bg-amber-50/60 rounded-2xl font-black text-xl hover:bg-amber-100 transition-all text-amber-950">Tranh tố nữ</button>
                <button onclick="selectTerm99('linh')" id="btn-term-linh" class="w-full p-4 text-left border-2 border-amber-250 bg-amber-50/60 rounded-2xl font-black text-xl hover:bg-amber-100 transition-all text-amber-950">Lĩnh</button>
                <button onclick="selectTerm99('diep')" id="btn-term-diep" class="w-full p-4 text-left border-2 border-amber-250 bg-amber-50/60 rounded-2xl font-black text-xl hover:bg-amber-100 transition-all text-amber-950">Màu trắng điệp</button>
            </div>

            <!-- Cột Nghĩa (Values) -->
            <div class="space-y-3" id="p99-defs-col">
                <button onclick="selectDef99('linh')" id="btn-def-linh" class="w-full p-4 text-left border-2 border-emerald-250 bg-emerald-50/40 rounded-2xl font-bold text-lg hover:bg-emerald-100 transition-all text-emerald-950">Một loại lụa đen, mặt bóng, mịn màng.</button>
                <button onclick="selectDef99('langho')" id="btn-def-langho" class="w-full p-4 text-left border-2 border-emerald-250 bg-emerald-50/40 rounded-2xl font-bold text-lg hover:bg-emerald-100 transition-all text-emerald-950">Làng Đông Hồ thuộc huyện Thuận Thành, tỉnh Bắc Ninh, nổi tiếng với nghề vẽ khắc tranh.</button>
                <button onclick="selectDef99('diep')" id="btn-def-diep" class="w-full p-4 text-left border-2 border-emerald-250 bg-emerald-50/40 rounded-2xl font-bold text-lg hover:bg-emerald-100 transition-all text-emerald-950">Bột màu trắng óng ánh làm từ vỏ sò giã mịn trộn với hồ nếp trong hội họa dân gian.</button>
                <button onclick="selectDef99('tonu')" id="btn-def-tonu" class="w-full p-4 text-left border-2 border-emerald-250 bg-emerald-50/40 rounded-2xl font-bold text-lg hover:bg-emerald-100 transition-all text-emerald-950">Tranh dân gian vẽ hình ảnh những người con gái đẹp đứng thổi sáo, đánh đàn.</button>
            </div>
        </div>

        <div class="flex justify-center gap-4 pt-4">
            <button onclick="resetMatch99()" class="px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white font-black rounded-xl text-lg shadow transition-all active:scale-95">LÀM LẠI ↺</button>
        </div>
        <div id="fb-vn99-match" class="hidden p-4 rounded-xl text-lg font-bold text-center mt-2 max-w-4xl mx-auto"></div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn99Global()" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <span>HOÀN THÀNH TIẾT HỌC ✓</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Bài văn 'Tranh làng Hồ' do ai sáng tác?",
            "options": [
                "Nguyễn Tuân",
                "Tô Hoài",
                "Đoàn Giỏi",
                "Nguyễn Khải"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Làng Hồ còn có tên gọi dân gian nổi tiếng khác là gì?",
            "options": [
                "Làng Đông Hồ",
                "Làng Vạn Phúc",
                "Làng Bát Tràng",
                "Làng Thổ Hà"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Làng Hồ ngày nay thuộc tỉnh nào của Việt Nam?",
            "options": [
                "Bắc Ninh",
                "Bắc Giang",
                "Hưng Yên",
                "Hải Dương"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Bức tranh 'Lợn ăn cây ráy' có đặc điểm gì độc đáo được nhắc đến?",
            "options": [
                "Có những khoáy âm dương rất có duyên",
                "Có màu lông đen bóng huyền biến",
                "Lợn đang nô đùa cùng bầy chim",
                "Hình vẽ cách điệu thành linh vật rồng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Đàn gà con trong tranh làng Hồ được miêu tả sinh động như thế nào?",
            "options": [
                "Tưng bừng như ca múa bên gà mái mẹ",
                "Nháo nhác chạy đi tìm hạt thóc rụng",
                "Đứng lặng yên đón ánh nắng ban mai",
                "Đang ngủ ngoan dưới cánh ấm của mẹ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Những chất liệu nào gợi nhắc thiết tha đến đồng quê để làm nên bột than đen?",
            "options": [
                "Chất rơm bếp, than của cói chiếu và lá tre rụng",
                "Quả bồ kết, tro bếp củi và hạt na đen",
                "Gỗ mun khô, than đá Quảng Ninh và vỏ trấu tẻ",
                "Nhựa cây sung, than bùn và hạt tiêu rừng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Màu trắng điệp được tạo ra từ nguyên liệu tự nhiên nào?",
            "options": [
                "Bột vỏ sò, vỏ điệp trộn với hồ nếp loãng",
                "Bột đá vôi trắng mịn hòa cùng nước vôi trong",
                "Bột phấn gạo tẻ ngâm chua trộn nước dừa",
                "Nhựa cây cao su chưng cất cùng sáp ong trắng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đặc điểm hạt cát của điệp trắng trong tranh đem lại hiệu ứng gì?",
            "options": [
                "Nhấp nhánh muôn ngàn hạt phấn lấp lánh tăng vẻ thâm thúy sinh động",
                "Làm cho bức tranh thô ráp và giữ được màu lâu hàng thế kỷ",
                "Tạo độ phản quang mạnh khi đưa tranh ra ánh mặt trời",
                "Làm cho giấy vẽ tranh trở nên cứng cáp không bị rách nát"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tại sao màu đen trong tranh làng Hồ được tác giả gọi là 'màu đen rất Việt Nam'?",
            "options": [
                "Vì nó được luyện từ những chất liệu gắn bó thiết tha với đồng quê đất nước",
                "Vì nó bền bỉ không phai nhạt qua hàng trăm năm mưa nắng",
                "Vì chỉ có người Việt Nam mới biết công thức pha màu đen này",
                "Vì màu đen đó đại diện cho trang phục truyền thống lĩnh đen cổ xưa"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Những người tạo hình tranh làng Hồ được tác giả trân trọng gọi là gì?",
            "options": [
                "Những người nghệ sĩ tạo hình của nhân dân",
                "Những nghệ nhân kiệt xuất của vùng Kinh Bắc",
                "Những nhà điêu khắc điêu luyện của làng quê",
                "Những họa sĩ tài hoa của đất nước Việt Nam"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Bức tranh nào nói về vẻ đẹp thướt tha của người phụ nữ Việt Nam xưa?",
            "options": [
                "Tranh tố nữ",
                "Tranh Hái dừa",
                "Tranh Đánh ghen",
                "Tranh Phú quý"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'thuần phác' trong bài miêu tả cách nhìn cuộc sống như thế nào?",
            "options": [
                "Mộc mạc, chất phác và chân thực",
                "Sắc sảo, phức tạp và trừu tượng",
                "Hiện đại, tươi mới và thời thượng",
                "Cổ kính, uy nghiêm và sang trọng"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Địa danh Đông Hồ nổi tiếng nhất với ngành nghề nghệ thuật truyền thống nào?",
            "options": [
                "Tranh dân gian Đông Hồ khắc gỗ",
                "Nghề gốm sứ thủ công nung men",
                "Nghề dệt lụa tơ tằm thượng hạng",
                "Nghề đúc đồng Mỹ nghệ thủ công"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Cụm từ 'khoáy âm dương' trên mình con lợn Đông Hồ tượng trưng cho điều gì?",
            "options": [
                "Sự hòa hợp vũ trụ, cầu mong sinh sôi nảy nở và may mắn thịnh vượng",
                "Vết bẩn tự nhiên trên cơ thể các giống lợn cỏ thời cổ",
                "Phương hướng mặt trời mọc và lặn trên đồng cỏ quê hương",
                "Kí hiệu đánh dấu sở hữu của chủ nuôi tranh dân gian"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Ý nghĩa sâu sắc nhất của bài văn 'Tranh làng Hồ' gửi gắm đến người đọc là gì?",
            "options": [
                "Tôn vinh giá trị văn hóa nghệ thuật tranh dân gian và lòng biết ơn các nghệ sĩ nhân dân",
                "Giới thiệu các địa điểm du lịch lý thú tại vùng Kinh Bắc - Bắc Ninh",
                "Hướng dẫn chi tiết công thức pha màu tự nhiên cổ truyền của người xưa",
                "Phân tích kĩ thuật khắc bản in gỗ của các dòng họ Đông Hồ"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// Biến quản lý Luyện tập Ghép thẻ
let selectedTermId = null;
let selectedDefId = null;
let matchedPairs99 = {};

window.selectTerm99 = function(termId) {
    if (matchedPairs99[termId]) return;

    // Reset các lựa chọn term cũ
    document.querySelectorAll('#p99-terms-col button').forEach(btn => {
        const id = btn.id.replace('btn-term-', '');
        if (!matchedPairs99[id]) {
            btn.className = "w-full p-4 text-left border-2 border-amber-250 bg-amber-50/60 rounded-2xl font-black text-xl hover:bg-amber-100 transition-all text-amber-950";
        }
    });

    selectedTermId = termId;
    const activeBtn = document.getElementById(`btn-term-${termId}`);
    if (activeBtn) {
        activeBtn.className = "w-full p-4 text-left border-2 border-amber-500 bg-amber-200 rounded-2xl font-black text-xl transition-all text-amber-950 scale-[0.98]";
    }

    checkMatch99();
};

window.selectDef99 = function(defId) {
    // Tìm term có giá trị tương đương được đánh dấu
    if (Object.values(matchedPairs99).includes(defId)) return;

    // Reset các lựa chọn def cũ
    document.querySelectorAll('#p99-defs-col button').forEach(btn => {
        const id = btn.id.replace('btn-def-', '');
        if (!Object.values(matchedPairs99).includes(id)) {
            btn.className = "w-full p-4 text-left border-2 border-emerald-250 bg-emerald-50/40 rounded-2xl font-bold text-lg hover:bg-emerald-100 transition-all text-emerald-950";
        }
    });

    selectedDefId = defId;
    const activeBtn = document.getElementById(`btn-def-${defId}`);
    if (activeBtn) {
        activeBtn.className = "w-full p-4 text-left border-2 border-emerald-500 bg-emerald-200 rounded-2xl font-bold text-lg transition-all text-emerald-950 scale-[0.98]";
    }

    checkMatch99();
};

function checkMatch99() {
    if (!selectedTermId || !selectedDefId) return;

    const fb = document.getElementById('fb-vn99-match');
    if (selectedTermId === selectedDefId) {
        // Đúng cặp
        matchedPairs99[selectedTermId] = selectedDefId;
        
        const termBtn = document.getElementById(`btn-term-${selectedTermId}`);
        const defBtn = document.getElementById(`btn-def-${selectedDefId}`);
        
        if (termBtn) {
            termBtn.className = "w-full p-4 text-left border-2 border-emerald-500 bg-emerald-100/55 text-emerald-900 rounded-2xl font-black text-xl cursor-default";
            termBtn.innerHTML += " ✓";
        }
        if (defBtn) {
            defBtn.className = "w-full p-4 text-left border-2 border-emerald-500 bg-emerald-100/55 text-emerald-900 rounded-2xl font-bold text-lg cursor-default";
            defBtn.innerHTML += " ✓";
        }

        selectedTermId = null;
        selectedDefId = null;

        // Kiểm tra xem đã thắng chưa
        if (Object.keys(matchedPairs99).length === 4) {
            if (fb) {
                fb.classList.remove('hidden');
                fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 max-w-4xl mx-auto bg-emerald-100 text-emerald-900";
                fb.innerHTML = "🎉 Tuyệt vời! Em đã ghép đúng toàn bộ 4 thuật ngữ khó trong bài.";
            }
        }
    } else {
        // Sai cặp
        if (fb) {
            fb.classList.remove('hidden');
            fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 max-w-4xl mx-auto bg-rose-100 text-rose-900";
            fb.innerHTML = "❌ Cặp ghép chưa chính xác, em hãy thử chọn lại nhé!";
            
            setTimeout(() => {
                fb.classList.add('hidden');
            }, 2000);
        }

        // Trả lại màu cũ cho nút term
        const termBtn = document.getElementById(`btn-term-${selectedTermId}`);
        if (termBtn) {
            termBtn.className = "w-full p-4 text-left border-2 border-amber-250 bg-amber-50/60 rounded-2xl font-black text-xl hover:bg-amber-100 transition-all text-amber-950";
        }
        // Trả lại màu cũ cho nút def
        const defBtn = document.getElementById(`btn-def-${selectedDefId}`);
        if (defBtn) {
            defBtn.className = "w-full p-4 text-left border-2 border-emerald-250 bg-emerald-50/40 rounded-2xl font-bold text-lg hover:bg-emerald-100 transition-all text-emerald-950";
        }

        selectedTermId = null;
        selectedDefId = null;
    }
}

window.resetMatch99 = function() {
    matchedPairs99 = {};
    selectedTermId = null;
    selectedDefId = null;

    const fb = document.getElementById('fb-vn99-match');
    if (fb) fb.classList.add('hidden');

    // Khôi phục nội dung và màu sắc
    const termData = {
        'langho': 'Làng Hồ (làng Đông Hồ)',
        'tonu': 'Tranh tố nữ',
        'linh': 'Lĩnh',
        'diep': 'Màu trắng điệp'
    };

    const defData = {
        'linh': 'Một loại lụa đen, mặt bóng, mịn màng.',
        'langho': 'Làng Đông Hồ thuộc huyện Thuận Thành, tỉnh Bắc Ninh, nổi tiếng với nghề vẽ khắc tranh.',
        'diep': 'Bột màu trắng óng ánh làm từ vỏ sò giã mịn trộn với hồ nếp trong hội họa dân gian.',
        'tonu': 'Tranh dân gian vẽ hình ảnh những người con gái đẹp đứng thổi sáo, đánh đàn.'
    };

    for (let k in termData) {
        const btn = document.getElementById(`btn-term-${k}`);
        if (btn) {
            btn.className = "w-full p-4 text-left border-2 border-amber-250 bg-amber-50/60 rounded-2xl font-black text-xl hover:bg-amber-100 transition-all text-amber-950";
            btn.innerHTML = termData[k];
        }
    }

    for (let k in defData) {
        const btn = document.getElementById(`btn-def-${k}`);
        if (btn) {
            btn.className = "w-full p-4 text-left border-2 border-emerald-250 bg-emerald-50/40 rounded-2xl font-bold text-lg hover:bg-emerald-100 transition-all text-emerald-950";
            btn.innerHTML = defData[k];
        }
    }
};

// Chấm câu 5 bằng AI Thầy E
window.kiemTraCau5_99 = function() {
    const text = document.getElementById('p99-vietvan').value.trim();
    const fb = document.getElementById('fb-vn99-c5');

    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E nhắc nhở:</h5>
                    <p class="text-lg font-bold">Em hãy nhập cảm nhận của mình trước khi gửi Thầy E góp ý nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300";
        return;
    }

    if (text.length < 15) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-rose-900">AI Thầy E góp ý:</h5>
                    <p class="text-lg font-bold">Ý kiến cảm nhận hơi ngắn rồi. Em hãy viết thêm chi tiết về điều em ấn tượng nhất ở bức tranh (ví dụ: sự ngộ nghĩnh, màu sắc, tinh thần của bức tranh...) để ý văn đầy đủ nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold bg-rose-100 text-rose-900 border border-rose-300";
        return;
    }

    // Phân tích từ khóa
    const keywords = ["tự hào", "độc đáo", "ngưỡng mộ", "đẹp", "yêu mến", "sinh động", "tinh tế", "nghệ thuật", "nghệ nhân", "quê hương", "đất nước", "thích", "ấn tượng", "mộc mạc", "đông hồ"];
    const hasKeyword = keywords.some(kw => text.toLowerCase().includes(kw));

    if (hasKeyword) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-emerald-900">AI Thầy E đánh giá:</h5>
                    <p class="text-lg font-bold mb-2">Lời nhận xét cảm nhận rất tuyệt vời và giàu tình cảm! Em đã thể hiện được sự trân quý, tự hào đối với các tác phẩm tranh dân gian làng Đông Hồ và công lao sáng tạo của các nghệ nhân xưa.</p>
                    <span class="text-xl font-black bg-emerald-500 text-white px-2 py-0.5 rounded shadow-sm">Thầy chấm đạt: 10/10 điểm</span>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-sm";
    } else {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-emerald-900">AI Thầy E đánh giá:</h5>
                    <p class="text-lg font-bold mb-2">Bài viết thể hiện được suy nghĩ riêng của bản thân. Em nên bổ sung thêm một số từ ngữ biểu đạt cảm xúc rõ ràng như: *tự hào, yêu mến, độc đáo, sinh động...* để tăng tính truyền cảm cho đoạn văn nhé.</p>
                    <span class="text-xl font-black bg-amber-500 text-white px-2 py-0.5 rounded shadow-sm">Thầy chấm đạt: 8/10 điểm</span>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-350 shadow-sm";
    }
};

// Kiểm tra Khởi động
window.kiemTraKhoiDong99 = function() {
    const t1 = document.getElementById('p99-kd-t1').value;
    const t2 = document.getElementById('p99-kd-t2').value;
    const t3 = document.getElementById('p99-kd-t3').value;
    const fb = document.getElementById('fb-vn99-kd');

    if (!fb) return;
    fb.classList.remove('hidden');

    if (!t1 || !t2 || !t3) {
        fb.innerHTML = "⚠️ Em hãy chọn tên cho cả 3 bức tranh trước khi kiểm tra nhé!";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-amber-100 text-amber-900";
        return;
    }

    if (t1 === 'dauvat' && t2 === 'chantrau' && t3 === 'omvit') {
        fb.innerHTML = "🎉 Hoàn toàn chính xác! Bức tranh 1 là Đấu vật, Bức tranh 2 là Chăn trâu thổi sáo và Bức tranh 3 là Em bé ôm vịt (Phú quý). Em đoán rất giỏi!";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-emerald-100 text-emerald-900";
    } else {
        fb.innerHTML = "❌ Chưa chính xác rồi. Em hãy chú ý các đặc điểm nhân vật và con vật trên tranh để đoán lại nhé!";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-rose-100 text-rose-900";
    }
};

// Kiểm tra Đọc hiểu (Câu 1 - 4)
window.kiemTraDocHieu99 = function() {
    const c1 = document.querySelector('input[name="p99-c1"]:checked')?.value;
    const c2 = document.querySelector('input[name="p99-c2"]:checked')?.value;
    const c3 = document.querySelector('input[name="p99-c3"]:checked')?.value;
    const c4 = document.querySelector('input[name="p99-c4"]:checked')?.value;
    
    const fb = document.getElementById('fb-vn99-dh-global');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!c1 || !c2 || !c3 || !c4) {
        fb.innerHTML = "⚠️ Em vui lòng trả lời đầy đủ các câu hỏi trắc nghiệm từ 1 đến 4 trước nhé!";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-amber-100 text-amber-900";
        return;
    }

    const correct1 = (c1 === 'correct');
    const correct2 = (c2 === 'correct');
    const correct3 = (c3 === 'correct');
    const correct4 = (c4 === 'ALL' || c4 === 'A' || c4 === 'B' || c4 === 'C'); // Tất cả lựa chọn biết ơn đều hợp lệ

    if (correct1 && correct2 && correct3 && correct4) {
        fb.innerHTML = "🎉 Chúc mừng em đã trả lời đúng toàn bộ các câu hỏi tìm hiểu bài học! Cảm nhận đọc hiểu rất tốt.";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-emerald-100 text-emerald-900";
    } else {
        fb.innerHTML = "❌ Có câu trả lời chưa chính xác. Em hãy đọc kĩ lại văn bản của nhà văn Nguyễn Tuân để chỉnh sửa nhé!";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-rose-100 text-rose-900";
    }
};

// Nộp bài toàn cục
window.submitVn99Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 99',
            '🎨',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎉</span><p class="text-2xl font-bold text-emerald-800">Chúc mừng em đã hoàn thành bài học Tranh làng Hồ!</p><p class="text-lg text-gray-700 mt-3">Hãy luôn gìn giữ, trân trọng nét đẹp văn hóa và di sản tranh Đông Hồ độc đáo của dân tộc ta nhé!</p></div>'
        );
    } else {
        alert("Chúc mừng em đã hoàn thành bài học Tranh làng Hồ!");
    }
};
