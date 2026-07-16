const metadata = {
    "lessonInfo": {
        "period": "143",
        "week": "29",
        "topic": "Số đo thời gian",
        "title": "BÀI 62: LUYỆN TẬP CHUNG (TIẾT 1)",
        "desc": "Luyện tập các phép tính về thời gian, đổi đơn vị vận tốc và giải toán chuyển động."
    },
    "exercises": [
        {
            "id": "143_1a",
            "type": "fill_single",
            "title": "Bài 1a: Cộng số đo thời gian",
            "statement": "9 phút 12 giây + 3 phút 38 giây = ... phút ... giây",
            "guidance": "Em hãy cộng giây với giây, phút với phút nhé!",
            "solution": `<div class='math-solution space-y-4 p-8 bg-blue-50 rounded-[3rem] border-2 border-blue-100 shadow-sm'>
                <div class='font-black text-3xl text-blue-800 underline mb-4'>Bài giải</div>
                <div class='font-bold text-2xl md:text-3xl text-slate-800 space-y-4 leading-relaxed'>
                    <p>9 phút 12 giây + 3 phút 38 giây = (9+3) phút (12+38) giây = 12 phút 50 giây.</p>
                </div>
                <div class='font-black text-3xl pt-4 border-t border-blue-200 mt-4 text-slate-800 italic'>
                    Đáp số: 12 phút 50 giây.
                </div>
            </div>`
        },
        {
            "id": "143_1b",
            "type": "fill_single",
            "title": "Bài 1b: Trừ số đo thời gian",
            "statement": "7 giờ 15 phút - 2 giờ 30 phút = ... giờ ... phút",
            "guidance": "Vì 15 phút bé hơn 30 phút, em hãy mượn 1 giờ (60 phút) từ 7 giờ nhé. 7 giờ 15 phút = 6 giờ 75 phút.",
            "solution": `<div class='math-solution space-y-4 p-8 bg-blue-50 rounded-[3rem] border-2 border-blue-100 shadow-sm'>
                <div class='font-black text-3xl text-blue-800 underline mb-4'>Bài giải</div>
                <div class='font-bold text-2xl md:text-3xl text-slate-800 space-y-4 leading-relaxed'>
                    <p>7 giờ 15 phút = 6 giờ 75 phút.</p>
                    <p>6 giờ 75 phút - 2 giờ 30 phút = 4 giờ 45 phút.</p>
                </div>
                <div class='font-black text-3xl pt-4 border-t border-blue-200 mt-4 text-slate-800 italic'>
                    Đáp số: 4 giờ 45 phút.
                </div>
            </div>`
        },
        {
            "id": "143_1c",
            "type": "fill_single",
            "title": "Bài 1c: Nhân số đo thời gian",
            "statement": "2 tuần 5 ngày x 7 = ... tuần",
            "guidance": "Em hãy nhân từng đơn vị với 7. Sau đó đổi 35 ngày sang tuần (35 ngày = 5 tuần) và cộng vào kết quả nhé!",
            "solution": `<div class='math-solution space-y-4 p-8 bg-emerald-50 rounded-[3rem] border-2 border-emerald-100 shadow-sm'>
                <div class='font-black text-3xl text-emerald-800 underline mb-4'>Bài giải</div>
                <div class='font-bold text-2xl md:text-3xl text-slate-800 space-y-4 leading-relaxed'>
                    <p>2 tuần 5 ngày × 7 = 14 tuần 35 ngày.</p>
                    <p>Vì 35 ngày = 5 tuần nên kết quả là 14 + 5 = 19 tuần.</p>
                </div>
                <div class='font-black text-3xl pt-4 border-t border-emerald-200 mt-4 text-slate-800 italic'>
                    Đáp số: 19 tuần.
                </div>
            </div>`
        },
        {
            "id": "143_1d",
            "type": "fill_single",
            "title": "Bài 1d: Chia số đo thời gian",
            "statement": "9 năm 4 tháng : 8 = ... năm ... tháng",
            "guidance": "9 năm chia 8 được 1 năm dư 1 năm. Đổi 1 năm dư sang tháng (12 tháng), cộng với 4 tháng thành 16 tháng. Sau đó lấy 16 tháng chia 8.",
            "solution": `<div class='math-solution space-y-4 p-8 bg-blue-50 rounded-[3rem] border-2 border-blue-100 shadow-sm'>
                <div class='font-black text-3xl text-blue-800 underline mb-4'>Bài giải</div>
                <div class='font-bold text-2xl md:text-3xl text-slate-800 space-y-4 leading-relaxed'>
                    <p>9 năm : 8 = 1 năm (dư 1 năm).</p>
                    <p>1 năm dư = 12 tháng. 12 + 4 = 16 tháng.</p>
                    <p>16 tháng : 8 = 2 tháng.</p>
                </div>
                <div class='font-black text-3xl pt-4 border-t border-blue-200 mt-4 text-slate-800 italic'>
                    Đáp số: 1 năm 2 tháng.
                </div>
            </div>`
        },
        {
            "id": "143_2a",
            "type": "fill_single",
            "title": "Bài 2a: Đổi đơn vị vận tốc",
            "statement": "24 km/h = ... m/s",
            "guidance": "Để đổi từ km/h sang m/s, em lấy số đó chia cho 3,6 nhé!",
            "solution": `<div class='math-solution space-y-4 p-8 bg-orange-50 rounded-[3rem] border-2 border-orange-100 shadow-sm'>
                <div class='font-black text-3xl text-orange-800 underline mb-4'>Bài giải</div>
                <div class='font-bold text-2xl md:text-3xl text-slate-800 space-y-4 leading-relaxed'>
                    <p>24 : 3,6 = 6,666...</p>
                    <p>Đáp số: 6,6 hoặc 6,7 (m/s).</p>
                </div>
            </div>`
        },
        {
            "id": "143_2b",
            "type": "fill_single",
            "title": "Bài 2b: Đổi đơn vị vận tốc",
            "statement": "207 km/h = ... m/s",
            "guidance": "Em hãy lấy 207 chia cho 3,6 để ra đơn vị m/s.",
            "solution": `<div class='math-solution space-y-4 p-8 bg-amber-50 rounded-[3rem] border-2 border-amber-100 shadow-sm'>
                <div class='font-black text-3xl text-amber-800 underline mb-4'>Bài giải</div>
                <div class='font-bold text-2xl md:text-3xl text-slate-800 space-y-4 leading-relaxed'>
                    <p>207 : 3,6 = 57,5 (m/s).</p>
                </div>
            </div>`
        },
        {
            "id": "143_3",
            "type": "fill_single",
            "title": "Bài 3: Khoảng cách còn lại",
            "statement": "Bến B cách bến A 115 km. Một chiếc tàu đi từ bến A đến bến B với vận tốc 22 km/h. Hỏi sau khi khởi hành 3 giờ 30 phút, tàu còn cách bến B bao nhiêu ki-lô-mét?",
            "guidance": "Đầu tiên em đổi 3 giờ 30 phút sang giờ (3,5 giờ). Tính quãng đường tàu đã đi (v x t), sau đó lấy tổng quãng đường AB trừ đi quãng đường đã đi.",
            "solution": `<div class='math-solution space-y-4 p-8 bg-emerald-50 rounded-[3rem] border-4 border-emerald-100 shadow-inner'>
                <div class='font-black text-3xl text-emerald-800 underline mb-4'>Bài giải</div>
                <div class='font-bold text-2xl md:text-3xl text-slate-800 space-y-4 leading-relaxed'>
                    <p>Đổi 3 giờ 30 phút = 3,5 giờ.</p>
                    <p>Qu quãng đường tàu đã đi được là:<br>
                       <span class='text-emerald-700 font-black italic'>22 × 3,5 = 77 (km)</span>
                    </p>
                    <p>Tàu còn cách bến B số ki-lô-mét là:<br>
                       <span class='text-emerald-700 font-black italic'>115 – 77 = 38 (km)</span>
                    </p>
                </div>
                <div class='font-black text-3xl pt-4 border-t border-emerald-200 mt-4 text-slate-800 italic'>
                    Đáp số: 38 km.
                </div>
            </div>`
        },
        {
            "id": "143_4",
            "type": "multiple_choice",
            "title": "Bài 4: Đoàn tàu vào hầm",
            "statement": "Một đoàn tàu hoả dài 200 m bắt đầu vào đường hầm. Vậy sau bao lâu thì đuôi tàu chui hoàn toàn vào đường hầm, biết tàu đi với vận tốc 20 m/s?",
            "guidance": "Đuôi tàu chui hoàn toàn vào hầm có nghĩa là tàu đã đi được quãng đường đúng bằng chiều dài của chính nó (200m). Em hãy tính thời gian t = s : v.",
            "solution": `<div class='math-solution space-y-4 p-8 bg-slate-50 rounded-[3rem] border-4 border-slate-200 shadow-inner'>
                <div class='font-black text-3xl text-slate-800 underline mb-4'>Bài giải</div>
                <div class='font-bold text-2xl md:text-3xl text-slate-800 space-y-4 leading-relaxed'>
                    <p>Quãng đường tàu đi để đuôi tàu chui hoàn toàn vào hầm chính bằng chiều dài đoàn tàu là 200 m.</p>
                    <p>Thời gian để đuôi tàu chui hoàn toàn vào hầm là:<br>
                       <span class='text-blue-700 font-black italic'>200 : 20 = 10 (giây)</span>
                    </p>
                </div>
                <div class='font-black text-3xl pt-4 border-t border-slate-200 mt-4 text-slate-800 italic'>
                    Đáp số: 10 giây (Đáp án B).
                </div>
            </div>`
        }
    ],
    "quizPool": [
        {
            "question": "9 phút 12 giây + 3 phút 38 giây = ?",
            "options": ["12 phút 40 giây", "12 phút 50 giây", "13 phút 10 giây", "12 phút 30 giây"],
            "answer": 1
        },
        {
            "question": "7 giờ 15 phút - 2 giờ 30 phút = ?",
            "options": ["4 giờ 45 phút", "5 giờ 15 phút", "4 giờ 15 phút", "5 giờ 45 phút"],
            "answer": 0
        },
        {
            "question": "2 tuần 5 ngày x 7 = ?",
            "options": ["14 tuần 35 ngày", "19 tuần", "18 tuần 5 ngày", "20 tuần"],
            "answer": 1
        },
        {
            "question": "9 năm 4 tháng : 8 = ?",
            "options": ["1 năm 1 tháng", "1 năm 2 tháng", "1 năm 4 tháng", "1 năm 6 tháng"],
            "answer": 1
        },
        {
            "question": "9 phút 36 giây : 4 = ?",
            "options": ["2 phút 24 giây", "2 phút 40 giây", "2 phút 15 giây", "2 phút 9 giây"],
            "answer": 0
        },
        {
            "question": "Vận tốc 36 km/giờ bằng bao nhiêu m/giây?",
            "options": ["10 m/giây", "6 m/giây", "15 m/giây", "20 m/giây"],
            "answer": 0
        },
        {
            "question": "Vận tốc 21,6 km/giờ bằng bao nhiêu m/giây?",
            "options": ["5 m/giây", "6 m/giây", "7 m/giây", "8 m/giây"],
            "answer": 1
        },
        {
            "question": "Xe máy đi với vận tốc 36 km/giờ trong 1,5 giờ. Quãng đường đi được là:",
            "options": ["54 km", "45 km", "60 km", "48 km"],
            "answer": 0
        },
        {
            "question": "Ô tô đi quãng đường 120 km với vận tốc 50 km/giờ. Thời gian đi là:",
            "options": ["2,4 giờ", "2,2 giờ", "2,5 giờ", "2 giờ 30 phút"],
            "answer": 0
        },
        {
            "question": "Đổi 1,2 giờ sang phút ta được:",
            "options": ["72 phút", "80 phút", "60 phút", "120 phút"],
            "answer": 0
        },
        {
            "question": "Đổi 2,5 phút sang giây ta được:",
            "options": ["150 giây", "120 giây", "200 giây", "250 giây"],
            "answer": 0
        },
        {
            "question": "(3 giờ 15 phút + 2 giờ 45 phút) x 2 = ?",
            "options": ["10 giờ", "12 giờ", "6 giờ", "14 giờ"],
            "answer": 1
        },
        {
            "question": "Trong công thức tính thời gian t = s : v, nếu s tăng gấp đôi và v không đổi thì t sẽ:",
            "options": ["Tăng gấp đôi", "Giảm một nửa", "Không đổi", "Tăng gấp bốn"],
            "answer": 0
        },
        {
            "question": "Xe đạp đi với vận tốc 15 km/giờ trong 20 phút. Quãng đường đi được là:",
            "options": ["5 km", "3 km", "10 km", "7,5 km"],
            "answer": 0
        },
        {
            "question": "1/4 giờ bằng bao nhiêu phút?",
            "options": ["15 phút", "20 phút", "10 phút", "25 phút"],
            "answer": 0
        }
    ]
};
window.MATH_BUILDER_METADATA = metadata;

