export const lesson123 = {
    "topic": "Tiếng Việt 5",
    "week": "18",
    "period": "123-124",
    "title": "ÔN TẬP VÀ ĐÁNH GIÁ CUỐI HKI (TIẾT 4+5)",
    "desc": "Tiết 4 và Tiết 5 giúp học sinh ôn tập biện pháp điệp từ, điệp ngữ; đặt câu với cặp kết từ; đồng thời rèn luyện kỹ năng trao đổi về sách gương học tập và viết đoạn văn giới thiệu nhân vật tài năng.",
    "subject": "Tiếng Việt",
    "theme": "Bảo vệ ngôi nhà chung",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-sky-900">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-sky-950 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-900 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-600 font-black">•</span>
                Biết cách nhận diện và nêu tác dụng tu từ của điệp từ, điệp ngữ trong văn bản nghệ thuật.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-600 font-black">•</span>
                Rèn luyện kỹ năng viết đoạn văn tả cảnh có điệp ngữ và đặt câu ghép với các cặp kết từ logic.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-600 font-black">•</span>
                Biết cách chuẩn bị ý kiến, trao đổi tự tin về một cuốn sách gương học tập và viết đoạn văn giới thiệu nhân vật tài năng rõ ràng, mạch lạc.
            </li>
        </ul>
    </div>

    <!-- 📋 PHẦN A - TIẾT 4: ÔN TẬP BIỆN PHÁP TU TỪ -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">3</span>
            <h3 class="text-2xl md:text-5xl font-black text-sky-950">Tìm các điệp từ, điệp ngữ được sử dụng trong đoạn trích dưới đây và nêu tác dụng:</h3>
        </div>

        <!-- Đoạn văn của Xuân Diệu -->
        <div class="max-w-4xl mx-auto p-5 md:p-6 bg-sky-50/20 border border-sky-100 rounded-3xl text-lg text-gray-800 leading-relaxed font-serif italic">
            "Phượng không phải là một đoá, không phải vài cành; phượng đây là cả một loạt, cả một vùng, cả một góc trời đỏ rực. Mỗi hoa chỉ là một phần tử của xã hội thắm tươi; người ta quên đoá hoa, chỉ nghĩ đến cây, đến hàng, đến những tán hoa lớn xoè ra như muôn ngàn con bướm thắm đậu khít nhau."
            <div class="text-right text-base font-bold text-gray-500 mt-2 font-sans">(Xuân Diệu)</div>
        </div>

        <div class="max-w-4xl mx-auto space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                    <label class="text-base font-bold text-sky-900">✏️ Các điệp từ, điệp ngữ được sử dụng:</label>
                    <input id="ans-vn123-diepngu" type="text" placeholder="Ví dụ: không phải, cả một, đến..." class="w-full p-3 rounded-xl border border-gray-200 focus:border-sky-500 font-bold bg-white text-gray-800 outline-none text-lg">
                </div>
                <div class="space-y-2">
                    <label class="text-base font-bold text-sky-900">✏️ Tác dụng của việc sử dụng các điệp từ, điệp ngữ này:</label>
                    <input id="ans-vn123-tacdung" type="text" placeholder="Ví dụ: Nhấn mạnh vẻ đẹp rực rỡ, số lượng nhiều vô kể của hoa phượng..." class="w-full p-3 rounded-xl border border-gray-200 focus:border-sky-500 font-bold bg-white text-gray-800 outline-none text-lg">
                </div>
            </div>

            <div class="flex justify-center">
                <button onclick="kiemTraDiepTu123()" class="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-xl transition-all text-lg shadow-md active:scale-95">KIỂM TRA ĐÁP ÁN ✓</button>
            </div>
            <div id="fb-vn123-dieptu" class="hidden p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto"></div>
        </div>
    </div>

    <!-- 📋 PHẦN B - TIẾT 5: TRAO ĐỔI VỀ SÁCH GƯƠNG HỌC TẬP -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">1</span>
            <h3 class="text-2xl md:text-5xl font-black text-sky-950">Trao đổi với bạn về nội dung của cuốn sách viết về một tấm gương học tập:</h3>
        </div>

        <p class="text-lg font-bold text-sky-900 max-w-3xl">💡 Điền nhanh thông tin gợi ý về cuốn sách gương học tập em đã đọc để chuẩn bị phát biểu thảo luận với bạn:</p>

        <!-- Phiếu chuẩn bị trao đổi sách -->
        <div class="max-w-4xl mx-auto p-6 bg-gradient-to-br from-emerald-50/20 to-sky-50/30 rounded-[32px] border border-sky-100 shadow-inner grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-2">
                <label class="text-sm font-bold text-sky-800">📖 Tên cuốn sách:</label>
                <input id="book-vn123-tên" type="text" placeholder="Ví dụ: 100 Gương hiếu học của danh nhân..." class="w-full p-2.5 rounded-xl border border-gray-200 focus:border-sky-500 font-bold bg-white text-gray-800 outline-none text-base">
            </div>
            <div class="space-y-2">
                <label class="text-sm font-bold text-sky-800">👤 Cuốn sách viết về ai? (Nhân vật nào?):</label>
                <input id="book-vn123-ai" type="text" placeholder="Ví dụ: Trạng nguyên Nguyễn Hiền, Cao Bá Quát..." class="w-full p-2.5 rounded-xl border border-gray-200 focus:border-sky-500 font-bold bg-white text-gray-800 outline-none text-base">
            </div>
            <div class="space-y-2 md:col-span-2">
                <label class="text-sm font-bold text-sky-800">📝 Nội dung cuốn sách (Viết điều gì về người đó?):</label>
                <textarea id="book-vn123-noidung" rows="2" placeholder="Ví dụ: Kể về nỗ lực vượt qua khó khăn để tự học, tự luyện chữ viết..." class="w-full p-2.5 rounded-xl border border-gray-200 focus:border-sky-500 font-bold bg-white text-gray-800 outline-none text-base leading-relaxed"></textarea>
            </div>
            <div class="space-y-2 md:col-span-2">
                <label class="text-sm font-bold text-sky-800">💖 Cảm nghĩ và điều em học hỏi được từ nhân vật:</label>
                <textarea id="book-vn123-camnghi" rows="2" placeholder="Ví dụ: Vô cùng kính trọng ý chí vươn lên và tự hứa sẽ chăm chỉ tự học mỗi ngày..." class="w-full p-2.5 rounded-xl border border-gray-200 focus:border-sky-500 font-bold bg-white text-gray-800 outline-none text-base leading-relaxed"></textarea>
            </div>
            <div class="md:col-span-2 flex justify-center pt-2">
                <button onclick="kiemTraPhieuSach123()" class="px-8 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-black text-sm rounded-xl active:scale-95 transition-all">LƯU PHIẾU BÀI ĐỌC ✓</button>
            </div>
            <div id="fb-vn123-phieusach" class="hidden md:col-span-2 p-4 rounded-xl text-base font-bold text-center max-w-xl mx-auto"></div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-sky-900">
    <!-- 📋 TIẾT 4: Viết đoạn văn ngắn tả cảnh & đặt câu ghép -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">4</span>
            <h3 class="text-2xl md:text-5xl font-black text-sky-950">Viết đoạn văn ngắn (4 - 5 câu) tả cảnh, có sử dụng điệp từ, điệp ngữ:</h3>
        </div>

        <div class="max-w-4xl mx-auto space-y-4">
            <div class="relative bg-amber-50/20 border-2 border-sky-300 rounded-[32px] p-6 shadow-inner">
                <textarea id="ans-vn123-doanvan" rows="5" placeholder="Em hãy tả một cảnh vật tự nhiên (cánh đồng, bãi biển, dòng sông...) có lặp từ tu từ để tạo nhịp điệu sinh động..." class="w-full p-3 text-lg rounded-2xl border border-gray-200 focus:border-sky-500 font-bold bg-white text-gray-800 outline-none leading-relaxed"></textarea>
            </div>
            <div class="flex justify-center">
                <button onclick="kiemTraDoanVan123()" class="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-black text-lg rounded-xl shadow-md active:scale-95 transition-all">
                    👨‍🏫 THẦY E ĐÁNH GIÁ ĐOẠN VĂN
                </button>
            </div>
            <div id="fb-vn123-doanvan" class="hidden p-5 rounded-2xl font-bold text-lg"></div>
        </div>
    </div>

    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">5</span>
            <h3 class="text-2xl md:text-5xl font-black text-sky-950">Đặt câu với cặp kết từ: "nếu... thì..." hoặc "vì... nên..."</h3>
        </div>

        <div class="max-w-4xl mx-auto space-y-4">
            <div class="space-y-2">
                <label class="text-base font-bold text-sky-900">✏️ Câu 1: Sử dụng cặp kết từ "nếu... thì...":</label>
                <input id="ans-vn123-cau1" type="text" placeholder="Ví dụ: Nếu em ôn tập kỹ thì em sẽ làm bài tốt." class="w-full p-3 rounded-xl border border-gray-200 focus:border-sky-500 font-bold bg-white text-gray-800 outline-none text-lg">
            </div>
            <div class="space-y-2">
                <label class="text-base font-bold text-sky-900">✏️ Câu 2: Sử dụng cặp kết từ "vì... nên...":</label>
                <input id="ans-vn123-cau2" type="text" placeholder="Ví dụ: Vì em chăm chỉ nên thầy cô rất yêu mến." class="w-full p-3 rounded-xl border border-gray-200 focus:border-sky-500 font-bold bg-white text-gray-800 outline-none text-lg">
            </div>
            <div class="flex justify-center">
                <button onclick="kiemTraDatCau123()" class="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-black text-lg rounded-xl shadow-md active:scale-95 transition-all">
                    👨‍🏫 THẦY E ĐÁNH GIÁ CÂU GHẾP
                </button>
            </div>
            <div id="fb-vn123-cau" class="hidden p-5 rounded-2xl font-bold text-lg"></div>
        </div>
    </div>

    <!-- 📋 TIẾT 5: Viết đoạn văn giới thiệu nhân vật tài năng -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">2</span>
            <h3 class="text-2xl md:text-5xl font-black text-sky-950">Viết đoạn văn giới thiệu về một nhân vật tài năng trong cuốn sách em đã đọc:</h3>
        </div>

        <div class="max-w-4xl mx-auto space-y-4">
            <p class="text-base font-bold text-sky-950">✏️ Viết đoạn văn ngắn (khoảng 60 - 80 từ) giới thiệu về nhân vật tài năng, bộc lộ tình cảm và điều học được:</p>
            <div class="relative bg-amber-50/20 border-2 border-sky-300 rounded-[32px] p-6 shadow-inner">
                <!-- Nút Micro thu âm Speech to Text -->
                <div class="absolute right-4 top-4 z-10">
                    <button id="btn-vn123-record" onclick="toggleRecord123()" class="p-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center" title="Nói để nhập văn bản">
                        <span id="mic-icon-123" class="text-xl">🎤</span>
                    </button>
                </div>
                <textarea id="ans-vn123-nhanvat" rows="6" placeholder="Em nhập đoạn văn giới thiệu nhân vật tài năng tại đây hoặc nhấn nút Micro để thuyết trình bằng giọng nói..." class="w-full p-4 text-xl rounded-2xl border border-gray-200 outline-none focus:border-sky-500 font-bold bg-white text-gray-800 leading-relaxed pr-14"></textarea>
                <div id="status-vn123-record" class="text-sm font-bold text-rose-500 mt-2 hidden">Đang thu âm giọng nói của em...</div>
            </div>

            <div class="flex justify-center">
                <button onclick="kiemTraNhanVatTaiNang123()" class="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-black text-lg rounded-xl shadow-md active:scale-95 transition-all flex items-center gap-2">
                    <span>👨‍🏫 THẦY E CHẤM BÀI TIẾT 5</span>
                </button>
            </div>
            <div id="fb-vn123-nhanvat" class="hidden p-5 rounded-2xl font-bold text-lg"></div>
        </div>
    </div>

    <!-- 📋 TIẾT 5: Tự kiểm tra & Chỉnh sửa bài viết -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">✓</span>
            <h3 class="text-2xl md:text-5xl font-black text-sky-950">Tự kiểm tra lại sau khi viết:</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto select-none">
            <label class="flex items-center gap-3 p-4 rounded-2xl border-2 border-emerald-200 bg-emerald-50/20 cursor-pointer hover:bg-emerald-50/60 transition-all">
                <input type="checkbox" id="ck-vn123-s1" class="w-6 h-6 text-emerald-600 rounded shrink-0">
                <span class="font-bold text-emerald-950 text-lg md:text-3xl">Đã nêu rõ tên nhân vật tài năng và tên cuốn sách</span>
            </label>
            <label class="flex items-center gap-3 p-4 rounded-2xl border-2 border-emerald-200 bg-emerald-50/20 cursor-pointer hover:bg-emerald-50/60 transition-all">
                <input type="checkbox" id="ck-vn123-s2" class="w-6 h-6 text-emerald-600 rounded shrink-0">
                <span class="font-bold text-emerald-950 text-lg md:text-3xl">Đã giới thiệu nổi bật những tài năng của nhân vật</span>
            </label>
            <label class="flex items-center gap-3 p-4 rounded-2xl border-2 border-emerald-200 bg-emerald-50/20 cursor-pointer hover:bg-emerald-50/60 transition-all">
                <input type="checkbox" id="ck-vn123-s3" class="w-6 h-6 text-emerald-600 rounded shrink-0">
                <span class="font-bold text-emerald-950 text-lg md:text-3xl">Đã bộc lộ cảm nghĩ và lòng khâm phục đối với nhân vật</span>
            </label>
            <label class="flex items-center gap-3 p-4 rounded-2xl border-2 border-emerald-200 bg-emerald-50/20 cursor-pointer hover:bg-emerald-50/60 transition-all">
                <input type="checkbox" id="ck-vn123-s4" class="w-6 h-6 text-emerald-600 rounded shrink-0">
                <span class="font-bold text-emerald-950 text-lg md:text-3xl">Không mắc lỗi chính tả, chữ viết sạch sẽ, rõ ràng</span>
            </label>
        </div>

        <div class="flex justify-center pt-2">
            <button onclick="kiemTraCheckList123()" class="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-xl transition-all text-lg shadow-md active:scale-95">XÁC NHẬN HOÀN TẤT ✓</button>
        </div>
        <div id="fb-vn123-checklist" class="hidden p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto"></div>
    </div>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn123Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <span>HOÀN THÀNH TOÀN BỘ ÔN TẬP ✓</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Điệp ngữ nào được lặp lại 3 lần trong đoạn trích tả hoa phượng của Xuân Diệu?",
            "options": [
                "cả một (cả một loạt, cả một vùng, cả một góc trời)",
                "không phải (không phải là một đoá, không phải vài cành)",
                "đến (đến cây, đến hàng, đến những tán hoa)",
                "đoá hoa (đoá hoa, đoá hoa)"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tác dụng của việc sử dụng các điệp từ, điệp ngữ trong đoạn trích tả hoa phượng là gì?",
            "options": [
                "Nhấn mạnh số lượng nhiều vô kể, vẻ đẹp đỏ rực bao phủ không gian của hoa phượng",
                "Giải thích cấu trúc các bộ phận của cây phượng vĩ học đường",
                "Kể lại kỷ niệm của Xuân Diệu dưới gốc cây phượng vĩ",
                "Tạo cảm giác buồn chán, xa vắng cho người đọc"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cặp kết từ 'nếu... thì...' biểu thị mối quan hệ gì giữa hai vế câu ghép?",
            "options": [
                "Giả thuyết / Điều kiện - Kết quả",
                "Nguyên nhân - Kết quả",
                "Tương phản / Đối lập",
                "Tăng tiến / Đồng thời"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Cặp kết từ 'vì... nên...' biểu thị mối quan hệ gì giữa hai vế câu ghép?",
            "options": [
                "Nguyên nhân - Kết quả",
                "Giả thuyết / Điều kiện - Kết quả",
                "Tương phản / Đối lập",
                "Tăng tiến / Đồng thời"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong gợi ý của Tiết 5, cuốn sách nào được minh họa làm ví dụ về tấm gương học tập?",
            "options": [
                "100 Gương hiếu học của các danh nhân nổi tiếng",
                "Kính vạn hoa",
                "Đất rừng phương Nam",
                "Dế Mèn phiêu lưu ký"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi viết đoạn văn giới thiệu nhân vật tài năng, phần mở đầu cần đảm bảo yêu cầu gì?",
            "options": [
                "Giới thiệu tên nhân vật và tên cuốn sách em đã đọc",
                "Kể lại toàn bộ cốt truyện của cuốn sách từ đầu đến cuối",
                "Nêu bài học sâu sắc rút ra sau khi đọc hết cuốn sách",
                "Bày tỏ sự cảm phục sâu sắc đối với tác giả viết sách"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Ý nào dưới đây thuộc về phần giới thiệu tài năng của nhân vật?",
            "options": [
                "Mô tả những kỹ năng, trí tuệ xuất chúng hoặc thành tựu đặc biệt của nhân vật",
                "Nêu ngày xuất bản và địa điểm phát hành cuốn sách",
                "Bày tỏ cảm xúc yêu mến, khâm phục của cá nhân người viết",
                "Kể về cuộc sống sinh hoạt hằng ngày đơn giản của nhân vật"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi viết đoạn văn tả cảnh có sử dụng điệp từ/ngữ, lỗi nào cần tránh?",
            "options": [
                "Lặp từ vô chủ đích (lỗi lặp từ do nghèo nàn vốn từ)",
                "Dùng nhiều từ ngữ giàu sức gợi hình, gợi cảm",
                "Sử dụng các từ ngữ chỉ màu sắc rực rỡ của cảnh vật",
                "Viết đúng cấu trúc câu đơn và câu ghép tiếng Việt"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ loại nào có chức năng nối các từ ngữ hoặc các vế câu lại với nhau?",
            "options": [
                "Kết từ",
                "Động từ",
                "Tính từ",
                "Danh từ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi viết cảm nghĩ về nhân vật tài năng, em nên lồng ghép điều gì để bài viết sâu sắc hơn?",
            "options": [
                "Bày tỏ bài học thiết thực mà bản thân tự học hỏi được từ nhân vật",
                "Liệt kê đầy đủ danh sách các nhân vật phụ khác trong sách",
                "Nhận xét về thiết kế bìa sách và màu sắc hình minh họa",
                "Hứa hẹn sẽ tìm đọc thêm nhiều cuốn sách của cùng tác giả"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Câu ghép 'Nếu trời mưa to thì đường phố rất vắng vẻ' có chứa cặp kết từ nào?",
            "options": [
                "nếu... thì...",
                "vì... nên...",
                "tuy... nhưng...",
                "không những... mà còn..."
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Điệp từ, điệp ngữ được sử dụng trong câu của Xuân Diệu 'đến cây, đến hàng, đến những tán hoa' lặp lại từ nào?",
            "options": [
                "đến",
                "cây",
                "hàng",
                "tán hoa"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tác dụng nghệ thuật của điệp từ 'cả một' trong câu 'cả một loạt, cả một vùng, cả một góc trời' là gì?",
            "options": [
                "Tạo cảm giác ngập tràn, mở rộng biên độ không gian rực rỡ của hoa phượng",
                "Giúp câu văn ngắn gọn, súc tích và dễ nhớ hơn",
                "Làm tăng độ dài câu văn để người đọc dễ theo dõi",
                "Tránh lỗi lặp từ ngữ khi viết về các chủ điểm khác"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Từ xưng hô thích hợp nhất tự chỉ mình của học sinh khi nói chuyện với thầy cô giáo là gì?",
            "options": [
                "em (hoặc con)",
                "tớ",
                "cháu",
                "mình"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ nào dưới đây có nghĩa giống nhau hoặc gần giống nhau với từ 'chăm chỉ'?",
            "options": [
                "siêng năng, cần cù, siêng học",
                "lười biếng, nhác học, thụ động",
                "thông minh, tài giỏi, trí tuệ",
                "nhanh nhẹn, linh hoạt, hoạt bát"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Câu nào dưới đây sử dụng đúng điệp từ tu từ?",
            "options": [
                "Học, học nữa, học mãi.",
                "Em ăn cơm xong rồi em đi học bài rồi em đi ngủ.",
                "Quyển sách này rất hay và nó rất dày.",
                "Trời hôm nay nhiều mây và trời hôm nay mát mẻ."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cặp kết từ nào biểu thị quan hệ tăng tiến giữa các vế câu ghép?",
            "options": [
                "không những... mà còn...",
                "tuy... nhưng...",
                "vì... nên...",
                "nếu... thì..."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Dấu ngoặc đơn được sử dụng trong văn bản nhằm mục đích gì?",
            "options": [
                "Đánh dấu bộ phận chú thích, giải thích thêm thông tin",
                "Đánh dấu lời nói trực tiếp của nhân vật",
                "Tách các bộ phận có cùng chức vụ trong câu",
                "Kết thúc câu kể thông thường"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi giới thiệu nhân vật tài năng, điều nào dưới đây là KHÔNG nên làm?",
            "options": [
                "Sao chép y nguyên toàn bộ phần mục lục của cuốn sách",
                "Nêu rõ tài năng xuất chúng của nhân vật qua các sự việc cụ thể",
                "Bày tỏ cảm xúc yêu mến và lòng biết ơn của bản thân",
                "Chỉnh sửa kỹ lỗi chính tả và lỗi diễn đạt trước khi nộp bài"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đại từ 'thay thế' được dùng ở dòng thứ 9 của ô chữ có tác dụng gì trong văn bản?",
            "options": [
                "Thay thế cho từ ngữ đứng trước nhằm liên kết câu và tránh lặp từ",
                "Biểu thị sự lựa chọn giữa các hành động khác nhau",
                "Dùng để đặt câu hỏi về nguyên nhân xảy ra sự việc",
                "Tạo nhịp điệu uyển chuyển, cân đối cho câu văn"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// ==========================================
// ===== PHẦN HÀM XỬ LÝ TƯƠNG TÁC JS =======
// ==========================================

// 1. Kiểm tra điệp ngữ Tiết 4
window.kiemTraDiepTu123 = function() {
    const diep = document.getElementById('ans-vn123-diepngu')?.value.trim().toLowerCase();
    const tacdung = document.getElementById('ans-vn123-tacdung')?.value.trim().toLowerCase();

    const fb = document.getElementById('fb-vn123-dieptu');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!diep || !tacdung) {
        fb.innerHTML = '⚠️ Em hãy nhập điệp ngữ và tác dụng của chúng trước nhé!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-amber-100 text-amber-955 border border-amber-300';
        return;
    }

    const checkDiep = (diep.includes('không phải') || diep.includes('cả một') || diep.includes('đến'));
    const checkTacDung = (tacdung.includes('nhấn mạnh') || tacdung.includes('nhiều') || tacdung.includes('đỏ rực') || tacdung.includes('rực rỡ') || tacdung.includes('hoa phượng') || tacdung.includes('vẻ đẹp'));

    if (checkDiep && checkTacDung) {
        fb.innerHTML = '🎉 Rất tốt! Các điệp ngữ tiêu biểu: <strong>"không phải"</strong>, <strong>"cả một"</strong>, <strong>"đến"</strong>. Tác dụng nhấn mạnh sắc đỏ rực rỡ, số lượng nhiều và không gian bao la của hoa phượng!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-emerald-100 text-emerald-955 border border-emerald-300 shadow-sm';
    } else {
        fb.innerHTML = '❌ Đáp án chưa chính xác. Em hãy đọc kỹ lại đoạn trích của Xuân Diệu và điền lại nhé!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-rose-100 text-rose-955 border border-rose-300';
    }
};

// 2. Lưu phiếu sách gương học tập Tiết 5
window.kiemTraPhieuSach123 = function() {
    const ten = document.getElementById('book-vn123-tên')?.value.trim();
    const ai = document.getElementById('book-vn123-ai')?.value.trim();
    const nd = document.getElementById('book-vn123-noidung')?.value.trim();
    const cn = document.getElementById('book-vn123-camnghi')?.value.trim();

    const fb = document.getElementById('fb-vn123-phieusach');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!ten || !ai || !nd || !cn) {
        fb.innerHTML = '⚠️ Em hãy điền đầy đủ thông tin chuẩn bị trong phiếu sách nhé!';
        fb.className = 'p-4 rounded-xl text-base font-bold text-center max-w-xl mx-auto bg-amber-100 text-amber-955 border border-amber-300 shadow-sm';
        return;
    }

    fb.innerHTML = `🎉 Phiếu ghi chép cuốn sách <strong>"${ten}"</strong> đã được lưu! Đề cương trao đổi về nhân vật <strong>"${ai}"</strong> của em đã sẵn sàng để thảo luận nhóm với bạn!`;
    fb.className = 'p-4 rounded-xl text-base font-bold text-center max-w-xl mx-auto bg-emerald-100 text-emerald-955 border border-emerald-305 shadow-md';
};

// 3. Chấm đoạn văn tả cảnh Tiết 4
window.kiemTraDoanVan123 = function() {
    const text = document.getElementById('ans-vn123-doanvan')?.value.trim();
    const fb = document.getElementById('fb-vn123-doanvan');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E nhắc nhở:</h5>
                    <p class="text-lg">Em hãy viết đoạn văn tả cảnh vật (4 - 5 câu) trước khi gửi thầy chấm nhé!</p>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-955 border border-amber-305';
        return;
    }

    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    if (sentences.length < 3) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-rose-900">AI Thầy E góp ý:</h5>
                    <p class="text-lg">Đoạn văn tả cảnh của em hơi ngắn (chỉ có ${sentences.length} câu). Em nên viết đầy đủ từ 4 đến 5 câu nhé!</p>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-rose-100 text-rose-955 border border-rose-305';
        return;
    }

    // Kiểm tra điệp từ (có từ lặp lại >= 3 lần)
    const words = text.toLowerCase().split(/\s+/).filter(w => w.length > 1);
    const wordCounts = {};
    words.forEach(w => {
        wordCounts[w] = (wordCounts[w] || 0) + 1;
    });

    const hasRepeated = Object.values(wordCounts).some(count => count >= 3);

    if (!hasRepeated) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E góp ý:</h5>
                    <p class="text-lg">Đoạn văn viết rất mạch lạc nhưng chưa sử dụng biện pháp tu từ điệp từ, điệp ngữ. Hãy lặp lại một số từ tả cảnh trọng tâm để tạo nhịp điệu sinh động hơn nhé!</p>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-955 border border-amber-305';
        return;
    }

    fb.innerHTML = `
        <div class="flex items-start gap-4 animate-fade-in">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-950">AI Thầy E chấm đoạn văn tả cảnh:</h5>
                <p class="text-lg mb-2">Đoạn văn viết rất giàu hình ảnh và đạt tiêu chuẩn 4-5 câu. Việc sử dụng điệp từ/ngữ có dụng ý đã nhấn mạnh được nét đẹp nổi bật của cảnh vật.</p>
                <span class="text-xl font-black bg-emerald-500 text-white px-3 py-1 rounded-lg shadow-sm">Thầy chấm đạt: 10/10 điểm</span>
            </div>
        </div>
    `;
    fb.className = 'p-5 rounded-2xl font-bold bg-emerald-100 text-emerald-950 border border-emerald-305 shadow-md';
};

// 4. Chấm đặt câu ghép Tiết 4
window.kiemTraDatCau123 = function() {
    const cau1 = document.getElementById('ans-vn123-cau1')?.value.trim().toLowerCase();
    const cau2 = document.getElementById('ans-vn123-cau2')?.value.trim().toLowerCase();

    const fb = document.getElementById('fb-vn123-cau');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!cau1 || !cau2) {
        fb.innerHTML = '⚠️ Em hãy đặt đầy đủ cả hai câu ghép trước khi gửi chấm bài nhé!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-amber-100 text-amber-955 border border-amber-300';
        return;
    }

    const isNeuThi = (cau1.includes('nếu') && cau1.includes('thì'));
    const isViNen = (cau2.includes('vì') && cau2.includes('nên'));

    if (isNeuThi && isViNen) {
        fb.innerHTML = `
            <div class="flex items-start gap-4 animate-fade-in">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-emerald-955">AI Thầy E chấm đặt câu:</h5>
                    <p class="text-lg mb-2">Chính xác hoàn toàn! Cả hai câu ghép của em đều sử dụng đúng cấu trúc cặp kết từ để liên kết ý rất mạch lạc.</p>
                    <span class="text-xl font-black bg-emerald-500 text-white px-3 py-1 rounded-lg shadow-sm">Thầy chấm đạt: 10/10 điểm</span>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-emerald-100 text-emerald-955 border border-emerald-300 shadow-md';
    } else {
        fb.innerHTML = '❌ Lỗi cấu trúc kết từ. Câu 1 bắt buộc có cặp kết từ <strong>"nếu... thì..."</strong>, câu 2 bắt buộc có cặp kết từ <strong>"vì... nên..."</strong>. Em hãy kiểm tra và viết lại nhé!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-rose-100 text-rose-955 border border-rose-300';
    }
};

// 5. Speech to text giả lập cho Tiết 5
let boGhiAm123 = null;
window.toggleRecord123 = function() {
    const statusDiv = document.getElementById('status-vn123-record');
    const textarea = document.getElementById('ans-vn123-nhanvat');
    const micIcon = document.getElementById('mic-icon-123');

    if (!textarea || !statusDiv || !micIcon) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        if (statusDiv.classList.contains('hidden')) {
            statusDiv.classList.remove('hidden');
            statusDiv.innerText = '🎙️ Trình duyệt không hỗ trợ Micro trực tiếp. Giả lập nói: "Nhân vật Cao Bá Quát trong cuốn sách Tấm gương hiếu học nổi tiếng với tài năng luyện chữ..."';
            micIcon.innerText = '🛑';
            setTimeout(() => {
                const textGiaLap = 'Nhân vật Cao Bá Quát trong cuốn sách Kể chuyện về tấm gương hiếu học luôn làm em vô cùng khâm phục. Thuở nhỏ, chữ viết của ông rất xấu khiến bài văn dù hay vẫn bị điểm kém. Bằng nghị lực phi thường, ông đã tự học và kiên trì luyện chữ bằng cách buộc tóc lên xà nhà, tự đóng gông vào chân để luyện viết mỗi đêm. Cuối cùng, ông đã nổi tiếng khắp cả nước với tài năng viết chữ đẹp như rồng bay phượng múa.';
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

    if (boGhiAm123) {
        boGhiAm123.stop();
        boGhiAm123 = null;
        statusDiv.classList.add('hidden');
        micIcon.innerText = '🎤';
        return;
    }

    try {
        boGhiAm123 = new SpeechRecognition();
        boGhiAm123.lang = 'vi-VN';
        boGhiAm123.interimResults = false;
        boGhiAm123.maxAlternatives = 1;

        boGhiAm123.onstart = function() {
            statusDiv.innerText = '🎙️ Hệ thống đang lắng nghe... Hãy nói to và rõ ràng về nhân vật tài năng nhé!';
            statusDiv.classList.remove('hidden');
            micIcon.innerText = '🛑';
        };

        boGhiAm123.onresult = function(event) {
            const resultText = event.results[0][0].transcript;
            textarea.value = textarea.value ? textarea.value + ' ' + resultText : resultText;
        };

        boGhiAm123.onerror = function(event) {
            console.error('Lỗi nhận dạng giọng nói:', event.error);
            statusDiv.innerText = '❌ Gặp lỗi thu âm: ' + event.error + '. Vui lòng thử lại!';
        };

        boGhiAm123.onend = function() {
            statusDiv.classList.add('hidden');
            micIcon.innerText = '🎤';
            boGhiAm123 = null;
        };

        boGhiAm123.start();
    } catch (e) {
        console.error(e);
        statusDiv.innerText = '❌ Không thể bắt đầu thu âm.';
        statusDiv.classList.remove('hidden');
    }
};

// 6. AI Thầy E chấm đoạn văn giới thiệu nhân vật tài năng Tiết 5
window.kiemTraNhanVatTaiNang123 = function() {
    const text = document.getElementById('ans-vn123-nhanvat')?.value.trim();
    const fb = document.getElementById('fb-vn123-nhanvat');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E nhắc nhở:</h5>
                    <p class="text-lg">Em hãy nhập đoạn văn giới thiệu nhân vật tài năng của mình trước khi gửi thầy chấm nhé!</p>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-955 border border-amber-305';
        return;
    }

    const words = text.split(/\s+/).filter(w => w.length > 0);
    if (words.length < 50) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-rose-900">AI Thầy E góp ý:</h5>
                    <p class="text-lg">Đoạn văn hơi ngắn (chỉ có ${words.length} từ). Đoạn văn giới thiệu đầy đủ cần tối thiểu 50 từ để miêu tả nổi bật tài năng và bày tỏ cảm nghĩ sâu sắc.</p>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-rose-100 text-rose-955 border border-rose-305';
        return;
    }

    // Các từ khóa kiểm tra tài năng/sách
    const infoKeywords = ['sách', 'tấm gương', 'nhân vật', 'tài năng', 'khâm phục', 'học tập', 'hiếu học', 'cao bá quát', 'nguyễn hiền', 'nguyễn ngọc ký', 'luyện chữ', 'chữ đẹp'];
    const hasInfo = infoKeywords.some(kw => text.toLowerCase().includes(kw));

    if (!hasInfo) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E góp ý:</h5>
                    <p class="text-lg">Em hãy rà soát lại và bổ sung rõ tên nhân vật, tên cuốn sách và tài năng nổi bật của nhân vật đó để đoạn văn hoàn chỉnh hơn nhé!</p>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-955 border border-amber-305';
        return;
    }

    fb.innerHTML = `
        <div class="flex items-start gap-4 animate-fade-in">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-950">AI Thầy E chấm đoạn văn giới thiệu:</h5>
                <p class="text-lg mb-2">Đoạn văn của em rất xuất sắc! Em đã biết giới thiệu khéo léo tên sách, tên nhân vật, tập trung làm nổi bật nghị lực tự học và tài năng xuất chúng của họ bằng lời lẽ đầy khâm phục.</p>
                <span class="text-xl font-black bg-emerald-500 text-white px-3 py-1 rounded-lg shadow-sm">Thầy chấm đạt: 10/10 điểm</span>
            </div>
        </div>
    `;
    fb.className = 'p-5 rounded-2xl font-bold bg-emerald-100 text-emerald-950 border border-emerald-305 shadow-md';
};

// 7. Xác nhận tự đánh giá checklist Tiết 5
window.kiemTraCheckList123 = function() {
    const s1 = document.getElementById('ck-vn123-s1')?.checked;
    const s2 = document.getElementById('ck-vn123-s2')?.checked;
    const s3 = document.getElementById('ck-vn123-s3')?.checked;
    const s4 = document.getElementById('ck-vn123-s4')?.checked;

    const fb = document.getElementById('fb-vn123-checklist');
    if (!fb) return;
    fb.classList.remove('hidden');

    const score = [s1, s2, s3, s4].filter(Boolean).length;

    if (score === 4) {
        fb.innerHTML = '🎉 Tuyệt vời! Đoạn văn giới thiệu nhân vật tài năng của em đã đạt tối đa tất cả các yêu cầu tự kiểm tra chỉnh sửa!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-emerald-100 text-emerald-955 border border-emerald-300 shadow-sm';
    } else {
        fb.innerHTML = `⚠️ Mới chỉ đạt ${score}/4 mục tự rà soát. Hãy kiểm tra kỹ lại đoạn văn viết của mình để đảm bảo chất lượng tốt nhất nhé!`;
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-amber-100 text-amber-955 border border-amber-300';
    }
};

// 8. Nộp bài hoàn thành global bài ôn tập 123
window.submitVn123Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 123-124',
            '✏️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎉</span><p class="text-xl md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành toàn bộ bài Ôn tập Tiết 4 và Tiết 5 học kỳ I!</p><p class="text-lg text-gray-700 mt-3">Em đã học tập vô cùng xuất sắc và nắm vững mọi bài học tiếng Việt!</p></div>'
        );
    } else {
        alert('Chúc mừng em đã hoàn thành toàn bộ bài ôn tập Tiết 4 và Tiết 5!');
    }
};
