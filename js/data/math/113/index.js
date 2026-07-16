const metadata = {
    "lessonInfo": {
        "period": "113",
        "week": "23",
        "topic": "Hình học và Đo lường",
        "title": "LUYỆN TẬP CHUNG (Tiết 1)",
        "desc": "Ôn tập về đọc, viết, đổi đơn vị đo thể tích."
    },
    "exercises": [
        {
            "id": "113_1",
            "type": "table_read_write",
            "statement": "Hoàn thành bảng đọc, viết số đo thể tích:",
            "subQuestions": [
                { "type": "write", "label": "Một trăm phẩy không năm mét khối", "id": "113-1-1", "answer": "100,05" },
                { "type": "read", "label": "0,015 m³", "id": "113-1-2", "answer": "không phẩy không một năm mét khối" },
                { "type": "write", "label": "Tám trăm hai mươi mốt đề-xi-mét khối", "id": "113-1-3", "answer": "821" },
                { "type": "read", "label": "100,2 cm³", "id": "113-1-4", "answer": "một trăm phẩy hai xăng-ti-mét khối" }
            ]
        },
        {
            "id": "113_2",
            "type": "estimation",
            "statement": "Thể tích của một khối băng khoảng:",
            "options": ["1 cm³", "1 dm³", "1 m³"],
            "answer": "1 m³"
        },
        {
            "id": "113_3",
            "type": "geometry_counting",
            "statement": "Hình bên gồm các hình lập phương cạnh 1 cm. Tính thể tích hình đó:",
            "answer": "44"
        },
        {
            "id": "113_4",
            "type": "unit_conversion",
            "statement": "Điền số thích hợp vào chỗ chấm:",
            "subQuestions": [
                { "label": "5 m³ =", "id": "113-4-1", "unit": "dm³", "answer": "5000" },
                { "label": "480 dm³ =", "id": "113-4-2", "unit": "m³", "answer": "0.48" },
                { "label": "0,25 m³ =", "id": "113-4-3", "unit": "cm³", "answer": "250000" },
                { "label": "5000 cm³ =", "id": "113-4-4", "unit": "m³", "answer": "0.005" }
            ]
        }
    ],
    "quizPool": [
        { "question": "0,5 m³ bằng bao nhiêu dm³?", "options": ["50 dm³", "500 dm³", "5000 dm³", "5 dm³"], "answer": 1, "level": "easy" },
        { "question": "1 m³ gấp dm³ bao nhiêu lần?", "options": ["10 lần", "100 lần", "1000 lần", "10000 lần"], "answer": 2, "level": "easy" },
        { "question": "Viết số: Mười bốn phẩy hai mươi lăm mét khối", "options": ["14,25 m³", "14,205 m³", "1425 m³", "1,425 m³"], "answer": 0, "level": "easy" },
        { "question": "Đổi 3/4 m³ ra lít (biết 1dm³ = 1 lít):", "options": ["75 lít", "750 lít", "7500 lít", "0,75 lít"], "answer": 1, "level": "medium" },
        { "question": "Thể tích một cái hộp là 1500 cm³. Đổi ra đề-xi-mét khối:", "options": ["15 dm³", "1,5 dm³", "0,15 dm³", "150 dm³"], "answer": 1, "level": "easy" },
        { "question": "Đọc số 0,008 m³:", "options": ["Tám phần nghìn mét khối", "Tám phần trăm mét khối", "Không phẩy không tám mét khối", "Không phẩy không không tám mét khối"], "answer": 3, "level": "medium" },
        { "question": "2 m³ 50 dm³ = ... m³", "options": ["2,5 m³", "2,05 m³", "2,005 m³", "250 m³"], "answer": 1, "level": "medium" },
        { "question": "Đơn vị đo thể tích nào lớn nhất trong các đơn vị sau?", "options": ["cm³", "dm³", "m³", "mm³"], "answer": 2, "level": "easy" },
        { "question": "4,5 dm³ = ... cm³", "options": ["45 cm³", "450 cm³", "4500 cm³", "45000 cm³"], "answer": 2, "level": "easy" },
        { "question": "0,01 m³ = ... cm³", "options": ["10 cm³", "100 cm³", "1000 cm³", "10 000 cm³"], "answer": 3, "level": "medium" },
        { "question": "Tỉ số giữa cm³ và dm³ là:", "options": ["1/10", "1/100", "1/1000", "1/10000"], "answer": 2, "level": "easy" },
        { "question": "Viết 'Năm nghìn không trăm lẻ hai xăng-ti-mét khối':", "options": ["502 cm³", "5002 cm³", "5020 cm³", "5,002 cm³"], "answer": 1, "level": "easy" },
        { "question": "Đổi 1/2 dm³ sang cm³:", "options": ["50 cm³", "500 cm³", "5000 cm³", "0,5 cm³"], "answer": 1, "level": "medium" },
        { "question": "Hai đơn vị đo thể tích liền kề gấp/kém nhau bao nhiêu lần?", "options": ["10 lần", "100 lần", "1000 lần", "10 000 lần"], "answer": 2, "level": "easy" },
        { "question": "Thứ tự từ bé đến lớn là:", "options": ["cm³ < dm³ < m³", "m³ < dm³ < cm³", "dm³ < cm³ < m³", "cm³ < m³ < dm³"], "answer": 0, "level": "easy" }
    ]
};

