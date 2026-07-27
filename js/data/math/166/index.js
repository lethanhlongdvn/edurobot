export const lesson166 = {
    period: "166",
    title: "BÀI 72: ÔN TẬP ĐO LƯỜNG (TIẾT 1)",
    topic: "Ôn tập đo lường",
    week: "34",

    practice: `
        <div class="space-y-10 pb-10">

            <!-- Bài 1: Đổi đơn vị độ dài và khối lượng -->
            <div id="lesson166_b1" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-blue-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">1</div>
                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Tìm số tự nhiên hoặc số thập phân thích hợp</h3>
                </div>

                <!-- a) Đơn vị độ dài -->
                <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-3 font-bold text-lg">
                    <p class="font-black text-blue-800 text-xl border-b border-blue-200 pb-2">a) Đơn vị độ dài</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>3 m =</span>
                            <input id="166-1-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>cm</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>5 m 24 cm =</span>
                            <input id="166-1-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>m</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>270 cm =</span>
                            <input id="166-1-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>m</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>1,5 km =</span>
                            <input id="166-1-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>m</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>7 km 80 m =</span>
                            <input id="166-1-5" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>km</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>635 m =</span>
                            <input id="166-1-6" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>km</span>
                        </div>
                    </div>
                </div>

                <!-- b) Đơn vị khối lượng -->
                <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-3 font-bold text-lg">
                    <p class="font-black text-emerald-800 text-xl border-b border-emerald-200 pb-2">b) Đơn vị khối lượng</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>4 kg =</span>
                            <input id="166-1-7" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>g</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>2 kg 300 g =</span>
                            <input id="166-1-8" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>kg</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>8 000 kg =</span>
                            <input id="166-1-9" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>tấn</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>0,95 tấn =</span>
                            <input id="166-1-10" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>kg</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>3 tấn 66 kg =</span>
                            <input id="166-1-11" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>tấn</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>7 500 kg =</span>
                            <input id="166-1-12" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>tấn</span>
                        </div>
                    </div>
                </div>

                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-166-1').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-166-1" onclick="window.check_166_1()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-166-1" class="hidden bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg font-bold text-blue-900 space-y-1">
                    <p>a) 300 cm; 5,24 m; 2,7 m; 1 500 m; 7,08 km; 0,635 km</p>
                    <p>b) 4 000 g; 2,3 kg; 8 tấn; 950 kg; 3,066 tấn; 7,5 tấn</p>
                </div>
            </div>

            <!-- Bài 2: Đổi đơn vị diện tích và thể tích -->
            <div id="lesson166_b2" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-emerald-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">2</div>
                    <h3 class="text-xl md:text-2xl font-black text-emerald-700">Bài 2. Tìm số tự nhiên hoặc số thập phân thích hợp</h3>
                </div>

                <!-- a) Đơn vị diện tích -->
                <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-3 font-bold text-lg">
                    <p class="font-black text-amber-800 text-xl border-b border-amber-200 pb-2">a) Đơn vị diện tích</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>7 dm² =</span>
                            <input id="166-2-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>cm²</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>6 m² 84 dm² =</span>
                            <input id="166-2-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>m²</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>4 000 cm² =</span>
                            <input id="166-2-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>dm²</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>1,6 ha =</span>
                            <input id="166-2-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>m²</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>4 km² 5 ha =</span>
                            <input id="166-2-5" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>km²</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>158 ha =</span>
                            <input id="166-2-6" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>km²</span>
                        </div>
                    </div>
                </div>

                <!-- b) Đơn vị thể tích -->
                <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-3 font-bold text-lg">
                    <p class="font-black text-rose-800 text-xl border-b border-rose-200 pb-2">b) Đơn vị thể tích</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>3 dm³ =</span>
                            <input id="166-2-7" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>cm³</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>6 dm³ 520 cm³ =</span>
                            <input id="166-2-8" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>dm³</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>2 075 cm³ =</span>
                            <input id="166-2-9" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>dm³</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>0,42 m³ =</span>
                            <input id="166-2-10" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>dm³</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>5 m³ 68 dm³ =</span>
                            <input id="166-2-11" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>m³</span>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span>824 dm³ =</span>
                            <input id="166-2-12" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>m³</span>
                        </div>
                    </div>
                </div>

                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-166-2').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-166-2" onclick="window.check_166_2()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-166-2" class="hidden bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-lg font-bold text-emerald-900 space-y-1">
                    <p>a) 700 cm²; 6,84 m²; 40 dm²; 16 000 m²; 4,05 km²; 1,58 km²</p>
                    <p>b) 3 000 cm³; 6,52 dm³; 2,075 dm³; 420 dm³; 5,068 m³; 0,824 m³</p>
                </div>
            </div>

            <!-- Bài 3: Bể cá nhà Nam -->
            <div id="lesson166_b3" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-amber-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">3</div>
                    <h3 class="text-xl md:text-2xl font-black text-amber-700">Bài 3. Giải bài toán</h3>
                </div>
                <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Bể cá của nhà Nam dạng hình hộp chữ nhật có các kích thước như hình bên (dài <span class="font-black text-blue-700">60 cm</span>, rộng <span class="font-black text-blue-700">40 cm</span>, cao <span class="font-black text-blue-700">50 cm</span>). Biết rằng lượng nước trong bể bằng <span class="font-black text-blue-700">90%</span> thể tích của bể. Hỏi trong bể có bao nhiêu lít nước?
                    </p>
                    <img src="assets/images/toan/toan_tap_2/166/166-3-be-ca.png" class="max-w-[400px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Bể cá nhà Nam">
                    <div class="flex items-center gap-3 flex-wrap">
                        <span class="font-bold text-gray-700 text-lg">Số lít nước trong bể là:</span>
                        <input id="166-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-36 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                        <span class="font-bold text-gray-700">lít</span>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-166-3').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-166-3" onclick="window.check_166_3()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-166-3" class="hidden bg-amber-50 p-4 rounded-2xl border border-amber-200 text-lg font-bold text-amber-900 space-y-1">
                    <p>Thể tích bể: 60 × 40 × 50 = 120 000 cm³ = 120 dm³ = 120 lít</p>
                    <p>Lượng nước trong bể: 120 × 90% = <span class="text-emerald-700">108 lít</span></p>
                    <p>Chúc mừng em đã giải đúng!</p>
                </div>
            </div>

            <!-- Bài 4: Hút nước bể bơi -->
            <div id="lesson166_b4" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-rose-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">4</div>
                    <h3 class="text-xl md:text-2xl font-black text-rose-700">Bài 4. Giải bài toán</h3>
                </div>
                <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Một bể bơi chứa <span class="font-black text-blue-700">480 m³</span> nước. Để dọn vệ sinh và thay nước trong bể bơi người ta đã hút đi <span class="font-black text-blue-700">5/8</span> lượng nước trong bể. Hỏi người ta còn phải hút đi bao nhiêu mét khối nước nữa thì hết bể nước?
                    </p>
                    <div class="flex items-center gap-3 flex-wrap">
                        <span class="font-bold text-gray-700 text-lg">Số mét khối nước còn phải hút nữa:</span>
                        <input id="166-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-36 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                        <span class="font-bold text-gray-700">m³</span>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-166-4').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-166-4" onclick="window.check_166_4()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-166-4" class="hidden bg-rose-50 p-4 rounded-2xl border border-rose-200 text-lg font-bold text-rose-900 space-y-1">
                    <p>Phân số chỉ số nước còn lại: 1 − 5/8 = 3/8 bể nước</p>
                    <p>Số mét khối nước còn phải hút đi: 480 × 3/8 = <span class="text-emerald-700">180 m³</span></p>
                    <p>Chúc mừng em đã giải đúng!</p>
                </div>
            </div>

        </div>
    `,

    quizPool: [
        { question: "5 m 24 cm = ? m", options: ["5,24 m", "52,4 m", "524 m", "5,024 m"], answer: 0 },
        { question: "7 km 80 m = ? km", options: ["7,08 km", "7,8 km", "70,8 km", "7,008 km"], answer: 0 },
        { question: "3 tấn 66 kg = ? tấn", options: ["3,066 tấn", "3,66 tấn", "30,66 tấn", "3,0066 tấn"], answer: 0 },
        { question: "6 m² 84 dm² = ? m²", options: ["6,84 m²", "68,4 m²", "6,084 m²", "684 m²"], answer: 0 },
        { question: "4 km² 5 ha = ? km²", options: ["4,05 km²", "4,5 km²", "45 km²", "4,005 km²"], answer: 0 },
        { question: "6 dm³ 520 cm³ = ? dm³", options: ["6,52 dm³", "6,520 dm³", "65,2 dm³", "6,052 dm³"], answer: 0 },
        { question: "5 m³ 68 dm³ = ? m³", options: ["5,068 m³", "5,68 m³", "50,68 m³", "5,0068 m³"], answer: 0 },
        { question: "Thể tích bể cá (60×40×50 cm) = ? lít", options: ["120 lít", "120 000 lít", "12 lít", "1 200 lít"], answer: 0 },
        { question: "Lượng nước trong bể cá (90% của 120 lít) = ?", options: ["108 lít", "100 lít", "110 lít", "90 lít"], answer: 0 },
        { question: "Đã hút đi 5/8 nước bể bơi 480 m³. Số m³ nước đã hút là?", options: ["300 m³", "180 m³", "240 m³", "400 m³"], answer: 0 },
        { question: "Số m³ nước còn phải hút nữa (bài 4) là?", options: ["180 m³", "300 m³", "240 m³", "100 m³"], answer: 0 },
        { question: "1 ha = ? m²", options: ["10 000 m²", "1 000 m²", "100 m²", "100 000 m²"], answer: 0 },
        { question: "1 dm³ = ? cm³", options: ["1 000 cm³", "100 cm³", "10 cm³", "10 000 cm³"], answer: 0 },
        { question: "1 m³ = ? dm³ = ? lít", options: ["1 000 dm³ = 1 000 lít", "100 dm³ = 100 lít", "10 000 dm³", "1 000 000 dm³"], answer: 0 },
        { question: "0,95 tấn = ? kg", options: ["950 kg", "95 kg", "9 500 kg", "0,095 kg"], answer: 0 }
    ]
};

