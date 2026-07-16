export const lesson166 = {
    period: "166",
    title: "BÀI 72: ÔN TẬP ĐO LƯỜNG (TIẾT 1)",
    topic: "Ôn tập đo lường",
    week: "34",

    content: `
        <div class="space-y-6">
            <div class="bg-blue-50 p-8 rounded-[3rem] border-4 border-blue-200 shadow-2xl">
                <h3 class="text-3xl md:text-5xl font-black text-blue-700 mb-6 uppercase text-center tracking-tight">ÔN TẬP ĐO LƯỜNG (TIẾT 1)</h3>
                <div class="space-y-4 text-xl md:text-3xl text-gray-800 leading-relaxed font-bold">
                    <p class="uppercase text-blue-600 border-b-4 border-blue-200 pb-2 text-center">Các đơn vị đo lường đã học</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        <div class="p-6 bg-white rounded-3xl shadow-xl border-t-8 border-blue-500 transform transition-all hover:-translate-y-2">
                            <h4 class="font-black text-blue-600 text-xl md:text-3xl mb-3 underline italic uppercase">ĐỘ DÀI</h4>
                            <p class="text-xl md:text-2xl text-gray-600 font-medium tracking-tight">km, hm, dam, m, dm, cm, mm</p>
                        </div>
                        <div class="p-6 bg-white rounded-3xl shadow-xl border-t-8 border-orange-500 transform transition-all hover:-translate-y-2">
                            <h4 class="font-black text-orange-600 text-xl md:text-3xl mb-3 underline italic uppercase">KHỐI LƯỢNG</h4>
                            <p class="text-xl md:text-2xl text-gray-600 font-medium tracking-tight">tấn, tạ, yến, kg, hg, dag, g</p>
                        </div>
                        <div class="p-6 bg-white rounded-3xl shadow-xl border-t-8 border-green-500 transform transition-all hover:-translate-y-2">
                            <h4 class="font-black text-green-600 text-xl md:text-3xl mb-3 underline italic uppercase">DIỆN TÍCH</h4>
                            <p class="text-xl md:text-2xl text-gray-600 font-medium tracking-tight">km², ha, dam², m², dm², cm², mm²</p>
                        </div>
                        <div class="p-6 bg-white rounded-3xl shadow-xl border-t-8 border-rose-500 transform transition-all hover:-translate-y-2">
                            <h4 class="font-black text-rose-600 text-xl md:text-3xl mb-3 underline italic uppercase">THỂ TÍCH</h4>
                            <p class="text-xl md:text-2xl text-gray-600 font-medium tracking-tight">m³, dm³, cm³</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="space-y-12 pb-10">
            <!-- Bài 1 -->
            <div id="lesson166_b1" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg rotate-3">1</div>
                    <p class="text-2xl md:text-4xl font-black text-blue-800 uppercase tracking-wide">Số tự nhiên hoặc số thập phân?</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
                    <!-- a) Độ dài -->
                    <div class="space-y-6 bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100">
                        <h4 class="text-xl md:text-3xl font-black text-blue-600 mb-6 underline italic uppercase">a) Độ dài:</h4>
                        <div class="space-y-4">
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-48 text-right font-bold text-xl md:text-2xl">3 m =</span>
                                <input id="166-1-1" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-blue-400 rounded-xl outline-none focus:ring-4 focus:ring-blue-200 bg-white" placeholder="?">
                                <span class="font-bold text-gray-500">cm</span>
                            </div>
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-48 text-right font-bold">1,5 km =</span>
                                <input id="166-1-2" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-blue-400 rounded-xl outline-none focus:ring-4 focus:ring-blue-200 bg-white" placeholder="?">
                                <span class="font-bold text-gray-500">m</span>
                            </div>
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-48 text-right font-bold text-xl md:text-2xl">5 m 24 cm =</span>
                                <input id="166-1-3" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-blue-400 rounded-xl outline-none focus:ring-4 focus:ring-blue-200 bg-white" placeholder="?">
                                <span class="font-bold text-gray-500">m</span>
                            </div>
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-48 text-right font-bold text-xl md:text-2xl">7 km 80 m =</span>
                                <input id="166-1-4" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-blue-400 rounded-xl outline-none focus:ring-4 focus:ring-blue-200 bg-white" placeholder="?">
                                <span class="font-bold text-gray-500">km</span>
                            </div>
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-48 text-right font-bold">270 cm =</span>
                                <input id="166-1-5" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-blue-400 rounded-xl outline-none focus:ring-4 focus:ring-blue-200 bg-white" placeholder="?">
                                <span class="font-bold text-gray-500">m</span>
                            </div>
                        </div>
                    </div>

                    <!-- b) Khối lượng -->
                    <div class="space-y-6 bg-orange-50 p-8 rounded-[2.5rem] border-2 border-orange-100">
                        <h4 class="text-xl md:text-3xl font-black text-orange-600 mb-6 underline italic uppercase">b) Khối lượng:</h4>
                        <div class="space-y-4">
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-48 text-right font-bold text-xl md:text-2xl">4 kg =</span>
                                <input id="166-1-7" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-orange-400 rounded-xl outline-none focus:ring-4 focus:ring-orange-200 bg-white" placeholder="?">
                                <span class="font-bold text-gray-500">g</span>
                            </div>
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-48 text-right font-bold">0,95 tấn =</span>
                                <input id="166-1-8" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-orange-400 rounded-xl outline-none focus:ring-4 focus:ring-orange-200 bg-white" placeholder="?">
                                <span class="font-bold text-gray-500">kg</span>
                            </div>
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-48 text-right font-bold text-xl md:text-2xl">2 kg 300 g =</span>
                                <input id="166-1-9" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-orange-400 rounded-xl outline-none focus:ring-4 focus:ring-orange-200 bg-white" placeholder="?">
                                <span class="font-bold text-gray-500">kg</span>
                            </div>
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-48 text-right font-bold text-xl md:text-2xl">3 tấn 66 kg =</span>
                                <input id="166-1-10" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-orange-400 rounded-xl outline-none focus:ring-4 focus:ring-orange-200 bg-white" placeholder="?">
                                <span class="font-bold text-gray-500">tấn</span>
                            </div>
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-48 text-right font-bold text-xl md:text-2xl">8 000 kg =</span>
                                <input id="166-1-11" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-orange-400 rounded-xl outline-none focus:ring-4 focus:ring-orange-200 bg-white" placeholder="?">
                                <span class="font-bold text-gray-500">tấn</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-166-1" onclick="window.check_166_1()" class="w-24 h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-4xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="lesson166_b2" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-green-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg rotate-0">2</div>
                    <p class="text-2xl md:text-4xl font-black text-green-800 uppercase tracking-wide">Diện tích và Thể tích</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
                    <!-- a) Diện tích -->
                    <div class="space-y-6 bg-green-50 p-8 rounded-[2.5rem] border-2 border-green-100">
                        <h4 class="text-xl md:text-3xl font-black text-green-600 mb-6 underline italic uppercase">a) Diện tích:</h4>
                        <div class="space-y-4">
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-56 text-right font-bold text-xl md:text-2xl">7 dm² =</span>
                                <input id="166-2-1" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-green-400 rounded-xl outline-none focus:ring-4 focus:ring-green-200 bg-white" placeholder="?">
                                <span class="font-bold text-gray-500">cm²</span>
                            </div>
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-56 text-right font-bold">1,6 ha =</span>
                                <input id="166-2-2" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-green-400 rounded-xl outline-none focus:ring-4 focus:ring-green-200 bg-white" placeholder="?">
                                <span class="font-bold text-gray-500">m²</span>
                            </div>
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-56 text-right font-bold text-xl md:text-2xl">6 m² 84 dm² =</span>
                                <input id="166-2-3" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-green-400 rounded-xl outline-none focus:ring-4 focus:ring-green-200 bg-white" placeholder="?">
                                <span class="font-bold text-gray-500">m²</span>
                            </div>
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-56 text-right font-bold text-xl md:text-2xl">4 km² 5 ha =</span>
                                <input id="166-2-4" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-green-400 rounded-xl outline-none focus:ring-4 focus:ring-green-200 bg-white" placeholder="?">
                                <span class="font-bold text-gray-500">km²</span>
                            </div>
                        </div>
                    </div>

                    <!-- b) Thể tích -->
                    <div class="space-y-6 bg-rose-50 p-8 rounded-[2.5rem] border-2 border-rose-100">
                        <h4 class="text-xl md:text-3xl font-black text-rose-600 mb-6 underline italic uppercase">b) Thể tích:</h4>
                        <div class="space-y-4">
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-56 text-right font-bold text-xl md:text-2xl">3 dm³ =</span>
                                <input id="166-2-7" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-rose-400 rounded-xl outline-none focus:ring-4 focus:ring-rose-200 bg-white" placeholder="?">
                                <span class="font-bold text-gray-500">cm³</span>
                            </div>
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-56 text-right font-bold">0,42 m³ =</span>
                                <input id="166-2-8" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-rose-400 rounded-xl outline-none focus:ring-4 focus:ring-rose-200 bg-white" placeholder="?">
                                <span class="font-bold text-gray-500">dm³</span>
                            </div>
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-56 text-right font-bold text-xl md:text-2xl">6 dm³ 520 cm³ =</span>
                                <input id="166-2-9" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-rose-400 rounded-xl outline-none focus:ring-4 focus:ring-rose-200 bg-white" placeholder="?">
                                <span class="font-bold text-gray-500">dm³</span>
                            </div>
                            <div class="flex items-center gap-4 text-xl md:text-2xl">
                                <span class="w-56 text-right font-bold text-xl md:text-2xl">5 m³ 68 dm³ =</span>
                                <input id="166-2-10" type="text" class="w-32 h-14 text-center text-2xl md:text-3xl font-black border-4 border-rose-400 rounded-xl outline-none focus:ring-4 focus:ring-rose-200 bg-white" placeholder="?">
                                <span class="font-bold text-gray-500">m³</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-166-2" onclick="window.check_166_2()" class="w-24 h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-4xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="lesson166_b3" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-orange-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-orange-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg -rotate-3">3</div>
                    <p class="text-2xl md:text-4xl font-black text-orange-800 uppercase tracking-wide">Bài toán bể cá</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div class="p-8 bg-orange-50 rounded-[3rem] border-2 border-orange-100 flex-1">
                        <p class="text-2xl md:text-3xl text-gray-700 leading-relaxed font-bold">
                            Bể cá của nhà Nam dạng hình hộp chữ nhật có các kích thước như hình vẽ. 
                            Biết rằng lượng nước trong bể bằng <span class="text-blue-600 font-black decoration-blue-300 underline underline-offset-8">90% thể tích</span> của bể. 
                            <br><br>
                            Hỏi trong bể có bao nhiêu <span class="font-black text-rose-600">lít nước</span>?
                        </p>
                        
                        <div class="mt-[150px] md:mt-12 flex items-center gap-6 bg-white p-6 rounded-[2rem] shadow-xl border-4 border-orange-300 transform -rotate-1">
                            <span class="text-xl md:text-3xl font-black text-gray-700 uppercase">ĐÁP SỐ:</span>
                            <div class="flex items-center gap-3">
                                <input id="166-3-1" type="text" class="w-40 h-20 text-center text-4xl md:text-5xl font-black border-4 border-orange-400 rounded-2xl outline-none text-orange-700 shadow-inner" placeholder="...">
                                <span class="text-2xl md:text-3xl font-black text-orange-600 uppercase">LÍT</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex flex-col items-center bg-white p-8 rounded-[3rem] shadow-inner border-4 border-orange-50 h-full">
                        <svg width="300" height="240" viewBox="0 0 250 200" class="drop-shadow-2xl filter brightness-110">
                            <path d="M 30 160 L 180 160 L 230 110 L 80 110 Z" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="4"/>
                            <path d="M 30 160 L 30 60 L 180 60 L 180 160" fill="none" stroke="#0EA5E9" stroke-width="4"/>
                            <path d="M 180 60 L 230 10 L 230 110" fill="none" stroke="#0EA5E9" stroke-width="4"/>
                            <path d="M 30 60 L 80 10 L 230 10" fill="none" stroke="#0EA5E9" stroke-width="4"/>
                            <text x="105" y="185" font-family="Arial" font-weight="900" fill="#0369A1" text-anchor="middle" font-size="18">60 cm</text>
                            <text x="215" y="150" font-family="Arial" font-weight="900" fill="#0369A1" text-anchor="middle" font-size="18" transform="rotate(-45, 215, 150)">40 cm</text>
                            <text x="15" y="110" font-family="Arial" font-weight="900" fill="#0369A1" text-anchor="middle" font-size="18" transform="rotate(-90, 15, 110)">50 cm</text>
                            <path d="M 30 160 L 180 160 L 225 115 L 75 115 Z" fill="#7DD3FC" opacity="0.6"/>
                            <rect x="30" y="80" width="150" height="80" fill="#7DD3FC" opacity="0.4"/>
                        </svg>
                    </div>
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-166-3" onclick="window.check_166_3()" class="w-24 h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-4xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>

            <!-- Bài 4 -->
            <div id="lesson166_b4" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-rose-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-rose-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg rotate-3">4</div>
                    <p class="text-2xl md:text-4xl font-black text-rose-800 uppercase tracking-wide">Hút nước bể bơi</p>
                </div>
                
                <div class="p-8 bg-rose-50 rounded-[30px] border-2 border-rose-100 flex flex-col items-center gap-8">
                    <p class="text-2xl md:text-3xl text-gray-700 leading-relaxed font-bold text-center">
                        Một bể bơi chứa <span class="text-rose-700 font-black">480 m³</span> nước. Để dọn vệ sinh, người ta đã hút đi 
                        <span class="text-blue-600 underline underline-offset-8 font-black">5/8 lượng nước</span> trong bể.
                        <br><br>
                        Hỏi người ta còn phải hút đi <span class="italic text-rose-600 underline">bao nhiêu mét khối nước nữa</span> thì hết?
                    </p>
                    
                    <div class="w-full flex justify-center mt-6">
                        <div class="w-full md:w-auto p-10 bg-white rounded-[3rem] shadow-2xl border-4 border-dashed border-rose-300 flex flex-col items-center gap-6 transform transition-all hover:scale-105">
                            <span class="text-xl md:text-2xl font-black text-gray-500 uppercase tracking-widest">CẦN HÚT THÊM:</span>
                            <div class="flex items-center gap-4">
                                <input id="166-4-1" type="text" class="w-56 h-24 text-center text-5xl md:text-6xl font-black bg-rose-50 border-4 border-rose-400 rounded-3xl outline-none text-rose-700 shadow-inner focus:ring-8 focus:ring-rose-200 transition-all font-mono" placeholder="...">
                                <span class="text-3xl md:text-4xl font-black text-gray-600 uppercase">m³</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-166-4" onclick="window.check_166_4()" class="w-24 h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-4xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>
        </div>
    `,

    quizPool: [
        { question: "3 m bằng bao nhiêu cm?", options: ["300", "30", "3000", "0,3"], answer: 0 },
        { question: "1,5 km bằng bao nhiêu m?", options: ["1500", "150", "15", "15000"], answer: 0 },
        { question: "5 m 24 cm bằng bao nhiêu m?", options: ["5,24", "524", "5,024", "52,4"], answer: 0 },
        { question: "8 000 kg bằng bao nhiêu tấn?", options: ["8", "80", "800", "0,8"], answer: 0 },
        { question: "0,42 m³ bằng bao nhiêu dm³?", options: ["420", "42", "4200", "4,2"], answer: 0 },
        { question: "7 dm² bằng bao nhiêu cm²?", options: ["700", "70", "7000", "0,7"], answer: 0 },
        { question: "1,6 ha bằng bao nhiêu m²?", options: ["16 000", "1600", "160 000", "160"], answer: 0 },
        { question: "1 dm³ bằng bao nhiêu lít?", options: ["1", "10", "100", "1000"], answer: 0 },
        { question: "Bể cá 60x40x50 cm có thể tích là bao nhiêu cm³?", options: ["120 000", "12 000", "150 000", "240 000"], answer: 0 },
        { question: "100 000 cm³ bằng bao nhiêu dm³?", options: ["100", "1000", "10", "1"], answer: 0 },
        { question: "90% của 120 lít là:", options: ["108 lít", "100 lít", "90 lít", "110 lít"], answer: 0 },
        { question: "Một bể nước có 480 m³, đã hút 5/8. Phân số chỉ lượng nước còn lại là:", options: ["3/8", "5/8", "1/8", "2/8"], answer: 0 },
        { question: "3/8 của 480 là:", options: ["180", "160", "200", "300"], answer: 0 },
        { question: "Đơn vị đo diện tích thường dùng trong nông nghiệp đất đai là:", options: ["ha", "m²", "dm²", "cm²"], answer: 0 },
        { question: "1 ha bằng bao nhiêu m²?", options: ["10 000", "1 000", "100", "100 000"], answer: 0 },
        { question: "Đơn vị khối lượng nào lớn hơn tấn?", options: ["Không có", "Tạ", "Yến", "kg"], answer: 0 },
        { question: "270 cm đổi ra mét là:", options: ["2,7", "27", "0,27", "2700"], answer: 0 },
        { question: "7 500 kg bằng bao nhiêu tấn?", options: ["7,5", "75", "0,75", "750"], answer: 0 },
        { question: "1 m³ bằng bao nhiêu dm³?", options: ["1000", "100", "10", "10 000"], answer: 0 },
        { question: "635 m bằng bao nhiêu km?", options: ["0,635", "6,35", "63,5", "0,0635"], answer: 0 },
        { question: "4 km² 5 ha bằng bao nhiêu km²?", options: ["4,05", "4,5", "40,5", "45"], answer: 0 },
        { question: "3 dm³ bằng bao nhiêu cm³?", options: ["3000", "300", "30", "0,003"], answer: 0 },
        { question: "2 075 cm³ bằng bao nhiêu dm³?", options: ["2,075", "20,75", "207,5", "0,2075"], answer: 0 },
        { question: "1 lít nước nặng khoảng bao nhiêu?", options: ["1 kg", "1 g", "100 g", "10 kg"], answer: 0 },
        { question: "Số thích hợp điền vào 5m³ 68dm³ = ... m³ là:", options: ["5,068", "5,68", "56,8", "568"], answer: 0 }
    ]
};

