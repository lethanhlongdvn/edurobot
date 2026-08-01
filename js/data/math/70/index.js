const metadata = {
    "lessonInfo": {
        "period": "70",
        "week": "14",
        "topic": "Thực hành trải nghiệm",
        "title": "BÀI 28: THỰC HÀNH VÀ TRẢI NGHIỆM. ĐO, VẼ, LẮP GHÉP, TẠO HÌNH (TIẾT 2)",
        "desc": "Thực hành gấp, ghép hình học phẳng bằng bộ xếp hình 7 mảnh (Tangram) và gấp thuyền buồm từ giấy hình chữ nhật."
    },
    "bai_tap": [
        {
            "id": "70_bt1",
            "type": "fill_multiple",
            "title": "Bài 1: Nhận diện các khối hình 3D",
            "answers": ["Khối lập phương và hình chóp"],
            "guidance": "Quan sát đặc điểm các hình khối được vẽ trên lưới ở bài tập 1 để nhận tên gọi tương ứng.",
            "solution": "Các hình vẽ biểu diễn hai khối lập phương (ở trên) và một hình chóp tứ giác (ở dưới)."
        },
        {
            "id": "70_bt2",
            "type": "fill_multiple",
            "title": "Bài 2: Đặc điểm bộ xếp hình Tangram",
            "answers": ["7", "5"],
            "guidance": "Đếm tổng số miếng ghép và số lượng miếng hình tam giác trong bộ xếp hình Tangram mẫu ở hình 2.",
            "solution": "- Bộ xếp hình Tangram gồm có 7 miếng ghép.<br>- Trong đó gồm có 5 miếng ghép hình tam giác."
        },
        {
            "id": "70_bt3",
            "type": "fill_multiple",
            "title": "Bài 3: Gấp thuyền buồm",
            "answers": ["Hình chữ nhật"],
            "guidance": "Đọc kỹ yêu cầu chuẩn bị giấy gấp ở Bước 1 trong sơ đồ gấp thuyền buồm.",
            "solution": "Để bắt đầu gấp thuyền buồm ở Bước 1, chúng ta cần chuẩn bị một tờ giấy hình chữ nhật."
        }
    ],
    "quizPool": [
        { "question": "Khối lập phương có bao nhiêu mặt?", "options": ["6 mặt", "8 mặt", "12 mặt", "4 mặt"], "answer": 0 },
        { "question": "Khối lập phương có bao nhiêu đỉnh?", "options": ["8 đỉnh", "6 đỉnh", "12 đỉnh", "10 đỉnh"], "answer": 0 },
        { "question": "Khối lập phương có bao nhiêu cạnh?", "options": ["12 cạnh", "8 cạnh", "6 cạnh", "16 cạnh"], "answer": 0 },
        { "question": "Các mặt của khối lập phương đều là hình gì?", "options": ["Hình vuông", "Hình chữ nhật", "Hình thoi", "Hình tam giác"], "answer": 0 },
        { "question": "Khối hộp chữ nhật có bao nhiêu mặt?", "options": ["6 mặt", "8 mặt", "12 mặt", "10 mặt"], "answer": 0 },
        { "question": "Khối hộp chữ nhật có bao nhiêu đỉnh?", "options": ["8 đỉnh", "6 đỉnh", "12 đỉnh", "4 đỉnh"], "answer": 0 },
        { "question": "Hình chóp tứ giác đều có bao nhiêu mặt?", "options": ["5 mặt", "4 mặt", "6 mặt", "8 mặt"], "answer": 0 },
        { "question": "Hình chóp tam giác đều có bao nhiêu mặt?", "options": ["4 mặt", "3 mặt", "5 mặt", "6 mặt"], "answer": 0 },
        { "question": "Bộ xếp hình 7 mảnh (Tangram) gồm có bao nhiêu mảnh hình vuông?", "options": ["1 mảnh", "2 mảnh", "3 mảnh", "không có mảnh nào"], "answer": 0 },
        { "question": "Bộ xếp hình 7 mảnh (Tangram) gồm có bao nhiêu mảnh hình bình hành?", "options": ["1 mảnh", "2 mảnh", "không có mảnh nào", "3 mảnh"], "answer": 0 },
        { "question": "Khi gấp đôi một hình vuông theo đường chéo, ta được hai hình gì?", "options": ["Hình tam giác vuông cân", "Hình tam giác đều", "Hình chữ nhật", "Hình thang"], "answer": 0 },
        { "question": "Hình chóp tứ giác đều có mặt đáy là hình gì?", "options": ["Hình vuông", "Hình tam giác", "Hình tròn", "Hình chữ nhật"], "answer": 0 },
        { "question": "Nếu gấp một tờ giấy hình chữ nhật làm đôi rồi cắt chéo góc ta mở ra được hình gì?", "options": ["Hình tam giác cân", "Hình tròn", "Hình vuông", "Hình thoi"], "answer": 0 },
        { "question": "Khối hộp chữ nhật có mấy cặp mặt đối diện bằng nhau?", "options": ["3 cặp", "2 cặp", "4 cặp", "6 cặp"], "answer": 0 },
        { "question": "Trong bộ xếp hình Tangram, các hình tam giác có đặc điểm gì?", "options": ["Đều là tam giác vuông cân", "Đều là tam giác đều", "Đều là tam giác nhọn", "Đều là tam giác tù"], "answer": 0 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson70 = {
    ...metadata.lessonInfo,
    metadata: metadata,
    quizPool: [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
                    
                    <!-- Slide 1: Khám phá lý thuyết Tạo hình yêu thích -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="space-y-6 max-w-4xl mx-auto">
                                <div class="bg-white p-6 rounded-3xl border border-blue-100 shadow-md space-y-4">
                                    <div class="border-l-4 border-blue-600 pl-4 py-1">
                                        <h3 class="text-lg md:text-xl font-black text-blue-900">Hoạt động tiếp theo</h3>
                                    </div>
                                    <p class="font-bold text-slate-700 text-sm md:text-base leading-relaxed">
                                        Trong tiết học này, chúng ta sẽ thực hành tạo hình các khối 3D trên lưới ô vuông, giải câu đố xếp hình từ 7 mảnh Tangram và gấp thuyền buồm theo các bước cụ thể.
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
                    
                    <!-- Bài 1: Cắt dán hình khối 3D -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">1</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Tạo các khối hình (Bài 1)</h3>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                                    <p class="text-sm md:text-base font-bold text-slate-600 leading-relaxed">
                                        Quan sát các hình được vẽ trên lưới ô vuông và chọn tên gọi các hình khối biểu diễn tương ứng:
                                    </p>
                                    
                                    <div class="flex flex-col gap-3 max-w-md mx-auto">
                                        <label onclick="window.selectB1Option70('Khối lập phương và hình chóp')" id="lbl-b1-1" class="flex items-center gap-3 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700">
                                            <span class="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs" id="dot-b1-1"></span>
                                            Khối lập phương và hình chóp tứ giác
                                        </label>
                                        <label onclick="window.selectB1Option70('Khối trụ và khối cầu')" id="lbl-b1-2" class="flex items-center gap-3 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700">
                                            <span class="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs" id="dot-b1-2"></span>
                                            Khối trụ và khối cầu tròn
                                        </label>
                                        <label onclick="window.selectB1Option70('Khối hộp chữ nhật')" id="lbl-b1-3" class="flex items-center gap-3 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700">
                                            <span class="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs" id="dot-b1-3"></span>
                                            Khối hộp chữ nhật
                                        </label>
                                    </div>
                                    <input type="hidden" id="inp-70-bt1-1" value="">
                                </div>

                                <div class="flex flex-col items-center">
                                    <img src="./assets/images/toan/toan_tap_1/70/1.png" alt="Mẫu vẽ khối 3D" class="max-h-56 object-contain rounded-2xl border border-slate-150 p-2">
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-70-bt1')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-70-bt1" onclick="window.check_70_bt1()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-70-bt1" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 1:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    Các hình vẽ trên lưới biểu diễn:<br>
                                    - Hai khối ở trên là khối lập phương.<br>
                                    - Khối ở dưới là hình chóp tứ giác.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 2: Bộ xếp hình Tangram -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">2</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 2. Trò chơi xếp hình Tangram (Bài 2)</h3>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                                    <p class="text-sm md:text-base font-bold text-slate-600 leading-relaxed">
                                        Quan sát bộ trò chơi xếp hình mẫu bên phải và trả lời:
                                    </p>
                                    
                                    <div class="space-y-4 font-bold text-slate-700">
                                        <div class="space-y-2">
                                            <p>1. Bộ trò chơi xếp hình gồm bao nhiêu miếng ghép?</p>
                                            <div class="flex items-center gap-2">
                                                <input type="text" id="inp-70-bt2-1" class="w-24 text-center p-2 text-lg font-black border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span class="text-slate-500 text-sm">miếng ghép</span>
                                            </div>
                                        </div>

                                        <div class="space-y-2">
                                            <p>2. Trong đó, có bao nhiêu miếng ghép hình tam giác?</p>
                                            <div class="flex items-center gap-2">
                                                <input type="text" id="inp-70-bt2-2" class="w-24 text-center p-2 text-lg font-black border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                <span class="text-slate-500 text-sm">hình tam giác</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col items-center gap-3">
                                    <img src="./assets/images/toan/toan_tap_1/70/2.png" alt="Tangram 7 miếng" class="max-h-40 object-contain rounded-2xl shadow-sm border border-slate-100 p-1">
                                    <img src="./assets/images/toan/toan_tap_1/70/2de.png" alt="Các hình xếp mẫu" class="max-h-36 object-contain rounded-2xl">
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-70-bt2')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-70-bt2" onclick="window.check_70_bt2()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-70-bt2" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 2:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    - Bộ xếp hình Tangram gồm có 7 miếng ghép.<br>
                                    - Trong đó có 5 miếng hình tam giác (2 hình lớn, 1 hình trung, 2 hình nhỏ). 2 miếng còn lại là 1 hình vuông và 1 hình bình hành.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 3: Hướng dẫn gấp thuyền buồm -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">3</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 3. Gấp thuyền buồm (Bài 3)</h3>
                                </div>
                            </div>

                            <div class="space-y-6 max-w-3xl mx-auto">
                                <div class="flex justify-center bg-white p-4 rounded-3xl border border-slate-150 shadow-sm">
                                    <img src="./assets/images/toan/toan_tap_1/70/3.png" alt="Các bước gấp thuyền buồm" class="max-h-[480px] md:max-h-[540px] object-contain rounded-2xl">
                                </div>

                                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                                    <div class="space-y-3 font-semibold text-slate-750 text-sm md:text-base leading-relaxed">
                                        <p><strong>Câu hỏi:</strong></p>
                                        <p>Ở Bước 1, chúng ta cần chuẩn bị một tờ giấy hình gì để bắt đầu gấp thuyền buồm?</p>
                                    </div>
                                    
                                    <div class="flex flex-col gap-3 max-w-xs mx-auto">
                                        <label onclick="window.selectB3Option70('Hình vuông')" id="lbl-b3-1" class="flex items-center gap-3 p-3 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700 text-sm">
                                            <span class="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs" id="dot-b3-1"></span>
                                            Hình vuông
                                        </label>
                                        <label onclick="window.selectB3Option70('Hình chữ nhật')" id="lbl-b3-2" class="flex items-center gap-3 p-3 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700 text-sm">
                                            <span class="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs" id="dot-b3-2"></span>
                                            Hình chữ nhật
                                        </label>
                                        <label onclick="window.selectB3Option70('Hình tròn')" id="lbl-b3-3" class="flex items-center gap-3 p-3 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700 text-sm">
                                            <span class="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs" id="dot-b3-3"></span>
                                            Hình tròn
                                        </label>
                                    </div>
                                    <input type="hidden" id="inp-70-bt3-1" value="">
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-70-bt3')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-70-bt3" onclick="window.check_70_bt3()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-70-bt3" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 3:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    Dựa vào hướng dẫn gấp ở Bước 1:<br>
                                    "Chuẩn bị một tờ giấy hình chữ nhật. Gấp tờ giấy làm đôi."<br>
                                    Vậy ta chọn đáp án: Hình chữ nhật.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `
};

window.lesson70 = lesson70;

// --- HÀM TRẮC NGHIỆM BÀI 1 TIẾT 70 ---
window.selectB1Option70 = function(option) {
    document.getElementById('inp-70-bt1-1').value = option;
    
    const opts = ['1', '2', '3'];
    const names = ['Khối lập phương và hình chóp', 'Khối trụ và khối cầu', 'Khối hộp chữ nhật'];
    
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

// --- HÀM TRẮC NGHIỆM BÀI 3 TIẾT 70 ---
window.selectB3Option70 = function(option) {
    document.getElementById('inp-70-bt3-1').value = option;
    
    const opts = ['1', '2', '3'];
    const names = ['Hình vuông', 'Hình chữ nhật', 'Hình tròn'];
    
    opts.forEach((opt, idx) => {
        const lbl = document.getElementById('lbl-b3-' + opt);
        const dot = document.getElementById('dot-b3-' + opt);
        if (names[idx] === option) {
            lbl.className = "flex items-center gap-3 p-3 bg-blue-50 border-2 border-blue-500 rounded-2xl cursor-pointer transition-all font-black text-blue-700 shadow-sm text-sm";
            dot.className = "w-5 h-5 rounded-full border-2 border-blue-600 bg-blue-600 flex items-center justify-center text-xs";
        } else {
            lbl.className = "flex items-center gap-3 p-3 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700 text-sm";
            dot.className = "w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs";
        }
    });
};

// --- HÀM KIỂM TRA ĐÁP ÁN TIẾT 70 ---
window.check_70_bt1 = function() {
    const val = document.getElementById('inp-70-bt1-1').value;
    const isCorrect = (val === 'Khối lập phương và hình chóp');

    const rightAnswer = "Khối lập phương và hình chóp tứ giác";
    const studentAnswer = val || 'Chưa chọn';
    const guidance = metadata.bai_tap[0].guidance;
    const solution = metadata.bai_tap[0].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 1: Nhận diện các khối hình 3D", isCorrect ? 100 : 0, 'btn-check-70-bt1', 0, 1, isCorrect ? 1 : 0);
    }
};

window.check_70_bt2 = function() {
    const val1 = document.getElementById('inp-70-bt2-1').value.trim();
    const val2 = document.getElementById('inp-70-bt2-2').value.trim();

    const isCorrect1 = (val1 === '7');
    const isCorrect2 = (val2 === '5');
    const isCorrect = isCorrect1 && isCorrect2;

    const rightAnswer = "1) 7 miếng ghép; 2) 5 hình tam giác";
    const studentAnswer = `1) ${val1 || '?'} miếng; 2) ${val2 || '?'} tam giác`;
    const guidance = metadata.bai_tap[1].guidance;
    const solution = metadata.bai_tap[1].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 2: Đặc điểm bộ xếp hình Tangram", isCorrect ? 100 : 0, 'btn-check-70-bt2', 0, 2, (isCorrect1?1:0) + (isCorrect2?1:0));
    }
};

window.check_70_bt3 = function() {
    const val = document.getElementById('inp-70-bt3-1').value;
    const isCorrect = (val === 'Hình chữ nhật');

    const rightAnswer = "Hình chữ nhật";
    const studentAnswer = val || 'Chưa chọn';
    const guidance = metadata.bai_tap[2].guidance;
    const solution = metadata.bai_tap[2].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 3: Gấp thuyền buồm", isCorrect ? 100 : 0, 'btn-check-70-bt3', 0, 1, isCorrect ? 1 : 0);
    }
};

export default lesson70;
