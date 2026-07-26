// ===================================================================
// Tiết 105 - Bài 43: Thực hành và trải nghiệm sử dụng máy tính cầm tay
// DATA: Nội dung slide bài học và quiz pool
// ===================================================================

export const lesson105Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Slide 1: Đề bài Hoạt động thực hành -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-amber-500 space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-amber-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">🎪</div>
                                <h3 class="text-amber-700 uppercase italic text-xl font-black">Bài 43: Thực hành và trải nghiệm sử dụng máy tính cầm tay</h3>
                            </div>

                            <div class="p-6 bg-amber-50/80 border-2 border-amber-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-4">
                                <div class="bg-white p-6 rounded-3xl border border-amber-150 space-y-3">
                                    <p class="font-extrabold text-amber-900 text-2xl">Bán vòng trang sức gây quỹ từ thiện:</p>
                                    <p class="font-bold text-slate-800 text-xl leading-relaxed">
                                        Trong hội chợ tại trường, lớp mình đã bán <span class="text-amber-700 font-extrabold">100 chiếc vòng trang sức</span>. Số tiền thu được sau khi bán vòng được lớp mình gửi tới quỹ hỗ trợ trẻ em nghèo ở vùng cao. Khi bán hàng, chúng mình đã sử dụng máy tính cầm tay để tính tiền nhanh chóng và chính xác. Các bạn hãy sử dụng máy tính cầm tay để tính số tiền trong mỗi trường hợp dưới đây.
                                    </p>
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

                    <!-- Slide 1: Bài 1 - Cô Hường mua vòng -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 1. Cô Hường mua vòng</h3>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-5">
                                <p class="font-bold text-slate-800">
                                    Cô Hường đã mua <span class="text-blue-700 font-extrabold">7 chiếc vòng</span>, mỗi chiếc có giá <span class="text-blue-700 font-extrabold">25 000 đồng</span>. Hỏi cô Hường cần trả chúng mình bao nhiêu tiền?
                                </p>

                                <div class="bg-white p-6 rounded-3xl border border-blue-150 space-y-4">
                                    <div class="flex items-center gap-3 flex-wrap font-bold text-slate-800 text-xl">
                                        <span>Số tiền cô Hường cần trả là:</span>
                                        <input id="105-1-1" type="text" class="w-44 h-12 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>đồng</span>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-105-1" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Số tiền cô Hường cần trả chúng mình là:</p>
                                    <p class="pl-6 font-bold text-slate-900">25 000 × 7 = 175 000 (đồng)</p>
                                    <p class="font-bold text-blue-700 mt-1">Đáp số: 175 000 đồng.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution105('1')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-105-1" onclick="window.check_105_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 - Thầy Hải mua vòng (Giảm giá 20%) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 2. Thầy Hải mua vòng</h3>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-5">
                                <p class="font-bold text-slate-800">
                                    Chúng mình áp dụng chương trình khuyến mại giảm giá <span class="text-blue-700 font-extrabold">20%</span> cho bất kì ai mua nhiều hơn <span class="text-blue-700 font-extrabold">10 chiếc vòng</span>. Thầy Hải đã mua <span class="text-blue-700 font-extrabold">18 chiếc vòng</span>, mỗi chiếc có giá <span class="text-blue-700 font-extrabold">25 000 đồng</span>. Hỏi thầy Hải cần trả chúng mình bao nhiêu tiền?
                                </p>

                                <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage105('./assets/images/toan/toan_tap_2/105/2.png', 'Thầy Hải mua vòng')" src="./assets/images/toan/toan_tap_2/105/2.png" alt="Thầy Hải mua vòng" class="w-full max-w-[500px] h-auto object-contain rounded-2xl border-4 border-blue-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage105('./assets/images/toan/toan_tap_2/105/2.png', 'Thầy Hải mua vòng')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                                <div class="bg-white p-6 rounded-3xl border border-violet-150 space-y-4">
                                    <div class="flex items-center gap-3 flex-wrap font-bold text-slate-800 text-xl">
                                        <span>Số tiền thầy Hải cần trả là:</span>
                                        <input id="105-2-1" type="text" class="w-44 h-12 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>đồng</span>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-105-2" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Giá tiền 18 chiếc vòng khi chưa giảm giá là:</p>
                                    <p class="pl-6 font-bold text-slate-900">25 000 × 18 = 450 000 (đồng)</p>
                                    <p>Số tiền thầy Hải được giảm giá là:</p>
                                    <p class="pl-6 font-bold text-slate-900">450 000 × 20% = 90 000 (đồng)</p>
                                    <p>Số tiền thầy Hải cần trả chúng mình là:</p>
                                    <p class="pl-6 font-bold text-slate-900">450 000 − 90 000 = 360 000 (đồng)</p>
                                    <p class="font-bold text-blue-700 mt-1">Đáp số: 360 000 đồng.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution105('2')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-105-2" onclick="window.check_105_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 - Bán số vòng còn lại -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase">Bài 3. Doanh nghiệp mua vòng còn lại</h3>
                            </div>

                            <div class="p-6 bg-emerald-50/80 border-2 border-emerald-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-5">
                                <p class="font-bold text-slate-800">
                                    Những chiếc vòng còn lại của chúng mình được một doanh nghiệp địa phương mua với giá tổng cộng là <span class="text-emerald-700 font-extrabold">3 000 000 đồng</span>. Hỏi mỗi chiếc vòng đó có giá bao nhiêu tiền?
                                </p>

                                <div class="bg-white p-6 rounded-3xl border border-emerald-150 space-y-4">
                                    <div class="flex items-center gap-3 flex-wrap font-bold text-slate-800 text-xl">
                                        <span>Giá mỗi chiếc vòng còn lại là:</span>
                                        <input id="105-3-1" type="text" class="w-44 h-12 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>đồng</span>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-105-3" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Tổng số chiếc vòng đã bán cho cô Hường và thầy Hải là:</p>
                                    <p class="pl-6 font-bold text-slate-900">7 + 18 = 25 (chiếc vòng)</p>
                                    <p>Số chiếc vòng còn lại là:</p>
                                    <p class="pl-6 font-bold text-slate-900">100 − 25 = 75 (chiếc vòng)</p>
                                    <p>Giá tiền mỗi chiếc vòng còn lại đó là:</p>
                                    <p class="pl-6 font-bold text-slate-900">3 000 000 : 75 = 40 000 (đồng)</p>
                                    <p class="font-bold text-emerald-700 mt-1">Đáp số: 40 000 đồng.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution105('3')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-105-3" onclick="window.check_105_3()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Bài 4 - BGH ủng hộ từ thiện -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-orange-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                                <h3 class="text-2xl md:text-3xl font-black text-orange-700 uppercase">Bài 4. Tổng số tiền quyên góp được</h3>
                            </div>

                            <div class="p-6 bg-orange-50/80 border-2 border-orange-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-5">
                                <p class="font-bold text-slate-800">
                                    Ban Giám hiệu ủng hộ dự định quyên góp từ thiện của lớp mình bằng cách góp thêm vào quỹ một số tiền bằng <span class="text-orange-700 font-extrabold">20% doanh thu</span> bán vòng trang sức của lớp. Tính số tiền mà lớp mình đã quyên góp được cho quỹ hỗ trợ trẻ em nghèo ở vùng cao.
                                </p>

                                <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage105('./assets/images/toan/toan_tap_2/105/4.png', 'Trao quà từ thiện cho các em vùng cao')" src="./assets/images/toan/toan_tap_2/105/4.png" alt="Trao quà từ thiện cho các em vùng cao" class="w-full max-w-[500px] h-auto object-contain rounded-2xl border-4 border-orange-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage105('./assets/images/toan/toan_tap_2/105/4.png', 'Trao quà từ thiện cho các em vùng cao')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                                <div class="bg-white p-6 rounded-3xl border border-orange-150 space-y-4">
                                    <div class="flex items-center gap-3 flex-wrap font-bold text-slate-800 text-xl">
                                        <span>Tổng số tiền lớp mình quyên góp được là:</span>
                                        <input id="105-4-1" type="text" class="w-48 h-12 text-center font-black border-2 border-orange-300 rounded-xl outline-none focus:border-orange-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>đồng</span>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-105-4" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p>Tổng số tiền thu được từ việc bán 100 chiếc vòng trang sức là:</p>
                                    <p class="pl-6 font-bold text-slate-900">175 000 + 360 000 + 3 000 000 = 3 535 000 (đồng)</p>
                                    <p>Số tiền Ban Giám hiệu góp thêm vào quỹ từ thiện là:</p>
                                    <p class="pl-6 font-bold text-slate-900">3 535 000 × 20% = 707 000 (đồng)</p>
                                    <p>Tổng số tiền mà lớp mình đã quyên góp được cho quỹ là:</p>
                                    <p class="pl-6 font-bold text-slate-900">3 535 000 + 707 000 = 4 242 000 (đồng)</p>
                                    <p class="font-bold text-orange-700 mt-1">Đáp số: 4 242 000 đồng.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution105('4')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-105-4" onclick="window.check_105_4()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <script>
            window.toggleSolution105 = (id) => {
                const el = document.getElementById('solution-105-' + id);
                if (el) el.classList.toggle('hidden');
            };
        </script>
    `,

    "quizPool": [
        { "question": "Cô Hường mua 7 chiếc vòng giá 25 000 đồng/chiếc. Số tiền cô cần trả là:", "options": ["175 000 đồng", "150 000 đồng", "140 000 đồng", "175 000%"], "answer": 0 },
        { "question": "Thầy Hải mua 18 chiếc vòng giá 25 000 đồng/chiếc và được giảm 20%. Số tiền được giảm là:", "options": ["90 000 đồng", "450 000 đồng", "360 000 đồng", "180 000 đồng"], "answer": 0 },
        { "question": "Thầy Hải cần trả bao nhiêu tiền sau khi được giảm 20% cho 18 chiếc vòng?", "options": ["360 000 đồng", "450 000 đồng", "90 000 đồng", "350 000 đồng"], "answer": 0 },
        { "question": "Lớp học đã bán tổng cộng bao nhiêu chiếc vòng cho cô Hường và thầy Hải?", "options": ["25 chiếc", "20 chiếc", "30 chiếc", "18 chiếc"], "answer": 0 },
        { "question": "Số chiếc vòng còn lại chưa bán sau khi bán cho cô Hường và thầy Hải là:", "options": ["75 chiếc", "80 chiếc", "70 chiếc", "65 chiếc"], "answer": 0 },
        { "question": "75 chiếc vòng còn lại được doanh nghiệp mua với tổng giá 3 000 000 đồng. Giá mỗi chiếc vòng là:", "options": ["40 000 đồng", "30 000 đồng", "50 000 đồng", "25 000 đồng"], "answer": 0 },
        { "question": "Tổng doanh thu bán 100 chiếc vòng trang sức của lớp là bao nhiêu?", "options": ["3 535 000 đồng", "3 000 000 đồng", "3 450 000 đồng", "4 000 000 đồng"], "answer": 0 },
        { "question": "Ban Giám hiệu góp thêm 20% vào quỹ từ thiện từ doanh thu 3 535 000 đồng. Số tiền BGH góp là:", "options": ["707 000 đồng", "700 000 đồng", "710 000 đồng", "353 500 đồng"], "answer": 0 },
        { "question": "Tổng số tiền mà lớp quyên góp được cho trẻ em nghèo vùng cao là:", "options": ["4 242 000 đồng", "3 535 000 đồng", "4 000 000 đồng", "4 500 000 đồng"], "answer": 0 },
        { "question": "Để tính 25 000 × 7 bằng máy tính cầm tay, ấn lần lượt phím nào?", "options": ["2 5 0 0 0 × 7 =", "2 5 0 0 0 ÷ 7 =", "2 5 × 7 =", "7 × 2 5 ="], "answer": 0 },
        { "question": "Để tính 20% của 450 000 đồng bằng máy tính cầm tay, ấn lần lượt:", "options": ["4 5 0 0 0 0 × 2 0 % =", "4 5 0 0 0 0 ÷ 2 0 % =", "2 0 × 4 5 0 0 0 0 =", "4 5 0 0 0 0 - 2 0 % ="], "answer": 0 },
        { "question": "3 000 000 : 75 bằng bao nhiêu?", "options": ["40 000", "400 000", "4 000", "400"], "answer": 0 },
        { "question": "Hoạt động bán vòng trang sức của lớp nhằm mục đích gì?", "options": ["Gửi tới quỹ hỗ trợ trẻ em nghèo ở vùng cao", "Tích lũy quỹ lớp mua dụng cụ học tập", "Đi dã ngoại", "Mua máy tính cầm tay"], "answer": 0 },
        { "question": "Giá tiền 1 chiếc vòng bán lẻ ban đầu cho cô Hường là:", "options": ["25 000 đồng", "40 000 đồng", "20 000 đồng", "30 000 đồng"], "answer": 0 },
        { "question": "Doanh nghiệp mua 75 chiếc vòng cuối cùng với giá cao hơn giá ban đầu bao nhiêu?", "options": ["15 000 đồng/chiếc", "10 000 đồng/chiếc", "5 000 đồng/chiếc", "20 000 đồng/chiếc"], "answer": 0 }
    ]
};
