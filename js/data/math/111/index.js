const metadata = {
    "lessonInfo": {
        "period": "111",
        "week": "23",
        "topic": "Hình học và Đo lường",
        "title": "BÀI 47: MÉT KHỐI",
        "desc": "Tìm hiểu đơn vị đo thể tích mét khối (m³). Mối quan hệ giữa m³, dm³ và cm³."
    },
    "exercises": [
        {
            "id": "111_1",
            "type": "text_input",
            "statement": "Em hãy đọc các số đo thể tích sau:",
            "subQuestions": [
                { "label": "1,25 m³", "id": "111-1-1", "answer": ["một phẩy hai mươi lăm mét khối", "một phẩy hai lăm mét khối"] },
                { "label": "300 m³", "id": "111-1-2", "answer": ["ba trăm mét khối"] }
            ]
        },
        {
            "id": "111_2",
            "type": "unit_conversion",
            "statement": "Chọn số đo thích hợp vào chỗ chấm:",
            "subQuestions": [
                { "label": "3 m³ =", "id": "111-2-1", "unit": "dm³", "answer": "3000" },
                { "label": "1,7 m³ =", "id": "111-2-2", "unit": "dm³", "answer": "1700" },
                { "label": "2400 dm³ =", "id": "111-2-3", "unit": "m³", "answer": "2.4" },
                { "label": "25 m³ =", "id": "111-2-4", "unit": "cm³", "answer": "25000000" }
            ]
        },
        {
            "id": "111_3",
            "type": "word_problem",
            "statement": "Một chiếc xe tải có thùng xe dạng hình hộp chữ nhật với thể tích là 33,2 m³. Thùng xe đang chở hàng chiếm 80% thể tích. Tính thể tích phần còn trống trong thùng xe?",
            "answer": "6.64"
        }
    ],
    "quizPool": [
        { "question": "1 m³ bằng bao nhiêu dm³?", "options": ["10 dm³", "100 dm³", "1000 dm³", "10 000 dm³"], "answer": 2, "level": "easy" },
        { "question": "Số 'Hai mươi lăm mét khối' viết là:", "options": ["25 m", "25 m²", "25 m³", "25 dm³"], "answer": 2, "level": "easy" },
        { "question": "7,5 m³ = ... dm³", "options": ["75 dm³", "750 dm³", "7500 dm³", "75 000 dm³"], "answer": 2, "level": "easy" },
        { "question": "0,5 m³ = ... cm³", "options": ["500 cm³", "5000 cm³", "50 000 cm³", "500 000 cm³"], "answer": 3, "level": "medium" },
        { "question": "Một bể nước có thể tích 2 m³. Bể đó chứa được bao nhiêu lít nước? (biết 1 dm³ = 1 lít)", "options": ["20 lít", "200 lít", "2000 lít", "20 000 lít"], "answer": 2, "level": "medium" },
        { "question": "Đơn vị nào lớn nhất trong các đơn vị sau?", "options": ["m³", "dm³", "cm³", "mm³"], "answer": 0, "level": "easy" },
        { "question": "3000 dm³ bằng bao nhiêu m³?", "options": ["0,3 m³", "3 m³", "30 m³", "300 m³"], "answer": 1, "level": "easy" },
        { "question": "Cách đọc '1,205 m³' là:", "options": ["Một phẩy hai trăm linh năm mét khối", "Một phẩy hai mươi lăm mét khối", "Một phẩy hai không năm mét khối", "Mười hai phẩy không năm mét khối"], "answer": 0, "level": "medium" },
        { "question": "Một khối rubik có thể tích 64 cm³. Nếu cạnh của nó là 4 cm thì thể tích đó đúng hay sai?", "options": ["Đúng", "Sai"], "answer": 0, "level": "medium" },
        { "question": "Thứ tự các đơn vị đo thể tích từ lớn đến bé là:", "options": ["m³, cm³, dm³", "cm³, dm³, m³", "m³, dm³, cm³", "dm³, m³, cm³"], "answer": 2, "level": "easy" },
        { "question": "4 m³ 5 dm³ = ... dm³", "options": ["45 dm³", "405 dm³", "4005 dm³", "450 dm³"], "answer": 2, "level": "medium" },
        { "question": "Một căn phòng có thể tích 60 m³. Chiều dài 5m, chiều rộng 4m. Chiều cao căn phòng là?", "options": ["2m", "3m", "4m", "5m"], "answer": 1, "level": "hard" },
        { "question": "2/5 m³ = ... dm³", "options": ["200 dm³", "300 dm³", "400 dm³", "500 dm³"], "answer": 2, "level": "medium" },
        { "question": "8.000.000 cm³ = ... m³", "options": ["0,8 m³", "8 m³", "80 m³", "800 m³"], "answer": 1, "level": "medium" },
        { "question": "Một hình lập phương có cạnh 1m thì thể tích là:", "options": ["1 m²", "1 m³", "6 m²", "3 m³"], "answer": 1, "level": "easy" }
    ]
};

