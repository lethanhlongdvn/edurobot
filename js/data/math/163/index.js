export const lesson163 = {
    period: "163",
    title: "BÀI 71: ÔN TẬP HÌNH HỌC (TIẾT 2)",
    topic: "Ôn tập hình học",
    week: "33",

    content: `
        <div class="space-y-10">
            <div class="bg-orange-50 p-8 rounded-[2rem] border-4 border-orange-200 shadow-lg text-xl md:text-3xl">
                <h3 class="text-2xl md:text-3xl font-black text-orange-700 mb-6 uppercase tracking-wider text-center">Ôn tập hình học (Luyện tập 2)</h3>
                <p class="text-xl md:text-3xl text-gray-700 leading-relaxed font-black uppercase mb-8 border-b-4 border-orange-100 pb-2">
                    Các bài toán tổng hợp về diện tích:
                </p>
                <div class="p-8 bg-white rounded-3xl shadow-inner border-l-8 border-orange-500 italic">
                    <p class="text-xl md:text-3xl font-bold text-gray-700 leading-relaxed">
                        "Khi giải các bài toán hình học phức tạp, hãy chia nhỏ hình đó thành các hình cơ bản (hình chữ nhật, hình tam giác, hình tròn) để tính toán dễ dàng hơn."
                    </p>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="space-y-12 pb-10">
            <!-- Bài 1 -->
            <div id="lesson163_b1" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                    <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide">Bài 1. Diện tích sân bóng rổ</h3>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div class="p-8 bg-blue-50 rounded-[3rem] border-4 border-blue-200 shadow-inner space-y-6">
                        <p class="text-2xl md:text-3xl font-black text-gray-800 leading-relaxed italic">
                            "Một sân bóng rổ có kích thước như hình vẽ. Biết vòng tròn ở giữa sân có đường kính 3,6 m."
                        </p>
                        <div class="grid grid-cols-1 gap-4 font-black">
                            <div class="bg-white p-4 rounded-xl border-2 border-blue-400">
                                <span class="text-xl uppercase text-blue-700">a) Sân bóng rổ:</span>
                                <div class="flex flex-wrap gap-4 mt-2">
                                    <div class="flex items-center gap-2">P: <input id="163-1-1" class="w-24 h-10 text-center border-b-2 border-blue-500 outline-none" placeholder="?"> m</div>
                                    <div class="flex items-center gap-2">S: <input id="163-1-2" class="w-24 h-10 text-center border-b-2 border-blue-500 outline-none" placeholder="?"> m²</div>
                                </div>
                            </div>
                            <div class="bg-white p-4 rounded-xl border-2 border-cyan-400">
                                <span class="text-xl uppercase text-cyan-700">b) Vòng tròn giữa sân:</span>
                                <div class="flex flex-wrap gap-4 mt-2">
                                    <div class="flex items-center gap-2">C: <input id="163-1-3" class="w-24 h-10 text-center border-b-2 border-cyan-500 outline-none" placeholder="?"> m</div>
                                    <div class="flex items-center gap-2">S: <input id="163-1-4" class="w-24 h-10 text-center border-b-2 border-cyan-500 outline-none" placeholder="?"> m²</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex flex-col items-center bg-white p-6 rounded-[3rem] border-2 border-blue-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/98/" class="w-full h-auto drop-shadow-2xl" alt="Sân bóng rổ">
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-163-1" onclick="window.check_163_1()" class="w-20 h-20 bg-[#ff7b29] text-white rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="lesson163_b2" class="bg-white p-10 rounded-[3rem] shadow-2xl border-l-[12px] border-orange-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                    <h3 class="text-2xl md:text-3xl font-black text-orange-700 uppercase tracking-wide">Bài 2. Bài toán gấp hộp</h3>
                </div>
                
                <div class="p-8 bg-orange-50 rounded-[3rem] border-4 border-orange-200">
                    <p class="text-2xl md:text-3xl font-black text-gray-800 leading-relaxed mb-10 italic">
                        "Từ một miếng bìa hình vuông cạnh 40 cm, Nam cắt bốn hình vuông bằng nhau có cạnh 8 cm ở bốn góc để gấp thành một chiếc hộp không nắp."
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                         <div class="flex flex-col items-center bg-white p-8 rounded-[3rem] border-2 border-orange-100 shadow-inner">
                            <svg width="300" height="300" viewBox="0 0 240 240" class="drop-shadow-2xl">
                                <rect x="0" y="0" width="240" height="240" fill="none" stroke="#E67E22" stroke-width="2" stroke-dasharray="8,4" />
                                <path d="M 60 0 L 180 0 L 180 60 L 240 60 L 240 180 L 180 180 L 180 240 L 60 240 L 60 180 L 0 180 L 0 60 L 60 60 Z" fill="#FFF3E0" stroke="#E67E22" stroke-width="4" />
                                <text x="120" y="30" font-size="20" font-weight="black" text-anchor="middle" fill="#E67E22">8 cm</text>
                                <text x="30" y="120" font-size="20" font-weight="black" text-anchor="middle" transform="rotate(-90, 30, 120)" fill="#E67E22">8 cm</text>
                                <text x="120" y="235" font-size="20" font-weight="black" text-anchor="middle" fill="#A04000">Cạnh miếng bìa: 40 cm</text>
                            </svg>
                        </div>
                        
                        <div class="space-y-8">
                            <div class="bg-white p-6 rounded-2xl border-l-[10px] border-orange-400 shadow-lg">
                                <p class="text-xl md:text-2xl font-black text-orange-900 mb-4">Diện tích miếng bìa dùng làm hộp:</p>
                                <div class="flex items-center gap-4">
                                    <input id="163-2-1" class="w-32 h-14 text-center border-4 border-orange-300 rounded-xl text-2xl md:text-3xl font-black outline-none" placeholder="...">
                                    <span class="text-xl md:text-2xl font-bold">cm²</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-163-2" onclick="window.check_163_2()" class="w-20 h-20 bg-[#ff7b29] text-white rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="lesson163_b3" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-green-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                    <h3 class="text-2xl md:text-3xl font-black text-green-700 uppercase tracking-wide">Bài 3. Diện tích đất tăng thêm</h3>
                </div>
                
                <div class="p-8 bg-green-50 rounded-[3rem] border-4 border-green-200 flex flex-col md:flex-row gap-10 items-center">
                    <div class="flex-1 space-y-8">
                        <p class="text-2xl md:text-3xl font-black text-gray-800 leading-relaxed italic">
                            "Một mảnh đất có dạng hình thang vuông với chiều cao bằng đáy bé và bằng 40 m. Độ dài đáy lớn bằng 3/2 độ dài đáy bé. Tính diện tích mảnh đất đó."
                        </p>
                        <div class="bg-white p-8 rounded-3xl border-4 border-green-400 shadow-xl flex flex-col items-center gap-6">
                            <span class="text-2xl md:text-3xl font-black text-green-900 uppercase text-center">Diện tích mảnh đất ban đầu:</span>
                            <div class="flex items-center gap-4">
                                <input id="163-3-1" class="w-48 h-20 text-center text-3xl md:text-4xl font-black border-4 border-green-300 rounded-2xl outline-none" placeholder="...">
                                <span class="text-2xl md:text-3xl font-black text-gray-600">m²</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white p-6 rounded-[2.5rem] border-2 border-green-100 shadow-inner">
                        <svg width="320" height="220" viewBox="0 0 300 200" class="drop-shadow-2xl">
                            <path d="M 60 40 L 160 40 L 210 160 L 60 160 Z" fill="#C8E6C9" stroke="#2E7D32" stroke-width="4" />
                            <text x="110" y="30" font-size="20" font-weight="black" text-anchor="middle" fill="#1B5E20">40 m</text>
                            <text x="135" y="185" font-size="20" font-weight="black" text-anchor="middle" fill="#1B5E20">Đáy lớn = 3/2 Đáy bé</text>
                            <text x="45" y="100" font-size="20" font-weight="black" text-anchor="middle" transform="rotate(-90, 45, 100)" fill="#1B5E20">h = 40m</text>
                        </svg>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-163-3" onclick="window.check_163_3()" class="w-20 h-20 bg-[#ff7b29] text-white rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 4 -->
            <div id="lesson163_b4" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-rose-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-16 h-16 bg-rose-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                    <h3 class="text-2xl md:text-3xl font-black text-rose-700 uppercase tracking-wide">Bài 4. Thử thách: Ghép hình</h3>
                </div>
                
                <div class="p-8 bg-rose-50 rounded-[3rem] border-4 border-rose-200">
                    <div class="flex flex-col md:flex-row gap-12 items-center">
                        <div class="flex-1 space-y-8">
                            <p class="text-2xl md:text-3xl font-black text-gray-800 leading-relaxed italic">
                                "Một tấm kim loại gồm 9 hình chữ nhật bằng nhau ghép lại. Mỗi hình chữ nhật nhỏ có chiều dài 30 cm, chiều rộng 20 cm. Tính chu vi và diện tích của tấm kim loại đó."
                            </p>
                            <div class="bg-white p-8 rounded-3xl border-4 border-rose-400 shadow-xl space-y-6">
                                <div class="flex items-center gap-4 text-xl md:text-2xl font-black">
                                    <span class="text-rose-900 uppercase">Chu vi tấm kim loại:</span>
                                    <input id="163-4-1" class="w-32 h-12 text-center border-b-4 border-rose-300 outline-none" placeholder="...">
                                    <span>cm</span>
                                </div>
                                <div class="flex items-center gap-4 text-xl md:text-2xl font-black">
                                    <span class="text-rose-900 uppercase">Diện tích tấm kim loại:</span>
                                    <input id="163-4-2" class="w-32 h-12 text-center border-b-4 border-rose-300 outline-none" placeholder="...">
                                    <span>cm²</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-white p-8 rounded-[3rem] border-2 border-rose-100 shadow-inner flex flex-col items-center">
                            <svg width="260" height="220" viewBox="0 0 240 200" class="drop-shadow-2xl">
                                <rect x="10" y="10" width="150" height="150" fill="#FCE4EC" stroke="#C2185B" stroke-width="4" />
                                <line x1="10" y1="40" x2="160" y2="40" stroke="#C2185B" stroke-width="2" />
                                <line x1="10" y1="70" x2="160" y2="70" stroke="#C2185B" stroke-width="2" />
                                <line x1="10" y1="100" x2="160" y2="100" stroke="#C2185B" stroke-width="2" />
                                <line x1="10" y1="130" x2="160" y2="130" stroke="#C2185B" stroke-width="2" />
                                <rect x="160" y="10" width="70" height="150" fill="#F8BBD0" stroke="#C2185B" stroke-width="4" />
                                <line x1="160" y1="47.5" x2="230" y2="47.5" stroke="#C2185B" stroke-width="2" />
                                <line x1="160" y1="85" x2="230" y2="85" stroke="#C2185B" stroke-width="2" />
                                <line x1="160" y1="122.5" x2="230" y2="122.5" stroke="#C2185B" stroke-width="2" />
                            </svg>
                            <p class="mt-6 text-xl font-black text-rose-400 italic">Hình minh họa 9 mảnh ghép</p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-163-4" onclick="window.check_163_4()" class="w-20 h-20 bg-[#ff7b29] text-white rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>
    `,

    quizPool: [
        { question: "Diện tích sân bóng rổ dài 28m, rộng 15m là:", options: ["420 m²", "43 m²", "86 m²", "210 m²"], answer: 0 },
        { question: "Chu vi sân bóng rổ 28m x 15m là:", options: ["86 m", "420 m", "43 m", "172 m"], answer: 0 },
        { question: "Chu vi vòng tròn giữa sân đường kính 3,6m là:", options: ["11,304 m", "5,652 m", "22,608 m", "3,14 m"], answer: 0 },
        { question: "Diện tích vòng tròn giữa sân đường kính 3,6m là:", options: ["10,1736 m²", "11,304 m²", "5,0868 m²", "40,6944 m²"], answer: 0 },
        { question: "Bìa 40x40 cm cắt 4 góc 8cm. Diện tích ban đầu là:", options: ["1600 cm²", "400 cm²", "800 cm²", "160 cm²"], answer: 0 },
        { question: "Diện tích 4 hình vuông góc 8x8 cm là:", options: ["256 cm²", "64 cm²", "128 cm²", "32 cm²"], answer: 0 },
        { question: "Diện tích miếng bìa làm hộp (40x40 trừ 4 góc 8x8) là:", options: ["1344 cm²", "1536 cm²", "1472 cm²", "1200 cm²"], answer: 0 },
        { question: "Hộp từ bìa 40x40 cắt góc 8cm có chiều cao là:", options: ["8 cm", "40 cm", "24 cm", "16 cm"], answer: 0 },
        { question: "Hộp từ bìa 40x40 cắt góc 8cm có cạnh đáy là:", options: ["24 cm", "32 cm", "16 cm", "8 cm"], answer: 0 },
        { question: "Diện tích hình thang đáy 40m, 60m; cao 40m là:", options: ["2000 m²", "4000 m²", "1000 m²", "2400 m²"], answer: 0 },
        { question: "Tấm kim loại 9 miếng 30x20 cm. Diện tích là:", options: ["5400 cm²", "600 cm²", "4500 cm²", "1800 cm²"], answer: 0 },
        { question: "Một mảnh vườn hcn có dài 25m, rộng 18m. S là:", options: ["450 m²", "86 m²", "43 m²", "500 m²"], answer: 0 },
        { question: "S hình tam giác có đáy 15dm, cao 12dm là:", options: ["90 dm²", "180 dm²", "27 dm²", "54 dm²"], answer: 0 },
        { question: "Tính 3/5 của 500m²:", options: ["300 m²", "200 m²", "150 m²", "450 m²"], answer: 0 },
        { question: "S hình thang có đáy 4m, 6m; cao 5m là:", options: ["25 m²", "50 m²", "10 m²", "15 m²"], answer: 0 },
        { question: "Đường kính 1,2m. Diện tích hình tròn là:", options: ["1,1304 m²", "3,768 m²", "4,5216 m²", "0,5652 m²"], answer: 0 },
        { question: "Cửa sổ hình tròn bán kính 0,5m có diện tích là:", options: ["0,785 m²", "3,14 m²", "1,57 m²", "0,3925 m²"], answer: 0 },
        { question: "Tỉ số diện tích 2 hình vuông cạnh 2cm và 4cm là:", options: ["1/4", "1/2", "1/8", "1/16"], answer: 0 },
        { question: "S hình tam giác vuông có 2 cạnh góc vuông 6cm và 8cm là:", options: ["24 cm²", "48 cm²", "14 cm²", "7 cm²"], answer: 0 },
        { question: "Một mặt bàn hình tròn đường kính 1m. S mặt bàn là:", options: ["0,785 m²", "3,14 m²", "1,57 m²", "2,355 m²"], answer: 0 },
        { question: "Hcn có dài 12cm, rộng bằng 2/3 dài. S là:", options: ["96 cm²", "144 cm²", "20 cm²", "40 cm²"], answer: 0 },
        { question: "S hình vuông là 100 cm². Chu vi là:", options: ["40 cm", "20 cm", "25 cm", "10 cm"], answer: 0 },
        { question: "Tam giác có đáy 20m, S là 150m². Chiều cao là:", options: ["15 m", "30 m", "7,5 m", "10 m"], answer: 0 },
        { question: "Hình thang có S=60cm², cao=5cm. Tổng 2 đáy là:", options: ["24 cm", "12 cm", "15 cm", "30 cm"], answer: 0 },
        { question: "Chu vi hình tròn 6,28cm. Diện tích là:", options: ["3,14 cm²", "1,57 cm²", "6,28 cm²", "12,56 cm²"], answer: 0 },
        { question: "Một hình thoi có 2 đường chéo 10cm và 12cm. S là:", options: ["60 cm²", "120 cm²", "22 cm²", "44 cm²"], answer: 0 },
        { question: "1 km² bằng bao nhiêu ha?", options: ["100", "10", "1000", "10 000"], answer: 0 }
    ]
};

