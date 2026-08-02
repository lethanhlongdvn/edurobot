export const lesson104 = {
    "topic": "Tiếng Việt 5",
    "week": "15",
    "period": "104",
    "title": "VIẾT: ĐÁNH GIÁ, CHỈNH SỬA ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ MỘT BÀI THƠ",
    "desc": "Bài học giúp học sinh tự đánh giá đoạn văn biểu cảm đã viết theo 4 tiêu chí: bố cục, nội dung cảm xúc, ngôn ngữ biểu cảm, chính tả – trình bày. Thực hành chỉnh sửa và viết lại câu văn hay hơn.",
    "subject": "Viết",
    "theme": "Với cộng đồng",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-blue-600">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-blue-950 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-blue-600 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết đánh giá đoạn văn đã viết dựa trên 4 tiêu chí: bố cục, nội dung biểu cảm, ngôn ngữ, chính tả – trình bày.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Phát hiện và chỉnh sửa các lỗi trong đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Viết lại một số câu văn cho hay hơn, giàu cảm xúc hơn.
            </li>
        </ul>
    </div>

    <!-- 📋 PHẦN 1: Nghe nhận xét chung -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-blue-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">1</span>
            <h3 class="text-2xl md:text-3xl font-black text-blue-600">Nghe thầy cô giáo nhận xét chung.</h3>
        </div>
        <div class="bg-sky-50/50 p-5 rounded-2xl border border-sky-100 max-w-3xl mx-auto">
            <p class="text-lg md:text-xl font-bold text-sky-900">💬 Thầy cô sẽ nhận xét chung về ưu điểm và hạn chế trong bài viết của cả lớp. Em hãy lắng nghe và ghi nhớ những góp ý quan trọng nhé!</p>
            <div class="mt-4 space-y-2">
                <label class="text-base font-bold text-sky-800">📝 Em ghi lại nhận xét của thầy cô (nếu muốn):</label>
                <textarea id="p104-nhanxet-gc" rows="2" placeholder="Ví dụ: Thầy nói nhiều bạn chưa có trích dẫn thơ trong ngoặc kép..." class="w-full p-3 text-lg rounded-xl border border-gray-200 outline-none focus:border-sky-500 font-semibold bg-white text-gray-800"></textarea>
            </div>
        </div>
    </div>

    <!-- 📋 PHẦN 2: Tự đánh giá theo 4 tiêu chí -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-blue-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">2</span>
            <h3 class="text-2xl md:text-3xl font-black text-blue-600">Đọc lại đoạn văn em viết và nhận xét của thầy cô giáo để biết bài làm đạt được những yêu cầu nào dưới đây:</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto select-none">
            <!-- Tiêu chí 1: Bố cục -->
            <label class="flex items-start gap-3 p-5 rounded-3xl border-2 border-sky-200 bg-sky-50/40 hover:bg-sky-100/60 cursor-pointer transition-all">
                <input type="checkbox" id="ck-vn104-tc1" class="w-6 h-6 text-sky-600 rounded mt-1 shrink-0">
                <div>
                    <span class="text-lg font-black text-sky-950">Có đủ phần mở đầu, triển khai, kết thúc.</span>
                </div>
            </label>

            <!-- Tiêu chí 2: Nội dung -->
            <label class="flex items-start gap-3 p-5 rounded-3xl border-2 border-emerald-200 bg-emerald-50/40 hover:bg-emerald-100/60 cursor-pointer transition-all">
                <input type="checkbox" id="ck-vn104-tc2" class="w-6 h-6 text-emerald-600 rounded mt-1 shrink-0">
                <div>
                    <span class="text-lg font-black text-emerald-950">Nêu rõ những điều mình yêu thích hoặc có ấn tượng sâu sắc về bài thơ (cái hay, cái đẹp của bài thơ).</span>
                </div>
            </label>

            <!-- Tiêu chí 3: Ngôn ngữ -->
            <label class="flex items-start gap-3 p-5 rounded-3xl border-2 border-amber-200 bg-amber-50/40 hover:bg-amber-100/60 cursor-pointer transition-all">
                <input type="checkbox" id="ck-vn104-tc3" class="w-6 h-6 text-amber-600 rounded mt-1 shrink-0">
                <div>
                    <span class="text-lg font-black text-amber-950">Sử dụng từ ngữ, câu văn..., thể hiện rõ tình cảm, cảm xúc đối với bài thơ.</span>
                </div>
            </label>

            <!-- Tiêu chí 4: Chính tả -->
            <label class="flex items-start gap-3 p-5 rounded-3xl border-2 border-rose-200 bg-rose-50/40 hover:bg-rose-100/60 cursor-pointer transition-all">
                <input type="checkbox" id="ck-vn104-tc4" class="w-6 h-6 text-rose-600 rounded mt-1 shrink-0">
                <div>
                    <span class="text-lg font-black text-rose-950">Không mắc lỗi chính tả, chữ viết sạch, rõ ràng.</span>
                </div>
            </label>
        </div>

        <div class="flex justify-center">
            <button onclick="kiemTraTieuChi104()" class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all text-lg shadow-md active:scale-95">XÁC NHẬN ĐÁNH GIÁ ✓</button>
        </div>
        <div id="fb-vn104-tc" class="hidden p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto"></div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-10 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 PHẦN 3: Chỉnh sửa bài viết -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-blue-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">3</span>
            <h3 class="text-2xl md:text-3xl font-black text-blue-600">Chỉnh sửa bài viết</h3>
        </div>

        <div class="space-y-4 max-w-4xl mx-auto">
            <div class="bg-sky-50/30 p-4 rounded-2xl border border-sky-100 space-y-2">
                <p class="text-lg font-bold text-sky-900">👉 Sửa lỗi trong đoạn văn em viết theo nhận xét của thầy cô hoặc góp ý của bạn.</p>
                <p class="text-lg font-bold text-sky-900">👉 Viết lại một số câu văn cho hay hơn.</p>
            </div>

            <!-- Bài mẫu tham khảo -->
            <div class="bg-amber-50/30 p-5 rounded-3xl border border-amber-100 space-y-3">
                <h4 class="font-black text-amber-900 text-lg flex items-center gap-2">
                    <span class="text-xl">📖</span> Bài mẫu tham khảo (M):
                </h4>
                <div class="bg-white p-5 rounded-2xl border border-amber-200 text-lg font-serif leading-relaxed text-gray-800 italic">
                    <p class="indent-8">Hai dòng thơ "Con thác réo ngàn nga/ Đàn dê soi dáy suối" trong bài <em class="text-blue-700 not-italic font-bold">Trước cổng trời</em> đẹp như một bức tranh. Tôi như thấy hiện ra trước mắt mình dòng thác trắng xoá đổ xuống từ núi cao, như nghe thấy tiếng nước reo rộn rã, ngân vang khắp núi rừng. Bên dòng suối uốn lượn dưới chân núi, đàn dê thong dong, soi bóng mình xuống đáy nước trong vắt... Hình ảnh thơ đẹp biết bao!</p>
                </div>
                <p class="text-sm font-bold text-amber-700 text-center">💡 Chú ý: Bài mẫu trên có đủ cảm xúc rõ ràng, trích dẫn thơ trong ngoặc kép và dùng nhiều từ ngữ biểu cảm.</p>
            </div>

            <!-- Ô viết lại -->
            <div class="space-y-3">
                <p class="font-black text-blue-600 text-lg">✏️ Em hãy viết lại đoạn văn đã chỉnh sửa của mình vào đây:</p>
                <div class="relative bg-amber-50/15 border-2 border-blue-200 rounded-3xl p-6 shadow-inner">
                    <textarea id="ans-vn104-chinhsua" rows="8" placeholder="Viết lại đoạn văn thể hiện tình cảm, cảm xúc về bài thơ sau khi đã chỉnh sửa theo góp ý..." class="w-full p-4 text-xl rounded-2xl border border-gray-200 outline-none focus:border-blue-500 font-bold bg-white text-gray-800 leading-relaxed"></textarea>
                </div>

                <div class="flex justify-center">
                    <button onclick="kiemTraChinhSua104()" class="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-lg rounded-2xl shadow-md active:scale-95 transition-all flex items-center gap-2">
                        <span>👨‍🏫 THẦY E CHẤM BÀI CHỈNH SỬA</span>
                    </button>
                </div>
                <div id="fb-vn104-chinhsua" class="hidden p-5 rounded-2xl font-bold text-lg"></div>
            </div>
        </div>
    </section>

    <!-- 📋 PHẦN 4: Tự đánh giá sau chỉnh sửa -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-blue-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">✅</span>
            <h3 class="text-2xl md:text-3xl font-black text-blue-600">Tự đánh giá sau chỉnh sửa</h3>
        </div>

        <p class="text-lg font-bold text-gray-700 max-w-3xl mx-auto">💬 Sau khi chỉnh sửa, em hãy tự đánh giá xem bài viết mới của mình đã đạt những tiêu chí nào:</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto select-none">
            <label class="flex items-center gap-3 p-4 rounded-2xl border-2 border-sky-200 bg-sky-50/30 cursor-pointer hover:bg-sky-100/50 transition-all">
                <input type="checkbox" id="ck-vn104-s1" class="w-6 h-6 text-sky-600 rounded shrink-0">
                <span class="font-bold text-sky-900">Đã sửa lỗi bố cục (đủ mở đầu, triển khai, kết thúc)</span>
            </label>
            <label class="flex items-center gap-3 p-4 rounded-2xl border-2 border-emerald-200 bg-emerald-50/30 cursor-pointer hover:bg-emerald-100/50 transition-all">
                <input type="checkbox" id="ck-vn104-s2" class="w-6 h-6 text-emerald-600 rounded shrink-0">
                <span class="font-bold text-emerald-900">Đã bổ sung cảm xúc và ấn tượng sâu sắc hơn</span>
            </label>
            <label class="flex items-center gap-3 p-4 rounded-2xl border-2 border-amber-200 bg-amber-50/30 cursor-pointer hover:bg-amber-100/50 transition-all">
                <input type="checkbox" id="ck-vn104-s3" class="w-6 h-6 text-amber-600 rounded shrink-0">
                <span class="font-bold text-amber-900">Đã viết lại câu văn hay hơn, giàu cảm xúc hơn</span>
            </label>
            <label class="flex items-center gap-3 p-4 rounded-2xl border-2 border-rose-200 bg-rose-50/30 cursor-pointer hover:bg-rose-100/50 transition-all">
                <input type="checkbox" id="ck-vn104-s4" class="w-6 h-6 text-rose-600 rounded shrink-0">
                <span class="font-bold text-rose-900">Đã sửa hết lỗi chính tả, chữ viết sạch rõ ràng</span>
            </label>
        </div>

        <div class="flex justify-center pt-2">
            <button onclick="kiemTraSauChinhSua104()" class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all text-lg shadow-md active:scale-95">XÁC NHẬN HOÀN TẤT ✓</button>
        </div>
        <div id="fb-vn104-sau" class="hidden p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto"></div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn104Global()" class="px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <span>HOÀN THÀNH BÀI HỌC ✓</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ cần có những phần nào?",
            "options": [
                "Mở đầu, Triển khai, Kết thúc",
                "Mở bài, Thân bài, Kết luận",
                "Đặt vấn đề, Phân tích, Tổng kết",
                "Giới thiệu, Kể chuyện, Bình luận"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Phần triển khai của đoạn văn biểu cảm về bài thơ cần nêu rõ điều gì?",
            "options": [
                "Những điều mình yêu thích hoặc có ấn tượng sâu sắc về bài thơ (cái hay, cái đẹp)",
                "Tiểu sử đầy đủ của tác giả bài thơ",
                "Tóm tắt toàn bộ câu chuyện trong bài thơ",
                "Liệt kê tất cả các biện pháp tu từ có trong bài thơ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tiêu chí nào sau đây KHÔNG thuộc 4 tiêu chí đánh giá đoạn văn biểu cảm?",
            "options": [
                "Đoạn văn phải dài ít nhất 200 từ",
                "Có đủ phần mở đầu, triển khai, kết thúc",
                "Sử dụng từ ngữ thể hiện rõ tình cảm, cảm xúc",
                "Không mắc lỗi chính tả, chữ viết sạch rõ ràng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi chỉnh sửa bài viết, em cần làm gì?",
            "options": [
                "Sửa lỗi theo nhận xét của thầy cô hoặc góp ý của bạn, viết lại câu văn cho hay hơn",
                "Xoá toàn bộ bài cũ và viết lại từ đầu với đề bài khác",
                "Chỉ sửa lỗi chính tả, không cần thay đổi nội dung",
                "Chép lại bài của bạn khác cho hoàn chỉnh hơn"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong bài mẫu trang 138, tác giả biểu cảm về bài thơ nào?",
            "options": [
                "Trước cổng trời",
                "Tiếng đàn ba-la-lai-ca trên sông Đà",
                "Tuổi Ngựa",
                "Tập hát quan họ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Hai dòng thơ nào được trích dẫn trong bài mẫu trang 138?",
            "options": [
                "Con thác réo ngàn nga / Đàn dê soi dáy suối",
                "Đàn dê trắng / Trên đỉnh non cao",
                "Con thác đổ / Dưới chân mây",
                "Suối chảy lặng lờ / Qua thung lũng xanh"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong bài mẫu, tác giả dùng từ ngữ biểu cảm nào để bộc lộ cảm xúc ở cuối đoạn?",
            "options": [
                "Hình ảnh thơ đẹp biết bao!",
                "Bài thơ thật dài.",
                "Tôi đã đọc xong bài thơ.",
                "Tác giả viết rất giỏi."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tại sao cần trích dẫn câu thơ trong dấu ngoặc kép khi viết đoạn văn biểu cảm?",
            "options": [
                "Để người đọc biết đó là lời thơ gốc, tăng tính chân thực và thuyết phục",
                "Để bài văn trông dài hơn",
                "Vì đó là quy tắc bắt buộc của chính tả",
                "Để giáo viên dễ chấm điểm hơn"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ ngữ nào dưới đây thể hiện rõ cảm xúc của người viết về bài thơ?",
            "options": [
                "xúc động, bồi hồi, ấn tượng sâu sắc",
                "có 4 khổ, viết năm 1990",
                "dài 20 dòng, sử dụng thể thơ lục bát",
                "nhà thơ quê ở Hà Nội"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Bước đầu tiên trong quy trình đánh giá, chỉnh sửa đoạn văn là gì?",
            "options": [
                "Nghe thầy cô giáo nhận xét chung",
                "Viết lại toàn bộ đoạn văn",
                "Đếm số từ trong đoạn văn",
                "Chép bài mẫu vào vở"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Câu nào sau đây thể hiện cảm xúc trực tiếp về bài thơ?",
            "options": [
                "Tôi thực sự bồi hồi và xúc động trước hình ảnh ấm áp ấy.",
                "Bài thơ gồm có bốn khổ thơ.",
                "Nhà thơ sinh năm 1948 tại Hải Dương.",
                "Bài thơ có nhịp thơ 2/2/3."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Phần mở đầu đoạn văn biểu cảm cần làm gì?",
            "options": [
                "Giới thiệu tên bài thơ, tác giả và nêu cảm xúc khái quát",
                "Trích dẫn toàn bộ bài thơ",
                "Kể tiểu sử chi tiết của nhà thơ",
                "Giải nghĩa tất cả các từ khó"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi đọc lại bài viết, nếu phát hiện câu văn chưa hay, em nên làm gì?",
            "options": [
                "Viết lại câu đó cho hay hơn, giàu cảm xúc hơn",
                "Xoá bỏ câu đó và để trống",
                "Giữ nguyên vì sửa sẽ mất thời gian",
                "Thêm nhiều dấu chấm than vào cuối câu"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tiêu chí 'Không mắc lỗi chính tả, chữ viết sạch rõ ràng' đánh giá khía cạnh nào của bài viết?",
            "options": [
                "Hình thức trình bày",
                "Nội dung cảm xúc",
                "Bố cục đoạn văn",
                "Sự sáng tạo trong ý tưởng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong bài mẫu trang 138, tác giả dùng biện pháp nghệ thuật nào để miêu tả cảm nhận?",
            "options": [
                "So sánh ('đẹp như một bức tranh') và liệt kê hình ảnh",
                "Nhân hoá con thác biết nói chuyện",
                "Ẩn dụ đàn dê là con người",
                "Hoán dụ lấy dòng suối chỉ con sông lớn"
            ],
            "answer": 0,
            "level": 2
        }
    ]
};

// ===== PHẦN 2: Kiểm tra tự đánh giá 4 tiêu chí =====
window.kiemTraTieuChi104 = function() {
    const tc1 = document.getElementById('ck-vn104-tc1')?.checked;
    const tc2 = document.getElementById('ck-vn104-tc2')?.checked;
    const tc3 = document.getElementById('ck-vn104-tc3')?.checked;
    const tc4 = document.getElementById('ck-vn104-tc4')?.checked;
    const fb = document.getElementById('fb-vn104-tc');
    if (!fb) return;
    fb.classList.remove('hidden');

    const count = [tc1, tc2, tc3, tc4].filter(Boolean).length;

    if (count === 4) {
        fb.innerHTML = '🎉 Tuyệt vời! Bài viết của em đạt cả 4 tiêu chí. Hãy tiếp tục giữ vững phong độ và chỉnh sửa thêm nếu muốn bài viết hoàn hảo hơn nhé!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-emerald-100 text-emerald-900';
    } else if (count >= 2) {
        const chuaDat = [];
        if (!tc1) chuaDat.push('bố cục');
        if (!tc2) chuaDat.push('nội dung cảm xúc');
        if (!tc3) chuaDat.push('ngôn ngữ biểu cảm');
        if (!tc4) chuaDat.push('chính tả – trình bày');
        fb.innerHTML = `👍 Em đạt ${count}/4 tiêu chí. Hãy chú ý chỉnh sửa thêm phần: <strong>${chuaDat.join(', ')}</strong> ở bước tiếp theo nhé!`;
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-blue-100 text-blue-600';
    } else if (count >= 1) {
        fb.innerHTML = `⚠️ Em mới đạt ${count}/4 tiêu chí. Đừng lo, bước tiếp theo sẽ hướng dẫn em chỉnh sửa để bài viết tốt hơn!`;
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-amber-100 text-amber-900';
    } else {
        fb.innerHTML = '💬 Em chưa tích tiêu chí nào. Hãy đọc lại bài viết của mình và đánh giá xem bài đã đạt những yêu cầu nào nhé!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-amber-100 text-amber-900';
    }
};

// ===== PHẦN 3: AI Thầy E chấm bài chỉnh sửa =====
window.kiemTraChinhSua104 = function() {
    const text = document.getElementById('ans-vn104-chinhsua').value.trim();
    const fb = document.getElementById('fb-vn104-chinhsua');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = `<div class="flex items-start gap-4"><span class="text-2xl md:text-3xl">👨‍🏫</span><div><h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E nhắc nhở:</h5><p class="text-lg">Em hãy viết đoạn văn đã chỉnh sửa vào khung giấy trước khi gửi Thầy E nhé!</p></div></div>`;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300';
        return;
    }

    const words = text.split(/\s+/).filter(w => w.length > 0);
    if (words.length < 50) {
        fb.innerHTML = `<div class="flex items-start gap-4"><span class="text-2xl md:text-3xl">👨‍🏫</span><div><h5 class="font-black text-xl mb-1 text-rose-900">AI Thầy E góp ý:</h5><p class="text-lg">Đoạn văn chỉnh sửa hơi ngắn (hiện tại có ${words.length} từ). Hãy viết đầy đủ hơn, tối thiểu 60 từ nhé!</p></div></div>`;
        fb.className = 'p-5 rounded-2xl font-bold bg-rose-100 text-rose-900 border border-rose-300';
        return;
    }

    // Kiểm tra trích dẫn ngoặc kép
    const hasQuotes = text.includes('"') || text.includes('\u201c') || text.includes('\u201d') || text.includes('\u00ab') || text.includes('\u00bb');
    if (!hasQuotes) {
        fb.innerHTML = `<div class="flex items-start gap-4"><span class="text-2xl md:text-3xl">👨‍🏫</span><div><h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E góp ý:</h5><p class="text-lg">Bài viết chỉnh sửa cần bổ sung trích dẫn câu thơ tiêu biểu trong dấu ngoặc kép "..." để minh hoạ cho cảm xúc của em nhé!</p></div></div>`;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300';
        return;
    }

    // Kiểm tra từ cảm xúc
    const emotionKeywords = ['xúc động', 'yêu mến', 'yêu thích', 'bồi hồi', 'ấn tượng', 'đẹp', 'tự hào', 'tha thiết', 'say mê', 'ấm áp', 'thú vị', 'thương mến', 'mến yêu', 'biết bao', 'ngưỡng mộ', 'trân trọng', 'cảm phục', 'vui sướng'];
    const hasEmotion = emotionKeywords.some(kw => text.toLowerCase().includes(kw));

    if (!hasEmotion) {
        fb.innerHTML = `<div class="flex items-start gap-4"><span class="text-2xl md:text-3xl">👨‍🏫</span><div><h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E góp ý:</h5><p class="text-lg">Em hãy bổ sung thêm các từ ngữ bộc lộ cảm xúc như: <em>xúc động, yêu mến, ấn tượng, tha thiết, say mê, biết bao...</em> để đoạn văn giàu sức biểu cảm hơn nhé!</p></div></div>`;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300';
        return;
    }

    fb.innerHTML = `<div class="flex items-start gap-4 animate-fade-in"><span class="text-xl md:text-3xl">👨‍🏫</span><div><h5 class="font-black text-xl mb-1 text-emerald-900">AI Thầy E đánh giá bài chỉnh sửa:</h5><p class="text-lg mb-2">Đoạn văn sau chỉnh sửa đã hay hơn rất nhiều! Em đã biết cách bổ sung cảm xúc chân thực, trích dẫn thơ hợp lý và viết câu văn mạch lạc, giàu hình ảnh. Thầy rất hài lòng với sự tiến bộ này!</p><span class="text-xl font-black bg-emerald-500 text-white px-3 py-1 rounded-lg shadow-sm">Thầy chấm đạt: 10/10 điểm</span></div></div>`;
    fb.className = 'p-5 rounded-2xl font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-md';
};

// ===== PHẦN 4: Xác nhận sau chỉnh sửa =====
window.kiemTraSauChinhSua104 = function() {
    const s1 = document.getElementById('ck-vn104-s1')?.checked;
    const s2 = document.getElementById('ck-vn104-s2')?.checked;
    const s3 = document.getElementById('ck-vn104-s3')?.checked;
    const s4 = document.getElementById('ck-vn104-s4')?.checked;
    const fb = document.getElementById('fb-vn104-sau');
    if (!fb) return;
    fb.classList.remove('hidden');

    const count = [s1, s2, s3, s4].filter(Boolean).length;

    if (count === 4) {
        fb.innerHTML = '🎉 Xuất sắc! Em đã hoàn thành việc chỉnh sửa toàn diện đoạn văn biểu cảm. Bài viết của em chắc chắn đã hoàn thiện hơn rất nhiều!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-emerald-100 text-emerald-900 shadow-sm';
    } else {
        fb.innerHTML = `⚠️ Em mới hoàn thành ${count}/4 mục. Hãy cố gắng chỉnh sửa thêm để bài viết đạt chất lượng tốt nhất nhé!`;
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-amber-100 text-amber-900 shadow-sm';
    }
};

// ===== Nộp bài toàn cục =====
window.submitVn104Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 104',
            '✏️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎉</span><p class="text-lg md:text-2xl font-bold text-blue-600">Chúc mừng em đã hoàn thành bài đánh giá, chỉnh sửa đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ!</p><p class="text-lg text-gray-700 mt-3">Kĩ năng tự đánh giá và chỉnh sửa sẽ giúp em ngày càng viết văn hay hơn!</p></div>'
        );
    } else {
        alert('Chúc mừng em đã hoàn thành bài đánh giá, chỉnh sửa đoạn văn!');
    }
};