export const lesson111 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "111",
    "title": "BÀI 47: MÉT KHỐI",
    "desc": "Tìm hiểu đơn vị đo thể tích mét khối (m³). Mối quan hệ giữa m³, dm³ và cm³.",
    "content": `
        <div class="theory-section space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 text-left">
            <!-- Khám phá -->
            <div class="glass-card p-10 rounded-[3rem] border border-blue-50 shadow-2xl relative overflow-hidden bg-white/80 backdrop-blur-xl">
                <div class="flex items-center gap-4 mb-8">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl shadow-lg">🔍</div>
                    <h3 class="text-4xl font-black text-slate-800 uppercase italic">Khám phá</h3>
                </div>

                <div class="flex flex-col md:flex-row items-center gap-10">
                    <div class="w-full md:w-1/2">
                        <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-12 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center text-white text-center transform hover:rotate-1 transition-all duration-500 border-8 border-white/20">
                            <span class="text-9xl mb-6 drop-shadow-2xl">🧊</span>
                            <h4 class="text-6xl font-black mb-4">1 m³</h4>
                            <p class="text-2xl font-bold opacity-90 uppercase tracking-widest">Một mét khối</p>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 space-y-8">
                        <div class="bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100 shadow-inner">
                            <p class="text-3xl text-slate-700 leading-relaxed">
                                Để đo thể tích lớn (như thể tích bể nước, thùng xe tải...), ta thường dùng đơn vị <span class="text-blue-700 font-black">mét khối</span>.
                            </p>
                        </div>
                        <div class="grid grid-cols-1 gap-4">
                            <div class="flex items-center gap-6 p-6 bg-white rounded-3xl border-2 border-slate-100 shadow-sm">
                                <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl font-black">1</div>
                                <p class="text-2xl font-bold text-slate-600"><span class="text-blue-700 font-black text-3xl">1 m³</span> là thể tích của hình lập phương có cạnh dài <span class="text-blue-700 font-black text-3xl">1 m</span>.</p>
                            </div>
                            <div class="flex items-center gap-6 p-6 bg-white rounded-3xl border-2 border-slate-100 shadow-sm">
                                <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl font-black">2</div>
                                <p class="text-2xl font-bold text-slate-600">Viết tắt là: <span class="text-rose-600 font-black text-4xl">m³</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Ghi nhớ -->
            <div class="bg-gradient-to-br from-blue-500 to-blue-700 p-1.5 rounded-[4rem] shadow-2xl transform hover:scale-[1.01] transition-all duration-500">
                <div class="bg-white p-12 md:p-16 rounded-[3.8rem] flex flex-col items-center gap-10">
                    <div class="bg-blue-100 text-blue-700 px-10 py-3 rounded-2xl font-black text-3xl uppercase tracking-widest border-2 border-blue-200">💎 Mối quan hệ</div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                        <div class="flex flex-col items-center p-8 bg-blue-50 rounded-[3rem] border-2 border-blue-100">
                            <span class="text-5xl font-black text-blue-700 mb-4">1 m³ = 1 000 dm³</span>
                            <p class="text-xl font-bold text-slate-500">(Gấp 1000 lần dm³)</p>
                        </div>
                        <div class="flex flex-col items-center p-8 bg-blue-50 rounded-[3rem] border-2 border-blue-100">
                            <span class="text-5xl font-black text-blue-700 mb-4">1 m³ = 1 000 000 cm³</span>
                            <p class="text-xl font-bold text-slate-500">(Gấp 1.000.000 lần cm³)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-16 text-left">
            <!-- Bài tập 1 -->
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">1</div>
                    <div class="space-y-2">
                         <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight">Đọc các số đo thể tích</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div class="bg-blue-50 p-8 rounded-[3rem] border-2 border-blue-100 flex flex-col items-center gap-6">
                        <div class="text-5xl font-black text-blue-700 bg-white px-8 py-4 rounded-3xl shadow-sm border-2 border-blue-100">1,25 m³</div>
                        <input type="text" id="ans-111-1-1" class="w-full p-6 rounded-2xl border-4 border-blue-200 text-center text-2xl md:text-3xl font-bold focus:border-blue-500 outline-none shadow-inner" placeholder="Nhập cách đọc...">
                    </div>
                    <div class="bg-blue-50 p-8 rounded-[3rem] border-2 border-blue-100 flex flex-col items-center gap-6">
                        <div class="text-5xl font-black text-blue-700 bg-white px-8 py-4 rounded-3xl shadow-sm border-2 border-blue-100">300 m³</div>
                        <input type="text" id="ans-111-1-2" class="w-full p-6 rounded-2xl border-4 border-blue-200 text-center text-2xl md:text-3xl font-bold focus:border-blue-500 outline-none shadow-inner" placeholder="Nhập cách đọc...">
                    </div>
                </div>

                <div class="flex justify-center mt-12">
                    <button onclick="window.check_111_1()" class="w-24 h-24 bg-blue-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">2</div>
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight">Viết số thích hợp vào chỗ chấm</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="flex items-center gap-6 bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100">
                        <span class="text-3xl font-black text-blue-700 min-w-[120px]">3 m³ =</span>
                        <div class="relative flex-1">
                            <input type="number" id="ans-111-2-1" class="w-full p-5 rounded-2xl border-4 border-blue-200 text-right text-3xl font-black pr-20">
                            <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xl font-bold text-slate-400">dm³</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-6 bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100">
                        <span class="text-3xl font-black text-blue-700 min-w-[120px]">1,7 m³ =</span>
                        <div class="relative flex-1">
                            <input type="number" id="ans-111-2-2" class="w-full p-5 rounded-2xl border-4 border-blue-200 text-right text-3xl font-black pr-20">
                            <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xl font-bold text-slate-400">dm³</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-6 bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100">
                        <span class="text-3xl font-black text-blue-700 min-w-[150px]">2 400 dm³ =</span>
                        <div class="relative flex-1">
                            <input type="number" step="0.1" id="ans-111-2-3" class="w-full p-5 rounded-2xl border-4 border-blue-200 text-right text-3xl font-black pr-20">
                            <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xl font-bold text-slate-400">m³</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-6 bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100">
                        <span class="text-3xl font-black text-blue-700 min-w-[120px]">25 m³ =</span>
                        <div class="relative flex-1">
                            <input type="number" id="ans-111-2-4" class="w-full p-5 rounded-2xl border-4 border-blue-200 text-right text-3xl font-black pr-20">
                            <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xl font-bold text-slate-400">cm³</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mt-12">
                    <button onclick="window.check_111_2()" class="w-24 h-24 bg-blue-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài tập 3 -->
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">3</div>
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight italic">Giải bài toán</p>
                </div>
                
                <div class="p-8 bg-orange-50 rounded-[3rem] border-2 border-orange-100 mb-10 shadow-inner">
                    <p class="text-3xl font-bold text-slate-700 leading-relaxed">
                        Một chiếc xe tải có thùng xe dạng hình hộp chữ nhật với thể tích là <span class="text-orange-600 font-black">33,2 m³</span>. 
                        Thùng xe đang chở hàng chiếm <span class="text-orange-600 font-black">80%</span> thể tích. 
                        Hỏi thể tích phần <span class="text-orange-600 font-black">còn trống</span> trong thùng xe là bao nhiêu?
                    </p>
                </div>

                <div class="space-y-6">
                    <div class="relative">
                        <input type="number" step="0.01" id="ans-111-3" class="w-full p-8 rounded-3xl border-4 border-orange-200 text-center text-5xl font-black focus:border-orange-500 outline-none pr-28 shadow-xl" placeholder="Đáp số?">
                        <span class="absolute right-8 top-1/2 -translate-y-1/2 text-3xl font-bold text-slate-400 pointer-events-none">m³</span>
                    </div>
                </div>

                <div class="flex justify-center mt-12">
                    <button onclick="window.check_111_3()" class="w-24 h-24 bg-orange-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>

        <script>
        window.check_111_1 = function() {
            const r1 = document.getElementById('ans-111-1-1').value.trim().toLowerCase();
            const r2 = document.getElementById('ans-111-1-2').value.trim().toLowerCase();
            
            const ok1 = (r1.includes('một phẩy hai mươi lăm') || r1.includes('một phẩy hai lăm')) && r1.includes('mét khối');
            const ok2 = r2.includes('ba trăm') && r2.includes('mét khối');
            
            const isCorrect = ok1 && ok2;
            const score = (ok1 ? 50 : 0) + (ok2 ? 50 : 0);
            
            window.showMathFeedback(isCorrect, "1,25 m³: Một phẩy hai mươi lăm mét khối; 300 m³: Ba trăm mét khối", 
                \`1: \${r1}, 2: \${r2}\`,
                "Em hãy viết cách đọc số thành chữ và đừng quên đơn vị 'mét khối' nhé!",
                \`<div class="space-y-4">
                    <p class="text-emerald-700 font-bold text-2xl text-left">Tuyệt vời! Em đọc số và đơn vị đo rất chính xác.</p>
                    <ul class="text-left space-y-2 text-xl">
                        <li>• <b>1,25 m³:</b> Một phẩy hai mươi lăm mét khối (hoặc một phẩy hai lăm mét khối).</li>
                        <li>• <b>300 m³:</b> Ba trăm mét khối.</li>
                    </ul>
                </div>\`
            );
            window.submitMathLesson("Tiết 111: Mét khối - Bài 1", score, "ans-111-1-1", 0, 2, (ok1?1:0)+(ok2?1:0));
        };

        window.check_111_2 = function() {
            const v1 = document.getElementById('ans-111-2-1').value.trim();
            const v2 = document.getElementById('ans-111-2-2').value.trim();
            const v3 = document.getElementById('ans-111-2-3').value.trim().replace(',', '.');
            const v4 = document.getElementById('ans-111-2-4').value.trim();
            
            const ok1 = parseInt(v1) === 3000;
            const ok2 = parseFloat(v2) === 1.7 * 1000; // 1700
            const ok3 = parseFloat(v3) === 2.4;
            const ok4 = parseInt(v4) === 25000000;
            
            const correctCount = [ok1, ok2, ok3, ok4].filter(v => v).length;
            const isCorrect = correctCount === 4;
            const score = Math.round(correctCount * 25);
            
            window.showMathFeedback(isCorrect, "3000; 1700; 2.4; 25000000", 
                \`\${v1}, \${v2}, \${v3}, \${v4}\`,
                "Hãy nhớ quy tắc: m³ -> dm³ -> cm³ mỗi đơn vị cách nhau 1000 lần. Từ lớn sang bé thì nhân 1000, từ bé sang lớn thì chia 1000 nhé!",
                \`<div class="space-y-4">
                    <p class="text-emerald-700 font-bold text-2xl text-left">Giỏi lắm! Em đã nắm vững cách đổi đơn vị mét khối.</p>
                    <div class="bg-blue-50 p-6 rounded-2xl text-left space-y-3 text-xl">
                        <p>• 3 m³ = 3 × 1000 = <b>3 000 dm³</b></p>
                        <p>• 1,7 m³ = 1,7 × 1000 = <b>1 700 dm³</b></p>
                        <p>• 2 400 dm³ = 2 400 : 1000 = <b>2,4 m³</b></p>
                        <p>• 25 m³ = 25 × 1 000 000 = <b>25 000 000 cm³</b></p>
                    </div>
                </div>\`
            );
            window.submitMathLesson("Tiết 111: Mét khối - Bài 2", score, "ans-111-2-1", 0, 4, correctCount);
        };

        window.check_111_3 = function() {
            const val = document.getElementById('ans-111-3').value.trim().replace(',', '.');
            const isCorrect = parseFloat(val) === 6.64;
            
            window.showMathFeedback(isCorrect, "6.64", val,
                "Để tính phần còn trống, em có thể tính 100% - 80% = 20% rồi nhân với thể tích tổng. Hoặc tính thể tích chở hàng rồi lấy 33,2 trừ đi nhé!",
                \`<div class="space-y-4">
                    <p class="text-emerald-700 font-bold text-2xl text-left">Hoàn hảo! Em giải bài toán thực tế rất tốt.</p>
                    <div class="bg-orange-50 p-6 rounded-2xl text-left space-y-3 text-xl font-bold">
                        <p>Tỉ số phần trăm thể tích phần còn trống là:</p>
                        <p class="text-blue-700">100% - 80% = 20%</p>
                        <p>Thể tích phần còn trống là:</p>
                        <p class="text-blue-700">33,2 × 20 : 100 = 6,64 (m³)</p>
                        <p>Đáp số: 6,64 m³</p>
                    </div>
                </div>\`
            );
            window.submitMathLesson("Tiết 111: Mét khối - Bài 3", isCorrect ? 100 : 0, "ans-111-3", 0, 1, isCorrect ? 1 : 0);
        };
        </script>
    `,
    "quizPool": metadata.quizPool,
    "metadata": metadata
};

/* --- MATH_BUILDER_METADATA ---
\${JSON.stringify(metadata)}
--- END_METADATA --- */
