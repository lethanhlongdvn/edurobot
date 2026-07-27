export const lesson161 = {
    period: "161",
    title: "BÀI 70: ÔN TẬP TỈ SỐ, TỈ SỐ PHẦN TRĂM (TIẾT 2)",
    topic: "Ôn tập tỉ số phần trăm",
    week: "33",

    practice: `
        <div class="space-y-10 pb-10">

            <!-- Bài 1: Tìm tỉ số phần trăm -->
            <div id="lesson161_b1" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-blue-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">1</div>
                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Tìm tỉ số phần trăm thích hợp</h3>
                </div>
                <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Lớp 5A có 32 học sinh, kết quả giáo dục cuối năm học của lớp như sau: <span class="font-black text-blue-700">8 học sinh</span> đạt mức Hoàn thành xuất sắc, <span class="font-black text-blue-700">12 học sinh</span> đạt mức Hoàn thành tốt, số học sinh còn lại đạt mức Hoàn thành.
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-center gap-3 flex-wrap">
                            <span class="text-lg font-bold text-gray-800">a) Số học sinh đạt mức Hoàn thành xuất sắc chiếm</span>
                            <input id="161-1-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?%">
                            <span class="text-lg font-bold text-gray-800">số học sinh cả lớp.</span>
                        </div>
                        <div class="flex items-center gap-3 flex-wrap">
                            <span class="text-lg font-bold text-gray-800">b) Số học sinh đạt mức Hoàn thành tốt chiếm</span>
                            <input id="161-1-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?%">
                            <span class="text-lg font-bold text-gray-800">số học sinh cả lớp.</span>
                        </div>
                        <div class="flex items-center gap-3 flex-wrap">
                            <span class="text-lg font-bold text-gray-800">c) Số học sinh đạt mức Hoàn thành chiếm</span>
                            <input id="161-1-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?%">
                            <span class="text-lg font-bold text-gray-800">số học sinh cả lớp.</span>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-161-1').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-161-1" onclick="window.check_161_1()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-161-1" class="hidden bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg font-bold text-blue-900 space-y-1">
                    <p>a) 8 : 32 × 100 = <span class="text-emerald-700">25%</span></p>
                    <p>b) 12 : 32 × 100 = <span class="text-emerald-700">37,5%</span></p>
                    <p>c) Còn lại: 32 − 8 − 12 = 12 học sinh. 12 : 32 × 100 = <span class="text-emerald-700">37,5%</span></p>
                </div>
            </div>

            <!-- Bài 2: Hồng treo gió -->
            <div id="lesson161_b2" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-emerald-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">2</div>
                    <h3 class="text-xl md:text-2xl font-black text-emerald-700">Bài 2. Giải bài toán</h3>
                </div>
                <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Khi làm hồng treo gió, người ta cứ phơi <span class="font-black text-blue-700">20 kg quả hồng tươi</span> thì thu được <span class="font-black text-blue-700">3,3 kg quả hồng khô</span>. Hỏi lượng nước trong quả hồng tươi đã mất đi là bao nhiêu phần trăm?
                    </p>
                    <img src="assets/images/toan/toan_tap_2/161/161-2-hong-treo-gio.png" class="max-w-[600px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Hồng treo gió phơi khô">
                    <div class="flex items-center gap-3 flex-wrap">
                        <span class="font-bold text-gray-700 text-lg">Lượng nước mất đi:</span>
                        <input id="161-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?%">
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-161-2').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-161-2" onclick="window.check_161_2()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-161-2" class="hidden bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-lg font-bold text-emerald-900 space-y-1">
                    <p>Lượng nước mất: 20 − 3,3 = 16,7 kg</p>
                    <p>Phần trăm: 16,7 : 20 × 100 = <span class="text-blue-700">83,5%</span></p>
                    <p>Chúc mừng em đã giải đúng!</p>
                </div>
            </div>

            <!-- Bài 3: Giá tiền 1 kg hồng treo gió -->
            <div id="lesson161_b3" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-amber-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">3</div>
                    <h3 class="text-xl md:text-2xl font-black text-amber-700">Bài 3. Giải bài toán</h3>
                </div>
                <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Giá tiền <span class="font-black text-blue-700">1 kg hồng treo gió</span> là <span class="font-black text-blue-700">350 000 đồng</span>. Mai mua <span class="font-black text-blue-700">1 kg hồng treo gió</span> vào Ngày Quốc tế Thiếu nhi nên được giảm giá <span class="font-black text-blue-700">10%</span>. Hỏi Mai phải trả người bán hàng bao nhiêu tiền?
                    </p>
                    <div class="flex items-center gap-3 flex-wrap">
                        <span class="font-bold text-gray-700 text-lg">Mai phải trả:</span>
                        <input id="161-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-36 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                        <span class="font-bold text-gray-700">đồng</span>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-161-3').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-161-3" onclick="window.check_161_3()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-161-3" class="hidden bg-amber-50 p-4 rounded-2xl border border-amber-200 text-lg font-bold text-amber-900 space-y-1">
                    <p>Số tiền giảm: 350 000 × 10 : 100 = 35 000 đồng</p>
                    <p>Mai trả: 350 000 − 35 000 = <span class="text-emerald-700">315 000 đồng</span></p>
                    <p>Chúc mừng em đã giải đúng!</p>
                </div>
            </div>

            <!-- Bài 4: Lãi suất tiết kiệm -->
            <div id="lesson161_b4" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-rose-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">4</div>
                    <h3 class="text-xl md:text-2xl font-black text-rose-700">Bài 4. Chọn câu trả lời đúng</h3>
                </div>
                <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Lãi suất tiết kiệm là <span class="font-black text-blue-700">8% một năm</span>. Cô Hoa gửi tiết kiệm <span class="font-black text-blue-700">50 000 000 đồng</span>. Hỏi sau hai năm, cô Hoa sẽ nhận được bao nhiêu tiền lãi? (Biết rằng tiền lãi năm trước được góp vào tiền gốc để gửi năm sau.)
                    </p>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <button onclick="window.select161_4('A')" id="btn-161-4-A" class="p-4 bg-white rounded-2xl border-4 border-rose-100 hover:border-rose-400 transition-all font-black text-lg text-center">
                            <span class="text-rose-400 text-base block">A.</span>4 000 000 đồng
                        </button>
                        <button onclick="window.select161_4('B')" id="btn-161-4-B" class="p-4 bg-white rounded-2xl border-4 border-rose-100 hover:border-rose-400 transition-all font-black text-lg text-center">
                            <span class="text-rose-400 text-base block">B.</span>8 000 000 đồng
                        </button>
                        <button onclick="window.select161_4('C')" id="btn-161-4-C" class="p-4 bg-white rounded-2xl border-4 border-rose-100 hover:border-rose-400 transition-all font-black text-lg text-center">
                            <span class="text-rose-400 text-base block">C.</span>8 320 000 đồng
                        </button>
                        <button onclick="window.select161_4('D')" id="btn-161-4-D" class="p-4 bg-white rounded-2xl border-4 border-rose-100 hover:border-rose-400 transition-all font-black text-lg text-center">
                            <span class="text-rose-400 text-base block">D.</span>8 400 000 đồng
                        </button>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-161-4').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-161-4" onclick="window.check_161_4()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-161-4" class="hidden bg-rose-50 p-4 rounded-2xl border border-rose-200 text-lg font-bold text-rose-900 space-y-1">
                    <p>Năm 1: Lãi = 50 000 000 × 8% = 4 000 000 đồng. Gốc mới = 54 000 000 đồng.</p>
                    <p>Năm 2: Lãi = 54 000 000 × 8% = 4 320 000 đồng.</p>
                    <p>Tổng lãi: 4 000 000 + 4 320 000 = <span class="text-emerald-700">8 320 000 đồng</span></p>
                    <p>Đáp án: <span class="text-emerald-700">C. 8 320 000 đồng</span></p>
                </div>
            </div>

        </div>
    `,

    quizPool: [
        { question: "8 học sinh/32 học sinh chiếm bao nhiêu %?", options: ["25%", "20%", "30%", "37,5%"], answer: 0 },
        { question: "12 học sinh/32 học sinh chiếm bao nhiêu %?", options: ["37,5%", "25%", "40%", "30%"], answer: 0 },
        { question: "Số học sinh đạt Hoàn thành = 32 − 8 − 12 = ?", options: ["12", "10", "8", "14"], answer: 0 },
        { question: "Phần trăm học sinh Hoàn thành = ?", options: ["37,5%", "25%", "30%", "40%"], answer: 0 },
        { question: "20 kg hồng tươi → 3,3 kg hồng khô. Lượng nước mất là?", options: ["16,7 kg", "17 kg", "3,3 kg", "20 kg"], answer: 0 },
        { question: "Lượng nước mất đi là bao nhiêu % so với hồng tươi?", options: ["83,5%", "16,5%", "75%", "80%"], answer: 0 },
        { question: "1 kg hồng treo gió 350 000 đồng, giảm 10%. Số tiền giảm là?", options: ["35 000 đồng", "3 500 đồng", "350 000 đồng", "3 050 đồng"], answer: 0 },
        { question: "Mai phải trả khi mua 1 kg hồng giảm 10% là?", options: ["315 000 đồng", "350 000 đồng", "300 000 đồng", "320 000 đồng"], answer: 0 },
        { question: "Lãi suất 8%/năm, gốc 50 triệu. Lãi năm 1 là?", options: ["4 000 000 đồng", "8 000 000 đồng", "4 320 000 đồng", "5 000 000 đồng"], answer: 0 },
        { question: "Gốc + lãi sau năm 1 là?", options: ["54 000 000 đồng", "50 000 000 đồng", "58 000 000 đồng", "52 000 000 đồng"], answer: 0 },
        { question: "Lãi năm 2 (gốc 54 triệu, 8%) là?", options: ["4 320 000 đồng", "4 000 000 đồng", "4 500 000 đồng", "3 200 000 đồng"], answer: 0 },
        { question: "Tổng lãi sau 2 năm là?", options: ["8 320 000 đồng", "8 000 000 đồng", "8 400 000 đồng", "4 000 000 đồng"], answer: 0 },
        { question: "Cách tính tỉ số phần trăm của a so với b là?", options: ["a : b × 100%", "a × b × 100%", "b : a × 100%", "a : b + 100%"], answer: 0 },
        { question: "Giảm giá 10% nghĩa là còn bao nhiêu % của giá gốc?", options: ["90%", "10%", "110%", "80%"], answer: 0 },
        { question: "Lãi suất kép khác lãi suất đơn ở điểm nào?", options: ["Tiền lãi được cộng vào gốc để gửi tiếp", "Lãi suất thay đổi mỗi năm", "Lãi suất không thay đổi", "Không có gì khác"], answer: 0 }
    ]
};

