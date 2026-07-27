export const lesson173 = {
    period: "173",
    title: "BÀI 75: ÔN TẬP CHUNG (TIẾT 2)",
    topic: "Ôn tập các phép tính với số tự nhiên, số thập phân, phân số, số đo thời gian và đại số",
    week: "35",

    practice: `
        <div class="space-y-10 pb-10">

            <!-- Bài 1: Đặt tính rồi tính số tự nhiên -->
            <div id="lesson173_b1" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-blue-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">1</div>
                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Đặt tính rồi tính (Phép tính số tự nhiên)</h3>
                </div>
                <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-4 font-bold text-lg">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>a) 2 564 + 3 819 =</span>
                            <input id="173-1-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>b) 62 835 − 24 173 =</span>
                            <input id="173-1-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>c) 342 × 14 =</span>
                            <input id="173-1-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>d) 2 625 : 15 =</span>
                            <input id="173-1-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-173-1').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-173-1" onclick="window.check_173_1()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-173-1" class="hidden bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg font-bold text-blue-900 space-y-1">
                    <p>a) 2 564 + 3 819 = <span class="text-emerald-700">6 383</span></p>
                    <p>b) 62 835 − 24 173 = <span class="text-emerald-700">38 662</span></p>
                    <p>c) 342 × 14 = <span class="text-emerald-700">4 788</span></p>
                    <p>d) 2 625 : 15 = <span class="text-emerald-700">175</span></p>
                </div>
            </div>

            <!-- Bài 2: Đặt tính rồi tính số thập phân -->
            <div id="lesson173_b2" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-emerald-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">2</div>
                    <h3 class="text-xl md:text-2xl font-black text-emerald-700">Bài 2. Đặt tính rồi tính (Phép tính số thập phân)</h3>
                </div>
                <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-4 font-bold text-lg">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>a) 148,32 + 270,84 =</span>
                            <input id="173-2-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>b) 197,25 − 92,73 =</span>
                            <input id="173-2-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>c) 34,6 × 5,7 =</span>
                            <input id="173-2-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>d) 28,8 : 4,5 =</span>
                            <input id="173-2-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-173-2').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-173-2" onclick="window.check_173_2()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-173-2" class="hidden bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-lg font-bold text-emerald-900 space-y-1">
                    <p>a) 148,32 + 270,84 = <span class="text-blue-700">419,16</span></p>
                    <p>b) 197,25 − 92,73 = <span class="text-blue-700">104,52</span></p>
                    <p>c) 34,6 × 5,7 = <span class="text-blue-700">197,22</span></p>
                    <p>d) 28,8 : 4,5 = <span class="text-blue-700">6,4</span></p>
                </div>
            </div>

            <!-- Bài 3: Tính giá trị của biểu thức -->
            <div id="lesson173_b3" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-amber-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">3</div>
                    <h3 class="text-xl md:text-2xl font-black text-amber-700">Bài 3. Tính giá trị của biểu thức</h3>
                </div>
                <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4 font-bold text-lg">
                    <div class="space-y-4">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>a) 2 354 + 1 736 : 4 =</span>
                            <input id="173-3-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>b) 21,4 × (37,8 − 32,5) =</span>
                            <input id="173-3-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>c) 5/6 − 2/3 + 2/5 =</span>
                            <input id="173-3-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="17/30">
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-173-3').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-173-3" onclick="window.check_173_3()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-173-3" class="hidden bg-amber-50 p-4 rounded-2xl border border-amber-200 text-lg font-bold text-amber-900 space-y-1">
                    <p>a) 2 354 + 434 = <span class="text-emerald-700">2 788</span></p>
                    <p>b) 21,4 × 5,3 = <span class="text-emerald-700">113,42</span></p>
                    <p>c) 5/6 − 4/6 + 2/5 = 1/6 + 2/5 = 5/30 + 12/30 = <span class="text-emerald-700">17/30</span></p>
                </div>
            </div>

            <!-- Bài 4: Tính bằng cách thuận tiện -->
            <div id="lesson173_b4" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-rose-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">4</div>
                    <h3 class="text-xl md:text-2xl font-black text-rose-700">Bài 4. Tính bằng cách thuận tiện</h3>
                </div>
                <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-4 font-bold text-lg">
                    <div class="space-y-4">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>a) 137 × 25 + 137 × 75 =</span>
                            <input id="173-4-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>b) (4/9 + 3/5) + 5/9 =</span>
                            <input id="173-4-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="8/5">
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>c) 124,46 + 98,31 + 75,54 =</span>
                            <input id="173-4-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-173-4').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-173-4" onclick="window.check_173_4()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-173-4" class="hidden bg-rose-50 p-4 rounded-2xl border border-rose-200 text-lg font-bold text-rose-900 space-y-1">
                    <p>a) 137 × (25 + 75) = 137 × 100 = <span class="text-emerald-700">13 700</span></p>
                    <p>b) (4/9 + 5/9) + 3/5 = 1 + 3/5 = <span class="text-emerald-700">8/5</span> (hoặc 1,6)</p>
                    <p>c) (124,46 + 75,54) + 98,31 = 200 + 98,31 = <span class="text-emerald-700">298,31</span></p>
                </div>
            </div>

            <!-- Bài 5: Phép tính số đo thời gian & Bài 3 diện tích cắt giấy -->
            <div id="lesson173_b5" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-teal-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">5</div>
                    <h3 class="text-xl md:text-2xl font-black text-teal-700">Bài 5. Phép tính số đo thời gian & Chu vi diện tích hình</h3>
                </div>
                <div class="bg-teal-50 p-5 rounded-2xl border border-teal-200 space-y-4 font-bold text-lg">
                    <p class="font-black text-teal-900 text-xl">a) Tính số đo thời gian:</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>14 giờ 36 phút + 5 giờ 15 phút =</span>
                            <input id="173-5-h1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-teal-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>giờ</span>
                            <input id="173-5-m1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-teal-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>phút</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>10 giờ 15 phút − 6 giờ 30 phút =</span>
                            <input id="173-5-h2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-teal-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>giờ</span>
                            <input id="173-5-m2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-teal-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>phút</span>
                        </div>
                    </div>

                    <p class="font-black text-teal-900 text-xl border-t border-teal-200 pt-3">b) Cắt giấy màu 3 hình tam giác, thang, tròn:</p>
                    <img src="assets/images/toan/toan_tap_2/173/173-3-ba-hinh-cat.png" class="max-w-[450px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Ba hình tam giác thang tròn">
                    <div class="space-y-3">
                        <div class="flex items-center gap-3 flex-wrap">
                            <span>- Hình có diện tích lớn nhất:</span>
                            <button onclick="window.select173_5shape('A')" id="btn-173-5shape-A" class="px-3 py-1 bg-white rounded-lg border border-teal-300 font-bold">A. Tam giác</button>
                            <button onclick="window.select173_5shape('B')" id="btn-173-5shape-B" class="px-3 py-1 bg-white rounded-lg border border-teal-300 font-bold">B. Hình thang</button>
                            <button onclick="window.select173_5shape('C')" id="btn-173-5shape-C" class="px-3 py-1 bg-white rounded-lg border border-teal-300 font-bold">C. Hình tròn</button>
                        </div>
                        <div class="flex items-center gap-3 flex-wrap">
                            <span>- Chu vi hình tròn là:</span>
                            <input id="173-5-c" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-teal-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>cm</span>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-173-5').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-173-5" onclick="window.check_173_5()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-173-5" class="hidden bg-teal-50 p-4 rounded-2xl border border-teal-200 text-lg font-bold text-teal-900 space-y-1">
                    <p>a) 19 giờ 51 phút; 3 giờ 45 phút.</p>
                    <p>b) S_tam giác = 14×10/2 = 70cm²; S_thang = (12+8)×8/2 = 80cm²; S_tròn = 5×5×3,14 = 78,5cm².</p>
                    <p>Hình diện tích lớn nhất: <span class="text-emerald-700">B. Hình thang</span> (80 cm²).</p>
                    <p>Chu vi hình tròn: 5 × 2 × 3,14 = <span class="text-emerald-700">31,4 cm</span></p>
                </div>
            </div>

        </div>
    `,

    quizPool: [
        { question: "2 564 + 3 819 = ?", options: ["6 383", "6 373", "6 483", "6 283"], answer: 0 },
        { question: "62 835 − 24 173 = ?", options: ["38 662", "38 652", "37 662", "39 662"], answer: 0 },
        { question: "342 × 14 = ?", options: ["4 788", "4 688", "4 888", "4 778"], answer: 0 },
        { question: "2 625 : 15 = ?", options: ["175", "165", "185", "170"], answer: 0 },
        { question: "148,32 + 270,84 = ?", options: ["419,16", "419,15", "418,16", "420,16"], answer: 0 },
        { question: "197,25 − 92,73 = ?", options: ["104,52", "104,42", "105,52", "103,52"], answer: 0 },
        { question: "34,6 × 5,7 = ?", options: ["197,22", "197,12", "196,22", "198,22"], answer: 0 },
        { question: "28,8 : 4,5 = ?", options: ["6,4", "6,5", "6,2", "6,8"], answer: 0 },
        { question: "2 354 + 1 736 : 4 = ?", options: ["2 788", "2 888", "2 688", "1 022.5"], answer: 0 },
        { question: "21,4 × (37,8 − 32,5) = ?", options: ["113,42", "112,42", "114,42", "113,52"], answer: 0 },
        { question: "137 × 25 + 137 × 75 = ?", options: ["13 700", "137 000", "13 000", "14 000"], answer: 0 },
        { question: "124,46 + 98,31 + 75,54 = ?", options: ["298,31", "298,41", "297,31", "299,31"], answer: 0 },
        { question: "14 giờ 36 phút + 5 giờ 15 phút = ?", options: ["19 giờ 51 phút", "19 giờ 41 phút", "20 giờ 51 phút", "19 giờ 30 phút"], answer: 0 },
        { question: "10 giờ 15 phút − 6 giờ 30 phút = ?", options: ["3 giờ 45 phút", "4 giờ 15 phút", "3 giờ 15 phút", "4 giờ 45 phút"], answer: 0 },
        { question: "Chu vi hình tròn bán kính 5 cm là?", options: ["31,4 cm", "78,5 cm", "15,7 cm", "314 cm"], answer: 0 }
    ]
};

