export const lesson172 = {
    period: "172",
    title: "BÀI 75: ÔN TẬP CHUNG (TIẾT 1)",
    topic: "Ôn tập chung",
    week: "35",

    content: `
        <div class="space-y-6">
            <div class="bg-blue-50 p-8 rounded-[3rem] border-4 border-blue-200 shadow-2xl text-center">
                <h3 class="text-3xl md:text-5xl font-black text-blue-700 mb-6 uppercase tracking-tight">ÔN TẬP CHUNG</h3>
                <p class="text-xl md:text-2xl text-gray-700 font-bold leading-relaxed">
                    Chào mừng các em đến với tiết ôn tập chung! <br>
                    Hôm nay chúng mình sẽ cùng ôn lại các kiến thức về: <br>
                    <span class="text-blue-600">Số tự nhiên • Phân số • Số thập phân</span>
                </p>
            </div>
        </div>
    `,

    practice: `
        <div class="space-y-12 pb-10">
            <!-- Bài 1 -->
            <div id="lesson172_b1" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                    <h3 class="text-2xl md:text-4xl font-black text-blue-800 uppercase tracking-wide">Bài 1. Hoàn thành bảng sau</h3>
                </div>
                
                <div class="overflow-x-auto rounded-[2rem] border-2 border-blue-100 shadow-inner">
                    <table class="w-full text-center border-collapse">
                        <thead>
                            <tr class="bg-blue-600 text-white text-lg md:text-xl">
                                <th class="p-4 border border-white">Hàng triệu</th>
                                <th class="p-4 border border-white">Hàng trăm nghìn</th>
                                <th class="p-4 border border-white">Hàng chục nghìn</th>
                                <th class="p-4 border border-white">Hàng nghìn</th>
                                <th class="p-4 border border-white">Hàng trăm</th>
                                <th class="p-4 border border-white">Hàng chục</th>
                                <th class="p-4 border border-white">Hàng đơn vị</th>
                                <th class="p-4 border border-white">Viết số</th>
                                <th class="p-4 border border-white w-64">Đọc số</th>
                            </tr>
                        </thead>
                        <tbody class="text-lg md:text-xl font-bold text-gray-700">
                            <!-- Row 1 -->
                            <tr class="bg-white">
                                <td class="p-4 border border-blue-100">3</td>
                                <td class="p-4 border border-blue-100">4</td>
                                <td class="p-4 border border-blue-100">6</td>
                                <td class="p-4 border border-blue-100">1</td>
                                <td class="p-4 border border-blue-100">2</td>
                                <td class="p-4 border border-blue-100">8</td>
                                <td class="p-4 border border-blue-100">5</td>
                                <td class="p-4 border border-blue-100">
                                    <input type="text" id="172_1_w1" class="w-full p-2 border-2 border-gray-300 rounded-xl text-center focus:border-blue-500 outline-none" placeholder="?">
                                </td>
                                <td class="p-4 border border-blue-100">
                                    <textarea id="172_1_r1" class="w-full p-2 border-2 border-gray-300 rounded-xl text-sm focus:border-blue-500 outline-none" rows="2" placeholder="?"></textarea>
                                </td>
                            </tr>
                            <!-- Row 2 -->
                            <tr class="bg-blue-50">
                                <td class="p-4 border border-white text-blue-600">1</td>
                                <td class="p-4 border border-white text-blue-600">3</td>
                                <td class="p-4 border border-white text-blue-600">0</td>
                                <td class="p-4 border border-white text-blue-600">6</td>
                                <td class="p-4 border border-white text-blue-600">5</td>
                                <td class="p-4 border border-white text-blue-600">2</td>
                                <td class="p-4 border border-white text-blue-600">4</td>
                                <td class="p-4 border border-white">
                                    <input type="text" id="172_1_w2" class="w-full p-2 border-2 border-gray-300 rounded-xl text-center focus:border-blue-500 outline-none" placeholder="?">
                                </td>
                                <td class="p-4 border border-white">
                                    <textarea id="172_1_r2" class="w-full p-2 border-2 border-gray-300 rounded-xl text-sm focus:border-blue-500 outline-none" rows="2" placeholder="?"></textarea>
                                </td>
                            </tr>
                            <!-- Row 3 -->
                            <tr class="bg-white">
                                <td class="p-4 border border-blue-100"></td>
                                <td class="p-4 border border-blue-100 text-green-600">7</td>
                                <td class="p-4 border border-blue-100 text-green-600">2</td>
                                <td class="p-4 border border-blue-100 text-green-600">0</td>
                                <td class="p-4 border border-blue-100 text-green-600">4</td>
                                <td class="p-4 border border-blue-100 text-green-600">5</td>
                                <td class="p-4 border border-blue-100 text-green-600">1</td>
                                <td class="p-4 border border-blue-100">
                                    <input type="text" id="172_1_w3" class="w-full p-2 border-2 border-gray-300 rounded-xl text-center focus:border-blue-500 outline-none" placeholder="?">
                                </td>
                                <td class="p-4 border border-blue-100">
                                    <textarea id="172_1_r3" class="w-full p-2 border-2 border-gray-300 rounded-xl text-sm focus:border-blue-500 outline-none" rows="2" placeholder="?"></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="mt-8 p-6 bg-yellow-50 rounded-[2rem] border-2 border-yellow-200">
                    <p class="text-xl md:text-2xl font-bold text-gray-700">b) Nêu giá trị của chữ số 2 trong mỗi số viết ở câu a.</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div class="flex items-center gap-3">
                            <span class="text-lg font-black text-blue-600">Số 1:</span>
                            <input type="text" id="172_1_v1" class="w-32 p-2 border-2 border-gray-300 rounded-xl text-center focus:border-blue-500 outline-none" placeholder="Giá trị?">
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="text-lg font-black text-blue-600">Số 2:</span>
                            <input type="text" id="172_1_v2" class="w-32 p-2 border-2 border-gray-300 rounded-xl text-center focus:border-blue-500 outline-none" placeholder="Giá trị?">
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="text-lg font-black text-blue-600">Số 3:</span>
                            <input type="text" id="172_1_v3" class="w-32 p-2 border-2 border-gray-300 rounded-xl text-center focus:border-blue-500 outline-none" placeholder="Giá trị?">
                        </div>
                    </div>
                </div>

                <button id="lesson172_b1_btn" onclick="check_172_1()" class="mt-8 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white text-2xl md:text-3xl font-black rounded-2xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-95">KIỂM TRA BÀI 1</button>
            </div>

            <!-- Bài 2 -->
            <div id="lesson172_b2" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-green-500">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                    <h3 class="text-2xl md:text-4xl font-black text-green-800 uppercase tracking-wide">Bài 2. Sắp xếp các số</h3>
                </div>
                
                <div class="p-8 bg-green-50 rounded-[2.5rem] border-2 border-green-200">
                    <p class="text-xl md:text-2xl font-bold text-gray-700 mb-6">Sắp xếp các số sau theo thứ tự từ bé đến lớn:</p>
                    <div class="flex flex-wrap gap-4 mb-8 justify-center">
                        <span class="px-6 py-3 bg-white border-2 border-green-300 rounded-full text-xl md:text-2xl font-black text-green-700 shadow-md">67 245</span>
                        <span class="px-6 py-3 bg-white border-2 border-green-300 rounded-full text-xl md:text-2xl font-black text-green-700 shadow-md">67 425</span>
                        <span class="px-6 py-3 bg-white border-2 border-green-300 rounded-full text-xl md:text-2xl font-black text-green-700 shadow-md">67 524</span>
                        <span class="px-6 py-3 bg-white border-2 border-green-300 rounded-full text-xl md:text-2xl font-black text-green-700 shadow-md">65 742</span>
                    </div>
                    <div class="flex flex-col md:flex-row items-center justify-center gap-4">
                        <input type="text" id="172_2_s1" class="w-40 p-3 border-2 border-gray-300 rounded-xl text-center text-xl font-bold focus:border-green-500" placeholder="Số bé nhất">
                        <span class="text-2xl md:text-3xl font-black text-green-600"> < </span>
                        <input type="text" id="172_2_s2" class="w-40 p-3 border-2 border-gray-300 rounded-xl text-center text-xl font-bold focus:border-green-500" placeholder="Số tiếp theo">
                        <span class="text-2xl md:text-3xl font-black text-green-600"> < </span>
                        <input type="text" id="172_2_s3" class="w-40 p-3 border-2 border-gray-300 rounded-xl text-center text-xl font-bold focus:border-green-500" placeholder="Số tiếp theo">
                        <span class="text-2xl md:text-3xl font-black text-green-600"> < </span>
                        <input type="text" id="172_2_s4" class="w-40 p-3 border-2 border-gray-300 rounded-xl text-center text-xl font-bold focus:border-green-500" placeholder="Số lớn nhất">
                    </div>
                </div>

                <button id="lesson172_b2_btn" onclick="check_172_2()" class="mt-8 w-full py-4 bg-green-600 hover:bg-green-700 text-white text-2xl md:text-3xl font-black rounded-2xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-95">KIỂM TRA BÀI 2</button>
            </div>

            <!-- Bài 3 -->
            <div id="lesson172_b3" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-pink-500">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-pink-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                    <h3 class="text-2xl md:text-4xl font-black text-pink-800 uppercase tracking-wide">Bài 3. Chọn câu trả lời đúng</h3>
                </div>

                <div class="space-y-8">
                    <div class="p-8 bg-pink-50 rounded-[2.5rem] border-2 border-pink-200">
                        <p class="text-xl md:text-2xl font-bold text-gray-700 mb-6">a) Đã tô màu <span class="text-pink-600 font-black">5/8</span> hình nào dưới đây?</p>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <!-- Option A -->
                            <div id="172_3a_optA" onclick="select_172_3a('A')" class="cursor-pointer group">
                                <div class="bg-white p-4 rounded-3xl border-4 border-transparent group-hover:border-pink-300 transition-all flex flex-col items-center gap-4">
                                    <!-- SVG Circle 8 parts, 5 blue -->
                                    <svg viewBox="0 0 100 100" class="w-24 h-24">
                                        <circle cx="50" cy="50" r="45" fill="none" stroke="#ddd" stroke-width="1"/>
                                        <path d="M50 50 L50 5 A45 45 0 0 1 95 50 Z" fill="#3B82F6" stroke="white" stroke-width="1"/>
                                        <path d="M50 50 L95 50 A45 45 0 0 1 50 95 Z" fill="#3B82F6" stroke="white" stroke-width="1"/>
                                        <path d="M50 50 L50 95 A45 45 0 0 1 5 50 Z" fill="#3B82F6" stroke="white" stroke-width="1"/>
                                        <path d="M50 50 L5 50 A45 45 0 0 1 18 18 Z" fill="#3B82F6" stroke="white" stroke-width="1"/>
                                        <path d="M50 50 L18 18 A45 45 0 0 1 50 5 Z" fill="#3B82F6" stroke="white" stroke-width="1"/>
                                        <!-- Remaining 3 white -->
                                    </svg>
                                    <span class="text-xl md:text-2xl font-black text-gray-400 group-hover:text-pink-500">A</span>
                                </div>
                            </div>
                            <!-- Option B -->
                            <div id="172_3a_optB" onclick="select_172_3a('B')" class="cursor-pointer group">
                                <div class="bg-white p-4 rounded-3xl border-4 border-transparent group-hover:border-pink-300 transition-all flex flex-col items-center gap-4">
                                    <!-- Grid 3x3, 5 red, 4 white -->
                                    <div class="grid grid-cols-3 gap-1 w-24 h-24 bg-gray-200 p-1 border">
                                        <div class="bg-red-500"></div><div class="bg-white"></div><div class="bg-red-500"></div>
                                        <div class="bg-white"></div><div class="bg-red-500"></div><div class="bg-white"></div>
                                        <div class="bg-red-500"></div><div class="bg-white"></div><div class="bg-red-500"></div>
                                    </div>
                                    <span class="text-xl md:text-2xl font-black text-gray-400 group-hover:text-pink-500">B</span>
                                </div>
                            </div>
                            <!-- Option C -->
                            <div id="172_3a_optC" onclick="select_172_3a('C')" class="cursor-pointer group">
                                <div class="bg-white p-4 rounded-3xl border-4 border-transparent group-hover:border-pink-300 transition-all flex flex-col items-center gap-4">
                                    <!-- Circle 8 parts, 5 green -->
                                    <svg viewBox="0 0 100 100" class="w-24 h-24">
                                        <circle cx="50" cy="50" r="45" fill="none" stroke="#ddd" stroke-width="1"/>
                                        <path d="M50 50 L50 5 A45 45 0 0 1 82 18 Z" fill="#10B981" stroke="white" stroke-width="1"/>
                                        <path d="M50 50 L82 18 A45 45 0 0 1 95 50 Z" fill="#10B981" stroke="white" stroke-width="1"/>
                                        <path d="M50 50 L95 50 A45 45 0 0 1 82 82 Z" fill="#10B981" stroke="white" stroke-width="1"/>
                                        <path d="M50 50 L82 82 A45 45 0 0 1 50 95 Z" fill="#10B981" stroke="white" stroke-width="1"/>
                                        <path d="M50 50 L50 95 A45 45 0 0 1 18 82 Z" fill="#10B981" stroke="white" stroke-width="1"/>
                                    </svg>
                                    <span class="text-xl md:text-2xl font-black text-gray-400 group-hover:text-pink-500">C</span>
                                </div>
                            </div>
                            <!-- Option D -->
                            <div id="172_3a_optD" onclick="select_172_3a('D')" class="cursor-pointer group">
                                <div class="bg-white p-4 rounded-3xl border-4 border-transparent group-hover:border-pink-300 transition-all flex flex-col items-center gap-4">
                                    <!-- Square with triangles, 5 pink -->
                                    <svg viewBox="0 0 100 100" class="w-24 h-24">
                                        <rect x="5" y="5" width="90" height="90" fill="none" stroke="#ddd"/>
                                        <path d="M5 5 L50 50 L50 5 Z" fill="#F472B6" stroke="white"/>
                                        <path d="M50 5 L50 50 L95 5 Z" fill="#F472B6" stroke="white"/>
                                        <path d="M95 5 L50 50 L95 50 Z" fill="#F472B6" stroke="white"/>
                                        <path d="M95 50 L50 50 L95 95 Z" fill="#F472B6" stroke="white"/>
                                        <path d="M95 95 L50 50 L50 95 Z" fill="#F472B6" stroke="white"/>
                                    </svg>
                                    <span class="text-xl md:text-2xl font-black text-gray-400 group-hover:text-pink-500">D</span>
                                </div>
                            </div>
                        </div>
                        <input type="hidden" id="172_3a_val" value="">
                    </div>

                    <div class="p-8 bg-blue-50 rounded-[2.5rem] border-2 border-blue-200">
                        <p class="text-xl md:text-2xl font-bold text-gray-700 mb-6">b) <span class="text-blue-600 font-black italic">2/3</span> là phân số rút gọn của phân số nào dưới đây?</p>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <button onclick="select_172_3b('A')" id="172_3b_btnA" class="p-6 bg-white border-4 border-gray-200 rounded-[2rem] text-xl md:text-2xl font-black text-gray-500 hover:border-blue-300 transition-all">4/8</button>
                            <button onclick="select_172_3b('B')" id="172_3b_btnB" class="p-6 bg-white border-4 border-gray-200 rounded-[2rem] text-xl md:text-2xl font-black text-gray-500 hover:border-blue-300 transition-all">6/18</button>
                            <button onclick="select_172_3b('C')" id="172_3b_btnC" class="p-6 bg-white border-4 border-gray-200 rounded-[2rem] text-xl md:text-2xl font-black text-gray-500 hover:border-blue-300 transition-all">16/24</button>
                            <button onclick="select_172_3b('D')" id="172_3b_btnD" class="p-6 bg-white border-4 border-gray-200 rounded-[2rem] text-xl md:text-2xl font-black text-gray-500 hover:border-blue-300 transition-all">8/9</button>
                        </div>
                        <input type="hidden" id="172_3b_val" value="">
                    </div>
                </div>

                <button id="lesson172_b3_btn" onclick="check_172_3()" class="mt-8 w-full py-4 bg-pink-600 hover:bg-pink-700 text-white text-2xl md:text-3xl font-black rounded-2xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-95">KIỂM TRA BÀI 3</button>
            </div>

            <!-- Bài 4 -->
            <div id="lesson172_b4" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-yellow-500">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-yellow-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                    <h3 class="text-2xl md:text-4xl font-black text-yellow-800 uppercase tracking-wide">Bài 4. Số?</h3>
                </div>
                
                <div class="space-y-6">
                    <!-- 4a -->
                    <div class="p-8 bg-yellow-50 rounded-[2.5rem] border-2 border-yellow-200">
                        <p class="text-xl md:text-2xl font-bold text-gray-700 mb-4">a) Viết số thích hợp:</p>
                        <ul class="space-y-4 text-xl md:text-2xl font-bold text-gray-700">
                            <li class="flex flex-wrap items-center gap-2">
                                <span>- Sáu mươi đơn vị, năm phần mười, bảy phần trăm, hai phần nghìn:</span>
                                <input type="text" id="172_4a_1" class="w-32 p-1 border-b-4 border-yellow-300 bg-transparent text-center outline-none focus:border-yellow-600" placeholder="...">
                            </li>
                            <li class="flex flex-wrap items-center gap-2">
                                <span>- Bốn trăm linh năm đơn vị và sáu mươi mốt phần trăm:</span>
                                <input type="text" id="172_4a_2" class="w-32 p-1 border-b-4 border-yellow-300 bg-transparent text-center outline-none focus:border-yellow-600" placeholder="...">
                            </li>
                            <li class="flex flex-wrap items-center gap-2">
                                <span>- Không đơn vị, bảy mươi tư phần nghìn:</span>
                                <input type="text" id="172_4a_3" class="w-32 p-1 border-b-4 border-yellow-300 bg-transparent text-center outline-none focus:border-yellow-600" placeholder="...">
                            </li>
                        </ul>
                    </div>

                    <!-- 4b -->
                    <div class="p-8 bg-orange-50 rounded-[2.5rem] border-2 border-orange-200">
                        <p class="text-xl md:text-2xl font-bold text-gray-700 mb-4">b) Đổi đơn vị đo:</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xl md:text-2xl font-bold text-gray-700">
                            <div class="flex items-center gap-2">
                                <span>5 m 8 dm =</span>
                                <input type="text" id="172_4b_1" class="w-24 p-1 border-b-4 border-orange-300 bg-transparent text-center outline-none focus:border-orange-600" placeholder="?">
                                <span>m</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span>425 g =</span>
                                <input type="text" id="172_4b_2" class="w-24 p-1 border-b-4 border-orange-300 bg-transparent text-center outline-none focus:border-orange-600" placeholder="?">
                                <span>kg</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span>74 cm =</span>
                                <input type="text" id="172_4b_3" class="w-24 p-1 border-b-4 border-orange-300 bg-transparent text-center outline-none focus:border-orange-600" placeholder="?">
                                <span>m</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span>85 ml =</span>
                                <input type="text" id="172_4b_4" class="w-24 p-1 border-b-4 border-orange-300 bg-transparent text-center outline-none focus:border-orange-600" placeholder="?">
                                <span>l</span>
                            </div>
                        </div>
                    </div>
                </div>

                <button id="lesson172_b4_btn" onclick="check_172_4()" class="mt-8 w-full py-4 bg-yellow-500 hover:bg-yellow-600 text-white text-2xl md:text-3xl font-black rounded-2xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-95">KIỂM TRA BÀI 4</button>
            </div>

            <!-- Bài 5 -->
            <div id="lesson172_b5" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">5</div>
                    <h3 class="text-2xl md:text-4xl font-black text-blue-800 uppercase tracking-wide">Bài 5. So sánh và Logic</h3>
                </div>
                
                <div class="space-y-6">
                    <div class="p-8 bg-blue-50 rounded-[2.5rem] border-2 border-blue-200">
                        <p class="text-xl md:text-2xl font-bold text-gray-700 mb-6">a) Sắp xếp các số sau theo thứ tự từ lớn đến bé:</p>
                        <div class="flex flex-wrap gap-4 mb-8 justify-center">
                            <span class="px-6 py-2 bg-white border-2 border-blue-300 rounded-full text-xl font-black text-blue-700 shadow-md">70,571</span>
                            <span class="px-6 py-2 bg-white border-2 border-blue-300 rounded-full text-xl font-black text-blue-700 shadow-md">70,517</span>
                            <span class="px-6 py-2 bg-white border-2 border-blue-300 rounded-full text-xl font-black text-blue-700 shadow-md">71,057</span>
                            <span class="px-6 py-2 bg-white border-2 border-blue-300 rounded-full text-xl font-black text-blue-700 shadow-md">70,715</span>
                        </div>
                        <div class="flex flex-col md:flex-row items-center justify-center gap-4">
                            <input type="text" id="172_5a_1" class="w-32 p-3 border-2 border-gray-300 rounded-xl text-center font-bold focus:border-blue-500" placeholder="Lớn nhất">
                            <span class="text-2xl md:text-3xl font-black text-blue-600"> > </span>
                            <input type="text" id="172_5a_2" class="w-32 p-3 border-2 border-gray-300 rounded-xl text-center font-bold focus:border-blue-500">
                            <span class="text-2xl md:text-3xl font-black text-blue-600"> > </span>
                            <input type="text" id="172_5a_3" class="w-32 p-3 border-2 border-gray-300 rounded-xl text-center font-bold focus:border-blue-500">
                            <span class="text-2xl md:text-3xl font-black text-blue-600"> > </span>
                            <input type="text" id="172_5a_4" class="w-32 p-3 border-2 border-gray-300 rounded-xl text-center font-bold focus:border-blue-500" placeholder="Bé nhất">
                        </div>
                    </div>

                    <div class="p-8 bg-blue-50 rounded-[2.5rem] border-2 border-blue-200">
                        <p class="text-xl md:text-2xl font-bold text-gray-700 mb-6 italic">b) Ba rô-bốt vàng, đỏ, xanh có chiều cao là: <span class="text-blue-600">98 cm; 0,89 m; 1,02 m</span>. <br> Biết rô-bốt vàng cao hơn rô-bốt đỏ nhưng thấp hơn rô-bốt xanh.</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="p-6 bg-white rounded-3xl border-2 border-blue-100 flex flex-col gap-4">
                                <span class="text-xl font-black text-gray-600 italic">- Chiều cao của rô-bốt đỏ là:</span>
                                <div class="grid grid-cols-3 gap-2">
                                    <button onclick="select_172_5b1('98')" id="172_5b1_btn1" class="p-3 bg-gray-50 border-2 rounded-xl text-lg font-black text-gray-400">98 cm</button>
                                    <button onclick="select_172_5b1('0.89')" id="172_5b1_btn2" class="p-3 bg-gray-50 border-2 rounded-xl text-lg font-black text-gray-400">0,89 m</button>
                                    <button onclick="select_172_5b1('1.02')" id="172_5b1_btn3" class="p-3 bg-gray-50 border-2 rounded-xl text-lg font-black text-gray-400">1,02 m</button>
                                </div>
                                <input type="hidden" id="172_5b1_val" value="">
                            </div>
                            <div class="p-6 bg-white rounded-3xl border-2 border-blue-100 flex flex-col gap-4">
                                <span class="text-xl font-black text-gray-600 italic">- Chiều cao của rô-bốt xanh là:</span>
                                <div class="grid grid-cols-3 gap-2">
                                    <button onclick="select_172_5b2('98')" id="172_5b2_btn1" class="p-3 bg-gray-50 border-2 rounded-xl text-lg font-black text-gray-400">98 cm</button>
                                    <button onclick="select_172_5b2('0.89')" id="172_5b2_btn2" class="p-3 bg-gray-50 border-2 rounded-xl text-lg font-black text-gray-400">0,89 m</button>
                                    <button onclick="select_172_5b2('1.02')" id="172_5b2_btn3" class="p-3 bg-gray-50 border-2 rounded-xl text-lg font-black text-gray-400">1,02 m</button>
                                </div>
                                <input type="hidden" id="172_5b2_val" value="">
                            </div>
                        </div>
                    </div>
                </div>

                <button id="lesson172_b5_btn" onclick="check_172_5()" class="mt-8 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white text-2xl md:text-3xl font-black rounded-2xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-95">KIỂM TRA BÀI 5</button>
            </div>
        </div>
    `,

    quizPool: [
        {
            question: "Số 3 461 285 được đọc là gì?",
            options: [
                "Ba triệu bốn trăm sáu mươi mốt nghìn hai trăm tám mươi lăm",
                "Ba triệu bốn trăm sáu mươi mốt nghìn hai trăm tám mươi",
                "Ba bốn sáu một hai tám năm",
                "Ba mươi bốn triệu sáu trăm mười hai nghìn tám trăm năm mươi"
            ],
            answer: 0
        },
        {
            question: "Trong số 1 306 524, chữ số 2 ở hàng nào?",
            options: ["Hàng đơn vị", "Hàng chục", "Hàng trăm", "Hàng nghìn"],
            answer: 1
        },
        {
            question: "Giá trị của chữ số 7 trong số 720 451 là bao nhiêu?",
            options: ["700", "7 000", "70 000", "700 000"],
            answer: 3
        },
        {
            question: "Số gồm 405 đơn vị và 61 phần trăm viết là:",
            options: ["405,061", "405,61", "4,0561", "40561"],
            answer: 1
        },
        {
            question: "Phân số 16/24 rút gọn thành phân số tối giản là:",
            options: ["4/6", "8/12", "2/3", "1/2"],
            answer: 2
        },
        {
            question: "Đổi 5 m 8 dm sang mét ta được:",
            options: ["5,08 m", "58 m", "5,8 m", "0,58 m"],
            answer: 2
        },
        {
            question: "Số thập phân nào lớn nhất trong các số: 70,571; 70,517; 71,057; 70,715?",
            options: ["70,571", "71,057", "70,715", "70,517"],
            answer: 1
        },
        {
            question: "Số gồm 0 đơn vị, 74 phần nghìn viết là:",
            options: ["0,74", "0,074", "0,0074", "7,4"],
            answer: 1
        },
        {
            question: "Đổi 425 g sang ki-lô-gam ta được:",
            options: ["4,25 kg", "42,5 kg", "0,425 kg", "0,0425 kg"],
            answer: 2
        },
        {
            question: "Số 65 742 đọc là gì?",
            options: ["Sáu mươi lăm nghìn bảy trăm bốn mươi hai", "Sáu năm bảy bốn hai", "Sáu mươi lăm triệu bảy trăm bốn mươi hai", "Sáu mươi lăm nghìn bảy trăm bốn hai"],
            answer: 0
        },
        {
            question: "Trong các hình A, B, C, D ở bài 3a, hình nào KHÔNG tô màu 5/8?",
            options: ["Hình A", "Hình B", "Hình C", "Hình D"],
            answer: 1
        },
        {
            question: "Phân số nào bằng với 2/3?",
            options: ["4/8", "6/18", "16/24", "8/9"],
            answer: 2
        },
        {
            question: "Sắp xếp từ bé đến lớn: 67 245; 67 425; 67 524; 65 742. Số thứ hai là:",
            options: ["65 742", "67 245", "67 425", "67 524"],
            answer: 1
        },
        {
            question: "Đổi 85 ml sang lít ta được:",
            options: ["0,85 l", "0,085 l", "8,5 l", "0,0085 l"],
            answer: 1
        },
        {
            question: "Rô-bốt vàng cao 98 cm, rô-bốt đỏ cao 0,89 m. Rô-bốt nào cao hơn?",
            options: ["Rô-bốt vàng", "Rô-bốt đỏ", "Hai rô-bốt cao bằng nhau", "Không so sánh được"],
            answer: 0
        },
        {
            question: "Chữ số 5 trong số 720 451 có giá trị là:",
            options: ["5", "50", "500", "5 000"],
            answer: 1
        },
        {
            question: "Viết số: Một triệu ba trăm linh sáu nghìn năm trăm hai mươi tư.",
            options: ["1 360 524", "1 306 524", "1 306 542", "1 036 524"],
            answer: 1
        },
        {
            question: "Số thập phân 70,715 có chữ số 7 ở hàng nào?",
            options: ["Hàng chục và hàng phần mười", "Hàng trăm và hàng đơn vị", "Hàng chục và hàng phần trăm", "Hàng phần mười và hàng phần trăm"],
            answer: 0
        },
        {
            question: "Đổi 74 cm sang mét ta được:",
            options: ["7,4 m", "0,74 m", "0,074 m", "740 m"],
            answer: 1
        },
        {
            question: "Trong bài toán 3 rô-bốt, rô-bốt nào thấp nhất?",
            options: ["Rô-bốt vàng", "Rô-bốt đỏ", "Rô-bốt xanh", "Không biết được"],
            answer: 1
        }
    ]
};

