const metadata = {
    "lessonInfo": {
        "period": "119",
        "week": "24",
        "topic": "Hình học và Đo lường",
        "title": "Bài 50. Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật (tiết 3)",
        "desc": "Luyện tập diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật."
    },
    "exercises": [
        {
            "id": "119_1",
            "type": "fill_in_blank",
            "statement": "Tính diện tích xung quanh của mỗi hình hộp chữ nhật dưới đây.",
            "subQuestions": [
                { "label": "Hình a", "id": "119-1-a", "answer": "126", "unit": "cm²" },
                { "label": "Hình b", "id": "119-1-b", "answer": "126", "unit": "cm²" }
            ],
            "solution": "a) Diện tích xung quanh hình a là: (3 + 4) x 2 x 9 = 126 (cm²).<br>b) Diện tích xung quanh hình b là: (5 + 4) x 2 x 7 = 126 (cm²)."
        },
        {
            "id": "119_2",
            "type": "fill_in_blank",
            "statement": "Các bể cá dưới đây được làm bằng kính và thiết kế dạng hình hộp chữ nhật không có nắp. Hãy tính diện tích kính được sử dụng để làm các bể cá đó.",
            "subQuestions": [
                { "label": "Bể a", "id": "119-2-a", "answer": "8", "unit": "m²" },
                { "label": "Bể b", "id": "119-2-b", "answer": "140000", "unit": "cm²" },
                { "label": "Bể c", "id": "119-2-c", "answer": "250", "unit": "dm²" }
            ],
            "solution": "Diện tích kính làm bể cá không nắp = Sxq + S(1 đáy).<br>a) Bể a: (2 + 1) x 2 x 1 + 2 x 1 = 8 m².<br>b) Bể b: (200 + 100) x 2 x 200 + 200 x 100 = 140 000 cm².<br>c) Bể c: (15 + 4) x 2 x 5 + 15 x 4 = 250 dm²."
        },
        {
            "id": "119_3",
            "type": "selection",
            "statement": "Khuôn bánh chưng có dạng một hình hộp chữ nhật không có hai đáy như hình bên. Hỏi từ thanh gỗ dưới đây có thể làm được khuôn bánh chưng với kích thước như trên hay không?",
            "options": ["Có", "Không"],
            "answer": "Không",
            "solution": "Chu vi đáy khuôn bánh (hình vuông cạnh 16,5 cm) là:<br>16,5 x 4 = 66 (cm).<br>Chiều dài thanh gỗ cần dùng là 66 cm, lớn hơn chiều dài thanh gỗ hiện có là 55 cm.<br>Vậy không thể làm được khuôn bánh chưng từ thanh gỗ này."
        },
        {
            "id": "119_4",
            "type": "selection",
            "statement": "Mỗi bạn Mai, Việt, Nam dùng bốn hình lập phương nhỏ như nhau có độ dài cạnh là 1 dm và xếp được các hình dưới đây. Hỏi bạn nào xếp được hình hộp chữ nhật có: a) Diện tích xung quanh lớn nhất? b) Diện tích toàn phần bé nhất?",
            "subQuestions": [
                { "label": "a) Diện tích xung quanh lớn nhất?", "id": "119-4-a", "options": ["Mai", "Việt", "Nam"], "answer": "Mai" },
                { "label": "b) Diện tích toàn phần bé nhất?", "id": "119-4-b", "options": ["Mai", "Việt", "Nam"], "answer": "Nam" }
            ],
            "solution": "Tính diện tích xung quanh (Sxq) và diện tích toàn phần (Stp) của các khối (với cạnh hình lập phương nhỏ là 1 dm):<br>- Khối của Mai (1x1x4): Sxq = (1+1)x2x4 = 16 dm²; Stp = 16 + 1x1x2 = 18 dm².<br>- Khối của Việt (4x1x1): Sxq = (4+1)x2x1 = 10 dm²; Stp = 10 + 4x1x2 = 18 dm².<br>- Khối của Nam (2x2x1): Sxq = (2+2)x2x1 = 8 dm²; Stp = 8 + 2x2x2 = 16 dm².<br>So sánh:<br>a) Bạn Mai có diện tích xung quanh lớn nhất (16 dm²).<br>b) Bạn Nam có diện tích toàn phần bé nhất (16 dm²)."
        }
    ],
    "quizPool": [
        { "question": "Diện tích kính làm bể cá không nắp bằng?", "options": ["Sxq", "Sxq + S 1 đáy", "Sxq + S 2 đáy", "S 4 mặt bên"], "answer": 1, "level": "easy" },
        { "question": "Chu vi hình vuông cạnh a là?", "options": ["a x 4", "a x a", "a x 2", "a + 4"], "answer": 0, "level": "easy" },
        { "question": "Một HHCN có d=6cm, r=3cm, h=5cm. Sxq là?", "options": ["90 cm²", "45 cm²", "18 cm²", "60 cm²"], "answer": 0, "level": "medium" },
        { "question": "Đổi 1 m² sang cm² ta được?", "options": ["100", "1000", "10000", "100000"], "answer": 2, "level": "medium" },
        { "question": "HHCN có 2 mặt đáy là hình gì?", "options": ["Luôn là hình vuông", "Luôn là hình chữ nhật", "Hình tròn", "Hình thoi"], "answer": 1, "level": "easy" },
        { "question": "Nếu d=5, r=2, h=3. Sxq = ?", "options": ["21", "42", "70", "30"], "answer": 1, "level": "medium" },
        { "question": "Một khối lập phương cạnh 10cm. Stp là?", "options": ["400 cm²", "600 cm²", "100 cm²", "1000 cm²"], "answer": 1, "level": "easy" },
        { "question": "Hình hộp chữ nhật có mấy mặt xung quanh?", "options": ["2", "4", "6", "8"], "answer": 1, "level": "easy" },
        { "question": "Để tính Sxq, các kích thước phải như thế nào?", "options": ["Cùng đơn vị đo", "Khác đơn vị đo", "Bằng nhau", "Số nguyên"], "answer": 0, "level": "easy" },
        { "question": "Muốn làm một cái hộp hình lập phương không nắp cần mấy hình vuông?", "options": ["4", "5", "6", "8"], "answer": 1, "level": "medium" },
        { "question": "Sxq = 120, chu vi đáy = 20. Chiều cao = ?", "options": ["6", "12", "10", "4"], "answer": 0, "level": "medium" },
        { "question": "Sxq của HLP cạnh a là?", "options": ["a*a*4", "a*a*6", "a*4", "a*a"], "answer": 0, "level": "easy" },
        { "question": "Công thức tính diện tích 1 mặt HLP là?", "options": ["a*a", "a*2", "a*4", "a*6"], "answer": 0, "level": "easy" },
        { "question": "Diện tích đáy HHCN là 30, Sxq là 100. Stp = ?", "options": ["130", "160", "200", "115"], "answer": 1, "level": "medium" },
        { "question": "1 dm² bằng bao nhiêu cm²?", "options": ["10", "100", "1000", "1"], "answer": 1, "level": "easy" }
    ]
};

