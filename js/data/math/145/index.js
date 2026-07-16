const metadata = {
    "lessonInfo": {
        "period": "145",
        "week": "29",
        "topic": "Số đo thời gian",
        "title": "BÀI 62: LUYỆN TẬP CHUNG (TIẾT 3)",
        "desc": "Luyện tập các bài toán về vận tốc, quãng đường, thời gian trong thực tế phức hợp."
    },
    "exercises": [
        {
            "id": "145_1",
            "type": "multiple_choice",
            "statement": "Một hãng tắc-xi (taxi) thử nghiệm tắc-xi bay. Chiếc tắc-xi đó bay vòng quanh thành phố theo một đường tròn bán kính 5 km với vận tốc 60 km/h. Hỏi chiếc tắc-xi hoàn thành chuyến bay trong thời gian bao lâu?",
            "options": ["Khoảng 10 phút", "Khoảng 30 phút", "Khoảng 1 giờ", "Khoảng 45 phút"],
            "answer": 1,
            "title": "Bài 1: Tắc-xi bay",
            "guidance": "Đầu tiên em hãy tính chu vi đường tròn (C = 2 x 3,14 x r) để tìm quãng đường. Sau đó tính thời gian (t = s : v). Đừng quên đổi sang phút nhé!",
            "solution": "<div class='math-solution p-6 bg-blue-50 rounded-2xl border-2 border-blue-100 font-bold text-blue-800 text-xl'>- Chu vi đường tròn (quãng đường bay): 5 x 2 x 3,14 = 31,4 (km). <br> - Thời gian hoàn thành: 31,4 : 60 = 0,5233... (giờ). <br> - Đổi sang phút: 0,5233... x 60 = 31,4 (phút). <br> ➔ Chọn: <b>Khoảng 30 phút</b>.</div>"
        },
        {
            "id": "145_2",
            "type": "fill_multiple",
            "statement": "Tí bắt đầu đi bộ từ trường về nhà với vận tốc 1 m/s. Cùng lúc đó, sau khi nghe tiếng trống tan trường, cún con cũng vội vã từ nhà chạy đến trường để đón Tí.",
            "fields": [
                { "label": "a) Sau đúng 4 phút thì Tí và cún con gặp nhau. Hỏi lúc ấy Tí đã đi được bao nhiêu mét?", "id": "ans-145-2a", "unit": "m" },
                { "label": "b) Biết cún con chạy với vận tốc 3 m/s. Hỏi khi gặp Tí, cún con đã chạy được bao nhiêu mét?", "id": "ans-145-2b", "unit": "m" }
            ],
            "answer": ["240", "720"],
            "title": "Bài 2: Tí và cún con",
            "guidance": "Đổi 4 phút = 240 giây. Sau đó tính quãng đường s = v x t cho từng đối tượng nhé!",
            "solution": "<div class='math-solution p-6 bg-orange-50 rounded-2xl border-2 border-orange-100 font-bold text-blue-800 text-xl'>Đổi 4 phút = 240 giây. <br> a) Quãng đường Tí đi được: 1 x 240 = 240 (m). <br> b) Quãng đường cún con chạy được: 3 x 240 = 720 (m).</div>"
        },
        {
            "id": "145_3",
            "type": "multiple_choice_parts",
            "statement": "Hai anh em xuất phát cùng lúc từ điểm B chạy đến điểm C lấy nước. Người em chạy theo đường màu xanh còn người anh chạy theo đường màu đỏ.",
            "parts": [
                {
                    "question": "a) Mỗi người chạy qua bãi cỏ với vận tốc 4 m/s. Hỏi người anh chạy qua bãi cỏ nhanh hơn người em bao nhiêu giây?",
                    "options": ["26 giây", "27 giây", "28 giây", "25 giây"],
                    "answer": 0
                },
                {
                    "question": "b) Mỗi người chạy qua bãi cát với vận tốc 3 m/s. Hỏi người em chạy qua bãi cát nhanh hơn người anh bao nhiêu giây?",
                    "options": ["29 giây", "30 giây", "31 giây", "32 giây"],
                    "answer": 1
                },
                {
                    "question": "c) Ai đến điểm C trước?",
                    "options": ["Người anh", "Người em", "Hai anh em đến cùng một lúc", "Không đủ dữ kiện"],
                    "answer": 1
                }
            ],
            "title": "Bài 3: Cuộc chạy đua",
            "guidance": "Em hãy tính thời gian của từng người qua mỗi bãi (t = s : v). Sau đó so sánh tổng thời gian t = t(cỏ) + t(cát) của hai anh em.",
            "solution": "<div class='math-solution p-6 bg-sky-50 rounded-2xl border-2 border-sky-100 font-bold text-blue-800 text-xl'>Phân tích: <br> a) Thời gian người anh qua bãi cỏ nhanh hơn người em 26 giây. <br> b) Thời gian người em qua bãi cát nhanh hơn người anh 30 giây. <br> c) Vì 30 giây > 26 giây nên người em nhanh hơn người anh: 30 - 26 = 4 (giây). <br> ➔ Đáp số: <b>Người em</b> đến trước.</div>"
        },
        {
            "id": "145_4",
            "type": "multiple_choice",
            "statement": "Một vận động viên xe đạp đi được 28,5 km trong 1,5 giờ. Hỏi với tốc độ đó, vận động viên đi được quãng đường bao nhiêu ki-lô-mét trong 3 giờ?",
            "options": ["47,5 km", "57 km", "60 km", "50 km"],
            "answer": 1,
            "title": "Bài 4: Vận động viên xe đạp",
            "guidance": "Đầu tiên em tính vận tốc (v = s : t). Sau đó tính quãng đường trong 3 giờ (s = v x 3). Hoặc nhận xét: 3 giờ gấp đôi 1,5 giờ nên quãng đường cũng gấp đôi!",
            "solution": "<div class='math-solution p-6 bg-emerald-50 rounded-2xl border-2 border-emerald-100 font-bold text-blue-800 text-xl'>Cách 1: Vận tốc xe đạp là: 28,5 : 1,5 = 19 (km/h). <br> Quãng đường đi được trong 3 giờ: 19 x 3 = 57 (km). <br> Cách 2: 3 giờ gấp 1,5 giờ số lần là: 3 : 1,5 = 2 (lần). <br> Quãng đường đi được là: 28,5 x 2 = 57 (km). <br> ➔ Đáp số: <b>57 km</b>.</div>"
        }
    ],
    "quizPool": [
        { "question": "Chu vi hình tròn có đường kính d là:", "options": ["d x 3,14", "d : 3,14", "d + 3,14", "d x 3.14 x 2"], "answer": 0 },
        { "question": "Bán kính r = 5km thì đường kính d là:", "options": ["10km", "2,5km", "15km", "5km"], "answer": 0 },
        { "question": "Hai người đi ngược chiều nhau, vận tốc khi gặp nhau là:", "options": ["v1 + v2", "v1 - v2", "v1 x v2", "v1 : v2"], "answer": 0 },
        { "question": "4 phút bằng bao nhiêu giây?", "options": ["240 giây", "120 giây", "400 giây", "60 giây"], "answer": 0 },
        { "question": "v = 1 m/s, đi trong 240 giây được quãng đường:", "options": ["240m", "120m", "480m", "24m"], "answer": 0 },
        { "question": "Vận tốc 60 km/h, chạy 2 giờ được quãng đường là:", "options": ["120 km", "30 km", "62 km", "12 km"], "answer": 0 },
        { "question": "Quãng đường 100km, đi với tốc độ 50km/h mất bao lâu?", "options": ["2 giờ", "5 giờ", "150 giờ", "50 phút"], "answer": 0 },
        { "question": "Công thức tính vận tốc (v) là gì?", "options": ["v = s x t", "v = s : t", "v = t : s", "v = s + t"], "answer": 1 },
        { "question": "Trong cùng một thời gian, nếu vận tốc tăng thì quãng đường sẽ:", "options": ["Tăng", "Giảm", "Không đổi", "Tăng gấp bốn"], "answer": 0 },
        { "question": "Trong cùng một quãng đường, nếu vận tốc tăng thì thời gian sẽ:", "options": ["Tăng", "Giảm", "Không đổi", "Tăng gấp đôi"], "answer": 1 },
        { "question": "Đơn vị nào sau đây KHÔNG phải là đơn vị vận tốc?", "options": ["km/h", "m/s", "km.h", "m/phút"], "answer": 2 },
        { "question": "Vận tốc 36 km/h tương ứng với bao nhiêu m/s?", "options": ["10 m/s", "15 m/s", "20 m/s", "5 m/s"], "answer": 0 },
        { "question": "Một người đi 15km trong 30 phút. Vận tốc là:", "options": ["30 km/h", "45 km/h", "7.5 km/h", "60 km/h"], "answer": 0 },
        { "question": "Xe máy đi 90km với vận tốc 45km/h. Thời gian đi là:", "options": ["2 giờ", "3 giờ", "1.5 giờ", "4 giờ"], "answer": 0 },
        { "question": "Ô tô đi với vận tốc 50km/h trong 2.5 giờ. Quãng đường là:", "options": ["125 km", "100 km", "150 km", "115 km"], "answer": 0 },
        { "question": "Bạn An đi bộ 400m trong 5 phút. Vận tốc An là:", "options": ["80 m/phút", "2000 m/phút", "8 m/phút", "100 m/phút"], "answer": 0 },
        { "question": "Đổi 1.5 giờ ra phút:", "options": ["90 phút", "100 phút", "150 phút", "60 phút"], "answer": 0 },
        { "question": "120 giây bằng bao nhiêu phút?", "options": ["2 phút", "1 phút", "0.5 phút", "3 phút"], "answer": 0 },
        { "question": "Quãng đường 6km, vận tốc 12km/h. Thời gian là:", "options": ["0.5 giờ", "2 giờ", "1.5 giờ", "1 giờ"], "answer": 0 },
        { "question": "Vận tốc con báo săn là 120km/h. Trong 1/2 giờ nó đi được:", "options": ["60 km", "240 km", "40 km", "80 km"], "answer": 0 },
        { "question": "Ai chạy nhanh nhất: A(5m/s), B(15km/h), C(200m/phút)?", "options": ["Người A", "Người B", "Người C", "Cả ba bằng nhau"], "answer": 0 },
        { "question": "Thời gian = 10:30 - 8:15 là bao nhiêu?", "options": ["2 giờ 15 phút", "2 giờ 45 phút", "1 giờ 15 phút", "2 giờ 30 phút"], "answer": 0 },
        { "question": "0.75 giờ bằng bao nhiêu phút?", "options": ["45 phút", "30 phút", "15 phút", "60 phút"], "answer": 0 },
        { "question": "Quãng đường 100m, thời gian 10s. Vận tốc là:", "options": ["10 m/s", "1000 m/s", "1 m/s", "20 m/s"], "answer": 0 },
        { "question": "Nếu v = 60km/h, t = 20 phút. Thì s là:", "options": ["20 km", "1200 km", "3 km", "40 km"], "answer": 0 },
        { "question": "Một người đi 1/4 quãng đường 20km. Tức là đi:", "options": ["5 km", "80 km", "10 km", "4 km"], "answer": 0 },
        { "question": "Công thức s = v x t áp dụng cho chuyển động gì?", "options": ["Chuyển động đều", "Chuyển động biến đổi", "Rơi tự do", "Chuyển động xoay"], "answer": 0 }
    ]
};
window.MATH_BUILDER_METADATA = metadata;

