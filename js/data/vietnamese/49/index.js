export const lesson49 = {
    "topic": "Tiếng Việt 5",
    "week": "7",
    "period": "49",
    "title": "ĐỌC MỞ RỘNG: TÌM HIỂU THẾ GIỚI TỰ NHIÊN",
    "desc": "Bài học giúp học sinh thực hành đọc sách báo về núi, hang động, đại dương hoặc các hiện tượng tự nhiên; ghi chép thông tin thu hoạch được vào phiếu đọc sách khoa học.",
    "subject": "Đọc mở rộng",
    "theme": "Măng non",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
<div class="flex justify-end mb-4">
    <button onclick="playSegmentAudio('assets/audio/tiengviet/49/tim_hieu_the_gioi_tu_nhien.mp3')" class="p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc toàn bài">
        <span class="text-xl">🔊 Nghe đọc mẫu</span>
    </button>
</div>
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
                Biết cách đọc và khai thác thông tin từ sách báo khoa học về thế giới tự nhiên (núi lửa, hang động, đại dương...).
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Thực hành lập được phiếu đọc sách khoa học ghi nhận đầy đủ: tên bài đọc, tác giả, thông tin quan trọng, điều ấn tượng và cảm nhận.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Rèn luyện tinh thần ham học hỏi, yêu thích khám phá các hiện tượng khoa học kỳ thú của tự nhiên.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Câu đố khoa học</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy giải các câu đố ngắn dưới đây về các hiện tượng tự nhiên:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-bold text-sky-800 text-base md:text-lg">
            <!-- Câu 1 -->
            <div class="p-5 bg-sky-50/50 rounded-2xl border border-sky-100 space-y-3">
                <p>❓ Hiện tượng gì khi các lớp đất đá trong lòng Trái Đất đột ngột đứt gãy, làm rung chuyển mạnh mặt đất?</p>
                <div class="grid grid-cols-2 gap-2">
                    <button onclick="checkKdVn49(1, this, true)" class="p-3 bg-white hover:bg-sky-600 border border-gray-100 rounded-xl transition-all active:scale-95">Động đất</button>
                    <button onclick="checkKdVn49(1, this, false)" class="p-3 bg-white hover:bg-sky-600 border border-gray-100 rounded-xl transition-all active:scale-95">Mưa đá</button>
                </div>
            </div>

            <!-- Câu 2 -->
            <div class="p-5 bg-sky-50/50 rounded-2xl border border-sky-100 space-y-3">
                <p>❓ Nơi tích tụ dòng đá nóng chảy đặc quánh (mác-ma) ở 1349 độ C phun trào lên lớp vỏ Trái Đất gọi là gì?</p>
                <div class="grid grid-cols-2 gap-2">
                    <button onclick="checkKdVn49(2, this, false)" class="p-3 bg-white hover:bg-sky-600 border border-gray-100 rounded-xl transition-all active:scale-95">Sóng thần</button>
                    <button onclick="checkKdVn49(2, this, true)" class="p-3 bg-white hover:bg-sky-600 border border-gray-100 rounded-xl transition-all active:scale-95">Núi lửa</button>
                </div>
            </div>
        </div>
        <div id="fb-vn49-kd" class="hidden p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 transition-all"></div>
    </div>

    <!-- 📖 PHIẾU ĐỌC SÁCH MẪU CỦA CHÂU ANH (BÀI 1) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl space-y-8">
        <div class="flex items-center justify-between border-b border-sky-100 pb-4">
            <span class="text-sky-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                <span>📖</span> 1. Đọc phiếu đọc sách dưới đây
            </span>
        </div>

        <!-- Phiếu đọc sách thiết kế nghệ thuật tương tác -->
        <div class="bg-amber-50/30 p-6 md:p-8 rounded-[40px] border-2 border-amber-100 shadow-lg space-y-6 relative overflow-hidden">
            <!-- Ruy băng tiêu đề -->
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-amber-100 pb-4">
                <div class="space-y-1">
                    <span class="px-3 py-1 bg-teal-600 text-white rounded-xl font-black text-sm">Chủ nhân</span>
                    <p class="text-xl md:text-2xl font-black text-amber-600">Châu Anh - Ngày đọc: 18/10/2049</p>
                </div>
                <div class="bg-amber-500 p-4 rounded-2xl border border-amber-100 text-left">
                    <p class="font-black text-amber-600 text-lg md:text-xl">📖 Tên bài: LỢI ÍCH TỪ NÚI LỬA</p>
                    <p class="text-sm font-bold text-gray-800">Tác giả: Nguyễn Thanh Hải</p>
                </div>
            </div>

            <!-- Nội dung phiếu đọc sách -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Thông tin về núi lửa -->
                <div class="p-5 bg-white rounded-3xl border border-amber-100 space-y-3 hover:shadow-md transition-all">
                    <span class="px-2 py-0.5 bg-amber-500 text-white rounded-lg text-xs font-black">Thông tin về núi lửa</span>
                    <ul class="space-y-2 text-sm md:text-base font-bold text-gray-800 list-disc list-inside">
                        <li>Mang lại tài nguyên khoáng sản: vàng, bạc, kim cương...</li>
                        <li>Đá bị phân hủy thành đất màu mỡ cho cam, táo, cà chua phát triển.</li>
                        <li>Thu hút du khách chiêm ngưỡng, tắm khoáng nóng thư giãn...</li>
                    </ul>
                </div>

                <!-- Điều ấn tượng nhất -->
                <div class="p-5 bg-white rounded-3xl border border-amber-100 space-y-3 hover:shadow-md transition-all">
                    <span class="px-2 py-0.5 bg-sky-600 text-white rounded-lg text-xs font-black">Điều ấn tượng nhất</span>
                    <p class="text-sm md:text-base font-bold text-gray-800 leading-relaxed">
                        "Ngày nay có khoảng 549 triệu người sinh sống gần các ngọn núi lửa, trong đó có nhiều thành phố lớn nằm kề bên núi lửa đang hoạt động."
                    </p>
                </div>

                <!-- Cảm nhận & Đánh giá -->
                <div class="p-5 bg-white rounded-3xl border border-amber-100 space-y-3 hover:shadow-md transition-all">
                    <span class="px-2 py-0.5 bg-teal-600 text-white rounded-lg text-xs font-black">Cảm nhận chung</span>
                    <p class="text-sm md:text-base font-bold text-gray-800 leading-relaxed">
                        "Núi lửa không chỉ là một 'thảm họa' nguy hiểm mà thực chất còn là một 'kho báu' quý giá của Trái Đất."
                    </p>
                    <div class="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-black text-amber-600">
                        <span>Mức độ yêu thích:</span>
                        <span class="px-2.5 py-1 bg-amber-500 rounded-lg text-amber-600">⭐ Rất hay</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📚 TỦ SÁCH THẾ GIỚI TỰ NHIÊN (BÀI 2) -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">📚</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Tủ sách thế giới tự nhiên mở rộng</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Em hãy chọn một chủ đề dưới đây để đọc nhanh bài viết khoa học thú vị:</p>
            </div>
        </div>

        <!-- Tabs chọn chủ đề đọc -->
        <div class="flex gap-2 flex-wrap">
            <button id="btn-tab-ocean" onclick="chonTabSach49('ocean')" class="px-5 py-2.5 bg-sky-600 text-white rounded-2xl font-black text-sm md:text-base shadow-md transition-all">🌊 Kỳ diệu Đại dương</button>
            <button id="btn-tab-space" onclick="chonTabSach49('space')" class="px-5 py-2.5 bg-white text-sky-800 border border-sky-100 rounded-2xl font-black text-sm md:text-base hover:bg-sky-50 transition-all">🪐 Hệ Mặt Trời</button>
            <button id="btn-tab-cave" onclick="chonTabSach49('cave')" class="px-5 py-2.5 bg-white text-sky-800 border border-sky-100 rounded-2xl font-black text-sm md:text-base hover:bg-sky-50 transition-all">🏔️ Hang động huyền bí</button>
        </div>

        <!-- Nội dung sách mở rộng tương ứng -->
        <div class="p-6 bg-sky-50/20 rounded-[32px] border border-sky-100">
            <!-- Bài 1: Đại dương -->
            <div id="content-ocean" class="space-y-4">
                <h4 class="text-xl md:text-2xl font-black text-sky-800">Bài đọc: Bí ẩn đại dương xanh</h4>
                <p class="text-gray-800 text-lg md:text-xl leading-relaxed italic font-serif bg-white p-5 rounded-2xl border border-sky-100">
                    "Đại dương bao phủ hơn 70% bề mặt Trái Đất nhưng con người mới chỉ khám phá được chưa đầy 10% thế giới sâu thẳm này. Dưới lòng biển khơi lạnh giá và tối tăm, có những rãnh đại dương sâu hàng chục nghìn mét, nơi tồn tại những sinh vật kỳ lạ tự phát quang để săn mồi. Đại dương còn đóng vai trò như lá phổi thứ hai của Trái Đất, cung cấp tới hơn một nửa lượng ô-xy mà chúng ta hít thở mỗi ngày nhờ các rặng tảo biển."
                    <span class="block text-right text-xs font-semibold text-gray-800 mt-2">Tác giả: Trần Minh Quân</span>
                </p>
            </div>

            <!-- Bài 2: Hệ Mặt Trời -->
            <div id="content-space" class="space-y-4 hidden">
                <h4 class="text-xl md:text-2xl font-black text-sky-800">Bài đọc: Hệ Mặt Trời của chúng ta</h4>
                <p class="text-gray-800 text-lg md:text-xl leading-relaxed italic font-serif bg-white p-5 rounded-2xl border border-sky-100">
                    "Hệ Mặt Trời gồm có Mặt Trời ở trung tâm và tám hành tinh quay xung quanh theo các quỹ đạo hình e-líp. Trái Đất của chúng ta nằm ở vị trí thứ ba – khoảng cách hoàn hảo để nước tồn tại ở thể lỏng và nuôi dưỡng sự sống. Hành tinh lớn nhất là Sao Mộc, có thể chứa hơn 1 349 Trái Đất bên trong. Hành tinh nóng nhất là Sao Kim với bầu khí quyển CO2 dày đặc giữ nhiệt làm nhiệt độ bề mặt lên tới 449 độ C."
                    <span class="block text-right text-xs font-semibold text-gray-800 mt-2">Tác giả: Lê Thu Trang</span>
                </p>
            </div>

            <!-- Bài 3: Hang động -->
            <div id="content-cave" class="space-y-4 hidden">
                <h4 class="text-xl md:text-2xl font-black text-sky-800">Bài đọc: Những cung điện trong lòng đất</h4>
                <p class="text-gray-800 text-lg md:text-xl leading-relaxed italic font-serif bg-white p-5 rounded-2xl border border-sky-100">
                    "Các hang động tự nhiên được hình thành qua hàng triệu năm nhờ nước mưa hòa tan đá vôi. Trong lòng hang, dòng nước nhỏ giọt tạo thành các cột nhũ đá từ trên trần rủ xuống và măng đá từ dưới đất mọc lên với đủ loại hình thù lấp lánh kỳ ảo. Việt Nam tự hào sở hữu Sơn Đoòng – hang động tự nhiên lớn nhất thế giới, rộng đến mức có thể chứa cả một tòa nhà cao tầng và có cả một cánh rừng nguyên sinh phát triển ngay trong lòng hang."
                    <span class="block text-right text-xs font-semibold text-gray-800 mt-2">Tác giả: Nguyễn Hoàng Nam</span>
                </p>
            </div>
        </div>
    </section>

    <!-- ✍️ VIẾT PHIẾU ĐỌC SÁCH CÁ NHÂN (BÀI 3) -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">✍️</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Thực hành: Viết phiếu đọc sách của em</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Em hãy ghi chép lại thông tin thu hoạch được sau khi đọc bài viết khoa học ở trên (hoặc bài báo thế giới tự nhiên khác em đã đọc):</p>
            </div>
        </div>

        <div class="bg-sky-50/20 p-6 rounded-[32px] border border-sky-100 space-y-4 font-bold text-sky-800 text-base md:text-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block mb-1 text-sm text-sky-800">📖 Tên sách / Bài báo:</label>
                    <input id="vn49-txt-tenbai" type="text" placeholder="Ví dụ: Bí ẩn đại dương xanh" class="w-full p-3 border border-gray-100 rounded-xl bg-white font-bold text-base md:text-lg focus:border-sky-500 outline-none"/>
                </div>
                <div>
                    <label class="block mb-1 text-sm text-sky-800">✍️ Tác giả:</label>
                    <input id="vn49-txt-tacgia" type="text" placeholder="Ví dụ: Trần Minh Quân" class="w-full p-3 border border-gray-100 rounded-xl bg-white font-bold text-base md:text-lg focus:border-sky-500 outline-none"/>
                </div>
            </div>

            <div class="space-y-2">
                <label class="block text-sm text-sky-800">🌱 Những thông tin quan trọng em học được:</label>
                <textarea id="vn49-txt-thongtin" rows="3" placeholder="Ví dụ: Đại dương bao phủ 70% bề mặt Trái Đất, cung cấp một nửa lượng ô-xy cho sự sống nhờ các rặng tảo biển..." class="w-full p-3 border border-gray-100 rounded-xl bg-white text-base md:text-lg font-bold focus:border-sky-500 outline-none shadow-sm"></textarea>
            </div>

            <div class="space-y-2">
                <label class="block text-sm text-sky-800">🌟 Điều em ấn tượng nhất về thế giới tự nhiên:</label>
                <textarea id="vn49-txt-antuong" rows="2" placeholder="Ví dụ: Em rất ấn tượng vì con người mới chỉ khám phá được chưa đầy 10% đáy đại dương xanh." class="w-full p-3 border border-gray-100 rounded-xl bg-white text-base md:text-lg font-bold focus:border-sky-500 outline-none shadow-sm"></textarea>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div>
                    <label class="block mb-1 text-sm text-sky-800">❤️ Mức độ yêu thích bài viết:</label>
                    <select id="vn49-sel-like" class="w-full p-3 border border-gray-100 rounded-xl bg-white font-bold text-base md:text-lg focus:border-sky-500 outline-none text-sky-800">
                        <option value="very">⭐ Rất hay, vô cùng bổ ích</option>
                        <option value="good">⭐ Khá hay, có nhiều tin mới</option>
                        <option value="normal">⭐ Bình thường</option>
                    </select>
                </div>
                <div class="flex justify-end items-center gap-4"><button onclick="nopPhieuDoc49();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            </div>
            <div id="fb-vn49-phieu" class="hidden p-5 rounded-2xl text-base font-bold shadow-md transition-all duration-349"></div>
        </div>
    </section>

    <!-- 🌎 HOẠT ĐỘNG VẬN DỤNG: ĐỊA DANH NÚI LỬA NỔI TIẾNG -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🌎</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Vận dụng: Địa điểm du lịch từ núi lửa</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Những địa danh du lịch tuyệt đẹp trên thế giới và Việt Nam được kiến tạo từ hoạt động phun trào núi lửa:</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-bold text-gray-800 text-sm md:text-base">
            <!-- Đảo Lý Sơn -->
            <div class="p-5 bg-sky-50/30 rounded-3xl border border-sky-100 space-y-2 text-center">
                <span class="text-2xl md:text-3xl block">🇻🇳</span>
                <h4 class="font-black text-sky-800 text-base md:text-lg">Đảo Lý Sơn (Quảng Ngãi)</h4>
                <p class="text-gray-800 font-medium text-xs leading-relaxed">Được hình thành từ 5 miệng núi lửa hoạt động hàng triệu năm trước. Đất bazơ núi lửa màu mỡ rất thích hợp trồng tỏi Lý Sơn thơm ngon đặc trưng.</p>
            </div>

            <!-- Núi Phú Sĩ -->
            <div class="p-5 bg-sky-50/30 rounded-3xl border border-sky-100 space-y-2 text-center">
                <span class="text-2xl md:text-3xl block">🇯🇵</span>
                <h4 class="font-black text-sky-800 text-base md:text-lg">Núi Phú Sĩ (Nhật Bản)</h4>
                <p class="text-gray-800 font-medium text-xs leading-relaxed">Ngọn núi cao nhất Nhật Bản, thực chất là một ngọn núi lửa dạng tầng khổng lồ tuyệt đẹp hình nón cân đối, đỉnh núi luôn phủ tuyết trắng xóa.</p>
            </div>

            <!-- Đảo Jeju -->
            <div class="p-5 bg-sky-50/30 rounded-3xl border border-sky-100 space-y-2 text-center">
                <span class="text-2xl md:text-3xl block">🇰🇷</span>
                <h4 class="font-black text-sky-800 text-base md:text-lg">Đảo Jeju (Hàn Quốc)</h4>
                <p class="text-gray-800 font-medium text-xs leading-relaxed">Hòn đảo xinh đẹp được kiến tạo hoàn toàn từ hoạt động phun trào núi lửa dưới lòng đại dương, nổi tiếng với đỉnh Hallasan và các ống dẫn dung nham cổ xưa.</p>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TIẾT -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiTiet49Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Chủ đề đọc mở rộng của Bài 14 hướng dẫn học sinh đọc tài liệu về lĩnh vực nào?",
            "options": [
                "Truyện cổ tích dân gian Việt Nam",
                "Sách báo về núi, hang động, đại dương, các hành tinh hoặc các hiện tượng tự nhiên",
                "Kinh nghiệm nuôi dưỡng vật nuôi trong nhà",
                "Lịch sử phát triển của các triều đại phong kiến"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Trong phiếu đọc sách mẫu của bạn Châu Anh, bài viết có tiêu đề là gì?",
            "options": [
                "Bí ẩn đại dương xanh",
                "Lợi ích từ núi lửa",
                "Cung điện nhũ đá trong lòng đất",
                "Hệ Mặt Trời của chúng ta"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Theo phiếu đọc sách mẫu, dung nham núi lửa mang lại nguồn tài nguyên khoáng sản nào?",
            "options": [
                "Than đá, dầu mỏ và khí đốt",
                "Vàng, bạc, kim cương...",
                "Đá vôi và cát mịn",
                "Sắt, đồng và thiếc thô"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Lợi ích nông nghiệp lâu dài mà đá núi lửa bị phân hủy mang lại là gì?",
            "options": [
                "Làm nghèo nàn đất đai xung quanh",
                "Tạo thành đất đai màu mỡ bazan, đem lại vụ mùa bội thu cho cam, táo, cà chua...",
                "Khiến cây trồng bị héo úa do nhiệt độ cao",
                "Làm ngập úng ruộng vườn khi mưa bão"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Điều ấn tượng nhất về núi lửa được ghi nhận trong phiếu của Châu Anh là gì?",
            "options": [
                "Núi lửa có tiếng nổ kinh hoàng như bom",
                "Có khoảng 549 triệu người sinh sống gần các ngọn núi lửa đang hoạt động",
                "Đỉnh núi lửa Phú Sĩ phủ đầy tuyết trắng",
                "Dung nham chảy xiết như thác lũ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nhận xét cuối cùng của bạn Châu Anh về ngọn núi lửa là gì?",
            "options": [
                "Núi lửa là thảm họa khủng khiếp nhất cần tránh xa",
                "Núi lửa không chỉ là một 'thảm họa' mà còn là một 'kho báu'",
                "Biển đảo Việt Nam tuyệt đẹp nhờ san hô",
                "Du lịch núi lửa chỉ dành cho người mạo hiểm"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Đại dương bao phủ khoảng bao nhiêu phần trăm bề mặt Trái Đất?",
            "options": [
                "Khoảng 50% bề mặt",
                "Hơn 70% bề mặt Trái Đất",
                "Chỉ khoảng 30% bề mặt lục địa",
                "Hơn 95% bề mặt hành tinh"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Tảo biển trong lòng đại dương xanh đóng vai trò như thế nào?",
            "options": [
                "Làm ô nhiễm nguồn nước biển",
                "Như lá phổi thứ hai của Trái Đất, cung cấp hơn một nửa lượng ô-xy chúng ta hít thở",
                "Làm cản trở tàu bè qua lại",
                "Làm thức ăn duy nhất cho các loài cá voi"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Hành tinh nào nóng nhất trong Hệ Mặt Trời và tại sao?",
            "options": [
                "Sao Thủy vì nằm gần Mặt Trời nhất",
                "Sao Kim vì có bầu khí quyển CO2 dày đặc giữ nhiệt làm nhiệt độ bề mặt lên tới 449 độ C",
                "Sao Hỏa vì có nhiều sắt oxit màu đỏ",
                "Sao Mộc vì có kích thước khổng lồ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Hang động tự nhiên thường được hình thành từ loại đá nào qua hàng triệu năm?",
            "options": [
                "Đá bazan núi lửa",
                "Đá vôi nhờ nước mưa hòa tan",
                "Đá granite siêu cứng",
                "Cát mịn bồi đắp"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Hang động tự nhiên lớn nhất thế giới nằm ở quốc gia nào?",
            "options": [
                "Mỹ (Vườn quốc gia Yellowstone)",
                "Việt Nam (Hang Sơn Đoòng)",
                "Nhật Bản (Núi Phú Sĩ)",
                "Hàn Quốc (Đảo Jeju)"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Thông tin nào cần điền vào phiếu đọc sách để ghi nhớ người viết bài báo?",
            "options": [
                "Tên bài đọc",
                "Tác giả bài viết",
                "Ngày đọc sách",
                "Mức độ yêu thích"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Lý Sơn (Quảng Ngãi) là địa danh du lịch nổi tiếng được hình thành từ gì?",
            "options": [
                "Rặng san hô nông sâu ven biển",
                "Năm miệng núi lửa hoạt động hàng triệu năm trước kiến tạo nên",
                "Phù sa bồi đắp của dòng sông Trà Khúc",
                "Sự xói mòn của sóng biển vào núi đá"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Ngọn núi cao nhất Nhật Bản – Phú Sĩ – thực chất là:",
            "options": [
                "Một núi băng vĩnh cửu",
                "Một ngọn núi lửa dạng tầng khổng lồ tuyệt đẹp hình nón",
                "Một ngọn núi đá vôi bị bào mòn",
                "Một hòn đảo nhân tạo"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Hòn đảo Jeju nổi tiếng của Hàn Quốc được hình thành từ hoạt động địa chất nào?",
            "options": [
                "Động đất kiến tạo mảng sụt lún",
                "Phun trào núi lửa dưới lòng đại dương dâng lên tạo thành",
                "Xói mòn đất lục địa",
                "Va chạm của thiên thạch lớn ngoài vũ trụ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Việc lập phiếu đọc sách có tác dụng chính là gì?",
            "options": [
                "Để khoe với các bạn trong lớp",
                "Giúp ghi chép và lưu giữ hệ thống các thông tin khoa học bổ ích sau khi đọc",
                "Để tập viết chữ cho đẹp",
                "Để nộp lấy điểm rồi cất đi"
            ],
            "answer": 1,
            "level": 0
        }
    ]
};

// --- LOGIC TIẾT 49 ---

// 1. Logic giải câu đố Khởi động
let kdAnswers49 = { 1: false, 2: false };
window.checkKdVn49 = function(qNo, btn, isCorrect) {
    const fb = document.getElementById("fb-vn49-kd");
    if (!fb) return;

    fb.classList.remove("hidden");

    if (isCorrect) {
        kdAnswers49[qNo] = true;
        btn.className = "p-3 bg-emerald-600 text-white border border-emerald-100 rounded-xl transition-all cursor-default scale-95 font-bold";
        fb.innerHTML = `🎉 Chính xác! Câu trả lời rất thông minh.`;
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4 transition-all";
        
        // Vô hiệu hóa nút khác trong câu đó
        const parent = btn.parentElement;
        if (parent) {
            const buttons = parent.querySelectorAll("button");
            buttons.forEach(b => {
                if (b !== btn) b.disabled = true;
            });
        }

        if (kdAnswers49[1] && kdAnswers49[2]) {
            fb.innerHTML = "🎉 Tuyệt vời! Em đã giải xuất sắc cả 2 câu đố khoa học khởi động!";
            if (typeof window.showMathFeedback === 'function') {
                window.showMathFeedback("Giải đố hoàn thành", "🧩", "Em đã giải đố thành công!");
            }
        }
    } else {
        btn.className = "p-3 bg-rose-600 text-white border border-rose-100 rounded-xl transition-all cursor-default scale-95 font-bold";
        fb.innerHTML = "❌ Câu trả lời chưa chính xác. Em hãy suy nghĩ và chọn lại nhé!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-rose-50 text-rose-800 border border-rose-100 mt-4 transition-all";
        
        setTimeout(() => {
            btn.className = "p-3 bg-white hover:bg-sky-600 border border-gray-100 rounded-xl transition-all active:scale-95";
            fb.classList.add("hidden");
        }, 1549);
    }
};

// 2. Chuyển tab Tủ sách thế giới tự nhiên
window.chonTabSach49 = function(topic) {
    const tabOC = document.getElementById("content-ocean");
    const tabSP = document.getElementById("content-space");
    const tabCV = document.getElementById("content-cave");

    const btnOC = document.getElementById("btn-tab-ocean");
    const btnSP = document.getElementById("btn-tab-space");
    const btnCV = document.getElementById("btn-tab-cave");

    if (!tabOC || !tabSP || !tabCV || !btnOC || !btnSP || !btnCV) return;

    tabOC.classList.toggle("hidden", topic !== 'ocean');
    tabSP.classList.toggle("hidden", topic !== 'space');
    tabCV.classList.toggle("hidden", topic !== 'cave');

    btnOC.className = topic === 'ocean'
        ? "px-5 py-2.5 bg-sky-600 text-white rounded-2xl font-black text-sm md:text-base shadow-md transition-all"
        : "px-5 py-2.5 bg-white text-sky-800 border border-sky-100 rounded-2xl font-black text-sm md:text-base hover:bg-sky-50 transition-all";

    btnSP.className = topic === 'space'
        ? "px-5 py-2.5 bg-sky-600 text-white rounded-2xl font-black text-sm md:text-base shadow-md transition-all"
        : "px-5 py-2.5 bg-white text-sky-800 border border-sky-100 rounded-2xl font-black text-sm md:text-base hover:bg-sky-50 transition-all";

    btnCV.className = topic === 'cave'
        ? "px-5 py-2.5 bg-sky-600 text-white rounded-2xl font-black text-sm md:text-base shadow-md transition-all"
        : "px-5 py-2.5 bg-white text-sky-800 border border-sky-100 rounded-2xl font-black text-sm md:text-base hover:bg-sky-50 transition-all";
};

// 3. Nộp phiếu đọc sách cá nhân
window.nopPhieuDoc49 = function() {
    const tenbai = document.getElementById("vn49-txt-tenbai").value.trim();
    const tacgia = document.getElementById("vn49-txt-tacgia").value.trim();
    const thongtin = document.getElementById("vn49-txt-thongtin").value.trim();
    const antuong = document.getElementById("vn49-txt-antuong").value.trim();
    const fb = document.getElementById("fb-vn49-phieu");

    if (!fb) return;
    fb.classList.remove("hidden");

    if (!tenbai || !tacgia || !thongtin || !antuong) {
        fb.innerHTML = "⚠️ Em hãy điền đầy đủ các thông tin trong Phiếu đọc sách nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-349";
        return;
    }

    if (thongtin.length < 20 || antuong.length < 15) {
        fb.innerHTML = "⚠️ Phần thông tin thu hoạch hoặc điều ấn tượng của em ghi nhận còn ngắn. Em hãy viết đầy đủ câu chi tiết hơn nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-349";
        return;
    }

    // Thành công
    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-800">AI Thầy E nhận xét Phiếu đọc sách:</h5>
                <p class="text-lg mb-2">Thầy khen em đã đọc bài rất kỹ và ghi chép phiếu đọc sách khoa học vô cùng gọn gàng, đầy đủ các mục chi tiết. Những điều em ấn tượng và cảm nhận cho thấy em có óc quan sát rất tốt về khoa học tự nhiên!</p>
                <span class="px-3 py-1 bg-emerald-600 rounded-lg text-sm font-bold">Kết quả: Đạt kết quả xuất sắc (149% ⭐)</span>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-emerald-600 text-white transition-all duration-349";
};

// 4. Nộp bài hoàn thành tiết học toàn cục
window.nopBaiTiet49Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 49',
            '📚',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🏆</span><p class="text-xl md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành xuất sắc Tiết 49: Đọc mở rộng!</p><p class="text-xl text-gray-800 mt-3">Hãy luôn giữ vững thói quen đọc sách báo khoa học để làm giàu thêm kho tàng tri thức về thế giới tự nhiên tươi đẹp nhé!</p></div>'
        );
    }
};
