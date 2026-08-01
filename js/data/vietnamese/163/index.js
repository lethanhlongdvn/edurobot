// Tiết 163: Luyện từ và câu - Liên kết câu bằng từ ngữ nối (Tuần 24)
export const lesson163 = {
    "topic": "LTVC",
    "week": "24",
    "period": "163",
    "title": "LTVC: LIÊN KẾT CÂU BẰNG TỪ NGỮ NỐI",
    "desc": "Học sinh hiểu thế nào là liên kết câu bằng từ ngữ nối, nhận diện được các từ ngữ nối thông dụng và biết sử dụng chúng để liên kết các câu trong đoạn văn một cách mạch lạc.",
    "subject": "Luyện từ và câu",
    "theme": "Hương sắc trăm miền",
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
                    <span class="text-blue-950 font-black">•</span>
                    Nhận biết được các kết từ và từ ngữ có tác dụng nối để liên kết câu trong đoạn văn.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-950 font-black">•</span>
                    Hiểu được tác dụng liên kết câu của từ ngữ nối giúp đoạn văn mạch lạc, thống nhất.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-950 font-black">•</span>
                    Biết cách lựa chọn và sử dụng chính xác các từ ngữ nối phù hợp để viết đoạn văn liên kết tốt.
                </li>
            </ul>
        </div>

        <!-- 📖 Phần I: Nhận xét (Bài tập 1) -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">1</div>
                    <h3 class="text-2xl md:text-3xl font-black text-blue-950">Đọc đoạn văn dưới đây và thực hiện yêu cầu:</h3>
                </div>

                <div class="p-6 md:p-8 bg-blue-50/30 rounded-[32px] border border-blue-100 shadow-inner mb-8 serif-font text-xl md:text-2xl leading-relaxed text-gray-800">
                    <p>
                        Trên con đường từ nhà đến trường, tôi phải đi qua Hồ Gươm. Lúc có bạn thì chuyện trò tíu tít, có khi đuổi nhau suốt dọc đường. <span class="bg-amber-100 text-amber-950 font-black px-2 py-1 rounded">Nhưng</span> khi đi một mình, tôi thích ôm cặp vào ngực, nhìn lên các vòm cây, vừa đi vừa lẩm nhẩm ôn bài. <span class="bg-amber-100 text-amber-950 font-black px-2 py-1 rounded">Vì thế</span>, tôi thường là đứa phát hiện ra bông hoa đầu tiên nở trên cây gạo trước đền Ngọc Sơn. <span class="bg-amber-100 text-amber-950 font-black px-2 py-1 rounded">Rồi</span> bông nọ gọi bông kia, bông nọ ganh bông kia, chỉ vài hôm sau, cây gạo đã như một cây đuốc lớn cháy rừng rực giữa trời.
                    </p>
                    <p class="text-right italic font-black text-gray-500 mt-4 text-lg md:text-xl">(Theo Vân Long)</p>
                </div>

                <!-- Accordion yêu cầu a, b -->
                <div class="space-y-4">
                    <div class="accordion-item bg-white/50 rounded-[20px] border border-gray-200 overflow-hidden">
                        <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                            <span class="font-bold text-gray-700 group-hover:text-blue-600 text-lg md:text-xl transition-colors">a. Nhận xét về vị trí của các từ ngữ in đậm trong câu.</span>
                            <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 ml-2 group-hover:bg-blue-50 transition-colors"><span class="text-blue-600 font-bold">?</span></div>
                        </button>
                        <div class="accordion-content">
                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-blue-50/10 text-lg md:text-xl font-bold">
                                Các từ in đậm (<span class="text-amber-800">Nhưng</span>, <span class="text-amber-800">Vì thế</span>, <span class="text-amber-800">Rồi</span>) đều đứng ở <b>đầu câu</b> (cụ thể là đầu câu 3, câu 4 và câu 5).
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item bg-white/50 rounded-[20px] border border-gray-200 overflow-hidden">
                        <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-center group">
                            <span class="font-bold text-gray-700 group-hover:text-blue-600 text-lg md:text-xl transition-colors">b. Nêu tác dụng của những từ ngữ đó trong đoạn văn.</span>
                            <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 ml-2 group-hover:bg-blue-50 transition-colors"><span class="text-blue-600 font-bold">?</span></div>
                        </button>
                        <div class="accordion-content">
                            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-blue-50/10 text-lg md:text-xl font-bold space-y-2">
                                <p>Các từ này có tác dụng <b>nối liền các câu</b> với nhau, tạo sự liên kết chặt chẽ về mặt ngữ nghĩa:</p>
                                <ul class="list-disc pl-6 space-y-1 font-semibold">
                                    <li>Từ <span class="text-amber-800">"Nhưng"</span>: Nối câu 3 với câu 2, thể hiện quan hệ tương phản/đối lập (khi đi một mình đối lập với lúc có bạn).</li>
                                    <li>Cụm từ <span class="text-amber-800">"Vì thế"</span>: Nối câu 4 với câu 3, thể hiện quan hệ nguyên nhân – kết quả (vì đi lầm nhẩm ôn bài, nhìn lên các vòm cây nên phát hiện ra hoa nở).</li>
                                    <li>Từ <span class="text-amber-800">"Rồi"</span>: Nối câu 5 với câu 4, thể hiện quan hệ tiếp diễn, trình tự thời gian (bông hoa này nở tiếp theo bông hoa kia).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 💡 Phần II: Ghi nhớ -->
        <section class="w-full">
            <div class="bg-gradient-to-r from-blue-700 to-blue-800 rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl">
                <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
                <h3 class="text-2xl md:text-3xl font-black mb-4 flex items-center gap-3">
                    <span class="text-xl md:text-3xl">💡</span> Ghi nhớ
                </h3>
                <p class="text-xl md:text-2xl leading-relaxed text-blue-50 font-bold">
                    Các câu trong một đoạn văn có thể liên kết với nhau bằng một kết từ hoặc từ ngữ có tác dụng nối (gọi chung là từ ngữ nối) như: <span class="text-yellow-300">rồi, nhưng, vì thế, thứ nhất, thứ hai, trái lại, ngoài ra, bên cạnh đó, đầu tiên, sau đó, tiếp theo, cuối cùng,...</span> Từ ngữ nối thường đứng ở đầu câu.
                </p>
            </div>
        </section>
    </div>
    `,
    "practice": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto pb-12">
        <!-- 📝 Bài tập 2: Quy trình làm cốm -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100">
                <h3 class="text-2xl md:text-3xl font-black text-blue-950 mb-6 flex items-start gap-3">
                    <span class="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-md text-xl">2</span>
                    Chọn từ ngữ (<i>cuối cùng, tiếp theo, sau đó, đầu tiên</i>) thay cho bông hoa để tạo sự liên kết giữa các câu trong đoạn văn.
                </h3>

                <div class="p-6 md:p-8 bg-blue-50/20 rounded-[32px] border border-blue-100 text-xl md:text-2xl leading-relaxed text-gray-800 space-y-4">
                    <p>
                        (1) Quy trình làm cốm gồm nhiều công đoạn. 
                    </p>
                    <p class="flex flex-wrap items-center gap-2">
                        (2)
                        <select id="sel-163-b2-1" class="p-2 bg-white border border-blue-300 rounded-xl font-black text-blue-600 focus:outline-none focus:border-blue-600 shadow-sm text-lg md:text-xl">
                            <option value="">-- Chọn từ --</option>
                            <option value="dautien">đầu tiên</option>
                            <option value="tieptheo">tiếp theo</option>
                            <option value="saudo">sau đó</option>
                            <option value="cuoicung">cuối cùng</option>
                        </select>
                        , người ta gặt lúa non về để tuốt và lấy hạt.
                    </p>
                    <p class="flex flex-wrap items-center gap-2">
                        (3)
                        <select id="sel-163-b2-2" class="p-2 bg-white border border-blue-300 rounded-xl font-black text-blue-600 focus:outline-none focus:border-blue-600 shadow-sm text-lg md:text-xl">
                            <option value="">-- Chọn từ --</option>
                            <option value="dautien">đầu tiên</option>
                            <option value="tieptheo">tiếp theo</option>
                            <option value="saudo">sau đó</option>
                            <option value="cuoicung">cuối cùng</option>
                        </select>
                        , họ đãi lúa qua nước để loại bỏ các hạt lép.
                    </p>
                    <p class="flex flex-wrap items-center gap-2">
                        (4)
                        <select id="sel-163-b2-3" class="p-2 bg-white border border-blue-300 rounded-xl font-black text-blue-600 focus:outline-none focus:border-blue-600 shadow-sm text-lg md:text-xl">
                            <option value="">-- Chọn từ --</option>
                            <option value="dautien">đầu tiên</option>
                            <option value="tieptheo">tiếp theo</option>
                            <option value="saudo">sau đó</option>
                            <option value="cuoicung">cuối cùng</option>
                        </select>
                        , hạt lúa được rang và giã thành cốm.
                    </p>
                    <p class="flex flex-wrap items-center gap-2">
                        (5)
                        <select id="sel-163-b2-4" class="p-2 bg-white border border-blue-300 rounded-xl font-black text-blue-600 focus:outline-none focus:border-blue-600 shadow-sm text-lg md:text-xl">
                            <option value="">-- Chọn từ --</option>
                            <option value="dautien">đầu tiên</option>
                            <option value="tieptheo">tiếp theo</option>
                            <option value="saudo">sau đó</option>
                            <option value="cuoicung">cuối cùng</option>
                        </select>
                        , người ta sàng sẩy cốm thật kĩ và để trong những chiếc thúng nhỏ lót lá sen.
                    </p>
                    <p class="text-right text-base md:text-lg italic text-gray-500 font-bold">(Theo Ngọc Hà)</p>
                </div>
            </div>
        </section>

        <!-- ✍️ Bài tập 3: Điền từ nối vào 4 câu -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100">
                <h3 class="text-2xl md:text-3xl font-black text-blue-950 mb-6 flex items-start gap-3">
                    <span class="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-md text-xl">3</span>
                    Tìm các từ ngữ nối thay cho bông hoa để tạo sự liên kết giữa các câu.
                </h3>

                <div class="space-y-6 text-xl md:text-2xl leading-relaxed text-gray-800">
                    <!-- Câu a -->
                    <div class="p-5 bg-gray-50/50 rounded-2xl border border-gray-100 flex flex-col md:flex-row md:items-center gap-3">
                        <span class="font-black text-blue-600">a.</span>
                        <div class="flex-grow">
                            Ở miền Bắc, Tết đến, hoa đào nở rộ. 
                            <input type="text" id="inp-163-b3-a" placeholder="Điền từ..." class="px-3 py-1.5 border-2 border-blue-200 rounded-xl outline-none focus:border-blue-500 w-44 font-bold text-center text-blue-950">
                            ở miền Nam, khi Tết về, hoa mai khoe sắc.
                        </div>
                    </div>
                    <!-- Câu b -->
                    <div class="p-5 bg-gray-50/50 rounded-2xl border border-gray-100 flex flex-col md:flex-row md:items-center gap-3">
                        <span class="font-black text-blue-600">b.</span>
                        <div class="flex-grow">
                            Đến Huế, du khách thích được ngắm cảnh trên sông Hương. 
                            <input type="text" id="inp-163-b3-b" placeholder="Điền từ..." class="px-3 py-1.5 border-2 border-blue-200 rounded-xl outline-none focus:border-blue-500 w-44 font-bold text-center text-blue-950">
                            , mọi người còn mong muốn được thưởng thức ẩm thực Huế.
                        </div>
                    </div>
                    <!-- Câu c -->
                    <div class="p-5 bg-gray-50/50 rounded-2xl border border-gray-100 flex flex-col md:flex-row md:items-center gap-3">
                        <span class="font-black text-blue-600">c.</span>
                        <div class="flex-grow">
                            Nhiều người thích cốm làng Vòng vì nhiều lí do. Thứ nhất, cốm ở đây rất ngon. 
                            <input type="text" id="inp-163-b3-c" placeholder="Điền từ..." class="px-3 py-1.5 border-2 border-blue-200 rounded-xl outline-none focus:border-blue-500 w-44 font-bold text-center text-blue-950">
                            , cốm còn là hình ảnh gợi liên tưởng đến mùa thu Hà Nội.
                        </div>
                    </div>
                    <!-- Câu d -->
                    <div class="p-5 bg-gray-50/50 rounded-2xl border border-gray-100 flex flex-col md:flex-row md:items-center gap-3">
                        <span class="font-black text-blue-600">d.</span>
                        <div class="flex-grow">
                            Đi du lịch ở miền Tây Nam Bộ, du khách sẽ có những trải nghiệm thú vị với nhiều hoạt động hấp dẫn như: chèo xuồng ba lá, đi cầu khỉ, thăm các chợ nổi. 
                            <input type="text" id="inp-163-b3-d" placeholder="Điền từ..." class="px-3 py-1.5 border-2 border-blue-200 rounded-xl outline-none focus:border-blue-500 w-44 font-bold text-center text-blue-950">
                            , du khách còn có thể thỏa thích hái trái cây khi ghé thăm các miệt vườn.
                        </div>
                    </div>
                </div>

                <!-- Nút nộp kết quả bài 2 và 3 -->
                <div class="flex flex-wrap items-center gap-4 mt-8">
                    <button onclick="window.submitLtvc163Bai23()" class="px-10 py-4 bg-blue-600 text-white font-black text-xl rounded-2xl shadow-lg hover:bg-blue-700 active:scale-95 transition-all flex items-center gap-3">
                        <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-blue-600 font-black text-sm shadow-sm">E</div>
                        <span>NỘP BÀI TẬP 2 & 3</span>
                    </button>
                    <button onclick="window.resetPractice163()" class="px-6 py-4 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition-all">LÀM LẠI</button>
                </div>
                <div id="fb-163-practice-1" class="hidden mt-6 p-6 rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500 text-xl font-bold"></div>
            </div>
        </section>

        <!-- 🏞️ Bài tập 4: Viết đoạn văn ngắn -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">4</div>
                    <h3 class="text-2xl md:text-3xl font-black text-blue-950">Viết đoạn văn (3 – 5 câu) về một địa điểm du lịch hoặc khu di tích lịch sử mà em biết, trong đó có sử dụng từ ngữ nối để liên kết câu.</h3>
                </div>

                <!-- Ảnh minh họa du lịch -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div class="flex flex-col items-center">
                        <img src="hinh_anh/den-hung.png" alt="Đền Hùng (Phú Thọ)" class="w-full max-w-md h-60 object-cover rounded-3xl shadow-md border border-gray-100">
                        <p class="text-gray-500 font-bold mt-2 text-lg">Đền Hùng (Phú Thọ)</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <img src="hinh_anh/da-lat.png" alt="Đà Lạt (Lâm Đồng)" class="w-full max-w-md h-60 object-cover rounded-3xl shadow-md border border-gray-100">
                        <p class="text-gray-500 font-bold mt-2 text-lg">Đà Lạt (Lâm Đồng)</p>
                    </div>
                </div>

                <!-- Input và nút ghi âm, chấm bài -->
                <div class="space-y-4">
                    <div class="flex justify-between items-center mb-2">
                        <label class="block font-black text-gray-800 text-xl">Đoạn văn của em:</label>
                        <button onclick="window.batGiongNoi163()" class="p-2.5 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-all shadow-sm flex items-center gap-2 text-lg font-bold" title="Nhập bằng giọng nói">
                            <span>🎙️ Nói để viết</span>
                        </button>
                    </div>
                    <textarea id="inp-163-b4-text" rows="5" placeholder="Ví dụ: Đà Lạt là một thành phố du lịch tuyệt đẹp của nước ta. Nơi đây có khí hậu mát mẻ quanh năm với nhiều loài hoa rực rỡ. Bên cạnh đó, du khách còn được thưởng thức những món ăn đặc sản vùng cao..." class="w-full p-5 text-xl font-bold rounded-3xl border-2 border-blue-200 focus:border-blue-500 outline-none bg-white"></textarea>
                    
                    <div class="flex flex-wrap items-center gap-4 mt-6">
                        <button onclick="window.nhanXetDoanVan163()" class="px-10 py-4 bg-blue-600 text-white font-black text-xl rounded-2xl shadow-lg hover:bg-blue-700 active:scale-95 transition-all flex items-center gap-3">
                            <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-blue-600 font-black text-sm shadow-sm">E</div>
                            <span>AI CHẤM BÀI</span>
                        </button>
                    </div>
                    <div id="fb-163-ai" class="hidden mt-6 p-8 bg-blue-900 text-white rounded-[28px] shadow-2xl animate-in slide-in-from-top-10 duration-500"></div>
                </div>
            </div>
        </section>
    </div>
    `,
    "quizPool": [
        {
            "question": "Từ ngữ nối là những từ ngữ có tác dụng gì trong đoạn văn?",
            "options": [
                "Làm cho câu văn dài hơn",
                "Liên kết các câu trong đoạn văn với nhau",
                "Miêu tả đặc điểm của sự vật",
                "Thể hiện cảm xúc của người viết"
            ],
            "answer": 1,
            "level": "Dễ"
        },
        {
            "question": "Từ ngữ nối thường đứng ở vị trí nào trong câu?",
            "options": ["Đầu câu", "Giữa câu", "Cuối câu", "Bất kì vị trí nào"],
            "answer": 0,
            "level": "Dễ"
        },
        {
            "question": "Từ nào sau đây là từ ngữ có tác dụng nối?",
            "options": ["Nhỏ bé", "Vì thế", "Chạy nhảy", "Xanh biếc"],
            "answer": 1,
            "level": "Dễ"
        },
        {
            "question": "Trong câu: 'Nhưng khi đi một mình, tôi thích ôm cặp vào ngực.', từ nào đóng vai trò là từ nối?",
            "options": ["Nhưng", "Khi đi", "Một mình", "Tôi thích"],
            "answer": 0,
            "level": "Dễ"
        },
        {
            "question": "Cụm từ nối nào sau đây thường dùng để chỉ trình tự các bước thực hiện?",
            "options": ["Mặt khác", "Đầu tiên, tiếp theo, sau đó, cuối cùng", "Trái lại", "Tuy nhiên"],
            "answer": 1,
            "level": "Dễ"
        },
        {
            "question": "Để thể hiện quan hệ tương phản giữa hai câu, ta nên dùng từ ngữ nối nào?",
            "options": ["Vì thế", "Bên cạnh đó", "Nhưng / Trái lại", "Đồng thời"],
            "answer": 2,
            "level": "Trung bình"
        },
        {
            "question": "Để thể hiện quan hệ nguyên nhân – kết quả giữa hai câu, ta nên dùng từ ngữ nối nào?",
            "options": ["Trái lại", "Vì thế / Do đó", "Thứ nhất", "Hơn nữa"],
            "answer": 1,
            "level": "Trung bình"
        },
        {
            "question": "Từ nối 'Ngoài ra / Bên cạnh đó' có tác dụng gì khi liên kết câu?",
            "options": [
                "Thể hiện sự đối lập",
                "Bổ sung thêm thông tin, ý kiến mới",
                "Giải thích nguyên nhân",
                "Kết luận sự việc"
            ],
            "answer": 1,
            "level": "Trung bình"
        },
        {
            "question": "Câu 'Còn ở miền Nam, hoa mai khoe sắc.' liên kết với câu trước bằng từ nối nào?",
            "options": ["Còn", "Ở", "Hoa mai", "Khoe sắc"],
            "answer": 0,
            "level": "Trung bình"
        },
        {
            "question": "Chọn từ nối phù hợp: 'Hương cốm thơm ngát. [...] vị ngọt bùi của cốm cũng rất hấp dẫn.'",
            "options": ["Vì thế", "Nhưng", "Bên cạnh đó", "Đầu tiên"],
            "answer": 2,
            "level": "Trung bình"
        },
        {
            "question": "Dòng nào gồm các từ nối chỉ quan hệ tương phản, đối lập?",
            "options": [
                "Đầu tiên, tiếp theo, sau đó",
                "Nhưng, tuy nhiên, trái lại",
                "Vì vậy, do đó, cho nên",
                "Ngoài ra, bên cạnh đó, hơn nữa"
            ],
            "answer": 1,
            "level": "Trung bình"
        },
        {
            "question": "Sử dụng từ ngữ nối khi viết đoạn văn giúp ích gì cho người đọc?",
            "options": [
                "Giúp đoạn văn có nhiều từ ngữ hoa mỹ hơn",
                "Giúp người đọc dễ theo dõi mạch lập luận và sự liên kết giữa các ý",
                "Làm đoạn văn có nhịp điệu thơ ca",
                "Tránh viết sai lỗi chính tả"
            ],
            "answer": 1,
            "level": "Khó"
        },
        {
            "question": "Từ 'Thứ nhất' thường đi đôi với từ nối nào ở câu tiếp theo để tạo sự liên kết?",
            "options": ["Tuy nhiên", "Vì thế", "Thứ hai / Bên cạnh đó", "Cuối cùng"],
            "answer": 2,
            "level": "Trung bình"
        },
        {
            "question": "Từ nối 'Rốt cuộc' hoặc 'Tóm lại' thường dùng ở phần nào của đoạn văn?",
            "options": [
                "Mở đầu đoạn văn",
                "Phát triển ý chi tiết",
                "Kết thúc, tóm lược đoạn văn",
                "Bất cứ chỗ nào"
            ],
            "answer": 2,
            "level": "Khó"
        },
        {
            "question": "Trong các câu sau, câu nào sử dụng từ ngữ nối CHƯA hợp lí về mặt ngữ nghĩa?",
            "options": [
                "Hôm nay trời mưa to. Tuy nhiên, tôi vẫn đi học đầy đủ.",
                "Em rất thích ăn cốm. Vì thế, cốm làng Vòng rất dẻo.",
                "Đầu tiên, ta vo sạch gạo. Tiếp theo, ta cho gạo vào nồi.",
                "Đà Lạt rất mát mẻ. Bên cạnh đó, phong cảnh nơi đây cũng rất nên thơ."
            ],
            "answer": 1,
            "level": "Khó"
        }
    ]
};

