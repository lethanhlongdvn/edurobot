export const lesson241 = {
    "topic": "Tiếng Việt 5",
    "week": "35",
    "period": "241",
    "title": "ÔN TẬP VÀ ĐÁNH GIÁ CUỐI HKII (TIẾT 3)",
    "desc": "Bài ôn tập Tiết 5 học kì 2: Thực hành kể chuyện theo tranh minh họa truyện Bà tổ nghề dệt lụa, và viết đoạn văn nêu cảm xúc về câu chuyện dệt lụa truyền thống.",
    "subject": "Tiếng Việt",
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
                    Dựa vào truyện 'Bà tổ nghề dệt lụa' để kể lại và ghép nối đúng nội dung của 4 bức tranh minh họa.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Viết được đoạn văn thể hiện tình cảm, cảm xúc của em về câu chuyện, làm rõ ý nghĩa của truyền thống dệt lụa.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Thực hiện đọc soát và tự sửa chữa đoạn văn theo góp ý của giáo viên và bạn học.
                </li>
            </ul>
        </div>

        <!-- 🖼️ Hoạt động 1: Kể chuyện theo tranh -->
        <!-- Bài 1 -->
        <section class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 space-y-6" id="ex-241-match">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl">1</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Kể chuyện theo tranh: Bà tổ nghề dệt lụa</h3>
            </div>
            <p class="text-gray-600 font-bold text-lg">Em hãy quan sát kỹ 4 bức tranh trong sách giáo khoa và chọn nội dung tương ứng cho từng bức tranh:</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Tranh 1 -->
                <div class="p-5 bg-gray-50 border border-gray-200 rounded-3xl space-y-3">
                    <div class="flex items-center gap-2">
                        <span class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-sm">1</span>
                        <span class="font-black text-gray-800 text-base">Bức tranh số 1:</span>
                    </div>
                    <select id="sel-pic-1" class="w-full p-2.5 border border-gray-350 rounded-xl font-bold bg-white focus:outline-none focus:border-blue-500 text-sm">
                        <option value="">-- Chọn nội dung bức tranh --</option>
                        <option value="p3">Thiều Hoa nuôi tằm ăn dâu trong các nong lớn ven sông Hồng.</option>
                        <option value="p1">Vua Hùng thứ sáu cùng công chúa út Thiều Hoa hiền lành, yêu thiên nhiên đi dạo.</option>
                        <option value="p4">Công chúa dệt ra thứ lụa óng vàng bằng xa xe tơ và khung cửi rồi truyền nghề cho dân.</option>
                        <option value="p2">Thiều Hoa nói chuyện với bướm nâu cánh mốc và phát hiện ra loài tằm ăn lá dâu nhả tơ.</option>
                    </select>
                </div>

                <!-- Tranh 2 -->
                <div class="p-5 bg-gray-50 border border-gray-200 rounded-3xl space-y-3">
                    <div class="flex items-center gap-2">
                        <span class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-sm">2</span>
                        <span class="font-black text-gray-800 text-base">Bức tranh số 2:</span>
                    </div>
                    <select id="sel-pic-2" class="w-full p-2.5 border border-gray-350 rounded-xl font-bold bg-white focus:outline-none focus:border-blue-500 text-sm">
                        <option value="">-- Chọn nội dung bức tranh --</option>
                        <option value="p3">Thiều Hoa nuôi tằm ăn dâu trong các nong lớn ven sông Hồng.</option>
                        <option value="p1">Vua Hùng thứ sáu cùng công chúa út Thiều Hoa hiền lành, yêu thiên nhiên đi dạo.</option>
                        <option value="p4">Công chúa dệt ra thứ lụa óng vàng bằng xa xe tơ và khung cửi rồi truyền nghề cho dân.</option>
                        <option value="p2">Thiều Hoa nói chuyện với bướm nâu cánh mốc và phát hiện ra loài tằm ăn lá dâu nhả tơ.</option>
                    </select>
                </div>

                <!-- Tranh 3 -->
                <div class="p-5 bg-gray-50 border border-gray-200 rounded-3xl space-y-3">
                    <div class="flex items-center gap-2">
                        <span class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-sm">3</span>
                        <span class="font-black text-gray-800 text-base">Bức tranh số 3:</span>
                    </div>
                    <select id="sel-pic-3" class="w-full p-2.5 border border-gray-350 rounded-xl font-bold bg-white focus:outline-none focus:border-blue-500 text-sm">
                        <option value="">-- Chọn nội dung bức tranh --</option>
                        <option value="p3">Thiều Hoa nuôi tằm ăn dâu trong các nong lớn ven sông Hồng.</option>
                        <option value="p1">Vua Hùng thứ sáu cùng công chúa út Thiều Hoa hiền lành, yêu thiên nhiên đi dạo.</option>
                        <option value="p4">Công chúa dệt ra thứ lụa óng vàng bằng xa xe tơ và khung cửi rồi truyền nghề cho dân.</option>
                        <option value="p2">Thiều Hoa nói chuyện với bướm nâu cánh mốc và phát hiện ra loài tằm ăn lá dâu nhả tơ.</option>
                    </select>
                </div>

                <!-- Tranh 4 -->
                <div class="p-5 bg-gray-50 border border-gray-200 rounded-3xl space-y-3">
                    <div class="flex items-center gap-2">
                        <span class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-sm">4</span>
                        <span class="font-black text-gray-800 text-base">Bức tranh số 4:</span>
                    </div>
                    <select id="sel-pic-4" class="w-full p-2.5 border border-gray-350 rounded-xl font-bold bg-white focus:outline-none focus:border-blue-500 text-sm">
                        <option value="">-- Chọn nội dung bức tranh --</option>
                        <option value="p3">Thiều Hoa nuôi tằm ăn dâu trong các nong lớn ven sông Hồng.</option>
                        <option value="p1">Vua Hùng thứ sáu cùng công chúa út Thiều Hoa hiền lành, yêu thiên nhiên đi dạo.</option>
                        <option value="p4">Công chúa dệt ra thứ lụa óng vàng bằng xa xe tơ và khung cửi rồi truyền nghề cho dân.</option>
                        <option value="p2">Thiều Hoa nói chuyện với bướm nâu cánh mốc và phát hiện ra loài tằm ăn lá dâu nhả tơ.</option>
                    </select>
                </div>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="window.resetPicMatch241()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="window.checkPicMatch241();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-match-241" class="hidden p-4 rounded-xl font-bold text-lg mt-4 animate-in fade-in"></div>
        </section>

        <!-- 💡 Ý chính bài học -->
        <div class="bg-emerald-50/70 p-6 rounded-3xl border-l-8 border-emerald-500 shadow-md relative overflow-hidden">
            <div class="absolute -right-10 -top-10 w-24 h-24 bg-emerald-100/40 rounded-full blur-xl"></div>
            <h5 class="text-xl md:text-2xl font-black text-emerald-900 mb-2 flex items-center gap-2">
                <span>💡</span> Ý chính bài học
            </h5>
            <p class="text-emerald-800 text-lg md:text-xl font-bold leading-relaxed">
                Kể chuyện theo tranh giúp tái hiện lại cốt truyện một cách logic, tạo điểm tựa cảm xúc vững chắc trước khi bắt tay viết đoạn văn bộc lộ suy nghĩ về nhân vật lịch sử.
            </p>
        </div>
    </div>
    `,
    "practice": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-4xl mx-auto pb-12">
        
        <!-- ✍️ Hoạt động 2: Viết đoạn văn thể hiện tình cảm, cảm xúc -->
        <!-- Bài 2 -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-blue-100 space-y-6">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl">2</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Thực hành viết đoạn văn cảm xúc</h3>
            </div>
            <p class="text-gray-600 font-bold text-lg">Viết đoạn văn thể hiện tình cảm, cảm xúc của em về câu chuyện <em>Bà tổ nghề dệt lụa</em>:</p>

            <div class="bg-blue-50/30 p-6 rounded-3xl space-y-4">
                <div class="p-4 bg-white border border-blue-150 rounded-2xl space-y-2">
                    <p class="font-black text-blue-950 text-base">💡 Gợi ý dàn ý và từ ngữ biểu cảm:</p>
                    <ul class="text-sm font-bold text-gray-600 space-y-1 list-disc pl-5">
                        <li><strong>Mở đầu:</strong> Giới thiệu câu chuyện và ấn tượng ban đầu (vô cùng xúc động, tự hào...).</li>
                        <li><strong>Triển khai:</strong> Nêu những hành động, chi tiết yêu mến thiên nhiên của công chúa Thiều Hoa; lòng kiên trì và công ơn truyền nghề dệt lụa.</li>
                        <li><strong>Kết thúc:</strong> Khẳng định lại ý nghĩa câu chuyện và lòng biết ơn của em.</li>
                    </ul>
                </div>

                <textarea id="txt-feeling-241" rows="5" class="w-full p-4 border border-blue-200 rounded-xl font-medium focus:outline-none focus:border-blue-500 text-base serif-font" placeholder="Ví dụ: Đọc câu chuyện 'Bà tổ nghề dệt lụa', em vô cùng kính phục tấm lòng nhân hậu và sự sáng tạo của công chúa Thiều Hoa. Nàng không chỉ xinh đẹp mà còn kiên trì mang bướm nâu về nuôi, chế tạo guồng quay tơ để dệt nên những tấm lụa óng ả. Nhờ có công lao to lớn của nàng, người dân quê ta mới có nghề truyền thống quý báu..."></textarea>
                
                <div class="flex justify-end items-center gap-4"><button onclick="window.submitFeeling241();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-feeling-241" class="hidden p-4 rounded-xl font-bold text-lg"></div>
            </div>
        </section>

        <!-- ✍️ Hoạt động 3: Đọc soát chỉnh sửa đoạn văn -->
        <!-- Bài 3 -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-emerald-100 space-y-6">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-xl">3</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Chỉnh sửa đoạn văn theo góp ý</h3>
            </div>
            <p class="text-gray-600 font-bold text-lg">Tích chọn các bước soát lỗi em đã thực hiện để hoàn thiện bài viết:</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-2xl cursor-pointer hover:bg-emerald-50 transition-colors">
                    <input type="checkbox" id="chk-241-step-1" class="w-6 h-6 border-2 border-emerald-500 rounded text-emerald-600 mt-1 shrink-0">
                    <span class="font-bold text-gray-700 text-base md:text-lg">Đoạn văn đúng chủ đề cảm xúc về câu chuyện.</span>
                </label>

                <label class="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-2xl cursor-pointer hover:bg-emerald-50 transition-colors">
                    <input type="checkbox" id="chk-241-step-2" class="w-6 h-6 border-2 border-emerald-500 rounded text-emerald-600 mt-1 shrink-0">
                    <span class="font-bold text-gray-700 text-base md:text-lg">Sử dụng từ ngữ biểu cảm tự nhiên, không gượng ép.</span>
                </label>

                <label class="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-2xl cursor-pointer hover:bg-emerald-50 transition-colors">
                    <input type="checkbox" id="chk-241-step-3" class="w-6 h-6 border-2 border-emerald-500 rounded text-emerald-600 mt-1 shrink-0">
                    <span class="font-bold text-gray-700 text-base md:text-lg">Các câu liên kết mạch lạc bằng phép lặp/nối/thế.</span>
                </label>

                <label class="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-2xl cursor-pointer hover:bg-emerald-50 transition-colors">
                    <input type="checkbox" id="chk-241-step-4" class="w-6 h-6 border-2 border-emerald-500 rounded text-emerald-600 mt-1 shrink-0">
                    <span class="font-bold text-gray-700 text-base md:text-lg">Không mắc lỗi chính tả, đặt câu chính xác.</span>
                </label>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="window.submitEdit241();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-edit-241" class="hidden p-4 rounded-xl font-bold text-lg"></div>
        </section>
    </div>
    `,
    "quizPool": [
        {
            "question": "Nội dung chính của bức tranh số 1 trong câu chuyện 'Bà tổ nghề dệt lụa' là gì?",
            "options": [
                "Công chúa Thiều Hoa đang cho tằm ăn lá dâu trong nong",
                "Vua Hùng thứ sáu đi dạo bên bờ sông cùng công chúa Thiều Hoa hiền hậu",
                "Công chúa đang quay tơ bên khung cửi lớn",
                "Công chúa đang đuổi bắt bướm nâu ở vườn hoa"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nội dung chính của bức tranh số 2 là gì?",
            "options": [
                "Công chúa phát hiện ra tằm nhờ chú bướm nâu hiền lành đậu một chỗ trong rừng",
                "Công chúa Thiều Hoa được chim chóc dạy hát",
                "Công chúa dâng tặng vua cha tấm lụa óng vàng đầu tiên",
                "Công chúa đem bướm nâu tặng cho người dân"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nội dung chính của bức tranh số 3 là gì?",
            "options": [
                "Vua cha khen ngợi sáng kiến dệt vải lụa",
                "Công chúa Thiều Hoa mang sâu tằm về nuôi, cho tằm ăn lá dâu làm kén",
                "Công chúa Thiều Hoa dạy các cô gái dệt vải",
                "Cảnh bướm nâu bay lượn trên đồng cỏ ven sông Hồng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nội dung chính của bức tranh số 4 là gì?",
            "options": [
                "Cảnh Vua Hùng dắt công chúa Thiều Hoa đi dạo",
                "Công chúa dệt ra vải lụa mỏng óng vàng từ khung cửi và truyền nghề cho dân",
                "Hội thi múa của hàng trăm loài bướm đẹp sặc sỡ",
                "Sâu tằm ăn lá dâu nhả tơ vàng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đoạn văn thể hiện tình cảm, cảm xúc của em về câu chuyện thuộc thể loại nào?",
            "options": [
                "Đoạn văn tả phong cảnh",
                "Đoạn văn biểu cảm (nêu tình cảm, cảm xúc về tác phẩm văn học)",
                "Đoạn văn giới thiệu nhân vật phim hoạt hình",
                "Đoạn văn thuyết minh giới thiệu guồng quay tơ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Phần mở đầu của đoạn văn nêu cảm xúc về câu chuyện cần đảm bảo yêu cầu nào?",
            "options": [
                "Tóm tắt toàn bộ từ đầu đến cuối câu chuyện",
                "Giới thiệu tên câu chuyện và bộc lộ cảm xúc chung nhất về tác phẩm",
                "Đưa ra các lời nhận xét chuyên môn về tác giả",
                "Mô tả chi tiết kỹ thuật dệt lụa tơ tằm"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ ngữ nào dưới đây phù hợp nhất để bộc lộ cảm xúc phục quý, yêu mến nhân vật Thiều Hoa?",
            "options": [
                "Kính trọng, khâm phục, biết ơn sâu sắc",
                "Bình thường, tạm được",
                "Kính sợ, run rẩy",
                "Tương đối thú vị"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tại sao việc kể chuyện theo tranh trước khi viết cảm nghĩ lại rất hữu ích?",
            "options": [
                "Giúp học sinh vẽ tranh đẹp hơn",
                "Giúp khắc sâu cốt truyện, nắm vững diễn biến tâm lý nhân vật để viết cảm nghĩ chân thực",
                "Để bài học dài ra thêm 1 tiết",
                "Để tránh việc phải đọc lại văn bản truyện"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Một lỗi phổ biến về dùng từ biểu cảm trong đoạn văn học sinh là gì?",
            "options": [
                "Sử dụng từ ngữ đúng văn cảnh",
                "Dùng từ ngữ sáo rỗng, quá cường điệu hoặc lặp đi lặp lại một từ duy nhất",
                "Đặt câu đầy đủ chủ ngữ - vị ngữ",
                "Liên kết câu bằng phép lặp từ ngữ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đoạn văn cảm xúc đạt yêu cầu cần có yếu tố nào sau đây?",
            "options": [
                "Viết lộn xộn các ý không cần liên kết",
                "Các câu văn được sắp xếp hợp lý và liên kết chặt chẽ bằng các phép liên kết",
                "Xuống dòng liên tục sau mỗi câu viết",
                "Không cần viết hoa chữ cái đầu đoạn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Chi tiết nào thể hiện lòng nhân hậu sâu sắc nhất của công chúa Thiều Hoa?",
            "options": [
                "Nàng rất xinh đẹp và dịu dàng",
                "Nàng yêu thương muôn loài, từ cây cỏ đến con chim con thú nhỏ",
                "Nàng đi dự hội thi múa của họ bướm",
                "Nàng gọi thứ vải dệt từ tơ tằm là lụa"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Truyền thuyết 'Bà tổ nghề dệt lụa' nhằm giải thích điều gì trong thực tế?",
            "options": [
                "Sự hình thành bãi dâu ven sông Hồng",
                "Nguồn gốc lịch sử tốt đẹp của nghề nuôi tằm dệt lụa truyền thống của dân tộc ta",
                "Tính cách của các vị công chúa thời xưa",
                "Quá trình tiến hóa của loài sâu tằm"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Thái độ của em đối với nghề dệt lụa truyền thống của quê hương là gì?",
            "options": [
                "Thờ ơ vì hiện nay có nhiều loại vải hiện đại khác",
                "Trân trọng, tự hào và có ý thức giữ gìn, giới thiệu làng nghề truyền thống",
                "Chê bai vì đây là nghề thô sơ thủ công cũ kỹ",
                "Không quan tâm"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi bạn học góp ý bài viết của em bị lặp từ quá nhiều, em cần làm thế nào?",
            "options": [
                "Giận dỗi bạn và giữ nguyên bài",
                "Tìm các từ đồng nghĩa/gần nghĩa để thay thế bớt những từ lặp không cần thiết",
                "Xóa câu bị lặp từ đi",
                "Xé bài viết viết lại từ đầu"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ nào sau đây đồng nghĩa với từ 'nhân hậu'?",
            "options": [
                "Hiền từ, nhân ái",
                "Gan góc, dũng cảm",
                "Thông minh, nhanh nhẹn",
                "Kính cẩn, lễ phép"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// Đăng ký các tương tác toàn cục
window.checkPicMatch241 = function() {
    const p1 = document.getElementById('sel-pic-1').value;
    const p2 = document.getElementById('sel-pic-2').value;
    const p3 = document.getElementById('sel-pic-3').value;
    const p4 = document.getElementById('sel-pic-4').value;
    const fb = document.getElementById('fb-match-241');
    fb.classList.remove('hidden');

    if (!p1 || !p2 || !p3 || !p4) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-850 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em hãy chọn nội dung đầy đủ cho cả 4 bức tranh nhé!";
        return;
    }

    if (p1 === 'p1' && p2 === 'p2' && p3 === 'p3' && p4 === 'p4') {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
        fb.innerHTML = "🌟 Chúc mừng em! Em đã nối đúng 100% nội dung của cả 4 bức tranh. Cốt truyện đã được tái hiện rất mạch lạc.";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
        if (typeof window.submitMathLesson === 'function') {
            window.submitMathLesson("Tiếng Việt Tiết 241: Ghép tranh kể chuyện dệt lụa", 100, "ex-241-match", 1, 1, 1);
        }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-800 border border-red-200 mt-4";
        fb.innerHTML = "❌ Còn bức tranh ghép nối chưa đúng thứ tự câu chuyện. Em hãy đọc kỹ và thử chọn lại nhé!";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

window.resetPicMatch241 = function() {
    document.getElementById('sel-pic-1').value = "";
    document.getElementById('sel-pic-2').value = "";
    document.getElementById('sel-pic-3').value = "";
    document.getElementById('sel-pic-4').value = "";
    const fb = document.getElementById('fb-match-241');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};

window.submitFeeling241 = function() {
    const text = document.getElementById('txt-feeling-241').value.trim();
    const fb = document.getElementById('fb-feeling-241');
    fb.classList.remove('hidden');

    if (text.length < 15) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-850 border border-orange-200 mt-2";
        fb.innerHTML = "⚠️ Em hãy viết đoạn văn cảm nghĩ chi tiết hơn một chút nhé!";
        return;
    }

    fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-2";
    fb.innerHTML = "🌟 Tuyệt vời! Đoạn văn bộc lộ cảm xúc của em rất hay, trân trọng đức tính tốt đẹp của Thiều Hoa công chúa và ý nghĩa làng nghề truyền thống. Hãy tiến hành đọc soát lỗi ở phần tiếp theo nhé!";
    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    if (typeof window.submitMathLesson === 'function') {
        window.submitMathLesson("Tiếng Việt Tiết 241: Viết đoạn văn cảm nghĩ dệt lụa", 100, "txt-feeling-241", 1, 1, 1);
    }
};

window.submitEdit241 = function() {
    const c1 = document.getElementById('chk-241-step-1').checked;
    const c2 = document.getElementById('chk-241-step-2').checked;
    const c3 = document.getElementById('chk-241-step-3').checked;
    const c4 = document.getElementById('chk-241-step-4').checked;
    const fb = document.getElementById('fb-edit-241');
    fb.classList.remove('hidden');

    if (!c1 || !c2 || !c3 || !c4) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-850 border border-orange-200 mt-2";
        fb.innerHTML = "⚠️ Em hãy hoàn thành soát đầy đủ cả 4 bước tự đánh giá bài viết nhé!";
        return;
    }

    fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-2";
    fb.innerHTML = "🌟 Rất tốt! Em đã kiểm soát bài viết rất nghiêm túc và có ý thức tự sửa lỗi để bài làm hoàn hảo hơn. Chúc mừng em!";
    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    if (typeof window.submitMathLesson === 'function') {
        window.submitMathLesson("Tiếng Việt Tiết 241: Hoàn tất đọc soát sửa lỗi", 100, "fb-edit-241", 1, 1, 1);
    }
};

// Đăng ký bài học toàn cục
window.lesson241 = lesson241;
