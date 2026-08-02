const metadata = {
    "lessonInfo": {
        "period": "63",
        "week": "13",
        "topic": "Hình học",
        "title": "BÀI 26: HÌNH THANG (TIẾT 4 - LUYỆN TẬP)",
        "desc": "Thực hành tính diện tích hình thang và ứng dụng vào các bài toán thực tế thú vị."
    },
    "bai_tap": [
        {
            "id": "63_bt1",
            "type": "fill_multiple",
            "title": "Bài 1: Tính diện tích hình thang có độ dài hai đáy lần lượt là a và b; chiều cao là h.",
            "answers": ["60", "100", "20", "175"],
            "guidance": "Áp dụng công thức tính diện tích hình thang: S = (a + b) x h : 2. Chú ý tính toán cẩn thận từng hàng trong bảng.",
            "solution": "Diện tích hình thang ở các trường hợp là:<br>- Hàng 1: (12 + 8) x 6 : 2 = 60 (cm²)<br>- Hàng 2: (14 + 6) x 10 : 2 = 100 (dm²)<br>- Hàng 3: (6 + 4) x 4 : 2 = 20 (m²)<br>- Hàng 4: (20 + 15) x 10 : 2 = 175 (cm²)"
        },
        {
            "id": "63_bt2",
            "type": "choice",
            "title": "Bài 2: Chọn câu trả lời đúng.",
            "answers": ["C"],
            "guidance": "Đổi chiều cao 1 dm = 10 cm. Sau đó tính diện tích hình thang: S = (25 + 15) x 10 : 2 = 200 cm². Hãy đổi 200 cm² sang đơn vị thích hợp để chọn đáp án đúng.",
            "solution": "Đổi chiều cao: 1 dm = 10 cm.<br>Diện tích hình thang là:<br>(25 + 15) x 10 : 2 = 200 (cm²).<br>Đổi đơn vị: 200 cm² = 2 dm².<br>Vậy đáp án đúng là C."
        },
        {
            "id": "63_bt3",
            "type": "fill_multiple",
            "title": "Bài 3: Tính diện tích con thuyền.",
            "answers": ["6", "6", "24", "36"],
            "guidance": "Cánh buồm màu cam và màu đỏ là các hình tam giác có đáy 3 cm và chiều cao 4 cm. Thân thuyền là hình thang có đáy lớn 11 cm, đáy bé 5 cm và chiều cao 3 cm. Tính diện tích từng phần rồi cộng lại.",
            "solution": "Diện tích cánh buồm màu cam là:<br>3 x 4 : 2 = 6 (cm²).<br>Diện tích cánh buồm màu đỏ là:<br>3 x 4 : 2 = 6 (cm²).<br>Diện tích thân con thuyền là:<br>(11 + 5) x 3 : 2 = 24 (cm²).<br>Diện tích con thuyền là:<br>6 + 6 + 24 = 36 (cm²).<br>Đáp số: 36 cm²."
        },
        {
            "id": "63_bt4",
            "type": "fill_multiple",
            "title": "Bài 4: Tính số tiền mua cỏ phủ kín mảnh đất hình thang.",
            "answers": ["500", "22500000"],
            "guidance": "Bước 1: Tính diện tích mảnh đất hình thang có đáy lớn 35 m, đáy bé 15 m và chiều cao 20 m. Bước 2: Nhân diện tích đó với giá tiền 1 m² cỏ (45 000 đồng) để tìm tổng số tiền.",
            "solution": "Diện tích của mảnh đất hình thang là:<br>(35 + 15) x 20 : 2 = 500 (m²).<br>Số tiền mua cỏ để phủ kín mảnh đất là:<br>500 x 45 000 = 22 500 000 (đồng).<br>Đáp số: 22 500 000 đồng."
        }
    ],
    "quizPool": [
        { "question": "Tính diện tích hình thang có đáy lớn 12 cm, đáy bé 8 cm và chiều cao 6 cm.", "options": ["60 cm²", "120 cm²", "48 cm²", "30 cm²"], "answer": 0 },
        { "question": "Tính diện tích hình thang có đáy lớn 14 dm, đáy bé 6 dm và chiều cao 10 dm.", "options": ["200 dm²", "100 dm²", "80 dm²", "140 dm²"], "answer": 1 },
        { "question": "Tính diện tích hình thang có đáy lớn 6 m, đáy bé 4 m và chiều cao 4 m.", "options": ["40 m²", "10 m²", "20 m²", "16 m²"], "answer": 2 },
        { "question": "Tính diện tích hình thang có đáy lớn 20 cm, đáy bé 15 cm và chiều cao 10 cm.", "options": ["175 cm²", "350 cm²", "150 cm²", "200 cm²"], "answer": 0 },
        { "question": "Một hình thang có diện tích 200 cm², đáy lớn 25 cm, đáy bé 15 cm. Chiều cao của hình thang đó là bao nhiêu?", "options": ["5 cm", "10 cm", "20 cm", "15 cm"], "answer": 1 },
        { "question": "Đổi 200 cm² sang đơn vị dm² ta được:", "options": ["20 dm²", "2 dm²", "0.2 dm²", "2000 dm²"], "answer": 1 },
        { "question": "Diện tích hình tam giác vuông có hai cạnh góc vuông là 3 cm và 4 cm là:", "options": ["12 cm²", "6 cm²", "7 cm²", "24 cm²"], "answer": 1 },
        { "question": "Một hình thang có đáy lớn 11 cm, đáy bé 5 cm, chiều cao 3 cm. Diện tích của hình thang này là:", "options": ["24 cm²", "48 cm²", "16 cm²", "33 cm²"], "answer": 0 },
        { "question": "Một mảnh đất hình thang có diện tích 500 m². Giá trồng cỏ là 45 000 đồng/m². Số tiền trồng cỏ cả mảnh đất là:", "options": ["2 250 000 đồng", "22 500 000 đồng", "9 000 000 đồng", "45 000 000 đồng"], "answer": 1 },
        { "question": "Công thức tính diện tích hình thang là:", "options": ["S = (a + b) x h : 2", "S = (a + b) x h", "S = a x h : 2", "S = a x b x h"], "answer": 0 },
        { "question": "Một hình thang có độ dài hai đáy lần lượt là 5 dm và 7 dm, chiều cao là 4 dm. Diện tích của hình thang đó là:", "options": ["48 dm²", "24 dm²", "12 dm²", "35 dm²"], "answer": 1 },
        { "question": "Nếu gấp độ dài cả hai đáy và chiều cao của hình thang lên 2 lần thì diện tích hình thang tăng mấy lần?", "options": ["2 lần", "4 lần", "8 lần", "6 lần"], "answer": 2 },
        { "question": "Hình thang có đáy lớn 30 cm, đáy bé bằng 2/3 đáy lớn, chiều cao 15 cm. Diện tích hình thang đó là:", "options": ["375 cm²", "750 cm²", "450 cm²", "300 cm²"], "answer": 0 },
        { "question": "Một hình thang có đáy lớn 18 m, đáy bé 12 m, chiều cao bằng trung bình cộng hai đáy. Diện tích hình thang là:", "options": ["225 m²", "450 m²", "150 m²", "300 m²"], "answer": 0 },
        { "question": "Một hình thang vuông có đáy bé 4 cm, đáy lớn 6 cm, chiều cao 5 cm. Diện tích của hình thang vuông đó là:", "options": ["50 cm²", "25 cm²", "20 cm²", "30 cm²"], "answer": 1 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson63 = {
    ...metadata.lessonInfo,
    metadata: metadata,
    quizPool: [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
                    
                    <!-- Slide 1: Ôn tập lý thuyết hình thang -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="bg-white p-6 rounded-3xl border border-blue-100 shadow-md space-y-4">
                                <div class="border-l-4 border-blue-600 pl-4 py-1">
                                    <h3 class="text-xl md:text-2xl font-black text-blue-900">Kiến thức cần nhớ</h3>
                                </div>
                                <div class="bg-blue-50/50 p-5 rounded-2xl border border-blue-100 space-y-3">
                                    <p class="text-base md:text-lg font-bold text-slate-700 leading-relaxed">
                                        🌟 <strong>Công thức tính diện tích hình thang:</strong>
                                    </p>
                                    <div class="text-center text-xl md:text-3xl font-black text-blue-700 my-2">
                                        S = (a + b) x h : 2
                                    </div>
                                    <p class="text-sm md:text-base font-semibold text-slate-600 leading-relaxed">
                                        Trong đó:<br>
                                        - <strong>a, b</strong>: Độ dài hai đáy (đáy lớn, đáy bé).<br>
                                        - <strong>h</strong>: Chiều cao.<br>
                                        - <strong>Lưu ý quan trọng:</strong> Độ dài hai đáy và chiều cao phải cùng một đơn vị đo.
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
                    
                    <!-- Bài 1: Tính diện tích hình thang theo bảng -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">1</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Tính diện tích hình thang theo bảng</h3>
                                </div>
                            </div>

                            <p class="text-sm md:text-base font-bold text-slate-600 leading-relaxed">
                                Hãy tính diện tích hình thang có độ dài hai đáy lần lượt là a và b; chiều cao h rồi điền kết quả vào bảng dưới đây.
                            </p>

                            <!-- Bảng điền kết quả -->
                            <div class="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
                                <table class="w-full text-center border-collapse">
                                    <thead>
                                        <tr class="bg-blue-50 text-blue-900 font-black text-sm md:text-base">
                                            <th class="p-4 border-b border-r border-slate-200">Thông số</th>
                                            <th class="p-4 border-b border-r border-slate-200">Cột 1</th>
                                            <th class="p-4 border-b border-r border-slate-200">Cột 2</th>
                                            <th class="p-4 border-b border-r border-slate-200">Cột 3</th>
                                            <th class="p-4 border-b border-slate-200">Cột 4</th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-xs md:text-sm font-bold text-slate-700">
                                        <tr class="border-b border-slate-200">
                                            <td class="p-3 bg-slate-50/50 border-r border-slate-200">Đáy bé a</td>
                                            <td class="p-3 border-r border-slate-200">12 cm</td>
                                            <td class="p-3 border-r border-slate-200">14 dm</td>
                                            <td class="p-3 border-r border-slate-200">6 m</td>
                                            <td class="p-3">20 cm</td>
                                        </tr>
                                        <tr class="border-b border-slate-200">
                                            <td class="p-3 bg-slate-50/50 border-r border-slate-200">Đáy lớn b</td>
                                            <td class="p-3 border-r border-slate-200">8 cm</td>
                                            <td class="p-3 border-r border-slate-200">6 dm</td>
                                            <td class="p-3 border-r border-slate-200">4 m</td>
                                            <td class="p-3">15 cm</td>
                                        </tr>
                                        <tr class="border-b border-slate-200">
                                            <td class="p-3 bg-slate-50/50 border-r border-slate-200">Chiều cao h</td>
                                            <td class="p-3 border-r border-slate-200">6 cm</td>
                                            <td class="p-3 border-r border-slate-200">10 dm</td>
                                            <td class="p-3 border-r border-slate-200">4 m</td>
                                            <td class="p-3">10 cm</td>
                                        </tr>
                                        <tr class="bg-blue-50/20">
                                            <td class="p-3 bg-blue-50/30 border-r border-slate-200 text-blue-900 font-black">Diện tích</td>
                                            <td class="p-3 border-r border-slate-200">
                                                <div class="flex items-center justify-center gap-1">
                                                    <input type="number" id="ans-63-1-1" class="w-16 h-10 text-center border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.1rem !important; line-height: 38px !important;">
                                                    <span>cm²</span>
                                                </div>
                                            </td>
                                            <td class="p-3 border-r border-slate-200">
                                                <div class="flex items-center justify-center gap-1">
                                                    <input type="number" id="ans-63-1-2" class="w-16 h-10 text-center border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.1rem !important; line-height: 38px !important;">
                                                    <span>dm²</span>
                                                </div>
                                            </td>
                                            <td class="p-3 border-r border-slate-200">
                                                <div class="flex items-center justify-center gap-1">
                                                    <input type="number" id="ans-63-1-3" class="w-16 h-10 text-center border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.1rem !important; line-height: 38px !important;">
                                                    <span>m²</span>
                                                </div>
                                            </td>
                                            <td class="p-3">
                                                <div class="flex items-center justify-center gap-1">
                                                    <input type="number" id="ans-63-1-4" class="w-16 h-10 text-center border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.1rem !important; line-height: 38px !important;">
                                                    <span>cm²</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-63-bt1')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-63-bt1" onclick="window.check_63_bt1()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-63-bt1" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 1:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    - Cột 1: (12 + 8) x 6 : 2 = 60 (cm²)<br>
                                    - Cột 2: (14 + 6) x 10 : 2 = 100 (dm²)<br>
                                    - Cột 3: (6 + 4) x 4 : 2 = 20 (m²)<br>
                                    - Cột 4: (20 + 15) x 10 : 2 = 175 (cm²)
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 2: Chọn câu trả lời đúng -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">2</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 2. Chọn đáp án chính xác</h3>
                                </div>
                            </div>

                            <div class="bg-blue-50/50 p-6 rounded-[2rem] border border-blue-200 shadow-sm space-y-4">
                                <p class="text-base md:text-lg font-bold text-slate-700 leading-relaxed">
                                    Diện tích hình thang có độ dài hai đáy lần lượt là <strong>25 cm</strong> và <strong>15 cm</strong>; chiều cao <strong>1 dm</strong> là:
                                </p>
                                
                                <div class="grid grid-cols-2 gap-4">
                                    <button id="btn-choice-63-2-A" onclick="window.selectChoice_63_2('A')" class="px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl font-black text-slate-700 hover:border-blue-500 active:scale-95 transition-all text-left text-sm md:text-base">A. 4 cm²</button>
                                    <button id="btn-choice-63-2-B" onclick="window.selectChoice_63_2('B')" class="px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl font-black text-slate-700 hover:border-blue-500 active:scale-95 transition-all text-left text-sm md:text-base">B. 2 cm²</button>
                                    <button id="btn-choice-63-2-C" onclick="window.selectChoice_63_2('C')" class="px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl font-black text-slate-700 hover:border-blue-500 active:scale-95 transition-all text-left text-sm md:text-base">C. 2 dm²</button>
                                    <button id="btn-choice-63-2-D" onclick="window.selectChoice_63_2('D')" class="px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl font-black text-slate-700 hover:border-blue-500 active:scale-95 transition-all text-left text-sm md:text-base">D. 4 dm²</button>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-63-bt2')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-63-bt2" onclick="window.check_63_bt2()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-63-bt2" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 2:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    Đổi: 1 dm = 10 cm.<br>
                                    Diện tích hình thang là:<br>
                                    (25 + 15) x 10 : 2 = 200 (cm²).<br>
                                    Đổi: 200 cm² = 2 dm².<br>
                                    Vậy đáp án đúng là <strong>C. 2 dm²</strong>.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 3: Tính diện tích con thuyền -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">3</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 3. Tính diện tích con thuyền</h3>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                                <!-- Hình con thuyền vẽ ô lưới -->
                                <div class="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center">
                                    <img src="./assets/images/toan/toan_tap_1/63/3.png" alt="Bài 3: Tính diện tích con thuyền" class="max-h-64 object-contain rounded-2xl">
                                    <span class="text-xs font-bold text-slate-500 mt-2">Mỗi ô vuông có cạnh dài 1 cm</span>
                                </div>

                                <!-- Điền kết quả -->
                                <div class="bg-blue-50/30 p-6 rounded-[2rem] border border-blue-150 shadow-sm space-y-4 text-sm md:text-base font-bold text-slate-800">
                                    <p class="text-slate-600">Em hãy đếm các ô vuông và tính diện tích từng phần của con thuyền:</p>
                                    
                                    <div class="flex items-center gap-2">
                                        <span class="w-48 text-slate-700">1. Cánh buồm màu cam:</span>
                                        <input type="number" id="ans-63-3-1" class="w-16 h-10 text-center border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.1rem !important; line-height: 38px !important;">
                                        <span>cm²</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="w-48 text-slate-700">2. Cánh buồm màu đỏ:</span>
                                        <input type="number" id="ans-63-3-2" class="w-16 h-10 text-center border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.1rem !important; line-height: 38px !important;">
                                        <span>cm²</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="w-48 text-slate-700">3. Thân thuyền hình thang:</span>
                                        <input type="number" id="ans-63-3-3" class="w-16 h-10 text-center border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.1rem !important; line-height: 38px !important;">
                                        <span>cm²</span>
                                    </div>
                                    <div class="border-t border-slate-200 my-2 pt-2 flex items-center gap-2 text-blue-700 font-black">
                                        <span class="w-48">Diện tích con thuyền =</span>
                                        <input type="number" id="ans-63-3-4" class="w-20 h-10 text-center border-2 border-blue-400 rounded-xl focus:border-blue-600 focus:outline-none bg-blue-50" style="padding: 0px !important; font-size: 1.2rem !important; line-height: 38px !important;">
                                        <span>cm²</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-63-bt3')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-63-bt3" onclick="window.check_63_bt3()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-63-bt3" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 3:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    - Diện tích cánh buồm màu cam (hình tam giác vuông): 3 x 4 : 2 = 6 (cm²).<br>
                                    - Diện tích cánh buồm màu đỏ (hình tam giác vuông): 3 x 4 : 2 = 6 (cm²).<br>
                                    - Diện tích thân thuyền (hình thang): (11 + 5) x 3 : 2 = 24 (cm²).<br>
                                    - Diện tích con thuyền là: 6 + 6 + 24 = 36 (cm²).
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 4: Mảnh đất phủ cỏ -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">4</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 4. Mảnh đất trồng cỏ</h3>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                                <div class="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center">
                                    <img src="./assets/images/toan/toan_tap_1/63/4.png" alt="Bài 4: Mảnh đất trồng cỏ" class="max-h-64 object-contain rounded-2xl">
                                </div>

                                <div class="bg-blue-50/50 p-6 rounded-[2rem] border border-blue-200 shadow-sm space-y-4">
                                    <p class="text-sm md:text-base font-bold text-slate-700 leading-relaxed">
                                        Một mảnh đất dạng hình thang có độ dài hai đáy là <strong>35 m</strong> và <strong>15 m</strong>, chiều cao là <strong>20 m</strong>.<br>
                                        Hãy tính số tiền mua cỏ để vừa đủ phủ kín mảnh đất đó, biết rằng mỗi mét vuông cỏ có giá là <strong>45 000 đồng</strong>.
                                    </p>
                                    
                                    <div class="space-y-3 font-black text-slate-800">
                                        <div class="flex items-center gap-2 text-base md:text-lg">
                                            <span>1. Diện tích mảnh đất =</span>
                                            <input type="number" id="ans-63-4-1" class="w-20 h-10 text-center border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.1rem !important; line-height: 38px !important;">
                                            <span>m²</span>
                                        </div>
                                        <div class="flex items-center gap-2 text-base md:text-lg text-blue-700">
                                            <span>2. Số tiền mua cỏ =</span>
                                            <input type="number" id="ans-63-4-2" class="w-36 h-10 text-center border-2 border-blue-400 rounded-xl focus:border-blue-600 focus:outline-none bg-blue-50" style="padding: 0px !important; font-size: 1.1rem !important; line-height: 38px !important;">
                                            <span>đồng</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-63-bt4')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-63-bt4" onclick="window.check_63_bt4()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-63-bt4" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 4:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    Diện tích mảnh đất hình thang đó là:<br>
                                    (35 + 15) x 20 : 2 = 500 (m²).<br>
                                    Số tiền mua cỏ để vừa đủ phủ kín mảnh đất đó là:<br>
                                    500 x 45 000 = 22 500 000 (đồng).<br>
                                    Đáp số: 22 500 000 đồng.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `
};

// Đăng ký toàn cục
window.lesson63 = lesson63;

// --- CHẤM ĐIỂM BÀI 1 ---
window.check_63_bt1 = function() {
    const val1 = document.getElementById('ans-63-1-1').value.trim();
    const val2 = document.getElementById('ans-63-1-2').value.trim();
    const val3 = document.getElementById('ans-63-1-3').value.trim();
    const val4 = document.getElementById('ans-63-1-4').value.trim();
    
    const isCorrect1 = (val1 === '60');
    const isCorrect2 = (val2 === '100');
    const isCorrect3 = (val3 === '20');
    const isCorrect4 = (val4 === '175');
    const isCorrect = isCorrect1 && isCorrect2 && isCorrect3 && isCorrect4;

    const rightAnswer = "60, 100, 20, 175";
    const studentAnswer = `${val1 || '?'}; ${val2 || '?'}; ${val3 || '?'}; ${val4 || '?'}`;
    const guidance = metadata.bai_tap[0].guidance;
    const solution = metadata.bai_tap[0].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        let correctCount = (isCorrect1 ? 1 : 0) + (isCorrect2 ? 1 : 0) + (isCorrect3 ? 1 : 0) + (isCorrect4 ? 1 : 0);
        window.submitMathLesson("Bài 1: Tính diện tích hình thang theo bảng", isCorrect ? 100 : 0, 'btn-check-63-bt1', 0, 4, correctCount);
    }
};

// --- BÀI 2 CHOICES STATE & LOGIC ---
window.selected_63_2 = '';
window.selectChoice_63_2 = function(choice) {
    window.selected_63_2 = choice;
    ['A', 'B', 'C', 'D'].forEach(ch => {
        const btn = document.getElementById('btn-choice-63-2-' + ch);
        if (!btn) return;
        if (ch === choice) {
            btn.className = 'px-6 py-4 bg-blue-600 border-2 border-blue-600 rounded-2xl font-black text-white active:scale-95 transition-all text-left text-sm md:text-base';
        } else {
            btn.className = 'px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl font-black text-slate-700 hover:border-blue-500 active:scale-95 transition-all text-left text-sm md:text-base';
        }
    });
};

window.check_63_bt2 = function() {
    const isCorrect = (window.selected_63_2 === 'C');
    const studentAnswer = window.selected_63_2 ? "Đáp án " + window.selected_63_2 : "Chưa chọn";
    const rightAnswer = "Đáp án C";
    const guidance = metadata.bai_tap[1].guidance;
    const solution = metadata.bai_tap[1].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 2: Trắc nghiệm diện tích hình thang", isCorrect ? 100 : 0, 'btn-check-63-bt2', 0, 1, isCorrect ? 1 : 0);
    }
};

// --- CHẤM ĐIỂM BÀI 3 ---
window.check_63_bt3 = function() {
    const val1 = document.getElementById('ans-63-3-1').value.trim();
    const val2 = document.getElementById('ans-63-3-2').value.trim();
    const val3 = document.getElementById('ans-63-3-3').value.trim();
    const val4 = document.getElementById('ans-63-3-4').value.trim();

    const isCorrect1 = (val1 === '6');
    const isCorrect2 = (val2 === '6');
    const isCorrect3 = (val3 === '24');
    const isCorrect4 = (val4 === '36');
    const isCorrect = isCorrect1 && isCorrect2 && isCorrect3 && isCorrect4;

    const rightAnswer = "Cam: 6; Đỏ: 6; Thân: 24; Tổng: 36";
    const studentAnswer = `Cam: ${val1 || '?'}; Đỏ: ${val2 || '?'}; Thân: ${val3 || '?'}; Tổng: ${val4 || '?'}`;
    const guidance = metadata.bai_tap[2].guidance;
    const solution = metadata.bai_tap[2].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        let correctCount = (isCorrect1 ? 1 : 0) + (isCorrect2 ? 1 : 0) + (isCorrect3 ? 1 : 0) + (isCorrect4 ? 1 : 0);
        window.submitMathLesson("Bài 3: Tính diện tích con thuyền", isCorrect ? 100 : 0, 'btn-check-63-bt3', 0, 4, correctCount);
    }
};

// --- CHẤM ĐIỂM BÀI 4 ---
window.check_63_bt4 = function() {
    const val1 = document.getElementById('ans-63-4-1').value.trim();
    const val2 = document.getElementById('ans-63-4-2').value.trim();

    const isCorrect1 = (val1 === '500');
    const isCorrect2 = (val2 === '22500000');
    const isCorrect = isCorrect1 && isCorrect2;

    const rightAnswer = "Diện tích: 500 m²; Số tiền: 22 500 000 đồng";
    const studentAnswer = `Diện tích: ${val1 || '?'} m²; Số tiền: ${val2 || '?'} đồng`;
    const guidance = metadata.bai_tap[3].guidance;
    const solution = metadata.bai_tap[3].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        let correctCount = (isCorrect1 ? 1 : 0) + (isCorrect2 ? 1 : 0);
        window.submitMathLesson("Bài 4: Tính số tiền trồng cỏ", isCorrect ? 100 : 0, 'btn-check-63-bt4', 0, 2, correctCount);
    }
};

export default lesson63;
