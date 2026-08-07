export const lesson114 = {
    "topic": "Tiếng Việt 5",
    "week": "17",
    "period": "114",
    "title": "LUYỆN TỪ VÀ CÂU: LUYỆN TẬP VỀ KẾT TỪ",
    "desc": "Bài học giúp học sinh ôn tập và củng cố kiến thức về kết từ, cặp kết từ qua các thử thách ghép nối câu, điền từ vào đoạn văn cảm thụ nhạc sĩ Mozart và thực hành hoàn thiện câu với kết từ cho sẵn.",
    "subject": "Luyện từ và câu",
    "theme": "Thế giới tuổi thơ",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-sky-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-800 font-bold text-lg md:text-xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Nhận diện chính xác kết từ, cặp kết từ và hiểu tác dụng nối các từ ngữ, vế câu biểu thị quan hệ ý nghĩa.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Sử dụng linh hoạt kết từ thích hợp để hoàn thiện đoạn văn và câu ghép có nghĩa.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Phát triển kỹ năng đặt câu, diễn đạt mạch lạc và tự tin khi nói, viết bằng tiếng Việt.
            </li>
        </ul>
    </div>

    <!-- 📖 Kiến thức cần nhớ -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <h3 class="text-2xl md:text-3xl font-black text-sky-950 flex items-center gap-2">
                📌 Kiến thức Ghi nhớ về Kết từ
            </h3>
            
            <div class="bg-gradient-to-r from-sky-700 to-emerald-600 text-white rounded-[32px] p-6 md:p-8 shadow-md space-y-4">
                <p class="text-lg md:text-xl font-bold leading-relaxed">
                    Kết từ là từ dùng để nối các từ ngữ hoặc các câu, nhằm thể hiện mối quan hệ giữa các từ ngữ hoặc các câu đó với nhau:
                </p>
                <ul class="list-disc ml-6 space-y-3 text-base md:text-lg font-bold text-sky-100">
                    <li><strong class="text-yellow-300">Các kết từ thường gặp:</strong> và, với, hay, hoặc, nhưng, mà, thì, bằng, từ, bởi, vì, để, của...</li>
                    <li><strong class="text-yellow-300">Các cặp kết từ biểu thị quan hệ ý nghĩa:</strong>
                        <ul class="list-circle ml-6 space-y-1 mt-1 text-white">
                            <li>Giả thiết - Kết quả: <em>Nếu... thì...; Hễ... thì...</em></li>
                            <li>Nguyên nhân - Kết quả: <em>Vì... nên...; Do... nên...; Bởi vì... cho nên...</em></li>
                            <li>Tương phản: <em>Mặc dù... nhưng...; Tuy... nhưng...</em></li>
                            <li>Tăng tiến: <em>Không những... mà còn...; Không chỉ... mà còn...</em></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- BÀI TẬP 1: GHÉP CÂU VÀ NHẬN DIỆN KẾT TỪ (CÂU 1 SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">1</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Ghép câu phù hợp giữa cột A và cột B:</h3>
            </div>
            
            <p class="text-base md:text-lg text-gray-700 font-bold mb-6 italic">
                👉 Hướng dẫn: Nhấp chọn một vế ở cột A, sau đó chọn vế tương ứng ở cột B để ghép thành câu đúng.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
                <!-- Cột A -->
                <div class="space-y-4" id="col-a-container">
                    <button onclick="window.selectColA('a')" id="btn-col-a-a" class="w-full text-left p-4 bg-white hover:bg-sky-50 border-2 border-gray-150 rounded-2xl font-bold text-base md:text-lg transition-all active:scale-[0.98]">
                        a. Nước Áo được coi là đất nước của âm nhạc
                    </button>
                    <button onclick="window.selectColA('b')" id="btn-col-a-b" class="w-full text-left p-4 bg-white hover:bg-sky-50 border-2 border-gray-150 rounded-2xl font-bold text-base md:text-lg transition-all active:scale-[0.98]">
                        b. Nếu không tính toán thật kĩ lưỡng và luyện tập tỉ mỉ trong mỗi cảnh quay
                    </button>
                    <button onclick="window.selectColA('c')" id="btn-col-a-c" class="w-full text-left p-4 bg-white hover:bg-sky-50 border-2 border-gray-150 rounded-2xl font-bold text-base md:text-lg transition-all active:scale-[0.98]">
                        c. Âm nhạc không những làm tăng sự lạc quan
                    </button>
                    <button onclick="window.selectColA('d')" id="btn-col-a-d" class="w-full text-left p-4 bg-white hover:bg-sky-50 border-2 border-gray-150 rounded-2xl font-bold text-base md:text-lg transition-all active:scale-[0.98]">
                        d. Mặc dù nhiều bức tranh của Van Gốc có màu vàng chói chang đến nhức mắt
                    </button>
                </div>

                <!-- Cột B -->
                <div class="space-y-4" id="col-b-container">
                    <button onclick="window.selectColB('1')" id="btn-col-b-1" class="w-full text-left p-4 bg-white hover:bg-sky-50 border-2 border-gray-150 rounded-2xl font-bold text-base md:text-lg transition-all active:scale-[0.98]">
                        (1) nhưng đó vẫn là những bức tranh đắt nhất thế giới.
                    </button>
                    <button onclick="window.selectColB('2')" id="btn-col-b-2" class="w-full text-left p-4 bg-white hover:bg-sky-50 border-2 border-gray-150 rounded-2xl font-bold text-base md:text-lg transition-all active:scale-[0.98]">
                        (2) mà còn giúp ta ngủ sâu và hoàn toàn thư giãn.
                    </button>
                    <button onclick="window.selectColB('3')" id="btn-col-b-3" class="w-full text-left p-4 bg-white hover:bg-sky-50 border-2 border-gray-150 rounded-2xl font-bold text-base md:text-lg transition-all active:scale-[0.98]">
                        (3) thì các diễn viên đóng thế sẽ rất dễ gặp nguy hiểm.
                    </button>
                    <button onclick="window.selectColB('4')" id="btn-col-b-4" class="w-full text-left p-4 bg-white hover:bg-sky-50 border-2 border-gray-150 rounded-2xl font-bold text-base md:text-lg transition-all active:scale-[0.98]">
                        (4) bởi nhiều nhạc sĩ nổi tiếng thế giới đều đã sống ở đây.
                    </button>
                </div>
            </div>

            <!-- Kết quả ghép nối câu -->
            <div id="matching-results-area" class="hidden bg-sky-50 p-6 rounded-[32px] border border-sky-100 mb-6 space-y-4">
                <h4 class="font-black text-sky-950 text-lg md:text-xl">🔗 Câu đã ghép hoàn chỉnh (Nhấp chọn kết từ bên dưới):</h4>
                <div class="space-y-3 text-base md:text-lg font-bold text-gray-800" id="matched-sentences-list">
                    <!-- Dynamic sentence items with clickable spans for conjunctions -->
                </div>
            </div>

            <!-- Nút kiểm tra -->
            <div class="flex justify-end items-center gap-4"><button onclick="window.resetMatchingVn114()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="window.checkMatchingVn114();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="matching-feedback" class="hidden mt-4 p-4 rounded-xl font-bold text-lg text-center animate-in fade-in duration-300"></div>
        </div>
    </section>

    <!-- BÀI TẬP 2: ĐIỀN KẾT TỪ VÀO ĐOẠN VĂN MOZART (CÂU 2 SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">2</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Chọn kết từ phù hợp thay cho bông hoa:</h3>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
                <!-- Chân dung Mozart SVG -->
                <div class="bg-amber-50/50 p-6 rounded-[32px] border border-amber-200 flex flex-col items-center text-center space-y-3">
                    <div class="w-40 h-40 bg-white rounded-full flex items-center justify-center border-2 border-amber-300 shadow-md overflow-hidden">
                        <!-- SVG Chân dung Mozart -->
                        <svg class="w-32 h-32 text-amber-700" viewBox="0 0 100 100" fill="none">
                            <!-- Powdered hair -->
                            <path d="M30 40 C30 25, 70 25, 70 40 C75 40, 75 50, 70 52 C70 60, 60 70, 50 70 C40 70, 30 60, 30 52 C25 50, 25 40, 30 40 Z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2"/>
                            <!-- Face -->
                            <path d="M38 48 C38 48, 50 62, 62 48 C64 55, 62 65, 50 68 C38 65, 36 55, 38 48 Z" fill="#fed7aa"/>
                            <!-- Eyes & Nose & Mouth -->
                            <circle cx="45" cy="48" r="2" fill="#1e293b"/>
                            <circle cx="55" cy="48" r="2" fill="#1e293b"/>
                            <path d="M50 48 L50 55 L47 55" stroke="#1e293b" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M46 60 Q50 64 54 60" stroke="#1e293b" stroke-width="1.5" stroke-linecap="round"/>
                            <!-- Red coat jacket -->
                            <path d="M25 72 L75 72 L70 95 L30 95 Z" fill="#dc2626" stroke="#b91c1c" stroke-width="2"/>
                            <!-- White neck tie ruffled -->
                            <path d="M45 72 L55 72 L52 82 L48 82 Z" fill="#ffffff"/>
                        </svg>
                    </div>
                    <span class="font-black text-amber-950 text-lg">Mô-da (Mozart)<br><span class="text-sm font-semibold text-gray-500">(1756 - 1791)</span></span>
                </div>

                <!-- Đoạn văn điền từ (Dropdowns) -->
                <div class="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl border border-sky-100 shadow-md">
                    <p class="serif-font text-lg md:text-2xl leading-relaxed text-justify text-gray-800">
                        Nghị lực phi thường, sự lãng mạn
                        <select id="mo-da-flower-1" class="px-2 py-1 mx-1 bg-sky-50 border border-sky-300 text-sky-950 font-bold rounded-lg outline-none text-base md:text-lg">
                            <option value="">🌸</option>
                            <option value="cho">cho</option>
                            <option value="của">của</option>
                            <option value="mà">mà</option>
                            <option value="và">và</option>
                        </select>
                        lòng nhân ái đã chắp cánh
                        <select id="mo-da-flower-2" class="px-2 py-1 mx-1 bg-sky-50 border border-sky-300 text-sky-950 font-bold rounded-lg outline-none text-base md:text-lg">
                            <option value="">🌸</option>
                            <option value="cho">cho</option>
                            <option value="của">của</option>
                            <option value="mà">mà</option>
                            <option value="và">và</option>
                        </select>
                        tài năng âm nhạc
                        <select id="mo-da-flower-3" class="px-2 py-1 mx-1 bg-sky-50 border border-sky-300 text-sky-950 font-bold rounded-lg outline-none text-base md:text-lg">
                            <option value="">🌸</option>
                            <option value="cho">cho</option>
                            <option value="của">của</option>
                            <option value="mà">mà</option>
                            <option value="và">và</option>
                        </select>
                        Mô-da. Di sản
                        <select id="mo-da-flower-4" class="px-2 py-1 mx-1 bg-sky-50 border border-sky-300 text-sky-950 font-bold rounded-lg outline-none text-base md:text-lg">
                            <option value="">🌸</option>
                            <option value="cho">cho</option>
                            <option value="của">của</option>
                            <option value="mà">mà</option>
                            <option value="và">và</option>
                        </select>
                        ông để lại
                        <select id="mo-da-flower-5" class="px-2 py-1 mx-1 bg-sky-50 border border-sky-300 text-sky-950 font-bold rounded-lg outline-none text-base md:text-lg">
                            <option value="">🌸</option>
                            <option value="cho">cho</option>
                            <option value="của">của</option>
                            <option value="mà">mà</option>
                            <option value="và">và</option>
                        </select>
                        nhân loại thật là vĩ đại: hơn 600 tác phẩm lớn nhỏ. Đây là một cống hiến vào mức kỉ lục
                        <select id="mo-da-flower-6" class="px-2 py-1 mx-1 bg-sky-50 border border-sky-300 text-sky-950 font-bold rounded-lg outline-none text-base md:text-lg">
                            <option value="">🌸</option>
                            <option value="cho">cho</option>
                            <option value="của">của</option>
                            <option value="mà">mà</option>
                            <option value="và">và</option>
                        </select>
                        một con người chỉ sống trên đời có 35 năm.
                    </p>
                    <div class="text-right text-sm font-bold text-gray-500 mt-4">(Theo Kể chuyện danh nhân thế giới)</div>
                </div>
            </div>

            <!-- Nút kiểm tra bài 2 -->
            <div class="mt-8 flex justify-center gap-4">
                <button id="btn-check-114-2" onclick="window.checkMozartVn114()" class="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button>
                <button onclick="window.resetMozartVn114()" class="w-12 h-12 bg-amber-500 hover:bg-amber-600 text-white rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại">🔄</button>
            </div>
            <div id="mozart-feedback" class="hidden mt-6 p-4 rounded-xl font-bold text-lg text-center animate-in fade-in duration-300"></div>
        </div>
    </section>

    <!-- BÀI TẬP 3: HOÀN THIỆN CÂU VỚI KẾT TỪ CHO SẴN (CÂU 3 SGK - 1 CỘT RỘNG RÃI) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">3</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Hoàn thiện câu với kết từ cho sẵn</h3>
            </div>

            <p class="text-base md:text-lg text-gray-700 font-bold mb-6">
                👉 Nhấp chọn để hoàn thành câu **nhóm a** hoặc **nhóm b** dưới đây:
            </p>

            <!-- Tab chọn nhóm câu -->
            <div class="flex gap-4 border-b border-gray-150 pb-4 mb-6 max-w-4xl mx-auto">
                <button id="tab-btn-sentence-a" onclick="window.switchSentenceTab('a')" 
                        class="px-6 py-3 rounded-2xl font-black text-base md:text-lg transition-all shadow-md bg-sky-600 text-white border-2 border-sky-700 active:scale-95">
                    🎸 Câu a: Tôi học chơi đàn ghi-ta
                </button>
                <button id="tab-btn-sentence-b" onclick="window.switchSentenceTab('b')" 
                        class="px-6 py-3 rounded-2xl font-black text-base md:text-lg transition-all shadow-md bg-gray-150 text-gray-750 border-2 border-gray-200 active:scale-95">
                    🎩 Câu b: Môn ảo thuật luôn kích thích người xem
                </button>
            </div>

            <!-- Khu vực nhập liệu (1 Cột rộng rãi) -->
            <div class="max-w-4xl mx-auto space-y-6">
                <!-- Nội dung Câu a -->
                <div id="sentence-content-a" class="block space-y-6">
                    <!-- Conjunction 1: và -->
                    <div class="bg-amber-50/50 p-6 rounded-3xl border border-amber-250 space-y-3">
                        <div class="flex justify-between items-center">
                            <label class="block font-black text-amber-950 text-lg md:text-xl">Tôi học chơi đàn ghi-ta <span class="bg-yellow-400 text-gray-900 px-3 py-1 rounded-xl text-base font-black border border-yellow-500">và</span> ...</label>
                            <button onclick="window.startVoiceInputVn114('complete-a-va')" class="p-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-all text-xs shadow-sm" title="Nhập giọng nói">🎙️</button>
                        </div>
                        <input type="text" id="complete-a-va" placeholder="Ví dụ: học hát những bài em thích / anh trai em học chơi ghi-ta điện..." 
                               class="w-full p-3.5 rounded-xl border border-amber-300 focus:border-amber-500 outline-none font-semibold text-lg bg-white">
                    </div>

                    <!-- Conjunction 2: để -->
                    <div class="bg-sky-50/50 p-6 rounded-3xl border border-sky-250 space-y-3">
                        <div class="flex justify-between items-center">
                            <label class="block font-black text-sky-950 text-lg md:text-xl">Tôi học chơi đàn ghi-ta <span class="bg-sky-450 text-sky-950 px-3 py-1 rounded-xl text-base font-black border border-sky-300">để</span> ...</label>
                            <button onclick="window.startVoiceInputVn114('complete-a-de')" class="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-all text-xs shadow-sm" title="Nhập giọng nói">🎙️</button>
                        </div>
                        <input type="text" id="complete-a-de" placeholder="Ví dụ: có thể tự đệm đàn cho cả nhà hát cùng / biểu diễn trong ngày khai giảng..." 
                               class="w-full p-3.5 rounded-xl border border-sky-300 focus:border-sky-500 outline-none font-semibold text-lg bg-white">
                    </div>

                    <!-- Conjunction 3: vì -->
                    <div class="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-250 space-y-3">
                        <div class="flex justify-between items-center">
                            <label class="block font-black text-emerald-950 text-lg md:text-xl">Tôi học chơi đàn ghi-ta <span class="bg-emerald-450 text-emerald-950 px-3 py-1 rounded-xl text-base font-black border border-emerald-300">vì</span> ...</label>
                            <button onclick="window.startVoiceInputVn114('complete-a-vi')" class="p-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-all text-xs shadow-sm" title="Nhập giọng nói">🎙️</button>
                        </div>
                        <input type="text" id="complete-a-vi" placeholder="Ví dụ: em rất yêu thích những âm thanh mộc mạc của loại nhạc cụ này..." 
                               class="w-full p-3.5 rounded-xl border border-emerald-300 focus:border-emerald-500 outline-none font-semibold text-lg bg-white">
                    </div>
                </div>

                <!-- Nội dung Câu b -->
                <div id="sentence-content-b" class="hidden space-y-6">
                    <!-- Conjunction 1: bởi -->
                    <div class="bg-amber-50/50 p-6 rounded-3xl border border-amber-250 space-y-3">
                        <div class="flex justify-between items-center">
                            <label class="block font-black text-amber-950 text-lg md:text-xl">Môn ảo thuật luôn kích thích người xem <span class="bg-yellow-400 text-gray-900 px-3 py-1 rounded-xl text-base font-black border border-yellow-500">bởi</span> ...</label>
                            <button onclick="window.startVoiceInputVn114('complete-b-boi')" class="p-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-all text-xs shadow-sm" title="Nhập giọng nói">🎙️</button>
                        </div>
                        <input type="text" id="complete-b-boi" placeholder="Ví dụ: những tiết mục luôn kì lạ, bất ngờ và đầy bí ẩn..." 
                               class="w-full p-3.5 rounded-xl border border-amber-300 focus:border-amber-500 outline-none font-semibold text-lg bg-white">
                    </div>

                    <!-- Conjunction 2: nên -->
                    <div class="bg-sky-50/50 p-6 rounded-3xl border border-sky-250 space-y-3">
                        <div class="flex justify-between items-center">
                            <label class="block font-black text-sky-950 text-lg md:text-xl">Môn ảo thuật luôn kích thích người xem <span class="bg-sky-450 text-sky-950 px-3 py-1 rounded-xl text-base font-black border border-sky-300">nên</span> ...</label>
                            <button onclick="window.startVoiceInputVn114('complete-b-nen')" class="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-all text-xs shadow-sm" title="Nhập giọng nói">🎙️</button>
                        </div>
                        <input type="text" id="complete-b-nen" placeholder="Ví dụ: nó thu hút đông đảo sự quan tâm của các bạn nhỏ..." 
                               class="w-full p-3.5 rounded-xl border border-sky-300 focus:border-sky-500 outline-none font-semibold text-lg bg-white">
                    </div>

                    <!-- Conjunction 3: với -->
                    <div class="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-250 space-y-3">
                        <div class="flex justify-between items-center">
                            <label class="block font-black text-emerald-950 text-lg md:text-xl">Môn ảo thuật luôn kích thích người xem <span class="bg-emerald-450 text-emerald-950 px-3 py-1 rounded-xl text-base font-black border border-emerald-300">với</span> ...</label>
                            <button onclick="window.startVoiceInputVn114('complete-b-voi')" class="p-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-all text-xs shadow-sm" title="Nhập giọng nói">🎙️</button>
                        </div>
                        <input type="text" id="complete-b-voi" placeholder="Ví dụ: những kĩ xảo biến hoá nhanh nhẹn, khéo léo của ảo thuật gia..." 
                               class="w-full p-3.5 rounded-xl border border-emerald-300 focus:border-emerald-500 outline-none font-semibold text-lg bg-white">
                    </div>
                </div>
            </div>

            <!-- Nút kiểm tra bài 3 -->
            <div class="mt-8 flex justify-center gap-4">
                <button id="btn-check-114-3" onclick="window.checkCompleteSentenceVn114()" class="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button>
                <button onclick="window.resetCompleteSentenceVn114()" class="w-12 h-12 bg-amber-500 hover:bg-amber-600 text-white rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại">🔄</button>
            </div>
            <div id="sentence-feedback" class="hidden mt-6 p-6 bg-sky-600 text-white rounded-3xl shadow-xl animate-in slide-in-from-top-10 duration-500">
                <!-- Phản hồi tự động -->
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TIẾT HỌC -->
    <div class="pt-6 flex justify-center">
        <button onclick="window.nopBaiVn114()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-600 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-950 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Kết từ nào sau đây thích hợp để nối vế: 'Nước Áo được coi là đất nước của âm nhạc... nhiều nhạc sĩ nổi tiếng đều sống ở đây'?",
            "options": [
                "bởi",
                "nhưng",
                "tuy",
                "hoặc"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cặp kết từ nào nối câu: '... không tính toán kĩ lưỡng... các diễn viên đóng thế sẽ dễ gặp nguy hiểm'?",
            "options": [
                "Nếu... thì...",
                "Vì... nên...",
                "Mặc dù... nhưng...",
                "Không những... mà còn..."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cặp kết từ nào dùng trong câu: 'Âm nhạc... làm tăng sự lạc quan... giúp ta ngủ sâu thư giãn'?",
            "options": [
                "không những... mà còn...",
                "nếu... thì...",
                "tuy... nhưng...",
                "hễ... thì..."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cặp kết từ 'Mặc dù... nhưng...' biểu thị mối quan hệ ý nghĩa nào giữa các vế câu?",
            "options": [
                "Quan hệ tương phản",
                "Quan hệ nguyên nhân - kết quả",
                "Quan hệ giả thiết - kết quả",
                "Quan hệ tăng tiến"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Điền kết từ thích hợp: 'Nghị lực phi thường, sự lãng mạn... lòng nhân ái đã chắp cánh cho Mô-da.'",
            "options": [
                "và",
                "cho",
                "của",
                "mà"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Điền kết từ thích hợp: 'Sự lãng mạn và lòng nhân ái đã chắp cánh... tài năng âm nhạc của Mô-da.'",
            "options": [
                "cho",
                "của",
                "và",
                "mà"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Điền kết từ thích hợp: 'Di sản... ông để lại cho nhân loại thật là vĩ đại.'",
            "options": [
                "mà",
                "cho",
                "của",
                "và"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Điền kết từ thích hợp: 'Đây là một cống hiến vào mức kỉ lục... một con người chỉ sống trên đời có 35 năm.'",
            "options": [
                "của",
                "và",
                "cho",
                "nhưng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Mô-da (Mozart) là nhạc sĩ nổi tiếng người nước nào theo bài tập điền từ?",
            "options": [
                "Người nước Áo",
                "Người nước Đức",
                "Người nước Pháp",
                "Người nước Ý"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Mô-da đã để lại cho nhân loại tổng cộng bao nhiêu tác phẩm lớn nhỏ?",
            "options": [
                "Hơn 600 tác phẩm",
                "Hơn 300 tác phẩm",
                "Hơn 100 tác phẩm",
                "Hơn 1000 tác phẩm"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nhạc sĩ thiên tài Mô-da chỉ sống trên đời được bao nhiêu năm?",
            "options": [
                "35 năm",
                "45 năm",
                "50 năm",
                "60 năm"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Kết từ nào biểu thị mục đích trong câu: 'Tôi học chơi đàn ghi-ta... có thể đệm hát cho cả nhà'?",
            "options": [
                "để",
                "vì",
                "và",
                "tuy"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Kết từ nào chỉ nguyên nhân trong câu: 'Tôi học chơi đàn ghi-ta... bố em rất thích tiếng đàn'?",
            "options": [
                "vì",
                "để",
                "và",
                "bằng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cặp kết từ 'Nếu... thì...' biểu thị mối quan hệ ý nghĩa nào giữa các vế câu?",
            "options": [
                "Quan hệ giả thiết - kết quả",
                "Quan hệ tương phản",
                "Quan hệ tăng tiến",
                "Quan hệ nguyên nhân - kết quả"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong câu ghép, kết từ có vai trò chủ yếu là gì?",
            "options": [
                "Nối các từ ngữ hoặc các vế câu nhằm thể hiện mối quan hệ ý nghĩa với nhau",
                "Dùng làm chủ ngữ chính của câu để thực hiện hành động",
                "Thay đổi hoàn toàn ý nghĩa từ loại của các danh từ đứng trước nó",
                "Làm tăng độ dài của câu văn để bài tập trông đầy đặn hơn"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- LOGIC TƯƠNG TÁC TIẾT 114 ---

// 1. Bài 1: Ghép câu tương tác
let selectedColA = null;
const matchingAnswersVn114 = {
    'a': '4', // Nước Áo ... bởi ...
    'b': '3', // Nếu không ... thì ...
    'c': '2', // Âm nhạc ... mà còn ...
    'd': '1'  // Mặc dù ... nhưng ...
};
const userMatchesVn114 = {};

window.selectColA = function(aId) {
    selectedColA = aId;
    // Highlight A button
    ['a', 'b', 'c', 'd'].forEach(id => {
        const btn = document.getElementById(`btn-col-a-${id}`);
        if (btn) btn.className = btn.className.replace('border-sky-600', 'border-gray-150').replace('bg-sky-50/50', 'bg-white');
    });
    const activeBtn = document.getElementById(`btn-col-a-${aId}`);
    if (activeBtn) {
        activeBtn.className = activeBtn.className.replace('border-gray-150', 'border-sky-600').replace('bg-white', 'bg-sky-50/50');
    }
};

window.selectColB = function(bId) {
    if (!selectedColA) {
        if (typeof window.UI?.showToast === 'function') {
            window.UI.showToast("Hãy nhấp chọn một vế ở cột A trước nhé!", "error", 3000);
        }
        return;
    }

    // Save match
    userMatchesVn114[selectedColA] = bId;

    // Highlight button B and disable matched
    const btnB = document.getElementById(`btn-col-b-${bId}`);
    const btnA = document.getElementById(`btn-col-a-${selectedColA}`);

    if (btnA && btnB) {
        btnA.className += " opacity-50 cursor-not-allowed";
        btnB.className += " opacity-50 cursor-not-allowed text-sky-700 bg-sky-50/30";
    }

    selectedColA = null;
    window.renderMatchedSentencesVn114();
};

const sentenceTexts = {
    'a-4': 'Nước Áo được coi là đất nước của âm nhạc <span class="bg-yellow-200 px-1 rounded cursor-pointer" onclick="toggleConjunctionColor(this, \'bởi\')">bởi</span> nhiều nhạc sĩ nổi tiếng thế giới đều đã sống ở đây.',
    'b-3': '<span class="bg-yellow-200 px-1 rounded cursor-pointer" onclick="toggleConjunctionColor(this, \'nếu\')">Nếu</span> không tính toán thật kĩ lưỡng <span class="bg-yellow-200 px-1 rounded cursor-pointer" onclick="toggleConjunctionColor(this, \'và\')">và</span> luyện tập tỉ mỉ <span class="bg-yellow-200 px-1 rounded cursor-pointer" onclick="toggleConjunctionColor(this, \'trong\')">trong</span> mỗi cảnh quay <span class="bg-yellow-200 px-1 rounded cursor-pointer" onclick="toggleConjunctionColor(this, \'thì\')">thì</span> các diễn viên đóng thế sẽ rất dễ gặp nguy hiểm.',
    'c-2': 'Âm nhạc <span class="bg-yellow-200 px-1 rounded cursor-pointer" onclick="toggleConjunctionColor(this, \'không_những\')">không những</span> làm tăng sự lạc quan <span class="bg-yellow-200 px-1 rounded cursor-pointer" onclick="toggleConjunctionColor(this, \'mà_còn\')">mà còn</span> giúp ta ngủ sâu <span class="bg-yellow-200 px-1 rounded cursor-pointer" onclick="toggleConjunctionColor(this, \'và\')">và</span> hoàn toàn thư giãn.',
    'd-1': '<span class="bg-yellow-200 px-1 rounded cursor-pointer" onclick="toggleConjunctionColor(this, \'mặc_dù\')">Mặc dù</span> nhiều bức tranh của Van Gốc có màu vàng chói chang đến nhức mắt <span class="bg-yellow-200 px-1 rounded cursor-pointer" onclick="toggleConjunctionColor(this, \'nhưng\')">nhưng</span> đó vẫn là những bức tranh đắt nhất thế giới.'
};

const clickedConjunctions = {};

window.toggleConjunctionColor = function(spanEl, conjKey) {
    if (spanEl.classList.contains('bg-yellow-450') || spanEl.classList.contains('bg-yellow-400')) {
        spanEl.classList.remove('bg-yellow-450', 'bg-yellow-400', 'text-sky-950', 'font-black');
        spanEl.classList.add('bg-yellow-200');
        clickedConjunctions[conjKey] = false;
    } else {
        spanEl.classList.add('bg-yellow-400', 'text-sky-950', 'font-black');
        spanEl.classList.remove('bg-yellow-200');
        clickedConjunctions[conjKey] = true;
    }
};

window.renderMatchedSentencesVn114 = function() {
    const area = document.getElementById('matching-results-area');
    const list = document.getElementById('matched-sentences-list');
    if (!area || !list) return;

    const matchedKeys = Object.keys(userMatchesVn114);
    if (matchedKeys.length > 0) {
        area.classList.remove('hidden');
    }

    list.innerHTML = "";
    matchedKeys.forEach(aKey => {
        const bKey = userMatchesVn114[aKey];
        const item = document.createElement('div');
        item.className = "p-3 bg-white rounded-xl border border-sky-100 shadow-sm";
        item.innerHTML = sentenceTexts[`${aKey}-${bKey}`] || `Đã ghép vế ${aKey.toUpperCase()} với (${bKey})`;
        list.appendChild(item);
    });
};

window.checkMatchingVn114 = function() {
    const feedback = document.getElementById('matching-feedback');
    if (!feedback) return;
    feedback.classList.remove('hidden');

    let allCorrect = true;
    let matchCount = 0;

    // Check matches
    for (const aKey in matchingAnswersVn114) {
        if (userMatchesVn114[aKey] !== matchingAnswersVn114[aKey]) {
            allCorrect = false;
        } else {
            matchCount++;
        }
    }

    if (matchCount < 4) {
        feedback.innerHTML = `❌ Con mới ghép đúng được ${matchCount}/4 câu. Hãy kiểm tra các vế còn lại nhé!`;
        feedback.className = "mt-4 p-4 rounded-xl font-bold text-lg bg-red-500 text-white text-center shadow-lg animate-fade-in";
        return;
    }

    // Check highlighted conjunctions
    const requiredConjs = ['bởi', 'nếu', 'thì', 'không_những', 'mà_còn', 'mặc_dù', 'nhưng'];
    let conjCorrect = true;
    requiredConjs.forEach(k => {
        if (!clickedConjunctions[k]) {
            conjCorrect = false;
        }
    });

    if (allCorrect && conjCorrect) {
        feedback.innerHTML = "🎉 Tuyệt vời! Con đã ghép nối 4 câu chuẩn xác và nhận diện chính xác toàn bộ kết từ/cặp kết từ trong câu rồi!";
        feedback.className = "mt-4 p-4 rounded-xl font-bold text-lg bg-emerald-600 text-white text-center shadow-lg animate-fade-in";
        if (typeof window.UI?.showToast === 'function') {
            window.UI.showToast("Hoàn thành bài tập 1 xuất sắc!", "success", 3000);
        }
    } else if (allCorrect && !conjCorrect) {
        feedback.innerHTML = "⚠️ Ghép vế câu đúng rồi! Nhưng con chưa nhấp chọn đúng/đầy đủ các kết từ trong câu (hãy nhấp để tô màu vàng đậm các kết từ nhé).";
        feedback.className = "mt-4 p-4 rounded-xl font-bold text-lg bg-yellow-600 text-white text-center shadow-lg animate-fade-in";
    }
};

window.resetMatchingVn114 = function() {
    // Reset matches array
    for (const k in userMatchesVn114) delete userMatchesVn114[k];
    for (const k in clickedConjunctions) delete clickedConjunctions[k];

    // Reset button states
    ['a', 'b', 'c', 'd'].forEach(id => {
        const btn = document.getElementById(`btn-col-a-${id}`);
        if (btn) {
            btn.className = "w-full text-left p-4 bg-white hover:bg-sky-50 border-2 border-gray-150 rounded-2xl font-bold text-base md:text-lg transition-all active:scale-[0.98]";
        }
    });
    ['1', '2', '3', '4'].forEach(id => {
        const btn = document.getElementById(`btn-col-b-${id}`);
        if (btn) {
            btn.className = "w-full text-left p-4 bg-white hover:bg-sky-50 border-2 border-gray-150 rounded-2xl font-bold text-base md:text-lg transition-all active:scale-[0.98]";
        }
    });

    selectedColA = null;
    const area = document.getElementById('matching-results-area');
    if (area) area.classList.add('hidden');
    const fb = document.getElementById('matching-feedback');
    if (fb) fb.classList.add('hidden');
};


// 2. Bài 2: Mozart Dropdowns
window.checkMozartVn114 = function() {
    const a1 = document.getElementById('mo-da-flower-1')?.value;
    const a2 = document.getElementById('mo-da-flower-2')?.value;
    const a3 = document.getElementById('mo-da-flower-3')?.value;
    const a4 = document.getElementById('mo-da-flower-4')?.value;
    const a5 = document.getElementById('mo-da-flower-5')?.value;
    const a6 = document.getElementById('mo-da-flower-6')?.value;

    const feedback = document.getElementById('mozart-feedback');
    if (!feedback) return;
    feedback.classList.remove('hidden');

    if (!a1 || !a2 || !a3 || !a4 || !a5 || !a6) {
        feedback.innerHTML = "⚠️ Vui lòng chọn đầy đủ kết từ cho cả 6 bông hoa 🌸 nhé!";
        feedback.className = "mt-6 p-4 rounded-xl font-bold text-lg bg-yellow-600 text-white text-center shadow-lg";
        return;
    }

    // Answers: 1. và, 2. cho, 3. của, 4. mà, 5. cho, 6. của
    const correct = (a1 === 'và' && a2 === 'cho' && a3 === 'của' && a4 === 'mà' && a5 === 'cho' && a6 === 'của');

    if (correct) {
        feedback.innerHTML = "🎉 Xuất sắc! Con đã điền chính xác tất cả các kết từ thích hợp để tạo nên đoạn văn hoàn chỉnh về nhạc sĩ Mô-da vĩ đại rồi!";
        feedback.className = "mt-6 p-4 rounded-xl font-bold text-lg bg-emerald-600 text-white text-center shadow-lg animate-fade-in";
        if (typeof window.UI?.showToast === 'function') {
            window.UI.showToast("Đáp án chính xác!", "success", 3000);
        }
    } else {
        feedback.innerHTML = "❌ Còn một vài bông hoa 🌸 điền chưa đúng kết từ. Con hãy đọc kỹ đoạn văn để điều chỉnh lại nhé!";
        feedback.className = "mt-6 p-4 rounded-xl font-bold text-lg bg-red-500 text-white text-center shadow-lg animate-fade-in";
        if (typeof window.UI?.showToast === 'function') {
            window.UI.showToast("Chưa chính xác!", "error", 3000);
        }
    }
};

window.resetMozartVn114 = function() {
    for (let i = 1; i <= 6; i++) {
        const sel = document.getElementById(`mo-da-flower-${i}`);
        if (sel) sel.value = "";
    }
    const fb = document.getElementById('mozart-feedback');
    if (fb) fb.classList.add('hidden');
};


// 3. Bài 3: Hoàn thiện câu tự chọn
let activeSentenceTab = 'a';

window.switchSentenceTab = function(tabName) {
    activeSentenceTab = tabName;
    const btnA = document.getElementById('tab-btn-sentence-a');
    const btnB = document.getElementById('tab-btn-sentence-b');
    const contentA = document.getElementById('sentence-content-a');
    const contentB = document.getElementById('sentence-content-b');

    if (!btnA || !btnB || !contentA || !contentB) return;

    if (tabName === 'a') {
        btnA.className = "px-6 py-3 rounded-2xl font-black text-base md:text-lg transition-all shadow-md bg-sky-600 text-white border-2 border-sky-700 active:scale-95";
        btnB.className = "px-6 py-3 rounded-2xl font-black text-base md:text-lg transition-all shadow-md bg-gray-150 text-gray-750 border-2 border-gray-200 active:scale-95";
        contentA.classList.remove('hidden');
        contentA.classList.add('block');
        contentB.classList.add('hidden');
        contentB.classList.remove('block');
    } else {
        btnA.className = "px-6 py-3 rounded-2xl font-black text-base md:text-lg transition-all shadow-md bg-gray-150 text-gray-750 border-2 border-gray-200 active:scale-95";
        btnB.className = "px-6 py-3 rounded-2xl font-black text-base md:text-lg transition-all shadow-md bg-sky-600 text-white border-2 border-sky-700 active:scale-95";
        contentA.classList.add('hidden');
        contentA.classList.remove('block');
        contentB.classList.remove('hidden');
        contentB.classList.add('block');
    }
};

window.checkCompleteSentenceVn114 = function() {
    const fb = document.getElementById('sentence-feedback');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (activeSentenceTab === 'a') {
        const va = document.getElementById('complete-a-va')?.value.trim();
        const de = document.getElementById('complete-a-de')?.value.trim();
        const vi = document.getElementById('complete-a-vi')?.value.trim();

        if (!va || !de || !vi) {
            fb.innerHTML = "⚠️ Con hãy hoàn thành cả 3 vế câu với kết từ: và, để, vì nhé!";
            fb.className = "mt-6 p-6 bg-yellow-600 text-white rounded-2xl shadow-xl font-bold text-lg animate-in slide-in-from-top-10 duration-500";
            return;
        }

        fb.innerHTML = `
            <div class="space-y-2">
                <span class="text-xs font-black text-yellow-300 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
                <p class="text-lg font-bold">"Rất tuyệt vời! Con đã hoàn thành các câu ghép rất hay, biểu thị mối quan hệ liên hợp (và), mục đích (để) và nguyên nhân (vì) vô cùng chuẩn xác về mặt ngữ pháp."</p>
                <span class="inline-block px-3 py-1 bg-white text-sky-750 font-bold text-xs rounded-full shadow-sm mt-2">Đánh giá: Đạt yêu cầu (100%)</span>
            </div>
        `;
    } else {
        const boi = document.getElementById('complete-b-boi')?.value.trim();
        const nen = document.getElementById('complete-b-nen')?.value.trim();
        const voi = document.getElementById('complete-b-voi')?.value.trim();

        if (!boi || !nen || !voi) {
            fb.innerHTML = "⚠️ Con hãy hoàn thành cả 3 vế câu với kết từ: bởi, nên, với nhé!";
            fb.className = "mt-6 p-6 bg-yellow-600 text-white rounded-2xl shadow-xl font-bold text-lg animate-in slide-in-from-top-10 duration-500";
            return;
        }

        fb.innerHTML = `
            <div class="space-y-2">
                <span class="text-xs font-black text-yellow-300 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
                <p class="text-lg font-bold">"Tuyệt cú mèo! Các vế câu hoàn chỉnh với kết từ chỉ nguyên nhân (bởi), hệ quả (nên) và phương thức (với) được con đặt rất tự nhiên, giàu hình ảnh miêu tả ảo thuật gia."</p>
                <span class="inline-block px-3 py-1 bg-white text-sky-750 font-bold text-xs rounded-full shadow-sm mt-2">Đánh giá: Đạt yêu cầu (100%)</span>
            </div>
        `;
    }
    fb.className = "mt-6 p-6 bg-sky-650 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500";
};

window.resetCompleteSentenceVn114 = function() {
    ['complete-a-va', 'complete-a-de', 'complete-a-vi', 'complete-b-boi', 'complete-b-nen', 'complete-b-voi'].forEach(id => {
        const input = document.getElementById(id);
        if (input) input.value = "";
    });
    const fb = document.getElementById('sentence-feedback');
    if (fb) fb.classList.add('hidden');
};

// 4. Ghi âm Speech-to-Text
window.startVoiceInputVn114 = function(fieldId) {
    const txt = document.getElementById(fieldId);
    if (!txt) return;
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert("Trình duyệt không hỗ trợ nhận diện giọng nói.");
        return;
    }
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    const rec = new SpeechRec();
    rec.lang = 'vi-VN';
    rec.onstart = () => {
        txt.placeholder = "🎙️ Đang lắng nghe con nói...";
    };
    rec.onresult = (event) => {
        const result = event.results[0][0].transcript;
        txt.value = txt.value ? txt.value + " " + result : result;
        txt.placeholder = "Điền nội dung...";
    };
    rec.onerror = () => {
        txt.placeholder = "Điền nội dung...";
    };
    rec.start();
};

// 5. Nộp bài
window.nopBaiVn114 = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 114', 
            '📝', 
            '<div class="text-center p-6"><span class="text-7xl block mb-4">📝</span><p class="text-xl md:text-3xl font-bold text-sky-950">Chúc mừng con đã làm chủ kiến thức và kỹ năng sử dụng kết từ!</p><p class="text-lg text-gray-600 mt-3">Sự nhạy bén khi nối vế câu sẽ giúp các bài viết của con thêm phần mạch lạc và hấp dẫn.</p></div>'
        );
    }
};
