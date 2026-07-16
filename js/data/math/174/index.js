export const lesson174 = {
    id: 174,
    title: "BÀI 75: ÔN TẬP CHUNG - TIẾT 3",
    page: "Trang 130-132",
    content: `<div class="flex flex-col gap-4 text-2xl md:text-3xl">
        <p>Hôm nay chúng ta sẽ cùng ôn tập kiến thức về:</p>
        <ul class="list-disc ml-8">
            <li>Đơn vị đo độ dài, khối lượng, thể tích.</li>
            <li>Tỉ số phần trăm và lãi suất.</li>
            <li>Diện tích hình tam giác, hình thang, hình tròn.</li>
            <li>Diện tích xung quanh, diện tích toàn phần và thể tích hình hộp chữ nhật, hình lập phương.</li>
            <li>Bài toán về chuyển động đều.</li>
        </ul>
    </div>`,
    practice: `<div class="flex flex-col gap-12">
        <!-- Bài 1 -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border-2 border-blue-100">
            <h3 class="text-2xl md:text-3xl font-bold text-blue-600 mb-4 flex items-center gap-3">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">1</span>
                Chọn câu trả lời đúng.
            </h3>
            <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-3">
                    <div class="flex items-start gap-3">
                        <div class="flex-shrink-0 w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center font-bold text-blue-500">a</div>
                        <span class="text-2xl md:text-3xl">Số thập phân thích hợp viết vào chỗ chấm của <span class="bg-orange-100 px-2 rounded">75 m = ... km</span> là:</span>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 ml-11">
                        <button onclick="selectMCQ(this, 'ans_174_1a', 0)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">A. 7,5</button>
                        <button onclick="selectMCQ(this, 'ans_174_1a', 1)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">B. 0,75</button>
                        <button onclick="selectMCQ(this, 'ans_174_1a', 2)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">C. 0,075</button>
                        <button onclick="selectMCQ(this, 'ans_174_1a', 3)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">D. 0,0075</button>
                    </div>
                    <input type="hidden" id="ans_174_1a">
                </div>
                <div class="flex flex-col gap-3">
                    <div class="flex items-start gap-3">
                        <div class="flex-shrink-0 w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center font-bold text-blue-500">b</div>
                        <span class="text-2xl md:text-3xl">Số thập phân thích hợp viết vào chỗ chấm của <span class="bg-orange-100 px-2 rounded">2 kg 45 g = ... kg</span> là:</span>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 ml-11">
                        <button onclick="selectMCQ(this, 'ans_174_1b', 0)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">A. 245</button>
                        <button onclick="selectMCQ(this, 'ans_174_1b', 1)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">B. 2,45</button>
                        <button onclick="selectMCQ(this, 'ans_174_1b', 2)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">C. 2,045</button>
                        <button onclick="selectMCQ(this, 'ans_174_1b', 3)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">D. 0,245</button>
                    </div>
                    <input type="hidden" id="ans_174_1b">
                </div>
                <div class="flex flex-col gap-3">
                    <div class="flex items-start gap-3">
                        <div class="flex-shrink-0 w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center font-bold text-blue-500">c</div>
                        <span class="text-2xl md:text-3xl">Số thập phân thích hợp viết vào chỗ chấm của <span class="bg-orange-100 px-2 rounded">652 ml = ... l</span> là:</span>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 ml-11">
                        <button onclick="selectMCQ(this, 'ans_174_1c', 0)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">A. 6,52</button>
                        <button onclick="selectMCQ(this, 'ans_174_1c', 1)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">B. 0,652</button>
                        <button onclick="selectMCQ(this, 'ans_174_1c', 2)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">C. 0,0652</button>
                        <button onclick="selectMCQ(this, 'ans_174_1c', 3)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">D. 652</button>
                    </div>
                    <input type="hidden" id="ans_174_1c">
                </div>
                <div class="flex justify-center mt-4">
                    <button id="lesson174_b1_btn" onclick="LessonMath.checkExercise(174, 1)" class="px-8 py-3 bg-blue-600 text-white rounded-xl text-2xl md:text-3xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Kiểm tra kết quả</button>
                </div>
            </div>
        </div>

        <!-- Bài 2 -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border-2 border-blue-100">
            <h3 class="text-2xl md:text-3xl font-bold text-blue-600 mb-4 flex items-center gap-3">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">2</span>
                Chọn câu trả lời đúng.
            </h3>
            <div class="flex flex-col gap-8">
                <div class="flex flex-col gap-3">
                    <div class="flex items-start gap-3">
                        <div class="flex-shrink-0 w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center font-bold text-blue-500">a</div>
                        <p class="text-2xl md:text-3xl leading-relaxed">Trong 20 hộp sữa chua có 12 hộp là loại sữa chua không đường, còn lại là loại sữa chua có đường. Tỉ số phần trăm của số hộp sữa chua có đường và tổng số hộp sữa chua là:</p>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 ml-11">
                        <button onclick="selectMCQ(this, 'ans_174_2a', 0)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">A. 8%</button>
                        <button onclick="selectMCQ(this, 'ans_174_2a', 1)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">B. 20%</button>
                        <button onclick="selectMCQ(this, 'ans_174_2a', 2)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">C. 4%</button>
                        <button onclick="selectMCQ(this, 'ans_174_2a', 3)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">D. 40%</button>
                    </div>
                    <input type="hidden" id="ans_174_2a">
                </div>
                <div class="flex flex-col gap-3">
                    <div class="flex items-start gap-3">
                        <div class="flex-shrink-0 w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center font-bold text-blue-500">b</div>
                        <p class="text-2xl md:text-3xl leading-relaxed">Lãi suất tiết kiệm là 0,5%/tháng. Bác Tư gửi tiết kiệm 10 000 000 đồng thì sau 1 tháng nhận được cả tiền gửi và tiền lãi là:</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 ml-11">
                        <button onclick="selectMCQ(this, 'ans_174_2b', 0)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors text-left">A. 150 000 đồng</button>
                        <button onclick="selectMCQ(this, 'ans_174_2b', 1)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors text-left">B. 1 050 000 đồng</button>
                        <button onclick="selectMCQ(this, 'ans_174_2b', 2)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors text-left">C. 10 050 000 đồng</button>
                        <button onclick="selectMCQ(this, 'ans_174_2b', 3)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors text-left">D. 1 500 000 đồng</button>
                    </div>
                    <input type="hidden" id="ans_174_2b">
                </div>
                <div class="flex justify-center mt-4">
                    <button id="lesson174_b2_btn" onclick="LessonMath.checkExercise(174, 2)" class="px-8 py-3 bg-blue-600 text-white rounded-xl text-2xl md:text-3xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Kiểm tra kết quả</button>
                </div>
            </div>
        </div>

        <!-- Bài 3 -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border-2 border-blue-100">
            <h3 class="text-2xl md:text-3xl font-bold text-blue-600 mb-4 flex items-center gap-3">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">3</span>
                Nam cắt giấy màu được 3 hình dưới đây.
            </h3>
            <div class="flex flex-col gap-8">
                <div class="flex flex-wrap justify-center gap-12 items-end py-4">
                    <!-- Tam giác -->
                    <div class="flex flex-col items-center gap-3">
                        <svg width="200" height="150" viewBox="0 0 160 120" class="drop-shadow-sm">
                            <path d="M20 100 L140 100 L80 20 Z" fill="#FCE7F3" stroke="#DB2777" stroke-width="2"/>
                            <line x1="80" y1="20" x2="80" y2="100" stroke="#DB2777" stroke-width="1" stroke-dasharray="4"/>
                            <rect x="80" y="90" width="10" height="10" fill="none" stroke="#DB2777" stroke-width="1"/>
                            <text x="85" y="65" font-size="14" fill="#DB2777">10 cm</text>
                            <text x="70" y="115" font-size="14" fill="#DB2777">14 cm</text>
                        </svg>
                        <p class="text-xl font-bold text-pink-600">Tam giác</p>
                    </div>
                    <!-- Hình thang -->
                    <div class="flex flex-col items-center gap-3">
                        <svg width="200" height="150" viewBox="0 0 160 120" class="drop-shadow-sm">
                            <path d="M40 30 L120 30 L140 100 L20 100 Z" fill="#FEF3C7" stroke="#D97706" stroke-width="2"/>
                            <line x1="40" y1="30" x2="40" y2="100" stroke="#D97706" stroke-width="1" stroke-dasharray="4"/>
                            <rect x="40" y="90" width="10" height="10" fill="none" stroke="#D97706" stroke-width="1"/>
                            <text x="45" y="65" font-size="14" fill="#D97706">8 cm</text>
                            <text x="70" y="25" font-size="14" fill="#D97706">8 cm</text>
                            <text x="70" y="115" font-size="14" fill="#D97706">12 cm</text>
                        </svg>
                        <p class="text-xl font-bold text-orange-600">Hình thang</p>
                    </div>
                    <!-- Hình tròn -->
                    <div class="flex flex-col items-center gap-3">
                        <svg width="150" height="150" viewBox="0 0 120 120" class="drop-shadow-sm">
                            <circle cx="60" cy="60" r="50" fill="#DBEAFE" stroke="#2563EB" stroke-width="2"/>
                            <line x1="60" y1="60" x2="110" y2="60" stroke="#2563EB" stroke-width="1" stroke-dasharray="4"/>
                            <text x="75" y="55" font-size="14" fill="#2563EB">5 cm</text>
                        </svg>
                        <p class="text-xl font-bold text-blue-600">Hình tròn</p>
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <div class="flex flex-col gap-4">
                        <div class="flex items-start gap-3">
                            <div class="flex-shrink-0 w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center font-bold text-blue-500">a</div>
                            <span class="text-2xl md:text-3xl">Trong các hình trên, hình có diện tích lớn nhất là:</span>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 ml-11">
                            <button onclick="selectMCQ(this, 'ans_174_3a', 0)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">A. Hình tam giác</button>
                            <button onclick="selectMCQ(this, 'ans_174_3a', 1)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">B. Hình thang</button>
                            <button onclick="selectMCQ(this, 'ans_174_3a', 2)" class="p-2 border-2 border-gray-300 rounded-lg text-xl md:text-2xl hover:bg-blue-50 transition-colors">C. Hình tròn</button>
                        </div>
                        <input type="hidden" id="ans_174_3a">
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="flex items-start gap-3">
                            <div class="flex-shrink-0 w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center font-bold text-blue-500">b</div>
                            <span class="text-2xl md:text-3xl">Số ?</span>
                        </div>
                        <div class="flex items-center gap-3 ml-11 flex-wrap">
                            <span class="text-2xl md:text-3xl">Chu vi hình tròn là</span>
                            <input type="text" id="ans_174_3b" class="w-32 p-2 border-2 border-gray-300 rounded-lg text-2xl md:text-3xl focus:outline-none focus:border-blue-500 text-center" placeholder="?">
                            <span class="text-2xl md:text-3xl">cm. (Lấy &pi; = 3,14)</span>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center mt-4">
                    <button id="lesson174_b3_btn" onclick="LessonMath.checkExercise(174, 3)" class="px-8 py-3 bg-blue-600 text-white rounded-xl text-2xl md:text-3xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Kiểm tra kết quả</button>
                </div>
            </div>
        </div>

        <!-- Bài 4 -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border-2 border-blue-100">
            <h3 class="text-2xl md:text-3xl font-bold text-blue-600 mb-4 flex items-center gap-3">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">4</span>
                Cho khối gỗ hình lập phương M và khối gỗ hình hộp chữ nhật N dưới đây.
            </h3>
            <div class="flex flex-col gap-8">
                <div class="flex flex-wrap justify-center gap-16 items-end py-4">
                    <!-- Khối M -->
                    <div class="flex flex-col items-center gap-2">
                        <svg width="150" height="150" viewBox="0 0 120 120" class="drop-shadow-sm">
                            <rect x="20" y="40" width="60" height="60" fill="#FEF3C7" stroke="#D97706" stroke-width="2"/>
                            <path d="M20 40 L40 20 L100 20 L100 80 L80 100" fill="none" stroke="#D97706" stroke-width="2"/>
                            <line x1="80" y1="40" x2="100" y2="20" stroke="#D97706" stroke-width="2"/>
                            <text x="50" y="115" font-size="16" font-style="italic" font-family="serif" fill="#D97706">M</text>
                            <text x="40" y="35" font-size="14" fill="#D97706">5 cm</text>
                        </svg>
                        <p class="text-xl font-bold text-orange-600">Hình lập phương M</p>
                    </div>
                    <!-- Khối N -->
                    <div class="flex flex-col items-center gap-2">
                        <svg width="200" height="150" viewBox="0 0 160 120" class="drop-shadow-sm">
                            <rect x="20" y="50" width="100" height="40" fill="#F3F4F6" stroke="#4B5563" stroke-width="2"/>
                            <path d="M20 50 L40 30 L140 30 L140 70 L120 90" fill="none" stroke="#4B5563" stroke-width="2"/>
                            <line x1="120" y1="50" x2="140" y2="30" stroke="#4B5563" stroke-width="2"/>
                            <text x="70" y="110" font-size="16" font-style="italic" font-family="serif" fill="#4B5563">N</text>
                            <text x="60" y="45" font-size="14" fill="#4B5563">10 cm</text>
                            <text x="125" y="45" font-size="14" fill="#4B5563">3 cm</text>
                            <text x="5" y="75" font-size="14" fill="#4B5563">4 cm</text>
                        </svg>
                        <p class="text-xl font-bold text-gray-700">Hình hộp chữ nhật N</p>
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <div class="flex flex-col gap-4">
                        <div class="flex items-start gap-3">
                            <div class="flex-shrink-0 w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center font-bold text-blue-500">a</div>
                            <span class="text-2xl md:text-3xl font-bold">Số ?</span>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 ml-11">
                            <div class="flex flex-col gap-3">
                                <span class="text-xl md:text-2xl font-semibold text-gray-700 border-b-2 border-blue-200 pb-1">Hình lập phương M</span>
                                <div class="flex items-center gap-2">
                                    <span class="text-xl">Diện tích xung quanh:</span>
                                    <input type="number" id="ans_174_4a_1" class="w-24 p-2 border-2 border-gray-300 rounded-lg text-xl text-center focus:border-blue-500 outline-none" placeholder="?">
                                    <span class="text-xl">cm<sup>2</sup></span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-xl">Diện tích toàn phần:</span>
                                    <input type="number" id="ans_174_4a_3" class="w-24 p-2 border-2 border-gray-300 rounded-lg text-xl text-center focus:border-blue-500 outline-none" placeholder="?">
                                    <span class="text-xl">cm<sup>2</sup></span>
                                </div>
                            </div>
                            <div class="flex flex-col gap-3">
                                <span class="text-xl md:text-2xl font-semibold text-gray-700 border-b-2 border-blue-200 pb-1">Hình hộp chữ nhật N</span>
                                <div class="flex items-center gap-2">
                                    <span class="text-xl">Diện tích xung quanh:</span>
                                    <input type="number" id="ans_174_4a_2" class="w-24 p-2 border-2 border-gray-300 rounded-lg text-xl text-center focus:border-blue-500 outline-none" placeholder="?">
                                    <span class="text-xl">cm<sup>2</sup></span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-xl">Diện tích toàn phần:</span>
                                    <input type="number" id="ans_174_4a_4" class="w-24 p-2 border-2 border-gray-300 rounded-lg text-xl text-center focus:border-blue-500 outline-none" placeholder="?">
                                    <span class="text-xl">cm<sup>2</sup></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="flex items-start gap-3">
                            <div class="flex-shrink-0 w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center font-bold text-blue-500">b</div>
                            <span class="text-2xl md:text-3xl">Thể tích hình nào lớn hơn và lớn hơn bao nhiêu xăng-ti-mét khối?</span>
                        </div>
                        <div class="flex items-center gap-3 ml-11 flex-wrap">
                            <span class="text-xl">Thể tích hình</span>
                            <select id="ans_174_4b_name" class="p-2 border-2 border-gray-300 rounded-lg text-xl focus:border-blue-500 outline-none bg-white">
                                <option value="">--Chọn--</option>
                                <option value="M">M</option>
                                <option value="N">N</option>
                            </select>
                            <span class="text-xl">lớn hơn và lớn hơn</span>
                            <input type="number" id="ans_174_4b_val" class="w-24 p-2 border-2 border-gray-300 rounded-lg text-xl text-center focus:border-blue-500 outline-none" placeholder="?">
                            <span class="text-xl">cm<sup>3</sup>.</span>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center mt-4">
                    <button id="lesson174_b4_btn" onclick="LessonMath.checkExercise(174, 4)" class="px-8 py-3 bg-blue-600 text-white rounded-xl text-2xl md:text-3xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Kiểm tra kết quả</button>
                </div>
            </div>
        </div>

        <!-- Bài 5 -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border-2 border-blue-100">
            <h3 class="text-2xl md:text-3xl font-bold text-blue-600 mb-4 flex items-center gap-3">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">5</span>
                Tìm số tự nhiên hoặc số thập phân thích hợp.
            </h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full border-collapse border-2 border-gray-300 text-xl md:text-2xl">
                    <thead>
                        <tr class="bg-blue-50">
                            <th class="border-2 border-gray-300 p-3">Đối tượng</th>
                            <th class="border-2 border-gray-300 p-3">
                                <div class="flex flex-col items-center gap-2">
                                    <img src="https://img.icons8.com/color/96/eagle.png" class="w-16 h-16" alt="Eagle">
                                    <span>Đại bàng</span>
                                </div>
                            </th>
                            <th class="border-2 border-gray-300 p-3">
                                <div class="flex flex-col items-center gap-2">
                                    <img src="https://img.icons8.com/color/96/cheetah.png" class="w-16 h-16" alt="Cat">
                                    <span>Con báo</span>
                                </div>
                            </th>
                            <th class="border-2 border-gray-300 p-3">
                                <div class="flex flex-col items-center gap-2">
                                    <img src="https://img.icons8.com/color/96/ostrich.png" class="w-16 h-16" alt="Ostrich">
                                    <span>Đà điểu</span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50 transition-colors">
                            <td class="border-2 border-gray-300 p-3 font-bold bg-gray-50">Quãng đường (s)</td>
                            <td class="border-2 border-gray-300 p-3 text-center">24 km</td>
                            <td class="border-2 border-gray-300 p-3 text-center">
                                <div class="flex items-center justify-center gap-1">
                                    <input type="number" id="ans_174_5_cat_s" class="w-24 p-2 border-2 border-gray-300 rounded-lg text-center" placeholder="?">
                                    <span>km</span>
                                </div>
                            </td>
                            <td class="border-2 border-gray-300 p-3 text-center">5 250 m</td>
                        </tr>
                        <tr class="hover:bg-gray-50 transition-colors">
                            <td class="border-2 border-gray-300 p-3 font-bold bg-gray-50">Vận tốc (v)</td>
                            <td class="border-2 border-gray-300 p-3 text-center">96 km/h</td>
                            <td class="border-2 border-gray-300 p-3 text-center">120 km/h</td>
                            <td class="border-2 border-gray-300 p-3 text-center">
                                <div class="flex items-center justify-center gap-1">
                                    <input type="text" id="ans_174_5_ostrich_v" class="w-24 p-2 border-2 border-gray-300 rounded-lg text-center" placeholder="?">
                                    <span>m/s</span>
                                </div>
                            </td>
                        </tr>
                        <tr class="hover:bg-gray-50 transition-colors">
                            <td class="border-2 border-gray-300 p-3 font-bold bg-gray-50">Thời gian (t)</td>
                            <td class="border-2 border-gray-300 p-3 text-center">
                                <div class="flex items-center justify-center gap-1">
                                    <input type="text" id="ans_174_5_eagle_t" class="w-24 p-2 border-2 border-gray-300 rounded-lg text-center" placeholder="?">
                                    <span>giờ</span>
                                </div>
                            </td>
                            <td class="border-2 border-gray-300 p-3 text-center">24 phút</td>
                            <td class="border-2 border-gray-300 p-3 text-center">300 giây</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="flex justify-center mt-6">
                <button id="lesson174_b5_btn" onclick="LessonMath.checkExercise(174, 5)" class="px-8 py-3 bg-blue-600 text-white rounded-xl text-2xl md:text-3xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Kiểm tra kết quả</button>
            </div>
        </div>
    </div>`
};