export const lesson119 = {
    "topic": "Hình học và Đo lường",
    "week": "24",
    "period": "119",
    "title": "Bài 50. Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật (tiết 3)",
    "desc": "Luyện tập diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật.",
    "content": `
        <div class="theory-section space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 text-left">
            <div class="glass-card p-10 rounded-[3rem] border border-emerald-50 shadow-2xl relative overflow-hidden bg-white/80 backdrop-blur-xl">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-xl md:text-xl shadow-lg">💡</div>
                    <h3 class="text-slate-800 italic text-xl md:text-xl font-black">Lưu ý quan trọng</h3>
                </div>
                <div class="bg-emerald-50 p-8 rounded-[2.5rem] border-l-8 border-emerald-500 shadow-sm">
                    <p class="text-2xl md:text-3xl font-bold text-emerald-900 leading-relaxed italic">
                        "Khi tính diện tích vật dụng không nắp (như bể cá, hộp hở), em chỉ tính diện tích xung quanh cộng với diện tích một mặt đáy."
                    </p>
                    <p class="mt-4 text-3xl md:text-4xl font-black text-center text-emerald-600">S = Sxq + S(1 đáy)</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
 
                    <!-- Bài 1 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                            <div class="flex justify-between items-start gap-6 mb-12 text-left">
                                <div class="flex items-start gap-6">
                                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                                    <div class="space-y-2">
                                        <span class="text-xl font-black text-blue-700 block">Bài 1. Phép tính diện tích xung quanh</span>
                                        <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black tracking-tight">Tính diện tích xung quanh của mỗi hình hộp chữ nhật dưới đây.</p>
                                    </div>
                                </div>
                                
                            </div>
 
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <!-- Hình a -->
                                <div class="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm text-center flex flex-col justify-between">
                                    <div>
                                        <p class="text-xl md:text-xl font-bold text-orange-600 mb-4 tracking-widest">Hình a</p>
                                        <div class="bg-orange-50/50 p-4 rounded-2xl mb-4 border border-orange-100 flex justify-center items-center h-64">
                                            <img src="assets/images/toan/toan_tap_2/119/1a.png" class="max-h-full max-w-full object-contain" alt="Hình a">
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2">
                                         <input type="text" id="ans-119-1-a" class="w-full bg-slate-50 border-none rounded-xl p-4 text-3xl md:text-3xl font-black text-center text-blue-600 outline-none focus:ring-4 ring-blue-100" placeholder="...">
                                         <span class="text-lg md:text-lg font-bold text-slate-400">cm²</span>
                                    </div>
                                </div>
                                <!-- Hình b -->
                                <div class="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm text-center flex flex-col justify-between">
                                    <div>
                                        <p class="text-xl md:text-xl font-bold text-cyan-600 mb-4 tracking-widest">Hình b</p>
                                        <div class="bg-cyan-50/50 p-4 rounded-2xl mb-4 border border-cyan-100 flex justify-center items-center h-64">
                                            <img src="assets/images/toan/toan_tap_2/119/1b.png" class="max-h-full max-w-full object-contain" alt="Hình b">
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2">
                                         <input type="text" id="ans-119-1-b" class="w-full bg-slate-50 border-none rounded-xl p-4 text-3xl md:text-3xl font-black text-center text-blue-600 outline-none focus:ring-4 ring-blue-100" placeholder="...">
                                         <span class="text-lg md:text-lg font-bold text-slate-400">cm²</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Lời giải ẩn cho giáo viên -->
                            <div id="sol-119-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                a) Diện tích xung quanh hình a là:<br>
                                (3 + 4) x 2 x 9 = 126 (cm²).<br>
                                b) Diện tích xung quanh hình b là:<br>
                                (5 + 4) x 2 x 7 = 126 (cm²).
                            </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-119-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-119-1" onclick="window.submitEx119()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
                    </div>
 
                    <!-- Bài 2 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                            <div class="flex justify-between items-start gap-6 mb-12 text-left">
                                <div class="flex items-start gap-6">
                                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                                    <div class="space-y-2">
                                        <span class="text-xl font-black text-blue-700 block">Bài 2. Diện tích kính bể cá</span>
                                        <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black tracking-tight">Các bể cá dưới đây được làm bằng kính và thiết kế dạng hình hộp chữ nhật không có nắp. Hãy tính diện tích kính được sử dụng để làm các bể cá đó.</p>
                                    </div>
                                </div>
                                
                            </div>
 
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <!-- Bể a -->
                                <div class="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm text-center flex flex-col justify-between">
                                    <div>
                                        <p class="text-xl md:text-xl font-bold text-orange-600 mb-4 tracking-widest">Bể a</p>
                                        <div class="bg-orange-50/50 p-4 rounded-2xl mb-4 border border-orange-100 flex justify-center items-center h-64">
                                            <img src="assets/images/toan/toan_tap_2/119/2a.png" class="max-h-full max-w-full object-contain" alt="Bể a">
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2">
                                         <input type="text" id="ans-119-2-a" class="w-full bg-slate-50 border-none rounded-xl p-4 text-3xl md:text-3xl font-black text-center text-blue-600 outline-none focus:ring-4 ring-blue-100" placeholder="...">
                                         <span class="text-lg md:text-lg font-bold text-slate-400">m²</span>
                                    </div>
                                </div>
                                <!-- Bể b -->
                                <div class="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm text-center flex flex-col justify-between">
                                    <div>
                                        <p class="text-xl md:text-xl font-bold text-cyan-600 mb-4 tracking-widest">Bể b</p>
                                        <div class="bg-cyan-50/50 p-4 rounded-2xl mb-4 border border-cyan-100 flex justify-center items-center h-64">
                                            <img src="assets/images/toan/toan_tap_2/119/2b.png" class="max-h-full max-w-full object-contain" alt="Bể b">
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2">
                                         <input type="text" id="ans-119-2-b" class="w-full bg-slate-50 border-none rounded-xl p-4 text-3xl md:text-3xl font-black text-center text-blue-600 outline-none focus:ring-4 ring-blue-100" placeholder="...">
                                         <span class="text-lg md:text-lg font-bold text-slate-400">cm²</span>
                                    </div>
                                </div>
                                <!-- Bể c -->
                                <div class="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm text-center flex flex-col justify-between">
                                    <div>
                                        <p class="text-xl md:text-xl font-bold text-emerald-600 mb-4 tracking-widest">Bể c</p>
                                        <div class="bg-emerald-50/50 p-4 rounded-2xl mb-4 border border-emerald-100 flex justify-center items-center h-64">
                                            <img src="assets/images/toan/toan_tap_2/119/2c.png" class="max-h-full max-w-full object-contain" alt="Bể c">
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2">
                                         <input type="text" id="ans-119-2-c" class="w-full bg-slate-50 border-none rounded-xl p-4 text-3xl md:text-3xl font-black text-center text-blue-600 outline-none focus:ring-4 ring-blue-100" placeholder="...">
                                         <span class="text-lg md:text-lg font-bold text-slate-400">dm²</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Lời giải ẩn cho giáo viên -->
                            <div id="sol-119-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                Diện tích kính làm bể cá không nắp = Sxq + S(1 đáy).<br>
                                a) Bể a: (2 + 1) x 2 x 1 + 2 x 1 = 8 m².<br>
                                b) Bể b: (200 + 100) x 2 x 200 + 200 x 100 = 140 000 cm².<br>
                                c) Bể c: (15 + 4) x 2 x 5 + 15 x 4 = 250 dm².
                            </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-119-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-119-2" onclick="window.submitEx119()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
                    </div>
 
                    <!-- Bài 3 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                            <div class="flex justify-between items-start gap-6 mb-12 text-left">
                                <div class="flex items-start gap-6">
                                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                                    <div class="space-y-2">
                                        <span class="text-xl font-black text-blue-700 block">Bài 3. Làm khuôn bánh chưng</span>
                                        <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black tracking-tight">Khuôn bánh chưng có dạng một hình hộp chữ nhật không có hai đáy như hình bên. Hỏi từ thanh gỗ dưới đây có thể làm được khuôn bánh chưng với kích thước như trên hay không?</p>
                                    </div>
                                </div>
                                
                            </div>
 
                            <div class="bg-amber-50/50 p-8 rounded-[2.5rem] border-2 border-amber-100 flex flex-col md:flex-row items-center gap-8 mb-8">
                                <div class="flex flex-col items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 w-full md:w-1/2 h-72 justify-center">
                                    <span class="text-sm md:text-base font-bold text-slate-400 tracking-widest">Khuôn bánh chưng (Không đáy)</span>
                                    <img src="assets/images/toan/toan_tap_2/119/3.1.png" class="max-h-56 object-contain" alt="Khuôn bánh chưng">
                                </div>
                                <div class="flex flex-col items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 w-full md:w-1/2 h-72 justify-center">
                                    <span class="text-sm md:text-base font-bold text-slate-400 tracking-widest">Thanh gỗ hiện có</span>
                                    <img src="assets/images/toan/toan_tap_2/119/3.2.png" class="max-h-56 object-contain" alt="Thanh gỗ">
                                </div>
                            </div>
 
                            <div class="flex justify-center gap-4 max-w-md mx-auto mb-12">
                                <button onclick="window.select_119_3('Có')" id="btn-119-3-Co" class="flex-1 py-4 bg-white border-2 border-slate-200 rounded-2xl font-black text-2xl md:text-3xl hover:border-blue-400 transition-all active:scale-95 animate-none text-slate-700">Có</button>
                                <button onclick="window.select_119_3('Không')" id="btn-119-3-Khong" class="flex-1 py-4 bg-white border-2 border-slate-200 rounded-2xl font-black text-2xl md:text-3xl hover:border-blue-400 transition-all active:scale-95 animate-none text-slate-700">Không</button>
                            </div>

                            <!-- Lời giải ẩn cho giáo viên -->
                            <div id="sol-119-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                Chu vi đáy khuôn bánh (hình vuông cạnh 16,5 cm) là: 16,5 x 4 = 66 (cm).<br>
                                Chiều dài thanh gỗ cần dùng là 66 cm, lớn hơn chiều dài thanh gỗ hiện có là 55 cm.<br>
                                Vậy không thể làm được khuôn bánh chưng từ thanh gỗ này.
                            </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-119-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-119-3" onclick="window.submitEx119()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
                    </div>
 
                    <!-- Bài 4 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                            <div class="flex justify-between items-start gap-6 mb-12 text-left">
                                <div class="flex items-start gap-6">
                                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">4</div>
                                    <div class="space-y-2">
                                        <span class="text-xl font-black text-blue-700 block">Bài 4. So sánh các khối hộp</span>
                                        <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black tracking-tight">Mỗi bạn Mai, Việt, Nam dùng bốn hình lập phương nhỏ như nhau có độ dài cạnh là 1 dm và xếp được các hình dưới đây. Hỏi bạn nào xếp được hình hộp chữ nhật có:</p>
                                    </div>
                                </div>
                                
                            </div>
 
                            <!-- Illustration Image -->
                            <div class="flex flex-col items-center gap-8 mb-8 bg-blue-50/50 p-6 rounded-[2.5rem] border border-blue-100">
                                <img src="assets/images/toan/toan_tap_2/119/4.png" alt="Xếp hình hộp" class="w-full max-w-[700px] h-auto rounded-3xl shadow-md border-4 border-white">
                            </div>
 
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <!-- Câu a -->
                                <div class="bg-blue-50/50 p-6 rounded-[2rem] border border-blue-100 flex flex-col justify-between">
                                    <p class="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed mb-4">a) Diện tích xung quanh lớn nhất?</p>
                                    <div class="grid grid-cols-3 gap-2">
                                        <button onclick="window.select_119_4a('Mai')" id="btn-119-4a-Mai" class="py-4 bg-white border-2 border-slate-200 rounded-xl font-black text-2xl md:text-3xl hover:border-blue-500 transition-all active:scale-95 animate-none text-slate-700">Mai</button>
                                        <button onclick="window.select_119_4a('Việt')" id="btn-119-4a-Việt" class="py-4 bg-white border-2 border-slate-200 rounded-xl font-black text-2xl md:text-3xl hover:border-blue-500 transition-all active:scale-95 animate-none text-slate-700">Việt</button>
                                        <button onclick="window.select_119_4a('Nam')" id="btn-119-4a-Nam" class="py-4 bg-white border-2 border-slate-200 rounded-xl font-black text-2xl md:text-3xl hover:border-blue-500 transition-all active:scale-95 animate-none text-slate-700">Nam</button>
                                    </div>
                                </div>
                                <!-- Câu b -->
                                <div class="bg-blue-50/50 p-6 rounded-[2rem] border border-blue-100 flex flex-col justify-between">
                                    <p class="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed mb-4">b) Diện tích toàn phần bé nhất?</p>
                                    <div class="grid grid-cols-3 gap-2">
                                        <button onclick="window.select_119_4b('Mai')" id="btn-119-4b-Mai" class="py-4 bg-white border-2 border-slate-200 rounded-xl font-black text-2xl md:text-3xl hover:border-blue-500 transition-all active:scale-95 animate-none text-slate-700">Mai</button>
                                        <button onclick="window.select_119_4b('Việt')" id="btn-119-4b-Việt" class="py-4 bg-white border-2 border-slate-200 rounded-xl font-black text-2xl md:text-3xl hover:border-blue-500 transition-all active:scale-95 animate-none text-slate-700">Việt</button>
                                        <button onclick="window.select_119_4b('Nam')" id="btn-119-4b-Nam" class="py-4 bg-white border-2 border-slate-200 rounded-xl font-black text-2xl md:text-3xl hover:border-blue-500 transition-all active:scale-95 animate-none text-slate-700">Nam</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Lời giải ẩn cho giáo viên -->
                            <div id="sol-119-4" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                Tính diện tích xung quanh (Sxq) và diện tích toàn phần (Stp) của các khối (với cạnh hình lập phương nhỏ là 1 dm):<br>
                                - Khối của Mai (1x1x4): Sxq = (1+1)x2x4 = 16 dm²; Stp = 16 + 1x1x2 = 18 dm².<br>
                                - Khối của Việt (4x1x1): Sxq = (4+1)x2x1 = 10 dm²; Stp = 10 + 4x1x2 = 18 dm².<br>
                                - Khối của Nam (2x2x1): Sxq = (2+2)x2x1 = 8 dm²; Stp = 8 + 2x2x2 = 16 dm².<br><br>
                                So sánh:<br>
                                a) Bạn Mai xếp được hình hộp chữ nhật có diện tích xung quanh lớn nhất (16 dm²).<br>
                                b) Bạn Nam xếp được hình hộp chữ nhật có diện tích toàn phần bé nhất (16 dm²).
                            </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-119-4')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-119-4" onclick="window.submitEx119()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
                    </div>
 
                </div>
            </div>
        </div>
    `,
    "quizPool": metadata.quizPool,
    "metadata": metadata
};

