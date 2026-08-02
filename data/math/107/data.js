// ===================================================================
// Tiết 107 - Bài 44: Luyện tập chung (tiết 2)
// DATA: Nội dung slide bài học và quiz pool
// ===================================================================

export const lesson107Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Slide 1: Ôn tập kiến thức trọng tâm -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-2 border-blue-50 shadow-xl bg-white/80 backdrop-blur-xl space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">🎯</div>
                                <h3 class="text-slate-800 uppercase italic text-xl font-black">Kiến thức trọng tâm Tiết 107</h3>
                            </div>

                            <div class="bg-amber-50 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border-2 border-amber-200 space-y-4 text-lg md:text-xl text-slate-700 leading-relaxed">
                                <p class="text-xl md:text-2xl font-extrabold text-amber-800">💡 Củng cố phương pháp giải toán:</p>
                                <ul class="list-disc pl-6 space-y-3 font-bold text-slate-800">
                                    <li><span class="text-blue-700">Tỉ số phần trăm của hai số:</span> Tìm thương của hai số rồi nhân thương đó với 100 và viết thêm kí hiệu <span class="text-rose-600">%</span>.</li>
                                    <li><span class="text-blue-700">Tìm giá trị phần trăm của một số:</span> Muốn tìm $a\%$ của số $A$, ta lấy $A \times a : 100$ (hoặc $A : 100 \times a$).</li>
                                    <li><span class="text-blue-700">Bài toán tỉ lệ phần trăm ứng dụng:</span> Tính phần trăm số lượng (táo bị sâu, học sinh...) hoặc tính lượng sản phẩm theo tỉ lệ phần trăm.</li>
                                    <li><span class="text-blue-700">Bài toán Tìm hai số khi biết hiệu và tỉ số (Hiệu - Tỉ):</span> Tìm hiệu số phần bằng nhau $\rightarrow$ Tìm giá trị 1 phần $\rightarrow$ Tìm số bé và số lớn.</li>
                                </ul>
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

                    <!-- Slide 1: Bài 1 - Tính tỉ số phần trăm của hai số -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 1. Tính tỉ số phần trăm của hai số</h3>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <p class="font-bold text-slate-800">
                                    Tính tỉ số phần trăm của hai số:
                                </p>

                                <div class="bg-white p-6 rounded-3xl border border-blue-150 space-y-6">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-bold text-slate-800 text-xl">
                                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>a) 49 và 70:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="107-1-a" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>%</span>
                                            </span>
                                        </div>
                                        <div class="flex items-center gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>b) 37,8 và 45:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="107-1-b" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>%</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-107-1" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-3 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>a) Tỉ số phần trăm của 49 và 70 là:<br>49 : 70 = 0,7 = 70%</p>
                                    <p>b) Tỉ số phần trăm của 37,8 và 45 là:<br>37,8 : 45 = 0,84 = 84%</p>
                                    <p class="font-bold text-blue-700 mt-1">Đáp số: a) 70%; b) 84%.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution107('1')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-107-1" onclick="window.check_107_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 - Tìm giá trị phần trăm của một số -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-amber-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                <h3 class="text-2xl md:text-3xl font-black text-amber-700 uppercase">Bài 2. Số ?</h3>
                            </div>

                            <div class="p-6 bg-amber-50/80 border-2 border-amber-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <p class="font-bold text-slate-800">
                                    Điền số thích hợp vào ô trống:
                                </p>

                                <div class="bg-white p-6 rounded-3xl border border-amber-150 space-y-4">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-slate-800 text-xl">
                                        <div class="flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>a) 10% của 60 là</span>
                                            <input id="107-2-a" type="text" class="w-24 h-11 text-center font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        </div>
                                        <div class="flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>b) 50% của 36 là</span>
                                            <input id="107-2-b" type="text" class="w-24 h-11 text-center font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        </div>
                                        <div class="flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>c) 2% của 250 là</span>
                                            <input id="107-2-c" type="text" class="w-24 h-11 text-center font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        </div>
                                        <div class="flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>d) 11% của 200 là</span>
                                            <input id="107-2-d" type="text" class="w-24 h-11 text-center font-black border-2 border-amber-300 rounded-xl outline-none focus:border-amber-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-107-2" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>a) 10% của 60 là: 60 × 10 : 100 = 6</p>
                                    <p>b) 50% của 36 là: 36 × 50 : 100 = 18</p>
                                    <p>c) 2% của 250 là: 250 × 2 : 100 = 5</p>
                                    <p>d) 11% của 200 là: 200 × 11 : 100 = 22</p>
                                    <p class="font-bold text-amber-700 mt-1">Đáp số: a) 6; b) 18; c) 5; d) 22.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution107('2')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-107-2" onclick="window.check_107_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 - Bài toán thu hoạch táo -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase">Bài 3. Bài toán thu hoạch táo</h3>
                            </div>

                            <div class="p-6 bg-emerald-50/80 border-2 border-emerald-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-5">
                                <p class="font-bold text-slate-800">
                                    Khi thu hoạch táo, người ta lấy ra một thùng táo <span class="text-emerald-700 font-extrabold">30 kg</span> thì thấy có <span class="text-emerald-700 font-extrabold">1,5 kg</span> táo bị sâu.
                                </p>

                                <div class="bg-white p-6 rounded-3xl border border-emerald-150 space-y-5 font-bold text-slate-800">
                                    <div class="space-y-2">
                                        <p class="font-extrabold text-emerald-800">a) Hỏi tỉ lệ táo bị sâu là bao nhiêu phần trăm?</p>
                                        <div class="flex items-center gap-2 pl-4 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>Tỉ lệ táo bị sâu =</span>
                                            <input id="107-3-a" type="text" class="w-28 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>%</span>
                                        </div>
                                    </div>

                                    <div class="space-y-2 border-t border-slate-100 pt-3">
                                        <p class="font-extrabold text-emerald-800">b) Với tỉ lệ táo bị sâu đó, nếu lấy ra thùng táo nặng 80 kg thì có bao nhiêu ki-lô-gam táo không bị sâu?</p>
                                        <div class="flex items-center gap-2 pl-4 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>Số ki-lô-gam táo không bị sâu =</span>
                                            <input id="107-3-b" type="text" class="w-32 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>kg</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-107-3" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>a) Tỉ lệ táo bị sâu là:<br>1,5 : 30 = 0,05 = 5%</p>
                                    <p>b) Trong thùng táo 80 kg, tỉ lệ táo không bị sâu là:<br>100% − 5% = 95%<br>Số ki-lô-gam táo không bị sâu là:<br>80 × 95% = 76 (kg)</p>
                                    <p class="font-normal text-slate-600 italic">(Hoặc tính số táo bị sâu: 80 × 5% = 4 kg. Số táo không bị sâu: 80 − 4 = 76 kg)</p>
                                    <p class="font-bold text-emerald-700 mt-1">Đáp số: a) 5%; b) 76 kg.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution107('3')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-107-3" onclick="window.check_107_3()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Bài 4 - Số kẹo của Mai và Mi -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-rose-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                                <h3 class="text-2xl md:text-3xl font-black text-rose-700 uppercase">Bài 4. Tính số kẹo của Mai và Mi</h3>
                            </div>

                            <div class="p-6 bg-rose-50/80 border-2 border-rose-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-5">
                                <div class="font-bold text-slate-800 space-y-2">
                                    <p>Mẹ cho Mai và Mi một số kẹo.</p>
                                    <p>Mai nói rằng: “Tỉ số của số kẹo em có và số kẹo chị có là <span class="inline-flex flex-col items-center align-middle mx-1 font-extrabold text-rose-700"><span class="border-b border-rose-700 px-1 leading-none pb-0.5">5</span><span class="leading-none pt-0.5">2</span></span>.”</p>
                                    <p>Mi trả lời: “Em chưa biết tỉ số là gì, em chỉ biết rằng số kẹo của em hơn của chị đúng 6 cái thôi!”.</p>
                                    <p class="text-rose-800 font-extrabold">Tính số kẹo của mỗi người.</p>
                                </div>

                                <div class="bg-white p-6 rounded-3xl border border-rose-150 space-y-4">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-slate-800 text-xl">
                                        <div class="flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>• Số kẹo của Mi (em):</span>
                                            <input id="107-4-mi" type="text" class="w-28 h-11 text-center font-black border-2 border-rose-300 rounded-xl outline-none focus:border-rose-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>cái kẹo</span>
                                        </div>
                                        <div class="flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>• Số kẹo của Mai (chị):</span>
                                            <input id="107-4-mai" type="text" class="w-28 h-11 text-center font-black border-2 border-rose-300 rounded-xl outline-none focus:border-rose-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>cái kẹo</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-107-4" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Tỉ số số kẹo của Mi (em) và Mai (chị) là 5/2. Số kẹo của Mi hơn Mai là 6 cái.</p>
                                    <p>Hiệu số phần bằng nhau là: 5 − 2 = 3 (phần)</p>
                                    <p>Số kẹo của Mi là: 6 : 3 × 5 = 10 (cái kẹo)</p>
                                    <p>Số kẹo của Mai là: 10 − 6 = 4 (cái kẹo)</p>
                                    <p class="font-bold text-rose-700 mt-1">Đáp số: Mi: 10 cái kẹo; Mai: 4 cái kẹo.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution107('4')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-107-4" onclick="window.check_107_4()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <script>
            window.toggleSolution107 = (id) => {
                const el = document.getElementById('solution-107-' + id);
                if (el) el.classList.toggle('hidden');
            };
        </script>
    `,

    "quizPool": [
        { "question": "Tỉ số phần trăm của hai số 49 và 70 là bao nhiêu?", "options": ["70%", "0,7%", "7%", "700%"], "answer": 0 },
        { "question": "Tỉ số phần trăm của hai số 37,8 và 45 là bao nhiêu?", "options": ["84%", "8,4%", "840%", "48%"], "answer": 0 },
        { "question": "10% của 60 là bao nhiêu?", "options": ["6", "60", "0,6", "12"], "answer": 0 },
        { "question": "50% của 36 là bao nhiêu?", "options": ["18", "15", "20", "9"], "answer": 0 },
        { "question": "2% của 250 là bao nhiêu?", "options": ["5", "50", "0,5", "25"], "answer": 0 },
        { "question": "11% của 200 là bao nhiêu?", "options": ["22", "11", "220", "2,2"], "answer": 0 },
        { "question": "Trong thùng táo 30 kg có 1,5 kg táo bị sâu. Tỉ lệ táo bị sâu là:", "options": ["5%", "0,5%", "50%", "15%"], "answer": 0 },
        { "question": "Với tỉ lệ táo bị sâu 5%, trong thùng 80 kg táo có bao nhiêu ki-lô-gam táo không bị sâu?", "options": ["76 kg", "4 kg", "70 kg", "75 kg"], "answer": 0 },
        { "question": "Với tỉ lệ táo bị sâu 5%, trong thùng 80 kg táo có bao nhiêu ki-lô-gam táo bị sâu?", "options": ["4 kg", "76 kg", "5 kg", "8 kg"], "answer": 0 },
        { "question": "Tỉ số kẹo của Mi và Mai là 5/2. Mi nhiều hơn Mai 6 cái kẹo. Mi có bao nhiêu cái kẹo?", "options": ["10 cái", "4 cái", "15 cái", "12 cái"], "answer": 0 },
        { "question": "Tỉ số kẹo của Mi và Mai là 5/2. Mi nhiều hơn Mai 6 cái kẹo. Mai có bao nhiêu cái kẹo?", "options": ["4 cái", "10 cái", "6 cái", "8 cái"], "answer": 0 },
        { "question": "Trong bài toán số kẹo của Mai và Mi (tỉ số 5/2, hiệu 6 cái), hiệu số phần bằng nhau là:", "options": ["3 phần", "7 phần", "5 phần", "2 phần"], "answer": 0 },
        { "question": "Muốn tính tỉ số phần trăm của 37,8 và 45, phép tính đúng là:", "options": ["37,8 : 45 × 100", "45 : 37,8 × 100", "37,8 × 45 : 100", "37,8 + 45 : 100"], "answer": 0 },
        { "question": "50% của một số chính là:", "options": ["Một nửa số đó (1/2)", "Một phần ba số đó (1/3)", "Gấp đôi số đó", "Một phần tư số đó (1/4)"], "answer": 0 },
        { "question": "Một xưởng sản xuất 500 sản phẩm, đã kiểm tra đạt 98%. Số sản phẩm không đạt là:", "options": ["10 sản phẩm", "490 sản phẩm", "20 sản phẩm", "2 sản phẩm"], "answer": 0 }
    ]
};
