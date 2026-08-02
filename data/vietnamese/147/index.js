export const lesson147 = {
    "topic": "Tiếng Việt 5",
    "week": "21",
    "period": "147",
    "title": "ĐỌC MỞ RỘNG",
    "desc": "Tìm đọc và chia sẻ cảm xúc về các bài thơ thể hiện vẻ đẹp cuộc sống, thực hành ghi chép Phiếu đọc sách tương tác.",
    "subject": "Đọc mở rộng",
    "theme": "Vẻ đẹp cuộc sống",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-blue-905">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden bg-white/80 backdrop-blur-sm">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl"></div>
        <h3 class="text-3xl md:text-4xl font-black text-blue-600 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-blue-600 font-bold text-2xl md:text-3xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Tìm đọc được những bài thơ viết về vẻ đẹp cuộc sống (tình cảm gia đình, quê hương, công việc cống hiến thầm lặng của các chiến sĩ...).
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết cách cảm nhận các hình ảnh đẹp, câu thơ hay và điền đầy đủ thông tin vào Phiếu đọc sách cá nhân.
            </li>
        </ul>
    </div>

    <!-- 📖 KHÁM PHÁ NGỮ LIỆU ĐỌC MẪU (SGK TRANG 33) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-8">
        <div class="flex items-center justify-between border-b border-blue-100 pb-4 flex-wrap gap-4">
            <span class="text-blue-600 font-black text-2xl md:text-4xl flex items-center gap-2">
                <span>📖</span> 1. Đọc gợi ý các bài thơ về vẻ đẹp cuộc sống:
            </span>
        </div>

        <!-- Tab Headers -->
        <div class="flex flex-wrap gap-4">
            <button onclick="switchTabVn147(0)" id="vn147-tab-0" class="px-6 py-4 rounded-2xl font-black text-xl md:text-2xl transition-all bg-blue-600 text-white shadow-md">
                Bài thơ 1: Chú đi tuần
            </button>
            <button onclick="switchTabVn147(1)" id="vn147-tab-1" class="px-6 py-4 rounded-2xl font-black text-xl md:text-2xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300">
                Bài thơ 2: Tiếng võng kêu
            </button>
        </div>

        <!-- Tab Contents -->
        <div class="space-y-6">
            <!-- Bài thơ 1 -->
            <div id="vn147-tab-content-0" class="bg-blue-50/20 border-2 border-blue-100 rounded-[32px] p-6 md:p-10 space-y-6 animate-in fade-in duration-300">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div class="md:col-span-5 flex justify-center">
                        <!-- Tạo tranh vẽ tượng trưng -->
                        <div class="p-6 bg-gradient-to-br from-blue-900 to-slate-900 rounded-[2rem] text-center text-white border-4 border-white shadow-lg w-full max-w-sm">
                            <span class="text-7xl block mb-4">👮‍♂️🌃</span>
                            <h4 class="text-lg md:text-2xl font-black">Hình ảnh các chú bộ đội đi tuần tra trong đêm lạnh để giữ bình yên cho trẻ thơ.</h4>
                        </div>
                    </div>
                    <div class="md:col-span-7 space-y-4">
                        <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-lg md:text-2xl font-black rounded-lg">Trích đoạn gợi ý</span>
                        <div class="serif-font text-gray-800 text-3xl md:text-4xl leading-relaxed text-left space-y-2 border-l-4 border-blue-300 pl-6">
                            <p>Trong đêm khuya vắng vẻ,</p>
                            <p>Chú đi tuần đêm nay,</p>
                            <p>Nép mình dưới bóng hàng cây,</p>
                            <p>Gió đông lạnh buốt đôi tay chú rồi!</p>
                            <p>Rét thì mặc rét, cháu ơi!</p>
                            <p>Chú đi giữ mãi ấm nơi cháu nằm.</p>
                        </div>
                        <p class="text-right italic font-black text-gray-500 text-lg md:text-2xl">(Trần Ngọc, <em>Chú đi tuần</em>)</p>
                    </div>
                </div>
            </div>

            <!-- Bài thơ 2 -->
            <div id="vn147-tab-content-1" class="hidden bg-amber-50/25 border-2 border-amber-100 rounded-[32px] p-6 md:p-10 space-y-6 animate-in fade-in duration-300">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div class="md:col-span-5 flex justify-center">
                        <div class="p-6 bg-gradient-to-br from-amber-500 to-orange-400 rounded-[2rem] text-center text-white border-4 border-white shadow-lg w-full max-w-sm">
                            <span class="text-7xl block mb-4">👵💤</span>
                            <h4 class="text-lg md:text-2xl font-black text-amber-95 flex items-center justify-center">Hình ảnh mẹ ru con ngủ bên chiếc võng thân thương ấm áp làng quê Việt Nam.</h4>
                        </div>
                    </div>
                    <div class="md:col-span-7 space-y-4">
                        <span class="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-lg md:text-2xl font-black rounded-lg">Trích đoạn gợi ý</span>
                        <div class="serif-font text-gray-800 text-3xl md:text-4xl leading-relaxed text-left space-y-2 border-l-4 border-amber-300 pl-6">
                            <p>Kẽo cà kẽo kẹt</p>
                            <p>Xưa mẹ ru em</p>
                            <p>Cũng tiếng võng này</p>
                            <p>Cánh cò trắng muốt</p>
                            <p>Bay – bay – bay – bay...</p>
                        </div>
                        <p class="text-right italic font-black text-gray-500 text-lg md:text-2xl">(Trần Đăng Khoa, <em>Tiếng võng kêu</em>)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
window.switchTabVn147 = function(idx) {
    const tabs = [0, 1];
    tabs.forEach(i => {
        const btn = document.getElementById('vn147-tab-' + i);
        const content = document.getElementById('vn147-tab-content-' + i);
        if (i === idx) {
            btn.className = "px-6 py-4 rounded-2xl font-black text-xl md:text-2xl transition-all bg-blue-600 text-white shadow-md";
            content.classList.remove('hidden');
        } else {
            btn.className = "px-6 py-4 rounded-2xl font-black text-xl md:text-2xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300";
            content.classList.add('hidden');
        }
    });
};
</script>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- ✍️ BÀI TẬP 2: VIẾT PHIẾU ĐỌC SÁCH -->
    <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-lg border border-blue-50 space-y-8">
        <div class="flex items-center gap-4 border-b border-blue-100 pb-4 mb-6">
            <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-lg md:text-2xl font-black shadow-md">✏️</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Ghi chép Phiếu đọc sách tương tác</h3>
        </div>

        <!-- Nút điền mẫu nhanh hỗ trợ giáo viên giới thiệu bài học -->
        <div class="flex flex-wrap gap-4 justify-center bg-blue-50/40 p-4 rounded-2xl border-2 border-dashed border-blue-100">
            <span class="text-lg md:text-2xl font-black text-blue-600 flex items-center">💡 Điền mẫu nhanh gợi ý:</span>
            <button onclick="dienMauPhieu147('chudituan')" class="px-6 py-3 bg-indigo-650 hover:bg-blue-700 text-white font-black rounded-xl text-xl shadow-sm">Bài 1: Chú đi tuần</button>
            <button onclick="dienMauPhieu147('tiengvongkeu')" class="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-black rounded-xl text-xl shadow-sm">Bài 2: Tiếng võng kêu</button>
        </div>

        <div class="bg-blue-50/10 p-6 md:p-8 rounded-[2rem] border-2 border-blue-100 space-y-6 max-w-4xl mx-auto">
            <div class="text-center font-black text-blue-600 text-2xl md:text-4xl border-b-2 border-blue-200 pb-2 mb-6">PHIẾU ĐỌC SÁCH</div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="space-y-2">
                    <label class="text-lg md:text-2xl font-black text-gray-750">📕 Tên bài thơ:</label>
                    <input type="text" id="p147-tenbaitho" placeholder="Nhập tên bài..." class="w-full p-4 text-lg md:text-2xl rounded-xl border border-gray-200 font-bold bg-white text-gray-800">
                </div>
                <div class="space-y-2">
                    <label class="text-lg md:text-2xl font-black text-gray-750">✍️ Tác giả:</label>
                    <input type="text" id="p147-tacgia" placeholder="Nhập tác giả..." class="w-full p-4 text-lg md:text-2xl rounded-xl border border-gray-200 font-bold bg-white text-gray-800">
                </div>
                <div class="space-y-2">
                    <label class="text-lg md:text-2xl font-black text-gray-750">📅 Ngày đọc:</label>
                    <input type="text" id="p147-ngaydoc" placeholder="Ví dụ: 19/06/2026" class="w-full p-4 text-lg md:text-2xl rounded-xl border border-gray-200 font-bold bg-white text-gray-800">
                </div>
            </div>

            <div class="space-y-2">
                <label class="text-lg md:text-2xl font-black text-gray-750">✨ Những câu thơ hay, những hình ảnh đẹp trong bài thơ:</label>
                <textarea id="p147-cauhay" rows="3" placeholder="Ghi lại các câu thơ em thích..." class="w-full p-4 text-lg md:text-2xl rounded-2xl border border-gray-200 font-bold bg-white text-gray-800 resize-none"></textarea>
            </div>

            <div class="space-y-2">
                <label class="text-lg md:text-2xl font-black text-gray-750">💬 Suy nghĩ, cảm xúc của em về bài thơ hoặc về tác giả:</label>
                <textarea id="p147-camsuc" rows="3" placeholder="Bày tỏ tình cảm, ấn tượng..." class="w-full p-4 text-lg md:text-2xl rounded-2xl border border-gray-200 font-bold bg-white text-gray-800 resize-none"></textarea>
            </div>

            <!-- Hệ thống Star Rating tương tác -->
            <div class="flex items-center justify-between border-t border-blue-100 pt-4 flex-wrap gap-4">
                <div class="flex items-center gap-3">
                    <span class="text-lg md:text-2xl font-black text-gray-750">⭐ Mức độ yêu thích:</span>
                    <div class="flex gap-1 text-2xl md:text-4xl cursor-pointer" id="p147-stars">
                        <span onclick="setStars147(1)" id="star147-1" class="text-amber-400">★</span>
                        <span onclick="setStars147(2)" id="star147-2" class="text-amber-400">★</span>
                        <span onclick="setStars147(3)" id="star147-3" class="text-amber-400">★</span>
                        <span onclick="setStars147(4)" id="star147-4" class="text-amber-400">★</span>
                        <span onclick="setStars147(5)" id="star147-5" class="text-amber-400">★</span>
                    </div>
                </div>
                <button onclick="nopPhieu147()" class="px-8 py-3 bg-blue-650 hover:bg-blue-700 text-white font-black rounded-xl shadow-md transition-all active:scale-95 text-lg md:text-2xl">Lưu phiếu đọc sách</button>
            </div>
        </div>
    </section>

    <!-- 🤝 HOẠT ĐỘNG CHIA SẺ & VẬN DỤNG -->
    <section class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 md:p-10 rounded-[40px] border-2 border-indigo-150 shadow-xl relative overflow-hidden">
        <div class="absolute right-0 top-0 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
        <h3 class="text-2xl md:text-3xl font-black text-indigo-950 mb-6 flex items-center gap-3">
            <span class="p-2 bg-indigo-650 text-white rounded-xl shadow-md">🤝</span>
            Chia sẻ & Vận dụng bài học
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-bold text-gray-800 text-xl">
            <div class="bg-white/80 p-6 rounded-[24px] shadow-sm border border-blue-50 space-y-2">
                <div class="text-blue-600 font-black">1. Chia sẻ bạn bè</div>
                <p class="text-gray-700 font-medium text-lg leading-relaxed">
                    Kể hoặc đọc cho các bạn nghe đoạn thơ, hình ảnh về vẻ đẹp cuộc sống mà em yêu thích nhất trong tác phẩm đã chọn đọc.
                </p>
            </div>
            <div class="bg-white/80 p-6 rounded-[24px] shadow-sm border border-blue-50 space-y-2">
                <div class="text-blue-600 font-black">2. Trao đổi cùng gia đình</div>
                <p class="text-gray-700 font-medium text-lg leading-relaxed">
                    Về nhà, em hãy nói chuyện với người thân về công việc đặc thù, những vất vả thầm lặng của những cô chú đang bảo vệ cuộc sống bình yên cho Tổ quốc (như chiến sĩ hải quân, công an, bác sĩ...).
                </p>
            </div>
        </div>
    </section>
</div>

<script>
let starRating147 = 5;

window.setStars147 = function(num) {
    starRating147 = num;
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById('star147-' + i);
        if (star) {
            if (i <= num) {
                star.innerHTML = "★";
                star.className = "text-amber-400";
            } else {
                star.innerHTML = "☆";
                star.className = "text-gray-400";
            }
        }
    }
};

