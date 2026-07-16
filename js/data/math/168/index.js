export const lesson168 = {
    period: "168",
    title: "BÀI 73: ÔN TẬP TOÁN CHUYỂN ĐỘNG ĐỀU (TIẾT 1)",
    topic: "Ôn tập chuyển động đều",
    week: "34",

    content: `
        <div class="space-y-6">
            <div class="bg-blue-50 p-8 rounded-[3rem] border-4 border-blue-200 shadow-2xl">
                <h3 class="text-3xl md:text-5xl font-black text-blue-700 mb-6 uppercase text-center tracking-tight">ÔN TẬP CHUYỂN ĐỘNG ĐỀU (TIẾT 1)</h3>
                <div class="space-y-4 text-xl md:text-3xl text-gray-800 leading-relaxed font-bold">
                    <p class="uppercase text-blue-600 border-b-4 border-blue-200 pb-2 text-center">Các công thức cơ bản</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div class="p-6 bg-white rounded-3xl shadow-xl border-t-8 border-blue-500 text-center">
                            <h4 class="font-black text-blue-600 text-2xl md:text-4xl mb-3">s = v x t</h4>
                            <p class="text-lg md:text-xl text-gray-500 uppercase">Quãng đường</p>
                        </div>
                        <div class="p-6 bg-white rounded-3xl shadow-xl border-t-8 border-orange-500 text-center">
                            <h4 class="font-black text-orange-600 text-2xl md:text-4xl mb-3">v = s : t</h4>
                            <p class="text-lg md:text-xl text-gray-500 uppercase">Vận tốc</p>
                        </div>
                        <div class="p-6 bg-white rounded-3xl shadow-xl border-t-8 border-green-500 text-center">
                            <h4 class="font-black text-green-600 text-2xl md:text-4xl mb-3">t = s : v</h4>
                            <p class="text-lg md:text-xl text-gray-500 uppercase">Thời gian</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="space-y-12 pb-10">
            <!-- Bài 1 -->
            <div id="lesson168_b1" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg rotate-3">1</div>
                    <p class="text-2xl md:text-4xl font-black text-blue-800 uppercase tracking-wide">Điền vào ô trống</p>
                </div>
                
                <div class="overflow-x-auto p-4 bg-blue-50 rounded-[3rem] border-2 border-blue-100">
                    <table class="w-full border-collapse bg-white rounded-3xl overflow-hidden shadow-xl">
                        <thead>
                            <tr class="bg-blue-500 text-white text-xl md:text-2xl">
                                <th class="p-6 border-2 border-blue-200 uppercase">v</th>
                                <th class="p-6 border-2 border-blue-200 uppercase">t</th>
                                <th class="p-6 border-2 border-blue-200 uppercase">s</th>
                            </tr>
                        </thead>
                        <tbody class="text-2xl md:text-3xl font-black text-gray-700">
                            <tr>
                                <td class="p-6 border-2 border-blue-100 text-center">32,5 km/giờ</td>
                                <td class="p-6 border-2 border-blue-100 text-center">4 giờ</td>
                                <td class="p-6 border-2 border-blue-100 text-center">
                                    <div class="flex items-center justify-center gap-2">
                                        <input id="168-1-1" type="text" class="w-32 h-14 text-center border-4 border-blue-400 rounded-xl outline-none" placeholder="?">
                                        <span class="text-xl text-gray-400 uppercase">km</span>
                                    </div>
                                </td>
                            </tr>
                            <tr class="bg-blue-50">
                                <td class="p-6 border-2 border-blue-100 text-center">210 m/phút</td>
                                <td class="p-6 border-2 border-blue-100 text-center">7 phút</td>
                                <td class="p-6 border-2 border-blue-100 text-center">
                                    <div class="flex items-center justify-center gap-2">
                                        <input id="168-1-2" type="text" class="w-32 h-14 text-center border-4 border-blue-400 rounded-xl outline-none" placeholder="?">
                                        <span class="text-xl text-gray-400 uppercase">m</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-6 border-2 border-blue-100 text-center">36 km/giờ</td>
                                <td class="p-6 border-2 border-blue-100 text-center">40 phút</td>
                                <td class="p-6 border-2 border-blue-100 text-center">
                                    <div class="flex items-center justify-center gap-2">
                                        <input id="168-1-3" type="text" class="w-32 h-14 text-center border-4 border-blue-400 rounded-xl outline-none" placeholder="?">
                                        <span class="text-xl text-gray-400 uppercase">km</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-168-1" onclick="window.check_168_1()" class="w-24 h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-4xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="lesson168_b2" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-orange-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-orange-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg -rotate-2">2</div>
                    <p class="text-2xl md:text-4xl font-black text-orange-800 uppercase tracking-wide">Quãng đường ô tô đi được</p>
                </div>
                
                <div class="p-8 bg-orange-50 rounded-[2.5rem] border-2 border-orange-100 flex flex-col md:flex-row gap-8 items-center">
                    <div class="flex-1 space-y-6">
                        <p class="text-2xl md:text-3xl text-gray-700 leading-relaxed font-bold">
                            Một ô tô đi từ Hà Nội lúc <span class="text-orange-600">6 giờ 15 phút</span> và đến Hải Phòng lúc <span class="text-orange-600">8 giờ 45 phút</span>. 
                            Biết xe nghỉ giữa đường <span class="text-rose-600 font-black">15 phút</span> và vận tốc ô tô là <span class="text-orange-600">45 km/giờ</span>. 
                            <br><br>
                            Tính quãng đường từ Hà Nội đến Hải Phòng?
                        </p>
                        
                        <div class="flex items-center gap-6 bg-white p-6 rounded-3xl shadow-xl border-4 border-orange-400">
                            <span class="text-xl md:text-3xl font-black text-gray-700 uppercase">QUÃNG ĐƯỜNG:</span>
                            <div class="flex items-center gap-3">
                                <input id="168-2-1" type="text" class="w-40 h-20 text-center text-4xl md:text-5xl font-black border-4 border-orange-500 rounded-2xl outline-none text-orange-700 shadow-inner" placeholder="...">
                                <span class="text-2xl md:text-3xl font-black text-orange-600">KM</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-168-2" onclick="window.check_168_2()" class="w-24 h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-4xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="lesson168_b3" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-green-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg rotate-1">3</div>
                    <p class="text-2xl md:text-4xl font-black text-green-800 uppercase tracking-wide">Quãng đường chim đại bàng bay</p>
                </div>
                
                <div class="p-8 bg-green-50 rounded-[2.5rem] border-2 border-green-100 flex flex-col items-center gap-8">
                    <p class="text-2xl md:text-3xl text-gray-700 leading-relaxed font-bold text-center">
                        Một con chim đại bàng bay với vận tốc <span class="text-green-700 font-black">96 km/giờ</span>. 
                        Tính quãng đường con chim đó bay được trong <span class="text-green-700 font-black">72 phút</span>.
                    </p>
                    
                    <div class="flex items-center gap-6 bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-emerald-400 transform transition-all hover:scale-105">
                        <span class="text-xl md:text-3xl font-black text-gray-700 uppercase">QUÃNG ĐƯỜNG:</span>
                        <div class="flex items-center gap-4">
                            <input id="168-3-1" type="text" class="w-56 h-24 text-center text-5xl md:text-6xl font-black border-4 border-emerald-500 rounded-3xl outline-none text-emerald-700 shadow-inner" placeholder="...">
                            <span class="text-3xl md:text-4xl font-black text-emerald-600 uppercase">KM</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-168-3" onclick="window.check_168_3()" class="w-24 h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-4xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>
        </div>
    `,

    quizPool: [
        { question: "Công thức tính quãng đường s khi biết v và t là:", options: ["s = v × t", "s = v : t", "s = t : v", "s = v + t"], answer: 0 },
        { question: "Đổi 40 phút ra giờ (dạng phân số tối giản) là:", options: ["2/3 giờ", "1/4 giờ", "1/2 giờ", "3/4 giờ"], answer: 0 },
        { question: "32,5 km/giờ nhân với 4 giờ bằng bao nhiêu km?", options: ["130 km", "120 km", "140 km", "135 km"], answer: 0 },
        { question: "210 m/phút nhân với 7 phút bằng bao nhiêu mét?", options: ["1470 m", "1400 m", "1500 m", "1200 m"], answer: 0 },
        { question: "Đổi 1,2 giờ ra phút:", options: ["72 phút", "60 phút", "120 phút", "80 phút"], answer: 0 },
        { question: "Xe đi từ 6h15 đến 8h45 hết bao lâu (chưa trừ nghỉ)?", options: ["2 giờ 30 phút", "2 giờ", "3 giờ", "2 giờ 15 phút"], answer: 0 },
        { question: "2 giờ 30 phút trừ đi 15 phút nghỉ còn lại bao nhiêu?", options: ["2 giờ 15 phút", "2 giờ 45 phút", "2 giờ", "1 giờ 45 phút"], answer: 0 },
        { question: "Đổi 2 giờ 15 phút sang đơn vị giờ (số thập phân):", options: ["2,25 giờ", "2,15 giờ", "2,5 giờ", "2,75 giờ"], answer: 0 },
        { question: "Vận tốc 45 km/h đi trong 2,25 giờ được quãng đường:", options: ["101,25 km", "100 km", "90 km", "112,5 km"], answer: 0 },
        { question: "Đổi 72 phút ra giờ:", options: ["1,2 giờ", "1,5 giờ", "0,72 giờ", "1,12 giờ"], answer: 0 },
        { question: "Chim bay 96 km/h trong 1,2 giờ được bao nhiêu km?", options: ["115,2 km", "100 km", "110 km", "120 km"], answer: 0 },
        { question: "Vận tốc 5 m/giây đi trong 1 phút được bao nhiêu mét?", options: ["300 m", "5 m", "60 m", "12 m"], answer: 0 },
        { question: "Quãng đường 18km, vận tốc 12km/h. Thời gian đi là:", options: ["1,5 giờ", "1 giờ", "2 giờ", "0,75 giờ"], answer: 0 },
        { question: "Một người đi bộ 5km/h trong 15 phút được bao nhiêu mét?", options: ["1250 m", "125 m", "5000 m", "750 m"], answer: 0 },
        { question: "Vận tốc dòng nước là 2km/h, vận tốc thuyền là 15km/h. Vận tốc xuôi dòng là:", options: ["17 km/h", "13 km/h", "15 km/h", "30 km/h"], answer: 0 },
        { question: "Vận tốc dòng nước là 2km/h, vận tốc thuyền là 15km/h. Vận tốc ngược dòng là:", options: ["13 km/h", "17 km/h", "15 km/h", "7,5 km/h"], answer: 0 },
        { question: "Quãng đường AB dài 120km. Xe máy đi hết 3 giờ. Vận tốc xe là:", options: ["40 km/h", "360 km/h", "30 km/h", "50 km/h"], answer: 0 },
        { question: "Quãng đường 60km, đi với vận tốc 15km/h hết bao lâu?", options: ["4 giờ", "3 giờ", "5 giờ", "2 giờ"], answer: 0 },
        { question: "Đổi vận tốc 36 km/giờ sang m/giây:", options: ["10 m/giây", "1 m/giây", "360 m/giây", "20 m/giây"], answer: 0 },
        { question: "Đổi vận tốc 5 m/giây sang km/giờ:", options: ["18 km/giờ", "50 km/giờ", "15 km/giờ", "20 km/giờ"], answer: 0 },
        { question: "Hai xe đi ngược chiều, vận tốc v1 và v2. Vận tốc chuyển động tương đối là:", options: ["v1 + v2", "v1 - v2", "v1 x v2", "v1 : v2"], answer: 0 },
        { question: "Hai xe đi cùng chiều, xe sau đuổi xe trước. Vận tốc tương đối là:", options: ["v1 - v2", "v1 + v2", "v1 x v2", "v1 : v2"], answer: 0 },
        { question: "Trong công thức s = v x t, nếu v tăng 2 lần, t tăng 2 lần thì s tăng:", options: ["4 lần", "2 lần", "1 lần", "16 lần"], answer: 0 },
        { question: "Đơn vị nào KHÔNG dùng để đo vận tốc?", options: ["km", "km/h", "m/phút", "m/giây"], answer: 0 },
        { question: "1 giờ 20 phút bằng bao nhiêu phút?", options: ["80 phút", "120 phút", "70 phút", "60 phút"], answer: 0 }
    ]
};

