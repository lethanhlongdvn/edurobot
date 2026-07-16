const metadata = {
    "lessonInfo": {
        "period": "114",
        "week": "23",
        "topic": "Hình học và Đo lường",
        "title": "LUYỆN TẬP CHUNG (Tiết 2)",
        "desc": "Luyện tập giải các bài toán thực tế về thể tích."
    },
    "exercises": [
        {
            "id": "114_1",
            "type": "shape_comparison",
            "statement": "Hình nào dưới đây có thể tích lớn nhất?",
            "subQuestions": [
                { "label": "Hình A", "id": "114-1-1", "image": "assets/images/toan/114-b1-A.webp" },
                { "label": "Hình B", "id": "114-1-2", "image": "assets/images/toan/114-b1-B.webp" },
                { "label": "Hình C", "id": "114-1-3", "image": "assets/images/toan/114-b1-C.webp" },
                { "label": "Hình D", "id": "114-1-4", "image": "assets/images/toan/114-b1-D.webp" }
            ],
            "answer": "B"
        },
        {
            "id": "114_2",
            "type": "word_problem",
            "statement": "Gia đình Nam dùng hết 174m³ nước một năm. Hỏi trung bình mỗi tháng gia đình Nam dùng hết bao nhiêu mét khối nước?",
            "answer": "14.5"
        },
        {
            "id": "114_3",
            "type": "matching",
            "statement": "Chọn thể tích đúng cho mỗi hộp:",
            "subQuestions": [
                { "label": "📦 Hộp Đỏ", "id": "114-3-1", "options": ["25 cm³", "24,5 cm³", "25,75 dm³"], "answer": "24,5 cm³" },
                { "label": "📦 Hộp Xanh", "id": "114-3-2", "options": ["25 cm³", "24,5 cm³", "25,75 dm³"], "answer": "25 cm³" },
                { "label": "📦 Hộp Vàng", "id": "114-3-3", "options": ["25 cm³", "24,5 cm³", "25,75 dm³"], "answer": "25,75 dm³" }
            ]
        },
        {
            "id": "114_4",
            "type": "word_problem",
            "statement": "Một bể đang chứa 240m³ nước. Do bị rò rỉ nên lượng nước trong bể bị giảm đi 15%. Tính lượng nước còn lại trong bể?",
            "answer": "204"
        }
    ],
    "quizPool": [
        { "question": "Đổi 2400 dm³ ra m³ được:", "options": ["2,4 m³", "24 m³", "0,24 m³", "240 m³"], "answer": 0, "level": "easy" },
        { "question": "Trung bình mỗi tháng dùng 12,5 m³ nước. Một năm dùng bao nhiêu?", "options": ["140 m³", "150 m³", "160 m³", "125 m³"], "answer": 1, "level": "medium" },
        { "question": "Giảm 10% của 200 m³ là bao nhiêu m³?", "options": ["20 m³", "180 m³", "190 m³", "10 m³"], "answer": 0, "level": "easy" },
        { "question": "Một khối hộp có thể tích 25,75 dm³. Đổi ra cm³ là:", "options": ["2575 cm³", "257,5 cm³", "25750 cm³", "0,02575 cm³"], "answer": 2, "level": "medium" },
        { "question": "Tính: 15% của 240 m³", "options": ["36 m³", "24 m³", "40 m³", "360 m³"], "answer": 0, "level": "easy" },
        { "question": "Hình lập phương cạnh 2cm có thể tích là:", "options": ["4 cm³", "6 cm³", "8 cm³", "12 cm³"], "answer": 2, "level": "easy" },
        { "question": "2,5 m³ ... 250 dm³. Dấu thích hợp là?", "options": [">", "<", "=", "Không so sánh được"], "answer": 0, "level": "easy" },
        { "question": "Một người dùng 5 m³ nước giá 6000đ/m³. Số tiền là?", "options": ["11 000đ", "30 000đ", "300 000đ", "3000đ"], "answer": 1, "level": "easy" },
        { "question": "Thể tích nước giảm từ 100m³ xuống 80m³. Giảm bao nhiêu %?", "options": ["10%", "20%", "30%", "25%"], "answer": 1, "level": "medium" },
        { "question": "0,48 m³ = ... dm³", "options": ["4,8 dm³", "48 dm³", "480 dm³", "4800 dm³"], "answer": 2, "level": "medium" },
        { "question": "Một năm có ... tháng?", "options": ["10", "11", "12", "13"], "answer": 2, "level": "easy" },
        { "question": "Đổi 5000 cm³ ra m³:", "options": ["0,5 m³", "0,05 m³", "0,005 m³", "5 m³"], "answer": 2, "level": "medium" },
        { "question": "Thể tích hình hộp chữ nhật V = a x b x c. Nếu a=2, b=3, c=4 thì V=?", "options": ["9", "12", "24", "10"], "answer": 2, "level": "easy" },
        { "question": "1 m³ = ... lít (biết 1dm³ = 1 lít)", "options": ["10", "100", "1000", "10000"], "answer": 2, "level": "easy" },
        { "question": "Số 'Hai mươi bốn phẩy năm' viết là:", "options": ["24,05", "2,45", "24,5", "0,245"], "answer": 2, "level": "easy" }
    ]
};

