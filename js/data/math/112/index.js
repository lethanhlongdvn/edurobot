const metadata = {
    "lessonInfo": {
        "period": "112",
        "week": "23",
        "topic": "Hình học và Đo lường",
        "title": "LUYỆN TẬP: MÉT KHỐI",
        "desc": "Thực hành viết, đổi đơn vị đo thể tích và giải bài toán thực thực tế tính tiền nước."
    },
    "exercises": [
        {
            "id": "112_1",
            "type": "estimation",
            "statement": "Chọn số đo phù hợp với mỗi đồ vật:",
            "subQuestions": [
                { "label": "Hộp phấn", "id": "112-1-1", "options": ["1 cm³", "1 dm³"], "answer": "1 dm³" },
                { "label": "Máy giặt", "id": "112-1-2", "options": ["1 dm³", "1 m³"], "answer": "1 m³" },
                { "label": "Container", "id": "112-1-3", "options": ["1 dm³", "1 m³"], "answer": "1 m³" }
            ]
        },
        {
            "id": "112_2",
            "type": "unit_conversion",
            "statement": "Chọn số đo thích hợp vào chỗ chấm:",
            "subQuestions": [
                { "label": "2,5 m³ =", "id": "112-2-1", "unit": "dm³", "answer": "2500" },
                { "label": "3900 cm³ =", "id": "112-2-2", "unit": "dm³", "answer": "3.9" },
                { "label": "4600 dm³ =", "id": "112-2-3", "unit": "m³", "answer": "4.6" },
                { "label": "7 500 000 cm³ =", "id": "112-2-4", "unit": "m³", "answer": "7.5" }
            ]
        },
        {
            "id": "112_4",
            "type": "word_problem",
            "statement": "Gia đình Việt dùng hết 15m³ nước trong một tháng. Tính số tiền nước nhà Việt phải trả?",
            "details": "10 m³ đầu: 5 973 đồng/m³. Các m³ tiếp theo: 7 052 đồng/m³.",
            "answer": "94990"
        }
    ],
    "quizPool": [
        { "question": "1 dm³ bằng bao nhiêu cm³?", "options": ["10 cm³", "100 cm³", "1000 cm³", "10 000 cm³"], "answer": 2, "level": "easy" },
        { "question": "Số đo 0,05 m³ đọc là:", "options": ["Năm phần mười mét khối", "Năm phần trăm mét khối", "Không phẩy không năm mét khối", "Năm phần nghìn mét khối"], "answer": 2, "level": "easy" },
        { "question": "Đổi 2 m³ 5 dm³ ra dm³:", "options": ["25 dm³", "205 dm³", "2005 dm³", "250 dm³"], "answer": 2, "level": "medium" },
        { "question": "3/4 m³ = ... dm³", "options": ["75 dm³", "750 dm³", "7500 dm³", "0,75 dm³"], "answer": 1, "level": "medium" },
        { "question": "Một cái bể bơi có thể tích 500 m³. Nếu chứa đầy nước thì được bao nhiêu lít?", "options": ["5000 l", "50 000 l", "500 000 l", "5 000 000 l"], "answer": 2, "level": "medium" },
        { "question": "Đơn vị đo thể tích nào bé hơn dm³ nhưng lớn hơn mm³?", "options": ["m³", "cm³", "lít", "dm³"], "answer": 1, "level": "easy" },
        { "question": "1.200.000 cm³ = ... m³", "options": ["1,2 m³", "12 m³", "120 m³", "0,12 m³"], "answer": 0, "level": "medium" },
        { "question": "Cách viết 'Năm phần tám mét khối' là:", "options": ["5,8 m³", "5/8 m³", "8/5 m³", "0,58 m³"], "answer": 1, "level": "medium" },
        { "question": "1 m³ gấp dm³ bao nhiêu lần?", "options": ["10 lần", "100 lần", "1000 lần", "10 000 lần"], "answer": 2, "level": "easy" },
        { "question": "Thể tích một căn phòng khoảng:", "options": ["60 cm³", "60 dm³", "60 m³", "60 mm³"], "answer": 2, "level": "easy" },
        { "question": "0,25 m³ = ... cm³", "options": ["2500 cm³", "25 000 cm³", "250 000 cm³", "2 500 000 cm³"], "answer": 2, "level": "medium" },
        { "question": "Một khối gỗ hình lập phương cạnh 1dm. Thể tích khối gỗ là?", "options": ["1 cm³", "1 dm³", "1 m³", "100 cm³"], "answer": 1, "level": "easy" },
        { "question": "2,04 m³ = ... dm³", "options": ["24 dm³", "204 dm³", "2040 dm³", "2400 dm³"], "answer": 2, "level": "medium" },
        { "question": "1500 dm³ ... 1,5 m³. Dấu thích hợp là?", "options": [">", "<", "=", "Không so sánh được"], "answer": 2, "level": "easy" },
        { "question": "Đơn vị đo thể tích chuẩn trong hệ SI là?", "options": ["lít", "m³", "cm³", "kg"], "answer": 1, "level": "easy" }
    ]
};