// --- HÀM TƯƠNG TÁC CHO TAB LUYỆN TẬP (WINDOW GLOBALS) ---

window.submitLtvc163Bai23 = function() {
    // 1. Kiểm tra Bài 2
    const b2_1 = document.getElementById("sel-163-b2-1")?.value;
    const b2_2 = document.getElementById("sel-163-b2-2")?.value;
    const b2_3 = document.getElementById("sel-163-b2-3")?.value;
    const b2_4 = document.getElementById("sel-163-b2-4")?.value;

    // 2. Kiểm tra Bài 3
    const b3_a = document.getElementById("inp-163-b3-a")?.value.trim().toLowerCase() || "";
    const b3_b = document.getElementById("inp-163-b3-b")?.value.trim().toLowerCase() || "";
    const b3_c = document.getElementById("inp-163-b3-c")?.value.trim().toLowerCase() || "";
    const b3_d = document.getElementById("inp-163-b3-d")?.value.trim().toLowerCase() || "";

    const fb = document.getElementById("fb-163-practice-1");

    // Check điền đầy đủ
    if (!b2_1 || !b2_2 || !b2_3 || !b2_4 || !b3_a || !b3_b || !b3_c || !b3_d) {
        fb.classList.remove("hidden", "bg-green-100", "text-green-800", "bg-red-100", "text-red-800");
        fb.classList.add("bg-amber-100", "text-amber-800");
        fb.innerHTML = "⚠️ Em vui lòng hoàn thành tất cả các ô trống ở Bài 2 và Bài 3 trước khi nộp bài nhé!";
        return;
    }

    // Đánh giá bài 2
    const isB2Correct = (b2_1 === "dautien" && b2_2 === "tieptheo" && b2_3 === "saudo" && b2_4 === "cuoicung") ||
                        (b2_1 === "dautien" && b2_2 === "saudo" && b2_3 === "tieptheo" && b2_4 === "cuoicung");

    // Đánh giá bài 3
    const isACorrect = ["còn", "nhưng", "trái lại", "trong khi đó", "ngược lại"].includes(b3_a);
    const isBCorrect = ["bên cạnh đó", "ngoài ra", "hơn nữa", "thêm vào đó", "đồng thời"].includes(b3_b);
    const isCCorrect = ["thứ hai", "bên cạnh đó", "ngoài ra", "hơn nữa", "mặt khác"].includes(b3_c);
    const isDCorrect = ["ngoài ra", "bên cạnh đó", "hơn nữa", "thêm vào đó", "đồng thời"].includes(b3_d);

    const isB3Correct = isACorrect && isBCorrect && isCCorrect && isDCorrect;

    fb.classList.remove("hidden", "bg-amber-100", "text-amber-800");

    if (isB2Correct && isB3Correct) {
        fb.classList.remove("bg-red-100", "text-red-800");
        fb.classList.add("bg-green-100", "text-green-800");
        fb.innerHTML = "🎉 Xuất sắc! Em đã điền chính xác tất cả các từ ngữ nối ở cả Bài tập 2 và Bài tập 3. Các câu văn giờ đây đã được liên kết rất mạch lạc!";
    } else {
        fb.classList.remove("bg-green-100", "text-green-800");
        fb.classList.add("bg-red-100", "text-red-800");
        
        let errorMsg = "❌ Kết quả chưa hoàn toàn chính xác:<br>";
        if (!isB2Correct) errorMsg += "• Bài 2 (Quy trình làm cốm): Sắp xếp các từ chỉ trình tự chưa đúng.<br>";
        if (!isB3Correct) errorMsg += "• Bài 3: Một số từ nối được sử dụng chưa phù hợp với quan hệ nghĩa của câu.<br>";
        errorMsg += "Em hãy kiểm tra lại và làm lại nhé!";
        fb.innerHTML = errorMsg;
    }
};

