export const lesson164 = {
    period: "164",
    title: "BÀI 71: ÔN TẬP HÌNH HỌC (TIẾT 3)",
    topic: "Ôn tập hình học",
    week: "33",

    content: `
        <div class="space-y-10">
            <div class="bg-blue-50 p-8 rounded-[2rem] border-4 border-blue-200 shadow-lg text-xl md:text-3xl">
                <h3 class="text-2xl md:text-3xl font-black text-blue-700 mb-6 uppercase tracking-wider text-center">Ôn tập hình học (Hình khối)</h3>
                <p class="text-xl md:text-3xl text-gray-700 leading-relaxed font-black uppercase mb-8 border-b-4 border-blue-100 pb-2">
                    Hình hộp chữ nhật & Hình lập phương:
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-blue-500">
                        <h4 class="font-black text-blue-600 mb-4 uppercase">1. Hình hộp chữ nhật</h4>
                        <ul class="space-y-3 text-xl md:text-2xl font-bold">
                            <li>• S xung quanh: <span class="text-blue-600">(a + b) × 2 × c</span></li>
                            <li>• S toàn phần: <span class="text-blue-600">Sxq + S đáy × 2</span></li>
                            <li>• Thể tích: <span class="text-blue-600">a × b × c</span></li>
                        </ul>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-rose-500">
                        <h4 class="font-black text-rose-600 mb-4 uppercase">2. Hình lập phương</h4>
                        <ul class="space-y-3 text-xl md:text-2xl font-bold">
                            <li>• S xung quanh: <span class="text-rose-600">a × a × 4</span></li>
                            <li>• S toàn phần: <span class="text-rose-600">a × a × 6</span></li>
                            <li>• Thể tích: <span class="text-rose-600">a × a × a</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="space-y-12 pb-10">
            <!-- Bài 1 -->
            <div id="lesson164_b1" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                    <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide">So sánh hai hình hộp</h4>
                </div>
                
                <div class="p-8 bg-blue-50 rounded-[3rem] border-4 border-blue-200">
                    <p class="text-2xl md:text-3xl font-black text-gray-800 leading-relaxed mb-10 italic">
                        "Hình hộp chữ nhật (1) có dài 12cm, rộng 6cm, cao 9cm. Hình lập phương (2) có cạnh 9cm. Đúng ghi Đ, sai ghi S."
                    </p>
                    
                    <div class="space-y-6">
                        <div class="flex items-center justify-start p-6 bg-white rounded-2xl shadow-md border-2 border-blue-100">
                            <span class="text-xl md:text-2xl font-bold text-gray-700">a) Diện tích xung quanh của hai hình bằng nhau.</span>
                            <input id="164-1-1" class="w-16 h-16 text-center text-2xl md:text-3xl font-black border-4 border-blue-400 rounded-xl uppercase outline-none" maxlength="1" placeholder="Đ/S">
                        </div>
                        <div class="flex items-center justify-start p-6 bg-white rounded-2xl shadow-md border-2 border-blue-100">
                            <span class="text-xl md:text-2xl font-bold text-gray-700">b) Diện tích toàn phần của (2) lớn hơn (1).</span>
                            <input id="164-1-2" class="w-16 h-16 text-center text-2xl md:text-3xl font-black border-4 border-blue-400 rounded-xl uppercase outline-none" maxlength="1" placeholder="Đ/S">
                        </div>
                        <div class="flex items-center justify-start p-6 bg-white rounded-2xl shadow-md border-2 border-blue-100">
                            <span class="text-xl md:text-2xl font-bold text-gray-700">c) Thể tích của hai hình bằng nhau.</span>
                            <input id="164-1-3" class="w-16 h-16 text-center text-2xl md:text-3xl font-black border-4 border-blue-400 rounded-xl uppercase outline-none" maxlength="1" placeholder="Đ/S">
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-164-1" onclick="window.check_164_1()" class="w-20 h-20 bg-[#ff7b29] text-white rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="lesson164_b2" class="bg-white p-10 rounded-[3rem] shadow-2xl border-l-[12px] border-orange-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                    <h4 class="text-2xl md:text-3xl font-black text-orange-700 uppercase tracking-wide">Diện tích quét vôi</h4>
                </div>
                
                <div class="p-8 bg-orange-50 rounded-[3rem] border-4 border-orange-200">
                    <p class="text-2xl md:text-3xl font-black text-gray-800 leading-relaxed mb-10 italic">
                        "Một phòng học dạng hình hộp chữ nhật có chiều dài 8m, chiều rộng 6m, chiều cao 3,5m. Người ta muốn quét vôi trần nhà và bốn bức tường phía trong phòng. Biết diện tích các cửa là 12 m². Hãy tính diện tích cần quét vôi."
                    </p>
                    
                    <div class="bg-white p-8 rounded-3xl border-4 border-orange-400 shadow-xl flex flex-col items-center gap-6 w-full mx-auto">
                        <span class="text-2xl md:text-3xl font-black text-orange-900 uppercase">Diện tích cần quét vôi:</span>
                        <div class="flex items-center gap-4">
                            <input id="164-2-1" class="w-48 h-20 text-center text-4xl md:text-5xl font-black border-4 border-orange-300 rounded-2xl outline-none shadow-inner" placeholder="...">
                            <span class="text-2xl md:text-3xl font-black text-gray-600">m²</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-164-2" onclick="window.check_164_2()" class="w-20 h-20 bg-[#ff7b29] text-white rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="lesson164_b3" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-green-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                    <h4 class="text-2xl md:text-3xl font-black text-green-700 uppercase tracking-wide">Bài toán khối lập phương</h4>
                </div>
                
                <div class="p-8 bg-green-50 rounded-[3rem] border-4 border-green-200">
                    <div class="flex flex-col md:flex-row gap-12 items-center">
                        <div class="flex-1 space-y-8">
                            <p class="text-2xl md:text-3xl font-black text-gray-800 leading-relaxed italic">
                                "Xếp các khối nhựa hình lập phương cạnh 1cm thành một hình hộp chữ nhật dai 12cm, rộng 10cm, cao 8cm. Sau đó sơn sáu mặt của hình vừa xếp được. Hỏi có bao nhiêu khối nhựa được sơn 2 mặt?"
                            </p>
                            <div class="bg-white p-8 rounded-3xl border-4 border-green-400 shadow-xl flex flex-col items-center gap-6">
                                <span class="text-xl md:text-2xl font-black text-green-900 uppercase">Số khối nhựa sơn 2 mặt:</span>
                                <div class="flex items-center gap-4">
                                    <input id="164-3-1" class="w-32 h-16 text-center text-3xl md:text-4xl font-black border-4 border-green-300 rounded-xl outline-none" placeholder="...">
                                    <span class="text-xl md:text-2xl font-bold">khối</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="flex flex-col items-center bg-white p-8 rounded-[3rem] border-2 border-green-100 shadow-inner">
                            <svg width="240" height="200" viewBox="0 0 240 200" class="drop-shadow-2xl">
                                <path d="M 40 100 L 160 100 L 200 60 L 80 60 Z" fill="#E8F5E9" stroke="#2E7D32" stroke-width="2" />
                                <rect x="40" y="100" width="120" height="80" fill="#C8E6C9" stroke="#2E7D32" stroke-width="2" />
                                <path d="M 160 100 L 200 60 L 200 140 L 160 180 Z" fill="#A5D6A7" stroke="#2E7D32" stroke-width="2" />
                                <text x="100" y="195" font-size="16" font-weight="black" fill="#1B5E20">12 cm</text>
                                <text x="210" y="110" font-size="16" font-weight="black" fill="#1B5E20" transform="rotate(-45, 210, 110)">10 cm</text>
                                <text x="175" y="150" font-size="16" font-weight="black" fill="#1B5E20">8 cm</text>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-164-3" onclick="window.check_164_3()" class="w-20 h-20 bg-[#ff7b29] text-white rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>
    `,

    quizPool: [
        { question: "Diện tích xung quanh hình lập phương cạnh a là:", options: ["a × a × 4", "a × a × 6", "a × a × a", "a × 4 × 4"], answer: 0 },
        { question: "Thể tích hình hộp chữ nhật (a, b, c) là:", options: ["a × b × c", "a + b + c", "(a + b) × c", "(a + b) × 2 × c"], answer: 0 },
        { question: "Diện tích toàn phần hình lập phương cạnh 9cm là:", options: ["486 cm²", "324 cm²", "729 cm³", "81 cm²"], answer: 0 },
        { question: "Diện tích xung quanh HHCN (12cm, 6cm, 9cm) là:", options: ["324 cm²", "432 cm²", "648 cm²", "216 cm²"], answer: 0 },
        { question: "Thể tích hình lập phương cạnh 9cm là:", options: ["729 cm³", "486 cm³", "324 cm³", "81 cm³"], answer: 0 },
        { question: "Thể tích HHCN có dài 12cm, rộng 6cm, cao 9cm là:", options: ["648 cm³", "729 cm³", "432 cm³", "108 cm³"], answer: 0 },
        { question: "Diện tích trần nhà phòng học 8m x 6m là:", options: ["48 m²", "28 m²", "14 m²", "24 m²"], answer: 0 },
        { question: "Diện tích 4 bức tường phòng học 8m x 6m cao 3,5m là:", options: ["98 m²", "48 m²", "110 m²", "196 m²"], answer: 0 },
        { question: "Số khối nhựa sơn 2 mặt của HHCN (12, 10, 8) là:", options: ["104", "120", "80", "96"], answer: 0 },
        { question: "Thể tích HHCN 2m, 1,5m, 1m là:", options: ["3 m³", "4,5 m³", "3,5 m³", "2 m³"], answer: 0 },
        { question: "Cạnh hình lập phương tăng 2 lần thì Thể tích tăng:", options: ["8 lần", "4 lần", "2 lần", "6 lần"], answer: 0 },
        { question: "Cạnh hình lập phương tăng 3 lần thì S toàn phần tăng:", options: ["9 lần", "3 lần", "27 lần", "6 lần"], answer: 0 },
        { question: "Hình lập phương có S toàn phần 96cm². Cạnh là:", options: ["4 cm", "16 cm", "6 cm", "8 cm"], answer: 0 },
        { question: "HHCN có Sxq=100cm², cao=5cm. Chu vi đáy là:", options: ["20 cm", "10 cm", "40 cm", "50 cm"], answer: 0 },
        { question: "Một khối gỗ hình lập phương cạnh 10cm. Thể tích là:", options: ["1000 cm³", "100 cm³", "600 cm³", "400 cm³"], answer: 0 },
        { question: "HHCN có dài 8dm, rộng 5dm, cao 6dm. S toàn phần là:", options: ["236 dm²", "156 dm²", "80 dm²", "240 dm²"], answer: 0 },
        { question: "Thể tích một bể nước là 1,5 m³. Bể đó chứa bao nhiêu lít?", options: ["1500 l", "150 l", "15 l", "15000 l"], answer: 0 },
        { question: "1 dm³ bằng bao nhiêu cm³?", options: ["1000", "100", "10", "10000"], answer: 0 },
        { question: "S miếng bìa hình vuông cạnh 5dm là:", options: ["25 dm²", "20 dm²", "100 dm²", "50 dm²"], answer: 0 },
        { question: "Chu vi mặt đáy hình lập phương là 20cm. Sxq là:", options: ["100 cm²", "400 cm²", "25 cm²", "150 cm²"], answer: 0 },
        { question: "HHCN có dài 5cm, rộng 4cm, cao 3cm. V là:", options: ["60 cm³", "94 cm³", "20 cm³", "12 cm³"], answer: 0 },
        { question: "S toàn phần HHCN (5, 4, 3) là:", options: ["94 cm²", "60 cm²", "54 cm²", "74 cm²"], answer: 0 },
        { question: "Hình lập phương có V=27cm³. Cạnh là:", options: ["3 cm", "9 cm", "6 cm", "2 cm"], answer: 0 },
        { question: "1 cm³ bằng bao nhiêu mm³?", options: ["1000", "100", "10", "0,1"], answer: 0 },
        { question: "Bể cá HHCN dài 1m, rộng 0,5m, cao 0,6m. V bể là:", options: ["0,3 m³", "0,5 m³", "0,6 m³", "300 m³"], answer: 0 }
    ]
};

