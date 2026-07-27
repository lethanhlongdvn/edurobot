export const lesson157 = {
    period: "157",
    title: "BÀI 69: ÔN TẬP CÁC PHÉP TÍNH VỚI SỐ TỰ NHIÊN, PHÂN SỐ, SỐ THẬP PHÂN (TIẾT 2)",
    topic: "Ôn tập các phép tính",
    week: "32",

    practice: `
        <div class="space-y-10 pb-10">

            <!-- Bài 1: Tính rồi thử lại -->
            <div id="lesson157_b1" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-blue-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">1</div>
                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Tính rồi thử lại (theo mẫu)</h3>
                </div>

                <!-- Mẫu phép cộng & trừ phân số -->
                <div class="bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg md:text-xl font-bold text-blue-900 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p>Mẫu: 54,73 + 36,24 = 90,97</p>
                        <p class="text-blue-700">Thử lại: 90,97 − 36,24 = 54,73 ✓</p>
                    </div>
                    <div>
                        <p>Mẫu phân số: 8/5 − 2/3 = 14/15</p>
                        <p class="text-blue-700">Thử lại: 14/15 + 2/3 = 8/5 ✓</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- a) 8 549 + 9 627 -->
                    <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-3">
                        <p class="text-lg md:text-2xl font-black text-amber-900">a) 8 549 + 9 627</p>
                        <div>
                            <label class="block text-gray-600 font-medium mb-1">Tính:</label>
                            <input type="text" id="157-1-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-full h-10 border-2 border-gray-300 rounded-xl font-bold text-center" placeholder="Kết quả">
                        </div>
                        <div class="pt-2 border-t border-amber-200">
                            <label class="block text-amber-800 font-bold mb-1">Thử lại (KQ − 9 627):</label>
                            <input type="text" id="157-1-1-t" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-full h-10 border-2 border-amber-300 rounded-xl font-bold text-center" placeholder="= 8 549?">
                        </div>
                    </div>

                    <!-- b) 35,71 − 29,4 -->
                    <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-3">
                        <p class="text-lg md:text-2xl font-black text-emerald-900">b) 35,71 − 29,4</p>
                        <div>
                            <label class="block text-gray-600 font-medium mb-1">Tính:</label>
                            <input type="text" id="157-1-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-full h-10 border-2 border-gray-300 rounded-xl font-bold text-center" placeholder="Kết quả">
                        </div>
                        <div class="pt-2 border-t border-emerald-200">
                            <label class="block text-emerald-800 font-bold mb-1">Thử lại (KQ + 29,4):</label>
                            <input type="text" id="157-1-2-t" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-full h-10 border-2 border-emerald-300 rounded-xl font-bold text-center" placeholder="= 35,71?">
                        </div>
                    </div>

                    <!-- c) 11/9 − 3/4 -->
                    <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-3">
                        <p class="text-lg md:text-2xl font-black text-rose-900">c) 11/9 − 3/4</p>
                        <div>
                            <label class="block text-gray-600 font-medium mb-1">Tính (tử/mẫu):</label>
                            <div class="flex items-center justify-center gap-2">
                                <input type="text" id="157-1-3-n" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 border-2 border-gray-300 rounded-lg font-bold text-center" placeholder="Tử">
                                <span class="text-2xl font-black">/</span>
                                <input type="text" id="157-1-3-d" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 border-2 border-gray-300 rounded-lg font-bold text-center" placeholder="Mẫu">
                            </div>
                        </div>
                        <div class="pt-2 border-t border-rose-200">
                            <label class="block text-rose-800 font-bold mb-1">Thử lại (KQ + 3/4 = 11/9?):</label>
                            <div class="flex items-center justify-center gap-2">
                                <input type="text" id="157-1-3-tn" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 border-2 border-rose-300 rounded-lg font-bold text-center" placeholder="Tử">
                                <span class="text-2xl font-black">/</span>
                                <input type="text" id="157-1-3-td" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 border-2 border-rose-300 rounded-lg font-bold text-center" placeholder="Mẫu">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bài giải -->
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-157-1').classList.toggle('hidden')"
                        class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">
                        Hiện bài giải
                    </button>
                    <button id="btn-check-157-1" onclick="window.check_157_1()"
                        class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-157-1" class="hidden bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg font-bold text-blue-900 space-y-1">
                    <p>a) 8 549 + 9 627 = <span class="text-emerald-700">18 176</span>. Thử lại: 18 176 − 9 627 = 8 549 ✓</p>
                    <p>b) 35,71 − 29,4 = <span class="text-emerald-700">6,31</span>. Thử lại: 6,31 + 29,4 = 35,71 ✓</p>
                    <p>c) 11/9 − 3/4 = 44/36 − 27/36 = <span class="text-emerald-700">17/36</span>. Thử lại: 17/36 + 3/4 = 17/36 + 27/36 = 44/36 = 11/9 ✓</p>
                </div>
            </div>

            <!-- Bài 2: Tính giá trị biểu thức -->
            <div id="lesson157_b2" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-emerald-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">2</div>
                    <h3 class="text-xl md:text-2xl font-black text-emerald-700">Bài 2. Tính giá trị của biểu thức</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-3">
                        <p class="text-lg md:text-2xl font-black text-blue-900">a) 175 − (59,3 + 35,7) − 24,5</p>
                        <div class="flex items-center gap-3 flex-wrap">
                            <span class="font-bold text-gray-700">Đáp số:</span>
                            <input type="text" id="157-2-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 border-2 border-gray-300 rounded-xl font-bold text-center" placeholder="?">
                        </div>
                    </div>
                    <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-3">
                        <p class="text-lg md:text-2xl font-black text-rose-900">b) 13/18 + (7/6 − 7/12 − 1/4)</p>
                        <div class="flex items-center gap-3 flex-wrap">
                            <span class="font-bold text-gray-700">Đáp số (a/b):</span>
                            <div class="flex items-center gap-2">
                                <input type="text" id="157-2-2-n" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 border-2 border-gray-300 rounded-lg font-bold text-center" placeholder="Tử">
                                <span class="text-2xl font-black">/</span>
                                <input type="text" id="157-2-2-d" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 border-2 border-gray-300 rounded-lg font-bold text-center" placeholder="Mẫu">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-157-2').classList.toggle('hidden')"
                        class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">
                        Hiện bài giải
                    </button>
                    <button id="btn-check-157-2" onclick="window.check_157_2()"
                        class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-157-2" class="hidden bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-lg font-bold text-emerald-900 space-y-1">
                    <p>a) 175 − (59,3 + 35,7) − 24,5 = 175 − 95 − 24,5 = 80 − 24,5 = <span class="text-blue-700">55,5</span></p>
                    <p>b) 13/18 + (7/6 − 7/12 − 1/4) = 13/18 + (14/12 − 7/12 − 3/12) = 13/18 + 4/12 = 13/18 + 6/18 = <span class="text-blue-700">19/18</span></p>
                </div>
            </div>

            <!-- Bài 3: Chú Tư mua ti vi -->
            <div id="lesson157_b3" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-amber-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">3</div>
                    <div><span class="inline-flex items-center gap-2 px-2 py-1 bg-amber-100 rounded-lg text-amber-800 font-black text-sm">Số ?</span>
                    <h3 class="text-xl md:text-2xl font-black text-amber-800 mt-1">Bài 3. Bài toán thực tế</h3></div>
                </div>

                <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Khi chuyển về nhà mới, chú Tư mua một ti vi, một tủ kệ ti vi và một bộ loa thùng hết <span class="font-black text-blue-700">17 100 000 đồng</span>. Biết rằng số tiền mua ti vi và bộ loa thùng là <span class="font-black text-blue-700">13 600 000 đồng</span>, số tiền mua ti vi nhiều hơn số tiền mua bộ loa thùng là <span class="font-black text-blue-700">4 200 000 đồng</span>.
                    </p>
                    <img src="assets/images/toan/toan_tap_2/157/157-3-tivi-loa.png" class="max-w-[600px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Ti vi và loa thùng">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label class="block text-amber-900 font-bold mb-1">a) Giá ti vi (đồng):</label>
                            <input type="text" id="157-3-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-full h-10 border-2 border-amber-300 rounded-xl font-bold text-center" placeholder="?">
                        </div>
                        <div>
                            <label class="block text-amber-900 font-bold mb-1">b) Giá tủ kệ ti vi (đồng):</label>
                            <input type="text" id="157-3-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-full h-10 border-2 border-amber-300 rounded-xl font-bold text-center" placeholder="?">
                        </div>
                        <div>
                            <label class="block text-amber-900 font-bold mb-1">c) Giá bộ loa (đồng):</label>
                            <input type="text" id="157-3-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-full h-10 border-2 border-amber-300 rounded-xl font-bold text-center" placeholder="?">
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-157-3').classList.toggle('hidden')"
                        class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">
                        Hiện bài giải
                    </button>
                    <button id="btn-check-157-3" onclick="window.check_157_3()"
                        class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-157-3" class="hidden bg-amber-50 p-4 rounded-2xl border border-amber-200 text-lg font-bold text-amber-900 space-y-1">
                    <p>Ti vi nhiều hơn loa: 4 200 000 đồng</p>
                    <p>Tổng (ti vi + loa) = 13 600 000 đồng</p>
                    <p>Giá ti vi = (13 600 000 + 4 200 000) : 2 = <span class="text-emerald-700">8 900 000 đồng</span></p>
                    <p>Giá loa = 13 600 000 − 8 900 000 = <span class="text-emerald-700">4 700 000 đồng</span></p>
                    <p>Giá tủ kệ = 17 100 000 − 13 600 000 = <span class="text-emerald-700">3 500 000 đồng</span></p>
                </div>
            </div>

            <!-- Bài 4: Bánh chưng -->
            <div id="lesson157_b4" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-rose-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">4</div>
                    <h3 class="text-xl md:text-2xl font-black text-rose-700">Bài 4. Giải bài toán</h3>
                </div>
                <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Buổi sáng, mẹ bóc một cái bánh chưng. Mai ăn <span class="font-black text-blue-700">1/8</span> cái bánh chưng, bố ăn <span class="font-black text-blue-700">1/4</span> cái bánh chưng. Hỏi còn lại bao nhiêu phần bánh chưng chưa ăn?
                    </p>
                    <div class="flex items-center gap-3 flex-wrap">
                        <span class="font-bold text-gray-700 text-lg">Đáp số (a/b):</span>
                        <div class="flex items-center gap-2">
                            <input type="text" id="157-4-n" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 border-2 border-rose-300 rounded-lg font-bold text-center" placeholder="Tử">
                            <span class="text-2xl font-black">/</span>
                            <input type="text" id="157-4-d" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 border-2 border-rose-300 rounded-lg font-bold text-center" placeholder="Mẫu">
                        </div>
                        <span class="font-bold text-gray-700 text-lg">cái bánh chưng</span>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-157-4').classList.toggle('hidden')"
                        class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">
                        Hiện bài giải
                    </button>
                    <button id="btn-check-157-4" onclick="window.check_157_4()"
                        class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-157-4" class="hidden bg-rose-50 p-4 rounded-2xl border border-rose-200 text-lg font-bold text-rose-900 space-y-1">
                    <p>Mai và bố ăn: 1/8 + 1/4 = 1/8 + 2/8 = 3/8 cái bánh chưng</p>
                    <p>Bánh chưng còn lại: 1 − 3/8 = 8/8 − 3/8 = <span class="text-emerald-700">5/8 cái bánh chưng</span></p>
                    <p>Chúc mừng em đã giải đúng!</p>
                </div>
            </div>

        </div>
    `,

    quizPool: [
        { question: "Thử lại phép cộng a + b = c bằng cách nào?", options: ["Lấy c − b", "Lấy c + b", "Lấy a − b", "Lấy b − c"], answer: 0 },
        { question: "8 549 + 9 627 = ?", options: ["18 176", "18 276", "17 176", "18 166"], answer: 0 },
        { question: "35,71 − 29,4 = ?", options: ["6,31", "6,41", "5,31", "6,21"], answer: 0 },
        { question: "11/9 − 3/4 = ? (rút gọn nhất)", options: ["17/36", "8/5", "14/36", "17/18"], answer: 0 },
        { question: "175 − (59,3 + 35,7) − 24,5 = ?", options: ["55,5", "65,5", "56,5", "45,5"], answer: 0 },
        { question: "13/18 + (7/6 − 7/12 − 1/4) = ?", options: ["19/18", "1", "13/18", "2"], answer: 0 },
        { question: "Giá ti vi: (13 600 000 + 4 200 000) : 2 = ?", options: ["8 900 000", "9 000 000", "8 800 000", "8 700 000"], answer: 0 },
        { question: "Giá tủ kệ ti vi = 17 100 000 − 13 600 000 = ?", options: ["3 500 000", "4 000 000", "3 200 000", "3 600 000"], answer: 0 },
        { question: "Mai ăn 1/8, bố ăn 1/4 bánh chưng. Tổng hai phần ăn là?", options: ["3/8", "2/8", "3/4", "1/4"], answer: 0 },
        { question: "Bánh chưng còn lại sau khi Mai và bố ăn là?", options: ["5/8", "7/8", "3/8", "6/8"], answer: 0 },
        { question: "Muốn thử lại phép trừ a − b = c, ta làm thế nào?", options: ["Lấy c + b", "Lấy a + b", "Lấy b − c", "Lấy a − c"], answer: 0 },
        { question: "1/8 + 1/4 = ?", options: ["3/8", "2/8", "1/4", "1/2"], answer: 0 },
        { question: "59,3 + 35,7 = ?", options: ["95", "94", "96", "95,5"], answer: 0 },
        { question: "7/6 − 7/12 − 1/4 = ? (quy đồng mẫu số 12)", options: ["4/12", "3/12", "5/12", "6/12"], answer: 0 },
        { question: "Giá loa thùng = 13 600 000 − 8 900 000 = ?", options: ["4 700 000", "4 600 000", "4 800 000", "5 000 000"], answer: 0 }
    ]
};