window.lesson173 = lesson173;

window.check_173_1 = function() {
    const checks = [
        {id:'173-1-1', ans:['6383','6 383']},
        {id:'173-1-2', ans:['38662','38 662']},
        {id:'173-1-3', ans:['4788','4 788']},
        {id:'173-1-4', ans:['175']},
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
        "a) 6 383, b) 38 662, c) 4 788, d) 175",
        "",
        "Gợi ý: Đặt tính thẳng hàng các chữ số cùng hàng rồi thực hiện phép tính từ phải sang trái.",
        "a) 6 383, b) 38 662, c) 4 788, d) 175.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Phép tính số tự nhiên", Math.round(correct/checks.length*100), "btn-check-173-1", 0, checks.length, correct);
};

window.check_173_2 = function() {
    const checks = [
        {id:'173-2-1', ans:['419,16','419.16']},
        {id:'173-2-2', ans:['104,52','104.52']},
        {id:'173-2-3', ans:['197,22','197.22']},
        {id:'173-2-4', ans:['6,4','6.4']},
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
        "a) 419,16, b) 104,52, c) 197,22, d) 6,4",
        "",
        "Gợi ý: Chú ý vị trí dấu phẩy khi cộng, trừ, nhân, chia số thập phân.",
        "a) 419,16, b) 104,52, c) 197,22, d) 6,4.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Phép tính số thập phân", Math.round(correct/checks.length*100), "btn-check-173-2", 0, checks.length, correct);
};

