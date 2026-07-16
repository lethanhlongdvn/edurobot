export const lesson169 = {
    period: "169",
    title: "BÀI 73: ÔN TẬP TOÁN CHUYỂN ĐỘNG ĐỀU (TIẾT 2)",
    topic: "Ôn tập chuyển động đều",
    week: "34",

    content: `
        <div class="space-y-6">
            <div class="bg-blue-50 p-8 rounded-[3rem] border-4 border-blue-200 shadow-2xl">
                <h3 class="text-3xl md:text-5xl font-black text-blue-700 mb-6 uppercase text-center tracking-tight">KIẾN THỨC NÂNG CAO</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="p-8 bg-white rounded-[2.5rem] shadow-xl border-t-8 border-blue-500">
                        <h4 class="text-2xl md:text-3xl font-black text-blue-600 mb-4 uppercase">Chuyển động dòng nước</h4>
                        <ul class="text-xl md:text-2xl space-y-4 text-gray-700 font-bold">
                            <li class="flex items-start gap-3">
                                <span class="text-blue-500">▶</span>
                                <span>Vận tốc xuôi dòng = V_thực + V_nước</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-blue-500">▶</span>
                                <span>Vận tốc ngược dòng = V_thực - V_nước</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-orange-500 font-black">!</span>
                                <span>V_thực = (V_xuôi + V_ngược) : 2</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-orange-500 font-black">!</span>
                                <span>V_nước = (V_xuôi - V_ngược) : 2</span>
                            </li>
                        </ul>
                    </div>
                    <div class="p-8 bg-white rounded-[2.5rem] shadow-xl border-t-8 border-orange-500">
                        <h4 class="text-2xl md:text-3xl font-black text-orange-600 mb-4 uppercase">Vật có chiều dài đáng kể</h4>
                        <ul class="text-xl md:text-2xl space-y-4 text-gray-700 font-bold">
                            <li class="flex items-start gap-3">
                                <span class="text-orange-500 font-black">★</span>
                                <span>Qua cái cây/cột điện: s = L_tàu</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-orange-500 font-black">★</span>
                                <span>Qua cầu/hầm: s = L_tàu + L_cầu</span>
                            </li>
                            <li class="flex items-start gap-3 text-rose-600">
                                <span>➜</span>
                                <span>Tàu đi quãng đường s trong thời gian t với vận tốc v.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="space-y-12 pb-10">
            <!-- Bài 1 -->
            <div id="lesson169_b1" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                    <p class="text-2xl md:text-4xl font-black text-blue-800 uppercase tracking-wide">Ai nhanh hơn?</p>
                </div>
                
                <p class="text-2xl md:text-3xl text-gray-700 leading-relaxed font-bold mb-8">
                    Anh Hòa đi với vận tốc <span class="text-blue-600">9 m/s</span>, anh Bình đi với vận tốc <span class="text-orange-600">36 km/h</span>. Như vậy:
                </p>

                <div class="grid grid-cols-1 gap-4">
                    <button onclick="window.check_169_1('A')" class="p-6 bg-blue-50 hover:bg-blue-100 rounded-3xl text-left text-xl md:text-2xl font-black text-blue-800 transition-all border-l-8 border-blue-300">
                        A. Anh Hòa đi nhanh hơn anh Bình.
                    </button>
                    <button onclick="window.check_169_1('B')" class="p-6 bg-orange-50 hover:bg-orange-100 rounded-3xl text-left text-xl md:text-2xl font-black text-orange-800 transition-all border-l-8 border-orange-300">
                        B. Anh Bình đi nhanh hơn anh Hòa.
                    </button>
                    <button onclick="window.check_169_1('C')" class="p-6 bg-green-50 hover:bg-green-100 rounded-3xl text-left text-xl md:text-2xl font-black text-green-800 transition-all border-l-8 border-green-300">
                        C. Hai anh đi với vận tốc như nhau.
                    </button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="lesson169_b2" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-green-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg rotate-2">2</div>
                    <p class="text-2xl md:text-4xl font-black text-green-800 uppercase tracking-wide">Quãng đường xe máy</p>
                </div>
                
                <div class="p-8 bg-green-50 rounded-[2.5rem] border-2 border-green-100">
                    <p class="text-2xl md:text-3xl text-gray-700 leading-relaxed font-bold mb-8">
                        Quãng đường từ nhà Việt đến trường dài <span class="text-green-700">1,75 km</span>. Việt đi bộ về nhà với vận tốc <span class="text-green-700">3 km/h</span>. Sau <span class="text-rose-600">12 phút</span>, Việt gặp bố đón và đi xe máy về nhà. 
                        <br><br>
                        Hỏi quãng đường Việt đi xe máy dài bao nhiêu km?
                    </p>
                    
                    <div class="flex items-center justify-center gap-6 bg-white p-8 rounded-[2rem] shadow-xl border-4 border-green-400">
                        <span class="text-xl md:text-3xl font-black text-gray-700 uppercase">ĐÁP SỐ:</span>
                        <div class="flex items-center gap-3">
                            <input id="169-2-1" type="text" class="w-40 h-20 text-center text-4xl md:text-5xl font-black border-4 border-green-500 rounded-2xl outline-none text-green-700 shadow-inner" placeholder="...">
                            <span class="text-2xl md:text-3xl font-black text-green-600">KM</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-169-2" onclick="window.check_169_2()" class="w-24 h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-4xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="lesson169_b3" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-orange-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-orange-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg -rotate-1">3</div>
                    <p class="text-2xl md:text-4xl font-black text-orange-800 uppercase tracking-wide">Giờ khởi hành</p>
                </div>
                
                <div class="p-8 bg-orange-50 rounded-[2.5rem] border-2 border-orange-100">
                    <p class="text-2xl md:text-3xl text-gray-700 leading-relaxed font-bold mb-8 text-center">
                        Quãng đường sông AB dài <span class="text-orange-700">80 km</span>. Một tàu thủy đi từ A đến B với vận tốc <span class="text-orange-700">32 km/h</span>. và cập bến B lúc <span class="text-rose-600">12 giờ 15 phút</span>. 
                        <br>
                        Hỏi tàu thủy khởi hành từ bến A lúc mấy giờ?
                    </p>
                    
                    <div class="flex flex-wrap items-center justify-center gap-6 bg-white p-8 rounded-[2rem] shadow-xl border-4 border-orange-400">
                        <div class="flex items-center gap-3">
                            <input id="169-3-h" type="text" class="w-28 h-20 text-center text-4xl md:text-5xl font-black border-4 border-orange-500 rounded-2xl outline-none text-orange-700 shadow-inner" placeholder="?">
                            <span class="text-2xl md:text-3xl font-black text-gray-500 uppercase">GIỜ</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <input id="169-3-m" type="text" class="w-28 h-20 text-center text-4xl md:text-5xl font-black border-4 border-orange-500 rounded-2xl outline-none text-orange-700 shadow-inner" placeholder="?">
                            <span class="text-2xl md:text-3xl font-black text-gray-500 uppercase">PHÚT</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-169-3" onclick="window.check_169_3()" class="w-24 h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-4xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>

            <!-- Bài 4 -->
            <div id="lesson169_b4" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-rose-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-rose-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                    <p class="text-2xl md:text-4xl font-black text-rose-800 uppercase tracking-wide">Chiều dài đoàn tàu</p>
                </div>
                
                <div class="p-8 bg-rose-50 rounded-[2.5rem] border-2 border-rose-100 flex flex-col gap-8">
                    <p class="text-2xl md:text-3xl text-gray-700 leading-relaxed font-bold">
                        Một đoàn tàu đi qua cầu Long Biên dài <span class="text-rose-700">2 290 m</span> với vận tốc <span class="text-rose-700">24,3 km/h</span>. Thời gian từ lúc đầu tàu vào cầu đến lúc toa cuối cùng ra khỏi cầu là <span class="text-blue-600">6 phút</span>. 
                        <br><br>
                        Hỏi đoàn tàu đó dài bao nhiêu mét?
                    </p>
                    
                    <div class="flex items-center justify-center gap-6 bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-rose-400">
                        <span class="text-xl md:text-3xl font-black text-gray-700 uppercase">CHIỀU DÀI TÀU:</span>
                        <div class="flex items-center gap-3">
                            <input id="169-4-1" type="text" class="w-48 h-24 text-center text-5xl md:text-6xl font-black border-4 border-rose-500 rounded-3xl outline-none text-rose-700 shadow-inner" placeholder="...">
                            <span class="text-3xl md:text-4xl font-black text-rose-600">M</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-169-4" onclick="window.check_169_4()" class="w-24 h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-4xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>
        </div>
    `,

    quizPool: [
        { question: "Vận tốc xuôi dòng 32km/h, vận tốc dòng nước 2km/h. Vận tốc thực là?", options: ["30 km/h", "34 km/h", "16 km/h", "28 km/h"], answer: 0 },
        { question: "Vận tốc thực 25km/h, vận tốc dòng nước 3km/h. Vận tốc ngược dòng là?", options: ["22 km/h", "28 km/h", "31 km/h", "19 km/h"], answer: 0 },
        { question: "Tàu dài 150m qua cây trong 10 giây. Vận tốc tàu là bao nhiêu m/s?", options: ["15 m/s", "10 m/s", "150 m/s", "1,5 m/s"], answer: 0 },
        { question: "Đổi 36 km/h sang đơn vị m/s:", options: ["10 m/s", "1 m/s", "360 m/s", "5 m/s"], answer: 0 },
        { question: "Việt đi bộ 3 km/h trong 12 phút được bao nhiêu km?", options: ["0,6 km", "3,6 km", "0,36 km", "0,5 km"], answer: 0 },
        { question: "80 km : 32 km/h bằng bao nhiêu giờ?", options: ["2,5 giờ", "2,4 giờ", "3 giờ", "2 giờ 15 phút"], answer: 0 },
        { question: "2,5 giờ đổi ra giờ và phút là:", options: ["2 giờ 30 phút", "2 giờ 50 phút", "2 giờ 5 phút", "2 giờ 15 phút"], answer: 0 },
        { question: "Tàu đi qua cầu 2290m trong 6 phút hết 2430m. Tàu dài:", options: ["140 m", "150 m", "120 m", "100 m"], answer: 0 },
        { question: "Vận tốc 24,3 km/h tương ứng bao nhiêu m/phút?", options: ["405 m/p", "40,5 m/p", "243 m/p", "450 m/p"], answer: 0 },
        { question: "Một người đi xe máy 15km trong 20 phút. Vận tốc là:", options: ["45 km/h", "40 km/h", "50 km/h", "30 km/h"], answer: 0 },
        { question: "Hai xe đi ngược chiều, v1=40, v2=50. Vận tốc gặp nhau là:", options: ["90 km/h", "10 km/h", "45 km/h", "2000 km/h"], answer: 0 },
        { question: "Vận tốc xuôi dòng v_x, ngược dòng v_ng. Vận tốc dòng nước là:", options: ["(v_x - v_ng) : 2", "(v_x + v_ng) : 2", "v_x - v_ng", "v_x + v_ng"], answer: 0 },
        { question: "Cano đi xuôi dòng 90km hết 3 giờ. Vận tốc dòng nước 4km/h. V_thực là:", options: ["26 km/h", "34 km/h", "30 km/h", "22 km/h"], answer: 0 },
        { question: "Đổi 12 m/s sang km/h:", options: ["43,2 km/h", "36 km/h", "40 km/h", "48 km/h"], answer: 0 },
        { question: "Đoàn tàu dài 200m qua hầm mất 2p với v=36km/h. Hầm dài:", options: ["1000 m", "800 m", "1200 m", "1400 m"], answer: 0 },
        { question: "Hai xe cách nhau 200km đi cùng chiều. v_sau=80, v_trước=60. Thời gian đuổi kịp:", options: ["10 giờ", "5 giờ", "4 giờ", "8 giờ"], answer: 0 },
        { question: "Vận tốc âm thanh 340m/s. Khoảng cách 1,7km âm thanh truyền mất:", options: ["5 giây", "50 giây", "10 giây", "100 giây"], answer: 0 },
        { question: "Mặt Trời cách Trái Đất 150 triệu km. Ánh sáng v=300.000km/s đi mất:", options: ["8 phút 20 giây", "10 phút", "5 phút", "15 phút"], answer: 0 },
        { question: "Kim giờ và kim phút lúc 3 giờ tạo góc bao nhiêu độ?", options: ["90 độ", "180 độ", "0 độ", "45 độ"], answer: 0 },
        { question: "Đổi 0,4 giờ ra phút:", options: ["24 phút", "15 phút", "20 phút", "40 phút"], answer: 0 },
        { question: "Vận tốc dòng nước ảnh hưởng như thế nào khi đi ngược dòng?", options: ["Làm giảm vận tốc", "Làm tăng vận tốc", "Không ảnh hưởng", "Làm đứng yên"], answer: 0 },
        { question: "Một người chạy vòng quanh hồ bán kính 100m (S=628m) với v=4m/s mất:", options: ["157 giây", "150 giây", "160 giây", "200 giây"], answer: 0 },
        { question: "Vận tốc máy bay 800km/h. Sau 45 phút bay được:", options: ["600 km", "500 km", "400 km", "700 km"], answer: 0 },
        { question: "Hai xe cùng xuất phát từ A và B cách nhau 240km, đi ngược chiều 1,5h với v1=65, v2=55. Khoảng cách 2 xe:", options: ["60 km", "80 km", "100 km", "120 km"], answer: 0 },
        { question: "Trong 10 phút người đi bộ được 1km. Vận tốc là:", options: ["6 km/h", "10 km/h", "5 km/h", "12 km/h"], answer: 0 }
    ]
};

