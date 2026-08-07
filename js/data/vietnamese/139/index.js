export const lesson139 = {
    "topic": "Tiếng Việt 5",
    "week": "20",
    "period": "139",
    "title": "VIẾT: LẬP DÀN Ý CHO BÀI VĂN TẢ NGƯỜI",
    "desc": "Học sinh lựa chọn đề bài, lập dàn ý cho bài văn tả người theo cấu trúc 3 phần và biết cách chỉnh sửa dàn ý.",
    "subject": "Viết",
    "theme": "Vẻ đẹp cuộc sống",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">

    <!-- 🎯 Chọn đề bài -->
    <div class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-[36px] p-8 text-white relative overflow-hidden shadow-xl">
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <h3 class="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3 relative z-10">
            <span class="p-2 bg-white/20 rounded-xl shadow-md">📝</span>
            Chọn 1 trong 2 đề sau đây
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div class="bg-white/20 backdrop-blur-md p-6 rounded-[24px] border border-white/30 space-y-2">
                <div class="text-xl font-black text-blue-100">Đề 1</div>
                <p class="text-xl md:text-2xl font-bold leading-relaxed">
                    Viết bài văn tả <strong>một người thân trong gia đình</strong> em.
                </p>
            </div>
            <div class="bg-white/20 backdrop-blur-md p-6 rounded-[24px] border border-white/30 space-y-2">
                <div class="text-xl font-black text-blue-100">Đề 2</div>
                <p class="text-xl md:text-2xl font-bold leading-relaxed">
                    Viết bài văn tả <strong>một người đã để lại cho em những ấn tượng tốt đẹp</strong>.
                </p>
            </div>
        </div>
    </div>

    <!-- BƯỚC 1: LẬP DÀN Ý -->
    <section class="bg-white p-6 md:p-10 rounded-[40px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 border-b border-blue-100 pb-4">
            <div class="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-lg md:text-2xl font-black shadow-md shrink-0">1</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Lập dàn ý</h3>
        </div>

        <div class="space-y-4 text-xl md:text-2xl font-medium text-gray-700">
            <p>– Dựa vào kết quả quan sát trong hoạt động Viết ở Bài 3, lập dàn ý cho đề bài em đã chọn.</p>
            <p>– Xác định trình tự tả (<em>tả lần lượt ngoại hình, hoạt động,... hoặc kết hợp, đan xen giữa tả ngoại hình với hoạt động,...</em>).</p>
        </div>

        <!-- Cấu trúc 3 phần -->
        <div class="space-y-5">

            <!-- Mở bài -->
            <div class="flex gap-5 items-start">
                <div class="w-28 shrink-0">
                    <div class="bg-blue-600 text-white text-center py-3 px-4 rounded-2xl font-black text-xl md:text-2xl shadow-md">
                        Mở bài
                    </div>
                </div>
                <div class="flex-1 bg-blue-50/60 border-2 border-blue-200 rounded-[24px] p-5">
                    <p class="text-xl md:text-2xl font-bold text-blue-600 leading-relaxed">
                        Giới thiệu về người được tả (tên gọi, mối quan hệ của em với người đó,...) theo cách mở bài <strong>trực tiếp</strong> hoặc <strong>gián tiếp</strong>.
                    </p>
                </div>
            </div>

            <!-- Thân bài -->
            <div class="flex gap-5 items-start">
                <div class="w-28 shrink-0">
                    <div class="bg-emerald-600 text-white text-center py-3 px-4 rounded-2xl font-black text-xl md:text-2xl shadow-md">
                        Thân bài
                    </div>
                </div>
                <div class="flex-1 bg-emerald-50/60 border-2 border-emerald-200 rounded-[24px] p-5 space-y-4">
                    <p class="text-xl md:text-2xl font-bold text-emerald-900">Nêu ngắn gọn những đặc điểm của người được tả:</p>
                    <ul class="space-y-3 ml-4">
                        <li class="flex items-start gap-3 text-xl md:text-2xl font-medium text-gray-700">
                            <span class="text-emerald-600 font-black mt-1 shrink-0">–</span>
                            <span><strong>Ngoại hình</strong> (tầm vóc, dáng người, nước da, gương mặt, trang phục,...)</span>
                        </li>
                        <li class="flex items-start gap-3 text-xl md:text-2xl font-medium text-gray-700">
                            <span class="text-emerald-600 font-black mt-1 shrink-0">–</span>
                            <span><strong>Hoạt động</strong> (việc làm, cử chỉ, lời nói, cách ứng xử,...)</span>
                        </li>
                        <li class="flex items-start gap-3 text-xl md:text-2xl font-medium text-gray-700">
                            <span class="text-emerald-600 font-black mt-1 shrink-0">–</span>
                            <span><strong>Sở trường, sở thích</strong> hoặc tính tình.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Kết bài -->
            <div class="flex gap-5 items-start">
                <div class="w-28 shrink-0">
                    <div class="bg-amber-600 text-white text-center py-3 px-4 rounded-2xl font-black text-xl md:text-2xl shadow-md">
                        Kết bài
                    </div>
                </div>
                <div class="flex-1 bg-amber-50/60 border-2 border-amber-200 rounded-[24px] p-5">
                    <p class="text-xl md:text-2xl font-bold text-amber-900 leading-relaxed">
                        Nêu nhận xét hoặc cảm nghĩ về người được tả theo cách kết bài <strong>mở rộng</strong> hoặc <strong>không mở rộng</strong>.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- BƯỚC 2: GÓP Ý & CHỈNH SỬA -->
    <section class="bg-white p-6 md:p-10 rounded-[40px] border border-orange-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 border-b border-orange-100 pb-4">
            <div class="w-14 h-14 bg-orange-600 text-white rounded-2xl flex items-center justify-center text-lg md:text-2xl font-black shadow-md shrink-0">2</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Góp ý và chỉnh sửa dàn ý</h3>
        </div>

        <div class="space-y-4 text-xl md:text-2xl font-medium text-gray-700">
            <p class="font-black text-gray-800">G: Dàn ý tốt cần đảm bảo:</p>
            <ul class="space-y-4 ml-4">
                <li class="flex items-start gap-3">
                    <span class="text-orange-600 font-black shrink-0">–</span>
                    <span>Lựa chọn được chi tiết về ngoại hình, hoạt động, sở trường,... <strong>thể hiện những nét riêng</strong>, giúp phân biệt người được tả với những người khác.</span>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-orange-600 font-black shrink-0">–</span>
                    <span>Có những <strong>dẫn chứng cụ thể</strong> (hoạt động, sở trường,...) thể hiện được tính cách, phẩm chất của người được tả.</span>
                </li>
            </ul>
        </div>
    </section>
</div>
`,
    "practice": `
<div class="space-y-10 animate-in fade-in duration-700 max-w-6xl mx-auto">

    <!-- DÀN Ý TƯƠNG TÁC -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-blue-50">
        <div class="p-6 md:p-8 bg-blue-50/30 rounded-[32px] space-y-6">
            <div class="flex justify-end items-center gap-4">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl md:text-2xl font-black shadow-md">📝</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Luyện lập dàn ý bài văn tả người</h3>
            </div>

            <!-- Chọn đề -->
            <div class="bg-white rounded-2xl p-5 border border-blue-100 shadow-sm space-y-3">
                <label class="text-xl md:text-2xl font-black text-blue-600">Bước 1 – Em chọn đề:</label>
                <div class="flex gap-4 flex-wrap">
                    <label class="flex items-center gap-3 cursor-pointer p-4 bg-blue-50 rounded-xl border-2 border-transparent hover:border-blue-400 transition-all">
                        <input type="radio" name="de139" value="1" id="de139-1" class="w-5 h-5 accent-blue-600">
                        <span class="text-xl font-bold text-blue-600">Đề 1: Người thân trong gia đình</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer p-4 bg-emerald-50 rounded-xl border-2 border-transparent hover:border-emerald-400 transition-all">
                        <input type="radio" name="de139" value="2" id="de139-2" class="w-5 h-5 accent-emerald-600">
                        <span class="text-xl font-bold text-emerald-900">Đề 2: Người để lại ấn tượng tốt đẹp</span>
                    </label>
                </div>
            </div>

            <!-- Mở bài -->
            <div class="bg-blue-50/50 rounded-2xl p-5 border border-blue-100 space-y-3">
                <h4 class="text-xl md:text-2xl font-black text-blue-600 flex items-center gap-2">
                    <span class="bg-blue-600 text-white px-3 py-1 rounded-xl text-lg">Mở bài</span>
                    Giới thiệu người được tả
                </h4>
                <textarea id="dan-y-moBai" rows="3" placeholder="Ví dụ: Mẹ em tên là Lan, là người phụ nữ gần gũi nhất trong cuộc sống của em. Mỗi ngày, tiếng gọi trìu mến của mẹ là điều em yêu thích nhất..."
                    class="w-full p-4 border-2 border-blue-100 rounded-2xl outline-none focus:border-blue-500 text-xl md:text-2xl font-medium bg-white"></textarea>
            </div>

            <!-- Thân bài -->
            <div class="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100 space-y-4">
                <h4 class="text-xl md:text-2xl font-black text-emerald-900 flex items-center gap-2">
                    <span class="bg-emerald-600 text-white px-3 py-1 rounded-xl text-lg">Thân bài</span>
                    Đặc điểm tiêu biểu
                </h4>
                <div class="space-y-3">
                    <div class="space-y-2">
                        <label class="text-lg font-bold text-emerald-800">👤 Ngoại hình:</label>
                        <textarea id="dan-y-ngoaiHinh" rows="2" placeholder="Ví dụ: Mẹ cao, dáng thon gọn. Mái tóc đen nhánh thường được búi gọn. Đôi mắt to, hiền hậu..."
                            class="w-full p-3 border-2 border-emerald-100 rounded-xl outline-none focus:border-emerald-500 text-xl font-medium bg-white"></textarea>
                    </div>
                    <div class="space-y-2">
                        <label class="text-lg font-bold text-emerald-800">🤸 Hoạt động:</label>
                        <textarea id="dan-y-hoatDong" rows="2" placeholder="Ví dụ: Sáng nào mẹ cũng dậy sớm nấu cơm. Tay mẹ nhanh nhẹn, thoăn thoắt mỗi khi nấu bếp. Giọng mẹ trầm ấm khi kể chuyện cho em nghe..."
                            class="w-full p-3 border-2 border-emerald-100 rounded-xl outline-none focus:border-emerald-500 text-xl font-medium bg-white"></textarea>
                    </div>
                    <div class="space-y-2">
                        <label class="text-lg font-bold text-emerald-800">⭐ Sở trường / Tính tình:</label>
                        <textarea id="dan-y-soTruong" rows="2" placeholder="Ví dụ: Mẹ rất khéo tay, nấu ăn ngon. Mẹ hiền lành, nhẫn nại, luôn lắng nghe em khi em gặp khó khăn..."
                            class="w-full p-3 border-2 border-emerald-100 rounded-xl outline-none focus:border-emerald-500 text-xl font-medium bg-white"></textarea>
                    </div>
                </div>
            </div>

            <!-- Kết bài -->
            <div class="bg-amber-50/50 rounded-2xl p-5 border border-amber-100 space-y-3">
                <h4 class="text-xl md:text-2xl font-black text-amber-900 flex items-center gap-2">
                    <span class="bg-amber-600 text-white px-3 py-1 rounded-xl text-lg">Kết bài</span>
                    Cảm nghĩ về người được tả
                </h4>
                <textarea id="dan-y-ketBai" rows="2" placeholder="Ví dụ: Em rất yêu và kính trọng mẹ. Em hứa sẽ học giỏi để mẹ vui lòng..."
                    class="w-full p-4 border-2 border-amber-100 rounded-2xl outline-none focus:border-amber-500 text-xl md:text-2xl font-medium bg-white"></textarea>
            </div>

            <!-- Nút hoàn thành -->
            <div class="flex justify-end items-center gap-4"><button onclick="nopDanY139();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="result-dan-y-139" class="hidden mt-2 p-6 rounded-2xl text-xl font-bold text-center"></div>
        </div>
    </section>

    <!-- LUYỆN TẬP GÓP Ý DÀN Ý -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-orange-50">
        <div class="p-6 md:p-8 bg-orange-50/30 rounded-[32px] space-y-6">
            <div class="flex justify-end items-center gap-4">
                <div class="w-12 h-12 bg-orange-600 text-white rounded-xl flex items-center justify-center text-xl md:text-2xl font-black shadow-md">✏️</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Luyện tập: Đánh giá dàn ý mẫu</h3>
            </div>

            <p class="text-xl md:text-2xl font-bold text-gray-800">Đọc dàn ý mẫu bên dưới và trả lời câu hỏi:</p>

            <!-- Dàn ý mẫu -->
            <div class="bg-white rounded-2xl border-2 border-blue-100 p-6 shadow-sm space-y-4 font-medium text-xl md:text-2xl text-gray-800 leading-relaxed">
                <p><strong class="text-blue-700">Mở bài:</strong> Cô giáo Hoa dạy em ở lớp 4. Cô là người để lại trong em ấn tượng không bao giờ quên.</p>
                <p><strong class="text-emerald-700">Thân bài:</strong><br>
                    – <em>Ngoại hình:</em> Cô cao, dáng thon. Mái tóc đen buông dài. Đôi mắt sáng, gương mặt hiền hậu.<br>
                    – <em>Hoạt động:</em> Cô giảng bài rõ ràng, dễ hiểu. Khi học sinh chưa hiểu, cô kiên nhẫn giảng lại nhiều lần.<br>
                    – <em>Tính tình:</em> Cô quan tâm từng học sinh, nhớ tên và hoàn cảnh gia đình từng bạn.
                </p>
                <p><strong class="text-amber-700">Kết bài:</strong> Em mãi ghi nhớ sự tận tâm của cô. Mỗi khi học bài, em nghĩ đến lời cô dặn và cố gắng hơn.</p>
            </div>

            <!-- Câu hỏi -->
            <div class="space-y-4">
                <p class="text-xl md:text-2xl font-black text-gray-800">Theo em, dàn ý trên đã đạt yêu cầu chưa?</p>
                <div class="space-y-3">
                    <div id="dany-check-A" onclick="chonDanhGia('A')" class="p-5 bg-white rounded-2xl border-2 border-gray-200 cursor-pointer hover:border-blue-400 transition-all text-xl md:text-2xl font-bold text-gray-700">
                        A. Đã đạt — Có chi tiết nêu bật nét riêng, có dẫn chứng cụ thể về hoạt động và tính cách.
                    </div>
                    <div id="dany-check-B" onclick="chonDanhGia('B')" class="p-5 bg-white rounded-2xl border-2 border-gray-200 cursor-pointer hover:border-blue-400 transition-all text-xl md:text-2xl font-bold text-gray-700">
                        B. Chưa đạt — Thiếu dẫn chứng cụ thể và không có nét riêng của người được tả.
                    </div>
                    <div id="dany-check-C" onclick="chonDanhGia('C')" class="p-5 bg-white rounded-2xl border-2 border-gray-200 cursor-pointer hover:border-blue-400 transition-all text-xl md:text-2xl font-bold text-gray-700">
                        C. Chưa đạt — Dàn ý không có phần kết bài.
                    </div>
                </div>
                <div id="result-danhgia-139" class="hidden p-5 rounded-2xl text-xl font-bold text-center mt-2"></div>
            </div>
        </div>
    </section>
</div>

<script>
    window.nopDanY139 = function() {
        const chonDe = document.querySelector('input[name="de139"]:checked');
        const moBai = document.getElementById('dan-y-moBai').value.trim();
        const ngoaiHinh = document.getElementById('dan-y-ngoaiHinh').value.trim();
        const hoatDong = document.getElementById('dan-y-hoatDong').value.trim();
        const soTruong = document.getElementById('dan-y-soTruong').value.trim();
        const ketBai = document.getElementById('dan-y-ketBai').value.trim();
        const resEl = document.getElementById('result-dan-y-139');
        resEl.classList.remove('hidden');

        if (!chonDe) {
            resEl.className = "mt-2 p-6 rounded-2xl text-xl font-bold text-center bg-amber-50 text-amber-700 border border-amber-200";
            resEl.innerText = "⚠️ Hãy chọn đề bài (Đề 1 hoặc Đề 2) trước nhé!";
            return;
        }

        let thieu = [];
        if (!moBai) thieu.push("Mở bài");
        if (!ngoaiHinh) thieu.push("Ngoại hình (Thân bài)");
        if (!hoatDong) thieu.push("Hoạt động (Thân bài)");
        if (!ketBai) thieu.push("Kết bài");

        if (thieu.length === 0) {
            resEl.className = "mt-2 p-6 rounded-2xl text-xl font-bold text-center bg-emerald-50 text-emerald-700 border border-emerald-200";
            resEl.innerText = "🎉 Dàn ý của em đã đủ cả 3 phần (Mở bài – Thân bài – Kết bài)! Em đã sẵn sàng để viết bài văn tả người hoàn chỉnh.";
        } else {
            resEl.className = "mt-2 p-6 rounded-2xl text-xl font-bold text-center bg-amber-50 text-amber-700 border border-amber-200";
            resEl.innerText = "⚠️ Dàn ý chưa đầy đủ! Hãy bổ sung: " + thieu.join(", ") + ".";
        }
    };

    window.chonDanhGia = function(opt) {
        const ids = ['dany-check-A', 'dany-check-B', 'dany-check-C'];
        ids.forEach(id => {
            document.getElementById(id).className = "p-5 bg-white rounded-2xl border-2 border-gray-200 cursor-pointer hover:border-blue-400 transition-all text-xl md:text-2xl font-bold text-gray-700";
        });
        document.getElementById('dany-check-' + opt).className = "p-5 bg-blue-50 rounded-2xl border-2 border-blue-500 cursor-pointer transition-all text-xl md:text-2xl font-bold text-blue-600";

        const resEl = document.getElementById('result-danhgia-139');
        resEl.classList.remove('hidden');

        if (opt === 'A') {
            resEl.className = "p-5 rounded-2xl text-xl font-bold text-center bg-emerald-50 text-emerald-700 border border-emerald-200";
            resEl.innerText = "✅ Chính xác! Dàn ý mẫu đã đủ 3 phần, có chi tiết hoạt động cụ thể (cô kiên nhẫn giảng lại, cô nhớ tên từng học sinh) thể hiện rõ tính cách và nét riêng của cô giáo Hoa.";
        } else {
            resEl.className = "p-5 rounded-2xl text-xl font-bold text-center bg-amber-50 text-amber-700 border border-amber-200";
            resEl.innerText = "❌ Chưa đúng! Hãy đọc lại dàn ý mẫu: có đủ 3 phần, chi tiết hoạt động cụ thể (cô kiên nhẫn giảng lại, nhớ tên học sinh) thể hiện nét riêng của cô. Hãy thử lại nhé!";
        }
    };
</script>
`,
    "quizPool": [
        {
            "question": "Bài \"Lập dàn ý cho bài văn tả người\" yêu cầu chọn bao nhiêu đề bài?",
            "options": [
                "Làm cả 2 đề",
                "Chọn 1 trong 2 đề",
                "Chọn 1 trong 3 đề",
                "Không có đề bài, tự chọn chủ đề"
            ],
            "answer": "Chọn 1 trong 2 đề",
            "explain": "SGK yêu cầu học sinh chọn 1 trong 2 đề: tả người thân trong gia đình hoặc tả người để lại ấn tượng tốt đẹp."
        },
        {
            "question": "Đề 1 trong bài lập dàn ý yêu cầu tả ai?",
            "options": [
                "Một nhân vật lịch sử",
                "Một người thân trong gia đình em",
                "Một người nổi tiếng",
                "Một nhân vật trong câu chuyện"
            ],
            "answer": "Một người thân trong gia đình em",
            "explain": "Đề 1 yêu cầu: Viết bài văn tả một người thân trong gia đình em."
        },
        {
            "question": "Đề 2 trong bài lập dàn ý yêu cầu tả ai?",
            "options": [
                "Một người đã để lại cho em những ấn tượng tốt đẹp",
                "Người bán hàng ngoài chợ",
                "Nhân vật trong câu chuyện cổ tích",
                "Chỉ được tả thầy cô giáo"
            ],
            "answer": "Một người đã để lại cho em những ấn tượng tốt đẹp",
            "explain": "Đề 2 yêu cầu: Viết bài văn tả một người đã để lại cho em những ấn tượng tốt đẹp."
        },
        {
            "question": "Phần Mở bài trong dàn ý bài văn tả người cần nêu nội dung gì?",
            "options": [
                "Liệt kê tất cả các đặc điểm ngoại hình",
                "Giới thiệu về người được tả (tên gọi, mối quan hệ...)",
                "Nêu cảm nghĩ và kết luận về người được tả",
                "Miêu tả chi tiết hoạt động hằng ngày"
            ],
            "answer": "Giới thiệu về người được tả (tên gọi, mối quan hệ...)",
            "explain": "Mở bài cần giới thiệu về người được tả: tên gọi, mối quan hệ của em với người đó,... theo cách mở bài trực tiếp hoặc gián tiếp."
        },
        {
            "question": "Phần Thân bài trong dàn ý bài văn tả người cần nêu những đặc điểm nào?",
            "options": [
                "Chỉ cần nêu ngoại hình",
                "Ngoại hình, hoạt động, sở trường/sở thích/tính tình",
                "Chỉ cần nêu sở thích",
                "Chỉ cần nêu nghề nghiệp và tuổi tác"
            ],
            "answer": "Ngoại hình, hoạt động, sở trường/sở thích/tính tình",
            "explain": "Thân bài cần nêu: ngoại hình (tầm vóc, dáng người...), hoạt động (việc làm, cử chỉ...) và sở trường, sở thích hoặc tính tình."
        },
        {
            "question": "Phần Kết bài trong dàn ý bài văn tả người nêu điều gì?",
            "options": [
                "Giới thiệu lại tên người được tả",
                "Nhận xét hoặc cảm nghĩ về người được tả",
                "Liệt kê tất cả đặc điểm đã tả",
                "Kể về một kỉ niệm cụ thể"
            ],
            "answer": "Nhận xét hoặc cảm nghĩ về người được tả",
            "explain": "Kết bài nêu nhận xét hoặc cảm nghĩ về người được tả theo cách kết bài mở rộng hoặc không mở rộng."
        },
        {
            "question": "Khi lập dàn ý, học sinh cần dựa vào đâu để chọn chi tiết?",
            "options": [
                "Dựa vào trí tưởng tượng và sáng tạo hoàn toàn",
                "Dựa vào kết quả quan sát trong hoạt động Viết ở Bài 3",
                "Sao chép từ sách văn mẫu",
                "Nhờ người lớn viết hộ"
            ],
            "answer": "Dựa vào kết quả quan sát trong hoạt động Viết ở Bài 3",
            "explain": "SGK hướng dẫn: Dựa vào kết quả quan sát trong hoạt động Viết ở Bài 3, lập dàn ý cho đề bài em đã chọn."
        },
        {
            "question": "\"Mở bài gián tiếp\" khác với \"mở bài trực tiếp\" như thế nào trong bài văn tả người?",
            "options": [
                "Mở bài gián tiếp là không cần viết mở bài",
                "Mở bài trực tiếp giới thiệu ngay người được tả; mở bài gián tiếp dẫn dắt từ ý khác trước khi giới thiệu",
                "Hai cách hoàn toàn giống nhau",
                "Mở bài gián tiếp là chỉ viết tên người được tả"
            ],
            "answer": "Mở bài trực tiếp giới thiệu ngay người được tả; mở bài gián tiếp dẫn dắt từ ý khác trước khi giới thiệu",
            "explain": "Mở bài trực tiếp: giới thiệu ngay đối tượng. Mở bài gián tiếp: bắt đầu từ ý dẫn dắt (kỉ niệm, câu hỏi...) rồi mới giới thiệu người được tả."
        },
        {
            "question": "Theo SGK, dàn ý tốt cần đảm bảo điều gì?",
            "options": [
                "Viết thật dài và đủ số trang",
                "Chọn chi tiết nét riêng và có dẫn chứng cụ thể thể hiện tính cách",
                "Sử dụng nhiều từ ngữ khó",
                "Không cần dàn ý, cứ viết tự nhiên"
            ],
            "answer": "Chọn chi tiết nét riêng và có dẫn chứng cụ thể thể hiện tính cách",
            "explain": "SGK nhấn mạnh: chọn chi tiết thể hiện nét riêng (phân biệt với người khác) và có dẫn chứng cụ thể thể hiện tính cách, phẩm chất."
        },
        {
            "question": "\"Kết bài mở rộng\" trong bài văn tả người có nghĩa là gì?",
            "options": [
                "Kết bài viết rất dài",
                "Kết bài nêu thêm suy nghĩ, bài học, hoặc liên hệ bản thân ngoài việc nêu cảm nghĩ",
                "Kết bài nhắc lại toàn bộ nội dung thân bài",
                "Kết bài không cần nêu cảm nghĩ"
            ],
            "answer": "Kết bài nêu thêm suy nghĩ, bài học, hoặc liên hệ bản thân ngoài việc nêu cảm nghĩ",
            "explain": "Kết bài mở rộng không chỉ nêu cảm nghĩ mà còn mở rộng ra suy nghĩ, bài học rút ra, hoặc liên hệ với cuộc sống của bản thân."
        },
        {
            "question": "Khi Góp ý dàn ý của bạn, cần nhận xét điều gì?",
            "options": [
                "Chính tả có lỗi không",
                "Cách lựa chọn/sắp xếp đặc điểm và chi tiết có thể hiện nét riêng không",
                "Dàn ý có đẹp về mặt hình thức không",
                "Số lượng từ có đủ không"
            ],
            "answer": "Cách lựa chọn/sắp xếp đặc điểm và chi tiết có thể hiện nét riêng không",
            "explain": "SGK hướng dẫn góp ý về: cách lựa chọn/sắp xếp đặc điểm và dẫn chứng có thể hiện nét riêng, tính cách của người được tả không."
        },
        {
            "question": "Tại sao cần xác định \"trình tự tả\" trước khi viết bài văn tả người?",
            "options": [
                "Để bài viết giống bài mẫu trong sách",
                "Để sắp xếp các đặc điểm hợp lý, tạo sự mạch lạc và tự nhiên cho bài văn",
                "Để bài dài hơn",
                "Vì thầy cô bắt phải làm vậy"
            ],
            "answer": "Để sắp xếp các đặc điểm hợp lý, tạo sự mạch lạc và tự nhiên cho bài văn",
            "explain": "Xác định trình tự tả (lần lượt hoặc kết hợp đan xen) giúp bài văn có bố cục rõ ràng, mạch lạc và không bị lặp lại ý."
        },
        {
            "question": "Ngoại hình trong bài văn tả người có thể bao gồm những chi tiết nào?",
            "options": [
                "Chỉ tả màu da",
                "Tầm vóc, dáng người, nước da, gương mặt, trang phục...",
                "Chỉ tả chiều cao và cân nặng",
                "Chỉ tả trang phục yêu thích"
            ],
            "answer": "Tầm vóc, dáng người, nước da, gương mặt, trang phục...",
            "explain": "Theo SGK, phần ngoại hình trong thân bài gồm: tầm vóc, dáng người, nước da, gương mặt, trang phục và các đặc điểm hình thể khác."
        },
        {
            "question": "Trình tự tả \"kết hợp, đan xen\" trong bài văn tả người có nghĩa là gì?",
            "options": [
                "Chỉ tả ngoại hình, không tả hoạt động",
                "Vừa tả ngoại hình vừa xen lẫn tả hoạt động trong cùng một đoạn",
                "Tả xong ngoại hình rồi mới tả hoạt động riêng biệt",
                "Không cần theo trình tự nào cả"
            ],
            "answer": "Vừa tả ngoại hình vừa xen lẫn tả hoạt động trong cùng một đoạn",
            "explain": "Trình tự đan xen: kết hợp tả ngoại hình và hoạt động cùng lúc (ví dụ: tả bàn tay liền với hành động của bàn tay), tạo sự sống động."
        },
        {
            "question": "Dẫn chứng cụ thể trong thân bài bài văn tả người có vai trò gì?",
            "options": [
                "Làm cho bài văn dài hơn",
                "Thể hiện được tính cách, phẩm chất thật sự của người được tả",
                "Làm cho bài văn có nhiều từ khó",
                "Giúp học sinh viết nhanh hơn"
            ],
            "answer": "Thể hiện được tính cách, phẩm chất thật sự của người được tả",
            "explain": "SGK nhấn mạnh: dẫn chứng cụ thể (hoạt động, sở trường...) giúp thể hiện được tính cách, phẩm chất của người được tả một cách chân thực."
        }
    ]
};