window.dienMauPhieu147 = function(type) {
    if (type === 'chudituan') {
        document.getElementById('p147-tenbaitho').value = "Chú đi tuần";
        document.getElementById('p147-tacgia').value = "Trần Ngọc";
        document.getElementById('p147-ngaydoc').value = "19/06/2026";
        document.getElementById('p147-cauhay').value = "Rét thì mặc rét, cháu ơi! / Chú đi giữ mãi ấm nơi cháu nằm.";
        document.getElementById('p147-camsuc').value = "Em vô cùng cảm phục, biết ơn sự hi sinh thầm lặng của các chú đi tuần đêm khuya lạnh buốt để bảo vệ sự bình yên cho trẻ em.";
        window.setStars147(5);
    } else if (type === 'tiengvongkeu') {
        document.getElementById('p147-tenbaitho').value = "Tiếng võng kêu";
        document.getElementById('p147-tacgia').value = "Trần Đăng Khoa";
        document.getElementById('p147-ngaydoc').value = "19/06/2026";
        document.getElementById('p147-cauhay').value = "Kẽo cà kẽo kẹt / Xưa mẹ ru em / Cũng tiếng võng này / Cánh cò trắng muốt / Bay - bay - bay - bay...";
        document.getElementById('p147-camsuc').value = "Bài thơ gợi lên tình yêu thương ngọt ngào của người mẹ dành cho con bên âm thanh tiếng võng kẽo kẹt, mang đậm bản sắc quê hương Việt Nam ấm áp.";
        window.setStars147(5);
    }
};

