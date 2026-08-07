export const lesson43 = {
    "topic": "Tiếng Việt 5",
    "week": "7",
    "period": "43",
    "title": "ĐỌC: MẦM NON",
    "desc": "Bài học giúp học sinh đọc diễn cảm bài thơ 'Mầm Non'; cảm nhận được vẻ đẹp của thiên nhiên khi mùa đông chuyển sang mùa xuân qua những hình ảnh thơ sinh động và tinh tế.",
    "subject": "Đọc",
    "theme": "Măng non",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-sky-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                <span>Đọc trôi chảy, diễn cảm bài thơ <em>Mầm Non</em> với giọng nhẹ nhàng, tha thiết.</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                <span>Cảm nhận được vẻ đẹp tinh tế của thiên nhiên khi mùa đông chuyển sang mùa xuân qua hình ảnh mầm non nhỏ bé.</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                <span>Nêu được sự thay đổi của thời tiết, cỏ cây khi các mùa giao thoa với nhau.</span>
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động: Sự thay đổi của thiên nhiên</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy nêu sự thay đổi của thời tiết, cỏ cây,... khi mùa đông chuyển sang mùa xuân hoặc mùa khô chuyển sang mùa mưa. Chọn những thay đổi đúng:</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-base md:text-lg">
            <button onclick="checkKdVn43(this, true, 'A')" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl text-left transition-all active:scale-95 text-gray-800">
                🌿 A. Cây cối đâm chồi nảy lộc, mầm non nhú ra
            </button>
            <button onclick="checkKdVn43(this, true, 'B')" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl text-left transition-all active:scale-95 text-gray-800">
                🌧️ B. Mưa xuân lất phất, trời ấm áp dần lên
            </button>
            <button onclick="checkKdVn43(this, false, 'C')" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl text-left transition-all active:scale-95 text-gray-800">
                ❄️ C. Tuyết rơi dày hơn, lạnh giá hơn mùa đông
            </button>
            <button onclick="checkKdVn43(this, true, 'D')" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl text-left transition-all active:scale-95 text-gray-800">
                🍂 D. Lá vàng rụng, nhường chỗ cho lá non xanh mới
            </button>
        </div>
        <div id="fb-vn43-kd" class="hidden p-4 rounded-xl text-center text-lg font-black bg-sky-50 text-sky-800 border border-sky-100 transition-all"></div>
    </div>

    <!-- 📖 VĂN BẢN ĐỌC -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl space-y-8">
        <div class="flex items-center justify-between border-b border-sky-100 pb-4">
            <span class="text-sky-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                <span>📖</span> Bài thơ học tập
            </span>
            <button onclick="window.playSegmentAudio && window.playSegmentAudio('assets/audio/tiengviet/43/tiet43_mam_non.mp3')" class="px-4 py-2 bg-sky-600 hover:bg-sky-600 text-sky-800 rounded-xl font-bold flex items-center gap-2 transition-all active:scale-95 text-lg">
                🔊 Nghe đọc mẫu
            </button>
        </div>

        <!-- Bài thơ + SVG minh họa -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <!-- Bài thơ -->
            <div class="bg-sky-50/10 p-6 md:p-8 rounded-3xl border border-sky-100 space-y-6">
                <h4 class="text-2xl md:text-5xl font-black text-center text-sky-800">MẦM NON</h4>
                <!-- 👁️ Bảng điều khiển che chữ để học thuộc lòng -->
                <div class="flex flex-wrap items-center justify-center gap-2 bg-sky-50/70 p-3 rounded-2xl border border-sky-100 shadow-sm">
                    <span class="text-xs font-black text-sky-900 uppercase mr-1">👁️ Học thuộc lòng:</span>
                    <button onclick="setCheChuVn43('none')" class="px-3 py-1 bg-white hover:bg-sky-50 text-sky-800 font-bold border border-sky-200 rounded-lg text-xs transition-all shadow-sm active:scale-95">Hiện hết</button>
                    <button onclick="setCheChuVn43('low')" class="px-3 py-1 bg-white hover:bg-amber-50 text-amber-600 font-bold border border-amber-200 rounded-lg text-xs transition-all shadow-sm active:scale-95">Che ít</button>
                    <button onclick="setCheChuVn43('high')" class="px-3 py-1 bg-white hover:bg-rose-50 text-rose-600 font-bold border border-rose-200 rounded-lg text-xs transition-all shadow-sm active:scale-95">Che nhiều</button>
                    <button onclick="setCheChuVn43('all')" class="px-3 py-1 bg-white hover:bg-slate-100 text-slate-700 font-bold border border-slate-300 rounded-lg text-xs transition-all shadow-sm active:scale-95">Che hết</button>
                </div>
                <div id="fb-vn43-htl" class="hidden text-xs font-bold text-center p-2 rounded-xl bg-sky-50 text-sky-800 border border-sky-100"></div>
                <div id="vn43-poem-text" class="text-gray-800 text-xl md:text-2xl leading-loose space-y-4 font-serif">
                    <div class="space-y-1 cursor-pointer hover:bg-sky-50/50 p-3 rounded-2xl transition-all" onclick="docKhoVn43(1)">
                        <p>Dưới vỏ một cành bàng</p>
                        <p>Còn một vài lá đỏ</p>
                        <p>Một mầm non nho nhỏ</p>
                        <p>Còn nằm nép lặng im...</p>
                    </div>
                    <div class="space-y-1 cursor-pointer hover:bg-emerald-50/50 p-3 rounded-2xl transition-all" onclick="docKhoVn43(2)">
                        <p>Mầm non mắt lim dim</p>
                        <p>Cố nhìn qua kẽ lá</p>
                        <p>Thấy mây bay hối hả</p>
                        <p>Thấy lất phất mưa phùn.</p>
                        <p>Rào rào trận lá tuôn</p>
                        <p>Rải vàng đầy mặt đất</p>
                        <p>Rừng cây trông thưa thớt</p>
                        <p>Thấy chỉ cọi với cành.</p>
                        <p>Một chú thỏ phóng nhanh</p>
                        <p>Chạy nấp vào bụi vắng.</p>
                        <p>Và tất cả im ắng</p>
                        <p>Từ ngọn cỏ làn rêu...</p>
                    </div>
                    <div class="space-y-1 cursor-pointer hover:bg-amber-50/50 p-3 rounded-2xl transition-all" onclick="docKhoVn43(3)">
                        <p>Chợt một tiếng chim kêu:</p>
                        <p>– Chíp chiu chiu! Xuân đến.</p>
                        <p>Tức thì trăm ngọn suối</p>
                        <p>Nổi róc rách reo mừng,</p>
                        <p>Tức thì ngàn chim muông</p>
                        <p>Nổi hát ca vang dậy.</p>
                    </div>
                    <div class="space-y-1 cursor-pointer hover:bg-sky-100/50 p-3 rounded-2xl transition-all" onclick="docKhoVn43(4)">
                        <p>Mầm non vừa nghe thấy</p>
                        <p>Vội bật chiếc vỏ rơi</p>
                        <p>Nó đứng dậy giữa trời</p>
                        <p>Khoác áo màu xanh biếc.</p>
                    </div>
                    <p class="text-right text-sm font-semibold text-gray-800 italic mt-2">(Võ Quảng)</p>
                </div>
                <div id="fb-vn43-kho" class="hidden p-4 rounded-2xl text-base font-bold text-sky-800 bg-sky-50 border border-sky-100 transition-all"></div>
            </div>

            <!-- Minh họa thật phóng to ở cột bên phải -->
            <div class="flex flex-col items-center gap-4 w-full">
                <div onclick="window.showMathFeedback('Mầm Non', '🌱', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/43/43.png&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Mầm Non&quot;&gt;&lt;p class=&quot;text-2xl font-bold text-emerald-800 mt-4&quot;&gt;Sức sống của mầm non đâm chồi nảy lộc đón mùa xuân sang.&lt;/p&gt;&lt;/div&gt;')" class="w-full bg-gradient-to-br from-emerald-50 to-green-50 rounded-[32px] border-4 border-white shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group">
                    <img src="assets/images/tiengviet_5_1/43/43.png" class="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500" alt="Mầm Non">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Bấm để phóng to 🔍</div>
                </div>
                <p class="text-sm font-bold text-gray-800 text-center italic">🎨 Cảnh cây bàng mùa đông và mầm non đang chờ xuân về</p>
            </div>
        </div>

    </div>

    <!-- 💡 Ý nghĩa / Thông điệp bài học -->
    <div class="p-8 rounded-[36px] bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-xl relative overflow-hidden mt-6">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <h4 class="text-xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
            <span>💡</span> Nội dung chính bài học
        </h4>
        <div class="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p class="text-xl md:text-4xl font-bold leading-relaxed text-center italic">
                "Bài thơ ca ngợi vẻ đẹp sinh động, tinh tế của thiên nhiên vào lúc chuyển mùa từ đông sang xuân qua hình ảnh chiếc mầm non nhỏ bé nhẫn nại, tràn đầy sức sống tiềm tàng."
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎵 BÀI TẬP 1: LUYỆN ĐỌC DIỄN CẢM -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">1</div>
            <div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Luyện đọc diễn cảm</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Em hãy nhấp vào từng khổ thơ để xem gợi ý giọng đọc, sau đó thực hành đọc diễn cảm:</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Khổ 1 -->
            <div onclick="xemGoiYDocVn43('kho1')" class="p-5 bg-sky-50/40 hover:bg-sky-100/60 border border-sky-100 rounded-3xl cursor-pointer transition-all shadow-sm space-y-2">
                <h4 class="font-black text-sky-800 text-base md:text-lg">🎵 Khổ 1</h4>
                <p class="text-gray-800 font-semibold text-xs italic">"Dưới vỏ một cành bàng..."</p>
                <div id="kho1" class="hidden p-3 bg-white rounded-2xl border border-sky-100 text-xs font-bold text-sky-800 space-y-1 mt-1">
                    <p>🎙️ <strong>Nhẹ nhàng, khẽ khàng</strong> như thì thầm</p>
                    <p>⏱️ Nhịp chậm, ngắt nhẹ sau dấu ...</p>
                    <p>💡 Nhấn: <em>nho nhỏ, lặng im</em></p>
                </div>
            </div>
            <!-- Khổ 2 -->
            <div onclick="xemGoiYDocVn43('kho2')" class="p-5 bg-emerald-50/40 hover:bg-emerald-100/60 border border-emerald-100 rounded-3xl cursor-pointer transition-all shadow-sm space-y-2">
                <h4 class="font-black text-emerald-800 text-base md:text-lg">🎵 Khổ 2</h4>
                <p class="text-gray-800 font-semibold text-xs italic">"Mầm non mắt lim dim..."</p>
                <div id="kho2" class="hidden p-3 bg-white rounded-2xl border border-emerald-100 text-xs font-bold text-emerald-800 space-y-1 mt-1">
                    <p>🎙️ <strong>Tò mò, quan sát</strong> từng chi tiết</p>
                    <p>⏱️ Nhịp vừa, diễn cảm từng hình ảnh</p>
                    <p>💡 Nhấn: <em>hối hả, rào rào, im ắng</em></p>
                </div>
            </div>
            <!-- Khổ 3 -->
            <div onclick="xemGoiYDocVn43('kho3')" class="p-5 bg-amber-50/40 hover:bg-amber-100/60 border border-amber-100 rounded-3xl cursor-pointer transition-all shadow-sm space-y-2">
                <h4 class="font-black text-amber-600 text-base md:text-lg">🎵 Khổ 3</h4>
                <p class="text-gray-800 font-semibold text-xs italic">"Chợt một tiếng chim kêu..."</p>
                <div id="kho3" class="hidden p-3 bg-white rounded-2xl border border-amber-100 text-xs font-bold text-amber-600 space-y-1 mt-1">
                    <p>🎙️ <strong>Vui tươi, rộn ràng</strong> – xuân đến!</p>
                    <p>⏱️ Nhịp nhanh, rộn rã, tươi vui</p>
                    <p>💡 Nhấn: <em>Chíp chiu chiu!, reo mừng, vang dậy</em></p>
                </div>
            </div>
            <!-- Khổ 4 -->
            <div onclick="xemGoiYDocVn43('kho4')" class="p-5 bg-sky-100/40 hover:bg-sky-100/60 border border-sky-100 rounded-3xl cursor-pointer transition-all shadow-sm space-y-2">
                <h4 class="font-black text-sky-800 text-base md:text-lg">🎵 Khổ 4</h4>
                <p class="text-gray-800 font-semibold text-xs italic">"Mầm non vừa nghe thấy..."</p>
                <div id="kho4" class="hidden p-3 bg-white rounded-2xl border border-sky-100 text-xs font-bold text-sky-800 space-y-1 mt-1">
                    <p>🎙️ <strong>Mạnh mẽ, kiêu hãnh</strong> – bùng nở!</p>
                    <p>⏱️ Nhịp dứt khoát, tự hào</p>
                    <p>💡 Nhấn: <em>vội bật, đứng dậy, xanh biếc</em></p>
                </div>
            </div>
        </div>
            <!-- Khổ 1 -->
            <div onclick="xemGoiYDocVn43('kho1')" class="p-6 bg-sky-50/40 hover:bg-sky-100/60 border border-sky-100 rounded-3xl cursor-pointer transition-all shadow-sm space-y-3">
                <h4 class="font-black text-sky-800 text-lg md:text-xl">🎵 Khổ 1:</h4>
                <div class="text-gray-800 font-semibold text-base leading-loose italic">
                    <p>"Dưới vỏ một cành bàng / Còn một vài lá đỏ / Một mầm non nho nhỏ / Còn nằm nép lặng im..."</p>
                </div>
                <div id="kho1" class="hidden p-4 bg-white rounded-2xl border border-sky-100 text-sm font-bold text-sky-800 space-y-1 mt-2">
                    <p>🎙️ Giọng đọc: <strong>nhẹ nhàng, khẽ khàng</strong>, như đang thì thầm</p>
                    <p>⏱️ Nhịp: <strong>chậm rãi</strong>, ngắt nhẹ sau dấu ba chấm</p>
                    <p>💡 Nhấn giọng vào: <em>nho nhỏ</em>, <em>lặng im</em></p>
                </div>
            </div>

            <!-- Khổ 2 -->
            <div onclick="xemGoiYDocVn43('kho2')" class="p-6 bg-emerald-50/40 hover:bg-emerald-100/60 border border-emerald-100 rounded-3xl cursor-pointer transition-all shadow-sm space-y-3">
                <h4 class="font-black text-emerald-800 text-lg md:text-xl">🎵 Khổ 2:</h4>
                <div class="text-gray-800 font-semibold text-base leading-loose italic">
                    <p>"Mầm non mắt lim dim / Cố nhìn qua kẽ lá / Thấy mây bay hối hả / Thấy lất phất mưa phùn..."</p>
                </div>
                <div id="kho2" class="hidden p-4 bg-white rounded-2xl border border-emerald-100 text-sm font-bold text-emerald-800 space-y-1 mt-2">
                    <p>🎙️ Giọng đọc: <strong>tò mò, háo hức</strong>, như đang khám phá</p>
                    <p>⏱️ Nhịp: <strong>nhanh hơn chút</strong>, thể hiện sự vận động của thế giới bên ngoài</p>
                    <p>💡 Nhấn giọng vào: <em>hối hả</em>, <em>rào rào</em>, <em>im ắng</em></p>
                </div>
            </div>
        </div>

        <!-- Thực hành đọc thuộc lòng -->
        <div class="bg-sky-50/20 p-6 rounded-3xl border border-sky-100 space-y-4">
            <h4 class="font-black text-sky-800 text-lg md:text-xl">✍️ Thực hành: Chép lại một đoạn thơ em thích nhất</h4>
            <p class="font-bold text-gray-800 text-sm">Chép lại ít nhất 4 câu thơ trong bài và nêu lí do em yêu thích đoạn đó:</p>
            <textarea id="ans-vn43-writing" rows="5" placeholder="Ví dụ: Em thích khổ đầu: 'Dưới vỏ một cành bàng / Còn một vài lá đỏ / Một mầm non nho nhỏ / Còn nằm nép lặng im...' vì hình ảnh mầm non nho nhỏ nằm nép lặng im thật đáng yêu và gợi lên sức sống tiềm ẩn..." class="w-full p-4 border border-gray-100 rounded-2xl bg-white text-xl md:text-2xl font-semibold focus:border-sky-500 outline-none shadow-sm"></textarea>
            <div class="flex justify-end items-center gap-4"><button onclick="resetWritingVn43()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="checkWritingVn43();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn43-chep" class="hidden p-5 rounded-2xl text-base font-bold shadow-md transition-all duration-343"></div>
        </div>
    </section>

    <!-- 📖 BÀI TẬP 2: CÂU HỎI TÌM HIỂU BÀI (5 câu SGK chuẩn) -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">2</div>
            <div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Câu hỏi tìm hiểu bài</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Trả lời các câu hỏi trong sách giáo khoa để tìm hiểu nội dung bài thơ:</p>
            </div>
        </div>

        <div class="space-y-4 mt-6">
            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm hover:shadow-md overflow-hidden transition-all">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                        1. Trong 2 khổ thơ đầu, mầm non được miêu tả như thế nào? Cách miêu tả đó có gì thú vị?
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-bold space-y-2 text-lg md:text-3xl">
                    <p>✔️ <strong>Miêu tả:</strong> Mầm non nhỏ bé, lặng lẽ ẩn mình dưới vỏ cành bàng: <em>"nho nhỏ", "nằm nép lặng im"</em>. Sau đó được miêu tả như đang tỉnh giấc: <em>"mắt lim dim", "cố nhìn qua kẽ lá"</em>.</p>
                    <p>✔️ <strong>Điều thú vị:</strong> Tác giả dùng <strong>biện pháp nhân hóa</strong> – gán cho mầm non những hành động của con người (mắt lim dim, cố nhìn, thấy...). Nhờ đó, mầm non trở nên sống động, có cảm xúc và nội tâm, gợi cảm giác thân thương gần gũi.</p>
                </div>
            </details>

            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm hover:shadow-md overflow-hidden transition-all">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                        2. Cảnh vật mùa đông hiện ra như thế nào qua cảm nhận của mầm non?
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-bold space-y-3 text-lg md:text-3xl">
                    <p>✔️ Cảnh mùa đông hiện ra qua 3 hình ảnh:</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="p-4 bg-sky-50/50 rounded-2xl border border-sky-100 text-center space-y-2">
                            <span class="text-2xl md:text-3xl block">☁️</span>
                            <p class="font-black text-sky-800">Mây</p>
                            <p class="text-base font-bold text-gray-800">Bay hối hả – bầu trời vội vã, u ám</p>
                        </div>
                        <div class="p-4 bg-sky-50/50 rounded-2xl border border-sky-100 text-center space-y-2">
                            <span class="text-2xl md:text-3xl block">🌧️</span>
                            <p class="font-black text-sky-800">Mưa</p>
                            <p class="text-base font-bold text-gray-800">Phùn lất phất – mưa nhỏ mịn đặc trưng mùa đông</p>
                        </div>
                        <div class="p-4 bg-sky-50/50 rounded-2xl border border-sky-100 text-center space-y-2">
                            <span class="text-2xl md:text-3xl block">🍂</span>
                            <p class="font-black text-sky-800">Lá cây</p>
                            <p class="text-base font-bold text-gray-800">Rào rào tuôn rụng, rải vàng mặt đất; rừng thưa thớt trơ cành</p>
                        </div>
                    </div>
                    <p class="text-base font-bold text-gray-800 mt-2">➡️ Thêm: một chú thỏ phóng nhanh vào bụi vắng và tất cả im ắng từ ngọn cỏ làn rêu – cảnh mùa đông tĩnh lặng, hiu quạnh.</p>
                </div>
            </details>

            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm hover:shadow-md overflow-hidden transition-all">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                        3. Nhờ đâu mầm non nhận ra mùa xuân đến?
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-bold space-y-2 text-lg md:text-3xl">
                    <p>✔️ Mầm non nhận ra mùa xuân đến nhờ <strong>tiếng chim kêu</strong>: <em>"Chợt một tiếng chim kêu: / – Chíp chiu chiu! Xuân đến."</em></p>
                    <p>✔️ Tiếng chim như một tín hiệu kỳ diệu làm thức tỉnh cả thiên nhiên: trăm ngọn suối nổi róc rách reo mừng, ngàn chim muông nổi hát ca vang dậy.</p>
                    <p>✔️ Nghe thấy tiếng xuân đến, mầm non <strong>vội bật chiếc vỏ rơi</strong> và đứng dậy giữa trời khoác áo màu xanh biếc.</p>
                </div>
            </details>

            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm hover:shadow-md overflow-hidden transition-all">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                        4. Nêu nhận xét của em về hình ảnh mầm non trong khổ thơ cuối.
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-bold space-y-2 text-lg md:text-3xl">
                    <p>✔️ Ở khổ thơ cuối, mầm non <strong>không còn nằm nép lặng im</strong> mà bật dậy mạnh mẽ, tràn đầy sức sống.</p>
                    <p>✔️ Hình ảnh <em>"Vội bật chiếc vỏ rơi / Nó đứng dậy giữa trời / Khoác áo màu xanh biếc"</em> thể hiện sức sống mãnh liệt, rực rỡ bùng phát trong chớp mắt.</p>
                    <p>✔️ <strong>Nhận xét:</strong> Đây là hình ảnh đẹp, đầy cảm hứng – mầm non như một chiến binh nhỏ vươn lên kiêu hãnh sau mùa đông dài im lặng. Màu xanh biếc của chiếc áo tượng trưng cho sức sống tươi mới của mùa xuân.</p>
                </div>
            </details>
        </div>

        <!-- Câu hỏi 5 tương tác -->
        <div class="p-6 bg-sky-50/50 rounded-3xl border border-sky-100 space-y-4 font-bold mt-4">
            <p class="text-xl md:text-2xl text-sky-800">5. Nội dung chính của bài thơ là gì? Chọn đáp án đúng:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button onclick="kiemTraChu5Vn43(this, false)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl text-gray-800 text-left transition-all active:scale-95 leading-relaxed">
                    A. Miêu tả cảnh rừng mùa đông lạnh lẽo, hoang vắng
                </button>
                <button onclick="kiemTraChu5Vn43(this, true)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl text-gray-800 text-left transition-all active:scale-95 leading-relaxed">
                    B. Ca ngợi sức sống tiềm ẩn, mãnh liệt của thiên nhiên khi đông tàn xuân đến qua hình ảnh mầm non
                </button>
                <button onclick="kiemTraChu5Vn43(this, false)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl text-gray-800 text-left transition-all active:scale-95 leading-relaxed">
                    C. Kể về tiếng chim hót báo hiệu mùa xuân
                </button>
                <button onclick="kiemTraChu5Vn43(this, false)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl text-gray-800 text-left transition-all active:scale-95 leading-relaxed">
                    D. Tả chú thỏ nhỏ chạy nấp trong bụi cây mùa đông
                </button>
            </div>
            <div id="fb-vn43-c5" class="hidden p-4 rounded-xl text-center text-lg font-black bg-sky-50 text-sky-800 border border-sky-100 transition-all"></div>
        </div>
    </section>

    <!-- 🎮 BÀI TẬP 3: TRÒ CHƠI GHI NHỚ THƠ -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">3</div>
            <div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Trò chơi: Điền từ vào thơ</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Em hãy điền từ thích hợp vào chỗ trống để hoàn thành các câu thơ:</p>
            </div>
        </div>

        <div class="space-y-5 font-bold text-xl md:text-2xl text-gray-800">
            <!-- Câu 1 -->
            <div class="flex flex-wrap items-center gap-2 p-4 bg-sky-50/30 rounded-2xl border border-sky-100">
                <span>"Một mầm non</span>
                <select id="dien-tu-1" class="px-3 py-2 border-2 border-sky-100 rounded-xl bg-white focus:border-sky-500 outline-none font-black text-sky-800 text-base md:text-lg">
                    <option value="">-- Chọn --</option>
                    <option value="nho nhỏ">nho nhỏ</option>
                    <option value="to lớn">to lớn</option>
                    <option value="xanh mướt">xanh mướt</option>
                </select>
                <span>/ Còn nằm nép lặng im..."</span>
            </div>

            <!-- Câu 2 -->
            <div class="flex flex-wrap items-center gap-2 p-4 bg-sky-50/30 rounded-2xl border border-sky-100">
                <span>"Thấy mây bay</span>
                <select id="dien-tu-2" class="px-3 py-2 border-2 border-sky-100 rounded-xl bg-white focus:border-sky-500 outline-none font-black text-sky-800 text-base md:text-lg">
                    <option value="">-- Chọn --</option>
                    <option value="hối hả">hối hả</option>
                    <option value="lững lờ">lững lờ</option>
                    <option value="ồn ào">ồn ào</option>
                </select>
                <span>/ Thấy lất phất mưa phùn."</span>
            </div>

            <!-- Câu 3 -->
            <div class="flex flex-wrap items-center gap-2 p-4 bg-sky-50/30 rounded-2xl border border-sky-100">
                <span>"Rừng cây trông</span>
                <select id="dien-tu-3" class="px-3 py-2 border-2 border-sky-100 rounded-xl bg-white focus:border-sky-500 outline-none font-black text-sky-800 text-base md:text-lg">
                    <option value="">-- Chọn --</option>
                    <option value="thưa thớt">thưa thớt</option>
                    <option value="um tùm">um tùm</option>
                    <option value="xum xuê">xum xuê</option>
                </select>
                <span>/ Thấy chỉ cọi với cành."</span>
            </div>

            <!-- Câu 4 -->
            <div class="flex flex-wrap items-center gap-2 p-4 bg-sky-50/30 rounded-2xl border border-sky-100">
                <span>"Và tất cả</span>
                <select id="dien-tu-4" class="px-3 py-2 border-2 border-sky-100 rounded-xl bg-white focus:border-sky-500 outline-none font-black text-sky-800 text-base md:text-lg">
                    <option value="">-- Chọn --</option>
                    <option value="im ắng">im ắng</option>
                    <option value="ồn ào">ồn ào</option>
                    <option value="vui vẻ">vui vẻ</option>
                </select>
                <span>/ Từ ngọn cỏ làn rêu..."</span>
            </div>
        </div>

        <div class="flex justify-end items-center gap-4"><button onclick="kiemTraDienTuVn43();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
        <div id="fb-vn43-dien-tu" class="hidden p-4 rounded-xl text-center text-lg font-black transition-all"></div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiTiet43Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Mầm non trong bài thơ ẩn mình ở đâu?",
            "options": [
                "Dưới vỏ một cành bàng",
                "Dưới gốc cây to trong rừng",
                "Trong lòng đất ẩm ướt",
                "Trên ngọn cây cao chót vót"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong khổ thơ đầu, bên cạnh mầm non còn có gì trên cành bàng?",
            "options": [
                "Những chiếc lá xanh mướt mát",
                "Những bông hoa trắng tinh",
                "Còn một vài lá đỏ",
                "Những hạt sương đọng lại"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Mầm non được miêu tả có đôi mắt như thế nào?",
            "options": [
                "Mắt to tròn sáng long lanh",
                "Mắt lim dim",
                "Mắt nhắm nghiền",
                "Mắt mở to nhìn trời"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Mầm non nhìn qua đâu để thấy thế giới bên ngoài?",
            "options": [
                "Qua cửa sổ",
                "Qua lớp đất mỏng",
                "Qua kẽ lá",
                "Qua vỏ cây nứt ra"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Mầm non thấy điều gì trên bầu trời?",
            "options": [
                "Mặt trời chiếu nắng chói chang",
                "Mây bay hối hả",
                "Chim én bay về từng đàn",
                "Cầu vồng bảy sắc rực rỡ"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Thời tiết nào mầm non 'thấy' qua kẽ lá?",
            "options": [
                "Nắng hè gay gắt",
                "Tuyết rơi trắng xóa",
                "Gió thu hiu hắt",
                "Mưa phùn lất phất"
            ],
            "answer": 3,
            "level": 0
        },
        {
            "question": "Câu thơ nào miêu tả lá rụng vào mùa đông?",
            "options": [
                "Mầm non mắt lim dim",
                "Rào rào trận lá tuôn / Rải vàng đầy mặt đất",
                "Thấy chỉ cọi với cành",
                "Một chú thỏ phóng nhanh"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Rừng cây trông như thế nào khi mùa đông đến?",
            "options": [
                "Um tùm xanh tốt",
                "Rậm rạp xum xuê",
                "Thưa thớt, chỉ còn cọi với cành",
                "Rực rỡ đủ sắc màu"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Con vật nào xuất hiện trong bài thơ 'Mầm Non'?",
            "options": [
                "Một chú nai vàng ngơ ngác",
                "Một chú thỏ phóng nhanh",
                "Một con chim hót vang",
                "Một đàn sóc chạy nhảy"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Hai câu thơ cuối bài thể hiện điều gì?",
            "options": [
                "Thiên nhiên ồn ào náo nhiệt",
                "Tất cả im ắng từ ngọn cỏ làn rêu – sự tĩnh lặng sâu sắc của mùa đông",
                "Mầm non bắt đầu bung nở",
                "Một cơn bão đang kéo đến"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Bài thơ 'Mầm Non' gợi lên cảnh thiên nhiên vào thời điểm nào?",
            "options": [
                "Giữa mùa hè nắng gắt",
                "Cuối mùa thu lá đỏ",
                "Cuối mùa đông giao thoa sang mùa xuân",
                "Đầu mùa thu lá vàng"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Biện pháp nghệ thuật chính được tác giả sử dụng để miêu tả mầm non là gì?",
            "options": [
                "So sánh",
                "Điệp từ",
                "Nhân hóa",
                "Ẩn dụ"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Từ nào trong bài thơ diễn tả âm thanh của lá rụng?",
            "options": [
                "Lất phất",
                "Lim dim",
                "Hối hả",
                "Rào rào"
            ],
            "answer": 3,
            "level": 0
        },
        {
            "question": "Hình ảnh mầm non 'nằm nép lặng im' gợi lên điều gì?",
            "options": [
                "Mầm non đã chết khô trong mùa đông lạnh giá",
                "Sức sống tiềm ẩn, âm thầm đang chờ thời cơ để bùng phát khi xuân về",
                "Mầm non đang trốn chạy giá rét",
                "Mầm non không muốn lớn lên"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'lất phất' trong câu thơ 'Thấy lất phất mưa phùn' gợi tả điều gì?",
            "options": [
                "Mưa to ào ào đổ xuống",
                "Mưa rất nhỏ, bay nhẹ nhàng trong gió, đặc trưng của mùa đông giao xuân",
                "Gió thổi mạnh cuốn lá bay",
                "Sương mù dày đặc che khuất tầm nhìn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Dựa vào bài thơ, thời tiết khi mùa đông chuyển sang mùa xuân có đặc điểm gì?",
            "options": [
                "Nắng ấm rực rỡ, hoa nở rộ",
                "Mưa phùn lất phất, mây bay hối hả, lá vàng rải đất",
                "Tuyết rơi trắng xóa cả rừng cây",
                "Giông tố ầm ầm kéo đến"
            ],
            "answer": 1,
            "level": 0
        }
    ]
};

// --- LOGIC KHỞI ĐỘNG ---
let kdCorrect43 = 0;
window.checkKdVn43 = function(btn, isCorrect, label) {
    const fb = document.getElementById("fb-vn43-kd");
    if (!fb) return;

    fb.classList.remove("hidden");
    if (isCorrect) {
        btn.className = "p-4 bg-emerald-600 text-white border-2 border-emerald-100 rounded-2xl text-left transition-all cursor-default";
        kdCorrect43++;
        fb.innerHTML = `🎉 Đúng rồi! Đáp án ${label} hoàn toàn chính xác. Em đã chọn được ${kdCorrect43} đáp án đúng.`;
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4 transition-all";
        if (kdCorrect43 >= 3) {
            if (typeof window.showMathFeedback === 'function') {
                window.showMathFeedback("Khởi động xuất sắc", "🌿", "Chào mừng em bước vào bài thơ 'Mầm Non'!");
            }
        }
    } else {
        btn.className = "p-4 bg-rose-600 text-white border-2 border-rose-100 rounded-2xl text-left transition-all cursor-default scale-95";
        fb.innerHTML = `❌ Đáp án ${label} chưa chính xác. Mùa đông → xuân không lạnh thêm nhé!`;
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-rose-50 text-rose-800 border border-rose-100 mt-4 transition-all";
        setTimeout(() => {
            btn.className = "p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl text-left transition-all active:scale-95 text-gray-800";
            fb.classList.add("hidden");
        }, 2043);
    }
};

// --- LOGIC ĐỌC KHỔ THƠ -->
const khoInfo43 = {
    1: "🎵 Khổ 1: Hình ảnh mầm non nhỏ bé, lặng lẽ ẩn mình dưới vỏ cành bàng giữa mùa đông. Đây là hình ảnh khởi đầu đầy sức sống tiềm ẩn.",
    2: "👁️ Khổ 2: Mầm non 'mắt lim dim' quan sát thế giới bên ngoài – cảnh mùa đông với mây hối hả, mưa phùn, lá vàng rơi và sự im ắng sâu thẳm.",
    3: "🐦 Khổ 3: Tiếng chim 'Chíp chiu chiu! Xuân đến' như tín hiệu kỳ diệu làm thức tỉnh cả thiên nhiên – suối reo mừng, ngàn chim hát vang dậy.",
    4: "🌱 Khổ 4: Mầm non nghe tiếng xuân liền 'vội bật chiếc vỏ rơi', đứng dậy giữa trời khoác áo xanh biếc – sức sống bùng phát mạnh mẽ, rực rỡ!"
};

window.docKhoVn43 = function(n) {
    const fb = document.getElementById("fb-vn43-kho");
    if (!fb) return;
    fb.classList.remove("hidden");
    fb.innerHTML = khoInfo43[n];
};

// --- LOGIC XEM GỢI Ý ĐỌC ---
window.xemGoiYDocVn43 = function(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.contains("hidden") ? el.classList.remove("hidden") : el.classList.add("hidden");
};

// --- LOGIC CÂU HỎI 5 ---
let c5Done43 = false;
window.kiemTraChu5Vn43 = function(btn, isCorrect) {
    if (c5Done43) return;
    const fb = document.getElementById("fb-vn43-c5");
    if (!fb) return;

    fb.classList.remove("hidden");
    if (isCorrect) {
        btn.className = "p-4 bg-emerald-600 text-white border-2 border-emerald-100 rounded-2xl font-black text-left cursor-default";
        fb.innerHTML = "🎉 Chính xác! Bài thơ ca ngợi sức sống âm thầm, mãnh liệt của thiên nhiên khi giao mùa.";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4 transition-all";
        c5Done43 = true;
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Chính xác", "🌱", "Đáp án B là chủ đề đúng của bài thơ Mầm Non!");
        }
    } else {
        btn.className = "p-4 bg-rose-600 text-white border-2 border-rose-100 rounded-2xl font-black text-left cursor-default scale-95";
        fb.innerHTML = "❌ Chưa chính xác. Em hãy chú ý đến hình ảnh trung tâm của bài thơ – mầm non nhỏ bé nhưng đầy sức sống!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-rose-50 text-rose-800 border border-rose-100 mt-4 transition-all";
        setTimeout(() => {
            btn.className = "p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl text-gray-800 text-left transition-all active:scale-95 leading-relaxed";
            fb.classList.add("hidden");
        }, 2543);
    }
};

// --- LOGIC NỘP CHÉP THƠ TỰ LUẬN AI CHẤM ---
window.checkWritingVn43 = function() {
    const val = document.getElementById("ans-vn43-writing").value.trim();
    const fb = document.getElementById("fb-vn43-chep");
    if (!fb) return;
    fb.classList.remove("hidden");

    if (val.length < 30) {
        fb.innerHTML = "⚠️ Em hãy chép ít nhất 4 câu thơ và nêu lí do em yêu thích câu thơ đó nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-343";
        return;
    }

    const valLower = val.toLowerCase();
    const coNoiDung = valLower.includes("mầm") || valLower.includes("cành") || valLower.includes("lá") || valLower.includes("mưa") || valLower.includes("rừng");

    if (!coNoiDung) {
        fb.innerHTML = "⚠️ Bài chép của em chưa có nội dung từ bài thơ. Hãy chép đúng câu thơ trong bài nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-343";
        return;
    }

    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-800">AI Thầy E nhận xét & Chấm điểm:</h5>
                <p class="text-lg mb-2">Thầy E khen em đã chép thơ cẩn thận và biết nêu cảm nhận về đoạn thơ yêu thích. Em hiểu bài thơ rất tốt!</p>
                <span class="px-3 py-1 bg-emerald-600 rounded-lg font-bold text-lg md:text-3xl">Xếp loại: Hoàn thành xuất sắc ⭐ (143%)</span>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-emerald-600 text-white transition-all duration-343";
};

window.resetWritingVn43 = function() {
    const area = document.getElementById("ans-vn43-writing");
    if (area) area.value = "";
    const fb = document.getElementById("fb-vn43-chep");
    if (fb) fb.classList.add("hidden");
};

// --- LOGIC ĐIỀN TỪ ---
const dapAnDienTu43 = {
    "dien-tu-1": "nho nhỏ",
    "dien-tu-2": "hối hả",
    "dien-tu-3": "thưa thớt",
    "dien-tu-4": "im ắng"
};

window.kiemTraDienTuVn43 = function() {
    const fb = document.getElementById("fb-vn43-dien-tu");
    if (!fb) return;

    let sai = 0;
    let thieu = 0;

    Object.entries(dapAnDienTu43).forEach(([id, dap]) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (!el.value) { thieu++; return; }
        if (el.value === dap) {
            el.style.borderColor = "#16a43a";
            el.style.color = "#15843d";
        } else {
            el.style.borderColor = "#dc2643";
            el.style.color = "#dc2643";
            sai++;
        }
    });

    fb.classList.remove("hidden");
    if (thieu > 0) {
        fb.innerHTML = `⚠️ Em chưa điền đủ! Còn ${thieu} ô trống chưa chọn từ.`;
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-amber-50 text-amber-600 border border-amber-100 mt-4 transition-all";
    } else if (sai === 0) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã điền đúng tất cả các từ trong bài thơ Mầm Non!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4 transition-all";
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Hoàn thành bài tập", "📝", "Em đã điền đúng tất cả từ trong bài thơ!");
        }
    } else {
        fb.innerHTML = `⚠️ Có ${sai} từ điền chưa đúng (viền đỏ). Em hãy xem lại bài thơ và sửa lại nhé!`;
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-rose-50 text-rose-800 border border-rose-100 mt-4 transition-all";
    }
};

// --- NỘP TIẾT HỌC TOÀN CỤC ---
window.nopBaiTiet43Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback('Hoàn thành Tiết 43', '🌿', '<div class="text-center p-6"><span class="text-7xl block mb-4">🏆</span><p class="text-xl md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành xuất sắc Tiết 43: Đọc: Mầm Non!</p><p class="text-xl text-gray-800 mt-3">Em đã cảm nhận được vẻ đẹp tinh tế của thiên nhiên giao mùa qua hình ảnh chiếc mầm non nhỏ bé đầy sức sống!</p></div>');
    }
};

// --- CHE CHỮ HỌC THUỘC LÒNG VN43 ---
window.setCheChuVn43 = function(mode) {
    const poemContainer = document.getElementById('vn43-poem-text');
    const fb = document.getElementById('fb-vn43-htl');
    if (!poemContainer || !fb) return;

    // 1. Tách toàn bộ thẻ <p> thành các span chứa từ nếu chưa được tách
    if (!poemContainer.dataset.tokenized) {
        const paragraphs = poemContainer.querySelectorAll('p');
        paragraphs.forEach(p => {
            const text = p.innerText.trim();
            const words = text.split(/\s+/);
            const newHTML = words.map((word, wIdx) => {
                const isFirst = wIdx === 0 ? 'data-first="true"' : '';
                return `<span class="vn43-word transition-all duration-300 cursor-pointer hover:bg-sky-100/50 rounded px-0.5" ${isFirst} onclick="if (this.style.color === 'transparent') { this.style.color = 'inherit'; this.style.backgroundColor = 'transparent'; event.stopPropagation(); }">${word}</span>`;
            }).join(' ');
            p.innerHTML = newHTML;
        });
        poemContainer.dataset.tokenized = 'true';
    }

    // 2. Thiết lập chế độ che chữ
    const wordSpans = poemContainer.querySelectorAll('.vn43-word');
    fb.classList.remove('hidden');

    if (mode === 'none') {
        wordSpans.forEach(span => {
            span.style.color = 'inherit';
            span.style.backgroundColor = 'transparent';
        });
        fb.innerHTML = "🎉 Bài thơ đã hiện đầy đủ! Hãy đọc nhẩm lại nhé.";
        fb.className = "text-xs font-bold text-center p-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100 mt-2 transition-all";
    } else if (mode === 'low') {
        wordSpans.forEach((span, index) => {
            if ((index * 7 + 3) % 10 < 3) {
                span.style.color = 'transparent';
                span.style.backgroundColor = '#f59e0b'; // amber-500
            } else {
                span.style.color = 'inherit';
                span.style.backgroundColor = 'transparent';
            }
        });
        fb.innerHTML = "👀 Đã che 30% số chữ ngẫu nhiên! Em hãy tự điền từ nhẩm trong đầu (Nhấp vào ô che để xem từ gợi ý).";
        fb.className = "text-xs font-bold text-center p-2 rounded-xl bg-amber-50 text-amber-800 border border-amber-100 mt-2 transition-all";
    } else if (mode === 'high') {
        wordSpans.forEach((span, index) => {
            if ((index * 7 + 3) % 10 < 7) {
                span.style.color = 'transparent';
                span.style.backgroundColor = '#e11d48'; // rose-600
            } else {
                span.style.color = 'inherit';
                span.style.backgroundColor = 'transparent';
            }
        });
        fb.innerHTML = "👀 Đã che 70% số chữ ngẫu nhiên! Thử thách trí nhớ siêu phàm nào (Nhấp vào ô che để xem từ gợi ý).";
        fb.className = "text-xs font-bold text-center p-2 rounded-xl bg-rose-50 text-rose-800 border border-rose-100 mt-2 transition-all";
    } else if (mode === 'all') {
        wordSpans.forEach(span => {
            if (span.hasAttribute('data-first')) {
                span.style.color = 'inherit';
                span.style.backgroundColor = 'transparent';
            } else {
                span.style.color = 'transparent';
                span.style.backgroundColor = '#0284c7'; // sky-600
            }
        });
        fb.innerHTML = "👀 Đã che toàn bộ nhưng giữ lại chữ đầu dòng! Em hãy tự đọc thuộc lòng nhé (Nhấp vào ô che để xem từ gợi ý).";
        fb.className = "text-xs font-bold text-center p-2 rounded-xl bg-sky-50 text-sky-800 border border-sky-100 mt-2 transition-all";
    }
};
