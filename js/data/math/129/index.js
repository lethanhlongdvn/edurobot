/**
 * @file index.js
 * @description Standardized Lesson 129: Bài 55. Luyện tập chung (tiết 3)
 * Targets: 100% SGK compliance, showMathFeedback (5-param), submitMathLesson (6-param).
 */

// 1. Metadata & Lesson Info
export const metadata = {
    id: "math-129",
    period: "129",
    title: "Bài 55. Luyện tập chung (tiết 3)",
    lastUpdated: "2026-04-24",
    type: "math"
};

const lessonInfo = {
    title: "BÀI 55. LUYỆN TẬP CHUNG (TIẾT 3)",
    description: "Vận dụng linh hoạt công thức tính diện tích và thể tích để giải toán thực tế.",
    unit: "Toán 5 - Tập 2",
    page: "SGK - Trang 62-63"
};

// 2. HTML Content (Tìm hiểu bài)
const lesson129Content = `
<div class="space-y-8 animate-fade-in pb-10">
    <div class="bg-blue-50 p-8 rounded-[48px] border-4 border-blue-200 shadow-xl relative overflow-hidden">
        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-blue-100">
                <h4 class="text-2xl md:text-3xl font-black text-blue-600 uppercase mb-4 tracking-widest text-center">📦 Hình Hộp Chữ Nhật</h4>
                <div class="space-y-3 text-lg md:text-xl font-bold text-slate-800">
                    <p class="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                        • Diện tích xung quanh: <br>
                        <span class="text-blue-700 font-black">S<sub>xq</sub> = (a + b) &times; 2 &times; c</span>
                    </p>
                    <p class="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                        • Diện tích toàn phần: <br>
                        <span class="text-blue-700 font-black">S<sub>tp</sub> = S<sub>xq</sub> + a &times; b &times; 2</span>
                    </p>
                    <p class="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                        • Thể tích: <br>
                        <span class="text-blue-700 font-black">V = a &times; b &times; c</span>
                    </p>
                </div>
            </div>

            <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-emerald-100">
                <h4 class="text-2xl md:text-3xl font-black text-emerald-600 uppercase mb-4 tracking-widest text-center">🧊 Hình Lập Phương</h4>
                <div class="space-y-3 text-lg md:text-xl font-bold text-slate-800">
                    <p class="bg-emerald-50 p-3 rounded-2xl border border-emerald-100">
                        • Diện tích xung quanh: <br>
                        <span class="text-emerald-700 font-black">S<sub>xq</sub> = a &times; a &times; 4</span>
                    </p>
                    <p class="bg-emerald-50 p-3 rounded-2xl border border-emerald-100">
                        • Diện tích toàn phần: <br>
                        <span class="text-emerald-700 font-black">S<sub>tp</sub> = a &times; a &times; 6</span>
                    </p>
                    <p class="bg-emerald-50 p-3 rounded-2xl border border-emerald-100">
                        • Thể tích: <br>
                        <span class="text-emerald-700 font-black">V = a &times; a &times; a</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// 3. HTML Practice (Luyện tập)
const lesson129Practice = `
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
                                <p class="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight">Mai có hình khai triển như hình bên. Hỏi Mai có thể gấp được hình lập phương nào dưới đây?</p>
                            </div>
                        </div>
                        
                    </div>

                    <div class="p-6 bg-blue-50/50 rounded-3xl mb-8 flex justify-center border border-blue-100">
                        <img src="assets/images/toan/toan_tap_2/129/129-1-de.webp" alt="Hình khai triển" class="max-w-full h-auto rounded-2xl shadow-sm">
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        <button onclick="window.lesson129SelectMCQ('129-1', 'A')" id="btn-129-1-A" class="mcq-btn p-4 bg-white border-2 border-blue-100 rounded-3xl flex flex-col items-center gap-3 hover:border-blue-400 transition-all">
                            <img src="assets/images/toan/toan_tap_2/129/129-1-A.webp" alt="Hình A" class="h-28 md:h-36 object-contain">
                            <span class="font-black text-xl md:text-2xl text-slate-700 uppercase">A. Hình A</span>
                        </button>
                        <button onclick="window.lesson129SelectMCQ('129-1', 'B')" id="btn-129-1-B" class="mcq-btn p-4 bg-white border-2 border-blue-100 rounded-3xl flex flex-col items-center gap-3 hover:border-blue-400 transition-all">
                            <img src="assets/images/toan/toan_tap_2/129/129-1-B.webp" alt="Hình B" class="h-28 md:h-36 object-contain">
                            <span class="font-black text-xl md:text-2xl text-slate-700 uppercase">B. Hình B</span>
                        </button>
                        <button onclick="window.lesson129SelectMCQ('129-1', 'C')" id="btn-129-1-C" class="mcq-btn p-4 bg-white border-2 border-blue-100 rounded-3xl flex flex-col items-center gap-3 hover:border-blue-400 transition-all">
                            <img src="assets/images/toan/toan_tap_2/129/129-1-C.webp" alt="Hình C" class="h-28 md:h-36 object-contain">
                            <span class="font-black text-xl md:text-2xl text-slate-700 uppercase">C. Hình C</span>
                        </button>
                        <button onclick="window.lesson129SelectMCQ('129-1', 'D')" id="btn-129-1-D" class="mcq-btn p-4 bg-white border-2 border-blue-100 rounded-3xl flex flex-col items-center gap-3 hover:border-blue-400 transition-all">
                            <img src="assets/images/toan/toan_tap_2/129/129-1-D.webp" alt="Hình D" class="h-28 md:h-36 object-contain">
                            <span class="font-black text-xl md:text-2xl text-slate-700 uppercase">D. Hình D</span>
                        </button>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-129-1"E
                    <div class="flex justify-end items-center gap-4 mt-8">
                        
                        <button id=" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                        Quan sát hình khai triển:<br>
                        - Mặt ô vuông màu cam và mặt ngôi sao là hai mặt đối diện nhau.<br>
                        - Mặt hình chấm tròn và mặt chữ X là hai mặt đối diện nhau.<br>
                        Hình B có mặt chữ X và mặt ngôi sao kề nhau, đúng theo vị trí tương quan khi gấp lại.<br>
                        Đáp án đúng là B (Hình B).
                    " onclick="btn-submit-129-1" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">w-20 h-20 md:w-24 md:h-24 bg-blue-600 text-white rounded-3xl font-black text-4xl md:text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all</button>
                    </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-129-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-129-1" onclick="window.submitEx129_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
            </div>

        </div>
    </div>
