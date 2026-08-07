export const lesson73 = {
    "topic": "Tiếng Việt 5",
    "week": "11",
    "period": "73",
    "title": "VIẾT: VIẾT ĐOẠN VĂN GIỚI THIỆU NHÂN VẬT TRONG MỘT CUỐN SÁCH",
    "desc": "Bài học hướng dẫn học sinh thực hành viết đoạn văn giới thiệu nhân vật trong một cuốn sách đã đọc, tập trung vào việc mô tả đặc điểm nổi bật, bày tỏ tình cảm cảm xúc và thực hiện tự soát lỗi chỉnh sửa.",
    "subject": "Viết",
    "theme": "Trải nghiệm để sáng tạo",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-emerald-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-emerald-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-emerald-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-emerald-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Viết được đoạn văn giới thiệu nhân vật trong một cuốn sách đã đọc bám sát dàn ý và các tiêu chí yêu cầu.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Biết cách tập trung làm nổi bật đặc điểm của nhân vật và bộc lộ tình cảm, cảm xúc chân thực của bản thân.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Thực hành đọc soát và tự chỉnh sửa đoạn văn theo 4 tiêu chí cốt lõi (bố cục, nội dung, từ ngữ/câu, dẫn chứng).
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Kết nối nhân vật</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Hãy nối hoặc chọn đúng tác phẩm của các nhân vật nổi tiếng dưới đây:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <!-- Nhân vật Ma-ri-a -->
            <div class="bg-amber-50/45 p-4 rounded-2xl border border-amber-100 flex flex-col md:flex-row md:items-center justify-between gap-3">
                <span class="text-lg font-black text-amber-600">1. Nhân vật Ma-ri-a</span>
                <select id="kd-opt-1" class="p-2 border border-amber-100 rounded-xl font-bold bg-white text-base text-gray-800">
                    <option value="">-- Chọn tác phẩm --</option>
                    <option value="tat-den">Tắt đèn</option>
                    <option value="ma-ri-a">Bài đọc về cuộc đời Ma-ri-a (nhà bác học)</option>
                    <option value="de-men">Dế Mèn phiêu lưu ký</option>
                </select>
            </div>

            <!-- Nhân vật Thầy Cơ-rô-xét-ti -->
            <div class="bg-sky-50/45 p-4 rounded-2xl border border-sky-100 flex flex-col md:flex-row md:items-center justify-between gap-3">
                <span class="text-lg font-black text-sky-800">2. Thầy Cơ-rô-xét-ti</span>
                <select id="kd-opt-2" class="p-2 border border-sky-100 rounded-xl font-bold bg-white text-base text-gray-800">
                    <option value="">-- Chọn tác phẩm --</option>
                    <option value="de-men">Dế Mèn phiêu lưu ký</option>
                    <option value="ngoi-sao">Ngôi sao sân cỏ</option>
                    <option value="nhung-tam-long">Những tấm lòng cao cả</option>
                </select>
            </div>

            <!-- Nhân vật Dế Mèn -->
            <div class="bg-emerald-50/45 p-4 rounded-2xl border border-emerald-100 flex flex-col md:flex-row md:items-center justify-between gap-3">
                <span class="text-lg font-black text-emerald-800">3. Nhân vật Dế Mèn</span>
                <select id="kd-opt-3" class="p-2 border border-emerald-100 rounded-xl font-bold bg-white text-base text-gray-800">
                    <option value="">-- Chọn tác phẩm --</option>
                    <option value="de-men">Dế Mèn phiêu lưu ký</option>
                    <option value="dat-rung">Đất rừng phương Nam</option>
                    <option value="thanh-am">Thanh âm của gió</option>
                </select>
            </div>

            <!-- Nhân vật Sơn Tùng -->
            <div class="bg-teal-50/45 p-4 rounded-2xl border border-teal-100 flex flex-col md:flex-row md:items-center justify-between gap-3">
                <span class="text-lg font-black text-teal-800">4. Sơn Tùng</span>
                <select id="kd-opt-4" class="p-2 border border-teal-100 rounded-xl font-bold bg-white text-base text-gray-800">
                    <option value="">-- Chọn tác phẩm --</option>
                    <option value="de-men">Dế Mèn phiêu lưu ký</option>
                    <option value="ngoi-sao">Ngôi sao sân cỏ (Trong bài đọc)</option>
                    <option value="truoc-cong-troi">Trước cổng trời</option>
                </select>
            </div>
        </div>

        <div class="flex justify-end items-center gap-4"><button onclick="kiemTraKhoiDong73();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
        <div id="fb-vn73-kd" class="hidden p-4 rounded-xl text-sm font-bold text-center mt-2"></div>
    </div>

    <!-- 📋 BÀI TẬP 1: VIẾT ĐOẠN VĂN GIỚI THIỆU NHÂN VẬT -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <div class="flex items-start gap-3 border-b border-emerald-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">1</span>
                <div class="space-y-1">
                    <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                        Viết đoạn văn giới thiệu nhân vật trong cuốn sách mà em đã đọc.
                    </h3>
                    <p class="text-base text-amber-600 font-bold bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-100">
                        📝 Đề bài: Viết đoạn văn giới thiệu một nhân vật trong cuốn sách em đã đọc.
                    </p>
                </div>
            </div>

            <!-- Phân tích ví dụ mẫu -->
            <div class="space-y-4">
                <h4 class="text-xl md:text-2xl font-black text-gray-800">💡 Hướng dẫn & Phân tích ví dụ mẫu từ sách giáo khoa:</h4>
                <p class="text-base font-bold text-gray-800 italic">👉 Hãy di chuột hoặc nhấn vào các nút dưới đây để làm nổi bật các câu văn hay trong ví dụ:</p>
                
                <div class="flex flex-wrap gap-2">
                    <button onmouseover="highlightViDu73('dactinh')" onmouseout="resetHighlightViDu73()" onclick="highlightViDu73('dactinh')" class="px-4 py-2 bg-amber-500 hover:bg-amber-500 text-amber-600 font-bold rounded-xl text-sm md:text-base border border-amber-100 transition-all">✨ Đặc điểm nổi bật của nhân vật (Ví dụ 1)</button>
                    <button onmouseover="highlightViDu73('camxuc')" onmouseout="resetHighlightViDu73()" onclick="highlightViDu73('camxuc')" class="px-4 py-2 bg-sky-600 hover:bg-sky-600 text-sky-800 font-bold rounded-xl text-sm md:text-base border border-sky-100 transition-all">❤️ Tình cảm, cảm xúc & Khích lệ đọc sách (Ví dụ 2)</button>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                    <!-- Đoạn văn mẫu 1 -->
                    <div class="bg-amber-50/20 p-5 md:p-6 rounded-[24px] border border-amber-100/70 relative">
                        <span class="absolute right-4 top-4 text-xs font-black text-amber-600 bg-amber-500 px-2 py-0.5 rounded-md">Mẫu 1</span>
                        <h5 class="font-black text-amber-600 mb-2">Đoạn văn tả đặc điểm nổi bật (Nhân vật Ma-ri-a):</h5>
                        <p class="text-lg font-bold text-gray-800 leading-relaxed">
                            <span id="vd-dactinh-1" class="transition-all">Ma-ri-a rất ưa quan sát.</span> Hồi 6 tuổi, mỗi khi gia nhân bưng trà lên, cô lại để ý sự chuyển động của tách đựng trà trên đĩa. <span id="vd-dactinh-2" class="transition-all">Là người luôn say mê khám phá, Ma-ri-a làm đi làm lại thí nghiệm để giải thích cho điều kì lạ cô đã thấy.</span> Cuối cùng, cô đã phát hiện ra: Khi giữa tách trà và đĩa có một chút nước thì tách trà sẽ đứng yên.
                        </p>
                        <span class="block text-right text-xs font-bold text-gray-800 mt-2">(Hoàng Hà Thu)</span>
                    </div>

                    <!-- Đoạn văn mẫu 2 -->
                    <div class="bg-sky-50/20 p-5 md:p-6 rounded-[24px] border border-sky-100/70 relative">
                        <span class="absolute right-4 top-4 text-xs font-black text-sky-800 bg-sky-600 px-2 py-0.5 rounded-md">Mẫu 2</span>
                        <h5 class="font-black text-sky-800 mb-2">Đoạn văn thể hiện tình cảm (Nhân vật thầy Cơ-rô-xét-ti):</h5>
                        <p class="text-lg font-bold text-gray-800 leading-relaxed">
                            <span id="vd-camxuc-1" class="transition-all">Đọc cuốn Những tấm lòng cao cả của A-mi-xi, tôi vô cùng cảm phục thầy Cơ-rô-xét-ti.</span> Sau rất nhiều năm, thầy vẫn nhớ tên, nhớ tính nết, nhớ chỗ ngồi của học trò và còn giữ được cả bài viết của học trò ngày ấy.
                        </p>
                        <span class="block text-right text-xs font-bold text-gray-800 mt-2">(Vũ Anh Tú)</span>
                    </div>
                </div>
            </div>

            <!-- Giao diện thực hành viết bài -->
            <div class="space-y-4 pt-6 border-t border-gray-100">
                <h4 class="text-xl md:text-2xl font-black text-gray-800">✍️ Thực hành viết đoạn văn của em:</h4>
                <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-sm font-bold text-gray-800">Gợi ý dàn ý nhanh:</span>
                    <button onclick="chonGoiYDanY73('dactinh')" class="px-3 py-1 bg-amber-50 hover:bg-amber-500 text-amber-600 border border-amber-100 font-bold rounded-lg text-sm">Ma-ri-a (Ham học hỏi)</button>
                    <button onclick="chonGoiYDanY73('camxuc')" class="px-3 py-1 bg-sky-50 hover:bg-sky-600 text-sky-800 border border-sky-100 font-bold rounded-lg text-sm">Thầy Cơ-rô-xét-ti (Tận tụy)</button>
                    <button onclick="chonGoiYDanY73('demen')" class="px-3 py-1 bg-emerald-55 bg-opacity-100 hover:bg-opacity-20 text-emerald-800 border border-emerald-100 font-bold rounded-lg text-sm">Dế Mèn (Dũng cảm)</button>
                </div>

                <div class="relative">
                    <textarea id="ans-vn73-vietvan" rows="10" oninput="capNhatBoDemChu73()" placeholder="Hãy viết đoạn văn giới thiệu nhân vật trong một cuốn sách em đã đọc. Hãy nêu tên nhân vật, tên tác phẩm, nêu các đặc điểm nổi bật hoặc bộc lộ tình cảm cảm xúc của em..." class="w-full p-6 text-lg md:text-xl rounded-3xl border-2 border-emerald-100 focus:border-emerald-500 outline-none bg-emerald-50 bg-opacity-5 font-bold leading-relaxed"></textarea>
                    <div class="absolute right-4 bottom-4 px-3 py-1 bg-gray-800 bg-opacity-80 rounded-lg text-xs font-black text-gray-800">
                        Số từ: <span id="word-count-74">0</span> từ (yêu cầu tối thiểu 50 từ)
                    </div>
                </div>

                <div class="flex justify-center gap-4">
                    <button onclick="kiemTraVietBai73()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                        <span>NỘP ĐOẠN VĂN & CHẤM ĐIỂM</span>
                    </button>
                </div>
                <div id="fb-vn73-writing" class="hidden p-5 rounded-2xl font-bold text-base"></div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 BÀI TẬP 2: ĐỌC SOÁT VÀ CHỈNH SỬA -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-6">
            <div class="flex items-start gap-3 border-b border-emerald-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">2</span>
                <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                    Đọc soát và chỉnh sửa đoạn văn của em.
                </h3>
            </div>

            <p class="text-lg md:text-xl text-gray-800 font-bold">👉 Hãy kiểm tra bài viết của em theo các tiêu chuẩn đọc soát dưới đây và tự đánh dấu tích khi đạt:</p>
            
            <!-- Bảng checklist 4 tiêu chuẩn đọc soát (Màu sắc hài hòa, không dùng màu tím) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto py-2">
                <!-- Bố cục đoạn văn (Xanh dương nhạt) -->
                <label class="p-5 rounded-3xl border border-sky-100 bg-sky-50 bg-opacity-40 flex items-start gap-4 cursor-pointer hover:bg-sky-50 transition-all select-none">
                    <input type="checkbox" id="chk-bocuc" class="w-6 h-6 rounded text-sky-800 focus:ring-sky-600 mt-1">
                    <div class="space-y-1">
                        <span class="text-lg font-black text-sky-800 block">Bố cục đoạn văn</span>
                        <span class="text-base text-sky-800 font-bold block">Có đầy đủ phần mở đoạn (giới thiệu nhân vật/tác phẩm), thân đoạn (triển khai các ý) và kết đoạn.</span>
                    </div>
                </label>

                <!-- Nội dung giới thiệu (Xanh lá nhạt) -->
                <label class="p-5 rounded-3xl border border-emerald-100 bg-emerald-50 bg-opacity-40 flex items-start gap-4 cursor-pointer hover:bg-emerald-50 transition-all select-none">
                    <input type="checkbox" id="chk-noidung" class="w-6 h-6 rounded text-emerald-800 focus:ring-emerald-600 mt-1">
                    <div class="space-y-1">
                        <span class="text-lg font-black text-emerald-800 block">Nội dung giới thiệu</span>
                        <span class="text-base text-emerald-800 font-bold block">Tập trung giới thiệu những đặc điểm nổi bật nhất của nhân vật và thể hiện tình cảm của người viết.</span>
                    </div>
                </label>

                <!-- Cách dùng từ, viết câu (Cam nhạt) -->
                <label class="p-5 rounded-3xl border border-amber-100 bg-amber-50 bg-opacity-40 flex items-start gap-4 cursor-pointer hover:bg-amber-50 transition-all select-none">
                    <input type="checkbox" id="chk-dungtu" class="w-6 h-6 rounded text-amber-600 focus:ring-amber-600 mt-1">
                    <div class="space-y-1">
                        <span class="text-lg font-black text-amber-600 block">Cách dùng từ, viết câu</span>
                        <span class="text-base text-amber-600 font-bold block">Sử dụng từ ngữ sinh động, không lặp từ, viết câu rõ nghĩa, không sai lỗi chính tả.</span>
                    </div>
                </label>

                <!-- Dẫn chứng minh họa (Xanh chàm/Indigo nhạt - thay thế cho màu tím trong SGK) -->
                <label class="p-5 rounded-3xl border border-blue-100 bg-blue-50 bg-opacity-40 flex items-start gap-4 cursor-pointer hover:bg-blue-50 transition-all select-none">
                    <input type="checkbox" id="chk-danchung" class="w-6 h-6 rounded text-blue-600 focus:ring-indigo-600 mt-1">
                    <div class="space-y-1">
                        <span class="text-lg font-black text-blue-600 block">Dẫn chứng minh họa</span>
                        <span class="text-base text-blue-600 font-bold block">Có đưa ra được dẫn chứng, hành động, hoặc chi tiết cụ thể từ cuốn sách để làm rõ đặc điểm nhân vật.</span>
                    </div>
                </label>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraChecklist73();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn73-chk" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
        </div>
    </section>

    <!-- 📋 VẬN DỤNG -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-6">
            <div class="flex items-start gap-3 border-b border-emerald-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">🏠</span>
                <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                    Vận dụng: Chia sẻ với người thân
                </h3>
            </div>

            <p class="text-lg md:text-xl text-gray-800 font-bold">👉 Hãy ghi nhận ý kiến, nhận xét hoặc chia sẻ của người thân (bố, mẹ, anh, chị...) sau khi nghe em đọc đoạn văn giới thiệu nhân vật mà em đã viết:</p>
            
            <div class="space-y-4 max-w-4xl mx-auto">
                <textarea id="ans-vn73-vandung" rows="3" placeholder="Ví dụ: Bố khen đoạn văn của em viết cảm xúc, làm bố cũng muốn tìm đọc cuốn sách này..." class="w-full p-4 text-lg md:text-xl rounded-2xl border-2 border-sky-100 outline-none focus:border-sky-500 font-bold bg-sky-50 bg-opacity-100"></textarea>
                <div class="flex justify-end items-center gap-4"><button onclick="kiemTraVanDung73();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-vn73-vd" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBai73Global()" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-emerald-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Khi viết đoạn văn giới thiệu nhân vật trong một cuốn sách, người viết cần tập trung giới thiệu điều gì?",
            "options": [
                "Giá tiền và nơi mua cuốn sách",
                "Đặc điểm nổi bật của nhân vật",
                "Cuộc đời của tác giả viết cuốn sách",
                "Tóm tắt toàn bộ cốt truyện từ đầu đến cuối"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Ngoài việc giới thiệu đặc điểm của nhân vật, đoạn văn cần bộc lộ thêm điều gì?",
            "options": [
                "Mô tả chi tiết nhà in ấn cuốn sách",
                "Tình cảm, cảm xúc của em đối với nhân vật",
                "Kể về các nhân vật phụ khác trong câu chuyện",
                "Đưa ra các ý kiến trái chiều từ mạng xã hội"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Để khuyến khích người đọc tìm đọc cuốn sách, em nên làm gì ở cuối đoạn văn?",
            "options": [
                "Nêu lời khích lệ hoặc giới thiệu tóm tắt sự hấp dẫn của tác phẩm",
                "Viết kết thúc truyện để người đọc biết trước nội dung",
                "Đọc hộ toàn bộ cuốn sách rồi tóm tắt",
                "Ghi rõ địa chỉ hiệu sách gần nhất"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong câu 'Ma-ri-a là người luôn say mê khám phá, thích làm đi làm lại thí nghiệm', đặc điểm nổi bật nào của nhân vật được nhắc đến?",
            "options": [
                "Sự ham học hỏi và say mê khám phá khoa học",
                "Tính cách nóng nảy, thiếu kiên nhẫn",
                "Yêu thích việc uống trà buổi sáng",
                "Rất thích chơi đùa cùng gia nhân"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Đâu là một câu văn thể hiện tình cảm của người viết đối với nhân vật thầy Cơ-rô-xét-ti?",
            "options": [
                "Thầy Cơ-rô-xét-ti dạy học ở trường phổ thông.",
                "Đọc cuốn Những tấm lòng cao cả, tôi vô cùng cảm phục thầy.",
                "Thầy vẫn giữ được các bài viết của học trò ngày ấy.",
                "Cuốn sách đó do tác giả A-mi-xi viết bằng tiếng Ý."
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Phần mở đoạn của đoạn văn giới thiệu nhân vật trong cuốn sách thường có nhiệm vụ gì?",
            "options": [
                "Mô tả ngoại hình của tác giả cuốn sách",
                "Giới thiệu tên nhân vật và tên cuốn sách em đã đọc",
                "Bình luận về giá trị nghệ thuật toàn bài",
                "Đưa ra ý kiến phê bình các nhân vật phụ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Lỗi nào sau đây học sinh cần tránh khi viết đoạn văn giới thiệu nhân vật?",
            "options": [
                "Lặp từ ngữ quá nhiều và viết câu không rõ nghĩa",
                "Sử dụng các câu văn miêu tả đặc điểm nhân vật",
                "Bày tỏ tình cảm, suy nghĩ chân thực của bản thân",
                "Đưa dẫn chứng từ câu chuyện để làm sáng tỏ ý kiến"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Để làm nổi bật đặc điểm của nhân vật, người viết cần đưa ra điều gì kèm theo?",
            "options": [
                "Lời phê bình từ bạn bè trong lớp",
                "Dẫn chứng cụ thể (hành động, lời nói, chi tiết) từ sách",
                "Số lượng trang giấy viết về nhân vật",
                "Các bức tranh vẽ khác ngoài đời thực"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Mục đích chính của việc đọc soát đoạn văn sau khi viết là gì?",
            "options": [
                "Phát hiện và chỉnh sửa các lỗi về bố cục, nội dung, từ ngữ và chính tả",
                "Đo độ dài của đoạn văn xem có vượt quá yêu cầu không",
                "Đếm số lượng câu hỏi có trong đoạn văn",
                "Thay đổi hoàn toàn đề tài và viết một bài mới"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong ví dụ về Ma-ri-a, chi tiết nào làm dẫn chứng chứng minh cô bé 'say mê khám phá'?",
            "options": [
                "Cô bé làm đi làm lại thí nghiệm để giải thích hiện tượng cái đĩa trà",
                "Mỗi khi gia nhân bưng trà lên, cô bé đều từ chối uống",
                "Ma-ri-a hồi 6 tuổi rất thích đi du lịch cùng gia đình",
                "Cuối cùng cô bé phát hiện ra đĩa trà làm bằng sứ rất đẹp"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Câu nào sau đây bộc lộ cảm xúc khích lệ người khác tìm đọc cuốn sách?",
            "options": [
                "Đoạn văn này rất dài và khó viết.",
                "Cuốn sách này cực kỳ hấp dẫn, các bạn hãy tìm đọc nhé!",
                "Nhân vật chính trong truyện tên là Dế Mèn.",
                "Tôi đã đọc xong cuốn sách này vào ngày hôm qua."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ loại nào sau đây dùng để thể hiện rõ nét tình cảm, cảm xúc của người viết?",
            "options": [
                "Đại từ nhân xưng",
                "Tính từ chỉ trạng thái cảm xúc (cảm phục, yêu mến, trân trọng...)",
                "Danh từ riêng chỉ địa danh tác phẩm",
                "Từ ngữ chỉ các thiết bị lưu trữ số"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Dựa vào SGK, 4 phương diện đọc soát bài viết gồm những gì?",
            "options": [
                "Bố cục, nội dung, cách dùng từ/viết câu, dẫn chứng minh họa",
                "Bìa sách, số trang, hình minh họa, nhà xuất bản",
                "Tác giả, tác phẩm, năm xuất bản, giá bán cuốn sách",
                "Lời nói đầu, phần mục lục, danh sách nhân vật, cái kết truyện"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Câu 'Đọc truyện Dế Mèn phiêu lưu ký, em cảm thấy Dế Mèn là một nhân vật dũng cảm' thuộc phần nào trong đoạn văn?",
            "options": [
                "Mở đoạn",
                "Thân đoạn",
                "Kết đoạn",
                "Phần phụ lục cuốn sách"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Từ 'say mê' trong đoạn văn ví dụ về Ma-ri-a thuộc loại từ loại nào?",
            "options": [
                "Tính từ (hoặc động từ trạng thái)",
                "Danh từ riêng",
                "Đại từ chỉ định",
                "Quan hệ từ"
            ],
            "answer": 0,
            "level": 2
        }
    ]
};

// --- KHỞI ĐỘNG ---
window.kiemTraKhoiDong73 = function() {
    const fb = document.getElementById('fb-vn73-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    const o1 = document.getElementById('kd-opt-1')?.value;
    const o2 = document.getElementById('kd-opt-2')?.value;
    const o3 = document.getElementById('kd-opt-3')?.value;
    const o4 = document.getElementById('kd-opt-4')?.value;

    if (!o1 || !o2 || !o3 || !o4) {
        fb.innerHTML = "⚠️ Em hãy chọn đáp án cho cả 4 nhân vật nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    const o1Dung = o1 === 'ma-ri-a';
    const o2Dung = o2 === 'nhung-tam-long';
    const o3Dung = o3 === 'de-men';
    const o4Dung = o4 === 'ngoi-sao';

    if (o1Dung && o2Dung && o3Dung && o4Dung) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã ghép đôi hoàn toàn chính xác các nhân vật nổi bật với các tác phẩm tương ứng của họ.";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "❌ Ghép đôi chưa chính xác rồi. Hãy suy nghĩ kỹ và lựa chọn lại nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- HIGHLIGHT VÍ DỤ ---
window.highlightViDu73 = function(loai) {
    // Reset styles
    document.getElementById('vd-dactinh-1').className = "transition-all";
    document.getElementById('vd-dactinh-2').className = "transition-all";
    document.getElementById('vd-camxuc-1').className = "transition-all";

    if (loai === 'dactinh') {
        document.getElementById('vd-dactinh-1').className = "bg-amber-500 text-amber-900 font-black transition-all px-1.5 rounded";
        document.getElementById('vd-dactinh-2').className = "bg-amber-500 text-amber-900 font-black transition-all px-1.5 rounded";
    } else if (loai === 'camxuc') {
        document.getElementById('vd-camxuc-1').className = "bg-sky-600 text-sky-900 font-black transition-all px-1.5 rounded";
    }
};

window.resetHighlightViDu73 = function() {
    document.getElementById('vd-dactinh-1').className = "transition-all";
    document.getElementById('vd-dactinh-2').className = "transition-all";
    document.getElementById('vd-camxuc-1').className = "transition-all";
};

// --- GỢI Ý DÀN Ý NHANH ---
window.chonGoiYDanY73 = function(loai) {
    const area = document.getElementById('ans-vn73-vietvan');
    if (!area) return;

    if (loai === 'dactinh') {
        area.value = "Trong các cuốn truyện viết về cuộc đời các nhà khoa học, em thích nhất nhân vật cô bé Ma-ri-a. Ma-ri-a là một cô bé vô cùng ưa quan sát và đam mê khám phá thế giới xung quanh. Khi mới lên 6 tuổi, cô bé đã tự mình quan sát sự dịch chuyển của chiếc tách đựng trà trên chiếc đĩa ẩm nước, sau đó say mê làm đi làm lại thí nghiệm để tự tìm ra nguyên nhân và giải thích cặn kẽ hiện tượng kỳ lạ ấy. Đức tính ham học hỏi và kiên trì ấy đã truyền cảm hứng học tập rất lớn cho em.";
    } else if (loai === 'camxuc') {
        area.value = "Sau khi đọc xong cuốn sách Những tấm lòng cao cả của tác giả A-mi-xi, em vô cùng cảm động và trân quý nhân vật thầy Cơ-rô-xét-ti. Thầy là một tấm gương nhà giáo tận tụy, hết lòng yêu thương học sinh của mình. Dù nhiều năm trôi qua, thầy vẫn nhớ chính xác tên, vị trí ngồi và tính nết của từng học trò, thậm chí nâng niu giữ gìn những bài viết của các học trò ngày xưa như báu vật. Đọc những trang sách ấy, em càng thêm trân trọng thầy cô giáo của mình.";
    } else if (loai === 'demen') {
        area.value = "Em đã từng đọc rất nhiều cuốn truyện thiếu nhi, nhưng nhân vật để lại ấn tượng sâu đậm nhất là chú Dế Mèn trong tác phẩm Dế Mèn phiêu lưu ký của nhà văn Tô Hoài. Dế Mèn tuy ban đầu có những nông nổi thời trẻ tuổi, nhưng sau đó đã rút ra bài học đắt giá, dũng cảm lên đường ngao du thiên hạ để học hỏi những điều hay. Chú luôn sẵn sàng hành hiệp trượng nghĩa, bênh vực kẻ yếu đuối như chị Nhà Trò trước bọn nhện hung ác. Lòng dũng cảm và tinh thần nghĩa hiệp của Dế Mèn làm em rất khâm phục.";
    }
    capNhatBoDemChu73();
};

window.capNhatBoDemChu73 = function() {
    const text = document.getElementById('ans-vn73-vietvan')?.value.trim() || "";
    const countSpan = document.getElementById('word-count-74');
    if (!countSpan) return;

    const words = text ? text.split(/\\s+/).length : 0;
    countSpan.innerText = words;
};

// --- KIỂM TRA VIẾT BÀI ---
window.kiemTraVietBai73 = function() {
    const text = document.getElementById('ans-vn73-vietvan')?.value.trim();
    const fb = document.getElementById('fb-vn73-writing');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy hoàn thành đoạn văn giới thiệu nhân vật của mình trước khi nộp bài nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    const words = text.split(/\\s+/).length;
    if (words < 40) {
        fb.innerHTML = `⚠️ Đoạn văn của em còn hơi ngắn (mới có ${words} từ). Hãy mở rộng thêm các chi tiết, dẫn chứng hoặc thể hiện thêm cảm xúc để đoạn văn đạt chất lượng tốt nhất nhé!`;
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 NHẬN XÉT TỪ AI THẦY E:</span>
            <p class="text-lg font-bold">"Rất tuyệt vời! Em đã viết được một đoạn văn giới thiệu nhân vật cuốn sách vô cùng cảm xúc. Đoạn văn có bố cục rõ ràng, nêu bật được đặc điểm nổi bật và có dẫn chứng hành động cụ thể để củng cố ý kiến. Cách dùng từ giàu hình ảnh, thể hiện tốt tình cảm của bản thân."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold text-xs rounded-full shadow-sm mt-2">Đạt yêu cầu bài tập viết đoạn văn ✓</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-373";
};

// --- BÀI TẬP 2: ĐỌC SOÁT CHECKLIST ---
window.kiemTraChecklist73 = function() {
    const fb = document.getElementById('fb-vn73-chk');
    if (!fb) return;
    fb.classList.remove('hidden');

    const c1 = document.getElementById('chk-bocuc')?.checked;
    const c2 = document.getElementById('chk-noidung')?.checked;
    const c3 = document.getElementById('chk-dungtu')?.checked;
    const c4 = document.getElementById('chk-danchung')?.checked;

    if (!c1 || !c2 || !c3 || !c4) {
        fb.innerHTML = "⚠️ Em hãy tích chọn xác nhận đã soát lỗi ở cả 4 tiêu chí cốt lõi (bố cục, nội dung, cách dùng từ, dẫn chứng) nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    fb.innerHTML = "🎉 Cảm ơn em đã hoàn tất việc rà soát và sửa lỗi đoạn văn! Tinh thần tự giác sửa bài viết là một trải nghiệm rất có ích để tiến bộ từng ngày.";
    fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
};

// --- BÀI TẬP 3: VẬN DỤNG ---
window.kiemTraVanDung73 = function() {
    const text = document.getElementById('ans-vn73-vandung')?.value.trim();
    const fb = document.getElementById('fb-vn73-vd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy nhập ý kiến, phản hồi chia sẻ của người thân vào ô văn bản trên nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm animate-bounce";
        return;
    }

    fb.innerHTML = "🎉 Cảm ơn em đã chia sẻ ý kiến phản hồi của người thân! Sự khích lệ từ gia đình sẽ giúp em thêm tự tin viết văn mỗi ngày.";
    fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.nopBai73Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 74',
            '✍️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">✍️</span><p class="text-2xl md:text-3xl font-bold text-emerald-800">Chúc mừng em đã hoàn thành bài viết hôm nay!</p><p class="text-lg text-gray-800 mt-3">Hãy luôn tích cực đọc thêm nhiều sách hay và rèn luyện kỹ năng giới thiệu nhân vật để lan tỏa thói quen đọc sách bổ ích nhé.</p></div>'
        );
    }
};