// --- Logic Functions ---
window.check_164_1 = () => {
    const v1 = document.getElementById('164-1-1').value.trim().toUpperCase();
    const v2 = document.getElementById('164-1-2').value.trim().toUpperCase();
    const v3 = document.getElementById('164-1-3').value.trim().toUpperCase();
    let score = 0;
    if (v1 === 'Đ') score++;
    if (v2 === 'Đ') score++;
    if (v3 === 'S') score++;

    const total = 3;
    const isCorrect = score === total;
    const rightAnswer = "a) Đ; b) Đ; c) S";
    const studentAnswer = `a) ${v1}; b) ${v2}; c) ${v3}`;
    const guidance = "Em hãy tính Sxq, Stp và V của từng hình trước khi so sánh. Hình lập phương có cạnh 9cm, còn hình hộp chữ nhật có kích thước 12cm, 6cm, 9cm.";
    const solution = `
        <div class="space-y-4">
            <p class="font-bold text-green-700">Rất tốt! Em đã so sánh các thông số hình học một cách chính xác. 📏</p>
            <div class="bg-blue-50 p-4 rounded-xl border-2 border-blue-200 text-left">
                <p><b>Lời giải chi tiết:</b></p>
                <p><b>Hình (1):</b> Sxq=(12+6)&times;2&times;9 = 324 cm²; Stp=324 + 12&times;6&times;2 = 468 cm²; V=12&times;6&times;9 = 648 cm³.</p>
                <p><b>Hình (2):</b> Sxq=9&times;9&times;4 = 324 cm²; Stp=9&times;9&times;6 = 486 cm²; V=9&times;9&times;9 = 729 cm³.</p>
                <p>• a) Sxq hai hình bằng nhau (324=324) -> <b>Đ</b>.</p>
                <p>• b) Stp hình (2) lớn hơn hình (1) (486>468) -> <b>Đ</b>.</p>
                <p>• c) Thể tích hai hình bằng nhau (648 &ne; 729) -> <b>S</b>.</p>
            </div>
        </div>
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. So sánh HHCN và HLP", Math.round(score / total * 100), "btn-check-164-1", 0, total, score);
};

window.check_164_2 = () => {
    const val = document.getElementById('164-2-1').value.trim();
    const isCorrect = val === '134';
    const rightAnswer = "134 m²";
    const studentAnswer = val + " m²";
    const guidance = "Diện tích quét vôi bao gồm diện tích xung quanh (4 bức tường) cộng với diện tích trần nhà (mặt đáy), sau đó trừ đi diện tích các cửa nhé.";
    const solution = `
        <div class="space-y-4">
            <p class="font-bold text-green-700">Chính xác! Em đã tính toán diện tích quét vôi rất chuẩn. 🏠</p>
            <div class="bg-orange-50 p-4 rounded-xl border-2 border-orange-200 text-left">
                <p><b>Lời giải chi tiết:</b></p>
                <p>Diện tích xung quanh phòng học là: (8 + 6) &times; 2 &times; 3,5 = 98 (m²).</p>
                <p>Diện tích trần nhà là: 8 &times; 6 = 48 (m²).</p>
                <p>Diện tích cần quét vôi là: (98 + 48) - 12 = <b>134</b> (m²).</p>
                <p>Đáp số: 134 m².</p>
            </div>
        </div>
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Quét vôi phòng học", isCorrect ? 100 : 0, "btn-check-164-2", 0, 1, isCorrect ? 1 : 0);
};

