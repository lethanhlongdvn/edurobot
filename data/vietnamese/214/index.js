// Tiết 214-215: Đọc: Việt Nam quê hương ta & LTVC: Nghĩa của từ, Từ đồng nghĩa
export const lesson214 = {
    "topic": "Tiếng Việt 5",
    "week": "31",
    "period": "214-215",
    "title": "ĐỌC: VIỆT NAM QUÊ HƯƠNG TA",
    "desc": "Cảm nhận tình yêu đất nước qua bài thơ 'Việt Nam quê hương ta' của Nguyễn Đình Thi, đồng thời luyện tập phân tích nghĩa của từ, tìm từ đồng nghĩa và đặt câu.",
    "subject": "Tiếng Việt",
    "theme": "Vì cuộc sống thanh bình",
    "audio": "",
    "content": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto pb-12">
        <!-- 🎯 Mục tiêu bài học -->
        <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
            <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl"></div>
            <h3 class="text-2xl md:text-3xl font-black text-blue-600 mb-4 flex items-center gap-3">
                <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
                Mục tiêu bài học
            </h3>
            <ul class="space-y-3 text-blue-600 font-bold text-xl md:text-2xl ml-2">
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Đọc trôi chảy, diễn cảm và cảm thụ bài thơ hào hùng, tràn đầy lòng tự hào dân tộc \"Việt Nam quê hương ta\".
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Phát hiện và phân tích được nghĩa gốc và nghĩa chuyển của từ trong ngữ cảnh văn học.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Mở rộng vốn từ qua hoạt động tìm từ đồng nghĩa với các từ \"thân yêu\", \"vất vả\" và thực hành đặt câu chuẩn ngữ pháp.
                </li>
            </ul>
        </div>

        <!-- 📖 Bài đọc và Minh họa -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 relative overflow-hidden">
                <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <!-- Văn bản thơ -->
                    <div class="lg:col-span-3 space-y-6">
                        <h4 class="text-3xl md:text-4xl font-black text-blue-600 text-center leading-tight mb-8">
                            📖 VIỆT NAM QUÊ HƯƠNG TA
                        </h4>
                        
                        <div class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed space-y-6 md:space-y-8 pl-4 md:pl-12 border-l-4 border-blue-200">
                            <!-- Khổ 1 -->
                            <div class="space-y-1">
                                <p>Việt Nam đất nước ta ơi</p>
                                <p>Mênh mông biển lúa đâu trời đẹp hơn</p>
                                <p>Cánh cò bay lả rập rờn</p>
                                <p>Mây mờ che đỉnh Trường Sơn sớm chiều.</p>
                            </div>

                            <!-- Khổ 2 -->
                            <div class="space-y-1">
                                <p>Quê hương biết mấy thân yêu</p>
                                <p>Bao nhiêu đời đã chịu nhiều thương đau</p>
                                <p>Mặt người vất vả in sâu</p>
                                <p>Gái trai cũng một áo nâu nhuộm bùn.</p>
                            </div>

                            <!-- Khổ 3 -->
                            <div class="space-y-1">
                                <p>Đất nghèo nuôi những anh hùng</p>
                                <p>Chìm trong máu lửa lại vùng đứng lên</p>
                                <p>Đạp quân thù xuống đất đen</p>
                                <p>Súng gươm vứt bỏ lại hiền như xưa.</p>
                            </div>

                            <!-- Khổ 4 -->
                            <div class="space-y-1">
                                <p>Việt Nam đất nắng chan hoà</p>
                                <p>Hoa thơm quả ngọt bốn mùa trời xanh</p>
                                <p>Mắt đen cô gái long lanh</p>
                                <p>Yêu ai yêu trọn tấm tình thuỷ chung.</p>
                            </div>

                            <!-- Khổ 5 -->
                            <div class="space-y-1">
                                <p>Đất trăm nghề của trăm vùng</p>
                                <p>Khách phương xa tới lạ lùng tìm xem</p>
                                <p>Tay người như có phép tiên</p>
                                <p>Trên tre lá cũng dệt nghìn bài thơ.</p>
                            </div>
                        </div>
                        <p class="text-right font-black text-blue-600 text-lg md:text-xl mt-6">— Nguyễn Đình Thi</p>
                    </div>

                    <!-- Minh họa quê hương -->
                    <div class="lg:col-span-2 space-y-6">
                        <!-- Hình ảnh -->
                        <div class="w-full aspect-[4/3] bg-gradient-to-br from-blue-50 to-sky-100 rounded-3xl border-4 border-white shadow-lg overflow-hidden group">
                            <img src="assets/images/vietnamquehuongta.png" alt="Phong cảnh quê hương đất nước Việt Nam mênh mông biển lúa, cánh cò bay lả" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                        </div>

                        <!-- Khởi động -->
                        <div class="bg-amber-50 p-6 rounded-3xl border-2 border-dashed border-amber-200">
                            <p class="text-sm font-black text-amber-600 uppercase tracking-[0.2em] mb-4">💬 Khởi động</p>
                            <p class="text-lg md:text-xl text-amber-900 font-bold leading-relaxed">
                                Nếu gặp một người bạn nước ngoài, em sẽ giới thiệu những gì về đất nước mình? (Ví dụ: danh lam thắng cảnh, trang phục truyền thống, ẩm thực độc đáo, con người thân thiện...).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `,
    "practice": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto pb-12">
        <!-- ❓ Phần 1: Tìm hiểu câu hỏi đọc hiểu (Đọc) -->
        <section class="w-full" id="ex-214-reading">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 space-y-6">
                <h3 class="text-2xl md:text-3xl font-black text-blue-955 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">1</span>
                    Trả lời câu hỏi đọc hiểu văn bản
                </h3>
                <p class="text-gray-500 font-bold text-lg">Học sinh nhấn vào mỗi câu hỏi để ghi âm câu trả lời hoặc xem gợi ý đáp án chi tiết.</p>

                <div class="space-y-4">
                    <!-- Q1 -->
                    <div class="border-2 border-blue-50 rounded-2xl overflow-hidden transition-all duration-300">
                        <button onclick="window.toggleAccordion214('acc-q1')" class="w-full p-5 bg-blue-50/30 hover:bg-blue-50/50 flex items-center justify-between text-left">
                            <span class="text-lg md:text-xl font-bold text-gray-800">1. Khổ thơ đầu tiên giới thiệu cảnh sắc thiên nhiên Việt Nam đẹp như thế nào?</span>
                            <span id="icon-acc-q1" class="text-xl font-bold text-blue-600">+</span>
                        </button>
                        <div id="acc-q1" class="hidden p-6 bg-white border-t border-blue-50 space-y-4">
                            <div class="space-y-2">
                                <label class="block text-base md:text-lg font-black text-gray-600">Luyện nói câu trả lời của em:</label>
                                <div class="flex items-center gap-3">
                                    <input type="text" id="ipt-q1" class="flex-1 p-3 border border-gray-200 rounded-xl font-bold text-base md:text-lg" placeholder="Nói hoặc gõ câu trả lời tại đây...">
                                    <button onclick="Lesson.toggleSpeechRec('ipt-q1')" class="p-3 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl transition-colors">🎤</button>
                                </div>
                            </div>
                            <div class="bg-emerald-50 p-4 rounded-xl text-base md:text-lg text-emerald-900 font-bold">
                                💡 <strong>Trả lời:</strong> Cảnh sắc thiên nhiên hiện lên vô cùng thơ mộng và hùng vĩ: có biển lúa bao la vàng óng trải dài mênh mông, có cánh cò trắng bay lả rập rờn, và có dãy Trường Sơn hùng vĩ sớm chiều chìm trong sương mờ.
                            </div>
                        </div>
                    </div>

                    <!-- Q2 -->
                    <div class="border-2 border-blue-50 rounded-2xl overflow-hidden transition-all duration-300">
                        <button onclick="window.toggleAccordion214('acc-q2')" class="w-full p-5 bg-blue-50/30 hover:bg-blue-50/50 flex items-center justify-between text-left">
                            <span class="text-lg md:text-xl font-bold text-gray-800">2. Hình ảnh con người Việt Nam trong những năm tháng chiến tranh hiện lên ra sao?</span>
                            <span id="icon-acc-q2" class="text-xl font-bold text-blue-600">+</span>
                        </button>
                        <div id="acc-q2" class="hidden p-6 bg-white border-t border-blue-50 space-y-4">
                            <div class="space-y-2">
                                <label class="block text-base md:text-lg font-black text-gray-600">Luyện nói câu trả lời của em:</label>
                                <div class="flex items-center gap-3">
                                    <input type="text" id="ipt-q2" class="flex-1 p-3 border border-gray-200 rounded-xl font-bold text-base md:text-lg" placeholder="Nói hoặc gõ câu trả lời tại đây...">
                                    <button onclick="Lesson.toggleSpeechRec('ipt-q2')" class="p-3 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl transition-colors">🎤</button>
                                </div>
                            </div>
                            <div class="bg-emerald-50 p-4 rounded-xl text-base md:text-lg text-emerald-900 font-bold">
                                💡 <strong>Trả lời:</strong> Trong chiến tranh gian khổ, con người Việt Nam hiện lên kiên cường và anh dũng: chịu nhiều đau thương, gian lao vất vả với \"áo nâu nhuộm bùn\", nhưng khi giặc đến thì vùng lên mạnh mẽ \"đạp quân thù xuống đất đen\" để bảo vệ độc lập tự do.
                            </div>
                        </div>
                    </div>

                    <!-- Q3 -->
                    <div class="border-2 border-blue-50 rounded-2xl overflow-hidden transition-all duration-300">
                        <button onclick="window.toggleAccordion214('acc-q3')" class="w-full p-5 bg-blue-50/30 hover:bg-blue-50/50 flex items-center justify-between text-left">
                            <span class="text-lg md:text-xl font-bold text-gray-800">3. Tác giả muốn nói điều gì về đất nước, con người Việt Nam qua hai khổ thơ cuối?</span>
                            <span id="icon-acc-q3" class="text-xl font-bold text-blue-600">+</span>
                        </button>
                        <div id="acc-q3" class="hidden p-6 bg-white border-t border-blue-50 space-y-4">
                            <div class="space-y-2">
                                <label class="block text-base md:text-lg font-black text-gray-600">Luyện nói câu trả lời của em:</label>
                                <div class="flex items-center gap-3">
                                    <input type="text" id="ipt-q3" class="flex-1 p-3 border border-gray-200 rounded-xl font-bold text-base md:text-lg" placeholder="Nói hoặc gõ câu trả lời tại đây...">
                                    <button onclick="Lesson.toggleSpeechRec('ipt-q3')" class="p-3 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl transition-colors">🎤</button>
                                </div>
                            </div>
                            <div class="bg-emerald-50 p-4 rounded-xl text-base md:text-lg text-emerald-900 font-bold">
                                💡 <strong>Trả lời:</strong> Đất nước ta hiền hòa, trù phú với nắng ấm chan hòa bốn mùa, con người thì nghĩa tình thủy chung, cần cù khéo léo trong lao động sáng tạo (\"tay người như có phép tiên/ Trên tre lá cũng dệt nghìn bài thơ\").
                            </div>
                        </div>
                    </div>

                    <!-- Q4 -->
                    <div class="border-2 border-blue-50 rounded-2xl overflow-hidden transition-all duration-300">
                        <button onclick="window.toggleAccordion214('acc-q4')" class="w-full p-5 bg-blue-50/30 hover:bg-blue-50/50 flex items-center justify-between text-left">
                            <span class="text-lg md:text-xl font-bold text-gray-800">4. Qua bài thơ, tác giả thể hiện những tình cảm gì đối với quê hương, đất nước?</span>
                            <span id="icon-acc-q4" class="text-xl font-bold text-blue-600">+</span>
                        </button>
                        <div id="acc-q4" class="hidden p-6 bg-white border-t border-blue-50 space-y-4">
                            <div class="space-y-2">
                                <label class="block text-base md:text-lg font-black text-gray-600">Luyện nói câu trả lời của em:</label>
                                <div class="flex items-center gap-3">
                                    <input type="text" id="ipt-q4" class="flex-1 p-3 border border-gray-200 rounded-xl font-bold text-base md:text-lg" placeholder="Nói hoặc gõ câu trả lời tại đây...">
                                    <button onclick="Lesson.toggleSpeechRec('ipt-q4')" class="p-3 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl transition-colors">🎤</button>
                                </div>
                            </div>
                            <div class="bg-emerald-50 p-4 rounded-xl text-base md:text-lg text-emerald-900 font-bold">
                                💡 <strong>Trả lời:</strong> Tác giả bộc lộ tình yêu quê hương sâu sắc, niềm tự hào kiêu hãnh trước vẻ đẹp thiên nhiên, lòng biết ơn đối với những cống hiến hy sinh của cha ông và niềm tự hào về truyền thống lao động nghệ thuật của dân tộc.
                            </div>
                        </div>
                    </div>

                    <!-- Q5 -->
                    <div class="border-2 border-blue-50 rounded-2xl overflow-hidden transition-all duration-300">
                        <button onclick="window.toggleAccordion214('acc-q5')" class="w-full p-5 bg-blue-50/30 hover:bg-blue-50/50 flex items-center justify-between text-left">
                            <span class="text-lg md:text-xl font-bold text-gray-800">5. Em thích những câu thơ nào trong bài? Vì sao?</span>
                            <span id="icon-acc-q5" class="text-xl font-bold text-blue-600">+</span>
                        </button>
                        <div id="acc-q5" class="hidden p-6 bg-white border-t border-blue-50 space-y-4">
                            <div class="space-y-2">
                                <label class="block text-base md:text-lg font-black text-gray-600">Luyện nói câu trả lời của em:</label>
                                <div class="flex items-center gap-3">
                                    <input type="text" id="ipt-q5" class="flex-1 p-3 border border-gray-200 rounded-xl font-bold text-base md:text-lg" placeholder="Nói hoặc gõ câu trả lời tại đây...">
                                    <button onclick="Lesson.toggleSpeechRec('ipt-q5')" class="p-3 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl transition-colors">🎤</button>
                                </div>
                            </div>
                            <div class="bg-emerald-50 p-4 rounded-xl text-base md:text-lg text-emerald-900 font-bold">
                                💡 <strong>Trả lời:</strong> Đây là câu hỏi mở giúp học sinh tự do bộc lộ cảm xúc. Học sinh có thể trả lời: \"Em thích khổ thơ đầu nhất vì hình ảnh mênh mông biển lúa và cánh cò rập rờn mang lại cảm giác bình yên, đậm chất làng quê Việt Nam.\"
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 🔍 Phần 2: Luyện từ và câu (LTVC) -->
        <section class="w-full" id="ex-214-ltvc1">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 space-y-6">
                <h3 class="text-2xl md:text-3xl font-black text-blue-955 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">2</span>
                    LTVC Bài 1: Nghĩa gốc hay nghĩa chuyển?
                </h3>
                <p class="text-gray-600 font-bold text-lg">Xem xét nghĩa các từ in đậm trong các câu sau:</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Câu a -->
                    <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
                        <p class="font-bold text-xl text-gray-800">
                            a) \"<span class="text-blue-600 font-black">Tay</span> người như có phép tiên\"
                        </p>
                        <div class="space-y-2">
                            <label class="block font-bold text-gray-600 text-base md:text-lg">Từ \"Tay\" ở đây mang nghĩa:</label>
                            <select id="sel-214-tay" class="w-full p-3 bg-white border-2 border-gray-200 rounded-xl font-bold text-lg focus:border-blue-500 focus:outline-none">
                                <option value="">-- Chọn đáp án --</option>
                                <option value="goc">Nghĩa gốc (Chỉ một bộ phận cơ thể người)</option>
                                <option value="chuyen">Nghĩa chuyển (Chỉ sự khéo léo, tài hoa của con người)</option>
                            </select>
                        </div>
                    </div>

                    <!-- Câu b -->
                    <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
                        <p class="font-bold text-xl text-gray-800">
                            b) \"Trên tre lá cũng <span class="text-emerald-600 font-black">dệt</span> nghìn bài thơ\"
                        </p>
                        <div class="space-y-2">
                            <label class="block font-bold text-gray-600 text-base md:text-lg">Từ \"dệt\" ở đây mang nghĩa:</label>
                            <select id="sel-214-det" class="w-full p-3 bg-white border-2 border-gray-200 rounded-xl font-bold text-lg focus:border-emerald-500 focus:outline-none">
                                <option value="">-- Chọn đáp án --</option>
                                <option value="goc">Nghĩa gốc (Hành động đan các sợi vải/sợi giăng thành tấm)</option>
                                <option value="chuyen">Nghĩa chuyển (Hành động kết hợp khéo léo tạo nên tác phẩm nghệ thuật)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end items-center gap-4"><button onclick="window.resetEx1_214()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="window.checkEx1_214();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-ex1-214" class="hidden p-4 rounded-xl font-bold text-lg mt-4 animate-in fade-in duration-300"></div>
            </div>
        </section>

        <!-- 🔍 Phần 3: LTVC Bài 2 & 3: Tìm từ đồng nghĩa & Đặt câu -->
        <section class="w-full" id="ex-214-ltvc2">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 space-y-8">
                <div>
                    <h3 class="text-2xl md:text-3xl font-black text-blue-955 mb-2 flex items-center gap-3">
                        <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">3</span>
                        LTVC Bài 2: Tìm từ đồng nghĩa trong tiếng Việt
                    </h3>
                    <p class="text-gray-500 font-bold text-base md:text-lg">Nhập ít nhất 2 từ đồng nghĩa cho mỗi từ dưới đây (ngăn cách bằng dấu phẩy):</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Từ thân yêu -->
                    <div class="p-6 bg-orange-50/50 border border-orange-100 rounded-3xl space-y-3">
                        <label class="block font-black text-orange-900 text-lg md:text-xl">❤️ Tìm từ đồng nghĩa với từ \"thân yêu\":</label>
                        <input type="text" id="ipt-syn-thanyeu" class="w-full p-4 border-2 border-orange-200 rounded-xl font-bold text-lg focus:outline-none focus:border-orange-500 bg-white" placeholder="Ví dụ: yêu thương, thân thương, yêu mến...">
                    </div>

                    <!-- Từ vất vả -->
                    <div class="p-6 bg-amber-50/50 border border-amber-100 rounded-3xl space-y-3">
                        <label class="block font-black text-amber-900 text-lg md:text-xl">🌾 Tìm từ đồng nghĩa với từ \"vất vả\":</label>
                        <input type="text" id="ipt-syn-vatva" class="w-full p-4 border-2 border-amber-200 rounded-xl font-bold text-lg focus:outline-none focus:border-amber-500 bg-white" placeholder="Ví dụ: nhọc nhằn, lam lũ, gian khổ...">
                    </div>
                </div>

                <div class="border-t-2 border-dashed border-gray-150 pt-8 space-y-4">
                    <h3 class="text-xl md:text-2xl font-black text-blue-955">
                        ✏️ LTVC Bài 3: Đặt câu văn ý nghĩa
                    </h3>
                    <p class="text-gray-500 font-bold text-base md:text-lg">Đặt 1 câu văn có sử dụng ít nhất một trong các từ đồng nghĩa em vừa tìm được ở trên:</p>
                    <textarea id="ipt-sentence" rows="2" class="w-full p-4 rounded-2xl border-2 border-blue-150 focus:border-blue-500 outline-none font-bold text-lg transition-all" placeholder="Gõ câu văn của em tại đây (câu cần có nghĩa và đủ bộ phận chủ ngữ, vị ngữ)..."></textarea>
                </div>

                <div class="flex justify-end items-center gap-4"><button onclick="window.resetEx2_214()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="window.checkEx2_214();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-ex2-214" class="hidden p-4 rounded-xl font-bold text-lg mt-4 animate-in fade-in duration-300"></div>
            </div>
        </section>
    </div>
    `,
    "questions": [
        {
            "question": "Ai là tác giả của bài thơ \"Việt Nam quê hương ta\"?",
            "options": [
                "Nguyễn Đình Thi",
                "Đồng Xuân Lan",
                "Trần Đăng Khoa",
                "Huy Cận"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Hình ảnh thiên nhiên nào nổi bật ngay trong khổ thơ mở đầu của bài?",
            "options": [
                "Cánh đồng lúa mênh mông, cánh cò bay lả, đỉnh Trường Sơn trong sương mờ",
                "Bờ tre xanh rì rào, dòng sông chảy hiền hòa",
                "Dãy núi Fansipan cao vút, rừng cúc hoa vàng rực rỡ",
                "Vịnh Hạ Long nước xanh như ngọc với muôn trùng đảo đá"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Câu thơ \"Mặt người vất vả in sâu\" gợi tả điều gì về con người Việt Nam?",
            "options": [
                "Cuộc sống lao động vất vả, dầm sương dãi nắng của nhân dân ta qua bao thế hệ",
                "Con người có khuôn mặt rất to và rõ nét",
                "Những nếp nhăn do tuổi già của người già",
                "Mọi người đều vẽ tranh chân dung trên giấy"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Hình ảnh nào nói lên sự hòa đồng, giản dị và mộc mạc của người dân Việt Nam?",
            "options": [
                "Gái trai cũng một áo nâu nhuộm bùn",
                "Mắt đen cô gái long lanh",
                "Trên tre lá cũng dệt nghìn bài thơ",
                "Súng gươm vứt bỏ lại hiền như xưa"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cụm từ \"áo nâu nhuộm bùn\" biểu trưng cho điều gì?",
            "options": [
                "Tinh thần cần lao, gắn liền với ruộng đồng quê hương nghèo khó",
                "Quần áo của người dân bị bẩn do nghịch đất cát",
                "Một loại trang phục thời trang mới thời xưa",
                "Màu nhuộm làm từ bùn đất tự nhiên ở bờ sông"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tính cách nào của con người Việt Nam được khắc họa qua khổ thơ thứ 3 khi đối mặt với giặc ngoại xâm?",
            "options": [
                "Kiên cường, anh dũng vùng lên chiến đấu bảo vệ tổ quốc",
                "Nhút nhát trốn tránh chiến tranh gian khổ",
                "Hiền lành chịu đựng không phản kháng",
                "Chờ đợi các nước khác tới giúp đỡ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Ý nghĩa của câu thơ \"Súng gươm vứt bỏ lại hiền như xưa\" là gì?",
            "options": [
                "Khi đất nước hòa bình, con người trút bỏ vũ khí, quay lại lối sống hiền hậu, yêu chuộng hòa bình",
                "Quên mất cách sử dụng vũ khí chiến đấu",
                "Vứt bỏ hết các vũ khí cũ vì đã hỏng",
                "Mọi người trở nên nhút nhát sau chiến tranh"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khổ thơ thứ 4 giới thiệu vẻ đẹp gì đặc trưng của khí hậu và thiên nhiên đất nước?",
            "options": [
                "Đất nắng chan hòa, hoa thơm quả ngọt bốn mùa, trời xanh",
                "Khí hậu lạnh giá có tuyết rơi phủ trắng xóa",
                "Mùa đông kéo dài lạnh ngắt và ẩm ướt",
                "Bão lũ lụt lội quanh năm suốt tháng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Vẻ đẹp tâm hồn con người Việt Nam được ca ngợi ở khổ thơ 4 là gì?",
            "options": [
                "Lòng thủy chung, son sắt trong tình yêu thương",
                "Sự thông minh nhạy bén trong kinh doanh",
                "Khả năng học ngoại ngữ xuất sắc",
                "Sự khéo léo trong các trò chơi dân gian"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Hai câu thơ cuối \"Tay người như có phép tiên / Trên tre lá cũng dệt nghìn bài thơ\" ca ngợi điều gì?",
            "options": [
                "Đôi tay khéo léo, tài hoa, tinh thần sáng tạo nghệ thuật kỳ diệu từ các vật liệu giản dị nhất",
                "Phép thuật kỳ lạ của các thầy phù thủy thời xưa",
                "Việc người dân viết thơ trực tiếp lên lá tre để đem bán",
                "Cây tre Việt Nam tự động viết nên các bài thơ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ \"Tay\" trong \"Tay người như có phép tiên\" được dùng theo nghĩa nào?",
            "options": [
                "Nghĩa chuyển (Ẩn dụ/hoán dụ chỉ sự khéo léo, sáng tạo của con người)",
                "Nghĩa gốc (Bộ phận phía trên cơ thể từ vai đến ngón tay)",
                "Nghĩa đen hoàn toàn",
                "Không có nghĩa gì cụ thể"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ \"dệt\" trong \"Trên tre lá cũng dệt nghìn bài thơ\" được dùng theo nghĩa nào?",
            "options": [
                "Nghĩa chuyển (Sáng tạo nên những tác phẩm nghệ thuật thơ ca tuyệt vời)",
                "Nghĩa gốc (Đan các sợi dọc sợi ngang tạo thành tấm vải)",
                "Cả nghĩa gốc và nghĩa chuyển",
                "Nghĩa đen cơ bản"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ nào sau đây đồng nghĩa với từ \"thân yêu\"?",
            "options": [
                "yêu mến",
                "xa lạ",
                "ghét bỏ",
                "lạnh nhạt"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ nào sau đây đồng nghĩa với từ \"vất vả\"?",
            "options": [
                "nhọc nhằn",
                "nhàn nhã",
                "sung sướng",
                "thảnh thơi"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Bài thơ \"Việt Nam quê hương ta\" được trích từ tác phẩm dài nào của Nguyễn Đình Thi?",
            "options": [
                "Bài thơ Đất nước",
                "Tiểu thuyết Vỡ bờ",
                "Vở kịch Con nai",
                "Tập thơ Tia lửa"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// Đăng ký toàn cục
window.lesson214 = lesson214;

// Accordion helper
window.toggleAccordion214 = function(id) {
    const acc = document.getElementById(id);
    const icon = document.getElementById('icon-' + id);
    if (acc.classList.contains('hidden')) {
        acc.classList.remove('hidden');
        icon.innerText = '−';
    } else {
        acc.classList.add('hidden');
        icon.innerText = '+';
    }
};

// Kiểm tra LTVC Bài 1
window.checkEx1_214 = function() {
    const tay = document.getElementById('sel-214-tay').value;
    const det = document.getElementById('sel-214-det').value;
    const fb = document.getElementById('fb-ex1-214');
    fb.classList.remove('hidden');

    if (!tay || !det) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-850 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em hãy chọn câu trả lời đầy đủ cho cả hai từ in đậm nhé!";
        return;
    }

    if (tay === 'chuyen' && det === 'chuyen') {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-900 border border-green-200 mt-4";
        fb.innerHTML = "🎉 Tuyệt vời! Cả hai từ \"tay\" và \"dệt\" trong ngữ cảnh bài thơ đều mang nghĩa chuyển. Từ \"tay\" chỉ đôi bàn tay tài hoa sáng tạo, còn \"dệt\" chỉ sự chắt chiu, lắp ghép tài tình làm nên cái đẹp cho cuộc sống.";
        
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Chính xác! Cả hai từ đều dùng theo nghĩa chuyển.", "success");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
        
        // Lưu điểm
        if (typeof window.submitMathLesson === 'function') {
            window.submitMathLesson("LTVC Tiết 214-215: Nghĩa của từ", 100, "ex-214-ltvc1", 1, 1, 1);
        }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-850 border border-red-200 mt-4";
        fb.innerHTML = "❌ Chưa chính xác rồi. Em hãy đọc kỹ lại nghĩa đen thực tế và cách dùng từ của tác giả trong câu thơ để chọn lại nhé!";
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Chưa đúng rồi, hãy thử lại!", "error");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

window.resetEx1_214 = function() {
    document.getElementById('sel-214-tay').value = "";
    document.getElementById('sel-214-det').value = "";
    const fb = document.getElementById('fb-ex1-214');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};

// Kiểm tra LTVC Bài 2 & 3
window.checkEx2_214 = function() {
    const thanyeuStr = document.getElementById('ipt-syn-thanyeu').value.trim().toLowerCase();
    const vatvaStr = document.getElementById('ipt-syn-vatva').value.trim().toLowerCase();
    const sentence = document.getElementById('ipt-sentence').value.trim();
    const fb = document.getElementById('fb-ex2-214');
    fb.classList.remove('hidden');

    if (!thanyeuStr || !vatvaStr || !sentence) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-850 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em vui lòng điền đầy đủ từ đồng nghĩa và viết câu văn bên dưới nhé!";
        return;
    }

    // Danh sách các từ đồng nghĩa hợp lệ
    const validThanyeu = ["yêu thương", "thương yêu", "thân thương", "yêu mến", "yêu quý", "quý mến", "mến yêu", "thân thiết"];
    const validVatva = ["nhọc nhằn", "lam lũ", "gian khổ", "khó khăn", "vất vả", "gian lao", "khốn khó", "nhọc nhằn", "gian truân", "dãi dầu"];

    // Phân tích input đồng nghĩa
    const typedThanyeu = thanyeuStr.split(/[\s,;+]+/).filter(w => w.length > 2);
    const typedVatva = vatvaStr.split(/[\s,;+]+/).filter(w => w.length > 2);

    let matchThanyeu = typedThanyeu.filter(w => validThanyeu.some(v => v.includes(w) || w.includes(v)));
    let matchVatva = typedVatva.filter(w => validVatva.some(v => v.includes(w) || w.includes(v)));

    if (matchThanyeu.length < 1 || matchVatva.length < 1) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-850 border border-red-200 mt-4";
        fb.innerHTML = "❌ Các từ đồng nghĩa em tìm được chưa khớp. Ví dụ đồng nghĩa với 'thân yêu' có 'thân thương, yêu mến'; với 'vất vả' có 'lam lũ, nhọc nhằn'. Thử lại nhé!";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
        return;
    }

    // Kiểm tra câu văn
    if (sentence.length < 10) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-850 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Câu văn của em hơi ngắn. Em hãy đặt một câu văn hoàn chỉnh và ý nghĩa hơn nhé!";
        return;
    }

    // Kiểm tra xem câu có chứa ít nhất một từ đồng nghĩa hợp lệ nào không
    const allSynonyms = [...validThanyeu, ...validVatva];
    const sentenceLower = sentence.toLowerCase();
    const hasWord = allSynonyms.some(word => sentenceLower.includes(word));

    if (!hasWord) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-850 border border-red-200 mt-4";
        fb.innerHTML = "❌ Câu văn của em chưa sử dụng từ đồng nghĩa nào vừa tìm được ở bài tập 2. Hãy thêm từ thích hợp vào câu nhé!";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
        return;
    }

    // Nếu mọi thứ đều chính xác
    fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-900 border border-green-200 mt-4";
    fb.innerHTML = `🎉 <strong>Thầy E chấm câu:</strong> Câu của em viết rất tốt và đúng ngữ pháp! <br>✨ <em>Từ đồng nghĩa em dùng:</em> ${matchThanyeu.join(', ')} và ${matchVatva.join(', ')}. <br>✨ <em>Câu văn:</em> "${sentence}"`;

    if (window.UI && typeof window.UI.showToast === 'function') {
        window.UI.showToast("Tuyệt vời! Hoàn thành bài tập từ đồng nghĩa và đặt câu.", "success");
    }
    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }

    // Lưu điểm
    if (typeof window.submitMathLesson === 'function') {
        window.submitMathLesson("LTVC Tiết 214-215: Từ đồng nghĩa & Đặt câu", 100, "ex-214-ltvc2", 1, 1, 1);
    }
};

window.resetEx2_214 = function() {
    document.getElementById('ipt-syn-thanyeu').value = "";
    document.getElementById('ipt-syn-vatva').value = "";
    document.getElementById('ipt-sentence').value = "";
    const fb = document.getElementById('fb-ex2-214');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};
