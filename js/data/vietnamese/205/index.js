export const lesson205 = {
    "topic": "Tiếng Việt 5",
    "week": "30",
    "period": "205",
    "title": "LTVC: LUYỆN TẬP VỀ CÂU GHÉP",
    "desc": "Thực hành nhận diện câu ghép, phân tích các cách nối vế câu (trực tiếp, kết từ, từ hô ứng) và đặt câu ghép chỉ ý thức bảo vệ môi trường lớp học.",
    "subject": "Luyện từ và câu",
    "theme": "Tiếp bước cha ông",
    "audio": "am_thanh/302-luyentap-caughep.mp3",
    "content": `
<div class="space-y-8 animate-in fade-in duration-1000 max-w-6xl mx-auto py-6">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl"></div>
        <h3 class="text-2xl md:text-4xl font-black text-blue-600 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md text-xl md:text-2xl">🎯</span>
            Mục tiêu học tập
        </h3>
        <ul class="space-y-3 text-blue-950 font-bold text-lg md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Nhận diện chính xác câu đơn và câu ghép trong các đoạn văn văn học.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Phân loại được các câu ghép theo cách nối vế câu: nối trực tiếp, nối bằng kết từ hoặc nối bằng cặp từ hô ứng.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Đặt được các câu ghép có ý nghĩa bảo vệ vệ sinh môi trường lớp học và xác định đúng chủ vị của từng vế.
            </li>
        </ul>
    </div>

    <!-- 📚 Ghi nhớ kiến thức -->
    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl bg-white border border-slate-100 space-y-8">
        <div class="border-b pb-4">
            <h2 class="text-2xl md:text-4xl lg:text-5xl font-black text-slate-800">💡 Các cách nối vế câu ghép</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-700 font-bold">
            <!-- Nối trực tiếp -->
            <div class="bg-amber-50/50 border border-amber-100 rounded-3xl p-6 space-y-2">
                <h4 class="text-lg md:text-2xl font-black text-amber-900">1. Nối trực tiếp</h4>
                <p class="text-sm md:text-lg">Không dùng từ nối, chỉ dùng các dấu câu:</p>
                <div class="bg-white/80 p-3 rounded-lg border border-amber-150 text-xs md:text-base text-slate-650">
                    Ví dụ: Mưa rào trút xuống, gió thổi mạnh. (nối bằng dấu phẩy)
                </div>
            </div>

            <!-- Nối bằng kết từ -->
            <div class="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-6 space-y-2">
                <h4 class="text-lg md:text-2xl font-black text-emerald-900">2. Dùng kết từ</h4>
                <p class="text-sm md:text-lg">Dùng kết từ đơn (<em>và, nhưng, rồi...</em>) hoặc cặp kết từ (<em>vì... nên..., tuy... nhưng...</em>).</p>
                <div class="bg-white/80 p-3 rounded-lg border border-emerald-150 text-xs md:text-base text-slate-650">
                    Ví dụ: Tuy nhà xa nhưng Nam vẫn đi học đúng giờ.
                </div>
            </div>

            <!-- Nối bằng cặp từ hô ứng -->
            <div class="bg-blue-50/50 border border-blue-100 rounded-3xl p-6 space-y-2">
                <h4 class="text-lg md:text-2xl font-black text-blue-600">3. Dùng từ hô ứng</h4>
                <p class="text-sm md:text-lg">Dùng cặp từ đi liền nhau để kết nối (<em>vừa... đã..., càng... càng..., bao nhiêu... bấy nhiêu...</em>).</p>
                <div class="bg-white/80 p-3 rounded-lg border border-blue-150 text-xs md:text-base text-slate-650">
                    Ví dụ: Gió càng to, sóng biển càng dữ dội.
                </div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": (UI) => {
        return `
<div class="space-y-12 max-w-4xl mx-auto py-6">
    <!-- BÀI TẬP 1: TÌM CÂU GHÉP TRONG ĐOẠN VĂN -->
    <section class="bg-white p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">1</span>
            <h3 class="text-xl md:text-3xl font-black text-blue-600">Bài tập 1: Nhấp chọn các câu ghép trong đoạn văn</h3>
        </div>

        <p class="text-lg md:text-2xl font-bold text-slate-700">Đọc hai đoạn văn dưới đây và nhấp chọn vào các câu mà em cho là <strong>câu ghép</strong>:</p>

        <!-- Đoạn văn a -->
        <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <span class="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-lg font-black text-xs md:text-sm">Đoạn văn a</span>
            <div class="serif-font text-lg md:text-2xl leading-relaxed text-slate-800 font-medium space-y-2 text-justify">
                <span onclick="toggleSentence205('a', 1, this)" class="c205-btn-a p-1 rounded hover:bg-amber-100 cursor-pointer block border-2 border-transparent transition-all">(1) Bắc Giang để lại cho tôi ấn tượng về cảnh sắc miền trung du đầy thú vị.</span>
                <span onclick="toggleSentence205('a', 2, this)" class="c205-btn-a p-1 rounded hover:bg-amber-100 cursor-pointer block border-2 border-transparent transition-all">(2) Những ngọn đồi thoai thoải, ngọn nọ gối lên ngọn kia.</span>
                <span onclick="toggleSentence205('a', 3, this)" class="c205-btn-a p-1 rounded hover:bg-amber-100 cursor-pointer block border-2 border-transparent transition-all">(3) Con đường mòn son đỏ quanh co, ẩn hiện trên triền đồi.</span>
                <span onclick="toggleSentence205('a', 4, this)" class="c205-btn-a p-1 rounded hover:bg-amber-100 cursor-pointer block border-2 border-transparent transition-all">(4) Những cây khế rừng lúc lỉu chùm quả chát chát chua chua, những cây mâm xôi chi chít quả đỏ chót, ngọt lịm.</span>
            </div>
        </div>

        <!-- Đoạn văn b -->
        <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <span class="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-lg font-black text-xs md:text-sm">Đoạn văn b</span>
            <div class="serif-font text-lg md:text-2xl leading-relaxed text-slate-800 font-medium space-y-2 text-justify">
                <span onclick="toggleSentence205('b', 1, this)" class="c205-btn-b p-1 rounded hover:bg-blue-100 cursor-pointer block border-2 border-transparent transition-all">(1) Trên đảo, mỗi ngày trẻ em đều nô nức tới trường.</span>
                <span onclick="toggleSentence205('b', 2, this)" class="c205-btn-b p-1 rounded hover:bg-blue-100 cursor-pointer block border-2 border-transparent transition-all">(2) Vùng đảo thiêng liêng nơi đầu sóng ngọn gió có bao nhiêu điều đặc biệt thì các em cũng có bấy nhiêu trải nghiệm thú vị.</span>
                <span onclick="toggleSentence205('b', 3, this)" class="c205-btn-b p-1 rounded hover:bg-blue-100 cursor-pointer block border-2 border-transparent transition-all">(3) Sau những giờ học ở trường, các em cùng thầy giáo đi bơi, đi câu cá,...</span>
                <span onclick="toggleSentence205('b', 4, this)" class="c205-btn-b p-1 rounded hover:bg-blue-100 cursor-pointer block border-2 border-transparent transition-all">(4) Hễ trò gặp bài toán nào khó thì chúng lập tức chạy ngay qua nhà thầy.</span>
                <span onclick="toggleSentence205('b', 5, this)" class="c205-btn-b p-1 rounded hover:bg-blue-100 cursor-pointer block border-2 border-transparent transition-all">(5) Chúng thường được thầy giảng giải cho rất kĩ lưỡng.</span>
                <span onclick="toggleSentence205('b', 6, this)" class="c205-btn-b p-1 rounded hover:bg-blue-100 cursor-pointer block border-2 border-transparent transition-all">(6) Mỗi trường học trên đảo chỉ có hai thầy giáo và các thầy kiêm quản từ lớp Một đến lớp Năm.</span>
            </div>
        </div>

        <div class="flex justify-end items-center gap-4"><button onclick="check205Q1();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
        <div id="fb-205-q1" class="text-lg md:text-2xl font-black text-center hidden"></div>
    </section>

    <!-- BÀI TẬP 2: PHÂN LOẠI CÂU GHÉP TÌM ĐƯỢC -->
    <section class="bg-white p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">2</span>
            <h3 class="text-xl md:text-3xl font-black text-blue-600">Bài tập 2: Phân loại câu ghép vào nhóm thích hợp</h3>
        </div>

        <p class="text-lg md:text-2xl font-bold text-slate-700">Chọn nhóm thích hợp cho mỗi câu ghép vừa tìm được ở Bài tập 1:</p>

        <div class="space-y-6 text-base md:text-xl font-bold text-slate-800">
            <!-- Câu a2 -->
            <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                <p class="italic">"Những ngọn đồi thoai thoải, ngọn nọ gối lên ngọn kia."</p>
                <div class="flex items-center gap-3">
                    <span class="text-slate-500 font-black text-sm">Nhóm nối:</span>
                    <select id="select-c205-a2" class="p-2 border-2 border-slate-300 rounded-xl text-blue-600 font-black outline-none bg-white text-base md:text-lg">
                        <option value="">-- Chọn nhóm --</option>
                        <option value="tructiep">Nối trực tiếp</option>
                        <option value="kettu">Nối bằng kết từ</option>
                        <option value="houng">Nối bằng cặp từ hô ứng</option>
                    </select>
                </div>
            </div>

            <!-- Câu a4 -->
            <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                <p class="italic">"Những cây khế rừng lúc lỉu chùm quả chát chát chua chua, những cây mâm xôi chi chít quả đỏ chót, ngọt lịm."</p>
                <div class="flex items-center gap-3">
                    <span class="text-slate-500 font-black text-sm">Nhóm nối:</span>
                    <select id="select-c205-a4" class="p-2 border-2 border-slate-300 rounded-xl text-blue-600 font-black outline-none bg-white text-base md:text-lg">
                        <option value="">-- Chọn nhóm --</option>
                        <option value="tructiep">Nối trực tiếp</option>
                        <option value="kettu">Nối bằng kết từ</option>
                        <option value="houng">Nối bằng cặp từ hô ứng</option>
                    </select>
                </div>
            </div>

            <!-- Câu b2 -->
            <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                <p class="italic">"Vùng đảo thiêng liêng nơi đầu sóng ngọn gió có bao nhiêu điều đặc biệt thì các em cũng có bấy nhiêu trải nghiệm thú vị."</p>
                <div class="flex items-center gap-3">
                    <span class="text-slate-500 font-black text-sm">Nhóm nối:</span>
                    <select id="select-c205-b2" class="p-2 border-2 border-slate-300 rounded-xl text-blue-600 font-black outline-none bg-white text-base md:text-lg">
                        <option value="">-- Chọn nhóm --</option>
                        <option value="tructiep">Nối trực tiếp</option>
                        <option value="kettu">Nối bằng kết từ</option>
                        <option value="houng">Nối bằng cặp từ hô ứng</option>
                    </select>
                </div>
            </div>

            <!-- Câu b4 -->
            <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                <p class="italic">"Hễ trò gặp bài toán nào khó thì chúng lập tức chạy ngay qua nhà thầy."</p>
                <div class="flex items-center gap-3">
                    <span class="text-slate-500 font-black text-sm">Nhóm nối:</span>
                    <select id="select-c205-b4" class="p-2 border-2 border-slate-300 rounded-xl text-blue-600 font-black outline-none bg-white text-base md:text-lg">
                        <option value="">-- Chọn nhóm --</option>
                        <option value="tructiep">Nối trực tiếp</option>
                        <option value="kettu">Nối bằng kết từ/cặp kết từ</option>
                        <option value="houng">Nối bằng cặp từ hô ứng</option>
                    </select>
                </div>
            </div>

            <!-- Câu b6 -->
            <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                <p class="italic">"Mỗi trường học trên đảo chỉ có hai thầy giáo và các thầy kiêm quản từ lớp Một đến lớp Năm."</p>
                <div class="flex items-center gap-3">
                    <span class="text-slate-500 font-black text-sm">Nhóm nối:</span>
                    <select id="select-c205-b6" class="p-2 border-2 border-slate-300 rounded-xl text-blue-600 font-black outline-none bg-white text-base md:text-lg">
                        <option value="">-- Chọn nhóm --</option>
                        <option value="tructiep">Nối trực tiếp</option>
                        <option value="kettu">Nối bằng kết từ/cặp kết từ</option>
                        <option value="houng">Nối bằng cặp từ hô ứng</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="flex justify-end items-center gap-4"><button onclick="check205Q2();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
        <div id="fb-205-q2" class="text-lg md:text-2xl font-black text-center hidden"></div>
    </section>

    <!-- BÀI TẬP 3: ĐẶT CÂU GHÉP BẢO VỆ MÔI TRƯỜNG LỚP HỌC -->
    <section class="bg-white p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">3</span>
            <h3 class="text-xl md:text-3xl font-black text-blue-600">Bài tập 3: Thực hành đặt câu ghép bảo vệ lớp học sạch đẹp</h3>
        </div>

        <p class="text-lg md:text-2xl font-bold text-slate-700">Hãy đặt 1 – 2 câu ghép bày tỏ ý kiến hoặc hành động của em để giữ gìn lớp học luôn sạch sẽ, gọn gàng và đẹp đẽ:</p>

        <div class="p-6 bg-amber-50/30 border border-amber-100 rounded-3xl space-y-4">
            <textarea id="essay-205" rows="3" class="w-full p-4 rounded-xl border border-slate-250 focus:ring-4 focus:ring-blue-100 outline-none text-lg md:text-2xl font-bold leading-relaxed" placeholder="Ví dụ: Nếu chúng ta cùng nhau quét dọn lớp học mỗi ngày thì lớp học sẽ luôn sạch sẽ và thơm tho..."></textarea>
            <div class="flex justify-end items-center gap-4"><button onclick="check205EssayAI();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-205-ai" class="w-full hidden mt-4"></div>
        </div>
    </section>
</div>

<script>
    // BÀI 1: CHỌN CÂU GHÉP
    let selectedA = { 1: false, 2: false, 3: false, 4: false };
    let selectedB = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false };

    window.toggleSentence205 = function(paragraph, num, el) {
        if (paragraph === 'a') {
            selectedA[num] = !selectedA[num];
            if (selectedA[num]) {
                el.classList.add('border-amber-400', 'bg-amber-50/50');
            } else {
                el.classList.remove('border-amber-400', 'bg-amber-50/50');
            }
        } else {
            selectedB[num] = !selectedB[num];
            if (selectedB[num]) {
                el.classList.add('border-blue-400', 'bg-blue-50/50');
            } else {
                el.classList.remove('border-blue-400', 'bg-blue-50/50');
            }
        }
    };

    window.check205Q1 = function() {
        const fb = document.getElementById('fb-205-q1');
        fb.classList.remove('hidden');

        // Đúng ở a: câu 2 và 4
        const correctA = (!selectedA[1] && selectedA[2] && !selectedA[3] && selectedA[4]);
        // Đúng ở b: câu 2, 4, 6
        const correctB = (!selectedB[1] && selectedB[2] && !selectedB[3] && selectedB[4] && !selectedB[5] && selectedB[6]);

        if (correctA && correctB) {
            fb.innerHTML = '🎉 Tuyệt vời! Em đã chọn chính xác tất cả các câu ghép trong hai đoạn văn.';
            fb.className = 'text-lg md:text-2xl font-black text-center text-emerald-600 mt-4';
        } else {
            fb.innerHTML = '⚠️ Có câu chọn chưa chính xác. Gợi ý: Đoạn a có 2 câu ghép; Đoạn b có 3 câu ghép. Em hãy xem xét cấu tạo chủ ngữ - vị ngữ của mỗi vế câu và thử lại nhé!';
            fb.className = 'text-lg md:text-2xl font-black text-center text-amber-600 mt-4';
        }
    };

    // BÀI 2: PHÂN LOẠI
    window.check205Q2 = function() {
        const a2 = document.getElementById('select-c205-a2').value;
        const a4 = document.getElementById('select-c205-a4').value;
        const b2 = document.getElementById('select-c205-b2').value;
        const b4 = document.getElementById('select-c205-b4').value;
        const b6 = document.getElementById('select-c205-b6').value;
        const fb = document.getElementById('fb-205-q2');

        fb.classList.remove('hidden');

        if (!a2 || !a4 || !b2 || !b4 || !b6) {
            fb.innerHTML = '⚠️ Em hãy phân loại đầy đủ cho cả 5 câu ghép nhé!';
            fb.className = 'text-lg md:text-2xl font-black text-center text-amber-600 mt-4';
            return;
        }

        const isCorrect = (
            a2 === 'tructiep' &&
            a4 === 'tructiep' &&
            b2 === 'houng' &&
            b4 === 'kettu' &&
            b6 === 'kettu'
        );

        if (isCorrect) {
            fb.innerHTML = '🎉 Xuất sắc! Phân loại của em hoàn toàn đúng đắn. Câu a2 và a4 nối trực tiếp qua dấu phẩy. Câu b4 dùng cặp kết từ "Hễ... thì", câu b6 dùng từ nối "và". Câu b2 sử dụng cặp từ hô ứng "bao nhiêu... bấy nhiêu".';
            fb.className = 'text-lg md:text-2xl font-black text-center text-emerald-600 mt-4';
        } else {
            fb.innerHTML = '⚠️ Vẫn còn câu phân loại chưa chính xác. Em hãy kiểm tra kĩ các từ liên kết trong câu và thử lại nhé!';
            fb.className = 'text-lg md:text-2xl font-black text-center text-amber-600 mt-4';
        }
    };

    // BÀI 3: AI REVIEW
    window.check205EssayAI = async function() {
        const text = document.getElementById('essay-205').value.trim();
        if (!text) {
            alert('Em hãy nhập câu ghép trước khi gửi bài nhé!');
            return;
        }

        const fb = document.getElementById('fb-205-ai');
        fb.classList.remove('hidden');
        fb.innerHTML = '<div class="p-4 bg-white border border-blue-100 rounded-xl italic text-lg md:text-xl text-blue-600 animate-pulse text-center">Thầy E AI đang kiểm tra câu văn của em, chờ một chút nhé...</div>';

        const prompt = \`Học sinh lớp 5 đặt 1-2 câu ghép nêu ý kiến về việc giữ gìn lớp học sạch đẹp, đồng thời xác định các vế câu trong câu ghép đó.
Câu văn của học sinh: "\${text}"
Hãy đóng vai Thầy E nhận xét chi tiết: (1) Câu văn của học sinh có phải là câu ghép thực sự không (phân tích chủ ngữ - vị ngữ từng vế)? (2) Nội dung câu có ý thức giữ vệ sinh môi trường lớp học tốt không? (3) Chỉ ra các vế câu và từ nối (nếu có) để học sinh đối chiếu. Xưng hô Thầy và gọi học sinh là em.\`;

        await askAI('fb-205-ai', prompt, 'single', 'writing', 30, prompt);
    };
</script>
        `;
    },
    "quizPool": [
        {
            "question": "Thế nào là câu ghép?",
            "options": [
                "Câu chỉ có một chủ ngữ và một vị ngữ duy nhất",
                "Câu do nhiều vế câu ghép lại, mỗi vế thường có cấu tạo như một câu đơn",
                "Câu chứa nhiều tính từ miêu tả phong cảnh",
                "Câu được trích dẫn nguyên văn từ thơ ca"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cách nào sau đây là cách nối các vế câu ghép trực tiếp?",
            "options": [
                "Nối bằng kết từ 'nhưng'",
                "Nối bằng dấu câu (dấu phẩy, dấu chấm phẩy, dấu hai chấm)",
                "Nối bằng cặp từ hô ứng 'bao nhiêu... bấy nhiêu...'",
                "Nối bằng kết từ 'và'"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Câu ghép nào dưới đây được nối vế trực tiếp?",
            "options": [
                "Trời mưa to nên em đi học muộn.",
                "Gió thổi mạnh, những ngọn tre đu đưa qua lại.",
                "Hễ trời nắng thì đất đai nứt nẻ.",
                "Mưa càng to, đường càng lầy lội."
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Trong câu 'Những ngọn đồi thoai thoải, ngọn nọ gối lên ngọn kia.', hai vế câu nối với nhau bằng gì?",
            "options": [
                "Nối bằng dấu phẩy trực tiếp",
                "Nối bằng kết từ và",
                "Nối bằng cặp từ hô ứng",
                "Nối bằng cặp kết từ tuy... nhưng..."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cặp từ nào sau đây là cặp từ hô ứng dùng để nối các vế câu ghép?",
            "options": [
                "Vì... nên...",
                "Tuy... nhưng...",
                "bao nhiêu... bấy nhiêu...",
                "Không những... mà còn..."
            ],
            "answer": 2,
            "level": 2
        },
        {
            "question": "Trong câu 'Vùng đảo có bao nhiêu điều đặc biệt thì các em cũng có bấy nhiêu trải nghiệm.', từ hô ứng được sử dụng là gì?",
            "options": [
                "đặc biệt - trải nghiệm",
                "bao nhiêu - bấy nhiêu",
                "vùng đảo - các em",
                "có - cũng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Câu nào dưới đây sử dụng cặp kết từ để nối các vế câu ghép?",
            "options": [
                "Hễ trò gặp bài toán khó thì chúng lập tức hỏi thầy.",
                "Mưa rào ào ào trút xuống sân trường.",
                "Nắng lên, cảnh vật rực rỡ tươi sáng.",
                "Đường càng trơn, xe cộ đi lại càng khó khăn."
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Trong câu ghép 'Hễ trò gặp bài toán khó thì chúng chạy ngay qua nhà thầy.', cặp kết từ được dùng là:",
            "options": [
                "gặp - chạy",
                "Hễ... thì...",
                "khó - lập tức",
                "trò - chúng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Câu ghép: 'Mỗi trường học trên đảo chỉ có hai thầy giáo và các thầy kiêm quản từ lớp Một đến lớp Năm.' được nối bằng từ nối nào?",
            "options": [
                "chỉ có",
                "và",
                "các thầy",
                "từ... đến..."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Xác định vế thứ nhất của câu ghép: 'Tuy trời mưa to nhưng bạn Nam vẫn đến lớp đúng giờ.'",
            "options": [
                "Tuy trời mưa to",
                "nhưng bạn Nam vẫn đến lớp đúng giờ",
                "bạn Nam vẫn đến lớp đúng giờ",
                "trời mưa to"
            ],
            "answer": 3,
            "level": 2
        },
        {
            "question": "Câu nào sau đây KHÔNG phải là câu ghép?",
            "options": [
                "Trăng lên, nước sông sáng lấp lánh như dát bạc.",
                "Sau những giờ học tập căng thẳng, chúng em cùng nhau đá bóng ở sân trường.",
                "Lớp trưởng hô to và cả lớp lập tức xếp hàng thẳng tắp.",
                "Mưa càng to, nước sông Hồng dâng lên càng nhanh."
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Mỗi vế câu trong câu ghép cần đáp ứng điều kiện cấu trúc nào?",
            "options": [
                "Chỉ cần có duy nhất một tính từ miêu tả",
                "Thường có cấu tạo đầy đủ hai bộ phận chính là chủ ngữ và vị ngữ",
                "Bắt buộc phải có trạng ngữ ở đầu câu",
                "Bắt buộc chứa từ láy tượng hình"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Cặp từ hô ứng 'vừa... đã...' biểu thị quan hệ thời gian nào giữa hai vế câu?",
            "options": [
                "Hai hành động xảy ra cách nhau rất lâu",
                "Hai hành động xảy ra nối tiếp nhau rất nhanh chóng, tức thì",
                "Hành động thứ hai xảy ra trước hành động thứ nhất",
                "Hai hành động xảy ra hoàn toàn độc lập không liên quan"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Từ nối 'và' trong câu ghép biểu thị mối quan hệ gì giữa hai vế câu?",
            "options": [
                "Mối quan hệ tương phản đối lập nhau",
                "Mối quan hệ đồng thời, nối tiếp hoặc bổ sung ý nghĩa",
                "Mối quan hệ giả thiết kết quả",
                "Mối quan hệ nguyên nhân kết quả"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Câu ghép nào dưới đây có nội dung bảo vệ môi trường trường học?",
            "options": [
                "Học sinh quét dọn lớp học và lau bảng sạch sẽ.",
                "Nếu chúng ta giữ gìn lớp học sạch đẹp thì không gian học tập sẽ luôn trong lành.",
                "Trường em có rất nhiều cây bàng cổ thụ tỏa bóng mát.",
                "Giờ ra chơi, sân trường vang tiếng cười nói rộn rã."
            ],
            "answer": 1,
            "level": 1
        }
    ]
};