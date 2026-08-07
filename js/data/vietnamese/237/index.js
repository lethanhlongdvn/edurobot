export const lesson237 = {
    "topic": "Tiếng Việt 5",
    "week": "34",
    "period": "237",
    "title": "VIẾT: ĐÁNH GIÁ, CHỈNH SỬA ĐOẠN VĂN NÊU Ý KIẾN PHẢN ĐỐI...",
    "desc": "Học sinh thực hành tự đánh giá, đọc soát lỗi bố cục, lý lẽ và diễn đạt trong bài viết của mình, đồng thời học tập từ bài viết của bạn để chỉnh sửa bài làm tốt hơn.",
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
                    Biết lắng nghe nhận xét từ giáo viên để nhận ra các ưu điểm và hạn chế trong bài viết của mình.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Tự đánh giá, phát hiện và sửa các lỗi về bố cục, lý lẽ, dẫn chứng, dùng từ và đặt câu.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Học hỏi từ bạn những điểm hay về lý lẽ thuyết phục, câu văn sinh động và từ ngữ phong phú.
                </li>
            </ul>
        </div>

        <!-- 🧩 Khởi động (Warmup) -->
        <section class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 space-y-6">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl">1</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Yếu tố quan trọng của bài văn phản đối</h3>
            </div>
            <p class="text-gray-600 font-bold text-lg">Theo em, khi viết một đoạn văn nêu ý kiến phản đối một sự việc, hiện tượng, điều gì là quan trọng nhất để thuyết phục người đọc?</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button onclick="window.selectWarmup237(1)" id="btn-wm-1" class="p-5 bg-sky-50 hover:bg-sky-100 border-2 border-sky-200 rounded-2xl text-left font-bold text-sky-950 transition-all">
                    A. Sử dụng nhiều từ ngữ gay gắt, to tiếng để thể hiện rõ thái độ.
                </button>
                <button onclick="window.selectWarmup237(2)" id="btn-wm-2" class="p-5 bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-200 rounded-2xl text-left font-bold text-emerald-950 transition-all">
                    B. Đưa ra các lý lẽ xác đáng và dẫn chứng thực tế thuyết phục.
                </button>
            </div>
            <div id="fb-warmup-237" class="hidden p-4 rounded-xl font-bold text-lg mt-4"></div>
        </section>

        <!-- 📝 Ý chính bài học -->
        <div class="bg-emerald-50/70 p-6 rounded-3xl border-l-8 border-emerald-500 shadow-md relative overflow-hidden">
            <div class="absolute -right-10 -top-10 w-24 h-24 bg-emerald-100/40 rounded-full blur-xl"></div>
            <h5 class="text-xl md:text-2xl font-black text-emerald-900 mb-2 flex items-center gap-2">
                <span>💡</span> Ý chính bài học
            </h5>
            <p class="text-emerald-800 text-lg md:text-xl font-bold leading-relaxed">
                Đánh giá và sửa đổi là khâu bắt buộc để hoàn thiện một bài văn. Việc nghiêm túc đọc soát lỗi và học tập cách diễn đạt hay của bạn sẽ giúp bài viết của em ngày một thuyết phục và mạch lạc hơn.
            </p>
        </div>
    </div>
    `,
    "practice": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-4xl mx-auto pb-12">
        
        <!-- 📝 Hoạt động 1: Đọc soát phát hiện lỗi -->
        <!-- Bài 2 -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-blue-100 space-y-6" id="ex-237-audit">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl">2</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Đọc soát và phát hiện lỗi bài viết</h3>
            </div>
            <p class="text-gray-600 font-bold text-lg">Em hãy tự đọc soát lại bài viết của mình (hoặc một bài viết mẫu) và đánh dấu vào các tiêu chí kiểm tra dưới đây:</p>

            <div class="space-y-4">
                <label class="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-2xl cursor-pointer hover:bg-blue-50/50 transition-colors">
                    <input type="checkbox" id="chk-237-1" class="w-6 h-6 border-2 border-blue-500 rounded text-blue-600 mt-1 shrink-0">
                    <span class="font-bold text-gray-700 text-base md:text-lg">
                        <strong>Bố cục:</strong> Đoạn văn có đủ 3 phần mở đầu (giới thiệu hiện tượng và ý kiến phản đối), triển khai (lý lẽ, dẫn chứng) và kết thúc (khẳng định thái độ/lời khuyên) không?
                    </span>
                </label>

                <label class="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-2xl cursor-pointer hover:bg-blue-50/50 transition-colors">
                    <input type="checkbox" id="chk-237-2" class="w-6 h-6 border-2 border-blue-500 rounded text-blue-600 mt-1 shrink-0">
                    <span class="font-bold text-gray-700 text-base md:text-lg">
                        <strong>Trình bày ý kiến:</strong> Ý kiến phản đối có được trình bày rõ ràng, dứt khoát ngay từ phần mở đầu không?
                    </span>
                </label>

                <label class="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-2xl cursor-pointer hover:bg-blue-50/50 transition-colors">
                    <input type="checkbox" id="chk-237-3" class="w-6 h-6 border-2 border-blue-500 rounded text-blue-600 mt-1 shrink-0">
                    <span class="font-bold text-gray-700 text-base md:text-lg">
                        <strong>Lý lẽ & Dẫn chứng:</strong> Các lý do phản đối có xác đáng không? Dẫn chứng đưa ra có thuyết phục và thực tế không?
                    </span>
                </label>

                <label class="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-2xl cursor-pointer hover:bg-blue-50/50 transition-colors">
                    <input type="checkbox" id="chk-237-4" class="w-6 h-6 border-2 border-blue-500 rounded text-blue-600 mt-1 shrink-0">
                    <span class="font-bold text-gray-700 text-base md:text-lg">
                        <strong>Sử dụng từ ngữ:</strong> Đoạn văn có tránh mắc lỗi lặp từ, dùng từ chưa chính xác hoặc viết câu thiếu chủ ngữ - vị ngữ không?
                    </span>
                </label>

                <!-- Thêm tiêu chí sáng tạo bổ sung -->
                <div class="p-4 bg-amber-50/50 border-2 border-dashed border-amber-200 rounded-2xl space-y-2">
                    <span class="font-bold text-amber-900 text-base md:text-lg">🌸 Tiêu chí tự bổ sung của em (ví dụ: Liên kết câu, giọng điệu...):</span>
                    <input type="text" id="txt-237-custom" class="w-full p-3 border border-amber-300 rounded-xl font-bold bg-white focus:outline-none focus:border-amber-500 text-base" placeholder="Nhập tiêu chí của riêng em vào đây...">
                </div>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="window.resetAudit237()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="window.checkAudit237();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-audit-237" class="hidden p-4 rounded-xl font-bold text-lg mt-4 animate-in fade-in"></div>
        </section>

        <!-- 📝 Hoạt động 2: Học tập từ bài viết của bạn -->
        <!-- Bài 3 -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-emerald-100 space-y-6">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-xl">3</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Những điều em muốn học tập ở bài viết của bạn</h3>
            </div>
            <p class="text-gray-600 font-bold text-lg">Đọc bài viết của các bạn trong nhóm/lớp, tích chọn những điểm tốt mà em học tập được từ bạn:</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Điểm học tập 1 -->
                <div class="p-6 bg-sky-50/70 border border-sky-100 rounded-3xl text-center space-y-3">
                    <span class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center font-black text-xl mx-auto">✓</span>
                    <h5 class="text-lg font-black text-sky-950">Lý do thuyết phục</h5>
                    <p class="text-sm font-bold text-sky-900/80 leading-relaxed">Bạn đưa ra lý do khách quan, tác động rõ rệt tới sức khỏe và môi trường chung.</p>
                </div>

                <!-- Điểm học tập 2 -->
                <div class="p-6 bg-emerald-50/70 border border-emerald-100 rounded-3xl text-center space-y-3">
                    <span class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-xl mx-auto">✓</span>
                    <h5 class="text-lg font-black text-emerald-950">Câu văn hay, sinh động</h5>
                    <p class="text-sm font-bold text-emerald-900/80 leading-relaxed">Sử dụng nhiều từ ngữ phong phú, so sánh thực tế khiến người đọc dễ hình dung.</p>
                </div>

                <!-- Điểm học tập 3 (Tự thêm) -->
                <div class="p-6 bg-amber-50/70 border border-amber-100 rounded-3xl text-center space-y-3">
                    <span class="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-black text-xl mx-auto">🌸</span>
                    <h5 class="text-lg font-black text-amber-950">Ưu điểm khác từ bạn</h5>
                    <input type="text" id="txt-237-friend" class="w-full p-2 border border-amber-300 rounded-xl font-bold bg-white text-center text-sm focus:outline-none focus:border-amber-500" placeholder="Mở đầu cuốn hút...">
                </div>
            </div>

            <div class="bg-gray-50 p-6 rounded-2xl border border-gray-150 space-y-4">
                <span class="font-black text-gray-800 text-lg">💡 Trải nghiệm thực tế chỉnh sửa câu văn của riêng em:</span>
                <p class="text-sm font-bold text-gray-500 leading-relaxed">Hãy ghi lại một câu văn chưa hay trong bài làm cũ của em và viết lại câu văn mới sau khi đã sửa lỗi để trở nên thuyết phục hơn:</p>
                
                <div class="space-y-3">
                    <div>
                        <span class="text-sm font-bold text-red-600">❌ Câu văn cũ chưa đạt yêu cầu:</span>
                        <input type="text" id="txt-237-old-sentence" class="w-full p-3 border border-red-200 rounded-xl font-medium focus:outline-none focus:border-red-500 text-base" placeholder="Ví dụ: Việc chen hàng làm tớ rất bực mình và ghét nó lắm.">
                    </div>
                    <div>
                        <span class="text-sm font-bold text-green-600">✅ Câu văn mới sau khi sửa và cải tiến:</span>
                        <input type="text" id="txt-237-new-sentence" class="w-full p-3 border border-green-200 rounded-xl font-bold focus:outline-none focus:border-green-500 text-base" placeholder="Ví dụ: Hành vi chen hàng không chỉ thể hiện sự thiếu lịch sự ở nơi công cộng mà còn gây mất trật tự và thiếu công bằng đối với những người đã xếp hàng trước.">
                    </div>
                </div>

                <div class="flex justify-end items-center gap-4"><button onclick="window.submitSentenceEdit237();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-sentence-237" class="hidden p-4 rounded-xl font-bold text-lg"></div>
            </div>
        </section>
    </div>
    `,
    "quizPool": [
        {
            "question": "Mục đích chính của việc đọc soát và chỉnh sửa bài viết là gì?",
            "options": [
                "Để bài viết dài ra thêm nhiều trang giấy nữa",
                "Phát hiện và sửa đổi các lỗi về bố cục, lý lẽ, dùng từ để bài viết hoàn thiện hơn",
                "Thay đổi hoàn toàn chủ đề đã chọn ban đầu",
                "Để nộp bài nhanh hơn cho giáo viên chấm điểm"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Một đoạn văn nêu ý kiến phản đối đầy đủ cần đảm bảo cấu trúc gồm mấy phần?",
            "options": [
                "2 phần",
                "3 phần (Mở đầu, Triển khai, Kết thúc)",
                "4 phần",
                "Không cần phân chia phần rõ ràng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nội dung chính cần trình bày ở phần mở đầu của đoạn văn phản đối là gì?",
            "options": [
                "Kể lại một câu chuyện cười cho người đọc thư giãn",
                "Nêu rõ hiện tượng/sự việc cần bàn luận và bày tỏ thái độ phản đối rõ ràng",
                "Đưa ra các dẫn chứng số liệu phức tạp",
                "Kêu gọi mọi người cùng chung tay ủng hộ hành vi đó"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong phần triển khai, để lý lẽ phản đối có sức thuyết phục, người viết cần làm gì?",
            "options": [
                "Nói đi nói lại một lý do duy nhất nhiều lần",
                "Đưa ra lý lẽ xác đáng kết hợp các dẫn chứng từ thực tế cuộc sống",
                "Sử dụng từ ngữ to tiếng, áp đặt ý kiến chủ quan",
                "Sao chép nguyên văn ý kiến của các bạn khác mà không chọn lọc"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Câu văn nào sau đây phản đối hiện tượng vứt rác bừa bãi có cách diễn đạt thuyết phục nhất?",
            "options": [
                "Vứt rác ra đường là rất xấu và tớ rất bực mình.",
                "Hành vi vứt rác bừa bãi không chỉ làm mất mỹ quan đô thị mà còn trực tiếp ô nhiễm nguồn nước và môi trường sống của chính chúng ta.",
                "Đừng có vứt rác bừa bãi nữa nhé mọi người ơi.",
                "Người ta vứt rác đầy đường nên tớ cũng vứt theo thôi."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ ngữ nào dưới đây thể hiện rõ nhất thái độ phản đối lịch sự và nghiêm túc?",
            "options": [
                "Rất ghét",
                "Khó có thể đồng tình / Cần chấm dứt ngay",
                "Sao cũng được",
                "Hơi bực bội"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi bạn học có lý lẽ phản đối rất sắc bén và dẫn chứng cụ thể, em nên làm gì?",
            "options": [
                "Bỏ qua không quan tâm vì đó không phải bài của mình",
                "Lắng nghe, ghi nhận và học hỏi cách sắp xếp ý kiến của bạn",
                "Chê bài của bạn vì câu chữ quá dài dòng",
                "Bắt chước sao chép y hệt câu văn của bạn vào bài của mình"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Lỗi nào sau đây thường gặp về cấu trúc câu trong bài viết của học sinh?",
            "options": [
                "Viết câu quá ngắn gọn",
                "Viết câu thiếu chủ ngữ hoặc vị ngữ (câu què, câu cụt)",
                "Dùng quá nhiều dấu câu khác nhau",
                "Viết đúng quy tắc chính tả tiếng Việt"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Câu văn 'Vì không xếp hàng thẳng hàng.' mắc lỗi ngữ pháp gì?",
            "options": [
                "Lỗi lặp từ ngữ",
                "Câu thiếu cả chủ ngữ lẫn vị ngữ (chỉ có trạng ngữ hoặc vế phụ)",
                "Lỗi viết hoa sai quy tắc",
                "Câu hoàn toàn chính xác"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Làm thế nào để sửa câu: 'Vì không xếp hàng thẳng hàng.' cho đúng ngữ pháp?",
            "options": [
                "Bỏ dấu chấm ở cuối câu đi.",
                "Thêm chủ ngữ và vị ngữ đầy đủ: 'Một số bạn học sinh không xếp hàng thẳng hàng khi mua đồ ở căng tin.'",
                "Giữ nguyên và không cần chỉnh sửa.",
                "Thay bằng từ 'Thẳng hàng xếp không xếp'."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Quy tắc khi viết đoạn văn là gì?",
            "options": [
                "Mỗi câu xuống dòng một lần để bài dài hơn",
                "Viết liên tục từ chữ cái viết hoa lùi đầu dòng cho đến dấu chấm kết thúc đoạn văn, không xuống dòng tự ý",
                "Có thể dùng bất kỳ ký hiệu vẽ tranh nào thay cho chữ viết",
                "Không cần viết hoa chữ cái đầu tiên của đoạn văn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi nhận xét bài viết của bạn, cụm từ 'Từ ngữ phong phú' có nghĩa là gì?",
            "options": [
                "Bạn chỉ dùng một từ lặp lại nhiều lần",
                "Bạn sử dụng nhiều từ ngữ đa dạng, diễn đạt sinh động và đúng văn cảnh",
                "Bài viết của bạn toàn là từ ngữ tiếng nước ngoài",
                "Từ ngữ trong bài rất khó hiểu và xa lạ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Việc viết lại những câu văn chưa hay sau khi đọc soát giúp em điều gì?",
            "options": [
                "Giúp em tốn nhiều thời gian chép bài",
                "Giúp em tiến bộ nhanh hơn trong kỹ năng diễn đạt và lập luận",
                "Làm bài viết của em ngắn đi đáng kể",
                "Chỉ làm vừa lòng giáo viên chứ không có tác dụng gì"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Hành vi chen lấn khi xếp hàng tại căng tin trường học bị phản đối vì lý do gì là thuyết phục nhất?",
            "options": [
                "Vì làm tớ không mua được món đồ chơi mình thích",
                "Vì gây ra cảnh lộn xộn, mất trật tự và thiếu công bằng với những người tuân thủ xếp hàng trước",
                "Vì cô bán hàng căng tin không thích đông người",
                "Vì xếp hàng mất quá nhiều thời gian học bài"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi tự phát hiện lỗi dùng từ trong bài viết, bước tiếp theo em cần làm là gì?",
            "options": [
                "Tẩy xóa lem luốc để giáo viên không nhìn thấy",
                "Tra từ điển hoặc suy nghĩ từ đồng nghĩa phù hợp để thay thế từ dùng sai",
                "Xé trang giấy viết lại từ đầu bài mới",
                "Giữ nguyên lỗi đó vì người đọc vẫn tự hiểu được"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// Đăng ký tương tác toàn cục
window.selectWarmup237 = function(choice) {
    const fb = document.getElementById('fb-warmup-237');
    const btn1 = document.getElementById('btn-wm-1');
    const btn2 = document.getElementById('btn-wm-2');
    fb.classList.remove('hidden');

    if (choice === 1) {
        btn1.className = "p-5 bg-red-100 border-2 border-red-300 rounded-2xl text-left font-bold text-red-950 transition-all";
        btn2.className = "p-5 bg-gray-50 border border-gray-200 rounded-2xl text-left font-bold text-gray-500 transition-all";
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-850 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Chưa chính xác rồi. Việc dùng từ quá gay gắt, to tiếng không làm tăng sức thuyết phục mà trái lại làm bài văn thiếu tính văn minh, lịch sự ở nơi công cộng. Hãy thử chọn lại nhé!";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    } else {
        btn2.className = "p-5 bg-green-100 border-2 border-green-300 rounded-2xl text-left font-bold text-green-950 transition-all";
        btn1.className = "p-5 bg-gray-50 border border-gray-200 rounded-2xl text-left font-bold text-gray-500 transition-all";
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-850 border border-green-200 mt-4";
        fb.innerHTML = "🌟 Hoàn toàn chính xác! Để thuyết phục người khác đồng ý với ý kiến của mình, em bắt buộc phải đưa ra được lý lẽ logic và những dẫn chứng sinh động từ thực tiễn cuộc sống.";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    }
};

window.checkAudit237 = function() {
    const c1 = document.getElementById('chk-237-1').checked;
    const c2 = document.getElementById('chk-237-2').checked;
    const c3 = document.getElementById('chk-237-3').checked;
    const c4 = document.getElementById('chk-237-4').checked;
    const custom = document.getElementById('txt-237-custom').value.trim();
    const fb = document.getElementById('fb-audit-237');
    fb.classList.remove('hidden');

    if (!c1 || !c2 || !c3 || !c4) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em hãy đọc soát thật kỹ bài viết của mình và tích chọn đầy đủ 4 tiêu chuẩn bắt buộc nhé!";
        return;
    }

    fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
    let customText = "";
    if (custom.length > 2) {
        customText = ` cùng tiêu chuẩn bổ sung của riêng em là: "${custom}"`;
    }
    fb.innerHTML = `🌟 Rất tốt! Em đã hoàn thành kiểm soát đầy đủ 4 tiêu chuẩn cốt lõi của đoạn văn phản đối${customText}. Hãy sẵn sàng chỉnh sửa các câu văn chưa ưng ý nhé!`;
    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    if (typeof window.submitMathLesson === 'function') {
        window.submitMathLesson("Viết Tiết 237: Đọc soát đoạn văn phản đối", 100, "ex-237-audit", 1, 1, 1);
    }
};

window.resetAudit237 = function() {
    document.getElementById('chk-237-1').checked = false;
    document.getElementById('chk-237-2').checked = false;
    document.getElementById('chk-237-3').checked = false;
    document.getElementById('chk-237-4').checked = false;
    document.getElementById('txt-237-custom').value = "";
    const fb = document.getElementById('fb-audit-237');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};

window.submitSentenceEdit237 = function() {
    const oldS = document.getElementById('txt-237-old-sentence').value.trim();
    const newS = document.getElementById('txt-237-new-sentence').value.trim();
    const fb = document.getElementById('fb-sentence-237');
    fb.classList.remove('hidden');

    if (oldS.length < 5 || newS.length < 10) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-850 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em hãy điền đầy đủ cả câu văn cũ và câu văn mới đã chỉnh sửa để thực hành so sánh nhé!";
        return;
    }

    fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
    fb.innerHTML = "🌟 Tuyệt vời! Em đã hoàn thành thực hành viết lại câu văn. Việc sửa từ những câu văn cụ thể như thế này sẽ giúp kỹ năng viết văn của em tiến bộ vượt bậc.";
    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    if (typeof window.submitMathLesson === 'function') {
        window.submitMathLesson("Viết Tiết 237: Thực hành cải tiến câu văn", 100, "ex-237-sentence", 1, 1, 1);
    }
};

// Đăng ký bài học toàn cục
window.lesson237 = lesson237;
