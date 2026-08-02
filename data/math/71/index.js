const metadata = {
    "lessonInfo": {
        "period": "71",
        "week": "15",
        "topic": "Luyện tập chung",
        "title": "BÀI 29: LUYỆN TẬP CHUNG (TIẾT 1)",
        "desc": "Luyện tập tổng hợp tính diện tích tam giác trên lưới ô vuông, chu vi và diện tích hình tròn đồng tâm, hình ghép và nhận biết thuộc tính diện tích tam giác."
    },
    "bai_tap": [
        {
            "id": "71_bt1",
            "type": "fill_multiple",
            "title": "Bài 1: Tính diện tích tam giác trên lưới ô vuông",
            "answers": ["37.5", "28.125", "18.75"],
            "guidance": "Bước 1: Tính chiều dài đáy và chiều cao thực tế bằng cách nhân số ô vuông với 2,5 cm.<br>- Tam giác ABC: đáy BC = 4 ô, cao = 3 ô.<br>- Tam giác DEG: đáy EG = 3 ô, cao = 3 ô.<br>- Tam giác HIK: đáy IK = 2 ô, cao = 3 ô.<br>Bước 2: Tính diện tích: S = đáy x chiều cao : 2.",
            "solution": "- Tam giác ABC: Đáy BC = 4 x 2,5 = 10 (cm); Chiều cao = 3 x 2,5 = 7,5 (cm). Diện tích là 10 x 7,5 : 2 = 37,5 (cm²).<br>- Tam giác DEG: Đáy EG = 3 x 2,5 = 7,5 (cm); Chiều cao = 3 x 2,5 = 7,5 (cm). Diện tích là 7,5 x 7,5 : 2 = 28,125 (cm²).<br>- Tam giác HIK: Đáy IK = 2 x 2,5 = 5 (cm); Chiều cao = 3 x 2,5 = 7,5 (cm). Diện tích là 5 x 7,5 : 2 = 18,75 (cm²)."
        },
        {
            "id": "71_bt2",
            "type": "fill_multiple",
            "title": "Bài 2: Tính toán trên hình tròn đồng tâm",
            "answers": ["150 cm", "4 lần"],
            "guidance": "a) Nhìn hình vẽ ta thấy đường kính hình tròn lớn = 2 x đường kính xanh lá + đường kính xanh dương.<br>b) Chu vi tỷ lệ thuận với bán kính, ta tính tỉ số bán kính hình tròn lớn và bé.",
            "solution": "a) Đường kính hình tròn lớn là: 200 x 2 = 400 (cm).<br>Đường kính hình tròn bé nhất (xanh dương) là: 50 x 2 = 100 (cm).<br>Đường kính mỗi hình tròn màu xanh lá cây là:<br>(400 - 100) : 2 = 150 (cm). Chọn đáp án B.<br>b) Tỉ số bán kính hình tròn lớn và bé nhất là: 200 : 50 = 4 (lần).<br>Do đó chu vi hình tròn lớn gấp 4 lần chu vi hình tròn bé. Chọn đáp án C."
        },
        {
            "id": "71_bt3",
            "type": "fill_multiple",
            "title": "Bài 3: Tính chu vi cái ao hình bán nguyệt",
            "answers": ["30.84"],
            "guidance": "Chu vi cái ao hình bán nguyệt gồm độ dài nửa đường tròn đường kính 12 m và độ dài đường kính 12 m đó: P = (3,14 x 12 : 2) + 12.",
            "solution": "Độ dài phần rìa cong nửa đường tròn là:<br>3,14 x 12 : 2 = 18,84 (m).<br>Chu vi của cái ao hình bán nguyệt đó là:<br>18,84 + 12 = 30,84 (m)."
        },
        {
            "id": "71_bt4",
            "type": "fill_multiple",
            "title": "Bài 4: Nhận định của Rô-bốt về diện tích tam giác ECD",
            "answers": ["Đúng"],
            "guidance": "Diện tích tam giác ECD được tính bằng đáy CD nhân chiều cao từ E xuống CD rồi chia cho 2. Đáy CD cố định bằng b cm, chiều cao luôn bằng chiều rộng AD của hình chữ nhật (a cm).",
            "solution": "Diện tích tam giác ECD = (CD x AD) : 2 = (b x a) : 2. Vì CD và chiều cao luôn không đổi cho dù E nằm ở đâu trên AB nên diện tích ECD luôn không đổi. Vậy Rô-bốt nói đúng."
        }
    ],
    "quizPool": [
        { "question": "Tính diện tích tam giác có đáy 10 cm và chiều cao 6 cm:", "options": ["30 cm²", "60 cm²", "16 cm²", "30 cm"], "answer": 0 },
        { "question": "Hình tròn bán kính 2 m có chu vi là:", "options": ["12.56 m", "6.28 m", "12.56 m²", "4 m"], "answer": 0 },
        { "question": "Tính chu vi nửa hình tròn đường kính 10 dm (bao gồm cả đường kính):", "options": ["25.7 dm", "15.7 dm", "31.4 dm", "20.7 dm"], "answer": 0 },
        { "question": "Tam giác ABC có đáy BC = 8 cm, chiều cao AH = 5 cm. Diện tích của nó là:", "options": ["20 cm²", "40 cm²", "13 cm²", "20 cm"], "answer": 0 },
        { "question": "Diện tích hình tròn lớn gấp 9 lần diện tích hình tròn bé. Bán kính hình tròn lớn gấp mấy lần bán kính hình tròn bé?", "options": ["3 lần", "9 lần", "4.5 lần", "6 lần"], "answer": 0 },
        { "question": "Nếu đường kính của một hình tròn tăng lên 2 lần thì chu vi của nó tăng lên mấy lần?", "options": ["2 lần", "4 lần", "3.14 lần", "không đổi"], "answer": 0 },
        { "question": "Nếu đường kính của một hình tròn tăng lên 3 lần thì diện tích của nó tăng lên mấy lần?", "options": ["9 lần", "3 lần", "6 lần", "27 lần"], "answer": 0 },
        { "question": "Nửa hình tròn đường kính d có độ dài đường biên cong là:", "options": ["3,14 x d : 2", "3,14 x d", "3,14 x d x 2", "1,57 x d x d"], "answer": 0 },
        { "question": "Một thửa ruộng hình tam giác có diện tích 150 m², đáy dài 20 m. Chiều cao của thửa ruộng đó là:", "options": ["15 m", "7.5 m", "30 m", "10 m"], "answer": 0 },
        { "question": "Hình thang có hai đáy lần lượt là 6 cm và 4 cm, chiều cao 5 cm. Diện tích của nó là:", "options": ["25 cm²", "50 cm²", "24 cm²", "12.5 cm²"], "answer": 0 },
        { "question": "Một hình tròn có chu vi 18,84 cm. Diện tích của hình tròn đó là:", "options": ["28.26 cm²", "9.42 cm²", "56.52 cm²", "28.26 cm"], "answer": 0 },
        { "question": "Chu vi hình tròn bán kính r gấp mấy lần bán kính r đó?", "options": ["6.28 lần", "3.14 lần", "2 lần", "6.28 m"], "answer": 0 },
        { "question": "Tính diện tích tam giác vuông có hai cạnh góc vuông là 3 dm và 4 dm:", "options": ["6 dm²", "12 dm²", "7 dm²", "6 dm"], "answer": 0 },
        { "question": "Ghép hai hình tam giác vuông có cùng diện tích 15 cm² thành một hình thoi. Diện tích hình thoi là:", "options": ["30 cm²", "15 cm²", "7.5 cm²", "45 cm²"], "answer": 0 },
        { "question": "Một khu đất dạng nửa hình tròn có đường kính 40 m. Chu vi khu đất đó (gồm đường kính) là:", "options": ["102.8 m", "62.8 m", "82.8 m", "102.8 m²"], "answer": 0 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson71 = {
    ...metadata.lessonInfo,
    metadata: metadata,
    quizPool: [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
                    
                    <!-- Slide 1: Khởi động ôn tập tổng hợp hình phẳng -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6 max-w-4xl mx-auto">
                            <div class="bg-white p-8 rounded-3xl border border-blue-100 shadow-md space-y-6">
                                <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                                    <span class="text-2xl md:text-4xl animate-bounce-slow">📚</span>
                                    <div>
                                        <h3 class="text-xl md:text-2xl font-black text-blue-900">Kiến thức tổng hợp</h3>
                                        <p class="text-xs text-slate-500 font-semibold mt-0.5">Tóm tắt công thức cần nhớ trước khi làm bài tập</p>
                                    </div>
                                </div>
                                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4 font-bold text-slate-700 text-xl md:text-3xl leading-relaxed">
                                    <p>📐 <strong>Diện tích tam giác:</strong> S = (đáy × chiều cao) : 2</p>
                                    <p>📏 <strong>Chu vi hình tròn:</strong> C = 3,14 × d = 3,14 × r × 2</p>
                                    <p>🎯 <strong>Diện tích hình tròn:</strong> S = 3,14 × r × r</p>
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
                    
                    <!-- Bài 1: Tính diện tích tam giác trên lưới ô vuông -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">1</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Diện tích các hình tam giác (ô vuông cạnh 2,5 cm)</h3>
                                </div>
                            </div>

                            <div class="space-y-6 max-w-3xl mx-auto">
                                <div class="flex justify-center bg-white p-4 rounded-3xl border border-slate-150 shadow-sm">
                                    <img src="./assets/images/toan/toan_tap_1/71/1.png" alt="Các hình tam giác trên lưới" class="max-h-48 object-contain rounded-2xl">
                                </div>

                                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                                    <p class="text-sm md:text-base font-bold text-slate-600 leading-relaxed">
                                        Tính diện tích từng hình tam giác ở trên (mỗi ô vuông có cạnh 2,5 cm):
                                    </p>
                                    
                                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 font-bold text-slate-700">
                                        <div class="space-y-2 p-3 bg-slate-50 border border-slate-150 rounded-2xl">
                                            <p class="text-blue-750">Tam giác ABC:</p>
                                            <div class="flex flex-nowrap items-center gap-1">
                                                <input type="text" id="inp-71-bt1-1" class="w-24 text-center p-2 text-lg font-black border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span class="text-xs text-slate-500">cm²</span>
                                            </div>
                                        </div>

                                        <div class="space-y-2 p-3 bg-slate-50 border border-slate-150 rounded-2xl">
                                            <p class="text-orange-750">Tam giác DEG:</p>
                                            <div class="flex flex-nowrap items-center gap-1">
                                                <input type="text" id="inp-71-bt1-2" class="w-24 text-center p-2 text-lg font-black border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span class="text-xs text-slate-500">cm²</span>
                                            </div>
                                        </div>

                                        <div class="space-y-2 p-3 bg-slate-50 border border-slate-150 rounded-2xl">
                                            <p class="text-emerald-750">Tam giác HIK:</p>
                                            <div class="flex flex-nowrap items-center gap-1">
                                                <input type="text" id="inp-71-bt1-3" class="w-24 text-center p-2 text-lg font-black border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span class="text-xs text-slate-500">cm²</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-71-bt1')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-71-bt1" onclick="window.check_71_bt1()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-71-bt1" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 1:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    - Tam giác ABC: Đáy BC = 4 ô = 10 cm; chiều cao = 3 ô = 7,5 cm.<br>S = 10 × 7,5 : 2 = 37,5 (cm²).<br>
                                    - Tam giác DEG: Đáy EG = 3 ô = 7,5 cm; chiều cao = 3 ô = 7,5 cm.<br>S = 7,5 × 7,5 : 2 = 28,125 (cm²).<br>
                                    - Tam giác HIK: Đáy IK = 2 ô = 5 cm; chiều cao = 3 ô = 7,5 cm.<br>S = 5 × 7,5 : 2 = 18,75 (cm²).
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 2: Hình học đường tròn đồng tâm / bốn lá xanh -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">2</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 2. Hình tròn và hoa văn bốn lá</h3>
                                </div>
                            </div>

                            <div class="space-y-6 max-w-3xl mx-auto">
                                <div class="flex justify-center bg-white p-4 rounded-3xl border border-slate-150 shadow-sm">
                                    <img src="./assets/images/toan/toan_tap_1/71/2.png" alt="Bản vẽ bốn hình tròn" class="max-h-56 object-contain rounded-2xl">
                                </div>

                                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6 font-bold text-slate-700 text-sm md:text-base leading-relaxed">
                                    <p>Trong hình, biết hình tròn bé nhất (màu xanh dương) có bán kính 50 cm, hình tròn lớn nhất có bán kính 200 cm.</p>
                                    
                                    <hr class="border-slate-100">

                                    <div class="space-y-3">
                                        <p><strong>a) Đường kính mỗi hình tròn màu xanh lá cây là:</strong></p>
                                        <div class="flex flex-col gap-2 max-w-md">
                                            <label onclick="window.selectB2aOption71('100 cm')" id="lbl-b2a-1" class="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all font-semibold text-slate-700">
                                                <span class="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center text-xs" id="dot-b2a-1"></span>
                                                A. 100 cm
                                            </label>
                                            <label onclick="window.selectB2aOption71('150 cm')" id="lbl-b2a-2" class="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all font-semibold text-slate-700">
                                                <span class="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center text-xs" id="dot-b2a-2"></span>
                                                B. 150 cm
                                            </label>
                                            <label onclick="window.selectB2aOption71('400 cm')" id="lbl-b2a-3" class="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all font-semibold text-slate-700">
                                                <span class="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center text-xs" id="dot-b2a-3"></span>
                                                C. 400 cm
                                            </label>
                                        </div>
                                        <input type="hidden" id="inp-71-bt2-1" value="">
                                    </div>

                                    <hr class="border-slate-100">

                                    <div class="space-y-3">
                                        <p><strong>b) Chu vi hình tròn lớn nhất gấp mấy lần chu vi hình tròn bé nhất?</strong></p>
                                        <div class="flex flex-col gap-2 max-w-md">
                                            <label onclick="window.selectB2bOption71('2 lần')" id="lbl-b2b-1" class="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all font-semibold text-slate-700">
                                                <span class="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center text-xs" id="dot-b2b-1"></span>
                                                A. 2 lần
                                            </label>
                                            <label onclick="window.selectB2bOption71('3 lần')" id="lbl-b2b-2" class="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all font-semibold text-slate-700">
                                                <span class="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center text-xs" id="dot-b2b-2"></span>
                                                B. 3 lần
                                            </label>
                                            <label onclick="window.selectB2bOption71('4 lần')" id="lbl-b2b-3" class="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all font-semibold text-slate-700">
                                                <span class="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center text-xs" id="dot-b2b-3"></span>
                                                C. 4 lần
                                            </label>
                                        </div>
                                        <input type="hidden" id="inp-71-bt2-2" value="">
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-71-bt2')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-71-bt2" onclick="window.check_71_bt2()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-71-bt2" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 2:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    a) Đường kính hình tròn lớn nhất: 200 × 2 = 400 (cm).<br>
                                    Đường kính hình tròn xanh dương bé nhất: 50 × 2 = 100 (cm).<br>
                                    Đường kính mỗi hình xanh lá cây: (400 - 100) : 2 = 150 (cm). Chọn B.<br>
                                    b) Tỉ số bán kính hình tròn lớn và bé nhất: 200 : 50 = 4 (lần).<br>
                                    Do đó chu vi hình tròn lớn gấp 4 lần chu vi bé nhất. Chọn C.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 3: Chu vi cái ao hình bán nguyệt (1 cột) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">3</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 3. Chu vi cái ao hình bán nguyệt</h3>
                                </div>
                            </div>

                            <div class="space-y-6 max-w-3xl mx-auto">
                                <div class="flex justify-center bg-white p-4 rounded-3xl border border-slate-150 shadow-sm">
                                    <img src="./assets/images/toan/toan_tap_1/71/3.png" alt="Cái ao dạng nửa hình tròn" class="max-h-56 object-contain rounded-2xl">
                                </div>

                                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 font-bold text-slate-700">
                                    <p class="text-sm md:text-base leading-relaxed">
                                        Một cái ao dạng nửa hình tròn có đường kính là <strong>12 m</strong> như sơ đồ hình vẽ. Tính chu vi cái ao đó.
                                    </p>
                                    <div class="flex items-center gap-2">
                                        <input type="text" id="inp-71-bt3-1" class="w-36 text-center p-3 text-xl font-black border-2 border-slate-350 rounded-2xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 48px !important;" placeholder="">
                                        <span class="text-lg font-black text-slate-600">m</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-71-bt3')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-71-bt3" onclick="window.check_71_bt3()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-71-bt3" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 3:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    Độ dài phần rìa cong nửa hình tròn của ao là:<br>
                                    3,14 × 12 : 2 = 18,84 (m).<br>
                                    Chu vi của cái ao hình bán nguyệt đó là:<br>
                                    18,84 + 12 = 30,84 (m).
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 4: Nhận định của Rô-bốt (1 cột) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">4</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 4. Rô-bốt nói đúng hay sai?</h3>
                                </div>
                            </div>

                            <div class="space-y-6 max-w-3xl mx-auto">
                                <div class="flex justify-center bg-white p-4 rounded-3xl border border-slate-150 shadow-sm">
                                    <img src="./assets/images/toan/toan_tap_1/71/4.png" alt="Sơ đồ tam giác trong chữ nhật" class="max-h-48 object-contain rounded-2xl">
                                </div>

                                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6 font-bold text-slate-700 text-sm md:text-base leading-relaxed">
                                    <p>Rô-bốt nói: <i>\"Dù lấy điểm E ở vị trí nào trên đoạn thẳng AB thì diện tích hình tam giác ECD không thay đổi.\"</i></p>
                                    <p>Theo em, bạn Rô-bốt nói đúng hay sai?</p>
                                    
                                    <div class="flex flex-col gap-3 max-w-xs mx-auto">
                                        <label onclick="window.selectB4Option71('Đúng')" id="lbl-b4-1" class="flex items-center gap-3 p-3 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700">
                                            <span class="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs" id="dot-b4-1"></span>
                                            Đúng
                                        </label>
                                        <label onclick="window.selectB4Option71('Sai')" id="lbl-b4-2" class="flex items-center gap-3 p-3 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700">
                                            <span class="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs" id="dot-b4-2"></span>
                                            Sai
                                        </label>
                                    </div>
                                    <input type="hidden" id="inp-71-bt4-1" value="">
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-71-bt4')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-71-bt4" onclick="window.check_71_bt4()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-71-bt4" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 4:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    Đáy CD của tam giác ECD luôn cố định (có độ dài b cm).<br>
                                    Chiều cao hạ từ E xuống đáy CD luôn không đổi và bằng chiều rộng AD của hình chữ nhật ABCD (a cm).<br>
                                    Do đó, diện tích tam giác ECD = (b × a) : 2 luôn luôn không đổi khi E di chuyển trên AB. Vậy Rô-bốt nói đúng!
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `
};

window.lesson71 = lesson71;

// --- HÀM TRẮC NGHIỆM TIẾT 71 ---
window.selectB2aOption71 = function(option) {
    document.getElementById('inp-71-bt2-1').value = option;
    const opts = ['1', '2', '3'];
    const names = ['100 cm', '150 cm', '400 cm'];
    opts.forEach((opt, idx) => {
        const lbl = document.getElementById('lbl-b2a-' + opt);
        const dot = document.getElementById('dot-b2a-' + opt);
        if (names[idx] === option) {
            lbl.className = "flex items-center gap-3 p-3 bg-blue-50 border-2 border-blue-500 rounded-2xl cursor-pointer transition-all font-black text-blue-700 shadow-sm";
            dot.className = "w-4 h-4 rounded-full border-2 border-blue-600 bg-blue-600 flex items-center justify-center text-xs";
        } else {
            lbl.className = "flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all font-semibold text-slate-700";
            dot.className = "w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center text-xs";
        }
    });
};

window.selectB2bOption71 = function(option) {
    document.getElementById('inp-71-bt2-2').value = option;
    const opts = ['1', '2', '3'];
    const names = ['2 lần', '3 lần', '4 lần'];
    opts.forEach((opt, idx) => {
        const lbl = document.getElementById('lbl-b2b-' + opt);
        const dot = document.getElementById('dot-b2b-' + opt);
        if (names[idx] === option) {
            lbl.className = "flex items-center gap-3 p-3 bg-blue-50 border-2 border-blue-500 rounded-2xl cursor-pointer transition-all font-black text-blue-700 shadow-sm";
            dot.className = "w-4 h-4 rounded-full border-2 border-blue-600 bg-blue-600 flex items-center justify-center text-xs";
        } else {
            lbl.className = "flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all font-semibold text-slate-700";
            dot.className = "w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center text-xs";
        }
    });
};

window.selectB4Option71 = function(option) {
    document.getElementById('inp-71-bt4-1').value = option;
    const opts = ['1', '2'];
    const names = ['Đúng', 'Sai'];
    opts.forEach((opt, idx) => {
        const lbl = document.getElementById('lbl-b4-' + opt);
        const dot = document.getElementById('dot-b4-' + opt);
        if (names[idx] === option) {
            lbl.className = "flex items-center gap-3 p-3 bg-blue-50 border-2 border-blue-500 rounded-2xl cursor-pointer transition-all font-black text-blue-700 shadow-sm";
            dot.className = "w-5 h-5 rounded-full border-2 border-blue-600 bg-blue-600 flex items-center justify-center text-xs";
        } else {
            lbl.className = "flex items-center gap-3 p-3 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700";
            dot.className = "w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs";
        }
    });
};

// --- HÀM KIỂM TRA ĐÁP ÁN TIẾT 71 ---
window.check_71_bt1 = function() {
    const val1 = document.getElementById('inp-71-bt1-1').value.trim().replace(',', '.');
    const val2 = document.getElementById('inp-71-bt1-2').value.trim().replace(',', '.');
    const val3 = document.getElementById('inp-71-bt1-3').value.trim().replace(',', '.');

    const isCorrect1 = (val1 === "37.5" || val1 === "37,5");
    const isCorrect2 = (val2 === "28.125" || val2 === "28,125");
    const isCorrect3 = (val3 === "18.75" || val3 === "18,75");

    const isCorrect = isCorrect1 && isCorrect2 && isCorrect3;

    const rightAnswer = "S(ABC) = 37.5; S(DEG) = 28.125; S(HIK) = 18.75";
    const studentAnswer = `S(ABC) = ${val1 || '?'}; S(DEG) = ${val2 || '?'}; S(HIK) = ${val3 || '?'}`;
    const guidance = metadata.bai_tap[0].guidance;
    const solution = metadata.bai_tap[0].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 1: Tính diện tích tam giác trên lưới ô vuông", isCorrect ? 100 : 0, 'btn-check-71-bt1', 0, 3, (isCorrect1?1:0) + (isCorrect2?1:0) + (isCorrect3?1:0));
    }
};

window.check_71_bt2 = function() {
    const val1 = document.getElementById('inp-71-bt2-1').value;
    const val2 = document.getElementById('inp-71-bt2-2').value;

    const isCorrect1 = (val1 === '150 cm');
    const isCorrect2 = (val2 === '4 lần');
    const isCorrect = isCorrect1 && isCorrect2;

    const rightAnswer = "a) 150 cm; b) 4 lần";
    const studentAnswer = `a) ${val1 || '?'}; b) ${val2 || '?'}`;
    const guidance = metadata.bai_tap[1].guidance;
    const solution = metadata.bai_tap[1].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 2: Tính toán trên hình tròn đồng tâm", isCorrect ? 100 : 0, 'btn-check-71-bt2', 0, 2, (isCorrect1?1:0) + (isCorrect2?1:0));
    }
};

window.check_71_bt3 = function() {
    const val = document.getElementById('inp-71-bt3-1').value.trim().replace(',', '.');
    const isCorrect = (val === '30.84');

    const rightAnswer = "30.84";
    const studentAnswer = val || '?';
    const guidance = metadata.bai_tap[2].guidance;
    const solution = metadata.bai_tap[2].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 3: Tính chu vi cái ao hình bán nguyệt", isCorrect ? 100 : 0, 'btn-check-71-bt3', 0, 1, isCorrect ? 1 : 0);
    }
};

window.check_71_bt4 = function() {
    const val = document.getElementById('inp-71-bt4-1').value;
    const isCorrect = (val === 'Đúng');

    const rightAnswer = "Đúng";
    const studentAnswer = val || 'Chưa chọn';
    const guidance = metadata.bai_tap[3].guidance;
    const solution = metadata.bai_tap[3].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 4: Nhận định của Rô-bốt về diện tích tam giác ECD", isCorrect ? 100 : 0, 'btn-check-71-bt4', 0, 1, isCorrect ? 1 : 0);
    }
};

export default lesson71;
