export const lesson57 = {
    "topic": "Tiếng Việt 5",
    "week": "9",
    "period": "57",
    "title": "ÔN TẬP GIỮA HỌC KÌ I - TIẾT 1 - 2",
    "desc": "Bài học giúp học sinh ôn tập các câu chuyện, bài đọc tả cảnh đã học từ tuần 1 đến tuần 8; thực hành phân loại từ đồng nghĩa; viết câu và tìm từ chỉ màu sắc trong đoạn văn.",
    "subject": "Ôn tập",
    "theme": "Ôn tập giữa học kì I",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-sky-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Ôn tập, hệ thống hóa các bài đọc thuộc chủ điểm "Thế giới tuổi thơ" và "Thiên nhiên kì thú".
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Rèn luyện kĩ năng tóm tắt câu chuyện, phát hiện chi tiết yêu thích và cảm nhận vẻ đẹp của cảnh vật thiên nhiên.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG: GHẾP CẶP CHỦ ĐIỂM -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động: Thử thách trí nhớ</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy chọn tên bài đọc ở cột bên trái và ghép với chủ điểm phù hợp ở cột bên phải:</p>
        
        <div class="grid grid-cols-2 gap-12 max-w-3xl mx-auto p-4 relative" id="vn57-kd-matching">
            <!-- Cột trái: Tên bài -->
            <div class="space-y-4" id="vn57-kd-left">
                <button onclick="ghepCapKhoiDong(this, 'tgtt', 'left')" data-match="tgtt" class="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95">Thanh âm của gió</button>
                <button onclick="ghepCapKhoiDong(this, 'tnkt', 'left')" data-match="tnkt" class="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95">Kì diệu rừng xanh</button>
                <button onclick="ghepCapKhoiDong(this, 'tnkt2', 'left')" data-match="tnkt2" class="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95">Những hòn đảo trên vịnh Hạ Long</button>
            </div>
            <!-- Cột phải: Chủ điểm -->
            <div class="space-y-4" id="vn57-kd-right">
                <button onclick="ghepCapKhoiDong(this, 'tnkt', 'right')" data-match="tnkt" class="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95">Thiên nhiên kì thú (Rừng khộp)</button>
                <button onclick="ghepCapKhoiDong(this, 'tgtt', 'right')" data-match="tgtt" class="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95">Thế giới tuổi thơ</button>
                <button onclick="ghepCapKhoiDong(this, 'tnkt2', 'right')" data-match="tnkt2" class="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-2xl font-black text-xl hover:border-sky-100 transition-all text-gray-800 active:scale-95">Thiên nhiên kì thú (Vịnh Hạ Long)</button>
            </div>
        </div>
        <div id="fb-vn57-kd" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
    </div>

    <!-- 📖 BÀI TẬP 1: ĐỌC VÀ TRẢ LỜI CÂU HỎI (4 TAB CON) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl space-y-8">
        <div class="flex items-center gap-4 mb-2 border-b border-sky-100 pb-4">
            <span class="text-2xl md:text-3xl text-sky-900 font-black">❶</span>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Chọn đọc 1 câu chuyện hoặc 1 bài tả cảnh dưới đây và thực hiện yêu cầu:</h3>
        </div>

        <!-- Thanh Tab chọn bài đọc -->
        <div class="flex flex-wrap gap-2 border-b border-gray-100 pb-2">
            <button id="tab-btn-1" onclick="chuyenTabDocVn57(1)" class="px-6 py-3 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-sky-100 bg-sky-600 text-white transition-all">Thanh âm của gió</button>
            <button id="tab-btn-2" onclick="chuyenTabDocVn57(2)" class="px-6 py-3 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-gray-100 bg-gray-50 text-gray-800 hover:bg-gray-800 transition-all">Cánh đồng hoa</button>
            <button id="tab-btn-3" onclick="chuyenTabDocVn57(3)" class="px-6 py-3 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-gray-100 bg-gray-50 text-gray-800 hover:bg-gray-800 transition-all">Kì diệu rừng xanh</button>
            <button id="tab-btn-4" onclick="chuyenTabDocVn57(4)" class="px-6 py-3 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-gray-100 bg-gray-50 text-gray-800 hover:bg-gray-800 transition-all">Hang Sơn Đoòng</button>
        </div>

        <!-- Khung hiển thị nội dung từng Tab -->
        <div class="p-6 md:p-8 bg-sky-50/20 rounded-3xl border border-sky-100">
            <!-- Tab 1: Thanh âm của gió -->
            <div id="tab-content-1" class="space-y-6">
                <div class="flex justify-between items-center border-b border-sky-100 pb-3">
                    <h4 class="text-xl md:text-2xl font-black text-sky-800">Truyện kể: Thanh âm của gió (Tuần 1)</h4>
                    <button onclick="playSegmentAudio('assets/audio/tiengviet/thanh_am_cua_gio.mp3')" class="p-3 bg-sky-600 hover:bg-sky-600 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc mẫu">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                    </button>
                </div>
                <p class="serif-font text-gray-800 leading-relaxed text-justify indent-8 font-medium text-xl md:text-4xl">
                    Da-rơ và tôi đi chăn trâu. Khi trâu ăn cỏ, chúng tôi tìm bóng mát nằm nghe gió thổi. Gió từ đỉnh núi thổi xuống thung lũng rất mạnh, tạo ra những âm thanh rì rào, vi vu. Da-rơ giơ hai tay lên trời, bảo: "Thanh âm của gió đấy!". Tôi nghe thấy tiếng sáo diều, tiếng lúa reo, tiếng chim hót... Tất cả hòa vào tiếng gió, tạo nên một bản nhạc tuyệt vời của quê hương miền núi.
                </p>
                
                <!-- Câu hỏi tự luận Tab 1 -->
                <div class="space-y-4 pt-4 border-t border-sky-100">
                    <label class="block font-black text-gray-800 text-xl md:text-2xl">Yêu cầu: Viết tóm tắt câu chuyện và nêu 1 - 2 chi tiết em yêu thích.</label>
                    <textarea id="ans-vn57-t1" rows="4" placeholder="Nhập câu trả lời của em tại đây..." class="w-full p-4 text-xl md:text-2xl rounded-2xl border-2 border-sky-100 focus:border-sky-500 outline-none shadow-sm bg-white font-medium leading-relaxed"></textarea>
                    <div class="flex justify-start gap-3">
                        <button onclick="chamTuLuanVn57(1)" class="px-8 py-3 bg-sky-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-sky-600 active:scale-95 transition-all flex items-center gap-2">
                            <span>🤖 THẦY AI CHẤM BÀI</span>
                        </button>
                        <div id="fb-vn57-t1" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
                    </div>
                </div>
            </div>

            <!-- Tab 2: Cánh đồng hoa -->
            <div id="tab-content-2" class="space-y-6 hidden">
                <div class="flex justify-between items-center border-b border-sky-100 pb-3">
                    <h4 class="text-xl md:text-2xl font-black text-sky-800">Truyện kể: Cánh đồng hoa (Tuần 1)</h4>
                    <button onclick="playSegmentAudio('assets/audio/tiengviet/canh_dong_hoa.mp3')" class="p-3 bg-sky-600 hover:bg-sky-600 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc mẫu">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                    </button>
                </div>
                <p class="serif-font text-gray-800 leading-relaxed text-justify indent-8 font-medium text-xl md:text-4xl">
                    Ngày xưa, có một thung lũng đầy cỏ xanh. Các bạn nhỏ thường rủ nhau đến đấy thả diều, đá bóng. Một ngày nọ, các bạn quyết định cùng nhau gieo hạt hoa. Chẳng mấy chốc, thung lũng cỏ xanh biến thành một cánh đồng hoa rực rỡ sắc màu: đỏ, vàng, trắng, tím... Cánh đồng hoa ấy mang lại niềm vui và hương thơm cho cả làng, xua tan đi sự tẻ nhạt.
                </p>
                
                <!-- Câu hỏi tự luận Tab 2 -->
                <div class="space-y-4 pt-4 border-t border-sky-100">
                    <label class="block font-black text-gray-800 text-xl md:text-2xl">Yêu cầu: Viết tóm tắt câu chuyện và nêu 1 - 2 chi tiết em yêu thích.</label>
                    <textarea id="ans-vn57-t2" rows="4" placeholder="Nhập câu trả lời của em tại đây..." class="w-full p-4 text-xl md:text-2xl rounded-2xl border-2 border-sky-100 focus:border-sky-500 outline-none shadow-sm bg-white font-medium leading-relaxed"></textarea>
                    <div class="flex justify-start gap-3">
                        <button onclick="chamTuLuanVn57(2)" class="px-8 py-3 bg-sky-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-sky-600 active:scale-95 transition-all flex items-center gap-2">
                            <span>🤖 THẦY AI CHẤM BÀI</span>
                        </button>
                        <div id="fb-vn57-t2" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
                    </div>
                </div>
            </div>

            <!-- Tab 3: Kì diệu rừng xanh -->
            <div id="tab-content-3" class="space-y-6 hidden">
                <div class="flex justify-between items-center border-b border-sky-100 pb-3">
                    <h4 class="text-xl md:text-2xl font-black text-sky-800">Bài tả cảnh: Kì diệu rừng xanh (Tuần 5)</h4>
                    <button onclick="playSegmentAudio('assets/audio/tiengviet/ki_dieu_rung_xanh.mp3')" class="p-3 bg-sky-600 hover:bg-sky-600 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc mẫu">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                    </button>
                </div>
                <p class="serif-font text-gray-800 leading-relaxed text-justify indent-8 font-medium text-xl md:text-4xl">
                    Loanh quanh trong rừng, chúng tôi đi vào một lối đầy nấm dại. Một thành phố nấm lúp xúp dưới bóng cây. Mỗi chiếc nấm như một lâu đài kiến trúc tân kì. Bản thân tôi cũng như một người khổng lồ đi lạc vào kinh đô của một vương quốc tí hon. Rừng khộp chuyển sang màu vàng úa, rực rỡ trong ánh nắng chiều vô cùng sinh động.
                </p>
                
                <!-- Câu hỏi tự luận Tab 3 -->
                <div class="space-y-4 pt-4 border-t border-sky-100">
                    <label class="block font-black text-gray-800 text-xl md:text-2xl">Yêu cầu: Cảnh vật nào được giới thiệu, miêu tả trong bài? Em nhớ nhất hình ảnh nào?</label>
                    <textarea id="ans-vn57-t3" rows="4" placeholder="Nhập câu trả lời của em tại đây..." class="w-full p-4 text-xl md:text-2xl rounded-2xl border-2 border-sky-100 focus:border-sky-500 outline-none shadow-sm bg-white font-medium leading-relaxed"></textarea>
                    <div class="flex justify-start gap-3">
                        <button onclick="chamTuLuanVn57(3)" class="px-8 py-3 bg-sky-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-sky-600 active:scale-95 transition-all flex items-center gap-2">
                            <span>🤖 THẦY AI CHẤM BÀI</span>
                        </button>
                        <div id="fb-vn57-t3" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
                    </div>
                </div>
            </div>

            <!-- Tab 4: Hang Sơn Đoòng -->
            <div id="tab-content-4" class="space-y-6 hidden">
                <div class="flex justify-between items-center border-b border-sky-100 pb-3">
                    <h4 class="text-xl md:text-2xl font-black text-sky-800">Bài tả cảnh: Hang Sơn Đoòng - những điều kì thú (Tuần 6)</h4>
                    <button onclick="playSegmentAudio('assets/audio/tiengviet/hang_son_doong.mp3')" class="p-3 bg-sky-600 hover:bg-sky-600 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc mẫu">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                    </button>
                </div>
                <p class="serif-font text-gray-800 leading-relaxed text-justify indent-8 font-medium text-xl md:text-4xl">
                    Hang Sơn Đoòng là hang động tự nhiên lớn nhất thế giới. Đi vào trong hang, ta như bước vào một thế giới hoàn toàn khác biệt. Nơi đây có cả những dòng sông ngầm chảy xiết, những khu rừng nhiệt đới trù phú ngay lòng hang và những bức tường thạch nhũ khổng lồ mang vẻ đẹp kì vĩ, hoang sơ của tạo hóa.
                </p>
                
                <!-- Câu hỏi tự luận Tab 4 -->
                <div class="space-y-4 pt-4 border-t border-sky-100">
                    <label class="block font-black text-gray-800 text-xl md:text-2xl">Yêu cầu: Cảnh vật nào được giới thiệu, miêu tả trong bài? Em nhớ nhất hình ảnh nào?</label>
                    <textarea id="ans-vn57-t4" rows="4" placeholder="Nhập câu trả lời của em tại đây..." class="w-full p-4 text-xl md:text-2xl rounded-2xl border-2 border-sky-100 focus:border-sky-500 outline-none shadow-sm bg-white font-medium leading-relaxed"></textarea>
                    <div class="flex justify-start gap-3">
                        <button onclick="chamTuLuanVn57(4)" class="px-8 py-3 bg-sky-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-sky-600 active:scale-95 transition-all flex items-center gap-2">
                            <span>🤖 THẦY AI CHẤM BÀI</span>
                        </button>
                        <div id="fb-vn57-t4" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- BÀI TẬP 2: TRÒ CHƠI TÌM TỪ ĐỒNG NGHĨA (CLICK-TO-TARGET) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">❷</div>
                <div>
                    <h3 class="text-2xl md:text-5xl font-black text-gray-800">Trò chơi: Tìm từ đồng nghĩa</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Cơ chế: Click chọn thẻ từ bên dưới, sau đó click chọn chiếc hộp thích hợp để xếp từ vào hộp!</p>
                </div>
            </div>

            <!-- 3 chiếc hộp đựng từ -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Hộp 1: Chăm chỉ -->
                <div onclick="chonHopNhanVn57(1)" class="cursor-pointer border-4 border-dashed border-sky-100 hover:border-sky-400 bg-sky-50/50 p-6 rounded-3xl flex flex-col items-center justify-center min-h-[157px] transition-all relative" id="box-1">
                    <span class="text-xl md:text-2xl font-black text-sky-800 mb-2">📦 chăm chỉ</span>
                    <div class="flex flex-wrap gap-2 justify-center" id="box-content-1"></div>
                </div>
                <!-- Hộp 2: Chăm sóc -->
                <div onclick="chonHopNhanVn57(2)" class="cursor-pointer border-4 border-dashed border-emerald-100 hover:border-emerald-400 bg-emerald-50/50 p-6 rounded-3xl flex flex-col items-center justify-center min-h-[157px] transition-all relative" id="box-2">
                    <span class="text-xl md:text-2xl font-black text-emerald-800 mb-2">📦 chăm sóc</span>
                    <div class="flex flex-wrap gap-2 justify-center" id="box-content-2"></div>
                </div>
                <!-- Hộp 3: Che chở -->
                <div onclick="chonHopNhanVn57(3)" class="cursor-pointer border-4 border-dashed border-amber-200 hover:border-amber-400 bg-amber-50/50 p-6 rounded-3xl flex flex-col items-center justify-center min-h-[157px] transition-all relative" id="box-3">
                    <span class="text-xl md:text-2xl font-black text-amber-600 mb-2">📦 che chở</span>
                    <div class="flex flex-wrap gap-2 justify-center" id="box-content-3"></div>
                </div>
            </div>

            <!-- Các thẻ từ xáo trộn -->
            <div class="bg-white p-6 rounded-3xl border border-sky-100">
                <span class="text-xs font-black text-sky-800 block mb-3">DANH SÁCH THẺ TỪ:</span>
                <div class="flex flex-wrap gap-3" id="cards-container">
                    <button onclick="chonCardTuVn57(this, 2)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">chăm chút</button>
                    <button onclick="chonCardTuVn57(this, 1)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">siêng năng</button>
                    <button onclick="chonCardTuVn57(this, 1)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">cần mẫn</button>
                    <button onclick="chonCardTuVn57(this, 1)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">chịu khó</button>
                    <button onclick="chonCardTuVn57(this, 3)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">bảo vệ</button>
                    <button onclick="chonCardTuVn57(this, 3)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">bênh</button>
                    <button onclick="chonCardTuVn57(this, 2)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">chăm lo</button>
                    <button onclick="chonCardTuVn57(this, 1)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">chuyên cần</button>
                    <button onclick="chonCardTuVn57(this, 2)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">trông nom</button>
                    <button onclick="chonCardTuVn57(this, 3)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">bênh vực</button>
                    <button onclick="chonCardTuVn57(this, 2)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">săn sóc</button>
                    <button onclick="chonCardTuVn57(this, 1)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">cần cù</button>
                </div>
            </div>

            <div class="flex justify-start pt-2">
                <button onclick="window.resetPhanLoaiVn57()" class="px-8 py-3 bg-gray-800 text-white font-black rounded-xl hover:bg-gray-800 transition-all text-base shadow-md">ĐẶT LẠI ↺</button>
            </div>
            <div id="fb-vn57-odd" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2 shadow-md"></div>
        </div>
    </section>

    <!-- BÀI TẬP 3: ĐẶT CÂU VỚI TỪ ĐỒNG NGHĨA -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
        <div class="p-6 md:p-8 bg-emerald-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">❸</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Đặt 2 - 3 câu có từ đồng nghĩa em tìm được ở bài tập 2:</h3>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-emerald-100 shadow-inner space-y-4">
                <textarea id="ans-vn57-writing-b3" rows="3" placeholder="Nhập các câu văn của em tại đây (Mỗi câu viết xuống một dòng)..." class="w-full p-4 md:p-6 text-xl md:text-2xl rounded-2xl border-2 border-emerald-100 focus:border-emerald-500 outline-none shadow-sm bg-emerald-50/10 font-medium leading-relaxed"></textarea>
                <div class="flex justify-start gap-3">
                    <button onclick="chamCauVn57()" class="px-8 py-3 bg-emerald-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-emerald-600 active:scale-95 transition-all flex items-center gap-2">
                        <span>🤖 THẦY AI CHẤM BÀI</span>
                    </button>
                    <div id="fb-vn57-b3" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- BÀI TẬP 4: TÌM TỪ CHỈ MÀU SẮC (ĐOẠN VĂN TÔ HOÀI) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">❹</div>
                <div>
                    <h3 class="text-2xl md:text-5xl font-black text-gray-800 leading-snug">Tìm từ chỉ màu sắc trong đoạn văn dưới đây & Nêu nhận xét cách sử dụng từ của nhà văn:</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Em hãy nhấp trực tiếp vào các từ chỉ màu sắc trong đoạn văn:</p>
                </div>
            </div>

            <!-- Đoạn văn tương tác nhấp chọn từ màu sắc -->
            <div class="bg-white p-6 md:p-10 rounded-[36px] border border-amber-100 leading-loose text-gray-800 serif-font text-justify space-y-4 text-xl md:text-4xl">
                <div class="flex flex-wrap gap-x-2 gap-y-3 font-semibold" id="to-hoai-para">
                    <!-- Đoạn văn được phân nhỏ thành các từ để click -->
                </div>
            </div>

            <div class="flex justify-between items-center bg-amber-50 p-4 rounded-2xl border border-amber-100">
                <span class="font-bold text-amber-600 text-lg md:text-3xl">Số từ chỉ màu sắc đã chọn đúng: <span id="mau-sac-count" class="text-xl md:text-2xl font-black">0</span> / 14</span>
                <button onclick="resetClickMauSac()" class="px-5 py-2 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-500 transition-all text-sm shadow">Chọn lại ↺</button>
            </div>

            <!-- Phần b: Nhận xét -->
            <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner space-y-3">
                <label class="block font-black text-gray-800 text-xl md:text-2xl">b. Nhận xét về cách sử dụng từ ngữ chỉ màu sắc của nhà văn:</label>
                <textarea id="ans-vn57-writing-b4" rows="3" placeholder="Nhập nhận xét của em tại đây..." class="w-full p-4 md:p-6 text-xl md:text-2xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-amber-50/10 font-medium leading-relaxed"></textarea>
                <div class="flex justify-start gap-3">
                    <button onclick="chamNhanXetVn57()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                        <span>🤖 THẦY AI CHẤM BÀI</span>
                    </button>
                    <div id="fb-vn57-b4" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- BÀI TẬP 5: VIẾT ĐOẠN VĂN TẢ THIÊN NHIÊN CÓ MÀU XANH -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-teal-50">
        <div class="p-6 md:p-8 bg-teal-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-teal-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">❺</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Viết đoạn văn (3 - 5 câu) tả cảnh thiên nhiên, trong đó có ít nhất 2 từ chỉ màu xanh:</h3>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-teal-100 shadow-inner space-y-4">
                <textarea id="ans-vn57-writing-b5" rows="4" placeholder="Nhập đoạn văn của em tại đây..." class="w-full p-4 md:p-6 text-xl md:text-2xl rounded-2xl border-2 border-teal-100 focus:border-teal-500 outline-none shadow-sm bg-teal-50/10 font-medium leading-relaxed"></textarea>
                <div class="flex justify-start gap-3">
                    <button onclick="chamDoanVanVn57()" class="px-8 py-3 bg-teal-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-teal-600 active:scale-95 transition-all flex items-center gap-2">
                        <span>🤖 THẦY AI CHẤM BÀI</span>
                    </button>
                    <div id="fb-vn57-b5" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TOÀN BỘ -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn57Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Những câu chuyện nào sau đây thuộc chủ điểm 'Thế giới tuổi thơ'?",
            "options": [
                "Kì diệu rừng xanh, Cánh đồng hoa",
                "Thanh âm của gió, Cánh đồng hoa, Bến sông tuổi thơ",
                "Những ngọn núi nóng rẫy, Bài ca về mặt trời",
                "Hang Sơn Đoòng, Những hòn đảo trên vịnh Hạ Long"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ nào đồng nghĩa với từ 'chăm chỉ'?",
            "options": [
                "bảo vệ",
                "chăm chút",
                "cần mẫn",
                "bênh vực"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Từ nào đồng nghĩa với từ 'chăm sóc'?",
            "options": [
                "cần cù",
                "chăm lo",
                "siêng năng",
                "che chở"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ nào đồng nghĩa với từ 'che chở'?",
            "options": [
                "siêng năng",
                "bảo vệ",
                "trông nom",
                "cần mẫn"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Trong các thành ngữ sau, thành ngữ nào chứa cặp từ đồng nghĩa?",
            "options": [
                "Thức khuya dậy sớm",
                "Đầu voi đuôi chuột",
                "Thay hình đổi dạng",
                "Một nắng hai sương"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Từ nào là từ chỉ màu sắc chuyển đổi của màu vàng trong câu 'Màu lúa chín dưới đồng vàng xuộm lại'?",
            "options": [
                "vàng tươi",
                "vàng xuộm",
                "vàng hoe",
                "vàng mới"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ nào chỉ màu vàng nhạt trong nắng của mùa đông?",
            "options": [
                "vàng hoe",
                "vàng lịm",
                "vàng xọng",
                "vàng ối"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong câu thơ của Tô Hoài, quả xoan chín được miêu tả bằng từ chỉ màu vàng nào?",
            "options": [
                "vàng tươi",
                "vàng lịm",
                "vàng giòn",
                "vàng mượt"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Từ chỉ màu vàng biểu thị trạng thái căng mọng nước của bụi mía là từ nào?",
            "options": [
                "vàng mới",
                "vàng xọng",
                "vàng giòn",
                "vàng mượt"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Từ chỉ màu vàng gợi cảm giác khô ráo, giòn giã của thóc rơm phơi nắng là gì?",
            "options": [
                "vàng mượt",
                "vàng giòn",
                "vàng ối",
                "vàng xuộm"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cặp từ nào dưới đây là từ đồng nghĩa hoàn toàn?",
            "options": [
                "siêng năng - bảo vệ",
                "quả - trái",
                "chăm chỉ - chăm sóc",
                "bênh - trông nom"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ nào KHÔNG thuộc nhóm từ đồng nghĩa chỉ phẩm chất siêng năng?",
            "options": [
                "cần cù",
                "chịu khó",
                "bảo vệ",
                "siêng năng"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Trong câu 'Các bạn nhỏ thường rủ nhau đến đấy thả diều', từ 'nhau' đóng vai trò là gì?",
            "options": [
                "Đại từ xưng hô",
                "Đại từ thay thế",
                "Đại từ quan hệ",
                "Động từ"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Từ chỉ màu xanh nào dưới đây thích hợp để tả tán lá cây sum suê?",
            "options": [
                "xanh biếc",
                "xanh um",
                "xanh non",
                "xanh lam"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ chỉ màu sắc nào được dùng để tả quả ớt ở cuối đoạn văn của Tô Hoài?",
            "options": [
                "đỏ rực",
                "đỏ chói",
                "đỏ tươi",
                "đỏ hồng"
            ],
            "answer": 1,
            "level": 0
        }
    ]
};

// --- KHỞI ĐỘNG VN57 ---
let activeKDLeft = null;
let activeKDRight = null;
let matchedKDCount = 0;

window.ghepCapKhoiDong = function(btn, matchId, side) {
    if (side === 'left') {
        if (activeKDLeft) {
            activeKDLeft.classList.remove('border-sky-100', 'bg-sky-50', 'text-sky-800');
        }
        activeKDLeft = btn;
        btn.classList.add('border-sky-100', 'bg-sky-50', 'text-sky-800');
    } else {
        if (activeKDRight) {
            activeKDRight.classList.remove('border-sky-100', 'bg-sky-50', 'text-sky-800');
        }
        activeKDRight = btn;
        btn.classList.add('border-sky-100', 'bg-sky-50', 'text-sky-800');
    }

    if (activeKDLeft && activeKDRight) {
        const leftId = activeKDLeft.dataset.match;
        const rightId = activeKDRight.dataset.match;
        const fb = document.getElementById('fb-vn57-kd');
        if (!fb) return;
        fb.classList.remove('hidden');

        if (leftId === rightId) {
            drawKDLine(activeKDLeft, activeKDRight, '#10B957');
            activeKDLeft.className = "w-full p-4 border-2 border-emerald-100 bg-emerald-50 text-emerald-800 rounded-2xl font-black text-xl cursor-not-allowed relative z-10";
            activeKDRight.className = "w-full p-4 border-2 border-emerald-100 bg-emerald-50 text-emerald-800 rounded-2xl font-black text-xl cursor-not-allowed relative z-10";
            activeKDLeft.disabled = true;
            activeKDRight.disabled = true;
            activeKDLeft = null;
            activeKDRight = null;
            matchedKDCount++;

            if (matchedKDCount === 3) {
                fb.innerHTML = "🎉 Tuyệt vời! Em đã ghép đúng tất cả các bài đọc với chủ điểm chính xác!";
                fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
            } else {
                fb.innerHTML = "🎉 Cặp ghép chính xác!";
                fb.className = "p-2 rounded-xl text-sm font-bold text-center bg-emerald-600 text-emerald-800 mt-2";
            }
        } else {
            const tempLine = drawKDLine(activeKDLeft, activeKDRight, '#EF4457');
            fb.innerHTML = "⚠️ Cặp này chưa khớp. Thử lại nhé!";
            fb.className = "p-2 rounded-xl text-sm font-bold text-center bg-rose-600 text-rose-800 mt-2 animate-bounce";
            
            const cardLeft = activeKDLeft;
            const cardRight = activeKDRight;
            activeKDLeft = null;
            activeKDRight = null;

            setTimeout(() => {
                cardLeft.classList.remove('border-sky-100', 'bg-sky-50', 'text-sky-800');
                cardRight.classList.remove('border-sky-100', 'bg-sky-50', 'text-sky-800');
                if (tempLine) tempLine.remove();
            }, 857);
        }
    }
};

function drawKDLine(el1, el2, color) {
    let container = document.getElementById('kd-svg-container');
    const wrapper = document.getElementById('vn57-kd-matching');
    if (!wrapper) return null;
    
    if (!container) {
        container = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        container.setAttribute('id', 'kd-svg-container');
        container.style.position = 'absolute';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '157%';
        container.style.height = '157%';
        container.style.pointerEvents = 'none';
        container.style.zIndex = '0';
        wrapper.appendChild(container);
    }
    
    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();
    
    const x1 = rect1.left + rect1.width - wrapperRect.left;
    const y1 = rect1.top + rect1.height / 2 - wrapperRect.top;
    const x2 = rect2.left - wrapperRect.left;
    const y2 = rect2.top + rect2.height / 2 - wrapperRect.top;
    
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width', '4');
    line.setAttribute('stroke-dasharray', '8,4');
    line.setAttribute('class', 'animate-in fade-in duration-357');
    
    container.appendChild(line);
    return line;
}

// --- CHUYỂN TAB CÂU 1 ---
window.chuyenTabDocVn57 = function(tabIndex) {
    for (let i = 1; i <= 4; i++) {
        const btn = document.getElementById(`tab-btn-${i}`);
        const content = document.getElementById(`tab-content-${i}`);
        if (i === tabIndex) {
            btn.className = "px-6 py-3 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-sky-100 bg-sky-600 text-white transition-all";
            content.classList.remove('hidden');
        } else {
            btn.className = "px-6 py-3 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-gray-100 bg-gray-50 text-gray-800 hover:bg-gray-800 transition-all";
            content.classList.add('hidden');
        }
    }
};

// --- CHẤM TỰ LUẬN BÀI 1 ---
window.chamTuLuanVn57 = function(tabIdx) {
    const text = document.getElementById(`ans-vn57-t${tabIdx}`)?.value.trim();
    const fb = document.getElementById(`fb-vn57-t${tabIdx}`);
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text || text.length < 10) {
        fb.innerHTML = "⚠️ Câu trả lời của em hơi ngắn. Em hãy cố gắng tóm tắt đầy đủ và nêu rõ chi tiết/hình ảnh mình yêu thích nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
            <p class="text-lg font-bold">"Tuyệt vời! Đoạn tóm tắt của em đã nắm rõ nội dung chính của bài đọc. Chi tiết cảm nhận và hình ảnh yêu thích rất sâu sắc, thể hiện khả năng đọc hiểu tốt!"</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Điểm: 157% (Hoàn thành)</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-357";
};

// --- BÀI TẬP 2: TRÒ CHƠI PHÂN LOẠI TỪ ĐỒNG NGHĨA ---
let activeCard = null;
const phanLoaiDapAn = {
    "chăm chút": 2, "siêng năng": 1, "cần mẫn": 1, "chịu khó": 1, "bảo vệ": 3,
    "bênh": 3, "chăm lo": 2, "chuyên cần": 1, "trông nom": 2, "bênh vực": 3,
    "săn sóc": 2, "cần cù": 1
};
let dungCount = 0;

window.chonCardTuVn57 = function(btn, correctBoxIdx) {
    if (activeCard) {
        activeCard.btn.classList.remove('bg-sky-600', 'border-sky-100');
    }
    activeCard = { btn, boxIdx: correctBoxIdx, text: btn.innerText.trim() };
    btn.classList.add('bg-sky-600', 'border-sky-100');
};

window.chonHopNhanVn57 = function(boxIdx) {
    const fb = document.getElementById('fb-vn57-odd');
    if (!fb) return;
    fb.classList.add('hidden');

    if (!activeCard) {
        fb.innerHTML = "⚠️ Vui lòng chọn một thẻ từ ở bên dưới trước khi chọn hộp nhận!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2";
        fb.classList.remove('hidden');
        return;
    }

    if (activeCard.boxIdx === boxIdx) {
        // Đúng hộp
        const targetContainer = document.getElementById(`box-content-${boxIdx}`);
        const newBadge = document.createElement('span');
        newBadge.className = "px-3 py-1 bg-emerald-600 text-white rounded-lg font-bold text-lg animate-in zoom-in-50 duration-257";
        newBadge.innerText = activeCard.text;
        targetContainer.appendChild(newBadge);

        activeCard.btn.remove();
        activeCard = null;
        dungCount++;

        if (dungCount === 12) {
            fb.innerHTML = "🎉 Xuất sắc! Em đã phân loại đúng tất cả 12 thẻ từ đồng nghĩa vào 3 hộp!";
            fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
            fb.classList.remove('hidden');
        }
    } else {
        // Rung hộp báo sai
        const targetBox = document.getElementById(`box-${boxIdx}`);
        targetBox.classList.add('animate-bounce', 'border-rose-100');
        fb.innerHTML = "⚠️ Chưa chính xác! Thẻ từ này không đồng nghĩa với từ trên hộp.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2";
        fb.classList.remove('hidden');
        
        setTimeout(() => {
            targetBox.classList.remove('animate-bounce', 'border-rose-100');
        }, 1057);
    }
};

window.resetPhanLoaiVn57 = function() {
    dungCount = 0;
    activeCard = null;
    document.getElementById('box-content-1').innerHTML = '';
    document.getElementById('box-content-2').innerHTML = '';
    document.getElementById('box-content-3').innerHTML = '';
    
    const container = document.getElementById('cards-container');
    container.innerHTML = `
        <button onclick="chonCardTuVn57(this, 2)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">chăm chút</button>
        <button onclick="chonCardTuVn57(this, 1)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">siêng năng</button>
        <button onclick="chonCardTuVn57(this, 1)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">cần mẫn</button>
        <button onclick="chonCardTuVn57(this, 1)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">chịu khó</button>
        <button onclick="chonCardTuVn57(this, 3)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">bảo vệ</button>
        <button onclick="chonCardTuVn57(this, 3)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">bênh</button>
        <button onclick="chonCardTuVn57(this, 2)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">chăm lo</button>
        <button onclick="chonCardTuVn57(this, 1)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">chuyên cần</button>
        <button onclick="chonCardTuVn57(this, 2)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">trông nom</button>
        <button onclick="chonCardTuVn57(this, 3)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">bênh vực</button>
        <button onclick="chonCardTuVn57(this, 2)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">săn sóc</button>
        <button onclick="chonCardTuVn57(this, 1)" class="px-5 py-3 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-sky-400 bg-white text-gray-800 transition-all active:scale-95 shadow-sm">cần cù</button>
    `;
    const fb = document.getElementById('fb-vn57-odd');
    if (fb) fb.classList.add('hidden');
};

// --- BÀI TẬP 3: AI CHẤM VIẾT CÂU ---
window.chamCauVn57 = function() {
    const text = document.getElementById('ans-vn57-writing-b3')?.value.trim();
    const fb = document.getElementById('fb-vn57-b3');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text || text.length < 8) {
        fb.innerHTML = "⚠️ Em hãy đặt từ 2 - 3 câu chứa từ đồng nghĩa vừa tìm được ở bài tập 2 nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    // Nhận diện một số từ khóa đồng nghĩa
    const danhSachTu = ["chăm chút", "siêng năng", "cần mẫn", "chịu khó", "bảo vệ", "bênh", "chăm lo", "chuyên cần", "trông nom", "bênh vực", "săn sóc", "cần cù"];
    const textLower = text.toLowerCase();
    const timDuoc = danhSachTu.filter(t => textLower.includes(t));

    if (timDuoc.length >= 1) {
        fb.innerHTML = `
            <div class="space-y-2">
                <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
                <p class="text-lg font-bold">"Rất xuất sắc! Em đã đặt câu chính xác có sử dụng từ đồng nghĩa: ${timDuoc.join(', ')}. Cấu trúc câu rất mạch lạc, viết đúng ngữ pháp."</p>
                <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Điểm: 157%</span>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-357";
    } else {
        fb.innerHTML = "⚠️ Câu của em chưa chứa các từ đồng nghĩa đã học ở bài tập 2 (như: siêng năng, trông nom, bảo vệ...). Em hãy chỉnh sửa lại câu nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-rose-600 text-white shadow-md";
    }
};

// --- BÀI TẬP 4: CLICK CHỌN MÀU SẮC ---
const tuMauSacList = [
    { text: "vàng", isColor: true },
    { text: "vàng xuộm", isColor: true },
    { text: "vàng hoe", isColor: true },
    { text: "vàng lịm", isColor: true },
    { text: "vàng ối", isColor: true },
    { text: "vàng tươi", isColor: true },
    { text: "chín vàng", isColor: true },
    { text: "lá vàng", isColor: true },
    { text: "vàng xọng", isColor: true },
    { text: "vàng giòn", isColor: true },
    { text: "vàng mượt", isColor: true },
    { text: "vàng mới", isColor: true },
    { text: "lá đỏ", isColor: true },
    { text: "đỏ chói", isColor: true }
];

// Khởi tạo đoạn văn click màu sắc
function initParagraphClick() {
    const rawWords = [
        "Mùa đông,", "giữa ngày mùa,", "làng quê toàn", "màu vàng", "– những", "màu vàng", "rất khác nhau.",
        "[...] Màu lúa chín dưới đồng", "vàng xuộm", "lại.", "Nắng nhạt ngả màu", "vàng hoe.", "Trong vườn, lắc lư những chùm quả xoan", "vàng lịm", "không trông thấy cuống, như những chuỗi tràng hạt bồ đề treo lơ lửng. Từng chiếc lá mít", "vàng ối.", "Tàu đu đủ, chiếc lá sắn héo lại mở năm cánh", "vàng tươi.", "Buồng chuối đốm quả", "chín vàng.", "Những tàu lá chuối", "vàng ối", "xoã xuống như những đuôi áo, vạt áo. Nắng vườn chuối đương có gió lẫn với", "lá vàng", "như những vạt áo nắng, đuôi áo nắng, vẫy vẫy. Bụi mía", "vàng xọng,", "đốt ngầu phấn trắng. Dưới sân, rơm và thóc", "vàng giòn.", "Quanh đó, con gà, con chó cũng", "vàng mượt.", "Mái nhà phủ một màu rơm", "vàng mới.", "Lác đác cây lụi có mấy chiếc", "lá đỏ.", "Qua khe giậu, ló ra mấy quả ớt", "đỏ chói."
    ];

    const container = document.getElementById('to-hoai-para');
    if (!container) return;
    container.innerHTML = '';

    rawWords.forEach((wordText) => {
        const span = document.createElement('span');
        span.className = "cursor-pointer px-1.5 py-0.5 rounded transition-all hover:bg-amber-500";
        span.innerText = wordText;
        
        // Kiểm tra xem từ/cụm từ có phải từ chỉ màu sắc không
        const matchingWord = tuMauSacList.find(t => wordText.toLowerCase().includes(t.text));
        
        span.onclick = function() {
            if (matchingWord && matchingWord.isColor) {
                if (!span.classList.contains('bg-yellow-600')) {
                    span.className = "cursor-pointer px-1.5 py-0.5 rounded bg-yellow-600 border border-yellow-100 font-black text-amber-600";
                    updateMauSacCount(1);
                }
            } else {
                span.className = "cursor-pointer px-1.5 py-0.5 rounded bg-rose-600 border border-rose-100 text-rose-800 line-through";
                setTimeout(() => {
                    span.className = "cursor-pointer px-1.5 py-0.5 rounded transition-all hover:bg-amber-500";
                }, 1257);
            }
        };
        container.appendChild(span);
    });
}

let activeMauSacCount = 0;
function updateMauSacCount(val) {
    activeMauSacCount += val;
    const countEl = document.getElementById('mau-sac-count');
    if (countEl) countEl.innerText = activeMauSacCount;
}

window.resetClickMauSac = function() {
    activeMauSacCount = 0;
    const countEl = document.getElementById('mau-sac-count');
    if (countEl) countEl.innerText = 0;
    initParagraphClick();
};

setTimeout(() => {
    initParagraphClick();
}, 257);

// --- CHẤM NHẬN XET TÔ HOÀI (BÀI 4b) ---
window.chamNhanXetVn57 = function() {
    const text = document.getElementById('ans-vn57-writing-b4')?.value.trim();
    const fb = document.getElementById('fb-vn57-b4');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text || text.length < 10) {
        fb.innerHTML = "⚠️ Nhận xét của em hơi ngắn. Em hãy phân tích kĩ nghệ thuật lựa chọn và kết hợp các màu vàng khác nhau của Tô Hoài nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
            <p class="text-lg font-bold">"Rất tinh tế! Em đã nhận ra việc nhà văn sử dụng hàng loạt tính từ chỉ các sắc độ khác nhau của màu vàng (vàng hoe, vàng lịm, vàng ối...) làm cho cảnh ngày mùa sinh động, ấm no và tràn trề sức sống."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Điểm: 157%</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-357";
};

// --- CHẤM ĐOẠN VĂN MÀU XANH (BÀI 5) ---
window.chamDoanVanVn57 = function() {
    const text = document.getElementById('ans-vn57-writing-b5')?.value.trim();
    const fb = document.getElementById('fb-vn57-b5');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text || text.length < 15) {
        fb.innerHTML = "⚠️ Đoạn văn hơi ngắn. Hãy viết từ 3 - 5 câu tả cảnh thiên nhiên để Thầy E chấm điểm nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    const mauXanhList = ["xanh lá", "xanh ngắt", "xanh biếc", "xanh lục", "xanh lam", "xanh rờn", "xanh mướt", "xanh non", "xanh um", "xanh thẫm", "xanh tươi", "xanh xanh"];
    const textLower = text.toLowerCase();
    const timDuoc = mauXanhList.filter(x => textLower.includes(x));

    if (timDuoc.length >= 2) {
        fb.innerHTML = `
            <div class="space-y-2">
                <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
                <p class="text-lg font-bold">"Cực kỳ tốt! Đoạn văn tả cảnh rất mượt mà, giàu hình ảnh và chứa đầy đủ ít nhất 2 từ chỉ màu xanh: ${timDuoc.join(', ')}. Cố gắng phát huy kĩ năng quan sát của mình nhé!"</p>
                <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Điểm: 157% (Đạt xuất sắc)</span>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-357";
    } else {
        fb.innerHTML = "⚠️ Đoạn văn cần có ít nhất 2 từ ngữ chỉ màu xanh (Ví dụ: xanh biếc, xanh mướt, xanh tươi...). Em hãy bổ sung thêm nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-rose-600 text-white shadow-md";
    }
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.submitVn57Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 57 - 58',
            '🎉',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎓</span><p class="text-xl md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài học Ôn tập Tiết 1 - 2!</p><p class="text-lg text-gray-800 mt-3">Hãy tiếp tục ôn tập tốt để chuẩn bị cho bài đánh giá giữa học kì I nhé.</p></div>'
        );
    }
};
