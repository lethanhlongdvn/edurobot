export const lesson23 = {
    "topic": "Tiếng Việt 5",
    "week": "4",
    "period": "23",
    "title": "LTVC: LUYỆN TẬP VỀ ĐẠI TỪ (TIẾP THEO)",
    "desc": "Bài học giúp học sinh thực hành phân tích, sử dụng đại từ xưng hô trong văn cảnh hội thoại vui, thay thế đại từ tránh lặp từ làm tăng tính mạch lạc của câu văn.",
    "subject": "LTVC",
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
                Biết sử dụng đúng các đại từ xưng hô (tôi, anh, chúng ta) phù hợp với ngữ cảnh hội thoại cụ thể.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Biết cách thay thế đại từ để tránh lỗi lặp từ, giúp các câu văn liên kết tự nhiên, sinh động hơn.
            </li>
        </ul>
    </div>

    <!-- 🕵️ BÀI 1: SUY LUẬN CỦA SƠ-LỐC HÔM -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <div class="border-b border-sky-100 pb-4">
                <span class="text-sky-900 font-black text-xl md:text-3xl flex items-center gap-2">
                    <span>🕵️</span> 1. Suy luận của Sơ-lốc Hôm
                </span>
                <p class="text-sm font-bold text-gray-800 mt-1">Chọn từ dùng để xưng hô thích hợp (tôi, anh, chúng ta) với mỗi bông hoa để hoàn chỉnh câu chuyện:</p>
            </div>

            <!-- Giao diện hội thoại vui dạng Chat UI -->
            <div class="bg-slate-50 p-6 md:p-8 rounded-[32px] border border-gray-100/50 space-y-4 max-w-3xl mx-auto font-semibold">
                <div class="bg-sky-600 text-white p-3 rounded-2xl max-w-lg border border-sky-500">
                    <p class="text-xs font-black text-sky-100 mb-1">📝 Dẫn chuyện:</p>
                    <p class="text-xl md:text-2xl">(1) Sơ-lốc Hôm và bác sĩ Oát-xơn đi cắm trại. (2) Hai người nằm ngủ trong một chiếc lều. (3) Gần sáng, Sơ-lốc Hôm lay bạn dậy và hỏi:</p>
                </div>

                <!-- Lời thoại Hôm -->
                <div class="flex flex-col items-start space-y-1">
                    <span class="text-xs font-black text-blue-600 pl-2">🕵️ Sơ-lốc Hôm:</span>
                    <div class="bg-blue-50 text-blue-600 p-4 rounded-3xl rounded-tl-none border border-blue-100 text-xl md:text-2xl space-y-2">
                        <p>– (4) Oát-xơn, nhìn xem, 
                            <select id="vn23-hoa-1" class="p-1 border border-blue-100 rounded font-bold mx-1 text-slate-800">
                                <option value="">Chọn...</option>
                                <option value="anh">anh</option>
                                <option value="tôi">tôi</option>
                                <option value="chúng ta">chúng ta</option>
                            </select> 
                            thấy cái gì?
                        </p>
                    </div>
                </div>

                <!-- Lời thoại Oát-xơn -->
                <div class="flex flex-col items-end space-y-1">
                    <span class="text-xs font-black text-emerald-800 pr-2">👨‍⚕️ Bác sĩ Oát-xơn:</span>
                    <div class="bg-emerald-50 text-emerald-800 p-4 rounded-3xl rounded-tr-none border border-emerald-100 text-xl md:text-2xl space-y-2 text-right">
                        <p>– (5) 
                            <select id="vn23-hoa-2" class="p-1 border border-emerald-100 rounded font-bold mx-1 text-slate-800">
                                <option value="">Chọn...</option>
                                <option value="anh">anh</option>
                                <option value="tôi">tôi</option>
                                <option value="chúng ta">chúng ta</option>
                            </select> 
                            thấy rất nhiều sao.
                        </p>
                    </div>
                </div>

                <!-- Lời thoại Hôm -->
                <div class="flex flex-col items-start space-y-1">
                    <span class="text-xs font-black text-blue-600 pl-2">🕵️ Sơ-lốc Hôm:</span>
                    <div class="bg-blue-50 text-blue-600 p-4 rounded-3xl rounded-tl-none border border-blue-100 text-xl md:text-2xl">
                        <p>– (6) Theo anh, thế có nghĩa là gì?</p>
                    </div>
                </div>

                <!-- Lời thoại Oát-xơn -->
                <div class="flex flex-col items-end space-y-1">
                    <span class="text-xs font-black text-emerald-800 pr-2">👨‍⚕️ Bác sĩ Oát-xơn:</span>
                    <div class="bg-emerald-50 text-emerald-800 p-4 rounded-3xl rounded-tr-none border border-emerald-100 text-xl md:text-2xl text-right space-y-2">
                        <p>– (7) Nghĩa là 
                            <select id="vn23-hoa-3" class="p-1 border border-emerald-100 rounded font-bold mx-1 text-slate-800">
                                <option value="">Chọn...</option>
                                <option value="anh">anh</option>
                                <option value="tôi">tôi</option>
                                <option value="chúng ta">chúng ta</option>
                            </select> 
                            sẽ có một ngày đẹp trời. 
                        </p>
                        <p>
                            (8) Còn 
                            <select id="vn23-hoa-4" class="p-1 border border-emerald-100 rounded font-bold mx-1 text-slate-800">
                                <option value="">Chọn...</option>
                                <option value="anh">anh</option>
                                <option value="tôi">tôi</option>
                                <option value="chúng ta">chúng ta</option>
                            </select>, 
                            <select id="vn23-hoa-5" class="p-1 border border-emerald-100 rounded font-bold mx-1 text-slate-800">
                                <option value="">Chọn...</option>
                                <option value="anh">anh</option>
                                <option value="tôi">tôi</option>
                                <option value="chúng ta">chúng ta</option>
                            </select> nghĩ sao?
                        </p>
                    </div>
                </div>

                <!-- Lời thoại Hôm -->
                <div class="flex flex-col items-start space-y-1">
                    <span class="text-xs font-black text-blue-600 pl-2">🕵️ Sơ-lốc Hôm:</span>
                    <div class="bg-blue-50 text-blue-600 p-4 rounded-3xl rounded-tl-none border border-blue-100 text-xl md:text-2xl space-y-2">
                        <p>– (9) Theo 
                            <select id="vn23-hoa-6" class="p-1 border border-blue-100 rounded font-bold mx-1 text-slate-800">
                                <option value="">Chọn...</option>
                                <option value="anh">anh</option>
                                <option value="tôi">tôi</option>
                                <option value="chúng ta">chúng ta</option>
                            </select>, 
                            điều này có nghĩa là ai đó đã đánh cắp cái lều của 
                            <select id="vn23-hoa-7" class="p-1 border border-blue-100 rounded font-bold mx-1 text-slate-800">
                                <option value="">Chọn...</option>
                                <option value="anh">anh</option>
                                <option value="tôi">tôi</option>
                                <option value="chúng ta">chúng ta</option>
                            </select>.
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-center">
                <button onclick="checkHoiThoai23()" class="px-8 py-3 bg-sky-600 text-white font-black rounded-xl hover:bg-sky-600 transition-all text-base shadow-md">KIỂM TRA HỘI THOẠI ✓</button>
            </div>
            <div id="fb-vn23-ht" class="hidden text-sm font-bold px-3 py-1.5 rounded-lg text-center"></div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- CÂU 1B & 1C: TRẮC NGHIỆM ĐẠI TỪ THAY THẾ & NGHI VẤN -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">❓</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Phân tích đại từ trong câu chuyện</h3>
            </div>

            <div class="space-y-6 font-semibold text-gray-800">
                <!-- Câu 1b -->
                <div class="bg-white p-5 rounded-2xl border border-sky-100 space-y-3 shadow-sm">
                    <p class="text-2xl md:text-3xl text-gray-900 font-black">b. Đại từ thay thế trong câu 6 ("Theo anh, thế có nghĩa là gì?") là gì? Những đại từ nào có thể thay thế cho nó?</p>
                    <div class="bg-sky-50/50 p-3 rounded-xl border border-sky-100 text-sm mb-2 text-sky-800">
                        *Từ được hỏi: "thế" thay thế cho cả nội dung trả lời của Oát-xơn ở câu 5.
                    </div>
                    <select id="vn23-qb" class="w-full p-3 border border-gray-100 rounded-lg text-xl md:text-2xl font-semibold">
                        <option value="">Chọn đáp án đúng...</option>
                        <option value="ok">Đại từ "thế"; có thể thay thế bằng các từ: "vậy", "đó", "điều đó".</option>
                        <option value="wrong">Đại từ "anh"; có thể thay bằng: "tôi", "chúng ta".</option>
                        <option value="wrong2">Đại từ "gì"; có thể thay bằng: "sao", "thế nào".</option>
                    </select>
                </div>

                <!-- Câu 1c -->
                <div class="bg-white p-5 rounded-2xl border border-sky-100 space-y-3 shadow-sm">
                    <p class="text-2xl md:text-3xl text-gray-900 font-black">c. Thay đại từ nghi vấn trong câu 8 ("Còn anh, anh nghĩ sao?") bằng đại từ nghi vấn khác thích hợp:</p>
                    <select id="vn23-qc" class="w-full p-3 border border-gray-100 rounded-lg text-xl md:text-2xl font-semibold">
                        <option value="">Chọn câu thay thế đúng...</option>
                        <option value="wrong">Còn anh, anh nghĩ ai?</option>
                        <option value="ok">Còn anh, anh nghĩ thế nào? (hoặc: nghĩ gì? / nghĩ ra sao?)</option>
                        <option value="wrong2">Còn anh, anh nghĩ đâu?</option>
                    </select>
                </div>
            </div>

            <div class="flex justify-center">
                <button onclick="checkCauHoiPhanTich23()" class="px-8 py-3 bg-sky-600 text-white font-black rounded-xl hover:bg-sky-600 transition-all text-base shadow-md">KIỂM TRA PHÂN TÍCH ✓</button>
            </div>
            <div id="fb-vn23-pt" class="hidden text-base font-bold px-4 py-2 rounded-xl text-center"></div>
        </div>
    </section>

    <!-- BÀI 2: THAY THẾ TRÁNH LẶP TỪ -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">✏️</div>
                <div>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800">2. Thay thế đại từ tránh lặp từ</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Gõ đại từ thay thế thích hợp cho những từ ngữ bị lặp (tô đỏ) trong các đoạn dưới đây</p>
                </div>
            </div>

            <div class="space-y-6 font-semibold text-gray-800">
                <!-- Câu a -->
                <div class="bg-white p-6 md:p-8 rounded-3xl border border-sky-100 space-y-4 shadow-sm">
                    <p class="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed">a. "Thành tặng tôi một quyển truyện tranh. <span class="text-red-800 line-through">Việc Thành tặng tôi một quyển truyện tranh</span> làm tôi rất xúc động."</p>
                    <div class="flex flex-col md:flex-row md:items-center gap-4">
                        <span class="text-lg md:text-3xl text-gray-800 font-black shrink-0">Thay thế bằng:</span>
                        <input type="text" id="ans-vn23-rep-a" placeholder="Gõ đại từ thay thế (ví dụ: Việc đó/Điều đó)..." class="p-3.5 border-2 border-sky-100 rounded-xl text-lg md:text-3xl font-black w-full max-w-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all">
                    </div>
                </div>

                <!-- Câu b -->
                <div class="bg-white p-6 md:p-8 rounded-3xl border border-sky-100 space-y-4 shadow-sm">
                    <p class="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed">b. "Thanh nhìn ra cái khung cửa mở rộng. Ngoài <span class="text-red-800 line-through">cái khung cửa mở rộng</span> là một khu vườn xanh mát."</p>
                    <div class="flex flex-col md:flex-row md:items-center gap-4">
                        <span class="text-lg md:text-3xl text-gray-800 font-black shrink-0">Thay thế bằng:</span>
                        <input type="text" id="ans-vn23-rep-b" placeholder="Gõ đại từ thay thế (ví dụ: đó/đấy)..." class="p-3.5 border-2 border-sky-100 rounded-xl text-lg md:text-3xl font-black w-full max-w-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all">
                    </div>
                </div>

                <!-- Câu c -->
                <div class="bg-white p-6 md:p-8 rounded-3xl border border-sky-100 space-y-4 shadow-sm">
                    <p class="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed">c. "Tôi thích xem phim hoạt hình. Chị tôi cũng <span class="text-red-800 line-through">thích xem phim hoạt hình</span>."</p>
                    <div class="flex flex-col md:flex-row md:items-center gap-4">
                        <span class="text-lg md:text-3xl text-gray-800 font-black shrink-0">Thay thế bằng:</span>
                        <input type="text" id="ans-vn23-rep-c" placeholder="Gõ đại từ thay thế (ví dụ: thế/vậy)..." class="p-3.5 border-2 border-sky-100 rounded-xl text-lg md:text-3xl font-black w-full max-w-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all">
                    </div>
                </div>

                <!-- Tác dụng -->
                <div class="bg-amber-50/50 p-6 md:p-8 rounded-3xl border border-amber-100 space-y-3">
                    <p class="text-2xl md:text-4xl text-amber-900 font-black">👉 Việc dùng đại từ thay thế như vậy có tác dụng gì?</p>
                    <select id="vn23-rep-effect" class="w-full p-3.5 border-2 border-amber-200 rounded-xl text-lg md:text-3xl font-black text-amber-600 bg-white focus:border-amber-500 outline-none transition-all">
                        <option value="">Chọn tác dụng...</option>
                        <option value="ok">Giúp tránh lặp từ ngữ, làm câu văn mạch lạc và liên kết các câu chặt chẽ hơn.</option>
                        <option value="wrong">Giúp tăng độ dài của câu văn để ghi điểm tập làm văn.</option>
                        <option value="wrong2">Giúp thay đổi ý nghĩa hoàn toàn của câu ban đầu.</option>
                    </select>
                </div>
            </div>

            <div class="flex justify-center">
                <button onclick="checkTranhLap23()" class="px-8 py-3 bg-sky-600 text-white font-black rounded-xl hover:bg-sky-600 transition-all text-base shadow-md">KIỂM TRA TRÁNH LẶP TỪ ✓</button>
            </div>
            <div id="fb-vn23-tl" class="hidden text-base font-bold px-4 py-2 rounded-xl text-center"></div>
        </div>
    </section>

    <!-- BÀI 3: ĐÓNG VAI BÁC SĨ OÁT-XƠN VIẾT CÂU -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎭</div>
                <div>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800">3. Đóng vai bác sĩ Oát-xơn</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Đóng vai bác sĩ Oát-xơn trong câu chuyện trên, viết câu đáp lại lời của Sơ-lốc Hôm, trong đó có chứa một đại từ</p>
                </div>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm space-y-4">
                <div class="bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-blue-600 font-bold text-xl md:text-2xl">
                    🕵️ Lời của Hôm trước đó: "Oát-xơn, nhìn xem, anh thấy cái gì? ... Theo tôi, điều này có nghĩa là ai đó đã đánh cắp cái lều của chúng ta!"
                </div>
                <div>
                    <label class="text-sm font-black text-sky-800">💬 Câu đáp lại của em (vai Oát-xơn):</label>
                    <textarea id="ans-vn23-oatxon" rows="3" placeholder="Ví dụ: Ôi trời đất ơi, anh nói đúng thế! Hoặc: Trời ơi, vậy mà tôi lại không nhận ra điều đó!..." class="w-full p-4 border-2 border-sky-100 rounded-2xl outline-none focus:border-sky-500 font-bold bg-sky-50/10 mt-1 text-2xl md:text-3xl"></textarea>
                </div>

                <div class="flex justify-center pt-2">
                    <button onclick="checkOatxon23()" class="px-8 py-3 bg-sky-600 text-white font-black rounded-xl hover:bg-sky-600 transition-all text-base shadow-md">NỘP CÂU ĐÁP LẠI ✓</button>
                </div>
                <div id="fb-vn23-ox" class="hidden text-base font-bold px-4 py-2 rounded-xl text-center"></div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiVn23()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Đại từ xưng hô thích hợp nhất để Oát-xơn xưng hô với Hôm khi trả lời ở câu 5 là gì?",
            "options": [
                "Anh",
                "Tôi (Tôi thấy rất nhiều sao.)",
                "Chúng ta",
                "Họ"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Cụm từ xưng hô thích hợp mà Oát-xơn nói về cả hai người ở câu 7 là gì?",
            "options": [
                "Chúng ta (Nghĩa là chúng ta sẽ có một ngày đẹp trời.)",
                "Chúng tôi",
                "Bọn họ",
                "Tôi và anh"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi Sơ-lốc Hôm giải thích ở câu 9, Hôm đã dùng đại từ xưng hô nào để chỉ Oát-xơn?",
            "options": [
                "anh (Theo anh, điều này có nghĩa là...)",
                "tôi",
                "chúng ta",
                "các cậu"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Đại từ 'thế' trong câu 6 'Theo anh, thế có nghĩa là gì?' thay thế cho điều gì?",
            "options": [
                "Chiếc lều cắm trại",
                "Sự việc Oát-xơn nhìn thấy rất nhiều sao trên trời",
                "Một ngày đẹp trời",
                "Bác sĩ Oát-xơn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ nào sau đây KHÔNG thể dùng để thay thế cho đại từ 'thế' trong câu 6?",
            "options": [
                "đó",
                "vậy",
                "sao",
                "điều đó"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Đại từ 'sao' trong câu 'Còn anh, anh nghĩ sao?' thuộc nhóm đại từ nào?",
            "options": [
                "Đại từ chỉ người xưng hô",
                "Đại từ thay thế",
                "Đại từ nghi vấn",
                "Đại từ chỉ địa điểm"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Khi muốn thay thế đại từ nghi vấn 'sao' bằng một đại từ nghi vấn khác trong câu 8, từ nào hợp lý nhất?",
            "options": [
                "gì (Còn anh, anh nghĩ gì?)",
                "thế nào (Còn anh, anh nghĩ thế nào?)",
                "ra sao (Còn anh, anh nghĩ ra sao?)",
                "Tất cả các từ trên đều đúng"
            ],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Đoạn văn 'Thành tặng tôi một quyển truyện tranh. Việc đó làm tôi rất xúc động.', đại từ 'việc đó' thay cho cụm từ nào?",
            "options": [
                "Một quyển truyện tranh",
                "Thành tặng tôi một quyển truyện tranh",
                "Tôi rất xúc động",
                "Thành tặng truyện"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đại từ nào dùng để thế cho cụm từ 'khung cửa mở rộng' ở đoạn b?",
            "options": [
                "đó / đấy / ngoài đó",
                "nó",
                "vậy",
                "thế"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong đoạn c 'Tôi thích xem phim hoạt hình. Chị tôi cũng thế.', từ 'thế' thay cho cụm từ nào?",
            "options": [
                "phim hoạt hình",
                "thích xem phim hoạt hình",
                "tôi thích xem phim",
                "xem phim"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tác dụng cốt lõi của việc dùng đại từ thay thế trong văn bản là gì?",
            "options": [
                "Làm cho bài văn dài hơn và nhiều chữ hơn",
                "Giúp tránh lỗi lặp từ ngữ, làm câu văn mạch lạc, trôi chảy và liên kết chặt chẽ",
                "Làm cho câu hỏi trở nên khó hiểu hơn",
                "Để nhấn mạnh từ ngữ bị thay thế"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đại từ 'chúng ta' ở câu 9 'đánh cắp cái lều của chúng ta' gồm những ai?",
            "options": [
                "Chỉ Sơ-lốc Hôm",
                "Chỉ bác sĩ Oát-xơn",
                "Gồm cả Sơ-lốc Hôm và bác sĩ Oát-xơn",
                "Tất cả mọi người đi cắm trại trong rừng"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Sự thật bất ngờ mà Hôm phát hiện ra khi nhìn thấy các vì sao là gì?",
            "options": [
                "Ngày mai sẽ là một ngày đẹp trời nắng ráo",
                "Chiếc lều cắm trại của họ đã bị ai đó lấy trộm mất",
                "Họ đang ở trong một khách sạn đầy sao",
                "Bầu trời có rất nhiều chòm sao đẹp"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Đại từ nào dưới đây là đại từ xưng hô?",
            "options": [
                "tôi, anh, chúng ta, chúng tôi, cậu",
                "đó, đây, kia, thế, vậy",
                "ai, cái gì, sao, thế nào, bao giờ",
                "đẹp đẽ, lấp lánh, rì rào"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'thế nào' trong câu 'Sức khỏe của bà thế nào?' đóng vai trò là:",
            "options": [
                "Đại từ xưng hô",
                "Đại từ nghi vấn",
                "Đại từ thay thế",
                "Danh từ riêng chỉ người"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- KIỂM TRA ĐIỀN ĐẠI TỪ BÀI 1A ---
window.checkHoiThoai23 = function() {
    const val1 = document.getElementById('vn23-hoa-1')?.value;
    const val2 = document.getElementById('vn23-hoa-2')?.value;
    const val3 = document.getElementById('vn23-hoa-3')?.value;
    const val4 = document.getElementById('vn23-hoa-4')?.value;
    const val5 = document.getElementById('vn23-hoa-5')?.value;
    const val6 = document.getElementById('vn23-hoa-6')?.value;
    const val7 = document.getElementById('vn23-hoa-7')?.value;
    const fb = document.getElementById('fb-vn23-ht');

    if (!fb) return;
    fb.classList.remove('hidden');

    if (!val1 || !val2 || !val3 || !val4 || !val5 || !val6 || !val7) {
        fb.innerHTML = "⚠️ Em hãy chọn từ xưng hô thích hợp cho tất cả 7 bông hoa nhé!";
        fb.className = "text-sm font-bold px-3 py-1.5 rounded-lg bg-amber-500 text-white mt-2";
        return;
    }

    // Đúng:
    // (4) anh
    // (5) tôi
    // (7) chúng ta, anh, anh
    // (9) tôi (hoặc anh/tôi tuỳ góc nhìn, nhưng SGK là: Theo tôi -> val6 = tôi/anh; lều của chúng ta -> val7 = chúng ta)
    // Đáp án chuẩn mực theo SGK:
    // 1: anh
    // 2: tôi
    // 3: chúng ta
    // 4: anh
    // 5: anh
    // 6: tôi
    // 7: chúng ta
    const dung = val1 === 'anh' && val2 === 'tôi' && val3 === 'chúng ta' && val4 === 'anh' && val5 === 'anh' && val6 === 'tôi' && val7 === 'chúng ta';

    if (dung) {
        fb.innerHTML = "🎉 Chính xác! Em đã điền đúng các đại từ xưng hô để hoàn chỉnh câu chuyện vui.";
        fb.className = "text-sm font-bold px-3 py-1.5 rounded-lg bg-emerald-600 text-white mt-2";
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác. Em hãy chú ý đến vai nói (ai đang hỏi, ai đang trả lời) để chọn từ xưng hô phù hợp nhé!";
        fb.className = "text-sm font-bold px-3 py-1.5 rounded-lg bg-rose-600 text-white mt-2";
    }
};

// --- KIỂM TRA PHÂN TÍCH CÂU 1B & 1C ---
window.checkCauHoiPhanTich23 = function() {
    const valB = document.getElementById('vn23-qb')?.value;
    const valC = document.getElementById('vn23-qc')?.value;
    const fb = document.getElementById('fb-vn23-pt');

    if (!fb) return;
    fb.classList.remove('hidden');

    if (!valB || !valC) {
        fb.innerHTML = "⚠️ Em hãy chọn đáp án cho cả 2 câu hỏi b và c nhé!";
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-amber-500 text-white";
        return;
    }

    if (valB === 'ok' && valC === 'ok') {
        fb.innerHTML = "🎉 Chính xác! Em đã phân tích đúng đại từ thay thế và đại từ nghi vấn trong hội thoại.";
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-emerald-600 text-white";
    } else {
        fb.innerHTML = "⚠️ Chưa đúng rồi. Hãy nhớ lại tác dụng thay thế của đại từ và cách sử dụng đại từ nghi vấn nhé!";
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-rose-600 text-white";
    }
};

// --- KIỂM TRA TRÁNH LẶP TỪ BÀI 2 ---
window.checkTranhLap23 = function() {
    const a = document.getElementById('ans-vn23-rep-a')?.value.trim().toLowerCase();
    const b = document.getElementById('ans-vn23-rep-b')?.value.trim().toLowerCase();
    const c = document.getElementById('ans-vn23-rep-c')?.value.trim().toLowerCase();
    const effect = document.getElementById('vn23-rep-effect')?.value;
    const fb = document.getElementById('fb-vn23-tl');

    if (!fb) return;
    fb.classList.remove('hidden');

    if (!a || !b || !c || !effect) {
        fb.innerHTML = "⚠️ Em hãy điền câu trả lời cho cả a, b, c và chọn tác dụng nhé!";
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-amber-500 text-white";
        return;
    }

    // Các đáp án chấp nhận:
    // a: điều đó, việc đó, việc này, điều này, nó
    // b: đó, đấy, ngoài đó, nơi đó
    // c: thế, vậy
    const dungA = a.includes('đó') || a.includes('nó') || a.includes('này');
    const dungB = b.includes('đó') || b.includes('đấy');
    const dungC = c.includes('thế') || c.includes('vậy');
    const dungEffect = effect === 'ok';

    if (dungA && dungB && dungC && dungEffect) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã điền chính xác các đại từ thay thế và nắm chắc tác dụng liên kết câu, tránh lặp từ.";
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-emerald-600 text-white";
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác. Em hãy kiểm tra xem đại từ đã gõ có hợp lý và có chọn đúng tác dụng không nhé!";
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-rose-600 text-white";
    }
};

// --- KIỂM TRA ĐỐNG VAI BÀI 3 ---
window.checkOatxon23 = function() {
    const text = document.getElementById('ans-vn23-oatxon')?.value.trim();
    const fb = document.getElementById('fb-vn23-ox');

    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy nhập câu trả lời của bác sĩ Oát-xơn nhé!";
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-amber-500 text-white";
        return;
    }

    if (text.length < 10) {
        fb.innerHTML = "⚠️ Câu trả lời của em hơi ngắn, hãy viết đầy đủ ý nghĩa phản hồi nhé!";
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-amber-500 text-white";
        return;
    }

    // Kiểm tra xem câu có chứa đại từ (tôi, tớ, ta, chúng ta, anh, cậu, thế, vậy, đó, đấy, nó, gì, sao...)
    const lower = text.toLowerCase();
    const keywords = ['tôi', 'anh', 'chúng ta', 'cậu', 'nó', 'đó', 'đấy', 'thế', 'vậy', 'sao', 'thế nào', 'gì'];
    const coDaiTu = keywords.some(kw => lower.includes(kw));

    if (coDaiTu) {
        fb.innerHTML = `🎉 Rất tốt! Em đã đóng vai bác sĩ Oát-xơn đối thoại rất dí nhâm. Câu viết chứa đại từ hợp lệ.<br><span class="text-sm opacity-90">Câu của em: "${text}"</span>`;
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-emerald-600 text-white";
    } else {
        fb.innerHTML = "⚠️ Câu trả lời chưa chứa đại từ hợp lệ (như: tôi, anh, cậu, thế, vậy, đó...). Em hãy bổ sung thêm đại từ vào câu nhé!";
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-rose-600 text-white";
    }
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.nopBaiVn23 = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 23',
            '✏️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">✏️</span><p class="text-lg md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài học Luyện tập về đại từ!</p><p class="text-lg text-gray-800 mt-3">Sử dụng đại từ xưng hô khéo léo và đại từ thay thế phù hợp giúp các câu văn liên kết tự nhiên, mạch lạc hơn.</p></div>'
        );
    }
};
