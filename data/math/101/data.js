// ===================================================================
// Tiết 101 - Bài 41: Tìm giá trị phần trăm của một số (tiết 1)
// DATA: Nội dung slide luyện tập và quiz pool
// ===================================================================

export const lesson101Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Slide 1: Khám phá kiến thức -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-2 border-blue-50 shadow-xl bg-white/90 backdrop-blur-xl space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">🔍</div>
                                <h3 class="text-blue-700 uppercase italic text-xl font-black">Khám phá: Tìm giá trị phần trăm của một số</h3>
                            </div>

                            <div class="flex justify-center my-4">
                                <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage101('./assets/images/toan/toan_tap_2/101/kp.png', 'Khám phá tìm giá trị phần trăm của một số')" src="./assets/images/toan/toan_tap_2/101/kp.png" alt="Khám phá tìm giá trị phần trăm của một số" class="w-full max-w-[700px] h-auto object-contain rounded-3xl border-4 border-blue-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage101('./assets/images/toan/toan_tap_2/101/kp.png', 'Khám phá tìm giá trị phần trăm của một số')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>
                            </div>

                            <div class="bg-blue-50/90 p-6 md:p-8 rounded-[2rem] border-2 border-blue-100 space-y-4 text-lg md:text-xl text-slate-700 leading-relaxed">
                                <p class="font-extrabold text-blue-800 text-xl md:text-2xl">Ta có thể tìm 60% của 300 tấn như sau:</p>
                                <p class="font-bold text-slate-800 text-xl md:text-2xl pl-4">
                                    300 &times; <span class="inline-flex flex-col items-center align-middle mx-1 leading-none">
                                        <span class="border-b border-slate-900 px-1 leading-none pb-0.5">60</span>
                                        <span class="leading-none pt-0.5">100</span>
                                    </span>
                                    = (300 &times; 60) : 100 = 180 (tấn) hoặc (300 : 100) &times; 60 = 180 (tấn).
                                </p>

                                <div class="bg-pink-50 p-6 rounded-2xl border-2 border-pink-200 text-pink-900 font-bold text-lg md:text-xl shadow-sm">
                                    <p class="text-xl md:text-2xl font-black text-pink-700 mb-2">💡 Ghi nhớ:</p>
                                    <p>Muốn tìm 60% của 300 ta có thể lấy 300 nhân với 60 rồi chia cho 100 hoặc lấy 300 chia cho 100 rồi nhân với 60.</p>
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

                    <!-- Slide 1: Bài 1 - Tìm giá trị phần trăm -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 1. Tìm giá trị phần trăm</h3>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="space-y-4 font-bold text-slate-800">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="text-lg md:text-2xl">a) Tìm 70% của 120 m²:</span>
                                        <span class="inline-flex items-center flex-nowrap gap-1">
                                            <input id="101-1-1" type="text" class="w-32 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span class="text-lg md:text-2xl">m²</span>
                                        </span>
                                    </div>

                                    <div class="flex items-center gap-2 flex-wrap pt-2">
                                        <span class="text-lg md:text-2xl">b) Tìm 24,5% của 2 kg:</span>
                                        <span class="inline-flex items-center flex-nowrap gap-1">
                                            <input id="101-1-2" type="text" class="w-32 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span class="text-lg md:text-2xl">kg</span>
                                        </span>
                                    </div>

                                    <div class="flex items-center gap-2 flex-wrap pt-2">
                                        <span class="text-lg md:text-2xl">c) Tìm 0,8% của 15 000 000 đồng:</span>
                                        <span class="inline-flex items-center flex-nowrap gap-1">
                                            <input id="101-1-3" type="text" class="w-36 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span class="text-lg md:text-2xl">đồng</span>
                                        </span>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-101-1" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-3 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p class="font-bold text-blue-700">a) 70% của 120 m² là:</p>
                                    <p class="pl-6 font-bold text-slate-900">120 &times; 70 : 100 = 84 (m²)</p>
                                    <p class="font-bold text-blue-700">b) 24,5% của 2 kg là:</p>
                                    <p class="pl-6 font-bold text-slate-900">2 &times; 24,5 : 100 = 0,49 (kg)</p>
                                    <p class="font-bold text-blue-700">c) 0,8% của 15 000 000 đồng là:</p>
                                    <p class="pl-6 font-bold text-slate-900">15 000 000 &times; 0,8 : 100 = 120 000 (đồng)</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution101('1')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-101-1" onclick="window.check_101_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 - Giảm giá siêu thị -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase">Bài 2. Mua sắm ngày Quốc tế Thiếu nhi</h3>
                            </div>

                            <div class="p-6 bg-emerald-50/80 border-2 border-emerald-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-5">
                                <p class="font-bold text-slate-800 text-xl md:text-2xl">
                                    Mẹ cùng Mai và Mi vào một siêu thị bán lẻ. Đến gian hàng thiếu nhi thấy có bảng ghi: "Nhân ngày Quốc tế Thiếu nhi 1 – 6, giảm giá 15% tất cả các mặt hàng.". Mẹ đã mua cho Mai một ba lô học sinh có ghi giá 250 000 đồng và mua cho Mi một con thú bông rất đẹp có ghi giá 120 000 đồng. Em hãy tính xem ba lô và con thú bông, mỗi loại được giảm giá bao nhiêu tiền.
                                </p>

                                <div class="flex justify-center my-3">
                                    <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage101('./assets/images/toan/toan_tap_2/101/2.png', 'Siêu thị bán lẻ giảm giá 15%')" src="./assets/images/toan/toan_tap_2/101/2.png" alt="Siêu thị bán lẻ giảm giá 15%" class="w-full max-w-[500px] h-auto object-contain rounded-2xl border-4 border-emerald-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage101('./assets/images/toan/toan_tap_2/101/2.png', 'Siêu thị bán lẻ giảm giá 15%')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>
                                </div>

                                <div class="bg-white p-5 rounded-2xl border border-emerald-100 space-y-4">
                                    <div class="space-y-2">
                                        <p class="font-extrabold text-emerald-800 text-lg md:text-xl">• Ba lô học sinh được giảm giá số tiền là:</p>
                                        <div class="flex items-center gap-2 flex-wrap pl-4 font-bold">
                                            <span>Số tiền giảm:</span>
                                            <input id="101-2-1" type="text" class="w-36 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>đồng</span>
                                        </div>
                                    </div>
                                    <div class="space-y-2 border-t border-slate-100 pt-3">
                                        <p class="font-extrabold text-emerald-800 text-lg md:text-xl">• Con thú bông được giảm giá số tiền là:</p>
                                        <div class="flex items-center gap-2 flex-wrap pl-4 font-bold">
                                            <span>Số tiền giảm:</span>
                                            <input id="101-2-2" type="text" class="w-36 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span>đồng</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-101-2" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p class="font-bold text-emerald-700">Ba lô học sinh được giảm giá số tiền là:</p>
                                    <p class="pl-6 font-bold text-slate-900">250 000 &times; 15 : 100 = 37 500 (đồng)</p>
                                    <p class="font-bold text-emerald-700 mt-2">Con thú bông được giảm giá số tiền là:</p>
                                    <p class="pl-6 font-bold text-slate-900">120 000 &times; 15 : 100 = 18 000 (đồng)</p>
                                    <p class="font-bold text-emerald-700 mt-2">Đáp số: Ba lô: 37 500 đồng; Thú bông: 18 000 đồng.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution101('2')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-101-2" onclick="window.check_101_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <script>
            window.toggleSolution101 = (id) => {
                const el = document.getElementById('solution-101-' + id);
                if (el) el.classList.toggle('hidden');
            };
        </script>
    `,

    "quizPool": [
        { "question": "Muốn tìm 60% của 300, cách làm nào sau đây đúng?", "options": ["300 × 60 : 100", "300 × 100 : 60", "300 + 60 : 100", "300 : 60 × 100"], "answer": 0 },
        { "question": "Tìm 70% của 120 m².", "options": ["84 m²", "70 m²", "840 m²", "8,4 m²"], "answer": 0 },
        { "question": "Tìm 24,5% của 2 kg.", "options": ["0,49 kg", "4,9 kg", "49 kg", "0,049 kg"], "answer": 0 },
        { "question": "Tìm 0,8% của 15 000 000 đồng.", "options": ["120 000 đồng", "1 200 000 đồng", "12 000 đồng", "120 đồng"], "answer": 0 },
        { "question": "Một chiếc ba lô có giá 250 000 đồng, được giảm giá 15%. Số tiền được giảm là:", "options": ["37 500 đồng", "25 000 đồng", "35 000 đồng", "370 000 đồng"], "answer": 0 },
        { "question": "Một con thú bông có giá 120 000 đồng, được giảm giá 15%. Số tiền được giảm là:", "options": ["18 000 đồng", "15 000 đồng", "12 000 đồng", "20 000 đồng"], "answer": 0 },
        { "question": "Tìm 50% của 80 kg.", "options": ["40 kg", "50 kg", "30 kg", "20 kg"], "answer": 0 },
        { "question": "Tìm 25% của 200 m.", "options": ["50 m", "25 m", "100 m", "40 m"], "answer": 0 },
        { "question": "Tìm 10% của 1 500 000 đồng.", "options": ["150 000 đồng", "15 000 đồng", "1 500 đồng", "150 đồng"], "answer": 0 },
        { "question": "Tìm 75% của 400 lít.", "options": ["300 lít", "250 lít", "350 lít", "200 lít"], "answer": 0 },
        { "question": "Một cuốn sách giá 80 000 đồng được giảm giá 20%. Số tiền được giảm là:", "options": ["16 000 đồng", "20 000 đồng", "8 000 đồng", "12 000 đồng"], "answer": 0 },
        { "question": "Tìm 12% của 500 kg.", "options": ["60 kg", "50 kg", "12 kg", "600 kg"], "answer": 0 },
        { "question": "Tìm 30% của 90 m².", "options": ["27 m²", "30 m²", "2.7 m²", "270 m²"], "answer": 0 },
        { "question": "Tìm 5% của 2 000 000 đồng.", "options": ["100 000 đồng", "10 000 đồng", "50 000 đồng", "200 000 đồng"], "answer": 0 },
        { "question": "Tìm 40% của 150 học sinh.", "options": ["60 học sinh", "40 học sinh", "50 học sinh", "75 học sinh"], "answer": 0 }
    ]
};
