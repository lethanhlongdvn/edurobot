const metadata = {
    "lessonInfo": {
        "period": "55",
        "week": "11",
        "topic": "Số thập phân",
        "title": "BÀI 24: LUYỆN TẬP CHUNG (TIẾT 3)",
        "desc": "Luyện tập tổng hợp: tìm số chưa biết, hoàn thành bảng số liệu lượng mưa trung bình, tính chu vi hình chữ nhật, bài toán diện tích và giải toán thực tế."
    },
    "bai_tap": [
        {
            "id": "55_bt1",
            "type": "fill_multiple",
            "title": "Bài 1: Số ?",
            "answers": ["23,67", "81,092"],
            "guidance": "a) Muốn tìm số hạng chưa biết, hãy lấy tổng trừ đi số hạng đã biết.<br>b) Muốn tìm số bị chia, hãy lấy thương nhân với số chia.",
            "solution": "a) 51,23 + ? = 74,9<br>? = 74,9 − 51,23<br>? = 23,67<br>b) ? : 3,8 = 21,34<br>? = 21,34 × 3,8<br>? = 81,092<br>Giỏi lắm các con! Đã tìm đúng các số chưa biết rồi!"
        },
        {
            "id": "55_bt2",
            "type": "fill_multiple",
            "title": "Bài 2: Hoàn thành bảng sau (theo mẫu)",
            "answers": ["15,6", "26"],
            "guidance": "Lượng mưa trung bình được tính bằng cách cộng ba lần đo rồi chia cho 3.<br>Hãy thực hiện phép cộng cẩn thận rồi chia nhé!",
            "solution": "Tháng Hai: (15,6 + 18,9 + 12,3) : 3 = 46,8 : 3 = 15,6 (mm)<br>Tháng Ba: (23,5 + 32,7 + 21,8) : 3 = 78 : 3 = 26 (mm)<br>Tuyệt vời! Các con đã tính trung bình cộng chính xác!"
        },
        {
            "id": "55_bt3",
            "type": "fill_multiple",
            "title": "Bài 3: Tính chu vi khu vườn",
            "answers": ["9,6", "36,6"],
            "guidance": "Bước 1: Tìm chiều dài bằng cách lấy diện tích chia cho chiều rộng.<br>Bước 2: Áp dụng công thức tính chu vi hình chữ nhật.",
            "solution": "Chiều dài khu vườn là:<br>83,52 : 8,7 = 9,6 (m)<br>Chu vi khu vườn là:<br>(9,6 + 8,7) × 2 = 36,6 (m)<br>Đáp số: 36,6 m<br>Xuất sắc! Các con đã giải đúng bài toán rồi!"
        },
        {
            "id": "55_bt4a",
            "type": "multiple_choice",
            "title": "Bài 4a: Chọn hình đúng",
            "options": ["Hình A", "Hình B", "Hình C"],
            "answer": 1,
            "guidance": "Hãy quan sát kỹ từng hình vẽ. Phần màu xanh phải chiếm đúng một nửa diện tích mảnh đất hình chữ nhật.",
            "solution": "Đáp án: Hình B<br>Phần đất tô màu xanh trong hình B chiếm đúng một nửa diện tích mảnh đất hình chữ nhật 40,4 m × 30 m.<br>Giỏi lắm!"
        },
        {
            "id": "55_bt4b",
            "type": "true_false",
            "title": "Bài 4b: Đ hay S?",
            "statement": "Diện tích của nhà máy lớn hơn 1/100 ha.",
            "answer": true,
            "guidance": "Hãy tính diện tích nhà máy (bằng một nửa diện tích mảnh đất), rồi đổi ra héc-ta để so sánh với 1/100 ha.",
            "solution": "Diện tích mảnh đất: 40,4 × 30 = 1 212 (m²)<br>Diện tích nhà máy: 1 212 : 2 = 606 (m²)<br>1/100 ha = 100 m²<br>Vì 606 > 100 nên Đ (Đúng).<br>Chính xác!"
        },
        {
            "id": "55_bt5",
            "type": "multiple_choice",
            "title": "Bài 5: Chọn câu trả lời đúng",
            "options": ["A. 142,5 g", "B. 74,1 g", "C. 79,8 g"],
            "answer": 2,
            "guidance": "Bước 1: Tính tổng cân nặng của tất cả 25 quả bóng.<br>Bước 2: Trừ đi phần tăng thêm của hộp xanh để tìm phần tăng của hộp đỏ.",
            "solution": "Tổng cân nặng 25 quả bóng:<br>25 × 5,7 = 142,5 (g)<br>Cân nặng hộp đỏ tăng thêm:<br>142,5 − 62,7 = 79,8 (g)<br>Đáp số: C. 79,8 g<br>Tuyệt vời! Các con đã giải rất đúng!"
        }
    ],
    "quizPool": [
        { "question": "51,23 + 23,67 bằng bao nhiêu?", "options": ["74,9", "75,9", "73,9", "74"], "answer": 0 },
        { "question": "Tìm x biết: x : 3,8 = 21,34. Giá trị x là:", "options": ["81,092", "80,092", "82,092", "81,902"], "answer": 0 },
        { "question": "Trung bình cộng của 15,6 ; 18,9 và 12,3 là:", "options": ["15,6", "15,9", "16,6", "14,6"], "answer": 0 },
        { "question": "Trung bình cộng của 23,5 ; 32,7 và 21,8 là:", "options": ["26", "25", "27", "24"], "answer": 0 },
        { "question": "Một HCN có diện tích 83,52 m² và chiều rộng 8,7 m. Chiều dài HCN là:", "options": ["9,6 m", "9,7 m", "9,5 m", "10 m"], "answer": 0 },
        { "question": "Chu vi HCN có chiều dài 9,6 m và chiều rộng 8,7 m là:", "options": ["36,6 m", "35,6 m", "37,6 m", "83,52 m"], "answer": 0 },
        { "question": "Diện tích mảnh đất HCN có chiều dài 40,4 m và chiều rộng 30 m là:", "options": ["1 212 m²", "1 200 m²", "1 312 m²", "1 112 m²"], "answer": 0 },
        { "question": "Một nửa của 1 212 m² là:", "options": ["606 m²", "600 m²", "660 m²", "650 m²"], "answer": 0 },
        { "question": "1/100 ha bằng bao nhiêu m²?", "options": ["100 m²", "10 m²", "1 000 m²", "1 m²"], "answer": 0 },
        { "question": "25 quả bóng, mỗi quả nặng 5,7 g. Tổng khối lượng là:", "options": ["142,5 g", "141,5 g", "143,5 g", "140 g"], "answer": 0 },
        { "question": "142,5 − 62,7 bằng bao nhiêu?", "options": ["79,8", "80,8", "78,8", "79,2"], "answer": 0 },
        { "question": "Tìm x biết: 51,23 + x = 74,9. Giá trị x là:", "options": ["23,67", "24,67", "22,67", "23,57"], "answer": 0 },
        { "question": "Muốn tìm số bị chia, ta lấy:", "options": ["Thương nhân với số chia", "Thương chia cho số chia", "Tích trừ đi một thừa số", "Tổng trừ đi một số hạng"], "answer": 0 },
        { "question": "Muốn tìm số hạng chưa biết, ta lấy:", "options": ["Tổng trừ đi số hạng đã biết", "Tổng cộng với số hạng đã biết", "Hiệu nhân với số trừ", "Thương chia cho số chia"], "answer": 0 },
        { "question": "Trung bình cộng của 15,4 ; 22,1 và 12 là:", "options": ["16,5", "15,5", "17,5", "16"], "answer": 0 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson55 = {
    ...metadata.lessonInfo,
    metadata: metadata,
    quizPool: [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" style="display:flex; transition:transform 0.45s cubic-bezier(0.4,0,0.2,1);">  

                    <!-- Slide 1: Lý thuyết củng cố -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <!-- Banner chính -->
                            

                            <!-- Khối Lý thuyết bổ trợ -->
                            <div class="p-8 rounded-[2.5rem] bg-white border-2 border-blue-700 relative overflow-hidden shadow-none">
                                <div class="flex items-center gap-4 mb-6">
                                    <div class="w-12 h-12 bg-blue-700 rounded-2xl flex items-center justify-center text-white text-xl md:text-3xl shadow-lg">
                                        <i class="fas fa-book-open"></i>
                                    </div>
                                    <h3 class="text-2xl md:text-4xl font-black text-blue-900">Bí kíp giải toán lớp 5</h3>
                                </div>

                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg lg:text-xl font-bold">
                                    <div class="p-6 bg-slate-50 border-2 border-blue-700 rounded-3xl space-y-3">
                                        <div class="text-blue-900 font-black border-b-2 border-blue-100 pb-2">🔍 Tìm thành phần chưa biết</div>
                                        <ul class="list-disc pl-5 space-y-1 text-slate-700">
                                            <li>Tìm số hạng: Tổng − Số hạng đã biết</li>
                                            <li>Tìm số bị chia: Thương × Số chia</li>
                                        </ul>
                                    </div>

                                    <div class="p-6 bg-slate-50 border-2 border-blue-700 rounded-3xl space-y-3">
                                        <div class="text-blue-900 font-black border-b-2 border-blue-100 pb-2">📊 Trung bình cộng & Đo lường</div>
                                        <ul class="list-disc pl-5 space-y-1 text-slate-700">
                                            <li>Trung bình cộng: Tổng các số chia cho số lượng số hạng</li>
                                            <li>Diện tích HCN: Chiều dài × Chiều rộng</li>
                                            <li>Quy đổi đơn vị: \(1\text{ ha} = 10\ 000\text{ m}^2\)</li>
                                        </ul>
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
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12 text-xl md:text-3xl">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" style="display:flex; transition:transform 0.45s cubic-bezier(0.4,0,0.2,1);">  

                    <!-- Slide 1: Bài 1 (Số ?) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-6 w-full">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">1</div>
                                <h3 class="text-lg md:text-2xl lg:text-3xl text-blue-900 font-black uppercase tracking-tighter">Bài 1. Số ?</h3>
                            </div>

                            <div class="flex flex-col gap-6 w-full">
                                <!-- Câu a -->
                                <div class="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] space-y-4 w-full">
                                    <p class="font-bold text-slate-700 text-xl md:text-2xl lg:text-3xl leading-relaxed">
                                        a) <span class="text-blue-700 font-black">51,23 + ? = 74,9</span>
                                    </p>
                                    <div class="flex items-center gap-4 flex-nowrap whitespace-nowrap overflow-x-auto font-black w-full">
                                        <span class="text-xl md:text-3xl text-slate-800">Số cần tìm =</span>
                                        <input type="text" id="ans-55-bt1-a" class="w-40 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 bg-white outline-none focus:border-blue-600" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                    </div>
                                </div>

                                <!-- Câu b -->
                                <div class="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] space-y-4 w-full">
                                    <p class="font-bold text-slate-700 text-xl md:text-2xl lg:text-3xl leading-relaxed">
                                        b) <span class="text-blue-700 font-black">? : 3,8 = 21,34</span>
                                    </p>
                                    <div class="flex items-center gap-4 flex-nowrap whitespace-nowrap overflow-x-auto font-black w-full">
                                        <span class="text-xl md:text-3xl text-slate-800">Số cần tìm =</span>
                                        <input type="text" id="ans-55-bt1-b" class="w-40 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 bg-white outline-none focus:border-blue-600" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end mt-4">
                                <button id="btn-check-55-bt1" onclick="window.check_55_bt1()" class="w-16 h-16 bg-blue-600 border-2 border-blue-700 text-white rounded-[1.25rem] font-black text-2xl md:text-4xl flex items-center justify-center hover:bg-blue-700 transition-all active:scale-95">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 (Bảng lượng mưa) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-6 w-full">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">2</div>
                                <h3 class="text-lg md:text-2xl lg:text-3xl text-blue-900 font-black uppercase tracking-tighter">Bài 2. Hoàn thành bảng số liệu</h3>
                            </div>

                            <div class="overflow-x-auto rounded-3xl border-2 border-slate-200 w-full">
                                <table class="w-full border-collapse text-base md:text-xl font-bold text-slate-800 min-w-[600px]">
                                    <thead>
                                        <tr class="bg-blue-600 text-white">
                                            <th class="px-4 py-4 text-center"></th>
                                            <th class="px-4 py-4 text-center border-l border-blue-500">Đo lần 1</th>
                                            <th class="px-4 py-4 text-center border-l border-blue-500">Đo lần 2</th>
                                            <th class="px-4 py-4 text-center border-l border-blue-500">Đo lần 3</th>
                                            <th class="px-4 py-4 text-center border-l border-blue-500">Lượng mưa trung bình</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-emerald-50 border-t border-slate-200">
                                            <td class="px-4 py-4 text-center font-black text-emerald-700">Tháng Một</td>
                                            <td class="px-4 py-4 text-center border-l border-slate-200">15,4 mm</td>
                                            <td class="px-4 py-4 text-center border-l border-slate-200">22,1 mm</td>
                                            <td class="px-4 py-4 text-center border-l border-slate-200">12 mm</td>
                                            <td class="px-4 py-4 text-center border-l border-slate-200 text-emerald-700 font-black">16,5 mm ✅</td>
                                        </tr>
                                        <tr class="bg-white border-t border-slate-200">
                                            <td class="px-4 py-4 text-center font-black text-blue-700">Tháng Hai</td>
                                            <td class="px-4 py-4 text-center border-l border-slate-200">15,6 mm</td>
                                            <td class="px-4 py-4 text-center border-l border-slate-200">18,9 mm</td>
                                            <td class="px-4 py-4 text-center border-l border-slate-200">12,3 mm</td>
                                            <td class="px-4 py-4 text-center border-l border-slate-200">
                                                <div class="flex items-center justify-center gap-2 flex-nowrap whitespace-nowrap">
                                                    <input type="text" id="ans-55-bt2-t2" class="w-24 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 bg-white outline-none focus:border-blue-600" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                    <span class="text-base md:text-xl text-slate-800">mm</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="bg-slate-50 border-t border-slate-200">
                                            <td class="px-4 py-4 text-center font-black text-blue-700">Tháng Ba</td>
                                            <td class="px-4 py-4 text-center border-l border-slate-200">23,5 mm</td>
                                            <td class="px-4 py-4 text-center border-l border-slate-200">32,7 mm</td>
                                            <td class="px-4 py-4 text-center border-l border-slate-200">21,8 mm</td>
                                            <td class="px-4 py-4 text-center border-l border-slate-200">
                                                <div class="flex items-center justify-center gap-2 flex-nowrap whitespace-nowrap">
                                                    <input type="text" id="ans-55-bt2-t3" class="w-24 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 bg-white outline-none focus:border-blue-600" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                    <span class="text-base md:text-xl text-slate-800">mm</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="flex justify-end mt-4">
                                <button id="btn-check-55-bt2" onclick="window.check_55_bt2()" class="w-16 h-16 bg-blue-600 border-2 border-blue-700 text-white rounded-[1.25rem] font-black text-2xl md:text-4xl flex items-center justify-center hover:bg-blue-700 transition-all active:scale-95">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 (Tính chu vi khu vườn) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-6 w-full">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">3</div>
                                    <h3 class="text-lg md:text-2xl lg:text-3xl text-blue-900 font-black uppercase tracking-tighter">Bài 3. Chu vi khu vườn</h3>
                                </div>
                                <button id="btn-toggle-55-3" onclick="window.toggle_55_3_sol()" class="bg-amber-500 text-white text-base md:text-lg font-black px-4 py-2 rounded-2xl hover:bg-amber-600 transition-all shadow-md">Hiện bài giải</button>
                            </div>

                            <!-- Lời giải che lại cho giáo viên -->
                            <div id="sol-55-3-container" class="hidden p-6 bg-amber-50 border-2 border-amber-500 rounded-[2rem] space-y-2 mb-4 text-lg font-bold text-amber-900 animate-in fade-in duration-350 w-full">
                                <div class="underline text-xl font-black">Bài giải chi tiết:</div>
                                <p>Chiều dài khu vườn là:</p>
                                <p class="text-2xl md:text-3xl font-black text-amber-800">&nbsp;&nbsp;83,52 : 8,7 = 9,6 (m)</p>
                                <p>Chu vi khu vườn là:</p>
                                <p class="text-2xl md:text-3xl font-black text-amber-800">&nbsp;&nbsp;(9,6 + 8,7) × 2 = 36,6 (m)</p>
                                <p>Đáp số: 36,6 m.</p>
                            </div>

                            <div class="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] space-y-6 w-full">
                                <p class="font-bold text-slate-700 text-xl md:text-2xl lg:text-3xl leading-relaxed">
                                    Khu vườn trồng cây ăn quả dạng hình chữ nhật có diện tích <span class="text-blue-600">83,52 m²</span> và chiều rộng <span class="text-blue-600">8,7 m</span>. Hỏi chu vi khu vườn đó là bao nhiêu mét?
                                </p>

                                <div class="space-y-4">
                                    <div class="flex items-center gap-4 flex-nowrap whitespace-nowrap overflow-x-auto font-black w-full">
                                        <span class="text-xl md:text-2xl text-slate-800">Chiều dài =</span>
                                        <input type="text" id="ans-55-bt3-dai" class="w-40 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 bg-white outline-none focus:border-blue-600" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                        <span class="text-xl md:text-2xl text-slate-800">m</span>
                                    </div>

                                    <div class="flex items-center gap-4 flex-nowrap whitespace-nowrap overflow-x-auto font-black w-full">
                                        <span class="text-xl md:text-2xl text-slate-800">Chu vi =</span>
                                        <input type="text" id="ans-55-bt3-cv" class="w-40 h-12 border-2 border-blue-300 rounded-xl text-center text-blue-700 bg-white outline-none focus:border-blue-600" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                        <span class="text-xl md:text-2xl text-slate-800">m</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end mt-4">
                                <button id="btn-check-55-bt3" onclick="window.check_55_bt3()" class="w-16 h-16 bg-blue-600 border-2 border-blue-700 text-white rounded-[1.25rem] font-black text-2xl md:text-4xl flex items-center justify-center hover:bg-blue-700 transition-all active:scale-95">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Bài 4 (Mảnh đất xây nhà máy) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-6 w-full">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">4</div>
                                <h3 class="text-lg md:text-2xl lg:text-3xl text-blue-900 font-black uppercase tracking-tighter">Bài 4. Đất xây nhà máy</h3>
                            </div>

                            <div class="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] space-y-6 w-full">
                                <p class="font-bold text-slate-700 text-xl md:text-2xl lg:text-3xl leading-relaxed">
                                    Ông Sơn Hà sử dụng một nửa diện tích mảnh đất dạng hình chữ nhật để xây một nhà máy sản xuất rô-bốt.
                                </p>

                                <!-- Phần a: Chọn hình -->
                                <div class="space-y-4 w-full">
                                    <p class="text-slate-800 text-lg md:text-2xl font-black">a) Biết phần đất để xây nhà máy được tô màu xanh trong hình vẽ. Hỏi phần đất đó ở hình nào dưới đây?</p>
                                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                                        <!-- Hình A -->
                                        <div class="flex flex-col items-center gap-2">
                                            <span class="font-black text-lg md:text-xl text-slate-700">Hình A</span>
                                            <button id="btn-55-bt4a-A" onclick="window.select_55_bt4a('A')" class="p-3 border-2 border-slate-350 rounded-2xl bg-white shadow hover:border-blue-500 transition-all w-full">
                                                <svg viewBox="0 0 200 150" class="w-full h-auto">
                                                    <text x="100" y="15" font-size="10" text-anchor="middle" fill="#475569" font-weight="bold">40,4 m</text>
                                                    <rect x="15" y="22" width="170" height="110" fill="none" stroke="#475569" stroke-width="2"/>
                                                    <rect x="15" y="22" width="85" height="110" fill="#22c55e" opacity="0.45"/>
                                                    <text x="190" y="77" font-size="10" text-anchor="start" fill="#475569" font-weight="bold" transform="rotate(90 190 77)">30 m</text>
                                                </svg>
                                            </button>
                                        </div>

                                        <!-- Hình B -->
                                        <div class="flex flex-col items-center gap-2">
                                            <span class="font-black text-lg md:text-xl text-slate-700">Hình B</span>
                                            <button id="btn-55-bt4a-B" onclick="window.select_55_bt4a('B')" class="p-3 border-2 border-slate-355 rounded-2xl bg-white shadow hover:border-blue-500 transition-all w-full">
                                                <svg viewBox="0 0 200 150" class="w-full h-auto">
                                                    <text x="100" y="15" font-size="10" text-anchor="middle" fill="#475569" font-weight="bold">40,4 m</text>
                                                    <rect x="15" y="22" width="170" height="110" fill="none" stroke="#475569" stroke-width="2"/>
                                                    <rect x="15" y="22" width="170" height="55" fill="#22c55e" opacity="0.45"/>
                                                    <text x="190" y="77" font-size="10" text-anchor="start" fill="#475569" font-weight="bold" transform="rotate(90 190 77)">30 m</text>
                                                </svg>
                                            </button>
                                        </div>

                                        <!-- Hình C -->
                                        <div class="flex flex-col items-center gap-2">
                                            <span class="font-black text-lg md:text-xl text-slate-700">Hình C</span>
                                            <button id="btn-55-bt4a-C" onclick="window.select_55_bt4a('C')" class="p-3 border-2 border-slate-360 rounded-2xl bg-white shadow hover:border-blue-500 transition-all w-full">
                                                <svg viewBox="0 0 200 150" class="w-full h-auto">
                                                    <text x="100" y="15" font-size="10" text-anchor="middle" fill="#475569" font-weight="bold">40,4 m</text>
                                                    <rect x="15" y="22" width="170" height="110" fill="none" stroke="#475569" stroke-width="2"/>
                                                    <rect x="15" y="22" width="85" height="55" fill="#22c55e" opacity="0.45"/>
                                                    <rect x="100" y="77" width="85" height="55" fill="#22c55e" opacity="0.45"/>
                                                    <text x="190" y="77" font-size="10" text-anchor="start" fill="#475569" font-weight="bold" transform="rotate(90 190 77)">30 m</text>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="flex justify-end pt-1">
                                        <button id="btn-check-55-bt4a" onclick="window.check_55_bt4a()" class="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                                    </div>
                                </div>

                                <span class="border-b-2 border-slate-200 block my-4"></span>

                                <!-- Phần b: Đ hay S -->
                                <div class="space-y-4 w-full">
                                    <p class="text-slate-800 text-lg md:text-2xl font-black">b) Đúng hay Sai?</p>
                                    <div class="p-4 bg-white rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 font-black w-full">
                                        <span class="text-lg md:text-xl text-slate-850">Diện tích của nhà máy lớn hơn 1/100 ha.</span>
                                        <div class="flex gap-4">
                                            <button id="btn-55-bt4b-D" onclick="window.select_55_bt4b('D')" class="w-16 h-12 text-lg md:text-xl font-black rounded-xl border-2 border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-all shadow-sm">Đ</button>
                                            <button id="btn-55-bt4b-S" onclick="window.select_55_bt4b('S')" class="w-16 h-12 text-lg md:text-xl font-black rounded-xl border-2 border-rose-300 bg-rose-50 text-rose-700 hover:bg-rose-100 transition-all shadow-sm">S</button>
                                        </div>
                                    </div>
                                    <div class="flex justify-end pt-1">
                                        <button id="btn-check-55-bt4b" onclick="window.check_55_bt4b()" class="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 5: Bài 5 (Bài toán hộp bóng) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-6 w-full">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">5</div>
                                <h3 class="text-lg md:text-2xl lg:text-3xl text-blue-900 font-black uppercase tracking-tighter">Bài 5. Bài toán hộp bóng</h3>
                            </div>

                            <div class="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] space-y-6 w-full">
                                <p class="font-bold text-slate-700 text-xl md:text-2xl lg:text-3xl leading-relaxed">
                                    Bạn Tú có <span class="text-blue-600">25 quả bóng</span>, mỗi quả nặng <span class="text-blue-600">5,7 g</span>. Tú bỏ tất cả số bóng đó vào chiếc hộp xanh và chiếc hộp đỏ. Khi đó, Tú nhận thấy cân nặng của hộp xanh tăng thêm <span class="text-blue-600">62,7 g</span>. Hỏi cân nặng của hộp màu đỏ tăng thêm bao nhiêu gam?
                                </p>

                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                                    <button id="btn-55-bt5-A" onclick="window.select_55_bt5('A')" class="p-4 text-lg md:text-xl lg:text-2xl font-black rounded-2xl border-2 border-slate-300 bg-white text-slate-800 hover:border-blue-400 hover:bg-blue-50 transition-all shadow text-center">A. 142,5 g</button>
                                    <button id="btn-55-bt5-B" onclick="window.select_55_bt5('B')" class="p-4 text-lg md:text-xl lg:text-2xl font-black rounded-2xl border-2 border-slate-300 bg-white text-slate-800 hover:border-blue-400 hover:bg-blue-50 transition-all shadow text-center">B. 74,1 g</button>
                                    <button id="btn-55-bt5-C" onclick="window.select_55_bt5('C')" class="p-4 text-lg md:text-xl lg:text-2xl font-black rounded-2xl border-2 border-slate-300 bg-white text-slate-800 hover:border-blue-400 hover:bg-blue-50 transition-all shadow text-center">C. 79,8 g</button>
                                </div>
                            </div>

                            <div class="flex justify-end mt-4">
                                <button id="btn-check-55-bt5" onclick="window.check_55_bt5()" class="w-16 h-16 bg-blue-600 border-2 border-blue-700 text-white rounded-[1.25rem] font-black text-2xl md:text-4xl flex items-center justify-center hover:bg-blue-700 transition-all active:scale-95">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,
    "presentation": ""
};

