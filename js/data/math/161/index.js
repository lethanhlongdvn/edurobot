export const lesson161 = {
    period: "161",
    title: "BÀI 70: ÔN TẬP TỈ SỐ, TỈ SỐ PHẦN TRĂM (TIẾT 2)",
    topic: "Ôn tập tỉ số phần trăm",
    week: "32",

    content: `
        <div class="space-y-10">
            <div class="bg-blue-50 p-8 rounded-[2rem] border-4 border-blue-200 shadow-lg">
                <h3 class="text-2xl md:text-3xl font-black text-blue-700 mb-6 uppercase tracking-wider text-center">Kiến thức cần nhớ: Tỉ số phần trăm</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-blue-500 flex flex-col items-center text-center">
                        <span class="font-black text-blue-600 mb-4 block uppercase italic text-xl md:text-2xl">Dạng 1</span>
                        <p class="text-xl md:text-2xl mb-4">Tìm tỉ số phần trăm của a và b:</p>
                        <p class="text-3xl md:text-4xl font-black text-blue-700 p-3 bg-blue-50 rounded-xl">(a : b) × 100</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-cyan-500 flex flex-col items-center text-center">
                        <span class="font-black text-cyan-600 mb-4 block uppercase italic text-xl md:text-2xl">Dạng 2</span>
                        <p class="text-xl md:text-2xl mb-4">Tìm x% của một số A:</p>
                        <p class="text-3xl md:text-4xl font-black text-cyan-700 p-3 bg-cyan-50 rounded-xl">A × x%</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-sky-500 flex flex-col items-center text-center">
                        <span class="font-black text-sky-600 mb-4 block uppercase italic text-xl md:text-2xl">Dạng 3</span>
                        <p class="text-xl md:text-2xl mb-4">Tìm số biết x% của nó là B:</p>
                        <p class="text-3xl md:text-4xl font-black text-sky-700 p-3 bg-sky-50 rounded-xl">B : x%</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="space-y-12 pb-10">
            <!-- Bài 1 -->
            <div id="lesson161_b1" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                    <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide">Bài 1. Tìm tỉ số phần trăm thích hợp</h3>
                </div>
                
                <div class="p-8 bg-blue-50 rounded-[2.5rem] border-4 border-blue-200 mb-10">
                    <p class="text-2xl md:text-3xl text-gray-800 leading-relaxed font-bold">
                        Lớp 5A có 32 học sinh, kết quả giáo dục cuối năm học của lớp như sau: 8 học sinh đạt mức Hoàn thành xuất sắc, 12 học sinh đạt mức Hoàn thành tốt, số học sinh còn lại đạt mức Hoàn thành.
                    </p>
                </div>
                
                <div class="space-y-8 text-2xl md:text-3xl font-black px-6">
                    <div class="flex flex-wrap items-center gap-4">
                        <span>a) Số học sinh đạt mức Hoàn thành xuất sắc chiếm</span>
                        <div class="flex items-center gap-2">
                            <input id="161-1-1" class="w-32 h-16 text-center border-4 border-blue-300 rounded-2xl outline-none focus:border-blue-500" placeholder="?">
                            <span class="text-blue-600">%</span>
                        </div>
                        <span>số học sinh cả lớp.</span>
                    </div>
                    <div class="flex flex-wrap items-center gap-4">
                        <span>b) Số học sinh đạt mức Hoàn thành tốt chiếm</span>
                        <div class="flex items-center gap-2">
                            <input id="161-1-2" class="w-32 h-16 text-center border-4 border-blue-300 rounded-2xl outline-none focus:border-blue-500" placeholder="?">
                            <span class="text-blue-600">%</span>
                        </div>
                        <span>số học sinh cả lớp.</span>
                    </div>
                    <div class="flex flex-wrap items-center gap-4">
                        <span>c) Số học sinh đạt mức Hoàn thành chiếm</span>
                        <div class="flex items-center gap-2">
                            <input id="161-1-3" class="w-32 h-16 text-center border-4 border-blue-300 rounded-2xl outline-none focus:border-blue-500" placeholder="?">
                            <span class="text-blue-600">%</span>
                        </div>
                        <span>số học sinh cả lớp.</span>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-161-1" onclick="window.check_161_1()" class="w-20 h-20 bg-[#ff7b29] text-white rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="lesson161_b2" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-orange-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                    <h3 class="text-2xl md:text-3xl font-black text-orange-700 uppercase tracking-wide">Bài 2. Giải bài toán</h3>
                </div>
                
                <div class="space-y-8">
                    <p class="text-2xl md:text-3xl text-gray-800 leading-relaxed font-bold p-8 bg-orange-50 rounded-[2.5rem] border-4 border-orange-200">
                        Khi làm hồng treo gió, người ta cứ phơi 20 kg quả hồng tươi thì thu được 3,3 kg quả hồng khô. Hỏi lượng nước trong quả hồng tươi đã mất đi là bao nhiêu phần trăm?
                    </p>
                    
                    <div class="flex justify-center">
                        <img src="assets/images/toan/toan_tap_2/99/" alt="Hồng treo gió" class="max-w-full h-auto rounded-3xl shadow-lg border-4 border-orange-100">
                    </div>

                    <div class="flex flex-col items-center gap-4 p-8 bg-orange-50 rounded-[2.5rem] border-4 border-orange-200">
                        <span class="text-2xl md:text-3xl font-black text-orange-900 uppercase">Đáp số:</span>
                        <div class="flex items-center gap-3">
                            <input id="161-2-1" class="w-40 h-20 text-center text-4xl md:text-5xl font-black border-4 border-orange-500 rounded-3xl outline-none shadow-xl" placeholder="?">
                            <span class="text-3xl md:text-4xl font-black text-orange-600">%</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-161-2" onclick="window.check_161_2()" class="w-20 h-20 bg-[#ff7b29] text-white rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="lesson161_b3" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-green-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                    <h3 class="text-2xl md:text-3xl font-black text-green-700 uppercase tracking-wide">Bài 3. Giải bài toán</h3>
                </div>
                
                <div class="space-y-8">
                    <p class="text-2xl md:text-3xl text-gray-800 leading-relaxed font-bold p-8 bg-green-50 rounded-[2.5rem] border-4 border-green-200">
                        Giá tiền 1 kg hồng treo gió là 350 000 đồng. Mai mua 1 kg hồng treo gió vào Ngày Quốc tế Thiếu nhi nên được giảm giá 10%. Hỏi Mai phải trả người bán hàng bao nhiêu tiền?
                    </p>
                    
                    <div class="flex flex-col items-center gap-4 p-8 bg-green-50 rounded-[2.5rem] border-4 border-green-200">
                        <span class="text-2xl md:text-3xl font-black text-green-900 uppercase">Mai phải trả:</span>
                        <div class="flex items-center gap-4">
                            <input id="161-3-1" class="w-64 h-20 text-center text-3xl md:text-4xl font-black border-4 border-green-300 rounded-2xl outline-none focus:border-green-600" placeholder="?">
                            <span class="text-2xl md:text-3xl font-bold">đồng</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-161-3" onclick="window.check_161_3()" class="w-20 h-20 bg-[#ff7b29] text-white rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 4 -->
            <div id="lesson161_b4" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-cyan-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                    <h3 class="text-2xl md:text-3xl font-black text-cyan-700 uppercase tracking-wide">Bài 4. Chọn câu trả lời đúng</h3>
                </div>
                
                <div class="p-8 bg-cyan-50 rounded-[2.5rem] border-4 border-cyan-200 space-y-8">
                    <p class="text-2xl md:text-3xl text-gray-800 leading-relaxed font-bold">
                        Lãi suất tiết kiệm là 8% một năm. Cô Hoa gửi tiết kiệm 50 000 000 đồng. Hỏi sau hai năm, cô Hoa sẽ nhận được bao nhiêu tiền lãi? (Biết rằng tiền lãi năm trước được gộp vào tiền gốc để gửi năm sau.)
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                        <button id="161-4-A" onclick="window.select161_4('A')" class="flex items-center p-6 bg-white border-4 border-gray-100 rounded-[2rem] hover:border-cyan-500 transition-all text-left shadow-sm">
                            <span class="w-14 h-14 flex items-center justify-center bg-cyan-100 text-cyan-700 rounded-full font-black text-2xl md:text-3xl mr-6">A</span>
                            <span class="text-xl md:text-2xl font-bold">4 000 000 đồng</span>
                        </button>
                        <button id="161-4-B" onclick="window.select161_4('B')" class="flex items-center p-6 bg-white border-4 border-gray-100 rounded-[2rem] hover:border-cyan-500 transition-all text-left shadow-sm">
                            <span class="w-14 h-14 flex items-center justify-center bg-cyan-100 text-cyan-700 rounded-full font-black text-2xl md:text-3xl mr-6">B</span>
                            <span class="text-xl md:text-2xl font-bold">8 000 000 đồng</span>
                        </button>
                        <button id="161-4-C" onclick="window.select161_4('C')" class="flex items-center p-6 bg-white border-4 border-gray-100 rounded-[2rem] hover:border-cyan-500 transition-all text-left shadow-sm">
                            <span class="w-14 h-14 flex items-center justify-center bg-cyan-100 text-cyan-700 rounded-full font-black text-2xl md:text-3xl mr-6">C</span>
                            <span class="text-xl md:text-2xl font-bold">8 400 000 đồng</span>
                        </button>
                        <button id="161-4-D" onclick="window.select161_4('D')" class="flex items-center p-6 bg-white border-4 border-gray-100 rounded-[2rem] hover:border-cyan-500 transition-all text-left shadow-sm">
                            <span class="w-14 h-14 flex items-center justify-center bg-cyan-100 text-cyan-700 rounded-full font-black text-2xl md:text-3xl mr-6">D</span>
                            <span class="text-xl md:text-2xl font-bold">8 320 000 đồng</span>
                        </button>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-161-4" onclick="window.check_161_4()" class="w-20 h-20 bg-[#ff7b29] text-white rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>
    `,

    quizPool: [
        { question: "Lớp 5A có 32 học sinh, 8 bạn đạt xuất sắc. Tỉ số phần trăm là:", options: ["25%", "20%", "30%", "40%"], answer: 0 },
        { question: "Lớp 5A có 32 học sinh, 12 bạn đạt tốt. Tỉ số phần trăm là:", options: ["37,5%", "35%", "40%", "30%"], answer: 0 },
        { question: "Lớp 5A có 32 học sinh, 8 xuất sắc, 12 tốt. Số bạn còn lại là:", options: ["12 bạn", "10 bạn", "8 bạn", "20 bạn"], answer: 0 },
        { question: "Số bạn đạt mức Hoàn thành của lớp 5A chiếm:", options: ["37,5%", "25%", "30%", "35%"], answer: 0 },
        { question: "Phơi 20kg hồng tươi thu được 3,3kg hồng khô. Khối lượng nước mất đi là:", options: ["16,7kg", "17,7kg", "16,3kg", "15,7kg"], answer: 0 },
        { question: "Lượng nước mất đi chiếm bao nhiêu phần trăm khối lượng hồng tươi?", options: ["83,5%", "85%", "80%", "75%"], answer: 0 },
        { question: "Giá 1kg hồng là 350 000 đồng, giảm 10% là giảm bao nhiêu?", options: ["35 000 đồng", "3 500 đồng", "10 000 đồng", "350 đồng"], answer: 0 },
        { question: "Giá sau khi giảm 10% của 350 000 đồng là:", options: ["315 000 đồng", "320 000 đồng", "300 000 đồng", "340 000 đồng"], answer: 0 },
        { question: "Gửi 50 triệu lãi 8% một năm. Sau 1 năm tiền lãi là:", options: ["4 triệu đồng", "5 triệu đồng", "8 triệu đồng", "2 triệu đồng"], answer: 0 },
        { question: "Sau 1 năm, cả gốc và lãi là (lãi gộp gốc):", options: ["54 triệu đồng", "58 triệu đồng", "50 triệu đồng", "60 triệu đồng"], answer: 0 },
        { question: "Lãi năm thứ hai của 54 triệu đồng với lãi suất 8% là:", options: ["4,32 triệu đồng", "4 triệu đồng", "4,5 triệu đồng", "4,8 triệu đồng"], answer: 0 },
        { question: "Tổng số tiền lãi sau 2 năm (lãi gộp gốc) là:", options: ["8,32 triệu đồng", "8 triệu đồng", "8,4 triệu đồng", "8,5 triệu đồng"], answer: 0 },
        { question: "Tìm tỉ số phần trăm của 15 và 60:", options: ["25%", "20%", "30%", "40%"], answer: 0 },
        { question: "10% của 1 000 000 đồng là:", options: ["100 000 đồng", "10 000 đồng", "1 000 đồng", "200 000 đồng"], answer: 0 },
        { question: "Tìm một số biết 20% của nó là 40:", options: ["200", "100", "80", "400"], answer: 0 }
    ]
};

