export const lesson168 = {
    period: "168",
    title: "BÀI 73: ÔN TẬP TOÁN CHUYỂN ĐỘNG ĐỀU (TIẾT 1)",
    topic: "Ôn tập vận tốc, quãng đường, thời gian",
    week: "34",

    content: `
        <div class="space-y-8 animate-fade-in pb-10">
            <!-- Card Tiêu đề & Tổng quan -->
            <div class="bg-gradient-to-br from-blue-50 to-sky-50 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-4 border-blue-200 shadow-xl relative overflow-hidden">
                <div class="relative z-10 space-y-6">
                    <div class="flex items-center justify-center gap-3">
                        <span class="text-3xl md:text-4xl">🚗</span>
                        <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide text-center">TÌM HIỂU BÀI: ÔN TẬP TOÁN CHUYỂN ĐỘNG ĐỀU</h3>
                    </div>

                    <!-- Grid 4 công thức & quy tắc chính -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 font-bold">
                        
                        <!-- 1. Bộ 3 công thức cơ bản -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-blue-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-black text-xl">1</div>
                                <h4 class="font-black text-blue-700 text-xl md:text-2xl">Bộ 3 công thức cơ bản</h4>
                            </div>
                            <div class="space-y-2 text-base md:text-lg text-gray-700">
                                <p>• <span class="font-black text-blue-800">Vận tốc:</span> <span class="text-rose-600 font-black">v = s : t</span></p>
                                <p>• <span class="font-black text-blue-800">Quãng đường:</span> <span class="text-rose-600 font-black">s = v × t</span></p>
                                <p>• <span class="font-black text-blue-800">Thời gian:</span> <span class="text-rose-600 font-black">t = s : v</span></p>
                            </div>
                        </div>

                        <!-- 2. Quy đổi đơn vị vận tốc -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-emerald-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-black text-xl">2</div>
                                <h4 class="font-black text-emerald-700 text-xl md:text-2xl">Đổi m/s ↔ km/h</h4>
                            </div>
                            <div class="space-y-2 text-sm md:text-base text-gray-700">
                                <p>• <span class="font-black text-emerald-800">1 m/s = 3,6 km/h</span></p>
                                <p>• Đổi từ <span class="font-black text-emerald-700">m/s sang km/h</span>: nhân với <span class="font-black text-emerald-700">3,6</span>.</p>
                                <p>• Đổi từ <span class="font-black text-emerald-700">km/h sang m/s</span>: chia cho <span class="font-black text-emerald-700">3,6</span>.</p>
                            </div>
                        </div>

                        <!-- 3. Chuyển đổi đơn vị thời gian -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-amber-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-black text-xl">3</div>
                                <h4 class="font-black text-amber-700 text-xl md:text-2xl">Đổi thời gian số thập phân</h4>
                            </div>
                            <div class="space-y-2 text-sm md:text-base text-gray-700">
                                <p>• <span class="font-black text-amber-800">3 phút = 3/60 giờ = 0,05 giờ</span></p>
                                <p>• <span class="font-black text-amber-800">1 giờ 30 phút = 1,5 giờ</span></p>
                                <p>• <span class="font-black text-amber-800">2,6 giờ = 2 giờ + 0,6 × 60 phút = 2 giờ 36 phút</span></p>
                            </div>
                        </div>

                        <!-- 4. Quy trình giải bài toán chuyển động -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-rose-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-rose-100 text-rose-700 rounded-full flex items-center justify-center font-black text-xl">4</div>
                                <h4 class="font-black text-rose-700 text-xl md:text-2xl">Quy trình giải bài toán</h4>
                            </div>
                            <div class="space-y-2 text-sm md:text-base text-gray-700">
                                <p>• <span class="font-black text-rose-800">Bước 1:</span> Đổi các đại lượng v, s, t về cùng hệ đơn vị đo (km, giờ, km/h hoặc m, giây, m/s).</p>
                                <p>• <span class="font-black text-rose-800">Bước 2:</span> Áp dụng công thức và tính toán.</p>
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
                        <div id="lesson168_b1" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">1</div>
                                <div>
                                    <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 text-blue-800 font-black rounded text-sm">Số ?</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700 mt-1">Bài 1. Vận tốc chạy của Việt</h3>
                                </div>
                            </div>
                            <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-4">
                                <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                                    Buổi sáng, Việt chạy quãng đường dài <span class="font-black text-blue-700">360 m</span> trong <span class="font-black text-blue-700">3 phút</span>. Như vậy:
                                </p>
                                <div class="space-y-3 font-bold text-lg">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span>a) Vận tốc chạy của Việt là:</span>
                                        <input id="168-1-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                                        <span>km/h.</span>
                                    </div>
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span>b) Vận tốc chạy của Việt là:</span>
                                        <input id="168-1-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-24 h-10 text-center border-2 border-blue-300 rounded-xl font-bold outline-none" placeholder="?">
                                        <span>m/s.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-168-1').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-168-1" onclick="window.check_168_1()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-168-1" class="hidden bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg font-bold text-blue-900 space-y-1">
                                <p>b) 3 phút = 180 giây. Vận tốc theo m/s: 360 : 180 = <span class="text-emerald-700">2 m/s</span></p>
                                <p>a) 360 m = 0,36 km, 3 phút = 0,05 giờ. Vận tốc theo km/h: 0,36 : 0,05 = <span class="text-emerald-700">7,2 km/h</span> (hoặc 2 × 3,6 = 7,2 km/h)</p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson168_b2" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-emerald-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">2</div>
                                <h3 class="text-xl md:text-2xl font-black text-emerald-700">Bài 2. Đường hầm Thủ Thiêm</h3>
                            </div>
                            <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-4">
                                <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                                    Đường hầm Thủ Thiêm vượt sông Sài Gòn có chiều dài <span class="font-black text-blue-700">1,49 km</span>. Một người đi xe máy vào cửa hầm lúc <span class="font-black text-blue-700">8 giờ 18 phút</span>, ra khỏi cửa hầm lúc <span class="font-black text-blue-700">8 giờ 21 phút</span>. Tính vận tốc của người đi xe máy.
                                </p>
                                <img src="assets/images/toan/toan_tap_2/168/168-2-ham-thu-thiem.png" class="max-w-[500px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Đường hầm Thủ Thiêm">
                                <div class="flex items-center gap-3 flex-wrap font-bold text-lg">
                                    <span class="text-gray-700">Vận tốc của người đi xe máy:</span>
                                    <input id="168-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none" placeholder="?">
                                    <span>km/h</span>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-168-2').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-168-2" onclick="window.check_168_2()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-168-2" class="hidden bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-lg font-bold text-emerald-900 space-y-1">
                                <p>Thời gian đi qua hầm: 8 giờ 21 phút − 8 giờ 18 phút = 3 phút = 0,05 giờ.</p>
                                <p>Vận tốc của xe máy: 1,49 : 0,05 = <span class="text-blue-700">29,8 km/h</span></p>
                                <p>Chúc mừng em đã giải đúng!</p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson168_b3" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-amber-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">3</div>
                                <h3 class="text-xl md:text-2xl font-black text-amber-700">Bài 3. Chuyến xe Hà Nội – Thanh Hoá</h3>
                            </div>
                            <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4">
                                <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                                    Quãng đường Hà Nội – Thanh Hoá dài <span class="font-black text-blue-700">156 km</span>. Một ô tô khởi hành từ Hà Nội lúc <span class="font-black text-blue-700">8 giờ 30 phút</span> với vận tốc <span class="font-black text-blue-700">60 km/h</span>. Hỏi ô tô đó đến Thanh Hoá lúc mấy giờ?
                                </p>
                                <div class="flex items-center gap-3 flex-wrap font-bold text-lg">
                                    <span class="text-gray-700">Ô tô đến Thanh Hoá lúc:</span>
                                    <input id="168-3-h" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                                    <span>giờ</span>
                                    <input id="168-3-m" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                                    <span>phút</span>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-168-3').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-168-3" onclick="window.check_168_3()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-168-3" class="hidden bg-amber-50 p-4 rounded-2xl border border-amber-200 text-lg font-bold text-amber-900 space-y-1">
                                <p>Thời gian ô tô đi: 156 : 60 = 2,6 giờ = 2 giờ 36 phút.</p>
                                <p>Ô tô đến Thanh Hoá lúc: 8 giờ 30 phút + 2 giờ 36 phút = <span class="text-emerald-700">11 giờ 6 phút</span></p>
                                <p>Chúc mừng em đã giải đúng!</p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Bài 4 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson168_b4" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-rose-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">4</div>
                                <h3 class="text-xl md:text-2xl font-black text-rose-700">Bài 4. Lớp Mai đi tham quan</h3>
                            </div>
                            <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-4">
                                <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                                    Lớp của Mai đi tham quan, ô tô khởi hành từ trường lúc <span class="font-black text-blue-700">7 giờ 45 phút</span> và đến địa điểm tham quan lúc <span class="font-black text-blue-700">9 giờ 15 phút</span> cùng ngày. Biết rằng ô tô đi với vận tốc là <span class="font-black text-blue-700">42 km/h</span>. Hỏi quãng đường từ trường đến địa điểm tham quan dài bao nhiêu ki-lô-mét?
                                </p>
                                <div class="flex items-center gap-3 flex-wrap font-bold text-lg">
                                    <span class="text-gray-700">Quãng đường từ trường đến địa điểm tham quan:</span>
                                    <input id="168-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-32 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?">
                                    <span>km</span>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-168-4').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-168-4" onclick="window.check_168_4()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-168-4" class="hidden bg-rose-50 p-4 rounded-2xl border border-rose-200 text-lg font-bold text-rose-900 space-y-1">
                                <p>Thời gian ô tô đi: 9 giờ 15 phút − 7 giờ 45 phút = 1 giờ 30 phút = 1,5 giờ.</p>
                                <p>Quãng đường: 42 × 1,5 = <span class="text-emerald-700">63 km</span></p>
                                <p>Chúc mừng em đã giải đúng!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,

    quizPool: [
        { question: "Việt chạy 360 m trong 3 phút (180s). Vận tốc m/s là?", options: ["2 m/s", "120 m/s", "3 m/s", "1,8 m/s"], answer: 0 },
        { question: "Vận tốc 2 m/s đổi ra km/h bằng bao nhiêu?", options: ["7,2 km/h", "3,6 km/h", "72 km/h", "10,8 km/h"], answer: 0 },
        { question: "Hầm Thủ Thiêm dài 1,49 km, đi từ 8h18 đến 8h21. Thời gian đi là?", options: ["3 phút (0,05 giờ)", "4 phút", "5 phút", "2 phút"], answer: 0 },
        { question: "Vận tốc người đi xe máy qua hầm Thủ Thiêm là?", options: ["29,8 km/h", "30 km/h", "28,9 km/h", "29 km/h"], answer: 0 },
        { question: "Hà Nội - Thanh Hoá 156 km, v = 60 km/h. Thời gian đi là?", options: ["2,6 giờ (2h36p)", "2,5 giờ", "3 giờ", "2h15p"], answer: 0 },
        { question: "Xuất phát lúc 8h30, đi 2h36p thì ô tô đến Thanh Hoá lúc?", options: ["11 giờ 6 phút", "11 giờ 30 phút", "11 giờ", "10 giờ 56 phút"], answer: 0 },
        { question: "Thời gian ô tô chở lớp Mai đi tham quan (7h45 đến 9h15) là?", options: ["1,5 giờ (1h30p)", "2 giờ", "1 giờ", "1h45p"], answer: 0 },
        { question: "Quãng đường ô tô đi tham quan (v = 42 km/h, t = 1,5h) là?", options: ["63 km", "42 km", "84 km", "60 km"], answer: 0 },
        { question: "Công thức tính vận tốc v là?", options: ["v = s : t", "v = s × t", "v = t : s", "v = s + t"], answer: 0 },
        { question: "Công thức tính quãng đường s là?", options: ["s = v × t", "s = v : t", "s = t : v", "s = v + t"], answer: 0 },
        { question: "Công thức tính thời gian t là?", options: ["t = s : v", "t = s × v", "t = v : s", "t = s - v"], answer: 0 },
        { question: "Đổi m/s sang km/h ta nhân với?", options: ["3,6", "60", "1000", "3600"], answer: 0 },
        { question: "Đổi km/h sang m/s ta chia cho?", options: ["3,6", "60", "1000", "3600"], answer: 0 },
        { question: "3 phút = ? giờ", options: ["0,05 giờ", "0,3 giờ", "0,5 giờ", "0,03 giờ"], answer: 0 },
        { question: "2,6 giờ = ? giờ ? phút", options: ["2 giờ 36 phút", "2 giờ 6 phút", "2 giờ 6 phút", "2 giờ 30 phút"], answer: 0 }
    ]
};

window.lesson168 = lesson168;

window.check_168_1 = function() {
    const v1 = document.getElementById('168-1-1')?.value.trim().replace(',','.').replace(/\s/g,'') || '';
    const v2 = document.getElementById('168-1-2')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = (v1 === '7.2' || v1 === '7,2') && v2 === '2';
    window.showMathFeedback(isCorrect,
        "a) 7,2 km/h<br>b) 2 m/s",
        "",
        "Gợi ý: b) 3 phút = 180 giây → v = 360 : 180 = 2 m/s. a) 360m = 0,36km, 3p = 0,05h → v = 0,36 : 0,05 = 7,2 km/h (hoặc 2 × 3,6 = 7,2).",
        "b) 360 : 180 = 2 m/s.<br>a) 2 × 3,6 = 7,2 km/h.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Vận tốc của Việt", isCorrect?100:0, "btn-check-168-1", 0, 1, isCorrect?1:0);
};

window.check_168_2 = function() {
    const v = document.getElementById('168-2')?.value.trim().replace(',','.').replace(/\s/g,'') || '';
    const isCorrect = (v === '29.8' || v === '29,8');
    window.showMathFeedback(isCorrect,
        "29,8 km/h",
        "",
        "Gợi ý: Thời gian = 8h21 − 8h18 = 3 phút = 0,05 giờ. Vận tốc = 1,49 : 0,05 = 29,8 km/h.",
        "Thời gian: 3 phút = 0,05 giờ.<br>Vận tốc: 1,49 : 0,05 = 29,8 km/h.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Hầm Thủ Thiêm", isCorrect?100:0, "btn-check-168-2", 0, 1, isCorrect?1:0);
};

window.check_168_3 = function() {
    const v1 = document.getElementById('168-3-h')?.value.trim() || '';
    const v2 = document.getElementById('168-3-m')?.value.trim() || '';
    const isCorrect = (v1 === '11' && v2 === '6');
    window.showMathFeedback(isCorrect,
        "11 giờ 6 phút",
        "",
        "Gợi ý: Thời gian đi = 156 : 60 = 2,6 giờ = 2 giờ 36 phút. Giờ đến = 8h30 + 2h36p = 11h6p.",
        "Thời gian đi: 156 : 60 = 2,6h = 2h36p.<br>Giờ đến: 8h30 + 2h36 = 11 giờ 6 phút.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Chuyến xe Hà Nội Thanh Hoá", isCorrect?100:0, "btn-check-168-3", 0, 1, isCorrect?1:0);
};

window.check_168_4 = function() {
    const v = document.getElementById('168-4')?.value.trim().replace(/\s/g,'') || '';
    const isCorrect = v === '63';
    window.showMathFeedback(isCorrect,
        "63 km",
        "",
        "Gợi ý: Thời gian đi = 9h15 − 7h45 = 1h30p = 1,5 giờ. Quãng đường = 42 × 1,5 = 63 km.",
        "Thời gian đi: 1,5 giờ.<br>Quãng đường: 42 × 1,5 = 63 km.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Lớp Mai đi tham quan", isCorrect?100:0, "btn-check-168-4", 0, 1, isCorrect?1:0);
};
