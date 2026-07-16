const metadata = {
    "lessonInfo": {
        "period": "20",
        "week": "4",
        "topic": "Số thập phân",
        "title": "BÀI 10: KHÁI NIỆM SỐ THẬP PHÂN",
        "desc": "Làm quen với khái niệm số thập phân, phần nguyên và phần thập phân của số thập phân. Nhận biết, đọc và viết các số thập phân đơn giản qua các ví dụ thực tế đo độ dài, khối lượng."
    },
    "bai_tap": [
        {
            "id": "20_1",
            "type": "fill_multiple",
            "title": "Điền số thập phân và đọc số thập phân",
            "answers": ["0,4", "0,5", "0,6", "0,7", "không phẩy bốn", "không phẩy năm", "không phẩy không bốn", "không phẩy không năm"],
            "guidance": "Em hãy quan sát kỹ mối liên hệ giữa phân số thập phân và số thập phân trên tia số để điền số thích hợp. Khi đọc số thập phân, em đọc phần nguyên trước, sau đó đọc 'phẩy' rồi đọc phần thập phân nhé!",
            "solution": "a) Các số thập phân thích hợp là: 0,4 ; 0,5 ; 0,6 ; 0,7.<br>b) Đọc số:<br>- 0,4 đọc là: không phẩy bốn.<br>- 0,5 đọc là: không phẩy năm.<br>- 0,04 đọc là: không phẩy không bốn.<br>- 0,05 đọc là: không phẩy không năm. Con đọc rất đúng!"
        },
        {
            "id": "20_2",
            "type": "fill_multiple",
            "title": "Điền số thích hợp vào chỗ trống",
            "answers": ["0,001", "0,564", "3200", "4500"],
            "guidance": "Em hãy viết số đo dưới dạng phân số thập phân thích hợp, sau đó chuyển thành số thập phân. Khi đổi sang đơn vị nhỏ hơn, em nhân với tỷ lệ tương ứng nhé!",
            "solution": "a) 1 kg = 0,001 tấn ; 564 m = 0,564 km.<br>b) 3,2 m = 3200 mm ; 4,5 kg = 4500 g. Con thực hiện đổi rất nhanh và chính xác!"
        },
        {
            "id": "20_3",
            "type": "fill_multiple",
            "title": "Đo độ dài và xác định các thành phần của số thập phân",
            "answers": ["13,2", "13", "2", "1,65", "1", "65"],
            "guidance": "Em hãy quy đổi số đo độ dài sang đơn vị xăng-ti-mét hoặc mét dưới dạng số thập phân, sau đó xác định rõ phần nguyên và phần thập phân của số đó nhé!",
            "solution": "a) Độ dài cái bút máy là 132 mm = 13,2 cm. Số 13,2 có phần nguyên là 13, phần thập phân là 2.<br>b) Chiều cao của xà đơn là 165 cm = 1,65 m. Số 1,65 có phần nguyên là 1, phần thập phân là 65.<br>Tuyệt vời!"
        }
    ],
    "quizPool": [
        { "question": "Số thập phân 0,9 đọc là:", "options": ["Không phẩy chín", "Chín", "Không phẩy không chín", "Chín phần mười"], "answer": 0 },
        { "question": "Phần nguyên của số thập phân 12,34 là:", "options": ["12", "34", "1", "2"], "answer": 0 },
        { "question": "Phần thập phân của số thập phân 9,17 là:", "options": ["17", "9", "7", "1"], "answer": 0 },
        { "question": "Số thập phân gồm 5 đơn vị và 3 phần mười viết là:", "options": ["5,3", "0,53", "53", "5,03"], "answer": 0 },
        { "question": "Đổi 1 g = ... kg", "options": ["0,001 kg", "0,01 kg", "0,1 kg", "0,0001 kg"], "answer": 0 },
        { "question": "Số 0,08 đọc là:", "options": ["Không phẩy không tám", "Không phẩy tám", "Tám phần trăm", "Tám phần mười"], "answer": 0 },
        { "question": "Phần thập phân của số thập phân 0,05 là:", "options": ["05", "5", "0", "Không phẩy không năm"], "answer": 0 },
        { "question": "Đổi 148 ml sang đơn vị lít được số thập phân là:", "options": ["0,148 l", "1,48 l", "14,8 l", "0,0148 l"], "answer": 0 },
        { "question": "Hỗn số 1 và 18/100 được viết dưới dạng số thập phân là:", "options": ["1,18", "11,8", "0,118", "1,018"], "answer": 0 },
        { "question": "Đổi 564 m sang đơn vị km được số thập phân là:", "options": ["0,564 km", "5,64 km", "56,4 km", "0,0564 km"], "answer": 0 },
        { "question": "Số thập phân 1,65 gồm phần nguyên là 1 và phần thập phân là:", "options": ["65", "6", "5", "0,65"], "answer": 0 },
        { "question": "Số 0,7 viết dưới dạng phân số thập phân là:", "options": ["7/10", "7/100", "7/1000", "70/10"], "answer": 0 },
        { "question": "Đổi 3,2 m sang đơn vị mm ta được:", "options": ["3200 mm", "320 mm", "32 mm", "32000 mm"], "answer": 0 },
        { "question": "Đổi 4,5 kg sang đơn vị g ta được:", "options": ["4500 g", "450 g", "45 g", "45000 g"], "answer": 0 },
        { "question": "Số 13,2 có phần nguyên là:", "options": ["13", "2", "3", "1"], "answer": 0 }
    ]
};