// Selection helpers for UI
window.select_172_3a = function (opt) {
    document.querySelectorAll('[id^="172_3a_opt"]').forEach(el => el.classList.remove('border-pink-500', 'bg-pink-100'));
    document.getElementById('172_3a_opt' + opt).classList.add('border-pink-500', 'bg-pink-100');
    document.getElementById('172_3a_val').value = opt;
};

window.select_172_3b = function (opt) {
    document.querySelectorAll('[id^="172_3b_btn"]').forEach(el => {
        el.classList.remove('border-blue-500', 'text-blue-600', 'bg-blue-50');
        el.classList.add('text-gray-500', 'bg-white');
    });
    const btn = document.getElementById('172_3b_btn' + opt);
    btn.classList.add('border-blue-500', 'text-blue-600', 'bg-blue-50');
    btn.classList.remove('text-gray-500', 'bg-white');
    document.getElementById('172_3b_val').value = opt;
};

window.select_172_5b1 = function (val) {
    document.querySelectorAll('[id^="172_5b1_btn"]').forEach(el => {
        el.classList.remove('bg-blue-600', 'text-white', 'border-blue-600');
        el.classList.add('bg-gray-50', 'text-gray-400');
    });
    const btnMap = { '98': '1', '0.89': '2', '1.02': '3' };
    const btn = document.getElementById('172_5b1_btn' + btnMap[val]);
    btn.classList.add('bg-blue-600', 'text-white', 'border-blue-600');
    btn.classList.remove('bg-gray-50', 'text-gray-400');
    document.getElementById('172_5b1_val').value = val;
};