</div>
`;

// 4. Quiz Pool (15 questions)
const lesson129QuizPool = [
    { "question": "Một khối gỗ dạng HHCN có các kích thước 5 dm, 3 dm, 3 dm. Thể tích là:", "options": ["45 dm³", "11 dm³", "30 dm³", "15 dm³"], "answer": 0, "level": 1 },
    { "question": "Hộp lập phương cạnh 2,5 dm. Diện tích một mặt là:", "options": ["6,25 dm²", "2,5 dm²", "5 dm²", "6,25 dm³"], "answer": 0, "level": 1 },
    { "question": "Nếu cắt đi một khối gỗ thể tích 8 dm³ từ khối gỗ 45 dm³ thì phần còn lại là:", "options": ["37 dm³", "53 dm³", "35 dm³", "40 dm³"], "answer": 0, "level": 1 },
    { "question": "Mực nước trong hộp Hình 1 cao 8 cm, đáy 8×8 cm. Thể tích nước là:", "options": ["512 cm³", "64 cm³", "192 cm³", "256 cm³"], "answer": 0, "level": 1 },
    { "question": "Thể tích nước 512 cm³, đáy mới 16×8 cm. Chiều cao nước c là:", "options": ["4 cm", "8 cm", "2 cm", "16 cm"], "answer": 0, "level": 1 },
    { "question": "Diện tích toàn phần của hình lập phương cạnh a là:", "options": ["a × a × 4", "a × a × 6", "a × a × a", "a × 4 × 6"], "answer": 1, "level": 2 },
    { "question": "Một hình lập phương có diện tích một mặt là 9 cm². Thể tích của nó là:", "options": ["27 cm³", "18 cm³", "54 cm³", "81 cm³"], "answer": 0, "level": 2 },
    { "question": "Đổi 2,5 dm² sang cm² ta được:", "options": ["250 cm²", "25 cm²", "2500 cm²", "0,25 cm²"], "answer": 0, "level": 2 },
    { "question": "Muốn tính thể tích HHCN khi biết diện tích đáy S và chiều cao c:", "options": ["V = S × c", "V = S : c", "V = c : S", "V = S + c"], "answer": 0, "level": 2 },
    { "question": "HHCN có V = 120 cm³, đáy có diện tích 30 cm². Chiều cao c là:", "options": ["4 cm", "40 cm", "4 dm", "4 mm"], "answer": 0, "level": 2 },
    { "question": "Gấp cạnh hình lập phương lên 2 lần thì diện tích toàn phần tăng:", "options": ["2 lần", "4 lần", "6 lần", "8 lần"], "answer": 1, "level": 3 },
    { "question": "Gấp cạnh hình lập phương lên 2 lần thì thể tích tăng:", "options": ["2 lần", "4 lần", "8 lần", "16 lần"], "answer": 2, "level": 3 },
    { "question": "Bình chứa 1 lít nước (1 dm³). Đổ vào hộp đáy 10×10 cm thì chiều cao nước c là:", "options": ["10 cm", "1 cm", "100 cm", "0,1 cm"], "answer": 0, "level": 3 },
    { "question": "Một mặt hình lập phương có chu vi 20 cm. Thể tích là:", "options": ["125 cm³", "100 cm³", "150 cm³", "20 cm³"], "answer": 0, "level": 3 },
    { "question": "Khối gỗ HLP cạnh 3 dm. Cắt đi phần HLP cạnh 1 dm ở góc. Sxq có đổi không?", "options": ["Không đổi", "Tăng lên", "Giảm đi", "Tùy vị trí cắt"], "answer": 0, "level": 3 }
];

// 5. Logic & State Management
if (typeof window !== 'undefined') {
    window.lesson129State = {
        ex1: null,
        attempts: { s1: 0, s2: 0, s3: 0, s4: 0 }
    };
}

const getExColor = (exId) => {
    if (exId.includes('129-1')) return 'blue';
    if (exId.includes('129-2')) return 'teal';
    if (exId.includes('129-3')) return 'emerald';
    if (exId.includes('129-4')) return 'amber';
    return 'blue';
};

window.lesson129SelectMCQ = function (exId, option) {
    const color = getExColor(exId);
    const allBtns = document.querySelectorAll(`[id^="btn-${exId}-"]`);
    allBtns.forEach(btn => {
        btn.classList.remove(`bg-${color}-600`, 'text-white', `border-${color}-600`);
        btn.classList.add('bg-white', 'text-slate-700', `border-${color}-100`);
    });

    const selectedBtn = document.getElementById(`btn-${exId}-${option}`);
    if (selectedBtn) {
        selectedBtn.classList.remove('bg-white', 'text-slate-700', `border-${color}-100`);
        selectedBtn.classList.add(`bg-${color}-600`, 'text-white', `border-${color}-600`);
    }

    if (exId === '129-1') window.lesson129State.ex1 = option;
};

// --- Submission Handlers ---

window.submitEx129_1 = function () {
    window.lesson129State.attempts.s1++;
    const selected = window.lesson129State.ex1;
    if (!selected) {
        alert("Em hãy chọn một đáp án!");
        return;
    }

    const isCorrect = (selected === 'B');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "B. Hình B",
        `Hình ${selected}`,
        "Quan sát các vị trí mặt đối diện trên hình khai triển để tìm hình gấp đúng.",
        `
        Quan sát hình khai triển:<br>
        - Mặt ô vuông màu cam và mặt ngôi sao đối diện nhau.<br>
        - Mặt chấm tròn và mặt chữ X đối diện nhau.<br>
        Hình B có mặt chữ X và mặt ngôi sao kề nhau, phù hợp khi gấp lại.<br>
        Đáp án đúng là B.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-129-1", window.lesson129State.attempts.s1, 4, isCorrect ? 1 : 0);
};

