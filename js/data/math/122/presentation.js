// === 122/presentation.js ===

export const lesson122KickoffQuestions = [
    {
        question: "Muốn tính thể tích hình hộp chữ nhật, ta làm thế nào?",
        options: [
            "Lấy chiều dài cộng chiều rộng rồi nhân chiều cao",
            "Lấy chiều dài nhân chiều rộng rồi nhân chiều cao",
            "Lấy diện tích đáy cộng chiều cao",
            "Lấy chu vi đáy nhân chiều cao"
        ],
        answer: 1,
        feedback: "Đúng rồi! Thể tích = Chiều dài × Chiều rộng × Chiều cao (cùng đơn vị đo)."
    }
];

export const lesson122Presentation = [
    {
        id: "kickoff",
        title: "Khởi động",
        type: "quiz",
        questions: lesson122KickoffQuestions
    },
    {
        id: "discovery_1",
        title: "Khám phá: Thể tích",
        type: "content",
        content: `
            <div class="space-y-8 animate-in fade-in duration-700">
                <div class="bg-gradient-to-br from-indigo-600 to-blue-700 p-8 rounded-[40px] text-white shadow-2xl flex items-center gap-8 relative overflow-hidden group">
                    <div class="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0 text-5xl">🎯</div>
                    <div>
                        <h3 class="text-2xl md:text-4xl font-black uppercase tracking-tight mb-2">Mục tiêu bài học</h3>
                        <ul class="list-disc list-inside font-bold text-lg md:text-2xl opacity-95 space-y-1">
                            <li>Biết quy tắc và công thức tính thể tích hình hộp chữ nhật.</li>
                            <li>Vận dụng giải quyết các vấn đề thực tế liên quan đến thể tích.</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-white p-8 rounded-[40px] border border-indigo-100 shadow-2xl overflow-hidden relative">
                    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div class="space-y-6">
                            <div class="flex items-center gap-4">
                                <span class="bg-amber-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg">?</span>
                                <h4 class="text-3xl md:text-4xl font-black text-amber-700 uppercase">Ví dụ</h4>
                            </div>
                            <p class="text-xl md:text-2xl font-bold leading-tight text-gray-700 italic border-l-8 border-amber-400 pl-4 bg-amber-50 py-4 rounded-r-2xl">
                                "Tính thể tích hình hộp chữ nhật có chiều dài 6 dm, chiều rộng 5 dm và chiều cao 4 dm."
                            </p>
                            <div class="bg-indigo-50 p-6 rounded-3xl border-2 border-indigo-100">
                                <p class="text-xl md:text-2xl font-black text-indigo-900 space-y-2">
                                    <span class="block">📏 Chiều dài: 6 dm</span>
                                    <span class="block">📏 Chiều rộng: 5 dm</span>
                                    <span class="block">📏 Chiều cao: 4 dm</span>
                                    <span class="block mt-4 text-2xl text-indigo-600">6 &times; 5 &times; 4 = 120 (khối 1dm³)</span>
                                </p>
                            </div>
                        </div>
                        <div class="relative group cursor-pointer inline-block mx-auto">
                            <img src="assets/images/toan/toan_tap_2/122/" alt="Khám phá" class="w-full max-w-[500px] h-auto rounded-[40px] shadow-2xl border-8 border-white transform group-hover:rotate-1 transition-transform">
                            <div class="absolute bottom-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button onclick="window.openKhamPhaModal122(); event.stopPropagation();" class="w-16 h-16 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-black shadow-2xl flex items-center justify-center transform active:scale-95 transition-all text-2xl" title="Mô phỏng 3D">
                                    3D
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 💥 MODAL 3D FULLSCREEN 💥 -->
                <div id="modal-122-khampha" class="fixed inset-0 z-[9999] bg-slate-900/95 hidden flex-col items-center justify-center opacity-0 transition-opacity duration-300 backdrop-blur-md" onclick="window.closeKhamPhaModal122()">
                    <div class="bg-indigo-50 w-[96%] h-[94vh] max-h-[1000px] max-w-[1400px] rounded-[40px] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative flex flex-col" onclick="event.stopPropagation()">
                        <div class="bg-indigo-600 bg-gradient-to-r from-indigo-700 to-blue-600 text-white p-5 flex justify-between items-center shrink-0 shadow-lg z-20 relative">
                            <h3 class="text-3xl md:text-4xl font-black uppercase tracking-tight flex items-center gap-4">
                                <span class="bg-white/20 p-2 rounded-2xl">🧊</span> Khám phá thể tích 3D
                            </h3>
                            <button onclick="window.closeKhamPhaModal122()" class="w-14 h-14 bg-white/20 hover:bg-rose-500 rounded-full flex items-center justify-center transition-all shadow-md active:scale-90">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                        <div class="flex-grow flex flex-col p-4 md:p-6 gap-4 relative overflow-hidden">
                            <div class="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-indigo-950 p-2 md:p-6 rounded-[32px] shadow-2xl border-4 border-indigo-200 relative">
                                <div class="absolute top-4 left-4 inline-block bg-sky-500/20 border border-sky-400/50 text-sky-300 px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-wider backdrop-blur-sm z-10 w-auto">Mô phỏng 3D Tương tác</div>
                                <div class="flex-grow flex items-center justify-center w-full relative perspective-[1500px] overflow-hidden" id="scene-122">
                                    <div id="cube-wrapper-122" class="relative transform-style-3d transition-transform duration-[0.1s] ease-out cursor-grab active:cursor-grabbing" style="width: 300px; height: 200px; transform: rotateX(-20deg) rotateY(-30deg);">
                                        <div id="cube-layers-122" class="absolute left-[50%] top-[50%] transform-style-3d"></div>
                                        <div class="absolute inset-0 transform-style-3d pointer-events-none">
                                            <!-- Box Faces -->
                                            <div class="absolute border-2 border-indigo-400/60 bg-indigo-500/10 grid-bg-122" style="width: 300px; height: 200px; left: 50%; top: 50%; margin-left: -150px; margin-top: -100px; transform: rotateY(180deg) translateZ(125px);"></div>
                                            <div class="absolute border-2 border-indigo-400/60 bg-indigo-500/10 grid-bg-122" style="width: 250px; height: 200px; left: 50%; top: 50%; margin-left: -125px; margin-top: -100px; transform: rotateY(-90deg) translateZ(150px);"></div>
                                            <div class="absolute border-2 border-indigo-400/60 bg-indigo-500/10 grid-bg-122" style="width: 300px; height: 250px; left: 50%; top: 50%; margin-left: -150px; margin-top: -125px; transform: rotateX(-90deg) translateZ(100px);"></div>
                                            <div class="absolute border-2 border-sky-400 shadow-[inset_0_0_20px_rgba(56,189,248,0.2)] bg-sky-300/10 grid-bg-122" style="width: 300px; height: 250px; left: 50%; top: 50%; margin-left: -150px; margin-top: -125px; transform: rotateX(90deg) translateZ(100px);"></div>
                                            <div class="absolute border-2 border-sky-400 bg-sky-300/10 grid-bg-122 flex items-end justify-center pb-2" style="width: 250px; height: 200px; left: 50%; top: 50%; margin-left: -125px; margin-top: -100px; transform: rotateY(90deg) translateZ(150px);">
                                                <div class="bg-indigo-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md text-sm">5 dm</div>
                                            </div>
                                            <div class="absolute border-2 border-sky-400 bg-sky-300/10 grid-bg-122 flex items-center justify-center flex-col justify-end pb-4 gap-2" style="width: 300px; height: 200px; left: 50%; top: 50%; margin-left: -150px; margin-top: -100px; transform: translateZ(125px);">
                                                <div class="bg-indigo-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md translate-y-[100px] absolute text-sm">6 dm</div>
                                                <div class="bg-indigo-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md -translate-x-[180px] absolute text-sm">4 dm</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                        position: absolute; width: 50px; height: 50px;
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
                    
                    .rotate-anim-122 { animation: spinBox122 15s linear infinite; }
                    @keyframes spinBox122 {
                        0% { transform: rotateX(-20deg) rotateY(-30deg); }
                        100% { transform: rotateX(-20deg) rotateY(330deg); }
                    }
                </style>
            </div>
        `
    },
    {
        id: "rule",
        title: "Quy tắc & Công thức",
        type: "content",
        content: `
            <div class="space-y-8 animate-in fade-in duration-700">
                <div class="bg-rose-50 p-8 rounded-[48px] border-4 border-rose-200 shadow-xl relative overflow-hidden">
                    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div class="flex justify-center">
                            <img src="assets/images/toan/toan_tap_2/122/" alt="Công thức" class="w-full max-w-[400px] h-auto rounded-3xl shadow-xl">
                        </div>
                        <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-rose-100">
                            <h4 class="text-xl font-black text-rose-600 uppercase mb-3 tracking-widest text-center">Ghi nhớ</h4>
                            <p class="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed text-center italic">
                                "Thể tích <span class="text-rose-600 font-black italic text-3xl">V</span> của hình hộp chữ nhật bằng chiều dài <span class="text-rose-600 font-black italic text-3xl">a</span> nhân với chiều rộng <span class="text-rose-600 font-black italic text-3xl">b</span> rồi nhân với chiều cao <span class="text-rose-600 font-black italic text-3xl">c</span>."
                            </p>
                            <div class="mt-6 bg-rose-600 p-6 rounded-3xl text-white text-center shadow-lg">
                                <p class="text-4xl md:text-6xl font-black tracking-wide italic drop-shadow-md uppercase">V = a &times; b &times; c</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        `
    }
];