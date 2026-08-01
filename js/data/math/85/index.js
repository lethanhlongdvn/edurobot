const metadata = {
    "lessonInfo": {
        "period": "85",
        "week": "17",
        "topic": "Hình phẳng",
        "title": "BÀI 33: ÔN TẬP DIỆN TÍCH, CHU VI MỘT SỐ HÌNH PHẲNG (TIẾT 3)",
        "desc": "Luyện tập tính diện tích tứ giác phân rã tam giác vuông, so sánh diện tích tam giác có trung điểm, bài toán thửa ruộng hình thang sản lượng thóc, và diện tích bồn hoa ghép."
    },
    "bai_tap": [
        {
            "id": "85_bt1",
            "type": "fill_multiple",
            "title": "Bài 1: Diện tích mảnh bìa hình tứ giác ABCD",
            "answers": ["1428"],
            "guidance": "Tứ giác ABCD được phân chia bằng đường chéo BD thành hai hình tam giác vuông:<br>- Tam giác vuông ABD vuông tại A: S = (56 × 33) : 2 = 924 cm².<br>- Tam giác vuông BCD vuông tại C: S = (63 × 16) : 2 = 504 cm².<br>- Diện tích mảnh bìa ABCD = Diện tích ABD + Diện tích BCD.",
            "solution": "Diện tích tam giác vuông ABD vuông tại A là:<br>(56 × 33) : 2 = 924 (cm²).<br>Diện tích tam giác vuông BCD vuông tại C là:<br>(63 × 16) : 2 = 504 (cm²).<br>Diện tích mảnh bìa hình tứ giác ABCD là:<br>924 + 504 = 1 428 (cm²).<br>Đáp số: 1 428 cm²."
        },
        {
            "id": "85_bt2",
            "type": "fill_multiple",
            "title": "Bài 2: Đúng (Đ), Sai (S) ?",
            "answers": ["S", "Đ"],
            "guidance": "M là trung điểm của BC nên đáy BM = MC.<br>Hai hình tam giác ABM và ACM chung chiều cao hạ từ đỉnh A xuống đáy BC.<br>Vì có đáy bằng nhau và chung chiều cao nên diện tích hai tam giác này bằng nhau.<br>a) Bé hơn → Điền S.<br>b) Bằng nhau → Điền Đ.",
            "solution": "Vì M là trung điểm của BC nên BM = MC.<br>Hai hình tam giác ABM và ACM chung chiều cao hạ từ đỉnh A xuống cạnh BC.<br>Do đó diện tích tam giác ABM bằng diện tích tam giác ACM.<br>a) Điền S<br>b) Điền Đ"
        },
        {
            "id": "85_bt3",
            "type": "fill_multiple",
            "title": "Bài 3: Sản lượng thóc trên thửa ruộng",
            "answers": ["0.63"],
            "guidance": "Bước 1: Tính diện tích thửa ruộng hình thang: S = (56 + 34) × 20 : 2 = 900 m².<br>Bước 2: Tính số thóc thu hoạch được trên thửa ruộng đó: (900 : 100) × 70 = 630 kg.<br>Bước 3: Đổi đơn vị từ kg sang tấn: 630 kg = 0,63 tấn.",
            "solution": "Diện tích của thửa ruộng hình thang đó là:<br>(56 + 34) × 20 : 2 = 900 (m²).<br>Số ki-lô-gam thóc thu hoạch được trên thửa ruộng là:<br>900 : 100 × 70 = 630 (kg).<br>Đổi: 630 kg = 0,63 tấn.<br>Đáp số: 0,63 tấn thóc."
        },
        {
            "id": "85_bt4",
            "type": "fill_multiple",
            "title": "Bài 4: Chọn câu trả lời đúng (Diện tích bồn hoa)",
            "answers": ["B"],
            "guidance": "Bồn hoa gồm một hình vuông cạnh 2 m ở giữa và 4 nửa hình tròn đường kính 2 m ở 4 phía.<br>- Diện tích hình vuông ở giữa: 2 × 2 = 4 m².<br>- 4 nửa hình tròn đường kính 2 m ghép lại thành 2 hình tròn nguyên vẹn có đường kính 2 m (bán kính r = 1 m).<br>- Diện tích 2 hình tròn đó: 2 × (3,14 × 1 × 1) = 6,28 m².<br>- Tổng diện tích bồn hoa: 4 + 6,28 = 10,28 m². Chọn B.",
            "solution": "Diện tích hình vuông ở giữa bồn hoa là:<br>2 × 2 = 4 (m²).<br>Bán kính của các nửa hình tròn là:<br>2 : 2 = 1 (m).<br>4 nửa hình tròn ghép lại tương đương với 2 hình tròn bán kính 1 m. Diện tích của 4 nửa hình tròn này là:<br>2 × (3,14 × 1 × 1) = 6,28 (m²).<br>Diện tích của bồn hoa đó là:<br>4 + 6,28 = 10,28 (m²).<br>Chọn đáp án B."
        }
    ],
    "quizPool": [
        { "question": "Tính diện tích tam giác vuông có hai cạnh góc vuông là 10 cm và 24 cm:", "options": ["120 cm²", "240 cm²", "34 cm²", "68 cm²"], "answer": 0 },
        { "question": "Thửa ruộng hình thang có diện tích 500 m². Cứ 100 m² thu được 65 kg thóc. Hỏi cả thửa ruộng thu được bao nhiêu kg thóc?", "options": ["325 kg", "32,5 kg", "650 kg", "130 kg"], "answer": 0 },
        { "question": "Đổi đơn vị: 750 kg = ... tấn", "options": ["0,75", "7,5", "0,075", "75"], "answer": 0 },
        { "question": "Diện tích hình vuông có cạnh 4 m là:", "options": ["16 m²", "8 m²", "12 m²", "24 m²"], "answer": 0 },
        { "question": "Tính diện tích hình tròn có bán kính 2 dm:", "options": ["12,56 dm²", "6,28 dm²", "3,14 dm²", "25,12 dm²"], "answer": 0 },
        { "question": "Cho tam giác ABC, điểm D là trung điểm cạnh BC. Khi đó diện tích tam giác ABD so với diện tích tam giác ADC thế nào?", "options": ["Bằng nhau", "Lớn hơn", "Bé hơn", "Gấp hai lần"], "answer": 0 },
        { "question": "Tính diện tích bồn hoa gồm 1 hình vuông cạnh 4 m ở giữa và 4 nửa hình tròn đường kính 4 m ghép xung quanh:", "options": ["41,12 m²", "25,12 m²", "16 m²", "50,24 m²"], "answer": 0 },
        { "question": "Diện tích hình thang có đáy lớn 12 m, đáy bé 8 m, chiều cao 5 m là:", "options": ["50 m²", "100 m²", "48 m²", "25 m²"], "answer": 0 },
        { "question": "Một thửa ruộng hình thang diện tích 800 m². Cứ 100 m² thu được 80 kg thóc. Số thóc thu được đổi ra tấn là:", "options": ["0,64 tấn", "6,4 tấn", "640 tấn", "0,08 tấn"], "answer": 0 },
        { "question": "Độ dài đáy tam giác là 14 cm, chiều cao 5 cm. Diện tích tam giác là:", "options": ["35 cm²", "70 cm²", "19 cm²", "28 cm²"], "answer": 0 },
        { "question": "Tứ giác ABCD chia bởi đường chéo BD thành 2 tam giác vuông ABD (S=300 cm²) và BCD (S=400 cm²). Diện tích tứ giác là:", "options": ["700 cm²", "350 cm²", "1200 cm²", "100 cm²"], "answer": 0 },
        { "question": "Hình tròn có bán kính 10 cm thì diện tích là:", "options": ["314 cm²", "62,8 cm²", "31,4 cm²", "78,5 cm²"], "answer": 0 },
        { "question": "Một khu đất hình chữ nhật dài 40 m, rộng 30 m. Diện tích khu đất là:", "options": ["1200 m²", "140 m²", "600 m²", "2400 m²"], "answer": 0 },
        { "question": "Đổi đơn vị: 125 kg = ... tấn", "options": ["0,125", "1,25", "12,5", "0,0125"], "answer": 0 },
        { "question": "Đường kính hình tròn là 6 dm. Bán kính của nó là:", "options": ["3 dm", "12 dm", "1,5 dm", "9 dm"], "answer": 0 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson85 = {
    ...metadata.lessonInfo,
    metadata: metadata,
    quizPool: [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
                    
                    <!-- Slide 1: Khởi động ôn tập diện tích hình ghép -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6 max-w-4xl mx-auto">
                            <div class="bg-white p-8 rounded-3xl border border-blue-100 shadow-md space-y-6">
                                <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                                    <span class="text-2xl md:text-4xl animate-bounce-slow">🧩</span>
                                    <div>
                                        <h3 class="text-xl md:text-2xl font-black text-blue-900">Ôn tập diện tích hình ghép phức tạp</h3>
                                        <p class="text-xs text-slate-500 font-semibold mt-0.5">Phương pháp phân rã và tổng hợp hình học</p>
                                    </div>
                                </div>
                                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4 font-bold text-slate-700 text-xl md:text-3xl leading-relaxed">
                                    <p>📐 <strong>Phương pháp chia nhỏ hình (Phân rã):</strong></p>
                                    <ul class="list-disc pl-6 space-y-1 text-slate-650">
                                        <li>Khi gặp các hình tứ giác không có công thức trực tiếp, hãy kẻ thêm đường chéo để chia chúng thành các hình tam giác quen thuộc (ví dụ tam giác vuông).</li>
                                    </ul>
                                    <p>⭕ <strong>Phương pháp gộp hình (Tổng hợp):</strong></p>
                                    <ul class="list-disc pl-6 space-y-1 text-slate-650">
                                        <li>Khi gặp các phần cung tròn xung quanh, hãy tìm cách gộp các nửa hình tròn hoặc phần tư hình tròn lại thành những hình tròn nguyên vẹn để tính toán nhanh hơn.</li>
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
                    
                    <!-- Bài 1: Tính diện tích mảnh bìa hình tứ giác ABCD -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">1</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Diện tích mảnh bìa hình tứ giác ABCD</h3>
                                </div>
                            </div>

                            <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6 font-bold text-slate-700 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
                                <div class="flex justify-center my-4">
                                    <img src="assets/images/toan/toan_tap_1/85/1.png" alt="Bài 1" class="max-h-64 object-contain rounded-2xl">
                                </div>
                                <p class="bg-slate-50 p-4 border border-slate-150 rounded-2xl">
                                    Tính diện tích mảnh bìa hình tứ giác ABCD có kích thước như hình vẽ bên. Biết rằng các góc đỉnh A và đỉnh C là góc vuông. (AD = 56 cm, AB = 33 cm, CD = 63 cm, BC = 16 cm).
                                </p>

                                <div class="flex items-center gap-2 flex-wrap">
                                    <span>Diện tích mảnh bìa ABCD là:</span>
                                    <input type="text" id="inp-85-bt1-1" class="w-24 text-center border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none font-black text-xl bg-white" style="padding: 0px !important; font-size: 1.25rem !important; height: 38px !important; line-height: 38px !important;" placeholder="">
                                    <span>cm².</span>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-85-bt1')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-85-bt1" onclick="window.check_85_bt1()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-85-bt1" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 1:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    Ta chia tứ giác ABCD thành hai tam giác vuông ABD (vuông tại A) và BCD (vuông tại C) bằng đường chéo BD.<br>
                                    - Diện tích tam giác vuông ABD là: (56 × 33) : 2 = 924 (cm²).<br>
                                    - Diện tích tam giác vuông BCD là: (63 × 16) : 2 = 504 (cm²).<br>
                                    - Diện tích mảnh bìa hình tứ giác ABCD là: 924 + 504 = 1 428 (cm²).
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 2: Đúng Sai -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">2</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 2. Đúng (Đ), Sai (S) ?</h3>
                                </div>
                            </div>

                            <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6 font-bold text-slate-700 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                                <div class="flex justify-center my-4">
                                    <img src="assets/images/toan/toan_tap_1/85/2.png" alt="Bài 2" class="max-h-64 object-contain rounded-2xl">
                                </div>
                                <p class="bg-slate-50 p-4 border border-slate-150 rounded-2xl">
                                    Cho hình tam giác ABC và M là trung điểm của cạnh BC.
                                </p>

                                <div class="space-y-4">
                                    <div class="flex items-center gap-3">
                                        <span>a) Diện tích hình tam giác ABM bé hơn diện tích hình tam giác ACM:</span>
                                        <input type="text" id="inp-85-bt2-1" class="w-12 text-center border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none font-black text-lg bg-white" style="padding: 0px !important;" placeholder="Đ/S">
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <span>b) Diện tích hình tam giác ABM bằng diện tích hình tam giác ACM:</span>
                                        <input type="text" id="inp-85-bt2-2" class="w-12 text-center border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none font-black text-lg bg-white" style="padding: 0px !important;" placeholder="Đ/S">
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-85-bt2')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-85-bt2" onclick="window.check_85_bt2()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-85-bt2" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 2:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    Hai hình tam giác ABM và ACM có đáy BM = MC (vì M là trung điểm của BC), và chung chiều cao hạ từ đỉnh A xuống đáy BC.<br>
                                    Vì có độ dài đáy bằng nhau và chung chiều cao tương ứng, nên diện tích của chúng bằng nhau.<br>
                                    a) Điền S.<br>
                                    b) Điền Đ.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 3: Sản lượng thóc thửa ruộng -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">3</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 3. Sản lượng thóc trên thửa ruộng</h3>
                                </div>
                            </div>

                            <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6 font-bold text-slate-700 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
                                <p class="bg-slate-50 p-4 border border-slate-150 rounded-2xl">
                                    Một thửa ruộng dạng hình thang có độ dài hai đáy là 56 m và 34 m, chiều cao là 20 m. Người ta thu hoạch thóc trên thửa ruộng đó, cứ 100 m² thu được 70 kg thóc. Hỏi trên cả thửa ruộng người ta thu hoạch được bao nhiêu tấn thóc?
                                </p>

                                <div class="flex items-center gap-2 flex-wrap">
                                    <span>Số tấn thóc thu hoạch được là:</span>
                                    <input type="text" id="inp-85-bt3-1" class="w-24 text-center border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none font-black text-xl bg-white" style="padding: 0px !important; font-size: 1.25rem !important; height: 38px !important; line-height: 38px !important;" placeholder="">
                                    <span>tấn thóc.</span>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-85-bt3')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-85-bt3" onclick="window.check_85_bt3()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-85-bt3" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 3:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    Diện tích thửa ruộng hình thang là:<br>
                                    (56 + 34) × 20 : 2 = 900 (m²).<br>
                                    Số thóc thu hoạch được trên thửa ruộng là:<br>
                                    900 : 100 × 70 = 630 (kg).<br>
                                    Đổi ra đơn vị tấn: 630 kg = 0,63 tấn.<br>
                                    Đáp số: 0,63 tấn.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 4: Chọn câu trả lời đúng -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">4</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 4. Diện tích bồn hoa hình ghép</h3>
                                </div>
                            </div>

                            <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6 font-bold text-slate-700 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                                <div class="flex justify-center my-4">
                                    <img src="assets/images/toan/toan_tap_1/85/4.png" alt="Bài 4" class="max-h-64 object-contain rounded-2xl">
                                </div>
                                <div class="p-4 bg-slate-50 border border-slate-150 rounded-2xl text-xl md:text-3xl text-slate-800 font-bold">
                                    Một bồn hoa có hình dạng gồm một hình vuông ở giữa có cạnh là 2 m và 4 nửa hình tròn đường kính 2 m ghép xung quanh. Hãy chọn diện tích của bồn hoa:
                                </div>

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-lg md:text-2xl">
                                    <label class="flex items-center gap-3 p-3 border border-slate-200 rounded-xl hover:bg-blue-50 cursor-pointer transition-all">
                                        <input type="radio" name="rad-85-bt4" value="A" class="w-6 h-6 text-blue-600">
                                        <span>A. 6,28 m²</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-3 border border-slate-200 rounded-xl hover:bg-blue-50 cursor-pointer transition-all">
                                        <input type="radio" name="rad-85-bt4" value="B" class="w-6 h-6 text-blue-600">
                                        <span>B. 10,28 m²</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-3 border border-slate-200 rounded-xl hover:bg-blue-50 cursor-pointer transition-all">
                                        <input type="radio" name="rad-85-bt4" value="C" class="w-6 h-6 text-blue-600">
                                        <span>C. 7,14 m²</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-3 border border-slate-200 rounded-xl hover:bg-blue-50 cursor-pointer transition-all">
                                        <input type="radio" name="rad-85-bt4" value="D" class="w-6 h-6 text-blue-600">
                                        <span>D. 16,56 m²</span>
                                    </label>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-85-bt4')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-85-bt4" onclick="window.check_85_bt4()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-85-bt4" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 4:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    - Diện tích hình vuông cạnh 2 m ở giữa là: 2 × 2 = 4 (m²).<br>
                                    - 4 nửa hình tròn đường kính 2 m ghép lại tương đương với 2 hình tròn nguyên vẹn có bán kính r = 1 m. Diện tích 4 nửa hình tròn đó là: 2 × (3,14 × 1 × 1) = 6,28 (m²).<br>
                                    - Diện tích bồn hoa là: 4 + 6,28 = 10,28 (m²). Chọn đáp án B.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `
};

window.lesson85 = lesson85;

// --- HÀM KIỂM TRA ĐÁP ÁN TIẾT 85 ---
window.check_85_bt1 = function() {
    const val1 = document.getElementById('inp-85-bt1-1').value.trim();

    const isCorrect = (val1 === '1428');

    const rightAnswer = "1428";
    const studentAnswer = `${val1 || '?'}`;
    const guidance = metadata.bai_tap[0].guidance;
    const solution = metadata.bai_tap[0].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 1: Diện tích mảnh bìa hình tứ giác ABCD", isCorrect ? 100 : 0, 'btn-check-85-bt1', 0, 1, isCorrect ? 1 : 0);
    }
};

window.check_85_bt2 = function() {
    const val1 = document.getElementById('inp-85-bt2-1').value.trim().toUpperCase();
    const val2 = document.getElementById('inp-85-bt2-2').value.trim().toUpperCase();

    const isCorrect1 = (val1 === 'S');
    const isCorrect2 = (val2 === 'Đ' || val2 === 'D');

    const totalQuestions = 2;
    const correctCount = (isCorrect1?1:0) + (isCorrect2?1:0);
    const isCorrect = (correctCount === totalQuestions);

    const rightAnswer = "a) S; b) Đ";
    const studentAnswer = `a) ${val1 || '?'}; b) ${val2 || '?'}`;
    const guidance = metadata.bai_tap[1].guidance;
    const solution = metadata.bai_tap[1].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 2: Đúng (Đ), Sai (S) ?", isCorrect ? 100 : 0, 'btn-check-85-bt2', 0, totalQuestions, correctCount);
    }
};

window.check_85_bt3 = function() {
    const val1 = document.getElementById('inp-85-bt3-1').value.trim().replace(',', '.');

    const isCorrect = (val1 === '0.63');

    const rightAnswer = "0.63";
    const studentAnswer = `${val1 || '?'}`;
    const guidance = metadata.bai_tap[2].guidance;
    const solution = metadata.bai_tap[2].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 3: Sản lượng thóc trên thửa ruộng", isCorrect ? 100 : 0, 'btn-check-85-bt3', 0, 1, isCorrect ? 1 : 0);
    }
};

window.check_85_bt4 = function() {
    const radios = document.getElementsByName('rad-85-bt4');
    let selectedVal = '';
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedVal = radios[i].value;
            break;
        }
    }

    const isCorrect = (selectedVal === 'B');

    const rightAnswer = "B (10.28 m²)";
    const studentAnswer = `${selectedVal ? selectedVal : 'Chưa chọn option nào'}`;
    const guidance = metadata.bai_tap[3].guidance;
    const solution = metadata.bai_tap[3].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 4: Chọn câu trả lời đúng (Diện tích bồn hoa)", isCorrect ? 100 : 0, 'btn-check-85-bt4', 0, 1, isCorrect ? 1 : 0);
    }
};

export default lesson85;