window.select_172_5b2 = function (val) {
    document.querySelectorAll('[id^="172_5b2_btn"]').forEach(el => {
        el.classList.remove('bg-blue-600', 'text-white', 'border-blue-600');
        el.classList.add('bg-gray-50', 'text-gray-400');
    });
    const btnMap = { '98': '1', '0.89': '2', '1.02': '3' };
    const btn = document.getElementById('172_5b2_btn' + btnMap[val]);
    btn.classList.add('bg-blue-600', 'text-white', 'border-blue-600');
    btn.classList.remove('bg-gray-50', 'text-gray-400');
    document.getElementById('172_5b2_val').value = val;
};

// Validation functions
window.check_172_1 = function () {
    let score = 0;
    const w1 = document.getElementById('172_1_w1').value.trim().replace(/\s/g, '');
    const w2 = document.getElementById('172_1_w2').value.trim().replace(/\s/g, '');
    const w3 = document.getElementById('172_1_w3').value.trim().replace(/\s/g, '');

    const r1 = document.getElementById('172_1_r1').value.trim().toLowerCase();
    const r2 = document.getElementById('172_1_r2').value.trim().toLowerCase();
    const r3 = document.getElementById('172_1_r3').value.trim().toLowerCase();

    const v1 = document.getElementById('172_1_v1').value.trim().replace(/\s/g, '');
    const v2 = document.getElementById('172_1_v2').value.trim().replace(/\s/g, '');
    const v3 = document.getElementById('172_1_v3').value.trim().replace(/\s/g, '');

    if (w1 === "3461285") score++;
    if (w2 === "1306524") score++;
    if (w3 === "720451") score++;

    if (r1.includes("ba triệu bốn trăm sáu mươi mốt nghìn hai trăm tám mươi lăm")) score++;
    if (r2.includes("một triệu ba trăm linh sáu nghìn năm trăm hai mươi tư")) score++;
    if (r3.includes("bảy trăm hai mươi nghìn bốn trăm năm mươi mốt")) score++;

    if (v1 === "200") score++;
    if (v2 === "20") score++;
    if (v3 === "20000") score++;

    const isCorrect = score === 9;
    const rightAnswer = "1: 3461285, Ba triệu bốn trăm sáu mươi mốt nghìn hai trăm tám mươi lăm, 200; 2: 1306524, Một triệu ba trăm linh sáu nghìn năm trăm hai mươi tư, 20; 3: 720451, Bảy trăm hai mươi nghìn bốn trăm năm mươi mốt, 20000";
    const studentAnswer = `Viết: ${w1}, ${w2}, ${w3}; Giá trị: ${v1}, ${v2}, ${v3}`;
    const guidance = "Em hãy đối chiếu các chữ số với từng hàng (triệu, trăm nghìn,...) để viết và đọc số cho đúng. Giá trị của chữ số 2 phụ thuộc vào vị trí hàng của nó.";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        1. Số thứ nhất: 3 triệu, 4 trăm nghìn, 6 chục nghìn, 1 nghìn, 2 trăm, 8 chục, 5 đơn vị.<br>
           - Viết số: <b>3 461 285</b>.<br>
           - Đọc số: <b>Ba triệu bốn trăm sáu mươi mốt nghìn hai trăm tám mươi lăm</b>.<br>
           - Giá trị chữ số 2 (hàng trăm): <b>200</b>.<br>
        2. Số thứ hai: 1 triệu, 3 trăm nghìn, 0 chục nghìn, 6 nghìn, 5 trăm, 2 chục, 4 đơn vị.<br>
           - Viết số: <b>1 306 524</b>.<br>
           - Đọc số: <b>Một triệu ba trăm linh sáu nghìn năm trăm hai mươi tư</b>.<br>
           - Giá trị chữ số 2 (hàng chục): <b>20</b>.<br>
        3. Số thứ ba: 7 trăm nghìn, 2 chục nghìn, 0 nghìn, 4 trăm, 5 chục, 1 đơn vị.<br>
           - Viết số: <b>720 451</b>.<br>
           - Đọc số: <b>Bảy trăm hai mươi nghìn bốn trăm năm mươi mốt</b>.<br>
           - Giá trị chữ số 2 (hàng chục nghìn): <b>20 000</b>.<br>
        Rất tuyệt! Em đã nắm vững cấu tạo số tự nhiên rồi đó.
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 1. Hoàn thành bảng", Math.round(score / 9 * 100), "lesson172_b1_btn", 0, 9, score);
    }
};