// Logic xử lý kiểm tra (Validation)
window.check_174_1 = () => {
    const a = document.getElementById("ans_174_1a").value;
    const b = document.getElementById("ans_174_1b").value;
    const c = document.getElementById("ans_174_1c").value;

    let score = 0;
    if (parseInt(a) === 2) score++; // 0,075
    if (parseInt(b) === 2) score++; // 2,045
    if (parseInt(c) === 1) score++; // 0,652

    const isCorrect = score === 3;
    const rightAnswer = "a) C; b) C; c) B";
    const studentAnswer = `a) ${a === '2' ? 'C' : a === '0' ? 'A' : a === '1' ? 'B' : a === '3' ? 'D' : '?'}; b) ${b === '2' ? 'C' : b === '0' ? 'A' : b === '1' ? 'B' : b === '3' ? 'D' : '?'}; c) ${c === '1' ? 'B' : c === '0' ? 'A' : c === '2' ? 'C' : c === '3' ? 'D' : '?'}`;
    const guidance = "Em hãy nhớ lại mối liên hệ giữa các đơn vị đo: 1 km = 1000 m; 1 kg = 1000 g; 1 l = 1000 ml.";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        a) 75 m = 75/1000 km = <b>0,075</b> km. Chọn đáp án <b>C</b>.<br>
        b) 2 kg 45 g = 2 và 45/1000 kg = <b>2,045</b> kg. Chọn đáp án <b>C</b>.<br>
        c) 652 ml = 652/1000 l = <b>0,652</b> l. Chọn đáp án <b>B</b>.<br>
        Em chuyển đổi đơn vị đo rất tốt!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 1. Chọn câu trả lời đúng (Đơn vị đo)", Math.round(score / 3 * 100), "lesson174_b1_btn", 0, 3, score);
    }
};

