import './cube3d.js';
const metadata = {
    "lessonInfo": {
        "period": "124",
        "week": "25",
        "topic": "Hình học và Đo lường",
        "title": "Bài 53. Thể tích của hình lập phương (tiết 1)",
        "desc": "Tính thể tích hình lập phương V = a × a × a và vận dụng giải toán."
    },
    "exercises": [
        {
            "id": "124_1",
            "type": "table",
            "statement": "Hoàn thành bảng tính thể tích cho các hình lập phương dưới đây:",
            "data": [
                ["Cạnh (a)", "10 cm", "2,5 dm", "0,4 m"],
                ["Thể tích (V)", "?", "?", "?"]
            ],
            "answers": ["1000", "15.625", "0.064"]
        },
        {
            "id": "124_2",
            "type": "fill_in_blank",
            "statement": "Một chiếc bánh bông lan HHCN đáy vuông cạnh 12 cm, cao 6 cm. a) Tính thể tích bánh. b) Đã cắt một miếng bánh LP cạnh 6 cm. Tính thể tích phần còn lại.",
            "subQuestions": [
                { "id": "124-2-ans", "answer": "648", "unit": "cm³" }
            ],
            "image": "assets/images/toan/toan_tap_2/124/124-b2-cake.webp"
        },
        {
            "id": "124_3",
            "type": "mcq_group",
            "statement": "Chọn câu trả lời đúng.",
            "subQuestions": [
                { "id": "124-3a", "question": "a) Mai cần bỏ đi bao nhiêu hình lập phương nhỏ để nhận được hình như của Rô-bốt?", "options": ["12 hình", "10 hình", "8 hình", "6 hình"], "answer": "10 hình" },
                { "id": "124-3b", "question": "b) Nếu mỗi hình lập phương nhỏ cạnh 2 cm thì thể tích hình của Rô-bốt là bao nhiêu?", "options": ["96 cm³", "72 cm³", "64 cm³", "32 cm³"], "answer": "64 cm³" }
            ],
            "image": "assets/images/toan/toan_tap_2/124/124-b3-mairobot.webp"
        }
    ],
    "quizPool": [
        { "question": "Công thức tính thể tích hình lập phương cạnh a là?", "options": ["V = a × a", "V = a × a × a", "V = a × a × 6", "V = a × 4"], "answer": 1, "level": "easy" },
        { "question": "HLP cạnh 3 cm. Thể tích là?", "options": ["9 cm³", "18 cm³", "27 cm³", "54 cm³"], "answer": 2, "level": "easy" },
        { "question": "HLP cạnh 5 cm. Thể tích là?", "options": ["15 cm³", "25 cm³", "125 cm³", "50 cm³"], "answer": 2, "level": "easy" },
        { "question": "HLP cạnh 10 cm. Thể tích là?", "options": ["100 cm³", "600 cm³", "1000 cm³", "10000 cm³"], "answer": 2, "level": "medium" },
        { "question": "HLP có V = 64 cm³. Cạnh của nó là?", "options": ["2 cm", "4 cm", "8 cm", "16 cm"], "answer": 1, "level": "medium" },
        { "question": "Bánh HHCN đáy 12x12 cm, cao 6 cm. V_bánh?", "options": ["72 cm³", "432 cm³", "864 cm³", "1728 cm³"], "answer": 2, "level": "medium" },
        { "question": "HLP cạnh 2 cm. Thể tích là?", "options": ["4 cm³", "6 cm³", "8 cm³", "12 cm³"], "answer": 2, "level": "easy" },
        { "question": "Xếp 8 HLP nhỏ cạnh 2 cm. Tổng thể tích là?", "options": ["16 cm³", "32 cm³", "48 cm³", "64 cm³"], "answer": 3, "level": "medium" },
        { "question": "Gấp cạnh HLP lên 2 lần, V tăng?", "options": ["2 lần", "4 lần", "6 lần", "8 lần"], "answer": 3, "level": "hard" },
        { "question": "Khối Rubik 27 khối LP nhỏ 1cm³. Cạnh khối rubik là?", "options": ["3 cm", "9 cm", "27 cm", "6 cm"], "answer": 0, "level": "hard" },
        { "question": "HLP cạnh 1 dm bằng bao nhiêu cm³?", "options": ["10", "100", "1000", "10000"], "answer": 2, "level": "medium" },
        { "question": "Hộp HLP cạnh 8cm. Xếp được bao nhiêu khối LP cạnh 2cm?", "options": ["8", "16", "32", "64"], "answer": 3, "level": "hard" },
        { "question": "Stp = 150 cm². Thể tích HLP là?", "options": ["25 cm³", "75 cm³", "125 cm³", "150 cm³"], "answer": 2, "level": "hard" },
        { "question": "Cạnh 0,1m. Thể tích?", "options": ["1 dm³", "1 cm³", "10 cm³", "100 cm³"], "answer": 0, "level": "hard" },
        { "question": "Thể tích HLP 8 cm³. Cạnh là?", "options": ["2 cm", "4 cm", "8 cm", "1 cm"], "answer": 0, "level": "easy" }
    ]
};

