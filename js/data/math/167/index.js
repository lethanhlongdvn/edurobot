export const lesson167 = {
    period: "167",
    title: "BÀI 72: ÔN TẬP ĐO LƯỜNG (TIẾT 2)",
    topic: "Ôn tập đo lường",
    week: "34",

    content: `
        <div class="space-y-6">
            <div class="bg-emerald-50 p-8 rounded-[3rem] border-4 border-emerald-200 shadow-2xl">
                <h3 class="text-3xl md:text-5xl font-black text-emerald-700 mb-6 uppercase text-center tracking-tight">ÔN TẬP ĐO LƯỜNG (TIẾT 2)</h3>
                <div class="space-y-4 text-xl md:text-3xl text-gray-800 leading-relaxed font-bold">
                    <p class="uppercase text-emerald-600 border-b-4 border-emerald-200 pb-2 text-center">Ôn tập về đơn vị đo thời gian</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div class="p-6 bg-white rounded-3xl shadow-xl border-t-8 border-emerald-500 text-center">
                            <h4 class="font-black text-emerald-600 text-xl md:text-3xl mb-3 underline italic uppercase">QUY ĐỔI</h4>
                            <p class="text-xl md:text-2xl text-gray-600">1 năm = 12 tháng<br>1 tuần = 7 ngày</p>
                        </div>
                        <div class="p-6 bg-white rounded-3xl shadow-xl border-t-8 border-sky-500 text-center">
                            <h4 class="font-black text-sky-600 text-xl md:text-3xl mb-3 underline italic uppercase">NGÀY ĐÊM</h4>
                            <p class="text-xl md:text-2xl text-gray-600">1 ngày = 24 giờ<br>1 giờ = 60 phút</p>
                        </div>
                        <div class="p-6 bg-white rounded-3xl shadow-xl border-t-8 border-rose-500 text-center">
                            <h4 class="font-black text-rose-600 text-xl md:text-3xl mb-3 underline italic uppercase">PHÚT GIÂY</h4>
                            <p class="text-xl md:text-2xl text-gray-600">1 phút = 60 giây<br>1 giờ = 3600 giây</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="space-y-12 pb-10">
            <!-- Bài 1 -->
            <div id="lesson167_b1" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg rotate-2">1</div>
                    <h3 class="text-2xl md:text-4xl font-black text-emerald-800 uppercase tracking-wide">Bài 1. Số thích hợp điền vào chỗ trống</h3>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
                    <div class="space-y-6 bg-emerald-50 p-8 rounded-[2.5rem] border-2 border-emerald-100">
                        <div class="space-y-4">
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-48 text-right font-bold">2,5 thế kỉ =</span>
                                <input id="167-1-1" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-emerald-400 rounded-xl outline-none focus:ring-4 focus:ring-emerald-200" placeholder="?">
                                <span class="font-bold text-gray-500">năm</span>
                            </div>
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-48 text-right font-bold">3 năm rưỡi =</span>
                                <input id="167-1-2" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-emerald-400 rounded-xl outline-none focus:ring-4 focus:ring-emerald-200" placeholder="?">
                                <span class="font-bold text-gray-500">tháng</span>
                            </div>
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-48 text-right font-bold">3/4 ngày =</span>
                                <input id="167-1-3" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-emerald-400 rounded-xl outline-none focus:ring-4 focus:ring-emerald-200" placeholder="?">
                                <span class="font-bold text-gray-500">giờ</span>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-6 bg-sky-50 p-8 rounded-[2.5rem] border-2 border-sky-100">
                        <div class="space-y-4">
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-48 text-right font-bold">0,4 giờ =</span>
                                <input id="167-1-4" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-sky-400 rounded-xl outline-none focus:ring-4 focus:ring-sky-200" placeholder="?">
                                <span class="font-bold text-gray-500">phút</span>
                            </div>
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-48 text-right font-bold">72 phút =</span>
                                <input id="167-1-5" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-sky-400 rounded-xl outline-none focus:ring-4 focus:ring-sky-200" placeholder="?">
                                <span class="font-bold text-gray-500">giờ</span>
                            </div>
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-48 text-right font-bold">270 giây =</span>
                                <input id="167-1-6" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-sky-400 rounded-xl outline-none focus:ring-4 focus:ring-sky-200" placeholder="?">
                                <span class="font-bold text-gray-500">phút</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-167-1" onclick="window.check_167_1()" class="w-24 h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-4xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="lesson167_b2" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-orange-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-orange-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg -rotate-1">2</div>
                    <h3 class="text-2xl md:text-4xl font-black text-orange-800 uppercase tracking-wide">Bài 2. Tính thời gian</h3>
                </div>
                
                <div class="p-8 bg-orange-50 rounded-[2.5rem] border-2 border-orange-100 flex flex-col gap-8">
                    <p class="text-2xl md:text-3xl text-gray-700 leading-relaxed font-bold">
                        a) 2 giờ 30 phút + 3 giờ 15 phút = ... giờ ... phút
                    </p>
                    <div class="flex items-center gap-3 bg-white p-6 rounded-2xl shadow-md self-start">
                        <input id="167-2-1" type="text" class="w-24 h-16 text-center text-2xl md:text-3xl font-black border-4 border-orange-400 rounded-xl outline-none" placeholder="?">
                        <span class="text-xl md:text-2xl font-bold">giờ</span>
                        <input id="167-2-2" type="text" class="w-24 h-16 text-center text-2xl md:text-3xl font-black border-4 border-orange-400 rounded-xl outline-none" placeholder="?">
                        <span class="text-xl md:text-2xl font-bold">phút</span>
                    </div>

                    <p class="text-2xl md:text-3xl text-gray-700 leading-relaxed font-bold mt-4">
                        b) 5 giờ 40 phút - 2 giờ 50 phút = ... giờ ... phút
                    </p>
                    <div class="flex items-center gap-3 bg-white p-6 rounded-2xl shadow-md self-start">
                        <input id="167-2-3" type="text" class="w-24 h-16 text-center text-2xl md:text-3xl font-black border-4 border-orange-400 rounded-xl outline-none" placeholder="?">
                        <span class="text-xl md:text-2xl font-bold">giờ</span>
                        <input id="167-2-4" type="text" class="w-24 h-16 text-center text-2xl md:text-3xl font-black border-4 border-orange-400 rounded-xl outline-none" placeholder="?">
                        <span class="text-xl md:text-2xl font-bold">phút</span>
                    </div>
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-167-2" onclick="window.check_167_2()" class="w-24 h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-4xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="lesson167_b3" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg rotate-0">3</div>
                    <h3 class="text-2xl md:text-4xl font-black text-blue-800 uppercase tracking-wide">Bài 3. Thời gian làm bài</h3>
                </div>
                
                <div class="p-8 bg-blue-50 rounded-[2.5rem] border-2 border-blue-100 flex flex-col items-center gap-8">
                    <p class="text-2xl md:text-3xl text-gray-700 leading-relaxed font-bold text-center">
                        Hôm nay bạn Lan làm 3 bài tập toán hết 1 giờ 15 phút. 
                        Hỏi trung bình mỗi bài tập bạn Lan làm hết <span class="text-blue-600 font-black">bao nhiêu phút</span>?
                    </p>
                    
                    <div class="flex items-center gap-6 bg-white p-8 rounded-[2.5rem] shadow-xl border-4 border-blue-400">
                        <span class="text-xl md:text-3xl font-black text-gray-700 uppercase">TRUNG BÌNH:</span>
                        <div class="flex items-center gap-3">
                            <input id="167-3-1" type="text" class="w-32 h-20 text-center text-4xl md:text-5xl font-black border-4 border-blue-500 rounded-2xl outline-none text-blue-700 shadow-inner" placeholder="...">
                            <span class="text-2xl md:text-3xl font-black text-blue-600 uppercase">PHÚT</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-167-3" onclick="window.check_167_3()" class="w-24 h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-4xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>
        </div>
    `,

    quizPool: [
        { question: "2,5 thế kỉ là bao nhiêu năm?", options: ["250 năm", "25 năm", "2500 năm", "205 năm"], answer: 0 },
        { question: "3 năm rưỡi có bao nhiêu tháng?", options: ["42 tháng", "36 tháng", "40 tháng", "38 tháng"], answer: 0 },
        { question: "3/4 ngày tương ứng với bao nhiêu giờ?", options: ["18 giờ", "15 giờ", "12 giờ", "20 giờ"], answer: 0 },
        { question: "0,4 giờ bằng bao nhiêu phút?", options: ["24 phút", "40 phút", "4 phút", "15 phút"], answer: 0 },
        { question: "72 phút bằng bao nhiêu giờ?", options: ["1,2 giờ", "1,5 giờ", "1,1 giờ", "0,72 giờ"], answer: 0 },
        { question: "270 giây bằng bao nhiêu phút?", options: ["4,5 phút", "4 phút", "4,2 phút", "5 phút"], answer: 0 },
        { question: "2 giờ 30 phút cộng 3 giờ 15 phút là:", options: ["5 giờ 45 phút", "6 giờ", "5 giờ 30 phút", "6 giờ 15 phút"], answer: 0 },
        { question: "5 giờ 40 phút trừ 2 giờ 50 phút là:", options: ["2 giờ 50 phút", "3 giờ 10 phút", "2 giờ 40 phút", "3 giờ"], answer: 0 },
        { question: "1 giờ 15 phút chia cho 3 bằng bao nhiêu phút?", options: ["25 phút", "30 phút", "15 phút", "20 phút"], answer: 0 },
        { question: "Một thế kỉ bằng bao nhiêu năm?", options: ["100 năm", "1000 năm", "10 năm", "50 năm"], answer: 0 },
        { question: "Một năm thường (không nhuận) có bao nhiêu ngày?", options: ["365 ngày", "366 ngày", "360 ngày", "364 ngày"], answer: 0 },
        { question: "Tháng 2 năm nhuận có bao nhiêu ngày?", options: ["29 ngày", "28 ngày", "30 ngày", "31 ngày"], answer: 0 },
        { question: "1 năm nhuận có bao nhiêu ngày?", options: ["366 ngày", "365 ngày", "364 ngày", "360 ngày"], answer: 0 },
        { question: "Bao nhiêu phút bằng 1,5 giờ?", options: ["90 phút", "60 phút", "150 phút", "100 phút"], answer: 0 },
        { question: "Trung bình cộng của 2 giờ và 4 giờ là:", options: ["3 giờ", "2 giờ", "6 giờ", "4 giờ"], answer: 0 },
        { question: "Năm 2024 là năm nhuận hay năm thường?", options: ["Năm nhuận", "Năm thường", "Không xác định", "Năm nhuận kép"], answer: 0 },
        { question: "Đổi 0,5 ngày ra giờ:", options: ["12 giờ", "6 giờ", "24 giờ", "18 giờ"], answer: 0 },
        { question: "Dương đi học lúc 7h, đến trường lúc 7h25. Dương đi hết:", options: ["25 phút", "15 phút", "30 phút", "20 phút"], answer: 0 },
        { question: "1 giờ 30 phút nhân với 2 bằng:", options: ["3 giờ", "2 giờ 30 phút", "4 giờ", "3 giờ 30 phút"], answer: 0 },
        { question: "Kim giờ đồng hồ quay một vòng hết bao nhiêu giờ?", options: ["12 giờ", "24 giờ", "1 giờ", "60 giờ"], answer: 0 },
        { question: "Một năm có mấy quý?", options: ["4 quý", "2 quý", "3 quý", "12 quý"], answer: 0 },
        { question: "Mỗi quý có mấy tháng?", options: ["3 tháng", "4 tháng", "1 tháng", "6 tháng"], answer: 0 },
        { question: "Tháng nào sau đây có 31 ngày?", options: ["Tháng 1", "Tháng 4", "Tháng 6", "Tháng 2"], answer: 0 },
        { question: "Tháng nào sau đây có 30 ngày?", options: ["Tháng 9", "Tháng 12", "Tháng 3", "Tháng 8"], answer: 0 },
        { question: "Đổi 150 phút ra giờ:", options: ["2,5 giờ", "2,15 giờ", "3 giờ", "1,5 giờ"], answer: 0 }
    ]
};