// --- Logic Functions ---
window.check_168_1 = () => {
    const ids = ['168-1-1', '168-1-2', '168-1-3'];
    const ans = ['130', '1470', '24'];
    const names = [
        'Hàng 1: v = 32,5 km/giờ, t = 4 giờ',
        'Hàng 2: v = 210 m/phút, t = 7 phút',
        'Hàng 3: v = 36 km/giờ, t = 40 phút'
    ];
    let score = 0;
    let studentAns = [];
    ids.forEach((id, idx) => {
        const val = document.getElementById(id).value.trim().replace(',', '.');
        studentAns.push(`${names[idx]}: s = ${val || '?'}`);
        if (val === ans[idx]) score++;
    });

    const isCorrect = score === ids.length;
    const rightAnswer = "130; 1470; 24";
    const studentAnswer = studentAns.join('<br>');
    const guidance = "Em hãy nhớ công thức tính quãng đường: s = v × t. Lưu ý đổi đơn vị thời gian cho tương ứng với vận tốc (ví dụ 40 phút = 2/3 giờ) trước khi tính nhé!";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        - Hàng 1: s = 32,5 × 4 = 130 (km)<br>
        - Hàng 2: s = 210 × 7 = 1470 (m)<br>
        - Hàng 3: Đổi 40 phút = 2/3 giờ. s = 36 × 2/3 = 24 (km)<br>
        Đáp số: 130; 1470; 24. Em làm rất tốt!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 1. Điền bảng v, t, s", Math.round(score / ids.length * 100), "btn-check-168-1", 0, ids.length, score);
    }
};

