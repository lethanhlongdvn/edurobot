export const lesson77 = {
    "topic": "Tiếng Việt 5",
    "week": "11",
    "period": "77",
    "title": "NÓI & NGHE: CUỐN SÁCH TÔI YÊU",
    "desc": "Bài học giúp học sinh rèn luyện kỹ năng nói và nghe thông qua hoạt động giới thiệu về một cuốn sách mà mình yêu thích; biết cách trình bày rõ ràng, tự nhiên và biết cách lắng nghe, tương tác tích cực.",
    "subject": "Nói & Nghe",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
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
                Biết cách lập dàn ý sơ bộ giới thiệu về cuốn sách yêu thích.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-indigo-900 font-black">•</span>
                Trình bày rõ ràng, tự tin, diễn cảm, kết hợp cử chỉ, điệu bộ khi nói.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-indigo-900 font-black">•</span>
                Biết lắng nghe tích cực, ghi chép những thông tin quan trọng và đặt câu hỏi tương tác với bạn bè.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-indigo-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Tủ sách nhỏ của em</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Trong số các cuốn sách em đã đọc, cuốn sách nào khiến em nhớ nhất và muốn giới thiệu cho các bạn bè cùng đọc?</p>
        
        <div class="space-y-4">
            <textarea id="ans-vn77-kd" rows="3" placeholder="Ví dụ: Cuốn sách em yêu thích nhất là 'Không gia đình' của Héc-to Ma-lô. Cuốn sách kể về cuộc phiêu lưu đầy nghị lực của cậu bé Rê-mi..." class="w-full p-4 border-2 border-indigo-100 rounded-2xl outline-none focus:border-indigo-500 font-bold bg-indigo-50/10 text-xl md:text-2xl"></textarea>
            <div class="flex justify-center">
                <button onclick="kiemTraKhoiDong77()" class="px-8 py-3 bg-indigo-600 text-white font-black rounded-xl hover:bg-indigo-600 transition-all text-base shadow-md active:scale-95">GỬI Ý KIẾN ✓</button>
            </div>
            <div id="fb-vn77-kd" class="hidden p-4 rounded-xl text-sm font-bold text-center mt-2"></div>
        </div>
    </div>

    <!-- 📖 HƯỚNG DẪN CHUẨN BỊ -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-indigo-100 shadow-xl space-y-6">
        <h3 class="text-2xl md:text-3xl font-black text-indigo-800 border-b border-indigo-100 pb-4 flex items-center gap-3">
            <span>📚</span>
            Các bước chuẩn bị bài nói
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div class="p-6 bg-amber-50 rounded-3xl border border-amber-100 space-y-3">
                <span class="w-10 h-10 rounded-full bg-amber-500 text-white font-black flex items-center justify-center text-lg shadow">1</span>
                <h4 class="font-black text-amber-600 text-lg md:text-xl">Bước 1: Chuẩn bị nội dung</h4>
                <ul class="text-sm font-bold text-gray-800 space-y-2">
                    <li>• Lựa chọn cuốn sách em yêu thích nhất.</li>
                    <li>• Xác định tên sách, tác giả, nhà xuất bản.</li>
                    <li>• Ghi nhớ nội dung chính, nhân vật hoặc chi tiết ý nghĩa nhất.</li>
                </ul>
            </div>

            <div class="p-6 bg-sky-50 rounded-3xl border border-sky-100 space-y-3">
                <span class="w-10 h-10 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-lg shadow">2</span>
                <h4 class="font-black text-sky-800 text-lg md:text-xl">Bước 2: Luyện tập trình bày</h4>
                <ul class="text-sm font-bold text-gray-800 space-y-2">
                    <li>• Nói rõ ràng, tốc độ vừa phải.</li>
                    <li>• Thể hiện cảm xúc chân thực qua giọng điệu.</li>
                    <li>• Tương tác bằng ánh mắt với người nghe.</li>
                    <li>• Kết hợp cử chỉ, điệu bộ phù hợp.</li>
                </ul>
            </div>

            <div class="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 space-y-3">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-lg shadow">3</span>
                <h4 class="font-black text-emerald-800 text-lg md:text-xl">Bước 3: Lắng nghe & Tương tác</h4>
                <ul class="text-sm font-bold text-gray-800 space-y-2">
                    <li>• Chú ý lắng nghe khi bạn khác trình bày.</li>
                    <li>• Ghi chép những thông tin thú vị.</li>
                    <li>• Đặt câu hỏi hỏi thăm thân thiện về cuốn sách.</li>
                    <li>• Nhận xét, đóng góp ý kiến chân thành.</li>
                </ul>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 THỰC HÀNH LẬP DÀN Ý -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-indigo-100 shadow-xl space-y-6">
        <div class="flex items-start gap-3 border-b border-indigo-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-indigo-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">?</span>
            <h3 class="text-2xl md:text-3xl font-black text-indigo-800">
                Thực hành thiết kế bài nói của em
            </h3>
        </div>

        <div class="space-y-6 max-w-4xl mx-auto">
            <div class="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-4">
                <p class="font-bold text-gray-800 text-lg md:text-xl">👉 Em hãy điền dàn ý bài nói giới thiệu cuốn sách yêu thích của mình vào khung dưới đây:</p>
                
                <div class="space-y-3 text-base">
                    <div>
                        <label class="font-bold text-gray-800 block mb-1">a. Phần Mở đầu (Giới thiệu tên sách, tác giả, lý do chọn sách):</label>
                        <input type="text" id="ans-vn77-a" placeholder="Ví dụ: Hôm nay mình muốn giới thiệu cuốn sách 'Dế Mèn phiêu lưu ký' của nhà văn Tô Hoài..." class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-white">
                    </div>
                    <div>
                        <label class="font-bold text-gray-800 block mb-1">b. Phần Nội dung (Nói về nội dung chính, nhân vật, chi tiết ấn tượng):</label>
                        <textarea id="ans-vn77-b" rows="3" placeholder="Ví dụ: Cuốn sách kể về cuộc phiêu lưu của chú Dế Mèn qua thế giới loài vật ngộ nghĩnh. Chi tiết mình ấn tượng nhất là Dế Mèn đã cứu giúp chị Nhà Trò yếu đuối khỏi bọn nhện hung ác..." class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-white"></textarea>
                    </div>
                    <div>
                        <label class="font-bold text-gray-800 block mb-1">c. Phần Kết thúc (Khẳng định ý nghĩa cuốn sách, bài học rút ra, lời khuyên dành cho các bạn):</label>
                        <input type="text" id="ans-vn77-c" placeholder="Ví dụ: Cuốn sách dạy mình bài học về lòng dũng cảm, bảo vệ kẻ yếu. Các bạn nên tìm đọc cuốn sách ý nghĩa này nhé..." class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-white">
                    </div>
                </div>

                <div class="flex justify-center pt-2">
                    <button onclick="kiemTraDanY77()" class="px-8 py-3 bg-indigo-600 text-white font-black rounded-xl hover:bg-indigo-600 transition-all text-base shadow-md active:scale-95">GỬI DÀN Ý ✓</button>
                </div>
                <div id="fb-vn77-dany" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBai77Global()" class="px-12 py-5 bg-gradient-to-r from-indigo-600 to-violet-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-indigo-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Khi giới thiệu về một cuốn sách yêu thích, nội dung nào sau đây cần được trình bày ở phần Mở đầu?",
            "options": [
                "Tên cuốn sách, tác giả và lý do em muốn giới thiệu cuốn sách đó",
                "Kể chi tiết kết thúc bất ngờ của cuốn sách",
                "Đọc một bài thơ của tác giả khác để so sánh",
                "Hướng dẫn các bạn cách mua sách giảm giá"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Để bài nói giới thiệu sách thêm sinh động và hấp dẫn, người nói nên kết hợp thêm yếu tố nào?",
            "options": [
                "Cử chỉ, điệu bộ phù hợp và tương tác bằng ánh mắt với người nghe",
                "Đứng yên một chỗ cúi đầu xuống đất và đọc y nguyên tài liệu viết sẵn",
                "Nói thật nhanh để kịp thời gian ra chơi",
                "Hát một bài hát không liên quan đến cuốn sách"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi lắng nghe bạn bè trình bày bài nói giới thiệu sách, chúng ta cần thể hiện thái độ nào?",
            "options": [
                "Tập trung lắng nghe, ghi chép thông tin thú vị và tương tác phản hồi tích cực",
                "Nói chuyện riêng hoặc làm bài tập môn khác",
                "Cắt ngang lời bạn khi bạn đang nói giữa chừng",
                "Ngủ gật để dưỡng sức cho tiết học tiếp theo"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Phần Nội dung của bài giới thiệu sách cần tập trung làm rõ điều gì?",
            "options": [
                "Tóm tắt nội dung chính và chia sẻ về nhân vật, chi tiết ấn tượng nhất",
                "Danh sách các nhà in ấn và giá tiền cuốn sách",
                "Tiểu sử đầy đủ từ nhỏ đến lớn của tác giả cuốn sách",
                "Những lỗi sai chính tả trong quá trình in ấn cuốn sách"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Mục đích chính của phần Kết thúc bài giới thiệu sách là gì?",
            "options": [
                "Khẳng định giá trị của cuốn sách, bài học rút ra và khuyến khích mọi người cùng đọc",
                "Xin lỗi vì bài nói quá dở và đi về chỗ",
                "Hỏi ý kiến cô giáo xem mình được mấy điểm",
                "Đọc mục lục tất cả các cuốn sách khác của cùng tác giả"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi giới thiệu sách, giọng nói của em cần đạt yêu cầu nào?",
            "options": [
                "Rõ ràng, âm lượng vừa đủ nghe, truyền cảm, có điểm nhấn",
                "Nói thật to, hét lớn để cả lớp giật mình",
                "Nói thì thầm nhỏ nhất có thể để giữ bí mật cuốn sách",
                "Nói đều đều một tông giọng từ đầu đến cuối bài nói"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ nào sau đây thể hiện thái độ tôn trọng người nghe khi giao tiếp?",
            "options": [
                "Lắng nghe, tương tác thân thiện, phản hồi chân thành",
                "Phớt lờ, ngắt lời, chỉ trích, chê bai",
                "Mất tập trung, làm việc riêng, cười cợt",
                "Nói xen vào, tranh giành quyền nói"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Nếu trong bài giới thiệu sách có chi tiết em chưa hiểu rõ, em nên làm thế nào khi thảo luận?",
            "options": [
                "Đặt câu hỏi hỏi thăm thân thiện với bạn trình bày để trao đổi thêm",
                "Bỏ qua không quan tâm nữa",
                "Chê bai bạn vì bạn chọn cuốn sách khó hiểu",
                "Tự ý bịa ra câu trả lời theo suy nghĩ cá nhân"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trước khi trình bày bài nói trước đám đông, hoạt động nào giúp em tự tin hơn?",
            "options": [
                "Lập dàn ý chi tiết và tập nói trước gương hoặc nói thử với người thân",
                "Học thuộc lòng từng từ từng chữ như máy móc",
                "Không cần chuẩn bị gì để nói ngẫu hứng",
                "Nhờ bạn nói hộ phần khó nhất của bài"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nói & Nghe thuộc kỹ năng giao tiếp nào sau đây?",
            "options": [
                "Giao tiếp ngôn ngữ và phi ngôn ngữ tương tác hai chiều",
                "Giao tiếp một chiều từ trên xuống dưới",
                "Kỹ năng viết văn biểu cảm",
                "Kỹ năng tra cứu từ điển trực tuyến"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Việc ghi chép nhanh khi nghe bạn nói có tác dụng gì?",
            "options": [
                "Giúp ghi nhớ thông tin chính để đặt câu hỏi thảo luận hoặc nhận xét chính xác",
                "Giúp giết thời gian khi bạn nói quá dài",
                "Để nộp lại cho giáo viên chấm điểm chữ đẹp",
                "Để rèn luyện tốc độ viết tay nhanh"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Câu nào sau đây là lời nhận xét tích cực, lịch sự sau khi nghe bạn nói?",
            "options": [
                "Bài trình bày của bạn rất thú vị, chi tiết về nhân vật làm mình rất xúc động.",
                "Bài nói của bạn chán quá, mình không muốn nghe chút nào.",
                "Bạn nói nhỏ quá, mình chẳng nghe thấy gì cả.",
                "Cuốn sách này dở lắm, sao bạn lại chọn giới thiệu?"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cách xưng hô nào sau đây phù hợp nhất khi giới thiệu sách trước lớp?",
            "options": [
                "Mình - Các bạn (hoặc Em - Thầy Cô và các bạn)",
                "Tớ - Cậu (xưng hô cá nhân quá thân mật)",
                "Tôi - Mọi người (quá xa cách)",
                "Ta - Các ngươi (không phù hợp)"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Để thu hút sự chú ý của người nghe ngay từ đầu bài nói, em nên làm gì?",
            "options": [
                "Bắt đầu bằng một câu hỏi gợi mở thú vị hoặc một câu đố vui liên quan đến sách",
                "Đi thẳng vào đọc phần tóm tắt dài dòng",
                "Yêu cầu cả lớp phải im lặng tuyệt đối trước khi nói",
                "Nói lời xin lỗi trước vì bài nói sẽ rất dài"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Khi giới thiệu một cuốn truyện tranh, việc mang theo cuốn sách đó có tác dụng gì?",
            "options": [
                "Làm trực quan sinh động giúp người nghe dễ hình dung tranh vẽ minh họa",
                "Để làm đạo cụ che mặt khi ngượng ngùng",
                "Để bán lại cuốn sách cho các bạn có nhu cầu",
                "Để đọc y nguyên chữ trong sách cho nhanh"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- KHỞI ĐỘNG ---
window.kiemTraKhoiDong77 = function() {
    const text = document.getElementById('ans-vn77-kd')?.value.trim();
    const fb = document.getElementById('fb-vn77-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy nhập chia sẻ của em về một cuốn sách em yêu thích nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow-sm animate-bounce";
        return;
    }

    fb.innerHTML = "🎉 Tuyệt vời! Chia sẻ của em rất thú vị. Cuốn sách đó chắc chắn chứa đựng những giá trị rất đẹp. Hãy cùng xem các bước chuẩn bị dàn ý nói dưới đây nhé.";
    fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-indigo-600 text-white mt-2 shadow-md";
};

// --- KIỂM TRA DÀN Ý ---
window.kiemTraDanY77 = function() {
    const a = document.getElementById('ans-vn77-a')?.value.trim();
    const b = document.getElementById('ans-vn77-b')?.value.trim();
    const c = document.getElementById('ans-vn77-c')?.value.trim();
    const fb = document.getElementById('fb-vn77-dany');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!a || !b || !c) {
        fb.innerHTML = "⚠️ Em hãy điền đầy đủ cả 3 phần Mở đầu, Nội dung và Kết thúc cho dàn ý bài nói nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2 text-left">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ DÀN Ý:</span>
            <p class="text-lg font-bold text-emerald-800">"Dàn ý của em rất logic và rõ ràng! Các ý chính được sắp xếp hợp lý theo 3 phần. Em có thể dựa vào đây để thực hành trình bày bài nói thật tự tin trước cả lớp."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold text-xs rounded-full shadow-sm mt-2">Dàn ý đạt chuẩn Nói & Nghe</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 mt-2";
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.nopBai77Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 78',
            '🗣️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🗣️</span><p class="text-2xl md:text-3xl font-bold text-indigo-800">Chúc mừng em đã hoàn thành bài học hôm nay!</p><p class="text-lg text-gray-800 mt-3">Hãy luôn tự tin chia sẻ những cuốn sách hay tới mọi người xung quanh nhé. Đọc sách và lan tỏa tri thức là một nét văn hóa vô cùng tốt đẹp.</p></div>'
        );
    }
};
