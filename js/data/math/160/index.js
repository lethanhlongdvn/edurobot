export const lesson160 = {
    period: "160",
    title: "BÀI 70: ÔN TẬP TỈ SỐ, TỈ SỐ PHẦN TRĂM (TIẾT 1)",
    topic: "Ôn tập tỉ số, tỉ số phần trăm",
    week: "33",

    practice: `
        <div class="space-y-10 pb-10">

            <!-- Bài 1: Chọn câu trả lời đúng -->
            <div id="lesson160_b1" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-blue-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">1</div>
                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Chọn câu trả lời đúng</h3>
                </div>
                <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Lớp 5A có 32 bạn. Để chuẩn bị cho chuyến đi tham quan dã ngoại, cả lớp đã thống nhất chọn một trong hai phương án: lên rừng hoặc xuống biển. Kết quả lấy ý kiến của các bạn như sau: <span class="font-black text-emerald-700">13 bạn chọn lên rừng</span>, <span class="font-black text-blue-700">19 bạn chọn xuống biển</span>. Như vậy:
                    </p>
                    <p class="text-lg md:text-xl font-black text-blue-800">Tỉ số của số bạn chọn lên rừng và số bạn chọn xuống biển là:</p>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <button onclick="window.select160_1('A')" id="btn-160-1-A" class="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border-4 border-blue-100 hover:border-blue-400 transition-all text-2xl font-black">
                            <span class="text-blue-400 text-lg">A.</span>
                            <div class="flex flex-col items-center"><span>13</span><div class="w-10 h-0.5 bg-gray-800"></div><span>32</span></div>
                        </button>
                        <button onclick="window.select160_1('B')" id="btn-160-1-B" class="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border-4 border-blue-100 hover:border-blue-400 transition-all text-2xl font-black">
                            <span class="text-blue-400 text-lg">B.</span>
                            <div class="flex flex-col items-center"><span>19</span><div class="w-10 h-0.5 bg-gray-800"></div><span>32</span></div>
                        </button>
                        <button onclick="window.select160_1('C')" id="btn-160-1-C" class="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border-4 border-blue-100 hover:border-blue-400 transition-all text-2xl font-black">
                            <span class="text-blue-400 text-lg">C.</span>
                            <div class="flex flex-col items-center"><span>13</span><div class="w-10 h-0.5 bg-gray-800"></div><span>19</span></div>
                        </button>
                        <button onclick="window.select160_1('D')" id="btn-160-1-D" class="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border-4 border-blue-100 hover:border-blue-400 transition-all text-2xl font-black">
                            <span class="text-blue-400 text-lg">D.</span>
                            <div class="flex flex-col items-center"><span>19</span><div class="w-10 h-0.5 bg-gray-800"></div><span>13</span></div>
                        </button>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-160-1').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-160-1" onclick="window.check_160_1()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-160-1" class="hidden bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg font-bold text-blue-900">
                    <p>Tỉ số của số bạn chọn lên rừng (13) và số bạn chọn xuống biển (19) là 13/19.</p>
                    <p>Đáp án đúng: <span class="text-emerald-700">C. 13/19</span></p>
                </div>
            </div>

            <!-- Bài 2: Quyển sách lớp 5A và 5B -->
            <div id="lesson160_b2" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-emerald-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">2</div>
                    <h3 class="text-xl md:text-2xl font-black text-emerald-700">Bài 2. Giải bài toán</h3>
                </div>
                <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Hưởng ứng phong trào quyên góp sách vào thư viện để xây dựng tủ sách dùng chung, lớp 5A và lớp 5B quyên góp được <span class="font-black text-blue-700">126 quyển sách</span>. Biết rằng số quyển sách lớp 5A quyên góp bằng <span class="font-black text-blue-700">5/4</span> số quyển sách lớp 5B quyên góp. Hỏi mỗi lớp quyên góp bao nhiêu quyển sách vào thư viện?
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-emerald-900 font-bold mb-1">Lớp 5A quyên góp:</label>
                            <div class="flex items-center gap-2 flex-wrap">
                                <input id="160-2-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                                <span class="font-bold">quyển</span>
                            </div>
                        </div>
                        <div>
                            <label class="block text-emerald-900 font-bold mb-1">Lớp 5B quyên góp:</label>
                            <div class="flex items-center gap-2 flex-wrap">
                                <input id="160-2-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                                <span class="font-bold">quyển</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-160-2').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-160-2" onclick="window.check_160_2()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-160-2" class="hidden bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-lg font-bold text-emerald-900 space-y-1">
                    <p>Tỉ số 5A : 5B = 5 : 4. Tổng số phần = 5 + 4 = 9 phần.</p>
                    <p>5B = 126 : 9 × 4 = <span class="text-blue-700">56 quyển</span></p>
                    <p>5A = 126 : 9 × 5 = <span class="text-blue-700">70 quyển</span></p>
                    <p>Chúc mừng em đã giải đúng!</p>
                </div>
            </div>

            <!-- Bài 3: Bản đồ trường tiểu học -->
            <div id="lesson160_b3" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-amber-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">3</div>
                    <div>
                        <span class="inline-flex items-center gap-2 px-2 py-1 bg-amber-100 rounded-lg text-amber-800 font-black text-sm">Số ?</span>
                        <h3 class="text-xl md:text-2xl font-black text-amber-800 mt-1">Bài 3. Bản đồ quy hoạch</h3>
                    </div>
                </div>
                <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Trên bản đồ tỉ lệ <span class="font-black text-blue-700">1 : 3 000</span> của một khu đô thị, thửa đất xây dựng trường tiểu học là hình chữ nhật có chiều dài <span class="font-black text-blue-700">3 cm</span>, chiều rộng <span class="font-black text-blue-700">2 cm</span>.
                    </p>
                    <img src="assets/images/toan/toan_tap_2/160/160-3-ban-do.png" class="max-w-[600px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Bản đồ quy hoạch khu đô thị tỉ lệ 1:3000">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-amber-900 font-bold mb-1">a) Chiều dài thật của thửa đất (m):</label>
                            <div class="flex items-center gap-2 flex-wrap">
                                <input id="160-3-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                                <span class="font-bold">m</span>
                            </div>
                        </div>
                        <div>
                            <label class="block text-amber-900 font-bold mb-1">b) Chiều rộng thật của thửa đất (m):</label>
                            <div class="flex items-center gap-2 flex-wrap">
                                <input id="160-3-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                                <span class="font-bold">m</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-160-3').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-160-3" onclick="window.check_160_3()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-160-3" class="hidden bg-amber-50 p-4 rounded-2xl border border-amber-200 text-lg font-bold text-amber-900 space-y-1">
                    <p>Tỉ lệ 1 : 3 000, tức là 1 cm trên bản đồ = 3 000 cm = 30 m thực tế.</p>
                    <p>a) Chiều dài thật: 3 × 3 000 = 9 000 cm = <span class="text-emerald-700">90 m</span></p>
                    <p>b) Chiều rộng thật: 2 × 3 000 = 6 000 cm = <span class="text-emerald-700">60 m</span></p>
                    <p>Chúc mừng em đã giải đúng!</p>
                </div>
            </div>

            <!-- Bài 4: Mai và Việt gấp ngôi sao -->
            <div id="lesson160_b4" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-rose-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">4</div>
                    <h3 class="text-xl md:text-2xl font-black text-rose-700">Bài 4. Giải bài toán</h3>
                </div>
                <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Mai và Việt gấp ngôi sao giấy tặng Nam nhân ngày sinh nhật. Việt gấp được ít hơn Mai <span class="font-black text-blue-700">11 ngôi sao</span> và số ngôi sao Việt gấp được bằng <span class="font-black text-blue-700">4/5</span> số ngôi sao Mai gấp được. Hỏi cả hai bạn đã gấp được bao nhiêu ngôi sao?
                    </p>
                    <div class="flex items-center gap-3 flex-wrap">
                        <span class="font-bold text-gray-700 text-lg">Số ngôi sao cả hai bạn gấp được:</span>
                        <input id="160-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                        <span class="font-bold text-gray-700">ngôi sao</span>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-160-4').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-160-4" onclick="window.check_160_4()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-160-4" class="hidden bg-rose-50 p-4 rounded-2xl border border-rose-200 text-lg font-bold text-rose-900 space-y-1">
                    <p>Tỉ số Việt : Mai = 4 : 5. Hiệu = 11 ngôi sao = 5 − 4 = 1 phần.</p>
                    <p>Mỗi phần = 11 ngôi sao.</p>
                    <p>Mai gấp: 11 × 5 = 55 ngôi sao. Việt gấp: 11 × 4 = 44 ngôi sao.</p>
                    <p>Cả hai: 55 + 44 = <span class="text-emerald-700">99 ngôi sao</span></p>
                    <p>Chúc mừng em đã giải đúng!</p>
                </div>
            </div>

        </div>
    `,

    quizPool: [
        { question: "Tỉ số của 13 bạn lên rừng và 19 bạn xuống biển là?", options: ["13/19", "19/13", "13/32", "19/32"], answer: 0 },
        { question: "Lớp 5A quyên góp bằng 5/4 lớp 5B. Tỉ số 5A : 5B là?", options: ["5 : 4", "4 : 5", "5 : 9", "4 : 9"], answer: 0 },
        { question: "Tổng số phần trong bài tổng-tỉ của bài 2 là?", options: ["9", "5", "4", "10"], answer: 0 },
        { question: "Lớp 5B quyên góp bao nhiêu quyển sách?", options: ["56", "70", "63", "50"], answer: 0 },
        { question: "Lớp 5A quyên góp bao nhiêu quyển sách?", options: ["70", "56", "63", "80"], answer: 0 },
        { question: "Tỉ lệ bản đồ 1 : 3 000. 1 cm bản đồ = ? m thực tế", options: ["30 m", "3 m", "300 m", "3 000 m"], answer: 0 },
        { question: "Chiều dài thật của thửa đất trường = ?", options: ["90 m", "9 m", "900 m", "60 m"], answer: 0 },
        { question: "Chiều rộng thật của thửa đất trường = ?", options: ["60 m", "6 m", "600 m", "90 m"], answer: 0 },
        { question: "Hiệu số ngôi sao Mai và Việt gấp là 11. Tỉ số 4:5 thì hiệu số phần là?", options: ["1", "4", "5", "9"], answer: 0 },
        { question: "Mai gấp được bao nhiêu ngôi sao?", options: ["55", "44", "99", "11"], answer: 0 },
        { question: "Việt gấp được bao nhiêu ngôi sao?", options: ["44", "55", "99", "11"], answer: 0 },
        { question: "Cả Mai và Việt gấp tổng cộng bao nhiêu ngôi sao?", options: ["99", "88", "110", "55"], answer: 0 },
        { question: "Trong bài tổng-tỉ số, tổng số phần bằng?", options: ["Tổng hai số chia cho tổng số phần", "Tổng hai số nhân cho tỉ số", "Hiệu chia tỉ số", "Tổng hai số trừ tỉ số"], answer: 0 },
        { question: "Diện tích thật của thửa đất trường tiểu học là?", options: ["5 400 m²", "540 m²", "54 000 m²", "180 m²"], answer: 0 },
        { question: "Tỉ số của a và b (b ≠ 0) là?", options: ["a : b", "b : a", "a + b", "a × b"], answer: 0 }
    ]
};

