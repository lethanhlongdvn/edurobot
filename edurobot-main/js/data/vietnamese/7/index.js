export const lesson7 = {
    "topic": "Tiếng Việt 5",
    "week": "1",
    "period": "7",
    "title": "ĐỌC MỞ RỘNG: ĐỌC CÂU CHUYỆN VỀ THẾ GIỚI TUỔI THƠ",
    "desc": "Bài học hướng dẫn học sinh cách tìm đọc các tác phẩm văn học viết về thế giới tuổi thơ, thực hành ghi chép thông tin vào phiếu đọc sách và tự tin trao đổi cảm nhận với bạn bè.",
    "subject": "Đọc mở rộng",
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
        <ul class="space-y-3 text-sky-800 font-bold text-lg md:text-xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Biết tìm đọc câu chuyện về thế giới tuổi thơ theo các chủ đề gợi ý trong sách giáo khoa.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Thực hành điền đầy đủ và sinh động các thông tin vào Phiếu đọc sách cá nhân.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Tự tin chia sẻ, trao đổi với bạn bè về nội dung câu chuyện và những bài học rút ra.
            </li>
        </ul>
    </div>

    <!-- 📖 Hướng dẫn chọn sách & Đọc truyện mẫu tại chỗ -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-8">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">1</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">1. Đọc câu chuyện về thế giới tuổi thơ</h3>
            </div>

            <!-- Khung sơ đồ gợi ý SGK -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-emerald-50/70 p-6 rounded-[28px] border border-emerald-100 shadow-sm">
                    <h4 class="font-black text-emerald-800 text-lg md:text-xl mb-3 flex items-center gap-2">
                        <span class="text-xl">🔍</span> Quan tâm, khám phá
                    </h4>
                    <p class="text-emerald-800 text-base md:text-lg leading-relaxed">
                        Những điều trẻ em đặc biệt quan tâm, yêu thích và muốn tự mình khám phá.
                    </p>
                    <p class="text-xs text-emerald-800 mt-4 font-bold italic">
                        Ví dụ: Nhóc Ni-cô-lai: những chuyện chưa kể (Gô-xi-nhy & Xăng-pê)
                    </p>
                </div>

                <div class="bg-sky-50/70 p-6 rounded-[28px] border border-sky-100 shadow-sm">
                    <h4 class="font-black text-sky-800 text-lg md:text-xl mb-3 flex items-center gap-2">
                        <span class="text-xl">💡</span> Suy nghĩ, tưởng tượng
                    </h4>
                    <p class="text-sky-800 text-base md:text-lg leading-relaxed">
                        Cách suy nghĩ, cách hiểu, cách suy luận và thế giới tưởng tượng của trẻ em.
                    </p>
                    <p class="text-xs text-sky-800 mt-4 font-bold italic">
                        Ví dụ: 10 ngày ngắm thế giới của Mắt Nhắm Tịt (Nhiều tác giả)
                    </p>
                </div>

                <div class="bg-amber-50/70 p-6 rounded-[28px] border border-amber-100 shadow-sm">
                    <h4 class="font-black text-amber-600 text-lg md:text-xl mb-3 flex items-center gap-2">
                        <span class="text-xl">❤️</span> Tình cảm, cảm xúc
                    </h4>
                    <p class="text-amber-600 text-base md:text-lg leading-relaxed">
                        Tình cảm, cảm xúc của trẻ em đối với các sự vật, hiện tượng trong cuộc sống thường nhật.
                    </p>
                    <p class="text-xs text-amber-600 mt-4 font-bold italic">
                        Ví dụ: Miền quê thơ ấu (Nguyễn Trọng Tạo)
                    </p>
                </div>
            </div>

            <!-- Giao diện đọc truyện mẫu nhanh tại chỗ -->
            <div class="bg-sky-50/20 rounded-[32px] p-6 md:p-8 border border-sky-100/50 space-y-6">
                <h4 class="text-xl md:text-2xl font-black text-sky-800 flex items-center gap-2">
                    <span>📚</span> Đọc nhanh truyện mẫu tại chỗ
                </h4>
                <p class="text-base text-sky-800 font-bold italic">
                    (Nếu chưa chuẩn bị sẵn truyện, em có thể chọn đọc một trong hai trích đoạn câu chuyện tuổi thơ dưới đây để làm phiếu đọc sách)
                </p>
                
                <div class="flex gap-4">
                    <button onclick="switchStory(1)" id="btn-story-1" class="px-6 py-3 bg-sky-600 text-white font-black rounded-2xl shadow-md hover:bg-sky-600 active:scale-95 transition-all text-base">Trích đoạn 1: Nhóc Ni-cô-lai</button>
                    <button onclick="switchStory(2)" id="btn-story-2" class="px-6 py-3 bg-white border-2 border-sky-100 text-sky-900 font-black rounded-2xl shadow-sm hover:bg-sky-50 active:scale-95 transition-all text-base">Trích đoạn 2: Miền quê thơ ấu</button>
                </div>

                <!-- Nội dung truyện 1 -->
                <div id="story-content-1" class="serif-font text-gray-800 text-lg md:text-2xl leading-relaxed text-justify space-y-4 bg-white p-6 rounded-2xl border border-sky-100 shadow-inner">
                    <div class="flex justify-between items-center mb-4 border-b border-sky-100 pb-3">
                        <span class="text-sky-900 font-black text-xl flex items-center gap-2">
                            <span>📖</span> Nhóc Ni-cô-lai: những chuyện chưa kể
                        </span>
                        <button onclick="playSegmentAudio('assets/audio/tiengviet/7/tiet7_nhoc_nicolai.mp3')" class="p-2 bg-sky-600 hover:bg-sky-600 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                            </svg>
                        </button>
                    </div>
                    <p class="indent-10">Hôm nay, thằng A-nan rủ chúng tôi ra bãi đất trống ở góc phố chơi đá bóng. Nó có một quả bóng da mới toanh, màu đỏ rực rỡ, nhìn thích lắm. Tôi thì được phân công làm thủ môn, còn thằng Rê-nê và thằng An-ce làm tiền đạo.</p>
                    <p class="indent-10">Trận đấu diễn ra vô cùng kịch tính. Bất ngờ, một cú sút cực mạnh của thằng An-ce khiến quả bóng bay thẳng lên ngọn cây đu đằng xa. Cả đám đứng ngớ người nhìn nhau lo lắng, vì cây cao quá không leo lên được. Nhưng rồi, bằng tinh thần đồng đội và sự sáng tạo của tuổi thơ, chúng tôi đã ghép những cành cây khô thành một chiếc sào dài để khều bóng xuống. Khi quả bóng đỏ rơi xuống, cả đám cùng nhảy lên reo hò vui mừng. Buổi chiều hôm ấy thật là một chuyến phiêu lưu tuyệt vời của tình bạn!</p>
                </div>

                <!-- Nội dung truyện 2 (Ẩn mặc định) -->
                <div id="story-content-2" class="hidden serif-font text-gray-800 text-lg md:text-2xl leading-relaxed text-justify space-y-4 bg-white p-6 rounded-2xl border border-sky-100 shadow-inner">
                    <div class="flex justify-between items-center mb-4 border-b border-sky-100 pb-3">
                        <span class="text-sky-900 font-black text-xl flex items-center gap-2">
                            <span>📖</span> Miền quê thơ ấu
                        </span>
                        <button onclick="playSegmentAudio('assets/audio/tiengviet/7/tiet7_mien_que_tho_au.mp3')" class="p-2 bg-sky-600 hover:bg-sky-600 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                            </svg>
                        </button>
                    </div>
                    <p class="indent-10">Những ngày hè ở quê nội luôn tràn ngập tiếng cười và những trò chơi dân dã thú vị. Mỗi chiều mát, tôi và các bạn nhỏ trong xóm lại tụ tập dưới gốc đa đầu làng để cùng nhau chơi thả diều. Những cánh diều làm bằng giấy báo cũ bôi hồ dán cẩn thận từ những thanh tre uốn cong vút bay lên trời lộng gió.</p>
                    <p class="indent-10">Khi nhìn những cánh diều bay vút lên cao, lòng tôi lại ngập tràn cảm xúc tự do và mơ ước bay xa. Diều của cu Tí bay cao nhất, lấp lánh trong ánh hoàng hôn vàng rực. Chúng tôi nằm dài trên thảm cỏ thơm mùi rạ mới, ngắm nhìn bầu trời bao la. Những ký ức ngọt ngào ấy cứ đọng mãi trong tâm hồn tôi như một điểm tựa bình yên của những năm tháng tuổi thơ tươi đẹp.</p>
                </div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- PHẦN 1: PHIẾU ĐỌC SÁCH TƯƠNG TÁC (CÂU 2 SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-8">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">2</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">2. Viết phiếu đọc sách theo mẫu</h3>
            </div>

            <!-- Form Phiếu đọc sách thiết kế Premium -->
            <div class="bg-white p-6 md:p-10 rounded-[36px] border-4 border-double border-sky-100 shadow-lg space-y-6">
                <p class="text-center font-black text-2xl md:text-4xl text-sky-800 tracking-wider mb-8">📖 PHIẾU ĐỌC SÁCH 📖</p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="flex flex-col gap-2">
                        <label class="font-black text-sky-800 text-base md:text-lg">Tên câu chuyện: <span class="text-red-800">*</span></label>
                        <input type="text" id="pds-ten" placeholder="Nhập tên câu chuyện..." class="p-3 border-2 border-sky-100 rounded-xl outline-none focus:border-sky-500 font-bold bg-sky-50/20 text-lg">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="font-black text-sky-800 text-base md:text-lg">Tác giả: <span class="text-red-800">*</span></label>
                        <input type="text" id="pds-tac-gia" placeholder="Nhập tên tác giả..." class="p-3 border-2 border-sky-100 rounded-xl outline-none focus:border-sky-500 font-bold bg-sky-50/20 text-lg">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="font-black text-sky-800 text-base md:text-lg">Ngày đọc: <span class="text-red-800">*</span></label>
                        <input type="date" id="pds-ngay" class="p-3 border-2 border-sky-100 rounded-xl outline-none focus:border-sky-500 font-bold bg-sky-50/20 text-lg">
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex flex-col gap-2">
                        <label class="font-black text-sky-800 text-base md:text-lg">Nội dung chính của câu chuyện: <span class="text-red-800">*</span></label>
                        <textarea id="pds-noi-dung" rows="3" placeholder="Nhập tóm tắt nội dung chính ngắn gọn..." class="p-4 border-2 border-sky-100 rounded-xl outline-none focus:border-sky-500 font-bold bg-sky-50/20 text-lg"></textarea>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="font-black text-sky-800 text-base md:text-lg">Nhân vật em thích nhất: <span class="text-red-800">*</span></label>
                        <textarea id="pds-nhan-vat" rows="3" placeholder="Nhập tên nhân vật và lý do thích..." class="p-4 border-2 border-sky-100 rounded-xl outline-none focus:border-sky-500 font-bold bg-sky-50/20 text-lg"></textarea>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                    <div class="flex flex-col gap-2">
                        <label class="font-black text-sky-800 text-base md:text-lg">Chi tiết thú vị hoặc sự việc đáng nhớ: <span class="text-red-800">*</span></label>
                        <textarea id="pds-chi-tiet" rows="3" placeholder="Nhập chi tiết thú vị làm em nhớ nhất..." class="p-4 border-2 border-sky-100 rounded-xl outline-none focus:border-sky-500 font-bold bg-sky-50/20 text-lg"></textarea>
                    </div>
                    
                    <!-- Widget đánh giá 5 sao -->
                    <div class="flex flex-col gap-2 p-4 bg-sky-50/50 rounded-2xl border border-sky-100/50">
                        <label class="font-black text-sky-800 text-base md:text-lg">Mức độ yêu thích của em:</label>
                        <div class="flex gap-3 text-3xl md:text-4xl justify-center py-2 select-none">
                            <span onclick="setRating(1)" id="star-1" class="cursor-pointer text-gray-800 transition-all hover:scale-105">★</span>
                            <span onclick="setRating(2)" id="star-2" class="cursor-pointer text-gray-800 transition-all hover:scale-105">★</span>
                            <span onclick="setRating(3)" id="star-3" class="cursor-pointer text-gray-800 transition-all hover:scale-105">★</span>
                            <span onclick="setRating(4)" id="star-4" class="cursor-pointer text-gray-800 transition-all hover:scale-105">★</span>
                            <span onclick="setRating(5)" id="star-5" class="cursor-pointer text-gray-800 transition-all hover:scale-105">★</span>
                        </div>
                    </div>
                </div>

                <div class="flex flex-wrap items-center gap-4 pt-4 border-t border-sky-100">
                    <button onclick="checkPdsWithAI()" class="px-8 py-3.5 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                        <span>CHẤM BÀI VỚI THẦY E</span>
                    </button>
                    <button onclick="resetPds()" class="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition-all text-base">ĐẶT LẠI PHIẾU</button>
                    <button onclick="submitPdsGlobal()" class="px-8 py-3.5 bg-sky-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-sky-600 transition-all ml-auto flex items-center gap-2">
                        <span>NỘP PHIẾU ĐỌC SÁCH</span>
                    </button>
                </div>
                
                <div id="fb-vn7-pds" class="hidden mt-6 p-6 bg-amber-500 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500">
                    <!-- AI Feedback -->
                </div>
            </div>
        </div>
    </section>

    <!-- PHẦN 2: TRAO ĐỔI VỚI BẠN (CÂU 3 SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">3</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">3. Trao đổi với bạn về câu chuyện đã đọc</h3>
            </div>

            <!-- Gợi ý định hướng trao đổi -->
            <div class="bg-sky-50/60 p-6 rounded-3xl border border-sky-100 text-sky-800 font-bold space-y-3 text-base md:text-xl">
                <p class="text-sky-900 font-black mb-2 flex items-center gap-2"><span>💬</span> Gợi ý thảo luận:</p>
                <ul class="list-disc ml-6 space-y-2">
                    <li>Kể tóm tắt câu chuyện và giới thiệu về nhân vật chính cho bạn bè nghe.</li>
                    <li>Nêu điều thú vị nhất về thế giới tuổi thơ được thể hiện trong tác phẩm.</li>
                    <li>Chia sẻ những điều em học tập được từ cách kể chuyện hấp dẫn của tác giả.</li>
                </ul>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-sky-100 shadow-inner space-y-4">
                <h4 class="text-lg md:text-xl font-bold text-gray-800">
                    Ghi lại ngắn gọn nội dung em muốn chia sẻ với các bạn trong lớp (từ 2 đến 4 câu):
                </h4>
                <textarea id="ans-vn7-trao-doi" rows="3" placeholder="Ví dụ: Em muốn chia sẻ với các bạn truyện Nhóc Ni-cô-lai. Điều thú vị nhất là tinh thần đoàn kết giúp cả nhóm khều được bóng da rơi trên cây cao..." class="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-sky-500 outline-none font-bold bg-sky-50/10 text-lg"></textarea>
                
                <div class="flex justify-end gap-3 pt-2">
                    <button onclick="resetTraoDoi()" class="px-6 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-all text-base">LÀM LẠI</button>
                    <button onclick="submitTraoDoi()" class="px-8 py-3 bg-gray-800 text-white font-black text-lg rounded-2xl shadow-md hover:bg-black transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-gray-900 font-black text-xs shadow-sm">E</div>
                        <span>NỘP BÀI THẢO LUẬN</span>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TOÀN BỘ -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn7Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Mục tiêu chính của hoạt động Đọc mở rộng là gì?",
            "options": [
                "Chỉ đọc các văn bản bắt buộc trong sách giáo khoa.",
                "Tìm đọc thêm các tác phẩm ngoài sách giáo khoa theo chủ đề để tích lũy kiến thức.",
                "Học thuộc lòng toàn bộ bài đọc trên lớp.",
                "Không cần ghi chép gì sau khi đọc."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Chủ đề đọc mở rộng của Tiết 7 trong tuần học thứ nhất là gì?",
            "options": [
                "Câu chuyện về tình yêu quê hương đất nước",
                "Câu chuyện về thế giới tuổi thơ",
                "Câu chuyện về khoa học viễn tưởng",
                "Truyện ngụ ngôn về muông thú"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Thông tin nào sau đây KHÔNG cần ghi chép vào Phiếu đọc sách theo mẫu trang 17?",
            "options": [
                "Tên câu chuyện, tác giả, ngày đọc",
                "Số điện thoại của người bán sách",
                "Nhân vật em thích nhất",
                "Chi tiết thú vị hoặc sự việc đáng nhớ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cuốn sách nào được gợi ý trong sơ đồ nói về cách suy nghĩ, tưởng tượng của trẻ em?",
            "options": [
                "Nhóc Ni-cô-lai: những chuyện chưa kể",
                "10 ngày ngắm thế giới của Mắt Nhắm Tịt",
                "Miền quê thơ ấu",
                "Dế Mèn phiêu lưu ký"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cuốn sách 'Miền quê thơ ấu' của tác giả Nguyễn Trọng Tạo thể hiện khía cạnh nào của trẻ em?",
            "options": [
                "Sở thích khám phá khoa học",
                "Tình cảm, cảm xúc của trẻ em đối với các sự vật, hiện tượng trong cuộc sống",
                "Trí tưởng tượng phong phú bay bổng",
                "Kỹ năng lập luận logic phức tạp"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Học sinh có thể thực hiện hoạt động thảo luận nào về câu chuyện đã đọc?",
            "options": [
                "Kể tóm tắt truyện và giới thiệu nhân vật chính.",
                "Nêu điều thú vị về thế giới tuổi thơ được thể hiện trong truyện.",
                "Chia sẻ những điều em học tập được về cách kể chuyện của tác giả.",
                "Tất cả các đáp án trên đều đúng."
            ],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Trong truyện mẫu 'Nhóc Ni-cô-lai', các bạn nhỏ gặp khó khăn gì trong trận đá bóng?",
            "options": [
                "Bóng bị hỏng rách da",
                "Quả bóng đỏ bay thẳng lên ngọn cây đu cao không leo được",
                "Có chú chó chạy đến ngoạm quả bóng đi mất",
                "Trời mưa to không chơi được tiếp"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Các bạn trong truyện Nhóc Ni-cô-lai khều quả bóng xuống bằng cách nào?",
            "options": [
                "Leo trèo thẳng lên cây đu.",
                "Dùng sỏi ném rụng quả bóng xuống.",
                "Ghép những cành cây khô thành một chiếc sào dài để khều bóng xuống.",
                "Nhờ người lớn trèo hộ."
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Trò chơi mùa hè dân dã nào được nhắc đến trong trích đoạn 'Miền quê thơ ấu'?",
            "options": [
                "Trò chơi thả diều dưới gốc đa đầu làng",
                "Trò chơi trốn tìm quanh giếng nước",
                "Trò chơi ô ăn quan trên thềm nhà",
                "Trò chơi bắn bi dưới tán cây"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Diều của bạn nhỏ nào trong truyện 'Miền quê thơ ấu' bay cao nhất?",
            "options": [
                "Của nhân vật 'tôi'",
                "Của cu Tí",
                "Của cu Tèo",
                "Của bé Na"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi ghi chép 'Mức độ yêu thích' trong phiếu đọc sách, em thể hiện bằng biểu tượng nào?",
            "options": [
                "Hình trái tim",
                "Hình ngôi sao (đánh giá từ 1 đến 5 sao)",
                "Hình bông hoa điểm 10",
                "Hình mặt cười"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Sau khi đọc xong ở nhà, em nên làm gì theo gợi ý phần Vận dụng ở cuối trang 17?",
            "options": [
                "Cất sách đi và không nói gì với ai.",
                "Kể cho người thân nghe câu chuyện về thế giới tuổi thơ đã đọc hoặc nghe.",
                "Viết tiếp một câu chuyện hoàn toàn khác.",
                "Bỏ phiếu đọc sách đi."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Ai là tác giả của tác phẩm gợi ý 'Nhóc Ni-cô-lai: những chuyện chưa kể'?",
            "options": [
                "Nguyễn Trọng Tạo",
                "Gô-xi-nhy và Xăng-pê",
                "Tô Hoài",
                "Nguyễn Nhật Ánh"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tác phẩm 'Miền quê thơ ấu' do ai sáng tác?",
            "options": [
                "Gô-xi-nhy",
                "Nguyễn Trọng Tạo",
                "Nguyễn Thị Kim Hòa",
                "Lê Anh Vinh"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Hoạt động Đọc mở rộng thường diễn ra vào tuần học nào?",
            "options": [
                "Diễn ra định kỳ ở tất cả các tuần học Tiếng Việt.",
                "Chỉ diễn ra ở cuối kỳ thi học kỳ.",
                "Không bắt buộc trong PPCT.",
                "Chỉ diễn ra vào mùa hè."
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- LOGIC CHUYỂN ĐỔI TRUYỆN MẪU ---
window.switchStory = function(id) {
    const s1 = document.getElementById('story-content-1');
    const s2 = document.getElementById('story-content-2');
    const btn1 = document.getElementById('btn-story-1');
    const btn2 = document.getElementById('btn-story-2');

    if (id === 1) {
        s1.classList.remove('hidden');
        s2.classList.add('hidden');
        btn1.className = "px-6 py-3 bg-sky-600 text-white font-black rounded-2xl shadow-md hover:bg-sky-600 active:scale-95 transition-all text-base";
        btn2.className = "px-6 py-3 bg-white border-2 border-sky-100 text-sky-900 font-black rounded-2xl shadow-sm hover:bg-sky-50 active:scale-95 transition-all text-base";
        
        // Auto fill demo data for PDS
        document.getElementById('pds-ten').value = "Nhóc Ni-cô-lai: những chuyện chưa kể";
        document.getElementById('pds-tac-gia').value = "Gô-xi-nhy và Xăng-pê";
    } else {
        s1.classList.add('hidden');
        s2.classList.remove('hidden');
        btn1.className = "px-6 py-3 bg-white border-2 border-sky-100 text-sky-900 font-black rounded-2xl shadow-sm hover:bg-sky-50 active:scale-95 transition-all text-base";
        btn2.className = "px-6 py-3 bg-sky-600 text-white font-black rounded-2xl shadow-md hover:bg-sky-600 active:scale-95 transition-all text-base";
        
        // Auto fill demo data for PDS
        document.getElementById('pds-ten').value = "Miền quê thơ ấu";
        document.getElementById('pds-tac-gia').value = "Nguyễn Trọng Tạo";
    }
};

// --- LOGIC ĐÁNH GIÁ SAO ---
let currentRating = 0;
window.setRating = function(stars) {
    currentRating = stars;
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(`star-${i}`);
        if (i <= stars) {
            star.className = "cursor-pointer text-amber-600 transition-all scale-105";
        } else {
            star.className = "cursor-pointer text-gray-800 transition-all hover:scale-105";
        }
    }
};

window.resetPds = function() {
    document.getElementById('pds-ten').value = '';
    document.getElementById('pds-tac-gia').value = '';
    document.getElementById('pds-ngay').value = '';
    document.getElementById('pds-noi-dung').value = '';
    document.getElementById('pds-nhan-vat').value = '';
    document.getElementById('pds-chi-tiet').value = '';
    window.setRating(0);
    const fb = document.getElementById('fb-vn7-pds');
    if (fb) fb.classList.add('hidden');
};

window.checkPdsWithAI = function() {
    const ten = document.getElementById('pds-ten').value.trim();
    const tacGia = document.getElementById('pds-tac-gia').value.trim();
    const ngay = document.getElementById('pds-ngay').value.trim();
    const noiDung = document.getElementById('pds-noi-dung').value.trim();
    const nhanVat = document.getElementById('pds-nhan-vat').value.trim();
    const chiTiet = document.getElementById('pds-chi-tiet').value.trim();

    const fb = document.getElementById('fb-vn7-pds');
    if (!fb) return;

    if (!ten || !tacGia || !ngay || !noiDung || !nhanVat || !chiTiet) {
        fb.classList.remove('hidden');
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-600">AI Thầy E nhắc nhở:</h5>
                    <p class="text-lg">Em vui lòng điền đầy đủ tất cả các trường có đánh dấu sao đỏ (*) trên Phiếu đọc sách trước khi gửi chấm bài nhé!</p>
                </div>
            </div>
        `;
        return;
    }

    if (noiDung.length < 15 || nhanVat.length < 15) {
        fb.classList.remove('hidden');
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-600">AI Thầy E nhận xét:</h5>
                    <p class="text-lg">Phần tóm tắt nội dung chính hoặc mô tả nhân vật của em hơi ngắn. Em hãy viết cụ thể và chi tiết hơn một chút để phiếu đọc sách của mình thật chất lượng nhé!</p>
                </div>
            </div>
        `;
        return;
    }

    fb.classList.remove('hidden');
    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-amber-600">AI Thầy E nhận xét & Chấm điểm:</h5>
                <p class="text-lg mb-3">Tuyệt vời! Em đã hoàn thành một Phiếu đọc sách rất chi tiết cho tác phẩm "${ten}". Cách tóm tắt cốt truyện ngắn gọn, bộc lộ tình cảm với nhân vật và chi tiết yêu thích cực kỳ ấn tượng!</p>
                <div class="flex items-center gap-3">
                    <span class="text-xl md:text-2xl font-black bg-amber-500 px-3 py-1 rounded-lg">Đạt 17%</span>
                    <span class="text-sm opacity-80">(Xếp loại: Hoàn hảo - Đã ghi nhận Phiếu đọc sách)</span>
                </div>
            </div>
        </div>
    `;
};

window.submitPdsGlobal = function() {
    const ten = document.getElementById('pds-ten').value.trim();
    if (!ten) {
        window.showMathFeedback("Thiếu thông tin", "⚠️", "Em vui lòng nhập tên câu chuyện trước khi nộp phiếu đọc sách nhé!");
        return;
    }
    console.log("Nộp phiếu đọc sách với đánh giá sao:", currentRating);
    window.showMathFeedback("Nộp phiếu đọc sách thành công", "🌟", `Phiếu đọc sách của câu chuyện "${ten}" đã được nộp thành công!`);
};

// --- LOGIC TRAO ĐỔI ---
window.resetTraoDoi = function() {
    document.getElementById('ans-vn7-trao-doi').value = '';
};

window.submitTraoDoi = function() {
    const text = document.getElementById('ans-vn7-trao-doi').value.trim();
    if (!text) {
        window.showMathFeedback("Bài thảo luận trống", "⚠️", "Em hãy nhập nội dung thảo luận trước khi nộp bài nhé!");
        return;
    }
    window.showMathFeedback("Nộp bài thảo luận thành công", "🌟", "Nội dung thảo luận của em đã được lưu lại để chia sẻ với cả lớp!");
};

// --- HOÀN THÀNH TOÀN BỘ TIẾT HỌC ---
window.submitVn7Global = function() {
    window.showMathFeedback("Hoàn thành Tiết học", "🎉", "Chúc mừng em đã hoàn thành xuất sắc toàn bộ nội dung của Tiết 7: Đọc mở rộng!");
};
