const metadata = {
    "lessonInfo": {
        "period": "142",
        "week": "29",
        "topic": "Số đo thời gian",
        "title": "BÀI 61: THỰC HÀNH TÍNH TOÁN VÀ ƯỚC LƯỢNG VỀ VẬN TỐC, QUÃNG ĐƯỜNG, THỜI GIAN TRONG CHUYỂN ĐỘNG ĐỀU (TIẾT 2)",
        "desc": "Thực hành tính toán vận tốc, quãng đường, thời gian thông qua bài toán 'Chuyến thăm trường bạn'."
    },
    "exercises": [
        {
            "id": "142_1",
            "type": "calculation",
            "title": "Bài 1: So sánh con đường",
            "statement": "Hỏi xe đi con đường nào sẽ tốn ít thời gian hơn và thời gian dự định đi là bao lâu?",
            "guidance": "Em hãy tính thời gian đi trên mỗi con đường bằng cách lấy Quãng đường chia cho Vận tốc dự định nhé! (t = s : v)",
            "solution": `<div class='math-solution space-y-4 p-8 bg-amber-50 rounded-[3rem] border-2 border-amber-100 shadow-sm'>
                <div class='font-black text-3xl text-amber-800 underline mb-4'>Bài giải</div>
                <div class='font-bold text-2xl md:text-3xl text-slate-800 space-y-4 leading-relaxed'>
                    <p>Thời gian dự định đi con đường thứ nhất là:<br>
                       <span class='text-amber-700 font-black italic'>180 : 80 = 2,25 (giờ)</span> = 2 giờ 15 phút.
                    </p>
                    <p>Thời gian dự định đi con đường thứ hai là:<br>
                       <span class='text-amber-700 font-black italic'>160 : 50 = 3,2 (giờ)</span> = 3 giờ 12 phút.
                    </p>
                    <p>Vì 2 giờ 15 phút < 3 giờ 12 phút nên đi con đường thứ nhất sẽ tốn ít thời gian hơn.</p>
                </div>
                <div class='font-black text-3xl pt-4 border-t border-amber-200 mt-4 text-slate-800 italic'>
                    Đáp số: Đường 1 nhanh hơn; 2 giờ 15 phút và 3 giờ 12 phút.
                </div>
            </div>`
        },
        {
            "id": "142_2",
            "type": "calculation",
            "title": "Bài 2: Điểm nghỉ ngơi",
            "statement": "Sau khi đi được 1 giờ với đúng vận tốc dự định (đường 1), đoàn dừng lại nghỉ ngơi. Hỏi điểm nghỉ ngơi cách nơi đến bao nhiêu ki-lô-mét?",
            "guidance": "Trước hết em hãy tính quãng đường đoàn đã đi được trong 1 giờ. Sau đó lấy tổng quãng đường (180 km) trừ đi quãng đường đã đi để tìm khoảng cách còn lại nhé!",
            "solution": `<div class='math-solution space-y-4 p-8 bg-amber-50 rounded-[3rem] border-2 border-amber-100 shadow-sm'>
                <div class='font-black text-3xl text-amber-800 underline mb-4'>Bài giải</div>
                <div class='font-bold text-2xl md:text-3xl text-slate-800 space-y-4 leading-relaxed'>
                    <p>Quãng đường đoàn đã đi được trong 1 giờ là:<br>
                       <span class='text-amber-700 font-black italic'>80 × 1 = 80 (km)</span>
                    </p>
                    <p>Điểm nghỉ ngơi cách nơi đến số ki-lô-mét là:<br>
                       <span class='text-amber-700 font-black italic'>180 – 80 = 100 (km)</span>
                    </p>
                </div>
                <div class='font-black text-3xl pt-4 border-t border-amber-200 mt-4 text-slate-800 italic'>
                    Đáp số: 100 km.
                </div>
            </div>`
        },
        {
            "id": "142_3",
            "type": "calculation",
            "title": "Bài 3: Vận tốc trung bình",
            "statement": "Sau khi nghỉ ngơi xong, xe đi quãng đường còn lại hết 1 giờ 36 phút. Em hãy tính vận tốc trung bình mà xe đã đi hết quãng đường đó (theo đơn vị km/h).",
            "guidance": "Em cần đổi 1 giờ 36 phút sang đơn vị giờ bằng cách lấy 36 chia cho 60. Sau đó lấy quãng đường còn lại (đã tính ở bài 2) chia cho thời gian vừa đổi nhé!",
            "solution": `<div class='math-solution space-y-4 p-8 bg-amber-50 rounded-[3rem] border-2 border-amber-100 shadow-sm'>
                <div class='font-black text-3xl text-amber-800 underline mb-4'>Bài giải</div>
                <div class='font-bold text-2xl md:text-3xl text-slate-800 space-y-4 leading-relaxed'>
                    <p>Đổi: 1 giờ 36 phút = 1,6 giờ.</p>
                    <p>Vận tốc trung bình của xe trên quãng đường còn lại là:<br>
                       <span class='text-amber-700 font-black italic'>100 : 1,6 = 62,5 (km/h)</span>
                    </p>
                </div>
                <div class='font-black text-3xl pt-4 border-t border-amber-200 mt-4 text-slate-800 italic'>
                    Đáp số: 62,5 km/h.
                </div>
            </div>`
        }
    ],
    "quizPool": [
        {
            "question": "Xe thứ nhất đi được 120km trong 2 giờ. Xe thứ hai đi được 150km trong 3 giờ. Xe nào đi nhanh hơn?",
            "options": ["Xe thứ nhất", "Xe thứ hai", "Bằng nhau", "Không so sánh được"],
            "answer": 0
        },
        {
            "question": "Trong Bài 1, thời gian đi của đường thứ nhất là bao nhiêu?",
            "options": ["2 giờ 15 phút", "2,25 giờ", "Bao gồm cả 2 đáp án", "2,5 giờ"],
            "answer": 2
        },
        {
            "question": "Trong Bài 1, thời gian đi của đường thứ hai là bao nhiêu?",
            "options": ["3 giờ 12 phút", "3,2 giờ", "Bao gồm cả 2 đáp án", "3,5 giờ"],
            "answer": 2
        },
        {
            "question": "Trong Bài 1, quãng đường nào dài hơn?",
            "options": ["Đường 1", "Đường 2", "Bằng nhau", "Hơn kém 10km"],
            "answer": 0
        },
        {
            "question": "Nếu v = 60 km/h, s = 90 km thì t bằng bao nhiêu?",
            "options": ["1,5 giờ", "1 giờ 30 phút", "Cả 2 đều đúng", "1,3 giờ"],
            "answer": 2
        },
        {
            "question": "Đổi 1,6 giờ sang đơn vị giờ và phút?",
            "options": ["1 giờ 6 phút", "1 giờ 36 phút", "1 giờ 60 phút", "1 giờ 30 phút"],
            "answer": 1
        },
        {
            "question": "Đổi 2,25 giờ sang đơn vị giờ và phút?",
            "options": ["2 giờ 15 phút", "2 giờ 25 phút", "2 giờ 4 phút", "2 giờ 5 phút"],
            "answer": 0
        },
        {
            "question": "Đoàn xe dừng lại nghỉ ngơi lúc đã đi được bao lâu?",
            "options": ["1 giờ", "2 giờ", "30 phút", "45 phút"],
            "answer": 0
        },
        {
            "question": "Quãng đường còn lại sau khi nghỉ ngơi là bao nhiêu?",
            "options": ["100 km", "80 km", "180 km", "50 km"],
            "answer": 0
        },
        {
            "question": "Vận tốc trung bình ở quãng đường sau khi nghỉ ngơi là bao nhiêu?",
            "options": ["62,5 km/h", "80 km/h", "50 km/h", "60 km/h"],
            "answer": 0
        },
        {
            "question": "t = s : v là công thức tính gì?",
            "options": ["Thời gian", "Vận tốc", "Quãng đường", "Diện tích"],
            "answer": 0
        },
        {
            "question": "Đơn vị của vận tốc thường gặp là gì?",
            "options": ["km/h", "m/s", "Cả 2 đều đúng", "km"],
            "answer": 2
        },
        {
            "question": "Muốn tính quãng đường ta làm thế nào?",
            "options": ["v x t", "s : t", "s : v", "v : t"],
            "answer": 0
        },
        {
            "question": "Muốn tính vận tốc ta làm thế nào?",
            "options": ["s : t", "v x t", "s : v", "t : s"],
            "answer": 0
        },
        {
            "question": "1 giờ 30 phút bằng bao nhiêu giờ?",
            "options": ["1,5 giờ", "1,3 giờ", "1,33 giờ", "1,2 giờ"],
            "answer": 0
        }
    ]
};
window.MATH_BUILDER_METADATA = metadata;

