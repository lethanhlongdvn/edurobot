const metadata = {
    "lessonInfo": {
        "period": "72",
        "week": "15",
        "topic": "Luyện tập chung",
        "title": "BÀI 29: LUYỆN TẬP CHUNG (TIẾT 2)",
        "desc": "Luyện tập tính diện tích hình thang trên lưới, phân chia hình học để tính diện tích mảnh đất thực tế, và tính diện tích phần còn lại của hình phẳng ghép."
    },
    "bai_tap": [
        {
            "id": "72_bt1",
            "type": "fill_multiple",
            "title": "Bài 1: Diện tích hình thang ABCD trên lưới ô vuông",
            "answers": ["137.5"],
            "guidance": "Bước 1: Tính kích thước thực tế dựa vào số ô vuông (mỗi ô vuông cạnh 2,5 cm):<br>- Đáy lớn CD = 8 ô.<br>- Đáy bé AB = 3 ô.<br>- Chiều cao = 4 ô.<br>Bước 2: Tính diện tích hình thang theo công thức: S = (đáy lớn + đáy bé) x chiều cao : 2.",
            "solution": "Độ dài đáy lớn CD là: 8 x 2,5 = 20 (cm).<br>Độ dài đáy bé AB là: 3 x 2,5 = 7,5 (cm).<br>Chiều cao hình thang là: 4 x 2,5 = 10 (cm).<br>Diện tích hình thang ABCD là:<br>(20 + 7,5) x 10 : 2 = 137,5 (cm²)."
        },
        {
            "id": "72_bt2",
            "type": "fill_multiple",
            "title": "Bài 2: Tính diện tích mảnh đất bằng phương pháp chia hình",
            "answers": ["25", "2", "1062.5", "27", "2", "742.5", "1062.5", "742.5", "1805", "1805"],
            "guidance": "Điền các thông số đo đạc từ hình vẽ vào công thức tính diện tích:<br>- Hình thang ABCD có đáy lớn AD = 55 m, đáy bé BC = 30 m, chiều cao BM = 25 m.<br>- Hình tam giác AED có đáy AD = 55 m, chiều cao EN = 27 m.<br>- Diện tích mảnh đất = Diện tích hình thang + Diện tích tam giác.",
            "solution": "- Diện tích hình thang ABCD là: (55 + 30) x 25 : 2 = 1062,5 (m²).<br>- Diện tích hình tam giác AED là: 55 x 27 : 2 = 742,5 (m²).<br>- Diện tích mảnh đất ABCDE là: 1062,5 + 742,5 = 1805 (m²).<br>Đáp số: 1805 m²."
        },
        {
            "id": "72_bt3",
            "type": "fill_multiple",
            "title": "Bài 3: Tính diện tích mảnh đất thực tế",
            "answers": ["6894"],
            "guidance": "Mảnh đất được chia làm hai phần chính:<br>1. Hình thang vuông ABGD có đáy bé AD = 64 m, đáy lớn BG = BE + EG = 26 + 64 = 90 m (với EG = AD = 64 m), chiều cao AE = 72 m.<br>2. Hình tam giác vuông BCG có đáy GC = 30 m, chiều cao BG = 90 m.<br>Tính diện tích từng phần rồi cộng lại.",
            "solution": "Độ dài đoạn thẳng EG bằng độ dài AD = 64 m (vì AEGD là hình chữ nhật).<br>Chiều cao BG của tam giác BCG là: 26 + 64 = 90 (m).<br>Diện tích hình thang vuông ABGD là:<br>(64 + 90) x 72 : 2 = 5544 (m²).<br>Diện tích hình tam giác vuông BCG là:<br>90 x 30 : 2 = 1350 (m²).<br>Diện tích của mảnh đất đó là:<br>5544 + 1350 = 6894 (m²)."
        },
        {
            "id": "72_bt4",
            "type": "fill_multiple",
            "title": "Bài 4: Tính diện tích phần màu xanh tô đậm",
            "answers": ["13.76 cm²"],
            "guidance": "Bước 1: Tính diện tích hình vuông ABCD có cạnh 8 cm.<br>Bước 2: Tính diện tích hình tròn có đường kính bằng cạnh hình vuông (d = 8 cm, bán kính r = 4 cm).<br>Bước 3: Diện tích phần màu xanh = Diện tích hình vuông - Diện tích hình tròn.",
            "solution": "Diện tích hình vuông ABCD là:<br>8 x 8 = 64 (cm²).<br>Bán kính hình tròn là:<br>8 : 2 = 4 (cm).<br>Diện tích hình tròn là:<br>3,14 x 4 x 4 = 50,24 (cm²).<br>Diện tích phần tô đậm màu xanh là:<br>64 - 50,24 = 13,76 (cm²). Chọn đáp án A."
        }
    ],
    "quizPool": [
        { "question": "Tính diện tích hình thang có đáy lớn 12 cm, đáy bé 8 cm, chiều cao 5 cm:", "options": ["50 cm²", "100 cm²", "48 cm²", "25 cm²"], "answer": 0 },
        { "question": "Hình thoi có độ dài hai đường chéo là 8 cm và 6 cm. Diện tích của nó là:", "options": ["24 cm²", "48 cm²", "14 cm²", "28 cm²"], "answer": 0 },
        { "question": "Hình bình hành có đáy 10 cm, chiều cao 7 cm. Diện tích của nó là:", "options": ["70 cm²", "35 cm²", "17 cm²", "70 cm"], "answer": 0 },
        { "question": "Một hình vuông có cạnh 10 cm chứa một hình tròn nội tiếp. Diện tích phần còn lại là:", "options": ["21.5 cm²", "78.5 cm²", "31.4 cm²", "21.5 cm"], "answer": 0 },
        { "question": "Một hình tam giác vuông có hai cạnh góc vuông là 6 cm và 8 cm. Diện tích của nó là:", "options": ["24 cm²", "48 cm²", "14 cm²", "10 cm²"], "answer": 0 },
        { "question": "Diện tích mảnh đất hình chữ nhật dài 30 m, rộng 20 m là:", "options": ["600 m²", "100 m²", "50 m²", "600 m"], "answer": 0 },
        { "question": "Công thức tính diện tích hình thang là:", "options": ["S = (a + b) x h : 2", "S = a x h : 2", "S = (a + b) x h", "S = a x b : 2"], "answer": 0 },
        { "question": "Công thức tính diện tích hình thoi là:", "options": ["S = m x n : 2", "S = m x n", "S = (m + n) x 2", "S = m x h"], "answer": 0 },
        { "question": "Diện tích hình thang tăng gấp mấy lần nếu cả hai đáy và chiều cao đều tăng gấp đôi?", "options": ["8 lần", "4 lần", "2 lần", "16 lần"], "answer": 0 },
        { "question": "Đường kính hình tròn tăng 4 lần thì diện tích tăng lên:", "options": ["16 lần", "4 lần", "8 lần", "không đổi"], "answer": 0 },
        { "question": "Diện tích hình tròn có bán kính r = 1 dm là:", "options": ["3.14 dm²", "6.28 dm²", "3.14 dm", "1.57 dm²"], "answer": 0 },
        { "question": "Một hình thang có diện tích 60 cm², chiều cao 6 cm. Tổng độ dài hai đáy là:", "options": ["20 cm", "10 cm", "30 cm", "40 cm"], "answer": 0 },
        { "question": "Cho hình vuông có chu vi 32 cm. Diện tích của hình vuông đó là:", "options": ["64 cm²", "16 cm²", "32 cm²", "64 cm"], "answer": 0 },
        { "question": "Tính diện tích hình bình hành có đáy 12 m và chiều cao bằng một nửa độ dài đáy:", "options": ["72 m²", "36 m²", "144 m²", "72 m"], "answer": 0 },
        { "question": "Một hình thoi có diện tích 50 cm², đường chéo thứ nhất dài 10 cm. Đường chéo thứ hai dài:", "options": ["10 cm", "5 cm", "20 cm", "15 cm"], "answer": 0 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson72 = {
    ...metadata.lessonInfo,
    metadata: metadata,
    quizPool: [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
                    
                    <!-- Slide 1: Khởi động Luyện tập chung -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6 max-w-4xl mx-auto">
                            <div class="bg-white p-8 rounded-3xl border border-blue-100 shadow-md space-y-6">
                                <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                                    <span class="text-2xl md:text-4xl animate-bounce-slow">📐</span>
                                    <div>
                                        <h3 class="text-xl md:text-2xl font-black text-blue-900">Kiến thức trọng tâm</h3>
                                        <p class="text-xs text-slate-500 font-semibold mt-0.5">Tóm tắt công thức cần nhớ trước khi làm bài tập</p>
                                    </div>
                                </div>
                                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4 font-bold text-slate-700 text-xl md:text-3xl leading-relaxed">
                                    <p>📐 <strong>Diện tích hình thang:</strong> S = (đáy lớn + đáy bé) × chiều cao : 2</p>
                                    <p>💎 <strong>Diện tích hình thoi:</strong> S = (đường chéo thứ nhất × đường chéo thứ hai) : 2</p>
                                    <p>🌀 <strong>Diện tích hình bình hành:</strong> S = đáy × chiều cao</p>
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
                    
                    <!-- Bài 1: Tính diện tích hình thang ABCD trên lưới -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">1</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Diện tích hình thang ABCD trên lưới (ô vuông cạnh 2,5 cm)</h3>
                                </div>
                            </div>

                            <div class="space-y-6 max-w-3xl mx-auto">
                                <div class="flex justify-center bg-white p-4 rounded-3xl border border-slate-150 shadow-sm">
                                    <img src="./assets/images/toan/toan_tap_1/72/1.png" alt="Các hình phẳng trên lưới" class="max-h-48 object-contain rounded-2xl">
                                </div>

                                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 font-bold text-slate-700">
                                    <p class="text-sm md:text-base leading-relaxed">
                                        Tính diện tích hình thang ABCD ở hình trên, biết rằng mỗi ô vuông có cạnh 2,5 cm.
                                    </p>
                                    <div class="flex items-center gap-2">
                                        <input type="text" id="inp-72-bt1-1" class="w-36 text-center p-3 text-xl font-black border-2 border-slate-350 rounded-2xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 48px !important;" placeholder="">
                                        <span class="text-lg font-black text-slate-600">cm²</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-72-bt1')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-72-bt1" onclick="window.check_72_bt1()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-72-bt1" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 1:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    Đáy lớn CD = 8 ô = 8 × 2,5 = 20 (cm).<br>
                                    Đáy bé AB = 3 ô = 3 × 2,5 = 7,5 (cm).<br>
                                    Chiều cao = 4 ô = 4 × 2,5 = 10 (cm).<br>
                                    Diện tích hình thang ABCD là:<br>
                                    (20 + 7,5) × 10 : 2 = 137,5 (cm²).
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 2: Số? Hộp điền giải chi tiết -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">2</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 2. Điền số vào bài giải mẫu</h3>
                                </div>
                            </div>

                            <div class="space-y-6 max-w-3xl mx-auto">
                                <!-- Đối thoại và hình vẽ -->
                                <div class="flex justify-center bg-white p-4 rounded-3xl border border-slate-200 shadow-sm">
                                    <img src="./assets/images/toan/toan_tap_1/72/2.png" alt="Phân chia mảnh đất" class="max-h-60 object-contain rounded-2xl">
                                </div>

                                <!-- Bảng điền bài giải -->
                                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6 font-bold text-slate-700 text-sm md:text-base leading-relaxed">
                                    <div class="flex items-center gap-2 border-b pb-3 border-slate-100">
                                        <span class="text-2xl">📝</span>
                                        <h4 class="text-lg font-black text-slate-800">Bài giải chi tiết:</h4>
                                    </div>

                                    <div class="space-y-5">
                                        <!-- Hàng 1 -->
                                        <div class="flex flex-wrap items-center gap-2">
                                            <span>Diện tích hình thang ABCD là:</span>
                                            <div class="inline-flex flex-col items-center mx-1">
                                                <div class="flex items-center gap-1 border-b-2 border-slate-700 pb-1">
                                                    <span>(55 + 30) ×</span>
                                                    <input type="text" id="inp-72-bt2-1" class="w-10 h-8 text-center text-sm font-black border border-slate-350 rounded" style="padding: 0px !important; font-size: 1rem !important; line-height: 30px !important;" placeholder="">
                                                </div>
                                                <div class="pt-1">
                                                    <input type="text" id="inp-72-bt2-2" class="w-10 h-8 text-center text-sm font-black border border-slate-350 rounded" style="padding: 0px !important; font-size: 1rem !important; line-height: 30px !important;" placeholder="">
                                                </div>
                                            </div>
                                            <span>=</span>
                                            <input type="text" id="inp-72-bt2-3" class="w-24 text-center p-1 border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.15rem !important; line-height: 34px !important;" placeholder="">
                                            <span>m²</span>
                                        </div>

                                        <!-- Hàng 2 -->
                                        <div class="flex flex-wrap items-center gap-2">
                                            <span>Diện tích hình tam giác AED là:</span>
                                            <div class="inline-flex flex-col items-center mx-1">
                                                <div class="flex items-center gap-1 border-b-2 border-slate-700 pb-1">
                                                    <span>55 ×</span>
                                                    <input type="text" id="inp-72-bt2-4" class="w-10 h-8 text-center text-sm font-black border border-slate-350 rounded" style="padding: 0px !important; font-size: 1rem !important; line-height: 30px !important;" placeholder="">
                                                </div>
                                                <div class="pt-1">
                                                    <input type="text" id="inp-72-bt2-5" class="w-10 h-8 text-center text-sm font-black border border-slate-350 rounded" style="padding: 0px !important; font-size: 1rem !important; line-height: 30px !important;" placeholder="">
                                                </div>
                                            </div>
                                            <span>=</span>
                                            <input type="text" id="inp-72-bt2-6" class="w-24 text-center p-1 border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.15rem !important; line-height: 34px !important;" placeholder="">
                                            <span>m²</span>
                                        </div>

                                        <!-- Hàng 3 -->
                                        <div class="flex flex-wrap items-center gap-2">
                                            <span>Diện tích mảnh đất ABCDE là:</span>
                                            <input type="text" id="inp-72-bt2-7" class="w-24 text-center p-1 border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.15rem !important; line-height: 34px !important;" placeholder="">
                                            <span>+</span>
                                            <input type="text" id="inp-72-bt2-8" class="w-24 text-center p-1 border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.15rem !important; line-height: 34px !important;" placeholder="">
                                            <span>=</span>
                                            <input type="text" id="inp-72-bt2-9" class="w-24 text-center p-1 border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.15rem !important; line-height: 34px !important;" placeholder="">
                                            <span>m²</span>
                                        </div>

                                        <!-- Hàng 4 -->
                                        <div class="flex items-center gap-2">
                                            <span>Đáp số:</span>
                                            <input type="text" id="inp-72-bt2-10" class="w-24 text-center p-1 border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.15rem !important; line-height: 34px !important;" placeholder="">
                                            <span>m²</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-72-bt2')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-72-bt2" onclick="window.check_72_bt2()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-72-bt2" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 2:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    - Diện tích hình thang ABCD là: (55 + 30) × 25 : 2 = 1062,5 (m²).<br>
                                    - Diện tích hình tam giác AED là: 55 × 27 : 2 = 742,5 (m²).<br>
                                    - Diện tích mảnh đất ABCDE là: 1062,5 + 742,5 = 1805 (m²).<br>
                                    Đáp số: 1805 m².
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 3: Tính diện tích mảnh đất thực tế (1 cột) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">3</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 3. Diện tích mảnh đất đa giác</h3>
                                </div>
                            </div>

                            <div class="space-y-6 max-w-3xl mx-auto">
                                <div class="flex justify-center bg-white p-4 rounded-3xl border border-slate-150 shadow-sm">
                                    <img src="./assets/images/toan/toan_tap_1/72/3.png" alt="Sơ đồ mảnh đất đa giác" class="max-h-56 object-contain rounded-2xl">
                                </div>

                                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 font-bold text-slate-700">
                                    <p class="text-sm md:text-base leading-relaxed">
                                        Tính diện tích mảnh đất có hình dạng như trên, biết:<br>
                                        AD = 64 m; AE = 72 m; BE = 26 m; GC = 30 m.
                                    </p>
                                    <div class="flex items-center gap-2">
                                        <input type="text" id="inp-72-bt3-1" class="w-36 text-center p-3 text-xl font-black border-2 border-slate-350 rounded-2xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 48px !important;" placeholder="">
                                        <span class="text-lg font-black text-slate-600">m²</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-72-bt3')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-72-bt3" onclick="window.check_72_bt3()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-72-bt3" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 3:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    EG = AD = 64 (m). Chiều cao BG = BE + EG = 26 + 64 = 90 (m).<br>
                                    Diện tích hình thang vuông ABGD là:<br>
                                    (64 + 90) × 72 : 2 = 5544 (m²).<br>
                                    Diện tích hình tam giác vuông BCG là:<br>
                                    90 × 30 : 2 = 1350 (m²).<br>
                                    Diện tích mảnh đất đó là:<br>
                                    5544 + 1350 = 6894 (m²).
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 4: Chọn câu trả lời đúng (1 cột) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">4</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 4. Diện tích phần màu xanh tô đậm</h3>
                                </div>
                            </div>

                            <div class="space-y-6 max-w-3xl mx-auto">
                                <div class="flex justify-center bg-white p-4 rounded-3xl border border-slate-150 shadow-sm">
                                    <img src="./assets/images/toan/toan_tap_1/72/4.png" alt="Phần tô đậm màu xanh" class="max-h-56 object-contain rounded-2xl">
                                </div>

                                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6 font-bold text-slate-700 text-sm md:text-base leading-relaxed">
                                    <p>Cho hình vuông ABCD có cạnh dài 8 cm và một hình tròn nằm khít bên trong như hình trên. Tính diện tích phần tô màu xanh.</p>
                                    
                                    <div class="flex flex-col gap-3 max-w-xs mx-auto">
                                        <label onclick="window.selectB4Option72('13,76 cm²')" id="lbl-b4-1" class="flex items-center gap-3 p-3 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700">
                                            <span class="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs" id="dot-b4-1"></span>
                                            A. 13,76 cm²
                                        </label>
                                        <label onclick="window.selectB4Option72('114,24 cm²')" id="lbl-b4-2" class="flex items-center gap-3 p-3 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700">
                                            <span class="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs" id="dot-b4-2"></span>
                                            B. 114,24 cm²
                                        </label>
                                        <label onclick="window.selectB4Option72('50,214 cm²')" id="lbl-b4-3" class="flex items-center gap-3 p-3 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all font-black text-slate-700">
                                            <span class="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-xs" id="dot-b4-3"></span>
                                            C. 50,214 cm²
                                        </label>
                                    </div>
                                    <input type="hidden" id="inp-72-bt4-1" value="">
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-72-bt4')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-72-bt4" onclick="window.check_72_bt4()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-72-bt4" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 4:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    Diện tích hình vuông là: 8 × 8 = 64 (cm²).<br>
                                    Bán kính hình tròn là: 8 : 2 = 4 (cm).<br>
                                    Diện tích hình tròn là: 3,14 × 4 × 4 = 50,24 (cm²).<br>
                                    Diện tích phần màu xanh là: 64 - 50,24 = 13,76 (cm²). Chọn A.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `
};

window.lesson72 = lesson72;

// --- HÀM TRẮC NGHIỆM TIẾT 72 ---
window.selectB4Option72 = function(option) {
    document.getElementById('inp-72-bt4-1').value = option;
    const opts = ['1', '2', '3'];
    const names = ['13,76 cm²', '114,24 cm²', '50,214 cm²'];
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

// --- HÀM KIỂM TRA ĐÁP ÁN TIẾT 72 ---
window.check_72_bt1 = function() {
    const val = document.getElementById('inp-72-bt1-1').value.trim().replace(/\s+/g, '').replace(',', '.');
    const isCorrect = (val === '137.5');

    const rightAnswer = "137.5";
    const studentAnswer = val || '?';
    const guidance = metadata.bai_tap[0].guidance;
    const solution = metadata.bai_tap[0].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 1: Diện tích hình thang ABCD trên lưới ô vuông", isCorrect ? 100 : 0, 'btn-check-72-bt1', 0, 1, isCorrect ? 1 : 0);
    }
};

window.check_72_bt2 = function() {
    const val1 = document.getElementById('inp-72-bt2-1').value.trim();
    const val2 = document.getElementById('inp-72-bt2-2').value.trim();
    const val3 = document.getElementById('inp-72-bt2-3').value.trim().replace(/\s+/g, '').replace(',', '.');
    const val4 = document.getElementById('inp-72-bt2-4').value.trim();
    const val5 = document.getElementById('inp-72-bt2-5').value.trim();
    const val6 = document.getElementById('inp-72-bt2-6').value.trim().replace(/\s+/g, '').replace(',', '.');
    const val7 = document.getElementById('inp-72-bt2-7').value.trim().replace(/\s+/g, '').replace(',', '.');
    const val8 = document.getElementById('inp-72-bt2-8').value.trim().replace(/\s+/g, '').replace(',', '.');
    const val9 = document.getElementById('inp-72-bt2-9').value.trim().replace(/\s+/g, '').replace(',', '.');
    const val10 = document.getElementById('inp-72-bt2-10').value.trim().replace(/\s+/g, '').replace(',', '.');

    const isCorrect1 = (val1 === '25');
    const isCorrect2 = (val2 === '2');
    const isCorrect3 = (val3 === '1062.5');
    const isCorrect4 = (val4 === '27');
    const isCorrect5 = (val5 === '2');
    const isCorrect6 = (val6 === '742.5');
    const isCorrect7 = (val7 === '1062.5');
    const isCorrect8 = (val8 === '742.5');
    const isCorrect9 = (val9 === '1805');
    const isCorrect10 = (val10 === '1805');

    const totalScore = (isCorrect1?10:0) + (isCorrect2?10:0) + (isCorrect3?10:0) + (isCorrect4?10:0) + (isCorrect5?10:0) + (isCorrect6?10:0) + (isCorrect7?10:0) + (isCorrect8?10:0) + (isCorrect9?10:0) + (isCorrect10?10:0);
    const isCorrect = (totalScore === 100);

    const rightAnswer = "Bài giải mẫu được điền số hoàn chỉnh.";
    const studentAnswer = "Bạn đã hoàn thành điền các ô trống.";
    const guidance = metadata.bai_tap[1].guidance;
    const solution = metadata.bai_tap[1].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        let correctCount = 0;
        if (isCorrect1) correctCount++;
        if (isCorrect2) correctCount++;
        if (isCorrect3) correctCount++;
        if (isCorrect4) correctCount++;
        if (isCorrect5) correctCount++;
        if (isCorrect6) correctCount++;
        if (isCorrect7) correctCount++;
        if (isCorrect8) correctCount++;
        if (isCorrect9) correctCount++;
        if (isCorrect10) correctCount++;
        window.submitMathLesson("Bài 2: Tính diện tích mảnh đất bằng phương pháp chia hình", isCorrect ? 100 : 0, 'btn-check-72-bt2', 0, 10, correctCount);
    }
};

window.check_72_bt3 = function() {
    const val = document.getElementById('inp-72-bt3-1').value.trim().replace(/\s+/g, '').replace(',', '.');
    const isCorrect = (val === '6894');

    const rightAnswer = "6894";
    const studentAnswer = val || '?';
    const guidance = metadata.bai_tap[2].guidance;
    const solution = metadata.bai_tap[2].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 3: Tính diện tích mảnh đất thực tế", isCorrect ? 100 : 0, 'btn-check-72-bt3', 0, 1, isCorrect ? 1 : 0);
    }
};

window.check_72_bt4 = function() {
    const val = document.getElementById('inp-72-bt4-1').value;
    const isCorrect = (val === '13,76 cm²');

    const rightAnswer = "A. 13,76 cm²";
    const studentAnswer = val || 'Chưa chọn';
    const guidance = metadata.bai_tap[3].guidance;
    const solution = metadata.bai_tap[3].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 4: Tính diện tích phần màu xanh tô đậm", isCorrect ? 100 : 0, 'btn-check-72-bt4', 0, 1, isCorrect ? 1 : 0);
    }
};

export default lesson72;
