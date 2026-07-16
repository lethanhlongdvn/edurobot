const metadata = {
    "lessonInfo": {
        "period": "117",
        "week": "24",
        "topic": "Hình học và Đo lường",
        "title": "DIỆN TÍCH XUNG QUANH VÀ TOÀN PHẦN HHCN",
        "desc": "Bài 50: Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật."
    },
    "exercises": [
        {
            "id": "117_1",
            "type": "fill_in_blank",
            "statement": "Cho hình hộp chữ nhật có kích thước dài 11cm, rộng 2cm, cao 4cm. Tính:",
            "subQuestions": [
                { "label": "a) Diện tích xung quanh", "id": "117-1-a", "answer": "104", "unit": "cm²" },
                { "label": "b) Diện tích toàn phần", "id": "117-1-b", "answer": "148", "unit": "cm²" }
            ],
            "solution": "Sxq = (11 + 2) x 2 x 4 = 104 cm². Stp = 104 + (11 x 2 x 2) = 148 cm²."
        },
        {
            "id": "117_2",
            "type": "essay",
            "statement": "Một căn phòng HHCN dài 8m, rộng 5m, cao 4m. Người ta quét sơn tất cả các mặt xung quanh (không sơn trần và sàn). Tính diện tích cần sơn?",
            "answer": "104",
            "solution": "Diện tích cần sơn chính là diện tích xung quanh căn phòng: (8 + 5) x 2 x 4 = 104 (m²).",
            "unit": "m²"
        }
    ],
    "quizPool": [
        { "question": "Công thức tính diện tích xung quanh hình hộp chữ nhật là?", "options": ["(a+b)*2*h", "(a*b)*2*h", "(a+b)*h", "a*b*h"], "answer": 0, "level": "easy" },
        { "question": "Diện tích toàn phần HHCN bằng SXQ cộng với gì?", "options": ["Diện tích 1 đáy", "Diện tích 2 đáy", "Thể tích", "Chu vi đáy"], "answer": 1, "level": "easy" },
        { "question": "Một HHCN có d=5cm, r=3cm, h=4cm. Diện tích xung quanh là?", "options": ["32 cm²", "64 cm²", "60 cm²", "48 cm²"], "answer": 1, "level": "medium" },
        { "question": "Nếu tăng chiều cao HHCN lên 2 lần, diện tích xung quanh thay đổi thế nào?", "options": ["Tăng 2 lần", "Tăng 4 lần", "Không đổi", "Giảm 2 lần"], "answer": 0, "level": "medium" },
        { "question": "HHCN có bao nhiêu mặt?", "options": ["4", "5", "6", "8"], "answer": 2, "level": "easy" },
        { "question": "Đơn vị đo diện tích thường dùng là?", "options": ["m", "m²", "m³", "kg"], "answer": 1, "level": "easy" },
        { "question": "Một HHCN có 3 kích thước 2m, 3m, 4m. Diện tích toàn phần là?", "options": ["24 m²", "40 m²", "52 m²", "48 m²"], "answer": 2, "level": "hard" },
        { "question": "Diện tích xung quanh của căn phòng 4m x 4m x 4m là?", "options": ["16 m²", "64 m²", "96 m²", "32 m²"], "answer": 1, "level": "medium" },
        { "question": "Hai đáy của HHCN là hai hình gì bằng nhau?", "options": ["Hình chữ nhật", "Hình vuông", "Hình tròn", "Hình thoi"], "answer": 0, "level": "easy" },
        { "question": "Chu vi đáy HHCN tính bằng cách nào?", "options": ["(d+r)*2", "d*r", "d+r", "d*r*2"], "answer": 0, "level": "easy" },
        { "question": "Một khối gỗ HHCN có d=10cm, r=5cm, h=2cm. Diện tích 2 đáy là?", "options": ["50 cm²", "100 cm²", "150 cm²", "200 cm²"], "answer": 1, "level": "medium" },
        { "question": "Để tính diện tích cần sơn 4 bức tường, ta tính diện tích gì?", "options": ["Toàn phần", "Xung quanh", "Mặt đáy", "Thể tích"], "answer": 1, "level": "medium" },
        { "question": "HHCN có 8 đỉnh và bao nhiêu cạnh?", "options": ["6", "10", "12", "14"], "answer": 2, "level": "medium" },
        { "question": "Diện tích toàn phần luôn luôn ... diện tích xung quanh.", "options": ["Lớn hơn", "Nhỏ hơn", "Bằng", "Không so sánh được"], "answer": 0, "level": "easy" },
        { "question": "Muốn tính diện tích 2 đáy HHCN, ta lấy d x r rồi nhân với mấy?", "options": ["1", "2", "3", "4"], "answer": 1, "level": "easy" }
    ]
};

