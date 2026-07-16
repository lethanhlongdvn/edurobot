export const lesson84 = {
    "topic": "Tiếng Việt 5",
    "week": "12",
    "period": "84",
    "title": "ĐỌC MỞ RỘNG (TUẦN 12)",
    "desc": "Bài học giúp học sinh rèn luyện thói quen tự đọc sách báo ngoài giờ, viết thông tin thu hoạch vào Phiếu đọc sách và tự tin giới thiệu, trao đổi về cuốn sách yêu thích với bạn bè.",
    "subject": "Viết",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
<div class="flex justify-end mb-4">
    <button onclick="playSegmentAudio('assets/audio/tiengviet/84/doc_mo_rong_tuan_12.mp3')" class="p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc toàn bài">
        <span class="text-xl">🔊 Nghe đọc mẫu</span>
    </button>
</div>
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-indigo-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-indigo-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-indigo-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-indigo-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-indigo-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-indigo-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-indigo-900 font-black">•</span>
                Tìm đọc được một cuốn sách giới thiệu về một tác phẩm văn học hoặc câu chuyện thiếu nhi hấp dẫn.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-indigo-900 font-black">•</span>
                Hoàn thành Phiếu đọc sách với đầy đủ thông tin: tên sách, tác giả, nội dung chính, chi tiết ấn tượng.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-indigo-900 font-black">•</span>
                Biết cách chia sẻ, trao đổi cởi mở, tự tin với bạn bè về cuốn sách mà mình đã đọc.
            </li>
        </ul>
    </div>

    <!-- 📚 HƯỚNG DẪN ĐỌC SÁCH -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-indigo-100 shadow-xl space-y-6">
        <h3 class="text-2xl md:text-3xl font-black text-indigo-800 border-b border-indigo-100 pb-4 flex items-center gap-3">
            <span>📚</span>
            Gợi ý chọn nguồn đọc sách hay
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div class="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 space-y-3">
                <h4 class="font-black text-emerald-800 text-lg md:text-xl flex items-center gap-2">
                    <span>📖</span> Sách văn học Việt Nam
                </h4>
                <p class="text-sm font-bold text-gray-800 leading-relaxed">
                    Các tác phẩm kinh điển giàu tính nhân văn và gần gũi với trẻ em Việt Nam như:
                </p>
                <ul class="text-xs font-bold text-gray-800 space-y-1 ml-4 list-disc">
                    <li>Dế Mèn phiêu lưu kí (Tô Hoài)</li>
                    <li>Đất rừng phương Nam (Đoàn Giỏi)</li>
                    <li>Kính vạn hoa (Nguyễn Nhật Ánh)</li>
                    <li>Góc sân và khoảng trời (Trần Đăng Khoa)</li>
                </ul>
            </div>

            <div class="p-6 bg-sky-50 rounded-3xl border border-sky-100 space-y-3">
                <h4 class="font-black text-sky-800 text-lg md:text-xl flex items-center gap-2">
                    <span>🌍</span> Sách văn học nước ngoài
                </h4>
                <p class="text-sm font-bold text-gray-800 leading-relaxed">
                    Các tác phẩm nổi tiếng thế giới giúp mở rộng chân trời văn hóa và nuôi dưỡng tâm hồn:
                </p>
                <ul class="text-xs font-bold text-gray-800 space-y-1 ml-4 list-disc">
                    <li>Không gia đình (Hector Malot)</li>
                    <li>Những người khốn khổ (Victor Hugo)</li>
                    <li>Totto-chan bên cửa sổ (Kuroyanagi Tetsuko)</li>
                    <li>Hoàng tử bé (Antoine de Saint-Exupéry)</li>
                </ul>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📄 PHIẾU ĐỌC SÁCH TƯƠNG TÁC -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-indigo-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-indigo-100 pb-4">
            <span class="w-12 h-12 rounded-2xl bg-indigo-600 text-white font-black flex items-center justify-center text-2xl shadow-md">📄</span>
            <h3 class="text-2xl md:text-3xl font-black text-indigo-800">Góc thu hoạch: Phiếu đọc sách của em</h3>
        </div>

        <div class="max-w-4xl mx-auto bg-amber-50/30 p-6 md:p-8 rounded-[40px] border-2 border-dashed border-amber-200 space-y-6 relative">
            <div class="absolute right-4 top-4 w-16 h-16 bg-amber-100/40 rounded-full flex items-center justify-center text-2xl animate-pulse">⭐</div>
            
            <h4 class="text-2xl font-black text-amber-600 text-center uppercase tracking-wider mb-6">📖 PHIẾU ĐỌC SÁCH CÁ NHÂN</h4>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-1">
                    <span class="text-xs font-black text-amber-600 uppercase block">Tên cuốn sách:</span>
                    <input type="text" id="read-book-name" placeholder="Ví dụ: Dế Mèn phiêu lưu kí" class="w-full p-3 border border-amber-100 rounded-xl font-bold bg-white text-base">
                </div>
                <div class="space-y-1">
                    <span class="text-xs font-black text-amber-600 uppercase block">Tác giả:</span>
                    <input type="text" id="read-book-author" placeholder="Ví dụ: Tô Hoài" class="w-full p-3 border border-amber-100 rounded-xl font-bold bg-white text-base">
                </div>
                <div class="space-y-1">
                    <span class="text-xs font-black text-amber-600 uppercase block">Ngày đọc sách:</span>
                    <input type="date" id="read-book-date" class="w-full p-3 border border-amber-100 rounded-xl font-bold bg-white text-base">
                </div>
                <div class="space-y-1">
                    <span class="text-xs font-black text-amber-600 uppercase block">Mức độ yêu thích (1-5 sao):</span>
                    <select id="read-book-rating" class="w-full p-3 border border-amber-100 rounded-xl font-bold bg-white text-base text-amber-600">
                        <option value="5">⭐⭐⭐⭐⭐ (Rất thích)</option>
                        <option value="4">⭐⭐⭐⭐ (Thích)</option>
                        <option value="3">⭐⭐⭐ (Bình thường)</option>
                        <option value="2">⭐⭐ (Không thích lắm)</option>
                        <option value="1">⭐ (Rất tệ)</option>
                    </select>
                </div>
            </div>

            <div class="space-y-2 pt-2">
                <span class="text-xs font-black text-amber-600 uppercase block">Chi tiết hoặc nhân vật em ấn tượng nhất:</span>
                <textarea id="read-book-detail" rows="3" placeholder="Ví dụ: Em rất thích chi tiết Dế Mèn hối hận trước cái chết của Dế Choắt và nhận ra bài học kiêu ngạo của mình..." class="w-full p-4 border border-amber-100 rounded-2xl outline-none focus:border-amber-500 font-bold bg-white text-base"></textarea>
            </div>

            <!-- Nút lưu phiếu -->
            <div class="flex justify-center pt-2">
                <button onclick="luuPhieuDocSach84()" class="px-8 py-3 bg-amber-500 text-white font-black rounded-xl hover:bg-amber-500 transition-all text-base shadow active:scale-95">LƯU PHIẾU ĐỌC SÁCH ✓</button>
            </div>
            
            <div id="fb-vn84-phieu" class="hidden p-5 rounded-2xl font-bold text-center mt-2 shadow-lg"></div>
        </div>
    </div>
</div>
`,
    "questions": [
        {
            "question": "Hoạt động 'Đọc mở rộng' có vai trò cốt lõi nào sau đây?",
            "options": [
                "Khuyến khích học sinh tự giác tìm đọc sách báo ngoài giờ học, hình thành thói quen đọc sách chủ động",
                "Là hoạt động bắt buộc để tính điểm thi đua học sinh giỏi cuối học kỳ",
                "Giúp giáo viên có thêm thời gian nghỉ ngơi trên lớp",
                "Để bán được nhiều sách hơn cho thư viện nhà trường"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Yêu cầu chính của tiết Đọc mở rộng Tuần 12 là gì?",
            "options": [
                "Tìm đọc một cuốn sách giới thiệu về tác phẩm văn học hoặc câu chuyện thiếu nhi hấp dẫn",
                "Đọc các bài thơ tả cảnh đẹp quê hương Việt Nam",
                "Giải các bài toán đố về số học và hình học",
                "Tra cứu tất cả các từ láy và từ ghép trong từ điển Tiếng Việt"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Sau khi đọc xong cuốn sách, học sinh cần làm gì để ghi nhận kết quả đọc?",
            "options": [
                "Viết đầy đủ các thông tin thu hoạch vào Phiếu đọc sách cá nhân",
                "Viết thư tay gửi cho tác giả cuốn sách để cảm ơn",
                "Vẽ lại toàn bộ trang bìa cuốn sách bằng màu sáp",
                "Học thuộc lòng từng chương của cuốn sách đó"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Thông tin nào sau đây KHÔNG bắt buộc phải ghi trong Phiếu đọc sách?",
            "options": [
                "Địa chỉ nhà riêng của tác giả cuốn sách",
                "Tên cuốn sách và tên tác giả cuốn sách",
                "Ngày em đọc sách và mức độ em yêu thích cuốn sách",
                "Nội dung chính hoặc chi tiết ấn tượng nhất trong sách"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi trình bày chia sẻ về cuốn sách trước nhóm hoặc lớp, em nên có thái độ như thế nào?",
            "options": [
                "Nói rõ ràng, giới thiệu mạch lạc tên sách, tác giả và bày tỏ cảm nhận chân thành",
                "Nói thật nhỏ để các bạn không nghe thấy",
                "Đứng đọc y nguyên nội dung trong Phiếu đọc sách một cách máy móc",
                "Chỉ trích các cuốn sách của các bạn khác giới thiệu"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Việc ghi lại 'Chi tiết em ấn tượng nhất' trong Phiếu đọc sách có ý nghĩa gì?",
            "options": [
                "Giúp em ghi nhớ sâu sắc giá trị nghệ thuật, bài học hoặc nội dung đắt giá nhất của tác phẩm",
                "Giúp làm đầy chỗ trống trên phiếu đọc sách cho đẹp mắt",
                "Để giáo viên kiểm tra xem em có đọc sách thật hay không",
                "Không có ý nghĩa gì đối với việc đọc sách"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Nếu muốn tìm đọc các câu chuyện thiếu nhi hay, thư viện trường là nguồn sách như thế nào?",
            "options": [
                "Là nguồn sách phong phú, được chọn lọc phù hợp với học sinh tiểu học",
                "Là nơi chỉ dành cho giáo viên mượn sách giảng dạy",
                "Là nơi chứa những cuốn sách cũ không còn giá trị sử dụng",
                "Nơi bắt buộc học sinh phải trả tiền phí rất đắt khi mượn sách"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tác phẩm nào sau đây là truyện thiếu nhi nổi tiếng của nhà văn Tô Hoài?",
            "options": [
                "Dế Mèn phiêu lưu kí",
                "Kính vạn hoa",
                "Đất rừng phương Nam",
                "Không gia đình"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tác phẩm 'Không gia đình' kể về cuộc đời phiêu lưu đầy nghị lực của nhân vật nào?",
            "options": [
                "Cậu bé Rê-mi",
                "Chú Dế Mèn",
                "Cậu bé Tích Chu",
                "Cô bé Tấm"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi bạn chia sẻ về cuốn sách bạn yêu thích, học sinh lắng nghe cần làm gì?",
            "options": [
                "Tập trung lắng nghe, tôn trọng ý kiến bạn và ghi lại tên sách hay nếu muốn tìm đọc",
                "Làm việc riêng, nói chuyện để nhanh chóng hết tiết học",
                "Chê bai ý kiến và cuốn sách bạn chọn",
                "Tranh giành micro để nói xen vào lời bạn"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đọc mở rộng giúp em bổ trợ tốt nhất cho phân môn học nào trong Tiếng Việt?",
            "options": [
                "Làm văn (Viết) và Nói & Nghe nhờ mở rộng vốn từ và ý tưởng diễn đạt",
                "Học viết chữ đẹp theo mẫu chữ hoa nét thanh nét đậm",
                "Kỹ năng sử dụng phấn viết bảng của học sinh",
                "Kỹ năng vẽ tranh minh họa bằng màu nước"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Mức độ yêu thích cuốn sách thường được thể hiện bằng biểu tượng nào trên phiếu?",
            "options": [
                "Biểu tượng ngôi sao (1 đến 5 sao)",
                "Biểu tượng hình tròn màu sắc",
                "Điểm số từ 1 đến 10",
                "Lời nhận xét đạt hoặc không đạt"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Để duy trì thói quen đọc mở rộng hiệu quả nhất, em nên thực hiện phương án nào?",
            "options": [
                "Dành ra ít nhất 15-20 phút đọc sách tự chọn mỗi ngày vào một thời gian cố định",
                "Chỉ đọc dồn dập vào đêm trước ngày có tiết Đọc mở rộng",
                "Nhờ bố mẹ đọc hộ rồi kể lại cho nhanh",
                "Chỉ đọc mục lục của cuốn sách để lấy thông tin ghi phiếu"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Từ nào sau đây viết đúng chính tả tên một tác phẩm dịch nổi tiếng cho thiếu nhi?",
            "options": [
                "Tốt-tô-chan bên cửa sổ",
                "Tố tô chan bên cửa sổ",
                "Tôt-tô-chan bên của sổ",
                "Tốt tô chan bên cửa sổ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Việc ghi chép cẩn thận vào Phiếu đọc sách rèn luyện cho em đức tính nào?",
            "options": [
                "Tính kiên trì, cẩn thận, biết chọn lọc thông tin và trân trọng tri thức",
                "Tính nóng vội, làm cho có để nộp bài",
                "Sự phụ thuộc vào người khác",
                "Thói quen lười suy nghĩ tự lập"
            ],
            "answer": 0,
            "level": 2
        }
    ]
};

// --- LƯU PHIẾU ĐỌC SÁCH ---
window.luuPhieuDocSach84 = function() {
    const bookName = document.getElementById('read-book-name')?.value.trim();
    const bookAuthor = document.getElementById('read-book-author')?.value.trim();
    const bookDate = document.getElementById('read-book-date')?.value;
    const bookRating = document.getElementById('read-book-rating')?.value;
    const bookDetail = document.getElementById('read-book-detail')?.value.trim();
    const fb = document.getElementById('fb-vn84-phieu');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!bookName || !bookAuthor || !bookDate || !bookDetail) {
        fb.innerHTML = "⚠️ Em hãy điền đầy đủ tất cả các trường thông tin trong Phiếu đọc sách nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm animate-bounce";
        return;
    }

    let starsStr = '⭐'.repeat(parseInt(bookRating || '5'));

    fb.innerHTML = `
        <div class="space-y-3 text-left">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÃ LƯU PHIẾU ĐỌC SÁCH THÀNH CÔNG:</span>
            <p class="text-xl font-black text-white">📖 Cuốn sách: "${bookName}" (${bookAuthor})</p>
            <p class="text-sm text-emerald-800 font-bold">📅 Ngày đọc: ${bookDate} | Mức độ yêu thích: ${starsStr}</p>
            <p class="text-base text-emerald-50 font-bold italic mt-2">📝 Chi tiết ấn tượng: "${bookDetail}"</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold text-xs rounded-full shadow-sm mt-3">🎉 Chứng nhận độc giả tích cực</span>
        </div>
    `;
    fb.className = "p-6 rounded-3xl font-bold bg-emerald-600 text-white shadow-xl border border-emerald-100 mt-2";
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.nopBai84Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 85',
            '📖',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🌟</span><p class="text-2xl md:text-3xl font-bold text-indigo-800">Chúc mừng em đã hoàn thành bài học Đọc mở rộng!</p><p class="text-lg text-gray-800 mt-3">Hãy tiếp tục khám phá thế giới tri thức diệu kỳ qua những cuốn sách hay mỗi ngày nhé!</p></div>'
        );
    }
};