let ans3 = null, ans4a = null, ans4b = null;

window.check_119_1 = function() {
    const v1 = document.getElementById('ans-119-1-a').value.trim();
    const v2 = document.getElementById('ans-119-1-b').value.trim();
    const isCorrect = (v1==='126' && v2==='126');
    window.showMathFeedback(isCorrect, "126, 126", `${v1}, ${v2}`, "Sxq = Chu vi đáy x Chiều cao.", 
        `<div class="text-left space-y-4">
            <p class="text-2xl md:text-3xl font-bold text-emerald-600">Lời giải chi tiết:</p>
            <p class="text-xl md:text-2xl">a) Diện tích xung quanh hình a là: (3 + 4) x 2 x 9 = 126 (cm²)</p>
            <p class="text-xl md:text-2xl">b) Diện tích xung quanh hình b là: (5 + 4) x 2 x 7 = 126 (cm²)</p>
        </div>`
    );
    window.submitMathLesson("Tiết 119 - Bài 1", isCorrect ? 100 : 0, "ans-119-1-a", 0, 2, isCorrect ? 2 : 0);
};

window.check_119_2 = function() {
    const v1 = document.getElementById('ans-119-2-a').value.trim();
    const v2 = document.getElementById('ans-119-2-b').value.trim();
    const v3 = document.getElementById('ans-119-2-c').value.trim();
    const isCorrect = (v1==='8' && v2==='140000' && v3==='250');
    window.showMathFeedback(isCorrect, "a) 8; b) 140000; c) 250", `${v1}, ${v2}, ${v3}`, "Bể không nắp thì diện tích kính = Sxq + S(1 đáy).",
        `<div class="text-left space-y-4">
            <p class="text-2xl md:text-3xl font-bold text-emerald-600">Lời giải chi tiết:</p>
            <p class="text-xl md:text-2xl">Diện tích kính để làm bể cá là:</p>
            <ul class="list-disc pl-6 space-y-2 text-xl md:text-2xl text-slate-700">
                <li>Bể a: (2 + 1) x 2 x 1 + 2 x 1 = 8 (m²)</li>
                <li>Bể b: (200 + 100) x 2 x 200 + 200 x 100 = 140 000 (cm²)</li>
                <li>Bể c: (15 + 4) x 2 x 5 + 15 x 4 = 250 (dm²)</li>
            </ul>
        </div>`
    );
    window.submitMathLesson("Tiết 119 - Bài 2", isCorrect ? 100 : 0, "ans-119-2-a", 0, 3, isCorrect ? 3 : 0);
};