window.check_173_3 = function() {
    const checks = [
        {id:'173-3-1', ans:['2788','2 788']},
        {id:'173-3-2', ans:['113,42','113.42']},
        {id:'173-3-3', ans:['17/30']},
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
        "a) 2 788, b) 113,42, c) 17/30",
        "",
        "Gợi ý: a) Thực hiện chia trước cộng sau. b) Thực hiện trong ngoặc trước. c) Quy đồng mẫu số chung là 30.",
        "a) 2 788, b) 113,42, c) 17/30.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Giá trị biểu thức", Math.round(correct/checks.length*100), "btn-check-173-3", 0, checks.length, correct);
};

window.check_173_4 = function() {
    const checks = [
        {id:'173-4-1', ans:['13700','13 700']},
        {id:'173-4-2', ans:['8/5','1,6','1.6']},
        {id:'173-4-3', ans:['298,31','298.31']},
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
        "a) 13 700, b) 8/5, c) 298,31",
        "",
        "Gợi ý: a) Nhân 1 số với 1 tổng. b) Nhóm phân số cùng mẫu 4/9+5/9=1. c) Nhóm 124,46+75,54=200.",
        "a) 13 700, b) 8/5, c) 298,31.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Tính thuận tiện", Math.round(correct/checks.length*100), "btn-check-173-4", 0, checks.length, correct);
};

window._sel173_5shape = null;
window.select173_5shape = function(opt) {
    ['A','B','C'].forEach(o => {
        const b = document.getElementById('btn-173-5shape-'+o);
        if (b) b.className = 'px-3 py-1 bg-white rounded-lg border border-teal-300 font-bold';
    });
    const sel = document.getElementById('btn-173-5shape-'+opt);
    if (sel) sel.className = 'px-3 py-1 bg-teal-200 rounded-lg border border-teal-500 font-bold';
    window._sel173_5shape = opt;
};

window.check_173_5 = function() {
    const v1 = document.getElementById('173-5-h1')?.value.trim() || '';
    const v2 = document.getElementById('173-5-m1')?.value.trim() || '';
    const v3 = document.getElementById('173-5-h2')?.value.trim() || '';
    const v4 = document.getElementById('173-5-m2')?.value.trim() || '';
    const vc = document.getElementById('173-5-c')?.value.trim().replace(',','.') || '';
    const isCorrect = (v1 === '19' && v2 === '51' && v3 === '3' && v4 === '45' && window._sel173_5shape === 'B' && (vc === '31.4' || vc === '31,4'));
    window.showMathFeedback(isCorrect,
        "a) 19 giờ 51 phút; 3 giờ 45 phút<br>b) Hình diện tích lớn nhất: B. Hình thang; Chu vi tròn: 31,4 cm",
        "",
        "Gợi ý: S_tam giác=70cm², S_thang=80cm², S_tròn=78,5cm². Chu vi tròn = r × 2 × 3,14.",
        "a) 19 giờ 51 phút; 3 giờ 45 phút.<br>b) B. Hình thang (80 cm²); Chu vi hình tròn: 31,4 cm.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 5. Thời gian & Hình học", isCorrect?100:0, "btn-check-173-5", 0, 1, isCorrect?1:0);
};

import './logic.js';