// --- Logic Functions ---
window.check_161_1 = () => {
    const v = (id) => document.getElementById('161-1-' + id).value.trim().replace(',', '.');
    let score = 0;
    if (v('1') === '25') score++;
    if (v('2') === '37.5') score++;
    if (v('3') === '37.5') score++;

    const total = 3;
    const isCorrect = score === total;
    const rightAnswer = "a) 25%; b) 37,5%; c) 37,5%";
    const studentAnswer = `a) ${v('1')}%; b) ${v('2')}%; c) ${v('3')}%`;
    const guidance = "Để tìm tỉ số phần trăm, em hãy lấy số học sinh của từng mức chia cho tổng số học sinh của cả lớp (32 học sinh) rồi nhân kết quả với 100.";
    const solution = `
        <div class="space-y-4">
            <p class="font-bold text-green-700">Tuyệt vời! Em đã tính toán tỉ số phần trăm rất chính xác. 🎉</p>
            <div class="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                <p><b>Lời giải chi tiết:</b></p>
                <p>Tổng số học sinh cả lớp là: 32 học sinh.</p>
                <p>a) Tỉ số phần trăm HS Hoàn thành xuất sắc: 8 : 32 = 0,25 = <b>25%</b>.</p>
                <p>b) Tỉ số phần trăm HS Hoàn thành tốt: 12 : 32 = 0,375 = <b>37,5%</b>.</p>
                <p>c) Số học sinh Hoàn thành là: 32 - (8 + 12) = 12 học sinh.</p>
                <p>Tỉ số phần trăm HS Hoàn thành: 12 : 32 = 0,375 = <b>37,5%</b>.</p>
            </div>
        </div>
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Tỉ số % học sinh", Math.round(score / total * 100), "btn-check-161-1", 0, total, score);
};

window.check_161_2 = () => {
    const val = document.getElementById('161-2-1').value.trim().replace(',', '.');
    const isCorrect = val === '83.5';
    const rightAnswer = "83,5%";
    const studentAnswer = val + "%";
    const guidance = "Trước tiên, em cần tính khối lượng nước đã mất đi (lấy khối lượng hồng tươi trừ đi khối lượng hồng khô). Sau đó tìm tỉ số phần trăm của lượng nước đó so với khối lượng hồng tươi ban đầu.";
    const solution = `
        <div class="space-y-4">
            <p class="font-bold text-green-700">Rất tốt! Em đã giải quyết bài toán thực tế này rất tốt. 🍎</p>
            <div class="bg-orange-50 p-4 rounded-xl border-2 border-orange-200">
                <p><b>Lời giải chi tiết:</b></p>
                <p>Lượng nước trong quả hồng tươi đã mất đi là:</p>
                <p class="text-center font-bold">20 - 3,3 = 16,7 (kg)</p>
                <p>Tỉ số phần trăm lượng nước đã mất là:</p>
                <p class="text-center font-bold">16,7 : 20 = 0,835 = 83,5%</p>
                <p>Đáp số: <b>83,5%</b>.</p>
            </div>
        </div>
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Hồng treo gió", isCorrect ? 100 : 0, "btn-check-161-2", 0, 1, isCorrect ? 1 : 0);
};

