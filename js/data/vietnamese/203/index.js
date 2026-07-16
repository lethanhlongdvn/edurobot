export const lesson203 = {
    "topic": "Nói & Nghe",
    "week": "29",
    "period": "203",
    "title": "NÓI VÀ NGHE: ĐỀN ƠN ĐÁP NGHĨA",
    "desc": "Thực hành chuẩn bị, trình bày bài nói giới thiệu về một hoạt động đền ơn đáp nghĩa người có công với đất nước và trao đổi, nhận xét cùng các bạn.",
    "subject": "Nói và nghe",
    "theme": "Tiếp bước cha ông",
    "audio": "am_thanh/296-noi-nghe-denondapnghia.mp3",
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
                Biết cách tìm ý, sắp xếp thông tin để chuẩn bị cho bài giới thiệu về một hoạt động đền ơn đáp nghĩa.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Trình bày bài nói tự tin, mạch lạc, giọng nói rõ ràng kết hợp cử chỉ và phương tiện hỗ trợ sinh động.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết lắng nghe, ghi chép thông tin chính và đưa ra những câu hỏi tương tác, lời nhận xét mang tính xây dựng.
            </li>
        </ul>
    </div>

    <!-- 📚 Quy trình chuẩn bị bài nói -->
    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl bg-white border border-slate-100 space-y-8">
        <div class="border-b pb-4">
            <h2 class="text-2xl md:text-4xl lg:text-5xl font-black text-slate-800">💡 Các bước chuẩn bị & trình bày</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-700">
            <!-- Bước 1: Chuẩn bị -->
            <div class="bg-amber-50/50 border border-amber-100 rounded-3xl p-6 space-y-3">
                <h4 class="text-lg md:text-2xl font-black text-amber-900 flex items-center gap-2">
                    <span class="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm shadow-md">1</span>
                    Chuẩn bị nội dung
                </h4>
                <div class="text-sm md:text-lg bg-white/80 p-4 rounded-xl border border-amber-150 font-bold space-y-1 text-slate-700">
                    <p>• Nhớ lại trải nghiệm hoặc tìm thông tin qua sách báo, internet.</p>
                    <p>• Chọn hoạt động tiêu biểu: dâng hương liệt sĩ, thăm gia đình có công, thương binh...</p>
                </div>
            </div>

            <!-- Bước 2: Trình bày -->
            <div class="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-6 space-y-3">
                <h4 class="text-lg md:text-2xl font-black text-emerald-900 flex items-center gap-2">
                    <span class="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-sm shadow-md">2</span>
                    Phong thái trình bày
                </h4>
                <div class="text-sm md:text-lg bg-white/80 p-4 rounded-xl border border-emerald-150 font-bold space-y-1 text-slate-700">
                    <p>• Nói to, rõ ràng, truyền cảm.</p>
                    <p>• Giữ cử chỉ tự nhiên, đứng thẳng, tương tác ánh mắt với người nghe.</p>
                    <p>• Sử dụng tranh ảnh minh họa nếu có.</p>
                </div>
            </div>

            <!-- Bước 3: Lắng nghe & Đóng góp -->
            <div class="bg-blue-50/50 border border-blue-100 rounded-3xl p-6 space-y-3">
                <h4 class="text-lg md:text-2xl font-black text-blue-600 flex items-center gap-2">
                    <span class="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm shadow-md">3</span>
                    Lắng nghe, trao đổi
                </h4>
                <div class="text-sm md:text-lg bg-white/80 p-4 rounded-xl border border-blue-150 font-bold space-y-1 text-slate-700">
                    <p>• Ghi lại ý chính bài nói của bạn.</p>
                    <p>• Đặt câu hỏi tìm hiểu thêm thông tin.</p>
                    <p>• Nhận xét chân thành về nội dung và giọng nói.</p>
                </div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": (UI) => {
        return `
<div class="space-y-12 max-w-4xl mx-auto py-6">
    <!-- BÀI TẬP 1: CHUẨN BỊ Ý BÀI NÓI VÀ NHẬN XÉT CỦA AI -->
    <section class="bg-white p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">1</span>
            <h3 class="text-xl md:text-3xl font-black text-blue-600">Bài tập 1: Lập ý cho bài giới thiệu đền ơn đáp nghĩa</h3>
        </div>

        <p class="text-lg md:text-2xl font-bold text-slate-700">Chọn 1 trong các chủ đề hoạt động dưới đây và chuẩn bị nhanh nội dung bài nói:</p>

        <!-- Nút chọn chủ đề -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button onclick="selectTopic203('danghuong', this)" class="topic-btn p-4 bg-slate-50 border-2 border-slate-200 hover:border-blue-400 rounded-2xl cursor-pointer transition-all">
                <p class="text-lg font-black text-slate-900">🌸 Dâng hương liệt sĩ</p>
                <p class="text-xs md:text-sm text-slate-500 font-bold mt-1">Dâng hương tại đài tưởng niệm các anh hùng địa phương</p>
            </button>
            <button onclick="selectTopic203('thamhoi', this)" class="topic-btn p-4 bg-slate-50 border-2 border-slate-200 hover:border-blue-400 rounded-2xl cursor-pointer transition-all">
                <p class="text-lg font-black text-slate-900">🏡 Thăm hỏi gia đình có công</p>
                <p class="text-xs md:text-sm text-slate-500 font-bold mt-1">Gặp gỡ, tặng quà và giúp đỡ các thương binh, liệt sĩ</p>
            </button>
            <button onclick="selectTopic203('chamsoc', this)" class="topic-btn p-4 bg-slate-50 border-2 border-slate-200 hover:border-blue-400 rounded-2xl cursor-pointer transition-all">
                <p class="text-lg font-black text-slate-900">✨ Chăm sóc nghĩa trang</p>
                <p class="text-xs md:text-sm text-slate-500 font-bold mt-1">Quét dọn cỏ, trồng hoa cải tạo mỹ quan nghĩa trang liệt sĩ</p>
            </button>
        </div>

        <!-- Khung soạn thảo bài nói và nhận xét AI -->
        <div class="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
            <div class="flex flex-col lg:flex-row gap-6 items-center">
                <div class="w-full lg:w-2/3 space-y-4">
                    <p class="text-base md:text-xl font-black text-slate-600" id="topic-label">Chủ đề: Chưa chọn chủ đề</p>
                    <textarea id="essay-203" rows="6" class="w-full p-4 rounded-xl border border-slate-250 focus:ring-4 focus:ring-blue-100 outline-none text-lg md:text-2xl font-bold leading-relaxed" placeholder="Nhập tóm tắt dàn ý bài nói của em (ví dụ: Tên hoạt động là gì? Thời gian địa điểm? Ai tham gia? Cảm nhận của em)..."></textarea>
                    
                    <div class="flex justify-center">
                        <button onclick="check203SpeechAI()" class="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-2xl shadow-xl transition-all active:scale-[0.95] flex items-center justify-center gap-3 text-lg uppercase tracking-wider cursor-pointer">
                            <span>🤖</span>
                            <span>Đưa dàn ý cho Thầy E AI góp ý</span>
                        </button>
                    </div>
                </div>
                <div class="w-full lg:w-1/3 text-center shrink-0">
                    <img src="assets/images/tiengviet_5_2/203/203-1.png" alt="Thiếu nhi chăm sóc nghĩa trang liệt sĩ" class="rounded-2xl border-4 border-white shadow-md max-w-full h-auto mx-auto">
                    <p class="text-xs md:text-sm text-gray-500 italic mt-2 font-bold">Thiếu nhi chăm sóc nghĩa trang liệt sĩ</p>
                </div>
            </div>
            <div id="fb-203-ai" class="w-full hidden mt-4"></div>
        </div>
    </section>

    <!-- BÀI TẬP 2: PHIẾU ĐÁNH GIÁ TIÊU CHÍ NÓI VÀ NGHE (TƯƠNG TÁC CHECKBOX) -->
    <section class="bg-white p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">2</span>
            <h3 class="text-xl md:text-3xl font-black text-blue-600">Bài tập 2: Thiết lập tiêu chí đánh giá bài nói và nghe</h3>
        </div>

        <p class="text-lg md:text-2xl font-bold text-slate-700">Khi nghe các bạn giới thiệu về hoạt động, em cần dựa vào những tiêu chí nào để đánh giá và góp ý?</p>

        <div class="space-y-4 pl-4">
            <label class="flex items-center gap-3 cursor-pointer text-lg md:text-2xl font-bold text-slate-800">
                <input type="checkbox" id="eval-c1" class="w-5 h-5"> 1. Nội dung giới thiệu rõ ràng, đầy đủ các ý chính của hoạt động.
            </label>
            <label class="flex items-center gap-3 cursor-pointer text-lg md:text-2xl font-bold text-slate-800">
                <input type="checkbox" id="eval-c2" class="w-5 h-5"> 2. Giọng nói rõ ràng, rành mạch, tốc độ vừa phải và giàu cảm xúc.
            </label>
            <label class="flex items-center gap-3 cursor-pointer text-lg md:text-2xl font-bold text-slate-800">
                <input type="checkbox" id="eval-c3" class="w-5 h-5"> 3. Cử chỉ tự nhiên, đứng ngay ngắn và duy trì tương tác bằng ánh mắt với người nghe.
            </label>
            <label class="flex items-center gap-3 cursor-pointer text-lg md:text-2xl font-bold text-slate-800">
                <input type="checkbox" id="eval-c4" class="w-5 h-5"> 4. Chỉ cần chăm chú nhìn vào tờ giấy để đọc nguyên văn bài chuẩn bị.
            </label>
        </div>

        <div class="flex justify-center pt-2">
            <button onclick="check203Evaluation()" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md text-lg uppercase">Xác nhận tiêu chí</button>
        </div>
        <div id="fb-203-eval" class="text-lg md:text-2xl font-black text-center hidden"></div>
    </section>
</div>

<script>
    let activeTopic203 = '';

    window.selectTopic203 = function(topic, btn) {
        activeTopic203 = topic;
        document.querySelectorAll('.topic-btn').forEach(el => {
            el.classList.remove('border-blue-400', 'bg-blue-50/50');
            el.classList.add('border-slate-200', 'bg-slate-50');
        });
        btn.classList.remove('border-slate-200', 'bg-slate-50');
        btn.classList.add('border-blue-400', 'bg-blue-50/50');

        const labels = {
            'danghuong': 'Chủ đề: Dâng hương tưởng niệm liệt sĩ',
            'thamhoi': 'Chủ đề: Thăm hỏi gia đình có công',
            'chamsoc': 'Chủ đề: Chăm sóc nghĩa trang liệt sĩ'
        };
        document.getElementById('topic-label').textContent = labels[topic];
    };

    // BÀI 1: NHẬN XÉT AI BÀI NÓI
    window.check203SpeechAI = async function() {
        if (!activeTopic203) {
            alert('Em hãy chọn một chủ đề hoạt động trước nhé!');
            return;
        }

        const text = document.getElementById('essay-203').value.trim();
        if (!text) {
            alert('Em hãy soạn thảo tóm tắt dàn ý bài nói của em nhé!');
            return;
        }

        const fb = document.getElementById('fb-203-ai');
        fb.classList.remove('hidden');
        fb.innerHTML = '<div class="p-6 bg-white border-2 border-blue-100 rounded-2xl shadow-lg italic text-lg md:text-2xl text-blue-600 animate-pulse text-center">Thầy E AI đang đọc dàn ý bài nói của em, chờ một chút nhé...</div>';

        const topicText = activeTopic203 === 'danghuong' ? "Dâng hương tại đài tưởng niệm các anh hùng liệt sĩ" : activeTopic203 === 'thamhoi' ? "Thăm hỏi gia đình có công, thương binh, liệt sĩ" : "Quét dọn, chăm sóc nghĩa trang liệt sĩ";
        const prompt = \`Học sinh lớp 5 chuẩn bị dàn ý cho bài thuyết trình môn Nói và nghe với chủ đề: Đền ơn đáp nghĩa. Hoạt động học sinh chọn: "\${topicText}".
Dàn ý tóm tắt của học sinh: "\${text}"
Hãy đóng vai Thầy E, nhận xét chi tiết: (1) Dàn ý đã đầy đủ các phần: giới thiệu tên hoạt động, thời gian địa điểm, diễn biến chính và cảm nghĩ cá nhân chưa? (2) Góp ý thêm cách mở đầu hấp dẫn và cách tương tác, sử dụng giọng nói tự tin, cử chỉ tự nhiên khi thuyết trình trước lớp. Xưng hô Thầy và gọi học sinh là em.\`;

        await askAI('fb-203-ai', prompt, 'single', 'writing', 29, prompt);
    };

    // BÀI 2: CHECKBOX TIÊU CHÍ
    window.check203Evaluation = function() {
        const c1 = document.getElementById('eval-c1').checked;
        const c2 = document.getElementById('eval-c2').checked;
        const c3 = document.getElementById('eval-c3').checked;
        const c4 = document.getElementById('eval-c4').checked;
        const fb = document.getElementById('fb-203-eval');
        
        fb.classList.remove('hidden');

        if (c1 && c2 && c3 && !c4) {
            fb.innerHTML = '🎉 Tuyệt vời! Em đã xác định chính xác các tiêu chí quan trọng để đánh giá bài nói và nghe. Việc đứng nhìn chằm chằm vào giấy để đọc (tiêu chí số 4) sẽ làm giảm sự lôi cuốn và tương tác với người nghe, nên cần tránh nhé!';
            fb.className = 'text-lg md:text-2xl font-black text-center text-emerald-600 mt-4';
        } else {
            fb.innerHTML = '⚠️ Có lựa chọn chưa chính xác. Hãy nhớ rằng mục tiêu của Nói và nghe là sự tương tác tự nhiên, tự tin, không phải là cầm giấy đọc nguyên văn bài chuẩn bị.';
            fb.className = 'text-lg md:text-2xl font-black text-center text-amber-600 mt-4';
        }
    };
</script>
        `;
    },
    "quizPool": [
        {
            "question": "Mục đích chính của bài học nói và nghe 'Đền ơn đáp nghĩa' là gì?",
            "options": [
                "Đọc hiểu câu chuyện về danh nhân lịch sử",
                "Thực hành chuẩn bị, tự tin trình bày trước lớp bài giới thiệu về một hoạt động tri ân người có công",
                "Học cách viết một lá đơn xin gia nhập Đội thiếu niên tiền phong",
                "Tìm hiểu vị trí địa lý của các nghĩa trang liệt sĩ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Hoạt động nào sau đây thể hiện tinh thần đền ơn đáp nghĩa đối với liệt sĩ?",
            "options": [
                "Đi cắm trại dã ngoại ở rừng sâu",
                "Dâng hương tưởng niệm và dọn dẹp vệ sinh nghĩa trang liệt sĩ",
                "Tham gia giải bóng đá trường học",
                "Giúp đỡ gia đình quét dọn nhà cửa vào ngày Tết"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Hoạt động nào thể hiện sự quan tâm trực tiếp đến đời sống người có công?",
            "options": [
                "Quyên góp sách cũ ủng hộ vùng cao",
                "Thăm hỏi, chăm sóc và trò chuyện cùng các thương binh, bà mẹ Việt Nam anh hùng",
                "Viết thư thăm hỏi bạn học sinh nghèo vượt khó",
                "Đăng ký tham gia đội nghi thức của trường"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Ngày Thương binh - Liệt sĩ Việt Nam là ngày nào?",
            "options": [
                "Ngày 1 tháng 6",
                "Ngày 27 tháng 7",
                "Ngày 22 tháng 12",
                "Ngày 20 tháng 11"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Bước đầu tiên trong quy trình chuẩn bị nói và nghe là gì?",
            "options": [
                "Lên bục giảng giới thiệu trước tập thể lớp",
                "Nhớ lại trải nghiệm hoặc tìm kiếm thông tin về hoạt động từ sách báo, internet",
                "Chụp ảnh cùng bạn bè để lưu giữ kỷ niệm",
                "Ghi chép nhận xét về bài nói của bạn"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Khi trình bày bài nói trước lớp, học sinh cần đảm bảo yếu tố nào về giọng nói?",
            "options": [
                "Nói thật nhanh để kịp giờ ra chơi",
                "Giọng nói to, rõ ràng, tốc độ vừa phải, truyền đạt được cảm xúc biết ơn",
                "Nói thật nhỏ để tạo sự tập trung",
                "Đọc to từng chữ ghi trên giấy chuẩn bị"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi đứng giới thiệu, phong thái, cử chỉ của em nên thế nào?",
            "options": [
                "Đứng tự tin, thoải mái, duy trì tương tác ánh mắt với người nghe và kết hợp cử chỉ tay tự nhiên",
                "Đứng yên một góc, hai tay khoanh lại và cúi gầm mặt xuống đất",
                "Chỉ nhìn chằm chằm vào máy chiếu hoặc giấy note",
                "Cười nói tự do không kiểm soát thái độ"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Khi bạn đang trình bày bài nói, người nghe cần làm gì?",
            "options": [
                "Làm việc riêng hoặc trao đổi tự do trong lớp",
                "Lắng nghe chăm chú, ghi chép lại các thông tin chính và chuẩn bị câu hỏi thảo luận",
                "Nói leo cắt lời khi thấy bạn trình bày sai sót",
                "Đóng sách lại và chuẩn bị cho tiết học sau"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Từ nào sau đây có ý nghĩa tương đương với từ 'biết ơn'?",
            "options": [
                "Kính trọng",
                "Tri ân",
                "Yêu mến",
                "Kính nể"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Thành ngữ nào phản ánh đúng đắn nhất truyền thống đạo đức tri ân của dân tộc ta?",
            "options": [
                "Ăn quả nhớ kẻ trồng cây",
                "Lá lành đùm lá rách",
                "Một chữ cũng là thầy, nửa chữ cũng là thầy",
                "Gần mực thì đen, gần đèn thì rạng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Hoạt động 'đền ơn đáp nghĩa' có ý nghĩa gì đối với xã hội?",
            "options": [
                "Tạo thêm cơ hội quảng bá hình ảnh địa phương",
                "Giúp gắn kết tinh thần đoàn kết và giáo dục lòng nhân ái, truyền thống uống nước nhớ nguồn",
                "Để nhận thêm các khoản trợ cấp từ nhà nước",
                "Chỉ là hoạt động phong trào không có tính giáo dục"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Sau khi nghe bạn thuyết trình, việc đặt câu hỏi cho bạn nhằm mục đích gì?",
            "options": [
                "Để thử thách độ thông minh của bạn",
                "Để tìm hiểu rõ hơn về hoạt động bạn đã chia sẻ và tương tác trao đổi học hỏi lẫn nhau",
                "Để làm cho tiết học kéo dài hơn",
                "Để chê cười bài chuẩn bị của bạn chưa chu đáo"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Khi chuẩn bị bài thuyết trình, phương tiện hỗ trợ nào là tốt nhất?",
            "options": [
                "Tranh vẽ, ảnh chụp thực tế hoặc slide trình chiếu ngắn gọn về hoạt động",
                "Một cuốn truyện tranh hài hước không liên quan",
                "Không cần phương tiện gì, chỉ cần đọc giấy",
                "Nhạc nền thật sôi động bật liên tục"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Ý kiến hay thắc mắc góp ý cho bạn cần có thái độ như thế nào?",
            "options": [
                "Châm biếm, phê phán gay gắt những lỗi sai của bạn",
                "Chân thành, nhẹ nhàng, tôn trọng bạn và hướng tới tinh thần xây dựng giúp đỡ nhau tiến bộ",
                "Hùa theo ý kiến của đám đông mà không tự suy nghĩ",
                "Nhận xét thật qua loa để kết thúc tiết học"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Chúng ta có thể tìm đọc sách báo viết về những tấm gương cống hiến ở đâu?",
            "options": [
                "Thư viện trường, nhà sách hoặc trên các trang báo điện tử chính thống của nhà nước",
                "Các trang truyện tranh nước ngoài",
                "Các nhóm chat mạng xã hội tự phát",
                "Trong sách giáo khoa toán học"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};
