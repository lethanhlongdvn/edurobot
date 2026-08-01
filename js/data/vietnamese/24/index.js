export const lesson24 = {
    "topic": "Tiếng Việt 5",
    "week": "4",
    "period": "24",
    "title": "VIẾT: VIẾT BÁO CÁO CÔNG VIỆC",
    "desc": "Bài học hướng dẫn học sinh thực hành lập ý tưởng, thiết lập bảng số liệu và viết hoàn chỉnh một bản báo cáo công việc của tổ/lớp hoặc chi đội theo đúng quy chuẩn hành chính.",
    "subject": "Viết",
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
        <ul class="space-y-3 text-sky-800 font-bold text-2xl md:text-3xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Biết cách chuẩn bị thông tin (Ưu điểm, Hạn chế), lập bảng thống kê số liệu cho bản báo cáo.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Thực hành viết hoàn chỉnh bản báo cáo công việc theo Đề 1 hoặc Đề 2 đúng bố cục 3 phần.
            </li>
        </ul>
    </div>

    <!-- 1. CHUẨN BỊ (CHỌN ĐỀ & LẬP DÀN Ý) -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">1</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">1. Chọn đề bài & Lập dàn ý chuẩn bị</h3>
        </div>

        <!-- Chọn đề bài -->
        <div class="bg-sky-50/30 p-4 rounded-2xl border border-sky-100 space-y-3">
            <p class="font-bold text-sky-800">👉 Bước 1: Em hãy chọn 1 trong 2 đề bài dưới đây để thực hành:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button onclick="selectDe24(1)" id="btn-de-1" class="p-4 bg-sky-600 text-white font-black rounded-2xl text-left border border-sky-100 transition-all text-xl md:text-2xl shadow-md">
                    📌 Đề 1: Trong vai tổ trưởng hoặc lớp trưởng, báo cáo thầy cô về các hoạt động của tổ hoặc lớp trong tháng qua.
                </button>
                <button onclick="selectDe24(2)" id="btn-de-2" class="p-4 bg-white text-sky-800 font-bold rounded-2xl text-left border-2 border-sky-100 transition-all text-xl md:text-2xl shadow-sm hover:bg-sky-50">
                    📌 Đề 2: Trong vai chi đội trưởng, báo cáo thầy cô Tổng phụ trách Đội về các hoạt động của chi đội trong tháng qua.
                </button>
            </div>
        </div>

        <!-- Form lập ý tưởng (Ưu điểm & Hạn chế) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <!-- Cột ưu điểm -->
            <div class="bg-emerald-50/30 p-6 rounded-3xl border border-emerald-100 space-y-4">
                <h4 class="font-black text-emerald-800 text-lg flex items-center gap-2">
                    <span class="px-2 py-0.5 bg-emerald-600 text-white rounded-lg text-xs">✔️</span> Ưu điểm (Thành tích)
                </h4>
                <div class="space-y-3">
                    <div>
                        <label class="text-xs font-black text-emerald-800 block">🔹 Những việc hoàn thành tốt:</label>
                        <textarea id="p24-uu-viec" rows="2" placeholder="Ví dụ: Cả tổ học bài đầy đủ, trực nhật sạch sẽ..." class="w-full p-2 border border-gray-100 rounded-lg text-sm font-semibold mt-1 bg-white"></textarea>
                    </div>
                    <div>
                        <label class="text-xs font-black text-emerald-800 block">🔹 Thành viên tích cực:</label>
                        <input type="text" id="p24-uu-mem" placeholder="Ví dụ: Bạn Nguyễn Đức Việt, bạn Hoàng Hà Phương..." class="w-full p-2 border border-gray-100 rounded-lg text-sm font-semibold mt-1 bg-white">
                    </div>
                </div>
            </div>

            <!-- Cột hạn chế -->
            <div class="bg-rose-50/30 p-6 rounded-3xl border border-rose-100 space-y-4">
                <h4 class="font-black text-rose-800 text-lg flex items-center gap-2">
                    <span class="px-2 py-0.5 bg-rose-600 text-white rounded-lg text-xs">⚠️</span> Hạn chế (Tồn tại)
                </h4>
                <div class="space-y-3">
                    <div>
                        <label class="text-xs font-black text-rose-800 block">🔹 Việc chưa hoàn thành & Lý do:</label>
                        <textarea id="p24-hc-viec" rows="2" placeholder="Ví dụ: Còn hiện tượng nói chuyện riêng vì chưa tập trung nghe giảng..." class="w-full p-2 border border-gray-100 rounded-lg text-sm font-semibold mt-1 bg-white"></textarea>
                    </div>
                    <div>
                        <label class="text-xs font-black text-rose-800 block">🔹 Thành viên cần cố gắng thêm:</label>
                        <input type="text" id="p24-hc-mem" placeholder="Ví dụ: Bạn Lê Gia Bách..." class="w-full p-2 border border-gray-100 rounded-lg text-sm font-semibold mt-1 bg-white">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 2. LẬP BẢNG SỐ LIỆU TƯƠNG TÁC -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">📊</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Lập bảng số liệu thống kê</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Trước khi viết báo cáo, hãy lập bảng thống kê thành tích của các bạn xuất sắc trong tháng</p>
            </div>
        </div>

        <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-100 text-xl md:text-2xl font-bold">
                <thead class="bg-sky-50/70">
                    <tr>
                        <th class="border border-gray-100 p-2 text-center w-16">TT</th>
                        <th class="border border-gray-100 p-2 text-left w-56">Họ và tên</th>
                        <th class="border border-gray-100 p-2 text-left">Thành tích xuất sắc</th>
                        <th class="border border-gray-100 p-2 text-left w-44">Hoạt động / Môn học</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-100 p-2 text-center">1</td>
                        <td class="border border-gray-100 p-2"><input type="text" id="t24-name-1" value="Nguyễn Đức Việt" class="w-full p-1 border-0 outline-none font-bold"></td>
                        <td class="border border-gray-100 p-2"><input type="text" id="t24-ach-1" value="Giải bài tập thông minh" class="w-full p-1 border-0 outline-none font-bold"></td>
                        <td class="border border-gray-100 p-2"><input type="text" id="t24-sub-1" value="Toán" class="w-full p-1 border-0 outline-none font-bold text-sky-800"></td>
                    </tr>
                    <tr>
                        <td class="border border-gray-100 p-2 text-center">2</td>
                        <td class="border border-gray-100 p-2"><input type="text" id="t24-name-2" value="Hoàng Hà Phương" class="w-full p-1 border-0 outline-none font-bold"></td>
                        <td class="border border-gray-100 p-2"><input type="text" id="t24-ach-2" value="Kể chuyện sáng tạo" class="w-full p-1 border-0 outline-none font-bold"></td>
                        <td class="border border-gray-100 p-2"><input type="text" id="t24-sub-2" value="Tiếng Việt" class="w-full p-1 border-0 outline-none font-bold text-sky-800"></td>
                    </tr>
                    <tr>
                        <td class="border border-gray-100 p-2 text-center">3</td>
                        <td class="border border-gray-100 p-2"><input type="text" id="t24-name-3" placeholder="Nhập tên..." class="w-full p-1 border-0 outline-none font-bold"></td>
                        <td class="border border-gray-100 p-2"><input type="text" id="t24-ach-3" placeholder="Nhập thành tích..." class="w-full p-1 border-0 outline-none font-bold"></td>
                        <td class="border border-gray-100 p-2"><input type="text" id="t24-sub-3" placeholder="Ví dụ: Khoa học..." class="w-full p-1 border-0 outline-none font-bold text-sky-800"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 3. TRÌNH VIẾT BÁO CÁO THỰC TẾ (GIẢ LẬP GIẤY KẺ NGANG) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <div class="border-b border-sky-100 pb-4">
                <span class="text-sky-900 font-black text-xl md:text-3xl flex items-center gap-2">
                    <span>📝</span> 2. Thực hành viết báo cáo
                </span>
                <p class="text-sm font-bold text-gray-800 mt-1">Gõ nội dung hoàn thiện bản báo cáo vào các ô tương ứng dưới đây theo định dạng chuẩn hành chính:</p>
            </div>

            <!-- Khung giấy viết giả lập thay đổi động theo đề -->
            <div class="bg-amber-50/20 p-6 md:p-10 rounded-[32px] border-2 border-amber-100 shadow-inner space-y-6 relative text-gray-900 text-2xl md:text-3xl leading-relaxed max-w-4xl mx-auto font-semibold">
                
                <!-- DYNAMIC HEADER -->
                <div id="p24-header-layout-1" class="space-y-4">
                    <div class="text-center font-black">
                        <p class="uppercase text-gray-800 tracking-wide text-2xl md:text-3xl">CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                        <p class="underline text-2xl md:text-3xl">Độc lập – Tự do – Hạnh phúc</p>
                    </div>
                </div>
                
                <div id="p24-header-layout-2" class="hidden flex justify-between items-start font-black text-gray-800 text-xl md:text-2xl">
                    <div class="space-y-1">
                        <input type="text" id="p24-in-liendoi" value="LIÊN ĐỘI TRƯỜNG KIM ĐỒNG" class="w-64 p-1.5 border border-sky-100 rounded font-bold bg-white text-xs md:text-sm">
                        <input type="text" id="p24-in-chidoi" value="Chi đội: 5C" class="w-48 p-1.5 border border-sky-100 rounded font-bold bg-white text-xs md:text-sm block">
                    </div>
                    <div class="text-right">
                        <p class="uppercase">ĐỘI THIẾU NIÊN TIỀN PHONG HỒ CHÍ MINH</p>
                    </div>
                </div>

                <!-- ĐỊA ĐIỂM NGÀY THÁNG -->
                <div class="flex justify-end">
                    <input type="text" id="p24-in-date" placeholder="Sa Pa, ngày 30 tháng 10 năm 2024..." class="w-72 p-2 border border-sky-100 rounded font-bold bg-white text-sm text-right">
                </div>

                <!-- TIÊU ĐỀ BÁO CÁO -->
                <div class="text-center space-y-2">
                    <input type="text" id="p24-in-title" value="BÁO CÁO HOẠT ĐỘNG THÁNG 10" class="w-full max-w-lg p-2.5 border-2 border-sky-100 rounded-xl font-black text-center text-2xl md:text-3xl uppercase text-sky-800 bg-white">
                </div>

                <!-- KÍNH GỬI -->
                <div class="pl-4 flex items-center gap-2">
                    <span class="text-sky-900 font-black">Kính gửi:</span>
                    <input type="text" id="p24-in-dear" placeholder="Cô giáo chủ nhiệm lớp 5C / Thầy Tổng phụ trách Đội..." class="p-2 border border-sky-100 rounded font-bold bg-white text-sm w-full max-w-md">
                </div>

                <!-- NỘI DUNG CHÍNH -->
                <div class="space-y-4">
                    <textarea id="p24-in-intro" rows="2" placeholder="Em xin báo cáo các hoạt động của tổ/lớp/chi đội trong tháng 10 vừa qua như sau..." class="w-full p-3 border border-sky-100 rounded-xl font-bold bg-white text-xl md:text-2xl"></textarea>
                    
                    <div>
                        <label class="text-xs font-black text-sky-800">1. Về học tập (Dùng gạch đầu dòng báo cáo công việc đã làm):</label>
                        <textarea id="p24-in-body1" rows="3" placeholder="- Cả tổ tích cực học tập, đạt nhiều điểm 10...&#10;- Các bạn hăng hái phát biểu ý kiến..." class="w-full p-3 border border-sky-100 rounded-xl font-bold bg-white text-xl md:text-2xl mt-1"></textarea>
                    </div>

                    <div>
                        <label class="text-xs font-black text-sky-800">2. Về nề nếp kỷ luật & nội quy trường lớp:</label>
                        <textarea id="p24-in-body2" rows="3" placeholder="- Đi học đúng giờ, mặc đúng đồng phục...&#10;- Không xả rác bừa bãi..." class="w-full p-3 border border-sky-100 rounded-xl font-bold bg-white text-xl md:text-2xl mt-1"></textarea>
                    </div>

                    <div>
                        <label class="text-xs font-black text-sky-800">3. Về các hoạt động khác & đề xuất:</label>
                        <textarea id="p24-in-body3" rows="3" placeholder="- Tham gia làm báo tường chào mừng ngày nhà giáo...&#10;- Tuyên dương bạn Việt..." class="w-full p-3 border border-sky-100 rounded-xl font-bold bg-white text-xl md:text-2xl mt-1"></textarea>
                    </div>
                </div>

                <!-- CHỮ KÝ VÀ HỌ TÊN -->
                <div class="flex flex-col items-end pr-8 space-y-2">
                    <div id="p24-sign-layout-1" class="text-center font-black">
                        <p class="uppercase text-gray-800 text-xs md:text-sm">TỔ TRƯỞNG</p>
                        <input type="text" id="p24-in-sign-1" placeholder="Viết (Ký tên)..." class="w-48 p-1.5 border border-sky-100 rounded font-bold bg-white text-xs md:text-sm text-center my-1 italic text-sky-800">
                        <input type="text" id="p24-in-fullname-1" placeholder="Nguyễn Đức Việt..." class="w-48 p-1.5 border border-sky-100 rounded font-bold bg-white text-xs md:text-sm text-center">
                    </div>
                    <div id="p24-sign-layout-2" class="hidden text-center font-black">
                        <p class="text-gray-800 text-xs">Thay mặt chi đội</p>
                        <p class="uppercase text-gray-800 text-xs md:text-sm">CHI ĐỘI TRƯỞNG</p>
                        <input type="text" id="p24-in-sign-2" placeholder="Ký tên..." class="w-48 p-1.5 border border-sky-100 rounded font-bold bg-white text-xs md:text-sm text-center my-1 italic text-sky-800">
                        <input type="text" id="p24-in-fullname-2" placeholder="Họ và tên..." class="w-48 p-1.5 border border-sky-100 rounded font-bold bg-white text-xs md:text-sm text-center">
                    </div>
                </div>
            </div>

            <!-- Checklist tự soát lỗi -->
            <div class="bg-sky-50/50 p-6 rounded-[28px] border-2 border-dashed border-sky-100 max-w-xl mx-auto space-y-3">
                <p class="text-xs font-black text-sky-800 uppercase tracking-widest">📋 Căn cứ đọc soát và chỉnh sửa (Checklist):</p>
                <div class="space-y-2 text-xl md:text-2xl font-semibold text-sky-800">
                    <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" id="p24-ck-1" class="w-4 h-4 rounded"> Bản báo cáo có đầy đủ các phần theo quy định?</label>
                    <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" id="p24-ck-2" class="w-4 h-4 rounded"> Quốc hiệu, tiêu ngữ / tên đội ở góc đúng vị trí?</label>
                    <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" id="p24-ck-3" class="w-4 h-4 rounded"> Các thông tin chính xác, chia các mục rõ ràng?</label>
                    <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" id="p24-ck-4" class="w-4 h-4 rounded"> Đã sử dụng dấu gạch ngang đầu dòng để liệt kê?</label>
                    <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" id="p24-ck-5" class="w-4 h-4 rounded"> Đã ghi tên và ký tên người viết báo cáo chưa?</label>
                </div>
            </div>

            <div class="flex justify-center gap-4">
                <button onclick="checkPdsReport24()" class="px-8 py-3.5 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                    <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                    <span>CHẤM BÁO CÁO VỚI THẦY E</span>
                </button>
                <button onclick="submitPdsReportGlobal24()" class="px-8 py-3.5 bg-sky-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-sky-600 transition-all">NỘP BÀI BÁO CÁO</button>
            </div>
            <div id="fb-vn24-report" class="hidden p-5 rounded-2xl text-base font-bold shadow-md bg-sky-600 text-white transition-all duration-324"></div>
        </div>
    </div>

    <!-- 🏡 TRAO ĐỔI VỚI NGƯỜI THÂN -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🏡</div>
                <div>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800">Trao đổi với người thân</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Ghi chép lại cuộc trò chuyện của em với bố mẹ về các hoạt động tháng qua và dự định mong muốn sắp tới</p>
                </div>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="text-sm font-black text-sky-800">💬 a. Những hoạt động em đã tham gia trong tháng vừa qua:</label>
                        <textarea id="ans-vn24-home-a" rows="3" placeholder="Ví dụ: Em đã tham gia thi kéo co ngày khai trường, cắm trại trung thu với các bạn cùng khu phố..." class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-sky-50/10 mt-1 text-xl md:text-2xl"></textarea>
                    </div>
                    <div>
                        <label class="text-sm font-black text-sky-800">💬 b. Những mong muốn, dự định của em trong tháng tiếp theo:</label>
                        <textarea id="ans-vn24-home-b" rows="3" placeholder="Ví dụ: Em mong muốn tổ chức tốt buổi sinh hoạt tự học của tổ để các bạn tiến bộ hơn..." class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-sky-50/10 mt-1 text-xl md:text-2xl"></textarea>
                    </div>
                </div>

                <div class="flex justify-center pt-2">
                    <button onclick="submitHomeTraoDoi24()" class="px-8 py-3 bg-sky-600 hover:bg-sky-600 text-white font-black rounded-xl transition-all text-base shadow-md">NỘP BÀI TRAO ĐỔI ✓</button>
                </div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn24Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Bản báo cáo theo Đề 1 viết dưới vai trò của nhân vật nào?",
            "options": [
                "Chi đội trưởng hoặc Tổng phụ trách",
                "Tổ trưởng hoặc lớp trưởng",
                "Hiệu trưởng nhà trường",
                "Phụ huynh học sinh"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Bản báo cáo theo Đề 2 được gửi cho ai?",
            "options": [
                "Cô giáo chủ nhiệm lớp 5C",
                "Thầy cô Tổng phụ trách Đội",
                "Ban đại diện phụ huynh học sinh",
                "Các thành viên trong lớp"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Trong Đề 2, phần góc trên bên trái của trang báo cáo ghi những thông tin gì?",
            "options": [
                "Cộng hòa xã hội chủ nghĩa Việt Nam / Độc lập - Tự do - Hạnh phúc",
                "LIÊN ĐỘI TRƯỜNG ... / Chi đội ...",
                "Địa điểm và thời gian viết báo cáo",
                "Tổ trưởng / Lớp trưởng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Góc trên bên phải của bản báo cáo gửi Tổng phụ trách Đội ghi gì?",
            "options": [
                "LIÊN ĐỘI TRƯỜNG ...",
                "ĐỘI THIẾU NIÊN TIỀN PHONG HỒ CHÍ MINH",
                "CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM",
                "Tổ trưởng ký tên"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi viết các hoạt động cụ thể trong nội dung báo cáo, em nên dùng ký tự gì đầu dòng để liệt kê?",
            "options": [
                "Dấu chấm hỏi (?)",
                "Dấu gạch ngang đầu dòng (-)",
                "Dấu ngoặc kép",
                "Dấu chấm than"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Việc ghi chép số liệu chính xác và lập bảng biểu có tác dụng gì cho bản báo cáo?",
            "options": [
                "Làm cho báo cáo dài hơn",
                "Giúp thông tin rõ ràng, minh bạch, khoa học và thuyết phục hơn",
                "Thay thế hoàn toàn phần lời văn",
                "Để bài viết đẹp mắt hơn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Thông tin nào dưới đây thuộc về nhóm 'Ưu điểm' cần thu thập?",
            "options": [
                "Những việc chưa hoàn thành và lý do",
                "Những việc hoàn thành tốt, kết quả vượt trội, thành viên tích cực",
                "Các lỗi sai sót cần khắc phục",
                "Ý kiến đóng góp của các lớp khác"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Thông tin nào dưới đây thuộc về nhóm 'Hạn chế' cần thu thập?",
            "options": [
                "Những kết quả vượt trội học tập",
                "Những việc chưa hoàn thành, lý do, sai sót cần khắc phục, thành viên cần cố gắng",
                "Danh sách các bạn học giỏi nhất",
                "Tiền quỹ lớp còn lại"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Phần cuối của bản báo cáo gửi Tổng phụ trách Đội cần ký tên với chức danh gì?",
            "options": [
                "Tổ trưởng",
                "Lớp trưởng",
                "Thay mặt chi đội / CHI ĐỘI TRƯỞNG",
                "Thầy Tổng phụ trách"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Cần làm gì ở bước 'Đọc soát và chỉnh sửa' sau khi viết xong?",
            "options": [
                "Kiểm tra xem bản báo cáo có đầy đủ các phần theo quy định và số liệu chính xác chưa",
                "Nộp luôn không cần đọc lại",
                "Tự ý đổi lại tất cả số liệu theo ý thích",
                "Xóa bỏ bảng biểu đi cho gọn"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Hoạt động 'Trao đổi với người thân' ở cuối trang 40 gợi ý em trò chuyện về chủ đề gì?",
            "options": [
                "Hoạt động em đã tham gia trong tháng qua và mong muốn, dự định trong tháng tiếp theo",
                "Nhờ bố mẹ ký tên hộ vào báo cáo",
                "Hỏi điểm thi các môn học",
                "Mượn điện thoại để chơi game giải trí"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tại sao Quốc hiệu và Tiêu ngữ lại được viết căn lề giữa ở phần đầu báo cáo?",
            "options": [
                "Để tạo tính thẩm mỹ",
                "Theo quy chuẩn trình bày văn bản hành chính nhà nước trang trọng",
                "Để phân biệt với báo cáo lớp",
                "Viết ngẫu nhiên không có lý do"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Thông tin nào thường được viết ở lề bên phải phía dưới Quốc hiệu, tiêu ngữ?",
            "options": [
                "Địa điểm và thời gian viết báo cáo (Ví dụ: Sa Pa, ngày 30 tháng 9 năm 2024)",
                "Tên tổ trưởng ký tên",
                "Kính gửi thầy cô",
                "Các mục nội dung báo cáo"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Thành tích của bạn Nguyễn Đức Việt trong bảng mẫu (Toán) là gì?",
            "options": [
                "Kể chuyện sáng tạo",
                "Lập sơ đồ tư duy khoa học",
                "Có cách giải bài tập thông minh",
                "Trực nhật sạch sẽ"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Bản báo cáo hoạt động tháng là loại văn bản nào?",
            "options": [
                "Văn bản nghệ thuật thơ ca",
                "Văn bản hành chính thông tin công việc",
                "Truyện kể sáng tạo",
                "Kịch bản biểu diễn"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- BIẾN ĐIỀU KHIỂN ĐỀ BÀI ---
let selectedDe24 = 1;
window.selectDe24 = function(de) {
    selectedDe24 = de;
    const btn1 = document.getElementById('btn-de-1');
    const btn2 = document.getElementById('btn-de-2');
    const layout1 = document.getElementById('p24-header-layout-1');
    const layout2 = document.getElementById('p24-header-layout-2');
    const sign1 = document.getElementById('p24-sign-layout-1');
    const sign2 = document.getElementById('p24-sign-layout-2');

    if (!btn1 || !btn2 || !layout1 || !layout2 || !sign1 || !sign2) return;

    if (de === 1) {
        btn1.className = "p-4 bg-sky-600 text-white font-black rounded-2xl text-left border border-sky-100 transition-all text-xl md:text-2xl shadow-md";
        btn2.className = "p-4 bg-white text-sky-800 font-bold rounded-2xl text-left border-2 border-sky-100 transition-all text-xl md:text-2xl shadow-sm hover:bg-sky-50";
        
        layout1.classList.remove('hidden');
        layout2.classList.add('hidden');
        
        sign1.classList.remove('hidden');
        sign2.classList.add('hidden');
        
        document.getElementById('p24-in-title').value = "BÁO CÁO HOẠT ĐỘNG THÁNG 10";
        document.getElementById('p24-in-dear').value = "Cô giáo chủ nhiệm lớp 5C.";
    } else {
        btn1.className = "p-4 bg-white text-sky-800 font-bold rounded-2xl text-left border-2 border-sky-100 transition-all text-xl md:text-2xl shadow-sm hover:bg-sky-50";
        btn2.className = "p-4 bg-sky-600 text-white font-black rounded-2xl text-left border border-sky-100 transition-all text-xl md:text-2xl shadow-md";
        
        layout1.classList.add('hidden');
        layout2.classList.remove('hidden');
        
        sign1.classList.add('hidden');
        sign2.classList.remove('hidden');
        
        document.getElementById('p24-in-title').value = "BÁO CÁO HOẠT ĐỘNG THÁNG 10 CHI ĐỘI";
        document.getElementById('p24-in-dear').value = "Thầy (Cô) Tổng phụ trách Đội.";
    }
};

// --- CHẤM BÀI BÁO CÁO VỚI THẦY E ---
window.checkPdsReport24 = function() {
    const title = document.getElementById('p24-in-title').value.trim();
    const dear = document.getElementById('p24-in-dear').value.trim();
    const intro = document.getElementById('p24-in-intro').value.trim();
    const body1 = document.getElementById('p24-in-body1').value.trim();
    const body2 = document.getElementById('p24-in-body2').value.trim();
    const body3 = document.getElementById('p24-in-body3').value.trim();

    const fb = document.getElementById('fb-vn24-report');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!title || !dear || !intro || !body1 || !body2 || !body3) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-600">AI Thầy E nhắc nhở:</h5>
                    <p class="text-lg">Em vui lòng điền đầy đủ tất cả các trường tiêu đề, người nhận, lời mở đầu và cả 3 mục nội dung báo cáo nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-324";
        return;
    }

    const ck1 = document.getElementById('p24-ck-1')?.checked;
    const ck2 = document.getElementById('p24-ck-2')?.checked;
    const ck3 = document.getElementById('p24-ck-3')?.checked;
    const ck4 = document.getElementById('p24-ck-4')?.checked;
    const ck5 = document.getElementById('p24-ck-5')?.checked;

    if (!ck1 || !ck2 || !ck3 || !ck4 || !ck5) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-600">AI Thầy E nhắc nhở:</h5>
                    <p class="text-lg">Hãy tự đọc soát bài viết và tích chọn đầy đủ 5 tiêu chí ở bảng Checklist kiểm tra trước khi gửi Thầy E chấm bài nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-324";
        return;
    }

    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-amber-600">AI Thầy E nhận xét & Chấm điểm:</h5>
                <p class="text-lg mb-3">Tuyệt vời! Bản báo cáo hoạt động Tháng 10 của em viết rất chuẩn mực. Định dạng Quốc hiệu/Đội hiệu đặt đúng vị trí, tiêu đề rõ ràng, lời kính gửi lễ phép. Nội dung các mục học tập, nề nếp kỷ luật và hoạt động khác được phân tách mạch lạc bằng dấu gạch ngang đầu dòng rất chuyên nghiệp.</p>
                <div class="flex items-center gap-3">
                    <span class="text-2xl md:text-3xl font-black bg-amber-500 px-3 py-1 rounded-lg">Đạt 124%</span>
                    <span class="text-sm opacity-80">(Xếp loại: Xuất sắc - Đã lưu bài làm vào học bạ)</span>
                </div>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-emerald-600 text-white transition-all duration-324";
};

// --- NỘP BÁO CÁO GLOBAL ---
window.submitPdsReportGlobal24 = function() {
    const title = document.getElementById('p24-in-title').value.trim();
    if (!title) {
        window.showMathFeedback("Thiếu thông tin", "⚠️", "Em vui lòng nhập tiêu đề báo cáo trước khi nộp bài nhé!");
        return;
    }
    window.showMathFeedback("Nộp báo cáo thành công", "🌟", `Bản báo cáo "${title}" đã được gửi lên hệ thống lưu trữ của lớp thành công!`);
};

// --- NỘP BÀI TRAO ĐỔI GIA ĐÌNH ---
window.submitHomeTraoDoi24 = function() {
    const a = document.getElementById('ans-vn24-home-a').value.trim();
    const b = document.getElementById('ans-vn24-home-b').value.trim();

    if (!a || !b) {
        window.showMathFeedback("Thiếu thông tin", "⚠️", "Em hãy điền đầy đủ nội dung chia sẻ hoạt động và mong muốn dự định tháng tới trước khi nộp nhé!");
        return;
    }
    window.showMathFeedback("Nộp bài thành công", "🌟", "Nội dung trao đổi với người thân đã được lưu nhận thành công!");
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.submitVn24Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 24',
            '📝',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">📝</span><p class="text-lg md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành xuất sắc bài học Viết báo cáo công việc!</p><p class="text-2xl md:text-3xl text-gray-800 mt-3">Một báo cáo mạch lạc, rõ ràng và đầy đủ số liệu là chìa khóa của sự chuyên nghiệp trong công việc và học tập tập thể.</p></div>'
        );
    }
};
