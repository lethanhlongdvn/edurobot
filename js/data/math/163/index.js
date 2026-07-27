export const lesson163 = {
    period: "163",
    title: "BÀI 71: ÔN TẬP HÌNH HỌC (TIẾT 2)",
    topic: "Ôn tập hình học (tiếp theo)",
    week: "33",

    practice: `
        <div class="space-y-10 pb-10">

            <!-- Bài 1: Sân bóng rổ -->
            <div id="lesson163_b1" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-blue-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">1</div>
                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Giải bài toán</h3>
                </div>
                <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Một sân bóng rổ dạng hình chữ nhật có kích thước như hình vẽ dưới đây (chiều dài <span class="font-black text-blue-700">28 m</span>, chiều rộng <span class="font-black text-blue-700">15 m</span>, hình tròn ở giữa sân có đường kính <span class="font-black text-blue-700">3,6 m</span>).
                    </p>
                    <img src="assets/images/toan/toan_tap_2/163/163-1-san-bong-ro.png" class="max-w-[500px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Sân bóng rổ">
                    
                    <div class="space-y-4 border-t border-blue-200 pt-4">
                        <p class="font-black text-blue-900 text-lg">a) Chu vi và diện tích sân bóng rổ:</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="font-bold text-gray-700">Chu vi sân:</span>
                                <input id="163-1-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                                <span class="font-bold text-gray-700">m</span>
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="font-bold text-gray-700">Diện tích sân:</span>
                                <input id="163-1-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                                <span class="font-bold text-gray-700">m²</span>
                            </div>
                        </div>

                        <p class="font-black text-blue-900 text-lg border-t border-blue-200 pt-3">b) Chu vi và diện tích hình tròn ở giữa sân:</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="font-bold text-gray-700">Chu vi hình tròn:</span>
                                <input id="163-1-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                                <span class="font-bold text-gray-700">m</span>
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="font-bold text-gray-700">Diện tích hình tròn:</span>
                                <input id="163-1-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                                <span class="font-bold text-gray-700">m²</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-163-1').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-163-1" onclick="window.check_163_1()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-163-1" class="hidden bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg font-bold text-blue-900 space-y-1">
                    <p>a) Chu vi sân bóng rổ: (28 + 15) × 2 = <span class="text-emerald-700">86 m</span></p>
                    <p>Diện tích sân bóng rổ: 28 × 15 = <span class="text-emerald-700">420 m²</span></p>
                    <p>b) Chu vi hình tròn: 3,14 × 3,6 = <span class="text-emerald-700">11,304 m</span></p>
                    <p>Bán kính hình tròn: 3,6 : 2 = 1,8 m</p>
                    <p>Diện tích hình tròn: 3,14 × 1,8 × 1,8 = <span class="text-emerald-700">10,1736 m²</span></p>
                </div>
            </div>

            <!-- Bài 2: Cái hộp hình A -->
            <div id="lesson163_b2" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-emerald-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">2</div>
                    <h3 class="text-xl md:text-2xl font-black text-emerald-700">Bài 2. Giải bài toán</h3>
                </div>
                <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Từ miếng bìa hình vuông cạnh <span class="font-black text-blue-700">40 cm</span>, Nam đã cắt 4 hình vuông cạnh <span class="font-black text-blue-700">8 cm</span> ở bốn góc, rồi gấp lên để được cái hộp không nắp (Hình A). Tính diện tích miếng bìa làm thành cái hộp hình A đó.
                    </p>
                    <img src="assets/images/toan/toan_tap_2/163/163-2-cai-hop.png" class="max-w-[450px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Cái hộp không nắp">
                    <div class="flex items-center gap-3 flex-wrap">
                        <span class="font-bold text-gray-700 text-lg">Diện tích miếng bìa làm cái hộp:</span>
                        <input id="163-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-36 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                        <span class="font-bold text-gray-700">cm²</span>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-163-2').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-163-2" onclick="window.check_163_2()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-163-2" class="hidden bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-lg font-bold text-emerald-900 space-y-1">
                    <p>Diện tích miếng bìa ban đầu: 40 × 40 = 1 600 cm²</p>
                    <p>Diện tích 4 hình vuông ở góc: 4 × (8 × 8) = 256 cm²</p>
                    <p>Diện tích miếng bìa làm cái hộp: 1 600 − 256 = <span class="text-blue-700">1 344 cm²</span></p>
                    <p>Chúc mừng em đã giải đúng!</p>
                </div>
            </div>

            <!-- Bài 3: Khu đất hình thang -->
            <div id="lesson163_b3" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-amber-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">3</div>
                    <h3 class="text-xl md:text-2xl font-black text-amber-700">Bài 3. Giải bài toán</h3>
                </div>
                <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Một khu đất dạng hình thang vuông có chiều cao bằng đáy bé và bằng <span class="font-black text-blue-700">40 m</span>, độ dài đáy lớn bằng <span class="font-black text-blue-700">3/2</span> đáy bé. Để xây dựng khu nhà văn hoá, đội xây dựng đã cải tạo, đắp đất mở rộng khu đất cũ thành khu đất mới dạng hình chữ nhật có chiều rộng bằng chiều cao hình thang, có chiều dài bằng đáy lớn hình thang (như hình vẽ).
                    </p>
                    <img src="assets/images/toan/toan_tap_2/163/163-3-khu-dat.png" class="max-w-[350px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Khu đất mở rộng">
                    <div class="space-y-4">
                        <div class="flex items-center gap-3 flex-wrap">
                            <span class="font-bold text-gray-700 text-lg">a) Diện tích khu đất dạng hình thang ban đầu:</span>
                            <input id="163-3-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-36 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span class="font-bold text-gray-700">m²</span>
                        </div>
                        <div class="flex items-center gap-3 flex-wrap">
                            <span class="font-bold text-gray-700 text-lg">b) Diện tích phần đất được mở rộng:</span>
                            <input id="163-3-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-36 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span class="font-bold text-gray-700">m²</span>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-163-3').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-163-3" onclick="window.check_163_3()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-163-3" class="hidden bg-amber-50 p-4 rounded-2xl border border-amber-200 text-lg font-bold text-amber-900 space-y-1">
                    <p>Đáy bé = chiều cao = 40 m. Đáy lớn = 40 × 3/2 = 60 m.</p>
                    <p>a) Diện tích hình thang ban đầu: (60 + 40) × 40 : 2 = <span class="text-emerald-700">2 000 m²</span></p>
                    <p>Diện tích HCN mới: 60 × 40 = 2 400 m².</p>
                    <p>b) Diện tích phần mở rộng: 2 400 − 2 000 = <span class="text-emerald-700">400 m²</span> (hoặc (60 − 40) × 40 : 2 = 400 m²)</p>
                </div>
            </div>

            <!-- Bài 4: Việt dán 9 tờ giấy màu -->
            <div id="lesson163_b4" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-rose-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">4</div>
                    <div>
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-rose-100 text-rose-800 font-black rounded text-sm">Số ?</span>
                        <h3 class="text-xl md:text-2xl font-black text-rose-700 mt-1">Bài 4. Dán 9 tờ giấy màu</h3>
                    </div>
                </div>
                <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Việt cắt 9 tờ giấy màu, mỗi tờ là hình chữ nhật có chu vi <span class="font-black text-blue-700">30 cm</span> (Hình A). Việt đã dán 9 tờ giấy màu đó thành hình chữ nhật (Hình B).
                    </p>
                    <img src="assets/images/toan/toan_tap_2/163/163-4-hinh-a-b.png" class="max-w-[400px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Hình A và Hình B">
                    <div class="space-y-4">
                        <div class="flex items-center gap-3 flex-wrap">
                            <span class="font-bold text-gray-700 text-lg">a) Chu vi hình B là:</span>
                            <input id="163-4-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span class="font-bold text-gray-700">cm</span>
                        </div>
                        <div class="flex items-center gap-3 flex-wrap">
                            <span class="font-bold text-gray-700 text-lg">b) Nếu hình chữ nhật B có chiều dài hơn chiều rộng 9 cm thì diện tích hình A là:</span>
                            <input id="163-4-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span class="font-bold text-gray-700">cm²</span>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-163-4').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-163-4" onclick="window.check_163_4()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-163-4" class="hidden bg-rose-50 p-4 rounded-2xl border border-rose-200 text-lg font-bold text-rose-900 space-y-1">
                    <p>Hình B ghép bởi 3 × 3 tờ giấy A. Gọi dài, rộng tờ A là a, b → a + b = 15 cm.</p>
                    <p>Kích thước B là 3a và 3b. Chu vi B = 2 × (3a + 3b) = 6 × (a + b) = 6 × 15 = <span class="text-emerald-700">90 cm</span></p>
                    <p>b) B có 3a − 3b = 9 → a − b = 3 cm. Mà a + b = 15 cm.</p>
                    <p>Chiều dài A: a = (15 + 3) : 2 = 9 cm. Chiều rộng A: b = 6 cm.</p>
                    <p>Diện tích hình A: 9 × 6 = <span class="text-emerald-700">54 cm²</span></p>
                </div>
            </div>

        </div>
    `,

    quizPool: [
        { question: "Chu vi sân bóng rổ (28 m × 15 m) là?", options: ["86 m", "43 m", "420 m", "84 m"], answer: 0 },
        { question: "Diện tích sân bóng rổ (28 m × 15 m) là?", options: ["420 m²", "86 m²", "210 m²", "430 m²"], answer: 0 },
        { question: "Chu vi hình tròn đường kính 3,6 m là?", options: ["11,304 m", "10,1736 m", "5,652 m", "11,3 m"], answer: 0 },
        { question: "Diện tích hình tròn đường kính 3,6 m (r=1,8 m) là?", options: ["10,1736 m²", "11,304 m²", "40,6944 m²", "10,17 m²"], answer: 0 },
        { question: "Diện tích 4 hình vuông nhỏ cạnh 8 cm là?", options: ["256 cm²", "64 cm²", "128 cm²", "512 cm²"], answer: 0 },
        { question: "Diện tích miếng bìa làm cái hộp hình A (vuông 40 cm cắt 4 góc 8 cm) là?", options: ["1 344 cm²", "1 600 cm²", "1 536 cm²", "1 244 cm²"], answer: 0 },
        { question: "Đáy lớn khu đất hình thang (đáy bé 40 m, bằng 3/2) là?", options: ["60 m", "50 m", "80 m", "45 m"], answer: 0 },
        { question: "Diện tích khu đất hình thang ban đầu (đáy 40m, 60m, cao 40m) là?", options: ["2 000 m²", "2 400 m²", "1 000 m²", "4 000 m²"], answer: 0 },
        { question: "Diện tích phần đất mở rộng thêm là?", options: ["400 m²", "2 000 m²", "2 400 m²", "200 m²"], answer: 0 },
        { question: "Chu vi hình A là 30 cm thì nửa chu vi (a + b) là?", options: ["15 cm", "30 cm", "60 cm", "10 cm"], answer: 0 },
        { question: "Hình B ghép 3x3 từ hình A có chu vi là?", options: ["90 cm", "270 cm", "45 cm", "180 cm"], answer: 0 },
        { question: "Nếu 3a - 3b = 9 cm thì hiệu a - b của hình A là?", options: ["3 cm", "9 cm", "1 cm", "6 cm"], answer: 0 },
        { question: "Chiều dài a và chiều rộng b của hình A (tổng 15, hiệu 3) là?", options: ["a = 9 cm, b = 6 cm", "a = 10 cm, b = 5 cm", "a = 8 cm, b = 7 cm", "a = 9 cm, b = 3 cm"], answer: 0 },
        { question: "Diện tích hình A là?", options: ["54 cm²", "90 cm²", "30 cm²", "48 cm²"], answer: 0 },
        { question: "Diện tích hình B (ghép 9 hình A) là?", options: ["486 cm²", "54 cm²", "450 cm²", "540 cm²"], answer: 0 }
    ]
};

