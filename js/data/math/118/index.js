const metadata = {
    "lessonInfo": {
        "period": "118",
        "week": "24",
        "topic": "Hình học và Đo lường",
        "title": "Bài 50. Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật (tiết 2)",
        "desc": "Luyện tập tính diện tích toàn phần của hình hộp chữ nhật."
    },
    "exercises": [
        {
            "id": "118_1",
            "type": "fill_in_blank",
            "statement": "Tính diện tích toàn phần của mỗi hình hộp chữ nhật dưới đây.",
            "subQuestions": [
                { "label": "Hình a", "id": "ans-118_1_a", "answer": "5200", "unit": "cm²" },
                { "label": "Hình b", "id": "ans-118_1_b", "answer": "6250", "unit": "cm²" },
                { "label": "Hình c", "id": "ans-118_1_c", "answer": "5350", "unit": "cm²" }
            ],
            "solution": "a) Diện tích toàn phần hình a là: (30 + 20) x 2 x 40 + 30 x 20 x 2 = 5 200 (cm²).<br>b) Diện tích toàn phần hình b là: (50 + 25) x 2 x 25 + 50 x 25 x 2 = 6 250 (cm²).<br>c) Diện tích toàn phần hình c là: (35 + 30) x 2 x 25 + 35 x 30 x 2 = 5 350 (cm²)."
        },
        {
            "id": "118_2",
            "type": "selection",
            "statement": "Chọn câu trả lời đúng. Chiếc hộp nào dưới đây có diện tích toàn phần lớn nhất?",
            "options": ["A", "B", "C"],
            "answer": "B",
            "solution": "Đổi đơn vị đo hình C sang dm: 13 cm = 1,3 dm; 25 cm = 2,5 dm; 10 cm = 1 dm.<br>Tính diện tích toàn phần từng chiếc hộp:<br>- Chiếc hộp A: (1,5 + 2) x 2 x 2,3 + 1,5 x 2 x 2 = 22,1 (dm²).<br>- Chiếc hộp B: (3,7 + 3) x 2 x 1 + 3,7 x 3 x 2 = 35,6 (dm²).<br>- Chiếc hộp C: (1,3 + 2,5) x 2 x 1 + 1,3 x 2,5 x 2 = 14,1 (dm²).<br>So sánh: 14,1 dm² < 22,1 dm² < 35,6 dm².<br>Vậy chiếc hộp B có diện tích toàn phần lớn nhất."
        }
    ],
    "quizPool": [
        { "question": "Công thức tính diện tích toàn phần của hình hộp chữ nhật là?", "options": ["Sxq + S 2 đáy", "Sxq + S 1 đáy", "Chu vi đáy x chiều cao", "Dài x Rộng x Cao"], "answer": 0, "level": "easy" },
        { "question": "Hình hộp chữ nhật có bao nhiêu mặt đáy?", "options": ["1", "2", "4", "6"], "answer": 1, "level": "easy" },
        { "question": "Tính Stp hình hộp chữ nhật có Sxq = 50 cm² và diện tích đáy = 10 cm²?", "options": ["60 cm²", "70 cm²", "80 cm²", "100 cm²"], "answer": 1, "level": "medium" },
        { "question": "Một chiếc hộp dạng hình hộp chữ nhật dài 5 dm, rộng 4 dm, cao 3 dm. Diện tích hai đáy là?", "options": ["20 dm²", "40 dm²", "12 dm²", "24 dm²"], "answer": 1, "level": "medium" },
        { "question": "Một chiếc hộp dạng hình hộp chữ nhật dài 5 dm, rộng 4 dm, cao 3 dm. Diện tích xung quanh là?", "options": ["54 dm²", "27 dm²", "18 dm²", "36 dm²"], "answer": 0, "level": "medium" },
        { "question": "Tính diện tích toàn phần của hình lập phương có cạnh 3 cm?", "options": ["36 cm²", "54 cm²", "9 cm²", "27 cm²"], "answer": 1, "level": "easy" },
        { "question": "Diện tích toàn phần của hình hộp chữ nhật có ba kích thước 2 cm, 3 cm, 4 cm là?", "options": ["52 cm²", "24 cm²", "48 cm²", "26 cm²"], "answer": 0, "level": "hard" },
        { "question": "Khi tăng cả ba kích thước của hình hộp chữ nhật lên 2 lần thì diện tích toàn phần tăng lên mấy lần?", "options": ["2 lần", "4 lần", "6 lần", "8 lần"], "answer": 1, "level": "hard" },
        { "question": "Một hình hộp chữ nhật có diện tích toàn phần 200 dm², diện tích xung quanh 120 dm². Diện tích một mặt đáy là?", "options": ["80 dm²", "40 dm²", "20 dm²", "60 dm²"], "answer": 1, "level": "medium" },
        { "question": "Đơn vị đo diện tích nào sau đây là lớn nhất?", "options": ["dm²", "cm²", "m²", "mm²"], "answer": 2, "level": "easy" }
    ]
};