export const lesson112 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "112",
    "title": "LUYỆN TẬP: MÉT KHỐI",
    "desc": "Thực hành viết, đổi đơn vị đo thể tích và giải bài toán thực thực tế tính tiền nước.",
    "content": `
        <div class="theory-section space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 text-left">
            <div class="glass-card p-10 rounded-[3rem] border border-blue-50 shadow-2xl relative overflow-hidden bg-white/80 backdrop-blur-xl">
                <div class="flex items-center gap-4 mb-8">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl shadow-lg">📐</div>
                    <h3 class="text-4xl font-black text-slate-800 uppercase italic">Kiến thức cần nhớ</h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="p-8 bg-blue-50 rounded-[2.5rem] border-2 border-blue-100 text-center">
                        <span class="text-6xl mb-4 block">🧊</span>
                        <p class="text-2xl font-black text-blue-700">1 m³ = 1 000 dm³</p>
                    </div>
                    <div class="p-8 bg-blue-50 rounded-[2.5rem] border-2 border-blue-100 text-center">
                        <span class="text-6xl mb-4 block">📦</span>
                        <p class="text-2xl font-black text-blue-700">1 dm³ = 1 000 cm³</p>
                    </div>
                    <div class="p-8 bg-blue-50 rounded-[2.5rem] border-2 border-blue-100 text-center">
                        <span class="text-6xl mb-4 block">💧</span>
                        <p class="text-2xl font-black text-blue-700">1 m³ = 1 000 000 cm³</p>
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
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight">Chọn số đo phù hợp</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div class="bg-blue-50 p-8 rounded-[3rem] border-2 border-blue-100 flex flex-col items-center gap-6">
                        <div class="w-32 h-32 bg-white rounded-full flex items-center justify-center text-6xl shadow-sm">🖍️</div>
                        <p class="text-2xl font-black text-slate-500 uppercase">Hộp phấn</p>
                        <select id="ans-112-1-1" class="w-full p-4 rounded-xl border-4 border-blue-200 text-2xl font-black focus:border-blue-500 outline-none">
                            <option value="">Chọn...</option>
                            <option value="1 cm3">1 cm³</option>
                            <option value="1 dm3">1 dm³</option>
                        </select>
                    </div>
                    <div class="bg-blue-50 p-8 rounded-[3rem] border-2 border-blue-100 flex flex-col items-center gap-6">
                        <div class="w-32 h-32 bg-white rounded-full flex items-center justify-center text-6xl shadow-sm">🧺</div>
                        <p class="text-2xl font-black text-slate-500 uppercase">Máy giặt</p>
                        <select id="ans-112-1-2" class="w-full p-4 rounded-xl border-4 border-blue-200 text-2xl font-black focus:border-blue-500 outline-none">
                            <option value="">Chọn...</option>
                            <option value="1 dm3">1 dm³</option>
                            <option value="1 m3">1 m³</option>
                        </select>
                    </div>
                    <div class="bg-blue-50 p-8 rounded-[3rem] border-2 border-blue-100 flex flex-col items-center gap-6">
                        <div class="w-32 h-32 bg-white rounded-full flex items-center justify-center text-6xl shadow-sm">🚛</div>
                        <p class="text-2xl font-black text-slate-500 uppercase">Container</p>
                        <select id="ans-112-1-3" class="w-full p-4 rounded-xl border-4 border-blue-200 text-2xl font-black focus:border-blue-500 outline-none">
                            <option value="">Chọn...</option>
                            <option value="1 dm3">1 dm³</option>
                            <option value="1 m3">1 m³</option>
                        </select>
                    </div>
                </div>

                <div class="flex justify-center mt-12">
                    <button onclick="window.check_112_1()" class="w-24 h-24 bg-blue-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">2</div>
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight">Đổi đơn vị đo thể tích</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="flex items-center gap-6 bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100">
                        <span class="text-3xl font-black text-blue-700 min-w-[120px]">2,5 m³ =</span>
                        <div class="relative flex-1">
                            <input type="number" id="ans-112-2-1" class="w-full p-5 rounded-2xl border-4 border-blue-200 text-right text-3xl font-black pr-20">
                            <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xl font-bold text-slate-400">dm³</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-6 bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100">
                        <span class="text-3xl font-black text-blue-700 min-w-[150px]">3900 cm³ =</span>
                        <div class="relative flex-1">
                            <input type="number" step="0.1" id="ans-112-2-2" class="w-full p-5 rounded-2xl border-4 border-blue-200 text-right text-3xl font-black pr-20">
                            <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xl font-bold text-slate-400">dm³</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-6 bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100">
                        <span class="text-3xl font-black text-blue-700 min-w-[150px]">4600 dm³ =</span>
                        <div class="relative flex-1">
                            <input type="number" step="0.1" id="ans-112-2-3" class="w-full p-5 rounded-2xl border-4 border-blue-200 text-right text-3xl font-black pr-20">
                            <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xl font-bold text-slate-400">m³</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-6 bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100">
                        <span class="text-3xl font-black text-blue-700 min-w-[180px]">7,5 triệu cm³ =</span>
                        <div class="relative flex-1">
                            <input type="number" step="0.1" id="ans-112-2-4" class="w-full p-5 rounded-2xl border-4 border-blue-200 text-right text-3xl font-black pr-20">
                            <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xl font-bold text-slate-400">m³</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mt-12">
                    <button onclick="window.check_112_2()" class="w-24 h-24 bg-blue-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài tập 4 -->
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">3</div>
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight italic">Bài toán tiền nước</p>
                </div>
                
                <div class="p-8 bg-orange-50 rounded-[3rem] border-2 border-orange-100 mb-10 shadow-inner">
                    <p class="text-3xl font-bold text-slate-700 leading-relaxed">
                        Gia đình Việt dùng hết <span class="text-orange-600 font-black">15 m³</span> nước. Biết:
                    </p>
                    <ul class="list-disc list-inside mt-4 text-2xl font-bold text-slate-600 space-y-2">
                        <li>10 m³ đầu: <span class="bg-white/80 px-4 py-1 rounded-xl text-orange-700">5 973 đồng/m³</span></li>
                        <li>Số m³ còn lại: <span class="bg-white/80 px-4 py-1 rounded-xl text-orange-700">7 052 đồng/m³</span></li>
                    </ul>
                </div>

                <div class="space-y-6">
                    <div class="relative">
                        <input type="number" id="ans-112-4" class="w-full p-8 rounded-3xl border-4 border-orange-200 text-center text-5xl font-black focus:border-orange-500 outline-none pr-32 shadow-xl" placeholder="Thành tiền?">
                        <span class="absolute right-8 top-1/2 -translate-y-1/2 text-2xl font-black text-slate-400 pointer-events-none">ĐỒNG</span>
                    </div>
                </div>

                <div class="flex justify-center mt-12">
                    <button onclick="window.check_112_4()" class="w-24 h-24 bg-orange-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>

        <script>
        window.check_112_1 = function() {
            const v1 = document.getElementById('ans-112-1-1').value;
            const v2 = document.getElementById('ans-112-1-2').value;
            const v3 = document.getElementById('ans-112-1-3').value;
            
            // Theo SGK và logic cũ: a=1dm3 (hoặc 1cm3 tuỳ phiên bản, nhưng 1dm3 hợp lý hơn).
            // Logic cũ trong logic.js dùng 1cm3. Tôi sẽ ưu tiên logic thực tế 1dm3 nhưng ghi chú.
            const ok1 = (v1 === '1 dm3');
            const ok2 = (v2 === '1 m3');
            const ok3 = (v3 === '1 m3');
            
            const correctCount = [ok1, ok2, ok3].filter(v => v).length;
            const isCorrect = correctCount === 3;
            
            window.showMathFeedback(isCorrect, "Hộp phấn: 1 dm³; Máy giặt: 1 m³; Container: 1 m³", 
                \`🖍️: \${v1}, 🧺: \${v2}, 🚛: \${v3}\`,
                "Em hãy chọn số đo phù hợp với kích thước thực tế của đồ vật nhé!",
                \`<div class="space-y-4">
                    <p class="text-emerald-700 font-bold text-2xl text-left">Chính xác! Em ước lượng thể tích rất tốt.</p>
                    <ul class="text-left space-y-2 text-xl">
                        <li>• <b>Hộp phấn:</b> Khoảng 1 dm³ (tương đương 10cm x 10cm x 10cm).</li>
                        <li>• <b>Máy giặt:</b> Khoảng 1 m³ (một khối lập phương lớn).</li>
                        <li>• <b>Container:</b> Lớn hơn 1 m³, nên chọn 1 m³ là phù hợp nhất trong các lựa chọn.</li>
                    </ul>
                </div>\`
            );
            window.submitMathLesson("Tiết 112: Luyện tập Mét khối - Bài 1", Math.round(correctCount*33.3), "ans-112-1-1", 0, 3, correctCount);
        };

        window.check_112_2 = function() {
            const v1 = document.getElementById('ans-112-2-1').value.trim();
            const v2 = document.getElementById('ans-112-2-2').value.trim().replace(',', '.');
            const v3 = document.getElementById('ans-112-2-3').value.trim().replace(',', '.');
            const v4 = document.getElementById('ans-112-2-4').value.trim().replace(',', '.');
            
            const ok1 = parseFloat(v1) === 2500;
            const ok2 = parseFloat(v2) === 3.9;
            const ok3 = parseFloat(v3) === 4.6;
            const ok4 = parseFloat(v4) === 7.5;
            
            const correctCount = [ok1, ok2, ok3, ok4].filter(v => v).length;
            const isCorrect = correctCount === 4;
            
            window.showMathFeedback(isCorrect, "2500; 3.9; 4.6; 7.5", 
                \`\${v1}, \${v2}, \${v3}, \${v4}\`,
                "Hãy nhớ tỉ lệ: 1 m³ = 1000 dm³ = 1 000 000 cm³. Mỗi đơn vị liền kề gấp nhau 1000 lần.",
                \`<div class="space-y-4 text-left">
                    <p class="text-emerald-700 font-bold text-2xl">Rất tốt! Em đã đổi các đơn vị đo thể tích chính xác.</p>
                    <div class="bg-blue-50 p-6 rounded-2xl space-y-2 text-xl">
                        <p>• 2,5 m³ = 2,5 × 1000 = <b>2500 dm³</b></p>
                        <p>• 3900 cm³ = 3900 : 1000 = <b>3,9 dm³</b></p>
                        <p>• 4600 dm³ = 4600 : 1000 = <b>4,6 m³</b></p>
                        <p>• 7 500 000 cm³ = 7 500 000 : 1 000 000 = <b>7,5 m³</b></p>
                    </div>
                </div>\`
            );
            window.submitMathLesson("Tiết 112: Luyện tập Mét khối - Bài 2", isCorrect ? 100 : correctCount*25, "ans-112-2-1", 0, 4, correctCount);
        };

        window.check_112_4 = function() {
            const val = document.getElementById('ans-112-4').value.trim();
            const isCorrect = parseInt(val) === 94990;
            
            window.showMathFeedback(isCorrect, "94990", val,
                "Đầu tiên hãy tính tiền cho 10m³ đầu, sau đó tính 5m³ tiếp theo với giá mới rồi cộng lại nhé!",
                \`<div class="space-y-4 text-left">
                    <p class="text-emerald-700 font-bold text-2xl">Xuất sắc! Em giải bài toán thực tế chính xác rồi.</p>
                    <div class="bg-orange-50 p-6 rounded-2xl space-y-3 text-xl font-bold">
                        <p>Số tiền cho 10 m³ đầu là:</p>
                        <p class="text-blue-700">5 973 × 10 = 59 730 (đồng)</p>
                        <p>Số tiền cho 5 m³ tiếp theo là:</p>
                        <p class="text-blue-700">7 052 × 5 = 35 260 (đồng)</p>
                        <p>Tổng số tiền phải trả là:</p>
                        <p class="text-orange-700">59 730 + 35 260 = 94 990 (đồng)</p>
                    </div>
                </div>\`
            );
            window.submitMathLesson("Tiết 112: Luyện tập Mét khối - Bài 4", isCorrect ? 100 : 0, "ans-112-4", 0, 1, isCorrect ? 1 : 0);
        };
        </script>
    `,
    "quizPool": metadata.quizPool,
    "metadata": metadata
};

/* --- MATH_BUILDER_METADATA ---
\${JSON.stringify(metadata)}
--- END_METADATA --- */
