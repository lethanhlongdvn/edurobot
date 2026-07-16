const metadata = {
    "lessonInfo": {
        "period": "28",
        "week": "6",
        "topic": "Số thập phân",
        "title": "BÀI 13: LÀM TRÒN SỐ THẬP PHÂN",
        "desc": "Học cách làm tròn số thập phân đến số tự nhiên gần nhất thông qua các tình huống thực tế và bài tập thực hành sinh động."
    },
    "bai_tap": [
        {
            "id": "28_1",
            "type": "fill_multiple",
            "title": "Bài 1. Làm tròn số thập phân đến số tự nhiên gần nhất",
            "answers": ["42", "514", "1"],
            "guidance": "Khi làm tròn số thập phân đến số tự nhiên gần nhất (tức là làm tròn đến hàng đơn vị), em hãy quan sát chữ số ở hàng phần mười. Nếu hàng phần mười lớn hơn hoặc bằng 5 thì làm tròn lên, ngược lại thì làm tròn xuống nhé!",
            "solution": "- Làm tròn số 42,305: Chữ số hàng phần mười là 3 < 5 nên làm tròn xuống thành 42.<br>- Làm tròn số 513,59: Chữ số hàng phần mười là 5 = 5 nên làm tròn lên thành 514.<br>- Làm tròn số 0,806: Chữ số hàng phần mười là 8 > 5 nên làm tròn lên thành 1.<br>Con làm bài rất xuất sắc!"
        },
        {
            "id": "28_2",
            "type": "fill_multiple",
            "title": "Bài 2. Làm tròn số đo trong bảng WHO",
            "answers": ["138", "31", "139", "32"],
            "guidance": "Em hãy quan sát chữ số ở hàng phần mười của mỗi số đo. Thực hiện quy tắc làm tròn số thập phân đến số tự nhiên gần nhất để tìm số đo chiều cao và cân nặng làm tròn nhé!",
            "solution": "- Trẻ trai:<br>  + Chiều cao 137,8 cm làm tròn thành 138 cm (vì hàng phần mười là 8 >= 5).<br>  + Cân nặng 31,2 kg làm tròn thành 31 kg (vì hàng phần mười là 2 < 5).<br>- Trẻ gái:<br>  + Chiều cao 138,6 cm làm tròn thành 139 cm (vì hàng phần mười là 6 >= 5).<br>  + Cân nặng 31,9 kg làm tròn thành 32 kg (vì hàng phần mười là 9 >= 5).<br>Con làm bài rất tuyệt vời!"
        }
    ],
    "quizPool": [
        { "question": "Làm tròn số 42,305 đến số tự nhiên gần nhất ta được:", "options": ["42", "43", "42,3", "42,4"], "answer": 0 },
        { "question": "Làm tròn số 513,59 đến số tự nhiên gần nhất ta được:", "options": ["513", "514", "513,6", "510"], "answer": 1 },
        { "question": "Làm tròn số 0,806 đến số tự nhiên gần nhất ta được:", "options": ["0", "1", "0,8", "0,9"], "answer": 1 },
        { "question": "Chiều cao của trẻ trai 10 tuổi là 137,8 cm. Làm tròn đến số tự nhiên gần nhất là:", "options": ["137 cm", "138 cm", "137,8 cm", "140 cm"], "answer": 1 },
        { "question": "Cân nặng của trẻ trai 10 tuổi là 31,2 kg. Làm tròn đến số tự nhiên gần nhất là:", "options": ["31 kg", "32 kg", "31,2 kg", "30 kg"], "answer": 0 },
        { "question": "Chiều cao của trẻ gái 10 tuổi là 138,6 cm. Làm tròn đến số tự nhiên gần nhất là:", "options": ["138 cm", "139 cm", "138,6 cm", "140 cm"], "answer": 1 },
        { "question": "Cân nặng của trẻ gái 10 tuổi là 31,9 kg. Làm tròn đến số tự nhiên gần nhất là:", "options": ["31 kg", "32 kg", "31,9 kg", "30 kg"], "answer": 1 },
        { "question": "Làm tròn số 9,15 đến số tự nhiên gần nhất ta được:", "options": ["9", "10", "9,1", "9,2"], "answer": 0 },
        { "question": "Làm tròn số 9,82 đến số tự nhiên gần nhất ta được:", "options": ["9", "10", "9,8", "9,9"], "answer": 1 },
        { "question": "Làm tròn số 9,57 đến số tự nhiên gần nhất ta được:", "options": ["9", "10", "9,5", "9,6"], "answer": 1 },
        { "question": "Làm tròn số 15,49 đến số tự nhiên gần nhất ta được:", "options": ["15", "16", "15,5", "15,4"], "answer": 0 },
        { "question": "Làm tròn số 99,5 đến số tự nhiên gần nhất ta được:", "options": ["99", "100", "99,5", "90"], "answer": 1 },
        { "question": "Làm tròn số 0,25 đến số tự nhiên gần nhất ta được:", "options": ["0", "1", "0,3", "0,2"], "answer": 0 },
        { "question": "Làm tròn số 124,09 đến số tự nhiên gần nhất ta được:", "options": ["124", "125", "124,1", "120"], "answer": 0 },
        { "question": "Làm tròn số 8,73 đến số tự nhiên gần nhất ta được:", "options": ["8", "9", "8,7", "8,8"], "answer": 1 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson28 = {
    ...metadata.lessonInfo,
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
        <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
            <div id="ltTrack" style="display:flex; transition:transform 0.45s cubic-bezier(0.4,0,0.2,1);">  

                <!-- Slide 1: Giới thiệu & Ý 1 -->
                <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                    <div class="space-y-6">
                        <div class="p-8 rounded-[2.5rem] bg-gradient-to-br from-emerald-600 to-teal-800 shadow-2xl relative overflow-hidden text-white">
<div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/20 rounded-full -ml-10 -mb-10 blur-2xl"></div>
<div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
<div class="w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-md rounded-[2rem] flex items-center justify-center shadow-inner border border-white/30">
<span class="text-5xl md:text-7xl">⚖️</span>
</div>
<div class="text-center md:text-left">
<h2 class="text-2xl md:text-4xl font-black mb-2 tracking-tight">LÀM TRÒN SỐ THẬP PHÂN</h2>
<p class="text-emerald-100 text-lg md:text-2xl font-medium opacity-90">Học cách làm tròn số thập phân đến số tự nhiên gần nhất!</p>
</div>
</div>
</div>
                        <div class="p-8 rounded-[2.5rem] bg-white border-2 border-emerald-600 shadow-none space-y-6">
<div class="flex items-center gap-4">
<div class="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-xl md:text-3xl shadow-lg">
<i class="fas fa-eye"></i>
</div>
<h3 class="text-2xl md:text-4xl font-black text-emerald-900">Khám phá thực tế</h3>
</div>
<div class="flex flex-col lg:flex-row items-center gap-8">
<div class="w-full lg:w-1/2">
<img alt="Khám phá làm tròn cân nặng" class="w-full h-auto rounded-3xl border-4 border-emerald-100 shadow-md" src="assets/images/toan/toan_tap_1/28/KP.png"/>
</div>
<div class="w-full lg:w-1/2 space-y-4 text-xl md:text-3xl lg:text-2xl text-slate-700">
<div class="p-4 bg-emerald-50 rounded-2xl border-l-4 border-emerald-600">
<p class="font-bold text-emerald-800">Mai nặng 31,2 kg:</p>
<p class="italic">Bác sĩ làm tròn thành khoảng <strong>31 kg</strong>.</p>
</div>
<div class="p-4 bg-teal-50 rounded-2xl border-l-4 border-teal-500">
<p class="font-bold text-teal-800">Việt nặng 31,75 kg:</p>
<p class="italic">Bác sĩ làm tròn thành khoảng <strong>32 kg</strong>.</p>
</div>
<p class="font-medium text-slate-600 leading-relaxed pt-2">
                            👉 Bác sĩ đã làm tròn số cân nặng đến số tự nhiên gần nhất đấy!
                        </p>
</div>
</div>
</div>
                    </div>
                </div>

                <!-- Slide 2: Ý 2 -->
                <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                    <div class="p-8 rounded-[2.5rem] bg-emerald-50 border-2 border-emerald-600 shadow-none space-y-4">
<h4 class="text-2xl md:text-4xl font-black text-emerald-950">Quy tắc làm tròn đến số tự nhiên gần nhất</h4>
<p class="font-medium text-slate-700">Khi làm tròn số thập phân đến số tự nhiên gần nhất, ta so sánh chữ số ở <strong>hàng phần mười</strong> với <strong>5</strong>:</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xl md:text-3xl pt-2">
<div class="p-5 bg-white border border-emerald-300 rounded-2xl space-y-2">
<p class="font-black text-red-600">📉 Nếu chữ số hàng phần mười &lt; 5:</p>
<p class="text-slate-600 font-bold">Làm tròn xuống (giữ nguyên phần số tự nhiên).</p>
<p class="font-mono text-emerald-800">Ví dụ: 31,<strong class="text-red-600">2</strong> -&gt; làm tròn thành 31 (vì 2 &lt; 5)</p>
</div>
<div class="p-5 bg-white border border-emerald-300 rounded-2xl space-y-2">
<p class="font-black text-emerald-700">📈 Nếu chữ số hàng phần mười &gt;= 5:</p>
<p class="text-slate-600 font-bold">Làm tròn lên (cộng thêm 1 đơn vị vào số tự nhiên).</p>
<p class="font-mono text-emerald-800">Ví dụ: 31,<strong class="text-emerald-700">7</strong>5 -&gt; làm tròn thành 32 (vì 7 &gt;= 5)</p>
</div>
</div>
</div>
                </div>

                <!-- Slide 3: Ý 3 -->
                <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                    <div class="space-y-6">
                        <div class="p-8 rounded-[2.5rem] bg-white border-2 border-teal-600 shadow-none space-y-6">
<div class="flex items-center gap-4">
<div class="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white text-lg md:text-2xl shadow-md">
<i class="fas fa-sliders-h"></i>
</div>
<h3 class="text-xl md:text-3xl font-black text-teal-900">Trải nghiệm làm tròn số thập phân</h3>
</div>
<div class="space-y-6 w-full mx-auto p-6 bg-teal-50/50 rounded-3xl border border-teal-200">
<div class="flex justify-between font-mono font-bold text-teal-900 text-lg md:text-2xl">
<span>31,0</span>
<span>32,0</span>
</div>
<input class="w-full h-3 bg-teal-200 rounded-xl appearance-none cursor-pointer accent-teal-600 md:text-3xl" id="round-slider" max="32.0" min="31.0" oninput="window.updateSlider()" step="0.1" type="range" value="31.2"/>
<div class="text-center space-y-4">
<p class="text-xl md:text-3xl font-black text-teal-950">Số hiện tại: <span class="font-mono text-red-600" id="slider-val">31,2</span></p>
<div class="inline-block px-6 py-3 bg-white border-2 border-teal-500 rounded-2xl shadow-sm text-xl md:text-3xl font-bold text-slate-800">
                            Hàng phần mười: <span class="font-mono text-red-600" id="slider-digit">2</span> <span class="text-slate-500" id="slider-compare">(&lt; 5)</span> <br/>
                            Kết quả làm tròn: <span class="font-black text-teal-700 text-xl md:text-2xl" id="slider-result">31</span>
</div>
</div>
</div>
</div>
                    </div>
                </div>

            </div>
        </div>
        </div>
        <script>
            window.updateSlider = function() {
                var slider = document.getElementById('round-slider');
                if (!slider) return;
                var val = parseFloat(slider.value).toFixed(1);
                
                // Hiển thị giá trị
                var valStr = val.toString().replace('.', ',');
                document.getElementById('slider-val').textContent = valStr;
                
                // Lấy chữ số hàng phần mười
                var parts = val.toString().split('.');
                var dec = parts[1] || '0';
                var digit = parseInt(dec, 10);
                document.getElementById('slider-digit').textContent = dec;
                
                // So sánh và tính kết quả làm tròn
                var floatVal = parseFloat(val);
                var roundedVal = Math.round(floatVal);
                document.getElementById('slider-result').textContent = roundedVal.toString();
                
                if (floatVal === 32.0) {
                    document.getElementById('slider-compare').textContent = '(đã là số tự nhiên)';
                } else if (digit >= 5) {
                    document.getElementById('slider-compare').textContent = '(>= 5)';
                } else {
                    document.getElementById('slider-compare').textContent = '(< 5)';
                }
            };

            setTimeout(function() {
                var slider = document.getElementById('round-slider');
                if (slider) {
                    slider.addEventListener('input', window.updateSlider);
                    slider.addEventListener('change', window.updateSlider);
                }
                window.updateSlider();
            }, 300);
        </script>
        `,
    "practice": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12 text-xl md:text-3xl text-left">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" style="display:flex; transition:transform 0.45s cubic-bezier(0.4,0,0.2,1);">  

                    <!-- Trang 1: Bài 1 (Điền số làm tròn) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-4">
                            <div class="flex justify-between items-center mb-2">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">1</div>
                                    <h3 class="text-lg md:text-2xl lg:text-3xl text-emerald-900 font-black uppercase tracking-tighter">Làm tròn số thập phân</h3>
                                </div>
                                <button id="btn-toggle-28-1" onclick="window.toggle_28_1_sol()" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-base rounded-xl transition-all shadow-md">Hiện bài giải</button>
                            </div>

                            <div class="p-5 bg-emerald-50/50 rounded-[2rem] border-2 border-emerald-600 space-y-6 py-6">
                                <h4 class="text-xl md:text-3xl lg:text-2xl font-black text-emerald-800 border-b border-emerald-200 pb-2">Làm tròn các số thập phân sau đến số tự nhiên gần nhất:</h4>
                                
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-bold text-xl md:text-3xl">
                                    <div class="flex items-center flex-nowrap whitespace-nowrap overflow-x-auto gap-2 p-3 bg-white rounded-xl border border-emerald-200 shadow-sm justify-center">
                                        <span>42,305 ≈</span>
                                        <input id="ans-28-1-a" type="text" class="w-20 h-12 border-2 border-emerald-600 rounded-xl text-center font-black text-emerald-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none w-10 md:text-3xl" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                    </div>
                                    <div class="flex items-center flex-nowrap whitespace-nowrap overflow-x-auto gap-2 p-3 bg-white rounded-xl border border-emerald-200 shadow-sm justify-center">
                                        <span>513,59 ≈</span>
                                        <input id="ans-28-1-b" type="text" class="w-20 h-12 border-2 border-emerald-600 rounded-xl text-center font-black text-emerald-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none w-10 md:text-3xl" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                    </div>
                                    <div class="flex items-center flex-nowrap whitespace-nowrap overflow-x-auto gap-2 p-3 bg-white rounded-xl border border-emerald-200 shadow-sm justify-center">
                                        <span>0,806 ≈</span>
                                        <input id="ans-28-1-c" type="text" class="w-20 h-12 border-2 border-emerald-600 rounded-xl text-center font-black text-emerald-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none w-10 md:text-3xl" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                    </div>
                                </div>
                            </div>

                            <!-- Vùng hiển thị bài giải -->
                            <div id="sol-28-1-container" class="hidden p-6 bg-slate-50 border-2 border-slate-200 rounded-[2rem] text-xl md:text-3xl text-slate-800 font-bold space-y-2">
                                <p class="text-emerald-700 font-black mb-1 underline">Bài giải chi tiết:</p>
                                <ul class="list-disc pl-6 space-y-2">
                                    <li><strong>42,305:</strong> Hàng phần mười là 3 (< 5) nên làm tròn xuống thành <strong>42</strong>.</li>
                                    <li><strong>513,59:</strong> Hàng phần mười là 5 (= 5) nên làm tròn lên thành <strong>514</strong>.</li>
                                    <li><strong>0,806:</strong> Hàng phần mười là 8 (> 5) nên làm tròn lên thành <strong>1</strong>.</li>
                                </ul>
                            </div>

                            <div class="flex justify-end mt-4">
                                <button id="btn-check-28-1" onclick="window.check_28_1()" class="w-20 h-20 bg-emerald-600 border-2 border-emerald-700 text-white rounded-[1.5rem] font-black text-3xl md:text-5xl flex items-center justify-center hover:bg-emerald-700 transition-all active:scale-95 shadow-md">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Trang 2: Bài 2 (Chiều cao cân nặng bảng) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="p-6 rounded-[2.5rem] bg-white shadow-none border-none relative overflow-hidden space-y-4">
                            <div class="flex justify-between items-center mb-2">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">2</div>
                                    <h3 class="text-lg md:text-2xl lg:text-3xl text-emerald-900 font-black uppercase tracking-tighter">Chiều cao, cân nặng chuẩn WHO</h3>
                                </div>
                                <button id="btn-toggle-28-2" onclick="window.toggle_28_2_sol()" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-base rounded-xl transition-all shadow-md">Hiện bài giải</button>
                            </div>

                            <div class="p-5 bg-teal-50/50 rounded-[2rem] border-2 border-teal-600 space-y-4 py-6">
                                <h4 class="text-xl md:text-3xl lg:text-2xl font-black text-teal-800 border-b border-teal-200 pb-2">Hãy làm tròn các số đo trong bảng sau đến số tự nhiên gần nhất:</h4>
                                
                                <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                                    <table class="w-full text-center border-collapse text-xl md:text-3xl">
                                        <thead>
                                            <tr class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                                                <th class="p-4 border-r border-slate-200">Đối tượng</th>
                                                <th class="p-4 border-r border-slate-200">Chiều cao (cm)</th>
                                                <th class="p-4 text-emerald-700 border-r border-slate-200">Làm tròn chiều cao</th>
                                                <th class="p-4 border-r border-slate-200">Cân nặng (kg)</th>
                                                <th class="p-4 text-teal-700">Làm tròn cân nặng</th>
                                            </tr>
                                        </thead>
                                        <tbody class="font-bold text-slate-700">
                                            <tr class="border-b border-slate-150">
                                                <td class="p-4 bg-orange-50 border-r border-slate-200 text-orange-950 font-black">Trẻ trai</td>
                                                <td class="p-4 border-r border-slate-200">137,8</td>
                                                <td class="p-2 border-r border-slate-200">
                                                    <input id="ans-28-2-h1" type="text" class="w-24 md:w-28 h-12 border-2 border-emerald-600 rounded-xl text-center font-black text-emerald-800 md:text-3xl" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                                </td>
                                                <td class="p-4 border-r border-slate-200">31,2</td>
                                                <td class="p-2">
                                                    <input id="ans-28-2-w1" type="text" class="w-24 md:w-28 h-12 border-2 border-teal-600 rounded-xl text-center font-black text-teal-800 md:text-3xl" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-4 bg-orange-50 border-r border-slate-200 text-orange-950 font-black">Trẻ gái</td>
                                                <td class="p-4 border-r border-slate-200">138,6</td>
                                                <td class="p-2 border-r border-slate-200">
                                                    <input id="ans-28-2-h2" type="text" class="w-24 md:w-28 h-12 border-2 border-emerald-600 rounded-xl text-center font-black text-emerald-800 md:text-3xl" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                                </td>
                                                <td class="p-4 border-r border-slate-200">31,9</td>
                                                <td class="p-2">
                                                    <input id="ans-28-2-w2" type="text" class="w-24 md:w-28 h-12 border-2 border-teal-600 rounded-xl text-center font-black text-teal-800 md:text-3xl" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Vùng hiển thị bài giải -->
                            <div id="sol-28-2-container" class="hidden p-6 bg-slate-50 border-2 border-slate-200 rounded-[2rem] text-xl md:text-3xl text-slate-800 font-bold space-y-2">
                                <p class="text-emerald-700 font-black mb-1 underline">Bài giải chi tiết:</p>
                                <ul class="list-disc pl-6 space-y-2">
                                    <li><strong>Trẻ trai:</strong>
                                        <br>• Chiều cao 137,8 cm: chữ số hàng phần mười là 8 >= 5 nên làm tròn lên thành <strong>138 cm</strong>.
                                        <br>• Cân nặng 31,2 kg: chữ số hàng phần mười là 2 < 5 nên làm tròn xuống thành <strong>31 kg</strong>.
                                    </li>
                                    <li><strong>Trẻ gái:</strong>
                                        <br>• Chiều cao 138,6 cm: chữ số hàng phần mười là 6 >= 5 nên làm tròn lên thành <strong>139 cm</strong>.
                                        <br>• Cân nặng 31,9 kg: chữ số hàng phần mười là 9 >= 5 nên làm tròn lên thành <strong>32 kg</strong>.
                                    </li>
                                </ul>
                            </div>

                            <div class="flex justify-end mt-4">
                                <button id="btn-check-28-2" onclick="window.check_28_2()" class="w-20 h-20 bg-emerald-600 border-2 border-emerald-700 text-white rounded-[1.5rem] font-black text-3xl md:text-5xl flex items-center justify-center hover:bg-emerald-700 transition-all active:scale-95 shadow-md">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <script>
            // Toggles hiển thị lời giải
            window.toggle_28_1_sol = function() {
                var c = document.getElementById('sol-28-1-container');
                var b = document.getElementById('btn-toggle-28-1');
                if (c.classList.contains('hidden')) { c.classList.remove('hidden'); b.textContent = 'Ẩn bài giải'; }
                else { c.classList.add('hidden'); b.textContent = 'Hiện bài giải'; }
            };

            window.toggle_28_2_sol = function() {
                var c = document.getElementById('sol-28-2-container');
                var b = document.getElementById('btn-toggle-28-2');
                if (c.classList.contains('hidden')) { c.classList.remove('hidden'); b.textContent = 'Ẩn bài giải'; }
                else { c.classList.add('hidden'); b.textContent = 'Hiện bài giải'; }
            };

            function normalize(str) {
                if (!str) return '';
                return str.toString().replace(/\\s+/g, '').trim().toLowerCase();
            }

            // ==================== BÀI 1 ====================
            window.check_28_1 = function() {
                var a = normalize(document.getElementById('ans-28-1-a').value);
                var b = normalize(document.getElementById('ans-28-1-b').value);
                var c = normalize(document.getElementById('ans-28-1-c').value);

                var isCorrect = (a === '42' && b === '514' && c === '1');
                var rightAns = "42 ; 514 ; 1";
                var studentAns = a + " ; " + b + " ; " + c;

                var meta = window.MATH_BUILDER_METADATA.bai_tap[0];
                if (window.showMathFeedback) window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-28-1', 0, 3, isCorrect ? 3 : 0);
                }
            };

            // ==================== BÀI 2 ====================
            window.check_28_2 = function() {
                var h1 = normalize(document.getElementById('ans-28-2-h1').value);
                var w1 = normalize(document.getElementById('ans-28-2-w1').value);
                var h2 = normalize(document.getElementById('ans-28-2-h2').value);
                var w2 = normalize(document.getElementById('ans-28-2-w2').value);

                var isCorrect = (h1 === '138' && w1 === '31' && h2 === '139' && w2 === '32');
                var rightAns = "Trẻ trai: 138cm, 31kg | Trẻ gái: 139cm, 32kg";
                var studentAns = "Trẻ trai: " + h1 + "cm, " + w1 + "kg | Trẻ gái: " + h2 + "cm, " + w2 + "kg";

                var meta = window.MATH_BUILDER_METADATA.bai_tap[1];
                if (window.showMathFeedback) window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-28-2', 0, 4, isCorrect ? 4 : 0);
                }
            };
        </script>
    `,
    "quizPool": [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "metadata": metadata
};

window.lesson28 = lesson28;
export default lesson28;