export const lesson118 = {
    "topic": "Hình học và Đo lường",
    "week": "24",
    "period": "118",
    "title": "Bài 50. Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật (tiết 2)",
    "desc": "Luyện tập tính diện tích toàn phần của hình hộp chữ nhật.",
    "content": `
        <div class="theory-section space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 text-left">
            <div class="glass-card p-10 rounded-[3rem] border border-blue-50 shadow-2xl relative overflow-hidden bg-white/80 backdrop-blur-xl">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">🎯</div>
                    <h3 class="text-slate-800 italic text-xl font-black">Kiến thức cần nhớ: Diện tích toàn phần</h3>
                </div>
                
                <div class="flex flex-col items-center gap-8 mb-8 bg-blue-50/50 p-6 rounded-[2.5rem] border border-blue-100">
                    <img src="assets/images/toan/toan_tap_2/118/118-khampha-illus.webp" alt="Khám phá" class="w-full max-w-[650px] h-auto rounded-3xl shadow-md border-4 border-white">
                </div>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div class="space-y-4">
                         <div class="bg-blue-50 p-6 rounded-2xl shadow-sm border-l-8 border-blue-500 font-bold text-slate-700 leading-relaxed text-xl md:text-xl">
                            "Diện tích toàn phần của hình hộp chữ nhật là tổng của diện tích xung quanh và diện tích hai đáy."
                         </div>
                         <div class="bg-blue-600 p-6 rounded-3xl text-white shadow-lg text-center transform hover:scale-105 transition-all">
                             <p class="text-3xl md:text-4xl font-black italic tracking-tighter">Stp = Sxq + S(2 đáy)</p>
                             <p class="text-sm font-bold opacity-80 mt-1">Stp = Sxq + (a × b) × 2</p>
                         </div>
                    </div>
                    
                    <div class="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100 text-left">
                          <p class="text-lg md:text-xl font-black text-slate-500 mb-4 uppercase tracking-wider">Ví dụ tính Stp:</p>
                          <p class="font-bold text-slate-700 leading-relaxed text-lg mb-2">Hình hộp chữ nhật có chiều dài 25 cm, chiều rộng 20 cm và chiều cao 30 cm:</p>
                          <ul class="list-disc pl-6 space-y-1 text-slate-700 text-lg">
                              <li>Diện tích xung quanh là: <span class="font-bold text-blue-700">(25 + 20) x 2 x 30 = 2 700 (cm²)</span></li>
                              <li>Diện tích hai đáy là: <span class="font-bold text-blue-700">25 x 20 x 2 = 1 000 (cm²)</span></li>
                              <li>Diện tích toàn phần là: <span class="font-bold text-emerald-700">2 700 + 1 000 = 3 700 (cm²)</span></li>
                          </ul>
                    </div>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-8 text-left">
            <!-- Tabs navigation for Exercises -->
            <div class="flex justify-center gap-2 bg-slate-100 p-1.5 rounded-2xl w-fit mx-auto">
                <button id="tab-btn-118-1" onclick="window.switchMathTab118(1)" class="px-6 py-3 rounded-xl text-lg md:text-xl font-bold bg-blue-600 text-white shadow transition-all active:scale-95 animate-none">Bài tập 1</button>
                <button id="tab-btn-118-2" onclick="window.switchMathTab118(2)" class="px-6 py-3 rounded-xl text-lg md:text-xl font-bold text-slate-600 hover:bg-slate-200/50 transition-all active:scale-95 animate-none">Bài tập 2</button>
            </div>
 
            <!-- Tab 1: Bài 1 -->
            <div id="tab-content-118-1" class="tab-content-118 animate-in fade-in duration-300">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                    <div class="flex justify-between items-start gap-6 mb-12 text-left">
                        <div class="flex items-start gap-6">
                            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                            <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black tracking-tight text-left">Tính diện tích toàn phần của mỗi hình hộp chữ nhật dưới đây.</p>
                        </div>
                        
                    </div>
 
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Hình a -->
                        <div class="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm text-center flex flex-col justify-between">
                            <div>
                                <p class="text-xl md:text-xl font-bold text-orange-600 mb-4 tracking-widest">Hình a</p>
                                <div class="bg-orange-50/50 p-4 rounded-2xl mb-4 border border-orange-100 flex justify-center items-center h-48">
                                    <img src="assets/images/toan/toan_tap_2/118/1a.png" class="max-h-full max-w-full object-contain" alt="Hình a">
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                 <input type="text" id="ans-118_1_a" class="w-full bg-slate-50 border-none rounded-xl p-4 text-3xl md:text-3xl font-black text-center text-blue-600 outline-none focus:ring-4 ring-blue-100" placeholder="...">
                                 <span class="text-lg md:text-lg font-bold text-slate-400">cm²</span>
                            </div>
                        </div>
                        <!-- Hình b -->
                        <div class="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm text-center flex flex-col justify-between">
                            <div>
                                <p class="text-xl md:text-xl font-bold text-cyan-600 mb-4 tracking-widest">Hình b</p>
                                <div class="bg-cyan-50/50 p-4 rounded-2xl mb-4 border border-cyan-100 flex justify-center items-center h-48">
                                    <img src="assets/images/toan/toan_tap_2/118/1b.png" class="max-h-full max-w-full object-contain" alt="Hình b">
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                 <input type="text" id="ans-118_1_b" class="w-full bg-slate-50 border-none rounded-xl p-4 text-3xl md:text-3xl font-black text-center text-blue-600 outline-none focus:ring-4 ring-blue-100" placeholder="...">
                                 <span class="text-lg md:text-lg font-bold text-slate-400">cm²</span>
                            </div>
                        </div>
                        <!-- Hình c -->
                        <div class="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm text-center flex flex-col justify-between">
                            <div>
                                <p class="text-xl md:text-xl font-bold text-emerald-600 mb-4 tracking-widest">Hình c</p>
                                <div class="bg-emerald-50/50 p-4 rounded-2xl mb-4 border border-emerald-100 flex justify-center items-center h-48">
                                    <img src="assets/images/toan/toan_tap_2/118/1c.png" class="max-h-full max-w-full object-contain" alt="Hình c">
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                 <input type="text" id="ans-118_1_c" class="w-full bg-slate-50 border-none rounded-xl p-4 text-3xl md:text-3xl font-black text-center text-blue-600 outline-none focus:ring-4 ring-blue-100" placeholder="...">
                                 <span class="text-lg md:text-lg font-bold text-slate-400">cm²</span>
                            </div>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-118-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                        a) Diện tích toàn phần hình a là: (30 + 20) x 2 x 40 + 30 x 20 x 2 = 5 200 (cm²)<br>
                        b) Diện tích toàn phần hình b là: (50 + 25) x 2 x 25 + 50 x 25 x 2 = 6 250 (cm²)<br>
                        c) Diện tích toàn phần hình c là: (35 + 30) x 2 x 25 + 35 x 30 x 2 = 5 350 (cm²)
                    </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-118-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-118-1" onclick="window.submitEx118()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
            </div>
 
            <!-- Tab 2: Bài 2 -->
            <div id="tab-content-118-2" class="tab-content-118 hidden animate-in fade-in duration-300">
                <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-150 shadow-2xl relative overflow-hidden">
                    <div class="flex justify-between items-start gap-6 mb-12 text-left">
                        <div class="flex items-start gap-6">
                            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                            <div class="space-y-2">
                                <span class="text-xl font-black text-blue-700 block">Bài 2. Hoạt động</span>
                                <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black tracking-tight">Chọn câu trả lời đúng. Chiếc hộp nào dưới đây có diện tích toàn phần lớn nhất?</p>
                            </div>
                        </div>
                        
                    </div>
 
                    <div class="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 flex flex-col items-center gap-8">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                            <button onclick="window.select_118_2('A')" id="btn-118-2-A" class="bg-white border-2 border-slate-200 p-6 rounded-[2.5rem] hover:border-blue-400 hover:bg-blue-50/10 transition-all flex flex-col items-center justify-center animate-none text-slate-700">
                                <div class="bg-slate-50 p-4 rounded-2xl w-full h-64 flex justify-center items-center border border-slate-100">
                                    <img src="assets/images/toan/toan_tap_2/118/2a.png" class="max-h-full max-w-full object-contain" alt="Hộp A">
                                </div>
                            </button>
                            <button onclick="window.select_118_2('B')" id="btn-118-2-B" class="bg-white border-2 border-slate-200 p-6 rounded-[2.5rem] hover:border-blue-400 hover:bg-blue-50/10 transition-all flex flex-col items-center justify-center animate-none text-slate-700">
                                <div class="bg-slate-50 p-4 rounded-2xl w-full h-64 flex justify-center items-center border border-slate-100">
                                    <img src="assets/images/toan/toan_tap_2/118/2b.png" class="max-h-full max-w-full object-contain" alt="Hộp B">
                                </div>
                            </button>
                            <button onclick="window.select_118_2('C')" id="btn-118-2-C" class="bg-white border-2 border-slate-200 p-6 rounded-[2.5rem] hover:border-blue-400 hover:bg-blue-50/10 transition-all flex flex-col items-center justify-center animate-none text-slate-700">
                                <div class="bg-slate-50 p-4 rounded-2xl w-full h-64 flex justify-center items-center border border-slate-100">
                                    <img src="assets/images/toan/toan_tap_2/118/2c.png" class="max-h-full max-w-full object-contain" alt="Hộp C">
                                </div>
                            </button>
                        </div>
                    </div>

                    <!-- Lời giải ẩn cho giáo viên -->
                    <div id="sol-118-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                        <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                        Đổi đơn vị đo hình C sang dm: 13 cm = 1,3 dm; 25 cm = 2,5 dm; 10 cm = 1 dm.<br>
                        Tính diện tích toàn phần từng chiếc hộp:<br>
                        - Chiếc hộp A: (1,5 + 2) x 2 x 2,3 + 1,5 x 2 x 2 = 22,1 (dm²)<br>
                        - Chiếc hộp B: (3,7 + 3) x 2 x 1 + 3,7 x 3 x 2 = 35,6 (dm²)<br>
                        - Chiếc hộp C: (1,3 + 2,5) x 2 x 1 + 1,3 x 2,5 x 2 = 14,1 (dm²)<br><br>
                        So sánh: 14,1 dm² &lt; 22,1 dm² &lt; 35,6 dm².<br>
                        Vậy chiếc hộp B có diện tích toàn phần lớn nhất.
                    </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-118-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-118-2" onclick="window.submitEx118()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
            </div>
        </div>
    `,
    "quizPool": metadata.quizPool,
    "metadata": metadata
};