window.lesson161 = lesson161;

window.check_161_1 = function() {
    const checks = [
        {id:'161-1-1', ans:['25%','25']},
        {id:'161-1-2', ans:['37,5%','37.5%','37,5','37.5']},
        {id:'161-1-3', ans:['37,5%','37.5%','37,5','37.5']},
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
        "a) 25%<br>b) 37,5%<br>c) 37,5%",
        "",
        "Gợi ý: Tỉ số phần trăm = số học sinh : tổng học sinh × 100.",
        "a) 8 : 32 × 100 = 25%<br>b) 12 : 32 × 100 = 37,5%<br>c) Còn lại: 32 − 8 − 12 = 12; 12 : 32 × 100 = 37,5%<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Tỉ số phần trăm", Math.round(correct/checks.length*100), "btn-check-161-1", 0, checks.length, correct);
};

window.check_161_2 = function() {
    const v = document.getElementById('161-2')?.value.trim().replace('%','').replace(',','.') || '';
    const isCorrect = (v === '83.5' || v === '83,5%' || v === '83.5%');
    window.showMathFeedback(isCorrect,
        "83,5%",
        "",
        "Gợi ý: Tính lượng nước mất (20 − 3,3), rồi tính tỉ số phần trăm so với tổng ban đầu.",
        "Nước mất: 20 − 3,3 = 16,7 kg.<br>Tỉ số %: 16,7 : 20 × 100 = 83,5%.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Hồng treo gió", isCorrect?100:0, "btn-check-161-2", 0, 1, isCorrect?1:0);
};