window.check_172_2 = function () {
    let score = 0;
    const s1 = document.getElementById('172_2_s1').value.trim().replace(/\s/g, '');
    const s2 = document.getElementById('172_2_s2').value.trim().replace(/\s/g, '');
    const s3 = document.getElementById('172_2_s3').value.trim().replace(/\s/g, '');
    const s4 = document.getElementById('172_2_s4').value.trim().replace(/\s/g, '');

    if (s1 === "65742") score++;
    if (s2 === "67245") score++;
    if (s3 === "67425") score++;
    if (s4 === "67524") score++;

    const isCorrect = score === 4;
    const rightAnswer = "65 742 < 67 245 < 67 425 < 67 524";
    const studentAnswer = `${s1} < ${s2} < ${s3} < ${s4}`;
    const guidance = "Em hãy so sánh lần lượt các chữ số từ hàng cao nhất (chục nghìn, nghìn,...) để sắp xếp nhé.";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        So sánh các số: 67 245; 67 425; 67 524; 65 742.<br>
        - Hàng chục nghìn đều là 6.<br>
        - Hàng nghìn: có số 65 742 là nhỏ nhất (5 < 7).<br>
        - So sánh 3 số còn lại ở hàng trăm: 2 < 4 < 5.<br>
        Vậy thứ tự là: <b>65 742 < 67 245 < 67 425 < 67 524</b>.<br>
        Em sắp xếp rất chính xác!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 2. Sắp xếp các số", Math.round(score / 4 * 100), "lesson172_b2_btn", 0, 4, score);
    }
};

