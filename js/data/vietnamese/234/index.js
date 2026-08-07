export const lesson234 = {
    "topic": "Tiếng Việt 5",
    "week": "34",
    "period": "234",
    "title": "VIẾT: VIẾT ĐOẠN VĂN NÊU Ý KIẾN PHẢN ĐỐI MỘT SỰ VIỆC, HIỆN TƯỢNG",
    "desc": "Bài học giúp học sinh thực hành viết đoạn văn nêu ý kiến phản đối hành vi vứt rác bừa bãi hoặc chen lấn khi xếp hàng, đồng thời tự đọc soát và sửa lỗi bố cục, diễn đạt.",
    "subject": "Viết",
    "theme": "Thế giới của chúng ta",
    "audio": "",
    "content": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-4xl mx-auto pb-12">
        <!-- 🎯 Mục tiêu bài học -->
        <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
            <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl"></div>
            <h3 class="text-2xl md:text-3xl font-black text-blue-600 mb-4 flex items-center gap-3">
                <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
                Mục tiêu bài học
            </h3>
            <ul class="space-y-3 text-blue-600 font-bold text-xl md:text-2xl ml-2">
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Lựa chọn đề tài và viết được đoạn văn nêu ý kiến phản đối hành vi vứt rác bừa bãi hoặc chen lấn khi xếp hàng.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Sử dụng các từ ngữ thể hiện rõ thái độ phản đối (không đồng ý, không đúng, khó chấp nhận, cần chấm dứt...) kết hợp lý lẽ, dẫn chứng thuyết phục.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Thực hiện đọc soát và tự sửa lỗi đoạn văn về bố cục, sắp xếp ý, diễn đạt và chính tả, dấu câu.
                </li>
            </ul>
        </div>

        <!-- 📖 Đề bài lựa chọn -->
        <section class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 space-y-6">
            <div class="flex items-center gap-4 border-b border-blue-100 pb-4">
                <span class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-2xl md:text-3xl shrink-0">1</span>
                <h4 class="text-2xl md:text-3xl font-black text-blue-600 leading-tight">Đề bài lựa chọn</h4>
            </div>
            <p class="text-gray-600 font-bold text-lg">Em hãy chọn một trong hai đề bài dưới đây để thực hành viết:</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <!-- Đề 1 -->
                <button onclick="window.selectTopic234(1)" id="btn-topic-1" class="p-6 bg-orange-50 hover:bg-orange-100/80 border-2 border-orange-200 rounded-3xl text-left space-y-3 transition-all transform hover:scale-[1.01]">
                    <div class="flex items-center justify-between">
                        <span class="px-3 py-1 bg-orange-600 text-white font-black text-sm rounded-lg">ĐỀ 1</span>
                        <span id="badge-topic-1" class="text-orange-600 font-black text-sm hidden">ĐÃ CHỌN ✓</span>
                    </div>
                    <h5 class="text-xl font-black text-orange-950">Phản đối hiện tượng vứt rác bừa bãi</h5>
                    <p class="text-sm font-bold text-orange-900/75 leading-relaxed">Viết đoạn văn phản đối thói quen vứt rác không đúng nơi quy định, phân tích tác hại đối với đất, nước và bầu không khí.</p>
                </button>

                <!-- Đề 2 -->
                <button onclick="window.selectTopic234(2)" id="btn-topic-2" class="p-6 bg-sky-50 hover:bg-sky-100/80 border-2 border-sky-200 rounded-3xl text-left space-y-3 transition-all transform hover:scale-[1.01]">
                    <div class="flex items-center justify-between">
                        <span class="px-3 py-1 bg-sky-600 text-white font-black text-sm rounded-lg">ĐỀ 2</span>
                        <span id="badge-topic-2" class="text-sky-600 font-black text-sm hidden">ĐÃ CHỌN ✓</span>
                    </div>
                    <h5 class="text-xl font-black text-sky-950">Phản đối hiện tượng chen lấn khi xếp hàng</h5>
                    <p class="text-sm font-bold text-sky-900/75 leading-relaxed">Viết đoạn văn phản đối hành vi mất lịch sự khi chen ngang ở nơi công cộng (căng tin, nhà ga, điểm xe buýt...), kêu gọi nếp sống văn minh.</p>
                </button>
            </div>
        </section>

        <!-- 💡 Ý chính bài học -->
        <div class="bg-emerald-50/70 p-6 rounded-3xl border-l-8 border-emerald-500 shadow-md relative overflow-hidden max-w-3xl mx-auto">
            <div class="absolute -right-10 -top-10 w-24 h-24 bg-emerald-100/40 rounded-full blur-xl"></div>
            <h5 class="text-xl md:text-2xl font-black text-emerald-900 mb-2 flex items-center gap-2">
                <span>💡</span> Ý chính bài học
            </h5>
            <p class="text-emerald-800 text-lg md:text-xl font-bold leading-relaxed">
                Rèn luyện kỹ năng thực hành viết đoạn văn nêu ý kiến phản đối dựa trên dàn ý đã lập, đồng thời phát triển thói quen tự đọc soát, chỉnh sửa bài viết của mình theo các tiêu chuẩn về cấu trúc và diễn đạt.
            </p>
        </div>
    </div>
    `,
    "practice": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-4xl mx-auto pb-12">
        <!-- BÀI TẬP 1: THỰC HÀNH SOẠN BÀI VIẾT (TƯƠNG TÁC) -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-blue-100 space-y-6" id="ex-234-write">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">2</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Thực hành viết đoạn văn của em</h3>
            </div>
            
            <div id="outline-tip-234" class="p-6 bg-blue-50/50 rounded-3xl border border-blue-100 space-y-3">
                <p class="font-black text-blue-950 text-lg">💡 Gợi ý từ ngữ phản đối khuyên dùng:</p>
                <div class="flex flex-wrap gap-2 text-base">
                    <span class="px-3 py-1 bg-white border border-blue-200 rounded-full font-bold text-blue-600">không đồng ý</span>
                    <span class="px-3 py-1 bg-white border border-blue-200 rounded-full font-bold text-blue-600">trái với văn minh</span>
                    <span class="px-3 py-1 bg-white border border-blue-200 rounded-full font-bold text-blue-600">khó chấp nhận</span>
                    <span class="px-3 py-1 bg-white border border-blue-200 rounded-full font-bold text-blue-600">cần chấm dứt ngay</span>
                    <span class="px-3 py-1 bg-white border border-blue-200 rounded-full font-bold text-blue-600">đáng chê trách</span>
                </div>
            </div>

            <!-- Vùng viết bài -->
            <div class="space-y-4">
                <div class="flex items-center justify-between">
                    <span id="selected-title-display" class="font-black text-blue-950 text-xl">Chủ đề: Chưa chọn đề bài</span>
                </div>
                <textarea id="objection-text" class="w-full p-6 border-2 border-blue-200 rounded-3xl font-medium focus:outline-none focus:border-blue-500 text-lg serif-font" rows="8" placeholder="Em hãy chọn đề bài ở phần trên rồi viết đoạn văn của mình vào đây (đảm bảo đủ 3 phần: Mở đầu, Triển khai, Kết thúc)..." disabled></textarea>
                
                <div class="flex justify-end items-center gap-4"><button onclick="window.submitWrite234();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-write-234" class="hidden p-6 rounded-3xl border animate-in fade-in"></div>
            </div>
        </section>

        <!-- BÀI TẬP 2: ĐỌC SOÁT VÀ CHỈNH SỬA (TƯƠNG TÁC) -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-emerald-100 space-y-6" id="ex-234-audit">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black">3</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Đọc soát và tự chỉnh sửa đoạn văn</h3>
            </div>
            <p class="text-gray-600 font-bold text-lg">Em hãy tự đọc soát lại bài viết của mình và tích chọn vào các ô tiêu chuẩn đã đạt được dưới đây:</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Tiêu chuẩn 1 -->
                <label class="flex items-center gap-4 p-4 bg-emerald-50/30 border border-emerald-100 rounded-2xl cursor-pointer hover:bg-emerald-50 transition-colors">
                    <input type="checkbox" id="chk-audit-1" class="w-6 h-6 border-2 border-emerald-500 rounded text-emerald-600 focus:ring-emerald-500 shrink-0">
                    <span class="font-bold text-gray-700 text-base md:text-lg"><strong>Bố cục:</strong> Đoạn văn đủ 3 phần (Mở đầu, Triển khai, Kết thúc).</span>
                </label>

                <!-- Tiêu chuẩn 2 -->
                <label class="flex items-center gap-4 p-4 bg-emerald-50/30 border border-emerald-100 rounded-2xl cursor-pointer hover:bg-emerald-50 transition-colors">
                    <input type="checkbox" id="chk-audit-2" class="w-6 h-6 border-2 border-emerald-500 rounded text-emerald-600 focus:ring-emerald-500 shrink-0">
                    <span class="font-bold text-gray-700 text-base md:text-lg"><strong>Sắp xếp ý:</strong> Các lý do và dẫn chứng được sắp xếp mạch lạc, logic.</span>
                </label>

                <!-- Tiêu chuẩn 3 -->
                <label class="flex items-center gap-4 p-4 bg-emerald-50/30 border border-emerald-100 rounded-2xl cursor-pointer hover:bg-emerald-50 transition-colors">
                    <input type="checkbox" id="chk-audit-3" class="w-6 h-6 border-2 border-emerald-500 rounded text-emerald-600 focus:ring-emerald-500 shrink-0">
                    <span class="font-bold text-gray-700 text-base md:text-lg"><strong>Diễn đạt:</strong> Sử dụng từ ngữ phản đối thuyết phục, lịch sự.</span>
                </label>

                <!-- Tiêu chuẩn 4 -->
                <label class="flex items-center gap-4 p-4 bg-emerald-50/30 border border-emerald-100 rounded-2xl cursor-pointer hover:bg-emerald-50 transition-colors">
                    <input type="checkbox" id="chk-audit-4" class="w-6 h-6 border-2 border-emerald-500 rounded text-emerald-600 focus:ring-emerald-500 shrink-0">
                    <span class="font-bold text-gray-700 text-base md:text-lg"><strong>Chính tả:</strong> Không mắc lỗi chính tả, viết hoa hay dấu câu.</span>
                </label>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="window.resetAudit234()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="window.checkAudit234();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-audit-234" class="hidden p-4 rounded-xl font-bold text-lg mt-4 animate-in fade-in"></div>
        </section>

        <!-- 🏫 Hoạt động Vận dụng -->
        <section class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-orange-100 space-y-4">
            <h4 class="text-2xl md:text-3xl font-black text-orange-900 flex items-center gap-2">
                <span>👪</span> Vận dụng sáng tạo
            </h4>
            <ul class="space-y-3 text-xl font-bold text-gray-700 leading-relaxed pl-2">
                <li class="flex items-start gap-2">
                    <span class="text-orange-500">•</span>
                    <span>Trao đổi với người thân ý kiến phản đối của em về hiện tượng chen lấn khi xếp hàng.</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-orange-500">•</span>
                    <span>Tìm đọc các văn bản thông tin giới thiệu về giải pháp xử lý rác thải trên sách báo hoặc internet.</span>
                </li>
            </ul>
        </section>
    </div>
    `,
    "quizPool": [
        {
            "question": "Khi viết đoạn văn nêu ý kiến phản đối một sự việc, hiện tượng, ta cần chú ý sử dụng từ ngữ như thế nào?",
            "options": [
                "Sử dụng từ ngữ ca ngợi, đồng tình tuyệt đối với hành vi đó",
                "Sử dụng từ ngữ biểu thị rõ thái độ phản đối lịch sự nhưng cương quyết",
                "Sử dụng thật nhiều tiếng lóng và biệt ngữ xã hội",
                "Hạn chế tối đa dùng từ ngữ để người đọc tự suy đoán"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tiêu chí nào sau đây cần đọc soát đầu tiên khi chỉnh sửa đoạn văn phản đối?",
            "options": [
                "Kiểm tra cỡ chữ và màu mực viết bài",
                "Đọc soát bố cục đủ 3 phần của đoạn văn",
                "Đếm số lượng từ ngữ trong đoạn văn",
                "Tra từ điển các từ ngữ nước ngoài"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong phần Triển khai của đoạn văn phản đối, các lí do phản đối cần đáp ứng yêu cầu gì?",
            "options": [
                "Lí do phản đối phải xác đáng, đi kèm dẫn chứng thuyết phục",
                "Chỉ cần nêu lí do ngắn gọn không cần đưa dẫn chứng thực tế",
                "Sao chép nguyên văn các lí do trong các câu chuyện cổ tích",
                "Nêu lí do một cách mơ hồ để tạo bất ngờ cho bạn đọc"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Ý kiến phản đối nào sau đây phù hợp nhất cho hiện tượng vứt rác bừa bãi?",
            "options": [
                "Đây là hành động bình thường vì sẽ có công nhân dọn dẹp sạch",
                "Hành vi vứt rác bừa bãi là việc làm thiếu ý thức, cần chấm dứt ngay",
                "Đồng ý vứt rác bừa bãi nếu đó là rác phân hủy sinh học",
                "Ủng hộ việc vứt rác ở những nơi công cộng chưa có thùng rác"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Lí do nào thuyết phục nhất để phản đối việc chen lấn khi xếp hàng?",
            "options": [
                "Xếp hàng làm tốn rất nhiều thời gian chờ đợi vô ích",
                "Chen lấn gây mất trật tự công cộng, thể hiện lối sống thiếu văn minh",
                "Người chen lấn sẽ được mua hàng nhanh hơn mọi người xung quanh",
                "Xếp hàng khiến cho không gian công cộng trở nên chật chội"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Bông hoa [icon hoa] trong phần đọc soát và chỉnh sửa ở SGK biểu thị tiêu chí soát lỗi nào?",
            "options": [
                "Kiểm tra tranh vẽ minh họa",
                "Chính tả và lỗi dấu câu, dùng từ",
                "Xác định độ dài của đoạn văn",
                "Kiểm tra giọng đọc của học sinh"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Thái độ phù hợp khi trao đổi ý kiến phản đối với người thân là gì?",
            "options": [
                "Tranh cãi to tiếng để bảo vệ ý kiến của mình bằng mọi giá",
                "Trình bày rõ ràng, ôn hòa, lịch sự kết hợp lý lẽ thuyết phục",
                "Im lặng không nói gì và bỏ về phòng riêng",
                "Chấp nhận mọi ý kiến của người thân không cần phản biện"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi phát hiện đoạn văn của mình bị lặp từ quá nhiều, em cần sửa như thế nào?",
            "options": [
                "Giữ nguyên vì lặp từ giúp đoạn văn có nhịp điệu giống thơ",
                "Sử dụng các từ ngữ thay thế (đại từ, từ đồng nghĩa) hoặc rút gọn",
                "Xóa bỏ hoàn toàn những câu chứa từ bị lặp lại đó",
                "Viết thêm nhiều câu mới cũng chứa từ bị lặp đó"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ ngữ nào biểu thị thái độ phản đối một cách trực tiếp?",
            "options": [
                "vô cùng tuyệt vời",
                "không đúng, khó chấp nhận",
                "hoàn toàn tán thành",
                "rất đáng khen ngợi"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Phần Kết thúc của đoạn văn phản đối có nhiệm vụ chính là gì?",
            "options": [
                "Đưa ra các giải pháp công nghệ kỹ thuật xử lý rác thải",
                "Khẳng định lại ý kiến phản đối hoặc nêu ý nghĩa của việc lên tiếng",
                "Kể lại câu chuyện mình đã chứng kiến hiện tượng đó",
                "Giới thiệu các thành viên trong nhóm thảo luận của mình"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tại sao rác thải nhựa vứt bừa bãi lại có hại nghiêm trọng cho cây cối?",
            "options": [
                "Vì rác thải nhựa làm tăng độ ẩm của đất quá cao",
                "Vì rác lẫn vào đất làm cho cây cối khó phát triển, rễ khó hút nước",
                "Vì chúng thu hút các loài động vật đến ăn lá cây",
                "Vì chúng ngăn cản ánh nắng chiếu vào thân cây"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Việc đọc soát lại bài viết sau khi hoàn thành giúp ích gì cho học sinh?",
            "options": [
                "Giúp bài viết đạt điểm cao hơn mà không cần sửa lỗi",
                "Giúp phát hiện kịp thời các lỗi sai để hoàn thiện bài viết tốt nhất",
                "Làm tăng thời gian làm bài của học sinh trên lớp",
                "Giúp học sinh nhớ lại các nội dung đã học lớp dưới"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đâu là từ viết sai chính tả trong các từ sau?",
            "options": [
                "sử lý",
                "xử lý",
                "sắp xếp",
                "chen lấn"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong chủ điểm 'Thế giới của chúng ta', các bài học viết thường hướng tới điều gì?",
            "options": [
                "Các hiện tượng tự nhiên kỳ bí ngoài vũ trụ",
                "Các vấn đề đời sống xã hội, ý thức cộng đồng và bảo vệ môi trường",
                "Các câu chuyện lịch sử dựng nước của cha ông ta",
                "Cách làm các món ăn truyền thống của quê hương"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Hành vi tự ý chen ngang khi xếp hàng mua vé xe buýt thể hiện điều gì?",
            "options": [
                "Sự thông minh và nhanh nhẹn hơn người khác",
                "Thiếu tôn trọng mọi người xung quanh, trái với nếp sống văn minh",
                "Tiết kiệm thời gian di chuyển tối đa cho xã hội",
                "Sự dũng cảm đấu tranh để giành quyền lợi cá nhân"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// Đăng ký các biến trạng thái và hàm tương tác toàn cục
window.selectedTopic234 = null;

window.selectTopic234 = function(topicId) {
    window.selectedTopic234 = topicId;
    const btn1 = document.getElementById('btn-topic-1');
    const btn2 = document.getElementById('btn-topic-2');
    const badge1 = document.getElementById('badge-topic-1');
    const badge2 = document.getElementById('badge-topic-2');
    const titleDisp = document.getElementById('selected-title-display');
    const textarea = document.getElementById('objection-text');
    const submitBtn = document.getElementById('btn-submit-write');

    // Mở khóa textarea và nút submit
    textarea.disabled = false;
    submitBtn.disabled = false;
    submitBtn.classList.remove('cursor-not-allowed');

    if (topicId === 1) {
        btn1.className = "p-6 bg-orange-100 border-2 border-orange-500 rounded-3xl text-left space-y-3 transition-all transform scale-[1.01] shadow-md";
        btn2.className = "p-6 bg-sky-50 hover:bg-sky-100/80 border-2 border-sky-200 rounded-3xl text-left space-y-3 transition-all transform hover:scale-[1.01]";
        badge1.classList.remove('hidden');
        badge2.classList.add('hidden');
        titleDisp.innerText = "Chủ đề đã chọn: Phản đối hiện tượng vứt rác bừa bãi";
        textarea.placeholder = "Viết đoạn văn phản đối việc vứt rác bừa bãi (Ví dụ: Hiện nay, hiện tượng vứt rác bừa bãi vẫn diễn ra ở nhiều nơi. Đây là việc làm hoàn toàn không đúng, gây hại nghiêm trọng cho môi trường sống của con người...)";
    } else {
        btn2.className = "p-6 bg-sky-100 border-2 border-sky-500 rounded-3xl text-left space-y-3 transition-all transform scale-[1.01] shadow-md";
        btn1.className = "p-6 bg-orange-50 hover:bg-orange-100/80 border-2 border-orange-200 rounded-3xl text-left space-y-3 transition-all transform hover:scale-[1.01]";
        badge2.classList.remove('hidden');
        badge1.classList.add('hidden');
        titleDisp.innerText = "Chủ đề đã chọn: Phản đối hiện tượng chen lấn khi xếp hàng";
        textarea.placeholder = "Viết đoạn văn phản đối chen lấn xếp hàng (Ví dụ: Em vô cùng phản đối hành vi chen lấn khi xếp hàng ở nơi công cộng. Việc làm này rất thiếu lịch sự, gây mất trật tự và cản trở mọi người xung quanh...)";
    }
};

window.submitWrite234 = function() {
    const text = document.getElementById('objection-text').value.trim();
    const fb = document.getElementById('fb-write-234');
    fb.classList.remove('hidden');

    if (!window.selectedTopic234) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-2";
        fb.innerHTML = "⚠️ Em hãy chọn 1 trong 2 đề bài ở phía trên trước khi viết nhé!";
        return;
    }

    if (text.length < 30) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-2";
        fb.innerHTML = "⚠️ Đoạn văn của em còn hơi ngắn. Hãy viết thêm lý lẽ và dẫn chứng thuyết phục để bảo vệ ý kiến phản đối nhé!";
        return;
    }

    fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-2";
    fb.innerHTML = "🌟 Đoạn văn của em đã được gửi thành công! Hãy chuyển xuống hoạt động 3 để tự đọc soát và đánh giá bài viết của mình nhé.";
    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    if (typeof window.submitMathLesson === 'function') {
        window.submitMathLesson("Viết Tiết 234: Viết đoạn văn phản đối", 100, "ex-234-write", 1, 1, 1);
    }
};

window.checkAudit234 = function() {
    const c1 = document.getElementById('chk-audit-1').checked;
    const c2 = document.getElementById('chk-audit-2').checked;
    const c3 = document.getElementById('chk-audit-3').checked;
    const c4 = document.getElementById('chk-audit-4').checked;
    const fb = document.getElementById('fb-audit-234');
    fb.classList.remove('hidden');

    if (!c1 || !c2 || !c3 || !c4) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em hãy tự rà soát kĩ bài viết và tích chọn đầy đủ các tiêu chí đạt được nhé!";
        return;
    }

    fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
    fb.innerHTML = "🌟 Tuyệt vời! Khi đạt được tất cả 4 tiêu chuẩn trên, đoạn văn của em đã đạt yêu cầu rất tốt về cả hình thức và nội dung rồi đấy!";
    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    if (typeof window.submitMathLesson === 'function') {
        window.submitMathLesson("Viết Tiết 234: Đọc soát đoạn văn", 100, "ex-234-audit", 1, 1, 1);
    }
};

window.resetAudit234 = function() {
    document.getElementById('chk-audit-1').checked = false;
    document.getElementById('chk-audit-2').checked = false;
    document.getElementById('chk-audit-3').checked = false;
    document.getElementById('chk-audit-4').checked = false;
    const fb = document.getElementById('fb-audit-234');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};

// Đăng ký bài học toàn cục
window.lesson234 = lesson234;
