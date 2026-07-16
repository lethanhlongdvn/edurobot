export const lesson30 = {
    "topic": "Tiếng Việt 5",
    "week": "5",
    "period": "30",
    "title": "LTVC: TỪ ĐỒNG NGHĨA",
    "desc": "Bài học giúp học sinh hiểu khái niệm từ đồng nghĩa, phân loại từ đồng nghĩa hoàn toàn và không hoàn toàn, đồng thời rèn luyện kĩ năng sử dụng từ đồng nghĩa phù hợp.",
    "subject": "LTVC",
    "theme": "Thế giới tuổi thơ",
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
                Hiểu thế nào là từ đồng nghĩa, phân biệt được từ đồng nghĩa hoàn toàn và từ đồng nghĩa không hoàn toàn.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Tìm được từ đồng nghĩa với các từ cho trước, biết lựa chọn từ đồng nghĩa thích hợp nhất để điền vào ngữ cảnh cụ thể.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG: GHẾP ĐÔI THÔNG THÁI -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Ghép đôi thông thái</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy ghép các cặp từ có nghĩa giống nhau hoặc gần giống nhau dưới đây:</p>
        
        <!-- Giao diện ghép từ trực quan với khung bao hỗ trợ vẽ đường nối -->
        <div id="matching-wrapper" class="relative max-w-2xl mx-auto p-4">
            <div class="grid grid-cols-2 gap-16 relative z-10">
                <!-- Cột trái -->
                <div class="space-y-4" id="match-left">
                    <button onclick="selectMatchCard(this, 'bo', 'left')" data-match="bo" class="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95">Bố</button>
                    <button onclick="selectMatchCard(this, 'hoc', 'left')" data-match="hoc" class="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95">Học tập</button>
                    <button onclick="selectMatchCard(this, 'an', 'left')" data-match="an" class="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95">Ăn</button>
                </div>
                <!-- Cột phải -->
                <div class="space-y-4" id="match-right">
                    <button onclick="selectMatchCard(this, 'an', 'right')" data-match="an" class="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95">Xơi</button>
                    <button onclick="selectMatchCard(this, 'bo', 'right')" data-match="bo" class="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95">Cha</button>
                    <button onclick="selectMatchCard(this, 'hoc', 'right')" data-match="hoc" class="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95">Học hành</button>
                </div>
            </div>
        </div>
        <div id="fb-vn30-kd" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
    </div>

    <!-- 📖 KHÁM PHÁ (BÀI TẬP 1 & GHI NHỚ) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl space-y-8">
        <div class="flex items-center gap-4 mb-2 border-b border-sky-100 pb-4">
            <span class="text-sky-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                <span>📖</span> Nhận xét bài học
            </span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Đoạn văn 1 -->
            <div class="bg-sky-50/25 p-6 rounded-3xl border border-sky-100">
                <span class="text-xs font-black text-sky-800 block mb-2">ĐOẠN VĂN A (Theo Nguyễn Kiên):</span>
                <p class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed text-justify">
                    Đàn kiến tiếp tục công việc của chúng: <strong>khuân</strong> đất, nhặt lá khô, <strong>tha</strong> mồi. Kiến bé tí tẹo nhưng rất khoẻ và hăng say. Kiến <strong>vác</strong>, kiến lôi, kiến đẩy, kiến <strong>nhắc</strong> bổng lên được một vật nặng khổng lồ. Kiến chạy tíu tít, gặp nhau đụng đầu chào, rồi lại vội vàng, tíu tít...
                </p>
            </div>
            <!-- Đoạn văn 2 -->
            <div class="bg-sky-50/25 p-6 rounded-3xl border border-sky-100">
                <span class="text-xs font-black text-sky-800 block mb-2">ĐOẠN VĂN B (Theo Hữu Vi):</span>
                <p class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed text-justify">
                    Một chú ve kéo đàn. Tiếng đàn ngân lên phá tan bầu không khí tĩnh lặng của buổi <strong>ban mai</strong>. Rồi chú thứ hai, thứ ba, thứ tư cùng hoà vào khúc tấu. Từ <strong>sáng sớm</strong>, khi mặt trời mới ló rạng, tiếng ve đã át tiếng chim.
                </p>
            </div>
        </div>

        <!-- Accordion trả lời câu hỏi phân tích -->
        <div class="space-y-4">
            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                    <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-xl md:text-2xl">
                        a. Những từ in đậm trong đoạn văn nào có nghĩa giống nhau?
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 text-xl md:text-2xl font-medium space-y-2">
                    <p>Các từ in đậm trong <strong>đoạn văn b</strong> (<em>ban mai</em>, <em>sáng sớm</em>) có nghĩa giống nhau, đều chỉ khoảng thời gian bắt đầu của một ngày.</p>
                </div>
            </details>

            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                    <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-xl md:text-2xl">
                        b. Những từ in đậm trong đoạn văn nào có nghĩa gần giống nhau? Nêu nét nghĩa khác nhau giữa chúng.
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 text-xl md:text-2xl font-medium space-y-3">
                    <p>Các từ in đậm trong <strong>đoạn văn a</strong> (<em>khuân, tha, vác, nhấc</em>) có nghĩa gần giống nhau (đều chỉ hoạt động di chuyển một vật đi nơi khác). Tuy nhiên, mỗi từ có phương thức hoạt động khác nhau:</p>
                    <ul class="list-disc list-inside space-y-2">
                        <li><strong>Nhấc</strong>: Dùng sức để đưa một vật rời khỏi vị trí mặt đất hoặc điểm tựa theo chiều thẳng đứng.</li>
                        <li><strong>Vác</strong>: Đặt vật nặng lên vai để di chuyển đi nơi khác.</li>
                        <li><strong>Khuân</strong>: Dùng cả hai tay ôm, đỡ vật nặng để chuyển đi.</li>
                        <li><strong>Tha</strong>: Ngậm bằng miệng để lôi hoặc mang đi nơi khác (hoạt động đặc trưng của loài vật như đàn kiến).</li>
                    </ul>
                </div>
            </details>
        </div>

        <!-- Khung Ghi nhớ Vàng -->
        <div class="bg-amber-50 p-6 md:p-8 rounded-[32px] border-l-8 border-amber-600 shadow-md">
            <h3 class="text-2xl md:text-3xl font-black text-amber-600 mb-3 flex items-center gap-2">
                <span>📌</span> GHI NHỚ
            </h3>
            <ul class="space-y-4 text-xl md:text-2xl text-amber-600 font-bold leading-relaxed ml-2">
                <li>
                    • <strong>Từ đồng nghĩa</strong> là những từ có nghĩa giống nhau (ví dụ: <em>bố, ba, cha,...</em>) hoặc gần giống nhau (ví dụ: <em>ăn, xơi, chén,...</em>).
                </li>
                <li>
                    • Khi viết hoặc nói, cần lựa chọn từ phù hợp nhất với ý nghĩa được thể hiện.
                </li>
            </ul>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- BÀI TẬP 2: TÌM TỪ KHÁC BIỆT -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">2</div>
                <div>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800">Trò chơi: Loại bỏ kẻ mạo danh</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Trong mỗi nhóm dưới đây, hãy nhấp chọn từ KHÔNG có nghĩa giống các từ còn lại để loại bỏ:</p>
                </div>
            </div>

            <!-- Nhóm a -->
            <div class="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm space-y-3">
                <span class="text-sm font-black text-sky-800 block">Nhóm a (Chỉ phẩm chất siêng năng):</span>
                <div class="flex flex-wrap gap-3" id="group-a">
                    <button onclick="selectOddWord(this, 'a', false)" class="px-5 py-3 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all">chăm chỉ</button>
                    <button onclick="selectOddWord(this, 'a', false)" class="px-5 py-3 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all">cần cù</button>
                    <button onclick="selectOddWord(this, 'a', true)" class="px-5 py-3 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all">sắt đá</button>
                    <button onclick="selectOddWord(this, 'a', false)" class="px-5 py-3 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all">siêng năng</button>
                    <button onclick="selectOddWord(this, 'a', false)" class="px-5 py-3 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all">chịu khó</button>
                </div>
            </div>

            <!-- Nhóm b -->
            <div class="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm space-y-3">
                <span class="text-sm font-black text-sky-800 block">Nhóm b (Chỉ lãnh thổ tổ quốc):</span>
                <div class="flex flex-wrap gap-3" id="group-b">
                    <button onclick="selectOddWord(this, 'b', false)" class="px-5 py-3 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all">non sông</button>
                    <button onclick="selectOddWord(this, 'b', false)" class="px-5 py-3 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all">đất nước</button>
                    <button onclick="selectOddWord(this, 'b', true)" class="px-5 py-3 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all">núi non</button>
                    <button onclick="selectOddWord(this, 'b', false)" class="px-5 py-3 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all">giang sơn</button>
                    <button onclick="selectOddWord(this, 'b', false)" class="px-5 py-3 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all">quốc gia</button>
                </div>
            </div>

            <!-- Nhóm c -->
            <div class="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm space-y-3">
                <span class="text-sm font-black text-sky-800 block">Nhóm c (Chỉ trạng thái bình yên):</span>
                <div class="flex flex-wrap gap-3" id="group-c">
                    <button onclick="selectOddWord(this, 'c', false)" class="px-5 py-3 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all">yên bình</button>
                    <button onclick="selectOddWord(this, 'c', false)" class="px-5 py-3 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all">tĩnh lặng</button>
                    <button onclick="selectOddWord(this, 'c', false)" class="px-5 py-3 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all">thanh bình</button>
                    <button onclick="selectOddWord(this, 'c', true)" class="px-5 py-3 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all">bình tĩnh</button>
                    <button onclick="selectOddWord(this, 'c', false)" class="px-5 py-3 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all">yên tĩnh</button>
                </div>
            </div>

            <div class="flex justify-start pt-2">
                <button onclick="checkOddWords()" class="px-8 py-3 bg-sky-600 text-white font-black rounded-xl hover:bg-sky-600 transition-all text-base shadow-md">KIỂM TRA ĐÁP ÁN ✓</button>
            </div>
            <div id="fb-vn30-odd" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2 shadow-md"></div>
        </div>
    </section>

    <!-- BÀI TẬP 3: THÀNH NGỮ CHỨA TỪ ĐỒNG NGHĨA -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
        <div class="p-6 md:p-8 bg-emerald-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">3</div>
                <div>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800 leading-snug">Những thành ngữ nào dưới đây chứa các từ đồng nghĩa? Đó là những từ nào?</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Nhấn để chọn các thành ngữ chứa từ đồng nghĩa:</p>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="idiom-grid">
                <button onclick="toggleIdiomCard(this, 'a', true)" class="p-5 border-2 border-gray-100 bg-white rounded-3xl font-bold text-xl md:text-2xl text-left hover:border-emerald-100 transition-all text-gray-800">
                    a. Chân yếu tay mềm
                </button>
                <button onclick="toggleIdiomCard(this, 'b', false)" class="p-5 border-2 border-gray-100 bg-white rounded-3xl font-bold text-xl md:text-2xl text-left hover:border-emerald-100 transition-all text-gray-800">
                    b. Thức khuya dậy sớm
                </button>
                <button onclick="toggleIdiomCard(this, 'c', false)" class="p-5 border-2 border-gray-100 bg-white rounded-3xl font-bold text-xl md:text-2xl text-left hover:border-emerald-100 transition-all text-gray-800">
                    c. Đầu voi đuôi chuột
                </button>
                <button onclick="toggleIdiomCard(this, 'd', false)" class="p-5 border-2 border-gray-100 bg-white rounded-3xl font-bold text-xl md:text-2xl text-left hover:border-emerald-100 transition-all text-gray-800">
                    d. Một nắng hai sương
                </button>
                <button onclick="toggleIdiomCard(this, 'e', true)" class="p-5 border-2 border-gray-100 bg-white rounded-3xl font-bold text-xl md:text-2xl text-left hover:border-emerald-100 transition-all text-gray-800">
                    e. Ngăn sông cấm chợ
                </button>
                <button onclick="toggleIdiomCard(this, 'g', true)" class="p-5 border-2 border-gray-100 bg-white rounded-3xl font-bold text-xl md:text-2xl text-left hover:border-emerald-100 transition-all text-gray-800">
                    g. Thay hình đổi dạng
                </button>
            </div>

            <div class="flex justify-start pt-2">
                <button onclick="checkIdiomCards()" class="px-8 py-3 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-base shadow-md">KIỂM TRA THÀNH NGỮ ✓</button>
            </div>
            <div id="fb-vn30-idiom" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2 shadow-md"></div>
        </div>
    </section>

    <!-- BÀI TẬP 4: HOÀN THIỆN ĐOẠN VĂN -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">4</div>
                <div>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800">Hoàn thiện đoạn văn</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Chọn từ thích hợp trong mỗi nhóm từ đồng nghĩa trong ngoặc để hoàn thiện đoạn văn dưới đây:</p>
                </div>
            </div>

            <div class="bg-white p-6 md:p-10 rounded-[36px] border border-amber-100 shadow-inner leading-loose text-gray-900 text-2xl md:text-3xl serif-font text-justify space-y-4">
                <p class="indent-10">
                    Tháng Ba, tháng Tư, Tây Trường Sơn 
                    <select id="vn30-select-1" class="mx-1 p-2 border-2 border-amber-100 rounded-xl font-bold bg-white text-xl md:text-2xl focus:border-amber-500 outline-none">
                        <option value="">(khai mạc / bắt đầu)</option>
                        <option value="khai_mac">khai mạc</option>
                        <option value="bat_dau">bắt đầu</option>
                    </select>
                    mùa mưa. Mưa tới đâu, cỏ lá
                    <select id="vn30-select-2" class="mx-1 p-2 border-2 border-amber-100 rounded-xl font-bold bg-white text-xl md:text-2xl focus:border-amber-500 outline-none">
                        <option value="">(tốt tươi / tươi tắn)</option>
                        <option value="tot_tuoi">tốt tươi</option>
                        <option value="tuoi_tan">tươi tắn</option>
                    </select>
                    tới đó. Phía trước bầy voi luôn luôn là những vùng đất
                    <select id="vn30-select-3" class="mx-1 p-2 border-2 border-amber-100 rounded-xl font-bold bg-white text-xl md:text-2xl focus:border-amber-500 outline-none">
                        <option value="">(no nê / no đủ)</option>
                        <option value="no_ne">no nê</option>
                        <option value="no_du">no đủ</option>
                    </select>,
                    nơi chúng có thể sống những ngày sung sướng bù lại thời gian
                    <select id="vn30-select-4" class="mx-1 p-2 border-2 border-amber-100 rounded-xl font-bold bg-white text-xl md:text-2xl focus:border-amber-500 outline-none">
                        <option value="">(đói khát / đói rách)</option>
                        <option value="doi_khat">đói khát</option>
                        <option value="doi_rach">đói rách</option>
                    </select>
                    của mùa thu. Vì thế, bầy voi cứ theo sau những cơn mưa mà đi. Đó là luật lệ của rừng.
                </p>
                <p class="text-right text-gray-800 font-bold mt-4 text-xl md:text-2xl">(Theo Vũ Hùng)</p>
            </div>

            <div class="flex justify-start pt-2">
                <button onclick="checkParagraphSelects()" class="px-8 py-3 bg-amber-500 text-white font-black rounded-xl hover:bg-amber-500 transition-all text-base shadow-md">KIỂM TRA ĐOẠN VĂN ✓</button>
            </div>
            <div id="fb-vn30-para" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2 shadow-md"></div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TOÀN BỘ -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn30Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Thế nào là từ đồng nghĩa theo đúng định nghĩa trong sách giáo khoa?",
            "options": [
                "Là những từ có cách phát âm giống nhau nhưng nghĩa khác xa nhau",
                "Là những từ có nghĩa giống nhau hoặc gần giống nhau",
                "Là những từ có cấu tạo từ giống nhau nhưng biểu thị hành động trái ngược",
                "Là những từ dùng để liên kết câu trong đoạn văn"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Nhóm từ nào dưới đây là các từ đồng nghĩa hoàn toàn (có thể thay thế cho nhau trong mọi trường hợp)?",
            "options": [
                "ăn, xơi, chén",
                "quả, trái",
                "yếu, mềm",
                "mang, khiêng, vác"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ nào không cùng nhóm đồng nghĩa trong các từ sau: chăm chỉ, cần cù, sắt đá, siêng năng, chịu khó?",
            "options": [
                "chăm chỉ",
                "cần cù",
                "sắt đá",
                "siêng năng"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Nhóm từ nào đồng nghĩa chỉ lãnh thổ của đất nước tổ quốc?",
            "options": [
                "núi non, sông ngòi, biển cả",
                "non sông, đất nước, giang sơn, quốc gia",
                "đường sá, cầu cống, đồi đèo",
                "làng quê, bản thôn, xóm nhỏ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ nào KHÔNG đồng nghĩa với nhóm từ: yên bình, thanh bình, tĩnh lặng, yên tĩnh?",
            "options": [
                "yên tĩnh",
                "tĩnh lặng",
                "bình tĩnh",
                "thanh bình"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Cặp từ nào dưới đây là từ đồng nghĩa không hoàn toàn (khi sử dụng cần cân nhắc sắc thái nghĩa)?",
            "options": [
                "hổ, cọp",
                "vác, khiêng",
                "máy bay, phi cơ",
                "đen sì, đen kịt"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Thành ngữ nào dưới đây có chứa các cặp từ đồng nghĩa?",
            "options": [
                "Thức khuya dậy sớm",
                "Chân yếu tay mềm",
                "Một nắng hai sương",
                "Đầu voi đuôi chuột"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong thành ngữ 'Thay hình đổi dạng', các cặp từ đồng nghĩa nào xuất hiện?",
            "options": [
                "Thay - đổi, hình - dạng",
                "Thay - hình, đổi - dạng",
                "Chỉ có cặp hình - dạng",
                "Chỉ có cặp thay - đổi"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Trong câu văn tả đàn kiến: 'Kiến nhắc bổng lên được một vật nặng khổng lồ', từ 'nhắc' mang nét nghĩa gì?",
            "options": [
                "Đặt vật nặng lên trên vai để chuyển đi nơi khác",
                "Làm cho vật nặng rời khỏi vị trí ban đầu theo chiều thẳng đứng",
                "Dùng cả hai tay ôm đỡ vật nặng di chuyển",
                "Ngậm vật bằng miệng lôi đi"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Chọn từ đồng nghĩa thích hợp để hoàn thiện câu sau: 'Mùa xuân về, cỏ cây hoa lá phát triển...'",
            "options": [
                "tươi tắn",
                "tốt tươi",
                "héo hon",
                "khô cằn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Chọn từ thích hợp điền vào chỗ trống: 'Nhà trường chuẩn bị tổ chức lễ... năm học mới.'",
            "options": [
                "bắt đầu",
                "khai mạc",
                "ra đời",
                "mở rộng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ nào đồng nghĩa với từ 'ban mai'?",
            "options": [
                "hoàng hôn",
                "sáng sớm",
                "đêm khuya",
                "trưa nắng"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Thành ngữ 'Ngăn sông cấm chợ' chứa cặp từ đồng nghĩa nào?",
            "options": [
                "sông - chợ",
                "ngăn - cấm",
                "ngăn - sông",
                "cấm - chợ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Chọn từ đồng nghĩa chỉ tình trạng thiếu ăn thiếu mặc kéo dài:",
            "options": [
                "đói khát",
                "đói rách",
                "đói khổ",
                "đói nghèo"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tại sao chúng ta phải lựa chọn từ đồng nghĩa cẩn thận khi nói hoặc viết?",
            "options": [
                "Vì từ đồng nghĩa có cách phát âm rất khó nghe",
                "Vì các từ đồng nghĩa không hoàn toàn mang sắc thái biểu cảm khác nhau",
                "Để bài văn dài và nhiều chữ hơn",
                "Vì từ đồng nghĩa luôn có cấu tạo từ rất phức tạp"
            ],
            "answer": 1,
            "level": 2
        }
    ]
};

// --- CHỌN BÀI TẬP KHỞI ĐỘNG GHẾP TỪ VN30 ---
let activeLeftCard = null;
let activeRightCard = null;
let matchedCount = 0;

window.selectMatchCard = function(btn, matchId, side) {
    if (side === 'left') {
        // Hủy chọn thẻ cũ
        if (activeLeftCard) {
            activeLeftCard.classList.remove('border-sky-100', 'bg-sky-50', 'text-sky-800');
        }
        activeLeftCard = btn;
        btn.classList.add('border-sky-100', 'bg-sky-50', 'text-sky-800');
    } else {
        if (activeRightCard) {
            activeRightCard.classList.remove('border-sky-100', 'bg-sky-50', 'text-sky-800');
        }
        activeRightCard = btn;
        btn.classList.add('border-sky-100', 'bg-sky-50', 'text-sky-800');
    }

    // Kiểm tra ghép cặp
    if (activeLeftCard && activeRightCard) {
        const leftId = activeLeftCard.dataset.match;
        const rightId = activeRightCard.dataset.match;
        const fb = document.getElementById('fb-vn30-kd');
        if (!fb) return;
        fb.classList.remove('hidden');

        if (leftId === rightId) {
            // Vẽ đường nối màu xanh lá cây
            drawMatchingLine(activeLeftCard, activeRightCard, '#10B930');

            // Khớp thành công
            activeLeftCard.className = "w-full p-4 border-2 border-emerald-100 bg-emerald-50 text-emerald-800 rounded-2xl font-black text-xl cursor-not-allowed relative z-10";
            activeRightCard.className = "w-full p-4 border-2 border-emerald-100 bg-emerald-50 text-emerald-800 rounded-2xl font-black text-xl cursor-not-allowed relative z-10";
            activeLeftCard.disabled = true;
            activeRightCard.disabled = true;
            activeLeftCard = null;
            activeRightCard = null;
            matchedCount++;

            if (matchedCount === 3) {
                fb.innerHTML = "🎉 Tuyệt vời! Em đã ghép đúng tất cả các cặp từ đồng nghĩa khởi động!";
                fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
            } else {
                fb.innerHTML = "🎉 Cặp từ đồng nghĩa chính xác!";
                fb.className = "p-2 rounded-xl text-sm font-bold text-center bg-emerald-600 text-emerald-800 mt-2";
            }
        } else {
            // Vẽ đường nối tạm thời màu đỏ báo sai
            const tempLine = drawMatchingLine(activeLeftCard, activeRightCard, '#EF4430');

            // Không khớp
            fb.innerHTML = "⚠️ Cặp từ này chưa đồng nghĩa. Thử lại nhé!";
            fb.className = "p-2 rounded-xl text-sm font-bold text-center bg-rose-600 text-rose-800 mt-2 animate-bounce";
            
            // Hủy chọn sau 830ms
            const cardLeft = activeLeftCard;
            const cardRight = activeRightCard;
            activeLeftCard = null;
            activeRightCard = null;

            setTimeout(() => {
                cardLeft.classList.remove('border-sky-100', 'bg-sky-50', 'text-sky-800');
                cardRight.classList.remove('border-sky-100', 'bg-sky-50', 'text-sky-800');
                if (tempLine) tempLine.remove();
            }, 830);
        }
    }
};

window.drawMatchingLine = function(el1, el2, color) {
    let container = document.getElementById('matching-svg-container');
    const wrapper = document.getElementById('matching-wrapper');
    if (!wrapper) return null;
    
    if (!container) {
        container = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        container.setAttribute('id', 'matching-svg-container');
        container.style.position = 'absolute';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '130%';
        container.style.height = '130%';
        container.style.pointerEvents = 'none';
        container.style.zIndex = '0';
        wrapper.appendChild(container);
    }
    
    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();
    
    // Tọa độ điểm xuất phát (bên phải của nút cột trái)
    const x1 = rect1.left + rect1.width - wrapperRect.left;
    const y1 = rect1.top + rect1.height / 2 - wrapperRect.top;
    
    // Tọa độ điểm đích (bên trái của nút cột phải)
    const x2 = rect2.left - wrapperRect.left;
    const y2 = rect2.top + rect2.height / 2 - wrapperRect.top;
    
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width', '4');
    line.setAttribute('stroke-dasharray', '8,4');
    line.setAttribute('class', 'animate-in fade-in duration-330');
    
    container.appendChild(line);
    return line;
};

// --- CHỌN TỪ KHÁC BIỆT (BÀI TẬP 2) ---
let selectedOddA = null;
let selectedOddB = null;
let selectedOddC = null;

window.selectOddWord = function(btn, group, isOdd) {
    const parent = btn.parentElement;
    const buttons = parent.querySelectorAll('button');
    buttons.forEach(b => {
        b.classList.remove('bg-rose-600', 'text-white', 'border-rose-100', 'bg-emerald-600', 'border-emerald-100');
    });

    // Toggle trạng thái chọn
    btn.classList.add('bg-rose-600', 'text-white', 'border-rose-100');

    if (group === 'a') {
        selectedOddA = { btn, isOdd };
    } else if (group === 'b') {
        selectedOddB = { btn, isOdd };
    } else if (group === 'c') {
        selectedOddC = { btn, isOdd };
    }
};

window.checkOddWords = function() {
    const fb = document.getElementById('fb-vn30-odd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!selectedOddA || !selectedOddB || !selectedOddC) {
        fb.innerHTML = "⚠️ Em hãy tìm và nhấp chọn từ khác biệt trong cả 3 nhóm nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2";
        return;
    }

    const dung = selectedOddA.isOdd && selectedOddB.isOdd && selectedOddC.isOdd;

    if (dung) {
        fb.innerHTML = "🎉 Xuất sắc! Em đã tìm đúng 3 từ mạo danh không cùng nhóm nghĩa: 'sắt đá' (phẩm chất kiên quyết), 'núi non' (danh từ chỉ địa hình núi) và 'bình tĩnh' (trạng thái làm chủ cảm xúc).";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
        selectedOddA.btn.className = "px-5 py-3 border-2 border-emerald-100 bg-emerald-600 text-white rounded-2xl font-bold text-lg cursor-not-allowed";
        selectedOddB.btn.className = "px-5 py-3 border-2 border-emerald-100 bg-emerald-600 text-white rounded-2xl font-bold text-lg cursor-not-allowed";
        selectedOddC.btn.className = "px-5 py-3 border-2 border-emerald-100 bg-emerald-600 text-white rounded-2xl font-bold text-lg cursor-not-allowed";
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác hoàn toàn. Hãy xem xét lại các từ và nhấp chọn lại từ mạo danh nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- CHỌN THÀNH NGỮ ĐỒNG NGHĨA (BÀI TẬP 3) ---
let selectedIdioms = [];
window.toggleIdiomCard = function(btn, id, isCorrect) {
    btn.classList.toggle('bg-emerald-600');
    btn.classList.toggle('text-white');
    btn.classList.toggle('border-emerald-100');
    btn.classList.toggle('bg-white');
    btn.classList.toggle('text-gray-800');
    btn.classList.toggle('border-gray-100');

    const idx = selectedIdioms.findIndex(c => c.id === id);
    if (idx > -1) {
        selectedIdioms.splice(idx, 1);
    } else {
        selectedIdioms.push({ id, isCorrect, btn });
    }
};

window.checkIdiomCards = function() {
    const fb = document.getElementById('fb-vn30-idiom');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (selectedIdioms.length === 0) {
        fb.innerHTML = "⚠️ Em hãy chọn các thành ngữ trước khi kiểm tra nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base text-center bg-amber-500 text-white mt-2";
        return;
    }

    // Các thành ngữ chứa từ đồng nghĩa đúng là: a, e, g.
    const incorrect = selectedIdioms.filter(i => !i.isCorrect);
    const correct = selectedIdioms.filter(i => i.isCorrect);

    if (correct.length === 3 && incorrect.length === 0) {
        fb.innerHTML = "🎉 Chính xác hoàn toàn! Cả 3 thành ngữ a, e, g đều chứa các từ đồng nghĩa (yếu - mềm, ngăn - cấm, thay - đổi, hình - dạng).";
        fb.className = "p-4 rounded-xl font-bold text-base text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = `⚠️ Chưa chính xác. Em đã chọn đúng ${correct.length}/3 thành ngữ chứa từ đồng nghĩa và chọn nhầm ${incorrect.length} thành ngữ. Hãy thử chọn lại nhé!`;
        fb.className = "p-4 rounded-xl font-bold text-base text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- KIỂM TRA ĐOẠN VĂN ĐIỀN TỪ (BÀI TẬP 4) ---
window.checkParagraphSelects = function() {
    const val1 = document.getElementById('vn30-select-1')?.value;
    const val2 = document.getElementById('vn30-select-2')?.value;
    const val3 = document.getElementById('vn30-select-3')?.value;
    const val4 = document.getElementById('vn30-select-4')?.value;
    const fb = document.getElementById('fb-vn30-para');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!val1 || !val2 || !val3 || !val4) {
        fb.innerHTML = "⚠️ Em hãy chọn từ thích hợp cho tất cả 4 vị trí trong đoạn văn nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base text-center bg-amber-500 text-white mt-2";
        return;
    }

    // Các đáp án đúng:
    // (1) bắt đầu (bat_dau)
    // (2) tốt tươi (tot_tuoi)
    // (3) no nê (no_ne)
    // (4) đói khát (doi_khat)
    const dung = val1 === 'bat_dau' && val2 === 'tot_tuoi' && val3 === 'no_ne' && val4 === 'doi_khat';

    if (dung) {
        fb.innerHTML = "🎉 Hoàn toàn chính xác! Em đã điền đúng cả 4 từ đồng nghĩa phù hợp nhất với ngữ cảnh của đoạn văn miêu tả bầy voi Tây Trường Sơn.";
        fb.className = "p-4 rounded-xl font-bold text-base text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác. Một số từ em chọn chưa phù hợp với văn cảnh. Hãy đọc kĩ lại đoạn văn để chọn từ chuẩn xác hơn nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.submitVn30Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 30',
            '✍️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">📝</span><p class="text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài học LTVC: Từ đồng nghĩa!</p><p class="text-lg text-gray-800 mt-3">Hãy áp dụng linh hoạt kiến thức về từ đồng nghĩa để viết những đoạn văn sinh động, giàu hình ảnh hơn nhé.</p></div>'
        );
    }
};
