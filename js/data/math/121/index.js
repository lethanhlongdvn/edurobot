const metadata = {
    "lessonInfo": {
        "period": "121",
        "week": "25",
        "topic": "Hình học và Đo lường",
        "title": "LUYỆN TẬP: DIỆN TÍCH HÌNH LẬP PHƯƠNG",
        "desc": "Luyện tập tính diện tích xung quanh và diện tích toàn phần của hình lập phương."
    },
    "exercises": [
        {
            "id": "121_1",
            "type": "fill_in_blank",
            "statement": "Tính diện tích các mảnh nhựa màu (4 mặt xung quanh) dán cho chiếc đèn hình lập phương:",
            "subQuestions": [
                { "label": "Đèn 25cm", "id": "121-1-a", "answer": "2500", "unit": "cm²" },
                { "label": "Đèn 15cm", "id": "121-1-b", "answer": "900", "unit": "cm²" },
                { "label": "Đèn 30cm", "id": "121-1-c", "answer": "3600", "unit": "cm²" }
            ],
            "image": "assets/images/toan/toan_tap_2/121-b1-lamps.webp"
        },
        {
            "id": "121_2",
            "type": "fill_in_blank",
            "statement": "Mai tính phủ kẹo 5 mặt (4 mặt XQ + 1 mặt trên) của bánh hình lập phương cạnh 10 cm. Tính diện tích cần phủ kẹo:",
            "subQuestions": [
                { "id": "121-2-ans", "answer": "500", "unit": "cm²" }
            ],
            "image": "assets/images/toan/toan_tap_2/121-b2-mai-cake.webp"
        },
        {
            "id": "121_3",
            "type": "fill_in_blank",
            "statement": "Trang trí 4 mặt xung quanh chậu cây hình lập phương cạnh 20 cm. Giá dịch vụ: 25 đồng/cm². Số tiền phải trả là:",
            "subQuestions": [
                { "id": "121-3-ans", "answer": "40000", "unit": "đồng" }
            ],
            "image": "assets/images/toan/toan_tap_2/121-b3-robot-pot.webp"
        },
        {
            "id": "121_4",
            "type": "selection",
            "statement": "Ghép 2 lập phương cạnh 4cm thành 1 hộp chữ nhật. Mai nói: 'Stp hộp chữ nhật mới bằng 2 lần Stp của 1 hình lập phương ban đầu.' Mai nói đúng hay sai?",
            "options": ["Đúng", "Sai"],
            "answer": "Sai",
            "image": "assets/images/toan/toan_tap_2/121-b4-kids-cubes.webp"
        }
    ],
    "quizPool": [
        { "question": "Sxq hình lập phương cạnh a là?", "options": ["a*a*4", "a*a*6", "a*a", "a*4"], "answer": 0, "level": "easy" },
        { "question": "Stp hình lập phương cạnh a là?", "options": ["a*a*4", "a*a*6", "a*a", "a*6"], "answer": 1, "level": "easy" },
        { "question": "Một HLP cạnh 2cm. Sxq là?", "options": ["16 cm²", "24 cm²", "8 cm²", "4 cm²"], "answer": 0, "level": "medium" },
        { "question": "Một HLP cạnh 3dm. Stp là?", "options": ["54 dm²", "27 dm²", "36 dm²", "9 dm²"], "answer": 0, "level": "medium" },
        { "question": "Diện tích 1 mặt HLP là 10. Stp là?", "options": ["40", "60", "20", "100"], "answer": 1, "level": "easy" },
        { "question": "Cạnh HLP tăng 2 lần thì Sxq tăng mấy lần?", "options": ["2", "4", "8", "6"], "answer": 1, "level": "hard" },
        { "question": "Hộp không nắp có mấy mặt?", "options": ["4", "5", "6", "2"], "answer": 1, "level": "easy" },
        { "question": "HLP cạnh 10cm. Diện tích 5 mặt là?", "options": ["400 cm²", "500 cm²", "600 cm²", "100 cm²"], "answer": 1, "level": "medium" },
        { "question": "Diện tích toàn phần là tổng diện tích của?", "options": ["4 mặt", "5 mặt", "6 mặt", "2 mặt"], "answer": 2, "level": "easy" },
        { "question": "1 m² bằng bao nhiêu dm²?", "options": ["10", "100", "1000", "10000"], "answer": 1, "level": "medium" },
        { "question": "Khi ghép 2 khối lập phương, ta mất đi mấy mặt?", "options": ["1", "2", "3", "0"], "answer": 1, "level": "medium" },
        { "question": "HLP có các mặt là hình gì?", "options": ["Hình vuông", "Hình chữ nhật", "Hình thoi", "Hình tròn"], "answer": 0, "level": "easy" },
        { "question": "Sxq HLP cạnh 0,5m là?", "options": ["1 m²", "1,5 m²", "0,25 m²", "0.5m²"], "answer": 0, "level": "medium" },
        { "question": "S một mặt HLP là 25. Cạnh là?", "options": ["5", "10", "25", "4"], "answer": 0, "level": "easy" },
        { "question": "HLP có bao nhiêu cạnh bằng nhau?", "options": ["4", "6", "8", "12"], "answer": 3, "level": "easy" }
    ]
};

