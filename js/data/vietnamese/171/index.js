export const lesson171 = {
    "topic": "Tiếng Việt 5",
    "week": "25",
    "period": "171",
    "title": "VIẾT: TÌM HIỂU CÁCH VIẾT CHƯƠNG TRÌNH HOẠT ĐỘNG",
    "desc": "Học sinh phân tích cấu trúc, mục đích và cách lập một bản chương trình hoạt động tập thể qua bài viết mẫu và thực hành nhận diện các mục chính.",
    "subject": "Viết",
    "theme": "Hương sắc trăm miền",
    "audio": "",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-blue-600 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-blue-950 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Hiểu được mục đích, tác dụng và cấu trúc cơ bản của một bản chương trình hoạt động tập thể.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Nắm vững cách viết các phần chính: Mục đích, Thời gian và địa điểm, Chuẩn bị, Kế hoạch thực hiện.
            </li>
        </ul>
    </div>

    <!-- 📖 PHẦN 1: PHÂN TÍCH MẪU CHƯƠNG TRÌNH -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">❓</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Phân tích bản chương trình mẫu</h3>
        </div>

        <div class="p-6 md:p-8 bg-amber-50/40 rounded-[32px] border-2 border-amber-200/60 shadow-lg space-y-6">
            <!-- Header của Chương trình -->
            <div class="text-center space-y-2">
                <h4 class="text-2xl md:text-3xl font-black text-rose-600">Chương trình "Tiết học biên cương"</h4>
                <div class="w-24 h-1.5 bg-rose-400 mx-auto rounded-full"></div>
            </div>

            <!-- Các mục chương trình thiết kế 1 cột dọc -->
            <div class="space-y-6 text-lg md:text-xl font-bold text-gray-800 leading-relaxed">
                <!-- (1) Mục đích -->
                <div class="bg-white p-5 rounded-2xl border border-amber-100 shadow-sm space-y-2">
                    <span class="text-blue-700 font-black text-xl md:text-2xl block">(1) Mục đích</span>
                    <ul class="list-disc pl-6 space-y-1">
                        <li>Hưởng ứng ngày Biên phòng toàn dân, tìm hiểu về cột mốc biên giới và nhiệm vụ của người dân trong việc bảo vệ cột mốc biên giới.</li>
                        <li>Có ý thức tham gia các công việc vừa sức để góp phần bảo vệ cột mốc biên giới.</li>
                    </ul>
                </div>

                <!-- (2) Thời gian và địa điểm -->
                <div class="bg-white p-5 rounded-2xl border border-amber-100 shadow-sm space-y-2">
                    <span class="text-blue-700 font-black text-xl md:text-2xl block">(2) Thời gian và địa điểm</span>
                    <ul class="list-disc pl-6 space-y-1">
                        <li><strong class="text-slate-700">Thời gian:</strong> Từ 7 giờ 30 đến 10 giờ 30 ngày 03 tháng 3 năm 2025.</li>
                        <li><strong class="text-slate-700">Địa điểm:</strong> Đài quan sát của đồn biên phòng.</li>
                    </ul>
                </div>

                <!-- (3) Chuẩn bị -->
                <div class="bg-white p-5 rounded-2xl border border-amber-100 shadow-sm space-y-2">
                    <span class="text-blue-700 font-black text-xl md:text-2xl block">(3) Chuẩn bị</span>
                    <ul class="list-disc pl-6 space-y-1">
                        <li>Thành lập Ban tổ chức (giáo viên chủ nhiệm, phụ huynh học sinh, cán bộ bộ lớp).</li>
                        <li>Ban tổ chức liên hệ với đồn biên phòng, thuê xe,...</li>
                        <li>Học sinh chuẩn bị câu hỏi về cột mốc và đường biên giới, về công việc của bộ đội biên phòng.</li>
                    </ul>
                </div>

                <!-- (4) Kế hoạch thực hiện -->
                <div class="bg-white p-5 rounded-2xl border border-amber-100 shadow-sm space-y-3">
                    <span class="text-blue-700 font-black text-xl md:text-2xl block">(4) Kế hoạch thực hiện</span>
                    <p class="text-base text-slate-500 italic mb-2">(Các hoạt động tại Đài quan sát của đồn biên phòng)</p>
                    
                    <!-- Timeline dọc thay cho bảng truyền thống, tối ưu cho TV/máy chiếu -->
                    <div class="space-y-4 border-l-4 border-rose-200 pl-4 md:pl-6 ml-2">
                        <div class="relative space-y-1">
                            <span class="absolute -left-[26px] md:-left-[34px] top-1 w-4 h-4 md:w-5 md:h-5 bg-rose-500 rounded-full border-4 border-white shadow"></span>
                            <p class="text-rose-600 font-black text-base md:text-lg">8 giờ 00 – 8 giờ 15</p>
                            <p class="text-lg md:text-xl font-bold text-gray-800">Tham quan Đài quan sát và cột mốc.</p>
                            <p class="text-sm md:text-base text-gray-500 font-medium">👤 Người phụ trách: Ban tổ chức</p>
                        </div>
                        
                        <div class="relative space-y-1">
                            <span class="absolute -left-[26px] md:-left-[34px] top-1 w-4 h-4 md:w-5 md:h-5 bg-rose-500 rounded-full border-4 border-white shadow"></span>
                            <p class="text-rose-600 font-black text-base md:text-lg">8 giờ 15 – 9 giờ 00</p>
                            <p class="text-lg md:text-xl font-bold text-gray-800">Nghe giới thiệu về lịch sử hình thành cột mốc, việc quản lí và bảo vệ cột mốc.</p>
                            <p class="text-sm md:text-base text-gray-500 font-medium">👤 Người phụ trách: Cán bộ đồn biên phòng</p>
                        </div>

                        <div class="relative space-y-1">
                            <span class="absolute -left-[26px] md:-left-[34px] top-1 w-4 h-4 md:w-5 md:h-5 bg-rose-500 rounded-full border-4 border-white shadow"></span>
                            <p class="text-rose-600 font-black text-base md:text-lg">9 giờ 00 – 9 giờ 15</p>
                            <p class="text-lg md:text-xl font-bold text-gray-800">Nêu câu hỏi về cột mốc, biên giới và công việc của các cán bộ, chiến sĩ biên phòng.</p>
                            <p class="text-sm md:text-base text-gray-500 font-medium">👤 Người phụ trách: Cán bộ đồn biên phòng</p>
                        </div>

                        <div class="relative space-y-1">
                            <span class="absolute -left-[26px] md:-left-[34px] top-1 w-4 h-4 md:w-5 md:h-5 bg-rose-500 rounded-full border-4 border-white shadow"></span>
                            <p class="text-rose-600 font-black text-base md:text-lg">9 giờ 15 – 10 giờ 00</p>
                            <p class="text-lg md:text-xl font-bold text-gray-800">Giao lưu văn nghệ và chụp ảnh kỉ niệm.</p>
                            <p class="text-sm md:text-base text-gray-500 font-medium">👤 Người phụ trách: Ban tổ chức</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Chữ ký người đại diện -->
            <div class="text-right pt-4 border-t border-amber-100">
                <p class="text-gray-500 font-bold text-base">Lớp trưởng</p>
                <p class="serif-font font-black text-xl text-gray-900 mt-2 italic">Hà</p>
                <p class="font-black text-gray-850 text-lg">Nguyễn Ngọc Hà</p>
            </div>
        </div>
    </div>

    <!-- 💡 PHẦN 2: CÂU HỎI THẢO LUẬN -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">2</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Trao đổi & Tìm hiểu</h3>
        </div>

        <div class="space-y-4">
            <!-- Q1 -->
            <div class="accordion-item bg-slate-50 rounded-2xl border border-gray-150 overflow-hidden">
                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                    <span class="font-bold text-gray-850 text-xl group-hover:text-blue-600">a. Chương trình trên nhằm triển khai hoạt động nào?</span>
                    <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 ml-2 group-hover:bg-blue-100 transition-colors"><span class="text-blue-600 font-bold">?</span></div>
                </button>
                <div class="accordion-content">
                    <div class="px-6 pb-6 pt-4 text-gray-700 text-xl leading-relaxed border-t border-gray-200 bg-white">
                        <p>Chương trình nhằm triển khai hoạt động ngoại khóa tìm hiểu về đường biên giới mang tên: <strong>“Tiết học biên cương”</strong>.</p>
                    </div>
                </div>
            </div>

            <!-- Q2 -->
            <div class="accordion-item bg-slate-50 rounded-2xl border border-gray-150 overflow-hidden">
                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                    <span class="font-bold text-gray-850 text-xl group-hover:text-blue-600">b. Chương trình gồm có mấy mục? Đó là những mục nào?</span>
                    <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 ml-2 group-hover:bg-blue-100 transition-colors"><span class="text-blue-600 font-bold">?</span></div>
                </button>
                <div class="accordion-content">
                    <div class="px-6 pb-6 pt-4 text-gray-700 text-xl leading-relaxed border-t border-gray-200 bg-white">
                        <p>Chương trình gồm có <strong>4 mục chính</strong> theo thứ tự:</p>
                        <ul class="list-decimal pl-6 space-y-1 mt-2">
                            <li>(1) Mục đích</li>
                            <li>(2) Thời gian và địa điểm</li>
                            <li>(3) Chuẩn bị</li>
                            <li>(4) Kế hoạch thực hiện</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Q3 -->
            <div class="accordion-item bg-slate-50 rounded-2xl border border-gray-150 overflow-hidden">
                <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                    <span class="font-bold text-gray-850 text-xl group-hover:text-blue-600">c. Mỗi mục gồm những nội dung gì?</span>
                    <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 ml-2 group-hover:bg-blue-100 transition-colors"><span class="text-blue-600 font-bold">?</span></div>
                </button>
                <div class="accordion-content">
                    <div class="px-6 pb-6 pt-4 text-gray-700 text-xl leading-relaxed border-t border-gray-200 bg-white space-y-3">
                        <p><strong>• Mục đích:</strong> Nêu rõ ý nghĩa, tác dụng của hoạt động đối với tập thể và cá nhân học sinh.</p>
                        <p><strong>• Thời gian và địa điểm:</strong> Quy định rõ thời gian tổ chức hoạt động cụ thể (ngày, giờ) và vị trí diễn ra hoạt động để chuẩn bị.</p>
                        <p><strong>• Chuẩn bị:</strong> Phân công nhiệm vụ cụ thể cho từng cá nhân, ban bệ để chuẩn bị cơ sở vật chất, nội dung.</p>
                        <p><strong>• Kế hoạch thực hiện:</strong> Lập thời gian biểu chi tiết của hoạt động, phân chia nội dung công việc và chỉ rõ người phụ trách từng phần.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 📘 PHẦN 3: GHI NHỚ -->
    <div class="bg-gradient-to-r from-blue-600 to-sky-500 rounded-[36px] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden transform hover:scale-[1.01] transition-transform">
        <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute left-0 bottom-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div class="flex flex-col items-center text-center relative z-10 space-y-4">
            <span class="text-4xl md:text-5xl">📌</span>
            <h3 class="text-3xl md:text-4xl font-black uppercase tracking-widest">GHI NHỚ</h3>
            <div class="w-32 h-1.5 bg-white/35 rounded-full mb-4"></div>
            <div class="text-xl md:text-2xl font-bold leading-relaxed max-w-4xl text-left bg-white/10 p-6 rounded-3xl border border-white/20">
                <p class="text-center font-black">
                    Chương trình hoạt động thường được trình bày theo các mục:<br>
                    <span class="text-yellow-300">mục đích</span>, <span class="text-yellow-300">thời gian và địa điểm</span>, <span class="text-yellow-300">chuẩn bị</span>, <span class="text-yellow-300">kế hoạch thực hiện</span>,...
                </p>
            </div>
        </div>
    </div>

    <!-- 🏡 HOẠT ĐỘNG VỀ NHÀ / MỞ RỘNG -->
    <div class="bg-emerald-50/70 p-6 md:p-8 rounded-[32px] border border-emerald-200 shadow-md flex items-start gap-4">
        <span class="text-4xl md:text-5xl">🏡</span>
        <div>
            <h4 class="text-xl md:text-2xl font-black text-emerald-950 mb-2">Hoạt động cùng người thân</h4>
            <p class="text-lg md:text-xl font-bold text-emerald-800">
                Tìm đọc 2 – 3 bài ca dao về di tích lịch sử, lễ hội truyền thống hoặc sản vật độc đáo của các địa phương nước ta và chia sẻ cho người thân cùng nghe.
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-700">
    <div class="bg-gradient-to-r from-blue-600 to-sky-500 p-6 md:p-8 rounded-[32px] text-white shadow-xl relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div class="flex justify-end items-center gap-4">
            <span class="p-3 bg-white/20 rounded-2xl text-2xl md:text-3xl shadow-inner">✍️</span>
            <div>
                <h3 class="text-2xl md:text-3xl font-black uppercase tracking-tight">LUYỆN TẬP PHÂN TÍCH CHƯƠNG TRÌNH</h3>
                <p class="text-lg md:text-xl font-bold opacity-90 mt-1">Trả lời câu hỏi tìm hiểu cấu trúc của bản chương trình</p>
            </div>
        </div>
    </div>
    
    <div class="bg-white rounded-[32px] shadow-2xl p-6 md:p-8 border border-gray-100 space-y-6">
        <h4 class="text-xl md:text-2xl font-black text-blue-950 block">
            Câu hỏi: Theo em, nếu một bản chương trình hoạt động thiếu đi phần "Phân công chuẩn bị" hoặc "Kế hoạch thực hiện" thì hoạt động đó khi diễn ra sẽ gặp những khó khăn gì?
        </h4>
        
        <textarea id="viet171-writing" rows="8" 
            class="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-xl md:text-2xl serif-font leading-relaxed" 
            placeholder="Em hãy viết suy nghĩ của mình tại đây... (Ví dụ: Nếu thiếu đi kế hoạch thực hiện thì mọi người sẽ lúng túng, không biết mấy giờ bắt đầu việc gì...)"></textarea>

        <!-- Feedback Box -->
        <div id="fb-viet171-writing" class="hidden p-6 rounded-2xl bg-blue-50 border-2 border-blue-200 text-lg md:text-xl font-bold text-blue-600 shadow-inner"></div>

        <div class="flex justify-end items-center gap-4"><button onclick="checkViet171AI();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
    </div>

    <!-- Submit Action -->
    <div class="flex justify-center py-4">
        <button onclick="submitViet171()" class="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-10 py-5 rounded-[2rem] font-black text-xl md:text-3xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4">
            <span class="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-rose-600 font-black text-base shadow-sm">E</span>
            <span>NỘP BÀI HOÀN THÀNH</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Bản chương trình hoạt động thường được lập ra vào thời điểm nào?",
            "options": [
                "Trước khi tiến hành một hoạt động tập thể nào đó",
                "Sau khi hoạt động đã diễn ra và kết thúc thành công",
                "Trong quá trình đang diễn ra các hoạt động chính",
                "Bất kỳ thời điểm nào không cần lên kế hoạch trước"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Mục đầu tiên thường gặp trong một bản chương trình hoạt động là gì?",
            "options": [
                "Thời gian và địa điểm cụ thể",
                "Mục đích của hoạt động",
                "Kế hoạch thực hiện chi tiết",
                "Các khâu phân công chuẩn bị"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Bản chương trình hoạt động thường bao gồm mấy phần chính?",
            "options": [
                "2 phần chính",
                "3 phần chính",
                "4 phần chính trở lên",
                "1 phần duy nhất"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Mục 'Mục đích' trong bản chương trình hoạt động nhằm nêu rõ nội dung gì?",
            "options": [
                "Thời gian bắt đầu hoạt động",
                "Phân công cụ thể cho từng thành viên",
                "Ý nghĩa, mục tiêu và tác dụng mang lại của hoạt động",
                "Tổng số tiền kinh phí dự trù"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Mục 'Thời gian và địa điểm' cung cấp thông tin gì quan trọng?",
            "options": [
                "Thời điểm bắt đầu, kết thúc và vị trí chính xác diễn ra hoạt động",
                "Danh sách tất cả các đại biểu tham dự",
                "Chi tiết kế hoạch theo từng phút của buổi lễ",
                "Tên và địa chỉ nhà của lớp trưởng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong bản chương trình mẫu, địa điểm tổ chức hoạt động 'Tiết học biên cương' ở đâu?",
            "options": [
                "Tại phòng học của lớp 5",
                "Đài quan sát của đồn biên phòng",
                "Khu trung tâm công viên thành phố",
                "Nhà văn hóa của phường/xã"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Mục 'Chuẩn bị' trong bản chương trình thường ghi chép nội dung gì?",
            "options": [
                "Các công việc cần làm trước và phân công cụ thể người phụ trách",
                "Kết quả và thành tựu thu được sau chuyến đi thực tế",
                "Thời lượng cụ thể của từng hoạt động giao lưu",
                "Bài phát biểu chào mừng của lớp trưởng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Kế hoạch thực hiện trong bản chương trình hoạt động thường sắp xếp theo trình tự nào?",
            "options": [
                "Trình tự thời gian diễn ra từ trước đến sau",
                "Sắp xếp hoàn toàn ngẫu nhiên cho sinh động",
                "Theo trình tự vị trí và mức độ quan trọng của người phụ trách",
                "Theo thứ tự bảng chữ cái của nội dung công việc"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Ai là người ký tên đại diện chịu trách nhiệm lập chương trình 'Tiết học biên cương'?",
            "options": [
                "Thầy giáo hiệu trưởng nhà trường",
                "Lớp trưởng Nguyễn Ngọc Hà",
                "Đồng chí đồn trưởng đồn biên phòng",
                "Trưởng ban phụ huynh học sinh lớp"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Lợi ích lớn nhất của việc lập một bản chương trình hoạt động trước khi làm là gì?",
            "options": [
                "Để giáo viên chủ nhiệm chấm điểm thi đua",
                "Giúp hoạt động diễn ra nề nếp, chủ động, đạt mục đích và hạn chế sai sót",
                "Để lưu giữ làm kỷ niệm sau này",
                "Để kéo dài thời gian vui chơi ngoại khóa"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Mục 'Kế hoạch thực hiện' thường gồm những cột thông tin cơ bản nào?",
            "options": [
                "Thời gian, nội dung công việc cụ thể, người phụ trách",
                "Tên học sinh, điểm số học tập, nhận xét của giáo viên",
                "Địa chỉ đồn biên phòng, số điện thoại, bảng giá dịch vụ",
                "Đồ ăn sáng, đồ ăn trưa, dụng cụ mang theo cá nhân"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi lập chương trình, phần phân công chuẩn bị cần lưu ý điều gì?",
            "options": [
                "Phân công công việc rõ ràng, cụ thể, phân rõ trách nhiệm và vừa sức",
                "Giao toàn bộ công việc cho một người làm hết",
                "Để mọi người tự phán đoán và tự làm theo ý mình",
                "Không cần chỉ định tên người phụ trách cho thoải mái"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Mục đích chủ đạo của hoạt động 'Tiết học biên cương' là gì?",
            "options": [
                "Hưởng ứng ngày Biên phòng toàn dân, tìm hiểu cột mốc và có ý thức bảo vệ cột mốc biên giới",
                "Tạo chuyến đi dã ngoại giải trí thuần túy cho học sinh cuối năm",
                "Để học sinh được nghỉ học lý thuyết trên lớp",
                "Tổ chức giải thi đấu thể thao giữa trường và đồn biên phòng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi trao đổi thảo luận góp ý cho bản chương trình, học sinh cần tập trung điều gì?",
            "options": [
                "Các hoạt động chuẩn bị và cách lập kế hoạch thực hiện cho hợp lý",
                "Quan tâm xem món ăn trưa có những món gì",
                "Nêu các ý kiến cá nhân ngoài chủ đề chuyến đi",
                "Bàn về địa điểm đi chơi cho lần tiếp theo"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Một chương trình hoạt động thường do ai chịu trách nhiệm lập?",
            "options": [
                "Ban tổ chức hoặc người đại diện cho tập thể (như ban cán sự lớp)",
                "Cán bộ chiến sĩ tại địa điểm tham quan",
                "Đại diện hội phụ huynh toàn trường",
                "Tất cả các học sinh trong lớp cùng nhau viết chung một bản"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- LOGIC PHẦN TƯƠNG TÁC ---
window.checkViet171AI = async function() {
    const input = document.getElementById("viet171-writing");
    if (!input || !input.value.trim()) {
        if (typeof window.UI !== 'undefined' && window.UI.showToast) {
            window.UI.showToast("Em hãy viết câu trả lời trước khi gửi nhé! ✏️", "error", 3000);
        } else {
            alert("Em hãy viết câu trả lời trước khi gửi nhé! ✏️");
        }
        return;
    }

    const fb = document.getElementById("fb-viet171-writing");
    fb.classList.remove("hidden");
    fb.innerHTML = `
        <div class="flex items-center gap-3 text-green-700 animate-pulse">
            <div class="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center text-white font-black text-[10px] shadow-sm">E</div>
            <span class="font-bold italic">Thầy giáo đang chấm bài tự luận của em...</span>
        </div>`;

    if (typeof askAI === 'function') {
        const prompt = `Em hãy đóng vai thầy giáo EduRobot để nhận xét câu trả lời tự luận lớp 5.
        Đề bài: "Theo em, nếu một bản chương trình hoạt động thiếu đi phần 'Phân công chuẩn bị' hoặc 'Kế hoạch thực hiện' thì hoạt động đó khi diễn ra sẽ gặp những khó khăn gì?"
        Câu trả lời của học sinh:
        "${input.value.trim()}"

        Hãy nhận xét cụ thể:
        1. Học sinh có nêu được các hậu quả thực tế như: lúng túng khi thực hiện, chồng chéo công việc, thiếu dụng cụ, trễ thời gian, không ai chịu trách nhiệm... không?
        2. Khen ngợi ý chí và tư duy tổ chức của học sinh.
        3. Khuyên học sinh luôn lập chương trình trước các sự kiện tập thể.
        Sử dụng ngôn ngữ khích lệ, thân thiện của giáo viên.`;

        await askAI('viet171-writing', prompt, 'single', 'tlv', 25);
    } else {
        fb.innerHTML = "✅ Câu trả lời của em rất xuất sắc! Nếu thiếu các phần này, hoạt động chắc chắn sẽ gặp tình trạng lộn xộn, chồng chéo công việc và không đạt được mục tiêu đề ra.";
    }
};

window.submitViet171 = function() {
    const input = document.getElementById("viet171-writing");
    const text = input ? input.value.trim() : "";

    if (!text) {
        if (typeof window.UI !== 'undefined' && window.UI.showToast) {
            window.UI.showToast("Em hãy viết câu trả lời trước khi nộp nhé! ✏️", "warning", 3000);
        } else {
            alert("Em hãy viết câu trả lời trước khi nộp nhé! ✏️");
        }
        return;
    }

    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Đã nộp bài thành công',
            '🎉',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🏆</span><p class="text-xl md:text-2xl font-bold text-emerald-800">Chúc mừng em đã hoàn thành bài viết!</p><p class="text-xl text-gray-800 mt-3">Em đã hiểu rõ cách lập một bản chương trình hoạt động nề nếp, hiệu quả!</p></div>'
        );
    } else {
        alert("Đã nộp bài cho thầy giáo thành công! 🎉");
    }
};