window.select_119_3 = function(c) {
    ans3 = c;
    ['Co','Khong'].forEach(v => {
        const btn = document.getElementById('btn-119-3-'+v);
        if (btn) {
            btn.className = (v===(c==='Có'?'Co':'Khong') ? "flex-1 py-4 bg-blue-600 border-2 border-transparent rounded-2xl font-black text-2xl md:text-3xl text-white shadow-xl transition-all uppercase" : "flex-1 py-4 bg-white border-2 border-slate-200 rounded-2xl font-black text-2xl md:text-3xl hover:border-blue-400 transition-all uppercase opacity-50 text-slate-700");
        }
    });
};

window.check_119_3 = function() {
    const isCorrect = ans3 === 'Không';
    window.showMathFeedback(isCorrect, "Không", ans3, "Tính chu vi đáy khuôn bánh (cạnh 16,5cm) rồi so sánh với chiều dài thanh gỗ.", 
        `<div class="text-left space-y-4">
            <p class="text-2xl md:text-3xl font-bold text-emerald-600">Lời giải chi tiết:</p>
            <p class="text-xl md:text-2xl">Chu vi đáy khuôn bánh (hình vuông cạnh 16,5 cm) là: 16,5 x 4 = 66 (cm).</p>
            <p class="text-xl md:text-2xl">Vì chiều dài thanh gỗ uốn khuôn phải bằng chu vi đáy khuôn bánh là 66 cm, lớn hơn chiều dài thanh gỗ hiện có là 55 cm, nên không thể làm được khuôn bánh chưng từ thanh gỗ này.</p>
        </div>`
    );
    window.submitMathLesson("Tiết 119 - Bài 3", isCorrect ? 100 : 0, "btn-119-3-Khong", 0, 1, isCorrect ? 1 : 0);
};