window.check_174_2 = () => {
    const a = document.getElementById("ans_174_2a").value;
    const b = document.getElementById("ans_174_2b").value;

    let score = 0;
    if (parseInt(a) === 3) score++; // 40%
    if (parseInt(b) === 2) score++; // 10 050 000

    const isCorrect = score === 2;
    const rightAnswer = "a) D; b) C";
    const studentAnswer = `a) ${a === '3' ? 'D' : '?'}; b) ${b === '2' ? 'C' : '?'}`;
    const guidance = "Để tính tỉ số phần trăm, em lấy số hộp sữa chua có đường chia cho tổng số hộp. Để tính lãi suất, em lấy tiền gửi nhân với lãi suất.";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        a) Số hộp sữa chua có đường là: 20 – 12 = 8 (hộp).<br>
        Tỉ số phần trăm là: 8 : 20 = 0,4 = <b>40%</b>. Chọn <b>D</b>.<br>
        b) Tiền lãi sau 1 tháng là: 10 000 000 × 0,5% = 50 000 (đồng).<br>
        Cả tiền gửi và lãi là: 10 000 000 + 50 000 = <b>10 050 000</b> (đồng). Chọn <b>C</b>.<br>
        Em đã giải quyết bài toán thực tế rất xuất sắc!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 2. Tỉ số phần trăm và Lãi suất", Math.round(score / 2 * 100), "lesson174_b2_btn", 0, 2, score);
    }
};

