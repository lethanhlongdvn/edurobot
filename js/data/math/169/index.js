export const lesson169 = {
    period: "169",
    title: "BÀI 73: ÔN TẬP TOÁN CHUYỂN ĐỘNG ĐỀU (TIẾT 2)",
    topic: "Ôn tập vận tốc, quãng đường, thời gian (tiếp theo)",
    week: "34",

    practice: `
        <div class="space-y-10 pb-10">

            <!-- Bài 1: Đua xe đạp -->
            <div id="lesson169_b1" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-blue-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">1</div>
                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Chọn câu trả lời đúng</h3>
                </div>
                <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Trong cuộc đua xe đạp trên một đoạn đường, anh Hoà đi với vận tốc <span class="font-black text-blue-700">9 m/s</span>, anh Bình đi với vận tốc <span class="font-black text-blue-700">36 km/h</span>. Như vậy:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button onclick="window.select169_1('A')" id="btn-169-1-A" class="p-4 bg-white rounded-2xl border-4 border-blue-100 hover:border-blue-400 transition-all font-black text-lg text-center">
                            <span class="text-blue-500 text-base block">A.</span>
                            Anh Hoà đi nhanh hơn anh Bình.
                        </button>
                        <button onclick="window.select169_1('B')" id="btn-169-1-B" class="p-4 bg-white rounded-2xl border-4 border-blue-100 hover:border-blue-400 transition-all font-black text-lg text-center">
                            <span class="text-blue-500 text-base block">B.</span>
                            Anh Bình đi nhanh hơn anh Hoà.
                        </button>
                        <button onclick="window.select169_1('C')" id="btn-169-1-C" class="p-4 bg-white rounded-2xl border-4 border-blue-100 hover:border-blue-400 transition-all font-black text-lg text-center">
                            <span class="text-blue-500 text-base block">C.</span>
                            Anh Hoà và anh Bình đi với vận tốc như nhau.
                        </button>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-169-1').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-169-1" onclick="window.check_169_1()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-169-1" class="hidden bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg font-bold text-blue-900 space-y-1">
                    <p>Vận tốc anh Hoà: 9 m/s = 9 × 3,6 = 32,4 km/h.</p>
                    <p>Vận tốc anh Bình: 36 km/h.</p>
                    <p>Do 32,4 km/h < 36 km/h nên anh Bình đi nhanh hơn anh Hoà.</p>
                    <p>Đáp án: <span class="text-emerald-700">B. Anh Bình đi nhanh hơn anh Hoà</span></p>
                </div>
            </div>

            <!-- Bài 2: Việt đi bộ và đi xe máy -->
            <div id="lesson169_b2" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-emerald-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">2</div>
                    <h3 class="text-xl md:text-2xl font-black text-emerald-700">Bài 2. Quãng đường Việt đi cùng bố</h3>
                </div>
                <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Quãng đường từ nhà Việt đến trường dài <span class="font-black text-blue-700">1,75 km</span>. Khi tan học, Việt đi bộ về nhà với vận tốc <span class="font-black text-blue-700">3 km/h</span>. Sau đó <span class="font-black text-blue-700">12 phút</span>, Việt gặp bố đến đón và cùng bố đi xe máy về nhà. Hỏi quãng đường Việt cùng bố đi xe máy về nhà dài bao nhiêu ki-lô-mét?
                    </p>
                    <div class="flex items-center gap-3 flex-wrap font-bold text-lg">
                        <span class="text-gray-700">Quãng đường Việt đi xe máy cùng bố:</span>
                        <input id="169-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                        <span>km</span>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-169-2').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-169-2" onclick="window.check_169_2()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-169-2" class="hidden bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-lg font-bold text-emerald-900 space-y-1">
                    <p>12 phút = 0,2 giờ.</p>
                    <p>Quãng đường Việt đi bộ: 3 × 0,2 = 0,6 km.</p>
                    <p>Quãng đường đi xe máy cùng bố: 1,75 − 0,6 = <span class="text-blue-700">1,15 km</span></p>
                    <p>Chúc mừng em đã giải đúng!</p>
                </div>
            </div>

            <!-- Bài 3: Tàu thuỷ đi trên sông AB -->
            <div id="lesson169_b3" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-amber-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">3</div>
                    <h3 class="text-xl md:text-2xl font-black text-amber-700">Bài 3. Tàu thuỷ khởi hành từ bến A</h3>
                </div>
                <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Quãng đường sông AB dài <span class="font-black text-blue-700">80 km</span>. Một tàu thuỷ đi từ bến A đến bến B với vận tốc <span class="font-black text-blue-700">32 km/h</span>. Biết rằng tàu cập bến B lúc <span class="font-black text-blue-700">12 giờ 15 phút</span>. Hỏi tàu thuỷ đó khởi hành từ bến A lúc mấy giờ?
                    </p>
                    <div class="flex items-center gap-3 flex-wrap font-bold text-lg">
                        <span class="text-gray-700">Tàu khởi hành từ bến A lúc:</span>
                        <input id="169-3-h" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                        <span>giờ</span>
                        <input id="169-3-m" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                        <span>phút</span>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-169-3').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-169-3" onclick="window.check_169_3()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-169-3" class="hidden bg-amber-50 p-4 rounded-2xl border border-amber-200 text-lg font-bold text-amber-900 space-y-1">
                    <p>Thời gian tàu đi: 80 : 32 = 2,5 giờ = 2 giờ 30 phút.</p>
                    <p>Thời điểm khởi hành: 12 giờ 15 phút − 2 giờ 30 phút = <span class="text-emerald-700">9 giờ 45 phút</span></p>
                    <p>Chúc mừng em đã giải đúng!</p>
                </div>
            </div>

            <!-- Bài 4: Đoàn tàu đi qua cầu Long Biên -->
            <div id="lesson169_b4" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-rose-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">4</div>
                    <h3 class="text-xl md:text-2xl font-black text-rose-700">Bài 4. Đoàn tàu qua cầu Long Biên</h3>
                </div>
                <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Một đoàn tàu đi qua cầu Long Biên dài <span class="font-black text-blue-700">2 290 m</span> với vận tốc <span class="font-black text-blue-700">24,3 km/h</span>. Thời gian từ lúc đầu tàu đi vào cầu đến lúc toa cuối cùng ra khỏi cầu là <span class="font-black text-blue-700">6 phút</span>. Hỏi đoàn tàu đó dài bao nhiêu mét?
                    </p>
                    <img src="assets/images/toan/toan_tap_2/169/169-4-cau-long-bien.png" class="max-w-[500px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Cầu Long Biên">
                    <div class="flex items-center gap-3 flex-wrap font-bold text-lg">
                        <span class="text-gray-700">Chiều dài đoàn tàu:</span>
                        <input id="169-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                        <span>m</span>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-169-4').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-169-4" onclick="window.check_169_4()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-169-4" class="hidden bg-rose-50 p-4 rounded-2xl border border-rose-200 text-lg font-bold text-rose-900 space-y-1">
                    <p>6 phút = 0,1 giờ.</p>
                    <p>Quãng đường tàu đi được trong 6 phút: 24,3 × 0,1 = 2,43 km = 2 430 m.</p>
                    <p>Quãng đường này bằng chiều dài cầu + chiều dài tàu.</p>
                    <p>Chiều dài đoàn tàu: 2 430 − 2 290 = <span class="text-emerald-700">140 m</span></p>
                    <p>Chúc mừng em đã giải đúng!</p>
                </div>
            </div>

        </div>
    `,

    quizPool: [
        { question: "9 m/s đổi ra km/h bằng bao nhiêu?", options: ["32,4 km/h", "36 km/h", "25 km/h", "18 km/h"], answer: 0 },
        { question: "Anh Hoà 9 m/s, anh Bình 36 km/h. Ai nhanh hơn?", options: ["Anh Bình", "Anh Hoà", "Bằng nhau", "Không so sánh được"], answer: 0 },
        { question: "Việt đi bộ v=3km/h trong 12 phút (0,2h) được quãng đường?", options: ["0,6 km", "0,36 km", "0,4 km", "1 km"], answer: 0 },
        { question: "Quãng đường Việt cùng bố đi xe máy về nhà (tổng 1,75km) là?", options: ["1,15 km", "1,35 km", "1,45 km", "0,6 km"], answer: 0 },
        { question: "Tàu thuỷ đi 80 km với v = 32 km/h hết bao nhiêu thời gian?", options: ["2,5 giờ (2h30p)", "2 giờ", "3 giờ", "2h15p"], answer: 0 },
        { question: "Tàu cập bến lúc 12h15p, đi hết 2h30p thì khởi hành lúc?", options: ["9 giờ 45 phút", "10 giờ", "9 giờ 30 phút", "10 giờ 15 phút"], answer: 0 },
        { question: "Đoàn tàu đi qua cầu Long Biên 6 phút (0,1 giờ) với v = 24,3 km/h. Tổng quãng đường đi được là?", options: ["2 430 m", "2 290 m", "2 43 m", "140 m"], answer: 0 },
        { question: "Chiều dài đoàn tàu qua cầu 2 290 m (tổng đi 2 430 m) là?", options: ["140 m", "240 m", "100 m", "150 m"], answer: 0 },
        { question: "Khi đoàn tàu qua cầu, tổng quãng đường đi được bằng?", options: ["Chiều dài cầu + chiều dài tàu", "Chiều dài cầu", "Chiều dài tàu", "Chiều dài cầu × 2"], answer: 0 },
        { question: "12 phút = ? giờ", options: ["0,2 giờ", "0,12 giờ", "0,5 giờ", "0,25 giờ"], answer: 0 },
        { question: "6 phút = ? giờ", options: ["0,1 giờ", "0,6 giờ", "0,06 giờ", "0,15 giờ"], answer: 0 },
        { question: "24,3 km/h × 0,1 giờ = ? km = ? m", options: ["2,43 km = 2 430 m", "24,3 km", "243 m", "24300 m"], answer: 0 },
        { question: "2,5 giờ = ? giờ ? phút", options: ["2 giờ 30 phút", "2 giờ 50 phút", "2 giờ 5 phút", "2 giờ 15 phút"], answer: 0 },
        { question: "36 km/h đổi ra m/s bằng bao nhiêu?", options: ["10 m/s", "9 m/s", "12 m/s", "15 m/s"], answer: 0 },
        { question: "Vận tốc xe đạp anh Hoà (32,4 km/h) kém anh Bình (36 km/h) bao nhiêu?", options: ["3,6 km/h", "4 km/h", "2,6 km/h", "3.4 km/h"], answer: 0 }
    ]
};