// --- Logic Functions ---
window.check_166_1 = () => {
    const ids = ['166-1-1', '166-1-2', '166-1-3', '166-1-4', '166-1-5', '166-1-7', '166-1-8', '166-1-9', '166-1-10', '166-1-11'];
    const ans = ['300', '1500', '5.24', '7.08', '2.7', '4000', '950', '2.3', '3.066', '8'];
    const names = [
        '3 m = ... cm', '1,5 km = ... m', '5 m 24 cm = ... m', '7 km 80 m = ... km', '270 cm = ... m',
        '4 kg = ... g', '0,95 tấn = ... kg', '2 kg 300 g = ... kg', '3 tấn 66 kg = ... tấn', '8 000 kg = ... tấn'
    ];
    let score = 0;
    let studentAns = [];
    ids.forEach((id, idx) => {
        const val = document.getElementById(id).value.trim().replace(',', '.');
        studentAns.push(`${names[idx]}: ${val || '?'}`);
        if (val === ans[idx]) score++;
    });

    const isCorrect = score === ids.length;
    const rightAnswer = "a) 300; 1500; 5,24; 7,08; 2,7. b) 4000; 950; 2,3; 3,066; 8.";
    const studentAnswer = studentAns.join('<br>');
    const guidance = "Em hãy nhớ lại bảng đơn vị đo độ dài và khối lượng. Mỗi đơn vị liền kề nhau gấp kém nhau 10 lần nhé!";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        a) Độ dài:<br>
        - 3 m = 300 cm<br>
        - 1,5 km = 1500 m<br>
        - 5 m 24 cm = 5,24 m<br>
        - 7 km 80 m = 7,08 km<br>
        - 270 cm = 2,7 m<br>
        b) Khối lượng:<br>
        - 4 kg = 4000 g<br>
        - 0,95 tấn = 950 kg<br>
        - 2 kg 300 g = 2,3 kg<br>
        - 3 tấn 66 kg = 3,066 tấn<br>
        - 8 000 kg = 8 tấn<br>
        Chúc mừng em đã hoàn thành bài tập rất tốt!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 1. Đổi đơn vị độ dài, khối lượng", Math.round(score / ids.length * 100), "btn-check-166-1", 0, ids.length, score);
    }
};

