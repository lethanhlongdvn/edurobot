// ===================================================================
// Tiết 113 - Luyện tập chung (Tiết 1)
// DATA: Nội dung slide bài học và quiz pool
// ===================================================================

export const lesson113Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Slide 1: Ghi nhớ quan trọng -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-2 border-blue-50 shadow-xl bg-white/80 backdrop-blur-xl space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">📚</div>
                                <h3 class="text-slate-800 uppercase italic text-xl font-black">Ghi nhớ quan trọng</h3>
                            </div>

                            <div class="p-8 bg-blue-50 rounded-[2.5rem] border-2 border-blue-100 shadow-inner">
                                <p class="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed italic text-center">
                                    "Mỗi đơn vị đo thể tích gấp 1 000 lần đơn vị bé hơn tiếp liền.<br>
                                    Mỗi đơn vị đo thể tích bằng 1/1 000 đơn vị lớn hơn tiếp liền."
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
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Slide 1: Bài 1 - Đọc và viết số đo thể tích (1 cột dọc) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                             <div class="flex items-center gap-4 mb-4">
                                     <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                     <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 1. Đọc và viết số đo thể tích</h3>
                                 </div>

                            <div class="p-6 bg-blue-50/50 border-2 border-blue-100 rounded-[2rem]">
                                <div class="grid grid-cols-1 gap-5 w-full font-bold text-slate-800 text-lg">
                                    <!-- Câu a -->
                                    <div class="bg-white p-5 rounded-2xl border border-blue-200 space-y-3">
                                        <p class="text-slate-500 font-bold uppercase tracking-wider italic text-sm">a) Viết số đo: Một trăm phẩy không năm mét khối</p>
                                        <div class="flex items-center gap-3">
                                            <input id="ans-113-1-1" type="text" class="w-full p-4 rounded-xl border-2 border-blue-300 text-2xl font-black text-blue-700 focus:border-blue-500 outline-none" placeholder="Nhập số đo..." style="padding: 0.75rem !important;">
                                            <span class="text-xl font-bold text-slate-600">m³</span>
                                        </div>
                                    </div>

                                    <!-- Câu b -->
                                    <div class="bg-white p-5 rounded-2xl border border-blue-200 space-y-3">
                                        <p class="text-slate-500 font-bold uppercase tracking-wider italic text-sm">b) Đọc số đo: 0,015 m³</p>
                                        <input id="ans-113-1-2" type="text" class="w-full p-4 rounded-xl border-2 border-blue-300 text-xl font-bold text-slate-700 focus:border-blue-500 outline-none" placeholder="Đọc số đo bằng chữ..." style="padding: 0.75rem !important;">
                                    </div>

                                    <!-- Câu c -->
                                    <div class="bg-white p-5 rounded-2xl border border-blue-200 space-y-3">
                                        <p class="text-slate-500 font-bold uppercase tracking-wider italic text-sm">c) Viết số đo: Tám trăm hai mươi mốt đề-xi-mét khối</p>
                                        <div class="flex items-center gap-3">
                                            <input id="ans-113-1-3" type="text" class="w-full p-4 rounded-xl border-2 border-blue-300 text-2xl font-black text-blue-700 focus:border-blue-500 outline-none" placeholder="Nhập số đo..." style="padding: 0.75rem !important;">
                                            <span class="text-xl font-bold text-slate-600">dm³</span>
                                        </div>
                                    </div>

                                    <!-- Câu d -->
                                    <div class="bg-white p-5 rounded-2xl border border-blue-200 space-y-3">
                                        <p class="text-slate-500 font-bold uppercase tracking-wider italic text-sm">d) Đọc số đo: 100,2 cm³</p>
                                        <input id="ans-113-1-4" type="text" class="w-full p-4 rounded-xl border-2 border-blue-300 text-xl font-bold text-slate-700 focus:border-blue-500 outline-none" placeholder="Đọc số đo bằng chữ..." style="padding: 0.75rem !important;">
                                    </div>
                                </div>
                            </div>

                             <!-- Lời giải ẩn cho giáo viên -->
                             <div id="sol-113-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                 <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                 • Một trăm phẩy không năm mét khối: 100,05 m³.<br>
                                 • 0,015 m³: Không phẩy không một năm mét khối.<br>
                                 • Tám trăm hai mươi mốt đề-xi-mét khối: 821 dm³.<br>
                                 • 100,2 cm³: Một trăm phẩy hai xăng-ti-mét khối.
                             </div>
                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-113-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-check-113-1" onclick="window.check_113_1()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 - Ước lượng thể tích -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                             <div class="flex items-center gap-4 mb-4">
                                     <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                     <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase">Bài 2. Ước lượng thể tích</h3>
                                 </div>

                            <div class="flex flex-col md:flex-row items-center gap-8 bg-emerald-50 p-8 rounded-[2rem] border-2 border-emerald-100">
                                <div class="flex-1 space-y-6">
                                    <p class="text-2xl font-bold text-slate-700">Thể tích của khối băng lớn bên cạnh khoảng bao nhiêu?</p>
                                    <select id="ans-113-2" class="w-full p-5 rounded-2xl border-4 border-emerald-300 text-2xl font-black outline-none focus:border-emerald-600 bg-white">
                                        <option value="">Chọn đáp án...</option>
                                        <option value="A">A. 1 cm³</option>
                                        <option value="B">B. 1 dm³</option>
                                        <option value="C">C. 1 m³</option>
                                    </select>
                                </div>
                                <div class="shrink-0 bg-white p-4 rounded-3xl border border-emerald-200 shadow-sm">
                                    <img src="./assets/images/toan/toan_tap_2/113/113_b2.webp" class="w-60 h-60 object-contain rounded-2xl">
                                </div>
                            </div>

                             <!-- Lời giải ẩn cho giáo viên -->
                             <div id="sol-113-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                 <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                 Khối băng lớn có thể tích khoảng 1 m³ (chọn đáp án C).
                             </div>
                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-113-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-check-113-2" onclick="window.check_113_2()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 - Tính thể tích hình khối -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                             <div class="flex items-center gap-4 mb-4">
                                     <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                                     <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 3. Tính thể tích hình khối</h3>
                                 </div>

                            <div class="flex flex-col lg:flex-row items-center gap-8 bg-blue-50 p-8 rounded-[2rem] border-2 border-blue-100">
                                <div class="shrink-0 bg-white p-4 rounded-3xl border border-blue-200 shadow-sm">
                                    <img src="./assets/images/toan/toan_tap_2/113/113_b3.webp" class="w-72 h-auto rounded-2xl">
                                </div>
                                <div class="flex-1 space-y-6 text-left">
                                    <p class="text-2xl font-bold text-slate-700">Hình bên gồm các khối lập phương cạnh 1 cm chồng lên nhau. Thể tích hình đó là bao nhiêu?</p>
                                    <div class="flex items-center gap-3">
                                        <input id="ans-113-3" type="text" class="w-32 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span class="text-xl font-black text-blue-700">cm³</span>
                                    </div>
                                </div>
                            </div>

                             <!-- Lời giải ẩn cho giáo viên -->
                             <div id="sol-113-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                 <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                 Ta có thể chia hình khối đã cho thành 3 tầng từ trên xuống dưới:<br>
                                 - Tầng 1 (trên cùng) có: 4 khối lập phương.<br>
                                 - Tầng 2 (ở giữa) có: 4 x 4 = 16 khối lập phương.<br>
                                 - Tầng 3 (dưới cùng) có: 4 x 6 = 24 khối lập phương.<br>
                                 Tổng số khối lập phương là: 4 + 16 + 24 = 44 khối lập phương.<br>
                                 Thể tích hình khối đó là: 44 x 1 = 44 (cm³).
                             </div>
                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-113-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-check-113-3" onclick="window.check_113_3()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                        </div>
                    </div>

                    <!-- Slide 4: Bài 4 - Đổi đơn vị đo -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                             <div class="flex items-center gap-4 mb-4">
                                     <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                                     <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 4. Đổi đơn vị đo thể tích</h3>
                                 </div>

                            <div class="p-6 bg-blue-50/50 border-2 border-blue-100 rounded-[2rem] space-y-6">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-bold text-slate-800 text-xl">
                                    <div class="bg-white p-6 rounded-3xl border border-blue-200 space-y-4">
                                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>a) 5 m³ =</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="ans-113-4-1" type="text" class="w-32 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>dm³</span>
                                            </span>
                                        </div>
                                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>b) 480 dm³ =</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="ans-113-4-2" type="text" class="w-32 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>m³</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="bg-white p-6 rounded-3xl border border-blue-200 space-y-4">
                                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>c) 0,25 m³ =</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="ans-113-4-3" type="text" class="w-32 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>cm³</span>
                                            </span>
                                        </div>
                                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>d) 5000 cm³ =</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="ans-113-4-4" type="text" class="w-32 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>m³</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                             <!-- Lời giải ẩn cho giáo viên -->
                             <div id="sol-113-4" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                 <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                 a) 5 m³ = 5 000 dm³<br>
                                 b) 480 dm³ = 0,48 m³<br>
                                 c) 0,25 m³ = 250 000 cm³<br>
                                 d) 5 000 cm³ = 0,005 m³
                             </div>
                    <div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-113-4')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-check-113-4" onclick="window.check_113_4()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,

    "quizPool": [
        { "question": "0,5 m³ bằng bao nhiêu dm³?", "options": ["50 dm³", "500 dm³", "5000 dm³", "5 dm³"], "answer": 1, "level": "easy" },
        { "question": "1 m³ gấp dm³ bao nhiêu lần?", "options": ["10 lần", "100 lần", "1000 lần", "10000 lần"], "answer": 2, "level": "easy" },
        { "question": "Viết số: Mười bốn phẩy hai mươi lăm mét khối", "options": ["14,25 m³", "14,205 m³", "1425 m³", "1,425 m³"], "answer": 0, "level": "easy" },
        { "question": "Đổi 3/4 m³ ra lít (biết 1dm³ = 1 lít):", "options": ["75 lít", "750 lít", "7500 lít", "0,75 lít"], "answer": 1, "level": "medium" },
        { "question": "Thể tích một cái hộp là 1500 cm³. Đổi ra đề-xi-mét khối:", "options": ["15 dm³", "1,5 dm³", "0,15 dm³", "150 dm³"], "answer": 1, "level": "easy" },
        { "question": "Đọc số 0,008 m³:", "options": ["Tám phần nghìn mét khối", "Tám phần trăm mét khối", "Không phẩy không tám mét khối", "Không phẩy không không tám mét khối"], "answer": 3, "level": "medium" },
        { "question": "2 m³ 50 dm³ = ... m³", "options": ["2,5 m³", "2,05 m³", "2,005 m³", "250 m³"], "answer": 1, "level": "medium" },
        { "question": "Đơn vị đo thể tích nào lớn nhất trong các đơn vị sau?", "options": ["cm³", "dm³", "m³", "mm³"], "answer": 2, "level": "easy" },
        { "question": "4,5 dm³ = ... cm³", "options": ["45 cm³", "450 cm³", "4500 cm³", "45000 cm³"], "answer": 2, "level": "easy" },
        { "question": "0,01 m³ = ... cm³", "options": ["10 cm³", "100 cm³", "1000 cm³", "10 000 cm³"], "answer": 3, "level": "medium" },
        { "question": "Tỉ số giữa cm³ và dm³ là:", "options": ["1/10", "1/100", "1/1000", "1/10000"], "answer": 2, "level": "easy" },
        { "question": "Viết 'Năm nghìn không trăm lẻ hai xăng-ti-mét khối':", "options": ["502 cm³", "5002 cm³", "5020 cm³", "5,002 cm³"], "answer": 1, "level": "easy" },
        { "question": "Đổi 1/2 dm³ sang cm³:", "options": ["50 cm³", "500 cm³", "5000 cm³", "0,5 cm³"], "answer": 1, "level": "medium" },
        { "question": "Hai đơn vị đo thể tích liền kề gấp/kém nhau bao nhiêu lần?", "options": ["10 lần", "100 lần", "1000 lần", "10 000 lần"], "answer": 2, "level": "easy" },
        { "question": "Thứ tự từ bé đến lớn là:", "options": ["cm³ < dm³ < m³", "m³ < dm³ < cm³", "dm³ < cm³ < m³", "cm³ < m³ < dm³"], "answer": 0, "level": "easy" }
    ]
};