export const lesson114 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "114",
    "title": "LUYỆN TẬP CHUNG (Tiết 2)",
    "desc": "Luyện tập giải các bài toán thực tế về thể tích.",
    "content": `
        <div class="theory-section space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 text-left">
            <div class="glass-card p-10 rounded-[3rem] border border-emerald-50 shadow-2xl relative overflow-hidden bg-white/80 backdrop-blur-xl">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-3xl shadow-lg">🎯</div>
                    <h3 class="text-4xl font-black text-slate-800 uppercase italic">Mục tiêu bài học</h3>
                </div>
                <div class="p-8 bg-emerald-50 rounded-[2.5rem] border-2 border-emerald-100">
                    <p class="text-2xl font-bold text-slate-700 leading-relaxed italic">
                        "Vận dụng kiến thức về thể tích để giải quyết các vấn đề thực tế: so sánh hình khối, tính trung bình, tính tỉ lệ phần trăm."
                    </p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-16 text-left">
            <!-- Bài tập 1 -->
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">1</div>
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight">So sánh thể tích</p>
                </div>

                <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <button onclick="window.select_114_1('A')" id="btn-114-1-A" class="group bg-slate-50 p-6 rounded-[2.5rem] border-4 border-transparent hover:border-emerald-400 transition-all shadow-sm">
                        <img src="assets/images/toan/114-b1-A.webp" class="w-full h-auto rounded-2xl mb-4 group-hover:scale-105 transition-transform">
                        <span class="text-3xl font-black text-slate-400 group-hover:text-emerald-600">HÌNH A</span>
                    </button>
                    <button onclick="window.select_114_1('B')" id="btn-114-1-B" class="group bg-slate-50 p-6 rounded-[2.5rem] border-4 border-transparent hover:border-emerald-400 transition-all shadow-sm">
                        <img src="assets/images/toan/114-b1-B.webp" class="w-full h-auto rounded-2xl mb-4 group-hover:scale-105 transition-transform">
                        <span class="text-3xl font-black text-slate-400 group-hover:text-emerald-600">HÌNH B</span>
                    </button>
                    <button onclick="window.select_114_1('C')" id="btn-114-1-C" class="group bg-slate-50 p-6 rounded-[2.5rem] border-4 border-transparent hover:border-emerald-400 transition-all shadow-sm">
                        <img src="assets/images/toan/114-b1-C.webp" class="w-full h-auto rounded-2xl mb-4 group-hover:scale-105 transition-transform">
                        <span class="text-3xl font-black text-slate-400 group-hover:text-emerald-600">HÌNH C</span>
                    </button>
                    <button onclick="window.select_114_1('D')" id="btn-114-1-D" class="group bg-slate-50 p-6 rounded-[2.5rem] border-4 border-transparent hover:border-emerald-400 transition-all shadow-sm">
                        <img src="assets/images/toan/114-b1-D.webp" class="w-full h-auto rounded-2xl mb-4 group-hover:scale-105 transition-transform">
                        <span class="text-3xl font-black text-slate-400 group-hover:text-emerald-600">HÌNH D</span>
                    </button>
                </div>

                <div class="flex justify-center mt-12">
                    <button onclick="window.check_114_1()" class="w-24 h-24 bg-emerald-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-teal-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">2</div>
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight">Tính trung bình mỗi tháng</p>
                </div>

                <div class="bg-teal-50 p-10 rounded-[3rem] border-2 border-teal-100 space-y-8">
                    <p class="text-3xl font-bold text-slate-700">Gia đình Nam dùng hết <span class="text-teal-600 font-black">174 m³</span> nước trong một năm. Hỏi trung bình mỗi tháng dùng hết bao nhiêu?</p>
                    <div class="flex items-center gap-6">
                        <input type="number" step="0.1" id="ans-114-2" class="w-48 p-6 rounded-2xl border-4 border-teal-300 text-center text-5xl font-black focus:border-teal-600 outline-none" placeholder="?">
                        <span class="text-4xl font-black text-teal-700 uppercase italic">m³/tháng</span>
                    </div>
                </div>

                <div class="flex justify-center mt-12">
                    <button onclick="window.check_114_2()" class="w-24 h-24 bg-teal-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài tập 3 -->
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">3</div>
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight">Nối hộp với thể tích đúng</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-red-50 p-8 rounded-[3rem] border-2 border-red-100 flex flex-col gap-4">
                        <p class="text-3xl font-black text-red-600 italic">🔥 HỘP ĐỎ</p>
                        <select id="ans-114-3-1" class="w-full p-6 rounded-2xl border-4 border-red-200 text-2xl font-black outline-none focus:border-red-500">
                            <option value="">Chọn...</option>
                            <option value="25 cm³">25 cm³</option>
                            <option value="24,5 cm³">24,5 cm³</option>
                            <option value="25,75 dm³">25,75 dm³</option>
                        </select>
                    </div>
                    <div class="bg-blue-50 p-8 rounded-[3rem] border-2 border-blue-100 flex flex-col gap-4">
                        <p class="text-3xl font-black text-blue-600 italic">❄️ HỘP XANH</p>
                        <select id="ans-114-3-2" class="w-full p-6 rounded-2xl border-4 border-blue-200 text-2xl font-black outline-none focus:border-blue-500">
                            <option value="">Chọn...</option>
                            <option value="25 cm³">25 cm³</option>
                            <option value="24,5 cm³">24,5 cm³</option>
                            <option value="25,75 dm³">25,75 dm³</option>
                        </select>
                    </div>
                    <div class="bg-yellow-50 p-8 rounded-[3rem] border-2 border-yellow-100 flex flex-col gap-4">
                        <p class="text-3xl font-black text-yellow-600 italic">⭐ HỘP VÀNG</p>
                        <select id="ans-114-3-3" class="w-full p-6 rounded-2xl border-4 border-yellow-200 text-2xl font-black outline-none focus:border-yellow-500">
                            <option value="">Chọn...</option>
                            <option value="25 cm³">25 cm³</option>
                            <option value="24,5 cm³">24,5 cm³</option>
                            <option value="25,75 dm³">25,75 dm³</option>
                        </select>
                    </div>
                </div>

                <div class="flex justify-center mt-12">
                    <button onclick="window.check_114_3()" class="w-24 h-24 bg-orange-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài tập 4 -->
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden text-center md:text-left">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-slate-800 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">4</div>
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight italic">Bài toán rò rỉ nước</p>
                </div>

                <div class="bg-slate-50 p-10 rounded-[3rem] border-2 border-slate-200 space-y-10">
                    <p class="text-3xl font-bold text-slate-700 leading-relaxed">
                        Một bể chứa <span class="text-slate-900 font-black">240 m³</span> nước. Do rò rỉ, lượng nước bị giảm đi <span class="text-rose-600 font-black">15%</span>. Tính lượng nước <span class="underline">còn lại</span>?
                    </p>
                    <div class="flex items-center gap-6 justify-center md:justify-start">
                        <input type="number" id="ans-114-4" class="w-64 p-8 rounded-3xl border-4 border-slate-300 text-center text-5xl font-black focus:border-slate-800 shadow-xl" placeholder="?">
                        <span class="text-4xl font-black text-slate-800 italic">m³</span>
                    </div>
                </div>

                <div class="flex justify-center mt-12">
                    <button onclick="window.check_114_4()" class="w-24 h-24 bg-slate-800 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>

        <script>
        let selectedB1 = null;
        window.select_114_1 = function(choice) {
            selectedB1 = choice;
            ['A', 'B', 'C', 'D'].forEach(c => {
                const btn = document.getElementById('btn-114-1-' + c);
                btn.className = (c === choice) 
                    ? "group bg-emerald-50 p-6 rounded-[2.5rem] border-4 border-emerald-500 transition-all shadow-md scale-105" 
                    : "group bg-slate-50 p-6 rounded-[2.5rem] border-4 border-transparent hover:border-emerald-400 transition-all shadow-sm";
            });
        };

        window.check_114_1 = function() {
            const isCorrect = selectedB1 === 'B';
            window.showMathFeedback(isCorrect, "B", selectedB1 || "Chưa chọn", 
                "Em hãy đếm số lượng khối lập phương nhỏ ở mỗi hình nhé!", 
                \`<div class="space-y-4 text-left">
                    <p class="text-emerald-700 font-bold text-2xl">Đúng rồi! Hình B có 12 khối nhỏ, nhiều nhất trong 4 hình.</p>
                </div>\`
            );
            window.submitMathLesson("Tiết 114 - Bài 1", isCorrect ? 100 : 0, "btn-114-1-A", 0, 1, isCorrect ? 1 : 0);
        };

        window.check_114_2 = function() {
            const val = document.getElementById('ans-114-2').value;
            const isCorrect = parseFloat(val) === 14.5;
            window.showMathFeedback(isCorrect, "14,5", val, "Một năm có 12 tháng, em hãy lấy tổng chia cho 12 nhé!", 
                \`<div class="space-y-4 text-left">
                    <p class="text-emerald-700 font-bold text-2xl">Chính xác! Đã tính đúng trung bình mỗi tháng.</p>
                    <p class="text-xl font-bold italic">Phép tính: 174 : 12 = 14,5 (m³)</p>
                </div>\`
            );
            window.submitMathLesson("Tiết 114 - Bài 2", isCorrect ? 100 : 0, "ans-114-2", 0, 1, isCorrect ? 1 : 0);
        };

        window.check_114_3 = function() {
            const v1 = document.getElementById('ans-114-3-1').value;
            const v2 = document.getElementById('ans-114-3-2').value;
            const v3 = document.getElementById('ans-114-3-3').value;
            
            const ok1 = v1 === "24,5 cm³";
            const ok2 = v2 === "25 cm³";
            const ok3 = v3 === "25,75 dm³";
            
            const correctCount = [ok1, ok2, ok3].filter(v => v).length;
            const isCorrect = correctCount === 3;
            
            window.showMathFeedback(isCorrect, "Đỏ: 24,5 cm³; Xanh: 25 cm³; Vàng: 25,75 dm³", 
                \`Đỏ: \${v1}, Xanh: \${v2}, Vàng: \${v3}\`,
                "Hãy nhìn kỹ số đo và đơn vị ở mỗi hộp nhé!",
                \`<div class="space-y-4 text-left">
                    <p class="text-emerald-700 font-bold text-2xl">Rất tốt! Em đã nối đúng các hộp với thể tích của chúng.</p>
                </div>\`
            );
            window.submitMathLesson("Tiết 114 - Bài 3", isCorrect ? 100 : Math.round(correctCount*33.3), "ans-114-3-1", 0, 3, correctCount);
        };

        window.check_114_4 = function() {
            const val = document.getElementById('ans-114-4').value;
            const isCorrect = parseInt(val) === 204;
            window.showMathFeedback(isCorrect, "204", val, 
                "Cách 1: Tính 15% rồi trừ đi. Cách 2: Lấy 100% - 15% = 85% rồi tính 85% của 240.", 
                \`<div class="space-y-4 text-left font-bold">
                    <p class="text-emerald-700 text-2xl">Hoàn hảo! Em giải bài toán tỉ lệ phần trăm rất tốt.</p>
                    <p class="text-xl">Lượng nước bị rò rỉ: 240 × 15 : 100 = 36 (m³)</p>
                    <p class="text-xl">Lượng nước còn lại: 240 - 36 = 204 (m³)</p>
                </div>\`
            );
            window.submitMathLesson("Tiết 114 - Bài 4", isCorrect ? 100 : 0, "ans-114-4", 0, 1, isCorrect ? 1 : 0);
        };
        </script>
    `,
    "quizPool": metadata.quizPool,
    "metadata": metadata
};

/* --- MATH_BUILDER_METADATA ---
\${JSON.stringify(metadata)}
--- END_METADATA --- */

