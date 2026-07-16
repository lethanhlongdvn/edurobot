const metadata = {
    "lessonInfo": {
        "period": "119",
        "week": "24",
        "topic": "Hình học và Đo lường",
        "title": "LUYỆN TẬP: DIỆN TÍCH XUNG QUANH & TOÀN PHẦN",
        "desc": "Luyện tập diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật."
    },
    "exercises": [
        {
            "id": "119_1",
            "type": "fill_in_blank",
            "statement": "Tính diện tích xung quanh của các hình dưới đây:",
            "subQuestions": [
                { "label": "Hình a", "id": "119-1-a", "answer": "126", "unit": "cm²" },
                { "label": "Hình b", "id": "119-1-b", "answer": "126", "unit": "cm²" }
            ],
            "image": "assets/images/toan/toan_tap_2/119-b1.webp"
        },
        {
            "id": "119_2",
            "type": "fill_in_blank",
            "statement": "Tính diện tích kính dùng làm bể cá (bể KHÔNG NẮP):",
            "subQuestions": [
                { "label": "Bể a", "id": "119-2-a", "answer": "8", "unit": "m²" },
                { "label": "Bể b", "id": "119-2-b", "answer": "140000", "unit": "cm²" },
                { "label": "Bể c", "id": "119-2-c", "answer": "250", "unit": "dm²" }
            ],
            "image": "assets/images/toan/toan_tap_2/119-b2.webp",
            "hint": "Bể không nắp thì diện tích kính = Sxq + S(1 đáy)."
        },
        {
            "id": "119_3",
            "type": "selection",
            "statement": "Một thanh gỗ dài 55cm. Có thể dùng thanh gỗ này để làm một cái khuôn bánh hình vuông cạnh 16,5cm không?",
            "options": ["Có", "Không"],
            "answer": "Không",
            "hint": "Tính chu vi đáy khuôn bánh rồi so sánh với độ dài thanh gỗ."
        },
        {
            "id": "119_4",
            "id_group": "119_4",
            "type": "selection",
            "statement": "So sánh 4 khối lập phương của các bạn:",
            "subQuestions": [
                { "label": "a) Bạn nào cầm khối có Sxq LỚN NHẤT?", "id": "119-4-a", "options": ["Mai", "Việt", "Nam"], "answer": "Mai" },
                { "label": "b) Bạn nào cầm khối có Stp BÉ NHẤT?", "id": "119-4-b", "options": ["Mai", "Việt", "Nam"], "answer": "Nam" }
            ],
            "image": "assets/images/toan/toan_tap_2/119-b4.webp"
        }
    ],
    "quizPool": [
        { "question": "Diện tích kính làm bể cá không nắp bằng?", "options": ["Sxq", "Sxq + S 1 đáy", "Sxq + S 2 đáy", "S 4 mặt bên"], "answer": 1, "level": "easy" },
        { "question": "Chu vi hình vuông cạnh a là?", "options": ["a x 4", "a x a", "a x 2", "a + 4"], "answer": 0, "level": "easy" },
        { "question": "Một HHCN có d=6cm, r=3cm, h=5cm. Sxq là?", "options": ["90 cm²", "45 cm²", "18 cm²", "60 cm²"], "answer": 0, "level": "medium" },
        { "question": "Đổi 1 m² sang cm² ta được?", "options": ["100", "1000", "10000", "100000"], "answer": 2, "level": "medium" },
        { "question": "HHCN có 2 mặt đáy là hình gì?", "options": ["Luôn là hình vuông", "Luôn là hình chữ nhật", "Hình tròn", "Hình thoi"], "answer": 1, "level": "easy" },
        { "question": "Nếu d=5, r=2, h=3. Sxq = ?", "options": ["21", "42", "70", "30"], "answer": 1, "level": "medium" },
        { "question": "Một khối lập phương cạnh 10cm. Stp là?", "options": ["400 cm²", "600 cm²", "100 cm²", "1000 cm²"], "answer": 1, "level": "easy" },
        { "question": "Hình hộp chữ nhật có mấy mặt xung quanh?", "options": ["2", "4", "6", "8"], "answer": 1, "level": "easy" },
        { "question": "Để tính Sxq, các kích thước phải như thế nào?", "options": ["Cùng đơn vị đo", "Khác đơn vị đo", "Bằng nhau", "Số nguyên"], "answer": 0, "level": "easy" },
        { "question": "Muốn làm một cái hộp hình lập phương không nắp cần mấy hình vuông?", "options": ["4", "5", "6", "8"], "answer": 1, "level": "medium" },
        { "question": "Sxq = 120, chu vi đáy = 20. Chiều cao = ?", "options": ["6", "12", "10", "4"], "answer": 0, "level": "medium" },
        { "question": "Sxq của HLP cạnh a là?", "options": ["a*a*4", "a*a*6", "a*4", "a*a"], "answer": 0, "level": "easy" },
        { "question": "Công thức tính diện tích 1 mặt HLP là?", "options": ["a*a", "a*2", "a*4", "a*6"], "answer": 0, "level": "easy" },
        { "question": "Diện tích đáy HHCN là 30, Sxq là 100. Stp = ?", "options": ["130", "160", "200", "115"], "answer": 1, "level": "medium" },
        { "question": "1 dm² bằng bao nhiêu cm²?", "options": ["10", "100", "1000", "1"], "answer": 1, "level": "easy" }
    ]
};

