export const lesson181 = {
    "topic": "Tiếng Việt 5",
    "week": "26",
    "period": "181",
    "title": "VIẾT: VIẾT CHƯƠNG TRÌNH HOẠT ĐỘNG (BÀI VIẾT SỐ 2)",
    "desc": "Học sinh thực hành chuẩn bị và viết một bản chương trình hoạt động hoàn chỉnh (Bài viết số 2) dựa theo 1 trong 2 chủ đề: Quyên góp ủng hộ đồng bào vùng lũ lụt hoặc Tham gia hội diễn văn nghệ chào mừng ngày Nhà giáo Việt Nam.",
    "subject": "Tiếng Việt",
    "theme": "Hương sắc trăm miền",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-4xl mx-auto">
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
                Biết cách chuẩn bị ý kiến, phân công nhiệm vụ và lập kế hoạch chi tiết dưới dạng bảng biểu cho 1 trong 2 hoạt động tập thể gợi ý.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Viết được bản chương trình hoạt động cụ thể, rõ ràng, hợp lý về thời gian, phân công và thiết thực.
            </li>
        </ul>
    </div>

    <!-- 📚 ĐỀ BÀI LỰA CHỌN -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-6 md:p-8 shadow-2xl relative overflow-hidden bg-white border border-slate-100 space-y-6">
            <div class="text-center">
                <span class="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-black text-xs uppercase tracking-widest mb-2">Đề bài</span>
                <h1 class="text-2xl md:text-4xl font-black text-amber-900 uppercase">VIẾT CHƯƠNG TRÌNH HOẠT ĐỘNG</h1>
                <p class="text-gray-500 font-bold text-lg md:text-xl mt-1">(Bài viết số 2)</p>
            </div>

            <div class="bg-amber-50/50 p-6 rounded-3xl border border-amber-100 space-y-4">
                <p class="text-xl md:text-2xl font-black text-amber-900">Em hãy chọn một trong hai hoạt động dưới đây để viết chương trình hoạt động:</p>
                <div class="space-y-3">
                    <button onclick="selectActivity181(1)" id="btn-act-1" class="w-full text-left p-5 rounded-2xl border-2 border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm flex items-center gap-4">
                        <span class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-black text-blue-700">1</span>
                        <span class="text-lg md:text-xl font-bold text-gray-800">Quyên góp ủng hộ đồng bào vùng lũ lụt.</span>
                    </button>
                    <button onclick="selectActivity181(2)" id="btn-act-2" class="w-full text-left p-5 rounded-2xl border-2 border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm flex items-center gap-4">
                        <span class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-black text-blue-700">2</span>
                        <span class="text-lg md:text-xl font-bold text-gray-800">Tham gia hội diễn văn nghệ chào mừng ngày Nhà giáo Việt Nam (20 tháng 11).</span>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- 📝 BƯỚC 1: CHUẨN BỊ (BRAINSTORMING) -->
    <section class="w-full">
        <div class="bg-white rounded-[32px] p-6 md:p-8 border border-slate-100 shadow-xl space-y-6">
            <h3 class="text-xl md:text-2xl font-black text-slate-800 flex items-center gap-3">
                <span class="p-2 bg-slate-100 text-slate-700 rounded-lg">1</span>
                Bước 1: Chuẩn bị
            </h3>
            
            <div id="prep-guide-box" class="p-5 bg-sky-50 rounded-2xl border border-sky-100 text-lg md:text-xl font-semibold text-sky-950">
                👉 Vui lòng nhấn chọn 1 trong 2 chủ đề hoạt động ở trên để hiển thị gợi ý chuẩn bị phù hợp!
            </div>
        </div>
    </section>

    <!-- ✍️ BƯỚC 2: THỰC HÀNH VIẾT CHƯƠNG TRÌNH (INTERACTIVE EDITOR) -->
    <section class="w-full">
        <div class="bg-white rounded-[32px] p-6 md:p-8 border border-slate-100 shadow-xl space-y-6">
            <h3 class="text-xl md:text-2xl font-black text-slate-800 flex items-center gap-3">
                <span class="p-2 bg-sky-100 text-sky-700 rounded-lg">2</span>
                Bước 2: Viết bản chương trình hoạt động
            </h3>

            <!-- Template Editor Sheet -->
            <div class="p-6 md:p-8 bg-amber-50/20 border-2 border-dashed border-amber-300 rounded-[24px] space-y-6">
                <!-- Tên Chương Trình -->
                <div class="text-center space-y-2">
                    <label class="text-md md:text-lg font-black text-amber-800 uppercase block">Chương trình hoạt động</label>
                    <input type="text" id="write-title" class="w-full max-w-xl text-center p-3 border-b-2 border-amber-400 bg-transparent text-xl md:text-2xl font-black outline-none uppercase placeholder-amber-600/50" placeholder="NHẬP TÊN CHƯƠNG TRÌNH HOẠT ĐỘNG">
                </div>

                <!-- 1. Mục đích -->
                <div class="space-y-2">
                    <label class="text-lg md:text-xl font-black text-gray-800 block">I. Mục đích</label>
                    <textarea id="write-goal" rows="3" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-amber-100 outline-none text-lg md:text-xl" placeholder="Nêu rõ mục đích ý nghĩa của hoạt động..."></textarea>
                </div>

                <!-- 2. Thời gian và địa điểm -->
                <div class="space-y-2">
                    <label class="text-lg md:text-xl font-black text-gray-800 block">II. Ban tổ chức & Đối tượng tham gia</label>
                    <textarea id="write-participants" rows="2" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-amber-100 outline-none text-lg md:text-xl" placeholder="- Ban tổ chức: Ban cán sự lớp, chi đội...\n- Đối tượng tham gia: Toàn thể học sinh lớp..."></textarea>
                </div>

                <!-- 3. Chuẩn bị -->
                <div class="space-y-2">
                    <label class="text-lg md:text-xl font-black text-gray-800 block">III. Chuẩn bị dụng cụ và phân công</label>
                    <textarea id="write-prep" rows="3" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-amber-100 outline-none text-lg md:text-xl" placeholder="Liệt kê đồ dùng, dụng cụ cần có và phân công người chuẩn bị..."></textarea>
                </div>

                <!-- 4. Kế hoạch thực hiện (Bảng tương tác) -->
                <div class="space-y-4">
                    <label class="text-lg md:text-xl font-black text-gray-800 block">IV. Kế hoạch thực hiện chi tiết</label>
                    
                    <div class="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                        <table class="min-w-full divide-y divide-slate-200" id="plan-table">
                            <thead class="bg-slate-50">
                                <tr>
                                    <th class="px-4 py-3 text-left text-sm md:text-base font-black text-slate-700 uppercase tracking-wider w-[25%]">Thời gian</th>
                                    <th class="px-4 py-3 text-left text-sm md:text-base font-black text-slate-700 uppercase tracking-wider w-[50%]">Nội dung công việc</th>
                                    <th class="px-4 py-3 text-left text-sm md:text-base font-black text-slate-700 uppercase tracking-wider w-[25%]">Người phụ trách</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-200" id="table-rows">
                                <!-- Row 1 -->
                                <tr>
                                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Ví dụ: Tuần trước sự kiện"></td>
                                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Tuyên truyền, phân công và chuẩn bị cơ sở vật chất"></td>
                                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Lớp trưởng và Ban cán sự"></td>
                                </tr>
                                <!-- Row 2 -->
                                <tr>
                                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Ví dụ: Ngày diễn ra hoạt động"></td>
                                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Tổ chức tiến hành nội dung chính"></td>
                                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Cả lớp"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="flex justify-start">
                        <button onclick="addTableRow181()" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg text-sm md:text-base flex items-center gap-2">
                            ➕ Thêm dòng công việc
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ✔️ BƯỚC 3: ĐỌC SOÁT VÀ CHỈNH SỬA (CHECKLIST) -->
    <section class="w-full">
        <div class="bg-white rounded-[32px] p-6 md:p-8 border border-slate-100 shadow-xl space-y-6">
            <h3 class="text-xl md:text-2xl font-black text-slate-800 flex items-center gap-3">
                <span class="p-2 bg-emerald-100 text-emerald-700 rounded-lg">3</span>
                Bước 3: Đọc soát và chỉnh sửa lỗi
            </h3>

            <div class="p-6 bg-emerald-50/30 rounded-2xl border border-emerald-100 space-y-4">
                <p class="text-lg md:text-xl font-bold text-gray-800">Em hãy tự rà soát bản chương trình hoạt động vừa viết:</p>
                <div class="space-y-3">
                    <label class="flex items-start gap-3 cursor-pointer p-2 hover:bg-white rounded-lg transition-colors">
                        <input type="checkbox" class="mt-1.5 w-5 h-5 accent-emerald-600 rounded">
                        <span class="text-lg md:text-xl font-semibold text-gray-700">Tên chương trình hoạt động rõ ràng, phản ánh đúng hoạt động đã chọn.</span>
                    </label>
                    <label class="flex items-start gap-3 cursor-pointer p-2 hover:bg-white rounded-lg transition-colors">
                        <input type="checkbox" class="mt-1.5 w-5 h-5 accent-emerald-600 rounded">
                        <span class="text-lg md:text-xl font-semibold text-gray-700">Các nội dung phân công chi tiết, có phân bổ công việc thiết thực.</span>
                    </label>
                    <label class="flex items-start gap-3 cursor-pointer p-2 hover:bg-white rounded-lg transition-colors">
                        <input type="checkbox" class="mt-1.5 w-5 h-5 accent-emerald-600 rounded">
                        <span class="text-lg md:text-xl font-semibold text-gray-700">Cột kế hoạch thực hiện rõ ràng về thời gian, công việc và người phụ trách.</span>
                    </label>
                </div>
            </div>

            <!-- Gửi EduRobot -->
            <div class="flex justify-end items-center gap-4"><button onclick="check181WriteAI();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            </div>
        </div>

        <script>
            window.selectActivity181 = function(actNum) {
                // Reset buttons styling
                for (let i = 1; i <= 2; i++) {
                    const btn = document.getElementById('btn-act-' + i);
                    btn.className = "w-full text-left p-5 rounded-2xl border-2 border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm flex items-center gap-4";
                }
                const selectedBtn = document.getElementById('btn-act-' + actNum);
                selectedBtn.className = "w-full text-left p-5 rounded-2xl border-2 border-blue-500 bg-blue-50/50 hover:bg-blue-50 transition-all shadow-sm flex items-center gap-4 text-blue-600";
                
                const prepGuide = document.getElementById('prep-guide-box');
                const titleInput = document.getElementById('write-title');
                const goalText = document.getElementById('write-goal');
                const prepText = document.getElementById('write-prep');
                
                if (actNum === 1) {
                    titleInput.value = "CHƯƠNG TRÌNH QUYÊN GÓP ỦNG HỘ ĐỒNG BÀO VÙNG LŨ LỤT";
                    goalText.value = "- Thể hiện tinh thần tương thân tương ái, lá lành đùm lá rách đối với đồng bào bị thiên tai.\\n- Quyên góp quần áo, sách vở, đồ dùng học tập thiết thực chia sẻ khó khăn với các bạn học sinh vùng lũ.";
                    prepText.value = "- Thùng các-tông đựng đồ: Tổ trưởng tổ 1 & 2 chuẩn bị.\\n- Bàn tiếp nhận quyên góp: Ban cán sự kê tại góc lớp.\\n- Sổ ghi chép thông tin đóng góp: Thủ thư Lan Anh phụ trách ghi nhật ký đóng góp.";
                    
                    prepGuide.innerHTML = \`
                        <p class="font-bold text-sky-900 mb-2">⭐ Gợi ý chuẩn bị cho Quyên góp ủng hộ:</p>
                        <ul class="list-disc pl-5 space-y-1 text-gray-700 text-base md:text-lg font-medium">
                            <li>Chọn các loại đồ dùng thiết thực: sách giáo khoa, vở viết mới, bút, quần áo ấm, thuốc men cơ bản,...</li>
                            <li>Dự kiến công việc: quyên góp, phân loại theo độ tuổi/loại đồ dùng, đóng gói, ghi nhãn và liên hệ chuyển đi.</li>
                            <li>Bảng phân công: cần phân người trực bàn quyên góp, người kiểm đếm và đóng thùng.</li>
                        </ul>
                    \`;
                } else if (actNum === 2) {
                    titleInput.value = "CHƯƠNG TRÌNH THAM GIA HỘI DIỄN VĂN NGHỆ CHÀO MỪNG NGÀY 20/11";
                    goalText.value = "- Kính dâng lời ca tiếng hát bày tỏ lòng tri ân sâu sắc đến thầy cô giáo nhân ngày Nhà giáo Việt Nam.\\n- Tạo không khí thi đua sôi nổi và phát huy tài năng năng khiếu nghệ thuật của lớp.";
                    prepText.value = "- Kịch bản & nhạc nền: Bạn Minh Trang chọn và tập hợp.\\n- Trang phục biểu diễn: Đội văn nghệ liên hệ thuê đồ (được sự hỗ trợ của phụ huynh).\\n- Đạo cụ (hoa, cờ, nơ): Các bạn nam trong lớp cùng làm.";
                    
                    prepGuide.innerHTML = \`
                        <p class="font-bold text-sky-900 mb-2">⭐ Gợi ý chuẩn bị cho Văn nghệ 20/11:</p>
                        <ul class="list-disc pl-5 space-y-1 text-gray-700 text-base md:text-lg font-medium">
                            <li>Xác định các tiết mục tham gia biểu diễn (ví dụ: múa hát tập thể, đơn ca, diễn kịch...).</li>
                            <li>Dự kiến các công việc cần làm: phân công các bạn tập luyện, tập duyệt thử, chuẩn bị trang phục biểu diễn và đạo cụ,...</li>
                            <li>Bảng phân công: ghi rõ bạn phụ trách tập nhảy, bạn chuẩn bị đạo cụ, thời gian tập luyện hàng ngày.</li>
                        </ul>
                    \`;
                }
            };

            window.addTableRow181 = function() {
                const tbody = document.getElementById('table-rows');
                const newRow = document.createElement('tr');
                newRow.innerHTML = \`
                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Nhập thời gian"></td>
                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Nhập nội dung công việc"></td>
                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Người phụ trách"></td>
                \`;
                tbody.appendChild(newRow);
            };

            window.check181WriteAI = async function() {
                const title = document.getElementById('write-title').value.trim();
                const goal = document.getElementById('write-goal').value.trim();
                const participants = document.getElementById('write-participants').value.trim();
                const prep = document.getElementById('write-prep').value.trim();
                
                if (!title || !goal || !prep) {
                    alert('Em hãy chọn hoạt động và điền các mục chuẩn bị trước khi nộp nhé!');
                    return;
                }

                let tableText = "";
                const rows = document.querySelectorAll('#table-rows tr');
                rows.forEach((row, i) => {
                    const inputs = row.querySelectorAll('input');
                    if (inputs.length >= 3) {
                        const timeVal = inputs[0].value.trim();
                        const jobVal = inputs[1].value.trim();
                        const leadVal = inputs[2].value.trim();
                        if (timeVal || jobVal || leadVal) {
                            tableText += \`Công việc \${i+1}: Thời gian: \${timeVal} | Công việc: \${jobVal} | Người phụ trách: \${leadVal}\\n\`;
                        }
                    }
                });

                const fb = document.getElementById('fb-181-write-ai');
                fb.classList.remove('hidden');
                fb.innerHTML = '<div class="p-6 bg-white border-2 border-sky-100 rounded-2xl shadow-lg italic text-lg md:text-xl text-sky-900 animate-pulse text-center">EduRobot đang đọc soát và viết nhận xét cho em, chờ một chút nhé...</div>';
                
                const prompt = \`Học sinh lớp 5 nộp bài Viết Chương trình hoạt động (Bài viết số 2):\\nTiêu đề: \"\${title}\"\\nI. Mục đích: \"\${goal}\"\\nII. Ban tổ chức & Đối tượng: \"\${participants}\"\\nIII. Chuẩn bị: \"\${prep}\"\\nIV. Kế hoạch chi tiết:\\n\${tableText}\\nHãy đọc soát và viết nhận xét chi tiết cho chương trình hoạt động này. Đánh giá tính thực tiễn, sự chu đáo và mạch lạc trong phân công. Khuyên học sinh sửa nếu còn lỗi chính tả hoặc thiếu sót về phân công cụ thể. Xưng hô \"Thầy/Cô\" và gọi học sinh là \"em\".\`;
                
                await askAI('181-write-ai', prompt, 'single', 'writing', 25, prompt);
            };
        </script>
    </section>
</div>
`,
    "practice": {
        "settings": { "pick": 10 },
        "questions": [
            {
                "question": "Mục đích lớn nhất khi lập một chương trình hoạt động tập thể là gì?",
                "options": [
                    "Để khoe với các lớp khác trong trường",
                    "Để hoạt động diễn ra nề nếp, hiệu quả, đúng mục tiêu đề ra",
                    "Để được điểm cao môn Tiếng Việt",
                    "Để nhà trường khen ngợi ban cán sự lớp"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Quy trình lập một chương trình hoạt động gồm có mấy bước chính?",
                "options": ["2 bước", "3 bước (Chuẩn bị, Viết, Đọc soát)", "4 bước", "5 bước"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Trong chương trình quyên góp ủng hộ, công việc nào sau đây là quan trọng hàng đầu trong giai đoạn chuẩn bị?",
                "options": [
                    "Chọn người phụ trách ghi chép, thùng chứa phân loại",
                    "Thiết kế các tiết mục văn nghệ phụ họa",
                    "Chuẩn bị bảng dự toán kinh phí lớn",
                    "Hát tập thể ca khúc chào mừng"
                ],
                "answer": 0,
                "level": 2
            },
            {
                "question": "Khi viết phần mục đích cho hoạt động ủng hộ đồng bào lũ lụt, em cần nhấn mạnh điều gì?",
                "options": [
                    "Tinh thần đoàn kết, tương thân tương ái chia sẻ khó khăn",
                    "Tên tuổi của các bạn có đóng góp nhiều nhất lớp",
                    "Kế hoạch phân công cụ thể cho từng bạn",
                    "Chi phí vận chuyển đồ dùng quyên góp"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Dưới đây là một phần bảng kế hoạch, phần nào bị thiếu thông tin quan trọng nhất?\\n'Thứ Hai (10/11) - Thu dọn, dọn dẹp lớp học - ...'",
                "options": [
                    "Người phụ trách thực hiện công việc",
                    "Địa điểm dọn dẹp cụ thể",
                    "Tên dụng cụ dọn dẹp",
                    "Lời nhận xét của giáo viên chủ nhiệm"
                ],
                "answer": 0,
                "level": 2
            },
            {
                "question": "Để chuẩn bị cho hội diễn văn nghệ ngày 20/11, công tác nào thuộc mục chuẩn bị?",
                "options": [
                    "Lên danh sách tiết mục, nhạc nền, trang phục và đạo cụ",
                    "Lên sân khấu trình diễn trước toàn trường",
                    "Ban giám khảo công bố kết quả giải thưởng",
                    "Báo cáo tổng kết hội diễn văn nghệ của liên đội"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Kế hoạch thực hiện chi tiết trong bản chương trình thường được biểu diễn dưới dạng nào để dễ theo dõi?",
                "options": ["Đoạn văn dài miêu tả", "Bảng biểu (Thời gian, Công việc, Phụ trách)", "Sơ đồ hình tròn vẽ biểu đồ", "Bài thơ trào phúng vui nhộn"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Việc tự đọc soát và chỉnh sửa lỗi sau khi viết xong chương trình hoạt động có ý nghĩa gì?",
                "options": [
                    "Giúp hoàn thiện bài viết, tránh sai sót trong triển khai thực tế",
                    "Để bài viết dài hơn và đẹp hơn",
                    "Không cần thiết vì giáo viên sẽ chấm điểm",
                    "Để chứng tỏ mình viết đúng 100%"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Khi phân công công việc trong chương trình hoạt động lớp, điều gì là quan trọng nhất?",
                "options": [
                    "Phân công rõ ràng công việc phù hợp với từng cá nhân/tổ nhóm",
                    "Để một bạn lớp trưởng gánh vác toàn bộ công việc",
                    "Chỉ giao việc cho những bạn học sinh nam",
                    "Bốc thăm trúng tuyển ngẫu nhiên mọi nhiệm vụ"
                ],
                "answer": 0,
                "level": 2
            },
            {
                "question": "Tiêu đề của một bản chương trình hoạt động nên sử dụng kiểu chữ nào?",
                "options": ["Chữ in hoa nổi bật", "Chữ in thường cỡ nhỏ", "Chữ nghệ thuật khó đọc", "Không cần ghi tiêu đề"],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Bản chương trình hoạt động được viết theo phong cách văn bản nào?",
                "options": ["Văn bản hành chính / báo cáo kế hoạch", "Văn bản miêu tả văn chương", "Văn biểu cảm tự sự", "Thơ lục bát truyền thống"],
                "answer": 0,
                "level": 2
            },
            {
                "question": "Nội dung nào không cần xuất hiện trong chương trình tham gia hội diễn văn nghệ lớp?",
                "options": [
                    "Bảng thống kê kết quả thi học kì 1 của toàn trường",
                    "Tên các tiết mục biểu diễn văn nghệ",
                    "Thời gian, địa điểm tập luyện của đội văn nghệ",
                    "Phân công người phụ trách chuẩn bị trang phục, đạo cụ"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Ai là người có vai trò chính trong việc lập và ký duyệt chương trình hoạt động của chi đội/lớp?",
                "options": [
                    "Ban chỉ huy chi đội hoặc Ban cán sự lớp phối hợp giáo viên chủ nhiệm",
                    "Học sinh lớp bên cạnh",
                    "Bác bảo vệ trường",
                    "Một học sinh đại diện bất kỳ"
                ],
                "answer": 0,
                "level": 2
            },
            {
                "question": "Hành động nào dưới đây là biểu hiện của việc chuẩn bị tốt cho chương trình quyên góp?",
                "options": [
                    "Chuẩn bị sẵn các thùng carton ghi rõ loại đồ quyên góp",
                    "Đến ngày quyên góp mới bắt đầu đi tìm bao tải đựng",
                    "Không phân công ai đứng trực bàn tiếp nhận quyên góp",
                    "Chỉ thông báo miệng mà không có văn bản chương trình cụ thể"
                ],
                "answer": 0,
                "level": 2
            },
            {
                "question": "Trong cấu trúc 3 phần của chương trình hoạt động, mục 'Kế hoạch thực hiện' đứng ở vị trí thứ mấy?",
                "options": ["Thứ nhất", "Thứ hai", "Thứ ba", "Không cố định vị trí"],
                "answer": 2,
                "level": 1
            }
        ]
    }
};