window.lesson157 = lesson157;

window.check_157_1 = function() {
    const checks = [
        { id: '157-1-1', ans: ['18176','18 176'] },
        { id: '157-1-1-t', ans: ['8549','8 549'] },
        { id: '157-1-2', ans: ['6,31','6.31'] },
        { id: '157-1-2-t', ans: ['35,71','35.71'] },
        { id: '157-1-3-n', ans: ['17'] },
        { id: '157-1-3-d', ans: ['36'] },
        { id: '157-1-3-tn', ans: ['11'] },
        { id: '157-1-3-td', ans: ['9'] },
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
        "a) 18 176; thử lại 8 549.<br>b) 6,31; thử lại 35,71.<br>c) 17/36; thử lại 11/9.",
        "",
        "Gợi ý: Tính kết quả rồi thử lại bằng phép tính ngược (cộng thì thử bằng trừ và ngược lại).",
        "a) 8 549 + 9 627 = 18 176, thử 18 176 − 9 627 = 8 549 ✓<br>b) 35,71 − 29,4 = 6,31, thử 6,31 + 29,4 = 35,71 ✓<br>c) 11/9 − 3/4 = 44/36 − 27/36 = 17/36, thử 17/36 + 27/36 = 44/36 = 11/9 ✓<br>Chúc mừng em đã làm đúng!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Tính rồi thử lại", Math.round(correct/checks.length*100), "btn-check-157-1", 0, checks.length, correct);
};