window.check_166_2 = () => {
    const ids = ['166-2-1', '166-2-2', '166-2-3', '166-2-4', '166-2-7', '166-2-8', '166-2-9', '166-2-10'];
    const ans = ['700', '16000', '6.84', '4.05', '3000', '420', '6.52', '5.068'];
    const names = [
        '7 dm² = ... cm²', '1,6 ha = ... m²', '6 m² 84 dm² = ... m²', '4 km² 5 ha = ... km²',
        '3 dm³ = ... cm³', '0,42 m³ = ... dm³', '6 dm³ 520 cm³ = ... dm³', '5 m³ 68 dm³ = ... m³'
    ];
    let score = 0;
    let studentAns = [];
    ids.forEach((id, idx) => {
        const val = document.getElementById(id).value.trim().replace(',', '.');
        studentAns.push(`${names[idx]}: ${val || '?'}`);
        if (val === ans[idx]) score++;
    });

    const isCorrect = score === ids.length;
    const rightAnswer = "a) 700; 16000; 6,84; 4,05. b) 3000; 420; 6,52; 5,068.";
    const studentAnswer = studentAns.join('<br>');
    const guidance = "Em hãy nhớ lại: Đơn vị diện tích liền kề gấp kém nhau 100 lần, đơn vị thể tích liền kề gấp kém nhau 1000 lần nhé!";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        a) Diện tích:<br>
        - 7 dm² = 700 cm²<br>
        - 1,6 ha = 16 000 m²<br>
        - 6 m² 84 dm² = 6,84 m²<br>
        - 4 km² 5 ha = 4,05 km²<br>
        b) Thể tích:<br>
        - 3 dm³ = 3000 cm³<br>
        - 0,42 m³ = 420 dm³<br>
        - 6 dm³ 520 cm³ = 6,52 dm³<br>
        - 5 m³ 68 dm³ = 5,068 m³<br>
        Rất tuyệt vời! Em đã nắm vững cách quy đổi rồi đó.
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 2. Đổi đơn vị diện tích, thể tích", Math.round(score / ids.length * 100), "btn-check-166-2", 0, ids.length, score);
    }
};

