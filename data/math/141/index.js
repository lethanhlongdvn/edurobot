/**
 * @file index.js
 * @description Standardized Lesson 141: Bài 61. Thực hành tính toán và ước lượng về vận tốc, quãng đường, thời gian trong chuyển động đều (tiết 1)
 * Targets: 100% SGK compliance (Trang 82-83), 3 slides with independent solution toggle & E buttons.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-141",
    period: "141",
    title: "Bài 61. Thực hành tính toán và ước lượng (tiết 1)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 61. THỰC HÀNH TÍNH TOÁN VÀ ƯỚC LƯỢNG VỀ VẬN TỐC, QUÃNG ĐƯỜNG, THỜI GIAN (TIẾT 1)",
    description: "Thực hành đo thời gian đi bộ, tính vận tốc và ước lượng chu vi sân trường.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 82-83"
};

// 2. HTML Content (Khám phá / Tìm hiểu bài - Trang 82)
const lesson141Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-8">
            <!-- Hình ảnh Thực hành sân trường SGK Trang 82 -->
            <div class="p-6 bg-white rounded-[32px] border-2 border-blue-100 shadow-md flex items-center justify-center">
                <img src="assets/images/toan/toan_tap_2/141/141-1-san-truong.png" alt="Thực hành đo vận tốc trên sân trường" class="rounded-2xl w-full max-w-[75%] h-auto mx-auto shadow-sm">
            </div>

            <h4 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-widest text-center">🏫 THỰC HÀNH TÍNH TOÁN VÀ ƯỚC LƯỢNG TRÊN SÂN TRƯỜNG</h4>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100 max-w-3xl mx-auto space-y-6 text-left">
                <div class="p-6 bg-blue-50/50 rounded-3xl border border-blue-100 space-y-3">
                    <p class="text-xl md:text-2xl font-black text-blue-900">📌 Các bước thực hành:</p>
                    <ul class="list-disc pl-6 space-y-2 text-lg md:text-xl font-bold text-slate-800">
                        <li><span class="text-blue-700">Bước 1:</span> Đo thời gian đi bộ quãng đường 40 m của từng bạn (Bảng 1).</li>
                        <li><span class="text-teal-700">Bước 2:</span> Đo thời gian đi bộ một vòng quanh sân trường của từng bạn (Bảng 2).</li>
                        <li><span class="text-rose-700">Bước 3:</span> Tính vận tốc đi bộ <span class="font-mono font-black">v = 40 : t</span> (làm tròn 1 chữ số thập phân) và ước lượng chu vi sân trường <span class="font-mono font-black">C = v × t_vòng</span>.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập - 3 Slide phụ - Trang 82-83)
const lesson141Practice = `
<div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
    <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

            <!-- Slide 1: Bài 1 (Trang 82) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Ghi lại thời gian đi bộ quãng đường 40 m (Bảng 1)</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Em hãy ghi lại thời gian đi bộ quãng đường 40 m của mỗi bạn vào Bảng 1.</p>
                        </div>
                    </div>

                    <!-- Hình Sân trường SGK Trang 82 -->
                    <div class="mb-8 text-center">
                        <img src="assets/images/toan/toan_tap_2/141/141-1-san-truong.png" alt="Thực hành sân trường" class="rounded-2xl w-full h-auto max-h-[240px] object-contain shadow-sm mx-auto">
                    </div>

                    <!-- Bảng 1 HTML SGK Trang 82 -->
                    <div class="overflow-x-auto mb-8 max-w-xl mx-auto">
                        <table class="w-full border-collapse rounded-3xl overflow-hidden shadow-sm border border-blue-200 text-center font-black text-lg md:text-xl">
                            <thead>
                                <tr class="bg-blue-600 text-white border-b border-blue-200">
                                    <th class="p-4 border-r border-blue-500">Tên</th>
                                    <th class="p-4 border-r border-blue-500">s (m)</th>
                                    <th class="p-4">t (giây)</th>
                                </tr>
                            </thead>
                            <tbody class="bg-blue-50/40 text-slate-800">
                                <tr class="border-b border-blue-100">
                                    <td class="p-4 border-r border-blue-100 font-bold">Việt</td>
                                    <td class="p-4 border-r border-blue-100">40</td>
                                    <td class="p-4">31</td>
                                </tr>
                                <tr class="border-b border-blue-100 bg-white">
                                    <td class="p-4 border-r border-blue-100 font-bold">Mai</td>
                                    <td class="p-4 border-r border-blue-100">40</td>
                                    <td class="p-4">
                                        <input type="number" id="ans-141-1-t2" class="w-24 h-12 border-2 border-blue-600 rounded-xl text-center text-xl md:text-2xl font-black text-blue-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-4 border-r border-blue-100 font-bold">Nam</td>
                                    <td class="p-4 border-r border-blue-100">40</td>
                                    <td class="p-4">
                                        <input type="number" id="ans-141-1-t3" class="w-24 h-12 border-2 border-blue-600 rounded-xl text-center text-xl md:text-2xl font-black text-blue-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-141-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 1:</p>
                        Học sinh ghi lại số giây thực tế đo được khi đi bộ 40 m của từng bạn vào Bảng 1.<br>
                        Ví dụ: Việt (31 giây), Mai (32 giây), Nam (25 giây).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-141-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-141-1" onclick="window.submitEx141_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Bài 2 (Trang 82) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-teal-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-teal-700 block">Bài 2. Ghi lại thời gian đi bộ 1 vòng quanh sân (Bảng 2)</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Em hãy ghi lại thời gian đi bộ một vòng quanh sân của mỗi bạn vào Bảng 2.</p>
                        </div>
                    </div>

                    <!-- Bảng 2 HTML SGK Trang 82 -->
                    <div class="overflow-x-auto mb-10 max-w-lg mx-auto">
                        <table class="w-full border-collapse rounded-3xl overflow-hidden shadow-sm border border-teal-200 text-center font-black text-lg md:text-xl">
                            <thead>
                                <tr class="bg-teal-600 text-white border-b border-teal-200">
                                    <th class="p-4 border-r border-teal-500 w-1/2">Tên</th>
                                    <th class="p-4 w-1/2">t (giây)</th>
                                </tr>
                            </thead>
                            <tbody class="bg-teal-50/40 text-slate-800">
                                <tr class="border-b border-teal-100">
                                    <td class="p-4 border-r border-teal-100 font-bold">Việt</td>
                                    <td class="p-4">125</td>
                                </tr>
                                <tr class="border-b border-teal-100 bg-white">
                                    <td class="p-4 border-r border-teal-100 font-bold">Mai</td>
                                    <td class="p-4">
                                        <input type="number" id="ans-141-2-t2" class="w-28 h-12 border-2 border-teal-600 rounded-xl text-center text-xl md:text-2xl font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-4 border-r border-teal-100 font-bold">Nam</td>
                                    <td class="p-4">
                                        <input type="number" id="ans-141-2-t3" class="w-28 h-12 border-2 border-teal-600 rounded-xl text-center text-xl md:text-2xl font-black text-teal-600 outline-none" style="padding: 0px !important; line-height: 44px !important;" placeholder="?">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-141-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 2:</p>
                        Học sinh ghi lại số giây đo được khi đi bộ 1 vòng quanh sân của từng bạn vào Bảng 2.<br>
                        Ví dụ: Việt (125 giây), Mai (130 giây), Nam (100 giây).
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-141-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-141-2" onclick="window.submitEx141_2()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

            <!-- Slide 3: Bài 3 (Trang 83) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-sky-50 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 text-left">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-sky-700 block">Bài 3. Tính vận tốc và ước lượng chu vi sân trường</h3>
                            <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">
                                a) Tính vận tốc đi bộ của Việt ở Bảng 1 (40 m trong 31 giây), kết quả làm tròn đến 1 chữ số ở phần thập phân.<br>
                                b) Dựa vào thời gian ở Bảng 2 (125 giây) và vận tốc vừa tính được, em hãy ước lượng chu vi của sân trường.
                            </p>
                        </div>
                    </div>

                    <div class="space-y-6 mb-10 text-left w-full">
                        <!-- a -->
                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-sky-900 font-extrabold">a) Vận tốc đi bộ của Việt = 40 : 31 ≈</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="text" id="ans-141-3a" class="w-28 h-14 border-2 border-sky-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-sky-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">m/s</span>
                                </span>
                            </div>
                        </div>

                        <!-- b -->
                        <div class="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 shadow-sm">
                            <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto text-xl md:text-2xl font-black text-slate-800">
                                <span class="text-sky-900 font-extrabold">b) Ước lượng chu vi sân trường ≈</span>
                                <span class="inline-flex items-center flex-nowrap gap-2">
                                    <input type="text" id="ans-141-3b" class="w-32 h-14 border-2 border-sky-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-sky-600 outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 52px !important;" placeholder="?">
                                    <span class="font-bold text-slate-800">m</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-141-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết 3:</p>
                        a) Vận tốc đi bộ của Việt là: 40 : 31 = 1,2903... ≈ 1,3 (m/s).<br>
                        b) Chu vi sân trường ước lượng là: 1,3 × 125 = 162,5 (m).<br>
                        Đáp số: a) 1,3 m/s ; b) 162,5 m.
                    </div>

                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-141-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-141-3" onclick="window.submitEx141_3()" class="w-16 h-16 md:w-20 md:h-20 bg-sky-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 Củng cố)
const lesson141QuizPool = [
    { question: "40 m đi trong 31 giây. Vận tốc làm tròn 1 chữ số thập phân là:", options: ["1,3 m/s", "1,2 m/s", "1,4 m/s", "1,5 m/s"], answer: 0, level: "easy" },
    { question: "Vận tốc 1,3 m/s đi trong 125 giây. Quãng đường là:", options: ["162,5 m", "160 m", "165 m", "150 m"], answer: 0, level: "easy" },
    { question: "40 m : 25 s = ?", options: ["1,6 m/s", "1,5 m/s", "1,4 m/s", "1,8 m/s"], answer: 0, level: "easy" },
    { question: "40 m : 32 s = ?", options: ["1,25 m/s", "1,2 m/s", "1,3 m/s", "1,4 m/s"], answer: 0, level: "medium" },
    { question: "1,6 m/s × 100 s = ?", options: ["160 m", "16 m", "1600 m", "150 m"], answer: 0, level: "easy" },
    { question: "Muốn tính vận tốc v khi biết s và t, công thức là:", options: ["v = s : t", "v = s × t", "v = t : s", "s = v : t"], answer: 0, level: "easy" },
    { question: "Muốn tính ước lượng quãng đường s khi biết v và t, công thức là:", options: ["s = v × t", "s = v : t", "s = t : v", "v = s × t"], answer: 0, level: "easy" },
    { question: "1,2903 làm tròn đến 1 chữ số thập phân là:", options: ["1,3", "1,2", "1,29", "1,30"], answer: 0, level: "easy" },
    { question: "40 m : 20 s = ?", options: ["2 m/s", "1 m/s", "4 m/s", "0,5 m/s"], answer: 0, level: "easy" },
    { question: "2 m/s × 120 s = ?", options: ["240 m", "120 m", "60 m", "200 m"], answer: 0, level: "easy" },
    { question: "Đơn vị đo vận tốc đi bộ trong bài thực hành là:", options: ["m/s", "km/h", "m/phút", "cm/s"], answer: 0, level: "easy" },
    { question: "Đo thời gian 1 vòng sân là đo đại lượng nào?", options: ["Thời gian (t)", "Vận tốc (v)", "Quãng đường (s)", "Khối lượng"], answer: 0, level: "easy" },
    { question: "Quãng đường 1 vòng quanh sân trường chính là:", options: ["Chu vi sân trường", "Diện tích sân trường", "Chiều dài sân trường", "Chiều rộng sân trường"], answer: 0, level: "easy" },
    { question: "1,25 m/s × 130 s = ?", options: ["162,5 m", "160 m", "165 m", "150 m"], answer: 0, level: "medium" },
    { question: "1,6 m/s × 100 s = ?", options: ["160 m", "16 m", "1600 m", "120 m"], answer: 0, level: "easy" }
];

// 5. Global Handlers & State
window.lesson141State = {
    attempts: { s1: 0, s2: 0, s3: 0 }
};

window.submitEx141_1 = function () {
    window.lesson141State.attempts.s1++;
    const t2 = document.getElementById('ans-141-1-t2')?.value.trim();
    const t3 = document.getElementById('ans-141-1-t3')?.value.trim();

    if (!t2 || !t3) {
        alert("Em hãy điền đầy đủ thời gian của cả 2 bạn vào bảng!");
        return;
    }

    window.showMathFeedback(
        true,
        `Mai: ${t2}s ; Nam: ${t3}s`,
        `Mai: ${t2}s ; Nam: ${t3}s`,
        "Em hãy ghi lại số giây đo được của các bạn khi đi quãng đường 40 m vào bảng nhé!",
        `
        Đã lưu thành công thời gian đo quãng đường 40 m của Mai (${t2} giây) và Nam (${t3} giây).<br>
        Em thực hiện đo đạc và ghi chép rất xuất sắc!
        `
    );

    window.submitMathLesson(metadata.title, 100, "btn-submit-141-1", window.lesson141State.attempts.s1, 1, 1);
};

window.submitEx141_2 = function () {
    window.lesson141State.attempts.s2++;
    const t2 = document.getElementById('ans-141-2-t2')?.value.trim();
    const t3 = document.getElementById('ans-141-2-t3')?.value.trim();

    if (!t2 || !t3) {
        alert("Em hãy điền đầy đủ thời gian đi 1 vòng sân của cả 2 bạn!");
        return;
    }

    window.showMathFeedback(
        true,
        `Mai: ${t2}s ; Nam: ${t3}s`,
        `Mai: ${t2}s ; Nam: ${t3}s`,
        "Em hãy ghi lại số giây đo được của các bạn khi đi 1 vòng quanh sân trường nhé!",
        `
        Đã lưu thành công thời gian đi 1 vòng quanh sân của Mai (${t2} giây) và Nam (${t3} giây).<br>
        Em ghi chép số liệu thực hành rất tốt!
        `
    );

    window.submitMathLesson(metadata.title, 100, "btn-submit-141-2", window.lesson141State.attempts.s2, 1, 1);
};

window.submitEx141_3 = function () {
    window.lesson141State.attempts.s3++;
    const va = document.getElementById('ans-141-3a')?.value.trim().replace(',', '.');
    const cb = document.getElementById('ans-141-3b')?.value.trim().replace(',', '.');

    if (!va || !cb) {
        alert("Em hãy nhập đầy đủ cả vận tốc và ước lượng chu vi sân!");
        return;
    }

    const ca = (parseFloat(va) === 1.3);
    const cb_ok = (Math.abs(parseFloat(cb) - 162.5) <= 1 || parseFloat(cb) === 163);

    const correctCount = (ca ? 1 : 0) + (cb_ok ? 1 : 0);
    const isCorrect = (correctCount === 2);
    const score = Math.round((correctCount / 2) * 100);

    window.showMathFeedback(
        isCorrect,
        "a) 1,3 m/s ; b) 162,5 m",
        `a) ${va} m/s ; b) ${cb} m`,
        "Em hãy lấy quãng đường 40 m chia cho thời gian (bảng 1) để tìm vận tốc (làm tròn 1 chữ số thập phân), rồi lấy vận tốc đó nhân với thời gian đi 1 vòng (bảng 2) để tìm chu vi nhé!",
        `
        a) Vận tốc đi bộ của Việt là: 40 : 31 = 1,2903... ≈ 1,3 (m/s).<br>
        b) Chu vi sân trường ước lượng là: 1,3 × 125 = 162,5 (m).<br>
        Đáp số: a) 1,3 m/s ; b) 162,5 m.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-141-3", window.lesson141State.attempts.s3, 2, correctCount);
};

// 6. Main Lesson Export

export const lesson141 = {
    topic: "Số đo thời gian",
    week: "29",
    period: "141",
    title: metadata.title || lessonInfo.title,
    desc: lessonInfo.description,
    content: lesson141Content,
    practice: lesson141Practice,
    quizPool: lesson141QuizPool,
    metadata,
    lessonInfo,
    onLoad: () => {
        console.log("Lesson 141 Loaded");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};

window.lesson141 = lesson141;
export default lesson141;