window.check_172_3 = function () {
    let score = 0;
    const valA = document.getElementById('172_3a_val').value;
    const valB = document.getElementById('172_3b_val').value;

    const correctA = (valA === 'A' || valA === 'C' || valA === 'D'); // A is most clear in SGK usually
    if (correctA) score++;
    if (valB === 'C') score++;

    const isCorrect = score === 2;
    const rightAnswer = "a) Hình A (hoặc C, D); b) 16/24";
    const studentAnswer = `a) ${valA || '?'}; b) ${valB || '?'}`;
    const guidance = "a) Em hãy đếm tổng số phần bằng nhau và số phần được tô màu ở mỗi hình.<br>b) Em hãy rút gọn các phân số đã cho bằng cách chia cả tử số và mẫu số cho ước chung lớn nhất để tìm phân số bằng phân số cần tìm nhé!";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        - Câu a: Hình chia làm 8 phần bằng nhau và tô màu 5 phần biểu thị phân số 5/8. Các hình A, C, D đều thể hiện điều này theo các cách chia khác nhau.<br>
        - Câu b: Rút gọn phân số 16/24:<br>
          16 : 8 = 2<br>
          24 : 8 = 3<br>
          Vậy 16/24 = 2/3. Các phân số khác không rút gọn được về 2/3.<br>
        Chúc mừng em đã hoàn thành bài chọn đáp án!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 3. Chọn câu trả lời đúng", Math.round(score / 2 * 100), "lesson172_b3_btn", 0, 2, score);
    }
};

