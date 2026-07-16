export const lesson45 = {
    "topic": "Tiếng Việt 5",
    "week": "7",
    "period": "45",
    "title": "VIẾT: LẬP DÀN Ý CHO BÀI VĂN TẢ PHONG CẢNH",
    "desc": "Bài học hướng dẫn học sinh cách lập dàn ý cho bài văn tả phong cảnh (ao hồ, sông suối hoặc biển đảo) theo đúng cấu trúc 3 phần và trình tự miêu tả hợp lý.",
    "subject": "Viết",
    "theme": "Măng non",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-amber-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-amber-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-amber-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-amber-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-amber-500 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-amber-600 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-amber-900 font-black">•</span>
                Nắm vững cấu trúc 3 phần (Mở bài, Thân bài, Kết bài) của dàn ý bài văn tả phong cảnh.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-amber-900 font-black">•</span>
                Biết cách lựa chọn và sắp xếp các ý miêu tả theo trình tự không gian hoặc thời gian hợp lý.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-amber-900 font-black">•</span>
                Thực hành lập được dàn ý sinh động, chi tiết cho một đề bài tự chọn (tả ao hồ, sông suối hoặc biển đảo).
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-amber-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Sắp xếp cấu trúc</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy ghép các nhiệm vụ dưới đây vào đúng phần cấu trúc của bài văn tả phong cảnh:</p>
        
        <div class="space-y-4 font-bold text-amber-600 text-lg md:text-xl">
            <!-- Ý 1 -->
            <div class="flex flex-wrap items-center justify-between gap-3 p-4 bg-amber-50/30 rounded-2xl border border-amber-100">
                <span class="text-gray-800">1. Nêu những ý giới thiệu bao quát về phong cảnh (trực tiếp hoặc gián tiếp):</span>
                <div class="flex gap-2">
                    <button onclick="checkKdVn45(1, this, 'MB')" class="px-4 py-2 bg-white hover:bg-amber-500 border-2 border-gray-100 rounded-xl transition-all active:scale-95 text-base">Mở bài</button>
                    <button onclick="checkKdVn45(1, this, 'TB')" class="px-4 py-2 bg-white hover:bg-amber-500 border-2 border-gray-100 rounded-xl transition-all active:scale-95 text-base">Thân bài</button>
                    <button onclick="checkKdVn45(1, this, 'KB')" class="px-4 py-2 bg-white hover:bg-amber-500 border-2 border-gray-100 rounded-xl transition-all active:scale-95 text-base">Kết bài</button>
                </div>
            </div>

            <!-- Ý 2 -->
            <div class="flex flex-wrap items-center justify-between gap-3 p-4 bg-amber-50/30 rounded-2xl border border-amber-100">
                <span class="text-gray-800">2. Liệt kê các cảnh vật chi tiết theo trình tự không gian hoặc thời gian:</span>
                <div class="flex gap-2">
                    <button onclick="checkKdVn45(2, this, 'MB')" class="px-4 py-2 bg-white hover:bg-amber-500 border-2 border-gray-100 rounded-xl transition-all active:scale-95 text-base">Mở bài</button>
                    <button onclick="checkKdVn45(2, this, 'TB')" class="px-4 py-2 bg-white hover:bg-amber-500 border-2 border-gray-100 rounded-xl transition-all active:scale-95 text-base">Thân bài</button>
                    <button onclick="checkKdVn45(2, this, 'KB')" class="px-4 py-2 bg-white hover:bg-amber-500 border-2 border-gray-100 rounded-xl transition-all active:scale-95 text-base">Kết bài</button>
                </div>
            </div>

            <!-- Ý 3 -->
            <div class="flex flex-wrap items-center justify-between gap-3 p-4 bg-amber-50/30 rounded-2xl border border-amber-100">
                <span class="text-gray-800">3. Nêu cảm nghĩ, tình cảm, cảm xúc đối với phong cảnh được miêu tả:</span>
                <div class="flex gap-2">
                    <button onclick="checkKdVn45(3, this, 'MB')" class="px-4 py-2 bg-white hover:bg-amber-500 border-2 border-gray-100 rounded-xl transition-all active:scale-95 text-base">Mở bài</button>
                    <button onclick="checkKdVn45(3, this, 'TB')" class="px-4 py-2 bg-white hover:bg-amber-500 border-2 border-gray-100 rounded-xl transition-all active:scale-95 text-base">Thân bài</button>
                    <button onclick="checkKdVn45(3, this, 'KB')" class="px-4 py-2 bg-white hover:bg-amber-500 border-2 border-gray-100 rounded-xl transition-all active:scale-95 text-base">Kết bài</button>
                </div>
            </div>
        </div>
        <div id="fb-vn45-kd" class="hidden p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 transition-all"></div>
    </div>

    <!-- 📖 KHÁM PHÁ: CẤU TRÚC DÀN Ý -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-amber-100 shadow-xl space-y-8">
        <div class="flex items-center justify-between border-b border-amber-100 pb-4">
            <span class="text-amber-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                <span>📖</span> Hướng dẫn lập dàn ý bài văn tả phong cảnh
            </span>
        </div>

        <div class="bg-amber-50/50 p-4 rounded-2xl border border-amber-100 font-bold text-amber-600 text-base md:text-lg">
            👉 Nhấp chọn các phần dưới đây để xem chi tiết gợi ý lập dàn ý của Thầy E nhé!
        </div>

        <!-- Khung chi tiết tương tác -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Mở bài -->
            <div onclick="xemGoiY45('goi-y-mb')" class="p-6 bg-orange-50/50 hover:bg-orange-100/70 border border-orange-100 rounded-3xl cursor-pointer transition-all space-y-3 shadow-sm text-center">
                <span class="text-2xl md:text-3xl block">🌅</span>
                <h4 class="text-xl md:text-2xl font-black text-orange-800">1. Mở bài</h4>
                <p class="text-gray-800 font-bold text-sm">Giới thiệu bao quát phong cảnh</p>
                <div id="goi-y-mb" class="hidden p-4 bg-white rounded-2xl border border-orange-100 text-left font-bold text-gray-800 text-base space-y-2 mt-4 transition-all">
                    <p>✔️ <strong>Nội dung:</strong> Giới thiệu phong cảnh định tả là gì? Ở đâu? Em quan sát vào lúc nào?</p>
                    <p>✔️ <strong>Cách viết:</strong>
                        <br>- <em>Mở bài trực tiếp:</em> Giới thiệu ngay cảnh vật định tả.
                        <br>- <em>Mở bài gián tiếp:</em> Dẫn dắt từ sự vật, câu chuyện hoặc bài thơ khác rồi mới giới thiệu cảnh vật.
                    </p>
                </div>
            </div>

            <!-- Thân bài -->
            <div onclick="xemGoiY45('goi-y-tb')" class="p-6 bg-teal-50/50 hover:bg-teal-100/70 border border-teal-100 rounded-3xl cursor-pointer transition-all space-y-3 shadow-sm text-center">
                <span class="text-2xl md:text-3xl block">🏔️</span>
                <h4 class="text-xl md:text-2xl font-black text-teal-800">2. Thân bài</h4>
                <p class="text-gray-800 font-bold text-sm">Miêu tả chi tiết cảnh vật</p>
                <div id="goi-y-tb" class="hidden p-4 bg-white rounded-2xl border border-teal-100 text-left font-bold text-gray-800 text-base space-y-2 mt-4 transition-all">
                    <p>✔️ <strong>Lựa chọn trình tự tả:</strong>
                        <br>- <em>Theo không gian:</em> Tả bao quát -> chi tiết; từ gần -> xa; từ dưới -> lên cao...
                        <br>- <em>Theo thời gian:</em> Tả sự biến đổi của cảnh vật theo các buổi trong ngày (sáng, trưa, chiều) hoặc các mùa.
                        <br>- <em>Kết hợp không gian & thời gian:</em> Tả sự thay đổi của từng sự vật ở các thời điểm khác nhau.
                    </p>
                    <p>⚠️ <strong>Lưu ý:</strong>
                        <br>- Sử dụng nhiều giác quan để quan sát (mắt nhìn, tai nghe, da cảm nhận...).
                        <br>- Tập trung tả những sự vật, hình ảnh nổi bật nhất.
                    </p>
                </div>
            </div>

            <!-- Kết bài -->
            <div onclick="xemGoiY45('goi-y-kb')" class="p-6 bg-amber-50/50 hover:bg-amber-100/70 border border-amber-100 rounded-3xl cursor-pointer transition-all space-y-3 shadow-sm text-center">
                <span class="text-2xl md:text-3xl block">🍂</span>
                <h4 class="text-xl md:text-2xl font-black text-amber-600">3. Kết bài</h4>
                <p class="text-gray-800 font-bold text-sm">Nêu suy nghĩ và cảm xúc</p>
                <div id="goi-y-kb" class="hidden p-4 bg-white rounded-2xl border border-amber-100 text-left font-bold text-gray-800 text-base space-y-2 mt-4 transition-all">
                    <p>✔️ <strong>Nội dung:</strong> Bày tỏ tình cảm, suy nghĩ hoặc lời hứa bảo vệ, giữ gìn cảnh đẹp quê hương.</p>
                    <p>✔️ <strong>Cách viết:</strong>
                        <br>- <em>Kết bài không mở rộng:</em> Chỉ nêu tình cảm trực tiếp với phong cảnh.
                        <br>- <em>Kết bài mở rộng:</em> Liên tưởng, suy ngẫm thêm về ý nghĩa của cảnh đẹp đối với cuộc sống của con người.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- ✍️ THỰC HÀNH LẬP DÀN Ý -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-amber-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">✍️</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Thực hành lập dàn ý</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Dựa vào kết quả quan sát ở Bài 12 (hoặc Tiết 41), em hãy lập dàn ý chi tiết cho một trong hai đề bài dưới đây:</p>
            </div>
        </div>

        <!-- Chọn đề bài -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button id="btn-de1" onclick="chonDeBai45(1)" class="p-5 border-2 border-amber-100 rounded-3xl bg-amber-500 text-white text-left transition-all active:scale-98 shadow-md">
                <span class="text-xl md:text-2xl block mb-2">🏞️ Đề 1</span>
                <span class="font-black text-lg md:text-xl block">Tả cảnh ao hồ, sông suối ở quê hương em hoặc ở nơi gia đình em sinh sống.</span>
            </button>
            <button id="btn-de2" onclick="chonDeBai45(2)" class="p-5 border-2 border-gray-100 rounded-3xl bg-white text-gray-800 text-left hover:border-amber-400 hover:bg-amber-50/50 transition-all active:scale-98 shadow-sm">
                <span class="text-xl md:text-2xl block mb-2">🌊 Đề 2</span>
                <span class="font-black text-lg md:text-xl block">Tả một cảnh biển đảo em đã được thấy tận mắt hoặc xem trên phim ảnh.</span>
            </button>
        </div>

        <!-- Form nhập dàn ý -->
        <div class="bg-amber-50/20 p-6 rounded-[32px] border border-amber-100 space-y-6">
            <h4 id="tieude-debai-chon" class="text-xl md:text-2xl font-black text-amber-600">✍️ Dàn ý của em cho Đề 1: Tả cảnh ao hồ, sông suối</h4>
            
            <div class="space-y-4">
                <!-- Mở bài -->
                <div class="space-y-2">
                    <label class="font-black text-amber-600 text-base md:text-lg block">🌅 Phần Mở bài:</label>
                    <textarea id="vn45-txt-mb" rows="3" placeholder="Ví dụ: Giới thiệu dòng sông quê hương (tên là sông Hồng), chảy qua làng quê thanh bình của em. Dòng sông gắn liền với tuổi thơ nô đùa, tắm mát..." class="w-full p-4 border border-gray-100 rounded-2xl bg-white text-lg md:text-xl font-bold focus:border-amber-500 outline-none shadow-sm"></textarea>
                </div>

                <!-- Thân bài -->
                <div class="space-y-2">
                    <label class="font-black text-amber-600 text-base md:text-lg block">🏔️ Phần Thân bài:</label>
                    <textarea id="vn45-txt-tb" rows="6" placeholder="Ví dụ: Tả cảnh sông nước theo thời gian trong ngày:
- Buổi sáng: Sương mờ bay trên mặt nước lấp lánh, tiếng chim hót líu lo hai bên bờ cát.
- Buổi trưa: Nắng chiếu xuống làm nước sông xanh trong, hàng tre rủ bóng mát rượi.
- Buổi chiều: Lũ trẻ rủ nhau ra tắm sông, thuyền bè tấp nập qua lại..." class="w-full p-4 border border-gray-100 rounded-2xl bg-white text-lg md:text-xl font-bold focus:border-amber-500 outline-none shadow-sm"></textarea>
                </div>

                <!-- Kết bài -->
                <div class="space-y-2">
                    <label class="font-black text-amber-600 text-base md:text-lg block">🍂 Phần Kết bài:</label>
                    <textarea id="vn45-txt-kb" rows="3" placeholder="Ví dụ: Nêu tình cảm của em đối với dòng sông, coi sông như người bạn thân thiết. Em hứa sẽ cùng mọi người bảo vệ, giữ gìn nguồn nước sông luôn trong sạch..." class="w-full p-4 border border-gray-100 rounded-2xl bg-white text-lg md:text-xl font-bold focus:border-amber-500 outline-none shadow-sm"></textarea>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center">
                <button onclick="nopBaiDanY45()" class="px-8 py-4 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all">NỘP DÀN Ý GỬI THẦY E</button>
            </div>
            <div id="fb-vn45-dany" class="hidden p-5 rounded-2xl text-base font-bold shadow-md transition-all duration-345"></div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TIẾT -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiTiet45Global()" class="px-12 py-5 bg-gradient-to-r from-amber-600 to-orange-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Dàn ý bài văn tả phong cảnh thường gồm có mấy phần chính?",
            "options": [
                "2 phần: Mở bài và Thân bài",
                "3 phần: Mở bài, Thân bài và Kết bài",
                "4 phần: Mở bài, Thân bài, Kết bài và Cảm nghĩ",
                "5 phần tương ứng với 5 đoạn văn"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Phần Mở bài của bài văn tả phong cảnh có nhiệm vụ chính là gì?",
            "options": [
                "Liệt kê các sự vật, hiện tượng tiêu biểu của cảnh vật",
                "Nêu suy nghĩ, nhận xét và tình cảm của em đối với cảnh vật",
                "Nêu những ý giới thiệu bao quát về phong cảnh định tả",
                "Kể lại câu chuyện đưa em tới nơi có phong cảnh đó"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Cách mở bài gián tiếp cho bài văn tả cảnh là:",
            "options": [
                "Giới thiệu ngay cảnh ao hồ, sông suối định tả mà không nói gì thêm",
                "Nói về một chuyện khác (bài thơ, câu chuyện...) rồi mới dẫn dắt giới thiệu cảnh vật định tả",
                "Chỉ tả màu sắc nước sông rồi giới thiệu dòng sông đó",
                "Không cần giới thiệu tên phong cảnh mà tả ngay"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Khi lập dàn ý cho phần Thân bài, em có thể sắp xếp nội dung miêu tả theo trình tự nào?",
            "options": [
                "Theo không gian (tả lần lượt từng bộ phận, vẻ đẹp từ gần đến xa...)",
                "Theo thời gian (tả sự biến đổi của cảnh vật theo các buổi trong ngày, các mùa...)",
                "Theo không gian kết hợp thời gian (sự đổi thay từng sự vật ở những thời điểm khác nhau)",
                "Cả ba trình tự trên đều hoàn toàn phù hợp và có thể áp dụng"
            ],
            "answer": 3,
            "level": 0
        },
        {
            "question": "Trình tự miêu tả từ gần đến xa, từ thấp lên cao, từ trái sang phải là trình tự gì?",
            "options": [
                "Trình tự thời gian",
                "Trình tự không gian",
                "Trình tự ngẫu nhiên của tác giả",
                "Trình tự kết hợp âm thanh"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Trình tự miêu tả sự thay đổi của cảnh vật theo các buổi trong ngày (sáng, trưa, chiều) là trình tự gì?",
            "options": [
                "Trình tự không gian",
                "Trình tự thời gian",
                "Trình tự từ xa đến gần",
                "Trình tự từ cao xuống thấp"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Để cảm nhận sinh động các đặc điểm của phong cảnh, chúng ta nên:",
            "options": [
                "Chỉ sử dụng thị giác (mắt nhìn)",
                "Chỉ sử dụng thính giác (tai nghe)",
                "Sử dụng và phối hợp nhiều giác quan (thị giác, thính giác, xúc giác...)",
                "Không cần dùng giác quan nào mà chỉ cần nhớ lại"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Lưu ý nào quan trọng khi viết phần Thân bài tả phong cảnh để bài văn không bị loãng?",
            "options": [
                "Tả mọi chi tiết nhỏ nhất xuất hiện trước mắt",
                "Tập trung miêu tả những sự vật, hiện tượng nổi bật, tiêu biểu của phong cảnh đó",
                "Không tả hoạt động của con người hoặc con vật",
                "Chỉ dùng các từ ngữ miêu tả tĩnh vật"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Phần Kết bài của bài văn tả phong cảnh thực hiện nhiệm vụ gì?",
            "options": [
                "Giới thiệu vị trí địa lý của phong cảnh",
                "Tả hoạt động vui chơi của em và bạn bè tại đó",
                "Nêu suy nghĩ, nhận xét hoặc tình cảm, cảm xúc đối với phong cảnh được miêu tả",
                "Tổng kết số lượng từ ngữ miêu tả đã sử dụng"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Sự khác nhau giữa kết bài mở rộng và kết bài không mở rộng là gì?",
            "options": [
                "Kết bài mở rộng dài hơn kết bài không mở rộng ít nhất 5 dòng",
                "Kết bài mở rộng nêu thêm các liên tưởng, suy ngẫm rộng hơn bên cạnh việc bày tỏ tình cảm trực tiếp",
                "Kết bài không mở rộng không được phép nhắc đến tình cảm của tác giả",
                "Hai cách kết bài này hoàn toàn giống nhau về mặt nội dung"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nếu chọn Đề 1 trong SGK, em sẽ lập dàn ý để miêu tả đối tượng nào?",
            "options": [
                "Một cảnh ao hồ, sông suối ở quê hương em hoặc nơi gia đình sinh sống",
                "Một cảnh biển đảo em đã được thấy hoặc xem trên phim ảnh",
                "Một con vật nuôi đáng yêu trong nhà",
                "Một khu vui chơi hiện đại trong thành phố lớn"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Nếu chọn Đề 2 trong SGK, em sẽ lập dàn ý để miêu tả đối tượng nào?",
            "options": [
                "Một con suối mát rượi chảy trong rừng già",
                "Một cảnh biển đảo em đã thấy tận mắt hoặc xem trên phim ảnh",
                "Bình minh trên cánh đồng lúa chín vàng quê em",
                "Một ngày mưa rào mùa hạ trên đường phố"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Dòng nào dưới đây chỉ gồm các từ ngữ gợi tả hình dáng, màu sắc nước sông suối phù hợp đưa vào dàn ý?",
            "options": [
                "róc rách, rì rào, thì thầm, vi vu",
                "trong vắt, ngầu đục phù sa, xanh ngọc bích, phẳng lặng như gương",
                "mát rượi, se se lạnh, ấm áp, nồng nàn",
                "chạy nhảy, vui đùa, tắm mát, bơi lội"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Dòng nào dưới đây chỉ gồm các từ ngữ gợi tả âm thanh phong cảnh phù hợp đưa vào dàn ý?",
            "options": [
                "xanh ngọc, trắng xóa, rực rỡ, mênh mông",
                "róc rách, sóng vỗ rì rào, gió thổi xào xạc, chim hót líu lo",
                "trong lành, mát mẻ, yên ắng, phẳng lặng",
                "cao vút, rộng lớn, uốn lượn, quanh co"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Việc góp ý và chỉnh sửa dàn ý của bạn học sinh khác giúp chúng ta làm gì?",
            "options": [
                "Tìm ra lỗi để chê bai bài viết của bạn",
                "Học hỏi cách chọn cảnh vật, sắp xếp trình tự miêu tả và sửa chữa dàn ý của mình cho tốt hơn",
                "Thay thế hoàn toàn dàn ý của mình bằng dàn ý của bạn",
                "Không mang lại tác dụng gì cụ thể"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Ý nào dưới đây phù hợp nhất để đưa vào phần Kết bài cho bài văn tả cảnh biển đảo?",
            "options": [
                "Nước biển có màu xanh thẳm, từng đợt sóng vỗ vào bờ cát mịn màng.",
                "Em rất yêu biển đảo quê hương và mong mọi người giữ gìn bãi biển luôn sạch đẹp.",
                "Xa xa, những chiếc thuyền đánh cá căng buồm chuẩn bị ra khơi.",
                "Biển rộng bao la với những rặng dừa xanh vẫy lá đón gió."
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- LOGIC BÀI HỌC ---

// 1. Logic phần Khởi động
let kdAnswers45 = {
    1: "", // Câu 1: MB
    2: "", // Câu 2: TB
    3: ""  // Câu 3: KB
};

window.checkKdVn45 = function(questionIndex, btn, part) {
    const fb = document.getElementById("fb-vn45-kd");
    if (!fb) return;

    fb.classList.remove("hidden");
    const correctParts = { 1: "MB", 2: "TB", 3: "KB" };
    const correctLabel = { "MB": "Mở bài", "TB": "Thân bài", "KB": "Kết bài" };

    if (part === correctParts[questionIndex]) {
        kdAnswers45[questionIndex] = part;
        btn.className = "px-4 py-2 bg-emerald-600 text-white border-2 border-emerald-100 rounded-xl transition-all cursor-default scale-95 font-bold text-base";
        fb.innerHTML = `✅ Chính xác! Nhiệm vụ ${questionIndex} thuộc phần <strong>${correctLabel[part]}</strong>.`;
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4 transition-all";
        
        // Vô hiệu hóa nút khác trong hàng
        const parentDiv = btn.parentElement;
        if (parentDiv) {
            const buttons = parentDiv.querySelectorAll("button");
            buttons.forEach(b => {
                if (b !== btn) b.disabled = true;
            });
        }

        // Kiểm tra hoàn thành tất cả
        if (kdAnswers45[1] !== "" && kdAnswers45[2] !== "" && kdAnswers45[3] !== "") {
            fb.innerHTML = "🎉 Tuyệt vời! Em đã hoàn thành xuất sắc thử thách ghép nối nhiệm vụ vào cấu trúc dàn ý!";
            if (typeof window.showMathFeedback === 'function') {
                window.showMathFeedback("Ghép cấu trúc hoàn thành", "🧩", "Cấu trúc 3 phần đã được ghép chính xác!");
            }
        }
    } else {
        btn.className = "px-4 py-2 bg-rose-600 text-white border-2 border-rose-100 rounded-xl transition-all cursor-default scale-95 font-bold text-base";
        fb.innerHTML = `❌ Chưa chính xác. Nhiệm vụ ${questionIndex} thuộc phần khác. Em hãy thử suy nghĩ lại nhé!`;
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-rose-50 text-rose-800 border border-rose-100 mt-4 transition-all";
        
        setTimeout(() => {
            btn.className = "px-4 py-2 bg-white hover:bg-amber-500 border-2 border-gray-100 rounded-xl transition-all active:scale-95 text-base";
            fb.classList.add("hidden");
        }, 1545);
    }
};

// 2. Logic phần Khám phá (nhấp xem gợi ý)
window.xemGoiY45 = function(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle("hidden");
};

// 3. Logic chọn đề bài
let selectedDeBai45 = 1; // Mặc định Đề 1
window.chonDeBai45 = function(deNo) {
    selectedDeBai45 = deNo;
    const btn1 = document.getElementById("btn-de1");
    const btn2 = document.getElementById("btn-de2");
    const tieude = document.getElementById("tieude-debai-chon");
    const mb = document.getElementById("vn45-txt-mb");
    const tb = document.getElementById("vn45-txt-tb");
    const kb = document.getElementById("vn45-txt-kb");
    const fb = document.getElementById("fb-vn45-dany");

    if (!btn1 || !btn2 || !tieude || !mb || !tb || !kb) return;

    if (fb) fb.classList.add("hidden");

    if (deNo === 1) {
        btn1.className = "p-5 border-2 border-amber-100 rounded-3xl bg-amber-500 text-white text-left transition-all active:scale-98 shadow-md";
        btn2.className = "p-5 border-2 border-gray-100 rounded-3xl bg-white text-gray-800 text-left hover:border-amber-400 hover:bg-amber-50/50 transition-all active:scale-98 shadow-sm";
        tieude.innerHTML = "✍️ Dàn ý của em cho Đề 1: Tả cảnh ao hồ, sông suối";
        mb.placeholder = "Ví dụ: Giới thiệu dòng sông quê hương (tên là sông Hồng), chảy qua làng quê thanh bình của em. Dòng sông gắn liền với tuổi thơ nô đùa, tắm mát...";
        tb.placeholder = "Ví dụ: Tả cảnh sông nước theo thời gian trong ngày:\n- Buổi sáng: Sương mờ bay trên mặt nước lấp lánh, tiếng chim hót líu lo hai bên bờ cát.\n- Buổi trưa: Nắng chiếu xuống làm nước sông xanh trong, hàng tre rủ bóng mát rượi.\n- Buổi chiều: Lũ trẻ rủ nhau ra tắm sông, thuyền bè tấp nập qua lại...";
        kb.placeholder = "Ví dụ: Nêu tình cảm của em đối với dòng sông, coi sông như người bạn thân thiết. Em hứa sẽ cùng mọi người bảo vệ, giữ gìn nguồn nước sông luôn trong sạch...";
    } else {
        btn2.className = "p-5 border-2 border-amber-100 rounded-3xl bg-amber-500 text-white text-left transition-all active:scale-98 shadow-md";
        btn1.className = "p-5 border-2 border-gray-100 rounded-3xl bg-white text-gray-800 text-left hover:border-amber-400 hover:bg-amber-50/50 transition-all active:scale-98 shadow-sm";
        tieude.innerHTML = "✍️ Dàn ý của em cho Đề 2: Tả cảnh biển đảo";
        mb.placeholder = "Ví dụ: Giới thiệu cảnh bãi biển Nha Trang em được đi du lịch vào mùa hè năm ngoái cùng gia đình. Bãi biển rộng mênh mông, đón nhận ánh bình minh rực rỡ...";
        tb.placeholder = "Ví dụ: Tả vẻ đẹp của biển đảo theo không gian:\n- Bầu trời xanh thẳm, vài làn mây trắng bồng bềnh trôi.\n- Mặt biển bao la, xanh biếc, những con sóng rì rào vỗ nhẹ vào bờ cát mịn.\n- Bãi cát trắng trải dài uốn lượn bên rặng dừa xanh mướt.\n- Phía xa xa là những hòn đảo nhỏ nhấp nhô giữa đại dương...";
        kb.placeholder = "Ví dụ: Em rất yêu bãi biển Nha Trang. Trở về nhà, em vẫn luôn nhớ về tiếng sóng biển rì rào. Em mong bãi biển luôn sạch đẹp, thu hút nhiều khách du lịch...";
    }
};

// 4. Logic nộp dàn ý
window.nopBaiDanY45 = function() {
    const mbVal = document.getElementById("vn45-txt-mb").value.trim();
    const tbVal = document.getElementById("vn45-txt-tb").value.trim();
    const kbVal = document.getElementById("vn45-txt-kb").value.trim();
    const fb = document.getElementById("fb-vn45-dany");

    if (!fb) return;
    fb.classList.remove("hidden");

    if (!mbVal || !tbVal || !kbVal) {
        fb.innerHTML = "⚠️ Em cần điền đầy đủ dàn ý cả 3 phần Mở bài, Thân bài và Kết bài nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-345";
        return;
    }

    if (mbVal.length < 15 || tbVal.length < 35 || kbVal.length < 15) {
        fb.innerHTML = "⚠️ Nội dung các phần dàn ý của em còn khá ngắn. Em hãy ghi chép chi tiết hơn để bài văn sau này được đầy đủ ý nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-345";
        return;
    }

    // Kiểm tra từ khóa gợi ý để đánh giá
    const textAll = (mbVal + " " + tbVal + " " + kbVal).toLowerCase();
    let keywords = [];
    if (selectedDeBai45 === 1) {
        keywords = ["sông", "suối", "hồ", "nước", "bờ", "cát", "tre", "đò", "cá", "chảy", "uốn", "mát"];
    } else {
        keywords = ["biển", "đảo", "sóng", "cát", "dừa", "thuyền", "xanh", "nắng", "bầu trời", "gió", "nha trang", "hạ long"];
    }

    const matchedKeywords = keywords.filter(w => textAll.includes(w));
    if (matchedKeywords.length < 2) {
        const detaiName = selectedDeBai45 === 1 ? "ao hồ, sông suối" : "biển đảo";
        fb.innerHTML = `⚠️ Dàn ý của em chưa thể hiện rõ các từ ngữ miêu tả đặc trưng cho cảnh <strong>${detaiName}</strong>. Hãy bổ sung thêm các chi tiết thực tế nhé!`;
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-345";
        return;
    }

    // Phản hồi thành công
    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-800">AI Thầy E nhận xét & Chấm điểm:</h5>
                <p class="text-lg mb-2">Thầy E đánh giá dàn ý tả cảnh của em rất tốt!
                <br>✔️ Mở bài giới thiệu tự nhiên, rõ ràng.
                <br>✔️ Thân bài có các chi tiết quan sát sinh động bằng nhiều giác quan, sắp xếp trình tự hợp lý.
                <br>✔️ Kết bài chan chứa tình cảm với quê hương, đất nước.
                </p>
                <span class="px-3 py-1 bg-emerald-600 rounded-lg text-sm font-bold">Kết quả: Đạt loại Xuất sắc (145% ⭐)</span>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-emerald-600 text-white transition-all duration-345";
};

// 5. Nộp bài hoàn thành tiết học toàn cục
window.nopBaiTiet45Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 45',
            '✍️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🏆</span><p class="text-xl md:text-2xl font-bold text-amber-600">Chúc mừng em đã hoàn thành xuất sắc Tiết 45: Viết: Lập dàn ý cho bài văn tả phong cảnh!</p><p class="text-xl text-gray-800 mt-3">Hãy áp dụng dàn ý chi tiết này để tự tin viết một bài văn tả cảnh thật hay và sinh động nhé!</p></div>'
        );
    }
};