window.lesson160 = lesson160;

window._sel160_1 = null;
window.select160_1 = function(opt) {
    ['A','B','C','D'].forEach(o => {
        const b = document.getElementById('btn-160-1-'+o);
        if (b) b.className = 'flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border-4 border-blue-100 hover:border-blue-400 transition-all text-2xl font-black';
    });
    const sel = document.getElementById('btn-160-1-'+opt);
    if (sel) sel.className = 'flex flex-col items-center gap-2 p-4 bg-blue-100 rounded-2xl border-4 border-blue-500 transition-all text-2xl font-black';
    window._sel160_1 = opt;
};

window.check_160_1 = function() {
    const isCorrect = window._sel160_1 === 'C';
    window.showMathFeedback(isCorrect,
        "C. 13/19",
        "",
        "Gợi ý: Tỉ số của số bạn chọn lên rừng (A) và số bạn chọn xuống biển (B) là A : B = A/B.",
        "Tỉ số của 13 bạn lên rừng và 19 bạn xuống biển là 13/19.<br>Đáp án: C. 13/19<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Chọn câu trả lời đúng", isCorrect?100:0, "btn-check-160-1", 0, 1, isCorrect?1:0);
};

window.check_160_2 = function() {
    const v1 = document.getElementById('160-2-1')?.value.trim().replace(/\s/g,'') || '';
    const v2 = document.getElementById('160-2-2')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = (v1 === '70' && v2 === '56');
    window.showMathFeedback(isCorrect,
        "Lớp 5A: 70 quyển, Lớp 5B: 56 quyển",
        "",
        "Gợi ý: Dùng phương pháp bài toán tổng-tỉ số. Vẽ sơ đồ với 5A = 5 phần, 5B = 4 phần.",
        "Tổng phần: 5 + 4 = 9. Mỗi phần: 126 : 9 = 14 quyển.<br>5B: 14 × 4 = 56 quyển; 5A: 14 × 5 = 70 quyển.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Quyên góp sách", isCorrect?100:0, "btn-check-160-2", 0, 1, isCorrect?1:0);
};

