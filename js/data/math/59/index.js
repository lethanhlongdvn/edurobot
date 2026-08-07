const metadata = {
    "lessonInfo": {
        "period": "59",
        "week": "12",
        "topic": "Hình học",
        "title": "BÀI 25: HÌNH TAM GIÁC. DIỆN TÍCH HÌNH TAM GIÁC (TIẾT 4)",
        "desc": "Luyện tập tính diện tích hình tam giác trong các trường hợp cho bảng số liệu, giải các bài toán đố thực tế thú vị liên quan tới cắt ghép hình và tính diện tích hình vẽ cây thông."
    },
    "bai_tap": [
        {
            "id": "59_bt1",
            "type": "fill_multiple",
            "title": "Hoàn thành bảng sau và chọn câu trả lời đúng",
            "answers": ["25", "8", "100", "D"],
            "guidance": "a) Áp dụng công thức: $S = \\frac{a \\times h}{2}$ cho mỗi cột.<br>b) Đổi đơn vị đo để cùng đơn vị: 2 dm = 20 cm, sau đó tính diện tích theo đơn vị tương ứng.",
            "solution": "a) Kết quả điền vào bảng:<br>- Cột 2 (đáy 10 dm, cao 5 dm): $\\frac{10 \\times 5}{2} = 25$ ($dm^2$)<br>- Cột 3 (đáy 4 m, cao 4 m): $\\frac{4 \\times 4}{2} = 8$ ($m^2$)<br>- Cột 4 (đáy 20 cm, cao 10 cm): $\\frac{20 \\times 10}{2} = 100$ ($cm^2$)<br>b) Đổi 2 dm = 20 cm.<br>Diện tích tam giác là: $\\frac{20 \\times 20}{2} = 200$ ($cm^2$).<br>Đổi: 200 $cm^2$ = 2 $dm^2$. Vậy chọn đáp án D."
        },
        {
            "id": "59_bt2",
            "type": "fill_multiple",
            "title": "Vẽ đường cao ứng với đáy BC của mỗi hình tam giác",
            "answers": ["Đã vẽ"],
            "guidance": "Quan sát kỹ các tam giác để xác định đường cao tương ứng:<br>- Hình 1: Đường cao hạ từ A vuông góc với BC.<br>- Hình 2: Đường cao hạ từ M vuông góc với BC kéo dài.<br>- Hình 3: Cạnh góc vuông KB chính là đường cao ứng với đáy BC.",
            "solution": "Hướng dẫn vẽ đường cao ứng với đáy BC:<br>- Hình thứ nhất: Từ đỉnh A, kẻ đoạn thẳng AH vuông góc với đáy BC tại H. AH chính là đường cao.<br>- Hình thứ hai: Kéo dài cạnh đáy BC về phía bên phải. Từ đỉnh M, kẻ đoạn thẳng MH vuông góc với đường thẳng BC kéo dài tại H. MH chính là đường cao.<br>- Hình thứ ba: Vì tam giác KBC vuông tại B nên đường cao ứng với đáy BC chính là cạnh bên KB."
        },
        {
            "id": "59_bt3",
            "type": "multiple_choice",
            "title": "Chọn câu trả lời đúng cho diện tích phần đuôi con cá",
            "answers": ["D"],
            "guidance": "M là trung điểm của BC nên MC = 12 : 2 = 6 cm. N là trung điểm của CD nên NC = 12 : 2 = 6 cm. Đuôi con cá là tam giác vuông MNC có diện tích bằng $\\frac{MC \\times NC}{2}$.",
            "solution": "Độ dài đoạn MC là: 12 : 2 = 6 (cm)<br>Độ dài đoạn NC là: 12 : 2 = 6 (cm)<br>Diện tích tam giác MNC (đuôi con cá) là:<br>$\\frac{6 \\times 6}{2} = 18$ ($cm^2$)<br>Vậy đáp án đúng là D."
        },
        {
            "id": "59_bt4",
            "type": "fill_multiple",
            "title": "Tính diện tích cây thông vẽ trên lưới ô vuông",
            "answers": ["42"],
            "guidance": "Cây thông gồm 3 phần hình tam giác và 1 phần thân hình chữ nhật ở dưới. Tính diện tích từng hình rồi cộng lại.",
            "solution": "Tính diện tích các bộ phận của cây thông (mỗi ô vuông là 1 cm²):<br>- Phần lá đỏ (trên cùng): đáy 6 cm, cao 2 cm. Diện tích = $\\frac{6 \\times 2}{2} = 6$ ($cm^2$).<br>- Phần lá xanh (giữa): đáy 8 cm, cao 3 cm. Diện tích = $\\frac{8 \\times 3}{2} = 12$ ($cm^2$).<br>- Phần lá cam (dưới): đáy 10 cm, cao 4 cm. Diện tích = $\\frac{10 \\times 4}{2} = 20$ ($cm^2$).<br>- Thân cây: rộng 2 cm, cao 2 cm. Diện tích = 2 × 2 = 4 ($cm^2$).<br>- Tổng diện tích cây thông là: 6 + 12 + 20 + 4 = 42 ($cm^2$)."
        }
    ],
    "quizPool": [
        { "question": "Tính diện tích hình tam giác có độ dài đáy 10 cm và chiều cao 6 cm.", "options": ["30 cm²", "60 cm²", "16 cm²", "8 cm²"], "answer": 0 },
        { "question": "Diện tích tam giác vuông có hai cạnh góc vuông là 8 dm và 5 dm là:", "options": ["40 dm²", "20 dm²", "13 dm²", "26 dm²"], "answer": 1 },
        { "question": "Một hình tam giác có diện tích 24 cm² và chiều cao 6 cm. Cạnh đáy tương ứng là:", "options": ["4 cm", "8 cm", "12 cm", "16 cm"], "answer": 1 },
        { "question": "Tính diện tích hình tam giác có đáy 2 m và chiều cao 15 dm.", "options": ["15 dm²", "150 dm²", "30 dm²", "300 dm²"], "answer": 1 },
        { "question": "Nếu tăng chiều cao của tam giác lên 3 lần và giữ nguyên đáy thì diện tích tam giác đó sẽ:", "options": ["Tăng lên 3 lần", "Giảm đi 3 lần", "Tăng lên 9 lần", "Không đổi"], "answer": 0 },
        { "question": "Diện tích hình tam giác có đáy 24 cm và chiều cao bằng 1/3 độ dài đáy là:", "options": ["96 cm²", "192 cm²", "48 cm²", "24 cm²"], "answer": 0 },
        { "question": "Một thửa đất hình tam giác có đáy 30 m và chiều cao 16 m. Diện tích thửa đất đó là:", "options": ["480 m²", "240 m²", "96 m²", "192 m²"], "answer": 1 },
        { "question": "Cho tam giác vuông có diện tích 50 cm², một cạnh góc vuông là 10 cm. Cạnh góc vuông còn lại là:", "options": ["5 cm", "10 cm", "20 cm", "15 cm"], "answer": 1 },
        { "question": "Một biển báo giao thông hình tam giác có diện tích 600 cm² và chiều cao 30 cm. Cạnh đáy của biển báo đó là:", "options": ["20 cm", "40 cm", "30 cm", "15 cm"], "answer": 1 },
        { "question": "Công thức tính diện tích hình tam giác vuông có 2 cạnh góc vuông a và b là:", "options": ["S = a x b", "S = (a x b) / 2", "S = a + b", "S = (a + b) / 2"], "answer": 1 },
        { "question": "Đáy của hình tam giác là 1,5 dm, chiều cao là 8 cm. Diện tích của tam giác đó là:", "options": ["60 cm²", "120 cm²", "6 cm²", "12 cm²"], "answer": 0 },
        { "question": "Tam giác ABC có đáy BC = 12 cm. Nếu kéo dài đáy BC thêm 3 cm thì diện tích tăng thêm 15 cm². Chiều cao tam giác ABC ban đầu là:", "options": ["5 cm", "10 cm", "15 cm", "20 cm"], "answer": 1 },
        { "question": "Diện tích hình tam giác có đáy 4,5 m và chiều cao 3,2 m là:", "options": ["7,2 m²", "14,4 m²", "72 m²", "144 m²"], "answer": 0 },
        { "question": "Một hình tam giác có diện tích 15 dm² và chiều cao 5 dm. Cạnh đáy tương ứng là:", "options": ["3 dm", "6 dm", "9 dm", "12 dm"], "answer": 1 },
        { "question": "Hình tam giác có độ dài đáy 45 cm, chiều cao 2 dm. Diện tích hình tam giác đó là:", "options": ["45 cm²", "450 cm²", "90 cm²", "900 cm²"], "answer": 1 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson59 = {
    ...metadata.lessonInfo,
    metadata: metadata,
    quizPool: [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" style="display:flex; transition:transform 0.45s cubic-bezier(0.4,0,0.2,1);">  
                    
                    <!-- Slide 1: Khám phá - Mục tiêu tiết học -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <!-- Banner chính -->
                            

                            <!-- Khung tóm tắt quy tắc -->
                            <div class="p-6 rounded-[2.5rem] bg-[#fffbeb] border-2 border-[#fef08a] shadow-sm text-center space-y-4">
                                <p class="text-lg md:text-2xl font-black text-amber-900">🔔 NHẮC LẠI CÔNG THỨC DIỆN TÍCH HÌNH TAM GIÁC</p>
                                <div class="inline-flex items-center gap-2 font-mono text-3xl md:text-5xl font-black text-amber-600 bg-white px-8 py-4 rounded-3xl border border-amber-200 shadow-sm">
                                    <span>S =</span>
                                    <div class="inline-flex flex-col items-center align-middle">
                                        <span class="border-b-4 border-amber-600 pb-1 px-2 text-center leading-none">a × h</span>
                                        <span class="pt-1 text-center leading-none">2</span>
                                    </div>
                                </div>
                                <p class="text-base md:text-xl font-bold text-slate-700">
                                    (a là độ dài đáy, h là chiều cao tương ứng, cùng một đơn vị đo)
                                </p>
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
                <div id="ltTrack" style="display:flex; transition:transform 0.45s cubic-bezier(0.4,0,0.2,1);">  

                    <!-- Slide 1: Bài 1 - Bảng số liệu và câu hỏi trắc nghiệm -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-6 w-full">
                            
                            <div class="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">1</div>
                                <h3 class="text-xl md:text-3xl font-black text-blue-900">Bài 1. Hoàn thành bảng sau và chọn câu trả lời đúng:</h3>
                            </div>

                            <div class="space-y-6">
                                <!-- Câu a: Bảng số liệu -->
                                <div class="bg-blue-50/30 p-6 rounded-3xl border border-blue-100 space-y-4">
                                    <h4 class="text-lg md:text-2xl font-black text-blue-700">a) Hoàn thành bảng sau:</h4>
                                    
                                    <div class="overflow-x-auto w-full border border-slate-200 rounded-2xl bg-white shadow-sm">
                                        <table class="min-w-full text-center border-collapse text-base md:text-xl font-bold">
                                            <thead>
                                                <tr class="bg-slate-50 border-b border-slate-200">
                                                    <th class="p-4 border-r border-slate-200 text-left text-slate-600">Thông số</th>
                                                    <th class="p-4 border-r border-slate-200">Tam giác 1</th>
                                                    <th class="p-4 border-r border-slate-200">Tam giác 2</th>
                                                    <th class="p-4 border-r border-slate-200">Tam giác 3</th>
                                                    <th class="p-4">Tam giác 4</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="border-b border-slate-200">
                                                    <td class="p-4 border-r border-slate-200 text-left text-slate-500 bg-slate-50/55">Độ dài đáy (a)</td>
                                                    <td class="p-4 border-r border-slate-200">6 cm</td>
                                                    <td class="p-4 border-r border-slate-200">10 dm</td>
                                                    <td class="p-4 border-r border-slate-200">4 m</td>
                                                    <td class="p-4">20 cm</td>
                                                </tr>
                                                <tr class="border-b border-slate-200">
                                                    <td class="p-4 border-r border-slate-200 text-left text-slate-500 bg-slate-50/55">Chiều cao (h)</td>
                                                    <td class="p-4 border-r border-slate-200">5 cm</td>
                                                    <td class="p-4 border-r border-slate-200">5 dm</td>
                                                    <td class="p-4 border-r border-slate-200">4 m</td>
                                                    <td class="p-4">10 cm</td>
                                                </tr>
                                                <tr>
                                                    <td class="p-4 border-r border-slate-200 text-left text-slate-700 bg-blue-50/30">Diện tích (S)</td>
                                                    <td class="p-4 border-r border-slate-200 text-slate-600">15 cm²</td>
                                                    <td class="p-4 border-r border-slate-200 bg-blue-50/10">
                                                        <div class="flex items-center justify-center gap-1">
                                                            <input type="text" id="ans-59-1-a1" class="w-16 h-10 text-center rounded-lg border-2 border-blue-200 focus:border-blue-500 focus:outline-none font-bold text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                            <span>dm²</span>
                                                        </div>
                                                    </td>
                                                    <td class="p-4 border-r border-slate-200 bg-blue-50/10">
                                                        <div class="flex items-center justify-center gap-1">
                                                            <input type="text" id="ans-59-1-a2" class="w-16 h-10 text-center rounded-lg border-2 border-blue-200 focus:border-blue-500 focus:outline-none font-bold text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                            <span>m²</span>
                                                        </div>
                                                    </td>
                                                    <td class="p-4 bg-blue-50/10">
                                                        <div class="flex items-center justify-center gap-1">
                                                            <input type="text" id="ans-59-1-a3" class="w-16 h-10 text-center rounded-lg border-2 border-blue-200 focus:border-blue-500 focus:outline-none font-bold text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="">
                                                            <span>cm²</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <!-- Câu b: Trắc nghiệm -->
                                <div class="bg-blue-50/30 p-6 rounded-3xl border border-blue-100 space-y-4">
                                    <h4 class="text-lg md:text-2xl font-black text-blue-700">b) Diện tích của hình tam giác có độ dài đáy 2 dm và chiều cao 20 cm là:</h4>
                                    
                                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <button onclick="window.select_59_bt1b('A')" id="opt-59-1b-A" class="p-4 text-center rounded-xl border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 active:scale-95 transition-all font-bold">
                                            A. 20 dm²
                                        </button>
                                        <button onclick="window.select_59_bt1b('B')" id="opt-59-1b-B" class="p-4 text-center rounded-xl border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 active:scale-95 transition-all font-bold">
                                            B. 20 cm²
                                        </button>
                                        <button onclick="window.select_59_bt1b('C')" id="opt-59-1b-C" class="p-4 text-center rounded-xl border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 active:scale-95 transition-all font-bold">
                                            C. 2 cm²
                                        </button>
                                        <button onclick="window.select_59_bt1b('D')" id="opt-59-1b-D" class="p-4 text-center rounded-xl border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 active:scale-95 transition-all font-bold">
                                            D. 2 dm²
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- Footer chấm điểm -->
                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4 mt-4">
                                <button onclick="window.toggleSolution('sol-59-bt1')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-59-bt1" onclick="window.check_59_bt1()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>

                            <!-- Lời giải chi tiết -->
                            <div id="sol-59-bt1" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="text-base md:text-2xl font-black text-amber-800 mb-2">Bài giải chi tiết:</h4>
                                <div class="text-slate-700 text-sm md:text-lg font-bold leading-relaxed space-y-2">
                                    <p><strong>a) Diện tích các hình tam giác lần lượt là:</strong></p>
                                    <ul class="list-disc list-inside pl-4 space-y-1">
                                        <li>Tam giác 2: $(10 \times 5) : 2 = 25$ ($dm^2$)</li>
                                        <li>Tam giác 3: $(4 \times 4) : 2 = 8$ ($m^2$)</li>
                                        <li>Tam giác 4: $(20 \times 10) : 2 = 100$ ($cm^2$)</li>
                                    </ul>
                                    
                                    <p>Diện tích của hình tam giác là: $(20 \times 20) : 2 = 200$ ($cm^2$).</p>
                                    <p>Đổi: 200 $cm^2$ = 2 $dm^2$. Vậy đáp số đúng là <strong>D. 2 dm²</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 - Vẽ đường cao -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-6 w-full">
                            
                            <div class="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">2</div>
                                <h3 class="text-xl md:text-3xl font-black text-blue-900">Bài 2. Vẽ đường cao ứng với đáy BC của mỗi hình tam giác:</h3>
                            </div>

                            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                                <div class="lg:col-span-2 flex justify-center bg-slate-50/50 p-4 rounded-3xl border border-slate-150">
                                    <img src="./assets/images/toan/toan_tap_1/59/2.png" class="max-w-full h-auto max-h-64 rounded-2xl shadow-md border-4 border-white object-contain" alt="Hình vẽ các tam giác">
                                </div>

                                <div class="space-y-4 bg-slate-50 p-6 rounded-3xl border border-slate-200 text-slate-700">
                                    <p class="text-base md:text-lg font-bold">
                                        Em hãy vẽ ba hình tam giác này vào vở ô ly, sau đó dùng thước ê-ke để vẽ đường cao tương ứng với cạnh đáy BC.
                                    </p>
                                    <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center py-6">
                                        <p class="text-sm font-bold text-slate-500 mb-2">Xác nhận hoàn thành vẽ bài vào vở:</p>
                                        <button id="btn-draw-59" onclick="window.confirmDraw59()" class="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl shadow-md active:scale-95 transition-all text-sm md:text-base">
                                            ✍️ Em đã vẽ xong vào vở
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- Footer chấm điểm -->
                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-59-bt2')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-59-bt2" onclick="window.check_59_bt2()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>

                            <!-- Lời giải chi tiết -->
                            <div id="sol-59-bt2" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="text-base md:text-2xl font-black text-amber-800 mb-2">Đường cao mẫu:</h4>
                                <div class="text-slate-700 text-sm md:text-lg font-bold leading-relaxed space-y-2">
                                    <p>✨ <strong>Hình thứ nhất:</strong> Đường cao AH kẻ từ đỉnh A vuông góc với đáy BC.</p>
                                    <p>✨ <strong>Hình thứ hai:</strong> Đường cao MH kẻ từ đỉnh M vuông góc với đường kéo dài của đáy BC.</p>
                                    <p>✨ <strong>Hình thứ ba:</strong> Đường cao KB chính là cạnh góc vuông KB vuông góc với đáy BC tại B.</p>
                                    <div class="flex justify-center mt-4">
                                        <svg class="w-full max-w-lg h-32" viewBox="0 0 300 100">
                                            <!-- Tri 1 -->
                                            <g transform="translate(10, 10)">
                                                <polygon points="35,10 10,70 70,70" fill="none" stroke="#16a34a" stroke-width="2"/>
                                                <line x1="35" y1="10" x2="35" y2="70" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2 2"/>
                                                <rect x="35" y="65" width="5" height="5" fill="none" stroke="#ef4444" stroke-width="1"/>
                                                <text x="32" y="5" font-family="sans-serif" font-size="10" font-weight="bold">A</text>
                                                <text x="32" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ef4444">H</text>
                                            </g>
                                            <!-- Tri 2 -->
                                            <g transform="translate(110, 10)">
                                                <polygon points="10,10 70,10 85,60" fill="none" stroke="#16a34a" stroke-width="2"/>
                                                <line x1="70" y1="10" x2="85" y2="10" stroke="#475569" stroke-width="1.5" stroke-dasharray="2 2"/>
                                                <line x1="85" y1="60" x2="85" y2="10" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2 2"/>
                                                <rect x="80" y="10" width="5" height="5" fill="none" stroke="#ef4444" stroke-width="1"/>
                                                <text x="5" y="10" font-family="sans-serif" font-size="10" font-weight="bold">B</text>
                                                <text x="65" y="5" font-family="sans-serif" font-size="10" font-weight="bold">C</text>
                                                <text x="82" y="70" font-family="sans-serif" font-size="10" font-weight="bold">M</text>
                                                <text x="82" y="5" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ef4444">H</text>
                                            </g>
                                            <!-- Tri 3 -->
                                            <g transform="translate(210, 10)">
                                                <polygon points="10,10 70,10 70,70" fill="none" stroke="#16a34a" stroke-width="2"/>
                                                <line x1="70" y1="10" x2="70" y2="70" stroke="#ef4444" stroke-width="2"/>
                                                <rect x="65" y="10" width="5" height="5" fill="none" stroke="#ef4444" stroke-width="1"/>
                                                <text x="5" y="10" font-family="sans-serif" font-size="10" font-weight="bold">K</text>
                                                <text x="73" y="10" font-family="sans-serif" font-size="10" font-weight="bold">B</text>
                                                <text x="73" y="80" font-family="sans-serif" font-size="10" font-weight="bold">C</text>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 - Diện tích đuôi con cá -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-6 w-full">
                            
                            <div class="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">3</div>
                                <h3 class="text-xl md:text-3xl font-black text-blue-900">Bài 3. Chọn câu trả lời đúng cho diện tích phần đuôi con cá:</h3>
                            </div>

                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                                <div class="flex justify-center bg-slate-50/50 p-4 rounded-3xl border border-slate-150">
                                    <img src="./assets/images/toan/toan_tap_1/59/3.png" class="max-w-full h-auto max-h-64 rounded-2xl shadow-md border-4 border-white object-contain" alt="Hình ghép con cá">
                                </div>

                                <div class="space-y-4">
                                    <p class="text-base md:text-xl font-bold text-slate-700 leading-relaxed bg-slate-50 p-6 rounded-3xl border border-slate-200">
                                        Mai tô màu một tờ giấy hình vuông cạnh 12 cm như hình 1 rồi cắt theo các vạch chia. Từ các mảnh giấy thu được, Mai ghép thành con cá như hình 2. Biết M là trung điểm của BC và N là trung điểm của CD. Diện tích hình tam giác là đuôi của con cá bằng:
                                    </p>
                                    
                                    <div class="grid grid-cols-2 gap-4">
                                        <button onclick="window.select_59_bt3('A')" id="opt-59-3-A" class="p-4 text-center rounded-xl border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 active:scale-95 transition-all font-bold text-base md:text-lg">
                                            A. 28 cm²
                                        </button>
                                        <button onclick="window.select_59_bt3('B')" id="opt-59-3-B" class="p-4 text-center rounded-xl border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 active:scale-95 transition-all font-bold text-base md:text-lg">
                                            B. 27 cm²
                                        </button>
                                        <button onclick="window.select_59_bt3('C')" id="opt-59-3-C" class="p-4 text-center rounded-xl border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 active:scale-95 transition-all font-bold text-base md:text-lg">
                                            C. 36 cm²
                                        </button>
                                        <button onclick="window.select_59_bt3('D')" id="opt-59-3-D" class="p-4 text-center rounded-xl border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 active:scale-95 transition-all font-bold text-base md:text-lg">
                                            D. 18 cm²
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- Footer chấm điểm -->
                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-59-bt3')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-59-bt3" onclick="window.check_59_bt3()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>

                            <!-- Lời giải chi tiết -->
                            <div id="sol-59-bt3" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="text-base md:text-2xl font-black text-amber-800 mb-2">Bài giải chi tiết:</h4>
                                <div class="text-slate-700 text-sm md:text-lg font-bold leading-relaxed space-y-2">
                                    <p>Đuôi con cá chính là hình tam giác vuông MNC ở góc dưới bên phải của hình vuông (Hình 1).</p>
                                    <p>Cạnh hình vuông ban đầu là 12 cm.</p>
                                    <p>Vì M là trung điểm cạnh BC nên đoạn MC = 12 : 2 = 6 (cm).</p>
                                    <p>Vì N là trung điểm cạnh CD nên đoạn NC = 12 : 2 = 6 (cm).</p>
                                    <p>Diện tích hình tam giác vuông MNC (đuôi con cá) là:</p>
                                    <p class="text-blue-700 font-mono text-lg md:text-xl pl-4">(6 × 6) : 2 = 18 (cm²)</p>
                                    <p>Vậy diện tích đuôi con cá là <strong>18 cm²</strong>. Đáp án đúng là <strong>D</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Bài 4 - Diện tích cây thông -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-6 w-full">
                            
                            <div class="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">4</div>
                                <h3 class="text-xl md:text-3xl font-black text-blue-900">Bài 4. Tính diện tích cây thông vẽ trên lưới ô vuông:</h3>
                            </div>

                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                                <div class="flex justify-center bg-slate-50/50 p-4 rounded-3xl border border-slate-150">
                                    <img src="./assets/images/toan/toan_tap_1/59/4.png" class="max-w-full h-auto max-h-64 rounded-2xl shadow-md border-4 border-white object-contain" alt="Hình vẽ cây thông">
                                </div>

                                <div class="space-y-4 bg-slate-50 p-6 rounded-3xl border border-slate-200">
                                    <p class="text-base md:text-xl font-bold text-slate-700 leading-relaxed">
                                        Biết mỗi ô vuông nhỏ trên lưới có cạnh 1 cm. Em hãy tính tổng diện tích của cây thông Noel được vẽ ở hình bên.
                                    </p>
                                    
                                    <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center items-center py-6 mt-4">
                                        <div class="flex items-center gap-3 text-lg md:text-2xl font-bold text-slate-800 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>Diện tích cây thông là: </span>
                                            <input type="text" id="ans-59-4" class="w-20 h-12 text-center rounded-xl font-bold border-2 border-blue-200 focus:border-blue-500 focus:outline-none bg-blue-50/50 focus:bg-white text-blue-700" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 48px !important;" placeholder="">
                                            <span>cm²</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Footer chấm điểm -->
                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-59-bt4')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-59-bt4" onclick="window.check_59_bt4()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>

                            <!-- Lời giải chi tiết -->
                            <div id="sol-59-bt4" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="text-base md:text-2xl font-black text-amber-800 mb-2">Bài giải chi tiết:</h4>
                                <div class="text-slate-700 text-sm md:text-lg font-bold leading-relaxed space-y-2">
                                    <p>Cây thông gồm 4 phần: 3 tầng lá hình tam giác và 1 thân cây hình chữ nhật.</p>
                                    <ul class="list-disc list-inside pl-4 space-y-1">
                                        <li><strong>Lá đỏ (trên cùng):</strong> đáy 6 cm, cao 2 cm. Diện tích = $(6 \times 2) : 2 = 6$ ($cm^2$).</li>
                                        <li><strong>Lá xanh (giữa):</strong> đáy 8 cm, cao 3 cm. Diện tích = $(8 \times 3) : 2 = 12$ ($cm^2$).</li>
                                        <li><strong>Lá cam (dưới cùng):</strong> đáy 10 cm, cao 4 cm. Diện tích = $(10 \times 4) : 2 = 20$ ($cm^2$).</li>
                                        <li><strong>Thân cây (hình chữ nhật):</strong> rộng 2 cm, cao 2 cm. Diện tích = $2 \times 2 = 4$ ($cm^2$).</li>
                                    </ul>
                                    
                                    <p class="text-blue-700 font-mono text-lg md:text-xl pl-4">6 + 12 + 20 + 4 = 42 (cm²)</p>
                                    <p>Đáp số: <strong>42 cm²</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "quizPool": metadata.quizPool,
    "metadata": metadata
};

// --- LOGIC CHẤM ĐIỂM ---

// Trạng thái lựa chọn bài 1b và bài 3
let selected_59_bt1b_val = "";
let selected_59_bt3_val = "";
let isDrawFinished = false;

window.select_59_bt1b = function(val) {
    selected_59_bt1b_val = val;
    ['A', 'B', 'C', 'D'].forEach(opt => {
        const btn = document.getElementById(`opt-59-1b-${opt}`);
        if (btn) {
            btn.classList.remove('border-blue-500', 'bg-blue-50/50');
            btn.classList.add('border-slate-200');
        }
    });
    const activeBtn = document.getElementById(`opt-59-1b-${val}`);
    if (activeBtn) {
        activeBtn.classList.remove('border-slate-200');
        activeBtn.classList.add('border-blue-500', 'bg-blue-50/50');
    }
};

window.confirmDraw59 = function() {
    isDrawFinished = true;
    const btn = document.getElementById('btn-draw-59');
    if (btn) {
        btn.innerHTML = "✅ Đã vẽ xong vào vở";
        btn.classList.remove('bg-emerald-600', 'hover:bg-emerald-700');
        btn.classList.add('bg-slate-400');
    }
};

window.select_59_bt3 = function(val) {
    selected_59_bt3_val = val;
    ['A', 'B', 'C', 'D'].forEach(opt => {
        const btn = document.getElementById(`opt-59-3-${opt}`);
        if (btn) {
            btn.classList.remove('border-blue-500', 'bg-blue-50/50');
            btn.classList.add('border-slate-200');
        }
    });
    const activeBtn = document.getElementById(`opt-59-3-${val}`);
    if (activeBtn) {
        activeBtn.classList.remove('border-slate-200');
        activeBtn.classList.add('border-blue-500', 'bg-blue-50/50');
    }
};

window.toggleSolution = function(id) {
    const el = document.getElementById(id);
    if (el) {
        el.classList.toggle('hidden');
    }
};

window.check_59_bt1 = function() {
    const valA1 = document.getElementById('ans-59-1-a1').value.trim();
    const valA2 = document.getElementById('ans-59-1-a2').value.trim();
    const valA3 = document.getElementById('ans-59-1-a3').value.trim();

    const isCorrectA1 = valA1 === "25";
    const isCorrectA2 = valA2 === "8";
    const isCorrectA3 = valA3 === "100";
    const isCorrectB = selected_59_bt1b_val === "D";

    const correctCount = (isCorrectA1 ? 1 : 0) + (isCorrectA2 ? 1 : 0) + (isCorrectA3 ? 1 : 0) + (isCorrectB ? 1 : 0);
    const isCorrect = correctCount === 4;

    const rightAns = "a) Điền: 25, 8, 100 <br> b) Chọn D (2 dm²)";
    const studentAns = `a) Điền: ${valA1 || "_"}, ${valA2 || "_"}, ${valA3 || "_"} <br> b) Chọn: ${selected_59_bt1b_val || "Chưa chọn"}`;

    const meta = window.MATH_BUILDER_METADATA.bai_tap[0];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : (correctCount * 25), 'btn-check-59-bt1', 0, 4, correctCount);
    }
};

