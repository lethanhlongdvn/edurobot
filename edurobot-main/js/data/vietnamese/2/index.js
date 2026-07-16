export const lesson2 = {
    "topic": "Tiếng Việt 5",
    "week": "1",
    "period": "2",
    "title": "LTVC: LUYỆN TẬP VỀ DANH TỪ, ĐỘNG TỪ, TÍNH TỪ",
    "desc": "Bài học giúp học sinh phân biệt danh từ, động từ, tính từ; thực hành nhận diện từ loại qua trò chơi và rèn luyện kỹ năng đặt câu.",
    "subject": "Luyện từ và câu",
    "theme": "Thế giới tuổi thơ",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-emerald-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-emerald-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-emerald-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-emerald-800 font-bold text-lg md:text-xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Hệ thống hóa và phân biệt rõ định nghĩa của Danh từ, Động từ, Tính từ.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Nhận diện chính xác các từ loại này trong ngữ cảnh bài đọc "Thanh âm của gió".
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Biết vận dụng các từ loại để đặt câu sinh động mô tả các hiện tượng tự nhiên.
            </li>
        </ul>
    </div>

    <!-- 💡 Bảng ôn tập kiến thức -->
    <div class="flex flex-col gap-6 max-w-4xl mx-auto">
        <!-- Danh từ Card -->
        <div class="bg-white p-6 rounded-[36px] border-2 border-emerald-100 shadow-xl hover:scale-[1.01] transition-transform duration-32 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div class="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-black shadow-md shrink-0">DT</div>
            <div class="flex-1 space-y-2">
                <h4 class="text-2xl md:text-3xl font-black text-emerald-800">Danh từ</h4>
                <p class="text-emerald-800 font-medium text-lg md:text-xl leading-relaxed">
                    Là những từ chỉ <strong>sự vật</strong> (người, vật, hiện tượng tự nhiên, khái niệm, đơn vị, thời gian, địa điểm,...).
                </p>
            </div>
        </div>

        <!-- Động từ Card -->
        <div class="bg-white p-6 rounded-[36px] border-2 border-blue-100 shadow-xl hover:scale-[1.01] transition-transform duration-32 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-black shadow-md shrink-0">ĐT</div>
            <div class="flex-1 space-y-2">
                <h4 class="text-2xl md:text-3xl font-black text-blue-800">Động từ</h4>
                <p class="text-blue-800 font-medium text-lg md:text-xl leading-relaxed">
                    Là những từ chỉ <strong>hoạt động</strong> hoặc <strong>trạng thái</strong> của sự vật.
                </p>
            </div>
        </div>

        <!-- Tính từ Card -->
        <div class="bg-white p-6 rounded-[36px] border-2 border-amber-100 shadow-xl hover:scale-[1.01] transition-transform duration-32 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div class="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-black shadow-md shrink-0">TT</div>
            <div class="flex-1 space-y-2">
                <h4 class="text-2xl md:text-3xl font-black text-amber-600">Tính từ</h4>
                <p class="text-amber-600 font-medium text-lg md:text-xl leading-relaxed">
                    Là những từ chỉ <strong>đặc điểm</strong> của sự vật, hoạt động hoặc trạng thái.
                </p>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- BÀI TẬP 1: NỐI Ý CỘT A VÀ B -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-blue-50">
        <div class="p-6 md:p-8 bg-blue-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">1</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Mỗi ý ở cột B nói về danh từ, động từ hay tính từ?</h3>
            </div>
            
            <p class="text-base md:text-lg text-gray-800 font-bold mb-6 italic">
                👉 Hướng dẫn: Nhấp chuột vào một ô ở cột A, sau đó nhấp vào định nghĩa đúng ở cột B để kết nối chúng lại.
            </p>

            <div id="matching-container" class="grid grid-cols-1 md:grid-cols-2 gap-8 relative select-none">
                <!-- SVG Canvas to draw connection lines dynamically -->
                <svg id="svg-connections" class="absolute inset-0 w-full h-full pointer-events-none z-10" style="min-height: 22px;"></svg>
                <!-- Cột A (Từ loại) -->
                <div class="flex flex-col gap-4" id="col-A">
                    <button onclick="selectNode('A', 'danh-tu')" id="node-A-danh-tu" class="p-6 bg-white border-4 border-gray-100 rounded-2xl font-black text-xl md:text-2xl text-left text-gray-800 shadow-sm transition-all hover:border-blue-400 hover:bg-blue-50/20 active:scale-98">
                        A. Danh từ
                    </button>
                    <button onclick="selectNode('A', 'dong-tu')" id="node-A-dong-tu" class="p-6 bg-white border-4 border-gray-100 rounded-2xl font-black text-xl md:text-2xl text-left text-gray-800 shadow-sm transition-all hover:border-blue-400 hover:bg-blue-50/20 active:scale-98">
                        B. Động từ
                    </button>
                    <button onclick="selectNode('A', 'tinh-tu')" id="node-A-tinh-tu" class="p-6 bg-white border-4 border-gray-100 rounded-2xl font-black text-xl md:text-2xl text-left text-gray-800 shadow-sm transition-all hover:border-blue-400 hover:bg-blue-50/20 active:scale-98">
                        C. Tính từ
                    </button>
                </div>

                <!-- Cột B (Định nghĩa) -->
                <div class="flex flex-col gap-4" id="col-B">
                    <button onclick="selectNode('B', 'dinh-nghia-dong-tu')" id="node-B-dinh-nghia-dong-tu" class="p-6 bg-white border-4 border-gray-100 rounded-2xl font-bold text-xl md:text-2xl text-left text-gray-800 shadow-sm transition-all hover:border-blue-400 hover:bg-blue-50/20 active:scale-98">
                        1. Từ chỉ hoạt động, trạng thái của sự vật
                    </button>
                    <button onclick="selectNode('B', 'dinh-nghia-tinh-tu')" id="node-B-dinh-nghia-tinh-tu" class="p-6 bg-white border-4 border-gray-100 rounded-2xl font-bold text-xl md:text-2xl text-left text-gray-800 shadow-sm transition-all hover:border-blue-400 hover:bg-blue-50/20 active:scale-98">
                        2. Từ chỉ đặc điểm của sự vật, hoạt động, trạng thái
                    </button>
                    <button onclick="selectNode('B', 'dinh-nghia-danh-tu')" id="node-B-dinh-nghia-danh-tu" class="p-6 bg-white border-4 border-gray-100 rounded-2xl font-bold text-xl md:text-2xl text-left text-gray-800 shadow-sm transition-all hover:border-blue-400 hover:bg-blue-50/20 active:scale-98">
                        3. Từ chỉ sự vật (người, vật, hiện tượng tự nhiên, thời gian,...)
                    </button>
                </div>
            </div>

            <div class="mt-8 flex flex-wrap gap-4 justify-between items-center">
                <button onclick="resetMatching()" class="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 active:scale-95 transition-all">LÀM LẠI</button>
                <div id="matching-feedback" class="hidden text-xl font-bold rounded-2xl px-6 py-3"></div>
                <div class="flex gap-4">
                    <button onclick="checkMatching()" class="px-8 py-3 bg-blue-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-blue-600 active:scale-95 transition-all">KIỂM TRA</button>
                    <button onclick="submitEx1()" id="btn-submit-ex1" class="px-8 py-3 bg-gray-800 text-white font-black text-lg rounded-2xl shadow-md hover:bg-black active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-gray-900 font-black text-xs shadow-sm">E</div>
                        <span>NỘP BÀI</span>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- BÀI TẬP 2: TRÒ CHƠI 4 VÒNG -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">2</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Trò chơi khám phá "Thanh âm của gió"</h3>
            </div>

            <!-- Đoạn văn mẫu -->
            <div class="bg-white p-6 md:p-8 rounded-2xl border-2 border-dashed border-amber-200 mb-8">
                <div class="flex justify-between items-center mb-3">
                    <p class="text-sm font-black text-amber-600 uppercase tracking-widest">📖 Đoạn đầu bài "Thanh âm của gió":</p>
                    <button onclick="playSegmentAudio('assets/audio/tiengviet/2/thanh_am_cua_gio_doan1.mp3')" class="p-2 bg-amber-500 hover:bg-amber-500 text-amber-600 rounded-full transition-all flex items-center justify-center shadow-sm" title="Nghe đọc bài">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                    </button>
                </div>
                <p class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed text-justify indent-8">
                    "Chúng tôi đi chăn trâu, ngày nào cũng qua suối. Cỏ gần nước tươi tốt nên trâu ăn cỏ men theo bờ suối, rồi mới lên đồi, lên núi. Suối nhỏ, nước trong vắt, nắng chiếu xuống đáy làm cát, sỏi ánh lên lấp lánh. Một bên suối là đồng cỏ rộng, tha hồ cho gió rong chơi. Thỉnh thoảng gió lại vút qua tai chúng tôi như đùa nghịch. Chiều về, đàn trâu no cỏ đầm mình dưới suối, chúng tôi tha thẩn tìm những viên đá đẹp cho mình."
                </p>
            </div>

            <!-- Tabs Vòng chơi -->
            <div class="flex flex-wrap gap-2 mb-8 bg-amber-100/50 p-2 rounded-2xl border border-amber-100">
                <button onclick="switchVong(1)" id="btn-vong-1" class="flex-1 min-w-[12px] px-4 py-3 bg-amber-500 text-white text-lg font-black rounded-xl transition-all shadow-md">VÒNG 1: Danh từ</button>
                <button onclick="switchVong(2)" id="btn-vong-2" class="flex-1 min-w-[12px] px-4 py-3 bg-white text-amber-600 text-lg font-black rounded-xl transition-all hover:bg-amber-500">VÒNG 2: Động từ</button>
                <button onclick="switchVong(3)" id="btn-vong-3" class="flex-1 min-w-[12px] px-4 py-3 bg-white text-amber-600 text-lg font-black rounded-xl transition-all hover:bg-amber-500">VÒNG 3: Tính từ</button>
                <button onclick="switchVong(4)" id="btn-vong-4" class="flex-1 min-w-[12px] px-4 py-3 bg-white text-amber-600 text-lg font-black rounded-xl transition-all hover:bg-amber-500">VÒNG 4: Đặt câu</button>
            </div>

            <!-- VÒNG 1: DANH TỪ -->
            <div id="panel-vong-1" class="vong-panel space-y-6">
                <h4 class="text-xl font-bold text-gray-800">🏆 Vòng 1: Tìm danh từ theo mỗi nhóm từ đoạn văn trên:</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-white p-6 rounded-2xl border-2 border-amber-100 shadow-sm flex flex-col gap-2">
                        <label class="text-base font-bold text-amber-600">a. 1 Danh từ chỉ con vật:</label>
                        <input type="text" id="v1-a" placeholder="Nhập câu trả lời..." class="p-3 border-2 border-gray-100 rounded-xl text-lg font-bold text-gray-800 focus:border-amber-500 outline-none">
                    </div>
                    <div class="bg-white p-6 rounded-2xl border-2 border-amber-100 shadow-sm flex flex-col gap-2">
                        <label class="text-base font-bold text-amber-600">b. 1 Danh từ chỉ thời gian:</label>
                        <input type="text" id="v1-b" placeholder="Nhập câu trả lời..." class="p-3 border-2 border-gray-100 rounded-xl text-lg font-bold text-gray-800 focus:border-amber-500 outline-none">
                    </div>
                    <div class="bg-white p-6 rounded-2xl border-2 border-amber-100 shadow-sm flex flex-col gap-2">
                        <label class="text-base font-bold text-amber-600">c. 2 Danh từ chỉ hiện tượng tự nhiên:</label>
                        <input type="text" id="v1-c" placeholder="Nhập câu trả lời..." class="p-3 border-2 border-gray-100 rounded-xl text-lg font-bold text-gray-800 focus:border-amber-500 outline-none">
                    </div>
                </div>
                <div class="flex justify-end gap-4">
                    <button onclick="resetVong1()" class="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300">LÀM LẠI</button>
                    <button onclick="checkVong1()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl hover:bg-amber-500 shadow-md">KIỂM TRA</button>
                    <button onclick="submitVong1()" class="px-8 py-3 bg-gray-800 text-white font-black text-lg rounded-2xl shadow-md hover:bg-black active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-gray-900 font-black text-xs shadow-sm">E</div>
                        <span>NỘP BÀI</span>
                    </button>
                </div>
                <div id="vong1-feedback" class="hidden text-xl font-bold rounded-2xl p-4"></div>
            </div>

            <!-- VÒNG 2: ĐỘNG TỪ -->
            <div id="panel-vong-2" class="vong-panel hidden space-y-6">
                <h4 class="text-xl font-bold text-gray-800">🏆 Vòng 2: Tìm 4 động từ chỉ hoạt động hoặc trạng thái của người hoặc vật trong đoạn văn:</h4>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <input type="text" id="v2-1" placeholder="Động từ 1" class="p-4 border-2 border-gray-100 rounded-xl text-lg font-bold text-center text-gray-800 focus:border-amber-500 outline-none">
                    <input type="text" id="v2-2" placeholder="Động từ 2" class="p-4 border-2 border-gray-100 rounded-xl text-lg font-bold text-center text-gray-800 focus:border-amber-500 outline-none">
                    <input type="text" id="v2-3" placeholder="Động từ 3" class="p-4 border-2 border-gray-100 rounded-xl text-lg font-bold text-center text-gray-800 focus:border-amber-500 outline-none">
                    <input type="text" id="v2-4" placeholder="Động từ 4" class="p-4 border-2 border-gray-100 rounded-xl text-lg font-bold text-center text-gray-800 focus:border-amber-500 outline-none">
                </div>
                <div class="flex justify-end gap-4">
                    <button onclick="resetVong2()" class="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300">LÀM LẠI</button>
                    <button onclick="checkVong2()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl hover:bg-amber-500 shadow-md">KIỂM TRA</button>
                    <button onclick="submitVong2()" class="px-8 py-3 bg-gray-800 text-white font-black text-lg rounded-2xl shadow-md hover:bg-black active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-gray-900 font-black text-xs shadow-sm">E</div>
                        <span>NỘP BÀI</span>
                    </button>
                </div>
                <div id="v2-feedback" class="hidden text-xl font-bold rounded-2xl p-4"></div>
            </div>

            <!-- VÒNG 3: TÍNH TỪ -->
            <div id="panel-vong-3" class="vong-panel hidden space-y-6">
                <h4 class="text-xl font-bold text-gray-800">🏆 Vòng 3: Tìm 4 tính từ chỉ đặc điểm của các sự vật dưới đây từ đoạn văn:</h4>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div class="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border-2 border-emerald-100 text-center flex flex-col gap-3">
                        <span class="text-xl md:text-2xl font-black text-emerald-800">🌿 cỏ</span>
                        <input type="text" id="v3-co" placeholder="Nhập từ..." class="p-3 border-2 border-gray-100 rounded-xl text-lg font-bold text-center text-gray-800 focus:border-emerald-500 outline-none">
                    </div>
                    <div class="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-2xl border-2 border-sky-100 text-center flex flex-col gap-3">
                        <span class="text-xl md:text-2xl font-black text-sky-800">🏞️ suối</span>
                        <input type="text" id="v3-suoi" placeholder="Nhập từ..." class="p-3 border-2 border-gray-100 rounded-xl text-lg font-bold text-center text-gray-800 focus:border-sky-500 outline-none">
                    </div>
                    <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border-2 border-blue-100 text-center flex flex-col gap-3">
                        <span class="text-xl md:text-2xl font-black text-blue-800">💧 nước</span>
                        <input type="text" id="v3-nuoc" placeholder="Nhập từ..." class="p-3 border-2 border-gray-100 rounded-xl text-lg font-bold text-center text-gray-800 focus:border-blue-500 outline-none">
                    </div>
                    <div class="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl border-2 border-amber-100 text-center flex flex-col gap-3">
                        <span class="text-xl md:text-2xl font-black text-amber-600">💎 cát, sỏi</span>
                        <input type="text" id="v3-cat" placeholder="Nhập từ..." class="p-3 border-2 border-gray-100 rounded-xl text-lg font-bold text-center text-gray-800 focus:border-amber-500 outline-none">
                    </div>
                </div>
                <div class="flex justify-end gap-4">
                    <button onclick="resetVong3()" class="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300">LÀM LẠI</button>
                    <button onclick="checkVong3()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl hover:bg-amber-500 shadow-md">KIỂM TRA</button>
                    <button onclick="submitVong3()" class="px-8 py-3 bg-gray-800 text-white font-black text-lg rounded-2xl shadow-md hover:bg-black active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-gray-900 font-black text-xs shadow-sm">E</div>
                        <span>NỘP BÀI</span>
                    </button>
                </div>
                <div id="v3-feedback" class="hidden text-xl font-bold rounded-2xl p-4"></div>
            </div>

            <!-- VÒNG 4: ĐẶT CÂU VÀ CHẤM AI -->
            <div id="panel-vong-4" class="vong-panel hidden space-y-6">
                <h4 class="text-xl font-bold text-gray-800 flex items-center gap-3">
                    <span>🏆 Vòng 4: Đặt 1 câu nói về một hiện tượng tự nhiên, trong đó có ít nhất 1 danh từ, 1 động từ, 1 tính từ.</span>
                    <button onclick="toggleSpeechRecVn2()" class="p-2 bg-amber-500 text-amber-600 rounded-full hover:bg-amber-500 transition-all text-sm shadow-sm" title="Nhập bằng giọng nói">🎙️</button>
                </h4>
                
                <textarea id="ans-vn2-writing" rows="4" placeholder="Nhập câu của em ở đây..." class="w-full p-4 md:p-6 text-xl md:text-2xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-white font-medium leading-relaxed"></textarea>
                
                <div class="flex flex-wrap items-center gap-4">
                    <button onclick="checkWritingVn2()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                        <span>CHẤM BÀI</span>
                    </button>
                    <button onclick="resetWritingVn2()" class="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition-all">LÀM LẠI</button>
                    <button onclick="submitVn2Progress()" class="px-8 py-3 bg-gray-800 text-white font-black rounded-2xl shadow-md hover:bg-black transition-all ml-auto flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-gray-900 font-black text-xs shadow-sm">E</div>
                        <span>NỘP BÀI</span>
                    </button>
                </div>
                
                <div id="fb-vn2-writing" class="hidden mt-6 p-6 bg-amber-500 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500">
                    <!-- AI Feedback will show here -->
                </div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TOÀN BỘ -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn2Global()" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-emerald-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Từ loại nào chỉ sự vật bao gồm người, vật, hiện tượng tự nhiên, thời gian, khái niệm,...?",
            "options": [
                "Danh từ",
                "Động từ",
                "Tính từ",
                "Đại từ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ loại nào chỉ hoạt động hoặc trạng thái của sự vật?",
            "options": [
                "Tính từ",
                "Động từ",
                "Danh từ",
                "Quan hệ từ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ loại nào dùng để chỉ đặc điểm của sự vật, hoạt động, hay trạng thái?",
            "options": [
                "Động từ",
                "Danh từ",
                "Tính từ",
                "Số từ"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Trong câu 'Suối nhỏ, nước trong vắt.', từ nào là danh từ?",
            "options": [
                "trong vắt",
                "nhỏ",
                "suối, nước",
                "nước, nhỏ"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Từ 'rong chơi' trong câu 'đồng cỏ rộng, tha hồ cho gió rong chơi' thuộc từ loại nào?",
            "options": [
                "Danh từ",
                "Động từ",
                "Tính từ",
                "Đại từ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cặp tính từ nào xuất hiện trong câu 'Suối nhỏ, nước trong vắt...'?",
            "options": [
                "suối, nước",
                "nhỏ, trong vắt",
                "chiếu, làm",
                "cát, sỏi"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ nào sau đây là danh từ chỉ hiện tượng tự nhiên?",
            "options": [
                "suối",
                "gió",
                "trâu",
                "đá"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'đầm mình' trong cụm từ 'đàn trâu no cỏ đầm mình dưới suối' thuộc từ loại nào?",
            "options": [
                "Tính từ",
                "Danh từ",
                "Động từ",
                "Số từ"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Từ nào sau đây là tính từ trong câu 'chúng tôi tha thẩn tìm những viên đá đẹp cho mình'?",
            "options": [
                "tìm",
                "đá",
                "đẹp",
                "tha thẩn"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Từ 'chiều' trong câu 'Chiều về, đàn trâu no cỏ...' thuộc nhóm danh từ nào?",
            "options": [
                "Danh từ chỉ con vật",
                "Danh từ chỉ hiện tượng tự nhiên",
                "Danh từ chỉ thời gian",
                "Danh từ chỉ địa điểm"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Từ 'tha thẩn' là từ loại gì?",
            "options": [
                "Danh từ",
                "Tính từ",
                "Động từ chỉ hoạt động",
                "Động từ chỉ trạng thái"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Từ nào sau đây KHÔNG phải là động từ?",
            "options": [
                "đi",
                "nắng",
                "chăn",
                "ăn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong các từ sau, từ nào là tính từ chỉ đặc điểm của cỏ?",
            "options": [
                "tươi tốt",
                "suối",
                "trong vắt",
                "lấp lánh"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'sỏi' thuộc loại từ nào?",
            "options": [
                "Danh từ",
                "Động từ",
                "Tính từ",
                "Đại từ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đặt câu: 'Mưa rơi tí tách.' chứa các loại từ nào theo thứ tự?",
            "options": [
                "Danh từ - Động từ - Tính từ",
                "Danh từ - Tính từ - Động từ",
                "Động từ - Danh từ - Tính từ",
                "Tính từ - Động từ - Danh từ"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- BÀI 1: LOGIC NỐI THẺ ĐỊNH NGHĨA ---
let selectedColA = null;
let selectedColB = null;
const correctMatches = {
    "danh-tu": "dinh-nghia-danh-tu",
    "dong-tu": "dinh-nghia-dong-tu",
    "tinh-tu": "dinh-nghia-tinh-tu"
};
let userMatches = {};

window.drawConnections = function() {
    const svg = document.getElementById('svg-connections');
    if (!svg) return;
    svg.innerHTML = ''; // Xóa các nét vẽ cũ
    
    const container = document.getElementById('matching-container');
    if (!container) return;
    const containerRect = container.getBoundingClientRect();

    for (const idA in userMatches) {
        const idB = userMatches[idA];
        const elA = document.getElementById(`node-A-${idA}`);
        const elB = document.getElementById(`node-B-${idB}`);
        if (!elA || !elB) continue;

        const rectA = elA.getBoundingClientRect();
        const rectB = elB.getBoundingClientRect();

        let x1, y1, x2, y2;
        
        // Nếu hiển thị song song (side-by-side)
        if (rectA.right <= rectB.left) {
            x1 = rectA.right - containerRect.left;
            y1 = rectA.top + rectA.height / 2 - containerRect.top;
            x2 = rectB.left - containerRect.left;
            y2 = rectB.top + rectB.height / 2 - containerRect.top;
        } else {
            // Nếu hiển thị dọc (stacked trên điện thoại)
            x1 = rectA.left + rectA.width / 2 - containerRect.left;
            y1 = rectA.bottom - containerRect.top;
            x2 = rectB.left + rectB.width / 2 - containerRect.left;
            y2 = rectB.top - containerRect.top;
        }

        // Tạo phần tử line trong SVG
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', '#059669'); // Màu xanh lục emerald-600 bóng bẩy
        line.setAttribute('stroke-width', '5');
        line.setAttribute('stroke-linecap', 'round');
        line.setAttribute('style', 'filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.15)); transition: all 0.3s;');
        
        svg.appendChild(line);
    }
};

window.selectNode = function(column, id) {
    if (column === 'A') {
        // Hủy chọn thẻ A cũ
        if (selectedColA) {
            document.getElementById(`node-A-${selectedColA}`).classList.remove('border-emerald-100', 'bg-emerald-50/50');
        }
        selectedColA = id;
        document.getElementById(`node-A-${id}`).classList.add('border-emerald-100', 'bg-emerald-50/50');
    } else {
        // Hủy chọn thẻ B cũ
        if (selectedColB) {
            document.getElementById(`node-B-${selectedColB}`).classList.remove('border-emerald-100', 'bg-emerald-50/50');
        }
        selectedColB = id;
        document.getElementById(`node-B-${id}`).classList.add('border-emerald-100', 'bg-emerald-50/50');
    }

    // Nếu đã chọn cả hai cột, tiến hành ghép
    if (selectedColA && selectedColB) {
        userMatches[selectedColA] = selectedColB;
        
        // Cập nhật giao diện ghép nối thành công cho cặp này
        const nodeA = document.getElementById(`node-A-${selectedColA}`);
        const nodeB = document.getElementById(`node-B-${selectedColB}`);
        
        nodeA.classList.remove('border-emerald-100', 'bg-emerald-50/50');
        nodeB.classList.remove('border-emerald-100', 'bg-emerald-50/50');
        
        nodeA.classList.add('border-emerald-100', 'bg-emerald-100/50');
        nodeB.classList.add('border-emerald-100', 'bg-emerald-100/50');
        
        selectedColA = null;
        selectedColB = null;

        // Vẽ đường nối
        window.drawConnections();
    }
};

window.resetMatching = function() {
    selectedColA = null;
    selectedColB = null;
    userMatches = {};
    
    // Khôi phục tất cả giao diện nút bấm về ban đầu
    const nodesA = ['danh-tu', 'dong-tu', 'tinh-tu'];
    nodesA.forEach(id => {
        const el = document.getElementById(`node-A-${id}`);
        el.className = "p-6 bg-white border-4 border-gray-100 rounded-2xl font-black text-xl md:text-2xl text-left text-gray-800 shadow-sm transition-all hover:border-blue-400 hover:bg-blue-50/20 active:scale-98";
    });

    const nodesB = ['dinh-nghia-dong-tu', 'dinh-nghia-tinh-tu', 'dinh-nghia-danh-tu'];
    nodesB.forEach(id => {
        const el = document.getElementById(`node-B-${id}`);
        el.className = "p-6 bg-white border-4 border-gray-100 rounded-2xl font-bold text-xl md:text-2xl text-left text-gray-800 shadow-sm transition-all hover:border-blue-400 hover:bg-blue-50/20 active:scale-98";
    });

    const fb = document.getElementById('matching-feedback');
    fb.classList.add('hidden');

    // Xóa đường nối
    const svg = document.getElementById('svg-connections');
    if (svg) svg.innerHTML = '';
};

window.checkMatching = function() {
    let matchCount = 0;

    for (const key in correctMatches) {
        if (userMatches[key] === correctMatches[key]) {
            matchCount++;
        }
    }

    const fb = document.getElementById('matching-feedback');
    fb.classList.remove('hidden');

    if (matchCount === 3) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã nối đúng hoàn toàn cả 3 định nghĩa.";
        fb.className = "text-xl font-bold rounded-2xl px-6 py-3 bg-emerald-600 text-white animate-bounce";
    } else {
        fb.innerHTML = `⚠️ Chưa đúng rồi, em chỉ nối đúng ${matchCount}/3 ý. Hãy ấn 'Làm lại' nhé!`;
        fb.className = "text-xl font-bold rounded-2xl px-6 py-3 bg-rose-600 text-white";
    }
};

// Đăng ký sự kiện vẽ lại đường nối khi resize và khi render xong
window.addEventListener('resize', () => {
    if (typeof window.drawConnections === 'function') {
        window.drawConnections();
    }
});

// Đảm bảo ResizeObserver tự động vẽ lại khi thay đổi layout
if (window.resizeObserverMatching) {
    window.resizeObserverMatching.disconnect();
}
window.resizeObserverMatching = new ResizeObserver(() => {
    if (typeof window.drawConnections === 'function') {
        window.drawConnections();
    }
});
setTimeout(() => {
    const container = document.getElementById('matching-container');
    if (container && window.resizeObserverMatching) {
        window.resizeObserverMatching.observe(container);
    }
}, 52);

// --- BÀI 2: TRÒ CHƠI KHÁM PHÁ (CHUYỂN TABS VÀ KIỂM TRA) ---
window.switchVong = function(vongNum) {
    // Ẩn tất cả panels
    document.querySelectorAll('.vong-panel').forEach(p => p.classList.add('hidden'));
    // Hiển thị panel được chọn
    document.getElementById(`panel-vong-${vongNum}`).classList.remove('hidden');

    // Cập nhật trạng thái nút tab
    for (let i = 1; i <= 4; i++) {
        const btn = document.getElementById(`btn-vong-${i}`);
        if (i === vongNum) {
            btn.className = "flex-1 min-w-[12px] px-4 py-3 bg-amber-500 text-white text-lg font-black rounded-xl transition-all shadow-md";
        } else {
            btn.className = "flex-1 min-w-[12px] px-4 py-3 bg-white text-amber-600 text-lg font-black rounded-xl transition-all hover:bg-amber-500";
        }
    }
};

// Vòng 1 Logic
window.submitEx1 = function() {
    let matchCount = 0;

    for (const key in correctMatches) {
        if (userMatches[key] === correctMatches[key]) {
            matchCount++;
        }
    }

    const score = Math.round((matchCount / 3) * 12);
    if (typeof window.syncRealtimeProgress === 'function') {
        window.syncRealtimeProgress({ scoreEx1: score }, true);
    } else {
        alert("Lỗi: Hệ thống lưu điểm chưa sẵn sàng.");
    }
};

window.checkVong1 = function() {
    const a = document.getElementById('v1-a').value.trim().toLowerCase();
    const b = document.getElementById('v1-b').value.trim().toLowerCase();
    const c = document.getElementById('v1-c').value.trim().toLowerCase();

    const conVatCorrect = ['trâu'];
    const thoiGianCorrect = ['ngày', 'chiều'];

    let score = 0;
    let details = [];

    if (conVatCorrect.includes(a)) { score++; } else { details.push("Câu a chưa chính xác (Gợi ý: con vật kéo cày phổ biến ở làng quê)"); }
    if (thoiGianCorrect.includes(b)) { score++; } else { details.push("Câu b chưa chính xác (Gợi ý: một buổi trong ngày hoặc thời gian hằng ngày)"); }
    
    // Kiểm tra câu c chứa ít nhất 2 hiện tượng tự nhiên
    const hasNang = c.includes('nắng');
    const hasGio = c.includes('gió');
    if (hasNang && hasGio) {
        score++;
    } else {
        details.push("Câu c chưa đủ 2 hiện tượng tự nhiên xuất hiện trong bài (Gợi ý: ánh sáng mặt trời hoặc không khí chuyển động)");
    }

    const fb = document.getElementById('vong1-feedback');
    fb.classList.remove('hidden');

    if (score === 3) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã trả lời đúng tất cả câu hỏi của Vòng 1. Hãy nhấn nút 'NỘP BÀI' để cập nhật điểm và chuyển sang Vòng tiếp theo.";
        fb.className = "text-xl font-bold rounded-2xl p-4 bg-emerald-600 text-white";
        return true;
    } else {
        fb.innerHTML = `⚠️ Sai sót một chút rồi: <br> ${details.join('<br>')}`;
        fb.className = "text-xl font-bold rounded-2xl p-4 bg-rose-600 text-white";
        return false;
    }
};

window.submitVong1 = function() {
    if (window.checkVong1()) {
        if (typeof window.syncRealtimeProgress === 'function') {
            window.syncRealtimeProgress({ scoreEx2_v1: 12 }, true);
        }
        setTimeout(() => {
            window.switchVong(2);
        }, 152);
    } else {
        alert("Em cần trả lời đúng tất cả câu hỏi trước khi nộp bài và sang vòng tiếp theo nhé!");
    }
};

window.resetVong1 = function() {
    document.getElementById('v1-a').value = '';
    document.getElementById('v1-b').value = '';
    document.getElementById('v1-c').value = '';
    document.getElementById('vong1-feedback').classList.add('hidden');
};

// Vòng 2 Logic
window.checkVong2 = function() {
    const listVerbs = ['đi', 'chăn', 'qua', 'ăn', 'men', 'lên', 'chiếu', 'làm', 'ánh lên', 'rong chơi', 'vút qua', 'đùa nghịch', 'về', 'đầm mình', 'tha thẩn', 'tìm'];
    
    const inputs = [
        document.getElementById('v2-1').value.trim().toLowerCase(),
        document.getElementById('v2-2').value.trim().toLowerCase(),
        document.getElementById('v2-3').value.trim().toLowerCase(),
        document.getElementById('v2-4').value.trim().toLowerCase()
    ];

    const uniqueInputs = new Set(inputs.filter(w => w));
    let correctCount = 0;
    
    uniqueInputs.forEach(w => {
        if (listVerbs.includes(w)) correctCount++;
    });

    const fb = document.getElementById('v2-feedback');
    fb.classList.remove('hidden');

    if (correctCount >= 4) {
        fb.innerHTML = "🎉 Hoàn hảo! Em đã tìm đúng ít nhất 4 động từ khác nhau. Hãy nhấn nút 'NỘP BÀI' để cập nhật điểm và chuyển sang Vòng tiếp theo.";
        fb.className = "text-xl font-bold rounded-2xl p-4 bg-emerald-600 text-white";
        return true;
    } else {
        fb.innerHTML = `⚠️ Em mới tìm đúng ${correctCount}/4 động từ hợp lệ từ đoạn văn. Hãy cố gắng tìm các từ chỉ hành động, hoạt động nhé!`;
        fb.className = "text-xl font-bold rounded-2xl p-4 bg-rose-600 text-white";
        return false;
    }
};

window.submitVong2 = function() {
    if (window.checkVong2()) {
        if (typeof window.syncRealtimeProgress === 'function') {
            window.syncRealtimeProgress({ scoreEx2_v2: 12 }, true);
        }
        setTimeout(() => {
            window.switchVong(3);
        }, 152);
    } else {
        alert("Em cần tìm đủ ít nhất 4 động từ khác nhau từ đoạn văn trước khi nộp bài và sang vòng tiếp theo nhé!");
    }
};

window.resetVong2 = function() {
    document.getElementById('v2-1').value = '';
    document.getElementById('v2-2').value = '';
    document.getElementById('v2-3').value = '';
    document.getElementById('v2-4').value = '';
    document.getElementById('v2-feedback').classList.add('hidden');
};

// Vòng 3 Logic
window.checkVong3 = function() {
    const co = document.getElementById('v3-co').value.trim().toLowerCase();
    const suoi = document.getElementById('v3-suoi').value.trim().toLowerCase();
    const nuoc = document.getElementById('v3-nuoc').value.trim().toLowerCase();
    const cat = document.getElementById('v3-cat').value.trim().toLowerCase();

    let score = 0;
    let details = [];

    if (co === 'tươi tốt' || co === 'no') { score++; } else { details.push("Đặc điểm của cỏ chưa đúng"); }
    if (suoi === 'nhỏ') { score++; } else { details.push("Đặc điểm của suối chưa đúng"); }
    if (nuoc === 'trong vắt') { score++; } else { details.push("Đặc điểm của nước chưa đúng"); }
    if (cat === 'lấp lánh' || cat === 'ánh lên') { score++; } else { details.push("Đặc điểm của cát, sỏi chưa đúng"); }

    const fb = document.getElementById('v3-feedback');
    fb.classList.remove('hidden');

    if (score === 4) {
        fb.innerHTML = "🎉 Cực kỳ xuất sắc! Em đã điền chính xác đặc điểm của cả 4 sự vật. Hãy nhấn nút 'NỘP BÀI' để cập nhật điểm và chuyển sang Vòng tiếp theo.";
        fb.className = "text-xl font-bold rounded-2xl p-4 bg-emerald-600 text-white";
        return true;
    } else {
        fb.innerHTML = `⚠️ Chưa chính xác hoàn toàn: <br>${details.join('<br>')}`;
        fb.className = "text-xl font-bold rounded-2xl p-4 bg-rose-600 text-white";
        return false;
    }
};

window.submitVong3 = function() {
    if (window.checkVong3()) {
        if (typeof window.syncRealtimeProgress === 'function') {
            window.syncRealtimeProgress({ scoreEx2_v3: 12 }, true);
        }
        setTimeout(() => {
            window.switchVong(4);
        }, 152);
    } else {
        alert("Em cần điền chính xác đặc điểm của cả 4 sự vật trước khi nộp bài và sang vòng tiếp theo nhé!");
    }
};

window.resetVong3 = function() {
    document.getElementById('v3-co').value = '';
    document.getElementById('v3-suoi').value = '';
    document.getElementById('v3-nuoc').value = '';
    document.getElementById('v3-cat').value = '';
    document.getElementById('v3-feedback').classList.add('hidden');
};

// Vòng 4 & AI Logic
window.checkWritingVn2 = async function() {
    const input = document.getElementById('ans-vn2-writing');
    if (!input || !input.value.trim()) { alert("Em hãy viết câu của em vào khung nhé!"); return; }

    const fb = document.getElementById('fb-vn2-writing');
    fb.classList.remove('hidden');
    fb.innerHTML = `
        <div class="flex items-center gap-4 mb-4">
            <div class="animate-spin rounded-full h-8 w-8 border-4 border-white border-t-transparent"></div>
            <p class="text-xl font-bold italic">Thầy E đang phân tích từ loại và nhận xét câu của em...</p>
        </div>
    `;

    if (typeof askAI === 'function') {
        const prompt = `Em hãy đóng vai Thầy E nhận xét câu văn của học sinh tiểu học lớp 5.
        Đề bài: Đặt 1 câu nói về một hiện tượng tự nhiên, trong đó có ít nhất 1 danh từ, 1 động từ, 1 tính từ.
        Yêu cầu phân tích chi tiết:
        1. Kiểm tra xem câu có đúng chủ đề "hiện tượng tự nhiên" (mưa, nắng, gió, bão, sấm chớp, tuyết rơi...) không.
        2. Xác định và chỉ rõ các Danh từ, Động từ, Tính từ có trong câu của học sinh.
        3. Khẳng định xem học sinh đã hoàn thành đủ yêu cầu (ít nhất 1 danh, 1 động, 1 tính) chưa.
        4. Viết lời nhận xét ân cần, cổ vũ và khen ngợi sự sáng tạo của học sinh.
        
        Câu của học sinh: ${input.value}`;

        await askAI('vn2-writing', prompt, 'single', 'ltvc', 2);
    } else {
        fb.innerHTML = "Lỗi: Hệ thống AI chưa sẵn sàng.";
    }
};

window.resetWritingVn2 = function() {
    document.getElementById('ans-vn2-writing').value = '';
    document.getElementById('fb-vn2-writing').classList.add('hidden');
};

window.submitVn2Progress = function() {
    if (typeof window.syncRealtimeProgress === 'function') {
        window.syncRealtimeProgress({ scoreEx2: 12 }, true);
    } else {
        alert("Lỗi: Hệ thống lưu điểm chưa sẵn sàng.");
    }
};

window.submitVn2Global = function() {
    if (typeof window.syncRealtimeProgress === 'function') {
        window.syncRealtimeProgress({ scorePractice: 12 }, true);
    } else {
        alert("Lỗi: Hệ thống lưu điểm chưa sẵn sàng.");
    }
};

let currentSegmentAudio = null;
window.playSegmentAudio = function(url) {
    if (currentSegmentAudio && !currentSegmentAudio.paused) {
        currentSegmentAudio.pause();
        if (currentSegmentAudio.src.endsWith(url)) {
            return;
        }
    }
    currentSegmentAudio = new Audio(url);
    currentSegmentAudio.play().catch(err => console.log("Audio segment play failed:", err));
};
