export const lesson239 = {
    "topic": "Tiếng Việt 5",
    "week": "35",
    "period": "239",
    "title": "ÔN TẬP VÀ ĐÁNH GIÁ CUỐI HKII (TIẾT 1-TR.134)",
    "desc": "Bài học hệ thống hóa kiến thức Tiếng Việt lớp 5 học kỳ 2: ôn tập các chủ điểm đã học, tóm tắt truyện đọc tiêu biểu, thực hành từ đồng nghĩa, biện pháp liên kết câu và viết câu tả cảnh.",
    "subject": "Tiếng Việt",
    "theme": "Thế giới của chúng ta",
    "audio": "",
    "content": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-4xl mx-auto pb-12">
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
                    Nhận diện và ôn tập lại toàn bộ hệ thống chủ điểm Tiếng Việt 5 (Tập 1 và Tập 2).
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Tóm tắt được nội dung câu chuyện tiêu biểu và rút ra được bài học tâm đắc từ tác phẩm.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Sử dụng đúng từ đồng nghĩa trong ngữ cảnh tục ngữ, phân biệt nghĩa của các từ gần nghĩa và xác định phép liên kết câu thành thạo.
                </li>
            </ul>
        </div>

        <!-- 🌸 Hoạt động 1: Tranh vẽ và Chủ điểm -->
        <!-- Bài 1 -->
        <section class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 space-y-6">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl">1</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Chủ điểm và Ý nghĩa bức tranh</h3>
            </div>
            
            <div class="p-6 bg-blue-50/40 rounded-3xl space-y-4">
                <p class="font-black text-blue-950 text-xl leading-relaxed">a. Kể tên các chủ điểm đã học trong chương trình Tiếng Việt 5:</p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <span class="p-3 bg-white border border-blue-200 rounded-xl font-bold text-center text-blue-600 text-base">Mái ấm bình yên</span>
                    <span class="p-3 bg-white border border-blue-200 rounded-xl font-bold text-center text-blue-600 text-base">Cánh chim hòa bình</span>
                    <span class="p-3 bg-white border border-blue-200 rounded-xl font-bold text-center text-blue-600 text-base">Con người với thiên nhiên</span>
                    <span class="p-3 bg-white border border-blue-200 rounded-xl font-bold text-center text-blue-600 text-base">Thế giới tuổi thơ</span>
                    <span class="p-3 bg-white border-2 border-emerald-300 bg-emerald-50 rounded-xl font-black text-center text-emerald-900 text-base shadow-sm">Nghệ thuật muôn màu</span>
                    <span class="p-3 bg-white border-2 border-emerald-300 bg-emerald-50 rounded-xl font-black text-center text-emerald-900 text-base shadow-sm">Trên con đường học tập</span>
                    <span class="p-3 bg-white border-2 border-emerald-300 bg-emerald-50 rounded-xl font-black text-center text-emerald-900 text-base shadow-sm">Tiếp bước cha ông</span>
                    <span class="p-3 bg-white border-2 border-emerald-300 bg-emerald-50 rounded-xl font-black text-center text-emerald-900 text-base shadow-sm">Thế giới của chúng ta</span>
                </div>
                <p class="text-sm font-bold text-gray-500 italic">(*) Các thẻ xanh là 4 chủ điểm trọng tâm xuất hiện trong bức tranh vẽ ngụ ngôn về hành trình học tập xanh mát của học sinh.</p>
            </div>

            <div class="space-y-4">
                <p class="font-black text-gray-800 text-lg leading-relaxed">b. Theo em, bức tranh minh họa muốn nói lên thông điệp gì?</p>
                <div class="grid grid-cols-1 gap-3">
                    <button onclick="window.selectBứcTranh239('A')" id="btn-pic-A" class="p-4 bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-2xl text-left font-bold text-gray-700 transition-all">
                        <strong>A.</strong> Con đường học tập rộng mở đang chờ đón em bước tiếp.
                    </button>
                    <button onclick="window.selectBứcTranh239('B')" id="btn-pic-B" class="p-4 bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-2xl text-left font-bold text-gray-700 transition-all">
                        <strong>B.</strong> Kiến thức là vô tận, hãy khám phá để thành công.
                    </button>
                    <button onclick="window.selectBứcTranh239('C')" id="btn-pic-C" class="p-4 bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-2xl text-left font-bold text-gray-700 transition-all">
                        <strong>C.</strong> Học tập là một hành trình để đi đến tương lai tốt đẹp.
                    </button>
                </div>
                <div id="fb-pic-239" class="hidden p-4 rounded-xl font-bold text-lg mt-2"></div>
            </div>
        </section>

        <!-- 💡 Ý chính bài học -->
        <div class="bg-emerald-50/70 p-6 rounded-3xl border-l-8 border-emerald-500 shadow-md relative overflow-hidden">
            <div class="absolute -right-10 -top-10 w-24 h-24 bg-emerald-100/40 rounded-full blur-xl"></div>
            <h5 class="text-xl md:text-2xl font-black text-emerald-900 mb-2 flex items-center gap-2">
                <span>💡</span> Ý chính bài học
            </h5>
            <p class="text-emerald-800 text-lg md:text-xl font-bold leading-relaxed">
                Hệ thống hóa kiến thức giúp tổng kết chặng đường học tập bền bỉ trong năm học, ôn tập lại kỹ năng đọc hiểu câu chuyện văn học, chọn từ chính xác và các phép liên kết để chuẩn bị nền tảng Tiếng Việt vững chắc.
            </p>
        </div>
    </div>
    `,
    "practice": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-4xl mx-auto pb-12">
        
        <!-- 📖 Hoạt động 2: Tóm tắt truyện đọc -->
        <!-- Bài 2 -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-blue-100 space-y-6">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl">2</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Tóm tắt câu chuyện và Cảm nhận tâm đắc</h3>
            </div>
            <p class="text-gray-600 font-bold text-lg">Em hãy chọn một câu chuyện tâm đắc và viết vài dòng tóm tắt cùng lý do yêu thích câu chuyện đó:</p>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-3" id="story-selector">
                <button onclick="window.selectStory239('tuetinh')" id="btn-st-tuetinh" class="p-3 bg-gray-50 border-2 border-gray-200 rounded-xl font-black text-sm text-gray-700 hover:bg-blue-50 transition-all">Danh y Tuệ Tĩnh</button>
                <button onclick="window.selectStory239('chuvanan')" id="btn-st-chuvanan" class="p-3 bg-gray-50 border-2 border-gray-200 rounded-xl font-black text-sm text-gray-700 hover:bg-blue-50 transition-all">Người thầy của muôn đời</button>
                <button onclick="window.selectStory239('hacgiay')" id="btn-st-hacgiay" class="p-3 bg-gray-50 border-2 border-gray-200 rounded-xl font-black text-sm text-gray-700 hover:bg-blue-50 transition-all">Những con hạc giấy</button>
                <button onclick="window.selectStory239('mat')" id="btn-st-mat" class="p-3 bg-gray-50 border-2 border-gray-200 rounded-xl font-black text-sm text-gray-700 hover:bg-blue-50 transition-all">Một người hùng thầm lặng</button>
            </div>

            <div class="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-4 hidden" id="story-detail-239">
                <h5 class="text-xl font-black text-blue-950" id="story-title-display">Cuốn sách tâm đắc</h5>
                
                <div class="space-y-3">
                    <div>
                        <span class="text-sm font-bold text-blue-600">📝 Tóm tắt nội dung câu chuyện (khoảng 2-3 câu):</span>
                        <textarea id="txt-st-summary" rows="3" class="w-full p-4 border border-gray-300 rounded-xl font-medium focus:outline-none focus:border-blue-500 text-base" placeholder="Ghi tóm tắt..."></textarea>
                    </div>
                    <div>
                        <span class="text-sm font-bold text-emerald-800">💡 Điều em tâm đắc nhất và lý do vì sao:</span>
                        <textarea id="txt-st-lesson" rows="2" class="w-full p-4 border border-gray-300 rounded-xl font-medium focus:outline-none focus:border-blue-500 text-base" placeholder="Em tâm đắc nhất hành động/chi tiết... Vì nó dạy em bài học..."></textarea>
                    </div>
                </div>

                <div class="flex justify-end items-center gap-4"><button onclick="window.submitStoryReview239();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-story-239" class="hidden p-4 rounded-xl font-bold text-lg"></div>
            </div>
        </section>

        <!-- 🌸 Hoạt động 3: Chọn từ điền bông hoa -->
        <!-- Bài 3 -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-emerald-100 space-y-6" id="ex-239-fill">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-xl">3</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Điền từ thích hợp thay cho bông hoa</h3>
            </div>
            <p class="text-gray-600 font-bold text-lg">Lựa chọn một trong ba từ <strong>nhiều, đông, đầy</strong> điền vào chỗ trống thích hợp:</p>

            <div class="space-y-4">
                <!-- Câu a -->
                <div class="p-4 bg-emerald-50/30 rounded-2xl border border-emerald-100 flex items-center justify-between gap-4">
                    <span class="font-bold text-emerald-950 text-base md:text-lg">a. ... như kiến.</span>
                    <select id="sel-fill-a" class="p-2 border border-emerald-350 rounded-xl font-bold bg-white focus:outline-none text-base">
                        <option value="">-- Chọn từ --</option>
                        <option value="nhiều">nhiều</option>
                        <option value="đông">đông</option>
                        <option value="đầy">đầy</option>
                    </select>
                </div>

                <!-- Câu b -->
                <div class="p-4 bg-emerald-50/30 rounded-2xl border border-emerald-100 flex items-center justify-between gap-4">
                    <span class="font-bold text-emerald-950 text-base md:text-lg">b. Năng mưa thì giếng năng ... .</span>
                    <select id="sel-fill-b" class="p-2 border border-emerald-350 rounded-xl font-bold bg-white focus:outline-none text-base">
                        <option value="">-- Chọn từ --</option>
                        <option value="nhiều">nhiều</option>
                        <option value="đông">đông</option>
                        <option value="đầy">đầy</option>
                    </select>
                </div>

                <!-- Câu c -->
                <div class="p-4 bg-emerald-50/30 rounded-2xl border border-emerald-100 flex items-center justify-between gap-4">
                    <span class="font-bold text-emerald-950 text-base md:text-lg">c. ... sao thì nắng, vắng sao thì mưa.</span>
                    <select id="sel-fill-c" class="p-2 border border-emerald-350 rounded-xl font-bold bg-white focus:outline-none text-base">
                        <option value="">-- Chọn từ --</option>
                        <option value="nhiều">nhiều</option>
                        <option value="đông">đông</option>
                        <option value="đầy">đầy</option>
                    </select>
                </div>

                <!-- Câu d -->
                <div class="p-4 bg-emerald-50/30 rounded-2xl border border-emerald-100 flex flex-col gap-2">
                    <div class="font-bold text-emerald-950 text-base md:text-lg">
                        d. Con ơi nhớ lấy câu này <br>
                        Sông sâu chớ lội, đò ... chớ qua.
                    </div>
                    <select id="sel-fill-d" class="w-full md:w-48 p-2 border border-emerald-350 rounded-xl font-bold bg-white focus:outline-none text-base self-end">
                        <option value="">-- Chọn từ --</option>
                        <option value="nhiều">nhiều</option>
                        <option value="đông">đông</option>
                        <option value="đầy">đầy</option>
                    </select>
                </div>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="window.resetFill239()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="window.checkFill239();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-fill-239" class="hidden p-4 rounded-xl font-bold text-lg mt-4 animate-in fade-in"></div>
        </section>

        <!-- 🌸 Hoạt động 4: Phân biệt từ gần nghĩa -->
        <!-- Bài 4 -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-sky-100 space-y-6">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center font-black text-xl">4</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Đặt câu phân biệt từ: ít, thưa, vắng</h3>
            </div>
            <p class="text-gray-600 font-bold text-lg">Đặt câu tương ứng để làm nổi bật sự khác nhau về nét nghĩa của 3 từ sau:</p>

            <div class="space-y-4">
                <div class="p-4 bg-sky-50/30 rounded-2xl border border-sky-100 space-y-2">
                    <span class="font-bold text-sky-950 text-base md:text-lg">a. Từ "ít" (chỉ số lượng nhỏ, không nhiều):</span>
                    <input type="text" id="txt-phrase-it" class="w-full p-3 border border-sky-300 rounded-xl font-medium focus:outline-none focus:border-sky-500 text-base" placeholder="Đặt câu với từ 'ít'...">
                </div>

                <div class="p-4 bg-sky-50/30 rounded-2xl border border-sky-100 space-y-2">
                    <span class="font-bold text-sky-950 text-base md:text-lg">b. Từ "thưa" (chỉ khoảng cách không dày, thưa thớt):</span>
                    <input type="text" id="txt-phrase-thua" class="w-full p-3 border border-sky-300 rounded-xl font-medium focus:outline-none focus:border-sky-500 text-base" placeholder="Đặt câu với từ 'thưa'...">
                </div>

                <div class="p-4 bg-sky-50/30 rounded-2xl border border-sky-100 space-y-2">
                    <span class="font-bold text-sky-950 text-base md:text-lg">c. Từ "vắng" (chỉ tình trạng không có người, vắng vẻ):</span>
                    <input type="text" id="txt-phrase-vang" class="w-full p-3 border border-sky-300 rounded-xl font-medium focus:outline-none focus:border-sky-500 text-base" placeholder="Đặt câu với từ 'vắng'...">
                </div>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="window.submitPhrase239();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-phrase-239" class="hidden p-4 rounded-xl font-bold text-lg"></div>
        </section>

        <!-- 🌸 Hoạt động 5: Biện pháp liên kết câu trong đoạn văn -->
        <!-- Bài 5 -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-orange-100 space-y-6" id="ex-239-link">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl">5</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Biện pháp liên kết câu trong đoạn văn mẫu</h3>
            </div>
            <p class="text-gray-600 font-bold text-lg">Nhận diện các biện pháp liên kết câu chính được sử dụng trong hai đoạn văn sau:</p>

            <div class="space-y-6">
                <!-- Đoạn a -->
                <div class="p-5 bg-orange-50/20 border border-orange-100 rounded-3xl space-y-4">
                    <p class="italic text-gray-700 leading-relaxed text-base md:text-lg">
                        "a. Cạnh nơi ở của loài nai, bên những dải đất ẩm ướt ven suối là nơi ở của <span class="font-bold text-orange-950">loài hươu</span>. Ban ngày, <span class="font-bold text-orange-950">chúng</span> ẩn náu trong những lùm cây hoặc những bờ lau sậy um tùm... <span class="font-bold text-orange-950">Thế nhưng</span> chúng lại là những con vật dũng cảm nhất..."
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="flex items-center justify-between gap-4 p-3 bg-white border border-orange-200 rounded-xl">
                            <span class="font-bold text-orange-900 text-sm">Từ 'chúng' thay thế 'loài hươu':</span>
                            <select id="sel-link-a1" class="p-2 border border-orange-350 rounded-xl font-bold bg-white text-sm focus:outline-none">
                                <option value="">-- Chọn --</option>
                                <option value="the">Phép thế</option>
                                <option value="noi">Phép nối</option>
                                <option value="lap">Phép lặp</option>
                            </select>
                        </div>
                        <div class="flex items-center justify-between gap-4 p-3 bg-white border border-orange-200 rounded-xl">
                            <span class="font-bold text-orange-900 text-sm">Từ nối 'Thế nhưng':</span>
                            <select id="sel-link-a2" class="p-2 border border-orange-350 rounded-xl font-bold bg-white text-sm focus:outline-none">
                                <option value="">-- Chọn --</option>
                                <option value="the">Phép thế</option>
                                <option value="noi">Phép nối</option>
                                <option value="lap">Phép lặp</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Đoạn b -->
                <div class="p-5 bg-orange-50/20 border border-orange-100 rounded-3xl space-y-4">
                    <p class="italic text-gray-700 leading-relaxed text-base md:text-lg">
                        "b. Mỗi mùa của <span class="font-bold text-orange-950">Hạ Long</span> lại có những nét riêng biệt... Mùa xuân của <span class="font-bold text-orange-950">Hạ Long</span> là mùa sương... Mùa hè của <span class="font-bold text-orange-950">Hạ Long</span> là mùa gió nồm nam... <span class="font-bold text-orange-950">Song</span> quyến rũ hơn cả vẫn là..."
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="flex items-center justify-between gap-4 p-3 bg-white border border-orange-200 rounded-xl">
                            <span class="font-bold text-orange-900 text-sm">Lặp từ 'Hạ Long':</span>
                            <select id="sel-link-b1" class="p-2 border border-orange-350 rounded-xl font-bold bg-white text-sm focus:outline-none">
                                <option value="">-- Chọn --</option>
                                <option value="the">Phép thế</option>
                                <option value="noi">Phép nối</option>
                                <option value="lap">Phép lặp</option>
                            </select>
                        </div>
                        <div class="flex items-center justify-between gap-4 p-3 bg-white border border-orange-200 rounded-xl">
                            <span class="font-bold text-orange-900 text-sm">Từ nối 'Song' ở đầu câu:</span>
                            <select id="sel-link-b2" class="p-2 border border-orange-350 rounded-xl font-bold bg-white text-sm focus:outline-none">
                                <option value="">-- Chọn --</option>
                                <option value="the">Phép thế</option>
                                <option value="noi">Phép nối</option>
                                <option value="lap">Phép lặp</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="window.resetLink239()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="window.checkLink239();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-link-239" class="hidden p-4 rounded-xl font-bold text-lg mt-4 animate-in fade-in"></div>
        </section>

        <!-- 🌸 Hoạt động 6: Viết đoạn văn tả cảnh và tự nhận xét liên kết câu -->
        <!-- Bài 6 -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-blue-100 space-y-6">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl">6</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Thực hành viết đoạn văn tả cảnh ngắn</h3>
            </div>
            <p class="text-gray-600 font-bold text-lg">Viết 2 – 3 câu tả cảnh nơi em ở vào một ngày mưa hoặc một ngày nắng, cho biết biện pháp liên kết câu em đã sử dụng trong đoạn văn:</p>

            <div class="bg-blue-50/30 p-6 rounded-3xl space-y-4">
                <div>
                    <span class="text-sm font-bold text-blue-600">✍️ Đoạn văn tả cảnh ngắn (2-3 câu):</span>
                    <textarea id="txt-weather-scene" rows="3" class="w-full p-4 border border-blue-200 rounded-xl font-medium focus:outline-none focus:border-blue-500 text-base serif-font" placeholder="Ví dụ: Buổi sáng mùa hè quê em tràn ngập ánh nắng ấm áp. Những tia nắng vàng dịu luồn lách qua từng kẽ lá xanh mướt. Nhờ đó, cả khu vườn trông như sáng bừng lên lung linh..."></textarea>
                </div>
                <div>
                    <span class="text-sm font-bold text-emerald-900">🔗 Biện pháp liên kết câu em đã sử dụng:</span>
                    <input type="text" id="txt-weather-link" class="w-full p-3 border border-emerald-200 rounded-xl font-bold focus:outline-none focus:border-emerald-500 text-base" placeholder="Ví dụ: Phép lặp từ 'nắng', phép nối 'Nhờ đó'...">
                </div>

                <div class="flex justify-end items-center gap-4"><button onclick="window.submitWeatherScene239();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-weather-239" class="hidden p-4 rounded-xl font-bold text-lg"></div>
            </div>
        </section>
    </div>
    `,
    "quizPool": [
        {
            "question": "Chủ điểm nào sau đây nằm trong chương trình học kì 2 Tiếng Việt lớp 5?",
            "options": [
                "Cánh chim hòa bình",
                "Mái ấm bình yên",
                "Thế giới của chúng ta",
                "Mẹ thiên nhiên nhân hậu"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Nhận định nào nêu đúng ý nghĩa biểu đạt của bức tranh minh họa ôn tập ở trang 148?",
            "options": [
                "Kiến thức là bất biến, không cần tìm hiểu thêm",
                "Con đường học tập rộng mở dẫn lối đến các chủ điểm kiến thức và một tương lai tươi đẹp hơn",
                "Học sinh chỉ cần vui chơi trong rừng cây xanh mát",
                "Tranh vẽ cảnh học sinh đi lạc trong rừng sâu hoang dã"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Điền từ thích hợp vào thành ngữ: '... như kiến.'",
            "options": [
                "nhiều",
                "đông",
                "đầy",
                "đọng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Thành ngữ 'Đông như kiến' thường được dùng để chỉ tình huống nào?",
            "options": [
                "Khu vực có rất nhiều kiến bò",
                "Nơi tụ họp đông đúc, tấp nập và chật ních người",
                "Những người thích ăn đồ ngọt",
                "Sự yên tĩnh, vắng vẻ tuyệt đối ở nông thôn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Điền từ vào câu tục ngữ: 'Năng mưa thì giếng năng ... .'",
            "options": [
                "nhiều",
                "đông",
                "đầy",
                "cạn"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Câu tục ngữ 'Năng mưa thì giếng năng đầy' có ý nghĩa sâu sắc nào?",
            "options": [
                "Giếng nước luôn đầy ắp nước ngọt mỗi khi trời mưa to",
                "Chăm chỉ làm lụng tích lũy nhỏ thì ngày sau sẽ gặt hái kết quả lớn, giàu sang",
                "Trời mưa nhiều sẽ gây lũ lụt ngập úng giếng làng",
                "Không nên xây giếng ở những vùng ít mưa"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Điền từ thích hợp vào tục ngữ: '... sao thì nắng, vắng sao thì mưa.'",
            "options": [
                "Nhiều",
                "Đông",
                "Đầy",
                "Đẹp"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tục ngữ 'Nhiều sao thì nắng, vắng sao thì mưa' đúc rút kinh nghiệm gì?",
            "options": [
                "Sự xuất hiện của các chòm sao trên bầu trời ảnh hưởng trực tiếp đến vũ trụ",
                "Kinh nghiệm trông sao trên trời ban đêm để dự đoán thời tiết nắng hay mưa ngày hôm sau",
                "Sách giáo khoa khuyên chúng ta nên đi xem sao ban đêm",
                "Trời mưa thì sao biến mất hoàn toàn vĩnh viễn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Điền từ vào câu thơ: 'Sông sâu chớ lội, đò ... chớ qua.'",
            "options": [
                "nhiều",
                "đông",
                "đầy",
                "nổi"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Câu thơ 'Sông sâu chớ lội, đò đầy chớ qua' khuyên chúng ta bài học an toàn gì?",
            "options": [
                "Không nên đi đò sang sông vào buổi tối",
                "Luôn giữ tinh thần cẩn thận phòng ngừa tai nạn, chớ lội sông sâu hay chen chúc lên đò chở quá tải",
                "Chỉ nên đi đò khi không có ai đi cùng",
                "Đò đầy khách là đò chạy nhanh nhất, an toàn nhất"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đặt câu phân biệt từ 'ít' và 'thưa', từ 'thưa' dùng để diễn tả điều gì?",
            "options": [
                "Khoảng cách thưa thớt, không dày đặc của vật thể",
                "Số lượng cực kỳ nhỏ bé, không đáng kể",
                "Nơi không có bóng dáng bất cứ một người nào",
                "Hành động thưa gửi, lễ phép với người lớn"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong câu 5a, từ 'chúng' thay thế cho 'loài hươu' ở câu trước là biện pháp liên kết nào?",
            "options": [
                "Phép nối",
                "Phép thế",
                "Phép lặp",
                "Phép liên tưởng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong câu 5b, từ 'Song' ở đầu câu thực hiện biện pháp liên kết gì?",
            "options": [
                "Phép lặp từ ngữ",
                "Phép thế từ ngữ",
                "Phép nối",
                "Phép đồng nghĩa"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Việc lặp đi lặp lại từ 'Hạ Long' trong đoạn văn 5b có tác dụng gì?",
            "options": [
                "Làm bài viết dài hơn mà không cần viết thêm ý",
                "Liên kết chặt chẽ các câu văn và nhấn mạnh đối tượng chính đang miêu tả là Hạ Long",
                "Làm người đọc cảm thấy nhàm chán và lặp ý nhiều",
                "Đoạn văn viết sai ngữ pháp do lặp từ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Sự khác biệt rõ nét nhất giữa từ 'vắng' và từ 'ít' là gì?",
            "options": [
                "Từ 'ít' chỉ số lượng không nhiều, từ 'vắng' chỉ không gian trống trải không có người/ít người",
                "Từ 'vắng' chỉ đồ dùng nhỏ, từ 'ít' chỉ người đi xa",
                "Hai từ hoàn toàn đồng nghĩa 100% trong mọi văn cảnh",
                "Từ 'ít' dùng cho ngày mưa, từ 'vắng' dùng cho ngày nắng"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// Đăng ký tương tác
window.selectBứcTranh239 = function(choice) {
    const fb = document.getElementById('fb-pic-239');
    const btnA = document.getElementById('btn-pic-A');
    const btnB = document.getElementById('btn-pic-B');
    const btnC = document.getElementById('btn-pic-C');
    fb.classList.remove('hidden');

    btnA.className = "p-4 bg-gray-50 border border-gray-200 rounded-2xl text-left font-bold text-gray-500 transition-all";
    btnB.className = "p-4 bg-gray-50 border border-gray-200 rounded-2xl text-left font-bold text-gray-500 transition-all";
    btnC.className = "p-4 bg-gray-50 border border-gray-200 rounded-2xl text-left font-bold text-gray-500 transition-all";

    if (choice === 'A') {
        btnA.className = "p-4 bg-blue-100 border-2 border-blue-300 rounded-2xl text-left font-bold text-blue-950 transition-all";
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-2";
        fb.innerHTML = "🌟 Rất hay! Con đường xanh ngát mở rộng thể hiện hành trình học tập đầy hy vọng, hướng học sinh đi đến tương lai rộng mở.";
    } else if (choice === 'B') {
        btnB.className = "p-4 bg-blue-100 border-2 border-blue-300 rounded-2xl text-left font-bold text-blue-950 transition-all";
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-2";
        fb.innerHTML = "🌟 Ý tưởng này vô cùng sâu sắc! Bức tranh ngụ ý các em nhỏ đang cùng nhau dạo bước giữa cánh rừng tri thức bao la rộng lớn để khám phá.";
    } else {
        btnC.className = "p-4 bg-blue-100 border-2 border-blue-300 rounded-2xl text-left font-bold text-blue-950 transition-all";
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-2";
        fb.innerHTML = "🌟 Quá chính xác! Cả 3 phương án đều là những cách diễn đạt tuyệt vời về thông điệp bức tranh. Học tập chính là hành trình hạnh phúc hướng tới tương lai.";
    }
    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
};

window.selectStory239 = function(story) {
    document.getElementById('story-detail-239').classList.remove('hidden');
    const displayT = document.getElementById('story-title-display');
    const summaryT = document.getElementById('txt-st-summary');
    const lessonT = document.getElementById('txt-st-lesson');
    
    // reset selectors styling
    const ids = ['tuetinh', 'chuvanan', 'hacgiay', 'mat'];
    ids.forEach(id => {
        document.getElementById('btn-st-' + id).className = "p-3 bg-gray-50 border-2 border-gray-200 rounded-xl font-black text-sm text-gray-700 hover:bg-blue-50 transition-all";
    });

    document.getElementById('btn-st-' + story).className = "p-3 bg-blue-100 border-2 border-blue-400 rounded-xl font-black text-sm text-blue-600 transition-all";

    if (story === 'tuetinh') {
        displayT.innerHTML = "📖 Tác phẩm: Danh y Tuệ Tĩnh";
        summaryT.value = "Danh y Tuệ Tĩnh hết lòng chăm sóc người bệnh, không phân biệt giàu nghèo. Cụ đã ưu tiên chữa trị cho một cậu bé nhà nghèo bị gãy đùi trước rồi mới vào chữa cho nhà quý tộc chỉ bị bệnh nhẹ.";
        lessonT.value = "Em tâm đắc nhất tấm lòng nhân hậu, y đức cao cả 'Lương y như từ mẫu' của ông. Ông đã đặt tính mạng, nỗi đau của bệnh nhân lên trên hết.";
    } else if (story === 'chuvanan') {
        displayT.innerHTML = "📖 Tác phẩm: Người thầy của muôn đời";
        summaryT.value = "Thầy giáo Chu Văn An mở trường dạy học và dạy dỗ nhiều môn sinh đỗ đạt làm quan lớn. Nhân ngày mừng thọ mình, thầy đã dẫn các học trò lớn nhỏ cùng đi vái tạ, tạ ơn cụ đồ dạy vỡ lòng thuở nhỏ của thầy.";
        lessonT.value = "Em tâm đắc nhất bài học về sự 'Tôn sư trọng đạo', lòng biết ơn thầy cô giáo. Thầy giáo Chu dù nổi tiếng vẫn giữ trọn đạo nghĩa vái chào thầy cũ kính cẩn.";
    } else if (story === 'hacgiay') {
        displayT.innerHTML = "📖 Tác phẩm: Những con hạc giấy";
        summaryT.value = "Cô bé Xa-xa-cô không may mắc bệnh ung thư máu do nhiễm phóng xạ nguyên tử. Cô tin vào truyền thuyết gấp đủ một nghìn con hạc giấy sẽ khỏi bệnh. Trẻ em Nhật Bản và thế giới đã cùng gấp hạc và quyên góp xây dựng tượng đài hòa bình.";
        lessonT.value = "Em tâm đắc nhất khát vọng sống mãnh liệt của Xa-xa-cô và thông điệp hòa bình, lên án chiến tranh hạt nhân của trẻ em toàn thế giới.";
    } else {
        displayT.innerHTML = "📖 Tác phẩm: Một người hùng thầm lặng";
        summaryT.value = "Kể về bác sĩ Lý Lập Văn hoặc người chiến sĩ thầm lặng cống hiến cứu người, phòng chống dịch bệnh nguy hiểm mà không quản hiểm nguy, gian khổ.";
        lessonT.value = "Em tâm đắc nhất sự hy sinh thầm lặng của những y bác sĩ nơi tuyến đầu vì sức khỏe và sự bình yên của cộng đồng.";
    }
};

window.submitStoryReview239 = function() {
    const sum = document.getElementById('txt-st-summary').value.trim();
    const les = document.getElementById('txt-st-lesson').value.trim();
    const fb = document.getElementById('fb-story-239');
    fb.classList.remove('hidden');

    if (sum.length < 10 || les.length < 10) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-850 border border-orange-200 mt-2";
        fb.innerHTML = "⚠️ Em hãy hoàn thành chi tiết phần tóm tắt và ghi cảm nghĩ tâm đắc để lưu lại nhé!";
        return;
    }

    fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-2";
    fb.innerHTML = "🌟 Rất tuyệt vời! Cảm nghĩ và tóm tắt truyện của em rất rõ ràng, sâu sắc. Việc ôn tập cốt truyện sẽ giúp em nhớ lâu hơn các bài học đạo đức.";
    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    if (typeof window.submitMathLesson === 'function') {
        window.submitMathLesson("Tiếng Việt Tiết 239: Ôn tập cốt truyện", 100, "ex-239-story", 1, 1, 1);
    }
};

// Hoạt động điền từ
window.checkFill239 = function() {
    const a = document.getElementById('sel-fill-a').value;
    const b = document.getElementById('sel-fill-b').value;
    const c = document.getElementById('sel-fill-c').value;
    const d = document.getElementById('sel-fill-d').value;
    const fb = document.getElementById('fb-fill-239');
    fb.classList.remove('hidden');

    if (!a || !b || !c || !d) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em vui lòng điền đầy đủ từ thích hợp cho cả 4 câu tục ngữ nhé!";
        return;
    }

    if (a === 'đông' && b === 'đầy' && c === 'nhiều' && d === 'đầy') {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
        fb.innerHTML = "🌟 Chúc mừng em! Cả 4 câu điền từ ngữ tục ngữ/thành ngữ đều chính xác tuyệt đối. Em ghi nhớ tục ngữ Việt Nam rất tốt.";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
        if (typeof window.submitMathLesson === 'function') {
            window.submitMathLesson("Tiếng Việt Tiết 239: Điền từ tục ngữ", 100, "ex-239-fill", 1, 1, 1);
        }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-800 border border-red-200 mt-4";
        fb.innerHTML = "❌ Còn từ điền chưa chính xác. Hãy nhớ thành ngữ là 'đông như kiến' và 'nhiều sao thì nắng' nhé. Em hãy chọn lại nha!";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

window.resetFill239 = function() {
    document.getElementById('sel-fill-a').value = "";
    document.getElementById('sel-fill-b').value = "";
    document.getElementById('sel-fill-c').value = "";
    document.getElementById('sel-fill-d').value = "";
    const fb = document.getElementById('fb-fill-239');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};

// Đặt câu phân biệt
window.submitPhrase239 = function() {
    const it = document.getElementById('txt-phrase-it').value.trim();
    const thua = document.getElementById('txt-phrase-thua').value.trim();
    const vang = document.getElementById('txt-phrase-vang').value.trim();
    const fb = document.getElementById('fb-phrase-239');
    fb.classList.remove('hidden');

    if (it.length < 5 || thua.length < 5 || vang.length < 5) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-850 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em hãy hoàn thành viết câu đầy đủ cho cả 3 từ ít, thưa, vắng để thực hành nhé!";
        return;
    }

    fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
    fb.innerHTML = "🌟 Rất tốt! Các câu văn của em đã đặt đúng ngữ cảnh, giúp phân biệt rõ rệt nghĩa của ba từ gần nghĩa: ít (số lượng), thưa (khoảng cách dày/mỏng), vắng (không có người).";
    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    if (typeof window.submitMathLesson === 'function') {
        window.submitMathLesson("Tiếng Việt Tiết 239: Đặt câu phân biệt từ gần nghĩa", 100, "ex-239-phrase", 1, 1, 1);
    }
};

// Phép liên kết
window.checkLink239 = function() {
    const a1 = document.getElementById('sel-link-a1').value;
    const a2 = document.getElementById('sel-link-a2').value;
    const b1 = document.getElementById('sel-link-b1').value;
    const b2 = document.getElementById('sel-link-b2').value;
    const fb = document.getElementById('fb-link-239');
    fb.classList.remove('hidden');

    if (!a1 || !a2 || !b1 || !b2) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em hãy lựa chọn đầy đủ biện pháp liên kết cho cả 4 trường hợp nhé!";
        return;
    }

    if (a1 === 'the' && a2 === 'noi' && b1 === 'lap' && b2 === 'noi') {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
        fb.innerHTML = "🌟 Tuyệt vời! Em đã xác định chính xác các phép liên kết: Đoạn a dùng phép thế ('chúng' thay 'loài hươu') và phép nối ('Thế nhưng'). Đoạn b dùng phép lặp ('Hạ Long') và phép nối ('Song').";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
        if (typeof window.submitMathLesson === 'function') {
            window.submitMathLesson("Tiếng Việt Tiết 239: Biện pháp liên kết câu", 100, "ex-239-link", 1, 1, 1);
        }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-800 border border-red-200 mt-4";
        fb.innerHTML = "❌ Còn vị trí chưa chính xác rồi. Em hãy nhớ: Thay từ là phép thế, gạch nối câu là phép nối, từ lặp đi lặp lại là phép lặp nhé. Hãy thử chọn lại nha!";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

window.resetLink239 = function() {
    document.getElementById('sel-link-a1').value = "";
    document.getElementById('sel-link-a2').value = "";
    document.getElementById('sel-link-b1').value = "";
    document.getElementById('sel-link-b2').value = "";
    const fb = document.getElementById('fb-link-239');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};

// Viết đoạn văn tả cảnh
window.submitWeatherScene239 = function() {
    const scene = document.getElementById('txt-weather-scene').value.trim();
    const link = document.getElementById('txt-weather-link').value.trim();
    const fb = document.getElementById('fb-weather-239');
    fb.classList.remove('hidden');

    if (scene.length < 15 || link.length < 5) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-850 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em hãy hoàn thành viết đoạn văn ngắn tả cảnh (2-3 câu) và chỉ rõ các phép liên kết câu đã sử dụng nhé!";
        return;
    }

    fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
    fb.innerHTML = "🌟 Rất đáng khen ngợi! Đoạn văn tả cảnh của em có hình ảnh sinh động và em đã nhận diện đúng các biện pháp liên kết câu (lặp từ, thế từ hoặc từ nối) giúp các câu văn gắn kết chặt chẽ.";
    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    if (typeof window.submitMathLesson === 'function') {
        window.submitMathLesson("Tiếng Việt Tiết 239: Thực hành viết tả cảnh liên kết câu", 100, "ex-239-scene", 1, 1, 1);
    }
};

// Đăng ký bài học toàn cục
window.lesson239 = lesson239;