export const lesson124 = {
    ...metadata.lessonInfo,
    "content": `
        <div class="theory-section space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 text-left">
            <div class="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div class="flex items-center gap-8 relative z-10">
                    <div class="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/30 text-3xl md:text-4xl shadow-lg">🎯</div>
                    <div>
                        <h3 class="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">Mục tiêu bài học</h3>
                        <p class="text-xl font-bold opacity-90 italic">Biết quy tắc và công thức tính thể tích hình lập phương V = a × a × a.</p>
                    </div>
                </div>
            </div>

            <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl overflow-hidden relative">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div class="space-y-6">
                        <div class="flex items-center gap-4">
                            <span class="bg-amber-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl md:text-3xl shadow-lg italic">?</span>
                            <h4 class="text-3xl md:text-4xl font-black text-blue-900 uppercase italic text-left">Khám phá</h4>
                        </div>
                        <p class="text-xl md:text-2xl font-bold text-slate-700 italic border-l-8 border-blue-500 pl-6 bg-blue-50 py-6 rounded-r-3xl leading-relaxed">
                            "Hình lập phương có 3 kích thước: dài, rộng, cao đều bằng nhau."
                        </p>
                        <div class="bg-rose-600 p-8 rounded-3xl text-white text-center shadow-xl">
                            <p class="text-2xl md:text-3xl font-black uppercase tracking-widest opacity-80 mb-2">Công thức</p>
                            <p class="text-3xl md:text-5xl font-black italic tracking-wide">V = a × a × a</p>
                        </div>
                    </div>
                    <div class="relative group cursor-pointer inline-block mx-auto">
                        <img src="assets/images/toan/toan_tap_2/124/124-khampha.webp" alt="Khám phá" class="w-full max-w-[550px] h-auto rounded-[40px] shadow-2xl border-8 border-white transform group-hover:rotate-1 transition-all duration-500">
                        <div class="absolute bottom-6 right-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <button onclick="window.openKhamPhaModal124(); event.stopPropagation();" class="w-20 h-20 bg-amber-500 hover:bg-amber-600 text-white rounded-3xl font-black shadow-2xl flex items-center justify-center transform active:scale-90 transition-all text-2xl md:text-3xl hover:shadow-amber-200/50 hover:shadow-2xl" title="Mô phỏng 3D">
                                3D
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 💥 MODAL 3D FULLSCREEN 💥 -->
            <div id="modal-124-khampha" class="fixed inset-0 z-[9999] bg-slate-900/95 hidden flex-col items-center justify-center opacity-0 transition-opacity duration-300 backdrop-blur-md p-4" onclick="window.closeKhamPhaModal124()">
                <div class="bg-blue-50 w-[96%] w-full h-[94vh] max-h-[1000px] rounded-[40px] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative flex flex-col" onclick="event.stopPropagation()">
                    <!-- Header -->
                    <div class="bg-blue-600 bg-gradient-to-r from-blue-700 to-blue-600 text-white p-5 flex justify-between items-center shrink-0 shadow-lg z-20 relative">
                        <h3 class="text-3xl md:text-4xl font-black uppercase tracking-tight flex items-center gap-4">
                            <span class="bg-white/20 p-2 rounded-2xl">🧊</span> Khám phá thể tích 3D
                        </h3>
                        <button onclick="window.closeKhamPhaModal124()" class="w-14 h-14 bg-white/20 hover:bg-rose-500 rounded-full flex items-center justify-center transition-all shadow-md active:scale-90">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                    <!-- Body -->
                    <div class="flex-grow flex flex-col p-4 md:p-6 gap-4 relative">
                        <!-- Left: 3D Simulator -->
                        <div class="flex-grow flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-blue-950 p-2 md:p-6 rounded-[32px] shadow-2xl border-4 border-blue-200 relative">
                            <div class="absolute top-4 left-4 inline-block bg-sky-500/20 border border-sky-400/50 text-sky-300 px-4 py-1.5 rounded-full font-bold text-sm md:text-base uppercase tracking-wider backdrop-blur-sm z-10 w-auto">Mô phỏng 3D Tương tác</div>
                            <!-- 3D SCENE -->
                            <div class="flex-grow flex items-center justify-center w-full relative perspective-[1500px]" id="scene-124">
                                <div id="cube-wrapper-124" class="relative transform-style-3d transition-transform duration-[0.1s] ease-out cursor-grab active:cursor-grabbing scale-90 md:scale-100" style="width: 240px; height: 240px; transform: rotateX(-20deg) rotateY(-30deg);">
                                    <!-- Container for mini blocks -->
                                    <div id="cube-layers-124" class="absolute left-[50%] top-[50%] transform-style-3d"></div>

                                    <!-- The Container Box (3x3x3 blocks of 80px) -->
                                    <div class="absolute inset-0 transform-style-3d pointer-events-none">
                                        <!-- Outside Faces -->
                                        <div class="absolute border-2 border-blue-400/60 bg-blue-500/10 grid-bg-124" style="width: 240px; height: 240px; left: 50%; top: 50%; margin-left: -120px; margin-top: -120px; transform: rotateY(180deg) translateZ(120px);"></div>
                                        <div class="absolute border-2 border-blue-400/60 bg-blue-500/10 grid-bg-124" style="width: 240px; height: 240px; left: 50%; top: 50%; margin-left: -120px; margin-top: -120px; transform: rotateY(-90deg) translateZ(120px);"></div>
                                        <div class="absolute border-2 border-blue-400/60 bg-blue-500/10 grid-bg-124" style="width: 240px; height: 240px; left: 50%; top: 50%; margin-left: -120px; margin-top: -120px; transform: rotateX(-90deg) translateZ(120px);"></div>
                                        <div class="absolute border-2 border-sky-400 shadow-[inset_0_0_20px_rgba(56,189,248,0.2)] bg-sky-300/10 grid-bg-124" style="width: 240px; height: 240px; left: 50%; top: 50%; margin-left: -120px; margin-top: -120px; transform: rotateX(90deg) translateZ(120px);"></div>
                                        <div class="absolute border-2 border-sky-400 bg-sky-300/10 grid-bg-124 flex items-end justify-center pb-2" style="width: 240px; height: 240px; left: 50%; top: 50%; margin-left: -120px; margin-top: -120px; transform: rotateY(90deg) translateZ(120px);">
                                            <div class="bg-blue-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md text-sm">Rộng: 3 cm</div>
                                        </div>
                                        <div class="absolute border-2 border-sky-400 bg-sky-300/10 grid-bg-124 flex items-center justify-center flex-col justify-end pb-4 gap-2" style="width: 240px; height: 240px; left: 50%; top: 50%; margin-left: -120px; margin-top: -120px; transform: translateZ(120px);">
                                            <div class="bg-blue-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md translate-y-[120px] absolute text-sm">Dài: 3 cm</div>
                                            <div class="bg-blue-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md -translate-x-[150px] absolute text-sm">Cao: 3 cm</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Footer Controls -->
                        <div class="flex flex-wrap items-center justify-center gap-4 z-10 w-full mb-2 shrink-0">
                            <button onclick="window.fillKhamPha124()" id="btn-fill-124" class="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white rounded-2xl font-black text-lg shadow-xl active:scale-95 transition-all flex items-center gap-3">
                                🧊 Bấm lần 1: Xếp 1 hình
                            </button>
                            <button onclick="window.resetKhamPha124()" class="px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-2xl font-black text-lg shadow-xl active:scale-95 transition-all">
                                ↺ Đặt lại
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                .grid-bg-124 {
                    background-size: 80px 80px;
                    background-image: 
                        linear-gradient(to right, rgba(56, 189, 248, 0.4) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(56, 189, 248, 0.4) 1px, transparent 1px);
                }
                .transform-style-3d { transform-style: preserve-3d; }
                .minicube-124 {
                    position: absolute;
                    width: 80px; height: 80px;
                    margin-left: -40px; margin-top: -40px;
                    transform-style: preserve-3d;
                }
                .minicube-124 .face {
                    position: absolute; width: 80px; height: 80px;
                    border: 1px solid rgba(251, 191, 36, 0.9);
                    background: rgba(253, 230, 138, 0.95);
                    box-shadow: inset 0 0 16px rgba(251, 191, 36, 0.5);
                }
                .minicube-124 .face.top { transform: translateY(-40px) rotateX(90deg); background: #fef3c7; }
                .minicube-124 .face.bottom { transform: translateY(40px) rotateX(-90deg); background: #f59e0b; }
                .minicube-124 .face.front { transform: translateZ(40px); }
                .minicube-124 .face.back { transform: translateZ(-40px) rotateY(180deg); background: #d97706; }
                .minicube-124 .face.right { transform: translateX(40px) rotateY(90deg); background: #fcd34d; }
                .minicube-124 .face.left { transform: translateX(-40px) rotateY(-90deg); background: #fbbf24; }
            </style>
        </div>
    `,
    "practice": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Bài 1 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl">
                             <div class="flex items-start gap-6 mb-12 text-left">
                                <div class="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg">1</div>
                                <h3 class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight italic">Bài 1. Hoàn thành bảng</h3>
                            </div>
                            <div class="overflow-x-auto rounded-[32px] border border-slate-200 bg-white p-4 shadow-sm">
                                <table class="w-full border-separate border-spacing-2 table-fixed min-w-[600px]">
                                    <colgroup>
                                        <col class="w-1/4">
                                        <col class="w-1/4">
                                        <col class="w-1/4">
                                        <col class="w-1/4">
                                    </colgroup>
                                    <tbody>
                                        <tr class="text-center font-bold text-xl md:text-2xl">
                                            <td class="p-6 bg-teal-600 text-white rounded-3xl font-black">Cạnh (a)</td>
                                            <td class="p-6 bg-white rounded-3xl text-blue-900 italic font-black uppercase">10 cm</td>
                                            <td class="p-6 bg-white rounded-3xl text-blue-900 italic font-black uppercase">2,5 dm</td>
                                            <td class="p-6 bg-white rounded-3xl text-blue-900 italic font-black uppercase">0,4 m</td>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="p-6 bg-amber-400 text-white rounded-3xl font-black text-xl md:text-2xl uppercase italic">Thể tích (V)</td>
                                            <td class="p-6 bg-white border-4 border-teal-500/20 rounded-3xl">
                                                <input type="number" id="ans-124-1a" class="w-full bg-transparent border-none text-center p-2 text-3xl md:text-4xl font-black text-teal-600 outline-none placeholder:text-slate-200" placeholder="?">
                                            </td>
                                            <td class="p-6 bg-white border-4 border-teal-500/20 rounded-3xl">
                                                <input type="number" step="0.001" id="ans-124-1b" class="w-full bg-transparent border-none text-center p-2 text-3xl md:text-4xl font-black text-teal-600 outline-none placeholder:text-slate-200" placeholder="?">
                                            </td>
                                            <td class="p-6 bg-white border-4 border-teal-500/20 rounded-3xl">
                                                <input type="number" step="0.001" id="ans-124-1c" class="w-full bg-transparent border-none text-center p-2 text-3xl md:text-4xl font-black text-teal-600 outline-none placeholder:text-slate-200" placeholder="?">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="flex justify-center mt-12">
                                <button onclick="window.check_124_1()" class="w-24 h-24 bg-teal-600 text-white rounded-3xl font-black text-4xl md:text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 2 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] bg-emerald-900 border-emerald-700 shadow-2xl relative overflow-hidden text-white">
                            <div class="flex items-start gap-6 mb-12 text-left">
                                 <div class="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg">2</div>
                                 <h3 class="text-3xl md:text-4xl text-white leading-relaxed font-black uppercase tracking-tight italic">Bài 2. Chiếc bánh bông lan</h3>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
                                <div class="space-y-8">
                                    <p class="text-xl md:text-2xl font-bold text-emerald-100 italic leading-snug text-left">
                                        "Chiếc bánh HHCN 12x12x6 cm. Cắt một miếng bánh LP cạnh 6 cm. Tính thể tích phần còn lại."
                                    </p>
                                    <div class="flex items-center gap-4 bg-white/10 p-6 rounded-[2.5rem] border border-white/20">
                                         <input type="number" id="ans-124-2" class="w-full bg-transparent border-none text-center p-2 text-3xl md:text-4xl font-black text-yellow-300 outline-none placeholder:text-white/20" placeholder="?">
                                         <span class="text-2xl md:text-3xl font-black text-emerald-200 italic shrink-0">cm³</span>
                                    </div>
                                </div>
                                <img src="assets/images/toan/toan_tap_2/124/124-b2-cake.webp" class="rounded-[2.5rem] shadow-2xl border-4 border-white/20 max-w-full mx-auto">
                            </div>
                            <div class="flex justify-center text-left">
                                 <button onclick="window.check_124_2()" class="w-24 h-24 bg-yellow-400 text-emerald-900 rounded-3xl font-black text-4xl md:text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 3 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] bg-rose-50 border-rose-100 shadow-xl relative overflow-hidden">
                             <div class="flex items-start gap-6 mb-12 text-left">
                                <div class="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg">3</div>
                                <h3 class="text-3xl md:text-4xl text-rose-900 leading-relaxed font-black uppercase tracking-tight italic">Bài 3. So sánh hình khối</h3>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                                 <img src="assets/images/toan/toan_tap_2/124/124-b3-mairobot.webp" class="rounded-[2.5rem] border-4 border-white shadow-2xl order-2 md:order-1 max-w-full mx-auto">
                                 <div class="space-y-12 order-1 md:order-2">
                                    <div class="space-y-6">
                                        <p class="text-xl md:text-2xl font-black text-rose-800 italic uppercase tracking-tighter">a) Mai cần bỏ bao nhiêu hình LP nhỏ để được hình Rô-bốt?</p>
                                        <div class="flex flex-wrap gap-3">
                                            <button onclick="window.select_124_3a('10')" id="btn-124-3a-10" class="px-8 py-4 bg-white border-2 border-rose-200 rounded-2xl text-xl md:text-2xl font-black text-rose-300 hover:bg-rose-600 hover:text-white transition-all uppercase">10 hình</button>
                                            <button onclick="window.select_124_3a('12')" id="btn-124-3a-12" class="px-8 py-4 bg-white border-2 border-rose-200 rounded-2xl text-xl md:text-2xl font-black text-rose-300 hover:bg-rose-600 hover:text-white transition-all uppercase">12 hình</button>
                                        </div>
                                    </div>
                                    <div class="space-y-6">
                                        <p class="text-xl md:text-2xl font-black text-rose-800 italic uppercase tracking-tighter">b) Nếu mỗi khối nhỏ cạnh 2cm, thể tích hình Rô-bốt là?</p>
                                        <div class="flex flex-wrap gap-3">
                                            <button onclick="window.select_124_3b('64')" id="btn-124-3b-64" class="px-8 py-4 bg-white border-2 border-rose-200 rounded-2xl text-xl md:text-2xl font-black text-rose-300 hover:bg-rose-600 hover:text-white transition-all uppercase">64 cm³</button>
                                            <button onclick="window.select_124_3b('216')" id="btn-124-3b-216" class="px-8 py-4 bg-white border-2 border-rose-200 rounded-2xl text-xl md:text-2xl font-black text-rose-300 hover:bg-rose-600 hover:text-white transition-all uppercase">216 cm³</button>
                                        </div>
                                    </div>
                                 </div>
                            </div>
                            <div class="flex justify-center mt-12">
                                <button onclick="window.check_124_3()" class="w-24 h-24 bg-rose-600 text-white rounded-3xl font-black text-4xl md:text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <script>
        window.check_124_1 = function() {
            const v1 = document.getElementById('ans-124-1a').value.trim();
            const v2 = document.getElementById('ans-124-1b').value.replace(',', '.').trim();
            const v3 = document.getElementById('ans-124-1c').value.replace(',', '.').trim();
            
            const c1 = (v1 === '1000');
            const c2 = (Math.abs(parseFloat(v2) - 15.625) < 0.001);
            const c3 = (Math.abs(parseFloat(v3) - 0.064) < 0.001);
            
            const isCorrect = (c1 && c2 && c3);
            window.showMathFeedback(isCorrect, "1000; 15.625; 0.064", \`\${v1}; \${v2}; \${v3}\`, "V = a × a × a.", 
                \`<p class="text-left text-xl md:text-2xl font-bold text-emerald-700">Chính xác! Thể tích của 3 hình lần lượt là: 1000 cm³; 15.625 dm³; 0.064 m³.</p>\`
            );
            window.submitMathLesson("Tiết 124 - Bài 1", isCorrect ? 100 : 0, "ans-124-1a", 0, 3, (c1?1:0)+(c2?1:0)+(c3?1:0));
        };

        window.check_124_2 = function() {
            const v = document.getElementById('ans-124-2').value.trim();
            const isCorrect = (v === '648');
            window.showMathFeedback(isCorrect, "648", v, "V_bánh = 12x12x6 = 864. V_cắt = 6x6x6 = 216. V_còn = 864 - 216 = 648.", 
                \`<p class="text-left text-xl md:text-2xl font-bold text-emerald-700">Đúng rồi! Thể tích phần bánh còn lại là 648 cm³.</p>\`
            );
            window.submitMathLesson("Tiết 124 - Bài 2", isCorrect ? 100 : 0, "ans-124-2", 0, 1, isCorrect ? 1 : 0);
        };

        let ans3a = null, ans3b = null;
        window.select_124_3a = function(v) {
            ans3a = v;
            ['10','12'].forEach(o => {
                const b = document.getElementById('btn-124-3a-'+o);
                b.className = (o===v) ? "px-8 py-4 bg-rose-600 border-2 border-transparent rounded-2xl text-xl md:text-2xl font-black text-white shadow-xl scale-110 transition-all uppercase" : "px-8 py-4 bg-white border-2 border-rose-200 rounded-2xl text-xl md:text-2xl font-black text-rose-300 hover:bg-rose-600 hover:text-white transition-all uppercase opacity-50";
            });
        };
        window.select_124_3b = function(v) {
            ans3b = v;
            ['64','216'].forEach(o => {
                const b = document.getElementById('btn-124-3b-'+o);
                b.className = (o===v) ? "px-8 py-4 bg-rose-600 border-2 border-transparent rounded-2xl text-xl md:text-2xl font-black text-white shadow-xl scale-110 transition-all uppercase" : "px-8 py-4 bg-white border-2 border-rose-200 rounded-2xl text-xl md:text-2xl font-black text-rose-300 hover:bg-rose-600 hover:text-white transition-all uppercase opacity-50";
            });
        };

        window.check_124_3 = function() {
            const c1 = (ans3a === '10');
            const c2 = (ans3b === '64');
            const isAll = (c1 && c2);
            window.showMathFeedback(isAll, "10 hình; 64 cm³", \`\${ans3a}; \${ans3b}\`, "a) 10 hình. b) 8 khối x 8cm³ = 64cm³.", 
                \`<p class="text-left text-xl md:text-2xl font-bold text-emerald-700">Giỏi quá! Mai cần bỏ 10 hình. Thể tích hình Rô-bốt là 64 cm³.</p>\`
            );
            window.submitMathLesson("Tiết 124 - Bài 3", isAll ? 100 : 0, "btn-124-3a-10", 0, 2, (c1?1:0)+(c2?1:0));
        };
        </script>
    `,
    "quizPool": metadata.quizPool,
    "metadata": metadata
};

/* --- MATH_BUILDER_METADATA ---
\${JSON.stringify(metadata)}
--- END_METADATA --- */

