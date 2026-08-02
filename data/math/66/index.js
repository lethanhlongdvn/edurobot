const metadata = {
    "lessonInfo": {
        "period": "66",
        "week": "14",
        "topic": "Luyện tập",
        "title": "BÀI 27: ĐƯỜNG TRÒN. CHU VI VÀ DIỆN TÍCH HÌNH TRÒN (TIẾT 3 - LUYỆN TẬP)",
        "desc": "Luyện tập tính chu vi hình tròn và ứng dụng giải các bài toán thực tế kết hợp so sánh chu vi với hình vuông, hình chữ nhật."
    },
    "bai_tap": [
        {
            "id": "66_bt1",
            "type": "fill_multiple",
            "title": "Bài 1: So sánh chu vi các hình",
            "answers": ["Hình tròn"],
            "guidance": "Tính chu vi từng hình rồi so sánh:<br>- Chu vi hình vuông: 5 x 4 = 20 (cm).<br>- Chu vi hình chữ nhật: (7 + 3) x 2 = 20 (cm).<br>- Chu vi hình tròn: 3,14 x 4 x 2 = 25,12 (cm).",
            "solution": "- Chu vi hình vuông ABCD: 5 x 4 = 20 (cm).<br>- Chu vi hình chữ nhật EGHK: (7 + 3) x 2 = 20 (cm).<br>- Chu vi hình tròn tâm O: 3,14 x 4 x 2 = 25,12 (cm).<br>Vì 25,12 cm > 20 cm nên hình tròn có chu vi lớn nhất."
        },
        {
            "id": "66_bt2",
            "type": "fill_multiple",
            "title": "Bài 2: Chiều dài sợi dây thép uốn thành cái khung",
            "answers": ["Bờm nói đúng"],
            "guidance": "Khung gồm 1 hình tròn đường kính d (chu vi là 3,14 x d) và 2 thanh tay cán dài b (tổng chiều dài là b x 2). Vậy tổng chiều dài sợi dây thép là: b x 2 + 3,14 x d.",
            "solution": "Khung gồm hình tròn có chu vi là 3,14 x d và 2 thanh làm cán dài b x 2. Công thức tính tổng chiều dài dây thép là: b x 2 + 3,14 x d. Do đó Bờm nói đúng."
        },
        {
            "id": "66_bt3",
            "type": "fill_multiple",
            "title": "Bài 3: Tính chiều dài sợi dây thừng",
            "answers": ["6.568"],
            "guidance": "Bước 1: Đổi bán kính 2 dm = 0,2 m.<br>Bước 2: Tính chu vi 1 vòng quấn quanh gốc cây: C = 3,14 x 0,2 x 2 = 1,256 (m).<br>Bước 3: Chiều dài 3 vòng quấn: 1,256 x 3 = 3,768 (m).<br>Bước 4: Tính tổng chiều dài sợi dây: 3,768 + 2,8 = 6,568 (m).",
            "solution": "Đổi: 2 dm = 0,2 m.<br>Chu vi một vòng quấn là:<br>3,14 x 0,2 x 2 = 1,256 (m).<br>Chiều dài của 3 vòng quấn là:<br>1,256 x 3 = 3,768 (m).<br>Chiều dài của sợi dây thừng đó là:<br>3,768 + 2,8 = 6,568 (m)."
        },
        {
            "id": "66_bt4",
            "type": "fill_multiple",
            "title": "Bài 4: So sánh quãng đường bò của hai chú rùa",
            "answers": ["Hai chú rùa đi bằng nhau"],
            "guidance": "- Đường đi rùa vàng (đỏ) gồm 3 nửa đường tròn đường kính 3 dm, 1 dm và 5 dm.<br>- Đường đi rùa nâu (xanh) là nửa đường tròn đường kính 9 dm.<br>Tính toán và so sánh hai độ dài đường đi này.",
            "solution": "- Quãng đường rùa vàng (đường màu đỏ) là:<br>(3,14 x 3) : 2 + (3,14 x 1) : 2 + (3,14 x 5) : 2 = 1,57 x (3 + 1 + 5) = 14,13 (dm).<br>- Quãng đường rùa nâu (đường màu xanh) là:<br>(3,14 x 9) : 2 = 14,13 (dm).<br>Vậy quãng đường bò của hai chú rùa bằng nhau."
        }
    ],
    "quizPool": [
        { "question": "Tính chu vi hình tròn có đường kính 1,2 m:", "options": ["3.768 m", "7.536 m", "1.884 m", "3.768 m²"], "answer": 0 },
        { "question": "Tính chu vi hình tròn có bán kính 0,8 dm:", "options": ["5.024 dm", "2.512 dm", "5.024 cm", "10.048 dm"], "answer": 0 },
        { "question": "So sánh chu vi hình vuông cạnh 4 cm và hình tròn bán kính 2,5 cm:", "options": ["Hình vuông lớn hơn", "Hình tròn lớn hơn", "Hai hình bằng nhau", "Không so sánh được"], "answer": 0 },
        { "question": "Nếu đường kính hình tròn tăng lên 3 lần thì chu vi tăng mấy lần?", "options": ["3 lần", "6 lần", "9 lần", "không đổi"], "answer": 0 },
        { "question": "Một bánh xe quay được 100 vòng thì đi được 188,4 m. Đường kính bánh xe là bao nhiêu mét?", "options": ["0.6 m", "1.2 m", "0.3 m", "6 m"], "answer": 0 },
        { "question": "Hình tròn có chu vi 15,7 cm thì bán kính là:", "options": ["2.5 cm", "5 cm", "1.25 cm", "7.85 cm"], "answer": 0 },
        { "question": "Sợi dây dài 62,8 cm uốn thành một hình tròn. Bán kính hình tròn đó là:", "options": ["10 cm", "20 cm", "5 cm", "31.4 cm"], "answer": 0 },
        { "question": "Bánh xe có bán kính 30 cm. Khi xe đi được 188,4 m thì bánh xe đã quay được mấy vòng?", "options": ["100 vòng", "50 vòng", "200 vòng", "10 vòng"], "answer": 0 },
        { "question": "Một miệng giếng hình tròn có bán kính 0,7 m. Chu vi miệng giếng đó là:", "options": ["4.396 m", "2.198 m", "4.396 cm", "2.198 dm"], "answer": 0 },
        { "question": "Một hình chữ nhật có chiều dài 8 cm, chiều rộng 4,56 cm. Hình tròn nào dưới đây có chu vi bằng chu vi hình chữ nhật đó?", "options": ["Hình tròn đường kính 8 cm", "Hình tròn bán kính 2 cm", "Hình tròn bán kính 4 cm", "Hình tròn đường kính 4 cm"], "answer": 0 },
        { "question": "Cho hai hình tròn: hình tròn A có đường kính gấp 2 lần đường kính hình tròn B. Chu vi hình tròn A gấp mấy lần chu vi hình tròn B?", "options": ["2 lần", "4 lần", "3 lần", "8 lần"], "answer": 0 },
        { "question": "Chu vi hình tròn có bán kính 0,5 dm là:", "options": ["3.14 dm", "1.57 dm", "6.28 dm", "3.14 cm"], "answer": 0 },
        { "question": "Một hình vuông có chu vi 31,4 cm. Một hình tròn có đường kính bằng cạnh hình vuông đó. Chu vi hình tròn là:", "options": ["24.649 cm", "24.649 m", "31.4 cm", "12.56 cm"], "answer": 0 },
        { "question": "Cho số Pi là 3,14. Đường tròn có đường kính 100 cm có chu vi là:", "options": ["3.14 m", "314 m", "31.4 m", "0.314 m"], "answer": 0 },
        { "question": "Một cái ao hình tròn có đường kính 10 m. Người ta làm lan can xung quanh ao. Chiều dài lan can là:", "options": ["31.4 m", "62.8 m", "15.7 m", "31.4 m²"], "answer": 0 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson66 = {
    ...metadata.lessonInfo,
    metadata: metadata,
    quizPool: [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
                    
                    <!-- Slide 1: Khởi động Luyện tập -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="bg-white p-6 rounded-3xl border border-blue-100 shadow-md space-y-4 font-semibold text-slate-700 leading-relaxed">
                                <h3 class="text-lg md:text-xl font-black text-blue-900 border-b border-slate-100 pb-2">💡 Nhắc lại kiến thức cần nhớ:</h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                                    <div class="bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
                                        <p class="font-black text-blue-800 mb-1">Tính theo đường kính d:</p>
                                        <code class="text-2xl md:text-3xl font-black text-blue-950">C = 3,14 × d</code>
                                    </div>
                                    <div class="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100">
                                        <p class="font-black text-emerald-800 mb-1">Tính theo bán kính r:</p>
                                        <code class="text-2xl md:text-3xl font-black text-emerald-950">C = 3,14 × r × 2</code>
                                    </div>
                                </div>
                                <p class="text-slate-500 text-xs md:text-sm italic">Hôm nay chúng ta sẽ giải quyết các bài toán luyện tập từ cơ bản đến nâng cao trong sách giáo khoa trang 108 & 109.</p>
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
                    
                    <!-- Bài 1: Hình nào có chu vi lớn nhất -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">1</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Hình nào có chu vi lớn nhất?</h3>
                                </div>
                            </div>

                            <div class="flex justify-center">
                                <img src="./assets/images/toan/toan_tap_1/66/1.png" alt="So sánh chu vi" class="max-h-48 object-contain rounded-2xl shadow-sm border border-slate-100 p-2">
                            </div>

                            <p class="text-sm md:text-base font-bold text-slate-600 leading-relaxed text-center">
                                Hãy so sánh chu vi của hình vuông (ABCD), hình chữ nhật (EGHK) và hình tròn (tâm O) trên.
                            </p>

                            <!-- Câu hỏi trắc nghiệm trực quan -->
                            <div class="flex flex-col gap-3 max-w-md mx-auto">
                                <label onclick="window.selectB1Option('Hình vuông')" id="lbl-b1-square" class="flex items-center gap-3 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700">
                                    <span class="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs" id="dot-b1-square"></span>
                                    Hình vuông ABCD (Cạnh 5 cm)
                                </label>
                                <label onclick="window.selectB1Option('Hình chữ nhật')" id="lbl-b1-rect" class="flex items-center gap-3 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700">
                                    <span class="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs" id="dot-b1-rect"></span>
                                    Hình chữ nhật EGHK (7 cm x 3 cm)
                                </label>
                                <label onclick="window.selectB1Option('Hình tròn')" id="lbl-b1-circle" class="flex items-center gap-3 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700">
                                    <span class="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs" id="dot-b1-circle"></span>
                                    Hình tròn tâm O (Bán kính 4 cm)
                                </label>
                            </div>

                            <input type="hidden" id="inp-66-bt1-1" value="">

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-66-bt1')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-66-bt1" onclick="window.check_66_bt1()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-66-bt1" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 1:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    - Chu vi hình vuông ABCD là: 5 × 4 = 20 (cm).<br>
                                    - Chu vi hình chữ nhật EGHK là: (7 + 3) × 2 = 20 (cm).<br>
                                    - Chu vi hình tròn tâm O là: 3,14 × 4 × 2 = 25,12 (cm).<br>
                                    Vì 25,12 cm > 20 cm nên hình tròn tâm O có chu vi lớn nhất.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 2: Chiều dài sợi dây thép khung -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">2</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 2. Ai nói đúng?</h3>
                                </div>
                            </div>

                            <div class="flex justify-center">
                                <img src="./assets/images/toan/toan_tap_1/66/2.png" alt="Bài 2 SGK" class="max-h-60 object-contain rounded-2xl shadow-sm border border-slate-100 p-2">
                            </div>

                            <p class="text-sm md:text-base font-bold text-slate-600 leading-relaxed text-center">
                                Hỏi trong bức tranh, ai đưa ra công thức tính chiều dài sợi dây thép đúng?
                            </p>

                            <!-- Câu hỏi trắc nghiệm -->
                            <div class="flex flex-col gap-3 max-w-md mx-auto">
                                <label onclick="window.selectB2Option('Phú Ông nói đúng')" id="lbl-b2-uncle" class="flex items-center gap-3 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700">
                                    <span class="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs" id="dot-b2-uncle"></span>
                                    Phú Ông: b + 3,14 × d
                                </label>
                                <label onclick="window.selectB2Option('Bờm nói đúng')" id="lbl-b2-kid" class="flex items-center gap-3 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700">
                                    <span class="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs" id="dot-b2-kid"></span>
                                    Bờm: b × 2 + 3,14 × d
                                </label>
                            </div>

                            <input type="hidden" id="inp-66-bt2-1" value="">

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-66-bt2')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-66-bt2" onclick="window.check_66_bt2()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-66-bt2" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 2:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    - Chiều dài thép uốn khung hình tròn đường kính d là: 3,14 × d.<br>
                                    - Khung tay cán gồm 2 thanh thẳng dài b, tổng độ dài là: b × 2.<br>
                                    Do đó, chiều dài thép thực tế là: b × 2 + 3,14 × d.<br>
                                    Vậy Bờm nói đúng!
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 3: Sợi dây thừng quấn quanh gốc cây -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">3</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 3. Độ dài sợi dây thừng</h3>
                                </div>
                            </div>

                            <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 font-bold text-slate-700">
                                <p class="text-sm md:text-base leading-relaxed">
                                    Một sợi dây thừng quấn quanh một gốc cây đúng <strong>3 vòng</strong>. Mỗi vòng có dạng hình tròn bán kính <strong>2 dm</strong>. Phần dây thừa không quấn dài <strong>2,8 m</strong>.
                                </p>
                                <p class="text-sm md:text-base leading-relaxed">
                                    Sợi dây thừng đó dài bao nhiêu mét?
                                </p>
                                <div class="flex items-center gap-2">
                                    <input type="text" id="inp-66-bt3-1" class="w-32 text-center p-3 text-xl font-black border-2 border-slate-350 rounded-2xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 48px !important;" placeholder="">
                                    <span class="text-lg font-black text-slate-600">m</span>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-66-bt3')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-66-bt3" onclick="window.check_66_bt3()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-66-bt3" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 3:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    Đổi: 2 dm = 0,2 m.<br>
                                    Chu vi của một vòng quấn quanh gốc cây là:<br>
                                    3,14 × 0,2 × 2 = 1,256 (m).<br>
                                    Độ dài của 3 vòng quấn quanh gốc cây là:<br>
                                    1,256 × 3 = 3,768 (m).<br>
                                    Chiều dài của sợi dây thừng đó là:<br>
                                    3,768 + 2,8 = 6,568 (m).
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 4: Đường bò của hai chú rùa -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">4</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 4. Quãng đường bò của hai chú rùa</h3>
                                </div>
                            </div>

                            <div class="flex justify-center">
                                <img src="./assets/images/toan/toan_tap_1/66/4.png" alt="Đường đi của hai chú rùa" class="max-h-56 object-contain rounded-2xl shadow-sm border border-slate-100 p-2">
                            </div>

                            <p class="text-sm md:text-base font-bold text-slate-600 leading-relaxed text-center">
                                Chú rùa vàng bò từ A đến B (đường màu đỏ), chú rùa nâu bò từ B đến A (đường màu xanh). Hỏi chú rùa nào đi quãng đường dài hơn?
                            </p>

                            <!-- Câu hỏi trắc nghiệm rùa -->
                            <div class="flex flex-col gap-3 max-w-md mx-auto">
                                <label onclick="window.selectB4Option('Rùa vàng đi dài hơn')" id="lbl-b4-yellow" class="flex items-center gap-3 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700">
                                    <span class="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs" id="dot-b4-yellow"></span>
                                    Chú rùa màu vàng bò dài hơn
                                </label>
                                <label onclick="window.selectB4Option('Rùa nâu đi dài hơn')" id="lbl-b4-brown" class="flex items-center gap-3 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700">
                                    <span class="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs" id="dot-b4-brown"></span>
                                    Chú rùa màu nâu bò dài hơn
                                </label>
                                <label onclick="window.selectB4Option('Hai chú rùa đi bằng nhau')" id="lbl-b4-equal" class="flex items-center gap-3 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700">
                                    <span class="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs" id="dot-b4-equal"></span>
                                    Hai chú rùa bò quãng đường bằng nhau
                                </label>
                            </div>

                            <input type="hidden" id="inp-66-bt4-1" value="">

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-66-bt4')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-66-bt4" onclick="window.check_66_bt4()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-66-bt4" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 4:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    - Quãng đường rùa vàng (đường màu đỏ) gồm 3 nửa đường tròn:<br>
                                    (3,14 × 3) : 2 + (3,14 × 1) : 2 + (3,14 × 5) : 2 = 14,13 (dm).<br>
                                    - Quãng đường rùa nâu (đường màu xanh) gồm 1 nửa đường tròn đường kính (3 + 1 + 5 = 9 dm):<br>
                                    (3,14 × 9) : 2 = 14,13 (dm).<br>
                                    Do đó, cả hai chú rùa bò quãng đường bằng nhau!
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `
};

window.lesson66 = lesson66;

// --- HÀM HỖ TRỢ TRẮC NGHIỆM TIẾT 66 ---
window.selectB1Option = function(option) {
    document.getElementById('inp-66-bt1-1').value = option;
    
    // UI updates
    const opts = ['square', 'rect', 'circle'];
    const names = ['Hình vuông', 'Hình chữ nhật', 'Hình tròn'];
    
    opts.forEach((opt, idx) => {
        const lbl = document.getElementById('lbl-b1-' + opt);
        const dot = document.getElementById('dot-b1-' + opt);
        if (names[idx] === option) {
            lbl.className = "flex items-center gap-3 p-4 bg-blue-50 border-2 border-blue-500 rounded-2xl cursor-pointer transition-all font-black text-blue-700 shadow-sm";
            dot.className = "w-5 h-5 rounded-full border-2 border-blue-600 bg-blue-600 flex items-center justify-center text-xs";
        } else {
            lbl.className = "flex items-center gap-3 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700";
            dot.className = "w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs";
        }
    });
};

window.selectB2Option = function(option) {
    document.getElementById('inp-66-bt2-1').value = option;
    
    const isPhuOng = (option === 'Phú Ông nói đúng');
    const lblUncle = document.getElementById('lbl-b2-uncle');
    const dotUncle = document.getElementById('dot-b2-uncle');
    const lblKid = document.getElementById('lbl-b2-kid');
    const dotKid = document.getElementById('dot-b2-kid');
    
    if (isPhuOng) {
        lblUncle.className = "flex items-center gap-3 p-4 bg-blue-50 border-2 border-blue-500 rounded-2xl cursor-pointer transition-all font-black text-blue-700 shadow-sm";
        dotUncle.className = "w-5 h-5 rounded-full border-2 border-blue-600 bg-blue-600 flex items-center justify-center text-xs";
        
        lblKid.className = "flex items-center gap-3 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700";
        dotKid.className = "w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs";
    } else {
        lblKid.className = "flex items-center gap-3 p-4 bg-blue-50 border-2 border-blue-500 rounded-2xl cursor-pointer transition-all font-black text-blue-700 shadow-sm";
        dotKid.className = "w-5 h-5 rounded-full border-2 border-blue-600 bg-blue-600 flex items-center justify-center text-xs";
        
        lblUncle.className = "flex items-center gap-3 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700";
        dotUncle.className = "w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs";
    }
};

window.selectB4Option = function(option) {
    document.getElementById('inp-66-bt4-1').value = option;
    
    const keys = ['yellow', 'brown', 'equal'];
    const names = ['Rùa vàng đi dài hơn', 'Rùa nâu đi dài hơn', 'Hai chú rùa đi bằng nhau'];
    
    keys.forEach((key, idx) => {
        const lbl = document.getElementById('lbl-b4-' + key);
        const dot = document.getElementById('dot-b4-' + key);
        if (names[idx] === option) {
            lbl.className = "flex items-center gap-3 p-4 bg-blue-50 border-2 border-blue-500 rounded-2xl cursor-pointer transition-all font-black text-blue-700 shadow-sm";
            dot.className = "w-5 h-5 rounded-full border-2 border-blue-600 bg-blue-600 flex items-center justify-center text-xs";
        } else {
            lbl.className = "flex items-center gap-3 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700";
            dot.className = "w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs";
        }
    });
};

// --- HÀM KIỂM TRA ĐÁP ÁN TIẾT 66 ---
window.check_66_bt1 = function() {
    const val = document.getElementById('inp-66-bt1-1').value;
    const isCorrect = (val === 'Hình tròn');
    
    const rightAnswer = "Hình tròn tâm O (Bán kính 4 cm)";
    const studentAnswer = val || "Chưa chọn";
    const guidance = metadata.bai_tap[0].guidance;
    const solution = metadata.bai_tap[0].solution;
    
    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 1: So sánh chu vi các hình", isCorrect ? 100 : 0, 'btn-check-66-bt1', 0, 1, isCorrect ? 1 : 0);
    }
};

window.check_66_bt2 = function() {
    const val = document.getElementById('inp-66-bt2-1').value;
    const isCorrect = (val === 'Bờm nói đúng');
    
    const rightAnswer = "Bờm nói đúng (Công thức: b x 2 + 3,14 x d)";
    const studentAnswer = val || "Chưa chọn";
    const guidance = metadata.bai_tap[1].guidance;
    const solution = metadata.bai_tap[1].solution;
    
    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 2: Chiều dài sợi dây thép khung", isCorrect ? 100 : 0, 'btn-check-66-bt2', 0, 1, isCorrect ? 1 : 0);
    }
};

window.check_66_bt3 = function() {
    const val = document.getElementById('inp-66-bt3-1').value.trim().replace(',', '.');
    const isCorrect = (val === "6.568" || val === "6,568");
    
    const rightAnswer = "6.568";
    const studentAnswer = val || "?";
    const guidance = metadata.bai_tap[2].guidance;
    const solution = metadata.bai_tap[2].solution;
    
    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 3: Tính chiều dài sợi dây thừng", isCorrect ? 100 : 0, 'btn-check-66-bt3', 0, 1, isCorrect ? 1 : 0);
    }
};

window.check_66_bt4 = function() {
    const val = document.getElementById('inp-66-bt4-1').value;
    const isCorrect = (val === 'Hai chú rùa đi bằng nhau');
    
    const rightAnswer = "Hai chú rùa bò quãng đường bằng nhau";
    const studentAnswer = val || "Chưa chọn";
    const guidance = metadata.bai_tap[3].guidance;
    const solution = metadata.bai_tap[3].solution;
    
    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 4: So sánh quãng đường bò của hai chú rùa", isCorrect ? 100 : 0, 'btn-check-66-bt4', 0, 1, isCorrect ? 1 : 0);
    }
};

export default lesson66;
