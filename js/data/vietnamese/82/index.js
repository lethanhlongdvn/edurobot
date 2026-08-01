export const lesson82 = {
    "topic": "Tiếng Việt 5",
    "week": "12",
    "period": "82",
    "title": "ĐỌC: TỪ NHỮNG CÂU CHUYỆN ẤU THƠ (TIẾT 2)",
    "desc": "Bài học giúp học sinh phân tích ý nghĩa sâu sắc của những trang sách đối với việc bồi đắp tâm hồn, phát triển trí tưởng tượng của trẻ thơ và ý nghĩa sự lan tỏa thói quen đọc sách trong gia đình.",
    "subject": "Tiếng Việt",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-blue-600 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học (Tiết 2)
        </h3>
        <ul class="space-y-3 text-blue-600 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Hiểu được vai trò to lớn của sách đối với việc bồi đắp tâm hồn, cảm xúc và trí tưởng tượng của trẻ thơ.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Cảm nhận được giá trị nhân văn của việc truyền lửa và lan tỏa tình yêu sách giữa các thế hệ trong gia đình.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết cách liên hệ bản thân, rút ra bài học ý nghĩa về sự kiên trì đọc sách và tự bồi dưỡng tri thức.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🧩</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Thử tài nhớ bài đọc</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Điền từ thích hợp vào chỗ trống (...) dưới đây để hoàn thiện ý thơ/văn của tác giả:</p>
        
        <div class="space-y-4 max-w-3xl mx-auto bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
            <p class="text-xl md:text-2xl font-bold leading-relaxed text-gray-800">
                "Nhờ thói quen ấy, nhu cầu đọc sách đã <span class="text-blue-600 underline">nảy mầm</span> và trở thành một <input type="text" id="kd-83-input" placeholder="......" class="px-2 py-1 border-b-2 border-blue-100 outline-none w-28 text-center text-blue-600 bg-white rounded-md"> trong tôi, như cỏ cây khát ánh sáng và khí trời."
            </p>
            <div class="flex justify-center mt-3">
                <button onclick="kiemTraKhoiDong82()" class="px-6 py-2 bg-blue-600 text-white font-black rounded-lg hover:bg-blue-600 transition-all text-sm shadow">KIỂM TRA CHỮ ĐIỀN ✓</button>
            </div>
            <div id="fb-vn82-kd" class="hidden p-3 rounded-lg text-sm font-bold text-center mt-2"></div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 TÌM HIỂU BÀI - TIẾT 2 -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex flex-col md:flex-row items-center gap-6 border-b border-blue-100 pb-4">
            <div class="flex items-center gap-3 flex-grow">
                <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">?</span>
                <h3 class="text-2xl md:text-3xl font-black text-blue-600">Tìm hiểu bài học (Câu 4, 5)</h3>
            </div>
            <!-- Ảnh minh họa click phóng to -->
            <div onclick="window.showMathFeedback('Từ những câu chuyện ấu thơ', '🖼️', '&lt;div class=&amp;quot;flex justify-center p-2&amp;quot;&gt;&lt;img src=&amp;quot;assets/images/tiengviet_5_1/81-82/81-82.png&amp;quot; class=&amp;quot;max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border-4 border-white&amp;quot; /&gt;&lt;/div&gt;')" class="shrink-0 w-36 h-24 overflow-hidden rounded-2xl border-2 border-blue-100 shadow cursor-pointer hover:scale-105 active:scale-95 transition-all relative group">
                <img src="assets/images/tiengviet_5_1/81-82/81-82.png" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" alt="Minh họa câu chuyện ấu thơ">
                <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span class="text-[8px] font-black text-white bg-blue-600 px-1.5 py-0.5 rounded">🔍 Zoom</span>
                </div>
            </div>
        </div>

        <div class="space-y-8 max-w-4xl mx-auto pt-2">
            <!-- Câu hỏi 4 -->
            <div class="space-y-3 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p class="font-black text-blue-600 text-xl flex items-center gap-2">
                    <span class="w-8 h-8 rounded-full bg-blue-600 text-blue-600 flex items-center justify-center text-sm font-black shadow-inner">4</span>
                    Những trang sách có ý nghĩa to lớn như thế nào đối với bạn nhỏ?
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    <label class="flex items-center gap-3 p-3 bg-white hover:bg-blue-50/20 rounded-xl border border-gray-100 cursor-pointer transition-all select-none">
                        <input type="radio" name="q4-83" value="wrong1" class="w-5 h-5 text-blue-600">
                        <span class="text-base font-bold text-gray-800">Giúp bạn nhỏ học giỏi hơn và được thầy cô khen thưởng</span>
                    </label>
                    <label class="flex items-center gap-3 p-3 bg-white hover:bg-blue-50/20 rounded-xl border border-gray-100 cursor-pointer transition-all select-none">
                        <input type="radio" name="q4-83" value="correct" class="w-5 h-5 text-blue-600">
                        <span class="text-base font-bold text-gray-800">Khóc cười qua trang sách, trải nghiệm những cảm xúc chưa có ngoài đời, bồi đắp tâm hồn, mở rộng trí tưởng tượng</span>
                    </label>
                    <label class="flex items-center gap-3 p-3 bg-white hover:bg-blue-50/20 rounded-xl border border-gray-100 cursor-pointer transition-all select-none">
                        <input type="radio" name="q4-83" value="wrong2" class="w-5 h-5 text-blue-600">
                        <span class="text-base font-bold text-gray-800">Giúp bạn nhỏ giải trí, quên đi những giờ học tập căng thẳng</span>
                    </label>
                    <label class="flex items-center gap-3 p-3 bg-white hover:bg-blue-50/20 rounded-xl border border-gray-100 cursor-pointer transition-all select-none">
                        <input type="radio" name="q4-83" value="wrong3" class="w-5 h-5 text-blue-600">
                        <span class="text-base font-bold text-gray-800">Mang lại niềm vui khi được sở hữu thật nhiều cuốn sách quý</span>
                    </label>
                </div>
            </div>

            <!-- Câu hỏi 5 -->
            <div class="space-y-3 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p class="font-black text-blue-600 text-xl flex items-center gap-2">
                    <span class="w-8 h-8 rounded-full bg-blue-600 text-blue-600 flex items-center justify-center text-sm font-black shadow-inner">5</span>
                    Việc các em của bạn nhỏ rất háo hức được nghe anh kể chuyện thể hiện điều gì?
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    <label class="flex items-center gap-3 p-3 bg-white hover:bg-blue-50/20 rounded-xl border border-gray-100 cursor-pointer transition-all select-none">
                        <input type="radio" name="q5-83" value="wrong1" class="w-5 h-5 text-blue-600">
                        <span class="text-base font-bold text-gray-800">Các em nhỏ không muốn tự mình tìm đọc sách truyện</span>
                    </label>
                    <label class="flex items-center gap-3 p-3 bg-white hover:bg-blue-50/20 rounded-xl border border-gray-100 cursor-pointer transition-all select-none">
                        <input type="radio" name="q5-83" value="wrong2" class="w-5 h-5 text-blue-600">
                        <span class="text-base font-bold text-gray-800">Vì các em chưa đi học lớp Một nên bắt buộc phải nghe anh kể</span>
                    </label>
                    <label class="flex items-center gap-3 p-3 bg-white hover:bg-blue-50/20 rounded-xl border border-gray-100 cursor-pointer transition-all select-none">
                        <input type="radio" name="q5-83" value="correct" class="w-5 h-5 text-blue-600">
                        <span class="text-base font-bold text-gray-800">Thói quen đọc sách và kể chuyện đã lan tỏa một cách tự nhiên, khơi gợi trí tò mò và niềm say mê câu chuyện ở các em</span>
                    </label>
                    <label class="flex items-center gap-3 p-3 bg-white hover:bg-blue-50/20 rounded-xl border border-gray-100 cursor-pointer transition-all select-none">
                        <input type="radio" name="q5-83" value="wrong3" class="w-5 h-5 text-blue-600">
                        <span class="text-base font-bold text-gray-800">Các em chỉ thích nô đùa xung quanh chiếc chiếu ngoài sân</span>
                    </label>
                </div>
            </div>

            <!-- Nút gửi bài -->
            <div class="flex justify-center pt-4">
                <button onclick="kiemTraDocHieu82()" class="px-10 py-4 bg-blue-600 hover:bg-blue-600 text-white font-black rounded-xl transition-all shadow-md active:scale-95 text-lg">
                    XÁC NHẬN ĐÁP ÁN ✓
                </button>
            </div>
            
            <div id="fb-vn82-comprehension" class="hidden p-5 rounded-2xl font-bold text-center mt-2 shadow-lg"></div>
        </div>
    </div>
</div>
`,
    "questions": [
        {
            "question": "Trong câu 'Sách đã bồi đắp tâm hồn, làm giàu có và làm trưởng thành tình cảm', điều gì được nhắc đến?",
            "options": [
                "Giá trị bồi đắp tâm hồn và tình cảm của việc đọc sách",
                "Giá trị rèn luyện thể chất thông qua đọc sách",
                "Cách mua sách giá rẻ nhất thị trường",
                "Quy trình in ấn sách truyện thiếu nhi"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Sự việc bạn nhỏ 'khóc cười qua những trang sách' thể hiện điều gì ở một đứa bé?",
            "options": [
                "Sự đồng cảm sâu sắc và thế giới cảm xúc phong phú của đứa trẻ",
                "Trẻ em dễ khóc dễ cười vô cớ",
                "Sự hoang mang khi đọc sách truyện quá khó hiểu",
                "Tính cách yếu đuối của bạn nhỏ"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Việc tác giả ngạc nhiên thấy mình trải qua những cảm xúc mà thực tế chưa đủ tuổi trải nghiệm ngoài đời chứng tỏ điều gì?",
            "options": [
                "Sách giúp con người có trải nghiệm gián tiếp phong phú",
                "Sách viết những điều xa rời thực tế đời sống",
                "Tác giả là người có năng lực đặc biệt hơn người khác",
                "Tác giả đã đọc sai lứa tuổi cho phép"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Trang sách đã giúp mở rộng điều gì đến 'vô biên bờ cõi' của đứa trẻ?",
            "options": [
                "Trí tưởng tượng",
                "Khu vườn sau nhà",
                "Mối quan hệ bạn bè",
                "Vốn từ ngữ giao tiếp hàng ngày"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Chi tiết nào chứng tỏ tình yêu sách đã được lan tỏa sang các em của bạn nhỏ?",
            "options": [
                "Mấy đứa em tranh nhau nằm gần anh vào mỗi tối, nhao nhao đòi anh kể chuyện",
                "Các em tự đi mua rương truyện Trung Hoa giống anh",
                "Các em học chữ giỏi hơn bạn nhỏ khi lên bảy tuổi",
                "Các em không nghe bà kể chuyện nữa mà chỉ nghe anh kể"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Các em nhỏ đã gọi bạn nhỏ bằng đại từ thân mật nào khi đòi kể chuyện?",
            "options": [
                "Anh Hai",
                "Anh cả",
                "Đại ca",
                "Anh lớn"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tác giả cảm thấy biết ơn ai đã tạo cho mình thói quen đọc sách tự nhiên?",
            "options": [
                "Cả nhà",
                "Ông thợ hớt tóc trong làng",
                "Nhà văn Tô Hoài",
                "Thầy cô giáo ở trường"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nhu cầu đọc sách của tác giả được ví von như thế nào?",
            "options": [
                "Như cỏ cây khát ánh sáng và khí trời",
                "Như dòng sông chảy mãi về biển lớn",
                "Như cánh chim sải cánh giữa trời xanh",
                "Như ngọn lửa sưởi ấm đêm mùa đông"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Biện pháp tu từ chính được dùng trong câu: 'như cỏ cây khát ánh sáng và khí trời' là gì?",
            "options": [
                "So sánh",
                "Nhân hóa",
                "Ẩn dụ",
                "Điệp ngữ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'khát khao' trong câu cuối của bài đọc diễn tả điều gì?",
            "options": [
                "Sự ham muốn, nhu cầu tự học và đọc sách mãnh liệt như một bản năng tự nhiên",
                "Cảm giác khát nước khi đọc sách quá lâu",
                "Khát vọng được trở thành nhà văn nổi tiếng thế giới",
                "Mong mỏi được đi du lịch khám phá thiên nhiên"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Nhờ thói quen đọc sách tự nhiên từ gia đình, điều gì đã nảy mầm trong tác giả?",
            "options": [
                "Nhu cầu đọc sách",
                "Tài năng hội họa",
                "Tình yêu học ngoại ngữ",
                "Khát khao trở thành thợ cắt tóc"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Dòng nào nêu đúng các từ ghép có trong câu: 'nhu cầu đọc sách đã nảy mầm'?",
            "options": [
                "Nhu cầu, đọc sách, nảy mầm",
                "Đã, đã nảy mầm, đọc",
                "Nhu cầu, nảy, mầm",
                "Nhu cầu, đọc, sách, nảy mầm"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Hành động kể lại chuyện cho các em nhỏ nghe vào mỗi buổi tối thể hiện phẩm chất gì ở bạn nhỏ?",
            "options": [
                "Biết sẻ chia những giá trị tốt đẹp, chăm sóc và nuôi dưỡng tâm hồn các em",
                "Thích khoe khoang kiến thức trước mặt các em nhỏ",
                "Muốn các em im lặng để mình dễ ngủ",
                "Tránh việc phải làm các công việc nhà khác"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Qua câu chuyện, tác giả muốn gửi gắm thông điệp gì đến bạn đọc?",
            "options": [
                "Hãy đọc sách thường xuyên để nuôi dưỡng tâm hồn, trí tưởng tượng và làm giàu tình cảm",
                "Nên đi hớt tóc thường xuyên để có nhiều sách truyện đọc ké",
                "Chỉ nên đọc truyện cổ tích do bà và chú kể lại",
                "Bố mẹ đi làm xa thì mới học chữ giỏi được"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nội dung chính của Tiết 2 bài đọc 'Từ những câu chuyện ấu thơ' tập trung vào điều gì?",
            "options": [
                "Giá trị tinh thần của những trang sách và sự lan tỏa thói quen đọc sách",
                "Tìm hiểu về tiểu sử cuộc đời nhà văn Nguyễn Nhật Ánh",
                "Hướng dẫn cách làm một chiếc rương gỗ đựng sách truyện",
                "Phân tích cốt truyện của tác phẩm Không gia đình"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- KHỞI ĐỘNG ---
window.kiemTraKhoiDong82 = function() {
    const text = document.getElementById('kd-83-input')?.value.trim().toLowerCase();
    const fb = document.getElementById('fb-vn82-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (text === 'khát khao' || text === 'khat khao') {
        fb.innerHTML = "🎉 Chính xác! Bạn nhỏ đã khát khao đọc sách như cỏ cây khát ánh sáng và khí trời.";
        fb.className = "p-3 rounded-lg text-sm font-bold text-center bg-emerald-600 text-white mt-2 shadow-sm animate-bounce";
    } else {
        fb.innerHTML = "❌ Chưa chính xác. Em hãy nhớ lại câu cuối của bài đọc để điền từ đúng nhé!";
        fb.className = "p-3 rounded-lg text-sm font-bold text-center bg-rose-600 text-white mt-2 shadow-sm";
    }
};

// --- KIỂM TRA ĐỌC HIỂU ---
window.kiemTraDocHieu82 = function() {
    // Câu 4
    const q4Options = document.getElementsByName('q4-83');
    let q4Val = '';
    for (const opt of q4Options) {
        if (opt.checked) q4Val = opt.value;
    }

    // Câu 5
    const q5Options = document.getElementsByName('q5-83');
    let q5Val = '';
    for (const opt of q5Options) {
        if (opt.checked) q5Val = opt.value;
    }

    const fb = document.getElementById('fb-vn82-comprehension');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!q4Val || !q5Val) {
        fb.innerHTML = "⚠️ Em hãy trả lời đầy đủ cả 2 câu hỏi đọc hiểu nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    if (q4Val === 'correct' && q5Val === 'correct') {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã hoàn thành xuất sắc các câu hỏi đọc hiểu của Tiết 2. Em đã nhận thức rất rõ giá trị của trang sách và ý nghĩa của việc lan tỏa tình yêu sách!";
        fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 mt-2";
    } else {
        fb.innerHTML = "❌ Có câu trả lời chưa chính xác. Em hãy đọc kỹ lại tác dụng của sách đối với bạn nhỏ và ý nghĩa sự đòi kể chuyện của các em để chọn lại nhé!";
        fb.className = "p-5 rounded-2xl font-bold text-base bg-rose-600 text-white shadow-xl border border-rose-100 mt-2";
    }
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.nopBai82Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 83',
            '📚',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🌟</span><p class="text-2xl md:text-3xl font-bold text-blue-600">Chúc mừng em đã hoàn thành Tiết 83!</p><p class="text-lg text-gray-800 mt-3">Đọc sách bồi đắp tâm hồn, giúp ta khôn lớn từng ngày. Hãy biến việc đọc sách thành một thói quen tích cực hằng ngày như tác giả Nguyễn Nhật Ánh nhé!</p></div>'
        );
    }
};
