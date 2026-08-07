export const lesson90 = {
    "topic": "Tiếng Việt 5",
    "week": "13",
    "period": "90",
    "title": "VIẾT: ĐÁNH GIÁ, CHỈNH SỬA ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ MỘT CÂU CHUYỆN",
    "desc": "Tiết học giúp học sinh rèn luyện năng lực tự đánh giá, nhận xét bài viết của mình và của bạn; đồng thời biết chỉnh sửa lỗi chính tả, lỗi dùng từ, diễn đạt để câu văn sinh động, giàu cảm xúc hơn.",
    "subject": "Viết",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-blue-600 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-blue-600 font-bold text-lg md:text-xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết tự đọc soát và đánh giá bài viết của mình dựa trên các tiêu chí cụ thể của đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Phát hiện và tự sửa được các lỗi về chính tả, dùng từ, viết câu và liên kết câu trong bài viết.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Học tập ưu điểm của bạn, biết viết lại các câu văn chưa hay thành những câu văn sinh động, giàu hình ảnh và gây xúc động.
            </li>
        </ul>
    </div>

    <!-- 🚀 Khởi động: Tiêu chí đoạn văn hay -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <h3 class="text-2xl md:text-3xl font-black text-blue-600 border-b border-blue-100 pb-4 flex items-center gap-3">
            <span class="text-xl md:text-3xl">🚀</span>
            Khởi động: Nhận diện tiêu chí đánh giá
        </h3>
        <p class="text-lg text-gray-700 font-bold leading-relaxed">
            Trước khi bắt đầu rà soát bài viết của mình, em hãy cùng Thầy E nhớ lại những điều cần có ở một đoạn văn cảm xúc xuất sắc nhé. Hãy tích chọn những tiêu chí mà em cho là đúng:
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto pt-2">
            <label class="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer hover:bg-blue-50/50 transition-all">
                <input type="checkbox" id="vn90-start-c1" class="w-5 h-5 text-blue-600 focus:ring-blue-500 rounded mt-1">
                <span class="text-base font-bold text-gray-700">Đoạn văn nêu rõ tên câu chuyện, tên nhân vật hoặc chi tiết mang lại cảm xúc.</span>
            </label>
            <label class="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer hover:bg-blue-50/50 transition-all">
                <input type="checkbox" id="vn90-start-c2" class="w-5 h-5 text-blue-600 focus:ring-blue-500 rounded mt-1">
                <span class="text-base font-bold text-gray-700">Đoạn văn kể lại toàn bộ từ đầu đến cuối câu chuyện một cách chi tiết.</span>
            </label>
            <label class="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer hover:bg-blue-50/50 transition-all">
                <input type="checkbox" id="vn90-start-c3" class="w-5 h-5 text-blue-600 focus:ring-blue-500 rounded mt-1">
                <span class="text-base font-bold text-gray-700">Thể hiện được tình cảm, cảm xúc sâu sắc, chân thành của người viết dành cho nhân vật/câu chuyện.</span>
            </label>
            <label class="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer hover:bg-blue-50/50 transition-all">
                <input type="checkbox" id="vn90-start-c4" class="w-5 h-5 text-blue-600 focus:ring-blue-500 rounded mt-1">
                <span class="text-base font-bold text-gray-700">Các câu văn liên kết mạch lạc, trình bày rõ ràng và hạn chế tối đa lỗi chính tả.</span>
            </label>
        </div>

        <div class="flex justify-end items-center gap-4"><button onclick="checkStartVn90();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
        <div id="fb-start-90" class="hidden p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner"></div>
    </div>

    <!-- 📊 HOẠT ĐỘNG 1 & 2: BẢNG KIỂM TỰ ĐÁNH GIÁ -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <h3 class="text-2xl md:text-3xl font-black text-blue-600 border-b border-blue-100 pb-4 flex items-center gap-3">
            <span class="text-xl md:text-3xl">📋</span>
            Bảng kiểm tự đánh giá bài viết
        </h3>
        <p class="text-lg text-gray-700 font-bold leading-relaxed">
            Học sinh tự đọc lại bài viết của mình hoặc trao đổi chéo với bạn để thực hiện tích chọn đánh giá theo các tiêu chí kiểm duyệt dưới đây:
        </p>

        <div class="max-w-4xl mx-auto space-y-6">
            <!-- Nhóm tiêu chí 1 -->
            <div class="bg-blue-50/50 p-6 rounded-3xl border border-blue-100 space-y-4">
                <span class="text-sm font-black text-blue-600 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">Tiêu chí 1: Nội dung & Cảm xúc</span>
                <div class="space-y-3">
                    <label class="flex items-center gap-3 p-3 bg-white rounded-xl border border-blue-50 cursor-pointer shadow-sm">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 focus:ring-blue-500 rounded">
                        <span class="text-base font-bold text-gray-700">Đã nêu rõ tên câu chuyện định bày tỏ cảm xúc.</span>
                    </label>
                    <label class="flex items-center gap-3 p-3 bg-white rounded-xl border border-blue-50 cursor-pointer shadow-sm">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 focus:ring-blue-500 rounded">
                        <span class="text-base font-bold text-gray-700">Chỉ ra được những chi tiết hoặc nhân vật yêu thích nhất trong truyện.</span>
                    </label>
                    <label class="flex items-center gap-3 p-3 bg-white rounded-xl border border-blue-50 cursor-pointer shadow-sm">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 focus:ring-blue-500 rounded">
                        <span class="text-base font-bold text-gray-700">Thể hiện cảm xúc chân thành, tự nhiên (không gượng ép, sáo rỗng).</span>
                    </label>
                </div>
            </div>

            <!-- Nhóm tiêu chí 2 -->
            <div class="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100 space-y-4">
                <span class="text-sm font-black text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">Tiêu chí 2: Hình thức & Kỹ năng diễn đạt</span>
                <div class="space-y-3">
                    <label class="flex items-center gap-3 p-3 bg-white rounded-xl border border-emerald-50 cursor-pointer shadow-sm">
                        <input type="checkbox" class="w-5 h-5 text-emerald-600 focus:ring-emerald-500 rounded">
                        <span class="text-base font-bold text-gray-700">Các câu văn mạch lạc, có sự liên kết chặt chẽ bằng các từ ngữ thích hợp.</span>
                    </label>
                    <label class="flex items-center gap-3 p-3 bg-white rounded-xl border border-emerald-50 cursor-pointer shadow-sm">
                        <input type="checkbox" class="w-5 h-5 text-emerald-600 focus:ring-emerald-500 rounded">
                        <span class="text-base font-bold text-gray-700">Có sử dụng một số câu văn hay, giàu hình ảnh hoặc gây ấn tượng mạnh.</span>
                    </label>
                    <label class="flex items-center gap-3 p-3 bg-white rounded-xl border border-emerald-50 cursor-pointer shadow-sm">
                        <input type="checkbox" class="w-5 h-5 text-emerald-600 focus:ring-emerald-500 rounded">
                        <span class="text-base font-bold text-gray-700">Không bị mắc lỗi chính tả, lỗi dùng từ hoặc lặp từ vô lý.</span>
                    </label>
                </div>
            </div>
        </div>
    </div>

    <!-- 💡 HOẠT ĐỘNG 3: THAM KHẢO VĂN MẪU & SỬA LỖI -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <h3 class="text-2xl md:text-3xl font-black text-blue-600 border-b border-blue-100 pb-4 flex items-center gap-3">
            <span class="text-xl md:text-3xl">🖋️</span>
            Góc tham khảo & Sửa lỗi câu văn
        </h3>
        
        <!-- Đoạn văn của Gia Bách -->
        <div class="space-y-4 max-w-4xl mx-auto">
            <h4 class="text-lg font-black text-gray-800">🌟 Tham khảo đoạn văn xuất sắc của bạn Gia Bách:</h4>
            <div class="bg-gradient-to-br from-amber-50 to-orange-50/50 p-6 md:p-8 rounded-[32px] border-2 border-dashed border-amber-200 relative shadow-inner">
                <div class="absolute right-4 bottom-4 w-12 h-12 bg-amber-100/50 rounded-full flex items-center justify-center text-lg md:text-2xl">🖋️</div>
                <p class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed text-justify indent-10">
                    "Câu chuyện <strong class="text-amber-800 font-black">Dế Mèn phiêu lưu kí</strong> mang đến cho tôi nhiều cảm xúc khó quên. Tôi đã lo lắng, đã hồi hộp, đã khóc, cười theo từng bước chân của chú dế. Gấp trang sách lại, tôi vẫn hình dung ra hình ảnh một chú Dế Mèn vốn kiêu căng, thiếu chín chắn đã dần trưởng thành mỗi ngày."
                </p>
                
            </div>
        </div>

        <!-- Trắc nghiệm thực hành sửa lỗi trực tiếp -->
        <div class="space-y-4 border-t border-blue-50 pt-6">
            <h4 class="text-lg font-black text-gray-800">🛠️ Thực hành sửa lỗi câu văn chưa hay:</h4>
            
            <div class="space-y-6 max-w-4xl mx-auto pt-2">
                <!-- Câu lỗi 1 -->
                <div class="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-3">
                    <span class="text-xs font-black text-red-600 bg-red-100 px-2 py-0.5 rounded uppercase">Câu văn chưa đạt:</span>
                    <p class="text-lg font-bold text-gray-800">"Truyện này đọc cũng được, tớ thấy thích tính cách của nhân vật chính."</p>
                    <span class="text-xs font-black text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded uppercase">Hãy chọn câu văn chỉnh sửa hay hơn:</span>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 text-base font-bold text-gray-700 cursor-pointer">
                            <input type="radio" name="vn90-edit-c1" value="A" class="w-4 h-4 text-blue-600">
                            <span>"Truyện này tớ đọc thấy bình thường, nhân vật chính tạm ổn."</span>
                        </label>
                        <label class="flex items-center gap-2 text-base font-bold text-gray-700 cursor-pointer">
                            <input type="radio" name="vn90-edit-c1" value="B" class="w-4 h-4 text-blue-600">
                            <span>"Tác phẩm đã để lại trong lòng tôi những ấn tượng sâu sắc, đặc biệt là hành trình khôn lớn vô cùng xúc động của chú Dế Mèn."</span>
                        </label>
                    </div>
                </div>

                <!-- Câu lỗi 2 -->
                <div class="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-3">
                    <span class="text-xs font-black text-red-600 bg-red-100 px-2 py-0.5 rounded uppercase">Câu văn chưa đạt (Lặp từ):</span>
                    <p class="text-lg font-bold text-gray-800">"Khi Dế Mèn đi phiêu lưu thì Dế Mèn gặp rất nhiều nguy hiểm và Dế Mèn đã học được nhiều bài học hay."</p>
                    <span class="text-xs font-black text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded uppercase">Hãy chọn câu văn chỉnh sửa hay hơn:</span>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 text-base font-bold text-gray-700 cursor-pointer">
                            <input type="radio" name="vn90-edit-c2" value="A" class="w-4 h-4 text-blue-600">
                            <span>"Bước vào những chặng đường phiêu lưu đầy thử thách, chú dế đã dần can đảm và tốt bụng hơn nhờ tích lũy những bài học đắt giá."</span>
                        </label>
                        <label class="flex items-center gap-2 text-base font-bold text-gray-700 cursor-pointer">
                            <input type="radio" name="vn90-edit-c2" value="B" class="w-4 h-4 text-blue-600">
                            <span>"Dế Mèn đi khắp nơi, chú dế mèn bị gặp nguy rồi dế mèn lại vượt qua để khôn lớn."</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="checkEditsVn90();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-edits-90" class="hidden p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner"></div>
        </div>
    </div>

    <!-- 📝 THỰC HÀNH VIẾT LẠI & AI CHẤM ĐIỂM -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <h3 class="text-2xl md:text-3xl font-black text-blue-600 border-b border-blue-100 pb-4 flex items-center gap-3">
            <span class="text-xl md:text-3xl">🎓</span>
            Khung thực hành chỉnh sửa đoạn văn
        </h3>
        <p class="text-lg text-gray-700 font-bold leading-relaxed">
            Em hãy dán hoặc tự nhập đoạn văn của mình sau khi đã rà soát và chỉnh sửa theo bảng kiểm vào đây. AI Thầy E sẽ nhận xét và chấm điểm xem bài viết mới của em đã hay hơn chưa nhé:
        </p>

        <div class="space-y-4 max-w-4xl mx-auto pt-2">
            <textarea id="vn90-essay-input" rows="5" placeholder="Nhập đoạn văn đã chỉnh sửa của em vào đây (tối thiểu 3 câu)... Gợi ý: Nêu rõ tên truyện, chi tiết yêu thích, tình cảm cảm xúc của em và từ ngữ gợi cảm..." class="w-full p-4 border-2 border-blue-100 rounded-3xl outline-none focus:border-blue-500 font-bold bg-blue-50/10 text-lg md:text-xl shadow-inner"></textarea>
            
            <div class="flex justify-end items-center gap-4"><button onclick="resetVn90()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="checkWritingVn90();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="vn90-essay-fb" class="hidden p-5 rounded-3xl border-2 font-bold text-lg text-center shadow-lg transition-all"></div>
        </div>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Mục đích chính của việc học sinh tự đọc soát và chỉnh sửa bài viết của mình là gì?",
            "options": [
                "Để phát hiện và sửa các lỗi về chính tả, dùng từ, viết câu, giúp bài viết hay hơn",
                "Để chép lại nguyên văn bài viết của các bạn học sinh khác",
                "Để rút ngắn thời gian làm bài trên lớp",
                "Để bài viết dài ra thêm nhiều trang giấy"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Câu văn nào dưới đây mắc lỗi lặp từ trầm trọng?",
            "options": [
                "Câu chuyện mang đến cho em những bài học bổ ích về tình bạn chân thành.",
                "Em rất thích truyện này vì truyện này kể rất hay về cuộc phiêu lưu của một chú dế rất vui vẻ.",
                "Hành trình trưởng thành của nhân vật đã giúp em nhận ra giá trị của sự khiêm tốn.",
                "Đọc xong đoạn trích, lòng tôi ngập tràn cảm xúc tự hào và xúc động."
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Để viết câu văn thể hiện tình cảm sinh động hơn, em nên làm gì?",
            "options": [
                "Dùng thêm các từ ngữ gợi tả cảm xúc và các động từ mạnh biểu lộ tâm trạng",
                "Viết câu thật ngắn và không dùng bất kỳ tính từ nào",
                "Hạn chế sử dụng tên nhân vật hoặc tên tác phẩm trong câu",
                "Lặp lại nhiều lần cụm từ 'em thấy rất hay'"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong câu văn tham khảo của Gia Bách: 'Gấp trang sách lại, tôi vẫn hình dung ra...', từ nào là động từ thể hiện cảm xúc suy nghĩ?",
            "options": [
                "hình dung",
                "trang sách",
                "Dế Mèn",
                "kiêu căng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Đáp án nào dưới đây là một trong những tiêu chí quan trọng khi đánh giá một đoạn văn cảm thụ văn học?",
            "options": [
                "Nêu rõ tên câu chuyện, chi tiết ấn tượng và bày tỏ cảm xúc chân thành, liên kết mạch lạc",
                "Kể lại toàn bộ cốt truyện và các nhân vật phụ từ đầu đến cuối câu chuyện",
                "Phải viết đúng 100 câu văn không thiếu một câu nào",
                "Đoạn văn phải sử dụng nhiều thứ tiếng nước ngoài khác nhau"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Câu văn nào sau đây đã sửa lỗi diễn đạt tốt nhất cho câu: 'Tớ thấy Dế Mèn rất kiêu căng'?",
            "options": [
                "Dế Mèn lúc đầu có tính cách kiêu ngạo, kiêu căng và hống hách.",
                "Hình ảnh một chú Dế Mèn vốn kiêu căng, thiếu chín chắn lúc ban đầu đã giúp em nhận ra bài học sâu sắc về sự khiêm nhường.",
                "Nhân vật chính là chú Dế Mèn và tính cách chú là kiêu căng cực kỳ.",
                "Truyện viết về chú Dế Mèn kiêu căng hách dịch lắm."
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Khi trao đổi chéo bài viết với bạn bè, chúng ta nên hướng tới điều gì?",
            "options": [
                "Chỉ trích và chê bai tất cả các lỗi sai của bạn để bạn bị điểm kém",
                "Học tập những ưu điểm của nhau và góp ý chân thành giúp bạn sửa lỗi",
                "Chép lại toàn bộ bài viết của bạn vào vở của mình",
                "Không cần đọc bài của bạn và ký tên xác nhận hoàn thành luôn"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ 'kiêu căng' trong bài viết của Gia Bách mang sắc thái ý nghĩa như thế nào?",
            "options": [
                "Chỉ thói ngạo mạn, tự cho mình là hơn người và coi thường người khác",
                "Chỉ tinh thần dũng cảm, luôn trượng nghĩa giúp đỡ mọi người",
                "Chỉ tính tình nhút nhát, e sợ thế giới xung quanh",
                "Chỉ tính chăm chỉ học hỏi và tích lũy kiến thức mỗi ngày"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Việc liên kết các câu văn mạch lạc trong đoạn văn giúp ích gì cho người đọc?",
            "options": [
                "Làm cho người đọc dễ theo dõi mạch cảm xúc và nội dung người viết truyền tải",
                "Làm cho đoạn văn dài ra gấp đôi",
                "Làm cho người đọc cảm thấy khó hiểu và hồi hộp hơn",
                "Không có tác dụng gì cụ thể"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Câu văn: 'Tôi đã lo lắng, đã hồi hộp, đã khóc, cười theo từng bước chân của chú dế.' sử dụng biện pháp nghệ thuật gì?",
            "options": [
                "Điệp từ và liệt kê các trạng thái cảm xúc",
                "So sánh nhân vật với các con vật khác",
                "Ẩn dụ chuyển đổi cảm giác sâu sắc",
                "Nói quá lên để phóng đại sự thật"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Lỗi chính tả phổ biến nào học sinh thường mắc phải khi viết tên tác phẩm?",
            "options": [
                "Không viết hoa chữ cái đầu và không đặt tên tác phẩm trong dấu ngoặc kép hoặc in nghiêng",
                "Viết chữ in hoa toàn bộ các từ trong đoạn văn",
                "Không ghi tên nhà xuất bản tác phẩm",
                "Đặt tên tác phẩm ở cuối đoạn văn"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Câu văn nào dưới đây có cách diễn đạt tự nhiên và giàu cảm xúc nhất?",
            "options": [
                "Bài thơ này em đọc thấy cũng tạm được.",
                "Gấp trang sách lại, lòng tôi vẫn bâng khuâng nhớ mãi hình ảnh cánh buồm trắng xa xôi trong nắng chiều.",
                "Tác giả viết bài văn này rất là dài dòng và khó hiểu quá đi.",
                "Tính cách nhân vật chính rất tốt và em thích tính tốt đó."
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ biểu cảm nào dưới đây phù hợp nhất để điền vào câu: 'Hành trình trưởng thành của chú dế mang lại cho tôi nhiều cảm xúc...'?",
            "options": [
                "khó quên",
                "bình thường",
                "tạm ổn",
                "nhanh chóng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Để liên kết hai câu văn thể hiện sự đối lập, em nên dùng từ nối nào?",
            "options": [
                "Tuy nhiên",
                "Hơn nữa",
                "Đồng thời",
                "Vì vậy"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi viết đoạn văn thể hiện tình cảm về một câu chuyện, chúng ta có cần viết phần mở đầu giới thiệu câu chuyện đó không?",
            "options": [
                "Rất cần, để giới thiệu cho người đọc biết mình đang bày tỏ cảm xúc về tác phẩm nào",
                "Không cần, viết thẳng vào cảm xúc luôn để tiết kiệm giấy",
                "Chỉ cần viết khi giáo viên yêu cầu bắt buộc",
                "Không nên viết vì sẽ làm loãng mạch văn"
            ],
            "answer": 0,
            "level": 0
        }
    ]
};

// ====== INTERACTIVE SCRIPT ======
window.checkStartVn90 = function() {
    const c1 = document.getElementById('vn90-start-c1').checked;
    const c2 = document.getElementById('vn90-start-c2').checked;
    const c3 = document.getElementById('vn90-start-c3').checked;
    const c4 = document.getElementById('vn90-start-c4').checked;
    const fb = document.getElementById('fb-start-90');
    
    fb.classList.remove('hidden', 'bg-red-100', 'text-red-800', 'bg-green-100', 'text-green-800');
    
    // Đúng: c1, c3, c4. Sai: c2 (không được kể lại chi tiết cốt truyện từ đầu đến cuối vì đây là đoạn văn biểu cảm, tránh sa đà kể lể).
    if (c1 && !c2 && c3 && c4) {
        fb.innerHTML = '🎉 Tuyệt vời! Em đã chọn rất chính xác các tiêu chí của một đoạn văn biểu cảm hay. Nhớ rằng chúng ta không đi kể lể chi tiết câu chuyện nhé!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-green-100 text-green-800 border-2 border-green-300 animate-fade-in';
    } else {
        fb.innerHTML = '⚠️ Chọn chưa đúng rồi. Hãy nhớ lại: Đoạn văn biểu cảm cần tập trung nêu cảm xúc, không đi kể lại chi tiết toàn bộ câu chuyện. Hãy chọn lại nhé!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-red-100 text-red-800 border-2 border-red-300 animate-fade-in';
    }
};

window.checkEditsVn90 = function() {
    const edit1 = document.querySelector('input[name="vn90-edit-c1"]:checked');
    const edit2 = document.querySelector('input[name="vn90-edit-c2"]:checked');
    const fb = document.getElementById('fb-edits-90');
    
    if (!edit1 || !edit2) {
        alert('Em hãy làm đầy đủ cả 2 câu sửa lỗi văn nhé!');
        return;
    }
    
    fb.classList.remove('hidden', 'bg-red-100', 'text-red-800', 'bg-green-100', 'text-green-800');
    
    if (edit1.value === 'B' && edit2.value === 'A') {
        fb.innerHTML = '🎉 Rất xuất sắc! Em đã lựa chọn được những câu văn sửa lỗi tối ưu, từ ngữ biểu cảm phong phú và không bị lặp từ.';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-green-100 text-green-800 border-2 border-green-300';
    } else {
        fb.innerHTML = '⚠️ Chưa đúng rồi, em hãy ưu tiên những câu văn dùng từ ngữ gợi cảm xúc và tránh lặp từ nhiều lần nhé!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-red-100 text-red-800 border-2 border-red-300';
    }
};

window.checkWritingVn90 = function() {
    const text = document.getElementById('vn90-essay-input').value.trim();
    const fb = document.getElementById('vn90-essay-fb');
    
    if (!text) {
        alert('Em hãy nhập đoạn văn đã chỉnh sửa của mình trước khi nộp bài cho Thầy E chấm nhé!');
        return;
    }
    
    fb.classList.remove('hidden', 'bg-amber-50', 'text-amber-800', 'border-amber-200', 'bg-emerald-50', 'text-emerald-800', 'border-emerald-200');
    
    const sentenceCount = text.split(/[.!?]+/).filter(s => s.trim().length > 5).length;
    const keywords = ["dế mèn", "phiêu lưu", "tác giả", "cảm xúc", "ấn tượng", "bài học", "tình bạn", "nhân vật", "truyện"];
    const matchedKeywords = keywords.filter(kw => text.toLowerCase().includes(kw));
    
    let score = 50;
    let comment = "";
    
    if (sentenceCount >= 3) {
        score += 20;
    } else {
        comment += "Đoạn văn hơi ngắn (em nên viết tối thiểu 3 câu). ";
    }
    
    if (matchedKeywords.length >= 2) {
        score += 30;
    } else {
        score += matchedKeywords.length * 15;
        comment += "Em nên đưa vào các từ gợi cảm xúc hoặc nhắc trực tiếp đến tên tác phẩm/nhân vật để đoạn văn có điểm nhấn. ";
    }
    
    score = Math.min(score, 100);
    
    if (score >= 80) {
        fb.innerHTML = `🌟 **Điểm đạt được: ${score}/100**<br><br>
        **Lời nhận xét từ Thầy E:** Tuyệt vời! Đoạn văn đã chỉnh sửa của em diễn đạt mạch lạc, giàu tình cảm cảm xúc và liên kết câu rất chặt chẽ. ${comment} Hãy tiếp tục phát huy khả năng viết văn của mình nhé!`;
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg mt-2 shadow-lg bg-emerald-50 border-emerald-300 text-emerald-800 animate-fade-in';
    } else {
        fb.innerHTML = `⚠️ **Điểm đạt được: ${score}/100**<br><br>
        **Lời nhận xét từ Thầy E:** Bài viết có cố gắng nhưng cần điều chỉnh từ ngữ sinh động hơn. ${comment} Em hãy sửa lại và ấn nút Chấm điểm lại nhé!`;
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg mt-2 shadow-lg bg-amber-50 border-amber-300 text-amber-800 animate-fade-in';
    }
};

window.resetVn90 = function() {
    document.getElementById('vn90-essay-input').value = "";
    document.getElementById('vn90-essay-fb').classList.add('hidden');
    
    document.getElementById('vn90-start-c1').checked = false;
    document.getElementById('vn90-start-c2').checked = false;
    document.getElementById('vn90-start-c3').checked = false;
    document.getElementById('vn90-start-c4').checked = false;
    document.getElementById('fb-start-90').classList.add('hidden');
    
    const r1 = document.getElementsByName('vn90-edit-c1');
    r1.forEach(r => r.checked = false);
    const r2 = document.getElementsByName('vn90-edit-c2');
    r2.forEach(r => r.checked = false);
    document.getElementById('fb-edits-90').classList.add('hidden');
    
    // Bỏ check tất cả checkbox tự đánh giá
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    checkBoxes.forEach(c => c.checked = false);
    
    alert('Đã đặt lại toàn bộ bài viết để em thực hành lại!');
};
