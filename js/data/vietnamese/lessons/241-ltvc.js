export const lesson_241_ltvc = {
    "topic": "Tiếng Việt 5",
    "week": "24",
    "period": "241",
    "title": "LTVC: LIÊN KẾT CÂU BẰNG TỪ NGỮ NỐI",
    "desc": "LTVC: Liên kết câu bằng từ ngữ nối",
    "subject": "LTVC",
    "theme": "Hương sắc trăm miền",
    "audio": "",
    "content": `

<div class="space-y-8 animate-in fade-in duration-700">
                        <!-- I. KHÁM PHÁ -->
                        <section class="w-full">
                            <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl relative overflow-hidden ring-1 ring-blue-100">
                                <div class="flex items-center space-x-4 mb-8">
                                    <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg text-white">
                                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                    </div>
                                    <h2 class="text-xl md:text-3xl font-black text-gray-800 uppercase tracking-tight">I. Khám phá</h2>
                                </div>

                                <p class="text-sm text-blue-600 font-bold mb-6 italic flex items-center gap-1">
                                    <span>💡 Mẹo: Nhấn nút 🎙️ cạnh câu hỏi để trả lời bằng giọng nói.</span>
                                </p>

                                <!-- Exercise 1 -->
                                <div class="mb-10">
                                    <h3 class="text-xl font-bold text-blue-700 mb-4 italic">
                                        1. Đọc đoạn văn dưới đây và thực hiện yêu cầu:
                                    </h3>
                                    
                                    <div class="bg-blue-50/50 rounded-3xl p-6 md:p-8 border border-blue-100 shadow-inner mb-6">
                                        <div class="serif-font text-lg md:text-2xl leading-relaxed text-gray-800">
                                            <p class="mb-4 indent-10">
                                                Trên con đường từ nhà đến trường, tôi phải đi qua Hồ Gươm. Lúc có bạn thì chuyện trò tíu tít, có khi đuổi nhau suốt dọc đường. <span class="bg-amber-200 px-2 rounded-lg font-bold">Nhưng</span> khi đi một mình, tôi thích ôm cặp vào ngực, nhìn lên các vòm cây, vừa đi vừa lẩm nhẩm ôn bài. <span class="bg-amber-200 px-2 rounded-lg font-bold">Vì thế</span>, tôi thường là đứa phát hiện ra bông hoa đầu tiên nở trên cây gạo trước đền Ngọc Sơn. <span class="bg-amber-200 px-2 rounded-lg font-bold">Rồi</span> bông nọ gọi bông kia, bông nọ ganh bông kia, chỉ vài hôm sau, cây gạo đã như một cây đuốc lớn cháy rừng rực giữa trời.
                                            </p>
                                            <p class="text-right text-base italic text-gray-500 mt-2">(Theo Vân Long)</p>
                                        </div>
                                    </div>

                                    <div class="flex flex-col gap-6">
                                        <div class="bg-white/60 p-6 rounded-3xl border border-blue-100 shadow-sm">
                                            <div class="flex items-center gap-3 mb-4">
                                                <p class="font-bold text-blue-600 text-xl md:text-2xl italic">a) Nhận xét về vị trí của các từ ngữ in đậm trong câu.</p>
                                                <button onclick="toggleSpeech('ai-241-ltvc-1a')" class="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-all text-sm shadow-sm" title="Nhập bằng giọng nói">🎙️</button>
                                            </div>
                                           <textarea id="ai-241-ltvc-1a" rows="2" class="w-full p-4 rounded-2xl border border-blue-200 outline-none serif-font text-xl md:text-2xl shadow-inner bg-white" placeholder="Từ in đậm nằm ở..."></textarea>
                                        </div>
                                        <div class="bg-white/60 p-6 rounded-3xl border border-blue-100 shadow-sm">
                                            <div class="flex items-center gap-3 mb-4">
                                                <p class="font-bold text-blue-600 text-xl md:text-2xl italic">b) Nêu tác dụng của những từ ngữ đó trong đoạn văn.</p>
                                                <button onclick="toggleSpeech('ai-241-ltvc-1b')" class="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-all text-sm shadow-sm" title="Nhập bằng giọng nói">🎙️</button>
                                            </div>
                                            <textarea id="ai-241-ltvc-1b" rows="2" class="w-full p-4 rounded-2xl border border-blue-200 outline-none serif-font text-xl md:text-2xl shadow-inner bg-white" placeholder="Tác dụng của các từ đó là..."></textarea>
                                        </div>
                                    </div>

                                    <div class="mt-6 flex flex-wrap gap-4">
                                        <button onclick="check241LTVCEx1()" class="px-8 py-3 bg-blue-600 text-white text-lg font-black rounded-2xl shadow-lg hover:bg-blue-700 transition-all active:scale-95 flex items-center gap-2">
                                            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-blue-600 font-black text-xs shadow-sm">E</div>
                                            CHẤM BÀI
                                        </button>
                                        <button onclick="resetLTVC('ai-241-ltvc-1a'); resetLTVC('ai-241-ltvc-1b'); document.getElementById('fb-241-ltvc-ex1').classList.add('hidden');" class="px-6 py-3 bg-gray-200 text-gray-700 text-lg font-bold rounded-2xl hover:bg-gray-300 transition-all">LÀM LẠI</button>
                                    </div>
                                    <div id="fb-241-ltvc-ex1" class="hidden mt-4 p-5 bg-white border-2 border-blue-100 rounded-3xl shadow-sm italic text-lg text-blue-600 animate-in slide-in-from-top-4 duration-500"></div>
                                </div>

                                <!-- II. GHI NHỚ -->
                                <div class="bg-amber-100/80 border-l-8 border-amber-400 rounded-[32px] p-8 shadow-md">
                                    <div class="flex items-start gap-6">
                                        <div class="text-3xl md:text-5xl drop-shadow-sm">📎</div>
                                        <div>
                                            <h4 class="text-lg md:text-2xl font-black text-amber-800 uppercase mb-3 tracking-wide">Ghi nhớ</h4>
                                            <p class="text-lg md:text-2xl serif-font text-amber-900 leading-relaxed indent-10">
                                                Các câu trong một đoạn văn có thể liên kết với nhau bằng một kết từ hoặc từ ngữ có tác dụng nối (gọi chung là từ ngữ nối) như: <span class="italic font-bold">rồi, nhưng, vì thế, thứ nhất, thứ hai, trái lại, ngoài ra, bên cạnh đó, đầu tiên, sau đó, tiếp theo, cuối cùng,...</span> Từ ngữ nối thường đứng ở đầu câu.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <!-- III. LUYỆN TẬP -->
                        <section class="w-full">
                            <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl border-t-8 border-green-500 bg-green-50/20">
                                <div class="flex items-center space-x-4 mb-8">
                                    <div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-lg text-white">
                                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </div>
                                    <h2 class="text-xl md:text-3xl font-black text-gray-800 uppercase tracking-tight">II. Luyện tập</h2>
                                </div>

                                <!-- Exercise 2 -->
                                <div class="mb-12">
                                    <h3 class="text-xl font-bold text-green-700 mb-6 italic leading-relaxed">
                                        2. Chọn từ ngữ (<span class="text-rose-600">Cuối cùng, Tiếp theo, Sau đó, Đầu tiên</span>) thay cho mỗi 🌼 để tạo sự liên kết giữa các câu trong đoạn văn:
                                    </h3>
                                    <div class="bg-white/80 rounded-[40px] p-8 md:p-10 border border-green-100 shadow-xl flex flex-col md:flex-row gap-8 items-center">
                                        <div class="flex-1 serif-font text-2xl md:text-3xl leading-[1.8] text-gray-800">
                                            <p class="mb-6">
                                                (1) Quy trình làm cốm gồm nhiều công đoạn. 
                                                (2) <select id="ex241-2-1" class="px-3 py-1 bg-amber-50 border-2 border-amber-300 rounded-2xl text-rose-600 font-bold outline-none focus:ring-4 focus:ring-amber-200 transition-all"><option value="">🌼</option><option value="Đầu tiên">Đầu tiên</option><option value="Sau đó">Sau đó</option><option value="Tiếp theo">Tiếp theo</option><option value="Cuối cùng">Cuối cùng</option></select>, người ta gặt lúa non về để tuốt và lấy hạt. 
                                                (3) <select id="ex241-2-2" class="px-3 py-1 bg-amber-50 border-2 border-amber-300 rounded-2xl text-rose-600 font-bold outline-none focus:ring-4 focus:ring-amber-200 transition-all"><option value="">🌼</option><option value="Đầu tiên">Đầu tiên</option><option value="Sau đó">Sau đó</option><option value="Tiếp theo">Tiếp theo</option><option value="Cuối cùng">Cuối cùng</option></select>, họ đãi lúa qua nước để loại bỏ các hạt lép. 
                                                (4) <select id="ex241-2-3" class="px-3 py-1 bg-amber-50 border-2 border-amber-300 rounded-2xl text-rose-600 font-bold outline-none focus:ring-4 focus:ring-amber-200 transition-all"><option value="">🌼</option><option value="Đầu tiên">Đầu tiên</option><option value="Sau đó">Sau đó</option><option value="Tiếp theo">Tiếp theo</option><option value="Cuối cùng">Cuối cùng</option></select>, hạt lúa được rang và giã thành cốm. 
                                                (5) <select id="ex241-2-4" class="px-3 py-1 bg-amber-50 border-2 border-amber-300 rounded-2xl text-rose-600 font-bold outline-none focus:ring-4 focus:ring-amber-200 transition-all"><option value="">🌼</option><option value="Đầu tiên">Đầu tiên</option><option value="Sau đó">Sau đó</option><option value="Tiếp theo">Tiếp theo</option><option value="Cuối cùng">Cuối cùng</option></select>, người ta sàng sẩy cốm thật kĩ và để trong những chiếc thúng nhỏ lót lá sen.
                                            </p>
                                            <p class="text-right text-base italic text-gray-500 mt-4">(Theo Ngọc Hà)</p>
                                        </div>
                                    </div>
                                    <div class="mt-6 flex items-center gap-4">
                                        <button onclick="checkEx241_2()" class="px-8 py-3 bg-green-600 text-white text-lg font-black rounded-2xl shadow-lg hover:bg-green-700 transition-all active:scale-95 flex items-center gap-2">
                                            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-green-600 font-black text-xs shadow-sm">E</div>
                                            KIỂM TRA
                                        </button>
                                        <button onclick="resetEx241_2()" class="px-6 py-3 bg-gray-200 text-gray-700 text-lg font-bold rounded-2xl hover:bg-gray-300 transition-all">LÀM LẠI</button>
                                        <div id="fb-241-ltvc-ex2" class="hidden text-lg md:text-2xl font-black"></div>
                                    </div>
                                </div>

                                <!-- Exercise 3 -->
                                <div class="mb-12">
                                    <h3 class="text-xl font-bold text-green-700 mb-6 italic leading-relaxed">
                                        3. Tìm các từ ngữ nối thay cho mỗi 🌼 để tạo sự liên kết giữa các câu:
                                    </h3>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <!-- a -->
                                        <div class="bg-white/80 p-6 rounded-[32px] border border-green-100 shadow-lg">
                                            <p class="text-lg md:text-2xl serif-font leading-relaxed">
                                                a. Ở miền Bắc, Tết đến, hoa đào nở rộ. <select id="ex241-3-a" class="px-3 py-1 bg-green-50 border-2 border-green-300 rounded-2xl text-blue-600 font-bold outline-none"><option value="">🌼</option><option value="Nhưng">Nhưng</option><option value="Vì thế">Vì thế</option><option value="Bên cạnh đó">Bên cạnh đó</option></select> ở miền Nam, khi Tết về, hoa mai khoe sắc.
                                            </p>
                                        </div>
                                        <!-- b -->
                                        <div class="bg-white/80 p-6 rounded-[32px] border border-green-100 shadow-lg">
                                            <p class="text-lg md:text-2xl serif-font leading-relaxed">
                                                b. Đến Huế, du khách thích được ngắm cảnh trên sông Hương. <select id="ex241-3-b" class="px-3 py-1 bg-green-50 border-2 border-green-300 rounded-2xl text-blue-600 font-bold outline-none"><option value="">🌼</option><option value="Tuy nhiên">Tuy nhiên</option><option value="Ngoài ra">Ngoài ra</option><option value="Mặt khác">Mặt khác</option></select>, mọi người còn mong muốn được thưởng thức ẩm thực Huế.
                                            </p>
                                        </div>
                                        <!-- c -->
                                        <div class="bg-white/80 p-6 rounded-[32px] border border-green-100 shadow-lg">
                                            <p class="text-lg md:text-2xl serif-font leading-relaxed">
                                                c. Nhiều người thích cốm làng Vòng vì nhiều lí do. Thứ nhất, cốm ở đây rất ngon. <select id="ex241-3-c" class="px-3 py-1 bg-green-50 border-2 border-green-300 rounded-2xl text-blue-600 font-bold outline-none"><option value="">🌼</option><option value="Thứ hai">Thứ hai</option><option value="Tóm lại">Tóm lại</option><option value="Vì vậy">Vì vậy</option></select>, cốm còn là hình ảnh gợi liên tưởng đến mùa thu Hà Nội.
                                            </p>
                                        </div>
                                        <!-- d -->
                                        <div class="bg-white/80 p-6 rounded-[32px] border border-green-100 shadow-lg">
                                            <p class="text-lg md:text-2xl serif-font leading-relaxed">
                                                d. Đi du lịch ở miền Tây Nam Bộ, du khách sẽ có những trải nghiệm thú vị với nhiều hoạt động hấp dẫn như: chèo xuồng ba lá, đi cầu khỉ... <select id="ex241-3-d" class="px-3 py-1 bg-green-50 border-2 border-green-300 rounded-2xl text-blue-600 font-bold outline-none"><option value="">🌼</option><option value="Hơn nữa">Hơn nữa</option><option value="Trái lại">Trái lại</option><option value="Dẫu vậy">Dẫu vậy</option></select>, du khách còn có thể thoả thích hái trái cây khi ghé thăm các miệt vườn.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mt-8 flex items-center gap-4">
                                        <button onclick="checkEx241_3()" class="px-8 py-3 bg-green-600 text-white text-lg font-black rounded-2xl shadow-lg hover:bg-green-700 transition-all active:scale-95 flex items-center gap-2">
                                            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-green-600 font-black text-xs shadow-sm">E</div>
                                            KIỂM TRA
                                        </button>
                                        <button onclick="resetEx241_3()" class="px-6 py-3 bg-gray-200 text-gray-700 text-lg font-bold rounded-2xl hover:bg-gray-300 transition-all">LÀM LẠI</button>
                                        <div id="fb-241-ltvc-ex3" class="hidden text-lg md:text-2xl font-black"></div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <!-- IV. VẬN DỤNG -->
                        <section class="w-full pb-10">
                            <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl border-t-8 border-rose-500">
                                <div class="flex items-center space-x-4 mb-8">
                                    <div class="w-12 h-12 bg-rose-600 rounded-xl flex items-center justify-center shadow-lg text-white">
                                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                    </div>
                                    <h2 class="text-xl md:text-3xl font-black text-gray-800 uppercase tracking-tight">III. Vận dụng</h2>
                                </div>
                                <div class="bg-rose-50/50 rounded-[32px] p-8 border border-rose-100 shadow-inner">
                                    <div class="flex items-center gap-3 mb-6">
                                        <p class="text-lg md:text-2xl font-bold text-gray-700 border-l-8 border-rose-400 pl-4 italic leading-relaxed">
                                            4. Viết đoạn văn (3 – 5 câu) về một địa điểm du lịch hoặc khu di tích lịch sử mà em biết, trong đó có sử dụng từ ngữ nối để liên kết câu.
                                        </p>
                                        <button onclick="toggleSpeech('ai-241-ltvc-q4')" class="p-2 bg-rose-100 text-rose-600 rounded-full hover:bg-rose-200 transition-all text-sm shadow-sm" title="Nhập bằng giọng nói">🎙️</button>
                                    </div>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                        <div class="text-center">
                                            <img src="hinh_anh/den_hung_phu_tho.png" alt="Đền Hùng" class="w-full h-48 object-cover rounded-2xl shadow-md mb-2">
                                            <p class="font-bold text-gray-700 serif-font text-xl">Đền Hùng (Phú Thọ)</p>
                                        </div>
                                        <div class="text-center">
                                            <img src="hinh_anh/da_lat_lam_dong.png" alt="Đà Lạt" class="w-full h-48 object-cover rounded-2xl shadow-md mb-2">
                                            <p class="font-bold text-gray-700 serif-font text-xl">Đà Lạt (Lâm Đồng)</p>
                                        </div>
                                    </div>
                                    <textarea id="ai-241-ltvc-q4" rows="4" placeholder="Em muốn giới thiệu về địa điểm nào? Hãy nhớ dùng các từ nối như: đầu tiên, tiếp theo, bên cạnh đó, cuối cùng..." class="w-full p-6 serif-font text-lg md:text-2xl rounded-3xl border-2 border-rose-100 focus:border-rose-400 outline-none shadow-inner bg-white"></textarea>
                                    <div class="mt-6 flex flex-wrap gap-4">
                                        <button onclick="check241LTVCQ4AI()" class="px-8 py-3 bg-rose-600 text-white text-lg font-black rounded-2xl shadow-lg hover:bg-rose-700 active:scale-95 flex items-center gap-2">
                                            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-rose-600 font-black text-xs shadow-sm">E</div>
                                            CHẤM BÀI
                                        </button>
                                        <button onclick="resetLTVC('ai-241-ltvc-q4'); document.getElementById('fb-241-ltvc-q4').classList.add('hidden');" class="px-6 py-3 bg-gray-200 text-gray-700 text-lg font-bold rounded-2xl hover:bg-gray-300 transition-all">LÀM LẠI</button>
                                        <button onclick="submitLTVCUnified('241-ltvc-q4')" class="px-8 py-3 bg-gray-800 text-white text-lg font-black rounded-2xl shadow-lg hover:bg-black transition-all flex items-center gap-2">
                                            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-gray-800 font-black text-xs shadow-sm">E</div>
                                            <span>NỘP BÀI</span>
                                        </button>
                                    </div>
                                    <div id="fb-241-ltvc-q4" class="hidden mt-6 p-6 bg-white border-2 border-rose-100 rounded-[32px] shadow-sm italic text-xl text-rose-900 animate-in fade-in duration-500"></div>
                                </div>
                            </div>
                        </section>
                    </div>
`,
    "practice": `

`,
    "quizPool": [
    {
        "question": "Từ ngữ nối thường đứng ở vị trí nào trong câu?",
        "options": [
            "Đầu câu",
            "Giữa câu",
            "Cuối câu",
            "Bất kỳ đâu"
        ],
        "answer": 0,
        "level": 1
    },
    {
        "question": "Từ nào sau đây là từ ngữ nối?",
        "options": [
            "Mèo",
            "Nhưng",
            "Chạy",
            "Xinh tươi"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Tác dụng của từ ngữ nối là gì?",
        "options": [
            "Để câu dài hơn",
            "Để tạo sự liên kết giữa các câu",
            "Để làm câu khó hiểu hơn",
            "Để trang trí cho câu"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Trong quy trình làm cốm, từ nào phù hợp cho bước cuối?",
        "options": [
            "Đầu tiên",
            "Sau đó",
            "Bên cạnh đó",
            "Cuối cùng"
        ],
        "answer": 3,
        "level": 1
    },
    {
        "question": "Để nối hai nội dung đối lập, ta dùng từ nối nào?",
        "options": [
            "Vì thế",
            "Do đó",
            "Trái lại",
            "Đồng thời"
        ],
        "answer": 2,
        "level": 1
    },
    {
        "question": "Từ nối 'Vì thế' dùng để chỉ quan hệ gì?",
        "options": [
            "Quan hệ thời gian",
            "Quan hệ nguyên nhân - kết quả",
            "Quan hệ đối lập",
            "Quan hệ tăng tiến"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Từ nào dùng để chỉ quan hệ thứ tự trong danh sách liệt kê?",
        "options": [
            "Nhưng",
            "Thứ nhất",
            "Vì vậy",
            "Trái lại"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Câu '🌼 ở miền Nam, Tết đến hoa mai khoe sắc.' điền từ nào hợp lý nhất?",
        "options": [
            "Nhưng",
            "Do vậy",
            "Cuối cùng",
            "Vì thế"
        ],
        "answer": 0,
        "level": 1
    },
    {
        "question": "Từ ngữ nối gọi chung các từ có tác dụng gì?",
        "options": [
            "Tác dụng lặp",
            "Tác dụng nối",
            "Tác dụng thay thế",
            "Tác dụng ẩn dụ"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Để thêm một ý mới vào sau ý đã nói, ta dùng từ nối nào?",
        "options": [
            "Bên cạnh đó",
            "Mặc dù",
            "Song",
            "Vì"
        ],
        "answer": 0,
        "level": 1
    },
    {
        "question": "Từ 'đầu tiên' thường dùng ở câu thứ mấy trong đoạn văn miêu tả quy trình?",
        "options": [
            "Câu 1",
            "Câu 2",
            "Câu cuối",
            "Câu bất kỳ"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Phép nối giúp đoạn văn có đặc điểm gì?",
        "options": [
            "Mạch lạc và chặt chẽ",
            "Rời rạc",
            "Lặp đi lặp lại",
            "Thiếu ý nghĩa"
        ],
        "answer": 0,
        "level": 1
    },
    {
        "question": "Từ 'Nhưng' là từ ngữ nối thuộc nhóm nào?",
        "options": [
            "Kết từ",
            "Danh từ",
            "Động từ",
            "Tính từ"
        ],
        "answer": 0,
        "level": 1
    },
    {
        "question": "Trong đoạn văn về Hồ Gươm, từ 'Vì thế' nối câu mấy với câu mấy?",
        "options": [
            "Câu 1 với câu 2",
            "Câu 3 với câu 4",
            "Câu 4 với câu 5",
            "Câu 2 với câu 3"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Câu văn nào sau đây sử dụng từ ngữ nối đúng?",
        "options": [
            "Trời mưa. Nhưng tôi ở nhà.",
            "Tôi đi học. Nhưng con mèo ngủ.",
            "Em thích đọc sách. Ngoài ra, em còn thích nghe nhạc.",
            "Cốm rất ngon. Cuối cùng, nó màu xanh."
        ],
        "answer": 2,
        "level": 1
    }
]
};

// --- Logic functions implementation ---
window.check241LTVCEx1 = async function () {
    const a = document.getElementById('ai-241-ltvc-1a').value.trim();
    const b = document.getElementById('ai-241-ltvc-1b').value.trim();
    if (!a || !b) { alert('Học sinh hãy điền đủ ý a và b nhé!'); return; }

    const fb = document.getElementById('fb-241-ltvc-ex1');
    fb.classList.remove('hidden');
    fb.innerHTML = `<div class="flex items-center gap-2 text-blue-600 animate-pulse"><div class="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-[10px] shadow-sm">E</div> <span>Đang kiểm tra...</span></div>`;

    if (typeof askAI === 'function') {
        const prompt = `Học sinh nhận xét về đoạn văn: "Trên con đường...". Từ nối: Nhưng, Vì thế, Rồi. 
        Câu a học sinh trả lời: "${a}"
        Câu b học sinh trả lời: "${b}"
        Hãy đánh giá: a đúng nếu nói đứng ở đầu câu/đầu đoạn; b đúng nếu nói dùng để nối/liên kết câu. Nhận xét ngắn gọn, khích lệ.`;
        await askAI('241-ltvc-ex1', prompt, 'single', 'ltvc', 24);
    } else {
        fb.innerHTML = "✅ Tốt lắm! Các từ ngữ đó đều đứng ở đầu câu và giúp liên kết các câu văn với nhau một cách mạch lạc.";
    }
};

window.checkEx241_2 = function () {
    const v = [
        document.getElementById('ex241-2-1').value.trim(),
        document.getElementById('ex241-2-2').value.trim(),
        document.getElementById('ex241-2-3').value.trim(),
        document.getElementById('ex241-2-4').value.trim()
    ];
    const fb = document.getElementById('fb-241-ltvc-ex2');
    fb.classList.remove('hidden');

    const isCorrect = v[0].toLowerCase() === 'đầu tiên' &&
        ((v[1].toLowerCase() === 'sau đó' && v[2].toLowerCase() === 'tiếp theo') ||
            (v[1].toLowerCase() === 'tiếp theo' && v[2].toLowerCase() === 'sau đó')) &&
        v[3].toLowerCase() === 'cuối cùng';

    if (isCorrect) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã sắp xếp quy trình làm cốm rất chính xác.";
        fb.className = "text-green-600 font-bold mt-4 animate-bounce";
        if (typeof celebrate === 'function') celebrate();
    } else {
        fb.innerHTML = "❌ Chưa đúng rồi, em hãy chú ý thứ tự các bước trong quy trình nhé!";
        fb.className = "text-red-500 font-bold mt-4";
    }
};

window.resetEx241_2 = function () {
    ['ex241-2-1', 'ex241-2-2', 'ex241-2-3', 'ex241-2-4'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('fb-241-ltvc-ex2').classList.add('hidden');
};

window.checkEx241_3 = function () {
    const a = document.getElementById('ex241-3-a').value.trim().toLowerCase();
    const b = document.getElementById('ex241-3-b').value.trim().toLowerCase();
    const c = document.getElementById('ex241-3-c').value.trim().toLowerCase();
    const d = document.getElementById('ex241-3-d').value.trim().toLowerCase();
    const fb = document.getElementById('fb-241-ltvc-ex3');
    fb.classList.remove('hidden');

    if (a === 'nhưng' && b === 'ngoài ra' && c === 'thứ hai' && d === 'hơn nữa') {
        fb.innerHTML = "✅ Chính xác! Em đã sử dụng từ ngữ nối rất linh hoạt.";
        fb.className = "text-green-600 font-bold mt-4 animate-bounce";
        if (typeof celebrate === 'function') celebrate();
    } else {
        fb.innerHTML = "❌ Có chỗ chưa hợp lý, em hãy suy nghĩ kỹ về mối quan hệ giữa các câu nhé!";
        fb.className = "text-red-500 font-bold mt-4";
    }
};

window.resetEx241_3 = function () {
    ['ex241-3-a', 'ex241-3-b', 'ex241-3-c', 'ex241-3-d'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('fb-241-ltvc-ex3').classList.add('hidden');
};

window.check241LTVCQ4AI = async function () {
    const input = document.getElementById('ai-241-ltvc-q4');
    if (!input || !input.value.trim()) { alert("Học sinh hãy viết đoạn văn nhé!"); return; }

    const fb = document.getElementById('fb-241-ltvc-q4');
    fb.classList.remove('hidden');
    fb.innerHTML = `<div class="flex items-center gap-2 text-rose-600 animate-pulse"><div class="w-6 h-6 bg-rose-600 rounded-lg flex items-center justify-center text-white font-black text-[10px] shadow-sm">E</div> <span>Đang đọc bài của em...</span></div>`;

    if (typeof askAI === 'function') {
        const prefix = "Em hãy nhận xét đoạn văn (3-5 câu) về địa điểm du lịch của học sinh, yêu cầu phải sử dụng từ ngữ nối (như: đầu tiên, tiếp theo, cuối cùng, bên cạnh đó, mặt khác...). Hãy chỉ ra học sinh dùng từ nối nào và nhận xét độ hay của đoạn văn: ";
        await askAI('241-ltvc-q4', prefix, 'single', 'ltvc', 24);
    } else {
        fb.innerHTML = "✅ Đoạn văn của em rất tốt, đã biết sử dụng các từ nối để làm mạch văn rõ ràng hơn.";
    }
};

if (!lesson_241_ltvc.period) lesson_241_ltvc.period = "241";
if (!lesson_241_ltvc.id) lesson_241_ltvc.id = "241-ltvc";

