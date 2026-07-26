const metadata = {
    "lessonInfo": {
        "period": "117",
        "week": "24",
        "topic": "Hình học và Đo lường",
        "title": "Bài 50. Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật (tiết 1)",
        "desc": "Bài 50: Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật."
    },
    "exercises": [
        {
            "id": "117_1",
            "type": "fill_in_blank",
            "statement": "Tính diện tích xung quanh của hình hộp chữ nhật có:",
            "subQuestions": [
                { "label": "a) Chiều dài 7 dm, chiều rộng 5 dm và chiều cao 4 dm", "id": "ans-117-1-a", "answer": "96", "unit": "dm²" },
                { "label": "b) Chiều dài 6,5 cm, chiều rộng 3,5 cm và chiều cao 5 cm", "id": "ans-117-1-b", "answer": "100", "unit": "cm²" }
            ],
            "solution": "a) Diện tích xung quanh là: (7 + 5) x 2 x 4 = 96 (dm²).<br>b) Diện tích xung quanh là: (6,5 + 3,5) x 2 x 5 = 100 (cm²)."
        },
        {
            "id": "117_2",
            "type": "fill_in_blank",
            "statement": "Một bể bơi dạng hình hộp chữ nhật có chiều dài 10 m, chiều rộng 4 m và sâu 1,5 m. Người ta muốn ốp gạch men xung quanh thành bể bơi. Tính phần diện tích được ốp gạch men (diện tích mạch vữa không đáng kể).",
            "answer": "42",
            "unit": "m²",
            "solution": "Diện tích phần được ốp gạch men chính là diện tích xung quanh của bể bơi.<br>Diện tích được ốp gạch men là:<br>(10 + 4) x 2 x 1,5 = 42 (m²).<br>Đáp số: 42 m²."
        }
    ],
    "quizPool": [
        { "question": "Công thức tính diện tích xung quanh hình hộp chữ nhật là?", "options": ["(a + b) x 2 x h", "(a + b) x h", "a x b x h", "(a + b) x 2"], "answer": 0, "level": "easy" },
        { "question": "Hình hộp chữ nhật có bao nhiêu mặt bên?", "options": ["2 mặt", "4 mặt", "6 mặt", "8 mặt"], "answer": 1, "level": "easy" },
        { "question": "Hình hộp chữ nhật có mấy kích thước cơ bản?", "options": ["1 kích thước", "2 kích thước", "3 kích thước", "4 kích thước"], "answer": 2, "level": "easy" },
        { "question": "Tính diện tích xung quanh HHCN có chiều dài 5 cm, chiều rộng 3 cm và chiều cao 4 cm?", "options": ["32 cm²", "64 cm²", "60 cm²", "16 cm²"], "answer": 1, "level": "medium" },
        { "question": "Một cái hộp dạng HHCN có chu vi đáy là 20 cm, chiều cao 5 cm. Diện tích xung quanh là?", "options": ["50 cm²", "100 cm²", "150 cm²", "200 cm²"], "answer": 1, "level": "medium" },
        { "question": "Một khối gỗ HHCN có d=10cm, r=5cm, h=2cm. Diện tích 2 đáy là?", "options": ["50 cm²", "100 cm²", "150 cm²", "200 cm²"], "answer": 1, "level": "medium" },
        { "question": "Để tính diện tích cần sơn 4 bức tường, ta tính diện tích gì?", "options": ["Toàn phần", "Xung quanh", "Mặt đáy", "Thể tích"], "answer": 1, "level": "medium" },
        { "question": "HHCN có 8 đỉnh và bao nhiêu cạnh?", "options": ["6", "10", "12", "14"], "answer": 2, "level": "medium" },
        { "question": "Diện tích toàn phần luôn luôn ... diện tích xung quanh.", "options": ["Lớn hơn", "Nhỏ hơn", "Bằng", "Không so sánh được"], "answer": 0, "level": "easy" },
        { "question": "Muốn tính diện tích 2 đáy HHCN, ta lấy d x r rồi nhân với mấy?", "options": ["1", "2", "3", "4"], "answer": 1, "level": "easy" }
    ]
};

