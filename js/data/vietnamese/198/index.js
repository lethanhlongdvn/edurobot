export const lesson198 = {
    "topic": "Tiếng Việt 5",
    "week": "29",
    "period": "198",
    "title": "LTVC: LUYỆN TẬP VỀ TỪ ĐỒNG NGHĨA VÀ TỪ ĐA NGHĨA",
    "desc": "Luyện tập củng cố kiến thức về từ đồng nghĩa và từ đa nghĩa qua các bài tập thực hành.",
    "subject": "Luyện từ và câu",
    "theme": "Tiếp bước cha ông",
    "audio": "am_thanh/292-luyentap-dongnghia-danghia.mp3",
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
                Tìm và lựa chọn được các từ đồng nghĩa phù hợp nhất với ngữ cảnh.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Nhận biết và phân biệt các từ đồng nghĩa, từ không đồng nghĩa trong nhóm từ.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Phân biệt được nghĩa gốc và nghĩa chuyển của các từ đa nghĩa trong thơ văn.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Viết đoạn văn ngắn cảm nghĩ có sử dụng cặp từ đồng nghĩa phù hợp.
            </li>
        </ul>
    </div>

    <!-- 📚 Ghi nhớ kiến thức -->
    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl bg-white border border-slate-100 space-y-8">
        <div class="border-b pb-4">
            <h2 class="text-2xl md:text-4xl lg:text-5xl font-black text-slate-800">💡 Kiến thức cần nhớ</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700">
            <!-- Từ đồng nghĩa -->
            <div class="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-6 space-y-3">
                <h4 class="text-xl md:text-3xl font-black text-emerald-900 flex items-center gap-2">
                    <span class="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-sm shadow-md">✍️</span>
                    Từ đồng nghĩa
                </h4>
                <p class="text-lg md:text-2xl font-bold leading-relaxed">
                    Là những từ có nghĩa <strong>giống nhau</strong> hoặc <strong>gần giống nhau</strong>.
                </p>
                <div class="text-base md:text-xl bg-white/80 p-4 rounded-xl border border-emerald-100 font-bold space-y-2">
                    <p>• <em>Đồng nghĩa hoàn toàn:</em> Có thể thay thế cho nhau. (Ví dụ: quả - trái, hổ - cọp...)</p>
                    <p>• <em>Đồng nghĩa không hoàn toàn:</em> Có sắc thái nghĩa khác nhau. (Ví dụ: ăn - xơi - chén, hi sinh - bỏ mạng...)</p>
                </div>
            </div>

            <!-- Từ đa nghĩa -->
            <div class="bg-blue-50/50 border border-blue-100 rounded-3xl p-6 space-y-3">
                <h4 class="text-xl md:text-3xl font-black text-blue-600 flex items-center gap-2">
                    <span class="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm shadow-md">🌱</span>
                    Từ đa nghĩa
                </h4>
                <p class="text-lg md:text-2xl font-bold leading-relaxed">
                    Là từ có <strong>một nghĩa gốc</strong> và <strong>một hay một số nghĩa chuyển</strong>. Các nghĩa luôn có mối liên hệ với nhau.
                </p>
                <div class="text-base md:text-xl bg-white/80 p-4 rounded-xl border border-blue-100 font-bold space-y-2">
                    <p>• <em>Nghĩa gốc:</em> Nghĩa ban đầu làm cơ sở. (Ví dụ: chân trong "đau chân")</p>
                    <p>• <em>Nghĩa chuyển:</em> Nghĩa hình thành từ nghĩa gốc. (Ví dụ: chân trong "chân bàn")</p>
                </div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": (UI) => {
        const pairs = [
            { left: "ăn xăng, ăn dầu", right: "(Máy móc, xe cộ) tốn nhiều nhiên liệu khi hoạt động" },
            { left: "ăn cơm, ăn cỏ", right: "Tự cho thức ăn vào cơ thể" },
            { left: "ăn cưới, ăn giỗ", right: "Ăn uống nhân dịp gì đó" }
        ];

        const matchingHtml = window.Lesson.renderMatchingExercise(
            '198-matching-an',
            'Bài tập 4: Nối từ "ăn" trong mỗi nhóm từ với nghĩa tương ứng',
            pairs
        );

        return `
<div class="space-y-12 max-w-4xl mx-auto py-6">
    <!-- BÀI TẬP 1 -->
    <section class="bg-white p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">1</span>
            <h3 class="text-xl md:text-3xl font-black text-blue-600">Bài tập 1: Chọn từ thích hợp thay cho bông hoa</h3>
        </div>

        <p class="text-lg md:text-2xl font-bold text-slate-700">Chọn từ thích hợp nhất trong các từ đồng nghĩa (in nghiêng) để hoàn thành đoạn văn dưới đây:</p>

        <div class="serif-font text-xl md:text-3xl text-slate-800 leading-relaxed bg-amber-50/40 p-6 md:p-10 rounded-3xl border-2 border-amber-100 font-bold space-y-4">
            <p class="text-justify">
                Từ nhỏ, Lương Thế Vinh đã 
                <select id="q1-select-1" class="mx-1 p-2 rounded-xl border-2 border-amber-200 text-blue-600 font-black outline-none bg-white text-lg md:text-2xl">
                    <option value="">-- Chọn từ --</option>
                    <option value="lừng danh">lừng danh</option>
                    <option value="nổi tiếng">nổi tiếng</option>
                    <option value="nức tiếng">nức tiếng</option>
                </select>
                về óc 
                <select id="q1-select-2" class="mx-1 p-2 rounded-xl border-2 border-amber-200 text-blue-600 font-black outline-none bg-white text-lg md:text-2xl">
                    <option value="">-- Chọn từ --</option>
                    <option value="xem xét">xem xét</option>
                    <option value="nhìn">nhìn</option>
                    <option value="quan sát">quan sát</option>
                </select>
                và tính toán. Một hôm, cậu đem một quả bưởi ra bãi cỏ làm bóng chơi với các bạn. Đang chơi, bỗng quả bưởi 
                <select id="q1-select-3" class="mx-1 p-2 rounded-xl border-2 border-amber-200 text-blue-600 font-black outline-none bg-white text-lg md:text-2xl">
                    <option value="">-- Chọn từ --</option>
                    <option value="lăn">lăn</option>
                    <option value="bay">bay</option>
                </select>
                xuống một cái hố gần đó. Bọn trẻ nhìn xuống cái hố đầy nuối tiếc. Vinh bảo bọn trẻ lấy nước đổ vào cái hố ấy. Nước 
                <select id="q1-select-4" class="mx-1 p-2 rounded-xl border-2 border-amber-200 text-blue-600 font-black outline-none bg-white text-lg md:text-2xl">
                    <option value="">-- Chọn từ --</option>
                    <option value="dâng">dâng</option>
                    <option value="tăng">tăng</option>
                </select>
                đến đâu, bưởi nổi lên đến đó.
            </p>
            <p class="text-right text-base md:text-xl font-normal text-slate-500">(Theo Vũ Ngọc Khánh)</p>
        </div>

        <div class="flex justify-center pt-2">
            <button onclick="check198Q1()" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md text-lg uppercase">Kiểm tra bài 1</button>
        </div>
        <div id="fb-198-q1" class="text-lg md:text-2xl font-black text-center hidden"></div>
    </section>

    <!-- BÀI TẬP 2 -->
    <section class="bg-white p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">2</span>
            <h3 class="text-xl md:text-3xl font-black text-blue-600">Bài tập 2: Tìm từ không đồng nghĩa</h3>
        </div>

        <p class="text-lg md:text-2xl font-bold text-slate-700">Nhấp vào từ <strong>không đồng nghĩa</strong> với những từ còn lại trong mỗi dãy sau:</p>

        <div class="space-y-6">
            <!-- Dãy a -->
            <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                <span class="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-lg font-bold text-sm">Dãy a</span>
                <div class="flex flex-wrap gap-3">
                    <button onclick="selectWord198('a', this)" class="q2a-btn px-6 py-3 bg-white border-2 border-slate-200 hover:border-blue-400 rounded-xl font-bold text-lg md:text-2xl text-slate-800 transition-all cursor-pointer">nhân dân</button>
                    <button onclick="selectWord198('a', this)" class="q2a-btn px-6 py-3 bg-white border-2 border-slate-200 hover:border-blue-400 rounded-xl font-bold text-lg md:text-2xl text-slate-800 transition-all cursor-pointer">đồng bào</button>
                    <button onclick="selectWord198('a', this)" class="q2a-btn px-6 py-3 bg-white border-2 border-slate-200 hover:border-blue-400 rounded-xl font-bold text-lg md:text-2xl text-slate-800 transition-all cursor-pointer">bạn bè</button>
                    <button onclick="selectWord198('a', this)" class="q2a-btn px-6 py-3 bg-white border-2 border-slate-200 hover:border-blue-400 rounded-xl font-bold text-lg md:text-2xl text-slate-800 transition-all cursor-pointer">quốc dân</button>
                </div>
            </div>

            <!-- Dãy b -->
            <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                <span class="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-lg font-bold text-sm">Dãy b</span>
                <div class="flex flex-wrap gap-3">
                    <button onclick="selectWord198('b', this)" class="q2b-btn px-6 py-3 bg-white border-2 border-slate-200 hover:border-blue-400 rounded-xl font-bold text-lg md:text-2xl text-slate-800 transition-all cursor-pointer">dũng cảm</button>
                    <button onclick="selectWord198('b', this)" class="q2b-btn px-6 py-3 bg-white border-2 border-slate-200 hover:border-blue-400 rounded-xl font-bold text-lg md:text-2xl text-slate-800 transition-all cursor-pointer">liều lĩnh</button>
                    <button onclick="selectWord198('b', this)" class="q2b-btn px-6 py-3 bg-white border-2 border-slate-200 hover:border-blue-400 rounded-xl font-bold text-lg md:text-2xl text-slate-800 transition-all cursor-pointer">gan dạ</button>
                    <button onclick="selectWord198('b', this)" class="q2b-btn px-6 py-3 bg-white border-2 border-slate-200 hover:border-blue-400 rounded-xl font-bold text-lg md:text-2xl text-slate-800 transition-all cursor-pointer">can đảm</button>
                </div>
            </div>

            <!-- Dãy c -->
            <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                <span class="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-lg font-bold text-sm">Dãy c</span>
                <div class="flex flex-wrap gap-3">
                    <button onclick="selectWord198('c', this)" class="q2c-btn px-6 py-3 bg-white border-2 border-slate-200 hover:border-blue-400 rounded-xl font-bold text-lg md:text-2xl text-slate-800 transition-all cursor-pointer">tổ quốc</button>
                    <button onclick="selectWord198('c', this)" class="q2c-btn px-6 py-3 bg-white border-2 border-slate-200 hover:border-blue-400 rounded-xl font-bold text-lg md:text-2xl text-slate-800 transition-all cursor-pointer">non sông</button>
                    <button onclick="selectWord198('c', this)" class="q2c-btn px-6 py-3 bg-white border-2 border-slate-200 hover:border-blue-400 rounded-xl font-bold text-lg md:text-2xl text-slate-800 transition-all cursor-pointer">nhà nước</button>
                    <button onclick="selectWord198('c', this)" class="q2c-btn px-6 py-3 bg-white border-2 border-slate-200 hover:border-blue-400 rounded-xl font-bold text-lg md:text-2xl text-slate-800 transition-all cursor-pointer">đất nước</button>
                </div>
            </div>
        </div>

        <div class="flex justify-center pt-2">
            <button onclick="check198Q2()" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md text-lg uppercase">Kiểm tra bài 2</button>
        </div>
        <div id="fb-198-q2" class="text-lg md:text-2xl font-black text-center hidden"></div>
    </section>

    <!-- BÀI TẬP 3 -->
    <section class="bg-white p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">3</span>
            <h3 class="text-xl md:text-3xl font-black text-blue-600">Bài tập 3: Tìm hiểu nghĩa của từ trong đoạn thơ</h3>
        </div>

        <div class="bg-amber-50/30 border border-amber-100 p-6 rounded-2xl">
            <div class="serif-font text-xl md:text-3xl text-slate-800 leading-relaxed italic text-center space-y-1 font-bold">
                <p>Không có <span class="text-blue-600 font-extrabold underline">chân</span> có <span class="text-blue-600 font-extrabold underline">cánh</span></p>
                <p>Mà lại gọi: con sông?</p>
                <p>Không có <span class="text-blue-600 font-extrabold underline">lá</span> có cành</p>
                <p>Lại gọi là: <span class="text-blue-600 font-extrabold underline">ngọn</span> gió?</p>
            </div>
            <p class="text-right text-slate-500 text-base md:text-xl font-normal mt-2">(Xuân Quỳnh)</p>
        </div>

        <!-- Câu hỏi a -->
        <div class="space-y-3">
            <p class="text-lg md:text-2xl font-bold text-slate-700">a. Mỗi từ in đậm (<em>chân, cánh, lá, ngọn</em>) trong đoạn thơ được dùng với nghĩa nào?</p>
            <div class="flex gap-4">
                <label class="flex items-center gap-2 cursor-pointer text-lg md:text-2xl font-bold text-slate-800">
                    <input type="radio" name="q3a-answer" value="goc" class="w-5 h-5"> Nghĩa gốc
                </label>
                <label class="flex items-center gap-2 cursor-pointer text-lg md:text-2xl font-bold text-slate-800">
                    <input type="radio" name="q3a-answer" value="chuyen" class="w-5 h-5"> Nghĩa chuyển
                </label>
            </div>
        </div>

        <!-- Câu hỏi b -->
        <div class="space-y-3">
            <p class="text-lg md:text-2xl font-bold text-slate-700">b. Đặt một câu có từ in đậm được sử dụng với nghĩa chuyển (Ví dụ: "lá" trong "lá phổi", "ngọn" trong "ngọn núi"...):</p>
            <textarea id="essay-198-3" rows="3" class="w-full p-4 rounded-xl border border-slate-250 focus:ring-4 focus:ring-blue-100 outline-none text-lg md:text-2xl font-bold leading-relaxed" placeholder="Ví dụ: Rừng là lá phổi xanh của Trái Đất."></textarea>
        </div>

        <div class="flex justify-center pt-2">
            <button onclick="check198Q3()" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md text-lg uppercase">Kiểm tra bài 3</button>
        </div>
        <div id="fb-198-q3" class="text-lg md:text-2xl font-black text-center hidden"></div>
    </section>

    <!-- BÀI TẬP 4 (MATCHING) -->
    <div>
        ${matchingHtml}
    </div>

    <!-- BÀI TẬP 5 -->
    <section class="bg-white p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">5</span>
            <h3 class="text-xl md:text-3xl font-black text-blue-600">Bài tập 5: Viết đoạn văn có cặp từ đồng nghĩa</h3>
        </div>

        <p class="text-lg md:text-2xl font-bold text-slate-700">Viết đoạn văn ngắn (3 – 4 câu) nêu cảm nghĩ của em về danh y Tuệ Tĩnh, trong đó có sử dụng một cặp từ đồng nghĩa.</p>

        <div class="bg-slate-50 border border-slate-200 p-6 rounded-2xl text-base md:text-xl font-bold text-slate-600 space-y-2 leading-relaxed">
            <p class="text-slate-900 font-black">💡 Gợi ý một số cặp từ đồng nghĩa có thể dùng:</p>
            <p>• <em>yêu nước - ái quốc</em></p>
            <p>• <em>danh y - thầy thuốc / bác sĩ</em></p>
            <p>• <em>thương yêu - kính trọng / kính yêu</em></p>
            <p>• <em>trị bệnh - chữa bệnh / cứu chữa</em></p>
        </div>

        <div class="p-6 bg-amber-50/30 border border-amber-100 rounded-3xl space-y-4">
            <textarea id="essay-198-5" rows="4" class="w-full p-4 rounded-xl border border-slate-250 focus:ring-4 focus:ring-blue-100 outline-none text-lg md:text-2xl font-bold leading-relaxed" placeholder="Nhập đoạn văn của em tại đây..."></textarea>
            <div class="flex justify-center">
                <button onclick="check198Q5AI()" class="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-2xl shadow-xl transition-all active:scale-[0.95] flex items-center justify-center gap-3 text-lg uppercase tracking-wider cursor-pointer">
                    <span>🤖</span>
                    <span>Nộp cho Thầy E AI nhận xét</span>
                </button>
            </div>
            <div id="fb-198-q5-ai" class="w-full hidden mt-4"></div>
        </div>
    </section>
</div>

<script>
    // BÀI 1
    window.check198Q1 = function() {
        const s1 = document.getElementById('q1-select-1').value;
        const s2 = document.getElementById('q1-select-2').value;
        const s3 = document.getElementById('q1-select-3').value;
        const s4 = document.getElementById('q1-select-4').value;
        const fb = document.getElementById('fb-198-q1');

        fb.classList.remove('hidden');
        if (!s1 || !s2 || !s3 || !s4) {
            fb.innerHTML = '⚠️ Em hãy điền đầy đủ tất cả các ô chọn nhé!';
            fb.className = 'text-lg md:text-2xl font-black text-center text-amber-600 mt-4';
            return;
        }

        if (s1 === 'nổi tiếng' && s2 === 'quan sát' && s3 === 'lăn' && s4 === 'dâng') {
            fb.innerHTML = '🎉 Chính xác! Em đã chọn các từ đồng nghĩa rất phù hợp với ngữ cảnh.';
            fb.className = 'text-lg md:text-2xl font-black text-center text-emerald-600 mt-4';
        } else {
            fb.innerHTML = '⚠️ Có từ chọn chưa thích hợp nhất. Em hãy xem xét lại ý nghĩa câu văn và chọn lại nhé!';
            fb.className = 'text-lg md:text-2xl font-black text-center text-amber-600 mt-4';
        }
    };

    // BÀI 2
    let selectedWords198 = { a: '', b: '', c: '' };
    window.selectWord198 = function(row, btn) {
        // Deselect current row buttons
        const classSelector = row === 'a' ? '.q2a-btn' : row === 'b' ? '.q2b-btn' : '.q2c-btn';
        document.querySelectorAll(classSelector).forEach(el => {
            el.classList.remove('border-blue-500', 'bg-blue-50', 'text-blue-600');
            el.classList.add('border-slate-200', 'bg-white', 'text-slate-800');
        });

        // Select clicked button
        btn.classList.remove('border-slate-200', 'bg-white', 'text-slate-800');
        btn.classList.add('border-blue-500', 'bg-blue-50', 'text-blue-600');
        selectedWords198[row] = btn.textContent.trim();
    };

    window.check198Q2 = function() {
        const fb = document.getElementById('fb-198-q2');
        fb.classList.remove('hidden');

        if (!selectedWords198.a || !selectedWords198.b || !selectedWords198.c) {
            fb.innerHTML = '⚠️ Em hãy chọn đủ cả 3 từ của 3 dãy nhé!';
            fb.className = 'text-lg md:text-2xl font-black text-center text-amber-600 mt-4';
            return;
        }

        const isCorrectA = (selectedWords198.a === 'bạn bè');
        const isCorrectB = (selectedWords198.b === 'liều lĩnh');
        const isCorrectC = (selectedWords198.c === 'nhà nước');

        if (isCorrectA && isCorrectB && isCorrectC) {
            fb.innerHTML = '🎉 Hoàn hảo! Em đã tìm chính xác từ không đồng nghĩa trong cả 3 dãy.';
            fb.className = 'text-lg md:text-2xl font-black text-center text-emerald-600 mt-4';
        } else {
            fb.innerHTML = '⚠️ Chưa đúng hoàn toàn rồi. Gợi ý: Dãy a nói về toàn dân tộc; Dãy b có một từ mang ý làm liều; Dãy c có một từ chỉ cơ quan nhà nước.';
            fb.className = 'text-lg md:text-2xl font-black text-center text-amber-600 mt-4';
        }
    };

    // BÀI 3
    window.check198Q3 = async function() {
        const radioSelected = document.querySelector('input[name="q3a-answer"]:checked');
        const text = document.getElementById('essay-198-3').value.trim();
        const fb = document.getElementById('fb-198-q3');
        fb.classList.remove('hidden');

        if (!radioSelected) {
            fb.innerHTML = '⚠️ Em hãy trả lời câu hỏi a trước nhé!';
            fb.className = 'text-lg md:text-2xl font-black text-center text-amber-600 mt-4';
            return;
        }

        const partACorrect = (radioSelected.value === 'chuyen');
        if (!partACorrect) {
            fb.innerHTML = '⚠️ Câu a chưa chính xác. Hãy nhớ rằng các bộ phận này của con sông/cơn gió đều được đặt tên theo bộ phận của cơ thể người hoặc thực vật, nên là nghĩa chuyển.';
            fb.className = 'text-lg md:text-2xl font-black text-center text-amber-600 mt-4';
            return;
        }

        if (!text) {
            fb.innerHTML = '🎉 Câu a đúng! Hãy nhập tiếp câu b để Thầy E AI nhận xét nhé.';
            fb.className = 'text-lg md:text-2xl font-black text-center text-emerald-600 mt-4';
            return;
        }

        fb.innerHTML = '<div class="p-4 bg-white border border-blue-100 rounded-xl italic text-lg md:text-xl text-blue-600 animate-pulse text-center">Thầy E AI đang kiểm tra câu văn của em, chờ một chút nhé...</div>';
        
        const prompt = \`Học sinh lớp 5 đặt một câu văn chứa một trong các từ (chân, cánh, lá, ngọn) mang nghĩa chuyển.
Câu văn của học sinh: "\${text}"
Hãy nhận xét câu văn này xem từ được sử dụng có thực sự mang nghĩa chuyển không (Ví dụ: "lá phổi", "nhân vật chính", "ngọn núi", "chân tường", "chân bàn" là đúng; còn đặt câu chỉ bộ phận thực vật/động vật là sai). Nếu đúng, khen ngợi ngắn gọn. Nếu sai, giải thích và gợi ý lại thân thiện. Xưng hô Thầy/Cô và em.\`;

        await askAI('fb-198-q3', prompt, 'single', 'writing', 29, prompt);
    };

    // BÀI 5
    window.check198Q5AI = async function() {
        const text = document.getElementById('essay-198-5').value.trim();
        if (!text) {
            alert('Em hãy nhập đoạn văn trước khi gửi nhé!');
            return;
        }

        const fb = document.getElementById('fb-198-q5-ai');
        fb.classList.remove('hidden');
        fb.innerHTML = '<div class="p-6 bg-white border-2 border-sky-100 rounded-2xl shadow-lg italic text-lg md:text-2xl text-sky-900 animate-pulse text-center">Thầy E AI đang đọc đoạn văn của em, chờ một chút nhé...</div>';

        const prompt = \`Học sinh lớp 5 viết một đoạn văn ngắn (3-4 câu) nêu cảm nghĩ về danh y Tuệ Tĩnh, trong đó bắt buộc có sử dụng ít nhất một cặp từ đồng nghĩa (ví dụ: thương yêu - kính trọng, chữa bệnh - trị bệnh, danh y - thầy thuốc,...).
Đoạn văn của học sinh: "\${text}"
Hãy đóng vai Thầy E, nhận xét chi tiết: (1) Đoạn văn có đủ số câu và nội dung cảm nghĩ về Tuệ Tĩnh không? (2) Chỉ ra cặp từ đồng nghĩa mà học sinh đã sử dụng trong đoạn văn. (3) Đánh giá cách diễn đạt, sự mạch lạc và cho điểm trên thang điểm 10. Xưng hô "Thầy" và gọi học sinh là "em".\`;

        await askAI('fb-198-q5-ai', prompt, 'single', 'writing', 29, prompt);
    };
</script>
        `;
    },
    "quizPool": [
        {
            "question": "Từ đồng nghĩa là gì?",
            "options": [
                "Những từ có nghĩa trái ngược nhau hoàn toàn",
                "Những từ có nghĩa giống nhau hoặc gần giống nhau",
                "Những từ có âm đọc giống nhau nhưng nghĩa khác nhau",
                "Những từ chỉ xuất hiện trong thơ ca dân gian"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cặp từ nào dưới đây là cặp từ đồng nghĩa hoàn toàn?",
            "options": [
                "yêu nước - liều lĩnh",
                "mẹ - u",
                "ăn - chén",
                "chết - từ trần"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cặp từ nào dưới đây là cặp từ đồng nghĩa không hoàn toàn?",
            "options": [
                "hổ - cọp",
                "trái - quả",
                "hi sinh - bỏ mạng",
                "ba - bố"
            ],
            "answer": 2,
            "level": 2
        },
        {
            "question": "Từ nào đồng nghĩa với từ 'dũng cảm'?",
            "options": [
                "hiền lành",
                "gan dạ",
                "chăm chỉ",
                "thông minh"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ nào không đồng nghĩa với các từ còn lại trong dãy sau: 'tổ quốc', 'non sông', 'đất nước', 'nhà nước'?",
            "options": [
                "tổ quốc",
                "non sông",
                "nhà nước",
                "đất nước"
            ],
            "answer": 2,
            "level": 2
        },
        {
            "question": "Từ nào không đồng nghĩa với các từ còn lại trong dãy sau: 'nhân dân', 'đồng bào', 'quốc dân', 'bạn bè'?",
            "options": [
                "nhân dân",
                "đồng bào",
                "bạn bè",
                "quốc dân"
            ],
            "answer": 2,
            "level": 2
        },
        {
            "question": "Từ nào không đồng nghĩa với các từ còn lại trong dãy sau: 'dũng cảm', 'can đảm', 'gan dạ', 'liều lĩnh'?",
            "options": [
                "dũng cảm",
                "can đảm",
                "gan dạ",
                "liều lĩnh"
            ],
            "answer": 3,
            "level": 2
        },
        {
            "question": "Thế nào là từ đa nghĩa?",
            "options": [
                "Từ có nhiều nghĩa không liên quan gì đến nhau",
                "Từ chỉ có duy nhất một nghĩa gốc duy nhất",
                "Từ có một nghĩa gốc và một hay một số nghĩa chuyển, các nghĩa có liên hệ với nhau",
                "Từ viết giống nhau nhưng đọc khác nhau"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Trong câu 'Lá lành đùm lá rách', từ 'lá' được dùng với nghĩa nào?",
            "options": [
                "Nghĩa gốc",
                "Nghĩa chuyển",
                "Nghĩa bóng hoàn toàn mới",
                "Không thuộc nghĩa nào"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Trong câu 'Rừng là lá phổi xanh của Trái Đất', từ 'lá' được dùng với nghĩa nào?",
            "options": [
                "Nghĩa gốc",
                "Nghĩa chuyển",
                "Nghĩa đen",
                "Cả nghĩa gốc và nghĩa chuyển"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Trong câu 'Bé bị đau chân', từ 'chân' được dùng với nghĩa nào?",
            "options": [
                "Nghĩa gốc",
                "Nghĩa chuyển",
                "Nghĩa ẩn dụ",
                "Không có nghĩa"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong câu 'Cái chân bàn này bị gãy', từ 'chân' được dùng với nghĩa nào?",
            "options": [
                "Nghĩa gốc",
                "Nghĩa chuyển",
                "Nghĩa đen",
                "Nghĩa ban đầu"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Từ 'ăn' trong nhóm từ 'ăn cơm, ăn cỏ' mang nghĩa nào?",
            "options": [
                "Tự cho thức ăn vào cơ thể",
                "Ăn uống nhân dịp gì đó",
                "Máy móc tốn nhiên liệu khi hoạt động",
                "Tiếp thu kiến thức"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'ăn' trong nhóm từ 'ăn xăng, ăn dầu' mang nghĩa nào?",
            "options": [
                "Tự cho thức ăn vào cơ thể",
                "Ăn uống nhân dịp gì đó",
                "Máy móc tốn nhiều nhiên liệu khi hoạt động",
                "Bị mòn đi do hóa chất"
            ],
            "answer": 2,
            "level": 2
        },
        {
            "question": "Từ 'ăn' trong nhóm từ 'ăn cưới, ăn giỗ' mang nghĩa nào?",
            "options": [
                "Tự cho thức ăn vào cơ thể",
                "Ăn uống nhân dịp gì đó",
                "Được hưởng một phần lợi nhuận",
                "Bị nước cuốn trôi"
            ],
            "answer": 1,
            "level": 2
        }
    ]
};