// Đăng ký toàn cục
window.lesson55 = lesson55;

// Helper functions
function normalize(str) {
    if (!str) return '';
    return str.toString().replace(/\s+/g, '').replace(/,/g, '.').trim().toLowerCase();
}

function normalizeCompare(val, standard) {
    var v = normalize(val);
    var std = normalize(standard);
    return v === std || parseFloat(v) === parseFloat(std);
}

// Toggle bài giải Bài 3
window.toggle_55_3_sol = function() {
    var container = document.getElementById('sol-55-3-container');
    var btn = document.getElementById('btn-toggle-55-3');
    if (!container || !btn) return;
    if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
        btn.textContent = 'Ẩn bài giải';
    } else {
        container.classList.add('hidden');
        btn.textContent = 'Hiện bài giải';
    }
};

// State cho trắc nghiệm
window._55_bt4a_selected = null;
window._55_bt4b_selected = null;
window._55_bt5_selected = null;

// Hàm chọn Bài 4a
window.select_55_bt4a = function(choice) {
    window._55_bt4a_selected = choice;
    ['A', 'B', 'C'].forEach(function(c) {
        var btn = document.getElementById('btn-55-bt4a-' + c);
        if (btn) {
            if (c === choice) {
                btn.className = "p-3 border-2 border-blue-500 rounded-2xl bg-blue-50 transition-all shadow w-full ring-2 ring-blue-300";
            } else {
                btn.className = "p-3 border-2 border-slate-350 rounded-2xl bg-white shadow hover:border-blue-500 transition-all w-full";
            }
        }
    });
};