export const lesson117 = {
    "topic": "Hình học và Đo lường",
    "week": "24",
    "period": "117",
    "title": "Bài 50. Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật (tiết 1)",
    "desc": "Bài 50: Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật.",
    "content": `
        <div class="theory-section space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 text-left">
            <div class="glass-card p-10 rounded-[3rem] border border-blue-50 shadow-2xl relative overflow-hidden bg-white/80 backdrop-blur-xl">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl md:text-3xl shadow-lg">📐</div>
                    <h3 class="text-4xl md:text-4xl font-black text-slate-800 italic">Khám phá công thức</h3>
                </div>
                <div class="flex flex-col items-center gap-8 mb-8 bg-blue-50 p-6 rounded-[2.5rem] border-2 border-blue-100">
                    <img src="assets/images/toan/toan_tap_2/117/kp.webp" alt="Khám phá diện tích xung quanh HHCN" class="w-full max-w-[650px] h-auto rounded-3xl shadow-md border-4 border-white">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="p-8 bg-blue-50 rounded-3xl border-2 border-blue-100">
                        <p class="text-2xl md:text-2xl font-black text-blue-800 mb-4 uppercase">1. Diện tích xung quanh (Sxq)</p>
                        <div class="bg-white p-6 rounded-2xl shadow-sm italic text-3xl md:text-3xl text-center font-bold text-blue-600">
                            Sxq = Chu vi đáy x Chiều cao
                        </div>
                        <p class="mt-4 text-xl text-slate-600 font-bold">= (a + b) x 2 x h</p>
                    </div>
                    <div class="p-8 bg-blue-50 rounded-3xl border-2 border-blue-100">
                        <p class="text-2xl md:text-2xl font-black text-blue-800 mb-4 uppercase">2. Diện tích toàn phần (Stp)</p>
                        <div class="bg-white p-6 rounded-2xl shadow-sm italic text-3xl md:text-3xl text-center font-bold text-blue-600">
                            Stp = Sxq + S(2 đáy)
                        </div>
                        <p class="mt-4 text-xl text-slate-600 font-bold">= Sxq + a x b x 2</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
 
                    <!-- Bài 1 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                            <div class="flex justify-between items-start gap-6 mb-12 text-left">
                                <div class="flex items-start gap-6">
                                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                                    <div class="space-y-2">
                                        <span class="text-xl font-black text-blue-700 block">Bài 1. Hoạt động</span>
                                        <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black tracking-tight">Tính diện tích xung quanh của hình hộp chữ nhật có:</p>
                                    </div>
                                </div>
                                
                            </div>
 
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div class="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-sm space-y-4">
                                    <p class="text-xl font-bold text-slate-500 italic">a) Chiều dài 7 dm, chiều rộng 5 dm và chiều cao 4 dm:</p>
                                    <div class="flex items-center gap-4">
                                        <input type="text" id="ans-117-1-a" class="flex-1 bg-slate-50 border-none rounded-2xl p-6 text-3xl md:text-3xl font-black text-center text-blue-600 outline-none focus:ring-4 ring-blue-200" placeholder="...">
                                        <span class="text-xl md:text-2xl font-black text-slate-400">dm²</span>
                                    </div>
                                </div>
                                <div class="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-sm space-y-4">
                                    <p class="text-xl font-bold text-slate-500 italic">b) Chiều dài 6,5 cm, chiều rộng 3,5 cm và chiều cao 5 cm:</p>
                                    <div class="flex items-center gap-4">
                                        <input type="text" id="ans-117-1-b" class="flex-1 bg-slate-50 border-none rounded-2xl p-6 text-3xl md:text-3xl font-black text-center text-blue-600 outline-none focus:ring-4 ring-blue-200" placeholder="...">
                                        <span class="text-xl md:text-2xl font-black text-slate-400">cm²</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Lời giải ẩn cho giáo viên -->
                            <div id="sol-117-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                a) Diện tích xung quanh hình hộp chữ nhật là:<br>
                                (7 + 5) x 2 x 4 = 96 (dm²).<br>
                                b) Diện tích xung quanh hình hộp chữ nhật là:<br>
                                (6,5 + 3,5) x 2 x 5 = 100 (cm²).
                            </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-117-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-117-1" onclick="window.submitEx117()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
                    </div>
 
                    <!-- Bài 2 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                            <div class="flex justify-between items-start gap-6 mb-12 text-left">
                                <div class="flex items-start gap-6">
                                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                                    <div class="space-y-2">
                                        <span class="text-xl font-black text-blue-700 block">Bài 2. Hoạt động</span>
                                        <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black tracking-tight">Một bể bơi dạng hình hộp chữ nhật có chiều dài 10 m, chiều rộng 4 m và sâu 1,5 m. Người ta muốn ốp gạch men xung quanh thành bể bơi. Tính phần diện tích được ốp gạch men (diện tích mạch vữa không đáng kể).</p>
                                    </div>
                                </div>
                                
                            </div>
 
                            <div class="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 space-y-8">
                                <div class="space-y-4">
                                    <p class="text-lg font-bold text-slate-500 uppercase tracking-widest text-left">Lời giải chi tiết:</p>
                                    <textarea id="ans-117-2-text" rows="5" class="w-full bg-white border border-slate-200 rounded-[2rem] p-8 text-2xl md:text-2xl font-bold shadow-inner outline-none focus:ring-4 ring-blue-100" placeholder="Viết lời giải tại đây..."></textarea>
                                </div>
 
                                <div class="flex flex-col md:flex-row items-center justify-start gap-6 bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm">
                                    <p class="text-2xl md:text-2xl font-black text-slate-600 italic">Đáp số cuối cùng:</p>
                                    <div class="flex items-center gap-4 w-full md:w-auto">
                                        <input type="text" id="ans-117-2-val" class="flex-1 md:w-48 bg-slate-50 border border-slate-200 rounded-xl p-6 text-3xl md:text-3xl font-black text-center text-blue-600" placeholder="...">
                                        <span class="text-xl md:text-2xl font-black text-slate-500">m²</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Lời giải ẩn cho giáo viên -->
                            <div id="sol-117-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                Diện tích phần được ốp gạch men chính là diện tích xung quanh của bể bơi.<br>
                                Diện tích được ốp gạch men là:<br>
                                (10 + 4) x 2 x 1,5 = 42 (m²).<br>
                                Đáp số: 42 m².
                            </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-117-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-117-2" onclick="window.submitEx117()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "quizPool": metadata.quizPool,
    "metadata": metadata
};

window.check_117_1 = function() {
    const v1 = document.getElementById('ans-117-1-a').value.trim();
    const v2 = document.getElementById('ans-117-1-b').value.trim();
    const isCorrect = (v1 === '96' && v2 === '100');
    window.showMathFeedback(isCorrect, "a) 96; b) 100", `${v1}, ${v2}`, 
        "Sxq = (d+r) x 2 x h.",
        `<div class="text-left space-y-4">
            <p class="text-2xl md:text-2xl font-bold text-emerald-600">Lời giải chi tiết:</p>
            <p class="text-xl">a) Diện tích xung quanh là: (7 + 5) x 2 x 4 = 96 (dm²)</p>
            <p class="text-xl">b) Diện tích xung quanh là: (6,5 + 3,5) x 2 x 5 = 100 (cm²)</p>
        </div>`
    );
    window.submitMathLesson("Tiết 117 - Bài 1", isCorrect ? 100 : 0, "ans-117-1-a", 0, 2, isCorrect ? 2 : 0);
};

window.check_117_2 = async function() {
    const val = document.getElementById('ans-117-2-val').value.trim();
    const text = document.getElementById('ans-117-2-text').value.trim();
    const isCorrectVal = val === '42';
    
    if (!text) {
        window.showMathFeedback(false, "42", val, "Em hãy nhập cả lời giải chi tiết nữa nhé!", "");
        return;
    }

    window.showMathFeedback(isCorrectVal, "42", val, "Diện tích phần được ốp gạch men chính là diện tích xung quanh của bể bơi.",
        `<div class="text-left space-y-4">
            <p class="text-2xl md:text-2xl font-bold text-emerald-600 text-center uppercase mb-4">Gợi ý bài giải</p>
            <p class="text-xl font-bold text-slate-700">Diện tích phần được ốp gạch men (Sxq) là:</p>
            <p class="text-3xl md:text-3xl text-center font-black text-emerald-600 bg-emerald-50 py-4 rounded-xl">(10 + 4) x 2 x 1,5 = 42 (m²)</p>
            <p class="text-xl font-bold text-slate-700">Đáp số: 42 m²</p>
        </div>`
    );
    
    window.submitMathLesson("Tiết 117 - Bài 2", isCorrectVal ? 100 : 0, "ans-117-2-val", 0, 1, isCorrectVal ? 1 : 0);
    
    // AI grading if available
    if (window.AIInteraction?.gradeWithModal) {
         window.AIInteraction.gradeWithModal(
            "Tính diện tích xung quanh bể bơi dài 10m, rộng 4m, sâu 1.5m.",
            "Sxq = (10+4)*2*1.5 = 42 m2",
            text
         );
     }
};

/* --- MATH_BUILDER_METADATA ---
${JSON.stringify(metadata)}
--- END_METADATA --- */
