export const lesson165 = {
    period: "165",
    title: "BÀI 71: ÔN TẬP HÌNH HỌC (TIẾT 4)",
    topic: "Ôn tập hình học",
    week: "33",

    content: `
        <div class="space-y-6">
            <div class="bg-rose-50 p-8 rounded-[3rem] border-4 border-rose-200 shadow-2xl">
                <h3 class="text-3xl md:text-5xl font-black text-rose-700 mb-6 uppercase text-center tracking-tight">ÔN TẬP HÌNH HỌC (TIẾT 4)</h3>
                <div class="space-y-4 text-xl md:text-3xl text-gray-800 leading-relaxed font-bold">
                    <p class="uppercase text-rose-600 border-b-4 border-rose-200 pb-2">Luyện tập tổng hợp về hình hộp chữ nhật và hình lập phương</p>
                    <div class="mt-6 p-6 bg-white rounded-3xl shadow-inner border-l-8 border-rose-500 italic text-xl md:text-2xl text-gray-600">
                        "Ghi nhớ: Thể tích vật thể chìm trong nước bằng thể tích phần nước dâng lên."
                    </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="space-y-12 pb-10">
            <!-- BÀI 1 -->
            <div id="lesson165_b1" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg rotate-3">1</div>
                    <p class="text-2xl md:text-4xl font-black text-blue-800 uppercase tracking-wide">Tính kích thước hình hộp chữ nhật</p>
                </div>
                
                <div class="p-8 bg-blue-50 rounded-[2.5rem] border-2 border-blue-100 space-y-8">
                    <p class="text-2xl md:text-3xl leading-snug text-gray-700 font-medium">
                        Một cái hộp hình hộp chữ nhật có chiều dài <span class="text-blue-600 font-black">6 cm</span>, chiều rộng <span class="text-blue-600 font-black">4 cm</span> và chiều cao <span class="text-blue-600 font-black">3 cm</span>. Tính:
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="bg-white p-6 rounded-3xl border-2 border-blue-200 shadow-md transform transition-all hover:scale-105">
                            <label class="block text-xl font-bold text-blue-600 mb-2 uppercase">Diện tích xung quanh</label>
                            <div class="flex items-center gap-2">
                                <input id="165-1-1" type="text" class="w-full h-16 text-center text-2xl md:text-3xl font-black border-4 border-blue-400 rounded-2xl outline-none focus:ring-4 focus:ring-blue-200 transition-all" placeholder="?">
                                <span class="text-xl md:text-2xl font-bold text-gray-500">cm<sup>2</sup></span>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-3xl border-2 border-blue-200 shadow-md transform transition-all hover:scale-105">
                            <label class="block text-xl font-bold text-blue-600 mb-2 uppercase">Diện tích toàn phần</label>
                            <div class="flex items-center gap-2">
                                <input id="165-1-2" type="text" class="w-full h-16 text-center text-2xl md:text-3xl font-black border-4 border-blue-400 rounded-2xl outline-none focus:ring-4 focus:ring-blue-200 transition-all" placeholder="?">
                                <span class="text-xl md:text-2xl font-bold text-gray-500">cm<sup>2</sup></span>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-3xl border-2 border-blue-200 shadow-md transform transition-all hover:scale-105">
                            <label class="block text-xl font-bold text-blue-600 mb-2 uppercase">Thể tích</label>
                            <div class="flex items-center gap-2">
                                <input id="165-1-3" type="text" class="w-full h-16 text-center text-2xl md:text-3xl font-black border-4 border-blue-400 rounded-2xl outline-none focus:ring-4 focus:ring-blue-200 transition-all" placeholder="?">
                                <span class="text-xl md:text-2xl font-bold text-gray-500">cm<sup>3</sup></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-165-1" onclick="window.check_165_1()" class="w-24 h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-4xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>

            <!-- BÀI 2 -->
            <div id="lesson165_b2" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-orange-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-orange-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg -rotate-3">2</div>
                    <p class="text-2xl md:text-4xl font-black text-orange-800 uppercase tracking-wide">Tính thể tích hòn đá</p>
                </div>
                
                <div class="p-8 bg-orange-50 rounded-[2.5rem] border-2 border-orange-100 flex flex-col md:flex-row gap-10 items-center">
                    <div class="flex-1 space-y-8">
                        <p class="text-2xl md:text-3xl leading-relaxed text-gray-700">
                            Một bể cá có diện tích đáy là <span class="text-orange-600 font-black">150 cm<sup>2</sup></span>, mực nước hiện tại cao <span class="text-orange-600 font-black">8 cm</span>. Sau khi thả một hòn đá vào bể, mực nước dâng lên cao tới <span class="text-orange-600 font-black">10 cm</span>.
                        </p>
                        <div class="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-lg border-2 border-orange-200">
                            <span class="text-2xl md:text-3xl font-black text-orange-700 uppercase">Thể tích hòn đá:</span>
                            <div class="flex items-center gap-3">
                                <input id="165-2-1" type="text" class="w-36 h-20 text-center text-4xl md:text-5xl font-black text-orange-600 bg-orange-50 border-4 border-orange-400 rounded-[1.5rem] outline-none shadow-inner focus:ring-4 focus:ring-orange-200 transition-all" placeholder="...">
                                <span class="text-2xl md:text-3xl font-bold text-gray-500">cm<sup>3</sup></span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white p-8 rounded-[3rem] shadow-xl border-4 border-orange-100 transform rotate-2">
                        <svg width="280" height="240" viewBox="0 0 240 200" class="filter drop-shadow-md">
                            <rect x="40" y="40" width="160" height="140" fill="none" stroke="#0369A1" stroke-width="4" rx="4" />
                            <rect x="42" y="100" width="156" height="78" fill="#BAe6FD" opacity="0.8" rx="2" />
                            <rect x="42" y="80" width="156" height="20" fill="#7DD3FC" opacity="0.6" stroke-dasharray="8,4" />
                            <circle cx="120" cy="150" r="30" fill="#4B5563" stroke="#1F2937" stroke-width="2" />
                            <line x1="210" y1="180" x2="210" y2="100" stroke="#0EA5E9" stroke-width="2" marker-end="url(#arrow)" />
                            <text x="215" y="145" font-family="Arial" font-weight="bold" fill="#0369A1" font-size="14">8 cm</text>
                            <line x1="30" y1="180" x2="30" y2="80" stroke="#0EA5E9" stroke-width="2" marker-end="url(#arrow)" />
                            <text x="2" y="135" font-family="Arial" font-weight="bold" fill="#0C4A6E" font-size="14">10 cm</text>
                            <defs>
                                <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orientation="auto">
                                    <path d="M0,0 L10,5 L0,10 Z" fill="#0EA5E9" />
                                </marker>
                            </defs>
                        </svg>
                    </div>
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-165-2" onclick="window.check_165_2()" class="w-24 h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-4xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>

            <!-- BÀI 3 -->
            <div id="lesson165_b3" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-green-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg rotate-0">3</div>
                    <p class="text-2xl md:text-4xl font-black text-green-800 uppercase tracking-wide">Tỉ số thể tích</p>
                </div>
                
                <div class="p-8 bg-green-50 rounded-[2.5rem] border-2 border-green-100 flex flex-col gap-8">
                    <p class="text-2xl md:text-3xl leading-relaxed text-gray-700 italic font-medium">
                        Hình lập phương bé có cạnh dài <span class="text-green-600 font-black not-italic">2 cm</span>, hình lập phương lớn có cạnh dài <span class="text-green-600 font-black not-italic">5 cm</span>.
                    </p>
                    
                    <div class="space-y-8 mt-4">
                        <div class="flex flex-wrap items-center gap-6 bg-white p-6 rounded-[2rem] shadow-md border-2 border-green-200 transition-all hover:bg-green-100">
                            <span class="text-2xl md:text-3xl font-bold text-gray-700">a) Thể tích hình bé bằng:</span>
                            <div class="flex items-center gap-4">
                                <input id="165-3-1" type="text" class="w-24 h-16 text-center text-3xl md:text-4xl font-black border-4 border-green-400 rounded-2xl outline-none focus:ring-4 focus:ring-green-200 transition-all text-green-700 shadow-inner" placeholder="?">
                                <span class="text-3xl md:text-4xl font-bold text-gray-400">/</span>
                                <input id="165-3-2" type="text" class="w-24 h-16 text-center text-3xl md:text-4xl font-black border-4 border-green-400 rounded-2xl outline-none focus:ring-4 focus:ring-green-200 transition-all text-green-700 shadow-inner" placeholder="?">
                            </div>
                            <span class="text-2xl md:text-3xl font-bold text-gray-700">thể tích hình lớn.</span>
                        </div>
                        
                        <div class="flex flex-wrap items-center gap-6 bg-white p-6 rounded-[2rem] shadow-md border-2 border-green-200 transition-all hover:bg-green-100">
                            <span class="text-2xl md:text-3xl font-bold text-gray-700">b) Tỉ số phần trăm V hình lớn và V hình bé:</span>
                            <div class="flex items-center gap-4">
                                <input id="165-3-3" type="text" class="w-40 h-16 text-center text-3xl md:text-4xl font-black border-4 border-green-400 rounded-2xl outline-none focus:ring-4 focus:ring-green-200 transition-all text-green-700 shadow-inner" placeholder="?">
                                <span class="text-3xl md:text-4xl font-black text-green-600">%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-165-3" onclick="window.check_165_3()" class="w-24 h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-4xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>
        </div>
    `,

    quizPool: [
        { question: "Diện tích xung quanh hình hộp chữ nhật (6x4x3 cm) là:", options: ["60 cm²", "48 cm²", "30 cm²", "72 cm²"], answer: 0 },
        { question: "Diện tích toàn phần hình hộp chữ nhật (6x4x3 cm) là:", options: ["108 cm²", "60 cm²", "72 cm²", "120 cm²"], answer: 0 },
        { question: "Thể tích hình hộp chữ nhật (6x4x3 cm) là:", options: ["72 cm³", "60 cm³", "108 cm³", "13 cm³"], answer: 0 },
        { question: "Thể tích hòn đá làm nước dâng 2cm trong bể diện tích đáy 150cm² là:", options: ["300 cm³", "150 cm³", "75 cm³", "600 cm³"], answer: 0 },
        { question: "Mực nước từ 8cm dâng lên 10cm thì phần dâng cao thêm bao nhiêu?", options: ["2 cm", "18 cm", "80 cm", "10 cm"], answer: 0 },
        { question: "Tỉ số thể tích hai khối lập phương có cạnh 2cm và 5cm là:", options: ["8/125", "2/5", "4/25", "25/8"], answer: 0 },
        { question: "Tỉ số diện tích toàn phần hai khối lập phương có cạnh 2cm và 5cm là:", options: ["4/25", "2/5", "8/125", "16/625"], answer: 0 },
        { question: "Tỉ số phần trăm thể tích khối lớn (125cm³) so với khối bé (8cm³) là:", options: ["1562,5%", "6,4%", "15,6%", "156%"], answer: 0 },
        { question: "Tỉ số phần trăm thể tích 1000cm³ so với 2000cm³ là:", options: ["50%", "200%", "20%", "40%"], answer: 0 },
        { question: "Một khối sắt có thể tích 100cm³, biết 1cm³ sắt nặng 7,8g. Khối sắt nặng:", options: ["780 g", "78 g", "7,8 kg", "0,78 g"], answer: 0 },
        { question: "Bể chứa được 2m³ nước. Nếu đã chứa 1500 lít thì còn bao nhiêu dm³?", options: ["500 dm³", "1500 dm³", "50 dm³", "2000 dm³"], answer: 0 },
        { question: "Cạnh khối lập phương tăng 4 lần thì thể tích tăng:", options: ["64 lần", "16 lần", "4 lần", "8 lần"], answer: 0 },
        { question: "Bể cá cảnh hình lập phương cạnh 0,6m. V của bể là:", options: ["0,216 m³", "2,16 m³", "0,36 m³", "1,44 m³"], answer: 0 },
        { question: "Đổi 2,5 m³ sang dm³:", options: ["2500 dm³", "250 dm³", "25 dm³", "25000 dm³"], answer: 0 },
        { question: "Đổi 4500 cm³ sang dm³:", options: ["4,5 dm³", "45 dm³", "0,45 dm³", "450 dm³"], answer: 0 },
        { question: "Hình hộp chữ nhật có Sxq=80cm², cao=4cm. Chu vi đáy là:", options: ["20 cm", "10 cm", "40 cm", "5 cm"], answer: 0 },
        { question: "Một hòn đá chìm trong bể làm nước dâng từ 500ml lên 800ml. V đá là:", options: ["300 cm³", "1300 cm³", "1,3 lít", "0,3 ml"], answer: 0 },
        { question: "Tính 25% của thể tích 400 cm³:", options: ["100 cm³", "25 cm³", "200 cm³", "50 cm³"], answer: 0 },
        { question: "Tỉ số thể tích 2 hình là 3:4. Nếu hình bé là 15cm³, hình lớn là:", options: ["20 cm³", "12 cm³", "45 cm³", "60 cm³"], answer: 0 },
        { question: "Hình lập phương có cạnh 10cm. Sxq là:", options: ["400 cm²", "600 cm²", "1000 cm³", "100 cm²"], answer: 0 },
        { question: "Trong các đơn vị sau, đơn vị nào dùng để đo thể tích?", options: ["dm³", "m²", "cm", "kg"], answer: 0 },
        { question: "1 lít tương đương với đơn vị nào?", options: ["1 dm³", "1 cm³", "1 m³", "1 mm³"], answer: 0 },
        { question: "Diện tích toàn phần của hình hộp chữ nhật có mấy mặt?", options: ["6 mặt", "4 mặt", "2 mặt", "8 mặt"], answer: 0 },
        { question: "Thể tích của hình hộp chữ nhật vớ diện tích đáy S và chiều cao h là:", options: ["S x h", "S + h", "S : h", "S x 2 + h"], answer: 0 },
        { question: "Cạnh hình lập phương là a. Thể tích V là:", options: ["a x a x a", "a x a", "a x 3", "a x a x 6"], answer: 0 }
    ]
};

