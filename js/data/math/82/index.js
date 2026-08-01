const metadata = {
    "lessonInfo": {
        "period": "82",
        "week": "17",
        "topic": "Hình phẳng",
        "title": "BÀI 32: ÔN TẬP MỘT SỐ HÌNH PHẲNG (TIẾT 2)",
        "desc": "Luyện tập tính diện tích tam giác trên lưới, phân tích cắt giấy tạo hình thang, tính giới hạn giãn của dây chun, và diện tích nửa hình tròn."
    },
    "bai_tap": [
        {
            "id": "82_bt1",
            "type": "fill_multiple",
            "title": "Bài 1: Diện tích tam giác",
            "answers": ["12", "10", "9"],
            "guidance": "Mỗi ô vuông có cạnh dài 1 cm:<br>- Hình A: Cạnh đáy bằng 6 ô (6 cm), chiều cao ứng với đáy bằng 4 ô (4 cm). Diện tích = (6 × 4) : 2.<br>- Hình B: Cạnh đáy bằng 4 ô (4 cm), chiều cao bằng 5 ô (5 cm). Diện tích = (4 × 5) : 2.<br>- Hình C: Cạnh đáy bằng 3 ô (3 cm), chiều cao bằng 6 ô (6 cm). Diện tích = (3 × 6) : 2.",
            "solution": "Diện tích mỗi hình tam giác:<br>- Tam giác A: (6 × 4) : 2 = 12 (cm²).<br>- Tam giác B: (4 × 5) : 2 = 10 (cm²).<br>- Tam giác C: (3 × 6) : 2 = 9 (cm²)."
        },
        {
            "id": "82_bt2",
            "type": "fill_multiple",
            "title": "Bài 2: Cắt giấy tam giác vuông",
            "answers": ["hình thang", "42.5"],
            "guidance": "a) Phần còn lại của tờ giấy có hai đáy song song (cạnh trên và cạnh dưới của hình chữ nhật cũ) nên đó là hình thang.<br>b) Đáy lớn của hình thang là 12 cm. Đáy bé là: 12 - 2 - 5 = 5 (cm). Chiều cao bằng chiều rộng hình chữ nhật là 5 cm. Diện tích phần còn lại = (12 + 5) × 5 : 2.",
            "solution": "a) Phần còn lại của tờ giấy là hình thang.<br>b) Đáy bé của hình thang là:<br>12 - 2 - 5 = 5 (cm).<br>Diện tích phần tờ giấy còn lại là:<br>(12 + 5) × 5 : 2 = 42,5 (cm²).<br>(Hoặc có thể lấy diện tích hình chữ nhật ban đầu trừ đi diện tích hai tam giác vuông đã cắt: 12 × 5 - (2 × 5) : 2 - (5 × 5) : 2 = 60 - 5 - 12,5 = 42,5 cm²).<br>Đáp số: a) Hình thang; b) 42,5 cm²."
        },
        {
            "id": "82_bt3",
            "type": "fill_multiple",
            "title": "Bài 3: Độ dài giãn dây chun",
            "answers": ["có"],
            "guidance": "Tính chu vi miệng bình hình tròn: C = 2 × 3,14 × r = 2 × 3,14 × 5 = 31,4 (cm).<br>Để buộc kín miệng bình, sợi dây chun dài 15,85 cm cần giãn ra bằng chu vi miệng bình (31,4 cm).<br>Độ dài tối đa dây chun có thể giãn ra mà không đứt: 15,85 × 2 = 31,7 (cm).<br>So sánh: 31,4 cm < 31,7 cm nên sợi dây chun có thể kéo giãn để buộc bình mà không đứt.",
            "solution": "Chu vi miệng bình hình tròn là:<br>2 × 3,14 × 5 = 31,4 (cm).<br>Độ dài tối đa sợi dây chun có thể kéo giãn là:<br>15,85 × 2 = 31,7 (cm).<br>Vì 31,4 < 31,7 nên Rô-bốt có thể dùng sợi dây chun đó để buộc kín miệng bình được.<br>Đáp số: Có thể."
        },
        {
            "id": "82_bt4",
            "type": "fill_multiple",
            "title": "Bài 4: Diện tích mặt hồ nửa hình tròn",
            "answers": ["5652"],
            "guidance": "Tính diện tích của cả hình tròn có bán kính r = 60 m bằng công thức: S = 3,14 × r × r.<br>Sau đó chia đôi kết quả đó để tìm diện tích mặt hồ dạng nửa hình tròn.",
            "solution": "Diện tích của cả hình tròn bán kính 60 m là:<br>3,14 × 60 × 60 = 11 304 (m²).<br>Diện tích mặt hồ là:<br>11 304 : 2 = 5 652 (m²).<br>Đáp số: 5 652 m²."
        }
    ],
    "quizPool": [
        { "question": "Tính diện tích tam giác có đáy 15 cm và chiều cao 8 cm:", "options": ["60 cm²", "120 cm²", "23 cm²", "30 cm²"], "answer": 0 },
        { "question": "Một hình thang có đáy lớn 10 cm, đáy bé 6 cm, chiều cao 5 cm. Diện tích của hình thang đó là:", "options": ["40 cm²", "80 cm²", "300 cm²", "16 cm²"], "answer": 0 },
        { "question": "Một hình tròn có chu vi là 31,4 cm. Bán kính của hình tròn đó là:", "options": ["5 cm", "10 cm", "2,5 cm", "15,7 cm"], "answer": 0 },
        { "question": "Một mặt hồ nửa hình tròn bán kính 10 m thì diện tích là:", "options": ["157 m²", "314 m²", "78,5 m²", "62,8 m²"], "answer": 0 },
        { "question": "Diện tích tam giác vuông có hai cạnh góc vuông là 6 cm và 8 cm là:", "options": ["24 cm²", "48 cm²", "14 cm²", "28 cm²"], "answer": 0 },
        { "question": "Chu vi hình tròn có bán kính 4 cm là:", "options": ["25,12 cm", "12,56 cm", "50,24 cm", "8 cm"], "answer": 0 },
        { "question": "Tính diện tích hình tròn có bán kính 5 cm:", "options": ["78,5 cm²", "31,4 cm²", "15,7 cm²", "25 cm²"], "answer": 0 },
        { "question": "Tìm chu vi nửa hình tròn bán kính r = 10 cm (bao gồm cả đường kính):", "options": ["51,4 cm", "31,4 cm", "20 cm", "62,8 cm"], "answer": 0 },
        { "question": "Hình thang vuông có đáy lớn 8 cm, đáy bé 4 cm, chiều cao bằng đáy bé. Diện tích hình thang vuông đó là:", "options": ["24 cm²", "48 cm²", "16 cm²", "12 cm²"], "answer": 0 },
        { "question": "Diện tích hình bình hành có đáy 12 cm, chiều cao 7 cm là:", "options": ["84 cm²", "42 cm²", "19 cm²", "38 cm²"], "answer": 0 },
        { "question": "Hình thoi có hai đường chéo d1 = 12 cm và d2 = 5 cm. Diện tích là:", "options": ["30 cm²", "60 cm²", "17 cm²", "34 cm²"], "answer": 0 },
        { "question": "Chu vi hình tròn đường kính d = 6 cm là:", "options": ["18,84 cm", "9,42 cm", "28,26 cm", "12 cm"], "answer": 0 },
        { "question": "Diện tích hình thang có trung bình cộng hai đáy là 12 cm, chiều cao 6 cm là:", "options": ["72 cm²", "36 cm²", "144 cm²", "18 cm²"], "answer": 0 },
        { "question": "Đổi đơn vị: 4 kg 500 g = ... kg", "options": ["4,5", "45", "0,45", "4,05"], "answer": 0 },
        { "question": "Một tam giác có diện tích 24 m², cạnh đáy dài 8 m. Chiều cao tam giác đó là:", "options": ["6 m", "3 m", "12 m", "4 m"], "answer": 0 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson82 = {
    ...metadata.lessonInfo,
    metadata: metadata,
    quizPool: [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
                    
                    <!-- Slide 1: Khởi động ôn tập tính diện tích hình phẳng -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6 max-w-4xl mx-auto">
                            <div class="bg-white p-8 rounded-3xl border border-blue-100 shadow-md space-y-6">
                                <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                                    <span class="text-2xl md:text-4xl animate-bounce-slow">📏</span>
                                    <div>
                                        <h3 class="text-xl md:text-2xl font-black text-blue-900">Công thức diện tích và chu vi hình phẳng</h3>
                                        <p class="text-xs text-slate-500 font-semibold mt-0.5">Hệ thống lại các công thức quan trọng</p>
                                    </div>
                                </div>
                                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4 font-bold text-slate-700 text-xl md:text-3xl leading-relaxed">
                                    <p>🔺 <strong>Diện tích tam giác:</strong> S = (đáy × chiều cao) : 2</p>
                                    <p>📐 <strong>Diện tích hình thang:</strong> S = (đáy lớn + đáy bé) × chiều cao : 2</p>
                                    <p>⭕ <strong>Chu vi và Diện tích hình tròn:</strong></p>
                                    <ul class="list-disc pl-6 space-y-2">
                                        <li>Chu vi: C = d × 3,14 = r × 2 × 3,14</li>
                                        <li>Diện tích: S = r × r × 3,14</li>
                                    </ul>
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
                    
                    <!-- Bài 1: Tính diện tích tam giác trên lưới -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">1</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Tính diện tích tam giác trên lưới (Cạnh ô vuông = 1 cm)</h3>
                                </div>
                            </div>

                            <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6 font-bold text-slate-700 text-sm md:text-base max-w-4xl mx-auto">
                                <div class="flex justify-center my-4">
                                    <img src="assets/images/toan/toan_tap_1/82/1.png" alt="Bài 1" class="max-h-72 md:max-h-96 object-contain rounded-2xl">
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                    <div class="p-4 bg-slate-50 border border-slate-150 rounded-2xl flex flex-col items-center justify-between">
                                        <span class="text-lg font-black text-blue-900 mb-2">Tam giác A</span>
                                        <div class="flex items-center gap-2">
                                            <span>S =</span>
                                            <input type="text" id="inp-82-bt1-1" class="w-16 text-center border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none font-black text-lg bg-white" placeholder="">
                                            <span>cm²</span>
                                        </div>
                                    </div>
                                    <div class="p-4 bg-slate-50 border border-slate-150 rounded-2xl flex flex-col items-center justify-between">
                                        <span class="text-lg font-black text-blue-900 mb-2">Tam giác B</span>
                                        <div class="flex items-center gap-2">
                                            <span>S =</span>
                                            <input type="text" id="inp-82-bt1-2" class="w-16 text-center border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none font-black text-lg bg-white" placeholder="">
                                            <span>cm²</span>
                                        </div>
                                    </div>
                                    <div class="p-4 bg-slate-50 border border-slate-150 rounded-2xl flex flex-col items-center justify-between">
                                        <span class="text-lg font-black text-blue-900 mb-2">Tam giác C</span>
                                        <div class="flex items-center gap-2">
                                            <span>S =</span>
                                            <input type="text" id="inp-82-bt1-3" class="w-16 text-center border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none font-black text-lg bg-white" placeholder="">
                                            <span>cm²</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-82-bt1')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-82-bt1" onclick="window.check_82_bt1()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-82-bt1" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 1:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    Đếm số ô vuông đáy và chiều cao trên lưới:<br>
                                    - Hình A: Đáy = 6 cm, Cao = 4 cm. S = (6 × 4) : 2 = 12 cm².<br>
                                    - Hình B: Đáy = 4 cm, Cao = 5 cm. S = (4 × 5) : 2 = 10 cm².<br>
                                    - Hình C: Đáy = 3 cm, Cao = 6 cm. S = (3 × 6) : 2 = 9 cm².
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 2: Cắt giấy tam giác vuông -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">2</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 2. Cắt giấy hình chữ nhật</h3>
                                </div>
                            </div>

                            <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6 font-bold text-slate-700 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
                                <p class="bg-slate-50 p-4 border border-slate-150 rounded-2xl">
                                    Mai cắt ra hai hình tam giác vuông từ một tờ giấy hình chữ nhật dài 12 cm và rộng 5 cm. (Một phần cắt ở góc trái dài 2 cm, phần cắt ở góc phải dài 5 cm).
                                </p>
                                
                                <div class="flex flex-col md:flex-row justify-center items-center gap-6 my-4">
                                    <img src="assets/images/toan/toan_tap_1/82/2a.png" alt="Tờ giấy trước khi cắt" class="max-h-48 object-contain rounded-xl">
                                    <img src="assets/images/toan/toan_tap_1/82/2b.png" alt="Phần còn lại sau khi cắt" class="max-h-48 object-contain rounded-xl">
                                </div>
                                
                                <div class="space-y-4">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span>a) Phần còn lại của tờ giấy là:</span>
                                        <input type="text" id="inp-82-bt2-1" class="w-40 text-center border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none font-black text-lg bg-white" style="padding: 0px !important; font-size: 1.25rem !important; height: 38px !important; line-height: 38px !important;" placeholder="Tên hình">
                                    </div>
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span>b) Diện tích phần tờ giấy còn lại đó là:</span>
                                        <input type="text" id="inp-82-bt2-2" class="w-24 text-center border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none font-black text-lg bg-white" style="padding: 0px !important; font-size: 1.25rem !important; height: 38px !important; line-height: 38px !important;" placeholder="">
                                        <span>cm²</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-82-bt2')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-82-bt2" onclick="window.check_82_bt2()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-82-bt2" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 2:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    a) Phần còn lại là hình thang (vì có 2 đáy trên và dưới song song với nhau).<br>
                                    b) Chiều dài đáy bé hình thang: 12 - 2 - 5 = 5 (cm). Đáy lớn là 12 cm, chiều cao là 5 cm.<br>
                                    Diện tích phần còn lại là:<br>
                                    (12 + 5) × 5 : 2 = 42,5 (cm²).<br>
                                    (Hoặc: Lấy diện tích hình chữ nhật trừ đi diện tích hai hình tam giác vuông đã cắt: 12 × 5 - (2 × 5) : 2 - (5 × 5) : 2 = 60 - 5 - 12,5 = 42,5 cm²).
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 3: Độ dài giãn dây chun -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">3</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 3. Độ dài co giãn của dây chun</h3>
                                </div>
                            </div>

                            <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6 font-bold text-slate-700 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
                                <p class="bg-slate-50 p-4 border border-slate-150 rounded-2xl">
                                    Rô-bốt có một sợi dây chun dài 15,85 cm. Rô-bốt muốn dùng nó để buộc kín miệng bình hình tròn bán kính 5 cm. Hỏi Rô-bốt có thể thực hiện được việc buộc đó không, biết dây chun sẽ đứt nếu kéo dài gấp hơn 2 lần?
                                </p>

                                <div class="flex justify-center my-4">
                                    <img src="assets/images/toan/toan_tap_1/82/3.png" alt="Buộc miệng bình" class="max-h-64 object-contain rounded-2xl">
                                </div>

                                <div class="flex items-center gap-3 flex-wrap">
                                    <span>Trả lời (Điền Có hoặc Không):</span>
                                    <input type="text" id="inp-82-bt3-1" class="w-28 text-center border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none font-black text-xl bg-white" style="padding: 0px !important; font-size: 1.25rem !important; height: 38px !important; line-height: 38px !important;" placeholder="Có/Không">
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-82-bt3')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-82-bt3" onclick="window.check_82_bt3()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-82-bt3" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 3:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    Chu vi miệng bình tròn là: 2 × 3,14 × 5 = 31,4 (cm).<br>
                                    Độ dài tối đa dây chun có thể kéo giãn mà không đứt: 15,85 × 2 = 31,7 (cm).<br>
                                    Vì 31,4 < 31,7 nên dây chun không bị đứt và Rô-bốt hoàn toàn có thể buộc được miệng bình.<br>
                                    Đáp số: Có.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 4: Diện tích mặt hồ -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">4</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 4. Diện tích mặt hồ nửa hình tròn</h3>
                                </div>
                            </div>

                            <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6 font-bold text-slate-700 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
                                <p class="bg-slate-50 p-4 border border-slate-150 rounded-2xl">
                                    Một mặt hồ có dạng là một nửa hình tròn. Biết rằng bán kính đo được là 60 m. Hỏi diện tích mặt hồ là bao nhiêu mét vuông?
                                </p>

                                <div class="flex justify-center my-4">
                                    <img src="assets/images/toan/toan_tap_1/82/4.png" alt="Mặt hồ nửa hình tròn" class="max-h-64 object-contain rounded-2xl">
                                </div>

                                <div class="flex items-center gap-2 flex-wrap">
                                    <span>Diện tích mặt hồ là:</span>
                                    <input type="text" id="inp-82-bt4-1" class="w-28 text-center border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none font-black text-xl bg-white" style="padding: 0px !important; font-size: 1.25rem !important; height: 38px !important; line-height: 38px !important;" placeholder="">
                                    <span>mét vuông (m²).</span>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-82-bt4')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-82-bt4" onclick="window.check_82_bt4()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-82-bt4" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 4:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    Diện tích hình tròn có bán kính 60 m là:<br>
                                    3,14 × 60 × 60 = 11 304 (m²).<br>
                                    Diện tích mặt hồ (nửa hình tròn) là:<br>
                                    11 304 : 2 = 5 652 (m²).<br>
                                    Đáp số: 5 652 m².
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `
};

window.lesson82 = lesson82;

// --- HÀM KIỂM TRA ĐÁP ÁN TIẾT 82 ---
window.check_82_bt1 = function() {
    const val1 = document.getElementById('inp-82-bt1-1').value.trim();
    const val2 = document.getElementById('inp-82-bt1-2').value.trim();
    const val3 = document.getElementById('inp-82-bt1-3').value.trim();

    const isCorrect1 = (val1 === '12');
    const isCorrect2 = (val2 === '10');
    const isCorrect3 = (val3 === '9');

    const totalQuestions = 3;
    const correctCount = (isCorrect1?1:0) + (isCorrect2?1:0) + (isCorrect3?1:0);
    const isCorrect = (correctCount === totalQuestions);

    const rightAnswer = "A: 12 cm²; B: 10 cm²; C: 9 cm²";
    const studentAnswer = `A: ${val1 || '?'} cm²; B: ${val2 || '?'} cm²; C: ${val3 || '?'} cm²`;
    const guidance = metadata.bai_tap[0].guidance;
    const solution = metadata.bai_tap[0].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 1: Diện tích tam giác", isCorrect ? 100 : 0, 'btn-check-82-bt1', 0, totalQuestions, correctCount);
    }
};

window.check_82_bt2 = function() {
    const val1 = document.getElementById('inp-82-bt2-1').value.trim().toLowerCase();
    const val2 = document.getElementById('inp-82-bt2-2').value.trim().replace(',', '.');

    const isCorrect1 = (val1 === 'hình thang' || val1 === 'hinh thang' || val1 === 'hình thang vuông' || val1 === 'hinh thang vuong');
    const isCorrect2 = (val2 === '42.5');

    const totalQuestions = 2;
    const correctCount = (isCorrect1?1:0) + (isCorrect2?1:0);
    const isCorrect = (correctCount === totalQuestions);

    const rightAnswer = "a) Hình thang; b) 42.5 cm²";
    const studentAnswer = `a) ${val1 || '?'}; b) ${val2 || '?'} cm²`;
    const guidance = metadata.bai_tap[1].guidance;
    const solution = metadata.bai_tap[1].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 2: Cắt giấy tam giác vuông", isCorrect ? 100 : 0, 'btn-check-82-bt2', 0, totalQuestions, correctCount);
    }
};

window.check_82_bt3 = function() {
    const val1 = document.getElementById('inp-82-bt3-1').value.trim().toLowerCase();

    const isCorrect = (val1 === 'có' || val1 === 'co' || val1 === 'có thể' || val1 === 'co the');

    const rightAnswer = "Có";
    const studentAnswer = `${val1 || '?'}`;
    const guidance = metadata.bai_tap[2].guidance;
    const solution = metadata.bai_tap[2].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 3: Độ dài giãn dây chun", isCorrect ? 100 : 0, 'btn-check-82-bt3', 0, 1, isCorrect ? 1 : 0);
    }
};

window.check_82_bt4 = function() {
    const val1 = document.getElementById('inp-82-bt4-1').value.trim().replace(/\s/g, '');

    const isCorrect = (val1 === '5652');

    const rightAnswer = "5652";
    const studentAnswer = `${val1 || '?'}`;
    const guidance = metadata.bai_tap[3].guidance;
    const solution = metadata.bai_tap[3].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 4: Diện tích mặt hồ nửa hình tròn", isCorrect ? 100 : 0, 'btn-check-82-bt4', 0, 1, isCorrect ? 1 : 0);
    }
};

export default lesson82;
