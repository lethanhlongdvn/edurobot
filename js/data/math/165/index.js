export const lesson165 = {
    period: "165",
    title: "BÀI 71: ÔN TẬP HÌNH HỌC (TIẾT 4)",
    topic: "Ôn tập thể tích và diện tích (tiếp theo)",
    week: "33",

    practice: `
        <div class="space-y-10 pb-10">

            <!-- Bài 1: Hình khai triển A -->
            <div id="lesson165_b1" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-blue-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">1</div>
                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Giải bài toán</h3>
                </div>
                <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Từ hình khai triển A gồm 6 hình vuông (cạnh <span class="font-black text-blue-700">4 cm</span>) như hình dưới đây, Mai đã gấp được hình lập phương B. Tính diện tích xung quanh, diện tích toàn phần, thể tích của hình lập phương B.
                    </p>
                    <img src="assets/images/toan/toan_tap_2/165/165-1-khai-trien.png" class="max-w-[450px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Hình khai triển A gấp thành HLP B">
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-blue-200 pt-4">
                        <div class="flex flex-col gap-1">
                            <label class="font-bold text-gray-700">S<sub>xq</sub> của HLP B (cm²):</label>
                            <input id="165-1-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-full h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                        </div>
                        <div class="flex flex-col gap-1">
                            <label class="font-bold text-gray-700">S<sub>tp</sub> của HLP B (cm²):</label>
                            <input id="165-1-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-full h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                        </div>
                        <div class="flex flex-col gap-1">
                            <label class="font-bold text-gray-700">Thể tích V của HLP B (cm³):</label>
                            <input id="165-1-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-full h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-165-1').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-165-1" onclick="window.check_165_1()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-165-1" class="hidden bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg font-bold text-blue-900 space-y-1">
                    <p>Cạnh HLP B = 4 cm.</p>
                    <p>Sxq B = 4 × 4 × 4 = <span class="text-emerald-700">64 cm²</span></p>
                    <p>Stp B = 4 × 4 × 6 = <span class="text-emerald-700">96 cm²</span></p>
                    <p>Thể tích V = 4 × 4 × 4 = <span class="text-emerald-700">64 cm³</span></p>
                </div>
            </div>

            <!-- Bài 2: Xưởng điêu khắc đá Ngũ Hành Sơn -->
            <div id="lesson165_b2" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-emerald-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">2</div>
                    <h3 class="text-xl md:text-2xl font-black text-emerald-700">Bài 2. Giải bài toán</h3>
                </div>
                <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Trong một xưởng điêu khắc đá ở Ngũ Hành Sơn có khối đá dạng hình lập phương A cạnh <span class="font-black text-blue-700">0,8 m</span> và khối đá dạng hình hộp chữ nhật B có chiều cao <span class="font-black text-blue-700">0,8 m</span>, chiều dài <span class="font-black text-blue-700">0,6 m</span>, chiều rộng <span class="font-black text-blue-700">0,4 m</span>. Hỏi khối đá nào nặng hơn và nặng hơn bao nhiêu ki-lô-gam? Biết <span class="font-black text-blue-700">1 m³ đá cân nặng 2,75 tấn</span>.
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-center gap-3 flex-wrap">
                            <span class="font-bold text-gray-700 text-lg">Khối đá nặng hơn là (chọn A hay B?):</span>
                            <input id="165-2-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none uppercase" placeholder="A/B">
                        </div>
                        <div class="flex items-center gap-3 flex-wrap">
                            <span class="font-bold text-gray-700 text-lg">Nặng hơn bao nhiêu ki-lô-gam (kg):</span>
                            <input id="165-2-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-36 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span class="font-bold text-gray-700">kg</span>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-165-2').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-165-2" onclick="window.check_165_2()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-165-2" class="hidden bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-lg font-bold text-emerald-900 space-y-1">
                    <p>Thể tích khối đá A: 0,8 × 0,8 × 0,8 = 0,512 m³</p>
                    <p>Thể tích khối đá B: 0,6 × 0,4 × 0,8 = 0,192 m³</p>
                    <p>Khối A thể tích lớn hơn khối B là: 0,512 − 0,192 = 0,32 m³</p>
                    <p>Khối A nặng hơn khối B là: 0,32 × 2,75 = 0,88 tấn = <span class="text-blue-700">880 kg</span></p>
                </div>
            </div>

            <!-- Bài 3: Bể cá -->
            <div id="lesson165_b3" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-amber-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">3</div>
                    <h3 class="text-xl md:text-2xl font-black text-amber-700">Bài 3. Giải bài toán</h3>
                </div>
                <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Một bể cá có kích thước như hình vẽ (dài <span class="font-black text-blue-700">60 cm</span>, rộng <span class="font-black text-blue-700">30 cm</span>, cao <span class="font-black text-blue-700">40 cm</span>).
                    </p>
                    <img src="assets/images/toan/toan_tap_2/165/165-3-be-ca.png" class="max-w-[450px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Bể cá cảnh">
                    
                    <div class="space-y-4 border-t border-amber-200 pt-4">
                        <div class="flex items-center gap-3 flex-wrap">
                            <span class="font-bold text-gray-700 text-lg">a) Thể tích bể cá (cm³):</span>
                            <input id="165-3-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-36 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span class="font-bold text-gray-700">cm³</span>
                        </div>
                        <div class="space-y-2 border-t border-amber-200 pt-3">
                            <p class="text-lg leading-relaxed text-gray-800">
                                b) Lúc đầu, mực nước trong bể bằng <span class="font-black text-blue-700">3/4</span> chiều cao của bể. Sau đó Nam cho vào bể một viên đá cảnh thì thấy mực nước lúc này cao <span class="font-black text-blue-700">32,5 cm</span>. Hỏi thể tích của viên đá cảnh đó là bao nhiêu xăng-ti-mét khối?
                            </p>
                            <div class="flex items-center gap-3 flex-wrap">
                                <span class="font-bold text-gray-700 text-lg">Thể tích viên đá cảnh:</span>
                                <input id="165-3-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-36 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                                <span class="font-bold text-gray-700">cm³</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-165-3').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-165-3" onclick="window.check_165_3()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-165-3" class="hidden bg-amber-50 p-4 rounded-2xl border border-amber-200 text-lg font-bold text-amber-900 space-y-1">
                    <p>a) Thể tích bể cá: 60 × 30 × 40 = <span class="text-emerald-700">72 000 cm³</span></p>
                    <p>b) Mực nước ban đầu: 40 × 3/4 = 30 cm</p>
                    <p>Mực nước tăng thêm: 32,5 − 30 = 2,5 cm</p>
                    <p>Thể tích viên đá cảnh = 60 × 30 × 2,5 = <span class="text-emerald-700">4 500 cm³</span></p>
                </div>
            </div>

            <!-- Bài 4: Tăng cạnh HLP lên 2 lần -->
            <div id="lesson165_b4" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-rose-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">4</div>
                    <div>
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-rose-100 text-rose-800 font-black rounded text-sm">Số ?</span>
                        <h3 class="text-xl md:text-2xl font-black text-rose-700 mt-1">Bài 4. Tăng cạnh hình lập phương</h3>
                    </div>
                </div>
                <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Một hình lập phương có cạnh <span class="font-black text-blue-700">3 cm</span>. Nếu tăng cạnh hình lập phương lên <span class="font-black text-blue-700">2 lần</span> thì:
                    </p>
                    <img src="assets/images/toan/toan_tap_2/165/165-4-tang-canh.png" class="max-w-[350px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Tăng cạnh HLP gấp 2 lần">
                    
                    <div class="space-y-4 border-t border-rose-200 pt-4">
                        <div class="flex items-center gap-3 flex-wrap">
                            <span class="font-bold text-gray-700 text-lg">a) Diện tích toàn phần hình lập phương tăng lên:</span>
                            <input id="165-4-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span class="font-bold text-gray-700">lần.</span>
                        </div>
                        <div class="flex items-center gap-3 flex-wrap">
                            <span class="font-bold text-gray-700 text-lg">b) Thể tích hình lập phương tăng lên:</span>
                            <input id="165-4-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span class="font-bold text-gray-700">lần.</span>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-165-4').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-165-4" onclick="window.check_165_4()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-165-4" class="hidden bg-rose-50 p-4 rounded-2xl border border-rose-200 text-lg font-bold text-rose-900 space-y-1">
                    <p>a) Cạnh tăng 2 lần → Stp = (a×2) × (a×2) × 6 = (a×a×6) × 4 → Tăng lên <span class="text-emerald-700">4 lần</span></p>
                    <p>b) Cạnh tăng 2 lần → V = (a×2) × (a×2) × (a×2) = (a×a×a) × 8 → Tăng lên <span class="text-emerald-700">8 lần</span></p>
                    <p>Chúc mừng em đã giải đúng!</p>
                </div>
            </div>

        </div>
    `,

    quizPool: [
        { question: "Sxq của HLP B (cạnh 4 cm) là?", options: ["64 cm²", "96 cm²", "16 cm²", "32 cm²"], answer: 0 },
        { question: "Stp của HLP B (cạnh 4 cm) là?", options: ["96 cm²", "64 cm²", "48 cm²", "16 cm²"], answer: 0 },
        { question: "Thể tích V của HLP B (cạnh 4 cm) là?", options: ["64 cm³", "96 cm³", "16 cm³", "64 cm²"], answer: 0 },
        { question: "Thể tích khối đá HLP A (0,8m) = ?", options: ["0,512 m³", "0,64 m³", "0,192 m³", "0,8 m³"], answer: 0 },
        { question: "Thể tích khối đá HHCN B (0,6 × 0,4 × 0,8m) = ?", options: ["0,192 m³", "0,512 m³", "0,24 m³", "0,48 m³"], answer: 0 },
        { question: "Khối đá A nặng hơn khối đá B bao nhiêu kg?", options: ["880 kg", "88 kg", "0,88 kg", "320 kg"], answer: 0 },
        { question: "Thể tích bể cá (60×30×40 cm) là?", options: ["72 000 cm³", "7 200 cm³", "130 cm³", "36 000 cm³"], answer: 0 },
        { question: "Mực nước ban đầu (3/4 chiều cao 40 cm) cao bao nhiêu cm?", options: ["30 cm", "20 cm", "25 cm", "35 cm"], answer: 0 },
        { question: "Mực nước dâng thêm khi thả viên đá là?", options: ["2,5 cm", "32,5 cm", "30 cm", "5 cm"], answer: 0 },
        { question: "Thể tích viên đá cảnh thả vào bể cá là?", options: ["4 500 cm³", "72 000 cm³", "58 500 cm³", "9 000 cm³"], answer: 0 },
        { question: "Nếu tăng cạnh HLP lên 2 lần thì Stp tăng mấy lần?", options: ["4 lần", "2 lần", "6 lần", "8 lần"], answer: 0 },
        { question: "Nếu tăng cạnh HLP lên 2 lần thì thể tích V tăng mấy lần?", options: ["8 lần", "4 lần", "2 lần", "6 lần"], answer: 0 },
        { question: "Nếu tăng cạnh HLP lên 3 lần thì Stp tăng mấy lần?", options: ["9 lần", "3 lần", "6 lần", "27 lần"], answer: 0 },
        { question: "Nếu tăng cạnh HLP lên 3 lần thì V tăng mấy lần?", options: ["27 lần", "9 lần", "3 lần", "18 lần"], answer: 0 },
        { question: "1 m³ đá nặng 2,75 tấn = ? kg", options: ["2 750 kg", "275 kg", "27 500 kg", "27,5 kg"], answer: 0 }
    ]
};