window.check_166_3 = () => {
    const val = document.getElementById('166-3-1').value.trim().replace(',', '.');
    const isCorrect = val === '108';

    const rightAnswer = "108";
    const studentAnswer = val || "?";
    const guidance = "Em hãy tính thể tích của bể cá (dài × rộng × cao), đổi ra dm³ (lít), sau đó tính số lít nước (bằng 90% thể tích bể).";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        Bước 1: Thể tích bể cá là:<br>
        60 × 40 × 50 = 120 000 (cm³)<br>
        Bước 2: Đổi 120 000 cm³ = 120 dm³ = 120 lít.<br>
        Bước 3: Lượng nước trong bể có là:<br>
        120 × 90 : 100 = 108 (lít)<br>
        Đáp số: 108 lít.<br>
        Thật là một kết quả chính xác! Chúc mừng em.
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 3. Thể tích bể cá", isCorrect ? 100 : 0, "btn-check-166-3", 0, 1, isCorrect ? 1 : 0);
    }
};

window.check_166_4 = () => {
    const val = document.getElementById('166-4-1').value.trim().replace(',', '.');
    const isCorrect = val === '180';

    const rightAnswer = "180";
    const studentAnswer = val || "?";
    const guidance = "Em có thể tìm phần lượng nước còn lại (1 - 5/8) rồi tính 3/8 của 480 m³ nhé.";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        Cách 1:<br>
        - Lượng nước người ta đã hút đi là:<br>
        480 × 5 : 8 = 300 (m³)<br>
        - Người ta còn phải hút đi số nước nữa là:<br>
        480 - 300 = 180 (m³)<br>
        Cách 2:<br>
        - Phân số chỉ lượng nước còn lại là:<br>
        1 - 5/8 = 3/8 (lượng nước)<br>
        - Số mét khối nước còn phải hút đi là:<br>
        480 × 3 : 8 = 180 (m³)<br>
        Đáp số: 180 m³.<br>
        Em làm bài rất tốt! Tiếp tục phát huy nhé.
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 4. Hút nước bể bơi", isCorrect ? 100 : 0, "btn-check-166-4", 0, 1, isCorrect ? 1 : 0);
    }
};
