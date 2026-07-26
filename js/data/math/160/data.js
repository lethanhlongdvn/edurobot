export const lesson160 = {
    period: "160",
    title: "ÔN TẬP TỈ SỐ, TỈ SỐ PHẦN TRĂM",
    topic: "Luyện tập",
    week: "32",

    content: `
        <div class="space-y-6 md:space-y-10">
            <div class="bg-blue-50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border-4 border-blue-200 shadow-xl">
                <h3 class="text-2xl md:text-3xl font-black text-blue-700 mb-6 md:mb-8 uppercase tracking-wider text-center">Kiến thức cần nhớ</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 font-bold">
                    <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border-l-8 border-blue-500">
                        <p class="text-xl md:text-2xl text-blue-600 mb-4 underline">1. Tỉ số:</p>
                        <p class="text-xl md:text-2xl text-gray-700 leading-relaxed">
                            Tỉ số của hai số a và b (với b ≠ 0) là kết quả của phép chia a : b, thường được viết dưới dạng phân số <span class="text-blue-700 text-2xl md:text-3xl font-black">a/b</span>.
                        </p>
                    </div>
                    <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border-l-8 border-emerald-500">
                        <p class="text-xl md:text-2xl text-emerald-600 mb-4 underline">2. Các bài toán điển hình:</p>
                        <ul class="space-y-3 text-xl md:text-2xl text-gray-700">
                            <li>• Bài toán Tìm hai số khi biết <span class="text-emerald-700">Tổng và Tỉ số</span>.</li>
                            <li>• Bài toán Tìm hai số khi biết <span class="text-rose-700">Hiệu và Tỉ số</span>.</li>
                            <li>• Bài toán liên quan đến <span class="text-blue-700">Tỉ lệ bản đồ</span>.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="space-y-12 pb-10">
            <!-- Bài 1 -->
            <div id="lesson160_b1" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500">
                <div class="flex items-center gap-6 mb-8 md:mb-10">
                    <div class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                    <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide">Bài 1. Chọn câu trả lời đúng</h3>
                </div>
                
                <div class="p-6 md:p-8 bg-blue-50 rounded-[2rem] md:rounded-[2.5rem] border-4 border-blue-200">
                    <p class="text-xl md:text-3xl leading-relaxed text-gray-800 mb-8 font-medium">
                        Lớp 5A có 32 bạn. Để chuẩn bị cho chuyến đi tham quan dã ngoại, cả lớp đã thống nhất chọn một trong hai phương án: lên rừng hoặc xuống biển. Kết quả lấy ý kiến của các bạn như sau: <span class="text-emerald-700 font-black">13 bạn chọn lên rừng</span>, <span class="text-blue-700 font-black">19 bạn chọn xuống biển</span>.
                    </p>
                    <p class="text-2xl md:text-3xl font-black text-blue-800 mb-8 italic">Tỉ số của số bạn chọn lên rừng và số bạn chọn xuống biển là:</p>
                    
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <button onclick="window.select160_1('A')" id="btn-160-1-A" class="flex flex-col items-center gap-2 p-6 bg-white rounded-3xl border-4 border-blue-100 hover:border-blue-400 transition-all text-2xl md:text-3xl font-black">
                            <span class="text-blue-400 text-xl md:text-2xl">A</span>
                            <div class="flex flex-col items-center"><span>13</span><div class="w-10 md:w-12 h-1 bg-gray-800"></div><span>32</span></div>
                        </button>
                        <button onclick="window.select160_1('B')" id="btn-160-1-B" class="flex flex-col items-center gap-2 p-6 bg-white rounded-3xl border-4 border-blue-100 hover:border-blue-400 transition-all text-2xl md:text-3xl font-black">
                            <span class="text-blue-400 text-xl md:text-2xl">B</span>
                            <div class="flex flex-col items-center"><span>19</span><div class="w-10 md:w-12 h-1 bg-gray-800"></div><span>32</span></div>
                        </button>
                        <button onclick="window.select160_1('C')" id="btn-160-1-C" class="flex flex-col items-center gap-2 p-6 bg-white rounded-3xl border-4 border-blue-100 hover:border-blue-400 transition-all text-2xl md:text-3xl font-black">
                            <span class="text-blue-400 text-xl md:text-2xl">C</span>
                            <div class="flex flex-col items-center"><span>13</span><div class="w-10 md:w-12 h-1 bg-gray-800"></div><span>19</span></div>
                        </button>
                        <button onclick="window.select160_1('D')" id="btn-160-1-D" class="flex flex-col items-center gap-2 p-6 bg-white rounded-3xl border-4 border-blue-100 hover:border-blue-400 transition-all text-2xl md:text-3xl font-black">
                            <span class="text-blue-400 text-xl md:text-2xl">D</span>
                            <div class="flex flex-col items-center"><span>19</span><div class="w-10 md:w-12 h-1 bg-gray-800"></div><span>13</span></div>
                        </button>
                    </div>
                    <input type="hidden" id="160-1-ans">
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-160-1" onclick="window.check_160_1()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="lesson160_b2" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-emerald-500">
                <div class="flex items-center gap-6 mb-8 md:mb-10">
                    <div class="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                    <h3 class="text-2xl md:text-3xl font-black text-emerald-700 uppercase tracking-wide">Bài 2. Giải bài toán</h3>
                </div>
                
                <div class="p-6 md:p-8 bg-emerald-50 rounded-[2rem] md:rounded-[2.5rem] border-4 border-emerald-200 text-xl md:text-3xl font-bold leading-relaxed">
                    <p class="mb-8">
                        Hưởng ứng phong trào quyên góp sách vào thư viện để xây dựng tủ sách dùng chung, lớp 5A và lớp 5B quyên góp được <span class="text-emerald-700 underline">126 quyển sách</span>. Biết rằng số quyển sách lớp 5A quyên góp bằng <span class="text-blue-700 underline">5/4</span> số quyển sách lớp 5B quyên góp. Hỏi mỗi lớp quyên góp bao nhiêu quyển sách vào thư viện?
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="bg-white p-6 md:p-8 rounded-3xl border-2 border-emerald-100 flex flex-col items-center gap-4">
                            <span class="text-emerald-800 uppercase text-lg md:text-2xl">Lớp 5A quyên góp:</span>
                            <div class="flex items-center gap-3">
                                <input id="160-2-1" class="w-28 md:w-32 h-16 md:h-20 text-center bg-emerald-50 border-4 border-emerald-300 rounded-2xl text-3xl md:text-5xl font-black" placeholder="?">
                                <span class="text-xl md:text-2xl">quyển</span>
                            </div>
                        </div>
                        <div class="bg-white p-6 md:p-8 rounded-3xl border-2 border-emerald-100 flex flex-col items-center gap-4">
                            <span class="text-emerald-800 uppercase text-lg md:text-2xl">Lớp 5B quyên góp:</span>
                            <div class="flex items-center gap-3">
                                <input id="160-2-2" class="w-28 md:w-32 h-16 md:h-20 text-center bg-emerald-50 border-4 border-emerald-300 rounded-2xl text-3xl md:text-5xl font-black" placeholder="?">
                                <span class="text-xl md:text-2xl">quyển</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-160-2" onclick="window.check_160_2()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="lesson160_b3" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-sky-500">
                <div class="flex items-center gap-6 mb-8 md:mb-10">
                    <div class="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                    <h3 class="text-2xl md:text-3xl font-black text-sky-700 uppercase tracking-wide">Bài 3. Số ?</h3>
                </div>
                
                <div class="p-6 md:p-8 bg-sky-50 rounded-[2rem] md:rounded-[2.5rem] border-4 border-sky-200 text-xl md:text-3xl">
                    <p class="mb-8 font-medium leading-relaxed">
                        Trên bản đồ tỉ lệ <span class="font-black text-sky-700">1 : 3 000</span> của một khu đô thị, thửa đất xây dựng trường tiểu học là hình chữ nhật có <span class="font-black text-sky-700">chiều dài 3 cm</span>, <span class="font-black text-sky-700">chiều rộng 2 cm</span>.
                    </p>

                    <!-- Map Re-creation -->
                    <div class="bg-[#d4e157]/30 p-6 md:p-10 rounded-[2rem] border-2 border-[#afb42b] mb-10 overflow-hidden shadow-inner">
                        <div class="relative w-full aspect-[16/8] bg-[#f0f4c3] border-4 border-[#afb42b] p-4 flex gap-4 shadow-lg">
                            <!-- Khu nhà ở -->
                            <div class="flex-1 bg-[#4fc3f7] border-2 border-[#0288d1] rounded-xl flex items-center justify-center shadow-md p-4">
                                <span class="text-center font-black text-white text-lg md:text-2xl drop-shadow-md">Khu nhà ở</span>
                            </div>
                            <!-- Center Column -->
                            <div class="flex-[1.2] flex flex-col gap-4">
                                <!-- Trường tiểu học -->
                                <div class="flex-1 bg-[#ef5350] border-2 border-[#c62828] rounded-xl flex items-center justify-center shadow-md p-4">
                                    <span class="text-center font-black text-white text-lg md:text-2xl drop-shadow-md">Trường tiểu học</span>
                                </div>
                                <!-- Quảng trường -->
                                <div class="flex-1 bg-[#66bb6a] border-2 border-[#2e7d32] rounded-xl flex items-center justify-center shadow-md p-4">
                                    <span class="text-center font-black text-white text-lg md:text-2xl drop-shadow-md">Quảng trường</span>
                                </div>
                            </div>
                            <!-- Right Column -->
                            <div class="flex-[0.6] bg-[#f06292] border-2 border-[#ad1457] rounded-xl flex items-center justify-center shadow-md p-4">
                                <span class="text-center font-black text-white text-lg md:text-2xl drop-shadow-md writing-vertical">Khu thương mại</span>
                            </div>
                            <div class="flex-[0.8] bg-[#ffa726] border-2 border-[#ef6c00] rounded-xl flex items-center justify-center shadow-md p-4">
                                <span class="text-center font-black text-white text-lg md:text-2xl drop-shadow-md writing-vertical">Khu vui chơi</span>
                            </div>
                            
                            <!-- Scale Overlay -->
                            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 px-4 md:px-6 py-2 rounded-full border-2 border-[#afb42b] font-black text-xl md:text-2xl text-[#827717]">
                                Tỉ lệ 1 : 3 000
                            </div>
                        </div>
                    </div>

                    <div class="space-y-6 font-black text-gray-800">
                        <div class="flex flex-wrap items-center gap-4 bg-white p-6 rounded-2xl border-2 border-sky-100 shadow-sm">
                            <span class="text-lg md:text-2xl">a) Chiều dài thật của thửa đất xây dựng trường tiểu học là:</span>
                            <input id="160-3-1" class="w-24 md:w-32 h-14 md:h-16 text-center border-4 border-sky-300 rounded-xl outline-none focus:border-sky-500 bg-sky-50 text-2xl" placeholder="?">
                            <span class="text-lg md:text-2xl">m.</span>
                        </div>
                        <div class="flex flex-wrap items-center gap-4 bg-white p-6 rounded-2xl border-2 border-sky-100 shadow-sm">
                            <span class="text-lg md:text-2xl">b) Chiều rộng thật của thửa đất xây dựng trường tiểu học là:</span>
                            <input id="160-3-2" class="w-24 md:w-32 h-14 md:h-16 text-center border-4 border-sky-300 rounded-xl outline-none focus:border-sky-500 bg-sky-50 text-2xl" placeholder="?">
                            <span class="text-lg md:text-2xl">m.</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-160-3" onclick="window.check_160_3()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 4 -->
            <div id="lesson160_b4" class="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-t-[12px] border-rose-500">
                <div class="flex items-center gap-6 mb-8 md:mb-10">
                    <div class="w-14 h-14 md:w-16 md:h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                    <h3 class="text-2xl md:text-3xl font-black text-rose-700 uppercase tracking-wide">Bài 4. Giải bài toán</h3>
                </div>
                
                <div class="p-6 md:p-8 bg-rose-50 rounded-[2rem] md:rounded-[2.5rem] border-4 border-rose-200 text-xl md:text-3xl font-bold leading-relaxed">
                    <p class="mb-8">
                        Mai và Việt gấp ngôi sao giấy tặng Nam nhân ngày sinh nhật. Việt gấp được ít hơn Mai <span class="text-rose-600 underline">11 ngôi sao</span> và số ngôi sao Việt gấp được bằng <span class="text-blue-600 underline">4/5</span> số ngôi sao Mai gấp được. Hỏi cả hai bạn đã gấp được bao nhiêu ngôi sao?
                    </p>
                    
                    <div class="flex flex-col items-center gap-6 md:gap-8 bg-white p-6 md:p-10 rounded-3xl border-2 border-rose-100 shadow-md">
                        <span class="text-rose-800 uppercase text-lg md:text-2xl font-black text-center">Tổng số ngôi sao hai bạn gấp được là:</span>
                        <div class="flex items-center gap-4">
                            <input id="160-4-1" class="w-32 md:w-40 h-20 md:h-24 text-center bg-rose-50 border-4 border-rose-300 rounded-[1.5rem] md:rounded-[2rem] text-4xl md:text-6xl font-black outline-none focus:border-rose-500" placeholder="?">
                            <span class="text-2xl md:text-3xl font-black">ngôi sao</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-160-4" onclick="window.check_160_4()" class="w-16 h-16 md:w-20 md:h-20 bg-[#ff7b29] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>
        <style>
            .writing-vertical {
                writing-mode: vertical-rl;
                text-orientation: mixed;
                white-space: nowrap;
            }
        </style>
    `,

    quizPool: [
        {
            question: "Lớp 5A có 13 bạn chọn lên rừng, 19 bạn chọn xuống biển. Tỉ số của số bạn chọn lên rừng và số bạn xuống biển là:",
            options: ["13/19", "19/13", "13/32", "19/32"],
            answer: 0
        },
        {
            question: "Lớp 5A có 32 bạn. 13 bạn chọn lên rừng. Tỉ số của số bạn chọn lên rừng và tổng số học sinh lớp là:",
            options: ["13/32", "32/13", "13/19", "19/32"],
            answer: 0
        },
        {
            question: "Tổng số sách hai lớp 5A và 5B là 126 quyển. Tỉ số là 5/4. Số sách lớp 5A là:",
            options: ["70 quyển", "56 quyển", "60 quyển", "66 quyển"],
            answer: 0
        },
        {
            question: "Tổng số sách hai lớp 5A và 5B là 126 quyển. Tỉ số là 5/4. Số sách lớp 5B là:",
            options: ["56 quyển", "70 quyển", "63 quyển", "46 quyển"],
            answer: 0
        },
        {
            question: "Bản đồ tỉ lệ 1 : 3 000. Khoảng cách 1cm trên bản đồ tương ứng với bao nhiêu mét ngoài thực tế?",
            options: ["30 m", "3 m", "300 m", "3 000 m"],
            answer: 0
        },
        {
            question: "Bản đồ tỉ lệ 1 : 3 000. Khoảng cách 3cm trên bản đồ tương ứng với độ dài thật là:",
            options: ["90 m", "9 m", "900 m", "9 000 m"],
            answer: 0
        },
        {
            question: "Việt ít hơn Mai 11 ngôi sao. Tỉ số Việt/Mai là 4/5. Việt gấp được bao nhiêu ngôi sao?",
            options: ["44 ngôi sao", "55 ngôi sao", "11 ngôi sao", "99 ngôi sao"],
            answer: 0
        },
        {
            question: "Việt ít hơn Mai 11 ngôi sao. Tỉ số Việt/Mai là 4/5. Mai gấp được bao nhiêu ngôi sao?",
            options: ["55 ngôi sao", "44 ngôi sao", "11 ngôi sao", "99 ngôi sao"],
            answer: 0
        },
        {
            question: "Tỉ số của hai số 4 và 5 là:",
            options: ["4/5", "5/4", "9/4", "9/5"],
            answer: 0
        },
        {
            question: "Một bản đồ có tỉ lệ 1 : 1 000 000. Nếu đo được 2cm trên bản đồ thì độ dài thật là:",
            options: ["20 km", "2 km", "200 km", "200 m"],
            answer: 0
        },
        {
            question: "Hiệu của hai số là 15. Tỉ số của hai số là 2/3. Số lớn là:",
            options: ["45", "30", "15", "60"],
            answer: 0
        },
        {
            question: "Tổng của hai số là 100. Tỉ số của hai số là 1/4. Số bé là:",
            options: ["20", "25", "80", "10"],
            answer: 0
        },
        {
            question: "Trên bản đồ tỉ lệ 1 : 500, chiều dài 4cm ứng với độ dài thật là:",
            options: ["20 m", "200 m", "2 m", "2000 cm"],
            answer: 0
        },
        {
            question: "Tỉ số phần trăm của 15 và 60 là:",
            options: ["25%", "15%", "40%", "20%"],
            answer: 0
        },
        {
            question: "Lãi suất tiết kiệm là 0,5% một tháng. Gửi 10 000 000 đồng thì sau một tháng tiền lãi là:",
            options: ["50 000 đồng", "5 000 đồng", "500 000 đồng", "20 000 đồng"],
            answer: 0
        }
    ]
};