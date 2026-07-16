const metadata = {
    "lessonInfo": {
        "period": "118",
        "week": "24",
        "topic": "Hình học và Đo lường",
        "title": "DIỆN TÍCH TOÀN PHẦN HHCN (TIẾP THEO)",
        "desc": "Luyện tập tính diện tích toàn phần của hình hộp chữ nhật."
    },
    "exercises": [
        {
            "id": "118_1",
            "type": "fill_in_blank",
            "statement": "Tính diện tích toàn phần mỗi hình dưới đây:",
            "subQuestions": [
                { "label": "Hình A", "id": "118-1-a", "answer": "5200", "unit": "cm²" },
                { "label": "Hình B", "id": "118-1-b", "answer": "6250", "unit": "cm²" },
                { "label": "Hình C", "id": "118-1-c", "answer": "5350", "unit": "cm²" }
            ],
            "image": "assets/images/toan/toan_tap_2/118-b1-images.webp"
        },
        {
            "id": "118_2",
            "type": "selection",
            "statement": "Quan sát các hình dưới đây và chọn hộp có diện tích toàn phần LỚN NHẤT:",
            "options": ["A", "B", "C"],
            "answer": "B",
            "image": "assets/images/toan/toan_tap_2/118-b2-boxes.webp"
        }
    ],
    "quizPool": [
        { "question": "Muốn tính diện tích toàn phần HHCN ta lấy Sxq cộng với?", "options": ["Diện tích 1 đáy", "Diện tích 2 đáy", "Thể tích", "Chu vi đáy"], "answer": 1, "level": "easy" },
        { "question": "HHCN có d=10cm, r=5cm, h=2cm. Sxq là?", "options": ["30 cm²", "60 cm²", "100 cm²", "150 cm²"], "answer": 1, "level": "medium" },
        { "question": "Công thức tính diện tích 2 đáy HHCN là?", "options": ["a*b", "a*b*2", "(a+b)*2", "(a+b)*h"], "answer": 1, "level": "easy" },
        { "question": "Nếu Sxq = 100cm², Sđáy = 20cm² thì Stp bằng?", "options": ["120 cm²", "140 cm²", "160 cm²", "200 cm²"], "answer": 1, "level": "easy" },
        { "question": "Hình nào có các mặt là hình chữ nhật?", "options": ["HHCN", "HLP", "Hình trụ", "Hình tròn"], "answer": 0, "level": "easy" },
        { "question": "HHCN có bao nhiêu cạnh bằng nhau từng đôi một?", "options": ["4", "6", "8", "12"], "answer": 0, "level": "medium" },
        { "question": "Diện tích toàn phần của hộp không nắp là Sxq cộng với?", "options": ["S 1 đáy", "S 2 đáy", "S 4 đáy", "0"], "answer": 0, "level": "medium" },
        { "question": "Một khối HHCN có 3 kích thước: 1m, 2m, 3m. Sxq là?", "options": ["6 m²", "12 m²", "18 m²", "22 m²"], "answer": 2, "level": "medium" },
        { "question": "Đơn vị đo diện tích là gì?", "options": ["dm", "dm²", "dm³", "kg"], "answer": 1, "level": "easy" },
        { "question": "Muốn tính diện tích xung quanh ta lấy chu vi đáy nhân với?", "options": ["Cạnh", "Đường kính", "Chiều cao", "Bán kính"], "answer": 2, "level": "easy" },
        { "question": "Stp của một khối lập phương cạnh 2cm là?", "options": ["8 cm²", "16 cm²", "24 cm²", "32 cm²"], "answer": 2, "level": "hard" },
        { "question": "HHCN có mấy mặt đáy?", "options": ["1", "2", "3", "4"], "answer": 1, "level": "easy" },
        { "question": "Diện tích đáy HHCN tính bằng d x r đúng hay sai?", "options": ["Đúng", "Sai"], "answer": 0, "level": "easy" },
        { "question": "Sxq = 200, S2đáy = 50. Stp = ?", "options": ["250", "300", "150", "225"], "answer": 0, "level": "easy" },
        { "question": "Hình hộp chữ nhật là hình khối không gian đúng hay sai?", "options": ["Đúng", "Sai"], "answer": 0, "level": "easy" }
    ]
};