let ans2 = null;

window.switchMathTab118 = function(tabIndex) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content-118');
    contents.forEach(el => el.classList.add('hidden'));

    // Reset button classes
    const btn1 = document.getElementById('tab-btn-118-1');
    const btn2 = document.getElementById('tab-btn-118-2');
    
    if (btn1) btn1.className = "px-6 py-3 rounded-xl text-lg md:text-xl font-bold text-slate-600 hover:bg-slate-200/50 transition-all active:scale-95";
    if (btn2) btn2.className = "px-6 py-3 rounded-xl text-lg md:text-xl font-bold text-slate-600 hover:bg-slate-200/50 transition-all active:scale-95";

    // Show active content
    const activeContent = document.getElementById('tab-content-118-' + tabIndex);
    if (activeContent) activeContent.classList.remove('hidden');

    // Highlight active button
    const activeBtn = document.getElementById('tab-btn-118-' + tabIndex);
    if (activeBtn) {
        activeBtn.className = "px-6 py-3 rounded-xl text-lg md:text-xl font-bold bg-blue-600 text-white shadow transition-all active:scale-95";
    }
};

window.select_118_2 = function(c) {
    ans2 = c;
    ['A','B','C'].forEach(v => {
        const btn = document.getElementById('btn-118-2-'+v);
        if (btn) {
            btn.className = (v===c 
                ? "bg-blue-600 border-2 border-transparent p-6 rounded-[2.5rem] hover:bg-blue-700 transition-all flex flex-col items-center justify-center shadow-xl scale-105 text-white" 
                : "bg-white border-2 border-slate-200 p-6 rounded-[2.5rem] hover:border-blue-400 hover:bg-blue-50/10 transition-all flex flex-col items-center justify-center text-slate-700 opacity-50");
        }
    });
};

