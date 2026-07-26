export const lesson175 = {
    id: 175,
    title: "BÀI 76: ÔN TẬP CHUNG - TIẾT 4",
    page: "Trang 133-134",
    content: `<div class="flex flex-col gap-4 text-2xl md:text-3xl">
        <p>Trong tiết học này, chúng ta sẽ ôn tập về:</p>
        <ul class="list-disc ml-8">
            <li>Đọc và phân tích số liệu từ bảng thống kê và biểu đồ (cột, quạt tròn).</li>
            <li>Giải toán về diện tích, thể tích hình hộp chữ nhật.</li>
            <li>Giải toán về chuyển động đều và tỉ lệ thời gian.</li>
            <li>Bài toán về mật độ dân số.</li>
        </ul>
    </div>`,
    practice: `<div class="flex flex-col gap-12">
        <!-- Bài 1 -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border-2 border-blue-100">
            <h3 class="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center gap-3">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">1</span>
                Dưới đây là bảng thống kê số huy chương của 4 môn thi đấu của Đoàn thể thao Việt Nam tại SEA Games 31:
            </h3>
            
            <div class="overflow-x-auto mb-8">
                <table class="w-full border-collapse border-2 border-blue-200 text-xl md:text-2xl">
                    <thead>
                        <tr class="bg-blue-100">
                            <th class="border-2 border-blue-200 p-3 text-center">Môn thi đấu</th>
                            <th class="border-2 border-blue-200 p-3 text-center">HCV</th>
                            <th class="border-2 border-blue-200 p-3 text-center">HCB</th>
                            <th class="border-2 border-blue-200 p-3 text-center">HCĐ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-blue-50 transition-colors">
                            <td class="border-2 border-blue-200 p-3 text-center font-bold">Vật</td>
                            <td class="border-2 border-blue-200 p-3 text-center text-red-600 font-bold">17</td>
                            <td class="border-2 border-blue-200 p-3 text-center">1</td>
                            <td class="border-2 border-blue-200 p-3 text-center">0</td>
                        </tr>
                        <tr class="hover:bg-blue-50 transition-colors">
                            <td class="border-2 border-blue-200 p-3 text-center font-bold">Bơi</td>
                            <td class="border-2 border-blue-200 p-3 text-center text-red-600 font-bold">11</td>
                            <td class="border-2 border-blue-200 p-3 text-center">11</td>
                            <td class="border-2 border-blue-200 p-3 text-center">3</td>
                        </tr>
                        <tr class="hover:bg-blue-50 transition-colors">
                            <td class="border-2 border-blue-200 p-3 text-center font-bold">Lặn</td>
                            <td class="border-2 border-blue-200 p-3 text-center text-red-600 font-bold">10</td>
                            <td class="border-2 border-blue-200 p-3 text-center">5</td>
                            <td class="border-2 border-blue-200 p-3 text-center">3</td>
                        </tr>
                        <tr class="hover:bg-blue-50 transition-colors">
                            <td class="border-2 border-blue-200 p-3 text-center font-bold">Wushu</td>
                            <td class="border-2 border-blue-200 p-3 text-center text-red-600 font-bold">10</td>
                            <td class="border-2 border-blue-200 p-3 text-center">3</td>
                            <td class="border-2 border-blue-200 p-3 text-center">7</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Phần a -->
                <div class="space-y-6">
                    <p class="text-2xl md:text-3xl font-semibold border-l-4 border-blue-500 pl-4">a) Quan sát biểu đồ cột và trả lời:</p>
                    <div class="flex flex-col items-center bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <svg width="320" height="240" viewBox="0 0 320 240" class="max-w-full drop-shadow-sm">
                            <line x1="40" y1="200" x2="300" y2="200" stroke="#475569" stroke-width="2"/>
                            <line x1="40" y1="200" x2="40" y2="20" stroke="#475569" stroke-width="2"/>
                            <line x1="35" y1="160" x2="40" y2="160" stroke="#475569"/>
                            <line x1="35" y1="120" x2="40" y2="120" stroke="#475569"/>
                            <line x1="35" y1="80" x2="40" y2="80" stroke="#475569"/>
                            <line x1="35" y1="40" x2="40" y2="40" stroke="#475569"/>
                            <text x="15" y="165" font-size="12" fill="#475569">4</text>
                            <text x="15" y="125" font-size="12" fill="#475569">8</text>
                            <text x="10" y="85" font-size="12" fill="#475569">12</text>
                            <text x="10" y="45" font-size="12" fill="#475569">16</text>
                            <text x="10" y="15" font-size="12" fill="#475569" font-weight="bold">(HCV)</text>
                            <rect x="65" y="30" width="20" height="170" fill="#ef4444" rx="2"/>
                            <text x="60" y="215" font-size="12" fill="#1e293b" font-weight="bold">Vật</text>
                            <rect x="125" y="90" width="20" height="110" fill="#3b82f6" rx="2"/>
                            <text x="120" y="215" font-size="12" fill="#1e293b" font-weight="bold">Bơi</text>
                            <rect x="185" y="100" width="20" height="100" fill="#10b981" rx="2"/>
                            <text x="180" y="215" font-size="12" fill="#1e293b" font-weight="bold">Lặn</text>
                            <rect x="245" y="100" width="20" height="100" fill="#f59e0b" rx="2"/>
                            <text x="235" y="215" font-size="12" fill="#1e293b" font-weight="bold">Wushu</text>
                        </svg>
                        <p class="text-sm text-gray-500 mt-2 font-medium">Biểu đồ số HCV của 4 môn thi đấu</p>
                    </div>
                    <div class="space-y-4 text-2xl md:text-3xl">
                        <div class="flex flex-col gap-2">
                            <span class="text-xl md:text-2xl text-gray-700">- Môn thi đấu nào có nhiều HCV nhất?</span>
                            <input type="text" id="ans_175_1a_1" class="border-2 border-blue-200 rounded-lg p-2 outline-none focus:border-blue-500 transition-all text-center" placeholder="Nhập tên môn">
                        </div>
                        <div class="flex flex-col gap-2">
                            <span class="text-xl md:text-2xl text-gray-700">- Hai môn nào có số HCV bằng nhau?</span>
                            <div class="flex items-center gap-2">
                                <input type="text" id="ans_175_1a_2x" class="border-2 border-blue-200 rounded-lg p-2 outline-none focus:border-blue-500 transition-all text-center flex-1" placeholder="Môn 1">
                                <span>và</span>
                                <input type="text" id="ans_175_1a_2y" class="border-2 border-blue-200 rounded-lg p-2 outline-none focus:border-blue-500 transition-all text-center flex-1" placeholder="Môn 2">
                            </div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <span class="text-xl md:text-2xl text-gray-700">- Trung bình mỗi môn đó có bao nhiêu HCV?</span>
                            <div class="flex items-center gap-2">
                                <input type="number" id="ans_175_1a_3" class="border-2 border-blue-200 rounded-lg p-2 outline-none focus:border-blue-500 transition-all text-center w-32" placeholder="?">
                                <span>huy chương.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Phần b -->
                <div class="space-y-6">
                    <p class="text-2xl md:text-3xl font-semibold border-l-4 border-orange-500 pl-4">b) Quan sát biểu đồ hình quạt môn Wushu:</p>
                    <div class="flex flex-col items-center bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <svg width="240" height="240" viewBox="0 0 200 200" class="max-w-full drop-shadow-sm">
                            <path d="M 100 100 L 100 20 A 80 80 0 0 1 100 180 Z" fill="#ef4444" />
                            <path d="M 100 100 L 100 180 A 80 80 0 0 1 35.3 147 Z" fill="#3b82f6" />
                            <path d="M 100 100 L 35.3 147 A 80 80 0 0 1 100 20 Z" fill="#10b981" />
                            <circle cx="100" cy="100" r="80" fill="none" stroke="#475569" stroke-width="1"/>
                            <text x="110" y="105" font-size="12" fill="white" font-weight="bold">HCV 50%</text>
                            <text x="40" y="165" font-size="10" fill="#3b82f6" font-weight="bold">HCB 15%</text>
                            <text x="40" y="60" font-size="10" fill="#10b981" font-weight="bold">HCĐ 35%</text>
                        </svg>
                        <p class="text-sm text-gray-500 mt-2 font-medium">Tỉ lệ huy chương môn Wushu</p>
                    </div>
                    <div class="space-y-6 text-2xl md:text-3xl">
                        <div class="flex flex-col gap-3">
                            <p class="text-xl md:text-2xl text-gray-700">Số lượng HCV chiếm bao nhiêu phần trăm tổng số huy chương của môn Wushu?</p>
                            <div class="flex items-center gap-2">
                                <input type="number" id="ans_175_1b_1" class="border-2 border-blue-200 rounded-lg p-2 outline-none focus:border-blue-500 transition-all text-center w-32" placeholder="?">
                                <span>%</span>
                            </div>
                        </div>
                        <div class="flex flex-col gap-3">
                            <p class="text-xl md:text-2xl text-gray-700">Tỉ lệ HCV so với tổng tỉ lệ HCB và HCĐ như thế nào?</p>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <button onclick="selectMCQ(this, 'ans_175_1b_2', 'Lon hon')" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">Lớn hơn</button>
                                <button onclick="selectMCQ(this, 'ans_175_1b_2', 'Nho hon')" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">Nhỏ hơn</button>
                                <button onclick="selectMCQ(this, 'ans_175_1b_2', 'Bang nhau')" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">Bằng nhau</button>
                            </div>
                            <input type="hidden" id="ans_175_1b_2">
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center mt-8">
                <button id="lesson175_b1_btn" onclick="LessonMath.checkExercise(175, 1)" class="px-10 py-4 bg-blue-600 text-white rounded-2xl text-2xl md:text-3xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Kiểm tra kết quả bài 1</button>
            </div>
        </div>

        <!-- Bài 2 -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border-2 border-blue-100">
            <h3 class="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center gap-3">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">2</span>
                Một bể cá dạng hình hộp chữ nhật có chu vi đáy là 320 cm, chiều rộng bằng 3/5 chiều dài, chiều cao bể là 50 cm.
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-2xl md:text-3xl">
                <div class="bg-blue-50 p-6 rounded-2xl shadow-inner border border-blue-100 space-y-4">
                    <p class="font-bold text-blue-800">a) Tìm chiều dài và chiều rộng đáy bể:</p>
                    <div class="space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="w-32">Chiều dài:</span>
                            <input type="number" id="ans_175_2a_1" class="flex-1 p-2 border-2 border-blue-200 rounded-xl outline-none focus:border-blue-500 text-center" placeholder="?">
                            <span>cm</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="w-32">Chiều rộng:</span>
                            <input type="number" id="ans_175_2a_2" class="flex-1 p-2 border-2 border-blue-200 rounded-xl outline-none focus:border-blue-500 text-center" placeholder="?">
                            <span>cm</span>
                        </div>
                    </div>
                </div>
                <div class="bg-green-50 p-6 rounded-2xl shadow-inner border border-green-100 space-y-4">
                    <p class="font-bold text-green-800">b) Mức nước cao 40 cm chiếm bao nhiêu phần trăm thể tích bể?</p>
                    <div class="flex items-center gap-3 h-full">
                        <span class="w-32">Đáp số:</span>
                        <input type="number" id="ans_175_2b" class="flex-1 p-2 border-2 border-green-200 rounded-xl outline-none focus:border-green-500 text-center" placeholder="?">
                        <span>%</span>
                    </div>
                </div>
            </div>
            <div class="flex justify-center mt-8">
                <button id="lesson175_b2_btn" onclick="LessonMath.checkExercise(175, 2)" class="px-10 py-4 bg-blue-600 text-white rounded-xl text-2xl md:text-3xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Kiểm tra kết quả bài 2</button>
            </div>
        </div>

        <!-- Bài 3 -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border-2 border-blue-100">
            <h3 class="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center gap-3">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">3</span>
                Việt và Mai xuất phát đi đến khu du lịch B. Việt đi buýt đến B lúc 9 giờ. Mai đi taxi đến B lúc 8 giờ 15 phút. Biết thời gian taxi bằng 2/3 thời gian buýt.
            </h3>
            <div class="space-y-8 text-2xl md:text-3xl">
                <div class="bg-orange-50 p-6 rounded-2xl border border-orange-200 space-y-6">
                    <p class="font-bold text-orange-800">a) Tính thời gian mỗi xe đi trên quãng đường AB:</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="flex items-center gap-2">
                            <span class="w-32">Xe buýt:</span>
                            <div class="flex items-center gap-1">
                                <input type="number" id="ans_175_3a_1h" class="w-20 p-2 border-2 border-orange-200 rounded-xl text-center outline-none focus:border-orange-500" placeholder="?">
                                <span class="text-xl">giờ</span>
                                <input type="number" id="ans_175_3a_1m" class="w-20 p-2 border-2 border-orange-200 rounded-xl text-center outline-none focus:border-orange-500" placeholder="?">
                                <span class="text-xl">phút</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="w-32">Taxi:</span>
                            <div class="flex items-center gap-1">
                                <input type="number" id="ans_175_3a_2h" class="w-20 p-2 border-2 border-orange-200 rounded-xl text-center outline-none focus:border-orange-500" placeholder="?">
                                <span class="text-xl">giờ</span>
                                <input type="number" id="ans_175_3a_2m" class="w-20 p-2 border-2 border-orange-200 rounded-xl text-center outline-none focus:border-orange-500" placeholder="?">
                                <span class="text-xl">phút</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-blue-50 p-6 rounded-2xl border border-blue-200 space-y-4">
                    <p class="font-bold text-blue-800">b) Tính quãng đường AB, biết vận tốc taxi là 60 km/giờ:</p>
                    <div class="flex items-center gap-3">
                        <span>Đáp số:</span>
                        <input type="number" id="ans_175_3b" class="w-40 p-2 border-2 border-blue-200 rounded-xl text-center outline-none focus:border-blue-500" placeholder="?">
                        <span>km</span>
                    </div>
                </div>
            </div>
            <div class="flex justify-center mt-8">
                <button id="lesson175_b3_btn" onclick="LessonMath.checkExercise(175, 3)" class="px-10 py-4 bg-blue-600 text-white rounded-xl text-2xl md:text-3xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Kiểm tra kết quả bài 3</button>
            </div>
        </div>

        <!-- Bài 4 -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border-2 border-blue-100">
            <h3 class="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center gap-3">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">4</span>
                Một tỉnh miền núi có diện tích khoảng 10 000 km<sup>2</sup>, mật độ dân số khoảng 80 người/km<sup>2</sup>. Hỏi nếu mật độ dân số tăng lên 90 người/km<sup>2</sup> thì số dân tăng thêm bao nhiêu?
            </h3>
            <div class="flex flex-col items-center gap-6 text-2xl md:text-3xl py-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                <div class="flex items-center gap-4 flex-wrap justify-center">
                    <span>Số dân tăng thêm là:</span>
                    <input type="number" id="ans_175_4" class="w-60 p-3 border-2 border-blue-500 rounded-2xl text-center text-3xl md:text-4xl font-bold outline-none shadow-md" placeholder="?">
                    <span>người</span>
                </div>
            </div>
            <div class="flex justify-center mt-8">
                <button id="lesson175_b4_btn" onclick="LessonMath.checkExercise(175, 4)" class="px-10 py-4 bg-blue-600 text-white rounded-xl text-2xl md:text-3xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Kiểm tra kết quả bài 4</button>
            </div>
        </div>
    </div>`
};

