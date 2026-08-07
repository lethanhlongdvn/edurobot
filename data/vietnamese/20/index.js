export const lesson20 = {
    "topic": "Tiếng Việt 5",
    "week": "3",
    "period": "20",
    "title": "VIẾT: TÌM HIỂU CÁCH VIẾT BÁO CÁO CÔNG VIỆC",
    "desc": "Bài học giúp học sinh nắm vững cấu trúc 3 phần của một bản báo cáo công việc và biết cách ghi chép, lập bảng biểu khoa học thông qua văn bản mẫu trực quan.",
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
                Tìm hiểu cấu trúc của một bản báo cáo công việc gồm 3 phần (Phần đầu, Phần chính, Phần cuối).
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Nhận xét được cách trình bày thông tin, bảng biểu và rút ra những lưu ý quan trọng trước, trong và sau khi viết báo cáo công việc.
            </li>
        </ul>
    </div>

    <!-- 📑 PHẦN TƯƠNG TÁC BẢN BÁO CÁO MẪU -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-sky-100 pb-4">
                <div>
                    <span class="text-sky-900 font-black text-xl md:text-3xl flex items-center gap-2">
                        <span>📑</span> 1. Khám phá Bản báo cáo mẫu
                    </span>
                    <p class="text-sm font-bold text-gray-800 mt-1">Click vào các nút phân tích để bôi màu nhận biết các phần tương ứng trong bản báo cáo</p>
                </div>
                <!-- Các nút bấm tương tác (Interactive Highlights) -->
                <div class="flex flex-wrap gap-2">
                    <button onclick="highlightReport20('dau', this)" class="px-4 py-2 bg-sky-50 text-sky-800 border border-sky-100 font-black rounded-xl text-sm transition-all hover:bg-sky-600">
                        🔵 Phần đầu
                    </button>
                    <button onclick="highlightReport20('chinh', this)" class="px-4 py-2 bg-amber-50 text-amber-600 border border-amber-100 font-black rounded-xl text-sm transition-all hover:bg-amber-500">
                        🟡 Phần chính
                    </button>
                    <button onclick="highlightReport20('cuoi', this)" class="px-4 py-2 bg-emerald-50 text-emerald-800 border border-emerald-100 font-black rounded-xl text-sm transition-all hover:bg-emerald-600">
                        🟢 Phần cuối
                    </button>
                    <button onclick="highlightReport20('reset', this)" class="px-4 py-2 bg-rose-50 text-rose-800 border border-rose-100 font-black rounded-xl text-sm transition-all hover:bg-rose-600">
                        🔄 Đặt lại
                    </button>
                </div>
            </div>

            <!-- Tờ giấy báo cáo công việc mô phỏng -->
            <div class="bg-amber-50/20 p-6 md:p-10 rounded-[32px] border-2 border-amber-100 shadow-inner space-y-6 relative text-gray-900 text-2xl md:text-3xl leading-relaxed max-w-4xl mx-auto">
                <div class="absolute right-4 top-4 text-xs font-bold text-gray-800 select-none">Mẫu báo cáo SGK trang 33</div>

                <!-- PHẦN ĐẦU -->
                <div id="rp20-dau" class="p-3 rounded-xl transition-all duration-500 space-y-4">
                    <div class="text-center font-black">
                        <p class="uppercase text-gray-800 tracking-wide text-2xl md:text-3xl">CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                        <p class="underline text-2xl md:text-3xl">Độc lập – Tự do – Hạnh phúc</p>
                    </div>
                    <div class="text-right italic text-sm font-semibold text-gray-800">
                        Sa Pa, ngày 30 tháng 9 năm 2020
                    </div>
                    <div class="text-center font-black text-sky-800 space-y-1 py-2">
                        <p class="text-2xl md:text-3xl">BÁO CÁO HOẠT ĐỘNG THÁNG 9</p>
                        <p class="text-2xl md:text-3xl">CỦA TỔ 1, LỚP 5C, TRƯỜNG TIỂU HỌC KIM ĐỒNG</p>
                    </div>
                    <div class="font-bold pl-4">
                        Kính gửi: Cô giáo chủ nhiệm lớp 5C.
                    </div>
                </div>

                <!-- PHẦN CHÍNH -->
                <div id="rp20-chinh" class="p-3 rounded-xl transition-all duration-500 space-y-4">
                    <p class="font-bold indent-8">Em xin báo cáo các hoạt động của tổ 1 trong tháng 9 vừa qua như sau:</p>
                    
                    <!-- Mục 1 -->
                    <div class="space-y-2">
                        <p class="font-black text-gray-800">1. Về học tập:</p>
                        <p class="indent-4 font-semibold">– Tất cả thành viên của tổ 1 tích cực học tập, hăng hái phát biểu ý kiến trong nhóm, trước lớp.</p>
                        <p class="indent-4 font-semibold">– Một số bạn được tuyên dương trong học tập:</p>

                        <!-- Bảng số liệu -->
                        <div class="overflow-x-auto my-3">
                            <table class="w-full border-collapse border border-gray-100 text-xl md:text-2xl font-semibold">
                                <thead class="bg-sky-50">
                                    <tr>
                                        <th class="border border-gray-100 p-2 text-center w-12">TT</th>
                                        <th class="border border-gray-100 p-2 text-left">Họ và tên</th>
                                        <th class="border border-gray-100 p-2 text-left">Thành tích</th>
                                        <th class="border border-gray-100 p-2 text-left w-28">Môn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white">
                                        <td class="border border-gray-100 p-2 text-center">1</td>
                                        <td class="border border-gray-100 p-2">Nguyễn Đức Việt</td>
                                        <td class="border border-gray-100 p-2">Có cách giải bài tập thông minh.</td>
                                        <td class="border border-gray-100 p-2 text-sky-800">Toán</td>
                                    </tr>
                                    <tr class="bg-gray-50/50">
                                        <td class="border border-gray-100 p-2 text-center">2</td>
                                        <td class="border border-gray-100 p-2">Hoàng Hà Phương</td>
                                        <td class="border border-gray-100 p-2">Viết bài văn kể chuyện có chi tiết sáng tạo thú vị.</td>
                                        <td class="border border-gray-100 p-2 text-sky-800">Tiếng Việt</td>
                                    </tr>
                                    <tr class="bg-white">
                                        <td class="border border-gray-100 p-2 text-center">3</td>
                                        <td class="border border-gray-100 p-2">Trần Nhật Anh</td>
                                        <td class="border border-gray-100 p-2">Lập sơ đồ tư duy khoa học, đẹp mắt.</td>
                                        <td class="border border-gray-100 p-2 text-sky-800">Khoa học</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Mục 2 -->
                    <div class="space-y-2">
                        <p class="font-black text-gray-800">2. Về việc thực hiện nội quy của trường, lớp:</p>
                        <p class="indent-4 font-semibold">– Hầu hết các bạn trong tổ đi học đầy đủ, đúng giờ; chỉ có 1 bạn nghỉ học 3 ngày vì bị ốm (bạn Phạm Thị Thanh Hương).</p>
                        <p class="indent-4 font-semibold">– Cả tổ thực hiện nghiêm túc việc giữ gìn sạch sẽ lớp học, sân trường, bỏ rác đúng nơi quy định.</p>
                        <p class="indent-4 font-semibold">– Vẫn còn hiện tượng nói chuyện riêng trong giờ học.</p>
                    </div>

                    <!-- Mục 3 -->
                    <div class="space-y-2">
                        <p class="font-black text-gray-800">3. Về các hoạt động khác:</p>
                        <p class="indent-4 font-semibold">– Hát đơn ca trong liên hoan văn nghệ chào mừng ngày khai trường: bạn Nguyễn Chi Mai.</p>
                        <p class="indent-4 font-semibold">– Giới thiệu cuốn sách hay trong giờ sinh hoạt lớp: bạn Lê Gia Bách.</p>
                    </div>
                </div>

                <!-- PHẦN CUỐI -->
                <div id="rp20-cuoi" class="p-3 rounded-xl transition-all duration-500 flex flex-col items-end pr-8">
                    <div class="text-center font-black space-y-1">
                        <p class="uppercase text-gray-800 text-xl md:text-2xl">TỔ TRƯỞNG</p>
                        <p class="italic font-bold text-sky-800 py-2">Việt</p>
                        <p class="text-base text-gray-800">Nguyễn Đức Việt</p>
                    </div>
                </div>
            </div>
            
            <div id="fb-highlight-info" class="hidden p-4 rounded-2xl text-base font-bold shadow-md text-center transition-all duration-320"></div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- CÂU HỎI ĐỌC HIỂU TƯƠNG TÁC (SGK TRANG 34) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">❓</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Trả lời câu hỏi đọc hiểu</h3>
            </div>

            <div class="space-y-6">
                <!-- Câu a -->
                <div class="bg-white p-5 rounded-2xl border border-sky-100 space-y-2 shadow-sm">
                    <p class="font-bold text-gray-900 text-2xl md:text-3xl">a. Bản báo cáo trên viết về điều gì?</p>
                    <select id="vn20-qa" class="w-full p-3 border border-gray-100 rounded-lg text-xl md:text-2xl font-semibold">
                        <option value="">Chọn câu trả lời...</option>
                        <option value="ok">Các hoạt động học tập, kỷ luật và hoạt động khác của Tổ 1 trong tháng 9.</option>
                        <option value="wrong">Kế hoạch thi đấu bóng đá giữa các lớp khối 5.</option>
                        <option value="wrong2">Danh sách khen thưởng học sinh xuất sắc của cả trường.</option>
                    </select>
                </div>

                <!-- Câu b -->
                <div class="bg-white p-5 rounded-2xl border border-sky-100 space-y-2 shadow-sm">
                    <p class="font-bold text-gray-900 text-2xl md:text-3xl">b. Bản báo cáo được gửi cho ai? Ai là người viết báo cáo đó?</p>
                    <select id="vn20-qb" class="w-full p-3 border border-gray-100 rounded-lg text-xl md:text-2xl font-semibold">
                        <option value="">Chọn câu trả lời...</option>
                        <option value="wrong">Gửi cho Hiệu trưởng; do toàn thể lớp 5C viết.</option>
                        <option value="ok">Gửi cho Cô giáo chủ nhiệm lớp 5C; do Tổ trưởng Nguyễn Đức Việt viết.</option>
                        <option value="wrong2">Gửi cho gia đình học sinh; do đại diện phụ huynh viết.</option>
                    </select>
                </div>

                <!-- Câu c -->
                <div class="bg-white p-5 rounded-2xl border border-sky-100 space-y-3 shadow-sm">
                    <p class="font-bold text-gray-900 text-2xl md:text-3xl">c. Kéo/chọn thông tin phù hợp cho mỗi phần của bản báo cáo:</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="p-3 bg-sky-50/50 rounded-xl border border-sky-100 space-y-1">
                            <span class="text-xs font-black text-sky-800">1. PHẦN ĐẦU GỒM:</span>
                            <select id="vn20-qc1" class="w-full p-2 border border-gray-100 rounded-lg text-xs md:text-sm font-semibold">
                                <option value="">Chọn...</option>
                                <option value="ok">Quốc hiệu, tiêu ngữ, địa điểm, thời gian viết, tiêu đề và người nhận.</option>
                                <option value="w1">Nội dung học tập, kỷ luật và bảng biểu thành tích xuất sắc.</option>
                                <option value="w2">Chữ ký, họ và tên của người chịu trách nhiệm viết báo cáo.</option>
                            </select>
                        </div>
                        <div class="p-3 bg-amber-100/10 rounded-xl border border-amber-100 space-y-1">
                            <span class="text-xs font-black text-amber-600">2. PHẦN CHÍNH GỒM:</span>
                            <select id="vn20-qc2" class="w-full p-2 border border-gray-100 rounded-lg text-xs md:text-sm font-semibold">
                                <option value="">Chọn...</option>
                                <option value="w1">Quốc hiệu, tiêu ngữ, địa điểm, thời gian viết, tiêu đề và người nhận.</option>
                                <option value="ok">Báo cáo chi tiết các công việc đã thực hiện theo mục rõ ràng.</option>
                                <option value="w2">Chữ ký, họ và tên của người chịu trách nhiệm viết báo cáo.</option>
                            </select>
                        </div>
                        <div class="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100 space-y-1">
                            <span class="text-xs font-black text-emerald-800">3. PHẦN CUỐI GỒM:</span>
                            <select id="vn20-qc3" class="w-full p-2 border border-gray-100 rounded-lg text-xs md:text-sm font-semibold">
                                <option value="">Chọn...</option>
                                <option value="w1">Quốc hiệu, tiêu ngữ, địa điểm, thời gian viết, tiêu đề và người nhận.</option>
                                <option value="w2">Báo cáo chi tiết các công việc đã thực hiện theo mục rõ ràng.</option>
                                <option value="ok">Chức vụ, chữ ký, họ và tên của người viết báo cáo.</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Câu d -->
                <div class="bg-white p-5 rounded-2xl border border-sky-100 space-y-3 shadow-sm">
                    <p class="font-bold text-gray-900 text-2xl md:text-3xl">d. Nhận xét về cách thức trình bày của từng phần trong bản báo cáo:</p>
                    <div class="space-y-3 text-xl md:text-2xl font-semibold text-gray-800">
                        <div class="flex items-start gap-2">
                            <span class="text-sky-800 mt-1">📌</span>
                            <p><strong>Về hình thức:</strong> Trình bày sạch sẽ, căn lề khoa học, ghi rõ các mục số (1, 2, 3) và có bảng biểu tổng hợp thành tích gọn gàng, trực quan.</p>
                        </div>
                        <div class="flex items-start gap-2">
                            <span class="text-sky-800 mt-1">📌</span>
                            <p><strong>Về nội dung:</strong> Rõ ràng, đầy đủ các hoạt động học tập, kỷ luật và các phong trào văn nghệ khác mà không lan man.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="checkCauHoiVn20();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn20-ch" class="hidden text-base font-bold px-4 py-2 rounded-xl text-center"></div>
        </div>
    </section>

    <!-- 3 GIAI ĐOẠN LƯU Ý KHI VIẾT BÁO CÁO CÔNG VIỆC -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-100/5 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">📝</div>
                <div>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800">2. Lưu ý khi viết báo cáo công việc</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Click vào từng thẻ dưới đây để mở xem chi tiết các câu hỏi tự vấn tương ứng</p>
                </div>
            </div>

            <!-- Thiết kế các thẻ lật/mở rộng trực quan -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-semibold">
                <!-- Thẻ 1 -->
                <div onclick="toggleNote20(1)" class="cursor-pointer bg-white p-6 rounded-2xl border-2 border-amber-100 hover:border-amber-400 hover:shadow-md transition-all space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="px-3 py-1 bg-amber-500 text-amber-600 rounded-lg text-xs font-black">GIAI ĐOẠN 1</span>
                        <span class="text-xl">👉</span>
                    </div>
                    <h4 class="text-xl md:text-2xl font-black text-amber-600">Trước khi viết</h4>
                    <div id="note20-1" class="hidden text-sm text-gray-800 space-y-2 border-t border-amber-50 pt-2 animate-in slide-in-from-top-1 duration-220">
                        <p>• Dựa vào đâu để xác định nội dung cần báo cáo?</p>
                        <p>• Bằng cách nào để thu thập đầy đủ thông tin, số liệu cần thiết?</p>
                        <p>• Vì sao cần lập bảng biểu trong bản báo cáo?</p>
                    </div>
                </div>

                <!-- Thẻ 2 -->
                <div onclick="toggleNote20(2)" class="cursor-pointer bg-white p-6 rounded-2xl border-2 border-sky-100 hover:border-sky-400 hover:shadow-md transition-all space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="px-3 py-1 bg-sky-600 text-sky-800 rounded-lg text-xs font-black">GIAI ĐOẠN 2</span>
                        <span class="text-xl">👉</span>
                    </div>
                    <h4 class="text-xl md:text-2xl font-black text-sky-800">Trong khi viết</h4>
                    <div id="note20-2" class="hidden text-sm text-gray-800 space-y-2 border-t border-sky-50 pt-2 animate-in slide-in-from-top-1 duration-220">
                        <p>• Cần chú ý gì khi viết quốc hiệu, tiêu ngữ (hoặc tên tổ chức)?</p>
                        <p>• Trình bày các công việc như thế nào để dễ theo dõi?</p>
                        <p>• Làm thế nào để trình bày bảng biểu khoa học, đẹp mắt?</p>
                    </div>
                </div>

                <!-- Thẻ 3 -->
                <div onclick="toggleNote20(3)" class="cursor-pointer bg-white p-6 rounded-2xl border-2 border-emerald-100 hover:border-emerald-400 hover:shadow-md transition-all space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="px-3 py-1 bg-emerald-600 text-emerald-800 rounded-lg text-xs font-black">GIAI ĐOẠN 3</span>
                        <span class="text-xl">👉</span>
                    </div>
                    <h4 class="text-xl md:text-2xl font-black text-emerald-800">Sau khi viết</h4>
                    <div id="note20-3" class="hidden text-sm text-gray-800 space-y-2 border-t border-emerald-50 pt-2 animate-in slide-in-from-top-1 duration-220">
                        <p>• Rà soát nội dung báo cáo như thế nào để phát hiện lỗi?</p>
                        <p>• Căn cứ vào đâu để biết bản báo cáo được trình bày đúng yêu cầu?</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- KHUNG GHI NHỚ -->
    <section class="bg-yellow-50/70 p-6 md:p-10 rounded-[40px] border-4 border-dashed border-yellow-100 shadow-lg relative overflow-hidden">
        <div class="absolute -left-10 -bottom-10 w-40 h-40 bg-yellow-100/50 rounded-full blur-2xl select-none"></div>
        
        <h3 class="text-2xl md:text-3xl font-black text-yellow-800 mb-6 flex items-center gap-3">
            <span class="p-2.5 bg-yellow-600 text-white rounded-2xl shadow-md">📌</span>
            Ghi nhớ
        </h3>
        
        <div class="space-y-4 text-base md:text-xl font-bold text-yellow-800 leading-relaxed pl-2">
            <p class="text-yellow-800">Bản báo cáo công việc gồm 3 phần:</p>
            <ul class="list-disc pl-6 space-y-3">
                <li><strong class="text-yellow-800">Phần đầu:</strong> quốc hiệu, tiêu ngữ hoặc tên tổ chức (Đội, Đoàn,...) và địa điểm, thời gian viết báo cáo.</li>
                <li><strong class="text-yellow-800">Phần chính:</strong> tiêu đề, người nhận, nội dung báo cáo (các công việc đã thực hiện).</li>
                <li><strong class="text-yellow-800">Phần cuối:</strong> người viết báo cáo (chữ ký, họ và tên).</li>
            </ul>
            
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiVn20()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Bản báo cáo công việc thường được chia làm mấy phần?",
            "options": [
                "2 phần (Phần nội dung và phần chữ ký)",
                "3 phần (Phần đầu, phần chính, phần cuối)",
                "4 phần (Phần quốc hiệu, phần gửi, phần thân, phần ký)",
                "5 phần khác nhau"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Nội dung nào sau đây thuộc PHẦN ĐẦU của một bản báo cáo công việc?",
            "options": [
                "Nội dung báo cáo chi tiết các công việc đã làm",
                "Quốc hiệu, tiêu ngữ, địa điểm và thời gian viết báo cáo",
                "Họ tên và chữ ký của tổ trưởng",
                "Đề xuất khen thưởng các cá nhân đạt thành tích"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong bản báo cáo mẫu ở SGK, ai là người viết báo cáo?",
            "options": [
                "Cô giáo chủ nhiệm lớp 5C",
                "Bạn Hoàng Hà Phương",
                "Tổ trưởng Nguyễn Đức Việt",
                "Tất cả các thành viên lớp 5C"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Người nhận bản báo cáo hoạt động tháng 9 của Tổ 1 là ai?",
            "options": [
                "Liên đội trưởng trường Kim Đồng",
                "Thầy Hiệu trưởng",
                "Cô giáo chủ nhiệm lớp 5C",
                "Lớp trưởng lớp 5C"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Để nội dung báo cáo dễ theo dõi, người viết nên trình bày thông tin như thế nào?",
            "options": [
                "Viết thành một đoạn văn thật dài từ đầu đến cuối",
                "Trình bày theo các mục được đánh số rõ ràng",
                "Chỉ cần ghi tên các thành viên xuất sắc",
                "Vẽ một bức tranh minh họa lớn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Thành tích 'Lập sơ đồ tư duy khoa học, đẹp mắt' trong bảng biểu thuộc về bạn nào?",
            "options": [
                "Nguyễn Đức Việt",
                "Trần Nhật Anh",
                "Hoàng Hà Phương",
                "Lê Gia Bách"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Quốc hiệu và tiêu ngữ trong bản báo cáo công việc được viết ở vị trí nào?",
            "options": [
                "Ở cuối bản báo cáo, dưới chữ ký",
                "Ở đầu bản báo cáo, căn lề giữa",
                "Ở góc bên phải phần chính của báo cáo",
                "Viết xen kẽ giữa các mục nội dung"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Bạn Phạm Thị Thanh Hương nghỉ học 3 ngày vì lý do gì?",
            "options": [
                "Nghỉ học đi du lịch cùng gia đình",
                "Nghỉ học vì bị ốm",
                "Đi tập văn nghệ cho trường",
                "Đi thi học sinh giỏi môn Toán"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Thành tích của bạn Hoàng Hà Phương là môn học nào?",
            "options": [
                "Toán",
                "Khoa học",
                "Tiếng Việt",
                "Mỹ thuật"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Trong phần chính của bản báo cáo mẫu, các công việc được chia làm mấy mục lớn?",
            "options": [
                "2 mục lớn",
                "3 mục lớn (Học tập, Nội quy trường lớp, Hoạt động khác)",
                "4 mục lớn",
                "5 mục lớn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Việc lập bảng biểu trong bản báo cáo công việc có tác dụng gì?",
            "options": [
                "Làm cho bản báo cáo dài hơn",
                "Giúp tổng hợp số liệu, thành tích một cách khoa học, rõ ràng và dễ đối chiếu",
                "Thay thế hoàn toàn cho phần quốc hiệu tiêu ngữ",
                "Để trang trí cho bản báo cáo có nhiều màu sắc hơn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Chúng ta nên làm gì ở giai đoạn 'Sau khi viết' báo cáo công việc?",
            "options": [
                "Thu thập thêm thông tin từ các thành viên",
                "Rà soát lỗi chính tả, cách dùng từ và xem đã trình bày đúng yêu cầu chưa",
                "Ký tên tổ trưởng ngay lập tức không cần đọc lại",
                "Nộp luôn cho cô giáo mà không cần soát lại"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tên địa điểm và ngày tháng viết báo cáo được đặt ở đâu?",
            "options": [
                "Phía dưới quốc hiệu tiêu ngữ, căn lề phải",
                "Ở đầu hàng trước quốc hiệu tiêu ngữ",
                "Cùng hàng với chữ ký tổ trưởng",
                "Ở giữa phần chính của báo cáo"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Phần cuối cùng của một bản báo cáo công việc bắt buộc phải có thông tin gì?",
            "options": [
                "Ý kiến đóng góp của cô giáo chủ nhiệm",
                "Chức vụ, chữ ký và họ tên của người viết báo cáo",
                "Kế hoạch hoạt động của tháng tiếp theo",
                "Danh sách các bạn hay nói chuyện riêng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trước khi bắt tay vào viết một bản báo cáo, việc đầu tiên cần làm là gì?",
            "options": [
                "Ký tên sẵn vào cuối tờ giấy",
                "Xác định nội dung cần báo cáo và thu thập thông tin, số liệu cần thiết",
                "Kẻ bảng biểu thành tích học tập trước",
                "Viết quốc hiệu và tiêu ngữ thật to"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- HÀM TƯƠNG TÁC BÔI MÀU BÁO CÁO MẪU (HIGHLIGHT) ---
window.highlightReport20 = function(part, btn) {
    const dau = document.getElementById('rp20-dau');
    const chinh = document.getElementById('rp20-chinh');
    const cuoi = document.getElementById('rp20-cuoi');
    const fb = document.getElementById('fb-highlight-info');

    if (!dau || !chinh || !cuoi || !fb) return;

    // Reset styles
    dau.className = "p-3 rounded-xl transition-all duration-500 space-y-4";
    chinh.className = "p-3 rounded-xl transition-all duration-500 space-y-4";
    cuoi.className = "p-3 rounded-xl transition-all duration-500 flex flex-col items-end pr-8";
    fb.classList.add('hidden');

    if (part === 'dau') {
        dau.className = "p-3 rounded-xl transition-all duration-500 space-y-4 bg-sky-600 ring-2 ring-sky-600 shadow-md";
        fb.innerHTML = "🔵 PHẦN ĐẦU: Gồm quốc hiệu, tiêu ngữ, ngày tháng viết báo cáo, tiêu đề báo cáo và kính gửi người nhận.";
        fb.className = "p-4 rounded-2xl text-base font-bold shadow-md text-center transition-all duration-320 bg-sky-600 text-white";
        fb.classList.remove('hidden');
    } else if (part === 'chinh') {
        chinh.className = "p-3 rounded-xl transition-all duration-500 space-y-4 bg-amber-500 ring-2 ring-amber-600 shadow-md";
        fb.innerHTML = "🟡 PHẦN CHÍNH: Trình bày chi tiết các hoạt động đã làm theo từng mục rõ ràng (Học tập, kỷ luật, hoạt động khác) kèm bảng biểu số liệu.";
        fb.className = "p-4 rounded-2xl text-base font-bold shadow-md text-center transition-all duration-320 bg-amber-500 text-white";
        fb.classList.remove('hidden');
    } else if (part === 'cuoi') {
        cuoi.className = "p-3 rounded-xl transition-all duration-500 flex flex-col items-end pr-8 bg-emerald-600 ring-2 ring-emerald-600 shadow-md";
        fb.innerHTML = "🟢 PHẦN CUỐI: Chức vụ người viết báo cáo (Tổ trưởng), chữ ký của tổ trưởng và họ tên đầy đủ.";
        fb.className = "p-4 rounded-2xl text-base font-bold shadow-md text-center transition-all duration-320 bg-emerald-600 text-white";
        fb.classList.remove('hidden');
    } else {
        // Reset
        fb.classList.add('hidden');
    }
};

// --- KIỂM TRA CÂU HỎI ĐỌC HIỂU ---
window.checkCauHoiVn20 = function() {
    const valA = document.getElementById('vn20-qa')?.value;
    const valB = document.getElementById('vn20-qb')?.value;
    const valC1 = document.getElementById('vn20-qc1')?.value;
    const valC2 = document.getElementById('vn20-qc2')?.value;
    const valC3 = document.getElementById('vn20-qc3')?.value;
    const fb = document.getElementById('fb-vn20-ch');

    if (!fb) return;
    fb.classList.remove('hidden');

    if (!valA || !valB || !valC1 || !valC2 || !valC3) {
        fb.innerHTML = "⚠️ Em hãy trả lời đầy đủ các câu hỏi a, b, c trước nhé!";
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-amber-500 text-white";
        return;
    }

    const dung = valA === 'ok' && valB === 'ok' && valC1 === 'ok' && valC2 === 'ok' && valC3 === 'ok';

    if (dung) {
        fb.innerHTML = "🎉 Chính xác! Em đã hiểu rõ nội dung và cấu trúc của bản báo cáo công việc.";
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-emerald-600 text-white";
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác. Em hãy kiểm tra kỹ lại bản báo cáo và các phần để chọn đáp án đúng nhé!";
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-rose-600 text-white";
    }
};

// --- TOGGLE NOTE HIỂN THỊ LƯU Ý ---
window.toggleNote20 = function(id) {
    const note = document.getElementById('note20-' + id);
    if (!note) return;
    if (note.classList.contains('hidden')) {
        note.classList.remove('hidden');
    } else {
        note.classList.add('hidden');
    }
};

// --- NỘP BÀI HOÀN THÀNH ---
window.nopBaiVn20 = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 20',
            '📝',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">📝</span><p class="text-lg md:text-2xl font-bold text-sky-800">Chúc mừng em đã tìm hiểu xong cách viết báo cáo công việc!</p><p class="text-2xl md:text-3xl text-gray-800 mt-3">Một báo cáo khoa học, rõ ràng sẽ giúp công việc được quản lý hiệu quả và chuyên nghiệp.</p></div>'
        );
    }
};