window.check_59_bt2 = function() {
    const isCorrect = isDrawFinished;
    const correctCount = isCorrect ? 1 : 0;

    const rightAns = "Vẽ xong và đối chiếu đường cao mẫu";
    const studentAns = isDrawFinished ? "Đã vẽ xong" : "Chưa hoàn thành";

    const meta = window.MATH_BUILDER_METADATA.bai_tap[1];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-59-bt2', 0, 1, correctCount);
    }
};

window.check_59_bt3 = function() {
    const isCorrect = selected_59_bt3_val === "D";
    const correctCount = isCorrect ? 1 : 0;

    const rightAns = "D (18 cm²)";
    const studentAns = selected_59_bt3_val ? `${selected_59_bt3_val}` : "Chưa chọn";

    const meta = window.MATH_BUILDER_METADATA.bai_tap[2];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-59-bt3', 0, 1, correctCount);
    }
};

window.check_59_bt4 = function() {
    const val = document.getElementById('ans-59-4').value.trim();
    const isCorrect = val === "42";
    const correctCount = isCorrect ? 1 : 0;

    const rightAns = "42";
    const studentAns = val || "Chưa điền";

    const meta = window.MATH_BUILDER_METADATA.bai_tap[3];
    if (window.showMathFeedback) {
        window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
    }
    if (window.submitMathLesson) {
        window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'ans-59-4', 0, 1, correctCount);
    }
};

export default lesson59;
