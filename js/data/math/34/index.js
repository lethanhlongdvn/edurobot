const metadata = {
    "lessonInfo": {
        "period": "34",
        "week": "7",
        "topic": "Các đơn vị đo diện tích",
        "title": "BÀI 16: CÁC ĐƠN VỊ ĐO DIỆN TÍCH (TIẾT 1)",
        "desc": "Hệ thống hóa các đơn vị đo diện tích đã học, mối quan hệ giữa chúng và luyện tập đổi đơn vị diện tích."
    },
    "bai_tap": [
        {
            "id": "34_1",
            "type": "select_one",
            "title": "Bài 1. Đổi diện tích mặt sàn nhà bìa cứng",
            "answers": ["D"],
            "guidance": "Để đổi đơn vị đo diện tích từ mét vuông sang đề-xi-mét vuông, em hãy nhân số đo đó với 100 nhé!",
            "solution": "Đổi 4 m² sang đơn vị đề-xi-mét vuông:<br>4 m² = 400 dm².<br>Đáp án đúng là <strong>D</strong>. Con làm rất tốt!"
        },
        {
            "id": "34_2",
            "type": "fill_multiple",
            "title": "Bài 2. Số ?",
            "answers": ["500", "1200", "600", "6", "25", "9", "205", "4004", "6", "15"],
            "guidance": "Áp dụng bảng đơn vị đo diện tích đã học để nhân hoặc chia cho 100, 10 000 hoặc 1 000 000.",
            "solution": "a) Đổi xuôi:<br>- 5 km² = 500 ha<br>- 12 m² = 1200 dm²<br>- 6 dm² = 600 cm²<br>b) Đổi ngược:<br>- 600 ha = 6 km²<br>- 2500 dm² = 25 m²<br>- 900 cm² = 9 dm²<br>c) Hỗn hợp:<br>- 2 m² 5 dm² = 205 dm²<br>- 40 cm² 4 mm² = 4004 mm²<br>- 615 dm² = 6 m² 15 dm².<br>Con giỏi quá!"
        },
        {
            "id": "34_3",
            "type": "select_one",
            "title": "Bài 3. Ước lượng diện tích mặt bàn học",
            "answers": ["B"],
            "guidance": "Mặt bàn học sinh tiểu học rộng khoảng nửa mét vuông, tương đương $50 dm^2$ ($50 cm^2$ quá nhỏ, $50 m^2$ và $50 ha$ quá lớn).",
            "solution": "Mặt bàn học của Việt có diện tích khoảng 50 dm².<br>Đáp án đúng là B. Con ước lượng rất giỏi!"
        }
    ],
    "quizPool": [
        { "question": "Hai đơn vị đo diện tích liền kề hơn kém nhau bao nhiêu lần?", "options": ["100 lần", "10 lần", "1 000 lần", "10 000 lần"], "answer": 0 },
        { "question": "Quy đổi: 5 km² = ... ha", "options": ["500 ha", "50 ha", "5 000 ha", "50 000 ha"], "answer": 0 },
        { "question": "Quy đổi: 12 m² = ... dm²", "options": ["1 200 dm²", "120 dm²", "12 000 dm²", "120 000 dm²"], "answer": 0 },
        { "question": "Quy đổi: 6 dm² = ... cm²", "options": ["600 cm²", "60 cm²", "6 000 cm²", "0,6 cm²"], "answer": 0 },
        { "question": "Quy đổi: 600 ha = ... km²", "options": ["6 km²", "60 km²", "0,6 km²", "6000 km²"], "answer": 0 },
        { "question": "Quy đổi: 2 500 dm² = ... m²", "options": ["25 m²", "250 m²", "2,5 m²", "25000 m²"], "answer": 0 },
        { "question": "Quy đổi: 900 cm² = ... dm²", "options": ["9 dm²", "90 dm²", "0,9 dm²", "9000 dm²"], "answer": 0 },
        { "question": "Quy đổi: 2 m² 5 dm² = ... dm²", "options": ["205 dm²", "250 dm²", "2005 dm²", "25 dm²"], "answer": 0 },
        { "question": "Quy đổi: 40 cm² 4 mm² = ... mm²", "options": ["4 004 mm²", "404 mm²", "4 400 mm²", "44 mm²"], "answer": 0 },
        { "question": "Quy đổi: 615 dm² = ... m² ... dm²", "options": ["6 m² 15 dm²", "61 m² 5 dm²", "6 m² 1,5 dm²", "60 m² 15 dm²"], "answer": 0 },
        { "question": "Diện tích mặt bàn học sinh thường khoảng:", "options": ["50 dm²", "50 cm²", "50 m²", "50 ha"], "answer": 0 },
        { "question": "Quy đổi: 1 m² = ... cm²", "options": ["10 000 cm²", "100 cm²", "1 000 cm²", "1 000 000 cm²"], "answer": 0 },
        { "question": "Quy đổi: 1 dm² = ... mm²", "options": ["10 000 mm²", "100 mm²", "1 000 mm²", "1 000 000 mm²"], "answer": 0 },
        { "question": "Đơn vị đo diện tích nào lớn nhất trong các đơn vị sau?", "options": ["km²", "ha", "m²", "dm²"], "answer": 0 },
        { "question": "Đơn vị đo diện tích nào nhỏ nhất trong các đơn vị sau?", "options": ["mm²", "cm²", "dm²", "m²"], "answer": 0 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson34 = {
    ...metadata.lessonInfo,
    "content": `
        <div class="theory-section space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 pt-6">
            <div class="p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-700 to-blue-900 shadow-2xl relative overflow-hidden text-white">
<div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full -ml-10 -mb-10 blur-2xl"></div>
<div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
<div class="w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-md rounded-[2rem] flex items-center justify-center shadow-inner border border-white/30">
<span class="text-5xl md:text-7xl">📏</span>
</div>
<div class="text-center md:text-left">
<h2 class="text-2xl md:text-4xl font-black mb-2 tracking-tight">CÁC ĐƠN VỊ ĐO DIỆN TÍCH</h2>
<p class="text-blue-100 text-lg md:text-2xl font-medium opacity-90">Hệ thống hóa toàn bộ các đơn vị đo diện tích đã học từ lớn đến bé và mối liên hệ giữa chúng!</p>
</div>
</div>
</div>
<div class="p-8 rounded-[2.5rem] bg-white border-2 border-blue-700 shadow-none space-y-6">
<div class="flex items-center gap-4">
<div class="w-12 h-12 bg-blue-700 rounded-2xl flex items-center justify-center text-white text-xl md:text-3xl shadow-lg">
<i class="fas fa-table"></i>
</div>
<h3 class="text-2xl md:text-4xl font-black text-blue-900">Bảng hệ thống đơn vị đo diện tích</h3>
</div>
<div class="flex flex-col items-center gap-6">
<!-- Ảnh khám phá phía trên -->
<div class="w-full w-full flex justify-center">
<img alt="Khám phá các đơn vị đo diện tích" class="w-full h-auto rounded-3xl border-4 border-blue-100 shadow-md" src="assets/images/toan/toan_tap_1/34/KP.png"/>
</div>
<!-- Bảng hệ thống phía dưới -->
<div class="w-full overflow-x-auto rounded-2xl border-2 border-blue-700 mt-2">
<table class="w-full text-center border-collapse text-xl md:text-3xl font-bold min-w-[700px]">
<thead>
<tr class="bg-blue-50 border-b-2 border-blue-700 text-indigo-950">
<th class="p-4 border-r-2 border-blue-700 w-1/3">Lớn hơn mét vuông</th>
<th class="p-4 border-r-2 border-blue-700 w-1/6">Mét vuông</th>
<th class="p-4 w-1/2">Bé hơn mét vuông</th>
</tr>
<tr class="bg-blue-50/50 border-b-2 border-blue-700 text-blue-900 text-lg md:text-2xl font-medium">
<th class="p-3 border-r-2 border-blue-700">
<div class="grid grid-cols-2 gap-2">
<span>km² (ki-lô-mét vuông)</span>
<span>ha (héc-ta)</span>
</div>
</th>
<th class="p-3 border-r-2 border-blue-700">m² (mét vuông)</th>
<th class="p-3">
<div class="grid grid-cols-3 gap-2">
<span>dm² (đề-xi-mét vuông)</span>
<span>cm² (xen-ti-mét vuông)</span>
<span>mm² (mi-li-mét vuông)</span>
</div>
</th>
</tr>
</thead>
<tbody>
<tr class="text-xs md:text-base text-slate-700">
<!-- Cột Lớn hơn m2 -->
<td class="p-4 border-r-2 border-blue-700 vertical-align-top">
<div class="grid grid-cols-2 gap-4">
<div class="space-y-2">
<p class="font-black text-blue-800">1 km²</p>
<p>= 100 ha</p>
<p>= 1 000 000 m²</p>
</div>
<div class="space-y-2">
<p class="font-black text-blue-800">1 ha</p>
<p>= 1/100 km²</p>
<p>= 10 000 m²</p>
</div>
</div>
</td>
<!-- Cột m2 -->
<td class="p-4 border-r-2 border-blue-700 space-y-2">
<p class="font-black text-emerald-800">1 m²</p>
<p>= 1/10 000 ha</p>
<p>= 100 dm²</p>
</td>
<!-- Cột Bé hơn m2 -->
<td class="p-4">
<div class="grid grid-cols-3 gap-4">
<div class="space-y-2">
<p class="font-black text-blue-800">1 dm²</p>
<p>= 1/100 m²</p>
<p>= 100 cm²</p>
</div>
<div class="space-y-2">
<p class="font-black text-blue-800">1 cm²</p>
<p>= 1/100 dm²</p>
<p>= 100 mm²</p>
</div>
<div class="space-y-2">
<p class="font-black text-blue-800">1 mm²</p>
<p>= 1/100 cm²</p>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
        </div>
        `,
    "practice": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12 text-xl md:text-3xl text-left">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" style="display:flex; transition:transform 0.45s cubic-bezier(0.4,0,0.2,1);">  

                    <!-- Trang 1: Bài 1 Hoạt động (Nhà bìa cứng) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-4">
                            <div class="flex items-center justify-between mb-2">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-700 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">1</div>
                                    <h3 class="text-lg md:text-2xl lg:text-3xl text-blue-900 font-black uppercase tracking-tighter">Chọn câu trả lời đúng</h3>
                                </div>
                                <button id="btn-toggle-34-1" onclick="window.toggle_34_1_sol()" class="bg-amber-500 text-white text-lg font-bold px-4 py-2 rounded-2xl hover:bg-amber-600 transition-all">Hiện bài giải</button>
                            </div>

                            <p class="text-lg md:text-xl font-bold text-slate-600">
                                Mai và Mi vừa làm một ngôi nhà bằng bìa cứng. Mặt sàn của ngôi nhà có dạng hình vuông với diện tích là <strong>4 m²</strong>. Diện tích mặt sàn của ngôi nhà đó tính theo đơn vị đề-xi-mét vuông là:
                            </p>

                            <!-- Lời giải cho giáo viên -->
                            <div id="sol-34-1-container" class="hidden p-6 bg-amber-50 border-2 border-amber-500 rounded-[2rem] space-y-2 mb-4 text-lg font-bold text-amber-900">
                                <div class="underline text-xl font-black">Bài giải gợi ý:</div>
                                <p>Đổi đơn vị diện tích: 1 m² = 100 dm².</p>
                                <p>Diện tích mặt sàn của ngôi nhà tính theo đề-xi-mét vuông là:</p>
                                <p>4 m² = 4 &times; 100 = 400 dm².</p>
                                <p>Đáp án đúng là <strong>D</strong>.</p>
                            </div>

                            <div class="space-y-6 w-full mx-auto py-2">
                                <div class="flex justify-center">
                                    <img src="assets/images/toan/toan_tap_1/34/1.png" alt="Mô hình nhà bìa cứng" class="w-full w-full h-auto rounded-[2rem] border-4 border-blue-100 shadow-md">
                                </div>

                                <div class="grid grid-cols-2 gap-4 text-center">
                                    <div id="card-house-A" onclick="window.selectHouse('A')" class="p-4 bg-blue-50/50 border-2 border-blue-700 rounded-2xl cursor-pointer hover:bg-blue-100 transition-all font-black text-xl text-blue-900">
                                        🏠 A. 4/100 dm²
                                    </div>
                                    <div id="card-house-B" onclick="window.selectHouse('B')" class="p-4 bg-blue-50/50 border-2 border-blue-700 rounded-2xl cursor-pointer hover:bg-blue-100 transition-all font-black text-xl text-blue-900">
                                        🏠 B. 1/400 dm²
                                    </div>
                                    <div id="card-house-C" onclick="window.selectHouse('C')" class="p-4 bg-blue-50/50 border-2 border-blue-700 rounded-2xl cursor-pointer hover:bg-blue-100 transition-all font-black text-xl text-blue-900">
                                        🏠 C. 40 dm²
                                    </div>
                                    <div id="card-house-D" onclick="window.selectHouse('D')" class="p-4 bg-blue-50/50 border-2 border-blue-700 rounded-2xl cursor-pointer hover:bg-blue-100 transition-all font-black text-xl text-blue-900">
                                        🏠 D. 400 dm²
                                    </div>
                                </div>
                            </div>

                            <input type="hidden" id="ans-34-1" value="" class="md:text-3xl">

                            <div class="flex justify-end mt-4">
                                <button id="btn-check-34-1" onclick="window.check_34_1()" class="w-20 h-20 bg-blue-700 border-2 border-blue-800 text-white rounded-[1.5rem] font-black text-3xl md:text-5xl flex items-center justify-center hover:bg-blue-800 transition-all active:scale-95">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Trang 2: Bài 2 Hoạt động (Số ?) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-4">
                            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-700 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">2</div>
                                    <h3 class="text-lg md:text-2xl lg:text-3xl text-blue-900 font-black uppercase tracking-tighter">Số ?</h3>
                                </div>
                                <div class="flex bg-slate-100 border border-slate-200 rounded-2xl p-1 shadow-inner gap-1">
                                    <button id="tab-34-2-btn-a" onclick="window.switchTab_34_2('a')" class="px-4 py-2 rounded-xl text-base md:text-lg font-bold bg-blue-600 text-white shadow transition-all duration-300">Phần a</button>
                                    <button id="tab-34-2-btn-b" onclick="window.switchTab_34_2('b')" class="px-4 py-2 rounded-xl text-base md:text-lg font-bold text-blue-600 hover:bg-blue-100/50 transition-all duration-300">Phần b</button>
                                    <button id="tab-34-2-btn-c" onclick="window.switchTab_34_2('c')" class="px-4 py-2 rounded-xl text-base md:text-lg font-bold text-blue-600 hover:bg-blue-100/50 transition-all duration-300">Phần c</button>
                                </div>
                                <button id="btn-toggle-34-2" onclick="window.toggle_34_2_sol()" class="bg-amber-500 text-white text-lg font-bold px-4 py-2 rounded-2xl hover:bg-amber-600 transition-all">Hiện bài giải</button>
                            </div>

                            <!-- Lời giải cho giáo viên -->
                            <div id="sol-34-2-container" class="hidden p-6 bg-amber-50 border-2 border-amber-500 rounded-[2rem] space-y-2 mb-4 text-lg font-bold text-amber-900">
                                <div class="underline text-xl font-black">Bài giải gợi ý:</div>
                                <p>a) Đổi xuôi:</p>
                                <p>- 5 km² = 500 ha</p>
                                <p>- 12 m² = 1200 dm²</p>
                                <p>- 6 dm² = 600 cm²</p>
                                <p>b) Đổi ngược:</p>
                                <p>- 600 ha = 6 km²</p>
                                <p>- 2500 dm² = 25 m²</p>
                                <p>- 900 cm² = 9 dm²</p>
                                <p>c) Hợp chất:</p>
                                <p>- 2 m² 5 dm² = 205 dm²</p>
                                <p>- 40 cm² 4 mm² = 4004 mm²</p>
                                <p>- 615 dm² = 6 m² và 15 dm²</p>
                            </div>

                            <div class="w-full mx-auto py-4">
                                <!-- Nhóm a -->
                                <div id="tab-34-2-content-a" class="p-6 bg-blue-50/20 border-2 border-blue-700 rounded-[2rem] space-y-6 animate-in fade-in duration-300">
                                    <h4 class="text-xl font-black text-indigo-950 border-b border-blue-100 pb-2">a) Đổi từ đơn vị lớn hơn sang bé hơn</h4>
                                    <div class="flex items-center flex-nowrap whitespace-nowrap overflow-x-auto gap-2 font-black text-2xl md:text-3xl py-2">
                                        <span>5 km² =</span>
                                        <input id="ans-34-2-a1" type="text" size="1" oninput="this.size = Math.max(1, this.value.length);" class="h-12 border-2 border-blue-700 rounded-xl text-center font-black text-blue-800 md:text-3xl" placeholder="?" style="width: auto !important; min-width: 50px; padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                        <span>ha</span>
                                    </div>
                                    <div class="flex items-center flex-nowrap whitespace-nowrap overflow-x-auto gap-2 font-black text-2xl md:text-3xl py-2 border-t border-blue-100 pt-4">
                                        <span>12 m² =</span>
                                        <input id="ans-34-2-a2" type="text" size="1" oninput="this.size = Math.max(1, this.value.length);" class="h-12 border-2 border-blue-700 rounded-xl text-center font-black text-blue-800 md:text-3xl" placeholder="?" style="width: auto !important; min-width: 50px; padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                        <span>dm²</span>
                                    </div>
                                    <div class="flex items-center flex-nowrap whitespace-nowrap overflow-x-auto gap-2 font-black text-2xl md:text-3xl py-2 border-t border-blue-100 pt-4">
                                        <span>6 dm² =</span>
                                        <input id="ans-34-2-a3" type="text" size="1" oninput="this.size = Math.max(1, this.value.length);" class="h-12 border-2 border-blue-700 rounded-xl text-center font-black text-blue-800 md:text-3xl" placeholder="?" style="width: auto !important; min-width: 50px; padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                        <span>cm²</span>
                                    </div>
                                </div>

                                <!-- Nhóm b -->
                                <div id="tab-34-2-content-b" class="hidden p-6 bg-blue-50/20 border-2 border-blue-700 rounded-[2rem] space-y-6 animate-in fade-in duration-300">
                                    <h4 class="text-xl font-black text-indigo-950 border-b border-blue-100 pb-2">b) Đổi từ đơn vị bé hơn sang lớn hơn</h4>
                                    <div class="flex items-center flex-nowrap whitespace-nowrap overflow-x-auto gap-2 font-black text-2xl md:text-3xl py-2">
                                        <span>600 ha =</span>
                                        <input id="ans-34-2-b1" type="text" size="1" oninput="this.size = Math.max(1, this.value.length);" class="h-12 border-2 border-blue-700 rounded-xl text-center font-black text-blue-800 md:text-3xl" placeholder="?" style="width: auto !important; min-width: 50px; padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                        <span>km²</span>
                                    </div>
                                    <div class="flex items-center flex-nowrap whitespace-nowrap overflow-x-auto gap-2 font-black text-2xl md:text-3xl py-2 border-t border-blue-100 pt-4">
                                        <span>2 500 dm² =</span>
                                        <input id="ans-34-2-b2" type="text" size="1" oninput="this.size = Math.max(1, this.value.length);" class="h-12 border-2 border-blue-700 rounded-xl text-center font-black text-blue-800 md:text-3xl" placeholder="?" style="width: auto !important; min-width: 50px; padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                        <span>m²</span>
                                    </div>
                                    <div class="flex items-center flex-nowrap whitespace-nowrap overflow-x-auto gap-2 font-black text-2xl md:text-3xl py-2 border-t border-blue-100 pt-4">
                                        <span>900 cm² =</span>
                                        <input id="ans-34-2-b3" type="text" size="1" oninput="this.size = Math.max(1, this.value.length);" class="h-12 border-2 border-blue-700 rounded-xl text-center font-black text-blue-800 md:text-3xl" placeholder="?" style="width: auto !important; min-width: 50px; padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                        <span>dm²</span>
                                    </div>
                                </div>

                                <!-- Nhóm c -->
                                <div id="tab-34-2-content-c" class="hidden p-6 bg-blue-50/20 border-2 border-blue-700 rounded-[2rem] space-y-6 animate-in fade-in duration-300">
                                    <h4 class="text-xl font-black text-indigo-950 border-b border-blue-100 pb-2">c) Đổi đơn vị đo dưới dạng hợp chất</h4>
                                    <div class="flex items-center flex-nowrap whitespace-nowrap overflow-x-auto gap-2 font-black text-2xl md:text-3xl py-2">
                                        <span>2 m² 5 dm² =</span>
                                        <input id="ans-34-2-c1" type="text" size="1" oninput="this.size = Math.max(1, this.value.length);" class="h-12 border-2 border-blue-700 rounded-xl text-center font-black text-blue-800 md:text-3xl" placeholder="?" style="width: auto !important; min-width: 50px; padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                        <span>dm²</span>
                                    </div>
                                    <div class="flex items-center flex-nowrap whitespace-nowrap overflow-x-auto gap-2 font-black text-2xl md:text-3xl py-2 border-t border-blue-100 pt-4">
                                        <span>40 cm² 4 mm² =</span>
                                        <input id="ans-34-2-c2" type="text" size="1" oninput="this.size = Math.max(1, this.value.length);" class="h-12 border-2 border-blue-700 rounded-xl text-center font-black text-blue-800 md:text-3xl" placeholder="?" style="width: auto !important; min-width: 50px; padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                        <span>mm²</span>
                                    </div>
                                    <div class="flex items-center flex-nowrap whitespace-nowrap overflow-x-auto gap-2 font-black text-2xl md:text-3xl py-2 border-t border-blue-100 pt-4">
                                        <span>615 dm² =</span>
                                        <input id="ans-34-2-c3" type="text" size="1" oninput="this.size = Math.max(1, this.value.length);" class="h-12 border-2 border-blue-700 rounded-xl text-center font-black text-blue-800 md:text-3xl" placeholder="?" style="width: auto !important; min-width: 50px; padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                        <span>m²</span>
                                        <input id="ans-34-2-c4" type="text" size="1" oninput="this.size = Math.max(1, this.value.length);" class="h-12 border-2 border-blue-700 rounded-xl text-center font-black text-blue-800 md:text-3xl" placeholder="?" style="width: auto !important; min-width: 50px; padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                        <span>dm²</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end mt-4">
                                <button id="btn-check-34-2" onclick="window.check_34_2()" class="w-20 h-20 bg-blue-700 border-2 border-blue-800 text-white rounded-[1.5rem] font-black text-3xl md:text-5xl flex items-center justify-center hover:bg-blue-800 transition-all active:scale-95">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Trang 3: Bài 3 Hoạt động (Diện tích mặt bàn học) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-4">
                            <div class="flex items-center justify-between mb-2">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-700 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">3</div>
                                    <h3 class="text-lg md:text-2xl lg:text-3xl text-blue-900 font-black uppercase tracking-tighter">Ước lượng diện tích bàn học</h3>
                                </div>
                                <button id="btn-toggle-34-3" onclick="window.toggle_34_3_sol()" class="bg-amber-500 text-white text-lg font-bold px-4 py-2 rounded-2xl hover:bg-amber-600 transition-all">Hiện bài giải</button>
                            </div>

                            <p class="text-lg md:text-xl font-bold text-slate-600">
                                Biết mặt bàn học của Việt có dạng hình chữ nhật. Diện tích mặt bàn đó khoảng:
                            </p>

                            <!-- Lời giải cho giáo viên -->
                            <div id="sol-34-3-container" class="hidden p-6 bg-amber-50 border-2 border-amber-500 rounded-[2rem] space-y-2 mb-4 text-lg font-bold text-amber-900">
                                <div class="underline text-xl font-black">Bài giải gợi ý:</div>
                                <p>- 50 cm²: quá nhỏ (chỉ tương đương diện tích bao diêm).</p>
                                <p>- 50 m²: quá lớn (bằng diện tích một phòng học).</p>
                                <p>- 50 ha: cực kỳ rộng lớn (bằng diện tích cả nông trại).</p>
                                <p>- **50 dm²**: khoảng 0,5 m² (phù hợp với diện tích bàn học sinh tiểu học).</p>
                                <p>Đáp án đúng là **B**.</p>
                            </div>

                            <div class="space-y-6 w-full mx-auto py-2">
                                <div class="flex justify-center">
                                    <img src="assets/images/toan/toan_tap_1/34/3.png" alt="Đo diện tích bàn học" class="w-full w-full h-auto rounded-[2rem] border-4 border-blue-100 shadow-md">
                                </div>

                                <div class="grid grid-cols-2 gap-4 text-center">
                                    <div id="card-table-A" onclick="window.selectTable('A')" class="p-4 bg-blue-50/50 border-2 border-blue-700 rounded-2xl cursor-pointer hover:bg-blue-100 transition-all font-black text-xl text-blue-900">
                                        📐 A. 50 cm²
                                    </div>
                                    <div id="card-table-B" onclick="window.selectTable('B')" class="p-4 bg-blue-50/50 border-2 border-blue-700 rounded-2xl cursor-pointer hover:bg-blue-100 transition-all font-black text-xl text-blue-900">
                                        📐 B. 50 dm²
                                    </div>
                                    <div id="card-table-C" onclick="window.selectTable('C')" class="p-4 bg-blue-50/50 border-2 border-blue-700 rounded-2xl cursor-pointer hover:bg-blue-100 transition-all font-black text-xl text-blue-900">
                                        📐 C. 50 m²
                                    </div>
                                    <div id="card-table-D" onclick="window.selectTable('D')" class="p-4 bg-blue-50/50 border-2 border-blue-700 rounded-2xl cursor-pointer hover:bg-blue-100 transition-all font-black text-xl text-blue-900">
                                        📐 D. 50 ha
                                    </div>
                                </div>
                            </div>

                            <input type="hidden" id="ans-34-3" value="" class="md:text-3xl">

                            <div class="flex justify-end mt-4">
                                <button id="btn-check-34-3" onclick="window.check_34_3()" class="w-20 h-20 bg-blue-700 border-2 border-blue-800 text-white rounded-[1.5rem] font-black text-3xl md:text-5xl flex items-center justify-center hover:bg-blue-800 transition-all active:scale-95">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <script>
            // ==================== TOGGLE BÀI GIẢI ====================
            window.toggle_34_1_sol = function() {
                var el = document.getElementById('sol-34-1-container');
                var btn = document.getElementById('btn-toggle-34-1');
                if (el.classList.contains('hidden')) {
                    el.classList.remove('hidden');
                    btn.textContent = 'Ẩn bài giải';
                } else {
                    el.classList.add('hidden');
                    btn.textContent = 'Hiện bài giải';
                }
            };

            window.toggle_34_2_sol = function() {
                var el = document.getElementById('sol-34-2-container');
                var btn = document.getElementById('btn-toggle-34-2');
                if (el.classList.contains('hidden')) {
                    el.classList.remove('hidden');
                    btn.textContent = 'Ẩn bài giải';
                } else {
                    el.classList.add('hidden');
                    btn.textContent = 'Hiện bài giải';
                }
            };

            window.toggle_34_3_sol = function() {
                var el = document.getElementById('sol-34-3-container');
                var btn = document.getElementById('btn-toggle-34-3');
                if (el.classList.contains('hidden')) {
                    el.classList.remove('hidden');
                    btn.textContent = 'Ẩn bài giải';
                } else {
                    el.classList.add('hidden');
                    btn.textContent = 'Hiện bài giải';
                }
            };

            function normalize(str) {
                if (!str) return '';
                return str.toString().replace(/\\s+/g, '').replace(/,/g, '.').replace(/\\./g, ',').trim().toLowerCase();
            }

            // Selection for house (Bài 1)
             window.selectHouse = function(val) {
                document.getElementById('ans-34-1').value = val;
                var opts = ['A', 'B', 'C', 'D'];
                opts.forEach(function(o) {
                    var el = document.getElementById('card-house-' + o);
                    if (el) {
                        if (o === val) {
                            el.style.borderColor = '#2563eb';
                            el.style.background = '#dbeafe';
                        } else {
                            el.style.borderColor = '#2563eb';
                            el.style.background = '#eff6ff';
                        }
                    }
                });
            };

            window.switchTab_34_2 = function(tab) {
                var contentA = document.getElementById('tab-34-2-content-a');
                var contentB = document.getElementById('tab-34-2-content-b');
                var contentC = document.getElementById('tab-34-2-content-c');
                var btnA = document.getElementById('tab-34-2-btn-a');
                var btnB = document.getElementById('tab-34-2-btn-b');
                var btnC = document.getElementById('tab-34-2-btn-c');
                if (!contentA || !contentB || !contentC || !btnA || !btnB || !btnC) return;
                
                // Hide all
                contentA.classList.add('hidden');
                contentB.classList.add('hidden');
                contentC.classList.add('hidden');
                
                // Set all inactive
                btnA.className = "px-4 py-2 rounded-xl text-base md:text-lg font-bold text-blue-600 hover:bg-blue-100/50 transition-all duration-300";
                btnB.className = "px-4 py-2 rounded-xl text-base md:text-lg font-bold text-blue-600 hover:bg-blue-100/50 transition-all duration-300";
                btnC.className = "px-4 py-2 rounded-xl text-base md:text-lg font-bold text-blue-600 hover:bg-blue-100/50 transition-all duration-300";
                
                if (tab === 'a') {
                    contentA.classList.remove('hidden');
                    btnA.className = "px-4 py-2 rounded-xl text-base md:text-lg font-bold bg-blue-600 text-white shadow transition-all duration-300";
                } else if (tab === 'b') {
                    contentB.classList.remove('hidden');
                    btnB.className = "px-4 py-2 rounded-xl text-base md:text-lg font-bold bg-blue-600 text-white shadow transition-all duration-300";
                } else if (tab === 'c') {
                    contentC.classList.remove('hidden');
                    btnC.className = "px-4 py-2 rounded-xl text-base md:text-lg font-bold bg-blue-600 text-white shadow transition-all duration-300";
                }
            };

            // ==================== BÀI 1 KIỂM TRA ====================
            window.check_34_1 = function() {
                var val = document.getElementById('ans-34-1').value;
                var isCorrect = (val === 'D');
                
                var rightAns = "D (400 dm²)";
                var studentAns = val;

                var meta = window.MATH_BUILDER_METADATA.bai_tap[0];
                if (window.showMathFeedback) window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-34-1', 0, 1, isCorrect ? 1 : 0);
                }
            };

            // ==================== BÀI 2 KIỂM TRA ====================
            window.check_34_2 = function() {
                var meta = window.MATH_BUILDER_METADATA.bai_tap[1];
                
                var activeTab = 'a';
                if (!document.getElementById('tab-34-2-content-b').classList.contains('hidden')) {
                    activeTab = 'b';
                } else if (!document.getElementById('tab-34-2-content-c').classList.contains('hidden')) {
                    activeTab = 'c';
                }

                if (activeTab === 'a') {
                    var a1 = normalize(document.getElementById('ans-34-2-a1').value);
                    var a2 = normalize(document.getElementById('ans-34-2-a2').value);
                    var a3 = normalize(document.getElementById('ans-34-2-a3').value);
                    var isCorrect = (a1 === '500' && a2 === '1200' && a3 === '600');
                    
                    var rightAns = "a) 5 km² = 500 ha, 12 m² = 1200 dm², 6 dm² = 600 cm²";
                    var studentAns = "a: " + a1 + ", " + a2 + ", " + a3;
                    var guidance = "a) Để đổi đơn vị đo diện tích từ lớn hơn sang bé hơn liền kề, em nhân số đo đó với 100.";
                    var solution = "a) Đổi xuôi:<br>- 5 km² = 5 × 100 = 500 ha<br>- 12 m² = 12 × 100 = 1200 dm²<br>- 6 dm² = 6 × 100 = 600 cm²";

                    if (window.showMathFeedback) window.showMathFeedback(isCorrect, rightAns, studentAns, guidance, solution);
                    if (window.submitMathLesson) {
                        window.submitMathLesson(meta.title + ' - Phần a', isCorrect ? 100 : 0, 'btn-check-34-2', 0, 1, isCorrect ? 1 : 0);
                    }
                } else if (activeTab === 'b') {
                    var b1 = normalize(document.getElementById('ans-34-2-b1').value);
                    var b2 = normalize(document.getElementById('ans-34-2-b2').value);
                    var b3 = normalize(document.getElementById('ans-34-2-b3').value);
                    var isCorrect = (b1 === '6' && b2 === '25' && b3 === '9');
                    
                    var rightAns = "b) 600 ha = 6 km², 2 500 dm² = 25 m², 900 cm² = 9 dm²";
                    var studentAns = "b: " + b1 + ", " + b2 + ", " + b3;
                    var guidance = "b) Để đổi đơn vị đo diện tích từ bé hơn sang lớn hơn liền kề, em chia số đo đó cho 100.";
                    var solution = "b) Đổi ngược:<br>- 600 ha = 600 ÷ 100 = 6 km²<br>- 2500 dm² = 2500 ÷ 100 = 25 m²<br>- 900 cm² = 900 ÷ 100 = 9 dm²";

                    if (window.showMathFeedback) window.showMathFeedback(isCorrect, rightAns, studentAns, guidance, solution);
                    if (window.submitMathLesson) {
                        window.submitMathLesson(meta.title + ' - Phần b', isCorrect ? 100 : 0, 'btn-check-34-2', 0, 1, isCorrect ? 1 : 0);
                    }
                } else {
                    var c1 = normalize(document.getElementById('ans-34-2-c1').value);
                    var c2 = normalize(document.getElementById('ans-34-2-c2').value);
                    var c3 = normalize(document.getElementById('ans-34-2-c3').value);
                    var c4 = normalize(document.getElementById('ans-34-2-c4').value);
                    var isCorrect = (c1 === '205' && c2 === '4004' && c3 === '6' && c4 === '15');
                    
                    var rightAns = "c) 2 m² 5 dm² = 205 dm², 40 cm² 4 mm² = 4004 mm², 615 dm² = 6 m² 15 dm²";
                    var studentAns = "c: " + c1 + ", " + c2 + ", " + c3 + ", " + c4;
                    var guidance = "c) Hãy quy đổi từng đơn vị đo về đơn vị đo chung rồi cộng kết quả lại nhé!";
                    var solution = "c) Hỗn hợp:<br>- 2 m² 5 dm² = 200 dm² + 5 dm² = 205 dm²<br>- 40 cm² 4 mm² = 4000 mm² + 4 mm² = 4004 mm²<br>- 615 dm² = 600 dm² + 15 dm² = 6 m² 15 dm²";

                    if (window.showMathFeedback) window.showMathFeedback(isCorrect, rightAns, studentAns, guidance, solution);
                    if (window.submitMathLesson) {
                        window.submitMathLesson(meta.title + ' - Phần c', isCorrect ? 100 : 0, 'btn-check-34-2', 0, 1, isCorrect ? 1 : 0);
                    }
                }
            };

            // Selection for table (Bài 3)
             window.selectTable = function(val) {
                document.getElementById('ans-34-3').value = val;
                var opts = ['A', 'B', 'C', 'D'];
                opts.forEach(function(o) {
                    var el = document.getElementById('card-table-' + o);
                    if (el) {
                        if (o === val) {
                            el.style.borderColor = '#2563eb';
                            el.style.background = '#dbeafe';
                        } else {
                            el.style.borderColor = '#2563eb';
                            el.style.background = '#eff6ff';
                        }
                    }
                });
            };

            // ==================== BÀI 3 KIỂM TRA ====================
            window.check_34_3 = function() {
                var val = document.getElementById('ans-34-3').value;
                var isCorrect = (val === 'B');
                
                var rightAns = "B (50 dm²)";
                var studentAns = val;

                var meta = window.MATH_BUILDER_METADATA.bai_tap[2];
                if (window.showMathFeedback) window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-34-3', 0, 1, isCorrect ? 1 : 0);
                }
            };
        </script>
    `,
    "quizPool": [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "metadata": metadata
};

window.lesson34 = lesson34;
export default lesson34;