window.lesson165 = lesson165;

window.check_165_1 = function() {
    const checks = [
        {id:'165-1-1', ans:['64']},
        {id:'165-1-2', ans:['96']},
        {id:'165-1-3', ans:['64']},
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
        "Sxq = 64 cm², Stp = 96 cm², V = 64 cm³",
        "",
        "Gợi ý: Cạnh HLP B = 4 cm. Sxq = 4×4×4, Stp = 4×4×6, V = 4×4×4.",
        "Sxq = 4 × 4 × 4 = 64 cm²; Stp = 4 × 4 × 6 = 96 cm²; V = 4 × 4 × 4 = 64 cm³.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. HLP gấp từ hình khai triển", Math.round(correct/checks.length*100), "btn-check-165-1", 0, checks.length, correct);
};

window.check_165_2 = function() {
    const v1 = document.getElementById('165-2-1')?.value.trim().toUpperCase() || '';
    const v2 = document.getElementById('165-2-2')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = (v1 === 'A' && v2 === '880');
    window.showMathFeedback(isCorrect,
        "Khối A nặng hơn khối B là 880 kg",
        "",
        "Gợi ý: V_A = 0,8^3 = 0,512 m³, V_B = 0,6×0,4×0,8 = 0,192 m³. Hiệu V = 0,32 m³. Khối lượng = 0,32 × 2,75 tấn = 0,88 tấn = 880 kg.",
        "Khối A thể tích 0,512 m³, khối B thể tích 0,192 m³ → Khối A lớn hơn 0,32 m³.<br>Nặng hơn: 0,32 × 2,75 = 0,88 tấn = 880 kg.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Khối đá Ngũ Hành Sơn", isCorrect?100:0, "btn-check-165-2", 0, 1, isCorrect?1:0);
};

