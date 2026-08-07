export const lesson74 = {
    "topic": "Tiếng Việt 5",
    "week": "11",
    "period": "74-75",
    "title": "ĐỌC: KHỔ LUYỆN THÀNH TÀI",
    "desc": "Bài học giúp học sinh rèn luyện kỹ năng đọc diễn cảm bài 'Khổ luyện thành tài', trả lời các câu hỏi đọc hiểu về ý chí của Lê-ô-nác-đô đa Vin-xi, thực hành mở rộng vốn từ về sự nỗ lực vươn tới thành công.",
    "subject": "Tiếng Việt",
    "theme": "Trải nghiệm để sáng tạo",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-emerald-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-emerald-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-emerald-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-emerald-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Đọc trôi chảy, diễn cảm toàn bộ bài đọc "Khổ luyện thành tài" với giọng đọc phù hợp.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Hiểu được ý nghĩa của bài đọc: Để đạt được thành công lớn trong sự nghiệp và cuộc sống, con người cần phải có ý chí khổ luyện và kiên trì không ngừng.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Biết tìm và sử dụng các từ ngữ chỉ nỗ lực để viết, nói và làm phong phú vốn từ của mình.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động: Ý nghĩa nhan đề</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Theo em, nhan đề bài đọc "Khổ luyện thành tài" gợi cho em suy nghĩ gì?</p>
        
        <div class="space-y-4">
            <textarea id="ans-vn74-kd" rows="3" placeholder="Nhan đề 'Khổ luyện thành tài' gợi cho em suy nghĩ rằng muốn đạt được thành công, trở thành người tài giỏi thì con người phải trải qua quá trình rèn luyện gian khổ, vất vả và kiên trì bền bỉ..." class="w-full p-4 border-2 border-emerald-100 rounded-2xl outline-none focus:border-emerald-500 font-bold bg-emerald-50/10 text-xl md:text-2xl"></textarea>
            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraKhoiDong74();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn74-kd" class="hidden p-4 rounded-xl text-sm font-bold text-center mt-2"></div>
        </div>
    </div>

    <!-- 📖 BÀI ĐỌC CHÍNH -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4">
            <h3 class="text-2xl md:text-5xl font-black text-emerald-800 flex items-center gap-3">
                <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-md">📖</span>
                Văn bản: Khổ luyện thành tài
            </h3>
            
            <!-- Trình phát Audio bài đọc -->
            <button onclick="playSegmentAudio('assets/audio/tiengviet/74/kho_luyen_thanh_tai.mp3')" class="px-6 py-2.5 bg-amber-500 hover:bg-amber-500 active:scale-95 text-white font-black rounded-xl transition-all shadow-md flex items-center gap-2 text-base">
                <span>🔊 NGHE ĐỌC MẪU</span>
            </button>
        </div>

        <div class="space-y-8">
            <div class="w-full bg-emerald-50/10 p-6 md:p-10 rounded-[40px] border border-emerald-100/50 shadow-inner relative overflow-hidden">
                <!-- Ảnh minh họa danh họa vẽ trứng (bấm phóng to) -->
                <div onclick="window.showMathFeedback('Khổ luyện thành tài', '🎨', '&lt;div class=&quot;flex justify-center p-2&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/74-75/74-75.png&quot; class=&quot;max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border-4 border-white&quot; alt=&quot;Lê-ô-nác-đô đa Vin-xi vẽ trứng&quot;&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-white p-4 rounded-3xl border border-emerald-100 shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group border-4 border-white">
                    <img src="assets/images/tiengviet_5_1/74-75/74-75.png" alt="Lê-ô-nác-đô đa Vin-xi vẽ trứng" class="w-full h-auto object-cover group-hover:scale-105 transition-all duration-500">
                    <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span class="px-4 py-2 bg-white/95 rounded-full text-xs font-black text-emerald-800 shadow-md">🔍 PHÓNG TO</span>
                    </div>
                    <p class="text-[10px] text-gray-800 font-bold text-center mt-3 leading-tight">Lê-ô-nác-đô đa Vin-xi vẽ trứng (1474 – 1574)</p>
                </div>

                <div id="bai-doc-kho-luyen" class="serif-font text-gray-800 leading-relaxed space-y-6 text-justify text-xl md:text-4xl">
                    <p class="indent-10">Lê-ô-nác-đô đa Vin-xi có niềm đam mê hội họa từ nhỏ. Năm 14 tuổi, ông được cha đưa đến gặp danh họa Vê-rô-ki-ô để học vẽ.</p>
                    <p class="indent-10">Buổi học đầu tiên, thầy giáo đưa một quả trứng gà và bảo Lê-ô-nác-đô vẽ. Cậu bé rất vui, vì vẽ trứng là việc quá dễ dàng. Cậu cầm bút và cẩn thận vẽ từng nét, từng nét. Ngày hôm sau, thầy giáo lại đưa quả trứng gà và bảo Lê-ô-nác-đô vẽ tiếp. Rồi mấy ngày sau cũng vậy. Cậu bé có chút không vui, nghĩ: "Trứng gà có gì hay ho đâu mà thầy bắt vẽ mãi như thế?". Dần dần, cậu cảm thấy chán nản với yêu cầu của thầy giáo, cho rằng thầy coi thường năng lực của mình.</p>
                    <p class="indent-10">Một hôm, cậu mạnh dạn hỏi thầy: "Tại sao thầy luôn bắt em vẽ trứng thế ạ?". Thầy giáo nói: "Em đừng nghĩ vẽ trứng gà là đơn giản và dễ dàng. Trong một nghìn quả trứng, không thể tìm ra hai quả hoàn toàn giống nhau. Cho dù là cùng một quả trứng, nhưng if em nhìn nó từ những góc độ khác nhau thì cũng sẽ thấy những hình dạng khác nhau. Hơn nữa, ánh sáng cũng là yếu tố ảnh hưởng đến hình dạng của vật. Muốn thể hiện chính xác quả trứng trên giấy, không thể bỏ qua sự khổ luyện."</p>
                    <p class="indent-10">Ngừng một lát, thầy nói tiếp: "Trong quá trình vẽ, em chú ý đến những điều gì? Thầy muốn luyện tầm nhìn cho em, đây là bước đi đầu tiên dẫn đến thành công của hội họa. Chỉ có vẽ tốt quả trứng gà đơn giản này, mới có thể vẽ được những sự vật phức tạp."</p>
                    <p class="indent-10">Nghe những lời nói đó, Lê-ô-nác-đô bỗng hiểu ra mọi điều và cảm nhận được sự khổ công của thầy.</p>
                    <p class="indent-10">Từ đó về sau, Lê-ô-nác-đô luôn nhớ lời thầy, khổ luyện vẽ tranh. Một năm... hai năm..., trình độ của Lê-ô-nác-đô ngày càng được nâng cao, cuối cùng đã xuất sắc hơn thầy của mình. Lê-ô-nác-đô đa Vin-xi trở thành họa sĩ Ý nổi tiếng thế giới.</p>
                    
                </div>
            </div>

            <!-- Các khối thông tin bổ trợ đặt bên dưới dạng lưới thích ứng -->
            <div class="grid grid-cols-1 gap-6">
                <!-- Chú giải từ khó -->
                <div class="bg-amber-50/70 p-6 md:p-8 rounded-[28px] border-2 border-dashed border-amber-200">
                    <p class="text-xs font-black text-amber-600 uppercase tracking-widest mb-3 flex items-center gap-1">
                        <span>📝</span> Chú thích
                    </p>
                    <ul class="space-y-4 text-lg md:text-xl text-amber-600 font-bold leading-relaxed">
                        <li>• <strong>Danh họa</strong>: họa sĩ nổi tiếng thế giới hoặc cả nước.</li>
                        <li>• <strong>Khổ công</strong>: công phu, nỗ lực và cực nhọc rất nhiều vào một công việc.</li>
                        <li>• <strong>Khổ luyện</strong>: rèn luyện cực nhọc và kiên trì không quản ngại khó khăn.</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 💡 Nội dung chính bài học -->
        <div class="bg-gradient-to-r from-emerald-600 to-teal-500 p-8 rounded-[36px] text-white shadow-2xl border-4 border-emerald-100 relative overflow-hidden animate-in slide-in-from-bottom duration-500">
            <div class="absolute right-0 bottom-0 translate-x-10 translate-y-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
            <div class="relative z-10 space-y-4">
                <h4 class="text-2xl md:text-5xl font-black flex items-center gap-3">
                    <span class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">💡</span>
                    Nội dung chính bài học
                </h4>
                <p class="text-lg md:text-2xl font-bold leading-relaxed text-emerald-50">
                    Câu chuyện ca ngợi tinh thần kiên trì, nỗ lực bền bỉ và sự khổ luyện của danh họa Lê-ô-nác-đô đa Vin-xi, từ đó nhắn gửi bài học: Muốn đạt được thành công lớn trong sự nghiệp, ta phải kiên trì rèn luyện từ những điều cơ bản nhất.
                </p>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 CÂU HỎI ĐỌC HIỂU (BÀI TẬP 1 - 5) -->
                    <label class="flex items-start gap-3 p-3 bg-white hover:bg-emerald-50/20 rounded-xl border border-gray-100 cursor-pointer transition-all">
                        <input type="radio" name="q2-opt" value="sai-2" class="mt-1 w-5 h-5 text-emerald-800">
                        <span class="font-bold text-gray-800 text-lg md:text-3xl">Vì quả trứng gà dễ bị vỡ mỗi khi vẽ nên đòi hỏi kỹ thuật cao từ họa sĩ.</span>
                    </label>
                </div>
            </div>

            <!-- Câu hỏi 3 -->
            <div class="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-3">
                <p class="font-bold text-gray-800 text-lg md:text-xl"><span class="text-emerald-800">Câu 3:</span> Lê-ô-nác-đô hiểu ra điều gì từ câu trả lời của thầy giáo?</p>
                <div class="space-y-2">
                    <label class="flex items-start gap-3 p-3 bg-white hover:bg-emerald-50/20 rounded-xl border border-gray-100 cursor-pointer transition-all">
                        <input type="radio" name="q3-opt" value="sai-1" class="mt-1 w-5 h-5 text-emerald-800">
                        <span class="font-bold text-gray-800 text-lg md:text-3xl">Cậu hiểu rằng chỉ cần vẽ quả trứng cho xong để được chuyển sang vẽ phong cảnh phức tạp hơn.</span>
                    </label>
                    <label class="flex items-start gap-3 p-3 bg-white hover:bg-emerald-50/20 rounded-xl border border-gray-100 cursor-pointer transition-all">
                        <input type="radio" name="q3-opt" value="sai-2" class="mt-1 w-5 h-5 text-emerald-800">
                        <span class="font-bold text-gray-800 text-lg md:text-3xl">Cậu hiểu rằng vẽ trứng là bài tập phụ, còn thầy muốn kiểm tra tính cách bướng bỉnh của mình.</span>
                    </label>
                    <label class="flex items-start gap-3 p-3 bg-white hover:bg-emerald-50/20 rounded-xl border border-gray-100 cursor-pointer transition-all">
                        <input type="radio" name="q3-opt" value="dung" class="mt-1 w-5 h-5 text-emerald-800">
                        <span class="font-bold text-gray-800 text-lg md:text-3xl">Cậu bỗng hiểu ra mọi điều, cảm nhận được sự khổ công của thầy và tầm quan trọng của sự khổ luyện tầm nhìn.</span>
                    </label>
                </div>
            </div>

            <!-- Câu hỏi 4 (Tự luận) -->
            <div class="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-3">
                <p class="font-bold text-gray-800 text-lg md:text-xl"><span class="text-emerald-800">Câu 4:</span> Em học hỏi được điều gì từ câu chuyện của Lê-ô-nác-đô?</p>
                <textarea id="ans-vn74-cau4" rows="3" placeholder="Ví dụ: Em học hỏi được rằng muốn thành công trong bất cứ việc gì, chúng ta phải kiên trì, không ngại gian khổ và rèn luyện từ những điều đơn giản nhất..." class="w-full p-4 border border-gray-100 rounded-2xl outline-none focus:border-emerald-500 font-bold bg-white text-lg"></textarea>
                <div class="flex justify-end items-center gap-4"><button onclick="resetWritingVn74()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="checkWritingVn74();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-vn74-bt4" class="hidden p-6 bg-emerald-600 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500 mt-4"></div>
            </div>

            <!-- Câu hỏi 5 -->
            <div class="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-3">
                <p class="font-bold text-gray-800 text-lg md:text-xl"><span class="text-emerald-800">Câu 5:</span> Câu tục ngữ nào sau đây nói lên ý nghĩa của câu chuyện?</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label class="flex items-center gap-2 font-bold cursor-pointer text-base md:text-lg p-3 bg-white rounded-xl border border-gray-100">
                        <input type="radio" name="q5-opt" value="dung" class="w-5 h-5 text-emerald-800">
                        <span>A. Có công mài sắt, có ngày nên kim.</span>
                    </label>
                    <label class="flex items-center gap-2 font-bold cursor-pointer text-base md:text-lg p-3 bg-white rounded-xl border border-gray-100">
                        <input type="radio" name="q5-opt" value="sai-1" class="w-5 h-5 text-emerald-800">
                        <span>B. Không thầy đố mày làm nên.</span>
                    </label>
                    <label class="flex items-center gap-2 font-bold cursor-pointer text-base md:text-lg p-3 bg-white rounded-xl border border-gray-100">
                        <input type="radio" name="q5-opt" value="sai-2" class="w-5 h-5 text-emerald-800">
                        <span>C. Lá lành đùm lá rách.</span>
                    </label>
                    <label class="flex items-center gap-2 font-bold cursor-pointer text-base md:text-lg p-3 bg-white rounded-xl border border-gray-100">
                        <input type="radio" name="q5-opt" value="sai-3" class="w-5 h-5 text-emerald-800">
                        <span>D. Ăn quả nhớ người trồng cây.</span>
                    </label>
                </div>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraDocHieu74();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn74-dochieu" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
        </div>
    </section>

    <!-- 📋 PHẦN LUYỆN TẬP TỪ VỰNG (KÍNH LÚP) -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-start gap-3 border-b border-emerald-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">🔍</span>
            <h3 class="text-2xl md:text-5xl font-black text-emerald-800">
                Luyện tập: Từ ngữ chỉ nỗ lực thành công
            </h3>
        </div>

        <!-- Bài tập 1 -->
        <div class="space-y-4">
            <div class="flex items-start gap-2">
                <span class="w-8 h-8 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-base shrink-0 shadow-sm">1</span>
                <p class="font-bold text-gray-800 text-lg md:text-xl">Tìm các từ ngữ trong và ngoài bài thể hiện nỗ lực của một người trên con đường đi đến thành công.</p>
            </div>
            <p class="text-base text-gray-800 font-bold italic pl-10">👉 Hướng dẫn: Nhấp chuột vào các từ chỉ sự nỗ lực, khổ công, kiên trì dưới đây để đưa vào "Chiếc cúp thành công":</p>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-4xl mx-auto pt-2">
                <!-- Danh sách từ để nhấp -->
                <div class="lg:col-span-7 flex flex-wrap gap-2.5">
                    <button id="btn-tu-khocong" onclick="chonTuNoiLuc74('khocong')" class="px-4 py-2 border-2 border-emerald-100 hover:bg-emerald-50 rounded-xl font-bold text-lg text-gray-800 transition-all">khổ công</button>
                    <button id="btn-tu-kientri" onclick="chonTuNoiLuc74('kientri')" class="px-4 py-2 border-2 border-emerald-100 hover:bg-emerald-50 rounded-xl font-bold text-lg text-gray-800 transition-all">kiên trì</button>
                    <button id="btn-tu-luoibiang" onclick="chonTuNoiLuc74('luoibiang')" class="px-4 py-2 border-2 border-emerald-100 hover:bg-emerald-50 rounded-xl font-bold text-lg text-gray-800 transition-all">lười biếng</button>
                    <button id="btn-tu-kholuyen" onclick="chonTuNoiLuc74('kholuyen')" class="px-4 py-2 border-2 border-emerald-100 hover:bg-emerald-50 rounded-xl font-bold text-lg text-gray-800 transition-all">khổ luyện</button>
                    <button id="btn-tu-nanlong" onclick="chonTuNoiLuc74('nanlong')" class="px-4 py-2 border-2 border-emerald-100 hover:bg-emerald-50 rounded-xl font-bold text-lg text-gray-800 transition-all">nản lòng</button>
                    <button id="btn-tu-benbi" onclick="chonTuNoiLuc74('benbi')" class="px-4 py-2 border-2 border-emerald-100 hover:bg-emerald-50 rounded-xl font-bold text-lg text-gray-800 transition-all">bền bỉ</button>
                    <button id="btn-tu-quyettam" onclick="chonTuNoiLuc74('quyettam')" class="px-4 py-2 border-2 border-emerald-100 hover:bg-emerald-50 rounded-xl font-bold text-lg text-gray-800 transition-all">quyết tâm</button>
                    <button id="btn-tu-chongchan" onclick="chonTuNoiLuc74('chongchan')" class="px-4 py-2 border-2 border-emerald-100 hover:bg-emerald-50 rounded-xl font-bold text-lg text-gray-800 transition-all">chóng chán</button>
                    <button id="btn-tu-cancu" onclick="chonTuNoiLuc74('cancu')" class="px-4 py-2 border-2 border-emerald-100 hover:bg-emerald-50 rounded-xl font-bold text-lg text-gray-800 transition-all">cần cù</button>
                </div>

                <!-- Cúp thành công -->
                <div class="lg:col-span-5 bg-amber-50 rounded-[32px] p-6 border border-amber-100 text-center space-y-4">
                    <span class="text-3xl md:text-5xl block">🏆</span>
                    <h5 class="text-amber-900 font-black text-lg">Từ điển Nỗ lực</h5>
                    <div id="cup-tu-list" class="flex flex-wrap gap-2 justify-center text-sm font-bold text-amber-600 min-h-[60px]">
                        <span class="text-gray-800 italic">Chưa có từ nào được chọn...</span>
                    </div>
                </div>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraNoiLuc74();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn74-noiluc" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
        </div>

        <!-- Bài tập 2 -->
        <div class="space-y-4 pt-6 border-t border-gray-100">
            <div class="flex items-start gap-2">
                <span class="w-8 h-8 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-base shrink-0 shadow-sm">2</span>
                <p class="font-bold text-gray-800 text-lg md:text-xl">Dùng 2 từ em tìm được ở bài tập 1 để hoàn thiện câu dưới đây:</p>
            </div>

            <div class="max-w-4xl mx-auto bg-amber-50 bg-opacity-35 p-6 rounded-3xl border border-amber-100 font-sans text-xl leading-relaxed text-gray-800 font-bold">
                Thành công của Lê-ô-nác-đô là sự kết hợp của hai yếu tố: sự 
                <select id="dien-o-1" class="mx-2 p-1.5 border border-amber-100 rounded-xl font-bold bg-white text-lg text-emerald-800 focus:outline-none focus:border-emerald-500">
                    <option value="">-- Chọn từ --</option>
                    <option value="khocong">khổ công</option>
                    <option value="kholuyen">khổ luyện</option>
                    <option value="quyettam">quyết tâm</option>
                </select>
                dạy dỗ của thầy giáo và sự 
                <select id="dien-o-2" class="mx-2 p-1.5 border border-amber-100 rounded-xl font-bold bg-white text-lg text-emerald-800 focus:outline-none focus:border-emerald-500">
                    <option value="">-- Chọn từ --</option>
                    <option value="khocong">khổ công</option>
                    <option value="kholuyen">khổ luyện</option>
                    <option value="nanlong">nản lòng</option>
                </select>
                của chính bản thân mình.
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraDienTu74();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn74-dientu" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBai74Global()" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-emerald-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Danh họa người Ý nổi tiếng thế giới được nhắc đến trong bài đọc là ai?",
            "options": [
                "Lê-ô-nác-đô đa Vin-xi",
                "Mi-ken-lăng-giê-lô",
                "Pi-cát-sô",
                "Vê-rô-ki-ô"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Ai là người thầy giáo dạy vẽ đầu tiên của cậu bé Lê-ô-nác-đô?",
            "options": [
                "Danh họa Vê-rô-ki-ô",
                "Nhà bác học Ma-ri-a",
                "Thầy giáo Cơ-rô-xét-ti",
                "Người cha của Lê-ô-nác-đô"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Thầy giáo bắt Lê-ô-nác-đô vẽ vật gì đầu tiên và vẽ liên tục trong nhiều ngày?",
            "options": [
                "Quả trứng gà",
                "Chiếc tách uống trà",
                "Bông hoa hướng dương",
                "Khuôn mặt của cha cậu"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Phản ứng của Lê-ô-nác-đô thế nào khi phải vẽ quả trứng nhiều ngày?",
            "options": [
                "Cảm thấy chán nản, cho rằng thầy coi thường năng lực của mình",
                "Cảm thấy cực kỳ hào hứng và xin vẽ thêm quả trứng vịt",
                "Bỏ học ngay lập tức để chuyển sang làm nhà điêu khắc",
                "Vui vẻ thực hiện mà không thắc mắc lời thầy dạy bảo"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Theo lời thầy giáo, vì sao việc vẽ một quả trứng gà không hề đơn giản?",
            "options": [
                "Vì trong một nghìn quả trứng, không thể tìm ra hai quả hoàn toàn giống nhau",
                "Vì quả trứng làm bằng chất liệu đặc biệt dễ vỡ khi vẽ",
                "Vì thầy giáo cố tình gây khó khăn để thử thách cậu học trò",
                "Vì vẽ trứng gà bắt buộc phải vẽ bằng màu nước đắt tiền"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tầm quan trọng của việc vẽ tốt quả trứng gà đơn giản là gì?",
            "options": [
                "Là bước đầu tiên luyện tầm nhìn, giúp sau này vẽ được những sự vật phức tạp",
                "Để bán được nhiều tiền hơn ở các triển lãm nghệ thuật",
                "Để chứng minh bản thân giỏi hơn các bạn cùng lớp",
                "Để giúp thầy giáo không cần phải chuẩn bị vật mẫu khác"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Yếu tố khách quan nào ảnh hưởng trực tiếp đến hình dạng của vật khi vẽ?",
            "options": [
                "Ánh sáng và góc độ quan sát của người vẽ",
                "Chất lượng của chiếc bút chì",
                "Độ dày của trang giấy vẽ",
                "Thời tiết mưa hay nắng ngoài trời"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ nào sau đây đồng nghĩa với từ 'khổ công'?",
            "options": [
                "Nhọc công, cực nhọc, tốn nhiều công sức",
                "Lười biếng, nhàn nhã, thảnh thơi",
                "Nhanh chóng, vội vàng, qua loa",
                "Thông minh, sáng dạ, học nhanh"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ nào trái nghĩa với từ 'kiên trì'?",
            "options": [
                "Nản lòng, chóng chán, dễ bỏ cuộc",
                "Bền bỉ, nhẫn nại, dẻo dai",
                "Cần cù, chăm chỉ, siêng năng",
                "Quyết tâm, bền gan, vững chí"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Lê-ô-nác-đô đa Vin-xi đã khổ luyện học vẽ trong bao nhiêu năm?",
            "options": [
                "Nhiều năm trời (Một năm... hai năm...)",
                "Chỉ trong vòng một tháng học vẽ quả trứng",
                "Đúng nửa năm sau khi thầy giáo giải thích",
                "Không cần khổ luyện vì cậu có tài năng bẩm sinh"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Thành công của danh họa Lê-ô-nác-đô đa Vin-xi được đúc kết từ hai yếu tố nào?",
            "options": [
                "Sự khổ công dạy dỗ của thầy giáo và sự khổ luyện của bản thân",
                "Tài năng bẩm sinh thiên tài và gia đình giàu có",
                "Sự may mắn và sự giúp đỡ của các họa sĩ nổi tiếng",
                "Những quả trứng gà ngon và màu vẽ chất lượng tốt"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Câu tục ngữ nào khuyên chúng ta kiên trì, nỗ lực bền bỉ để gặt hái kết quả tốt đẹp?",
            "options": [
                "Có công mài sắt, có ngày nên kim.",
                "Lá lành đùm lá rách.",
                "Ăn quả nhớ người trồng cây.",
                "Không thầy đố mày làm nên."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'khổ luyện' trong câu chuyện thể hiện điều gì?",
            "options": [
                "Rèn luyện cực nhọc và kiên trì không quản ngại khó khăn",
                "Tập luyện thể thao nâng cao sức khỏe cơ bắp",
                "Chịu đựng hình phạt nặng nề từ thầy giáo dạy vẽ",
                "Nỗi buồn chán tột cùng khi học bài quá đơn điệu"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Hành động 'mạnh dạn hỏi thầy' của Lê-ô-nác-đô đa Vin-xi thể hiện tính cách nào của cậu?",
            "options": [
                "Sự thẳng thắn, ham học hỏi và tôn trọng giáo viên",
                "Thái độ vô lễ, không vâng lời người lớn tuổi",
                "Sự lười nhác và không muốn tiếp tục làm bài tập",
                "Muốn khoe khoang kiến thức hội họa của bản thân"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Thông điệp chính mà câu chuyện 'Khổ luyện thành tài' muốn truyền tải đến các em học sinh là gì?",
            "options": [
                "Mọi tài năng lớn đều cần sự dạy dỗ tâm huyết và tinh thần khổ luyện bền bỉ",
                "Đi học vẽ chỉ nên vẽ những sự vật đơn giản như trứng gà",
                "Hãy hỏi thầy giáo mỗi khi cảm thấy chán nản với bài tập",
                "Họa sĩ Lê-ô-nác-đô đa Vin-xi vẽ trứng giỏi nhất thế giới"
            ],
            "answer": 0,
            "level": 2
        }
    ]
};

// --- KHỞI ĐỘNG ---
window.kiemTraKhoiDong74 = function() {
    const text = document.getElementById('ans-vn74-kd')?.value.trim();
    const fb = document.getElementById('fb-vn74-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy ghi chia sẻ suy nghĩ của mình về nhan đề trước nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow-sm animate-bounce";
        return;
    }

    fb.innerHTML = "🎉 Tuyệt vời! Ý kiến của em rất sâu sắc. Sự rèn luyện vượt qua vất vả, khó khăn chính là chìa khóa để đạt tới đỉnh cao thành công. Chúng ta cùng đọc bài học nhé!";
    fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
};

// --- CÂU HỎI ĐỌC HIỂU ---
window.kiemTraDocHieu74 = function() {
    const fb = document.getElementById('fb-vn74-dochieu');
    if (!fb) return;
    fb.classList.remove('hidden');

    const q1 = document.querySelector('input[name="q1-opt"]:checked')?.value;
    const q2 = document.querySelector('input[name="q2-opt"]:checked')?.value;
    const q3 = document.querySelector('input[name="q3-opt"]:checked')?.value;
    const q5 = document.querySelector('input[name="q5-opt"]:checked')?.value;

    if (!q1 || !q2 || !q3 || !q5) {
        fb.innerHTML = "⚠️ Em hãy hoàn thành đầy đủ lựa chọn cho các câu hỏi trắc nghiệm (Câu 1, 2, 3 và 5) nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    const q1Dung = q1 === 'dung';
    const q2Dung = q2 === 'dung';
    const q3Dung = q3 === 'dung';
    const q5Dung = q5 === 'dung';

    if (q1Dung && q2Dung && q3Dung && q5Dung) {
        fb.innerHTML = "🎉 Xuất sắc! Em đã trả lời đúng tất cả các câu hỏi đọc hiểu của câu chuyện 'Khổ luyện thành tài'.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "❌ Có câu trả lời chưa chính xác. Em hãy đọc kỹ lại nội dung văn bản và chọn lại nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

window.checkWritingVn74 = function() {
    const text = document.getElementById('ans-vn74-cau4')?.value.trim();
    const fb = document.getElementById('fb-vn74-bt4');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy nhập câu trả lời cho bài học em rút ra từ câu chuyện nhé!";
        fb.className = "mt-4 p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white shadow-sm";
        return;
    }

    if (text.length < 10) {
        fb.innerHTML = "⚠️ Câu trả lời tự luận cần chi tiết hơn một chút nhé (tối thiểu 10 ký tự).";
        fb.className = "mt-4 p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white shadow-sm";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ THẦY E:</span>
            <p class="text-lg font-bold">"Rất hoan nghênh suy nghĩ chín chắn của em! Sự kiên trì và khổ luyện từ những việc nhỏ nhất chính là chìa khóa vững chắc dẫn lối tới thành công lớn sau này."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Đạt yêu cầu - Hoàn thành tốt</span>
        </div>
    `;
    fb.className = "mt-4 p-6 bg-emerald-600 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500";
};

window.resetWritingVn74 = function() {
    const textarea = document.getElementById('ans-vn74-cau4');
    if (textarea) textarea.value = '';
    const fb = document.getElementById('fb-vn74-bt4');
    if (fb) fb.classList.add('hidden');
};


// --- LUYỆN TẬP BÀI 1: NHẶT TỪ NỖ LỰC ---
let danhSachTuChon74 = [];
const tuDungNoiLuc74 = ['khocong', 'kientri', 'kholuyen', 'benbi', 'quyettam', 'cancu'];

const nhanTuTiengViet74 = {
    'khocong': 'khổ công',
    'kientri': 'kiên trì',
    'kholuyen': 'khổ luyện',
    'benbi': 'bền bỉ',
    'quyettam': 'quyết tâm',
    'cancu': 'cần cù',
    'luoibiang': 'lười biếng',
    'nanlong': 'nản lòng',
    'chongchan': 'chóng chán'
};

window.chonTuNoiLuc74 = function(tu) {
    const fb = document.getElementById('fb-vn74-noiluc');
    if (fb) fb.classList.add('hidden');

    const index = danhSachTuChon74.indexOf(tu);
    if (index > -1) {
        // Hủy chọn
        danhSachTuChon74.splice(index, 1);
        document.getElementById(`btn-tu-${tu}`).className = "px-4 py-2 border-2 border-emerald-100 hover:bg-emerald-50 rounded-xl font-bold text-lg text-gray-800 transition-all";
    } else {
        // Bấm chọn
        danhSachTuChon74.push(tu);
        document.getElementById(`btn-tu-${tu}`).className = "px-4 py-2 bg-emerald-100/10 border-2 border-emerald-100 rounded-xl font-bold text-lg text-emerald-800 transition-all shadow-sm";
    }
    capNhatCupTu74();
};

function capNhatCupTu74() {
    const cup = document.getElementById('cup-tu-list');
    if (!cup) return;

    if (danhSachTuChon74.length === 0) {
        cup.innerHTML = '<span class="text-gray-800 italic">Chưa có từ nào được chọn...</span>';
        return;
    }

    cup.innerHTML = danhSachTuChon74.map(t => {
        const text = nhanTuTiengViet74[t] || t;
        const color = tuDungNoiLuc74.includes(t) ? 'bg-amber-500 text-amber-600 border-amber-100' : 'bg-gray-100 text-gray-400 border-gray-100';
        return `<span class="px-3 py-1.5 rounded-full border font-bold ${color} shadow-sm text-lg md:text-3xl">${text}</span>`;
    }).join(' ');
}

window.kiemTraNoiLuc74 = function() {
    const fb = document.getElementById('fb-vn74-noiluc');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (danhSachTuChon74.length === 0) {
        fb.innerHTML = "⚠️ Em hãy nhấp chọn các từ ngữ thể hiện sự nỗ lực trước nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    // Kiểm tra xem đã chọn đúng tất cả các từ đúng và không chọn từ sai
    const coTuSai = danhSachTuChon74.some(t => !tuDungNoiLuc74.includes(t));
    const thieuTuDung = tuDungNoiLuc74.some(t => !danhSachTuChon74.includes(t));

    if (!coTuSai && !thieuTuDung) {
        fb.innerHTML = "🎉 Xuất sắc! Em đã nhặt đúng và đầy đủ tất cả 6 từ ngữ chỉ sự nỗ lực, kiên trì đưa vào cúp thành công.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else if (coTuSai) {
        fb.innerHTML = "❌ Trong chiếc cúp có chứa từ ngữ không thuộc nhóm chỉ nỗ lực (lười biếng, nản lòng, chóng chán). Hãy bỏ chọn các từ đó nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "⚠️ Em chọn đúng hướng rồi nhưng vẫn còn thiếu một vài từ chỉ sự nỗ lực khác. Hãy tìm thêm nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
    }
};

window.lamLaiNoiLuc74 = function() {
    danhSachTuChon74 = [];
    Object.keys(nhanTuTiengViet74).forEach(t => {
        const btn = document.getElementById(`btn-tu-${t}`);
        if (btn) {
            btn.className = "px-4 py-2 border-2 border-emerald-100 hover:bg-emerald-50 rounded-xl font-bold text-lg text-gray-800 transition-all";
        }
    });
    capNhatCupTu74();
    const fb = document.getElementById('fb-vn74-noiluc');
    if (fb) fb.classList.add('hidden');
};

// --- LUYỆN TẬP BÀI 2: ĐIỀN TỪ CHỖ TRỐNG ---
window.kiemTraDienTu74 = function() {
    const fb = document.getElementById('fb-vn74-dientu');
    if (!fb) return;
    fb.classList.remove('hidden');

    const o1 = document.getElementById('dien-o-1')?.value;
    const o2 = document.getElementById('dien-o-2')?.value;

    if (!o1 || !o2) {
        fb.innerHTML = "⚠️ Em hãy chọn từ thích hợp cho cả 2 chỗ trống nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    if (o1 === 'khocong' && o2 === 'kholuyen') {
        fb.innerHTML = "🎉 Hoàn toàn chính xác! Thành công là sự kết hợp của hai yếu tố: sự *khổ công* dạy dỗ của thầy giáo và sự *khổ luyện* của chính bản thân mình.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "❌ Lựa chọn từ điền chưa chính xác. Hãy xem kỹ vai trò của thầy giáo (khổ công dạy dỗ) và học trò (khổ luyện học tập) để chọn lại nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.nopBai74Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 75 & 76',
            '🎨',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎨</span><p class="text-2xl md:text-3xl font-bold text-emerald-800">Chúc mừng em đã hoàn thành bài đọc hôm nay!</p><p class="text-lg text-gray-800 mt-3">Hãy rèn luyện tinh thần kiên trì và không quản ngại thử thách từ những việc nhỏ nhất để tiến tới thành công nhé.</p></div>'
        );
    }
};
