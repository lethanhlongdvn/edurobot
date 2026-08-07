export const lesson244 = {
    "topic": "Tiếng Việt 5",
    "week": "35",
    "period": "244",
    "title": "KIỂM TRA ĐỌC (TIẾT 6)",
    "desc": "Đề kiểm tra đọc tham khảo cuối học kì 2: Đọc thành tiếng bài thơ Qua Thậm Thình và Đọc hiểu phong cảnh Đền Hùng kết hợp ôn luyện câu ghép, dấu gạch ngang và nghĩa của từ.",
    "subject": "Tiếng Việt",
    "theme": "Thế giới của chúng ta",
    "audio": "",
    "content": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-4xl mx-auto pb-12">
        <!-- 🎯 Mục tiêu bài học -->
        <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
            <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl"></div>
            <h3 class="text-2xl md:text-3xl font-black text-blue-600 mb-4 flex items-center gap-3">
                <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
                Mục tiêu bài học
            </h3>
            <ul class="space-y-3 text-blue-600 font-bold text-xl md:text-2xl ml-2">
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Đọc thành tiếng trôi chảy bài thơ 'Qua Thậm Thình', hiểu rõ tình cảm hướng về nguồn cội Tổ tiên và sự gắn bó giữa Vua Hùng với nhân dân.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Đọc hiểu chi tiết văn bản 'Phong cảnh Đền Hùng', xác định đúng các thông tin miêu tả cảnh vật cổ kính và địa lý vùng đất Tổ.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Nhận diện chính xác câu ghép, cách nối vế câu trực tiếp, công dụng dấu gạch ngang và phân biệt nghĩa gốc - nghĩa chuyển của từ.
                </li>
            </ul>
        </div>

        <!-- 📖 Đọc thành tiếng: Qua Thậm Thình -->
        <section class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 space-y-6">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl">1</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Phần I: Đọc thành tiếng & trả lời câu hỏi</h3>
            </div>
            
            <div class="p-6 md:p-8 bg-blue-50/30 rounded-3xl space-y-6 max-w-2xl mx-auto border border-blue-100">
                <h4 class="text-xl md:text-2xl font-black text-blue-600 text-center">📖 QUA THẬM THÌNH</h4>
                <div class="serif-font text-gray-800 text-lg md:text-xl leading-relaxed space-y-4 text-center">
                    <p>
                        Đi qua xóm núi Thậm Thình<br>
                        Bâng khuâng nhớ nước non mình nghìn năm.
                    </p>
                    <p>
                        Vua Hùng một sáng đi săn<br>
                        Trưa tròn bóng nắng nghỉ chân chốn này.<br>
                        Dân dâng một quả xôi đầy<br>
                        Bánh chưng mấy cặp, bánh giầy mấy đôi.<br>
                        Đẹp lòng, vua phán bầy tôi<br>
                        Tìm đất kén thợ định nơi xây nhà.
                    </p>
                    <p>
                        Trăm cô gái tựa tiên sa<br>
                        Múa chày đôi với chày ba rập rình.<br>
                        Đêm đêm tiếng thậm tiếng thình<br>
                        Cối gạo đầy cả nghĩa tình nước non.
                    </p>
                    <p>
                        Không còn dấu cũ lầu son<br>
                        Phía sau thành phố khói vờn trong mây.<br>
                        Trời cao. Bóng toả đường cây<br>
                        Nhịp chày xưa thoảng đâu đây... thậm thình.
                    </p>
                    <p class="text-right font-black text-blue-600 text-sm">— (Nguyễn Bùi Vợi)</p>
                </div>

                <!-- Chú thích -->
                <div class="p-4 bg-white border border-blue-150 rounded-2xl text-sm font-bold text-blue-600">
                    ℹ️ <strong>Thậm Thình:</strong> một địa danh thuộc huyện Phong Châu, tỉnh Phú Thọ; tục truyền đây là nơi Vua Hùng dựng lầu và đặt kho chứa gạo.
                </div>
            </div>

            <!-- Câu hỏi tương tác Đọc thành tiếng -->
            <div class="space-y-4 pt-4 border-t border-gray-150">
                <p class="font-black text-gray-800 text-lg">Em hãy chọn câu hỏi và thực hành trả lời câu hỏi đọc thành tiếng:</p>
                <div class="space-y-3">
                    <button onclick="window.selectQA244('q1')" id="btn-q-1" class="w-full p-4 bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-2xl text-left font-bold text-gray-700 transition-all">
                        ❓ Câu 1: Vì sao khi đi qua Thậm Thình, tác giả lại bâng khuâng nhớ về thuở xa xưa?
                    </button>
                    <button onclick="window.selectQA244('q2')" id="btn-q-2" class="w-full p-4 bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-2xl text-left font-bold text-gray-700 transition-all">
                        ❓ Câu 2: Qua lời kể của tác giả, những chi tiết nào cho thấy vua rất gần gũi, gắn bó với muôn dân?
                    </button>
                    <button onclick="window.selectQA244('q3')" id="btn-q-3" class="w-full p-4 bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-2xl text-left font-bold text-gray-700 transition-all">
                        ❓ Câu 3: Theo em, bốn dòng thơ cuối ý nói gì?
                    </button>
                </div>
                <div id="fb-qa-244" class="hidden p-4 rounded-xl font-bold text-lg mt-2"></div>
            </div>
        </section>

        <!-- 📖 Đọc hiểu: Phong cảnh Đền Hùng -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 relative overflow-hidden">
                <div class="space-y-8">
                    <!-- Minh họa sách giáo khoa -->
                    <div class="w-full max-w-lg mx-auto aspect-[16/9] bg-gradient-to-br from-blue-50 to-sky-100 rounded-3xl border-4 border-white shadow-lg overflow-hidden relative group">
                        <img src="assets/images/phong_canh_den_hung.png" alt="Phong cảnh Đền Hùng uy nghiêm giữa núi rừng Nghĩa Lĩnh" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onerror="this.src='placeholders/den_hung.png'; this.onerror=null;">
                    </div>

                    <h4 class="text-3xl md:text-4xl font-black text-blue-600 text-center leading-tight mb-8">
                        📖 PHONG CẢNH ĐỀN HÙNG
                    </h4>
                    
                    <div class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed text-justify space-y-6 pl-4 md:pl-8 border-l-4 border-blue-200">
                        <p class="indent-8">
                            Đền Thượng nằm chót vót trên đỉnh núi Nghĩa Lĩnh. Trước đền, những khóm hải đường đâm bông rực đỏ, những cánh bướm nhiều màu sắc bay dập dờn như đang múa quạt xoè hoa. Trong đền, dòng chữ vàng <em>Nam quốc sơn hà</em> uy nghiêm để ở bức hoành phi treo chính giữa.
                        </p>
                        <p class="indent-8">
                            Lăng của các Vua Hùng kề bên đền Thượng, ẩn trong rừng cây xanh xanh. Đứng ở đây, nhìn ra xa, phong cảnh thật là đẹp. Bên phải là đỉnh Ba Vì vòi vọi, nơi Mị Nương – con gái Hùng Vương thứ 18 – theo Sơn Tinh về trấn giữ núi cao. Dãy Tam Đảo như bức tường xanh sừng sững đỡ lấy mây trời cuồn cuộn. Phía xa xa là núi Sóc Sơn, nơi in dấu chân ngựa sắt Phù Đổng, người có công giúp Hùng Vương đánh thắng giặc Ân xâm lược. Trước mặt là Ngã Ba Hạc, nơi gặp gỡ của ba dòng sông lớn tháng năm mải miết đắp bồi phù sa cho đồng bằng xanh mát.
                        </p>
                        <p class="indent-8">
                            Trước đền Thượng có một cột đá cao đến năm gang, rộng khoảng ba tấc. Theo ngọc phả, trước khi dời đô về Phong Khê, An Dương Vương đã dựng mốc đá đó, thề với các Vua Hùng giữ vững giang sơn. Lần theo lối cũ đến lưng chừng núi có đền Trung thờ 18 chi Vua Hùng. Những cành hoa đại cổ thụ toả hương thơm, những gốc thông già hàng năm, sáu thế kỉ che mát cho con cháu về thăm đất Tổ. Đi dẫn xuống là đền Hạ, chùa Thiên Quang và cuối cùng là đền Giếng, nơi có giếng Ngọc trong xanh, ngày xưa công chúa Mị Nương thường xuống rửa mặt, soi gương.
                        </p>
                        <p class="text-right font-black text-blue-600 text-lg mt-6">— (Theo <em>Đoàn Minh Tuấn</em>)</p>
                    </div>

                    <!-- Chú giải từ ngữ -->
                    <div class="bg-amber-50 p-6 rounded-3xl border-2 border-dashed border-amber-200">
                        <p class="text-sm font-black text-amber-600 uppercase tracking-[0.2em] mb-4">📝 Từ ngữ chú giải</p>
                        <ul class="space-y-4 text-base md:text-lg text-amber-900 font-bold">
                            <li class="flex items-start gap-2">
                                <span class="text-amber-500">•</span>
                                <span><strong>Nam quốc sơn hà (sông núi nước Nam):</strong> tên một bài thơ – tương truyền của Lý Thường Kiệt – khẳng định quyền độc lập, tự chủ của nước ta.</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-amber-500">•</span>
                                <span><strong>Bức hoành phi:</strong> tấm gỗ sơn son thếp vàng có khắc chữ Hán hoặc chữ Nôm cỡ lớn, thường treo ngang ở gian giữa nhà để thờ hoặc trang trí.</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-amber-500">•</span>
                                <span><strong>Ngọc phả:</strong> sách ghi chép lai lịch, thân thế, sự nghiệp của những người được người đời kính trọng, tôn thờ.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `,
    "practice": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-4xl mx-auto pb-12">
        <!-- 📖 Hoạt động 2: Trả lời câu hỏi đọc hiểu Phong cảnh Đền Hùng -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-blue-100 space-y-6">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl">2</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Trả lời câu hỏi Đọc hiểu & Nhận diện từ ngữ</h3>
            </div>

            <!-- Câu 1: Đền Thượng miêu tả thế nào -->
            <div class="bg-gray-50 p-6 rounded-3xl border border-gray-200 space-y-4">
                <h5 class="font-black text-gray-800 text-lg">💡 Câu 1: Ở đoạn mở đầu, đền Thượng được miêu tả thế nào?</h5>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-white border border-gray-200 rounded-xl space-y-2">
                        <span class="font-bold text-blue-600 text-sm">Cảnh vật trước đền:</span>
                        <p class="text-sm text-gray-600 font-bold leading-relaxed">Những khóm hải đường đâm bông rực đỏ, những cánh bướm nhiều màu sắc bay dập dờn như đang múa quạt xoè hoa.</p>
                    </div>
                    <div class="p-4 bg-white border border-gray-200 rounded-xl space-y-2">
                        <span class="font-bold text-blue-600 text-sm">Cảnh vật trong đền:</span>
                        <p class="text-sm text-gray-600 font-bold leading-relaxed">Dòng chữ vàng "Nam quốc sơn hà" uy nghiêm để ở bức hoành phi treo chính giữa.</p>
                    </div>
                </div>
            </div>

            <!-- Câu 2: Trò chơi ghép nối địa danh -->
            <!-- Bài 2 -->
            <div class="p-6 bg-emerald-50/20 border border-emerald-100 rounded-3xl space-y-4" id="ex-244-match">
                <h5 class="font-black text-emerald-950 text-lg">💡 Câu 2: Ghép vị trí quan sát với phong cảnh thiên nhiên tương ứng nhìn từ lăng:</h5>
                <div class="space-y-4">
                    <!-- Phía bên phải -->
                    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-3 bg-white border border-emerald-200 rounded-xl">
                        <span class="font-bold text-emerald-900 text-base md:text-lg shrink-0">👉 Phía bên phải:</span>
                        <select id="sel-geo-right" class="w-full md:w-3/4 p-2 border border-emerald-350 rounded-xl font-bold bg-white text-sm focus:outline-none">
                            <option value="">-- Chọn phong cảnh tương ứng --</option>
                            <option value="tam_dao">Dãy Tam Đảo như bức tường xanh sừng sững đỡ lấy mây trời cuồn cuộn; xa xa là núi Sóc Sơn...</option>
                            <option value="ba_vi">Đỉnh Ba Vì vòi vọi, nơi Mị Nương - con gái Hùng Vương thứ 18 - theo Sơn Tinh về trấn giữ núi cao.</option>
                            <option value="hac">Ngã Ba Hạc, nơi gặp gỡ của ba dòng sông lớn tháng năm mải miết bắp bồi phù sa...</option>
                        </select>
                    </div>

                    <!-- Phía bên trái -->
                    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-3 bg-white border border-emerald-200 rounded-xl">
                        <span class="font-bold text-emerald-900 text-base md:text-lg shrink-0">👉 Phía bên trái:</span>
                        <select id="sel-geo-left" class="w-full md:w-3/4 p-2 border border-emerald-350 rounded-xl font-bold bg-white text-sm focus:outline-none">
                            <option value="">-- Chọn phong cảnh tương ứng --</option>
                            <option value="tam_dao">Dãy Tam Đảo như bức tường xanh sừng sững đỡ lấy mây trời cuồn cuộn; xa xa là núi Sóc Sơn...</option>
                            <option value="ba_vi">Đỉnh Ba Vì vòi vọi, nơi Mị Nương - con gái Hùng Vương thứ 18 - theo Sơn Tinh về trấn giữ núi cao.</option>
                            <option value="hac">Ngã Ba Hạc, nơi gặp gỡ của ba dòng sông lớn tháng năm mải miết bắp bồi phù sa...</option>
                        </select>
                    </div>

                    <!-- Trước mặt -->
                    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-3 bg-white border border-emerald-200 rounded-xl">
                        <span class="font-bold text-emerald-900 text-base md:text-lg shrink-0">👉 Trước mặt:</span>
                        <select id="sel-geo-front" class="w-full md:w-3/4 p-2 border border-emerald-350 rounded-xl font-bold bg-white text-sm focus:outline-none">
                            <option value="">-- Chọn phong cảnh tương ứng --</option>
                            <option value="tam_dao">Dãy Tam Đảo như bức tường xanh sừng sững đỡ lấy mây trời cuồn cuộn; xa xa là núi Sóc Sơn...</option>
                            <option value="ba_vi">Đỉnh Ba Vì vòi vọi, nơi Mị Nương - con gái Hùng Vương thứ 18 - theo Sơn Tinh về trấn giữ núi cao.</option>
                            <option value="hac">Ngã Ba Hạc, nơi gặp gỡ của ba dòng sông lớn tháng năm mải miết bắp bồi phù sa...</option>
                        </select>
                    </div>
                </div>

                <div class="flex justify-end items-center gap-4"><button onclick="window.resetGeoMatch244()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="window.checkGeoMatch244();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-match-244" class="hidden p-4 rounded-xl font-bold text-lg mt-2"></div>
            </div>

            <!-- Câu 3 & 4 & 5: Các câu hỏi tự luận mở rộng -->
            <div class="space-y-4">
                <div class="accordion-item bg-gray-50 rounded-2xl border border-gray-150 overflow-hidden">
                    <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                        <span class="font-bold text-gray-800 text-base md:text-lg group-hover:text-blue-600 transition-colors">
                            Câu 3: Những cảnh vật nào ở đền Trung gợi lên vẻ cổ kính?
                        </span>
                        <span class="text-blue-600 font-black text-xl shrink-0 ml-2 group-hover:scale-110 transition-transform">?</span>
                    </button>
                    <div class="accordion-content">
                        <div class="px-6 pb-6 pt-4 text-gray-700 text-base md:text-lg leading-relaxed border-t border-gray-150 bg-white">
                            Đó là những cành hoa đại cổ thụ toả hương thơm mát, những gốc thông già cổ kính đã có tuổi đời từ năm, sáu thế kỉ tỏa bóng che mát cho con cháu về thăm đất Tổ.
                        </div>
                    </div>
                </div>

                <div class="accordion-item bg-gray-50 rounded-2xl border border-gray-150 overflow-hidden">
                    <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                        <span class="font-bold text-gray-800 text-base md:text-lg group-hover:text-blue-600 transition-colors">
                            Câu 4 & 5: Các câu chuyện cổ xưa được gợi nhớ và ý nghĩa của việc nhắc nhớ đó?
                        </span>
                        <span class="text-blue-600 font-black text-xl shrink-0 ml-2 group-hover:scale-110 transition-transform">?</span>
                    </button>
                    <div class="accordion-content">
                        <div class="px-6 pb-6 pt-4 text-gray-700 text-base md:text-lg leading-relaxed border-t border-gray-150 bg-white space-y-2">
                            <p>• <strong>Các câu chuyện cổ tích/truyền thuyết:</strong> <em>Sơn Tinh - Thủy Tinh</em> (đỉnh Ba Vì), <em>Thánh Gióng</em> (núi Sóc Sơn), <em>An Dương Vương thề dựng cột đá giữ nước</em> (Phong Khê).</p>
                            <p>• <strong>Ý nghĩa:</strong> Nhắc nhớ chúng ta tôn kính nguồn cội, ghi nhớ công lao dựng nước, giữ nước vĩ đại của cha ông và gìn giữ niềm tự hào lịch sử nghìn năm.</p>
                        </div>
                    </div>
                </div>

                <div class="accordion-item bg-gray-50 rounded-2xl border border-gray-150 overflow-hidden">
                    <button onclick="toggleAccordion(this)" class="w-full p-5 text-left flex justify-between items-start group">
                        <span class="font-bold text-gray-800 text-base md:text-lg group-hover:text-blue-600 transition-colors">
                            Câu 6: Em hãy nêu cảm nhận về câu ca dao: "Dù ai đi ngược về xuôi..."?
                        </span>
                        <span class="text-blue-600 font-black text-xl shrink-0 ml-2 group-hover:scale-110 transition-transform">?</span>
                    </button>
                    <div class="accordion-content">
                        <div class="px-6 pb-6 pt-4 text-gray-700 text-base md:text-lg leading-relaxed border-t border-gray-150 bg-white">
                            Câu ca dao khuyên bảo mỗi người dân nước Việt, dù có đi đâu xa, làm công việc gì thì vào ngày Giỗ Tổ mùng Mười tháng Ba cũng hướng lòng về nguồn cội, kính trọng tổ tiên. Đây chính là truyền thống uống nước nhớ nguồn quý báu của dân tộc ta.
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 📖 Hoạt động 3: Luyện tập ngữ pháp nâng cao -->
        <!-- Bài 7 & Bài 8 -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-emerald-100 space-y-6" id="ex-244-grammar">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-xl">3</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Luyện tập ngữ pháp Đền Hùng</h3>
            </div>
            
            <div class="space-y-6">
                <!-- Chọn câu ghép -->
                <div class="p-4 bg-emerald-50/20 border border-emerald-100 rounded-2xl space-y-2">
                    <span class="font-bold text-emerald-950 text-base md:text-lg">a. Câu nào ở bài tập 7 là câu ghép?</span>
                    <select id="sel-ghep-7" class="w-full p-2.5 border border-emerald-350 rounded-xl font-bold bg-white text-base focus:outline-none">
                        <option value="">-- Chọn phương án --</option>
                        <option value="a">Câu a (Trước đền, những khóm hải đường đâm bông rực đỏ, những cánh bướm nhiều màu sắc bay...)</option>
                        <option value="b">Câu b (Trong đền, dòng chữ vàng Nam quốc sơn hà uy nghiêm để ở bức hoành phi...)</option>
                        <option value="c">Câu c (Lăng của các Vua Hùng kề bên đền Thượng, ẩn trong rừng...)</option>
                    </select>
                </div>

                <!-- Cách nối vế câu -->
                <div class="p-4 bg-emerald-50/20 border border-emerald-100 rounded-2xl space-y-2">
                    <span class="font-bold text-emerald-950 text-base md:text-lg">b. Các vế của câu ghép ở bài tập 8 được nối bằng cách nào?</span>
                    <select id="sel-ghep-8" class="w-full p-2.5 border border-emerald-350 rounded-xl font-bold bg-white text-base focus:outline-none">
                        <option value="">-- Chọn phương án --</option>
                        <option value="truc_tiep">Nối trực tiếp (Dùng dấu phẩy ngăn cách các vế câu)</option>
                        <option value="ket_tu">Nối bằng kết từ (sử dụng từ ngữ nối liên kết)</option>
                    </select>
                </div>

                <!-- Công dụng dấu gạch ngang -->
                <!-- Bài 9 -->
                <div class="p-4 bg-emerald-50/20 border border-emerald-100 rounded-2xl space-y-2">
                    <span class="font-bold text-emerald-950 text-base md:text-lg">c. Công dụng của hai dấu gạch ngang trong câu: '...nơi Mị Nương – con gái Hùng Vương thứ 18 – theo Sơn Tinh...' là:</span>
                    <select id="sel-dash-9" class="w-full p-2.5 border border-emerald-350 rounded-xl font-bold bg-white text-base focus:outline-none">
                        <option value="">-- Chọn công dụng --</option>
                        <option value="thoai">Đánh dấu lời nói trực tiếp của nhân vật trong đối thoại</option>
                        <option value="chu_thich">Đánh dấu bộ phận chú thích, giải thích thêm trong câu</option>
                        <option value="liet_ke">Đánh dấu các ý liệt kê trong một danh sách</option>
                    </select>
                </div>

                <!-- Nghĩa gốc và nghĩa chuyển -->
                <!-- Bài 10 -->
                <div class="p-4 bg-emerald-50/20 border border-emerald-100 rounded-2xl space-y-3">
                    <span class="font-bold text-emerald-950 text-base md:text-lg">d. Trong câu: 'Đứng ở đây, nhìn ra xa...', từ 'đứng' dùng với nghĩa:</span>
                    <select id="sel-word-10" class="w-full p-2.5 border border-emerald-350 rounded-xl font-bold bg-white text-base focus:outline-none">
                        <option value="">-- Chọn nghĩa --</option>
                        <option value="goc">Nghĩa gốc (tư thế thẳng đứng của cơ thể bằng chân)</option>
                        <option value="chuyen">Nghĩa chuyển (trạng thái dừng lại, không chuyển động...)</option>
                    </select>
                    
                    <div class="pt-2">
                        <span class="text-sm font-bold text-emerald-900">✍️ Đặt 1 câu có từ 'đứng' được dùng với nghĩa chuyển:</span>
                        <input type="text" id="txt-word-10" class="w-full p-3 border border-emerald-350 rounded-xl font-medium focus:outline-none focus:border-emerald-500 text-base" placeholder="Ví dụ: Chiếc xe buýt đứng bánh giữa đường vì hỏng máy.">
                    </div>
                </div>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="window.resetGrammar244()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="window.checkGrammar244();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-grammar-244" class="hidden p-4 rounded-xl font-bold text-lg mt-4 animate-in fade-in"></div>
        </section>
    </div>
    `,
    "quizPool": [
        {
            "question": "Vua Hùng nghỉ chân ở đâu trong bài thơ 'Qua Thậm Thình'?",
            "options": [
                "Đỉnh núi Nghĩa Lĩnh",
                "Xóm núi Thậm Thình",
                "Bãi sông Hồng",
                "Đền Thượng cổ kính"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Những món quà nào được người dân Thậm Thình dâng lên Vua Hùng khi dừng chân?",
            "options": [
                "Bánh trôi nước và hoa quả rừng",
                "Một quả xôi đầy, mấy cặp bánh chưng, mấy đôi bánh giầy",
                "Tơ tằm dệt lụa và mật ong rừng",
                "Nước chè xanh và ngô nướng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nhịp chày giã gạo của trăm cô gái trong bài thơ 'Qua Thậm Thình' được miêu tả bằng từ tượng thanh nào?",
            "options": [
                "Rình rang",
                "Thậm thình",
                "Xình xịch",
                "Rào rào"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nơi thờ 18 chi Vua Hùng nằm ở độ cao lưng chừng núi Nghĩa Lĩnh được gọi là đền gì?",
            "options": [
                "Đền Thượng",
                "Đền Trung",
                "Đền Hạ",
                "Đền Giếng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Theo truyện đọc, dòng chữ vàng 'Nam quốc sơn hà' uy nghiêm được đặt ở đâu trong đền Thượng?",
            "options": [
                "Trên cột đá thề",
                "Ở bức hoành phi treo chính giữa",
                "Trên tường lăng Vua Hùng",
                "Bên ngoài giếng Ngọc"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Dãy núi nào được miêu tả 'như bức tường xanh sừng sững đỡ lấy mây trời cuồn cuộn'?",
            "options": [
                "Đỉnh Ba Vì",
                "Dãy Tam Đảo",
                "Núi Sóc Sơn",
                "Núi Nghĩa Lĩnh"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Địa danh nào tương truyền là nơi gặp gỡ của ba dòng sông lớn bồi đắp phù sa cho đồng bằng?",
            "options": [
                "Cổ Đô",
                "Ngã Ba Hạc",
                "Phong Khê",
                "Bãi Cháy"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cột đá thề dựng trước đền Thượng do ai xây dựng trước khi dời đô về Phong Khê?",
            "options": [
                "Vua Hùng thứ sáu",
                "An Dương Vương",
                "Sơn Tinh",
                "Lý Thường Kiệt"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Câu 'Trước đền, những khóm hải đường đâm bông rực đỏ, những cánh bướm nhiều màu sắc bay dập dờn...' là kiểu câu gì?",
            "options": [
                "Câu đơn",
                "Câu ghép",
                "Câu cảm",
                "Câu kể"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Các vế của câu ghép ở câu 9 được nối với nhau trực tiếp bằng gì?",
            "options": [
                "Quan hệ từ 'nên'",
                "Dấu phẩy",
                "Cặp từ hô ứng",
                "Liên từ 'và'"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'đứng' trong câu nào sau đây mang nghĩa chuyển?",
            "options": [
                "Cậu bé đứng nghiêm trang chào cờ Tổ quốc.",
                "Gió đứng bóng nên thời tiết trưa hè vô cùng oi bức.",
                "Thầy giáo đứng trên bục giảng bài.",
                "Chúng em đứng xếp hàng thẳng tắp trước căng tin."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Dấu gạch ngang trong câu: 'Mị Nương – con gái Hùng Vương thứ 18 – theo Sơn Tinh...' dùng để làm gì?",
            "options": [
                "Đánh dấu đối thoại nhân vật",
                "Đánh dấu bộ phận chú thích, giải thích thêm trong câu",
                "Đánh dấu liệt kê các chòm núi",
                "Kết nối hai vế câu ghép song song"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Giếng Ngọc trong xanh, nơi công chúa Mị Nương soi gương ngày xưa nằm ở khu vực đền nào?",
            "options": [
                "Đền Thượng",
                "Đền Trung",
                "Đền Hạ",
                "Đền Giếng"
            ],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Truyền thuyết nào liên quan trực tiếp đến núi Sóc Sơn được nhắc đến trong bài đọc?",
            "options": [
                "Sơn Tinh - Thủy Tinh",
                "Thánh Gióng (ngựa sắt Phù Đổng)",
                "Bà tổ nghề dệt lụa",
                "Sự tích bánh chưng bánh giầy"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Ý nghĩa sâu sắc nhất của ngày Giỗ Tổ mùng Mười tháng Ba là gì?",
            "options": [
                "Là ngày lễ để mọi người đi du lịch núi non",
                "Tôn vinh nguồn cội, tri ân công đức tổ tiên dựng nước và nhắc nhở tinh thần đại đoàn kết dân tộc",
                "Tổ chức hội thi múa bướm ven sông Hồng",
                "Ủng hộ nghề dệt lụa ở Cổ Đô"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// Đăng ký các tương tác toàn cục
window.selectQA244 = function(qType) {
    const fb = document.getElementById('fb-qa-244');
    fb.classList.remove('hidden');

    const btn1 = document.getElementById('btn-q-1');
    const btn2 = document.getElementById('btn-q-2');
    const btn3 = document.getElementById('btn-q-3');
    
    btn1.className = "w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-left font-bold text-gray-500 transition-all";
    btn2.className = "w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-left font-bold text-gray-500 transition-all";
    btn3.className = "w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-left font-bold text-gray-500 transition-all";

    if (qType === 'q1') {
        btn1.className = "w-full p-4 bg-blue-100 border-2 border-blue-300 rounded-2xl text-left font-bold text-blue-950 transition-all";
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-2";
        fb.innerHTML = "🌟 Đúng vậy! Tác giả bâng khuâng vì địa danh Thậm Thình gợi nhớ đến câu chuyện lịch sử ngàn đời của Vua Hùng đi săn, dựng lầu và kho gạo thời dựng nước.";
    } else if (qType === 'q2') {
        btn2.className = "w-full p-4 bg-blue-100 border-2 border-blue-300 rounded-2xl text-left font-bold text-blue-950 transition-all";
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-2";
        fb.innerHTML = "🌟 Chính xác! Chi tiết người dân dâng xôi đầy, bánh chưng bánh giầy và vua phán tìm đất xây nhà, các cô gái múa chày rập rình giã gạo cho thấy sự gần gũi vô cùng gắn kết giữa vua và dân.";
    } else {
        btn3.className = "w-full p-4 bg-blue-100 border-2 border-blue-300 rounded-2xl text-left font-bold text-blue-950 transition-all";
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-2";
        fb.innerHTML = "🌟 Rất sâu sắc! Dù lầu son cũ không còn nhưng thành phố hiện đại mọc lên, nhịp sống mới phát triển, song tiếng giã gạo nghĩa tình của nguồn cội cha ông vẫn vang vọng mãi đâu đây.";
    }
    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
};

window.checkGeoMatch244 = function() {
    const right = document.getElementById('sel-geo-right').value;
    const left = document.getElementById('sel-geo-left').value;
    const front = document.getElementById('sel-geo-front').value;
    const fb = document.getElementById('fb-match-244');
    fb.classList.remove('hidden');

    if (!right || !left || !front) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-850 border border-orange-200 mt-2";
        fb.innerHTML = "⚠️ Em hãy ghép đầy đủ vị trí quan sát địa lý cho cả 3 hướng nhìn nhé!";
        return;
    }

    if (right === 'ba_vi' && left === 'tam_dao' && front === 'hac') {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-2";
        fb.innerHTML = "🌟 Chúc mừng em! Em đã ghép nối chính xác các địa lý vùng biên cương đất Tổ nhìn từ lăng Vua Hùng.";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
        if (typeof window.submitMathLesson === 'function') {
            window.submitMathLesson("Tiếng Việt Tiết 244: Ghép nối địa lý Đền Hùng", 100, "ex-244-match", 1, 1, 1);
        }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-800 border border-red-200 mt-2";
        fb.innerHTML = "❌ Còn hướng ghép chưa chính xác. Đọc kĩ bài: Bên phải là đỉnh Ba Vì, bên trái là dãy Tam Đảo, trước mặt là Ngã Ba Hạc.";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

window.resetGeoMatch244 = function() {
    document.getElementById('sel-geo-right').value = "";
    document.getElementById('sel-geo-left').value = "";
    document.getElementById('sel-geo-front').value = "";
    const fb = document.getElementById('fb-match-244');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};

window.checkGrammar244 = function() {
    const type7 = document.getElementById('sel-ghep-7').value;
    const link8 = document.getElementById('sel-ghep-8').value;
    const dash9 = document.getElementById('sel-dash-9').value;
    const word10 = document.getElementById('sel-word-10').value;
    const text10 = document.getElementById('txt-word-10').value.trim();
    const fb = document.getElementById('fb-grammar-244');
    fb.classList.remove('hidden');

    if (!type7 || !link8 || !dash9 || !word10 || text10.length < 5) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-850 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em hãy chọn đầy đủ đáp án trắc nghiệm và đặt câu với từ 'đứng' nghĩa chuyển nhé!";
        return;
    }

    if (type7 === 'a' && link8 === 'truc_tiep' && dash9 === 'chu_thich' && word10 === 'goc') {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
        fb.innerHTML = "🌟 Tuyệt vời! Tất cả các phân tích ngữ pháp đều hoàn toàn chính xác. Dấu gạch ngang chú thích cho Mị Nương, từ 'đứng' mang nghĩa gốc, và câu ghép bài 8 được nối trực tiếp bằng dấu phẩy.";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
        if (typeof window.submitMathLesson === 'function') {
            window.submitMathLesson("Tiếng Việt Tiết 244: Ngữ pháp tổng hợp Đền Hùng", 100, "ex-244-grammar", 1, 1, 1);
        }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-800 border border-red-200 mt-4";
        fb.innerHTML = "❌ Còn phương án lựa chọn chưa chính xác. Em hãy kiểm tra lại và chọn lại nhé!";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

window.resetGrammar244 = function() {
    document.getElementById('sel-ghep-7').value = "";
    document.getElementById('sel-ghep-8').value = "";
    document.getElementById('sel-dash-9').value = "";
    document.getElementById('sel-word-10').value = "";
    document.getElementById('txt-word-10').value = "";
    const fb = document.getElementById('fb-grammar-244');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};

// Đăng ký bài học toàn cục
window.lesson244 = lesson244;