window.check_161_3 = () => {
    const val = document.getElementById('161-3-1').value.trim().replace(/\s/g, '');
    const isCorrect = val === '315000' || val === '315000.000';
    const rightAnswer = "315 000 đồng";
    const studentAnswer = val + " đồng";
    const guidance = "Em hãy tính số tiền được giảm (10% của 350 000 đồng) bằng cách lấy 350 000 nhân với 10 rồi chia cho 100. Sau đó lấy giá ban đầu trừ đi số tiền được giảm nhé.";
    const solution = `
        <div class="space-y-4">
            <p class="font-bold text-green-700">Chính xác! Em tính toán giá tiền sau khi giảm giá rất giỏi. 💰</p>
            <div class="bg-green-50 p-4 rounded-xl border-2 border-green-200">
                <p><b>Lời giải chi tiết:</b></p>
                <p>Số tiền Mai được giảm giá là:</p>
                <p class="text-center font-bold">350 000 &times; 10 : 100 = 35 000 (đồng)</p>
                <p>Số tiền Mai phải trả cho người bán hàng là:</p>
                <p class="text-center font-bold">350 000 - 35 000 = 315 000 (đồng)</p>
                <p>Hoặc tính nhanh: 350 000 &times; (100% - 10%) = 315 000 (đồng).</p>
                <p>Đáp số: <b>315 000 đồng</b>.</p>
            </div>
        </div>
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Hồng treo gió (tiếp)", isCorrect ? 100 : 0, "btn-check-161-3", 0, 1, isCorrect ? 1 : 0);
};

let selected161_4 = "";
window.select161_4 = (ans) => {
    selected161_4 = ans;
    ['A', 'B', 'C', 'D'].forEach(id => {
        document.getElementById('161-4-' + id).classList.remove('border-cyan-500', 'bg-cyan-100');
    });
    document.getElementById('161-4-' + ans).classList.add('border-cyan-500', 'bg-cyan-100');
    window.check_161_4();
};

window.check_161_4 = () => {
    if (!selected161_4) return;
    const isCorrect = selected161_4 === 'D';
    const rightAnswer = "D (8 320 000 đồng)";
    const studentAnswer = selected161_4;
    const guidance = "Chú ý đây là bài toán lãi gộp gốc. Em cần tính tiền lãi năm thứ nhất, cộng vào gốc để có gốc năm thứ hai, sau đó mới tính lãi năm thứ hai và cộng dồn lại.";
    const solution = `
        <div class="space-y-4">
            <p class="font-bold text-green-700">Xuất sắc! Em đã hiểu rất rõ về bài toán lãi kép gộp gốc. 📈</p>
            <div class="bg-cyan-50 p-4 rounded-xl border-2 border-cyan-200">
                <p><b>Lời giải chi tiết:</b></p>
                <p>Tiền lãi sau năm thứ nhất là: 50 000 000 &times; 8 : 100 = 4 000 000 (đồng).</p>
                <p>Số tiền gốc để tính lãi năm thứ hai là: 50 000 000 + 4 000 000 = 54 000 000 (đồng).</p>
                <p>Tiền lãi của năm thứ hai là: 54 000 000 &times; 8 : 100 = 4 320 000 (đồng).</p>
                <p>Tổng số tiền lãi cô Hoa nhận được sau hai năm là: 4 000 000 + 4 320 000 = 8 320 000 (đồng).</p>
                <p>Vậy ta chọn đáp án <b>D</b>.</p>
            </div>
        </div>
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Trắc nghiệm lãi tiết kiệm", isCorrect ? 100 : 0, "btn-check-161-4", 0, 1, isCorrect ? 1 : 0);
};

window.lesson161 = lesson161;


