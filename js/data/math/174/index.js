export const lesson174 = {
    period: "174",
    title: "BÀI 75: ÔN TẬP CHUNG (TIẾT 3)",
    topic: "Ôn tập diện tích, thể tích, đại lượng đo và vận tốc",
    week: "35",

    content: `
        <div class="space-y-8 animate-fade-in pb-10">
            <!-- Card Tiêu đề & Tổng quan -->
            <div class="bg-gradient-to-br from-blue-50 to-sky-50 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-4 border-amber-200 shadow-xl relative overflow-hidden">
                <div class="relative z-10 space-y-6">
                    <div class="flex items-center justify-center gap-3">
                        <span class="text-3xl md:text-4xl">📐📊</span>
                        <h3 class="text-2xl md:text-3xl font-black text-amber-700 uppercase tracking-wide text-center">TÌM HIỂU BÀI: ÔN TẬP HÌNH HỌC, ĐẠI LƯỢNG VÀ VẬN TỐC</h3>
                    </div>

                    <!-- Grid 3 chủ đề chính -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 font-bold">
                        
                        <!-- 1. Đổi đơn vị đo -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-blue-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-black text-xl">1</div>
                                <h4 class="font-black text-blue-700 text-xl md:text-2xl">Đổi đơn vị đo đại lượng</h4>
                            </div>
                            <div class="space-y-2 text-sm md:text-base text-gray-700">
                                <p>• Độ dài: 1 km = 1 000 m → 75 m = <span class="font-black text-blue-800">0,075 km</span>.</p>
                                <p>• Khối lượng: 1 kg = 1 000 g → 2 kg 45 g = <span class="font-black text-blue-800">2,045 kg</span>.</p>
                                <p>• Dung tích: 1 l = 1 000 ml → 652 ml = <span class="font-black text-blue-800">0,652 l</span>.</p>
                            </div>
                        </div>

                        <!-- 2. Diện tích & Thể tích khối M, N -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-emerald-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-black text-xl">2</div>
                                <h4 class="font-black text-emerald-700 text-xl md:text-2xl">Hình lập phương & Hộp chữ nhật</h4>
                            </div>
                            <div class="space-y-2 text-sm md:text-base text-gray-700">
                                <p>• Lập phương M (a = 5 cm): S_xq = 100 cm², S_tp = 150 cm², Thể tích M = <span class="font-black text-emerald-800">125 cm³</span>.</p>
                                <p>• Hộp chữ nhật N (10×3×4 cm): S_xq = 104 cm², S_tp = 164 cm², Thể tích N = <span class="font-black text-emerald-800">120 cm³</span>.</p>
                                <p>• Thể tích M lớn hơn N: 125 - 120 = <span class="font-black text-emerald-800">5 cm³</span>.</p>
                            </div>
                        </div>

                        <!-- 3. Bài toán chuyển động (v, s, t) -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-amber-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-black text-xl">3</div>
                                <h4 class="font-black text-amber-700 text-xl md:text-2xl">Chuyển động của động vật</h4>
                            </div>
                            <div class="space-y-2 text-sm md:text-base text-gray-700">
                                <p>• Đại bàng: t = s : v = 24 : 96 = <span class="font-black text-amber-800">0,25 giờ</span> (15 phút).</p>
                                <p>• Báo gấm: 24 phút = 0,4 giờ → s = v × t = 120 × 0,4 = <span class="font-black text-amber-800">48 km</span>.</p>
                                <p>• Đà điểu: 5,250 km = 5 250 m → v = s : t = 5 250 : 300 = <span class="font-black text-amber-800">17,5 m/s</span>.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="-mx-4 md:-mx-8 mt-2 -mb-8">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Slide 1: Bài 1 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson174_b1" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">1</div>
                                <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Đổi đơn vị đo độ dài, khối lượng, dung tích</h3>
                            </div>
                            <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-4 font-bold text-lg">
                                <div class="space-y-4">
                                    <div class="flex items-center gap-3 flex-wrap">
                                        <span>a) 75 m = ... km. Đáp án đúng là:</span>
                                        <select id="174-1-1" class="px-4 py-2 border-2 border-blue-300 rounded-xl font-bold bg-white outline-none">
                                            <option value="">--Chọn--</option>
                                            <option value="A">A. 7,5</option>
                                            <option value="B">B. 0,75</option>
                                            <option value="C">C. 0,075</option>
                                            <option value="D">D. 0,0075</option>
                                        </select>
                                    </div>
                                    <div class="flex items-center gap-3 flex-wrap">
                                        <span>b) 2 kg 45 g = ... kg. Đáp án đúng là:</span>
                                        <select id="174-1-2" class="px-4 py-2 border-2 border-blue-300 rounded-xl font-bold bg-white outline-none">
                                            <option value="">--Chọn--</option>
                                            <option value="A">A. 245</option>
                                            <option value="B">B. 2,45</option>
                                            <option value="C">C. 2,045</option>
                                            <option value="D">D. 0,245</option>
                                        </select>
                                    </div>
                                    <div class="flex items-center gap-3 flex-wrap">
                                        <span>c) 652 ml = ... l. Đáp án đúng là:</span>
                                        <select id="174-1-3" class="px-4 py-2 border-2 border-blue-300 rounded-xl font-bold bg-white outline-none">
                                            <option value="">--Chọn--</option>
                                            <option value="A">A. 6,52</option>
                                            <option value="B">B. 0,652</option>
                                            <option value="C">C. 0,0652</option>
                                            <option value="D">D. 652</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-174-1').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-174-1" onclick="window.check_174_1()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-174-1" class="hidden bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg font-bold text-blue-900 space-y-1">
                                <p>a) C. 0,075 (75 : 1000 = 0,075 km)</p>
                                <p>b) C. 2,045 (2 + 45/1000 = 2,045 kg)</p>
                                <p>c) B. 0,652 (652 : 1000 = 0,652 l)</p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson174_b2" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-emerald-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">2</div>
                                <h3 class="text-xl md:text-2xl font-black text-emerald-700">Bài 2. Diện tích và thể tích hai khối gỗ M và N</h3>
                            </div>
                            <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-4 font-bold text-lg">
                                <p class="text-gray-800">
                                    Khối gỗ lập phương M (cạnh 5 cm) và khối gỗ hình hộp chữ nhật N (dài 10 cm, rộng 3 cm, cao 4 cm).
                                </p>
                                <img src="assets/images/toan/toan_tap_2/174/174-4-khoi-go.png" class="max-w-[400px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Hai khối gỗ M và N">

                                <p class="font-black text-emerald-900 text-xl border-t border-emerald-200 pt-3">a) Điền số thích hợp:</p>
                                <div class="space-y-3">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span>- Diện tích xung quanh M:</span>
                                        <input id="174-2-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                                        <span>cm²</span>
                                    </div>
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span>- Diện tích xung quanh N:</span>
                                        <input id="174-2-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                                        <span>cm²</span>
                                    </div>
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span>- Diện tích toàn phần M:</span>
                                        <input id="174-2-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                                        <span>cm²</span>
                                    </div>
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span>- Diện tích toàn phần N:</span>
                                        <input id="174-2-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                                        <span>cm²</span>
                                    </div>
                                </div>

                                <p class="font-black text-emerald-900 text-xl border-t border-emerald-200 pt-3">b) Thể tích hình nào lớn hơn và lớn hơn bao nhiêu cm³?</p>
                                <div class="flex items-center gap-3 flex-wrap">
                                    <span>Thể tích hình</span>
                                    <select id="174-2-shape" class="px-3 py-1 border-2 border-emerald-300 rounded-xl font-bold bg-white outline-none">
                                        <option value="">--Chọn--</option>
                                        <option value="M">M</option>
                                        <option value="N">N</option>
                                    </select>
                                    <span>lớn hơn và lớn hơn</span>
                                    <input id="174-2-vdiff" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                                    <span>cm³</span>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-174-2').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-174-2" onclick="window.check_174_2()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-174-2" class="hidden bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-lg font-bold text-emerald-900 space-y-1">
                                <p>a) Diện tích xung quanh (M) = 5×5×4 = 100 cm²; Diện tích xung quanh (N) = (10+3)×2×4 = 104 cm².</p>
                                <p>Diện tích toàn phần (M) = 5×5×6 = 150 cm²; Diện tích toàn phần (N) = 104 + 10×3×2 = 164 cm².</p>
                                <p>b) Thể tích (M) = 5×5×5 = 125 cm³; Thể tích (N) = 10×3×4 = 120 cm³.</p>
                                <p>Thể tích hình <span class="text-blue-700">M lớn hơn N</span> là: 125 − 120 = <span class="text-blue-700">5 cm³</span>.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson174_b3" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-amber-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">3</div>
                                <h3 class="text-xl md:text-2xl font-black text-amber-700">Bài 3. Chuyển động của chim đại bàng, báo gấm, đà điểu</h3>
                            </div>
                            <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4 font-bold text-lg">
                                <img src="assets/images/toan/toan_tap_2/174/174-5-dong-vat.png" class="max-w-[450px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Đại bàng, Báo gấm, Đà điểu">

                                <div class="space-y-4 border-t border-amber-200 pt-4">
                                    <div class="space-y-2 bg-white p-4 rounded-xl border border-amber-200">
                                        <p class="text-amber-900 font-black">1. Chim đại bàng:</p>
                                        <p>s = 24 km, v = 96 km/h</p>
                                        <div class="flex items-center gap-2">
                                            <span>t =</span>
                                            <input id="174-3-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="0,25">
                                            <span>giờ</span>
                                        </div>
                                    </div>
                                    <div class="space-y-2 bg-white p-4 rounded-xl border border-amber-200">
                                        <p class="text-amber-900 font-black">2. Báo gấm:</p>
                                        <p>v = 120 km/h, t = 24 phút (0,4h)</p>
                                        <div class="flex items-center gap-2">
                                            <span>s =</span>
                                            <input id="174-3-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                                            <span>km</span>
                                        </div>
                                    </div>
                                    <div class="space-y-2 bg-white p-4 rounded-xl border border-amber-200">
                                        <p class="text-amber-900 font-black">3. Đà điểu:</p>
                                        <p>s = 5,250 km (5250m), t = 300s</p>
                                        <div class="flex items-center gap-2">
                                            <span>v =</span>
                                            <input id="174-3-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                                            <span>m/s</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-174-3').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-174-3" onclick="window.check_174_3()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-174-3" class="hidden bg-amber-50 p-4 rounded-2xl border border-amber-200 text-lg font-bold text-amber-900 space-y-1">
                                <p>1. Đại bàng: t = 24 : 96 = <span class="text-emerald-700">0,25 giờ</span> (15 phút)</p>
                                <p>2. Báo gấm: 24 phút = 0,4 giờ. s = 120 × 0,4 = <span class="text-emerald-700">48 km</span></p>
                                <p>3. Đà điểu: 5,250 km = 5 250 m. v = 5 250 : 300 = <span class="text-emerald-700">17,5 m/s</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,

    quizPool: [
        { question: "75 m = ? km", options: ["0,075 km", "0,75 km", "7,5 km", "0,0075 km"], answer: 0 },
        { question: "2 kg 45 g = ? kg", options: ["2,045 kg", "2,45 kg", "245 kg", "0,245 kg"], answer: 0 },
        { question: "652 ml = ? l", options: ["0,652 l", "6,52 l", "0,0652 l", "652 l"], answer: 0 },
        { question: "Diện tích xung quanh khối lập phương M cạnh 5 cm là?", options: ["100 cm²", "150 cm²", "125 cm²", "25 cm²"], answer: 0 },
        { question: "Diện tích toàn phần khối hình hộp chữ nhật N (10×3×4 cm) là?", options: ["164 cm²", "104 cm²", "120 cm²", "150 cm²"], answer: 0 },
        { question: "Thể tích khối M (125 cm³) lớn hơn thể tích khối N (120 cm³) bao nhiêu?", options: ["5 cm³", "10 cm³", "15 cm³", "4 cm³"], answer: 0 },
        { question: "Thời gian chim đại bàng s=24km v=96km/h là?", options: ["0,25 giờ (15 phút)", "0,5 giờ", "0,2 giờ", "0,4 giờ"], answer: 0 },
        { question: "Quãng đường báo gấm v=120km/h t=24 phút (0,4h) chạy được là?", options: ["48 km", "50 km", "40 km", "60 km"], answer: 0 },
        { question: "Vận tốc đà điểu s=5,250km t=300s là?", options: ["17,5 m/s", "18 m/s", "15 m/s", "20 m/s"], answer: 0 },
        { question: "Chiều dài cạnh khối gỗ lập phương M là bao nhiêu?", options: ["5 cm", "4 cm", "10 cm", "3 cm"], answer: 0 },
        { question: "Thể tích khối gỗ hình hộp chữ nhật N (10×3×4 cm) là?", options: ["120 cm³", "125 cm³", "100 cm³", "164 cm³"], answer: 0 },
        { question: "75 m đổi ra km bằng phân số là?", options: ["75/1000 km", "75/100 km", "75/10 km", "75/10000 km"], answer: 0 },
        { question: "24 phút đổi ra giờ bằng?", options: ["0,4 giờ", "0,24 giờ", "0,5 giờ", "0,25 giờ"], answer: 0 },
        { question: "5,250 km đổi ra mét là?", options: ["5 250 m", "525 m", "52 500 m", "52,5 m"], answer: 0 },
        { question: "Diện tích toàn phần khối lập phương M (a=5 cm) là?", options: ["150 cm²", "100 cm²", "125 cm²", "200 cm²"], answer: 0 }
    ]
};

window.lesson174 = lesson174;

window.check_174_1 = function() {
    const v1 = document.getElementById('174-1-1')?.value || '';
    const v2 = document.getElementById('174-1-2')?.value || '';
    const v3 = document.getElementById('174-1-3')?.value || '';
    const isCorrect = (v1 === 'C' && v2 === 'C' && v3 === 'B');
    window.showMathFeedback(isCorrect,
        "a) C. 0,075<br>b) C. 2,045<br>c) B. 0,652",
        "",
        "Gợi ý:<br>a) 75 m = 75 : 1000 = 0,075 km.<br>b) 2 kg 45 g = 2 + 45/1000 = 2,045 kg.<br>c) 652 ml = 652 : 1000 = 0,652 l.",
        "a) C. 0,075<br>b) C. 2,045<br>c) B. 0,652.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Đổi đơn vị đo", isCorrect?100:0, "btn-check-174-1", 0, 1, isCorrect?1:0);
};

window.check_174_2 = function() {
    const checks = [
        {id:'174-2-1', ans:['100']},
        {id:'174-2-2', ans:['104']},
        {id:'174-2-3', ans:['150']},
        {id:'174-2-4', ans:['164']},
        {id:'174-2-vdiff', ans:['5']},
    ];
    let correct = 0;
    checks.forEach(c => {
        const el = document.getElementById(c.id);
        if (!el) return;
        const v = el.value.trim();
        if (c.ans.includes(v)) { el.classList.add('bg-green-100','border-green-500'); el.classList.remove('bg-red-100','border-red-500'); correct++; }
        else { el.classList.add('bg-red-100','border-red-500'); el.classList.remove('bg-green-100','border-green-500'); }
    });
    const shp = document.getElementById('174-2-shape')?.value;
    const isCorrect = (correct === checks.length && shp === 'M');
    window.showMathFeedback(isCorrect,
        "a) M: 100 cm², 150 cm²; N: 104 cm², 164 cm²<br>b) Thể tích M lớn hơn N là 5 cm³",
        "",
        "Gợi ý:<br>a) Diện tích xung quanh lập phương = a×a×4, Diện tích toàn phần = a×a×6. Hộp chữ nhật: Diện tích xung quanh = (d+r)×2×h, Diện tích toàn phần = Diện tích xung quanh + 2×d×r.<br>b) Thể tích (M) = 5×5×5 = 125, Thể tích (N) = 10×3×4 = 120 → Thể tích M lớn hơn N là 5 cm³.",
        "a) M: 100, 150; N: 104, 164.<br>b) Thể tích M lớn hơn N là 5 cm³.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Khối gỗ M và N", isCorrect?100:0, "btn-check-174-2", 0, checks.length+1, isCorrect?checks.length+1:0);
};

window.check_174_3 = function() {
    const checks = [
        {id:'174-3-1', ans:['0,25','0.25']},
        {id:'174-3-2', ans:['48']},
        {id:'174-3-3', ans:['17,5','17.5']},
    ];
    let correct = 0;
    checks.forEach(c => {
        const el = document.getElementById(c.id);
        if (!el) return;
        const v = el.value.trim().replace(/\s/g,'');
        if (c.ans.includes(v)) { el.classList.add('bg-green-100','border-green-500'); el.classList.remove('bg-red-100','border-red-500'); correct++; }
        else { el.classList.add('bg-red-100','border-red-500'); el.classList.remove('bg-green-100','border-green-500'); }
    });
    const isCorrect = correct === checks.length;
    window.showMathFeedback(isCorrect,
        "1. Đại bàng: 0,25 giờ<br>2. Báo gấm: 48 km<br>3. Đà điểu: 17,5 m/s",
        "",
        "Gợi ý:<br>1. Đại bàng: t = s : v = 24 : 96 = 0,25 giờ.<br>2. Báo gấm: 24 phút = 0,4 giờ → s = v × t = 120 × 0,4 = 48 km.<br>3. Đà điểu: 5,250 km = 5 250 m → v = s : t = 5 250 : 300 = 17,5 m/s.",
        "1. Đại bàng: 0,25 giờ.<br>2. Báo gấm: 48 km.<br>3. Đà điểu: 17,5 m/s.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Chuyển động động vật", Math.round(correct/checks.length*100), "btn-check-174-3", 0, checks.length, correct);
};
