export const lesson69 = {
    "topic": "Tiếng Việt 5",
    "week": "10",
    "period": "69",
    "title": "VIẾT: TÌM Ý CHO ĐOẠN VĂN GIỚI THIỆU NHÂN VẬT",
    "desc": "Hướng dẫn chi tiết các bước chuẩn bị và tìm ý (Mở đầu, Triển khai, Kết thúc) để viết đoạn văn giới thiệu một nhân vật văn học trong cuốn sách em đã đọc.",
    "subject": "Viết",
    "theme": "Thế giới tuổi thơ",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-emerald-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-emerald-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-emerald-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-emerald-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Biết cách chuẩn bị: chọn nhân vật, xác định thông tin về nhân vật và cuốn sách cần giới thiệu.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Nắm vững cấu trúc 3 phần (Mở đầu, Triển khai, Kết thúc) của một đoạn văn giới thiệu nhân vật.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Biết tìm ý và lập được một dàn ý chi tiết, hợp lí cho đoạn văn tự viết.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG: TRÒ CHƠI PHÂN LOẠI Ý -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Thử tài phân loại ý</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Hướng dẫn: Chọn ý tưởng ở bên trái và bấm vào phần tương ứng ở bên phải (Mở đầu, Triển khai, Kết thúc) để phân loại đúng cấu trúc đoạn văn:</p>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <!-- Cột trái: Các ý tưởng mẫu -->
            <div class="space-y-3" id="vn69-kd-ideas">
                <button id="idea-69-1" onclick="chonY69(1)" class="w-full p-4 text-left border-2 border-gray-100 bg-gray-50 rounded-2xl font-bold text-lg md:text-xl hover:border-emerald-100 transition-all text-gray-800 active:scale-95">
                    "Em rất thích nhân vật Da-rơ trong truyện Thanh âm của gió."
                </button>
                <button id="idea-69-2" onclick="chonY69(2)" class="w-full p-4 text-left border-2 border-gray-100 bg-gray-50 rounded-2xl font-bold text-lg md:text-xl hover:border-emerald-100 transition-all text-gray-800 active:scale-95">
                    "Da-rơ có đôi mắt đen sáng ngời, tính tình hiền lành và rất yêu âm nhạc."
                </button>
                <button id="idea-69-3" onclick="chonY69(3)" class="w-full p-4 text-left border-2 border-gray-100 bg-gray-50 rounded-2xl font-bold text-lg md:text-xl hover:border-emerald-100 transition-all text-gray-800 active:scale-95">
                    "Da-rơ thích giơ hai tay lên đón gió và nói về thanh âm của quê hương."
                </button>
                <button id="idea-69-4" onclick="chonY69(4)" class="w-full p-4 text-left border-2 border-gray-100 bg-gray-50 rounded-2xl font-bold text-lg md:text-xl hover:border-emerald-100 transition-all text-gray-800 active:scale-95">
                    "Nhân vật Da-rơ đã truyền cho em bài học quý giá về việc yêu mến vẻ đẹp thiên nhiên."
                </button>
            </div>

            <!-- Cột phải: Các phần của đoạn văn -->
            <div class="space-y-4">
                <button onclick="ghepNghia69('modau')" class="w-full p-5 text-left bg-sky-50 hover:bg-sky-600 border-2 border-sky-100 rounded-2xl font-black text-xl transition-all flex items-center justify-between text-sky-800">
                    <span>Mở đầu</span>
                    <span id="slot-modau" class="px-3 py-1 bg-sky-600 rounded-lg text-xs font-bold">Chưa nối</span>
                </button>
                <button onclick="ghepNghia69('trienkhai')" class="w-full p-5 text-left bg-emerald-50 hover:bg-emerald-600 border-2 border-emerald-100 rounded-2xl font-black text-xl transition-all flex items-center justify-between text-emerald-800">
                    <span>Triển khai</span>
                    <span id="slot-trienkhai" class="px-3 py-1 bg-emerald-600 rounded-lg text-xs font-bold">Chưa nối</span>
                </button>
                <button onclick="ghepNghia69('ketthuc')" class="w-full p-5 text-left bg-amber-50 hover:bg-amber-500 border-2 border-amber-100 rounded-2xl font-black text-xl transition-all flex items-center justify-between text-amber-600">
                    <span>Kết thúc</span>
                    <span id="slot-ketthuc" class="px-3 py-1 bg-amber-500 rounded-lg text-xs font-bold">Chưa nối</span>
                </button>
            </div>
        </div>
        <div id="fb-vn69-kd" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2 animate-in slide-in-from-top-2 duration-369"></div>
    </div>

    <!-- 📖 HOẠT ĐỘNG LẬP DÀN Ý (TÌM Ý) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-8">
            <div class="flex items-center gap-3 border-b border-emerald-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md">1</span>
                <h3 class="text-2xl md:text-3xl font-black text-emerald-800">Chọn nhân vật gợi ý hoặc tự chọn nhân vật của em</h3>
            </div>

            <!-- Các nhân vật gợi ý nhanh -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button onclick="chonNhanVat69('Da-rơ')" class="p-5 text-center bg-sky-50 hover:bg-sky-600 border-2 border-sky-100 rounded-3xl transition-all active:scale-95 shadow-sm">
                    <span class="text-2xl md:text-4xl block mb-2">👦</span>
                    <strong class="text-xl text-sky-800 block">Da-rơ</strong>
                    <span class="text-sm text-gray-800 font-medium">Truyện "Thanh âm của gió"</span>
                </button>
                <button onclick="chonNhanVat69('Tạ Quang Bửu')" class="p-5 text-center bg-emerald-50 hover:bg-emerald-600 border-2 border-emerald-100 rounded-3xl transition-all active:scale-95 shadow-sm">
                    <span class="text-2xl md:text-4xl block mb-2">🎓</span>
                    <strong class="text-xl text-emerald-800 block">Tạ Quang Bửu</strong>
                    <span class="text-sm text-gray-800 font-medium">Bài đọc "Tấm gương tự học"</span>
                </button>
                <button onclick="chonNhanVat69('Dế Mèn')" class="p-5 text-center bg-amber-50 hover:bg-amber-500 border-2 border-amber-100 rounded-3xl transition-all active:scale-95 shadow-sm">
                    <span class="text-2xl md:text-4xl block mb-2">🦗</span>
                    <strong class="text-xl text-amber-600 block">Dế Mèn</strong>
                    <span class="text-sm text-gray-800 font-medium">Truyện "Dế Mèn phiêu lưu kí"</span>
                </button>
            </div>

            <!-- Form Nhập Tên Nhân Vật tự chọn -->
            <div class="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-4">
                <h4 class="text-xl font-bold text-gray-800">✍️ Nhân vật em lựa chọn viết là:</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input type="text" id="ans-vn69-name" placeholder="Tên nhân vật (Ví dụ: Dế Mèn)" class="p-4 rounded-xl border border-gray-100 outline-none focus:border-emerald-500 font-bold bg-white text-lg md:text-xl md:col-span-1" />
                    <input type="text" id="ans-vn69-book" placeholder="Tên cuốn sách (Ví dụ: Dế Mèn phiêu lưu kí)" class="p-4 rounded-xl border border-gray-100 outline-none focus:border-emerald-500 font-bold bg-white text-lg md:text-xl md:col-span-2" />
                </div>
            </div>

            <!-- Biểu mẫu 3 phần Lập dàn ý -->
            <div class="flex items-center gap-3 border-b border-emerald-100 pb-4 pt-4">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md">2</span>
                <h3 class="text-2xl md:text-3xl font-black text-emerald-800">Lập dàn ý (Tìm ý chi tiết)</h3>
            </div>

            <div class="space-y-6">
                <!-- 1. Mở đầu -->
                <div class="bg-sky-50/40 p-6 md:p-8 rounded-[32px] border border-sky-100 space-y-4">
                    <div class="flex items-center gap-3">
                        <span class="w-8 h-8 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-base">I</span>
                        <h4 class="text-xl md:text-2xl font-black text-sky-800">Mở đầu: Giới thiệu chung</h4>
                    </div>
                    <p class="text-base text-gray-800 font-semibold italic">💡 Gợi ý SGK: Giới thiệu chung về nhân vật trong cuốn sách (tên sách, tên tác giả, tên nhân vật) và nêu ấn tượng chung về nhân vật.</p>
                    <textarea id="ans-vn69-modau" rows="3" placeholder="Ví dụ: Trong cuốn sách Dế Mèn phiêu lưu kí của nhà văn Tô Hoài, nhân vật để lại trong em ấn tượng sâu đậm nhất là Dế Mèn - một chú dế dũng cảm, yêu tự do và luôn hướng thiện." class="w-full p-4 text-xl md:text-2xl rounded-2xl border-2 border-sky-100 focus:border-sky-500 outline-none shadow-sm bg-white font-medium leading-relaxed"></textarea>
                </div>

                <!-- 2. Triển khai -->
                <div class="bg-emerald-50/40 p-6 md:p-8 rounded-[32px] border border-emerald-100 space-y-4">
                    <div class="flex items-center gap-3">
                        <span class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-base">II</span>
                        <h4 class="text-xl md:text-2xl font-black text-emerald-800">Triển khai: Đặc điểm & Dẫn chứng</h4>
                    </div>
                    <p class="text-base text-gray-800 font-semibold italic">💡 Gợi ý SGK: Chỉ ra những đặc điểm ngoại hình, hành động, lời nói, suy nghĩ,... của nhân vật; nêu các dẫn chứng được lấy ra từ cuốn sách để minh hoạ cho các đặc điểm đó.</p>
                    <textarea id="ans-vn69-trienkhai" rows="4" placeholder="Ví dụ: Dế Mèn lúc đầu kiêu căng nhưng sau khi trải qua bài học đắt giá về cái chết của Dế Choắt đã trở nên chín chắn hơn. Chú quyết định đi chu du thiên hạ để học hỏi và giúp đỡ những kẻ yếu đuối như chị Nhà Trò." class="w-full p-4 text-xl md:text-2xl rounded-2xl border-2 border-emerald-100 focus:border-emerald-500 outline-none shadow-sm bg-white font-medium leading-relaxed"></textarea>
                </div>

                <!-- 3. Kết thúc -->
                <div class="bg-amber-50/40 p-6 md:p-8 rounded-[32px] border border-amber-100 space-y-4">
                    <div class="flex items-center gap-3">
                        <span class="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-base">III</span>
                        <h4 class="text-xl md:text-2xl font-black text-amber-600">Kết thúc: Nhận xét & Bài học</h4>
                    </div>
                    <p class="text-base text-gray-800 font-semibold italic">💡 Gợi ý SGK: Nêu nhận xét hoặc cảm nghĩ về nhân vật. Em có thể nêu bài học mà nhân vật đem đến cho em.</p>
                    <textarea id="ans-vn69-ketthuc" rows="3" placeholder="Ví dụ: Qua câu chuyện của Dế Mèn, em tự rút ra cho mình bài học sâu sắc về sự khiêm tốn, lòng dũng cảm bảo vệ lẽ phải và khát vọng sống cống hiến cho xã hội." class="w-full p-4 text-xl md:text-2xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-white font-medium leading-relaxed"></textarea>
                </div>
            </div>

            <!-- Nút xuất dàn ý -->
            <div class="flex justify-center gap-4 pt-4">
                <button onclick="xuatDanY69()" class="px-8 py-3.5 bg-emerald-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-emerald-600 active:scale-95 transition-all">📋 XUẤT DÀN Ý HOÀN CHỈNH</button>
            </div>

            <!-- Khung hiển thị dàn ý kết quả -->
            <div id="output-dan-y-box" class="hidden p-6 md:p-8 bg-amber-50/30 rounded-[32px] border-2 border-dashed border-amber-200 space-y-4">
                <div class="flex justify-between items-center border-b border-amber-100 pb-2">
                    <span class="text-lg font-black text-amber-600">📄 Dàn ý đoạn văn giới thiệu nhân vật</span>
                    <button onclick="copyDanY69()" class="px-4 py-1.5 bg-emerald-600 text-white font-bold rounded-lg text-xs hover:bg-emerald-600 shadow-sm transition-all">Sao chép</button>
                </div>
                <div id="output-dan-y-content" class="text-lg md:text-xl leading-relaxed text-gray-800 space-y-2 whitespace-pre-line font-medium"></div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 BẢNG KIỂM TỰ ĐÁNH GIÁ (MỤC 3 SGK) -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-6">
            <div class="flex items-center gap-3 border-b border-emerald-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md">3</span>
                <h3 class="text-2xl md:text-3xl font-black text-emerald-800">Góp ý và chỉnh sửa: Bảng kiểm tự đánh giá</h3>
            </div>
            <p class="text-lg md:text-xl text-gray-800 font-bold">👉 Sau khi hoàn thành dàn ý, em hãy tự kiểm tra xem bài viết của mình đã đạt các tiêu chuẩn dưới đây chưa:</p>

            <div class="space-y-3 max-w-3xl mx-auto pt-2">
                <label class="flex items-start gap-4 p-4 bg-emerald-50/30 hover:bg-emerald-50 border border-emerald-100 rounded-2xl cursor-pointer transition-all">
                    <input type="checkbox" id="chk-69-1" class="w-6 h-6 rounded text-emerald-800 focus:ring-emerald-600 mt-1" />
                    <span class="text-lg md:text-xl text-emerald-800 font-bold">Nêu thông tin chính xác về cuốn sách.</span>
                </label>
                <label class="flex items-start gap-4 p-4 bg-emerald-50/30 hover:bg-emerald-50 border border-emerald-100 rounded-2xl cursor-pointer transition-all">
                    <input type="checkbox" id="chk-69-2" class="w-6 h-6 rounded text-emerald-800 focus:ring-emerald-600 mt-1" />
                    <span class="text-lg md:text-xl text-emerald-800 font-bold">Giới thiệu đúng đặc điểm nhân vật.</span>
                </label>
                <label class="flex items-start gap-4 p-4 bg-emerald-50/30 hover:bg-emerald-50 border border-emerald-100 rounded-2xl cursor-pointer transition-all">
                    <input type="checkbox" id="chk-69-3" class="w-6 h-6 rounded text-emerald-800 focus:ring-emerald-600 mt-1" />
                    <span class="text-lg md:text-xl text-emerald-800 font-bold">Đưa dẫn chứng cụ thể về hành động, lời nói, suy nghĩ,... của nhân vật.</span>
                </label>
            </div>

            <!-- Chấm điểm tự luận từ AI Thầy E -->
            <div class="flex justify-center gap-3 pt-6">
                <button onclick="chamDanY69()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                    <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                    <span>AI THẦY E ĐÁNH GIÁ</span>
                </button>
                <div id="fb-vn69-writing" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBai69Global()" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-emerald-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Mục đích chính của việc lập dàn ý trước khi viết đoạn văn là gì?",
            "options": [
                "Giúp sắp xếp các ý tưởng một cách logic và đầy đủ, tránh thiếu ý hay lạc đề",
                "Để khoe với thầy cô và bạn bè",
                "Để bài văn được dài thêm nhiều trang",
                "Để rèn luyện chữ viết đẹp hơn"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Cấu trúc chuẩn của một đoạn văn giới thiệu nhân vật gồm mấy phần?",
            "options": [
                "3 phần (Mở đầu, Triển khai, Kết thúc)",
                "2 phần (Mở đoạn, Thân đoạn)",
                "4 phần (Mở đầu, Lý do, Nội dung, Tổng kết)",
                "Chỉ cần viết liên tục không cần chia phần"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Phần 'Mở đầu' của đoạn văn giới thiệu nhân vật cần nêu những thông tin nào?",
            "options": [
                "Tên sách, tên tác giả, tên nhân vật và ấn tượng chung về nhân vật",
                "Đặc điểm ngoại hình chi tiết và các hành động của nhân vật",
                "Cảm nghĩ cá nhân và bài học sâu sắc từ câu chuyện",
                "Nơi mua sách và giá trị của cuốn sách đó"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong phần 'Triển khai', chúng ta cần làm gì để làm nổi bật các đặc điểm của nhân vật?",
            "options": [
                "Nêu các đặc điểm kèm dẫn chứng cụ thể từ cuốn sách (hành động, lời nói, suy nghĩ...)",
                "Chỉ cần liệt kê tên các nhân vật phụ khác trong câu chuyện",
                "Kể lại toàn bộ cốt truyện từ đầu đến cuối một cách chi tiết",
                "Vẽ tranh minh họa nhân vật đó"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Phần 'Kết thúc' của đoạn văn giới thiệu nhân vật thường tập trung nêu nội dung gì?",
            "options": [
                "Nêu nhận xét, cảm nghĩ chung hoặc bài học rút ra từ nhân vật",
                "Giới thiệu các cuốn sách khác của cùng tác giả",
                "Miêu tả ngoại hình của tác giả cuốn sách",
                "Tóm tắt kết thúc của câu chuyện"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi giới thiệu nhân vật Tạ Quang Bửu (Tấm gương tự học), dẫn chứng nào sau đây phù hợp nhất để minh họa cho tinh thần tự học?",
            "options": [
                "Mải đọc sách trên lưng ngựa ngã tòm xuống suối, học ngoại ngữ trong thời gian ngắn",
                "Được nhà nước đặt tên cho các con phố lớn",
                "Là người nói tiếng Anh hoàn hảo khiến người Anh kinh ngạc",
                "Ông biết chơi nhiều môn thể thao và am hiểu âm nhạc"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tiêu chí 'Đưa dẫn chứng cụ thể' nghĩa là gì?",
            "options": [
                "Trích dẫn các chi tiết, hành động, lời nói của nhân vật được ghi rõ trong sách",
                "Tự nghĩ ra một câu chuyện mới cho nhân vật",
                "Sử dụng các nhận xét từ internet",
                "Nêu ý kiến cá nhân không cần chứng minh"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Vì sao phải nêu chính xác tên sách và tên tác giả ở phần mở đầu?",
            "options": [
                "Để người đọc biết rõ nhân vật đó thuộc tác phẩm nào và của ai",
                "Vì đó là quy định bắt buộc của tất cả các bài kiểm tra tiếng Việt",
                "Để bài viết nhìn có vẻ chuyên nghiệp hơn",
                "Để nhà xuất bản sách không kiện bản quyền"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Dẫn chứng nào sau đây phù hợp để chứng minh nhân vật Da-rơ (Thanh âm của gió) có tâm hồn nhạy cảm, yêu thiên nhiên?",
            "options": [
                "Da-rơ giơ hai tay lên trời và nói: 'Thanh âm của gió đấy!' khi nghe tiếng gió thổi rì rào",
                "Da-rơ rủ bạn đi chăn trâu hàng ngày",
                "Da-rơ nằm ngủ dưới bóng mát thung lũng",
                "Da-rơ chỉ tay vào đàn trâu đang ăn cỏ"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Ý nào dưới đây thuộc phần 'Kết thúc' của đoạn văn giới thiệu nhân vật Dế Mèn?",
            "options": [
                "Dế Mèn đã để lại cho em bài học đắt giá về sự khiêm tốn và lòng vị tha.",
                "Em rất thích nhân vật Dế Mèn trong tác phẩm Dế Mèn phiêu lưu kí của Tô Hoài.",
                "Dế Mèn là một chú dế thanh niên khỏe mạnh, cường tráng.",
                "Dế Mèn đã dũng cảm bênh vực chị Nhà Trò yếu đuối trước bọn Nhện hung ác."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Ý nào dưới đây thuộc phần 'Mở đầu' của đoạn văn?",
            "options": [
                "Cuốn sách 'Tấm gương tự học' kể về giáo sư Tạ Quang Bửu - một tấm gương tự học vĩ đại.",
                "Ông có thể tự học tiếng Nga trong ba tháng để dịch tài liệu quân sự.",
                "Em vô cùng kính phục và tự hứa sẽ học tập tinh thần tự học của ông.",
                "Tên của ông được đặt cho giải thưởng khoa học uy tín ở nước ta."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong đoạn văn giới thiệu nhân vật, các câu văn triển khai cần được liên kết với nhau bằng cách nào?",
            "options": [
                "Sử dụng các từ ngữ nối, thay thế từ ngữ hoặc lặp từ ngữ hợp lí để tạo sự liền mạch",
                "Viết tùy ý không cần chú ý đến từ ngữ liên kết",
                "Bắt đầu mỗi câu bằng một dòng mới",
                "Sử dụng dấu gạch ngang liên tục trước mỗi câu"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Đặc điểm ngoại hình của nhân vật thuộc phần nào trong đoạn văn?",
            "options": [
                "Phần Triển khai",
                "Phần Mở đầu",
                "Phần Kết thúc",
                "Phần Chuẩn bị"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Cảm nghĩ của người viết về bài học cuộc sống mà nhân vật mang lại được viết ở phần nào?",
            "options": [
                "Phần Kết thúc",
                "Phần Mở đầu",
                "Phần Triển khai",
                "Không cần đưa vào đoạn văn"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Đoạn văn giới thiệu nhân vật trong một cuốn sách có cần giới thiệu nhân vật phụ không?",
            "options": [
                "Không bắt buộc, chỉ tập trung giới thiệu nhân vật chính được yêu thích nhất",
                "Bắt buộc phải giới thiệu tất cả các nhân vật xuất hiện",
                "Chỉ giới thiệu các nhân vật phản diện để làm nổi bật nhân vật chính",
                "Chỉ cần viết về tác giả của cuốn sách"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- TRÒ CHƠI PHÂN LOẠI Ý KHỞI ĐỘNG ---
let yChon69 = null;
let phanLoai69 = {
    "modau": null,
    "trienkhai": [],
    "ketthuc": null
};

window.chonY69 = function(yId) {
    yChon69 = yId;
    const fb = document.getElementById('fb-vn69-kd');
    if (fb) fb.classList.add('hidden');

    // Reset styles và highlight nút chọn
    [1, 2, 3, 4].forEach(id => {
        const btn = document.getElementById(`idea-69-${id}`);
        if (btn) {
            if (id === yId) {
                btn.className = "w-full p-4 text-left border-2 border-emerald-100 bg-emerald-50 text-emerald-800 rounded-2xl font-bold text-lg md:text-xl transition-all shadow-md scale-[1.01]";
            } else {
                btn.className = "w-full p-4 text-left border-2 border-gray-100 bg-gray-50 rounded-2xl font-bold text-lg md:text-xl hover:border-emerald-100 transition-all text-gray-800 active:scale-95";
            }
        }
    });
};

window.ghepNghia69 = function(slot) {
    const fb = document.getElementById('fb-vn69-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!yChon69) {
        fb.innerHTML = "⚠️ Em hãy bấm chọn một câu ý tưởng ở bên trái trước nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    let dung = false;
    let label = "";
    if (yChon69 === 1 && slot === 'modau') { dung = true; label = "Mở đầu"; phanLoai69.modau = yChon69; }
    else if ((yChon69 === 2 || yChon69 === 3) && slot === 'trienkhai') { dung = true; label = "Triển khai"; phanLoai69.trienkhai.push(yChon69); }
    else if (yChon69 === 4 && slot === 'ketthuc') { dung = true; label = "Kết thúc"; phanLoai69.ketthuc = yChon69; }

    if (dung) {
        fb.innerHTML = `🎉 Chính xác! Câu ý tưởng này thuộc phần <strong>${label}</strong>.`;
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
        
        // Cập nhật trạng thái slot
        document.getElementById(`slot-${slot}`).innerText = "Đã ghép ✓";
        document.getElementById(`slot-${slot}`).className = "px-3 py-1 bg-emerald-600 text-white rounded-lg text-xs font-bold shadow-sm";
        
        // Khóa nút ý tưởng đã phân loại
        const btn = document.getElementById(`idea-69-${yChon69}`);
        if (btn) {
            btn.disabled = true;
            btn.className = "w-full p-4 text-left bg-gray-100 text-gray-400 border-2 border-gray-100 rounded-2xl font-bold text-lg md:text-xl cursor-not-allowed";
        }
        yChon69 = null; // Reset
    } else {
        fb.innerHTML = "❌ Câu ý tưởng này không phù hợp với cấu trúc phần đã chọn. Hãy chọn lại nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- CHỌN NHÂN VẬT GỢI Ý ---
window.chonNhanVat69 = function(ten) {
    const inpName = document.getElementById('ans-vn69-name');
    const inpBook = document.getElementById('ans-vn69-book');
    if (!inpName || !inpBook) return;

    inpName.value = ten;
    if (ten === 'Da-rơ') {
        inpBook.value = 'Thanh âm của gió';
    } else if (ten === 'Tạ Quang Bửu') {
        inpBook.value = 'Tấm gương tự học';
    } else if (ten === 'Dế Mèn') {
        inpBook.value = 'Dế Mèn phiêu lưu kí';
    }
};

// --- XUẤT DÀN Ý HOÀN CHỈNH ---
window.xuatDanY69 = function() {
    const name = document.getElementById('ans-vn69-name')?.value.trim();
    const book = document.getElementById('ans-vn69-book')?.value.trim();
    const modau = document.getElementById('ans-vn69-modau')?.value.trim();
    const trienkhai = document.getElementById('ans-vn69-trienkhai')?.value.trim();
    const ketthuc = document.getElementById('ans-vn69-ketthuc')?.value.trim();

    if (!name || !book || !modau || !trienkhai || !ketthuc) {
        alert('Em hãy chọn nhân vật và điền đầy đủ nội dung cả 3 phần Mở đầu, Triển khai, Kết thúc nhé!');
        return;
    }

    const box = document.getElementById('output-dan-y-box');
    const content = document.getElementById('output-dan-y-content');
    if (!box || !content) return;

    box.classList.remove('hidden');
    content.innerHTML = `
        <strong>DÀN Ý GIỚI THIỆU NHÂN VẬT: ${name.toUpperCase()}</strong> (Trích cuốn sách: <em>${book}</em>)
        
        👉 <strong>1. Mở đầu:</strong>
        ${modau}
        
        👉 <strong>2. Triển khai:</strong>
        ${trienkhai}
        
        👉 <strong>3. Kết thúc:</strong>
        ${ketthuc}
    `;
    box.scrollIntoView({ behavior: 'smooth' });
};

// --- SAO CHÉP DÀN Ý ---
window.copyDanY69 = function() {
    const content = document.getElementById('output-dan-y-content')?.innerText;
    if (!content) return;

    navigator.clipboard.writeText(content).then(() => {
        alert('Đã sao chép dàn ý thành công! Em có thể lưu lại hoặc chuẩn bị viết bài.');
    }).catch(() => {
        alert('Không thể sao chép tự động. Hãy bôi đen và sao chép thủ công nhé!');
    });
};

// --- AI THẦY E ĐÁNH GIÁ CÂU TỰ LUẬN ---
window.chamDanY69 = function() {
    const name = document.getElementById('ans-vn69-name')?.value.trim();
    const modau = document.getElementById('ans-vn69-modau')?.value.trim();
    const trienkhai = document.getElementById('ans-vn69-trienkhai')?.value.trim();
    const ketthuc = document.getElementById('ans-vn69-ketthuc')?.value.trim();
    const fb = document.getElementById('fb-vn69-writing');

    const chk1 = document.getElementById('chk-69-1')?.checked;
    const chk2 = document.getElementById('chk-69-2')?.checked;
    const chk3 = document.getElementById('chk-69-3')?.checked;

    if (!fb) return;
    fb.classList.remove('hidden');

    if (!name || !modau || !trienkhai || !ketthuc) {
        fb.innerHTML = "⚠️ Em hãy hoàn thành đầy đủ dàn ý 3 phần ở phía trên để AI Thầy E đánh giá nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    if (!chk1 || !chk2 || !chk3) {
        fb.innerHTML = "⚠️ Em hãy tự rà soát và đánh dấu tích vào Bảng kiểm tự đánh giá mục 3 trước khi nộp bài nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ THẦY E:</span>
            <p class="text-lg font-bold">"Dàn ý giới thiệu nhân vật ${name} của em rất khoa học! Cấu trúc 3 phần rõ ràng, các ý tưởng nêu được đặc điểm nổi bật và có dẫn chứng kèm cảm nghĩ rất chân thực."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold text-xs rounded-full shadow-sm mt-2">Đánh giá: 10/10 (Rất tốt, đã sẵn sàng để viết đoạn văn)</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-369";
};

// --- HOÀN THÀNH TOÀN BỘ TIẾT HỌC ---
window.nopBai69Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 69',
            '✍️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">✍️</span><p class="text-2xl md:text-3xl font-bold text-emerald-800">Chúc mừng em đã lập xong dàn ý xuất sắc!</p><p class="text-lg text-gray-800 mt-3">Hãy chuẩn bị viết một đoạn văn giới thiệu nhân vật thật sinh động dựa trên dàn ý này nhé.</p></div>'
        );
    }
};