window.check_118_1 = function() {
    const vA = document.getElementById('ans-118_1_a').value.trim();
    const vB = document.getElementById('ans-118_1_b').value.trim();
    const vC = document.getElementById('ans-118_1_c').value.trim();
    const isCorrect = (vA === '5200' && vB === '6250' && vC === '5350');
    window.showMathFeedback(isCorrect, "A: 5200; B: 6250; C: 5350", `${vA}, ${vB}, ${vC}`, 
        "Tính Sxq rồi cộng diện tích hai mặt đáy của mỗi hình.",
        `<div class="text-left space-y-4">
            <p class="text-2xl md:text-2xl font-bold text-emerald-600">Lời giải chi tiết:</p>
            <p class="text-xl">a) Diện tích toàn phần hình a là: (30 + 20) x 2 x 40 + 30 x 20 x 2 = 5 200 (cm²)</p>
            <p class="text-xl">b) Diện tích toàn phần hình b là: (50 + 25) x 2 x 25 + 50 x 25 x 2 = 6 250 (cm²)</p>
            <p class="text-xl">c) Diện tích toàn phần hình c là: (35 + 30) x 2 x 25 + 35 x 30 x 2 = 5 350 (cm²)</p>
        </div>`
    );
    window.submitMathLesson("Tiết 118 - Bài 1", isCorrect ? 100 : 0, "ans-118_1_a", 0, 3, isCorrect ? 3 : 0);
};

