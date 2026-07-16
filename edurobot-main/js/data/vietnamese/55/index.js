export const lesson55 = {
    "topic": "Tiếng Việt 5",
    "week": "8",
    "period": "55",
    "title": "VIẾT: ĐÁNH GIÁ, CHỈNH SỬA BÀI VĂN TẢ PHONG CẢNH",
    "desc": "Bài học giúp học sinh thực hành soát lỗi chính tả, bố cục, cách dùng từ gợi tả và các biện pháp tu từ để nâng cao chất lượng câu văn, đoạn văn tả cảnh.",
    "subject": "Viết",
    "theme": "Thế giới tuổi thơ",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-amber-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-amber-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-amber-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-amber-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-amber-500 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-amber-600 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-amber-900 font-black">•</span>
                Biết cách đọc soát và tự đánh giá bài làm của mình dựa trên 5 tiêu chuẩn cốt lõi của bài văn tả phong cảnh.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-amber-900 font-black">•</span>
                Học tập 2 cách nâng cấp câu văn: Sử dụng từ ngữ gợi tả sinh động kết hợp so sánh/nhân hóa và đan xen bộc lộ suy nghĩ, cảm xúc.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-amber-900 font-black">•</span>
                Viết lại một số câu hoặc đoạn văn trong bài làm của mình cho hay hơn và hoàn thiện bài văn.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG: KIỂM TRA TIÊU CHUẨN ĐÁNH GIÁ -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-amber-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Tiêu chí chấm điểm văn tả cảnh</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy tích chọn những tiêu chí BẮT BUỘC cần có để bài văn tả cảnh của em đạt điểm tối đa:</p>
        
        <div class="bg-amber-50/20 p-6 rounded-3xl border border-amber-100 shadow-inner grid grid-cols-1 md:grid-cols-2 gap-4">
            <label class="flex items-start gap-3 p-3 bg-white hover:bg-amber-50 rounded-2xl border border-amber-100 font-bold text-base text-gray-800 cursor-pointer">
                <input type="checkbox" id="crit-1" class="w-5 h-5 rounded border-amber-100 text-amber-600 focus:ring-amber-600 mt-0.5">
                <span>Có đủ 3 phần: Mở bài, Thân bài, Kết bài.</span>
            </label>
            <label class="flex items-start gap-3 p-3 bg-white hover:bg-amber-50 rounded-2xl border border-amber-100 font-bold text-base text-gray-800 cursor-pointer">
                <input type="checkbox" id="crit-2" class="w-5 h-5 rounded border-amber-100 text-amber-600 focus:ring-amber-600 mt-0.5">
                <span>Phải liệt kê mọi sự vật nhìn thấy, bất kể có nổi bật hay không.</span>
            </label>
            <label class="flex items-start gap-3 p-3 bg-white hover:bg-amber-50 rounded-2xl border border-amber-100 font-bold text-base text-gray-800 cursor-pointer">
                <input type="checkbox" id="crit-3" class="w-5 h-5 rounded border-amber-100 text-amber-600 focus:ring-amber-600 mt-0.5">
                <span>Sắp xếp nội dung miêu tả theo một trình tự hợp lí (thời gian hoặc không gian).</span>
            </label>
            <label class="flex items-start gap-3 p-3 bg-white hover:bg-amber-50 rounded-2xl border border-amber-100 font-bold text-base text-gray-800 cursor-pointer">
                <input type="checkbox" id="crit-4" class="w-5 h-5 rounded border-amber-100 text-amber-600 focus:ring-amber-600 mt-0.5">
                <span>Lựa chọn từ gợi hình gợi âm, kết hợp so sánh, nhân hóa để làm nổi bật cảnh.</span>
            </label>
            <label class="flex items-start gap-3 p-3 bg-white hover:bg-amber-50 rounded-2xl border border-amber-100 font-bold text-base text-gray-800 cursor-pointer">
                <input type="checkbox" id="crit-5" class="w-5 h-5 rounded border-amber-100 text-amber-600 focus:ring-amber-600 mt-0.5">
                <span>Bộc lộ suy nghĩ, cảm xúc đối với phong cảnh hoặc con người lao động nơi ấy.</span>
            </label>
            <label class="flex items-start gap-3 p-3 bg-white hover:bg-amber-50 rounded-2xl border border-amber-100 font-bold text-base text-gray-800 cursor-pointer">
                <input type="checkbox" id="crit-6" class="w-5 h-5 rounded border-amber-100 text-amber-600 focus:ring-amber-600 mt-0.5">
                <span>Tuyệt đối không mắc lỗi chính tả, lỗi diễn đạt, chữ viết rõ ràng.</span>
            </label>
        </div>

        <div class="flex justify-center">
            <button onclick="checkKD55()" class="px-8 py-3 bg-amber-500 text-white font-black rounded-xl hover:bg-amber-500 transition-all text-base shadow-md">KIỂM TRA TIÊU CHÍ ✓</button>
        </div>
        <div id="fb-vn55-kd" class="hidden p-4 rounded-xl text-sm font-bold text-center mt-2"></div>
    </div>

    <!-- 📖 KHÁM PHÁ: PHÂN TÍCH CÁC CÁCH VIẾT LẠI CÂU HAY -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-amber-100 shadow-xl space-y-8">
        <div class="flex items-center gap-4 mb-2 border-b border-amber-100 pb-4">
            <span class="text-amber-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                <span>📖</span> Khám phá cách viết lại câu văn miêu tả sinh động
            </span>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Nhấp vào các phần được gạch chân để xem cách nhà văn biên tập câu văn sinh động hơn:</p>

        <div class="space-y-6 max-w-4xl mx-auto">
            <!-- Cách 1: Dùng từ gợi tả, so sánh, nhân hóa -->
            <div class="bg-amber-50/20 p-6 rounded-3xl border border-amber-100 relative">
                <span class="px-3 py-1 bg-amber-500 text-white font-black text-xs rounded-full inline-block mb-3">CÁCH 1: Dùng từ gợi tả + So sánh + Nhân hóa</span>
                <p class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed">
                    "Đôi bờ sông Vôn-ga được mùa thu 
                    <span onclick="showTooltip55(this, 'Phép nhân hóa \'thêu\' ví mùa thu như một nghệ nhân thêu tranh tỉ mỉ và so sánh bờ sông vàng rực với hai dải lụa mềm mại.')" class="underline decoration-2 decoration-amber-600 font-black text-amber-600 cursor-pointer hover:bg-amber-500 rounded px-1">thêu lên một màu vàng óng như hai dải lụa</span>. 
                    Con tàu màu gạch tươi đi ngược dòng sông, bánh lái 
                    <span onclick="showTooltip55(this, 'Phép nhân hóa từ \'uể oải\' miêu tả sinh động trạng thái di chuyển chậm rãi của bánh lái khuấy nước.')" class="underline decoration-2 decoration-amber-600 font-black text-amber-600 cursor-pointer hover:bg-amber-500 rounded px-1">uể oải khuấy động</span> 
                    mặt nước xanh thẫm. Nó kéo theo ở đầu sợi dây cáp dài một chiếc xà lan xám trông 
                    <span onclick="showTooltip55(this, 'So sánh độc đáo! Chiếc xà lan cồng kềnh xám xịt từ xa trông đáng yêu như con bọ đất đang bò.')" class="underline decoration-2 decoration-amber-600 font-black text-amber-600 cursor-pointer hover:bg-amber-500 rounded px-1">giống như con bọ đất</span>. 
                    Mặt trời lững lờ di chuyển trên sông, cảnh vật đổi mới từng giờ từng phút."
                </p>
                <p class="text-right text-xs text-gray-800 font-bold mt-2">(Theo Mác-xim Go-rơ-ki)</p>
            </div>

            <!-- Cách 2: Đan xen suy nghĩ, cảm xúc -->
            <div class="bg-amber-50/20 p-6 rounded-3xl border border-amber-100 relative">
                <span class="px-3 py-1 bg-amber-500 text-white font-black text-xs rounded-full inline-block mb-3">CÁCH 2: Đan xen suy nghĩ, bày tỏ tình cảm</span>
                <p class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed">
                    "Núi non, sóng nước tươi đẹp của Hạ Long là một bộ phận của 
                    <span onclick="showTooltip55(this, 'Bày tỏ tình yêu tự hào quê hương đất nước thông qua cụm từ kính trọng \'non sông Việt Nam gấm vóc\' và ý thức trách nhiệm \'mãi mãi giữ gìn\'.')" class="underline decoration-2 decoration-amber-600 font-black text-amber-600 cursor-pointer hover:bg-amber-500 rounded px-1">non sông Việt Nam gấm vóc mà nhân dân ta đời nọ tiếp đời kia mãi mãi giữ gìn</span>."
                </p>
                <p class="text-right text-xs text-gray-800 font-bold mt-2">(Theo Thi Sảnh)</p>
            </div>

            <!-- Hộp hiển thị tooltip chung -->
            <div id="tooltip-display-55" class="hidden p-4 rounded-xl font-bold text-base text-amber-600 bg-amber-500 border border-amber-100 text-center animate-in fade-in duration-355"></div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- WORKSHOP CHỈNH SỬA ĐOẠN VĂN -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">✏️</div>
                <div>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800">Workshop: Chỉnh sửa và viết lại cho hay hơn</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Chọn một câu hoặc đoạn văn chưa ưng ý trong bài văn cũ của em, sau đó áp dụng cách dùng từ gợi tả, so sánh, nhân hóa hoặc đan xen cảm xúc để viết lại hay hơn:</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Đoạn văn ban đầu -->
                <div class="bg-white p-5 rounded-2xl border border-amber-100 space-y-2">
                    <span class="text-sm font-black text-amber-600 flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-amber-500"></span> Đoạn văn / Câu văn ban đầu của em:
                    </span>
                    <textarea id="ans-vn55-old" rows="5" placeholder="Ví dụ: Bờ sông có nhiều cây cỏ xanh. Nước sông chảy rất nhanh chảy ra biển..." class="w-full p-4 border border-amber-100 rounded-xl outline-none focus:border-amber-500 font-bold bg-amber-50/5 text-lg text-gray-800 leading-relaxed"></textarea>
                </div>

                <!-- Đoạn văn sau khi sửa -->
                <div class="bg-white p-5 rounded-2xl border border-amber-100 space-y-2">
                    <span class="text-sm font-black text-emerald-800 flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-emerald-600"></span> Đoạn văn / Câu văn đã chỉnh sửa (Hay hơn):
                    </span>
                    <textarea id="ans-vn55-new" rows="5" placeholder="Ví dụ: Hai bên bờ sông, hàng tre xanh rì rào uốn mình soi bóng xuống mặt nước. Dòng nước xanh thẳm cuồn cuộn lững lờ trôi như một dải lụa mềm mang phù sa bồi đắp cho đất mẹ quê hương..." class="w-full p-4 border border-emerald-100 rounded-xl outline-none focus:border-emerald-500 font-bold bg-emerald-50/5 text-lg text-gray-800 leading-relaxed"></textarea>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <button onclick="checkWritingVn55()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                    <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                    <span>AI THẦY E ĐỐI SÁNH CHẤM BÀI</span>
                </button>
                <div id="fb-vn55-writing" class="hidden p-4 rounded-xl font-bold text-base flex-1 font-medium"></div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn55Global()" class="px-12 py-5 bg-gradient-to-r from-amber-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH VÀ LƯU BÀI</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Mục đích quan trọng nhất của việc đánh giá, chỉnh sửa bài văn tả phong cảnh là gì?",
            "options": [
                "Làm bài văn dài gấp đôi bài cũ",
                "Phát hiện lỗi diễn đạt, lỗi chính tả và nâng cấp câu văn bằng từ gợi tả, so sánh, nhân hóa hoặc đan xen cảm xúc",
                "Sao chép y nguyên đoạn văn mẫu của các nhà văn lớn",
                "Đổi chủ đề tả cảnh sang tả con người"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Trong câu văn của Go-rơ-ki, hình ảnh 'bờ sông được mùa thu thêu lên một màu vàng óng' sử dụng biện pháp tu từ nào?",
            "options": [
                "So sánh và đảo ngữ",
                "Nhân hóa mùa thu biết thêu dệt màu sắc",
                "Điệp từ ngữ chỉ thời gian",
                "Câu hỏi tu từ bộc lộ cảm xúc"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Tác dụng của cụm từ so sánh 'như hai dải lụa' khi miêu tả đôi bờ sông Vôn-ga là gì?",
            "options": [
                "Gợi tả sự quanh co khúc khuỷu, hiểm trở của bờ sông",
                "Làm nổi bật nét đẹp mềm mại, thơ mộng, óng ả của đôi bờ sông mùa thu",
                "Tả sự sầm uất, nhộn nhịp của bến tàu",
                "Miêu tả dòng nước chảy cuồn cuộn dữ dội"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Trong câu 'bánh lái uể oải khuấy động mặt nước', việc nhân hóa bánh lái 'uể oải' mang nét hay nào?",
            "options": [
                "Tả sự hỏng hóc, cũ kỹ của động cơ tàu",
                "Gợi tả nhịp điệu chuyển động vô cùng chậm rãi, êm đềm của con tàu trên mặt sông phẳng lặng",
                "Thể hiện sự mệt mỏi của những người trên thuyền",
                "Phê phán hoạt động kém hiệu quả của tàu chở hàng"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Khi viết câu văn miêu tả đan xen suy nghĩ của tác giả Thi Sảnh về Hạ Long, tác giả muốn nhấn mạnh điều gì?",
            "options": [
                "Ý thức trách nhiệm gìn giữ non sông gấm vóc của các thế hệ tiếp theo",
                "Giá trị kinh tế lớn của ngành du lịch vịnh Hạ Long",
                "Mô tả vị trí địa lý của Hạ Long trên bản đồ",
                "Kể lại hành trình các bạn nhỏ đi du lịch hè"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đoạn văn tả đôi bờ sông Vôn-ga của Go-rơ-ki được miêu tả theo trình tự nào?",
            "options": [
                "Từ chi tiết trong khoang tàu đến cảnh vật trên bầu trời cao",
                "Tả từ gần đến xa, cảnh vật xung quanh di động từng giờ từng phút",
                "Trình tự từ âm thanh tiếng sóng đến màu sắc lá tre",
                "Tả cấu tạo cơ học của động cơ tàu thủy"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tiêu chí nào KHÔNG nằm trong danh sách đọc soát lỗi cơ bản của một bài văn tả cảnh?",
            "options": [
                "Kiểm tra bố cục bài văn có đủ 3 phần rõ ràng không",
                "Xem có sử dụng từ ngữ có tính gợi tả và tu từ so sánh nhân hóa không",
                "Đếm số dòng viết xem có đúng 50 dòng chữ hay không",
                "Kiểm tra xem bài viết có mắc lỗi chính tả, lỗi dùng từ diễn đạt không"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Để nâng cấp câu văn khô khan 'Bãi cát rất rộng' hay hơn, cách nào phù hợp nhất?",
            "options": [
                "Bãi cát có diện tích vô cùng lớn.",
                "Dải cát vàng mịn màng trải dài mênh mông, ôm lấy sóng biển rì rào vỗ nhẹ bờ.",
                "Bãi cát chứa rất nhiều hạt cát mịn.",
                "Bờ biển Nha Trang có bãi cát vàng rộng."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ ngữ gợi tả màu sắc nào thích hợp nhất khi miêu tả dòng suối mát lành?",
            "options": [
                "xám xịt",
                "trong ngần, xanh mát",
                "vàng úa",
                "đỏ quạch"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Động từ nhân hóa nào dưới đây thích hợp nhất để tả hoạt động của hàng tre ven hồ?",
            "options": [
                "soi bóng, rì rào thì thầm trò chuyện",
                "đứng thẳng im lìm",
                "rụng lá úa",
                "đâm chồi non"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Khi viết bài văn tả cảnh, việc lắng nghe thầy cô nhận xét chung giúp học sinh:",
            "options": [
                "Sao chép y nguyên bài văn của bạn điểm cao nhất lớp",
                "Nhận ra những điểm mạnh cần phát huy và những lỗi sai phổ biến để sửa lại bài mình",
                "Không cần sửa lại bài làm của mình nữa",
                "Đổi hoàn toàn đề bài sang chủ đề mới"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Câu văn nào sau đây biểu lộ rõ nét tình cảm yêu mến, tự hào đối với phong cảnh?",
            "options": [
                "Bờ biển có hàng dừa xanh che mát.",
                "Em vô cùng yêu mến dòng sông quê hương, nơi đã nuôi dưỡng tâm hồn em lớn lên từng ngày.",
                "Dòng suối chảy qua những khe đá gập ghềnh.",
                "Con tàu di chuyển chậm rãi trên mặt biển lặng sóng."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Lỗi chính tả và lỗi diễn đạt nếu không được đọc soát chỉnh sửa sẽ:",
            "options": [
                "Làm bài văn hay và bất ngờ hơn",
                "Làm giảm giá trị của bài văn và khiến người đọc khó hiểu đúng ý miêu tả",
                "Làm cho chữ viết sạch đẹp hơn",
                "Giúp tiết kiệm thời gian làm bài của học sinh"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Cách viết 'Mặt trời lững lờ di chuyển trên sông' sử dụng phép nghệ thuật gì?",
            "options": [
                "So sánh ngộ nghĩnh",
                "Nhân hóa hoạt động của mặt trời như người lững lờ bước đi",
                "Điệp từ ngữ nhấn mạnh thời gian",
                "Hoán dụ mặt trời chỉ dòng sông"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Tại sao việc rèn luyện viết lại đoạn văn hay hơn lại vô cùng quan trọng?",
            "options": [
                "Giúp học sinh rèn luyện tư duy ngôn từ phong phú, linh hoạt và biết cách làm câu văn sinh động hơn",
                "Để chuẩn bị cho việc học các môn tự nhiên dễ dàng hơn",
                "Để bài văn đạt được độ dài tối đa mà không cần nội dung",
                "Vì đây là bài học bắt buộc không thể bỏ qua"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- CHUYỂN ĐỔI TIÊU CHÍ KHỞI ĐỘNG VN55 ---
window.checkKD55 = function() {
    const c1 = document.getElementById('crit-1').checked;
    const c2 = document.getElementById('crit-2').checked;
    const c3 = document.getElementById('crit-3').checked;
    const c4 = document.getElementById('crit-4').checked;
    const c5 = document.getElementById('crit-5').checked;
    const c6 = document.getElementById('crit-6').checked;
    const fb = document.getElementById('fb-vn55-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    // Các tiêu chí đúng là: 1, 3, 4, 5, 6. Tiêu chí 2 (liệt kê mọi sự vật) là sai vì chỉ cần tả chi tiết sự vật nổi bật.
    if (c1 && !c2 && c3 && c4 && c5 && c6) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã chọn đúng tất cả các tiêu chuẩn vàng của một bài văn tả cảnh đạt điểm tối đa. Đặc biệt lưu ý không nên liệt kê mọi sự vật mà chỉ tập trung tả sâu những đặc điểm nổi bật nhất thôi nhé.";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác hoàn toàn. Hãy nhớ rằng miêu tả cảnh vật không nên liệt kê tràn lan mọi thứ (Tiêu chí 2 là sai). Hãy thử chọn lại nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-rose-600 text-white mt-2 shadow-sm animate-bounce";
    }
};

// --- HIỂN THỊ TOOLTIP VN55 ---
window.showTooltip55 = function(element, message) {
    const box = document.getElementById('tooltip-display-55');
    if (!box) return;
    box.classList.remove('hidden');
    box.innerHTML = `🌟 <strong>Phân tích từ nhà văn:</strong> "${message}"`;
    const underlines = document.querySelectorAll('.underline');
    underlines.forEach(el => el.classList.remove('bg-amber-500'));
    element.classList.add('bg-amber-500');
};

// --- AI THẦY E ĐỐI SÁNH ĐOẠN VĂN VN55 ---
window.checkWritingVn55 = function() {
    const oldText = document.getElementById('ans-vn55-old')?.value.trim();
    const newText = document.getElementById('ans-vn55-new')?.value.trim();
    const fb = document.getElementById('fb-vn55-writing');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!oldText || !newText) {
        fb.innerHTML = "⚠️ Em hãy nhập cả đoạn văn ban đầu và đoạn văn sau khi đã chỉnh sửa để AI Thầy E chấm đối sánh nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    if (newText.length < oldText.length || newText.length < 15) {
        fb.innerHTML = "⚠️ Đoạn văn chỉnh sửa mới của em cần viết chi tiết, sử dụng thêm các từ gợi tả hoặc so sánh nhân hóa để hay hơn đoạn văn cũ nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    // Nhận xét đối sánh giả lập
    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E (ĐỐI SÁNH):</span>
            <p class="text-lg font-bold">"Sự cải tiến vượt bậc! Đoạn văn mới của em đã loại bỏ sự khô khan của đoạn cũ, thay thế bằng các từ gợi hình gợi cảm vô cùng sống động. Việc lồng ghép các hình ảnh so sánh tu từ giúp người đọc dễ dàng tưởng tượng ra khung cảnh thơ mộng hơn."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold text-xs rounded-full shadow-sm mt-2">Độ tiến bộ: +95% (Đạt yêu cầu tối đa)</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-355";
};

// --- HOÀN THÀNH TOÀN BỘ TIẾT HỌC ---
window.submitVn55Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 55',
            '📝',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">✍️</span><p class="text-2xl font-bold text-amber-600">Chúc mừng em đã hoàn thành bài thực hành Đánh giá, chỉnh sửa!</p><p class="text-lg text-gray-800 mt-3">Kỹ năng tự biên tập và nâng cấp câu chữ là vô cùng quan trọng đối với mỗi nhà văn tương lai. Hãy luôn trau chuốt từng lời văn của mình nhé.</p></div>'
        );
    }
};
