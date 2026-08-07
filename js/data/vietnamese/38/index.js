export const lesson38 = {
    "topic": "Tiếng Việt 5",
    "week": "6",
    "period": "38",
    "title": "VIẾT: VIẾT MỞ BÀI VÀ KẾT BÀI CHO BÀI VĂN TẢ PHONG CẢNH",
    "desc": "Bài học giúp học sinh nhận biết, phân tích và so sánh các cách viết mở bài (trực tiếp, gián tiếp) và kết bài (mở rộng, không mở rộng) cho bài văn tả phong cảnh. Từ đó thực hành tự viết mở bài gián tiếp và kết bài mở rộng cho bài 'Bốn mùa trong ánh nước'.",
    "subject": "Viết",
    "theme": "Măng non",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-sky-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Phân biệt được mở bài trực tiếp và mở bài gián tiếp; kết bài mở rộng và kết bài không mở rộng cho bài văn tả phong cảnh.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Viết được mở bài gián tiếp và kết bài mở rộng cho bài văn tả phong cảnh cụ thể.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Nhận thức được ý nghĩa của việc quan sát tinh tế và tích lũy chất liệu thực tế khi viết văn tả cảnh.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Đoán vai trò</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy chọn phương án chính xác nhất để ghép nối chức năng của phần mở bài và kết bài:</p>
        
        <div class="p-6 bg-sky-50/30 rounded-3xl border border-sky-100 space-y-4 font-bold text-sky-800 text-lg md:text-xl">
            <p>❓ Nhận định nào dưới đây nêu đúng nhất vai trò của phần Mở bài gián tiếp và Kết bài mở rộng?</p>
            <div class="grid grid-cols-1 gap-3">
                <button onclick="kiemTraKhoiDong38(this, false)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 transition-all active:scale-95 text-left text-base md:text-lg">
                    A. Làm bài văn ngắn hơn, giúp người đọc đi thẳng vào vấn đề miêu tả một cách nhanh nhất.
                </button>
                <button onclick="kiemTraKhoiDong38(this, true)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 transition-all active:scale-95 text-left text-base md:text-lg">
                    B. Giúp bài văn tự nhiên, truyền cảm hơn; liên tưởng, mở rộng suy nghĩ và tạo dư âm sâu lắng trong lòng người đọc.
                </button>
                <button onclick="kiemTraKhoiDong38(this, false)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 transition-all active:scale-95 text-left text-base md:text-lg">
                    C. Giúp bài văn không cần dùng đến các biện pháp nghệ thuật so sánh hay nhân hóa ở phần thân bài.
                </button>
            </div>
            <div id="fb-vn38-kd" class="hidden p-4 rounded-2xl text-lg font-black text-center transition-all duration-338"></div>
        </div>
    </div>

    <!-- 📖 KHÁM PHÁ (BÀI TẬP 1) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl space-y-8">
        <div class="flex items-center justify-between border-b border-sky-100 pb-4">
            <span class="text-sky-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                <span>📖</span> 1. So sánh các cách mở bài và kết bài tả phong cảnh Đà Lạt
            </span>
        </div>

        <div class="bg-amber-50/50 p-4 rounded-2xl border border-amber-100 font-bold text-amber-600 text-base">
            👉 <strong>Nhiệm vụ tương tác:</strong> Nhấp vào các nhánh của sơ đồ tư duy dưới đây để hiển thị nội dung chi tiết các cách viết mở bài và kết bài của bài văn tả phong cảnh Đà Lạt.
        </div>

        <!-- Sơ đồ cây tương tác -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Cột Mở bài -->
            <div class="bg-emerald-50/30 p-6 rounded-3xl border border-emerald-100 space-y-4">
                <h4 class="text-xl md:text-2xl font-black text-emerald-800 flex items-center gap-2">
                    <span class="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-sm font-bold">A</span>
                    Phần Mở bài
                </h4>
                <div class="grid grid-cols-2 gap-3">
                    <button id="btn-mb-tt" onclick="chonNhanhMoBaiKetBai38('mb-tt')" class="p-4 bg-white hover:bg-emerald-50 border-2 border-emerald-100 rounded-2xl font-black text-emerald-800 transition-all active:scale-95 text-sm md:text-base shadow-sm">
                        Mở bài trực tiếp
                    </button>
                    <button id="btn-mb-gt" onclick="chonNhanhMoBaiKetBai38('mb-gt')" class="p-4 bg-white hover:bg-emerald-50 border-2 border-emerald-100 rounded-2xl font-black text-emerald-800 transition-all active:scale-95 text-sm md:text-base shadow-sm">
                        Mở bài gián tiếp
                    </button>
                </div>
                <div id="hien-thi-mb" class="p-6 bg-white rounded-2xl border border-emerald-100 min-h-[138px] flex items-center justify-center text-gray-800 font-bold text-lg md:text-xl italic text-justify leading-relaxed">
                    Nhấp chọn kiểu Mở bài phía trên để xem chi tiết.
                </div>
            </div>

            <!-- Cột Kết bài -->
            <div class="bg-sky-50/30 p-6 rounded-3xl border border-sky-100 space-y-4">
                <h4 class="text-xl md:text-2xl font-black text-sky-800 flex items-center gap-2">
                    <span class="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center text-sm font-bold">B</span>
                    Phần Kết bài
                </h4>
                <div class="grid grid-cols-2 gap-3">
                    <button id="btn-kb-kmr" onclick="chonNhanhMoBaiKetBai38('kb-kmr')" class="p-4 bg-white hover:bg-sky-50 border-2 border-sky-100 rounded-2xl font-black text-sky-800 transition-all active:scale-95 text-sm md:text-base shadow-sm">
                        Kết bài không mở rộng
                    </button>
                    <button id="btn-kb-mr" onclick="chonNhanhMoBaiKetBai38('kb-mr')" class="p-4 bg-white hover:bg-sky-50 border-2 border-sky-100 rounded-2xl font-black text-sky-800 transition-all active:scale-95 text-sm md:text-base shadow-sm">
                        Kết bài mở rộng
                    </button>
                </div>
                <div id="hien-thi-kb" class="p-6 bg-white rounded-2xl border border-sky-100 min-h-[138px] flex items-center justify-center text-gray-800 font-bold text-lg md:text-xl italic text-justify leading-relaxed">
                    Nhấp chọn kiểu Kết bài phía trên để xem chi tiết.
                </div>
            </div>
        </div>

        <!-- Bảng So sánh Trực quan -->
        <div class="space-y-4 pt-4">
            <h4 class="text-xl md:text-2xl font-black text-gray-800">📋 So sánh chi tiết đặc điểm:</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-bold text-base md:text-lg">
                <div class="p-5 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                    <span class="text-emerald-900 font-black">💡 Phân biệt Mở bài:</span>
                    <ul class="list-disc list-inside space-y-1 text-gray-800 pl-2">
                        <li><strong>Trực tiếp:</strong> Giới thiệu ngay phong cảnh định tả (không lòng vòng).</li>
                        <li><strong>Gián tiếp:</strong> Nói chuyện khác (hoặc các cảnh khác) rồi mới dẫn vào giới thiệu phong cảnh định tả.</li>
                    </ul>
                </div>
                <div class="p-5 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                    <span class="text-sky-900 font-black">💡 Phân biệt Kết bài:</span>
                    <ul class="list-disc list-inside space-y-1 text-gray-800 pl-2">
                        <li><strong>Không mở rộng:</strong> Chỉ nêu lời ca ngợi hoặc khẳng định ngay vẻ đẹp của phong cảnh (tóm tắt cảm xúc).</li>
                        <li><strong>Mở rộng:</strong> Nêu lời khẳng định vẻ đẹp rồi liên tưởng, bày tỏ mong muốn, hành động bảo vệ hoặc đặt câu hỏi gợi mở.</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Câu hỏi thu hoạch Bài 1 -->
        <div class="p-6 bg-sky-50/50 rounded-3xl border border-sky-100 space-y-4 font-bold">
            <p class="text-xl md:text-2xl text-sky-800">❓ Em thích cách viết mở bài và kết bài nào hơn? Vì sao?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button onclick="traLoiThichMoBaiKetBai38(this, 'gian-tiep')" class="p-4 bg-white hover:bg-sky-600 border border-sky-100 rounded-2xl text-gray-800 text-left transition-all active:scale-95 leading-relaxed">
                    👍 <strong>Cách mở bài gián tiếp và kết bài mở rộng:</strong> Vì cách viết này sinh động, tự nhiên, lôi cuốn và gợi nhiều cảm xúc, bài viết sâu sắc hơn.
                </button>
                <button onclick="traLoiThichMoBaiKetBai38(this, 'truc-tiep')" class="p-4 bg-white hover:bg-sky-600 border border-sky-100 rounded-2xl text-gray-800 text-left transition-all active:scale-95 leading-relaxed">
                    👍 <strong>Cách mở bài trực tiếp và kết bài không mở rộng:</strong> Vì cách viết này ngắn gọn, rõ ràng, dễ hiểu, giúp đi ngay vào nội dung chính của bài văn.
                </button>
            </div>
            <div id="fb-vn38-so-thich" class="hidden p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 transition-all"></div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- ✍️ LUYỆN TẬP 2: TỰ LUẬN TƯƠNG TÁC -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">✍️</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Bài tập 2: Thực hành viết cho bài "Bốn mùa trong ánh nước"</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Dựa vào nội dung bài văn tả Hồ Hoàn Kiếm, em hãy tập viết phần mở bài gián tiếp và kết bài mở rộng.</p>
            </div>
        </div>

        <div class="bg-sky-50/20 p-6 rounded-3xl border border-sky-100 space-y-6">
            <!-- Nhập Mở bài gián tiếp -->
            <div class="space-y-2">
                <label class="font-black text-emerald-800 text-base md:text-lg block">📝 1. Viết mở bài gián tiếp (tối thiểu 30 ký tự):</label>
                <textarea id="vn38-input-mb" rows="4" placeholder="Ví dụ gợi ý: Mỗi vùng miền trên đất nước ta đều gắn liền với những dòng sông, mặt hồ xinh đẹp. Nếu như Huế mộng mơ có dòng sông Hương lững lờ trôi, Đà Lạt có hồ Xuân Hương trong vắt thì giữa lòng thủ đô Hà Nội, hồ Hoàn Kiếm lấp lánh như một viên ngọc xanh rực rỡ..." class="w-full p-4 border border-gray-100 rounded-2xl bg-white text-xl md:text-2xl font-semibold focus:border-emerald-500 focus:ring-1 focus:ring-emerald-600 outline-none shadow-sm"></textarea>
            </div>

            <!-- Nhập Kết bài mở rộng -->
            <div class="space-y-2">
                <label class="font-black text-sky-800 text-base md:text-lg block">📝 2. Viết kết bài mở rộng (tối thiểu 30 ký tự):</label>
                <textarea id="vn38-input-kb" rows="4" placeholder="Ví dụ gợi ý: Từng ánh nước của hồ Hoàn Kiếm đã đi vào lòng biết bao thế hệ người dân Hà Nội và du khách bốn phương. Mỗi chúng ta cần chung tay giữ gìn vẻ đẹp tự nhiên, trong lành của hồ. Để rồi mai này, dù đi đâu xa, hình ảnh rùa vàng lung linh cùng Tháp Rùa cổ kính vẫn mãi vẹn nguyên trong ký ức. Bạn có muốn một lần được ngắm nhìn ánh nước ấy dưới làn sương thu se lạnh không?..." class="w-full p-4 border border-gray-100 rounded-2xl bg-white text-xl md:text-2xl font-semibold focus:border-sky-500 focus:ring-1 focus:ring-sky-600 outline-none shadow-sm"></textarea>
            </div>
            
            <div class="flex justify-end items-center gap-4"><button onclick="nopBaiTapLamVan38();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn38-lamvan" class="hidden p-5 rounded-2xl text-base font-bold shadow-md transition-all duration-338"></div>
        </div>
    </section>

    <!-- 💡 BÀI TẬP 3: CÁC THẺ GỢI Ý LẬT TƯƠNG TÁC -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">💡</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Bài tập 3: Trao đổi về cách viết mở bài gián tiếp và kết bài mở rộng</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Em hãy nhấp vào các thẻ dưới đây để tìm hiểu các hướng tiếp cận khác nhau vô cùng phong phú và xem ví dụ minh họa:</p>
            </div>
        </div>

        <div class="space-y-8 font-bold">
            <!-- Nhánh Mở bài gián tiếp -->
            <div class="space-y-4">
                <span class="text-emerald-900 font-black text-lg flex items-center gap-2">
                    <span class="w-2.5 h-2.5 bg-emerald-600 rounded-full"></span>
                    Khi viết mở bài gián tiếp, có thể bắt đầu như thế nào?
                </span>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- Thẻ 1 -->
                    <div onclick="latTheGoiY38('the-mb-1')" class="p-6 bg-emerald-50 hover:bg-emerald-600 border border-emerald-100 rounded-2xl cursor-pointer transition-all shadow-sm space-y-2">
                        <span class="text-emerald-900 font-black block">📍 Hướng 1: Nhớ về nơi từng đến</span>
                        <p class="text-gray-800 text-sm">Nhớ lại một số phong cảnh đẹp em từng được ghé thăm hoặc xem qua ti vi, tranh ảnh để dẫn dắt...</p>
                        <div id="the-mb-1" class="hidden p-4 bg-white rounded-xl border border-emerald-100 text-sm text-gray-800 italic text-justify mt-2">
                            <strong>Ví dụ:</strong> "Từ nhỏ, em đã ước ao được đặt chân đến đất thủ đô qua những trang sách. Mùa hè năm ngoái, ước mơ ấy đã thành hiện thực khi bố mẹ đưa em đi chơi hồ Hoàn Kiếm..."
                        </div>
                    </div>
                    <!-- Thẻ 2 -->
                    <div onclick="latTheGoiY38('the-mb-2')" class="p-6 bg-emerald-50 hover:bg-emerald-600 border border-emerald-100 rounded-2xl cursor-pointer transition-all shadow-sm space-y-2">
                        <span class="text-emerald-900 font-black block">📍 Hướng 2: Bắt đầu từ bài hát, bài thơ</span>
                        <p class="text-gray-800 text-sm">Nhắc đến một giai điệu âm nhạc, câu thơ, câu văn có nhắc đến vẻ đẹp thiên nhiên...</p>
                        <div id="the-mb-2" class="hidden p-4 bg-white rounded-xl border border-emerald-100 text-sm text-gray-800 italic text-justify mt-2">
                            <strong>Ví dụ:</strong> "Mỗi khi nghe câu hát 'Hà Nội mùa thu, mùa thu Hà Nội, hoa sữa thôi rơi...', lòng em lại dâng trào cảm xúc nhớ nhung. Hình ảnh đẹp đẽ hiện ngay trước mắt em chính là hồ Hoàn Kiếm..."
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nhánh Kết bài mở rộng -->
            <div class="space-y-4">
                <span class="text-sky-900 font-black text-lg flex items-center gap-2">
                    <span class="w-2.5 h-2.5 bg-sky-600 rounded-full"></span>
                    Khi viết kết bài mở rộng, nên mở rộng theo hướng nào?
                </span>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- Thẻ 3 -->
                    <div onclick="latTheGoiY38('the-kb-1')" class="p-6 bg-sky-50 hover:bg-sky-600 border border-sky-100 rounded-2xl cursor-pointer transition-all shadow-sm space-y-2">
                        <span class="text-sky-900 font-black block">📍 Hướng 1: Nghĩ về người thầm lặng bảo vệ</span>
                        <p class="text-gray-800 text-sm">Bày tỏ lòng biết ơn, suy nghĩ về những người chung tay giữ gìn, làm đẹp phong cảnh...</p>
                        <div id="the-kb-1" class="hidden p-4 bg-white rounded-xl border border-sky-100 text-sm text-gray-800 italic text-justify mt-2">
                            <strong>Ví dụ:</strong> "Ngắm hồ sạch đẹp, em lại thầm nhớ ơn các cô chú công nhân vệ sinh môi trường đã miệt mài làm việc suốt đêm ngày để giữ làn nước trong xanh..."
                        </div>
                    </div>
                    <!-- Thẻ 2 -->
                    <div onclick="latTheGoiY38('the-kb-2')" class="p-6 bg-sky-50 hover:bg-sky-600 border border-sky-100 rounded-2xl cursor-pointer transition-all shadow-sm space-y-2">
                        <span class="text-sky-900 font-black block">📍 Hướng 2: Tưởng tượng sự thay đổi theo thời gian</span>
                        <p class="text-gray-800 text-sm">Suy ngẫm, liên tưởng về sự đổi thay của phong cảnh trong tương lai...</p>
                        <div id="the-kb-2" class="hidden p-4 bg-white rounded-xl border border-sky-100 text-sm text-gray-800 italic text-justify mt-2">
                            <strong>Ví dụ:</strong> "Em tự hỏi mười năm, hai mươi năm nữa hồ Hoàn Kiếm sẽ thay đổi như thế nào? Chắc hẳn Tháp Rùa vẫn uy nghi cổ kính bên những rặng liễu xanh..."
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiTiet38Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Bố cục của một bài văn tả phong cảnh thông thường gồm mấy phần?",
            "options": [
                "2 phần",
                "3 phần",
                "4 phần",
                "5 phần"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Phần mở bài trực tiếp trong bài văn tả phong cảnh có đặc điểm gì?",
            "options": [
                "Nói chuyện khác để dẫn dắt vào cảnh vật cần tả",
                "Giới thiệu ngay phong cảnh định tả",
                "Bày tỏ cảm nghĩ của người viết về phong cảnh",
                "Nêu ước mơ được đến thăm phong cảnh"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Phần mở bài gián tiếp trong bài văn tả phong cảnh có đặc điểm gì?",
            "options": [
                "Giới thiệu ngay địa danh của phong cảnh",
                "Nói từ một sự việc hoặc phong cảnh khác để dẫn dắt đến phong cảnh cần tả",
                "Chỉ tả hình ảnh nổi bật nhất của cảnh vật",
                "Nêu ngay nhận xét chung nhất ở đầu bài"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Cách mở bài nào giúp bài văn tự nhiên, sinh động và gợi nhiều cảm xúc hơn?",
            "options": [
                "Mở bài trực tiếp",
                "Mở bài gián tiếp",
                "Không cần viết mở bài",
                "Chỉ viết tiêu đề bài văn"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Phần kết bài không mở rộng trong bài văn tả phong cảnh có đặc điểm gì?",
            "options": [
                "Nêu cảm nghĩ liên tưởng sâu xa",
                "Khẳng định vẻ đẹp hoặc nêu cảm nghĩ chung mà không phát triển thêm ý khác",
                "Kể về những hoạt động bảo vệ môi trường",
                "Đặt câu hỏi gợi mở cho người đọc"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Phần kết bài mở rộng trong bài văn tả phong cảnh thường có thêm nội dung gì?",
            "options": [
                "Liên tưởng, bày tỏ tình cảm sâu sắc, lời kêu gọi hoặc suy ngẫm thêm về cảnh vật",
                "Giới thiệu lại tên của cảnh vật một lần nữa",
                "Tả chi tiết các loài thực vật có trong cảnh",
                "Tóm tắt toàn bộ phần thân bài"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Cách mở bài 'Đà Lạt là thành phố ngàn hoa, nổi tiếng với hồ trong xanh và thông mơ màng.' là kiểu mở bài nào?",
            "options": [
                "Mở bài gián tiếp",
                "Mở bài trực tiếp",
                "Mở bài phân tích",
                "Mở bài tổng - phân - hợp"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Đoạn văn mở bài gián tiếp về Đà Lạt trong sách giáo khoa bắt đầu dẫn dắt từ ý nào?",
            "options": [
                "Nhắc đến khí hậu mát mẻ quanh năm của vùng cao nguyên",
                "Dẫn dắt từ những cảnh đẹp trên khắp mọi miền đất nước nước ta",
                "Kể về chuyến đi của tác giả từ Bắc vào Nam",
                "Nhắc tới một bài thơ ca ngợi hồ Xuân Hương"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đoạn kết bài: 'Thật không ngoa khi ca ngợi Đà Lạt là chốn \"bồng lai tiên cảnh\".' thuộc kiểu kết bài nào?",
            "options": [
                "Kết bài không mở rộng",
                "Kết bài mở rộng",
                "Kết bài cảm xúc",
                "Kết bài so sánh"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Đoạn kết bài mở rộng về Đà Lạt trong sách giáo khoa đã thêm ý gì so với đoạn kết bài không mở rộng?",
            "options": [
                "Lòng biết ơn những người trồng hoa",
                "Lời mời gọi người đọc đến thăm Đà Lạt trong một ngày mờ sương",
                "Ước mơ được sống mãi ở Đà Lạt",
                "Sự thay đổi của đồi thông theo thời gian"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi viết mở bài gián tiếp, ta có thể bắt đầu từ nguồn cảm hứng nào?",
            "options": [
                "Một bài hát, bài thơ hoặc một kỷ niệm chuyến đi liên quan",
                "Chỉ được bắt đầu từ việc nêu vị trí địa lý",
                "Bắt đầu bằng một định nghĩa khoa học về thời tiết",
                "Nêu ngay nhận xét chê bai cảnh vật"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi viết kết bài mở rộng cho bài văn tả cảnh, ta nên tránh điều gì?",
            "options": [
                "Liên tưởng ý nghĩa bảo vệ cảnh vật thiên nhiên",
                "Đặt câu hỏi khơi gợi hứng thú cho người đọc",
                "Viết lan man sang chủ đề hoàn toàn khác không liên quan đến phong cảnh",
                "Thể hiện tình yêu thương sâu đậm với phong cảnh"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Bài văn 'Bốn mùa trong ánh nước' dùng để thực hành viết mở bài/kết bài tả cảnh đẹp của địa danh nào?",
            "options": [
                "Hồ Xuân Hương",
                "Sông Hương",
                "Hồ Hoàn Kiếm",
                "Vịnh Hạ Long"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Văn bản mẫu về Đà Lạt gọi địa danh này là thành phố gì?",
            "options": [
                "Thành phố sương mù cổ kính",
                "Thành phố ngàn hoa",
                "Thành phố của những dòng sông",
                "Thành phố cảng biển"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Ý nào dưới đây phù hợp để làm phần kết bài mở rộng hướng bảo vệ môi trường cho bài văn tả cảnh sông hồ?",
            "options": [
                "Nhắc nhở mọi người không xả rác xuống hồ, cùng giữ cho nguồn nước trong sạch",
                "Miêu tả chi tiết hình dáng chú cá bơi dưới hồ",
                "Nêu giá vé tham quan du lịch tại địa điểm đó",
                "Liệt kê các phương tiện giao thông di chuyển xung quanh hồ"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- LOGIC TƯƠNG TÁC BÀI 1 ---
let moBaiKetBaiData38 = {
    "mb-tt": "“Đà Lạt là thành phố ngàn hoa, nổi tiếng với hồ trong xanh và thông mơ màng.”",
    "mb-gt": "“Từ Bắc vào Nam, từ đất liền tới biển đảo, nơi đâu trên đất nước ta cũng có những cảnh đẹp thu hút khách du lịch, trong số đó phải kể đến Đà Lạt. Đó là thành phố của ngàn hoa, thành phố của ngàn thông với rất nhiều hồ nước thơ mộng.”",
    "kb-kmr": "“Thật không ngoa khi ca ngợi Đà Lạt là chốn “bồng lai tiên cảnh”.”",
    "kb-mr": "“Thật không ngoa khi ca ngợi Đà Lạt là chốn “bồng lai tiên cảnh”. Bạn có muốn đến thăm Đà Lạt trong một ngày mờ sương không?”"
};

window.chonNhanhMoBaiKetBai38 = function(key) {
    const isMb = key.startsWith("mb");
    const containerId = isMb ? "hien-thi-mb" : "hien-thi-kb";
    const box = document.getElementById(containerId);
    if (!box) return;

    // Thay đổi nội dung
    box.innerHTML = moBaiKetBaiData38[key];

    // Cập nhật class button cho trực quan
    const buttonIds = isMb ? ["btn-mb-tt", "btn-mb-gt"] : ["btn-kb-kmr", "btn-kb-mr"];
    buttonIds.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            if (id === `btn-${key}`) {
                btn.className = isMb 
                    ? "p-4 bg-emerald-600 text-white border-2 border-emerald-100 rounded-2xl font-black transition-all shadow-md text-sm md:text-base"
                    : "p-4 bg-sky-600 text-white border-2 border-sky-100 rounded-2xl font-black transition-all shadow-md text-sm md:text-base";
            } else {
                btn.className = isMb
                    ? "p-4 bg-white hover:bg-emerald-50 border-2 border-emerald-100 rounded-2xl font-black text-emerald-800 transition-all active:scale-95 text-sm md:text-base shadow-sm"
                    : "p-4 bg-white hover:bg-sky-50 border-2 border-sky-100 rounded-2xl font-black text-sky-800 transition-all active:scale-95 text-sm md:text-base shadow-sm";
            }
        }
    });
};

window.traLoiThichMoBaiKetBai38 = function(btn, kieu) {
    const fb = document.getElementById("fb-vn38-so-thich");
    if (!fb) return;
    fb.classList.remove("hidden");

    if (kieu === "gian-tiep") {
        fb.innerHTML = "🌟 Ý kiến tuyệt vời! Cách mở bài gián tiếp và kết bài mở rộng tuy đòi hỏi tư duy và đầu tư nhiều hơn, nhưng sẽ làm cho bài văn sinh động, giàu nhạc điệu và hấp dẫn người đọc hơn rất nhiều.";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4";
    } else {
        fb.innerHTML = "🌟 Ý kiến rất thực tế! Cách mở bài trực tiếp và kết bài không mở rộng giúp bài viết mạch lạc, cô đọng, người đọc nắm bắt ngay được trọng tâm của bài văn một cách hiệu quả.";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4";
    }
};

// --- LOGIC BÀI TẬP KHỞI ĐỘNG ---
let khoiDongDone38 = false;
window.kiemTraKhoiDong38 = function(btn, isCorrect) {
    if (khoiDongDone38) return;
    const fb = document.getElementById("fb-vn38-kd");
    if (!fb) return;

    fb.classList.remove("hidden");
    if (isCorrect) {
        btn.className = "p-4 bg-emerald-600 text-white border-2 border-emerald-100 rounded-2xl font-black text-base md:text-lg transition-all cursor-default text-left";
        fb.innerHTML = "🎉 Chính xác! Mở bài gián tiếp và Kết bài mở rộng giúp tác phẩm tự nhiên, giàu hình ảnh và chạm tới trái tim người đọc.";
        fb.className = "p-4 rounded-2xl text-lg font-black text-center bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4 transition-all";
        khoiDongDone38 = true;
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Chính xác", "🌟", "Em đã hiểu đúng vai trò của các cách viết nâng cao!");
        }
    } else {
        btn.className = "p-4 bg-rose-600 text-white border-2 border-rose-100 rounded-2xl font-black text-base md:text-lg transition-all cursor-default text-left scale-95";
        fb.innerHTML = "❌ Chưa đúng rồi! Em hãy đọc lại các phương án và chọn lại nhé!";
        fb.className = "p-4 rounded-2xl text-lg font-black text-center bg-rose-50 text-rose-800 border border-rose-100 mt-4 transition-all";
        setTimeout(() => {
            btn.className = "p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 transition-all active:scale-95 text-left text-base md:text-lg";
            fb.classList.add("hidden");
        }, 2038);
    }
};

// --- LOGIC NỘP BÀI TẬP LÀM VĂN (BÀI 2) ---
window.nopBaiTapLamVan38 = function() {
    const mb = document.getElementById("vn38-input-mb").value.trim();
    const kb = document.getElementById("vn38-input-kb").value.trim();
    const fb = document.getElementById("fb-vn38-lamvan");
    if (!fb) return;
    fb.classList.remove("hidden");

    if (mb.length < 30 || kb.length < 30) {
        fb.innerHTML = "⚠️ Cả hai phần Mở bài gián tiếp và Kết bài mở rộng cần viết đầy đủ (tối thiểu 30 ký tự mỗi phần) trước khi nộp cho Thầy E chấm nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-338";
        return;
    }

    // Kiểm tra từ khóa gợi ý về Hồ Hoàn Kiếm
    const mbLower = mb.toLowerCase();
    const kbLower = kb.toLowerCase();
    const coTuKhoaHo = mbLower.includes("hồ") || mbLower.includes("gươm") || mbLower.includes("hoàn kiếm") || mbLower.includes("thê húc") || kbLower.includes("hồ") || kbLower.includes("gươm") || kbLower.includes("hoàn kiếm") || kbLower.includes("tháp rùa");

    if (!coTuKhoaHo) {
        fb.innerHTML = "⚠️ Đoạn văn của em rất tốt nhưng hình như chưa nhắc tới địa danh Hồ Hoàn Kiếm (hoặc Hồ Gươm) thì phải. Hãy xem lại ngữ liệu bài đọc nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-338";
        return;
    }

    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-800">AI Thầy E nhận xét & Chấm điểm:</h5>
                <p class="text-lg mb-2">Thầy E rất ấn tượng với khả năng viết văn của em! Mở bài gián tiếp dẫn dắt vô cùng tự nhiên từ những phong cảnh khác để làm nổi bật Hồ Gươm. Kết bài mở rộng chứa đựng suy ngẫm sâu sắc về vẻ đẹp của thủ đô và lời mời gọi chân thành, cấu trúc ngữ pháp phong phú.</p>
                <span class="px-3 py-1 bg-emerald-600 rounded-lg text-sm font-bold">Xếp loại: Hoàn thành Xuất sắc (10/10 ⭐)</span>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-emerald-600 text-white transition-all duration-338";
};

// --- LOGIC LẬT THẺ GỢI Ý (BÀI 3) ---
window.latTheGoiY38 = function(id) {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.classList.contains("hidden")) {
        el.classList.remove("hidden");
    } else {
        el.classList.add("hidden");
    }
};

// --- NỘP TIẾT HỌC TOÀN CỤC ---
window.nopBaiTiet38Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 38',
            '✍️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">✍️</span><p class="text-lg md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành xuất sắc Tiết 38: Viết mở bài và kết bài cho bài văn tả phong cảnh!</p><p class="text-xl text-gray-800 mt-3">Giờ đây em đã làm chủ kỹ thuật mở bài gián tiếp và kết bài mở rộng để tạo nên những bài văn tả cảnh tuyệt vời!</p></div>'
        );
    }
};
