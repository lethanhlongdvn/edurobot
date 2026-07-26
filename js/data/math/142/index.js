/**
 * @file index.js
 * @description Standardized Lesson 142: Bài 61. Thực hành tính toán và ước lượng về vận tốc, quãng đường, thời gian trong chuyển động đều (tiết 2)
 * Targets: 100% SGK compliance (Trang 83), 3 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-142",
    period: "142",
    title: "Bài 61. Thực hành tính toán và ước lượng (tiết 2)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 61. THỰC HÀNH TÍNH TOÁN VÀ ƯỚC LƯỢNG VỀ VẬN TỐC, QUÃNG ĐƯỜNG, THỜI GIAN (TIẾT 2)",
    description: "Thực hành tính toán vận tốc, quãng đường, thời gian qua bài toán Chuyến thăm trường bạn.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 83"
};

// 2. HTML Content (Khám phá / Tìm hiểu bài - Trang 83)
const lesson142Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <!-- Hình ảnh Sơ đồ hai con đường SGK Trang 83 -->
            <div class="p-6 bg-white rounded-[32px] border-2 border-blue-100 shadow-md flex items-center justify-center">
                <img src="assets/images/toan/toan_tap_2/142/142-1-hai-con-duong.png" alt="Sơ đồ hai con đường" class="rounded-2xl w-full max-w-[75%] h-auto mx-auto shadow-sm">
            </div>

            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">🚌 CHUYẾN THĂM TRƯỜNG BẠN Ở TỈNH KHÁC</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed italic border-l-8 border-blue-500 pl-4">
                    Trường em tổ chức chuyến thăm một trường bạn ở tỉnh khác. Lớp em cũng tham gia chuyến đi này.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-lg md:text-xl">
                    <div class="p-6 bg-amber-50 rounded-3xl border-2 border-amber-200 space-y-2">
                        <p class="font-black text-amber-800 text-xl md:text-2xl">🛣️ Con đường thứ nhất:</p>
                        <p class="text-slate-800">• Quãng đường: <span class="font-black text-amber-700">180 km</span></p>
                        <p class="text-slate-800">• Vận tốc dự định: <span class="font-black text-amber-700">80 km/h</span></p>
                    </div>
                    <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-200 space-y-2">
                        <p class="font-black text-sky-800 text-xl md:text-2xl">🛣️ Con đường thứ hai:</p>
                        <p class="text-slate-800">• Quãng đường: <span class="font-black text-sky-700">160 km</span></p>
                        <p class="text-slate-800">• Vận tốc dự định: <span class="font-black text-sky-700">50 km/h</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 3 Slide phụ - Trang 83)
const lesson142Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                        <!-- Slide 1: Bài 1 (Trang 83) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Tính thời gian từng con đường và chọn con đường nhanh hơn</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Em hãy tính thời gian dự định đi trên từng con đường và chọn con đường hết ít thời gian hơn.</p>
                        </div>
                    </div>

                    <!-- Hình Sơ đồ SGK Trang 83 -->
                    <div class="mb-8 text-center">
                        <img src="assets/images/toan/toan_tap_2/142/142-1-hai-con-duong.png" alt="Sơ đồ hai con đường" class="rounded-2xl w-full h-auto max-h-[260px] object-contain shadow-sm mx-auto">
                    </div>

                    <!-- Ô nhập thời gian từng con đường -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
                        <div class="p-6 bg-amber-50 rounded-3xl border-2 border-amber-200 shadow-sm space-y-3">
                            <h5 class="text-xl md:text-2xl font-black text-amber-800">🛣️ Con đường thứ nhất (180 km, 80 km/h)</h5>
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span>Thời gian đi =</span>
                                <input type="text" id="ans-142-1-t1" class="w-28 h-14 border-2 border-amber-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-amber-700 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">giờ</span>
                            </div>
                        </div>

                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-200 shadow-sm space-y-3">
                            <h5 class="text-xl md:text-2xl font-black text-sky-800">🛣️ Con đường thứ hai (160 km, 50 km/h)</h5>
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span>Thời gian đi =</span>
                                <input type="text" id="ans-142-1-t2" class="w-28 h-14 border-2 border-sky-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-sky-700 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">giờ</span>
                            </div>
                        </div>
                    </div>

                    <!-- Chọn con đường ít thời gian hơn -->
                    <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 mb-8 text-left space-y-4">
                        <p class="text-xl md:text-2xl font-black text-blue-900">👉 Chọn con đường hết ít thời gian hơn:</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button onclick="window.lesson142SelectMCQ('142-1', 'A')" id="btn-142-1-A" class="mcq-btn p-5 bg-white border-2 border-blue-200 rounded-2xl flex items-center gap-3 hover:border-blue-500 transition-all">
                                <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-black text-xl md:text-2xl">A</span>
                                <span class="font-black text-xl md:text-2xl text-slate-800">Con đường thứ nhất</span>
                            </button>
                            <button onclick="window.lesson142SelectMCQ('142-1', 'B')" id="btn-142-1-B" class="mcq-btn p-5 bg-white border-2 border-blue-200 rounded-2xl flex items-center gap-3 hover:border-blue-500 transition-all">
                                <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-black text-xl md:text-2xl">B</span>
                                <span class="font-black text-xl md:text-2xl text-slate-800">Con đường thứ hai</span>
                            </button>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-142-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        Thời gian dự định đi con đường thứ nhất là: 180 : 80 = 2,25 (giờ) = 2 giờ 15 phút.<br>
                        Thời gian dự định đi con đường thứ hai là: 160 : 50 = 3,2 (giờ) = 3 giờ 12 phút.<br>
                        Vì 2,25 giờ < 3,2 giờ nên xe đi con đường thứ nhất sẽ hết ít thời gian hơn.<br>
                        Đáp số: Đường thứ nhất 2,25 giờ; Đường thứ hai 3,2 giờ; Chọn con đường thứ nhất.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-142-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-142-1" onclick="window.submitEx142_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 83) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Tính khoảng cách từ điểm nghỉ ngơi đến nơi đến</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Cô giáo chủ nhiệm quyết định chọn con đường thứ nhất. Sau khi đi được 1 giờ với đúng vận tốc dự định, cả đoàn dừng lại để nghỉ ngơi. Hỏi điểm nghỉ ngơi cách nơi đến bao nhiêu ki-lô-mét?</p>
                        </div>
                    </div>

                    <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 mb-8 text-left">
                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                            <span class="text-teal-900 font-extrabold">Điểm nghỉ ngơi cách nơi đến =</span>
                            <span class="inline-flex items-center flex-nowrap gap-2">
                                <input type="number" id="ans-142-2" class="w-32 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">km</span>
                            </span>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-142-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        Quãng đường đoàn đã đi được trong 1 giờ là: 80 × 1 = 80 (km).<br>
                        Điểm nghỉ ngơi cách nơi đến số ki-lô-mét là: 180 − 80 = 100 (km).<br>
                        Đáp số: 100 km.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-142-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-142-2" onclick="window.submitEx142_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 3 (Trang 83) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3. Tính vận tốc trung bình trên quãng đường còn lại</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Sau khi nghỉ ngơi xong, xe đi quãng đường còn lại hết 1 giờ 36 phút. Em hãy tính vận tốc trung bình mà xe đã đi hết quãng đường đó (theo đơn vị km/h).</p>
                        </div>
                    </div>

                    <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 mb-8 text-left">
                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                            <span class="text-sky-900 font-extrabold">Vận tốc trung bình trên quãng đường còn lại =</span>
                            <span class="inline-flex items-center flex-nowrap gap-2">
                                <input type="text" id="ans-142-3" class="w-32 h-14 border-2 border-sky-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-sky-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">km/h</span>
                            </span>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-142-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        Đổi: 1 giờ 36 phút = 1,6 giờ.<br>
                        Quãng đường còn lại là: 100 km.<br>
                        Vận tốc trung bình của xe đi trên quãng đường còn lại là: 100 : 1,6 = 62,5 (km/h).<br>
                        Đáp số: 62,5 km/h.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-142-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-142-3" onclick="window.submitEx142_3()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson142QuizPool = [
    { question: "180 km : 80 km/h = ?", options: ["2,25 giờ", "2,5 giờ", "2,2 giờ", "2,15 giờ"], answer: 0, level: "easy" },
    { question: "2,25 giờ đổi ra giờ và phút bằng:", options: ["2 giờ 15 phút", "2 giờ 25 phút", "2 giờ 12 phút", "2 giờ 20 phút"], answer: 0, level: "easy" },
    { question: "160 km : 50 km/h = ?", options: ["3,2 giờ", "3,5 giờ", "3,12 giờ", "3,1 giờ"], answer: 0, level: "easy" },
    { question: "3,2 giờ đổi ra giờ và phút bằng:", options: ["3 giờ 12 phút", "3 giờ 20 phút", "3 giờ 2 phút", "3 giờ 15 phút"], answer: 0, level: "easy" },
    { question: "So sánh: 2,25 giờ và 3,2 giờ. Thời gian nào nhỏ hơn?", options: ["2,25 giờ (Đường 1)", "3,2 giờ (Đường 2)", "Bằng nhau", "Không xác định"], answer: 0, level: "easy" },
    { question: "Vận tốc 80 km/h đi trong 1 giờ được quãng đường:", options: ["80 km", "180 km", "100 km", "160 km"], answer: 0, level: "easy" },
    { question: "180 km − 80 km = ?", options: ["100 km", "80 km", "90 km", "110 km"], answer: 0, level: "easy" },
    { question: "1 giờ 36 phút đổi ra giờ bằng:", options: ["1,6 giờ", "1,36 giờ", "1,3 giờ", "1,5 giờ"], answer: 0, level: "easy" },
    { question: "100 km : 1,6 giờ = ?", options: ["62,5 km/h", "60 km/h", "65 km/h", "50 km/h"], answer: 0, level: "medium" },
    { question: "Công thức tính vận tốc trung bình v là:", options: ["v = s : t", "v = s × t", "v = t : s", "s = v : t"], answer: 0, level: "easy" },
    { question: "Quãng đường 180 km lớn hơn quãng đường 160 km bao nhiêu km?", options: ["20 km", "10 km", "30 km", "40 km"], answer: 0, level: "easy" },
    { question: "36 phút : 60 = ?", options: ["0,6 giờ", "0,36 giờ", "0,3 giờ", "0,5 giờ"], answer: 0, level: "easy" },
    { question: "Xe đi 80 km/h trong 2 giờ được quãng đường là:", options: ["160 km", "80 km", "180 km", "200 km"], answer: 0, level: "easy" },
    { question: "100 km đi với 50 km/h hết thời gian là:", options: ["2 giờ", "1,5 giờ", "2,5 giờ", "3 giờ"], answer: 0, level: "easy" },
    { question: "Xe đi 62,5 km/h trong 1,6 giờ được quãng đường là:", options: ["100 km", "90 km", "110 km", "120 km"], answer: 0, level: "medium" }
];

// 5. Global Handlers & State
window.lesson142State = {
    attempts: { s1: 0, s2: 0, s3: 0 },
    mcq: { s1: null }
};

window.lesson142SelectMCQ = function (exId, option) {
    if (exId === '142-1') {
        window.lesson142State.mcq.s1 = option;
        ['A', 'B'].forEach(opt => {
            const btn = document.getElementById(`btn-142-1-${opt}`);
            if (btn) {
                if (opt === option) {
                    btn.className = "mcq-btn p-6 bg-blue-100 border-4 border-blue-600 rounded-3xl flex items-center gap-4 shadow-md scale-105 transition-all";
                } else {
                    btn.className = "mcq-btn p-6 bg-white border-2 border-blue-200 rounded-3xl flex items-center gap-4 hover:border-blue-500 transition-all opacity-70";
                }
            }
        });
    }
};

window.submitEx142_1 = function () {
    window.lesson142State.attempts.s1++;
    const t1 = document.getElementById('ans-142-1-t1')?.value.trim().replace(',', '.');
    const t2 = document.getElementById('ans-142-1-t2')?.value.trim().replace(',', '.');
    const selected = window.lesson142State.mcq.s1;

    if (!t1 || !t2) {
        alert("Em hãy tính và nhập thời gian của cả 2 con đường!");
        return;
    }

    if (!selected) {
        alert("Em hãy chọn con đường hết ít thời gian hơn!");
        return;
    }

    const c1 = (parseFloat(t1) === 2.25);
    const c2 = (parseFloat(t2) === 3.2);
    const c_mcq = (selected === 'A');

    const correctCount = (c1 ? 1 : 0) + (c2 ? 1 : 0) + (c_mcq ? 1 : 0);
    const isCorrect = (correctCount === 3);
    const score = Math.round((correctCount / 3) * 100);

    window.showMathFeedback(
        isCorrect,
        "Đường 1: 2,25 giờ ; Đường 2: 3,2 giờ ; Chọn Đường 1",
        `Đường 1: ${t1}h ; Đường 2: ${t2}h ; Chọn Câu ${selected}`,
        "Em hãy tính thời gian từng con đường (lấy quãng đường chia cho vận tốc), rồi so sánh chọn con đường có thời gian nhỏ hơn nhé!",
        `
        Thời gian dự định đi con đường thứ nhất là: 180 : 80 = 2,25 (giờ) = 2 giờ 15 phút.<br>
        Thời gian dự định đi con đường thứ hai là: 160 : 50 = 3,2 (giờ) = 3 giờ 12 phút.<br>
        Vì 2,25 giờ < 3,2 giờ nên xe đi con đường thứ nhất sẽ hết ít thời gian hơn.<br>
        Em tính toán và đưa ra lựa chọn vô cùng chính xác!
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-142-1", window.lesson142State.attempts.s1, 3, correctCount);
};

window.submitEx142_2 = function () {
    window.lesson142State.attempts.s2++;
    const s = document.getElementById('ans-142-2')?.value.trim();

    if (!s) {
        alert("Em hãy nhập khoảng cách từ điểm nghỉ ngơi đến nơi đến!");
        return;
    }

    const isCorrect = (s === '100');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "100 km",
        `${s} km`,
        "Em hãy tính quãng đường đã đi được trong 1 giờ (80 km/h × 1 h), rồi lấy tổng quãng đường 180 km trừ đi quãng đường đã đi nhé!",
        `
        Quãng đường đoàn đã đi được trong 1 giờ là: 80 × 1 = 80 (km).<br>
        Điểm nghỉ ngơi cách nơi đến số ki-lô-mét là: 180 − 80 = 100 (km).<br>
        Đáp số: 100 km.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-142-2", window.lesson142State.attempts.s2, 1, isCorrect ? 1 : 0);
};

window.submitEx142_3 = function () {
    window.lesson142State.attempts.s3++;
    const v = document.getElementById('ans-142-3')?.value.trim().replace(',', '.');

    if (!v) {
        alert("Em hãy nhập vận tốc trung bình!");
        return;
    }

    const isCorrect = (parseFloat(v) === 62.5);
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "62,5 km/h",
        `${v} km/h`,
        "Em hãy đổi 1 giờ 36 phút sang giờ (1,6 giờ), rồi lấy quãng đường còn lại 100 km chia cho số giờ vừa đổi nhé!",
        `
        Đổi: 1 giờ 36 phút = 1,6 giờ.<br>
        Quãng đường còn lại là: 100 km.<br>
        Vận tốc trung bình của xe đi trên quãng đường còn lại là: 100 : 1,6 = 62,5 (km/h).<br>
        Đáp số: 62,5 km/h.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-142-3", window.lesson142State.attempts.s3, 1, isCorrect ? 1 : 0);
};

// 6. Main Lesson Export

export const lesson142 = {
    topic: "Số đo thời gian",
    week: "29",
    period: "142",
    title: metadata.title || lessonInfo.title,
    desc: lessonInfo.description,
    content: lesson142Content,
    practice: lesson142Practice,
    quizPool: lesson142QuizPool,
    metadata,
    lessonInfo,
    onLoad: () => {
        console.log("Lesson 142 Loaded");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};

window.lesson142 = lesson142;
export default lesson142;
