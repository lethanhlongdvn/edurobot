export const lesson91 = {
    "topic": "Tiếng Việt 5",
    "week": "13",
    "period": "91",
    "title": "NÓI VÀ NGHE: LỢI ÍCH CỦA TỰ HỌC",
    "desc": "Tiết thực hành Nói và nghe giúp học sinh chuẩn bị ý kiến, trình bày tự tin và thảo luận nhóm về chủ đề 'Lợi ích của tự học'; đồng thời rèn luyện kỹ năng nghe tích cực và nhận xét khách quan.",
    "subject": "Nói & Nghe",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
<div class="flex justify-end mb-4">
    <button onclick="playSegmentAudio('assets/audio/tiengviet/91/loi_ich_cua_tu_hoc.mp3')" class="p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc toàn bài">
        <span class="text-xl">🔊 Nghe đọc mẫu</span>
    </button>
</div>
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-blue-600 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-blue-600 font-bold text-lg md:text-xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Hiểu rõ khái niệm tự học, vai trò và những lợi ích to lớn mà tự học đem lại cho bản thân trong cuộc sống và học tập.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết chuẩn bị nội dung thảo luận mạch lạc, trình bày tự tin trước tập thể lớp và biết lắng nghe, ghi chép ý kiến của bạn.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết cách tương tác tích cực, thảo luận văn minh và tự đánh giá bài nói dựa trên các tiêu chí cụ thể.
            </li>
        </ul>
    </div>

    <!-- 🚀 Khởi động: Trò chơi ghép nối các tấm gương tự học -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <h3 class="text-2xl md:text-5xl font-black text-blue-600 border-b border-blue-100 pb-4 flex items-center gap-3">
            <span class="text-xl md:text-3xl">🚀</span>
            Khởi động: Ai là danh nhân tự học?
        </h3>
        <p class="text-lg text-gray-700 font-bold leading-relaxed">
            Em hãy ghép nối tên các danh nhân nước Việt ta với câu chuyện/thành tích tự học nổi tiếng của họ để sẵn sàng thảo luận nhé:
        </p>

        <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div class="bg-blue-50/50 p-5 rounded-2xl border-2 border-blue-100 flex flex-col justify-between space-y-3">
                <span class="font-black text-lg text-blue-600">📚 Mạc Đĩnh Chi</span>
                <select id="vn91-start-mac" class="p-3 border border-blue-200 rounded-xl font-bold bg-white text-base">
                    <option value="">-- Chọn câu chuyện --</option>
                    <option value="book">Nổi tiếng tự học bằng cách bắt đom đóm bỏ vào vỏ trứng lấy ánh sáng đọc sách ban đêm</option>
                    <option value="math">Nổi tiếng thần đồng toán học, tự nghĩ ra cách đo bóng cây để tính chiều cao tháp</option>
                    <option value="eng">Tấm gương tự học toàn diện ngoại ngữ, nói tiếng Anh trôi chảy và tự dịch tiếng Nga trong 3 tháng</option>
                </select>
            </div>
            <div class="bg-blue-50/50 p-5 rounded-2xl border-2 border-blue-100 flex flex-col justify-between space-y-3">
                <span class="font-black text-lg text-blue-600">📚 Lương Thế Vinh</span>
                <select id="vn91-start-luong" class="p-3 border border-blue-200 rounded-xl font-bold bg-white text-base">
                    <option value="">-- Chọn câu chuyện --</option>
                    <option value="book">Nổi tiếng tự học bằng cách bắt đom đóm bỏ vào vỏ trứng lấy ánh sáng đọc sách ban đêm</option>
                    <option value="math">Nổi tiếng thần đồng toán học, tự nghĩ ra cách đo bóng cây để tính chiều cao tháp</option>
                    <option value="eng">Tấm gương tự học toàn diện ngoại ngữ, nói tiếng Anh trôi chảy và tự dịch tiếng Nga trong 3 tháng</option>
                </select>
            </div>
            <div class="bg-blue-50/50 p-5 rounded-2xl border-2 border-blue-100 flex flex-col justify-between space-y-3">
                <span class="font-black text-lg text-blue-600">📚 Tạ Quang Bửu</span>
                <select id="vn91-start-ta" class="p-3 border border-blue-200 rounded-xl font-bold bg-white text-base">
                    <option value="">-- Chọn câu chuyện --</option>
                    <option value="book">Nổi tiếng tự học bằng cách bắt đom đóm bỏ vào vỏ trứng lấy ánh sáng đọc sách ban đêm</option>
                    <option value="math">Nổi tiếng thần đồng toán học, tự nghĩ ra cách đo bóng cây để tính chiều cao tháp</option>
                    <option value="eng">Tấm gương tự học toàn diện ngoại ngữ, nói tiếng Anh trôi chảy và tự dịch tiếng Nga trong 3 tháng</option>
                </select>
            </div>
        </div>

        <div class="flex justify-center pt-2">
            <button onclick="checkStartVn91()" class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-lg rounded-2xl shadow active:scale-95 transition-all">KIỂM TRA GHÉP NỐI</button>
        </div>
        <div id="fb-start-91" class="hidden p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner"></div>
    </div>

    <!-- 📑 HOẠT ĐỘNG 1: CHUẨN BỊ Ý KIẾN PHÁT BIỂU -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <h3 class="text-2xl md:text-5xl font-black text-blue-600 border-b border-blue-100 pb-4 flex items-center gap-3">
            <span class="text-xl md:text-3xl">📝</span>
            Hoạt động 1: Phiếu chuẩn bị phát biểu thảo luận
        </h3>
        <p class="text-lg text-gray-700 font-bold leading-relaxed">
            Trước khi tiến hành thảo luận nhóm, em hãy ghi chép lại các ý kiến dự định phát biểu của mình vào phiếu chuẩn bị trực tuyến này nhé:
        </p>

        <div class="max-w-4xl mx-auto space-y-5 pt-2">
            <div class="bg-blue-50/20 p-5 rounded-2xl border border-blue-100 space-y-2">
                <label class="text-base font-black text-indigo-950 block">a) Thế nào là tự học?</label>
                <input type="text" id="vn91-prep-a" placeholder="Nhập cách hiểu của em... Ví dụ: Tự tìm hiểu kiến thức, không cần người khác nhắc nhở..." class="w-full p-3 border-2 border-blue-100 rounded-xl outline-none focus:border-blue-500 font-bold">
            </div>

            <div class="bg-blue-50/20 p-5 rounded-2xl border border-blue-100 space-y-2">
                <label class="text-base font-black text-indigo-950 block">b) Lợi ích của tự học đem lại cho em là gì?</label>
                <input type="text" id="vn91-prep-b" placeholder="Nhập lợi ích... Ví dụ: Giúp em nhớ lâu hơn, rèn phẩm chất chăm chỉ..." class="w-full p-3 border-2 border-blue-100 rounded-xl outline-none focus:border-blue-500 font-bold">
            </div>

            <div class="bg-blue-50/20 p-5 rounded-2xl border border-blue-100 space-y-2">
                <label class="text-base font-black text-indigo-950 block">c) Gương tự học nào mà em biết và ấn tượng nhất?</label>
                <input type="text" id="vn91-prep-c" placeholder="Nhập tên tấm gương tự học... Ví dụ: Bác Hồ tự học ngoại ngữ, bạn học sinh nghèo vượt khó..." class="w-full p-3 border-2 border-blue-100 rounded-xl outline-none focus:border-blue-500 font-bold">
            </div>

            <div class="flex justify-center">
                <button onclick="savePrepVn91()" class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black text-lg rounded-2xl shadow active:scale-95 transition-all">LƯU Ý KIẾN CHUẨN BỊ 💾</button>
            </div>
            <div id="fb-prep-91" class="hidden p-5 rounded-3xl border-2 font-bold text-lg text-center shadow-lg transition-all"></div>
        </div>
    </div>

    <!-- 💬 HOẠT ĐỘNG 2: THẢO LUẬN & TRÌNH BÀY (Audio Recorder & Mindmap) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-8">
        <h3 class="text-2xl md:text-5xl font-black text-blue-600 border-b border-blue-100 pb-4 flex items-center gap-3">
            <span class="text-xl md:text-3xl">💬</span>
            Hoạt động 2: Thảo luận nhóm & Trình bày bài nói
        </h3>

        <!-- Mindmap lợi ích tự học -->
        <div class="space-y-4 max-w-4xl mx-auto">
            <h4 class="text-lg font-black text-gray-800 text-center uppercase tracking-wide">🗺️ Sơ đồ gợi ý nội dung thảo luận 🗺️</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-gradient-to-br from-blue-50 to-blue-100/50 p-5 rounded-2xl border border-blue-200 shadow-sm text-center">
                    <span class="text-xl md:text-3xl block mb-2">💡</span>
                    <h5 class="font-black text-blue-600 text-base mb-1">Cách hiểu về tự học</h5>
                    <p class="text-sm font-bold text-blue-600 leading-relaxed">Là quá trình tự tìm hiểu các kiến thức cần thiết cho mình, không ỷ lại hay phụ thuộc hoàn toàn vào người khác.</p>
                </div>
                <div class="bg-gradient-to-br from-amber-50 to-amber-100/50 p-5 rounded-2xl border border-amber-200 shadow-sm text-center">
                    <span class="text-xl md:text-3xl block mb-2">⭐</span>
                    <h5 class="font-black text-amber-900 text-base mb-1">Lợi ích của tự học</h5>
                    <p class="text-sm font-bold text-amber-800 leading-relaxed">Có thêm nhiều kiến thức bổ ích, nhớ lâu hơn; rèn phẩm chất tự lập, chăm chỉ và sáng tạo tư duy.</p>
                </div>
                <div class="bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-5 rounded-2xl border border-emerald-200 shadow-sm text-center">
                    <span class="text-xl md:text-3xl block mb-2">🚀</span>
                    <h5 class="font-black text-emerald-900 text-base mb-1">Cách tự học hiệu quả</h5>
                    <p class="text-sm font-bold text-emerald-800 leading-relaxed">Tự chuẩn bị bài trước khi đến lớp; chủ động tìm kiếm tài liệu học tập qua sách báo, internet.</p>
                </div>
            </div>
        </div>

        <!-- Máy thu âm bài nói phát biểu của học sinh -->
        <div class="bg-blue-50/30 p-6 md:p-8 rounded-[36px] border border-blue-100 max-w-3xl mx-auto space-y-4 shadow-inner">
            <h4 class="text-lg font-black text-blue-600 text-center flex items-center justify-center gap-2">
                <span>🎙️</span> LUYỆN TẬP PHÁT BIỂU VÀ THU ÂM BÀI NÓI
            </h4>
            <p class="text-sm text-blue-600 text-center font-bold">
                Em hãy bấm nút để ghi âm lại phần trình bày thảo luận của mình. Lắng nghe lại để điều chỉnh âm lượng, tốc độ nói cho tự tin và lôi cuốn hơn nhé!
            </p>
            
            <div class="flex items-center justify-center gap-3 pt-2">
                <button id="btn-start-rec-91" onclick="startRec91()" class="px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-black rounded-2xl shadow active:scale-95 transition-all flex items-center gap-2">
                    <span>🔴</span> Bắt đầu ghi âm
                </button>
                <button id="btn-stop-rec-91" onclick="stopRec91()" disabled class="px-5 py-3 bg-gray-800 hover:bg-gray-900 text-white font-black rounded-2xl shadow active:scale-95 transition-all flex items-center gap-2">
                    <span>⏹️</span> Dừng ghi âm
                </button>
                <audio id="audio-play-91" class="hidden h-10 w-44" controls></audio>
            </div>
            <div id="rec-status-91" class="text-center font-bold text-xs text-red-600 hidden animate-pulse">🔴 Đang ghi âm phát biểu...</div>
        </div>
    </div>

    <!-- 📋 HOẠT ĐỘNG 3: ĐÁNH GIÁ VÀ RÚT KINH NGHIỆM -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <h3 class="text-2xl md:text-5xl font-black text-blue-600 border-b border-blue-100 pb-4 flex items-center gap-3">
            <span class="text-xl md:text-3xl">📊</span>
            Hoạt động 3: Đánh giá & Rút kinh nghiệm thảo luận
        </h3>
        <p class="text-lg text-gray-700 font-bold leading-relaxed">
            Học sinh tự đánh giá hoặc đánh giá bài thảo luận của bạn dựa trên 3 tiêu chuẩn cốt lõi:
        </p>

        <div class="max-w-4xl mx-auto space-y-4">
            <div class="flex flex-col md:flex-row items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span class="w-12 h-12 bg-blue-100 text-blue-600 font-black rounded-full flex items-center justify-center text-lg shrink-0">📊</span>
                <div class="text-left w-full">
                    <h5 class="font-black text-indigo-950 text-base">Kết quả thảo luận có chất lượng</h5>
                    <p class="text-xs text-gray-800 font-semibold">Nêu bật được ý nghĩa to lớn và thiết thực của việc tự học.</p>
                </div>
                <input type="checkbox" class="w-6 h-6 text-blue-600 focus:ring-indigo-500 rounded">
            </div>

            <div class="flex flex-col md:flex-row items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span class="w-12 h-12 bg-amber-100 text-amber-800 font-black rounded-full flex items-center justify-center text-lg shrink-0">🗣️</span>
                <div class="text-left w-full">
                    <h5 class="font-black text-indigo-950 text-base">Người thảo luận tích cực, tự tin</h5>
                    <p class="text-xs text-gray-800 font-semibold">Giọng phát biểu rõ ràng, mạch lạc, biểu cảm tự nhiên và tự tin nhìn mọi người.</p>
                </div>
                <input type="checkbox" class="w-6 h-6 text-blue-600 focus:ring-indigo-500 rounded">
            </div>

            <div class="flex flex-col md:flex-row items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span class="w-12 h-12 bg-emerald-100 text-emerald-800 font-black rounded-full flex items-center justify-center text-lg shrink-0">💡</span>
                <div class="text-left w-full">
                    <h5 class="font-black text-indigo-950 text-base">Có những ý kiến hay nhất, sáng tạo</h5>
                    <p class="text-xs text-gray-800 font-semibold">Nêu được các cách thức tự học mới mẻ, các tấm gương thực tế gây xúc động.</p>
                </div>
                <input type="checkbox" class="w-6 h-6 text-blue-600 focus:ring-indigo-500 rounded">
            </div>
        </div>

        <!-- Chia sẻ với người thân -->
        <div class="bg-blue-50 bg-opacity-40 p-6 rounded-3xl border-2 border-dashed border-blue-200 text-center max-w-4xl mx-auto shadow-sm">
            <h4 class="font-black text-blue-600 text-lg mb-2">🏠 Liên hệ thực tế & Vận dụng</h4>
            <p class="text-blue-600 font-bold leading-relaxed text-base">
                Em hãy chia sẻ lại với bố mẹ hoặc người thân về cách tự học hiệu quả nhất của em mà em đã đúc kết được sau buổi thảo luận hôm nay nhé!
            </p>
        </div>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Thế nào là tự học đúng nghĩa nhất?",
            "options": [
                "Là tự mình tìm hiểu, tích lũy kiến thức theo nhu cầu bản thân mà không cần người khác đốc thúc",
                "Là tự học một mình và không bao giờ hỏi ý kiến thầy cô, bạn bè khi gặp bài khó",
                "Là chỉ học những lúc nào bố mẹ bắt buộc và kiểm tra bài cũ",
                "Là tự mình sáng tạo ra các kiến thức mới hoàn toàn khác sách giáo khoa"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Danh nhân Mạc Đĩnh Chi nổi tiếng với câu chuyện tự học vượt khó như thế nào?",
            "options": [
                "Bắt đom đóm bỏ vào vỏ trứng lấy ánh sáng đọc sách ban đêm",
                "Tự đo bóng cây để tính độ cao tháp cổ",
                "Tự học tiếng Nga trong ba tháng để dịch tài liệu quân sự",
                "Dùng que củi vẽ các bài toán học lên nền cát ẩm"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Ai là thần đồng toán học nước Nam đã tự nghĩ ra cách đo bóng cây đo tháp?",
            "options": [
                "Lương Thế Vinh",
                "Mạc Đĩnh Chi",
                "Tạ Quang Bửu",
                "Nguyễn Hiền"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tự học đem lại lợi ích to lớn nào dưới đây cho bản thân em?",
            "options": [
                "Giúp em chủ động nắm vững kiến thức sâu sắc, nhớ lâu và rèn phẩm chất chăm chỉ, tự lập",
                "Giúp em được miễn làm tất cả các bài tập về nhà",
                "Giúp em học thuộc lòng nhanh hơn mà không cần hiểu bản chất bài học",
                "Giúp em có nhiều thời gian đi chơi điện tử hơn"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Đâu là một cách tự học vô cùng hiệu quả trước khi lên lớp?",
            "options": [
                "Tự đọc sách, tìm hiểu bài mới và ghi lại những câu hỏi thắc mắc trước khi đến lớp",
                "Đợi đến lớp nghe thầy cô giảng bài rồi mới mở sách giáo khoa ra đọc lần đầu",
                "Chép lại đáp án các bài giải sẵn từ sách giải tham khảo",
                "Chỉ cần làm bài tập và không cần đọc phần lý thuyết bài cũ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi chuẩn bị bài thảo luận nói và nghe, em nên làm gì để bài nói mạch lạc hơn?",
            "options": [
                "Ghi chép ngắn gọn các ý chính định phát biểu vào phiếu chuẩn bị hoặc giấy nháp",
                "Viết thành một bài văn thật dài rồi đọc thuộc lòng không sai từ nào",
                "Không cần chuẩn bị trước, đến lượt phát biểu thì nghĩ gì nói nấy",
                "Nhờ bạn bên cạnh viết hộ rồi đọc theo bài viết của bạn"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tiêu chí nào dưới đây dùng để đánh giá chất lượng bài nói thảo luận của một học sinh?",
            "options": [
                "Nội dung đúng trọng tâm, giọng nói to rõ ràng truyền cảm và thái độ tự tin nhìn mọi người",
                "Độ dài bài nói phải kéo dài liên tục trên 30 phút",
                "Học sinh phải sử dụng thật nhiều cử chỉ hành động hài hước gây cười",
                "Bài nói phải trùng khớp 100% với ý kiến của tất cả các bạn khác"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi bạn đang phát biểu ý kiến thảo luận, em nên thể hiện thái độ lắng nghe như thế nào?",
            "options": [
                "Tập trung lắng nghe, ghi chép lại các ý kiến hay và không ngắt lời bạn",
                "Nói chuyện riêng với bạn bên cạnh hoặc làm việc cá nhân khác",
                "Ngắt lời bạn ngay lập tức khi thấy bạn có ý kiến khác biệt với mình",
                "Cười đùa và chê bai ý kiến phát biểu của bạn trước lớp"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'tự lực' có mối liên hệ mật thiết như thế nào với quá trình tự học?",
            "options": [
                "Là khả năng tự dựa vào sức mình, chủ động giải quyết công việc học hỏi mà không ỷ lại",
                "Là việc bắt buộc phải tự làm mọi thứ mà không cần nhờ đến sự trợ giúp nào của thầy cô",
                "Chỉ việc rèn luyện sức khỏe cơ bắp và rèn luyện thể thao",
                "Không có mối liên hệ nào với việc học tập"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Bác Hồ tự học ngoại ngữ bằng phương pháp nổi tiếng nào khi ra đi tìm đường cứu nước?",
            "options": [
                "Mỗi ngày viết vài từ mới lên cánh tay, vừa làm việc vừa nhẩm đọc và thực hành nói với người bản xứ",
                "Chỉ học qua sách lý thuyết mà không cần giao tiếp thực tế",
                "Nhờ các giáo sư ngoại quốc dạy kèm riêng mỗi tối trên tàu",
                "Học thuộc lòng từ điển ngoại ngữ trong một tuần"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Đại từ xưng hô nào thường được dùng khi học sinh phát biểu thảo luận trước toàn lớp?",
            "options": [
                "Em / Tôi và Thầy cô / Các bạn",
                "Bố / Mẹ và Con",
                "Tớ và Cậu ấy",
                "Chúng mày và Tao"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi có ý kiến thảo luận khác với ý kiến của bạn, em nên ứng xử thế nào cho văn minh?",
            "options": [
                "Bày tỏ ý kiến cá nhân lịch sự, nêu rõ lý do tại sao mình nghĩ khác và lắng nghe phản biện của bạn",
                "Khẳng định chắc chắn bạn đã sai và yêu cầu bạn phải nghe theo mình",
                "Tức giận và bỏ không tham gia thảo luận nhóm nữa",
                "Nhờ giáo viên phân xử ngay lập tức mà không tự trao đổi với bạn"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Phẩm chất quan trọng nào được rèn luyện tốt nhất thông qua việc kiên trì tự học?",
            "options": [
                "Tính chăm chỉ, độc lập tư duy, kiên nhẫn và sáng tạo",
                "Tính nóng vội, thích khoe khoang thành tích",
                "Sự phụ thuộc vào sách giải bài tập",
                "Thói quen làm việc qua loa cho xong bài"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ nào trái nghĩa hoàn toàn với khái niệm 'tự học'?",
            "options": [
                "Ỷ lại, lười biếng, thụ động trong học tập",
                "Chăm chỉ, tự lực, hiếu học",
                "Nghiên cứu, tìm tòi, khám phá",
                "Độc lập, sáng tạo, tự giác"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Phương pháp tự học hiệu quả bằng internet nên được học sinh thực hiện thế nào?",
            "options": [
                "Tìm kiếm các bài giảng bổ trợ, bài báo khoa học bổ ích trên các trang web uy tín để mở rộng hiểu biết",
                "Chỉ dùng internet để sao chép nguyên văn các lời giải bài tập về nhà",
                "Vừa mở tab học vừa xem phim hoạt hình hoặc chơi game cùng lúc",
                "Không cần chọn lọc thông tin, đọc bất kỳ tài liệu nào tìm thấy"
            ],
            "answer": 0,
            "level": 0
        }
    ]
};

// ====== INTERACTIVE SCRIPT ======
window.checkStartVn91 = function() {
    const mac = document.getElementById('vn91-start-mac').value;
    const luong = document.getElementById('vn91-start-luong').value;
    const ta = document.getElementById('vn91-start-ta').value;
    const fb = document.getElementById('fb-start-91');
    
    fb.classList.remove('hidden', 'bg-red-100', 'text-red-800', 'bg-green-100', 'text-green-800');
    
    if (mac === 'book' && luong === 'math' && ta === 'eng') {
        fb.innerHTML = '🎉 Ghép nối hoàn toàn chính xác! Mạc Đĩnh Chi bắt đom đóm lấy ánh sáng đọc sách; Lương Thế Vinh tự học tự nghĩ cách đo bóng cây; Tạ Quang Bửu là tấm gương tự học ngoại ngữ xuất sắc.';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-green-100 text-green-800 border-2 border-green-300 animate-fade-in';
    } else {
        fb.innerHTML = '⚠️ Có sự nhầm lẫn rồi, em hãy rà soát lại thông tin về các tấm gương danh nhân để chọn lại nhé!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-red-100 text-red-800 border-2 border-red-300 animate-fade-in';
    }
};

window.savePrepVn91 = function() {
    const a = document.getElementById('vn91-prep-a').value.trim();
    const b = document.getElementById('vn91-prep-b').value.trim();
    const c = document.getElementById('vn91-prep-c').value.trim();
    const fb = document.getElementById('fb-prep-91');
    
    if (!a || !b || !c) {
        alert('Em hãy nhập đầy đủ thông tin chuẩn bị cho cả 3 phần nhé!');
        return;
    }
    
    fb.classList.remove('hidden', 'bg-emerald-50', 'text-emerald-800', 'border-emerald-200');
    
    fb.innerHTML = `🌟 **Thầy E nhận xét phiếu chuẩn bị:** Ý kiến chuẩn bị của em rất chu đáo! Cách hiểu về tự học của em sâu sắc, lợi ích nêu ra rất thực tế và em đã có một tấm gương tự học tiêu biểu để làm dẫn chứng thuyết phục. Hãy tự tin dùng những ý này để thảo luận nhóm nhé!`;
    fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg mt-2 shadow-lg bg-emerald-50 border-emerald-300 text-emerald-800 animate-fade-in';
};

// Quản lý ghi âm bài nói
let mediaRecorder91 = null;
let audioChunks91 = [];

window.startRec91 = function() {
    const btnStart = document.getElementById('btn-start-rec-91');
    const btnStop = document.getElementById('btn-stop-rec-91');
    const status = document.getElementById('rec-status-91');
    const audioPlay = document.getElementById('audio-play-91');
    
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            mediaRecorder91 = new MediaRecorder(stream);
            audioChunks91 = [];
            
            mediaRecorder91.addEventListener("dataavailable", event => {
                audioChunks91.push(event.data);
            });
            
            mediaRecorder91.addEventListener("stop", () => {
                const audioBlob = new Blob(audioChunks91, { type: 'audio/mp3' });
                const audioUrl = URL.createObjectURL(audioBlob);
                audioPlay.src = audioUrl;
                audioPlay.classList.remove('hidden');
                audioPlay.classList.add('inline-block');
            });
            
            mediaRecorder91.start();
            btnStart.disabled = true;
            btnStart.classList.add('opacity-50');
            btnStop.disabled = false;
            status.classList.remove('hidden');
        })
        .catch(err => {
            alert("Không thể truy cập micro của em: " + err.message);
        });
};

window.stopRec91 = function() {
    const btnStart = document.getElementById('btn-start-rec-91');
    const btnStop = document.getElementById('btn-stop-rec-91');
    const status = document.getElementById('rec-status-91');
    
    if (mediaRecorder91 && mediaRecorder91.state !== "inactive") {
        mediaRecorder91.stop();
        // Dừng tất cả track trong stream để tắt đèn micro
        mediaRecorder91.stream.getTracks().forEach(track => track.stop());
    }
    btnStart.disabled = false;
    btnStart.classList.remove('opacity-50');
    btnStop.disabled = true;
    status.classList.add('hidden');
};
