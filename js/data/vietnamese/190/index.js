export const lesson190 = {
    "topic": "Tiếng Việt 5",
    "week": "28",
    "period": "190",
    "title": "ĐỌC: NGHÌN NĂM VĂN HIẾN",
    "desc": "Đọc và tìm hiểu bài 'Nghìn năm văn hiến', tìm hiểu về truyền thống khoa cử, hiếu học và trọng nhân tài của cha ông ta.",
    "subject": "Đọc",
    "theme": "Tiếp bước cha ông",
    "audio": "assets/audio/tiengviet/nghinnamvanhien.wav",
    "content": `
<div class="space-y-10 animate-in fade-in duration-1000 max-w-6xl mx-auto py-6">
    <!-- 1. PHẦN KHỞI ĐỘNG -->
    <section class="w-full">
        <div class="glass-card rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-blue-100/50 bg-gradient-to-b from-white/90 to-blue-50/70">
            <div class="flex items-center space-x-6 mb-8">
                <div class="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-200">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h2 class="text-4xl md:text-5xl font-black text-blue-950 uppercase tracking-tighter">Khởi động</h2>
            </div>
            
            <div class="bg-blue-100/50 p-8 rounded-2xl border-4 border-blue-200 mb-8 text-center">
                <p class="text-2xl md:text-3xl text-blue-600 leading-tight font-black">
                    Chia sẻ những điều em biết về di tích Văn Miếu – Quốc Tử Giám ở Thủ đô Hà Nội.
                </p>
            </div>
        </div>
    </section>

    <!-- 2. PHẦN BÀI ĐỌC -->
    <section class="w-full">
        <div class="glass-card rounded-3xl p-8 md:p-10 shadow-2xl bg-white/70 border-2 border-emerald-100">
            <div class="text-lg md:text-4xl text-gray-800 leading-relaxed text-justify overflow-hidden">
                <!-- KHỐI HÌNH ẢNH & THÔNG TIN (FLOAT RIGHT) -->
                <div class="md:float-right md:ml-10 md:mb-8 md:w-1/3 space-y-6 bg-emerald-50/30 p-6 rounded-3xl border-2 border-emerald-50 shadow-sm">
                    <div class="intro-box bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                        <p class="text-emerald-800 italic text-lg md:text-2xl font-black">"Hiền tài là nguyên khí của quốc gia."</p>
                    </div>
                    <div class="image-box text-center">
                        <img src="assets/images/nghinnamvanhien.webp" alt="Bia Tiến sĩ" class="rounded-2xl shadow-lg border-4 border-white max-w-full h-auto mx-auto mb-2">
                        <p class="text-lg text-gray-500 italic font-bold">Bia Tiến sĩ khắc trên lưng rùa đá tại Văn Miếu</p>
                    </div>
                    <p class="text-lg md:text-2xl text-center text-gray-500 font-black uppercase tracking-widest">
                        VĂN MIẾU - QUỐC TỬ GIÁM
                    </p>
                </div>

                <!-- NỘI DUNG VĂN BẢN -->
                <p class="indent-12 mb-8">
                    Năm 1070, vua Lý Thánh Tông cho xây Văn Miếu Thăng Long để thờ Khổng Tử. Kể từ đó, hệ thống Văn Miếu đã được xây dựng ở khắp nơi. Ở Văn Miếu Thăng Long, vua còn cho xây Quốc Tử Giám làm nơi dạy học cho các hoàng tử và con em quý tộc. Về sau, học trò giỏi là con em dân thường cũng được học ở đây.
                </p>
                <p class="indent-12 mb-8">
                    Đến thăm Văn Miếu – Quốc Tử Giám, nơi được coi là trường đại học đầu tiên của Việt Nam, khách nước ngoài không khỏi ngạc nhiên khi biết rằng từ năm 1075, nước ta đã mở khoa thi tiến sĩ. Ngót 10 thế kỉ, tính từ khoa thi năm 1075 đến khoa thi cuối cùng năm 1919, các triều vua Việt Nam đã tổ chức được 185 khoa thi, lấy đỗ gần 3 000 tiến sĩ, cụ thể như sau:
                </p>

                <!-- BẢNG THỐNG KÊ TRIỀU ĐẠI -->
                <div class="overflow-x-auto my-8 rounded-2xl border-2 border-slate-200 shadow-md">
                    <table class="w-full text-2xl md:text-3xl text-left text-slate-700">
                        <thead class="text-2xl md:text-3xl text-slate-800 uppercase bg-slate-100 border-b-2 border-slate-200">
                            <tr>
                                <th class="px-6 py-4 font-black text-slate-900">Triều đại</th>
                                <th class="px-6 py-4 font-black text-center text-slate-900">Số khoa thi</th>
                                <th class="px-6 py-4 font-black text-center text-slate-900">Số tiến sĩ</th>
                                <th class="px-6 py-4 font-black text-center text-slate-900">Số trạng nguyên</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 font-bold">
                            <tr class="bg-white hover:bg-slate-50/50"><td class="px-6 py-4 font-black text-slate-900">Lý</td><td class="px-6 py-4 text-center">6</td><td class="px-6 py-4 text-center">11</td><td class="px-6 py-4 text-center">0</td></tr>
                            <tr class="bg-slate-50/30 hover:bg-slate-50/50"><td class="px-6 py-4 font-black text-slate-900">Trần</td><td class="px-6 py-4 text-center">14</td><td class="px-6 py-4 text-center">51</td><td class="px-6 py-4 text-center">9</td></tr>
                            <tr class="bg-white hover:bg-slate-50/50"><td class="px-6 py-4 font-black text-slate-900">Hồ</td><td class="px-6 py-4 text-center">2</td><td class="px-6 py-4 text-center">12</td><td class="px-6 py-4 text-center">0</td></tr>
                            <tr class="bg-slate-50/30 hover:bg-slate-50/50"><td class="px-6 py-4 font-black text-slate-900">Lê</td><td class="px-6 py-4 text-center">104</td><td class="px-6 py-4 text-center">1 780</td><td class="px-6 py-4 text-center">27</td></tr>
                            <tr class="bg-white hover:bg-slate-50/50"><td class="px-6 py-4 font-black text-slate-900">Mạc</td><td class="px-6 py-4 text-center">21</td><td class="px-6 py-4 text-center">484</td><td class="px-6 py-4 text-center">11</td></tr>
                            <tr class="bg-slate-50/30 hover:bg-slate-50/50"><td class="px-6 py-4 font-black text-slate-900">Nguyễn</td><td class="px-6 py-4 text-center">38</td><td class="px-6 py-4 text-center">558</td><td class="px-6 py-4 text-center">0</td></tr>
                            <tr class="bg-blue-50 font-black text-blue-600"><td class="px-6 py-4">Tổng cộng</td><td class="px-6 py-4 text-center">185</td><td class="px-6 py-4 text-center">2 896</td><td class="px-6 py-4 text-center">47</td></tr>
                        </tbody>
                    </table>
                </div>

                <p class="indent-12 mb-8">
                    Ngày nay, khách vào thăm Văn Miếu – Quốc Tử Giám còn thấy bên giếng Thiên Quang, dưới những hàng muỗm già cổ kính, 82 tấm bia khắc tên tuổi 1 306 vị tiến sĩ từ khoa thi năm 1442 đến khoa thi năm 1779 như chứng tích về một nền văn hiến lâu đời.
                </p>
                
                <div class="flex justify-end pt-6">
                    <p class="text-xl md:text-3xl italic font-black text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-xl">
                        (Theo Nguyễn Hoàng)
                    </p>
                </div>
            </div>
        </div>

        <!-- 2.3 PHẦN TỪ NGỮ -->
        <div class="mt-10 bg-emerald-50 p-8 rounded-2xl border-2 border-emerald-100 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 class="text-xl md:text-3xl font-black text-emerald-800 border-b-2 border-emerald-200 pb-2 flex items-center gap-2">
                <span>📚</span> Từ ngữ
            </h3>
            <ul class="space-y-4 text-2xl md:text-3xl leading-relaxed font-bold text-slate-800">
                <li><strong class="text-emerald-700 font-black">Văn hiến:</strong> truyền thống văn hoá lâu đời và tốt đẹp.</li>
                <li><strong class="text-emerald-700 font-black">Văn Miếu:</strong> nơi thờ Khổng Tử và những người có công mở mang giáo dục thời xưa.</li>
                <li><strong class="text-emerald-700 font-black">Quốc Tử Giám:</strong> trường Nho học cao cấp thời xưa, đặt ở khu vực Văn Miếu.</li>
                <li><strong class="text-emerald-700 font-black">Tiến sĩ:</strong> ở đây chỉ người đỗ trong kì thi quốc gia về Nho học ngày xưa (thi Hội).</li>
                <li><strong class="text-emerald-700 font-black">Chứng tích:</strong> vết tích hoặc hiện vật còn lưu lại làm chứng cho một sự việc đã qua.</li>
            </ul>
        </div>
    </section>

    <!-- 💡 Nội dung chính bài học -->
    <div class="p-8 rounded-[36px] bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-xl relative overflow-hidden mt-10">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <h4 class="text-2xl md:text-4xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
            <span>💡</span> Nội dung chính bài học
        </h4>
        <div class="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p class="text-2xl md:text-4xl font-extrabold leading-relaxed text-center italic">
                "Bài đọc giúp người đọc tự hào về truyền thống văn hiến lâu đời của đất nước ta, đồng thời ca ngợi tinh thần hiếu học, tôn vinh người hiền tài và coi trọng nhân tài của cha ông ta từ ngàn đời nay."
            </p>
        </div>
    </div>
</div>
`,
    "practice": (UI) => {
        const pairs = [
            { left: "Văn hiến", right: "truyền thống văn hoá lâu đời và tốt đẹp." },
            { left: "Văn Miếu", right: "nơi thờ Khổng Tử và những người có công mở mang giáo dục thời xưa." },
            { left: "Quốc Tử Giám", right: "trường Nho học cao cấp thời xưa, đặt ở khu vực Văn Miếu." },
            { left: "Tiến sĩ", right: "chỉ người đỗ trong kì thi quốc gia về Nho học ngày xưa (thi Hội)." },
            { left: "Chứng tích", right: "vết tích hoặc hiện vật còn lưu lại làm chứng cho một sự việc đã qua." }
        ];

        const matchingHtml = window.Lesson.renderMatchingExercise(
            '190-vocab', 
            'Bài tập 2: Nối từ ngữ với nghĩa của từ tương ứng', 
            pairs
        );

        return `
<div class="space-y-12 max-w-4xl mx-auto">
    <!-- PHẦN TÌM HIỂU BÀI (Chuyển sang đầu tab Luyện tập) -->
    <section class="w-full">
        <div class="glass-card rounded-3xl p-8 md:p-10 shadow-2xl bg-orange-50/30 border-2 border-orange-100">
            <h2 class="text-2xl md:text-4xl font-black text-gray-900 mb-10 flex items-start gap-6">
                <span class="bg-orange-500 text-white w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-2xl font-serif">?</span>
                <span class="border-b-4 border-orange-400 pb-2">Bài tập 1: Tìm hiểu bài đọc</span>
            </h2>

            <div class="lesson-questions space-y-6 text-xl md:text-3xl leading-relaxed text-gray-950 font-medium">
                <!-- CÂU 1 -->
                <div class="question-item bg-white/90 rounded-2xl border-4 border-orange-100 shadow-sm hover:border-orange-300 transition-all overflow-hidden" data-id="q1">
                    <button onclick="Lesson.toggleAccordion(this)" class="question-trigger w-full text-left p-8 font-bold text-blue-600 leading-snug flex justify-between items-center focus:outline-none cursor-pointer">
                        <span><span class="text-orange-600 mr-2">1.</span> Vị vua nào đã cho xây dựng Văn Miếu Thăng Long? Công trình đó được xây dựng vào năm nào?</span>
                        <span class="text-lg md:text-2xl icon-expand transform transition-transform duration-300">▼</span>
                    </button>
                    <div class="answer-block p-8 pt-0 hidden animate-in slide-in-from-top-2 duration-300">
                        <div class="p-6 bg-emerald-50/50 rounded-2xl border-2 border-emerald-100">
                            <p class="text-emerald-800 font-bold">-> Đáp án:</p>
                            <p class="text-emerald-950 font-bold mt-2">Vua Lý Thánh Tông đã cho xây dựng Văn Miếu Thăng Long vào năm 1070.</p>
                        </div>
                    </div>
                </div>

                <!-- CÂU 2 -->
                <div class="question-item bg-white/90 rounded-2xl border-4 border-orange-100 shadow-sm hover:border-orange-300 transition-all overflow-hidden" data-id="q2">
                    <button onclick="Lesson.toggleAccordion(this)" class="question-trigger w-full text-left p-8 font-bold text-blue-600 leading-snug flex justify-between items-center focus:outline-none cursor-pointer">
                        <span><span class="text-orange-600 mr-2">2.</span> Ở Văn Miếu Thăng Long, vua còn cho xây Quốc Tử Giám để làm gì?</span>
                        <span class="text-lg md:text-2xl icon-expand transform transition-transform duration-300">▼</span>
                    </button>
                    <div class="answer-block p-8 pt-0 hidden animate-in slide-in-from-top-2 duration-300">
                        <div class="p-6 bg-emerald-50/50 rounded-2xl border-2 border-emerald-100">
                            <p class="text-emerald-800 font-bold">-> Đáp án:</p>
                            <p class="text-emerald-950 font-bold mt-2">Vua cho xây Quốc Tử Giám làm nơi dạy học cho các hoàng tử và con em quý tộc. Về sau, học trò giỏi là con em dân thường cũng được học ở đây.</p>
                        </div>
                    </div>
                </div>

                <!-- CÂU 3 -->
                <div class="question-item bg-white/90 rounded-2xl border-4 border-orange-100 shadow-sm hover:border-orange-300 transition-all overflow-hidden" data-id="q3">
                    <button onclick="Lesson.toggleAccordion(this)" class="question-trigger w-full text-left p-8 font-bold text-blue-600 leading-snug flex justify-between items-center focus:outline-none cursor-pointer">
                        <span><span class="text-orange-600 mr-2">3.</span> Bảng thống kê cho biết những thông tin gì về các khoa thi từ năm 1075 đến năm 1919? Triều đại nào tổ chức nhiều khoa thi nhất và có nhiều tiến sĩ nhất?</span>
                        <span class="text-lg md:text-2xl icon-expand transform transition-transform duration-300">▼</span>
                    </button>
                    <div class="answer-block p-8 pt-0 hidden animate-in slide-in-from-top-2 duration-300">
                        <div class="p-6 bg-emerald-50/50 rounded-2xl border-2 border-emerald-100">
                            <p class="text-emerald-800 font-bold">-> Đáp án:</p>
                            <div class="text-emerald-950 font-bold mt-2 space-y-2">
                                <p>• Bảng thống kê cho biết thông tin về triều đại, số khoa thi, số tiến sĩ và số trạng nguyên qua các thời kỳ lịch sử từ năm 1075 đến năm 1919.</p>
                                <p>• Triều đại tổ chức nhiều khoa thi nhất và có nhiều tiến sĩ nhất là <strong>triều Lê</strong> (104 khoa thi và 1 780 tiến sĩ).</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CÂU 4 -->
                <div class="question-item bg-white/90 rounded-2xl border-4 border-orange-100 shadow-sm hover:border-orange-300 transition-all overflow-hidden" data-id="q4">
                    <button onclick="Lesson.toggleAccordion(this)" class="question-trigger w-full text-left p-8 font-bold text-blue-600 leading-snug flex justify-between items-center focus:outline-none cursor-pointer">
                        <span><span class="text-orange-600 mr-2">4.</span> Tìm những chi tiết trong bài cho biết ông cha ta luôn coi trọng việc đào tạo nhân tài.</span>
                        <span class="text-lg md:text-2xl icon-expand transform transition-transform duration-300">▼</span>
                    </button>
                    <div class="answer-block p-8 pt-0 hidden animate-in slide-in-from-top-2 duration-300">
                        <div class="p-6 bg-emerald-50/50 rounded-2xl border-2 border-emerald-100">
                            <p class="text-emerald-800 font-bold">-> Đáp án:</p>
                            <ul class="text-emerald-950 font-bold mt-2 list-disc list-inside space-y-2">
                                <li>Cho xây dựng Văn Miếu để thờ Khổng Tử và Quốc Tử Giám làm trường học lớn để dạy học.</li>
                                <li>Mở rộng đối tượng học tập: lúc đầu cho các hoàng tử và con em quý tộc học, về sau con em dân thường học giỏi cũng được nhận vào học ở đây.</li>
                                <li>Tổ chức đều đặn các khoa thi để kén chọn người tài qua các triều vua (185 khoa thi, lấy đỗ gần 3 000 tiến sĩ).</li>
                                <li>Khắc bia tiến sĩ để vinh danh, ghi nhớ công ơn và lưu danh thơm cho muôn đời sau.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- CÂU 5 -->
                <div class="question-item bg-white/90 rounded-2xl border-4 border-orange-100 shadow-sm hover:border-orange-300 transition-all overflow-hidden" data-id="q5">
                    <button onclick="Lesson.toggleAccordion(this)" class="question-trigger w-full text-left p-8 font-bold text-blue-600 leading-snug flex justify-between items-center focus:outline-none cursor-pointer">
                        <span><span class="text-orange-600 mr-2">5.</span> Bài đọc giúp em hiểu điều gì về truyền thống khoa cử của Việt Nam?</span>
                        <span class="text-lg md:text-2xl icon-expand transform transition-transform duration-300">▼</span>
                    </button>
                    <div class="answer-block p-8 pt-0 hidden animate-in slide-in-from-top-2 duration-300">
                        <div class="p-6 bg-emerald-50/50 rounded-2xl border-2 border-emerald-100">
                            <p class="text-emerald-800 font-bold">-> Đáp án:</p>
                            <p class="text-emerald-950 font-bold mt-2">Bài đọc giúp em hiểu rằng Việt Nam có một nền văn hiến lâu đời, truyền thống khoa cử vô cùng phong phú và phát triển từ lâu đời. Thể hiện lòng hiếu học, ý thức coi trọng giáo dục và tôn vinh người hiền tài của cha ông ta.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Bài tập 2: Nối cặp -->
    <div>
        ${matchingHtml}
    </div>

    <!-- Bài tập 3: Điền từ vào chỗ trống -->
    <section class="bg-white/80 p-6 md:p-10 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span class="w-12 h-12 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-2xl md:text-3xl shadow-md shrink-0">3</span>
            <h3 class="text-3xl md:text-4xl font-black text-blue-600">Bài tập 3: Hoàn thành thông tin</h3>
        </div>
        <p class="text-xl md:text-2xl font-semibold text-slate-700">Em hãy điền các từ thích hợp (<em>1070, Quốc Tử Giám, tiến sĩ, 185, 2 896, bia đá</em>) vào chỗ trống để hoàn thiện đoạn văn dưới đây:</p>
        
        <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-6 text-2xl md:text-3xl leading-relaxed font-bold text-slate-800">
            <div>
                Năm <input type="text" id="blank-1" class="w-24 p-1.5 border rounded-lg text-center text-blue-600 font-bold outline-none border-slate-300" placeholder="...">, vua Lý Thánh Tông cho xây dựng Văn Miếu Thăng Long. Sau đó, vua cho xây thêm <input type="text" id="blank-2" class="w-48 p-1.5 border rounded-lg text-center text-blue-600 font-bold outline-none border-slate-300" placeholder="..."> làm trường học lớn cho cả nước. 
                Từ năm 1075, khoa thi <input type="text" id="blank-3" class="w-32 p-1.5 border rounded-lg text-center text-blue-600 font-bold outline-none border-slate-300" placeholder="..."> đầu tiên bắt đầu mở. Qua nhiều thế kỷ, lịch sử khoa cử nước nhà đã ghi dấu <input type="text" id="blank-4" class="w-20 p-1.5 border rounded-lg text-center text-blue-600 font-bold outline-none border-slate-300" placeholder="..."> khoa thi, lấy đỗ <input type="text" id="blank-5" class="w-28 p-1.5 border rounded-lg text-center text-blue-600 font-bold outline-none border-slate-300" placeholder="..."> tiến sĩ. 
                Đến nay, tại Văn Miếu vẫn còn lưu giữ 82 tấm <input type="text" id="blank-6" class="w-32 p-1.5 border rounded-lg text-center text-blue-600 font-bold outline-none border-slate-300" placeholder="..."> như một chứng tích văn hiến quý báu.
            </div>
            <div class="flex justify-end items-center gap-4"><button onclick="check190FillBlanks();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-190-blanks" class="text-base font-black text-center hidden"></div>
        </div>
    </section>

    <!-- Bài tập 4: Cảm nhận qua AI -->
    <section class="bg-white/80 p-6 md:p-10 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span class="w-12 h-12 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-2xl md:text-3xl shadow-md shrink-0">4</span>
            <h3 class="text-3xl md:text-4xl font-black text-blue-600">Bài tập 4: Chia sẻ cảm nhận</h3>
        </div>
        <p class="text-xl md:text-2xl font-semibold text-slate-700">Viết đoạn văn ngắn (3 – 4 câu) thể hiện niềm tự hào của em về truyền thống hiếu học của dân tộc ta sau khi học bài "Nghìn năm văn hiến".</p>
        
        <div class="p-6 bg-amber-50/30 border border-amber-100 rounded-3xl space-y-4">
            <textarea id="essay-190" rows="4" class="w-full p-4 rounded-xl border border-slate-250 focus:ring-4 focus:ring-blue-100 outline-none text-xl md:text-2xl font-semibold" placeholder="Nhập đoạn văn của em tại đây..."></textarea>
            <div class="flex justify-end items-center gap-4"><button onclick="check190EssayAI();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-190-essay-ai" class="w-full hidden mt-4"></div>
        </div>
    </section>
</div>

<script>
    window.check190FillBlanks = function() {
        const b1 = document.getElementById('blank-1').value.trim();
        const b2 = document.getElementById('blank-2').value.trim();
        const b3 = document.getElementById('blank-3').value.trim();
        const b4 = document.getElementById('blank-4').value.trim();
        const b5 = document.getElementById('blank-5').value.trim();
        const b6 = document.getElementById('blank-6').value.trim();

        if (!b1 || !b2 || !b3 || !b4 || !b5 || !b6) {
            alert('Em hãy điền đầy đủ từ vào các ô trống nhé!');
            return;
        }

        const isCorrect = (
            b1 === '1070' &&
            b2.toLowerCase() === 'quốc tử giám' &&
            b3.toLowerCase() === 'tiến sĩ' &&
            b4 === '185' &&
            (b5 === '2 896' || b5 === '2896') &&
            b6.toLowerCase() === 'bia đá'
        );

        const fb = document.getElementById('fb-190-blanks');
        fb.classList.remove('hidden');
        if (isCorrect) {
            fb.innerHTML = '🎉 Xuất sắc! Em đã điền chính xác tất cả các thông tin về Văn Miếu - Quốc Tử Giám rồi!';
            fb.className = 'text-lg font-black text-center text-emerald-600 mt-4';
        } else {
            fb.innerHTML = '⚠️ Một vài thông tin điền chưa chính xác. Em hãy xem lại bài đọc và điền lại nhé!';
            fb.className = 'text-lg font-black text-center text-amber-600 mt-4';
        }
    };

    window.check190EssayAI = async function() {
        const text = document.getElementById('essay-190').value.trim();
        if (!text) {
            alert('Em hãy nhập đoạn văn cảm nhận trước khi gửi nhé!');
            return;
        }

        const fb = document.getElementById('fb-190-essay-ai');
        fb.classList.remove('hidden');
        fb.innerHTML = '<div class="p-6 bg-white border-2 border-sky-100 rounded-2xl shadow-lg italic text-lg text-sky-900 animate-pulse text-center">EduRobot đang xem bài viết cảm nghĩ của em, chờ một chút nhé...</div>';

        const prompt = \`Học sinh lớp 5 viết đoạn văn (3-4 câu) thể hiện niềm tự hào về truyền thống hiếu học của dân tộc ta sau khi học bài \"Nghìn năm văn hiến\".\\nĐoạn văn của học sinh: \"\${text}\"\\nHãy nhận xét bài làm của học sinh một cách chi tiết (Khen ngợi điểm tốt, chỉ ra lỗi chính tả hoặc diễn đạt nếu có) và khích lệ lòng yêu quê hương, đất nước của học sinh. Xưng hô \"Thầy/Cô\" và gọi học sinh là \"em\".\`;

        await askAI('190-essay-ai', prompt, 'single', 'writing', 28, prompt);
    };
</script>
        `;
    },
    "quizPool": [
        {
            "question": "Văn Miếu - Quốc Tử Giám được xem là công trình gì đầu tiên của Việt Nam?",
            "options": [
                "Thư viện đầu tiên",
                "Trường đại học đầu tiên",
                "Bảo tàng đầu tiên",
                "Cung điện đầu tiên"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khoa thi tiến sĩ đầu tiên của nước ta được tổ chức vào năm nào?",
            "options": [
                "Năm 1010",
                "Năm 1070",
                "Năm 1075",
                "Năm 1442"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Tính đến năm 1919, nước ta đã tổ chức được tổng cộng bao nhiêu khoa thi?",
            "options": [
                "104 khoa",
                "185 khoa",
                "82 khoa",
                "38 khoa"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Theo bảng thống kê, triều đại nào tổ chức ít khoa thi nhất?",
            "options": [
                "Triều Lý",
                "Triều Trần",
                "Triều Hồ (2 khoa)",
                "Triều Mạc"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Tổng số tiến sĩ đỗ đạt qua các triều đại là bao nhiêu người?",
            "options": [
                "1306 người",
                "1780 người",
                "2896 người",
                "3000 người"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Triều đại nào dưới đây KHÔNG có trạng nguyên theo bảng thống kê?",
            "options": [
                "Triều Lê và Triều Mạc",
                "Triều Lý, Triều Hồ và Triều Nguyễn",
                "Triều Trần và Triều Lê",
                "Triều Nguyễn và Triều Mạc"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Triều đại nào có số lượng trạng nguyên nhiều nhất?",
            "options": [
                "Triều Trần (9 người)",
                "Triều Mạc (11 người)",
                "Triều Lê (27 người)",
                "Triều Lý (0 người)"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Hiện nay tại Văn Miếu - Quốc Tử Giám còn lưu giữ bao nhiêu tấm bia tiến sĩ?",
            "options": [
                "185 tấm",
                "82 tấm",
                "104 tấm",
                "38 tấm"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Các tấm bia đá tại Văn Miếu khắc tên tuổi của bao nhiêu vị tiến sĩ?",
            "options": [
                "2896 vị",
                "1780 vị",
                "1306 vị",
                "484 vị"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Các tấm bia tiến sĩ tại Văn Miếu ghi danh các tiến sĩ đỗ đạt trong khoảng thời gian nào?",
            "options": [
                "Từ năm 1075 đến 1919",
                "Từ khoa thi năm 1442 đến khoa thi năm 1779",
                "Từ năm 1010 đến 1442",
                "Chỉ trong triều đại nhà Lê"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khu vực nào trong Văn Miếu là nơi đặt các bia tiến sĩ?",
            "options": [
                "Khuê Văn Các",
                "Nhà Thái Học",
                "Bên giếng Thiền Quang",
                "Cổng Đại Trung"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Chi tiết nào cho thấy nền giáo dục xưa cũng mở rộng cửa cho người dân thường?",
            "options": [
                "Quốc Tử Giám chỉ dành cho con vua",
                "Chỉ có người giàu mới được đi thi",
                "Về sau học trò giỏi là con em dân thường cũng được học ở Quốc Tử Giám",
                "Các khoa thi chỉ tổ chức trong hoàng cung"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Bảng số liệu thống kê trong bài có tác dụng gì?",
            "options": [
                "Giúp bài văn dài hơn",
                "Cung cấp thông tin cụ thể, rõ ràng, có sức thuyết phục cao về truyền thống khoa cử",
                "Để trang trí cho đẹp",
                "Để thay thế hình ảnh minh họa"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cụm từ \"Nghìn năm văn hiến\" muốn nói đến điều gì?",
            "options": [
                "Đất nước có nhiều vua chúa",
                "Đất nước có nhiều tài nguyên khoáng sản",
                "Đất nước có truyền thống văn hóa, giáo dục lâu đời và tốt đẹp",
                "Đất nước có nghìn năm tuổi"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Qua bài đọc, em cảm thấy như thế nào về lịch sử khoa cử của nước nhà?",
            "options": [
                "Thấy bình thường",
                "Thấy lo lắng vì phải học nhiều",
                "Tự hào về truyền thống hiếu học và trọng nhân tài của cha ông",
                "Thấy ngạc nhiên về số lượng trạng nguyên"
            ],
            "answer": 2,
            "level": 1
        }
    ]
};