window.check_172_4 = function () {
    let score = 0;
    const a1 = document.getElementById('172_4a_1').value.trim().replace(',', '.');
    const a2 = document.getElementById('172_4a_2').value.trim().replace(',', '.');
    const a3 = document.getElementById('172_4a_3').value.trim().replace(',', '.');

    const b1 = document.getElementById('172_4b_1').value.trim().replace(',', '.');
    const b2 = document.getElementById('172_4b_2').value.trim().replace(',', '.');
    const b3 = document.getElementById('172_4b_3').value.trim().replace(',', '.');
    const b4 = document.getElementById('172_4b_4').value.trim().replace(',', '.');

    if (a1 === "60.572") score++;
    if (a2 === "405.61") score++;
    if (a3 === "0.074") score++;

    if (b1 === "5.8") score++;
    if (b2 === "0.425") score++;
    if (b3 === "0.74") score++;
    if (b4 === "0.085") score++;

    const isCorrect = score === 7;
    const rightAnswer = "a) 60,572; 405,61; 0,074; b) 5,8; 0,425; 0,74; 0,085";
    const studentAnswer = `a) ${a1}, ${a2}, ${a3}; b) ${b1}, ${b2}, ${b3}, ${b4}`;
    const guidance = "Em hãy nhớ vị trí các hàng sau dấu phẩy (phần mười, phần trăm, phần nghìn) và bảng đơn vị đo độ dài, khối lượng, dung tích.";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        a) Viết số thập phân:<br>
        - 60 đơn vị, 5 phần mười, 7 phần trăm, 2 phần nghìn = <b>60,572</b>.<br>
        - 405 đơn vị và 61 phần trăm = <b>405,61</b>.<br>
        - 0 đơn vị, 74 phần nghìn = <b>0,074</b>.<br>
        b) Đổi đơn vị đo:<br>
        - 5 m 8 dm = 5 m + 0,8 m = <b>5,8</b> m.<br>
        - 425 g = 425 : 1000 = <b>0,425</b> kg.<br>
        - 74 cm = 74 : 100 = <b>0,74</b> m.<br>
        - 85 ml = 85 : 1000 = <b>0,085</b> l.<br>
        Kỹ năng đổi đơn vị và viết số thập phân của em rất tốt!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 4. Số?", Math.round(score / 7 * 100), "lesson172_b4_btn", 0, 7, score);
    }
};