// --- Logic Functions ---
window.check_163_1 = () => {
    const v = (id) => document.getElementById('163-1-' + id).value.trim().replace(',', '.');
    let score = 0;
    if (v('1') === '86') score++;
    if (v('2') === '420') score++;
    if (v('3') === '11.304') score++;
    if (v('4') === '10.1736') score++;

    const total = 4;
    const isCorrect = score === total;
    const rightAnswer = "a) P=86m, S=420m2; b) C=11,304m, S=10,1736m2";
    const studentAnswer = `a) P=${v('1')}, S=${v('2')}; b) C=${v('3')}, S=${v('4')}`;
    const guidance = "Em hãy nhớ: Chu vi sân = (dài + rộng) x 2; Diện tích sân = dài x rộng. Chu vi hình tròn = d x 3,14; Diện tích hình tròn = r x r x 3,14 (với r = d : 2).";
    const solution = `
        <div class="space-y-4">
            <p class="font-bold text-green-700">Chính xác! Em đã giải quyết trọn vẹn bài toán sân bóng rổ. 🏀</p>
            <div class="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                <p><b>Lời giải chi tiết:</b></p>
                <p>a) Sân bóng rổ:</p>
                <p>• Chu vi: (28 + 15) &times; 2 = <b>86</b> (m).</p>
                <p>• Diện tích: 28 &times; 15 = <b>420</b> (m²).</p>
                <p>b) Vòng tròn giữa sân:</p>
                <p>• Chu vi: 3,6 &times; 3,14 = <b>11,304</b> (m).</p>
                <p>• Bán kính: 3,6 : 2 = 1,8 (m).</p>
                <p>• Diện tích: 1,8 &times; 1,8 &times; 3,14 = <b>10,1736</b> (m²).</p>
            </div>
        </div>
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Sân bóng rổ", Math.round(score / total * 100), "btn-check-163-1", 0, total, score);
};

window.check_163_2 = () => {
    const a = document.getElementById('163-2-1').value.trim();
    let score = 0;
    if (a === '1344') score++;

    const total = 1;
    const isCorrect = score === total;
    const rightAnswer = "1344 cm²";
    const studentAnswer = `${a} cm²`;
    const guidance = "Diện tích miếng bìa dùng làm hộp bằng diện tích miếng bìa hình vuông ban đầu trừ đi diện tích của 4 hình vuông nhỏ ở 4 góc.";
    const solution = `
        <div class="space-y-4">
            <p class="font-bold text-green-700">Rất tốt! Em đã tính toán phần diện tích bị cắt bỏ rất chính xác. 📦</p>
            <div class="bg-orange-50 p-4 rounded-xl border-2 border-orange-200 text-left">
                <p><b>Lời giải chi tiết:</b></p>
                <p>1. Diện tích miếng bìa ban đầu là: 40 &times; 40 = 1600 (cm²).</p>
                <p>2. Diện tích của 4 hình vuông nhỏ là: 4 &times; (8 &times; 8) = 256 (cm²).</p>
                <p>3. Diện tích miếng bìa dùng làm hộp là: 1600 - 256 = <b>1344</b> (cm²).</p>
                <p>Đáp số: 1344 cm².</p>
            </div>
        </div>
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Gấp hộp", isCorrect ? 100 : 0, "btn-check-163-2", 0, 1, isCorrect ? 1 : 0);
};

