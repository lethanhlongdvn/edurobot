export const lesson118 = {
    "topic": "Tiếng Việt 5",
    "week": "17",
    "period": "118",
    "title": "VIẾT: ĐÁNH GIÁ, CHỈ SỬA ĐOẠN VĂN GIỚI THIỆU NHÂN VẬT TRONG MỘT BỘ PHIM HOẠT HÌNH",
    "desc": "Bài học giúp học sinh tự đánh giá đoạn văn giới thiệu nhân vật hoạt hình theo các tiêu chí nội dung, hình thức trong sách giáo khoa; thực hành chỉnh sửa lỗi và viết lại đoạn văn cho hay hơn.",
    "subject": "Viết",
    "theme": "Bảo vệ ngôi nhà chung",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-sky-900">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-sky-950 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-900 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-600 font-black">•</span>
                Biết đánh giá đoạn văn đã viết dựa trên các tiêu chí về nội dung và hình thức của đoạn văn giới thiệu nhân vật trong một bộ phim hoạt hình.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-600 font-black">•</span>
                Phát hiện và chỉnh sửa được các lỗi về bố cục, nội dung giới thiệu, đặc điểm nhân vật, lỗi dùng từ, chính tả và trình bày.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-600 font-black">•</span>
                Viết lại được một số câu văn hoặc đoạn văn cho hay hơn, diễn đạt sinh động và giàu cảm xúc hơn.
            </li>
        </ul>
    </div>

    <!-- 📋 PHẦN 1: Nghe nhận xét chung -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">1</span>
            <h3 class="text-2xl md:text-3xl font-black text-sky-950">Nghe thầy cô giáo nhận xét chung.</h3>
        </div>
        <div class="bg-sky-50/50 p-5 rounded-2xl border border-sky-100 max-w-4xl mx-auto">
            <p class="text-lg md:text-xl font-bold text-sky-950">💬 Hãy lắng nghe nhận xét chung của thầy cô về ưu điểm và những điểm cần lưu ý trong bài viết của cả lớp để tự rút kinh nghiệm cho bài làm của mình nhé!</p>
            <div class="mt-4 space-y-2">
                <label class="text-base font-bold text-sky-800">📝 Ghi chép nhanh nhận xét hoặc lỗi cần sửa của bản thân:</label>
                <textarea id="p118-nhanxet-gc" rows="2" placeholder="Ví dụ: Cần chú ý miêu tả rõ hơn ngoại hình nhân vật qua hành động, tránh kể lại cốt truyện..." class="w-full p-3 text-lg rounded-xl border border-gray-200 outline-none focus:border-sky-500 font-semibold bg-white text-gray-800"></textarea>
            </div>
        </div>
    </div>

    <!-- 📋 PHẦN 2: Tự đánh giá đoạn văn -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">2</span>
            <h3 class="text-2xl md:text-3xl font-black text-sky-950">Đọc lại đoạn văn của em và nhận xét của thầy cô để biết bài viết đạt được những điểm nào dưới đây:</h3>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
            <!-- Về nội dung -->
            <div>
                <h4 class="text-xl font-black text-amber-600 mb-3 flex items-center gap-2">🌟 Về nội dung:</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 select-none">
                    <label class="flex items-start gap-3 p-4 rounded-2xl border border-sky-100 bg-sky-50/20 hover:bg-sky-50/60 cursor-pointer transition-all">
                        <input type="checkbox" id="ck-vn118-n1" class="w-6 h-6 text-sky-600 rounded mt-1 shrink-0">
                        <span class="text-lg font-bold text-sky-950">Có đủ 3 phần: mở đầu, triển khai, kết thúc.</span>
                    </label>
                    <label class="flex items-start gap-3 p-4 rounded-2xl border border-sky-100 bg-sky-50/20 hover:bg-sky-50/60 cursor-pointer transition-all">
                        <input type="checkbox" id="ck-vn118-n2" class="w-6 h-6 text-sky-600 rounded mt-1 shrink-0">
                        <span class="text-lg font-bold text-sky-950">Giới thiệu được tên bộ phim và tên nhân vật gây ấn tượng.</span>
                    </label>
                    <label class="flex items-start gap-3 p-4 rounded-2xl border border-sky-100 bg-sky-50/20 hover:bg-sky-50/60 cursor-pointer transition-all">
                        <input type="checkbox" id="ck-vn118-n3" class="w-6 h-6 text-sky-600 rounded mt-1 shrink-0">
                        <span class="text-lg font-bold text-sky-950">Nêu khái quát nội dung bộ phim.</span>
                    </label>
                    <label class="flex items-start gap-3 p-4 rounded-2xl border border-sky-100 bg-sky-50/20 hover:bg-sky-50/60 cursor-pointer transition-all">
                        <input type="checkbox" id="ck-vn118-n4" class="w-6 h-6 text-sky-600 rounded mt-1 shrink-0">
                        <span class="text-lg font-bold text-sky-950">Trình bày được đặc điểm nổi bật về ngoại hình, hoạt động,... của nhân vật qua các tình huống cụ thể.</span>
                    </label>
                    <label class="flex items-start gap-3 p-4 rounded-2xl border border-sky-100 bg-sky-50/20 hover:bg-sky-50/60 cursor-pointer transition-all">
                        <input type="checkbox" id="ck-vn118-n5" class="w-6 h-6 text-sky-600 rounded mt-1 shrink-0">
                        <span class="text-lg font-bold text-sky-950">Nêu được ý nghĩa của bộ phim và thể hiện cảm xúc đối với bộ phim.</span>
                    </label>
                </div>
            </div>

            <!-- Về hình thức -->
            <div>
                <h4 class="text-xl font-black text-emerald-600 mb-3 flex items-center gap-2">📐 Về hình thức:</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 select-none">
                    <label class="flex items-start gap-3 p-4 rounded-2xl border border-sky-100 bg-sky-50/20 hover:bg-sky-50/60 cursor-pointer transition-all">
                        <input type="checkbox" id="ck-vn118-h1" class="w-6 h-6 text-emerald-600 rounded mt-1 shrink-0">
                        <span class="text-lg font-bold text-sky-950">Trình bày đoạn văn đúng quy cách (lùi đầu dòng, viết hoa đầu câu).</span>
                    </label>
                    <label class="flex items-start gap-3 p-4 rounded-2xl border border-sky-100 bg-sky-50/20 hover:bg-sky-50/60 cursor-pointer transition-all">
                        <input type="checkbox" id="ck-vn118-h2" class="w-6 h-6 text-emerald-600 rounded mt-1 shrink-0">
                        <span class="text-lg font-bold text-sky-950">Sắp xếp các ý hợp lý, mạch lạc.</span>
                    </label>
                    <label class="flex items-start gap-3 p-4 rounded-2xl border border-sky-100 bg-sky-50/20 hover:bg-sky-50/60 cursor-pointer transition-all">
                        <input type="checkbox" id="ck-vn118-h3" class="w-6 h-6 text-emerald-600 rounded mt-1 shrink-0">
                        <span class="text-lg font-bold text-sky-950">Có sáng tạo trong việc dùng từ, viết câu.</span>
                    </label>
                    <label class="flex items-start gap-3 p-4 rounded-2xl border border-sky-100 bg-sky-50/20 hover:bg-sky-50/60 cursor-pointer transition-all">
                        <input type="checkbox" id="ck-vn118-h4" class="w-6 h-6 text-emerald-600 rounded mt-1 shrink-0">
                        <span class="text-lg font-bold text-sky-950">Chữ viết sạch, rõ ràng, không mắc lỗi chính tả.</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="flex justify-end items-center gap-4"><button onclick="kiemTraTieuChi118();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
        <div id="fb-vn118-tc" class="hidden p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto"></div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-sky-900">
    <!-- 📋 PHẦN 3: Chỉnh sửa đoạn văn lỗi & tham khảo bài mẫu -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">3</span>
            <h3 class="text-2xl md:text-3xl font-black text-sky-950">Phân tích đoạn văn lỗi và tham khảo bài mẫu chuẩn</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Đoạn văn lỗi cần chỉnh sửa -->
            <div class="bg-rose-50/40 p-6 rounded-3xl border border-rose-100 space-y-3">
                <h4 class="font-black text-rose-800 text-lg flex items-center gap-2">
                    <span class="text-xl">⚠️</span> Đoạn văn viết lỗi (cần chỉnh sửa):
                </h4>
                <div class="bg-white p-5 rounded-2xl border border-rose-200 text-base md:text-lg leading-relaxed text-gray-700 italic">
                    "Em rất thích xem phim Doremon. Doremon là con mèo máy đến từ tương lai. Doremon có cái túi thần kỳ chứa rất nhiều bảo bối. Nobita hay mượn bảo bối của Doremon để đi chơi. Doremon rất thích ăn bánh rán. Bộ phim này rất hay."
                </div>
                <div class="text-sm font-bold text-rose-900 space-y-1">
                    <p class="font-black text-base">🔍 Các lỗi cần sửa:</p>
                    <p>• Về nội dung: Chưa nêu rõ tên đầy đủ bộ phim; kể lặp ý tẻ nhạt, thiếu miêu tả cụ thể ngoại hình và hành động nổi bật của nhân vật; thiếu ý nghĩa nhân văn của phim.</p>
                    <p>• Về hình thức: Viết sai tên riêng nước ngoài ("Doremon" -> "Doraemon" theo bản quyền hiện hành); lặp từ nhiều lần gây nhàm chán.</p>
                </div>
            </div>

            <!-- Bài văn mẫu chuẩn đã chỉnh sửa -->
            <div class="bg-emerald-50/40 p-6 rounded-3xl border border-emerald-100 space-y-3">
                <h4 class="font-black text-emerald-800 text-lg flex items-center gap-2">
                    <span class="text-xl">📖</span> Bài mẫu tham khảo đã chỉnh sửa (M):
                </h4>
                <div class="bg-white p-5 rounded-2xl border border-emerald-200 text-base md:text-lg leading-relaxed text-gray-800 italic">
                    "Bộ phim hoạt hình 'Doraemon - Chú mèo máy đến từ tương lai' luôn là bộ phim em yêu thích nhất, và nhân vật để lại trong em ấn tượng sâu sắc chính là chú mèo máy Doraemon thông minh, nhân hậu. Doraemon gây ấn tượng bởi ngoại hình đáng yêu: thân hình tròn xoe, nước da màu xanh da trời nổi bật, cái đầu không tai và chiếc túi thần kỳ trước bụng. Qua các tình huống thú vị như khi Doraemon tận tình hướng dẫn Nobita sử dụng chong chóng tre hay cánh cửa thần kỳ để giúp đỡ bạn bè, em thấy rõ sự tốt bụng của chú. Bộ phim không chỉ mang lại tiếng cười mà còn gửi gắm bài học sâu sắc về tình bạn chân thành. Mỗi khi xem phim, em lại thấy vui sướng và yêu mến chú mèo máy này."
                </div>
                <div class="text-sm font-bold text-emerald-900">
                    <p class="font-black text-base">💡 Ưu điểm:</p>
                    <p>• Trình bày đúng bố cục 3 phần rõ ràng.</p>
                    <p>• Có miêu tả ngoại hình (tròn xoe, xanh da trời, không tai) gắn với hành động giúp đỡ bạn bè của Doraemon.</p>
                    <p>• Nêu bật ý nghĩa nhân văn (tình bạn chân thành) và thể hiện cảm xúc chân thực.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- ✏️ HỌC SINH TỰ GHI BÀI / VIẾT LẠI ĐOẠN VĂN -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">✍️</span>
            <h3 class="text-2xl md:text-3xl font-black text-sky-950">Viết lại câu hoặc đoạn văn trong bài làm của em cho hay hơn:</h3>
        </div>

        <div class="max-w-4xl mx-auto space-y-4">
            <p class="text-lg font-bold text-sky-950">✏️ Viết lại một đoạn văn hoàn chỉnh (khoảng 60 - 80 từ) giới thiệu nhân vật hoạt hình em yêu thích sau khi đã chỉnh sửa lỗi:</p>
            
            <div class="relative bg-amber-50/20 border-2 border-sky-300 rounded-[32px] p-6 shadow-inner">
                <!-- Nút Thu âm Speech to Text -->
                <div class="absolute right-4 top-4 z-10">
                    <button id="btn-vn118-record" onclick="toggleRecord118()" class="p-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center" title="Nói để nhập văn bản">
                        <span id="mic-icon-118" class="text-xl">🎤</span>
                    </button>
                </div>
                <textarea id="ans-vn118-chinhsua" rows="8" placeholder="Em nhập đoạn văn giới thiệu nhân vật hoạt hình đã chỉnh sửa của mình tại đây hoặc nhấn nút micro để nói..." class="w-full p-4 text-xl rounded-2xl border border-gray-200 outline-none focus:border-sky-500 font-bold bg-white text-gray-800 leading-relaxed pr-14"></textarea>
                <div id="status-vn118-record" class="text-sm font-bold text-rose-500 mt-2 hidden">Đang thu âm giọng nói của em...</div>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraChinhSua118();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn118-chinhsua" class="hidden p-5 rounded-2xl font-bold text-lg"></div>
        </div>
    </div>

    <!-- 📋 PHẦN 4: Tự đánh giá sau chỉnh sửa -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">✓</span>
            <h3 class="text-2xl md:text-3xl font-black text-sky-950">Tự kiểm tra lại sau khi viết:</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto select-none">
            <label class="flex items-center gap-3 p-4 rounded-2xl border-2 border-emerald-200 bg-emerald-50/20 cursor-pointer hover:bg-emerald-50/60 transition-all">
                <input type="checkbox" id="ck-vn118-s1" class="w-6 h-6 text-emerald-600 rounded shrink-0">
                <span class="font-bold text-emerald-950">Đã bổ sung đầy đủ tên phim và tên nhân vật ấn tượng</span>
            </label>
            <label class="flex items-center gap-3 p-4 rounded-2xl border-2 border-emerald-200 bg-emerald-50/20 cursor-pointer hover:bg-emerald-50/60 transition-all">
                <input type="checkbox" id="ck-vn118-s2" class="w-6 h-6 text-emerald-600 rounded shrink-0">
                <span class="font-bold text-emerald-950">Đã nêu rõ ngoại hình nổi bật gắn với hành động</span>
            </label>
            <label class="flex items-center gap-3 p-4 rounded-2xl border-2 border-emerald-200 bg-emerald-50/20 cursor-pointer hover:bg-emerald-50/60 transition-all">
                <input type="checkbox" id="ck-vn118-s3" class="w-6 h-6 text-emerald-600 rounded shrink-0">
                <span class="font-bold text-emerald-950">Đã lồng ghép ý nghĩa nhân văn và từ ngữ bộc lộ cảm xúc</span>
            </label>
            <label class="flex items-center gap-3 p-4 rounded-2xl border-2 border-emerald-200 bg-emerald-50/20 cursor-pointer hover:bg-emerald-50/60 transition-all">
                <input type="checkbox" id="ck-vn118-s4" class="w-6 h-6 text-emerald-600 rounded shrink-0">
                <span class="font-bold text-emerald-950">Không còn lỗi lặp từ, lỗi chính tả hay cách trình bày</span>
            </label>
        </div>

        <div class="flex justify-end items-center gap-4"><button onclick="kiemTraSauChinhSua118();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
        <div id="fb-vn118-sau" class="hidden p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto"></div>
    </div>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn118Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <span>HOÀN THÀNH BÀI HỌC ✓</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Khi viết đoạn văn giới thiệu nhân vật trong phim hoạt hình, phần mở đầu cần đảm bảo yêu cầu nào?",
            "options": [
                "Giới thiệu tên bộ phim và nhân vật gây ấn tượng",
                "Miêu tả chi tiết ngoại hình của nhân vật",
                "Kể lại toàn bộ diễn biến của bộ phim từ đầu đến cuối",
                "Nêu bài học sâu sắc rút ra sau khi xem phim"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong phần triển khai của đoạn văn, chi tiết miêu tả ngoại hình nhân vật nên đi kèm với điều gì?",
            "options": [
                "Hành động và hoạt động của nhân vật qua các tình huống cụ thể",
                "Tiểu sử và lai lịch chi tiết của đạo diễn làm phim",
                "Chi phí sản xuất và doanh thu của bộ phim đó",
                "Sở thích ăn uống và giờ giấc sinh hoạt của nhân vật chính"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tiêu chí nào sau đây đánh giá về mặt NỘI DUNG của đoạn văn giới thiệu nhân vật?",
            "options": [
                "Trình bày được đặc điểm nổi bật về ngoại hình và hành động của nhân vật",
                "Trình bày đoạn văn đúng quy cách, lùi đầu dòng và viết hoa",
                "Chữ viết sạch sẽ, rõ ràng, không mắc lỗi chính tả",
                "Sử dụng nhiều câu hỏi tu từ và câu cảm thán liên tiếp"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong phần kết thúc của đoạn văn giới thiệu nhân vật hoạt hình, người viết cần làm gì?",
            "options": [
                "Nêu ý nghĩa bộ phim và bày tỏ tình cảm, cảm xúc đối với bộ phim/nhân vật",
                "Liệt kê danh sách các nhân vật phụ xuất hiện trong phim",
                "So sánh bộ phim hoạt hình này với các bộ phim truyện khác",
                "Hẹn gặp lại người đọc ở một bài viết khác sau này"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi phát hiện đoạn văn mắc lỗi lặp từ ngữ quá nhiều, em cần khắc phục bằng cách nào?",
            "options": [
                "Sử dụng các từ đồng nghĩa hoặc đại từ thay thế phù hợp",
                "Xóa bỏ hoàn toàn các câu văn có từ lặp và không viết gì thêm",
                "Thêm thật nhiều tính từ miêu tả xung quanh từ bị lặp",
                "Đặt câu bị lặp từ đó vào trong dấu ngoặc kép"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi trích dẫn tên một bộ phim hoạt hình trong đoạn văn, cách viết nào dưới đây là đúng quy cách?",
            "options": [
                "Đặt tên phim trong dấu ngoặc kép (Ví dụ: 'Doraemon - Chú mèo máy đến từ tương lai')",
                "Viết hoa toàn bộ tất cả các chữ cái có trong tên phim",
                "Không cần viết hoa và không cần dùng dấu ngoặc kép",
                "Gạch chân toàn bộ tên phim khi viết trên máy tính"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ ngữ nào dưới đây bộc lộ cảm xúc trực tiếp của người viết về nhân vật hoạt hình?",
            "options": [
                "yêu mến, thích thú, cảm phục, ấn tượng",
                "màu xanh, tròn xoe, thông minh, nhanh nhẹn",
                "mèo máy, chong chóng tre, bánh rán, túi thần kỳ",
                "Nobita, Xuka, Chaien, Xeko"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Ý nào dưới đây chỉ ra điểm chưa đạt về mặt HÌNH THỨC của một đoạn văn học sinh?",
            "options": [
                "Viết liền mạch không lùi đầu dòng khi bắt đầu đoạn văn",
                "Miêu tả quá ngắn gọn về ngoại hình của chú mèo máy",
                "Chưa nêu được ý nghĩa sâu sắc của câu chuyện trong phim",
                "Không bộc lộ tình cảm của bản thân ở phần kết thúc"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ nào dưới đây viết SAI chính tả tên riêng của nhân vật hoạt hình theo chuẩn hiện hành?",
            "options": [
                "Doremon (Chuẩn hiện hành là Doraemon)",
                "Simba",
                "Mickey",
                "Elsa"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đoạn văn giới thiệu nhân vật hoạt hình cần đảm bảo bố cục mấy phần?",
            "options": [
                "3 phần (mở đầu, triển khai, kết thúc)",
                "2 phần (mở đầu, triển khai)",
                "4 phần (mở đầu, ngoại hình, hoạt động, kết thúc)",
                "Không phân chia phần rõ rệt, viết tự do"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tại sao việc đưa các tình huống cụ thể trong phim lại quan trọng khi viết đoạn văn giới thiệu nhân vật?",
            "options": [
                "Giúp làm nổi bật tính cách, đặc điểm hoạt động của nhân vật một cách chân thực",
                "Để kéo dài dung lượng bài viết cho đủ số lượng từ quy định",
                "Để người đọc không cần xem phim vẫn biết hết nội dung",
                "Để chứng minh người viết đã xem bộ phim đó rất nhiều lần"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Câu văn nào dưới đây diễn đạt sinh động và giàu cảm xúc hơn?",
            "options": [
                "Em vô cùng yêu mến và trân quý chú mèo máy Doraemon đáng yêu này.",
                "Em thấy nhân vật Doraemon này rất là bình thường.",
                "Doraemon là chú mèo máy có nhiều bảo bối hay.",
                "Hết phim rồi mà em vẫn còn nhớ đến Doraemon."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi chỉnh sửa bài viết theo nhận xét của thầy cô, điều nào dưới đây là NÊN làm?",
            "options": [
                "Đọc kỹ các góp ý, tìm câu văn chưa hay để viết lại sinh động hơn",
                "Chép lại toàn bộ bài mẫu của bạn bên cạnh vào vở bài làm",
                "Tự ý đổi sang viết về một nhân vật hoạt hình hoàn toàn khác",
                "Không cần sửa gì cả vì bài viết đã nộp từ trước"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Chi tiết ngoại hình 'thân hình tròn xoe như quả bóng, nước da màu xanh da trời nổi bật' thuộc về nhân vật nào?",
            "options": [
                "Doraemon",
                "Chú chuột Mickey",
                "Vua sư tử Simba",
                "Nàng công chúa tuyết Elsa"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Để đoạn văn giới thiệu nhân vật hoạt hình đạt kết quả tốt nhất, học sinh cần làm gì trước khi nộp?",
            "options": [
                "Tự đối chiếu bài viết của mình với các tiêu chí đánh giá quy định trong SGK",
                "Nhờ bạn viết hộ phần kết thúc để bài văn dài hơn",
                "Tìm kiếm một bài viết trên mạng rồi sao chép y nguyên",
                "Nộp ngay lập tức mà không cần kiểm tra lại chính tả"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// ==========================================
// ===== PHẦN HÀM XỬ LÝ TƯƠNG TÁC JS =======
// ==========================================

// 1. Kiểm tra check-list tự đánh giá ban đầu
window.kiemTraTieuChi118 = function() {
    const n1 = document.getElementById('ck-vn118-n1')?.checked;
    const n2 = document.getElementById('ck-vn118-n2')?.checked;
    const n3 = document.getElementById('ck-vn118-n3')?.checked;
    const n4 = document.getElementById('ck-vn118-n4')?.checked;
    const n5 = document.getElementById('ck-vn118-n5')?.checked;

    const h1 = document.getElementById('ck-vn118-h1')?.checked;
    const h2 = document.getElementById('ck-vn118-h2')?.checked;
    const h3 = document.getElementById('ck-vn118-h3')?.checked;
    const h4 = document.getElementById('ck-vn118-h4')?.checked;

    const fb = document.getElementById('fb-vn118-tc');
    if (!fb) return;
    fb.classList.remove('hidden');

    const totalPassed = [n1, n2, n3, n4, n5, h1, h2, h3, h4].filter(Boolean).length;

    if (totalPassed === 9) {
        fb.innerHTML = '🎉 Tuyệt vời! Đoạn văn của em đạt tất cả các tiêu chí chất lượng theo SGK. Hãy tiếp tục viết lại để nâng cao kỹ năng diễn đạt nhé!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-emerald-100 text-emerald-950 shadow-sm';
    } else if (totalPassed >= 5) {
        const missing = [];
        if (!n1) missing.push('Bố cục 3 phần');
        if (!n2) missing.push('Tên phim & nhân vật');
        if (!n4) missing.push('Đặc điểm ngoại hình & hành động');
        if (!n5) missing.push('Ý nghĩa & cảm xúc');
        if (!h4) missing.push('Lỗi chính tả/trình bày');
        fb.innerHTML = `👍 Đoạn văn đạt ${totalPassed}/9 tiêu chí. Em hãy tập trung cải thiện thêm các phần: <strong>${missing.join(', ')}</strong> ở bước chỉnh sửa viết lại nhé!`;
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-sky-100 text-sky-950 shadow-sm';
    } else {
        fb.innerHTML = `⚠️ Đoạn văn mới đạt ${totalPassed}/9 tiêu chí. Đừng lo lắng, hãy đọc kỹ bài mẫu chuẩn và sửa lại đoạn văn thật nắn nót ở phần dưới nhé!`;
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-amber-100 text-amber-950 shadow-sm';
    }
};

// 2. Chức năng Speech to Text (Giả lập thu âm nếu trình duyệt không hỗ trợ Web Speech API)
let boGhiAm118 = null;
window.toggleRecord118 = function() {
    const statusDiv = document.getElementById('status-vn118-record');
    const textarea = document.getElementById('ans-vn118-chinhsua');
    const micIcon = document.getElementById('mic-icon-118');

    if (!textarea || !statusDiv || !micIcon) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        // Trình duyệt không hỗ trợ Web Speech API -> giả lập văn bản nói
        if (statusDiv.classList.contains('hidden')) {
            statusDiv.classList.remove('hidden');
            statusDiv.innerText = '🎙️ Trình duyệt không hỗ trợ Micro trực tiếp. Giả lập nói: "Nhân vật em yêu thích là chú mèo máy Doraemon vô cùng tốt bụng và đáng yêu..."';
            micIcon.innerText = '🛑';
            setTimeout(() => {
                const textGiaLap = 'Nhân vật em yêu thích nhất trong phim hoạt hình chính là chú mèo máy Doraemon thông minh và nhân hậu. Doraemon có ngoại hình đáng yêu với thân hình tròn xoe màu xanh da trời, cái đầu trọc không tai và chiếc túi thần kỳ chứa đầy bảo bối trước bụng. Em rất thích tính cách tốt bụng luôn giúp đỡ bạn bè của chú.';
                textarea.value = textarea.value ? textarea.value + ' ' + textGiaLap : textGiaLap;
                statusDiv.classList.add('hidden');
                micIcon.innerText = '🎤';
            }, 3000);
        } else {
            statusDiv.classList.add('hidden');
            micIcon.innerText = '🎤';
        }
        return;
    }

    if (boGhiAm118) {
        boGhiAm118.stop();
        boGhiAm118 = null;
        statusDiv.classList.add('hidden');
        micIcon.innerText = '🎤';
        return;
    }

    try {
        boGhiAm118 = new SpeechRecognition();
        boGhiAm118.lang = 'vi-VN';
        boGhiAm118.interimResults = false;
        boGhiAm118.maxAlternatives = 1;

        boGhiAm118.onstart = function() {
            statusDiv.innerText = '🎙️ Hệ thống đang lắng nghe... Em hãy nói to, rõ ràng vào micro nhé!';
            statusDiv.classList.remove('hidden');
            micIcon.innerText = '🛑';
        };

        boGhiAm118.onresult = function(event) {
            const resultText = event.results[0][0].transcript;
            textarea.value = textarea.value ? textarea.value + ' ' + resultText : resultText;
        };

        boGhiAm118.onerror = function(event) {
            console.error('Lỗi nhận diện giọng nói:', event.error);
            statusDiv.innerText = '❌ Gặp lỗi thu âm: ' + event.error + '. Vui lòng thử lại!';
        };

        boGhiAm118.onend = function() {
            statusDiv.classList.add('hidden');
            micIcon.innerText = '🎤';
            boGhiAm118 = null;
        };

        boGhiAm118.start();
    } catch (e) {
        console.error(e);
        statusDiv.innerText = '❌ Không thể khởi động chức năng thu âm giọng nói.';
        statusDiv.classList.remove('hidden');
    }
};

// 3. AI Thầy E chấm bài viết lại của học sinh
window.kiemTraChinhSua118 = function() {
    const text = document.getElementById('ans-vn118-chinhsua')?.value.trim();
    const fb = document.getElementById('fb-vn118-chinhsua');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E nhắc nhở:</h5>
                    <p class="text-lg">Em chưa viết hoặc nói gì cả. Hãy viết lại đoạn văn giới thiệu nhân vật đã chỉnh sửa lỗi vào khung giấy ở trên nhé!</p>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-950 border border-amber-300';
        return;
    }

    const words = text.split(/\s+/).filter(w => w.length > 0);
    if (words.length < 50) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-rose-900">AI Thầy E góp ý:</h5>
                    <p class="text-lg">Đoạn văn của em còn hơi ngắn (chỉ có ${words.length} từ). Một đoạn văn giới thiệu nhân vật đầy đủ các ý cần đạt tối thiểu 50 từ. Em hãy viết thêm các chi tiết miêu tả ngoại hình và ý nghĩa bộ phim nhé!</p>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-rose-100 text-rose-950 border border-rose-300';
        return;
    }

    // Các từ khóa kiểm tra phim hoạt hình và nhân vật
    const hasFilmInfo = text.includes('phim') || text.includes('hoạt hình') || text.includes('Doraemon') || text.includes('Nobita') || text.includes('Simba') || text.includes('Mickey');
    if (!hasFilmInfo) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E góp ý:</h5>
                    <p class="text-lg">Hình như em chưa giới thiệu tên bộ phim hoạt hình hoặc tên nhân vật cụ thể. Hãy bổ sung chính xác để người đọc dễ theo dõi nhé!</p>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-950 border border-amber-300';
        return;
    }

    // Các từ khóa bộc lộ cảm xúc / ý nghĩa
    const emotionKeywords = ['yêu mến', 'yêu thích', 'ấn tượng', 'thú vị', 'vui sướng', 'sâu sắc', 'tình cảm', 'bài học', 'ý nghĩa', 'trân trọng', 'đáng yêu', 'tốt bụng', 'xúc động'];
    const hasEmotion = emotionKeywords.some(kw => text.toLowerCase().includes(kw));

    if (!hasEmotion) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E góp ý:</h5>
                    <p class="text-lg">Em hãy bổ sung thêm các từ ngữ thể hiện tình cảm của em đối với nhân vật (Ví dụ: <em>yêu mến, thích thú, đáng yêu, sâu sắc, ý nghĩa...</em>) để đoạn văn thêm phần truyền cảm!</p>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-950 border border-amber-300';
        return;
    }

    // Chấm điểm đạt chuẩn
    fb.innerHTML = `
        <div class="flex items-start gap-4 animate-fade-in">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-950">AI Thầy E chấm đạt yêu cầu:</h5>
                <p class="text-lg mb-2">Đoạn văn tự chỉnh sửa của em rất xuất sắc! Em đã biết sửa các lỗi về tên phim, tên nhân vật, miêu tả sinh động cả ngoại hình lẫn hành động nổi bật, kết hợp nêu ý nghĩa rất tự nhiên.</p>
                <span class="text-xl font-black bg-emerald-500 text-white px-3 py-1 rounded-lg shadow-sm">Thầy chấm đạt: 10/10 điểm</span>
            </div>
        </div>
    `;
    fb.className = 'p-5 rounded-2xl font-bold bg-emerald-100 text-emerald-950 border border-emerald-300 shadow-md';
};

// 4. Xác nhận tự đánh giá sau khi viết
window.kiemTraSauChinhSua118 = function() {
    const s1 = document.getElementById('ck-vn118-s1')?.checked;
    const s2 = document.getElementById('ck-vn118-s2')?.checked;
    const s3 = document.getElementById('ck-vn118-s3')?.checked;
    const s4 = document.getElementById('ck-vn118-s4')?.checked;

    const fb = document.getElementById('fb-vn118-sau');
    if (!fb) return;
    fb.classList.remove('hidden');

    const totalSelected = [s1, s2, s3, s4].filter(Boolean).length;

    if (totalSelected === 4) {
        fb.innerHTML = '🎉 Rất tốt! Em đã hoàn thành tự đánh giá đoạn văn viết lại với đầy đủ các tiêu chuẩn chỉnh sửa toàn diện.';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-emerald-100 text-emerald-950 shadow-sm';
    } else {
        fb.innerHTML = `⚠️ Em mới tích chọn ${totalSelected}/4 tiêu chí tự kiểm tra. Hãy rà soát lại đoạn văn viết lại của mình thật kỹ để đảm bảo đoạn văn hoàn thiện nhất nhé!`;
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-amber-100 text-amber-950 shadow-sm';
    }
};

// 5. Nộp bài hoàn thành bài học (global)
window.submitVn118Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 118',
            '✏️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎉</span><p class="text-xl md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài học Đánh giá, chỉnh sửa đoạn văn giới thiệu nhân vật hoạt hình!</p><p class="text-lg text-gray-700 mt-3">Kỹ năng tự kiểm tra, chỉnh sửa sẽ giúp em tiến bộ nhanh chóng trong phân môn Tập làm văn!</p></div>'
        );
    } else {
        alert('Chúc mừng em đã hoàn thành bài đánh giá, chỉnh sửa đoạn văn!');
    }
};