// --- Logic Functions ---
window.check_169_1 = (choice) => {
    // 36 km/h = 10 m/s > 9 m/s => Bình nhanh hơn
    const isCorrect = choice === 'B';
    const rightAnswer = "B. Anh Bình nhanh hơn";
    const studentAnswer = choice === 'A' ? "A. Anh Hòa" : (choice === 'B' ? "B. Anh Bình" : "C. Hai anh như nhau");
    const guidance = "Em hãy đổi vận tốc của anh Bình từ km/h sang m/s (chia cho 3,6) để so sánh với vận tốc của anh Hòa nhé!";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        Đổi 36 km/h = 36 000 m : 3 600 giây = 10 m/s.<br>
        Vì 10 m/s > 9 m/s nên anh Bình đi nhanh hơn anh Hòa.<br>
        Đáp án đúng là: B. Anh Bình nhanh hơn.<br>
        Chúc mừng em đã chọn đúng!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 1. Ai nhanh hơn?", isCorrect ? 100 : 0, "lesson169_b1", 0, 1, isCorrect ? 1 : 0);
    }
};

window.check_169_2 = () => {
    const val = document.getElementById('169-2-1').value.trim().replace(',', '.');
    const isCorrect = val === '1.15';

    const rightAnswer = "1,15";
    const studentAnswer = val || "?";
    const guidance = "Em hãy tính quãng đường Việt đã đi bộ (vận tốc × thời gian), lưu ý đổi 12 phút ra giờ. Sau đó lấy tổng quãng đường trừ đi quãng đường đi bộ sẽ ra quãng đường đi xe máy.";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        Đổi 12 phút = 0,2 giờ.<br>
        Quãng đường Việt đi bộ là:<br>
        3 × 0,2 = 0,6 (km)<br>
        Quãng đường Việt đi xe máy là:<br>
        1,75 - 0,6 = 1,15 (km)<br>
        Đáp số: 1,15 km.<br>
        Em giải bài toán rất chính xác! Thủ khoa toán tương lai đây rồi.
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 2. Quãng đường xe máy", isCorrect ? 100 : 0, "btn-check-169-2", 0, 1, isCorrect ? 1 : 0);
    }
};

