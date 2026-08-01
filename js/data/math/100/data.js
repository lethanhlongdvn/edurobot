// ===================================================================
// Tiết 100 - Bài 40: Tìm tỉ số phần trăm của hai số (tiết 2 - Luyện tập)
// DATA: Nội dung slide luyện tập và quiz pool
// ===================================================================

export const lesson100Data = {
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Slide 1: Ôn lại quy tắc -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] border-2 border-blue-50 shadow-xl bg-white/80 backdrop-blur-xl space-y-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">📐</div>
                                <h3 class="text-slate-800 uppercase italic text-xl font-black">Ôn lại: Tìm tỉ số phần trăm</h3>
                            </div>

                            <div class="bg-amber-50 p-8 rounded-[2.5rem] border-2 border-amber-200 space-y-4 text-2xl md:text-3xl text-slate-800 leading-relaxed">
                                <p class="text-3xl font-black text-amber-800">💡 Quy tắc ghi nhớ:</p>
                                <p class="font-extrabold text-slate-900">Muốn tìm tỉ số phần trăm của hai số ta làm như sau:</p>
                                <ul class="list-disc pl-6 space-y-3 font-extrabold text-slate-800">
                                    <li><span class="text-blue-700 font-black">Bước 1:</span> Tìm thương của hai số.</li>
                                    <li><span class="text-blue-700 font-black">Bước 2:</span> Nhân thương đó với 100 và viết thêm kí hiệu % vào bên phải tích tìm được.</li>
                                </ul>
                                <div class="bg-white p-6 rounded-2xl border border-amber-150 space-y-2">
                                    <p class="font-extrabold text-blue-700 text-2xl">Ví dụ:</p>
                                    <p class="font-bold pl-4 flex items-center">
                                        <span class="inline-flex flex-col items-center align-middle mx-1 leading-none">
                                            <span class="border-b border-slate-900 px-1 leading-none pb-0.5">50</span>
                                            <span class="leading-none pt-0.5">13</span>
                                        </span>
                                        <span class="mx-1">= 3,8461...</span>
                                    </p>
                                    <p class="font-bold pl-4">3,8461... &times; 100 = 384,61...</p>
                                    <p class="font-bold pl-4">Tỉ số phần trăm của 50 và 13 là 384,61%</p>
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

                    <!-- Slide 1: Bài 1 - Tỉ số phần trăm và trắc nghiệm -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 1. Tìm tỉ số phần trăm</h3>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-6">
                                <div class="bg-white p-6 rounded-3xl border border-blue-100 space-y-4">
                                    <p class="font-extrabold text-blue-800">a) Tìm tỉ số phần trăm của hai số (theo mẫu):</p>
                                    <p class="pl-4 font-bold text-slate-500">Mẫu: 50 : 13 = 3,8461... = 384,61%</p>

                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 font-bold text-slate-800">
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <span>• Tỉ số phần trăm của 27 và 41 là:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="100-1-1" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>%</span>
                                            </span>
                                        </div>
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <span>• Tỉ số phần trăm của 71 và 33 là:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="100-1-2" type="text" class="w-32 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>%</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white p-6 rounded-3xl border border-blue-100 space-y-4">
                                    <p class="font-extrabold text-blue-800">b) Chọn câu trả lời đúng.</p>
                                    <p class="font-bold text-slate-700">Tỉ số phần trăm của 41 và 73 là:</p>
                                    <div class="grid grid-cols-2 gap-3 pt-1">
                                        <label class="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-2xl cursor-pointer hover:border-blue-300 transition-colors font-bold">
                                            <input type="radio" name="100-1b" value="A" id="100-1b-A" class="w-5 h-5 accent-blue-600">
                                            <span>A. 0,5616%</span>
                                        </label>
                                        <label class="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-2xl cursor-pointer hover:border-blue-300 transition-colors font-bold">
                                            <input type="radio" name="100-1b" value="B" id="100-1b-B" class="w-5 h-5 accent-blue-600">
                                            <span>B. 5,616%</span>
                                        </label>
                                        <label class="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-2xl cursor-pointer hover:border-blue-300 transition-colors font-bold">
                                            <input type="radio" name="100-1b" value="C" id="100-1b-C" class="w-5 h-5 accent-blue-600">
                                            <span>C. 56,16%</span>
                                        </label>
                                        <label class="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-2xl cursor-pointer hover:border-blue-300 transition-colors font-bold">
                                            <input type="radio" name="100-1b" value="D" id="100-1b-D" class="w-5 h-5 accent-blue-600">
                                            <span>D. 561,6%</span>
                                        </label>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-100-1" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-3 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p class="font-bold text-blue-700 border-b border-slate-200 pb-1">Câu a:</p>
                                    <p>Tỉ số phần trăm của 27 và 41 là:</p>
                                    <p class="pl-6 font-bold text-slate-900">27 : 41 = 0,6585... = 65,85%</p>
                                    <p>Tỉ số phần trăm của 71 và 33 là:</p>
                                    <p class="pl-6 font-bold text-slate-900">71 : 33 = 2,1515... = 215,15%</p>
                                    <p class="font-bold text-blue-700 border-b border-slate-200 pb-1 mt-2">Câu b:</p>
                                    <p>Tỉ số phần trăm của 41 và 73 là:</p>
                                    <p class="pl-6 font-bold text-slate-900">41 : 73 = 0,5616... = 56,16%</p>
                                    <p class="font-bold text-blue-700 mt-2">Đáp án đúng: C. 56,16%</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution100('1')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-100-1" onclick="window.check_100_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 - Tính với tỉ số phần trăm -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                                <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase">Bài 2. Tính (theo mẫu)</h3>
                            </div>

                            <div class="p-6 bg-blue-50/80 border-2 border-blue-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-5">
                                <div class="bg-white p-5 rounded-2xl border border-blue-100 text-slate-500 font-bold text-lg space-y-1">
                                    <p class="text-blue-700 font-extrabold mb-1">Mẫu:</p>
                                    <div class="grid grid-cols-2 gap-2">
                                        <p>18% + 12% = <span class="text-slate-700">30%</span></p>
                                        <p>65,2% − 18,5% = <span class="text-slate-700">46,7%</span></p>
                                        <p>14,8% &times; 4 = <span class="text-slate-700">59,2%</span></p>
                                        <p>28,76% : 4 = <span class="text-slate-700">7,19%</span></p>
                                    </div>
                                </div>

                                <div class="space-y-4 font-bold text-slate-800">
                                     <p class="text-lg text-blue-700">a) Tính:</p>
                                     <div class="grid grid-cols-1 gap-4 pl-4">
                                         <div class="flex items-center gap-2">
                                             <span>57% + 43,5% =</span>
                                             <span class="inline-flex items-center flex-nowrap gap-1">
                                                 <input id="100-2-1" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                 <span>%</span>
                                             </span>
                                         </div>
                                         <div class="flex items-center gap-2">
                                             <span>100,5% − 57% =</span>
                                             <span class="inline-flex items-center flex-nowrap gap-1">
                                                 <input id="100-2-2" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                 <span>%</span>
                                             </span>
                                         </div>
                                         <div class="flex items-center gap-2">
                                             <span>100,5% − 43,5% =</span>
                                             <span class="inline-flex items-center flex-nowrap gap-1">
                                                 <input id="100-2-3" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                 <span>%</span>
                                             </span>
                                         </div>
                                     </div>

                                     <p class="text-lg text-blue-700 pt-2">b) Tính:</p>
                                     <div class="grid grid-cols-1 gap-4 pl-4">
                                         <div class="flex items-center gap-2">
                                             <span>12% × 6 =</span>
                                             <span class="inline-flex items-center flex-nowrap gap-1">
                                                 <input id="100-2-4" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                 <span>%</span>
                                             </span>
                                         </div>
                                         <div class="flex items-center gap-2">
                                             <span>72% : 6 =</span>
                                             <span class="inline-flex items-center flex-nowrap gap-1">
                                                 <input id="100-2-5" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                 <span>%</span>
                                             </span>
                                         </div>
                                         <div class="flex items-center gap-2">
                                             <span>72% : 12 =</span>
                                             <span class="inline-flex items-center flex-nowrap gap-1">
                                                 <input id="100-2-6" type="text" class="w-28 h-11 text-center font-black border-2 border-blue-300 rounded-xl outline-none focus:border-blue-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                 <span>%</span>
                                             </span>
                                         </div>
                                     </div>
                                 </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-100-2" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p class="font-bold text-blue-700 border-b border-slate-200 pb-1">Câu a:</p>
                                    <p class="pl-4 font-bold text-slate-900">57% + 43,5% = 100,5%</p>
                                    <p class="pl-4 font-bold text-slate-900">100,5% − 57% = 43,5%</p>
                                    <p class="pl-4 font-bold text-slate-900">100,5% − 43,5% = 57%</p>
                                    <p class="font-bold text-blue-700 border-b border-slate-200 pb-1 mt-2">Câu b:</p>
                                    <p class="pl-4 font-bold text-slate-900">12% × 6 = 72%</p>
                                    <p class="pl-4 font-bold text-slate-900">72% : 6 = 12%</p>
                                    <p class="pl-4 font-bold text-slate-900">72% : 12 = 6%</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution100('2')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-100-2" onclick="window.check_100_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 - Trồng cây -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                                <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase">Bài 3. Hưởng ứng Tết trồng cây</h3>
                            </div>

                            <div class="p-6 bg-emerald-50/80 border-2 border-emerald-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-5">
                                <p class="font-bold text-slate-800 text-xl">
                                    Hưởng ứng Tết trồng cây, nhà trường đã tổ chức một đợt trồng cây xung quanh trường. Theo kế hoạch, trong thời gian quy định thì nhà trường phải trồng được <span class="text-emerald-700 font-extrabold">600 cây</span>. Đến nửa thời gian quy định, nhà trường đã trồng được <span class="text-emerald-700 font-extrabold">360 cây</span> và đến hết thời gian quy định, nhà trường đã trồng được tất cả <span class="text-emerald-700 font-extrabold">690 cây</span>. Hỏi:
                                </p>
                                <div class="bg-white p-5 rounded-2xl border border-emerald-100 space-y-4">
                                    <div class="space-y-2">
                                        <p class="font-extrabold text-emerald-800">a) Đến hết nửa thời gian quy định, nhà trường đã thực hiện được bao nhiêu phần trăm kế hoạch?</p>
                                        <div class="flex items-center gap-2 flex-wrap pl-4">
                                            <span class="font-bold">Đáp số:</span>
                                            <input id="100-3-1" type="text" class="w-28 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span class="font-bold">% kế hoạch</span>
                                        </div>
                                    </div>
                                    <div class="space-y-2 border-t border-slate-100 pt-3">
                                        <p class="font-extrabold text-emerald-800">b) Đến hết thời gian quy định, nhà trường đã vượt kế hoạch bao nhiêu phần trăm?</p>
                                        <div class="flex items-center gap-2 flex-wrap pl-4">
                                            <span class="font-bold">Đáp số: Vượt</span>
                                            <input id="100-3-2" type="text" class="w-24 h-11 text-center font-black border-2 border-emerald-300 rounded-xl outline-none focus:border-emerald-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            <span class="font-bold">% kế hoạch</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-100-3" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p class="font-bold text-emerald-700 border-b border-slate-200 pb-1">Câu a:</p>
                                    <p>Tỉ số phần trăm của số cây đã trồng đến nửa thời gian và kế hoạch là:</p>
                                    <p class="pl-6 font-bold text-slate-900">360 : 600 = 0,6 = 60%</p>
                                    <p class="font-bold text-emerald-700 mt-1">Đến nửa thời gian, nhà trường thực hiện được 60% kế hoạch.</p>
                                    <p class="font-bold text-emerald-700 border-b border-slate-200 pb-1 mt-3">Câu b:</p>
                                    <p>Tỉ số phần trăm của số cây đã trồng tổng cộng và kế hoạch là:</p>
                                    <p class="pl-6 font-bold text-slate-900">690 : 600 = 1,15 = 115%</p>
                                    <p>Nhà trường đã vượt kế hoạch số phần trăm là:</p>
                                    <p class="pl-6 font-bold text-slate-900">115% − 100% = 15%</p>
                                    <p class="font-bold text-emerald-700 mt-1">Đáp số: a) 60%; b) Vượt 15% kế hoạch.</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution100('3')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-100-3" onclick="window.check_100_3()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Bài 4 - Biểu đồ môn thể thao -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-orange-500 space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                                <h3 class="text-2xl md:text-3xl font-black text-orange-700 uppercase">Bài 4. Số học sinh ưa thích bốn môn thể thao</h3>
                            </div>

                            <div class="p-6 bg-orange-50/80 border-2 border-orange-100 rounded-[2rem] text-xl text-slate-700 leading-relaxed space-y-5">
                                <p class="font-bold text-slate-800">Biểu đồ dưới đây cho biết kết quả điều tra về sở thích bốn môn thể thao của một số học sinh.</p>

                                <div class="relative flex justify-center max-w-[600px] mx-auto group">
                                <img onclick="window.zoomImage100('./assets/images/toan/toan_tap_2/100/4.png', 'Biểu đồ số học sinh ưa thích bốn môn thể thao')" src="./assets/images/toan/toan_tap_2/100/4.png" alt="Biểu đồ số học sinh ưa thích bốn môn thể thao" class="w-full max-w-[480px] h-auto object-contain rounded-2xl border-4 border-orange-100 shadow-md cursor-zoom-in hover:brightness-95 transition-all">
                                <button onclick="window.zoomImage100('./assets/images/toan/toan_tap_2/100/4.png', 'Biểu đồ số học sinh ưa thích bốn môn thể thao')" class="absolute top-3 right-3 bg-blue-600/80 hover:bg-blue-600 text-white p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all active:scale-90 z-20" title="Phóng to hình ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                                </button>
                            </div>

                                <div class="bg-white p-5 rounded-2xl border border-orange-100 space-y-4">
                                    <p class="font-extrabold text-orange-800">a) Mỗi môn thể thao có bao nhiêu học sinh ưa thích?</p>
                                    <div class="grid grid-cols-1 gap-4 pl-4 font-bold text-slate-800">
                                        <div class="flex items-center gap-2">
                                            <span>• Cờ vua:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="100-4-1" type="text" class="w-20 h-11 text-center font-black border-2 border-orange-300 rounded-xl outline-none focus:border-orange-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>học sinh</span>
                                            </span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span>• Bóng đá:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="100-4-2" type="text" class="w-20 h-11 text-center font-black border-2 border-orange-300 rounded-xl outline-none focus:border-orange-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>học sinh</span>
                                            </span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span>• Bơi:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="100-4-3" type="text" class="w-20 h-11 text-center font-black border-2 border-orange-300 rounded-xl outline-none focus:border-orange-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>học sinh</span>
                                            </span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span>• Võ dân tộc:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="100-4-4" type="text" class="w-20 h-11 text-center font-black border-2 border-orange-300 rounded-xl outline-none focus:border-orange-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>học sinh</span>
                                            </span>
                                        </div>
                                    </div>

                                    <p class="font-extrabold text-orange-800 pt-3 border-t border-slate-100">b) Tìm tỉ số phần trăm của số học sinh ưa thích mỗi môn và tổng số học sinh được điều tra:</p>
                                    <div class="grid grid-cols-1 gap-4 pl-4 font-bold text-slate-800">
                                        <div class="flex items-center gap-2">
                                            <span>• Cờ vua:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="100-4-5" type="text" class="w-20 h-11 text-center font-black border-2 border-orange-300 rounded-xl outline-none focus:border-orange-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>%</span>
                                            </span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span>• Bóng đá:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="100-4-6" type="text" class="w-20 h-11 text-center font-black border-2 border-orange-300 rounded-xl outline-none focus:border-orange-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>%</span>
                                            </span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span>• Bơi:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="100-4-7" type="text" class="w-20 h-11 text-center font-black border-2 border-orange-300 rounded-xl outline-none focus:border-orange-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>%</span>
                                            </span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span>• Võ dân tộc:</span>
                                            <span class="inline-flex items-center flex-nowrap gap-1">
                                                <input id="100-4-8" type="text" class="w-20 h-11 text-center font-black border-2 border-orange-300 rounded-xl outline-none focus:border-orange-600 bg-white" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <span>%</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Hộp bài giải chi tiết -->
                                <div id="solution-100-4" class="hidden p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-xl font-medium text-slate-700 space-y-2 animate-in fade-in duration-300">
                                    <p class="font-bold text-slate-800 text-2xl mb-2">Bài giải chi tiết:</p>
                                    <p class="font-bold text-orange-700 border-b border-slate-200 pb-1">Câu a - Số học sinh ưa thích mỗi môn:</p>
                                    <p class="pl-4">Cờ vua: 6; Bóng đá: 18; Bơi: 12; Võ dân tộc: 12</p>
                                    <p class="pl-4 font-bold text-slate-900">Tổng số học sinh được điều tra: 6 + 18 + 12 + 12 = 48 (học sinh)</p>
                                    <p class="font-bold text-orange-700 border-b border-slate-200 pb-1 mt-3">Câu b - Tỉ số phần trăm của từng môn:</p>
                                    <p class="pl-4">Cờ vua: 6 : 48 = 0,125 = 12,5%</p>
                                    <p class="pl-4">Bóng đá: 18 : 48 = 0,375 = 37,5%</p>
                                    <p class="pl-4">Bơi: 12 : 48 = 0,25 = 25%</p>
                                    <p class="pl-4">Võ dân tộc: 12 : 48 = 0,25 = 25%</p>
                                </div>
                            </div>

                            <div class="flex justify-end items-center gap-4 mt-4">
                                <button onclick="window.toggleSolution100('4')" class="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-100-4" onclick="window.check_100_4()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <script>
            window.toggleSolution100 = (id) => {
                const el = document.getElementById('solution-100-' + id);
                if (el) el.classList.toggle('hidden');
            };
        </script>
    `,

    "quizPool": [
        { "question": "Tỉ số phần trăm của 27 và 41 là bao nhiêu (làm tròn đến hàng phần trăm)?", "options": ["65,85%", "41,27%", "27,41%", "60%"], "answer": 0 },
        { "question": "Tỉ số phần trăm của 41 và 73 là:", "options": ["56,16%", "0,5616%", "5,616%", "561,6%"], "answer": 0 },
        { "question": "57% + 43,5% = ?", "options": ["100,5%", "99%", "100%", "95%"], "answer": 0 },
        { "question": "100,5% − 57% = ?", "options": ["43,5%", "57%", "44%", "42%"], "answer": 0 },
        { "question": "12% × 6 = ?", "options": ["72%", "18%", "60%", "2%"], "answer": 0 },
        { "question": "72% : 6 = ?", "options": ["12%", "6%", "72%", "9%"], "answer": 0 },
        { "question": "72% : 12 = ?", "options": ["6%", "8%", "12%", "4%"], "answer": 0 },
        { "question": "Đến nửa thời gian trồng cây, nhà trường đã trồng 360/600 cây kế hoạch. Đã thực hiện được bao nhiêu % kế hoạch?", "options": ["60%", "36%", "50%", "65%"], "answer": 0 },
        { "question": "Nhà trường trồng được 690 cây so với kế hoạch 600 cây. Vượt kế hoạch bao nhiêu %?", "options": ["15%", "10%", "90%", "5%"], "answer": 0 },
        { "question": "Tổng số học sinh được điều tra trong bài 4 là bao nhiêu?", "options": ["50 học sinh", "60 học sinh", "40 học sinh", "55 học sinh"], "answer": 0 },
        { "question": "Tỉ số phần trăm của học sinh ưa thích bơi lội (13/50) là:", "options": ["26%", "13%", "30%", "20%"], "answer": 0 },
        { "question": "Tỉ số phần trăm của học sinh ưa thích bóng đá (18/50) là:", "options": ["36%", "18%", "30%", "40%"], "answer": 0 },
        { "question": "Tỉ số phần trăm của học sinh ưa thích cờ vua (6/50) là:", "options": ["12%", "6%", "15%", "10%"], "answer": 0 },
        { "question": "Cộng hai tỉ số phần trăm: 26% + 36% = ?", "options": ["62%", "52%", "60%", "72%"], "answer": 0 },
        { "question": "65,2% − 18,5% = ?", "options": ["46,7%", "48,3%", "45,7%", "47,3%"], "answer": 0 }
    ]
};