window.lesson169 = lesson169;

window._sel169_1 = null;
window.select169_1 = function(opt) {
    ['A','B','C'].forEach(o => {
        const b = document.getElementById('btn-169-1-'+o);
        if (b) b.className = 'p-4 bg-white rounded-2xl border-4 border-blue-100 hover:border-blue-400 transition-all font-black text-lg text-center';
    });
    const sel = document.getElementById('btn-169-1-'+opt);
    if (sel) sel.className = 'p-4 bg-blue-100 rounded-2xl border-4 border-blue-500 transition-all font-black text-lg text-center';
    window._sel169_1 = opt;
};

window.check_169_1 = function() {
    const isCorrect = window._sel169_1 === 'B';
    window.showMathFeedback(isCorrect,
        "B. Anh Bình đi nhanh hơn anh Hoà.",
        "",
        "Gợi ý: Đổi 9 m/s sang km/h bằng cách lấy 9 × 3,6 = 32,4 km/h. So sánh với 36 km/h của anh Bình.",
        "9 m/s = 32,4 km/h < 36 km/h.<br>Anh Bình đi nhanh hơn anh Hoà.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Đua xe đạp", isCorrect?100:0, "btn-check-169-1", 0, 1, isCorrect?1:0);
};

window.check_169_2 = function() {
    const v = document.getElementById('169-2')?.value.trim().replace(',','.').replace(/\s/g,'') || '';
    const isCorrect = (v === '1.15' || v === '1,15');
    window.showMathFeedback(isCorrect,
        "1,15 km",
        "",
        "Gợi ý: 12 phút = 0,2 giờ. Tính quãng đường Việt đi bộ (3 × 0,2 = 0,6 km). Trừ đi tổng quãng đường 1,75 km.",
        "Đi bộ: 3 × 0,2 = 0,6 km.<br>Đi xe máy cùng bố: 1,75 − 0,6 = 1,15 km.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Việt đi xe máy cùng bố", isCorrect?100:0, "btn-check-169-2", 0, 1, isCorrect?1:0);
};