// --- Logic Functions ---
window.check_167_1 = () => {
    const ids = ['167-1-1', '167-1-2', '167-1-3', '167-1-4', '167-1-5', '167-1-6'];
    const names = [
        '2,5 thế kỉ = ... năm', '3 năm rưỡi = ... tháng', '3/4 ngày = ... giờ',
        '0,4 giờ = ... phút', '72 phút = ... giờ', '270 giây = ... phút'
    ];
    const ans = ['250', '42', '18', '24', '1.2', '4.5'];
    let score = 0;
    let studentAns = [];
    ids.forEach((id, idx) => {
        const val = document.getElementById(id).value.trim().replace(',', '.');
        studentAns.push(`${names[idx]}: ${val || '?'}`);
        if (val === ans[idx]) score++;
    });

    const isCorrect = score === ids.length;
    const rightAnswer = "250; 42; 18; 24; 1,2; 4,5";
    const studentAnswer = studentAns.join('<br>');
    const guidance = "Em hãy nhớ các mốc quy đổi: 1 thế kỉ = 100 năm; 1 năm = 12 tháng; 1 ngày = 24 giờ; 1 giờ = 60 phút; 1 phút = 60 giây.";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        - 2,5 thế kỉ = 100 × 2,5 = 250 (năm)<br>
        - 3 năm rưỡi = 12 × 3,5 = 42 (tháng)<br>
        - 3/4 ngày = 24 × 3 : 4 = 18 (giờ)<br>
        - 0,4 giờ = 60 × 0,4 = 24 (phút)<br>
        - 72 phút = 72 : 60 = 1,2 (giờ)<br>
        - 270 giây = 270 : 60 = 4,5 (phút)<br>
        Kết quả rất tốt! Em đã nắm vững cách đổi đơn vị thời gian rồi đấy.
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 1. Đổi đơn vị thời gian", Math.round(score / ids.length * 100), "btn-check-167-1", 0, ids.length, score);
    }
};

