// Tiết 219: LTVC: Cách viết tên người và tên địa lý nước ngoài
export const lesson219 = {
    "topic": "Tiếng Việt 5",
    "week": "32",
    "period": "219",
    "title": "LTVC: CÁCH VIẾT TÊN NGƯỜI VÀ TÊN ĐỊA LÍ NƯỚC NGOÀI",
    "desc": "Nắm vững quy tắc viết hoa tên riêng nước ngoài (gồm phiên âm trực tiếp có dấu gạch nối và tên riêng đọc theo âm Hán Việt giống như tiếng Việt).",
    "subject": "LTVC",
    "theme": "Vì cuộc sống thanh bình",
    "audio": "",
    "content": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto pb-12">
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
                    Nhận biết và phân biệt được 2 nhóm tên riêng nước ngoài: Đọc theo âm Hán Việt và Phiên âm trực tiếp.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Nắm vững quy tắc viết hoa chữ cái đầu của mỗi bộ phận tạo thành tên và sử dụng dấu gạch nối giữa các tiếng trong cùng bộ phận.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Thực hành phát hiện và sửa đúng lỗi chính tả về cách viết tên riêng nước ngoài trong đoạn văn.
                </li>
            </ul>
        </div>

        <!-- 🔬 Khám phá & Phân loại tương tác -->
        <section class="w-full" id="ex-219-classify">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 space-y-6">
                <h3 class="text-2xl md:text-3xl font-black text-blue-955 mb-2 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">1</span>
                    Nhận xét & Phân loại tên riêng nước ngoài
                </h3>
                <p class="text-gray-500 font-bold text-base md:text-lg">Đọc đoạn văn dưới đây và phân loại các tên riêng in đậm vào nhóm thích hợp:</p>

                <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200">
                    <p class="serif-font text-gray-800 text-lg md:text-xl leading-relaxed">
                        \"<strong>Hi-ma-lay-a</strong> là dãy núi trải dài qua 5 quốc gia: <strong>Ấn Độ</strong>, <strong>Bu-tan</strong>, <strong>Nê-pan</strong>, <strong>Pa-ki-xtan</strong>, <strong>Trung Quốc</strong>. Dãy núi này có ngọn <strong>Ê-vơ-rét</strong> cao nhất thế giới... Năm 1953, <strong>Ét-mun Hi-la-ri</strong> (người <strong>Niu Di-lân</strong>) và <strong>Ten-ding No-gay</strong> (người <strong>Nê-pan</strong>) được công nhận là những người đầu tiên chạm tay vào giấc mơ chinh phục nóc nhà thế giới.\"
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div class="space-y-4">
                        <p class="font-black text-blue-600 text-lg md:text-xl">🇻🇳 Nhóm 1: Cách viết GIỐNG tên riêng Việt Nam (Âm Hán Việt)</p>
                        <div class="space-y-2">
                            <label class="flex items-center justify-between gap-3 font-bold text-gray-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                                <span>Ấn Độ:</span>
                                <select id="sel-219-cl1" class="p-2 border border-gray-200 rounded-lg focus:outline-none">
                                    <option value="">-- Chọn nhóm --</option>
                                    <option value="giong">Nhóm 1 (Giống VN)</option>
                                    <option value="khac">Nhóm 2 (Khác VN)</option>
                                </select>
                            </label>
                            <label class="flex items-center justify-between gap-3 font-bold text-gray-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                                <span>Trung Quốc:</span>
                                <select id="sel-219-cl2" class="p-2 border border-gray-200 rounded-lg focus:outline-none">
                                    <option value="">-- Chọn nhóm --</option>
                                    <option value="giong">Nhóm 1 (Giống VN)</option>
                                    <option value="khac">Nhóm 2 (Khác VN)</option>
                                </select>
                            </label>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <p class="font-black text-emerald-900 text-lg md:text-xl">🌐 Nhóm 2: Cách viết KHÁC tên riêng Việt Nam (Có dấu gạch nối)</p>
                        <div class="space-y-2 max-h-[220px] overflow-y-auto pr-2">
                            <label class="flex items-center justify-between gap-3 font-bold text-gray-700 bg-slate-50 p-3 rounded-xl border border-slate-200 mb-2">
                                <span>Hi-ma-lay-a:</span>
                                <select id="sel-219-cl3" class="p-2 border border-gray-200 rounded-lg focus:outline-none">
                                    <option value="">-- Chọn nhóm --</option>
                                    <option value="giong">Nhóm 1 (Giống VN)</option>
                                    <option value="khac">Nhóm 2 (Khác VN)</option>
                                </select>
                            </label>
                            <label class="flex items-center justify-between gap-3 font-bold text-gray-700 bg-slate-50 p-3 rounded-xl border border-slate-200 mb-2">
                                <span>Bu-tan:</span>
                                <select id="sel-219-cl4" class="p-2 border border-gray-200 rounded-lg focus:outline-none">
                                    <option value="">-- Chọn nhóm --</option>
                                    <option value="giong">Nhóm 1 (Giống VN)</option>
                                    <option value="khac">Nhóm 2 (Khác VN)</option>
                                </select>
                            </label>
                            <label class="flex items-center justify-between gap-3 font-bold text-gray-700 bg-slate-50 p-3 rounded-xl border border-slate-200 mb-2">
                                <span>Ét-mun Hi-la-ri:</span>
                                <select id="sel-219-cl5" class="p-2 border border-gray-200 rounded-lg focus:outline-none">
                                    <option value="">-- Chọn nhóm --</option>
                                    <option value="giong">Nhóm 1 (Giống VN)</option>
                                    <option value="khac">Nhóm 2 (Khác VN)</option>
                                </select>
                            </label>
                            <label class="flex items-center justify-between gap-3 font-bold text-gray-700 bg-slate-50 p-3 rounded-xl border border-slate-200 mb-2">
                                <span>Niu Di-lân:</span>
                                <select id="sel-219-cl6" class="p-2 border border-gray-200 rounded-lg focus:outline-none">
                                    <option value="">-- Chọn nhóm --</option>
                                    <option value="giong">Nhóm 1 (Giống VN)</option>
                                    <option value="khac">Nhóm 2 (Khác VN)</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-between mt-8">
                    <button onclick="window.resetEx1_219()" class="px-6 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300">LÀM LẠI</button>
                    <button id="btn-check-219-1" onclick="window.checkEx1_219()" class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl font-black text-2xl md:text-3xl shadow-lg transition-all active:scale-95 flex items-center justify-center">E</button>
                </div>
                <div id="fb-ex1-219" class="hidden p-4 rounded-xl font-bold text-lg mt-4 animate-in fade-in duration-300"></div>
            </div>
        </section>

        <!-- 📖 Khung ghi nhớ trực quan -->
        <section class="w-full">
            <div class="bg-blue-50/40 rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 relative overflow-hidden">
                <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-150 rounded-full blur-2xl"></div>
                <h3 class="text-2xl md:text-3xl font-black text-blue-600 mb-6 flex items-center gap-3">
                    <span class="p-2 bg-blue-650 text-white rounded-xl shadow-md">📌</span>
                    Ghi nhớ quy tắc viết hoa tên riêng nước ngoài
                </h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
                    <div class="p-6 bg-white rounded-3xl border border-blue-100 space-y-3">
                        <p class="font-black text-blue-600 text-lg md:text-xl flex items-center gap-2">🌐 1. Phiên âm trực tiếp:</p>
                        <p class="text-base md:text-lg font-bold leading-relaxed text-gray-700">
                            Viết hoa **chữ cái đầu của mỗi bộ phận** tạo thành tên. Nếu bộ phận gồm nhiều tiếng thì cần **có dấu gạch nối** giữa các tiếng.
                        </p>
                        <p class="text-sm font-semibold text-gray-500 bg-slate-50 p-2 rounded-xl">
                            Ví dụ: Hi-ma-lay-a, Ét-mun Hi-la-ri, Niu Di-lân, Ê-vơ-rét...
                        </p>
                    </div>

                    <div class="p-6 bg-white rounded-3xl border border-blue-100 space-y-3">
                        <p class="font-black text-emerald-900 text-lg md:text-xl flex items-center gap-2">🇨🇳 2. Phiên âm qua âm Hán Việt:</p>
                        <p class="text-base md:text-lg font-bold leading-relaxed text-gray-700">
                            Những tên riêng nước ngoài đọc theo âm Hán Việt thì được **viết giống như cách viết tên riêng Việt Nam** (viết hoa chữ cái đầu mỗi tiếng).
                        </p>
                        <p class="text-sm font-semibold text-gray-500 bg-slate-50 p-2 rounded-xl">
                            Ví dụ: Ấn Độ, Trung Quốc, Thái Lan, Khổng Tử, Lý Bạch...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `,
    "practice": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto pb-12">
        <!-- ✏️ Bài tập 4: Sửa lỗi chính tả (Spelling Editor) -->
        <section class="w-full" id="ex-219-spelling">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 space-y-6">
                <h3 class="text-2xl md:text-3xl font-black text-blue-955 mb-2 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">2</span>
                    Bài tập 4: Sửa lỗi chính tả viết tên riêng nước ngoài
                </h3>
                <p class="text-gray-500 font-bold text-base md:text-lg">Điền dạng viết đúng chính tả của các tên riêng in đậm viết sai vào các ô trống dưới đây:</p>

                <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    <!-- Đoạn văn điền từ -->
                    <div class="lg:col-span-3 space-y-6">
                        <div class="bg-slate-50 p-6 md:p-8 rounded-3xl border-2 border-slate-200">
                            <p class="serif-font text-gray-800 text-lg md:text-xl leading-relaxed">
                                \"Tháp <span class="text-red-600 font-black">épphen</span> là một công trình kiến trúc bằng thép nổi tiếng nằm ở đại lộ <span class="text-red-600 font-black">anatôn phrăngxơ</span> của thành phố <span class="text-red-600 font-black">pari</span>, thủ đô nước <span class="text-red-600 font-black">pháp</span>. Công trình này do kĩ sư <span class="text-red-600 font-black">guxtavơ épphen</span> cùng các đồng nghiệp xây dựng từ năm 1887 tới năm 1889.\"
                            </p>
                        </div>

                        <!-- Các ô điền từ -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-base text-gray-700">
                            <label class="flex flex-col gap-1.5">
                                <span>1. épphen:</span>
                                <input type="text" id="ipt-err-1" class="p-3 border-2 border-gray-200 focus:border-blue-500 outline-none rounded-xl" placeholder="Viết lại đúng...">
                            </label>
                            <label class="flex flex-col gap-1.5">
                                <span>2. anatôn phrăngxơ:</span>
                                <input type="text" id="ipt-err-2" class="p-3 border-2 border-gray-200 focus:border-blue-500 outline-none rounded-xl" placeholder="Viết lại đúng...">
                            </label>
                            <label class="flex flex-col gap-1.5">
                                <span>3. pari:</span>
                                <input type="text" id="ipt-err-3" class="p-3 border-2 border-gray-200 focus:border-blue-500 outline-none rounded-xl" placeholder="Viết lại đúng...">
                            </label>
                            <label class="flex flex-col gap-1.5">
                                <span>4. pháp:</span>
                                <input type="text" id="ipt-err-4" class="p-3 border-2 border-gray-200 focus:border-blue-500 outline-none rounded-xl" placeholder="Viết lại đúng...">
                            </label>
                            <label class="flex flex-col gap-1.5 md:col-span-2">
                                <span>5. guxtavơ épphen:</span>
                                <input type="text" id="ipt-err-5" class="p-3 border-2 border-gray-200 focus:border-blue-500 outline-none rounded-xl" placeholder="Viết lại đúng...">
                            </label>
                        </div>
                    </div>

                    <!-- Hình ảnh minh họa -->
                    <div class="lg:col-span-2">
                        <img src="assets/images/eiffel.png" alt="Tháp Eiffel tại Paris Pháp" class="w-full aspect-[4/3] object-cover rounded-3xl border-4 border-white shadow-lg">
                    </div>
                </div>

                <div class="flex items-center justify-between mt-8">
                    <button onclick="window.resetEx2_219()" class="px-6 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300">LÀM LẠI</button>
                    <button id="btn-check-219-2" onclick="window.checkEx2_219()" class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl font-black text-2xl md:text-3xl shadow-lg transition-all active:scale-95 flex items-center justify-center">E</button>
                </div>
                <div id="fb-ex2-219" class="hidden p-4 rounded-xl font-bold text-lg mt-4 animate-in fade-in duration-300"></div>
            </div>
        </section>

        <!-- ✏️ Bài tập 5: Viết đoạn văn (Sentence Composer) -->
        <section class="w-full" id="ex-219-write">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 space-y-6">
                <h3 class="text-2xl md:text-3xl font-black text-blue-955 mb-2 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">3</span>
                    Bài tập 5: Thực hành viết câu văn giới thiệu
                </h3>
                <p class="text-gray-500 font-bold text-base md:text-lg">Viết 3 - 5 câu giới thiệu về một nhà văn, một câu chuyện hoặc một bộ phim nước ngoài em thích (trong đó có ít nhất 1 - 2 tên riêng nước ngoài):</p>

                <div class="space-y-4">
                    <div class="relative">
                        <textarea id="ipt-essay-219" rows="4" class="w-full p-6 pr-14 rounded-3xl border-2 border-blue-150 focus:border-blue-500 outline-none font-bold text-lg md:text-xl transition-all leading-relaxed" placeholder="Ví dụ: Em rất thích bộ truyện Harry Potter của nhà văn J. K. Rowling. Câu chuyện kể về hành trình khám phá thế giới phép thuật kỳ bí của cậu bé người Anh..."></textarea>
                        
                        <button onclick="Lesson.toggleSpeechRec('ipt-essay-219')" class="absolute right-4 bottom-4 w-12 h-12 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-xl flex items-center justify-center text-blue-600 transition-colors shadow-md" title="Ghi âm">
                            🎤
                        </button>
                    </div>
                </div>

                <div class="flex items-center justify-between mt-8">
                    <button onclick="window.resetEx3_219()" class="px-6 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300">LÀM LẠI</button>
                    <button id="btn-check-219-3" onclick="window.checkEx3_219()" class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl font-black text-2xl md:text-3xl shadow-lg transition-all active:scale-95 flex items-center justify-center">E</button>
                </div>
                <div id="fb-ex3-219" class="hidden p-4 rounded-xl font-bold text-lg mt-4 animate-in fade-in duration-300"></div>
            </div>
        </section>
    </div>
    `,
    "questions": [
        {
            "question": "Khi viết tên riêng nước ngoài phiên âm trực tiếp, ta cần viết hoa chữ cái nào?",
            "options": [
                "Viết hoa chữ cái đầu của mỗi bộ phận tạo thành tên đó",
                "Viết hoa chữ cái đầu của tất cả các tiếng",
                "Chỉ viết hoa duy nhất chữ cái đầu tiên của cả tên riêng",
                "Không cần viết hoa bất kỳ chữ cái nào"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong cách viết tên riêng phiên âm trực tiếp, giữa các tiếng của cùng một bộ phận cần sử dụng dấu gì?",
            "options": [
                "Dấu gạch nối (-)",
                "Dấu phẩy (,)",
                "Dấu chấm (.)",
                "Dấu hai chấm (:)"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Những tên riêng nước ngoài nào viết giống như cách viết tên riêng Việt Nam?",
            "options": [
                "Các tên riêng đọc theo âm Hán Việt",
                "Các tên riêng phiên âm trực tiếp có 3 tiếng trở lên",
                "Tất cả các tên riêng địa lý nước ngoài",
                "Không có tên riêng nước ngoài nào viết giống tiếng Việt"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tên riêng nước ngoài nào sau đây viết ĐÚNG quy tắc chính tả?",
            "options": [
                "Ét-mun Hi-la-ri",
                "Ét-Mun Hi-La-Ri",
                "ét-mun hi-la-ri",
                "Étmun Hialari"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tên địa lý nước ngoài nào sau đây viết ĐÚNG quy tắc chính tả?",
            "options": [
                "Hi-ma-lay-a",
                "Hi-Ma-Lay-A",
                "hi-ma-lay-a",
                "Himalaya"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ \"Trung Quốc\" trong bài viết thuộc nhóm nào?",
            "options": [
                "Tên riêng đọc theo âm Hán Việt (viết giống tên Việt Nam)",
                "Tên riêng phiên âm trực tiếp có dấu gạch nối",
                "Tên riêng viết thường hoàn toàn",
                "Tên riêng không cần viết hoa"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tên riêng \"Niu Di-lân\" gồm có mấy bộ phận cấu thành?",
            "options": [
                "2 bộ phận: Niu và Di-lân",
                "1 bộ phận: Niu Di-lân",
                "3 bộ phận: Niu, Di, lân",
                "Không có bộ phận nào cả"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cách viết hoa nào sau đây của tháp biểu tượng nước Pháp là ĐÚNG nhất?",
            "options": [
                "Tháp Ép-phen",
                "Tháp épphen",
                "Tháp Ép-Phen",
                "Tháp épphen"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cách viết hoa nào sau đây của thủ đô nước Pháp là ĐÚNG?",
            "options": [
                "Pa-ri",
                "pari",
                "Pa-Ri",
                "pa-ri"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cách viết hoa nào sau đây của nhà bác học người Anh phát minh ra thuyết vạn vật hấp dẫn là ĐÚNG?",
            "options": [
                "Ai-dắc Niu-tơn",
                "Ai-Dắc Niu-Tơn",
                "ai-dắc niu-tơn",
                "Aidac Niuton"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cách viết hoa nào sau đây của nhà văn người Đan Mạch nổi tiếng với các câu chuyện cổ tích trẻ em là ĐÚNG?",
            "options": [
                "An-đéc-xen",
                "An-Đéc-Xen",
                "an-đéc-xen",
                "Andecxen"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong tên riêng \"Ten-ding No-gay\", chữ cái nào được viết hoa?",
            "options": [
                "Chữ cái T của Ten-ding và chữ N của No-gay",
                "Tất cả chữ cái của mỗi tiếng: T, D, N, G",
                "Chỉ viết hoa duy nhất chữ T của tiếng đầu tiên",
                "Không có chữ cái nào được viết hoa"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ \"Khổng Tử\" thuộc nhóm cách viết nào?",
            "options": [
                "Nhóm âm Hán Việt (viết hoa chữ cái đầu mỗi tiếng)",
                "Nhóm phiên âm trực tiếp có gạch nối",
                "Nhóm viết thường hoàn toàn",
                "Nhóm không tuân theo quy tắc"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tên riêng nước ngoài nào sau đây bị viết SAI quy tắc chính tả?",
            "options": [
                "Lỗ tấn",
                "Lỗ Tấn",
                "Mát-xcơ-va",
                "Oa-sinh-tơn"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tên nước ngoài nào sau đây chỉ có 1 bộ phận gồm 1 tiếng duy nhất?",
            "options": [
                "Pháp",
                "Nê-pan",
                "Bu-tan",
                "Ấn Độ"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// Đăng ký toàn cục
window.lesson219 = lesson219;

// Kiểm tra bài phân loại 1 & 2
window.checkEx1_219 = function() {
    const cl1 = document.getElementById('sel-219-cl1').value;
    const cl2 = document.getElementById('sel-219-cl2').value;
    const cl3 = document.getElementById('sel-219-cl3').value;
    const cl4 = document.getElementById('sel-219-cl4').value;
    const cl5 = document.getElementById('sel-219-cl5').value;
    const cl6 = document.getElementById('sel-219-cl6').value;
    const fb = document.getElementById('fb-ex1-219');
    fb.classList.remove('hidden');

    if (!cl1 || !cl2 || !cl3 || !cl4 || !cl5 || !cl6) {
        fb.className = "p-4 rounded-xl font-bold text-lg md:text-xl bg-orange-100 text-orange-850 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em hãy phân loại đầy đủ các từ riêng nước ngoài vào các nhóm nhé!";
        return;
    }

    const isCorrect = (cl1 === 'giong' && cl2 === 'giong' && cl3 === 'khac' && cl4 === 'khac' && cl5 === 'khac' && cl6 === 'khac');

    if (isCorrect) {
        fb.className = "p-4 rounded-xl font-bold text-lg md:text-xl bg-green-100 text-green-900 border border-green-200 mt-4";
        fb.innerHTML = "🎉 Xuất sắc! Em đã phân loại hoàn toàn chính xác. Tên riêng Hán Việt (Ấn Độ, Trung Quốc) viết giống tiếng Việt; tên riêng phiên âm trực tiếp (Hi-ma-lay-a, Bu-tan, Ét-mun Hi-la-ri, Niu Di-lân) có dấu gạch nối.";
        
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Rất tốt! Đáp án hoàn toàn chính xác.", "success");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
        
        // Lưu điểm
        if (typeof window.submitMathLesson === 'function') {
            window.submitMathLesson("LTVC Tiết 219: Phân loại tên nước ngoài", 100, "ex-219-classify", 1, 1, 1);
        }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg md:text-xl bg-red-100 text-red-850 border border-red-200 mt-4";
        fb.innerHTML = "❌ Chưa chính xác rồi. Em hãy nhớ: Tên riêng đọc theo âm Hán Việt không có dấu gạch nối và viết giống tiếng Việt nhé!";
        
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Chưa đúng rồi, hãy thử lại!", "error");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

window.resetEx1_219 = function() {
    document.getElementById('sel-219-cl1').value = "";
    document.getElementById('sel-219-cl2').value = "";
    document.getElementById('sel-219-cl3').value = "";
    document.getElementById('sel-219-cl4').value = "";
    document.getElementById('sel-219-cl5').value = "";
    document.getElementById('sel-219-cl6').value = "";
    const fb = document.getElementById('fb-ex1-219');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};

// Kiểm tra bài tập sửa lỗi chính tả 4
window.checkEx2_219 = function() {
    const err1 = document.getElementById('ipt-err-1').value.trim().toLowerCase();
    const err2 = document.getElementById('ipt-err-2').value.trim().toLowerCase();
    const err3 = document.getElementById('ipt-err-3').value.trim().toLowerCase();
    const err4 = document.getElementById('ipt-err-4').value.trim().toLowerCase();
    const err5 = document.getElementById('ipt-err-5').value.trim().toLowerCase();
    const fb = document.getElementById('fb-ex2-219');
    fb.classList.remove('hidden');

    if (!err1 || !err2 || !err3 || !err4 || !err5) {
        fb.className = "p-4 rounded-xl font-bold text-lg md:text-xl bg-orange-100 text-orange-850 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em hãy điền đầy đủ cách viết đúng của cả 5 tên riêng nước ngoài nhé!";
        return;
    }

    // Các đáp án đúng chấp nhận được
    const ok1 = ["ép-phen", "eiffel", "épphen"];
    const ok2 = ["a-na-tôn phrăng-xơ", "anatole france", "a-na-tôn-phrăng-xơ"];
    const ok3 = ["pa-ri", "paris"];
    const ok4 = ["pháp", "nước pháp"];
    const ok5 = ["guxtavơ ép-phen", "gúc-xta-vơ ép-phen", "gustave eiffel", "gu-xta-vơ ép-phen"];

    const match1 = ok1.includes(err1);
    const match2 = ok2.includes(err2);
    const match3 = ok3.includes(err3);
    const match4 = ok4.includes(err4);
    const match5 = ok5.includes(err5);

    if (match1 && match2 && match3 && match4 && match5) {
        fb.className = "p-4 rounded-xl font-bold text-lg md:text-xl bg-green-100 text-green-900 border border-green-200 mt-4";
        fb.innerHTML = "🎉 Tuyệt vời! Em đã viết lại đúng chính tả tất cả các tên riêng nước ngoài trong đoạn văn:<br>1. Ép-phen (hoặc Eiffel)<br>2. A-na-tôn Phrăng-xơ<br>3. Pa-ri (Paris)<br>4. Pháp<br>5. Guxtavơ Ép-phen (Gustave Eiffel)";
        
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Chính xác! Sửa lỗi chính tả thành công.", "success");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }

        // Lưu điểm
        if (typeof window.submitMathLesson === 'function') {
            window.submitMathLesson("LTVC Tiết 219: Sửa lỗi tên riêng", 100, "ex-219-spelling", 1, 1, 1);
        }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg md:text-xl bg-red-100 text-red-850 border border-red-200 mt-4";
        fb.innerHTML = "❌ Có chỗ chưa chính xác. Em hãy nhớ viết hoa chữ cái đầu của mỗi bộ phận và sử dụng dấu gạch nối giữa các tiếng của cùng bộ phận nhé! Thử lại xem.";
        
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Chưa chính xác, thử lại xem nhé!", "error");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

window.resetEx2_219 = function() {
    document.getElementById('ipt-err-1').value = "";
    document.getElementById('ipt-err-2').value = "";
    document.getElementById('ipt-err-3').value = "";
    document.getElementById('ipt-err-4').value = "";
    document.getElementById('ipt-err-5').value = "";
    const fb = document.getElementById('fb-ex2-219');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};

// Kiểm tra đoạn văn bài tập 5
window.checkEx3_219 = function() {
    const text = document.getElementById('ipt-essay-219').value.trim();
    const fb = document.getElementById('fb-ex3-219');
    fb.classList.remove('hidden');

    if (!text) {
        fb.className = "p-4 rounded-xl font-bold text-lg md:text-xl bg-orange-100 text-orange-850 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em hãy soạn đoạn văn giới thiệu có chứa tên riêng nước ngoài trước nhé!";
        return;
    }

    const words = text.split(/[\s\n\r]+/).filter(w => w.length > 0);
    if (words.length < 15) {
        fb.className = "p-4 rounded-xl font-bold text-lg md:text-xl bg-orange-100 text-orange-850 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Đoạn văn của em hơi ngắn, hãy viết từ 3 đến 5 câu hoàn chỉnh nhé!";
        return;
    }

    // Quét tìm dấu gạch nối hoặc các tên riêng viết hoa nước ngoài phổ biến
    const hasHyphen = text.includes('-');
    const hasCapitalized = /[A-ZÀ-Ỹ]/.test(text);

    let score = 80;
    let comment = "Thầy E nhận xét: Câu văn của em viết mạch lạc và đúng chủ đề. ";

    if (hasHyphen || hasCapitalized) {
        score = 100;
        comment += "Em đã áp dụng thành công các tên riêng nước ngoài và tuân thủ quy tắc viết hoa trong câu văn!";
    } else {
        comment += "Tuy nhiên em hãy chú ý bổ sung 1 - 2 tên riêng nước ngoài (viết hoa đúng quy tắc có dấu gạch nối) vào bài làm nhé.";
    }

    fb.className = "p-4 rounded-xl font-bold text-lg md:text-xl bg-green-100 text-green-900 border border-green-200 mt-4";
    fb.innerHTML = `
        <div class="space-y-2">
            <p class="text-xl md:text-2xl font-black text-green-950">📚 Nhận xét của Thầy E (AI):</p>
            <p class="text-gray-800 leading-relaxed">${comment}</p>
            <p class="text-xl font-black text-green-950 mt-1">📊 Điểm: <span class="text-2xl md:text-3xl font-black text-green-700">${score}/100</span></p>
        </div>
    `;

    if (window.UI && typeof window.UI.showToast === 'function') {
        window.UI.showToast("Chấm điểm bài làm thành công!", "success");
    }
    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }

    // Lưu điểm
    if (typeof window.submitMathLesson === 'function') {
        window.submitMathLesson("LTVC Tiết 219: Viết đoạn văn chứa tên riêng", score, "ex-219-write", 1, 1, 1);
    }
};

window.resetEx3_219 = function() {
    document.getElementById('ipt-essay-219').value = "";
    const fb = document.getElementById('fb-ex3-219');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};