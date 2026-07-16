/**
 * @file index.js
 * @description Standardized Lesson 125: Thể tích hình lập phương (Volume of a Cube)
 * Targets: 100% SGK compliance, showMathFeedback (5-param), submitMathLesson (6-param).
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-125",
    title: "Tiết 125: Thể tích hình lập phương",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "TIẾT 125: THỂ TÍCH HÌNH LẬP PHƯƠNG",
    description: "Tính thể tích hình lập phương bằng công thức V = a × a × a",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang ..."
};

// 2. HTML Templates
const lesson125Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <!-- 🖍️ Công thức Ghi nhớ -->
    <div class="bg-rose-50 p-8 rounded-[48px] border-4 border-rose-200 shadow-xl relative overflow-hidden">
        <div class="absolute -left-10 -bottom-10 w-40 h-40 bg-rose-200/50 rounded-full blur-2xl"></div>
        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div class="flex justify-center">
                <img src="assets/images/toan/toan_tap_2/124-formula.webp" alt="Công thức" class="w-full max-w-[400px] h-auto rounded-3xl shadow-xl">
            </div>
            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-rose-100">
                <h4 class="text-xl font-black text-rose-600 uppercase mb-3 tracking-widest text-center">Quy tắc cần nhớ</h4>
                <p class="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed text-center italic">
                    "Thể tích <span class="text-rose-600 font-black">V</span> của hình lập phương có cạnh <span class="text-rose-600 font-black italic text-3xl">a</span> được tính theo công thức:"
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
<div class="space-y-12 animate-fade-in pb-10">
    <!-- Bài tập 1: Chọn câu trả lời đúng -->
    <div class="bg-white p-3 rounded-[48px] shadow-xl border border-blue-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-125-1">
        <div class="p-8 md:p-12 bg-blue-50 dark:bg-slate-900 rounded-[40px]">
            <div class="flex items-start gap-5 mb-6">
                <div class="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">1</div>
                <h3 class="text-3xl md:text-5xl font-black text-blue-900 dark:text-blue-100 leading-tight">Chọn câu trả lời đúng.</h3>
            </div>

            <p class="text-2xl md:text-4xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed mb-8 ml-2">
                Khối ru-bích của Việt có dạng hình lập phương cạnh <b class="text-blue-600">6 cm</b>. Thể tích của khối ru-bích đó là:
            </p>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button onclick="window.lesson125SelectMCQ('125-1', 'A')" id="btn-125-1-A" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-blue-400 transition-all">A. 36 cm²</button>
                <button onclick="window.lesson125SelectMCQ('125-1', 'B')" id="btn-125-1-B" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-blue-400 transition-all">B. 216 cm²</button>
                <button onclick="window.lesson125SelectMCQ('125-1', 'C')" id="btn-125-1-C" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-blue-400 transition-all">C. 36 cm³</button>
                <button onclick="window.lesson125SelectMCQ('125-1', 'D')" id="btn-125-1-D" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-blue-400 transition-all">D. 216 cm³</button>
            </div>
            <div class="mt-6 flex flex-col items-center gap-4">
                <button id="btn-submit-125-1" onclick="window.submitEx125_1()" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-black text-xl uppercase tracking-wider shadow-lg transition-all active:scale-95 flex items-center gap-2">
                    NỘP BÀI 1 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Bài tập 2: Hoàn thành bảng -->
    <div class="bg-white p-3 rounded-[48px] shadow-xl border border-teal-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-125-2">
        <div class="p-8 md:p-12 bg-teal-50 dark:bg-slate-900 rounded-[40px]">
            <div class="flex items-start gap-5 mb-8">
                <div class="w-14 h-14 bg-teal-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">2</div>
                <h3 class="text-3xl md:text-5xl font-black text-teal-900 dark:text-teal-100 leading-tight">Hoàn thành bảng sau.</h3>
            </div>

            <div class="flex flex-col lg:flex-row gap-8 items-stretch">
                <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-teal-100 shadow-md flex items-center justify-center">
                    <img src="assets/images/toan/toan_tap_2/125-b2-items.webp" alt="Đồ vật" class="w-full h-auto rounded-2xl">
                </div>
                <div class="w-full lg:w-1/2">
                    <div class="overflow-hidden rounded-[32px] border-2 border-teal-200">
                        <table class="w-full text-center">
                            <thead>
                                <tr>
                                    <th class="p-6 bg-teal-600 text-white text-xl md:text-2xl font-black">Đồ vật dạng hình lập phương</th>
                                    <th class="p-6 bg-teal-500 text-white text-xl md:text-2xl font-black border-l-2 border-teal-400">🎲 Xúc xắc<br><span class="text-lg font-bold opacity-80">(cạnh 3 cm)</span></th>
                                    <th class="p-6 bg-cyan-500 text-white text-xl md:text-2xl font-black border-l-2 border-cyan-400">🐟 Bể cá<br><span class="text-lg font-bold opacity-80">(cạnh 1,5 dm)</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-6 bg-teal-50 text-xl md:text-2xl font-black text-teal-900">Thể tích của đồ vật</td>
                                    <td class="p-4 bg-white border-l-2 border-teal-100">
                                        <input type="number" id="ans-125-2a" class="w-full text-3xl md:text-4xl font-black text-teal-600 bg-transparent text-center outline-none" placeholder="?">
                                        <p class="text-lg font-bold text-gray-400 mt-1">cm³</p>
                                    </td>
                                    <td class="p-4 bg-white border-l-2 border-cyan-100">
                                        <input type="number" step="0.001" id="ans-125-2b" class="w-full text-3xl md:text-4xl font-black text-cyan-600 bg-transparent text-center outline-none" placeholder="?">
                                        <p class="text-lg font-bold text-gray-400 mt-1">dm³</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-6 flex flex-col items-center gap-4">
                        <button id="btn-submit-125-2" onclick="window.submitEx125_2()" class="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-2xl font-black text-xl uppercase tracking-wider shadow-lg transition-all active:scale-95 flex items-center gap-2">
                            NỘP BÀI 2 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bài tập 3: Ghép khối lập phương (Changed colors from purple to emerald for Purple Ban) -->
    <div class="bg-white p-3 rounded-[48px] shadow-xl border border-emerald-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-125-3">
        <div class="p-8 md:p-12 bg-emerald-50 dark:bg-slate-900 rounded-[40px]">
            <div class="flex items-start gap-5 mb-6">
                <div class="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">3</div>
                <div>
                    <p class="text-2xl md:text-4xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                        <span class="text-emerald-600 font-black">a)</span> Quan sát hình vẽ và cho biết 2 khối hình nào ghép được thành hình lập phương.
                    </p>
                </div>
            </div>

            <div class="flex justify-center mb-8">
                <div class="p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-emerald-100 shadow-md inline-block">
                    <img src="assets/images/toan/toan_tap_2/125-b3-blocks.webp" alt="Khối A, B, C" class="w-full max-w-[600px] h-auto rounded-2xl">
                </div>
            </div>

            <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] shadow-sm border border-emerald-100 mb-8">
                <p class="text-xl md:text-3xl font-black text-emerald-600 mb-6">Hai khối ghép được thành hình lập phương là:</p>
                <div class="grid grid-cols-3 gap-4">
                    <button onclick="window.lesson125SelectMCQ('125-3a', 'AB')" id="btn-125-3a-AB" class="mcq-btn p-5 bg-emerald-50 border-2 border-emerald-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-emerald-400 transition-all">A và B</button>
                    <button onclick="window.lesson125SelectMCQ('125-3a', 'AC')" id="btn-125-3a-AC" class="mcq-btn p-5 bg-emerald-50 border-2 border-emerald-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-emerald-400 transition-all">A và C</button>
                    <button onclick="window.lesson125SelectMCQ('125-3a', 'BC')" id="btn-125-3a-BC" class="mcq-btn p-5 bg-emerald-50 border-2 border-emerald-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-emerald-400 transition-all">B và C</button>
                </div>
            </div>

            <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] shadow-sm border border-emerald-100">
                <p class="text-xl md:text-3xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed mb-6">
                    <span class="text-emerald-600 font-black">b)</span> Biết mỗi hình lập phương nhỏ trong hình trên có cạnh <b class="text-emerald-600">2 cm</b>. Hãy tính thể tích của hình lập phương lớn ghép được ở câu a.
                </p>
                <div class="relative">
                    <textarea id="wp-full-125-3b" rows="4" class="w-full p-6 pr-14 rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 dark:bg-slate-900 outline-none focus:border-emerald-500 text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-100 placeholder:text-gray-300 transition-all resize-none shadow-inner leading-relaxed" placeholder="Bài giải:&#10;&#10;&#10;Đáp số: ... cm³"></textarea>
                    <button id="btn-mic-125-3b" onclick="Lesson.toggleSpeechRec('wp-full-125-3b')" class="absolute right-4 top-4 text-emerald-400 hover:text-emerald-600 p-2" title="Giọng nói">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                    </button>
                    <div id="mic-status-125-3b" class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full animate-pulse hidden z-10 whitespace-nowrap">Đang nghe...</div>
                </div>
                <div class="mt-6 flex flex-col items-center gap-4">
                    <div class="flex justify-center items-center gap-4">
                        <button onclick="window.submitWordProblemAILocal('125-3b')" class="w-14 h-14 bg-emerald-100 text-emerald-600 hover:bg-emerald-200 rounded-2xl font-black text-2xl transition-all active:scale-95 flex items-center justify-center border-2 border-emerald-200" title="Thầy E chấm bài">E</button>
                        <button id="btn-submit-125-3" onclick="window.submitEx125_3()" class="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-2xl font-black text-xl uppercase tracking-wider shadow-lg transition-all active:scale-95 flex items-center gap-2">
                            NỘP BÀI 3 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bài tập 4: Tháp chất lỏng -->
    <div class="bg-white p-3 rounded-[48px] shadow-xl border border-amber-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-125-4">
        <div class="p-8 md:p-12 bg-amber-50 dark:bg-slate-900 rounded-[40px]">
            <div class="flex items-start gap-5 mb-6">
                <div class="w-14 h-14 bg-amber-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">4</div>
                <div>
                    <p class="text-2xl md:text-4xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                        Rô-bốt làm một tháp chất lỏng như hình dưới đây.
                    </p>
                    <p class="text-2xl md:text-4xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed mt-2">
                        Hỏi phần chất lỏng nào có <b class="text-amber-600">thể tích lớn nhất</b> và thể tích đó bằng bao nhiêu?
                    </p>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row gap-8 items-stretch">
                <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-amber-100 shadow-md flex items-center justify-center">
                    <img src="assets/images/toan/toan_tap_2/125-b4-tower.webp" alt="Tháp chất lỏng" class="w-full h-auto rounded-2xl">
                </div>
                <div class="w-full lg:w-1/2 bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-amber-200 shadow-sm flex flex-col">
                    <p class="text-lg md:text-2xl font-black text-amber-600 uppercase tracking-widest mb-4">📝 Bài làm</p>
                    <div class="relative flex-grow">
                        <textarea id="wp-full-125-4" rows="6" class="w-full p-6 pr-14 rounded-2xl border-2 border-amber-200 bg-amber-50/50 dark:bg-slate-900 outline-none focus:border-amber-500 text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-100 placeholder:text-gray-300 transition-all resize-none shadow-inner leading-relaxed" placeholder="Bài giải:&#10;&#10;&#10;&#10;&#10;Đáp số: ..."></textarea>
                        <button id="btn-mic-125-4" onclick="Lesson.toggleSpeechRec('wp-full-125-4')" class="absolute right-4 top-4 text-amber-400 hover:text-amber-600 p-2" title="Giọng nói">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                        </button>
                        <div id="mic-status-125-4" class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full animate-pulse hidden z-10 whitespace-nowrap">Đang nghe...</div>
                    </div>
                    <div class="mt-6 flex flex-col items-center gap-4">
                        <div class="flex justify-center items-center gap-4">
                            <button onclick="window.submitWordProblemAILocal('125-4')" class="w-14 h-14 bg-amber-100 text-amber-600 hover:bg-amber-200 rounded-2xl font-black text-2xl transition-all active:scale-95 flex items-center justify-center border-2 border-amber-200" title="Thầy E chấm bài">E</button>
                            <button id="btn-submit-125-4" onclick="window.submitEx125_4()" class="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-2xl font-black text-xl uppercase tracking-wider shadow-lg transition-all active:scale-95 flex items-center gap-2">
                                NỘP BÀI 4 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Phần Củng cố Premium (Changed from indigo/purple to blue/teal) -->
    <div class="mt-16 p-8 md:p-10 bg-gradient-to-br from-blue-600 to-teal-800 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-[100px] group-hover:bg-white/20 transition-all duration-1000"></div>
        
        <div class="relative z-10 flex flex-col items-center gap-6 text-center">
            <div class="space-y-3">
                <h3 class="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none drop-shadow-xl">Cùng chinh phục Quiz!</h3>
                <p class="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed w-full italic mx-auto">Vượt qua các câu hỏi để nhận ngay huy chương "Bậc thầy lập phương" nhé!</p>
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
const lesson125QuizPool = [
    { "question": "Thể tích hình lập phương cạnh 4 cm là:", "options": ["16 cm³", "48 cm³", "64 cm³", "96 cm³"], "answer": 2, "level": 1 },
    { "question": "Hình lập phương cạnh 6 cm có thể tích là:", "options": ["36 cm³", "216 cm³", "36 cm²", "216 cm²"], "answer": 1, "level": 1 },
    { "question": "V = a × a × a là công thức tính:", "options": ["Diện tích hình vuông", "Diện tích toàn phần HLP", "Thể tích hình lập phương", "Chu vi hình vuông"], "answer": 2, "level": 1 },
    { "question": "Thể tích hình lập phương cạnh 1 dm là:", "options": ["1 dm³", "6 dm³", "10 dm³", "100 dm³"], "answer": 0, "level": 1 },
    { "question": "Xúc xắc hình lập phương cạnh 3 cm có thể tích:", "options": ["9 cm³", "18 cm³", "27 cm³", "54 cm³"], "answer": 2, "level": 1 },
    { "question": "Bể cá hình lập phương cạnh 1,5 dm. Thể tích bể là:", "options": ["2,25 dm³", "3,375 dm³", "4,5 dm³", "13,5 dm³"], "answer": 1, "level": 2 },
    { "question": "Hình lập phương có thể tích 125 cm³. Cạnh là:", "options": ["5 cm", "25 cm", "10 cm", "15 cm"], "answer": 0, "level": 2 },
    { "question": "Khối LP cạnh 10 cm chứa LP cạnh 2 cm. Xếp được:", "options": ["25 khối", "50 khối", "100 khối", "125 khối"], "answer": 3, "level": 2 },
    { "question": "Hai khối A và C ghép thành LP lớn (mối LP nhỏ cạnh 2 cm, LP lớn 8 khối). Thể tích LP lớn:", "options": ["64 cm³", "128 cm³", "256 cm³", "512 cm³"], "answer": 0, "level": 2 },
    { "question": "1 dm³ = ? cm³", "options": ["10 cm³", "100 cm³", "1000 cm³", "10000 cm³"], "answer": 2, "level": 2 },
    { "question": "Tháp chất lỏng: tầng dưới LP cạnh 15 cm, tầng giữa HHCNhật 15×12×15, tầng trên LP cạnh 10 cm. Tầng nào lớn nhất?", "options": ["Tầng trên (dầu)", "Tầng giữa (nước)", "Tầng dưới (nước rửa bát)", "Bằng nhau"], "answer": 2, "level": 3 },
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
        "Nhớ công thức V = a × a × a. Cạnh là 6 cm, vậy V = 6 × 6 × 6.",
        `
        <div class="text-left space-y-2">
            <p class="font-bold text-emerald-600">Tuyệt vời! Giải thích chi tiết:</p>
            <p>- Công thức tính thể tích hình lập phương: V = a × a × a</p>
            <p>- Thay số vào: V = 6 × 6 × 6 = 216 (cm³)</p>
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
        "Em hãy tính V = a × a × a. Xúc xắc 3×3×3, Bể cá 1.5×1.5×1.5.",
        `
        <div class="text-left space-y-2">
            <p class="font-bold text-emerald-600">Đáp án đúng:</p>
            <p>1. Xúc xắc: V = 3 × 3 × 3 = 27 (cm³)</p>
            <p>2. Bể cá: V = 1.5 × 1.5 × 1.5 = 3.375 (dm³)</p>
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
    const correctB = solutionB.includes('64'); // Simple check for the numeric result
    const isCorrect = correctA && correctB;
    const score = (correctA ? 50 : 0) + (correctB ? 50 : 0);

    window.showMathFeedback(
        isCorrect,
        "A và C; 64 cm³",
        `Ghép ${selectedA}; Lời giải: ${solutionB}`,
        "Câu a: Quan sát xem khối nào lấp đầy được LP lớn. Câu b: Tính cạnh LP lớn rồi tính V.",
        `
        <div class="text-left space-y-2">
            <p class="font-bold text-emerald-600">Lời giải chi tiết:</p>
            <p>- Câu a: Khối A và C ghép lại thành hình lập phương lớn có 8 khối nhỏ.</p>
            <p>- Câu b: Hình lập phương lớn có cạnh là 2 × 2 = 4 (cm). Thể tích là: 4 × 4 × 4 = 64 (cm³).</p>
        </div>
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-125-3", window.lesson125State.attempts.s3, 4, isCorrect ? 1 : 0);
};

window.submitEx125_4 = function () {
    window.lesson125State.attempts.s4++;
    const solution = document.getElementById('wp-full-125-4').value.trim();

    if (!solution) {
        alert("Em hãy trình bày bài giải!");
        return;
    }

    const containsResult = solution.includes('3375');
    const containsName = solution.includes('nước rửa bát') || solution.includes('dưới');
    const isCorrect = containsResult && containsName;
    const score = isCorrect ? 100 : (containsResult || containsName ? 50 : 0);

    window.showMathFeedback(
        isCorrect,
        "Tầng dưới (nước rửa bát); 3375 cm³",
        solution,
        "Tính V từng phần: LP dưới cạnh 15, HHCN giữa 15x12x15, LP trên cạnh 10.",
        `
        <div class="text-left space-y-2">
            <p class="font-bold text-emerald-600">Lời giải chi tiết:</p>
            <p>- V dưới (nước rửa bát): 15 × 15 × 15 = 3375 (cm³)</p>
            <p>- V giữa (nước): 15 × 12 × 15 = 2700 (cm³)</p>
            <p>- V trên (dầu): 10 × 10 × 10 = 1000 (cm³)</p>
            <p>=> Nước rửa bát có thể tích lớn nhất là 3375 cm³.</p>
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
        prompt = `Đề bài: Mỗi khối LP nhỏ cạnh 2 cm. Tính thể tích LP lớn ghép từ A và C.\n\nBài giải của học sinh:\n${solution}`;
    } else if (id === '125-4') {
        prompt = `Đề bài: Tháp chất lỏng: dưới LP cạnh 15cm, giữa HHCN 15x12x15, trên LP 10cm. Hỏi phần nào lớn nhất và bao nhiêu?\n\nBài giải của học sinh:\n${solution}`;
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

