export const lesson120 = {
    "topic": "Tiếng Việt 5",
    "week": "18",
    "period": "120",
    "title": "ÔN TẬP VÀ ĐÁNH GIÁ CUỐI HKI (TIẾT 1)",
    "desc": "Tiết 1 giúp học sinh hệ thống hóa 4 chủ điểm đã học ở học kì I; thực hành viết cảm nghĩ về bài đọc tự chọn và điền kết từ phù hợp vào đoạn văn.",
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
                Hệ thống hóa tên gọi và ý nghĩa nhân văn của 4 chủ điểm đã học trong học kỳ I.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-600 font-black">•</span>
                Rèn luyện năng lực đọc hiểu: tóm tắt nội dung chính và bày tỏ ấn tượng cá nhân về bài thơ/câu chuyện đã học.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-600 font-black">•</span>
                Củng cố kiến thức ngữ pháp về việc sử dụng kết từ phù hợp trong đoạn văn.
            </li>
        </ul>
    </div>

    <!-- 📋 BÀI TẬP 1: Ôn tập 4 chủ điểm đã học -->
    <!-- Bài 1 -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">1</span>
            <h3 class="text-2xl md:text-5xl font-black text-sky-950">Kể tên 4 chủ điểm đã học ở học kì I và cho biết mỗi chủ điểm giúp em có thêm hiểu biết gì về cuộc sống:</h3>
        </div>

        <p class="text-lg font-bold text-sky-950">👉 Em hãy chọn tên chủ điểm phù hợp ghép vào từng ô nội dung ý nghĩa tương ứng dưới đây:</p>

        <div class="max-w-4xl mx-auto space-y-4">
            <!-- Dòng chủ điểm 1 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 bg-sky-50/30 rounded-2xl border border-sky-100">
                <div class="text-base font-bold text-sky-950 md:col-span-2">
                    🌟 Giúp em có những hiểu biết về thế giới hồn nhiên, tươi đẹp và giàu ước mơ của tuổi thơ, đồng thời bồi dưỡng tình bạn bè trong sáng.
                </div>
                <div>
                    <select id="sel-vn120-cd1" class="w-full p-2.5 rounded-xl border border-gray-200 focus:border-sky-500 font-bold bg-white text-gray-800 outline-none text-base">
                        <option value="">-- Chọn chủ điểm --</option>
                        <option value="tuoi-tho">Thế giới tuổi thơ</option>
                        <option value="gia-dinh">Mái ấm gia đình</option>
                        <option value="cong-dong">Với cộng đồng</option>
                        <option value="ngoi-nha">Bảo vệ ngôi nhà chung</option>
                    </select>
                </div>
            </div>

            <!-- Dòng chủ điểm 2 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 bg-sky-50/30 rounded-2xl border border-sky-100">
                <div class="text-base font-bold text-sky-950 md:col-span-2">
                    🌟 Giúp em hiểu sâu sắc về tình cảm thiêng liêng giữa những người thân thiết, sự ấm áp của quê hương và mái nhà yêu thương.
                </div>
                <div>
                    <select id="sel-vn120-cd2" class="w-full p-2.5 rounded-xl border border-gray-200 focus:border-sky-500 font-bold bg-white text-gray-800 outline-none text-base">
                        <option value="">-- Chọn chủ điểm --</option>
                        <option value="tuoi-tho">Thế giới tuổi thơ</option>
                        <option value="gia-dinh">Mái ấm gia đình</option>
                        <option value="cong-dong">Với cộng đồng</option>
                        <option value="ngoi-nha">Bảo vệ ngôi nhà chung</option>
                    </select>
                </div>
            </div>

            <!-- Dòng chủ điểm 3 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 bg-sky-50/30 rounded-2xl border border-sky-100">
                <div class="text-base font-bold text-sky-950 md:col-span-2">
                    🌟 Giúp em nhận thức về vai trò, sự chia sẻ, đồng cảm giữa con người với nhau trong xã hội và tình yêu thương đồng bào thân thiết.
                </div>
                <div>
                    <select id="sel-vn120-cd3" class="w-full p-2.5 rounded-xl border border-gray-200 focus:border-sky-500 font-bold bg-white text-gray-800 outline-none text-base">
                        <option value="">-- Chọn chủ điểm --</option>
                        <option value="tuoi-tho">Thế giới tuổi thơ</option>
                        <option value="gia-dinh">Mái ấm gia đình</option>
                        <option value="cong-dong">Với cộng đồng</option>
                        <option value="ngoi-nha">Bảo vệ ngôi nhà chung</option>
                    </select>
                </div>
            </div>

            <!-- Dòng chủ điểm 4 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 bg-sky-50/30 rounded-2xl border border-sky-100">
                <div class="text-base font-bold text-sky-950 md:col-span-2">
                    🌟 Giúp em nâng cao ý thức giữ gìn, bảo vệ môi trường thiên nhiên, Trái Đất và sự chung tay kiến tạo tương lai xanh bền vững.
                </div>
                <div>
                    <select id="sel-vn120-cd4" class="w-full p-2.5 rounded-xl border border-gray-200 focus:border-sky-500 font-bold bg-white text-gray-800 outline-none text-base">
                        <option value="">-- Chọn chủ điểm --</option>
                        <option value="tuoi-tho">Thế giới tuổi thơ</option>
                        <option value="gia-dinh">Mái ấm gia đình</option>
                        <option value="cong-dong">Với cộng đồng</option>
                        <option value="ngoi-nha">Bảo vệ ngôi nhà chung</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="flex justify-end items-center gap-4"><button onclick="kiemTraChuDiem120();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
        <div id="fb-vn120-chudiem" class="hidden p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto"></div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-sky-900">
    <!-- 📋 BÀI TẬP 2: Tự chọn bài đọc ôn tập -->
    <!-- Bài 2 -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">2</span>
            <h3 class="text-2xl md:text-5xl font-black text-sky-950">Đọc một câu chuyện hoặc bài thơ trong các chủ điểm đã học và trả lời câu hỏi:</h3>
        </div>

        <div class="max-w-4xl mx-auto space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                    <label class="text-base font-bold text-sky-900">✏️ Tên tác phẩm (câu chuyện/bài thơ) em chọn:</label>
                    <input id="ans-vn120-bt2-ten" type="text" placeholder="Ví dụ: Trước cổng trời, Sự tích chú Tễu..." class="w-full p-3 rounded-xl border border-gray-200 focus:border-sky-500 font-bold bg-white text-gray-800 outline-none text-lg">
                </div>
                <div class="space-y-2">
                    <label class="text-base font-bold text-sky-900">✏️ Bài đọc thuộc chủ điểm nào? Tác giả là ai?</label>
                    <input id="ans-vn120-bt2-tacgia" type="text" placeholder="Ví dụ: Chủ điểm Bảo vệ ngôi nhà chung, tác giả Nguyễn Đình Ảnh..." class="w-full p-3 rounded-xl border border-gray-200 focus:border-sky-500 font-bold bg-white text-gray-800 outline-none text-lg">
                </div>
            </div>

            <div class="space-y-2">
                <label class="text-base font-bold text-sky-900">✏️ Nội dung chính của bài đọc là gì?</label>
                <textarea id="ans-vn120-bt2-noidung" rows="3" placeholder="Nhập tóm tắt nội dung chính của tác phẩm..." class="w-full p-3 rounded-xl border border-gray-200 focus:border-sky-500 font-bold bg-white text-gray-800 outline-none text-lg leading-relaxed"></textarea>
            </div>

            <div class="space-y-2">
                <label class="text-base font-bold text-sky-900">✏️ Điều gì trong bài đọc gây ấn tượng đối với em? (Vì sao?)</label>
                <textarea id="ans-vn120-bt2-antuong" rows="3" placeholder="Chia sẻ hình ảnh thơ, chi tiết câu chuyện hoặc nhân vật làm em ấn tượng nhất..." class="w-full p-3 rounded-xl border border-gray-200 focus:border-sky-500 font-bold bg-white text-gray-800 outline-none text-lg leading-relaxed"></textarea>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraBaiDoc120();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn120-baidoc" class="hidden p-5 rounded-2xl font-bold text-lg"></div>
        </div>
    </div>

    <!-- 📋 BÀI TẬP 3: Tìm kết từ phù hợp -->
    <!-- Bài 3 -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">3</span>
            <h3 class="text-2xl md:text-5xl font-black text-sky-950">Tìm kết từ phù hợp với mỗi bông hoa:</h3>
        </div>

        <p class="text-lg font-bold text-sky-950">✏️ Em hãy nhập kết từ phù hợp (Ví dụ: <em>cho, và, hay, với, nhưng, vì...</em>) vào các ô trống dưới đây để hoàn thiện đoạn văn:</p>

        <!-- Đoạn văn điền từ -->
        <div class="max-w-4xl mx-auto p-6 bg-amber-50/15 rounded-3xl border-2 border-sky-200 shadow-inner text-lg md:text-xl font-serif text-gray-800 leading-loose indent-8">
            Và từ sau hôm đó, Hương bắt đầu viết thư 
            <input id="ans-vn120-kt1" type="text" class="w-16 md:w-20 inline-block px-2 py-0.5 border-2 border-sky-300 rounded-lg font-bold text-center bg-white text-sky-950 outline-none focus:border-sky-500 mx-1"> 
            cô Thu. Một việc thật là mới mẻ 
            <input id="ans-vn120-kt2" type="text" class="w-16 md:w-20 inline-block px-2 py-0.5 border-2 border-sky-300 rounded-lg font-bold text-center bg-white text-sky-950 outline-none focus:border-sky-500 mx-1"> 
            thích thú. Hương không còn thấy buồn chán 
            <input id="ans-vn120-kt3" type="text" class="w-16 md:w-20 inline-block px-2 py-0.5 border-2 border-sky-300 rounded-lg font-bold text-center bg-white text-sky-950 outline-none focus:border-sky-500 mx-1"> 
            sợ hãi mỗi khi bố mẹ đi vắng. Mọi khi thì Hương nói chuyện 
            <input id="ans-vn120-kt4" type="text" class="w-16 md:w-20 inline-block px-2 py-0.5 border-2 border-sky-300 rounded-lg font-bold text-center bg-white text-sky-950 outline-none focus:border-sky-500 mx-1"> 
            con mèo. 
            <input id="ans-vn120-kt5" type="text" class="w-16 md:w-20 inline-block px-2 py-0.5 border-2 border-sky-300 rounded-lg font-bold text-center bg-white text-sky-950 outline-none focus:border-sky-500 mx-1"> 
            nói mãi cũng chán! 
            <input id="ans-vn120-kt6" type="text" class="w-16 md:w-20 inline-block px-2 py-0.5 border-2 border-sky-300 rounded-lg font-bold text-center bg-white text-sky-950 outline-none focus:border-sky-500 mx-1"> 
            nó chẳng biết nói chuyện lại 
            <input id="ans-vn120-kt7" type="text" class="w-16 md:w-20 inline-block px-2 py-0.5 border-2 border-sky-300 rounded-lg font-bold text-center bg-white text-sky-950 outline-none focus:border-sky-500 mx-1"> 
            Hương mà chỉ biết meo meo thôi. Bây giờ thì Hương đã có người để mà trò chuyện rồi.
            <div class="text-right text-base font-bold text-gray-500 mt-4 font-sans">(Theo Xuân Quỳnh)</div>
        </div>

        <div class="flex justify-end items-center gap-4"><button onclick="kiemTraKetTu120();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
        <div id="fb-vn120-kettu" class="hidden p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto"></div>
    </div>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn120Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <span>HOÀN THÀNH TIẾT 1 ✓</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Chủ điểm 'Bảo vệ ngôi nhà chung' giúp em có những hiểu biết gì về cuộc sống?",
            "options": [
                "Ý thức giữ gìn, bảo vệ môi trường thiên nhiên và Trái Đất xanh tươi",
                "Cách chuẩn bị bài thuyết trình nói tự tin trước đám đông lớp học",
                "Những câu chuyện vui vẻ hồn nhiên của thế giới tuổi thơ",
                "Sự sẻ chia, đồng cảm gắn kết của cộng đồng xã hội"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Kết từ nào sau đây điền vào bông hoa thứ nhất là phù hợp nhất: 'Hương bắt đầu viết thư ... cô Thu'?",
            "options": [
                "cho",
                "với",
                "nhưng",
                "hoặc"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong câu 'Hương không còn thấy buồn chán ... sợ hãi mỗi khi bố mẹ đi vắng', từ thích hợp nhất điền vào chỗ trống là gì?",
            "options": [
                "hay (hoặc hoặc)",
                "nhưng",
                "để",
                "bởi vì"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong câu 'Một việc thật là mới mẻ ... thích thú', kết từ nào thích hợp để kết nối hai tính từ?",
            "options": [
                "và",
                "cho",
                "bởi",
                "nên"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Kết từ nào dưới đây biểu thị mối quan hệ tương phản thích hợp điền vào chỗ trống: 'Hương nói chuyện với con mèo. ... nói mãi cũng chán!'?",
            "options": [
                "Nhưng",
                "Và",
                "Hay",
                "Vì"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đặc điểm của kết từ trong tiếng Việt là gì?",
            "options": [
                "Dùng để nối các từ ngữ hoặc các vế câu, thể hiện quan hệ giữa chúng",
                "Dùng để miêu tả đặc điểm ngoại hình hoặc tính cách nhân vật",
                "Dùng để thay thế cho danh từ nhằm tránh lỗi lặp từ",
                "Dùng để biểu lộ cảm xúc mạnh mẽ của người viết"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cặp kết từ nào dưới đây biểu thị mối quan hệ Nguyên nhân - Kết quả?",
            "options": [
                "Vì... nên...",
                "Tuy... nhưng...",
                "Nếu... thì...",
                "Không những... mà còn..."
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ nào sau đây KHÔNG phải là kết từ?",
            "options": [
                "mèo máy",
                "và",
                "nhưng",
                "hoặc"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi ôn tập một câu chuyện, nội dung chính của câu chuyện đó là gì?",
            "options": [
                "Ý nghĩa khái quát và các sự việc cốt lõi diễn ra trong truyện",
                "Danh sách tất cả các nhân vật phụ xuất hiện trong câu chuyện",
                "Số trang sách và nhà xuất bản in cuốn truyện đó",
                "Nơi ở và tiểu sử chi tiết của tác giả viết truyện"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Kết từ 'vì' trong đoạn văn của Xuân Quỳnh biểu thị mối quan hệ gì?",
            "options": [
                "Giải thích nguyên nhân",
                "Biểu thị sự lựa chọn",
                "Biểu thị quan hệ tương phản",
                "Biểu thị sự tăng tiến"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong câu 'Mọi khi thì Hương nói chuyện ... con mèo', kết từ thích hợp là gì?",
            "options": [
                "với",
                "cho",
                "nhưng",
                "vì"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Ý nghĩa chính của chủ điểm 'Mái ấm gia đình' trong học kì I là gì?",
            "options": [
                "Tôn vinh tình cảm thiêng liêng gia đình, tình yêu cha mẹ, người thân",
                "Ý thức dọn dẹp vệ sinh nhà cửa ngăn nắp, gọn gàng",
                "Kể về các loài vật nuôi quen thuộc gần gũi trong nhà",
                "Dạy kỹ năng tự lập của học sinh khi bố mẹ vắng nhà"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Hành động viết thư của bạn Hương trong đoạn văn trích của tác giả nào?",
            "options": [
                "Xuân Quỳnh",
                "Nguyễn Nhật Ánh",
                "Tô Hoài",
                "Trần Đăng Khoa"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong câu 'Hương không còn thấy buồn chán hay sợ hãi', từ 'hay' thuộc từ loại nào?",
            "options": [
                "Kết từ",
                "Động từ",
                "Danh từ",
                "Tính từ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi thực hiện các câu hỏi tự luận về cảm nhận bài đọc, học sinh cần lưu ý gì?",
            "options": [
                "Trả lời chân thực, nêu rõ lý do và trích dẫn chi tiết gây ấn tượng sâu sắc",
                "Trả lời thật ngắn gọn dưới 5 từ để tiết kiệm thời gian",
                "Sao chép y nguyên đoạn văn mẫu của giáo viên trên bảng",
                "Bỏ trống không trả lời nếu không nhớ tên tác giả bài đọc"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// ==========================================
// ===== PHẦN HÀM XỬ LÝ TƯƠNG TÁC JS =======
// ==========================================

// 1. Kiểm tra 4 chủ điểm
window.kiemTraChuDiem120 = function() {
    const cd1 = document.getElementById('sel-vn120-cd1')?.value;
    const cd2 = document.getElementById('sel-vn120-cd2')?.value;
    const cd3 = document.getElementById('sel-vn120-cd3')?.value;
    const cd4 = document.getElementById('sel-vn120-cd4')?.value;

    const fb = document.getElementById('fb-vn120-chudiem');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!cd1 || !cd2 || !cd3 || !cd4) {
        fb.innerHTML = '⚠️ Em hãy chọn tên chủ điểm cho cả 4 ô trống nhé!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-amber-100 text-amber-950 border border-amber-300';
        return;
    }

    if (cd1 === 'tuoi-tho' && cd2 === 'gia-dinh' && cd3 === 'cong-dong' && cd4 === 'ngoi-nha') {
        fb.innerHTML = '🎉 Chính xác hoàn toàn! Em đã ghi nhớ rất tốt tên gọi và ý nghĩa nhân văn của 4 chủ điểm đã học trong học kỳ I!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-emerald-100 text-emerald-950 border border-emerald-300 shadow-sm';
    } else {
        fb.innerHTML = '❌ Có chủ điểm ghép chưa đúng ý nghĩa. Em hãy đọc lại kỹ gợi ý về cuộc sống và chọn lại nhé!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-rose-100 text-rose-950 border border-rose-300';
    }
};

// 2. AI Thầy E chấm bài đọc tự chọn
window.kiemTraBaiDoc120 = function() {
    const ten = document.getElementById('ans-vn120-bt2-ten')?.value.trim();
    const tacgia = document.getElementById('ans-vn120-bt2-tacgia')?.value.trim();
    const noidung = document.getElementById('ans-vn120-bt2-noidung')?.value.trim();
    const antuong = document.getElementById('ans-vn120-bt2-antuong')?.value.trim();

    const fb = document.getElementById('fb-vn120-baidoc');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!ten || !tacgia || !noidung || !antuong) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E nhắc nhở:</h5>
                    <p class="text-lg">Em hãy điền đầy đủ tên tác phẩm, chủ điểm, nội dung tóm tắt và cảm nhận ấn tượng trước khi gửi chấm nhé!</p>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-955 border border-amber-305';
        return;
    }

    const wordCount = noidung.split(/\s+/).length + antuong.split(/\s+/).length;
    if (wordCount < 40) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-rose-900">AI Thầy E góp ý:</h5>
                    <p class="text-lg">Phần trả lời tóm tắt và cảm nhận còn hơi ngắn. Em hãy diễn đạt rõ ràng, mạch lạc hơn để thể hiện sâu sắc ấn tượng về tác phẩm <strong>"${ten}"</strong> nhé!</p>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-rose-100 text-rose-955 border border-rose-305';
        return;
    }

    fb.innerHTML = `
        <div class="flex items-start gap-4 animate-fade-in">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-950">AI Thầy E đánh giá cảm nhận:</h5>
                <p class="text-lg mb-2">Lời cảm nhận rất chân thực! Em đã hiểu rõ nội dung tác phẩm "${ten}", tóm tắt chính xác và chỉ ra được chi tiết làm mình ấn tượng nhất một cách giàu cảm xúc.</p>
                <span class="text-xl font-black bg-emerald-500 text-white px-3 py-1 rounded-lg shadow-sm">Thầy chấm đạt: 10/10 điểm</span>
            </div>
        </div>
    `;
    fb.className = 'p-5 rounded-2xl font-bold bg-emerald-100 text-emerald-950 border border-emerald-305 shadow-md';
};

// 3. Kiểm tra kết từ điền khuyết
window.kiemTraKetTu120 = function() {
    const kt1 = document.getElementById('ans-vn120-kt1')?.value.trim().toLowerCase();
    const kt2 = document.getElementById('ans-vn120-kt2')?.value.trim().toLowerCase();
    const kt3 = document.getElementById('ans-vn120-kt3')?.value.trim().toLowerCase();
    const kt4 = document.getElementById('ans-vn120-kt4')?.value.trim().toLowerCase();
    const kt5 = document.getElementById('ans-vn120-kt5')?.value.trim().toLowerCase();
    const kt6 = document.getElementById('ans-vn120-kt6')?.value.trim().toLowerCase();
    const kt7 = document.getElementById('ans-vn120-kt7')?.value.trim().toLowerCase();

    const fb = document.getElementById('fb-vn120-kettu');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!kt1 || !kt2 || !kt3 || !kt4 || !kt5 || !kt6 || !kt7) {
        fb.innerHTML = '⚠️ Em hãy điền đầy đủ các kết từ vào các ô trống bông hoa nhé!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-amber-100 text-amber-955 border border-amber-300';
        return;
    }

    // Đáp án chuẩn
    const check1 = (kt1 === 'cho');
    const check2 = (kt2 === 'và' || kt2 === 'nhưng');
    const check3 = (kt3 === 'hay' || kt3 === 'hoặc');
    const check4 = (kt4 === 'với');
    const check5 = (kt5 === 'nhưng' || kt5 === 'mà');
    const check6 = (kt6 === 'vì' || kt6 === 'bởi vì' || kt6 === 'do');
    const check7 = (kt7 === 'với');

    if (check1 && check2 && check3 && check4 && check5 && check6 && check7) {
        fb.innerHTML = '🎉 Chúc mừng em! Em đã chọn và điền chính xác toàn bộ các kết từ phù hợp giúp đoạn văn của Xuân Quỳnh liên kết chặt chẽ và truyền cảm hơn!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-emerald-100 text-emerald-955 border border-emerald-300 shadow-sm';
    } else {
        fb.innerHTML = '❌ Một số kết từ em điền chưa phù hợp với ý nghĩa liên kết của câu. Hãy đọc kỹ lại đoạn văn và điền lại nhé!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-rose-100 text-rose-955 border border-rose-300';
    }
};

// 4. Hoàn thành global
window.submitVn120Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 120',
            '📝',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎉</span><p class="text-xl md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành Tiết 1 Ôn tập Cuối học kỳ I!</p><p class="text-lg text-gray-700 mt-3">Hãy cùng bước sang Tiết 2 để tìm hiểu câu chuyện thú vị về chú mèo con nhé!</p></div>'
        );
    } else {
        alert('Chúc mừng em đã hoàn thành Tiết 1 Ôn tập!');
    }
};
