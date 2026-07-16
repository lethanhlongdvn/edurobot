// === 122/index.js ===
import './cube3d.js';
const metadata = {
    "lessonInfo": {
        "period": "122",
        "week": "25",
        "topic": "Hình học và Đo lường",
        "title": "THỂ TÍCH HÌNH HỘP CHỮ NHẬT",
        "desc": "Bài 52: Cách tính thể tích hình hộp chữ nhật bằng công thức V = a × b × c (Trang 51-52)."
    },
    "exercises": [
        {
            "id": "122_1",
            "type": "fill_in_blank",
            "statement": "Tính thể tích hình hộp chữ nhật có chiều dài 8 cm, chiều rộng 5 cm và chiều cao 6 cm.",
            "subQuestions": [
                { "id": "122-1-ans", "answer": "240", "unit": "cm³" }
            ],
            "image": "assets/images/toan/toan_tap_2/122-formula.webp"
        },
        {
            "id": "122_2",
            "type": "fill_in_blank",
            "statement": "Bố của Mai vừa làm một bể cá dạng hình hộp chữ nhật với kích thước: chiều dài 10 dm, chiều rộng 6 dm và chiều cao 8 dm. Tính thể tích bể cá.",
            "subQuestions": [
                { "id": "122-2-ans", "answer": "480", "unit": "dm³" }
            ],
            "image": "assets/images/toan/toan_tap_2/122-b2-beca.webp"
        },
        {
            "id": "122_3",
            "type": "fill_in_blank",
            "statement": "Để tạo ra hình bên, Việt ghép 6 hình hộp chữ nhật giống nhau, mỗi hình có kích thước: 10 cm, 5 cm và 2 cm. Tính thể tích hình đó.",
            "subQuestions": [
                { "id": "122-3-ans", "answer": "600", "unit": "cm³" }
            ],
            "image": "assets/images/toan/toan_tap_2/122-b3-blocks.webp"
        }
    ],
    "quizPool": [
        { "question": "Công thức tính thể tích HHCN có 3 kích thước a, b, c là:", "options": ["V = a + b + c", "V = a × b + c", "V = a × b × c", "V = a × b / c"], "answer": 2, "level": "easy" },
        { "question": "Muốn tính thể tích HHCN, ta lấy chiều dài nhân chiều rộng rồi nhân với:", "options": ["Chu vi đáy", "Diện tích đáy", "Chiều cao (c)", "Cạnh"], "answer": 2, "level": "easy" },
        { "question": "Đơn vị đo thể tích thường gặp là:", "options": ["cm², dm², m²", "cm, dm, m", "cm³, dm³, m³", "kg, g, tấn"], "answer": 2, "level": "easy" },
        { "question": "Nếu một HHCN có 3 kích thước: 2dm, 3dm, 4dm thì thể tích là:", "options": ["24 dm³", "12 dm³", "9 dm³", "18 dm³"], "answer": 0, "level": "medium" },
        { "question": "Một HHCN có chiều dài 10cm, chiều rộng 5cm, chiều cao 2cm. Thể tích là:", "options": ["50 cm³", "100 cm³", "150 cm³", "20 cm³"], "answer": 1, "level": "medium" },
        { "question": "Công thức V = S_đáy × cao có dùng để tính thể tích HHCN không?", "options": ["Không dùng được", "Có dùng được", "Chỉ dùng cho HLP", "Chỉ dùng cho hình tròn"], "answer": 1, "level": "medium" },
        { "question": "Một bể cá dài 2 m, rộng 1,5 m, cao 1 m. Thể tích bể cá đó là:", "options": ["3 m³", "4,5 m³", "2 m³", "3,5 m³"], "answer": 0, "level": "medium" },
        { "question": "Nếu gấp chiều dài HHCN lên 2 lần, các kích thước khác giữ nguyên thì V tăng mấy lần?", "options": ["2 lần", "4 lần", "6 lần", "8 lần"], "answer": 0, "level": "hard" },
        { "question": "Nếu gấp tất cả 3 kích thước HHCN lên 2 lần thì thể tích tăng mấy lần?", "options": ["2 lần", "4 lần", "6 lần", "8 lần"], "answer": 3, "level": "hard" },
        { "question": "Một HHCN có diện tích đáy là 20 cm², chiều cao là 5 cm. Thể tích là:", "options": ["100 cm³", "40 cm³", "25 cm³", "200 cm³"], "answer": 0, "level": "medium" },
        { "question": "Nếu V = 60 cm³, chiều dài 5cm, chiều rộng 4cm thì chiều cao là:", "options": ["2 cm", "3 cm", "4 cm", "5 cm"], "answer": 1, "level": "hard" },
        { "question": "1 m³ bằng bao nhiêu dm³?", "options": ["10 dm³", "100 dm³", "1000 dm³", "10000 dm³"], "answer": 2, "level": "easy" },
        { "question": "Một chiếc hộp sữa 10cm, 5cm, 20cm có thể tích là:", "options": ["1000 cm³", "500 cm³", "200 cm³", "1500 cm³"], "answer": 0, "level": "medium" },
        { "question": "HHCN đặc biệt có 3 kích thước bằng nhau được gọi là:", "options": ["Hình hộp vuông", "Hình lập phương", "Hình cầu", "Hình trụ"], "answer": 1, "level": "easy" },
        { "question": "Diện tích một mặt HHCN là 15 cm², chiều cao là 4 cm. Thể tích là:", "options": ["60 cm³", "30 cm³", "19 cm³", "40 cm³"], "answer": 0, "level": "medium" }
    ]
};