window.lesson163 = lesson163;

window.check_163_1 = function() {
    const checks = [
        {id:'163-1-1', ans:['86']},
        {id:'163-1-2', ans:['420']},
        {id:'163-1-3', ans:['11,304','11.304']},
        {id:'163-1-4', ans:['10,1736','10.1736']},
    ];
    let correct = 0;
    checks.forEach(c => {
        const el = document.getElementById(c.id);
        if (!el) return;
        const v = el.value.trim().replace(/\s/g,'');
        if (c.ans.includes(v)) { el.classList.add('bg-green-100','border-green-500'); el.classList.remove('bg-red-100','border-red-500'); correct++; }
        else { el.classList.add('bg-red-100','border-red-500'); el.classList.remove('bg-green-100','border-green-500'); }
    });
    const isCorrect = correct === checks.length;
    window.showMathFeedback(isCorrect,
        "a) P = 86 m; S = 420 m²<br>b) C = 11,304 m; S = 10,1736 m²",
        "",
        "Gợi ý: a) P = (dài + rộng) × 2, S = dài × rộng. b) Đường kính 3,6 m → r = 1,8 m. C = 3,14 × d, S = 3,14 × r × r.",
        "a) P = (28 + 15) × 2 = 86 m; S = 28 × 15 = 420 m²<br>b) C = 3,14 × 3,6 = 11,304 m; r = 1,8 m → S = 3,14 × 1,8 × 1,8 = 10,1736 m²<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Sân bóng rổ", Math.round(correct/checks.length*100), "btn-check-163-1", 0, checks.length, correct);
};