window.lesson166 = lesson166;

window.check_166_1 = function() {
    const checks = [
        {id:'166-1-1', ans:['300']},
        {id:'166-1-2', ans:['5,24','5.24']},
        {id:'166-1-3', ans:['2,7','2.7']},
        {id:'166-1-4', ans:['1500','1 500']},
        {id:'166-1-5', ans:['7,08','7.08']},
        {id:'166-1-6', ans:['0,635','0.635']},
        {id:'166-1-7', ans:['4000','4 000']},
        {id:'166-1-8', ans:['2,3','2.3']},
        {id:'166-1-9', ans:['8']},
        {id:'166-1-10', ans:['950']},
        {id:'166-1-11', ans:['3,066','3.066']},
        {id:'166-1-12', ans:['7,5','7.5']},
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
        "a) 300 cm; 5,24 m; 2,7 m; 1 500 m; 7,08 km; 0,635 km<br>b) 4 000 g; 2,3 kg; 8 tấn; 950 kg; 3,066 tấn; 7,5 tấn",
        "",
        "Gợi ý: Áp dụng bảng đơn vị đo độ dài và khối lượng. Lưu ý dời dấu phẩy phù hợp.",
        "Độ dài: 1m = 100cm, 1km = 1000m.<br>Khối lượng: 1tấn = 1000kg, 1kg = 1000g.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Đổi đơn vị độ dài, khối lượng", Math.round(correct/checks.length*100), "btn-check-166-1", 0, checks.length, correct);
};