export const lesson113 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "113",
    "title": "LUYỆN TẬP CHUNG (Tiết 1)",
    "desc": "Ôn tập về đọc, viết, đổi đơn vị đo thể tích.",
    "content": `
        <div class="theory-section space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 text-left">
            <div class="glass-card p-10 rounded-[3rem] border border-blue-50 shadow-2xl relative overflow-hidden bg-white/80 backdrop-blur-xl">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl shadow-lg">📚</div>
                    <h3 class="text-4xl font-black text-slate-800 uppercase italic">Ghi nhớ quan trọng</h3>
                </div>
                <div class="p-8 bg-blue-50 rounded-[2.5rem] border-2 border-blue-100">
                    <p class="text-2xl font-bold text-slate-700 leading-relaxed italic text-center">
                        "Mỗi đơn vị đo thể tích gấp 1000 lần đơn vị bé hơn tiếp liền.<br>
                        Mỗi đơn vị đo thể tích bằng 1/1000 đơn vị lớn hơn tiếp liền."
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
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">1</div>
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight">Đọc và viết số đo thể tích</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-4">
                        <p class="text-xl font-bold text-slate-500 uppercase tracking-wider italic">Một trăm phẩy không năm mét khối</p>
                        <input type="text" id="ans-113-1-1" class="w-full p-5 rounded-2xl border-4 border-blue-200 text-3xl font-black text-blue-700" placeholder="Viết số...">
                    </div>
                    <div class="bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-4">
                        <p class="text-xl font-bold text-slate-500 uppercase tracking-wider italic">0,015 m³</p>
                        <input type="text" id="ans-113-1-2" class="w-full p-5 rounded-2xl border-4 border-blue-200 text-2xl font-bold text-slate-700" placeholder="Đọc số...">
                    </div>
                    <div class="bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-4">
                        <p class="text-xl font-bold text-slate-500 uppercase tracking-wider italic">Tám trăm hai mươi mốt đề-xi-mét khối</p>
                        <input type="text" id="ans-113-1-3" class="w-full p-5 rounded-2xl border-4 border-blue-200 text-3xl font-black text-blue-700" placeholder="Viết số...">
                    </div>
                    <div class="bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-4">
                        <p class="text-xl font-bold text-slate-500 uppercase tracking-wider italic">100,2 cm³</p>
                        <input type="text" id="ans-113-1-4" class="w-full p-5 rounded-2xl border-4 border-blue-200 text-2xl font-bold text-slate-700" placeholder="Đọc số...">
                    </div>
                </div>

                <div class="flex justify-center mt-12">
                    <button onclick="window.check_113_1()" class="w-24 h-24 bg-blue-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">2</div>
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight">Ước lượng thể tích</p>
                </div>

                <div class="flex flex-col md:flex-row items-center gap-12 bg-emerald-50 p-10 rounded-[3rem] border-2 border-emerald-100">
                    <div class="flex-1 space-y-6">
                        <p class="text-3xl font-bold text-slate-700">Thể tích của khối băng lớn bên cạnh khoảng bao nhiêu?</p>
                        <select id="ans-113-2" class="w-full p-6 rounded-2xl border-4 border-emerald-300 text-3xl font-black outline-none focus:border-emerald-600">
                            <option value="">Chọn đáp án...</option>
                            <option value="A">A. 1 cm³</option>
                            <option value="B">B. 1 dm³</option>
                            <option value="C">C. 1 m³</option>
                        </select>
                    </div>
                    <div class="shrink-0">
                        <img src="assets/images/toan/113_b2.webp" class="w-72 h-72 object-contain rounded-3xl border-8 border-white shadow-xl">
                    </div>
                </div>

                <div class="flex justify-center mt-12">
                    <button onclick="window.check_113_2()" class="w-24 h-24 bg-emerald-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài tập 3 -->
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden text-center md:text-left">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">3</div>
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight">Tính thể tích hình khối</p>
                </div>

                <div class="flex flex-col lg:flex-row items-center gap-12 bg-blue-50 p-10 rounded-[3rem] border-2 border-blue-100">
                    <div class="shrink-0 bg-white p-6 rounded-[2.5rem] shadow-sm">
                        <img src="assets/images/toan/113_b3.webp" class="w-80 h-auto rounded-2xl">
                    </div>
                    <div class="flex-1 space-y-8">
                        <p class="text-3xl font-bold text-slate-700">Hình bên gồm các khối lập phương cạnh 1 cm chồng lên nhau. Thể tích hình đó là bao nhiêu?</p>
                        <div class="flex items-center gap-4 justify-center md:justify-start">
                            <input type="number" id="ans-113-3" class="w-48 p-6 rounded-2xl border-4 border-blue-300 text-center text-5xl font-black" placeholder="?">
                            <span class="text-4xl font-black text-blue-700">cm³</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mt-12 text-left">
                    <button onclick="window.check_113_3()" class="w-24 h-24 bg-blue-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài tập 4 -->
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">4</div>
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight">Đổi đơn vị đo</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="flex items-center gap-6 bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100">
                        <span class="text-3xl font-black text-blue-700 min-w-[120px]">5 m³ =</span>
                        <div class="relative flex-1">
                            <input type="number" id="ans-113-4-1" class="w-full p-5 rounded-2xl border-4 border-blue-200 text-right text-3xl font-black pr-20">
                            <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xl font-bold text-slate-400">dm³</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-6 bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100">
                        <span class="text-3xl font-black text-blue-700 min-w-[180px]">480 dm³ =</span>
                        <div class="relative flex-1">
                            <input type="number" step="0.01" id="ans-113-4-2" class="w-full p-5 rounded-2xl border-4 border-blue-200 text-right text-3xl font-black pr-20">
                            <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xl font-bold text-slate-400">m³</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-6 bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100">
                        <span class="text-3xl font-black text-blue-700 min-w-[160px]">0,25 m³ =</span>
                        <div class="relative flex-1">
                            <input type="number" id="ans-113-4-3" class="w-full p-5 rounded-2xl border-4 border-blue-200 text-right text-3xl font-black pr-24">
                            <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xl font-bold text-slate-400">cm³</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-6 bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100">
                        <span class="text-3xl font-black text-blue-700 min-w-[180px]">5000 cm³ =</span>
                        <div class="relative flex-1">
                            <input type="number" step="0.001" id="ans-113-4-4" class="w-full p-5 rounded-2xl border-4 border-blue-200 text-right text-3xl font-black pr-20">
                            <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xl font-bold text-slate-400">m³</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mt-12 text-left">
                    <button onclick="window.check_113_4()" class="w-24 h-24 bg-blue-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>

        <script>
        window.check_113_1 = function() {
            const v1 = document.getElementById('ans-113-1-1').value.trim();
            const v2 = document.getElementById('ans-113-1-2').value.trim().toLowerCase();
            const v3 = document.getElementById('ans-113-1-3').value.trim();
            const v4 = document.getElementById('ans-113-1-4').value.trim().toLowerCase();
            
            const ok1 = v1.replace(',', '.') === "100.05";
            const ok2 = v2.includes('không phẩy không một năm');
            const ok3 = v3 === "821";
            const ok4 = v4.includes('một trăm phẩy hai');
            
            const correctCount = [ok1, ok2, ok3, ok4].filter(v => v).length;
            const isCorrect = correctCount === 4;
            
            window.showMathFeedback(isCorrect, "100,05; 0,015; 821; 100,2", 
                \`\${v1}; \${v2}; \${v3}; \${v4}\`,
                "Hãy đọc/viết số theo đúng thứ tự từ trái sang phải nhé!",
                \`<div class="space-y-4 text-left">
                    <p class="text-emerald-700 font-bold text-2xl">Chúc mừng! Em đã hoàn thành bảng rất chính xác.</p>
                    <div class="bg-blue-50 p-6 rounded-2xl space-y-2 text-xl italic font-bold">
                        <p>1. Một trăm phẩy không năm mét khối: <b>100,05 m³</b></p>
                        <p>2. 0,015 m³: <b>Không phẩy không một năm mét khối</b></p>
                        <p>3. Tám trăm hai mươi mốt đề-xi-mét khối: <b>821 dm³</b></p>
                        <p>4. 100,2 cm³: <b>Một trăm phẩy hai xăng-ti-mét khối</b></p>
                    </div>
                </div>\`
            );
            window.submitMathLesson("Tiết 113 - Bài 1", isCorrect ? 100 : correctCount*25, "ans-113-1-1", 0, 4, correctCount);
        };

        window.check_113_2 = function() {
            const val = document.getElementById('ans-113-2').value;
            const isCorrect = val === 'C';
            window.showMathFeedback(isCorrect, "C", val, "Hãy so sánh kích thước khối băng với cơ thể người trong ảnh nhé!", 
                \`<div class="space-y-4 text-left">
                    <p class="text-emerald-700 font-bold text-2xl">Đúng rồi! Khối băng lớn này tương đương một khối lập phương cạnh 1m.</p>
                    <p class="text-xl font-bold">Đáp án: <b>C. 1 m³</b></p>
                </div>\`
            );
            window.submitMathLesson("Tiết 113 - Bài 2", isCorrect ? 100 : 0, "ans-113-2", 0, 1, isCorrect ? 1 : 0);
        };

        window.check_113_3 = function() {
            const val = document.getElementById('ans-113-3').value;
            const isCorrect = parseInt(val) === 44;
            window.showMathFeedback(isCorrect, "44", val, "Em hãy đếm số khối ở mỗi lớp hoặc đếm phần còn thiếu của một khối lớn nhé!", 
                \`<div class="space-y-4 text-left">
                    <p class="text-emerald-700 font-bold text-2xl">Chính xác! Có tổng cộng 44 khối lập phương nhỏ.</p>
                    <p class="text-xl font-bold">Thể tích: <b>44 cm³</b></p>
                </div>\`
            );
            window.submitMathLesson("Tiết 113 - Bài 3", isCorrect ? 100 : 0, "ans-113-3", 0, 1, isCorrect ? 1 : 0);
        };

        window.check_113_4 = function() {
            const v1 = document.getElementById('ans-113-4-1').value.trim();
            const v2 = document.getElementById('ans-113-4-2').value.trim();
            const v3 = document.getElementById('ans-113-4-3').value.trim();
            const v4 = document.getElementById('ans-113-4-4').value.trim();
            
            const ok1 = parseFloat(v1) === 5000;
            const ok2 = parseFloat(v2) === 0.48;
            const ok3 = parseFloat(v3) === 250000;
            const ok4 = parseFloat(v4) === 0.005;
            
            const correctCount = [ok1, ok2, ok3, ok4].filter(v => v).length;
            const isCorrect = correctCount === 4;
            
            window.showMathFeedback(isCorrect, "5000; 0,48; 250 000; 0,005", 
                \`\${v1}; \${v2}; \${v3}; \${v4}\`,
                "Hãy ghi nhớ: m³ → (1000) → dm³ → (1000) → cm³.",
                \`<div class="space-y-4 text-left">
                    <p class="text-emerald-700 font-bold text-2xl">Rất giỏi! Em đã làm chủ việc đổi đơn vị đo thể tích.</p>
                    <div class="bg-blue-50 p-6 rounded-2xl space-y-2 text-xl italic font-bold">
                        <p>• 5 m³ = 5 × 1000 = <b>5000 dm³</b></p>
                        <p>• 480 dm³ = 480 : 1000 = <b>0,48 m³</b></p>
                        <p>• 0,25 m³ = 0,25 × 1 000 000 = <b>250 000 cm³</b></p>
                        <p>• 5000 cm³ = 5000 : 1 000 000 = <b>0,005 m³</b></p>
                    </div>
                </div>\`
            );
            window.submitMathLesson("Tiết 113 - Bài 4", isCorrect ? 100 : correctCount*25, "ans-113-4-1", 0, 4, correctCount);
        };
        </script>
    `,
    "quizPool": metadata.quizPool,
    "metadata": metadata
};

/* --- MATH_BUILDER_METADATA ---
\${JSON.stringify(metadata)}
--- END_METADATA --- */