const lesson145 = {
    "topic": "Số đo thời gian",
    "week": "29",
    "period": "145",
    "title": "BÀI 62: LUYỆN TẬP CHUNG (TIẾT 3)",
    "desc": metadata.lessonInfo.desc,
    "content": `
        <div class="theory-section space-y-6 animate-in fade-in slide-in-from-top-10 duration-1000 pt-6">
            <!-- Kiến thức cần nhớ Card (Clean Style) -->
            <div class="p-8 rounded-[2.5rem] bg-white relative overflow-hidden">
                 <h3 class="text-2xl md:text-5xl font-black text-blue-700 flex items-center gap-4 uppercase tracking-tight mb-8 relative z-10">
                    <div class="w-16 h-16 md:w-24 md:h-24 bg-blue-400 border-2 border-blue-700 rounded-2xl flex items-center justify-center text-3xl md:text-6xl">🧠</div>
                    <span class="bg-yellow-200 px-6 py-2 border-2 border-blue-700 -rotate-2">Kiến thức cần nhớ</span>
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
                    <!-- Unit 1: Formula (Bento Cell 1) -->
                    <div class="col-span-12 md:col-span-7 p-8 bg-teal-50 rounded-[2.5rem] border-2 border-blue-700 space-y-6">
                        <h4 class="font-black text-blue-800 border-b-2 border-blue-700 pb-2 flex items-center gap-3 uppercase text-2xl md:text-3xl italic">
                             🚀 Chuyển động đều
                        </h4>
                        <ul class="space-y-6 font-black text-3xl md:text-4xl text-blue-800">
                            <li class="flex items-center gap-4 bg-white p-3 rounded-2xl border-2 border-blue-700 shadow-sm">
                                <span>Vận tốc: <span class="text-blue-600 italic">v = s : t</span></span>
                            </li>
                            <li class="flex items-center gap-4 bg-white p-3 rounded-2xl border-2 border-blue-700 shadow-sm">
                                <span>Quãng đường: <span class="text-blue-600 italic">s = v × t</span></span>
                            </li>
                            <li class="flex items-center gap-4 bg-white p-3 rounded-2xl border-2 border-blue-700 shadow-sm">
                                <span>Thời gian: <span class="text-blue-600 italic">t = s : v</span></span>
                            </li>
                        </ul>
                    </div>

                    <!-- Unit 2: Conversion (Bento Cell 2) -->
                    <div class="col-span-12 md:col-span-5 p-8 bg-blue-50 rounded-[2.5rem] border-2 border-blue-700 space-y-6">
                        <h4 class="font-black text-blue-800 border-b-2 border-blue-700 pb-2 flex items-center gap-3 uppercase text-2xl md:text-3xl italic">
                            ⏱️ Thời gian
                        </h4>
                        <ul class="space-y-6 font-black text-3xl md:text-4xl text-blue-800">
                            <li class="flex items-center gap-4 bg-white p-3 rounded-2xl border-2 border-blue-700">
                                <span>1 giờ = 60 phút</span>
                            </li>
                            <li class="flex items-center gap-4 bg-white p-3 rounded-2xl border-2 border-blue-700">
                                <span>1 phút = 60 giây</span>
                            </li>
                            <li class="text-xl md:text-2xl text-blue-700 bg-white p-3 rounded-2xl border-2 border-dashed border-blue-700">
                                km/h → m/s: <span class="font-black">Chia 3,6</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="mt-8 p-8 bg-yellow-100 rounded-[2rem] border-2 border-blue-700 relative z-10">
                    <p class="text-2xl md:text-4xl font-black text-blue-900 leading-relaxed italic">
                        <span class="text-5xl">⚠️</span> <span class="text-red-600 uppercase tracking-tight mr-2 underline decoration-4">Lưu ý:</span> Đơn vị đo phải <span class="text-blue-700 underline px-2">tương ứng</span> với nhau.
                    </p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-12 md:space-y-16 mt-8">
            <!-- Bài 1: Clean MCQ -->
            <div class="p-8 rounded-[2.5rem] bg-white relative overflow-hidden group">
                <div class="relative z-10">
                    <div class="flex items-start gap-4 mb-8">
                        <span class="w-16 h-16 md:w-20 md:h-20 bg-teal-400 border-2 border-blue-700 text-black rounded-2xl flex items-center justify-center text-4xl md:text-6xl font-black shrink-0">1</span>
                        <p class="flex-1 text-3xl md:text-5xl text-blue-900 font-black leading-tight mt-1 underline decoration-teal-200 decoration-8 underline-offset-4">Chọn câu trả lời đúng.</p>
                    </div>
                    
                    <p class="text-3xl md:text-4xl text-blue-800 font-bold mb-8 leading-relaxed bg-slate-50 p-8 border-2 border-blue-700 rounded-[2rem]">Một hãng tắc-xi (taxi) thử nghiệm tắc-xi bay. Chiếc tắc-xi đó bay vòng quanh thành phố theo một đường tròn bán kính <span class="text-blue-600">5 km</span> với vận tốc <span class="text-blue-600">60 km/h</span>. <br>Hỏi chiếc tắc-xi hoàn thành chuyến bay trong thời gian bao lâu?</p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <button id="btn-check-145-1-a" onclick="window.ans_145_1(0)" class="p-6 bg-white border-2 border-blue-700 rounded-2xl text-2xl md:text-3xl font-black text-blue-900 hover:bg-teal-400 transition-all shadow-sm">A. Khoảng 10 phút</button>
                        <button id="btn-check-145-1-b" onclick="window.ans_145_1(1)" class="p-6 bg-white border-2 border-blue-700 rounded-2xl text-2xl md:text-3xl font-black text-blue-900 hover:bg-teal-400 transition-all shadow-sm">B. Khoảng 30 phút</button>
                        <button id="btn-check-145-1-c" onclick="window.ans_145_1(2)" class="p-6 bg-white border-2 border-blue-700 rounded-2xl text-2xl md:text-3xl font-black text-blue-900 hover:bg-teal-400 transition-all shadow-sm">C. Khoảng 1 giờ</button>
                        <button id="btn-check-145-1-d" onclick="window.ans_145_1(3)" class="p-6 bg-white border-2 border-blue-700 rounded-2xl text-2xl md:text-3xl font-black text-blue-900 hover:bg-teal-400 transition-all shadow-sm">D. Khoảng 45 phút</button>
                    </div>
                </div>
            </div>

            <!-- Bài 2: Clean Fill -->
            <div class="p-8 rounded-[2.5rem] bg-white relative overflow-hidden group">
                <div class="relative z-10">
                    <div class="flex items-start gap-4 mb-8">
                        <span class="w-16 h-16 md:w-20 md:h-20 bg-orange-400 border-2 border-blue-700 text-black rounded-2xl flex items-center justify-center text-4xl md:text-6xl font-black shrink-0">2</span>
                        <p class="flex-1 text-3xl md:text-4xl text-blue-900 font-bold leading-relaxed italic mt-1">Tí bắt đầu đi bộ từ trường về nhà với vận tốc 1 m/s. Cùng lúc đó, sau khi nghe tiếng trống tan trường, cún con cũng vội vã từ nhà chạy đến trường để đón Tí.</p>
                    </div>
                    
                    <div class="space-y-8">
                        <div class="p-8 bg-orange-50 rounded-[2rem] border-2 border-blue-700 space-y-8">
                            <div class="flex flex-col lg:flex-row items-center gap-6 bg-white p-6 rounded-2xl border-2 border-blue-700 shadow-sm">
                                <span class="text-2xl md:text-3xl font-black text-blue-800 lg:flex-1">a) Sau đúng 4 phút thì Tí và cún con gặp nhau. Hỏi lúc ấy Tí đã đi được bao nhiêu mét?</span>
                                <div class="flex items-center gap-4 text-4xl md:text-5xl">
                                    <input type="number" id="ans-145-2a" class="w-36 md:w-48 p-4 rounded-xl border-2 border-blue-700 outline-none font-black text-orange-600 text-center focus:bg-orange-50">
                                    <span class="font-black text-blue-900">m</span>
                                </div>
                            </div>
                            <div class="flex flex-col lg:flex-row items-center gap-6 bg-white p-6 rounded-2xl border-2 border-blue-700 shadow-sm">
                                <span class="text-2xl md:text-3xl font-black text-blue-800 lg:flex-1">b) Biết cún con chạy với vận tốc 3 m/s. Hỏi khi gặp Tí, cún con đã chạy được bao nhiêu mét?</span>
                                <div class="flex items-center gap-4 text-4xl md:text-5xl">
                                    <input type="number" id="ans-145-2b" class="w-36 md:w-48 p-4 rounded-xl border-2 border-blue-700 outline-none font-black text-orange-600 text-center focus:bg-orange-50">
                                    <span class="font-black text-blue-900">m</span>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-end pt-4">
                            <button id="btn-check-145-2" onclick="window.check_145_2()" class="w-28 h-28 bg-orange-400 border-2 border-blue-700 rounded-[2.5rem] font-black text-6xl text-black hover:bg-orange-500 transition-all flex items-center justify-center shadow-md active:translate-y-1">E</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 3: Clean Grid -->
            <div class="p-8 rounded-[2.5rem] bg-sky-50 relative overflow-hidden group">
                <div class="relative z-10">
                    <div class="flex items-start gap-4 mb-8">
                        <span class="w-16 h-16 md:w-20 md:h-20 bg-sky-400 border-2 border-blue-700 text-black rounded-2xl flex items-center justify-center text-4xl md:text-6xl font-black shrink-0">3</span>
                        <div class="flex-1 space-y-4 mt-1">
                            <p class="text-3xl md:text-5xl text-blue-900 font-black leading-tight underline decoration-sky-300 decoration-8 underline-offset-4 uppercase">Chọn câu trả lời đúng.</p>
                            <p class="text-2xl md:text-3xl text-blue-800 font-bold italic">Hai anh em xuất phát cùng lúc từ điểm B chạy đến điểm C lấy nước. Người em chạy theo đường màu xanh còn người anh chạy theo đường màu đỏ.</p>
                        </div>
                    </div>

                    <div class="space-y-8">
                        <!-- Image Cell (Top) -->
                        <div class="bg-white border-2 border-blue-700 rounded-[2.5rem] p-6 shadow-sm">
                             <img src="assets/images/toan/toan_tap_2/145/145-3.png" class="w-full mx-auto w-full h-auto object-contain bg-white rounded-2xl" alt="Bài 3">
                        </div>

                        <!-- Questions Cell (Bottom) -->
                        <div class="space-y-8">
                            <div class="p-8 bg-white border-2 border-blue-700 rounded-[2.5rem] space-y-10 shadow-sm">
                                <!-- Part a -->
                                <div class="space-y-6">
                                    <p class="text-2xl md:text-3xl font-black text-blue-800 bg-yellow-50 p-6 border-l-8 border-sky-400">a) Mỗi người chạy qua bãi cỏ với vận tốc 4 m/s. Hỏi người anh chạy qua bãi cỏ nhanh hơn người em bao nhiêu giây?</p>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                        <button id="btn-check-145-3-a-0" onclick="window.ans_145_3(0, 0)" class="h-full px-4 py-6 rounded-xl border-2 border-blue-700 font-black text-2xl md:text-3xl bg-white hover:bg-sky-400 transition-all text-blue-900 shadow-sm">A. 26 giây</button>
                                        <button id="btn-check-145-3-a-1" onclick="window.ans_145_3(0, 1)" class="h-full px-4 py-6 rounded-xl border-2 border-blue-700 font-black text-2xl md:text-3xl bg-white hover:bg-sky-400 transition-all text-blue-900 shadow-sm">B. 27 giây</button>
                                        <button id="btn-check-145-3-a-2" onclick="window.ans_145_3(0, 2)" class="h-full px-4 py-6 rounded-xl border-2 border-blue-700 font-black text-2xl md:text-3xl bg-white hover:bg-sky-400 transition-all text-blue-900 shadow-sm">C. 28 giây</button>
                                        <button id="btn-check-145-3-a-3" onclick="window.ans_145_3(0, 3)" class="h-full px-4 py-6 rounded-xl border-2 border-blue-700 font-black text-2xl md:text-3xl bg-white hover:bg-sky-400 transition-all text-blue-900 shadow-sm">D. 25 giây</button>
                                    </div>
                                </div>
                                <!-- Part b -->
                                <div class="space-y-6">
                                    <p class="text-2xl md:text-3xl font-black text-blue-800 bg-yellow-50 p-6 border-l-8 border-sky-400">b) Mỗi người chạy qua bãi cát với vận tốc 3 m/s. Hỏi người em chạy qua bãi cát nhanh hơn người anh bao nhiêu giây?</p>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                        <button id="btn-check-145-3-b-0" onclick="window.ans_145_3(1, 0)" class="h-full px-4 py-6 rounded-xl border-2 border-blue-700 font-black text-2xl md:text-3xl bg-white hover:bg-sky-400 transition-all text-blue-900 shadow-sm">A. 29 giây</button>
                                        <button id="btn-check-145-3-b-1" onclick="window.ans_145_3(1, 1)" class="h-full px-4 py-6 rounded-xl border-2 border-blue-700 font-black text-2xl md:text-3xl bg-white hover:bg-sky-400 transition-all text-blue-900 shadow-sm">B. 30 giây</button>
                                        <button id="btn-check-145-3-b-2" onclick="window.ans_145_3(1, 2)" class="h-full px-4 py-6 rounded-xl border-2 border-blue-700 font-black text-2xl md:text-3xl bg-white hover:bg-sky-400 transition-all text-blue-900 shadow-sm">C. 31 giây</button>
                                        <button id="btn-check-145-3-b-3" onclick="window.ans_145_3(1, 3)" class="h-full px-4 py-6 rounded-xl border-2 border-blue-700 font-black text-2xl md:text-3xl bg-white hover:bg-sky-400 transition-all text-blue-900 shadow-sm">D. 32 giây</button>
                                    </div>
                                </div>
                                <!-- Part c -->
                                <div class="space-y-6">
                                    <p class="text-2xl md:text-3xl font-black text-blue-800 bg-yellow-50 p-6 border-l-8 border-sky-400">c) Ai đến điểm C trước?</p>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                        <button id="btn-check-145-3-c-0" onclick="window.ans_145_3(2, 0)" class="h-full px-4 py-6 rounded-xl border-2 border-blue-700 font-black text-2xl md:text-3xl bg-white hover:bg-sky-400 transition-all text-blue-900 shadow-sm">A. Người anh</button>
                                        <button id="btn-check-145-3-c-1" onclick="window.ans_145_3(2, 1)" class="h-full px-4 py-6 rounded-xl border-2 border-blue-700 font-black text-2xl md:text-3xl bg-white hover:bg-sky-400 transition-all text-blue-900 shadow-sm">B. Người em</button>
                                        <button id="btn-check-145-3-c-2" onclick="window.ans_145_3(2, 2)" class="h-full px-4 py-6 rounded-xl border-2 border-blue-700 font-black text-2xl md:text-3xl bg-white hover:bg-sky-400 transition-all text-blue-900 shadow-sm">C. Hai anh em</button>
                                        <button id="btn-check-145-3-c-3" onclick="window.ans_145_3(2, 3)" class="h-full px-4 py-6 rounded-xl border-2 border-blue-700 font-black text-2xl md:text-3xl bg-white hover:bg-sky-400 transition-all text-blue-900 shadow-sm">D. Không biết</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 4: Clean MCQ (Bike) -->
            <div class="p-8 rounded-[2.5rem] bg-emerald-50 relative overflow-hidden group">
                <div class="relative z-10">
                    <div class="flex items-start gap-4 mb-8">
                        <span class="w-16 h-16 md:w-20 md:h-20 bg-emerald-400 border-2 border-blue-700 text-black rounded-2xl flex items-center justify-center text-4xl md:text-6xl font-black shrink-0">4</span>
                        <p class="flex-1 text-3xl md:text-5xl text-blue-900 font-black leading-tight mt-1 underline decoration-emerald-200 decoration-8 underline-offset-4">Chọn câu trả lời đúng.</p>
                    </div>
                    
                    <p class="text-3xl md:text-4xl text-blue-800 font-bold mb-8 leading-relaxed bg-white p-8 border-2 border-blue-700 rounded-[2.5rem] shadow-sm">Một vận động viên xe đạp đi được <span class="text-blue-600">28,5 km</span> trong <span class="text-blue-600">1,5 giờ</span>. <br>Hỏi với vận tốc đó, vận động viên đi được quãng đường bao nhiêu ki-lô-mét trong <span class="text-emerald-600">3 giờ</span>?</p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <button id="btn-check-145-4-a" onclick="window.ans_145_4(0)" class="p-6 bg-white border-2 border-blue-700 rounded-2xl text-2xl md:text-3xl font-black text-blue-900 hover:bg-emerald-400 transition-all shadow-sm">A. 47,5 km</button>
                        <button id="btn-check-145-4-b" onclick="window.ans_145_4(1)" class="p-6 bg-white border-2 border-blue-700 rounded-2xl text-2xl md:text-3xl font-black text-blue-900 hover:bg-emerald-400 transition-all shadow-sm">B. 57 km</button>
                        <button id="btn-check-145-4-c" onclick="window.ans_145_4(2)" class="p-6 bg-white border-2 border-blue-700 rounded-2xl text-2xl md:text-3xl font-black text-blue-900 hover:bg-emerald-400 transition-all shadow-sm">C. 60 km</button>
                        <button id="btn-check-145-4-d" onclick="window.ans_145_4(3)" class="p-6 bg-white border-2 border-blue-700 rounded-2xl text-2xl md:text-3xl font-black text-blue-900 hover:bg-emerald-400 transition-all shadow-sm">D. 50 km</button>
                    </div>
                </div>
            </div>
        </div>

        <script>
        window.ans_145_1 = function(idx) {
            const meta = window.MATH_BUILDER_METADATA.exercises[0];
            const isCorrect = (idx === meta.answer);
            const choices = ['A. Khoảng 10 phút', 'B. Khoảng 30 phút', 'C. Khoảng 1 giờ', 'D. Khoảng 45 phút'];
            const studentAns = choices[idx];
            
            window.showMathFeedback(isCorrect, meta.solution.replace('text-xl', 'text-3xl'), studentAns, meta.guidance, meta.solution);
            
            const btnIds = ['btn-check-145-1-a', 'btn-check-145-1-b', 'btn-check-145-1-c', 'btn-check-145-1-d'];
            if (window.submitMathLesson) {
                window.submitMathLesson('Bài 1: Tắc-xi bay', isCorrect ? 100 : 0, btnIds[idx], 0, 1, isCorrect ? 1 : 0);
            }
        };

        window.check_145_2 = function() {
            const a = document.getElementById('ans-145-2a').value;
            const b = document.getElementById('ans-145-2b').value;
            const meta = window.MATH_BUILDER_METADATA.exercises[1];
            const isCorrect = (a === meta.answer[0] && b === meta.answer[1]);
            const studentAns = 'a) ' + (a || '?') + ' m, b) ' + (b || '?') + ' m';
            
            window.showMathFeedback(isCorrect, meta.solution.replace('text-xl', 'text-3xl'), studentAns, meta.guidance, meta.solution);
            
            const q1 = (a === meta.answer[0]);
            const q2 = (b === meta.answer[1]);
            const correctCount = (q1 ? 1 : 0) + (q2 ? 1 : 0);
            const score = Math.round((correctCount / 2) * 100);
            if (window.submitMathLesson) {
                window.submitMathLesson('Bài 2: Tí và cún con', score, 'btn-check-145-2', 0, 2, correctCount);
            }
        };

        window.ans_145_3 = function(partIdx, optIdx) {
            const meta = window.MATH_BUILDER_METADATA.exercises[2];
            const isCorrect = (optIdx === meta.parts[partIdx].answer);
            const choices = ['A', 'B', 'C', 'D'];
            const studentAns = choices[optIdx];
            
            const feedbackSols = [
                "<div class='math-solution p-6 bg-sky-50 rounded-2xl border-2 border-sky-100 font-bold text-blue-800 text-3xl'>Chênh lệch bãi cỏ: (940 - 836) : 4 = 26 (giây). <br> => Chọn <b>26 giây</b>.</div>",
                "<div class='math-solution p-6 bg-sky-50 rounded-2xl border-2 border-sky-100 font-bold text-blue-800 text-3xl'>Chênh lệch bãi cát: (3090 - 3000) : 3 = 30 (giây). <br> => Chọn <b>30 giây</b>.</div>",
                meta.solution.replace('text-xl', 'text-3xl')
            ];
            
            window.showMathFeedback(isCorrect, feedbackSols[partIdx], studentAns, meta.guidance, feedbackSols[partIdx]);
            
            const btnPrefixes = ['btn-check-145-3-a-', 'btn-check-145-3-b-', 'btn-check-145-3-c-'];
            if (window.submitMathLesson) {
                window.submitMathLesson('Bài 3: Cuộc chạy đua - Câu ' + String.fromCharCode(97 + partIdx), isCorrect ? 100 : 0, btnPrefixes[partIdx] + optIdx, 0, 1, isCorrect ? 1 : 0);
            }
        };

        window.ans_145_4 = function(idx) {
            const meta = window.MATH_BUILDER_METADATA.exercises[3];
            const isCorrect = (idx === meta.answer);
            const choices = ['A. 47,5 km', 'B. 57 km', 'C. 60 km', 'D. 50 km'];
            const studentAns = choices[idx];
            
            window.showMathFeedback(isCorrect, meta.solution.replace('text-xl', 'text-3xl'), studentAns, meta.guidance, meta.solution);
            
            const btnIds = ['btn-check-145-4-a', 'btn-check-145-4-b', 'btn-check-145-4-c', 'btn-check-145-4-d'];
            if (window.submitMathLesson) {
                window.submitMathLesson('Bài 4: Vận động viên xe đạp', isCorrect ? 100 : 0, btnIds[idx], 0, 1, isCorrect ? 1 : 0);
            }
        };

        </script>
    `,
    "quizPool": [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "metadata": metadata
};

window.lesson145 = lesson145;
export { lesson145 };