export const lesson118 = {
    ...metadata.lessonInfo,
    "content": `
        <div class="theory-section space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 text-left">
            <div class="glass-card p-10 rounded-[3rem] border border-blue-50 shadow-2xl relative overflow-hidden bg-white/80 backdrop-blur-xl">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl shadow-lg">🎯</div>
                    <h3 class="text-4xl font-black text-slate-800 uppercase italic">Kiến thức cần nhớ</h3>
                </div>
                <div class="p-8 bg-blue-50 rounded-[2.5rem] border-2 border-blue-100 flex flex-col md:flex-row items-center gap-8">
                    <div class="flex-1 space-y-4">
                        <p class="text-2xl font-bold text-slate-700 leading-relaxed">
                            <span class="text-blue-600 font-black italic underline">Khái niệm:</span> Diện tích toàn phần (Stp) của hình hộp chữ nhật là tổng diện tích của 6 mặt.
                        </p>
                        <div class="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-blue-500">
                             <p class="text-3xl font-black text-blue-700 italic text-center">Stp = Sxq + S(2 đáy)</p>
                        </div>
                    </div>
                    <img src="assets/images/toan/toan_tap_2/118-khampha-illus.webp" class="h-48 rounded-2xl shadow-md border-4 border-white">
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
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight italic text-left">Tính diện tích toàn phần</p>
                </div>

                <div class="bg-blue-50 p-8 rounded-[3rem] border-2 border-blue-100 mb-8 flex justify-center">
                    <img src="assets/images/toan/toan_tap_2/118-b1-images.webp" class="w-full w-full rounded-2xl shadow-lg">
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm text-center">
                        <p class="text-xl font-bold text-orange-600 mb-4 tracking-widest uppercase">HÌNH A</p>
                        <div class="flex items-center gap-2">
                             <input type="text" id="ans-118_1_a" class="w-full bg-slate-50 border-none rounded-xl p-4 text-3xl font-black text-center text-blue-600" placeholder="...">
                             <span class="text-lg font-bold text-slate-400">cm²</span>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm text-center">
                        <p class="text-xl font-bold text-cyan-600 mb-4 tracking-widest uppercase">HÌNH B</p>
                        <div class="flex items-center gap-2">
                             <input type="text" id="ans-118_1_b" class="w-full bg-slate-50 border-none rounded-xl p-4 text-3xl font-black text-center text-blue-600" placeholder="...">
                             <span class="text-lg font-bold text-slate-400">cm²</span>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm text-center">
                        <p class="text-xl font-bold text-emerald-600 mb-4 tracking-widest uppercase">HÌNH C</p>
                        <div class="flex items-center gap-2">
                             <input type="text" id="ans-118_1_c" class="w-full bg-slate-50 border-none rounded-xl p-4 text-3xl font-black text-center text-blue-600" placeholder="...">
                             <span class="text-lg font-bold text-slate-400">cm²</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mt-12">
                     <button onclick="window.check_118_1()" class="w-24 h-24 bg-blue-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div class="glass-card p-10 rounded-[3rem] bg-blue-900 border-blue-700 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-yellow-400 text-blue-900 rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">2</div>
                    <p class="text-3xl md:text-4xl text-white leading-relaxed font-black uppercase tracking-tight italic">Hộp nào có Stp lớn nhất?</p>
                </div>

                <div class="bg-white/10 p-8 rounded-[3rem] border border-white/20 flex flex-col items-center gap-8">
                    <img src="assets/images/toan/toan_tap_2/118-b2-boxes.webp" class="w-full w-full rounded-2xl shadow-2xl border-4 border-white">
                    
                    <div class="grid grid-cols-3 gap-6 w-full w-full">
                        <button onclick="window.select_118_2('A')" id="btn-118-2-A" class="bg-white/5 border-2 border-white/20 p-6 rounded-[2.5rem] text-4xl font-black text-white hover:bg-white/20 transition-all uppercase">A</button>
                        <button onclick="window.select_118_2('B')" id="btn-118-2-B" class="bg-white/5 border-2 border-white/20 p-6 rounded-[2.5rem] text-4xl font-black text-white hover:bg-white/20 transition-all uppercase">B</button>
                        <button onclick="window.select_118_2('C')" id="btn-118-2-C" class="bg-white/5 border-2 border-white/20 p-6 rounded-[2.5rem] text-4xl font-black text-white hover:bg-white/20 transition-all uppercase">C</button>
                    </div>
                </div>

                <div class="flex justify-center mt-12">
                     <button onclick="window.check_118_2()" class="w-24 h-24 bg-yellow-400 text-blue-900 rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>

        <script>
        let ans2 = null;
        window.select_118_2 = function(c) {
            ans2 = c;
            ['A','B','C'].forEach(v => {
                const btn = document.getElementById('btn-118-2-'+v);
                btn.className = (v===c ? "bg-yellow-400 border-2 border-transparent p-6 rounded-[2.5rem] text-4xl font-black text-blue-900 shadow-xl scale-110 transition-all uppercase" : "bg-white/5 border-2 border-white/20 p-6 rounded-[2.5rem] text-4xl font-black text-white hover:bg-white/20 transition-all uppercase opacity-50");
            });
        };

        window.check_118_1 = function() {
            const vA = document.getElementById('ans-118_1_a').value.trim();
            const vB = document.getElementById('ans-118_1_b').value.trim();
            const vC = document.getElementById('ans-118_1_c').value.trim();
            const isCorrect = (vA === '5200' && vB === '6250' && vC === '5350');
            window.showMathFeedback(isCorrect, "A: 5200; B: 6250; C: 5350", \`\${vA}, \${vB}, \${vC}\`, 
                "Tính Sxq rồi cộng diện tích hai mặt đáy của mỗi hình.",
                \`<div class="text-left text-xl space-y-2">
                    <p class="font-bold text-emerald-700 italic underline">Đáp án chi tiết:</p>
                    <p>HÌNH A: (30+20)x2x40 + (30x20x2) = 4000 + 1200 = 5200 (cm²)</p>
                    <p>HÌNH B: (25+25)x2x50 + (25x25x2) = 5000 + 1250 = 6250 (cm²)</p>
                    <p>HÌNH C: (25+15)x2x55 + (25x15x2) = 4400 + 750 = 5350 (cm²)</p>
                </div>\`
            );
            window.submitMathLesson("Tiết 118 - Bài 1", isCorrect ? 100 : 0, "ans-118_1_a", 0, 3, isCorrect ? 3 : 0);
        };

        window.check_118_2 = function() {
            const isCorrect = ans2 === 'B';
            window.showMathFeedback(isCorrect, "B", ans2, "So sánh diện tích toàn phần của 3 hộp đã tính ở bài 1.", 
                \`<p class="text-left text-2xl font-bold text-emerald-700">Chính xác! Hộp B có Stp = 6250 cm² là lớn nhất.</p>\`
            );
            window.submitMathLesson("Tiết 118 - Bài 2", isCorrect ? 100 : 0, "btn-118-2-B", 0, 1, isCorrect ? 1 : 0);
        };
        </script>
    `,
    "quizPool": metadata.quizPool,
    "metadata": metadata
};

/* --- MATH_BUILDER_METADATA ---
\${JSON.stringify(metadata)}
--- END_METADATA --- */

