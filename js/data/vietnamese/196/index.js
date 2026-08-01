export const lesson196 = {
    "topic": "Tiếng Việt 5",
    "week": "28",
    "period": "196",
    "title": "ĐỌC MỞ RỘNG: ĐỌC SÁCH BÁO VIẾT VỀ MỘT DANH NHÂN CỦA VIỆT NAM",
    "desc": "Thực hành đọc sách báo về các danh nhân lịch sử Việt Nam, viết phiếu đọc sách ghi nhận đóng góp và bày tỏ tình cảm biết ơn đối với cha ông.",
    "subject": "Đọc mở rộng",
    "theme": "Tiếp bước cha ông",
    "audio": "assets/audio/tiengviet/docmorong_danhnhanvietnam.wav",
    "content": `
<div class="space-y-10 animate-in fade-in duration-1000 max-w-6xl mx-auto py-6">
    <!-- 1. PHẦN KHỞI ĐỘNG -->
    <section class="w-full">
        <div class="glass-card rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-blue-100/50 bg-gradient-to-b from-white/90 to-blue-50/70">
            <div class="flex items-center space-x-6 mb-8">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-200">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                <h2 class="text-4xl md:text-5xl font-black text-indigo-950 uppercase tracking-tighter">Khởi động</h2>
            </div>
            
            <div class="bg-blue-100/50 p-8 rounded-2xl border-4 border-blue-200 mb-8 text-center">
                <p class="text-2xl md:text-3xl text-blue-600 leading-tight font-black">
                    Em hãy chia sẻ với bạn về một danh nhân Việt Nam mà em đã từng được đọc qua sách, báo, truyện tranh. Danh nhân đó nổi tiếng trong lĩnh vực nào?
                </p>
            </div>

            <div class="w-full overflow-hidden rounded-3xl shadow-2xl border-8 border-white group">
                <img src="assets/images/den_hung_phu_tho.png" alt="Đền Hùng Phú Thọ" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000">
            </div>
            <p class="text-lg md:text-2xl text-center text-gray-500 mt-4 font-black italic">Khu di tích lịch sử Đền Hùng - cội nguồn dân tộc</p>
        </div>
    </section>

    <!-- 2. PHẦN HỌC TẬP: THƯ VIỆN MINI VỀ DANH NHÂN -->
    <section class="w-full">
        <div class="glass-card rounded-3xl p-8 md:p-10 shadow-2xl bg-white/70 border-2 border-blue-100 space-y-8">
            <h3 class="text-2xl md:text-4xl font-black text-blue-600 mb-6 uppercase tracking-wider text-center">Thư viện mini: Một số danh nhân tiêu biểu của Đất Việt</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Danh nhân 1: Lê Quý Đôn -->
                <div class="p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                    <div class="space-y-4">
                        <div class="h-48 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center border border-slate-200">
                            <span class="text-6xl">📚</span>
                        </div>
                        <h4 class="text-xl md:text-3xl font-black text-blue-600 text-center">Lê Quý Đôn<br><span class="text-xl text-slate-500 font-black">(1726 - 1784)</span></h4>
                        <p class="text-xl md:text-2xl text-slate-800 text-justify leading-relaxed font-bold">
                            Nhà bác học kiệt xuất nhất của Việt Nam thời phong kiến. Cụ nổi tiếng thông minh từ nhỏ, đỗ Bảng nhãn. Cụ là tác giả của nhiều bộ sách lớn về lịch sử, địa lý, triết học như <i>Vân đài loại ngữ</i>, <i>Phủ biên tạp lục</i>...
                        </p>
                    </div>
                    <div class="pt-4 border-t-2 border-slate-100 text-center">
                        <span class="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-base font-black uppercase">Khoa học & Văn học</span>
                    </div>
                </div>

                <!-- Danh nhân 2: Chu Văn An -->
                <div class="p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                    <div class="space-y-4">
                        <div class="h-48 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center border border-slate-200">
                            <img src="assets/images/chu_van_an.png" alt="Chu Văn An" class="w-full h-full object-cover">
                        </div>
                        <h4 class="text-xl md:text-3xl font-black text-blue-600 text-center">Chu Văn An<br><span class="text-xl text-slate-500 font-black">(1292 - 1370)</span></h4>
                        <p class="text-xl md:text-2xl text-slate-800 text-justify leading-relaxed font-bold">
                            Người thầy mẫu mực của muôn đời, nhà giáo sư phạm lỗi lạc thời Trần. Đỗ cao nhưng cụ không làm quan mà mở trường dạy học ở quê để truyền bá đạo lí và đào tạo nhân tài cho đất nước.
                        </p>
                    </div>
                    <div class="pt-4 border-t-2 border-slate-100 text-center">
                        <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-base font-black uppercase">Giáo dục & Đạo đức</span>
                    </div>
                </div>

                <!-- Danh nhân 3: Tuệ Tĩnh -->
                <div class="p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                    <div class="space-y-4">
                        <div class="h-48 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center border border-slate-200">
                            <img src="assets/images/2911-danhytuetinh.webp" alt="Danh y Tuệ Tĩnh" class="w-full h-full object-cover">
                        </div>
                        <h4 class="text-xl md:text-3xl font-black text-blue-600 text-center">Tuệ Tĩnh<br><span class="text-xl text-slate-500 font-black">(1330 - ?)</span></h4>
                        <p class="text-xl md:text-2xl text-slate-800 text-justify leading-relaxed font-bold">
                            Ông tổ ngành y học cổ truyền Việt Nam, người mở đường cho y học nước nhà với phương châm nổi tiếng: <i>"Nam dược trị Nam nhân"</i> (Thuốc Nam trị bệnh cho người Nam). Cụ tìm ra nhiều vị thuốc quý từ thảo mộc.
                        </p>
                    </div>
                    <div class="pt-4 border-t-2 border-slate-100 text-center">
                        <span class="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-base font-black uppercase">Y học & Sức khỏe</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 3. PHẦN BÀI HỌC: MẪU PHIẾU ĐỌC SÁCH -->
    <section class="w-full">
        <div class="bg-blue-50 border-4 border-indigo-250 p-8 md:p-10 rounded-[32px] space-y-6">
            <h3 class="text-3xl md:text-4xl font-black text-blue-600 border-b-2 border-indigo-250 pb-4 flex items-center gap-2">
                <span>📝</span> Mẫu Phiếu đọc sách trong SGK
            </h3>
            <p class="text-2xl md:text-3xl font-black text-slate-850 leading-relaxed">
                Sau khi đọc sách báo về danh nhân, các em cần ghi chép lại những thông tin quan trọng vào phiếu đọc sách:
            </p>
            
            <div class="overflow-x-auto rounded-3xl shadow-md border-2 border-slate-200 bg-white p-6">
                <table class="w-full text-left border-collapse text-xl md:text-2xl font-bold text-slate-800 leading-relaxed">
                    <tbody>
                        <tr class="border-b border-slate-250">
                            <td class="py-4 px-4 font-black text-blue-600 w-1/4">Tên sách báo:</td>
                            <td class="py-4 px-4 italic text-slate-500">Nhập tên cuốn sách hoặc tờ báo em đã đọc</td>
                            <td class="py-4 px-4 font-black text-blue-600 w-1/6">Tác giả:</td>
                            <td class="py-4 px-4 italic text-slate-500">Tên tác giả</td>
                            <td class="py-4 px-4 font-black text-blue-600 w-1/6">Ngày đọc:</td>
                            <td class="py-4 px-4 italic text-slate-500">Ngày... tháng... năm...</td>
                        </tr>
                        <tr class="border-b border-slate-250">
                            <td class="py-5 px-4 font-black text-blue-600 valign-top">Thông tin danh nhân:</td>
                            <td class="py-5 px-4 text-slate-600 font-semibold" colspan="5">Tên tuổi, tài năng và những đóng góp nổi bật của danh nhân đó đối với lịch sử, đất nước.</td>
                        </tr>
                        <tr class="border-b border-slate-250">
                            <td class="py-5 px-4 font-black text-blue-600 valign-top">Suy nghĩ, cảm xúc:</td>
                            <td class="py-5 px-4 text-slate-600 font-semibold" colspan="5">Tình cảm kính trọng, tự hào, biết ơn đối với những đóng góp của danh nhân.</td>
                        </tr>
                        <tr>
                            <td class="py-4 px-4 font-black text-blue-600">Mức độ yêu thích:</td>
                            <td class="py-4 px-4 text-amber-500 text-xl md:text-3xl font-black" colspan="5">⭐⭐⭐⭐⭐ (1 đến 5 sao)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- 💡 Nội dung chính bài học -->
    <div class="p-8 rounded-[36px] bg-gradient-to-r from-blue-800 to-blue-700 text-white shadow-xl relative overflow-hidden mt-10">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <h4 class="text-2xl md:text-4xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
            <span>💡</span> Nội dung chính bài học
        </h4>
        <div class="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p class="text-2xl md:text-4xl font-extrabold leading-relaxed text-center italic">
                "Đọc sách báo về danh nhân giúp mở rộng hiểu biết lịch sử, nuôi dưỡng lòng tự hào, tình yêu quê hương đất nước và rèn luyện kỹ năng tóm tắt thông tin qua Phiếu đọc sách."
            </p>
        </div>
    </div>
</div>
`,
    "practice": (UI) => {
        return `
<div class="space-y-12 max-w-4xl mx-auto py-6">
    <!-- Bài tập 1: Phiếu đọc sách tương tác -->
    <section class="bg-white/80 p-6 md:p-10 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span class="w-12 h-12 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-2xl md:text-3xl shadow-md shrink-0">1</span>
            <h3 class="text-3xl md:text-4xl font-black text-blue-600">Bài tập 1: Thực hành viết Phiếu đọc sách tương tác</h3>
        </div>
        
        <p class="text-2xl md:text-3xl font-bold text-slate-700">Điền đầy đủ thông tin vào Phiếu đọc sách dưới đây và gửi cho EduRobot AI nhận xét:</p>

        <!-- Form Phiếu đọc sách -->
        <div class="p-6 bg-slate-50 border-2 border-slate-200 rounded-[32px] space-y-6 font-bold text-slate-800 text-base">
            
            <!-- Hàng 1: Tên sách, Tác giả, Ngày đọc -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="space-y-2">
                    <span class="text-lg md:text-xl font-black text-slate-700">📘 Tên sách báo:</span>
                    <input type="text" id="report-book-name" class="w-full p-3 border-2 rounded-xl bg-white font-bold text-xl md:text-2xl text-slate-800 outline-none focus:ring-4 focus:ring-blue-100" placeholder="Ví dụ: Kể chuyện danh nhân Việt Nam">
                </div>
                <div class="space-y-2">
                    <span class="text-lg md:text-xl font-black text-slate-700">✍️ Tác giả:</span>
                    <input type="text" id="report-author" class="w-full p-3 border-2 rounded-xl bg-white font-bold text-xl md:text-2xl text-slate-800 outline-none focus:ring-4 focus:ring-blue-100" placeholder="Ví dụ: Nguyễn Huy Tưởng">
                </div>
                <div class="space-y-2">
                    <span class="text-lg md:text-xl font-black text-slate-700">📅 Ngày đọc:</span>
                    <input type="text" id="report-date" class="w-full p-3 border-2 rounded-xl bg-white font-bold text-xl md:text-2xl text-slate-800 outline-none focus:ring-4 focus:ring-blue-100" placeholder="Ngày... tháng... năm">
                </div>
            </div>

            <!-- Tên tuổi, đóng góp của danh nhân -->
            <div class="space-y-2 pt-2">
                <span class="text-lg md:text-xl font-black text-slate-700">🎖️ Tên tuổi, tài năng và những đóng góp nổi bật của danh nhân:</span>
                <textarea id="report-contributions" rows="3" class="w-full p-4 rounded-xl border-2 border-slate-250 focus:ring-4 focus:ring-blue-100 outline-none text-xl md:text-2xl font-bold leading-relaxed" placeholder="Nêu rõ danh nhân đó tên là gì, nổi tiếng trong lĩnh vực nào và có những đóng góp to lớn gì cho tổ quốc..."></textarea>
            </div>

            <!-- Cảm xúc, suy nghĩ -->
            <div class="space-y-2 pt-2">
                <span class="text-lg md:text-xl font-black text-slate-700">❤️ Suy nghĩ, tình cảm, cảm xúc của em về đóng góp của danh nhân đó:</span>
                <textarea id="report-feelings" rows="3" class="w-full p-4 rounded-xl border-2 border-slate-250 focus:ring-4 focus:ring-blue-100 outline-none text-xl md:text-2xl font-bold leading-relaxed" placeholder="Em cảm thấy tự hào, biết ơn như thế nào? Em học tập được đức tính gì ở danh nhân này?"></textarea>
            </div>

            <!-- Đánh giá sao -->
            <div class="flex items-center gap-6 pt-3 border-t-2 border-slate-200/50">
                <span class="text-lg md:text-xl font-black text-slate-700">⭐ Mức độ yêu thích:</span>
                <div class="flex gap-2 text-2xl md:text-4xl select-none">
                    <span onclick="selectStars196(1)" id="star196-1" class="cursor-pointer text-amber-400">★</span>
                    <span onclick="selectStars196(2)" id="star196-2" class="cursor-pointer text-amber-400">★</span>
                    <span onclick="selectStars196(3)" id="star196-3" class="cursor-pointer text-amber-400">★</span>
                    <span onclick="selectStars196(4)" id="star196-4" class="cursor-pointer text-amber-400">★</span>
                    <span onclick="selectStars196(5)" id="star196-5" class="cursor-pointer text-amber-400">★</span>
                </div>
                <input type="hidden" id="report-stars-value" value="5">
            </div>

            <!-- Nút nộp phiếu -->
            <div class="flex justify-center pt-2">
                <button onclick="check196BookReportAI()" class="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-xl transition-all active:scale-[0.95] flex items-center justify-center gap-2 text-xl md:text-2xl uppercase tracking-wider">
                    <span>🤖</span> 
                    <span>Lưu phiếu & Nhận xét của EduRobot AI</span>
                </button>
            </div>
            <div id="fb-196-report-ai" class="w-full hidden mt-4"></div>
        </div>
    </section>

    <!-- Bài tập 2: Viết bài giới thiệu danh nhân (3-5 câu) -->
    <section class="bg-white/80 p-6 md:p-10 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span class="w-12 h-12 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-2xl md:text-3xl shadow-md shrink-0">2</span>
            <h3 class="text-3xl md:text-4xl font-black text-blue-600">Bài tập 2: Viết 3 - 5 câu giới thiệu về một danh nhân Việt Nam</h3>
        </div>
        <p class="text-2xl md:text-3xl font-bold text-slate-700">Hãy viết 3 – 5 câu giới thiệu về một danh nhân trong sách báo mà em đã đọc (nêu rõ họ tên, tài năng, đóng góp và suy nghĩ của em):</p>
        
        <div class="p-6 bg-amber-50/30 border-2 border-amber-100 rounded-[32px] space-y-6">
            <textarea id="essay-196" rows="4" class="w-full p-6 rounded-2xl border-2 border-slate-250 focus:ring-4 focus:ring-blue-100 outline-none text-2xl md:text-3xl font-bold leading-relaxed" placeholder="Ví dụ: Lê Quý Đôn là một nhà bác học lỗi lạc của nước ta vào thế kỷ XVIII. Từ nhỏ, ông đã nổi tiếng thông minh..."></textarea>
            <div class="flex justify-center">
                <button onclick="check196EssayAI()" class="px-10 py-5 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-2xl shadow-xl transition-all active:scale-[0.95] flex items-center justify-center gap-3 text-xl md:text-2xl uppercase tracking-wider">
                    <span>🤖</span> 
                    <span>Gửi bài giới thiệu cho EduRobot AI</span>
                </button>
            </div>
            <div id="fb-196-essay-ai" class="w-full hidden mt-4"></div>
        </div>
    </section>
</div>

<script>
    let reportStarsValue = 5;

    // Chọn số sao
    window.selectStars196 = function(num) {
        reportStarsValue = num;
        document.getElementById('report-stars-value').value = num;
        
        for (let i = 1; i <= 5; i++) {
            const star = document.getElementById('star196-' + i);
            if (i <= num) {
                star.className = 'cursor-pointer text-amber-400';
            } else {
                star.className = 'cursor-pointer text-slate-300';
            }
        }
    };

    // AI nhận xét Phiếu đọc sách
    window.check196BookReportAI = async function() {
        const book = document.getElementById('report-book-name').value.trim();
        const author = document.getElementById('report-author').value.trim();
        const date = document.getElementById('report-date').value.trim();
        const contributions = document.getElementById('report-contributions').value.trim();
        const feelings = document.getElementById('report-feelings').value.trim();
        const stars = document.getElementById('report-stars-value').value;

        if (!book || !contributions || !feelings) {
            alert('Em hãy điền ít nhất là Tên sách báo, Đóng góp của danh nhân, và Cảm xúc suy nghĩ của em trước khi gửi nhé!');
            return;
        }

        const fb = document.getElementById('fb-196-report-ai');
        fb.classList.remove('hidden');
        fb.innerHTML = '<div class="p-6 bg-white border-2 border-blue-100 rounded-2xl shadow-lg italic text-lg text-blue-600 animate-pulse text-center">EduRobot đang xem Phiếu đọc sách của em, chờ một chút nhé...</div>';

        const prompt = \`Học sinh lớp 5 điền Phiếu đọc sách về một danh nhân Việt Nam sau khi đọc sách báo.\\nThông tin Phiếu đọc sách:\\n- Tên sách báo: \"\${book}\"\\n- Tác giả: \"\${author}\"\\n- Ngày đọc: \"\${date}\"\\n- Đóng góp nổi bật của danh nhân: \"\${contributions}\"\\n- Suy nghĩ, cảm xúc: \"\${feelings}\"\\n- Mức độ yêu thích: \${stars}/5 sao\\nHãy đóng vai Thầy E nhận xét cụ thể: (1) Học sinh viết thông tin đóng góp của danh nhân có chính xác không? (2) Phần cảm xúc suy nghĩ có chân thành và giàu ý nghĩa giáo dục không? (3) Lời khuyên động viên khuyến khích học sinh đọc thêm nhiều sách hay. Xưng hô \"Thầy\" và gọi học sinh là \"em\".\`;

        await askAI('196-report-ai', prompt, 'single', 'writing', 28, prompt);
    };

    // AI nhận xét Đoạn văn giới thiệu
    window.check196EssayAI = async function() {
        const text = document.getElementById('essay-196').value.trim();
        if (!text) {
            alert('Em hãy nhập đoạn văn giới thiệu danh nhân của mình trước khi gửi nhé!');
            return;
        }

        const fb = document.getElementById('fb-196-essay-ai');
        fb.classList.remove('hidden');
        fb.innerHTML = '<div class="p-6 bg-white border-2 border-sky-100 rounded-2xl shadow-lg italic text-lg text-sky-900 animate-pulse text-center">EduRobot đang đọc bài giới thiệu danh nhân của em, chờ một chút nhé...</div>';

        const prompt = \`Học sinh lớp 5 viết đoạn văn 3-5 câu giới thiệu về một danh nhân lịch sử Việt Nam.\\nĐoạn văn học sinh viết: \"\${text}\"\\nHãy đóng vai Thầy E nhận xét chi tiết: (1) Đoạn văn đã đủ 3-5 câu chưa? (2) Các thông tin về danh nhân (họ tên, đóng góp) có rõ ràng và chính xác không? (3) Tình cảm, niềm tự hào đối với danh nhân thể hiện thế nào? (4) Sửa lỗi chính tả, câu từ nếu có và chấm điểm khuyến khích. Xưng hô \"Thầy\" và gọi học sinh là \"em\".\`;

        await askAI('196-essay-ai', prompt, 'single', 'writing', 28, prompt);
    };
</script>
        `;
    },
    "quizPool": [
        {
            "question": "Danh nhân nào dưới đây được mệnh danh là 'nhà bác học kiệt xuất của Việt Nam thời phong kiến'?",
            "options": ["Nguyễn Trãi", "Lê Quý Đôn", "Chu Văn An", "Lương Thế Vinh"],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cuốn sách nào dưới đây là tác phẩm nổi tiếng của Lê Quý Đôn?",
            "options": ["Bình Ngô đại cáo", "Vân đài loại ngữ", "Đại Việt sử ký toàn thư", "Ức Trai thi tập"],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cụ Chu Văn An được vua giao cho chức vụ gì trong Quốc Tử Giám?",
            "options": ["Hiệu trưởng", "Tư nghiệp (phó hiệu trưởng, phụ trách việc giảng dạy)", "Thầy đồ dạy học", "Thái phó bảo mẫu"],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Danh y Tuệ Tĩnh nổi tiếng với phương châm điều trị bệnh nào dưới đây?",
            "options": [
                "Bệnh tòng khẩu nhập",
                "Nam dược trị Nam nhân (Thuốc Nam trị bệnh cho người Nam)",
                "Đông y kết hợp Tây y",
                "Phòng bệnh hơn chữa bệnh"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Một phiếu đọc sách theo mẫu trong bài Đọc mở rộng Tuần 28 gồm các thông tin chính nào?",
            "options": [
                "Tên sách báo, tác giả, ngày đọc, đóng góp của danh nhân, suy nghĩ cảm xúc, mức độ yêu thích",
                "Tên nhân vật chính, các sự kiện kỳ ảo, bài học rút ra, tranh vẽ của em",
                "Tên cuốn sách, nhà xuất bản, giá tiền, số trang, chất liệu giấy",
                "Tên danh nhân, năm sinh, năm mất, quê quán, sở thích ăn uống"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đâu KHÔNG phải là một danh nhân lịch sử tiêu biểu của Việt Nam?",
            "options": ["Trần Hưng Đạo", "Nguyễn Trãi", "Chu Văn An", "Albert Einstein"],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Khi viết phiếu đọc sách, mục 'Suy nghĩ, tình cảm, cảm xúc' giúp em thể hiện điều gì?",
            "options": [
                "Giá tiền của cuốn sách đắt hay rẻ",
                "Thái độ kính trọng, tự hào và biết ơn đối với những đóng góp của danh nhân",
                "Tóm tắt các trận chiến lịch sử phức tạp",
                "Ý kiến chê bai chất lượng in ấn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Danh nhân nào dưới đây là người viết tác phẩm 'Bình Ngô đại cáo' và là người anh hùng dân tộc?",
            "options": ["Nguyễn Trãi", "Lê Lợi", "Quang Trung", "Nguyễn Huệ"],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Người anh hùng áo vải cờ đào lật đổ nhà Trịnh - Nguyễn và đánh tan quân Thanh xâm lược là ai?",
            "options": ["Lê Lợi", "Nguyễn Huệ (Quang Trung)", "Trần Hưng Đạo", "Đinh Bộ Lĩnh"],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Mục đích lớn nhất của việc đọc sách báo về danh nhân lịch sử nước nhà là gì?",
            "options": [
                "Để có thêm nhiều câu hỏi trắc nghiệm đố vui",
                "Để ghi nhớ lịch sử, khơi dậy tinh thần yêu nước, tự hào dân tộc và học tập các tấm gương sáng của cha ông",
                "Để tìm kiếm kho báu cổ xưa",
                "Để sưu tầm nhiều hình vẽ đẹp"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Lê Quý Đôn đã thi đỗ học vị cao nào dưới đây?",
            "options": ["Trạng nguyên", "Bảng nhãn", "Thám hoa", "Tú tài"],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Bộ sách 'Lê Quý Đôn toàn tập' phản ánh năng lực nào của cụ?",
            "options": [
                "Chỉ giỏi về làm thơ lục bát",
                "Nhà bác học kiệt xuất có tri thức uyên bác trên nhiều lĩnh vực khoa học xã hội và tự nhiên",
                "Nhà thiết kế trang phục cổ xưa",
                "Nhà phát minh ra các loại thuốc súng"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Đâu là việc học sinh nên làm khi điền Phiếu đọc sách?",
            "options": [
                "Viết ngắn gọn 1-2 từ cho nhanh",
                "Ghi chép trung thực các thông tin cốt lõi và viết cảm xúc suy nghĩ thật sự của mình một cách chu đáo",
                "Chỉ cần điền tên sách rồi nộp",
                "Nhờ bố mẹ hoặc bạn viết hộ toàn bộ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tác phẩm y học đồ sộ nào dưới đây là của danh y Tuệ Tĩnh?",
            "options": ["Nam dược thần hiệu", "Y tông tâm lĩnh", "Vân đài loại ngữ", "Ức Trai di tập"],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Đoạn văn giới thiệu danh nhân (3 - 5 câu) cần đạt yêu cầu nào quan trọng nhất?",
            "options": [
                "Nêu rõ tên danh nhân, đóng góp tiêu biểu, dùng từ ngữ tôn kính và thể hiện sự tự hào, biết ơn",
                "Càng dài càng tốt, không cần đúng sự thật",
                "Chứa nhiều từ ngữ khó hiểu để tăng tính học thuật",
                "Viết giống như một bài thơ"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};