window.check_169_3 = function() {
    const v1 = document.getElementById('169-3-h')?.value.trim() || '';
    const v2 = document.getElementById('169-3-m')?.value.trim() || '';
    const isCorrect = (v1 === '9' && v2 === '45');
    window.showMathFeedback(isCorrect,
        "9 giờ 45 phút",
        "",
        "Gợi ý: Thời gian tàu đi = 80 : 32 = 2,5 giờ = 2 giờ 30 phút. Giờ khởi hành = 12 giờ 15 phút − 2 giờ 30 phút.",
        "Thời gian đi: 80 : 32 = 2,5h = 2h30p.<br>Giờ khởi hành: 12h15p − 2h30p = 9 giờ 45 phút.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Tàu thuỷ khởi hành bến A", isCorrect?100:0, "btn-check-169-3", 0, 1, isCorrect?1:0);
};

window.check_169_4 = function() {
    const v = document.getElementById('169-4')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = v === '140';
    window.showMathFeedback(isCorrect,
        "140 m",
        "",
        "Gợi ý: 6 phút = 0,1 giờ. Tổng quãng đường đi được trong 6 phút = 24,3 × 0,1 = 2,43 km = 2 430 m. Chiều dài tàu = 2 430 − 2 290.",
        "Tổng quãng đường tàu đi trong 6 phút = 2 430 m.<br>Chiều dài đoàn tàu = 2 430 − 2 290 = 140 m.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Tàu qua cầu Long Biên", isCorrect?100:0, "btn-check-169-4", 0, 1, isCorrect?1:0);
};

import './logic.js';
