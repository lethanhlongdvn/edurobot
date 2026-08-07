export const lesson93 = {
    "topic": "Tiếng Việt 5",
    "week": "14",
    "period": "93",
    "title": "LTVC: BIỆN PHÁP ĐIỆP TỪ, BIỆN PHÁP ĐIỆP NGỮ",
    "desc": "Bài học giúp học sinh làm quen, hiểu khái niệm và tác dụng tu từ của biện pháp điệp từ, điệp ngữ trong câu thơ, câu văn; đồng thời biết sử dụng phép điệp để viết câu sinh động hơn.",
    "subject": "LTVC",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-blue-600 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-blue-600 font-bold text-lg md:text-xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Nhận diện được biện pháp điệp từ, điệp ngữ trong các đoạn thơ, đoạn văn cụ thể của sách giáo khoa.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Hiểu rõ tác dụng của điệp từ, điệp ngữ là dùng để nhấn mạnh ý nghĩa, cảm xúc, hoặc tạo nhịp điệu cho câu thơ, câu văn.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết sử dụng biện pháp điệp từ, điệp ngữ một cách sáng tạo để viết câu văn biểu cảm sinh động.
            </li>
        </ul>
    </div>

    <!-- 🚀 Khởi động: Trò chơi nhận diện từ lặp -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <h3 class="text-2xl md:text-3xl font-black text-blue-600 border-b border-blue-100 pb-4 flex items-center gap-3">
            <span class="text-xl md:text-3xl">🚀</span>
            Khởi động: Tìm từ lặp lại
        </h3>
        <p class="text-lg text-gray-700 font-bold leading-relaxed">
            Em hãy đọc câu ca dao sau và tìm nhanh xem từ ngữ nào được lặp đi lặp lại nhiều lần nhất:
        </p>
        <div class="bg-blue-50/70 p-6 rounded-2xl border-l-4 border-blue-500 font-bold text-indigo-950 text-xl leading-relaxed italic text-center max-w-2xl mx-auto shadow-inner">
            "Có công mài sắt, có ngày nên kim."
        </div>
        <div class="max-w-md mx-auto space-y-4 pt-2">
            <input type="text" id="warmup-repetition-input" placeholder="Nhập từ được lặp lại nhiều nhất..." class="w-full p-4 border-2 border-blue-100 rounded-2xl outline-none focus:border-blue-500 font-bold bg-blue-50/10 text-lg md:text-xl shadow-inner text-center">
            <div class="flex justify-end items-center gap-4"><button onclick="startWarmupVn93();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="warmup-feedback-93" class="hidden p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner"></div>
        </div>
    </div>

    <!-- 📖 Kiến thức cốt lõi: Ghi nhớ -->
    <div class="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-[48px] shadow-xl relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black mb-4 flex items-center gap-2">
            <span>💡</span> GHI NHỚ: ĐIỆP TỪ, ĐIỆP NGỮ
        </h3>
        <p class="text-lg md:text-xl font-bold leading-relaxed opacity-95">
            Điệp từ, điệp ngữ là biện pháp lặp lại từ ngữ để nhấn mạnh một nội dung được nói đến (như cảnh vật, phẩm chất, hoạt động) hoặc thể hiện sâu sắc tình cảm, cảm xúc của người viết.
        </p>
    </div>

    <!-- 📝 LUYỆN TẬP TƯƠNG TÁC (Câu 1-4 SGK) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-8">
        <h3 class="text-2xl md:text-3xl font-black text-blue-600 border-b border-blue-100 pb-4 flex items-center gap-3">
            <span class="text-xl md:text-3xl">📝</span>
            Luyện tập thực hành
        </h3>

        <!-- Bài tập 1: Ca dao đi cấy -->
        <div class="space-y-4">
            <h4 class="text-xl font-black text-gray-800 flex items-start gap-2">
                <span class="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm shrink-0 mt-0.5">1</span>
                Đọc bài ca dao dưới đây và đếm số lần từ "trông" lặp lại:
            </h4>
            <p class="text-xs text-gray-800 font-bold italic text-center">💡 Mẹo: Em có thể nhấp chuột trực tiếp vào các từ "trông" trong bài để đánh dấu tô vàng cho dễ đếm nhé!</p>
            
            <div class="bg-blue-50/50 p-6 rounded-3xl border border-blue-100 max-w-xl mx-auto shadow-inner select-none">
                <div class="serif-font text-gray-800 text-xl md:text-2xl font-bold text-center leading-loose space-y-2">
                    <p>Người ta đi cấy lấy công</p>
                    <p>Tôi nay đi cấy còn <span onclick="toggleHighlight(this)" class="px-1.5 py-0.5 rounded cursor-pointer hover:bg-yellow-200 transition-all">trông</span> nhiều bề</p>
                    <p><span onclick="toggleHighlight(this)" class="px-1.5 py-0.5 rounded cursor-pointer hover:bg-yellow-200 transition-all">Trông</span> trời, <span onclick="toggleHighlight(this)" class="px-1.5 py-0.5 rounded cursor-pointer hover:bg-yellow-200 transition-all">trông</span> đất, <span onclick="toggleHighlight(this)" class="px-1.5 py-0.5 rounded cursor-pointer hover:bg-yellow-200 transition-all">trông</span> mây</p>
                    <p><span onclick="toggleHighlight(this)" class="px-1.5 py-0.5 rounded cursor-pointer hover:bg-yellow-200 transition-all">Trông</span> mưa, <span onclick="toggleHighlight(this)" class="px-1.5 py-0.5 rounded cursor-pointer hover:bg-yellow-200 transition-all">trông</span> nắng, <span onclick="toggleHighlight(this)" class="px-1.5 py-0.5 rounded cursor-pointer hover:bg-yellow-200 transition-all">trông</span> ngày, <span onclick="toggleHighlight(this)" class="px-1.5 py-0.5 rounded cursor-pointer hover:bg-yellow-200 transition-all">trông</span> đêm</p>
                    <p><span onclick="toggleHighlight(this)" class="px-1.5 py-0.5 rounded cursor-pointer hover:bg-yellow-200 transition-all">Trông</span> cho chân cứng đá mềm</p>
                    <p>Trời yên, biển lặng mới yên tấm lòng.</p>
                </div>
            </div>

            <div class="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-between gap-2">
                    <span class="font-black text-blue-600">Từ "trông" xuất hiện mấy lần?</span>
                    <input type="number" id="vn93-c1-count" placeholder="Nhập số lần đếm được..." class="w-full p-2 border-2 border-blue-100 rounded-xl font-bold bg-white outline-none focus:border-blue-500">
                </div>
                <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-between gap-2">
                    <span class="font-black text-blue-600">Việc lặp lại từ "trông" có tác dụng gì?</span>
                    <select id="vn93-c1-effect" class="w-full p-2.5 border border-blue-200 rounded-xl font-bold bg-white text-sm">
                        <option value="">-- Chọn tác dụng --</option>
                        <option value="scare">Thể hiện nỗi sợ hãi của người đi cấy trước thiên nhiên bão táp</option>
                        <option value="worry">Nhấn mạnh nhiều nỗi lo toan, mong mỏi tha thiết thời tiết thuận lợi của người nông dân</option>
                        <option value="count">Chỉ để đếm các hiện tượng tự nhiên xung quanh đồng ruộng</option>
                    </select>
                </div>
            </div>
            <div class="flex justify-end items-center gap-4"><button onclick="checkC1Vn93();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-c1" class="hidden p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner"></div>
        </div>

        <!-- Bài tập 2: Tục ngữ Học ăn, học nói -->
        <div class="space-y-4 border-t border-blue-50 pt-6">
            <h4 class="text-xl font-black text-gray-800 flex items-start gap-2">
                <span class="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm shrink-0 mt-0.5">2</span>
                Đọc câu tục ngữ dưới đây và xác định từ lặp lại cùng tác dụng:
            </h4>
            <div class="bg-blue-50/70 p-5 rounded-2xl border-l-4 border-blue-500 font-bold text-indigo-950 text-xl leading-relaxed italic text-center max-w-xl mx-auto shadow-inner select-none">
                "Học ăn, học nói, học gói, học mở."
            </div>

            <div class="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-between gap-2">
                    <span class="font-black text-blue-600">Từ ngữ được lặp lại là:</span>
                    <input type="text" id="vn93-c2-word" placeholder="Nhập từ được lặp..." class="w-full p-2 border-2 border-blue-100 rounded-xl font-bold bg-white text-center outline-none focus:border-blue-500">
                </div>
                <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-between gap-2">
                    <span class="font-black text-blue-600">Tác dụng của việc lặp lại đó là gì?</span>
                    <select id="vn93-c2-effect" class="w-full p-2.5 border border-blue-200 rounded-xl font-bold bg-white text-sm">
                        <option value="">-- Chọn tác dụng --</option>
                        <option value="rule">Liệt kê thứ tự các hoạt động bắt buộc trong ngày của các em</option>
                        <option value="emphasis">Nhấn mạnh tầm quan trọng của việc học hỏi một cách toàn diện những phép ứng xử lịch sự cơ bản nhất</option>
                    </select>
                </div>
            </div>
            <div class="flex justify-end items-center gap-4"><button onclick="checkC2Vn93();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-c2" class="hidden p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner"></div>
        </div>

        <!-- Bài tập 3: Khổ thơ Xuân Quỳnh -->
        <div class="space-y-4 border-t border-blue-50 pt-6">
            <h4 class="text-xl font-black text-gray-800 flex items-start gap-2">
                <span class="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm shrink-0 mt-0.5">3</span>
                Đọc đoạn thơ sau và chọn đáp án tác dụng đúng của từ lặp lại:
            </h4>
            
            <div class="bg-blue-50/50 p-6 rounded-3xl border border-blue-100 max-w-xl mx-auto shadow-inner select-none">
                <div class="serif-font text-gray-800 text-xl md:text-2xl font-bold text-center leading-loose space-y-1">
                    <p>Tôi đạp vỡ màu nâu</p>
                    <p>Bầu trời trong quả trứng</p>
                    <p><span onclick="toggleHighlight(this)" class="px-1.5 py-0.5 rounded cursor-pointer hover:bg-yellow-200 transition-all">Bỗng</span> thấy nhiều gió lộng</p>
                    <p><span onclick="toggleHighlight(this)" class="px-1.5 py-0.5 rounded cursor-pointer hover:bg-yellow-200 transition-all">Bỗng</span> thấy nhiều nắng reo</p>
                    <p><span onclick="toggleHighlight(this)" class="px-1.5 py-0.5 rounded cursor-pointer hover:bg-yellow-200 transition-all">Bỗng</span> tôi thấy thương yêu</p>
                    <p>Tôi biết là có mẹ.</p>
                </div>
            </div>

            <div class="max-w-2xl mx-auto bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-3 pt-2">
                <span class="font-black text-blue-600">Từ "bỗng" được lặp lại 3 lần có tác dụng gì? (Chọn đáp án đúng của SGK)</span>
                <div class="space-y-2">
                    <label class="flex items-center gap-2 text-base font-bold text-gray-700 cursor-pointer">
                        <input type="radio" name="vn93-c3" value="A" class="w-4 h-4 text-blue-600">
                        <span>A. Nhấn mạnh niềm vui của chú gà con vì được mẹ yêu thương.</span>
                    </label>
                    <label class="flex items-center gap-2 text-base font-bold text-gray-700 cursor-pointer">
                        <input type="radio" name="vn93-c3" value="B" class="w-4 h-4 text-blue-600">
                        <span>B. Nhấn mạnh niềm vui của chú gà con vì được ra khỏi quả trứng.</span>
                    </label>
                    <label class="flex items-center gap-2 text-base font-bold text-gray-700 cursor-pointer">
                        <input type="radio" name="vn93-c3" value="C" class="w-4 h-4 text-blue-600">
                        <span>C. Nhấn mạnh sự tươi đẹp của thiên nhiên mà chú gà con quan sát được.</span>
                    </label>
                    <label class="flex items-center gap-2 text-base font-bold text-gray-700 cursor-pointer">
                        <input type="radio" name="vn93-c3" value="D" class="w-4 h-4 text-blue-600">
                        <span>D. Nhấn mạnh sự ngỡ ngàng của chú gà con trước những điều mới mẻ.</span>
                    </label>
                </div>
            </div>
            <div class="flex justify-end items-center gap-4"><button onclick="checkC3Vn93();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-c3" class="hidden p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner"></div>
        </div>

        <!-- Bài tập 4: Đoạn văn Thép Mới -->
        <div class="space-y-4 border-t border-blue-50 pt-6">
            <h4 class="text-xl font-black text-gray-800 flex items-start gap-2">
                <span class="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm shrink-0 mt-0.5">4</span>
                Đọc đoạn văn Thép Mới và đếm số từ "tre" lặp lại:
            </h4>
            
            <div class="bg-blue-50/50 p-6 rounded-3xl border border-blue-100 max-w-xl mx-auto shadow-inner select-none text-justify">
                <p class="serif-font text-gray-800 text-xl font-bold leading-relaxed indent-8">
                    Gậy <span onclick="toggleHighlight(this)" class="px-1 py-0.5 rounded cursor-pointer hover:bg-yellow-200 transition-all">tre</span>, chông <span onclick="toggleHighlight(this)" class="px-1 py-0.5 rounded cursor-pointer hover:bg-yellow-200 transition-all">tre</span> chống lại sắt thép của quân thù. <span onclick="toggleHighlight(this)" class="px-1 py-0.5 rounded cursor-pointer hover:bg-yellow-200 transition-all">Tre</span> xung phong vào xe tăng, đại bác. <span onclick="toggleHighlight(this)" class="px-1 py-0.5 rounded cursor-pointer hover:bg-yellow-200 transition-all">Tre</span> giữ làng, giữ nước, giữ mái nhà tranh, giữ đồng lúa chín. <span onclick="toggleHighlight(this)" class="px-1 py-0.5 rounded cursor-pointer hover:bg-yellow-200 transition-all">Tre</span> hy sinh để bảo vệ con người. <span onclick="toggleHighlight(this)" class="px-1 py-0.5 rounded cursor-pointer hover:bg-yellow-200 transition-all">Tre</span>, anh hùng lao động! <span onclick="toggleHighlight(this)" class="px-1 py-0.5 rounded cursor-pointer hover:bg-yellow-200 transition-all">Tre</span>, anh hùng chiến đấu!
                </p>
            </div>

            <div class="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-between gap-2">
                    <span class="font-black text-blue-600">Từ "tre" xuất hiện bao nhiêu lần?</span>
                    <input type="number" id="vn93-c4-count" placeholder="Nhập số lần đếm được..." class="w-full p-2 border-2 border-blue-100 rounded-xl font-bold bg-white outline-none focus:border-blue-500">
                </div>
                <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-between gap-2">
                    <span class="font-black text-blue-600">Tác dụng của việc điệp từ "tre" là gì?</span>
                    <select id="vn93-c4-effect" class="w-full p-2.5 border border-blue-200 rounded-xl font-bold bg-white text-sm">
                        <option value="">-- Chọn tác dụng --</option>
                        <option value="color">Để làm nổi bật màu xanh của bụi tre làng quê Việt Nam</option>
                        <option value="hero">Nhấn mạnh phẩm chất kiên cường, dũng cảm, luôn sát cánh bảo vệ nhân dân của tre (và cũng là biểu tượng của nhân dân Việt Nam)</option>
                    </select>
                </div>
            </div>
            <div class="flex justify-end items-center gap-4"><button onclick="checkC4Vn93();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-c4" class="hidden p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner"></div>
        </div>
    </div>

    <!-- 🎓 VIẾT CÂU & AI THẦY E CHẤM ĐIỂM -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <h3 class="text-2xl md:text-3xl font-black text-blue-600 border-b border-blue-100 pb-4 flex items-center gap-3">
            <span class="text-xl md:text-3xl">🎓</span>
            Thực hành tự viết câu sử dụng phép điệp
        </h3>
        <p class="text-lg text-gray-700 font-bold leading-relaxed">
            Em hãy viết 1-2 câu văn thể hiện tình cảm của mình với gia đình, bạn bè hoặc quê hương trong đó có sử dụng biện pháp điệp từ hoặc điệp ngữ nhé:
        </p>

        <div class="space-y-4 max-w-4xl mx-auto pt-2">
            <textarea id="vn93-essay-input" rows="4" placeholder="Ví dụ: Em yêu cánh đồng quê, yêu hàng tre xanh mát, yêu cả những buổi chiều hoàng hôn tĩnh lặng..." class="w-full p-4 border-2 border-blue-100 rounded-3xl outline-none focus:border-blue-500 font-bold bg-blue-50/10 text-lg md:text-xl shadow-inner"></textarea>
            
            <div class="flex justify-end items-center gap-4"><button onclick="resetVn93()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="checkWritingVn93();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="vn93-essay-fb" class="hidden p-5 rounded-3xl border-2 font-bold text-lg text-center shadow-lg transition-all"></div>
        </div>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Biện pháp điệp từ, điệp ngữ là gì?",
            "options": [
                "Là việc cố tình lặp lại một từ hoặc cụm từ để nhấn mạnh nội dung hoặc cảm xúc",
                "Là việc dùng các từ đồng nghĩa để giải thích nghĩa cho nhau",
                "Là cách dùng đại từ xưng hô thay thế cho các danh từ riêng",
                "Là việc lặp lại các từ sai chính tả để gây cười"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tác dụng tu từ nào là tác dụng cốt lõi của phép điệp từ, điệp ngữ?",
            "options": [
                "Làm cho đoạn văn dài dòng và phức tạp hơn",
                "Nhấn mạnh nội dung, cảm xúc hoặc tạo nhịp điệu nhạc tính cho bài thơ, câu văn",
                "Để người đọc dễ đếm số lượng chữ trong câu",
                "Giải thích nghĩa từ khó cho người đọc"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Câu tục ngữ 'Học ăn, học nói, học gói, học mở' sử dụng phép điệp từ/điệp ngữ nào?",
            "options": [
                "Điệp từ 'học'",
                "Điệp ngữ 'học ăn'",
                "Điệp từ 'nói'",
                "Không sử dụng phép điệp nào"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong câu thơ của Xuân Quỳnh: 'Bỗng thấy nhiều gió lộng / Bỗng thấy nhiều nắng reo / Bỗng tôi thấy thương yêu', tác dụng của từ 'bỗng' là gì?",
            "options": [
                "Nhấn mạnh sự ngỡ ngàng, kinh ngạc của chú gà con trước những điều mới mẻ ngoài quả trứng",
                "Nhấn mạnh sự sợ hãi của chú gà con trước cơn dông bão",
                "Nhấn mạnh nỗi buồn bã vì chưa được gặp gà mẹ",
                "Chỉ để tạo vần thơ giống nhau ở đầu dòng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong đoạn văn của Thép Mới: 'Tre giữ làng, giữ nước, giữ mái nhà tranh...', từ 'giữ' được lặp lại có tác dụng gì?",
            "options": [
                "Nhấn mạnh vai trò bảo vệ, chở che bền bỉ, kiên cường của tre đối với quê hương đất nước",
                "Nhấn mạnh hành động cướp bóc của quân thù xâm lược",
                "Chỉ hoạt động giữ gìn của cải trong gia đình người nông dân",
                "Làm cho câu văn không bị thiếu động từ chính"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Thế nào là điệp ngữ nối tiếp?",
            "options": [
                "Các từ ngữ lặp lại đứng liền nhau để tạo sự tăng tiến, dồn dập",
                "Các từ ngữ lặp đứng cách quãng nhau qua nhiều câu khác nhau",
                "Từ lặp lại nằm ở cuối câu trước và đầu câu sau",
                "Là việc sử dụng các từ đồng âm khác nghĩa"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Đoạn thơ: 'Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công' sử dụng phép điệp gì?",
            "options": [
                "Điệp ngữ nối tiếp",
                "Điệp ngữ cách quãng",
                "Điệp vòng",
                "Không sử dụng phép điệp"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Phép điệp từ nào được sử dụng trong bài ca dao: 'Trông trời, trông đất, trông mây...'?",
            "options": [
                "Điệp từ cách quãng 'trông'",
                "Điệp ngữ nối tiếp 'trông trời'",
                "Điệp vòng cuối đầu",
                "Không sử dụng điệp từ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Lỗi 'lặp từ vô lý' (khác với điệp từ tu từ) gây ra tác hại gì cho câu văn?",
            "options": [
                "Làm câu văn rườm rà, lủng củng và thiếu tính nghệ thuật biểu cảm",
                "Giúp câu văn mạch lạc và ngắn gọn hơn",
                "Làm cho người đọc hiểu sai hoàn toàn nghĩa câu",
                "Gây lỗi chính tả nghiêm trọng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Câu văn nào sau đây mắc lỗi lặp từ vô lý (lỗi diễn đạt)?",
            "options": [
                "Hôm nay em đi học, em đi học bằng xe đạp và em đi học rất vui vẻ.",
                "Em luôn tự hào về quê hương tươi đẹp của mình.",
                "Tre anh hùng lao động, tre anh hùng chiến đấu!",
                "Học ăn, học nói, học gói, học mở."
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Điệp ngữ cách quãng là gì?",
            "options": [
                "Các từ ngữ được lặp lại đứng cách nhau trong câu hoặc các câu khác nhau",
                "Các từ lặp lại đứng liên tiếp liền kề nhau",
                "Từ lặp lại nằm ở vị trí đảo ngược cấu trúc ngữ pháp",
                "Các từ lặp lại có dấu phẩy ngăn cách trực tiếp"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong câu: 'Tre giữ làng, giữ nước, giữ mái nhà tranh, giữ đồng lúa chín', từ 'giữ' được lặp lại bao nhiêu lần?",
            "options": [
                "4 lần",
                "3 lần",
                "5 lần",
                "2 lần"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Câu thơ: 'Cùng trông lại mà cùng chẳng thấy / Thấy xanh xanh những mấy ngàn dâu' sử dụng phép điệp nào ở từ 'thấy'?",
            "options": [
                "Điệp vòng (điệp chuyển tiếp - lặp lại từ cuối câu trước ở đầu câu sau)",
                "Điệp nối tiếp sát nhau",
                "Điệp cách quãng nhiều dòng thơ",
                "Không sử dụng biện pháp điệp"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Biện pháp điệp từ, điệp ngữ thường xuất hiện nhiều nhất trong thể loại văn học nào?",
            "options": [
                "Thơ ca và các bài văn xuôi chính luận, giàu chất trữ tình biểu cảm",
                "Các bản tin báo chí cập nhật thời sự nhanh",
                "Các văn bản hướng dẫn kỹ thuật cơ khí",
                "Hóa đơn chứng từ kế toán trong kinh tế"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Điệp ngữ khác điệp từ ở điểm nào?",
            "options": [
                "Điệp từ là lặp lại một từ đơn lẻ, điệp ngữ là lặp lại một cụm từ",
                "Điệp từ chỉ dùng trong thơ, điệp ngữ chỉ dùng trong văn xuôi",
                "Điệp từ làm tăng số câu, điệp ngữ giữ nguyên số câu",
                "Hai khái niệm này hoàn toàn giống nhau 100%"
            ],
            "answer": 0,
            "level": 0
        }
    ]
};

// ====== INTERACTIVE SCRIPT ======
window.toggleHighlight = function(element) {
    if (element.classList.contains('bg-yellow-200')) {
        element.classList.remove('bg-yellow-200', 'text-yellow-900');
    } else {
        element.classList.add('bg-yellow-200', 'text-yellow-900');
    }
};

window.startWarmupVn93 = function() {
    const text = document.getElementById('warmup-repetition-input').value.trim();
    const fb = document.getElementById('warmup-feedback-93');
    if (!text) {
        alert('Em hãy nhập từ lặp lại đếm được nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-red-100', 'text-red-800', 'bg-green-100', 'text-green-800');
    
    if (text.toLowerCase() === 'có') {
        fb.innerHTML = '🎉 Chính xác! Từ "có" được lặp lại 2 lần (có công, có ngày) nhấn mạnh sự bền bỉ sẽ đạt kết quả tốt đẹp.';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 bg-green-100 text-green-800 border-2 border-green-300';
    } else {
        fb.innerHTML = '⚠️ Chưa chính xác rồi, hãy chú ý từ ngắn 2 chữ cái lặp lại ở cả hai vế để điền lại nhé!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 bg-red-100 text-red-800 border-2 border-red-300';
    }
};

window.checkC1Vn93 = function() {
    const count = parseInt(document.getElementById('vn93-c1-count').value);
    const effect = document.getElementById('vn93-c1-effect').value;
    const fb = document.getElementById('fb-c1');
    
    if (isNaN(count) || !effect) {
        alert('Em hãy điền số lần đếm và chọn tác dụng nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-red-100', 'text-red-800', 'bg-green-100', 'text-green-800');
    
    if (count === 9 && effect === 'worry') {
        fb.innerHTML = '🎉 Rất xuất sắc! Từ "trông" lặp lại 9 lần nhấn mạnh nỗi lo âu, cầu mong mưa thuận gió hòa vô cùng tha thiết của người nông dân.';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-green-100 text-green-800 border-2 border-green-300';
    } else {
        fb.innerHTML = '⚠️ Sai rồi, em hãy thử đếm lại kỹ số lượng từ "trông" (kể cả từ viết hoa) và kiểm tra lại tác dụng tu từ nhé!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-red-100 text-red-800 border-2 border-red-300';
    }
};

window.checkC2Vn93 = function() {
    const word = document.getElementById('vn93-c2-word').value.trim();
    const effect = document.getElementById('vn93-c2-effect').value;
    const fb = document.getElementById('fb-c2');
    
    if (!word || !effect) {
        alert('Em hãy nhập từ ngữ lặp lại và chọn tác dụng nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-red-100', 'text-red-800', 'bg-green-100', 'text-green-800');
    
    if (word.toLowerCase() === 'học' && effect === 'emphasis') {
        fb.innerHTML = '🎉 Hoàn toàn chính xác! Điệp từ "học" lặp lại 4 lần nhấn mạnh yêu cầu toàn diện, học hỏi mọi lễ nghi ứng xử cơ bản trong đời sống.';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-green-100 text-green-800 border-2 border-green-300';
    } else {
        fb.innerHTML = '⚠️ Chưa đúng rồi, từ lặp lại là từ bắt đầu của mỗi vế trong câu tục ngữ, em hãy nhập lại nhé!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-red-100 text-red-800 border-2 border-red-300';
    }
};

window.checkC3Vn93 = function() {
    const checked = document.querySelector('input[name="vn93-c3"]:checked');
    const fb = document.getElementById('fb-c3');
    
    if (!checked) {
        alert('Em hãy chọn một đáp án nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-red-100', 'text-red-800', 'bg-green-100', 'text-green-800');
    
    if (checked.value === 'D') {
        fb.innerHTML = '🎉 Rất tốt! Từ "bỗng" được lặp 3 lần nhấn mạnh cảm giác bất ngờ, đầy ngỡ ngàng, lạ lẫm trước thế giới bao la khi chú gà bước ra khỏi trứng.';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-green-100 text-green-800 border-2 border-green-300';
    } else {
        fb.innerHTML = '⚠️ Chưa chính xác, hãy nhớ lại tiếng "reo", "gió lộng" là sự ngạc nhiên thú vị của gà con, em hãy thử chọn lại nhé!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-red-100 text-red-800 border-2 border-red-300';
    }
};

window.checkC4Vn93 = function() {
    const count = parseInt(document.getElementById('vn93-c4-count').value);
    const effect = document.getElementById('vn93-c4-effect').value;
    const fb = document.getElementById('fb-c4');
    
    if (isNaN(count) || !effect) {
        alert('Em hãy điền số lần đếm và chọn tác dụng nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-red-100', 'text-red-800', 'bg-green-100', 'text-green-800');
    
    if (count === 7 && effect === 'hero') {
        fb.innerHTML = '🎉 Rất xuất sắc! Điệp từ "tre" lặp lại 7 lần (kèm điệp từ "giữ") nhấn mạnh sự gắn bó, đồng hành và phẩm chất anh hùng của tre trong chiến đấu, bảo vệ Tổ quốc.';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-green-100 text-green-800 border-2 border-green-300';
    } else {
        fb.innerHTML = '⚠️ Chưa đúng, em hãy soát lại thật kỹ từng câu trong đoạn văn để đếm lại số lượng từ "tre" nhé!';
        fb.className = 'p-4 rounded-2xl text-center font-bold text-base mt-2 shadow-inner bg-red-100 text-red-800 border-2 border-red-300';
    }
};

window.checkWritingVn93 = function() {
    const text = document.getElementById('vn93-essay-input').value.trim();
    const fb = document.getElementById('vn93-essay-fb');
    
    if (!text) {
        alert('Em hãy viết câu trước khi nộp bài cho Thầy E nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-amber-50', 'text-amber-800', 'border-amber-200', 'bg-emerald-50', 'text-emerald-800', 'border-emerald-200');
    
    // Thuật toán kiểm tra từ lặp
    const words = text.toLowerCase().split(/[\s,?.!:]+/).filter(w => w.length > 1);
    const wordCounts = {};
    let maxCount = 0;
    let repeatedWord = "";
    
    words.forEach(w => {
        wordCounts[w] = (wordCounts[w] || 0) + 1;
        if (wordCounts[w] > maxCount) {
            maxCount = wordCounts[w];
            repeatedWord = w;
        }
    });
    
    let isRepetitionUsed = (maxCount >= 2);
    let score = 50;
    let comment = "";
    
    if (isRepetitionUsed) {
        score += 30;
        comment += `Em đã sử dụng tốt phép điệp từ với từ "${repeatedWord}" xuất hiện ${maxCount} lần. `;
    } else {
        comment += "Câu văn của em chưa sử dụng rõ ràng phép điệp từ (lặp lại từ 2 lần trở lên cho một từ). Hãy cố gắng thử lại nhé. ";
    }
    
    if (text.length >= 15) {
        score += 20;
    } else {
        comment += "Câu văn hơi ngắn, hãy bổ sung thêm hình ảnh sinh động hơn nhé. ";
    }
    
    score = Math.min(score, 100);
    
    if (score >= 80) {
        fb.innerHTML = `🌟 **Điểm đạt được: ${score}/100**<br><br>
        **Lời nhận xét từ Thầy E:** Câu văn của em rất có nhịp điệu và cảm xúc! Việc sử dụng phép điệp từ '${repeatedWord}' rất khéo léo, nhấn mạnh đúng cảm nghĩ của em. ${comment}`;
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg mt-2 shadow-lg bg-emerald-50 border-emerald-300 text-emerald-800 animate-fade-in';
    } else {
        fb.innerHTML = `⚠️ **Điểm đạt được: ${score}/100**<br><br>
        **Lời nhận xét từ Thầy E:** Hãy bổ sung thêm phép điệp từ rõ nét hơn nữa nhé. ${comment} Bấm Chấm điểm lại sau khi sửa nha!`;
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg mt-2 shadow-lg bg-amber-50 border-amber-300 text-amber-800 animate-fade-in';
    }
};

window.resetVn93 = function() {
    document.getElementById('vn93-essay-input').value = "";
    document.getElementById('vn93-essay-fb').classList.add('hidden');
    
    document.getElementById('warmup-repetition-input').value = "";
    document.getElementById('warmup-feedback-93').classList.add('hidden');
    
    document.getElementById('vn93-c1-count').value = "";
    document.getElementById('vn93-c1-effect').value = "";
    document.getElementById('fb-c1').classList.add('hidden');
    
    document.getElementById('vn93-c2-word').value = "";
    document.getElementById('vn93-c2-effect').value = "";
    document.getElementById('fb-c2').classList.add('hidden');
    
    const r3 = document.getElementsByName('vn93-c3');
    r3.forEach(r => r.checked = false);
    document.getElementById('fb-c3').classList.add('hidden');
    
    document.getElementById('vn93-c4-count').value = "";
    document.getElementById('vn93-c4-effect').value = "";
    document.getElementById('fb-c4').classList.add('hidden');
    
    // Xóa tất cả tô sáng
    const spans = document.querySelectorAll('span');
    spans.forEach(s => s.classList.remove('bg-yellow-200', 'text-yellow-900'));
    
    alert('Đã đặt lại toàn bộ bài học!');
};