window.check_168_2 = () => {
    const val = document.getElementById('168-2-1').value.trim().replace(',', '.');
    const isCorrect = val === '101.25';

    const rightAnswer = "101,25";
    const studentAnswer = val || "?";
    const guidance = "Em hãy tính thời gian ô tô đi thực tế (Thời gian đến - Thời gian đi - Thời gian nghỉ). Sau đó đổi thời gian ra số thập phân (giờ) rồi tính quãng đường (s = v × t).";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        Thời gian ô tô đi (nếu không nghỉ) là:<br>
        8 giờ 45 phút - 6 giờ 15 phút = 2 giờ 30 phút.<br>
        Thời gian ô tô đi thực tế là:<br>
        2 giờ 30 phút - 15 phút = 2 giờ 15 phút.<br>
        Đổi 2 giờ 15 phút = 2,25 giờ.<br>
        Quãng đường từ Hà Nội đến Hải Phòng là:<br>
        45 × 2,25 = 101,25 (km)<br>
        Đáp số: 101,25 km. Rất giỏi!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 2. Quãng đường ô tô", isCorrect ? 100 : 0, "btn-check-168-2", 0, 1, isCorrect ? 1 : 0);
    }
};

window.check_168_3 = () => {
    const val = document.getElementById('168-3-1').value.trim().replace(',', '.');
    const isCorrect = val === '115.2';

    const rightAnswer = "115,2";
    const studentAnswer = val || "?";
    const guidance = "Em hãy đổi 72 phút ra đơn vị giờ (72 : 60), sau đó lấy vận tốc nhân với thời gian để tìm quãng đường nhé!";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        Đổi 72 phút = 1,2 giờ.<br>
        Quãng đường con chim đại bàng bay được là:<br>
        96 × 1,2 = 115,2 (km)<br>
        Đáp số: 115,2 km.<br>
        Em giải bài toán rất chính xác! Chúc mừng em.
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 3. Quãng đường đại bàng", isCorrect ? 100 : 0, "btn-check-168-3", 0, 1, isCorrect ? 1 : 0);
    }
};