window.check_174_3 = () => {
    const a = document.getElementById("ans_174_3a").value;
    const b = document.getElementById("ans_174_3b").value.trim().replace(',', '.');

    let score = 0;
    if (parseInt(a) === 1) score++; // Hình thang
    if (parseFloat(b) === 31.4) score++;

    const isCorrect = score === 2;
    const rightAnswer = "a) B (Hình thang); b) 31,4";
    const studentAnswer = `a) ${a === '1' ? 'B' : '?'}; b) ${b}`;
    const guidance = "Em hãy tính diện tích của từng hình theo công thức đã học, sau đó so sánh chúng với nhau.";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        - S tam giác = (14 × 10) : 2 = 70 (cm²).<br>
        - S hình thang = (8 + 12) × 8 : 2 = 80 (cm²).<br>
        - S hình tròn = 5 × 5 × 3,14 = 78,5 (cm²).<br>
        a) Vậy <b>Hình thang</b> có diện tích lớn nhất (80 cm²). Chọn <b>B</b>.<br>
        b) Chu vi hình tròn = 5 × 2 × 3,14 = <b>31,4</b> (cm).<br>
        Em nắm rất vững các công thức tính diện tích và chu vi!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 3. Diện tích và Chu vi", Math.round(score / 2 * 100), "lesson174_b3_btn", 0, 2, score);
    }
};