window.submitEx129_2 = function () {
    window.lesson129State.attempts.s2++;
    const ans = document.getElementById('ans-129-2').value.trim().replace(',', '.');

    if (!ans) {
        alert("Em hãy điền diện tích nhựa cứng!");
        return;
    }

    const isCorrect = (ans === '37.5' || ans === '37,5');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "37,5 dm²",
        `${ans} dm²`,
        "Diện tích nhựa cứng cần dùng chính là diện tích toàn phần của chiếc hộp hình lập phương.",
        `
        Chiếc hộp hình lập phương kín gồm 6 mặt.<br>
        Diện tích nhựa cứng cần dùng (diện tích toàn phần của hộp) là:<br>
        2,5 &times; 2,5 &times; 6 = 37,5 (dm²)<br>
        Đáp số: 37,5 dm².
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-129-2", window.lesson129State.attempts.s2, 4, isCorrect ? 1 : 0);
};

window.submitEx129_3 = function () {
    window.lesson129State.attempts.s3++;
    const ans = document.getElementById('ans-129-3').value.trim();

    if (!ans) {
        alert("Em hãy điền thể tích khối gỗ làm ghế!");
        return;
    }

    const isCorrect = (ans === '37');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "37 dm³",
        `${ans} dm³`,
        "Thể tích khối gỗ làm ghế bằng thể tích khối gỗ ban đầu trừ đi thể tích khối gỗ hình lập phương đã cắt đi.",
        `
        Thể tích khối gỗ ban đầu là:<br>
        5 &times; 3 &times; 3 = 45 (dm³)<br>
        Thể tích phần gỗ hình lập phương cắt đi là:<br>
        2 &times; 2 &times; 2 = 8 (dm³)<br>
        Thể tích phần khối gỗ dùng làm ghế là:<br>
        45 - 8 = 37 (dm³)<br>
        Đáp số: 37 dm³.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-129-3", window.lesson129State.attempts.s3, 4, isCorrect ? 1 : 0);
};