// --- Logic Functions ---
window.check_165_1 = () => {
    const v = (id) => document.getElementById('165-1-' + id).value.trim();
    let score = 0;
    if (v('1') === '240') score++;
    if (v('2') === '640') score++;
    if (v('3') === '800') score++;

    const total = 3;
    const isCorrect = score === total;
    const rightAnswer = "a) Sxq=240 cm²; b) Stp=640 cm²; c) V=800 cm³";
    const studentAnswer = `a) ${v('1')}; b) ${v('2')}; c) ${v('3')}`;
    const guidance = "Em hãy nhớ các công thức: Sxq = (d + r) &times; 2 &times; c; Stp = Sxq + Sđáy &times; 2; V = d &times; r &times; c. Áp dụng cho hình hộp có kích thước 20cm, 10cm, 4cm nhé.";
    const solution = `
        <div class="space-y-4">
            <p class="font-bold text-green-700">Rất tốt! Em đã tính toán các đại lượng của hình hộp chữ nhật rất chính xác. 🧊</p>
            <div class="bg-blue-50 p-4 rounded-xl border-2 border-blue-200 text-left">
                <p><b>Lời giải chi tiết:</b></p>
                <p>• Diện tích xung quanh: (20 + 10) &times; 2 &times; 4 = <b>240</b> (cm²).</p>
                <p>• Diện tích toàn phần: 240 + (20 &times; 10) &times; 2 = 240 + 400 = <b>640</b> (cm²).</p>
                <p>• Thể tích hình hộp: 20 &times; 10 &times; 4 = <b>800</b> (cm³).</p>
            </div>
        </div>
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Hình hộp chữ nhật", Math.round(score / total * 100), "btn-check-165-1", 0, total, score);
};

window.check_165_2 = () => {
    const val = document.getElementById('165-2-1').value.trim().replace(',', '.');
    const isCorrect = val === '1.2';
    const rightAnswer = "1,2 dm³";
    const studentAnswer = val + " dm³";
    const guidance = "Em hãy chú ý: Thể tích của hòn đá chính bằng thể tích của phần nước dâng thêm. Phần nước dâng thêm có đáy là 2dm, 1,5dm và chiều cao là 0,4dm.";
    const solution = `
        <div class="space-y-4">
            <p class="font-bold text-green-700">Chính xác! Em đã nắm rất vững nguyên lý vật lý trong bài toán toán học này. 🪨</p>
            <div class="bg-orange-50 p-4 rounded-xl border-2 border-orange-200 text-left">
                <p><b>Lời giải chi tiết:</b></p>
                <p>Thể tích của hòn đá bằng thể tích phần nước dâng lên.</p>
                <p>Chiều cao phần nước dâng lên là: 0,8 - 0,4 = 0,4 (dm).</p>
                <p>Thể tích hòn đá là: 2 &times; 1,5 &times; 0,4 = <b>1,2</b> (dm³).</p>
                <p>Đáp số: 1,2 dm³.</p>
            </div>
        </div>
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Hòn đá trong bể nước", isCorrect ? 100 : 0, "btn-check-165-2", 0, 1, isCorrect ? 1 : 0);
};