// Validation Logic
window.check_175_1 = () => {
    const a1 = document.getElementById('ans_175_1a_1').value.trim().toLowerCase();
    const a2x = document.getElementById('ans_175_1a_2x').value.trim().toLowerCase();
    const a2y = document.getElementById('ans_175_1a_2y').value.trim().toLowerCase();
    const a3 = document.getElementById('ans_175_1a_3').value;
    const b1 = document.getElementById('ans_175_1b_1').value;
    const b2 = document.getElementById('ans_175_1b_2').value;

    let score = 0;
    if (a1 === "vật") score++;
    if ((a2x === "wushu" && a2y === "lặn") || (a2x === "lặn" && a2y === "wushu")) score++;
    if (parseInt(a3) === 12) score++;
    if (parseInt(b1) === 50) score++;
    if (b2 === "Bang nhau") score++;

    const isCorrect = score === 5;
    const rightAnswer = "a) Vật; Lặn và Wushu; 12. b) 50%; Bằng nhau.";
    const studentAnswer = `a) ${a1}; ${a2x}-${a2y}; ${a3}. b) ${b1}%; ${b2}.`;
    const guidance = "Em hãy quan sát kỹ số liệu trên bảng và biểu đồ. Trung bình cộng = Tổng các số chia cho số các số hạng.";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        - a) Quan sát bảng: Môn <b>Vật</b> có 17 HCV (nhiều nhất). Hai môn <b>Wushu</b> và <b>Lặn</b> đều có 10 HCV.<br>
        - Trung bình số HCV: (17 + 11 + 10 + 10) : 4 = 48 : 4 = <b>12</b> (huy chương).<br>
        - b) Biểu đồ quạt môn Wushu cho thấy HCV chiếm <b>50%</b>.<br>
        - Tổng tỉ lệ HCB và HCĐ là: 15% + 35% = 50%. Vậy tỉ lệ HCV <b>bằng nhau</b> so với tổng HCB và HCĐ.<br>
        Kỹ năng phân tích biểu đồ của em rất tốt!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 1. Phân tích bảng số liệu và biểu đồ", Math.round(score / 5 * 100), "lesson175_b1_btn", 0, 5, score);
    }
};