window.submitEx129_4 = function () {
    window.lesson129State.attempts.s4++;
    const ans = document.getElementById('ans-129-4').value.trim();

    if (!ans) {
        alert("Em hãy điền chiều cao mực nước khi xoay hộp!");
        return;
    }

    const isCorrect = (ans === '4');
    const score = isCorrect ? 100 : 0;

    window.showMathFeedback(
        isCorrect,
        "4 cm",
        `${ans} cm`,
        "Thể tích nước trong hộp không đổi. Chiều cao nước mới = Thể tích nước : Diện tích đáy mới.",
        `
        Diện tích đáy phần nước ở Hình 1 là: 8 &times; 8 = 64 (cm²)<br>
        Thể tích nước trong hộp là: 64 &times; 8 = 512 (cm³)<br>
        Khi xoay như Hình 2, diện tích đáy mới là: (8 + 8) &times; 8 = 16 &times; 8 = 128 (cm²)<br>
        Chiều cao phần nước ở Hình 2 là:<br>
        512 : 128 = 4 (cm)<br>
        Đáp số: 4 cm.
        `
    );

    window.submitMathLesson(metadata.title, score, "btn-submit-129-4", window.lesson129State.attempts.s4, 4, isCorrect ? 1 : 0);
};

// 6. Main Lesson Export
export default {
    metadata,
    lessonInfo,
    content: lesson129Content,
    practice: lesson129Practice,
    quizPool: lesson129QuizPool,
    onLoad: () => {
        console.log("Lesson 129 Loaded: Bài 55. Luyện tập chung (tiết 3)");
        if (window.Presentation) window.Presentation.currentSlideIndex = 0;
    }
};