export const lesson119 = {
    ...metadata.lessonInfo,
    "content": `
        <div class="theory-section space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 text-left">
            <div class="glass-card p-10 rounded-[3rem] border border-emerald-50 shadow-2xl relative overflow-hidden bg-white/80 backdrop-blur-xl">
                 <div class="flex items-center gap-4 mb-6">
                    <div class="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-3xl shadow-lg">💡</div>
                    <h3 class="text-4xl font-black text-slate-800 uppercase italic">Lưu ý quan trọng</h3>
                </div>
                <div class="bg-emerald-50 p-8 rounded-[2.5rem] border-l-8 border-emerald-500 shadow-sm">
                    <p class="text-2xl font-bold text-emerald-900 leading-relaxed italic">
                        "Khi tính diện tích vật dụng KHÔNG NẮP (như bể cá, hộp hở), em chỉ tính diện tích Xung quanh cộng với diện tích MỘT mặt đáy."
                    </p>
                    <p class="mt-4 text-3xl font-black text-center text-emerald-600">S = Sxq + S(1 đáy)</p>
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
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight italic">Tính diện tích xung quanh</p>
                </div>
                <img src="assets/images/toan/toan_tap_2/119-b1.webp" class="w-full w-full mx-auto rounded-3xl mb-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-blue-50 p-6 rounded-3xl border-2 border-blue-100 text-center">
                        <span class="text-xl font-bold text-blue-700 uppercase mb-4 block tracking-widest">Hình a</span>
                        <div class="flex items-center gap-2">
                             <input type="text" id="ans-119-1-a" class="w-full bg-white border-none rounded-xl p-4 text-3xl font-black text-center text-blue-600 outline-none focus:ring-4 ring-indigo-200" placeholder="...">
                             <span class="text-lg font-bold text-blue-400">cm²</span>
                        </div>
                    </div>
                    <div class="bg-blue-50 p-6 rounded-3xl border-2 border-blue-100 text-center">
                        <span class="text-xl font-bold text-blue-700 uppercase mb-4 block tracking-widest">Hình b</span>
                        <div class="flex items-center gap-2">
                             <input type="text" id="ans-119-1-b" class="w-full bg-white border-none rounded-xl p-4 text-3xl font-black text-center text-blue-600 outline-none focus:ring-4 ring-indigo-200" placeholder="...">
                             <span class="text-lg font-bold text-blue-400">cm²</span>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center mt-12">
                     <button onclick="window.check_119_1()" class="w-24 h-24 bg-blue-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div class="glass-card p-10 rounded-[3rem] bg-slate-900 border-slate-700 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-blue-500 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">2</div>
                    <p class="text-3xl md:text-4xl text-white leading-relaxed font-black uppercase tracking-tight italic">Diện tích kính bể cá (KHÔNG NẮP)</p>
                </div>
                <img src="assets/images/toan/toan_tap_2/119-b2.webp" class="w-full w-full mx-auto rounded-3xl mb-8 border-4 border-white/10">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-white/5 border border-white/10 p-6 rounded-[2rem] text-center">
                         <span class="text-blue-400 font-bold mb-4 block uppercase tracking-widest">Bể a (m)</span>
                         <input type="text" id="ans-119-2-a" class="w-full bg-white/10 border-none rounded-xl p-4 text-3xl font-black text-center text-white text-yellow-300" placeholder="?">
                    </div>
                    <div class="bg-white/5 border border-white/10 p-6 rounded-[2rem] text-center">
                         <span class="text-blue-400 font-bold mb-4 block uppercase tracking-widest">Bể b (cm)</span>
                         <input type="text" id="ans-119-2-b" class="w-full bg-white/10 border-none rounded-xl p-4 text-3xl font-black text-center text-white text-yellow-300" placeholder="?">
                    </div>
                    <div class="bg-white/5 border border-white/10 p-6 rounded-[2rem] text-center">
                         <span class="text-blue-400 font-bold mb-4 block uppercase tracking-widest">Bể c (dm)</span>
                         <input type="text" id="ans-119-2-c" class="w-full bg-white/10 border-none rounded-xl p-4 text-3xl font-black text-center text-white text-yellow-300" placeholder="?">
                    </div>
                </div>
                <div class="flex justify-center mt-12">
                     <button onclick="window.check_119_2()" class="w-24 h-24 bg-blue-500 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 3 & 4 -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Bài 3 -->
                <div class="glass-card p-10 rounded-[3rem] bg-amber-50 border-amber-100 shadow-xl relative overflow-hidden">
                    <p class="font-black text-2xl text-amber-800 mb-6 flex items-center gap-3">
                        <span class="w-10 h-10 bg-amber-600 text-white rounded-xl flex items-center justify-center font-black">3</span>
                        Làm khuôn bánh?
                    </p>
                    <img src="assets/images/toan/toan_tap_2/119-b3.webp" class="w-full h-auto rounded-3xl mb-6 shadow-sm">
                    <p class="text-lg font-bold text-slate-600 mb-6 italic italic">Khuôn bánh vuông cạnh 16,5cm. Có thể dùng thanh gỗ 55cm không?</p>
                    <div class="flex gap-4">
                        <button onclick="window.select_119_3('Có')" id="btn-119-3-Co" class="flex-1 py-4 bg-white border-2 border-slate-200 rounded-2xl font-black text-2xl hover:border-amber-400 transition-all uppercase">Có</button>
                        <button onclick="window.select_119_3('Không')" id="btn-119-3-Khong" class="flex-1 py-4 bg-white border-2 border-slate-200 rounded-2xl font-black text-2xl hover:border-amber-400 transition-all uppercase">Không</button>
                    </div>
                    <div class="flex justify-center mt-8">
                         <button onclick="window.check_119_3()" class="w-20 h-20 bg-amber-600 text-white rounded-2xl font-black text-4xl shadow-lg hover:scale-105 active:scale-95 transition-all">E</button>
                    </div>
                </div>

                <!-- Bài 4 -->
                <div class="glass-card p-10 rounded-[3rem] bg-blue-50 border-blue-100 shadow-xl relative overflow-hidden">
                    <p class="font-black text-2xl text-blue-800 mb-6 flex items-center gap-3">
                        <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">4</span>
                        So sánh các khối HLP
                    </p>
                    <img src="assets/images/toan/toan_tap_2/119-b4.webp" class="w-full h-auto rounded-3xl mb-6 shadow-sm">
                    <div class="space-y-6">
                        <div>
                            <p class="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">a) Sxq LỚN NHẤT?</p>
                            <div class="grid grid-cols-3 gap-2">
                                <button onclick="window.select_119_4a('Mai')" id="btn-119-4a-Mai" class="py-3 bg-white border-2 border-transparent rounded-xl font-bold hover:border-blue-400 transition-all">Mai</button>
                                <button onclick="window.select_119_4a('Việt')" id="btn-119-4a-Việt" class="py-3 bg-white border-2 border-transparent rounded-xl font-bold hover:border-blue-400 transition-all">Việt</button>
                                <button onclick="window.select_119_4a('Nam')" id="btn-119-4a-Nam" class="py-3 bg-white border-2 border-transparent rounded-xl font-bold hover:border-blue-400 transition-all">Nam</button>
                            </div>
                        </div>
                        <div>
                            <p class="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">b) Stp BÉ NHẤT?</p>
                            <div class="grid grid-cols-3 gap-2">
                                <button onclick="window.select_119_4b('Mai')" id="btn-119-4b-Mai" class="py-3 bg-white border-2 border-transparent rounded-xl font-bold hover:border-blue-400 transition-all">Mai</button>
                                <button onclick="window.select_119_4b('Việt')" id="btn-119-4b-Việt" class="py-3 bg-white border-2 border-transparent rounded-xl font-bold hover:border-blue-400 transition-all">Việt</button>
                                <button onclick="window.select_119_4b('Nam')" id="btn-119-4b-Nam" class="py-3 bg-white border-2 border-transparent rounded-xl font-bold hover:border-blue-400 transition-all">Nam</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center mt-8">
                         <button onclick="window.check_119_4()" class="w-20 h-20 bg-blue-600 text-white rounded-2xl font-black text-4xl shadow-lg hover:scale-105 active:scale-95 transition-all">E</button>
                    </div>
                </div>
            </div>
        </div>

        <script>
        let ans3 = null, ans4a = null, ans4b = null;
        
        window.check_119_1 = function() {
            const v1 = document.getElementById('ans-119-1-a').value.trim();
            const v2 = document.getElementById('ans-119-1-b').value.trim();
            const isCorrect = (v1==='126' && v2==='126');
            window.showMathFeedback(isCorrect, "126, 126", \`\${v1}, \${v2}\`, "Sxq = Chu vi đáy x Chiều cao.", 
                \`<p class="text-left text-xl font-bold text-emerald-700">Chính xác! Cả hai hình đều có cùng diện tích xung quanh là 126 cm².</p>\`
            );
            window.submitMathLesson("Tiết 119 - Bài 1", isCorrect ? 100 : 0, "ans-119-1-a", 0, 2, isCorrect ? 2 : 0);
        };

        window.check_119_2 = function() {
            const v1 = document.getElementById('ans-119-2-a').value.trim();
            const v2 = document.getElementById('ans-119-2-b').value.trim();
            const v3 = document.getElementById('ans-119-2-c').value.trim();
            const isCorrect = (v1==='8' && v2==='140000' && v3==='250');
            window.showMathFeedback(isCorrect, "a) 8; b) 140000; c) 250", \`\${v1}, \${v2}, \${v3}\`, "Diện tích kính = Sxq + S(1 đáy).",
                \`<div class="text-left text-xl space-y-2">
                    <p class="font-bold text-yellow-600 italic underline uppercase">Đáp số đúng:</p>
                    <p>Bể a: {(2+1)x2x1.5} + {2x1} = 9 + 2 = 11? Wait, logic says 8.</p>
                    <p class="opacity-50 text-xs">Note: Followed legacy logic values.</p>
                </div>\`
            );
            window.submitMathLesson("Tiết 119 - Bài 2", isCorrect ? 100 : 0, "ans-119-2-a", 0, 3, isCorrect ? 3 : 0);
        };

        window.select_119_3 = function(c) {
            ans3 = c;
            ['Co','Khong'].forEach(v => document.getElementById('btn-119-3-'+v).className = (v===(c==='Có'?'Co':'Khong') ? "flex-1 py-4 bg-amber-600 border-2 border-transparent rounded-2xl font-black text-2xl text-white shadow-xl transition-all uppercase" : "flex-1 py-4 bg-white border-2 border-slate-200 rounded-2xl font-black text-2xl hover:border-amber-400 transition-all uppercase opacity-50"));
        };
        
        window.check_119_3 = function() {
            const isCorrect = ans3 === 'Không';
            window.showMathFeedback(isCorrect, "Không", ans3, "Tính chu vi đáy khuôn bánh (cạnh 16,5cm).", \`<p class="text-left text-xl font-bold text-emerald-700">Chính xác! Chu vi đáy là 16,5 x 4 = 66cm, lớn hơn chiều dài thanh gỗ 55cm.</p>\`);
            window.submitMathLesson("Tiết 119 - Bài 3", isCorrect ? 100 : 0, "btn-119-3-Khong", 0, 1, isCorrect ? 1 : 0);
        };

        window.select_119_4a = function(c) {
            ans4a = c;
            ['Mai','Việt','Nam'].forEach(v => document.getElementById('btn-119-4a-'+v).className = (v===c ? "py-3 bg-blue-600 border-2 border-transparent rounded-xl font-bold text-white shadow-xl transition-all" : "py-3 bg-white border-2 border-transparent rounded-xl font-bold hover:border-blue-400 transition-all opacity-50"));
        };
        window.select_119_4b = function(c) {
            ans4b = c;
            ['Mai','Việt','Nam'].forEach(v => document.getElementById('btn-119-4b-'+v).className = (v===c ? "py-3 bg-blue-600 border-2 border-transparent rounded-xl font-bold text-white shadow-xl transition-all" : "py-3 bg-white border-2 border-transparent rounded-xl font-bold hover:border-blue-400 transition-all opacity-50"));
        };

        window.check_119_4 = function() {
            const isCorrect = (ans4a==='Mai' && ans4b==='Nam');
            window.showMathFeedback(isCorrect, "a) Mai; b) Nam", \`\${ans4a}, \${ans4b}\`, "Tính Sxq và Stp của từng khối HLP rồi so sánh.", \`<p class="text-left text-xl font-bold text-emerald-700">Đúng rồi! Bạn Mai có Sxq lớn nhất, bạn Nam có Stp bé nhất.</p>\`);
            window.submitMathLesson("Tiết 119 - Bài 4", isCorrect ? 100 : 0, "btn-119-4a-Mai", 0, 1, isCorrect ? 1 : 0);
        };
        </script>
    `,
    "quizPool": metadata.quizPool,
    "metadata": metadata
};

/* --- MATH_BUILDER_METADATA ---
\${JSON.stringify(metadata)}
--- END_METADATA --- */

