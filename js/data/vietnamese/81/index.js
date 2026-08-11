export const lesson81 = {
    "topic": "Tiếng Việt 5",
    "week": "12",
    "period": "81",
    "title": "ĐỌC: TỪ NHỮNG CÂU CHUYỆN ẤU THƠ (TIẾT 1)",
    "desc": "Bài học giúp học sinh rèn luyện kỹ năng đọc diễn cảm bài 'Từ những câu chuyện ấu thơ' của Nguyễn Nhật Ánh, tìm hiểu thói quen nghe kể chuyện từ thuở nhỏ và động lực học chữ để tự đọc sách.",
    "subject": "Tiếng Việt",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-blue-600 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học (Tiết 1)
        </h3>
        <ul class="space-y-3 text-blue-600 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Đọc trôi chảy toàn bài văn, ngắt nghỉ đúng chỗ, thể hiện được giọng đọc nhẹ nhàng, nhiều cảm xúc tự sự.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Hiểu được hoàn cảnh ấu thơ gắn liền với lời kể chuyện của bà, của chú và động lực thôi thúc bạn nhỏ tự học chữ.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Giải nghĩa và nắm vững từ ngữ khó trong bài: "Rương", "mê mẩn", "kì diệu".
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động: Ký ức chuyện kể</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Thuở nhỏ, trước khi biết đọc sách, em thường được nghe ai kể chuyện và đó là câu chuyện gì?</p>
        
        <div class="space-y-4">
            <textarea id="ans-vn81-kd" rows="3" placeholder="Ví dụ: Hồi nhỏ, em thường được bà ngoại kể cho nghe truyện Tấm Cám và Sự tích trầu cau vào mỗi tối trước khi đi ngủ..." class="w-full p-4 border-2 border-blue-100 rounded-2xl outline-none focus:border-blue-500 font-bold bg-blue-50/10 text-xl md:text-2xl"></textarea>
            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraKhoiDong81();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn81-kd" class="hidden p-4 rounded-xl text-sm font-bold text-center mt-2"></div>
        </div>
    </div>

    <!-- 📖 BÀI ĐỌC CHÍNH -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-blue-100 pb-4">
            <h3 class="text-2xl md:text-5xl font-black text-blue-600 flex items-center gap-3">
                <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">📖</span>
                Bài đọc: Từ những câu chuyện ấu thơ
            </h3>
            <button onclick="window.playSegmentAudio('assets/audio/tiengviet/81/tu_nhung_cau_chuyen_au_tho.mp3')" class="px-5 py-2.5 bg-amber-500 hover:bg-amber-500 active:scale-95 text-white font-black rounded-xl transition-all shadow-md flex items-center gap-2 text-base shrink-0">
                🔊 <span>Nghe đọc mẫu</span>
            </button>
        </div>

        <div class="space-y-8">
            <div class="w-full bg-amber-50/20 p-6 md:p-10 rounded-[40px] border border-amber-100/55 shadow-inner relative overflow-hidden">
                <!-- Ảnh minh họa câu chuyện ấu thơ (Bấm phóng to) -->
                <div onclick="window.showMathFeedback('Từ những câu chuyện ấu thơ', '🖼️', '&lt;div class=&quot;flex justify-center p-2&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/81-82/81-82.png&quot; class=&quot;max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border-4 border-white&quot;&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-white p-4 rounded-3xl border border-blue-100 shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group border-4 border-white">
                    <img src="assets/images/tiengviet_5_1/81-82/81-82.png" alt="Từ những câu chuyện ấu thơ" class="w-full h-auto object-cover group-hover:scale-105 transition-all duration-500">
                    <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span class="px-4 py-2 bg-white/95 rounded-full text-xs font-black text-blue-600 shadow-md">🔍 PHÓNG TO</span>
                    </div>
                    <p class="text-[10px] text-gray-800 font-bold text-center mt-3 leading-tight">Gia đình đọc sách nuôi dưỡng tâm hồn tuổi thơ</p>
                </div>

                <div id="bai-doc-chuyen-au-tho" class="serif-font text-gray-800 leading-relaxed space-y-6 text-justify text-xl md:text-4xl">
                    <p class="indent-10">Tôi nghĩ trẻ em trên khắp thế giới đều thích nghe chuyện giống tôi. Ba tôi đi làm xa nên những câu chuyện đầu tiên tôi nghe được là từ bà tôi và chú tôi. Bà kể tôi nghe chuyện <span class="text-blue-600 italic font-black">Tấm Cám, Thạch Sanh, Cây tre trăm đốt, Đôi hài bảy dặm</span>,... Chú tôi lại thích kể chuyện Tôn Ngộ Không và một số truyện trong <span class="text-blue-600 italic font-black">Nghìn lẻ một đêm</span>.</p>
                    <p class="indent-10">Bà và chú tôi kể mãi cũng hết chuyện. Từ khi nghe chú tôi mách những câu chuyện đó và vô số những câu chuyện tương tự được viết trong các cuốn sách, tôi cố gắng học chữ để tự mình khám phá thế giới kì diệu kia.</p>
                    <p class="indent-10">Bảy tuổi, tôi mê mẩn với những cuốn sách ba tôi mua về. Tám, chín tuổi, tôi đã mày mò đọc hết rương truyện Trung Hoa của ông thợ hớt tóc trong làng. Rồi tôi tìm đến <span class="text-blue-600 italic font-black">Không gia đình, Những người khốn khổ</span>,…</p>
                    <p class="indent-10">Tôi khóc cười qua những trang sách, ngạc nhiên thấy mình trải qua những cảm xúc mà trên thực tế, tôi chưa đủ lớn để trải nghiệm ngoài đời. Sách đã bồi đắp tâm hồn, làm giàu có và làm trưởng thành tình cảm một đứa bé và đặc biệt mở rộng đến vô biên bờ cõi của trí tưởng tượng.</p>
                    <p class="indent-10">Rồi tới lượt mấy đứa em nhỏ của tôi lại tranh nhau nằm gần tôi vào mỗi buổi tối, nhao nhao: "Anh Hai kể chuyện đi, anh Hai!".</p>
                    <p class="indent-10">Tôi vẫn luôn biết ơn cả nhà đã tạo cho tôi thói quen đọc sách một cách tự nhiên như vậy. Nhờ thói quen ấy, nhu cầu đọc sách đã nảy mầm và trở thành một khát khao trong tôi, như cỏ cây khát ánh sáng và khí trời.</p>
                    
                </div>
            </div>

            <!-- Các khối thông tin bổ trợ đặt bên dưới dạng lưới thích ứng -->
            <div class="grid grid-cols-1 gap-6">
                <!-- Chú giải từ khó -->
                <div class="bg-blue-50/70 p-6 md:p-8 rounded-[28px] border-2 border-dashed border-blue-200">
                    <p class="text-xs font-black text-blue-600 uppercase tracking-widest mb-3 flex items-center gap-1">
                        <span>📝</span> Chú thích
                    </p>
                    <ul class="space-y-4 text-lg md:text-xl text-blue-600 font-bold leading-relaxed">
                        <li>• <strong>Rương</strong>: hòm gỗ hoặc kim loại có nắp đậy, dùng để đựng quần áo, đồ dùng.</li>
                        <li>• <strong>Mê mẩn</strong>: say mê đến mức như không biết gì xung quanh nữa.</li>
                        <li>• <strong>Ấu thơ</strong>: thời thơ ấu, lúc còn nhỏ tuổi.</li>
                        <li>• <strong>Khát khao</strong>: mong muốn thiết tha, mãnh liệt.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- 💡 Nội dung chính bài học -->
    <div class="p-8 rounded-[36px] bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-xl relative overflow-hidden mt-8">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <h4 class="text-xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
            <span>💡</span> Nội dung chính bài học
        </h4>
        <div class="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p class="text-xl md:text-4xl font-bold leading-relaxed text-center italic">
                "Bài học kể về quá trình hình thành lòng yêu đọc sách của tác giả từ những câu chuyện ấu thơ đầy ý nghĩa của bà và chú. Từ đó khẳng định vai trò vô cùng quan trọng của gia đình và thói quen nghe kể chuyện thuở nhỏ trong việc nuôi dưỡng tâm hồn, mở rộng trí tưởng tượng và tạo dựng niềm đam mê sách suốt cuộc đời."
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- CÂU HỎI ĐỌC HIỂU (ACCORDION DETAILS) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-blue-50">
        <div class="p-6 md:p-8 bg-blue-50/30 rounded-[32px]">
<div class="space-y-4">
                <!-- Câu 1 -->
                <details class="group bg-white rounded-2xl border border-blue-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-blue-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-blue-700 transition-colors text-lg md:text-3xl">
                            1. Những câu chuyện đầu tiên bạn nhỏ được nghe bà và chú kể là những câu chuyện gì?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-blue-50 pt-4 bg-blue-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-blue-600 font-bold mb-2">💡 Trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li>Bà kể chuyện: <span class="italic font-bold text-lg md:text-3xl">Tấm Cám, Thạch Sanh, Cây tre trăm đốt, Đôi hài bảy dặm,...</span></li>
                            <li>Chú kể chuyện: <span class="italic font-bold text-lg md:text-3xl">Tôn Ngộ Không, Nghìn lẻ một đêm,...</span></li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 2 -->
                <details class="group bg-white rounded-2xl border border-blue-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-blue-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-blue-700 transition-colors text-lg md:text-3xl">
                            2. Chi tiết nào thôi thúc bạn nhỏ tự học chữ?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-blue-50 pt-4 bg-blue-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-blue-600 font-bold mb-2">💡 Trả lời:</p>
                        <p>Đó là khi bà và chú kể mãi cũng hết chuyện, và chú đã mách rằng: những câu chuyện đó cùng vô số những câu chuyện tương tự khác đều được viết trong các cuốn sách. Chi tiết này đã thôi thúc bạn nhỏ tự cố gắng học chữ để tự mình khám phá thế giới kì diệu ấy.</p>
                    </div>
                </details>

                <!-- Câu 3 -->
                <details class="group bg-white rounded-2xl border border-blue-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-blue-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-blue-700 transition-colors text-lg md:text-3xl">
                            3. Sắp xếp các thông tin sau theo đúng hành trình tự đọc sách của bạn nhỏ:
                        </span>
                        <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-blue-50 pt-4 bg-blue-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-blue-600 font-bold mb-2">💡 Trả lời:</p>
                        <div class="space-y-2">
                            <p>Hành trình đọc sách của tác giả từ nhỏ đến lớn được sắp xếp theo trình tự đúng như sau:</p>
                            <p class="font-bold text-blue-600">Được bà và chú kể chuyện (lúc nhỏ) ➔ Mê mẩn sách ba mua về (7 tuổi) ➔ Đọc hết rương truyện Trung Hoa của ông thợ hớt tóc (8, 9 tuổi) ➔ Đọc Không gia đình, Những người khốn khổ...</p>
                        </div>
                    </div>
                </details>

                <!-- Câu 4 -->
                <details class="group bg-white rounded-2xl border border-blue-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-blue-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-blue-700 transition-colors text-lg md:text-3xl">
                            4. Sách đã đem lại cho tác giả những gì?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-blue-50 pt-4 bg-blue-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-blue-600 font-bold mb-2">💡 Trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li>Sách giúp tác giả trải nghiệm nhiều cảm xúc vui buồn, ngạc nhiên thú vị ngay cả khi chưa đủ lớn để trải nghiệm ngoài đời thực.</li>
                            <li>Sách bồi đắp tâm hồn, làm giàu có và làm trưởng thành tình cảm của đứa trẻ.</li>
                            <li>Sách mở rộng đến vô biên bờ cõi của trí tưởng tượng.</li>
                        </ul>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- LUYỆN TẬP TỰ LUẬN CẢM THỤ (CHẤM BÀI QUA AI THẦY E) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-xl md:text-2xl font-black shadow-md">✏️</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Cảm thụ văn học</h3>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner">
                <h4 class="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                    <span class="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm mt-0.5 shadow-sm">★</span>
                    <span>Em hãy viết 2-3 câu chia sẻ về vai trò của việc đọc sách đối với sự phát triển tâm hồn của một học sinh giống như câu chuyện của bạn nhỏ trong bài.</span>
                </h4>
                
                <textarea id="ans-vn81-writing" rows="4" placeholder="Ví dụ: Đọc sách giúp em mở rộng trí tưởng tượng và thấu hiểu nhiều cảm xúc trong cuộc sống. Những cuốn sách hay cũng nuôi dưỡng lòng nhân ái, giúp em học hỏi được nhiều bài học làm người bổ ích giống như bạn nhỏ trong câu chuyện..." class="w-full p-4 md:p-6 text-xl md:text-2xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-amber-50/10 mb-6 font-medium leading-relaxed"></textarea>
                
                <div class="flex justify-end items-center gap-4"><button onclick="resetWritingVn81()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="checkWritingVn81();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                
                <div id="fb-vn81-writing" class="hidden mt-6 p-6 bg-blue-600 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500">
                    <!-- AI Feedback will show here -->
                </div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBai81Global()" class="px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-blue-600 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Văn bản 'Từ những câu chuyện ấu thơ' là tác phẩm của nhà văn nào?",
            "options": [
                "Nguyễn Nhật Ánh",
                "Tô Hoài",
                "Trần Đăng Khoa",
                "Huệ Triệu"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tại sao những câu chuyện đầu tiên bạn nhỏ nghe được lại từ bà và chú mà không phải từ ba?",
            "options": [
                "Vì ba bạn nhỏ đi làm xa",
                "Vì ba bạn nhỏ không thích đọc truyện",
                "Vì ba bạn nhỏ bận đọc truyện Trung Hoa",
                "Vì bà và chú biết nhiều truyện cổ tích hơn"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Những truyện dân gian Việt Nam nào sau đây được bà kể cho bạn nhỏ nghe?",
            "options": [
                "Tấm Cám, Thạch Sanh, Cây tre trăm đốt, Đôi hài bảy dặm",
                "Tôn Ngộ Không, Nghìn lẻ một đêm, Thạch Sanh",
                "Không gia đình, Những người khốn khổ, Thạch Sanh",
                "Dế Mèn phiêu lưu kí, Thạch Sanh, Cây tre trăm đốt"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Chú của bạn nhỏ thường kể những câu chuyện nào?",
            "options": [
                "Truyện Tôn Ngộ Không và một số truyện trong Nghìn lẻ một đêm",
                "Truyện Không gia đình và Thạch Sanh",
                "Truyện cổ tích Tấm Cám và Cây tre trăm đốt",
                "Truyện tranh nước ngoài và truyện lịch sử Việt Nam"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Chi tiết nào thôi thúc bạn nhỏ nỗ lực tự học chữ để đọc sách?",
            "options": [
                "Khi chú mách rằng những câu chuyện đó và vô số câu chuyện khác được viết trong các cuốn sách",
                "Khi bà và chú bận rộn không có thời gian kể chuyện nữa",
                "Khi ba mua cho bạn nhỏ một chiếc rương đựng truyện bằng gỗ",
                "Khi bạn nhỏ muốn đi làm xa giống như ba"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'mê mẩn' trong câu 'Bảy tuổi, tôi mê mẩn với những cuốn sách ba tôi mua về' thể hiện trạng thái gì?",
            "options": [
                "Say mê, bị cuốn hút đến mức không còn chú ý gì xung quanh",
                "Mệt mỏi và buồn ngủ vì sách quá dài",
                "Không hiểu nội dung sách viết gì nên bối rối",
                "Sợ hãi trước các bức ảnh minh họa trong sách"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Lúc mấy tuổi bạn nhỏ bắt đầu đọc những cuốn sách đầu tiên do ba mua về?",
            "options": [
                "Bảy tuổi",
                "Tám tuổi",
                "Chín tuổi",
                "Mười tuổi"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Bạn nhỏ đã đọc hết rương truyện Trung Hoa của ông thợ hớt tóc lúc mấy tuổi?",
            "options": [
                "Tám, chín tuổi",
                "Bảy tuổi",
                "Mười tuổi",
                "Mười một tuổi"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'Rương' trong văn bản dùng để chỉ vật dụng gì?",
            "options": [
                "Hòm đựng đồ bằng gỗ hoặc kim loại có nắp đậy",
                "Kệ sách treo trên tường phòng ngủ",
                "Cặp sách học sinh tiểu học",
                "Tủ kính trưng bày sách ngoài cửa hàng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Bạn nhỏ đã tìm đọc truyện Trung Hoa của ai trong làng?",
            "options": [
                "Ông thợ hớt tóc trong làng",
                "Ông thợ rèn của làng",
                "Chú ruột của bạn nhỏ",
                "Bác trưởng thôn trong làng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Dòng nào chứa những tác phẩm nước ngoài được bạn nhỏ tìm đọc sau truyện Trung Hoa?",
            "options": [
                "Không gia đình, Những người khốn khổ",
                "Nghìn lẻ một đêm, Đôi hài bảy dặm",
                "Dế Mèn phiêu lưu kí, Không gia đình",
                "Thạch Sanh, Nghìn lẻ một đêm"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Bạn nhỏ đã nỗ lực làm gì khi được biết sách chứa đựng vô số câu chuyện diệu kỳ?",
            "options": [
                "Cố gắng học chữ để tự đọc sách",
                "Nhờ ba xin học lớp kể chuyện chuyên nghiệp",
                "Tự kể lại các câu chuyện cho ông thợ hớt tóc nghe",
                "Bán chiếc rương gỗ để lấy tiền mua truyện mới"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Động cơ ban đầu giúp bạn nhỏ tự khám phá thế giới trang sách xuất phát từ đâu?",
            "options": [
                "Tò mò muốn nghe tiếp những câu chuyện tương tự khi bà và chú đã kể hết chuyện",
                "Muốn có điểm thi Tiếng Việt thật cao ở lớp học",
                "Muốn chứng tỏ bản thân thông minh hơn các em",
                "Muốn đi học hớt tóc cùng ông thợ hớt tóc trong làng"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Từ nào sau đây gần nghĩa nhất với từ 'khát khao' trong bài đọc?",
            "options": [
                "Ước vọng, mong mỏi mãnh liệt",
                "Suy ngẫm, hoài niệm",
                "Băn khoăn, nghi ngờ",
                "Thích thú nhất thời"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Văn bản 'Từ những câu chuyện ấu thơ' thuộc chủ điểm nào sau đây?",
            "options": [
                "Thế giới trong trang sách",
                "Mái ấm gia đình",
                "Cộng đồng và đất nước",
                "Trải nghiệm cuộc sống"
            ],
            "answer": 0,
            "level": 0
        }
    ]
};

// --- KHỞI ĐỘNG ---
window.kiemTraKhoiDong81 = function() {
    const text = document.getElementById('ans-vn81-kd')?.value.trim();
    const fb = document.getElementById('fb-vn81-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy điền cảm nhận hoặc câu chuyện em từng được nghe kể nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow-sm animate-bounce";
        return;
    }

    fb.innerHTML = "🎉 Câu trả lời của em rất tuyệt vời! Ký ức về những câu chuyện tuổi thơ từ người thân luôn là hành trang quý giá bồi đắp tâm hồn. Hãy cùng đọc bài văn dưới đây nhé.";
    fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-blue-600 text-white mt-2 shadow-md";
};

// --- CHẤM BÀI TỰ LUẬN TỪ THẦY E ---
window.checkWritingVn81 = function() {
    const text = document.getElementById('ans-vn81-writing')?.value.trim();
    const fb = document.getElementById('fb-vn81-writing');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy viết câu chia sẻ trước khi chấm bài nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    if (text.length < 15) {
        fb.innerHTML = "⚠️ Đoạn văn của em cần chi tiết hơn một chút nhé (tối thiểu 15 ký tự).";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-blue-600 block">🤖 ĐÁNH GIÁ TỪ THẦY E:</span>
            <p class="text-lg font-bold">"Bài viết của em rất tốt! Em đã thấu hiểu sâu sắc cách sách bồi đắp và làm giàu có tâm hồn như thế nào. Thầy khen tinh thần học tập và cảm thụ sâu lắng của em!"</p>
            <span class="inline-block px-3 py-1 bg-white text-blue-600 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Đạt điểm tối đa bài tự luận cảm thụ</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-blue-600 text-white shadow-xl border border-blue-100 mt-2";
};

window.resetWritingVn81 = function() {
    const textarea = document.getElementById('ans-vn81-writing');
    if (textarea) textarea.value = '';
    const fb = document.getElementById('fb-vn81-writing');
    if (fb) {
        fb.classList.add('hidden');
        fb.innerHTML = '';
    }
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.nopBai81Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 82',
            '📖',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">📚</span><p class="text-2xl md:text-3xl font-bold text-blue-600">Chúc mừng em đã hoàn thành Tiết 82!</p><p class="text-lg text-gray-800 mt-3">Em đã nắm rõ khởi đầu hành trình yêu đọc sách của tác giả từ những câu chuyện ấu thơ. Hãy cùng bước sang Tiết 2 để tìm hiểu kỹ hơn về ý nghĩa của trang sách nhé!</p></div>'
        );
    }
};
