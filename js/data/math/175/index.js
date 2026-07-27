export const lesson175 = {
    period: "175",
    title: "BÀI 75: ÔN TẬP CHUNG (TIẾT 4)",
    topic: "Ôn tập giải toán tổng hợp nâng cao",
    week: "35",

    practice: `
        <div class="space-y-10 pb-10">

            <!-- Bài 2: Bể cá hình hộp chữ nhật -->
            <div id="lesson175_b2" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-blue-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">2</div>
                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 2. Bể cá hình hộp chữ nhật</h3>
                </div>
                <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-4 font-bold text-lg">
                    <p class="text-gray-800 leading-relaxed">
                        Một bể cá dạng hình hộp chữ nhật có chu vi đáy là <span class="font-black text-blue-700">320 cm</span>, chiều rộng của đáy bằng <span class="font-black text-blue-700">3/5</span> chiều dài của đáy, chiều cao bể cá là <span class="font-black text-blue-700">50 cm</span>.
                    </p>
                    <img src="assets/images/toan/toan_tap_2/175/175-2-be-ca.png" class="max-w-[350px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Bể cá hình hộp chữ nhật">

                    <div class="space-y-3 border-t border-blue-200 pt-4">
                        <p class="font-black text-blue-900 text-xl">a) Tính chiều dài và chiều rộng đáy bể cá:</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>- Chiều dài đáy:</span>
                                <input id="175-2-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                                <span>cm</span>
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>- Chiều rộng đáy:</span>
                                <input id="175-2-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                                <span>cm</span>
                            </div>
                        </div>

                        <p class="font-black text-blue-900 text-xl border-t border-blue-200 pt-3">b) Mực nước hiện có trong bể là 40 cm. Lượng nước hiện có chiếm bao nhiêu phần trăm so với khi đầy bể?</p>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>Lượng nước hiện có chiếm:</span>
                            <input id="175-2-p" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?%">
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-175-2').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-175-2" onclick="window.check_175_2()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-175-2" class="hidden bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg font-bold text-blue-900 space-y-1">
                    <p>a) Nửa chu vi đáy: 320 : 2 = 160 cm.</p>
                    <p>Chiều dài đáy: 160 : (3 + 5) × 5 = <span class="text-emerald-700">100 cm</span>.</p>
                    <p>Chiều rộng đáy: 160 − 100 = <span class="text-emerald-700">60 cm</span>.</p>
                    <p>b) Mực nước 40 cm trên chiều cao 50 cm. Tỉ số phần trăm: 40 : 50 × 100 = <span class="text-emerald-700">80%</span>.</p>
                </div>
            </div>

            <!-- Bài 3: Chuyển động xe buýt và taxi -->
            <div id="lesson175_b3" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-emerald-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">3</div>
                    <h3 class="text-xl md:text-2xl font-black text-emerald-700">Bài 3. Chuyển động của xe buýt và taxi từ bến A đến khu du lịch B</h3>
                </div>
                <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-4 font-bold text-lg">
                    <p class="text-gray-800 leading-relaxed">
                        Cùng xuất phát ở bến A đi đến khu du lịch B, Việt đi xe buýt đến nơi lúc <span class="font-black text-blue-700">9 giờ</span>, Mai đi xe taxi đến nơi lúc <span class="font-black text-blue-700">8 giờ 15 phút</span>. Rô-bốt cho biết cùng trên quãng đường AB, thời gian đi của taxi bằng <span class="font-black text-blue-700">2/3</span> thời gian đi của xe buýt.
                    </p>
                    <img src="assets/images/toan/toan_tap_2/175/175-3-xe-buyt-taxi.png" class="max-w-[480px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Xe buýt và taxi đi khu du lịch B">

                    <div class="space-y-3 border-t border-emerald-200 pt-4">
                        <p class="font-black text-emerald-900 text-xl">a) Thời gian của mỗi xe ô tô đi trên quãng đường AB:</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>- Thời gian xe buýt đi:</span>
                                <input id="175-3-h1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                                <span>giờ</span>
                                <input id="175-3-m1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                                <span>phút</span>
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>- Thời gian xe taxi đi:</span>
                                <input id="175-3-h2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                                <span>giờ</span>
                                <input id="175-3-m2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                                <span>phút</span>
                            </div>
                        </div>

                        <p class="font-black text-emerald-900 text-xl border-t border-emerald-200 pt-3">b) Tính độ dài quãng đường AB, biết vận tốc của xe taxi là 60 km/h:</p>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>Quãng đường AB dài:</span>
                            <input id="175-3-s" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>km</span>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-175-3').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-175-3" onclick="window.check_175_3()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-175-3" class="hidden bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-lg font-bold text-emerald-900 space-y-1">
                    <p>Taxi đến sớm hơn xe buýt: 9h − 8h15p = 45 phút.</p>
                    <p>Thời gian xe buýt đi: 45 × 3 = 135 phút = <span class="text-blue-700">2 giờ 15 phút</span>.</p>
                    <p>Thời gian taxi đi: 45 × 2 = 90 phút = <span class="text-blue-700">1 giờ 30 phút</span> (1,5 giờ).</p>
                    <p>Độ dài quãng đường AB: 60 × 1,5 = <span class="text-blue-700">90 km</span>.</p>
                </div>
            </div>

            <!-- Bài 4: Mật độ dân số tỉnh miền núi -->
            <div id="lesson175_b4" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-amber-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">4</div>
                    <h3 class="text-xl md:text-2xl font-black text-amber-700">Bài 4. Mật độ dân số tỉnh miền núi</h3>
                </div>
                <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4 font-bold text-lg">
                    <p class="text-gray-800 leading-relaxed">
                        Một tỉnh miền núi có diện tích khoảng <span class="font-black text-blue-700">10 000 km²</span>. Mật độ dân số ở tỉnh đó khoảng <span class="font-black text-blue-700">80 người/km²</span>. Nếu muốn tăng mật độ dân số của tỉnh đó lên <span class="font-black text-blue-700">90 người/km²</span> thì số dân của tỉnh phải tăng thêm bao nhiêu người?
                    </p>
                    <div class="flex items-center gap-3 flex-wrap border-t border-amber-200 pt-4">
                        <span>Số dân của tỉnh phải tăng thêm:</span>
                        <input id="175-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-36 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                        <span>người</span>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-175-4').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-175-4" onclick="window.check_175_4()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-175-4" class="hidden bg-amber-50 p-4 rounded-2xl border border-amber-200 text-lg font-bold text-amber-900 space-y-1">
                    <p>Mật độ dân số tăng thêm: 90 − 80 = 10 người/km².</p>
                    <p>Số dân phải tăng thêm: 10 000 × 10 = <span class="text-emerald-700">100 000 người</span>.</p>
                    <p>Chúc mừng em đã hoàn thành bài học cuối cùng!</p>
                </div>
            </div>

        </div>
    `,

    quizPool: [
        { question: "Nửa chu vi đáy bể cá (320 cm : 2) là?", options: ["160 cm", "320 cm", "80 cm", "640 cm"], answer: 0 },
        { question: "Chiều dài đáy bể cá (tổng 160 cm, tỉ số 3/5) là?", options: ["100 cm", "60 cm", "120 cm", "80 cm"], answer: 0 },
        { question: "Chiều rộng đáy bể cá là?", options: ["60 cm", "100 cm", "40 cm", "50 cm"], answer: 0 },
        { question: "Mực nước 40 cm so với chiều cao bể 50 cm chiếm bao nhiêu %?", options: ["80%", "75%", "85%", "90%"], answer: 0 },
        { question: "Thời gian taxi đi nhanh hơn xe buýt (9h − 8h15p) là?", options: ["45 phút", "30 phút", "15 phút", "1 giờ"], answer: 0 },
        { question: "Thời gian xe buýt đi từ A đến B (45 phút × 3) là?", options: ["135 phút (2 giờ 15 phút)", "90 phút", "120 phút", "150 phút"], answer: 0 },
        { question: "Thời gian taxi đi từ A đến B (45 phút × 2) là?", options: ["90 phút (1 giờ 30 phút)", "135 phút", "60 phút", "45 phút"], answer: 0 },
        { question: "Độ dài quãng đường AB (v=60km/h, t=1,5h) là?", options: ["90 km", "100 km", "80 km", "120 km"], answer: 0 },
        { question: "Mật độ dân số tăng từ 80 lên 90 người/km² thì mỗi km² tăng?", options: ["10 người", "90 người", "80 người", "100 người"], answer: 0 },
        { question: "Diện tích tỉnh 10 000 km², số dân phải tăng thêm là?", options: ["100 000 người", "10 000 người", "900 000 người", "800 000 người"], answer: 0 },
        { question: "Tổng số phần bằng nhau giữa chiều rộng và chiều dài đáy (3 + 5) là?", options: ["8 phần", "15 phần", "2 phần", "10 phần"], answer: 0 },
        { question: "Hiệu số phần bằng nhau thời gian giữa xe buýt và taxi (3 − 2) là?", options: ["1 phần", "5 phần", "6 phần", "2 phần"], answer: 0 },
        { question: "135 phút đổi ra giờ và phút là?", options: ["2 giờ 15 phút", "2 giờ 35 phút", "1 giờ 35 phút", "2 giờ 5 phút"], answer: 0 },
        { question: "90 phút đổi ra giờ là?", options: ["1,5 giờ", "1,25 giờ", "1,75 giờ", "1 giờ"], answer: 0 },
        { question: "Tổng số dân của tỉnh khi mật độ đạt 90 người/km² (10 000 km²) là?", options: ["900 000 người", "800 000 người", "100 000 người", "90 000 người"], answer: 0 }
    ]
};

