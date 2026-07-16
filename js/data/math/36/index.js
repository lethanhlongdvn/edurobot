const metadata = {
    "lessonInfo": {
        "period": "36",
        "week": "8",
        "topic": "Thực hành và trải nghiệm",
        "title": "BÀI 17: THỰC HÀNH VÀ TRẢI NGHIỆM VỚI MỘT SỐ ĐƠN VỊ ĐO ĐẠI LƯỢNG (TIẾT 1)",
        "desc": "Thực hành đo đạc và tính diện tích mặt sàn lớp học; tính toán số hộp gạch và số tiền mua gạch để lát sàn phòng học của lớp và cả trường dựa trên số liệu thực tế."
    },
    "bai_tap": [
        {
            "id": "36_1",
            "type": "fill_multiple",
            "title": "Đo sàn lớp học và tính tiền mua gạch",
            "answers": ["ok"],
            "guidance": "Em hãy tính diện tích nền lớp học, sau đó tính diện tích của một hộp gạch gồm 4 viên. Tiếp theo, chia diện tích nền cho diện tích một hộp gạch để tìm số hộp gạch cần mua, rồi nhân với giá tiền một hộp nhé!",
            "solution": "Bài giải chi tiết dựa trên số liệu của lớp em:<br>- Diện tích 1 viên gạch vuông cạnh 50 cm là: 50 x 50 = 2500 (cm²).<br>- Đổi: 2500 cm² = 0,25 m².<br>- Diện tích một hộp gạch (4 viên) là: 0,25 x 4 = 1 (m²).<br>- Vì diện tích một hộp gạch là 1 m², nên số hộp gạch cần mua bằng chính diện tích mặt sàn phòng học lớp em (làm tròn lên).<br>- Tổng số tiền mua gạch = Số hộp gạch x 140 000 đồng."
        },
        {
            "id": "36_2",
            "type": "fill_multiple",
            "title": "Tính số tiền mua gạch cho tất cả phòng học",
            "answers": ["ok"],
            "guidance": "Lấy số tiền mua gạch của phòng học lớp em (được tính ở Bài 1) nhân với tổng số phòng học của trường em.",
            "solution": "Bài giải chi tiết dựa trên số liệu của trường em:<br>- Số tiền mua gạch cho tất cả các phòng học = Số tiền mua gạch lát một phòng học x Số phòng học trong trường."
        }
    ],
    "quizPool": [
        { "question": "Một viên gạch hình vuông có cạnh 50 cm. Diện tích của viên gạch đó là:", "options": ["200 cm²", "2500 cm²", "250 cm²", "25000 cm²"], "answer": 1 },
        { "question": "Đổi đơn vị: 2500 cm² bằng bao nhiêu mét vuông?", "options": ["2.5 m²", "0.25 m²", "0.025 m²", "25 m²"], "answer": 1 },
        { "question": "Một hộp gạch có 4 viên gạch hình vuông cạnh 50 cm. Tổng diện tích các viên gạch trong hộp là:", "options": ["1 m²", "10 m²", "0.1 m²", "4 m²"], "answer": 0 },
        { "question": "Nếu diện tích phòng học là 48 m² và mỗi hộp gạch lát được 1 m² thì cần bao nhiêu hộp gạch?", "options": ["12 hộp", "24 hộp", "48 hộp", "96 hộp"], "answer": 2 },
        { "question": "Giá một hộp gạch là 140 000 đồng. Số tiền để mua 50 hộp gạch là:", "options": ["7 000 000 đồng", "1 400 000 đồng", "700 000 đồng", "70 000 000 đồng"], "answer": 0 },
        { "question": "Nếu diện tích phòng học lẻ là 48.5 m², số hộp gạch nguyên tối thiểu cần mua là bao nhiêu hộp?", "options": ["48 hộp", "49 hộp", "50 hộp", "48.5 hộp"], "answer": 1 },
        { "question": "Một phòng học có diện tích 50 m². Số tiền mua gạch lát nền (giá 140 000 đồng/hộp, mỗi hộp lát 1 m²) là:", "options": ["7 000 000 đồng", "700 000 đồng", "14 000 000 đồng", "5 000 000 đồng"], "answer": 0 },
        { "question": "Đổi đơn vị: 4 m² = ... cm²", "options": ["400 cm²", "4000 cm²", "40000 cm²", "40 cm²"], "answer": 2 },
        { "question": "Một trường học có 12 phòng học giống nhau. Biết số tiền mua gạch lát một phòng là 7 000 000 đồng. Số tiền mua gạch cho cả trường là:", "options": ["84 000 000 đồng", "72 000 000 đồng", "96 000 000 đồng", "8 400 000 đồng"], "answer": 0 },
        { "question": "Để đo diện tích phòng học, đơn vị đo thích hợp nhất là:", "options": ["m²", "cm²", "dm²", "ha"], "answer": 0 },
        { "question": "Một căn phòng hình chữ nhật dài 9 m, rộng 5 m. Diện tích căn phòng đó là:", "options": ["45 m²", "28 m²", "14 m²", "95 m²"], "answer": 0 },
        { "question": "Diện tích một sân trường là 1500 m². Đơn vị đo nào dưới đây có thể dùng tương ứng?", "options": ["15 dam²", "1.5 ha", "150 dm²", "1.5 km²"], "answer": 0 },
        { "question": "Giá tiền một hộp gạch là 140 000 đồng. Mua 10 hộp gạch hết:", "options": ["1 400 000 đồng", "140 000 đồng", "14 000 000 đồng", "140 000 00 đồng"], "answer": 0 },
        { "question": "Diện tích mặt sàn phòng học lớp em đo được là 56 m². Số hộp gạch loại lát được 1 m²/hộp cần mua là:", "options": ["56 hộp", "14 hộp", "28 hộp", "112 hộp"], "answer": 0 },
        { "question": "Nếu phòng học cần lát có diện tích 60 m², mỗi hộp gạch giá 140 000 đồng. Phép tính nào đúng để tìm số tiền?", "options": ["60 x 140 000", "60 : 140 000", "140 000 : 60", "60 + 140 000"], "answer": 0 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson36 = {
    ...metadata.lessonInfo,
    "content": `
        <div class="theory-section space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 pt-6">
            <div class="glass-card p-6 md:p-10 rounded-[3rem] shadow-2xl relative overflow-hidden text-white" style="background: linear-gradient(135deg, #059669, #0d9488);">
<div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-10 -mb-10 blur-2xl"></div>
<div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
<div class="w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-md rounded-[2rem] flex items-center justify-center shadow-inner border border-white/30 animate-pulse">
<span class="text-5xl md:text-7xl">📏</span>
</div>
<div class="text-center md:text-left">
<h2 class="text-2xl md:text-4xl font-black mb-2 tracking-tight">THỰC HÀNH VÀ TRẢI NGHIỆM ĐO ĐẠI LƯỢNG</h2>
<p class="text-emerald-100 text-lg md:text-2xl font-medium opacity-90">Học cách ứng dụng các đơn vị đo diện tích và tính toán chi phí lát sàn thực tế cho lớp học của mình nhé!</p>
</div>
</div>
</div>
<div class="glass-card p-6 md:p-10 rounded-[3rem] bg-white shadow-xl border border-teal-100 relative overflow-hidden">
<div class="flex items-center gap-4 mb-6">
<div class="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-xl md:text-3xl shadow-lg shadow-emerald-200">
<i class="fas fa-book-reader"></i>
</div>
<h3 class="text-2xl md:text-4xl font-black text-slate-800">Kiến thức trải nghiệm</h3>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-bold text-slate-700">
<div class="p-6 bg-emerald-50/30 border border-emerald-100 rounded-[2rem] space-y-2 text-lg md:text-2xl font-medium">
<h4 class="text-emerald-700 text-lg md:text-2xl font-black">🧱 Quy đổi diện tích gạch</h4>
<ul class="list-disc pl-5 space-y-2">
<li>1 viên gạch vuông cạnh 50 cm: <br/><span class="text-emerald-600">50 cm × 50 cm = 2 500 cm² = 0,25 m²</span>.</li>
<li>Một hộp gạch gồm 4 viên gạch:<br/><span class="text-emerald-600">0,25 m² × 4 = 1 m²</span>.</li>
<li>Do đó, lát <span class="text-teal-600">1 m²</span> cần vừa đúng <span class="text-teal-600">1 hộp gạch</span>!</li>
</ul>
</div>
<div class="p-6 bg-teal-50/30 border border-teal-100 rounded-[2rem] space-y-2 text-lg md:text-2xl font-medium">
<h4 class="text-teal-700 text-lg md:text-2xl font-black">💰 Tính toán chi phí</h4>
<ul class="list-disc pl-5 space-y-2">
<li>Số hộp gạch cần mua = Diện tích mặt sàn (m²).</li>
<li>Nếu diện tích lẻ, ta phải làm tròn lên hộp nguyên gần nhất.</li>
<li>Số tiền mua gạch = Số hộp gạch × 140 000 đồng.</li>
<li>Tổng số tiền cả trường = Số tiền 1 lớp × Số phòng học.</li>
</ul>
</div>
</div>
</div>
        </div>
        `,
    "practice": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12 text-xl md:text-3xl">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" style="display:flex; transition:transform 0.45s cubic-bezier(0.4,0,0.2,1);">  

                    <!-- Trang 1: Bài 1 (Thực hành đo và tính toán lớp học) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="glass-card p-6 md:p-8 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden flex flex-col justify-between">
                            <div>
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 md:w-12 md:h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform rotate-2">1</div>
                                        <h3 class="text-lg md:text-2xl lg:text-3xl text-teal-900 font-black uppercase tracking-tighter">Đo sàn lớp học và tính tiền mua gạch</h3>
                                    </div>
                                    <button onclick="window.toggleSolution('sol-36-1')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                                </div>

                                <div class="w-full mx-auto space-y-6">
                                    <!-- Đề bài -->
                                    <div class="p-6 bg-emerald-50 rounded-[2rem] border border-emerald-100 text-lg md:text-2xl font-medium">
                                        <p class="font-bold text-emerald-800">Đề bài:</p>
                                        <p class="text-slate-600 leading-relaxed">
                                            Em hãy thực hành đo chiều dài, chiều rộng phòng học lớp mình, tính diện tích mặt sàn phòng học đó, rồi tính số tiền mua gạch để lát mặt sàn. Biết mẫu gạch hình vuông cạnh 50 cm được đóng theo hộp 4 viên, mỗi hộp có giá 140 000 đồng.
                                        </p>
                                    </div>

                                    <!-- Ô nhập dạng 1 cột -->
                                    <div class="bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-200 text-lg md:text-2xl font-bold text-slate-700 space-y-6">
                                        <!-- Đo đạc -->
                                        <div class="space-y-4">
                                            <div class="text-teal-800 border-l-4 border-teal-500 pl-2 text-xl font-black">a) Kết quả đo đạc thực tế của lớp em:</div>
                                            
                                            <div class="flex items-center gap-2 flex-wrap md:flex-nowrap">
                                                <span>Chiều dài đo được:</span>
                                                <input type="text" id="ans-36-1-length" value="8" size="1" oninput="this.size = Math.max(1, this.value.length);" class="h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-black outline-none md:text-3xl" style="width: auto !important; min-width: 60px; padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                                <span>mét (m)</span>
                                            </div>

                                            <div class="flex items-center gap-2 flex-wrap md:flex-nowrap">
                                                <span>Chiều rộng đo được:</span>
                                                <input type="text" id="ans-36-1-width" value="6" size="1" oninput="this.size = Math.max(1, this.value.length);" class="h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-black outline-none md:text-3xl" style="width: auto !important; min-width: 60px; padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                                <span>mét (m)</span>
                                            </div>

                                            <div class="flex items-center gap-2 flex-wrap md:flex-nowrap border-t border-slate-200 pt-4 font-bold">
                                                <span>Diện tích mặt sàn phòng học là:</span>
                                                <input type="text" id="ans-36-1-s" size="1" oninput="this.size = Math.max(1, this.value.length);" class="h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-black outline-none md:text-3xl" placeholder="?" style="width: auto !important; min-width: 80px; padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                                <span>mét vuông (m²)</span>
                                            </div>
                                        </div>

                                        <!-- Tính tiền -->
                                        <div class="space-y-4 border-t border-dashed border-slate-300 pt-6">
                                            <div class="text-teal-800 border-l-4 border-teal-500 pl-2 text-xl font-black">b) Tính toán chi phí lát sàn:</div>

                                            <div class="flex items-center gap-2 flex-wrap md:flex-nowrap">
                                                <span>Diện tích 1 viên gạch là: 50 × 50 =</span>
                                                <input type="text" id="ans-36-1-tile-s" size="1" oninput="this.size = Math.max(1, this.value.length);" class="h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-black outline-none md:text-3xl" placeholder="?" style="width: auto !important; min-width: 80px; padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                                <span>cm²</span>
                                            </div>

                                            <div class="flex items-center gap-2 flex-wrap md:flex-nowrap">
                                                <span>Đổi đơn vị: diện tích 1 viên gạch bằng</span>
                                                <input type="text" id="ans-36-1-tile-sm" size="1" oninput="this.size = Math.max(1, this.value.length);" class="h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-black outline-none md:text-3xl" placeholder="?" style="width: auto !important; min-width: 80px; padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                                <span>m²</span>
                                            </div>

                                            <div class="flex items-center gap-2 flex-wrap md:flex-nowrap">
                                                <span>Diện tích một hộp gạch (4 viên) là:</span>
                                                <input type="text" id="ans-36-1-box-s" size="1" oninput="this.size = Math.max(1, this.value.length);" class="h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-black outline-none md:text-3xl" placeholder="?" style="width: auto !important; min-width: 80px; padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                                <span>m²</span>
                                            </div>

                                            <div class="flex items-center gap-2 flex-wrap md:flex-nowrap">
                                                <span>Số hộp gạch nguyên tối thiểu cần mua là:</span>
                                                <input type="text" id="ans-36-1-boxes" size="1" oninput="this.size = Math.max(1, this.value.length);" class="h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-black outline-none md:text-3xl" placeholder="?" style="width: auto !important; min-width: 80px; padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                                <span>hộp</span>
                                            </div>

                                            <div class="flex items-center gap-2 flex-wrap md:flex-nowrap border-t border-slate-200 pt-4 font-bold">
                                                <span>Thành tiền mua gạch lát nền là:</span>
                                                <input type="text" id="ans-36-1-money" size="1" oninput="this.size = Math.max(1, this.value.length);" class="h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-black outline-none md:text-3xl" placeholder="?" style="width: auto !important; min-width: 140px; padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                                <span>đồng</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Lời giải của Giáo viên -->
                            <div id="sol-36-1" class="hidden mt-4 p-6 bg-amber-50 rounded-2xl border border-amber-200 text-lg md:text-2xl font-medium text-slate-700">
                                <p class="font-bold text-amber-800 mb-2">✍️ Bài giải mẫu (Cập nhật theo số liệu thực tế em nhập):</p>
                                <div id="text-sol-36-1" class="leading-relaxed">Hãy bấm nút kiểm tra để hiển thị bài giải chi tiết tương ứng với số liệu của em!</div>
                            </div>

                            <div class="flex justify-end mt-6">
                                <button id="btn-check-36-1" onclick="window.check_36_1()" style="background: linear-gradient(135deg, #14b8a6, #0f766e);" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Trang 2: Bài 2 (Tính tiền mua gạch cho cả trường) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="glass-card p-6 md:p-8 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden flex flex-col justify-between">
                            <div>
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 md:w-12 md:h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">2</div>
                                        <h3 class="text-lg md:text-2xl lg:text-3xl text-teal-900 font-black uppercase tracking-tighter">Tính cho toàn trường</h3>
                                    </div>
                                    <button onclick="window.toggleSolution('sol-36-2')" class="bg-amber-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all shadow-md">Hiện bài giải</button>
                                </div>

                                <div class="w-full mx-auto space-y-6">
                                    <!-- Đề bài -->
                                    <div class="p-6 bg-emerald-50 rounded-[2rem] border border-emerald-100 text-lg md:text-2xl font-medium">
                                        <p class="font-bold text-emerald-800">Đề bài:</p>
                                        <p class="text-slate-600 leading-relaxed">
                                            Giả sử các phòng học khác trong trường có diện tích mặt sàn bằng diện tích mặt sàn phòng học của lớp em. Tính số tiền để mua gạch lát lại mặt sàn của tất cả các phòng học trong trường em.
                                        </p>
                                    </div>

                                    <!-- Ô nhập dạng 1 cột -->
                                    <div class="bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-200 text-lg md:text-2xl font-bold text-slate-700 space-y-6">
                                        <div class="flex items-center gap-2 flex-wrap md:flex-nowrap font-bold">
                                            <span>Số phòng học trong trường em là:</span>
                                            <input type="text" id="ans-36-2-rooms" value="10" size="1" oninput="this.size = Math.max(1, this.value.length);" class="h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-black outline-none md:text-3xl" style="width: auto !important; min-width: 60px; padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                            <span>phòng</span>
                                        </div>

                                        <div class="flex items-center gap-2 flex-wrap md:flex-nowrap border-t border-slate-200 pt-4 font-bold">
                                            <span>Số tiền để mua gạch lát toàn bộ trường học là:</span>
                                            <input type="text" id="ans-36-2-total" size="1" oninput="this.size = Math.max(1, this.value.length);" class="h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-black outline-none md:text-3xl" placeholder="?" style="width: auto !important; min-width: 140px; padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                            <span>đồng</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Lời giải của Giáo viên -->
                            <div id="sol-36-2" class="hidden mt-4 p-6 bg-amber-50 rounded-2xl border border-amber-200 text-lg md:text-2xl font-medium text-slate-700">
                                <p class="font-bold text-amber-800 mb-2">✍️ Bài giải mẫu (Cập nhật theo số liệu thực tế em nhập):</p>
                                <div id="text-sol-36-2" class="leading-relaxed">Hãy hoàn thành và chấm điểm Bài 1 trước để có số liệu cho Bài 2!</div>
                            </div>

                            <div class="flex justify-end mt-6">
                                <button id="btn-check-36-2" onclick="window.check_36_2()" style="background: linear-gradient(135deg, #14b8a6, #0f766e);" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <script>
            // Hàm chuẩn hóa chuỗi để so sánh
            function normalizeVal(str) {
                if (!str) return '';
                return str.toString().replace(/\\s+/g, '').replace(/,/g, '').replace(/\\./g, '').trim().toLowerCase();
            }

            // Hàm ẩn/hiện bài giải của giáo viên
            window.toggleSolution = function(elementId) {
                var el = document.getElementById(elementId);
                if (el) {
                    if (el.classList.contains('hidden')) {
                        el.classList.remove('hidden');
                    } else {
                        el.classList.add('hidden');
                    }
                }
            };

            // Kiểm tra kết quả Bài 1
            window.check_36_1 = function() {
                var lenVal = document.getElementById('ans-36-1-length').value;
                var widVal = document.getElementById('ans-36-1-width').value;
                if (!lenVal || !widVal) {
                    if (window.showMathFeedback) window.showMathFeedback(false, "Vui lòng nhập chiều dài và chiều rộng đo được của phòng học!", "", "", "");
                    return;
                }
                var length = parseFloat(lenVal.replace(/,/g, '.'));
                var width = parseFloat(widVal.replace(/,/g, '.'));
                var area = Math.round(length * width * 10) / 10;
                var boxes = Math.ceil(area);
                var expectedMoney = boxes * 140000;

                var ansS = normalizeVal(document.getElementById('ans-36-1-s').value);
                var ansTileS = normalizeVal(document.getElementById('ans-36-1-tile-s').value);
                var ansTileSm = normalizeVal(document.getElementById('ans-36-1-tile-sm').value);
                var ansBoxS = normalizeVal(document.getElementById('ans-36-1-box-s').value);
                var ansBoxes = normalizeVal(document.getElementById('ans-36-1-boxes').value);
                var ansMoney = normalizeVal(document.getElementById('ans-36-1-money').value);

                var isCorrect = (
                    ansS === normalizeVal(area) && 
                    ansTileS === '2500' && 
                    (ansTileSm === '025' || ansTileSm === '0,25' || ansTileSm === '0.25') && 
                    ansBoxS === '1' && 
                    ansBoxes === normalizeVal(boxes) && 
                    ansMoney === normalizeVal(expectedMoney)
                );

                var rightAns = "Chiều dài: " + length + "m, Chiều rộng: " + width + "m => Diện tích: " + area + "m²; Số hộp: " + boxes + " hộp; Thành tiền: " + expectedMoney.toLocaleString('vi-VN') + " đồng";
                var studentAns = "Chiều dài: " + lenVal + "m, Chiều rộng: " + widVal + "m => Diện tích: " + ansS + "m²; Số hộp: " + ansBoxes + " hộp; Thành tiền: " + ansMoney + " đồng";

                // Cap nhat gia tri tinh toan
                window.calculatedClassMoney = expectedMoney;
                window.calculatedClassArea = area;

                var meta = window.MATH_BUILDER_METADATA.bai_tap[0];
                var solution = "Bài giải chi tiết dựa trên số liệu của em:<br>" +
                               "- Diện tích nền lớp học là: " + length + " &times; " + width + " = " + area + " m².<br>" +
                               "- Diện tích 1 viên gạch hình vuông là: 50 &times; 50 = 2 500 cm².<br>" +
                               "- Đổi: 2 500 cm² = 0,25 m².<br>" +
                               "- Diện tích một hộp gạch (4 viên) là: 0,25 &times; 4 = 1 m².<br>" +
                               "- Số hộp gạch cần mua là: " + area + " &divide; 1 = " + boxes + " hộp (làm tròn lên hộp nguyên nếu lẻ).<br>" +
                               "- Số tiền mua gạch để lát phòng học là: " + boxes + " &times; 140 000 = " + expectedMoney.toLocaleString('vi-VN') + " đồng.";

                document.getElementById('text-sol-36-1').innerHTML = solution;

                if (window.showMathFeedback) window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, solution);
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-36-1', 0, 1, isCorrect ? 1 : 0);
                }
            };

            // Kiểm tra kết quả Bài 2
            window.check_36_2 = function() {
                var length = parseFloat(document.getElementById('input-length').value) || 8;
                var width = parseFloat(document.getElementById('input-width').value) || 6;
                var rooms = parseInt(document.getElementById('input-rooms').value) || 10;
                var area = Math.round(length * width * 10) / 10;
                var boxes = Math.ceil(area);
                var classMoney = boxes * 140000;
                var expectedTotal = classMoney * rooms;

                var ansTotal = normalizeVal(document.getElementById('ans-36-2-total').value);

                var isCorrect = (ansTotal === normalizeVal(expectedTotal));
                var rightAns = expectedTotal.toLocaleString('vi-VN') + " đồng";
                var studentAns = ansTotal + " đồng";

                var meta = window.MATH_BUILDER_METADATA.bai_tap[1];
                if (window.showMathFeedback) {
                    window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, document.getElementById('text-sol-36-2').innerText || meta.solution);
                }
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-36-2', 0, 1, isCorrect ? 1 : 0);
                }
            };

            // Khởi chạy đồng bộ lần đầu
            setTimeout(window.updateRealData, 100);
        </script>
    `,
    "quizPool": [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "metadata": metadata
};

window.lesson36 = lesson36;
export default lesson36;
