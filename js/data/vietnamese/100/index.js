export const lesson100 = {
    "topic": "Tiếng Việt 5",
    "week": "15",
    "period": "100",
    "title": "LUYỆN TẬP VỀ ĐIỆP TỪ, ĐIỆP NGỮ",
    "desc": "Bài học giúp học sinh ôn tập và thực hành phân tích tác dụng của biện pháp điệp từ, điệp ngữ trong các đoạn thơ, đoạn văn; đồng thời rèn luyện kĩ năng viết câu văn giàu hình ảnh sử dụng biện pháp tu từ này.",
    "subject": "LTVC",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-emerald-950">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-emerald-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-emerald-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-emerald-950 mb-4 flex items-center gap-3">
            <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-emerald-900 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Nhận biết và xác định chính xác điệp từ, điệp ngữ trong các ngữ liệu văn học cụ thể.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Phân tích được tác dụng nghệ thuật của điệp từ, điệp ngữ (nhấn mạnh ý, tạo nhịp điệu, tăng nhạc tính...).
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Thực hành viết câu văn/đoạn văn thể hiện cảm xúc có sử dụng điệp từ, điệp ngữ đúng quy chuẩn.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG: NHỚ LẠI KIẾN THỨC -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Thử tài lý thuyết</h3>
        </div>
        <div class="bg-amber-50 bg-opacity-40 p-4 rounded-xl text-xl md:text-2xl font-bold text-amber-800">
            💬 Điệp từ, điệp ngữ là biện pháp tu từ như thế nào?
        </div>
        
        <div class="space-y-4 max-w-xl mx-auto">
            <div class="grid grid-cols-1 gap-3">
                <label class="flex items-center gap-3 font-bold cursor-pointer text-lg p-3 bg-gray-50 rounded-xl border border-gray-100 select-none">
                    <input type="radio" name="p100-kd-opt" value="wrong1" class="w-5 h-5 text-emerald-800">
                    <span>Lặp lại một từ hoặc cụm từ nhiều lần trong câu để câu văn dài hơn.</span>
                </label>
                <label class="flex items-center gap-3 font-bold cursor-pointer text-lg p-3 bg-gray-50 rounded-xl border border-gray-100 select-none">
                    <input type="radio" name="p100-kd-opt" value="correct" class="w-5 h-5 text-emerald-800">
                    <span>Lặp lại một từ hoặc cụm từ để nhấn mạnh nội dung hoặc tạo nhịp điệu cho câu.</span>
                </label>
                <label class="flex items-center gap-3 font-bold cursor-pointer text-lg p-3 bg-gray-50 rounded-xl border border-gray-100 select-none">
                    <input type="radio" name="p100-kd-opt" value="wrong2" class="w-5 h-5 text-emerald-800">
                    <span>Sử dụng những từ có nghĩa giống hoặc gần giống nhau để diễn tả cảm xúc.</span>
                </label>
            </div>
            <div class="flex justify-center">
                <button onclick="kiemTraKhoiDong100()" class="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl transition-all text-lg shadow-md active:scale-95">GỬI ĐÁP ÁN ✓</button>
            </div>
            <div id="fb-vn100-kd" class="hidden p-4 rounded-xl text-lg font-bold text-center mt-2"></div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 BÀI TẬP 1: GHÉP CẶP NGỮ LIỆU VÀ TÁC DỤNG -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-emerald-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">1</span>
            <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                Xác định điệp từ, điệp ngữ trong cột A và chọn tác dụng phù hợp ở cột B:
            </h3>
        </div>

        <p class="text-lg md:text-xl text-gray-700 font-bold">👉 Hướng dẫn: Chọn một ngữ liệu ở cột A (màu xanh dương), sau đó chọn một tác dụng tương ứng ở cột B (màu xanh lá) để ghép nối.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto pt-4">
            <!-- Cột A (Ngữ liệu) -->
            <div class="space-y-4" id="p100-bt1-a">
                <button onclick="selectTerm100('a')" id="btn-term-100-a" class="w-full p-4 text-left border-2 border-sky-200 bg-sky-50/50 rounded-2xl font-semibold text-lg hover:bg-sky-100 transition-all text-gray-800">
                    <strong class="block text-sky-850 mb-1">a. Thơ Chế Lan Viên:</strong>
                    "Ngủ yên, ngủ yên, cò ơi, chớ sợ<br>
                    Cành có mềm mẹ đã sẵn tay nâng."
                </button>
                <button onclick="selectTerm100('b')" id="btn-term-100-b" class="w-full p-4 text-left border-2 border-sky-200 bg-sky-50/50 rounded-2xl font-semibold text-lg hover:bg-sky-100 transition-all text-gray-800">
                    <strong class="block text-sky-850 mb-1">b. Ca dao:</strong>
                    "Trong đầm gì đẹp bằng sen<br>
                    Lá xanh, bông trắng, lại chen nhị vàng<br>
                    Nhị vàng, bông trắng, lá xanh<br>
                    Gần bùn mà chẳng hôi tanh mùi bùn."
                </button>
                <button onclick="selectTerm100('c')" id="btn-term-100-c" class="w-full p-4 text-left border-2 border-sky-200 bg-sky-50/50 rounded-2xl font-semibold text-lg hover:bg-sky-100 transition-all text-gray-800">
                    <strong class="block text-sky-850 mb-1">c. Văn Nguyễn Phan Hách:</strong>
                    "Thoắt cái, lá vàng rơi trong khoảnh khắc mùa thu. Thoắt cái, trắng long lanh một cơn mưa tuyết trên những cành đào, lê, mận. Thoắt cái, gió xuân hây hẩy..."
                </button>
            </div>

            <!-- Cột B (Tác dụng) -->
            <div class="space-y-4" id="p100-bt1-b">
                <button onclick="selectDef100('b')" id="btn-def-100-b" class="w-full p-4 text-left border-2 border-emerald-200 bg-emerald-50/40 rounded-2xl font-bold text-base hover:bg-emerald-100 transition-all text-emerald-950">
                    Làm nổi bật các bộ phận của hoa sen, phần nào cũng đẹp đẽ, từ đó nhấn mạnh vẻ đẹp bình dị mà thanh cao của loài hoa này.
                </button>
                <button onclick="selectDef100('c')" id="btn-def-100-c" class="w-full p-4 text-left border-2 border-emerald-200 bg-emerald-50/40 rounded-2xl font-bold text-base hover:bg-emerald-100 transition-all text-emerald-950">
                    Làm nổi bật sự thay đổi nhanh chóng của vạn vật (sự chuyển đổi thời gian và cảnh sắc thiên nhiên).
                </button>
                <button onclick="selectDef100('a')" id="btn-def-100-a" class="w-full p-4 text-left border-2 border-emerald-200 bg-emerald-50/40 rounded-2xl font-bold text-base hover:bg-emerald-100 transition-all text-emerald-950">
                    Lặp lại lời vỗ về của "cò mẹ", tạo nên âm hưởng của lời ru ngọt ngào, qua đó nhấn mạnh tình yêu thương của "cò mẹ" đối với con.
                </button>
            </div>
        </div>

        <div class="flex justify-center gap-4 pt-4">
            <button onclick="resetMatch100()" class="px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white font-black rounded-xl text-lg shadow transition-all active:scale-95">LÀM LẠI ↺</button>
        </div>
        <div id="fb-vn100-bt1" class="hidden p-4 rounded-xl text-lg font-bold text-center mt-2 max-w-5xl mx-auto"></div>
    </section>

    <!-- 📋 BÀI TẬP 2: ĐOẠN THƠ THỤC LINH -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-emerald-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">2</span>
            <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                Xác định điệp ngữ trong đoạn thơ của Thục Linh và tác dụng của nó:
            </h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto pt-4">
            <!-- Thơ minh họa -->
            <div class="bg-amber-50 bg-opacity-35 p-6 rounded-3xl border border-amber-100 text-lg md:text-2xl font-medium text-gray-800 leading-relaxed italic flex flex-col justify-center shadow-inner">
                "Nếu thế giới không có trẻ con<br>
                <span class="text-emerald-900 font-bold">Ai sẽ</span> dạy bông hoa học nói<br>
                <span class="text-emerald-900 font-bold">Ai sẽ</span> tô biển hoá màu vàng<br>
                <span class="text-emerald-900 font-bold">Ai sẽ</span> nhốt hương thơm vào túi?"<br>
                <span class="block text-right text-base text-gray-500 font-bold mt-2">(Thục Linh)</span>
            </div>

            <!-- Câu hỏi lựa chọn -->
            <div class="space-y-4">
                <div class="space-y-2">
                    <label class="text-lg md:text-xl font-bold text-emerald-900 block">a. Điệp ngữ được sử dụng trong đoạn thơ trên là gì?</label>
                    <select id="p100-bt2-diepngu" class="w-full p-3 border-2 border-emerald-200 rounded-xl font-bold bg-white text-lg shadow-sm">
                        <option value="">-- Chọn đáp án --</option>
                        <option value="thegioi">thế giới</option>
                        <option value="aisethegioi">ai sẽ dạy</option>
                        <option value="aise">Ai sẽ</option>
                        <option value="bonghoa">bông hoa</option>
                    </select>
                </div>

                <div class="space-y-2">
                    <label class="text-lg md:text-xl font-bold text-emerald-900 block">b. Biện pháp điệp từ, điệp ngữ trên có tác dụng gì?</label>
                    <select id="p100-bt2-tacdung" class="w-full p-3 border-2 border-emerald-200 rounded-xl font-bold bg-white text-lg shadow-sm">
                        <option value="">-- Chọn đáp án --</option>
                        <option value="nhanmanh">Nhấn mạnh vai trò kì diệu, thế giới ngây thơ và trí tưởng tượng ngộ nghĩnh của trẻ con; đồng thời tạo nhạc tính cho bài thơ.</option>
                        <option value="mota">Miêu tả cuộc sống bận rộn của con người khi thế giới không có trẻ em vui chơi nô đùa.</option>
                        <option value="hoicham">Đặt câu hỏi chất vấn bông hoa, biển khơi và hương thơm xung quanh chúng ta.</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="flex justify-center pt-4 border-t border-emerald-100">
            <button onclick="kiemTraBai2_100()" class="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl transition-all text-lg shadow-md active:scale-95">KIỂM TRA BÀI 2 ✓</button>
        </div>
        <div id="fb-vn100-bt2" class="hidden p-4 rounded-xl text-lg font-bold text-center mt-2 max-w-5xl mx-auto"></div>
    </section>

    <!-- 📋 BÀI TẬP 3: VIẾT ĐOẠN VĂN SỬ DỤNG ĐIỆP TỪ, ĐIỆP NGỮ -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-emerald-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">3</span>
            <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                Viết 2 – 3 câu thể hiện cảm xúc về một đoạn thơ, đoạn văn ở BT1 hoặc BT2 (bắt buộc sử dụng biện pháp điệp từ, điệp ngữ):
            </h3>
        </div>

        <div class="space-y-4 max-w-4xl mx-auto">
            <p class="text-base font-bold text-gray-500">👉 Gợi ý: Em có thể lặp lại các từ biểu lộ tình cảm như: *yêu biết mấy, yêu thương, thoắt cái...* hoặc cụm từ như *Đoạn thơ gợi..., Đoạn thơ cho em...* để làm nổi bật cảm xúc của mình.</p>
            <textarea id="ans-vn100-vietvan" rows="4" placeholder="Nhập câu văn của em tại đây..." class="w-full p-4 text-xl rounded-2xl border-2 border-emerald-100 outline-none focus:border-emerald-500 font-bold bg-white text-gray-800"></textarea>
            
            <div class="flex justify-center">
                <button onclick="kiemTraBai3_100()" class="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-lg rounded-2xl shadow-md active:scale-95 transition-all flex items-center gap-2">
                    <span>E CHẤM BÀI TỰ LUẬN</span>
                </button>
            </div>
            <div id="fb-vn100-writing" class="hidden p-5 rounded-2xl font-bold text-lg"></div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn100Global()" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <span>HOÀN THÀNH TIẾT HỌC ✓</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Tìm điệp từ được lặp lại nhiều lần trong câu ca dao: 'Sen màu trắng, sen màu hồng, nhị sen vàng, lá sen xanh'?",
            "options": [
                "sen",
                "màu",
                "lá",
                "nhị"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Biện pháp điệp từ, điệp ngữ trong câu thơ: 'Ngủ yên, ngủ yên, cò ơi, chớ sợ' lặp lại từ nào?",
            "options": [
                "ngủ yên",
                "cò ơi",
                "chớ sợ",
                "sẵn tay"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Đoạn văn của tác giả Nguyễn Phan Hách lặp lại điệp ngữ nào ở đầu mỗi câu?",
            "options": [
                "Thoắt cái",
                "Mùa thu",
                "Hoa lay ơn",
                "Cơn mưa"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tác dụng nổi bật nhất của điệp từ 'nhị vàng, bông trắng, lá xanh' trong câu ca dao tả sen là gì?",
            "options": [
                "Làm nổi bật các bộ phận của sen, nhấn mạnh vẻ thanh cao dung dị của loài hoa này",
                "Làm cho câu ca dao dài hơn để đọc chậm rãi",
                "Tạo âm hưởng du dương của bài hát chèo cổ",
                "Tập trung miêu tả hoạt động hái sen của con người"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Điệp từ, điệp ngữ giúp tạo hiệu ứng gì cho văn bản nghệ thuật?",
            "options": [
                "Tăng sức gợi hình, gợi cảm, nhấn mạnh cảm xúc hoặc tạo nhịp điệu nhạc tính",
                "Làm cho văn bản trở nên phức tạp khó hiểu hơn để thử thách người đọc",
                "Thay thế hoàn toàn cho các biện pháp tu từ so sánh nhân hóa khác",
                "Tiết kiệm dung lượng chữ viết trong câu văn xuôi"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong câu: 'Nhớ miền Nam, nhớ dòng sông Long, nhớ hàng dừa xanh mát', điệp ngữ nào được sử dụng?",
            "options": [
                "nhớ",
                "miền Nam",
                "dòng sông",
                "hàng dừa"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Sử dụng điệp từ, điệp ngữ không đúng mục đích (lặp từ vô tội vạ do nghèo vốn từ) gọi là lỗi gì?",
            "options": [
                "Lỗi lặp từ (lỗi diễn đạt)",
                "Lỗi sử dụng từ đa nghĩa",
                "Lỗi ngữ pháp câu thiếu chủ ngữ",
                "Lỗi chính tả dấu câu"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Tác dụng của điệp ngữ 'Thoắt cái' trong bài văn của Nguyễn Phan Hách là gì?",
            "options": [
                "Nhấn mạnh sự thay đổi nhanh chóng, bất ngờ của cảnh sắc thiên nhiên",
                "Đánh dấu lời nói trực tiếp của nhân vật thời tiết",
                "Liệt kê các loài cây ăn quả mọc trong vườn nhà",
                "Tạo nhịp điệu chậm rãi giống như bước chân người đi bộ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi điệp từ đứng cách quãng nhau trong câu thơ, ta gọi đó là kiểu điệp gì?",
            "options": [
                "Điệp cách quãng",
                "Điệp nối tiếp",
                "Điệp vòng",
                "Điệp song song"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Đoạn thơ của Thục Linh: 'Ai sẽ dạy bông hoa học nói / Ai sẽ tô biển hóa màu vàng...' sử dụng điệp ngữ ở vị trí nào?",
            "options": [
                "Đầu mỗi dòng thơ",
                "Cuối mỗi dòng thơ",
                "Giữa các câu thơ",
                "Đứng xen kẽ ngẫu nhiên"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Điệp từ, điệp ngữ có thể kết hợp với kiểu câu nào để tạo giọng điệu thiết tha, dồn dập hỏi han?",
            "options": [
                "Câu hỏi (câu nghi vấn)",
                "Câu kể (câu trần thuật)",
                "Câu cầu khiến",
                "Câu cảm thán"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong câu: 'Học, học nữa, học mãi', từ nào được điệp lại để nhấn mạnh tinh thần học tập?",
            "options": [
                "học",
                "nữa",
                "mãi",
                "học nữa"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Điểm khác biệt giữa điệp từ tu từ và lỗi lặp từ là gì?",
            "options": [
                "Điệp từ tu từ đem lại tác dụng biểu cảm nhấn mạnh rõ rệt; lỗi lặp từ gây rườm rà, nhàm chán cho câu văn",
                "Lỗi lặp từ chỉ xuất hiện trong thơ, điệp từ chỉ dùng trong văn xuôi",
                "Điệp từ tu từ luôn luôn đứng ở đầu câu, lỗi lặp từ đứng ở cuối câu",
                "Không có điểm khác biệt nào, hai thuật ngữ là một"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Điệp từ, điệp ngữ thường xuất hiện nhiều nhất trong thể loại văn học nào?",
            "options": [
                "Thơ ca và văn biểu cảm",
                "Báo cáo khoa học",
                "Biên bản họp lớp",
                "Đơn xin nghỉ học"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Câu nào sau đây sử dụng điệp ngữ tu từ tạo nhịp điệu đúng nghĩa?",
            "options": [
                "Tre giữ làng, giữ nước, giữ mái nhà tranh, giữ đồng lúa chín.",
                "Hôm nay em đi học rồi em về nhà rồi em ăn cơm rồi em ngủ.",
                "Bông hoa nhài này rất là nhài và rất là thơm hương nhài.",
                "Chú mèo mướp nhà em rất mướp và rất thích bắt chuột mướp."
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// Quản lý kéo thả/ghép nối thẻ cho Bài 1 Tiết 100
let selectedTerm100Id = null;
let selectedDef100Id = null;
let matchedPairs100 = {};

window.selectTerm100 = function(termId) {
    if (matchedPairs100[termId]) return;

    // Reset màu sắc các term cũ
    document.querySelectorAll('#p100-bt1-a button').forEach(btn => {
        const id = btn.id.replace('btn-term-100-', '');
        if (!matchedPairs100[id]) {
            btn.className = "w-full p-4 text-left border-2 border-sky-200 bg-sky-50/50 rounded-2xl font-semibold text-lg hover:bg-sky-100 transition-all text-gray-800";
        }
    });

    selectedTerm100Id = termId;
    const activeBtn = document.getElementById(`btn-term-100-${termId}`);
    if (activeBtn) {
        activeBtn.className = "w-full p-4 text-left border-2 border-sky-500 bg-sky-100 rounded-2xl font-semibold text-lg transition-all text-gray-900 scale-[0.98]";
    }

    checkMatch100();
};

window.selectDef100 = function(defId) {
    if (Object.values(matchedPairs100).includes(defId)) return;

    // Reset màu sắc các def cũ
    document.querySelectorAll('#p100-bt1-b button').forEach(btn => {
        const id = btn.id.replace('btn-def-100-', '');
        if (!Object.values(matchedPairs100).includes(id)) {
            btn.className = "w-full p-4 text-left border-2 border-emerald-200 bg-emerald-50/40 rounded-2xl font-bold text-base hover:bg-emerald-100 transition-all text-emerald-950";
        }
    });

    selectedDef100Id = defId;
    const activeBtn = document.getElementById(`btn-def-100-${defId}`);
    if (activeBtn) {
        activeBtn.className = "w-full p-4 text-left border-2 border-emerald-500 bg-emerald-150 rounded-2xl font-bold text-base transition-all text-emerald-950 scale-[0.98]";
    }

    checkMatch100();
};

function checkMatch100() {
    if (!selectedTerm100Id || !selectedDef100Id) return;

    const fb = document.getElementById('fb-vn100-bt1');
    if (selectedTerm100Id === selectedDef100Id) {
        // Đúng cặp
        matchedPairs100[selectedTerm100Id] = selectedDef100Id;
        
        const termBtn = document.getElementById(`btn-term-100-${selectedTerm100Id}`);
        const defBtn = document.getElementById(`btn-def-100-${selectedDef100Id}`);
        
        if (termBtn) {
            termBtn.className = "w-full p-4 text-left border-2 border-emerald-500 bg-emerald-100/50 text-emerald-900 rounded-2xl font-semibold text-lg cursor-default";
            termBtn.innerHTML += " ✓";
        }
        if (defBtn) {
            defBtn.className = "w-full p-4 text-left border-2 border-emerald-500 bg-emerald-100/50 text-emerald-900 rounded-2xl font-bold text-base cursor-default";
            defBtn.innerHTML += " ✓";
        }

        selectedTerm100Id = null;
        selectedDef100Id = null;

        if (Object.keys(matchedPairs100).length === 3) {
            if (fb) {
                fb.classList.remove('hidden');
                fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 max-w-5xl mx-auto bg-emerald-100 text-emerald-900";
                fb.innerHTML = "🎉 Xuất sắc! Em đã xác định đúng toàn bộ điệp từ, điệp ngữ và tác dụng của chúng ở Bài tập 1.";
            }
        }
    } else {
        // Sai cặp
        if (fb) {
            fb.classList.remove('hidden');
            fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 max-w-5xl mx-auto bg-rose-100 text-rose-900";
            fb.innerHTML = "❌ Ghép cặp chưa chính xác, hãy suy nghĩ lại tác dụng tu từ nhé!";
            
            setTimeout(() => {
                fb.classList.add('hidden');
            }, 2000);
        }

        const termBtn = document.getElementById(`btn-term-100-${selectedTerm100Id}`);
        if (termBtn) {
            termBtn.className = "w-full p-4 text-left border-2 border-sky-200 bg-sky-50/50 rounded-2xl font-semibold text-lg hover:bg-sky-100 transition-all text-gray-800";
        }
        const defBtn = document.getElementById(`btn-def-100-${selectedDef100Id}`);
        if (defBtn) {
            defBtn.className = "w-full p-4 text-left border-2 border-emerald-200 bg-emerald-50/40 rounded-2xl font-bold text-base hover:bg-emerald-100 transition-all text-emerald-950";
        }

        selectedTerm100Id = null;
        selectedDef100Id = null;
    }
}

window.resetMatch100 = function() {
    matchedPairs100 = {};
    selectedTerm100Id = null;
    selectedDef100Id = null;

    const fb = document.getElementById('fb-vn100-bt1');
    if (fb) fb.classList.add('hidden');

    const termTexts = {
        'a': `<strong class="block text-sky-850 mb-1">a. Thơ Chế Lan Viên:</strong>"Ngủ yên, ngủ yên, cò ơi, chớ sợ<br>Cành có mềm mẹ đã sẵn tay nâng."`,
        'b': `<strong class="block text-sky-850 mb-1">b. Ca dao:</strong>"Trong đầm gì đẹp bằng sen<br>Lá xanh, bông trắng, lại chen nhị vàng<br>Nhị vàng, bông trắng, lá xanh<br>Gần bùn mà chẳng hôi tanh mùi bùn."`,
        'c': `<strong class="block text-sky-850 mb-1">c. Văn Nguyễn Phan Hách:</strong>"Thoắt cái, lá vàng rơi trong khoảnh khắc mùa thu. Thoắt cái, trắng long lanh một cơn mưa tuyết trên những cành đào, lê, mận. Thoắt cái, gió xuân hây hẩy..."`
    };

    const defTexts = {
        'b': 'Làm nổi bật các bộ phận của hoa sen, phần nào cũng đẹp đẽ, từ đó nhấn mạnh vẻ đẹp bình dị mà thanh cao của loài hoa này.',
        'c': 'Làm nổi bật sự thay đổi nhanh chóng của vạn vật (sự chuyển đổi thời gian và cảnh sắc thiên nhiên).',
        'a': 'Lặp lại lời vỗ về của "cò mẹ", tạo nên âm hương của lời ru ngọt ngào, qua đó nhấn mạnh tình yêu thương của "cò mẹ" đối với con.'
    };

    for (let k in termTexts) {
        const btn = document.getElementById(`btn-term-100-${k}`);
        if (btn) {
            btn.className = "w-full p-4 text-left border-2 border-sky-200 bg-sky-50/50 rounded-2xl font-semibold text-lg hover:bg-sky-100 transition-all text-gray-800";
            btn.innerHTML = termTexts[k];
        }
    }

    for (let k in defTexts) {
        const btn = document.getElementById(`btn-def-100-${k}`);
        if (btn) {
            btn.className = "w-full p-4 text-left border-2 border-emerald-250 bg-emerald-50/40 rounded-2xl font-bold text-base hover:bg-emerald-100 transition-all text-emerald-950";
            btn.innerHTML = defTexts[k];
        }
    }
};

// Kiểm tra Khởi động
window.kiemTraKhoiDong100 = function() {
    const ans = document.querySelector('input[name="p100-kd-opt"]:checked')?.value;
    const fb = document.getElementById('fb-vn100-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!ans) {
        fb.innerHTML = "⚠️ Em hãy chọn một phương án trả lời nhé!";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-amber-100 text-amber-900";
        return;
    }

    if (ans === 'correct') {
        fb.innerHTML = "🎉 Hoàn toàn chính xác! Điệp từ, điệp ngữ là lặp lại từ/ngữ để nhấn mạnh hoặc tạo nhịp điệu sinh động cho lời văn/thơ.";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-emerald-100 text-emerald-900";
    } else {
        fb.innerHTML = "❌ Chưa chính xác rồi. Lặp từ vô ý sẽ mắc lỗi lặp từ; mục đích tu từ của điệp từ là để nhấn mạnh nội dung hoặc tạo nhịp điệu biểu cảm.";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-rose-100 text-rose-900";
    }
};

// Kiểm tra Bài tập 2
window.kiemTraBai2_100 = function() {
    const dn = document.getElementById('p100-bt2-diepngu').value;
    const td = document.getElementById('p100-bt2-tacdung').value;
    const fb = document.getElementById('fb-vn100-bt2');

    if (!fb) return;
    fb.classList.remove('hidden');

    if (!dn || !td) {
        fb.innerHTML = "⚠️ Em hãy hoàn thành đầy đủ cả hai câu hỏi trước khi kiểm tra nhé!";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-amber-100 text-amber-900 max-w-5xl mx-auto";
        return;
    }

    if (dn === 'aise' && td === 'nhanmanh') {
        fb.innerHTML = "🎉 Rất xuất sắc! Điệp ngữ 'Ai sẽ' lặp lại 3 lần thể hiện thế giới thần tiên đầy sắc màu, ngây thơ dưới góc nhìn ngộ nghĩnh của trẻ thơ.";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-emerald-100 text-emerald-900 max-w-5xl mx-auto";
    } else {
        fb.innerHTML = "❌ Lựa chọn chưa chính xác rồi. Em hãy chú ý cụm từ được lặp đi lặp lại ở đầu mỗi câu hỏi thơ và mục đích biểu cảm của nó nhé!";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-rose-100 text-rose-900 max-w-5xl mx-auto";
    }
};

// Chấm tự luận Bài tập 3 bằng AI Thầy E
window.kiemTraBai3_100 = function() {
    const text = document.getElementById('ans-vn100-vietvan').value.trim();
    const fb = document.getElementById('fb-vn100-writing');

    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E nhắc nhở:</h5>
                    <p class="text-lg">Em gõ câu văn thể hiện cảm xúc của mình vào ô trống trước khi gửi Thầy E nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300";
        return;
    }

    // Kiểm tra điệp từ (có từ lặp lại ít nhất 2 lần)
    const rawWords = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(/\s+/);
    const wordCounts = {};
    let hasRepetition = false;
    let repeatedWord = "";

    // Bỏ qua các hư từ quá ngắn hoặc phổ biến nếu muốn, nhưng để đơn giản ta đếm các từ có độ dài >= 2 kí tự
    for (let w of rawWords) {
        if (w.length >= 2) {
            wordCounts[w] = (wordCounts[w] || 0) + 1;
            if (wordCounts[w] >= 2) {
                hasRepetition = true;
                repeatedWord = w;
            }
        }
    }

    if (!hasRepetition) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-rose-900">AI Thầy E nhận xét:</h5>
                    <p class="text-lg mb-2">Câu văn của em có ý hay nhưng chưa sử dụng biện pháp tu từ điệp từ, điệp ngữ. Em hãy thử lặp lại một số từ/cụm từ cảm xúc như: *yêu, thương, nhớ, thấy, thoắt cái...* nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold bg-rose-100 text-rose-900 border border-rose-300";
        return;
    }

    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-900">AI Thầy E nhận xét:</h5>
                <p class="text-lg mb-2">Rất tốt! Em đã sử dụng thành công biện pháp điệp từ với từ được lặp lại là <strong class="text-emerald-950">"${repeatedWord}"</strong>. Câu văn của em viết rất có cảm xúc và đúng ngữ pháp!</p>
                <span class="text-xl font-black bg-emerald-500 text-white px-2 py-0.5 rounded">Hoàn thành bài tập 100%</span>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold bg-emerald-100 text-emerald-900 border border-emerald-300";
};

// Nộp bài toàn cục
window.submitVn100Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 100',
            '📝',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎉</span><p class="text-lg md:text-2xl font-bold text-emerald-800">Chúc mừng em đã hoàn thành bài học Luyện tập về điệp từ, điệp ngữ!</p><p class="text-lg text-gray-700 mt-3">Hãy sử dụng khéo léo biện pháp điệp từ để bài văn viết của mình sinh động, hấp dẫn hơn nhé!</p></div>'
        );
    } else {
        alert("Chúc mừng em đã hoàn thành bài học Luyện tập về điệp từ, điệp ngữ!");
    }
};