window.check_172_5 = function () {
    let score = 0;
    const s1 = document.getElementById('172_5a_1').value.trim().replace(',', '.');
    const s2 = document.getElementById('172_5a_2').value.trim().replace(',', '.');
    const s3 = document.getElementById('172_5a_3').value.trim().replace(',', '.');
    const s4 = document.getElementById('172_5a_4').value.trim().replace(',', '.');

    if (s1 === "71.057") score++;
    if (s2 === "70.715") score++;
    if (s3 === "70.571") score++;
    if (s4 === "70.517") score++;

    const b1 = document.getElementById('172_5b1_val').value;
    const b2 = document.getElementById('172_5b2_val').value;

    if (b1 === '0.89') score++;
    if (b2 === '1.02') score++;

    const isCorrect = score === 6;
    const rightAnswer = "a) 71,057 > 70,715 > 70,571 > 70,517; b) Đỏ: 0,89m; Xanh: 1,02m";
    const studentAnswer = `a) ${s1} > ${s2} > ${s3} > ${s4}; b) Đỏ: ${b1}, Xanh: ${b2}`;
    const guidance = "a) So sánh phần nguyên trước, sau đó so sánh các hàng ở phần thập phân. b) Đổi tất cả về cùng một đơn vị (cm hoặc m) rồi so sánh theo điều kiện đề bài.";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        a) Sắp xếp từ lớn đến bé:<br>
        - So sánh phần nguyên: 71 > 70. Vậy 71,057 lớn nhất.<br>
        - So sánh 3 số còn lại ở phần mười: 7 > 5. Vậy 70,715 đứng thứ hai.<br>
        - So sánh 70,571 và 70,517 ở hàng phần trăm: 7 > 1. Vậy 70,571 > 70,517.<br>
        => Thứ tự: <b>71,057 > 70,715 > 70,571 > 70,517</b>.<br>
        b) Bài toán rô-bốt:<br>
        - Đổi đơn vị: 98 cm = 0,98 m.<br>
        - Ta có 3 số đo: 0,89 m; 0,98 m; 1,02 m. <br>
        - Sắp xếp: 0,89 < 0,98 < 1,02.<br>
        - Theo đề: Vàng cao hơn đỏ nhưng thấp hơn xanh. Vậy Vàng ở giữa (0,98 m = 98 cm).<br>
        => Đỏ là <b>0,89 m</b> và Xanh là <b>1,02 m</b>.<br>
        Tuyệt vời! Em có tư duy logic rất sắc bén!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 5. So sánh và Logic", Math.round(score / 6 * 100), "lesson172_b5_btn", 0, 6, score);
    }
};
