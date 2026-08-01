export const lesson13 = {
    "topic": "Tiếng Việt 5",
    "week": "2",
    "period": "13",
    "title": "VIẾT: VIẾT BÀI VĂN KỂ CHUYỆN SÁNG TẠO",
    "desc": "Học sinh thực hành viết bài văn kể chuyện sáng tạo dựa trên dàn ý đã lập, đồng thời tự đọc soát và chỉnh sửa bài viết của mình theo các tiêu chí chuẩn mực.",
    "subject": "Viết",
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
        <ul class="space-y-3 text-sky-800 font-bold text-2xl md:text-3xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Dựa vào dàn ý đã lập ở Tiết 10, viết được một bài văn kể chuyện sáng tạo hoàn chỉnh, mạch lạc.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Biết vận dụng linh hoạt một trong các cách sáng tạo: thêm chi tiết (tả cảnh, tả người, hội thoại), thay đổi kết thúc hoặc đóng vai nhân vật kể chuyện.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Rèn luyện thói quen tự kiểm tra, đọc soát và chỉnh sửa bài viết sau khi hoàn thành.
            </li>
        </ul>
    </div>

    <!-- 📋 CHỌN ĐỀ BÀI -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-5">
        <h3 class="text-2xl md:text-3xl font-black text-gray-800 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md text-sm">📋</span>
            Chọn 1 trong 2 đề dưới đây để thực hành viết:
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <button onclick="chonDeVn13(1)" id="vn13-de1-btn" class="text-left p-6 bg-sky-50/60 rounded-2xl border-2 border-sky-100 hover:border-sky-400 hover:shadow-lg transition-all active:scale-[0.98] space-y-2 group">
                <p class="font-black text-sky-900 text-2xl md:text-3xl group-hover:text-sky-700 transition-colors flex items-center gap-2">
                    <span class="w-6 h-6 rounded-full bg-sky-600 text-sky-800 flex items-center justify-center text-xs">1</span>
                    Đề 1
                </p>
                <p class="text-2xl md:text-3xl text-gray-800 font-semibold leading-relaxed">Viết bài văn kể sáng tạo câu chuyện <em class="text-sky-800 font-bold">Thanh âm của gió</em> hoặc <em class="text-sky-800 font-bold">Cánh đồng hoa</em>.</p>
            </button>

            <button onclick="chonDeVn13(2)" id="vn13-de2-btn" class="text-left p-6 bg-emerald-50/60 rounded-2xl border-2 border-emerald-100 hover:border-emerald-400 hover:shadow-lg transition-all active:scale-[0.98] space-y-2 group">
                <p class="font-black text-emerald-900 text-2xl md:text-3xl group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                    <span class="w-6 h-6 rounded-full bg-emerald-600 text-emerald-800 flex items-center justify-center text-xs">2</span>
                    Đề 2
                </p>
                <p class="text-2xl md:text-3xl text-gray-800 font-semibold leading-relaxed">Viết bài văn kể sáng tạo một câu chuyện có nhân vật chính là <em class="text-emerald-800 font-bold">con vật</em> hoặc <em class="text-emerald-800 font-bold">đồ vật</em>.</p>
            </button>
        </div>
        <div id="fb-vn13-de" class="hidden text-base font-bold px-4 py-2 rounded-xl"></div>
    </div>

    <!-- 📖 ĐOẠN VĂN THAM KHẢO (TABS TƯƠNG TÁC) -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <h3 class="text-2xl md:text-3xl font-black text-gray-800 flex items-center gap-3">
            <span class="p-2 bg-amber-500 text-white rounded-xl shadow-md text-sm">💡</span>
            Một số đoạn văn tham khảo trong Sách giáo khoa
        </h3>

        <!-- Tab Headers -->
        <div class="flex flex-wrap gap-2 border-b border-gray-100 pb-3">
            <button onclick="switchTabVn13(0)" id="vn13-tab-0" class="px-4 py-2.5 rounded-xl font-black text-xl md:text-2xl transition-all bg-sky-600 text-white shadow-sm">
                ✨ Sáng tạo thêm chi tiết
            </button>
            <button onclick="switchTabVn13(1)" id="vn13-tab-1" class="px-4 py-2.5 rounded-xl font-bold text-xl md:text-2xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300">
                🔄 Thay đổi cách kết thúc
            </button>
            <button onclick="switchTabVn13(2)" id="vn13-tab-2" class="px-4 py-2.5 rounded-xl font-bold text-xl md:text-2xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300">
                🎭 Đóng vai kể chuyện
            </button>
        </div>

        <!-- Tab Contents -->
        <div class="space-y-4">
            <!-- Content 0: Cánh đồng hoa -->
            <div id="vn13-tab-content-0" class="block space-y-4">
                <div class="bg-sky-50/50 p-6 rounded-2xl border border-sky-100 space-y-3">
                    <p class="font-black text-sky-900 text-2xl md:text-3xl flex items-center gap-2">
                        📖 Đoạn trích tham khảo: <span class="px-3 py-1 bg-sky-600 text-sky-800 rounded-full text-xs font-bold">Cánh đồng hoa</span>
                    </p>
                    <p class="serif-font text-gray-900 text-2xl md:text-3xl leading-relaxed italic text-justify">
                        "Ngồi tựa vào gốc cây, các bạn nhỏ ngước nhìn bầu trời. Trên bầu trời xanh biếc, muôn vàn đám mây như đang đùa giỡn, trông thật vui nhộn. Một cụm mây bỗng tách ra, nhìn giống bông cúc trắng khổng lồ. Rồi một cụm mây nữa, trông giống đoá quỳnh tinh khôi. Những "bông hoa mây" cứ bồng bềnh, bồng bềnh, khiến Mơ Hoa phải bật dậy reo lên: "Các cậu có thấy bầu trời như một vườn hoa không?"."
                    </p>
                    <p class="text-sm font-bold text-gray-800">💡 Phân tích: Đoạn văn trên đã khéo léo sáng tạo thêm các chi tiết tả cảnh mây bay trên trời (bông cúc trắng khổng lồ, đóa quỳnh tinh khôi) và lời thoại ngợi ca bầu trời của bạn Mơ Hoa.</p>
                </div>
            </div>

            <!-- Content 1: Thanh âm của gió -->
            <div id="vn13-tab-content-1" class="hidden space-y-4">
                <div class="bg-amber-50/50 p-6 rounded-2xl border border-amber-100 space-y-3">
                    <p class="font-black text-amber-900 text-2xl md:text-3xl flex items-center gap-2">
                        📖 Đoạn trích tham khảo: <span class="px-3 py-1 bg-amber-500 text-amber-600 rounded-full text-xs font-bold">Thanh âm của gió</span>
                    </p>
                    <p class="serif-font text-gray-900 text-2xl md:text-3xl leading-relaxed italic text-justify">
                        "Bố bảo mới nghe chúng tôi kể thôi mà bố đã thích trò chơi ấy rồi. Bố hẹn chúng tôi ngày mai dậy sớm chạy ra bờ suối nghe xem gió nói điều gì. Thế là chúng tôi tưởng tượng ra bao nhiêu tiếng gió mà bố có thể nghe được. Tiếng gió cứ lao xao, lao xao đưa chúng tôi vào giấc ngủ lúc nào không hay."
                    </p>
                    <p class="text-sm font-bold text-gray-800">💡 Phân tích: Đoạn văn đã mở rộng phần kết thúc của câu chuyện, thể hiện sự mong chờ ngày mai của hai bố con và giấc ngủ êm đềm cùng tiếng gió rì rào.</p>
                </div>
            </div>

            <!-- Content 2: Ông lão đánh cá và con cá vàng -->
            <div id="vn13-tab-content-2" class="hidden space-y-4">
                <div class="bg-rose-50/50 p-6 rounded-2xl border border-rose-100 space-y-3">
                    <p class="font-black text-rose-900 text-2xl md:text-3xl flex items-center gap-2">
                        📖 Đoạn trích tham khảo: <span class="px-3 py-1 bg-rose-600 text-rose-800 rounded-full text-xs font-bold">Ông lão đánh cá và con cá vàng</span>
                    </p>
                    <p class="serif-font text-gray-900 text-2xl md:text-3xl leading-relaxed italic text-justify">
                        "Đang bơi lội tung tăng trong làn nước xanh mát, bỗng nhiên tôi bị cuốn phăng đi. Tôi hốt hoảng nhận ra mình đã mắc vào một tấm lưới và bị nhấc bổng lên khỏi mặt nước. Trước mắt tôi là một ông lão có nét mặt khắc khổ. Ông nhìn tôi với vẻ thất vọng, có lẽ vì trong lưới chỉ có mỗi mình tôi."
                    </p>
                    <p class="text-sm font-bold text-gray-800">💡 Phân tích: Đoạn văn dùng ngôi kể thứ nhất (xưng "tôi"), nhập vai con Cá Vàng để diễn tả cảm giác hốt hoảng khi mắc lưới và miêu tả nét mặt của ông lão đánh cá.</p>
                </div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- ✍️ THỰC HÀNH VIẾT BÀI VĂN -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">✍️</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Thực hành viết bài văn</h3>
            </div>

            <div class="space-y-4">
                <div class="flex justify-between items-center flex-wrap gap-2">
                    <span id="vn13-chosen-de-title" class="text-2xl md:text-3xl font-bold text-sky-800">Chưa chọn đề bài</span>
                    <span id="vn13-word-count" class="text-sm font-bold text-gray-800">Số từ: 0 từ (Tối thiểu 50 từ)</span>
                </div>
                
                <textarea id="vn13-writing-area" oninput="updateWordCountVn13()" rows="10" class="w-full p-6 text-2xl md:text-3xl border-2 border-sky-100 rounded-3xl focus:border-sky-500 focus:ring-4 focus:ring-sky-600 outline-none transition-all font-medium leading-relaxed" placeholder="Hãy viết bài văn kể chuyện sáng tạo của em vào đây nhé..."></textarea>
            </div>
        </div>
    </section>

    <!-- 🔍 ĐỌC SOÁT VÀ CHỈNH SỬA -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
        <div class="p-6 md:p-8 bg-emerald-50/30 rounded-[32px] space-y-5">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🔍</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Đọc soát và chỉnh sửa</h3>
            </div>
            
            <p class="text-base text-gray-800 font-bold italic">👉 Sau khi viết xong, hãy đọc soát bài làm của mình dựa trên các tiêu chí sau:</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-white p-5 rounded-2xl border border-emerald-100 space-y-3">
                    <p class="font-black text-emerald-800 text-base flex items-center gap-2">📝 Bố cục & Nội dung</p>
                    <ul class="text-xl md:text-2xl text-gray-800 space-y-2.5 font-medium">
                        <li class="flex items-start gap-2">
                            <input type="checkbox" id="vn13-check1" class="mt-1 w-5 h-5 accent-emerald-600 shrink-0">
                            <label for="vn13-check1" class="cursor-pointer">Bài văn giới thiệu được câu chuyện một cách hấp dẫn, thu hút sự chú ý.</label>
                        </li>
                        <li class="flex items-start gap-2">
                            <input type="checkbox" id="vn13-check2" class="mt-1 w-5 h-5 accent-emerald-600 shrink-0">
                            <label for="vn13-check2" class="cursor-pointer">Các sự việc được kể theo trình tự hợp lí, mạch lạc.</label>
                        </li>
                    </ul>
                </div>

                <div class="bg-white p-5 rounded-2xl border border-emerald-100 space-y-3">
                    <p class="font-black text-emerald-800 text-base flex items-center gap-2">✨ Tính sáng tạo</p>
                    <ul class="text-xl md:text-2xl text-gray-800 space-y-2.5 font-medium">
                        <li class="flex items-start gap-2">
                            <input type="checkbox" id="vn13-check3" class="mt-1 w-5 h-5 accent-emerald-600 shrink-0">
                            <label for="vn13-check3" class="cursor-pointer">Chi tiết sáng tạo độc đáo nhưng không làm thay đổi nội dung chính và ý nghĩa truyện gốc.</label>
                        </li>
                        <li class="flex items-start gap-2">
                            <input type="checkbox" id="vn13-check4" class="mt-1 w-5 h-5 accent-emerald-600 shrink-0">
                            <label for="vn13-check4" class="cursor-pointer">Đã rà soát kỹ lỗi chính tả, cách đặt câu và dùng từ xưng hô phù hợp.</label>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Nút hành động thực hành -->
            <div class="flex flex-wrap gap-4 justify-center pt-2">
                <button onclick="kiemTraBaiVietVn13()" class="px-8 py-3.5 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-base shadow-md active:scale-95">ĐÁNH GIÁ BÀI VIẾT ✓</button>
                <button onclick="xoaBaiVietVn13()" class="px-6 py-3.5 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-all text-base">XOÁ TẤT CẢ</button>
            </div>
            <div id="fb-vn13-writings" class="hidden text-base font-bold px-4 py-3 rounded-xl"></div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiVn13()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Khi viết bài văn kể chuyện sáng tạo, ta có thể áp dụng cách sáng tạo nào?",
            "options": [
                "Thêm chi tiết miêu tả, lời thoại của nhân vật",
                "Thay đổi cách kết thúc truyện",
                "Đóng vai một nhân vật kể lại chuyện",
                "Tất cả các phương án trên đều đúng"
            ],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Sáng tạo thêm chi tiết trong văn kể chuyện có tác dụng gì?",
            "options": [
                "Làm cho câu chuyện sinh động, hấp dẫn và cụ thể hơn",
                "Làm thay đổi hoàn toàn ý nghĩa câu chuyện gốc",
                "Giúp bài văn ngắn gọn hơn",
                "Thay đổi nhân vật chính"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đoạn văn tham khảo kể chuyện 'Cánh đồng hoa' trong sách đã sáng tạo thêm chi tiết nào?",
            "options": [
                "Sáng tạo thêm hình ảnh so sánh độc đáo về đám mây trôi",
                "Sáng tạo thêm việc các bạn nhỏ cãi nhau",
                "Thay đổi kết thúc câu chuyện",
                "Đóng vai bông hoa cúc kể chuyện"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi đóng vai một nhân vật kể chuyện, em phải chọn cách xưng hô như thế nào?",
            "options": [
                "Xưng hô là 'bọn trẻ'",
                "Xưng là 'tôi' hoặc 'mình' (ngôi thứ nhất)",
                "Gọi nhân vật chính là 'nó'",
                "Kể khách quan theo ngôi thứ ba"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đoạn văn đóng vai nhân vật trong câu chuyện 'Ông lão đánh cá và con cá vàng' đã xưng là gì?",
            "options": [
                "Xưng là ông lão",
                "Xưng là cá vàng ('tôi')",
                "Xưng là mụ vợ",
                "Xưng là biển cả"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Khi thay đổi kết thúc câu chuyện, cần lưu ý điều gì?",
            "options": [
                "Kết thúc mới phải bay bổng, kì diệu và hợp lí với diễn biến truyện",
                "Có thể kết thúc tuỳ ý mà không cần liên quan đến truyện cũ",
                "Phải bỏ hết các nhân vật phụ",
                "Chỉ viết kết thúc trong 1 từ duy nhất"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đoạn văn kể sáng tạo câu chuyện 'Thanh âm của gió' đã chọn cách sáng tạo nào?",
            "options": [
                "Đóng vai Bống kể chuyện",
                "Thay đổi cách kết thúc câu chuyện (tưởng tượng thêm suy nghĩ của hai bố con)",
                "Thêm một nhân vật mới vào truyện",
                "Tả ngoại hình của các nhân vật"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Bước đọc soát và chỉnh sửa sau khi viết bài văn có mục đích gì?",
            "options": [
                "Phát hiện và sửa lỗi chính tả, lỗi dùng từ, lỗi câu",
                "Kiểm tra xem các chi tiết sáng tạo có phù hợp không",
                "Giúp bài viết hoàn thiện và hay hơn",
                "Tất cả các ý kiến trên"
            ],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Nếu kể câu chuyện 'Thanh âm của gió' mà đóng vai Bống, từ xưng hô nào là phù hợp nhất?",
            "options": [
                "Tôi (vai Bống)",
                "Bọn trẻ",
                "Chúng tôi",
                "Anh Điệp"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Những chi tiết sáng tạo thêm trong bài viết văn kể chuyện cần đảm bảo yêu cầu nào?",
            "options": [
                "Phải thú vị, độc đáo và phù hợp với nội dung câu chuyện gốc",
                "Phải làm cho câu chuyện trở nên rùng rợn hơn",
                "Càng dài càng tốt, không cần quan tâm đến cốt truyện",
                "Phải thay đổi toàn bộ cốt truyện"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'bồng bềnh' trong đoạn văn tham khảo 'Cánh đồng hoa' thuộc từ loại nào?",
            "options": [
                "Danh từ",
                "Động từ",
                "Tính từ",
                "Đại từ"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Trong câu: 'Tôi hốt hoảng nhận ra mình đã mắc vào một tấm lưới...', từ 'tôi' là đại từ xưng hô chỉ ai?",
            "options": [
                "Ông lão đánh cá",
                "Con cá vàng",
                "Mụ vợ ông lão",
                "Người kể chuyện khách quan"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Phần mở bài của bài văn kể chuyện sáng tạo đóng vai nhân vật cần đáp ứng yêu cầu gì?",
            "options": [
                "Giới thiệu câu chuyện và xưng vai nhân vật mình đóng",
                "Kể ngay phần kết của câu chuyện",
                "Tả chi tiết hình dáng nhân vật",
                "Chỉ nêu bài học rút ra"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tại sao không nên sáng tạo các chi tiết làm thay đổi hoàn toàn ý nghĩa của truyện gốc?",
            "options": [
                "Vì sẽ làm mất đi giá trị nhân văn và bài học cốt lõi của truyện gốc",
                "Vì người đọc sẽ không nhận ra câu chuyện gốc nữa",
                "Để đảm bảo tính nhất quán của cốt truyện",
                "Tất cả các lí do trên"
            ],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Câu nào dưới đây chứa chi tiết miêu tả sáng tạo trong bài đọc 'Cánh đồng hoa'?",
            "options": [
                "Một cụm mây bỗng tách ra, nhìn giống bông cúc trắng khổng lồ.",
                "Các bạn nhỏ chăn trâu đi về.",
                "Mơ Hoa reo lên vui sướng.",
                "Trời hôm nay nhiều mây."
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- LOGIC CHỌN ĐỀ BÀI ---
let deChonVn13 = null;

window.chonDeVn13 = function(de) {
    deChonVn13 = de;
    const btn1 = document.getElementById('vn13-de1-btn');
    const btn2 = document.getElementById('vn13-de2-btn');
    const fb = document.getElementById('fb-vn13-de');
    const chosenTitle = document.getElementById('vn13-chosen-de-title');

    if (btn1 && btn2) {
        btn1.className = "text-left p-6 bg-sky-50/60 rounded-2xl border-2 border-sky-100 hover:border-sky-400 hover:shadow-lg transition-all active:scale-[0.98] space-y-2 group";
        btn2.className = "text-left p-6 bg-emerald-50/60 rounded-2xl border-2 border-emerald-100 hover:border-emerald-400 hover:shadow-lg transition-all active:scale-[0.98] space-y-2 group";

        if (de === 1) {
            btn1.className = "text-left p-6 bg-sky-600 rounded-2xl border-2 border-sky-100 shadow-lg transition-all space-y-2 group text-white";
        } else {
            btn2.className = "text-left p-6 bg-emerald-600 rounded-2xl border-2 border-emerald-100 shadow-lg transition-all space-y-2 group text-white";
        }
    }

    let textDe = de === 1 
        ? "Đề 1: Kể sáng tạo chuyện Thanh âm của gió hoặc Cánh đồng hoa."
        : "Đề 2: Kể sáng tạo chuyện có nhân vật chính là con vật hoặc đồ vật.";

    if (chosenTitle) chosenTitle.innerHTML = `📝 Đang chọn: <strong>${textDe}</strong>`;

    if (fb) {
        fb.classList.remove('hidden');
        fb.innerHTML = `✅ Em đã chọn <strong>Đề ${de}</strong> để thực hành viết!`;
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-emerald-600 text-white";
    }
};

// --- LOGIC CHUYỂN TAB VĂN BẢN THAM KHẢO ---
window.switchTabVn13 = function(tabIdx) {
    for (let i = 0; i < 3; i++) {
        const tabBtn = document.getElementById(`vn13-tab-${i}`);
        const tabContent = document.getElementById(`vn13-tab-content-${i}`);
        if (tabBtn) {
            if (i === tabIdx) {
                tabBtn.className = "px-4 py-2.5 rounded-xl font-black text-xl md:text-2xl transition-all bg-sky-600 text-white shadow-sm";
            } else {
                tabBtn.className = "px-4 py-2.5 rounded-xl font-bold text-xl md:text-2xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300";
            }
        }
        if (tabContent) {
            if (i === tabIdx) {
                tabContent.className = "block space-y-4 animate-in fade-in duration-313";
            } else {
                tabContent.className = "hidden";
            }
        }
    }
};

// --- LOGIC ĐẾM SỐ TỪ ---
window.updateWordCountVn13 = function() {
    const area = document.getElementById('vn13-writing-area');
    const counter = document.getElementById('vn13-word-count');
    if (!area || !counter) return;

    const text = area.value.trim();
    const words = text ? text.split(/\s+/).length : 0;
    counter.innerHTML = `Số từ: ${words} từ (Tối thiểu 50 từ)`;
    counter.className = words >= 50 ? "text-sm font-bold text-emerald-800" : "text-sm font-bold text-gray-800";
};

// --- ĐÁNH GIÁ BÀI VIẾT ---
window.kiemTraBaiVietVn13 = function() {
    const area = document.getElementById('vn13-writing-area');
    const fb = document.getElementById('fb-vn13-writings');
    if (!area || !fb) return;

    const text = area.value.trim();
    fb.classList.remove('hidden');

    if (!deChonVn13) {
        fb.innerHTML = "⚠️ Em cần lựa chọn Đề bài ở phía trên trước khi đánh giá nhé!";
        fb.className = "text-base font-bold px-4 py-3 rounded-xl bg-rose-600 text-white";
        return;
    }

    const words = text ? text.split(/\s+/).length : 0;
    if (words < 10) {
        fb.innerHTML = "⚠️ Em hãy viết bài văn hoàn chỉnh vào ô thực hành trước khi đánh giá nhé!";
        fb.className = "text-base font-bold px-4 py-3 rounded-xl bg-rose-600 text-white";
        return;
    }

    if (words < 50) {
        fb.innerHTML = `⚠️ Bài văn của em mới có ${words} từ. Em cố gắng viết thêm để đạt ít nhất 50 từ nhé!`;
        fb.className = "text-base font-bold px-4 py-3 rounded-xl bg-amber-500 text-white";
        return;
    }

    // Đếm checkbox tích chọn tự soát
    let ticked = 0;
    for (let i = 1; i <= 4; i++) {
        if (document.getElementById(`vn13-check${i}`)?.checked) ticked++;
    }

    if (ticked < 4) {
        fb.innerHTML = `💡 Bài viết của em rất tốt (${words} từ). Hãy tự tin đọc soát và tích đủ 4 tiêu chí sửa lỗi để hoàn thành xuất sắc bài tập nhé!`;
        fb.className = "text-base font-bold px-4 py-3 rounded-xl bg-amber-500 text-white";
        return;
    }

    fb.innerHTML = `🎉 Chúc mừng em! Bài văn của em đạt tiêu chuẩn (${words} từ) và đã được tự soát lỗi kỹ càng. Em viết rất hay!`;
    fb.className = "text-base font-bold px-4 py-3 rounded-xl bg-emerald-600 text-white";
};

// --- XOÁ BÀI VIẾT ---
window.xoaBaiVietVn13 = function() {
    const area = document.getElementById('vn13-writing-area');
    const counter = document.getElementById('vn13-word-count');
    const fb = document.getElementById('fb-vn13-writings');
    const chosenTitle = document.getElementById('vn13-chosen-de-title');

    if (area) area.value = '';
    if (counter) counter.innerHTML = "Số từ: 0 từ (Tối thiểu 50 từ)";
    if (fb) fb.classList.add('hidden');
    if (chosenTitle) chosenTitle.innerHTML = "Chưa chọn đề bài";

    deChonVn13 = null;
    const btn1 = document.getElementById('vn13-de1-btn');
    const btn2 = document.getElementById('vn13-de2-btn');
    if (btn1) btn1.className = "text-left p-6 bg-sky-50/60 rounded-2xl border-2 border-sky-100 hover:border-sky-400 hover:shadow-lg transition-all active:scale-[0.98] space-y-2 group";
    if (btn2) btn2.className = "text-left p-6 bg-emerald-50/60 rounded-2xl border-2 border-emerald-100 hover:border-emerald-400 hover:shadow-lg transition-all active:scale-[0.98] space-y-2 group";

    const fbDe = document.getElementById('fb-vn13-de');
    if (fbDe) fbDe.classList.add('hidden');

    for (let i = 1; i <= 4; i++) {
        const cb = document.getElementById(`vn13-check${i}`);
        if (cb) cb.checked = false;
    }
};

// --- NỘP BÀI TỔNG THỂ ---
window.nopBaiVn13 = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 13',
            '✍️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">✍️</span><p class="text-lg md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài thực hành Viết bài văn kể chuyện sáng tạo!</p><p class="text-lg text-gray-800 mt-3">Kỹ năng viết và tự chỉnh sửa bài viết sẽ giúp em tiến bộ mỗi ngày.</p></div>'
        );
    }
};