window.check_163_2 = function() {
    const v = document.getElementById('163-2')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = v === '1344';
    window.showMathFeedback(isCorrect,
        "1 344 cm²",
        "",
        "Gợi ý: Diện tích bìa cái hộp = diện tích hình vuông lớn (40×40) trừ diện tích 4 hình vuông góc (4 × 8×8).",
        "S lớn = 40 × 40 = 1 600 cm². S 4 góc = 4 × 64 = 256 cm².<br>S bìa cái hộp = 1 600 − 256 = 1 344 cm².<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Cái hộp không nắp", isCorrect?100:0, "btn-check-163-2", 0, 1, isCorrect?1:0);
};

window.check_163_3 = function() {
    const v1 = document.getElementById('163-3-1')?.value.trim().replace(/\s/g,'') || '';
    const v2 = document.getElementById('163-3-2')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = (v1 === '2000' || v1 === '2 000') && (v2 === '400' || v2 === '400');
    window.showMathFeedback(isCorrect,
        "a) 2 000 m²<br>b) 400 m²",
        "",
        "Gợi ý: Đáy lớn = 40 × 3/2 = 60 m. a) S thang = (60+40)×40:2. b) S mở rộng = S HCN (60×40) − S thang.",
        "Đáy lớn = 60 m.<br>a) S ban đầu = (60 + 40) × 40 : 2 = 2 000 m².<br>b) S mở rộng = 60 × 40 − 2 000 = 400 m².<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Khu đất mở rộng", isCorrect?100:0, "btn-check-163-3", 0, 1, isCorrect?1:0);
};

window.check_163_4 = function() {
    const v1 = document.getElementById('163-4-1')?.value.trim().replace(/\s/g,'') || '';
    const v2 = document.getElementById('163-4-2')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = (v1 === '90' && v2 === '54');
    window.showMathFeedback(isCorrect,
        "a) 90 cm<br>b) 54 cm²",
        "",
        "Gợi ý: a) Hình B gấp 3 lần kích thước hình A → Chu vi B = 3 × Chu vi A. b) Nửa chu vi A = 15, hiệu = 3 → tính dài, rộng A rồi tính diện tích.",
        "a) Chu vi A = 30 cm → Nửa chu vi = 15 cm. Chu vi B = 6 × 15 = 90 cm.<br>b) 3a − 3b = 9 → a − b = 3. Dài a = (15+3):2 = 9 cm, Rộng b = 6 cm.<br>S hình A = 9 × 6 = 54 cm².<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Dán 9 tờ giấy màu", isCorrect?100:0, "btn-check-163-4", 0, 1, isCorrect?1:0);
};

import './logic.js';