window.check_160_3 = function() {
    const v1 = document.getElementById('160-3-1')?.value.trim().replace(/\s/g,'') || '';
    const v2 = document.getElementById('160-3-2')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = (v1 === '90' && v2 === '60');
    window.showMathFeedback(isCorrect,
        "a) 90 m; b) 60 m",
        "",
        "Gợi ý: Tỉ lệ 1 : 3 000 nghĩa là 1 cm trên bản đồ = 3 000 cm = 30 m thực tế. Nhân chiều dài/rộng bản đồ với 3 000 cm rồi đổi ra mét.",
        "1 cm bản đồ = 3 000 cm = 30 m thực tế.<br>a) Chiều dài: 3 × 30 = 90 m.<br>b) Chiều rộng: 2 × 30 = 60 m.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Bản đồ tỉ lệ", isCorrect?100:0, "btn-check-160-3", 0, 1, isCorrect?1:0);
};

window.check_160_4 = function() {
    const v = document.getElementById('160-4')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = v === '99';
    window.showMathFeedback(isCorrect,
        "99 ngôi sao",
        "",
        "Gợi ý: Dùng phương pháp bài toán hiệu-tỉ số. Tỉ số Việt : Mai = 4 : 5, hiệu = 11.",
        "Hiệu số phần: 5 − 4 = 1 phần = 11 ngôi sao.<br>Mai: 11 × 5 = 55; Việt: 11 × 4 = 44.<br>Tổng: 55 + 44 = 99 ngôi sao.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Mai và Việt gấp ngôi sao", isCorrect?100:0, "btn-check-160-4", 0, 1, isCorrect?1:0);
};

import './logic.js';