window.check_165_3 = () => {
    const v1 = document.getElementById('165-3-1').value.trim();
    const v2 = document.getElementById('165-3-2').value.trim();
    let score = 0;
    if (v1 === '2/3') score++;
    if (v2 === '8/27') score++;

    const total = 2;
    const isCorrect = score === total;
    const rightAnswer = "a) 2/3; b) 8/27";
    const studentAnswer = `a) ${v1}; b) ${v2}`;
    const guidance = "a) Tỉ số độ dài cạnh là 8 : 12. b) Tỉ số thể tích bằng (Tỉ số độ dài cạnh) mũ 3, tức là (2/3) &times; (2/3) &times; (2/3).";
    const solution = `
        <div class="space-y-4">
            <p class="font-bold text-green-700">Xuất sắc! Em đã hiểu mối liên hệ giữa tỉ số cạnh và tỉ số thể tích. 📈</p>
            <div class="bg-green-50 p-4 rounded-xl border-2 border-green-200 text-left">
                <p><b>Lời giải chi tiết:</b></p>
                <p>a) Tỉ số độ dài cạnh của hình lập phương bé và hình lập phương lớn là: 8 : 12 = <b>2/3</b>.</p>
                <p>b) Tỉ số thể tích của hình lập phương bé và hình lập phương lớn là:</p>
                <p class="text-center font-bold">(2/3) &times; (2/3) &times; (2/3) = <b>8/27</b></p>
                <p>Đáp số: a) 2/3; b) 8/27.</p>
            </div>
        </div>
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Tỉ số thể tích", Math.round(score / total * 100), "btn-check-165-3", 0, total, score);
};