export const lesson122 = {
    ...metadata.lessonInfo,
    "content": `
        <div class="theory-section space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 text-left">
            <!-- 🎯 Mục tiêu -->
            <div class="bg-gradient-to-br from-blue-600 to-blue-700 p-10 rounded-[40px] text-white shadow-2xl flex items-center gap-10 relative overflow-hidden group">
                <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700"></div>
                <div class="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0 text-5xl shadow-lg">🎯</div>
                <div>
                    <h3 class="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">Mục tiêu bài học</h3>
                    <ul class="list-disc list-inside font-bold text-xl md:text-2xl opacity-95 space-y-2">
                        <li>Biết quy tắc và công thức tính thể tích hình hộp chữ nhật.</li>
                        <li>Vận dụng giải quyết các vấn đề thực tế liên quan đến thể tích.</li>
                    </ul>
                </div>
            </div>

            <!-- 📖 Khám phá -->
            <div class="bg-white p-10 rounded-[40px] border border-blue-100 shadow-2xl overflow-hidden relative">
                <div class="absolute top-0 right-0 w-48 h-48 bg-amber-50 rounded-bl-full -z-0 opacity-60"></div>
                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div class="space-y-8">
                        <div class="flex items-center gap-4">
                            <span class="bg-amber-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center font-black text-3xl shadow-lg">?</span>
                            <h4 class="text-3xl md:text-4xl font-black text-amber-700 uppercase italic">Tìm hiểu về thể tích</h4>
                        </div>
                        <p class="text-2xl font-bold leading-tight text-gray-700 italic border-l-8 border-amber-400 pl-6 bg-amber-50 py-6 rounded-r-3xl">
                            "Để biết chiếc hộp chứa được bao nhiêu khối lập phương 1dm³, ta có thể xếp chúng vào hộp và đếm."
                        </p>
                        <div class="bg-blue-50 p-8 rounded-[32px] border-2 border-blue-100 shadow-inner">
                            <p class="text-2xl font-black text-blue-900 space-y-3">
                                <span class="block">📏 Chiều dài: 6 dm</span>
                                <span class="block">📏 Chiều rộng: 5 dm</span>
                                <span class="block">📏 Chiều cao: 4 dm</span>
                                <span class="block mt-6 text-3xl text-blue-600 bg-white inline-block px-6 py-2 rounded-2xl shadow-sm">6 &times; 5 &times; 4 = 120 (khối)</span>
                            </p>
                        </div>
                    </div>
                    <div class="relative group cursor-pointer inline-block mx-auto">
                        <img src="assets/images/toan/toan_tap_2/122-khampha.webp" alt="Khám phá" class="w-full max-w-[550px] h-auto rounded-[40px] shadow-2xl border-8 border-white transform group-hover:rotate-1 transition-all duration-500">
                        <div class="absolute bottom-6 right-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <button onclick="window.openKhamPhaModal122(); event.stopPropagation();" class="w-20 h-20 bg-amber-500 hover:bg-amber-600 text-white rounded-3xl font-black shadow-2xl flex items-center justify-center transform active:scale-90 transition-all text-3xl hover:shadow-amber-200/50 hover:shadow-2xl" title="Mô phỏng 3D">
                                3D
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 💥 MODAL 3D FULLSCREEN 💥 -->
            <div id="modal-122-khampha" class="fixed inset-0 z-[9999] bg-slate-900/95 hidden flex-col items-center justify-center opacity-0 transition-opacity duration-300 backdrop-blur-md" onclick="window.closeKhamPhaModal122()">
                <div class="bg-blue-50 w-[96%] h-[94vh] max-h-[1000px] max-w-[1400px] rounded-[40px] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative flex flex-col" onclick="event.stopPropagation()">
                    <!-- Header -->
                    <div class="bg-blue-600 bg-gradient-to-r from-blue-700 to-blue-600 text-white p-5 flex justify-between items-center shrink-0 shadow-lg z-20 relative">
                        <h3 class="text-3xl md:text-4xl font-black uppercase tracking-tight flex items-center gap-4">
                            <span class="bg-white/20 p-2 rounded-2xl">🧊</span> Khám phá thể tích 3D
                        </h3>
                        <button onclick="window.closeKhamPhaModal122()" class="w-14 h-14 bg-white/20 hover:bg-rose-500 rounded-full flex items-center justify-center transition-all shadow-md active:scale-90">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                    <!-- Body -->
                    <div class="flex-grow flex flex-col p-4 md:p-6 gap-4 relative">
                        <!-- Left: 3D Simulator -->
                        <div class="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-indigo-950 p-2 md:p-6 rounded-[32px] shadow-2xl border-4 border-blue-200 relative">
                            <div class="absolute top-4 left-4 inline-block bg-sky-500/20 border border-sky-400/50 text-sky-300 px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-wider backdrop-blur-sm z-10 w-auto">Mô phỏng 3D Tương tác</div>
                            <!-- 3D SCENE -->
                            <div class="flex-grow flex items-center justify-center w-full relative perspective-[1500px]" id="scene-122">
                                <div id="cube-wrapper-122" class="relative transform-style-3d transition-transform duration-[0.1s] ease-out cursor-grab active:cursor-grabbing" style="width: 300px; height: 200px; transform: rotateX(-20deg) rotateY(-30deg);">
                                    <!-- Container for mini blocks -->
                                    <div id="cube-layers-122" class="absolute left-[50%] top-[50%] transform-style-3d"></div>

                                    <!-- The Container Box -->
                                    <div class="absolute inset-0 transform-style-3d pointer-events-none">
                                        <!-- Outside Faces -->
                                        <div class="absolute border-2 border-blue-400/60 bg-blue-500/10 grid-bg-122" style="width: 300px; height: 200px; left: 50%; top: 50%; margin-left: -150px; margin-top: -100px; transform: rotateY(180deg) translateZ(125px);"></div>
                                        <div class="absolute border-2 border-blue-400/60 bg-blue-500/10 grid-bg-122" style="width: 250px; height: 200px; left: 50%; top: 50%; margin-left: -125px; margin-top: -100px; transform: rotateY(-90deg) translateZ(150px);"></div>
                                        <div class="absolute border-2 border-blue-400/60 bg-blue-500/10 grid-bg-122" style="width: 300px; height: 250px; left: 50%; top: 50%; margin-left: -150px; margin-top: -125px; transform: rotateX(-90deg) translateZ(100px);"></div>
                                        <div class="absolute border-2 border-sky-400 shadow-[inset_0_0_20px_rgba(56,189,248,0.2)] bg-sky-300/10 grid-bg-122" style="width: 300px; height: 250px; left: 50%; top: 50%; margin-left: -150px; margin-top: -125px; transform: rotateX(90deg) translateZ(100px);"></div>
                                        <div class="absolute border-2 border-sky-400 bg-sky-300/10 grid-bg-122 flex items-end justify-center pb-2" style="width: 250px; height: 200px; left: 50%; top: 50%; margin-left: -125px; margin-top: -100px; transform: rotateY(90deg) translateZ(150px);">
                                            <div class="bg-blue-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md text-sm">Rộng: 5 dm</div>
                                        </div>
                                        <div class="absolute border-2 border-sky-400 bg-sky-300/10 grid-bg-122 flex items-center justify-center flex-col justify-end pb-4 gap-2" style="width: 300px; height: 200px; left: 50%; top: 50%; margin-left: -150px; margin-top: -100px; transform: translateZ(125px);">
                                            <div class="bg-blue-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md translate-y-[100px] absolute text-sm">Dài: 6 dm</div>
                                            <div class="bg-blue-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md -translate-x-[180px] absolute text-sm">Cao: 4 dm</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Footer Controls -->
                        <div class="flex flex-wrap items-center justify-center gap-4 z-10 w-full mb-2 shrink-0">
                            <button onclick="window.fillKhamPha122()" id="btn-fill-122" class="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white rounded-2xl font-black text-lg md:text-xl shadow-xl active:scale-95 transition-all flex items-center gap-3">
                                🧊 Bấm lần 1: Xếp 1 hình
                            </button>
                            <button onclick="window.resetKhamPha122()" class="px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-2xl font-black text-lg md:text-xl shadow-xl active:scale-95 transition-all">
                                ↺ Đặt lại
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                .grid-bg-122 {
                    background-size: 50px 50px;
                    background-image: 
                        linear-gradient(to right, rgba(56, 189, 248, 0.4) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(56, 189, 248, 0.4) 1px, transparent 1px);
                }
                .transform-style-3d { transform-style: preserve-3d; }
                .minicube-122 {
                    position: absolute;
                    width: 50px; height: 50px;
                    margin-left: -25px; margin-top: -25px;
                    transform-style: preserve-3d;
                }
                .minicube-122 .face {
                    position: absolute; width: 50px; height: 50px;
                    border: 1px solid rgba(251, 191, 36, 0.9);
                    background: rgba(253, 230, 138, 0.95);
                    box-shadow: inset 0 0 10px rgba(251, 191, 36, 0.5);
                }
                .minicube-122 .face.top { transform: translateY(-25px) rotateX(90deg); background: #fef3c7; }
                .minicube-122 .face.bottom { transform: translateY(25px) rotateX(-90deg); background: #f59e0b; }
                .minicube-122 .face.front { transform: translateZ(25px); }
                .minicube-122 .face.back { transform: translateZ(-25px) rotateY(180deg); background: #d97706; }
                .minicube-122 .face.right { transform: translateX(25px) rotateY(90deg); background: #fcd34d; }
                .minicube-122 .face.left { transform: translateX(-25px) rotateY(-90deg); background: #fbbf24; }
            </style>

            <!-- 🖍️ Công thức Ghi nhớ -->
            <div class="bg-rose-50 p-10 rounded-[50px] border-4 border-rose-200 shadow-xl relative overflow-hidden">
                <div class="absolute -left-10 -bottom-10 w-60 h-60 bg-rose-200/50 rounded-full blur-3xl"></div>
                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div class="flex justify-center">
                        <img src="assets/images/toan/toan_tap_2/122-formula.webp" alt="Công thức" class="w-full max-w-[450px] h-auto rounded-[40px] shadow-2xl border-4 border-white transition-transform hover:scale-105 duration-500">
                    </div>
                    <div class="bg-white p-10 rounded-[40px] shadow-inner border-2 border-rose-100">
                        <h4 class="text-2xl font-black text-rose-600 uppercase mb-4 tracking-widest text-center">Quy tắc cần nhớ</h4>
                        <p class="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed text-center italic">
                            "Thể tích <span class="text-rose-600 font-black italic text-4xl">V</span> của hình hộp chữ nhật bằng chiều dài <span class="text-rose-600 font-black italic text-4xl">a</span> nhân với chiều rộng <span class="text-rose-600 font-black italic text-4xl">b</span> rồi nhân với chiều cao <span class="text-rose-600 font-black italic text-4xl">c</span>."
                        </p>
                        <div class="mt-8 bg-rose-600 p-6 rounded-[32px] text-white text-center shadow-2xl transform hover:scale-102 transition-all">
                            <p class="text-4xl md:text-6xl font-black tracking-wide italic drop-shadow-lg uppercase">V = a &times; b &times; c</p>
                        </div>
                        <p class="text-center mt-6 text-slate-500 font-bold text-xl">(a, b, c cùng đơn vị đo)</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-12 text-left animate-in fade-in duration-700">
            <!-- Bài tập 1 -->
            <div class="bg-white p-10 rounded-[40px] border border-gray-100 shadow-2xl relative overflow-hidden group">
                <div class="relative z-10 flex items-center mb-8 gap-6">
                    <span class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-3xl shadow-xl">1</span>
                    <p class="font-black text-3xl md:text-4xl text-blue-700 uppercase italic tracking-tight">Tính thể tích hình hộp chữ nhật</p>
                </div>
                
                <div class="w-full mx-auto space-y-8 bg-blue-50/50 p-10 rounded-[48px] border-2 border-blue-100">
                    <p class="text-2xl md:text-3xl font-bold text-slate-700 italic text-center mb-8">
                        "Chiều dài 8 cm, chiều rộng 5 cm và chiều cao 6 cm."
                    </p>
                    <div class="flex items-center justify-center gap-6 bg-white p-8 rounded-[32px] shadow-inner border-2 border-blue-100 w-full w-full mx-auto">
                        <span class="text-3xl font-black text-blue-600">Đáp số:</span>
                        <input type="number" id="ans-122-1" class="w-40 bg-transparent border-b-4 border-blue-200 focus:border-blue-600 outline-none p-2 text-5xl font-black text-center text-blue-900 mx-4" placeholder="?">
                        <span class="text-3xl font-black text-blue-400">cm³</span>
                    </div>
                    <div class="mt-8 flex justify-center">
                        <button onclick="window.check_122_1()" class="w-24 h-24 bg-gradient-to-br from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 text-white rounded-3xl font-black text-6xl shadow-2xl border-b-8 border-rose-800 transition-all active:border-b-0 active:translate-y-2 flex items-center justify-center transform hover:scale-105">E</button>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div class="bg-white p-10 rounded-[40px] border border-gray-100 shadow-2xl relative overflow-hidden group">
                <div class="relative z-10 flex items-center mb-8 gap-6">
                    <span class="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center font-black text-3xl shadow-xl">2</span>
                    <p class="font-black text-3xl md:text-4xl text-emerald-700 uppercase italic tracking-tight">Tính thể tích bể cá</p>
                </div>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full mx-auto bg-emerald-50/50 p-10 rounded-[48px] border-2 border-emerald-100">
                    <div class="space-y-8">
                        <p class="text-2xl font-bold text-emerald-900 leading-relaxed italic">
                            "Bố của Mai vừa làm một bể cá dạng hình hộp chữ nhật với kích thước: chiều dài 10 dm, chiều rộng 6 dm và chiều cao 8 dm."
                        </p>
                        <div class="flex items-center justify-center gap-6 bg-white p-8 rounded-[32px] shadow-inner border-2 border-emerald-100">
                            <span class="text-3xl font-black text-emerald-600">Đáp số:</span>
                            <input type="number" id="ans-122-2" class="w-40 bg-transparent border-b-4 border-emerald-200 focus:border-emerald-600 outline-none p-2 text-5xl font-black text-center text-emerald-900 mx-4" placeholder="?">
                            <span class="text-3xl font-black text-emerald-400">dm³</span>
                        </div>
                    </div>
                    <img src="assets/images/toan/toan_tap_2/122-b2-beca.webp" alt="Bể cá" class="w-full max-w-[450px] h-auto rounded-[40px] shadow-2xl border-8 border-white mx-auto">
                </div>
                <div class="mt-8 flex justify-center">
                    <button onclick="window.check_122_2()" class="w-24 h-24 bg-gradient-to-br from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 text-white rounded-3xl font-black text-6xl shadow-2xl border-b-8 border-rose-800 transition-all active:border-b-0 active:translate-y-2 flex items-center justify-center transform hover:scale-105">E</button>
                </div>
            </div>

            <!-- Bài tập 3 -->
            <div class="bg-amber-50/50 p-10 rounded-[40px] border-4 border-dashed border-amber-200 shadow-xl relative overflow-hidden group">
                <div class="relative z-10 flex items-center mb-8 gap-6">
                    <span class="w-16 h-16 bg-amber-600 text-white rounded-2xl flex items-center justify-center font-black text-3xl shadow-xl">3</span>
                    <p class="font-black text-3xl md:text-4xl text-amber-800 uppercase italic tracking-tight">Tính thể tích khối ghép</p>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full mx-auto">
                    <img src="assets/images/toan/toan_tap_2/122-b3-blocks.webp" alt="Khối hình" class="w-full max-w-[500px] h-auto rounded-[40px] shadow-2xl border-8 border-white mx-auto bg-white">
                    <div class="space-y-8">
                        <p class="text-2xl md:text-3xl font-bold text-amber-900 leading-tight italic">
                            "Để tạo ra hình bên, Việt ghép <b>6 hình hộp chữ nhật</b> giống nhau. Mỗi hình có kích thước: <b>10 cm, 5 cm và 2 cm</b>."
                        </p>
                        <div class="bg-white p-8 rounded-[40px] border-2 border-amber-100 shadow-inner space-y-6">
                            <div class="flex items-center justify-center gap-4">
                                <span class="text-3xl font-black text-amber-600">Đáp số:</span>
                                <input type="number" id="ans-122-3" class="w-40 bg-transparent border-b-4 border-amber-200 focus:border-amber-600 outline-none p-2 text-5xl font-black text-center text-amber-900 mx-2" placeholder="?">
                                <span class="text-3xl font-black text-amber-400">cm³</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10 flex justify-center">
                    <button onclick="window.check_122_3()" class="w-24 h-24 bg-gradient-to-br from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 text-white rounded-3xl font-black text-6xl shadow-2xl border-b-8 border-rose-800 transition-all active:border-b-0 active:translate-y-2 flex items-center justify-center transform hover:scale-105">E</button>
                </div>
            </div>
        </div>

        <script>
        window.check_122_1 = function() {
            const v = document.getElementById('ans-122-1').value.trim();
            const isCorrect = (v === '240');
            window.showMathFeedback(isCorrect, "240", v, "V = 8 × 5 × 6.", 
                \`<div class="text-left space-y-4">
                    <p class="text-2xl font-bold text-emerald-700 italic">Tuyệt vời! Thể tích là: 8 × 5 × 6 = 240 (cm³).</p>
                    <div class="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                        <p class="font-bold uppercase text-emerald-800 mb-1">Cách tính:</p>
                        <p class="text-xl">V = Chiều dài × Chiều rộng × Chiều cao</p>
                        <p class="text-xl">V = 8 × 5 × 6 = 240 (cm³)</p>
                    </div>
                </div>\`
            );
            window.submitMathLesson("Tiết 122 - Bài 1", isCorrect ? 100 : 0, "ans-122-1", 0, 1, isCorrect ? 1 : 0);
        };

        window.check_122_2 = function() {
            const v = document.getElementById('ans-122-2').value.trim();
            const isCorrect = (v === '480');
            window.showMathFeedback(isCorrect, "480", v, "V = 10 × 6 × 8 = 480.", 
                \`<div class="text-left space-y-4">
                    <p class="text-2xl font-bold text-emerald-700 italic">Chính xác! Thể tích bể cá là: 10 × 6 × 8 = 480 (dm³).</p>
                </div>\`
            );
            window.submitMathLesson("Tiết 122 - Bài 2", isCorrect ? 100 : 0, "ans-122-2", 0, 1, isCorrect ? 1 : 0);
        };

        window.check_122_3 = function() {
            const v = document.getElementById('ans-122-3').value.trim();
            const isCorrect = (v === '600');
            window.showMathFeedback(isCorrect, "600", v, "V_tổng = (10 × 5 × 2) × 6 = 600.", 
                \`<div class="text-left space-y-4">
                    <p class="text-2xl font-bold text-emerald-700 italic">Quá giỏi! Thể tích của cả khối hình là: (10 × 5 × 2) × 6 = 600 (cm³).</p>
                </div>\`
            );
            window.submitMathLesson("Tiết 122 - Bài 3", isCorrect ? 100 : 0, "ans-122-3", 0, 1, isCorrect ? 1 : 0);
        };
        </script>
    `,
    "quizPool": metadata.quizPool,
    "metadata": metadata
};

/* --- MATH_BUILDER_METADATA ---
\${JSON.stringify(metadata)}
--- END_METADATA --- */