window.check_166_2 = function() {
    const checks = [
        {id:'166-2-1', ans:['700']},
        {id:'166-2-2', ans:['6,84','6.84']},
        {id:'166-2-3', ans:['40']},
        {id:'166-2-4', ans:['16000','16 000']},
        {id:'166-2-5', ans:['4,05','4.05']},
        {id:'166-2-6', ans:['1,58','1.58']},
        {id:'166-2-7', ans:['3000','3 000']},
        {id:'166-2-8', ans:['6,52','6.52','6,520','6.520']},
        {id:'166-2-9', ans:['2,075','2.075']},
        {id:'166-2-10', ans:['420']},
        {id:'166-2-11', ans:['5,068','5.068']},
        {id:'166-2-12', ans:['0,824','0.824']},
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
        "a) 700 cm²; 6,84 m²; 40 dm²; 16 000 m²; 4,05 km²; 1,58 km²<br>b) 3 000 cm³; 6,52 dm³; 2,075 dm³; 420 dm³; 5,068 m³; 0,824 m³",
        "",
        "Gợi ý: Mỗi đơn vị diện tích gấp/kém nhau 100 lần (ha và m² là 10 000 lần). Mỗi đơn vị thể tích gấp/kém nhau 1 000 lần.",
        "Diện tích gấp kém 100. Thể tích gấp kém 1 000.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Đổi đơn vị diện tích, thể tích", Math.round(correct/checks.length*100), "btn-check-166-2", 0, checks.length, correct);
};

window.check_166_3 = function() {
    const v = document.getElementById('166-3')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = (v === '108');
    window.showMathFeedback(isCorrect,
        "108 lít",
        "",
        "Gợi ý: Thể tích bể = 60 × 40 × 50 = 120 000 cm³ = 120 dm³ = 120 lít. Lượng nước = 120 × 90%.",
        "V bể = 60 × 40 × 50 = 120 000 cm³ = 120 lít.<br>Nước trong bể = 120 × 90 : 100 = 108 lít.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Bể cá nhà Nam", isCorrect?100:0, "btn-check-166-3", 0, 1, isCorrect?1:0);
};

window.check_166_4 = function() {
    const v = document.getElementById('166-4')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = (v === '180');
    window.showMathFeedback(isCorrect,
        "180 m³",
        "",
        "Gợi ý: Đã hút 5/8 → Còn phải hút 1 − 5/8 = 3/8. Số m³ nước còn lại = 480 × 3/8.",
        "Phần nước còn lại: 1 − 5/8 = 3/8 bể.<br>Số m³ còn phải hút: 480 × 3 / 8 = 180 m³.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Hút nước bể bơi", isCorrect?100:0, "btn-check-166-4", 0, 1, isCorrect?1:0);
};

import './logic.js';
