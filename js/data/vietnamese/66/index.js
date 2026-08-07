export const lesson66 = {
    "topic": "Tiếng Việt 5",
    "week": "10",
    "period": "66",
    "title": "VIẾT: ĐOẠN VĂN GIỚI THIỆU NHÂN VẬT & SỔ TAY TỪ NGỮ",
    "desc": "Tìm hiểu cách cấu trúc một đoạn văn giới thiệu nhân vật trong sách bao gồm Mở đầu, Triển khai và Kết thúc. Thực hành dự án thiết kế Sổ tay từ ngữ tiếng Việt của em.",
    "subject": "Viết",
    "theme": "Thế giới tuổi thơ",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-teal-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-teal-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-teal-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-teal-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-teal-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-teal-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-teal-900 font-black">•</span>
                Biết cách sắp xếp bố cục 3 phần của đoạn văn giới thiệu nhân vật trong một cuốn sách.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-teal-900 font-black">•</span>
                Xác định được đặc điểm nổi bật của nhân vật và đưa ra các dẫn chứng thuyết phục từ câu chuyện.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-teal-900 font-black">•</span>
                Thực hiện dự án tự làm Sổ tay từ ngữ tiếng Việt tra cứu theo thứ tự bảng chữ cái.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-teal-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-teal-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Người bạn trong trang sách</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Hãy viết tên một nhân vật trong một cuốn sách mà em đã đọc và nêu một đặc điểm em ấn tượng nhất về nhân vật đó:</p>
        
        <div class="space-y-4">
            <textarea id="ans-vn66-kd" rows="3" placeholder="Ví dụ: Em rất ấn tượng với nhân vật Dế Mèn trong cuốn Dế Mèn phiêu lưu ký vì dũng cảm, biết sửa chữa sai lầm và luôn mong ước thế giới đại đồng..." class="w-full p-4 border-2 border-teal-100 rounded-2xl outline-none focus:border-teal-500 font-bold bg-teal-50/10 text-xl md:text-2xl"></textarea>
            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraKhoiDong66();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn66-kd" class="hidden p-4 rounded-xl text-sm font-bold text-center mt-2"></div>
        </div>
    </div>

    <!-- 📖 BÀI ĐỌC ĐOẠN VĂN MẪU -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-teal-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <div class="border-b border-teal-100 pb-4">
                <h3 class="text-2xl md:text-3xl font-black text-teal-800 flex items-center gap-2">
                    <span>📖</span> Đọc đoạn văn và trả lời câu hỏi (SGK Trang 91)
                </h3>
            </div>

            <!-- Đoạn văn bản về Mi-lô -->
            <div class="bg-amber-50/20 p-6 md:p-10 rounded-[32px] border border-amber-100/50 shadow-inner leading-relaxed text-justify text-xl md:text-2xl text-gray-800 font-medium">
                <p class="indent-8 mb-4">
                    <span class="bg-teal-600 text-teal-800 font-bold px-1 rounded">Truyện kể hằng đêm dành cho các cô bé cá tính</span> của tác giả Ê-lê-na Pha-vi-li và Phran-xét-ca Ca-va-lô là cuốn sách thú vị kể về 166 phụ nữ nổi tiếng toàn cầu. Trong đó, người để lại ấn tượng mạnh nhất là <span class="bg-amber-500 text-amber-600 font-bold px-1 rounded">Mi-lô – nữ nghệ sĩ trống người Cu-ba</span>. Ngay từ nhỏ, Mi-lô đã bộc lộ rõ năng khiếu âm nhạc của mình. Trống tim-pan-ni, công-ga, bông-gô,..., loại nào cô cũng chơi được.
                </p>
                <p class="indent-8 mb-4">
                    Mi-lô mơ ước trở thành một nghệ sĩ trống, mặc dù ở quê hương cô, chỉ con trai mới được chơi trống. Cô quyết tâm theo đuổi ước mơ của mình. Hằng ngày, cô rèn khả năng cảm nhận âm thanh bằng cách lắng nghe những tiếng động xung quanh: tiếng lá đu đưa, tiếng chim ruồi vỗ cánh,... Với sự kiên trì, cô đã thuyết phục được cha cho tham gia lớp học nhạc. Trải qua bao khó khăn, Mi-lô vẫn tin: “Sẽ đến một ngày mình được chơi trong một ban nhạc thứ thiệt!”.
                </p>
                <p class="indent-8">
                    Nhờ tài năng, sự nỗ lực và niềm tin của Mi-lô, thế giới đã có một nghệ sĩ trống nổi tiếng. Mi-lô đã trở thành tấm gương về lòng quyết tâm theo đuổi ước mơ.
                </p>
                <div class="text-right text-base text-gray-800 italic mt-6 border-t border-amber-100 pt-2">(Vũ Mạnh Huy)</div>
            </div>

            <!-- Câu hỏi tương tác a, b -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
                <!-- Câu a -->
                <div class="bg-teal-50/30 p-6 rounded-3xl border border-teal-100 space-y-4">
                    <h4 class="font-bold text-gray-800 text-lg md:text-xl">a. Đoạn văn trên có nội dung chính là gì? Chọn đáp án đúng.</h4>
                    <div class="space-y-3">
                        <label class="flex items-start gap-2 cursor-pointer font-semibold text-base md:text-lg">
                            <input type="radio" name="q1-a" value="A" class="mt-1 w-5 h-5 text-teal-800 focus:ring-teal-600">
                            <span>A. Nêu tình cảm, cảm xúc của người viết đối với nhân vật Mi-lô.</span>
                        </label>
                        <label class="flex items-start gap-2 cursor-pointer font-semibold text-base md:text-lg">
                            <input type="radio" name="q1-a" value="B" class="mt-1 w-5 h-5 text-teal-800 focus:ring-teal-600">
                            <span>B. Giới thiệu về nhân vật Mi-lô trong cuốn sách <em>Truyện kể hằng đêm dành cho các cô bé cá tính</em>.</span>
                        </label>
                        <label class="flex items-start gap-2 cursor-pointer font-semibold text-base md:text-lg">
                            <input type="radio" name="q1-a" value="C" class="mt-1 w-5 h-5 text-teal-800 focus:ring-teal-600">
                            <span>C. Nêu lí do người viết yêu thích cuốn sách <em>Truyện kể hằng đêm dành cho các cô bé cá tính</em>.</span>
                        </label>
                        <label class="flex items-start gap-2 cursor-pointer font-semibold text-base md:text-lg">
                            <input type="radio" name="q1-a" value="D" class="mt-1 w-5 h-5 text-teal-800 focus:ring-teal-600">
                            <span>D. Kể về 166 phụ nữ nổi tiếng trên thế giới.</span>
                        </label>
                    </div>
                </div>

                <!-- Câu b -->
                <div class="bg-teal-50/30 p-6 rounded-3xl border border-teal-100 space-y-4">
                    <h4 class="font-bold text-gray-800 text-lg md:text-xl">b. Tìm phần mở đầu và kết thúc của đoạn văn. Mỗi phần cho biết thông tin gì?</h4>
                    <div class="space-y-3">
                        <label class="flex items-start gap-2 cursor-pointer font-semibold text-base md:text-lg">
                            <input type="radio" name="q1-b" value="dung" class="mt-1 w-5 h-5 text-teal-800 focus:ring-teal-600">
                            <span>Mở đầu giới thiệu tên sách, tên tác giả, tên nhân vật và nêu ấn tượng chung về nhân vật; Kết thúc nêu nhận xét hoặc bày tỏ cảm nghĩ về nhân vật.</span>
                        </label>
                        <label class="flex items-start gap-2 cursor-pointer font-semibold text-base md:text-lg">
                            <input type="radio" name="q1-b" value="sai" class="mt-1 w-5 h-5 text-teal-800 focus:ring-teal-600">
                            <span>Mở đầu kể về các khó khăn của nhân vật; Kết thúc nêu lên danh sách 166 phụ nữ nổi tiếng trên thế giới.</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraCauHoiAB_66();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn66-bt1" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 BÀI 1c: TRÒ CHƠI HOÀN THÀNH SƠ ĐỒ ĐẶC ĐIỂM NHÂN VẬT MI-LÔ -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-teal-100 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-6">
            <div class="flex items-center gap-3 border-b border-teal-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-teal-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md">1c</span>
                <h3 class="text-2xl md:text-3xl font-black text-teal-800">
                    Trò chơi: Hoàn thành sơ đồ đặc điểm nhân vật Mi-lô (SGK Trang 92)
                </h3>
            </div>

            <p class="text-lg md:text-xl text-gray-800 font-bold">👉 Hướng dẫn: Bấm vào một vị trí ô trống màu vàng nhạt trên sơ đồ, sau đó bấm chọn một thẻ nội dung bên dưới để điền.</p>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                <!-- Cột bên trái: Sơ đồ nhánh -->
                <div class="lg:col-span-8 bg-sky-50/50 p-6 md:p-8 rounded-[36px] border border-sky-100 flex flex-col gap-6 justify-center">
                    <div class="text-center">
                        <span class="px-6 py-2 bg-emerald-600 text-white font-black rounded-full text-xl md:text-2xl shadow-md">Nhân vật Mi-lô</span>
                    </div>

                    <div class="space-y-6 font-sans">
                        <!-- Nhánh 1 -->
                        <div class="bg-white p-4 rounded-2xl border border-teal-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                            <span class="px-4 py-2 bg-emerald-600 text-emerald-900 font-black rounded-xl text-base md:text-lg">Đặc điểm 1: Có năng khiếu âm nhạc</span>
                            <div class="flex flex-col gap-2 flex-1 w-full text-sm md:text-base">
                                <div class="p-2 bg-gray-50 border border-gray-100 rounded-lg font-bold">• Dẫn chứng 1: Chơi được mọi loại trống.</div>
                                <button id="slot-0" onclick="kichHoatSlot66(0)" class="w-full p-2 bg-amber-50/80 hover:bg-amber-100/50 border border-dashed border-amber-200 rounded-lg text-left text-amber-600 font-bold transition-all text-sm md:text-base">
                                    • Dẫn chứng 2: [Bấm vào để chọn nội dung...]
                                </button>
                            </div>
                        </div>

                        <!-- Nhánh 2 -->
                        <div class="bg-white p-4 rounded-2xl border border-teal-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                            <button id="slot-1" onclick="kichHoatSlot66(1)" class="px-4 py-3 bg-amber-50/80 hover:bg-amber-100/50 border border-dashed border-amber-200 rounded-xl text-amber-900 font-black transition-all text-base md:text-lg shrink-0">
                                [Bấm chọn Đặc điểm 2...]
                            </button>
                            <div class="flex flex-col gap-2 flex-1 w-full text-sm md:text-base">
                                <button id="slot-2" onclick="kichHoatSlot66(2)" class="w-full p-2 bg-amber-50/80 hover:bg-amber-100/50 border border-dashed border-amber-200 rounded-lg text-left text-amber-600 font-bold transition-all">
                                    • Dẫn chứng 1: [Bấm vào để chọn...]
                                </button>
                                <button id="slot-3" onclick="kichHoatSlot66(3)" class="w-full p-2 bg-amber-50/80 hover:bg-amber-100/50 border border-dashed border-amber-200 rounded-lg text-left text-amber-600 font-bold transition-all">
                                    • Dẫn chứng 2: [Bấm vào để chọn...]
                                </button>
                            </div>
                        </div>

                        <!-- Nhánh 3 -->
                        <div class="bg-white p-4 rounded-2xl border border-teal-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                            <button id="slot-4" onclick="kichHoatSlot66(4)" class="px-4 py-3 bg-amber-50/80 hover:bg-amber-100/50 border border-dashed border-amber-200 rounded-xl text-amber-900 font-black transition-all text-base md:text-lg shrink-0">
                                [Bấm chọn Đặc điểm 3...]
                            </button>
                            <div class="flex flex-col gap-2 flex-1 w-full text-sm md:text-base">
                                <button id="slot-5" onclick="kichHoatSlot66(5)" class="w-full p-2 bg-amber-50/80 hover:bg-amber-100/50 border border-dashed border-amber-200 rounded-lg text-left text-amber-600 font-bold transition-all">
                                    • Dẫn chứng 1: [Bấm vào để chọn...]
                                </button>
                                <button id="slot-6" onclick="kichHoatSlot66(6)" class="w-full p-2 bg-amber-50/80 hover:bg-amber-100/50 border border-dashed border-amber-200 rounded-lg text-left text-amber-600 font-bold transition-all">
                                    • Dẫn chứng 2: [Bấm vào để chọn...]
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Cột bên phải: Danh sách các mảnh ghép lựa chọn -->
                <div class="lg:col-span-4 bg-gray-50 p-4 md:p-6 rounded-[36px] border border-gray-100 space-y-4">
                    <h4 class="text-lg font-black text-gray-800 uppercase tracking-wider border-b pb-2">Thẻ nội dung chọn</h4>
                    <div id="card-pool-66" class="space-y-3">
                        <button onclick="dienTheNoiDung66('Ngay từ nhỏ đã bộc lộ rõ năng khiếu âm nhạc.')" class="w-full p-3 bg-white hover:bg-teal-50 border border-gray-100 hover:border-teal-400 rounded-xl font-semibold text-sm md:text-base text-left shadow-sm transition-all leading-relaxed">
                            📦 Ngay từ nhỏ đã bộc lộ rõ năng khiếu âm nhạc.
                        </button>
                        <button onclick="dienTheNoiDung66('Có ước mơ lớn và quyết tâm theo đuổi ước mơ.')" class="w-full p-3 bg-white hover:bg-teal-50 border border-gray-100 hover:border-teal-400 rounded-xl font-semibold text-sm md:text-base text-left shadow-sm transition-all leading-relaxed">
                            📦 Đặc điểm: Có ước mơ lớn và lòng quyết tâm theo đuổi ước mơ.
                        </button>
                        <button onclick="dienTheNoiDung66('Mơ ước trở thành nghệ sĩ trống mặc dù ở quê hương chỉ con trai mới được chơi.')" class="w-full p-3 bg-white hover:bg-teal-50 border border-gray-100 hover:border-teal-400 rounded-xl font-semibold text-sm md:text-base text-left shadow-sm transition-all leading-relaxed">
                            📦 Mơ ước làm nghệ sĩ trống dù quê nhà chỉ con trai mới được chơi.
                        </button>
                        <button onclick="dienTheNoiDung66('Rèn khả năng cảm nhận âm thanh hằng ngày (nghe lá đu đưa, chim ruồi vỗ cánh,...).')" class="w-full p-3 bg-white hover:bg-teal-50 border border-gray-100 hover:border-teal-400 rounded-xl font-semibold text-sm md:text-base text-left shadow-sm transition-all leading-relaxed">
                            📦 Rèn cảm nhận âm thanh hằng ngày (tiếng lá đu đưa, tiếng chim ruồi...).
                        </button>
                        <button onclick="dienTheNoiDung66('Có sự kiên trì vượt qua mọi khó khăn.')" class="w-full p-3 bg-white hover:bg-teal-50 border border-gray-100 hover:border-teal-400 rounded-xl font-semibold text-sm md:text-base text-left shadow-sm transition-all leading-relaxed">
                            📦 Đặc điểm: Có sự kiên trì vượt khó khăn.
                        </button>
                        <button onclick="dienTheNoiDung66('Thuyết phục được cha cho tham gia lớp học nhạc.')" class="w-full p-3 bg-white hover:bg-teal-50 border border-gray-100 hover:border-teal-400 rounded-xl font-semibold text-sm md:text-base text-left shadow-sm transition-all leading-relaxed">
                            📦 Thuyết phục cha cho tham gia lớp học nhạc.
                        </button>
                        <button onclick="dienTheNoiDung66('Luôn giữ vững niềm tin: Sẽ có ngày mình được chơi trong một ban nhạc thứ thiệt!')" class="w-full p-3 bg-white hover:bg-teal-50 border border-gray-100 hover:border-teal-400 rounded-xl font-semibold text-sm md:text-base text-left shadow-sm transition-all leading-relaxed">
                            📦 Luôn tin: "Sẽ đến một ngày mình được chơi trong ban nhạc thứ thiệt!".
                        </button>
                    </div>
                </div>
            </div>

            <!-- Các nút kiểm tra -->
            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraSoDo66();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            
            <div id="fb-vn66-bt2" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
        </div>
    </section>

    <!-- 📋 BỐ CỤC ĐOẠN VĂN: GHI NHỚ -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-teal-100 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-6">
            <div class="flex items-center gap-3 border-b border-teal-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-teal-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md">2</span>
                <h3 class="text-2xl md:text-3xl font-black text-teal-800">Ghi nhớ: Bố cục đoạn văn giới thiệu nhân vật trong một cuốn sách</h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
                <!-- Mở đầu -->
                <div class="bg-sky-50 p-6 rounded-3xl border border-sky-100 shadow-sm space-y-3">
                    <span class="px-3 py-1 bg-sky-600 text-white font-black rounded-lg text-xs uppercase">1. Mở đầu</span>
                    <p class="font-bold text-sky-800 text-lg md:text-xl">Giới thiệu tên sách, tên tác giả, tên nhân vật và nêu ấn tượng chung về nhân vật.</p>
                </div>
                <!-- Triển khai -->
                <div class="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 shadow-sm space-y-3">
                    <span class="px-3 py-1 bg-emerald-600 text-white font-black rounded-lg text-xs uppercase">2. Triển khai</span>
                    <p class="font-bold text-emerald-800 text-lg md:text-xl">Cung cấp những thông tin về đặc điểm nổi bật của nhân vật (về ngoại hình, hành động, lời nói, suy nghĩ,...) và đưa ra dẫn chứng minh họa.</p>
                </div>
                <!-- Kết thúc -->
                <div class="bg-amber-50 p-6 rounded-3xl border border-amber-100 shadow-sm space-y-3">
                    <span class="px-3 py-1 bg-amber-500 text-white font-black rounded-lg text-xs uppercase">3. Kết thúc</span>
                    <p class="font-bold text-amber-600 text-lg md:text-xl">Nêu nhận xét hoặc bày tỏ cảm nghĩ về nhân vật,...</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 📚 DỰ ÁN: SỔ TAY TỪ NGỮ TIẾNG VIỆT CỦA EM -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-teal-100 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-6">
            <div class="flex items-center gap-3 border-b border-teal-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-teal-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md">📋</span>
                <h3 class="text-2xl md:text-3xl font-black text-teal-800">Dự án: Sổ tay từ ngữ tiếng Việt của em</h3>
            </div>

            <p class="text-lg md:text-xl text-gray-800 font-bold mb-4">👉 Trò chơi: Sắp xếp các từ khóa theo thứ tự bảng chữ cái tiếng Việt bằng cách bấm chọn lần lượt.</p>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                <!-- Cột trái: Từ cần sắp xếp -->
                <div class="lg:col-span-5 bg-teal-50/20 p-6 rounded-[32px] border border-teal-100 space-y-4">
                    <h4 class="text-lg font-black text-teal-800 border-b pb-2">Từ khóa hỗn loạn</h4>
                    <div id="word-pool-66" class="flex flex-wrap gap-2">
                        <button id="wp-ngoisao" onclick="chonTuXep66('ngoisao', 'ngôi sao')" class="px-4 py-2 bg-white hover:bg-teal-50 border border-gray-100 hover:border-teal-400 rounded-xl font-bold text-base md:text-lg transition-all shadow-sm">ngôi sao</button>
                        <button id="wp-trungdu" onclick="chonTuXep66('trungdu', 'trung du')" class="px-4 py-2 bg-white hover:bg-teal-50 border border-gray-100 hover:border-teal-400 rounded-xl font-bold text-base md:text-lg transition-all shadow-sm">trung du</button>
                        <button id="wp-thuongthuc" onclick="chonTuXep66('thuongthuc', 'thưởng thức')" class="px-4 py-2 bg-white hover:bg-teal-50 border border-gray-100 hover:border-teal-400 rounded-xl font-bold text-base md:text-lg transition-all shadow-sm">thưởng thức</button>
                        <button id="wp-siengnang" onclick="chonTuXep66('siengnang', 'siêng năng')" class="px-4 py-2 bg-white hover:bg-teal-50 border border-gray-100 hover:border-teal-400 rounded-xl font-bold text-base md:text-lg transition-all shadow-sm">siêng năng</button>
                        <button id="wp-dumuc" onclick="chonTuXep66('dumuc', 'du mục')" class="px-4 py-2 bg-white hover:bg-teal-50 border border-gray-100 hover:border-teal-400 rounded-xl font-bold text-base md:text-lg transition-all shadow-sm">du mục</button>
                        <button id="wp-thathan" onclick="chonTuXep66('thathan', 'tha thẩn')" class="px-4 py-2 bg-white hover:bg-teal-50 border border-gray-100 hover:border-teal-400 rounded-xl font-bold text-base md:text-lg transition-all shadow-sm">tha thẩn</button>
                        <button id="wp-kivi" onclick="chonTuXep66('kivi', 'kì vĩ')" class="px-4 py-2 bg-white hover:bg-teal-50 border border-gray-100 hover:border-teal-400 rounded-xl font-bold text-base md:text-lg transition-all shadow-sm">kì vĩ</button>
                    </div>

                    <div class="flex justify-end items-center gap-4"><button onclick="kiemTraTuDien66();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                    <div id="fb-vn66-bt3" class="hidden p-3 rounded-lg text-sm font-bold text-center"></div>
                </div>

                <!-- Cột phải: Quyển Sổ tay từ điển -->
                <div class="lg:col-span-7 bg-amber-50/40 p-6 rounded-[36px] border border-amber-100 shadow-inner flex flex-col justify-start">
                    <h4 class="text-xl md:text-2xl font-black text-amber-600 mb-3 pb-2 border-b border-amber-100 flex items-center gap-2">
                        <span>📖</span> Quyển sổ tay của em
                    </h4>
                    
                    <div id="so-tay-rong" class="flex-1 flex flex-col items-center justify-center text-center p-6 text-gray-800 font-bold border-2 border-dashed border-amber-200 rounded-2xl">
                        <span class="text-5xl md:text-6xl block mb-2">📓</span>
                        <p class="text-lg md:text-xl">Em hãy sắp xếp đúng các từ theo thứ tự bảng chữ cái để nạp thông tin vào sổ tay nhé!</p>
                    </div>

                    <!-- Quyển sổ tay lật trang khi hoàn thành -->
                    <div id="so-tay-lat-trang" class="hidden flex-1 flex flex-col md:flex-row gap-4">
                        <!-- Danh mục các từ đã sắp xếp bên trái -->
                        <div class="w-full md:w-1/3 flex flex-col gap-2 border-r border-amber-100 pr-2">
                            <button onclick="latTrangSoTay66('dumuc')" class="w-full p-2 bg-white hover:bg-amber-500 font-bold rounded-lg text-left text-sm md:text-base border border-amber-100">1. du mục</button>
                            <button onclick="latTrangSoTay66('kivi')" class="w-full p-2 bg-white hover:bg-amber-500 font-bold rounded-lg text-left text-sm md:text-base border border-amber-100">2. kì vĩ</button>
                            <button onclick="latTrangSoTay66('ngoisao')" class="w-full p-2 bg-white hover:bg-amber-500 font-bold rounded-lg text-left text-sm md:text-base border border-amber-100">3. ngôi sao</button>
                            <button onclick="latTrangSoTay66('siengnang')" class="w-full p-2 bg-white hover:bg-amber-500 font-bold rounded-lg text-left text-sm md:text-base border border-amber-100">4. siêng năng</button>
                            <button onclick="latTrangSoTay66('thathan')" class="w-full p-2 bg-white hover:bg-amber-500 font-bold rounded-lg text-left text-sm md:text-base border border-amber-100">5. tha thẩn</button>
                            <button onclick="latTrangSoTay66('thuongthuc')" class="w-full p-2 bg-white hover:bg-amber-500 font-bold rounded-lg text-left text-sm md:text-base border border-amber-100">6. thưởng thức</button>
                            <button onclick="latTrangSoTay66('trungdu')" class="w-full p-2 bg-white hover:bg-amber-500 font-bold rounded-lg text-left text-sm md:text-base border border-amber-100">7. trung du</button>
                        </div>

                        <!-- Định nghĩa chi tiết bên phải -->
                        <div class="w-full md:w-2/3 p-4 bg-white rounded-2xl border border-amber-100 flex flex-col justify-start">
                            <div id="st-noi-dung" class="text-base md:text-lg leading-relaxed text-gray-800 space-y-3">
                                <p class="text-lg md:text-xl font-black text-amber-600 border-b pb-1">👉 Nhấp vào các mục từ bên trái để lật trang xem định nghĩa!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
`,
    "quizPool": [
        {
            "question": "Bố cục tiêu chuẩn của một đoạn văn giới thiệu nhân vật trong cuốn sách gồm những phần nào?",
            "options": [
                "Mở đầu, Triển khai, Kết thúc",
                "Khởi động, Đọc hiểu, Vận dụng",
                "Giới thiệu, Tóm tắt cốt truyện, Nêu bài học",
                "Mở bài, Thân bài, Kết bài"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Phần 'Mở đầu' của đoạn văn giới thiệu nhân vật thường có nhiệm vụ gì?",
            "options": [
                "Giới thiệu tên sách, tác giả, nhân vật và ấn tượng chung về nhân vật",
                "Kể lại toàn bộ diễn biến câu chuyện từ đầu đến cuối",
                "Nhận xét về các nhân vật phụ khác trong câu chuyện",
                "Bày tỏ cảm nghĩ của người đọc về cái kết câu chuyện"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Phần 'Triển khai' của đoạn văn giới thiệu nhân vật cần ghi nhận những thông tin gì?",
            "options": [
                "Nêu đặc điểm nổi bật của nhân vật kèm các dẫn chứng thuyết phục",
                "Nêu lí do tại sao cuốn sách đó lại bán chạy nhất",
                "Nêu thông tin về năm xuất bản và giá tiền cuốn sách",
                "Nêu nhận xét cảm nghĩ chung của người viết"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Dẫn chứng để làm rõ đặc điểm nhân vật được lấy từ đâu?",
            "options": [
                "Ngoại hình, hành động, lời nói, suy nghĩ,... của nhân vật trong sách",
                "Từ các bài báo đánh giá, bình luận trên mạng internet",
                "Do người viết tự tưởng tượng ra để bài viết hay hơn",
                "Từ nhận xét của các bạn học sinh cùng lớp"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Phần 'Kết thúc' của đoạn văn giới thiệu nhân vật dùng để làm gì?",
            "options": [
                "Nêu nhận xét hoặc cảm nghĩ, tình cảm đối với nhân vật",
                "Mời bạn đọc tìm mua cuốn sách ở các hiệu sách",
                "Đưa ra các câu hỏi trắc nghiệm đố vui về nhân vật",
                "Tóm tắt tiểu sử của tác giả viết cuốn sách"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Nhân vật Mi-lô trong đoạn văn mẫu được giới thiệu có quốc tịch ở nước nào?",
            "options": [
                "Cu-ba",
                "Việt Nam",
                "Pháp",
                "Mỹ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Rào cản lớn nhất đối với ước mơ chơi trống của cô bé Mi-lô ở quê hương là gì?",
            "options": [
                "Ở quê hương cô, chỉ con trai mới được phép chơi trống",
                "Cô không có đủ tiền để mua một bộ trống",
                "Ở quê hương cô không có lớp học nhạc nào dạy chơi trống",
                "Cô bị mất khả năng cảm nhận âm thanh tiếng trống"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Mi-lô đã rèn khả năng cảm nhận âm thanh hằng ngày bằng cách nào?",
            "options": [
                "Lắng nghe các tiếng động xung quanh: tiếng lá đu đưa, chim ruồi vỗ cánh,...",
                "Xem các video hướng dẫn chơi trống trên internet",
                "Tự gõ các đồ dùng trong gia đình để tạo âm thanh",
                "Chỉ nghe các đĩa nhạc gõ trống của ban nhạc nam"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'du mục' trong phần Sổ tay từ ngữ được định nghĩa thế nào?",
            "options": [
                "Di chuyển gia đình và đàn gia súc từ nơi này đến nơi khác để tìm cỏ, nước",
                "Đi du lịch đến các vùng núi cao để khám phá thiên nhiên",
                "Hình thức chăn nuôi gia súc tập trung tại các trang trại lớn",
                "Hành động cưỡi ngựa chăn dê trên các thảo nguyên"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'kì vĩ' mang ý nghĩa là gì?",
            "options": [
                "Lớn lao và đẹp đẽ một cách lạ thường, gợi sự ngưỡng mộ",
                "Một kỳ quan địa lý nhỏ bé ẩn sâu dưới lòng đất",
                "Hình dáng kỳ lạ, ngộ nghĩnh của một loài sinh vật",
                "Vùng đất hoang vu, khí hậu khắc nghiệt khó sinh sống"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ nào sau đây được xếp ở vị trí cuối cùng nếu xếp theo thứ tự bảng chữ cái?",
            "options": [
                "trung du",
                "thưởng thức",
                "tha thẩn",
                "siêng năng"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Từ nào sau đây được xếp ở vị trí đầu tiên trong Sổ tay từ ngữ theo thứ tự bảng chữ cái?",
            "options": [
                "du mục",
                "kì vĩ",
                "ngôi sao",
                "tha thẩn"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Từ 'tha thẩn' thuộc loại từ loại nào?",
            "options": [
                "Động từ",
                "Danh từ",
                "Tính từ",
                "Đại từ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'siêng năng' đồng nghĩa với từ nào sau đây?",
            "options": [
                "Cần cù, chăm chỉ",
                "Thông minh, sáng tạo",
                "Hiền lành, ngoan ngoãn",
                "Dũng cảm, kiên cường"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Mục từ trong sổ tay từ ngữ gồm các thông tin tối thiểu nào?",
            "options": [
                "Từ khóa, từ loại viết tắt, định nghĩa nghĩa và ví dụ dùng từ",
                "Tên từ, tranh vẽ minh họa, giá trị của từ",
                "Từ khóa, lịch sử xuất hiện của từ, số nét viết",
                "Từ loại, cách phát âm bằng tiếng Anh, dịch nghĩa"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- KHỞI ĐỘNG ---
window.kiemTraKhoiDong66 = function() {
    const text = document.getElementById('ans-vn66-kd')?.value.trim();
    const fb = document.getElementById('fb-vn66-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy ghi chia sẻ của mình trước khi gửi nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    fb.innerHTML = "🎉 Tuyệt vời! Nhân vật của em lựa chọn rất thú vị. Hãy cùng khám phá cách viết đoạn văn giới thiệu nhân vật qua bài học dưới đây nhé.";
    fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-teal-600 text-white mt-2 shadow-md";
};

// --- BÀI 1: TRẮC NGHIỆM a, b ---
window.kiemTraCauHoiAB_66 = function() {
    const fb = document.getElementById('fb-vn66-bt1');
    if (!fb) return;
    fb.classList.remove('hidden');

    const qa = document.querySelector('input[name="q1-a"]:checked')?.value;
    const qb = document.querySelector('input[name="q1-b"]:checked')?.value;

    if (!qa || !qb) {
        fb.innerHTML = "⚠️ Em hãy trả lời cả hai câu hỏi a và b trước khi nộp bài nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    const aDung = qa === 'B';
    const bDung = qb === 'dung';

    if (aDung && bDung) {
        fb.innerHTML = "🎉 Rất tốt! Đáp án của em hoàn toàn chính xác. Đoạn văn giới thiệu nhân vật Mi-lô trong sách 'Truyện kể hằng đêm...' và cấu trúc Mở đầu - Kết thúc đã được xác định chuẩn xác.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-teal-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "❌ Đáp án chưa chính xác. Hãy đọc kĩ lại đoạn văn về Mi-lô và chọn lại phương án nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- BÀI 1c: TRÒ CHƠI HOÀN THÀNH SƠ ĐỒ ĐẶC ĐIỂM ---
let slotHienTai66 = null;
let soDoGiaTri66 = Array(7).fill(null);
const soDoDapAn66 = [
    "Ngay từ nhỏ đã bộc lộ rõ năng khiếu âm nhạc.",
    "Có ước mơ lớn và quyết tâm theo đuổi ước mơ.",
    "Mơ ước trở thành nghệ sĩ trống mặc dù ở quê hương chỉ con trai mới được chơi.",
    "Rèn khả năng cảm nhận âm thanh hằng ngày (nghe lá đu đưa, chim ruồi vỗ cánh,...).",
    "Có sự kiên trì vượt qua mọi khó khăn.",
    "Thuyết phục được cha cho tham gia lớp học nhạc.",
    "Luôn giữ vững niềm tin: Sẽ có ngày mình được chơi trong một ban nhạc thứ thiệt!"
];

window.kichHoatSlot66 = function(slotIndex) {
    slotHienTai66 = slotIndex;
    // Highlight ô đang được chọn
    for (let i = 0; i < 7; i++) {
        const slotEl = document.getElementById(`slot-${i}`);
        if (slotEl) {
            if (i === slotIndex) {
                slotEl.className = "w-full p-2 bg-amber-500 border border-amber-100 rounded-lg text-left text-amber-900 font-black transition-all text-sm md:text-base scale-105 shadow-md";
            } else {
                slotEl.className = soDoGiaTri66[i] 
                    ? "w-full p-2 bg-emerald-50 border border-emerald-100 rounded-lg text-left text-emerald-800 font-bold transition-all text-sm md:text-base"
                    : "w-full p-2 bg-amber-50/80 hover:bg-amber-100/50 border border-dashed border-amber-200 rounded-lg text-left text-amber-600 font-bold transition-all text-sm md:text-base";
            }
        }
    }
};

window.dienTheNoiDung66 = function(noiDung) {
    if (slotHienTai66 === null) {
        alert("Em hãy bấm vào một ô trống màu vàng trên sơ đồ trước khi chọn thẻ nội dung nhé!");
        return;
    }

    soDoGiaTri66[slotHienTai66] = noiDung;
    const slotEl = document.getElementById(`slot-${slotHienTai66}`);
    if (slotEl) {
        let label = "";
        if (slotHienTai66 === 0) label = "• Dẫn chứng 2: ";
        else if (slotHienTai66 === 1) label = "Đặc điểm 2: ";
        else if (slotHienTai66 === 2) label = "• Dẫn chứng 1: ";
        else if (slotHienTai66 === 3) label = "• Dẫn chứng 2: ";
        else if (slotHienTai66 === 4) label = "Đặc điểm 3: ";
        else if (slotHienTai66 === 5) label = "• Dẫn chứng 1: ";
        else if (slotHienTai66 === 6) label = "• Dẫn chứng 2: ";

        slotEl.innerText = label + noiDung;
        slotEl.className = "w-full p-2 bg-emerald-50 border border-emerald-100 rounded-lg text-left text-emerald-800 font-bold transition-all text-sm md:text-base";
    }
    slotHienTai66 = null; // Reset
};

window.kiemTraSoDo66 = function() {
    const fb = document.getElementById('fb-vn66-bt2');
    if (!fb) return;
    fb.classList.remove('hidden');

    // Kiểm tra xem đã điền đầy đủ chưa
    const thieuO = soDoGiaTri66.some(val => val === null);
    if (thieuO) {
        fb.innerHTML = "⚠️ Em hãy hoàn thành tất cả các vị trí ô trống trên sơ đồ nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    // Kiểm tra khớp đáp án
    const dungHet = soDoGiaTri66.every((val, idx) => val === soDoDapAn66[idx]);

    if (dungHet) {
        fb.innerHTML = "🎉 Tuyệt hảo! Em đã hoàn thành sơ đồ phân tích đặc điểm và dẫn chứng nhân vật Mi-lô vô cùng chính xác. Rất giỏi!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-teal-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "❌ Có một số thông tin bị đặt nhầm chỗ. Em hãy kiểm tra xem đặc điểm và dẫn chứng tương ứng đã phù hợp chưa, hoặc bấm 'LÀM LẠI' để xếp lại nhé.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

window.lamLaiSoDo66 = function() {
    soDoGiaTri66 = Array(7).fill(null);
    slotHienTai66 = null;

    const labels = [
        "• Dẫn chứng 2: [Bấm vào để chọn nội dung...]",
        "[Bấm chọn Đặc điểm 2...]",
        "• Dẫn chứng 1: [Bấm vào để chọn...]",
        "• Dẫn chứng 2: [Bấm vào để chọn...]",
        "[Bấm chọn Đặc điểm 3...]",
        "• Dẫn chứng 1: [Bấm vào để chọn...]",
        "• Dẫn chứng 2: [Bấm vào để chọn...]"
    ];

    for (let i = 0; i < 7; i++) {
        const slotEl = document.getElementById(`slot-${i}`);
        if (slotEl) {
            slotEl.innerText = labels[i];
            slotEl.className = "w-full p-2 bg-amber-50/80 hover:bg-amber-100/50 border border-dashed border-amber-200 rounded-lg text-left text-amber-600 font-bold transition-all text-sm md:text-base";
        }
    }

    const fb = document.getElementById('fb-vn66-bt2');
    if (fb) fb.classList.add('hidden');
};

// --- DỰ ÁN: SỔ TAY TỰ ĐIỂN ---
let tuXep66 = [];
const tuDapAn66 = ['dumuc', 'kivi', 'ngoisao', 'siengnang', 'thathan', 'thuongthuc', 'trungdu'];

window.chonTuXep66 = function(tuId, tuText) {
    const fb = document.getElementById('fb-vn66-bt3');
    if (fb) fb.classList.add('hidden');

    if (tuXep66.includes(tuId)) return; // Không chọn trùng

    tuXep66.push(tuId);
    
    // Ẩn từ ở pool
    const btn = document.getElementById(`wp-${tuId}`);
    if (btn) btn.className = "hidden";

    // Cập nhật hiển thị trong quyển sổ tay tạm thời
    const rong = document.getElementById('so-tay-rong');
    if (rong) rong.className = "hidden";

    const latTrang = document.getElementById('so-tay-lat-trang');
    latTrang.classList.add('hidden'); // Chưa hiện bản lật trang thật

    // Tạo danh sách tạm
    let tempDiv = document.getElementById('so-tay-tam-xep');
    if (!tempDiv) {
        tempDiv = document.createElement('div');
        tempDiv.id = 'so-tay-tam-xep';
        tempDiv.className = 'space-y-2 w-full';
        rong.parentNode.insertBefore(tempDiv, rong.nextSibling);
    }

    tempDiv.innerHTML = `
        <p class='text-sm text-teal-800 font-bold italic mb-2'>Thứ tự đang xếp: </p>
        <div class='flex flex-wrap gap-2'>
            ${tuXep66.map((t, idx) => `<span class='px-3 py-1.5 bg-teal-600 text-teal-800 border border-teal-100 rounded-xl font-bold text-sm'>${idx + 1}. ${document.getElementById(`wp-${t}`)?.innerText || t}</span>`).join('')}
        </div>
    `;
};

window.kiemTraTuDien66 = function() {
    const fb = document.getElementById('fb-vn66-bt3');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (tuXep66.length < 7) {
        fb.innerHTML = "⚠️ Em hãy xếp đủ 7 từ khóa trước khi bấm nút kiểm tra!";
        fb.className = "p-3 rounded-lg text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    const dungHet = tuXep66.every((val, idx) => val === tuDapAn66[idx]);

    if (dungHet) {
        fb.innerHTML = "🎉 Sắp xếp chính xác! Quyển sổ tay từ điển của em đã được kích hoạt thành công.";
        fb.className = "p-3 rounded-lg text-sm font-bold text-center bg-teal-600 text-white mt-2 shadow-md";

        // Mở khóa quyển sổ tay lật trang thật
        document.getElementById('so-tay-rong').className = "hidden";
        const tempDiv = document.getElementById('so-tay-tam-xep');
        if (tempDiv) tempDiv.className = "hidden";

        document.getElementById('so-tay-lat-trang').className = "flex-1 flex flex-col md:flex-row gap-4";
        latTrangSoTay66('dumuc'); // Mặc định mở từ đầu tiên
    } else {
        fb.innerHTML = "❌ Thứ tự bảng chữ cái chưa đúng rồi. Em hãy bấm 'LÀM LẠI' và xếp lại nhé!";
        fb.className = "p-3 rounded-lg text-sm font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

window.lamLaiTuDien66 = function() {
    tuXep66 = [];
    tuDapAn66.forEach(t => {
        const btn = document.getElementById(`wp-${t}`);
        if (btn) btn.className = "px-4 py-2 bg-white hover:bg-teal-50 border border-gray-100 hover:border-teal-400 rounded-xl font-bold text-base md:text-lg transition-all shadow-sm";
    });

    const tempDiv = document.getElementById('so-tay-tam-xep');
    if (tempDiv) tempDiv.remove();

    document.getElementById('so-tay-rong').className = "flex-1 flex flex-col items-center justify-center text-center p-6 text-gray-800 font-bold border-2 border-dashed border-amber-200 rounded-2xl";
    document.getElementById('so-tay-lat-trang').className = "hidden";

    const fb = document.getElementById('fb-vn66-bt3');
    if (fb) fb.classList.add('hidden');
};

const dacDiemMocTu66 = {
    'dumuc': {
        name: "du mục",
        type: "tính từ",
        meaning: "di chuyển cả gia đình và đàn gia súc từ nơi này đến nơi khác để tìm nguồn cỏ và nước.",
        example: "Cuộc sống du mục tự do trên thảo nguyên lộng gió."
    },
    'kivi': {
        name: "kì vĩ",
        type: "tính từ",
        meaning: "lớn lao và đẹp đẽ một cách lạ thường, gợi sự ngưỡng mộ, kinh ngạc.",
        example: "Khung cảnh núi non Tràng An vô cùng kì vĩ."
    },
    'ngoisao': {
        name: "ngôi sao",
        type: "danh từ",
        meaning: "người đạt thành tích nổi bật trong biểu diễn nghệ thuật hoặc hoạt động thể thao.",
        example: "Ngôi sao sân cỏ."
    },
    'siengnang': {
        name: "siêng năng",
        type: "tính từ",
        meaning: "chăm chỉ, cần mẫn làm việc hoặc học tập một cách thường xuyên, đều đặn.",
        example: "Bạn Lan rất siêng năng học tập nên luôn đạt kết quả cao."
    },
    'thathan': {
        name: "tha thẩn",
        type: "động từ",
        meaning: "đi dạo từng bước chậm rãi, thong thả, không có mục đích hay hướng đi rõ rệt.",
        example: "Em bé tha thẩn chơi một mình ngoài ngõ nhỏ."
    },
    'thuongthuc': {
        name: "thưởng thức",
        type: "động từ",
        meaning: "tiếp nhận và cảm nhận cái hay, cái đẹp của tác phẩm nghệ thuật, món ăn hoặc cảnh vật bằng các giác quan.",
        example: "Cả nhà cùng ngồi thưởng thức bữa tối ngon miệng."
    },
    'trungdu': {
        name: "trung du",
        type: "danh từ",
        meaning: "vùng đất chuyển tiếp giữa đồng bằng và miền núi, thường có nhiều đồi thấp.",
        example: "Vùng trung du Phú Thọ nổi tiếng với những đồi chè xanh ngắt."
    }
};

window.latTrangSoTay66 = function(tuId) {
    const data = dacDiemMocTu66[tuId];
    const screen = document.getElementById('st-noi-dung');
    if (!screen || !data) return;

    screen.innerHTML = `
        <div class="space-y-4 animate-in fade-in duration-366">
            <h5 class="text-3xl md:text-4xl font-black text-amber-600 uppercase border-b pb-2 flex justify-between items-center">
                <span>📖 ${data.name}</span>
                <span class="text-sm bg-amber-500 text-amber-600 font-bold px-3 py-1 rounded-full italic lowercase">${data.type}</span>
            </h5>
            <div class="text-lg md:text-xl leading-relaxed space-y-3">
                <p>🟢 <strong>Giải nghĩa từ</strong>: ${data.meaning}</p>
                <p class="text-gray-800 italic pl-4 border-l-4 border-amber-100">• Ví dụ đặt câu: "${data.example}"</p>
            </div>
        </div>
    `;
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.nopBai66Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 66',
            '📓',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">📓</span><p class="text-2xl md:text-3xl font-bold text-teal-800">Chúc mừng em đã hoàn thành bài viết giới thiệu nhân vật và dự án Sổ tay từ điển!</p><p class="text-lg text-gray-800 mt-3">Hãy tiếp tục tự thiết kế thêm những trang sổ tay từ ngữ sáng tạo của riêng mình nhé.</p></div>'
        );
    }
};
