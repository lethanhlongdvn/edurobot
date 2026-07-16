export const lesson95 = {
    "topic": "Tiếng Việt 5",
    "week": "14",
    "period": "95-96",
    "title": "ĐỌC: TRÍ TƯỞNG TƯỢNG PHONG PHÚ",
    "desc": "Bài học giúp học sinh rèn luyện kỹ năng đọc hiểu văn bản kể về cuộc đời và sự nghiệp sáng tác của nhà văn J.K. Rowling; đồng thời luyện tập phân biệt các từ đồng nghĩa chỉ hoạt động nhận thức: mơ tưởng, liên tưởng, ý tưởng, tưởng tượng.",
    "subject": "Tiếng Việt",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-blue-900">
<div class="flex justify-end mb-4">
    <button onclick="playSegmentAudio('assets/audio/tiengviet/95/tri_tuong_tuong_phong_phu.mp3')" class="p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc toàn bài">
        <span class="text-xl">🔊 Nghe đọc mẫu</span>
    </button>
</div>
    <!-- 🎯 Mục tiêu bài học (Clean Style) -->
    <div class="p-6 bg-blue-50/50 rounded-[2rem] border-2 border-blue-700">
        <h3 class="text-3xl font-black text-blue-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-700 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-blue-800 font-bold text-lg md:text-3xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-950 font-black">•</span>
                Đọc trôi chảy, diễn cảm bài đọc "Trí tưởng tượng phong phú", hiểu được hành trình vượt qua khó khăn để sáng tác bộ truyện Harry Potter của J.K. Rowling.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-950 font-black">•</span>
                Phân biệt và giải nghĩa chính xác 4 từ: "mơ tưởng", "liên tưởng", "ý tưởng", "tưởng tượng".
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-950 font-black">•</span>
                Biết cách vận dụng các từ ngữ này vào câu văn thực tế phù hợp với ngữ cảnh.
            </li>
        </ul>
    </div>

    <!-- 🚀 Khởi động -->
    <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-4">
        <h3 class="text-3xl font-black text-blue-900 flex items-center gap-3">
            <span class="text-3xl">🚀</span>
            Khởi động: Nhận diện tác phẩm
        </h3>
        <p class="text-xl text-blue-800 font-bold leading-relaxed">
            Những hình ảnh minh hoạ dưới đây có gì thú vị? Chúng giúp em liên tưởng đến cuốn truyện nổi tiếng nào?
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <!-- Hình ảnh gợi ý -->
            <div class="flex gap-4 justify-center">
                <div class="relative group overflow-hidden rounded-2xl border-2 border-blue-200 p-1 bg-white max-w-[200px]"
                     onclick="window.showMathFeedback(true, '&lt;div class=&amp;quot;text-center p-4 bg-white rounded-[32px] border-4 border-blue-600 shadow-2xl&amp;quot;&gt;&lt;img src=&amp;quot;assets/images/tiengviet_5_1/95-96/127.png&amp;quot; class=&amp;quot;max-h-[85vh] mx-auto rounded-2xl shadow-md object-contain&amp;quot;&gt;&lt;/div&gt;')">
                    <img src="assets/images/tiengviet_5_1/95-96/127.png" class="w-full h-auto rounded-xl object-cover" alt="Harry Potter gợi ý">
                    <div class="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                        <span class="px-3 py-1.5 bg-white/95 text-blue-900 font-black rounded-full shadow text-xs">🔍 XEM TRANH</span>
                    </div>
                </div>
            </div>

            <!-- Khung trả lời -->
            <div class="space-y-4">
                <span class="font-black text-blue-900 text-lg">Em đoán đây là tác phẩm nào:</span>
                <input type="text" id="warmup-input-vn95" placeholder="Nhập tên bộ truyện hoặc nhân vật chính..." class="w-full p-3.5 border-2 border-blue-200 rounded-xl outline-none focus:border-blue-700 font-bold bg-blue-50/10 text-center text-lg md:text-3xl">
                <div class="flex justify-center">
                    <button onclick="checkWarmupVn95()" class="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-black rounded-xl text-base shadow active:scale-95 transition-all">KIỂM TRA ✉️</button>
                </div>
                <div id="warmup-fb-vn95" class="hidden p-4 rounded-xl text-center font-bold text-base border"></div>
            </div>
        </div>
    </div>

    <!-- 📖 Phần 1: BÀI ĐỌC (SGK Trang 127-128) -->
    <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-6">
        <div class="flex items-center justify-between border-b border-blue-100 pb-4">
            <h3 class="text-3xl font-black text-blue-900 flex items-center gap-3">
                <span class="text-3xl">📖</span>
                Đọc bài: Trí tưởng tượng phong phú
            </h3>
            <!-- Audio Loa nghe bài đọc -->
            <button onclick="window.showMathFeedback(true, '&lt;div class=&amp;quot;p-6 text-center space-y-4 bg-white rounded-[32px] border-4 border-blue-600 shadow-2xl&amp;quot;&gt;&lt;span class=&amp;quot;text-6xl animate-bounce inline-block&amp;quot;&gt;📻&lt;/span&gt;&lt;p class=&amp;quot;text-2xl font-black text-blue-900&amp;quot;&gt;Đang phát giọng đọc mẫu bài học...&lt;/p&gt;&lt;div class=&amp;quot;flex justify-center gap-1.5 h-6 mt-4&amp;quot;&gt;&lt;span class=&amp;quot;w-1.5 bg-blue-600 rounded-full animate-bounce h-4&amp;quot;&gt;&lt;/span&gt;&lt;span class=&amp;quot;w-1.5 bg-blue-600 rounded-full animate-bounce h-6\u0026quot; style=\u0026quot;animation-delay: 0.15s\u0026quot;&gt;&lt;/span&gt;&lt;span class=&amp;quot;w-1.5 bg-blue-600 rounded-full animate-bounce h-3\u0026quot; style=\u0026quot;animation-delay: 0.3s\u0026quot;&gt;&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;')" class="p-3 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-full transition-all shadow-sm flex items-center justify-center text-xl" title="Nghe đọc mẫu">
                🔊 Nghe đọc mẫu
            </button>
        </div>

        <div class="space-y-8">
            <div class="w-full bg-blue-50/20 p-6 md:p-10 rounded-[40px] border border-blue-100 shadow-inner relative overflow-hidden">
                <!-- Ảnh minh họa có Zoom (bên phải) -->
                <div onclick="window.showMathFeedback(true, '&lt;div class=&amp;quot;text-center p-4 bg-white rounded-[32px] border-4 border-blue-600 shadow-2xl&amp;quot;&gt;&lt;img src=&amp;quot;assets/images/tiengviet_5_1/95-96/128.png&amp;quot; class=&amp;quot;max-h-[80vh] mx-auto rounded-2xl shadow-md object-contain&amp;quot; alt=&amp;quot;Trang 128 SGK&amp;quot;&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-white p-4 rounded-3xl border border-blue-100 shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group border-4 border-white">
                    <img src="assets/images/tiengviet_5_1/95-96/128.png" alt="SGK trang 128" class="w-full h-auto object-cover group-hover:scale-105 transition-all duration-500">
                    <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span class="px-4 py-2 bg-white/95 rounded-full text-xs font-black text-blue-900 shadow-md">🔍 PHÓNG TO</span>
                    </div>
                    <p class="text-[10px] text-gray-800 font-bold text-center mt-3 leading-tight">Trang 128 Sách giáo khoa</p>
                </div>

                <div id="bai-doc-tri-tuong-tuong" class="serif-font text-blue-950 leading-relaxed space-y-6 text-justify font-normal text-xl md:text-4xl">
                    <p class="indent-8">
                        Giô-an Rô-linh là một cô bé có trí tưởng tượng rất phong phú. Giô-an thường nghĩ ra nhiều câu chuyện và kể cho em gái nghe. Chỉ cần nhìn thấy một chú thỏ là Giô-an có ngay một câu chuyện. Cô bắt đầu kể cho em: “Thỏ con bị sốt. Cô ong mang đến cho thỏ một chiếc bánh quy mật ong. Thỏ ăn xong, khỏi bệnh liền.”. Hôm sau, em gái nài nỉ cô kể tiếp. Giô-an kể: “Cô ong lo lắng cho bệnh tình của thỏ. Ong tiêm cho thỏ một mũi...”. Đứa em vội kêu: “Không phải, hôm qua chị kể khác.”. Giô-an nghĩ cô nên viết ra câu chuyện của mình, trước khi quên mất. Câu chuyện <span class="italic font-bold text-lg md:text-3xl">Chú thỏ con</span> được ra đời như thế. Đó cũng là lần đầu tiên Giô-an ấp ủ ước mơ trở thành nhà văn. Giô-an bắt đầu ghi lại những câu chuyện mới vào một cuốn sổ.
                    </p>
                    <p class="indent-8">
                        Sau khi tốt nghiệp đại học, Giô-an làm việc tại một công ty nhưng trong đầu cô luôn tràn ngập những câu chuyện. Một lần, ngồi trên tàu, nhìn ra cửa sổ, cô chợt nghĩ tới hình ảnh một cậu bé với cặp kính và một vết sẹo hình tia chớp trên trán. Thế là trước mắt cô, cả đoàn tàu đi vào thế giới phép thuật kì thú. Giô-an đặt tên cho cậu bé là Ha-ri Pót-tơ. Cô nghĩ về ngôi trường cậu bé theo học, bạn bè của cậu,... Càng viết, cô càng phấn khích.
                    </p>
                    <p class="indent-8">
                        Một năm trôi qua, Giô-an đã viết xong tập truyện đầu tiên về Ha-ri Pót-tơ. Cô gửi bản thảo đến nhiều nhà xuất bản nhưng đều bị từ chối. Rất may, một nhà xuất bản đã nhận lời. Khi cuốn sách được xuất bản, Giô-an muốn hét thật to: “Mơ ước của mình đã trở thành hiện thực!”. Nhưng điều cô không ngờ tới, <span class="italic font-bold text-lg md:text-3xl">Ha-ri Pót-tơ và hòn đá phù thuỷ</span> đã thu hút sự chú ý của rất nhiều trẻ em trên toàn thế giới. Giô-an trở thành nhà văn nổi tiếng. Cô thường nói với các bạn đọc: “Nếu không sáng tác, tôi sẽ không thể ngủ ngon.”.
                    </p>
                    <p class="text-right font-black text-blue-900 mt-2 text-lg font-sans font-bold">(Theo Dun Dơ-rim, Bảo Khanh dịch)</p>
                </div>
            </div>

            <!-- Các khối thông tin bổ trợ đặt bên dưới dạng lưới thích ứng -->
            <div class="grid grid-cols-1 gap-6">
                <!-- Chú giải từ khó -->
                <div class="bg-blue-50/50 p-6 md:p-8 rounded-[28px] border-2 border-dashed border-blue-200">
                    <p class="text-xs font-black text-blue-600 uppercase tracking-widest mb-3 flex items-center gap-1">
                        <span>📝</span> Chú thích
                    </p>
                    <ul class="space-y-4 text-lg md:text-xl text-blue-600 font-bold leading-relaxed">
                        <li>• <strong>Giô-an Rô-linh</strong>: Thường được biết đến với bút danh J.K. Rowling, nhà văn người Anh, tác giả bộ truyện Harry Potter nổi tiếng toàn cầu.</li>
                        <li>• <strong>Phấn khích</strong>: Phấn khởi do tinh thần được cổ vũ, khích lệ.</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <!-- 📖 Phần 2: TÌM HIỂU BÀI HỌC (SGK Trang 128) -->
    <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-6">
        <h3 class="text-3xl font-black text-blue-900 flex items-center gap-3">
            <span class="text-3xl">❓</span>
            Tìm hiểu bài học
        </h3>

        <div class="space-y-6 max-w-5xl mx-auto">
            <!-- Câu 1 -->
            <div class="p-5 bg-blue-50/30 rounded-2xl border border-blue-100 space-y-3 text-lg md:text-3xl">
                <span class="font-black text-blue-950 text-xl flex items-start gap-2">
                    <span class="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm shrink-0 mt-0.5">1</span>
                    Những chi tiết nào cho biết ngay từ nhỏ, Giô-an Rô-linh đã có trí tưởng tượng rất phong phú?
                </span>
                <div class="pl-9 space-y-2">
                    <label class="flex items-center gap-2 font-bold text-gray-700 cursor-pointer">
                        <input type="radio" name="vn95-q1" value="A" class="w-4 h-4 text-blue-600">
                        <span>A. Cô bé thích đi du lịch khắp thế giới bằng tàu hỏa cùng gia đình.</span>
                    </label>
                    <label class="flex items-center gap-2 font-bold text-gray-700 cursor-pointer">
                        <input type="radio" name="vn95-q1" value="B" class="w-4 h-4 text-blue-600">
                        <span>B. Thích kể chuyện cho em gái, nhìn thấy thỏ là nghĩ ra ngay một câu chuyện độc đáo.</span>
                    </label>
                    <label class="flex items-center gap-2 font-bold text-gray-700 cursor-pointer">
                        <input type="radio" name="vn95-q1" value="C" class="w-4 h-4 text-blue-600">
                        <span>C. Cô bé luôn vẽ những bức tranh thỏ con vô cùng sinh động.</span>
                    </label>
                </div>
            </div>

            <!-- Câu 2 -->
            <div class="p-5 bg-blue-50/30 rounded-2xl border border-blue-100 space-y-3 text-lg md:text-3xl">
                <span class="font-black text-blue-950 text-xl flex items-start gap-2">
                    <span class="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm shrink-0 mt-0.5">2</span>
                    Cô bé Giô-an ấp ủ ước mơ trở thành nhà văn từ khi nào? Bằng cách nào cô thực hiện ước mơ đó?
                </span>
                <div class="pl-9 space-y-2">
                    <label class="flex items-center gap-2 font-bold text-gray-700 cursor-pointer">
                        <input type="radio" name="vn95-q2" value="A" class="w-4 h-4 text-blue-600">
                        <span>A. Từ khi câu chuyện "Chú thỏ con" ra đời; thực hiện bằng cách ghi chép những câu chuyện mới vào một cuốn sổ.</span>
                    </label>
                    <label class="flex items-center gap-2 font-bold text-gray-700 cursor-pointer">
                        <input type="radio" name="vn95-q2" value="B" class="w-4 h-4 text-blue-600">
                        <span>B. Khi đã đỗ vào trường đại học; thực hiện bằng cách tìm kiếm một công việc tại tập đoàn lớn.</span>
                    </label>
                    <label class="flex items-center gap-2 font-bold text-gray-700 cursor-pointer">
                        <input type="radio" name="vn95-q2" value="C" class="w-4 h-4 text-blue-600">
                        <span>C. Từ khi gửi bản thảo cuốn sách đầu tiên đi; thực hiện bằng cách xin tài trợ của nhà xuất bản.</span>
                    </label>
                </div>
            </div>

            <!-- Câu 3 -->
            <div class="p-5 bg-blue-50/30 rounded-2xl border border-blue-100 space-y-3 text-lg md:text-3xl">
                <span class="font-black text-blue-950 text-xl flex items-start gap-2">
                    <span class="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm shrink-0 mt-0.5">3</span>
                    Ý tưởng về nhân vật Ha-ri Pót-tơ và câu chuyện kì thú được hình thành trong tình huống nào?
                </span>
                <div class="pl-9 space-y-2">
                    <label class="flex items-center gap-2 font-bold text-gray-700 cursor-pointer">
                        <input type="radio" name="vn95-q3" value="A" class="w-4 h-4 text-blue-600">
                        <span>A. Khi cô đang làm việc bận rộn ở công ty cũ.</span>
                    </label>
                    <label class="flex items-center gap-2 font-bold text-gray-700 cursor-pointer">
                        <input type="radio" name="vn95-q3" value="B" class="w-4 h-4 text-blue-600">
                        <span>B. Một lần ngồi trên tàu hỏa nhìn ra cửa sổ, nghĩ đến hình ảnh một cậu bé đeo kính và vết sẹo hình tia chớp trên trán.</span>
                    </label>
                    <label class="flex items-center gap-2 font-bold text-gray-700 cursor-pointer">
                        <input type="radio" name="vn95-q3" value="C" class="w-4 h-4 text-blue-600">
                        <span>C. Khi cô đang đọc một câu chuyện cổ tích về các phù thủy xưa.</span>
                    </label>
                </div>
            </div>

            <!-- Câu 4 -->
            <div class="p-5 bg-blue-50/30 rounded-2xl border border-blue-100 space-y-3 text-lg md:text-3xl">
                <span class="font-black text-blue-950 text-xl flex items-start gap-2">
                    <span class="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm shrink-0 mt-0.5">4</span>
                    Câu chuyện "Ha-ri Pót-tơ và hòn đá phù thuỷ" được đón nhận như thế nào?
                </span>
                <div class="pl-9 space-y-2">
                    <label class="flex items-center gap-2 font-bold text-gray-700 cursor-pointer">
                        <input type="radio" name="vn95-q4" value="A" class="w-4 h-4 text-blue-600">
                        <span>A. Cuốn sách thu hút sự chú ý của rất nhiều trẻ em trên toàn thế giới, Giô-an trở thành nhà văn nổi tiếng.</span>
                    </label>
                    <label class="flex items-center gap-2 font-bold text-gray-700 cursor-pointer">
                        <input type="radio" name="vn95-q4" value="B" class="w-4 h-4 text-blue-600">
                        <span>B. Sách chỉ được bán ở một vài thư viện nhỏ trong nước.</span>
                    </label>
                    <label class="flex items-center gap-2 font-bold text-gray-700 cursor-pointer">
                        <input type="radio" name="vn95-q4" value="C" class="w-4 h-4 text-blue-600">
                        <span>C. Không được mọi người quan tâm và bị trả lại bản thảo liên tục.</span>
                    </label>
                </div>
            </div>

            <!-- Câu 5: Tự luận AI chấm điểm -->
            <div class="p-5 bg-blue-50/30 rounded-2xl border border-blue-100 space-y-3 text-lg md:text-3xl">
                <span class="font-black text-blue-950 text-xl flex items-start gap-2">
                    <span class="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm shrink-0 mt-0.5">5</span>
                    Theo em, nhờ đâu nhà văn Giô-an Rô-linh viết được cuốn sách có sức hấp dẫn lớn như vậy?
                </span>
                <div class="pl-9 space-y-4">
                    <textarea id="vn95-essay-q5" rows="3" placeholder="Nhập suy nghĩ của em (ví dụ: nhờ có trí tưởng tượng phong phú, lòng đam mê sáng tác, sự kiên trì viết sách...)" class="w-full p-4 border-2 border-blue-200 rounded-2xl outline-none focus:border-blue-700 font-bold bg-white text-base"></textarea>
                </div>
            </div>
        </div>

        <div class="flex justify-center pt-2">
            <button onclick="checkComprehensionVn95()" class="w-14 h-14 md:w-20 md:h-20 bg-blue-700 hover:bg-blue-800 text-white rounded-[2rem] font-black text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
        </div>
        <div id="fb-comprehension" class="hidden p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner"></div>
    </div>


    <!-- 💡 Nội dung chính bài học -->
    <div class="bg-gradient-to-r from-blue-700 to-indigo-600 p-8 rounded-[36px] text-white shadow-2xl border-4 border-blue-100 relative overflow-hidden animate-in slide-in-from-bottom duration-500">
        <div class="absolute right-0 bottom-0 translate-x-10 translate-y-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
        <div class="relative z-10 space-y-4">
            <h4 class="text-2xl md:text-5xl font-black flex items-center gap-3">
                <span class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">💡</span>
                Nội dung chính bài học
            </h4>
            <p class="text-lg md:text-2xl font-bold leading-relaxed text-blue-50">
                Câu chuyện ca ngợi sức mạnh kỳ diệu của trí tưởng tượng và sự say mê sáng tạo của nhà văn J.K. Rowling. Qua đó truyền cảm hứng cho bạn đọc về tinh thần kiên trì theo đuổi ước mơ vượt qua mọi rào cản và khó khăn để chạm đến thành công lớn lao.
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📝 LUYỆN TẬP: TỪ VỰNG & NGHĨA CỦA TỪ (SGK Trang 129) -->
    <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-6">
        <h3 class="text-3xl font-black text-blue-900 flex items-center gap-3">
            <span class="text-3xl">📝</span>
            Luyện tập từ vựng
        </h3>

        <!-- Bài tập 1: Nối nghĩa của từ -->
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <h4 class="text-2xl font-black text-blue-900 flex items-start gap-2">
                    <span class="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-base shrink-0 mt-0.5">1</span>
                    Tìm nghĩa của các từ dưới đây (Nối từ với định nghĩa phù hợp):
                </h4>
                <!-- Ảnh SGK trang 129 -->
                <div class="relative group cursor-pointer overflow-hidden rounded-xl border border-blue-200 max-w-[100px]"
                     onclick="window.showMathFeedback(true, '&lt;div class=&amp;quot;text-center p-4 bg-white rounded-[32px] border-4 border-blue-600 shadow-2xl&amp;quot;&gt;&lt;img src=&amp;quot;assets/images/tiengviet_5_1/95-96/129.png&amp;quot; class=&amp;quot;max-h-[85vh] mx-auto rounded-2xl shadow-md object-contain&amp;quot;&gt;&lt;/div&gt;')">
                    <img src="assets/images/tiengviet_5_1/95-96/129.png" class="w-full h-auto rounded-lg object-cover" alt="Nối nghĩa">
                    <div class="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg">
                        <span class="bg-white/95 px-1 py-0.5 rounded text-[10px] font-black text-blue-900">ZOOM</span>
                    </div>
                </div>
            </div>

            <div class="max-w-4xl mx-auto space-y-4">
                <!-- Mơ tưởng -->
                <div class="p-4 bg-blue-50/40 rounded-xl border border-blue-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span class="px-4 py-2 bg-blue-700 text-white rounded-lg font-black text-lg w-36 text-center">a. mơ tưởng</span>
                    <select id="vn95-vocab-a" class="w-full md:w-3/4 p-2 border-2 border-blue-200 rounded-xl font-bold bg-white text-base">
                        <option value="">-- Chọn định nghĩa --</option>
                        <option value="1">(1) Nghĩ tới sự vật, hiện tượng nào đó có liên quan đến sự việc, hiện tượng đang diễn ra.</option>
                        <option value="2">(2) Tạo ra trong tâm trí hình ảnh những cái không ở trước mắt hoặc chưa hề có.</option>
                        <option value="3">(3) Mong mỏi, ước ao những điều xa vời, không thực tế.</option>
                        <option value="4">(4) Điều nảy ra, nghĩ ra trong đầu, thường chưa trọn vẹn.</option>
                    </select>
                </div>

                <!-- Liên tưởng -->
                <div class="p-4 bg-blue-50/40 rounded-xl border border-blue-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span class="px-4 py-2 bg-blue-700 text-white rounded-lg font-black text-lg w-36 text-center">b. liên tưởng</span>
                    <select id="vn95-vocab-b" class="w-full md:w-3/4 p-2 border-2 border-blue-200 rounded-xl font-bold bg-white text-base">
                        <option value="">-- Chọn định nghĩa --</option>
                        <option value="1">(1) Nghĩ tới sự vật, hiện tượng nào đó có liên quan đến sự việc, hiện tượng đang diễn ra.</option>
                        <option value="2">(2) Tạo ra trong tâm trí hình ảnh những cái không ở trước mắt hoặc chưa hề có.</option>
                        <option value="3">(3) Mong mỏi, ước ao những điều xa vời, không thực tế.</option>
                        <option value="4">(4) Điều nảy ra, nghĩ ra trong đầu, thường chưa trọn vẹn.</option>
                    </select>
                </div>

                <!-- Ý tưởng -->
                <div class="p-4 bg-blue-50/40 rounded-xl border border-blue-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span class="px-4 py-2 bg-blue-700 text-white rounded-lg font-black text-lg w-36 text-center">c. ý tưởng</span>
                    <select id="vn95-vocab-c" class="w-full md:w-3/4 p-2 border-2 border-blue-200 rounded-xl font-bold bg-white text-base">
                        <option value="">-- Chọn định nghĩa --</option>
                        <option value="1">(1) Nghĩ tới sự vật, hiện tượng nào đó có liên quan đến sự việc, hiện tượng đang diễn ra.</option>
                        <option value="2">(2) Tạo ra trong tâm trí hình ảnh những cái không ở trước mắt hoặc chưa hề có.</option>
                        <option value="3">(3) Mong mỏi, ước ao những điều xa vời, không thực tế.</option>
                        <option value="4">(4) Điều nảy ra, nghĩ ra trong đầu, thường chưa trọn vẹn.</option>
                    </select>
                </div>

                <!-- Tưởng tượng -->
                <div class="p-4 bg-blue-50/40 rounded-xl border border-blue-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span class="px-4 py-2 bg-blue-700 text-white rounded-lg font-black text-lg w-36 text-center">d. tưởng tượng</span>
                    <select id="vn95-vocab-d" class="w-full md:w-3/4 p-2 border-2 border-blue-200 rounded-xl font-bold bg-white text-base">
                        <option value="">-- Chọn định nghĩa --</option>
                        <option value="1">(1) Nghĩ tới sự vật, hiện tượng nào đó có liên quan đến sự việc, hiện tượng đang diễn ra.</option>
                        <option value="2">(2) Tạo ra trong tâm trí hình ảnh những cái không ở trước mắt hoặc chưa hề có.</option>
                        <option value="3">(3) Mong mỏi, ước ao những điều xa vời, không thực tế.</option>
                        <option value="4">(4) Điều nảy ra, nghĩ ra trong đầu, thường chưa trọn vẹn.</option>
                    </select>
                </div>
            </div>

            <div class="flex justify-center pt-2">
                <button onclick="checkVocabVn95()" class="w-14 h-14 md:w-20 md:h-20 bg-blue-700 hover:bg-blue-800 text-white rounded-[2rem] font-black text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
            </div>
            <div id="fb-vocab" class="hidden p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner"></div>
        </div>

        <!-- Bài tập 2: Chọn từ phù hợp điền vào chỗ trống -->
        <div class="space-y-4 border-t border-blue-100 pt-6">
            <h4 class="text-2xl font-black text-blue-900 flex items-start gap-2">
                <span class="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-base shrink-0 mt-0.5">2</span>
                Chọn từ phù hợp ở bài tập 1 thay cho mỗi bông hoa trong những câu sau:
            </h4>

            <div class="max-w-4xl mx-auto space-y-4 bg-blue-50/10 p-6 rounded-[2rem] border-2 border-blue-100 text-lg md:text-3xl">
                <!-- Câu a -->
                <div class="flex flex-wrap items-center gap-2 text-lg font-bold leading-loose text-gray-800">
                    <span>a. Khi đọc truyện, tôi thường</span>
                    <select id="vn95-blank-a" class="p-1.5 border border-blue-300 rounded-lg outline-none bg-white font-bold text-blue-900 text-base">
                        <option value="">-- Chọn từ --</option>
                        <option value="mơ tưởng">mơ tưởng</option>
                        <option value="liên tưởng">liên tưởng</option>
                        <option value="ý tưởng">ý tưởng</option>
                        <option value="tưởng tượng">tưởng tượng</option>
                    </select>
                    <span>mình là nhân vật chính. Việc đó giúp tôi hiểu rõ hơn cảm xúc và hành động của nhân vật.</span>
                </div>

                <!-- Câu b -->
                <div class="flex flex-wrap items-center gap-2 text-lg font-bold leading-loose text-gray-800 border-t border-blue-100/50 pt-3">
                    <span>b. Bạn có thể chia sẻ với tôi những</span>
                    <select id="vn95-blank-b" class="p-1.5 border border-blue-300 rounded-lg outline-none bg-white font-bold text-blue-900 text-base">
                        <option value="">-- Chọn từ --</option>
                        <option value="mơ tưởng">mơ tưởng</option>
                        <option value="liên tưởng">liên tưởng</option>
                        <option value="ý tưởng">ý tưởng</option>
                        <option value="tưởng tượng">tưởng tượng</option>
                    </select>
                    <span>của bạn về buổi hội chợ của lớp được không?</span>
                </div>

                <!-- Câu c -->
                <div class="flex flex-wrap items-center gap-2 text-lg font-bold leading-loose text-gray-800 border-t border-blue-100/50 pt-3">
                    <span>c. Ngắm nhìn những bông hoa hướng dương nở vàng rực trong vườn, tôi chợt</span>
                    <select id="vn95-blank-c" class="p-1.5 border border-blue-300 rounded-lg outline-none bg-white font-bold text-blue-900 text-base">
                        <option value="">-- Chọn từ --</option>
                        <option value="mơ tưởng">mơ tưởng</option>
                        <option value="liên tưởng">liên tưởng</option>
                        <option value="ý tưởng">ý tưởng</option>
                        <option value="tưởng tượng">tưởng tượng</option>
                    </select>
                    <span>đến hình ảnh mặt trời đang toả nắng.</span>
                </div>

                <!-- Câu d -->
                <div class="flex flex-wrap items-center gap-2 text-lg font-bold leading-loose text-gray-800 border-t border-blue-100/50 pt-3">
                    <span>d. Hôm nay, cô giáo cho chúng tôi vẽ tranh. Tôi có</span>
                    <select id="vn95-blank-d1" class="p-1.5 border border-blue-300 rounded-lg outline-none bg-white font-bold text-blue-900 text-base">
                        <option value="">-- Chọn từ --</option>
                        <option value="mơ tưởng">mơ tưởng</option>
                        <option value="liên tưởng">liên tưởng</option>
                        <option value="ý tưởng">ý tưởng</option>
                        <option value="tưởng tượng">tưởng tượng</option>
                    </select>
                    <span>vẽ một ngôi nhà trên cây. Tôi</span>
                    <select id="vn95-blank-d2" class="p-1.5 border border-blue-300 rounded-lg outline-none bg-white font-bold text-blue-900 text-base">
                        <option value="">-- Chọn từ --</option>
                        <option value="mơ tưởng">mơ tưởng</option>
                        <option value="liên tưởng">liên tưởng</option>
                        <option value="ý tưởng">ý tưởng</option>
                        <option value="tưởng tượng">tưởng tượng</option>
                    </select>
                    <span>đó là một ngôi nhà màu hồng, nhiều cửa sổ và có một cái cầu trượt dài.</span>
                </div>
            </div>

            <div class="flex justify-center pt-2">
                <button onclick="checkBlanksVn95()" class="w-14 h-14 md:w-20 md:h-20 bg-blue-700 hover:bg-blue-800 text-white rounded-[2rem] font-black text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
            </div>
            <div id="fb-blanks" class="hidden p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner"></div>
        </div>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "J.K. Rowling (Giô-an Rô-linh) là tác giả của bộ truyện nổi tiếng nào?",
            "options": [
                "Harry Potter (Ha-ri Pót-tơ)",
                "Dế Mèn phiêu lưu kí",
                "Những cuộc phiêu lưu của Tom Sawyer",
                "Kính vạn hoa"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Cuốn sổ ghi chép đầu tiên của Giô-an ghi lại tác phẩm nào?",
            "options": [
                "Chú thỏ con",
                "Cô ong mật",
                "Cậu bé đeo kính",
                "Ngôi trường phép thuật"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Cô bé Giô-an ấp ủ ước mơ trở thành nhà văn từ khi nào?",
            "options": [
                "Từ khi kể câu chuyện đầu tiên về thỏ con bị sốt cho em gái nghe",
                "Từ khi tốt nghiệp đại học chuyên ngành sư phạm",
                "Từ khi đi làm việc tại một công ty lớn trên thành phố",
                "Khi cuốn sách Harry Potter bán được hàng triệu bản"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Ý tưởng về nhân vật Ha-ri Pót-tơ đã hình thành trong hoàn cảnh nào?",
            "options": [
                "Khi cô đang ngồi trên tàu hỏa nhìn ra cửa sổ",
                "Khi cô đang vẽ tranh trên cây cùng em gái",
                "Khi cô đang nằm ngủ mơ thấy các phù thủy",
                "Khi cô đang thảo luận dự án ở văn phòng công ty"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Cụm từ 'vết sẹo hình tia chớp trên trán' gợi tả đặc điểm của nhân vật nào?",
            "options": [
                "Ha-ri Pót-tơ",
                "Chú thỏ con",
                "Cô ong mật",
                "Em gái Giô-an"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'mơ tưởng' có nghĩa là gì?",
            "options": [
                "Mong mỏi, ước ao những điều xa vời, không thực tế",
                "Nghĩ đến các sự vật liên quan đến hiện tượng đang diễn ra",
                "Điều nảy ra, nghĩ ra trong đầu nhưng chưa trọn vẹn",
                "Tạo ra trong tâm trí những hình ảnh chưa hề có"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'liên tưởng' có nghĩa là gì?",
            "options": [
                "Nghĩ tới sự vật, hiện tượng nào đó có liên quan đến sự việc, hiện tượng đang diễn ra",
                "Tạo ra trong tâm trí hình ảnh những cái không ở trước mắt",
                "Ước ao mong mỏi những điều viển vông",
                "Một sáng kiến nảy ra bất ngờ trong suy nghĩ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'ý tưởng' có nghĩa là gì?",
            "options": [
                "Điều nảy ra, nghĩ ra trong đầu, thường chưa trọn vẹn",
                "Tạo ra hình ảnh không có thực trong suy nghĩ",
                "Nhớ về kỷ niệm cũ từ thời thơ ấu",
                "Đồng nghĩa hoàn toàn với từ giấc mơ đêm"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'tưởng tượng' có nghĩa là gì?",
            "options": [
                "Tạo ra trong tâm trí hình ảnh những cái không ở trước mắt hoặc chưa hề có",
                "Nghĩ tới sự vật có liên quan mật thiết đến hoàn cảnh đang diễn ra",
                "Ước mơ viển vông phi thực tế",
                "Khái niệm chỉ các sự vật đã xảy ra trong quá khứ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Điền từ thích hợp: 'Ngắm nhìn cánh diều bay cao, em chợt ... đến cánh chim tự do.'",
            "options": [
                "liên tưởng",
                "mơ tưởng",
                "ý tưởng",
                "tưởng tượng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Điền từ thích hợp: 'Nhà khoa học đã đề xuất nhiều ... cải tiến kỹ thuật độc đáo.'",
            "options": [
                "ý tưởng",
                "mơ tưởng",
                "tưởng tượng",
                "liên tưởng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Điền từ thích hợp: 'Bé Lan rất thích vẽ, bé hay nhắm mắt ... ra một lâu đài kẹo ngọt khổng lồ.'",
            "options": [
                "tưởng tượng",
                "liên tưởng",
                "ý tưởng",
                "mơ tưởng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Câu nào dưới đây sử dụng đúng từ 'mơ tưởng'?",
            "options": [
                "Cậu ấy suốt ngày mơ tưởng về một cuộc sống không cần học vẫn làm giàu.",
                "Em chợt mơ tưởng cánh hoa này với mặt trời rực rỡ.",
                "Thầy giáo đề nghị cả lớp đề xuất mơ tưởng cho buổi trại hè sắp tới.",
                "Tôi dùng điện thoại để mơ tưởng những hình ảnh đẹp đẽ."
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Thái độ của J.K. Rowling khi tác phẩm đầu tiên liên tục bị các nhà xuất bản từ chối là gì?",
            "options": [
                "Kiên trì vượt qua khó khăn, không bỏ cuộc cho đến khi tìm được nhà xuất bản nhận lời",
                "Chán nản và từ bỏ vĩnh viễn ước mơ viết lách",
                "Chuyển sang vẽ tranh minh họa thay vì viết truyện",
                "Gửi thư đe dọa các biên tập viên nhà xuất bản"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Câu nói nổi tiếng của J.K. Rowling thể hiện tình yêu mãnh liệt với sáng tác là gì?",
            "options": [
                "Nếu không sáng tác, tôi sẽ không thể ngủ ngon.",
                "Tôi viết sách chỉ để kiếm thật nhiều tiền.",
                "Sáng tác truyện thiếu nhi là việc dễ dàng nhất thế giới.",
                "Harry Potter là bộ truyện duy nhất tôi có ý tưởng."
            ],
            "answer": 0,
            "level": 0
        }
    ]
};

// ====== INTERACTIVE SCRIPT ACTIONS ======
window.checkWarmupVn95 = function() {
    const val = document.getElementById('warmup-input-vn95').value.trim().toLowerCase();
    const fb = document.getElementById('warmup-fb-vn95');
    if (!val) {
        alert('Em hãy nhập phán đoán của mình trước nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-green-50', 'text-green-800', 'border-green-300', 'bg-red-50', 'text-red-800', 'border-red-300');
    
    // Chấp nhận harry potter, harry, potơ, phù thủy
    if (val.includes('harry') || val.includes('pot') || val.includes('phù thủy') || val.includes('phù thuỷ')) {
        fb.innerHTML = '🎉 **Chính xác!** Hình ảnh gợi nhớ đến chú bé cưỡi chổi bay **Harry Potter** và con cú tuyết Hedwig trong bộ truyện của nhà văn J.K. Rowling.';
        fb.className = 'p-4 rounded-xl text-center font-bold text-base border bg-green-50 border-green-300 text-green-800 animate-fade-in';
    } else {
        fb.innerHTML = '⚠️ **Chưa đúng rồi!** Em hãy chú ý đến chiếc chổi bay ma thuật và con chim cú tuyết gửi thư để đoán lại nhé!';
        fb.className = 'p-4 rounded-xl text-center font-bold text-base border bg-red-50 border-red-300 text-red-800 animate-fade-in';
    }
};

window.checkComprehensionVn95 = function() {
    const q1 = document.querySelector('input[name="vn95-q1"]:checked');
    const q2 = document.querySelector('input[name="vn95-q2"]:checked');
    const q3 = document.querySelector('input[name="vn95-q3"]:checked');
    const q4 = document.querySelector('input[name="vn95-q4"]:checked');
    const essay = document.getElementById('vn95-essay-q5').value.trim();
    const fb = document.getElementById('fb-comprehension');
    
    if (!q1 || !q2 || !q3 || !q4 || !essay) {
        alert('Em hãy chọn đủ đáp án cho các câu trắc nghiệm và nhập cảm nghĩ ở câu 5 nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-green-50', 'text-green-800', 'border-green-300', 'bg-red-50', 'text-red-800', 'border-red-300');
    
    const isCorrectMC = (q1.value === 'B' && q2.value === 'A' && q3.value === 'B' && q4.value === 'A');
    
    // Kiểm tra câu tự luận có từ khóa: tưởng tượng, kiên trì, đam mê, viết, ước mơ...
    const essayLower = essay.toLowerCase();
    const keywords = ['tưởng tượng', 'đam mê', 'kiên trì', 'quyết tâm', 'ước mơ', 'sáng tác', 'viết', 'nỗ lực'];
    let essayScore = 50;
    keywords.forEach(kw => {
        if (essayLower.includes(kw)) essayScore += 10;
    });
    essayScore = Math.min(essayScore, 100);
    
    if (isCorrectMC && essayScore >= 70) {
        fb.innerHTML = `🎉 **Tuyệt vời! Em hoàn thành xuất sắc bài đọc hiểu!**<br><br>
        - Trắc nghiệm 4/4 câu đúng.<br>
        - **Đánh giá câu 5 từ Thầy E (Điểm: ${essayScore}/100):** Cảm nhận của em rất sâu sắc! J.K. Rowling thành công nhờ trí tưởng tượng phong phú, cùng lòng đam mê sáng tạo mãnh liệt và tinh thần kiên trì vượt qua khó khăn khi bị từ chối bản thảo.`;
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner bg-green-50 border-green-300 text-green-800 animate-fade-in';
    } else {
        let msg = '⚠️ **Chưa hoàn hảo!** ';
        if (!isCorrectMC) msg += 'Một số câu trắc nghiệm của em chọn chưa chính xác, hãy đọc kỹ lại bài đọc để khoanh lại nhé. ';
        if (essayScore < 70) msg += 'Câu trả lời tự luận hơi ngắn hoặc chưa nêu được các phẩm chất của nhà văn (đam mê, tưởng tượng phong phú, kiên trì...). ';
        fb.innerHTML = msg;
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner bg-red-50 border-red-300 text-red-800 animate-fade-in';
    }
};

window.checkVocabVn95 = function() {
    const a = document.getElementById('vn95-vocab-a').value;
    const b = document.getElementById('vn95-vocab-b').value;
    const c = document.getElementById('vn95-vocab-c').value;
    const d = document.getElementById('vn95-vocab-d').value;
    const fb = document.getElementById('fb-vocab');
    
    if (!a || !b || !c || !d) {
        alert('Em hãy chọn đủ nghĩa cho cả 4 từ nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-green-50', 'text-green-800', 'border-green-300', 'bg-red-50', 'text-red-800', 'border-red-300');
    
    // Đúng: a->3, b->1, c->4, d->2
    if (a === '3' && b === '1' && c === '4' && d === '2') {
        fb.innerHTML = `🎉 **Hoàn toàn chính xác! Chúc mừng em!**<br><br>
        - **mơ tưởng**: (3) Mong mỏi, ước ao những điều xa vời, không thực tế.<br>
        - **liên tưởng**: (1) Nghĩ tới sự vật, hiện tượng nào đó có liên quan đến sự việc đang diễn ra.<br>
        - **ý tưởng**: (4) Điều nảy ra, nghĩ ra trong đầu, thường chưa trọn vẹn.<br>
        - **tưởng tượng**: (2) Tạo ra trong tâm trí hình ảnh những cái không ở trước mắt hoặc chưa hề có.`;
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner bg-green-50 border-green-300 text-green-800 animate-fade-in';
    } else {
        fb.innerHTML = '⚠️ **Chưa chính xác rồi!** Em hãy đọc kỹ lại định nghĩa trên các tấm thẻ của SGK và chọn lại nhé!';
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner bg-red-50 border-red-300 text-red-800 animate-fade-in';
    }
};

window.checkBlanksVn95 = function() {
    const a = document.getElementById('vn95-blank-a').value;
    const b = document.getElementById('vn95-blank-b').value;
    const c = document.getElementById('vn95-blank-c').value;
    const d1 = document.getElementById('vn95-blank-d1').value;
    const d2 = document.getElementById('vn95-blank-d2').value;
    const fb = document.getElementById('fb-blanks');
    
    if (!a || !b || !c || !d1 || !d2) {
        alert('Em hãy điền đầy đủ tất cả các ô trống nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-green-50', 'text-green-800', 'border-green-300', 'bg-red-50', 'text-red-800', 'border-red-300');
    
    // Đáp án chuẩn: a->tưởng tượng, b->ý tưởng, c->liên tưởng, d1->ý tưởng, d2->tưởng tượng (hoặc mơ tưởng)
    const isCorrect = (a === 'tưởng tượng') &&
                      (b === 'ý tưởng') &&
                      (c === 'liên tưởng') &&
                      (d1 === 'ý tưởng') &&
                      (d2 === 'tưởng tượng' || d2 === 'mơ tưởng');
                      
    if (isCorrect) {
        fb.innerHTML = `🎉 **Xuất sắc! Em đã điền chính xác tất cả các từ!**<br><br>
        - Câu a: *tưởng tượng* mình là nhân vật chính.<br>
        - Câu b: chia sẻ những *ý tưởng* về hội chợ.<br>
        - Câu c: chợt *liên tưởng* đến mặt trời.<br>
        - Câu d: Tôi có *ý tưởng* vẽ ngôi nhà... Tôi *tưởng tượng* (*mơ tưởng*) đó là ngôi nhà màu hồng...`;
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner bg-green-50 border-green-300 text-green-800 animate-fade-in';
    } else {
        fb.innerHTML = '⚠️ **Điền chưa chính xác!** Em hãy chú ý đến ngữ cảnh của từng câu để chọn lại từ thích hợp nhất nhé!';
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner bg-red-50 border-red-300 text-red-800 animate-fade-in';
    }
};
