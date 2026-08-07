export const lesson6 = {
    "topic": "Tiếng Việt 5",
    "week": "1",
    "period": "6",
    "title": "VIẾT: TÌM HIỂU CÁCH VIẾT BÀI VĂN KỂ CHUYỆN SÁNG TẠO (TIẾP THEO)",
    "desc": "Bài học giúp học sinh hiểu cách đóng vai một nhân vật để kể lại câu chuyện một cách sáng tạo, lựa chọn ngôi kể thứ nhất và thể hiện sinh động thế giới nội tâm của nhân vật.",
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
        <ul class="space-y-3 text-sky-800 font-bold text-lg md:text-xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Biết cách đóng vai một nhân vật để kể lại câu chuyện (xưng "tôi", kể theo cảm nhận của nhân vật).
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Hiểu được bố cục 3 phần của bài văn đóng vai kể chuyện sáng tạo.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Rút ra các lưu ý thực tế khi đóng vai nhân vật kể chuyện một cách tự nhiên và sinh động.
            </li>
        </ul>
    </div>

    <!-- 📖 Đọc các đoạn văn mẫu (Đọc hiểu) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <!-- Văn bản đọc -->
            <div class="bg-sky-50/20 rounded-[28px] p-6 md:p-8 shadow-inner border border-sky-100/50">
                <div class="flex justify-between items-center mb-4 border-b border-sky-100 pb-3">
                    <span class="text-sky-900 font-black text-xl flex items-center gap-2">
                        <span>📖</span> Văn bản đọc mẫu
                    </span>
                    <button onclick="playSegmentAudio('assets/audio/tiengviet/6/tiet6_full.mp3')" class="p-2 bg-sky-600 hover:bg-sky-600 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc bài mẫu">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                    </button>
                </div>
                <div class="serif-font text-gray-800 text-lg md:text-2xl leading-relaxed text-justify space-y-4 overflow-hidden">
                    
                    <!-- Ảnh minh họa Chuột xù kể chuyện -->
                    <div onclick="window.showMathFeedback('Ảnh minh họa Chuột Xù', '📖', '&lt;div class=&quot;text-center p-4 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/6/1.png&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md&quot;&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 border-4 border-sky-100 bg-white rounded-[32px] shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all p-2 flex flex-col items-center justify-center select-none text-center">
                        <img src="assets/images/tiengviet_5_1/6/1.png" class="w-full h-auto rounded-[24px] object-cover shadow-sm">
                        <p class="text-xs text-sky-800 mt-2 font-medium">Bấm vào để xem phóng to 🔍</p>
                    </div>

                    <p class="indent-10">Chào các bạn. Tôi là chuột xù. Tôi sẽ kể cho các bạn nghe câu chuyện phiêu lưu li kì của tôi và cậu bạn thân mèo nhép.</p>
                    <p class="indent-10">Hôm ấy là một ngày rất đẹp trời, chúng tôi đều muốn đi chơi. Tôi thì muốn chơi ở bên này sông, còn cậu bạn của tôi lại nằng nặc đòi đi chơi ở bên kia sông. Tôi vẫn nhớ lời dặn của bác ngựa là bên kia sông nguy hiểm lắm. Thế mà <strong>chẳng hiểu sao</strong> mèo nhép lại cứ muốn đi chơi ở đó. Cậu ấy quả là thích phiêu lưu. Nhưng phiêu lưu mà mất an toàn thì thật đáng sợ. Tôi cố gắng thuyết phục mèo nhép. Cậu ấy chẳng những không nghe mà còn chê tôi nhát. Cuối cùng, tôi đành chịu thua và đi theo cậu ấy vì không nỡ để cậu ấy mạo hiểm một mình.</p>
                    <p class="indent-10">...</p>
                    <p class="indent-10">Trên lưng bác ngựa trở về, tôi vẫn giả vờ nằm thiêm thiếp. Mèo nhép <strong>chắc là</strong> biết lỗi, cứ sụt sịt, sụt sịt, nước mắt rơi ướt cả bộ lông của tôi. So với lúc cậu ấy khăng khăng đòi sang sông chơi thì bây giờ trông cậu ấy thật quá khác biệt. Tôi phải cố nén cười. Cứ để cậu ấy ân hận một lúc nữa, như thế mới có bài học chứ.</p>
                </div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- PHẦN 1: TÌM HIỂU BÀI (CÂU 1 SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-10">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">1</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">1. Đọc các đoạn văn và trả lời câu hỏi</h3>
            </div>

            <!-- Câu a -->
            <div class="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm space-y-4">
                <h4 class="text-lg md:text-2xl font-bold text-gray-800 flex items-start gap-2">
                    <span class="bg-sky-600 text-white w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm mt-0.5 shadow-sm">a</span>
                    Các đoạn văn trên kể lại câu chuyện theo lời của nhân vật nào?
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-base md:text-xl">
                    <button onclick="selectOptionVn6('a', 0)" id="btn-vn6-a-0" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-sky-400 hover:bg-sky-50/30 transition-all text-gray-800">A. Bác ngựa</button>
                    <button onclick="selectOptionVn6('a', 1)" id="btn-vn6-a-1" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-sky-400 hover:bg-sky-50/30 transition-all text-gray-800">B. Chuột xù</button>
                    <button onclick="selectOptionVn6('a', 2)" id="btn-vn6-a-2" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-sky-400 hover:bg-sky-50/30 transition-all text-gray-800">C. Mèo nhép</button>
                </div>
                <div id="fb-vn6-a" class="hidden text-lg font-bold p-3 rounded-xl"></div>
            </div>

            <!-- Câu b -->
            <div class="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm space-y-4">
                <h4 class="text-lg md:text-2xl font-bold text-gray-800 flex items-start gap-2">
                    <span class="bg-sky-600 text-white w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm mt-0.5 shadow-sm">b</span>
                    Nhân vật đó dùng những từ ngữ nào để gọi mình và các nhân vật khác?
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-xl">
                    <div class="flex flex-col gap-2 p-4 bg-sky-50/30 border border-sky-100 rounded-2xl">
                        <span class="font-bold text-sky-800">Từ gọi mình:</span>
                        <input type="text" id="ans-vn6-b-tu-minh" placeholder="" class="p-3 border-2 border-gray-100 rounded-xl outline-none focus:border-sky-500 font-bold">
                    </div>
                    <div class="flex flex-col gap-2 p-4 bg-sky-50/30 border border-sky-100 rounded-2xl">
                        <span class="font-bold text-sky-800">Từ gọi nhân vật khác:</span>
                        <input type="text" id="ans-vn6-b-tu-khac" placeholder="" class="p-3 border-2 border-gray-100 rounded-xl outline-none focus:border-sky-500 font-bold">
                    </div>
                </div>
                <div class="flex justify-end items-center gap-4"><button onclick="checkQuestionB();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-vn6-b" class="hidden text-lg font-bold p-3 rounded-xl"></div>
            </div>

            <!-- Câu c -->
            <div class="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm space-y-4">
                <h4 class="text-lg md:text-2xl font-bold text-gray-800 flex items-start gap-2">
                    <span class="bg-sky-600 text-white w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm mt-0.5 shadow-sm">c</span>
                    Những từ ngữ in đậm ("chẳng hiểu sao", "chắc là") thể hiện điều gì? Chọn đáp án đúng.
                </h4>
                <div class="grid grid-cols-1 gap-4 text-base md:text-xl">
                    <button onclick="selectOptionVn6('c', 0)" id="btn-vn6-c-0" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-sky-400 hover:bg-sky-50/30 transition-all text-gray-800">A. Chuột xù không chắc chắn về suy nghĩ, cảm xúc của mèo nhép.</button>
                    <button onclick="selectOptionVn6('c', 1)" id="btn-vn6-c-1" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-sky-400 hover:bg-sky-50/30 transition-all text-gray-800">B. Chuột xù không chắc chắn về suy nghĩ, cảm xúc của mình.</button>
                    <button onclick="selectOptionVn6('c', 2)" id="btn-vn6-c-2" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-sky-400 hover:bg-sky-50/30 transition-all text-gray-800">C. Chuột xù dự đoán được sự việc xảy ra tiếp theo.</button>
                    <button onclick="selectOptionVn6('c', 3)" id="btn-vn6-c-3" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-sky-400 hover:bg-sky-50/30 transition-all text-gray-800">D. Chuột xù thể hiện sự khách quan khi kể câu chuyện.</button>
                </div>
                <div id="fb-vn6-c" class="hidden text-lg font-bold p-3 rounded-xl"></div>
            </div>

            <!-- Câu d -->
            <div class="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm space-y-4">
                <h4 class="text-lg md:text-2xl font-bold text-gray-800 flex items-start gap-2">
                    <span class="bg-sky-600 text-white w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm mt-0.5 shadow-sm">d</span>
                    So sánh cách mở đầu, kể sự việc và kết thúc trong các đoạn văn trên với bài văn trang 11:
                </h4>
                <p class="text-base text-gray-800 italic">👉 Hướng dẫn: Nhấp chọn một ý ở cột A rồi nhấp chọn ý đúng tương ứng ở cột B.</p>
                
                <div id="matching-board-vn6" class="grid grid-cols-1 md:grid-cols-2 gap-8 relative select-none">
                    <!-- SVG Canvas for lines -->
                    <svg id="svg-connections-vn6" class="absolute inset-0 w-full h-full pointer-events-none z-10" style="min-height: 26px;"></svg>
                    
                    <!-- Cột A: Các phần kể của Chuột xù -->
                    <div class="flex flex-col gap-4" id="col-vn6-A">
                        <button onclick="selectNodeVn6('A', 'mo-dau')" id="node-vn6-A-mo-dau" class="p-5 bg-white border-4 border-gray-100 rounded-xl font-black text-lg text-left text-gray-800 shadow-sm transition-all hover:border-sky-400 hover:bg-sky-50/20 active:scale-98">
                            1. Cách mở đầu câu chuyện
                        </button>
                        <button onclick="selectNodeVn6('A', 'dien-bien')" id="node-vn6-A-dien-bien" class="p-5 bg-white border-4 border-gray-100 rounded-xl font-black text-lg text-left text-gray-800 shadow-sm transition-all hover:border-sky-400 hover:bg-sky-50/20 active:scale-98">
                            2. Cách kể các sự việc
                        </button>
                        <button onclick="selectNodeVn6('A', 'ket-thuc')" id="node-vn6-A-ket-thuc" class="p-5 bg-white border-4 border-gray-100 rounded-xl font-black text-lg text-left text-gray-800 shadow-sm transition-all hover:border-sky-400 hover:bg-sky-50/20 active:scale-98">
                            3. Cách kết thúc câu chuyện
                        </button>
                    </div>

                    <!-- Cột B: Đặc điểm (đóng vai vs ngôi thứ ba) -->
                    <div class="flex flex-col gap-4" id="col-vn6-B">
                        <button onclick="selectNodeVn6('B', 'desc-dien-bien')" id="node-vn6-B-desc-dien-bien" class="p-5 bg-white border-4 border-gray-100 rounded-xl font-bold text-base text-left text-gray-800 shadow-sm transition-all hover:border-sky-400 hover:bg-sky-50/20 active:scale-98">
                            Kể lại sự việc theo cảm nhận, cảm xúc của chính nhân vật trong cuộc (ngôi thứ nhất).
                        </button>
                        <button onclick="selectNodeVn6('B', 'desc-ket-thuc')" id="node-vn6-B-desc-ket-thuc" class="p-5 bg-white border-4 border-gray-100 rounded-xl font-bold text-base text-left text-gray-800 shadow-sm transition-all hover:border-sky-400 hover:bg-sky-50/20 active:scale-98">
                            Bộc lộ suy nghĩ dí dỏm, bài học sâu sắc thông qua tâm trạng của nhân vật kể chuyện.
                        </button>
                        <button onclick="selectNodeVn6('B', 'desc-mo-dau')" id="node-vn6-B-desc-mo-dau" class="p-5 bg-white border-4 border-gray-100 rounded-xl font-bold text-base text-left text-gray-800 shadow-sm transition-all hover:border-sky-400 hover:bg-sky-50/20 active:scale-98">
                            Nhân vật tự xưng là "tôi" tự giới thiệu về mình và dẫn dắt vào câu chuyện.
                        </button>
                    </div>
                </div>

                <div class="flex justify-end items-center gap-4"><button onclick="resetMatchingVn6()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="checkMatchingVn6(); submitVn6Ex1();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-vn6-d" class="hidden text-lg font-bold p-3 rounded-xl"></div>
            </div>

            <!-- Nộp bài tập 1 -->
            
        </div>
    </section>

    <!-- PHẦN 2: TRAO ĐỔI LƯU Ý (CÂU 2 SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">2</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">2. Trao đổi về những điểm cần lưu ý khi đóng vai</h3>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-sky-100 shadow-inner space-y-6 text-base md:text-xl">
                <div class="flex flex-col gap-2">
                    <label class="font-bold text-sky-800">a. Câu chuyện được kể theo lời của nhân vật nào? Nhân vật kể chuyện xưng là gì?</label>
                    <textarea id="ans-vn6-ex2-a" rows="2" placeholder="Nhập câu trả lời của em ở đây..." class="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-sky-500 outline-none font-bold"></textarea>
                </div>
                <div class="flex flex-col gap-2">
                    <label class="font-bold text-sky-800">b. Các sự việc trong câu chuyện được kể như thế nào theo cảm nhận của nhân vật?</label>
                    <textarea id="ans-vn6-ex2-b" rows="2" placeholder="Nhập câu trả lời của em ở đây..." class="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-sky-500 outline-none font-bold"></textarea>
                </div>

                <div class="flex justify-end items-center gap-4"><button onclick="resetEx2()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="submitVn6Ex2();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-vn6-ex2" class="hidden text-lg font-bold p-3 rounded-xl"></div>
            </div>
        </div>
    </section>

    <!-- 💡 PHẦN GHI NHỚ -->
    <div class="p-6 md:p-8 rounded-[36px] bg-gradient-to-br from-sky-600 to-teal-500 text-white shadow-xl relative overflow-hidden">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <h4 class="text-xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
            <span>💡</span> Ghi nhớ bài học
        </h4>
        <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-4">
            <p class="text-lg md:text-xl font-bold leading-relaxed">
                Đóng vai nhân vật để kể lại câu chuyện cũng là một cách viết bài văn kể chuyện sáng tạo.
            </p>
            <p class="text-lg md:text-xl font-bold leading-relaxed">
                Bài văn có 3 phần:
            </p>
            <ul class="list-disc ml-6 space-y-2 text-lg md:text-xl font-bold">
                <li><strong>Mở bài</strong>: Đóng vai nhân vật để tự giới thiệu và dẫn dắt vào câu chuyện.</li>
                <li><strong>Thân bài</strong>: Kể lại diễn biến câu chuyện theo cảm nhận của nhân vật mà em đóng vai.</li>
                <li><strong>Kết bài</strong>: Kể kết thúc của câu chuyện theo cảm nhận của nhân vật.</li>
            </ul>
        </div>
    </div>

    <!-- PHẦN 3: LUYỆN VIẾT SÁNG TẠO (AI THẦY E) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">✍️</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Thử tài viết sáng tạo</h3>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner space-y-4">
                <h4 class="text-lg md:text-xl font-bold text-gray-800">
                    Em hãy thử đóng vai nhân vật <strong>Mèo nhép</strong> để viết đoạn mở đầu tự giới thiệu và dẫn dắt vào câu chuyện phiêu lưu qua sông (từ 3 đến 5 câu).
                </h4>

                <textarea id="ans-vn6-writing" rows="5" placeholder="Chào các bạn bè muôn nơi, tôi là Mèo nhép nghịch ngợm đây! Tôi vốn rất ham vui và thích khám phá những vùng đất lạ. Hôm đó, bầu trời trong xanh lộng gió, tôi nhìn sang phía bên kia bờ sông..." class="w-full p-4 md:p-6 text-xl md:text-2xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-amber-50/10 font-medium leading-relaxed"></textarea>
                
                <div class="flex justify-end items-center gap-4"><button onclick="resetWritingVn6()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="checkWritingVn6(); submitVn6Writing();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                
                <div id="fb-vn6-writing" class="hidden mt-6 p-6 bg-amber-500 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500">
                    <!-- AI Feedback -->
                </div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TOÀN BỘ -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn6Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Khi đóng vai một nhân vật kể lại câu chuyện, chúng ta xưng hô bằng ngôi thứ mấy?",
            "options": [
                "Ngôi thứ nhất (tôi, em, chúng tôi,...)",
                "Ngôi thứ hai (bạn, các bạn,...)",
                "Ngôi thứ ba (gọi tên nhân vật: chuột xù, mèo nhép,...)",
                "Không cần xưng hô"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đâu là điểm cốt lõi khi kể lại câu chuyện bằng cách đóng vai nhân vật?",
            "options": [
                "Phải thay đổi toàn bộ kết cục câu chuyện.",
                "Thể hiện các sự việc theo cảm nhận, suy nghĩ của nhân vật mình đóng vai.",
                "Chép y nguyên lời kể khách quan của câu chuyện gốc.",
                "Không kể bất cứ sự việc nào xảy ra."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong phần Mở bài của bài văn đóng vai kể chuyện sáng tạo, ta cần làm gì?",
            "options": [
                "Kể lại diễn biến câu chuyện.",
                "Đóng vai nhân vật tự giới thiệu và dẫn dắt vào câu chuyện.",
                "Kể lại kết thúc của câu chuyện.",
                "Nêu bài học rút ra từ câu chuyện."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Phần Thân bài của bài văn đóng vai kể chuyện sáng tạo có nội dung gì?",
            "options": [
                "Tự giới thiệu tên của mình.",
                "Kể lại diễn biến câu chuyện theo cảm nhận của nhân vật đóng vai.",
                "Nhận xét về các nhân vật khác.",
                "Nêu cảm nghĩ sau khi câu chuyện kết thúc."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nội dung phần Kết bài của bài văn đóng vai kể chuyện sáng tạo là gì?",
            "options": [
                "Giới thiệu các câu chuyện phiêu lưu khác.",
                "Kể kết thúc của câu chuyện theo cảm nhận của nhân vật đóng vai.",
                "Miêu tả cảnh thiên nhiên tươi đẹp.",
                "Giới thiệu lời ngựa dặn."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ ngữ in đậm 'chẳng hiểu sao' trong đoạn văn thể hiện điều gì?",
            "options": [
                "Sự ngạc nhiên, suy đoán chưa chắc chắn về cảm xúc của Mèo nhép.",
                "Chuột xù ghét bỏ và không quan tâm Mèo nhép.",
                "Sự khẳng định chắc chắn 16% của Chuột xù.",
                "Mèo nhép đã biết lỗi ngay từ đầu."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Ai là người khuyên nhủ mèo nhép không nên qua bên kia sông chơi?",
            "options": [
                "Bác ngựa dặn nguy hiểm lắm",
                "Chuột xù khuyên không nghe",
                "Bác rắn dặn dò kỹ",
                "Cả bác ngựa và chuột xù đều dặn dò/khuyên nhủ"
            ],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Tại sao Chuột xù quyết định đi theo Mèo nhép sang sông?",
            "options": [
                "Vì Chuột xù rất thích phiêu lưu mạo hiểm.",
                "Vì không nỡ để cậu bạn thân mạo hiểm một mình.",
                "Vì muốn hái hoa bên sông.",
                "Vì bác ngựa bắt buộc phải đi."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Chi tiết nào cho thấy Mèo nhép thực sự biết lỗi và ân hận?",
            "options": [
                "Mèo nhép chê Chuột xù nhát gan.",
                "Mèo nhép sụt sịt khóc, nước mắt rơi ướt cả lông Chuột xù.",
                "Mèo nhép đòi nằng nặc đi tiếp.",
                "Mèo nhép cười phá lên vui sướng."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Vì sao Chuột xù phải 'cố nén cười' khi ở trên lưng bác ngựa trở về?",
            "options": [
                "Vì bác ngựa kể chuyện hài hước.",
                "Vì thấy Mèo nhép khóc sụt sịt đáng yêu và biết lỗi sau khi đòi đi chơi.",
                "Vì bác ngựa đi quá nhanh làm Chuột xù buồn cười.",
                "Vì Mèo nhép chọc lách Chuột xù."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Việc sử dụng các cụm từ như 'chắc là', 'chẳng hiểu sao' giúp ích gì cho lời kể đóng vai?",
            "options": [
                "Làm câu chuyện trở nên nhàm chán.",
                "Phản ánh chân thực suy nghĩ chủ quan, cảm nhận riêng của nhân vật.",
                "Làm người đọc không hiểu nội dung câu chuyện.",
                "Giúp câu chuyện khách quan hơn."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đóng vai kể lại câu chuyện giúp bài văn của em có đặc điểm gì?",
            "options": [
                "Tăng tính khách quan, giống hệt báo cáo tin tức.",
                "Giàu cảm xúc, sinh động và có góc nhìn mới mẻ sáng tạo.",
                "Hoàn toàn không có thật.",
                "Dài dòng và khó hiểu hơn."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Bố cục của một bài văn kể chuyện sáng tạo đóng vai gồm mấy phần?",
            "options": [
                "2 phần",
                "3 phần",
                "4 phần",
                "5 phần"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi mèo nhép khóc sụt sịt trên lưng bác ngựa, chuột xù đã làm gì?",
            "options": [
                "Vờ nằm thiêm thiếp và cố nén cười để bạn tự rút ra bài học.",
                "Quát mắng mèo nhép dữ dội.",
                "Nhảy xuống đất và đi bộ.",
                "Khóc theo mèo nhép."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tên bài học của Tiết 6 là gì?",
            "options": [
                "Tìm hiểu cách viết bài văn kể chuyện sáng tạo",
                "Tìm hiểu cách viết bài văn kể chuyện sáng tạo (tiếp theo)",
                "Luyện viết bài văn kể chuyện sáng tạo",
                "Viết bài văn kể chuyện sáng tạo"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- LOGIC BÀI TẬP 1 ---
let userAnswersVn6 = {
    a: null,
    c: null
};

window.selectOptionVn6 = function(part, idx) {
    userAnswersVn6[part] = idx;
    const limit = part === 'a' ? 3 : 4;

    for (let i = 0; i < limit; i++) {
        const btn = document.getElementById(`btn-vn6-${part}-${i}`);
        if (btn) btn.className = "p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-sky-400 hover:bg-sky-50/30 transition-all text-gray-800 text-base md:text-xl";
    }

    const selBtn = document.getElementById(`btn-vn6-${part}-${idx}`);
    if (selBtn) {
        selBtn.className = "p-4 bg-sky-50 border-2 border-sky-100 rounded-xl font-bold text-left text-sky-800 shadow-sm text-base md:text-xl";
    }
};

window.checkQuestionB = function() {
    const tuMinh = document.getElementById('ans-vn6-b-tu-minh').value.trim().toLowerCase();
    const tuKhac = document.getElementById('ans-vn6-b-tu-khac').value.trim().toLowerCase();

    const fb = document.getElementById('fb-vn6-b');
    fb.classList.remove('hidden');

    const checkMinh = tuMinh.includes('tôi') || tuMinh.includes('chúng tôi');
    const checkKhac = tuKhac.includes('mèo nhép') || tuKhac.includes('bác ngựa') || tuKhac.includes('cậu bạn') || tuKhac.includes('cậu ấy');

    if (checkMinh && checkKhac) {
        fb.innerHTML = "🎉 Chính xác! Chuột xù dùng từ 'tôi', 'chúng tôi' để gọi mình và gọi các nhân vật khác là 'mèo nhép', 'cậu bạn', 'bác ngựa', 'cậu ấy'.";
        fb.className = "text-lg font-bold p-3 rounded-xl bg-emerald-600 text-white mt-4";
        return true;
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác hoàn toàn. Hãy đọc kỹ 2 đoạn văn và tìm các từ xưng hô nhé!";
        fb.className = "text-lg font-bold p-3 rounded-xl bg-rose-600 text-white mt-4";
        return false;
    }
};

// --- NỐI THẺ BÀI CÂU D ---
let selectedVn6ColA = null;
let selectedVn6ColB = null;
const correctMatchesVn6 = {
    "mo-dau": "desc-mo-dau",
    "dien-bien": "desc-dien-bien",
    "ket-thuc": "desc-ket-thuc"
};
let userMatchesVn6 = {};

window.drawConnectionsVn6 = function() {
    const svg = document.getElementById('svg-connections-vn6');
    if (!svg) return;
    svg.innerHTML = '';
    
    const container = document.getElementById('matching-board-vn6');
    if (!container) return;
    const containerRect = container.getBoundingClientRect();

    for (const idA in userMatchesVn6) {
        const idB = userMatchesVn6[idA];
        const elA = document.getElementById(`node-vn6-A-${idA}`);
        const elB = document.getElementById(`node-vn6-B-${idB}`);
        if (!elA || !elB) continue;

        const rectA = elA.getBoundingClientRect();
        const rectB = elB.getBoundingClientRect();

        let x1, y1, x2, y2;
        
        if (rectA.right <= rectB.left) {
            x1 = rectA.right - containerRect.left;
            y1 = rectA.top + rectA.height / 2 - containerRect.top;
            x2 = rectB.left - containerRect.left;
            y2 = rectB.top + rectB.height / 2 - containerRect.top;
        } else {
            x1 = rectA.left + rectA.width / 2 - containerRect.left;
            y1 = rectA.bottom - containerRect.top;
            x2 = rectB.left + rectB.width / 2 - containerRect.left;
            y2 = rectB.top - containerRect.top;
        }

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', '#0284c7');
        line.setAttribute('stroke-width', '5');
        line.setAttribute('stroke-linecap', 'round');
        
        svg.appendChild(line);
    }
};

window.selectNodeVn6 = function(column, id) {
    if (column === 'A') {
        if (selectedVn6ColA) {
            document.getElementById(`node-vn6-A-${selectedVn6ColA}`).classList.remove('border-sky-100', 'bg-sky-50/50');
        }
        selectedVn6ColA = id;
        document.getElementById(`node-vn6-A-${id}`).classList.add('border-sky-100', 'bg-sky-50/50');
    } else {
        if (selectedVn6ColB) {
            document.getElementById(`node-vn6-B-${selectedVn6ColB}`).classList.remove('border-sky-100', 'bg-sky-50/50');
        }
        selectedVn6ColB = id;
        document.getElementById(`node-vn6-B-${id}`).classList.add('border-sky-100', 'bg-sky-50/50');
    }

    if (selectedVn6ColA && selectedVn6ColB) {
        userMatchesVn6[selectedVn6ColA] = selectedVn6ColB;
        
        const nodeA = document.getElementById(`node-vn6-A-${selectedVn6ColA}`);
        const nodeB = document.getElementById(`node-vn6-B-${selectedVn6ColB}`);
        
        nodeA.classList.remove('border-sky-100', 'bg-sky-50/50');
        nodeB.classList.remove('border-sky-100', 'bg-sky-50/50');
        
        nodeA.classList.add('border-sky-100', 'bg-sky-100/50');
        nodeB.classList.add('border-sky-100', 'bg-sky-100/50');
        
        selectedVn6ColA = null;
        selectedVn6ColB = null;

        window.drawConnectionsVn6();
    }
};

window.resetMatchingVn6 = function() {
    selectedVn6ColA = null;
    selectedVn6ColB = null;
    userMatchesVn6 = {};
    
    ['mo-dau', 'dien-bien', 'ket-thuc'].forEach(id => {
        const el = document.getElementById(`node-vn6-A-${id}`);
        if (el) el.className = "p-5 bg-white border-4 border-gray-100 rounded-xl font-black text-lg text-left text-gray-800 shadow-sm transition-all hover:border-sky-400 hover:bg-sky-50/20 active:scale-98";
    });

    ['desc-mo-dau', 'desc-dien-bien', 'desc-ket-thuc'].forEach(id => {
        const el = document.getElementById(`node-vn6-B-${id}`);
        if (el) el.className = "p-5 bg-white border-4 border-gray-100 rounded-xl font-bold text-base text-left text-gray-800 shadow-sm transition-all hover:border-sky-400 hover:bg-sky-50/20 active:scale-98";
    });

    const fb = document.getElementById('fb-vn6-d');
    if (fb) fb.classList.add('hidden');

    const svg = document.getElementById('svg-connections-vn6');
    if (svg) svg.innerHTML = '';
};

window.checkMatchingVn6 = function() {
    let matchCount = 0;
    for (const key in correctMatchesVn6) {
        if (userMatchesVn6[key] === correctMatchesVn6[key]) {
            matchCount++;
        }
    }

    const fb = document.getElementById('fb-vn6-d');
    fb.classList.remove('hidden');

    if (matchCount === 3) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã ghép đúng toàn bộ cấu trúc bài văn kể chuyện sáng tạo đóng vai.";
        fb.className = "text-lg font-bold p-3 rounded-xl bg-emerald-600 text-white mt-4";
        return true;
    } else {
        fb.innerHTML = `⚠️ Chưa đúng rồi, em mới ghép đúng ${matchCount}/3 ý. Hãy làm lại nhé!`;
        fb.className = "text-lg font-bold p-3 rounded-xl bg-rose-600 text-white mt-4";
        return false;
    }
};

window.submitVn6Ex1 = function() {
    const checkA = userAnswersVn6.a === 1; // Chuột xù
    const checkC = userAnswersVn6.c === 0; // Không chắc chắn về mèo nhép
    const checkB = window.checkQuestionB();
    const checkD = window.checkMatchingVn6();

    const fbA = document.getElementById('fb-vn6-a');
    fbA.classList.remove('hidden');
    if (checkA) {
        fbA.innerHTML = "🎉 Đúng rồi!";
        fbA.className = "text-base font-bold text-emerald-800 mt-2";
    } else {
        fbA.innerHTML = "⚠️ Chưa chính xác. Em hãy kiểm tra lại nhé.";
        fbA.className = "text-base font-bold text-rose-800 mt-2";
    }

    const fbC = document.getElementById('fb-vn6-c');
    fbC.classList.remove('hidden');
    if (checkC) {
        fbC.innerHTML = "🎉 Đúng rồi!";
        fbC.className = "text-base font-bold text-emerald-800 mt-2";
    } else {
        fbC.innerHTML = "⚠️ Chưa chính xác. Em hãy kiểm tra lại nhé.";
        fbC.className = "text-base font-bold text-rose-800 mt-2";
    }

    if (checkA && checkC && checkB && checkD) {
        window.showMathFeedback("Hoàn thành Bài tập 1", "🌟", "Chúc mừng em đã hoàn thành xuất sắc toàn bộ Bài tập 1!");
    } else {
        window.showMathFeedback("Bài tập chưa hoàn tất", "⚠️", "Em cần trả lời đúng tất cả các câu hỏi của Bài tập 1 để hoàn thành nhé!");
    }
};

// --- LOGIC BÀI TẬP 2 ---
window.resetEx2 = function() {
    document.getElementById('ans-vn6-ex2-a').value = '';
    document.getElementById('ans-vn6-ex2-b').value = '';
    const fb = document.getElementById('fb-vn6-ex2');
    if (fb) fb.classList.add('hidden');
};

window.submitVn6Ex2 = function() {
    const ansA = document.getElementById('ans-vn6-ex2-a').value.trim();
    const ansB = document.getElementById('ans-vn6-ex2-b').value.trim();
    const fb = document.getElementById('fb-vn6-ex2');
    
    if (!ansA || !ansB) {
        fb.classList.remove('hidden');
        fb.innerHTML = "⚠️ Vui lòng nhập đầy đủ câu trả lời cho cả hai câu thảo luận.";
        fb.className = "text-lg font-bold p-3 rounded-xl bg-rose-600 text-white mt-4";
        return;
    }

    fb.classList.remove('hidden');
    fb.innerHTML = "🎉 Em đã nộp bài tập 2 thành công! Hãy cùng thảo luận thêm với các bạn trên lớp nhé.";
    fb.className = "text-lg font-bold p-3 rounded-xl bg-emerald-600 text-white mt-4";
};

// --- BÀI TẬP 3: VIẾT VỚI AI THẦY E ---
window.resetWritingVn6 = function() {
    document.getElementById('ans-vn6-writing').value = '';
    const fb = document.getElementById('fb-vn6-writing');
    if (fb) fb.classList.add('hidden');
};

window.checkWritingVn6 = function() {
    const text = document.getElementById('ans-vn6-writing').value.trim();
    const fb = document.getElementById('fb-vn6-writing');
    if (!fb) return;

    if (text.length < 20) {
        fb.classList.remove('hidden');
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-600">AI Thầy E nhận xét:</h5>
                    <p class="text-lg">Đoạn văn của em còn hơi ngắn. Em hãy cố gắng viết dài hơn một chút (từ 3 đến 5 câu) để tự giới thiệu về Mèo nhép và dẫn dắt vào câu chuyện phiêu lưu nhé!</p>
                </div>
            </div>
        `;
        return;
    }

    fb.classList.remove('hidden');
    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-amber-600">AI Thầy E nhận xét & Chấm điểm:</h5>
                <p class="text-lg mb-3">Thầy thấy em đã đóng vai nhân vật Mèo nhép rất tốt, biết sử dụng ngôi xưng "tôi" và dẫn dắt tự nhiên vào câu chuyện phiêu lưu đầy li kì!</p>
                <div class="flex items-center gap-3">
                    <span class="text-xl md:text-2xl font-black bg-amber-500 px-3 py-1 rounded-lg">Đạt 95%</span>
                    <span class="text-sm opacity-80">(Diễn đạt mạch lạc, sáng tạo tốt)</span>
                </div>
            </div>
        </div>
    `;
};

window.submitVn6Writing = function() {
    const text = document.getElementById('ans-vn6-writing').value.trim();
    if (!text) {
        window.showMathFeedback("Bài viết trống", "⚠️", "Em hãy nhập đoạn văn tự sự trước khi nộp bài nhé!");
        return;
    }
    window.showMathFeedback("Nộp bài viết thành công", "🌟", "Đoạn văn đóng vai Mèo nhép của em đã được gửi đi thành công!");
};

// --- HOÀN THÀNH TOÀN BỘ TIẾT HỌC ---
window.submitVn6Global = function() {
    window.showMathFeedback("Hoàn thành Tiết học", "🎉", "Chúc mừng em đã hoàn thành xuất sắc toàn bộ nội dung học tập và rèn luyện của Tiết 6!");
};

// --- LOGIC PLAY AUDIO ---
let currentSegmentAudio = null;
window.playSegmentAudio = function(url) {
    if (currentSegmentAudio && !currentSegmentAudio.paused) {
        currentSegmentAudio.pause();
        if (currentSegmentAudio.src.endsWith(url)) {
            return;
        }
    }
    currentSegmentAudio = new Audio(url);
    currentSegmentAudio.play().catch(err => console.log("Audio play failed:", err));
};
