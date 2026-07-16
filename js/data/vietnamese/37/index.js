export const lesson37 = {
    "topic": "Tiếng Việt 5",
    "week": "6",
    "period": "37",
    "title": "LTVC: LUYỆN TẬP VỀ TỪ ĐỒNG NGHĨA",
    "desc": "Bài học giúp học sinh thực hành xác định từ đồng nghĩa trong ngữ cảnh thành ngữ, thơ ca và đoạn văn, đồng thời vận dụng viết đoạn văn tả cảnh thiên nhiên sinh động và giàu hình ảnh.",
    "subject": "Tiếng Việt",
    "theme": "Măng non",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-sky-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Tìm đúng các từ thích hợp để hoàn thành các thành ngữ chứa từ đồng nghĩa.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Xác định các từ đồng nghĩa trong đoạn thơ của nhà thơ Trần Đăng Khoa.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Lựa chọn từ đồng nghĩa thích hợp nhất để hoàn chỉnh đoạn văn tả cảnh mưa xuân.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Thực hành viết đoạn văn tả cảnh thiên nhiên có sử dụng các từ đồng nghĩa phù hợp.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG: GHẾP CẶP ĐỒNG NGHĨA -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Ghép cặp đồng nghĩa</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy ghép các cặp từ có nghĩa giống nhau hoặc gần giống nhau dưới đây bằng cách bấm chọn 1 từ ở cột trái và 1 từ ở cột phải:</p>
        
        <!-- Khung ghép từ hỗ trợ vẽ đường nối -->
        <div id="matching-wrapper" class="relative max-w-3xl mx-auto p-6 bg-sky-50/20 rounded-[32px] border border-sky-100">
            <div class="grid grid-cols-2 gap-16 md:gap-24 relative z-10">
                <!-- Cột trái -->
                <div class="space-y-4" id="match-left">
                    <button onclick="selectMatchCard37(this, 'cundu', 'left')" data-match="cundu" class="w-full p-4 border-2 border-gray-100 bg-white rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95">chăm chỉ</button>
                    <button onclick="selectMatchCard37(this, 'baola', 'left')" data-match="baola" class="w-full p-4 border-2 border-gray-100 bg-white rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95">bao la</button>
                    <button onclick="selectMatchCard37(this, 'phuhuynh', 'left')" data-match="phuhuynh" class="w-full p-4 border-2 border-gray-100 bg-white rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95">cha mẹ</button>
                    <button onclick="selectMatchCard37(this, 'datnuoc', 'left')" data-match="datnuoc" class="w-full p-4 border-2 border-gray-100 bg-white rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95">giang sơn</button>
                </div>
                <!-- Cột phải -->
                <div class="space-y-4" id="match-right">
                    <button onclick="selectMatchCard37(this, 'datnuoc', 'right')" data-match="datnuoc" class="w-full p-4 border-2 border-gray-100 bg-white rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95">đất nước</button>
                    <button onclick="selectMatchCard37(this, 'phuhuynh', 'right')" data-match="phuhuynh" class="w-full p-4 border-2 border-gray-100 bg-white rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95">phụ huynh</button>
                    <button onclick="selectMatchCard37(this, 'cundu', 'right')" data-match="cundu" class="w-full p-4 border-2 border-gray-100 bg-white rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95">cần cù</button>
                    <button onclick="selectMatchCard37(this, 'baola', 'right')" data-match="baola" class="w-full p-4 border-2 border-gray-100 bg-white rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95">bát ngát</button>
                </div>
            </div>
        </div>
        <div id="fb-vn37-kd" class="hidden p-4 rounded-xl text-lg font-bold text-center mt-2 shadow-md"></div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto py-6 font-medium">
    
    <!-- 📚 BÀI TẬP 1 -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">1</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Bài tập 1: Điền thành ngữ thích hợp</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Tìm từ đồng nghĩa thích hợp thay cho mỗi bông hoa đỏ dưới đây để hoàn chỉnh các thành ngữ. Em có thể kéo từ kho từ hoặc bấm chọn từ rồi bấm chọn ô trống:</p>
            </div>
        </div>

        <!-- Kho từ dùng chung -->
        <div class="bg-sky-50 p-6 rounded-[24px] border border-sky-100 shadow-inner">
            <p class="text-sky-900 font-black text-lg mb-3 flex items-center gap-2">
                <span>🏷️</span> Kho từ gợi ý:
            </p>
            <div class="flex flex-wrap gap-4 justify-center" id="word-bank-37">
                <button onclick="selectDraggableWord37(this)" data-value="lành" class="px-6 py-3 bg-white text-gray-800 text-xl font-bold rounded-xl shadow-md border-2 border-gray-100 hover:border-sky-400 active:scale-95 transition-all" draggable="true" ondragstart="drag37(event)">lành</button>
                <button onclick="selectDraggableWord37(this)" data-value="lượt" class="px-6 py-3 bg-white text-gray-800 text-xl font-bold rounded-xl shadow-md border-2 border-gray-100 hover:border-sky-400 active:scale-95 transition-all" draggable="true" ondragstart="drag37(event)">lượt</button>
                <button onclick="selectDraggableWord37(this)" data-value="yên" class="px-6 py-3 bg-white text-gray-800 text-xl font-bold rounded-xl shadow-md border-2 border-gray-100 hover:border-sky-400 active:scale-95 transition-all" draggable="true" ondragstart="drag37(event)">yên</button>
                <button onclick="selectDraggableWord37(this)" data-value="ước" class="px-6 py-3 bg-white text-gray-800 text-xl font-bold rounded-xl shadow-md border-2 border-gray-100 hover:border-sky-400 active:scale-95 transition-all" draggable="true" ondragstart="drag37(event)">ước</button>
                <button onclick="selectDraggableWord37(this)" data-value="lớn" class="px-6 py-3 bg-white text-gray-800 text-xl font-bold rounded-xl shadow-md border-2 border-gray-100 hover:border-sky-400 active:scale-95 transition-all" draggable="true" ondragstart="drag37(event)">lớn</button>
                <button onclick="selectDraggableWord37(this)" data-value="nơi" class="px-6 py-3 bg-white text-gray-800 text-xl font-bold rounded-xl shadow-md border-2 border-gray-100 hover:border-sky-400 active:scale-95 transition-all" draggable="true" ondragstart="drag37(event)">nơi</button>
            </div>
        </div>

        <!-- Danh sách các thành ngữ -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 font-bold text-gray-800 text-xl md:text-2xl">
            <!-- Câu a -->
            <div class="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm flex items-center gap-3">
                <span class="text-sky-900 font-black">a.</span>
                <span>Ngày</span>
                <span id="slot37-1" onclick="dropToSlot37(this)" ondragover="allowDrop37(event)" ondrop="drop37(event, this)" class="inline-flex items-center justify-center min-w-[137px] h-12 border-2 border-dashed border-sky-100 bg-sky-50/30 rounded-xl text-sky-800 px-4 transition-all cursor-pointer">✿</span>
                <span>tháng tốt</span>
            </div>

            <!-- Câu b -->
            <div class="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm flex items-center gap-3">
                <span class="text-sky-900 font-black">b.</span>
                <span>Năm lần bảy</span>
                <span id="slot37-2" onclick="dropToSlot37(this)" ondragover="allowDrop37(event)" ondrop="drop37(event, this)" class="inline-flex items-center justify-center min-w-[137px] h-12 border-2 border-dashed border-sky-100 bg-sky-50/30 rounded-xl text-sky-800 px-4 transition-all cursor-pointer">✿</span>
            </div>

            <!-- Câu c -->
            <div class="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm flex items-center gap-3">
                <span class="text-sky-900 font-black">c.</span>
                <span>Sóng</span>
                <span id="slot37-3" onclick="dropToSlot37(this)" ondragover="allowDrop37(event)" ondrop="drop37(event, this)" class="inline-flex items-center justify-center min-w-[137px] h-12 border-2 border-dashed border-sky-100 bg-sky-50/30 rounded-xl text-sky-800 px-4 transition-all cursor-pointer">✿</span>
                <span>biển lặng</span>
            </div>

            <!-- Câu d -->
            <div class="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm flex items-center gap-3">
                <span class="text-sky-900 font-black">d.</span>
                <span>Cầu được</span>
                <span id="slot37-4" onclick="dropToSlot37(this)" ondragover="allowDrop37(event)" ondrop="drop37(event, this)" class="inline-flex items-center justify-center min-w-[137px] h-12 border-2 border-dashed border-sky-100 bg-sky-50/30 rounded-xl text-sky-800 px-4 transition-all cursor-pointer">✿</span>
                <span>thấy</span>
            </div>

            <!-- Câu e -->
            <div class="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm flex items-center gap-3">
                <span class="text-sky-900 font-black">e.</span>
                <span>Dao to búa</span>
                <span id="slot37-5" onclick="dropToSlot37(this)" ondragover="allowDrop37(event)" ondrop="drop37(event, this)" class="inline-flex items-center justify-center min-w-[137px] h-12 border-2 border-dashed border-sky-100 bg-sky-50/30 rounded-xl text-sky-800 px-4 transition-all cursor-pointer">✿</span>
            </div>

            <!-- Câu g -->
            <div class="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm flex items-center gap-3">
                <span class="text-sky-900 font-black">g.</span>
                <span>Đi đến</span>
                <span id="slot37-6" onclick="dropToSlot37(this)" ondragover="allowDrop37(event)" ondrop="drop37(event, this)" class="inline-flex items-center justify-center min-w-[137px] h-12 border-2 border-dashed border-sky-100 bg-sky-50/30 rounded-xl text-sky-800 px-4 transition-all cursor-pointer">✿</span>
                <span>về đến chốn</span>
            </div>
        </div>

        <div class="flex flex-col items-center gap-2 pt-4">
            <button onclick="checkIdioms37()" class="w-16 h-16 bg-sky-600 text-white rounded-2xl font-black text-xl md:text-3xl flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all">E</button>
            <span class="text-xs font-bold text-sky-800 uppercase tracking-widest">Đánh giá</span>
        </div>
        <div id="fb-vn37-ex1" class="hidden p-4 rounded-xl text-lg font-bold text-center mt-2 shadow-sm"></div>
    </section>

    <!-- 📚 BÀI TẬP 2 -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">2</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Bài tập 2: Tìm từ đồng nghĩa trong đoạn thơ</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Đọc đoạn thơ dưới đây và lựa chọn từ đồng nghĩa chính xác nhất với các từ in đậm:</p>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Đoạn thơ của Trần Đăng Khoa -->
            <div class="bg-emerald-50/40 p-6 md:p-8 rounded-3xl border border-emerald-100 flex flex-col justify-center">
                <div class="serif-font text-center text-2xl md:text-3xl font-bold text-gray-800 leading-loose italic space-y-2">
                    <p>Sân nhà em <strong class="text-emerald-800 not-italic border-b-2 border-dashed border-emerald-100">nho nhỏ</strong></p>
                    <p>Nhưng em yêu thiết tha</p>
                    <p><strong class="text-emerald-800 not-italic border-b-2 border-dashed border-emerald-100">Trông</strong> ra ngõ mênh mông</p>
                    <p>Thấy rực màu hoa đỏ.</p>
                </div>
                <p class="text-right font-sans text-sm text-gray-800 mt-4 italic mr-4">Trần Đăng Khoa</p>
            </div>

            <!-- Câu hỏi lựa chọn từ đồng nghĩa -->
            <div class="space-y-6 font-bold text-gray-800">
                <!-- Từ nho nhỏ -->
                <div class="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm space-y-3">
                    <label class="block text-lg font-black text-sky-800">Từ đồng nghĩa với từ "nho nhỏ":</label>
                    <select id="select-vn37-ex2-nhonho" class="w-full p-4 border-2 border-gray-100 rounded-xl bg-white text-xl text-gray-800 outline-none focus:border-sky-500">
                        <option value="">-- Chọn từ đồng nghĩa --</option>
                        <option value="lon">to lớn</option>
                        <option value="nhonhan">nhỏ nhắn</option>
                        <option value="dai">dài ngoằng</option>
                    </select>
                </div>

                <!-- Từ trông -->
                <div class="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm space-y-3">
                    <label class="block text-lg font-black text-sky-800">Từ đồng nghĩa với từ "trông":</label>
                    <select id="select-vn37-ex2-trong" class="w-full p-4 border-2 border-gray-100 rounded-xl bg-white text-xl text-gray-800 outline-none focus:border-sky-500">
                        <option value="">-- Chọn từ đồng nghĩa --</option>
                        <option value="nghe">nghe</option>
                        <option value="nhin">nhìn</option>
                        <option value="ngui">ngửi</option>
                    </select>
                </div>

                <!-- Từ mênh mông -->
                <div class="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm space-y-3">
                    <label class="block text-lg font-black text-sky-800">Từ đồng nghĩa với từ "mênh mông":</label>
                    <select id="select-vn37-ex2-menhmong" class="w-full p-4 border-2 border-gray-100 rounded-xl bg-white text-xl text-gray-800 outline-none focus:border-sky-500">
                        <option value="">-- Chọn từ đồng nghĩa --</option>
                        <option value="baola">bao la</option>
                        <option value="hep">chật hẹp</option>
                        <option value="gapghenh">gập ghềnh</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center gap-2 pt-4">
            <button onclick="checkPoetrySynonyms37()" class="w-16 h-16 bg-sky-600 text-white rounded-2xl font-black text-xl md:text-3xl flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all">E</button>
            <span class="text-xs font-bold text-sky-800 uppercase tracking-widest">Đánh giá</span>
        </div>
        <div id="fb-vn37-ex2" class="hidden p-4 rounded-xl text-lg font-bold text-center mt-2 shadow-sm"></div>
    </section>

    <!-- 📚 BÀI TẬP 3 -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">3</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Bài tập 3: Hoàn thành đoạn văn</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Chọn từ thích hợp trong ngoặc đơn để hoàn thành đoạn văn dưới đây:</p>
            </div>
        </div>

        <!-- Đoạn văn điền từ -->
        <div class="p-8 bg-sky-50/20 rounded-[32px] border border-sky-100 shadow-inner">
            <h4 class="text-lg md:text-2xl font-black text-center text-gray-800 mb-6">Mưa mùa xuân</h4>
            <p class="serif-font text-gray-800 text-xl md:text-2xl leading-[2.2] text-justify space-y-4">
                <span>Mưa mùa xuân xôn xao, phơi phới. Những hạt mưa</span>
                
                <select id="select-vn37-ex3-1" class="px-2 py-1.5 border border-sky-100 rounded-lg bg-white font-bold text-sky-800 focus:outline-none focus:border-sky-500">
                    <option value="">...</option>
                    <option value="be_nho">bé nhỏ</option>
                    <option value="be_mon">bé mọn</option>
                    <option value="be_con">bé con</option>
                </select>
                
                <span>mềm mại, rơi mà như nhảy múa. Hoa xoan, hoa bưởi rụng đầy lối đi. Đất trút bỏ vẻ</span>
                
                <select id="select-vn37-ex3-2" class="px-2 py-1.5 border border-sky-100 rounded-lg bg-white font-bold text-sky-800 focus:outline-none focus:border-sky-500">
                    <option value="">...</option>
                    <option value="kho_can">khô cằn</option>
                    <option value="kho_khan">khô khan</option>
                    <option value="kho_khoc">khô khốc</option>
                </select>
                
                <span>của những ngày đông để mặt đất nở ra lớp cỏ non xanh mướt. Không khí lúc nào cũng</span>
                
                <select id="select-vn37-ex3-3" class="px-2 py-1.5 border border-sky-100 rounded-lg bg-white font-bold text-sky-800 focus:outline-none focus:border-sky-500">
                    <option value="">...</option>
                    <option value="trong_lanh">trong lành</option>
                    <option value="trong_sang">trong sáng</option>
                    <option value="trong_xanh">trong xanh</option>
                </select>
                
                <span>, thoáng đãng. Cơn mưa thế mà có sức mạnh kì diệu. Nó gieo lên vạn vật luồng ánh sáng</span>
                
                <select id="select-vn37-ex3-4" class="px-2 py-1.5 border border-sky-100 rounded-lg bg-white font-bold text-sky-800 focus:outline-none focus:border-sky-500">
                    <option value="">...</option>
                    <option value="diu_mem">dịu mềm</option>
                    <option value="diu_nhe">dịu nhẹ</option>
                    <option value="diu_ngoat">dịu ngọt</option>
                </select>
                
                <span>lấp lánh và khơi dậy</span>
                
                <select id="select-vn37-ex3-5" class="px-2 py-1.5 border border-sky-100 rounded-lg bg-white font-bold text-sky-800 focus:outline-none focus:border-sky-500">
                    <option value="">...</option>
                    <option value="suc_song">sức sống</option>
                    <option value="suc_luc">sức lực</option>
                    <option value="suc_voc">sức vóc</option>
                </select>
                
                <span>dạt dào của vạn vật khi mùa xuân về.</span>
            </p>
            <p class="text-right font-sans text-sm text-gray-800 mt-4 italic">(Theo Nguyễn Thị Thu Trang)</p>
        </div>

        <div class="flex flex-col items-center gap-2 pt-4">
            <button onclick="checkSpringRain37()" class="w-16 h-16 bg-sky-600 text-white rounded-2xl font-black text-xl md:text-3xl flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all">E</button>
            <span class="text-xs font-bold text-sky-800 uppercase tracking-widest">Đánh giá</span>
        </div>
        <div id="fb-vn37-ex3" class="hidden p-4 rounded-xl text-lg font-bold text-center mt-2 shadow-sm"></div>
    </section>

    <!-- 📚 BÀI TẬP 4 -->
    <section class="bg-gradient-to-br from-sky-600 to-sky-500 text-white p-6 md:p-8 rounded-[36px] shadow-xl space-y-6">
        <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-white text-sky-800 rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">4</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-white">Bài tập 4: Thực hành viết đoạn văn tả cảnh đẹp thiên nhiên</h3>
                <p class="text-xs font-bold text-sky-800 mt-1">Viết đoạn văn ngắn tả cảnh đẹp thiên nhiên (4-5 câu) có dùng 2-3 từ đồng nghĩa:</p>
            </div>
        </div>

        <div class="bg-white/10 backdrop-blur-md p-6 rounded-[28px] border border-white/20 shadow-inner space-y-4">
            <div class="space-y-2">
                <label class="text-sky-800 text-sm font-bold block flex items-center gap-2">
                    <span>✍️</span> Bài làm của em:
                </label>
                <textarea id="input-vn37-ex4-textarea" rows="5" placeholder="Ví dụ: Cánh đồng lúa quê em rộng mênh mông, bát ngát dưới ánh nắng sớm. Những bông lúa vàng trĩu hạt tỏa hương thơm ngan ngát..." class="w-full p-4 border border-white/10 rounded-2xl bg-white text-gray-800 text-xl md:text-2xl focus:ring-2 focus:ring-sky-600 outline-none shadow-sm leading-relaxed"></textarea>
            </div>

            <!-- E button -->
            <div class="flex flex-col items-center gap-2 pt-2">
                <button onclick="gradeParagraph37()" class="w-20 h-20 bg-white text-sky-800 rounded-[2rem] font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all ring-4 ring-white/10">E</button>
                <span class="text-xs font-bold text-sky-800 uppercase tracking-widest">AI Thầy E nhận xét & Chấm điểm</span>
            </div>
            <div id="fb-vn37-ex4" class="hidden p-5 rounded-2xl text-base font-bold shadow-md transition-all duration-337"></div>
        </div>

        <div class="pt-6 flex justify-center">
            <button onclick="submitVn37Global()" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-sky-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
                <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-emerald-900 font-black text-xs shadow-sm">✓</div>
                <span>HOÀN THÀNH TIẾT HỌC</span>
            </button>
        </div>
    </section>
</div>

<!-- Modal Thông báo kết quả / Phản hồi Thầy E -->
<div id="vn37-feedback-overlay" class="hidden fixed inset-0 bg-slate-100/60 backdrop-blur-sm z-[9937] flex items-center justify-center p-4 animate-in fade-in duration-337">
  <div class="bg-white rounded-[32px] shadow-2xl max-w-xl w-full p-8 relative overflow-hidden border-4 border-sky-100 animate-in zoom-in-95 duration-337">
    <div id="vn37-feedback-header" class="text-sky-900 font-black text-2xl md:text-3xl mb-4 flex items-center gap-3">
      <span id="vn37-feedback-icon" class="text-2xl md:text-4xl">💡</span>
      <span id="vn37-feedback-title" class="uppercase">PHẢN HỒI</span>
    </div>
    <div id="vn37-feedback-body" class="text-slate-800 text-lg md:text-xl leading-relaxed font-bold">
      <!-- Nội dung đánh giá -->
    </div>
    <button onclick="closeFeedback37()" class="mt-8 w-full bg-sky-600 hover:bg-sky-600 text-white font-black py-4 rounded-xl text-lg transition-all shadow-md active:scale-95">Đã rõ ạ! ❤️</button>
  </div>
</div>
`,
    "quizPool": [
        {
            "question": "Tìm từ đồng nghĩa với từ 'chăm chỉ'?",
            "options": [
                "Cần cù",
                "Hiền lành",
                "Khéo léo",
                "Nhanh nhẹn"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Thành ngữ nào dưới đây chứa cặp từ đồng nghĩa?",
            "options": [
                "Yêu nước thương nòi",
                "Sóng yên biển lặng",
                "Lên thác xuống ghềnh",
                "Chân cứng đá mềm"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Trong các từ sau, từ nào đồng nghĩa với 'bao la'?",
            "options": [
                "Chật hẹp",
                "Bát ngát",
                "Cao vút",
                "Sâu thẳm"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ đồng nghĩa với 'giang sơn' là gì?",
            "options": [
                "Sông ngòi",
                "Đất nước",
                "Đồi núi",
                "Rừng rú"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Điền từ thích hợp vào thành ngữ: 'Ngày lành tháng ...'?",
            "options": [
                "đẹp",
                "tốt",
                "vui",
                "sang"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ nào sau đây KHÔNG đồng nghĩa với các từ còn lại trong nhóm?",
            "options": [
                "xinh đẹp",
                "tươi đẹp",
                "mỹ lệ",
                "đẹp đẽ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ đồng nghĩa với 'trông' trong đoạn thơ của Trần Đăng Khoa là gì?",
            "options": [
                "Nhìn",
                "Nghe",
                "Mơ",
                "Nói"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cặp từ nào dưới đây là cặp từ đồng nghĩa?",
            "options": [
                "Cao - Thấp",
                "Siêng năng - Lười biếng",
                "Nhỏ bé - Tí hon",
                "Mạnh mẽ - Yếu ớt"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Điền từ vào thành ngữ sau: 'Năm lần bảy ...'?",
            "options": [
                "lượt",
                "chuyến",
                "vòng",
                "nẻo"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đoạn văn 'Mưa mùa xuân' khuyên chúng ta chọn từ nào đồng nghĩa với 'mềm mại' để chỉ hạt mưa?",
            "options": [
                "bé nhỏ",
                "bé mọn",
                "bé con",
                "tí hon"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ đồng nghĩa hoàn toàn là gì?",
            "options": [
                "Các từ có nghĩa giống nhau hoàn toàn, có thể thay thế cho nhau",
                "Các từ có nghĩa gần giống nhau, không thể thay thế cho nhau",
                "Các từ có nghĩa trái ngược nhau hoàn toàn",
                "Các từ có cách phát âm giống nhau nhưng nghĩa khác nhau"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Từ nào đồng nghĩa với 'thanh bình'?",
            "options": [
                "Bình yên",
                "Ồn ào",
                "Náo nhiệt",
                "Nguy hiểm"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Cụm từ 'sóng yên biển lặng' dùng để nói về cảnh tượng gì?",
            "options": [
                "Cảnh biển êm đềm, không có bão tố",
                "Cảnh biển động dữ dội",
                "Cảnh sông nước mênh mông",
                "Cảnh thủy triều dâng cao"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Từ đồng nghĩa không hoàn toàn là gì?",
            "options": [
                "Những từ có nghĩa gần giống nhau nhưng có sắc thái biểu cảm khác nhau",
                "Những từ có nghĩa giống hệt nhau trong mọi trường hợp",
                "Những từ có cách viết giống nhau nhưng nghĩa khác nhau",
                "Những từ có âm thanh tương tự nhau"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Điền từ thích hợp vào thành ngữ: 'Dao to búa ...'?",
            "options": [
                "to",
                "nặng",
                "lớn",
                "dài"
            ],
            "answer": 2,
            "level": 2
        }
    ]
};

// --- LOGIC CHO TRÒ CHƠI GHẾP CẶP KHỞI ĐỘNG ---
let activeCardLeft37 = null;
let activeCardRight37 = null;
let matchedPairs37 = 0;

window.selectMatchCard37 = function(btn, matchId, side) {
    if (side === 'left') {
        if (activeCardLeft37) {
            activeCardLeft37.className = "w-full p-4 border-2 border-gray-100 bg-white rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95";
        }
        activeCardLeft37 = btn;
        btn.className = "w-full p-4 border-2 border-sky-100 bg-sky-50 rounded-2xl font-black text-xl text-sky-800 transition-all";
    } else {
        if (activeCardRight37) {
            activeCardRight37.className = "w-full p-4 border-2 border-gray-100 bg-white rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95";
        }
        activeCardRight37 = btn;
        btn.className = "w-full p-4 border-2 border-sky-100 bg-sky-50 rounded-2xl font-black text-xl text-sky-800 transition-all";
    }

    if (activeCardLeft37 && activeCardRight37) {
        const leftId = activeCardLeft37.dataset.match;
        const rightId = activeCardRight37.dataset.match;
        const fb = document.getElementById('fb-vn37-kd');
        if (!fb) return;
        fb.classList.remove('hidden');

        if (leftId === rightId) {
            // Khớp chính xác
            activeCardLeft37.className = "w-full p-4 border-2 border-emerald-100 bg-emerald-50 text-emerald-800 rounded-2xl font-black text-xl cursor-default relative z-10 opacity-75";
            activeCardRight37.className = "w-full p-4 border-2 border-emerald-100 bg-emerald-50 text-emerald-800 rounded-2xl font-black text-xl cursor-default relative z-10 opacity-75";
            activeCardLeft37.onclick = null;
            activeCardRight37.onclick = null;
            activeCardLeft37 = null;
            activeCardRight37 = null;
            matchedPairs37++;

            if (matchedPairs37 === 4) {
                fb.innerHTML = "🎉 Tuyệt vời! Em đã ghép đúng tất cả các cặp từ đồng nghĩa khởi động!";
                fb.className = "p-4 rounded-xl text-lg font-black text-center bg-emerald-600 text-white mt-2 shadow-md";
            } else {
                fb.innerHTML = "🎉 Đúng rồi! Cặp từ đồng nghĩa chính xác.";
                fb.className = "p-2 rounded-xl text-sm font-bold text-center bg-emerald-600 text-emerald-800 mt-2 border border-emerald-100";
            }
        } else {
            // Không khớp
            fb.innerHTML = "⚠️ Cặp từ này chưa đồng nghĩa. Thử lại nhé!";
            fb.className = "p-2 rounded-xl text-sm font-bold text-center bg-rose-600 text-rose-800 mt-2 border border-rose-100 animate-bounce";
            
            const cardLeft = activeCardLeft37;
            const cardRight = activeCardRight37;
            activeCardLeft37 = null;
            activeCardRight37 = null;

            setTimeout(() => {
                if (cardLeft && cardLeft.onclick) {
                    cardLeft.className = "w-full p-4 border-2 border-gray-100 bg-white rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95";
                }
                if (cardRight && cardRight.onclick) {
                    cardRight.className = "w-full p-4 border-2 border-gray-100 bg-white rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95";
                }
                fb.classList.add('hidden');
            }, 837);
        }
    }
};

// --- LOGIC CHO BÀI TẬP 1: KÉO THẢ / CHỌN ĐIỀN THÀNH NGỮ ---
let selectedWord37 = null;

window.selectDraggableWord37 = function(btn) {
    if (selectedWord37) {
        selectedWord37.classList.remove("border-sky-100", "bg-sky-600", "text-sky-800");
    }
    selectedWord37 = btn;
    btn.classList.add("border-sky-100", "bg-sky-600", "text-sky-800");
};

window.drag37 = function(ev) {
    ev.dataTransfer.setData("text", ev.target.dataset.value);
    selectedWord37 = ev.target;
};

window.allowDrop37 = function(ev) {
    ev.preventDefault();
};

window.drop37 = function(ev, slot) {
    ev.preventDefault();
    const val = ev.dataTransfer.getData("text");
    if (val) {
        slot.innerText = val;
        slot.dataset.value = val;
        slot.className = "inline-flex items-center justify-center min-w-[137px] h-12 border-2 border-emerald-100 bg-emerald-50 rounded-xl text-emerald-800 px-4 font-black transition-all cursor-pointer";
        if (selectedWord37) {
            selectedWord37.classList.remove("border-sky-100", "bg-sky-600", "text-sky-800");
            selectedWord37 = null;
        }
    }
};

window.dropToSlot37 = function(slot) {
    if (selectedWord37) {
        const val = selectedWord37.dataset.value;
        slot.innerText = val;
        slot.dataset.value = val;
        slot.className = "inline-flex items-center justify-center min-w-[137px] h-12 border-2 border-emerald-100 bg-emerald-50 rounded-xl text-emerald-800 px-4 font-black transition-all cursor-pointer";
        selectedWord37.classList.remove("border-sky-100", "bg-sky-600", "text-sky-800");
        selectedWord37 = null;
    } else if (slot.dataset.value) {
        // Trả từ lại kho
        slot.innerText = "✿";
        delete slot.dataset.value;
        slot.className = "inline-flex items-center justify-center min-w-[137px] h-12 border-2 border-dashed border-sky-100 bg-sky-50/30 rounded-xl text-sky-800 px-4 transition-all cursor-pointer";
    }
};

window.checkIdioms37 = function() {
    const s1 = document.getElementById("slot37-1").dataset.value;
    const s2 = document.getElementById("slot37-2").dataset.value;
    const s3 = document.getElementById("slot37-3").dataset.value;
    const s4 = document.getElementById("slot37-4").dataset.value;
    const s5 = document.getElementById("slot37-5").dataset.value;
    const s6 = document.getElementById("slot37-6").dataset.value;

    const correct = {
        s1: "lành",
        s2: "lượt",
        s3: "yên",
        s4: "ước",
        s5: "lớn",
        s6: "nơi"
    };

    const fb = document.getElementById("fb-vn37-ex1");
    if (!fb) return;
    fb.classList.remove("hidden");

    if (s1 === correct.s1 && s2 === correct.s2 && s3 === correct.s3 && s4 === correct.s4 && s5 === correct.s5 && s6 === correct.s6) {
        fb.innerText = "🎉 Hoàn hảo! Em đã điền đúng tất cả các từ đồng nghĩa vào các thành ngữ!";
        fb.className = "p-4 rounded-xl text-lg font-black text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerText = "❌ Vẫn còn vị trí điền chưa chính xác hoặc chưa điền đủ. Em hãy xem lại nhé!";
        fb.className = "p-4 rounded-xl text-lg font-black text-center bg-rose-600 text-white mt-2 shadow-md";
        setTimeout(() => fb.classList.add("hidden"), 3037);
    }
};

// --- LOGIC BÀI TẬP 2: ĐOẠN THƠ TRẦN ĐĂNG KHOA ---
window.checkPoetrySynonyms37 = function() {
    const v1 = document.getElementById("select-vn37-ex2-nhonho").value;
    const v2 = document.getElementById("select-vn37-ex2-trong").value;
    const v3 = document.getElementById("select-vn37-ex2-menhmong").value;

    const fb = document.getElementById("fb-vn37-ex2");
    if (!fb) return;
    fb.classList.remove("hidden");

    if (v1 === "nhonhan" && v2 === "nhin" && v3 === "baola") {
        fb.innerText = "🎉 Xuất sắc! Các từ đồng nghĩa tương ứng là: nho nhỏ - nhỏ nhắn; trông - nhìn; mênh mông - bao la.";
        fb.className = "p-4 rounded-xl text-lg font-black text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerText = "❌ Hướng dẫn: Em hãy suy nghĩ kĩ sắc thái nghĩa của từng từ và chọn lại từ đồng nghĩa tương ứng nhé!";
        fb.className = "p-4 rounded-xl text-lg font-black text-center bg-rose-600 text-white mt-2 shadow-md";
        setTimeout(() => fb.classList.add("hidden"), 3037);
    }
};

// --- LOGIC BÀI TẬP 3: ĐOẠN VĂN MƯA MÙA XUÂN ---
window.checkSpringRain37 = function() {
    const v1 = document.getElementById("select-vn37-ex3-1").value;
    const v2 = document.getElementById("select-vn37-ex3-2").value;
    const v3 = document.getElementById("select-vn37-ex3-3").value;
    const v4 = document.getElementById("select-vn37-ex3-4").value;
    const v5 = document.getElementById("select-vn37-ex3-5").value;

    const fb = document.getElementById("fb-vn37-ex3");
    if (!fb) return;
    fb.classList.remove("hidden");

    if (v1 === "be_nho" && v2 === "kho_can" && v3 === "trong_lanh" && v4 === "diu_mem" && v5 === "suc_song") {
        fb.innerText = "🎉 Cực kỳ chuẩn xác! Đoạn văn của em giờ đây đã trọn vẹn và mang sắc thái văn chương rất đẹp.";
        fb.className = "p-4 rounded-xl text-lg font-black text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerText = "❌ Có chỗ chọn từ chưa phù hợp. Hãy đọc lại thật diễn cảm cả câu văn để chọn lại từ hay nhất nhé!";
        fb.className = "p-4 rounded-xl text-lg font-black text-center bg-rose-600 text-white mt-2 shadow-md";
        setTimeout(() => fb.classList.add("hidden"), 3037);
    }
};

// --- LOGIC BÀI TẬP 4: AI THẦY E PHÂN TÍCH VÀ CHẤM ĐIỂM ---
window.gradeParagraph37 = function() {
    const txt = document.getElementById("input-vn37-ex4-textarea").value.trim();
    const fb = document.getElementById("fb-vn37-ex4");
    if (!fb) return;
    fb.classList.remove("hidden");

    if (txt.length < 20) {
        fb.innerHTML = "⚠️ Em hãy viết đoạn văn đầy đủ hơn (ít nhất 4-5 câu và trên 20 ký tự) nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-337";
        return;
    }

    // Các nhóm từ đồng nghĩa được quét tự động
    const synonymGroups = [
        { name: "Không gian rộng lớn", words: ["mênh mông", "bao la", "bát ngát", "rộng lớn", "thênh thang", "vô tận", "vô cùng"] },
        { name: "Vẻ đẹp", words: ["đẹp", "xinh", "mỹ lệ", "tươi đẹp", "thơ mộng", "kiều diễm", "lộng lẫy", "xinh đẹp"] },
        { name: "Màu xanh thiên nhiên", words: ["xanh tươi", "xanh tốt", "xanh rì", "xanh ngắt", "xanh trong", "xanh mướt", "xanh um"] },
        { name: "Ánh sáng rực rỡ", words: ["rực rỡ", "lung linh", "lấp lánh", "chói chang", "sáng ngời", "sáng tỏ"] },
        { name: "Sự yên bình", words: ["yên bình", "thanh bình", "bình yên", "yên ả", "tĩnh lặng"] }
    ];

    let detectedWords = [];
    let usedGroups = {};

    const txtLower = txt.toLowerCase();

    synonymGroups.forEach(group => {
        let foundInGroup = [];
        group.words.forEach(word => {
            if (txtLower.includes(word)) {
                foundInGroup.push(word);
            }
        });
        if (foundInGroup.length >= 2) {
            usedGroups[group.name] = foundInGroup;
            detectedWords.push(...foundInGroup);
        }
    });

    const hasSynonyms = Object.keys(usedGroups).length > 0;

    if (!hasSynonyms) {
        fb.innerHTML = `
            <div class="flex items-start gap-4 text-left">
                <span class="text-xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-600">AI Thầy E hướng dẫn:</h5>
                    <p class="text-lg mb-2">Đoạn văn tả cảnh của em rất sinh động, tuy nhiên Thầy chưa thấy các từ đồng nghĩa cùng xuất hiện để bổ sung nghĩa cho nhau (Ví dụ: <em>bao la</em> và <em>bát ngát</em>, hoặc <em>yên bình</em> và <em>thanh bình</em>).</p>
                    <p class="text-sm font-medium text-amber-600">👉 Gợi ý: Hãy thử bổ sung các từ mô tả độ rộng lớn, màu xanh hoặc vẻ đẹp để Thầy chấm điểm nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-337";
        return;
    }

    // Ghép kết quả hiển thị các từ tìm thấy
    let detailsHtml = "";
    Object.keys(usedGroups).forEach(groupName => {
        detailsHtml += `<li>✨ Nhóm <strong>${groupName}</strong>: <span class="bg-sky-600 text-white px-2 py-0.5 rounded-lg mx-1">${usedGroups[groupName].join(", ")}</span></li>`;
    });

    fb.innerHTML = `
        <div class="flex items-start gap-4 text-left">
            <span class="text-xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-800">AI Thầy E nhận xét & Chấm điểm:</h5>
                <p class="text-lg mb-2">Thật tuyệt vời! Đoạn văn tả cảnh thiên nhiên của em rất giàu hình ảnh và chất thơ. Em đã khéo léo lồng ghép các cặp từ đồng nghĩa sau:</p>
                <ul class="list-disc list-inside space-y-1 mb-3 text-sm text-emerald-800">
                    ${detailsHtml}
                </ul>
                <span class="px-3 py-1 bg-emerald-600 rounded-lg text-sm font-bold">Xếp loại: Xuất sắc - Đạt 137%</span>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-emerald-600 text-white transition-all duration-337";
};

// --- HOÀN THÀNH TOÀN CỤC ---
window.submitVn37Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 37',
            '🌟',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🌟</span><p class="text-lg md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành Tiết 37: Luyện tập về từ đồng nghĩa!</p><p class="text-xl text-gray-800 mt-3">Học tốt từ đồng nghĩa sẽ giúp em viết các đoạn văn tả cảnh trở nên sinh động, uyển chuyển và hấp dẫn hơn rất nhiều.</p></div>'
        );
    }
};

window.closeFeedback37 = function() {
    document.getElementById("vn37-feedback-overlay").classList.add("hidden");
};
