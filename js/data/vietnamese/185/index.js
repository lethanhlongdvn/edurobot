export const lesson185 = {
    "topic": "Tiếng Việt 5",
    "week": "27",
    "period": "185-186",
    "title": "ÔN TẬP VÀ ĐÁNH GIÁ GIỮA HKII (TIẾT 3 - 4)",
    "desc": "Học sinh thực hiện đọc thuộc lòng thơ, đọc hiểu văn bản 'Quạt mo', chơi trò chơi thực hành câu ghép 'Tìm kho báu' và luyện tập các biện pháp liên kết câu.",
    "subject": "Tiếng Việt",
    "theme": "Hương sắc trăm miền",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-4xl mx-auto">
    <!-- 🎯 Mục tiêu ôn tập -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-blue-600 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu ôn tập (Tiết 3 - 4)
        </h3>
        <ul class="space-y-3 text-blue-950 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Đọc trôi chảy, đọc thuộc lòng và cảm thụ tốt các bài thơ đã học trong chương trình.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Rèn luyện kỹ năng đọc hiểu câu chuyện (văn bản "Quạt mo"), trả lời rõ ý và mạch lạc các câu hỏi.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Củng cố kiến thức về câu ghép, thực hành viết câu ghép linh hoạt với các từ/cặp từ nối qua trò chơi tương tác.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Nhận diện chính xác và sử dụng thành thạo các từ ngữ nối, các biện pháp liên kết câu (phép lặp, phép thế) để đoạn văn mạch lạc.
            </li>
        </ul>
    </div>

    <!-- 🌸 BÀI 1: ĐỌC THƠ & CẢM NHẬN (INTERACTIVE POEM MATCHING) -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-6 md:p-8 shadow-2xl bg-white border border-slate-100 space-y-6">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-md">1</div>
                <h2 class="text-2xl md:text-5xl font-black text-gray-800">Bài 1: Đọc thơ & Nhận diện tác phẩm</h2>
            </div>
            
            <p class="text-lg md:text-xl font-semibold text-gray-600">Hãy chọn đúng tên bài thơ cho từng đoạn trích thơ dưới đây:</p>

            <div class="space-y-4">
                <!-- Đoạn a -->
                <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="space-y-1">
                        <span class="text-sm font-bold text-blue-600 uppercase">Đoạn trích a</span>
                        <p class="text-lg font-bold italic text-slate-800">"Em vui em hát / Hạt vàng làng ta..."</p>
                    </div>
                    <select id="poem-a" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white w-full md:w-72">
                        <option value="">-- Chọn bài thơ --</option>
                        <option value="Hạt gạo làng ta">Hạt gạo làng ta</option>
                        <option value="Khúc hát ru những em bé lớn trên lưng mẹ">Khúc hát ru những em bé lớn trên lưng mẹ</option>
                        <option value="Thư của bố">Thư của bố</option>
                        <option value="Đoàn thuyền đánh cá">Đoàn thuyền đánh cá</option>
                        <option value="Đường quê Đồng Tháp Mười">Đường quê Đồng Tháp Mười</option>
                    </select>
                </div>

                <!-- Đoạn b -->
                <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="space-y-1">
                        <span class="text-sm font-bold text-blue-600 uppercase">Đoạn trích b</span>
                        <p class="text-lg font-bold italic text-slate-800">"Mặt trời của bắp thì nằm trên đồi / Mặt trời của mẹ, em nằm trên lưng."</p>
                    </div>
                    <select id="poem-b" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white w-full md:w-72">
                        <option value="">-- Chọn bài thơ --</option>
                        <option value="Hạt gạo làng ta">Hạt gạo làng ta</option>
                        <option value="Khúc hát ru những em bé lớn trên lưng mẹ">Khúc hát ru những em bé lớn trên lưng mẹ</option>
                        <option value="Thư của bố">Thư của bố</option>
                        <option value="Đoàn thuyền đánh cá">Đoàn thuyền đánh cá</option>
                        <option value="Đường quê Đồng Tháp Mười">Đường quê Đồng Tháp Mười</option>
                    </select>
                </div>

                <!-- Đoạn c -->
                <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="space-y-1">
                        <span class="text-sm font-bold text-blue-600 uppercase">Đoạn trích c</span>
                        <p class="text-lg font-bold italic text-slate-800">"Con đã lớn khôn, đọc được cả những điều / Chưa được viết trong thư người lính biển."</p>
                    </div>
                    <select id="poem-c" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white w-full md:w-72">
                        <option value="">-- Chọn bài thơ --</option>
                        <option value="Hạt gạo làng ta">Hạt gạo làng ta</option>
                        <option value="Khúc hát ru những em bé lớn trên lưng mẹ">Khúc hát ru những em bé lớn trên lưng mẹ</option>
                        <option value="Thư của bố">Thư của bố</option>
                        <option value="Đoàn thuyền đánh cá">Đoàn thuyền đánh cá</option>
                        <option value="Đường quê Đồng Tháp Mười">Đường quê Đồng Tháp Mười</option>
                    </select>
                </div>

                <!-- Đoạn d -->
                <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="space-y-1">
                        <span class="text-sm font-bold text-blue-600 uppercase">Đoạn trích d</span>
                        <p class="text-lg font-bold italic text-slate-800">"Mặt trời xuống biển như hòn lửa / Sóng đã cài then, đêm sập cửa."</p>
                    </div>
                    <select id="poem-d" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white w-full md:w-72">
                        <option value="">-- Chọn bài thơ --</option>
                        <option value="Hạt gạo làng ta">Hạt gạo làng ta</option>
                        <option value="Khúc hát ru những em bé lớn trên lưng mẹ">Khúc hát ru những em bé lớn trên lưng mẹ</option>
                        <option value="Thư của bố">Thư của bố</option>
                        <option value="Đoàn thuyền đánh cá">Đoàn thuyền đánh cá</option>
                        <option value="Đường quê Đồng Tháp Mười">Đường quê Đồng Tháp Mười</option>
                    </select>
                </div>

                <!-- Đoạn e -->
                <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="space-y-1">
                        <span class="text-sm font-bold text-blue-600 uppercase">Đoạn trích e</span>
                        <p class="text-lg font-bold italic text-slate-800">"Ông đứng như bụt hiện / Chờ cháu cuối đường quê."</p>
                    </div>
                    <select id="poem-e" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white w-full md:w-72">
                        <option value="">-- Chọn bài thơ --</option>
                        <option value="Hạt gạo làng ta">Hạt gạo làng ta</option>
                        <option value="Khúc hát ru những em bé lớn trên lưng mẹ">Khúc hát ru những em bé lớn trên lưng mẹ</option>
                        <option value="Thư của bố">Thư của bố</option>
                        <option value="Đoàn thuyền đánh cá">Đoàn thuyền đánh cá</option>
                        <option value="Đường quê Đồng Tháp Mười">Đường quê Đồng Tháp Mười</option>
                    </select>
                </div>
            </div>

            <div class="flex justify-center mt-4">
                <button onclick="check185Poems()" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all text-lg">
                    🔍 Kiểm tra kết quả
                </button>
            </div>
            <div id="poems-feedback" class="text-lg font-black text-center hidden mt-2"></div>

            <hr class="border-slate-100 my-6">

            <!-- Viết cảm nghĩ -->
            <div class="p-6 bg-blue-50/50 rounded-3xl border border-blue-150 space-y-4">
                <label class="text-lg md:text-xl font-bold text-blue-600 block">📝 Câu hỏi cảm thụ: Trong mỗi bài thơ ở trên, em thích hình ảnh nào nhất? Vì sao? Hãy chia sẻ ý kiến của em nhé:</label>
                <textarea id="poem-feeling-text" rows="3" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-100 outline-none text-lg" placeholder="Nhập cảm nhận của em về hình ảnh thơ yêu thích..."></textarea>
                <div class="flex justify-center">
                    <button onclick="check185FeelingAI()" class="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-2xl shadow-xl transition-all active:scale-[0.95] flex items-center justify-center gap-3 text-lg md:text-xl uppercase tracking-wider">
                        <span>🤖</span> 
                        <span>EduRobot nhận xét cảm nghĩ</span>
                    </button>
                </div>
                <div id="fb-poem-feeling-ai" class="w-full hidden mt-4"></div>
            </div>
        </div>
    </section>

    <!-- 📖 BÀI 2: ĐỌC HIỂU "QUẠT MO" (COMPREHENSION & AI ESSAY EVALUATOR) -->
    <section class="w-full">
        <div class="bg-white rounded-[32px] p-6 md:p-8 border border-slate-100 shadow-xl space-y-6">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-md">2</div>
                <h2 class="text-2xl md:text-5xl font-black text-gray-800">Bài 2: Đọc hiểu văn bản "Quạt mo"</h2>
            </div>

            <!-- Văn bản bài đọc -->
            <div class="bg-amber-50/40 border border-amber-100 rounded-3xl p-6 md:p-8 space-y-4">
                <h3 class="text-xl md:text-3xl font-black text-amber-950 text-center uppercase tracking-wider">Quạt mo</h3>
                <div class="serif-font leading-relaxed text-slate-800 text-lg md:text-3xl space-y-4">
                    <p>Nhà bà tôi nằm lặng lẽ giữa màu xanh mướt của mấy hàng cau. Mỗi lần nghe tiếng rơi "độp" ngoài sân gạch, tôi vội chạy ra nhặt tàu lá cau rụng, phơi bên hiên nhà, đợi bà tôi làm thành những chiếc quạt mo nho nhỏ.</p>
                    <p>Chọn một bẹ cau khô thơm nồng mùi nắng, bà cắt thành chiếc quạt mo hình tai voi rất vừa tay cầm. Chiếc quạt theo bà cháu tôi suốt mùa hè miền Trung nắng đổ lửa. Lâu dần, quạt ngả màu nâu sẫm, mấy vết nhăn hằn rõ nét hơn. Những hôm bà đi chợ xa về, tôi lăng xăng đến bên bà phe phẩy quạt mo. Bà thường ôm tôi vào lòng: "Cháu bà thương bà nhất.".</p>
                    <p>Có những trưa, bà cháu nằm võng trong vườn, bà vừa khe khẽ lướt chiếc quạt mo, vừa thong thả hát bài đồng dao:</p>
                    <div class="pl-8 italic text-slate-900 border-l-4 border-amber-300 py-1 space-y-1">
                        <p>Thằng Bờm có cái quạt mo</p>
                        <p>Phú ông xin đổi ba bò, chín trâu</p>
                        <p>Bờm rằng Bờm chẳng lấy trâu</p>
                        <p>Phú ông xin đổi ao sâu cá mè. . .</p>
                    </div>
                    <p>Tay bà đưa quạt nhịp nhàng. Gió nối gió ùa về mát rượi. Tôi lim dim chìm vào giấc ngủ. Trong mơ, tôi gặp phú ông dắt chú trâu mập mạp, còn tôi cầm chiếc quạt mo. Rồi tôi mơ thấy mình ngồi vắt vẻo trên lưng chú trâu ấy, đi qua một ao cá. . . Tiếng lá cau rụng khiến tôi choàng tỉnh. Tôi hốt hoảng oà lên nức nở: "Cháu đổi quạt mo lấy trâu của phú ông mất rồi, bà ơi!". Bà cười, chỉ cho tôi chiếc quạt mo vẫn còn nguyên trên võng, tôi mới nín khóc.</p>
                    <p>Sau hôm ấy, tôi cứ mong gặp lại phú ông để nói rằng, tôi sẽ không đổi chiếc quạt mo của bà tôi lấy bất cứ thứ gì. Nhưng phú ông chẳng xuất hiện lần nào nữa trong giấc mơ của tôi.</p>
                    <p>Bây giờ, dù ít người còn dùng quạt mo, nhưng tôi vẫn giữ một chiếc làm kỉ niệm. Mỗi khi nhớ bà, tôi lại mang chiếc quạt mo ra phe phẩy, lòng xôn xao hồi ức tuổi thơ. Làn gió dịu dàng cứ thổi hoài, thổi mãi...</p>
                </div>
                <p class="text-right text-base md:text-lg font-bold text-gray-500 italic mt-2">(Phan Đức Lộc)</p>
            </div>

            <!-- Câu hỏi tự luận -->
            <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                <p class="text-lg md:text-xl font-bold text-slate-800">Em hãy trả lời các câu hỏi sau dựa vào nội dung câu chuyện:</p>
                
                <div class="space-y-4">
                    <div>
                        <label class="text-base md:text-lg font-black text-slate-700 block mb-1">a. Chiếc quạt mo được miêu tả như thế nào trong bài đọc?</label>
                        <input type="text" id="quat-mo-a" class="w-full p-3 rounded-xl border border-slate-250 focus:ring-4 focus:ring-blue-100 outline-none text-base font-semibold" placeholder="Bà chọn một bẹ cau khô thơm nồng mùi nắng, cắt thành hình tai voi vừa tay cầm...">
                    </div>
                    <div>
                        <label class="text-base md:text-lg font-black text-slate-700 block mb-1">b. Chiếc quạt mo gợi nhớ những kỉ niệm gì về bà trong tuổi thơ của người cháu?</label>
                        <input type="text" id="quat-mo-b" class="w-full p-3 rounded-xl border border-slate-250 focus:ring-4 focus:ring-blue-100 outline-none text-base font-semibold" placeholder="Những trưa hè bà cháu nằm võng nghe hát đồng dao Thằng Bờm, tay bà quạt mát ru cháu ngủ...">
                    </div>
                    <div>
                        <label class="text-base md:text-lg font-black text-slate-700 block mb-1">c. Kể lại giấc mơ của người cháu về chiếc quạt mo. Theo em, giấc mơ đó có gì thú vị?</label>
                        <textarea id="quat-mo-c" rows="2" class="w-full p-3 rounded-xl border border-slate-250 focus:ring-4 focus:ring-blue-100 outline-none text-base font-semibold" placeholder="Mơ thấy phú ông dắt trâu đổi lấy quạt mo, cháu ngồi lưng trâu qua ao cá. Giấc mơ ngộ nghĩnh thể hiện tình cảm hồn nhiên của cháu..."></textarea>
                    </div>
                    <div>
                        <label class="text-base md:text-lg font-black text-slate-700 block mb-1">d. Chi tiết người cháu khi lớn vẫn giữ một chiếc quạt mo làm kỉ niệm gợi cho em những suy nghĩ gì?</label>
                        <textarea id="quat-mo-d" rows="2" class="w-full p-3 rounded-xl border border-slate-250 focus:ring-4 focus:ring-blue-100 outline-none text-base font-semibold" placeholder="Gợi suy nghĩ về lòng hiếu kính, sự trân trọng cội nguồn, giữ gìn những kí ức tuổi thơ quý giá bên bà..."></textarea>
                    </div>
                </div>

                <div class="flex justify-center mt-6">
                    <button onclick="check185QuatMoAI()" class="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-2xl shadow-xl transition-all active:scale-[0.95] flex items-center justify-center gap-3 text-lg md:text-xl uppercase tracking-wider">
                        <span>🤖</span> 
                        <span>Gửi câu trả lời cho EduRobot AI</span>
                    </button>
                </div>
                <div id="fb-quat-mo-ai" class="w-full hidden mt-4"></div>
            </div>
        </div>
    </section>

    <!-- 🎲 BÀI 3: TRÒ CHƠI "TÌM KHO BÁU" (VIRTUAL BOARD GAME) -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-6 md:p-8 shadow-2xl bg-white border border-slate-100 space-y-6">
            <div class="flex items-start gap-3">
                <span class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md">3</span>
                <div class="space-y-1">
                    <h2 class="text-2xl md:text-5xl font-black text-gray-800">Trò chơi: Tìm kho báu 🪙</h2>
                    <p class="text-sm md:text-base font-bold text-amber-600">Thực hành đặt câu ghép chứa kết từ hoặc cặp từ nối.</p>
                </div>
            </div>

            <!-- Bản đồ Board Game -->
            <div class="p-6 bg-slate-900 rounded-[32px] text-white space-y-6">
                <!-- Thông tin vị trí người chơi -->
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-800 p-4 rounded-2xl border border-slate-700">
                    <div>
                        <p class="text-sm font-bold text-slate-400">Vị trí hiện tại của bạn:</p>
                        <h4 id="game-status-position" class="text-xl md:text-2xl font-black text-yellow-400">🚩 Ô số 0: Bắt đầu</h4>
                    </div>
                    <div class="flex gap-3">
                        <button onclick="rollDice()" id="roll-button" class="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-lg rounded-xl shadow-lg transition-all active:scale-[0.95]">
                            🎲 Lắc xúc xắc
                        </button>
                        <button onclick="resetGame()" class="px-4 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold rounded-xl active:scale-[0.95]">
                            Chơi lại
                        </button>
                    </div>
                </div>

                <!-- Bảng ô cờ -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3" id="game-board-grid">
                    <!-- Sẽ được điền bằng javascript tự động -->
                </div>

                <!-- Hộp lịch sử trò chơi -->
                <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 max-h-36 overflow-y-auto text-sm" id="game-history-log">
                    <p class="text-slate-500 font-bold italic">Bắt đầu trò chơi! Hãy bấm nút Lắc xúc xắc.</p>
                </div>
            </div>

            <!-- Khu vực làm bài tập câu hỏi khi rơi vào ô từ nối -->
            <div id="game-question-area">
                <div class="p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center text-gray-500 font-bold">
                    Tung xúc xắc để di chuyển đến ô tiếp theo...
                </div>
            </div>
        </div>
    </section>

    <!-- 🔗 BÀI 4: NHẬN DIỆN PHÉP LIÊN KẾT (INTERACTIVE RADIO CHOICE) -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-6 md:p-8 shadow-2xl bg-white border border-slate-100 space-y-6">
            <div class="flex items-start gap-3">
                <span class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md">4</span>
                <h2 class="text-2xl md:text-5xl font-black text-gray-800">Bài 4: Tìm từ ngữ liên kết & biện pháp liên kết</h2>
            </div>

            <div class="space-y-6">
                <!-- Đoạn văn a -->
                <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                    <div class="serif-font leading-relaxed text-slate-800 text-lg md:text-2xl border-l-4 border-blue-400 pl-4 py-1">
                        "(1) Mỗi người nấu cơm đều mang một cái cần tre... (2) <strong>Người nấu cơm</strong> tay giữ cần, tay cầm đuốc đung đưa..."
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="text-sm font-black text-slate-600 block mb-1">Từ ngữ liên kết ở câu 2:</label>
                            <select id="link-word-4a" class="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none font-bold bg-white text-base">
                                <option value="">-- Chọn từ ngữ --</option>
                                <option value="cái cần tre">cái cần tre</option>
                                <option value="Người nấu cơm">Người nấu cơm</option>
                                <option value="tay giữ cần">tay giữ cần</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-sm font-black text-slate-600 block mb-1">Biện pháp liên kết chính:</label>
                            <select id="link-method-4a" class="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none font-bold bg-white text-base">
                                <option value="">-- Chọn biện pháp --</option>
                                <option value="Phép lặp từ ngữ">Phép lặp từ ngữ</option>
                                <option value="Phép thế">Phép thế</option>
                                <option value="Phép nối">Phép nối</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Đoạn văn b -->
                <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                    <div class="serif-font leading-relaxed text-slate-800 text-lg md:text-2xl border-l-4 border-blue-400 pl-4 py-1">
                        "(1) Thào A Sùng cười thật tươi. (2) Trong mắt <strong>cậu</strong>, tôi như thấy những đồi chè bạt ngàn..."
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="text-sm font-black text-slate-600 block mb-1">Từ ngữ liên kết ở câu 2:</label>
                            <select id="link-word-4b" class="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none font-bold bg-white text-base">
                                <option value="">-- Chọn từ ngữ --</option>
                                <option value="Thào A Sùng">Thào A Sùng</option>
                                <option value="đồi chè">đồi chè</option>
                                <option value="cậu">cậu</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-sm font-black text-slate-600 block mb-1">Biện pháp liên kết chính:</label>
                            <select id="link-method-4b" class="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none font-bold bg-white text-base">
                                <option value="">-- Chọn biện pháp --</option>
                                <option value="Phép lặp từ ngữ">Phép lặp từ ngữ</option>
                                <option value="Phép thế">Phép thế</option>
                                <option value="Phép nối">Phép nối</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-center">
                <button onclick="check185Linking4()" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all text-lg">
                    🔍 Kiểm tra liên kết
                </button>
            </div>
            <div id="linking-4-feedback" class="text-lg font-black text-center hidden mt-2"></div>
        </div>
    </section>

    <!-- 📝 BÀI 5: TÌM TỪ NỐI & TỪ THAY THẾ (COMPOSITION & AI CHECK) -->
    <section class="w-full">
        <div class="bg-white rounded-[32px] p-6 md:p-8 border border-slate-100 shadow-xl space-y-6">
            <div class="flex items-start gap-3">
                <span class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md">5</span>
                <h2 class="text-2xl md:text-5xl font-black text-gray-800">Bài 5: Tìm từ ngữ nối có tác dụng liên kết</h2>
            </div>

            <div class="serif-font leading-relaxed text-slate-800 text-lg md:text-3xl bg-slate-50 border border-slate-200 p-6 rounded-3xl">
                "Tôi và lũ bạn đã đi tìm tu hú dọc những bờ dứa dại. <strong>Nhưng</strong> chúng tôi không làm sao trông thấy chúng. Chúng tôi đi rón rén đến nơi phát ra tiếng một con tu hú kêu, bỗng nó im bặt. Ở nơi cách chúng tôi không xa, một con tu hú khác cất tiếng gọi như trêu tức con người. <strong>Và</strong> ngay cả nơi chúng tôi vừa rời khỏi, tu hú lại kêu. <strong>Vì thế</strong>, tôi chưa bao giờ trông thấy chim tu hú."
            </div>

            <div class="p-6 bg-sky-50/50 rounded-2xl border border-sky-100 space-y-4">
                <div>
                    <label class="text-lg font-black text-slate-700 block mb-1">a. Các từ ngữ nối có tác dụng liên kết câu trong đoạn (viết cách nhau bằng dấu phẩy):</label>
                    <input type="text" id="linking-words-5" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-sky-100 outline-none text-lg font-semibold" placeholder="Nhưng, Và, Vì thế">
                </div>
                <div>
                    <label class="text-lg font-black text-slate-700 block mb-1">b. Đề xuất các từ ngữ nối tương đương có thể thay thế cho các từ trên:</label>
                    <textarea id="replace-words-5" rows="2" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-sky-100 outline-none text-lg font-semibold" placeholder="Thế cho 'Nhưng': tuy nhiên; thế cho 'Và': đồng thời; thế cho 'Vì thế': do đó..."></textarea>
                </div>

                <div class="flex justify-center mt-6">
                    <button onclick="check185Linking5AI()" class="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-2xl shadow-xl transition-all active:scale-[0.95] flex items-center justify-center gap-3 text-lg md:text-xl uppercase tracking-wider">
                        <span>🤖</span> 
                        <span>EduRobot nhận xét câu trả lời</span>
                    </button>
                </div>
                <div id="fb-linking-5-ai" class="w-full hidden mt-4"></div>
            </div>
        </div>
    </section>

    <!-- 🌸 BÀI 6: ĐIỀN TỪ LIÊN KẾT ĐOẠN VĂN (CLOZE TEXT WITH SELECTS) -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-6 md:p-8 shadow-2xl bg-white border border-slate-100 space-y-6">
            <div class="flex items-start gap-3">
                <span class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md">6</span>
                <h2 class="text-2xl md:text-5xl font-black text-gray-800">Bài 6: Điền từ liên kết đoạn văn thích hợp</h2>
            </div>

            <div class="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
                <p class="text-lg font-bold text-slate-700">Chọn các từ ngữ thích hợp (Nhưng, Ban đầu, Sau đó, Thế là) thay thế cho các bông hoa 🌸 để liên kết các câu trong đoạn văn sau:</p>

                <div class="serif-font leading-relaxed text-slate-800 text-lg md:text-2xl space-y-4">
                    <p>
                        Tôi định ngủ một giấc. 
                        <!-- Hoa 1 -->
                        <select id="blank-1" class="p-2 border rounded-xl font-bold bg-white focus:ring-2 focus:ring-blue-400 outline-none text-base">
                            <option value="">-- 🌸 --</option>
                            <option value="Nhưng">Nhưng</option>
                            <option value="Ban đầu">Ban đầu</option>
                            <option value="Sau đó">Sau đó</option>
                            <option value="Thế là">Thế là</option>
                        </select>
                        những mảng màu rực rỡ ngoài ô cửa đã kéo tôi ra khỏi giấc ngủ. 
                        
                        <!-- Hoa 2 -->
                        <select id="blank-2" class="p-2 border rounded-xl font-bold bg-white focus:ring-2 focus:ring-blue-400 outline-none text-base">
                            <option value="">-- 🌸 --</option>
                            <option value="Nhưng">Nhưng</option>
                            <option value="Ban đầu">Ban đầu</option>
                            <option value="Sau đó">Sau đó</option>
                            <option value="Thế là">Thế là</option>
                        </select>, 
                        tôi chỉ thấy màu xanh. Nhìn từ trên máy bay, Ấn Độ Dương trông như viên đá lam ngọc lấp lánh, còn đảo Ma-đa-ga-xca thì như viên ngọc lục bảo đính trên viên đá này. 
                        
                        <!-- Hoa 3 -->
                        <select id="blank-3" class="p-2 border rounded-xl font-bold bg-white focus:ring-2 focus:ring-blue-400 outline-none text-base">
                            <option value="">-- 🌸 --</option>
                            <option value="Nhưng">Nhưng</option>
                            <option value="Ban đầu">Ban đầu</option>
                            <option value="Sau đó">Sau đó</option>
                            <option value="Thế là">Thế là</option>
                        </select>, 
                        tôi mới thấy giữa dải màu xanh tuyệt đẹp, thỉnh thoảng lộ ra khoảng màu nâu đỏ. Đó chính là những nơi rừng bị chặt phá. Nhìn từ trên cao, chúng như những vết thương của rừng già vậy. 
                        
                        <!-- Hoa 4 -->
                        <select id="blank-4" class="p-2 border rounded-xl font-bold bg-white focus:ring-2 focus:ring-blue-400 outline-none text-base">
                            <option value="">-- 🌸 --</option>
                            <option value="Nhưng">Nhưng</option>
                            <option value="Ban đầu">Ban đầu</option>
                            <option value="Sau đó">Sau đó</option>
                            <option value="Thế là">Thế là</option>
                        </select> 
                        dù chưa đặt chân lên Ma-đa-ga-xca, tôi đã cảm thấy xót xa như chính mình bị thương tổn...
                    </p>
                </div>

                <div class="flex justify-center mt-4">
                    <button onclick="check185Blank6()" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all text-lg">
                        🔍 Kiểm tra kết quả
                    </button>
                </div>
                <div id="blank-6-feedback" class="text-lg font-black text-center hidden mt-2"></div>
            </div>
        </div>
    </section>
</div>

<script>
    // BÀI 1 POEM CHECK
    window.check185Poems = function() {
        const correctAnswers = {
            a: "Hạt gạo làng ta",
            b: "Khúc hát ru những em bé lớn trên lưng mẹ",
            c: "Thư của bố",
            d: "Đoàn thuyền đánh cá",
            e: "Đường quê Đồng Tháp Mười"
        };

        const ansA = document.getElementById('poem-a').value;
        const ansB = document.getElementById('poem-b').value;
        const ansC = document.getElementById('poem-c').value;
        const ansD = document.getElementById('poem-d').value;
        const ansE = document.getElementById('poem-e').value;

        if (!ansA || !ansB || !ansC || !ansD || !ansE) {
            alert('Em hãy chọn bài thơ cho tất cả 5 đoạn thơ nhé!');
            return;
        }

        let correct = 0;
        if (ansA === correctAnswers.a) correct++;
        if (ansB === correctAnswers.b) correct++;
        if (ansC === correctAnswers.c) correct++;
        if (ansD === correctAnswers.d) correct++;
        if (ansE === correctAnswers.e) correct++;

        const fb = document.getElementById('poems-feedback');
        fb.classList.remove('hidden');
        if (correct === 5) {
            fb.innerHTML = "🎉 Xuất sắc! Em đã nhận diện chính xác 5/5 bài thơ rồi!";
            fb.className = "text-lg font-black text-center text-emerald-600 mt-4";
        } else {
            fb.innerHTML = \`⚠️ Em trả lời đúng \${correct}/5 bài thơ. Hãy xem lại từng đoạn thơ để chọn chính xác hơn nhé!\`;
            fb.className = "text-lg font-black text-center text-amber-600 mt-4";
        }
    };

    window.check185FeelingAI = async function() {
        const text = document.getElementById('poem-feeling-text').value.trim();
        if (!text) {
            alert('Em hãy viết cảm nhận về hình ảnh thơ trước khi gửi nhé!');
            return;
        }

        const fb = document.getElementById('fb-poem-feeling-ai');
        fb.classList.remove('hidden');
        fb.innerHTML = '<div class="p-6 bg-white border-2 border-sky-100 rounded-2xl shadow-lg italic text-lg md:text-xl text-sky-900 animate-pulse text-center">EduRobot đang đọc cảm nhận thơ của em, chờ một chút nhé...</div>';

        const prompt = \`Học sinh lớp 5 viết cảm nhận về hình ảnh thơ em thích nhất trong các bài thơ: Hạt gạo làng ta, Khúc hát ru em bé lớn trên lưng mẹ, Thư của bố, Đoàn thuyền đánh cá, Đường quê Đồng Tháp Mười.\\nBài làm của học sinh: \"\${text}\"\\nHãy nhận xét bài làm một cách nhẹ nhàng, khích lệ khả năng cảm nhận văn học và chỉ ra điểm hay của học sinh. Xưng hô \"Thầy/Cô\" và gọi học sinh là \"em\".\`;

        await askAI('185-poem-feeling-ai', prompt, 'single', 'writing', 25, prompt);
    };

    // BÀI 2 COMPREHENSION CHECK
    window.check185QuatMoAI = async function() {
        const qa = document.getElementById('quat-mo-a').value.trim();
        const qb = document.getElementById('quat-mo-b').value.trim();
        const qc = document.getElementById('quat-mo-c').value.trim();
        const qd = document.getElementById('quat-mo-d').value.trim();

        if (!qa || !qb || !qc || !qd) {
            alert('Em hãy trả lời đầy đủ cả 4 câu hỏi đọc hiểu nhé!');
            return;
        }

        const fb = document.getElementById('fb-quat-mo-ai');
        fb.classList.remove('hidden');
        fb.innerHTML = '<div class="p-6 bg-white border-2 border-sky-100 rounded-2xl shadow-lg italic text-lg md:text-xl text-sky-900 animate-pulse text-center">EduRobot đang chấm bài đọc hiểu câu chuyện "Quạt mo", chờ một chút nhé...</div>';

        const prompt = \`Học sinh lớp 5 trả lời câu hỏi bài đọc "Quạt mo":\\na. Quạt mo được miêu tả thế nào: \"\${qa}\"\\nb. Gợi nhớ kỉ niệm tuổi thơ nào về bà: \"\${qb}\"\\nc. Giấc mơ của người cháu và điểm thú vị: \"\${qc}\"\\nd. Suy nghĩ về chi tiết lớn lên vẫn giữ quạt mo làm kỉ niệm: \"\${qd}\"\\nHãy viết nhận xét chi tiết cho từng câu trả lời, sửa lỗi nếu có và chấm điểm khích lệ học sinh. Xưng hô \"Thầy/Cô\" và gọi học sinh là \"em\".\`;

        await askAI('185-quat-mo-ai', prompt, 'single', 'writing', 25, prompt);
    };

    // BÀI 3: TRÒ CHƠI BOARD GAME "TÌM KHO BÁU"
    const cells = [
        { type: 'start', label: 'Bắt đầu 🚩' },
        { type: 'word', label: 'Vì ... nên ...', conjunctions: 'vì... nên...' },
        { type: 'word', label: 'Tuy ... nhưng ...', conjunctions: 'tuy... nhưng...' },
        { type: 'lucky', label: '🍀 Tiến 4 ô', steps: 4 },
        { type: 'word', label: 'Nếu ... thì ...', conjunctions: 'nếu... thì...' },
        { type: 'word', label: '... và ...', conjunctions: 'và' },
        { type: 'word', label: '... rồi ...', conjunctions: 'rồi' },
        { type: 'lucky', label: '🍀 Tiến 3 ô', steps: 3 },
        { type: 'word', label: '... nhưng ...', conjunctions: 'nhưng' },
        { type: 'penalty', label: '💥 Lùi 4 ô', steps: -4 },
        { type: 'word', label: '... còn ...', conjunctions: 'còn' },
        { type: 'lucky', label: '🍀 Tiến 2 ô', steps: 2 },
        { type: 'word', label: 'Mặc dù... nhưng...', conjunctions: 'mặc dù... nhưng...' },
        { type: 'word', label: 'Nhờ ... mà ...', conjunctions: 'nhờ... mà...' },
        { type: 'lucky', label: '🍀 Tiến 1 ô', steps: 1 },
        { type: 'word', label: 'Hễ ... thì ...', conjunctions: 'hễ... thì...' },
        { type: 'treasure', label: '👑 KHO BÁU' }
    ];

    window.gameState = { currentCell: 0 };
    window.gameWon = false;
    window.gameAwaitingAnswer = false;
    window.currentGameConjunction = '';

    window.updateBoardUI = function() {
        const grid = document.getElementById('game-board-grid');
        grid.innerHTML = '';

        cells.forEach((cell, idx) => {
            const isCurrent = (window.gameState.currentCell === idx);
            let bgClass = 'bg-slate-800 border-slate-700';
            if (cell.type === 'lucky') bgClass = 'bg-yellow-600/40 border-yellow-500';
            else if (cell.type === 'penalty') bgClass = 'bg-red-900/40 border-red-700';
            else if (cell.type === 'treasure') bgClass = 'bg-amber-500/40 border-amber-400';
            else if (cell.type === 'start') bgClass = 'bg-emerald-600/40 border-emerald-500';
            else if (cell.type === 'word') bgClass = 'bg-blue-600/40 border-blue-500';

            let activeClass = isCurrent ? 'ring-4 ring-yellow-400 scale-[1.03] border-yellow-300 font-extrabold text-yellow-100 z-10' : 'opacity-80';

            const cellEl = document.createElement('div');
            cellEl.className = \`p-3 rounded-2xl border-2 text-center text-xs md:text-sm flex flex-col items-center justify-between min-h-[90px] transition-all \... \${bgClass} \${activeClass}\`;
            
            cellEl.innerHTML = \`
                <span class="font-bold text-slate-400">Ô \${idx}</span>
                <span class="font-black text-center">\${cell.label}</span>
                \${isCurrent ? '<span class="text-xl animate-bounce">🚶</span>' : ''}
            \`;
            grid.appendChild(cellEl);
        });

        const posText = document.getElementById('game-status-position');
        const currentCell = cells[window.gameState.currentCell];
        posText.innerHTML = \`Ô số \${window.gameState.currentCell}: \${currentCell.label}\`;
    };

    window.showGameLog = function(msg) {
        const log = document.getElementById('game-history-log');
        log.innerHTML = \`<p class="text-yellow-400 font-bold">\${msg}</p>\` + log.innerHTML;
    };

    window.rollDice = function() {
        if (window.gameWon) {
            alert("Trò chơi đã kết thúc! Nhấn 'Chơi lại' để bắt đầu vòng mới.");
            return;
        }
        
        if (window.gameAwaitingAnswer) {
            alert("Em hãy viết câu ghép và nộp bài để EduRobot nhận xét trước khi tiếp tục tung xúc xắc nhé!");
            return;
        }

        const roll = Math.floor(Math.random() * 6) + 1;
        let oldPos = window.gameState.currentCell;
        let newPos = oldPos + roll;
        
        let logMsg = \`🎲 Bạn tung được \${roll} nút. Di chuyển từ ô \${oldPos} đến ô \${newPos}.\`;
        
        if (newPos >= 16) {
            newPos = 16;
            window.gameState.currentCell = 16;
            window.gameWon = true;
            updateBoardUI();
            showGameLog(logMsg + " 🎉 Chúc mừng! Bạn đã tìm được kho báu!");
            document.getElementById('game-question-area').innerHTML = \`
                <div class="p-6 bg-emerald-50 border-2 border-emerald-500 rounded-3xl text-center space-y-4">
                    <h3 class="text-lg md:text-2xl font-black text-emerald-800">🎉 CHIẾN THẮNG!</h3>
                    <p class="text-lg font-bold text-emerald-950">Chúc mừng em đã xuất sắc vượt qua các thử thách câu ghép và tìm thấy kho báu tri thức!</p>
                    <button onclick="resetGame()" class="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md">Chơi lại</button>
                </div>
            \`;
            return;
        }

        let landedCell = cells[newPos];
        window.gameState.currentCell = newPos;
        
        if (landedCell.type === 'lucky') {
            const bonus = landedCell.steps;
            window.gameState.currentCell += bonus;
            if (window.gameState.currentCell >= 16) window.gameState.currentCell = 16;
            logMsg += \` (Rơi vào ô may mắn: Tiến thêm \${bonus} ô lên ô \${window.gameState.currentCell}).\`;
            if (window.gameState.currentCell === 16) {
                window.gameWon = true;
                updateBoardUI();
                showGameLog(logMsg + " 🎉 Chúc mừng! Bạn đã tìm được kho báu!");
                document.getElementById('game-question-area').innerHTML = \`
                    <div class="p-6 bg-emerald-50 border-2 border-emerald-500 rounded-3xl text-center space-y-4">
                        <h3 class="text-lg md:text-2xl font-black text-emerald-800">🎉 CHIẾN THẮNG!</h3>
                        <p class="text-lg font-bold text-emerald-950">Chúc mừng em đã xuất sắc vượt qua các thử thách câu ghép và tìm thấy kho báu tri thức!</p>
                        <button onclick="resetGame()" class="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md">Chơi lại</button>
                    </div>
                \`;
                return;
            }
        } else if (landedCell.type === 'penalty') {
            const penalty = landedCell.steps;
            window.gameState.currentCell += penalty;
            if (window.gameState.currentCell < 0) window.gameState.currentCell = 0;
            logMsg += \` (Rơi vào ô bẫy: Bị lùi lại \${Math.abs(penalty)} ô về ô \${window.gameState.currentCell}).\`;
        }
        
        updateBoardUI();
        showGameLog(logMsg);
        
        let finalPos = window.gameState.currentCell;
        let finalCell = cells[finalPos];
        
        if (finalCell.type === 'word') {
            window.gameAwaitingAnswer = true;
            window.currentGameConjunction = finalCell.conjunctions || finalCell.conjunction;
            document.getElementById('game-question-area').innerHTML = \`
                <div class="p-6 bg-blue-50 border-2 border-blue-200 rounded-3xl space-y-4 animate-in fade-in duration-300">
                    <h4 class="text-xl font-black text-blue-600">✍️ Thử thách tại ô số \${finalPos} [\${finalCell.label}]</h4>
                    <p class="text-lg font-bold text-blue-950">Em hãy viết một câu ghép sử dụng từ/cặp từ nối: <span class="text-red-600 font-extrabold">\${window.currentGameConjunction}</span></p>
                    <textarea id="game-sentence-input" rows="2" class="w-full p-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-100 outline-none text-lg font-semibold" placeholder="Nhập câu ghép của em tại đây..."></textarea>
                    <div class="flex justify-center gap-3">
                        <button onclick="check185GameSentenceAI()" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md active:scale-95 transition-all">🤖 Nhận xét bằng AI</button>
                        <button onclick="skipGameQuestion()" class="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-xl active:scale-95 transition-all">Bỏ qua thử thách</button>
                    </div>
                    <div id="fb-game-sentence-ai" class="hidden mt-3"></div>
                </div>
            \`;
        } else {
            window.gameAwaitingAnswer = false;
            document.getElementById('game-question-area').innerHTML = \`
                <div class="p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center text-gray-500 font-bold">
                    Tung xúc xắc để di chuyển đến ô tiếp theo...
                </div>
            \`;
        }
    };

    window.skipGameQuestion = function() {
        window.gameAwaitingAnswer = false;
        showGameLog("⚠️ Bạn đã bỏ qua thử thách viết câu ghép ở ô " + window.gameState.currentCell);
        document.getElementById('game-question-area').innerHTML = \`
            <div class="p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center text-gray-500 font-bold">
                Tung xúc xắc để tiếp tục di chuyển...
            </div>
        \`;
    };

    window.check185GameSentenceAI = async function() {
        const text = document.getElementById('game-sentence-input').value.trim();
        if (!text) {
            alert('Em hãy viết câu ghép trước khi gửi nhé!');
            return;
        }

        const fb = document.getElementById('fb-game-sentence-ai');
        fb.classList.remove('hidden');
        fb.innerHTML = '<div class="p-4 bg-white border-2 border-sky-100 rounded-xl shadow-md italic text-sky-950 animate-pulse text-center">EduRobot đang kiểm tra câu ghép của em, chờ một chút nhé...</div>';

        const prompt = \`Học sinh lớp 5 viết một câu ghép có chứa kết từ hoặc cặp quan hệ từ: \"\${window.currentGameConjunction}\".\\nCâu của học sinh: \"\${text}\"\\nHãy kiểm tra xem câu của học sinh có đúng ngữ pháp câu ghép không, các vế có liên kết chặt chẽ và sử dụng đúng từ nối không. Nhận xét ngắn gọn, động viên học sinh. Xưng hô \"Thầy/Cô\" và gọi học sinh là \"em\".\`;

        window.gameAwaitingAnswer = false;
        
        await askAI('185-game-sentence-ai', prompt, 'single', 'writing', 25, prompt);
    };

    window.resetGame = function() {
        window.gameState.currentCell = 0;
        window.gameWon = false;
        window.gameAwaitingAnswer = false;
        window.currentGameConjunction = '';
        updateBoardUI();
        document.getElementById('game-history-log').innerHTML = '<p class="text-slate-500 font-bold italic">Bắt đầu trò chơi mới! Hãy bấm nút Lắc xúc xắc.</p>';
        document.getElementById('game-question-area').innerHTML = \`
            <div class="p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center text-gray-500 font-bold">
                Tung xúc xắc để di chuyển đến ô tiếp theo...
            </div>
        \`;
    };

    // BÀI 4 CHECK
    window.check185Linking4 = function() {
        const correctAnswers = {
            wordA: "Người nấu cơm",
            methodA: "Phép lặp từ ngữ",
            wordB: "cậu",
            methodB: "Phép thế"
        };

        const wa = document.getElementById('link-word-4a').value;
        const ma = document.getElementById('link-method-4a').value;
        const wb = document.getElementById('link-word-4b').value;
        const mb = document.getElementById('link-method-4b').value;

        if (!wa || !ma || !wb || !mb) {
            alert('Em hãy chọn đầy đủ câu trả lời cho cả hai câu a và b nhé!');
            return;
        }

        let correctCount = 0;
        let details = "";

        if (wa === correctAnswers.wordA && ma === correctAnswers.methodA) {
            details += "✅ Đoạn a: Ghép chính xác! (Từ 'Người nấu cơm' - Phép lặp từ ngữ).\\n";
            correctCount++;
        } else {
            details += "❌ Đoạn a: Lựa chọn chưa chính xác.\\n";
        }

        if (wb === correctAnswers.wordB && mb === correctAnswers.methodB) {
            details += "✅ Đoạn b: Ghép chính xác! (Từ 'cậu' thay thế cho 'Thào A Sùng' - Phép thế).\\n";
            correctCount++;
        } else {
            details += "❌ Đoạn b: Lựa chọn chưa chính xác.\\n";
        }

        const fb = document.getElementById('linking-4-feedback');
        fb.classList.remove('hidden');
        fb.innerHTML = details.replace(/\\n/g, '<br>');
        if (correctCount === 2) {
            fb.className = "text-lg font-black text-center text-emerald-600 mt-4";
        } else {
            fb.className = "text-lg font-black text-center text-amber-600 mt-4";
        }
    };

    // BÀI 5 CHECK
    window.check185Linking5AI = async function() {
        const text = document.getElementById('linking-words-5').value.trim();
        const replaceText = document.getElementById('replace-words-5').value.trim();

        if (!text || !replaceText) {
            alert('Em hãy trả lời đầy đủ câu a và b nhé!');
            return;
        }

        const fb = document.getElementById('fb-linking-5-ai');
        fb.classList.remove('hidden');
        fb.innerHTML = '<div class="p-6 bg-white border-2 border-sky-100 rounded-2xl shadow-lg italic text-lg md:text-xl text-sky-900 animate-pulse text-center">EduRobot đang đọc và kiểm tra câu trả lời của em, chờ một chút nhé...</div>';

        const prompt = \`Học sinh lớp 5 trả lời câu hỏi Bài 5 (tìm từ ngữ nối và từ thay thế trong đoạn văn chim tu hú):\\na. Từ ngữ nối có tác dụng liên kết đã tìm: \"\${text}\" (Đáp án đúng là: Nhưng, Và, Vì thế)\\nb. Từ ngữ nối tương đương có thể thay thế: \"\${replaceText}\" (Đáp án gợi ý: Nhưng -> song, tuy nhiên; Và -> đồng thời; Vì thế -> do đó, bởi vậy)\\nHãy nhận xét câu trả lời của học sinh, khích lệ và giải thích cặn kẽ ý nghĩa liên kết. Xưng hô \"Thầy/Cô\" và gọi học sinh là \"em\".\`;

        await askAI('185-linking-5-ai', prompt, 'single', 'writing', 25, prompt);
    };

    // BÀI 6 CHECK
    window.check185Blank6 = function() {
        const correctAnswers = {
            1: "Nhưng",
            2: "Ban đầu",
            3: "Sau đó",
            4: "Thế là"
        };

        const b1 = document.getElementById('blank-1').value;
        const b2 = document.getElementById('blank-2').value;
        const b3 = document.getElementById('blank-3').value;
        const b4 = document.getElementById('blank-4').value;

        if (!b1 || !b2 || !b3 || !b4) {
            alert('Em hãy điền đầy đủ cả 4 khoảng trống nhé!');
            return;
        }

        let correct = 0;
        if (b1 === correctAnswers[1]) correct++;
        if (b2 === correctAnswers[2]) correct++;
        if (b3 === correctAnswers[3]) correct++;
        if (b4 === correctAnswers[4]) correct++;

        const fb = document.getElementById('blank-6-feedback');
        fb.classList.remove('hidden');
        if (correct === 4) {
            fb.innerHTML = "🎉 Tuyệt vời! Em đã điền chính xác 100% tất cả các từ liên kết để hoàn thiện đoạn văn rồi! Cố gắng phát huy nhé!";
            fb.className = "text-lg font-black text-center text-emerald-600 mt-4";
        } else {
            fb.innerHTML = \`⚠️ Em đã điền đúng \${correct}/4 vị trí. Hãy đọc kĩ mạch logic của đoạn văn và thử lại nhé!\`;
            fb.className = "text-lg font-black text-center text-amber-600 mt-4";
        }
    };

    // Khởi chạy game UI ban đầu
    setTimeout(() => {
        if (document.getElementById('game-board-grid')) {
            updateBoardUI();
        }
    }, 200);
</script>
`,
    "practice": {
        "settings": { "pick": 10 },
        "questions": [
            {
                "question": "Hai câu thơ: 'Ông đứng như bụt hiện / Chờ cháu cuối đường quê' trích từ tác phẩm nào?",
                "options": ["Hương sơn", "Đường quê Đồng Tháp Mười", "Hạt gạo làng ta", "Bếp lửa"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Hai câu thơ: 'Mặt trời của bắp thì nằm trên đồi / Mặt trời của mẹ, em nằm trên lưng' là của tác giả nào?",
                "options": ["Trần Đăng Khoa", "Nguyễn Khoa Điềm", "Bằng Việt", "Huy Cận"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Đoạn thơ 'Con đã lớn khôn, đọc được cả những điều / Chưa được viết trong thư người lính biển' trích từ bài thơ nào của tác giả Thụy Anh?",
                "options": ["Thư của bố", "Gửi em ở đảo", "Hạt gạo làng ta", "Khúc hát ru em bé lớn trên lưng mẹ"],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Hai câu thơ: 'Mặt trời xuống biển như hòn lửa / Sóng đã cài then, đêm sập cửa' sử dụng biện pháp tu từ nào?",
                "options": ["So sánh và nhân hóa", "Nhân hóa và điệp từ", "Ẩn dụ và so sánh", "Đảo ngữ và ẩn dụ"],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Câu thơ: 'Em vui em hát / Hạt vàng làng ta...' trích từ bài thơ nào của tác giả Trần Đăng Khoa?",
                "options": ["Thư của bố", "Gửi em ở đảo", "Hạt gạo làng ta", "Tiếng hát của người đá"],
                "answer": 2,
                "level": 1
            },
            {
                "question": "Trong văn bản 'Quạt mo', chiếc quạt mo được làm từ bộ phận nào của cây cau?",
                "options": ["Lá cau tươi", "Bẹ cau khô phơi nắng", "Thân cây cau", "Quả cau khô"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Văn bản 'Quạt mo' gợi nhớ những kỉ niệm ấm áp nào giữa hai nhân vật nào?",
                "options": ["Mẹ và con", "Ông và cháu", "Bà và cháu", "Hai bạn thân"],
                "answer": 2,
                "level": 1
            },
            {
                "question": "Trong giấc mơ của mình ở văn bản 'Quạt mo', người cháu đã mơ thấy nhân vật nào trong bài đồng dao?",
                "options": ["Thằng Bờm", "Phú ông", "Bà nội", "Chú trâu vàng"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Chi tiết người cháu khi lớn vẫn giữ chiếc quạt mo làm kỉ niệm thể hiện tình cảm gì?",
                "options": [
                    "Tình yêu thương kính trọng đối với người bà và trân trọng kỉ niệm tuổi thơ",
                    "Thích đồ thủ công mỹ nghệ",
                    "Thích sưu tầm lá cau khô",
                    "Tiết kiệm không mua quạt điện"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Liên kết câu bằng cách lặp lại trong câu sau những từ ngữ đã xuất hiện ở câu trước gọi là gì?",
                "options": ["Phép lặp từ ngữ", "Phép thế", "Phép nối", "Phép liên tưởng"],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Liên kết câu bằng cách dùng đại từ hoặc từ đồng nghĩa thay thế cho từ ngữ ở câu trước gọi là gì?",
                "options": ["Phép lặp từ ngữ", "Phép thế", "Phép nối", "Phép liên tưởng"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Trong câu: 'Thào A Sùng cười thật tươi. Trong mắt cậu...', từ 'cậu' thay thế cho từ ngữ nào?",
                "options": ["tôi", "Thào A Sùng", "đồi chè", "ánh mắt"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Phép liên kết nào được sử dụng chính trong đoạn văn sau: 'Mỗi người nấu cơm đều mang một cái cần tre... Người nấu cơm tay giữ cần...'",
                "options": ["Phép thế", "Phép nối", "Phép lặp từ ngữ", "Không có phép liên kết"],
                "answer": 2,
                "level": 1
            },
            {
                "question": "Từ nối 'Nhưng' biểu thị quan hệ gì giữa các câu được liên kết?",
                "options": ["Quan hệ tương phản", "Quan hệ nguyên nhân - kết quả", "Quan hệ tăng tiến", "Quan hệ bổ sung"],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Từ nối 'Vì thế' biểu thị quan hệ gì giữa các câu được liên kết?",
                "options": ["Quan hệ tương phản", "Quan hệ nguyên nhân - kết quả", "Quan hệ tăng tiến", "Quan hệ điều kiện"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Trong các từ sau, từ nào có thể thay thế cho từ nối 'Nhưng' mà không làm đổi nghĩa?",
                "options": ["Tuy nhiên", "Vì vậy", "Hơn nữa", "Do đó"],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Trong các từ sau, từ nào có thể thay thế cho từ nối 'Vì thế'?",
                "options": ["Tuy nhiên", "Do đó", "Song", "Mặc dù"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Điền từ liên kết thích hợp vào câu: 'Tôi định ngủ một giấc. ... những mảng màu rực rỡ đã kéo tôi thức dậy.'",
                "options": ["Nhưng", "Ban đầu", "Vì thế", "Tuy nhiên"],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Điền từ liên kết thích hợp vào đầu câu: '..., tôi chỉ thấy màu xanh. Nhìn từ trên máy bay...'",
                "options": ["Nhưng", "Ban đầu", "Sau đó", "Thế là"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Phép thế có tác dụng gì quan trọng nhất trong việc liên kết câu?",
                "options": [
                    "Tránh lặp từ gây nhàm chán và tạo mối liên kết ngữ nghĩa liền mạch",
                    "Giúp câu văn dài hơn",
                    "Giúp học sinh dễ đọc thuộc lòng",
                    "Làm cho câu thơ hay hơn"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Câu ghép nào dưới đây biểu thị mối quan hệ điều kiện / giả thiết - kết quả?",
                "options": [
                    "Nếu ngày mai trời mưa thì chúng ta sẽ nghỉ lao động.",
                    "Tuy trời mưa nhưng bạn Nam vẫn đi học đúng giờ.",
                    "Vì sương mù dày đặc nên máy bay không thể cất cánh.",
                    "Nhờ các bác sĩ tận tình cứu chữa nên bệnh nhân đã hồi phục."
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Cặp quan hệ từ biểu thị mối quan hệ nhượng bộ/tương phản là cặp nào?",
                "options": ["Mặc dù ... nhưng ...", "Vì ... nên ...", "Nếu ... thì ...", "Nhờ ... mà ..."],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Câu nào dưới đây là câu ghép?",
                "options": [
                    "Mùa hè tạnh ráo.",
                    "Nắng vừa lên, sương đã tan.",
                    "Trong vườn, những bông hồng tỏa hương ngào ngạt.",
                    "Ông đứng như bụt hiện chờ cháu cuối đường quê."
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Cặp quan hệ từ 'Hễ... thì...' biểu thị mối quan hệ gì giữa các vế câu ghép?",
                "options": ["Quan hệ tăng tiến", "Quan hệ tương phản", "Quan hệ điều kiện/giả thiết - kết quả", "Quan hệ nguyên nhân - kết quả"],
                "answer": 2,
                "level": 1
            },
            {
                "question": "Tác giả của bài đọc 'Quạt mo' trong chương trình Tiếng Việt 5 là ai?",
                "options": ["Võ Quảng", "Phan Đức Lộc", "Trần Đăng Khoa", "Nguyễn Khoa Điềm"],
                "answer": 1,
                "level": 1
            }
        ]
    }
};