window.check_165_3 = function() {
    const v1 = document.getElementById('165-3-1')?.value.trim().replace(/\s/g,'') || '';
    const v2 = document.getElementById('165-3-2')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = (v1 === '72000' || v1 === '72 000') && (v2 === '4500' || v2 === '4 500');
    window.showMathFeedback(isCorrect,
        "a) 72 000 cm³<br>b) 4 500 cm³",
        "",
        "Gợi ý: a) V = 60×30×40. b) Mực nước đầu = 30cm, dâng = 32,5 − 30 = 2,5cm. V đá = 60×30×2,5.",
        "a) Thể tích bể: 60 × 30 × 40 = 72 000 cm³.<br>b) Mực nước ban đầu: 40 × 3/4 = 30 cm.<br>Tăng thêm: 32,5 − 30 = 2,5 cm → V đá = 60 × 30 × 2,5 = 4 500 cm³.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Bể cá cảnh", isCorrect?100:0, "btn-check-165-3", 0, 1, isCorrect?1:0);
};

window.check_165_4 = function() {
    const v1 = document.getElementById('165-4-1')?.value.trim() || '';
    const v2 = document.getElementById('165-4-2')?.value.trim() || '';
    const isCorrect = (v1 === '4' && v2 === '8');
    window.showMathFeedback(isCorrect,
        "a) Tăng 4 lần<br>b) Tăng 8 lần",
        "",
        "Gợi ý: a) Stp tỉ lệ với (cạnh)², tăng 2² = 4 lần. b) V tỉ lệ với (cạnh)³, tăng 2³ = 8 lần.",
        "a) Stp tăng lên 2 × 2 = 4 lần.<br>b) V tăng lên 2 × 2 × 2 = 8 lần.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Tăng cạnh HLP", isCorrect?100:0, "btn-check-165-4", 0, 1, isCorrect?1:0);
};

import './logic.js';
