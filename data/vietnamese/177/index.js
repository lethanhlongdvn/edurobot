export const lesson177 = {
    "topic": "Tiếng Việt 5",
    "week": "26",
    "period": "177",
    "title": "VIẾT: ĐÁNH GIÁ, CHỈNH SỬA CHƯƠNG TRÌNH HOẠT ĐỘNG",
    "desc": "Học sinh nghe nhận xét chung từ giáo viên, tự đánh giá và chỉnh sửa bản chương trình hoạt động đã viết về nội dung và hình thức, chia sẻ với người thân.",
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
                Biết cách tự đánh giá bản chương trình hoạt động của mình dựa theo các tiêu chí gợi ý.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Chỉnh sửa, hoàn thiện cả về nội dung (hoạt động cụ thể, thời gian, phân công) lẫn hình thức trình bày (bảng biểu).
            </li>
        </ul>
    </div>

    <!-- 📢 BƯỚC 1: NGHE THẦY CÔ NHẬN XÉT -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-6 md:p-8 shadow-2xl bg-white border border-slate-100 space-y-4">
            <div class="flex items-start gap-4">
                <span class="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-black text-xl shrink-0 shadow-lg">1</span>
                <h2 class="text-2xl md:text-3xl font-black text-gray-800">Nghe thầy cô giáo nhận xét chung</h2>
            </div>
            <div class="p-6 bg-amber-50/30 rounded-3xl border border-amber-100 text-lg md:text-xl font-bold text-amber-900 leading-relaxed">
                📢 Em hãy chú ý lắng nghe thầy cô giáo nhận xét về các bài viết chương trình hoạt động của lớp mình. Hãy ghi nhớ các ưu điểm cần phát huy và các lỗi phổ biến (nếu có) để chuẩn bị chỉnh sửa bài của mình nhé!
            </div>
        </div>
    </section>

    <!-- 📊 BƯỚC 2: TỰ ĐÁNH GIÁ BẢN CHƯƠNG TRÌNH -->
    <section class="w-full">
        <div class="bg-white rounded-[40px] p-6 md:p-10 border border-slate-100 shadow-xl space-y-6">
            <div class="flex items-start gap-4">
                <span class="w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center font-black text-xl shrink-0 shadow-lg">2</span>
                <h2 class="text-2xl md:text-3xl font-black text-gray-800">Đánh giá bản chương trình hoạt động</h2>
            </div>

            <p class="text-lg md:text-xl font-bold text-gray-700">Em hãy tích chọn trạng thái của từng tiêu chí dưới đây đối với bản chương trình em đã viết:</p>
            
            <div class="space-y-4">
                <!-- Tiêu chí 1 -->
                <div class="flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-150 gap-4">
                    <span class="text-lg md:text-xl font-bold text-gray-800">a. Mục đích của chương trình hoạt động rõ ràng:</span>
                    <div class="flex gap-3">
                        <button onclick="setCriteria(1, true, this)" class="px-4 py-2 rounded-xl bg-white border border-slate-200 font-bold hover:bg-emerald-50 text-base">Đạt ✅</button>
                        <button onclick="setCriteria(1, false, this)" class="px-4 py-2 rounded-xl bg-white border border-slate-200 font-bold hover:bg-red-50 text-base">Cần sửa 🛠️</button>
                    </div>
                </div>

                <!-- Tiêu chí 2 -->
                <div class="flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-150 gap-4">
                    <span class="text-lg md:text-xl font-bold text-gray-800">b. Địa điểm và thời gian thực hiện cụ thể:</span>
                    <div class="flex gap-3">
                        <button onclick="setCriteria(2, true, this)" class="px-4 py-2 rounded-xl bg-white border border-slate-200 font-bold hover:bg-emerald-50 text-base">Đạt ✅</button>
                        <button onclick="setCriteria(2, false, this)" class="px-4 py-2 rounded-xl bg-white border border-slate-200 font-bold hover:bg-red-50 text-base">Cần sửa 🛠️</button>
                    </div>
                </div>

                <!-- Tiêu chí 3 -->
                <div class="flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-150 gap-4">
                    <span class="text-lg md:text-xl font-bold text-gray-800">c. Công tác chuẩn bị dụng cụ, phân công chi tiết:</span>
                    <div class="flex gap-3">
                        <button onclick="setCriteria(3, true, this)" class="px-4 py-2 rounded-xl bg-white border border-slate-200 font-bold hover:bg-emerald-50 text-base">Đạt ✅</button>
                        <button onclick="setCriteria(3, false, this)" class="px-4 py-2 rounded-xl bg-white border border-slate-200 font-bold hover:bg-red-50 text-base">Cần sửa 🛠️</button>
                    </div>
                </div>

                <!-- Tiêu chí 4 -->
                <div class="flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-150 gap-4">
                    <span class="text-lg md:text-xl font-bold text-gray-800">d. Nội dung các việc cụ thể và phân bổ thời gian hợp lý:</span>
                    <div class="flex gap-3">
                        <button onclick="setCriteria(4, true, this)" class="px-4 py-2 rounded-xl bg-white border border-slate-200 font-bold hover:bg-emerald-50 text-base">Đạt ✅</button>
                        <button onclick="setCriteria(4, false, this)" class="px-4 py-2 rounded-xl bg-white border border-slate-200 font-bold hover:bg-red-50 text-base">Cần sửa 🛠️</button>
                    </div>
                </div>

                <!-- Tiêu chí 5 (Mở rộng) -->
                <div class="p-4 bg-sky-50/50 rounded-2xl border border-sky-100 space-y-2">
                    <span class="text-lg md:text-xl font-bold text-sky-950 block">🌸 Gợi ý mở rộng (Ý kiến đề xuất hoặc sáng tạo riêng của em):</span>
                    <input type="text" id="crit-creative" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-sky-100 outline-none text-lg" placeholder="Ví dụ: Đề xuất khen thưởng các bạn đóng góp tích cực, bổ sung nội dung sinh hoạt sao...">
                </div>
            </div>
        </div>
    </section>

    <!-- 🛠️ BƯỚC 3: CHỈNH SỬA & HOÀN THIỆN BẢN CHƯƠNG TRÌNH -->
    <section class="w-full">
        <div class="bg-white rounded-[40px] p-6 md:p-10 border border-slate-100 shadow-xl space-y-6">
            <div class="flex items-start gap-4">
                <span class="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-xl shrink-0 shadow-lg">3</span>
                <h2 class="text-2xl md:text-3xl font-black text-gray-800">Chỉnh sửa bản chương trình hoạt động</h2>
            </div>
            
            <p class="text-lg md:text-xl font-bold text-gray-700">Dựa vào đánh giá ở trên và nhận xét của thầy cô, em hãy viết bản chương trình hoạt động đã được chỉnh sửa và nâng cấp hoàn chỉnh vào ô dưới đây:</p>

            <div class="pl-0 space-y-4">
                <div class="flex justify-end">
                    <button onclick="toggleSpeech('v-177-edit')" class="p-3 bg-emerald-100 text-emerald-600 rounded-full hover:bg-emerald-200 transition-all flex items-center gap-2 font-bold text-lg">
                        <span>🎙️ Nói</span>
                    </button>
                </div>
                <textarea id="v-177-edit" rows="8" class="w-full p-6 rounded-3xl border-2 border-emerald-100 focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 outline-none transition-all serif-font text-lg md:text-xl font-medium" placeholder="Nhập bản chương trình hoạt động đã được chỉnh sửa hoàn chỉnh của em..."></textarea>
            </div>

            <!-- Gửi EduRobot -->
            <div class="flex justify-center flex-col items-center gap-6 pt-4">
                <button onclick="check177EditAI()" class="px-8 py-4 md:px-12 md:py-5 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-2xl shadow-xl transition-all active:scale-[0.95] flex items-center justify-center gap-3 text-lg md:text-xl uppercase tracking-wider">
                    <span>🤖</span> 
                    <span>Nộp bản chỉnh sửa cho EduRobot</span>
                </button>
                <div id="fb-177-edit" class="w-full hidden mt-4"></div>
            </div>
        </div>
    </section>

    <!-- 🏡 HOẠT ĐỘNG CÙNG NGƯỜI THÂN -->
    <section class="w-full">
        <div class="bg-amber-50/40 p-6 md:p-8 rounded-[32px] border border-amber-200 shadow-md space-y-4">
            <h3 class="text-xl md:text-2xl font-black text-amber-900 flex items-center gap-3">
                <span>🏡</span>
                Hoạt động cùng người thân
            </h3>
            <p class="text-lg md:text-xl text-gray-700 leading-relaxed font-bold">
                Em hãy chia sẻ bản chương trình hoạt động này với bố mẹ hoặc người thân trong gia đình. Lắng nghe những ý kiến đóng góp từ người thân và ghi chú lại ý kiến góp ý của gia đình dưới đây nhé:
            </p>
            <div class="bg-white p-4 rounded-xl border border-amber-100 flex flex-col gap-4">
                <textarea id="p-family-feedback" rows="2" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-amber-100 outline-none text-lg md:text-xl font-medium" placeholder="Ví dụ: Bố mẹ khen ngợi bản kế hoạch chi tiết, gợi ý nên chuẩn bị thêm hộp sơ cứu nhỏ..."></textarea>
                <div class="flex justify-end">
                    <button onclick="saveFamilyFeedback()" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-md transition-all text-base md:text-lg">
                        💾 Lưu ý kiến đóng góp
                    </button>
                </div>
                <div id="fb-family" class="hidden mt-2 text-center text-green-600 font-bold text-lg"></div>
            </div>
        </div>
    </section>

    <script>
        const statusMap = { 1: '', 2: '', 3: '', 4: '' };

        window.setCriteria = function(num, isPassed, btn) {
            statusMap[num] = isPassed ? 'Đạt' : 'Cần sửa';
            
            // Reset siblings style
            const parent = btn.parentNode;
            const buttons = parent.querySelectorAll('button');
            buttons.forEach(b => {
                b.className = "px-4 py-2 rounded-xl bg-white border border-slate-200 font-bold text-base";
            });

            if (isPassed) {
                btn.className = "px-4 py-2 rounded-xl bg-emerald-50 border-2 border-emerald-500 text-emerald-700 font-bold text-base shadow-sm";
            } else {
                btn.className = "px-4 py-2 rounded-xl bg-red-50 border-2 border-red-500 text-red-700 font-bold text-base shadow-sm";
            }
        };

        window.check177EditAI = async function() {
            const editVal = document.getElementById('v-177-edit').value.trim();
            const creativeVal = document.getElementById('crit-creative').value.trim();
            
            if (!editVal) {
                alert('Em hãy nhập bản chương trình hoạt động đã chỉnh sửa trước khi gửi nhé!');
                return;
            }

            const fb = document.getElementById('fb-177-edit');
            fb.classList.remove('hidden');
            fb.innerHTML = '<div class="p-6 bg-white border-2 border-sky-100 rounded-2xl shadow-lg italic text-lg md:text-xl text-sky-900 animate-pulse text-center">EduRobot đang thẩm định bản chỉnh sửa của em...</div>';

            const statusReport = \`Tiêu chí a: \${statusMap[1] || 'Chưa đánh giá'}, Tiêu chí b: \${statusMap[2] || 'Chưa đánh giá'}, Tiêu chí c: \${statusMap[3] || 'Chưa đánh giá'}, Tiêu chí d: \${statusMap[4] || 'Chưa đánh giá'}\`;

            const prompt = \`Học sinh lớp 5 nộp bài Chỉnh sửa chương trình hoạt động (Tiết 177):\\nBản đánh giá ban đầu: \${statusReport}\\nÝ kiến sáng tạo thêm (hoa xanh): \"\${creativeVal}\"\\nBản chương trình đã chỉnh sửa hoàn chỉnh:\\n\"\${editVal}\"\\nHãy chấm điểm bản chỉnh sửa này, khen ngợi những điểm cải tiến rõ rệt về mặt nội dung và hình thức, khích lệ em học sinh tự tin khi thực hiện thực tế. Xưng hô \"Thầy/Cô\" và gọi học sinh là \"em\".\`;

            await askAI('177-edit', prompt, 'single', 'writing', 26, prompt);
        };

        window.saveFamilyFeedback = function() {
            const familyText = document.getElementById('p-family-feedback').value.trim();
            const fb = document.getElementById('fb-family');
            fb.classList.remove('hidden');
            if (!familyText) {
                fb.className = "text-red-500 font-bold text-lg mt-2 text-center";
                fb.innerHTML = "⚠️ Em hãy nhập ý kiến đóng góp của người thân trước nhé!";
                return;
            }
            fb.className = "text-green-600 font-bold text-lg mt-2 text-center";
            fb.innerHTML = "💾 Đã lưu thành công ý kiến đóng góp của gia đình! Em thật ngoan khi biết chia sẻ bài học với người thân.";
        };
    </script>
</div>
`,
    "practice": {
        "settings": { "pick": 10 },
        "questions": [
            {
                "question": "Mục đích lớn nhất của tiết học 'Đánh giá, chỉnh sửa chương trình hoạt động' là gì?",
                "options": [
                    "Để chép lại bài viết cũ cho đẹp hơn",
                    "Đánh giá những điểm đạt và chưa đạt, chỉnh sửa để hoàn thiện bản chương trình về cả nội dung và hình thức",
                    "Để học thuộc lòng bản chương trình hoạt động",
                    "Để so sánh điểm số giữa các bạn trong lớp"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Khi nghe nhận xét chung từ thầy cô, học sinh cần có thái độ như thế nào?",
                "options": [
                    "Không cần lắng nghe vì đã biết điểm",
                    "Chú ý lắng nghe, ghi chép lỗi chung để rút kinh nghiệm chỉnh sửa bài của mình",
                    "Nói chuyện riêng với bạn bên cạnh",
                    "Tìm cách phản đối nhận xét của thầy cô"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Nội dung nào dưới đây KHÔNG phải là một gợi ý đánh giá bản chương trình trong SGK trang 72?",
                "options": [
                    "Mục đích của chương trình hoạt động",
                    "Địa điểm và thời gian thực hiện",
                    "Chi phí mua trang phục biểu diễn của từng cá nhân",
                    "Nội dung các việc cụ thể và phân bổ thời gian"
                ],
                "answer": 2,
                "level": 1
            },
            {
                "question": "Khi tự đánh giá phần 'Công tác chuẩn bị', em cần lưu ý điều gì?",
                "options": [
                    "Có chuẩn bị đầy đủ dụng cụ, phương tiện cần thiết và phân công rõ người phụ trách hay chưa",
                    "Chỉ cần chuẩn bị thật nhiều đồ ăn ngọt",
                    "Ai chuẩn bị đồ dùng đắt tiền nhất",
                    "Bỏ qua khâu phân công chuẩn bị để tự làm"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Nếu phần 'Thời gian và Địa điểm' bị nhận xét là quá chung chung, ta nên chỉnh sửa như thế nào?",
                "options": [
                    "Ghi ngày tháng cụ thể, ghi rõ số phòng hoặc khu vực tổ chức hoạt động",
                    "Bỏ hẳn phần địa điểm đi",
                    "Ghi thời gian là 'mùa hè' để dễ chuẩn bị",
                    "Chỉ ghi giờ bắt đầu mà không ghi ngày diễn ra"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Khi chỉnh sửa nội dung công việc cụ thể, chúng ta nên ưu tiên điều gì?",
                "options": [
                    "Viết thật dài dòng cho trang trọng",
                    "Phân công rõ ràng công việc phù hợp với năng lực mỗi người và chia thời gian thực hiện khoa học",
                    "Đổi người phụ trách liên tục",
                    "Chọn công việc khó nhất giao cho người nhỏ nhất"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Chỉnh sửa 'Hình thức trình bày' của chương trình hoạt động bao gồm những việc gì?",
                "options": [
                    "Trang trí bằng các nét vẽ hoa văn rực rỡ xung quanh tờ giấy",
                    "Trình bày sạch sẽ, đúng quy cách văn bản hành chính học đường, phần kế hoạch được kẻ bảng biểu rõ ràng",
                    "Dán thêm nhiều ảnh cá nhân lên bài viết",
                    "Viết bằng nhiều loại bút màu khác nhau"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Hoạt động 'Chia sẻ với người thân' mang lại lợi ích gì cho học sinh?",
                "options": [
                    "Để được bố mẹ mua cho đồ chơi mới",
                    "Nhận thêm những góp ý thiết thực từ bố mẹ và nhận được sự giúp đỡ, đồng hành thực tế từ gia đình",
                    "Để tránh bị phạt ở lớp",
                    "Để khoe khoang thành tích cá nhân"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Trong gợi ý đánh giá ở trang 72, ký hiệu bông hoa màu xanh biểu thị điều gì?",
                "options": [
                    "Nội dung bắt buộc phải bỏ đi",
                    "Gợi ý tự đề xuất thêm các nội dung đánh giá độc đáo hoặc phần sáng tạo riêng biệt",
                    "Chữ ký của tác giả cuốn sách",
                    "Một câu đố vui dân gian"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Khi phát hiện phân bổ thời gian cho các công việc không hợp lý (ví dụ: công việc dọn dẹp chỉ cho 1 phút), em cần sửa thế nào?",
                "options": [
                    "Giữ nguyên và bắt các bạn làm thật nhanh",
                    "Tăng thời gian phân bổ cho công việc đó sao cho thực tế và khả thi",
                    "Hủy bỏ luôn công việc dọn dẹp",
                    "Giao công việc đó cho giáo viên chủ nhiệm làm hộ"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Yêu cầu chung của một bản chương trình hoạt động sau khi đã chỉnh sửa là gì?",
                "options": [
                    "Phải thật ngắn gọn chỉ trong 1 câu",
                    "Đầy đủ, mạch lạc, khoa học và có tính khả thi (thực hiện được trong thực tế)",
                    "Có nhiều từ ngữ nói ẩn dụ bay bổng",
                    "Chỉ cần có hình vẽ đẹp không cần chữ"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Trong phần tự đánh giá tiêu chí 'Mục đích', thế nào được coi là mục đích ĐẠT?",
                "options": [
                    "Mục đích nêu rõ lý do và ý nghĩa thiết thực của hoạt động đối với tập thể lớp/trường",
                    "Mục đích ghi chung chung là 'cho vui'",
                    "Không ghi rõ mục đích mà chỉ ghi tên hoạt động",
                    "Mục đích chỉ mang lại lợi ích cho riêng bản thân người viết"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Ai là người có thể đóng góp ý kiến giúp em hoàn thiện bản chương trình tốt nhất ngoài thầy cô?",
                "options": [
                    "Các bạn cùng nhóm và người thân trong gia đình",
                    "Một người lạ đi đường",
                    "Nhân vật trong truyện cổ tích",
                    "Không cần ý kiến của ai cả"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Nếu bản chương trình hoạt động của nhóm gặp khó khăn về chuẩn bị phương tiện, em nên chỉnh sửa thế nào?",
                "options": [
                    "Hủy bỏ luôn chương trình hoạt động",
                    "Thay thế phương tiện khó tìm bằng các phương tiện dễ tìm hơn hoặc xin sự hỗ trợ từ nhà trường, phụ huynh",
                    "Bắt buộc mọi người phải tự tìm bằng được",
                    "Để trống khâu chuẩn bị phương tiện"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Đánh giá và chỉnh sửa bài viết là một bước như thế nào trong quy trình viết văn bản?",
                "options": [
                    "Là bước không quan trọng, có thể bỏ qua",
                    "Là bước thiết yếu giúp nhận ra lỗi sai, nâng cao chất lượng bài viết và hoàn thiện sản phẩm cuối cùng",
                    "Là bước chỉ dành cho những học sinh viết yếu",
                    "Là bước làm mất thời gian của học sinh"
                ],
                "answer": 1,
                "level": 1
            }
        ]
    }
};