window.lesson175 = lesson175;

window.check_175_2 = function() {
    const checks = [
        {id:'175-2-1', ans:['100']},
        {id:'175-2-2', ans:['60']},
        {id:'175-2-p', ans:['80%','80']},
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
        "a) Chiều dài: 100 cm, Chiều rộng: 60 cm<br>b) Lượng nước chiếm: 80%",
        "",
        "Gợi ý: Nửa chu vi = 320 : 2 = 160 cm. Chiều dài = 160 : (3+5) × 5 = 100 cm. % nước = 40 : 50 × 100% = 80%.",
        "a) Dài: 100 cm, Rộng: 60 cm.<br>b) Lượng nước chiếm 80% bể.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Bể cá hình hộp chữ nhật", Math.round(correct/checks.length*100), "btn-check-175-2", 0, checks.length, correct);
};

window.check_175_3 = function() {
    const v1 = document.getElementById('175-3-h1')?.value.trim() || '';
    const v2 = document.getElementById('175-3-m1')?.value.trim() || '';
    const v3 = document.getElementById('175-3-h2')?.value.trim() || '';
    const v4 = document.getElementById('175-3-m2')?.value.trim() || '';
    const vs = document.getElementById('175-3-s')?.value.trim() || '';
    const isCorrect = (v1 === '2' && v2 === '15' && v3 === '1' && v4 === '30' && vs === '90');
    window.showMathFeedback(isCorrect,
        "a) Xe buýt: 2 giờ 15 phút; Xe taxi: 1 giờ 30 phút<br>b) Quãng đường AB dài: 90 km",
        "",
        "Gợi ý: Taxi nhanh hơn 45 phút. Xe buýt đi 45 × 3 = 135 phút (2h15p), Taxi đi 45 × 2 = 90 phút (1h30p = 1,5h). s = 60 × 1,5 = 90 km.",
        "a) Xe buýt: 2 giờ 15 phút; Taxi: 1 giờ 30 phút.<br>b) Quãng đường AB: 90 km.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Xe buýt và taxi", isCorrect?100:0, "btn-check-175-3", 0, 1, isCorrect?1:0);
};

window.check_175_4 = function() {
    const v = document.getElementById('175-4')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = (v === '100000' || v === '100000người');
    window.showMathFeedback(isCorrect,
        "100 000 người",
        "",
        "Gợi ý: Mật độ tăng thêm = 90 − 80 = 10 người/km². Số dân tăng = 10 000 × 10 = 100 000 người.",
        "Mật độ tăng thêm 10 người/km².<br>Số dân tăng thêm: 10 000 × 10 = 100 000 người.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Mật độ dân số", isCorrect?100:0, "btn-check-175-4", 0, 1, isCorrect?1:0);
};

// import './logic.js';
