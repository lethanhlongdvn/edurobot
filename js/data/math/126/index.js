/**
 * @file index.js
 * @description Standardized Lesson 126: Thực hành tính toán và ước lượng thể tích
 * Targets: 100% SGK compliance, showMathFeedback (5-param), submitMathLesson (6-param), Purple Ban fix.
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-126",
    title: "Tiết 126: Thực hành tính toán và ước lượng thể tích",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "TIẾT 126: THỰC HÀNH TÍNH TOÁN VÀ ƯỚC LƯỢNG THỂ TÍCH",
    description: "Vận dụng kiến thức thể tích để tính toán và ước lượng trong thực tế.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 58-59"
};

// 2. HTML Templates
const lesson126Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <!-- Hero -->
    <div class="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] md:rounded-[48px] p-8 md:p-12 border border-orange-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
        <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div class="w-20 h-20 md:w-28 md:h-28 bg-orange-600 rounded-3xl flex items-center justify-center text-5xl md:text-7xl shadow-xl shadow-orange-200 dark:shadow-orange-900/40 shrink-0 transform rotate-6 text-white">📦</div>
            <p class="text-2xl md:text-4xl text-orange-700 dark:text-orange-400 font-bold italic leading-relaxed text-center md:text-left">Thực hành tính toán và ước lượng thể tích một số hình khối trong thực tế.</p>
        </div>
    </div>
</div>
`;

const lesson126Practice = `
<div class="space-y-12 animate-fade-in pb-10">
    <!-- Bài 1: Xếp hộp vào thùng -->
    <div class="bg-white p-3 rounded-[48px] shadow-xl border border-orange-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-126-1">
        <div class="p-8 md:p-12 bg-orange-50 dark:bg-slate-900 rounded-[40px]">
            <div class="flex items-start gap-5 mb-6">
                <div class="w-14 h-14 bg-orange-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">1</div>
                <div>
                    <p class="text-2xl md:text-4xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                        Công ty của mẹ Mai đặt mua 100 chậu cây tái chế của lớp 5A. Lớp 5A đã chọn mẫu hộp dạng hình lập phương cạnh <b class="text-orange-600">2 dm</b> để đựng mỗi chậu cây.
                    </p>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row gap-8 items-stretch mb-8">
                <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-orange-100 shadow-md flex items-center justify-center">
                    <img src="assets/images/toan/toan_tap_2/126-b1-box.webp" alt="Hộp và thùng" class="w-full h-auto rounded-2xl">
                </div>
                <div class="w-full lg:w-1/2 flex flex-col gap-6">
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border border-orange-100 shadow-sm">
                        <p class="text-3xl md:text-5xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                            <span class="text-orange-600 font-black">a)</span> Tính thể tích của mẫu hộp đó.
                        </p>
                    </div>
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border border-orange-100 shadow-sm flex-1">
                        <p class="text-3xl md:text-5xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                            <span class="text-orange-600 font-black">b)</span> Quan sát kích thước thùng và ước lượng số hộp có thể xếp vào 1 thùng.
                        </p>
                    </div>
                </div>
            </div>

            <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-orange-200 shadow-sm relative">
                <p class="text-lg md:text-2xl font-black text-orange-600 uppercase tracking-widest mb-4">📝 Bài làm</p>
                <textarea id="ans-126-1" rows="5" class="w-full p-6 pr-14 rounded-2xl border-2 border-orange-200 bg-orange-50/50 dark:bg-slate-900 outline-none focus:border-orange-500 text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-100 placeholder:text-gray-300 transition-all resize-none shadow-inner leading-relaxed" placeholder="Bài giải:&#10;a) Thể tích mẫu hộp: ...&#10;b) Thể tích thùng: ...&#10;   Số hộp xếp được: ...&#10;Đáp số: ..."></textarea>
                <button id="btn-mic-126-1" onclick="Lesson.toggleSpeechRec('ans-126-1')" class="absolute right-4 top-4 text-orange-400 hover:text-orange-600 p-2" title="Giọng nói">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                </button>
                <div id="mic-status-126-1" class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full animate-pulse hidden z-10 whitespace-nowrap">Đang nghe...</div>
                <div class="mt-6 flex flex-col items-center gap-4">
                    <div class="flex justify-center items-center gap-4">
                        <button onclick="window.submitWordProblemAILocal('126-1')" class="w-14 h-14 bg-orange-100 text-orange-600 hover:bg-orange-200 rounded-2xl font-black text-2xl transition-all active:scale-95 flex items-center justify-center border-2 border-orange-200" title="Thầy E chấm bài">E</button>
                        <button id="btn-submit-126-1" onclick="window.submitEx126_1()" class="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-2xl font-black text-xl uppercase tracking-wider shadow-lg transition-all active:scale-95 flex items-center gap-2">
                            NỘP BÀI 1 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bài 2: Ước lượng phòng học -->
    <div class="bg-white p-3 rounded-[48px] shadow-xl border border-blue-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-126-2">
        <div class="p-8 md:p-12 bg-blue-50 dark:bg-slate-900 rounded-[40px]">
            <div class="flex items-start gap-5 mb-6">
                <div class="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">2</div>
                <div>
                    <p class="text-2xl md:text-4xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                        Em hãy ước lượng chiều rộng, chiều dài, chiều cao phòng học của em. Tính số thùng đồ hình lập phương thể tích <b class="text-blue-600">1 m³</b> có thể xếp đầy phòng kho đó.
                    </p>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row gap-8 items-stretch">
                <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-blue-100 shadow-md flex items-center justify-center">
                    <img src="assets/images/toan/toan_tap_2/126-b2-room.webp" alt="Phòng học" class="w-full h-auto rounded-2xl">
                </div>
                <div class="w-full lg:w-1/2 bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-blue-200 shadow-sm flex flex-col relative">
                    <p class="text-lg md:text-2xl font-black text-blue-600 uppercase tracking-widest mb-4">📝 Bài làm</p>
                    <div class="relative flex-grow">
                        <textarea id="ans-126-2" rows="5" class="w-full p-6 pr-14 rounded-2xl border-2 border-blue-200 bg-blue-50/50 dark:bg-slate-900 outline-none focus:border-blue-500 text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-100 placeholder:text-gray-300 transition-all resize-none shadow-inner leading-relaxed" placeholder="Bài giải:&#10;Ước lượng phòng học: dài ... m, rộng ... m, cao ... m&#10;Thể tích phòng: ...&#10;Số thùng 1m³ xếp được: ..."></textarea>
                        <button id="btn-mic-126-2" onclick="Lesson.toggleSpeechRec('ans-126-2')" class="absolute right-4 top-4 text-blue-400 hover:text-blue-600 p-2" title="Giọng nói">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                        </button>
                        <div id="mic-status-126-2" class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full animate-pulse hidden z-10 whitespace-nowrap">Đang nghe...</div>
                    </div>
                    <div class="mt-6 flex flex-col items-center gap-4">
                        <div class="flex justify-center items-center gap-4">
                            <button onclick="window.submitWordProblemAILocal('126-2')" class="w-14 h-14 bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-2xl font-black text-2xl transition-all active:scale-95 flex items-center justify-center border-2 border-blue-200" title="Thầy E chấm bài">E</button>
                            <button id="btn-submit-126-2" onclick="window.submitEx126_2()" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-black text-xl uppercase tracking-wider shadow-lg transition-all active:scale-95 flex items-center gap-2">
                                NỘP BÀI 2 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- TRÒ CHƠI: ĐƯỜNG ĐUA (Purple Ban fix: using emerald/teal/cyan/rose/amber/blue) -->
    <div class="bg-white p-3 rounded-[48px] shadow-xl border border-emerald-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-126-game">
        <div class="p-8 md:p-12 bg-gradient-to-br from-emerald-50 to-teal-50 dark:bg-slate-900 rounded-[40px]">
            <div class="flex items-center gap-5 mb-8">
                <div class="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">🏁</div>
                <h3 class="text-3xl md:text-5xl font-black text-emerald-800 dark:text-emerald-100 leading-tight uppercase">Trò chơi: Đường đua</h3>
            </div>

            <div class="flex flex-col lg:flex-row gap-8 items-stretch mb-8">
                <div class="w-full lg:w-1/2 space-y-6">
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border border-emerald-100 shadow-sm">
                        <p class="text-lg md:text-2xl font-black text-emerald-600 uppercase tracking-widest mb-4">📋 Chuẩn bị</p>
                        <p class="text-xl md:text-3xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">Hộp dạng hình hộp chữ nhật và hình lập phương đặt xung quanh lớp học.</p>
                    </div>
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border border-emerald-100 shadow-sm">
                        <p class="text-lg md:text-2xl font-black text-emerald-600 uppercase tracking-widest mb-4">🎯 Cách chơi</p>
                        <ul class="space-y-4 text-xl md:text-2xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed text-left">
                            <li class="flex items-start gap-3"><span class="text-emerald-500 shrink-0">▸</span> Chơi theo nhóm.</li>
                            <li class="flex items-start gap-3"><span class="text-emerald-500 shrink-0">▸</span> Giáo viên đọc một số đo thể tích. Nhóm lựa chọn hộp có thể tích gần nhất.</li>
                            <li class="flex items-start gap-3"><span class="text-emerald-500 shrink-0">▸</span> Nhóm thắng cuộc là nhóm giành được nhiều điểm nhất sau 5 lượt.</li>
                        </ul>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-emerald-100 shadow-md flex items-center justify-center">
                    <img src="assets/images/toan/toan_tap_2/126-game.webp" alt="Trò chơi Đường đua" class="w-full h-auto rounded-2xl">
                </div>
            </div>

            <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-emerald-200 shadow-sm">
                <p class="text-lg md:text-2xl font-black text-emerald-600 uppercase tracking-widest mb-6">🏆 Bảng điểm</p>
                <div class="overflow-auto rounded-2xl border-2 border-emerald-200">
                    <table class="w-full text-center">
                        <thead>
                            <tr>
                                <th class="p-4 bg-emerald-600 text-white text-xl font-black">Lượt</th>
                                <th class="p-4 bg-emerald-600 text-white text-xl font-black border-l border-emerald-500">GV đọc (cm³/dm³)</th>
                                <th class="p-4 bg-blue-600 text-white text-xl font-black border-l border-blue-500">Nhóm 1</th>
                                <th class="p-4 bg-rose-600 text-white text-xl font-black border-l border-rose-500">Nhóm 2</th>
                                <th class="p-4 bg-amber-600 text-white text-xl font-black border-l border-amber-500">Nhóm 3</th>
                                <th class="p-4 bg-cyan-600 text-white text-xl font-black border-l border-cyan-500">Nhóm 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${[1, 2, 3, 4, 5].map(i => `
                                <tr class="border-t border-emerald-100">
                                    <td class="p-3 bg-emerald-50 font-black text-xl text-emerald-800">\${i}</td>
                                    <td class="p-3 border-l border-emerald-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="..."></td>
                                    <td class="p-3 border-l border-blue-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td>
                                    <td class="p-3 border-l border-rose-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td>
                                    <td class="p-3 border-l border-amber-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td>
                                    <td class="p-3 border-l border-cyan-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td>
                                </tr>
                            `).join('')}
                            <tr class="border-t-4 border-emerald-300 bg-emerald-50 font-black text-2xl text-emerald-800">
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

    <!-- Phần Củng cố Premium -->
    <div class="mt-16 p-8 md:p-10 bg-gradient-to-br from-blue-600 to-teal-800 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-[100px] group-hover:bg-white/20 transition-all duration-1000"></div>
        <div class="relative z-10 flex flex-col items-center gap-6 text-center">
            <div class="space-y-3">
                <h3 class="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none drop-shadow-xl">Cùng chinh phục Quiz!</h3>
                <p class="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed w-full italic mx-auto">Vượt qua các câu hỏi để nhận ngay huy chương "Bậc thầy ước lượng" nhé!</p>
            </div>
            <button onclick="document.getElementById('tab-quiz')?.click(); window.scrollTo({top: 0, behavior: 'smooth'});" 
                    class="bg-yellow-400 text-blue-900 hover:bg-yellow-300 px-10 py-4 rounded-3xl font-black text-2xl uppercase tracking-tighter shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-4 mt-2 group">
                BẮT ĐẦU <svg class="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
            </button>
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
    const solution = document.getElementById('ans-126-1').value.trim();

    if (!solution) {
        alert("Em hãy trình bày bài giải!");
        return;
    }

    const containsA = solution.includes('8'); // 2*2*2 = 8 dm³
    const containsB = solution.includes('12'); // (6/2)*(4/2)*(4/2) = 3*2*2 = 12 boxes
    const isCorrect = containsA && containsB;
    const score = isCorrect ? 100 : (containsA || containsB ? 50 : 0);

    window.showMathFeedback(
        isCorrect,
        "a) 8 dm³; b) 12 hộp",
        solution,
        "a) Tính V hộp = 2×2×2. b) Tính số hộp theo chiều dài (6:2), rộng (4:2), cao (4:2) rồi nhân lại.",
        `
        <div class="text-left space-y-2">
            <p class="font-bold text-emerald-600">Lời giải chi tiết:</p>
            <p>a) Thể tích mẫu hộp: 2 × 2 × 2 = 8 (dm³).</p>
            <p>b) Thùng có kích thước 6 dm, 4 dm, 4 dm.</p>
            <p>- Chiều dài xếp được: 6 : 2 = 3 (hộp).</p>
            <p>- Chiều rộng xếp được: 4 : 2 = 2 (hộp).</p>
            <p>- Chiều cao xếp được: 4 : 2 = 2 (hộp).</p>
            <p>=> Số hộp xếp được trong 1 thùng: 3 × 2 × 2 = 12 (hộp).</p>
        </div>
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-126-1", window.lesson126State.attempts.s1, 2, isCorrect ? 1 : 0);
};

window.submitEx126_2 = function() {
    window.lesson126State.attempts.s2++;
    const solution = document.getElementById('ans-126-2').value.trim();
    
    if (!solution) {
        alert("Em hãy trình bày bài giải!");
        return;
    }

    // Since this is estimations, we accept length > 20 and presence of 'm' or 'thùng'
    const isReasonable = solution.length > 20 && (solution.includes('m') || solution.includes('thùng'));
    const score = isReasonable ? 100 : 50;

    window.showMathFeedback(
        isReasonable,
        "Tùy vào ước lượng (VD: 8m, 6m, 3m => 144 thùng)",
        solution,
        "Ước lượng kích thước phòng học, tính thể tích (dài × rộng × cao). Thể tích đó chính là số thùng 1m³ xếp được.",
        `
        <div class="text-left space-y-2">
            <p class="font-bold text-emerald-600">Hướng dẫn:</p>
            <p>- Giả sử phòng học dài 8m, rộng 6m, cao 3m.</p>
            <p>- Thể tích phòng: 8 × 6 × 3 = 144 (m³).</p>
            <p>- Vì mỗi thùng có thể tích 1 m³ nên số thùng xếp được chính bằng số đo thể tích phòng.</p>
            <p>=> Xếp được 144 thùng.</p>
        </div>
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-126-2", window.lesson126State.attempts.s2, 2, isReasonable ? 1 : 0);
};

window.submitWordProblemAILocal = function(id) {
    const solution = document.getElementById('ans-' + id)?.value || '';
    if (!solution.trim()) {
        alert("Thầy E nhắc: Em hãy viết bài giải nhé! ✏️");
        return;
    }

    let prompt = "";
    if (id === '126-1') {
        prompt = `Đề bài: Hộp 2dm cạnh. a) Thể tích? b) Thùng 6x4x4 dm xếp được bao nhiêu hộp?\n\nBài giải của học sinh:\n\${solution}`;
    } else if (id === '126-2') {
        prompt = `Đề bài: Ước lượng phòng học và tính số thùng 1m³ xếp được.\n\nBài giải của học sinh:\n\${solution}`;
    }

    if (window.AIInteraction?.gradeWithModal) {
        window.AIInteraction.gradeWithModal("👨‍🏫 Thầy E Nhận Xét", prompt + "\\n\\n[HƯỚNG DẪN AI]: Khen ngợi nếu đúng, chỉ lỗi nếu sai. Lưu ý Bài 2 là ước lượng nên linh hoạt.");
    } else {
        alert("Thầy E đang chấm bài của em...");
    }
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