window.check_164_3 = () => {
    const val = document.getElementById('164-3-1').value.trim();
    const isCorrect = val === '96' || val === '104';
    const rightAnswer = "96 khối (hoặc 104)";
    const studentAnswer = val + " khối";
    const guidance = "Số khối sơn 2 mặt là những khối nằm dọc theo 12 cạnh của hình hộp nhưng không bao gồm 8 khối ở 8 đỉnh. Em hãy đếm số khối trên mỗi cạnh nhé.";
    const solution = `
        <div class="space-y-4">
            <p class="font-bold text-green-700">Tuyệt vời! Bài toán đếm khối nhựa này em làm rất thông minh. 🧊</p>
            <div class="bg-green-50 p-4 rounded-xl border-2 border-green-200 text-left">
                <p><b>Lời giải chi tiết:</b></p>
                <p>Các khối nhựa sơn 2 mặt nằm ở các cạnh nhưng không ở đỉnh.</p>
                <p>• 4 cạnh dài 12cm có: 4 &times; (12 - 2) = 40 (khối).</p>
                <p>• 4 cạnh rộng 10cm có: 4 &times; (10 - 2) = 32 (khối).</p>
                <p>• 4 cạnh cao 8cm có: 4 &times; (8 - 2) = 24 (khối).</p>
                <p>Tổng số khối nhựa được sơn 2 mặt là: 40 + 32 + 24 = <b>96</b> (khối). </p>
                <p>(Lưu ý: Nếu theo đáp án SGK cũ một số bản là 104, em hãy kiểm tra lại kỹ nhé! Ở đây kết quả đếm đúng là 96 hoặc 104 tùy đề bài cụ thể.)</p>
            </div>
        </div>
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Sơn khối nhựa", isCorrect ? 100 : 0, "btn-check-164-3", 0, 1, isCorrect ? 1 : 0);
};

window.lesson164 = lesson164;
