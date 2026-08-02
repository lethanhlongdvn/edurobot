// Tiết 216: Viết: Luyện viết bài văn tả phong cảnh
export const lesson216 = {
    "topic": "Tiếng Việt 5",
    "week": "31",
    "period": "216",
    "title": "VIẾT: LUYỆN VIẾT BÀI VĂN TẢ PHONG CẢNH",
    "desc": "Thực hành viết bài văn tả cảnh đẹp thiên nhiên hoàn chỉnh dựa trên dàn ý đã lập, áp dụng các biện pháp so sánh, nhân hóa và lựa chọn từ ngữ gợi tả sinh động.",
    "subject": "Viết",
    "theme": "Vì cuộc sống thanh bình",
    "audio": "",
    "content": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto pb-12">
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
                    Viết được bài văn tả cảnh thiên nhiên hoàn chỉnh có bố cục 3 phần rõ ràng.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Biết sử dụng linh hoạt các biện pháp so sánh, nhân hóa và từ ngữ gợi tả để tăng tính hấp dẫn cho bài viết.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Rèn luyện kỹ năng đọc soát, đánh giá và chỉnh sửa lỗi cấu trúc, diễn đạt của bài làm.
                </li>
            </ul>
        </div>

        <!-- 📖 Đề bài & Hướng dẫn nghệ thuật -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 relative overflow-hidden">
                <div class="space-y-6">
                    <div class="bg-amber-50/50 p-6 rounded-3xl border-2 border-amber-200">
                        <p class="text-lg md:text-xl font-black text-amber-800 mb-2">📌 Đề bài:</p>
                        <p class="text-2xl md:text-3xl font-black text-amber-950 uppercase leading-snug">
                            Viết bài văn tả một cảnh đẹp thiên nhiên nơi em ở.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="p-6 bg-blue-50/30 rounded-3xl border border-blue-100 space-y-3">
                            <p class="font-black text-blue-600 text-xl flex items-center gap-2">💡 Gợi ý viết bài:</p>
                            <ul class="list-disc pl-6 space-y-2 text-gray-700 font-semibold text-lg">
                                <li>Dựa vào dàn ý chi tiết đã lập ở bài trước.</li>
                                <li>Cần chọn trình tự tả hợp lý (không gian hoặc thời gian).</li>
                                <li>Kết hợp sử dụng nhiều giác quan khi miêu tả (thị giác, thính giác, khứu giác...).</li>
                            </ul>
                        </div>

                        <div class="p-6 bg-emerald-50/30 rounded-3xl border border-emerald-100 space-y-3">
                            <p class="font-black text-emerald-900 text-xl flex items-center gap-2">✨ Yêu cầu nghệ thuật:</p>
                            <ul class="list-disc pl-6 space-y-2 text-gray-700 font-semibold text-lg">
                                <li>Sử dụng biện pháp **so sánh** để làm nổi bật hình ảnh cảnh vật.</li>
                                <li>Sử dụng biện pháp **nhân hóa** giúp cảnh vật có hồn và sinh động.</li>
                                <li>Chọn lọc các **từ ngữ gợi tả** âm thanh, màu sắc, hình dáng đặc trưng.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 📖 Phân tích ví dụ đoạn văn (Interactive Highlight) -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100">
                <h3 class="text-2xl md:text-3xl font-black text-blue-955 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">1</span>
                    Phân tích đoạn văn mẫu (Nguyên Bình)
                </h3>
                <p class="text-gray-500 font-bold text-lg mb-6">Nhấn vào các phần in đậm màu trong đoạn văn để xem phân tích biện pháp nghệ thuật chi tiết:</p>

                <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <!-- Đoạn văn tương tác -->
                    <div class="lg:col-span-3 bg-slate-50 p-6 md:p-8 rounded-3xl border-2 border-slate-200">
                        <p class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed space-y-4">
                            Hôm nay, gia đình tôi chuyển đến nơi ở mới dưới thung lũng, từ biệt dốc núi 
                            <span onclick="window.hlDetail216('gt', 'cheo leo: từ láy gợi tả độ cao, dốc đứng nguy hiểm của núi đá.')" class="bg-amber-100 text-amber-900 px-1 py-0.5 rounded cursor-pointer font-bold border-b-2 border-amber-300 hover:bg-amber-200 transition-colors">cheo leo</span> 
                            sau bao năm gắn bó. 
                            <br><br>
                            Đứng trên cao nhìn xuống, thung lũng 
                            <span onclick="window.hlDetail216('ss', 'giống như một cái chảo khổng lồ: biện pháp SO SÁNH độc đáo làm nổi bật hình dáng tròn, sâu của thung lũng.')" class="bg-blue-100 text-blue-600 px-1 py-0.5 rounded cursor-pointer font-bold border-b-2 border-blue-300 hover:bg-blue-200 transition-colors">giống như một cái chảo khổng lồ</span>, 
                            viền chảo là dãy núi 
                            <span onclick="window.hlDetail216('nh', 'ghé sát vai nhau: biện pháp NHÂN HÓA coi núi đá giống như những con người đang đứng sát cánh bên nhau thân thiện.')" class="bg-emerald-100 text-emerald-900 px-1 py-0.5 rounded cursor-pointer font-bold border-b-2 border-emerald-300 hover:bg-emerald-200 transition-colors">ghé sát vai nhau</span> 
                            cao ngất, lòng chảo có cánh đồng lúa 
                            <span onclick="window.hlDetail216('gt', 'xanh rì: từ ngữ gợi tả sắc xanh đậm đà, tràn đầy sức sống của lúa non.')" class="bg-amber-100 text-amber-900 px-1 py-0.5 rounded cursor-pointer font-bold border-b-2 border-amber-300 hover:bg-amber-200 transition-colors">xanh rì</span>. 
                            Cuối con đường mòn có những mái nhà 
                            <span onclick="window.hlDetail216('gt', 'lô nhô: từ láy gợi tả hình ảnh các ngôi nhà nhấp nhô, cao thấp đan xen.')" class="bg-amber-100 text-amber-900 px-1 py-0.5 rounded cursor-pointer font-bold border-b-2 border-amber-300 hover:bg-amber-200 transition-colors">lô nhô</span> 
                            <span onclick="window.hlDetail216('gt', 'quây quần: từ láy gợi tả cảnh ấm cúng, tụ họp gần gũi của các gia đình.')" class="bg-amber-100 text-amber-900 px-1 py-0.5 rounded cursor-pointer font-bold border-b-2 border-amber-300 hover:bg-amber-200 transition-colors">quây quần</span> 
                            bên nhau.
                        </p>
                        <p class="text-right font-bold text-gray-500 text-base md:text-lg mt-4">(Theo Nguyên Bình)</p>
                    </div>

                    <!-- Bảng phân tích chi tiết -->
                    <div class="lg:col-span-2 flex flex-col justify-center">
                        <div id="fb-hl-216" class="bg-blue-50 p-6 rounded-3xl border-2 border-blue-200 min-h-[160px] flex flex-col justify-center">
                            <p class="text-blue-600 font-black text-xl md:text-2xl mb-2">💡 Phân tích nghệ thuật</p>
                            <p id="txt-hl-216" class="text-blue-600 font-bold text-lg md:text-xl">
                                Em hãy nhấn vào các phần in đậm màu trong đoạn văn mẫu để xem phân tích giá trị miêu tả nghệ thuật của từng từ khóa nhé!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `,
    "practice": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto pb-12">
        <!-- ✍️ Viết bài văn tả cảnh -->
        <section class="w-full" id="ex-216-practice">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 space-y-6">
                <h3 class="text-2xl md:text-3xl font-black text-blue-955 mb-2 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">2</span>
                    Luyện viết bài văn của em
                </h3>
                <p class="text-gray-500 font-bold text-base md:text-lg">Học sinh tự chọn cảnh đẹp quê hương và viết bài văn miêu tả hoàn chỉnh (tối thiểu 80 từ), có sử dụng so sánh/nhân hóa.</p>

                <div class="space-y-4">
                    <div class="flex items-center justify-between">
                        <label class="block text-lg font-black text-gray-700">✍️ Bài viết của em:</label>
                        <span id="char-count-216" class="text-sm font-bold text-gray-400">0 từ</span>
                    </div>
                    
                    <div class="relative">
                        <textarea id="ipt-essay-216" rows="12" oninput="window.updateCharCount216()" class="w-full p-6 pr-14 rounded-3xl border-2 border-blue-150 focus:border-blue-500 outline-none font-bold text-lg md:text-xl transition-all leading-relaxed" placeholder="Bài viết gồm Mở bài, Thân bài, Kết bài... Ví dụ tả dòng sông quê hương, công viên gần nhà, cánh đồng lúa chín vàng óng..."></textarea>
                        
                        <button onclick="Lesson.toggleSpeechRec('ipt-essay-216')" class="absolute right-4 bottom-4 w-12 h-12 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-xl flex items-center justify-center text-blue-600 transition-colors shadow-md" title="Nhập liệu bằng giọng nói">
                            🎤
                        </button>
                    </div>
                </div>

                <!-- Phiếu kiểm soát lỗi -->
                <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
                    <p class="font-black text-gray-800 text-lg md:text-xl">✅ Phiếu tự đọc soát bài viết:</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label class="flex items-center gap-3 font-bold text-gray-700 text-base md:text-lg cursor-pointer">
                            <input type="checkbox" id="chk-216-1" class="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                            <span>Đúng đề tài tả cảnh đẹp nơi em ở</span>
                        </label>
                        <label class="flex items-center gap-3 font-bold text-gray-700 text-base md:text-lg cursor-pointer">
                            <input type="checkbox" id="chk-216-2" class="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                            <span>Đầy đủ 3 phần: Mở, Thân, Kết</span>
                        </label>
                        <label class="flex items-center gap-3 font-bold text-gray-700 text-base md:text-lg cursor-pointer">
                            <input type="checkbox" id="chk-216-3" class="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                            <span>Có dùng biện pháp So sánh, Nhân hóa</span>
                        </label>
                        <label class="flex items-center gap-3 font-bold text-gray-700 text-base md:text-lg cursor-pointer">
                            <input type="checkbox" id="chk-216-4" class="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                            <span>Sửa hết lỗi chính tả và dùng từ</span>
                        </label>
                    </div>
                </div>

                <div class="flex items-center justify-between mt-8">
                    <button onclick="window.resetEssay216()" class="px-6 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300">LÀM LẠI</button>
                    <button id="btn-check-216-practice" onclick="window.checkEssay216()" class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl font-black text-2xl md:text-3xl shadow-lg transition-all active:scale-95 flex items-center justify-center">E</button>
                </div>
                <div id="fb-essay-216" class="hidden p-6 rounded-3xl font-bold text-lg md:text-xl mt-4 animate-in fade-in duration-300"></div>
            </div>
        </section>
    </div>
    `,
    "questions": [
        {
            "question": "Bố cục chuẩn của một bài văn tả phong cảnh gồm mấy phần?",
            "options": [
                "2 phần: Mở bài và Thân bài",
                "3 phần: Mở bài, Thân bài, Kết bài",
                "4 phần: Mở bài, Thân bài, Kết bài và Phụ lục",
                "5 phần: Theo số lượng khổ thơ trong bài"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Phần Thân bài của bài văn tả phong cảnh thường thực hiện nhiệm vụ gì?",
            "options": [
                "Giới thiệu bao quát cảnh đẹp và tả chi tiết sự vật theo trình tự thời gian hoặc không gian hợp lý",
                "Nêu cảm nghĩ sâu sắc và mong ước tốt đẹp cho quê hương",
                "Giải thích lý do tác giả chọn viết bài văn này",
                "Kể lại một câu chuyện lịch sử gắn liền với địa danh đó"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cách mở bài giới thiệu trực tiếp cảnh đẹp được định nghĩa thế nào?",
            "options": [
                "Đi thẳng vào giới thiệu cảnh đẹp thiên nhiên định miêu tả",
                "Dẫn dắt từ một câu chuyện khác để giới thiệu cảnh đẹp",
                "Nêu ngay cảm xúc yêu ghét của mình đối với cảnh đẹp đó",
                "Bắt đầu bằng một câu ca dao hoặc danh ngôn nổi tiếng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi viết phần Thân bài tả cảnh đẹp, trình tự miêu tả nào là phù hợp?",
            "options": [
                "Theo thời gian, theo không gian hoặc kết hợp cả hai trình tự",
                "Từ chi tiết nhỏ nhặt nhất đến toàn cảnh bao la",
                "Tả từ trong nhà ra ngoài ngõ một cách ngẫu nhiên",
                "Không cần trình tự, nghĩ đến sự vật nào thì tả sự vật đó"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Việc sử dụng các giác quan trong bài văn tả cảnh đem lại lợi ích gì?",
            "options": [
                "Giúp cảnh vật hiện lên sinh động, nhiều màu sắc, âm thanh và chân thực hơn",
                "Giúp người viết kéo dài dung lượng bài văn cho đủ số từ",
                "Làm giảm đi tính chính xác của thông tin miêu tả",
                "Chỉ để chứng minh thị lực của người viết rất tốt"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong đoạn văn của Nguyên Bình, câu thơ/câu văn nào sử dụng nghệ thuật nhân hóa?",
            "options": [
                "Viền chảo là dãy núi ghé sát vai nhau cao ngất",
                "Từ biệt dốc núi cheo leo sau bao năm gắn bó",
                "Thung lũng giống như một cái chảo khổng lồ",
                "Đứng trên cao nhìn xuống thung lũng xanh rì"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đoạn trích ví dụ tả thung lũng giống cái chảo khổng lồ sử dụng biện pháp nghệ thuật gì?",
            "options": [
                "So sánh",
                "Nhân hóa",
                "Điệp từ ngữ",
                "Nói quá lên"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ láy nào sau đây gợi tả hình ảnh nhấp nhô, cao thấp xen kẽ của các mái nhà trong đoạn văn mẫu?",
            "options": [
                "Lô nhô",
                "Quây quần",
                "Cheo leo",
                "Xanh rì"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ \"quây quần\" trong đoạn văn mẫu biểu đạt ý nghĩa gì?",
            "options": [
                "Sự tụ họp, gần gũi và đầm ấm của các ngôi nhà bên nhau",
                "Các ngôi nhà được xây dựng cách xa nhau hàng cây số",
                "Nhà được xây quanh một chiếc hồ nước lớn hình tròn",
                "Quần áo của mọi người treo gần nhau"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tại sao trong văn miêu tả nên sử dụng biện pháp nhân hóa?",
            "options": [
                "Làm cho sự vật vô tri vô giác có suy nghĩ, hoạt động như con người, trở nên gần gũi, sống động",
                "Để bài văn mang tính hư cấu, giả tưởng như truyện cổ tích",
                "Để tránh việc phải viết tên thật của các sự vật",
                "Để bài văn được dài thêm nhiều dòng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đâu là một ví dụ sử dụng biện pháp nhân hóa cho sự vật \"ông mặt trời\"?",
            "options": [
                "Ông mặt trời mỉm cười rạng rỡ, ban phát nắng ấm xuống nhân gian",
                "Mặt trời tròn như quả bóng lửa đỏ rực",
                "Ánh nắng mặt trời chói chang làm khô ráo mọi nẻo đường",
                "Mặt trời mọc ở hướng Đông và lặn ở hướng Tây"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi soát lỗi bài văn tả cảnh, học sinh nên chú ý tiêu chí nào sau đây?",
            "options": [
                "Tất cả các tiêu chí: Đúng đề tài, đủ bố cục 3 phần, dùng từ gợi tả sinh động, lỗi chính tả",
                "Chỉ cần chú ý xem chữ viết có đẹp và đều hàng không",
                "Chỉ cần đếm đủ số dòng quy định là được",
                "Chỉ cần xem bài viết có dài hơn bài của bạn bên cạnh không"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đâu là đặc trưng của phần Kết bài mở rộng trong bài văn tả phong cảnh?",
            "options": [
                "Bên cạnh bộc lộ cảm xúc, còn liên hệ thực tế, liên tưởng và rút ra bài học hành động bảo vệ thiên nhiên",
                "Kết thúc bài văn một cách ngắn gọn chỉ trong một câu",
                "Tả thêm một cảnh đẹp khác hoàn toàn mới ở địa phương",
                "Kể lại câu chuyện mình đi chơi ở nơi đó với ai"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ láy nào phù hợp để tả âm thanh tiếng nước chảy rì rào qua các khe đá?",
            "options": [
                "Róc rách",
                "Ào ào",
                "Lặng ngắt",
                "Mênh mông"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong câu \"Dòng sông uốn khúc quanh co như một dải lụa mềm\", tác giả đã dùng hình ảnh so sánh nào?",
            "options": [
                "Dòng sông được so sánh với một dải lụa mềm",
                "Khúc sông uốn lượn được so sánh với con đường mòn",
                "Dòng sông được ví với một con rồng đang uốn lượn",
                "Không sử dụng hình ảnh so sánh nào trong câu"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// Đăng ký toàn cục
window.lesson216 = lesson216;

// Chọn thông tin phân tích ví dụ Nguyên Bình
window.hlDetail216 = function(type, info) {
    const fbBox = document.getElementById('fb-hl-216');
    const txt = document.getElementById('txt-hl-216');
    
    // Đổi background tương ứng để tạo thẩm mỹ cao
    if (type === 'ss') {
        fbBox.className = "bg-blue-50 p-6 rounded-3xl border-2 border-blue-300 min-h-[160px] flex flex-col justify-center animate-in fade-in duration-300";
    } else if (type === 'nh') {
        fbBox.className = "bg-emerald-50 p-6 rounded-3xl border-2 border-emerald-300 min-h-[160px] flex flex-col justify-center animate-in fade-in duration-300";
    } else {
        fbBox.className = "bg-amber-50 p-6 rounded-3xl border-2 border-amber-300 min-h-[160px] flex flex-col justify-center animate-in fade-in duration-300";
    }
    
    txt.innerHTML = info;
};

// Đếm số từ thực tế của textarea
window.updateCharCount216 = function() {
    const text = document.getElementById('ipt-essay-216').value.trim();
    const wordCountSpan = document.getElementById('char-count-216');
    if (!text) {
        wordCountSpan.innerText = "0 từ";
        return;
    }
    const words = text.split(/[\s\n\r]+/).filter(w => w.length > 0);
    wordCountSpan.innerText = words.length + " từ";
};

// Đánh giá bài văn tự luận
window.checkEssay216 = function() {
    const text = document.getElementById('ipt-essay-216').value.trim();
    const fb = document.getElementById('fb-essay-216');
    
    // Trạng thái checkbox kiểm soát lỗi
    const c1 = document.getElementById('chk-216-1').checked;
    const c2 = document.getElementById('chk-216-2').checked;
    const c3 = document.getElementById('chk-216-3').checked;
    const c4 = document.getElementById('chk-216-4').checked;
    
    fb.classList.remove('hidden');

    if (!text) {
        fb.className = "p-6 rounded-3xl font-bold text-lg md:text-xl bg-orange-100 text-orange-850 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em hãy viết bài văn tả cảnh của mình vào khung soạn thảo trước khi bấm nút kiểm tra nhé!";
        return;
    }

    const words = text.split(/[\s\n\r]+/).filter(w => w.length > 0);
    if (words.length < 50) {
        fb.className = "p-6 rounded-3xl font-bold text-lg md:text-xl bg-orange-100 text-orange-850 border border-orange-200 mt-4";
        fb.innerHTML = `⚠️ Bài văn của em mới có ${words.length} từ, hơi ngắn. Hãy phát triển bài làm dài hơn (tối thiểu 80 từ) để tả cảnh chi tiết hơn nhé!`;
        return;
    }

    // Các từ biểu hiện so sánh
    const comparisonWords = ["như", "giống như", "tựa như", "hệt như", "như là", "như thể", "bằng như"];
    const hasComparison = comparisonWords.some(word => text.toLowerCase().includes(word));

    // Nhận xét gợi ý chi tiết từ Thầy E (AI)
    let aiComment = "";
    let score = 80;

    if (hasComparison) {
        score += 10;
        aiComment += "🌟 Thầy E nhận thấy em đã biết đưa biện pháp so sánh vào bài miêu tả rất tốt. ";
    } else {
        aiComment += "💡 Thầy E khuyên em nên lồng ghép thêm biện pháp so sánh (sử dụng các từ 'như', 'giống như'...) để làm nổi bật hình ảnh của cảnh vật. ";
    }

    if (c1 && c2 && c3 && c4) {
        score += 10;
        aiComment += "Em cũng đã đọc soát kỹ lưỡng và tích vào tất cả các tiêu chuẩn đánh giá chất lượng bài viết! Rất đáng khen.";
    } else {
        aiComment += "Hãy tích vào phiếu kiểm soát lỗi sau khi đã tự rà soát để hoàn thiện bài làm của mình tốt nhất nhé.";
    }

    // Trình bày kết quả
    fb.className = "p-6 rounded-3xl font-bold text-lg md:text-xl bg-green-100 text-green-900 border border-green-200 mt-4";
    fb.innerHTML = `
        <div class="space-y-3">
            <p class="text-2xl md:text-3xl font-black text-green-950">📚 Nhận xét bài làm của Thầy E (AI):</p>
            <p class="text-lg md:text-xl text-gray-800 leading-relaxed">${aiComment}</p>
            <p class="text-xl md:text-2xl text-green-950 font-black mt-2">📊 Điểm đánh giá: <span class="text-3xl md:text-4xl font-black text-green-700">${score}/100</span></p>
        </div>
    `;

    if (window.UI && typeof window.UI.showToast === 'function') {
        window.UI.showToast("Rất tốt! Bài viết đã được chấm điểm tự động.", "success");
    }
    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }

    // Lưu điểm
    if (typeof window.submitMathLesson === 'function') {
        window.submitMathLesson("Viết Tiết 216: Viết bài văn tả phong cảnh", score, "ex-216-practice", 1, 1, 1);
    }
};

window.resetEssay216 = function() {
    document.getElementById('ipt-essay-216').value = "";
    document.getElementById('chk-216-1').checked = false;
    document.getElementById('chk-216-2').checked = false;
    document.getElementById('chk-216-3').checked = false;
    document.getElementById('chk-216-4').checked = false;
    document.getElementById('char-count-216').innerText = "0 từ";
    const fb = document.getElementById('fb-essay-216');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};
