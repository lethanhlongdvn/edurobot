/**
 * @file index.js
 * @description Standardized Lesson 125: Thể tích của hình lập phương (tiết 2)
 * Targets: 100% SGK compliance, showMathFeedback (5-param), submitMathLesson (6-param).
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-125",
    title: "Bài 53. Thể tích của hình lập phương (tiết 2)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "Bài 53. Thể tích của hình lập phương (tiết 2)",
    description: "Tính thể tích hình lập phương bằng công thức V = a × a × a",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 57"
};

// 2. HTML Templates
const lesson125Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <!-- 🖍️ Công thức Ghi nhớ -->
    <div class="bg-rose-50 p-8 rounded-[48px] border-4 border-rose-200 shadow-xl relative overflow-hidden">
        <div class="absolute -left-10 -bottom-10 w-40 h-40 bg-rose-200/50 rounded-full blur-2xl"></div>
        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div class="flex justify-center">
                <img src="assets/images/toan/toan_tap_2/124/124-formula.webp" alt="Công thức" class="w-full max-w-[400px] h-auto rounded-3xl shadow-xl">
            </div>
            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-rose-100">
                <h4 class="text-xl font-black text-rose-600 uppercase mb-3 tracking-widest text-center">Quy tắc cần nhớ</h4>
                <p class="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed text-center italic">
                    "Thể tích <span class="text-rose-600 font-black">V</span> của hình lập phương có cạnh <span class="text-rose-600 font-black italic text-2xl md:text-3xl">a</span> được tính theo công thức:"
                </p>
                <div class="mt-6 bg-rose-600 p-4 rounded-3xl text-white text-center shadow-lg">
                    <p class="text-3xl md:text-5xl font-black tracking-wide italic drop-shadow-md">V = a &times; a &times; a</p>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const lesson125Practice = `
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
                                <h3 class="text-xl md:text-2xl font-black text-blue-700 block">Bài 1. Chọn câu trả lời đúng</h3>
                                <p class="text-2xl md:text-3xl text-slate-800 leading-relaxed font-black tracking-tight">Khối ru-bích của Việt có dạng hình lập phương cạnh 6 cm. Thể tích của khối ru-bích đó là:</p>
                            </div>
                        </div>
                        
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        <button onclick="window.lesson125SelectMCQ('125-1', 'A')" id="btn-125-1-A" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-2xl font-black text-xl md:text-2xl text-gray-400 hover:border-blue-400 transition-all uppercase">A. 36 cm²</button>
                        <button onclick="window.lesson125SelectMCQ('125-1', 'B')" id="btn-125-1-B" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-2xl font-black text-xl md:text-2xl text-gray-400 hover:border-blue-400 transition-all uppercase">B. 216 cm²</button>
                        <button onclick="window.lesson125SelectMCQ('125-1', 'C')" id="btn-125-1-C" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-2xl font-black text-xl md:text-2xl text-gray-400 hover:border-blue-400 transition-all uppercase">C. 36 cm³</button>
                        <button onclick="window.lesson125SelectMCQ('125-1', 'D')" id="btn-125-1-D" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-2xl font-black text-xl md:text-2xl text-gray-400 hover:border-blue-400 transition-all uppercase">D. 216 cm³</button>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-125-1"E
                    <div class="flex justify-end items-center gap-4 mt-8">
                        
                        <button id=" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                        Thể tích của khối ru-bích hình lập phương là:<br>
                        6 &times; 6 &times; 6 = 216 (cm³).<br>
                        Đáp án đúng là D.
                    " onclick="btn-submit-125-1" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">w-20 h-20 md:w-24 md:h-24 bg-blue-600 text-white rounded-3xl font-black text-4xl md:text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all</button>
                    </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-125-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-125-1" onclick="window.submitEx125_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
            </div>

            <!-- Bài 3 -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-emerald-50 shadow-2xl relative overflow-hidden">
                    <div class="flex justify-between items-start gap-6 mb-12 text-left animate-none">
                        <div class="flex items-start gap-6">
                            <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                            <div class="space-y-2">
                                <h3 class="text-xl md:text-2xl font-black text-emerald-700 block">Bài 3. Ghép hình lập phương</h3>
                                <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">
                                    a) Quan sát hình vẽ và cho biết 2 khối hình nào ghép được thành hình lập phương.<br>
                                    b) Tính thể tích của hình lập phương lớn ghép được (mỗi khối nhỏ cạnh 2 cm).
                                </p>
                            </div>
                        </div>
                        
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-center">
                        <div class="p-6 bg-white rounded-[32px] border border-emerald-100 shadow-md flex items-center justify-center">
                            <img src="assets/images/toan/toan_tap_2/125/125-b3-blocks.webp" alt="Khối A, B, C" class="rounded-2xl max-w-full h-auto mx-auto shadow-sm">
                        </div>
                        <div class="space-y-6">
                            <div class="bg-emerald-50/50 p-6 rounded-[2rem] border border-emerald-100">
                                <p class="text-lg md:text-xl font-black text-emerald-800 mb-4 uppercase">a) Hai khối ghép thành hình lập phương là:</p>
                                <div class="grid grid-cols-3 gap-3">
                                    <button onclick="window.lesson125SelectMCQ('125-3a', 'AB')" id="btn-125-3a-AB" class="mcq-btn p-4 bg-white border-2 border-emerald-100 rounded-xl font-black text-lg md:text-xl text-gray-400 hover:border-emerald-400 transition-all uppercase">A và B</button>
                                    <button onclick="window.lesson125SelectMCQ('125-3a', 'AC')" id="btn-125-3a-AC" class="mcq-btn p-4 bg-white border-2 border-emerald-100 rounded-xl font-black text-lg md:text-xl text-gray-400 hover:border-emerald-400 transition-all uppercase">A và C</button>
                                    <button onclick="window.lesson125SelectMCQ('125-3a', 'BC')" id="btn-125-3a-BC" class="mcq-btn p-4 bg-white border-2 border-emerald-100 rounded-xl font-black text-lg md:text-xl text-gray-400 hover:border-emerald-400 transition-all uppercase">B và C</button>
                                </div>
                            </div>

                            <div class="bg-emerald-50/50 p-6 rounded-[2rem] border border-emerald-100 flex items-center justify-between gap-4">
                                <p class="text-lg md:text-xl font-black text-emerald-800 uppercase">b) Thể tích hình lập phương lớn:</p>
                                <div class="flex items-center gap-2">
                                    <input type="number" id="wp-full-125-3b" class="w-24 md:w-32 h-14 border-2 border-emerald-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-emerald-600 outline-none focus:ring-2 focus:ring-emerald-400" placeholder="?">
                                    <span class="text-xl md:text-2xl font-black text-emerald-800 italic">cm³</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-125-3"E
                    <div class="flex justify-end items-center gap-4 mt-8">
                        
                        <button id=" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                        a) Khối A và C ghép lại thành hình lập phương lớn.<br>
                        b) Hình lập phương lớn được ghép từ 64 khối nhỏ.<br>
                        Độ dài cạnh của hình lập phương lớn là:<br>
                        2 &times; 4 = 8 (cm).<br>
                        Thể tích của hình lập phương lớn là:<br>
                        8 &times; 8 &times; 8 = 512 (cm³).<br>
                        Đáp số: a) Khối A và C; b) 512 cm³.
                    " onclick="btn-submit-125-3" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">w-20 h-20 md:w-24 md:h-24 bg-emerald-600 text-white rounded-3xl font-black text-4xl md:text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all</button>
                    </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-125-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-125-3" onclick="window.submitEx125_3()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
            </div>

            <!-- Bài 4 -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-amber-50 shadow-2xl relative overflow-hidden">
                    <div class="flex justify-between items-start gap-6 mb-12 text-left animate-none">
                        <div class="flex items-start gap-6">
                            <div class="w-14 h-14 md:w-16 md:h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">4</div>
                            <div class="space-y-2">
                                <h3 class="text-xl md:text-2xl font-black text-amber-700 block">Bài 4. Tháp chất lỏng</h3>
                                <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Rô-bốt làm một tháp chất lỏng như hình vẽ. Hỏi phần chất lỏng nào có thể tích lớn nhất và thể tích đó bằng bao nhiêu?</p>
                            </div>
                        </div>
                        
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
                        <div class="p-6 bg-white rounded-[32px] border border-amber-100 shadow-md flex items-center justify-center">
                            <img src="assets/images/toan/toan_tap_2/125/125-b4-tower.webp" alt="Tháp chất lỏng" class="rounded-2xl max-w-full h-auto mx-auto shadow-sm">
                        </div>
                        <div class="space-y-6 flex flex-col">
                            <div class="bg-amber-50/50 p-6 rounded-[2rem] border border-amber-100">
                                <p class="text-lg md:text-xl font-black text-amber-800 mb-4 uppercase">a) Chất lỏng có thể tích lớn nhất là:</p>
                                <div class="grid grid-cols-3 gap-3">
                                    <button onclick="window.lesson125SelectMCQ('125-4a', 'dau')" id="btn-125-4a-dau" class="mcq-btn p-4 bg-white border-2 border-amber-100 rounded-xl font-black text-lg md:text-xl text-gray-400 hover:border-amber-400 transition-all uppercase">Dầu thực vật</button>
                                    <button onclick="window.lesson125SelectMCQ('125-4a', 'nuoc')" id="btn-125-4a-nuoc" class="mcq-btn p-4 bg-white border-2 border-amber-100 rounded-xl font-black text-lg md:text-xl text-gray-400 hover:border-amber-400 transition-all uppercase">Nước</button>
                                    <button onclick="window.lesson125SelectMCQ('125-4a', 'ruabat')" id="btn-125-4a-ruabat" class="mcq-btn p-4 bg-white border-2 border-amber-100 rounded-xl font-black text-lg md:text-xl text-gray-400 hover:border-amber-400 transition-all uppercase">Nước rửa bát</button>
                                </div>
                            </div>

                            <div class="bg-amber-50/50 p-6 rounded-[2rem] border border-amber-100 flex items-center justify-between gap-4">
                                <p id="label-125-4b" class="text-lg md:text-xl font-black text-amber-800 uppercase">b) Thể tích của ... là:</p>
                                <div class="flex items-center gap-2">
                                    <input type="number" id="ans-125-4b" class="w-24 md:w-32 h-14 border-2 border-amber-600 rounded-2xl text-center text-2xl md:text-3xl font-black text-amber-600 outline-none focus:ring-2 focus:ring-amber-400" placeholder="?">
                                    <span class="text-xl md:text-2xl font-black text-amber-800 italic">cm³</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-125-4"E
                    <div class="flex justify-end items-center gap-4 mt-8">
                        
                        <button id=" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                        Hình tháp có đáy hình vuông cạnh 15 cm.<br>
                        - Thể tích phần dầu thực vật (màu vàng trên cùng) là:<br>
                        15 &times; 15 &times; 10 = 2250 (cm³).<br>
                        - Thể tích phần nước (màu đỏ ở giữa) là:<br>
                        15 &times; 15 &times; 15 = 3375 (cm³).<br>
                        - Thể tích phần nước rửa bát (màu xanh lá dưới cùng) là:<br>
                        15 &times; 15 &times; 12 = 2700 (cm³).<br>
                        Vì 3375 cm³ > 2700 cm³ > 2250 cm³ nên nước có thể tích lớn nhất và bằng 3375 cm³.<br>
                        Đáp số: Nước; 3375 cm³.
                    " onclick="btn-submit-125-4" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">w-20 h-20 md:w-24 md:h-24 bg-amber-600 text-white rounded-3xl font-black text-4xl md:text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all</button>
                    </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-125-4')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-125-4" onclick="window.submitEx125_4()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
            </div>

        </div>
    </div>

</div>
`;

// 3. Quiz Pool
const lesson125QuizPool = [
    { "question": "Thể tích hình lập phương cạnh 4 cm là:", "options": ["16 cm³", "48 cm³", "64 cm³", "96 cm³"], "answer": 2, "level": 1 },
    { "question": "Hình lập phương cạnh 6 cm có thể tích là:", "options": ["36 cm³", "216 cm³", "36 cm²", "216 cm²"], "answer": 1, "level": 1 },
    { "question": "V = a × a × a là công thức tính:", "options": ["Diện tích hình vuông", "Diện tích toàn phần HLP", "Thể tích hình lập phương", "Chu vi hình vuông"], "answer": 2, "level": 1 },
    { "question": "Thể tích hình lập phương cạnh 1 dm là:", "options": ["1 dm³", "6 dm³", "10 dm³", "100 dm³"], "answer": 0, "level": 1 },
    { "question": "Xúc xắc hình lập phương cạnh 3 cm có thể tích:", "options": ["9 cm³", "18 cm³", "27 cm³", "54 cm³"], "answer": 2, "level": 1 },
    { "question": "Bể cá hình lập phương cạnh 1,5 dm. Thể tích bể là:", "options": ["2,25 dm³", "3,375 dm³", "4,5 dm³", "13,5 dm³"], "answer": 1, "level": 2 },
    { "question": "Hình lập phương có thể tích 125 cm³. Cạnh là:", "options": ["5 cm", "25 cm", "10 cm", "15 cm"], "answer": 0, "level": 2 },
    { "question": "Khối LP cạnh 10 cm chứa LP cạnh 2 cm. Xếp được:", "options": ["25 khối", "50 khối", "100 khối", "125 khối"], "answer": 3, "level": 2 },
    { "question": "Hai khối A và C ghép thành LP lớn (mỗi LP nhỏ cạnh 2 cm). Thể tích hình lập phương lớn là:", "options": ["64 cm³", "128 cm³", "256 cm³", "512 cm³"], "answer": 3, "level": 2 },
    { "question": "1 dm³ = ? cm³", "options": ["10 cm³", "100 cm³", "1000 cm³", "10000 cm³"], "answer": 2, "level": 2 },
    { "question": "Tháp chất lỏng: tầng dưới LP cạnh 15 cm, tầng giữa hình hộp chữ nhật 15×12×15, tầng trên LP cạnh 10 cm. Tầng nào lớn nhất?", "options": ["Tầng trên (dầu)", "Tầng giữa (nước)", "Tầng dưới (nước rửa bát)", "Bằng nhau"], "answer": 2, "level": 3 },
    { "question": "Thể tích hình lập phương cạnh 15 cm là:", "options": ["225 cm³", "1350 cm³", "2250 cm³", "3375 cm³"], "answer": 3, "level": 3 },
    { "question": "HLP cạnh a cm. Nếu a tăng gấp 3, thể tích tăng:", "options": ["Gấp 3", "Gấp 9", "Gấp 27", "Gấp 6"], "answer": 2, "level": 3 },
    { "question": "So sánh: HLP cạnh 8 cm và HHCN 10×6×5 cm:", "options": ["V(LP) > V(HHCN)", "V(LP) < V(HHCN)", "V(LP) = V(HHCN)", "Không so sánh được"], "answer": 0, "level": 3 },
    { "question": "Ghép 8 khối LP nhỏ cạnh 3 cm thành 1 LP lớn. Cạnh LP lớn là:", "options": ["6 cm", "9 cm", "12 cm", "24 cm"], "answer": 0, "level": 3 }
];

// 4. Logic & State Management
if (typeof window !== 'undefined') {
    window.lesson125State = {
        ex1: null,
        ex3a: null,
        ex4a: null,
        attempts: { s1: 0, s2: 0, s3: 0, s4: 0 }
    };
}

// Helper: Get base color for exercises
const getExColor = (exId) => {
    if (exId.includes('125-1')) return 'blue';
    if (exId.includes('125-2')) return 'teal';
    if (exId.includes('125-3')) return 'emerald';
    if (exId.includes('125-4')) return 'amber';
    return 'blue';
};

window.lesson125SelectMCQ = function (exId, option) {
    const color = getExColor(exId);
    const allBtns = document.querySelectorAll(`[id^="btn-${exId}-"]`);
    allBtns.forEach(btn => {
        btn.classList.remove(`bg-${color}-600`, 'text-white', 'border-transparent');
        btn.classList.add('bg-white', 'text-gray-400', `border-${color}-100`);
    });

    const selectedBtn = document.getElementById(`btn-${exId}-${option}`);
    selectedBtn.classList.remove('bg-white', 'text-gray-400', `border-${color}-100`);
    selectedBtn.classList.add(`bg-${color}-600`, 'text-white', 'border-transparent');

    if (exId === '125-1') window.lesson125State.ex1 = option;
    if (exId === '125-3a') window.lesson125State.ex3a = option;
    if (exId === '125-4a') {
        window.lesson125State.ex4a = option;
        const liquidNames = {
            'dau': 'dầu thực vật',
            'nuoc': 'nước',
            'ruabat': 'nước rửa bát'
        };
        const nameText = liquidNames[option] || '...';
        const dynamicLabel = document.getElementById('label-125-4b');
        if (dynamicLabel) {
            dynamicLabel.innerText = `b) Thể tích của ${nameText} là:`;
        }
    }
};

// --- Exercise Submission Handlers ---

window.submitEx125_1 = function () {
    window.lesson125State.attempts.s1++;
    const selected = window.lesson125State.ex1;
    if (!selected) {
        alert("Em hãy chọn một đáp án!");
        return;
    }

    const isCorrect = (selected === 'D');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "D. 216 cm³",
        selected,
        "Nhớ công thức V = a × a × a. Cạnh là 6 cm, vậy V = 6 × 6 × 6 = 216 (cm³).",
        `
        <div class="text-left space-y-2">
            <p class="font-bold text-emerald-600">Tuyệt vời! Giải thích chi tiết:</p>
            <p>- Công thức tính thể tích hình lập phương: V = a &times; a &times; a</p>
            <p>- Thay số vào: V = 6 &times; 6 &times; 6 = 216 (cm³)</p>
            <p>- Đáp án D là chính xác.</p>
        </div>
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-125-1", window.lesson125State.attempts.s1, 4, isCorrect ? 1 : 0);
};

window.submitEx125_2 = function () {
    window.lesson125State.attempts.s2++;
    const ansA = document.getElementById('ans-125-2a').value.trim();
    const ansB = document.getElementById('ans-125-2b').value.trim().replace(',', '.');

    if (!ansA || !ansB) {
        alert("Em hãy điền đầy đủ cả 2 ô trống!");
        return;
    }

    const correctA = (ansA === '27');
    const correctB = (ansB === '3.375');
    const isCorrect = correctA && correctB;
    const score = isCorrect ? 100 : (correctA || correctB ? 50 : 0);

    window.showMathFeedback(
        isCorrect,
        "27 và 3.375",
        `${ansA} và ${ansB}`,
        "Em hãy tính V = a × a × a. Xúc xắc 3&times;3&times;3, Bể cá 1.5&times;1.5&times;1.5.",
        `
        <div class="text-left space-y-2">
            <p class="font-bold text-emerald-600">Đáp án đúng:</p>
            <p>1. Xúc xắc: V = 3 &times; 3 &times; 3 = 27 (cm³)</p>
            <p>2. Bể cá: V = 1.5 &times; 1.5 &times; 1.5 = 3.375 (dm³)</p>
        </div>
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-125-2", window.lesson125State.attempts.s2, 4, isCorrect ? 1 : 0);
};

window.submitEx125_3 = function () {
    window.lesson125State.attempts.s3++;
    const selectedA = window.lesson125State.ex3a;
    const solutionB = document.getElementById('wp-full-125-3b').value.trim();

    if (!selectedA || !solutionB) {
        alert("Em hãy hoàn thành cả câu a và viết lời giải câu b!");
        return;
    }

    const correctA = (selectedA === 'AC');
    const correctB = solutionB.includes('512');
    const isCorrect = correctA && correctB;
    const score = (correctA ? 50 : 0) + (correctB ? 50 : 0);

    window.showMathFeedback(
        isCorrect,
        "A và C; 512 cm³",
        `Ghép ${selectedA}; Lời giải: ${solutionB}`,
        "Câu a: Em hãy quan sát xem hai khối nào khi ghép lại sẽ bù đắp phần khuyết cho nhau để tạo thành một hình lập phương lớn hoàn chỉnh.<br>Câu b: Hãy tìm độ dài cạnh của hình lập phương lớn bằng cách nhân cạnh hình lập phương nhỏ với số khối xếp dọc theo một cạnh, sau đó áp dụng công thức tính thể tích V = a &times; a &times; a.",
        `
        a) Khối A và C ghép lại thành hình lập phương lớn.<br>
        b) Hình lập phương lớn được ghép từ 64 khối nhỏ.<br>
        Độ dài cạnh của hình lập phương lớn là:<br>
        2 &times; 4 = 8 (cm).<br>
        Thể tích của hình lập phương lớn là:<br>
        8 &times; 8 &times; 8 = 512 (cm³).<br>
        Đáp số: a) Khối A và C; b) 512 cm³.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-125-3", window.lesson125State.attempts.s3, 4, isCorrect ? 1 : 0);
};

window.submitEx125_4 = function () {
    window.lesson125State.attempts.s4++;
    const selectedA = window.lesson125State.ex4a;
    const ansB = document.getElementById('ans-125-4b').value.trim();

    if (!selectedA || !ansB) {
        alert("Em hãy chọn chất lỏng ở câu a và điền thể tích ở câu b!");
        return;
    }

    const correctA = (selectedA === 'nuoc');
    const correctB = (ansB === '3375');
    const isCorrect = correctA && correctB;
    const score = (correctA ? 50 : 0) + (correctB ? 50 : 0);

    const liquidNamesFull = {
        'dau': 'Dầu thực vật',
        'nuoc': 'Nước',
        'ruabat': 'Nước rửa bát'
    };

    window.showMathFeedback(
        isCorrect,
        "Nước; 3375 cm³",
        `${liquidNamesFull[selectedA] || 'Chưa chọn'}; ${ansB} cm³`,
        "Câu a: Tính thể tích từng phần để tìm phần lớn nhất. Câu b: Trả lời thể tích của phần nước đó là 15&times;15&times;15 = 3375.",
        `
        <div class="text-left space-y-2">
            <p class="font-bold text-emerald-600">Lời giải chi tiết:</p>
            <p>- V dầu thực vật (tầng trên): 15 &times; 15 &times; 10 = 2250 (cm³)</p>
            <p>- V nước (tầng giữa): 15 &times; 15 &times; 15 = 3375 (cm³)</p>
            <p>- V nước rửa bát (tầng dưới): 15 &times; 15 &times; 12 = 2700 (cm³)</p>
            <p>Vì 3375 cm³ > 2700 cm³ > 2250 cm³ nên nước có thể tích lớn nhất và bằng 3375 cm³.</p>
        </div>
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-125-4", window.lesson125State.attempts.s4, 4, isCorrect ? 1 : 0);
};

window.submitWordProblemAILocal = function (id) {
    const solution = document.getElementById('wp-full-' + id)?.value || '';
    if (!solution.trim()) {
        alert("Thầy E nhắc: Em chưa viết bài giải. Hãy viết lời giải, phép tính và đáp số đầy đủ nhé! ✏️");
        return;
    }

    let prompt = "";
    if (id === '125-3b') {
        prompt = `Mỗi khối LP nhỏ cạnh 2 cm. Tính thể tích LP lớn ghép từ A và C.<br><br>Bài giải của học sinh:<br>${solution}`;
    } else if (id === '125-4') {
        prompt = `Tháp chất lỏng: dưới LP cạnh 15cm, giữa HHCN 15x12x15, trên LP 10cm. Hỏi phần nào lớn nhất và bao nhiêu?<br><br>Bài giải của học sinh:<br>${solution}`;
    }

    if (window.AIInteraction?.gradeWithModal) {
        window.AIInteraction.gradeWithModal("👨‍🏫 Thầy E Nhận Xét", prompt + "\n\n[HƯỚNG DẪN AI]: Khen ngợi nếu đúng, chỉ lỗi nếu sai, KHÔNG cho đáp án.");
    } else {
        alert("Thầy E đang chấm bài của em... (AI phản hồi qua Chat)");
    }
};

// 5. Main Lesson Object
export default {
    metadata,
    lessonInfo,
    content: lesson125Content,
    practice: lesson125Practice,
    quizPool: lesson125QuizPool,
    onLoad: () => {
        console.log("Lesson 125 Loaded: Thể tích hình lập phương");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};