// Hàm chọn Bài 4b
window.select_55_bt4b = function(choice) {
    window._55_bt4b_selected = choice;
    var btnD = document.getElementById('btn-55-bt4b-D');
    var btnS = document.getElementById('btn-55-bt4b-S');
    if (choice === 'D') {
        if (btnD) btnD.className = "w-16 h-12 text-lg md:text-xl font-black rounded-xl border-2 border-emerald-500 bg-emerald-100 text-emerald-800 transition-all shadow-md ring-2 ring-emerald-350";
        if (btnS) btnS.className = "w-16 h-12 text-lg md:text-xl font-black rounded-xl border-2 border-rose-300 bg-rose-50 text-rose-700 hover:bg-rose-100 transition-all shadow-sm";
    } else {
        if (btnD) btnD.className = "w-16 h-12 text-lg md:text-xl font-black rounded-xl border-2 border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-all shadow-sm";
        if (btnS) btnS.className = "w-16 h-12 text-lg md:text-xl font-black rounded-xl border-2 border-rose-500 bg-rose-100 text-rose-800 transition-all shadow-md ring-2 ring-rose-350";
    }
};

// Hàm chọn Bài 5
window.select_55_bt5 = function(choice) {
    window._55_bt5_selected = choice;
    ['A', 'B', 'C'].forEach(function(c) {
        var btn = document.getElementById('btn-55-bt5-' + c);
        if (btn) {
            if (c === choice) {
                btn.className = "p-4 text-lg md:text-xl lg:text-2xl font-black rounded-2xl border-2 border-blue-500 bg-blue-50 text-blue-800 transition-all shadow text-center ring-2 ring-blue-350";
            } else {
                btn.className = "p-4 text-lg md:text-xl lg:text-2xl font-black rounded-2xl border-2 border-slate-300 bg-white text-slate-800 hover:border-blue-400 hover:bg-blue-50 transition-all shadow text-center";
            }
        }
    });
};

