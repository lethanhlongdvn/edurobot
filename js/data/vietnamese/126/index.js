export const lesson126 = {
    "topic": "Tiếng Việt 5",
    "week": "18",
    "period": "126",
    "title": "KIỂM TRA ĐỌC HIỂU – VIẾT (TIẾT 7)",
    "desc": "Đọc hiểu văn bản 'Những điều thú vị về chim di cư' (Câu 5 - Câu 10); Thực hành viết đoạn văn theo đề tự chọn.",
    "subject": "Viết",
    "theme": "Đánh giá cuối học kì I",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-sky-900">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-sky-950 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu đánh giá Tiết 7
        </h3>
        <ul class="space-y-3 text-sky-900 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-600 font-black">•</span>
                Hoàn thành phần Đọc hiểu chi tiết văn bản "Những điều thú vị về chim di cư" (Câu 5 - Câu 10).
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-600 font-black">•</span>
                Nắm vững chức năng của dấu gạch ngang, từ đồng nghĩa và kĩ năng sử dụng kết từ trong câu.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-600 font-black">•</span>
                Thực hành viết đoạn văn cảm thụ văn học hoặc giới thiệu nhân vật đầy cảm xúc theo đề bài tự chọn và được AI Thầy E đánh giá.
            </li>
        </ul>
    </div>

    <!-- 📖 PHẦN A (Tiếp theo): Đọc hiểu văn bản (Câu 5 - Câu 10) -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">A</span>
            <h3 class="text-2xl md:text-3xl font-black text-sky-950">Đọc hiểu (Tiếp theo):</h3>
        </div>

        <!-- Ảnh minh họa SGK trang 164 -->
        <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-sky-100 cursor-pointer" 
             onclick="window.showMathFeedback('Đọc hiểu & Viết', '📝', '<div class=\'text-center p-4\'><img src=\'assets/images/tiengviet_5_1/162-164/164.png\' class=\'max-h-[75vh] mx-auto rounded-2xl shadow-md object-contain\' alt=\'Đọc hiểu & Viết\'></div>')">
            <img src="assets/images/tiengviet_5_1/162-164/164.png" class="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" alt="Đọc hiểu & Viết">
            <div class="p-2 text-center text-xs font-bold text-sky-700">🔍 Click để xem toàn màn hình SGK trang 164</div>
        </div>

        <div class="space-y-6 max-w-4xl mx-auto">
            <!-- Câu hỏi 5 -->
            <div class="bg-sky-50/30 p-5 rounded-2xl border border-sky-100 space-y-3">
                <p class="font-black text-lg text-sky-950">5. Trong câu: "Như vậy, năng lượng, thức ăn và sự sinh sản chính là chìa khoá để các nhà khoa học giải mã hành vi thú vị này ở loài chim.", hành vi thú vị này là hành vi nào?</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-sky-200 cursor-pointer hover:bg-sky-50 font-bold text-base">
                        <input type="radio" name="ans-vn126-c5" id="ans-vn126-c5a" class="w-5 h-5 text-sky-600">
                        <span>A. đi theo chuỗi thức ăn</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-sky-200 cursor-pointer hover:bg-sky-50 font-bold text-base">
                        <input type="radio" name="ans-vn126-c5" id="ans-vn126-c5b" class="w-5 h-5 text-sky-600">
                        <span>B. sinh sản và nuôi con</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-sky-200 cursor-pointer hover:bg-sky-50 font-bold text-base">
                        <input type="radio" name="ans-vn126-c5" id="ans-vn126-c5c" class="w-5 h-5 text-sky-600">
                        <span>C. di cư</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-sky-200 cursor-pointer hover:bg-sky-50 font-bold text-base">
                        <input type="radio" name="ans-vn126-c5" id="ans-vn126-c5d" class="w-5 h-5 text-sky-600">
                        <span>D. tránh rét</span>
                    </label>
                </div>
                <button onclick="kiemTraCauHoi5Vn126()" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button>
                <div id="fb-vn126-c5" class="hidden p-3 rounded-xl text-sm font-bold text-center"></div>
            </div>

            <!-- Câu hỏi 6 (Sơ đồ cấu trúc bài đọc) -->
            <div class="bg-sky-50/30 p-5 rounded-2xl border border-sky-100 space-y-4">
                <p class="font-black text-lg text-sky-950">6. Em hãy hoàn thành cấu trúc sơ đồ bài đọc "Chim di cư" bằng cách điền từ gợi ý thích hợp:</p>
                <div class="p-4 bg-sky-600 text-white rounded-2xl font-bold text-sm leading-relaxed">
                    💡 Gợi ý các cụm từ điền vào chỗ trống:<br>
                    <strong>[Giới thiệu tập tính]</strong> / <strong>[Đặt câu hỏi định hướng]</strong> / <strong>[Lí do di cư]</strong> / <strong>[Năng lượng và thức ăn]</strong> / <strong>[Phương thức định hướng]</strong> / <strong>[Mốc bờ biển và dãy núi]</strong>
                </div>

                <div class="space-y-4 serif-font text-base md:text-lg">
                    <div class="p-4 bg-white rounded-xl border border-sky-200 space-y-2">
                        <span class="font-black text-sky-950">Đoạn 1 (Mở đầu):</span>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <input id="ans-vn126-c6d1a" type="text" placeholder="Chi tiết 1..." class="p-2 border rounded-lg font-bold bg-white text-gray-800 outline-none">
                            <input id="ans-vn126-c6d1b" type="text" placeholder="Chi tiết 2..." class="p-2 border rounded-lg font-bold bg-white text-gray-800 outline-none">
                        </div>
                    </div>

                    <div class="p-4 bg-white rounded-xl border border-sky-200 space-y-2">
                        <span class="font-black text-sky-950">Đoạn 2 (Lí giải):</span>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <input id="ans-vn126-c6d2a" type="text" placeholder="Chi tiết 1..." class="p-2 border rounded-lg font-bold bg-white text-gray-800 outline-none">
                            <input id="ans-vn126-c6d2b" type="text" placeholder="Chi tiết 2..." class="p-2 border rounded-lg font-bold bg-white text-gray-800 outline-none">
                        </div>
                    </div>

                    <div class="p-4 bg-white rounded-xl border border-sky-200 space-y-2">
                        <span class="font-black text-sky-950">Đoạn 3 (Định vị):</span>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <input id="ans-vn126-c6d3a" type="text" placeholder="Chi tiết 1..." class="p-2 border rounded-lg font-bold bg-white text-gray-800 outline-none">
                            <input id="ans-vn126-c6d3b" type="text" placeholder="Chi tiết 2..." class="p-2 border rounded-lg font-bold bg-white text-gray-800 outline-none">
                        </div>
                    </div>
                </div>
                <div class="flex justify-end items-center gap-4"><button onclick="kiemTraCauHoi6Vn126();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-vn126-c6" class="hidden p-3 rounded-xl text-sm font-bold text-center"></div>
            </div>

            <!-- Câu hỏi 7 -->
            <div class="bg-sky-50/30 p-5 rounded-2xl border border-sky-100 space-y-3">
                <p class="font-black text-lg text-sky-950">7. Những từ ngữ nào được dùng để đánh dấu việc trình bày các lí do chim di cư ở Đoạn 2?</p>
                <input id="ans-vn126-c7" type="text" placeholder="Ví dụ: trước hết, thứ hai..." class="w-full p-3 rounded-xl border border-sky-200 focus:border-sky-500 font-bold bg-white text-gray-800 text-base outline-none">
                <button onclick="kiemTraCauHoi7Vn126()" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button>
                <div id="fb-vn126-c7" class="hidden p-3 rounded-xl text-sm font-bold"></div>
            </div>

            <!-- Câu hỏi 8 -->
            <div class="bg-sky-50/30 p-5 rounded-2xl border border-sky-100 space-y-3">
                <p class="font-black text-lg text-sky-950">8. Dấu gạch ngang trong câu văn: "Các loại hoa trái, côn trùng, sâu bọ hoặc động vật cỡ nhỏ - “thực đơn” yêu thích của chim di cư - sẽ trở nên khan hiếm vào mùa đông." được dùng để làm gì?</p>
                <div class="grid grid-cols-1 gap-2">
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-sky-200 cursor-pointer hover:bg-sky-50 font-bold text-base">
                        <input type="radio" name="ans-vn126-c8" id="ans-vn126-c8a" class="w-5 h-5 text-sky-600">
                        <span>A. Dùng để đánh dấu lời đối thoại.</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-sky-200 cursor-pointer hover:bg-sky-50 font-bold text-base">
                        <input type="radio" name="ans-vn126-c8" id="ans-vn126-c8b" class="w-5 h-5 text-sky-600">
                        <span>B. Dùng để đánh dấu bộ phận chú thích, giải thích.</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-sky-200 cursor-pointer hover:bg-sky-50 font-bold text-base">
                        <input type="radio" name="ans-vn126-c8" id="ans-vn126-c8c" class="w-5 h-5 text-sky-600">
                        <span>C. Dùng để đánh dấu các ý liệt kê trong danh sách.</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-sky-200 cursor-pointer hover:bg-sky-50 font-bold text-base">
                        <input type="radio" name="ans-vn126-c8" id="ans-vn126-c8d" class="w-5 h-5 text-sky-600">
                        <span>D. Dùng để nối các từ ngữ trong một liên danh.</span>
                    </label>
                </div>
                <button onclick="kiemTraCauHoi8Vn126()" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button>
                <div id="fb-vn126-c8" class="hidden p-3 rounded-xl text-sm font-bold text-center"></div>
            </div>

            <!-- Câu hỏi 9 -->
            <div class="bg-sky-50/30 p-5 rounded-2xl border border-sky-100 space-y-3">
                <p class="font-black text-lg text-sky-950">9. Có thể dùng từ ngữ nào để thay thế cho từ "nhà" trong câu văn cuối bài đọc?</p>
                <input id="ans-vn126-c9" type="text" placeholder="Ví dụ: tổ ấm, nơi ở, tổ..." class="w-full p-3 rounded-xl border border-sky-200 focus:border-sky-500 font-bold bg-white text-gray-800 text-base outline-none">
                <button onclick="kiemTraCauHoi9Vn126()" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button>
                <div id="fb-vn126-c9" class="hidden p-3 rounded-xl text-sm font-bold"></div>
            </div>

            <!-- Câu hỏi 10 -->
            <div class="bg-sky-50/30 p-5 rounded-2xl border border-sky-100 space-y-3">
                <p class="font-black text-lg text-sky-950">10. Viết một câu về chim di cư, trong câu có sử dụng 1 kết từ (Gợi ý: nhưng, và, vì, nên...):</p>
                <input id="ans-vn126-c10" type="text" placeholder="Ví dụ: Chim di cư bay rất xa nhưng chúng vẫn nhớ đường về nhà." class="w-full p-3 rounded-xl border border-sky-200 focus:border-sky-500 font-bold bg-white text-gray-800 text-base outline-none">
                <button onclick="kiemTraCauHoi10Vn126()" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button>
                <div id="fb-vn126-c10" class="hidden p-3 rounded-xl text-sm font-bold"></div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-sky-900">
    <!-- 📋 PHẦN B: LUYỆN VIẾT TỰ CHỌN -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">B</span>
            <h3 class="text-2xl md:text-3xl font-black text-sky-950">Phần Viết bài tự chọn:</h3>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
            <div class="p-5 bg-emerald-50/50 border border-emerald-200 rounded-2xl">
                <p class="font-bold text-emerald-950 mb-2">💡 Em chọn một trong hai đề bài dưới đây để thực hành:</p>
                <ul class="space-y-2 text-sky-950 font-bold ml-4 text-base">
                    <li>• <strong>Đề 1:</strong> Viết đoạn văn giới thiệu một nhân vật trong cuốn sách em đã đọc hoặc bộ phim hoạt hình em đã xem.</li>
                    <li>• <strong>Đề 2:</strong> Viết đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ ca ngợi tình cảm gia đình.</li>
                </ul>
            </div>

            <!-- Chọn đề -->
            <div class="flex justify-end items-center gap-4">
                <button onclick="selectDeVn126(1)" id="btn-vn126-de1" class="flex-1 py-3 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-xl text-base shadow-sm border border-sky-300 transition-all">CHỌN ĐỀ 1</button>
                <button onclick="selectDeVn126(2)" id="btn-vn126-de2" class="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-black rounded-xl text-base shadow-sm border border-gray-200 transition-all">CHỌN ĐỀ 2</button>
            </div>

            <!-- Gợi ý viết theo đề -->
            <div id="fb-vn126-hint" class="p-4 bg-sky-50/30 border border-sky-100 rounded-xl font-bold text-sm text-sky-850">
                ✏️ <strong>Gợi ý Đề 1:</strong> Giới thiệu nhân vật tài năng/đặc biệt, tên phim/sách, đặc điểm ngoại hình/hành động làm em ấn tượng, cảm nghĩ của em về nhân vật đó.
            </div>

            <!-- Ô nhập bài viết tương tác và Speech to Text -->
            <div class="relative bg-amber-50/20 border-2 border-sky-300 rounded-[32px] p-6 shadow-inner">
                <!-- Nút micro thuyết trình -->
                <div class="absolute right-4 top-4 z-10">
                    <button id="btn-vn126-record" onclick="toggleRecord126()" class="p-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center" title="Nói để nhập văn bản">
                        <span id="mic-icon-126" class="text-xl">🎤</span>
                    </button>
                </div>
                <textarea id="ans-vn126-viet" rows="8" placeholder="Em nhập đoạn văn viết cảm nghĩ tại đây hoặc nhấn nút Micro để bắt đầu thuyết trình bằng giọng nói của em..." class="w-full p-4 text-xl rounded-2xl border border-gray-200 outline-none focus:border-sky-500 font-bold bg-white text-gray-800 leading-relaxed pr-14"></textarea>
                <div id="status-vn126-record" class="text-sm font-bold text-rose-500 mt-2 hidden">Đang nghe em nói, hãy bắt đầu thuyết trình nhé...</div>
            </div>

            <!-- Nút nộp chấm bài -->
            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraBaiVietVn126();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            
            <div id="fb-vn126-viet" class="hidden p-5 rounded-2xl font-bold text-lg shadow-sm"></div>

            <!-- Checklist tự soát lỗi -->
            <div class="bg-sky-50/20 p-6 rounded-[28px] border border-sky-100 space-y-4">
                <h4 class="font-black text-lg text-sky-950 flex items-center gap-2">
                    <span>✓</span> Các tiêu chí tự soát lỗi bài viết của em:
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-sky-200 cursor-pointer">
                        <input type="checkbox" id="ck-vn126-s1" class="w-5 h-5 text-emerald-600">
                        <span class="font-bold text-sm text-sky-900">Nội dung bám sát yêu cầu đề bài</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-sky-200 cursor-pointer">
                        <input type="checkbox" id="ck-vn126-s2" class="w-5 h-5 text-emerald-600">
                        <span class="font-bold text-sm text-sky-900">Bộc lộ cảm xúc, suy nghĩ chân thực</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-sky-200 cursor-pointer">
                        <input type="checkbox" id="ck-vn126-s3" class="w-5 h-5 text-emerald-600">
                        <span class="font-bold text-sm text-sky-900">Câu văn mạch lạc, từ ngữ phong phú</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 bg-white rounded-xl border border-sky-200 cursor-pointer">
                        <input type="checkbox" id="ck-vn126-s4" class="w-5 h-5 text-emerald-600">
                        <span class="font-bold text-sm text-sky-900">Không mắc lỗi chính tả, dùng từ</span>
                    </label>
                </div>
                <div class="flex justify-center">
                    <button onclick="submitChecklistVn126()" class="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-lg transition-all">Hoàn thành soát lỗi</button>
                </div>
                <div id="fb-vn126-checklist" class="hidden p-3 rounded-xl text-sm font-bold text-center"></div>
            </div>

            <!-- Nút hoàn tất bài đánh giá -->
            <div class="flex justify-center pt-4 border-t border-sky-100">
                <button onclick="submitVn126Global()" class="px-10 py-4 bg-sky-600 hover:bg-sky-700 text-white font-black text-xl rounded-2xl shadow-lg active:scale-95 transition-all">
                    🏁 HOÀN THÀNH BÀI ĐÁNH GIÁ CUỐI KÌ I
                </button>
            </div>
        </div>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Trong câu: 'Các loại hoa trái, côn trùng,... - “thực đơn” yêu thích... - sẽ trở nên khan hiếm vào mùa đông.', dấu gạch ngang dùng để làm gì?",
            "options": [
                "Đánh dấu các ý liệt kê",
                "Đánh dấu lời đối thoại của nhân vật",
                "Đánh dấu bộ phận chú thích, giải thích",
                "Nối các từ ngữ trong một liên danh"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Câu nào dưới đây sử dụng dấu gạch ngang với chức năng đánh dấu lời nói trực tiếp của nhân vật?",
            "options": [
                "Hà Nội - Thủ đô của nước Việt Nam - có lịch sử ngàn năm văn hiến.",
                "- Cậu có đi xem xiếc tối nay không? - Nam hỏi Hải.",
                "Chúng ta cần chuẩn bị: - Sách giáo khoa; - Bút chì; - Thước kẻ.",
                "Tuyến đường sắt Hà Nội - Hải Phòng dài khoảng 102 km."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ ngữ nào có thể dùng để thay thế từ 'nhà' trong câu: 'các loài chim dù di cư rất xa vẫn quay trở về đúng “nhà” của mình'?",
            "options": [
                "Nơi ở, tổ ấm",
                "Phương trời xa",
                "Đường bay",
                "Bầy đàn"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong câu: 'Trước hết, chim di cư để tránh sự lạnh giá của mùa đông.', từ 'tránh' thuộc từ loại nào?",
            "options": [
                "Danh từ",
                "Động từ",
                "Tính từ",
                "Kết từ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'khan hiếm' đồng nghĩa với từ nào sau đây?",
            "options": [
                "Dồi dào",
                "Ít ỏi, thiếu thốn",
                "Phong phú",
                "Tràn trề"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong câu: 'Mặc dù chim di cư rất xa nhưng chúng vẫn nhớ đường về.', từ 'nhưng' là loại từ gì?",
            "options": [
                "Danh từ",
                "Động từ",
                "Kết từ",
                "Đại từ"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Cặp kết từ nào thích hợp để điền vào chỗ trống: '... thời tiết lạnh giá ... chim phải bay đi di cư.'?",
            "options": [
                "Nếu... thì...",
                "Tuy... nhưng...",
                "Vì... nên...",
                "Hễ... thì..."
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Từ nào sau đây là từ chỉ đặc điểm thời tiết mùa đông được nhắc tới ở Đoạn 2?",
            "options": [
                "Khắc nghiệt, lạnh giá",
                "Ấm áp, ôn hòa",
                "Nắng nóng, oi bức",
                "Mát mẻ, trong lành"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Câu văn nào dưới đây sử dụng đúng một kết từ?",
            "options": [
                "Chim di cư có đôi cánh khoẻ mạnh di chuyển xa.",
                "Đàn chim bay lượn và ca hát trên bầu trời xanh.",
                "Bồ nông bồ câu hải âu đều là chim di cư.",
                "Những chú chim nhỏ tự tìm đường đi tránh rét."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi viết đoạn văn thể hiện tình cảm về một bài thơ ca ngợi gia đình, em cần tập trung thể hiện điều gì?",
            "options": [
                "Kể lại toàn bộ cốt truyện của bài thơ",
                "Nêu cảm xúc, lòng biết ơn đối với người thân qua các từ ngữ gợi tả",
                "Nhận xét chi tiết về tiểu sử của tác giả bài thơ",
                "So sánh bài thơ đó với các tác phẩm nước ngoài khác"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Phần mở đầu của đoạn văn giới thiệu nhân vật cần có thông tin gì?",
            "options": [
                "Giới thiệu tên nhân vật và tên cuốn sách hoặc bộ phim chứa nhân vật đó",
                "Liệt kê tất cả các nhân vật phụ khác",
                "Nêu bài học rút ra và lời khuyên cho người đọc",
                "Kể lại đoạn kết thúc của cuốn sách"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đâu là từ ngữ kết nối ý thường dùng khi viết đoạn văn?",
            "options": [
                "Nhà cửa",
                "Bên cạnh đó, Ngoài ra",
                "Chim di cư",
                "Chân trời xa"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi viết đoạn văn, em cần chú ý lỗi nào sau đây?",
            "options": [
                "Lỗi chính tả",
                "Lỗi dùng từ không đúng nghĩa",
                "Lỗi viết câu thiếu thành phần chính",
                "Tất cả các lỗi trên"
            ],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Từ ngữ nào dùng để kết nối ý nêu lí do thứ hai ở đoạn văn trong bài đọc?",
            "options": [
                "Trước hết",
                "Thứ hai",
                "Một lí do nữa",
                "Như vậy"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong câu: 'Như vậy, năng lượng, thức ăn và sự sinh sản chính là chìa khoá...', cụm từ 'Như vậy' có tác dụng gì?",
            "options": [
                "Mở đầu đoạn văn",
                "Đưa ra lí do đầu tiên",
                "Liên kết kết luận dựa trên các lí do đã nêu trước đó",
                "Liệt kê các loài chim"
            ],
            "answer": 2,
            "level": 1
        }
    ]
};

// Biến lưu trữ trạng thái đề đang chọn (Đề 1 mặc định)
let deDangChon126 = 1;

// 1. Hàm chọn đề viết bài
window.selectDeVn126 = function(deNum) {
    deDangChon126 = deNum;
    const btn1 = document.getElementById('btn-vn126-de1');
    const btn2 = document.getElementById('btn-vn126-de2');
    const hint = document.getElementById('fb-vn126-hint');
    if (!btn1 || !btn2 || !hint) return;

    if (deNum === 1) {
        btn1.className = 'flex-1 py-3 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-xl text-base shadow-sm border border-sky-300 transition-all';
        btn2.className = 'flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-black rounded-xl text-base shadow-sm border border-gray-200 transition-all';
        hint.innerHTML = '✏️ <strong>Gợi ý Đề 1:</strong> Giới thiệu nhân vật tài năng/đặc biệt, tên phim/sách, đặc điểm ngoại hình/hành động làm em ấn tượng, cảm nghĩ của em về nhân vật đó.';
    } else {
        btn2.className = 'flex-1 py-3 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-xl text-base shadow-sm border border-sky-300 transition-all';
        btn1.className = 'flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-black rounded-xl text-base shadow-sm border border-gray-200 transition-all';
        hint.innerHTML = '✏️ <strong>Gợi ý Đề 2:</strong> Nêu rõ tên bài thơ ca ngợi tình cảm gia đình (ví dụ: "Bố đứng nhìn biển cả"), cảm xúc chung, hình ảnh thơ làm em rung động và ý nghĩa đối với bản thân.';
    }
};

// 2. Chức năng thu âm Speech to Text
let boGhiAm126 = null;
window.toggleRecord126 = function() {
    const textarea = document.getElementById('ans-vn126-viet');
    const statusDiv = document.getElementById('status-vn126-record');
    const micIcon = document.getElementById('mic-icon-126');
    if (!textarea || !statusDiv || !micIcon) return;

    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
        alert('Trình duyệt của em không hỗ trợ chức năng nhận diện giọng nói. Hãy nhập bài bằng bàn phím nhé!');
        return;
    }

    if (boGhiAm126) {
        boGhiAm126.stop();
        return;
    }

    try {
        boGhiAm126 = new SpeechRec();
        boGhiAm126.continuous = false;
        boGhiAm126.lang = 'vi-VN';
        boGhiAm126.interimResults = false;

        boGhiAm126.onstart = function() {
            statusDiv.classList.remove('hidden');
            micIcon.innerText = '🛑';
        };

        boGhiAm126.onresult = function(event) {
            const resultText = event.results[0][0].transcript;
            textarea.value = textarea.value ? textarea.value + ' ' + resultText : resultText;
        };

        boGhiAm126.onerror = function(event) {
            console.error('Lỗi nhận dạng giọng nói:', event.error);
            statusDiv.innerText = '❌ Gặp lỗi thu âm: ' + event.error + '. Vui lòng thử lại!';
        };

        boGhiAm126.onend = function() {
            statusDiv.classList.add('hidden');
            micIcon.innerText = '🎤';
            boGhiAm126 = null;
        };

        boGhiAm126.start();
    } catch (e) {
        console.error(e);
        statusDiv.innerText = '❌ Không thể bắt đầu thu âm.';
        statusDiv.classList.remove('hidden');
    }
};

// 3. AI Thầy E chấm đoạn văn cảm thụ hoặc giới thiệu
window.kiemTraBaiVietVn126 = function() {
    const text = document.getElementById('ans-vn126-viet')?.value.trim();
    const fb = document.getElementById('fb-vn126-viet');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E nhắc nhở:</h5>
                    <p class="text-lg">Em hãy nhập bài viết của mình trước khi gửi thầy chấm nhé!</p>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-955 border border-amber-305';
        return;
    }

    const words = text.split(/\s+/).filter(w => w.length > 0);
    if (words.length < 50) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-rose-900">AI Thầy E góp ý:</h5>
                    <p class="text-lg">Đoạn văn hơi ngắn (chỉ có ${words.length} từ). Một đoạn văn biểu cảm hoặc giới thiệu hoàn chỉnh cần tối thiểu 50 từ để bộc lộ rõ ý kiến và cảm xúc sâu sắc của em.</p>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-rose-100 text-rose-955 border border-rose-305';
        return;
    }

    // Đánh giá dựa trên đề bài đang chọn
    if (deDangChon126 === 1) {
        // Đề 1: Giới thiệu nhân vật
        const keywords = ['nhân vật', 'phim', 'sách', 'tài năng', 'yêu thích', 'ấn tượng', 'khâm phục', 'đọc', 'xem'];
        const matches = keywords.filter(kw => text.toLowerCase().includes(kw));

        if (matches.length < 2) {
            fb.innerHTML = `
                <div class="flex items-start gap-4">
                    <span class="text-2xl md:text-3xl">👨‍🏫</span>
                    <div>
                        <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E góp ý:</h5>
                        <p class="text-lg">Đoạn văn Đề 1 của em cần bổ sung thêm các thông tin về cuốn sách/phim hoạt hình và nêu rõ vì sao em lại yêu thích nhân vật đó nhé.</p>
                    </div>
                </div>
            `;
            fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-955 border border-amber-305';
            return;
        }

        fb.innerHTML = `
            <div class="flex items-start gap-4 animate-fade-in">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-emerald-950">AI Thầy E chấm Đề 1:</h5>
                    <p class="text-lg mb-2">Đoạn văn giới thiệu nhân vật rất sinh động! Em đã chọn được nhân vật ấn tượng, mô tả hành động đặc sắc và bộc lộ được tình cảm yêu mến một cách chân thực.</p>
                    <span class="text-xl font-black bg-emerald-500 text-white px-3 py-1 rounded-lg shadow-sm">Thầy chấm đạt: 10/10 điểm</span>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-emerald-100 text-emerald-950 border border-emerald-305 shadow-md';
    } else {
        // Đề 2: Cảm nhận bài thơ gia đình
        const keywords = ['bài thơ', 'tình cảm', 'gia đình', 'bố', 'mẹ', 'con', 'cảm xúc', 'ấm áp', 'yêu thương', 'biển cả'];
        const matches = keywords.filter(kw => text.toLowerCase().includes(kw));

        if (matches.length < 2) {
            fb.innerHTML = `
                <div class="flex items-start gap-4">
                    <span class="text-2xl md:text-3xl">👨‍🏫</span>
                    <div>
                        <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E góp ý:</h5>
                        <p class="text-lg">Đoạn văn Đề 2 của em cần nói rõ tên bài thơ ca ngợi tình cảm gia đình (ví dụ bài "Bố đứng nhìn biển cả") và bộc lộ cảm xúc sâu sắc hơn về hình ảnh thơ nhé.</p>
                    </div>
                </div>
            `;
            fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-955 border border-amber-305';
            return;
        }

        fb.innerHTML = `
            <div class="flex items-start gap-4 animate-fade-in">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-emerald-950">AI Thầy E chấm Đề 2:</h5>
                    <p class="text-lg mb-2">Lời văn của em đong đầy cảm xúc! Em cảm nhận rất sâu sắc về bài thơ tình cảm gia đình, nêu được các hình ảnh làm rung động trái tim và diễn đạt mạch lạc.</p>
                    <span class="text-xl font-black bg-emerald-500 text-white px-3 py-1 rounded-lg shadow-sm">Thầy chấm đạt: 10/10 điểm</span>
                </div>
            </div>
        `;
        fb.className = 'p-5 rounded-2xl font-bold bg-emerald-100 text-emerald-955 border border-emerald-305 shadow-md';
    }
};

// 4. Kiểm tra câu hỏi 5 phần đọc hiểu
window.kiemTraCauHoi5Vn126 = function() {
    const radioC = document.getElementById('ans-vn126-c5c');
    const fb = document.getElementById('fb-vn126-c5');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (radioC && radioC.checked) {
        fb.innerHTML = '🎉 Chính xác! Hành vi thú vị được giải mã ở đây chính là tập tính di cư của loài chim.';
        fb.className = 'p-3 rounded-xl text-sm font-bold bg-emerald-100 text-emerald-955 border border-emerald-305';
    } else {
        fb.innerHTML = '❌ Chưa đúng. Em hãy xem kĩ câu cuối cùng của Đoạn 2 trong bài đọc nhé!';
        fb.className = 'p-3 rounded-xl text-sm font-bold bg-rose-100 text-rose-955 border border-rose-305';
    }
};

// 5. Kiểm tra câu hỏi 6 phần đọc hiểu (Sơ đồ cấu trúc)
window.kiemTraCauHoi6Vn126 = function() {
    const d1a = document.getElementById('ans-vn126-c6d1a')?.value.trim().toLowerCase();
    const d1b = document.getElementById('ans-vn126-c6d1b')?.value.trim().toLowerCase();
    const d2a = document.getElementById('ans-vn126-c6d2a')?.value.trim().toLowerCase();
    const d2b = document.getElementById('ans-vn126-c6d2b')?.value.trim().toLowerCase();
    const d3a = document.getElementById('ans-vn126-c6d3a')?.value.trim().toLowerCase();
    const d3b = document.getElementById('ans-vn126-c6d3b')?.value.trim().toLowerCase();
    const fb = document.getElementById('fb-vn126-c6');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!d1a || !d1b || !d2a || !d2b || !d3a || !d3b) {
        fb.innerHTML = '⚠️ Em hãy điền đầy đủ cả 6 ô trống trong sơ đồ nhé!';
        fb.className = 'p-3 rounded-xl text-sm font-bold bg-amber-100 text-amber-955 border border-amber-305';
        return;
    }

    const checkD1 = (d1a.includes('tập tính') && d1b.includes('định hướng')) || (d1b.includes('tập tính') && d1a.includes('định hướng'));
    const checkD2 = (d2a.includes('lí do') && d2b.includes('năng lượng')) || (d2b.includes('lí do') && d2a.includes('năng lượng'));
    const checkD3 = (d3a.includes('phương thức') && d3b.includes('mốc')) || (d3b.includes('phương thức') && d3a.includes('mốc'));

    if (checkD1 && checkD2 && checkD3) {
        fb.innerHTML = '🎉 Rất giỏi! Sơ đồ cấu trúc của em hoàn toàn chính xác và bám sát mạch ý của bài đọc.';
        fb.className = 'p-3 rounded-xl text-sm font-bold text-center bg-emerald-100 text-emerald-955 border border-emerald-305';
    } else {
        fb.innerHTML = '❌ Chưa chính xác. Em hãy đối chiếu với các gợi ý trong ô màu xanh ở trên và điền đúng mạch nội dung của 3 đoạn nhé!';
        fb.className = 'p-3 rounded-xl text-sm font-bold text-center bg-rose-100 text-rose-955 border border-rose-305';
    }
};

// 6. Kiểm tra câu hỏi 7 phần đọc hiểu
window.kiemTraCauHoi7Vn126 = function() {
    const text = document.getElementById('ans-vn126-c7')?.value.trim().toLowerCase();
    const fb = document.getElementById('fb-vn126-c7');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = '⚠️ Em hãy nhập câu trả lời trước nhé!';
        fb.className = 'p-3 rounded-xl text-sm font-bold bg-amber-100 text-amber-955 border border-amber-305';
        return;
    }

    const kw1 = text.includes('trước hết');
    const kw2 = text.includes('thứ hai');
    const kw3 = text.includes('lí do nữa') || text.includes('lý do nữa');

    if (kw1 && kw2 && kw3) {
        fb.innerHTML = '🎉 Xuất sắc! Đó là các từ ngữ chuyển ý: <strong>\"Trước hết\"</strong>, <strong>\"Thứ hai\"</strong>, <strong>\"Một lí do nữa\"</strong>.';
        fb.className = 'p-3 rounded-xl text-sm font-bold bg-emerald-100 text-emerald-955 border border-emerald-305';
    } else {
        fb.innerHTML = '❌ Chưa đầy đủ. Gợi ý: Có 3 từ/cụm từ dùng để chuyển tiếp các lí do ở Đoạn 2.';
        fb.className = 'p-3 rounded-xl text-sm font-bold bg-rose-100 text-rose-955 border border-rose-305';
    }
};

// 7. Kiểm tra câu hỏi 8 phần đọc hiểu
window.kiemTraCauHoi8Vn126 = function() {
    const radioB = document.getElementById('ans-vn126-c8b');
    const fb = document.getElementById('fb-vn126-c8');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (radioB && radioB.checked) {
        fb.innerHTML = '🎉 Đúng rồi! Cặp dấu gạch ngang ở đây dùng để đánh dấu bộ phận chú thích, giải thích (giải thích cho cụm từ \"các loại hoa trái, côn trùng, sâu bọ hoặc động vật cỡ nhỏ\").';
        fb.className = 'p-3 rounded-xl text-sm font-bold bg-emerald-100 text-emerald-955 border border-emerald-305';
    } else {
        fb.innerHTML = '❌ Chưa chính xác. Dấu gạch ngang đang bao quanh một cụm từ để làm rõ nghĩa cho phần đứng trước nó.';
        fb.className = 'p-3 rounded-xl text-sm font-bold bg-rose-100 text-rose-955 border border-rose-305';
    }
};

// 8. Kiểm tra câu hỏi 9 phần đọc hiểu
window.kiemTraCauHoi9Vn126 = function() {
    const text = document.getElementById('ans-vn126-c9')?.value.trim().toLowerCase();
    const fb = document.getElementById('fb-vn126-c9');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = '⚠️ Em hãy nhập câu trả lời trước nhé!';
        fb.className = 'p-3 rounded-xl text-sm font-bold bg-amber-100 text-amber-955 border border-amber-305';
        return;
    }

    const words = ['tổ', 'tổ ấm', 'nơi ở', 'giang sơn', 'ngôi nhà', 'quê hương'];
    const found = words.some(w => text.includes(w));

    if (found) {
        fb.innerHTML = '🎉 Rất tốt! Em có thể dùng các từ đồng nghĩa như: tổ, tổ ấm, nơi ở, ngôi nhà... để thay thế cho từ \"nhà\".';
        fb.className = 'p-3 rounded-xl text-sm font-bold bg-emerald-100 text-emerald-955 border border-emerald-305';
    } else {
        fb.innerHTML = '❌ Chưa đúng. Gợi ý: Các con chim thường xây gì để sinh sống? (Tổ, tổ ấm, nơi ở...)';
        fb.className = 'p-3 rounded-xl text-sm font-bold bg-rose-100 text-rose-955 border border-rose-305';
    }
};

// 9. Kiểm tra câu hỏi 10 phần đọc hiểu
window.kiemTraCauHoi10Vn126 = function() {
    const text = document.getElementById('ans-vn126-c10')?.value.trim();
    const fb = document.getElementById('fb-vn126-c10');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = '⚠️ Em hãy nhập câu của em trước nhé!';
        fb.className = 'p-3 rounded-xl text-sm font-bold bg-amber-100 text-amber-955 border border-amber-305';
        return;
    }

    const connectives = ['và', 'nhưng', 'vì', 'nên', 'còn', 'hoặc', 'tuy', 'nhưng', 'nếu', 'thì'];
    const lower = text.toLowerCase();
    const hasConnective = connectives.some(c => {
        const regex = new RegExp('\\b' + c + '\\b');
        return regex.test(lower);
    });

    if (hasConnective) {
        fb.innerHTML = '🎉 Tuyệt vời! Câu của em viết đúng ngữ pháp và có sử dụng kết từ thích hợp.';
        fb.className = 'p-3 rounded-xl text-sm font-bold bg-emerald-100 text-emerald-955 border border-emerald-305';
    } else {
        fb.innerHTML = '❌ Câu của em chưa sử dụng kết từ hoặc kết từ chưa rõ ràng. Em hãy thử viết lại câu khác nhé! (Ví dụ dùng từ: nhưng, và, vì...)';
        fb.className = 'p-3 rounded-xl text-sm font-bold bg-rose-100 text-rose-955 border border-rose-305';
    }
};

// 10. Xác nhận tự soát lỗi checklist
window.submitChecklistVn126 = function() {
    const s1 = document.getElementById('ck-vn126-s1')?.checked;
    const s2 = document.getElementById('ck-vn126-s2')?.checked;
    const s3 = document.getElementById('ck-vn126-s3')?.checked;
    const s4 = document.getElementById('ck-vn126-s4')?.checked;

    const fb = document.getElementById('fb-vn126-checklist');
    if (!fb) return;
    fb.classList.remove('hidden');

    const score = [s1, s2, s3, s4].filter(Boolean).length;

    if (score === 4) {
        fb.innerHTML = '🎉 Tuyệt vời! Đoạn văn viết của em đã đạt tối đa tất cả các yêu cầu kiểm soát chất lượng tự soát lỗi!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-emerald-100 text-emerald-955 border border-emerald-300 shadow-sm';
    } else {
        fb.innerHTML = `⚠️ Mới đạt ${score}/4 mục tự rà soát. Hãy tự đọc kĩ lại bài viết và tích chọn đủ các tiêu chí hoàn thành nhé!`;
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-amber-100 text-amber-955 border border-amber-300';
    }
};

// 11. Nộp bài hoàn thành global bài đánh giá cuối kì I 126
window.submitVn126Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Đánh giá Học kì I',
            '✏️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🏆</span><p class="text-2xl md:text-3xl font-bold text-sky-850">Chúc mừng em đã hoàn thành xuất sắc Bài Đánh giá Cuối học kỳ I!</p><p class="text-lg text-gray-700 mt-3">Sự cố gắng và tài năng của em đã được khẳng định trọn vẹn trong học kì vừa qua!</p></div>'
        );
    } else {
        alert('Chúc mừng em đã hoàn thành toàn bộ bài Đánh giá Cuối học kỳ I!');
    }
};