window.check_163_3 = () => {
    const val = document.getElementById('163-3-1').value.trim();
    const isCorrect = val === '2000';
    const rightAnswer = "2000 m²";
    const studentAnswer = val + " m²";
    const guidance = "Em hãy tính toán theo các bước:<br>1. Tìm độ dài đáy lớn bằng cách lấy độ dài đáy bé nhân với tỉ số tương ứng.<br>2. Áp dụng công thức tính diện tích hình thang: lấy tổng độ dài hai đáy nhân với chiều cao rồi chia cho 2 nhé!";
    const solution = `
        <div class="space-y-4">
            <p class="font-bold text-green-700">Chính xác! Em đã tính toán diện tích mảnh đất hình thang rất giỏi. 📐</p>
            <div class="bg-green-50 p-4 rounded-xl border-2 border-green-200 text-left">
                <p><b>Lời giải chi tiết:</b></p>
                <p>1. Độ dài đáy lớn của mảnh đất là: 40 &times; 3/2 = 60 (m).</p>
                <p>2. Diện tích mảnh đất hình thang là: (40 + 60) &times; 40 : 2 = <b>2000</b> (m²).</p>
                <p>Đáp số: 2000 m².</p>
            </div>
        </div>
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Mảnh đất hình thang", isCorrect ? 100 : 0, "btn-check-163-3", 0, 1, isCorrect ? 1 : 0);
};

window.check_163_4 = () => {
    const p = document.getElementById('163-4-1').value.trim();
    const s = document.getElementById('163-4-2').value.trim();
    let score = 0;
    // Tấm kim loại ghép từ 9 miếng 30x20. 
    // Thường ghép 3x3 để thành hình vuông 90x60 hoặc các kiểu khác.
    // Theo SGK Trang 116: 9 miếng 30x20 ghép lại.
    // Nếu ghép thành hình chữ nhật lớn: Area = 9 * (30*20) = 5400.
    // Chu vi tùy cách ghép. Theo Loigiaihay: Ghép thành HCN 90x60 -> P = (90+60)*2 = 300.
    if (p === '300') score++;
    if (s === '5400') score++;

    const total = 2;
    const isCorrect = score === total;
    const rightAnswer = "P = 300 cm, S = 5400 cm²";
    const studentAnswer = `P = ${p}, S = ${s}`;
    const guidance = "Em hãy tính diện tích của một miếng nhỏ rồi nhân với số lượng miếng để tìm diện tích tấm kim loại. Để tính chu vi, em hãy dựa vào cách ghép các hình vuông để xác định chiều dài và chiều rộng của hình chữ nhật mới tạo thành nhé!";
    const solution = `
        <div class="space-y-4">
            <p class="font-bold text-green-700">Tuyệt vời! Em đã giải quyết bài toán ghép hình rất tốt. 🏆</p>
            <div class="bg-rose-50 p-4 rounded-xl border-2 border-rose-200 text-left">
                <p><b>Lời giải chi tiết:</b></p>
                <p>1. Diện tích một hình chữ nhật nhỏ là: 30 &times; 20 = 600 (cm²).</p>
                <p>2. Diện tích tấm kim loại (9 miếng) là: 600 &times; 9 = <b>5400</b> (cm²).</p>
                <p>3. Khi ghép 3 hàng, mỗi hàng 3 miếng (theo chiều dài) thì cạnh tấm lớn là 90cm (30x3) và 60cm (20x3).</p>
                <p>4. Chu vi tấm kim loại là: (90 + 60) &times; 2 = <b>300</b> (cm).</p>
            </div>
        </div>
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Ghép hình", Math.round(score / total * 100), "btn-check-163-4", 0, total, score);
};

window.lesson163 = lesson163;

