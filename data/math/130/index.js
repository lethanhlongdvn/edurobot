/**
 * @file index.js
 * @description Standardized Lesson 130: Bài 56. Các đơn vị đo thời gian
 * Targets: 100% SGK compliance, showMathFeedback (5-param), submitMathLesson (6-param).
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-130",
    period: "130",
    title: "Bài 56. Các đơn vị đo thời gian",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 56. CÁC ĐƠN VỊ ĐO THỜI GIAN",
    description: "Nhận biết các đơn vị đo thời gian, xác định thế kỉ của mốc lịch sử và đổi đơn vị đo thời gian.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 64-66"
};

// 2. HTML Content (Khám phá / Tìm hiểu bài)
const lesson130Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <!-- Hình ảnh Khám phá SGK Trang 64 -->
            <div class="p-6 bg-white rounded-[32px] border-2 border-blue-100 shadow-md flex items-center justify-center">
                <img src="assets/images/toan/toan_tap_2/130/kp.png" alt="Khám phá các đơn vị đo thời gian" class="rounded-2xl max-w-full h-auto mx-auto shadow-sm">
            </div>

            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">⏰ BẢNG ĐƠN VỊ ĐO THỜI GIAN</h4>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-[32px] border-2 border-blue-100 shadow-sm space-y-3 text-lg md:text-xl font-bold text-slate-800">
                    <p class="p-3 bg-blue-50 rounded-2xl border border-blue-100">1 thế kỉ = <span class="text-blue-600 font-black">100 năm</span></p>
                    <p class="p-3 bg-blue-50 rounded-2xl border border-blue-100">1 năm = <span class="text-blue-600 font-black">12 tháng</span></p>
                    <p class="p-3 bg-blue-50 rounded-2xl border border-blue-100">1 năm = <span class="text-blue-600 font-black">365 ngày</span> (năm thường)</p>
                    <p class="p-3 bg-blue-50 rounded-2xl border border-blue-100">1 năm nhuận = <span class="text-blue-600 font-black">366 ngày</span></p>
                    <p class="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 font-black">📌 Cứ 4 năm lại có 1 năm nhuận.</p>
                </div>

                <div class="bg-white p-6 rounded-[32px] border-2 border-emerald-100 shadow-sm space-y-3 text-lg md:text-xl font-bold text-slate-800">
                    <p class="p-3 bg-emerald-50 rounded-2xl border border-emerald-100">1 tuần lễ = <span class="text-emerald-600 font-black">7 ngày</span></p>
                    <p class="p-3 bg-emerald-50 rounded-2xl border border-emerald-100">1 ngày = <span class="text-emerald-600 font-black">24 giờ</span></p>
                    <p class="p-3 bg-emerald-50 rounded-2xl border border-emerald-100">1 giờ = <span class="text-emerald-600 font-black">60 phút</span></p>
                    <p class="p-3 bg-emerald-50 rounded-2xl border border-emerald-100">1 phút = <span class="text-emerald-600 font-black">60 giây</span></p>
                </div>
            </div>

            <div class="bg-white p-6 rounded-[32px] border-2 border-teal-100 shadow-sm space-y-3 text-lg md:text-xl font-bold text-slate-800 text-left">
                <h5 class="text-xl md:text-2xl font-black text-teal-700 uppercase mb-2">📅 Số ngày trong các tháng:</h5>
                <p class="p-3 bg-teal-50 rounded-2xl border border-teal-100">• Tháng 1, 3, 5, 7, 8, 10, 12 có <span class="text-teal-700 font-black">31 ngày</span>.</p>
                <p class="p-3 bg-teal-50 rounded-2xl border border-teal-100">• Tháng 4, 6, 9, 11 có <span class="text-teal-700 font-black">30 ngày</span>.</p>
                <p class="p-3 bg-teal-50 rounded-2xl border border-teal-100">• Tháng 2 có <span class="text-teal-700 font-black">28 ngày</span> (vào năm nhuận có <span class="text-teal-700 font-black">29 ngày</span>).</p>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Hoạt động / Luyện tập)
const lesson130Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Bài 1 -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex justify-between items-start gap-6 mb-12 text-left animate-none">
                        <div class="flex items-start gap-6">
                            <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                            <div class="space-y-2">
                                <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Sự kiện lịch sử diễn ra vào thế kỉ nào?</h3>
                                <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Dưới đây là năm (khoảng thời gian) xảy ra các sự kiện trong lịch sử Việt Nam. Em hãy cho biết mỗi sự kiện xảy ra vào thế kỉ nào.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        <!-- Sự kiện 1 -->
                        <div class="p-6 bg-blue-50/50 rounded-3xl border border-blue-100 flex flex-col items-center gap-4">
                            <img src="assets/images/toan/toan_tap_2/130/130-1-HBT.webp" alt="Hai Bà Trưng năm 40" class="h-40 object-cover rounded-2xl shadow-sm">
                            <p class="text-lg font-bold text-slate-800 text-center">Hai Bà Trưng phất cờ khởi nghĩa năm 40</p>
                            <div class="flex items-center justify-center gap-2 flex-nowrap whitespace-nowrap w-full">
                                <span class="text-lg font-black text-blue-800 shrink-0">Thế kỉ:</span>
                                <input type="text" id="ans-130-1-1" class="w-24 h-12 border-2 border-blue-600 rounded-2xl text-center text-xl font-black text-blue-600 uppercase outline-none focus:ring-2 focus:ring-blue-400 shrink-0" placeholder="?">
                            </div>
                        </div>

                        <!-- Sự kiện 2 -->
                        <div class="p-6 bg-blue-50/50 rounded-3xl border border-blue-100 flex flex-col items-center gap-4">
                            <img src="assets/images/toan/toan_tap_2/130/130-1-DBL.webp" alt="Đinh Bộ Lĩnh năm 968" class="h-40 object-cover rounded-2xl shadow-sm">
                            <p class="text-lg font-bold text-slate-800 text-center">Đinh Bộ Lĩnh lên ngôi Hoàng đế năm 968</p>
                            <div class="flex items-center justify-center gap-2 flex-nowrap whitespace-nowrap w-full">
                                <span class="text-lg font-black text-blue-800 shrink-0">Thế kỉ:</span>
                                <input type="text" id="ans-130-1-2" class="w-24 h-12 border-2 border-blue-600 rounded-2xl text-center text-xl font-black text-blue-600 uppercase outline-none focus:ring-2 focus:ring-blue-400 shrink-0" placeholder="?">
                            </div>
                        </div>

                        <!-- Sự kiện 3 -->
                        <div class="p-6 bg-blue-50/50 rounded-3xl border border-blue-100 flex flex-col items-center gap-4">
                            <img src="assets/images/toan/toan_tap_2/130/130-1-LCU.webp" alt="Lý Công Uẩn năm 1010" class="h-40 object-cover rounded-2xl shadow-sm">
                            <p class="text-lg font-bold text-slate-800 text-center">Vua Lý Công Uẩn dời đô về Thăng Long năm 1010</p>
                            <div class="flex items-center justify-center gap-2 flex-nowrap whitespace-nowrap w-full">
                                <span class="text-lg font-black text-blue-800 shrink-0">Thế kỉ:</span>
                                <input type="text" id="ans-130-1-3" class="w-24 h-12 border-2 border-blue-600 rounded-2xl text-center text-xl font-black text-blue-600 uppercase outline-none focus:ring-2 focus:ring-blue-400 shrink-0" placeholder="?">
                            </div>
                        </div>

                        <!-- Sự kiện 4 -->
                        <div class="p-6 bg-blue-50/50 rounded-3xl border border-blue-100 flex flex-col items-center gap-4">
                            <img src="assets/images/toan/toan_tap_2/130/130-1-NT.webp" alt="Hội nghị Diên Hồng năm 1284" class="h-40 object-cover rounded-2xl shadow-sm">
                            <p class="text-lg font-bold text-slate-800 text-center">Hội nghị Diên Hồng năm 1284</p>
                            <div class="flex items-center justify-center gap-2 flex-nowrap whitespace-nowrap w-full">
                                <span class="text-lg font-black text-blue-800 shrink-0">Thế kỉ:</span>
                                <input type="text" id="ans-130-1-4" class="w-24 h-12 border-2 border-blue-600 rounded-2xl text-center text-xl font-black text-blue-600 uppercase outline-none focus:ring-2 focus:ring-blue-400 shrink-0" placeholder="?">
                            </div>
                        </div>

                        <!-- Sự kiện 5 -->
                        <div class="p-6 bg-blue-50/50 rounded-3xl border border-blue-100 flex flex-col items-center gap-4">
                            <img src="assets/images/toan/toan_tap_2/130/130-1-ĐBP.webp" alt="Chiến thắng Điện Biên Phủ năm 1954" class="h-40 object-cover rounded-2xl shadow-sm">
                            <p class="text-lg font-bold text-slate-800 text-center">Chiến thắng Điện Biên Phủ năm 1954</p>
                            <div class="flex items-center justify-center gap-2 flex-nowrap whitespace-nowrap w-full">
                                <span class="text-lg font-black text-blue-800 shrink-0">Thế kỉ:</span>
                                <input type="text" id="ans-130-1-5" class="w-24 h-12 border-2 border-blue-600 rounded-2xl text-center text-xl font-black text-blue-600 uppercase outline-none focus:ring-2 focus:ring-blue-400 shrink-0" placeholder="?">
                            </div>
                        </div>

                        <!-- Sự kiện 6 -->
                        <div class="p-6 bg-blue-50/50 rounded-3xl border border-blue-100 flex flex-col items-center gap-4">
                            <img src="assets/images/toan/toan_tap_2/130/130-1-GPMN.webp" alt="Giải phóng miền Nam năm 1975" class="h-40 object-cover rounded-2xl shadow-sm">
                            <p class="text-lg font-bold text-slate-800 text-center">Giải phóng miền Nam thống nhất năm 1975</p>
                            <div class="flex items-center justify-center gap-2 flex-nowrap whitespace-nowrap w-full">
                                <span class="text-lg font-black text-blue-800 shrink-0">Thế kỉ:</span>
                                <input type="text" id="ans-130-1-6" class="w-24 h-12 border-2 border-blue-600 rounded-2xl text-center text-xl font-black text-blue-600 uppercase outline-none focus:ring-2 focus:ring-blue-400 shrink-0" placeholder="?">
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-130-1"E
                    <div class="flex justify-end items-center gap-4 mt-8">
                        
                        <button id=" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                        - Hai Bà Trưng phất cờ khởi nghĩa năm 40: Thế kỉ I.<br>
                        - Đinh Bộ Lĩnh lên ngôi Hoàng đế năm 968: Thế kỉ X.<br>
                        - Vua Lý Công Uẩn dời đô về Thăng Long năm 1010: Thế kỉ XI.<br>
                        - Hội nghị Diên Hồng năm 1284: Thế kỉ XIII.<br>
                        - Chiến thắng Điện Biên Phủ năm 1954: Thế kỉ XX.<br>
                        - Giải phóng miền Nam thống nhất đất nước năm 1975: Thế kỉ XX.
                    " onclick="btn-submit-130-1" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">w-20 h-20 md:w-24 md:h-24 bg-blue-600 text-white rounded-3xl font-black text-4xl md:text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all</button>
                    </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-130-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-130-1" onclick="window.submitEx130_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 questions)
const lesson130QuizPool = [
    { "question": "Năm 2024 thuộc thế kỉ thứ mấy?", "options": ["XX", "XXI", "XV", "XIX"], "answer": 1, "level": 1 },
    { "question": "1 năm nhuận có bao nhiêu ngày?", "options": ["365 ngày", "366 ngày", "364 ngày", "360 ngày"], "answer": 1, "level": 1 },
    { "question": "Tháng nào sau đây chỉ có 28 hoặc 29 ngày?", "options": ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4"], "answer": 1, "level": 1 },
    { "question": "Thế kỉ thứ XV kéo dài từ năm 1401 đến năm:", "options": ["1499", "1500", "1501", "1600"], "answer": 1, "level": 2 },
    { "question": "1 thế kỉ bằng bao nhiêu năm?", "options": ["10 năm", "50 năm", "100 năm", "1000 năm"], "answer": 2, "level": 1 },
    { "question": "Tháng nào sau đây có 31 ngày?", "options": ["Tháng 4", "Tháng 6", "Tháng 8", "Tháng 11"], "answer": 2, "level": 1 },
    { "question": "Tháng nào sau đây có 30 ngày?", "options": ["Tháng 3", "Tháng 9", "Tháng 10", "Tháng 12"], "answer": 1, "level": 1 },
    { "question": "Đổi 120 phút bằng bao nhiêu giờ?", "options": ["1,5 giờ", "2 giờ", "2,5 giờ", "1,2 giờ"], "answer": 1, "level": 1 },
    { "question": "Đổi 2,5 năm bằng bao nhiêu tháng?", "options": ["25 tháng", "30 tháng", "24 tháng", "12 tháng"], "answer": 1, "level": 2 },
    { "question": "Năm 1010 là mốc thời gian thuộc thế kỉ nào?", "options": ["Thế kỉ XX", "Thế kỉ XI", "Thế kỉ XIX", "Thế kỉ X"], "answer": 1, "level": 2 },
    { "question": "Đổi 90 phút ra giờ được kết quả là:", "options": ["1,2 giờ", "1,5 giờ", "1,8 giờ", "2 giờ"], "answer": 1, "level": 2 },
    { "question": "Đổi 42 giây ra phút được kết quả là:", "options": ["0,7 phút", "0,6 phút", "0,5 phút", "0,42 phút"], "answer": 0, "level": 2 },
    { "question": "1 giờ 15 phút đổi sang giờ bằng:", "options": ["1,15 giờ", "1,25 giờ", "1,5 giờ", "1,75 giờ"], "answer": 1, "level": 3 },
    { "question": "2 phút 27 giây đổi sang phút bằng:", "options": ["2,27 phút", "2,45 phút", "2,5 phút", "2,7 phút"], "answer": 1, "level": 3 },
    { "question": "Hội nghị Diên Hồng diễn ra năm 1284 thuộc thế kỉ nào?", "options": ["Thế kỉ XII", "Thế kỉ XIII", "Thế kỉ XIV", "Thế kỉ XV"], "answer": 1, "level": 3 }
];

// 5. Logic & State Management
if (typeof window !== 'undefined') {
    window.lesson130State = {
        attempts: { s1: 0, s2: 0 }
    };
}

// --- Submission Handlers ---

window.submitEx130_1 = function () {
    window.lesson130State.attempts.s1++;
    const targets = ["I", "X", "XI", "XIII", "XX", "XX"];
    const numericTargets = ["1", "10", "11", "13", "20", "20"];

    let correctCount = 0;
    const studentAns = [];

    for (let i = 1; i <= 6; i++) {
        const inputEl = document.getElementById(`ans-130-1-${i}`);
        const val = inputEl ? inputEl.value.trim().toUpperCase() : "";
        studentAns.push(val || "?");

        if (val === targets[i - 1] || val === numericTargets[i - 1]) {
            correctCount++;
        }
    }

    const isCorrect = (correctCount === 6);
    const score = Math.round((correctCount / 6) * 100);

    window.showMathFeedback(
        isCorrect,
        "Thế kỉ I, X, XI, XIII, XX, XX",
        studentAns.join(", "),
        "Dựa vào năm diễn ra sự kiện: Năm 1 đến 100 thuộc Thế kỉ I; năm 1010 thuộc Thế kỉ XI...",
        `
        - Hai Bà Trưng (năm 40): Thế kỉ I.<br>
        - Đinh Bộ Lĩnh (năm 968): Thế kỉ X.<br>
        - Lý Công Uẩn dời đô (năm 1010): Thế kỉ XI.<br>
        - Hội nghị Diên Hồng (năm 1284): Thế kỉ XIII.<br>
        - Điện Biên Phủ (năm 1954): Thế kỉ XX.<br>
        - Giải phóng miền Nam (năm 1975): Thế kỉ XX.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-130-1", window.lesson130State.attempts.s1, 6, correctCount);
};

window.submitEx130_2 = function () {
    window.lesson130State.attempts.s2++;
    const a1 = document.getElementById('ans-130-2-a1').value.trim().replace(',', '.');
    const a2 = document.getElementById('ans-130-2-a2').value.trim().replace(',', '.');
    const b1 = document.getElementById('ans-130-2-b1').value.trim().replace(',', '.');
    const b2 = document.getElementById('ans-130-2-b2').value.trim().replace(',', '.');

    if (!a1 || !a2 || !b1 || !b2) {
        alert("Em hãy điền đầy đủ cả 4 ô trống!");
        return;
    }

    const cA1 = (a1 === '1.5' || a1 === '1,5');
    const cA2 = (a2 === '0.7' || a2 === '0,7');
    const cB1 = (b1 === '1.25' || b1 === '1,25');
    const cB2 = (b2 === '2.45' || b2 === '2,45');

    const correctCount = (cA1 ? 1 : 0) + (cA2 ? 1 : 0) + (cB1 ? 1 : 0) + (cB2 ? 1 : 0);
    const isCorrect = (correctCount === 4);
    const score = Math.round((correctCount / 4) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 1,5 giờ ; 0,7 phút ; b) 1,25 giờ ; 2,45 phút",
        `a) ${a1} giờ ; ${a2} phút ; b) ${b1} giờ ; ${b2} phút`,
        "Đổi phút ra giờ bằng cách chia cho 60; đổi giây ra phút chia cho 60.",
        `
        a)<br>
        - 90 phút = 90/60 giờ = 1,5 giờ.<br>
        - 42 giây = 42/60 phút = 0,7 phút.<br><br>
        b)<br>
        - 1 giờ 15 phút = 1 giờ + 15/60 giờ = 1,25 giờ.<br>
        - 2 phút 27 giây = 2 phút + 27/60 phút = 2,45 phút.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-130-2", window.lesson130State.attempts.s2, 4, correctCount);
};

// 6. Main Lesson Export
export default {
    metadata,
    lessonInfo,
    content: lesson130Content,
    practice: lesson130Practice,
    quizPool: lesson130QuizPool,
    onLoad: () => {
        console.log("Lesson 130 Loaded: Bài 56. Các đơn vị đo thời gian");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};