export const lesson121 = {
    ...metadata.lessonInfo,
    "content": `
        <div class="theory-section space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 text-left">
            <div class="glass-card p-10 rounded-[3rem] border border-blue-50 shadow-2xl relative overflow-hidden bg-white/80 backdrop-blur-xl">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl shadow-lg">🎯</div>
                    <h3 class="text-4xl font-black text-slate-800 uppercase italic">Ôn tập công thức</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-amber-50 p-6 rounded-3xl border-2 border-amber-100 text-center">
                        <p class="text-xl font-bold text-amber-700 mb-2 tracking-widest uppercase">Diện tích xung quanh</p>
                        <p class="text-4xl font-black text-amber-600 italic">Sxq = (a × a) × 4</p>
                    </div>
                    <div class="bg-blue-50 p-6 rounded-3xl border-2 border-blue-100 text-center">
                        <p class="text-xl font-bold text-blue-700 mb-2 tracking-widest uppercase">Diện tích toàn phần</p>
                        <p class="text-4xl font-black text-blue-600 italic">Stp = (a × a) × 6</p>
                    </div>
                </div>
                <div class="mt-8 bg-emerald-50 p-6 rounded-3xl border-l-8 border-emerald-500 font-bold text-xl text-emerald-900 italic">
                    "Lưu ý: Hộp không nắp tính 5 mặt. Khi ghép khối, hãy chú ý các mặt bị che mất!"
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
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight italic">Diện tích nhựa (4 mặt XQ)</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div class="bg-slate-50 p-6 rounded-3xl border-2 border-slate-100 text-center">
                        <p class="text-lg font-bold text-slate-500 mb-4 tracking-widest">Cạnh 25cm</p>
                        <input type="number" id="ans-121-1-a" class="w-full bg-white border-none rounded-2xl p-4 text-3xl font-black text-center text-blue-600 placeholder:text-slate-200" placeholder="?">
                    </div>
                    <div class="bg-slate-50 p-6 rounded-3xl border-2 border-slate-100 text-center">
                        <p class="text-lg font-bold text-slate-500 mb-4 tracking-widest">Cạnh 15cm</p>
                        <input type="number" id="ans-121-1-b" class="w-full bg-white border-none rounded-2xl p-4 text-3xl font-black text-center text-blue-600 placeholder:text-slate-200" placeholder="?">
                    </div>
                    <div class="bg-slate-50 p-6 rounded-3xl border-2 border-slate-100 text-center">
                        <p class="text-lg font-bold text-slate-500 mb-4 tracking-widest">Cạnh 30cm</p>
                        <input type="number" id="ans-121-1-c" class="w-full bg-white border-none rounded-2xl p-4 text-3xl font-black text-center text-blue-600 placeholder:text-slate-200" placeholder="?">
                    </div>
                </div>
                <div class="flex justify-center">
                    <button onclick="window.check_121_1()" class="w-24 h-24 bg-blue-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div class="glass-card p-10 rounded-[3rem] bg-emerald-900 border-emerald-700 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                     <div class="w-16 h-16 bg-yellow-400 text-emerald-900 rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">2</div>
                     <p class="text-3xl md:text-4xl text-white leading-relaxed font-black uppercase tracking-tight italic">Diện tích phủ kẹo (5 mặt)</p>
                </div>
                <div class="flex flex-col md:flex-row gap-8 items-center bg-white/5 p-8 rounded-[3rem] border border-white/10">
                    <div class="flex-1 space-y-6">
                        <p class="text-2xl font-bold text-emerald-100 italic leading-tight">
                            "Bánh hình lập phương cạnh 10cm. Mai phủ kẹo 4 mặt xung quanh và 1 mặt trên."
                        </p>
                        <div class="flex items-center gap-4">
                            <input type="number" id="ans-121-2" class="w-48 bg-white/10 border-none rounded-xl p-4 text-5xl font-black text-yellow-300 text-center outline-none focus:ring-4 ring-yellow-400" placeholder="?">
                            <span class="text-3xl font-black text-white italic">cm²</span>
                        </div>
                    </div>
                    <img src="assets/images/toan/toan_tap_2/121-b2-mai-cake.webp" class="h-48 rounded-2xl shadow-2xl border-4 border-white/20">
                </div>
                <div class="flex justify-center mt-12">
                     <button onclick="window.check_121_2()" class="w-24 h-24 bg-yellow-400 text-emerald-900 rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 3 -->
            <div class="glass-card p-10 rounded-[3rem] bg-orange-50 border-orange-100 shadow-xl relative overflow-hidden">
                 <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">3</div>
                    <p class="text-3xl md:text-4xl text-orange-900 leading-relaxed font-black uppercase tracking-tight italic">Số tiền trang trí 4 mặt XQ</p>
                </div>
                <div class="p-8 bg-white/50 rounded-[3rem] border border-orange-200 mb-8 space-y-6">
                    <p class="text-xl font-bold text-orange-800 leading-relaxed">
                        "Chậu cây cạnh 20cm. Giá dịch vụ: 25 đồng/cm². Tính số tiền phải trả."
                    </p>
                    <div class="flex items-center gap-4 justify-center">
                        <input type="number" id="ans-121-3" class="w-64 bg-white border-2 border-orange-200 rounded-2xl p-4 text-4xl font-black text-rose-600 text-center shadow-inner" placeholder="?">
                        <span class="text-3xl font-black text-orange-400 italic">đồng</span>
                    </div>
                </div>
                <div class="flex justify-center">
                    <button onclick="window.check_121_3()" class="w-24 h-24 bg-orange-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 4 -->
            <div class="glass-card p-10 rounded-[3rem] bg-rose-900 border-rose-700 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-white text-rose-900 rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">4</div>
                    <p class="text-3xl md:text-4xl text-white leading-relaxed font-black uppercase tracking-tight italic">Mai nói đúng hay sai?</p>
                </div>
                <div class="bg-white/10 p-8 rounded-[3rem] border border-white/20 mb-8 text-center space-y-8">
                     <p class="text-2xl font-bold text-rose-100 italic leading-snug">
                        "Ghép 2 lập phương cạnh 4cm thành 1 hộp chữ nhật. Stp hộp mới gấp đôi Stp hình cũ (96 x 2 = 192)."
                     </p>
                     <div class="flex gap-6 justify-center">
                        <button onclick="window.select_121_4('Đúng')" id="btn-121-4-Dung" class="w-48 py-6 bg-white/5 border-2 border-white/20 rounded-[2.5rem] text-4xl font-black text-white hover:bg-white/20 transition-all uppercase">Đúng</button>
                        <button onclick="window.select_121_4('Sai')" id="btn-121-4-Sai" class="w-48 py-6 bg-white/5 border-2 border-white/20 rounded-[2.5rem] text-4xl font-black text-white hover:bg-white/20 transition-all uppercase">Sai</button>
                     </div>
                </div>
                <div class="flex justify-center">
                    <button onclick="window.check_121_4()" class="w-24 h-24 bg-white text-rose-900 rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>

        <script>
        let ans4 = null;
        window.select_121_4 = function(c) {
            ans4 = c;
            ['Dung','Sai'].forEach(v => document.getElementById('btn-121-4-'+v).className = (v===(c==='Đúng'?'Dung':'Sai') ? "w-48 py-6 bg-white border-2 border-transparent rounded-[2.5rem] text-4xl font-black text-rose-900 shadow-xl scale-110 transition-all uppercase" : "w-48 py-6 bg-white/5 border-2 border-white/20 rounded-[2.5rem] text-4xl font-black text-white hover:bg-white/20 transition-all uppercase opacity-50"));
        };

        window.check_121_1 = function() {
            const vA = document.getElementById('ans-121-1-a').value.trim();
            const vB = document.getElementById('ans-121-1-b').value.trim();
            const vC = document.getElementById('ans-121-1-c').value.trim();
            const isCorrect = (vA === '2500' && vB === '900' && vC === '3600');
            window.showMathFeedback(isCorrect, "2500; 900; 3600", \`\${vA}, \${vB}, \${vC}\`, "Sxq = Cạnh x Cạnh x 4.", 
                \`<div class="text-left text-xl space-y-2">
                    <p class="font-bold text-emerald-700 italic underline uppercase">Đáp án chi tiết:</p>
                    <p>Đèn 25cm: 25x25x4 = 2500 (cm²)</p>
                    <p>Đèn 15cm: 15x15x4 = 900 (cm²)</p>
                    <p>Đèn 30cm: 30x30x4 = 3600 (cm²)</p>
                </div>\`
            );
            window.submitMathLesson("Tiết 121 - Bài 1", isCorrect ? 100 : 0, "ans-121-1-a", 0, 3, isCorrect ? 3 : 0);
        };

        window.check_121_2 = function() {
            const v = document.getElementById('ans-121-2').value.trim();
            const isCorrect = (v === '500');
            window.showMathFeedback(isCorrect, "500", v, "Tính diện tích 5 mặt: 10 x 10 x 5 = 500 (cm²).", 
                \`<p class="text-left text-2xl font-bold text-emerald-700">Chính xác! Diện tích cần phủ kẹo 5 mặt là 500 cm².</p>\`
            );
            window.submitMathLesson("Tiết 121 - Bài 2", isCorrect ? 100 : 0, "ans-121-2", 0, 1, isCorrect ? 1 : 0);
        };

        window.check_121_3 = function() {
            const v = document.getElementById('ans-121-3').value.trim();
            const isCorrect = (v === '40000');
            window.showMathFeedback(isCorrect, "40000", v, "B1: Sxq = 20x20x4 = 1600. B2: Tiền = 1600 x 25.", 
                \`<p class="text-left text-2xl font-bold text-emerald-700">Đúng rồi! Số tiền là: 1600 x 25 = 40 000 (đồng).</p>\`
            );
            window.submitMathLesson("Tiết 121 - Bài 3", isCorrect ? 100 : 0, "ans-121-3", 0, 1, isCorrect ? 1 : 0);
        };

        window.check_121_4 = function() {
            const isCorrect = (ans4 === 'Sai');
            window.showMathFeedback(isCorrect, "Sai", ans4, "Hai khối tiếp xúc nhau sẽ bị mất đi 2 mặt ở giữa.", 
                \`<p class="text-left text-2xl font-bold text-emerald-700 font-bold text-white">Chính xác! Khi ghép khít nhau, 2 mặt của 2 hình lập phương sẽ bị che mất, nên diện tích toàn phần không thể gấp đôi được.</p>\`
            );
            window.submitMathLesson("Tiết 121 - Bài 4", isCorrect ? 100 : 0, "btn-121-4-Sai", 0, 1, isCorrect ? 1 : 0);
        };
        </script>
    `,
    "quizPool": metadata.quizPool,
    "metadata": metadata
};

/* --- MATH_BUILDER_METADATA ---
\${JSON.stringify(metadata)}
--- END_METADATA --- */

