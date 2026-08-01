export const lesson160 = {
    period: "160",
    title: "BÀI 70: ÔN TẬP TỈ SỐ, TỈ SỐ PHẦN TRĂM (TIẾT 1)",
    topic: "Ôn tập tỉ số, tỉ số phần trăm",
    week: "32",

    content: `
        <div class="space-y-8 animate-fade-in pb-10">
            <!-- Card Tiêu đề & Tổng quan -->
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-4 border-blue-200 shadow-xl relative overflow-hidden">
                <div class="relative z-10 space-y-6">
                    <div class="flex items-center justify-center gap-3">
                        <span class="text-3xl md:text-4xl">📖</span>
                        <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide text-center">TÌM HIỂU BÀI: ÔN TẬP TỈ SỐ, TỈ SỐ PHẦN TRĂM</h3>
                    </div>

                    <!-- Grid 4 chủ đề chính -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 font-bold">
                        
                        <!-- 1. Tỉ số của hai số -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-blue-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-black text-xl">1</div>
                                <h4 class="font-black text-blue-700 text-xl md:text-2xl">Tỉ số của hai số</h4>
                            </div>
                            <p class="text-base md:text-lg text-gray-700 leading-relaxed">
                                Tỉ số của hai số <span class="text-blue-700 font-black">a</span> và <span class="text-blue-700 font-black">b</span> (với <span class="text-blue-700 font-black">b ≠ 0</span>) là thương của phép chia <span class="text-blue-700 font-black">a : b</span>, ký hiệu là <span class="text-blue-700 font-black">a : b</span> hoặc <span class="inline-flex flex-col items-center align-middle mx-1 font-black text-blue-700 text-base"><span>a</span><div class="w-4 h-0.5 bg-blue-700"></div><span>b</span></span>.
                            </p>
                            <div class="bg-blue-50 p-4 rounded-xl border border-blue-200 text-sm md:text-base text-blue-900">
                                <span class="font-black">📌 Ví dụ (Bài 1):</span> Lớp có 13 bạn chọn lên rừng, 19 bạn chọn xuống biển.<br>
                                Tỉ số của số bạn chọn lên rừng và số bạn chọn xuống biển là: <span class="font-black text-emerald-700">13 : 19</span> hay <span class="font-black text-emerald-700">13/19</span>.
                            </div>
                        </div>

                        <!-- 2. Tìm hai số khi biết Tổng và Tỉ số -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-emerald-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-black text-xl">2</div>
                                <h4 class="font-black text-emerald-700 text-xl md:text-2xl">Tìm hai số biết Tổng và Tỉ số</h4>
                            </div>
                            <div class="space-y-2 text-base md:text-lg text-gray-700">
                                <p class="font-black text-emerald-800">Các bước giải:</p>
                                <ul class="space-y-1 text-sm md:text-base pl-2">
                                    <li>1️⃣ Bước 1: Tìm <span class="font-black text-emerald-700">Tổng số phần bằng nhau</span>.</li>
                                    <li>2️⃣ Bước 2: Tìm <span class="font-black text-emerald-700">Giá trị một phần</span> = Tổng : Tổng số phần.</li>
                                    <li>3️⃣ Bước 3: Tìm số bé và số lớn theo tỉ lệ phần.</li>
                                </ul>
                            </div>
                            <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-sm md:text-base text-emerald-900">
                                <span class="font-black">📌 Ví dụ (Bài 2):</span> Quyên góp 126 quyển sách, tỉ số 5A : 5B = 5 : 4.<br>
                                Tổng phần = 5 + 4 = 9. 5A = 126 : 9 × 5 = <span class="font-black text-blue-700">70 quyển</span>.
                            </div>
                        </div>

                        <!-- 3. Tìm hai số khi biết Hiệu và Tỉ số -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-rose-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-rose-100 text-rose-700 rounded-full flex items-center justify-center font-black text-xl">3</div>
                                <h4 class="font-black text-rose-700 text-xl md:text-2xl">Tìm hai số biết Hiệu và Tỉ số</h4>
                            </div>
                            <div class="space-y-2 text-base md:text-lg text-gray-700">
                                <p class="font-black text-rose-800">Các bước giải:</p>
                                <ul class="space-y-1 text-sm md:text-base pl-2">
                                    <li>1️⃣ Bước 1: Tìm <span class="font-black text-rose-700">Hiệu số phần bằng nhau</span>.</li>
                                    <li>2️⃣ Bước 2: Tìm <span class="font-black text-rose-700">Giá trị một phần</span> = Hiệu : Hiệu số phần.</li>
                                    <li>3️⃣ Bước 3: Tìm số bé và số lớn.</li>
                                </ul>
                            </div>
                            <div class="bg-rose-50 p-4 rounded-xl border border-rose-200 text-sm md:text-base text-rose-900">
                                <span class="font-black">📌 Ví dụ (Bài 4):</span> Việt kém Mai 11 ngôi sao, tỉ số = 4/5.<br>
                                Hiệu phần = 5 - 4 = 1. Tổng ngôi sao cả hai bạn = <span class="font-black text-emerald-700">99 ngôi sao</span>.
                            </div>
                        </div>

                        <!-- 4. Bài toán Tỉ lệ bản đồ -->
                        <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-md border-t-8 border-amber-500 space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-black text-xl">4</div>
                                <h4 class="font-black text-amber-700 text-xl md:text-2xl">Bài toán Tỉ lệ bản đồ</h4>
                            </div>
                            <p class="text-base md:text-lg text-gray-700 leading-relaxed">
                                Tỉ lệ bản đồ <span class="text-amber-800 font-black">1 : N</span> nghĩa là độ dài trên thực tế gấp <span class="text-amber-800 font-black">N lần</span> độ dài vẽ trên bản đồ.
                            </p>
                            <div class="bg-amber-50 p-4 rounded-xl border border-amber-200 text-sm md:text-base text-amber-900">
                                <span class="font-black">📌 Công thức:</span><br>
                                • <span class="font-black text-blue-700">Độ dài thật</span> = Độ dài bản đồ × Mẫu số tỉ lệ (N).<br>
                                • Đổi từ <span class="font-black">cm</span> sang <span class="font-black">m</span> (chia 100) hoặc <span class="font-black">km</span> (chia 100 000).
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="-mx-4 md:-mx-8 mt-2 -mb-8">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Slide 1: Bài 1 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson160_b1" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-blue-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">1</div>
                                <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Chọn câu trả lời đúng</h3>
                            </div>
                            <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-4">
                                <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                                    Lớp 5A có 32 bạn. Để chuẩn bị cho chuyến đi tham quan dã ngoại, cả lớp đã thống nhất chọn một trong hai phương án: lên rừng hoặc xuống biển. Kết quả lấy ý kiến của các bạn như sau: <span class="font-black text-emerald-700">13 bạn chọn lên rừng</span>, <span class="font-black text-blue-700">19 bạn chọn xuống biển</span>. Như vậy:
                                </p>
                                <p class="text-lg md:text-xl font-black text-blue-800">Tỉ số của số bạn chọn lên rừng và số bạn chọn xuống biển là:</p>
                                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <button onclick="window.select160_1('A')" id="btn-160-1-A" class="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border-4 border-blue-100 hover:border-blue-400 transition-all text-2xl font-black">
                                        <span class="text-blue-400 text-lg">A.</span>
                                        <div class="flex flex-col items-center"><span>13</span><div class="w-10 h-0.5 bg-gray-800"></div><span>32</span></div>
                                    </button>
                                    <button onclick="window.select160_1('B')" id="btn-160-1-B" class="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border-4 border-blue-100 hover:border-blue-400 transition-all text-2xl font-black">
                                        <span class="text-blue-400 text-lg">B.</span>
                                        <div class="flex flex-col items-center"><span>19</span><div class="w-10 h-0.5 bg-gray-800"></div><span>32</span></div>
                                    </button>
                                    <button onclick="window.select160_1('C')" id="btn-160-1-C" class="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border-4 border-blue-100 hover:border-blue-400 transition-all text-2xl font-black">
                                        <span class="text-blue-400 text-lg">C.</span>
                                        <div class="flex flex-col items-center"><span>13</span><div class="w-10 h-0.5 bg-gray-800"></div><span>19</span></div>
                                    </button>
                                    <button onclick="window.select160_1('D')" id="btn-160-1-D" class="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border-4 border-blue-100 hover:border-blue-400 transition-all text-2xl font-black">
                                        <span class="text-blue-400 text-lg">D.</span>
                                        <div class="flex flex-col items-center"><span>19</span><div class="w-10 h-0.5 bg-gray-800"></div><span>13</span></div>
                                    </button>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-160-1').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-160-1" onclick="window.check_160_1()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-160-1" class="hidden bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg font-bold text-blue-900 space-y-1">
                                <p>Số bạn chọn lên rừng là 13 bạn.</p>
                                <p>Số bạn chọn xuống biển là 19 bạn.</p>
                                <p>Tỉ số của số bạn chọn lên rừng và số bạn chọn xuống biển là 13 : 19 hay <span class="text-emerald-700 font-black">13/19</span>.</p>
                                <p>Đáp án đúng: <span class="text-emerald-700 font-black">C. 13/19</span>.</p>
                                <p class="text-emerald-600 mt-2">Chúc mừng em đã chọn đúng!</p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Bài 2 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson160_b2" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-emerald-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">2</div>
                                <h3 class="text-xl md:text-2xl font-black text-emerald-700">Bài 2. Giải bài toán</h3>
                            </div>
                            <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-4">
                                <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                                    Hưởng ứng phong trào quyên góp sách vào thư viện để xây dựng tủ sách dùng chung, lớp 5A và lớp 5B quyên góp được <span class="font-black text-blue-700">126 quyển sách</span>. Biết rằng số quyển sách lớp 5A quyên góp bằng <span class="inline-flex flex-col items-center align-middle mx-1 font-black text-blue-700 text-base"><span>5</span><div class="w-4 h-0.5 bg-blue-700"></div><span>4</span></span> số quyển sách lớp 5B quyên góp. Hỏi mỗi lớp quyên góp bao nhiêu quyển sách vào thư viện?
                                </p>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div class="bg-white p-4 rounded-2xl border border-emerald-200">
                                        <label class="block text-emerald-900 font-bold mb-2">Lớp 5A quyên góp được:</label>
                                        <div class="flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <input id="160-2-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none focus:border-emerald-500" placeholder="?">
                                            <span class="font-bold text-gray-800">quyển sách</span>
                                        </div>
                                    </div>
                                    <div class="bg-white p-4 rounded-2xl border border-emerald-200">
                                        <label class="block text-emerald-900 font-bold mb-2">Lớp 5B quyên góp được:</label>
                                        <div class="flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <input id="160-2-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-emerald-300 rounded-xl font-bold outline-none focus:border-emerald-500" placeholder="?">
                                            <span class="font-bold text-gray-800">quyển sách</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-160-2').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-160-2" onclick="window.check_160_2()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-160-2" class="hidden bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-lg font-bold text-emerald-900 space-y-1">
                                <p>Ta có sơ đồ:<br>Lớp 5A: |---|---|---|---|---|<br>Lớp 5B: |---|---|---|---|</p>
                                <p>Theo sơ đồ, tổng số phần bằng nhau là: 5 + 4 = 9 (phần).</p>
                                <p>Lớp 5A quyên góp được số quyển sách là: 126 : 9 × 5 = 70 (quyển).</p>
                                <p>Lớp 5B quyên góp được số quyển sách là: 126 - 70 = 56 (quyển).</p>
                                <p>Đáp số: Lớp 5A: 70 quyển sách; Lớp 5B: 56 quyển sách.</p>
                                <p class="text-emerald-700 mt-2">Chúc mừng em đã giải đúng!</p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Bài 3 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson160_b3" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-amber-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">3</div>
                                <div class="flex items-center gap-2">
                                    <span class="px-3 py-1 bg-amber-100 border border-amber-300 rounded-xl text-amber-800 font-black text-sm md:text-base">Số ?</span>
                                </div>
                            </div>
                            <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4">
                                <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                                    Trên bản đồ tỉ lệ <span class="font-black text-blue-700">1 : 3 000</span> của một khu đô thị, thửa đất xây dựng trường tiểu học là hình chữ nhật có chiều dài <span class="font-black text-blue-700">3 cm</span>, chiều rộng <span class="font-black text-blue-700">2 cm</span>.
                                </p>
                                <div class="my-4">
                                    <img src="assets/images/toan/toan_tap_2/160/160-3-ban-do.png" class="max-w-[600px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Bản đồ quy hoạch khu đô thị tỉ lệ 1:3000">
                                </div>
                                <div class="space-y-4">
                                    <div class="bg-white p-4 rounded-2xl border border-amber-200">
                                        <div class="flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span class="font-bold text-gray-800 text-base md:text-lg">a) Chiều dài thật của thửa đất xây dựng trường tiểu học là</span>
                                            <input id="160-3-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none focus:border-amber-500" placeholder="?">
                                            <span class="font-bold text-gray-800 text-base md:text-lg">m.</span>
                                        </div>
                                    </div>
                                    <div class="bg-white p-4 rounded-2xl border border-amber-200">
                                        <div class="flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                            <span class="font-bold text-gray-800 text-base md:text-lg">b) Chiều rộng thật của thửa đất xây dựng trường tiểu học là</span>
                                            <input id="160-3-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none focus:border-amber-500" placeholder="?">
                                            <span class="font-bold text-gray-800 text-base md:text-lg">m.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-160-3').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-160-3" onclick="window.check_160_3()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-160-3" class="hidden bg-amber-50 p-4 rounded-2xl border border-amber-200 text-lg font-bold text-amber-900 space-y-1">
                                <p>Tỉ lệ 1 : 3 000 cho biết 1 cm trên bản đồ ứng với 3 000 cm ngoài thực tế.</p>
                                <p>a) Chiều dài thật của thửa đất là: 3 × 3 000 = 9 000 cm = 90 m.</p>
                                <p>b) Chiều rộng thật của thửa đất là: 2 × 3 000 = 6 000 cm = 60 m.</p>
                                <p>Đáp số: a) 90 m; b) 60 m.</p>
                                <p class="text-amber-800 mt-2">Chúc mừng em đã tính toán chính xác!</p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Bài 4 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; padding: 0 1rem;">
                        <div id="lesson160_b4" class="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-rose-500 space-y-6">
                            <div class="flex items-center gap-4 mb-2">
                                <div class="w-12 h-12 md:w-14 md:h-14 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">4</div>
                                <h3 class="text-xl md:text-2xl font-black text-rose-700">Bài 4. Giải bài toán</h3>
                            </div>
                            <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-4">
                                <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                                    Mai và Việt gấp ngôi sao giấy tặng Nam nhân ngày sinh nhật. Việt gấp được ít hơn Mai <span class="font-black text-blue-700">11 ngôi sao</span> và số ngôi sao Việt gấp được bằng <span class="inline-flex flex-col items-center align-middle mx-1 font-black text-blue-700 text-base"><span>4</span><div class="w-4 h-0.5 bg-blue-700"></div><span>5</span></span> số ngôi sao Mai gấp được. Hỏi cả hai bạn đã gấp được bao nhiêu ngôi sao?
                                </p>
                                <div class="bg-white p-4 rounded-2xl border border-rose-200">
                                    <div class="flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
                                        <span class="font-bold text-gray-800 text-base md:text-lg">Cả hai bạn đã gấp được:</span>
                                        <input id="160-4" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-28 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none focus:border-rose-500" placeholder="?">
                                        <span class="font-bold text-gray-800 text-base md:text-lg">ngôi sao.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex justify-end items-center mt-4 gap-3">
                                <button onclick="document.getElementById('sol-160-4').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-160-4" onclick="window.check_160_4()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                            <div id="sol-160-4" class="hidden bg-rose-50 p-4 rounded-2xl border border-rose-200 text-lg font-bold text-rose-900 space-y-1">
                                <p>Ta có sơ đồ:<br>Việt: |---|---|---|---|<br>Mai:  |---|---|---|---|---|</p>
                                <p>Theo sơ đồ, hiệu số phần bằng nhau là: 5 - 4 = 1 (phần).</p>
                                <p>Số ngôi sao Việt gấp được là: 11 : 1 × 4 = 44 (ngôi sao).</p>
                                <p>Số ngôi sao Mai gấp được là: 44 + 11 = 55 (ngôi sao).</p>
                                <p>Cả hai bạn đã gấp được số ngôi sao là: 44 + 55 = 99 (ngôi sao).</p>
                                <p>Đáp số: 99 ngôi sao.</p>
                                <p class="text-rose-700 mt-2">Chúc mừng em đã giải đúng bài toán!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,

    quizPool: [
        {
            question: "Lớp 5A có 13 bạn chọn lên rừng, 19 bạn chọn xuống biển. Tỉ số của số bạn chọn lên rừng và số bạn chọn xuống biển là:",
            options: ["13/19", "19/13", "13/32", "19/32"],
            answer: 0
        },
        {
            question: "Lớp 5A có 32 bạn. 19 bạn chọn xuống biển. Tỉ số của số bạn chọn xuống biển và tổng số học sinh cả lớp là:",
            options: ["19/32", "13/32", "19/13", "32/19"],
            answer: 0
        },
        {
            question: "Lớp 5A và 5B quyên góp được 126 quyển sách. Tỉ số sách của 5A và 5B là 5/4. Tổng số phần bằng nhau là:",
            options: ["9 phần", "1 phần", "5 phần", "4 phần"],
            answer: 0
        },
        {
            question: "Trong bài toán quyên góp sách, số quyển sách lớp 5A quyên góp được là:",
            options: ["70 quyển", "56 quyển", "60 quyển", "66 quyển"],
            answer: 0
        },
        {
            question: "Trong bài toán quyên góp sách, số quyển sách lớp 5B quyên góp được là:",
            options: ["56 quyển", "70 quyển", "63 quyển", "46 quyển"],
            answer: 0
        },
        {
            question: "Trên bản đồ tỉ lệ 1 : 3 000, 1 cm trên bản đồ tương ứng với bao nhiêu mét ngoài thực tế?",
            options: ["30 m", "3 m", "300 m", "3 000 m"],
            answer: 0
        },
        {
            question: "Trên bản đồ tỉ lệ 1 : 3 000, chiều dài 3 cm trên bản đồ ứng với độ dài thật là:",
            options: ["90 m", "9 m", "900 m", "9 000 m"],
            answer: 0
        },
        {
            question: "Trên bản đồ tỉ lệ 1 : 3 000, chiều rộng 2 cm trên bản đồ ứng với độ dài thật là:",
            options: ["60 m", "6 m", "600 m", "6 000 m"],
            answer: 0
        },
        {
            question: "Việt ít hơn Mai 11 ngôi sao. Tỉ số ngôi sao Việt/Mai là 4/5. Hiệu số phần bằng nhau là:",
            options: ["1 phần", "9 phần", "4 phần", "5 phần"],
            answer: 0
        },
        {
            question: "Việt ít hơn Mai 11 ngôi sao. Tỉ số ngôi sao Việt/Mai là 4/5. Việt gấp được bao nhiêu ngôi sao?",
            options: ["44 ngôi sao", "55 ngôi sao", "11 ngôi sao", "99 ngôi sao"],
            answer: 0
        },
        {
            question: "Việt ít hơn Mai 11 ngôi sao. Tỉ số ngôi sao Việt/Mai là 4/5. Mai gấp được bao nhiêu ngôi sao?",
            options: ["55 ngôi sao", "44 ngôi sao", "11 ngôi sao", "99 ngôi sao"],
            answer: 0
        },
        {
            question: "Cả Mai và Việt gấp được tổng cộng bao nhiêu ngôi sao?",
            options: ["99 ngôi sao", "88 ngôi sao", "110 ngôi sao", "55 ngôi sao"],
            answer: 0
        },
        {
            question: "Muốn tìm hai số khi biết Tổng và Tỉ số của hai số đó, bước đầu tiên ta tìm:",
            options: ["Tổng số phần bằng nhau", "Hiệu số phần bằng nhau", "Giá trị một phần", "Số lớn"],
            answer: 0
        },
        {
            question: "Diện tích thực tế của thửa đất xây dựng trường tiểu học (chiều dài thật 90 m, chiều rộng thật 60 m) là:",
            options: ["5 400 m²", "540 m²", "54 000 m²", "150 m²"],
            answer: 0
        },
        {
            question: "Tỉ số của hai số a và b (với b ≠ 0) là:",
            options: ["a : b hay a/b", "b : a hay b/a", "a + b", "a × b"],
            answer: 0
        }
    ]
};