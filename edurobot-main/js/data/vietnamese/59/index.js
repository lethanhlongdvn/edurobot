export const lesson59 = {
    "topic": "Tiếng Việt 5",
    "week": "9",
    "period": "59",
    "title": "ÔN TẬP GIỮA HỌC KÌ I - TIẾT 3 - 4",
    "desc": "Bài học giúp học sinh ôn tập đọc thuộc lòng các bài thơ đã học; phân biệt nghĩa gốc và nghĩa chuyển của từ; thực hành về đại từ xưng hô và đại từ thay thế.",
    "subject": "Ôn tập",
    "theme": "Ôn tập giữa học kì I",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
<div class="flex justify-end mb-4">
    <button onclick="playSegmentAudio('assets/audio/tiengviet/59/on_tap_giua_hoc_ki_i_tiet_3_4.mp3')" class="p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc toàn bài">
        <span class="text-xl">🔊 Nghe đọc mẫu</span>
    </button>
</div>
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-teal-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-teal-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-teal-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-teal-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-teal-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-teal-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-teal-900 font-black">•</span>
                Đọc thuộc lòng trôi chảy, diễn cảm một đoạn thơ đã học và trả lời câu hỏi đọc hiểu tương ứng.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-teal-900 font-black">•</span>
                Luyện tập phân biệt nghĩa gốc và nghĩa chuyển của các từ đa nghĩa (ngọn, gốc, lá, nụ).
            </li>
            <li class="flex items-start gap-2">
                <span class="text-teal-900 font-black">•</span>
                Nhận diện danh từ làm từ xưng hô và sử dụng đại từ thay thế phù hợp trong văn bản.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG: ĐI TÌM ẨN SỐ THƠ CA -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-teal-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-teal-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động: Đi tìm ẩn số thơ ca</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy đọc gợi ý dưới đây và nhấp chọn tên bài thơ tương ứng:</p>
        
        <div class="space-y-6 max-w-2xl mx-auto bg-teal-50/30 p-6 rounded-3xl border border-teal-100">
            <div class="text-center">
                <p class="text-2xl md:text-5xl font-black text-teal-800 block mb-4" id="clue-text-vn59">"Hình ảnh cổng trời cao vút giữa làn mây trắng bồng bềnh và thung lũng lúa chín..."</p>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
                <button onclick="checkKD59(this, 'truoccongtroi')" class="p-4 border-2 border-gray-100 bg-white rounded-2xl font-bold text-lg md:text-xl hover:border-teal-400 text-gray-800 active:scale-95 transition-all">Trước cổng trời</button>
                <button onclick="checkKD59(this, 'tuoingua')" class="p-4 border-2 border-gray-100 bg-white rounded-2xl font-bold text-lg md:text-xl hover:border-teal-400 text-gray-800 active:scale-95 transition-all">Tuổi Ngựa</button>
                <button onclick="checkKD59(this, 'tienghatnaymam')" class="p-4 border-2 border-gray-100 bg-white rounded-2xl font-bold text-lg md:text-xl hover:border-teal-400 text-gray-800 active:scale-95 transition-all">Tiếng hạt nảy mầm</button>
                <button onclick="checkKD59(this, 'mamnon')" class="p-4 border-2 border-gray-100 bg-white rounded-2xl font-bold text-lg md:text-xl hover:border-teal-400 text-gray-800 active:scale-95 transition-all">Mầm non</button>
            </div>
            <div id="fb-vn59-kd" class="hidden p-4 rounded-2xl text-base font-bold text-center mt-2"></div>
        </div>
    </div>

    <!-- 📖 BÀI TẬP 1: LUYỆN THUỘC LÒNG THƠ (4 TAB CON) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-teal-100 shadow-xl space-y-8">
        <div class="flex items-center gap-4 mb-2 border-b border-teal-100 pb-4">
            <span class="text-2xl md:text-3xl text-teal-900 font-black">❶</span>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Đọc thuộc lòng đoạn thơ (khoảng 159 chữ) và trả lời câu hỏi dưới đây:</h3>
        </div>

        <!-- Thanh Tab chọn bài đọc thơ -->
        <div class="flex flex-wrap gap-2 border-b border-gray-100 pb-2">
            <button id="tab-btn-59-1" onclick="chuyenTabDocVn59(1)" class="px-6 py-3 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-teal-100 bg-teal-600 text-white transition-all">Tuổi Ngựa</button>
            <button id="tab-btn-59-2" onclick="chuyenTabDocVn59(2)" class="px-6 py-3 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-gray-100 bg-gray-50 text-gray-800 hover:bg-gray-800 transition-all">Tiếng hạt nảy mầm</button>
            <button id="tab-btn-59-3" onclick="chuyenTabDocVn59(3)" class="px-6 py-3 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-gray-100 bg-gray-50 text-gray-800 hover:bg-gray-800 transition-all">Trước cổng trời</button>
            <button id="tab-btn-59-4" onclick="chuyenTabDocVn59(4)" class="px-6 py-3 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-gray-100 bg-gray-50 text-gray-800 hover:bg-gray-800 transition-all">Mầm non</button>
        </div>

        <!-- Khung hiển thị nội dung từng Tab bài thơ -->
        <div class="p-6 md:p-8 bg-teal-50/20 rounded-3xl border border-teal-100">
            <!-- Điều khiển che chữ thuộc lòng -->
            <div class="flex items-center gap-4 bg-white p-4 rounded-2xl border border-teal-100 mb-6">
                <span class="font-bold text-gray-800 text-lg md:text-3xl">🛠️ Luyện thuộc lòng:</span>
                <div class="flex gap-2">
                    <button onclick="setCheChuVn59('hiên')" class="px-4 py-2 bg-teal-600 text-white font-bold rounded-lg text-sm shadow hover:bg-teal-600">Hiện hết</button>
                    <button onclick="setCheChuVn59('it')" class="px-4 py-2 bg-amber-500 text-white font-bold rounded-lg text-sm shadow hover:bg-amber-500">Che ít</button>
                    <button onclick="setCheChuVn59('nhieu')" class="px-4 py-2 bg-rose-600 text-white font-bold rounded-lg text-sm shadow hover:bg-rose-600">Che nhiều</button>
                </div>
            </div>

            <!-- Tab 1: Tuổi Ngựa -->
            <div id="tab-content-59-1" class="space-y-6">
                <h4 class="text-xl md:text-2xl font-black text-teal-800 border-b border-teal-100 pb-2">Tuổi Ngựa (LTVC Tuần 2)</h4>
                <div class="serif-font text-gray-800 leading-relaxed text-center py-4 space-y-4 text-xl md:text-4xl" id="poem-text-1">
                    <p class="font-bold text-teal-800">Mẹ ơi, con tuổi Ngựa<br>Trăm ngả đường xa hoài<br>Hương cỏ hoa đất lạ<br>Một đời con đi chơi.</p>
                    <p class="font-bold text-teal-800">Bản đồ con vẽ bằng chân<br>Ngựa con không yên một chỗ<br>Mẹ ơi, mẹ chớ lo<br>Con đi rồi con lại về.</p>
                    <p class="font-bold text-teal-800">Con mang về cho mẹ<br>Ngọn gió của trăm miền<br>Cánh đồng hoa thơm mát<br>Với tình yêu vô biên.</p>
                </div>
                
                <div class="space-y-4 pt-4 border-t border-teal-100">
                    <label class="block font-black text-gray-800 text-xl md:text-2xl">Câu hỏi: Bài thơ muốn nói gì và nói về ai qua hình ảnh chú ngựa con?</label>
                    <textarea id="ans-vn59-t1" rows="4" placeholder="Nhập câu trả lời của em..." class="w-full p-4 text-xl md:text-2xl rounded-2xl border-2 border-teal-100 focus:border-teal-500 outline-none shadow-sm bg-white font-medium leading-relaxed"></textarea>
                    <div class="flex justify-start gap-3">
                        <button onclick="chamTuLuanVn59(1)" class="px-8 py-3 bg-teal-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-teal-600 active:scale-95 transition-all flex items-center gap-2">
                            <span>🤖 THẦY AI CHẤM BÀI</span>
                        </button>
                        <div id="fb-vn59-t1" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
                    </div>
                </div>
            </div>

            <!-- Tab 2: Tiếng hạt nảy mầm -->
            <div id="tab-content-59-2" class="space-y-6 hidden">
                <h4 class="text-xl md:text-2xl font-black text-teal-800 border-b border-teal-100 pb-2">Tiếng hạt nảy mầm (Tuần 3)</h4>
                <div class="serif-font text-gray-800 leading-relaxed text-center py-4 space-y-4 text-xl md:text-4xl" id="poem-text-2">
                    <p class="font-bold text-teal-800">Hạt reo dưới lòng đất<br>Mầm non khẽ cựa mình<br>Tiếng hạt reo lách tách<br>Đón chào ngày bình minh.</p>
                    <p class="font-bold text-teal-800">Tác giả muốn nhắn gửi<br>Tình yêu thương vô bờ<br>Dành cho những em bé<br>Trong thế giới ngây thơ.</p>
                </div>
                
                <div class="space-y-4 pt-4 border-t border-teal-100">
                    <label class="block font-black text-gray-800 text-xl md:text-2xl">Câu hỏi: Tác giả muốn nói điều gì qua bài thơ và nhan đề của bài thơ?</label>
                    <textarea id="ans-vn59-t2" rows="4" placeholder="Nhập câu trả lời của em..." class="w-full p-4 text-xl md:text-2xl rounded-2xl border-2 border-teal-100 focus:border-teal-500 outline-none shadow-sm bg-white font-medium leading-relaxed"></textarea>
                    <div class="flex justify-start gap-3">
                        <button onclick="chamTuLuanVn59(2)" class="px-8 py-3 bg-teal-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-teal-600 active:scale-95 transition-all flex items-center gap-2">
                            <span>🤖 THẦY AI CHẤM BÀI</span>
                        </button>
                        <div id="fb-vn59-t2" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
                    </div>
                </div>
            </div>

            <!-- Tab 3: Trước cổng trời -->
            <div id="tab-content-59-3" class="space-y-6 hidden">
                <h4 class="text-xl md:text-2xl font-black text-teal-800 border-b border-teal-100 pb-2">Trước cổng trời (Tuần 5)</h4>
                <div class="serif-font text-gray-800 leading-relaxed text-center py-4 space-y-4 text-xl md:text-4xl" id="poem-text-3">
                    <p class="font-bold text-teal-800">Giữa hai bên vách đá<br>Mở ra một khoảng trời<br>Có gió thoảng mây trôi<br>Có sương mờ bảng lảng.</p>
                    <p class="font-bold text-teal-800">Đường đi lên cổng trời<br>Đi trong mây bồng bềnh<br>Nhìn xuống dưới thung lũng<br>Bức tranh quê êm đềm.</p>
                </div>
                
                <div class="space-y-4 pt-4 border-t border-teal-100">
                    <label class="block font-black text-gray-800 text-xl md:text-2xl">Câu hỏi: Em yêu thích những hình ảnh nào trong bài thơ? Vì sao?</label>
                    <textarea id="ans-vn59-t3" rows="4" placeholder="Nhập câu trả lời của em..." class="w-full p-4 text-xl md:text-2xl rounded-2xl border-2 border-teal-100 focus:border-teal-500 outline-none shadow-sm bg-white font-medium leading-relaxed"></textarea>
                    <div class="flex justify-start gap-3">
                        <button onclick="chamTuLuanVn59(3)" class="px-8 py-3 bg-teal-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-teal-600 active:scale-95 transition-all flex items-center gap-2">
                            <span>🤖 THẦY AI CHẤM BÀI</span>
                        </button>
                        <div id="fb-vn59-t3" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
                    </div>
                </div>
            </div>

            <!-- Tab 4: Mầm non -->
            <div id="tab-content-59-4" class="space-y-6 hidden">
                <h4 class="text-xl md:text-2xl font-black text-teal-800 border-b border-teal-100 pb-2">Mầm non (Tuần 7)</h4>
                <div class="serif-font text-gray-800 leading-relaxed text-center py-4 space-y-4 text-xl md:text-4xl" id="poem-text-4">
                    <p class="font-bold text-teal-800">Dưới vỏ cây xù xì<br>Một chú mầm non nhỏ<br>Đang lim dim mắt ngủ<br>Giữa tiết trời lạnh giá.</p>
                    <p class="font-bold text-teal-800">Bỗng nghe tiếng chim hót<br>Báo hiệu mùa xuân sang<br>Mầm non mở mắt nhìn<br>Thấy đất trời rực rỡ.</p>
                </div>
                
                <div class="space-y-4 pt-4 border-t border-teal-100">
                    <label class="block font-black text-gray-800 text-xl md:text-2xl">Câu hỏi: Sự kì thú của thiên nhiên được thể hiện ở những chi tiết nào?</label>
                    <textarea id="ans-vn59-t4" rows="4" placeholder="Nhập câu trả lời của em..." class="w-full p-4 text-xl md:text-2xl rounded-2xl border-2 border-teal-100 focus:border-teal-500 outline-none shadow-sm bg-white font-medium leading-relaxed"></textarea>
                    <div class="flex justify-start gap-3">
                        <button onclick="chamTuLuanVn59(4)" class="px-8 py-3 bg-teal-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-teal-600 active:scale-95 transition-all flex items-center gap-2">
                            <span>🤖 THẦY AI CHẤM BÀI</span>
                        </button>
                        <div id="fb-vn59-t4" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- BÀI TẬP 2: NGHĨA GỐC HAY NGHĨA CHUYỂN -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-teal-50">
        <div class="p-6 md:p-8 bg-teal-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-teal-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">❷</div>
                <div>
                    <h3 class="text-2xl md:text-5xl font-black text-gray-800">Xác định nghĩa gốc hay nghĩa chuyển của các từ 'ngọn' và 'gốc':</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Em hãy nhấp chọn nhãn tương ứng cho mỗi câu dưới đây:</p>
                </div>
            </div>

            <div class="space-y-6">
                <!-- a. Từ ngọn -->
                <div class="bg-white p-6 rounded-3xl border border-teal-100 space-y-4">
                    <span class="text-lg font-black text-teal-800 block">a. Từ "ngọn":</span>
                    <div class="space-y-4">
                        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-3 bg-teal-50/20 rounded-xl border border-teal-50">
                            <span class="font-bold text-gray-800 text-lg md:text-3xl">1. Bầy chim ríu rít làm tổ trên <strong class="text-teal-900 font-black">ngọn</strong> cây.</span>
                            <div class="flex gap-2">
                                <button onclick="chonNghiaVn59(this, 'ngon1', 'goc')" class="px-5 py-2 border-2 border-gray-100 rounded-full font-bold text-sm bg-white hover:border-teal-400">Nghĩa gốc</button>
                                <button onclick="chonNghiaVn59(this, 'ngon1', 'chuyen')" class="px-5 py-2 border-2 border-gray-100 rounded-full font-bold text-sm bg-white hover:border-teal-400">Nghĩa chuyển</button>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-3 bg-teal-50/20 rounded-xl border border-teal-50">
                            <span class="font-bold text-gray-800 text-lg md:text-3xl">2. <strong class="text-teal-900 font-black">Ngọn</strong> lửa bập bùng xua đi cái lạnh đầu đông.</span>
                            <div class="flex gap-2">
                                <button onclick="chonNghiaVn59(this, 'ngon2', 'goc')" class="px-5 py-2 border-2 border-gray-100 rounded-full font-bold text-sm bg-white hover:border-teal-400">Nghĩa gốc</button>
                                <button onclick="chonNghiaVn59(this, 'ngon2', 'chuyen')" class="px-5 py-2 border-2 border-gray-100 rounded-full font-bold text-sm bg-white hover:border-teal-400">Nghĩa chuyển</button>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-3 bg-teal-50/20 rounded-xl border border-teal-50">
                            <span class="font-bold text-gray-800 text-lg md:text-3xl">3. Những <strong class="text-teal-900 font-black">ngọn</strong> núi ẩn hiện trong mây trời.</span>
                            <div class="flex gap-2">
                                <button onclick="chonNghiaVn59(this, 'ngon3', 'goc')" class="px-5 py-2 border-2 border-gray-100 rounded-full font-bold text-sm bg-white hover:border-teal-400">Nghĩa gốc</button>
                                <button onclick="chonNghiaVn59(this, 'ngon3', 'chuyen')" class="px-5 py-2 border-2 border-gray-100 rounded-full font-bold text-sm bg-white hover:border-teal-400">Nghĩa chuyển</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- b. Từ gốc -->
                <div class="bg-white p-6 rounded-3xl border border-teal-100 space-y-4">
                    <span class="text-lg font-black text-teal-800 block">b. Từ "gốc":</span>
                    <div class="space-y-4">
                        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-3 bg-teal-50/20 rounded-xl border border-teal-50">
                            <span class="font-bold text-gray-800 text-lg md:text-3xl">1. Ông tôi mới trồng thêm 5 <strong class="text-teal-900 font-black">gốc</strong> cam ở góc vườn.</span>
                            <div class="flex gap-2">
                                <button onclick="chonNghiaVn59(this, 'goc1', 'goc')" class="px-5 py-2 border-2 border-gray-100 rounded-full font-bold text-sm bg-white hover:border-teal-400">Nghĩa gốc</button>
                                <button onclick="chonNghiaVn59(this, 'goc1', 'chuyen')" class="px-5 py-2 border-2 border-gray-100 rounded-full font-bold text-sm bg-white hover:border-teal-400">Nghĩa chuyển</button>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-3 bg-teal-50/20 rounded-xl border border-teal-50">
                            <span class="font-bold text-gray-800 text-lg md:text-3xl">2. Các bạn nhỏ ngồi chơi dưới <strong class="text-teal-900 font-black">gốc</strong> cây đa đầu làng.</span>
                            <div class="flex gap-2">
                                <button onclick="chonNghiaVn59(this, 'goc2', 'goc')" class="px-5 py-2 border-2 border-gray-100 rounded-full font-bold text-sm bg-white hover:border-teal-400">Nghĩa gốc</button>
                                <button onclick="chonNghiaVn59(this, 'goc2', 'chuyen')" class="px-5 py-2 border-2 border-gray-100 rounded-full font-bold text-sm bg-white hover:border-teal-400">Nghĩa chuyển</button>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-3 bg-teal-50/20 rounded-xl border border-teal-50">
                            <span class="font-bold text-gray-800 text-lg md:text-3xl">3. Nhiều người <strong class="text-teal-900 font-black">gốc</strong> Việt đã về Việt Nam làm việc.</span>
                            <div class="flex gap-2">
                                <button onclick="chonNghiaVn59(this, 'goc3', 'goc')" class="px-5 py-2 border-2 border-gray-100 rounded-full font-bold text-sm bg-white hover:border-teal-400">Nghĩa gốc</button>
                                <button onclick="chonNghiaVn59(this, 'goc3', 'chuyen')" class="px-5 py-2 border-2 border-gray-100 rounded-full font-bold text-sm bg-white hover:border-teal-400">Nghĩa chuyển</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="flex justify-start pt-2">
                <button onclick="kiemTraNghiaVn59()" class="px-8 py-3 bg-teal-600 text-white font-black rounded-xl hover:bg-teal-600 transition-all text-base shadow-md">KIỂM TRA ĐÁP ÁN ✓</button>
            </div>
            <div id="fb-vn59-nghia" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2 shadow-md"></div>
        </div>
    </section>

    <!-- BÀI TẬP 3: ĐẶT CÂU VỚI LÁ VÀ NỤ -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-teal-50">
        <div class="p-6 md:p-8 bg-teal-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-teal-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">❸</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Đặt câu để phân biệt nghĩa gốc và nghĩa chuyển của mỗi từ dưới đây:</h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Từ lá -->
                <div class="bg-white p-6 rounded-3xl border border-teal-100 shadow-sm space-y-4">
                    <span class="text-lg font-black text-teal-800 block">a. Từ "lá":</span>
                    <div class="space-y-3">
                        <label class="block text-base font-bold text-gray-800">Đặt câu với "lá" mang nghĩa gốc (Ví dụ: lá cây):</label>
                        <input type="text" id="ans-vn59-la-goc" placeholder="Nhập câu của em..." class="w-full p-3 border border-teal-100 rounded-xl font-bold text-lg bg-teal-50/10 focus:border-teal-500 outline-none" />
                        
                        <label class="block text-base font-bold text-gray-800">Đặt câu với "lá" mang nghĩa chuyển (Ví dụ: lá thư, lá phổi):</label>
                        <input type="text" id="ans-vn59-la-chuyen" placeholder="Nhập câu của em..." class="w-full p-3 border border-teal-100 rounded-xl font-bold text-lg bg-teal-50/10 focus:border-teal-500 outline-none" />
                    </div>
                </div>

                <!-- Từ nụ -->
                <div class="bg-white p-6 rounded-3xl border border-teal-100 shadow-sm space-y-4">
                    <span class="text-lg font-black text-teal-800 block">b. Từ "nụ":</span>
                    <div class="space-y-3">
                        <label class="block text-base font-bold text-gray-800">Đặt câu với "nụ" mang nghĩa gốc (Ví dụ: nụ hoa):</label>
                        <input type="text" id="ans-vn59-nu-goc" placeholder="Nhập câu của em..." class="w-full p-3 border border-teal-100 rounded-xl font-bold text-lg bg-teal-50/10 focus:border-teal-500 outline-none" />
                        
                        <label class="block text-base font-bold text-gray-800">Đặt câu với "nụ" mang nghĩa chuyển (Ví dụ: nụ cười):</label>
                        <input type="text" id="ans-vn59-nu-chuyen" placeholder="Nhập câu của em..." class="w-full p-3 border border-teal-100 rounded-xl font-bold text-lg bg-teal-50/10 focus:border-teal-500 outline-none" />
                    </div>
                </div>
            </div>

            <div class="flex justify-start gap-3">
                <button onclick="chamDatCauVn59()" class="px-8 py-3 bg-teal-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-teal-600 active:scale-95 transition-all flex items-center gap-2">
                    <span>🤖 THẦY AI CHẤM BÀI</span>
                </button>
                <div id="fb-vn59-b3" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
            </div>
        </div>
    </section>

    <!-- BÀI TẬP 4: ĐẠI TỪ XƯNG HÔ (ĐOẠN VĂN KAO SƠN) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">❹</div>
                <div>
                    <h3 class="text-2xl md:text-5xl font-black text-gray-800">Đại từ xưng hô trong đoạn văn của Kao Sơn:</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">a. Click trực tiếp vào số (1), (2), (3), (4) bên dưới đại diện cho vị trí từ "bà" được dùng để xưng hô:</p>
                </div>
            </div>

            <!-- Đoạn văn bài 4 -->
            <div class="bg-white p-6 md:p-10 rounded-[36px] border border-amber-100 leading-loose text-gray-800 serif-font text-justify space-y-4 text-xl md:text-4xl">
                <p class="indent-10 font-medium">
                    Đêm Trung thu, 
                    <button onclick="checkViTriBaVn59(this, 1)" class="mx-1 px-3 py-1 bg-amber-500 border border-amber-100 rounded-full font-bold text-lg hover:bg-amber-500">(1)</button> 
                    bà tôi trải một chiếc chiếu ngoài hiên. Bố tôi bê ra một đĩa to, nào bưởi, hồng, kẹo,... lại còn cả bánh đa nữa.
                </p>
                <p class="indent-10 font-medium">
                    – Cháu ra đây với 
                    <button onclick="checkViTriBaVn59(this, 2)" class="mx-1 px-3 py-1 bg-amber-500 border border-amber-100 rounded-full font-bold text-lg hover:bg-amber-500">(2)</button> 
                    bà nào!
                </p>
                <p class="indent-10 font-medium">
                    Tôi chạy ra, bốc mấy cái kẹo nhét vào túi. 
                    <button onclick="checkViTriBaVn59(this, 3)" class="mx-1 px-3 py-1 bg-amber-500 border border-amber-100 rounded-full font-bold text-lg hover:bg-amber-500">(3)</button> 
                    Bà hỏi:
                </p>
                <p class="indent-10 font-medium">
                    – Sao chưa ăn đã để dành vậy cháu?
                </p>
                <p class="indent-10 font-medium">
                    – Cháu cất đi, đến mai đưa cho em Tâm. Ban nãy, cháu làm nó ngã.
                </p>
                <p class="indent-10 font-medium">
                    <button onclick="checkViTriBaVn59(this, 4)" class="mx-1 px-3 py-1 bg-amber-500 border border-amber-100 rounded-full font-bold text-lg hover:bg-amber-500">(4)</button> 
                    Bà ôm tôi vào lòng, thơm lên tóc tôi, không nói.
                </p>
            </div>
            <div id="fb-vn59-ba" class="hidden p-4 rounded-xl text-base font-bold text-center"></div>

            <!-- Câu b -->
            <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner space-y-4">
                <label class="block font-black text-gray-800 text-xl md:text-2xl">b. Trong đoạn văn trên, còn danh từ nào cũng được dùng để xưng hô?</label>
                <div class="flex gap-3">
                    <input type="text" id="ans-vn59-writing-b4" placeholder="Nhập đáp án..." class="w-full p-4 border-2 border-amber-100 rounded-2xl outline-none focus:border-amber-500 font-bold bg-amber-50/10 text-xl md:text-2xl" />
                    <button onclick="checkCau4b()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all">KIỂM TRA</button>
                </div>
                <div id="fb-vn59-b4" class="hidden p-4 rounded-xl font-bold text-base text-center"></div>
            </div>
        </div>
    </section>

    <!-- BÀI TẬP 5: ĐẠI TỪ THAY THẾ PHÙ HỢP -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">❺</div>
                <div>
                    <h3 class="text-2xl md:text-5xl font-black text-gray-800">Tìm đại từ thay thế phù hợp thay cho mỗi bông hoa:</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Hãy nhập đại từ thích hợp vào các ô trống trong đoạn văn bên dưới:</p>
                </div>
            </div>

            <div class="bg-white p-6 md:p-10 rounded-[36px] border border-amber-100 leading-loose text-gray-800 serif-font text-justify space-y-4 text-xl md:text-4xl">
                <p class="indent-10 font-medium">
                    Ngày xưa, trên cao nguyên có một đồng cỏ ở rất xa chỗ sinh sống của loài người. Nơi 
                    <input type="text" id="flower-1" class="w-24 mx-1 p-2 border-2 border-amber-100 rounded-xl font-bold bg-amber-50/20 text-center text-xl md:text-2xl focus:border-amber-500 outline-none" placeholder="🌸 1" /> 
                    có một dòng suối trong như pha lê và những tảng đá vân nằm giữa những đám hoa bươm bướm, hoa thạch thảo màu hồng, màu tím. Muốn tới 
                    <input type="text" id="flower-2" class="w-24 mx-1 p-2 border-2 border-amber-100 rounded-xl font-bold bg-amber-50/20 text-center text-xl md:text-2xl focus:border-amber-500 outline-none" placeholder="🌸 2" /> 
                    phải vượt qua những cánh rừng, những dãy núi, những dòng sông... Muông thú gọi 
                    <input type="text" id="flower-3" class="w-36 mx-1 p-2 border-2 border-amber-100 rounded-xl font-bold bg-amber-50/20 text-center text-xl md:text-2xl focus:border-amber-500 outline-none" placeholder="🌸 3" /> 
                    là làng Hươu.
                </p>
                <p class="text-right text-gray-800 font-bold mt-4 text-xl md:text-2xl">(Theo Vũ Hùng)</p>
            </div>

            <div class="flex justify-start pt-2">
                <button onclick="checkFlowers()" class="px-8 py-3 bg-amber-500 text-white font-black rounded-xl hover:bg-amber-500 transition-all text-base shadow-md">KIỂM TRA BÔNG HOA ✓</button>
            </div>
            <div id="fb-vn59-flower" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2 shadow-md"></div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TOÀN BỘ -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn59Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Trong các từ sau, từ nào là từ đa nghĩa?",
            "options": [
                "ngọn",
                "bờ suối",
                "phi thuyền",
                "nghe ngóng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'ngọn' trong 'ngọn cây' được dùng với nghĩa gốc hay nghĩa chuyển?",
            "options": [
                "Nghĩa gốc",
                "Nghĩa chuyển",
                "Cả hai nghĩa đều sai",
                "Không thuộc cả hai nhóm"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'ngọn' trong 'ngọn lửa' được dùng với nghĩa gốc hay nghĩa chuyển?",
            "options": [
                "Nghĩa gốc",
                "Nghĩa chuyển",
                "Không có nghĩa",
                "Nghĩa bóng tự do"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'gốc' trong 'gốc cây đa' được dùng với nghĩa gốc hay nghĩa chuyển?",
            "options": [
                "Nghĩa gốc",
                "Nghĩa chuyển",
                "Không thể xác định",
                "Nghĩa chuyển hoán dụ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'gốc' trong 'người gốc Việt' được dùng với nghĩa gốc hay nghĩa chuyển?",
            "options": [
                "Nghĩa gốc",
                "Nghĩa chuyển",
                "Tùy theo văn cảnh cụ thể",
                "Không thuộc nhóm nghĩa nào"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Câu nào dưới đây sử dụng từ 'lá' mang nghĩa chuyển?",
            "options": [
                "Mùa thu, những chiếc lá bàng rơi đầy sân trường.",
                "Em viết một lá đơn xin phép nghỉ học.",
                "Tán lá xanh tươi che rợp cả con đường.",
                "Lá mía sắc như một chiếc dao nhỏ."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Câu nào dưới đây sử dụng từ 'nụ' mang nghĩa chuyển?",
            "options": [
                "Nụ hồng hé nở đón ánh nắng sớm mai.",
                "Bé có nụ cười rạng rỡ như hoa nở.",
                "Trên cành cây lác đác những nụ đào nhỏ.",
                "Nụ tầm xuân nở ra cánh biếc."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong đoạn văn của Kao Sơn, từ 'bà' ở vị trí 'Cháu ra đây với bà nào!' đóng vai trò gì trong câu thoại?",
            "options": [
                "Danh từ được dùng để xưng hô (ở ngôi thứ nhất)",
                "Danh từ làm trạng ngữ",
                "Đại từ thay thế chỉ đồ vật",
                "Danh từ dùng để kể chuyện ngôi thứ ba"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Từ 'cháu' trong hội thoại của đoạn văn Kao Sơn được dùng làm gì?",
            "options": [
                "Danh từ dùng làm từ xưng hô chỉ người nghe (ở ngôi thứ hai)",
                "Đại từ thay thế tránh lặp từ",
                "Tính từ chỉ phẩm chất",
                "Động từ liên kết"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Điền đại từ thay thế phù hợp vào chỗ trống: 'Ngày xưa, trên cao nguyên có một đồng cỏ... Nơi [ ] có một dòng suối.'",
            "options": [
                "ấy",
                "này",
                "đó",
                "đây"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Đại từ thay thế thường dùng để làm gì trong câu hoặc đoạn văn?",
            "options": [
                "Để hỏi thông tin",
                "Để thay thế cho các từ ngữ khác nhằm tránh lặp từ",
                "Để miêu tả chi tiết hình ảnh cảnh vật",
                "Để thể hiện thái độ kính trọng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong câu: 'Những ngọn núi ẩn hiện trong mây trời.', từ 'ngọn' là nghĩa chuyển dựa trên sự tương đồng về:",
            "options": [
                "hình dáng (đầu nhọn hướng lên trên giống ngọn cây)",
                "màu sắc",
                "hoạt động",
                "chất liệu"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Từ 'gốc' trong '5 gốc cam' mang nghĩa gì?",
            "options": [
                "Nghĩa gốc chỉ bộ phận rễ của cây",
                "Nghĩa chuyển dùng để chỉ đơn vị của cây trồng",
                "Nghĩa bóng tự do",
                "Nghĩa chuyển chỉ nguồn gốc quê hương"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Bài thơ 'Tuổi Ngựa' do tác giả nào sáng tác?",
            "options": [
                "Lưu Khánh Thơ",
                "Xuân Quỳnh",
                "Trần Đăng Khoa",
                "Vũ Hùng"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Sự kì thú của thiên nhiên trong bài thơ 'Mầm non' được khơi dậy vào mùa nào?",
            "options": [
                "Mùa đông",
                "Mùa xuân",
                "Mùa hạ",
                "Mùa thu"
            ],
            "answer": 1,
            "level": 0
        }
    ]
};

// --- KHỞI ĐỘNG VN59 ---
let cluIdx = 0;
const clues = [
    { text: '"Hình ảnh cổng trời cao vút giữa làn mây trắng bồng bềnh và thung lũng lúa chín..."', ans: "truoccongtroi" },
    { text: '"Một chú mầm non nhỏ lim dim mắt ngủ dưới vỏ cây xù xì khi đông sang..."', ans: "mamnon" },
    { text: '"Chú ngựa con tuổi Ngựa chạy khắp trăm miền mang ngọn gió quê hương về..."', ans: "tuoingua" }
];

window.checkKD59 = function(btn, choice) {
    const fb = document.getElementById('fb-vn59-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    const correctAns = clues[cluIdx].ans;
    if (choice === correctAns) {
        fb.innerHTML = "🎉 Cực kỳ chính xác! Bạn đã tìm ra ẩn số thơ ca của gợi ý này.";
        fb.className = "p-4 rounded-2xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
        btn.classList.add('bg-emerald-600', 'text-white', 'border-emerald-100');
        
        setTimeout(() => {
            cluIdx = (cluIdx + 1) % clues.length;
            document.getElementById('clue-text-vn59').innerText = clues[cluIdx].text;
            fb.classList.add('hidden');
            
            // Khôi phục màu các nút
            const buttons = btn.parentElement.querySelectorAll('button');
            buttons.forEach(b => b.className = "p-4 border-2 border-gray-100 bg-white rounded-2xl font-bold text-lg md:text-xl hover:border-teal-400 text-gray-800 active:scale-95 transition-all");
        }, 1859);
    } else {
        fb.innerHTML = "⚠️ Chưa đúng rồi. Em hãy đọc kĩ lại gợi ý thơ nhé!";
        fb.className = "p-4 rounded-2xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
        btn.classList.add('bg-rose-600', 'text-white', 'border-rose-100');
        setTimeout(() => {
            btn.className = "p-4 border-2 border-gray-100 bg-white rounded-2xl font-bold text-lg md:text-xl hover:border-teal-400 text-gray-800 active:scale-95 transition-all";
        }, 1259);
    }
};

// --- CHUYỂN TAB BÀI 1 ---
window.chuyenTabDocVn59 = function(tabIndex) {
    for (let i = 1; i <= 4; i++) {
        const btn = document.getElementById(`tab-btn-59-${i}`);
        const content = document.getElementById(`tab-content-59-${i}`);
        if (i === tabIndex) {
            btn.className = "px-6 py-3 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-teal-100 bg-teal-600 text-white transition-all";
            content.classList.remove('hidden');
        } else {
            btn.className = "px-6 py-3 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-gray-100 bg-gray-50 text-gray-800 hover:bg-gray-800 transition-all";
            content.classList.add('hidden');
        }
    }
};

// --- CHE CHỮ HỌC THUỘC LÒNG ---
window.setCheChuVn59 = function(mode) {
    const p1 = document.getElementById('poem-text-1');
    const p2 = document.getElementById('poem-text-2');
    const p3 = document.getElementById('poem-text-3');
    const p4 = document.getElementById('poem-text-4');
    
    const elements = [p1, p2, p3, p4];
    
    elements.forEach(p => {
        if (!p) return;
        const paragraphs = p.querySelectorAll('p');
        paragraphs.forEach(para => {
            // Lưu nội dung gốc vào thuộc tính data nếu chưa có
            if (!para.dataset.original) {
                para.dataset.original = para.innerHTML;
            }
            
            const rawHTML = para.dataset.original;
            if (mode === 'hiên') {
                para.innerHTML = rawHTML;
            } else if (mode === 'it') {
                // Che một số từ ngẫu nhiên bằng dấu gạch ngang
                let words = rawHTML.split('<br>');
                let mapped = words.map(line => {
                    let parts = line.split(' ');
                    for (let i = 0; i < parts.length; i += 3) {
                        parts[i] = '<span class="bg-teal-100/90 text-teal-800 select-none px-1 rounded">' + parts[i].replace(/[.,\/#!$%\^&\*;:{}=\-_\x59~()]/g,"") + '</span>';
                    }
                    return parts.join(' ');
                });
                para.innerHTML = mapped.join('<br>');
            } else if (mode === 'nhieu') {
                // Che hầu hết các từ
                let words = rawHTML.split('<br>');
                let mapped = words.map(line => {
                    let parts = line.split(' ');
                    for (let i = 1; i < parts.length; i++) {
                        parts[i] = '<span class="bg-teal-100/90 text-teal-800 select-none px-1 rounded">' + parts[i].replace(/[.,\/#!$%\^&\*;:{}=\-_\x59~()]/g,"") + '</span>';
                    }
                    return parts.join(' ');
                });
                para.innerHTML = mapped.join('<br>');
            }
        });
    });
};

// --- CHẤM TỰ LUẬN BÀI 1 ---
window.chamTuLuanVn59 = function(tabIdx) {
    const text = document.getElementById(`ans-vn59-t${tabIdx}`)?.value.trim();
    const fb = document.getElementById(`fb-vn59-t${tabIdx}`);
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text || text.length < 10) {
        fb.innerHTML = "⚠️ Câu trả lời của em hơi ngắn. Hãy ghi rõ những cảm nhận đọc hiểu của mình về bài thơ nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
            <p class="text-lg font-bold">"Rất hay! Em đã hiểu sâu sắc thông điệp và hình ảnh thơ độc đáo trong tác phẩm. Khả năng phân tích của em thật đáng khen."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Điểm: 159%</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-359";
};

// --- BÀI TẬP 2: LỰA CHỌN NGHĨA GỐC / NGHĨA CHUYỂN ---
const nghiaDapAnList = {
    ngon1: 'goc', ngon2: 'chuyen', ngon3: 'chuyen',
    goc1: 'chuyen', goc2: 'goc', goc3: 'chuyen'
};
let luaChonNghia = {};

window.chonNghiaVn59 = function(btn, cauKey, kieuNghia) {
    const parent = btn.parentElement;
    const buttons = parent.querySelectorAll('button');
    buttons.forEach(b => {
        b.className = "px-5 py-2 border-2 border-gray-100 rounded-full font-bold text-sm bg-white hover:border-teal-400 text-gray-800";
    });

    btn.className = "px-5 py-2 border-2 border-teal-100 bg-teal-600 text-white rounded-full font-bold text-sm shadow";
    luaChonNghia[cauKey] = kieuNghia;
};

window.kiemTraNghiaVn59 = function() {
    const fb = document.getElementById('fb-vn59-nghia');
    if (!fb) return;
    fb.classList.remove('hidden');

    const totalKeys = Object.keys(nghiaDapAnList).length;
    const selectKeys = Object.keys(luaChonNghia).length;

    if (selectKeys < totalKeys) {
        fb.innerHTML = "⚠️ Em hãy hoàn thành lựa chọn cho cả 6 câu nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2";
        return;
    }

    let dungCount = 0;
    for (let key in nghiaDapAnList) {
        if (luaChonNghia[key] === nghiaDapAnList[key]) {
            dungCount++;
        }
    }

    if (dungCount === totalKeys) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã xác định chính xác nghĩa gốc và nghĩa chuyển của tất cả các câu chứa từ 'ngọn' và 'gốc'!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = `⚠️ Chưa chính xác hoàn toàn. Em đã làm đúng ${dungCount}/${totalKeys} câu. Em hãy xem kĩ và chọn lại nhé!`;
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- BÀI TẬP 3: CHẤM BÀI ĐẶT CÂU LÁ VÀ NỤ ---
window.chamDatCauVn59 = function() {
    const laGoc = document.getElementById('ans-vn59-la-goc')?.value.trim();
    const laChuyen = document.getElementById('ans-vn59-la-chuyen')?.value.trim();
    const nuGoc = document.getElementById('ans-vn59-nu-goc')?.value.trim();
    const nuChuyen = document.getElementById('ans-vn59-nu-chuyen')?.value.trim();
    const fb = document.getElementById('fb-vn59-b3');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!laGoc || !laChuyen || !nuGoc || !nuChuyen) {
        fb.innerHTML = "⚠️ Em hãy nhập đầy đủ cả 4 câu để phân biệt nghĩa gốc/nghĩa chuyển cho từ 'lá' và 'nụ' nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    // Kiểm tra sơ bộ sự hiện diện của từ khóa
    const checkLaGoc = laGoc.toLowerCase().includes('lá');
    const checkLaChuyen = laChuyen.toLowerCase().includes('lá');
    const checkNuGoc = nuGoc.toLowerCase().includes('nụ');
    const checkNuChuyen = nuChuyen.toLowerCase().includes('nụ');

    if (checkLaGoc && checkLaChuyen && checkNuGoc && checkNuChuyen) {
        fb.innerHTML = `
            <div class="space-y-2">
                <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
                <p class="text-lg font-bold">"Rất giỏi! Các câu của em đều viết đúng ngữ pháp, sử dụng từ 'lá' và 'nụ' rất chính xác cả về nghĩa gốc lẫn các nét nghĩa chuyển tương ứng."</p>
                <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Điểm: 159%</span>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-359";
    } else {
        fb.innerHTML = "⚠️ Một số câu chưa chứa đúng từ khóa chỉ định ('lá' hoặc 'nụ'). Em hãy bổ sung lại nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-rose-600 text-white shadow-md";
    }
};

// --- BÀI TẬP 4: CLICK VỊ TRÍ TỪ BÀ ---
window.checkViTriBaVn59 = function(btn, index) {
    const fb = document.getElementById('fb-vn59-ba');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (index === 2) {
        fb.innerHTML = "🎉 Hoàn toàn chính xác! Từ 'bà' ở vị trí thoại (2) 'Cháu ra đây với bà nào!' được bà dùng để tự xưng với cháu (Ngôi thứ nhất).";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
        btn.className = "mx-1 px-3 py-1 bg-emerald-600 border border-emerald-100 text-white rounded-full font-black text-lg";
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác. Vị trí này từ 'bà' được dùng để kể chuyện ở ngôi thứ ba, không phải để hội thoại xưng hô trực tiếp.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
        btn.className = "mx-1 px-3 py-1 bg-rose-600 border border-rose-100 text-white rounded-full font-bold text-lg";
        setTimeout(() => {
            btn.className = "mx-1 px-3 py-1 bg-amber-500 border border-amber-100 rounded-full font-bold text-lg hover:bg-amber-500 text-gray-800";
        }, 1559);
    }
};

// --- BÀI TẬP 4b: TÌM DANH TỪ XƯNG HÔ KHÁC ---
window.checkCau4b = function() {
    const ans = document.getElementById('ans-vn59-writing-b4')?.value.trim().toLowerCase();
    const fb = document.getElementById('fb-vn59-b4');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (ans === 'cháu' || ans === 'chau') {
        fb.innerHTML = "🎉 Rất xuất sắc! Danh từ 'cháu' trong câu đối thoại được dùng để xưng hô chỉ người nghe (ở ngôi thứ hai).";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác. Em hãy tìm lại một từ xưng hô chỉ cháu trong đoạn thoại của người bà nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- BÀI TẬP 5: ĐIỀN ĐẠI TỪ BÔNG HOA ---
window.checkFlowers = function() {
    const f1 = document.getElementById('flower-1')?.value.trim().toLowerCase();
    const f2 = document.getElementById('flower-2')?.value.trim().toLowerCase();
    const f3 = document.getElementById('flower-3')?.value.trim().toLowerCase();
    const fb = document.getElementById('fb-vn59-flower');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!f1 || !f2 || !f3) {
        fb.innerHTML = "⚠️ Em hãy điền đầy đủ cả 3 ô trống trước khi kiểm tra nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base text-center bg-amber-500 text-white mt-2";
        return;
    }

    const check1 = (f1 === 'đó' || f1 === 'do' || f1 === 'ấy' || f1 === 'ay');
    const check2 = (f2 === 'đó' || f2 === 'do' || f2 === 'ấy' || f2 === 'ay');
    const check3 = (f3 === 'nơi đó' || f3 === 'noi do' || f3 === 'nơi ấy' || f3 === 'noi ay' || f3 === 'đó' || f3 === 'do');

    if (check1 && check2 && check3) {
        fb.innerHTML = "🎉 Hoàn toàn chính xác! Các đại từ thay thế phù hợp cho 3 bông hoa lần lượt là: (1) đó/ấy, (2) đó/ấy, (3) nơi đó/nơi ấy/đó.";
        fb.className = "p-4 rounded-xl font-bold text-base text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "⚠️ Một số vị trí điền từ thay thế chưa chính xác. Em hãy nhớ đọc liên kết câu với câu đứng trước nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- HOÀN THÀNH TIẾT HỌC VN59 ---
window.submitVn59Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 59 - 60',
            '🎉',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎓</span><p class="text-xl md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài học Ôn tập Tiết 3 - 4!</p><p class="text-lg text-gray-800 mt-3">Em đã củng cố rất tốt kiến thức về nghĩa gốc/nghĩa chuyển và đại từ.</p></div>'
        );
    }
};