window.check_118_2 = function() {
    const isCorrect = ans2 === 'B';
    window.showMathFeedback(isCorrect, "B", ans2, "So sánh diện tích toàn phần của 3 hộp cần quy đổi về cùng đơn vị đo.", 
        `<div class="text-left space-y-4">
            <p class="text-2xl md:text-2xl font-bold text-emerald-600">Lời giải chi tiết:</p>
            <p class="text-xl">Đổi đơn vị đo hình C sang dm: 13 cm = 1,3 dm; 25 cm = 2,5 dm; 10 cm = 1 dm.</p>
            <p class="text-xl">Tính diện tích toàn phần từng chiếc hộp:</p>
            <ul class="list-disc pl-6 space-y-2 text-lg text-slate-700">
                <li>Chiếc hộp A: (1,5 + 2) x 2 x 2,3 + 1,5 x 2 x 2 = 22,1 (dm²)</li>
                <li>Chiếc hộp B: (3,7 + 3) x 2 x 1 + 3,7 x 3 x 2 = 35,6 (dm²)</li>
                <li>Chiếc hộp C: (1,3 + 2,5) x 2 x 1 + 1,3 x 2,5 x 2 = 14,1 (dm²)</li>
            </ul>
            <p class="text-xl">So sánh: 14,1 dm² &lt; 22,1 dm² &lt; 35,6 dm².</p>
            <p class="text-xl font-bold">Vậy chiếc hộp B có diện tích toàn phần lớn nhất.</p>
        </div>`
    );
    window.submitMathLesson("Tiết 118 - Bài 2", isCorrect ? 100 : 0, "btn-118-2-B", 0, 1, isCorrect ? 1 : 0);
};

/* --- MATH_BUILDER_METADATA ---
${JSON.stringify(metadata)}
--- END_METADATA --- */