window.check_157_2 = function() {
    const checks = [
        { id: '157-2-1', ans: ['55,5','55.5'] },
        { id: '157-2-2-n', ans: ['19'] },
        { id: '157-2-2-d', ans: ['18'] },
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
        "a) 55,5<br>b) 19/18",
        "",
        "Gợi ý: Tính trong ngoặc trước, sau đó thực hiện các phép tính theo thứ tự từ trái sang phải.",
        "a) 175 − (59,3 + 35,7) − 24,5 = 175 − 95 − 24,5 = 55,5<br>b) 7/6 − 7/12 − 1/4 = 14/12 − 7/12 − 3/12 = 4/12 = 1/3; 13/18 + 1/3 = 13/18 + 6/18 = 19/18<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Tính giá trị biểu thức", Math.round(correct/checks.length*100), "btn-check-157-2", 0, checks.length, correct);
};

window.check_157_3 = function() {
    const checks = [
        { id: '157-3-1', ans: ['8900000','8 900 000','8900 000'] },
        { id: '157-3-2', ans: ['3500000','3 500 000','3500 000'] },
        { id: '157-3-3', ans: ['4700000','4 700 000','4700 000'] },
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
        "a) Ti vi: 8 900 000 đồng<br>b) Tủ kệ: 3 500 000 đồng<br>c) Loa: 4 700 000 đồng",
        "",
        "Gợi ý: Dùng bài toán tổng-hiệu để tìm giá ti vi và giá loa. Sau đó tính giá tủ kệ từ tổng ban đầu.",
        "Ti vi = (13 600 000 + 4 200 000) : 2 = 8 900 000 đồng<br>Loa = 13 600 000 − 8 900 000 = 4 700 000 đồng<br>Tủ kệ = 17 100 000 − 13 600 000 = 3 500 000 đồng<br>Chúc mừng em đã giải đúng!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Bài toán thực tế", Math.round(correct/checks.length*100), "btn-check-157-3", 0, checks.length, correct);
};

window.check_157_4 = function() {
    const n = document.getElementById('157-4-n')?.value.trim() || '';
    const d = document.getElementById('157-4-d')?.value.trim() || '';
    const isCorrect = (n === '5' && d === '8');
    window.showMathFeedback(isCorrect,
        "5/8 cái bánh chưng",
        "",
        "Gợi ý: Tính tổng phần Mai và bố đã ăn, rồi lấy 1 (cả bánh) trừ đi tổng đó.",
        "Mai + Bố ăn: 1/8 + 2/8 = 3/8 cái bánh chưng.<br>Còn lại: 1 − 3/8 = 5/8 cái bánh chưng.<br>Chúc mừng em đã giải đúng!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Bánh chưng", isCorrect ? 100 : 0, "btn-check-157-4", 0, 1, isCorrect ? 1 : 0);
};

import './logic.js';
