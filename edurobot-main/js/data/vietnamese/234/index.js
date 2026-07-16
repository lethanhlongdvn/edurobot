export const lesson234 = {
    "topic": "Tiếng Việt 5",
    "week": "28",
    "period": "234",
    "title": "Nghìn năm văn hiến",
    "desc": "Nghìn năm văn hiến",
    "subject": "Tiếng Việt",
    "theme": "Tiếp bước cha ông",
    "audio": "assets/audio/tiengviet/nghinnamvanhien.mp3",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700">
    <!-- 1. PHẦN BÀI ĐỌC -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
            <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                <!-- Hình minh họa nhỏ góc phải -->
                <div class="float-right ml-6 mb-4 relative group/img">
                    <img src="assets/images/nghinnamvanhien.webp" alt="Minh họa Nghìn năm văn hiến" class="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-3 border-white shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105" onclick="(function(){var o=document.getElementById('lb-nghinnam');if(o){o.remove();}var d=document.createElement('div');d.id='lb-nghinnam';d.style.cssText='position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.95);padding:16px;cursor:pointer;';d.onclick=function(){d.remove();};var w=document.createElement('div');w.style.cssText='position:relative;display:inline-block;';w.onclick=function(e){e.stopPropagation();};var img=document.createElement('img');img.src='assets/images/nghinnamvanhien.webp';img.style.cssText='max-width:90vw;max-height:85vh;border-radius:24px;box-shadow:0 25px 50px rgba(0,0,0,0.15);border:4px solid white;';var btn=document.createElement('button');btn.innerHTML='✕';btn.style.cssText='position:absolute;top:-12px;right:-12px;width:40px;height:40px;background:#ef4444;color:white;border:none;border-radius:50%;font-size:20px;font-weight:bold;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.2);';btn.onclick=function(){d.remove();};w.appendChild(img);w.appendChild(btn);d.appendChild(w);document.body.appendChild(d);})()">
                    <button onclick="this.previousElementSibling.click();" class="absolute bottom-2 right-2 w-9 h-9 bg-black/60 hover:bg-black/80 rounded-xl flex items-center justify-center transition-all duration-200 backdrop-blur-sm shadow-md opacity-0 group-hover/img:opacity-100" title="Phóng to hình ảnh">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                    </button>
                </div>
                <h1 class="text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                    <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                    Nghìn năm văn hiến
                </h1>
                <div class="serif-font text-gray-800 text-3xl md:text-4xl leading-loose relative reading-content">
                    <p class="first-letter:text-7xl md:first-letter:text-8xl first-letter:font-black first-letter:text-blue-600 first-letter:mr-4 first-letter:float-left first-letter:leading-none">
                        Đến thăm Văn Miếu – Quốc Tử Giám ở Thủ đô Hà Nội, ngôi trường được coi là trường đại học đầu tiên của Việt Nam, khách nước ngoài không khỏi ngạc nhiên khi biết rằng từ năm 1075, nước ta đã mở khoa thi tiến sĩ. Ngót 10 thế kỉ, tính từ khoa thi năm 1075 đến khoa thi cuối cùng vào năm 1919, các triều vua Việt Nam đã tổ chức được 185 khoa thi, lấy đỗ gần 3000 tiến sĩ, cụ thể như sau:
                    </p>
                    <div class="overflow-x-auto my-10 rounded-2xl border-2 border-blue-100 shadow-md">
                        <table class="w-full text-xl md:text-2xl text-left text-gray-600">
                            <thead class="text-lg md:text-xl text-blue-900 uppercase bg-blue-50">
                                <tr>
                                    <th class="px-8 py-5 font-black">Triều đại</th>
                                    <th class="px-8 py-5 font-black text-center">Số khoa thi</th>
                                    <th class="px-8 py-5 font-black text-center">Số tiến sĩ</th>
                                    <th class="px-8 py-5 font-black text-center">Số trạng nguyên</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y-2 divide-gray-100">
                                <tr class="bg-white hover:bg-gray-50"><td class="px-8 py-5 font-bold text-gray-900">Lý</td><td class="px-8 py-5 text-center">6</td><td class="px-8 py-5 text-center">11</td><td class="px-8 py-5 text-center">0</td></tr>
                                <tr class="bg-gray-50/30 hover:bg-gray-50"><td class="px-8 py-5 font-bold text-gray-900">Trần</td><td class="px-8 py-5 text-center">14</td><td class="px-8 py-5 text-center">51</td><td class="px-8 py-5 text-center">9</td></tr>
                                <tr class="bg-white hover:bg-gray-50"><td class="px-8 py-5 font-bold text-gray-900">Hồ</td><td class="px-8 py-5 text-center">2</td><td class="px-8 py-5 text-center">12</td><td class="px-8 py-5 text-center">0</td></tr>
                                <tr class="bg-gray-50/30 hover:bg-gray-50"><td class="px-8 py-5 font-bold text-gray-900">Lê</td><td class="px-8 py-5 text-center">104</td><td class="px-8 py-5 text-center">1780</td><td class="px-8 py-5 text-center">27</td></tr>
                                <tr class="bg-white hover:bg-gray-50"><td class="px-8 py-5 font-bold text-gray-900">Mạc</td><td class="px-8 py-5 text-center">21</td><td class="px-8 py-5 text-center">484</td><td class="px-8 py-5 text-center">11</td></tr>
                                <tr class="bg-gray-50/30 hover:bg-gray-50"><td class="px-8 py-5 font-bold text-gray-900">Nguyễn</td><td class="px-8 py-5 text-center">38</td><td class="px-8 py-5 text-center">558</td><td class="px-8 py-5 text-center">0</td></tr>
                                <tr class="bg-blue-100 font-black text-blue-900"><td class="px-8 py-5 text-2xl">Tổng cộng</td><td class="px-8 py-5 text-center text-2xl">185</td><td class="px-8 py-5 text-center text-2xl">2896</td><td class="px-8 py-5 text-center text-2xl">47</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        Ngày nay, khách vào thăm Văn Miếu – Quốc Tử Giám còn thấy bên giếng Thiền Quang, dưới những hàng muỗm già cổ kính, 82 tấm bia khắc tên tuổi 1306 vị tiến sĩ từ khoa thi năm 1442 đến khoa thi năm 1779 như chứng tích về một nền văn hiến lâu đời.
                    </p>
                    <p class="text-right italic text-xl text-gray-400 mt-12">(Theo Nguyễn Hoàng)</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 2. PHẦN TÌM HIỂU BÀI -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-8 md:p-12 shadow-xl border-amber-100/50 bg-white/50">
            <div class="flex flex-col items-center gap-12">

                <!-- Tiêu đề -->
                <div class="flex items-center space-x-6 w-full max-w-4xl">
                    <div class="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200 shrink-0">
                        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h2 class="text-4xl font-black text-gray-800 tracking-tight uppercase">Tìm hiểu bài</h2>
                </div>

                <!-- Danh sách câu hỏi -->
                <div class="grid grid-cols-1 gap-8 w-full max-w-4xl">
                    <details class="group bg-white/90 rounded-[40px] border-2 border-blue-100 shadow-sm transition-all hover:shadow-xl overflow-hidden">
                        <summary class="w-full p-10 text-left flex justify-between items-center cursor-pointer list-none bg-white hover:bg-blue-50/50 transition-colors">
                            <span class="font-black text-gray-800 text-3xl md:text-4xl leading-tight">1. Đến thăm Văn Miếu - Quốc Tử Giám, khách nước ngoài ngạc nhiên vì điều gì?</span>
                            <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </summary>
                        <div class="px-12 pb-12 text-gray-700 leading-relaxed border-t-2 border-blue-50 pt-10 bg-blue-50/20 text-2xl md:text-3xl font-medium">
                            Khách nước ngoài ngạc nhiên khi biết rằng từ năm 1075, nước ta đã mở khoa thi tiến sĩ. Ngót 10 thế kỉ, các triều vua Việt Nam đã tổ chức được 185 khoa thi, lấy đỗ gần 3000 tiến sĩ.
                        </div>
                    </details>

                    <details class="group bg-white/90 rounded-[40px] border-2 border-blue-100 shadow-sm transition-all hover:shadow-xl overflow-hidden">
                        <summary class="w-full p-10 text-left flex justify-between items-center cursor-pointer list-none bg-white hover:bg-blue-50/50 transition-colors">
                            <span class="font-black text-gray-800 text-3xl md:text-4xl leading-tight">2. Triều đại nào tổ chức nhiều khoa thi nhất? Triều đại nào có nhiều tiến sĩ nhất?</span>
                            <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </summary>
                        <div class="px-12 pb-12 text-gray-700 leading-relaxed border-t-2 border-blue-50 pt-10 bg-blue-50/20 text-2xl md:text-3xl font-medium">
                            Triều Lê tổ chức nhiều khoa thi nhất (104 khoa) và cũng là triều đại có nhiều tiến sĩ nhất (1780 tiến sĩ).
                        </div>
                    </details>

                    <details class="group bg-white/90 rounded-[40px] border-2 border-blue-100 shadow-sm transition-all hover:shadow-xl overflow-hidden">
                        <summary class="w-full p-10 text-left flex justify-between items-center cursor-pointer list-none bg-white hover:bg-blue-50/50 transition-colors">
                            <span class="font-black text-gray-800 text-3xl md:text-4xl leading-tight">3. Bài văn giúp em hiểu điều gì về truyền thống văn hóa Việt Nam?</span>
                            <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </summary>
                        <div class="px-12 pb-12 text-gray-700 leading-relaxed border-t-2 border-blue-50 pt-10 bg-blue-50/20 text-2xl md:text-3xl font-medium">
                            Bài văn cho thấy người Việt Nam có truyền thống khoa cử lâu đời. Dân tộc ta luôn hiếu học và coi trọng nhân tài.
                        </div>
                    </details>

                    <details class="group bg-white/90 rounded-[40px] border-2 border-blue-100 shadow-sm transition-all hover:shadow-xl overflow-hidden">
                        <summary class="w-full p-10 text-left flex justify-between items-center cursor-pointer list-none bg-white hover:bg-blue-50/50 transition-colors">
                            <span class="font-black text-gray-800 text-3xl md:text-4xl leading-tight">4. Tìm những chi tiết trong bài cho biết ông cha ta luôn coi trọng việc đào tạo nhân tài.</span>
                            <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </summary>
                        <div class="px-12 pb-12 text-gray-700 leading-relaxed border-t-2 border-blue-50 pt-10 bg-blue-50/20 text-2xl md:text-3xl font-medium">
                            Những chi tiết cho thấy ông cha ta coi trọng việc đào tạo nhân tài: Mở khoa thi tiến sĩ từ rất sớm (năm 1075); tổ chức đều đặn suốt gần 10 thế kỉ với 185 khoa thi; lấy đỗ gần 3000 tiến sĩ; dựng 82 tấm bia đá khắc tên tuổi 1306 vị tiến sĩ tại Văn Miếu – Quốc Tử Giám để tôn vinh người tài.
                        </div>
                    </details>

                    <details class="group bg-white/90 rounded-[40px] border-2 border-blue-100 shadow-sm transition-all hover:shadow-xl overflow-hidden">
                        <summary class="w-full p-10 text-left flex justify-between items-center cursor-pointer list-none bg-white hover:bg-blue-50/50 transition-colors">
                            <span class="font-black text-gray-800 text-3xl md:text-4xl leading-tight">5. Bài đọc giúp em hiểu điều gì về truyền thống khoa cử của Việt Nam?</span>
                            <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </summary>
                        <div class="px-12 pb-12 text-gray-700 leading-relaxed border-t-2 border-blue-50 pt-10 bg-blue-50/20 text-2xl md:text-3xl font-medium">
                            Bài đọc giúp em hiểu rằng Việt Nam có truyền thống khoa cử lâu đời, kéo dài gần nghìn năm. Ông cha ta từ xưa đã rất hiếu học, coi trọng việc đào tạo nhân tài. Đây là niềm tự hào của dân tộc ta.
                        </div>
                    </details>
                </div>
            </div>
        </div>
    </section>
</div>
`,
    "practice": `

`,
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

if (!lesson_281_nghin_nam_van_hien.period) lesson234.period = "281";
if (!lesson_281_nghin_nam_van_hien.id) lesson234.id = "281-nghin-nam-van-hien";