export const lesson117 = {
    ...metadata.lessonInfo,
    "content": `
        <div class="theory-section space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 text-left">
            <div class="glass-card p-10 rounded-[3rem] border border-blue-50 shadow-2xl relative overflow-hidden bg-white/80 backdrop-blur-xl">
                 <div class="flex items-center gap-4 mb-6">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl shadow-lg">📦</div>
                    <h3 class="text-4xl font-black text-slate-800 uppercase italic">Ghi nhớ công thức</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="p-8 bg-blue-50 rounded-3xl border-2 border-blue-100">
                        <p class="text-2xl font-black text-blue-800 mb-4 uppercase">1. Diện tích xung quanh (Sxq)</p>
                        <div class="bg-white p-6 rounded-2xl shadow-sm italic text-3xl text-center font-bold text-blue-600">
                            Sxq = Chu vi đáy x Chiều cao
                        </div>
                        <p class="mt-4 text-xl text-slate-600 font-bold">= (a + b) x 2 x h</p>
                    </div>
                    <div class="p-8 bg-blue-50 rounded-3xl border-2 border-blue-100">
                        <p class="text-2xl font-black text-blue-800 mb-4 uppercase">2. Diện tích toàn phần (Stp)</p>
                        <div class="bg-white p-6 rounded-2xl shadow-sm italic text-3xl text-center font-bold text-blue-600">
                            Stp = Sxq + S(2 đáy)
                        </div>
                        <p class="mt-4 text-xl text-slate-600 font-bold">= Sxq + a x b x 2</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-16 text-left">
            <!-- Bài 1 -->
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">1</div>
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight italic">Tính diện tích HHCN</p>
                </div>
                
                <div class="bg-blue-50 p-8 rounded-[3rem] border-2 border-blue-100 mb-8">
                    <p class="text-2xl font-bold text-slate-700 leading-relaxed">Cho HHCN có kích thước: <br>
                        <span class="text-blue-600">Chiều dài (a) = 11cm</span>, 
                        <span class="text-blue-600 ml-4">Chiều rộng (b) = 2cm</span>, 
                        <span class="text-blue-600 ml-4">Chiều cao (h) = 4cm</span>.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-sm">
                        <p class="text-xl font-bold text-slate-500 mb-4 italic">a) Diện tích xung quanh:</p>
                        <div class="flex items-center gap-4">
                            <input type="text" id="ans-117-1-a" class="flex-1 bg-slate-50 border-none rounded-2xl p-6 text-4xl font-black text-center text-blue-600 outline-none focus:ring-4 ring-indigo-200" placeholder="...">
                            <span class="text-3xl font-black text-slate-400">cm²</span>
                        </div>
                    </div>
                    <div class="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-sm">
                        <p class="text-xl font-bold text-slate-500 mb-4 italic">b) Diện tích toàn phần:</p>
                        <div class="flex items-center gap-4">
                            <input type="text" id="ans-117-1-b" class="flex-1 bg-slate-50 border-none rounded-2xl p-6 text-4xl font-black text-center text-blue-600 outline-none focus:ring-4 ring-purple-200" placeholder="...">
                            <span class="text-3xl font-black text-slate-400">cm²</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mt-12">
                     <button onclick="window.check_117_1()" class="w-24 h-24 bg-blue-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">2</div>
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight italic uppercase">Bài toán thực tế</p>
                </div>

                <div class="bg-emerald-50 p-10 rounded-[3rem] border-2 border-emerald-100 space-y-8">
                    <p class="text-2xl font-bold text-slate-700 leading-relaxed">
                        Một căn phòng HHCN dài <span class="bg-white px-3 py-1 rounded-lg text-emerald-600">8m</span>, rộng <span class="bg-white px-3 py-1 rounded-lg text-emerald-600">5m</span>, cao <span class="bg-white px-3 py-1 rounded-lg text-emerald-600">4m</span>. 
                        Người ta quét sơn 4 bức tường xung quanh. Tính diện tích cần sơn?
                    </p>
                    
                    <div class="space-y-4">
                        <p class="text-lg font-bold text-emerald-700 uppercase tracking-widest">Lời giải chi tiết:</p>
                        <textarea id="ans-117-2-text" rows="5" class="w-full bg-white border-none rounded-[2rem] p-8 text-2xl font-bold shadow-inner outline-none focus:ring-4 ring-emerald-200" placeholder="Viết lời giải tại đây..."></textarea>
                    </div>

                    <div class="flex flex-col md:flex-row items-center justify-start gap-6 bg-white p-6 rounded-[2rem] shadow-sm">
                        <p class="text-2xl font-black text-slate-600 italic">Đáp số cuối cùng:</p>
                        <div class="flex items-center gap-4 w-full md:w-auto">
                            <input type="text" id="ans-117-2-val" class="flex-1 md:w-48 bg-emerald-50 border-none rounded-xl p-6 text-4xl font-black text-center text-emerald-600" placeholder="...">
                            <span class="text-2xl font-black text-slate-400">m²</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mt-12">
                     <button onclick="window.check_117_2()" class="w-24 h-24 bg-emerald-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>

        <script>
        window.check_117_1 = function() {
            const v1 = document.getElementById('ans-117-1-a').value.trim();
            const v2 = document.getElementById('ans-117-1-b').value.trim();
            const isCorrect = (v1 === '104' && v2 === '148');
            window.showMathFeedback(isCorrect, "a) 104; b) 148", \`\${v1}, \${v2}\`, 
                "Sxq = (d+r) x 2 x h; Stp = Sxq + (d x r x 2).",
                \`<div class="text-left space-y-4">
                    <p class="text-2xl font-bold text-emerald-600">Lời giải chi tiết:</p>
                    <p class="text-xl">a) Diện tích xung quanh là: (11 + 2) x 2 x 4 = 104 (cm²)</p>
                    <p class="text-xl">b) Diện tích toàn phần là: 104 + (11 x 2 x 2) = 148 (cm²)</p>
                </div>\`
            );
            window.submitMathLesson("Tiết 117 - Bài 1", isCorrect ? 100 : 0, "ans-117-1-a", 0, 2, isCorrect ? 2 : 0);
        };

        window.check_117_2 = async function() {
            const val = document.getElementById('ans-117-2-val').value.trim();
            const text = document.getElementById('ans-117-2-text').value.trim();
            const isCorrectVal = val === '104';
            
            if (!text) {
                window.showMathFeedback(false, "104", val, "Em hãy nhập cả lời giải chi tiết nữa nhé!", "");
                return;
            }

            window.showMathFeedback(isCorrectVal, "104", val, "Diện tích cần sơn chính là diện tích 4 bức tường xung quanh.",
                \`<div class="text-left space-y-4">
                    <p class="text-2xl font-bold text-emerald-600 text-center uppercase mb-4">Gợi ý bài giải</p>
                    <p class="text-xl font-bold text-slate-700">Diện tích cần quét sơn (Sxq) là:</p>
                    <p class="text-3xl text-center font-black text-emerald-600 bg-emerald-50 py-4 rounded-xl">(8 + 5) x 2 x 4 = 104 (m²)</p>
                    <p class="text-xl font-bold text-slate-700">Đáp số: 104 m²</p>
                </div>\`
            );
            
            window.submitMathLesson("Tiết 117 - Bài 2", isCorrectVal ? 100 : 0, "ans-117-2-val", 0, 1, isCorrectVal ? 1 : 0);
            
            // AI grading if available
            if (window.AIInteraction?.gradeWithModal) {
                 window.AIInteraction.gradeWithModal(
                    "Tính Sxq căn phòng 8m, 5m, 4m.",
                    "Sxq = (8+5)*2*4 = 104 m2",
                    text
                );
            }
        };
        </script>
    `,
    "quizPool": metadata.quizPool,
    "metadata": metadata
};

/* --- MATH_BUILDER_METADATA ---
\${JSON.stringify(metadata)}
--- END_METADATA --- */