window.nopPhieu147 = function() {
    const bai = document.getElementById('p147-tenbaitho').value.trim();
    const tg = document.getElementById('p147-tacgia').value.trim();
    if (!bai || !tg) {
        UI.showToast("Em hãy điền đầy đủ Tên bài thơ và Tác giả trước nhé!", "warning");
    } else {
        UI.showToast("Tuyệt vời! Em đã hoàn thành và lưu Phiếu đọc sách tương tác đạt " + starRating147 + " sao.", "success");
    }
};
</script>
`,
    "quizPool": [
        {
            "question": "Bài thơ 'Chú đi tuần' do nhà thơ nào sáng tác?",
            "options": [
                "Trần Đăng Khoa",
                "Trần Ngọc",
                "Thụy Anh",
                "Bùi Hiển"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong bài thơ 'Chú đi tuần', hình ảnh các chú bộ đội đi tuần tra diễn ra vào thời điểm nào?",
            "options": [
                "Buổi trưa nắng gắt mùa hè",
                "Đêm khuya thanh vắng lạnh buốt mùa đông",
                "Buổi sáng sớm tinh sương mùa xuân",
                "Chiều muộn nhiều mây mùa thu"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Câu thơ nào trong bài 'Chú đi tuần' thể hiện tinh thần vượt qua khó khăn để bảo vệ sự ấm áp cho các cháu học sinh?",
            "options": [
                "Nép mình dưới bóng hàng cây",
                "Chú đi tuần đêm nay",
                "Rét thì mặc rét, cháu ơi! / Chú đi giữ mãi ấm nơi cháu nằm.",
                "Gió đông lạnh buốt đôi tay chú rồi!"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Bài thơ 'Tiếng võng kêu' do nhà thơ nào sáng tác?",
            "options": [
                "Trần Đăng Khoa",
                "Trần Ngọc",
                "Huy Cận",
                "Xuân Quỳnh"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Âm thanh nào của làng quê Việt Nam quen thuộc được nhắc đi nhắc lại trong bài thơ 'Tiếng võng kêu'?",
            "options": [
                "Tiếng sáo diều vi vu trên bầu trời",
                "Tiếng võng kẽo cà kẽo kẹt",
                "Tiếng ve râm ran mùa hè",
                "Tiếng dòng sông chảy rì rào"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cánh chim nào trong khúc hát ru gợi tả vẻ đẹp trong sáng của tuổi thơ?",
            "options": [
                "Cánh cò trắng muốt",
                "Cánh chim bồ câu hòa bình",
                "Cánh chim hải âu",
                "Cánh chim sáo đen"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Phiếu đọc sách là một công cụ giúp học sinh thực hiện nhiệm vụ gì?",
            "options": [
                "Ghi chép lại các chi tiết nổi bật, cảm nghĩ cá nhân và đánh giá về tác phẩm đã đọc",
                "Viết lại toàn bộ văn bản của bài thơ mà không cần thay đổi",
                "Vẽ một bức tranh minh họa hoàn chỉnh về các nhân vật",
                "Làm bài toán đố vui về các con số xuất hiện trong bài đọc"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Yếu tố nào sau đây bắt buộc phải ghi trong một Phiếu đọc sách theo đúng mẫu?",
            "options": [
                "Tên bài thơ, tên tác giả, ngày đọc, cảm nghĩ cá nhân",
                "Địa chỉ nhà của tác giả bài thơ đó",
                "Số lượng trang giấy của cuốn sách chứa bài thơ đó",
                "Giá tiền mua cuốn sách chứa tác phẩm thơ đó"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Bài thơ 'Chú đi tuần' thể hiện vẻ đẹp cuộc sống qua khía cạnh nào?",
            "options": [
                "Vẻ đẹp lao động làm vườn nông nghiệp",
                "Sự hi sinh thầm lặng, bảo vệ bình yên cho nhân dân của người chiến sĩ",
                "Lễ hội truyền thống mùa xuân của người dân tộc thiểu số",
                "Vẻ đẹp kỳ vĩ của thiên nhiên vùng núi Tây Bắc"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ láy tượng thanh nào sau đây xuất hiện trong bài thơ 'Tiếng võng kêu'?",
            "options": [
                "kẽo cà kẽo kẹt",
                "êm đềm",
                "xa xôi",
                "lững lờ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ in đậm 'lạnh buốt' trong câu 'Gió đông lạnh buốt đôi tay chú rồi!' thuộc từ loại nào?",
            "options": [
                "Tính từ",
                "Động từ",
                "Danh từ",
                "Quan hệ từ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Câu thơ 'Rét thì mặc rét, cháu ơi!' thể hiện thái độ gì của người chiến sĩ?",
            "options": [
                "Sự thờ ơ trước thời tiết lạnh giá",
                "Lòng quả cảm, quyết tâm vượt gian khổ, đặt bình yên của các cháu lên trên hết",
                "Sự phàn nàn về nhiệm vụ vất vả trong đêm",
                "Sự lo sợ trước cơn giông tố đang kéo đến"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'võng' trong bài thơ 'Tiếng võng kêu' thuộc nhóm từ loại nào?",
            "options": [
                "Danh từ",
                "Động từ",
                "Tính từ",
                "Đại từ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ nào đồng nghĩa với từ 'khuya' trong câu 'Trong đêm khuya vắng vẻ'?",
            "options": [
                "muộn, tối muộn",
                "sáng sớm",
                "trưa tròn",
                "chiều hoàng hôn"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Mục đích của việc chia sẻ cảm xúc về bài thơ với bạn bè là gì?",
            "options": [
                "Để khoe khoang kiến thức hiểu biết của bản thân",
                "Để cùng thảo luận, học hỏi cái hay cái đẹp và lan tỏa tình yêu văn học",
                "Để xem ai đọc nhanh hơn để xếp thứ hạng lớp học",
                "Để yêu cầu bạn làm hộ bài tập phiếu đọc sách cho mình"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};