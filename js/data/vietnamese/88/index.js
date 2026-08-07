export const lesson88 = {
    "topic": "Tiếng Việt 5",
    "week": "13",
    "period": "88-89",
    "title": "ĐỌC: TINH THẦN HỌC TẬP CỦA NHÀ PHI-LÍT",
    "desc": "Bài học kể về thói quen tự học đầy thú vị và sáng tạo của gia đình cậu bé Phi-lít, giúp học sinh nhận thức sâu sắc về tinh thần tự học, học hỏi không ngừng suốt cuộc đời.",
    "subject": "Đọc",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
<div class="flex justify-end mb-4">
    <button onclick="playSegmentAudio('assets/audio/tiengviet/88/tinh_than_hoc_tap_cua_nha_phi_lit.mp3')" class="p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc toàn bài">
        <span class="text-xl">🔊 Nghe đọc mẫu</span>
    </button>
</div>
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-emerald-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-emerald-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-emerald-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-emerald-800 font-bold text-lg md:text-xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Đọc trôi chảy, diễn cảm bài văn với giọng đọc ấm áp, tự hào và thể hiện rõ các cuộc đối thoại trong gia đình Phi-lít.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Hiểu được phương pháp tự học sáng tạo của gia đình Phi-lít và ý nghĩa to lớn của việc tích lũy kiến thức mỗi ngày.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Nhận biết và sử dụng thành thạo các đại từ xưng hô trong văn cảnh cụ thể và phân biệt rõ các khái niệm: kiến thức, trí thức, trí nhớ.
            </li>
        </ul>
    </div>

    <!-- 🚀 Khởi động tương tác -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-6">
        <h3 class="text-2xl md:text-5xl font-black text-emerald-800 border-b border-emerald-100 pb-4 flex items-center gap-3">
            <span class="text-xl md:text-3xl">🚀</span>
            Khởi động: Người truyền cảm hứng học tập
        </h3>
        <p class="text-lg text-gray-700 font-bold leading-relaxed">
            Trao đổi với bạn: Trong việc học, ai là người truyền cảm hứng cho em nhiều nhất? Hãy chia sẻ cảm xúc hoặc câu chuyện ngắn của em với Thầy E nhé:
        </p>
        <div class="max-w-3xl mx-auto space-y-4 pt-2">
            <input type="text" id="warmup-inspire-input" placeholder="Ví dụ: Bố mẹ, thầy cô, hoặc một nhà khoa học..." class="w-full p-4 border-2 border-emerald-100 rounded-2xl outline-none focus:border-emerald-500 font-bold bg-emerald-50/10 text-lg md:text-xl shadow-inner">
            <div class="flex justify-center">
                <button onclick="startWarmupVn88()" class="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-lg rounded-2xl shadow-lg hover:shadow-xl active:scale-95 transition-all">GỬI CHO THẦY E ✉️</button>
            </div>
            <div id="warmup-feedback-88" class="hidden p-5 rounded-3xl border-2 font-bold text-lg text-center shadow-lg transition-all animate-bounce-slow"></div>
        </div>
    </div>

    <!-- 📖 Phần Bài đọc -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-6 relative">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-emerald-100 pb-6 text-lg md:text-3xl">
            <div>
                <span class="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Bài đọc chính</span>
                <h3 class="text-xl md:text-3xl font-black text-emerald-900 mt-2">TINH THẦN HỌC TẬP CỦA NHÀ PHI-LÍT</h3>
            </div>
            <button onclick="window.speakText && window.speakText('Phi-lít sinh ra và lớn lên trong một thị trấn nhỏ cùng bố mẹ và anh trai. Cậu bé rất ham học hỏi. Cậu hăng say nghiên ngẫm mọi cuốn sách hay tờ báo mình có được. Cậu luôn tập trung lắng nghe mọi người trong thị trấn chuyện trò để biết được thế giới bên ngoài. Phi-lít được như vậy là nhờ cách giáo dục của cha...')" 
                    class="px-5 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-black rounded-2xl flex items-center gap-2 border border-emerald-100 shadow-sm active:scale-95 transition-all text-base">
                <span>🔊 Nghe đọc mẫu</span>
            </button>
        </div>

        <div class="space-y-8">
            <div class="w-full bg-emerald-50/10 p-6 md:p-8 rounded-[40px] border border-emerald-100/50 shadow-inner relative overflow-hidden">
                <!-- Ảnh minh họa SGK (bấm phóng to) -->
                <div onclick="window.showMathFeedback('Ảnh minh họa SGK Tiết 88-89', '🌍', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/88-89/88-89.png&quot; class=&quot;max-h-[75vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Tinh thần học tập của nhà Phi-lít&quot;&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-white p-4 rounded-3xl border border-emerald-100 shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group border-4 border-white">
                    <img src="assets/images/tiengviet_5_1/88-89/88-89.png" alt="Ảnh minh họa Tinh thần học tập của nhà Phi-lít" class="w-full h-auto object-cover group-hover:scale-105 transition-all duration-500">
                    <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span class="px-4 py-2 bg-white/95 rounded-full text-xs font-black text-emerald-800 shadow-md">🔍 PHÓNG TO</span>
                    </div>
                    <p class="text-[10px] text-gray-800 font-bold text-center mt-3 leading-tight">Cả nhà Phi-lít xúm lại xem bản đồ thế giới (Trang 117 SGK)</p>
                </div>

                <div id="bai-doc-phi-lit" class="serif-font text-gray-800 leading-relaxed space-y-6 text-justify text-xl md:text-4xl">
                    <p class="indent-10">Phi-lít sinh ra và lớn lên trong một thị trấn nhỏ cùng bố mẹ và anh trai. Cậu bé rất ham học hỏi. Cậu hăng say nghiên ngẫm mọi cuốn sách hay tờ báo mình có được. Cậu luôn tập trung lắng nghe mọi người trong thị trấn chuyện trò để biết được thế giới bên ngoài. Phi-lít được như vậy là nhờ cách giáo dục của cha.</p>
                    <p class="indent-10">Cha Phi-lít luôn cho rằng, điều đáng buồn nhất là cả ngày không học được thứ gì. Vì vậy, để giữ gìn và phát huy tinh thần học tập cho cả gia đình, ông yêu cầu mỗi ngày ai cũng phải học được kiến thức mới, rồi trao đổi với nhau sau bữa tối. Chẳng hạn một hôm, như thường lệ, cha Phi-lít nói:</p>
                    <p class="indent-10">– Phi-lít, hãy cho cha biết hôm nay con học được gì mới.</p>
                    <p class="indent-10">– Con biết được dân số Nê-pan là bao nhiêu. – Phi-lít đáp.</p>
                    <p class="indent-10">– Dân số của Nê-pan à? Ừ, tốt lắm! – Cha cậu nói.</p>
                    <p class="indent-10">Sau đó, cha quay sang hỏi mẹ:</p>
                    <p class="indent-10">– Mẹ nó có biết dân số của Nê-pan là bao nhiêu không?</p>
                    <p class="indent-10">Mẹ cậu cười, hỏi lại:</p>
                    <p class="indent-10">– Nê-pan ư? Nó ở đâu nhỉ?</p>
                    <p class="indent-10">– Phi-lít! – Cha nói. – Con mang bản đồ thế giới ra đây, chúng ta cùng xem vị trí địa lí của Nê-pan nhé!</p>
                    <p class="indent-10">Tấm bản đồ được trải ra nền nhà. Cả nhà xúm lại tìm xem Nê-pan ở đâu.</p>
                    <p class="indent-10">Thời thơ ấu, Phi-lít chưa thấy được lợi ích của phương pháp học tập đó. Sau này, Phi-lít thi đỗ đại học. Cậu theo học một số vị giáo sư nổi tiếng. Điều khiến cậu thấy thú vị là có những kiến thức các giáo sư dạy khá giống với thứ cha từng yêu cầu cậu học, chỉ là phát triển hơn lên mà thôi.</p>
                    
                </div>
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
                Câu chuyện đề cao tinh thần hiếu học, ham học hỏi của cậu bé Phi-lít và phương pháp giáo dục gia đình tuyệt vời của người cha. Qua đó, gửi gắm thông điệp: mỗi ngày học một điều mới và cùng chia sẻ kiến thức là con đường xây dựng nền móng tri thức vững chắc cho tương lai.
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 TÌM HIỂU BÀI (Câu 1-5 SGK) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-8">
        <h3 class="text-2xl md:text-5xl font-black text-emerald-800 border-b border-emerald-100 pb-4 flex items-center gap-3">
            <span class="text-xl md:text-3xl">📝</span>
            Tìm hiểu bài học
        </h3>

        <!-- Câu hỏi 1: Ghép nối sơ đồ về giới thiệu Phi-lít -->
        <div class="space-y-4">
            <h4 class="text-xl font-black text-gray-800 flex items-start gap-2">
                <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-sm shrink-0 mt-0.5">1</span>
                Ở đoạn mở đầu của câu chuyện, Phi-lít được giới thiệu như thế nào? (Chọn đáp án chính xác điền vào sơ đồ)
            </h4>
            
            <div class="max-w-3xl mx-auto bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100 shadow-inner grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Nhánh Nơi sinh sống -->
                <div class="bg-white p-5 rounded-2xl border-2 border-emerald-100 flex flex-col justify-between space-y-3">
                    <span class="text-sm font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full w-fit">📍 NƠI SINH SỐNG</span>
                    <select id="vn88-c1-loc" class="w-full p-3 border-2 border-emerald-100 rounded-xl outline-none focus:border-emerald-500 font-bold text-gray-800">
                        <option value="">-- Chọn nơi sinh sống --</option>
                        <option value="city">Một thành phố lớn, náo nhiệt</option>
                        <option value="town">Một thị trấn nhỏ cùng bố mẹ và anh trai</option>
                        <option value="village">Một vùng quê hẻo lánh ven biển</option>
                    </select>
                </div>

                <!-- Nhánh Sở thích -->
                <div class="bg-white p-5 rounded-2xl border-2 border-emerald-100 flex flex-col justify-between space-y-3">
                    <span class="text-sm font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full w-fit">❤️ SỞ THÍCH & THÓI QUEN</span>
                    <select id="vn88-c1-hobby" class="w-full p-3 border-2 border-emerald-100 rounded-xl outline-none focus:border-emerald-500 font-bold text-gray-800">
                        <option value="">-- Chọn sở thích --</option>
                        <option value="play">Thích đi chơi và chỉ nghe nhạc cả ngày</option>
                        <option value="learn">Rất ham học hỏi, hăng say nghiên ngẫm mọi cuốn sách, tờ báo, luôn tập trung lắng nghe để biết thế giới bên ngoài</option>
                        <option value="sport">Chỉ thích tham gia các hoạt động thể thao ngoài trời</option>
                    </select>
                </div>
            </div>
            <div class="flex justify-end items-center gap-4"><button onclick="checkC1Vn88();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-c1" class="hidden p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner"></div>
        </div>

        <!-- Câu hỏi 2 -->
        <div class="space-y-4 border-t border-emerald-50 pt-6">
            <h4 class="text-xl font-black text-gray-800 flex items-start gap-2">
                <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-sm shrink-0 mt-0.5">2</span>
                Cha Phi-lít yêu cầu cả gia đình làm gì mỗi ngày? Vì sao?
            </h4>
            <div class="space-y-3 max-w-4xl mx-auto">
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-emerald-50/50 rounded-2xl border border-slate-100 cursor-pointer transition-all">
                    <input type="radio" name="vn88-c2" value="A" class="w-5 h-5 text-emerald-600 focus:ring-emerald-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">Yêu cầu mỗi ngày ai cũng phải học được kiến thức mới rồi trao đổi với nhau sau bữa tối, vì ông cho rằng điều đáng buồn nhất là cả ngày không học được thứ gì.</span>
                </label>
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-emerald-50/50 rounded-2xl border border-slate-100 cursor-pointer transition-all">
                    <input type="radio" name="vn88-c2" value="B" class="w-5 h-5 text-emerald-600 focus:ring-emerald-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">Yêu cầu mỗi ngày phải đi chợ mua một tờ báo mới để bố đọc và giải thích, vì ông muốn cả nhà nắm bắt tin tức thời sự.</span>
                </label>
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-emerald-50/50 rounded-2xl border border-slate-100 cursor-pointer transition-all">
                    <input type="radio" name="vn88-c2" value="C" class="w-5 h-5 text-emerald-600 focus:ring-emerald-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">Yêu cầu mỗi ngày phải vẽ một tấm bản đồ thế giới, vì ông muốn rèn luyện kỹ năng hội họa và địa lý cho các con.</span>
                </label>
            </div>
            <div class="flex justify-end items-center gap-4"><button onclick="checkC2Vn88();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-c2" class="hidden p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner"></div>
        </div>

        <!-- Câu hỏi 3 -->
        <div class="space-y-4 border-t border-emerald-50 pt-6">
            <h4 class="text-xl font-black text-gray-800 flex items-start gap-2">
                <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-sm shrink-0 mt-0.5">3</span>
                Em có nhận xét gì về việc cả gia đình Phi-lít xúm lại xem bản đồ thế giới?
            </h4>
            <div class="space-y-3 max-w-4xl mx-auto">
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-emerald-50/50 rounded-2xl border border-slate-100 cursor-pointer transition-all">
                    <input type="radio" name="vn88-c3" value="A" class="w-5 h-5 text-emerald-600 focus:ring-emerald-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">Việc đó rất tốn thời gian và làm gián đoạn bữa tối của gia đình.</span>
                </label>
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-emerald-50/50 rounded-2xl border border-slate-100 cursor-pointer transition-all">
                    <input type="radio" name="vn88-c3" value="B" class="w-5 h-5 text-emerald-600 focus:ring-emerald-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">Cho thấy không khí học tập vô cùng đầm ấm, vui vẻ; cả nhà cùng học, cùng khám phá và hỗ trợ lẫn nhau rất tự nhiên.</span>
                </label>
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-emerald-50/50 rounded-2xl border border-slate-100 cursor-pointer transition-all">
                    <input type="radio" name="vn88-c3" value="C" class="w-5 h-5 text-emerald-600 focus:ring-emerald-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">Chỉ có người cha hào hứng học, còn mẹ và Phi-lít chỉ tham gia vì bị bắt buộc.</span>
                </label>
            </div>
            <div class="flex justify-end items-center gap-4"><button onclick="checkC3Vn88();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-c3" class="hidden p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner"></div>
        </div>

        <!-- Câu hỏi 4 -->
        <div class="space-y-4 border-t border-emerald-50 pt-6">
            <h4 class="text-xl font-black text-gray-800 flex items-start gap-2">
                <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-sm shrink-0 mt-0.5">4</span>
                Phương pháp học tập của gia đình mang lại lợi ích gì cho Phi-lít sau này?
            </h4>
            <div class="space-y-3 max-w-4xl mx-auto">
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-emerald-50/50 rounded-2xl border border-slate-100 cursor-pointer transition-all">
                    <input type="radio" name="vn88-c4" value="A" class="w-5 h-5 text-emerald-600 focus:ring-emerald-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">Giúp Phi-lít có nền tảng kiến thức vững chắc, thi đỗ đại học và nhận thấy những kiến thức học được từ nhỏ rất bổ ích, hỗ trợ đắc lực cho các bài giảng chuyên sâu của giáo sư.</span>
                </label>
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-emerald-50/50 rounded-2xl border border-slate-100 cursor-pointer transition-all">
                    <input type="radio" name="vn88-c4" value="B" class="w-5 h-5 text-emerald-600 focus:ring-emerald-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">Giúp Phi-lít trở thành một nhà bản đồ học nổi tiếng thế giới.</span>
                </label>
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-emerald-50/50 rounded-2xl border border-slate-100 cursor-pointer transition-all">
                    <input type="radio" name="vn88-c4" value="C" class="w-5 h-5 text-emerald-600 focus:ring-emerald-500">
                    <span class="font-bold text-gray-700 text-lg md:text-3xl">Giúp Phi-lít có thể đi du lịch và sinh sống dễ dàng tại Nê-pan.</span>
                </label>
            </div>
            <div class="flex justify-end items-center gap-4"><button onclick="checkC4Vn88();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-c4-res" class="hidden p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner"></div>
        </div>

        <!-- Câu hỏi 5: Cảm thụ (AI Grader) -->
        <div class="space-y-4 border-t border-emerald-50 pt-6">
            <h4 class="text-xl font-black text-gray-800 flex items-start gap-2">
                <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-sm shrink-0 mt-0.5">5</span>
                Em muốn điều chỉnh những gì về cách học của mình sau khi đọc câu chuyện Tinh thần học tập của nhà Phi-lít?
            </h4>
            <div class="space-y-4 max-w-4xl mx-auto">
                <textarea id="vn88-essay-input" rows="4" placeholder="Nhập suy nghĩ của em (khoảng 3-5 câu)... Gợi ý: Em có muốn đặt mục tiêu tự học mỗi ngày một kiến thức mới không? Em sẽ làm cách nào để tích lũy kiến thức?..." class="w-full p-4 border-2 border-emerald-100 rounded-3xl outline-none focus:border-emerald-500 font-bold bg-emerald-50/10 text-lg md:text-xl shadow-inner"></textarea>
                
                <div class="flex justify-end items-center gap-4"><button onclick="resetVn88()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="checkWritingVn88();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="vn88-essay-fb" class="hidden p-5 rounded-3xl border-2 font-bold text-lg text-center shadow-lg transition-all"></div>
            </div>
        </div>
    </div>

    <!-- 📝 LUYỆN TẬP (Bổ sung phần đại từ và từ vựng) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-8">
        <h3 class="text-2xl md:text-5xl font-black text-emerald-800 border-b border-emerald-100 pb-4 flex items-center gap-3">
            <span class="text-xl md:text-3xl">🔍</span>
            Luyện tập sau bài đọc
        </h3>

        <!-- Bài tập 1: Đại từ xưng hô -->
        <div class="space-y-4">
            <h4 class="text-xl font-black text-gray-800 flex items-start gap-2">
                <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-sm shrink-0 mt-0.5">1</span>
                Tìm đại từ xưng hô trong đoạn sau và xác định chúng được dùng để chỉ ai:
            </h4>
            <div class="bg-emerald-50/70 p-6 rounded-2xl border-l-4 border-emerald-500 font-bold text-emerald-950 text-xl leading-relaxed italic text-center max-w-4xl mx-auto shadow-inner">
                "Phi-lít! – Cha nói. – Con mang bản đồ thế giới ra đây, chúng ta cùng xem vị trí địa lí của Nê-pan nhé!"
            </div>

            <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div class="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm flex flex-col justify-between space-y-3">
                    <span class="font-black text-lg text-emerald-800">Đại từ <span class="bg-emerald-100 px-2 py-1 rounded">"Cha"</span> chỉ:</span>
                    <select id="vn88-pronoun-cha" class="w-full p-3 border-2 border-emerald-100 rounded-xl outline-none focus:border-emerald-500 font-bold">
                        <option value="">-- Chọn đối tượng chỉ --</option>
                        <option value="father">Người bố của Phi-lít</option>
                        <option value="philit">Cậu bé Phi-lít</option>
                        <option value="nepan">Đất nước Nê-pan</option>
                    </select>
                </div>
                <div class="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm flex flex-col justify-between space-y-3">
                    <span class="font-black text-lg text-emerald-800">Đại từ <span class="bg-emerald-100 px-2 py-1 rounded">"Con"</span> chỉ:</span>
                    <select id="vn88-pronoun-con" class="w-full p-3 border-2 border-emerald-100 rounded-xl outline-none focus:border-emerald-500 font-bold">
                        <option value="">-- Chọn đối tượng chỉ --</option>
                        <option value="father">Người bố của Phi-lít</option>
                        <option value="philit">Cậu bé Phi-lít</option>
                        <option value="brother">Người anh trai của Phi-lít</option>
                    </select>
                </div>
                <div class="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm flex flex-col justify-between space-y-3">
                    <span class="font-black text-lg text-emerald-800">Đại từ <span class="bg-emerald-100 px-2 py-1 rounded">"Chúng ta"</span> chỉ:</span>
                    <select id="vn88-pronoun-ta" class="w-full p-3 border-2 border-emerald-100 rounded-xl outline-none focus:border-emerald-500 font-bold">
                        <option value="">-- Chọn đối tượng chỉ --</option>
                        <option value="people">Tất cả mọi người trong thị trấn</option>
                        <option value="family">Cả gia đình Phi-lít (bố, mẹ, Phi-lít)</option>
                        <option value="nepalese">Dân số nước Nê-pan</option>
                    </select>
                </div>
            </div>
            <div class="flex justify-end items-center gap-4"><button onclick="checkPronounsVn88();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-pronouns-88" class="hidden p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner"></div>
        </div>

        <!-- Bài tập 2: Chọn từ điền vào hoa -->
        <div class="space-y-4 border-t border-emerald-50 pt-6">
            <h4 class="text-xl font-black text-gray-800 flex items-start gap-2">
                <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-sm shrink-0 mt-0.5">2</span>
                Chọn từ thích hợp thay cho mỗi bông hoa 🌸:
            </h4>
            <div class="flex justify-center gap-3 flex-wrap">
                <span class="px-4 py-2 bg-emerald-50 text-emerald-800 border-2 border-emerald-200 rounded-xl font-black text-base">kiến thức</span>
                <span class="px-4 py-2 bg-emerald-50 text-emerald-800 border-2 border-emerald-200 rounded-xl font-black text-base">trí thức</span>
                <span class="px-4 py-2 bg-emerald-50 text-emerald-800 border-2 border-emerald-200 rounded-xl font-black text-base">trí nhớ</span>
            </div>

            <div class="max-w-4xl mx-auto space-y-4 pt-2">
                <div class="flex flex-col md:flex-row items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span class="font-black text-emerald-800 min-w-[30px] text-lg">a.</span>
                    <select id="vn88-vocab-a" class="p-2 border-2 border-emerald-100 rounded-xl outline-none focus:border-emerald-500 font-bold bg-white text-base shadow-sm">
                        <option value="">-- Chọn từ --</option>
                        <option value="kienthuc">kiến thức</option>
                        <option value="trithuc">trí thức</option>
                        <option value="trinho">trí nhớ</option>
                    </select>
                    <span class="font-bold text-gray-700 text-left w-full text-lg md:text-3xl">là người chuyên làm việc trí óc và có tri thức chuyên môn.</span>
                </div>

                <div class="flex flex-col md:flex-row items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span class="font-black text-emerald-800 min-w-[30px] text-lg">b.</span>
                    <select id="vn88-vocab-b" class="p-2 border-2 border-emerald-100 rounded-xl outline-none focus:border-emerald-500 font-bold bg-white text-base shadow-sm">
                        <option value="">-- Chọn từ --</option>
                        <option value="kienthuc">kiến thức</option>
                        <option value="trithuc">trí thức</option>
                        <option value="trinho">trí nhớ</option>
                    </select>
                    <span class="font-bold text-gray-700 text-left w-full text-lg md:text-3xl">là những hiểu biết do tìm hiểu, học tập mà có được.</span>
                </div>

                <div class="flex flex-col md:flex-row items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span class="font-black text-emerald-800 min-w-[30px] text-lg">c.</span>
                    <select id="vn88-vocab-c" class="p-2 border-2 border-emerald-100 rounded-xl outline-none focus:border-emerald-500 font-bold bg-white text-base shadow-sm">
                        <option value="">-- Chọn từ --</option>
                        <option value="kienthuc">kiến thức</option>
                        <option value="trithuc">trí thức</option>
                        <option value="trinho">trí nhớ</option>
                    </select>
                    <span class="font-bold text-gray-700 text-left w-full text-lg md:text-3xl">là khả năng giữ lại và tái hiện ra trong trí óc những điều đã biết, đã trải qua.</span>
                </div>
            </div>
            <div class="flex justify-end items-center gap-4"><button onclick="checkVocabVn88();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vocab-88" class="hidden p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner"></div>
        </div>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Câu chuyện 'Tinh thần học tập của nhà Phi-lít' ca ngợi điều gì?",
            "options": [
                "Phương pháp tự học sáng tạo và bền bỉ suốt cuộc đời",
                "Cách vẽ bản đồ địa lý thế giới",
                "Việc đi du lịch khám phá đất nước Nê-pan",
                "Khả năng thi đỗ các trường đại học lớn"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Gia đình Phi-lít có bao nhiêu thành viên được nhắc tới trong bài?",
            "options": [
                "3 thành viên (bố, mẹ, Phi-lít)",
                "4 thành viên (bố, mẹ, anh trai, Phi-lít)",
                "5 thành viên (ông bà, bố mẹ, Phi-lít)",
                "2 thành viên (bố và Phi-lít)"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Phi-lít được nhận xét là người như thế nào từ thời ấu thơ?",
            "options": [
                "Lười biếng và không thích đọc sách",
                "Rất ham học hỏi, hăng say nghiên ngẫm mọi cuốn sách, tờ báo mình có",
                "Chỉ quan tâm đến việc vui chơi ngoài đồi núi",
                "Thường xuyên không nghe lời chỉ bảo của cha mẹ"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Theo cha Phi-lít, điều gì đáng buồn nhất trong một ngày?",
            "options": [
                "Là cả ngày không học thêm được thứ gì mới",
                "Là cả ngày không có thời gian nghỉ ngơi",
                "Là bữa ăn tối của gia đình diễn ra muộn",
                "Là bị mất tấm bản đồ thế giới"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Để phát huy tinh thần học tập, cha Phi-lít đã yêu cầu cả nhà làm gì mỗi ngày?",
            "options": [
                "Mỗi người phải mua một quyển sách mới",
                "Mỗi người phải học được kiến thức mới rồi trao đổi với nhau sau bữa tối",
                "Cả nhà cùng nhau đọc sách suốt cả ngày",
                "Mỗi tối phải chép phạt các bài học địa lý"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Trong bài đọc, kiến thức mới mà Phi-lít đã chia sẻ với bố vào bữa tối hôm đó là gì?",
            "options": [
                "Dân số của nước Nê-pan",
                "Vị trí của thị trấn nơi cậu sinh sống",
                "Số lượng các chương sách cậu đã đọc",
                "Kinh nghiệm làm việc của giáo sư đại học"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi mẹ Phi-lít không biết Nê-pan ở đâu, người cha đã yêu cầu làm gì?",
            "options": [
                "Yêu cầu cả nhà đi ngủ sớm",
                "Yêu cầu Phi-lít mang bản đồ thế giới ra để cả nhà cùng xem vị trí địa lý của Nê-pan",
                "Trực tiếp vẽ sơ đồ địa lý lên bảng",
                "Phạt Phi-lít phải tự mình học bài một mình"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Phi-lít nhận thấy lợi ích phương pháp học tập của cha từ lúc nào?",
            "options": [
                "Ngay từ lúc thời thơ ấu",
                "Khi đã thi đỗ đại học và theo học các vị giáo sư nổi tiếng",
                "Khi đi du lịch sang Nê-pan cùng gia đình",
                "Khi đã trở thành người lớn tuổi nghỉ hưu"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Phi-lít cảm thấy thú vị vì điều gì ở trường đại học?",
            "options": [
                "Học đại học không cần làm bài tập về nhà",
                "Có những kiến thức giáo sư dạy khá giống với thứ cha từng yêu cầu cậu học, chỉ phát triển hơn lên",
                "Ở trường đại học có rất nhiều sách hay hơn ở nhà",
                "Các giáo sư đều khen ngợi tinh thần tự học của cậu trước lớp"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Trong câu: 'Phi-lít! Con mang bản đồ thế giới ra đây', từ 'Con' đóng vai trò là loại từ gì?",
            "options": [
                "Đại từ xưng hô",
                "Danh từ chung chỉ con vật",
                "Động từ hành động",
                "Quan hệ từ nối câu"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Đại từ xưng hô 'chúng ta' trong cuộc hội thoại chỉ những ai?",
            "options": [
                "Chỉ riêng người bố và Phi-lít",
                "Chỉ cả gia đình Phi-lít (bố, mẹ, Phi-lít)",
                "Chỉ người bố và người mẹ",
                "Chỉ Phi-lít và người anh trai"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ nào dùng để chỉ 'người chuyên làm việc trí óc và có tri thức chuyên môn'?",
            "options": [
                "Kiến thức",
                "Trí thức",
                "Trí nhớ",
                "Nhà văn"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ nào dùng để chỉ 'những hiểu biết do tìm hiểu, học tập mà có được'?",
            "options": [
                "Trí nhớ",
                "Kiến thức",
                "Trí thức",
                "Kinh nghiệm"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ nào dùng để chỉ 'khả năng giữ lại và tái hiện ra trong trí óc những điều đã biết, đã trải qua'?",
            "options": [
                "Trí nhớ",
                "Trí thức",
                "Kiến thức",
                "Nhận thức"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Cách giáo dục của cha Phi-lít dạy cho chúng ta bài học sâu sắc nào?",
            "options": [
                "Học tập là công việc của trẻ con, người lớn không cần học nữa",
                "Phải học hỏi kiến thức mới mỗi ngày, tích lũy dần dần để phát triển bản thân",
                "Chỉ nên học địa lý và xem bản đồ thế giới",
                "Chỉ đọc sách khi được bố mẹ yêu cầu bắt buộc"
            ],
            "answer": 1,
            "level": 0
        }
    ]
};

// ====== INTERACTIVE SCRIPT ======
window.startWarmupVn88 = function() {
    const text = document.getElementById('warmup-inspire-input').value.trim();
    const fb = document.getElementById('warmup-feedback-88');
    if (!text) {
        alert('Em hãy nhập tên người truyền cảm hứng học tập cho em nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-emerald-50', 'border-emerald-300', 'text-emerald-800');
    
    fb.innerHTML = `🌟 **Thầy E nhận xét:** Cảm ơn chia sẻ của em! Người truyền cảm hứng học tập '${text}' chắc chắn sẽ là động lực to lớn giúp em luôn ham học hỏi, khám phá thế giới xung quanh như bạn Phi-lít đấy!`;
    fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg mt-2 shadow-lg bg-emerald-50 border-emerald-300 text-emerald-800 animate-fade-in';
};

window.checkC1Vn88 = function() {
    const loc = document.getElementById('vn88-c1-loc').value;
    const hobby = document.getElementById('vn88-c1-hobby').value;
    const fb = document.getElementById('fb-c1');
    
    if (!loc || !hobby) {
        alert('Em hãy điền đầy đủ cả 2 thông tin về nơi sinh sống và sở thích của Phi-lít nhé!');
        return;
    }
    
    fb.classList.remove('hidden', 'bg-red-100', 'text-red-800', 'bg-green-100', 'text-green-800');
    
    if (loc === 'town' && hobby === 'learn') {
        fb.innerHTML = '🎉 Chính xác! Phi-lít sinh sống tại một thị trấn nhỏ và có sở thích ham học hỏi, nghiên ngẫm sách báo và lắng nghe thế giới.';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-green-100 text-green-800 border-2 border-green-300';
    } else {
        fb.innerHTML = '⚠️ Đáp án chưa chính xác, em hãy đọc kỹ đoạn văn đầu tiên của câu chuyện và chọn lại nhé!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-red-100 text-red-800 border-2 border-red-300';
    }
};

window.checkC2Vn88 = function() {
    const checked = document.querySelector('input[name="vn88-c2"]:checked');
    const fb = document.getElementById('fb-c2');
    
    if (!checked) {
        alert('Em hãy chọn một đáp án nhé!');
        return;
    }
    
    fb.classList.remove('hidden', 'bg-red-100', 'text-red-800', 'bg-green-100', 'text-green-800');
    
    if (checked.value === 'A') {
        fb.innerHTML = '🎉 Hoàn toàn chính xác! Cha Phi-lít yêu cầu cả nhà phải học kiến thức mới mỗi ngày và chia sẻ sau bữa tối để duy trì ngọn lửa hiếu học.';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-green-100 text-green-800 border-2 border-green-300';
    } else {
        fb.innerHTML = '⚠️ Chưa đúng rồi, em hãy chú ý vào thói quen trò chuyện sau bữa tối của gia đình Phi-lít để chọn lại nhé!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-red-100 text-red-800 border-2 border-red-300';
    }
};

window.checkC3Vn88 = function() {
    const checked = document.querySelector('input[name="vn88-c3"]:checked');
    const fb = document.getElementById('fb-c3');
    
    if (!checked) {
        alert('Em hãy chọn một đáp án nhé!');
        return;
    }
    
    fb.classList.remove('hidden', 'bg-red-100', 'text-red-800', 'bg-green-100', 'text-green-800');
    
    if (checked.value === 'B') {
        fb.innerHTML = '🎉 Đúng rồi! Việc xúm lại xem bản đồ thể hiện tình cảm đầm ấm, sự chung tay đồng lòng và niềm hứng thú học hỏi chung của cả gia đình.';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-green-100 text-green-800 border-2 border-green-300';
    } else {
        fb.innerHTML = '⚠️ Chưa chính xác, hành động xúm lại tìm Nê-pan mang không khí rất vui tươi và tích cực, em hãy thử chọn lại nhé!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-red-100 text-red-800 border-2 border-red-300';
    }
};

window.checkC4Vn88 = function() {
    const checked = document.querySelector('input[name="vn88-c4"]:checked');
    const fb = document.getElementById('fb-c4-res');
    
    if (!checked) {
        alert('Em hãy chọn một đáp án nhé!');
        return;
    }
    
    fb.classList.remove('hidden', 'bg-red-100', 'text-red-800', 'bg-green-100', 'text-green-800');
    
    if (checked.value === 'A') {
        fb.innerHTML = '🎉 Rất xuất sắc! Việc tích lũy mỗi ngày đã chuẩn bị cho Phi-lít một lượng tri thức khổng lồ và phương pháp tự học tuyệt vời khi bước chân vào giảng đường đại học.';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-green-100 text-green-800 border-2 border-green-300';
    } else {
        fb.innerHTML = '⚠️ Sai rồi, phương pháp này giúp ích cho việc học đại học của Phi-lít, em hãy đọc kỹ đoạn cuối bài đọc để chọn lại nhé!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-red-100 text-red-800 border-2 border-red-300';
    }
};

window.checkWritingVn88 = function() {
    const text = document.getElementById('vn88-essay-input').value.trim();
    const fb = document.getElementById('vn88-essay-fb');
    
    if (!text) {
        alert('Em hãy viết câu trả lời trước khi nộp bài cho Thầy E chấm nhé!');
        return;
    }
    
    fb.classList.remove('hidden', 'bg-amber-50', 'text-amber-800', 'border-amber-200', 'bg-emerald-50', 'text-emerald-800', 'border-emerald-200');
    
    const sentenceCount = text.split(/[.!?]+/).filter(s => s.trim().length > 5).length;
    const keywords = ["tự học", "mỗi ngày", "kiến thức", "điều chỉnh", "học tập", "tích lũy", "đọc sách", "phi-lít"];
    const matchedKeywords = keywords.filter(kw => text.toLowerCase().includes(kw));
    
    let score = 50;
    let comment = "";
    
    if (sentenceCount >= 3) {
        score += 20;
    } else {
        comment += "Bài viết hơi ngắn, em nên viết chi tiết thêm một chút (từ 3 câu trở lên). ";
    }
    
    if (matchedKeywords.length >= 2) {
        score += 30;
    } else {
        score += matchedKeywords.length * 10;
        comment += "Em nên nhắc đến tinh thần tự học, hoặc cách điều chỉnh của bản thân cụ thể hơn. ";
    }
    
    score = Math.min(score, 100);
    
    if (score >= 80) {
        fb.innerHTML = `🌟 **Điểm đạt được: ${score}/100**<br><br>
        **Lời nhận xét từ Thầy E:** Kế hoạch học tập của em thật sự rất tuyệt vời và thực tế! Việc đặt mục tiêu tích lũy mỗi ngày một điều mới sẽ giúp trí tuệ của em lớn mạnh không ngừng. ${comment} Chúc em học tập thật tốt!`;
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg mt-2 shadow-lg bg-emerald-50 border-emerald-300 text-emerald-800 animate-fade-in';
    } else {
        fb.innerHTML = `⚠️ **Điểm đạt được: ${score}/100**<br><br>
        **Lời nhận xét từ Thầy E:** Ý tưởng của em rất tốt nhưng cần viết đầy đủ và rõ ý hơn nhé. ${comment} Hãy cố gắng lên và bấm Chấm điểm lại nha!`;
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg mt-2 shadow-lg bg-amber-50 border-amber-300 text-amber-800 animate-fade-in';
    }
};

window.checkPronounsVn88 = function() {
    const cha = document.getElementById('vn88-pronoun-cha').value;
    const con = document.getElementById('vn88-pronoun-con').value;
    const ta = document.getElementById('vn88-pronoun-ta').value;
    const fb = document.getElementById('fb-pronouns-88');
    
    if (!cha || !con || !ta) {
        alert('Em hãy xác định đầy đủ đối tượng của cả 3 đại từ nhé!');
        return;
    }
    
    fb.classList.remove('hidden', 'bg-red-100', 'text-red-800', 'bg-green-100', 'text-green-800');
    
    if (cha === 'father' && con === 'philit' && ta === 'family') {
        fb.innerHTML = '🎉 Hoàn toàn chính xác! Đại từ "Cha" chỉ người bố, "Con" chỉ Phi-lít, và "Chúng ta" chỉ cả gia đình Phi-lít cùng xem bản đồ.';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-green-100 text-green-800 border-2 border-green-300';
    } else {
        fb.innerHTML = '⚠️ Đáp án chưa đúng rồi, em hãy chú ý người nói là "Cha" đang đối thoại trực tiếp với "Phi-lít" để chọn lại nhé!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-red-100 text-red-800 border-2 border-red-300';
    }
};

window.checkVocabVn88 = function() {
    const a = document.getElementById('vn88-vocab-a').value;
    const b = document.getElementById('vn88-vocab-b').value;
    const c = document.getElementById('vn88-vocab-c').value;
    const fb = document.getElementById('fb-vocab-88');
    
    if (!a || !b || !c) {
        alert('Em hãy điền đầy đủ cả 3 bông hoa nhé!');
        return;
    }
    
    fb.classList.remove('hidden', 'bg-red-100', 'text-red-800', 'bg-green-100', 'text-green-800');
    
    if (a === 'trithuc' && b === 'kienthuc' && c === 'trinho') {
        fb.innerHTML = '🎉 Xuất sắc! Em đã phân biệt rất đúng các khái niệm: a) Trí thức (chỉ con người); b) Kiến thức (hiểu biết học tập được); c) Trí nhớ (khả năng lưu giữ của trí óc).';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-green-100 text-green-800 border-2 border-green-300';
    } else {
        fb.innerHTML = '⚠️ Có từ bị đặt sai vị trí rồi, em hãy đọc kỹ định nghĩa và chọn lại nhé!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-red-100 text-red-800 border-2 border-red-300';
    }
};

window.resetVn88 = function() {
    document.getElementById('vn88-essay-input').value = "";
    document.getElementById('vn88-essay-fb').classList.add('hidden');
    
    document.getElementById('vn88-c1-loc').value = "";
    document.getElementById('vn88-c1-hobby').value = "";
    document.getElementById('fb-c1').classList.add('hidden');
    
    const r2 = document.getElementsByName('vn88-c2');
    r2.forEach(r => r.checked = false);
    document.getElementById('fb-c2').classList.add('hidden');
    
    const r3 = document.getElementsByName('vn88-c3');
    r3.forEach(r => r.checked = false);
    document.getElementById('fb-c3').classList.add('hidden');
    
    const r4 = document.getElementsByName('vn88-c4');
    r4.forEach(r => r.checked = false);
    document.getElementById('fb-c4-res').classList.add('hidden');
    
    document.getElementById('vn88-pronoun-cha').value = "";
    document.getElementById('vn88-pronoun-con').value = "";
    document.getElementById('vn88-pronoun-ta').value = "";
    document.getElementById('fb-pronouns-88').classList.add('hidden');
    
    document.getElementById('vn88-vocab-a').value = "";
    document.getElementById('vn88-vocab-b').value = "";
    document.getElementById('vn88-vocab-c').value = "";
    document.getElementById('fb-vocab-88').classList.add('hidden');
    
    alert('Đã đặt lại toàn bộ câu hỏi để em làm lại!');
};