const lesson143 = {
    "topic": "Số đo thời gian",
    "week": "29",
    "period": "143",
    "title": "BÀI 62: LUYỆN TẬP CHUNG (TIẾT 1)",
    "desc": "Luyện tập các phép tính về thời gian, đổi đơn vị vận tốc và giải toán chuyển động.",
    "content": `
        <div class="theory-section space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 pt-6">

            <!-- Kiến thức cần nhớ Card -->
            <div class="glass-card p-5 md:p-8 rounded-[2rem] bg-white shadow-xl border border-blue-50 relative overflow-hidden group">
                <div class="absolute -right-20 -top-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
                <h3 class="text-xl md:text-3xl font-black text-blue-700 flex items-center gap-4 uppercase tracking-tight mb-6 relative z-10">
                    <div class="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-2xl flex items-center justify-center shadow-inner text-2xl md:text-4xl animate-pulse">🧠</div>
                    <span>Kiến thức cần nhớ</span>
                </h3>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
                    <!-- Unit 1: Formula -->
                    <div class="p-6 bg-blue-50/50 rounded-[1.5rem] border-2 border-blue-100 space-y-4 shadow-inner">
                        <h4 class="font-black text-blue-800 border-b-2 border-blue-200 pb-2 flex items-center gap-3 uppercase text-xl md:text-2xl italic tracking-tighter">
                             🚀 Chuyển động đều
                        </h4>
                        <ul class="space-y-4 font-bold text-2xl md:text-3xl text-slate-700">
                            <li class="flex items-center gap-3">
                                <span class="w-3 h-3 bg-blue-500 rounded-full shrink-0"></span>
                                <span>Vận tốc: <span class="text-blue-700 font-black italic">v = s : t</span></span>
                            </li>
                            <li class="flex items-center gap-3">
                                <span class="w-3 h-3 bg-blue-500 rounded-full shrink-0"></span>
                                <span>Quãng đường: <span class="text-blue-700 font-black italic">s = v × t</span></span>
                            </li>
                            <li class="flex items-center gap-3">
                                <span class="w-3 h-3 bg-blue-500 rounded-full shrink-0"></span>
                                <span>Thời gian: <span class="text-blue-700 font-black italic">t = s : v</span></span>
                            </li>
                        </ul>
                    </div>

                    <!-- Unit 2: Conversion -->
                    <div class="p-6 bg-blue-50/50 rounded-[1.5rem] border-2 border-blue-100 space-y-4 shadow-inner">
                        <h4 class="font-black text-blue-800 border-b-2 border-blue-200 pb-2 flex items-center gap-3 uppercase text-xl md:text-2xl italic tracking-tighter">
                            ⏱️ Số đo thời gian
                        </h4>
                        <ul class="space-y-4 font-bold text-2xl md:text-3xl text-slate-700">
                            <li class="flex items-center gap-3">
                                <span class="w-3 h-3 bg-blue-500 rounded-full shrink-0"></span>
                                <span>1 giờ = 60 phút</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <span class="w-3 h-3 bg-blue-500 rounded-full shrink-0"></span>
                                <span>1 phút = 60 giây</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <span class="w-3 h-3 bg-blue-500 rounded-full shrink-0"></span>
                                <span>Đổi <span class="text-blue-700 font-black italic">km/h</span> → <span class="text-blue-700 font-black italic">m/s</span>: Chia 3,6</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="mt-6 p-6 bg-amber-50 rounded-[1.5rem] border-2 border-dashed border-amber-200 relative z-10">
                    <p class="text-xl md:text-3xl font-bold text-slate-800 leading-relaxed italic">
                        <span class="text-3xl">⚠️</span> <span class="text-amber-700 font-black uppercase tracking-tight mr-2">Lưu ý:</span> Khi tính toán, các đại lượng phải có <span class="text-red-600 underline decoration-2 underline-offset-4">đơn vị đo tương ứng</span> với nhau.
                    </p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-12 md:space-y-24 mt-12 pb-24">
            <!-- Bài 1 -->
            <div class="glass-card p-5 md:p-8 rounded-[2rem] bg-white shadow-xl transition-all border border-blue-50">
                <div class="flex items-start gap-4 mb-6">
                    <span class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl md:text-3xl shadow-lg shrink-0">1</span>
                    <div class="flex-1 text-slate-800 text-2xl md:text-3xl font-black uppercase italic tracking-tighter border-b-2 border-blue-100 pb-1">Tính</div>
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <!-- a -->
                    <div class="p-6 bg-blue-50/50 rounded-[1.5rem] border-2 border-blue-100 space-y-4 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-slate-700 italic mb-2">a) 9 phút 12 giây + 3 phút 38 giây</p>
                        <div class="flex flex-wrap items-center gap-3">
                            <input type="number" id="ans-143-1a-min" class="w-20 md:w-28 p-3 rounded-xl border-2 border-white text-center font-black text-2xl text-blue-600 outline-none shadow-lg" placeholder="?">
                            <span class="text-lg font-black text-slate-400 uppercase">phút</span>
                            <input type="number" id="ans-143-1a-sec" class="w-20 md:w-28 p-3 rounded-xl border-2 border-white text-center font-black text-2xl text-blue-600 outline-none shadow-lg" placeholder="?">
                            <span class="text-lg font-black text-slate-400 uppercase">giây</span>
                        </div>
                    </div>
                    <!-- b -->
                    <div class="p-6 bg-blue-50/50 rounded-[1.5rem] border-2 border-blue-100 space-y-4 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-slate-700 italic mb-2">b) 7 giờ 15 phút – 2 giờ 30 phút</p>
                        <div class="flex flex-wrap items-center gap-3">
                            <input type="number" id="ans-143-1b-h" class="w-20 md:w-28 p-3 rounded-xl border-2 border-white text-center font-black text-2xl text-blue-600 outline-none shadow-lg" placeholder="?">
                            <span class="text-lg font-black text-slate-400 uppercase">giờ</span>
                            <input type="number" id="ans-143-1b-min" class="w-20 md:w-28 p-3 rounded-xl border-2 border-white text-center font-black text-2xl text-blue-600 outline-none shadow-lg" placeholder="?">
                            <span class="text-lg font-black text-slate-400 uppercase">phút</span>
                        </div>
                    </div>
                    <!-- c -->
                    <div class="p-6 bg-emerald-50/50 rounded-[1.5rem] border-2 border-emerald-100 space-y-4 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-slate-700 italic mb-2">c) 2 tuần 5 ngày × 7</p>
                        <div class="flex items-center gap-3">
                            <input type="number" id="ans-143-1c" class="w-28 md:w-36 p-3 rounded-xl border-2 border-white text-center font-black text-2xl text-emerald-600 outline-none shadow-lg" placeholder="?">
                            <span class="text-lg font-black text-slate-400 uppercase">tuần</span>
                        </div>
                    </div>
                    <!-- d -->
                    <div class="p-6 bg-blue-50/50 rounded-[1.5rem] border-2 border-blue-100 space-y-4 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-slate-700 italic mb-2">d) 9 năm 4 tháng : 8</p>
                        <div class="flex flex-wrap items-center gap-3">
                            <input type="number" id="ans-143-1d-y" class="w-20 md:w-28 p-3 rounded-xl border-2 border-white text-center font-black text-2xl text-blue-600 outline-none shadow-lg" placeholder="?">
                            <span class="text-lg font-black text-slate-400 uppercase">năm</span>
                            <input type="number" id="ans-143-1d-m" class="w-20 md:w-28 p-3 rounded-xl border-2 border-white text-center font-black text-2xl text-blue-600 outline-none shadow-lg" placeholder="?">
                            <span class="text-lg font-black text-slate-400 uppercase">tháng</span>
                        </div>
                    </div>
                </div>

                <div class="mt-6 flex justify-center md:justify-end">
                    <button id="btn-check-143-1" onclick="window.check_143_1()" class="w-16 h-16 bg-blue-600 text-white rounded-2xl font-black text-2xl flex items-center justify-center shadow-lg hover:bg-blue-700 active:scale-95 transition-all outline-none">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div class="glass-card p-5 md:p-8 rounded-[2rem] bg-white shadow-xl border border-orange-50">
                <div class="flex items-start gap-4 mb-6">
                    <span class="w-12 h-12 md:w-16 md:h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center font-black text-xl md:text-3xl shadow-lg shrink-0">2</span>
                    <div class="flex-1 text-slate-800 text-2xl md:text-3xl font-black uppercase italic tracking-tighter border-b-2 border-orange-100 pb-1">Số ?</div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="p-6 bg-orange-50 rounded-[1.5rem] border-2 border-orange-100 text-center space-y-3">
                        <span class="text-2xl md:text-3xl font-black text-slate-700 italic block">a) 24 km/h = ... m/s</span>
                        <div class="flex items-center justify-center gap-4">
                            <input type="text" id="ans-143-2a" class="w-28 md:w-36 p-3 rounded-xl border-2 border-white text-center font-black text-2xl text-orange-600 shadow-lg" placeholder="?">
                            <span class="text-lg font-black text-slate-400">m/s</span>
                        </div>
                    </div>
                    <div class="p-6 bg-amber-50 rounded-[1.5rem] border-2 border-amber-100 text-center space-y-3">
                        <span class="text-2xl md:text-3xl font-black text-slate-700 italic block">b) 207 km/h = ... m/s</span>
                        <div class="flex items-center justify-center gap-4">
                            <input type="text" id="ans-143-2b" class="w-28 md:w-36 p-3 rounded-xl border-2 border-white text-center font-black text-2xl text-amber-600 shadow-lg" placeholder="?">
                            <span class="text-lg font-black text-slate-400">m/s</span>
                        </div>
                    </div>
                </div>
                <div class="mt-6 flex justify-center md:justify-end">
                    <button id="btn-check-143-2" onclick="window.check_143_2()" class="w-16 h-16 bg-orange-600 text-white rounded-2xl font-black text-2xl flex items-center justify-center shadow-lg hover:bg-orange-700 transition-all outline-none">E</button>
                </div>
            </div>

            <!-- Bài 3 -->
            <div class="glass-card p-5 md:p-8 rounded-[2rem] bg-white shadow-xl relative overflow-hidden group border border-emerald-50">
                <div class="flex items-start gap-4 mb-6">
                    <span class="w-12 h-12 md:w-16 md:h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-black text-xl md:text-3xl shadow-lg shrink-0">3</span>
                    <div class="flex-1 text-slate-800 text-2xl md:text-3xl font-black uppercase italic tracking-tighter border-b-2 border-emerald-100 pb-1">Khoảng cách bến bãi</div>
                </div>
                
                <div class="flex flex-col lg:flex-row gap-8 items-center">
                    <div class="w-full lg:w-3/5 space-y-6">
                        <div class="p-6 bg-emerald-50 rounded-[1.5rem] border-2 border-emerald-100 shadow-inner">
                            <p class="text-xl md:text-3xl text-slate-700 leading-relaxed font-bold italic">
                                Bến B cách bến A <span class="text-emerald-700 font-black underline">115 km</span>. Một chiếc tàu đi từ bến A đến bến B với vận tốc <span class="text-emerald-700 font-black">22 km/h</span>. <br><br>Hỏi sau khi khởi hành <span class="text-emerald-700 font-black outline-text">3 giờ 30 phút</span>, tàu còn cách bến B bao nhiêu ki-lô-mét?
                            </p>
                        </div>
                        <div class="bg-white p-5 rounded-[1.5rem] border-2 border-emerald-50 shadow-xl flex flex-col md:flex-row items-center gap-6">
                            <div class="flex-1 w-full space-y-2">
                                <label class="text-sm font-black text-slate-500 uppercase tracking-widest pl-2">Kết Quả</label>
                                <input type="number" id="ans-143-3" class="w-full p-4 border-2 border-emerald-100 rounded-xl bg-emerald-50/30 text-center font-black text-3xl text-emerald-600 outline-none focus:border-emerald-500 shadow-inner" placeholder="?">
                            </div>
                            <span class="text-2xl font-black text-slate-400">KM</span>
                            <button id="btn-check-143-3" onclick="window.check_143_3()" class="w-16 h-16 bg-emerald-600 text-white rounded-2xl font-black text-2xl flex items-center justify-center shadow-lg hover:bg-emerald-700 transition-all outline-none">E</button>
                        </div>
                    </div>
                    <div class="w-full lg:w-2/5">
                        <div class="relative group rounded-[1.5rem] overflow-hidden border-4 border-white shadow-xl transition-transform duration-700 hover:rotate-1">
                            <img src="assets/images/toan/toan_tap_2/143/143-3.png" alt="Tàu cập bến" class="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 4 -->
            <div class="glass-card p-5 md:p-8 rounded-[2rem] bg-blue-50/30 shadow-xl border border-blue-50">
                <div class="flex items-start gap-4 mb-6">
                    <span class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl md:text-3xl shadow-lg shrink-0">4</span>
                    <div class="flex-1 text-slate-800 text-2xl md:text-3xl font-black uppercase italic tracking-tighter border-b-2 border-blue-100 pb-1">Đoàn tàu vào hầm</div>
                </div>

                <div class="space-y-6">
                    <div class="p-6 bg-white rounded-[1.5rem] shadow-xl border-2 border-blue-50 italic">
                        <p class="text-2xl md:text-3xl text-slate-700 leading-relaxed font-bold">
                            Một đoàn tàu hoả dài <span class="text-blue-600 font-black">200 m</span> bắt đầu vào đường hầm. Vậy sau bao lâu thì đuôi tàu chui hoàn toàn vào đường hầm, biết tàu đi với vận tốc <span class="text-blue-600 font-black">20 m/s</span>?
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button id="btn-opt-143-4-0" onclick="window.check_143_4(0)" class="p-4 bg-white border-2 border-transparent rounded-xl text-xl md:text-2xl font-black text-slate-600 hover:border-blue-500 hover:text-blue-600 shadow-lg transition-all active:scale-95">A. 12 giây</button>
                        <button id="btn-opt-143-4-1" onclick="window.check_143_4(1)" class="p-4 bg-white border-2 border-transparent rounded-xl text-xl md:text-2xl font-black text-slate-600 hover:border-emerald-500 hover:text-emerald-600 shadow-lg transition-all active:scale-95">B. 10 giây</button>
                        <button id="btn-opt-143-4-2" onclick="window.check_143_4(2)" class="p-4 bg-white border-2 border-transparent rounded-xl text-xl md:text-2xl font-black text-slate-600 hover:border-rose-500 hover:text-rose-600 shadow-lg transition-all active:scale-95">C. 4 giây</button>
                    </div>

                    <div class="relative group rounded-[1.5rem] overflow-hidden border-4 border-white shadow-xl">
                        <img src="assets/images/toan/toan_tap_2/143/143-4.png" alt="Đoàn tàu tốc hành" class="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105">
                    </div>
                </div>
            </div>

            <script>
            window.check_143_1 = function() {
                const subA_min = document.getElementById('ans-143-1a-min').value;
                const subA_sec = document.getElementById('ans-143-1a-sec').value;
                const subB_h = document.getElementById('ans-143-1b-h').value;
                const subB_min = document.getElementById('ans-143-1b-min').value;
                const subC = document.getElementById('ans-143-1c').value;
                const subD_y = document.getElementById('ans-143-1d-y').value;
                const subD_m = document.getElementById('ans-143-1d-m').value;

                const meta = window.MATH_BUILDER_METADATA.exercises;
                const correctA = (subA_min === "12" && subA_sec === "50");
                const correctB = (subB_h === "4" && subB_min === "45");
                const correctC = (subC === "19");
                const correctD = (subD_y === "1" && subD_m === "2");

                const correctCount = (correctA ? 1 : 0) + (correctB ? 1 : 0) + (correctC ? 1 : 0) + (correctD ? 1 : 0);
                const isAllCorrect = (correctCount === 4);
                const score = Math.round((correctCount / 4) * 100);
                const sol = '<div class="space-y-6 text-2xl">' +
                    '<p class="font-black text-blue-700 uppercase border-b-2 border-blue-100 pb-2 italic">Kết quả chi tiết:</p>' +
                    '<div class="grid grid-cols-1 gap-4 font-bold text-slate-700">' +
                        '<div class="p-4 bg-blue-50 rounded-2xl">a) 12 phút 50 giây</div>' +
                        '<div class="p-4 bg-blue-50 rounded-2xl">b) 4 giờ 45 phút</div>' +
                        '<div class="p-4 bg-emerald-50 rounded-2xl">c) 19 tuần</div>' +
                        '<div class="p-4 bg-blue-50 rounded-2xl">d) 1 năm 2 tháng</div>' +
                    '</div>' +
                '</div>';
                const studentAns = 'a) ' + subA_min + ':' + subA_sec + ', b) ' + subB_h + ':' + subB_min + ', c) ' + subC + ', d) ' + subD_y + ':' + subD_m;
                window.showMathFeedback(isAllCorrect, sol, studentAns, "Em hãy bình tĩnh kiểm tra lại từng phép tính nhé!", sol);
                
                if (window.submitMathLesson) {
                    window.submitMathLesson('Bài 1: Luyện tập tính toán', score, "btn-check-143-1", 0, 4, correctCount);
                }
            };

            window.check_143_2 = function() {
                const ansA = document.getElementById('ans-143-2a').value.trim().replace(',', '.');
                const ansB = document.getElementById('ans-143-2b').value.trim().replace(',', '.');
                const meta = window.MATH_BUILDER_METADATA.exercises;
                
                const isCorrectA = ["6.6", "6.7", "6,6", "6,7"].includes(ansA);
                const isCorrectB = (ansB === "57.5" || ansB === "57,5");
                
                const correctCount = (isCorrectA ? 1 : 0) + (isCorrectB ? 1 : 0);
                const isAllCorrect = (correctCount === 2);
                const score = Math.round((correctCount / 2) * 100);
                const sol = '<div class="space-y-4 text-2xl font-bold">' +
                    '<p>a) 24 : 3,6 ≈ 6,7 (m/s)</p>' +
                    '<p>b) 207 : 3,6 = 57,5 (m/s)</p>' +
                '</div>';
                const studentAns = 'a) ' + ansA + ', b) ' + ansB;
                window.showMathFeedback(isAllCorrect, sol, studentAns, "Nhớ lấy số đo km/h chia cho 3,6 để đổi sang m/s nhé!", sol);
                
                if (window.submitMathLesson) {
                    const reportContent = 'Bài 2. Đổi đơn vị vận tốc: a) ' + ansA + ' m/s, b) ' + ansB + ' m/s';
                    window.submitMathLesson(reportContent, score, "btn-check-143-2", 0, 2, correctCount);
                }
            };

            window.check_143_3 = function() {
                const ans = document.getElementById('ans-143-3').value;
                const metadata = window.MATH_BUILDER_METADATA.exercises[6];
                const isCorrect = (ans === "38");
                window.showMathFeedback(isCorrect, metadata.solution, ans || '?', metadata.guidance, metadata.solution);
                
                if (window.submitMathLesson) {
                    const reportContent = 'Bài 3. Khoảng cách còn lại: Đáp án ' + ans + ' km';
                    window.submitMathLesson(reportContent, isCorrect ? 100 : 0, "btn-check-143-3", 0, 1, isCorrect ? 1 : 0);
                }
            };

            window.check_143_4 = function(idx) {
                const metadata = window.MATH_BUILDER_METADATA.exercises[7];
                const isCorrect = (idx === 1);
                const studentAns = (idx === 0 ? 'A' : idx === 1 ? 'B' : idx === 2 ? 'C' : 'D');
                window.showMathFeedback(isCorrect, metadata.solution, studentAns, metadata.guidance, metadata.solution);
                
                if (window.submitMathLesson) {
                    const reportContent = 'Bài 4. Đoàn tàu vào hầm: Học sinh chọn phương án ' + (idx === 0 ? 'A' : idx === 1 ? 'B' : idx === 2 ? 'C' : 'D');
                    window.submitMathLesson(reportContent, isCorrect ? 100 : 0, "btn-check-143-4", 0, 1, isCorrect ? 1 : 0);
                }
            };

            </script>
        </div>

    `,
    "quizPool": [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "metadata": metadata
};

window.lesson143 = lesson143;
export { lesson143 };

