const metadata = {
    "lessonInfo": {
        "period": "120",
        "week": "24",
        "topic": "Hình học và Đo lường",
        "title": "Sxq & Stp HÌNH LẬP PHƯƠNG",
        "desc": "Tính diện tích xung quanh và diện tích toàn phần của hình lập phương."
    },
    "exercises": [
        {
            "id": "120_1",
            "type": "fill_in_blank",
            "statement": "Tính diện tích xung quanh và toàn phần hình lập phương:",
            "subQuestions": [
                { "label": "a) Cạnh 12cm: Sxq", "id": "120-1-a-xq", "answer": "576", "unit": "cm²" },
                { "label": "a) Cạnh 12cm: Stp", "id": "120-1-a-tp", "answer": "864", "unit": "cm²" },
                { "label": "b) Cạnh 1,5m: Sxq", "id": "120-1-b-xq", "answer": "9", "unit": "m²" },
                { "label": "b) Cạnh 1,5m: Stp", "id": "120-1-b-tp", "answer": "13.5", "unit": "m²" }
            ],
            "image": "assets/images/toan/toan_tap_2/120-khampha-xq.webp"
        },
        {
            "id": "120_2",
            "type": "write_problem",
            "statement": "Cửa hàng cuốn túi bóng vừa đủ quanh chiếc bánh hình lập phương cạnh 9cm. Tính diện tích túi bóng cần dùng.",
            "answer": "324",
            "unit": "cm²",
            "image": "assets/images/toan/toan_tap_2/120-b2-cake.webp",
            "hint": "Trong bài này, cuốn 'quanh' được hiểu là tính diện tích xung quanh (Sxq = a x a x 4)."
        }
    ],
    "quizPool": [
        { "question": "Hình lập phương có mấy mặt?", "options": ["4 mặt", "6 mặt", "8 mặt", "12 mặt"], "answer": 1, "level": "easy" },
        { "question": "Các mặt của hình lập phương là hình gì?", "options": ["Hình chữ nhật", "Hình vuông", "Hình tròn", "Hình tam giác"], "answer": 1, "level": "easy" },
        { "question": "Công thức Sxq của HLP cạnh a là?", "options": ["a*a*4", "a*a*6", "a*4", "a*a"], "answer": 0, "level": "easy" },
        { "question": "Cạnh HLP là 5cm. Sxq là?", "options": ["25 cm²", "100 cm²", "150 cm²", "50 cm²"], "answer": 1, "level": "medium" },
        { "question": "Cạnh HLP là 2dm. Stp là?", "options": ["16 dm²", "20 dm²", "24 dm²", "8 dm²"], "answer": 2, "level": "medium" },
        { "question": "Stp của HLP bằng Sxq cộng với?", "options": ["S 1 đáy", "S 2 đáy", "S 4 đáy", "0"], "answer": 1, "level": "medium" },
        { "question": "Nếu cạnh tăng 2 lần thì Sxq tăng?", "options": ["2 lần", "4 lần", "6 lần", "8 lần"], "answer": 1, "level": "hard" },
        { "question": "Hình lập phương là HHCN đặc biệt, đúng hay sai?", "options": ["Đúng", "Sai"], "answer": 0, "level": "easy" },
        { "question": "Đơn vị đo diện tích là?", "options": ["m", "m²", "m³", "kg"], "answer": 1, "level": "easy" },
        { "question": "S một mặt của HLP là 16cm². Cạnh là?", "options": ["4 cm", "8 cm", "2 cm", "16 cm"], "answer": 0, "level": "medium" },
        { "question": "Công thức Stp của HLP là?", "options": ["a*a*4", "a*a*6", "a*a", "a*6"], "answer": 1, "level": "easy" },
        { "question": "HLP cạnh 1m có Stp là?", "options": ["4 m²", "6 m²", "1 m²", "12 m²"], "answer": 1, "level": "easy" },
        { "question": "HLP có bao nhiêu cạnh?", "options": ["6", "8", "12", "4"], "answer": 2, "level": "easy" },
        { "question": "Sxq = 400. S một mặt là?", "options": ["100", "50", "200", "80"], "answer": 0, "level": "medium" },
        { "question": "Stp = 600. S một mặt là?", "options": ["100", "50", "200", "60"], "answer": 0, "level": "medium" }
    ]
};