window.check_174_4 = () => {
    const a1 = document.getElementById("ans_174_4a_1").value;
    const a2 = document.getElementById("ans_174_4a_2").value;
    const a3 = document.getElementById("ans_174_4a_3").value;
    const a4 = document.getElementById("ans_174_4a_4").value;
    const b_name = document.getElementById("ans_174_4b_name").value;
    const b_val = document.getElementById("ans_174_4b_val").value;

    let score = 0;
    if (parseInt(a1) === 100) score++;
    if (parseInt(a2) === 104) score++;
    if (parseInt(a3) === 150) score++;
    if (parseInt(a4) === 164) score++;
    if (b_name === "M") score++;
    if (parseInt(b_val) === 5) score++;

    const isCorrect = score === 6;
    const rightAnswer = "a1) 100; a2) 104; a3) 150; a4) 164; b) M, 5";
    const studentAnswer = `a) ${a1}, ${a2}, ${a3}, ${a4}; b) ${b_name}, ${b_val}`;
    const guidance = "Em nhớ: Sxq lập phương = cạnh × cạnh × 4; Sxq hộp chữ nhật = chu vi đáy × cao. Thể tích = cạnh × cạnh × cạnh (M) hoặc dài × rộng × cao (N).";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        <b>Hình M:</b> Sxq = 5 × 5 × 4 = 100 (cm²); Stp = 5 × 5 × 6 = 150 (cm²); V = 5 × 5 × 5 = 125 (cm³).<br>
        <b>Hình N:</b> Sxq = (10 + 3) × 2 × 4 = 104 (cm²); Stp = 104 + (10 × 3 × 2) = 164 (cm²); V = 10 × 3 × 4 = 120 (cm³).<br>
        b) Thể tích hình <b>M</b> lớn hơn hình <b>N</b> là: 125 – 120 = <b>5</b> (cm³).<br>
        Khả năng tính toán hình khối của em rất đáng khen!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 4. Hình lập phương và Hình hộp chữ nhật", Math.round(score / 6 * 100), "lesson174_b4_btn", 0, 6, score);
    }
};