window.MATH_BUILDER_METADATA = metadata;

export const lesson20 = {
    ...metadata.lessonInfo,
    "content": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
        <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
            <div id="ltTrack" style="display:flex; transition:transform 0.45s cubic-bezier(0.4,0,0.2,1);">  

                <!-- Slide 1: Giới thiệu & Ý 1 -->
                <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                    <div class="space-y-6">
                        <div class="glass-card p-6 md:p-10 rounded-[3rem] bg-gradient-to-br from-teal-600 to-emerald-700 shadow-2xl relative overflow-hidden text-white">
                            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                            <div class="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/20 rounded-full -ml-10 -mb-10 blur-2xl"></div>
                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                <div class="w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-md rounded-[2rem] flex items-center justify-center shadow-inner border border-white/30 animate-pulse">
                                    <span class="text-5xl md:text-7xl">🎯</span>
                                </div>
                                <div class="text-center md:text-left">
                                    <h2 class="text-2xl md:text-4xl font-black mb-2 tracking-tight">KHÁI NIỆM SỐ THẬP PHÂN</h2>
                                    <p class="text-teal-100 text-lg md:text-2xl font-medium opacity-90">Bắt đầu hành trình làm quen với số thập phân, hiểu phần nguyên và phần thập phân!</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="glass-card p-6 md:p-10 rounded-[3rem] bg-white shadow-xl border border-teal-100 relative overflow-hidden">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-xl md:text-3xl shadow-lg shadow-emerald-200">
                                    <i class="fas fa-child"></i>
                                </div>
                                <h3 class="text-2xl md:text-4xl font-black text-slate-800">Khám phá: a) Đo chiều cao của bạn</h3>
                            </div>
                            <div class="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] space-y-4 text-xl md:text-2xl font-medium">
                                <p class="text-slate-600 font-medium leading-relaxed">
                                    Việt đo chiều cao của Mi được <span class="font-bold text-teal-600">118 cm</span> và của Rô-bốt được <span class="font-bold text-teal-600">9 dm</span>.
                                </p>
                                <ul class="space-y-3 font-bold text-slate-700">
                                    <li class="flex items-start gap-2">
                                        <span class="text-emerald-500">✔</span>
                                        <div>9 dm = <span class="inline-flex flex-col items-center align-middle mx-1"><span>9</span><span class="border-t border-slate-700 w-3"></span><span>10</span></span> m = 0,9 m (đọc là: Không phẩy chín mét).</div>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-emerald-500">✔</span>
                                        <div>118 cm = <span class="inline-flex flex-col items-center align-middle mx-1"><span>118</span><span class="border-t border-slate-700 w-6"></span><span>100</span></span> m = 1<span class="inline-flex flex-col items-center align-middle mx-1"><span>18</span><span class="border-t border-slate-700 w-4"></span><span>100</span></span> m = 1,18 m (đọc là: Một phẩy mười tám mét).</div>
                                    </li>
                                </ul>
                                <div class="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-800 font-bold text-center">
                                    Các số 0,9 và 1,18 được gọi là các số thập phân.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Slide 2: Ý 2 -->
                <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                    <div class="glass-card p-6 md:p-10 rounded-[3rem] bg-white shadow-xl border border-teal-100 relative overflow-hidden">
                        <div class="flex items-center gap-4 mb-6">
                            <div class="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center text-white text-xl md:text-3xl shadow-lg shadow-teal-200">
                                <i class="fas fa-road"></i>
                            </div>
                            <h3 class="text-2xl md:text-4xl font-black text-slate-800">Khám phá: b) Cấu tạo số thập phân</h3>
                        </div>
                        <div class="space-y-6 text-xl md:text-2xl font-medium">
                            <div class="flex flex-col lg:flex-row gap-6 items-start">
                                <div class="flex-1 p-4 bg-teal-50/50 rounded-2xl border border-teal-100 space-y-2 w-full">
                                    <p class="text-slate-700 font-black">Các thông số đo đạc của cầu Nhật Tân:</p>
                                    <ul class="list-disc pl-5 space-y-1 font-bold text-slate-700">
                                        <li>Tổng chiều dài: 9,17 km.</li>
                                        <li>Phần cầu chính: 3,9 km.</li>
                                        <li>Phần cầu vượt sông Hồng: 1,5 km.</li>
                                        <li>Phần cầu dẫn: 5,27 km.</li>
                                    </ul>
                                </div>
                                <!-- Bản đồ Google Maps cầu Nhật Tân ở góc nhỏ bên phải -->
                                <div class="w-full lg:w-72 h-44 rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex-shrink-0">
                                    <iframe src="https://maps.google.com/maps?q=C%E1%BA%A7u%20Nh%E1%BA%ADt%20T%C3%A2n,%20H%C3%A0%20N%E1%BB%99i&t=&z=13&ie=UTF8&iwloc=&output=embed" class="w-full h-full border-0" allowfullscreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                            <p class="text-slate-600 leading-relaxed">Các số 9,17; 3,9; 1,5; 5,27 cũng là số thập phân.</p>
                            <p class="bg-amber-50 p-4 rounded-2xl border border-amber-100 text-amber-900 font-bold">
                                Mỗi số thập phân gồm hai phần: <span class="text-pink-600">phần nguyên</span> ở bên trái dấu phẩy, và <span class="text-sky-600">phần thập phân</span> ở bên phải dấu phẩy.
                            </p>
                            
                            <!-- Sơ đồ cấu tạo số thập phân -->
                            <div class="w-full p-6 bg-slate-50 border border-slate-200 rounded-[2.5rem] flex flex-col items-center space-y-4">
                                <div class="text-slate-500 font-black tracking-widest text-sm uppercase">Cấu tạo số thập phân 9,17</div>
                                <div class="flex items-center gap-1 font-black text-5xl md:text-7xl">
                                    <span class="text-pink-600 bg-pink-50 px-4 py-2 rounded-2xl border-2 border-pink-200 animate-bounce">9</span>
                                    <span class="text-slate-400">,</span>
                                    <span class="text-sky-600 bg-sky-50 px-4 py-2 rounded-2xl border-2 border-sky-200">17</span>
                                </div>
                                <div class="grid grid-cols-2 gap-4 w-full w-full text-center text-base md:text-lg font-bold">
                                    <div class="p-3 bg-pink-100/50 border border-pink-200 rounded-xl text-pink-700">
                                        Phần nguyên: <span class="text-xl md:text-2xl font-black">9</span>
                                    </div>
                                    <div class="p-3 bg-sky-100/50 border border-sky-200 rounded-xl text-sky-700">
                                        Phần thập phân: <span class="text-xl md:text-2xl font-black">17</span>
                                    </div>
                                </div>
                                <div class="text-slate-500 text-lg md:text-2xl font-bold">Đọc là: <span class="text-teal-700 font-black">chín phẩy mười bảy</span></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
        `,
    "practice": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12 text-xl md:text-3xl">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" style="display:flex; transition:transform 0.45s cubic-bezier(0.4,0,0.2,1);">  

                    <!-- Trang 1: Bài 1 (Tia số & Đọc số) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="glass-card p-4 md:p-6 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-10 h-10 md:w-12 md:h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">1</div>
                                <h3 class="text-lg md:text-2xl lg:text-3xl text-teal-900 font-black uppercase tracking-tighter">Điền số và Đọc số thập phân</h3>
                            </div>

                            <div class="space-y-4">
                                <!-- Phần a: Tia số -->
                                <div class="p-4 bg-teal-50/20 rounded-2xl border border-teal-100">
                                    <p class="font-bold text-slate-700 mb-2">a) Điền số thập phân thích hợp trên tia số:</p>
                                    
                                    <!-- Tia số SVG trực quan -->
                                    <div class="w-full overflow-x-auto py-3">
                                        <svg viewBox="0 0 600 80" class="w-[600px] h-[80px] mx-auto">
                                            <!-- Trục chính -->
                                            <line x1="40" y1="40" x2="560" y2="40" stroke="#475569" stroke-width="2" />
                                            <polygon points="560,37 570,40 560,43" fill="#475569" />
                                            
                                            <!-- Các vạch và nhãn số -->
                                            <!-- Vạch 0 -->
                                            <line x1="50" y1="35" x2="50" y2="45" stroke="#475569" stroke-width="2" />
                                            <text x="50" y="25" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">0</text>
                                            <text x="50" y="60" font-size="10" font-weight="bold" fill="#0d9488" text-anchor="middle">0,1</text>
                                            
                                            <!-- Vạch 0.2 -->
                                            <line x1="100" y1="35" x2="100" y2="45" stroke="#475569" stroke-width="2" />
                                            <text x="100" y="25" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">2/10</text>
                                            <text x="100" y="60" font-size="10" font-weight="bold" fill="#0d9488" text-anchor="middle">0,2</text>
                                            
                                            <!-- Vạch 0.3 -->
                                            <line x1="150" y1="35" x2="150" y2="45" stroke="#475569" stroke-width="2" />
                                            <text x="150" y="25" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">3/10</text>
                                            <text x="150" y="60" font-size="10" font-weight="bold" fill="#0d9488" text-anchor="middle">0,3</text>
                                            
                                            <!-- Vạch 0.4 (Điền) -->
                                            <line x1="200" y1="35" x2="200" y2="45" stroke="#475569" stroke-width="2" />
                                            <text x="200" y="25" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">4/10</text>
                                            <text x="200" y="60" font-size="10" font-weight="black" fill="#db2777" text-anchor="middle">?</text>
                                            
                                            <!-- Vạch 0.5 (Điền) -->
                                            <line x1="250" y1="35" x2="250" y2="45" stroke="#475569" stroke-width="2" />
                                            <text x="250" y="25" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">5/10</text>
                                            <text x="250" y="60" font-size="10" font-weight="black" fill="#db2777" text-anchor="middle">?</text>
                                            
                                            <!-- Vạch 0.6 (Điền) -->
                                            <line x1="300" y1="35" x2="300" y2="45" stroke="#475569" stroke-width="2" />
                                            <text x="300" y="25" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">6/10</text>
                                            <text x="300" y="60" font-size="10" font-weight="black" fill="#db2777" text-anchor="middle">?</text>
                                            
                                            <!-- Vạch 0.7 (Điền) -->
                                            <line x1="350" y1="35" x2="350" y2="45" stroke="#475569" stroke-width="2" />
                                            <text x="350" y="25" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">7/10</text>
                                            <text x="350" y="60" font-size="10" font-weight="black" fill="#db2777" text-anchor="middle">?</text>
                                            
                                            <!-- Vạch 0.8 -->
                                            <line x1="400" y1="35" x2="400" y2="45" stroke="#475569" stroke-width="2" />
                                            <text x="400" y="25" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">8/10</text>
                                            <text x="400" y="60" font-size="10" font-weight="bold" fill="#0d9488" text-anchor="middle">0,8</text>
                                            
                                            <!-- Vạch 0.9 -->
                                            <line x1="450" y1="35" x2="450" y2="45" stroke="#475569" stroke-width="2" />
                                            <text x="450" y="25" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">9/10</text>
                                            <text x="450" y="60" font-size="10" font-weight="bold" fill="#0d9488" text-anchor="middle">0,9</text>
                                            
                                            <!-- Vạch 1 -->
                                            <line x1="500" y1="35" x2="500" y2="45" stroke="#475569" stroke-width="2" />
                                            <text x="500" y="25" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">1</text>
                                        </svg>
                                    </div>

                                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 font-bold text-slate-700 text-lg md:text-xl">
                                        <div class="flex items-center gap-1.5 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>4/10 =</span>
                                            <input type="text" id="ans-20-1-a1" class="w-16 h-12 md:w-20 md:h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-bold outline-none flex-shrink-0 w-10 md:text-3xl" placeholder="?"  style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;" />
                                        </div>
                                        <div class="flex items-center gap-1.5 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>5/10 =</span>
                                            <input type="text" id="ans-20-1-a2" class="w-16 h-12 md:w-20 md:h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-bold outline-none flex-shrink-0 w-10 md:text-3xl" placeholder="?"  style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;" />
                                        </div>
                                        <div class="flex items-center gap-1.5 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>6/10 =</span>
                                            <input type="text" id="ans-20-1-a3" class="w-16 h-12 md:w-20 md:h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-bold outline-none flex-shrink-0 w-10 md:text-3xl" placeholder="?"  style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;" />
                                        </div>
                                        <div class="flex items-center gap-1.5 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>7/10 =</span>
                                            <input type="text" id="ans-20-1-a4" class="w-16 h-12 md:w-20 md:h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-bold outline-none flex-shrink-0 w-10 md:text-3xl" placeholder="?"  style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;" />
                                        </div>
                                    </div>
                                </div>

                                <!-- Phần b: Đọc số thập phân -->
                                <div class="p-4 bg-emerald-50/20 rounded-2xl border border-emerald-100 text-slate-700 font-bold">
                                    <p class="mb-2">b) Đọc các số thập phân 0,4; 0,5; 0,04; 0,05 (theo mẫu):</p>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div class="flex items-center gap-1.5 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>- 0,4 đọc là:</span>
                                            <input type="text" id="ans-20-1-b1" class="w-48 h-12 md:w-64 md:h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-bold outline-none flex-shrink-0 w-10 md:text-3xl" placeholder="?"  style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;" />
                                        </div>
                                        <div class="flex items-center gap-1.5 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>- 0,5 đọc là:</span>
                                            <input type="text" id="ans-20-1-b2" class="w-48 h-12 md:w-64 md:h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-bold outline-none flex-shrink-0 w-10 md:text-3xl" placeholder="?"  style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;" />
                                        </div>
                                        <div class="flex items-center gap-1.5 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>- 0,04 đọc là:</span>
                                            <input type="text" id="ans-20-1-b3" class="w-48 h-12 md:w-64 md:h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-bold outline-none flex-shrink-0 w-10 md:text-3xl" placeholder="?"  style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;" />
                                        </div>
                                        <div class="flex items-center gap-1.5 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>- 0,05 đọc là:</span>
                                            <input type="text" id="ans-20-1-b4" class="w-48 h-12 md:w-64 md:h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-bold outline-none flex-shrink-0 w-10 md:text-3xl" placeholder="?"  style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end mt-4">
                                <button id="btn-check-20-1" onclick="window.check_20_1()" class="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Trang 2: Bài 2 (Đổi đơn vị đo - Ẩn mặc định) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="glass-card p-4 md:p-6 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden">
                            <div class="flex items-center justify-between gap-4 mb-2 flex-wrap">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform rotate-2">2</div>
                                    <h3 class="text-lg md:text-2xl lg:text-3xl text-teal-900 font-black uppercase tracking-tighter">Số ?</h3>
                                </div>
                                <div class="flex items-center gap-2">
                                    <button id="tab-20-2-a-btn" onclick="window.switchTab20_2('a')" class="px-4 py-2 text-base md:text-lg font-black rounded-xl transition-all bg-blue-600 text-white shadow">a</button>
                                    <button id="tab-20-2-b-btn" onclick="window.switchTab20_2('b')" class="px-4 py-2 text-base md:text-lg font-black rounded-xl transition-all text-blue-600 hover:bg-blue-100/50">b</button>
                                    <!-- Nút Hiện/Ẩn bài giải cho giáo viên -->
                                    <button id="btn-toggle-20-2" onclick="window.toggle_20_2_sol()" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 active:scale-95 text-white rounded-2xl font-black text-lg md:text-2xl font-medium lg:text-xl shadow-md transition-all ml-2">Hiện bài giải</button>
                                </div>
                            </div>

                            <div class="space-y-4">
                                <!-- Tab a -->
                                <div id="tab-20-2-a" class="space-y-4 animate-in fade-in duration-300">
                                    <div class="p-4 bg-emerald-50 rounded-[1.5rem] border border-emerald-100 text-xl md:text-3xl lg:text-2xl">
                                        <p class="font-bold text-emerald-800">a) Đổi sang đơn vị lớn hơn:</p>
                                        <p class="text-slate-600 leading-relaxed font-bold mb-4">
                                            Mẫu: 1 g = <span class="inline-flex flex-col items-center align-middle mx-1"><span>1</span><span class="border-t border-slate-700 w-4"></span><span>1000</span></span> kg = 0,001 kg.<br>
                                            Mẫu: 148 ml = <span class="inline-flex flex-col items-center align-middle mx-1"><span>148</span><span class="border-t border-slate-700 w-5"></span><span>1000</span></span> l = 0,148 l.
                                        </p>
                                        <div class="space-y-3 font-bold text-slate-700 mt-2 bg-white p-4 rounded-2xl border border-emerald-100">
                                            <div class="flex items-center gap-1.5 flex-nowrap whitespace-nowrap overflow-x-auto">
                                                <span>1 kg =</span>
                                                <input type="text" id="ans-20-2-a1" class="w-24 h-12 md:w-32 md:h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-black outline-none flex-shrink-0 w-10 md:text-3xl" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                                <span>tấn.</span>
                                            </div>
                                            <div class="flex items-center gap-1.5 flex-nowrap whitespace-nowrap overflow-x-auto">
                                                <span>564 m =</span>
                                                <input type="text" id="ans-20-2-a2" class="w-24 h-12 md:w-32 md:h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-black outline-none flex-shrink-0 w-10 md:text-3xl" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                                <span>km.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Tab b -->
                                <div id="tab-20-2-b" class="hidden space-y-4 animate-in fade-in duration-300">
                                    <div class="p-4 bg-teal-50 rounded-[1.5rem] border border-teal-100 text-xl md:text-3xl lg:text-2xl">
                                        <p class="font-bold text-teal-800">b) Đổi sang đơn vị bé hơn:</p>
                                        <p class="text-slate-600 leading-relaxed font-bold mb-4">
                                            Mẫu: 2,3 km = 2<span class="inline-flex flex-col items-center align-middle mx-1"><span>3</span><span class="border-t border-slate-700 w-3"></span><span>10</span></span> km = 2 km 300 m = 2300 m.
                                        </p>
                                        <div class="space-y-3 font-bold text-slate-700 mt-2 bg-white p-4 rounded-2xl border border-teal-100">
                                            <div class="flex items-center gap-1.5 flex-nowrap whitespace-nowrap overflow-x-auto">
                                                <span>3,2 m =</span>
                                                <input type="text" id="ans-20-2-b1" class="w-24 h-12 md:w-32 md:h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-black outline-none flex-shrink-0 w-10 md:text-3xl" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                                <span>mm.</span>
                                            </div>
                                            <div class="flex items-center gap-1.5 flex-nowrap whitespace-nowrap overflow-x-auto">
                                                <span>4,5 kg =</span>
                                                <input type="text" id="ans-20-2-b2" class="w-24 h-12 md:w-32 md:h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-black outline-none flex-shrink-0 w-10 md:text-3xl" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                                <span>g.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Lời giải toán (Ẩn mặc định, dành cho giáo viên) -->
                                <div id="sol-20-2-container" class="hidden bg-slate-50 p-4 md:p-6 rounded-3xl border border-slate-200 font-bold text-slate-700 space-y-4">
                                    <div class="text-center text-teal-800 font-black text-xl md:text-3xl border-b border-slate-200 pb-2">BÀI GIẢI CHI TIẾT</div>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg md:text-2xl leading-relaxed">
                                        <div class="space-y-2 bg-emerald-50/20 p-4 rounded-2xl border border-emerald-100">
                                            <div class="font-black text-emerald-800 border-b border-emerald-100 pb-1">Đáp án câu a:</div>
                                            <div>1 kg = 0,001 tấn</div>
                                            <div>564 m = 0,564 km</div>
                                        </div>
                                        <div class="space-y-2 bg-teal-50/20 p-4 rounded-2xl border border-teal-100">
                                            <div class="font-black text-teal-800 border-b border-teal-100 pb-1">Đáp án câu b:</div>
                                            <div>3,2 m = 3200 mm</div>
                                            <div>4,5 kg = 4500 g</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end mt-2">
                                <button id="btn-check-20-2" onclick="window.check_20_2()" class="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Trang 3: Bài 3 (Đo bút & Xà đơn - Ẩn mặc định) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="glass-card p-4 md:p-6 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden">
                            <div class="flex items-center justify-between gap-4 mb-2 flex-wrap">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 md:w-12 md:h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">3</div>
                                    <h3 class="text-lg md:text-2xl lg:text-3xl text-teal-900 font-black uppercase tracking-tighter">Tìm số thập phân và xác định các phần</h3>
                                </div>
                                <div class="flex items-center gap-2">
                                    <button id="tab-20-3-a-btn" onclick="window.switchTab20_3('a')" class="px-4 py-2 text-base md:text-lg font-black rounded-xl transition-all bg-blue-600 text-white shadow">a</button>
                                    <button id="tab-20-3-b-btn" onclick="window.switchTab20_3('b')" class="px-4 py-2 text-base md:text-lg font-black rounded-xl transition-all text-blue-600 hover:bg-blue-100/50">b</button>
                                    <!-- Nút Hiện/Ẩn bài giải cho giáo viên -->
                                    <button id="btn-toggle-20-3" onclick="window.toggle_20_3_sol()" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 active:scale-95 text-white rounded-2xl font-black text-lg md:text-2xl font-medium lg:text-xl shadow-md transition-all ml-2">Hiện bài giải</button>
                                </div>
                            </div>

                            <div class="space-y-4">
                                <!-- Tab a -->
                                <div id="tab-20-3-a" class="space-y-4 animate-in fade-in duration-300">
                                    <div class="p-4 bg-emerald-50 rounded-[1.5rem] border border-emerald-100 text-xl md:text-3xl font-bold space-y-2">
                                        <p class="text-emerald-800 font-black">a) Bút máy:</p>
                                        <p class="text-slate-600 font-medium">Bút máy dài 132 mm. Hãy viết số đo chiều dài bút dưới dạng cm và cho biết phần nguyên, phần thập phân của số đó.</p>
                                    </div>
                                    
                                    <!-- Khung hình ảnh bút máy -->
                                    <div class="w-full flex justify-center">
                                        <img src="assets/images/toan/tiet20_butmay.png" onerror="this.style.display='none'; document.getElementById('placeholder-butmay').style.display='flex';" class="max-w-full h-auto rounded-2xl shadow" />
                                        <div id="placeholder-butmay" class="hidden w-full w-full h-44 bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center p-4 text-slate-500 font-bold text-center">
                                            <span class="text-3xl md:text-5xl mb-1">🖋️</span>
                                            <span class="text-sm">Hình ảnh cái bút máy (132 mm)</span>
                                            <span class="text-xs text-slate-400 font-normal">Vui lòng lưu ảnh vào: assets/images/toan/tiet20_butmay.png</span>
                                        </div>
                                    </div>

                                    <!-- Vùng điền câu trả lời câu a -->
                                    <div class="bg-emerald-50/20 p-4 border border-emerald-100 rounded-2xl space-y-2 font-bold text-slate-700">
                                        <div class="flex items-center gap-1.5 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>- Chiều dài bút máy là: 132 mm =</span>
                                            <input type="text" id="ans-20-3-a1" class="w-20 h-12 md:w-28 md:h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-bold outline-none flex-shrink-0 w-10 md:text-3xl" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                            <span>cm.</span>
                                        </div>
                                        <div class="flex items-center gap-3 flex-wrap">
                                            <div class="flex items-center gap-1.5">
                                                <span>Phần nguyên:</span>
                                                <input type="text" id="ans-20-3-a2" class="w-16 h-12 md:w-20 md:h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-bold outline-none w-10 md:text-3xl" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                            </div>
                                            <div class="flex items-center gap-1.5">
                                                <span>Phần thập phân:</span>
                                                <input type="text" id="ans-20-3-a3" class="w-16 h-12 md:w-20 md:h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-bold outline-none w-10 md:text-3xl" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Tab b -->
                                <div id="tab-20-3-b" class="hidden space-y-4 animate-in fade-in duration-300">
                                    <div class="p-4 bg-emerald-50 rounded-[1.5rem] border border-emerald-100 text-xl md:text-3xl font-bold space-y-2">
                                        <p class="text-emerald-800 font-black">b) Xà đơn:</p>
                                        <p class="text-slate-600 font-medium">Rô-bốt leo xà đơn cao 165 cm. Hãy viết số đo chiều cao xà đơn dưới dạng mét và cho biết phần nguyên, phần thập phân của số đó.</p>
                                    </div>
                                    
                                    <!-- Khung hình ảnh xà đơn -->
                                    <div class="w-full flex justify-center">
                                        <img src="assets/images/toan/tiet20_xadon.png" onerror="this.style.display='none'; document.getElementById('placeholder-xadon').style.display='flex';" class="max-w-full h-auto rounded-2xl shadow" />
                                        <div id="placeholder-xadon" class="hidden w-full w-full h-56 bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center p-4 text-slate-500 font-bold text-center">
                                            <span class="text-3xl md:text-5xl mb-1">🏋️‍♂️</span>
                                            <span class="text-sm">Hình ảnh Rô-bốt leo xà đơn (165 cm)</span>
                                            <span class="text-xs text-slate-400 font-normal">Vui lòng lưu ảnh vào: assets/images/toan/tiet20_xadon.png</span>
                                        </div>
                                    </div>

                                    <!-- Vùng điền câu trả lời câu b -->
                                    <div class="bg-teal-50/30 p-4 border border-teal-100 rounded-2xl space-y-2 font-bold text-slate-700">
                                        <div class="flex items-center gap-1.5 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span>- Chiều cao xà đơn là: 165 cm =</span>
                                            <input type="text" id="ans-20-3-b1" class="w-20 h-12 md:w-28 md:h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-bold outline-none flex-shrink-0 w-10 md:text-3xl" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                            <span>m.</span>
                                        </div>
                                        <div class="flex items-center gap-3 flex-wrap">
                                            <div class="flex items-center gap-1.5">
                                                <span>Phần nguyên:</span>
                                                <input type="text" id="ans-20-3-b2" class="w-16 h-12 md:w-20 md:h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-bold outline-none w-10 md:text-3xl" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                            </div>
                                            <div class="flex items-center gap-1.5">
                                                <span>Phần thập phân:</span>
                                                <input type="text" id="ans-20-3-b3" class="w-16 h-12 md:w-20 md:h-12 border-2 border-teal-300 rounded-xl text-center text-teal-600 font-bold outline-none w-10 md:text-3xl" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Bài giải (Ẩn mặc định, dành cho giáo viên) -->
                                <div id="sol-20-3-container" class="hidden bg-slate-50 p-4 md:p-6 rounded-3xl border border-slate-200 font-bold text-slate-700 space-y-4">
                                    <div class="text-center text-teal-800 font-black text-xl md:text-3xl border-b border-slate-200 pb-2">BÀI GIẢI CHI TIẾT</div>
                                    <div class="space-y-4 text-base md:text-lg lg:text-2xl leading-relaxed">
                                        <div class="bg-emerald-50/20 p-4 rounded-2xl border border-emerald-100 space-y-1">
                                            <div class="font-black text-emerald-800">Đáp án câu a (Bút máy):</div>
                                            <div>Chiều dài: 132 mm = 13,2 cm</div>
                                            <div>Phần nguyên: 13</div>
                                            <div>Phần thập phân: 2</div>
                                        </div>
                                        <div class="bg-teal-50/20 p-4 rounded-2xl border border-teal-100 space-y-1">
                                            <div class="font-black text-teal-800">Đáp án câu b (Xà đơn):</div>
                                            <div>Chiều cao: 165 cm = 1,65 m</div>
                                            <div>Phần nguyên: 1</div>
                                            <div>Phần thập phân: 65</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end mt-2">
                                <button id="btn-check-20-3" onclick="window.check_20_3()" class="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Điều hướng -->
                    </div>

        <script>
            window.switchTab20_2 = function(tab) {
                document.getElementById('tab-20-2-a').classList.add('hidden');
                document.getElementById('tab-20-2-b').classList.add('hidden');
                document.getElementById('tab-20-2-a-btn').className = 'px-4 py-2 text-base md:text-lg font-black rounded-xl transition-all text-blue-600 hover:bg-blue-100/50';
                document.getElementById('tab-20-2-b-btn').className = 'px-4 py-2 text-base md:text-lg font-black rounded-xl transition-all text-blue-600 hover:bg-blue-100/50';

                document.getElementById('tab-20-2-' + tab).classList.remove('hidden');
                document.getElementById('tab-20-2-' + tab + '-btn').className = 'px-4 py-2 text-base md:text-lg font-black rounded-xl transition-all bg-blue-600 text-white shadow';
            };

            window.switchTab20_3 = function(tab) {
                document.getElementById('tab-20-3-a').classList.add('hidden');
                document.getElementById('tab-20-3-b').classList.add('hidden');
                document.getElementById('tab-20-3-a-btn').className = 'px-4 py-2 text-base md:text-lg font-black rounded-xl transition-all text-blue-600 hover:bg-blue-100/50';
                document.getElementById('tab-20-3-b-btn').className = 'px-4 py-2 text-base md:text-lg font-black rounded-xl transition-all text-blue-600 hover:bg-blue-100/50';

                document.getElementById('tab-20-3-' + tab).classList.remove('hidden');
                document.getElementById('tab-20-3-' + tab + '-btn').className = 'px-4 py-2 text-base md:text-lg font-black rounded-xl transition-all bg-blue-600 text-white shadow';
            };

            window.toggle_20_2_sol = function() {
                var container = document.getElementById('sol-20-2-container');
                var btn = document.getElementById('btn-toggle-20-2');
                if (!container || !btn) return;
                if (container.classList.contains('hidden')) {
                    container.classList.remove('hidden');
                    btn.textContent = 'Ẩn bài giải';
                } else {
                    container.classList.add('hidden');
                    btn.textContent = 'Hiện bài giải';
                }
            };

            window.toggle_20_3_sol = function() {
                var container = document.getElementById('sol-20-3-container');
                var btn = document.getElementById('btn-toggle-20-3');
                if (!container || !btn) return;
                if (container.classList.contains('hidden')) {
                    container.classList.remove('hidden');
                    btn.textContent = 'Ẩn bài giải';
                } else {
                    container.classList.add('hidden');
                    btn.textContent = 'Hiện bài giải';
                }
            };

            function normalize(str) {
                if (!str) return '';
                return str.toString().replace(/\\s+/g, '').replace(/,/g, '.').replace(/\\./g, ',').trim().toLowerCase();
            }

            function normalizeCompare(str, standard) {
                // Hỗ trợ cả hai định dạng dấu phẩy hoặc dấu chấm thập phân
                var norm = normalize(str);
                return norm === standard.replace('.', ',') || norm === standard.replace(',', '.');
            }

            // ==================== BÀI 1 ====================
            window.check_20_1 = function() {
                var a1 = normalize(document.getElementById('ans-20-1-a1').value);
                var a2 = normalize(document.getElementById('ans-20-1-a2').value);
                var a3 = normalize(document.getElementById('ans-20-1-a3').value);
                var a4 = normalize(document.getElementById('ans-20-1-a4').value);
                var b1 = document.getElementById('ans-20-1-b1').value.trim().toLowerCase();
                var b2 = document.getElementById('ans-20-1-b2').value.trim().toLowerCase();
                var b3 = document.getElementById('ans-20-1-b3').value.trim().toLowerCase();
                var b4 = document.getElementById('ans-20-1-b4').value.trim().toLowerCase();

                var isA = (a1==='0,4' && a2==='0,5' && a3==='0,6' && a4==='0,7');
                var isB = (b1.replace(/\\s+/g,'')==='khôngphẩybốn' && b2.replace(/\\s+/g,'')==='khôngphẩynăm' && b3.replace(/\\s+/g,'')==='khôngphẩykhôngbốn' && b4.replace(/\\s+/g,'')==='khôngphẩykhôngnăm');

                var isCorrect = (isA && isB);
                var rightAns = "a) 0,4 ; 0,5 ; 0,6 ; 0,7. b) không phẩy bốn, không phẩy năm, không phẩy không bốn, không phẩy không năm";
                var studentAns = "a) " + a1 + ";" + a2 + ";" + a3 + ";" + a4 + " b) " + b1 + ";" + b2;

                var meta = window.MATH_BUILDER_METADATA.bai_tap[0];
                if (window.showMathFeedback) window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-20-1', 0, 8, isCorrect ? 8 : 0);
                }
            };

            // ==================== BÀI 2 ====================
            window.check_20_2 = function() {
                var a1 = normalize(document.getElementById('ans-20-2-a1').value);
                var a2 = normalize(document.getElementById('ans-20-2-a2').value);
                var b1 = normalize(document.getElementById('ans-20-2-b1').value);
                var b2 = normalize(document.getElementById('ans-20-2-b2').value);

                var isA = (a1==='0,001' && a2==='0,564');
                var isB = (b1==='3200' && b2==='4500');

                var isCorrect = (isA && isB);
                var rightAns = "a) 0,001 ; 0,564. b) 3200 ; 4500";
                var studentAns = "a) " + a1 + ";" + a2 + " b) " + b1 + ";" + b2;

                var meta = window.MATH_BUILDER_METADATA.bai_tap[1];
                if (window.showMathFeedback) window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-20-2', 0, 4, isCorrect ? 4 : 0);
                }
            };

            // ==================== BÀI 3 ====================
            window.check_20_3 = function() {
                var a1 = normalize(document.getElementById('ans-20-3-a1').value);
                var a2 = normalize(document.getElementById('ans-20-3-a2').value);
                var a3 = normalize(document.getElementById('ans-20-3-a3').value);
                var b1 = normalize(document.getElementById('ans-20-3-b1').value);
                var b2 = normalize(document.getElementById('ans-20-3-b2').value);
                var b3 = normalize(document.getElementById('ans-20-3-b3').value);

                var isA = (a1==='13,2' && a2==='13' && a3==='2');
                var isB = (b1==='1,65' && b2==='1' && b3==='65');

                var isCorrect = (isA && isB);
                var rightAns = "a) 13,2 (Nguyên: 13, Thập phân: 2) ; b) 1,65 (Nguyên: 1, Thập phân: 65)";
                var studentAns = "a) " + a1 + " (" + a2 + ";" + a3 + ") b) " + b1;

                var meta = window.MATH_BUILDER_METADATA.bai_tap[2];
                if (window.showMathFeedback) window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-20-3', 0, 6, isCorrect ? 6 : 0);
                }
            };
        </script>
    `,
    "quizPool": [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "metadata": metadata
};

window.lesson20 = lesson20;
export default lesson20;
