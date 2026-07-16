export const lesson176 = {
    "topic": "Tiếng Việt 5",
    "week": "26",
    "period": "176",
    "title": "LTVC: LUYỆN TẬP VỀ LIÊN KẾT CÂU TRONG ĐOẠN VĂN",
    "desc": "Học sinh thực hành phân tích các cách liên kết câu trong đoạn văn (lặp từ ngữ, thay thế từ ngữ, dùng từ nối), làm bài tập điền từ và thực hành viết đoạn văn ngắn.",
    "subject": "Tiếng Việt",
    "theme": "Hương sắc trăm miền",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-4xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-blue-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-blue-950 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-900 font-black">•</span>
                Nhận biết chính xác các biện pháp liên kết câu trong các đoạn văn mẫu (lặp từ ngữ, thay thế từ ngữ, dùng từ ngữ nối).
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-900 font-black">•</span>
                Vận dụng linh hoạt các biện pháp liên kết để hoàn thành đoạn văn điền khuyết và viết đoạn văn ngắn giới thiệu về một phương tiện sông nước.
            </li>
        </ul>
    </div>

    <!-- 📝 BÀI 1: PHÂN TÍCH BIỆN PHÁP LIÊN KẾT -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-6 md:p-8 shadow-2xl bg-white border border-slate-100 space-y-6">
            <div class="flex items-start gap-4">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl shrink-0 shadow-lg">1</span>
                <h2 class="text-2xl md:text-5xl font-black text-gray-800">Các câu trong những đoạn văn dưới đây liên kết với nhau bằng cách nào?</h2>
            </div>

            <!-- Đoạn a -->
            <div class="p-6 bg-slate-50 rounded-3xl border border-slate-150 space-y-4">
                <p class="serif-font text-gray-800 leading-relaxed italic text-xl md:text-4xl">
                    "(1) Mới hôm qua, tôi chỉ thấy con đường đất đỏ quen thuộc và những đám cỏ xác xơ. (2) Thế mà hôm nay, đột nhiên những bông hoa mua đầu mùa đã bật nở, tím hồng như những ngọn đèn vui thắp thoáng trong làn sương ấm."
                </p>
                <div class="space-y-2">
                    <p class="text-lg md:text-xl font-bold text-slate-700">Chọn cách liên kết của đoạn văn:</p>
                    <div class="flex flex-wrap gap-3">
                        <button onclick="checkQ1(1, 'a', this)" class="px-4 py-2 rounded-xl border border-slate-350 hover:bg-slate-100 font-bold text-base md:text-lg transition-all">Lặp từ ngữ</button>
                        <button onclick="checkQ1(2, 'a', this)" class="px-4 py-2 rounded-xl border border-slate-350 hover:bg-slate-100 font-bold text-base md:text-lg transition-all">Thay thế từ ngữ</button>
                        <button onclick="checkQ1(3, 'a', this)" class="px-4 py-2 rounded-xl border border-slate-350 hover:bg-slate-100 font-bold text-base md:text-lg transition-all">Dùng từ ngữ nối ("Thế mà")</button>
                    </div>
                    <div id="fb-q1-a" class="hidden text-base md:text-lg font-bold mt-2"></div>
                </div>
            </div>

            <!-- Đoạn b -->
            <div class="p-6 bg-slate-50 rounded-3xl border border-slate-150 space-y-4">
                <p class="serif-font text-gray-800 leading-relaxed italic text-xl md:text-4xl">
                    "(1) Múa sư tử thực chất là một điệu múa võ. (2) Các miếng võ được biểu diễn rõ nhất trong màn sư tử đùa nghịch vờn nhau với đười ươi và khỉ. (3) Đười ươi và khỉ tìm đủ mọi cách để trêu chọc sư tử. (4) Bị trêu chọc, con thú dữ phát khùng nhe răng ra định ngoạm đầu đười ươi và khỉ, nhưng những con vật này dùng đủ miếng võ để né tránh một cách tài tình."
                </p>
                <div class="space-y-2">
                    <p class="text-lg md:text-xl font-bold text-slate-700">Chọn các cách liên kết được sử dụng (Có thể chọn nhiều đáp án):</p>
                    <div class="flex flex-wrap gap-3">
                        <button onclick="checkQ1(1, 'b', this)" class="px-4 py-2 rounded-xl border border-slate-350 hover:bg-slate-100 font-bold text-base md:text-lg transition-all">Lặp từ ngữ ("miếng võ", "đười ươi và khỉ", "sư tử")</button>
                        <button onclick="checkQ1(2, 'b', this)" class="px-4 py-2 rounded-xl border border-slate-350 hover:bg-slate-100 font-bold text-base md:text-lg transition-all">Thay thế từ ngữ ("con thú dữ" thay cho "sư tử", "những con vật này" thay cho "đười ươi và khỉ")</button>
                        <button onclick="checkQ1(3, 'b', this)" class="px-4 py-2 rounded-xl border border-slate-350 hover:bg-slate-100 font-bold text-base md:text-lg transition-all">Dùng từ ngữ nối</button>
                    </div>
                    <div id="fb-q1-b" class="hidden text-base md:text-lg font-bold mt-2"></div>
                </div>
            </div>

            <!-- Đoạn c -->
            <div class="p-6 bg-slate-50 rounded-3xl border border-slate-150 space-y-4">
                <p class="serif-font text-gray-800 leading-relaxed italic text-xl md:text-4xl">
                    "(1) Nhà rông là nơi thờ cúng chung, hội họp chung, tiếp khách chung, vui chơi chung của tất cả dân làng. (2) Kiến trúc bên trong nhà rông khá đặc biệt: nhà trống rỗng, chẳng vướng víu một cây cột nào, có nhiều bếp lửa luôn đượm khói, có nơi dành để chiêng trống, nông cụ,... (3) Đêm đêm, bên bếp lửa bập bùng, các cụ già kể lại cho con cháu nghe biết bao kỉ niệm vui buồn ngôi nhà rông đã từng chứng kiến. (4) Vì vậy, nhà rông đối với tuổi trẻ Tây Nguyên thân thương như cái tổ chim êm ấm."
                </p>
                <div class="space-y-2">
                    <p class="text-lg md:text-xl font-bold text-slate-700">Chọn các cách liên kết của đoạn văn:</p>
                    <div class="flex flex-wrap gap-3">
                        <button onclick="checkQ1(1, 'c', this)" class="px-4 py-2 rounded-xl border border-slate-350 hover:bg-slate-100 font-bold text-base md:text-lg transition-all">Lặp từ ngữ ("nhà rông")</button>
                        <button onclick="checkQ1(2, 'c', this)" class="px-4 py-2 rounded-xl border border-slate-350 hover:bg-slate-100 font-bold text-base md:text-lg transition-all">Thay thế từ ngữ</button>
                        <button onclick="checkQ1(3, 'c', this)" class="px-4 py-2 rounded-xl border border-slate-350 hover:bg-slate-100 font-bold text-base md:text-lg transition-all">Dùng từ ngữ nối ("Vì vậy")</button>
                    </div>
                    <div id="fb-q1-c" class="hidden text-base md:text-lg font-bold mt-2"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- 🌸 BÀI 2: CHỌN TỪ NGỮ THAY CHO BÔNG HOA -->
    <section class="w-full">
        <div class="bg-white rounded-[40px] p-6 md:p-8 border border-slate-100 shadow-xl space-y-6">
            <div class="flex items-start gap-4">
                <span class="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-black text-xl shrink-0 shadow-lg">2</span>
                <h2 class="text-2xl md:text-5xl font-black text-gray-800">Chọn từ ngữ thay cho bông hoa để liên kết các câu trong đoạn văn:</h2>
            </div>
            
            <div class="flex flex-wrap gap-3 p-4 bg-amber-50/50 rounded-2xl border border-amber-100 justify-center">
                <span class="bg-white text-amber-700 px-4 py-2 rounded-xl font-bold shadow-sm text-lg md:text-3xl">người anh</span>
                <span class="bg-white text-amber-700 px-4 py-2 rounded-xl font-bold shadow-sm text-lg md:text-3xl">hai anh em</span>
                <span class="bg-white text-amber-700 px-4 py-2 rounded-xl font-bold shadow-sm text-lg md:text-3xl">hai vợ chồng người em</span>
                <span class="bg-white text-amber-700 px-4 py-2 rounded-xl font-bold shadow-sm text-lg md:text-3xl">nhưng</span>
            </div>

            <div class="serif-font text-gray-800 leading-relaxed space-y-6 bg-slate-50/40 p-6 rounded-3xl border border-slate-100 text-xl md:text-4xl">
                <p>
                    (1) Ngày xửa ngày xưa ở một nhà kia có hai anh em, cha mẹ mất sớm. 
                    (2) 
                    <select id="select-2" class="mx-1 px-3 py-1.5 rounded-lg border-2 border-slate-200 focus:border-amber-400 outline-none text-base md:text-lg font-bold bg-white text-amber-800">
                        <option value="">-- Chọn từ --</option>
                        <option value="người anh">người anh</option>
                        <option value="hai anh em">hai anh em</option>
                        <option value="hai vợ chồng người em">hai vợ chồng người em</option>
                        <option value="nhưng">nhưng</option>
                    </select>
                    chăm lo làm lụng nên trong nhà cũng đủ ăn.
                    (3) 
                    <select id="select-3" class="mx-1 px-3 py-1.5 rounded-lg border-2 border-slate-200 focus:border-amber-400 outline-none text-base md:text-lg font-bold bg-white text-amber-800">
                        <option value="">-- Chọn từ --</option>
                        <option value="người anh">người anh</option>
                        <option value="hai anh em">hai anh em</option>
                        <option value="hai vợ chồng người em">hai vợ chồng người em</option>
                        <option value="nhưng">nhưng</option>
                    </select>
                    từ khi có vợ, người anh sinh ra lười biếng, bao nhiêu công việc khó nhọc đều trút cho vợ chồng người em.
                    (4) 
                    <select id="select-4" class="mx-1 px-3 py-1.5 rounded-lg border-2 border-slate-200 focus:border-amber-400 outline-none text-base md:text-lg font-bold bg-white text-amber-800">
                        <option value="">-- Chọn từ --</option>
                        <option value="người anh">người anh</option>
                        <option value="hai anh em">hai anh em</option>
                        <option value="hai vợ chồng người em">hai vợ chồng người em</option>
                        <option value="nhưng">nhưng</option>
                    </select>
                    thức khuya, dậy sớm, cố gắng làm lụng.
                    (5) Thấy thế, 
                    <select id="select-5" class="mx-1 px-3 py-1.5 rounded-lg border-2 border-slate-200 focus:border-amber-400 outline-none text-base md:text-lg font-bold bg-white text-amber-800">
                        <option value="">-- Chọn từ --</option>
                        <option value="người anh">người anh</option>
                        <option value="hai anh em">hai anh em</option>
                        <option value="hai vợ chồng người em">hai vợ chồng người em</option>
                        <option value="nhưng">nhưng</option>
                    </select>
                    sợ em tranh công, liền bàn với vợ cho hai vợ chồng người em ra ở riêng.
                </p>
                <p class="text-right text-base text-gray-500 italic mt-4 font-sans">(Truyện Cây khế)</p>
            </div>

            <div class="flex justify-center flex-col items-center gap-4">
                <button onclick="checkQ2()" class="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-md transition-all text-lg">
                    ✔️ Kiểm tra kết quả
                </button>
                <div id="fb-q2" class="hidden text-lg font-bold text-center"></div>
            </div>
        </div>
    </section>

    <!-- ✍️ BÀI 3: VIẾT ĐOẠN VĂN NGẮN -->
    <section class="w-full">
        <div class="bg-white rounded-[40px] p-6 md:p-10 border-4 border-sky-50 shadow-2xl space-y-6">
            <div class="flex items-start gap-4">
                <span class="w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center font-black text-xl shrink-0 shadow-lg">3</span>
                <h2 class="text-2xl md:text-5xl font-black text-sky-800">Viết đoạn văn (4 – 5 câu) giới thiệu về một phương tiện đi lại của người dân ở vùng sông nước, trong đó có sử dụng từ ngữ nối để liên kết câu.</h2>
            </div>
            
            <div class="pl-0 md:pl-14 space-y-4">
                <div class="flex justify-end">
                    <button onclick="toggleSpeech('v-176-extend')" class="p-3 bg-sky-100 text-sky-600 rounded-full hover:bg-sky-200 transition-all flex items-center gap-2 font-bold text-lg">
                        <span>🎙️ Nói</span>
                    </button>
                </div>
                <textarea id="v-176-extend" rows="4" class="w-full p-4 rounded-2xl border-2 border-sky-100 focus:ring-4 focus:ring-sky-100 focus:border-sky-400 outline-none transition-all serif-font font-medium text-xl md:text-4xl" placeholder="Viết đoạn văn của em vào đây (chú ý gạch chân hoặc in đậm từ ngữ nối em sử dụng)..."></textarea>
            </div>

            <!-- Nút gửi và Phản hồi AI -->
            <div class="flex justify-center flex-col items-center gap-6 pt-4">
                <button onclick="check176Extend()" class="px-8 py-4 md:px-12 md:py-5 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-2xl shadow-xl transition-all active:scale-[0.95] flex items-center justify-center gap-3 text-lg md:text-xl uppercase tracking-wider">
                    <span>🤖</span> 
                    <span>Gửi đoạn văn cho EduRobot</span>
                </button>
                <div id="fb-176-extend" class="w-full hidden mt-4"></div>
            </div>
        </div>
    </section>

    <script>
        window.checkQ1 = function(optionNum, blockId, btn) {
            const fbDiv = document.getElementById('fb-q1-' + blockId);
            fbDiv.classList.remove('hidden', 'text-green-600', 'text-red-600');
            
            // Reset siblings
            const parent = btn.parentNode;
            const buttons = parent.querySelectorAll('button');
            buttons.forEach(b => {
                b.className = "px-4 py-2 rounded-xl border border-slate-350 hover:bg-slate-100 font-bold text-base md:text-lg transition-all";
            });

            if (blockId === 'a') {
                if (optionNum === 3) {
                    btn.className = "px-4 py-2 rounded-xl border-2 border-green-500 bg-green-50 text-green-700 font-bold text-base md:text-lg transition-all shadow-sm";
                    fbDiv.className = "text-green-600 font-bold text-lg mt-2";
                    fbDiv.innerHTML = "✅ Chính xác! Từ 'Thế mà' nối câu 2 với câu 1.";
                } else {
                    btn.className = "px-4 py-2 rounded-xl border-2 border-red-500 bg-red-50 text-red-700 font-bold text-base md:text-lg transition-all shadow-sm";
                    fbDiv.className = "text-red-600 font-bold text-lg mt-2";
                    fbDiv.innerHTML = "❌ Chưa đúng! Câu 2 nối với câu 1 bằng quan hệ từ nối 'Thế mà' diễn tả sự tương phản.";
                }
            } else if (blockId === 'b') {
                // b can use repeat and replace, both option 1 and 2 are true
                if (optionNum === 1 || optionNum === 2) {
                    btn.className = "px-4 py-2 rounded-xl border-2 border-green-500 bg-green-50 text-green-700 font-bold text-base md:text-lg transition-all shadow-sm";
                    fbDiv.className = "text-green-600 font-bold text-lg mt-2";
                    fbDiv.innerHTML = "✅ Đúng rồi! Đoạn văn b sử dụng cả lặp từ ngữ và thay thế từ ngữ để liên kết các câu.";
                } else {
                    btn.className = "px-4 py-2 rounded-xl border-2 border-red-500 bg-red-50 text-red-700 font-bold text-base md:text-lg transition-all shadow-sm";
                    fbDiv.className = "text-red-600 font-bold text-lg mt-2";
                    fbDiv.innerHTML = "❌ Chưa đúng! Đoạn văn này không sử dụng từ ngữ nối làm liên kết chính.";
                }
            } else if (blockId === 'c') {
                if (optionNum === 1 || optionNum === 3) {
                    btn.className = "px-4 py-2 rounded-xl border-2 border-green-500 bg-green-50 text-green-700 font-bold text-base md:text-lg transition-all shadow-sm";
                    fbDiv.className = "text-green-600 font-bold text-lg mt-2";
                    fbDiv.innerHTML = "✅ Chính xác! Đoạn c lặp lại từ 'nhà rông' và dùng từ nối 'Vì vậy' ở câu 4.";
                } else {
                    btn.className = "px-4 py-2 rounded-xl border-2 border-red-500 bg-red-50 text-red-700 font-bold text-base md:text-lg transition-all shadow-sm";
                    fbDiv.className = "text-red-600 font-bold text-lg mt-2";
                    fbDiv.innerHTML = "❌ Chưa đúng! Đoạn c không dùng đại từ để thay thế liên kết câu.";
                }
            }
        };

        window.checkQ2 = function() {
            const v2 = document.getElementById('select-2').value;
            const v3 = document.getElementById('select-3').value;
            const v4 = document.getElementById('select-4').value;
            const v5 = document.getElementById('select-5').value;

            const fb = document.getElementById('fb-q2');
            fb.classList.remove('hidden', 'text-green-600', 'text-red-600');

            if (!v2 || !v3 || !v4 || !v5) {
                fb.className = "text-red-600 text-lg font-bold text-center mt-2";
                fb.innerHTML = "⚠️ Em vui lòng chọn đầy đủ từ ngữ cho các chỗ trống nhé!";
                return;
            }

            if (v2 === 'hai anh em' && v3 === 'nhưng' && v4 === 'hai vợ chồng người em' && v5 === 'người anh') {
                fb.className = "text-green-600 text-lg font-bold text-center mt-2";
                fb.innerHTML = "🎉 Tuyệt vời! Em đã điền chính xác tất cả các từ ngữ liên kết câu theo đúng nội dung câu chuyện.";
            } else {
                fb.className = "text-red-600 text-lg font-bold text-center mt-2";
                fb.innerHTML = "❌ Có một số chỗ trống chưa điền đúng từ liên kết rồi. Em hãy đọc kỹ lại câu chuyện và chọn lại nhé!";
            }
        };

        window.check176Extend = async function() {
            const val = document.getElementById('v-176-extend').value.trim();
            if (!val) {
                alert('Em hãy viết đoạn văn trước khi gửi nhé!');
                return;
            }

            const fb = document.getElementById('fb-176-extend');
            fb.classList.remove('hidden');
            fb.innerHTML = '<div class="p-6 bg-white border-2 border-sky-100 rounded-2xl shadow-lg italic text-lg md:text-xl text-sky-900 animate-pulse text-center">EduRobot đang phân tích đoạn văn của em...</div>';

            const prompt = \`Học sinh lớp 5 viết đoạn văn (4-5 câu) giới thiệu phương tiện đi lại vùng sông nước (ví dụ xuồng ba lá, thuyền đuôi tôm, ghe...) có sử dụng từ ngữ nối để liên kết câu:\\n\\n\"\${val}\"\\n\\nHãy kiểm tra xem học sinh đã dùng đúng từ ngữ nối chưa, số câu đủ chưa, nhận xét góp ý sửa đổi chân thành. Xưng hô \"Thầy/Cô\" và gọi học sinh là \"em\".\`;

            await askAI('176-extend', prompt, 'single', 'writing', 26, prompt);
        };
    </script>
</div>
`,
    "practice": {
        "settings": { "pick": 10 },
        "questions": [
            {
                "question": "Các câu trong đoạn văn: 'Hôm qua trời mưa to. Thế mà hôm nay trời lại nắng ấm rực rỡ.' liên kết với nhau bằng cách nào?",
                "options": [
                    "Lặp từ ngữ",
                    "Thay thế từ ngữ",
                    "Dùng từ ngữ nối ('Thế mà')",
                    "Không có liên kết"
                ],
                "answer": 2,
                "level": 1
            },
            {
                "question": "Cụm từ nào dùng làm từ ngữ nối liên kết câu ở đoạn văn a (bài 1)?",
                "options": ["Mới hôm qua", "Thế mà", "Đột nhiên", "Đầu mùa"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Trong đoạn văn b (bài 1), từ 'con thú dữ' ở câu 4 dùng để thay thế cho từ ngữ nào ở câu trước?",
                "options": ["đười ươi", "khỉ", "sư tử", "miếng võ"],
                "answer": 2,
                "level": 1
            },
            {
                "question": "Trong đoạn văn b (bài 1), cụm từ 'những con vật này' dùng làm phép liên kết thay thế cho những từ ngữ nào?",
                "options": ["sư tử và khỉ", "đười ươi và khỉ", "con thú dữ", "miếng võ"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Phép liên kết lặp từ ngữ được thể hiện ở những từ nào trong đoạn văn b (bài 1)?",
                "options": [
                    "thực chất, biểu diễn, ngoạm đầu",
                    "múa võ / miếng võ, đười ươi và khỉ, sư tử",
                    "con thú dữ, những con vật này",
                    "nhưng, bị trêu chọc"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Từ ngữ nối nào liên kết câu 4 với câu 3 trong đoạn văn c (bài 1) nói về nhà rông?",
                "options": ["Đêm đêm", "Vì vậy", "Kiến trúc", "Bên bếp lửa"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Từ ngữ nào được lặp lại ở cả 4 câu trong đoạn văn c (bài 1) để tạo liên kết lặp?",
                "options": ["bếp lửa", "Tây Nguyên", "nhà rông", "chung"],
                "answer": 2,
                "level": 1
            },
            {
                "question": "Điền từ thích hợp để liên kết câu 2 của đoạn văn truyện Cây khế: '... chăm lo làm lụng nên trong nhà cũng đủ ăn.'",
                "options": ["Người anh", "Hai anh em", "Hai vợ chồng người em", "Nhưng"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Điền từ thích hợp để liên kết câu 3 của đoạn văn truyện Cây khế: '... từ khi có vợ, người anh sinh ra lười biếng...'",
                "options": ["Hai anh em", "Người anh", "Nhưng", "Hai vợ chồng người em"],
                "answer": 2,
                "level": 1
            },
            {
                "question": "Điền từ thích hợp để liên kết câu 4 của đoạn văn truyện Cây khế: '... thức khuya, dậy sớm, cố gắng làm lụng.'",
                "options": ["Hai vợ chồng người em", "Người anh", "Nhưng", "Hai anh em"],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Điền từ thích hợp để liên kết câu 5 của đoạn văn truyện Cây khế: 'Thấy thế, ... sợ em tranh công...'",
                "options": ["hai anh em", "người anh", "nhưng", "hai vợ chồng người em"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Các từ nối như 'Vì vậy', 'Do đó', 'Tuy nhiên' thường đứng ở vị trí nào trong câu để làm nhiệm vụ liên kết?",
                "options": ["Ở cuối câu", "Ở giữa câu, sau vị ngữ", "Ở đầu câu", "Đứng sau chủ ngữ"],
                "answer": 2,
                "level": 1
            },
            {
                "question": "Câu: 'Lan thích ăn táo. Huệ lại thích ăn cam.' được liên kết với nhau bằng cách nào?",
                "options": ["Thay thế từ ngữ", "Lặp từ ngữ", "Dùng từ ngữ nối", "Hai câu này không liên kết với nhau bằng các biện pháp trên"],
                "answer": 3,
                "level": 1
            },
            {
                "question": "Mục đích lớn nhất của việc liên kết các câu trong đoạn văn là gì?",
                "options": [
                    "Để đoạn văn dài hơn",
                    "Giúp các câu kết nối chặt chẽ, tạo mạch lạc thống nhất cho nội dung đoạn văn",
                    "Giúp người viết sử dụng được nhiều dấu câu",
                    "Để khoe khả năng dùng từ đồng nghĩa"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Phương án nào dưới đây KHÔNG phải là một biện pháp liên kết câu trong đoạn văn?",
                "options": [
                    "Lặp từ ngữ",
                    "Thay thế từ ngữ",
                    "Dùng từ ngữ nối",
                    "Sử dụng nhiều từ láy và từ tượng thanh"
                ],
                "answer": 3,
                "level": 1
            }
        ]
    }
};
