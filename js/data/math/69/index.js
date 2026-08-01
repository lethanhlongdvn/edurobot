const metadata = {
    "lessonInfo": {
        "period": "69",
        "week": "14",
        "topic": "Thực hành trải nghiệm",
        "title": "BÀI 28: THỰC HÀNH VÀ TRẢI NGHIỆM. ĐO, VẼ, LẮP GHÉP, TẠO HÌNH (TIẾT 1)",
        "desc": "Thực hành nhận biết các hình phẳng (hình chữ nhật, hình tam giác, hình thang, hình tròn) qua hoạt động ghép hình ngôi nhà, cây cối, bông hoa và con gà."
    },
    "bai_tap": [
        {
            "id": "69_bt1",
            "type": "fill_multiple",
            "title": "Bài 1: Nhận diện hình phẳng ghép ngôi nhà",
            "answers": ["Hình thang", "Hình chữ nhật"],
            "guidance": "Quan sát mái nhà màu đỏ và thân nhà màu cam để nhận dạng hình học tương ứng.",
            "solution": "- Mái nhà màu đỏ có dạng hình thang (hình thang cân).<br>- Thân nhà màu cam có dạng hình chữ nhật."
        },
        {
            "id": "69_bt2",
            "type": "fill_multiple",
            "title": "Bài 2: Đếm số lượng hoa và gà con",
            "answers": ["3", "3"],
            "guidance": "Đếm kỹ số bông hoa màu đỏ ở góc dưới bên trái và số chú gà con màu vàng ở góc dưới bên phải bức tranh mẫu.",
            "solution": "- Có tất cả 3 bông hoa màu đỏ ở góc dưới bên trái.<br>- Có tất cả 3 chú gà con màu vàng ở góc dưới bên phải."
        }
    ],
    "quizPool": [
        { "question": "Hình phẳng nào dưới đây có hai cặp cạnh đối diện song song và bốn góc vuông?", "options": ["Hình chữ nhật", "Hình thang", "Hình tam giác", "Hình thoi"], "answer": 0 },
        { "question": "Hình thang là hình có:", "options": ["Một cặp cạnh đối song song", "Hai cặp cạnh đối song song", "Bốn cạnh bằng nhau", "Bốn góc vuông"], "answer": 0 },
        { "question": "Hình tròn có bao nhiêu trục đối xứng?", "options": ["Vô số", "1", "2", "4"], "answer": 0 },
        { "question": "Hình phẳng nào có bốn cạnh bằng nhau và bốn góc vuông?", "options": ["Hình vuông", "Hình chữ nhật", "Hình thoi", "Hình bình hành"], "answer": 0 },
        { "question": "Hình thoi là hình có:", "options": ["Hai cặp cạnh đối song song và bốn cạnh bằng nhau", "Một cặp cạnh đối song song", "Bốn góc vuông", "Bốn cạnh không bằng nhau"], "answer": 0 },
        { "question": "Hình bình hành là hình có:", "options": ["Các cạnh đối song song và bằng nhau", "Một cặp cạnh đối song song", "Bốn cạnh bằng nhau", "Bốn góc vuông"], "answer": 0 },
        { "question": "Hình tam giác đều là tam giác có:", "options": ["Ba cạnh bằng nhau và ba góc bằng nhau", "Hai cạnh bằng nhau", "Một góc vuông", "Ba góc không bằng nhau"], "answer": 0 },
        { "question": "Để tính diện tích hình thang, ta lấy:", "options": ["(Đáy lớn + Đáy bé) x Chiều cao : 2", "Đáy x Chiều cao : 2", "Đáy lớn x Đáy bé x Chiều cao", "Đáy lớn + Đáy bé x Chiều cao"], "answer": 0 },
        { "question": "Hình chữ nhật có chiều dài a, chiều rộng b. Chu vi của nó là:", "options": ["(a + b) x 2", "a x b", "a + b", "a x b : 2"], "answer": 0 },
        { "question": "Hình tròn đường kính d có chu vi là:", "options": ["3,14 x d", "3,14 x d x 2", "3,14 x d x d", "d x d : 4"], "answer": 0 },
        { "question": "Diện tích hình tam giác có độ dài đáy a và chiều cao h là:", "options": ["a x h : 2", "a x h", "(a + h) x 2", "a + h : 2"], "answer": 0 },
        { "question": "Một hình thoi có độ dài hai đường chéo là m và n. Diện tích của nó là:", "options": ["m x n : 2", "m x n", "(m + n) x 2", "m + n"], "answer": 0 },
        { "question": "Trong các hình sau, hình nào không có tâm đối xứng?", "options": ["Hình tam giác đều", "Hình vuông", "Hình chữ nhật", "Hình tròn"], "answer": 0 },
        { "question": "Ghép hai hình tam giác vuông cân bằng nhau ta có thể được hình nào dưới đây?", "options": ["Hình vuông", "Hình thang cân", "Hình tròn", "Hình lục giác"], "answer": 0 },
        { "question": "Hình thang cân là hình thang có:", "options": ["Two hai cạnh bên bằng nhau", "Hai đáy bằng nhau", "Một góc vuông", "Bốn cạnh bằng nhau"], "answer": 0 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson69 = {
    ...metadata.lessonInfo,
    metadata: metadata,
    quizPool: [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
                    
                    <!-- Slide 1: Khám phá Thực hành ghép hình -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="space-y-6 max-w-4xl mx-auto">
                                <div class="bg-white p-6 rounded-3xl border border-blue-100 shadow-md space-y-4">
                                    <div class="border-l-4 border-blue-600 pl-4 py-1">
                                        <h3 class="text-lg md:text-xl font-black text-blue-900">Hoạt động trải nghiệm</h3>
                                    </div>
                                    <p class="font-bold text-slate-700 text-sm md:text-base leading-relaxed">
                                        Trong tiết học này, các em sẽ chuẩn bị giấy màu, kéo và hồ dán để cắt, gấp và lắp ghép tạo nên bức tranh ngôi nhà sinh động theo các mẫu gợi ý.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
                    
                    <!-- Bài 1: Nhận diện hình ngôi nhà -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">1</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Làm nhà (Mẫu 1)</h3>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                                    <p class="text-sm md:text-base font-bold text-slate-600 leading-relaxed">
                                        Quan sát mẫu ghép hình ngôi nhà và trả lời câu hỏi:
                                    </p>
                                    
                                    <div class="space-y-4 font-bold text-slate-700">
                                        <div class="space-y-2">
                                            <p>1. Phần mái nhà màu đỏ được ghép bởi hình phẳng nào?</p>
                                            <div class="flex flex-col gap-2 max-w-xs">
                                                <label onclick="window.selectB1Option69('RedRoof', 'Hình thang')" id="lbl-b1-1-1" class="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all font-semibold text-slate-700 text-sm">
                                                    <span class="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center" id="dot-b1-1-1"></span>
                                                    Hình thang
                                                </label>
                                                <label onclick="window.selectB1Option69('RedRoof', 'Hình tam giác')" id="lbl-b1-1-2" class="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all font-semibold text-slate-700 text-sm">
                                                    <span class="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center" id="dot-b1-1-2"></span>
                                                    Hình tam giác
                                                </label>
                                                <label onclick="window.selectB1Option69('RedRoof', 'Hình chữ nhật')" id="lbl-b1-1-3" class="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all font-semibold text-slate-700 text-sm">
                                                    <span class="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center" id="dot-b1-1-3"></span>
                                                    Hình chữ nhật
                                                </label>
                                            </div>
                                            <input type="hidden" id="inp-69-bt1-1" value="">
                                        </div>

                                        <div class="space-y-2">
                                            <p>2. Thân nhà màu cam được ghép bởi hình phẳng nào?</p>
                                            <div class="flex flex-col gap-2 max-w-xs">
                                                <label onclick="window.selectB1Option69('OrangeWall', 'Hình chữ nhật')" id="lbl-b1-2-1" class="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all font-semibold text-slate-700 text-sm">
                                                    <span class="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center" id="dot-b1-2-1"></span>
                                                    Hình chữ nhật
                                                </label>
                                                <label onclick="window.selectB1Option69('OrangeWall', 'Hình thoi')" id="lbl-b1-2-2" class="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all font-semibold text-slate-700 text-sm">
                                                    <span class="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center" id="dot-b1-2-2"></span>
                                                    Hình thoi
                                                </label>
                                                <label onclick="window.selectB1Option69('OrangeWall', 'Hình bình hành')" id="lbl-b1-2-3" class="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all font-semibold text-slate-700 text-sm">
                                                    <span class="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center" id="dot-b1-2-3"></span>
                                                    Hình bình hành
                                                </label>
                                            </div>
                                            <input type="hidden" id="inp-69-bt1-2" value="">
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col items-center">
                                    <img src="./assets/images/toan/toan_tap_1/69/1.png" alt="Mẫu ngôi nhà" class="max-h-60 object-contain rounded-2xl shadow-sm border border-slate-150 p-2">
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-69-bt1')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-69-bt1" onclick="window.check_69_bt1()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-69-bt1" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 1:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    - Mái nhà màu đỏ được làm từ hình thang cân.<br>
                                    - Thân nhà màu cam được làm từ hình chữ nhật.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 2: Trồng hoa, nuôi gà -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">2</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 2. Trồng hoa, nuôi gà (Mẫu 2)</h3>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                                    <p class="text-sm md:text-base font-bold text-slate-600 leading-relaxed">
                                        Quan sát mẫu ghép hình ngôi nhà kết hợp thêm vườn hoa và gà con:
                                    </p>
                                    
                                    <div class="space-y-4 font-bold text-slate-700">
                                        <div class="space-y-2">
                                            <p>1. Có bao nhiêu bông hoa màu đỏ ở góc trái bên dưới?</p>
                                            <div class="flex items-center gap-2">
                                                <input type="text" id="inp-69-bt2-1" class="w-24 text-center p-2 text-lg font-black border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span class="text-slate-500 text-sm">bông hoa</span>
                                            </div>
                                        </div>

                                        <div class="space-y-2">
                                            <p>2. Có bao nhiêu chú gà con màu vàng ở góc phải bên dưới?</p>
                                            <div class="flex items-center gap-2">
                                                <input type="text" id="inp-69-bt2-2" class="w-24 text-center p-2 text-lg font-black border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span class="text-slate-500 text-sm">chú gà</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col items-center">
                                    <img src="./assets/images/toan/toan_tap_1/69/2.png" alt="Mẫu ngôi nhà có hoa và gà" class="max-h-60 object-contain rounded-2xl shadow-sm border border-slate-150 p-2">
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-69-bt2')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-69-bt2" onclick="window.check_69_bt2()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-69-bt2" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 2:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    Dựa vào hình vẽ mẫu:<br>
                                    - Có tất cả 3 bông hoa màu đỏ ở góc trái bên dưới.<br>
                                    - Có tất cả 3 chú gà con màu vàng ở góc phải bên dưới.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `
};

window.lesson69 = lesson69;

// --- HÀM HỖ TRỢ TRẮC NGHIỆM BÀI 1 TIẾT 69 ---
window.selectB1Option69 = function(part, option) {
    if (part === 'RedRoof') {
        document.getElementById('inp-69-bt1-1').value = option;
        const optIds = ['1', '2', '3'];
        const values = ['Hình thang', 'Hình tam giác', 'Hình chữ nhật'];
        optIds.forEach((id, idx) => {
            const lbl = document.getElementById('lbl-b1-1-' + id);
            const dot = document.getElementById('dot-b1-1-' + id);
            if (values[idx] === option) {
                lbl.className = "flex items-center gap-3 p-3 bg-blue-50 border border-blue-500 rounded-xl cursor-pointer transition-all font-semibold text-blue-750 text-sm";
                dot.className = "w-4 h-4 rounded-full border border-blue-600 bg-blue-600 flex items-center justify-center";
            } else {
                lbl.className = "flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all font-semibold text-slate-700 text-sm";
                dot.className = "w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center";
            }
        });
    } else if (part === 'OrangeWall') {
        document.getElementById('inp-69-bt1-2').value = option;
        const optIds = ['1', '2', '3'];
        const values = ['Hình chữ nhật', 'Hình thoi', 'Hình bình hành'];
        optIds.forEach((id, idx) => {
            const lbl = document.getElementById('lbl-b1-2-' + id);
            const dot = document.getElementById('dot-b1-2-' + id);
            if (values[idx] === option) {
                lbl.className = "flex items-center gap-3 p-3 bg-blue-50 border border-blue-500 rounded-xl cursor-pointer transition-all font-semibold text-blue-750 text-sm";
                dot.className = "w-4 h-4 rounded-full border border-blue-600 bg-blue-600 flex items-center justify-center";
            } else {
                lbl.className = "flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all font-semibold text-slate-700 text-sm";
                dot.className = "w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center";
            }
        });
    }
};

// --- HÀM KIỂM TRA ĐÁP ÁN TIẾT 69 ---
window.check_69_bt1 = function() {
    const val1 = document.getElementById('inp-69-bt1-1').value;
    const val2 = document.getElementById('inp-69-bt1-2').value;

    const isCorrect1 = (val1 === 'Hình thang');
    const isCorrect2 = (val2 === 'Hình chữ nhật');
    const isCorrect = isCorrect1 && isCorrect2;

    const rightAnswer = "1) Hình thang; 2) Hình chữ nhật";
    const studentAnswer = `1) ${val1 || '?'}; 2) ${val2 || '?'}`;
    const guidance = metadata.bai_tap[0].guidance;
    const solution = metadata.bai_tap[0].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 1: Nhận diện hình phẳng ghép ngôi nhà", isCorrect ? 100 : 0, 'btn-check-69-bt1', 0, 2, (isCorrect1?1:0) + (isCorrect2?1:0));
    }
};

window.check_69_bt2 = function() {
    const val1 = document.getElementById('inp-69-bt2-1').value.trim();
    const val2 = document.getElementById('inp-69-bt2-2').value.trim();

    const isCorrect1 = (val1 === '3');
    const isCorrect2 = (val2 === '3');
    const isCorrect = isCorrect1 && isCorrect2;

    const rightAnswer = "1) 3 bông hoa; 2) 3 chú gà";
    const studentAnswer = `1) ${val1 || '?'} bông; 2) ${val2 || '?'} chú`;
    const guidance = metadata.bai_tap[1].guidance;
    const solution = metadata.bai_tap[1].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 2: Đếm số lượng hoa và gà con", isCorrect ? 100 : 0, 'btn-check-69-bt2', 0, 2, (isCorrect1?1:0) + (isCorrect2?1:0));
    }
};

export default lesson69;