window.check_175_2 = () => {
    const a1 = document.getElementById('ans_175_2a_1').value;
    const a2 = document.getElementById('ans_175_2a_2').value;
    const b = document.getElementById('ans_175_2b').value;

    let score = 0;
    if (parseInt(a1) === 100) score++;
    if (parseInt(a2) === 60) score++;
    if (parseInt(b) === 80) score++;

    const isCorrect = score === 3;
    const rightAnswer = "a) Chiều dài 100 cm, Chiều rộng 60 cm. b) 80%.";
    const studentAnswer = `a) ${a1}, ${a2}. b) ${b}%.`;
    const guidance = "Em hãy tính tổng chiều dài và chiều rộng (nửa chu vi), sau đó giải bài toán Tìm hai số khi biết Tổng và Tỉ số nhé.";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        a) Nửa chu vi đáy là: 320 : 2 = 160 (cm).<br>
        Tổng số phần bằng nhau: 3 + 5 = 8 (phần).<br>
        Chiều rộng là: 160 : 8 × 3 = <b>60</b> (cm).<br>
        Chiều dài là: 160 – 60 = <b>100</b> (cm).<br>
        b) Thể tích bể là: 100 × 60 × 50 = 300 000 (cm³).<br>
        Thể tích nước là: 100 × 60 × 40 = 240 000 (cm³).<br>
        Tỉ số phần trăm: 240 000 : 300 000 = 0,8 = <b>80%</b>.<br>
        Em giải bài toán hình học kết hợp tỉ số phần trăm rất chuẩn!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 2. Diện tích và Thể tích bể cá", Math.round(score / 3 * 100), "lesson175_b2_btn", 0, 3, score);
    }
};