window.resetPractice163 = function() {
    // Reset bài 2
    ["sel-163-b2-1", "sel-163-b2-2", "sel-163-b2-3", "sel-163-b2-4"].forEach(id => {
        const sel = document.getElementById(id);
        if (sel) sel.value = "";
    });

    // Reset bài 3
    ["inp-163-b3-a", "inp-163-b3-b", "inp-163-b3-c", "inp-163-b3-d"].forEach(id => {
        const inp = document.getElementById(id);
        if (inp) inp.value = "";
    });

    const fb1 = document.getElementById("fb-163-practice-1");
    if (fb1) {
        fb1.classList.add("hidden");
        fb1.innerHTML = "";
    }
};

// Nhận xét đoạn văn bằng AI
window.nhanXetDoanVan163 = async function() {
    const text = document.getElementById("inp-163-b4-text")?.value.trim() || "";
    const fb = document.getElementById("fb-163-ai");

    if (!text) {
        alert("Em hãy viết đoạn văn trước khi yêu cầu AI chấm điểm nhé!");
        return;
    }

    fb.classList.remove("hidden");
    fb.innerHTML = `
        <div class="flex items-center gap-4 mb-4">
            <div class="animate-spin rounded-full h-8 w-8 border-4 border-white border-t-transparent"></div>
            <p class="text-xl font-bold italic">Hệ thống AI đang chấm và nhận xét đoạn văn của em...</p>
        </div>
    `;

    if (typeof askAI === 'function') {
        const prompt = `Hãy đóng vai giáo viên Tiếng Việt chấm bài học sinh lớp 5 viết đoạn văn liên kết câu bằng từ ngữ nối.
        Đề bài: Viết đoạn văn (3 – 5 câu) về một địa điểm du lịch hoặc khu di tích lịch sử mà em biết (Ví dụ Đền Hùng hoặc Đà Lạt), có sử dụng từ ngữ nối để liên kết câu.
        
        Đoạn văn của học sinh:
        "${text}"
        
        Yêu cầu nhận xét:
        1. Đoạn văn có viết về chủ đề địa điểm du lịch / di tích lịch sử không (Ví dụ: Đền Hùng, Đà Lạt,...)?
        2. Đoạn văn có đạt độ dài yêu cầu (3 - 5 câu) không?
        3. Học sinh có sử dụng các từ ngữ nối để liên kết câu không? Chỉ rõ các từ nối đó.
        4. Các từ nối có dùng đúng ngữ cảnh ngữ nghĩa không?
        5. Đánh giá ưu điểm, hạn chế và gợi ý sửa lỗi (nếu có). Thang điểm 10.`;

        await askAI('163-ai', prompt, 'single', 'writing', 163);
    } else {
        fb.innerHTML = "Lỗi: Hệ thống AI chưa sẵn sàng.";
    }
};

// Ghi âm giọng nói
window.batGiongNoi163 = function() {
    const textEl = document.getElementById("inp-163-b4-text");
    if (!textEl) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Trình duyệt của em không hỗ trợ chức năng nhận diện giọng nói. Hãy dùng trình duyệt Chrome nhé!");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "vi-VN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    alert("Hệ thống bắt đầu ghi âm. Em hãy nói rõ ràng để viết bài nhé!");

    recognition.onresult = (event) => {
        const resultText = event.results[0][0].transcript;
        if (textEl.value) {
            textEl.value += " " + resultText;
        } else {
            textEl.value = resultText;
        }
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        alert("Đã xảy ra lỗi khi ghi âm. Em hãy thử lại hoặc tự gõ bàn phím nhé.");
    };

    recognition.start();
};