// Check bài 1
window.check_55_bt1 = function() {
    var aVal = document.getElementById('ans-55-bt1-a').value.trim();
    var bVal = document.getElementById('ans-55-bt1-b').value.trim();

    var isCorrectA = normalizeCompare(aVal, '23.67');
    var isCorrectB = normalizeCompare(bVal, '81.092');

    var isCorrect = isCorrectA && isCorrectB;
    var rightAns = "a) 23,67 ; b) 81,092";
    var studentAns = "a) " + aVal + " ; b) " + bVal;

    var meta = window.MATH_BUILDER_METADATA.bai_tap[0];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-55-bt1', 0, 2, (isCorrectA ? 1 : 0) + (isCorrectB ? 1 : 0));
    }
};

// Check bài 2
window.check_55_bt2 = function() {
    var t2Val = document.getElementById('ans-55-bt2-t2').value.trim();
    var t3Val = document.getElementById('ans-55-bt2-t3').value.trim();

    var isCorrectT2 = normalizeCompare(t2Val, '15.6');
    var isCorrectT3 = normalizeCompare(t3Val, '26');

    var isCorrect = isCorrectT2 && isCorrectT3;
    var rightAns = "Tháng Hai: 15,6 ; Tháng Ba: 26";
    var studentAns = "Tháng Hai: " + t2Val + " ; Tháng Ba: " + t3Val;

    var meta = window.MATH_BUILDER_METADATA.bai_tap[1];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-55-bt2', 0, 2, (isCorrectT2 ? 1 : 0) + (isCorrectT3 ? 1 : 0));
    }
};

