/**
 * @file index.js
 * @description Standardized Lesson 136: Bài 59. Vận tốc của một chuyển động đều (tiết 1)
 * Targets: 100% SGK compliance (Trang 76-77), 2 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-136",
    period: "136",
    title: "Bài 59. Vận tốc của một chuyển động đều (tiết 1)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 59. VẬN TỐC CỦA MỘT CHUYỂN ĐỘNG ĐỀU (TIẾT 1)",
    description: "Làm quen với khái niệm vận tốc, đơn vị vận tốc và công thức v = s : t.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 76-77"
};

// 2. HTML Content (Khám phá / Tìm hiểu bài - Trang 76)
const lesson136Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <!-- Hình ảnh Khám phá SGK Trang 76 -->
            <div class="p-6 bg-white rounded-[32px] border-2 border-blue-100 shadow-md flex items-center justify-center">
                <img src="assets/images/toan/toan_tap_2/136/136-khampha.png" alt="Khám phá Vận tốc của một chuyển động đều" class="rounded-2xl w-full max-w-[75%] h-auto mx-auto shadow-sm">
            </div>

            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">🚀 VẬN TỐC CỦA MỘT CHUYỂN ĐỘNG ĐỀU</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <div class="space-y-3 text-lg md:text-xl font-bold text-slate-800 leading-relaxed">
                    <p>• Trung bình mỗi giờ chim én bay được: <span class="font-mono font-black text-blue-600">210 : 2 = 105 (km)</span></p>
                    <p>• Trung bình mỗi giây chuột túi chạy được: <span class="font-mono font-black text-blue-600">70 : 5 = 14 (m)</span></p>
                    <p>Ta nói: Vận tốc trung bình (vận tốc) của chim én là <span class="font-black text-blue-700">105 km/h</span> (km/giờ). Vận tốc của chuột túi là <span class="font-black text-blue-700">14 m/s</span> (m/giây).</p>
                </div>

                <!-- Khung Ghi nhớ màu hồng SGK -->
                <div class="p-6 bg-rose-50 rounded-3xl border-2 border-rose-200 text-center space-y-3 shadow-sm">
                    <p class="text-xl md:text-2xl font-black text-rose-900">
                        • Muốn tính vận tốc ta lấy quãng đường chia cho thời gian.
                    </p>
                    <p class="text-lg md:text-xl font-bold text-slate-800">
                        • Gọi vận tốc là <span class="text-rose-700 font-mono font-black">v</span>, quãng đường là <span class="text-rose-700 font-mono font-black">s</span>, thời gian là <span class="text-rose-700 font-mono font-black">t</span>, ta có:
                    </p>
                    <div class="inline-block bg-white px-8 py-3 rounded-full border-2 border-rose-300 shadow-md">
                        <span class="text-2xl md:text-3xl font-mono font-black text-rose-700">v = s : t</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 2 Slide phụ - Trang 77)
const lesson136Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 77) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Tính vận tốc ô tô</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Trên đường cao tốc, một ô tô đi quãng đường 180 km trong 2 giờ. Tính vận tốc của ô tô đó (theo đơn vị km/h).</p>
                        </div>
                    </div>

                    <!-- Hình Đường cao tốc SGK Trang 77 -->
                    <div class="mb-8 text-center">
                        <img src="assets/images/toan/toan_tap_2/136/136-1-caotoc.png" alt="Đường cao tốc" class="rounded-2xl w-full h-auto max-h-[260px] object-contain shadow-sm mx-auto">
                    </div>

                    <div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 mb-8 text-left">
                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                            <span class="text-blue-900 font-extrabold">Vận tốc của ô tô là =</span>
                            <span class="inline-flex items-center flex-nowrap gap-2">
                                <input type="number" id="ans-136-1" class="w-28 h-14 border-2 border-blue-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-blue-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">km/h</span>
                            </span>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-136-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        Vận tốc của ô tô đó là:<br>
                        180 : 2 = 90 (km/h).<br>
                        Đáp số: 90 km/h.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-136-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-136-1" onclick="window.submitEx136_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 77) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Tính vận tốc người đi xe đạp</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Trong 1 phút 40 giây, một người đi xe đạp đi được đoạn đường 500 m. Tính vận tốc của người đi xe đạp đó (theo đơn vị m/s).</p>
                        </div>
                    </div>

                    <div class="p-6 bg-teal-50 rounded-3xl border-2 border-teal-100 mb-8 text-left">
                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                            <span class="text-teal-900 font-extrabold">Vận tốc của người đi xe đạp là =</span>
                            <span class="inline-flex items-center flex-nowrap gap-2">
                                <input type="number" id="ans-136-2" class="w-28 h-14 border-2 border-teal-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-teal-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                <span class="font-bold text-slate-800">m/s</span>
                            </span>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-136-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        Đổi: 1 phút 40 giây = 100 giây.<br>
                        Vận tốc của người đi xe đạp là:<br>
                        500 : 100 = 5 (m/s).<br>
                        Đáp số: 5 m/s.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-136-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-136-2" onclick="window.submitEx136_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson136QuizPool = [
    { question: "Muốn tính vận tốc ta lấy:", options: ["Quãng đường chia cho Thời gian", "Quãng đường nhân với Thời gian", "Thời gian chia cho Quãng đường", "Vận tốc nhân với Thời gian"], answer: 0, level: "easy" },
    { question: "Công thức tính vận tốc là:", options: ["v = s : t", "v = s × t", "v = t : s", "s = v : t"], answer: 0, level: "easy" },
    { question: "Một ô tô đi 180 km trong 2 giờ. Vận tốc của ô tô là:", options: ["90 km/h", "360 km/h", "80 km/h", "100 km/h"], answer: 0, level: "easy" },
    { question: "Đoạn đường 500 m đi trong 100 giây. Vận tốc là:", options: ["5 m/s", "50 m/s", "500 m/s", "0,5 m/s"], answer: 0, level: "easy" },
    { question: "1 phút 40 giây đổi ra giây bằng:", options: ["100 giây", "140 giây", "60 giây", "40 giây"], answer: 0, level: "easy" },
    { question: "Một con chim én bay 210 km trong 2 giờ. Vận tốc chim én là:", options: ["105 km/h", "420 km/h", "100 km/h", "110 km/h"], answer: 0, level: "medium" },
    { question: "Một con chuột túi nhảy 70 m trong 5 giây. Vận tốc chuột túi là:", options: ["14 m/s", "350 m/s", "12 m/s", "15 m/s"], answer: 0, level: "medium" },
    { question: "Xe máy đi 90 km trong 2 giờ. Vận tốc xe máy là:", options: ["45 km/h", "180 km/h", "40 km/h", "50 km/h"], answer: 0, level: "easy" },
    { question: "Người đi bộ đi 60 m trong 1 phút. Vận tốc là:", options: ["1 m/s", "60 m/s", "6 m/s", "10 m/s"], answer: 0, level: "medium" },
    { question: "Vận tốc đơn vị km/h được đọc là:", options: ["Ki-lô-mét trên giờ", "Ki-lô-mét nhân giờ", "Ki-lô-mét cộng giờ", "Ki-lô-mét trừ giờ"], answer: 0, level: "easy" },
    { question: "Tàu hỏa đi 300 km trong 5 giờ. Vận tốc tàu hỏa là:", options: ["60 km/h", "1500 km/h", "50 km/h", "70 km/h"], answer: 0, level: "easy" },
    { question: "Vận động viên chạy 100 m trong 10 giây. Vận tốc là:", options: ["10 m/s", "1000 m/s", "1 m/s", "20 m/s"], answer: 0, level: "easy" },
    { question: "Máy bay bay 1800 km trong 2 giờ. Vận tốc máy bay là:", options: ["900 km/h", "3600 km/h", "800 km/h", "1000 km/h"], answer: 0, level: "medium" },
    { question: "Con sóc chạy 30 m trong 6 giây. Vận tốc con sóc là:", options: ["5 m/s", "180 m/s", "6 m/s", "4 m/s"], answer: 0, level: "medium" },
    { question: "Thuyền đi được 36 km trong 3 giờ. Vận tốc thuyền là:", options: ["12 km/h", "108 km/h", "10 km/h", "15 km/h"], answer: 0, level: "medium" }
];

// 5. Global Handlers & State
window.lesson136State = {
    attempts: { s1: 0, s2: 0 }
};

window.submitEx136_1 = function () {
    window.lesson136State.attempts.s1++;
    const v = document.getElementById('ans-136-1')?.value.trim();

    if (!v) {
        alert("Em hãy nhập vận tốc của ô tô!");
        return;
    }

    const isCorrect = (v === '90');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "90 km/h",
        `${v} km/h`,
        "Em hãy áp dụng công thức v = s : t (lấy quãng đường 180 km chia cho thời gian 2 giờ) nhé!",
        `
        Vận tốc của ô tô đó là:<br>
        180 : 2 = 90 (km/h).<br>
        Đáp số: 90 km/h.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-136-1", window.lesson136State.attempts.s1, 1, isCorrect ? 1 : 0);
};

window.submitEx136_2 = function () {
    window.lesson136State.attempts.s2++;
    const v = document.getElementById('ans-136-2')?.value.trim();

    if (!v) {
        alert("Em hãy nhập vận tốc của người đi xe đạp!");
        return;
    }

    const isCorrect = (v === '5');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "5 m/s",
        `${v} m/s`,
        "Em hãy đổi 1 phút 40 giây sang giây trước, rồi lấy quãng đường (500 m) chia cho số giây vừa đổi nhé!",
        `
        Đổi: 1 phút 40 giây = 100 giây.<br>
        Vận tốc của người đi xe đạp là:<br>
        500 : 100 = 5 (m/s).<br>
        Đáp số: 5 m/s.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-136-2", window.lesson136State.attempts.s2, 1, isCorrect ? 1 : 0);
};

// 6. Main Lesson Export
export default {
    metadata,
    lessonInfo,
    content: lesson136Content,
    practice: lesson136Practice,
    quizPool: lesson136QuizPool,
    onLoad: () => {
        console.log("Lesson 136 Loaded: Bài 59. Vận tốc của một chuyển động đều (tiết 1)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};