window.select_119_4a = function(c) {
    ans4a = c;
    ['Mai','Việt','Nam'].forEach(v => {
        const btn = document.getElementById('btn-119-4a-'+v);
        if (btn) {
            btn.className = (v===c ? "py-4 bg-blue-600 border-2 border-transparent rounded-xl font-black text-xl text-white shadow-xl transition-all" : "py-4 bg-white border-2 border-slate-200 rounded-xl font-black text-xl hover:border-blue-500 transition-all opacity-50 text-slate-700");
        }
    });
};

window.select_119_4b = function(c) {
    ans4b = c;
    ['Mai','Việt','Nam'].forEach(v => {
        const btn = document.getElementById('btn-119-4b-'+v);
        if (btn) {
            btn.className = (v===c ? "py-4 bg-blue-600 border-2 border-transparent rounded-xl font-black text-xl text-white shadow-xl transition-all" : "py-4 bg-white border-2 border-slate-200 rounded-xl font-black text-xl hover:border-blue-500 transition-all opacity-50 text-slate-700");
        }
    });
};

window.check_119_4 = function() {
    const isCorrect = (ans4a==='Mai' && ans4b==='Nam');
    window.showMathFeedback(isCorrect, "a) Mai; b) Nam", `${ans4a}, ${ans4b}`, "Tính diện tích xung quanh (Sxq) và diện tích toàn phần (Stp) của từng khối rồi so sánh.", 
        `<div class="text-left space-y-4">
            <p class="text-2xl md:text-3xl font-bold text-emerald-600">Lời giải chi tiết:</p>
            <p class="text-xl md:text-2xl">Tính diện tích của các khối hộp chữ nhật:</p>
            <ul class="list-disc pl-6 space-y-2 text-xl md:text-2xl text-slate-700">
                <li>Khối của bạn Mai (1x1x4): Sxq = (1 + 1) x 2 x 4 = 16 (dm²); Stp = 16 + 1 x 1 x 2 = 18 (dm²)</li>
                <li>Khối của bạn Việt (4x1x1): Sxq = (4 + 1) x 2 x 1 = 10 (dm²); Stp = 10 + 4 x 1 x 2 = 18 (dm²)</li>
                <li>Khối của bạn Nam (2x2x1): Sxq = (2 + 2) x 2 x 1 = 8 (dm²); Stp = 8 + 2 x 2 x 2 = 16 (dm²)</li>
            </ul>
            <p class="text-xl md:text-2xl font-bold">Kết luận:<br>a) Bạn Mai xếp được hình có diện tích xung quanh lớn nhất (16 dm²).<br>b) Bạn Nam xếp được hình có diện tích toàn phần bé nhất (16 dm²).</p>
        </div>`
    );
    window.submitMathLesson("Tiết 119 - Bài 4", isCorrect ? 100 : 0, "btn-119-4a-Mai", 0, 1, isCorrect ? 1 : 0);
};

/* --- MATH_BUILDER_METADATA ---
${JSON.stringify(metadata)}
--- END_METADATA --- */
