export const lesson27 = {
    "topic": "Tiếng Việt 5",
    "week": "4",
    "period": "27",
    "title": "VIẾT: ĐÁNH GIÁ, CHỈNH SỬA BÁO CÁO CÔNG VIỆC",
    "desc": "Bài học giúp học sinh thực hành tự đánh giá, soát lỗi và chỉnh sửa bản báo cáo công việc của mình hoặc của nhóm về mặt nội dung, hình thức trình bày, bảng số liệu, cách dùng từ và chính tả theo đúng chuẩn mực.",
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
                Biết cách lắng nghe nhận xét của thầy cô và góp ý của bạn để tự đánh giá bài làm của mình.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Nhận biết và sửa được các lỗi về hình thức trình bày văn bản hành chính, tính chính xác của số liệu thống kê, cách dùng từ, viết câu và chính tả.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Hoàn thiện bản báo cáo công việc mạch lạc, sạch đẹp và đúng quy chuẩn.
            </li>
        </ul>
    </div>

    <!-- 🔍 KHỞI ĐỘNG: KÍNH LÚP SOI LỖI BÁO CÁO -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🔍</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Hoạt động Khởi động: Kính lúp soi lỗi</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Bản báo cáo nháp dưới đây đang mắc phải 4 lỗi nghiêm trọng. Em hãy nhấp chuột vào các khu vực bị lỗi để tìm và sửa giúp bạn nhé!</p>
            </div>
        </div>

        <!-- Khung báo cáo nháp lỗi -->
        <div class="bg-amber-50/15 p-6 rounded-3xl border-2 border-amber-100 max-w-3xl mx-auto space-y-4 font-semibold text-gray-800 text-xl md:text-2xl leading-relaxed relative">
            <div class="text-center font-black">
                <p>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                <p class="underline">Độc lập - Tự do - Hạnh phúc</p>
            </div>
            
            <!-- LỖI 1: Thiếu ngày tháng địa điểm viết -->
            <div class="flex justify-end">
                <button onclick="soiLoiBaoCao27('date')" id="err-date" class="px-3 py-1.5 bg-rose-600 hover:bg-rose-600 text-rose-800 rounded-lg border border-dashed border-rose-100 font-black transition-all">
                    ⚠️ [Lỗi 1: Nhấp vào đây để xem]
                </button>
            </div>

            <div class="text-center">
                <!-- LỖI 2: Sai chính tả tiêu đề -->
                <button onclick="soiLoiBaoCao27('title')" id="err-title" class="px-3 py-1.5 bg-rose-600 hover:bg-rose-600 text-rose-800 rounded-lg border border-dashed border-rose-100 font-black transition-all">
                    ⚠️ BÁO CÁO VỀ HOẶT ĐỘNG THÁNG 10
                </button>
            </div>

            <p class="pl-4">Kính gửi: Cô giáo chủ nhiệm lớp 5C</p>
            <p class="pl-4">Em xin báo cáo các hoạt động của tổ 1 trong tháng qua:</p>
            
            <p class="font-bold pl-4">1. Về học tập:</p>
            <p class="pl-8">- Các thành viên hoàn thành đầy đủ bài tập về nhà.</p>

            <p class="font-bold pl-4">2. Bảng thống kê thành tích:</p>
            <!-- LỖI 3: Bảng biểu bỏ trống số liệu -->
            <div class="pl-8">
                <button onclick="soiLoiBaoCao27('table')" id="err-table" class="w-full max-w-md p-3 bg-rose-600 hover:bg-rose-600 text-rose-800 rounded-lg border border-dashed border-rose-100 text-left font-black transition-all">
                    ⚠️ [Lỗi 3: Bảng số liệu thống kê trống trơn]
                </button>
            </div>

            <!-- LỖI 4: Thiếu chữ ký người viết báo cáo -->
            <div class="flex justify-end pr-8 pt-4">
                <button onclick="soiLoiBaoCao27('sign')" id="err-sign" class="px-3 py-1.5 bg-rose-600 hover:bg-rose-600 text-rose-800 rounded-lg border border-dashed border-rose-100 font-black transition-all">
                    ⚠️ [Lỗi 4: Không ghi chức danh và không ký tên]
                </button>
            </div>
        </div>

        <div id="fb-soi-loi-27" class="bg-sky-50 p-4 rounded-xl border border-sky-100 text-center font-bold text-sky-800 min-h-[50px] flex items-center justify-center">
            Hãy tìm ra đủ 4 lỗi trong bản báo cáo trên bằng cách nhấp chọn các thẻ màu đỏ!
        </div>
    </div>

    <!-- 📋 PHẦN 1: TIÊU CHÍ ĐÁNH GIÁ (BÀI 1) -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">📋</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">1. Các tiêu chí đánh giá báo cáo công việc</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Đọc và tích chọn các tiêu chí em đã tự soát hoặc được thầy cô nhắc nhở để sửa bài viết của mình nhé!</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl md:text-2xl font-bold text-sky-800">
            <!-- Thẻ tiêu chí 1 -->
            <div class="p-4 bg-sky-50/50 rounded-2xl border border-sky-100 flex items-start gap-3">
                <input type="checkbox" id="ck-tc-1" class="w-5 h-5 rounded mt-0.5 cursor-pointer">
                <div>
                    <span class="block font-black text-sky-800">🔹 Tiêu chí 1: Hình thức trình bày</span>
                    <span class="text-xs text-gray-800 font-bold block mt-1">Bố cục đủ 3 phần; Quốc hiệu - tiêu ngữ (hoặc tên tổ chức Đội), địa điểm, ngày tháng, tên báo cáo, nơi nhận và chữ ký đặt đúng quy định.</span>
                </div>
            </div>

            <!-- Thẻ tiêu chí 2 -->
            <div class="p-4 bg-sky-50/50 rounded-2xl border border-sky-100 flex items-start gap-3">
                <input type="checkbox" id="ck-tc-2" class="w-5 h-5 rounded mt-0.5 cursor-pointer">
                <div>
                    <span class="block font-black text-sky-800">🔹 Tiêu chí 2: Nội dung & Bảng số liệu</span>
                    <span class="text-xs text-gray-800 font-bold block mt-1">Các thông tin hoạt động rõ ràng, cụ thể; bảng thống kê ghi nhận đúng và đầy đủ thành tích nổi bật của các bạn.</span>
                </div>
            </div>

            <!-- Thẻ tiêu chí 3 -->
            <div class="p-4 bg-sky-50/50 rounded-2xl border border-sky-100 flex items-start gap-3">
                <input type="checkbox" id="ck-tc-3" class="w-5 h-5 rounded mt-0.5 cursor-pointer">
                <div>
                    <span class="block font-black text-sky-800">🔹 Tiêu chí 3: Dùng từ, viết câu</span>
                    <span class="text-xs text-gray-800 font-bold block mt-1">Dùng từ ngữ trang trọng, ngắn gọn, dễ hiểu; sử dụng dấu gạch ngang đầu dòng để liệt kê hoạt động mạch lạc.</span>
                </div>
            </div>

            <!-- Thẻ tiêu chí 4 -->
            <div class="p-4 bg-sky-50/50 rounded-2xl border border-sky-100 flex items-start gap-3">
                <input type="checkbox" id="ck-tc-4" class="w-5 h-5 rounded mt-0.5 cursor-pointer">
                <div>
                    <span class="block font-black text-sky-800">🔹 Tiêu chí 4: Lỗi chính tả</span>
                    <span class="text-xs text-gray-800 font-bold block mt-1">Viết đúng chính tả tiếng Việt, đặc biệt là các từ ngữ chuyên môn và tên riêng của các thành viên.</span>
                </div>
            </div>

            <!-- Thẻ tiêu chí 5 (Bông hoa giải quyết) -->
            <div class="p-4 bg-amber-50/50 rounded-2xl border border-amber-100 flex items-start gap-3 md:col-span-2">
                <input type="checkbox" id="ck-tc-5" class="w-5 h-5 rounded mt-0.5 cursor-pointer">
                <div>
                    <span class="block font-black text-amber-600 flex items-center gap-1.5">
                        <span class="px-2 py-0.5 bg-amber-500 text-white rounded text-xs">🌸 Bông hoa</span>
                        Tiêu chí 5: Tính chính xác và trung thực của số liệu
                    </span>
                    <span class="text-xs text-gray-800 font-bold block mt-1">Các con số, phần trăm hay số lượng công việc đã liệt kê phải đảm bảo trung thực, đúng thực tế của tổ hoặc lớp, không tự ý bịa đặt thành tích.</span>
                </div>
            </div>
        </div>

        <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-2">
            <label class="font-black text-gray-800 text-sm block">✍️ Ghi chép lại nhận xét riêng của thầy cô hoặc góp ý của bạn về bài báo cáo của em:</label>
            <textarea id="p27-note-teach" rows="3" placeholder="- Cần bổ sung thêm phần ký tên...&#10;- Bảng số liệu môn học của tổ còn thiếu..." class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-white text-xl md:text-2xl"></textarea>
        </div>
    </div>

    <!-- 🛠️ PHẦN 2: THỰC HÀNH CHỈNH SỬA (BÀI 2) -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🛠️</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">2. Thực hành chỉnh sửa & hoàn thiện báo cáo</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Xem gợi ý chỉnh sửa và hoàn thiện bản báo cáo của em sạch đẹp vào ô biên tập bên dưới</p>
            </div>
        </div>

        <!-- 3 Thẻ phương hướng chỉnh sửa -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 font-bold text-center">
            <div class="p-4 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-100">
                <span class="block text-emerald-900 font-black text-lg mb-1">✔️ Chỉnh sửa nội dung</span>
                <span class="text-xs font-medium block">Sửa số liệu thống kê, thêm hoạt động tích cực còn thiếu, bổ sung các đề xuất.</span>
            </div>
            <div class="p-4 bg-sky-50 text-sky-800 rounded-2xl border border-sky-100">
                <span class="block text-sky-900 font-black text-lg mb-1">✔️ Chỉnh sửa hình thức</span>
                <span class="text-xs font-medium block">Căn chỉnh đúng vị trí Quốc hiệu, căn giữa tên báo cáo, thụt đầu dòng kính gửi, ký tên lề phải.</span>
            </div>
            <div class="p-4 bg-amber-50 text-amber-600 rounded-2xl border border-amber-100">
                <span class="block text-amber-900 font-black text-lg mb-1 flex items-center justify-center gap-1">
                    <span class="px-1.5 py-0.5 bg-amber-500 text-white rounded text-[10px]">🌸 Bông hoa</span>
                    Chỉnh sửa từ ngữ
                </span>
                <span class="text-xs font-medium block">Sửa các lỗi chính tả, thay thế các từ lặp lại nhiều lần bằng các đại từ thay thế phù hợp.</span>
            </div>
        </div>

        <!-- Trình soạn thảo Before/After -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 font-bold">
            <!-- Bản nháp cũ -->
            <div class="space-y-2">
                <label class="text-gray-800 block text-sm">📝 Dán bản nháp bài báo cáo cũ của em vào đây:</label>
                <textarea id="p27-rep-before" rows="10" placeholder="BÁO CÁO HOẠT ĐỘNG THÁNG 10...&#10;&#10;Em xin báo cáo là tổ em học bài rất đầy đủ. Bạn Việt học toán tốt.&#10;&#10;Người viết: Việt" class="w-full p-4 border border-gray-100 rounded-2xl bg-gray-50/50 text-xl md:text-2xl font-semibold"></textarea>
            </div>

            <!-- Bản sửa mới -->
            <div class="space-y-2">
                <label class="text-sky-800 block text-sm">🌟 Viết bản báo cáo hoàn thiện đã được chỉnh sửa sạch đẹp của em:</label>
                <textarea id="p27-rep-after" rows="10" placeholder="CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM&#10;Độc lập – Tự do – Hạnh phúc&#10;&#10;Sa Pa, ngày 30 tháng 10 năm 2027&#10;&#10;BÁO CÁO HOẠT ĐỘNG THÁNG 10...&#10;&#10;Kính gửi: Cô giáo chủ nhiệm lớp 5C..." class="w-full p-4 border border-sky-100 rounded-2xl bg-white text-xl md:text-2xl font-semibold shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-600 outline-none"></textarea>
            </div>
        </div>

        <div class="flex justify-center gap-4">
            <button onclick="nopBaoCaoChinhSua27()" class="px-8 py-3.5 bg-sky-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-sky-600 active:scale-95 transition-all">NỘP BẢN BÁO CÁO ĐÃ SỬA</button>
        </div>
        <div id="fb-vn27-chinhsua" class="hidden p-5 rounded-2xl text-base font-bold shadow-md bg-emerald-600 text-white transition-all duration-327"></div>
    </div>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn27Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Khi nghe thầy cô nhận xét chung về bài làm của cả lớp, em cần chú ý khía cạnh nào sau đây?",
            "options": [
                "Hình thức trình bày từng phần của báo cáo",
                "Cách dùng từ, viết câu và các thông tin trong bảng biểu",
                "Lỗi chính tả",
                "Tất cả các khía cạnh trên"
            ],
            "answer": 3,
            "level": 0
        },
        {
            "question": "Bản báo cáo công việc của tổ/lớp cần đảm bảo tính chất quan trọng nào về mặt số liệu?",
            "options": [
                "Số liệu càng lớn càng tốt để lấy thành tích",
                "Số liệu trung thực, chính xác và có bảng thống kê khoa học",
                "Không cần bảng số liệu, chỉ cần viết lời văn",
                "Có thể tự bịa số liệu cho đẹp mắt"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ 'hoặt động' trong tiêu đề báo cáo mắc phải lỗi gì?",
            "options": [
                "Dùng từ không trang trọng",
                "Lỗi chính tả (phải viết là 'hoạt động')",
                "Thiếu danh từ chung",
                "Viết hoa sai quy chuẩn"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Khi phát hiện báo cáo thiếu phần ký tên và chức danh ở cuối bài, em đang sửa lỗi ở khía cạnh nào?",
            "options": [
                "Hình thức trình bày",
                "Nội dung số liệu",
                "Cách dùng từ",
                "Chính tả tiếng Việt"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Nếu trong báo cáo em viết lặp đi lặp lại cụm từ 'các bạn trong tổ', em nên làm thế nào để bài viết hay hơn?",
            "options": [
                "Xóa bỏ hoàn toàn câu đó đi",
                "Dùng đại từ thay thế phù hợp (như 'họ', 'chúng tôi', 'các thành viên ấy')",
                "Giữ nguyên vì văn bản hành chính bắt buộc phải lặp từ",
                "Viết tắt cụm từ đó"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Việc tự đọc soát báo cáo theo checklist sau khi chỉnh sửa có tác dụng gì?",
            "options": [
                "Làm bài học kéo dài hơn",
                "Giúp em tự phát hiện các lỗi còn sót lại để hoàn thiện bài viết tốt nhất",
                "Để nộp bài nhanh hơn cho thầy cô",
                "Để bài viết có nhiều trang hơn"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Ở phần chính của báo cáo công việc của tổ, các nội dung công việc nên được trình bày thế nào?",
            "options": [
                "Viết thành một đoạn văn dài từ đầu đến cuối không xuống dòng",
                "Phân tách rõ ràng bằng các dấu gạch ngang đầu dòng cho từng mục công việc",
                "Chỉ liệt kê bằng bảng số liệu mà không cần viết lời văn giải thích",
                "Vẽ tranh minh họa thay cho lời viết"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Bông hoa thứ năm ở Bài 1 trong sách giáo khoa trang 43 muốn bổ sung tiêu chí nhận xét nào?",
            "options": [
                "Về tính trung thực, chính xác và khoa học của số liệu thống kê trong báo cáo",
                "Về màu sắc của giấy viết báo cáo",
                "Về chữ ký của bố mẹ học sinh",
                "Về độ dài tối thiểu của báo cáo"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Thẻ thứ ba ở Bài 2 trong sách giáo khoa trang 43 đề xuất hoạt động chỉnh sửa nào?",
            "options": [
                "Chỉnh sửa từ ngữ, lỗi chính tả và các câu văn chưa liên kết mạch lạc",
                "Chỉnh sửa phông chữ của văn bản trên máy tính",
                "Chỉnh sửa lại số thứ tự của tổ học sinh",
                "Chỉnh sửa lại người nhận báo cáo"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Vị trí đặt Quốc hiệu và Tiêu ngữ trong bản báo cáo công việc Đề 1 nằm ở đâu?",
            "options": [
                "Góc trên cùng bên trái trang giấy",
                "Góc trên cùng và căn giữa trang giấy",
                "Dưới phần kính gửi của người nhận",
                "Đặt ở góc dưới cùng bên phải"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Sau khi nghe bạn góp ý về bài báo cáo của mình, thái độ phù hợp của em là gì?",
            "options": [
                "Không quan tâm vì đó là ý kiến cá nhân của bạn",
                "Lắng nghe tích cực, ghi chép lại và chỉnh sửa những phần chưa tốt để bài viết hoàn thiện hơn",
                "Tranh cãi với bạn để bảo vệ bài làm của mình",
                "Bỏ bài làm cũ và viết lại một bài hoàn toàn mới theo ý bạn"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ ngữ nào sau đây thích hợp để viết kính gửi giáo viên trong báo cáo?",
            "options": [
                "Kính gửi: Cô giáo chủ nhiệm lớp 5C.",
                "Chào cô chủ nhiệm thân mến!",
                "Gửi cô giáo dạy lớp em,",
                "Kính gửi: Giáo viên dạy môn tiếng Việt."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Phần cuối của báo cáo công việc bắt buộc phải có mục nào dưới đây?",
            "options": [
                "Quốc hiệu, tiêu ngữ",
                "Chữ ký và họ tên của người viết báo cáo",
                "Lý do viết báo cáo công việc",
                "Địa điểm và thời gian viết báo cáo"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Bản báo cáo hoạt động tháng của tổ trưởng được viết để gửi cho ai?",
            "options": [
                "Gửi cho tất cả các thành viên trong tổ tự đọc",
                "Gửi cho cô giáo chủ nhiệm lớp",
                "Gửi cho các bạn tổ trưởng của tổ khác",
                "Gửi cho bố mẹ của tổ trưởng"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Mục đích lớn nhất của việc viết báo cáo công việc là gì?",
            "options": [
                "Để luyện viết chữ đẹp",
                "Để tổng kết, ghi nhận các công việc đã làm, thành tích đạt được và đề xuất giải pháp tiếp theo",
                "Để nộp bài tập làm văn lấy điểm số",
                "Để giới thiệu tên các thành viên trong lớp"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- LOGIC GAME SOI LỖI KHỞI ĐỘNG ---
let loiDaSua27 = [];
window.soiLoiBaoCao27 = function(loiId) {
    const box = document.getElementById('fb-soi-loi-27');
    if (!box) return;

    if (loiId === 'date') {
        const btn = document.getElementById('err-date');
        if (btn) {
            btn.innerHTML = "Sa Pa, ngày 30 tháng 10 năm 2027";
            btn.className = "px-3 py-1.5 bg-emerald-600 text-white rounded-lg font-black transition-all cursor-default scale-95";
        }
        if (!loiDaSua27.includes('date')) loiDaSua27.push('date');
        box.innerHTML = "🔍 Bạn đã sửa Lỗi 1: Thêm địa điểm và thời gian viết báo cáo chuẩn xác!";
    } else if (loiId === 'title') {
        const btn = document.getElementById('err-title');
        if (btn) {
            btn.innerHTML = "BÁO CÁO HOẠT ĐỘNG THÁNG 10";
            btn.className = "px-3 py-1.5 bg-emerald-600 text-white rounded-lg font-black transition-all cursor-default scale-95";
        }
        if (!loiDaSua27.includes('title')) loiDaSua27.push('title');
        box.innerHTML = "🔍 Bạn đã sửa Lỗi 2: Sửa đúng chính tả tiêu đề từ 'hoặt' thành 'hoạt động'!";
    } else if (loiId === 'table') {
        const btn = document.getElementById('err-table');
        if (btn) {
            btn.innerHTML = "📊 Bảng số liệu: Nguyễn Đức Việt - 10 điểm Toán - Xuất sắc";
            btn.className = "w-full max-w-md p-3 bg-emerald-600 text-white rounded-lg text-left font-black transition-all cursor-default scale-95";
        }
        if (!loiDaSua27.includes('table')) loiDaSua27.push('table');
        box.innerHTML = "🔍 Bạn đã sửa Lỗi 3: Điền đầy đủ số liệu và thành tích xuất sắc của các bạn!";
    } else if (loiId === 'sign') {
        const btn = document.getElementById('err-sign');
        if (btn) {
            btn.innerHTML = "TỔ TRƯỞNG<br>(Ký tên)<br>Nguyễn Đức Việt";
            btn.className = "px-4 py-2 bg-emerald-600 text-white rounded-lg font-black transition-all text-center cursor-default scale-95";
        }
        if (!loiDaSua27.includes('sign')) loiDaSua27.push('sign');
        box.innerHTML = "🔍 Bạn đã sửa Lỗi 4: Bổ sung chức danh ký tên và ghi rõ họ tên người viết báo cáo!";
    }

    if (loiDaSua27.length === 4) {
        box.innerHTML = "🌟 Chúc mừng em! Em đã tìm và sửa chính xác toàn bộ 4 lỗi của bản báo cáo mẫu nháp!";
        box.className = "bg-emerald-50 p-4 rounded-xl border border-emerald-100 text-center font-bold text-emerald-800 min-h-[50px] flex items-center justify-center";
        
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Hoàn thành Khởi động", "🎉", "Em đã phát hiện toàn bộ các lỗi báo cáo nháp xuất sắc!");
        }
    }
};

// --- NỘP BÁO CÁO ĐÃ CHỈNH SỬA ---
window.nopBaoCaoChinhSua27 = function() {
    const afterText = document.getElementById('p27-rep-after').value.trim();
    const fb = document.getElementById('fb-vn27-chinhsua');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (afterText.length < 30) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-600">Thầy E nhắc nhở:</h5>
                    <p class="text-lg">Bài viết báo cáo đã chỉnh sửa quá ngắn, em hãy hoàn thiện đầy đủ cả 3 phần báo cáo và số liệu trước khi gửi Thầy E nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-327";
        return;
    }

    // Kiểm tra cấu trúc sơ bộ
    const lowercaseText = afterText.toLowerCase();
    const coQuocHieu = lowercaseText.includes("cộng hoà") || lowercaseText.includes("cộng hòa") || lowercaseText.includes("liên đội");
    const coKinhGui = lowercaseText.includes("kính gửi") || lowercaseText.includes("kính gởi");
    const coNguoiGui = lowercaseText.includes("tổ trưởng") || lowercaseText.includes("lớp trưởng") || lowercaseText.includes("chi đội trưởng") || lowercaseText.includes("người viết");

    if (!coQuocHieu || !coKinhGui || !coNguoiGui) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-600">Thầy E nhắc nhở:</h5>
                    <p class="text-lg">Bản báo cáo đã sửa vẫn còn thiếu một số phần quy chuẩn (như Quốc hiệu/Đội hiệu ở đầu, hoặc Kính gửi, hoặc chức danh ký tên ở cuối). Em hãy xem kỹ lại gợi ý và hoàn thiện lại nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-327";
        return;
    }

    // Check checklist
    const tc1 = document.getElementById('ck-tc-1').checked;
    const tc2 = document.getElementById('ck-tc-2').checked;
    const tc3 = document.getElementById('ck-tc-3').checked;
    const tc4 = document.getElementById('ck-tc-4').checked;
    const tc5 = document.getElementById('ck-tc-5').checked;

    if (!tc1 || !tc2 || !tc3 || !tc4 || !tc5) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-600">Thầy E nhắc nhở:</h5>
                    <p class="text-lg">Hãy tích chọn đầy đủ 5 tiêu chí ở bảng kiểm soát tự đánh giá (checklist) ở Mục 1 để tự tin khẳng định bài của mình không dính lỗi trước khi nộp nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-327";
        return;
    }

    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-800">AI Thầy E nhận xét & Chấm điểm:</h5>
                <p class="text-lg mb-3">Tuyệt vời! Bản báo cáo công việc của em sau khi được đánh giá và chỉnh sửa đã đạt chất lượng rất xuất sắc. Lỗi chính tả được khắc phục hoàn toàn, các mục công việc phân tách mạch lạc, bảng số liệu đầy đủ khoa học và thể hiện đúng chuẩn định dạng hành chính trang trọng.</p>
                <div class="flex items-center gap-3">
                    <span class="text-2xl md:text-3xl font-black bg-emerald-600 px-3 py-1 rounded-lg">Đạt 127%</span>
                    <span class="text-sm opacity-80">(Xếp loại: Xuất sắc - Đã cập nhật vào học bạ học sinh)</span>
                </div>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-emerald-600 text-white transition-all duration-327";
};

// --- HOÀN THÀNH TOÀN BỘ TIẾT HỌC ---
window.submitVn27Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 27',
            '📝',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">📝</span><p class="text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài học Đánh giá, chỉnh sửa báo cáo công việc!</p><p class="text-2xl md:text-3xl text-gray-800 mt-3">Một thái độ cầu tiến lắng nghe góp ý và sự tỉ mỉ đọc soát lỗi là chìa khóa giúp bài viết của em ngày càng hoàn hảo và chuyên nghiệp hơn.</p></div>'
        );
    }
};
