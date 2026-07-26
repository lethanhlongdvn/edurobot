/**
 * @file index.js
 * @description Standardized Lesson 126: Thực hành tính toán và ước lượng thể tích một số hình khối
 * Targets: 100% SGK compliance, showMathFeedback (5-param), submitMathLesson (6-param), Audit color ban fix.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-126",
    title: "Bài 54. Thực hành tính toán và ước lượng thể tích một số hình khối",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 54. THỰC HÀNH TÍNH TOÁN VÀ ƯỚC LƯỢNG THỂ TÍCH MỘT SỐ HÌNH KHỐI",
    description: "Vận dụng kiến thức thể tích để tính toán và ước lượng trong thực tế.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 58-59"
};

// 2. HTML Templates
const lesson126Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] md:rounded-[48px] p-8 md:p-12 border border-orange-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
        <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div class="w-20 h-20 md:w-28 md:h-28 bg-orange-600 rounded-3xl flex items-center justify-center text-5xl md:text-7xl shadow-xl shadow-orange-200 dark:shadow-orange-900/40 shrink-0 transform rotate-6 text-white">📦</div>
            <p class="text-2xl md:text-4xl text-orange-700 dark:text-orange-400 font-bold italic leading-relaxed text-center md:text-left">Thực hành tính toán và ước lượng thể tích một số hình khối trong thực tế.</p>
        </div>
    </div>
</div>
`;

const lesson126Practice = `
<div class="ltViewport relative w-full overflow-hidden" id="ltViewport" style="border-radius: 3rem;">
    <div class="ltTrack flex transition-transform duration-500 ease-out" id="ltTrack" style="width: 100%; display: flex;">
        
        <!-- Bài 1: Xếp hộp vào thùng -->
        <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-orange-50 shadow-2xl relative overflow-hidden">
                <div class="flex justify-between items-start gap-6 mb-12 text-left animate-none">
                    <div class="flex items-start gap-6">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-orange-700 block">Bài 1. Xếp hộp vào thùng</h3>
                            <p class="text-2xl md:text-3xl text-slate-800 leading-relaxed font-black tracking-tight">
                                Công ty của mẹ bạn Mai đặt mua 100 chậu cây được làm từ vật liệu tái chế của lớp 5A. Lớp 5A đã chọn mẫu hộp dạng hình lập phương cạnh 2 dm để đựng mỗi chậu cây.
                            </p>
                        </div>
                    </div>
                    
                </div>

                <div class="flex flex-col gap-8 items-center mb-12 w-full">
                    <div class="w-full max-w-xl p-4 bg-white rounded-[32px] border border-orange-100 shadow-md flex items-center justify-center">
                        <img src="assets/images/toan/toan_tap_2/126/126-b1-box.webp" alt="Hộp và thùng" class="rounded-2xl max-w-full h-auto mx-auto shadow-sm">
                    </div>
                    <div class="w-full bg-orange-50/50 p-6 md:p-8 rounded-[2rem] border border-orange-100 divide-y divide-dashed divide-orange-200/60 space-y-6">
                        <div class="flex items-center justify-between gap-4 pb-6">
                            <p class="text-lg md:text-xl font-black text-orange-800">a) Thể tích mẫu hộp là:</p>
                            <div class="flex items-center gap-2 shrink-0">
                                <input type="number" id="ans-126-1a" class="w-24 md:w-32 h-14 border-2 border-orange-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-orange-600 outline-none focus:ring-2 focus:ring-orange-400" placeholder="?">
                                <span class="text-xl md:text-2xl font-black text-orange-800 italic">dm³</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-4 pt-6">
                            <p class="text-lg md:text-xl font-black text-orange-800">b) Số hộp có thể xếp vào 1 thùng là:</p>
                            <div class="flex items-center gap-2 shrink-0">
                                <input type="number" id="ans-126-1b" class="w-24 md:w-32 h-14 border-2 border-orange-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-orange-600 outline-none focus:ring-2 focus:ring-orange-400" placeholder="?">
                                <span class="text-xl md:text-2xl font-black text-orange-800 italic">hộp</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="sol-126-1"E
                    <div class="flex justify-end items-center gap-4 mt-8">
                        
                        <button id=" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                    <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                    a) Thể tích mẫu hộp hình lập phương đựng chậu cây là:<br>
                    2 &times; 2 &times; 2 = 8 (dm³).<br>
                    b) Thùng có kích thước dài 6 dm, rộng 4 dm, cao 4 dm.<br>
                    - Số hộp xếp được theo chiều dài: 6 : 2 = 3 (hộp).<br>
                    - Số hộp xếp được theo chiều rộng: 4 : 2 = 2 (hộp).<br>
                    - Số hộp xếp được theo chiều cao: 4 : 2 = 2 (hộp).<br>
                    - Số hộp có thể xếp được vào một thùng chứa là:<br>
                    3 &times; 2 &times; 2 = 12 (hộp).<br>
                    Đáp số: a) 8 dm³; b) 12 hộp.
                " onclick="btn-submit-126-1" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">w-20 h-20 md:w-24 md:h-24 bg-orange-600 text-white rounded-3xl font-black text-4xl md:text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all</button>
                    </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-126-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-126-1" onclick="window.submitEx126_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
        </div>

        <!-- Trò chơi: Đường đua -->
        <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-emerald-50 shadow-2xl relative overflow-hidden">
                <div class="flex justify-between items-start gap-6 mb-12 text-left animate-none">
                    <div class="flex items-start gap-6">
                        <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">🏁</div>
                        <div class="space-y-2">
                            <h3 class="text-xl md:text-2xl font-black text-emerald-700 block">Trò chơi: Đường đua</h3>
                            <p class="text-2xl md:text-3xl text-slate-800 leading-relaxed font-black tracking-tight">Tính toán và ước lượng thể tích các khối hộp xung quanh lớp.</p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-8 items-center mb-8 w-full">
                    <div class="w-full space-y-6">
                        <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border border-emerald-100 shadow-sm">
                            <p class="text-lg md:text-2xl font-black text-emerald-600 uppercase tracking-widest mb-4">📋 Chuẩn bị</p>
                            <p class="text-xl md:text-2xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">Một số hộp có dạng hình hộp chữ nhật và hình lập phương đặt xung quanh lớp học.</p>
                        </div>
                        <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border border-emerald-100 shadow-sm">
                            <p class="text-lg md:text-2xl font-black text-emerald-600 uppercase tracking-widest mb-4">🎯 Cách chơi</p>
                            <ul class="space-y-4 text-xl md:text-2xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed text-left">
                                <li class="flex items-start gap-3"><span class="text-emerald-500 shrink-0">▸</span> Chơi theo nhóm.</li>
                                <li class="flex items-start gap-3"><span class="text-emerald-500 shrink-0">▸</span> Tại mỗi lượt chơi, giáo viên đọc một số đo thể tích. Các nhóm quan sát, ước lượng và lựa chọn một hộp có số đo thể tích bằng hoặc gần bằng số đo thể tích giáo viên vừa đọc.</li>
                                <li class="flex items-start gap-3"><span class="text-emerald-500 shrink-0">▸</span> Trò chơi kết thúc sau 5 lượt chơi. Nhóm nào giành được nhiều điểm nhất là nhóm thắng cuộc.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full max-w-xl p-4 bg-white dark:bg-slate-800 rounded-[32px] border border-emerald-100 shadow-md flex items-center justify-center">
                        <img src="assets/images/toan/toan_tap_2/126/126-game.webp" alt="Trò chơi Đường đua" class="rounded-2xl max-w-full h-auto mx-auto shadow-sm">
                    </div>
                </div>

                <div class="w-full bg-white dark:bg-slate-800 p-4 md:p-8 rounded-[32px] border-2 border-emerald-200 shadow-sm overflow-x-auto">
                    <p class="text-lg md:text-2xl font-black text-emerald-600 uppercase tracking-widest mb-6">🏆 Bảng ghi điểm đường đua</p>
                    <table class="w-full text-center border-collapse table-fixed min-w-[680px]">
                        <thead>
                            <tr>
                                <th class="p-4 bg-emerald-600 text-white text-lg md:text-xl font-black rounded-tl-xl" style="width: 80px;">Lượt</th>
                                <th class="p-4 bg-emerald-600 text-white text-lg md:text-xl font-black border-l border-emerald-500" style="width: 200px;">GV đọc<br>(cm³/dm³)</th>
                                <th class="p-4 bg-blue-600 text-white text-lg md:text-xl font-black border-l border-blue-500" style="width: 100px;">Nhóm 1</th>
                                <th class="p-4 bg-rose-600 text-white text-lg md:text-xl font-black border-l border-rose-500" style="width: 100px;">Nhóm 2</th>
                                <th class="p-4 bg-amber-600 text-white text-lg md:text-xl font-black border-l border-amber-500" style="width: 100px;">Nhóm 3</th>
                                <th class="p-4 bg-cyan-600 text-white text-lg md:text-xl font-black border-l border-cyan-500 rounded-tr-xl" style="width: 100px;">Nhóm 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-t border-emerald-100">
                                <td class="p-3 bg-emerald-50 font-black text-xl text-emerald-800">1</td>
                                <td class="p-3 border-l border-emerald-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-emerald-200 focus:border-emerald-600" placeholder="..."></td>
                                <td class="p-3 border-l border-blue-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-blue-200 focus:border-blue-600" placeholder="—"></td>
                                <td class="p-3 border-l border-rose-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-rose-200 focus:border-rose-600" placeholder="—"></td>
                                <td class="p-3 border-l border-amber-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-amber-200 focus:border-amber-600" placeholder="—"></td>
                                <td class="p-3 border-l border-cyan-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-cyan-200 focus:border-cyan-600" placeholder="—"></td>
                            </tr>
                            <tr class="border-t border-emerald-100">
                                <td class="p-3 bg-emerald-50 font-black text-xl text-emerald-800">2</td>
                                <td class="p-3 border-l border-emerald-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-emerald-200 focus:border-emerald-600" placeholder="..."></td>
                                <td class="p-3 border-l border-blue-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-blue-200 focus:border-blue-600" placeholder="—"></td>
                                <td class="p-3 border-l border-rose-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-rose-200 focus:border-rose-600" placeholder="—"></td>
                                <td class="p-3 border-l border-amber-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-amber-200 focus:border-amber-600" placeholder="—"></td>
                                <td class="p-3 border-l border-cyan-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-cyan-200 focus:border-cyan-600" placeholder="—"></td>
                            </tr>
                            <tr class="border-t border-emerald-100">
                                <td class="p-3 bg-emerald-50 font-black text-xl text-emerald-800">3</td>
                                <td class="p-3 border-l border-emerald-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-emerald-200 focus:border-emerald-600" placeholder="..."></td>
                                <td class="p-3 border-l border-blue-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-blue-200 focus:border-blue-600" placeholder="—"></td>
                                <td class="p-3 border-l border-rose-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-rose-200 focus:border-rose-600" placeholder="—"></td>
                                <td class="p-3 border-l border-amber-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-amber-200 focus:border-amber-600" placeholder="—"></td>
                                <td class="p-3 border-l border-cyan-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-cyan-200 focus:border-cyan-600" placeholder="—"></td>
                            </tr>
                            <tr class="border-t border-emerald-100">
                                <td class="p-3 bg-emerald-50 font-black text-xl text-emerald-800">4</td>
                                <td class="p-3 border-l border-emerald-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-emerald-200 focus:border-emerald-600" placeholder="..."></td>
                                <td class="p-3 border-l border-blue-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-blue-200 focus:border-blue-600" placeholder="—"></td>
                                <td class="p-3 border-l border-rose-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-rose-200 focus:border-rose-600" placeholder="—"></td>
                                <td class="p-3 border-l border-amber-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-amber-200 focus:border-amber-600" placeholder="—"></td>
                                <td class="p-3 border-l border-cyan-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-cyan-200 focus:border-cyan-600" placeholder="—"></td>
                            </tr>
                            <tr class="border-t border-emerald-100">
                                <td class="p-3 bg-emerald-50 font-black text-xl text-emerald-800">5</td>
                                <td class="p-3 border-l border-emerald-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-emerald-200 focus:border-emerald-600" placeholder="..."></td>
                                <td class="p-3 border-l border-blue-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-blue-200 focus:border-blue-600" placeholder="—"></td>
                                <td class="p-3 border-l border-rose-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-rose-200 focus:border-rose-600" placeholder="—"></td>
                                <td class="p-3 border-l border-amber-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-amber-200 focus:border-amber-600" placeholder="—"></td>
                                <td class="p-3 border-l border-cyan-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none border-b border-dashed border-cyan-200 focus:border-cyan-600" placeholder="—"></td>
                            </tr>
                            <tr class="border-t-4 border-emerald-300 bg-emerald-50 font-black text-xl md:text-3xl text-emerald-800">
                                <td colspan="2" class="p-4 text-right">TỔNG ĐIỂM</td>
                                <td class="p-4 border-l border-blue-200 text-blue-600"><input class="w-full text-center bg-transparent outline-none" placeholder="0"></td>
                                <td class="p-4 border-l border-rose-200 text-rose-600"><input class="w-full text-center bg-transparent outline-none" placeholder="0"></td>
                                <td class="p-4 border-l border-amber-200 text-amber-600"><input class="w-full text-center bg-transparent outline-none" placeholder="0"></td>
                                <td class="p-4 border-l border-cyan-200 text-cyan-600"><input class="w-full text-center bg-transparent outline-none" placeholder="0"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
</div>


`;

// 3. Quiz Pool
const lesson126QuizPool = [
    { "question": "Thể tích hình lập phương cạnh 2 dm là:", "options": ["4 dm³", "8 dm³", "12 dm³", "16 dm³"], "answer": 1, "level": 1 },
    { "question": "1 m³ bằng bao nhiêu dm³?", "options": ["10 dm³", "100 dm³", "1000 dm³", "10000 dm³"], "answer": 2, "level": 1 },
    { "question": "Hộp hình lập phương cạnh 5 cm. Thể tích là:", "options": ["25 cm³", "75 cm³", "125 cm³", "150 cm³"], "answer": 2, "level": 1 },
    { "question": "Khối rubik cạnh 6 cm có thể tích:", "options": ["36 cm²", "216 cm²", "36 cm³", "216 cm³"], "answer": 3, "level": 1 },
    { "question": "1 dm³ bằng bao nhiêu cm³?", "options": ["10 cm³", "100 cm³", "1000 cm³", "10000 cm³"], "answer": 2, "level": 1 },
    { "question": "Thùng HHCN 6×4×4 dm. Xếp hộp LP cạnh 2dm. Được bao nhiêu hộp?", "options": ["8 hộp", "12 hộp", "16 hộp", "24 hộp"], "answer": 1, "level": 2 },
    { "question": "Phòng học dài 8m, rộng 6m, cao 3m. Thể tích phòng là:", "options": ["48 m³", "96 m³", "144 m³", "288 m³"], "answer": 2, "level": 2 },
    { "question": "Phòng 144 m³ xếp thùng 1 m³. Xếp được tối đa:", "options": ["14 thùng", "48 thùng", "100 thùng", "144 thùng"], "answer": 3, "level": 2 },
    { "question": "Hộp LP cạnh 2 dm, V = 8 dm³. Cần bao nhiêu hộp để đầy thùng 96 dm³?", "options": ["8 hộp", "10 hộp", "12 hộp", "16 hộp"], "answer": 2, "level": 2 },
    { "question": "100 hộp LP cạnh 2dm. Cần ít nhất bao nhiêu thùng (mỗi thùng 12 hộp)?", "options": ["8 thùng", "9 thùng", "10 thùng", "12 thùng"], "answer": 1, "level": 2 },
    { "question": "Thùng 6×4×4 dm chứa hộp LP cạnh 2dm: theo chiều dài xếp được:", "options": ["2 hộp", "3 hộp", "4 hộp", "6 hộp"], "answer": 1, "level": 3 },
    { "question": "Ước lượng: vật nào có thể tích khoảng 1 dm³?", "options": ["Cục tẩy", "Hộp sữa", "Tủ lạnh", "Bàn học"], "answer": 1, "level": 3 },
    { "question": "Phòng 10m × 8m × 4m. Xếp thùng LP cạnh 2m. Số thùng tối đa:", "options": ["10 thùng", "20 thùng", "40 thùng", "80 thùng"], "answer": 2, "level": 3 },
    { "question": "1 m³ = ? dm³ = ? cm³", "options": ["100 dm³ = 10k cm³", "1k dm³ = 100k cm³", "1k dm³ = 1tr cm³", "100 dm³ = 1tr cm³"], "answer": 2, "level": 3 },
    { "question": "Hộp LP cạnh 0,5m. Bao nhiêu hộp xếp đầy thùng 1 m³?", "options": ["2 hộp", "4 hộp", "8 hộp", "16 hộp"], "answer": 2, "level": 3 }
];

// 4. Logic & Interaction Handlers
if (typeof window !== 'undefined') {
    window.lesson126State = {
        attempts: { s1: 0, s2: 0 }
    };
}

window.submitEx126_1 = function () {
    window.lesson126State.attempts.s1++;
    const ansA = document.getElementById('ans-126-1a').value.trim();
    const ansB = document.getElementById('ans-126-1b').value.trim();

    if (!ansA || !ansB) {
        alert("Em hãy điền đầy đủ cả 2 câu trả lời!");
        return;
    }

    const correctA = (ansA === '8');
    const correctB = (ansB === '12');
    const isCorrect = correctA && correctB;
    const score = isCorrect ? 100 : (correctA || correctB ? 50 : 0);

    window.showMathFeedback(
        isCorrect,
        "a) 8 dm³; b) 12 hộp",
        `a) ${ansA} dm³; b) ${ansB} hộp`,
        "a) Tính V hộp = 2×2×2 = 8. b) Tính số hộp theo chiều dài (6:2 = 3), rộng (4:2 = 2), cao (4:2 = 2) rồi nhân lại: 3×2×2 = 12.",
        `
        <div class="text-left space-y-2">
            <p class="font-bold text-emerald-600">Lời giải chi tiết:</p>
            <p>a) Thể tích mẫu hộp là: 2 &times; 2 &times; 2 = 8 (dm³).</p>
            <p>b) Thùng có kích thước dài 6 dm, rộng 4 dm, cao 4 dm.</p>
            <p>- Số hộp xếp được theo chiều dài: 6 : 2 = 3 (hộp).</p>
            <p>- Số hộp xếp được theo chiều rộng: 4 : 2 = 2 (hộp).</p>
            <p>- Số hộp xếp được theo chiều cao: 4 : 2 = 2 (hộp).</p>
            <p>=> Số hộp có thể xếp vào 1 thùng là: 3 &times; 2 &times; 2 = 12 (hộp).</p>
        </div>
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-126-1", window.lesson126State.attempts.s1, 2, isCorrect ? 1 : 0);
};

window.submitEx126_2 = function () {
    window.lesson126State.attempts.s2++;
    const len = parseFloat(document.getElementById('ans-126-2-length').value.trim());
    const wid = parseFloat(document.getElementById('ans-126-2-width').value.trim());
    const hgt = parseFloat(document.getElementById('ans-126-2-height').value.trim());
    const vol = parseFloat(document.getElementById('ans-126-2-volume').value.trim());

    if (isNaN(len) || isNaN(wid) || isNaN(hgt) || isNaN(vol)) {
        alert("Em hãy điền đầy đủ kết quả ước lượng và số thùng tính được nhé!");
        return;
    }

    const calculatedVol = len * wid * hgt;
    const isCorrect = Math.abs(vol - calculatedVol) < 0.01;
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        `Số thùng = ${calculatedVol} thùng`,
        `Chiều dài: ${len} m, Rộng: ${wid} m, Cao: ${hgt} m. Số thùng học sinh điền: ${vol}`,
        "Ước lượng chiều dài, chiều rộng, chiều cao của phòng học. Sau đó tính số thùng bằng cách nhân ba kích thước vừa ước lượng lại với nhau.",
        `
        <div class="text-left space-y-2">
            <p class="font-bold text-emerald-600">Lời giải chi tiết dựa trên số liệu của em:</p>
            <p>- Chiều dài phòng học ước lượng là: ${len} m.</p>
            <p>- Chiều rộng phòng học ước lượng là: ${wid} m.</p>
            <p>- Chiều cao phòng học ước lượng là: ${hgt} m.</p>
            <p>- Thể tích phòng kho bằng thể tích phòng học là: ${len} &times; ${wid} &times; ${hgt} = ${calculatedVol} (m³).</p>
            <p>- Vì mỗi thùng đồ hình lập phương có thể tích là 1 m³ nên số thùng xếp được chính bằng số đo thể tích phòng.</p>
            <p>=> Số thùng xếp được nhiều nhất là: ${calculatedVol} thùng.</p>
        </div>
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-126-2", window.lesson126State.attempts.s2, 2, isCorrect ? 1 : 0);
};

// 5. Main Lesson Object
export default {
    metadata,
    lessonInfo,
    content: lesson126Content,
    practice: lesson126Practice,
    quizPool: lesson126QuizPool,
    onLoad: () => {
        console.log("Lesson 126 Loaded");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};
