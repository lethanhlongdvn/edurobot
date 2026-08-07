export const lesson238 = {
    "topic": "Tiếng Việt 5",
    "week": "34",
    "period": "238",
    "title": "ĐỌC MỞ RỘNG",
    "desc": "Bài học hướng dẫn học sinh đọc các văn bản thông tin về xử lý rác thải, ghi nhận và chia sẻ thông tin qua Phiếu đọc sách, đồng thời lên ý tưởng bảo vệ hành tinh xanh.",
    "subject": "DMR",
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
                    Đọc hiểu và thu nhận thông tin chính từ các văn bản thông tin về vấn đề xử lý rác thải và bảo vệ môi trường.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Thực hành tóm tắt thông tin đọc được vào Phiếu đọc sách một cách khoa học, ngăn nắp.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Nâng cao ý thức phân loại rác thải, tái chế và hình dung ý tưởng xây dựng một thành phố xanh trong tương lai.
                </li>
            </ul>
        </div>

        <!-- 🧩 Khởi động (Warmup): Game phân loại rác mini -->
        <section class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 space-y-6" id="ex-238-sort">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl">1</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Thử tài phân loại rác thải</h3>
            </div>
            <p class="text-gray-600 font-bold text-lg">Em hãy giúp các bạn nhỏ phân loại 3 loại rác thải sau vào đúng thùng rác nhé:</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Rác 1 -->
                <div class="p-5 bg-orange-50 border border-orange-200 rounded-2xl space-y-2 flex flex-col justify-between">
                    <span class="text-center font-black text-orange-950 text-lg">🍎 Vỏ chuối, rau củ hỏng</span>
                    <select id="sel-238-sort-1" class="w-full p-2 border border-orange-350 rounded-xl font-bold bg-white focus:outline-none text-base">
                        <option value="">-- Chọn thùng rác --</option>
                        <option value="huu_co">Rác hữu cơ dễ phân hủy</option>
                        <option value="tai_che">Rác tái chế (nhựa, kim loại...)</option>
                        <option value="vo_co">Rác còn lại (vô cơ)</option>
                    </select>
                </div>

                <!-- Rác 2 -->
                <div class="p-5 bg-sky-50 border border-sky-200 rounded-2xl space-y-2 flex flex-col justify-between">
                    <span class="text-center font-black text-sky-950 text-lg">🍼 Chai nước nhựa, vỏ lon sữa</span>
                    <select id="sel-238-sort-2" class="w-full p-2 border border-sky-350 rounded-xl font-bold bg-white focus:outline-none text-base">
                        <option value="">-- Chọn thùng rác --</option>
                        <option value="huu_co">Rác hữu cơ dễ phân hủy</option>
                        <option value="tai_che">Rác tái chế (nhựa, kim loại...)</option>
                        <option value="vo_co">Rác còn lại (vô cơ)</option>
                    </select>
                </div>

                <!-- Rác 3 -->
                <div class="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2 flex flex-col justify-between">
                    <span class="text-center font-black text-emerald-950 text-lg">🩹 Khẩu trang y tế đã dùng</span>
                    <select id="sel-238-sort-3" class="w-full p-2 border border-emerald-350 rounded-xl font-bold bg-white focus:outline-none text-base">
                        <option value="">-- Chọn thùng rác --</option>
                        <option value="huu_co">Rác hữu cơ dễ phân hủy</option>
                        <option value="tai_che">Rác tái chế (nhựa, kim loại...)</option>
                        <option value="vo_co">Rác còn lại (vô cơ)</option>
                    </select>
                </div>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="window.resetSort238()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="window.checkSort238();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-sort-238" class="hidden p-4 rounded-xl font-bold text-lg mt-4 animate-in fade-in"></div>
        </section>

        <!-- 📖 Giới thiệu các cuốn sách thông tin -->
        <section class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 space-y-8">
            <h4 class="text-2xl md:text-3xl font-black text-blue-950 border-b border-blue-100 pb-4">
                📖 Các nguồn sách thông tin về xử lý rác thải
            </h4>
            
            <div class="space-y-6">
                <!-- Sách 1 -->
                <div class="flex flex-col md:flex-row items-center gap-6 p-6 bg-gradient-to-r from-emerald-50/50 to-green-50/30 rounded-3xl border border-emerald-100">
                    <div class="w-32 h-44 bg-emerald-600 rounded-2xl text-white font-black p-4 flex flex-col justify-between shadow-md relative shrink-0 overflow-hidden">
                        <div class="absolute -right-6 -bottom-6 w-16 h-16 bg-emerald-500 rounded-full opacity-35"></div>
                        <span class="text-xs uppercase tracking-widest text-emerald-100">Hành tinh xanh</span>
                        <h5 class="text-base leading-tight">Xử lý rác thải</h5>
                    </div>
                    <div class="space-y-2">
                        <h5 class="text-xl font-black text-emerald-950">1. Yêu thương và bảo vệ hành tinh xanh - Xử lý rác thải</h5>
                        <p class="text-gray-600 text-base font-bold leading-relaxed text-justify">
                            Cuốn sách trả lời các câu hỏi quan trọng: Điều gì sẽ xảy ra với lượng rác thải chúng ta thải ra hằng ngày? Tại sao chúng cần được xử lý và chôn lấp một cách an toàn? Có phải tất cả rác thải đều bỏ đi hay có thể tái sử dụng? Mang đến những thông tin trực quan sinh động nhất cho các em.
                        </p>
                    </div>
                </div>

                <!-- Sách 2 -->
                <div class="flex flex-col md:flex-row items-center gap-6 p-6 bg-gradient-to-r from-sky-50/50 to-blue-50/30 rounded-3xl border border-sky-100">
                    <div class="w-32 h-44 bg-sky-600 rounded-2xl text-white font-black p-4 flex flex-col justify-between shadow-md relative shrink-0 overflow-hidden">
                        <div class="absolute -right-6 -bottom-6 w-16 h-16 bg-sky-500 rounded-full opacity-35"></div>
                        <span class="text-xs uppercase tracking-widest text-sky-100">Kiểm soát rác</span>
                        <h5 class="text-base leading-tight text-justify">Bảo vệ môi trường</h5>
                    </div>
                    <div class="space-y-2">
                        <h5 class="text-xl font-black text-sky-950">2. Kiểm soát rác thải, bảo vệ môi trường</h5>
                        <p class="text-gray-600 text-base font-bold leading-relaxed text-justify">
                            Cuốn sách dành riêng cho các em nhỏ. Chứa đựng thông tin toàn diện về rác thải, các bước tái chế cùng những ý tưởng thú vị để mọi người chung tay giúp Trái Đất trở thành một nơi tốt đẹp hơn để sinh sống.
                        </p>
                    </div>
                </div>

                <!-- Sách 3 -->
                <div class="flex flex-col md:flex-row items-center gap-6 p-6 bg-gradient-to-r from-amber-50/50 to-orange-50/30 rounded-3xl border border-amber-100">
                    <div class="w-32 h-44 bg-amber-700 rounded-2xl text-white font-black p-4 flex flex-col justify-between shadow-md relative shrink-0 overflow-hidden">
                        <div class="absolute -right-6 -bottom-6 w-16 h-16 bg-amber-600 rounded-full opacity-35"></div>
                        <span class="text-xs uppercase tracking-widest text-amber-100">Khoa học kì thú</span>
                        <h5 class="text-base leading-tight">Khủng hoảng rác thải</h5>
                    </div>
                    <div class="space-y-2">
                        <h5 class="text-xl font-black text-amber-950">3. Khoa học kì thú - Khủng hoảng rác thải</h5>
                        <p class="text-gray-600 text-base font-bold leading-relaxed text-justify">
                            Giúp học sinh khám phá rác thải được hình thành thế nào, phân tích chi tiết tác hại khôn lường đối với môi trường tự nhiên, đồng thời hướng dẫn phương pháp biến rác thải thành nguồn tài nguyên hữu ích cho nhân loại.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `,
    "practice": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-4xl mx-auto pb-12">
        <!-- 📝 Hoạt động 2: Viết phiếu đọc sách (Tương tác) -->
        <!-- Bài 2 -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-blue-100 space-y-6" id="ex-238-card">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl">2</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Thực hành lập Phiếu đọc sách</h3>
            </div>
            <p class="text-gray-600 font-bold text-lg">Em hãy chọn một trong ba cuốn sách đã đọc ở trên và hoàn thành phiếu đọc sách mẫu dưới đây:</p>

            <div class="bg-blue-50/30 p-6 md:p-8 rounded-3xl border border-blue-100 space-y-6">
                <h4 class="text-xl md:text-2xl font-black text-blue-950 text-center uppercase tracking-wider">🗒️ Phiếu đọc sách</h4>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label class="block text-sm font-bold text-gray-600 mb-1">Tên văn bản/Sách:</label>
                        <select id="card-title-238" onchange="window.selectBook238()" class="w-full p-3 border border-gray-300 rounded-xl font-bold bg-white focus:outline-none focus:border-blue-500 text-sm">
                            <option value="">-- Chọn cuốn sách --</option>
                            <option value="s1">Xử lý rác thải</option>
                            <option value="s2">Kiểm soát rác thải, bảo vệ môi trường</option>
                            <option value="s3">Khoa học kì thú - Khủng hoảng rác thải</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-gray-600 mb-1">Tác giả:</label>
                        <input type="text" id="card-author-238" class="w-full p-3 border border-gray-300 rounded-xl font-bold bg-white focus:outline-none focus:border-blue-500 text-sm" placeholder="Nhập tên tác giả...">
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-gray-600 mb-1">Ngày đọc:</label>
                        <input type="date" id="card-date-238" class="w-full p-3 border border-gray-300 rounded-xl font-bold bg-white focus:outline-none focus:border-blue-500 text-sm">
                    </div>
                </div>

                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-bold text-gray-600 mb-1">Tác hại của rác thải (ghi nhận từ sách):</label>
                        <textarea id="card-harm-238" rows="2" class="w-full p-4 border border-gray-300 rounded-xl font-medium focus:outline-none focus:border-blue-500 text-base" placeholder="Ví dụ: Ô nhiễm nguồn nước, đất đai, làm nguy hại các loài sinh vật biển..."></textarea>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-bold text-gray-600 mb-1">Các cách xử lý và tái chế rác thải:</label>
                        <textarea id="card-process-238" rows="2" class="w-full p-4 border border-gray-300 rounded-xl font-medium focus:outline-none focus:border-blue-500 text-base" placeholder="Ví dụ: Phân loại rác tại nguồn, tái chế nhựa thành đồ dùng, làm phân hữu cơ từ rác rau củ..."></textarea>
                    </div>

                    <div>
                        <label class="block text-sm font-bold text-gray-600 mb-1">Những việc làm thiết thực để kiểm soát rác thải, bảo vệ môi trường:</label>
                        <textarea id="card-action-238" rows="2" class="w-full p-4 border border-gray-300 rounded-xl font-medium focus:outline-none focus:border-blue-500 text-base" placeholder="Ví dụ: Hạn chế túi nilon, sử dụng bình nước cá nhân, tham gia dọn rác ở trường học..."></textarea>
                    </div>
                </div>

                <div class="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div class="flex items-center gap-2">
                        <span class="text-sm font-bold text-gray-600">Mức độ yêu thích:</span>
                        <div class="flex gap-1" id="star-rating-238">
                            <button onclick="window.rateStars238(1)" class="text-2xl md:text-3xl text-gray-300 hover:text-amber-400" id="star-1">☆</button>
                            <button onclick="window.rateStars238(2)" class="text-2xl md:text-3xl text-gray-300 hover:text-amber-400" id="star-2">☆</button>
                            <button onclick="window.rateStars238(3)" class="text-2xl md:text-3xl text-gray-300 hover:text-amber-400" id="star-3">☆</button>
                            <button onclick="window.rateStars238(4)" class="text-2xl md:text-3xl text-gray-300 hover:text-amber-400" id="star-4">☆</button>
                            <button onclick="window.rateStars238(5)" class="text-2xl md:text-3xl text-gray-300 hover:text-amber-400" id="star-5">☆</button>
                        </div>
                    </div>
                    <button onclick="window.submitCard238()" class="px-8 py-3 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 shadow-md">Lưu phiếu đọc sách</button>
                </div>
                <div id="fb-card-238" class="hidden p-4 rounded-xl font-bold text-lg mt-2"></div>
            </div>
        </section>

        <!-- 🎨 Hoạt động 3: Vẽ bức tranh về thành phố ước mơ -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-emerald-100 space-y-6">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-xl">3</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Lên ý tưởng: Thành phố mơ ước của em</h3>
            </div>
            <p class="text-gray-600 font-bold text-lg">Hãy chia sẻ ý tưởng thiết kế hoặc vẽ bức tranh về thành phố thông minh/thành phố xanh trong mơ ước của em:</p>
            
            <div class="bg-emerald-50/30 p-6 rounded-2xl border border-emerald-150 space-y-4">
                <textarea id="txt-dream-city" class="w-full p-4 border border-emerald-250 rounded-xl font-medium focus:outline-none focus:border-emerald-500 text-base" rows="3" placeholder="Ví dụ: Thành phố của em sẽ có những chiếc ô khổng lồ thu năng lượng mặt trời như Mát-xđa, các con phố tràn ngập cây xanh, không có khói bụi ô tô..."></textarea>
                <div class="flex justify-end items-center gap-4"><button onclick="window.submitDream238();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-dream-238" class="hidden p-4 rounded-xl font-bold text-lg mt-2"></div>
            </div>
        </section>
    </div>
    `,
    "quizPool": [
        {
            "question": "Trong ba cuốn sách được giới thiệu, cuốn nào trực tiếp nói về các câu hỏi: 'Điều gì xảy ra với lượng rác thải?', 'Tại sao cần chôn lấp an toàn?'",
            "options": [
                "Kiểm soát rác thải, bảo vệ môi trường",
                "Yêu thương và bảo vệ hành tinh xanh - Xử lý rác thải",
                "Khoa học kì thú - Khủng hoảng rác thải",
                "Thành phố thông minh Mát-xđa"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cuốn sách nào được giới thiệu là cuốn sách dành riêng cho các em nhỏ với các ý tưởng tái chế thú vị?",
            "options": [
                "Kiểm soát rác thải, bảo vệ môi trường",
                "Khoa học kì thú - Khủng hoảng rác thải",
                "Yêu thương và bảo vệ hành tinh xanh - Xử lý rác thải",
                "Báo cáo công việc học sinh"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cuốn sách 'Khoa học kì thú - Khủng hoảng rác thải' giúp các em biết thêm thông tin gì?",
            "options": [
                "Các loài động vật quý hiếm sống ở biển sâu",
                "Cách thức rác thải hình thành, tác hại của chúng và cách biến rác thành tài nguyên",
                "Cách xây dựng các tòa nhà chống động đất ở sa mạc",
                "Lịch sử ra đời của chiếc ô hoa hướng dương"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Mục đích của việc ghi lại các thông tin vào Phiếu đọc sách là gì?",
            "options": [
                "Để bài tập dài hơn và khó làm hơn",
                "Giúp lưu trữ, tổng hợp và dễ dàng trao đổi các thông tin bổ ích đã đọc được",
                "Để nộp lấy điểm thưởng mà không cần đọc sách",
                "Thay thế hoàn toàn cho việc đọc sách thực tế"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Thùng rác 'Rác hữu cơ dễ phân hủy' nên dùng để chứa loại rác nào sau đây?",
            "options": [
                "Vỏ chai nước ngọt, lon bia, giấy báo cũ",
                "Thức ăn thừa, vỏ rau củ quả, lá cây rụng",
                "Bóng đèn hỏng, pin cũ, đồ điện tử",
                "Túi nilon, hộp xốp đựng đồ ăn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Rác thải tái chế là loại rác nào?",
            "options": [
                "Rác có thể thu gom để chế biến lại thành nguyên liệu sản xuất các đồ dùng mới",
                "Rác thải nguy hại bắt buộc phải chôn lấp sâu dưới đất",
                "Rác hữu cơ tự phân hủy thành phân bón cây trồng",
                "Rác không thể tái sử dụng dưới mọi hình thức"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tại sao rác hữu cơ phân hủy sinh học lại rất tốt cho nông nghiệp?",
            "options": [
                "Vì chúng có màu sắc sặc sỡ giúp làm đẹp luống rau",
                "Vì sau khi ủ phân compost, chúng cung cấp dinh dưỡng tự nhiên làm màu mỡ đất trồng",
                "Vì chúng ngăn không cho côn trùng tiếp cận cây cối",
                "Vì chúng làm khô cằn đất nhanh chóng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tác hại nguy hiểm nhất của việc xả túi nilon, rác nhựa xuống đại dương là gì?",
            "options": [
                "Làm nước biển có màu đục ngầu nhanh chóng",
                "Làm các sinh vật biển ăn nhầm, mắc kẹt dẫn đến bị tổn thương hoặc tử vong",
                "Gây cản trở giao thông của các loại tàu thuyền lớn",
                "Khiến sóng biển đập mạnh vào bờ hơn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Hành động nào sau đây là giải pháp thiết thực để giảm thiểu lượng rác nhựa thải ra môi trường?",
            "options": [
                "Sử dụng nhiều hộp xốp, cốc nhựa dùng một lần cho tiện lợi",
                "Mang theo bình nước cá nhân, túi vải khi đi mua sắm và tái sử dụng đồ nhựa cũ",
                "Đốt toàn bộ các loại túi nilon ngay tại vườn nhà",
                "Vứt chai nhựa xuống sông hồ để nước cuốn đi nơi khác"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Chúng ta có thể biến rác thải thành nguồn tài nguyên hữu ích bằng cách nào?",
            "options": [
                "Chôn lấp tất cả mọi loại rác cùng một chỗ",
                "Phân loại rác từ nguồn để tái chế nhựa, giấy, kim loại và ủ phân hữu cơ",
                "Không sử dụng bất cứ thứ gì trong sinh hoạt hàng ngày",
                "Vứt rác ra nơi hoang vắng không có người sinh sống"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ nào sau đây viết đúng chính tả tiếng Việt?",
            "options": [
                "Tái chế",
                "Tái chếe",
                "Rác tải",
                "Môi trườg"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Mức độ yêu thích '☆' trong phiếu đọc sách thể hiện điều gì?",
            "options": [
                "Điểm số bài kiểm tra của học sinh",
                "Độ dài của cuốn sách đã đọc",
                "Sự đánh giá, mức độ hài lòng hoặc yêu thích của học sinh đối với cuốn sách",
                "Thời gian học sinh đã dành ra để đọc sách"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Hành động vẽ tranh về thành phố ước mơ giúp học sinh điều gì?",
            "options": [
                "Trốn tránh việc làm bài tập đọc sách",
                "Thể hiện ước mơ, ý tưởng sáng tạo về không gian sống xanh và truyền đi thông điệp bảo vệ môi trường",
                "Tìm hiểu về cách hoạt động của các loại xe chở rác",
                "Học cách vẽ bản đồ địa lý các nước thế giới"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi đọc sách thông tin khoa học, em cần chú ý điều gì?",
            "options": [
                "Chỉ cần đọc lướt qua xem tranh vẽ",
                "Chú ý các số liệu, giải thích khoa học và ứng dụng thực tiễn của thông tin",
                "Đọc thuộc lòng từng câu chữ trong cuốn sách",
                "Đọc từ trang cuối cùng ngược lên trang đầu tiên"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Thông điệp chung của ba cuốn sách về rác thải được giới thiệu là gì?",
            "options": [
                "Rác thải không có ảnh hưởng gì tới đời sống con người",
                "Chúng ta cần có trách nhiệm kiểm soát rác thải, nâng cao ý thức tái chế để bảo vệ môi trường",
                "Sa mạc là nơi lý tưởng nhất để đổ tất cả rác thải",
                "Mỗi người nên tự sản xuất ra thật nhiều rác nilon"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// Đăng ký tương tác
window.checkSort238 = function() {
    const s1 = document.getElementById('sel-238-sort-1').value;
    const s2 = document.getElementById('sel-238-sort-2').value;
    const s3 = document.getElementById('sel-238-sort-3').value;
    const fb = document.getElementById('fb-sort-238');
    fb.classList.remove('hidden');

    if (!s1 || !s2 || !s3) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-850 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em hãy lựa chọn phân loại đầy đủ cho cả 3 nhóm rác thải nhé!";
        return;
    }

    if (s1 === 'huu_co' && s2 === 'tai_che' && s3 === 'vo_co') {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
        fb.innerHTML = "🌟 Xuất sắc! Em đã phân loại hoàn toàn chính xác. Hãy nhớ giữ thói quen phân loại rác này ngoài đời sống thực tế nữa nhé!";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
        if (typeof window.submitMathLesson === 'function') {
            window.submitMathLesson("DMR Tiết 238: Phân loại rác khởi động", 100, "ex-238-sort", 1, 1, 1);
        }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-800 border border-red-200 mt-4";
        fb.innerHTML = "❌ Chưa chính xác rồi. Hãy nhớ: Thức ăn thừa dễ phân hủy là hữu cơ; Chai nhựa, vỏ lon có thể tái sinh là rác tái chế; Khẩu trang đã sử dụng bỏ vào rác vô cơ khác.";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

window.resetSort238 = function() {
    document.getElementById('sel-238-sort-1').value = "";
    document.getElementById('sel-238-sort-2').value = "";
    document.getElementById('sel-238-sort-3').value = "";
    const fb = document.getElementById('fb-sort-238');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};

// Phiếu đọc sách tương tác
let rating238 = 0;
window.rateStars238 = function(stars) {
    rating238 = stars;
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById('star-' + i);
        if (i <= stars) {
            star.innerHTML = "★";
            star.className = "text-3xl text-amber-400";
        } else {
            star.innerHTML = "☆";
            star.className = "text-3xl text-gray-300 hover:text-amber-400";
        }
    }
};

window.selectBook238 = function() {
    const book = document.getElementById('card-title-238').value;
    const authorInput = document.getElementById('card-author-238');
    const harm = document.getElementById('card-harm-238');
    const process = document.getElementById('card-process-238');
    
    if (book === 's1') {
        authorInput.value = "NXB Kim Đồng";
        harm.value = "Ô nhiễm không khí khi đốt rác, làm bẩn nguồn nước ngầm, rác thải chôn lấp không an toàn gây hại sức khỏe.";
        process.value = "Tái chế rác có thể tái sử dụng, phân loại rác thải tại nguồn và chôn lấp rác hữu cơ/rác vô cơ đúng quy trình.";
    } else if (book === 's2') {
        authorInput.value = "Tổng hợp";
        harm.value = "Lượng rác khổng lồ tràn ngập thành phố và đại dương, gây hại sinh vật biển và làm suy thoái môi trường sống.";
        process.value = "Thu gom và phân loại rác, tái chế rác nhựa và kim loại, chung tay thực hiện các ý tưởng sống xanh.";
    } else if (book === 's3') {
        authorInput.value = "Lâm Anh";
        harm.value = "Gây khủng hoảng rác thải toàn cầu, làm mất cân bằng hệ sinh thái và gây ô nhiễm đất đai nghiêm trọng.";
        process.value = "Biến rác thải thành nguồn tài nguyên hữu ích bằng cách xử lý công nghệ cao và ủ phân hữu cơ bón ruộng.";
    } else {
        authorInput.value = "";
        harm.value = "";
        process.value = "";
    }
};

window.submitCard238 = function() {
    const book = document.getElementById('card-title-238').value;
    const author = document.getElementById('card-author-238').value.trim();
    const date = document.getElementById('card-date-238').value;
    const harm = document.getElementById('card-harm-238').value.trim();
    const process = document.getElementById('card-process-238').value.trim();
    const action = document.getElementById('card-action-238').value.trim();
    const fb = document.getElementById('fb-card-238');
    fb.classList.remove('hidden');

    if (!book || !author || !date || harm.length < 5 || process.length < 5 || action.length < 5) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-850 border border-orange-200 mt-2";
        fb.innerHTML = "⚠️ Em hãy điền đầy đủ tất cả thông tin và đánh giá mức độ yêu thích trên Phiếu đọc sách nhé!";
        return;
    }

    fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-2";
    fb.innerHTML = `🌟 Tuyệt vời! Phiếu đọc sách đã được lưu thành công. Em đã ghi nhớ được những tác hại của rác thải và các biện pháp bảo vệ hành tinh xanh rất đáng khen ngợi!`;
    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    if (typeof window.submitMathLesson === 'function') {
        window.submitMathLesson("DMR Tiết 238: Lưu phiếu đọc sách", 100, "ex-238-card", 1, 1, 1);
    }
};

window.submitDream238 = function() {
    const text = document.getElementById('txt-dream-city').value.trim();
    const fb = document.getElementById('fb-dream-238');
    fb.classList.remove('hidden');

    if (text.length < 10) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-850 border border-orange-200 mt-2";
        fb.innerHTML = "⚠️ Em hãy chia sẻ ý tưởng chi tiết hơn về thành phố mơ ước của mình nhé!";
        return;
    }

    fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-2";
    fb.innerHTML = "🌟 Ý tưởng của em thật tuyệt vời và tràn đầy tinh thần bảo vệ môi trường! Hãy vẽ bức tranh này và giới thiệu cho người thân của mình nghe nhé.";
    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    if (typeof window.submitMathLesson === 'function') {
        window.submitMathLesson("DMR Tiết 238: Ý tưởng thành phố xanh", 100, "ex-238-dream", 1, 1, 1);
    }
};

// Đăng ký bài học toàn cục
window.lesson238 = lesson238;
