export const lesson187 = {
    "topic": "Tiếng Việt 5",
    "week": "27",
    "period": "187",
    "title": "ÔN TẬP VÀ ĐÁNH GIÁ GIỮA HKII (TIẾT 5)",
    "desc": "Học sinh thực hành chia sẻ cảm xúc về các bức tranh sự việc đời sống và viết đoạn văn biểu cảm về một sự việc đáng nhớ theo sơ đồ tư duy.",
    "subject": "Tiếng Việt",
    "theme": "Hương sắc trăm miền",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-4xl mx-auto">
    <!-- 🎯 Mục tiêu ôn tập -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-blue-600 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu ôn tập (Tiết 5)
        </h3>
        <ul class="space-y-3 text-blue-950 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Quan sát, phân tích tranh vẽ và chia sẻ mạch lạc cảm xúc của các nhân vật trong tranh.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết cách lập dàn ý và viết đoạn văn biểu đạt tình cảm, cảm xúc về một sự việc đáng nhớ theo sơ đồ tư duy.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Rèn luyện khả năng tự đánh giá, sửa đổi và hoàn thiện bài văn viết dưới sự trợ giúp của AI.
            </li>
        </ul>
    </div>

    <!-- 🎨 BÀI 1: BÀY TỎ CẢM XÚC VỀ SỰ VIỆC (INTERACTIVE PICTURE CARDS) -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-6 md:p-8 shadow-2xl bg-white border border-slate-100 space-y-6">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-md">1</div>
                <h2 class="text-2xl md:text-5xl font-black text-gray-800">Bài 1: Quan sát & Trao đổi về sự việc</h2>
            </div>
            
            <p class="text-lg md:text-xl font-semibold text-gray-600">Em hãy chọn 1 trong 3 bức tranh sự việc dưới đây để cùng trao đổi và bày tỏ cảm xúc:</p>

            <!-- Grid 3 tranh -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Tranh 1 -->
                <button onclick="selectPicture(1)" id="pic-card-1" class="group flex flex-col items-center bg-slate-50 border-2 border-slate-200 rounded-3xl overflow-hidden hover:shadow-lg transition-all focus:outline-none w-full">
                    <img src="assets/images/birthday_party.png" alt="Sinh nhật" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="p-4 text-center">
                        <h4 class="text-lg font-black text-slate-800">1. Bữa tiệc sinh nhật</h4>
                        <p class="text-sm text-slate-500 font-medium">Không khí vui vẻ, ấm áp bên bạn bè</p>
                    </div>
                </button>

                <!-- Tranh 2 -->
                <button onclick="selectPicture(2)" id="pic-card-2" class="group flex flex-col items-center bg-slate-50 border-2 border-slate-200 rounded-3xl overflow-hidden hover:shadow-lg transition-all focus:outline-none w-full">
                    <img src="assets/images/sports_victory.png" alt="Đoạt giải" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="p-4 text-center">
                        <h4 class="text-lg font-black text-slate-800">2. Nhận cúp thể thao</h4>
                        <p class="text-sm text-slate-500 font-medium">Cảm xúc tự hào, kiêu hãnh chiến thắng</p>
                    </div>
                </button>

                <!-- Tranh 3 -->
                <button onclick="selectPicture(3)" id="pic-card-3" class="group flex flex-col items-center bg-slate-50 border-2 border-slate-200 rounded-3xl overflow-hidden hover:shadow-lg transition-all focus:outline-none w-full">
                    <img src="assets/images/broken_glass.png" alt="Làm vỡ tủ kính" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="p-4 text-center">
                        <h4 class="text-lg font-black text-slate-800">3. Làm vỡ cửa kính tủ</h4>
                        <p class="text-sm text-slate-500 font-medium">Lo lắng, hối lỗi vì sự bất cẩn</p>
                    </div>
                </button>
            </div>

            <!-- Khung trao đổi bày tỏ cảm xúc -->
            <div id="picture-feedback-area" class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                <label id="pic-input-label" class="text-lg font-bold text-slate-800 block">Hãy nhấp vào một bức tranh ở trên hoặc tự chọn một sự việc đáng nhớ để chia sẻ:</label>
                <textarea id="pic-discussion-text" rows="3" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-100 outline-none text-lg" placeholder="Em nghĩ gì về sự việc diễn ra và cảm xúc của những người trong cuộc lúc đó? Hãy tưởng tượng thêm và chia sẻ nhé..."></textarea>
                
                <div class="flex justify-center">
                    <button onclick="check187DiscussionAI()" class="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl shadow-md active:scale-95 transition-all text-base uppercase">
                        🤖 Nhận xét bằng AI
                    </button>
                </div>
                <div id="fb-pic-discussion-ai" class="w-full hidden mt-3"></div>
            </div>
        </div>
    </section>

    <!-- 📝 BÀI 2: VIẾT ĐOẠN VĂN THEO SƠ ĐỒ GỢI Ý (MINDMAP & ESSAY EVALUATOR) -->
    <section class="w-full">
        <div class="bg-white rounded-[32px] p-6 md:p-8 border border-slate-100 shadow-xl space-y-6">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-md">2</div>
                <h2 class="text-2xl md:text-5xl font-black text-gray-800">Bài 2: Viết đoạn văn thể hiện tình cảm, cảm xúc</h2>
            </div>
            
            <p class="text-lg font-semibold text-slate-700">Dưới đây là sơ đồ gợi ý cấu trúc đoạn văn, em hãy xem để định hướng các ý trước khi viết:</p>

            <!-- Sơ đồ tư duy dạng HTML sinh động -->
            <div class="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-3xl space-y-6">
                <!-- Node chính -->
                <div class="flex justify-center">
                    <div class="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-600 text-white text-xl md:text-2xl font-black rounded-2xl shadow-lg text-center max-w-md">
                        ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC
                    </div>
                </div>

                <!-- Đường nối -->
                <div class="hidden md:flex justify-around items-center px-24 text-blue-300">
                    <div class="h-6 w-0.5 bg-blue-400"></div>
                    <div class="h-6 w-0.5 bg-blue-400"></div>
                    <div class="h-6 w-0.5 bg-blue-400"></div>
                </div>

                <!-- 3 nhánh chính -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div class="p-4 bg-blue-100/50 border border-blue-200 rounded-2xl space-y-2">
                        <h4 class="font-black text-blue-600 text-base md:text-lg">1. Mở đầu</h4>
                        <p class="text-sm font-bold text-blue-950">Nêu ấn tượng chung về sự việc</p>
                    </div>
                    <div class="p-4 bg-emerald-100/50 border border-emerald-200 rounded-2xl space-y-2">
                        <h4 class="font-black text-emerald-900 text-base md:text-lg">2. Triển khai</h4>
                        <p class="text-sm font-bold text-emerald-950">Bộc lộ cảm xúc về các chi tiết nổi bật:</p>
                        <div class="flex flex-wrap justify-center gap-1.5 mt-1 text-xs">
                            <span class="px-2.5 py-1 bg-white border rounded-full text-emerald-800 font-extrabold">Về khung cảnh</span>
                            <span class="px-2.5 py-1 bg-white border rounded-full text-emerald-800 font-extrabold">Về hoạt động</span>
                            <span class="px-2.5 py-1 bg-white border rounded-full text-emerald-800 font-extrabold">Về con người</span>
                            <span class="px-2.5 py-1 bg-amber-100 border border-amber-300 rounded-full text-amber-800 font-black animate-pulse">Khía cạnh tự chọn 🌸</span>
                        </div>
                    </div>
                    <div class="p-4 bg-blue-100/50 border border-blue-200 rounded-2xl space-y-2">
                        <h4 class="font-black text-blue-600 text-base md:text-lg">3. Kết thúc</h4>
                        <p class="text-sm font-bold text-purple-950">Nêu điều đáng nhớ nhất về sự việc</p>
                    </div>
                </div>
            </div>

            <!-- Khung viết đoạn văn -->
            <div class="p-6 bg-blue-50/40 rounded-3xl border border-blue-150 space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="text-base md:text-lg font-black text-blue-600 block mb-1">1. Chọn sự việc em muốn viết:</label>
                        <select id="selected-essay-topic" onchange="updateEssayPrompt()" class="w-full p-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-100 outline-none text-base bg-white font-bold text-gray-800">
                            <option value="Bữa tiệc sinh nhật">Bữa tiệc sinh nhật đáng nhớ</option>
                            <option value="Đoạt giải thể thao">Ngày đoạt giải thể thao vinh quang</option>
                            <option value="Làm vỡ cửa kính tủ">Sự cố làm vỡ cửa kính tủ và bài học</option>
                            <option value="Sự việc tự chọn">Một sự việc tự chọn ngoài cuộc sống của em</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-base md:text-lg font-black text-blue-600 block mb-1">2. Tự chọn thêm khía cạnh 🌸 (tự chọn điền thêm):</label>
                        <input type="text" id="custom-aspect" class="w-full p-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-100 outline-none text-base font-semibold" placeholder="ví dụ: Về âm thanh rộn rã, Về bài học quý giá, Về lời dạy của bố..." value="Về bài học rút ra cho bản thân">
                    </div>
                </div>

                <div class="space-y-2">
                    <label class="text-base md:text-lg font-black text-blue-950 block">3. Nhập đoạn văn hoàn chỉnh của em tại đây:</label>
                    <textarea id="essay-text" rows="8" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-100 outline-none text-lg" placeholder="Bắt đầu viết đoạn văn thể hiện tình cảm, cảm xúc của em về sự việc tại đây..."></textarea>
                </div>

                <div class="flex justify-center">
                    <button onclick="check187EssayAI()" class="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-2xl shadow-xl transition-all active:scale-[0.95] flex items-center justify-center gap-3 text-lg md:text-xl uppercase tracking-wider">
                        <span>🤖</span> 
                        <span>Chấm điểm & Nhận xét bài viết bằng AI</span>
                    </button>
                </div>
                <div id="fb-essay-ai" class="w-full hidden mt-4"></div>
            </div>
        </div>
    </section>

    <!-- 📋 BÀI 3: TỰ ĐÁNH GIÁ & ĐỔI BÀI CHO BẠN (INTERACTIVE CHECKLIST) -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-6 md:p-8 shadow-2xl bg-white border border-slate-100 space-y-6">
            <div class="flex items-start gap-3">
                <span class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md">3</span>
                <h2 class="text-2xl md:text-5xl font-black text-gray-800">Bài 3: Góp ý & Chỉnh sửa bài viết</h2>
            </div>
            
            <p class="text-lg font-bold text-slate-700">Dựa vào checklist dưới đây, em hãy tự kiểm tra xem đoạn văn của mình hoặc bài của bạn đã đạt yêu cầu chưa nhé:</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h4 class="font-black text-slate-800 text-lg border-b pb-2 mb-2">📋 Tiêu chí nội dung</h4>
                    <label class="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" class="mt-1 w-5 h-5 accent-blue-600">
                        <span class="text-slate-700 font-bold">Nêu rõ ấn tượng chung về sự việc (Mở đầu tốt).</span>
                    </label>
                    <label class="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" class="mt-1 w-5 h-5 accent-blue-600">
                        <span class="text-slate-700 font-bold">Bộc lộ cảm xúc sâu sắc về khung cảnh, hoạt động, người tham gia.</span>
                    </label>
                    <label class="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" class="mt-1 w-5 h-5 accent-blue-600">
                        <span class="text-slate-700 font-bold">Đề cập đầy đủ khía cạnh cảm xúc tự chọn 🌸.</span>
                    </label>
                    <label class="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" class="mt-1 w-5 h-5 accent-blue-600">
                        <span class="text-slate-700 font-bold">Kết thúc có câu nêu được điều đáng nhớ nhất.</span>
                    </label>
                </div>

                <div class="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h4 class="font-black text-slate-800 text-lg border-b pb-2 mb-2">✍️ Tiêu chí diễn đạt</h4>
                    <label class="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" class="mt-1 w-5 h-5 accent-blue-600">
                        <span class="text-slate-700 font-bold">Sử dụng từ ngữ gợi tả cảm xúc phong phú, đa dạng.</span>
                    </label>
                    <label class="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" class="mt-1 w-5 h-5 accent-blue-600">
                        <span class="text-slate-700 font-bold">Diễn đạt trôi chảy, viết đúng câu ghép và câu đơn.</span>
                    </label>
                    <label class="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" class="mt-1 w-5 h-5 accent-blue-600">
                        <span class="text-slate-700 font-bold">Không viết sai chính tả hoặc ngắt câu tùy tiện.</span>
                    </label>
                </div>
            </div>
        </div>
    </section>
</div>

<script>
    // BÀI 1 SELECT PICTURE
    window.selectedPictureIndex = 0;
    window.selectPicture = function(idx) {
        window.selectedPictureIndex = idx;
        
        // Reset card borders
        for (let i = 1; i <= 3; i++) {
            const card = document.getElementById('pic-card-' + i);
            if (card) {
                card.className = 'group flex flex-col items-center bg-slate-50 border-2 border-slate-200 rounded-3xl overflow-hidden hover:shadow-lg transition-all focus:outline-none w-full';
            }
        }

        // Set active card border
        const activeCard = document.getElementById('pic-card-' + idx);
        if (activeCard) {
            activeCard.className = 'group flex flex-col items-center bg-blue-50 border-2 border-blue-500 rounded-3xl overflow-hidden shadow-lg transition-all focus:outline-none w-full ring-4 ring-blue-100';
        }

        // Change label and topics
        const label = document.getElementById('pic-input-label');
        const text = document.getElementById('pic-discussion-text');
        
        if (idx === 1) {
            label.innerHTML = "💬 Tranh 1: Bữa tiệc sinh nhật. Hãy bày tỏ suy nghĩ & cảm xúc của em về không khí tươi vui đó:";
            text.placeholder = "Em tưởng tượng mọi người chúc mừng bạn như thế nào? Cảm xúc của chủ nhân bữa tiệc và các bạn ra sao?...";
        } else if (idx === 2) {
            label.innerHTML = "💬 Tranh 2: Đoạt giải thể thao. Hãy bày tỏ suy nghĩ & cảm xúc của em về sự tự hào khi đoạt giải:";
            text.placeholder = "Em tưởng tượng niềm vui sướng nghẹn ngào của bạn nhỏ khi giơ cao cúp vàng và sự nỗ lực tập luyện trước đó...";
        } else if (idx === 3) {
            label.innerHTML = "💬 Tranh 3: Làm vỡ kính tủ. Hãy bày tỏ suy nghĩ & cảm xúc của em về sự cố này:";
            text.placeholder = "Các bạn nhỏ có thể đang hoảng sợ, lo lắng thế nào? Lời xin lỗi chân thành hoặc bài học sau sự cố này ra sao?...";
        }
    };

    window.check187DiscussionAI = async function() {
        const text = document.getElementById('pic-discussion-text').value.trim();
        if (!text) {
            alert('Em hãy chọn một tranh và nhập cảm nghĩ trước khi gửi nhé!');
            return;
        }

        const picTitles = {
            0: "Sự việc tự chọn",
            1: "Tranh 1: Bữa tiệc sinh nhật",
            2: "Tranh 2: Nhận cúp vô địch thể thao",
            3: "Tranh 3: Làm vỡ cửa kính tủ"
        };
        const topic = picTitles[window.selectedPictureIndex];

        const fb = document.getElementById('fb-pic-discussion-ai');
        fb.classList.remove('hidden');
        fb.innerHTML = '<div class="p-4 bg-white border-2 border-sky-100 rounded-xl shadow-md italic text-sky-900 animate-pulse text-center">EduRobot đang đọc và nhận xét cảm nghĩ về tranh của em, chờ một chút nhé...</div>';

        const prompt = \`Học sinh lớp 5 quan sát tranh vẽ và phát biểu cảm xúc về bức tranh: \"\${topic}\".\\nLời chia sẻ của học sinh: \"\${text}\"\\nHãy viết lời nhận xét ngắn gọn, khích lệ và chỉ ra điểm thú vị hoặc hướng gợi mở cảm xúc thêm. Xưng hô \"Thầy/Cô\" và gọi học sinh là \"em\".\`;

        await askAI('187-pic-discussion-ai', prompt, 'single', 'writing', 25, prompt);
    };

    // BÀI 2 ESSAY
    window.updateEssayPrompt = function() {
        const topic = document.getElementById('selected-topic');
        // placeholder or prompts if needed
    };

    window.check187EssayAI = async function() {
        const topic = document.getElementById('selected-essay-topic').value;
        const aspect = document.getElementById('custom-aspect').value.trim();
        const text = document.getElementById('essay-text').value.trim();

        if (!text) {
            alert('Em hãy viết đoạn văn trước khi nộp bài cho EduRobot nhé!');
            return;
        }

        const fb = document.getElementById('fb-essay-ai');
        fb.classList.remove('hidden');
        fb.innerHTML = '<div class="p-6 bg-white border-2 border-sky-100 rounded-2xl shadow-lg italic text-lg md:text-xl text-sky-900 animate-pulse text-center">EduRobot đang chấm đoạn văn biểu cảm của em, chờ một chút nhé...</div>';

        const prompt = \`Học sinh lớp 5 viết đoạn văn thể hiện tình cảm, cảm xúc về sự việc: \"\${topic}\".\\nKhía cạnh cảm xúc tự chọn thêm (dấu hoa 🌸): \"\${aspect}\"\\nĐoạn văn của học sinh: \"\${text}\"\\nHãy đóng vai là giáo viên dạy văn tiểu học, nhận xét chi tiết đoạn văn theo các tiêu chí:\\n1. Bố cục (Mở đầu nêu ấn tượng chung, phần thân đoạn bộc lộ cảm xúc về khung cảnh/hoạt động/con người/khía cạnh tự chọn, phần kết nêu điều đáng nhớ).\\n2. Cách diễn đạt, sử dụng từ ngữ biểu cảm phong phú.\\n3. Sửa lỗi chính tả, ngữ pháp nếu có.\\nHãy nhận xét khích lệ, chấm điểm cao nếu viết tốt. Xưng hô \"Thầy/Cô\" và gọi học sinh là \"em\".\`;

        await askAI('187-essay-ai', prompt, 'single', 'writing', 25, prompt);
    };
</script>
`,
    "practice": {
        "settings": { "pick": 10 },
        "questions": [
            {
                "question": "Mục tiêu chính của đoạn văn thể hiện tình cảm, cảm xúc về một sự việc là gì?",
                "options": [
                    "Bộc lộ cảm xúc, suy nghĩ của người viết về sự việc đó.",
                    "Kể lại tuần tự tất cả các sự việc diễn ra không bỏ sót chi tiết nào.",
                    "Miêu tả chính xác ngoại hình của tất cả các nhân vật xuất hiện.",
                    "Chứng minh sự việc đó là có thật."
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Bố cục của một đoạn văn thể hiện tình cảm, cảm xúc về một sự việc thường gồm mấy phần?",
                "options": [
                    "2 phần (Mở đoạn và Kết đoạn)",
                    "3 phần (Mở đầu, triển khai cảm xúc, kết thúc)",
                    "4 phần độc lập",
                    "Không phân chia bố cục"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Phần mở đầu của đoạn văn biểu cảm về sự việc có nhiệm vụ gì?",
                "options": [
                    "Nêu ấn tượng chung về sự việc.",
                    "Miêu tả chi tiết khung cảnh diễn ra sự việc.",
                    "Kể lại kết thúc của câu chuyện.",
                    "Nhận xét về thái độ của người tham gia."
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Trong sơ đồ gợi ý, khía cạnh cảm xúc tự chọn 🌸 có vai trò gì?",
                "options": [
                    "Cho phép học sinh tự bổ sung thêm khía cạnh cảm xúc (âm thanh, bài học...) để đoạn văn phong phú.",
                    "Là phần bắt buộc phải ghi tên một loài hoa.",
                    "Để trang trí cho sơ đồ đẹp hơn.",
                    "Không có vai trò gì."
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Từ ngữ nào dưới đây phù hợp nhất để thể hiện cảm xúc rộn ràng của một bữa tiệc sinh nhật?",
                "options": ["Tưng bừng, háo hức, ấm áp", "Lặng lẽ, trầm tư, u sầu", "Hốt hoảng, lo sợ, ân hận", "Lạnh lẽo, cô đơn"],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Khi viết về sự cố bất cẩn làm vỡ kính tủ, cảm xúc chủ đạo nên là gì?",
                "options": [
                    "Lo lắng, hối lỗi và rút ra bài học cẩn thận",
                    "Tự hào, kiêu hãnh",
                    "Vui vẻ, phấn khởi",
                    "Hững hờ, không quan tâm"
                ],
                "answer": 0,
                "level": 2
            },
            {
                "question": "Để đoạn văn biểu cảm thêm sinh động, người viết nên tránh điều nào sau đây?",
                "options": [
                    "Chỉ kể lại sự việc một cách khô khan mà không bộc lộ cảm xúc, suy nghĩ.",
                    "Kết hợp miêu tả chi tiết tiêu biểu về khung cảnh và hoạt động.",
                    "Sử dụng từ ngữ gợi tả cảm xúc đa dạng.",
                    "Sử dụng các biện pháp so sánh, ẩn dụ."
                ],
                "answer": 0,
                "level": 2
            },
            {
                "question": "Dòng nào dưới đây chỉ gồm các từ ngữ gợi tả tình cảm, cảm xúc?",
                "options": [
                    "Bồi hồi, sung sướng, ân hận, xúc động",
                    "Quạt mo, bàn ghế, bóng bay, cúp vàng",
                    "Đá bóng, thổi nến, vỗ tay, chạy trốn",
                    "Màu xanh, to lớn, ấm áp, cao vút"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Trong phần kết thúc của đoạn văn thể hiện cảm xúc về một sự việc, ta nên viết gì?",
                "options": [
                    "Nêu điều đáng nhớ nhất hoặc suy nghĩ, bài học sâu sắc đọng lại sau sự việc.",
                    "Tiếp tục kể về một sự việc mới khác.",
                    "Liệt kê lại tất cả các đồ vật có trong phòng.",
                    "Chúc mừng sinh nhật bạn bè."
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Đoạn văn sau biểu cảm về khía cạnh nào: 'Căn phòng rực rỡ sắc màu của bong bóng và ánh nến vàng ấm áp thổi lên từ chiếc bánh kem.'?",
                "options": ["Về khung cảnh", "Về hoạt động", "Về người tham gia", "Về âm thanh"],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Nhận xét nào đúng về đoạn văn biểu cảm có câu: 'Em thích nhất lúc cả nhóm cùng ùa lên hát bài chúc mừng sinh nhật, tiếng cười vang rộn khắp gian phòng.'?",
                "options": [
                    "Thể hiện cảm xúc sinh động về hoạt động và không khí của sự việc.",
                    "Chỉ tả ngoại hình nhân vật.",
                    "Nêu ấn tượng chung ở đầu bài học.",
                    "Câu văn sai ngữ pháp."
                ],
                "answer": 0,
                "level": 2
            },
            {
                "question": "Khi góp ý bài viết đoạn văn biểu cảm cho bạn, tiêu chí nào về diễn đạt là quan trọng?",
                "options": [
                    "Sử dụng từ ngữ gợi tả cảm xúc đa dạng, không mắc lỗi chính tả, diễn đạt trôi chảy.",
                    "Bài viết phải dài ít nhất 3 trang giấy.",
                    "Phải vẽ hình minh họa vào bài.",
                    "Phải dùng tất cả các từ trong sách giáo khoa."
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Sự việc 'Đoạt giải thể thao' trong Bài tập 1 khơi gợi ở bạn nhỏ cảm xúc nổi bật nào?",
                "options": ["Kiêu hãnh, tự hào, vui sướng khôn tả", "Lo lắng, sợ hãi, bồn chồn", "Tiếc nuối, buồn bã", "Thờ ơ, lạnh nhạt"],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Từ nào trái nghĩa với từ 'ấm áp' trong không khí bữa tiệc sinh nhật?",
                "options": ["Lạnh lẽo", "Vui vẻ", "Nhộn nhịp", "Yên bình"],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Câu văn nào thể hiện tốt 'điều đáng nhớ nhất' (kết đoạn) cho sự việc làm vỡ kính tủ?",
                "options": [
                    "Sự cố vỡ kính ấy là lời nhắc nhở sâu sắc giúp em luôn ghi nhớ bài học về sự cẩn thận và trách nhiệm.",
                    "Chúng em nhanh chóng dọn dẹp đống mảnh kính vỡ.",
                    "Chiếc tủ gỗ nhà bạn ấy rất cao và đẹp.",
                    "Sau đó chúng em đi đá bóng tiếp."
                ],
                "answer": 0,
                "level": 2
            }
        ]
    }
};
