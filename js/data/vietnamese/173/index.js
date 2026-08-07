export const lesson173 = {
    "topic": "Tiếng Việt 5",
    "week": "25",
    "period": "173",
    "title": "VIẾT: VIẾT CHƯƠNG TRÌNH HOẠT ĐỘNG (BÀI VIẾT SỐ 1)",
    "desc": "Học sinh thực hành chuẩn bị và viết một bản chương trình hoạt động hoàn chỉnh theo các đề tài gợi ý trong sách giáo khoa.",
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
                Biết cách chuẩn bị và lập chương trình cho một hoạt động tập thể (mục đích, phân công chuẩn bị, kế hoạch thực hiện có bảng biểu).
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Rèn luyện kĩ năng viết văn bản hành chính/báo cáo công việc rõ ràng, khoa học và đúng quy cách.
            </li>
        </ul>
    </div>

    <!-- 📚 ĐỀ BÀI LỰA CHỌN -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-6 md:p-8 shadow-2xl relative overflow-hidden bg-white border border-slate-100 space-y-6">
            <div class="text-center">
                <span class="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-black text-xs uppercase tracking-widest mb-2">Đề bài</span>
                <h1 class="text-2xl md:text-4xl font-black text-amber-900 uppercase">VIẾT CHƯƠNG TRÌNH HOẠT ĐỘNG</h1>
                <p class="text-gray-500 font-bold text-lg md:text-xl mt-1">(Bài viết số 1)</p>
            </div>

            <div class="bg-amber-50/50 p-6 rounded-3xl border border-amber-100 space-y-4">
                <p class="text-xl md:text-2xl font-black text-amber-900">Em hãy chọn một trong ba hoạt động dưới đây để viết chương trình hoạt động:</p>
                <div class="space-y-3">
                    <button onclick="selectActivity(1)" id="btn-act-1" class="w-full text-left p-5 rounded-2xl border-2 border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm flex items-center gap-4">
                        <span class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-700">A</span>
                        <span class="text-lg md:text-xl font-bold text-gray-800">Phát động phong trào xây dựng tủ sách của lớp.</span>
                    </button>
                    <button onclick="selectActivity(2)" id="btn-act-2" class="w-full text-left p-5 rounded-2xl border-2 border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm flex items-center gap-4">
                        <span class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-700">B</span>
                        <span class="text-lg md:text-xl font-bold text-gray-800">Lễ kỉ niệm ngày thành lập Đội Thiếu niên Tiền phong Hồ Chí Minh (15 tháng 5).</span>
                    </button>
                    <button onclick="selectActivity(3)" id="btn-act-3" class="w-full text-left p-5 rounded-2xl border-2 border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm flex items-center gap-4">
                        <span class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-700">C</span>
                        <span class="text-lg md:text-xl font-bold text-gray-800">Một hoạt động tập thể khác mà trường em sắp tổ chức.</span>
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
                Bước 1: Chuẩn bị ý tưởng
            </h3>
            
            <div class="grid grid-cols-1 gap-4">
                <div class="space-y-2">
                    <label class="text-lg md:text-xl font-bold text-gray-700 block">Tên chương trình hoạt động dự kiến:</label>
                    <input type="text" id="prep-name" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-sky-100 outline-none font-bold text-lg md:text-xl" placeholder="Ví dụ: Chương trình quyên góp sách 'Tủ sách của em'...">
                </div>
                <div class="space-y-2">
                    <label class="text-lg md:text-xl font-bold text-gray-700 block">Mục đích chính của hoạt động là gì?</label>
                    <input type="text" id="prep-goal" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-sky-100 outline-none text-lg md:text-xl" placeholder="Ví dụ: Xây dựng thói quen đọc sách, đa dạng đầu sách cho lớp...">
                </div>
                <div class="space-y-2">
                    <label class="text-lg md:text-xl font-bold text-gray-700 block">Thời gian và Địa điểm tổ chức:</label>
                    <input type="text" id="prep-loc" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-sky-100 outline-none text-lg md:text-xl" placeholder="Ví dụ: 8h00 ngày 15/5 tại phòng học lớp 5A...">
                </div>
                <div class="space-y-2">
                    <label class="text-lg md:text-xl font-bold text-gray-700 block">Các dụng cụ, phương tiện cần chuẩn bị:</label>
                    <input type="text" id="prep-tools" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-sky-100 outline-none text-lg md:text-xl" placeholder="Ví dụ: Tủ gỗ, sách cũ quyên góp, nhãn dán, sổ theo dõi mượn truyện...">
                </div>
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
                    <input type="text" id="write-title" class="w-full max-w-xl text-center p-3 border-b-2 border-amber-400 bg-transparent text-xl md:text-2xl font-black outline-none uppercase placeholder-amber-600/50" placeholder="CHƯƠNG TRÌNH XÂY DỰNG TỦ SÁCH LỚP 5A">
                </div>

                <!-- 1. Mục đích -->
                <div class="space-y-2">
                    <label class="text-lg md:text-xl font-black text-gray-800 block">I. Mục đích</label>
                    <textarea id="write-goal" rows="2" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-amber-100 outline-none text-lg md:text-xl" placeholder="- Tạo nguồn sách đọc phong phú cho lớp...\n- Phát huy tinh thần sẻ chia và nâng cao văn hóa đọc..."></textarea>
                </div>

                <!-- 2. Thời gian và địa điểm -->
                <div class="space-y-2">
                    <label class="text-lg md:text-xl font-black text-gray-800 block">II. Thời gian và địa điểm</label>
                    <textarea id="write-time-loc" rows="2" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-amber-100 outline-none text-lg md:text-xl" placeholder="- Thời gian: Từ ngày ... đến ngày ...\n- Địa điểm: Tại góc cuối phòng học lớp 5A..."></textarea>
                </div>

                <!-- 3. Chuẩn bị -->
                <div class="space-y-2">
                    <label class="text-lg md:text-xl font-black text-gray-800 block">III. Chuẩn bị</label>
                    <textarea id="write-prep" rows="3" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-amber-100 outline-none text-lg md:text-xl" placeholder="- Giá sách/Tủ đựng sách: Ban cán sự chuẩn bị\n- Quyên góp sách: Mỗi học sinh đóng góp ít nhất 1 quyển sách/truyện\n- Sổ quản lý mượn trả: Thủ thư của lớp (Lan Anh) đảm nhiệm..."></textarea>
                </div>

                <!-- 4. Kế hoạch thực hiện (Bảng tương tác) -->
                <div class="space-y-4">
                    <label class="text-lg md:text-xl font-black text-gray-800 block">IV. Kế hoạch thực hiện</label>
                    
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
                                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Ví dụ: 15/5 đến 18/5"></td>
                                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Phát động và thu gom sách truyện đóng góp"></td>
                                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Lớp trưởng & Thủ thư"></td>
                                </tr>
                                <!-- Row 2 -->
                                <tr>
                                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Ví dụ: 19/5"></td>
                                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Phân loại sách, dán nhãn và sắp xếp lên kệ"></td>
                                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Cả lớp"></td>
                                </tr>
                                <!-- Row 3 -->
                                <tr>
                                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Ví dụ: Từ 20/5 trở đi"></td>
                                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Bắt đầu mở cửa tủ sách phục vụ mượn đọc vào giờ ra chơi"></td>
                                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Thủ thư của lớp"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="flex justify-start">
                        <button onclick="addTableRow()" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg text-sm md:text-base flex items-center gap-2">
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
                Bước 3: Đọc soát và tự đánh giá
            </h3>

            <div class="p-6 bg-emerald-50/30 rounded-2xl border border-emerald-100 space-y-4">
                <p class="text-lg md:text-xl font-bold text-gray-800">Em hãy tự đọc soát bản chương trình vừa viết dựa theo các tiêu chí sau:</p>
                <div class="space-y-3">
                    <label class="flex items-start gap-3 cursor-pointer p-2 hover:bg-white rounded-lg transition-colors">
                        <input type="checkbox" class="mt-1.5 w-5 h-5 accent-emerald-600 rounded">
                        <span class="text-lg md:text-xl font-semibold text-gray-700">Bản chương trình đã có đủ các mục quy định (Mục đích, Chuẩn bị, Kế hoạch).</span>
                    </label>
                    <label class="flex items-start gap-3 cursor-pointer p-2 hover:bg-white rounded-lg transition-colors">
                        <input type="checkbox" class="mt-1.5 w-5 h-5 accent-emerald-600 rounded">
                        <span class="text-lg md:text-xl font-semibold text-gray-700">Nội dung của từng phần được viết cụ thể, rõ ràng, phân công nhiệm vụ phù hợp.</span>
                    </label>
                    <label class="flex items-start gap-3 cursor-pointer p-2 hover:bg-white rounded-lg transition-colors">
                        <input type="checkbox" class="mt-1.5 w-5 h-5 accent-emerald-600 rounded">
                        <span class="text-lg md:text-xl font-semibold text-gray-700">Hình thức trình bày gọn gàng, phần kế hoạch được đặt dưới dạng bảng biểu dễ tra cứu.</span>
                    </label>
                </div>
            </div>

            <!-- Gửi EduRobot -->
            <div class="flex justify-end items-center gap-4"><button onclick="check173WriteAI();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            </div>
        </div>

        <script>
            window.selectActivity = function(actNum) {
                // Reset
                for (let i = 1; i <= 3; i++) {
                    const btn = document.getElementById('btn-act-' + i);
                    btn.className = "w-full text-left p-5 rounded-2xl border-2 border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm flex items-center gap-4";
                }
                const selectedBtn = document.getElementById('btn-act-' + actNum);
                selectedBtn.className = "w-full text-left p-5 rounded-2xl border-2 border-sky-500 bg-sky-50/50 hover:bg-sky-50 transition-all shadow-sm flex items-center gap-4 text-sky-900";
                
                // Pre-fill titles helper
                const titleInput = document.getElementById('write-title');
                if (actNum === 1) {
                    titleInput.value = "CHƯƠNG TRÌNH XÂY DỰNG TỦ SÁCH LỚP 5A";
                } else if (actNum === 2) {
                    titleInput.value = "CHƯƠNG TRÌNH LỄ KỈ NIỆM NGÀY THÀNH LẬP ĐỘI THIẾU NIÊN TIỀN PHONG HỒ CHÍ MINH";
                } else {
                    titleInput.value = "CHƯƠNG TRÌNH HOẠT ĐỘNG CHIẾN DỊCH XANH TRƯỜNG TIỂU HỌC";
                }
            };

            window.addTableRow = function() {
                const tbody = document.getElementById('table-rows');
                const newRow = document.createElement('tr');
                newRow.innerHTML = \`
                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Nhập thời gian"></td>
                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Nhập nội dung công việc"></td>
                    <td class="p-2"><input type="text" class="w-full p-2 border border-slate-100 rounded focus:border-amber-400 outline-none text-base font-medium" placeholder="Người phụ trách"></td>
                \`;
                tbody.appendChild(newRow);
            };

            window.check173WriteAI = async function() {
                const title = document.getElementById('write-title').value.trim();
                const goal = document.getElementById('write-goal').value.trim();
                const timeLoc = document.getElementById('write-time-loc').value.trim();
                const prep = document.getElementById('write-prep').value.trim();
                
                if (!title || !goal || !timeLoc || !prep) {
                    alert('Em hãy điền đầy đủ các mục I, II, III, IV của bản chương trình trước khi nộp nhé!');
                    return;
                }

                // Gather table text
                let tableText = "";
                const rows = document.querySelectorAll('#table-rows tr');
                rows.forEach((row, i) => {
                    const inputs = row.querySelectorAll('input');
                    if (inputs.length >= 3) {
                        const timeVal = inputs[0].value.trim();
                        const jobVal = inputs[1].value.trim();
                        const leadVal = inputs[2].value.trim();
                        if (timeVal || jobVal || leadVal) {
                            tableText += \`Dòng \${i+1}: Thời gian: \${timeVal} | Công việc: \${jobVal} | Người phụ trách: \${leadVal}\\n\`;
                        }
                    }
                });

                const fb = document.getElementById('fb-173-write-ai');
                fb.classList.remove('hidden');
                fb.innerHTML = '<div class="p-6 bg-white border-2 border-sky-100 rounded-2xl shadow-lg italic text-lg md:text-xl text-sky-900 animate-pulse text-center">EduRobot đang chấm điểm bài viết số 1 của em, đợi một chút nhé...</div>';
                
                const prompt = \`Học sinh lớp 5 nộp bài Viết Chương trình hoạt động (Bài viết số 1):\\nTiêu đề: \"\${title}\"\\nI. Mục đích: \"\${goal}\"\\nII. Thời gian và Địa điểm: \"\${timeLoc}\"\\nIII. Chuẩn bị: \"\${prep}\"\\nIV. Kế hoạch thực hiện:\\n\${tableText}\\nHãy chấm bài viết này, khen ngợi cấu trúc và cách trình bày, đưa ra góp ý chỉnh sửa cụ thể và khích lệ em học sinh. Xưng hô \"Thầy/Cô\" và gọi học sinh là \"em\".\`;
                
                await askAI('173-write-ai', prompt, 'single', 'writing', 25, prompt);
            };
        </script>
    </section>
</div>
`,
    "practice": {
        "settings": { "pick": 10 },
        "questions": [
            {
                "question": "Bản chương trình hoạt động tập thể thường gồm những nội dung chính nào?",
                "options": [
                    "Chỉ cần tiêu đề và danh sách người tham gia",
                    "Mục đích, chuẩn bị và kế hoạch thực hiện",
                    "Chỉ gồm thời gian và kinh phí chi tiêu",
                    "Một bài thơ ngắn kể về hoạt động"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Mục đầu tiên bắt buộc phải có sau tiêu đề của chương trình hoạt động là gì?",
                "options": ["Kế hoạch thực hiện", "Chuẩn bị dụng cụ", "Mục đích", "Thời gian và địa điểm"],
                "answer": 2,
                "level": 1
            },
            {
                "question": "Phần nào trong chương trình hoạt động giúp người đọc biết rõ ý nghĩa và kết quả mong muốn của hoạt động?",
                "options": ["Mục đích", "Chuẩn bị", "Kế hoạch thực hiện", "Ý kiến phản hồi"],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Trong phần 'Chuẩn bị', chúng ta cần liệt kê những điều gì?",
                "options": [
                    "Các món ăn yêu thích của từng thành viên",
                    "Dụng cụ, phương tiện và sự phân công chuẩn bị ban đầu",
                    "Lịch trình chi tiết theo từng phút",
                    "Nhật ký cảm xúc sau khi kết thúc chương trình"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Bảng 'Kế hoạch thực hiện' trong gợi ý viết chương trình hoạt động gồm 3 cột nào?",
                "options": [
                    "Thời gian | Nội dung công việc | Người phụ trách",
                    "Họ tên | Số điện thoại | Địa chỉ nhà",
                    "Tên dụng cụ | Số lượng | Đơn giá mua",
                    "Người đề xuất | Ý kiến đóng góp | Đánh giá chung"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Khi lập chương trình hoạt động, vì sao cần phân công rõ 'Người phụ trách' cho mỗi công việc?",
                "options": [
                    "Để ai làm sai sẽ bị phạt tiền",
                    "Đảm bảo công việc có người chịu trách nhiệm rõ ràng, dễ đôn đốc và hoàn thành đúng hạn",
                    "Để khoe khoang tên tuổi của các thành viên",
                    "Để chọn ra người làm việc nhiều nhất"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Ý nào dưới đây KHÔNG phải là một đề tài viết chương trình hoạt động được gợi ý trong SGK trang 68?",
                "options": [
                    "Phát động phong trào xây dựng tủ sách của lớp",
                    "Lễ kỉ niệm ngày thành lập Đội Thiếu niên Tiền phong Hồ Chí Minh",
                    "Viết thư gửi cho một người bạn cũ lâu ngày không gặp",
                    "Một hoạt động tập thể mà trường chuẩn bị tổ chức"
                ],
                "answer": 2,
                "level": 1
            },
            {
                "question": "Khi ghi chép 'Thời gian và địa điểm', chúng ta cần lưu ý điều gì?",
                "options": [
                    "Phải thật chung chung để dễ thay đổi",
                    "Phải cụ thể, rõ ràng để mọi người biết chính xác khi nào và ở đâu diễn ra",
                    "Chỉ cần ghi ngày mà không cần ghi giờ",
                    "Chỉ ghi địa điểm mà bỏ qua thời gian"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Đặc điểm nổi bật về hình thức của phần 'Kế hoạch thực hiện' là gì?",
                "options": [
                    "Trình bày dưới dạng một câu chuyện kể dài",
                    "Trình bày dưới dạng bảng biểu rõ ràng",
                    "Trình bày bằng các nét vẽ tranh minh họa",
                    "Trình bày dưới dạng một sơ đồ hình tròn"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Mục tiêu lớn nhất của việc lập và viết chương trình hoạt động trước khi tổ chức là gì?",
                "options": [
                    "Để nộp lấy điểm cao từ thầy cô giáo",
                    "Giúp mọi người phối hợp nhịp nhàng, hoạt động diễn ra nề nếp và thành công tốt đẹp",
                    "Để giới thiệu tên lớp với toàn trường",
                    "Để lưu trữ làm tài liệu lịch sử"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Sau khi viết xong bản chương trình hoạt động, bước quan trọng tiếp theo học sinh cần làm gì?",
                "options": [
                    "Bỏ đi viết bài khác",
                    "Đọc soát lại bài viết theo các tiêu chí và chỉnh sửa lỗi nếu có",
                    "In ra và dán lên bảng tin ngay lập tức",
                    "Đóng tập lại và đi chơi"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Từ ngữ nào mô tả đúng tính chất ngôn ngữ trong một bản chương trình hoạt động?",
                "options": [
                    "Bay bổng, lãng mạn, giàu cảm xúc",
                    "Ngắn gọn, rõ ràng, chính xác, khoa học",
                    "Dài dòng, chi tiết mọi cảm xúc cá nhân",
                    "Dùng nhiều câu hỏi tu từ và cảm thán"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Tại sao 'Xây dựng tủ sách của lớp' cần được lên chương trình hoạt động cụ thể?",
                "options": [
                    "Vì đây là hoạt động cần sự tham gia và đóng góp chung của cả tập thể lớp",
                    "Vì giá sách rất nặng không ai mang nổi",
                    "Để kiểm tra xem ai không đóng tiền",
                    "Để tranh giành vị trí thủ thư của lớp"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Ngày thành lập Đội Thiếu niên Tiền phong Hồ Chí Minh là ngày nào?",
                "options": ["Ngày 26 tháng 3", "Ngày 15 tháng 5", "Ngày 1 tháng 6", "Ngày 5 tháng 9"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Khi tự nhận xét bản chương trình của mình, tiêu chí nào thể hiện sự hoàn chỉnh về nội dung?",
                "options": [
                    "Có đủ các phần chính và nội dung từng mục rõ ràng, khả thi",
                    "Chữ viết đẹp và sạch sẽ không tì vết",
                    "Sử dụng thật nhiều màu sắc trang trí bắt mắt",
                    "Có nhiều hình vẽ sinh động xung quanh"
                ],
                "answer": 0,
                "level": 1
            }
        ]
    }
};