window.check_161_3 = function() {
    const v = document.getElementById('161-3')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = v === '315000';
    window.showMathFeedback(isCorrect,
        "315 000 đồng",
        "",
        "Gợi ý: Tính số tiền giảm (350 000 × 10%), rồi lấy giá gốc trừ đi số tiền giảm.",
        "Giảm: 350 000 × 10 : 100 = 35 000 đồng.<br>Trả: 350 000 − 35 000 = 315 000 đồng.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Hồng treo gió giảm giá", isCorrect?100:0, "btn-check-161-3", 0, 1, isCorrect?1:0);
};

window._sel161_4 = null;
window.select161_4 = function(opt) {
    ['A','B','C','D'].forEach(o => {
        const b = document.getElementById('btn-161-4-'+o);
        if (b) b.className = 'p-4 bg-white rounded-2xl border-4 border-rose-100 hover:border-rose-400 transition-all font-black text-lg text-center';
    });
    const sel = document.getElementById('btn-161-4-'+opt);
    if (sel) sel.className = 'p-4 bg-rose-100 rounded-2xl border-4 border-rose-500 transition-all font-black text-lg text-center';
    window._sel161_4 = opt;
};
window.check_161_4 = function() {
    const isCorrect = window._sel161_4 === 'C';
    window.showMathFeedback(isCorrect,
        "C. 8 320 000 đồng",
        "",
        "Gợi ý: Tính lãi năm 1, cộng vào gốc, rồi tính lãi năm 2 từ gốc mới. Tổng lãi = lãi năm 1 + lãi năm 2.",
        "Lãi năm 1: 50 000 000 × 8% = 4 000 000 đồng. Gốc năm 2: 54 000 000.<br>Lãi năm 2: 54 000 000 × 8% = 4 320 000 đồng.<br>Tổng lãi: 4 000 000 + 4 320 000 = 8 320 000 đồng.<br>Đáp án C. Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Lãi suất tiết kiệm", isCorrect?100:0, "btn-check-161-4", 0, 1, isCorrect?1:0);
};

// import './logic.js';