window.check_175_3 = () => {
    const h1 = document.getElementById('ans_175_3a_1h').value;
    const m1 = document.getElementById('ans_175_3a_1m').value;
    const h2 = document.getElementById('ans_175_3a_2h').value;
    const m2 = document.getElementById('ans_175_3a_2m').value;
    const b = document.getElementById('ans_175_3b').value;

    let score = 0;
    if (parseInt(h1) === 2 && parseInt(m1) === 15) score++;
    if (parseInt(h2) === 1 && parseInt(m2) === 30) score++;
    if (parseInt(b) === 90) score++;

    const isCorrect = score === 3;
    const rightAnswer = "a) Buýt: 2 giờ 15 phút, Taxi: 1 giờ 30 phút. b) 90 km.";
    const studentAnswer = `a) Buýt ${h1}h${m1}p, Taxi ${h2}h${m2}p. b) ${b} km.`;
    const guidance = "Đây là bài toán Tìm hai số khi biết Hiệu và Tỉ số. Em hãy xác định hiệu số phần bằng nhau và tìm thời gian đi của mỗi xe dựa trên hiệu thời gian nhé!";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        a) Mai đến trước Việt: 9 giờ – 8 giờ 15 phút = 45 phút.<br>
        Coi thời gian xe buýt là 3 phần, taxi là 2 phần. Hiệu là 45 phút.<br>
        Thời gian xe buýt đi: 45 : (3 – 2) × 3 = 135 phút = <b>2 giờ 15 phút</b>.<br>
        Thời gian taxi đi: 135 – 45 = 90 phút = <b>1 giờ 30 phút</b>.<br>
        b) Quãng đường AB là: 60 × 1,5 = <b>90</b> (km). (Vì 1 giờ 30 phút = 1,5 giờ).<br>
        Lập luận của em rất logic và chính xác!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 3. Bài toán về Chuyển động", Math.round(score / 3 * 100), "lesson175_b3_btn", 0, 3, score);
    }
};