window.check_167_2 = () => {
    const v1 = document.getElementById('167-2-1').value.trim();
    const v2 = document.getElementById('167-2-2').value.trim();
    const v3 = document.getElementById('167-2-3').value.trim();
    const v4 = document.getElementById('167-2-4').value.trim();

    let score = 0;
    if (v1 === '5' && v2 === '45') score++;
    if (v3 === '2' && v4 === '50') score++;

    const isCorrect = score === 2;
    const rightAnswer = "a) 5 giờ 45 phút; b) 2 giờ 50 phút";
    const studentAnswer = `a) ${v1 || '?'} giờ ${v2 || '?'} phút<br>b) ${v3 || '?'} giờ ${v4 || '?'} phút`;
    const guidance = "Khi cộng hoặc trừ đơn vị thời gian, em hãy đặt tính thẳng hàng theo từng loại đơn vị. Lưu ý khi thực hiện phép trừ nếu số phút ở số bị trừ nhỏ hơn số trừ, em cần đổi 1 giờ thành 60 phút nhé!";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        a) 2 giờ 30 phút + 3 giờ 15 phút = 5 giờ 45 phút.<br>
        b) 5 giờ 40 phút - 2 giờ 50 phút:<br>
        Vì 40 phút < 50 phút nên ta đổi 5 giờ 40 phút = 4 giờ 100 phút.<br>
        4 giờ 100 phút - 2 giờ 50 phút = 2 giờ 50 phút.<br>
        Tuyệt vời! Em làm tính rất chính xác.
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 2. Phép tính thời gian", score === 2 ? 100 : (score === 1 ? 50 : 0), "btn-check-167-2", 0, 2, score);
    }
};

window.check_167_3 = () => {
    const val = document.getElementById('167-3-1').value.trim().replace(',', '.');
    const isCorrect = val === '25';

    const rightAnswer = "25";
    const studentAnswer = val || "?";
    const guidance = "Em hãy đổi số đo thời gian ra đơn vị phút, sau đó lấy tổng số phút chia cho số lượng bài tập để tìm thời gian trung bình làm mỗi bài nhé!";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        Đổi: 1 giờ 15 phút = 75 phút.<br>
        Trung bình mỗi bài tập Lan làm hết số thời gian là:<br>
        75 : 3 = 25 (phút)<br>
        Đáp số: 25 phút.<br>
        Em giải toán rất hay! Tiếp tục cố gắng nhé.
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 3. Trung bình mỗi bài", isCorrect ? 100 : 0, "btn-check-167-3", 0, 1, isCorrect ? 1 : 0);
    }
};