export const lesson120 = {
    ...metadata.lessonInfo,
    "content": `
        <div class="theory-section space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 text-left">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Khám phá a -->
                <div class="glass-card p-8 rounded-[2.5rem] bg-amber-50 border border-amber-100 shadow-xl overflow-hidden relative">
                    <div class="flex items-center gap-3 mb-6">
                        <span class="bg-amber-500 text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-2xl">a</span>
                        <h4 class="text-3xl font-black text-amber-700 uppercase italic underline decoration-amber-300">DIỆN TÍCH XUNG QUANH</h4>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-amber-500 mb-6 font-bold text-slate-700 leading-relaxed text-xl">
                        "Diện tích xung quanh của hình lập phương bằng diện tích một mặt nhân với 4."
                    </div>
                    <div class="bg-amber-600 p-6 rounded-3xl text-white shadow-lg text-center transform hover:scale-105 transition-all">
                        <p class="text-4xl font-black italic tracking-tighter">Sxq = (a × a) × 4</p>
                    </div>
                    <img src="assets/images/toan/toan_tap_2/120-khampha-xq.webp" class="mt-8 w-full rounded-2xl shadow-md border-4 border-white">
                </div>

                <!-- Khám phá b -->
                <div class="glass-card p-8 rounded-[2.5rem] bg-blue-50 border border-blue-100 shadow-xl overflow-hidden relative">
                    <div class="flex items-center gap-3 mb-6">
                        <span class="bg-blue-500 text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-2xl">b</span>
                        <h4 class="text-3xl font-black text-blue-700 uppercase italic underline decoration-purple-300">DIỆN TÍCH TOÀN PHẦN</h4>
                    </div>
                     <div class="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-blue-500 mb-6 font-bold text-slate-700 leading-relaxed text-xl">
                        "Diện tích toàn phần của hình lập phương bằng diện tích một mặt nhân với 6."
                    </div>
                    <div class="bg-blue-600 p-6 rounded-3xl text-white shadow-lg text-center transform hover:scale-105 transition-all">
                        <p class="text-4xl font-black italic tracking-tighter">Stp = (a × a) × 6</p>
                    </div>
                    <img src="assets/images/toan/toan_tap_2/120-khampha-tp.webp" class="mt-8 w-full rounded-2xl shadow-md border-4 border-white">
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-16 text-left">
            <!-- Bài 1 -->
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                     <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">1</div>
                     <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight italic">Tính diện tích</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <!-- 1a -->
                    <div class="space-y-6">
                         <h4 class="text-2xl font-black text-blue-600 flex items-center gap-3">
                            <span class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">a</span>
                            Cạnh a = 12 cm
                         </h4>
                         <div class="space-y-4">
                            <div class="bg-slate-50 p-6 rounded-3xl border-2 border-slate-100">
                                <label class="text-sm font-black text-slate-400 uppercase tracking-widest block mb-2 text-left">Diện tích xung quanh (cm²)</label>
                                <input type="number" id="ans-120-1a-xq" class="w-full bg-white border-none rounded-2xl p-4 text-4xl font-black text-blue-600 text-center outline-none focus:ring-4 ring-blue-200" placeholder="?">
                            </div>
                            <div class="bg-slate-50 p-6 rounded-3xl border-2 border-slate-100">
                                <label class="text-sm font-black text-slate-400 uppercase tracking-widest block mb-2 text-left">Diện tích toàn phần (cm²)</label>
                                <input type="number" id="ans-120-1a-tp" class="w-full bg-white border-none rounded-2xl p-4 text-4xl font-black text-blue-600 text-center outline-none focus:ring-4 ring-purple-200" placeholder="?">
                            </div>
                         </div>
                    </div>

                    <!-- 1b -->
                    <div class="space-y-6">
                         <h4 class="text-2xl font-black text-emerald-600 flex items-center gap-3">
                            <span class="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">b</span>
                            Cạnh a = 1,5 m
                         </h4>
                         <div class="space-y-4">
                            <div class="bg-slate-50 p-6 rounded-3xl border-2 border-slate-100">
                                <label class="text-sm font-black text-slate-400 uppercase tracking-widest block mb-2 text-left">Diện tích xung quanh (m²)</label>
                                <input type="text" id="ans-120-1b-xq" class="w-full bg-white border-none rounded-2xl p-4 text-4xl font-black text-blue-600 text-center outline-none focus:ring-4 ring-emerald-200" placeholder="?">
                            </div>
                            <div class="bg-slate-50 p-6 rounded-3xl border-2 border-slate-100">
                                <label class="text-sm font-black text-slate-400 uppercase tracking-widest block mb-2 text-left">Diện tích toàn phần (m²)</label>
                                <input type="text" id="ans-120-1b-tp" class="w-full bg-white border-none rounded-2xl p-4 text-4xl font-black text-blue-600 text-center outline-none focus:ring-4 ring-purple-200" placeholder="?">
                            </div>
                         </div>
                    </div>
                </div>
                
                <div class="flex justify-center mt-12">
                     <button onclick="window.check_120_1()" class="w-24 h-24 bg-blue-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div class="glass-card p-10 rounded-[3rem] bg-amber-900 border-amber-700 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                     <div class="w-16 h-16 bg-yellow-400 text-amber-900 rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">2</div>
                     <p class="text-3xl md:text-4xl text-white leading-relaxed font-black uppercase tracking-tight italic text-left">Cuốn túi bóng quanh bánh</p>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/5 p-8 rounded-[3rem] border border-white/10">
                    <div class="space-y-6">
                        <p class="text-2xl font-bold text-amber-200 leading-tight italic">
                            "Bánh hình lập phương cạnh 9 cm. Cuốn túi bóng VỪA ĐỦ QUANH chiếc bánh."
                        </p>
                        <div class="flex items-center gap-4">
                             <input type="number" id="ans-120-2" class="w-48 bg-white/10 border-none rounded-xl p-4 text-5xl font-black text-yellow-300 text-center outline-none focus:ring-4 ring-yellow-400" placeholder="?">
                             <span class="text-3xl font-black text-white italic">cm²</span>
                        </div>
                    </div>
                    <img src="assets/images/toan/toan_tap_2/120-b2-cake.webp" class="w-full rounded-2xl shadow-2xl border-4 border-white/20">
                </div>
                <div class="flex justify-center mt-12">
                     <button onclick="window.check_120_2()" class="w-24 h-24 bg-yellow-400 text-amber-900 rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>

        <script>
        window.check_120_1 = function() {
            const v1a_xq = document.getElementById('ans-120-1a-xq').value.trim();
            const v1a_tp = document.getElementById('ans-120-1a-tp').value.trim();
            const v1b_xq = document.getElementById('ans-120-1b-xq').value.trim().replace(',', '.');
            const v1b_tp = document.getElementById('ans-120-1b-tp').value.trim().replace(',', '.');

            const isCorrect = (v1a_xq==='576' && v1a_tp==='864' && v1b_xq==='9' && v1b_tp==='13.5');
            window.showMathFeedback(isCorrect, "a) 576, 864; b) 9, 13.5", \`\${v1a_xq}, \${v1a_tp}, \${v1b_xq}, \${v1b_tp}\`, 
                "Sxq = a x a x 4; Stp = a x a x 6.",
                \`<div class="text-left text-xl space-y-2">
                    <p class="font-bold text-emerald-700 italic underline uppercase">Lời giải chi tiết:</p>
                    <p>a) Sxq = 12x12x4 = 576 (cm²); Stp = 12x12x6 = 864 (cm²)</p>
                    <p>b) Sxq = 1.5x1.5x4 = 9 (m²); Stp = 1.5x1.5x6 = 13.5 (m²)</p>
                </div>\`
            );
            window.submitMathLesson("Tiết 120 - Bài 1", isCorrect ? 100 : 0, "ans-120-1a-xq", 0, 4, isCorrect ? 4 : 0);
        };

        window.check_120_2 = function() {
            const v = document.getElementById('ans-120-2').value.trim();
            const isCorrect = (v === '324');
            window.showMathFeedback(isCorrect, "324", v, "Tính diện tích xung quanh: 9 x 9 x 4 = 324 (cm²).", 
                \`<p class="text-left text-2xl font-bold text-emerald-700">Chính xác! Diện tích túi bóng cuốn quanh (4 mặt) là 324 cm².</p>\`
            );
            window.submitMathLesson("Tiết 120 - Bài 2", isCorrect ? 100 : 0, "ans-120-2", 0, 1, isCorrect ? 1 : 0);
        };
        </script>
    `,
    "quizPool": metadata.quizPool,
    "metadata": metadata
};

/* --- MATH_BUILDER_METADATA ---
\${JSON.stringify(metadata)}
--- END_METADATA --- */