window.check_175_4 = () => {
    const val = document.getElementById('ans_175_4').value;

    // Tăng mật độ từ 80 lên 90 -> tăng 10 người/km2. Dien tich 10.000 km2 -> Tăng 10 * 10.000 = 100.000 người
    let score = 0;
    if (parseInt(val) === 100000) score = 100;

    const isCorrect = score === 100;
    const rightAnswer = "100 000 người";
    const studentAnswer = `${val} người`;
    const guidance = "Em hãy tính hiệu mật độ dân số tăng lên, sau đó nhân với diện tích của tỉnh đó.";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        Mật độ dân số tăng thêm số người trên 1 km² là:<br>
        90 – 80 = 10 (người/km²).<br>
        Số dân tăng thêm của cả tỉnh là:<br>
        10 × 10 000 = <b>100 000</b> (người).<br>
        Đáp số: 100 000 người.<br>
        Chúc mừng em đã hoàn thành bài toán mật độ dân số!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 4. Mật độ dân số", score, "lesson175_b4_btn", 0, 1, score === 100 ? 1 : 0);
    }
};

// Global helper for MCQ
if (!window.selectMCQ) {
    window.selectMCQ = (btn, inputId, value) => {
        const parent = btn.parentElement;
        const buttons = parent.querySelectorAll('button');
        buttons.forEach(b => b.classList.remove('bg-blue-600', 'text-white', 'border-blue-600', 'shadow-md'));
        btn.classList.add('bg-blue-600', 'text-white', 'border-blue-600', 'shadow-md');
        document.getElementById(inputId).value = value;
    };
}
