export const lesson087 = {
    "topic": "Tiếng Việt 5",
    "week": "13",
    "period": "87",
    "title": "VIẾT: VIẾT ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ MỘT CÂU CHUYỆN",
    "desc": "Bài học hướng dẫn học sinh thực hành viết hoàn chỉnh đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện đã đọc hoặc đã nghe theo dàn ý đã chuẩn bị, kết hợp tự đọc soát và chỉnh sửa lỗi.",
    "subject": "Viết",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-sky-950 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-900 font-bold text-2xl md:text-3xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-950 font-black">•</span>
                Viết được đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện đã đọc, đã nghe đúng bố cục 3 phần.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-950 font-black">•</span>
                Biết cách sử dụng các từ ngữ bộc lộ cảm xúc sinh động và liên kết câu mạch lạc.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-950 font-black">•</span>
                Rèn luyện kĩ năng tự đọc soát và chỉnh sửa lỗi chính tả, ngữ pháp, diễn đạt.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Nhận diện cấu trúc</h3>
        </div>
        <div class="bg-amber-50 bg-opacity-40 p-4 rounded-xl text-xl md:text-2xl font-bold text-amber-800">
            💬 Phần nào trong đoạn văn có nhiệm vụ nêu tên câu chuyện, tên tác giả và bộc lộ cảm xúc chung của người viết?
        </div>
        
        <div class="space-y-4 max-w-xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <label class="flex items-center gap-2 font-bold cursor-pointer text-lg p-3 bg-gray-50 rounded-xl border border-gray-100 select-none">
                    <input type="radio" name="kd-opt-write" value="mo" class="w-5 h-5 text-sky-800">
                    <span>Phần Mở đầu</span>
                </label>
                <label class="flex items-center gap-2 font-bold cursor-pointer text-lg p-3 bg-gray-50 rounded-xl border border-gray-100 select-none">
                    <input type="radio" name="kd-opt-write" value="than" class="w-5 h-5 text-sky-800">
                    <span>Phần Triển khai</span>
                </label>
                <label class="flex items-center gap-2 font-bold cursor-pointer text-lg p-3 bg-gray-50 rounded-xl border border-gray-100 select-none">
                    <input type="radio" name="kd-opt-write" value="ket" class="w-5 h-5 text-sky-800">
                    <span>Phần Kết thúc</span>
                </label>
            </div>
            <div class="flex justify-center">
                <button onclick="kiemTraKhoiDong87()" class="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-xl transition-all text-lg shadow-md active:scale-95">GỬI SUY NGHĨ ✓</button>
            </div>
            <div id="fb-vn87-kd" class="hidden p-4 rounded-xl text-lg font-bold text-center mt-2"></div>
        </div>
    </div>

    <!-- 📝 PHẦN 1: CHUẨN BỊ (DÀN Ý NHANH) -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">📝</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">1. Chuẩn bị ý tưởng (Dàn ý nhanh)</h3>
        </div>
        <p class="text-gray-750 font-bold text-lg">Em hãy điền nhanh các ý chính đã chuẩn bị ở Bài 22 để làm điểm tựa trước khi viết:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="space-y-2">
                <label class="block text-sm font-black text-sky-850">📖 Tên câu chuyện:</label>
                <input type="text" id="p87-outline-story" placeholder="Ví dụ: Dế Mèn phiêu lưu kí..." class="w-full p-3 border-2 border-sky-100 rounded-xl font-bold bg-white text-base">
            </div>
            <div class="space-y-2">
                <label class="block text-sm font-black text-sky-850">🌟 Nhân vật / Chi tiết yêu thích nhất:</label>
                <input type="text" id="p87-outline-character" placeholder="Ví dụ: Dế Mèn dũng cảm cứu Nhà Trò..." class="w-full p-3 border-2 border-sky-100 rounded-xl font-bold bg-white text-base">
            </div>
            <div class="space-y-2">
                <label class="block text-sm font-black text-sky-850">❤️ Từ ngữ bộc lộ cảm xúc chính:</label>
                <input type="text" id="p87-outline-emotion" placeholder="Ví dụ: ngưỡng mộ, khâm phục, xúc động..." class="w-full p-3 border-2 border-sky-100 rounded-xl font-bold bg-white text-base">
            </div>
        </div>
    </div>

    <!-- 🖋️ PHẦN 2: THỰC HÀNH VIẾT ĐOẠN VĂN -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <div class="border-b border-sky-100 pb-4">
                <h3 class="text-2xl md:text-3xl font-black text-sky-900 flex items-center gap-2">
                    <span>🖋️</span> 2. Viết đoạn văn hoàn chỉnh
                </h3>
                <p class="text-base font-bold text-gray-700 mt-1">Dựa vào dàn ý trên, em hãy viết một đoạn văn hoàn chỉnh bộc lộ tình cảm, cảm xúc của mình:</p>
            </div>

            <!-- Giấy kẻ ngang giả lập -->
            <div class="bg-amber-50/15 p-6 md:p-8 rounded-[32px] border-2 border-amber-100 shadow-inner max-w-4xl mx-auto space-y-4">
                <textarea id="ans-vn87-writing" rows="8" placeholder="Em hãy bắt đầu viết đoạn văn tại đây (Lùi đầu dòng từ chữ đầu tiên, viết liên tục không tự ý xuống dòng)..." class="w-full p-4 text-xl rounded-2xl border border-amber-200 outline-none focus:border-sky-500 font-bold bg-white text-gray-800 leading-relaxed shadow-sm"></textarea>
                
                <div class="flex justify-center">
                    <button onclick="checkVn87Writing()" class="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-lg rounded-2xl shadow-md active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                        <span>CHẤM BÀI VỚI THẦY E</span>
                    </button>
                </div>
                <div id="fb-vn87-writing" class="hidden p-5 rounded-2xl font-bold text-lg"></div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 BÀI TẬP 3: ĐỌC SOÁT VÀ CHỈNH SỬA (Giao diện dây treo móc áo nghệ thuật) -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl space-y-8">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">3</span>
            <h3 class="text-2xl md:text-3xl font-black text-sky-850">
                Đọc soát và chỉnh sửa đoạn văn của em
            </h3>
        </div>

        <p class="text-lg md:text-xl text-gray-700 font-bold">👉 Hướng dẫn: Đọc lại đoạn văn em vừa viết ở trên và tích chọn vào các tiêu chuẩn dưới đây để tự đánh giá mức độ hoàn thiện của bài làm:</p>

        <!-- Dây treo móc áo nghệ thuật -->
        <div class="relative pt-6 pb-2">
            <!-- Dây treo -->
            <div class="absolute top-10 left-0 right-0 h-1 bg-gray-300 rounded-full shadow-sm z-0"></div>
            
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                <!-- Thẻ 1 -->
                <div class="bg-sky-50 p-5 rounded-3xl border border-sky-200 shadow-md flex flex-col justify-between items-center text-center relative pt-8">
                    <!-- Kẹp áo -->
                    <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-amber-500 rounded border border-amber-600 flex items-center justify-center shadow-sm">
                        <div class="w-1 h-4 bg-gray-700 rounded-full"></div>
                    </div>
                    <p class="font-black text-sky-950 text-lg mb-4">Sắp xếp ý</p>
                    <p class="text-sm font-semibold text-gray-700 mb-4">Đoạn văn được sắp xếp các ý một cách logic và hợp lý.</p>
                    <label class="flex items-center gap-2 cursor-pointer font-bold text-sky-900 bg-white px-3 py-1.5 rounded-xl border border-sky-200 shadow-sm select-none">
                        <input type="checkbox" id="p87-chk-1" class="w-5 h-5 text-sky-600">
                        <span>Đã đạt</span>
                    </label>
                </div>

                <!-- Thẻ 2 -->
                <div class="bg-emerald-50 p-5 rounded-3xl border border-emerald-200 shadow-md flex flex-col justify-between items-center text-center relative pt-8">
                    <!-- Kẹp áo -->
                    <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-amber-500 rounded border border-amber-600 flex items-center justify-center shadow-sm">
                        <div class="w-1 h-4 bg-gray-700 rounded-full"></div>
                    </div>
                    <p class="font-black text-emerald-950 text-lg mb-4">Tóm tắt chuyện</p>
                    <p class="text-sm font-semibold text-gray-700 mb-4">Có phần tóm tắt ngắn gọn diễn biến/chi tiết chính của câu chuyện.</p>
                    <label class="flex items-center gap-2 cursor-pointer font-bold text-emerald-900 bg-white px-3 py-1.5 rounded-xl border border-emerald-200 shadow-sm select-none">
                        <input type="checkbox" id="p87-chk-2" class="w-5 h-5 text-emerald-600">
                        <span>Đã đạt</span>
                    </label>
                </div>

                <!-- Thẻ 3 -->
                <div class="bg-amber-50 p-5 rounded-3xl border border-amber-200 shadow-md flex flex-col justify-between items-center text-center relative pt-8">
                    <!-- Kẹp áo -->
                    <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-amber-500 rounded border border-amber-600 flex items-center justify-center shadow-sm">
                        <div class="w-1 h-4 bg-gray-700 rounded-full"></div>
                    </div>
                    <p class="font-black text-amber-950 text-lg mb-4">Điều em yêu thích</p>
                    <p class="text-sm font-semibold text-gray-700 mb-4">Chỉ rõ những nhân vật, hành động hoặc ý nghĩa em tâm đắc.</p>
                    <label class="flex items-center gap-2 cursor-pointer font-bold text-amber-900 bg-white px-3 py-1.5 rounded-xl border border-amber-200 shadow-sm select-none">
                        <input type="checkbox" id="p87-chk-3" class="w-5 h-5 text-amber-600">
                        <span>Đã đạt</span>
                    </label>
                </div>

                <!-- Thẻ 4 -->
                <div class="bg-teal-50 p-5 rounded-3xl border border-teal-200 shadow-md flex flex-col justify-between items-center text-center relative pt-8">
                    <!-- Kẹp áo -->
                    <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-amber-500 rounded border border-amber-600 flex items-center justify-center shadow-sm">
                        <div class="w-1 h-4 bg-gray-700 rounded-full"></div>
                    </div>
                    <p class="font-black text-teal-950 text-lg mb-4">Sử dụng từ ngữ</p>
                    <p class="text-sm font-semibold text-gray-700 mb-4">Có các từ ngữ, câu văn biểu lộ cảm xúc sinh động, hấp dẫn.</p>
                    <label class="flex items-center gap-2 cursor-pointer font-bold text-teal-900 bg-white px-3 py-1.5 rounded-xl border border-teal-200 shadow-sm select-none">
                        <input type="checkbox" id="p87-chk-4" class="w-5 h-5 text-teal-600">
                        <span>Đã đạt</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="flex justify-center pt-2">
            <button onclick="checkVn87Checklist()" class="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-black text-lg rounded-xl shadow-md transition-all active:scale-95">HOÀN TẤT ĐỌC SOÁT ✓</button>
        </div>
        <div id="fb-vn87-checklist" class="hidden p-4 rounded-xl text-lg font-bold text-center mt-2 max-w-4xl mx-auto"></div>
    </section>

    <!-- 🏠 PHẦN 4: TRAO ĐỔI TẠI GIA ĐÌNH -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">🏠</span>
            <h3 class="text-2xl md:text-3xl font-black text-sky-850">
                Vận dụng & Trao đổi với gia đình
            </h3>
        </div>

        <div class="bg-amber-50 bg-opacity-35 p-6 rounded-3xl border border-amber-100 space-y-4">
            <p class="font-bold text-gray-800 text-lg md:text-xl">💬 Đề tài: Tìm đọc truyện "Dế Mèn phiêu lưu kí" của nhà văn Tô Hoài. Chia sẻ với người thân suy nghĩ của em về nhân vật Dế Mèn.</p>
            
            <div class="space-y-2">
                <label class="block text-sm font-black text-gray-700">✍️ Ghi lại ý kiến hoặc chia sẻ của em sau khi nói chuyện với người thân:</label>
                <textarea id="p87-home-share" rows="3" placeholder="Ví dụ: Em và bố mẹ đã cùng thảo luận về sự trưởng thành của Dế Mèn, từ một chú dế kiêu căng trở thành người bạn tốt dũng cảm bênh vực kẻ yếu..." class="w-full p-3 border border-sky-100 rounded-xl font-bold bg-white text-base"></textarea>
            </div>
            
            <div class="flex justify-center">
                <button onclick="submitVn87Home()" class="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-black rounded-xl text-base shadow transition-all active:scale-95">NỘP CHIA SẺ GIA ĐÌNH ✓</button>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI TOÀN DIỆN -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn87Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Bố cục của một đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện gồm mấy phần chính?",
            "options": [
                "3 phần: Mở đầu, Triển khai, Kết thúc",
                "2 phần: Giới thiệu và Nhận xét",
                "4 phần: Mở bài, Thân bài, Cảm xúc, Kết luận",
                "Đoạn văn viết liền mạch không cần phân chia phần"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong phần Mở đầu của đoạn văn, người viết bắt buộc phải nêu được thông tin gì?",
            "options": [
                "Tên câu chuyện, tác giả (nếu có) và nêu cảm xúc chung của mình",
                "Tóm tắt toàn bộ cốt truyện từ đầu đến cuối",
                "Những bài học sâu sắc rút ra cho bản thân",
                "Mô tả ngoại hình của tất cả các nhân vật trong truyện"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Nội dung trọng tâm của phần Triển khai là gì?",
            "options": [
                "Bộc lộ cụ thể tình cảm, cảm xúc về nhân vật hoặc chi tiết tâm đắc",
                "Giới thiệu tiểu sử xuất thân của nhà văn viết câu chuyện",
                "Kể lại hoàn cảnh em tìm mua được cuốn sách đó",
                "So sánh câu chuyện đó với các bộ phim điện ảnh hiện đại"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Phần Kết thúc của đoạn văn có vai trò gì?",
            "options": [
                "Khẳng định lại tình cảm, cảm xúc hoặc nêu ý nghĩa, bài học rút ra",
                "Kể tiếp một câu chuyện mới mà em sắp đọc",
                "Đặt câu hỏi thảo luận cho các bạn cùng lớp",
                "Liệt kê danh mục các tài liệu tham khảo khác"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ ngữ nào dưới đây biểu thị trực tiếp tình cảm, cảm xúc của người đọc?",
            "options": [
                "cảm động, khâm phục, tự hào, yêu mến",
                "chạy nhảy, vui đùa, ăn uống, đi học",
                "màu xanh, cao lớn, thông minh, xinh đẹp",
                "tác giả, câu chuyện, nhân vật, chi tiết"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Ngôi kể nào phù hợp nhất khi viết đoạn văn thể hiện tình cảm, cảm xúc cá nhân?",
            "options": [
                "Ngôi thứ nhất (xưng em hoặc tôi)",
                "Ngôi thứ ba (gọi tên nhân vật)",
                "Ngôi thứ hai (gọi người đọc là bạn)",
                "Không sử dụng bất cứ ngôi kể nào"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi viết đoạn văn cảm xúc, vì sao chúng ta KHÔNG nên kể lại toàn bộ câu chuyện?",
            "options": [
                "Vì mục tiêu của đoạn văn là bộc lộ tình cảm, cảm xúc chứ không phải là kể chuyện (tự sự)",
                "Vì kể lại toàn bộ truyện sẽ làm đoạn văn quá ngắn",
                "Vì sách giáo khoa cấm kể chuyện",
                "Vì người đọc chắc chắn đã biết hết câu chuyện đó rồi"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tiêu chuẩn 'Cách tóm tắt câu chuyện' trong checklist đọc soát yêu cầu em kiểm tra điều gì?",
            "options": [
                "Kiểm tra xem phần tóm tắt có ngắn gọn và tập trung vào chi tiết khơi gợi cảm xúc không",
                "Kiểm tra xem đã viết đủ số câu theo yêu cầu chưa",
                "Kiểm tra xem đã nêu đầy đủ năm xuất bản của câu chuyện chưa",
                "Kiểm tra xem các nhân vật phụ có xuất hiện đầy đủ không"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Dế Mèn phiêu lưu kí là tác phẩm nổi tiếng của nhà văn nào?",
            "options": [
                "Nhà văn Tô Hoài",
                "Nhà văn Nam Cao",
                "Nhà văn Võ Quảng",
                "Nhà văn Trần Đăng Khoa"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Câu nào dưới đây bộc lộ cảm xúc mến phục nhân vật Dế Mèn?",
            "options": [
                "Em rất khâm phục lòng dũng cảm, trượng nghĩa và mong muốn bảo vệ kẻ yếu của Dế Mèn.",
                "Dế Mèn là một chú dế có cơ thể cường tráng và đôi càng mẫm bóng.",
                "Nhà văn Tô Hoài viết truyện Dế Mèn phiêu lưu kí từ rất lâu rồi.",
                "Dế Mèn đã đi phiêu lưu qua nhiều vùng đất khác nhau trên thế giới."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Hình thức trình bày chuẩn của một đoạn văn là gì?",
            "options": [
                "Viết lùi đầu dòng chữ đầu tiên, viết liên tục và không xuống dòng cho đến câu cuối cùng",
                "Mỗi câu văn xuống dòng và gạch đầu dòng một lần",
                "Viết liền không cần lùi đầu dòng ở đầu đoạn",
                "Xuống dòng tùy ý bất cứ khi nào viết xong một ý phụ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ ngữ cảm xúc nào phù hợp để nói về hành động Dế Mèn cứu chị Nhà Trò?",
            "options": [
                "cảm phục, xúc động, trân trọng",
                "lo lắng, sợ hãi, hoang mang",
                "giận dữ, bất bình, chê trách",
                "thờ ơ, lạnh nhạt, bình thường"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Mục đích chính của việc chia sẻ suy nghĩ về câu chuyện với người thân là gì?",
            "options": [
                "Rèn luyện kỹ năng nói, lắng nghe ý kiến và gắn kết tình cảm gia đình",
                "Nhờ người thân viết hộ toàn bộ đoạn văn",
                "Yêu cầu người thân mua thêm nhiều truyện mới",
                "Để người thân kiểm tra xem em có đọc sách thật không"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi đọc soát tiêu chí 'Cách sắp xếp các ý trong đoạn văn', em cần kiểm tra điều gì?",
            "options": [
                "Tính logic, mạch lạc và sự liên kết giữa các câu văn trong đoạn",
                "Màu mực viết đoạn văn có đẹp mắt không",
                "Số lượng dấu câu sử dụng trong đoạn văn có nhiều không",
                "Các danh từ riêng có được viết hoa đầy đủ hay không"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Yếu tố nào giúp đoạn văn thể hiện tình cảm, cảm xúc trở nên chân thực, thuyết phục hơn?",
            "options": [
                "Nêu rõ lí do vì sao em có tình cảm, cảm xúc đó gắn liền với chi tiết cụ thể trong truyện",
                "Sử dụng thật nhiều từ ngữ sáo rỗng để kéo dài đoạn văn",
                "Kể thật chi tiết tiểu sử cá nhân của người viết",
                "Chép lại nguyên văn phần tóm tắt của nhà xuất bản ở bìa sau sách"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// Khởi động trắc nghiệm
window.kiemTraKhoiDong87 = function() {
    const select = document.querySelector('input[name="kd-opt-write"]:checked')?.value;
    const fb = document.getElementById('fb-vn87-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!select) {
        fb.innerHTML = "⚠️ Em hãy chọn một phương án trả lời nhé!";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-amber-100 text-amber-900";
        return;
    }

    if (select === "mo") {
        fb.innerHTML = "🎉 Chính xác! Phần Mở đầu của đoạn văn có nhiệm vụ giới thiệu câu chuyện, tác giả và bộc lộ cảm xúc bao quát/chung nhất của em.";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-emerald-100 text-emerald-900";
    } else {
        fb.innerHTML = "❌ Chưa chính xác rồi. Em hãy đọc kĩ lại nhiệm vụ của từng phần nhé!";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-rose-100 text-rose-900";
    }
};

// Chấm đoạn văn tự luận bằng AI Thầy E
window.checkVn87Writing = function() {
    const story = document.getElementById('p87-outline-story').value.trim();
    const character = document.getElementById('p87-outline-character').value.trim();
    const outlineEmotion = document.getElementById('p87-outline-emotion').value.trim();
    const text = document.getElementById('ans-vn87-writing').value.trim();
    const fb = document.getElementById('fb-vn87-writing');

    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E nhắc nhở:</h5>
                    <p class="text-lg">Em hãy gõ đoạn văn hoàn chỉnh của mình vào ô trống trước khi gửi Thầy E chấm nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300";
        return;
    }

    // Đánh giá độ dài
    const words = text.split(/\s+/).filter(w => w.length > 0).length;
    if (words < 50) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-rose-900">AI Thầy E nhận xét:</h5>
                    <p class="text-lg">Đoạn văn của em còn hơi ngắn (chỉ có ${words} từ). Để thể hiện trọn vẹn tình cảm và tóm tắt được chi tiết truyện tâm đắc, em nên viết dài hơn một chút (tối thiểu khoảng 60 từ) nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold bg-rose-100 text-rose-900 border border-rose-300";
        return;
    }

    // Kiểm tra từ ngữ cảm xúc
    const emotionKeywords = ["yêu", "thích", "cảm động", "khâm phục", "tự hào", "mến", "ngưỡng mộ", "xúc động", "thương", "ghét", "tiếc", "cảm phục", "nhân ái", "đáng yêu"];
    const hasEmotion = emotionKeywords.some(keyword => text.toLowerCase().includes(keyword));

    if (!hasEmotion) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E nhắc nhở:</h5>
                    <p class="text-lg">Đoạn văn viết rất trôi chảy, nhưng Thầy E thấy thiếu các từ ngữ bộc lộ trực tiếp tình cảm, cảm xúc của em (ví dụ: khâm phục, xúc động, yêu quý...). Em hãy bổ sung thêm để đoạn văn biểu cảm hơn nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300";
        return;
    }

    // Đạt tiêu chuẩn
    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-900">AI Thầy E nhận xét & Chấm điểm:</h5>
                <p class="text-lg mb-2">Tuyệt vời! Đoạn văn đạt chuẩn xuất sắc. Em đã giới thiệu được câu chuyện tâm đắc, tóm tắt chi tiết chính sinh động và bộc lộ cảm xúc chân thành, có sử dụng từ ngữ biểu cảm mạnh mẽ. Bố cục đoạn văn rõ ràng, liên kết tốt.</p>
                <div class="flex items-center gap-3">
                    <span class="text-2xl font-black bg-emerald-500 text-white px-3 py-1 rounded-lg">Đạt 100%</span>
                    <span class="text-sm text-emerald-850 font-bold">(Đã lưu bài làm vào học bạ học sinh)</span>
                </div>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold bg-emerald-100 text-emerald-900 border border-emerald-300";
};

// Kiểm tra Checklist đọc soát
window.checkVn87Checklist = function() {
    const c1 = document.getElementById('p87-chk-1')?.checked;
    const c2 = document.getElementById('p87-chk-2')?.checked;
    const c3 = document.getElementById('p87-chk-3')?.checked;
    const c4 = document.getElementById('p87-chk-4')?.checked;

    const fb = document.getElementById('fb-vn87-checklist');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (c1 && c2 && c3 && c4) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã tự soát bài rất kĩ và đạt đủ 4 tiêu chuẩn vàng của đoạn văn cảm xúc. Hãy phát huy nhé!";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 max-w-4xl mx-auto bg-emerald-100 text-emerald-900";
    } else {
        fb.innerHTML = "⚠️ Còn một số tiêu chí chưa được tích chọn. Em hãy rà soát thật kĩ lại đoạn văn của mình để hoàn thiện tất cả các mặt nhé!";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 max-w-4xl mx-auto bg-amber-100 text-amber-900";
    }
};

// Nộp chia sẻ gia đình
window.submitVn87Home = function() {
    const text = document.getElementById('p87-home-share').value.trim();
    if (!text) {
        alert("Em hãy ghi lại nội dung chia sẻ với người thân trước khi nộp nhé!");
        return;
    }
    alert("Nộp bài liên hệ gia đình thành công! Cảm ơn em đã chia sẻ.");
};

// Nộp bài hoàn thành tiết học
window.submitVn87Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 87',
            '🎉',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">✍️</span><p class="text-2xl font-bold text-sky-850">Chúc mừng em đã hoàn thành xuất sắc bài viết cảm xúc về câu chuyện!</p><p class="text-lg text-gray-700 mt-3">Một bài viết hay không chỉ bộc lộ cảm xúc chân thành mà còn cần sự chỉnh chu trong từng câu chữ sau khi đọc soát.</p></div>'
        );
    } else {
        alert("Chúc mừng em đã hoàn thành Tiết 87!");
    }
};
