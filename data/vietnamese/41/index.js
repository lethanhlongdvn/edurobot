export const lesson41 = {
    "topic": "Tiếng Việt 5",
    "week": "6",
    "period": "41",
    "title": "VIẾT: QUAN SÁT PHONG CẢNH",
    "desc": "Bài học giúp học sinh nắm vững phương pháp quan sát phong cảnh sông suối, ao hồ, biển đảo theo trình tự không gian và thời gian hợp lý; đồng thời thực hành lập phiếu ghi chép kết quả quan sát sinh động.",
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
                Biết cách lựa chọn phong cảnh (sông, suối, ao, hồ, biển, đảo,...) và xác định trình tự quan sát hợp lý.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Biết cách sử dụng linh hoạt các giác quan để cảm nhận vẻ đẹp của phong cảnh.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Thực hành lập được bảng ghi chép kết quả quan sát một cảnh vật cụ thể sinh động, giàu tính từ gợi tả.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Giác quan nhạy bén</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy chọn giác quan phù hợp nhất để cảm nhận các chi tiết miêu tả phong cảnh dưới đây:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-bold text-sky-800 text-base md:text-lg">
            <!-- Câu hỏi 1 -->
            <div class="p-5 bg-sky-50/50 rounded-2xl border border-sky-100 space-y-3">
                <p>❓ Chi tiết: <em>“Tiếng suối chảy róc rách qua các khe đá”</em> cảm nhận bằng:</p>
                <div class="grid grid-cols-2 gap-2">
                    <button onclick="checkKdVn41(1, this, false)" class="p-3 bg-white hover:bg-sky-600 border border-gray-100 rounded-xl transition-all active:scale-95">Thị giác (mắt)</button>
                    <button onclick="checkKdVn41(1, this, true)" class="p-3 bg-white hover:bg-sky-600 border border-gray-100 rounded-xl transition-all active:scale-95">Thính giác (tai)</button>
                </div>
            </div>

            <!-- Câu hỏi 2 -->
            <div class="p-5 bg-sky-50/50 rounded-2xl border border-sky-100 space-y-3">
                <p>❓ Chi tiết: <em>“Hơi nước mát lạnh mơn man da thịt”</em> cảm nhận bằng:</p>
                <div class="grid grid-cols-2 gap-2">
                    <button onclick="checkKdVn41(2, this, true)" class="p-3 bg-white hover:bg-sky-600 border border-gray-100 rounded-xl transition-all active:scale-95">Xúc giác (da)</button>
                    <button onclick="checkKdVn41(2, this, false)" class="p-3 bg-white hover:bg-sky-600 border border-gray-100 rounded-xl transition-all active:scale-95">Khứu giác (mũi)</button>
                </div>
            </div>
        </div>
        <div id="fb-vn41-kd" class="hidden p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 transition-all"></div>
    </div>

    <!-- 📖 KHÁM PHÁ (BÀI TẬP 1: CHUẨN BỊ) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl space-y-8">
        <div class="flex items-center justify-between border-b border-sky-100 pb-4">
            <span class="text-sky-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                <span>📖</span> 1. Chuẩn bị quan sát phong cảnh
            </span>
        </div>

        <div class="bg-amber-50/50 p-4 rounded-2xl border border-amber-100 font-bold text-amber-600 text-base">
            👉 <strong>Phương pháp quan sát:</strong> Có 2 trình tự quan sát phong cảnh cơ bản dưới đây. Hãy nhấp chọn từng trình tự để xem hướng dẫn chi tiết của Thầy E nhé!
        </div>

        <!-- Trình tự quan sát tương tác -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Hướng 1 -->
            <div onclick="xemGoiYChuKy41('goi-y-space')" class="p-6 bg-emerald-50/50 hover:bg-emerald-100/70 border border-emerald-100 rounded-3xl cursor-pointer transition-all space-y-3 shadow-sm text-center">
                <span class="text-xl md:text-3xl block">🏔️</span>
                <h4 class="text-xl md:text-2xl font-black text-emerald-800">Quan sát theo trình tự không gian</h4>
                <p class="text-gray-800 font-bold text-sm">Từ bao quát đến chi tiết, từ gần ra xa hoặc ngược lại...</p>
                <div id="goi-y-space" class="hidden p-4 bg-white rounded-2xl border border-emerald-100 text-left font-bold text-gray-800 text-base space-y-2 mt-4 transition-all">
                    <p>✔️ <strong>Bao quát:</strong> Cảm nhận diện tích (thoáng, rộng), khí hậu (trong lành, se lạnh).</p>
                    <p>✔️ <strong>Bộ phận:</strong> Tả từ trên cao (bầu trời, rặng cây) xuống mặt nước, lòng hồ, hay dưới khe đá.</p>
                    <p>✔️ <strong>Chi tiết:</strong> Tả hình dáng, màu sắc nổi bật của từng sự vật.</p>
                </div>
            </div>

            <!-- Hướng 2 -->
            <div onclick="xemGoiYChuKy41('goi-y-time')" class="p-6 bg-sky-50/50 hover:bg-sky-100/70 border border-sky-100 rounded-3xl cursor-pointer transition-all space-y-3 shadow-sm text-center">
                <span class="text-xl md:text-3xl block">⏰</span>
                <h4 class="text-xl md:text-2xl font-black text-sky-800">Quan sát theo trình tự thời gian</h4>
                <p class="text-gray-800 font-bold text-sm">Theo thời gian trong ngày, các mùa trong năm...</p>
                <div id="goi-y-time" class="hidden p-4 bg-white rounded-2xl border border-sky-100 text-left font-bold text-gray-800 text-base space-y-2 mt-4 transition-all">
                    <p>✔️ <strong>Trong ngày:</strong> Buổi sáng (sương phủ mờ, nắng ấm dịu) -> Trưa (nắng chói chang, nước trong xanh) -> Chiều tối.</p>
                    <p>✔️ <strong>Theo mùa:</strong> Xuân (cây cối đâm chồi) -> Hè (nước dâng đầy, tiếng ve) -> Thu (ánh nắng vàng dịu) -> Đông (sương mờ tĩnh mịch).</p>
                    <p>✔️ <strong>Sự thay đổi:</strong> Trạng thái trước và sau cơn giông, khi nước lên và khi nước cạn.</p>
                </div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🖼️ LUYỆN TẬP 2: TRANH DÒNG SUỐI TƯƠNG TÁC -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">2</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Luyện tập: Quan sát và ghi lại kết quả quan sát dòng suối</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Em hãy nhấp vào các con vật/sự vật trong hình vẽ dòng suối dưới đây để xem gợi ý đặc điểm, sau đó hoàn thành bảng ghi chép quan sát ở phía dưới:</p>
            </div>
        </div>

        <!-- Tranh dòng suối SVG nghệ thuật tương tác -->
        <div class="bg-sky-50/20 p-4 rounded-3xl border border-sky-100 relative overflow-hidden flex flex-col items-center">
            <!-- SVG Minh Họa Cảnh Suối và Thú Rừng -->
            <svg viewBox="0 0 841 341" class="w-full max-w-4xl rounded-2xl border border-sky-100 bg-emerald-50/20 shadow-md">
                <!-- Nền rừng và bầu trời -->
                <rect x="0" y="0" width="841" height="341" fill="#f0fdf4"/>
                <path d="M0 241 Q 141 141 341 141 T 641 141 T 841 141 L 841 341 L 0 341 Z" fill="#bbf7d0"/>
                
                <!-- Rừng cây -->
                <g fill="#15841d" opacity="0.8">
                    <polygon points="50,141 80,141 141,141"/>
                    <polygon points="90,141 141,141 141,141"/>
                    <polygon points="641,141 641,90 741,141"/>
                    <polygon points="741,141 741,95 741,141"/>
                </g>

                <!-- Dòng suối uốn lượn -->
                <path d="M 141 341 C 241 241, 341 241, 441 241 C 541 141, 541 141, 641 141 L 641 141 C 541 141, 541 141, 441 241 C 341 341, 241 241, 141 341 Z" fill="#0ea5e9" opacity="0.85"/>

                <!-- Con voi (Trái) -->
                <g class="cursor-pointer" onclick="clickTuTranh41('voi')">
                    <ellipse cx="241" cy="241" rx="30" ry="20" fill="#64741b"/>
                    <circle cx="241" cy="241" r="12" fill="#64741b"/>
                    <path d="M 241 241 Q 241 241 241 241" stroke="#64741b" stroke-width="5" fill="none"/>
                    <rect x="241" y="241" width="8" height="15" fill="#475541"/>
                    <rect x="241" y="241" width="8" height="15" fill="#475541"/>
                    <text x="241" y="241" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334141">🐘 Con voi</text>
                </g>

                <!-- Con nai (Giữa) -->
                <g class="cursor-pointer" onclick="clickTuTranh41('nai')">
                    <ellipse cx="441" cy="241" rx="16" ry="10" fill="#d97741"/>
                    <circle cx="441" cy="141" r="8" fill="#d97741"/>
                    <line x1="441" y1="241" x2="441" y2="241" stroke="#d97741" stroke-width="3"/>
                    <line x1="441" y1="241" x2="441" y2="241" stroke="#d97741" stroke-width="3"/>
                    <!-- Sừng nai -->
                    <line x1="441" y1="141" x2="441" y2="141" stroke="#78341f" stroke-width="2"/>
                    <line x1="441" y1="141" x2="441" y2="141" stroke="#78341f" stroke-width="2"/>
                    <text x="441" y="141" font-family="sans-serif" font-size="12" font-weight="bold" fill="#78341f">🦌 Con nai</text>
                </g>

                <!-- Con công (Phải) -->
                <g class="cursor-pointer" onclick="clickTuTranh41('cong')">
                    <!-- Đuôi xòe -->
                    <path d="M 641 241 C 641 141, 541 241, 541 241 C 541 241, 641 241, 641 241 Z" fill="#047841" opacity="0.7"/>
                    <circle cx="641" cy="241" r="8" fill="#0341a1"/>
                    <text x="641" y="141" font-family="sans-serif" font-size="12" font-weight="bold" fill="#065f41">🦚 Con công</text>
                </g>

                <!-- Tương tác dòng suối -->
                <g class="cursor-pointer" onclick="clickTuTranh41('suoi')">
                    <text x="341" y="241" font-family="sans-serif" font-size="14" font-weight="black" fill="#f8fafc" opacity="0.9">💧 Dòng suối</text>
                </g>
            </svg>

            <!-- Khung thông báo nhỏ khi nhấp vào vật thể -->
            <div id="pop-thongtin-41" class="hidden mt-4 p-4 bg-sky-50 border border-sky-100 rounded-2xl max-w-2xl text-center font-bold text-sky-800 text-base md:text-lg">
                Nhấp vào sự vật trong tranh để xem gợi ý đặc điểm nổi bật.
            </div>
        </div>

        <!-- Bảng ghi chép điền đặc điểm -->
        <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-sky-100 text-lg md:text-xl font-bold">
                <thead>
                    <tr class="bg-sky-600 text-white">
                        <th class="border border-sky-100 p-4 text-center">Cảnh vật</th>
                        <th class="border border-sky-100 p-4 text-center">Hình dáng</th>
                        <th class="border border-sky-100 p-4 text-center">Màu sắc</th>
                        <th class="border border-sky-100 p-4 text-center">Âm thanh</th>
                        <th class="border border-sky-100 p-4 text-center">Hương vị / Khác</th>
                    </tr>
                </thead>
                <tbody class="text-gray-800">
                    <tr>
                        <td class="border border-sky-100 p-4 bg-sky-50/50 text-center font-black">Dòng suối</td>
                        <td class="border border-sky-100 p-4 text-center text-emerald-800">uốn lượn</td>
                        <td class="border border-sky-100 p-4 text-center text-emerald-800">trong vắt</td>
                        <td class="border border-sky-100 p-4 text-center text-emerald-800">róc rách</td>
                        <td class="border border-sky-100 p-4 text-center text-emerald-800">mát lành</td>
                    </tr>
                    <tr>
                        <td class="border border-sky-100 p-4 bg-sky-50/50 text-center font-black">Con nai</td>
                        <td class="border border-sky-100 p-4 text-center">
                            <div id="box-nai-hd" onclick="chonOTrong41('nai', 'hd')" class="px-2 py-1 bg-amber-50 border border-dashed border-amber-200 rounded cursor-pointer hover:bg-amber-500">❓ [Chọn]</div>
                        </td>
                        <td class="border border-sky-100 p-4 text-center">
                            <div id="box-nai-ms" onclick="chonOTrong41('nai', 'ms')" class="px-2 py-1 bg-amber-50 border border-dashed border-amber-200 rounded cursor-pointer hover:bg-amber-500">❓ [Chọn]</div>
                        </td>
                        <td class="border border-sky-100 p-4 text-center">
                            <div id="box-nai-at" class="px-2 py-1 bg-gray-800 rounded cursor-default text-gray-800 font-normal">không có</div>
                        </td>
                        <td class="border border-sky-100 p-4 text-center">
                            <div id="box-nai-hv" class="px-2 py-1 bg-gray-800 rounded cursor-default text-gray-800 font-normal">không có</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-sky-100 p-4 bg-sky-50/50 text-center font-black">Con voi</td>
                        <td class="border border-sky-100 p-4 text-center">
                            <div id="box-voi-hd" onclick="chonOTrong41('voi', 'hd')" class="px-2 py-1 bg-amber-50 border border-dashed border-amber-200 rounded cursor-pointer hover:bg-amber-500">❓ [Chọn]</div>
                        </td>
                        <td class="border border-sky-100 p-4 text-center">
                            <div id="box-voi-ms" onclick="chonOTrong41('voi', 'ms')" class="px-2 py-1 bg-amber-50 border border-dashed border-amber-200 rounded cursor-pointer hover:bg-amber-500">❓ [Chọn]</div>
                        </td>
                        <td class="border border-sky-100 p-4 text-center">
                            <div id="box-voi-at" class="px-2 py-1 bg-gray-800 rounded cursor-default text-gray-800 font-normal">không có</div>
                        </td>
                        <td class="border border-sky-100 p-4 text-center">
                            <div id="box-voi-hv" class="px-2 py-1 bg-gray-800 rounded cursor-default text-gray-800 font-normal">không có</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Bảng lựa chọn khi click chọn các ô ❓ -->
        <div id="choices-panel-41" class="hidden p-6 bg-sky-50 border border-sky-100 rounded-3xl space-y-4">
            <h5 id="choices-title-41" class="font-black text-sky-800 text-lg">Lựa chọn chi tiết phù hợp:</h5>
            <div id="choices-buttons-41" class="flex flex-wrap gap-3"></div>
        </div>
        <div id="fb-vn41-table" class="hidden p-4 rounded-xl text-lg font-black text-center"></div>
    </section>

    <!-- ✍️ BÀI TẬP 3: TỰ LUYỆN VIẾT PHIẾU QUAN SÁT TỰ DO -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">3</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Thực hành: Ghi lại kết quả quan sát một phong cảnh khác</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Em hãy chọn một cảnh ao hồ, sông suối hoặc biển đảo gần gũi, quen thuộc và ghi lại kết quả quan sát (tối thiểu 3 dòng miêu tả chi tiết):</p>
            </div>
        </div>

        <div class="bg-sky-50/20 p-6 rounded-3xl border border-sky-100 space-y-4">
            <div class="space-y-2">
                <label class="font-black text-sky-800 text-sm block">📝 Ghi chép kết quả quan sát của em vào đây:</label>
                <textarea id="vn41-textarea-cau" rows="4" placeholder="Ví dụ: Quan sát dòng sông quê em vào buổi sáng bình minh: dòng sông phẳng lặng như một dải lụa mềm vắt qua đồng ruộng. Nước sông đùng đục đỏ ngầu phù sa. Hai bên bờ sông, hàng tre xanh mát rì rào vẫy lá đón gió sớm..." class="w-full p-4 border border-gray-100 rounded-2xl bg-white text-xl md:text-2xl font-semibold focus:border-sky-500 outline-none shadow-sm"></textarea>
            </div>
            
            <div class="flex justify-center">
                <button onclick="nopBaiTapQuanSat41()" class="px-8 py-3.5 bg-sky-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-sky-600 active:scale-95 transition-all">NỘP BÀI GỬI THẦY E</button>
            </div>
            <div id="fb-vn41-lamvan" class="hidden p-5 rounded-2xl text-base font-bold shadow-md transition-all duration-341"></div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiTiet41Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Nội dung yêu cầu chính của tiết học 'Viết: Quan sát phong cảnh' là gì?",
            "options": [
                "Quan sát một phong cảnh ao hồ, sông suối hoặc biển đảo và ghi lại kết quả",
                "Viết trọn vẹn một bài văn tả người thân yêu",
                "Kể lại câu chuyện về chuyến đi du lịch của tác giả",
                "Học thuộc lòng bài thơ về quê hương đất nước"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi chuẩn bị quan sát một phong cảnh, bước đầu tiên cần thực hiện là gì?",
            "options": [
                "Viết ngay bài văn nộp cho giáo viên",
                "Lựa chọn phong cảnh để quan sát (sông, suối, biển, ao, hồ,...)",
                "Đọc các bài văn mẫu của các bạn khác",
                "Vẽ lại sơ đồ toàn cảnh bằng màu nước"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Có thể thực hiện quan sát phong cảnh bằng những cách thức nào?",
            "options": [
                "Chỉ được phép đứng quan sát trực tiếp tại địa điểm đó",
                "Quan sát trực tiếp tại địa điểm hoặc gián tiếp qua tranh ảnh, video,...",
                "Chỉ quan sát qua trí tưởng tượng mà không cần xem ảnh",
                "Hỏi người thân mô tả lại hộ mình"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Quan sát theo trình tự không gian nghĩa là gì?",
            "options": [
                "Tả sự thay đổi của cảnh vật theo các mùa trong năm",
                "Tả từ bao quát toàn cảnh đến từng chi tiết, bộ phận (hoặc ngược lại, từ gần ra xa...)",
                "Tả sự đổi thay của cảnh vật từ sáng đến chiều tối",
                "Chỉ tả những sự vật chuyển động trong không gian"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Quan sát theo trình tự thời gian nghĩa là gì?",
            "options": [
                "Tả lần lượt từ trái qua phải của cảnh vật",
                "Tả từ gần đến xa trên mặt nước hồ",
                "Tả theo thời gian trong ngày, các mùa hoặc sự thay đổi của cảnh vật qua mỗi lần quan sát",
                "Tả từ dưới đất lên đến đỉnh núi"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Việc quan sát dòng suối mẫu trong sách giáo khoa được gợi ý theo trình tự nào?",
            "options": [
                "Trình tự thời gian thay đổi bốn mùa",
                "Trình tự không gian (toàn cảnh đến từng sự vật cụ thể)",
                "Trình tự từ trong hang đá ra ngoài bờ suối",
                "Trình tự ngẫu hứng không theo sơ đồ nào"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đặc điểm toàn cảnh của dòng suối mẫu được gợi ý là gì?",
            "options": [
                "Chật hẹp, u tối, nhiều bùn lầy",
                "Không gian chung thoáng rộng, giữa rừng bao la; đặc điểm chung yên tĩnh, thơ mộng",
                "Ồn ào, náo nhiệt, nhiều xe cộ đi lại",
                "Nước đục ngầu, lũ quét cuồn cuộn chảy"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Khi quan sát sự vật dòng suối, từ gợi tả nào thích hợp miêu tả âm thanh?",
            "options": [
                "uốn lượn",
                "trong vắt",
                "róc rách",
                "xanh mát"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Khi quan sát sự vật dòng suối, từ gợi tả nào thích hợp miêu tả màu sắc?",
            "options": [
                "uốn lượn",
                "trong vắt",
                "róc rách",
                "rộng rãi"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Đặc điểm hình dáng tiêu biểu của con nai được gợi ý trong bảng quan sát là gì?",
            "options": [
                "khổng lồ",
                "ngơ ngác / nhỏ nhắn",
                "chạy rất nhanh",
                "đang xòe cánh bay"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Đặc điểm màu sắc của con voi rừng được gợi ý là gì?",
            "options": [
                "xanh mướt",
                "vàng óng",
                "xám xịt / xám đen",
                "ngũ sắc rực rỡ"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Tác dụng quan trọng nhất của việc ghi chép kết quả quan sát là gì?",
            "options": [
                "Để tích lũy chất liệu thực tế phong phú, giúp bài văn tả cảnh chân thực, sinh động hơn",
                "Giúp học sinh rèn luyện chữ viết đẹp",
                "Để nộp bài chấm lấy điểm rồi bỏ đi",
                "Không có tác dụng gì cụ thể"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi quan sát cảnh biển vào lúc bình minh, trình tự quan sát chủ yếu là gì?",
            "options": [
                "Trình tự không gian từ xa đến gần",
                "Trình tự thời gian (buổi sáng sớm lúc mặt trời mọc)",
                "Trình tự ngẫu nhiên từ dưới nước lên bờ cát",
                "Trình tự không gian kết hợp thời gian"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Để cảm nhận hương vị ngọt dịu của quả chín trong vườn, ta dùng giác quan nào?",
            "options": [
                "Thị giác",
                "Khứu giác và Vị giác",
                "Thính giác",
                "Xúc giác"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Lưu ý nào giúp học sinh quan sát phong cảnh hiệu quả, không bị lan man?",
            "options": [
                "Tả mọi thứ nhìn thấy không bỏ sót bất kỳ chi tiết vụn vặt nào",
                "Lựa chọn một số sự vật, hiện tượng chủ yếu, nổi bật hoặc đặc sắc làm trọng tâm quan sát",
                "Chỉ cần tưởng tượng và tự vẽ ra các con vật không có thật",
                "Chép lại hoàn toàn kết quả quan sát của bạn bên cạnh"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- LOGIC KHỞI ĐỘNG (GHÉP GIÁC QUAN) ---
let kdCount41 = 0;
window.checkKdVn41 = function(step, btn, isCorrect) {
    const fb = document.getElementById("fb-vn41-kd");
    if (!fb) return;

    fb.classList.remove("hidden");
    if (isCorrect) {
        btn.className = "p-3 bg-emerald-600 text-white border border-emerald-100 rounded-xl transition-all cursor-default scale-95";
        fb.innerHTML = "🎉 Chính xác! Cảm nhận vô cùng nhạy bén.";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4 transition-all";
        
        if (step === 1) {
            kdCount41++;
        } else if (step === 2) {
            kdCount41++;
        }

        if (kdCount41 >= 2) {
            fb.innerHTML = "🎉 Tuyệt vời! Em đã hoàn thành xuất sắc thử thách ghép nối giác quan cảm nhận phong cảnh!";
            if (typeof window.showMathFeedback === 'function') {
                window.showMathFeedback("Giác quan nhạy bén", "👁️👂", "Cảm nhận giác quan rất xuất sắc!");
            }
        }
    } else {
        btn.className = "p-3 bg-rose-600 text-white border border-rose-100 rounded-xl transition-all cursor-default scale-95";
        fb.innerHTML = "❌ Chưa chính xác. Em hãy thử lại nhé!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-rose-50 text-rose-800 border border-rose-100 mt-4 transition-all";
        setTimeout(() => {
            btn.className = "p-3 bg-white hover:bg-sky-600 border border-gray-100 rounded-xl transition-all active:scale-95";
            fb.classList.add("hidden");
        }, 1541);
    }
};

// --- LOGIC PHẦN KHÁM PHÁ (XEM CỦ CHU KỲ PHƯƠNG PHÁP) ---
window.xemGoiYChuKy41 = function(id) {
    const el = document.getElementById(id);
    if (!el) return;

    if (el.classList.contains("hidden")) {
        el.classList.remove("hidden");
    } else {
        el.classList.add("hidden");
    }
};

// --- LOGIC TRANH DÒNG SUỐI TƯƠNG TÁC (BÀI 2) ---
let tranhInfo41 = {
    suoi: "💧 Dòng suối: hình dáng uốn lượn uốn quanh rừng cây; màu sắc trong vắt nhìn thấy sỏi đá; âm thanh róc rách chảy suốt đêm ngày; cảm nhận mát lành.",
    voi: "🐘 Con voi: hình dáng to lớn khổng lồ; màu sắc xám xịt; hành động đang chậm rãi cúi đầu uống nước bên bờ suối.",
    nai: "🦌 Con nai: hình dáng nhỏ nhắn ngơ ngác; màu sắc vàng óng; hành động nhẩn nha gặm cỏ dưới tán lá rừng.",
    cong: "🦚 Con công: hình dáng kiêu sa; bộ lông màu sắc rực rỡ ngũ sắc; hành động đang xòe chiếc đuôi múa lộng lẫy bên bụi cỏ."
};

window.clickTuTranh41 = function(key) {
    const box = document.getElementById("pop-thongtin-41");
    if (!box) return;

    box.classList.remove("hidden");
    box.innerHTML = tranhInfo41[key];
    box.className = "mt-4 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl max-w-2xl text-center font-bold text-emerald-800 text-base md:text-lg animate-in fade-in duration-341";
};

// --- LOGIC BẢNG ĐIỀN TỪ (BÀI 2b) ---
let tableAnswers41 = {
    "nai-hd": { correct: "ngơ ngác / nhỏ nhắn", current: "" },
    "nai-ms": { correct: "vàng óng", current: "" },
    "voi-hd": { correct: "khổng lồ", current: "" },
    "voi-ms": { correct: "xám xịt", current: "" }
};

let currentTargetCell41 = { cardKey: "", typeKey: "" };

window.chonOTrong41 = function(cardKey, typeKey) {
    currentTargetCell41 = { cardKey, typeKey };
    const panel = document.getElementById("choices-panel-41");
    const title = document.getElementById("choices-title-41");
    const buttonsContainer = document.getElementById("choices-buttons-41");
    if (!panel || !title || !buttonsContainer) return;

    panel.classList.remove("hidden");
    
    let choices = [];
    if (cardKey === "nai") {
        if (typeKey === "hd") {
            title.innerHTML = "🦌 Chọn hình dáng của Chú Nai:";
            choices = ["ngơ ngác / nhỏ nhắn", "khổng lồ", "xòe đuôi múa"];
        } else if (typeKey === "ms") {
            title.innerHTML = "🦌 Chọn màu sắc của Chú Nai:";
            choices = ["vàng óng", "xám xịt", "xanh mướt"];
        }
    } else if (cardKey === "voi") {
        if (typeKey === "hd") {
            title.innerHTML = "🐘 Chọn hình dáng của Chú Voi:";
            choices = ["khổng lồ", "ngơ ngác / nhỏ nhắn", "nhỏ bé"];
        } else if (typeKey === "ms") {
            title.innerHTML = "🐘 Chọn màu sắc của Chú Voi:";
            choices = ["xám xịt", "vàng óng", "rực rỡ ngũ sắc"];
        }
    }

    buttonsContainer.innerHTML = "";
    choices.forEach(c => {
        const btn = document.createElement("button");
        btn.className = "px-4 py-2 bg-white hover:bg-sky-600 text-gray-800 border-2 border-gray-100 rounded-xl font-bold text-sm transition-all active:scale-95 shadow-sm";
        btn.innerHTML = c;
        btn.onclick = () => ganGiaTriOTrong41(c);
        buttonsContainer.appendChild(btn);
    });
};

function ganGiaTriOTrong41(choice) {
    const { cardKey, typeKey } = currentTargetCell41;
    if (!cardKey || !typeKey) return;

    const targetBox = document.getElementById(`box-${cardKey}-${typeKey}`);
    const panel = document.getElementById("choices-panel-41");
    if (!targetBox || !panel) return;

    tableAnswers41[`${cardKey}-${typeKey}`].current = choice;
    targetBox.innerHTML = choice;

    if (choice === tableAnswers41[`${cardKey}-${typeKey}`].correct) {
        targetBox.className = "px-2 py-1 bg-emerald-600 text-white rounded font-bold cursor-default text-sm transition-all scale-95";
    } else {
        targetBox.className = "px-2 py-1 bg-rose-600 text-white rounded font-bold cursor-default text-sm transition-all scale-95";
    }

    panel.classList.add("hidden");
    checkTableCompletion41();
}

function checkTableCompletion41() {
    const keys = Object.keys(tableAnswers41);
    const fb = document.getElementById("fb-vn41-table");
    if (!fb) return;

    let correctCount = 0;
    let attemptedCount = 0;

    keys.forEach(k => {
        if (tableAnswers41[k].current !== "") {
            attemptedCount++;
            if (tableAnswers41[k].current === tableAnswers41[k].correct) {
                correctCount++;
            }
        }
    });

    if (attemptedCount === keys.length) {
        fb.classList.remove("hidden");
        if (correctCount === keys.length) {
            fb.innerHTML = "🎉 Tuyệt vời! Em đã quan sát tranh và hoàn thành chính xác bảng ghi chép đặc điểm các con vật bên dòng suối!";
            fb.className = "p-4 rounded-xl text-lg font-black text-center bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4";
            if (typeof window.showMathFeedback === 'function') {
                window.showMathFeedback("Hoàn thành bảng", "📋", "Em đã điền hoàn thành bảng ghi chép đặc điểm dòng suối!");
            }
        } else {
            fb.innerHTML = `⚠️ Có ${keys.length - correctCount} ô ghi chép chưa điền đúng đặc điểm mô tả. Hãy nhấp chọn lại các ô màu đỏ để sửa nhé!`;
            fb.className = "p-4 rounded-xl text-lg font-black text-center bg-amber-50 text-amber-600 border border-amber-100 mt-4";
        }
    }
}

// --- LOGIC THỰC HÀNH GHI CHÉP QUAN SÁT TỰ DO (BÀI 3) ---
window.nopBaiTapQuanSat41 = function() {
    const val = document.getElementById("vn41-textarea-cau").value.trim();
    const fb = document.getElementById("fb-vn41-lamvan");
    if (!fb) return;
    fb.classList.remove("hidden");

    if (val.length < 25) {
        fb.innerHTML = "⚠️ Kết quả quan sát của em hơi ngắn, em hãy cố gắng ghi chép chi tiết hơn (tối thiểu 25 ký tự) để miêu tả cảnh vật nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-341";
        return;
    }

    // Kiểm tra sơ bộ các từ miêu tả cảm giác, màu sắc
    const valLower = val.toLowerCase();
    const coTuGoiTa = valLower.includes("xanh") || valLower.includes("đỏ") || valLower.includes("vàng") || valLower.includes("mát") || valLower.includes("rì rào") || valLower.includes("trong") || valLower.includes("uốn") || valLower.includes("sóng") || valLower.includes("gió");

    if (!coTuGoiTa) {
        fb.innerHTML = "⚠️ Kết quả quan sát rất tốt nhưng chưa thấy rõ các từ gợi tả hình dáng, màu sắc hoặc âm thanh đặc sắc. Em hãy bổ sung thêm để phiếu quan sát sinh động hơn nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-341";
        return;
    }

    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-800">AI Thầy E nhận xét & Chấm điểm:</h5>
                <p class="text-lg mb-2">Thầy E khen ngợi em đã quan sát cảnh vật rất chu đáo, ghi nhận chi tiết rõ ràng theo đúng trình tự không gian/thời gian. Em đã sử dụng nhiều tính từ gợi tả đặc sắc và lôi cuốn người đọc.</p>
                <span class="px-3 py-1 bg-emerald-600 rounded-lg text-sm font-bold">Xếp loại: Đạt kết quả xuất sắc (141% ⭐)</span>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-emerald-600 text-white transition-all duration-341";
};

// --- NỘP TIẾT HỌC TOÀN CỤC ---
window.nopBaiTiet41Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 41',
            '✍️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🏆</span><p class="text-lg md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành xuất sắc Tiết 41: Viết: Quan sát phong cảnh!</p><p class="text-xl text-gray-800 mt-3">Giờ đây em đã nắm vững kỹ năng lựa chọn trình tự và giác quan khi quan sát, sẵn sàng viết nên những bài văn tả cảnh tuyệt đẹp!</p></div>'
        );
    }
};
