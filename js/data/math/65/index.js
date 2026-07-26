const metadata = {
    "lessonInfo": {
        "period": "65",
        "week": "13",
        "topic": "Hình học",
        "title": "BÀI 27: ĐƯỜNG TRÒN. CHU VI VÀ DIỆN TÍCH HÌNH TRÒN (TIẾT 2 - CHU VI HÌNH TRÒN)",
        "desc": "Học công thức tính chu vi hình tròn dựa trên đường kính hoặc bán kính và giải các bài toán thực tế liên quan."
    },
    "bai_tap": [
        {
            "id": "65_bt1",
            "type": "fill_multiple",
            "title": "Bài 1: Tính chu vi hình tròn theo đường kính d",
            "answers": ["21.98", "9.42", "31.4"],
            "guidance": "Áp dụng công thức tính chu vi hình tròn: C = 3,14 x d (với d là đường kính).<br>- Với d = 7 mm: C = 3,14 x 7.<br>- Với d = 3 cm: C = 3,14 x 3.<br>- Với d = 10 m: C = 3,14 x 10.",
            "solution": "- Với d = 7 mm: Chu vi là 3,14 x 7 = 21,98 (mm).<br>- Với d = 3 cm: Chu vi là 3,14 x 3 = 9,42 (cm).<br>- Với d = 10 m: Chu vi là 3,14 x 10 = 31,4 (m)."
        },
        {
            "id": "65_bt2",
            "type": "fill_multiple",
            "title": "Bài 2: Tính chu vi hình tròn theo bán kính r",
            "answers": ["31.4", "18.84", "25.12"],
            "guidance": "Áp dụng công thức tính chu vi hình tròn: C = 3,14 x r x 2 (với r là bán kính).<br>- Với r = 5 dm: C = 3,14 x 5 x 2.<br>- Với r = 3 m: C = 3,14 x 3 x 2.<br>- Với r = 4 km: C = 3,14 x 4 x 2.",
            "solution": "- Với r = 5 dm: Chu vi là 3,14 x 5 x 2 = 31,4 (dm).<br>- Với r = 3 m: Chu vi là 3,14 x 3 x 2 = 18,84 (m).<br>- Với r = 4 km: Chu vi là 3,14 x 4 x 2 = 25,12 (km)."
        },
        {
            "id": "65_bt3",
            "type": "fill_multiple",
            "title": "Bài 3: Tính chiều dài thanh tre uốn cạp rổ",
            "answers": ["329"],
            "guidance": "Bước 1: Tính chu vi cái cạp rổ hình tròn có bán kính r = 50 cm: C = 3,14 x 50 x 2.<br>Bước 2: Cộng thêm chiều dài phần hai đầu tre buộc vào nhau (15 cm).",
            "solution": "Chu vi của cái cạp rổ là:<br>3,14 x 50 x 2 = 314 (cm).<br>Chiều dài của thanh tre uốn thành cái cạp rổ là:<br>314 + 15 = 329 (cm)."
        }
    ],
    "quizPool": [
        { "question": "Công thức tính chu vi hình tròn theo đường kính d là:", "options": ["C = 3,14 x d", "C = 3,14 x d x 2", "C = 3,14 x d : 2", "C = d x d"], "answer": 0 },
        { "question": "Công thức tính chu vi hình tròn theo bán kính r là:", "options": ["C = 3,14 x r", "C = 3,14 x r x 2", "C = 3,14 x r x r", "C = r x 2"], "answer": 1 },
        { "question": "Một hình tròn có đường kính 4 cm thì chu vi của nó là:", "options": ["12.56 cm", "25.12 cm", "6.28 cm", "16 cm"], "answer": 0 },
        { "question": "Một hình tròn có bán kính 2 cm thì chu vi của nó là:", "options": ["6.28 cm", "12.56 cm", "4 cm", "12.56 cm²"], "answer": 1 },
        { "question": "Đường kính của hình tròn là 10 dm. Chu vi của hình tròn đó là:", "options": ["31.4 dm", "62.8 dm", "15.7 dm", "3.14 dm"], "answer": 0 },
        { "question": "Bán kính của hình tròn là 10 cm. Chu vi của hình tròn đó là:", "options": ["31.4 cm", "62.8 cm", "15.7 cm", "6.28 cm"], "answer": 1 },
        { "question": "Nếu đường kính của hình tròn tăng lên 2 lần thì chu vi của nó tăng mấy lần?", "options": ["2 lần", "4 lần", "3.14 lần", "không đổi"], "answer": 0 },
        { "question": "Nếu bán kính của hình tròn tăng lên 3 lần thì chu vi của nó tăng mấy lần?", "options": ["3 lần", "6 lần", "9 lần", "3.14 lần"], "answer": 0 },
        { "question": "Một cái bánh xe có đường kính 0,5 m. Chu vi của bánh xe đó là:", "options": ["1.57 m", "3.14 m", "0.785 m", "1.57 m²"], "answer": 0 },
        { "question": "Một biển báo hình tròn có bán kính 30 cm. Chu vi của biển báo đó là:", "options": ["94.2 cm", "188.4 cm", "18.84 cm", "94.2 cm²"], "answer": 1 },
        { "question": "Chu vi một hình tròn là 31,4 cm. Bán kính của hình tròn đó là:", "options": ["5 cm", "10 cm", "2.5 cm", "15.7 cm"], "answer": 0 },
        { "question": "Chu vi một hình tròn là 18,84 dm. Đường kính của hình tròn đó là:", "options": ["6 dm", "3 dm", "9.42 dm", "12 dm"], "answer": 0 },
        { "question": "Biết bánh xe đạp có bán kính là 32,5 cm. Bánh xe quay được một vòng thì đi được quãng đường dài bao nhiêu xăng-ti-mét?", "options": ["204.1 cm", "102.05 cm", "204.1 m", "65 cm"], "answer": 0 },
        { "question": "Cho số Pi bằng 3,14. Chu vi đường tròn có bán kính 0,25 m là:", "options": ["1.57 m", "0.785 m", "1.57 cm", "0.785 cm"], "answer": 0 },
        { "question": "Chu vi hình tròn có đường kính 20 dm bằng chu vi hình vuông có cạnh là bao nhiêu xăng-ti-mét?", "options": ["1570 cm", "15.7 cm", "157 cm", "157 dm"], "answer": 2 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson65 = {
    ...metadata.lessonInfo,
    metadata: metadata,
    quizPool: [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
                    
                    <!-- Slide 1: Khám phá lý thuyết Chu vi -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="space-y-6 max-w-4xl mx-auto">
                                <!-- Trực quan SGK -->
                                <div class="bg-white p-6 rounded-3xl border border-blue-100 shadow-md flex flex-col justify-center space-y-4">
                                    <div class="border-l-4 border-blue-600 pl-4 py-1">
                                        <h3 class="text-lg md:text-xl font-black text-blue-900">a) Khám phá bài học</h3>
                                    </div>
                                    <div class="flex justify-center">
                                        <img src="./assets/images/toan/toan_tap_1/65/kp.png" alt="Khám phá chu vi hình tròn" class="max-h-[350px] object-contain rounded-2xl">
                                    </div>
                                </div>

                                <!-- Định nghĩa & Công thức -->
                                <div class="bg-white p-6 rounded-3xl border border-blue-100 shadow-md flex flex-col justify-center space-y-6">
                                    <div class="border-l-4 border-blue-600 pl-4 py-1">
                                        <h3 class="text-lg md:text-xl font-black text-blue-900">Quy tắc & Công thức</h3>
                                    </div>
                                    
                                    <div class="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-3 font-semibold text-slate-700 text-sm md:text-base leading-relaxed">
                                        <p>💡 <strong>Quy tắc 1:</strong> Muốn tính chu vi hình tròn, ta lấy số <strong>3,14</strong> nhân với <strong>đường kính d</strong>.</p>
                                        <p class="text-center py-2"><span class="bg-blue-100 text-blue-800 font-black px-4 py-2 rounded-xl text-lg md:text-xl border border-blue-200">C = 3,14 × d</span></p>
                                        
                                        <hr class="border-slate-200 my-2">
                                        
                                        <p>💡 <strong>Quy tắc 2:</strong> Muốn tính chu vi hình tròn, ta lấy số <strong>3,14</strong> nhân với <strong>bán kính r</strong> rồi nhân với <strong>2</strong>.</p>
                                        <p class="text-center py-2"><span class="bg-emerald-100 text-emerald-800 font-black px-4 py-2 rounded-xl text-lg md:text-xl border border-emerald-200">C = 3,14 × r × 2</span></p>
                                    </div>

                                    <div class="text-xs font-bold text-slate-500 space-y-1">
                                        <p>• <strong>C:</strong> Chu vi hình tròn</p>
                                        <p>• <strong>d:</strong> Đường kính hình tròn</p>
                                        <p>• <strong>r:</strong> Bán kính hình tròn</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Ví dụ minh họa -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <!-- Banner -->
                            <div class="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-6 rounded-[2.5rem] shadow-lg">
                                <span class="text-sm font-black uppercase tracking-wider opacity-90">Lý thuyết thực hành</span>
                                <h2 class="text-2xl md:text-4xl font-black mt-1">VÍ DỤ BÀI HỌC</h2>
                            </div>

                            <div class="space-y-6 max-w-3xl mx-auto">
                                <!-- Ví dụ 1 -->
                                <div class="bg-white p-6 rounded-3xl border border-emerald-100 shadow-md space-y-4">
                                    <div class="flex items-center gap-3">
                                        <div class="bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl">1</div>
                                        <h3 class="text-lg md:text-xl font-black text-slate-800">Ví dụ 1: Tính chu vi khi biết đường kính d</h3>
                                    </div>
                                    <div class="p-4 bg-slate-50 rounded-2xl border border-slate-100 font-bold text-slate-700 leading-relaxed space-y-2">
                                        <p class="text-sm text-slate-500"></p>
                                        <p>Tính chu vi hình tròn có đường kính d = 2 dm.</p>
                                        <p class="text-sm text-slate-500">Bài giải:</p>
                                        <p class="text-emerald-700">Chu vi hình tròn đường kính 2 dm là:<br>3,14 × 2 = 6,28 (dm)</p>
                                    </div>
                                </div>

                                <!-- Ví dụ 2 -->
                                <div class="bg-white p-6 rounded-3xl border border-emerald-100 shadow-md space-y-4">
                                    <div class="flex items-center gap-3">
                                        <div class="bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl">2</div>
                                        <h3 class="text-lg md:text-xl font-black text-slate-800">Ví dụ 2: Tính chu vi khi biết bán kính r</h3>
                                    </div>
                                    <div class="p-4 bg-slate-50 rounded-2xl border border-slate-100 font-bold text-slate-700 leading-relaxed space-y-2">
                                        <p class="text-sm text-slate-500"></p>
                                        <p>Tính chu vi hình tròn có bán kính r = 5 m.</p>
                                        <p class="text-sm text-slate-500">Bài giải:</p>
                                        <p class="text-emerald-700">Chu vi hình tròn bán kính 5 m là:<br>3,14 × 5 × 2 = 31,4 (m)</p>
                                    </div>
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
                    
                    <!-- Bài 1: Tính chu vi theo đường kính d -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">1</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Hoàn thành bảng tính Chu vi (theo đường kính d)</h3>
                                </div>
                            </div>

                            <div class="bg-white p-4 rounded-3xl border border-slate-200 overflow-x-auto shadow-sm">
                                <table class="w-full min-w-[500px] border-collapse text-sm md:text-base font-bold text-slate-700">
                                    <thead>
                                        <tr class="bg-slate-50 border-b border-slate-200">
                                            <th class="p-3 text-left w-1/3">Đường kính hình tròn (d)</th>
                                            <th class="p-3 text-center">6 dm (Mẫu)</th>
                                            <th class="p-3 text-center">7 mm</th>
                                            <th class="p-3 text-center">3 cm</th>
                                            <th class="p-3 text-center">10 m</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="p-4 border-t border-slate-100">Chu vi hình tròn (C)</td>
                                            <td class="p-4 border-t border-slate-100 text-center text-slate-400 text-xs md:text-sm">3,14 × 6 = 18,84 (dm)</td>
                                            <td class="p-4 border-t border-slate-100 text-center">
                                                <div class="flex flex-nowrap items-center justify-center gap-1">
                                                    <input type="text" id="inp-65-bt1-1" class="w-20 text-center p-2 text-lg font-black border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                    <span class="text-xs text-slate-500">mm</span>
                                                </div>
                                            </td>
                                            <td class="p-4 border-t border-slate-100 text-center">
                                                <div class="flex flex-nowrap items-center justify-center gap-1">
                                                    <input type="text" id="inp-65-bt1-2" class="w-20 text-center p-2 text-lg font-black border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                    <span class="text-xs text-slate-500">cm</span>
                                                </div>
                                            </td>
                                            <td class="p-4 border-t border-slate-100 text-center">
                                                <div class="flex flex-nowrap items-center justify-center gap-1">
                                                    <input type="text" id="inp-65-bt1-3" class="w-20 text-center p-2 text-lg font-black border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                    <span class="text-xs text-slate-500">m</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-65-bt1')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-65-bt1" onclick="window.check_65_bt1()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-65-bt1" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 1:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    a) Chu vi hình tròn đường kính 7 mm là:<br>3,14 × 7 = 21,98 (mm).<br>
                                    b) Chu vi hình tròn đường kính 3 cm là:<br>3,14 × 3 = 9,42 (cm).<br>
                                    c) Chu vi hình tròn đường kính 10 m là:<br>3,14 × 10 = 31,4 (m).
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 2: Tính chu vi theo bán kính r -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">2</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 2. Hoàn thành bảng tính Chu vi (theo bán kính r)</h3>
                                </div>
                            </div>

                            <div class="bg-white p-4 rounded-3xl border border-slate-200 overflow-x-auto shadow-sm">
                                <table class="w-full min-w-[500px] border-collapse text-sm md:text-base font-bold text-slate-700">
                                    <thead>
                                        <tr class="bg-slate-50 border-b border-slate-200">
                                            <th class="p-3 text-left w-1/3">Bán kính hình tròn (r)</th>
                                            <th class="p-3 text-center">5 cm (Mẫu)</th>
                                            <th class="p-3 text-center">5 dm</th>
                                            <th class="p-3 text-center">3 m</th>
                                            <th class="p-3 text-center">4 km</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="p-4 border-t border-slate-100">Chu vi hình tròn (C)</td>
                                            <td class="p-4 border-t border-slate-100 text-center text-slate-400 text-xs md:text-sm">3,14 × 5 × 2 = 31,4 (cm)</td>
                                            <td class="p-4 border-t border-slate-100 text-center">
                                                <div class="flex flex-nowrap items-center justify-center gap-1">
                                                    <input type="text" id="inp-65-bt2-1" class="w-20 text-center p-2 text-lg font-black border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                    <span class="text-xs text-slate-500">dm</span>
                                                </div>
                                            </td>
                                            <td class="p-4 border-t border-slate-100 text-center">
                                                <div class="flex flex-nowrap items-center justify-center gap-1">
                                                    <input type="text" id="inp-65-bt2-2" class="w-20 text-center p-2 text-lg font-black border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                    <span class="text-xs text-slate-500">m</span>
                                                </div>
                                            </td>
                                            <td class="p-4 border-t border-slate-100 text-center">
                                                <div class="flex flex-nowrap items-center justify-center gap-1">
                                                    <input type="text" id="inp-65-bt2-3" class="w-20 text-center p-2 text-lg font-black border-2 border-slate-350 rounded-xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                    <span class="text-xs text-slate-500">km</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-65-bt2')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-65-bt2" onclick="window.check_65_bt2()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-65-bt2" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 2:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    a) Chu vi hình tròn bán kính 5 dm là:<br>3,14 × 5 × 2 = 31,4 (dm).<br>
                                    b) Chu vi hình tròn bán kính 3 m là:<br>3,14 × 3 × 2 = 18,84 (m).<br>
                                    c) Chu vi hình tròn bán kính 4 km là:<br>3,14 × 4 × 2 = 25,12 (km).
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 3: Cái cạp rổ và thanh tre -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">3</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 3. Chiều dài thanh tre uốn cạp rổ</h3>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                                    <p class="text-sm md:text-base font-bold text-slate-600 leading-relaxed">
                                        Biết chiều dài phần hai đầu tre buộc vào nhau của cái cạp rổ là <strong>15 cm</strong> (như hình minh họa). Bán kính cạp rổ là <strong>50 cm</strong>.
                                    </p>
                                    <p class="text-sm md:text-base font-bold text-slate-600 leading-relaxed">
                                        Chiều dài của thanh tre uốn thành cái cạp rổ là:
                                    </p>
                                    <div class="flex items-center gap-2">
                                        <input type="text" id="inp-65-bt3-1" class="w-32 text-center p-3 text-xl font-black border-2 border-slate-350 rounded-2xl focus:border-blue-500 focus:outline-none" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 48px !important;" placeholder="">
                                        <span class="text-lg font-black text-slate-600">cm</span>
                                    </div>
                                </div>

                                <div class="flex flex-col items-center">
                                    <img src="./assets/images/toan/toan_tap_1/65/3.png" alt="Mô hình cái cạp rổ" class="max-h-56 object-contain rounded-2xl">
                                    <span class="text-xs text-slate-400 font-bold mt-2">Cạp rổ bán kính 50 cm, buộc đè 15 cm</span>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-65-bt3')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-65-bt3" onclick="window.check_65_bt3()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-65-bt3" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 3:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    Chu vi cái cạp rổ là:<br>
                                    3,14 × 50 × 2 = 314 (cm).<br>
                                    Chiều dài của thanh tre uốn thành cái cạp rổ đó là:<br>
                                    314 + 15 = 329 (cm).
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `
};

window.lesson65 = lesson65;

// --- HÀM KIỂM TRA ĐÁP ÁN TIẾT 65 ---
window.check_65_bt1 = function() {
    const val1 = document.getElementById('inp-65-bt1-1').value.trim().replace(',', '.');
    const val2 = document.getElementById('inp-65-bt1-2').value.trim().replace(',', '.');
    const val3 = document.getElementById('inp-65-bt1-3').value.trim().replace(',', '.');

    const isCorrect1 = (val1 === "21.98" || val1 === "21,98");
    const isCorrect2 = (val2 === "9.42" || val2 === "9,42");
    const isCorrect3 = (val3 === "31.4" || val3 === "31,4");

    const isCorrect = isCorrect1 && isCorrect2 && isCorrect3;

    const rightAnswer = "a) 21.98; b) 9.42; c) 31.4";
    const studentAnswer = `a) ${val1 || '?'}; b) ${val2 || '?'}; c) ${val3 || '?'}`;
    const guidance = metadata.bai_tap[0].guidance;
    const solution = metadata.bai_tap[0].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 1: Tính chu vi hình tròn theo đường kính d", isCorrect ? 100 : 0, 'btn-check-65-bt1', 0, 3, (isCorrect1?1:0) + (isCorrect2?1:0) + (isCorrect3?1:0));
    }
};

window.check_65_bt2 = function() {
    const val1 = document.getElementById('inp-65-bt2-1').value.trim().replace(',', '.');
    const val2 = document.getElementById('inp-65-bt2-2').value.trim().replace(',', '.');
    const val3 = document.getElementById('inp-65-bt2-3').value.trim().replace(',', '.');

    const isCorrect1 = (val1 === "31.4" || val1 === "31,4");
    const isCorrect2 = (val2 === "18.84" || val2 === "18,84");
    const isCorrect3 = (val3 === "25.12" || val3 === "25,12");

    const isCorrect = isCorrect1 && isCorrect2 && isCorrect3;

    const rightAnswer = "a) 31.4; b) 18.84; c) 25.12";
    const studentAnswer = `a) ${val1 || '?'}; b) ${val2 || '?'}; c) ${val3 || '?'}`;
    const guidance = metadata.bai_tap[1].guidance;
    const solution = metadata.bai_tap[1].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 2: Tính chu vi hình tròn theo bán kính r", isCorrect ? 100 : 0, 'btn-check-65-bt2', 0, 3, (isCorrect1?1:0) + (isCorrect2?1:0) + (isCorrect3?1:0));
    }
};

window.check_65_bt3 = function() {
    const val = document.getElementById('inp-65-bt3-1').value.trim().replace(',', '.');
    const isCorrect = (val === "329");

    const rightAnswer = "329";
    const studentAnswer = val || '?';
    const guidance = metadata.bai_tap[2].guidance;
    const solution = metadata.bai_tap[2].solution;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 3: Tính chiều dài thanh tre uốn cạp rổ", isCorrect ? 100 : 0, 'btn-check-65-bt3', 0, 1, isCorrect ? 1 : 0);
    }
};

export default lesson65;