window.check_174_5 = () => {
    const cat_s = document.getElementById("ans_174_5_cat_s").value;
    const ostrich_v = document.getElementById("ans_174_5_ostrich_v").value.trim().replace(',', '.');
    const eagle_t = document.getElementById("ans_174_5_eagle_t").value.trim().replace(',', '.');

    let score = 0;
    if (parseFloat(eagle_t) === 0.25) score++;
    if (parseInt(cat_s) === 48) score++;
    if (parseFloat(ostrich_v) === 17.5) score++;

    const isCorrect = score === 3;
    const rightAnswer = "Đại bàng: 0,25 giờ; Con báo: 48 km; Đà điểu: 17,5 m/s";
    const studentAnswer = `Eagle t: ${eagle_t}; Cat s: ${cat_s}; Ostrich v: ${ostrich_v}`;
    const guidance = "Em hãy sử dụng các công thức: s = v × t; v = s : t; t = s : v. Nhớ đổi đơn vị đo cho đồng nhất trước khi tính nhé.";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        - Đại bàng: t = 24 : 96 = <b>0,25</b> (giờ).<br>
        - Con báo: 24 phút = 0,4 giờ. s = 120 × 0,4 = <b>48</b> (km).<br>
        - Đà điểu: t = 300 giây. s = 5 250 m. v = 5 250 : 300 = <b>17,5</b> (m/s).<br>
        Em giải bài toán chuyển động rất nhanh và chính xác!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 5. Quãng đường, Vận tốc, Thời gian", Math.round(score / 3 * 100), "lesson174_b5_btn", 0, 3, score);
    }
};

// Global helper for MCQ
if (!window.selectMCQ) {
    window.selectMCQ = (btn, inputId, value) => {
        const parent = btn.parentElement;
        const buttons = parent.querySelectorAll('button');
        buttons.forEach(b => b.classList.remove('bg-blue-600', 'text-white', 'border-blue-600', 'shadow-blue-200', 'shadow-md'));
        btn.classList.add('bg-blue-600', 'text-white', 'border-blue-600', 'shadow-blue-200', 'shadow-md');
        document.getElementById(inputId).value = value;
    };
}
