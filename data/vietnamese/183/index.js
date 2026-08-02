export const lesson183 = {
    "topic": "Tiếng Việt 5",
    "week": "27",
    "period": "183-184",
    "title": "ÔN TẬP VÀ ĐÁNH GIÁ GIỮA HKII (TIẾT 1 - 2)",
    "desc": "Học sinh thực hiện ôn tập đọc hiểu (nhân vật, tác phẩm, viết tóm tắt) và thực hành kiến thức tiếng Việt về câu đơn, câu ghép, cách liên kết các vế câu ghép.",
    "subject": "Tiếng Việt",
    "theme": "Hương sắc trăm miền",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-4xl mx-auto">
    <!-- 🎯 Mục tiêu ôn tập -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-blue-600 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu ôn tập (Tiết 1 - 2)
        </h3>
        <ul class="space-y-3 text-blue-950 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Nhớ tên nhân vật, tên câu chuyện và tóm tắt được nội dung chính của các bài đọc đã học từ đầu học kì II.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Phân biệt chính xác câu đơn và câu ghép; xác định được cấu trúc (Chủ ngữ - Vị ngữ) của từng vế trong câu ghép.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết cách liên kết các vế câu ghép bằng kết từ, quan hệ từ hoặc các cặp từ hô ứng thích hợp.
            </li>
        </ul>
    </div>

    <!-- 🧩 BÀI 1: TÔI LÀ AI? (INTERACTIVE MATCHING GAME) -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-6 md:p-8 shadow-2xl bg-white border border-slate-100 space-y-6">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-md">1</div>
                <h2 class="text-2xl md:text-5xl font-black text-gray-800">Dự đoán nhân vật & tác phẩm: "Tôi là ai?"</h2>
            </div>
            
            <p class="text-lg md:text-xl font-semibold text-gray-600">Đọc lời giới thiệu của mỗi nhân vật dưới đây, nhấp chọn đúng nhân vật và tác phẩm tương ứng:</p>

            <div class="space-y-6">
                <!-- Nhân vật 1 -->
                <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <p class="text-lg md:text-xl font-bold text-slate-800">
                        "(1) Tôi đã thay mặt cả lớp cảm ơn cô giáo và tặng cô hộp quà chứa ba mươi lăm lá thư của cả lớp."
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <select id="char-1" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white">
                            <option value="">-- Chọn nhân vật --</option>
                            <option value="Quang">Quang</option>
                            <option value="Tân">Tân</option>
                            <option value="Huệ">Huệ</option>
                        </select>
                        <select id="story-1" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white">
                            <option value="">-- Chọn câu chuyện --</option>
                            <option value="Hộp quà màu thiên thanh">Hộp quà màu thiên thanh</option>
                            <option value="Giỏ hoa tháng Năm">Giỏ hoa tháng Năm</option>
                            <option value="Rừng của Mát">Rừng của Mát</option>
                        </select>
                    </div>
                </div>

                <!-- Nhân vật 2 -->
                <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <p class="text-lg md:text-xl font-bold text-slate-800">
                        "(2) Tôi chọn thật nhiều hoa màu vàng, loại hoa bạn tôi yêu thích, để làm một giỏ hoa tặng bạn."
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <select id="char-2" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white">
                            <option value="">-- Chọn nhân vật --</option>
                            <option value="Pam">Pam</option>
                            <option value="Xu-di">Xu-di</option>
                            <option value="Chị của Xu-di">Chị của Xu-di</option>
                        </select>
                        <select id="story-2" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white">
                            <option value="">-- Chọn câu chuyện --</option>
                            <option value="Giỏ hoa tháng Năm">Giỏ hoa tháng Năm</option>
                            <option value="Thanh âm của gió">Thanh âm của gió</option>
                            <option value="Hộp quà màu thiên thanh">Hộp quà màu thiên thanh</option>
                        </select>
                    </div>
                </div>

                <!-- Nhân vật 3 -->
                <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <p class="text-lg md:text-xl font-bold text-slate-800">
                        "(3) Khi tôi cất giọng hát, tiếng hát vang khắp núi rừng, khiến muông thú quên cả phá lúa và nhảy múa theo tiếng hát của tôi."
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <select id="char-3" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white">
                            <option value="">-- Chọn nhân vật --</option>
                            <option value="Y Sơn">Chàng Y Sơn</option>
                            <option value="Thào A Sùng">Thào A Sùng</option>
                            <option value="Mát">Anh Mát</option>
                        </select>
                        <select id="story-3" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white">
                            <option value="">-- Chọn câu chuyện --</option>
                            <option value="Tiếng hát của người đá">Tiếng hát của người đá</option>
                            <option value="Đàn t'rưng">Đàn t'rưng</option>
                            <option value="Đường quê Đồng Tháp Mười">Đường quê Đồng Tháp Mười</option>
                        </select>
                    </div>
                </div>

                <!-- Nhân vật 4 -->
                <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <p class="text-lg md:text-xl font-bold text-slate-800">
                        "(4) Tôi quyết tâm khôi phục lại trang trại sau khi bị cháy và tôi đã làm được."
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <select id="char-4" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white">
                            <option value="">-- Chọn nhân vật --</option>
                            <option value="Mát">Anh Mát</option>
                            <option value="Ông nội của Mát">Ông nội của Mát</option>
                            <option value="Bà cụ cùng giường">Bà cụ cùng giường</option>
                        </select>
                        <select id="story-4" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white">
                            <option value="">-- Chọn câu chuyện --</option>
                            <option value="Rừng của Mát">Rừng của Mát</option>
                            <option value="Xuồng ba lá quê tôi">Xuồng ba lá quê tôi</option>
                            <option value="Một người hùng thầm lặng">Một người hùng thầm lặng</option>
                        </select>
                    </div>
                </div>

                <!-- Nhân vật 5 -->
                <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <p class="text-lg md:text-xl font-bold text-slate-800">
                        "(5) Tôi ước mơ trở thành một kĩ sư nông nghiệp để phát triển cây chè ở quê hương Tà Xùa của tôi."
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <select id="char-5" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white">
                            <option value="">-- Chọn nhân vật --</option>
                            <option value="Thào A Sùng">Thào A Sùng</option>
                            <option value="Tân">Bạn Tân</option>
                            <option value="Mát">Anh Mát</option>
                        </select>
                        <select id="story-5" class="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none text-base font-bold bg-white">
                            <option value="">-- Chọn câu chuyện --</option>
                            <option value="Những búp chè trên cây cổ thụ">Những búp chè trên cây cổ thụ</option>
                            <option value="Hạt gạo làng ta">Hạt gạo làng ta</option>
                            <option value="Đọc mở rộng">Đọc mở rộng</option>
                        </select>
                    </div>
                </div>

                <div class="flex justify-center flex-col items-center gap-4">
                    <button onclick="check183Matching()" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all text-lg">
                        🔍 Kiểm tra kết quả
                    </button>
                    <div id="matching-feedback" class="text-lg font-black text-center hidden"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- 📝 BÀI 2: TÓM TẮT NỘI DUNG CHÍNH (WRITING & AI GRADING) -->
    <section class="w-full">
        <div class="bg-white rounded-[32px] p-6 md:p-8 border border-slate-100 shadow-xl space-y-6">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-md">2</div>
                <h2 class="text-2xl md:text-5xl font-black text-gray-800">Nêu nội dung chính của một câu chuyện</h2>
            </div>
            
            <div class="p-6 bg-blue-50/50 rounded-2xl border border-blue-150 space-y-4">
                <label class="text-lg md:text-xl font-bold text-blue-600 block">Em hãy chọn một trong năm câu chuyện ở trên và viết đoạn văn ngắn (3 - 5 câu) nêu nội dung chính của câu chuyện đó:</label>
                
                <select id="selected-summary-story" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-100 outline-none text-lg bg-white font-bold text-gray-800">
                    <option value="Hộp quà màu thiên thanh">Hộp quà màu thiên thanh</option>
                    <option value="Giỏ hoa tháng Năm">Giỏ hoa tháng Năm</option>
                    <option value="Tiếng hát của người đá">Tiếng hát của người đá</option>
                    <option value="Rừng của Mát">Rừng của Mát</option>
                    <option value="Những búp chè trên cây cổ thụ">Những búp chè trên cây cổ thụ</option>
                </select>

                <textarea id="story-summary-text" rows="4" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-100 outline-none text-lg" placeholder="Nhập tóm tắt nội dung chính của câu chuyện tại đây..."></textarea>
                
                <div class="flex justify-center">
                    <button onclick="check183SummaryAI()" class="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-2xl shadow-xl transition-all active:scale-[0.95] flex items-center justify-center gap-3 text-lg md:text-xl uppercase tracking-wider">
                        <span>🤖</span> 
                        <span>Nhận xét tóm tắt bằng AI</span>
                    </button>
                </div>
                <div id="fb-183-summary-ai" class="w-full hidden mt-4"></div>
            </div>
        </div>
    </section>

    <!-- 📖 BÀI 3: PHÂN TÍCH CÂU ĐƠN - CÂU GHÉP (INTERACTIVE TEXT PARSER) -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-6 md:p-8 shadow-2xl bg-white border border-slate-100 space-y-6">
            <div class="flex items-start gap-3">
                <span class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md">3</span>
                <h2 class="text-2xl md:text-5xl font-black text-gray-800">Phân biệt câu đơn, câu ghép & xác định vế câu</h2>
            </div>

            <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 serif-font leading-relaxed text-gray-800 text-xl md:text-4xl">
                (1) Mùa đông, rùa ngại rét. (2) Gió cứ thổi vù vù. (3) Rùa đợi đến mùa xuân. 
                (4) Mùa xuân nhiều hoa, nhưng mùa xuân vẫn là đứa em của mùa đông. 
                (5) Mưa phùn vẫn cứ lai rai và gió bắc vẫn thút thít ở các khe núi. 
                (6) Rùa lại đợi đến hè. (7) Mùa hè tạnh ráo. (8) Cây cối có nhiều quả chín thơm tho. 
                (9) Nhưng cái nóng cứ hầm hập. (10) Cả ngày, bụi cuốn mịt mùng. 
                (11) Hễ cơn dông đến thì đất đá lại như sôi lên, nước lũ đổ ào ào.
                <p class="text-right text-base font-bold text-gray-500 mt-2">(Theo Võ Quảng)</p>
            </div>

            <p class="text-lg md:text-xl font-bold text-slate-700">Em hãy nhấp vào từng câu dưới đây để phân loại và xem phân tích cú pháp chi tiết:</p>

            <div class="space-y-3" id="sentence-analysis-list">
                <div class="border border-slate-150 rounded-xl bg-white hover:bg-slate-50/50 transition-all overflow-hidden">
                    <button onclick="toggleSentenceAnalysis(1)" class="w-full p-4 flex items-center justify-between text-left font-bold text-gray-800 text-lg md:text-xl">
                        <span>Câu 1: "Mùa đông, rùa ngại rét."</span>
                        <span class="text-blue-600 font-extrabold text-sm uppercase px-3 py-1 bg-blue-50 rounded-full" id="tag-s-1">Xem đáp án</span>
                    </button>
                    <div id="ans-s-1" class="hidden p-4 border-t border-slate-100 bg-emerald-50/20 text-base md:text-lg text-gray-700 space-y-2">
                        <p><strong>🏷️ Phân loại:</strong> <span class="text-emerald-700 font-black">Câu đơn</span></p>
                        <p><strong>📐 Cấu trúc cú pháp:</strong></p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><span class="text-amber-700">Mùa đông</span>: Trạng ngữ (chỉ thời gian).</li>
                            <li><span class="text-blue-700">rùa</span>: Chủ ngữ (CN).</li>
                            <li><span class="text-emerald-700">ngại rét</span>: Vị ngữ (VN).</li>
                        </ul>
                    </div>
                </div>

                <div class="border border-slate-150 rounded-xl bg-white hover:bg-slate-50/50 transition-all overflow-hidden">
                    <button onclick="toggleSentenceAnalysis(4)" class="w-full p-4 flex items-center justify-between text-left font-bold text-gray-800 text-lg md:text-xl">
                        <span>Câu 4: "Mùa xuân nhiều hoa, nhưng mùa xuân vẫn là đứa em của mùa đông."</span>
                        <span class="text-blue-600 font-extrabold text-sm uppercase px-3 py-1 bg-blue-50 rounded-full" id="tag-s-4">Xem đáp án</span>
                    </button>
                    <div id="ans-s-4" class="hidden p-4 border-t border-slate-100 bg-emerald-50/20 text-base md:text-lg text-gray-700 space-y-2">
                        <p><strong>🏷️ Phân loại:</strong> <span class="text-blue-700 font-black">Câu ghép</span></p>
                        <p><strong>📐 Cấu trúc cú pháp:</strong> Gồm 2 vế câu nối với nhau bằng kết từ <span class="text-red-600 font-black">"nhưng"</span>.</p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Vế 1:</strong> Mùa xuân (CN1) // nhiều hoa (VN1).</li>
                            <li><strong>Vế 2:</strong> mùa xuân (CN2) // vẫn là đứa em của mùa đông (VN2).</li>
                        </ul>
                    </div>
                </div>

                <div class="border border-slate-150 rounded-xl bg-white hover:bg-slate-50/50 transition-all overflow-hidden">
                    <button onclick="toggleSentenceAnalysis(5)" class="w-full p-4 flex items-center justify-between text-left font-bold text-gray-800 text-lg md:text-xl">
                        <span>Câu 5: "Mưa phùn vẫn cứ lai rai và gió bắc vẫn thút thít ở các khe núi."</span>
                        <span class="text-blue-600 font-extrabold text-sm uppercase px-3 py-1 bg-blue-50 rounded-full" id="tag-s-5">Xem đáp án</span>
                    </button>
                    <div id="ans-s-5" class="hidden p-4 border-t border-slate-100 bg-emerald-50/20 text-base md:text-lg text-gray-700 space-y-2">
                        <p><strong>🏷️ Phân loại:</strong> <span class="text-blue-700 font-black">Câu ghép</span></p>
                        <p><strong>📐 Cấu trúc cú pháp:</strong> Gồm 2 vế câu nối bằng kết từ <span class="text-red-600 font-black">"và"</span>.</p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Vế 1:</strong> Mưa phùn (CN1) // vẫn cứ lai rai (VN1).</li>
                            <li><strong>Vế 2:</strong> gió bắc (CN2) // vẫn thút thít ở các khe núi (VN2).</li>
                        </ul>
                    </div>
                </div>

                <div class="border border-slate-150 rounded-xl bg-white hover:bg-slate-50/50 transition-all overflow-hidden">
                    <button onclick="toggleSentenceAnalysis(11)" class="w-full p-4 flex items-center justify-between text-left font-bold text-gray-800 text-lg md:text-xl">
                        <span>Câu 11: "Hễ cơn dông đến thì đất đá lại như sôi lên, nước lũ đổ ào ào."</span>
                        <span class="text-blue-600 font-extrabold text-sm uppercase px-3 py-1 bg-blue-50 rounded-full" id="tag-s-11">Xem đáp án</span>
                    </button>
                    <div id="ans-s-11" class="hidden p-4 border-t border-slate-100 bg-emerald-50/20 text-base md:text-lg text-gray-700 space-y-2">
                        <p><strong>🏷️ Phân loại:</strong> <span class="text-blue-700 font-black">Câu ghép (3 vế câu)</span></p>
                        <p><strong>📐 Cấu trúc cú pháp:</strong> Vế 1 và vế 2 liên kết bằng cặp quan hệ từ <span class="text-red-600 font-black">"Hễ... thì..."</span>; vế 2 và vế 3 liên kết trực tiếp bằng dấu phẩy.</p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Vế 1:</strong> cơn dông (CN1) // đến (VN1).</li>
                            <li><strong>Vế 2:</strong> đất đá (CN2) // lại như sôi lên (VN2).</li>
                            <li><strong>Vế 3:</strong> nước lũ (CN3) // đổ ào ào (VN3).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 🔗 BÀI 4: KẾT NỐI VẾ CÂU (DRAG-AND-DROP SIMULATOR) -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-6 md:p-8 shadow-2xl bg-white border border-slate-100 space-y-6">
            <div class="flex items-start gap-3">
                <span class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md">4</span>
                <h2 class="text-2xl md:text-5xl font-black text-gray-800">Ghép các vế câu ở A và B tạo câu ghép thích hợp</h2>
            </div>

            <div class="bg-amber-50/50 p-6 rounded-3xl border border-amber-100 space-y-4">
                <p class="text-lg md:text-xl font-bold text-amber-900">Em hãy hoàn thành ghép câu ghép dưới đây bằng cách chọn vế A, kết từ thích hợp và vế B:</p>
                
                <div class="grid grid-cols-1 gap-4 text-base md:text-lg">
                    <!-- Ghép cặp 1 -->
                    <div class="flex flex-col md:flex-row items-center gap-3 bg-white p-4 rounded-xl border border-slate-200">
                        <select id="part-a-1" class="p-2 border rounded-lg font-bold bg-slate-50 w-full md:w-[35%]">
                            <option value="">-- Vế A --</option>
                            <option value="Mặt trời lên cao">Mặt trời lên cao</option>
                            <option value="Sương xuống dày đặc">Sương xuống dày đặc</option>
                            <option value="Trong vườn, những bông hồng đã nở rộ, toả hương ngào ngạt">Trong vườn, những bông hồng đã nở rộ, toả hương ngào ngạt</option>
                        </select>
                        <select id="conjunction-1" class="p-2 border rounded-lg font-bold text-red-600 bg-red-50 w-full md:w-[25%]">
                            <option value="">-- Từ nối --</option>
                            <option value="khi... thì... / hễ... thì...">Hễ / Khi ... thì ...</option>
                            <option value="vì... nên...">Vì ... nên ...</option>
                            <option value="tuy... nhưng...">Tuy ... nhưng ...</option>
                        </select>
                        <select id="part-b-1" class="p-2 border rounded-lg font-bold bg-slate-50 w-full md:w-[40%]">
                            <option value="">-- Vế B --</option>
                            <option value="chiếc bóng ngắn lại.">chiếc bóng ngắn lại.</option>
                            <option value="khung cảnh xung quanh mờ mịt, không còn nhìn rõ mặt người.">khung cảnh xung quanh mờ mịt, không còn nhìn rõ mặt người.</option>
                            <option value="những bông lan vẫn e ấp giữ nụ chúm chím.">những bông lan vẫn e ấp giữ nụ chúm chím.</option>
                        </select>
                    </div>

                    <!-- Ghép cặp 2 -->
                    <div class="flex flex-col md:flex-row items-center gap-3 bg-white p-4 rounded-xl border border-slate-200">
                        <select id="part-a-2" class="p-2 border rounded-lg font-bold bg-slate-50 w-full md:w-[35%]">
                            <option value="">-- Vế A --</option>
                            <option value="Mặt trời lên cao">Mặt trời lên cao</option>
                            <option value="Sương xuống dày đặc">Sương xuống dày đặc</option>
                            <option value="Trong vườn, những bông hồng đã nở rộ, toả hương ngào ngạt">Trong vườn, những bông hồng đã nở rộ, toả hương ngào ngạt</option>
                        </select>
                        <select id="conjunction-2" class="p-2 border rounded-lg font-bold text-red-600 bg-red-50 w-full md:w-[25%]">
                            <option value="">-- Từ nối --</option>
                            <option value="khi... thì... / hễ... thì...">Hễ / Khi ... thì ...</option>
                            <option value="vì... nên...">Vì ... nên ...</option>
                            <option value="tuy... nhưng...">Tuy ... nhưng ...</option>
                        </select>
                        <select id="part-b-2" class="p-2 border rounded-lg font-bold bg-slate-50 w-full md:w-[40%]">
                            <option value="">-- Vế B --</option>
                            <option value="chiếc bóng ngắn lại.">chiếc bóng ngắn lại.</option>
                            <option value="khung cảnh xung quanh mờ mịt, không còn nhìn rõ mặt người.">khung cảnh xung quanh mờ mịt, không còn nhìn rõ mặt người.</option>
                            <option value="những bông lan vẫn e ấp giữ nụ chúm chím.">những bông lan vẫn e ấp giữ nụ chúm chím.</option>
                        </select>
                    </div>
                </div>

                <div class="flex justify-center mt-4">
                    <button onclick="check184Combinations()" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all text-lg">
                        🔍 Kiểm tra kết nối
                    </button>
                </div>
                <div id="combinations-feedback" class="text-lg font-black text-center hidden mt-2"></div>
            </div>
        </div>
    </section>

    <!-- 🌸 BÀI 5: THÊM VẾ CÂU (AI ESSAY EVALUATOR) -->
    <section class="w-full">
        <div class="bg-white rounded-[32px] p-6 md:p-8 border border-slate-100 shadow-xl space-y-6">
            <div class="flex items-start gap-3">
                <span class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md">5</span>
                <h2 class="text-2xl md:text-5xl font-black text-gray-800">Hoàn thành câu ghép bằng cách điền thêm vế câu hoặc từ nối</h2>
            </div>

            <div class="p-6 bg-sky-50/50 rounded-2xl border border-sky-100 space-y-4">
                <div class="space-y-3">
                    <div>
                        <label class="text-lg md:text-xl font-bold text-sky-950 block mb-1">a. Nếu em chọn một sản vật quê hương để giới thiệu với bạn bè...</label>
                        <input type="text" id="sentence-a" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-sky-100 outline-none text-lg font-semibold" placeholder="...thì em sẽ giới thiệu món bún bò Huế quê hương em.">
                    </div>
                    <div>
                        <label class="text-lg md:text-xl font-bold text-sky-950 block mb-1">b. ... nên tôi luôn háo hức mong đến giờ ông kể chuyện.</label>
                        <input type="text" id="sentence-b" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-sky-100 outline-none text-lg font-semibold" placeholder="Vì những câu chuyện của ông vô cùng lý thú và ly kỳ...">
                    </div>
                    <div>
                        <label class="text-lg md:text-xl font-bold text-sky-950 block mb-1">c. Tuy những hạt gạo bé nhỏ, giản dị...</label>
                        <input type="text" id="sentence-c" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-sky-100 outline-none text-lg font-semibold" placeholder="...nhưng chúng chứa đựng bao mồ hôi vất vả gieo trồng của nhà nông.">
                    </div>
                </div>

                <div class="flex justify-center mt-6">
                    <button onclick="check184SentenceAI()" class="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-2xl shadow-xl transition-all active:scale-[0.95] flex items-center justify-center gap-3 text-lg md:text-xl uppercase tracking-wider">
                        <span>🤖</span> 
                        <span>Nộp bài cho EduRobot đánh giá</span>
                    </button>
                </div>
                <div id="fb-184-sentence-ai" class="w-full hidden mt-4"></div>
            </div>
        </div>
    </section>
</div>

<script>
    window.check183Matching = function() {
        const answers = {
            "1": { char: "Quang", story: "Hộp quà màu thiên thanh" },
            "2": { char: "Xu-di", story: "Giỏ hoa tháng Năm" },
            "3": { char: "Y Sơn", story: "Tiếng hát của người đá" },
            "4": { char: "Mát", story: "Rừng của Mát" },
            "5": { char: "Thào A Sùng", story: "Những búp chè trên cây cổ thụ" }
        };

        let correctCount = 0;

        for (let i = 1; i <= 5; i++) {
            const charVal = document.getElementById('char-' + i).value;
            const actualStoryVal = document.getElementById('story-' + i).value;
            
            if (charVal === answers[i].char && actualStoryVal === answers[i].story) {
                correctCount++;
            }
        }

        const fb = document.getElementById('matching-feedback');
        fb.classList.remove('hidden');
        if (correctCount === 5) {
            fb.innerHTML = "🎉 Tuyệt vời! Em đã đoán chính xác 100% tất cả 5 nhân vật và câu chuyện rồi! Cố gắng phát huy nhé!";
            fb.className = "text-lg font-black text-center text-emerald-600 mt-4";
        } else {
            fb.innerHTML = \`⚠️ Em đã trả lời đúng \${correctCount}/5 câu. Em hãy xem lại gợi ý để đoán chính xác hơn nhé!\`;
            fb.className = "text-lg font-black text-center text-amber-600 mt-4";
        }
    };

    window.check183SummaryAI = async function() {
        const story = document.getElementById('selected-summary-story').value;
        const text = document.getElementById('story-summary-text').value.trim();

        if (!text) {
            alert('Em hãy nhập nội dung tóm tắt trước khi gửi nhé!');
            return;
        }

        const fb = document.getElementById('fb-183-summary-ai');
        fb.classList.remove('hidden');
        fb.innerHTML = '<div class="p-6 bg-white border-2 border-sky-100 rounded-2xl shadow-lg italic text-lg md:text-xl text-sky-900 animate-pulse text-center">EduRobot đang đọc và nhận xét tóm tắt câu chuyện của em, chờ một chút nhé...</div>';

        const prompt = \`Học sinh lớp 5 nộp bài tóm tắt nội dung chính câu chuyện: \"\${story}\"\\nĐoạn tóm tắt của học sinh: \"\${text}\"\\nHãy viết một lời nhận xét ngắn gọn, khích lệ và chỉ ra xem đoạn tóm tắt đã phản ánh đúng nội dung câu chuyện chưa. Xưng hô \"Thầy/Cô\" và gọi học sinh là \"em\".\`;

        await askAI('183-summary-ai', prompt, 'single', 'writing', 25, prompt);
    };

    window.toggleSentenceAnalysis = function(num) {
        const content = document.getElementById('ans-s-' + num);
        const tag = document.getElementById('tag-s-' + num);
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            tag.innerHTML = 'Thu gọn';
        } else {
            content.classList.add('hidden');
            tag.innerHTML = 'Xem đáp án';
        }
    };

    window.check184Combinations = function() {
        const a1 = document.getElementById('part-a-1').value;
        const c1 = document.getElementById('conjunction-1').value;
        const b1 = document.getElementById('part-b-1').value;

        const a2 = document.getElementById('part-a-2').value;
        const c2 = document.getElementById('conjunction-2').value;
        const b2 = document.getElementById('part-b-2').value;

        if (!a1 || !c1 || !b1 || !a2 || !c2 || !b2) {
            alert('Em hãy chọn đầy đủ vế câu và từ nối của cả 2 cặp nhé!');
            return;
        }

        let success = true;
        let details = "";

        // Check Pair 1
        if (a1 === "Mặt trời lên cao" && c1 === "khi... thì... / hễ... thì..." && b1 === "chiếc bóng ngắn lại.") {
            details += "✅ Cặp 1: Ghép chính xác! (Hễ mặt trời lên cao thì chiếc bóng ngắn lại).\\n";
        } else if (a1 === "Sương xuống dày đặc" && c1 === "vì... nên..." && b1 === "khung cảnh xung quanh mờ mịt, không còn nhìn rõ mặt người.") {
            details += "✅ Cặp 1: Ghép chính xác! (Vì sương xuống dày đặc nên khung cảnh mờ mịt).\\n";
        } else if (a1 === "Trong vườn, những bông hồng đã nở rộ, toả hương ngào ngạt" && c1 === "tuy... nhưng..." && b1 === "những bông lan vẫn e ấp giữ nụ chúm chím.") {
            details += "✅ Cặp 1: Ghép chính xác! (Tuy hồng đã nở rộ nhưng phong lan vẫn e ấp).\\n";
        } else {
            success = false;
            details += "❌ Cặp 1: Kết hợp chưa chính xác về mặt ngữ nghĩa hoặc từ nối.\\n";
        }

        // Check Pair 2
        if (a2 === "Mặt trời lên cao" && c2 === "khi... thì... / hễ... thì..." && b2 === "chiếc bóng ngắn lại.") {
            details += "✅ Cặp 2: Ghép chính xác!\\n";
        } else if (a2 === "Sương xuống dày đặc" && c2 === "vì... nên..." && b2 === "khung cảnh xung quanh mờ mịt, không còn nhìn rõ mặt người.") {
            details += "✅ Cặp 2: Ghép chính xác!\\n";
        } else if (a2 === "Trong vườn, những bông hồng đã nở rộ, toả hương ngào ngạt" && c2 === "tuy... nhưng..." && b2 === "những bông lan vẫn e ấp giữ nụ chúm chím.") {
            details += "✅ Cặp 2: Ghép chính xác!\\n";
        } else {
            success = false;
            details += "❌ Cặp 2: Kết hợp chưa chính xác.\\n";
        }

        const fb = document.getElementById('combinations-feedback');
        fb.classList.remove('hidden');
        fb.innerHTML = details.replace(/\\n/g, '<br>');
        if (success) {
            fb.className = "text-lg font-black text-center text-emerald-600 mt-4";
        } else {
            fb.className = "text-lg font-black text-center text-amber-600 mt-4";
        }
    };

    window.check184SentenceAI = async function() {
        const sa = document.getElementById('sentence-a').value.trim();
        const sb = document.getElementById('sentence-b').value.trim();
        const sc = document.getElementById('sentence-c').value.trim();

        if (!sa || !sb || !sc) {
            alert('Em hãy điền hoàn chỉnh cả 3 câu ghép trước khi nộp nhé!');
            return;
        }

        const fb = document.getElementById('fb-184-sentence-ai');
        fb.classList.remove('hidden');
        fb.innerHTML = '<div class="p-6 bg-white border-2 border-sky-100 rounded-2xl shadow-lg italic text-lg md:text-xl text-sky-900 animate-pulse text-center">EduRobot đang kiểm tra ngữ pháp câu ghép của em, chờ một chút nhé...</div>';

        const prompt = \`Học sinh lớp 5 hoàn thành câu ghép:\\na. Nếu em chọn một sản vật quê hương để giới thiệu với bạn bè... [Học sinh điền]: \"\${sa}\"\\nb. [Học sinh điền] ... nên tôi luôn háo hức mong đến giờ ông kể chuyện: \"\${sb}\"\\nc. Tuy những hạt gạo bé nhỏ, giản dị... [Học sinh điền]: \"\${sc}\"\\nHãy viết lời nhận xét chi tiết, kiểm tra tính đúng đắn ngữ pháp, sự phù hợp ngữ nghĩa và khuyến khích học sinh. Xưng hô \"Thầy/Cô\" và gọi học sinh là \"em\".\`;

        await askAI('184-sentence-ai', prompt, 'single', 'writing', 25, prompt);
    };
</script>
`,
    "practice": {
        "settings": { "pick": 10 },
        "questions": [
            // Tiết 1 - Trắc nghiệm đọc hiểu & nhân vật
            {
                "question": "Nhân vật nào đã thay mặt cả lớp tặng cô giáo chiếc hộp quà chứa 35 lá thư?",
                "options": ["Quang", "Tân", "Huệ", "Xu-di"],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Câu chuyện 'Hộp quà màu thiên thanh' giáo dục học sinh về điều gì?",
                "options": [
                    "Kỹ năng lập chương trình hoạt động lớp học",
                    "Lòng biết ơn và tình cảm ấm áp, thiêng liêng của học trò đối với thầy cô giáo",
                    "Kỹ năng dọn dẹp vệ sinh trường lớp",
                    "Cách làm đồ thủ công mỹ nghệ trang trí hộp quà"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Trong câu chuyện 'Giỏ hoa tháng Năm', tại sao nhân vật Xu-di lại giận cô bạn thân Pam?",
                "options": [
                    "Vì Pam không cho Xu-di mượn sách học bài",
                    "Vì Pam kết thân với một bạn gái mới và không còn nhiều thời gian chơi với Xu-di",
                    "Vì Pam làm hỏng giỏ hoa màu vàng của Xu-di",
                    "Vì Pam không muốn đi học cùng lớp với Xu-di"
                ],
                "answer": 1,
                "level": 2
            },
            {
                "question": "Bài học ý nghĩa nhất rút ra từ câu chuyện 'Giỏ hoa tháng Năm' là gì?",
                "options": [
                    "Tặng hoa cho bạn bè là bắt buộc để duy trì tình bạn",
                    "Tình bạn chân thực là đặt bạn trong tim chứ không bắt buộc họ luôn ở bên mình",
                    "Không nên chơi với những người bạn mới dọn đến thị trấn",
                    "Tình bạn sẽ tan vỡ nếu có sự giận dỗi"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Nhân vật Y Sơn trong 'Tiếng hát của người đá' có tài năng đặc biệt gì?",
                "options": [
                    "Biết gõ trống nứa và đàn tranh",
                    "Có tiếng hát trong trẻo khiến muông thú quên phá lúa và nhảy múa theo",
                    "Biết khôi phục rừng cây bị cháy thành than củi",
                    "Biết đục đẽo đá thành những tác phẩm nghệ thuật khổng lồ"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Ai là người khuyên bảo anh Mát trồng lại rừng sau vụ cháy lớn thiêu rụi trang trại?",
                "options": ["Người hàng xóm thân thiết", "Ông nội của Mát lúc còn sống", "Bà cụ cùng giường trong bệnh viện", "Người thợ đốt than củi"],
                "answer": 2,
                "level": 2
            },
            {
                "question": "Để có vốn trồng lại rừng, anh Mát đã thực hiện ý tưởng sáng tạo nào?",
                "options": [
                    "Bán toàn bộ đất trang trại rừng đi để lấy tiền",
                    "Thuê người biến những thân cây cháy đen thành than củi mang bán",
                    "Đi làm thuê ở thành phố nhiều năm lấy vốn",
                    "Kêu gọi các tổ chức từ thiện quyên góp tiền"
                ],
                "answer": 1,
                "level": 2
            },
            {
                "question": "Ước mơ lớn nhất của bạn nhỏ Thào A Sùng trong bài đọc về chè Tà Xùa là gì?",
                "options": [
                    "Trở thành một kĩ sư nông nghiệp để phát triển chè cổ thụ và đưa chè Tà Xùa đi khắp thế giới",
                    "Trở thành một hướng dẫn viên du lịch chuyên nghiệp dẫn khách đến Tà Xùa",
                    "Trở thành một ca sĩ nổi tiếng hát bài hát về núi rừng Tây Bắc",
                    "Trở thành một doanh nhân kinh doanh than củi thành công"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Búp chè cổ thụ Tà Xùa được miêu tả có điểm đặc trưng nào khác biệt?",
                "options": [
                    "Búp chè nhỏ li ti màu xanh đậm",
                    "Búp chè to, dưới lá có lớp lông tơ mịn trắng như tuyết",
                    "Búp chè dài như kim khâu màu đen nhám",
                    "Lá chè màu vàng ánh đỏ nổi bật"
                ],
                "answer": 1,
                "level": 2
            },
            {
                "question": "Nhân vật nào trong các câu chuyện đã học thể hiện ý chí vươn lên mãnh liệt, không đầu hàng trước tai họa?",
                "options": ["Minh", "Anh Mát", "Bạn Tân", "Xu-di"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Câu chuyện 'Rừng của Mát' ca ngợi phẩm chất tốt đẹp nào ở nhân vật chính?",
                "options": [
                    "Tình yêu thiên nhiên, ý chí kiên cường và lòng chung thủy giữ trọn lời hứa với người thân",
                    "Khả năng học tập xuất sắc đạt nhiều điểm cao",
                    "Lòng dũng cảm cứu người gặp nạn trên biển",
                    "Tài năng chơi nhạc cụ độc đáo truyền thống"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Nhân vật nào trong truyện 'Hộp quà màu thiên thanh' đã lo lắng việc đi học muộn của bạn và nói giúp bạn trước cô giáo?",
                "options": ["Bạn Quang", "Bạn Huệ", "Cô giáo chủ nhiệm", "Bạn Tân"],
                "answer": 1,
                "level": 2
            },
            {
                "question": "Ai là nhân vật chính kể về câu chuyện chè cổ thụ Tà Xùa trong bài học?",
                "options": ["Thào A Sùng", "Bạn học cùng lớp của Sùng", "Cô giáo chủ nhiệm lớp", "Người mẹ mua chè cổ thụ"],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Màu sắc chủ đạo gắn liền với cô giáo chủ nhiệm lớp trong ngày lễ tổng kết cuối năm học ở truyện 'Hộp quà màu thiên thanh' là gì?",
                "options": ["Màu vàng tươi", "Màu xanh ngọc bích", "Màu thiên thanh (xanh da trời nhạt)", "Màu đỏ rực rỡ"],
                "answer": 2,
                "level": 2
            },
            {
                "question": "Câu chuyện 'Tiếng hát của người đá' thuộc chủ đề nào trong chương trình Tiếng Việt 5 học kì II?",
                "options": ["Thế giới của chúng ta", "Vẻ đẹp cuộc sống", "Hương sắc trăm miền", "Vượt lên chính mình"],
                "answer": 1,
                "level": 2
            },
            
            // Tiết 2 - Kiến thức Tiếng Việt (Câu đơn, Câu ghép & Liên kết câu)
            {
                "question": "Câu đơn là gì?",
                "options": [
                    "Câu gồm có hai hay nhiều vế câu tạo thành",
                    "Câu chỉ có một cụm Chủ ngữ - Vị ngữ làm nòng cốt",
                    "Câu không có chủ ngữ",
                    "Câu có nhiều hơn 3 kết từ"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Câu ghép là gì?",
                "options": [
                    "Câu có nhiều vị ngữ đi kèm trạng ngữ chỉ nơi chốn",
                    "Câu do nhiều vế câu ghép lại, mỗi vế có cấu trúc cụm Chủ - Vị hoàn chỉnh thể hiện quan hệ ngữ nghĩa chặt chẽ",
                    "Câu chỉ gồm duy nhất một chủ ngữ chính",
                    "Câu chỉ được liên kết bằng dấu phẩy mà không có quan hệ từ"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Phân tích cấu trúc câu sau:\\n'Gió cứ thổi vù vù.'",
                "options": [
                    "Gió (CN) // cứ thổi vù vù (VN) -> Câu đơn",
                    "Gió cứ (CN) // thổi vù vù (VN) -> Câu ghép",
                    "Gió (CN1) // cứ thổi (VN1) // vù vù (CN2) -> Câu ghép",
                    "Mất chủ ngữ chính"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Xác định vế câu và từ nối của câu ghép sau:\\n'Mưa phùn vẫn cứ lai rai và gió bắc vẫn thút thít ở các khe núi.'",
                "options": [
                    "Gồm 2 vế câu, nối với nhau bằng kết từ 'và'",
                    "Gồm 2 vế câu, nối với nhau bằng kết từ 'nhưng'",
                    "Là câu đơn có 2 trạng ngữ",
                    "Không có từ nối"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Câu nào dưới đây là câu đơn?",
                "options": [
                    "Mùa xuân nhiều hoa, nhưng mùa xuân vẫn là đứa em của mùa đông.",
                    "Cây cối có nhiều quả chín thơm tho.",
                    "Hễ cơn dông đến thì đất đá lại như sôi lên.",
                    "Mưa phùn lai rai và gió thút thít."
                ],
                "answer": 1,
                "level": 2
            },
            {
                "question": "Xác định các vế trong câu ghép:\\n'Hễ cơn dông đến thì đất đá lại như sôi lên, nước lũ đổ ào ào.'",
                "options": [
                    "Gồm 3 vế câu liên kết chặt chẽ",
                    "Gồm 2 vế câu và 1 trạng ngữ",
                    "Là câu đơn dài",
                    "Gồm 1 vế câu duy nhất"
                ],
                "answer": 0,
                "level": 2
            },
            {
                "question": "Cặp quan hệ từ nào phù hợp nhất để nối 2 vế câu biểu thị quan hệ Nguyên nhân - Kết quả?\\n'Sương xuống dày đặc ... khung cảnh xung quanh mờ mịt.'",
                "options": ["Tuy ... nhưng ...", "Vì ... nên ...", "Nếu ... thì ...", "Hễ ... thì ..."],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Cặp quan hệ từ biểu thị mối quan hệ Tương phản (ngược nghĩa) là cặp nào?",
                "options": ["Vì ... nên ...", "Nếu ... thì ...", "Tuy ... nhưng ...", "Nhờ ... nên ..."],
                "answer": 2,
                "level": 1
            },
            {
                "question": "Cặp quan hệ từ 'Nếu ... thì ...' biểu thị mối quan hệ gì giữa các vế câu ghép?",
                "options": ["Nguyên nhân - Kết quả", "Điều kiện / Giả thiết - Kết quả", "Tăng tiến", "Tương phản"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Điền vế câu thích hợp tạo câu ghép:\\n'Nếu em chọn một sản vật quê hương để giới thiệu với bạn bè...'",
                "options": [
                    "...thì em sẽ rất tự hào về hương vị đặc trưng quê em.",
                    "...và em đi chơi công viên.",
                    "...vì em thích ăn kẹo ngọt.",
                    "...tuy nhiên bạn bè không thích ăn."
                ],
                "answer": 0,
                "level": 2
            },
            {
                "question": "Trong các câu sau, câu nào nối các vế câu ghép bằng một cặp từ hô ứng?",
                "options": [
                    "Rùa lại đợi đến hè.",
                    "Nắng vừa lên, sương đã tan.",
                    "Mùa hè tạnh ráo.",
                    "Nhưng cái nóng cứ hầm hập."
                ],
                "answer": 1,
                "level": 2
            },
            {
                "question": "Từ 'Nhưng' ở đầu câu 9: 'Nhưng cái nóng cứ hầm hập' có tác dụng gì?",
                "options": [
                    "Nối các vế câu trong một câu ghép",
                    "Nối câu 9 với câu 8 trước nó",
                    "Làm trạng ngữ chỉ mục đích",
                    "Không có vai trò liên kết"
                ],
                "answer": 1,
                "level": 2
            },
            {
                "question": "Điền kết từ thích hợp vào câu sau:\\n'Tuy những hạt gạo bé nhỏ, giản dị ... chúng chứa đựng bao mồ hôi vất vả của nhà nông.'",
                "options": ["nên", "thì", "nhưng", "và"],
                "answer": 2,
                "level": 1
            },
            {
                "question": "Liên kết các vế câu ghép bằng dấu câu nào là trực tiếp (không dùng từ nối)?",
                "options": ["Dấu phẩy, dấu chấm phẩy hoặc dấu hai chấm", "Dấu gạch ngang", "Dấu ngoặc kép", "Dấu hỏi chấm"],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Câu ghép nào dưới đây biểu thị mối quan hệ tăng tiến?",
                "options": [
                    "Mưa phùn vẫn cứ lai rai và gió bắc vẫn thút thít.",
                    "Không những Nam học giỏi mà bạn ấy còn rất chăm chỉ làm việc nhà.",
                    "Tuy nhà nghèo nhưng Lan học tập rất tốt.",
                    "Hễ trời mưa thì đường trơn trượt."
                ],
                "answer": 1,
                "level": 2
            }
        ]
    }
};