export const lesson142 = {
    "topic": "Số đo thời gian",
    "week": "29",
    "period": "142",
    "title": "BÀI 61: THỰC HÀNH TÍNH TOÁN VÀ ƯỚC LƯỢNG VỀ VẬN TỐC, QUÃNG ĐƯỜNG, THỜI GIAN TRONG CHUYỂN ĐỘNG ĐỀU (TIẾT 2)",
    "desc": "Thực hành tính toán vận tốc, quãng đường, thời gian thông qua bài toán 'Chuyến thăm trường bạn'.",
    "content": `
        <div class="theory-section space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 pt-8">

            <!-- Discovery Header -->
            <div class="glass-card p-5 md:p-8 rounded-[2rem] bg-white shadow-xl relative overflow-hidden group border border-orange-50">
                <div class="absolute -right-20 -top-20 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-50 transition-transform duration-1000 group-hover:scale-125"></div>
                <div class="relative z-10 flex flex-col md:flex-row items-center gap-6">
                    <div class="w-20 h-20 md:w-24 md:h-24 bg-orange-600 text-white rounded-[1.5rem] flex items-center justify-center text-4xl md:text-5xl shadow-inner border border-white/30">🤝</div>
                    <div class="flex-1 text-center md:text-left space-y-2">
                        <p class="text-xl md:text-3xl text-slate-700 leading-relaxed font-bold italic">
                            Trường em tổ chức chuyến thăm một trường bạn ở tỉnh khác. <br class="hidden md:block">
                            Lớp em cũng tham gia chuyến đi này.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-6 mt-6 pb-20">
            <!-- Illustration Card at top -->
            <div class="glass-card p-5 md:p-8 rounded-[2rem] bg-white shadow-xl border border-orange-50 relative overflow-hidden group">
                <div class="relative z-10 text-center">
                    <img src="assets/images/toan/toan_tap_2/142/142_1.png" alt="Sơ đồ chuyến thăm trường bạn" class="w-full w-full mx-auto rounded-[1.5rem] shadow-2xl border-4 border-white transition-transform duration-700 group-hover:scale-[1.01]">
                    
                    <div class="mt-6 space-y-6 text-left">
                        <div class="flex items-center gap-4 mb-4">
                            <span class="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shrink-0">1</span>
                            <p class="text-2xl md:text-3xl font-black text-slate-800">Từ trường em đến trường bạn có hai con đường:</p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Đường thứ nhất -->
                            <div class="p-6 rounded-[1.5rem] bg-amber-50 border-2 border-amber-200 shadow-lg relative overflow-hidden group/path">
                                <div class="relative z-10 space-y-3">
                                    <div class="flex items-center gap-3 border-b border-amber-200 pb-2">
                                        <span class="text-2xl">🛣️</span>
                                        <h5 class="text-2xl font-black text-amber-800 uppercase italic">Con đường thứ nhất</h5>
                                    </div>
                                    <div class="space-y-2 pt-2">
                                        <p class="text-xl md:text-2xl font-bold text-slate-700 flex items-center gap-3">
                                            Dài: <span class="font-black text-amber-700 text-3xl">180 km</span>
                                        </p>
                                        <p class="text-xl md:text-2xl font-bold text-slate-700 flex items-center gap-3">
                                            Vận tốc: <span class="font-black text-amber-700 text-3xl">80 km/h</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- Đường thứ hai -->
                            <div class="p-6 rounded-[1.5rem] bg-sky-50 border-2 border-sky-200 shadow-lg relative overflow-hidden group/path">
                                <div class="relative z-10 space-y-3">
                                    <div class="flex items-center gap-3 border-b border-sky-200 pb-2">
                                        <span class="text-2xl">🛣️</span>
                                        <h5 class="text-2xl font-black text-sky-800 uppercase italic">Con đường thứ hai</h5>
                                    </div>
                                    <div class="space-y-2 pt-2">
                                        <p class="text-xl md:text-2xl font-bold text-slate-700 flex items-center gap-3">
                                            Dài: <span class="font-black text-sky-700 text-3xl">160 km</span>
                                        </p>
                                        <p class="text-xl md:text-2xl font-bold text-slate-700 flex items-center gap-3">
                                            Vận tốc: <span class="font-black text-sky-700 text-3xl">50 km/h</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="p-4 bg-slate-50 rounded-[1.5rem] border-2 border-slate-200 text-center">
                            <p class="text-xl md:text-2xl font-black text-slate-800 italic">
                                Hỏi xe đi con đường nào sẽ tốn ít thời gian hơn và thời gian dự định đi là bao lâu?
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 1 -->
            <div class="glass-card p-5 md:p-8 rounded-[2rem] bg-white shadow-xl border border-orange-50 transition-all hover:shadow-2xl">
                <div class="flex items-start gap-4 mb-6">
                    <span class="w-12 h-12 md:w-16 md:h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center font-black text-xl md:text-3xl shadow-inner shrink-0">1</span>
                    <p class="text-2xl md:text-3xl text-slate-700 font-bold leading-relaxed">
                        Hỏi xe đi con đường nào sẽ tốn ít thời gian hơn và thời gian dự định đi là bao lâu?
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <!-- Đường 1 -->
                    <div class="p-6 bg-amber-50 rounded-[1.5rem] border border-amber-100 space-y-4 shadow-inner">
                        <h5 class="text-2xl font-black text-amber-800 uppercase italic border-b border-amber-200 pb-2">Đường 1</h5>
                        <div class="space-y-2">
                            <label class="block text-xl font-black text-slate-600">Thời gian (t₁):</label>
                            <div class="flex items-center gap-3">
                                <input type="text" id="ans-142-1-t1" class="w-full p-3 border-2 border-white rounded-xl bg-white text-center font-black text-2xl text-amber-600 outline-none focus:border-amber-400 shadow-sm" placeholder="?">
                                <span class="text-xl font-black text-slate-400 uppercase">giờ</span>
                            </div>
                        </div>
                    </div>

                    <!-- Đường 2 -->
                    <div class="p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 space-y-4 shadow-inner">
                        <h5 class="text-2xl font-black text-slate-800 uppercase italic border-b border-slate-200 pb-2">Đường 2</h5>
                        <div class="space-y-2">
                            <label class="block text-xl font-black text-slate-600">Thời gian (t₂):</label>
                            <div class="flex items-center gap-3">
                                <input type="text" id="ans-142-1-t2" class="w-full p-3 border-2 border-white rounded-xl bg-white text-center font-black text-2xl text-slate-600 outline-none focus:border-amber-400 shadow-sm" placeholder="?">
                                <span class="text-xl font-black text-slate-400 uppercase">giờ</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-6 bg-white rounded-[1.5rem] border-2 border-orange-50 shadow-inner mb-6 text-center">
                    <p class="text-2xl font-black text-slate-800 mb-4 italic">Xe đi con đường nào nhanh hơn?</p>
                    <div class="flex flex-wrap items-center justify-center gap-4">
                        <label class="flex items-center gap-3 p-4 rounded-xl bg-orange-100/50 cursor-pointer border-2 border-transparent has-[:checked]:border-orange-500 transition-all">
                            <input type="radio" name="route-fast" value="1" class="w-6 h-6 accent-orange-600">
                            <span class="text-2xl font-black text-orange-900 uppercase">Đường 1</span>
                        </label>
                        <label class="flex items-center gap-3 p-4 rounded-xl bg-slate-100/50 cursor-pointer border-2 border-transparent has-[:checked]:border-orange-500 transition-all">
                            <input type="radio" name="route-fast" value="2" class="w-6 h-6 accent-orange-600">
                            <span class="text-2xl font-black text-slate-900 uppercase">Đường 2</span>
                        </label>
                    </div>
                </div>

                <div class="flex justify-center md:justify-end">
                    <button onclick="window.check_142_1()" class="w-16 h-16 bg-orange-600 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg hover:bg-orange-700 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div class="glass-card p-5 md:p-8 rounded-[2rem] bg-white shadow-xl border border-orange-50 transition-all hover:shadow-2xl">
                <div class="flex items-start gap-4 mb-6">
                    <span class="w-12 h-12 md:w-16 md:h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center font-black text-xl md:text-3xl shadow-inner shrink-0">2</span>
                    <p class="text-2xl md:text-3xl text-slate-700 font-bold leading-relaxed">
                        Sau khi đi được <span class="text-orange-600 underline px-1">1 giờ</span> với đúng vận tốc dự định (đường 1), đoàn dừng lại nghỉ ngơi. Điểm nghỉ ngơi cách nơi đến bao nhiêu km?
                    </p>
                </div>

                <div class="p-6 bg-orange-50/50 rounded-[1.5rem] border-2 border-orange-100 mb-6 w-full mx-auto space-y-4">
                    <div class="flex items-center gap-4">
                        <input type="text" id="ans-142-2" class="w-full p-4 border-2 border-white rounded-xl bg-white text-center font-black text-3xl text-orange-600 outline-none focus:border-orange-500 shadow-lg" placeholder="?">
                        <span class="text-2xl font-black text-slate-500 shrink-0 uppercase">km</span>
                    </div>
                </div>

                <div class="flex justify-center md:justify-end">
                    <button onclick="window.check_142_2()" class="w-16 h-16 bg-orange-600 text-white rounded-2xl font-black text-2xl shadow-lg hover:bg-orange-700 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 3 -->
            <div class="glass-card p-5 md:p-8 rounded-[2rem] bg-white shadow-xl border border-orange-50 transition-all hover:shadow-2xl">
                <div class="flex items-start gap-4 mb-6">
                    <span class="w-12 h-12 md:w-16 md:h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center font-black text-xl md:text-3xl shadow-inner shrink-0">3</span>
                    <p class="text-2xl md:text-3xl text-slate-700 font-bold leading-relaxed">
                        Xe đi quãng đường còn lại hết <span class="text-orange-600 underline px-1">1 giờ 36 phút</span>. Em hãy tính vận tốc trung bình mà xe đã đi hết quãng đường đó (km/h).
                    </p>
                </div>

                <div class="p-6 bg-orange-50/50 rounded-[1.5rem] border-2 border-orange-100 mb-6 w-full mx-auto space-y-4">
                    <div class="flex items-center gap-4">
                        <input type="text" id="ans-142-3" class="w-full p-4 border-2 border-white rounded-xl bg-white text-center font-black text-3xl text-orange-600 outline-none focus:border-orange-500 shadow-lg" placeholder="?">
                        <span class="text-2xl font-black text-slate-500 shrink-0 uppercase">km/h</span>
                    </div>
                </div>

                <div class="flex justify-center md:justify-end">
                    <button onclick="window.check_142_3()" class="w-16 h-16 bg-orange-600 text-white rounded-2xl font-black text-2xl shadow-lg hover:bg-orange-700 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <script>
            window.check_142_1 = function() {
                const t1 = document.getElementById('ans-142-1-t1').value.trim().replace(',', '.');
                const t2 = document.getElementById('ans-142-1-t2').value.trim().replace(',', '.');
                const route = document.querySelector('input[name="route-fast"]:checked')?.value;
                const metadata = window.MATH_BUILDER_METADATA.exercises[0];

                const q1 = (t1 === "2.25");
                const q2 = (t2 === "3.2");
                const q3 = (route === "1");
                const correctCount = (q1 ? 1 : 0) + (q2 ? 1 : 0) + (q3 ? 1 : 0);
                const isCorrect = (correctCount === 3);
                const score = Math.round((correctCount / 3) * 100);
                const reportContent = \`Bài 1. So sánh con đường: t1=\${t1}, t2=\${t2}, Đường \${route}.\`;

                if (window.submitMathLesson) {
                    window.submitMathLesson(reportContent, score, "check_142_1_btn", 0, 3, correctCount);
                }
                
                const khens = ["Tuyệt vời!", "Rất tốt!", "Chính xác!", "Em giỏi lắm!"];
                const khen = khens[Math.floor(Math.random() * khens.length)];
                
                window.showMathFeedback(isCorrect, metadata.solution, ans || '?', metadata.guidance, metadata.solution);
            };

            window.check_142_2 = function() {
                const ans = document.getElementById('ans-142-2').value.trim();
                const metadata = window.MATH_BUILDER_METADATA.exercises[1];
                const isCorrect = (ans === "100");
                const score = isCorrect ? 100 : 0;
                const reportContent = \`Bài 2. Điểm nghỉ ngơi: Đáp số \${ans} km.\`;

                if (window.submitMathLesson) {
                    window.submitMathLesson(reportContent, score, "check_142_2_btn", 0, 1, isCorrect ? 1 : 0);
                }

                const khen = "Em tính toán rất nhanh và đúng!";
                window.showMathFeedback(isCorrect, metadata.solution, ans || '?', metadata.guidance, metadata.solution);
            };

            window.check_142_3 = function() {
                const ans = document.getElementById('ans-142-3').value.trim().replace(',', '.');
                const metadata = window.MATH_BUILDER_METADATA.exercises[2];
                const isCorrect = (ans === "62.5");
                const score = isCorrect ? 100 : 0;
                const reportContent = \`Bài 3. Vận tốc trung bình: v_tb = \${ans} km/h.\`;

                if (window.submitMathLesson) {
                    window.submitMathLesson(reportContent, score, "check_142_3_btn", 0, 1, isCorrect ? 1 : 0);
                }

                const khen = "Thật ấn tượng! Em đã hoàn thành thử thách này!";
                window.showMathFeedback(isCorrect, metadata.solution, ans || '?', metadata.guidance, metadata.solution);
            };

            </script>
        </div>
    `,
    "quizPool": [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10)
};

window.lesson142 = lesson142;

/* --- MATH_BUILDER_METADATA ---
${JSON.stringify(metadata, null, 4)}
--- END_METADATA --- */

