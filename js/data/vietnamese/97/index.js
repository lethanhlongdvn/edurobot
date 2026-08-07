/* global UI */
export const lesson97 = {
    "topic": "Viết",
    "week": "14",
    "period": "97",
    "title": "TÌM Ý CHO ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ MỘT BÀI THƠ",
    "desc": "Hướng dẫn học sinh thực hành lựa chọn đề tài, chuẩn bị tư liệu và lập dàn ý tìm ý (Mở đầu, Triển khai, Kết thúc) cho đoạn văn cảm thụ một bài thơ theo chủ điểm Thế giới tuổi thơ hoặc Ca ngợi thiên nhiên.",
    "subject": "Viết",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-blue-600">
    <!-- 🎯 Mục tiêu bài học (Clean Style) -->
    <div class="p-6 bg-blue-50/50 rounded-[2rem] border-2 border-blue-700">
        <h3 class="text-xl md:text-3xl font-black text-blue-600 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-700 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-blue-600 font-bold text-lg md:text-xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-950 font-black">•</span>
                Biết cách chọn lọc các chi tiết, hình ảnh nổi bật trong bài thơ để lập dàn ý.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-950 font-black">•</span>
                Hoàn thành dàn ý tìm ý gồm 3 phần: Mở đầu, Triển khai (Ý hay + Cảm xúc) và Kết thúc.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-950 font-black">•</span>
                Rèn luyện ý thức chỉnh sửa, rà soát lỗi chính tả và bố cục trước khi viết bài chính thức.
            </li>
        </ul>
    </div>

    <!-- 🚀 Khởi động: Lựa chọn đề bài -->
    <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-4">
        <div class="flex flex-col md:flex-row items-center justify-between border-b border-blue-100 pb-4">
            <h3 class="text-xl md:text-3xl font-black text-blue-600 flex items-center gap-3">
                <span class="text-xl md:text-3xl">🚀</span>
                Chọn 1 trong 2 đề dưới đây:
            </h3>
            <!-- Ảnh SGK trang 129 -->
            <div class="relative group cursor-pointer overflow-hidden rounded-xl border border-blue-200 max-w-[120px]"
                 onclick="window.showMathFeedback(true, '&lt;div class=&amp;quot;text-center p-4 bg-white rounded-[32px] border-4 border-blue-600 shadow-2xl&amp;quot;&gt;&lt;img src=&amp;quot;assets/images/tiengviet_5_1/97/129.png&amp;quot; class=&amp;quot;max-h-[85vh] mx-auto rounded-2xl shadow-md object-contain&amp;quot;&gt;&lt;/div&gt;')">
                <img src="assets/images/tiengviet_5_1/97/129.png" class="w-full h-auto rounded-lg object-cover" alt="Trang 129">
                <div class="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg">
                    <span class="bg-white/95 px-2 py-1 rounded text-xs font-black text-blue-600">XEM ĐỀ SGK</span>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <!-- Đề 1 -->
            <button onclick="selectTopicVn97(1)" id="btn-topic1" class="p-6 rounded-[2rem] border-4 border-dashed border-blue-200 bg-blue-50/10 hover:bg-blue-50/40 text-left transition-all active:scale-95 flex flex-col justify-between">
                <span class="px-3 py-1 bg-blue-700 text-white rounded-full font-black text-xs">ĐỀ 1</span>
                <span class="text-xl font-bold text-blue-950 mt-4 leading-relaxed">Viết đoạn văn thể hiện tình cảm, cảm xúc của em về một bài thơ thuộc chủ điểm <span class="underline">Thế giới tuổi thơ</span>.</span>
            </button>

            <!-- Đề 2 -->
            <button onclick="selectTopicVn97(2)" id="btn-topic2" class="p-6 rounded-[2rem] border-4 border-dashed border-blue-200 bg-blue-50/10 hover:bg-blue-50/40 text-left transition-all active:scale-95 flex flex-col justify-between">
                <span class="px-3 py-1 bg-blue-700 text-white rounded-full font-black text-xs">ĐỀ 2</span>
                <span class="text-xl font-bold text-blue-950 mt-4 leading-relaxed">Viết đoạn văn thể hiện tình cảm, cảm xúc của em về một bài thơ <span class="underline">ca ngợi vẻ đẹp của thiên nhiên</span>.</span>
            </button>
        </div>
    </div>

    <!-- 📚 Phần 1: Chuẩn bị (SGK Trang 130) -->
    <div id="sec-prep-vn97" class="hidden bg-white p-6 md:p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-6">
        <h3 class="text-xl md:text-3xl font-black text-blue-600 flex items-center gap-3">
            <span class="text-xl md:text-3xl">📚</span>
            1. Chuẩn bị tài liệu và lựa chọn tác phẩm
        </h3>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div class="lg:col-span-2 space-y-6">
                <!-- Chọn bài thơ gợi ý -->
                <div class="space-y-3">
                    <span class="font-black text-blue-600 text-xl">a. Lựa chọn bài thơ mà em muốn viết:</span>
                    <div id="poem-options-list" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Sẽ render động qua javascript -->
                    </div>
                </div>

                <!-- Ô nhập điều yêu thích -->
                <div class="space-y-3 border-t border-blue-50 pt-4">
                    <span class="font-black text-blue-600 text-xl">b. Ghi nhanh những điều em yêu thích ở bài thơ đó:</span>
                    <textarea id="vn97-prep-fav" rows="3" placeholder="Ví dụ: Hình ảnh chú ngựa con hiếu động, tình thương ấm áp của mẹ, hoặc cảnh bình minh rực rỡ ở vùng cao..." class="w-full p-4 border-2 border-blue-200 rounded-2xl outline-none focus:border-blue-700 font-bold bg-blue-50/10 text-lg shadow-inner"></textarea>
                    <div class="flex justify-center">
                        <button onclick="savePrepVn97()" class="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white font-black rounded-xl text-base shadow active:scale-95 transition-all">LƯU CHUẨN BỊ ✓</button>
                    </div>
                </div>
            </div>

            <!-- Cột ảnh SGK trang 130 -->
            <div class="flex flex-col items-center justify-center bg-blue-50/20 p-4 rounded-[2rem] border border-blue-100">
                <div class="relative group cursor-pointer overflow-hidden rounded-[2rem] border-2 border-blue-200 shadow-md p-1 bg-white max-w-[200px]"
                      onclick="window.showMathFeedback(true, '&lt;div class=&amp;quot;text-center p-4 bg-white rounded-[32px] border-4 border-blue-600 shadow-2xl&amp;quot;&gt;&lt;img src=&amp;quot;assets/images/tiengviet_5_1/97/130.png&amp;quot; class=&amp;quot;max-h-[85vh] mx-auto rounded-2xl shadow-md object-contain&amp;quot;&gt;&lt;/div&gt;')">
                    <img src="assets/images/tiengviet_5_1/97/130.png" class="w-full h-auto rounded-[1.5rem] object-cover" alt="Trang 130 SGK">
                    <div class="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-[1.5rem]">
                        <span class="bg-white/95 px-3 py-1.5 rounded-full text-xs font-black text-blue-600 shadow">🔍 XEM TRANH</span>
                    </div>
                </div>
                <span class="text-sm font-bold text-blue-700 mt-2">Trang 130 Sách giáo khoa</span>
            </div>
        </div>
    </div>

    <!-- 📝 Phần 2: Tìm ý (Dàn ý chi tiết) -->
    <div id="sec-outline-vn97" class="hidden bg-white p-6 md:p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-6">
        <h3 class="text-xl md:text-3xl font-black text-blue-600 flex items-center gap-3">
            <span class="text-xl md:text-3xl">📝</span>
            2. Thực hành tìm ý và lập dàn ý đoạn văn
        </h3>
        <p class="text-sm font-bold text-gray-500">Điền thông tin chi tiết vào các phần của dàn ý dưới đây theo gợi ý của SGK:</p>

        <div class="max-w-5xl mx-auto space-y-6">
            <!-- Mở đầu -->
            <div class="p-5 bg-blue-50/30 rounded-2xl border-2 border-blue-100 space-y-3">
                <span class="font-black text-blue-950 text-xl flex items-center gap-2">
                    <span class="p-1 bg-blue-700 text-white rounded text-xs">1</span>
                    Mở đầu:
                </span>
                <p class="text-xs text-gray-600 font-bold italic mt-0">Giới thiệu tên bài thơ, tên tác giả và nêu cảm nghĩ chung về bài thơ.</p>
                <textarea id="vn97-out-intro" rows="2" placeholder="Ví dụ: Bài thơ 'Tuổi Ngựa' của nhà thơ Xuân Quỳnh đã để lại trong em nhiều cảm xúc sâu sắc về tình mẫu tử thiêng liêng..." class="w-full p-3 border border-blue-200 rounded-xl outline-none focus:border-blue-700 font-bold bg-white text-base"></textarea>
            </div>

            <!-- Triển khai -->
            <div class="p-5 bg-blue-50/30 rounded-2xl border-2 border-blue-100 space-y-4">
                <span class="font-black text-blue-950 text-xl flex items-center gap-2">
                    <span class="p-1 bg-blue-700 text-white rounded text-xs">2</span>
                    Triển khai:
                </span>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                        <span class="font-bold text-blue-600 text-lg">a. Những chi tiết nghệ thuật, nội dung em yêu thích:</span>
                        <p class="text-xs text-gray-500 italic">Ví dụ: Hình ảnh chú ngựa con phi qua các cánh đồng hoa mơ, hoa huệ rực rỡ...</p>
                        <textarea id="vn97-out-body1" rows="3" placeholder="Nhập các chi tiết nghệ thuật, hình ảnh đẹp..." class="w-full p-3 border border-blue-200 rounded-xl outline-none focus:border-blue-700 font-bold bg-white text-base"></textarea>
                    </div>
                    <div class="space-y-2">
                        <span class="font-bold text-blue-600 text-lg">b. Cảm xúc, tình cảm cụ thể của em về bài thơ:</span>
                        <p class="text-xs text-gray-500 italic">Ví dụ: Xúc động trước lời dặn yêu thương dạt dào của người mẹ hiền hậu...</p>
                        <textarea id="vn97-out-body2" rows="3" placeholder="Nhập cảm xúc và suy nghĩ sâu sắc của em..." class="w-full p-3 border border-blue-200 rounded-xl outline-none focus:border-blue-700 font-bold bg-white text-base"></textarea>
                    </div>
                </div>
            </div>

            <!-- Kết thúc -->
            <div class="p-5 bg-blue-50/30 rounded-2xl border-2 border-blue-100 space-y-3">
                <span class="font-black text-blue-950 text-xl flex items-center gap-2">
                    <span class="p-1 bg-blue-700 text-white rounded text-xs">3</span>
                    Kết thúc:
                </span>
                <p class="text-xs text-gray-600 font-bold italic mt-0">Khẳng định lại tình cảm, cảm xúc bao quát của em với tác phẩm thơ.</p>
                <textarea id="vn97-out-conclusion" rows="2" placeholder="Ví dụ: Em rất trân trọng bài thơ này và tự hứa sẽ học tập thật chăm chỉ để đền đáp công lao cha mẹ..." class="w-full p-3 border border-blue-200 rounded-xl outline-none focus:border-blue-700 font-bold bg-white text-base"></textarea>
            </div>
        </div>

        <div class="flex justify-end items-center gap-4"><button onclick="checkOutlineVn97();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
        <div id="fb-outline-vn97" class="hidden p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-lg animate-fade-in transition-all"></div>
    </div>

    <!-- 🌸 Phần 3: Góp ý & Chỉnh sửa (Checklist) -->
    <div id="sec-audit-vn97" class="hidden bg-white p-6 md:p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-6">
        <h3 class="text-xl md:text-3xl font-black text-blue-600 flex items-center gap-3">
            <span class="text-xl md:text-3xl">🌸</span>
            3. Góp ý và chỉnh sửa đoạn văn
        </h3>
        
        <div class="max-w-4xl mx-auto bg-blue-50/30 p-6 rounded-[2rem] border border-blue-100 space-y-4">
            <p class="text-lg font-bold text-gray-800">Em hãy chọn nội dung phù hợp cho bông hoa màu đỏ 🌹 ở tiêu chí góp ý thứ tư:</p>
            
            <div class="space-y-3 font-semibold text-lg text-gray-800 ml-4">
                <li>🔹 Những điều em yêu thích ở bài thơ</li>
                <li>🔹 Tình cảm, cảm xúc đối với bài thơ</li>
                <li>🔹 Cách thể hiện tình cảm, cảm xúc đối với bài thơ</li>
                <li class="flex flex-col md:flex-row md:items-center gap-2">
                    <span class="font-black text-blue-600 flex items-center gap-1">🌹 Tiêu chí thứ tư cần bổ sung là:</span>
                    <select id="vn97-c3-flower" class="p-2 border border-blue-300 rounded-xl outline-none bg-white font-bold text-blue-600 text-base mt-2 md:mt-0">
                        <option value="">-- Chọn tiêu chí --</option>
                        <option value="correct">Đúng bố cục, sắp xếp các ý trong đoạn văn hợp lý, logic.</option>
                        <option value="wrong1">Bài viết phải dài ít nhất hai trang giấy ô ly.</option>
                        <option value="wrong2">Chép thật nhiều câu thơ của các tác giả khác để so sánh.</option>
                    </select>
                </li>
            </div>
        </div>

        <div class="flex justify-end items-center gap-4"><button onclick="checkFlowerVn97();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
        <div id="fb-flower-vn97" class="hidden p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner animate-fade-in"></div>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Mục đích chính của bài học 'Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ' là gì?",
            "options": [
                "Lập dàn ý chi tiết gồm 3 phần (Mở đầu, Triển khai, Kết thúc) trước khi viết bài hoàn chỉnh",
                "Học thuộc lòng tất cả các bài thơ có trong sách giáo khoa",
                "Học cách vẽ tranh phong cảnh minh họa cho bài thơ",
                "Tìm kiếm các bài văn mẫu trên mạng để sao chép nguyên văn"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Đề tài số 1 yêu cầu học sinh viết cảm xúc về bài thơ thuộc chủ điểm nào?",
            "options": [
                "Thế giới tuổi thơ",
                "Ca ngợi vẻ đẹp thiên nhiên",
                "Tình hữu nghị quốc tế",
                "Tinh thần học tập lao động"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Bài thơ nào dưới đây là gợi ý tốt nhất cho Đề 2 (ca ngợi vẻ đẹp thiên nhiên)?",
            "options": [
                "Trước cổng trời",
                "Tuổi Ngựa",
                "Tiếng hạt nảy mầm",
                "Nói với em"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong phần chuẩn bị, chi tiết 'hình ảnh chú ngựa hiếu động, giàu cảm xúc, ước mơ bay bổng' thuộc về bài thơ nào?",
            "options": [
                "Tuổi Ngựa",
                "Tiếng hạt nảy mầm",
                "Trước cổng trời",
                "Tiếng đàn ba-la-lai-ca trên sông Đà"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Chi tiết 'tình yêu thương của cô giáo dành cho học sinh khiếm thính' là gợi ý cảm thụ bài thơ nào?",
            "options": [
                "Tiếng hạt nảy mầm",
                "Trước cổng trời",
                "Tuổi Ngựa",
                "Tranh làng Hồ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Phần Mở đầu của dàn ý đoạn văn biểu cảm về bài thơ cần nêu nội dung gì?",
            "options": [
                "Giới thiệu tên bài thơ, tên tác giả và nêu cảm nghĩ bao quát",
                "Kể lại câu chuyện cuộc đời của tác giả bài thơ đó",
                "Liệt kê tất cả các nhân vật phụ xuất hiện trong bài thơ",
                "Nêu bài học đạo đức rút ra từ bài thơ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Nội dung nào không thuộc phần Triển khai của dàn ý đoạn văn biểu cảm?",
            "options": [
                "Giới thiệu tên tác giả và lý do viết bài văn ở câu đầu tiên",
                "Nêu những điều em yêu thích ở bài thơ (từ ngữ, hình ảnh, âm thanh...)",
                "Nêu tình cảm, cảm xúc cụ thể của em (yêu mến, xúc động...)",
                "Nêu ấn tượng nghệ thuật độc đáo của bài thơ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Phần Kết thúc của đoạn văn biểu cảm về bài thơ có nhiệm vụ gì?",
            "options": [
                "Khẳng định lại tình cảm, cảm xúc bao quát của em với bài thơ",
                "Giải thích ý nghĩa các từ khó có trong bài thơ",
                "Chỉ viết câu cảm thán khen ngợi vẻ đẹp của trang giấy vẽ",
                "Viết lời hứa của học sinh với thầy cô"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi lập dàn ý, việc ghi chép lại các chi tiết nghệ thuật hay nhằm mục đích gì?",
            "options": [
                "Làm điểm tựa lý lẽ, dẫn chứng để bộc lộ tình cảm một cách thuyết phục",
                "Chỉ để trang trí cho dàn ý thêm sinh động hơn",
                "Để bài văn dài hơn mà không cần viết câu biểu cảm",
                "Đáp ứng đúng quy trình bắt buộc của nhà xuất bản"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Checklist chỉnh sửa đoạn văn giúp học sinh tự rà soát điều gì?",
            "options": [
                "Những điều yêu thích, cảm xúc, cách bộc lộ cảm xúc và cách sắp xếp ý hợp lý",
                "Số lượng từ chính xác trong đoạn văn phải đạt trên 500 từ",
                "Màu mực viết bài đã đúng màu mực đỏ hay chưa",
                "Tranh vẽ minh họa đã tô màu sặc sỡ hay chưa"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Biện pháp nghệ thuật nào thường được gợi ý sử dụng để viết câu bộc lộ cảm xúc tốt hơn?",
            "options": [
                "So sánh, nhân hóa, điệp từ điệp ngữ",
                "Lập luận bác bỏ lý thuyết khoa học",
                "Sử dụng các thuật ngữ chuyên ngành toán học",
                "Viết hoa toàn bộ đoạn văn"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Dàn ý tìm ý có thể coi là đạt yêu cầu khi nào?",
            "options": [
                "Đầy đủ 3 phần, ghi ngắn gọn ý chính rõ ràng và bám sát yêu cầu đề bài",
                "Chỉ cần viết 1 câu duy nhất ở mỗi phần là đủ",
                "Viết thành bài văn dài luôn mà không cần gạch đầu dòng",
                "Có nhiều hình vẽ minh họa ngộ nghĩnh xung quanh"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ biểu cảm nào dưới đây bộc lộ tình cảm sâu sắc của người viết về bài thơ?",
            "options": [
                "xúc động biết mấy, yêu mến, trân trọng, ấn tượng đẹp",
                "chạy nhảy, vui đùa, ăn uống, ca hát",
                "nhà thơ, bài thơ, tác giả, nhà xuất bản",
                "cái bàn, cái ghế, trang giấy, bút chì"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Nếu chọn đề 1 về 'Thế giới tuổi thơ', bài thơ 'Trước cổng trời' có phù hợp làm ngữ liệu chính không?",
            "options": [
                "Không phù hợp vì bài thơ ca ngợi vẻ đẹp thiên nhiên vùng núi cao hùng vĩ (thuộc Đề 2)",
                "Có phù hợp vì thiên nhiên cũng gắn với cuộc sống của trẻ em vùng cao",
                "Phù hợp nếu viết bài thơ đó cho người thân đọc",
                "Không có ý kiến nào đúng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ khóa nào tóm tắt đúng nhất kỹ năng cốt lõi của Tiết 97?",
            "options": [
                "Chuẩn bị tư liệu, lập dàn ý tìm ý và chỉnh sửa ý bố cục đoạn văn",
                "Kể lại câu chuyện, giải nghĩa từ và học thuộc lòng bài đọc",
                "Thiết kế bìa sách và thu âm bài phát biểu cá nhân",
                "Luyện tập ngữ pháp về câu ghép nối tiếp"
            ],
            "answer": 0,
            "level": 0
        }
    ]
};

// ====== INTERACTIVE SCRIPT ACTIONS ======
let currentTopic = 0;
window.selectTopicVn97 = function(topicNum) {
    currentTopic = topicNum;
    
    // Đổi màu nút chọn đề
    const b1 = document.getElementById('btn-topic1');
    const b2 = document.getElementById('btn-topic2');
    
    if (topicNum === 1) {
        b1.className = "p-6 rounded-[2rem] border-4 border-blue-700 bg-blue-50/50 text-left transition-all flex flex-col justify-between shadow-lg";
        b2.className = "p-6 rounded-[2rem] border-4 border-dashed border-blue-200 bg-blue-50/10 hover:bg-blue-50/40 text-left transition-all flex flex-col justify-between";
    } else {
        b2.className = "p-6 rounded-[2rem] border-4 border-blue-700 bg-blue-50/50 text-left transition-all flex flex-col justify-between shadow-lg";
        b1.className = "p-6 rounded-[2rem] border-4 border-dashed border-blue-200 bg-blue-50/10 hover:bg-blue-50/40 text-left transition-all flex flex-col justify-between";
    }
    
    // Render danh sách bài thơ gợi ý tương ứng
    const optionsList = document.getElementById('poem-options-list');
    optionsList.innerHTML = "";
    
    if (topicNum === 1) {
        optionsList.innerHTML = `
            <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-200 cursor-pointer font-bold select-none">
                <input type="radio" name="vn97-poem" value="Tuổi Ngựa" class="w-5 h-5 accent-blue-700" checked>
                <span>Tuổi Ngựa (Xuân Quỳnh)</span>
            </label>
            <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-200 cursor-pointer font-bold select-none">
                <input type="radio" name="vn97-poem" value="Tiếng hạt nảy mầm" class="w-5 h-5 accent-blue-700">
                <span>Tiếng hạt nảy mầm (Tô Hà)</span>
            </label>
        `;
    } else {
        optionsList.innerHTML = `
            <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-200 cursor-pointer font-bold select-none">
                <input type="radio" name="vn97-poem" value="Trước cổng trời" class="w-5 h-5 accent-blue-700" checked>
                <span>Trước cổng trời (Nguyễn Đình Ảnh)</span>
            </label>
            <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-200 cursor-pointer font-bold select-none">
                <input type="radio" name="vn97-poem" value="Tiếng đàn ba-la-lai-ca trên sông Đà" class="w-5 h-5 accent-blue-700">
                <span>Tiếng đàn ba-la-lai-ca trên sông Đà (Quang Huy)</span>
            </label>
        `;
    }
    
    // Hiển thị phần tiếp theo
    document.getElementById('sec-prep-vn97').classList.remove('hidden');
    UI.showToast(`Đã chọn Đề ${topicNum}. Hãy tiến hành bước Chuẩn bị nhé!`, "success", 2500);
};

window.savePrepVn97 = function() {
    const poem = document.querySelector('input[name="vn97-poem"]:checked').value;
    const fav = document.getElementById('vn97-prep-fav').value.trim();
    
    if (!fav) {
        alert('Em hãy ghi nhanh điều em yêu thích ở bài thơ trước nhé!');
        return;
    }
    
    // Autofill gợi ý cho dàn ý dựa trên bài thơ đã chọn
    const introInput = document.getElementById('vn97-out-intro');
    const conclusionInput = document.getElementById('vn97-out-conclusion');
    
    introInput.value = `Bài thơ "${poem}" đã để lại trong em những ấn tượng vô cùng tốt đẹp.`;
    conclusionInput.value = `Bài thơ "${poem}" thực sự là một tác phẩm ý nghĩa mà em luôn trân trọng.`;
    
    document.getElementById('sec-outline-vn97').classList.remove('hidden');
    UI.showToast(`Đã lưu chuẩn bị cho bài thơ "${poem}"! Hãy hoàn thành dàn ý bên dưới.`, "success", 3000);
};

window.checkOutlineVn97 = function() {
    const intro = document.getElementById('vn97-out-intro').value.trim();
    const body1 = document.getElementById('vn97-out-body1').value.trim();
    const body2 = document.getElementById('vn97-out-body2').value.trim();
    const conclusion = document.getElementById('vn97-out-conclusion').value.trim();
    const fb = document.getElementById('fb-outline-vn97');
    
    if (!intro || !body1 || !body2 || !conclusion) {
        alert('Em hãy nhập đầy đủ tất cả các phần của dàn ý trước khi nộp nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-red-50', 'text-red-800', 'border-red-200', 'bg-emerald-50', 'text-emerald-800', 'border-emerald-200');
    
    let score = 60;
    let comments = "";
    
    // Đánh giá dựa trên từ khóa biểu cảm và độ dài
    if (intro.length >= 15 && conclusion.length >= 15) {
        score += 15;
    } else {
        comments += "Phần Mở đầu hoặc Kết thúc của em hơi ngắn, hãy bổ sung thêm cảm nghĩ bao quát. ";
    }
    
    const bodyWords = (body1 + " " + body2).toLowerCase();
    const favKeywords = ['hình ảnh', 'từ ngữ', 'biện pháp', 'so sánh', 'nhân hóa', 'nhân hoá', 'âm thanh', 'nhịp điệu', 'xúc động', 'yêu mến', 'cảm xúc', 'tình cảm'];
    let keywordsMatched = 0;
    favKeywords.forEach(kw => {
        if (bodyWords.includes(kw)) keywordsMatched++;
    });
    
    score += Math.min(keywordsMatched * 5, 25);
    score = Math.min(score, 100);
    
    if (score >= 80) {
        fb.innerHTML = `🌟 **Điểm đánh giá dàn ý: ${score}/100**<br><br>
        **Nhận xét từ Thầy E:** Dàn ý tìm ý của em rất tốt, đúng bố cục 3 phần theo yêu cầu. Ý chính rõ ràng, có liệt kê chi tiết nghệ thuật và bộc lộ cảm xúc chân thành. Em hãy tự tin dùng dàn ý này để viết bài nhé!`;
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-lg bg-emerald-50 border-emerald-300 text-emerald-800 animate-fade-in';
        document.getElementById('sec-audit-vn97').classList.remove('hidden');
    } else {
        fb.innerHTML = `⚠️ **Điểm đánh giá dàn ý: ${score}/100**<br><br>
        **Nhận xét từ Thầy E:** Em cần bổ sung thêm các chi tiết nghệ thuật cụ thể (từ ngữ so sánh, hình ảnh đẹp) hoặc cảm nghĩ chi tiết ở phần Triển khai nhé. ${comments}`;
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-lg bg-amber-50 border-amber-300 text-amber-800 animate-fade-in';
    }
};

window.checkFlowerVn97 = function() {
    const val = document.getElementById('vn97-c3-flower').value;
    const fb = document.getElementById('fb-flower-vn97');
    if (!val) {
        alert('Em hãy chọn một phương án cho bông hoa đỏ 🌹 nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-green-50', 'text-green-800', 'border-green-300', 'bg-red-50', 'text-red-800', 'border-red-300');
    
    if (val === 'correct') {
        fb.innerHTML = '🎉 **Chính xác!** Tiêu chí chỉnh sửa thứ tư quan trọng là: **Đúng bố cục, sắp xếp các ý trong đoạn văn hợp lý, logic** để đoạn văn cảm thụ mạch lạc, trôi chảy.';
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner bg-green-50 border-green-300 text-green-800 animate-fade-in';
    } else {
        fb.innerHTML = '⚠️ **Chưa đúng rồi!** Em hãy chú ý đến bố cục và cách tổ chức các câu văn mạch lạc trong đoạn văn cảm thụ để lựa chọn lại phương án tối ưu nhé!';
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner bg-red-50 border-red-300 text-red-800 animate-fade-in';
    }
};
