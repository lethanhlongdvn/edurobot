export const lesson183 = {
    "topic": "Tiếng Việt 5",
    "week": "27",
    "period": "183",
    "title": "ÔN TẬP VÀ ĐÁNH GIÁ GIỮA HKII (TIẾT 1)",
    "desc": "Học sinh thực hiện phần ôn tập đọc hiểu, nhận diện các nhân vật và câu chuyện đã học trong nửa đầu học kì II, đồng thời luyện tập viết tóm tắt nội dung câu chuyện.",
    "subject": "Tiếng Việt",
    "theme": "Hương sắc trăm miền",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-4xl mx-auto">
    <!-- 🎯 Mục tiêu ôn tập -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-blue-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu ôn tập (Tiết 1)
        </h3>
        <ul class="space-y-3 text-blue-950 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-900 font-black">•</span>
                Nhớ tên nhân vật, tên câu chuyện và tóm tắt được nội dung chính của các bài đọc đã học từ đầu học kì II.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-900 font-black">•</span>
                Rèn luyện tư duy tổng hợp và kỹ năng đọc hiểu kết hợp diễn đạt ý kiến mạch lạc.
            </li>
        </ul>
    </div>

    <!-- 🧩 BÀI 1: TÔI LÀ AI? (INTERACTIVE MATCHING GAME) -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-6 md:p-8 shadow-2xl bg-white border border-slate-100 space-y-6">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-md">1</div>
                <h2 class="text-2xl md:text-5xl font-black text-gray-800">Dự đoán nhân vật & tác phẩm: "Tôi là ai?"</h2>
            </div>
            
            <p class="text-lg md:text-xl font-semibold text-gray-600">Đọc lời giới thiệu của mỗi nhân vật dưới đây, nhấp chọn đúng nhân vật và tác phẩm tương ứng:</p>

            <div class="space-y-6">
                <!-- Nhân vật 1 -->
                <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <p class="text-lg md:text-xl font-bold text-slate-800">
                        "(1) Tôi đã thay mặt cả lớp cảm ơn cô giáo và tặng cô hộp quà chứa ba mươi lăm lá thư của cả lớp."
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <select id="char-1" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white">
                            <option value="">-- Chọn nhân vật --</option>
                            <option value="Quang">Quang</option>
                            <option value="Tân">Tân</option>
                            <option value="Huệ">Huệ</option>
                        </select>
                        <select id="story-1" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white">
                            <option value="">-- Chọn câu chuyện --</option>
                            <option value="Hộp quà màu thiên thanh">Hộp quà màu thiên thanh</option>
                            <option value="Giỏ hoa tháng Năm">Giỏ hoa tháng Năm</option>
                            <option value="Rừng của Mát">Rừng của Mát</option>
                        </select>
                    </div>
                </div>

                <!-- Nhân vật 2 -->
                <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <p class="text-lg md:text-xl font-bold text-slate-800">
                        "(2) Tôi chọn thật nhiều hoa màu vàng, loại hoa bạn tôi yêu thích, để làm một giỏ hoa tặng bạn."
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <select id="char-2" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white">
                            <option value="">-- Chọn nhân vật --</option>
                            <option value="Pam">Pam</option>
                            <option value="Xu-di">Xu-di</option>
                            <option value="Chị của Xu-di">Chị của Xu-di</option>
                        </select>
                        <select id="story-2" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white">
                            <option value="">-- Chọn câu chuyện --</option>
                            <option value="Giỏ hoa tháng Năm">Giỏ hoa tháng Năm</option>
                            <option value="Thanh âm của gió">Thanh âm của gió</option>
                            <option value="Hộp quà màu thiên thanh">Hộp quà màu thiên thanh</option>
                        </select>
                    </div>
                </div>

                <!-- Nhân vật 3 -->
                <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <p class="text-lg md:text-xl font-bold text-slate-800">
                        "(3) Khi tôi cất giọng hát, tiếng hát vang khắp núi rừng, khiến muông thú quên cả phá lúa và nhảy múa theo tiếng hát của tôi."
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <select id="char-3" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white">
                            <option value="">-- Chọn nhân vật --</option>
                            <option value="Y Sơn">Chàng Y Sơn</option>
                            <option value="Thào A Sùng">Thào A Sùng</option>
                            <option value="Mát">Anh Mát</option>
                        </select>
                        <select id="story-3" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white">
                            <option value="">-- Chọn câu chuyện --</option>
                            <option value="Tiếng hát của người đá">Tiếng hát của người đá</option>
                            <option value="Đàn t'rưng">Đàn t'rưng</option>
                            <option value="Đường quê Đồng Tháp Mười">Đường quê Đồng Tháp Mười</option>
                        </select>
                    </div>
                </div>

                <!-- Nhân vật 4 -->
                <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <p class="text-lg md:text-xl font-bold text-slate-800">
                        "(4) Tôi quyết tâm khôi phục lại trang trại sau khi bị cháy và tôi đã làm được."
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <select id="char-4" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white">
                            <option value="">-- Chọn nhân vật --</option>
                            <option value="Mát">Anh Mát</option>
                            <option value="Ông nội của Mát">Ông nội của Mát</option>
                            <option value="Bà cụ cùng giường">Bà cụ cùng giường</option>
                        </select>
                        <select id="story-4" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white">
                            <option value="">-- Chọn câu chuyện --</option>
                            <option value="Rừng của Mát">Rừng của Mát</option>
                            <option value="Xuồng ba lá quê tôi">Xuồng ba lá quê tôi</option>
                            <option value="Một người hùng thầm lặng">Một người hùng thầm lặng</option>
                        </select>
                    </div>
                </div>

                <!-- Nhân vật 5 -->
                <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <p class="text-lg md:text-xl font-bold text-slate-800">
                        "(5) Tôi ước mơ trở thành một kĩ sư nông nghiệp để phát triển cây chè ở quê hương Tà Xùa của tôi."
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <select id="char-5" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white">
                            <option value="">-- Chọn nhân vật --</option>
                            <option value="Thào A Sùng">Thào A Sùng</option>
                            <option value="Tân">Bạn Tân</option>
                            <option value="Mát">Anh Mát</option>
                        </select>
                        <select id="story-5" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white">
                            <option value="">-- Chọn câu chuyện --</option>
                            <option value="Những búp chè trên cây cổ thụ">Những búp chè trên cây cổ thụ</option>
                            <option value="Hạt gạo làng ta">Hạt gạo làng ta</option>
                            <option value="Đọc mở rộng">Đọc mở rộng</option>
                        </select>
                    </div>
                </div>

                <div class="flex justify-center flex-col items-center gap-4">
                    <button onclick="check183Matching()" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all text-lg">
                        🔍 Kiểm tra kết quả
                    </button>
                    <div id="matching-feedback" class="text-lg font-black text-center hidden"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- 📝 BÀI 2: TÓM TẮT NỘI DUNG CHÍNH (WRITING & AI GRADING) -->
    <section class="w-full">
        <div class="bg-white rounded-[32px] p-6 md:p-8 border border-slate-100 shadow-xl space-y-6">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-md">2</div>
                <h2 class="text-2xl md:text-5xl font-black text-gray-800">Nêu nội dung chính của một câu chuyện</h2>
            </div>
            
            <div class="p-6 bg-blue-50/50 rounded-2xl border border-blue-150 space-y-4">
                <label class="text-lg md:text-xl font-bold text-blue-900 block">Em hãy chọn một trong năm câu chuyện ở trên và viết đoạn văn ngắn (3 - 5 câu) nêu nội dung chính của câu chuyện đó:</label>
                
                <select id="selected-summary-story" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-100 outline-none text-lg bg-white font-bold text-gray-800">
                    <option value="Hộp quà màu thiên thanh">Hộp quà màu thiên thanh</option>
                    <option value="Giỏ hoa tháng Năm">Giỏ hoa tháng Năm</option>
                    <option value="Tiếng hát của người đá">Tiếng hát của người đá</option>
                    <option value="Rừng của Mát">Rừng của Mát</option>
                    <option value="Những búp chè trên cây cổ thụ">Những búp chè trên cây cổ thụ</option>
                </select>

                <textarea id="story-summary-text" rows="4" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-100 outline-none text-lg" placeholder="Nhập tóm tắt nội dung chính của câu chuyện tại đây..."></textarea>
                
                <div class="flex justify-center">
                    <button onclick="check183SummaryAI()" class="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-2xl shadow-xl transition-all active:scale-[0.95] flex items-center justify-center gap-3 text-lg md:text-xl uppercase tracking-wider">
                        <span>🤖</span> 
                        <span>Nhận xét tóm tắt bằng AI</span>
                    </button>
                </div>
                <div id="fb-183-summary-ai" class="w-full hidden mt-4"></div>
            </div>
        </div>

        <script>
            window.check183Matching = function() {
                const answers = {
                    "1": { char: "Quang", story: "Hộp quà màu thiên thanh" },
                    "2": { char: "Xu-di", story: "Giỏ hoa tháng Năm" },
                    "3": { char: "Y Sơn", story: "Tiếng hát của người đá" },
                    "4": { char: "Mát", story: "Rừng của Mát" },
                    "5": { char: "Thào A Sùng", story: "Những búp chè trên cây cổ thụ" }
                };

                let correctCount = 0;
                let details = "";

                for (let i = 1; i <= 5; i++) {
                    const charVal = document.getElementById('char-' + i).value;
                    const storyVal = document.getElementById('story-1').value; // Wait! Typo alert: story-1, story-2...
                    // Let's grab the actual element ID story-i
                    const actualStoryVal = document.getElementById('story-' + i).value;
                    
                    if (charVal === answers[i].char && actualStoryVal === answers[i].story) {
                        correctCount++;
                    }
                }

                const fb = document.getElementById('matching-feedback');
                fb.classList.remove('hidden');
                if (correctCount === 5) {
                    fb.innerHTML = "🎉 Tuyệt vời! Em đã đoán chính xác 100% tất cả 5 nhân vật và câu chuyện rồi! Cố gắng phát huy nhé!";
                    fb.className = "text-lg font-black text-center text-emerald-600 mt-4";
                } else {
                    fb.innerHTML = \`⚠️ Em đã trả lời đúng \${correctCount}/5 câu. Em hãy xem lại gợi ý để đoán chính xác hơn nhé!\`;
                    fb.className = "text-lg font-black text-center text-amber-600 mt-4";
                }
            };

            window.check183SummaryAI = async function() {
                const story = document.getElementById('selected-summary-story').value;
                const text = document.getElementById('story-summary-text').value.trim();

                if (!text) {
                    alert('Em hãy nhập nội dung tóm tắt trước khi gửi nhé!');
                    return;
                }

                const fb = document.getElementById('fb-183-summary-ai');
                fb.classList.remove('hidden');
                fb.innerHTML = '<div class="p-6 bg-white border-2 border-sky-100 rounded-2xl shadow-lg italic text-lg md:text-xl text-sky-900 animate-pulse text-center">EduRobot đang đọc và nhận xét tóm tắt câu chuyện của em, chờ một chút nhé...</div>';

                const prompt = \`Học sinh lớp 5 nộp bài tóm tắt nội dung chính câu chuyện: \"\${story}\"\\nĐoạn tóm tắt của học sinh: \"\${text}\"\\nHãy viết một lời nhận xét ngắn gọn, khích lệ và chỉ ra xem đoạn tóm tắt đã phản ánh đúng nội dung câu chuyện chưa. Xưng hô \"Thầy/Cô\" và gọi học sinh là \"em\".\`;

                await askAI('183-summary-ai', prompt, 'single', 'writing', 25, prompt);
            };
        </script>
    </section>
</div>
`,
    "practice": {
        "settings": { "pick": 10 },
        "questions": [
            {
                "question": "Nhân vật nào đã thay mặt cả lớp tặng cô giáo chiếc hộp quà chứa 35 lá thư?",
                "options": ["Quang", "Tân", "Huệ", "Xu-di"],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Câu chuyện 'Hộp quà màu thiên thanh' giáo dục học sinh về điều gì?",
                "options": [
                    "Kỹ năng lập chương trình hoạt động lớp học",
                    "Lòng biết ơn và tình cảm ấm áp, thiêng liêng của học trò đối với thầy cô giáo",
                    "Kỹ năng dọn dẹp vệ sinh trường lớp",
                    "Cách làm đồ thủ công mỹ nghệ trang trí hộp quà"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Trong câu chuyện 'Giỏ hoa tháng Năm', tại sao nhân vật Xu-di lại giận cô bạn thân Pam?",
                "options": [
                    "Vì Pam không cho Xu-di mượn sách học bài",
                    "Vì Pam kết thân với một bạn gái mới và không còn nhiều thời gian chơi với Xu-di",
                    "Vì Pam làm hỏng giỏ hoa màu vàng của Xu-di",
                    "Vì Pam không muốn đi học cùng lớp với Xu-di"
                ],
                "answer": 1,
                "level": 2
            },
            {
                "question": "Bài học ý nghĩa nhất rút ra từ câu chuyện 'Giỏ hoa tháng Năm' là gì?",
                "options": [
                    "Tặng hoa cho bạn bè là bắt buộc để duy trì tình bạn",
                    "Tình bạn chân thực là đặt bạn trong tim chứ không bắt buộc họ luôn ở bên mình",
                    "Không nên chơi với những người bạn mới dọn đến thị trấn",
                    "Tình bạn sẽ tan vỡ nếu có sự giận dỗi"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Nhân vật Y Sơn trong 'Tiếng hát của người đá' có tài năng đặc biệt gì?",
                "options": [
                    "Biết gõ trống nứa và đàn tranh",
                    "Có tiếng hát trong trẻo khiến muông thú quên phá lúa và nhảy múa theo",
                    "Biết khôi phục rừng cây bị cháy thành than củi",
                    "Biết đục đẽo đá thành những tác phẩm nghệ thuật khổng lồ"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Ai là người khuyên bảo anh Mát trồng lại rừng sau vụ cháy lớn thiêu rụi trang trại?",
                "options": ["Người hàng xóm thân thiết", "Ông nội của Mát lúc còn sống", "Bà cụ cùng giường trong bệnh viện", "Người thợ đốt than củi"],
                "answer": 2,
                "level": 2
            },
            {
                "question": "Để có vốn trồng lại rừng, anh Mát đã thực hiện ý tưởng sáng tạo nào?",
                "options": [
                    "Bán toàn bộ đất trang trại rừng đi để lấy tiền",
                    "Thuê người biến những thân cây cháy đen thành than củi mang bán",
                    "Đi làm thuê ở thành phố nhiều năm lấy vốn",
                    "Kêu gọi các tổ chức từ thiện quyên góp tiền"
                ],
                "answer": 1,
                "level": 2
            },
            {
                "question": "Ước mơ lớn nhất của bạn nhỏ Thào A Sùng trong bài đọc về chè Tà Xùa là gì?",
                "options": [
                    "Trở thành một kĩ sư nông nghiệp để phát triển chè cổ thụ và đưa chè Tà Xùa đi khắp thế giới",
                    "Trở thành một hướng dẫn viên du lịch chuyên nghiệp dẫn khách đến Tà Xùa",
                    "Trở thành một ca sĩ nổi tiếng hát bài hát về núi rừng Tây Bắc",
                    "Trở thành một doanh nhân kinh doanh than củi thành công"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Búp chè cổ thụ Tà Xùa được miêu tả có điểm đặc trưng nào khác biệt?",
                "options": [
                    "Búp chè nhỏ li ti màu xanh đậm",
                    "Búp chè to, dưới lá có lớp lông tơ mịn trắng như tuyết",
                    "Búp chè dài như kim khâu màu đen nhám",
                    "Lá chè màu vàng ánh đỏ nổi bật"
                ],
                "answer": 1,
                "level": 2
            },
            {
                "question": "Nhân vật nào trong các câu chuyện đã học thể hiện ý chí vươn lên mãnh liệt, không đầu hàng trước tai họa?",
                "options": ["Minh", "Anh Mát", "Bạn Tân", "Xu-di"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Câu chuyện 'Rừng của Mát' ca ngợi phẩm chất tốt đẹp nào ở nhân vật chính?",
                "options": [
                    "Tình yêu thiên nhiên, ý chí kiên cường và lòng chung thủy giữ trọn lời hứa với người thân",
                    "Khả năng học tập xuất sắc đạt nhiều điểm cao",
                    "Lòng dũng cảm cứu người gặp nạn trên biển",
                    "Tài năng chơi nhạc cụ độc đáo truyền thống"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Nhân vật nào trong truyện 'Hộp quà màu thiên thanh' đã lo lắng việc đi học muộn của bạn và nói giúp bạn trước cô giáo?",
                "options": ["Bạn Quang", "Bạn Huệ", "Cô giáo chủ nhiệm", "Bạn Tân"],
                "answer": 1,
                "level": 2
            },
            {
                "question": "Ai là nhân vật chính kể về câu chuyện chè cổ thụ Tà Xùa trong bài học?",
                "options": ["Thào A Sùng", "Bạn học cùng lớp của Sùng", "Cô giáo chủ nhiệm lớp", "Người mẹ mua chè cổ thụ"],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Màu sắc chủ đạo gắn liền với cô giáo chủ nhiệm lớp trong ngày lễ tổng kết cuối năm học ở truyện 'Hộp quà màu thiên thanh' là gì?",
                "options": ["Màu vàng tươi", "Màu xanh ngọc bích", "Màu thiên thanh (xanh da trời nhạt)", "Màu đỏ rực rỡ"],
                "answer": 2,
                "level": 2
            },
            {
                "question": "Câu chuyện 'Tiếng hát của người đá' thuộc chủ đề nào trong chương trình Tiếng Việt 5 học kì II?",
                "options": ["Thế giới của chúng ta", "Vẻ đẹp cuộc sống", "Hương sắc trăm miền", "Vượt lên chính mình"],
                "answer": 1,
                "level": 2
            }
        ]
    }
};