window.check_169_3 = () => {
    const h = document.getElementById('169-3-h').value.trim();
    const m = document.getElementById('169-3-m').value.trim();
    const isCorrect = h === '9' && m === '45';

    const rightAnswer = "9 giờ 45 phút";
    const studentAnswer = `${h || '?'} giờ ${m || '?'} phút`;
    const guidance = "Em hãy tính thời gian tàu thủy đi (Quãng đường : Vận tốc). Sau đó lấy thời gian cập bến trừ đi thời gian đi sẽ ra giờ khởi hành.";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        Thời gian tàu thủy đi từ A đến B là:<br>
        80 : 32 = 2,5 (giờ)<br>
        Đổi 2,5 giờ = 2 giờ 30 phút.<br>
        Tàu thủy khởi hành từ bến A lúc:<br>
        12 giờ 15 phút - 2 giờ 30 phút = 9 giờ 45 phút.<br>
        Đáp số: 9 giờ 45 phút.<br>
        Thật tuyệt vời! Kết quả hoàn toàn chính xác.
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 3. Giờ khởi hành", isCorrect ? 100 : 0, "btn-check-169-3", 0, 1, isCorrect ? 1 : 0);
    }
};

window.check_169_4 = () => {
    const val = document.getElementById('169-4-1').value.trim().replace(',', '.');
    const isCorrect = val === '140';

    const rightAnswer = "140";
    const studentAnswer = val || "?";
    const guidance = "Em hãy đổi vận tốc ra m/phút (24,3 × 1000 : 60). Tính quãng đường tàu đi được trong 6 phút. Chiều dài tàu sẽ bằng Quãng đường đó trừ đi chiều dài của cầu nhé!";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        Đổi 24,3 km/h = 24 300 m : 60 phút = 405 m/phút.<br>
        Quãng đường đoàn tàu đi được trong 6 phút là:<br>
        405 × 6 = 2 430 (m)<br>
        Chiều dài của đoàn tàu là:<br>
        2 430 - 2 290 = 140 (m)<br>
        Đáp số: 140 m.<br>
        Bài toán này khá khó nhưng em đã vượt qua rồi! Rất tốt.
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 4. Chiều dài tàu", isCorrect ? 100 : 0, "btn-check-169-4", 0, 1, isCorrect ? 1 : 0);
    }
};
