export const lesson35 = {
    "topic": "Tiếng Việt 5",
    "week": "5",
    "period": "35",
    "title": "ĐỌC MỞ RỘNG: ĐỌC SÁCH BÁO KHOA HỌC VỀ ĐỘNG VẬT HOANG DÃ",
    "desc": "Bài học giúp học sinh thực hành tìm đọc các tài liệu khoa học về thế giới động vật hoang dã, ghi chép thông tin vào Phiếu đọc sách theo quy chuẩn và tìm hiểu, thảo luận các giải pháp bảo vệ động vật quý hiếm trong Sách đỏ Việt Nam.",
    "subject": "Đọc mở rộng",
    "theme": "Măng non",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-sky-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Biết tìm đọc và chọn lọc sách báo khoa học viết về động vật hoang dã có ích.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Hoàn thành chính xác và đầy đủ các thông tin trong Phiếu đọc sách theo mẫu quy định.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Ý thức bảo tồn các loài động vật hoang dã quý hiếm, đặc biệt là các loài có tên trong Sách đỏ Việt Nam.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Đoán tên thú quý</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy xem đặc điểm gợi ý để đoán tên loài động vật quý hiếm trong Sách đỏ Việt Nam dưới đây:</p>
        
        <div class="p-6 bg-sky-50/30 rounded-3xl border border-sky-100 space-y-4 font-bold text-sky-800 text-lg md:text-xl">
            <p>❓ Loài thú móng guốc cực kỳ quý hiếm, được mệnh danh là “Kỳ lân châu Á”, phát hiện lần đầu tiên trên thế giới tại Vũ Quang (Việt Nam) vào năm 1935 là loài nào?</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button onclick="checkVn35Kd(this, false)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 transition-all active:scale-95 text-base md:text-lg">A. Hổ Đông Dương</button>
                <button onclick="checkVn35Kd(this, true)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 transition-all active:scale-95 text-base md:text-lg">B. Sao la</button>
                <button onclick="checkVn35Kd(this, false)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 transition-all active:scale-95 text-base md:text-lg">C. Voọc mũi hếch</button>
            </div>
            <div id="fb-vn35-kd" class="hidden p-4 rounded-2xl text-lg font-black text-center transition-all duration-335"></div>
        </div>
    </div>

    <!-- 📖 ĐỌC TRÍCH ĐOẠN SÁCH MẪU -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl space-y-8">
        <div class="flex items-center gap-4 mb-2 border-b border-sky-100 pb-4">
            <span class="text-sky-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                <span>📖</span> 1. Trích đoạn sách báo khoa học về động vật hoang dã
            </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-bold">
            <!-- Thẻ 1 -->
            <div class="p-6 bg-sky-50/30 rounded-3xl border border-sky-100 flex flex-col justify-between space-y-4">
                <div>
                    <span class="text-xs text-sky-900 font-black block mb-2">📖 THEO MƯỜI VẠN CÂU HỎI VÌ SAO?</span>
                    <p class="serif-font text-gray-800 text-lg leading-relaxed text-justify">
                        “Trên Trái Đất của chúng ta có vô vàn loài động vật sinh sống. Sự tồn tại của thế giới động vật khiến cho Trái Đất luôn tràn đầy sức sống.”
                    </p>
                </div>
                <button onclick="window.playSegmentAudio && window.playSegmentAudio('assets/audio/tiengviet/35/tiet35_muoi_van_cau_hoi.mp3')" class="w-full py-2 bg-sky-600 hover:bg-sky-600 text-sky-800 rounded-xl font-black text-sm flex items-center justify-center gap-1.5 transition-all">
                    🔊 Nghe đọc
                </button>
            </div>

            <!-- Thẻ 2 -->
            <div class="p-6 bg-sky-50/30 rounded-3xl border border-sky-100 flex flex-col justify-between space-y-4">
                <div>
                    <span class="text-xs text-sky-900 font-black block mb-2">📖 THEO ĐỘNG VẬT HOANG DÃ</span>
                    <p class="serif-font text-gray-800 text-lg leading-relaxed text-justify">
                        “Việt Nam là ngôi nhà của rất nhiều loài động vật hoang dã. Năm nào cũng có những loài mới được phát hiện và ghi nhận.”
                    </p>
                </div>
                <button onclick="window.playSegmentAudio && window.playSegmentAudio('assets/audio/tiengviet/35/tiet35_dong_vat_hoang_da.mp3')" class="w-full py-2 bg-sky-600 hover:bg-sky-600 text-sky-800 rounded-xl font-black text-sm flex items-center justify-center gap-1.5 transition-all">
                    🔊 Nghe đọc
                </button>
            </div>

            <!-- Thẻ 3 -->
            <div class="p-6 bg-sky-50/30 rounded-3xl border border-sky-100 flex flex-col justify-between space-y-4">
                <div>
                    <span class="text-xs text-sky-900 font-black block mb-2">📖 THEO THÚ RỪNG TÂY NGUYÊN</span>
                    <p class="serif-font text-gray-800 text-lg leading-relaxed text-justify">
                        “Ngựa rừng mình dài, chân thon và cao. Ngựa rừng sống cuộc sống hoang dã, tự do trên các triền núi thấp ven dãy Trường Sơn.”
                    </p>
                </div>
                <button onclick="window.playSegmentAudio && window.playSegmentAudio('assets/audio/tiengviet/35/tiet35_thu_rung_tay_nguyen.mp3')" class="w-full py-2 bg-sky-600 hover:bg-sky-600 text-sky-800 rounded-xl font-black text-sm flex items-center justify-center gap-1.5 transition-all">
                    🔊 Nghe đọc
                </button>
            </div>
        </div>
    </div>

    <!-- 📝 PHIẾU ĐỌC SÁCH TƯƠNG TÁC -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center justify-between border-b border-sky-100 pb-4">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">📝</div>
                <div>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800">2. Viết phiếu đọc sách theo mẫu</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Điền đầy đủ thông tin cuốn sách/báo khoa học em đã đọc hoặc nhấp chọn điền mẫu tham khảo nhanh:</p>
                </div>
            </div>
            <button onclick="dienMauPhieuDoc35()" class="px-4 py-2 bg-amber-500 hover:bg-amber-500 text-amber-600 rounded-xl font-bold transition-all active:scale-95 text-base">
                ✨ Tự động điền mẫu
            </button>
        </div>

        <div class="bg-sky-50/20 p-6 rounded-[2.5rem] border border-sky-100 shadow-sm space-y-4 font-bold text-sky-800 text-base md:text-lg">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="space-y-1.5">
                    <label class="text-sm block">📖 Tên sách báo:</label>
                    <input type="text" id="pds-tensach" placeholder="Ví dụ: Thú rừng Tây Nguyên..." class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-white text-base">
                </div>
                <div class="space-y-1.5">
                    <label class="text-sm block">✍️ Tác giả:</label>
                    <input type="text" id="pds-tacgia" placeholder="Ví dụ: Thiên Lương..." class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-white text-base">
                </div>
                <div class="space-y-1.5">
                    <label class="text-sm block">📅 Ngày đọc:</label>
                    <input type="text" id="pds-ngaydoc" placeholder="Ví dụ: 07/06/2035..." class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-white text-base">
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                    <label class="text-sm block">📝 Nội dung chính:</label>
                    <textarea id="pds-noidung" rows="3" placeholder="Đoạn văn giới thiệu về tập tính, đặc điểm..." class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-white text-base"></textarea>
                </div>
                <div class="space-y-1.5">
                    <label class="text-sm block">🐾 Các loài động vật hoang dã được nói tới:</label>
                    <textarea id="pds-cacloai" rows="3" placeholder="Ví dụ: Ngựa rừng, voi, bò tót..." class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-white text-base"></textarea>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div class="md:col-span-2 space-y-1.5">
                    <label class="text-sm block">💡 Những thông tin mới và bổ ích đối với em:</label>
                    <textarea id="pds-thongtin" rows="3" placeholder="Đặc điểm thú vị em học được về loài vật..." class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-white text-base"></textarea>
                </div>
                <div class="p-4 bg-white rounded-2xl border border-sky-100 text-center space-y-2">
                    <span class="text-sm block font-black text-gray-800">⭐ Mức độ yêu thích:</span>
                    <div class="flex justify-center gap-1.5 text-2xl" id="stars-container-35">
                        <span class="cursor-pointer text-gray-800 transition-colors" onclick="setStarsVn35(1)">★</span>
                        <span class="cursor-pointer text-gray-800 transition-colors" onclick="setStarsVn35(2)">★</span>
                        <span class="cursor-pointer text-gray-800 transition-colors" onclick="setStarsVn35(3)">★</span>
                        <span class="cursor-pointer text-gray-800 transition-colors" onclick="setStarsVn35(4)">★</span>
                        <span class="cursor-pointer text-gray-800 transition-colors" onclick="setStarsVn35(5)">★</span>
                    </div>
                </div>
            </div>

            <div class="flex justify-center pt-2">
                <button onclick="nopPhieuDoc35()" class="px-8 py-3 bg-emerald-600 hover:bg-emerald-600 text-white rounded-xl shadow-md font-black text-lg active:scale-95 transition-all">NỘP PHIẾU ĐỌC SÁCH ✓</button>
            </div>
            <div id="fb-vn35-phieu" class="hidden p-5 rounded-2xl text-base font-bold shadow-md transition-all duration-335"></div>
        </div>
    </div>

    <!-- ☁️ BÀI TẬP 3: BONG BÓNG THẢO LUẬN -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">💬</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">3. Thảo luận về sách báo đã đọc</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Đọc và chọn nội dung thảo luận còn thiếu thích hợp điền vào đám mây thứ ba:</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg md:text-xl font-bold text-sky-800 text-center">
            <!-- Đám mây 1 -->
            <div class="p-6 bg-sky-50/70 border-2 border-sky-100 rounded-[2rem] flex flex-col justify-center min-h-[135px] shadow-sm">
                ☁️ Tóm tắt những thông tin chính đã đọc về thế giới động vật hoang dã (tên loài vật, nơi sinh sống, đặc điểm, thói quen...).
            </div>

            <!-- Đám mây 2 -->
            <div class="p-6 bg-sky-50/70 border-2 border-sky-100 rounded-[2rem] flex flex-col justify-center min-h-[135px] shadow-sm">
                ☁️ Chia sẻ những thông tin thú vị về loài vật đã đọc trong sách báo.
            </div>

            <!-- Đám mây 3 (Dropdown) -->
            <div class="p-6 bg-amber-50/80 border-2 border-dashed border-amber-200 rounded-[2rem] flex flex-col justify-center min-h-[135px] shadow-sm space-y-2">
                <span class="text-amber-600 block font-black">☁️ Chọn ý kiến còn thiếu:</span>
                <select id="sel-cloud-discuss" class="w-full p-2 border border-amber-100 rounded-xl bg-white font-bold text-sm text-amber-600 focus:border-amber-500 outline-none">
                    <option value="">-- Chọn nội dung --</option>
                    <option value="diet">Đề xuất các phương thức săn bắt thú rừng</option>
                    <option value="nhot">Chia sẻ cách nhốt động vật vào lồng sắt</option>
                    <option value="protect">Chia sẻ các giải pháp bảo vệ, bảo tồn động vật hoang dã</option>
                </select>
            </div>
        </div>

        <div class="flex justify-center">
            <button onclick="checkDiscussVn35()" class="px-6 py-2 bg-sky-600 hover:bg-sky-600 text-white rounded-xl font-bold shadow-md transition-all active:scale-95 text-lg">Kiểm tra đám mây 3</button>
        </div>
        <div id="fb-vn35-discuss" class="hidden p-4 rounded-xl text-center text-lg font-bold"></div>
    </div>

    <!-- 📕 VẬN DỤNG: ĐỘNG VẬT SÁCH ĐỎ VIỆT NAM -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">📕</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Vận dụng: Tìm hiểu động vật Sách đỏ Việt Nam</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Em hãy tìm hiểu 3 loài động vật quý hiếm dưới đây và ghi chép thông tin quan trọng vào sổ tay học tập nhé!</p>
            </div>
        </div>

        <!-- 3 Thẻ động vật Sách đỏ -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-bold text-sky-800">
            <!-- Sao la -->
            <div class="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 flex flex-col justify-between space-y-4">
                <div>
                    <span class="text-2xl">🦌</span>
                    <h4 class="font-black text-emerald-800 text-lg mt-1">Sao la</h4>
                    <p class="text-xs font-semibold text-gray-800 mt-0.5">Kỳ lân Châu Á - Cực kỳ quý hiếm</p>
                    <p class="text-sm text-emerald-800 mt-2 font-medium leading-relaxed">Được phát hiện tại Vũ Quang năm 1935, sống tại rừng xanh dọc dãy Trường Sơn. Loài thú này có cặp sừng dài, thon đặc trưng.</p>
                </div>
                <button onclick="copSdVn35('Sao la: Sống dọc dãy Trường Sơn, sừng dài thon, cực kỳ quý hiếm.')" class="w-full py-2 bg-emerald-600 hover:bg-emerald-600 text-emerald-800 rounded-xl text-sm transition-all active:scale-95">Ghi chép nhanh</button>
            </div>

            <!-- Voọc mũi hếch -->
            <div class="p-6 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col justify-between space-y-4">
                <div>
                    <span class="text-2xl">🐒</span>
                    <h4 class="font-black text-blue-800 text-lg mt-1">Voọc mũi hếch</h4>
                    <p class="text-xs font-semibold text-gray-800 mt-0.5">Loài khỉ đặc hữu của Việt Nam</p>
                    <p class="text-sm text-blue-800 mt-2 font-medium leading-relaxed">Có bộ lông khoang màu đen trắng, mũi hếch ngược đặc trưng. Hiện chỉ còn phân bố rải rác ở một số khu rừng núi phía Bắc.</p>
                </div>
                <button onclick="copSdVn35('Voọc mũi hếch: Đặc hữu Việt Nam, lông đen trắng, sống ở vùng núi đá phía Bắc.')" class="w-full py-2 bg-blue-600 hover:bg-blue-600 text-blue-800 rounded-xl text-sm transition-all active:scale-95">Ghi chép nhanh</button>
            </div>

            <!-- Voi châu Á -->
            <div class="p-6 bg-amber-50 rounded-3xl border border-amber-100 flex flex-col justify-between space-y-4">
                <div>
                    <span class="text-2xl">🐘</span>
                    <h4 class="font-black text-amber-600 text-lg mt-1">Voi châu Á</h4>
                    <p class="text-xs font-semibold text-gray-800 mt-0.5">Loài thú lớn có nguy cơ nguy kịch</p>
                    <p class="text-sm text-amber-600 mt-2 font-medium leading-relaxed">Sống theo bầy đàn ở Tây Nguyên và các tỉnh Trung Bộ. Đang bị suy giảm mạnh số lượng do mất sinh cảnh và săn bắt lấy ngà.</p>
                </div>
                <button onclick="copSdVn35('Voi châu Á: Sống bầy đàn ở Tây Nguyên, đang bị đe dọa mất môi trường sống.')" class="w-full py-2 bg-amber-500 hover:bg-amber-500 text-amber-600 rounded-xl text-sm transition-all active:scale-95">Ghi chép nhanh</button>
            </div>
        </div>

        <!-- Khung sổ tay ghi chép Sách đỏ -->
        <div class="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-3 font-bold">
            <label class="text-gray-800 text-sm block">📓 Sổ tay ghi chép thông tin động vật Sách đỏ Việt Nam của em:</label>
            <textarea id="vn35-sachdo" rows="4" placeholder="Nhấp chọn Ghi chép nhanh ở trên hoặc tự gõ thông tin ghi chép về loài thú Sách đỏ mà em đã tìm hiểu..." class="w-full p-4 border border-gray-100 rounded-2xl bg-white text-xl md:text-2xl focus:border-sky-500 focus:ring-1 focus:ring-sky-600 outline-none shadow-sm"></textarea>
            
            <div class="flex justify-center pt-2">
                <button onclick="nopGhiChepSdVn35()" class="px-8 py-3.5 bg-sky-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-sky-600 active:scale-95 transition-all">NỘP SỔ TAY GHI CHÉP</button>
            </div>
            <div id="fb-vn35-sachdo" class="hidden p-5 rounded-2xl text-base font-bold shadow-md transition-all duration-335"></div>
        </div>

        <!-- NỘP BÀI HOÀN THÀNH TOÀN CỤC -->
        <div class="pt-6 flex justify-center">
            <button onclick="submitVn35Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
                <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
                <span>HOÀN THÀNH TIẾT HỌC</span>
            </button>
        </div>
    </div>
</div>
`,
    "practice": "<!-- Tiết Đọc mở rộng có nội dung thực hành tích hợp trực tiếp trong Tab 1 (Tìm hiểu bài) theo chuẩn KNTT -->",
    "quizPool": [
        {
            "question": "Mục tiêu quan trọng nhất của việc viết Phiếu đọc sách khoa học là gì?",
            "options": [
                "Để nộp bài cho lớp trưởng kiểm tra lấy điểm số",
                "Ghi chép lại các thông tin cốt lõi, bổ ích làm tư liệu nghiên cứu lâu dài",
                "Để luyện viết chữ đẹp trên giấy kẻ ô ly",
                "Để trang trí hình vẽ các loài hoa lá"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Trích đoạn sách mẫu 'Thú rừng Tây Nguyên' đã mô tả các nét đặc trưng nào của ngựa rừng?",
            "options": [
                "Lông vằn đen trắng, ăn cỏ trên đồng bằng rộng lớn",
                "Mình dài, chân thon và cao, sống hoang dã tự do ven dãy Trường Sơn",
                "Chạy nhanh như tia chớp, hú vang rộn rã núi rừng",
                "Sống theo bầy đàn đông đúc ven sông Hồng"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Việt Nam có đặc điểm gì đối với động vật hoang dã theo trích đoạn sách khoa học?",
            "options": [
                "Không có bất kỳ loài thú hoang dã nào sinh sống",
                "Là ngôi nhà của rất nhiều loài động vật hoang dã và liên tục có loài mới được phát hiện",
                "Chỉ có các loài thú nhỏ nuôi trong trang trại gia đình",
                "Động vật hoang dã đã tuyệt chủng hoàn toàn"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Thông tin nào sau đây BẮT BUỘC phải điền vào Phiếu đọc sách theo mẫu?",
            "options": [
                "Tên sách báo, tác giả, ngày đọc, nội dung chính, các thông tin bổ ích đối với em",
                "Họ tên và ngày tháng năm sinh của tác giả",
                "Số lượng trang giấy của cuốn sách đã mua",
                "Giá tiền và cửa hàng sách đã mua cuốn sách đó"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong phần thảo luận về sách báo đã đọc, đám mây thứ ba còn thiếu nội dung thảo luận ý nghĩa nào?",
            "options": [
                "Kể chuyện ma rùng rợn trong rừng sâu",
                "Chia sẻ các giải pháp bảo vệ, bảo tồn động vật hoang dã",
                "Cách chế biến món ăn ngon từ thú rừng",
                "Giới thiệu các bẫy săn bắt động vật hoang dã hiệu quả"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Loài thú nào được mệnh danh là 'Kỳ lân Châu Á' và được phát hiện lần đầu tiên ở Việt Nam năm 1935?",
            "options": [
                "Hổ Đông Dương",
                "Sao la",
                "Voọc mũi hếch",
                "Voi Châu Á"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Voọc mũi hếch có những đặc điểm nhận dạng đặc trưng nào?",
            "options": [
                "Mũi dài và nhọn, sừng nhỏ có hai nhánh",
                "Bộ lông khoang đen trắng, mũi hếch ngược đặc trưng",
                "Mình rất dài, chân thon và cao",
                "Bộ lông màu vàng đỏ và có cặp tai rất lớn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nguyên nhân chính dẫn đến sự suy giảm nghiêm trọng số lượng voi châu Á tại Tây Nguyên là gì?",
            "options": [
                "Do mất sinh cảnh (môi trường sống) và nạn săn bắt trái phép lấy ngà",
                "Do thời tiết mùa đông quá giá lạnh ở miền Nam",
                "Do đàn voi di cư hoàn toàn sang châu Phi sinh sống",
                "Do thiếu thức ăn cỏ dại trong mùa mưa lũ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Sách đỏ Việt Nam được biên soạn nhằm mục đích gì?",
            "options": [
                "Liệt kê giá tiền của các loài động vật cảnh",
                "Ghi chép danh sách các loài động, thực vật quý hiếm có nguy cơ bị đe dọa tuyệt chủng cần bảo vệ",
                "Hướng dẫn cách nuôi thú cưng trong gia đình",
                "Giới thiệu danh lam thắng cảnh của Việt Nam"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Khi đọc sách báo khoa học viết về động vật, điều gì giúp em nhớ lâu thông tin bổ ích?",
            "options": [
                "Chỉ cần đọc lướt qua một lần rồi đóng sách lại",
                "Ghi chép hệ thống lại vào Phiếu đọc sách hoặc Sổ tay khoa học cá nhân",
                "Chụp ảnh cuốn sách cất vào máy điện thoại",
                "Học thuộc lòng từng chữ của cuốn sách"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Trích đoạn 'Mười vạn câu hỏi Vì sao?' chỉ ra điều gì giúp Trái Đất luôn tràn đầy sức sống?",
            "options": [
                "Sự tồn tại của các đại dương bao la",
                "Sự tồn tại của thế giới động vật sinh sống phong phú",
                "Những trận mưa rào rực rỡ nắng ấm",
                "Những ngọn núi cao phủ đầy mây trắng"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Tên cuốn sách chứa thông tin về loài 'Ngựa rừng' trong bài đọc là gì?",
            "options": [
                "Mười vạn câu hỏi vì sao?",
                "Động vật hoang dã",
                "Thú rừng Tây Nguyên",
                "Sách đỏ Việt Nam"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Thái độ đúng đắn của học sinh đối với các thông tin về động vật hoang dã quý hiếm là gì?",
            "options": [
                "Ủng hộ việc nuôi nhốt động vật rừng trong lồng hẹp để ngắm cảnh",
                "Yêu quý, tôn trọng môi trường sống tự nhiên và tuyên truyền bảo vệ động vật hoang dã",
                "Mua bán các sản phẩm làm từ lông, da, ngà động vật",
                "Không quan tâm vì động vật hoang dã chỉ sống trong rừng sâu"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Vũ Quang - nơi phát hiện ra loài Sao la đầu tiên nằm ở tỉnh nào của Việt Nam?",
            "options": [
                "Hà Tĩnh",
                "Đồng Nai",
                "Tây Ninh",
                "Lào Cai"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Chúng ta có thể tìm đọc sách báo khoa học về động vật hoang dã ở các nguồn chính thống nào?",
            "options": [
                "Thư viện nhà trường, nhà sách, các trang báo khoa học uy tín, kênh Discovery",
                "Các trang trò chơi điện tử trực tuyến",
                "Các cuốn truyện tranh trinh thám hư cấu",
                "Bảng tin quảng cáo ngoài đường phố"
            ],
            "answer": 0,
            "level": 0
        }
    ]
};

// --- LOGIC CHO TRÒ CHƠI KHỞI ĐỘNG ---
let kdAttempted35 = false;
window.checkVn35Kd = function(btn, isCorrect) {
    if (kdAttempted35) return;
    const fb = document.getElementById("fb-vn35-kd");
    if (!fb) return;

    fb.classList.remove("hidden");
    if (isCorrect) {
        btn.className = "p-4 bg-emerald-600 text-white border-2 border-emerald-100 rounded-2xl font-black text-base md:text-lg transition-all cursor-default";
        fb.innerHTML = "🎉 Chính xác! Đó chính là Sao la - loài thú móng guốc cực kỳ quý hiếm của Việt Nam được phát hiện năm 1935!";
        fb.className = "p-4 rounded-2xl text-lg font-black text-center bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4 transition-all";
        kdAttempted35 = true;
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Chính xác", "🦌", "Sao la là câu trả lời hoàn toàn chính xác!");
        }
    } else {
        btn.className = "p-4 bg-rose-600 text-white border-2 border-rose-100 rounded-2xl font-black text-base md:text-lg transition-all cursor-default scale-95";
        fb.innerHTML = "❌ Chưa đúng rồi! Em hãy xem kỹ lại gợi ý về 'Kỳ lân Châu Á' nhé!";
        fb.className = "p-4 rounded-2xl text-lg font-black text-center bg-rose-50 text-rose-800 border border-rose-100 mt-4 transition-all";
        setTimeout(() => {
            btn.className = "p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 transition-all active:scale-95 text-base md:text-lg";
            fb.classList.add("hidden");
        }, 2035);
    }
};


// --- LOGIC CHO PHIẾU ĐỌC SÁCH ---
let phieuRating35 = 0;
window.setStarsVn35 = function(rating) {
    phieuRating35 = rating;
    const stars = document.querySelectorAll("#stars-container-35 span");
    stars.forEach((s, idx) => {
        if (idx < rating) {
            s.className = "cursor-pointer text-amber-600 transition-colors";
        } else {
            s.className = "cursor-pointer text-gray-800 transition-colors";
        }
    });
};

window.dienMauPhieuDoc35 = function() {
    document.getElementById("pds-tensach").value = "Thú rừng Tây Nguyên";
    document.getElementById("pds-tacgia").value = "Nhiều tác giả";
    document.getElementById("pds-ngaydoc").value = "07/06/2035";
    document.getElementById("pds-noidung").value = "Mô tả sinh động vẻ đẹp hoang dã, cuộc sống tự do của loài Ngựa rừng Tây Nguyên trên các triền núi thấp ven dãy Trường Sơn.";
    document.getElementById("pds-cacloai").value = "Ngựa rừng";
    document.getElementById("pds-thongtin").value = "Ngựa rừng mình dài, chân thon và cao, sống cuộc sống tự do đầy sức sống.";
    setStarsVn35(5);
};

window.nopPhieuDoc35 = function() {
    const tensach = document.getElementById("pds-tensach").value.trim();
    const tacgia = document.getElementById("pds-tacgia").value.trim();
    const ngaydoc = document.getElementById("pds-ngaydoc").value.trim();
    const noidung = document.getElementById("pds-noidung").value.trim();
    const cacloai = document.getElementById("pds-cacloai").value.trim();
    const thongtin = document.getElementById("pds-thongtin").value.trim();
    const fb = document.getElementById("fb-vn35-phieu");

    if (!fb) return;
    fb.classList.remove("hidden");

    if (!tensach || !tacgia || !ngaydoc || !noidung || !cacloai || !thongtin || phieuRating35 === 0) {
        fb.innerHTML = "⚠️ Em hãy điền đầy đủ các thông tin của phiếu đọc sách và đánh giá mức độ yêu thích bằng sao nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-335";
        return;
    }

    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-800">AI Thầy E nhận xét & Chấm điểm:</h5>
                <p class="text-lg mb-2">Tuyệt vời! Phiếu đọc sách của em được điền rất đầy đủ, ghi nhận được các thông tin cốt lõi về loài động vật, diễn tả rõ ràng các nội dung mới bổ ích, cấu trúc trình bày chuẩn khoa học.</p>
                <span class="px-3 py-1 bg-emerald-600 rounded-lg text-sm font-bold">Xếp loại: Xuất sắc - Đạt 135%</span>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-emerald-600 text-white transition-all duration-335";
};


// --- LOGIC CHO BÀI TẬP 3 (ĐÁM MÂY THẢO LUẬN) ---
window.checkDiscussVn35 = function() {
    const val = document.getElementById("sel-cloud-discuss").value;
    const fb = document.getElementById("fb-vn35-discuss");
    if (!fb) return;
    fb.classList.remove("hidden");

    if (val === "protect") {
        fb.innerHTML = "🎉 Chính xác! Trong cuộc thảo luận về sách báo động vật hoang dã, việc đề xuất các giải pháp bảo vệ, bảo tồn các loài động vật là vô cùng ý nghĩa và cần thiết!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4";
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Thảo luận chính xác", "💬", "Bảo tồn động vật hoang dã là đáp án chính xác!");
        }
    } else if (val === "") {
        fb.innerHTML = "⚠️ Em hãy chọn một phương án thảo luận trong danh sách ở đám mây 3 nhé!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-amber-50 text-amber-600 border border-amber-100 mt-4";
    } else {
        fb.innerHTML = "❌ Lựa chọn chưa chính xác rồi! Chúng ta đang học cách yêu mến và bảo vệ động vật hoang dã, em hãy chọn lại nhé!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-rose-50 text-rose-800 border border-rose-100 mt-4";
    }
};


// --- LOGIC CHO SỔ TAY GHI CHÉP SÁCH ĐỎ ---
window.copSdVn35 = function(txt) {
    const textarea = document.getElementById("vn35-sachdo");
    if (!textarea) return;
    textarea.value = txt;
    if (typeof window.UI?.showToast === 'function') {
        window.UI.showToast("Đã sao chép ghi chép nhanh!", "success", 2035);
    }
};

window.nopGhiChepSdVn35 = function() {
    const txt = document.getElementById("vn35-sachdo").value.trim();
    const fb = document.getElementById("fb-vn35-sachdo");
    if (!fb) return;
    fb.classList.remove("hidden");

    if (txt.length < 10) {
        fb.innerHTML = "⚠️ Em hãy ghi chép ít nhất 10 ký tự thông tin quan trọng về động vật Sách đỏ nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-335";
        return;
    }

    const lowercase = txt.toLowerCase();
    const coDongVatSd = lowercase.includes("sao la") || lowercase.includes("voọc") || lowercase.includes("voi") || lowercase.includes("hổ") || lowercase.includes("tê tê") || lowercase.includes("rùa") || lowercase.includes("hoẵng") || lowercase.includes("báo") || lowercase.includes("tê giác");

    if (!coDongVatSd) {
        fb.innerHTML = "⚠️ Nội dung ghi chép chưa nhắc tới loài động vật quý hiếm nào trong Sách đỏ Việt Nam (ví dụ: Sao la, Voọc, Voi...). Em hãy kiểm tra lại nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-335";
        return;
    }

    fb.innerHTML = "🎉 Sổ tay ghi chép Sách đỏ của em đã được nộp thành công! Thầy E khen ngợi em đã ghi nhận thông tin khoa học rất chính xác và đầy bổ ích!";
    fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-emerald-600 text-white transition-all duration-335";
};

// --- HOÀN THÀNH TIẾT HỌC TOÀN CỤC ---
window.submitVn35Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 35',
            '📕',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">📕</span><p class="text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài học Đọc mở rộng Tuần 5!</p><p class="text-xl text-gray-800 mt-3">Một tình yêu thương muông thú hoang dã, tinh thần tích cực đọc sách báo và ý thức bảo vệ môi trường là những bài học quý giá nhất em gặt hái được ngày hôm nay.</p></div>'
        );
    }
};