// Check bài 3
window.check_55_bt3 = function() {
    var daiVal = document.getElementById('ans-55-bt3-dai').value.trim();
    var cvVal = document.getElementById('ans-55-bt3-cv').value.trim();

    var isCorrectDai = normalizeCompare(daiVal, '9.6');
    var isCorrectCv = normalizeCompare(cvVal, '36.6');

    var isCorrect = isCorrectDai && isCorrectCv;
    var rightAns = "Chiều dài: 9,6 ; Chu vi: 36,6";
    var studentAns = "Dài: " + daiVal + " ; CV: " + cvVal;

    var meta = window.MATH_BUILDER_METADATA.bai_tap[2];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-55-bt3', 0, 2, (isCorrectDai ? 1 : 0) + (isCorrectCv ? 1 : 0));
    }
};

// Check bài 4a
window.check_55_bt4a = function() {
    var isCorrect = window._55_bt4a_selected === 'B';
    var rightAns = "Hình B";
    var studentAns = window._55_bt4a_selected ? ("Hình " + window._55_bt4a_selected) : "Chưa chọn";

    var meta = window.MATH_BUILDER_METADATA.bai_tap[3];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-55-bt4a', 0, 1, isCorrect ? 1 : 0);
    }
};

// Check bài 4b
window.check_55_bt4b = function() {
    var isCorrect = window._55_bt4b_selected === 'D';
    var rightAns = "Đ (Đúng)";
    var studentAns = window._55_bt4b_selected === 'D' ? 'Đ' : (window._55_bt4b_selected === 'S' ? 'S' : 'Chưa chọn');

    var meta = window.MATH_BUILDER_METADATA.bai_tap[4];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-55-bt4b', 0, 1, isCorrect ? 1 : 0);
    }
};

// Check bài 5
window.check_55_bt5 = function() {
    var isCorrect = window._55_bt5_selected === 'C';
    var rightAns = "C. 79,8 g";
    var studentAns = window._55_bt5_selected ? (window._55_bt5_selected) : "Chưa chọn";

    var meta = window.MATH_BUILDER_METADATA.bai_tap[5];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-55-bt5', 0, 1, isCorrect ? 1 : 0);
    }
};

export default lesson55;
