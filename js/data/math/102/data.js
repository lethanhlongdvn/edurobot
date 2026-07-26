// ===================================================================
// Tiết 102 - Bài 41: Tìm giá trị phần trăm của một số (tiết 2 - Luyện tập)
// DATA: Nội dung slide luyện tập và quiz pool
// ===================================================================

export const lesson102Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Slide Khám phá / Ôn tập quy tắc -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-2 border-blue-50 shadow-xl bg-white/90 backdrop-blur-xl space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">📘</div>
                                <h3 class="text-blue-700 uppercase italic text-xl font-black">Ôn tập quy tắc: Tìm giá trị phần trăm của một số</h3>
                            </div>

                            <div class="bg-blue-50/90 p-6 md:p-8 rounded-[2rem] border-2 border-blue-100 space-y-4 text-lg md:text-xl text-slate-700 leading-relaxed">
                                <p class="font-extrabold text-blue-800 text-xl md:text-2xl">Muốn tìm <span class="text-pink-600">a%</span> của số <span class="text-blue-600">B</span>, ta có thể làm như sau:</p>
                                <div class="bg-white p-6 rounded-2xl border-2 border-blue-200 shadow-sm space-y-3 font-bold text-xl md:text-2xl text-slate-800">
                                    <p>• Cách 1: <span class="text-blue-700">B &times; a : 100</span></p>
                                    <p>• Cách 2: <span class="text-blue-700">B : 100 &times; a</span></p>
                                </div>

                                <div class="bg-pink-50 p-6 rounded-2xl border-2 border-pink-200 text-pink-900 font-bold text-lg md:text-xl shadow-sm">
                                    <p class="text-xl md:text-2xl font-black text-pink-700 mb-2">💡 Lưu ý khi giải bài toán thực tế:</p>
                                    <p>Đọc kỹ dữ kiện đề bài để xác định xem tỉ số phần trăm cho trước áp dụng cho đối tượng nào, từ đó tính đúng giá trị phần trăm cần tìm.</p>
                                </div>
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

                    <!-- Slide 1: Bài 1 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 1. Tính số gam đạm trong thực phẩm</h3>
                            </div>

                            <p class="text-lg md:text-2xl text-slate-700 font-bold leading-relaxed bg-blue-50/60 p-4 rounded-2xl border border-blue-100">
                                Tỉ lệ đạm trong thịt bò là 18% (18 g/100 g), thịt lợn nạc là 19% (19 g/100 g), cá chép là 17% (17 g/100 g). Em hãy tính số gam đạm có trong:
                            </p>

                            <div class="p-6 bg-slate-50 border-2 border-slate-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="space-y-4 font-bold text-slate-800">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="text-lg md:text-2xl">a) 250 g thịt bò:</span>
                                        <span class="inline-flex items-center flex-nowrap gap-1">
                                            <input id="102-1-1" type="text" class="w-28 md:w-32 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span class="text-lg md:text-2xl">g đạm</span>
                                        </span>
                                    </div>

                                    <div class="flex items-center gap-2 flex-wrap pt-2">
                                        <span class="text-lg md:text-2xl">b) 200 g cá chép:</span>
                                        <span class="inline-flex items-center flex-nowrap gap-1">
                                            <input id="102-1-2" type="text" class="w-28 md:w-32 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span class="text-lg md:text-2xl">g đạm</span>
                                        </span>
                                    </div>

                                    <div class="flex items-center gap-2 flex-wrap pt-2">
                                        <span class="text-lg md:text-2xl">c) 300 g thịt lợn nạc:</span>
                                        <span class="inline-flex items-center flex-nowrap gap-1">
                                            <input id="102-1-3" type="text" class="w-28 md:w-32 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span class="text-lg md:text-2xl">g đạm</span>
                                        </span>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-102-1" class="hidden p-6 bg-white border-2 border-dashed border-blue-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-3 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p class="font-bold text-blue-700">a) Số gam đạm trong 250 g thịt bò là:</p>
                                    <p class="pl-6 font-bold text-slate-900">250 &times; 18 : 100 = 45 (g)</p>
                                    <p class="font-bold text-blue-700">b) Số gam đạm trong 200 g cá chép là:</p>
                                    <p class="pl-6 font-bold text-slate-900">200 &times; 17 : 100 = 34 (g)</p>
                                    <p class="font-bold text-blue-700">c) Số gam đạm trong 300 g thịt lợn nạc là:</p>
                                    <p class="pl-6 font-bold text-slate-900">300 &times; 19 : 100 = 57 (g)</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution102('1')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-102-1" onclick="window.check_102_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase">Bài 2. Tính số người mặc áo xanh</h3>
                            </div>

                            <p class="text-lg md:text-2xl text-slate-700 font-bold leading-relaxed bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100">
                                Một đội đồng diễn thể dục gồm 300 người, trong số đó có 40% mặc áo đỏ, 25% mặc áo vàng, số còn lại mặc áo xanh. Hỏi trong đội đồng diễn đó có bao nhiêu người mặc áo xanh?
                            </p>

                            <div class="p-6 bg-slate-50 border-2 border-slate-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="flex items-center gap-2 flex-wrap font-bold text-slate-800">
                                    <span class="text-lg md:text-2xl">Số người mặc áo xanh trong đội đồng diễn là:</span>
                                    <span class="inline-flex items-center flex-nowrap gap-1">
                                        <input id="102-2-1" type="text" class="w-32 md:w-36 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span class="text-lg md:text-2xl">người</span>
                                    </span>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-102-2" class="hidden p-6 bg-white border-2 border-dashed border-emerald-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-3 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p class="font-bold text-emerald-700">Cách 1:</p>
                                    <p class="pl-4 font-bold text-slate-900">Tỉ số phần trăm số người mặc áo xanh là:</p>
                                    <p class="pl-8 font-bold text-slate-900">100% - 40% - 25% = 35%</p>
                                    <p class="pl-4 font-bold text-slate-900">Số người mặc áo xanh là:</p>
                                    <p class="pl-8 font-bold text-slate-900">300 &times; 35 : 100 = 105 (người)</p>
                                    <p class="font-bold text-emerald-700 mt-2">Cách 2:</p>
                                    <p class="pl-4 font-bold text-slate-900">Số người mặc áo đỏ là: 300 &times; 40 : 100 = 120 (người)</p>
                                    <p class="pl-4 font-bold text-slate-900">Số người mặc áo vàng là: 300 &times; 25 : 100 = 75 (người)</p>
                                    <p class="pl-4 font-bold text-slate-900">Số người mặc áo xanh là: 300 - (120 + 75) = 105 (người)</p>
                                    <p class="font-bold text-slate-900 mt-2">Đáp số: 105 người</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution102('2')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-102-2" onclick="window.check_102_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 3. Bài toán Lãi suất tiết kiệm</h3>
                            </div>

                            <p class="text-lg md:text-2xl text-slate-700 font-bold leading-relaxed bg-blue-50/60 p-4 rounded-2xl border border-blue-100">
                                Lãi suất tiết kiệm ở một ngân hàng là 7,4% một năm. Một người gửi tiết kiệm 35 000 000 đồng. Hỏi sau một năm:
                            </p>

                            <div class="p-6 bg-slate-50 border-2 border-slate-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="space-y-4 font-bold text-slate-800">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="text-lg md:text-2xl">a) Số tiền lãi là:</span>
                                        <span class="inline-flex items-center flex-nowrap gap-1">
                                            <input id="102-3-1" type="text" class="w-36 md:w-44 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span class="text-lg md:text-2xl">đồng</span>
                                        </span>
                                    </div>

                                    <div class="flex items-center gap-2 flex-wrap pt-2">
                                        <span class="text-lg md:text-2xl">b) Tổng số tiền gửi và tiền lãi là:</span>
                                        <span class="inline-flex items-center flex-nowrap gap-1">
                                            <input id="102-3-2" type="text" class="w-40 md:w-48 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span class="text-lg md:text-2xl">đồng</span>
                                        </span>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-102-3" class="hidden p-6 bg-white border-2 border-dashed border-blue-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-3 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p class="font-bold text-blue-700">a) Sau một năm, số tiền lãi là:</p>
                                    <p class="pl-6 font-bold text-slate-900">35 000 000 &times; 7,4 : 100 = 2 590 000 (đồng)</p>
                                    <p class="font-bold text-blue-700">b) Sau một năm, tổng số tiền gửi và tiền lãi là:</p>
                                    <p class="pl-6 font-bold text-slate-900">35 000 000 + 2 590 000 = 37 590 000 (đồng)</p>
                                    <p class="font-bold text-slate-900 mt-2">Đáp số: a) 2 590 000 đồng; b) 37 590 000 đồng</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution102('3')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-102-3" onclick="window.check_102_3()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Bài 4 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 4. Kế hoạch may đồng phục</h3>
                            </div>

                            <p class="text-lg md:text-2xl text-slate-700 font-bold leading-relaxed bg-blue-50/60 p-4 rounded-2xl border border-blue-100">
                                Theo kế hoạch, một tổ sản xuất dệt may phải may được 850 bộ quần áo đồng phục cho năm học mới. Sau một thời gian, người ta thấy số bộ quần áo may được bằng 70% số bộ quần áo chưa may. Hỏi lúc đó, tổ sản xuất đã may được bao nhiêu bộ quần áo đồng phục?
                            </p>

                            <div class="p-6 bg-slate-50 border-2 border-slate-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="flex items-center gap-2 flex-wrap font-bold text-slate-800">
                                    <span class="text-lg md:text-2xl">Số bộ quần áo đồng phục tổ sản xuất đã may được là:</span>
                                    <span class="inline-flex items-center flex-nowrap gap-1">
                                        <input id="102-4-1" type="text" class="w-32 md:w-36 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span class="text-lg md:text-2xl">bộ</span>
                                    </span>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-102-4" class="hidden p-6 bg-white border-2 border-dashed border-blue-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-3 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p class="font-bold text-blue-700">Coi số bộ quần áo chưa may là 100% (100 phần bằng nhau).</p>
                                    <p class="pl-4 font-bold text-slate-900">Tỉ số phần trăm của tổng số bộ quần áo so với số bộ chưa may là:</p>
                                    <p class="pl-8 font-bold text-slate-900">70% + 100% = 170%</p>
                                    <p class="pl-4 font-bold text-slate-900">Số bộ quần áo chưa may là:</p>
                                    <p class="pl-8 font-bold text-slate-900">850 : 170 &times; 100 = 500 (bộ)</p>
                                    <p class="pl-4 font-bold text-slate-900">Số bộ quần áo tổ đã may được là:</p>
                                    <p class="pl-8 font-bold text-slate-900">850 - 500 = 350 (bộ) [hoặc 500 &times; 70 : 100 = 350 (bộ)]</p>
                                    <p class="font-bold text-slate-900 mt-2">Đáp số: 350 bộ quần áo</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution102('4')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-102-4" onclick="window.check_102_4()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,

    "quizPool": [
        {
            "question": "Tính 20% của 150 kg:",
            "options": ["30 kg", "20 kg", "15 kg", "300 kg"],
            "answer": 0,
            "explanation": "20% của 150 kg là: 150 × 20 : 100 = 30 (kg)."
        },
        {
            "question": "Tính 15% của 400 m²:",
            "options": ["40 m²", "60 m²", "50 m²", "600 m²"],
            "answer": 1,
            "explanation": "15% của 400 m² là: 400 × 15 : 100 = 60 (m²)."
        },
        {
            "question": "Trong 100 g thịt bò có 18 g đạm. Số đạm trong 500 g thịt bò là bao nhiêu?",
            "options": ["90 g", "80 g", "100 g", "180 g"],
            "answer": 0,
            "explanation": "500 × 18 : 100 = 90 (g)."
        },
        {
            "question": "Một lớp học có 40 học sinh, trong đó có 60% học sinh nữ. Số học sinh nữ là:",
            "options": ["24 học sinh", "16 học sinh", "20 học sinh", "30 học sinh"],
            "answer": 0,
            "explanation": "Số học sinh nữ là: 40 × 60 : 100 = 24 (học sinh)."
        },
        {
            "question": "Gửi tiết kiệm 10 000 000 đồng với lãi suất 6%/năm. Số tiền lãi sau 1 năm là:",
            "options": ["600 000 đồng", "60 000 đồng", "6 000 000 đồng", "1 600 000 đồng"],
            "answer": 0,
            "explanation": "10 000 000 × 6 : 100 = 600 000 (đồng)."
        },
        {
            "question": "Một cửa hàng giảm giá 10% cho chiếc xe đạp giá 2 000 000 đồng. Số tiền được giảm là:",
            "options": ["200 000 đồng", "100 000 đồng", "20 000 đồng", "1 800 000 đồng"],
            "answer": 0,
            "explanation": "2 000 000 × 10 : 100 = 200 000 (đồng)."
        },
        {
            "question": "Tính 0,5% của 8 000 000 đồng:",
            "options": ["40 000 đồng", "400 000 đồng", "4 000 đồng", "80 000 đồng"],
            "answer": 0,
            "explanation": "8 000 000 × 0,5 : 100 = 40 000 (đồng)."
        },
        {
            "question": "Một đội công nhân phải sửa 500 m đường. Đội đã sửa được 80% kế hoạch. Đội đã sửa được bao nhiêu mét đường?",
            "options": ["400 m", "350 m", "450 m", "100 m"],
            "answer": 0,
            "explanation": "500 × 80 : 100 = 400 (m)."
        },
        {
            "question": "Trong 200 g cá chép có 34 g đạm. Tỉ lệ đạm trong cá chép là bao nhiêu phần trăm?",
            "options": ["17%", "34%", "18%", "20%"],
            "answer": 0,
            "explanation": "34 : 200 × 100% = 17%."
        },
        {
            "question": "Một trường có 800 học sinh. Số học sinh tham gia câu lạc bộ Toán là 25%. Số học sinh tham gia là:",
            "options": ["200 học sinh", "250 học sinh", "150 học sinh", "400 học sinh"],
            "answer": 0,
            "explanation": "800 × 25 : 100 = 200 (học sinh)."
        },
        {
            "question": "Tính 75% của 120 l nước:",
            "options": ["90 l", "80 l", "100 l", "75 l"],
            "answer": 0,
            "explanation": "120 × 75 : 100 = 90 (l)."
        },
        {
            "question": "Một cuốn sách giá 50 000 đồng, được giảm giá 20%. Giá sách sau khi giảm là:",
            "options": ["40 000 đồng", "10 000 đồng", "45 000 đồng", "30 000 đồng"],
            "answer": 0,
            "explanation": "Số tiền được giảm: 50 000 × 20 : 100 = 10 000 (đồng). Giá mới: 50 000 - 10 000 = 40 000 (đồng)."
        },
        {
            "question": "Tìm 12,5% của 80 kg:",
            "options": ["10 kg", "12 kg", "8 kg", "15 kg"],
            "answer": 0,
            "explanation": "80 × 12,5 : 100 = 10 (kg)."
        },
        {
            "question": "Số học sinh giỏi của một khối là 45 học sinh, chiếm 30% số học sinh cả khối. Cả khối có bao nhiêu học sinh?",
            "options": ["150 học sinh", "135 học sinh", "180 học sinh", "120 học sinh"],
            "answer": 0,
            "explanation": "Số học sinh cả khối là: 45 : 30 × 100 = 150 (học sinh)."
        },
        {
            "question": "Số đã may bằng 70% số chưa may. Tỉ số phần trăm số đã may so với tổng số bộ quần áo là:",
            "options": ["70/170 (khoảng 41,18%)", "70%", "30%", "100%"],
            "answer": 0,
            "explanation": "Coi chưa may là 100%, đã may là 70% -> Tổng số là 170%. Tỉ số là 70 / 170."
        }
    ]
};
