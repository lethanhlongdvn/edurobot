export const lesson21 = {
    "topic": "Tiếng Việt 5",
    "week": "3",
    "period": "21",
    "title": "ĐỌC MỞ RỘNG: ĐỌC BÀI THƠ VIẾT VỀ TRẺ EM",
    "desc": "Bài học giúp học sinh thực hành tìm đọc các bài thơ viết về trẻ em, ghi chép thông tin vào phiếu đọc sách khoa học và tự tin chia sẻ cảm xúc, tình cảm của tác giả đối với thiếu nhi.",
    "subject": "Đọc mở rộng",
    "theme": "Thế giới tuổi thơ",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
<div class="flex justify-end mb-4">
    <button onclick="playSegmentAudio('assets/audio/tiengviet/21/doc_bai_tho_viet_ve_tre_em.mp3')" class="p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc toàn bài">
        <span class="text-xl">🔊 Nghe đọc mẫu</span>
    </button>
</div>
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-sky-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-800 font-bold text-2xl md:text-3xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Tìm đọc được các bài thơ viết về trẻ em theo gợi ý của SGK trang 35.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Thực hành ghi chép Phiếu đọc sách khoa học, chi tiết và cảm xúc.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Chia sẻ ý kiến về chi tiết thơ yêu thích, tình cảm của nhà thơ dành cho trẻ thơ.
            </li>
        </ul>
    </div>

    <!-- 📖 ĐỌC BÀI THƠ VIẾT VỀ TRẺ EM -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <div class="border-b border-sky-100 pb-4">
                <span class="text-sky-900 font-black text-xl md:text-3xl flex items-center gap-2">
                    <span>📖</span> 1. Đọc bài thơ viết về trẻ em
                </span>
                <p class="text-sm font-bold text-gray-800 mt-1">Chọn một trong ba bài thơ dưới đây để đọc tại chỗ và hoàn thành Phiếu đọc sách</p>
            </div>

            <!-- Các nút chuyển bài thơ -->
            <div class="flex flex-wrap gap-3">
                <button onclick="switchPoem21(1, this)" id="btn-poem-1" class="px-5 py-2.5 bg-sky-600 text-white font-black rounded-2xl shadow-md transition-all text-base">
                    📜 Chuyện cổ tích về loài người
                </button>
                <button onclick="switchPoem21(2, this)" id="btn-poem-2" class="px-5 py-2.5 bg-white border border-sky-100 text-sky-900 font-black rounded-2xl shadow-sm hover:bg-sky-50 transition-all text-base">
                    📜 Dưới bóng cây dã hương
                </button>
                <button onclick="switchPoem21(3, this)" id="btn-poem-3" class="px-5 py-2.5 bg-white border border-sky-100 text-sky-900 font-black rounded-2xl shadow-sm hover:bg-sky-50 transition-all text-base">
                    📜 Con đường tới lớp
                </button>
            </div>

            <!-- Khung văn bản bài thơ -->
            <div class="bg-sky-50/20 p-6 md:p-8 rounded-[32px] border border-sky-100/50 relative">
                <!-- Bài thơ 1 -->
                <div id="poem-content-1" class="serif-font text-gray-800 text-lg md:text-2xl leading-relaxed space-y-4 max-w-2xl mx-auto">
                    <p class="font-black text-center text-2xl md:text-3xl text-sky-900 mb-4">Chuyện cổ tích về loài người</p>
                    <div class="italic text-center space-y-2">
                        <p>...Khi trẻ con tập đi</p>
                        <p>Đường có từ ngày đó</p>
                        <p>Nhưng còn cần cho trẻ</p>
                        <p>Tình yêu và lời ru</p>
                        <p>Cho nên mẹ sinh ra</p>
                        <p>Để bế bồng chăm sóc...</p>
                    </div>
                    
                </div>

                <!-- Bài thơ 2 (Ẩn) -->
                <div id="poem-content-2" class="hidden serif-font text-gray-800 text-lg md:text-2xl leading-relaxed space-y-4 max-w-2xl mx-auto">
                    <p class="font-black text-center text-2xl md:text-3xl text-sky-900 mb-4">Dưới bóng cây dã hương</p>
                    <div class="italic text-center space-y-2">
                        <p>...Những hạt nắng bé con</p>
                        <p>Lăng xăng đùa quanh tớ</p>
                        <p>Rì rào tiếng gió thở</p>
                        <p>Như bà kể chuyện xưa</p>
                        <p>Tớ có một giấc mơ</p>
                        <p>Dưới nắng vàng êm dịu...</p>
                    </div>
                    
                </div>

                <!-- Bài thơ 3 (Ẩn) -->
                <div id="poem-content-3" class="hidden serif-font text-gray-800 text-lg md:text-2xl leading-relaxed space-y-4 max-w-2xl mx-auto">
                    <p class="font-black text-center text-2xl md:text-3xl text-sky-900 mb-4">Con đường tới lớp</p>
                    <div class="italic text-center space-y-2">
                        <p>Con đường tới lớp cùng em</p>
                        <p>Đã thành người bạn thân quen lâu rồi</p>
                        <p>Mà sao chân bước bối rối</p>
                        <p>Nghe trong thầm lặng bao lời thân yêu.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-6 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- Tab Headers phụ cho Luyện tập -->
    <div class="flex flex-wrap justify-center md:justify-end gap-2 border-b border-gray-100 pb-3">
        <button onclick="switchPracTabVn21(0)" id="vn21-prac-tab-0" class="px-4 py-2 rounded-xl font-black text-lg md:text-xl transition-all bg-sky-600 text-white shadow-sm">
            📝 Phiếu đọc sách (Câu 2)
        </button>
        <button onclick="switchPracTabVn21(1)" id="vn21-prac-tab-1" class="px-4 py-2 rounded-xl font-bold text-lg md:text-xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300">
            💬 Thảo luận (Câu 3)
        </button>
        <button onclick="switchPracTabVn21(2)" id="vn21-prac-tab-2" class="px-4 py-2 rounded-xl font-bold text-lg md:text-xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300">
            ⚽ Vận dụng (Câu 4)
        </button>
    </div>

    <!-- Vùng nội dung các tab phụ -->
    <div class="space-y-6">
        <!-- TAB PHỤ 1: PHIẾU ĐỌC SÁCH -->
        <div id="vn21-prac-content-0" class="block space-y-6 animate-in fade-in duration-300">
            <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
                <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-8">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">2</div>
                        <h3 class="text-2xl md:text-3xl font-black text-gray-800">2. Viết phiếu đọc sách theo mẫu</h3>
                    </div>

                    <!-- Form Phiếu đọc sách Premium -->
                    <div class="bg-white p-6 md:p-10 rounded-[36px] border-4 border-double border-sky-100 shadow-lg space-y-6">
                        <p class="text-center font-black text-2xl md:text-4xl text-sky-800 tracking-wider mb-8">📖 PHIẾU ĐỌC SÁCH 📖</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div class="flex flex-col gap-2">
                                <label class="font-black text-sky-900 text-2xl md:text-3xl">Tên bài thơ: <span class="text-red-800">*</span></label>
                                <input type="text" id="pds21-ten" placeholder="Nhập tên bài thơ..." class="p-3 border-2 border-sky-100 rounded-xl outline-none focus:border-sky-500 font-bold bg-sky-50/20 text-lg">
                            </div>
                            <div class="flex flex-col gap-2">
                                <label class="font-black text-sky-900 text-2xl md:text-3xl">Tác giả: <span class="text-red-800">*</span></label>
                                <input type="text" id="pds21-tac-gia" placeholder="Nhập tên tác giả..." class="p-3 border-2 border-sky-100 rounded-xl outline-none focus:border-sky-500 font-bold bg-sky-50/20 text-lg">
                            </div>
                            <div class="flex flex-col gap-2">
                                <label class="font-black text-sky-900 text-2xl md:text-3xl">Ngày đọc: <span class="text-red-800">*</span></label>
                                <input type="date" id="pds21-ngay" class="p-3 border-2 border-sky-100 rounded-xl outline-none focus:border-sky-500 font-bold bg-sky-50/20 text-lg">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="flex flex-col gap-2">
                                <label class="font-black text-sky-900 text-2xl md:text-3xl">Nội dung chính của bài thơ: <span class="text-red-800">*</span></label>
                                <textarea id="pds21-noi-dung" rows="3" placeholder="Nhập tóm tắt nội dung chính ngắn gọn..." class="p-4 border-2 border-sky-100 rounded-xl outline-none focus:border-sky-500 font-bold bg-sky-50/20 text-lg"></textarea>
                            </div>
                            <div class="flex flex-col gap-2">
                                <label class="font-black text-sky-900 text-2xl md:text-3xl">Những câu thơ hay hoặc hình ảnh thơ đẹp: <span class="text-red-800">*</span></label>
                                <textarea id="pds21-nhan-vat" rows="3" placeholder="Nhập những câu thơ hay hoặc hình ảnh thơ đẹp em thích nhất..." class="p-4 border-2 border-sky-100 rounded-xl outline-none focus:border-sky-500 font-bold bg-sky-50/20 text-lg"></textarea>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                            <div class="flex flex-col gap-2">
                                <label class="font-black text-sky-900 text-2xl md:text-3xl">Suy nghĩ, cảm xúc sau khi đọc bài thơ: <span class="text-red-800">*</span></label>
                                <textarea id="pds21-chi-tiet" rows="3" placeholder="Nhập suy nghĩ, cảm xúc của em về bài thơ..." class="p-4 border-2 border-sky-100 rounded-xl outline-none focus:border-sky-500 font-bold bg-sky-50/20 text-lg"></textarea>
                            </div>
                            
                            <!-- Đánh giá sao -->
                            <div class="flex flex-col gap-2 p-4 bg-sky-50/50 rounded-2xl border border-sky-100/50">
                                <label class="font-black text-sky-900 text-2xl md:text-3xl">Mức độ yêu thích của em:</label>
                                <div class="flex gap-3 text-3xl md:text-4xl justify-center py-2 select-none">
                                    <span onclick="setRating21(1)" id="star21-1" class="cursor-pointer text-gray-800 transition-all hover:scale-105">★</span>
                                    <span onclick="setRating21(2)" id="star21-2" class="cursor-pointer text-gray-800 transition-all hover:scale-105">★</span>
                                    <span onclick="setRating21(3)" id="star21-3" class="cursor-pointer text-gray-800 transition-all hover:scale-105">★</span>
                                    <span onclick="setRating21(4)" id="star21-4" class="cursor-pointer text-gray-800 transition-all hover:scale-105">★</span>
                                    <span onclick="setRating21(5)" id="star21-5" class="cursor-pointer text-gray-800 transition-all hover:scale-105">★</span>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-end items-center gap-4"><button onclick="resetPds21()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="checkPdsWithAI21(); submitPdsGlobal21();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>

                        <div id="fb-vn21-pds" class="hidden p-5 rounded-2xl text-base font-bold shadow-md bg-sky-600 text-white transition-all duration-321"></div>
                    </div>
                </div>
            </section>
        </div>

        <!-- TAB PHỤ 2: THẢO LUẬN -->
        <div id="vn21-prac-content-1" class="hidden space-y-6 animate-in fade-in duration-300">
            <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
                <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
                    <div class="flex items-center gap-4 mb-2">
                        <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">3</div>
                        <h3 class="text-2xl md:text-3xl font-black text-gray-800">3. Trao đổi với bạn về bài thơ đã đọc</h3>
                    </div>

                    <div class="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm space-y-4">
                        <p class="font-bold text-gray-900 text-2xl md:text-3xl">Chia sẻ ý kiến thảo luận của em về bài thơ:</p>
                        <div class="space-y-4">
                            <div>
                                <label class="text-sm font-black text-sky-800">💬 Câu thơ/đoạn thơ em yêu thích nhất và lý do:</label>
                                <textarea id="ans-vn21-fav" rows="2" placeholder="Ví dụ: Thích đoạn thơ trong 'Con đường tới lớp' vì thể hiện tình cảm thân quen ấm áp..." class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-sky-50/10 mt-1 text-xl md:text-2xl"></textarea>
                            </div>
                            <div>
                                <label class="text-sm font-black text-sky-800">💬 Tình cảm, cảm xúc của nhà thơ đối với trẻ em được thể hiện thế nào?</label>
                                <textarea id="ans-vn21-feeling" rows="2" placeholder="Ví dụ: Tác giả thể hiện sự thương yêu, che chở và thấu hiểu thế giới trẻ thơ..." class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-sky-50/10 mt-1 text-xl md:text-2xl"></textarea>
                            </div>
                        </div>

                        <div class="flex justify-end items-center gap-4"><button onclick="resetTraoDoi21()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="submitTraoDoi21();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                    </div>
                </div>
            </section>
        </div>

        <!-- TAB PHỤ 3: VẬN DỤNG -->
        <div id="vn21-prac-content-2" class="hidden space-y-6 animate-in fade-in duration-300">
            <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
                <div class="p-6 md:p-8 bg-emerald-50/30 rounded-[32px] space-y-6">
                    <div class="flex items-center gap-4 mb-2">
                        <div class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">⚽</div>
                        <div>
                            <h3 class="text-2xl md:text-3xl font-black text-gray-800">4. Vận dụng</h3>
                            <p class="text-xs font-bold text-gray-800 mt-1">Tìm đọc câu chuyện hoặc bài báo về một môn thể thao hoặc vận động viên em yêu thích</p>
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-3xl border border-emerald-100 shadow-sm space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="space-y-1">
                                <label class="text-sm font-black text-emerald-800">👤 Tên vận động viên / Môn thể thao:</label>
                                <input type="text" id="vd-vn21-name" placeholder="Ví dụ: Nguyễn Thị Ánh Viên / Bơi lội..." class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-emerald-50/10 text-sm">
                            </div>
                            <div class="space-y-1">
                                <label class="text-sm font-black text-emerald-800">📰 Tên bài báo / Câu chuyện:</label>
                                <input type="text" id="vd-vn21-title" placeholder="Ví dụ: Cô gái vàng của bơi lội Việt Nam..." class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-emerald-50/10 text-sm">
                            </div>
                        </div>
                        <div>
                            <label class="text-sm font-black text-emerald-800">💬 Điều em học hỏi hoặc ngưỡng mộ nhất ở vận động viên đó:</label>
                            <textarea id="vd-vn21-story" rows="2" placeholder="Ví dụ: Ngưỡng mộ tinh thần kiên trì luyện tập không ngừng nghỉ và sự quyết tâm thi đấu vì màu cờ sắc áo..." class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-emerald-50/10 text-xl md:text-2xl"></textarea>
                        </div>
                        <div class="flex justify-end items-center gap-4"><button onclick="submitVanDung21();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn21Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Mục tiêu chính của tiết học 'Đọc mở rộng' (trang 35) là gì?",
            "options": [
                "Luyện tập viết các từ đồng nghĩa và trái nghĩa",
                "Tìm đọc, ghi chép phiếu đọc sách về các bài thơ viết về trẻ em và thảo luận ý kiến",
                "Luyện tập đại từ nghi vấn",
                "Tìm hiểu cách làm một báo cáo công việc"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Bài thơ 'Chuyện cổ tích về loài người' là sáng tác của nhà thơ nào?",
            "options": [
                "Nguyễn Quỳnh Mai",
                "Xuân Quỳnh",
                "Nguyễn Trọng Hoàn",
                "Trần Đăng Khoa"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Hình ảnh 'Những hạt nắng bé con / Lăng xăng đùa quanh tớ' xuất hiện trong bài thơ nào?",
            "options": [
                "Con đường tới lớp",
                "Dưới bóng cây dã hương",
                "Chuyện cổ tích về loài người",
                "Hạt gạo làng ta"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Nhà thơ Nguyễn Trọng Hoàn là tác giả của tác phẩm gợi ý nào trong bài học?",
            "options": [
                "Con đường tới lớp",
                "Chuyện cổ tích về loài người",
                "Dưới bóng cây dã hương",
                "Tuổi Ngựa"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong bài thơ 'Chuyện cổ tích về loài người', khi trẻ con tập đi thì điều gì xuất hiện?",
            "options": [
                "Bố sinh ra",
                "Mẹ hát ru",
                "Đường có từ ngày đó",
                "Bầu trời xanh hơn"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Hình ảnh 'Như bà kể chuyện xưa' trong bài của Nguyễn Quỳnh Mai dùng để so sánh với cái gì?",
            "options": [
                "Tiếng chim hót líu lo",
                "Rì rào tiếng gió thở",
                "Ánh nắng vàng êm dịu",
                "Mặt nước suối trong"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong bài thơ 'Con đường tới lớp', con đường đã trở thành gì của em học sinh?",
            "options": [
                "Người hướng dẫn",
                "Người bạn thân quen lâu rồi",
                "Mảnh đất quê hương",
                "Một thử thách khó khăn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Phiếu đọc sách theo mẫu ở câu 2 KHÔNG yêu cầu thông tin nào sau đây?",
            "options": [
                "Tên bài thơ và tác giả",
                "Mức độ yêu thích bài thơ",
                "Nội dung chính và câu thơ hay",
                "Địa chỉ nhà của người viết báo cáo"
            ],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Theo phiếu đọc sách mẫu, em thể hiện mức độ yêu thích bằng cách nào?",
            "options": [
                "Đánh giá số lượng bông hoa điểm 10",
                "Đánh giá từ 1 đến 5 sao",
                "Nhận xét bằng một câu văn dài",
                "Vẽ một bức tranh minh họa"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Khi trao đổi với bạn về bài thơ đã đọc, em nên chia sẻ điều gì?",
            "options": [
                "Đọc câu thơ/đoạn thơ em yêu thích nhất",
                "Chia sẻ tình cảm của nhà thơ đối với trẻ em",
                "Nêu suy nghĩ, cảm xúc của em sau khi đọc bài thơ",
                "Tất cả các ý kiến trên"
            ],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Nội dung phần Vận dụng ở cuối trang 35 yêu cầu em làm việc gì?",
            "options": [
                "Học thuộc lòng cả ba bài thơ",
                "Tìm đọc câu chuyện hoặc bài báo về một môn thể thao hoặc vận động viên em yêu thích",
                "Viết một báo cáo hoạt động tuần của tổ em",
                "Tập hát một bài hát thiếu nhi"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Ai được nhắc đến là người có công bế bồng, chăm sóc em bé trong trích đoạn 'Chuyện cổ tích về loài người'?",
            "options": [
                "Người bố",
                "Người mẹ",
                "Bà ngoại",
                "Thầy cô"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cụm từ 'lăng xăng' trong bài 'Dưới bóng cây dã hương' mô tả chuyển động của cái gì?",
            "options": [
                "Cánh chim bay lượn",
                "Những hạt nắng bé con",
                "Lá cây xào xạc",
                "Các bạn nhỏ tan học"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tâm trạng của bạn nhỏ khi bước đi trên con đường tới lớp được miêu tả là gì?",
            "options": [
                "Chân bước vội vã",
                "Chân bước bối rối",
                "Chân chạy tung tăng",
                "Chân bước nặng nề"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tác phẩm 'Chuyện cổ tích về loài người' của Xuân Quỳnh ca ngợi điều gì sâu sắc nhất?",
            "options": [
                "Vẻ đẹp kỳ vĩ của thiên nhiên Trái Đất",
                "Tình yêu thương vô bờ bến và sự chăm sóc của gia đình dành cho trẻ em",
                "Sự phát triển mạnh mẽ của khoa học kỹ thuật",
                "Ý thức giữ gìn vệ sinh lớp học"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- LOGIC CHUYỂN ĐỔI BÀI THƠ ---
window.switchPoem21 = function(id, btn) {
    const p1 = document.getElementById('poem-content-1');
    const p2 = document.getElementById('poem-content-2');
    const p3 = document.getElementById('poem-content-3');
    const btn1 = document.getElementById('btn-poem-1');
    const btn2 = document.getElementById('btn-poem-2');
    const btn3 = document.getElementById('btn-poem-3');

    if (!p1 || !p2 || !p3 || !btn1 || !btn2 || !btn3) return;

    p1.classList.add('hidden');
    p2.classList.add('hidden');
    p3.classList.add('hidden');

    btn1.className = "px-5 py-2.5 bg-white border border-sky-100 text-sky-900 font-black rounded-2xl shadow-sm hover:bg-sky-50 transition-all text-base";
    btn2.className = "px-5 py-2.5 bg-white border border-sky-100 text-sky-900 font-black rounded-2xl shadow-sm hover:bg-sky-50 transition-all text-base";
    btn3.className = "px-5 py-2.5 bg-white border border-sky-100 text-sky-900 font-black rounded-2xl shadow-sm hover:bg-sky-50 transition-all text-base";

    if (id === 1) {
        p1.classList.remove('hidden');
        btn1.className = "px-5 py-2.5 bg-sky-600 text-white font-black rounded-2xl shadow-md transition-all text-base";
        document.getElementById('pds21-ten').value = "Chuyện cổ tích về loài người";
        document.getElementById('pds21-tac-gia').value = "Xuân Quỳnh";
    } else if (id === 2) {
        p2.classList.remove('hidden');
        btn2.className = "px-5 py-2.5 bg-sky-600 text-white font-black rounded-2xl shadow-md transition-all text-base";
        document.getElementById('pds21-ten').value = "Dưới bóng cây dã hương";
        document.getElementById('pds21-tac-gia').value = "Nguyễn Quỳnh Mai";
    } else {
        p3.classList.remove('hidden');
        btn3.className = "px-5 py-2.5 bg-sky-600 text-white font-black rounded-2xl shadow-md transition-all text-base";
        document.getElementById('pds21-ten').value = "Con đường tới lớp";
        document.getElementById('pds21-tac-gia').value = "Nguyễn Trọng Hoàn";
    }
};

// --- LOGIC ĐÁNH GIÁ SAO ---
let rating21 = 0;
window.setRating21 = function(stars) {
    rating21 = stars;
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(`star21-${i}`);
        if (!star) continue;
        if (i <= stars) {
            star.className = "cursor-pointer text-amber-600 transition-all scale-105";
        } else {
            star.className = "cursor-pointer text-gray-800 transition-all hover:scale-105";
        }
    }
};

// --- ĐẶT LẠI PHIẾU ĐỌC SÁCH ---
window.resetPds21 = function() {
    document.getElementById('pds21-ten').value = '';
    document.getElementById('pds21-tac-gia').value = '';
    document.getElementById('pds21-ngay').value = '';
    document.getElementById('pds21-noi-dung').value = '';
    document.getElementById('pds21-nhan-vat').value = '';
    document.getElementById('pds21-chi-tiet').value = '';
    window.setRating21(0);
    const fb = document.getElementById('fb-vn21-pds');
    if (fb) fb.classList.add('hidden');
};

// --- AI THẦY E CHẤM ĐIỂM ---
window.checkPdsWithAI21 = function() {
    const ten = document.getElementById('pds21-ten').value.trim();
    const tacGia = document.getElementById('pds21-tac-gia').value.trim();
    const ngay = document.getElementById('pds21-ngay').value.trim();
    const noiDung = document.getElementById('pds21-noi-dung').value.trim();
    const nhanVat = document.getElementById('pds21-nhan-vat').value.trim();
    const chiTiet = document.getElementById('pds21-chi-tiet').value.trim();

    const fb = document.getElementById('fb-vn21-pds');
    if (!fb) return;

    if (!ten || !tacGia || !ngay || !noiDung || !nhanVat || !chiTiet) {
        fb.classList.remove('hidden');
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-600">AI Thầy E nhắc nhở:</h5>
                    <p class="text-lg">Em vui lòng điền đầy đủ tất cả các trường có dấu sao (*) trên Phiếu đọc sách trước khi gửi chấm nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-321";
        return;
    }

    if (noiDung.length < 15 || nhanVat.length < 15) {
        fb.classList.remove('hidden');
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-600">AI Thầy E nhận xét:</h5>
                    <p class="text-lg">Phần tóm tắt nội dung chính hoặc mô tả câu thơ hay/hình ảnh đẹp của em còn hơi ngắn. Hãy ghi chép chi tiết hơn để phiếu đọc sách của mình đạt kết quả cao nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-321";
        return;
    }

    fb.classList.remove('hidden');
    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-amber-600">AI Thầy E nhận xét & Chấm điểm:</h5>
                <p class="text-lg mb-3">Tuyệt vời! Em đã hoàn thành một Phiếu đọc sách rất chi tiết và chất lượng cho bài thơ "${ten}". Cách tóm tắt cô đọng, chỉ ra những câu thơ đẹp mắt cùng cảm xúc chân thành cực kỳ xứng đáng được khen ngợi!</p>
                <div class="flex items-center gap-3">
                    <span class="text-2xl md:text-3xl font-black bg-amber-500 px-3 py-1 rounded-lg">Đạt 121%</span>
                    <span class="text-sm opacity-80">(Xếp loại: Hoàn hảo - Đã ghi nhận Phiếu đọc sách)</span>
                </div>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-emerald-600 text-white transition-all duration-321";
};

// --- NỘP PHIẾU ĐỌC SÁCH GLOBAL ---
window.submitPdsGlobal21 = function() {
    const ten = document.getElementById('pds21-ten').value.trim();
    if (!ten) {
        window.showMathFeedback("Thiếu thông tin", "⚠️", "Em vui lòng nhập tên bài thơ trước khi nộp phiếu đọc sách nhé!");
        return;
    }
    window.showMathFeedback("Nộp phiếu đọc sách thành công", "🌟", `Phiếu đọc sách của bài thơ "${ten}" đã được nộp thành công với đánh giá ${rating21} sao!`);
};

// --- TRAO ĐỔI THẢO LUẬN ---
window.resetTraoDoi21 = function() {
    document.getElementById('ans-vn21-fav').value = '';
    document.getElementById('ans-vn21-feeling').value = '';
};

window.submitTraoDoi21 = function() {
    const fav = document.getElementById('ans-vn21-fav').value.trim();
    const feeling = document.getElementById('ans-vn21-feeling').value.trim();

    if (!fav || !feeling) {
        window.showMathFeedback("Thông tin thảo luận trống", "⚠️", "Em hãy điền đầy đủ nội dung chia sẻ câu thơ yêu thích và tình cảm của nhà thơ trước khi nộp nhé!");
        return;
    }
    window.showMathFeedback("Nộp bài thảo luận thành công", "🌟", "Nội dung thảo luận của em đã được lưu lại để chia sẻ với cả lớp!");
};

// --- VẬN DỤNG THỂ THAO ---
window.submitVanDung21 = function() {
    const name = document.getElementById('vd-vn21-name').value.trim();
    const title = document.getElementById('vd-vn21-title').value.trim();
    const story = document.getElementById('vd-vn21-story').value.trim();

    if (!name || !title || !story) {
        window.showMathFeedback("Thiếu thông tin vận dụng", "⚠️", "Em vui lòng điền đầy đủ thông tin vận động viên, bài báo và điều em học tập được nhé!");
        return;
    }
    window.showMathFeedback("Nộp bài vận dụng thành công", "🌟", `Bài viết về vận động viên/môn thể thao "${name}" đã được nộp thành công!`);
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.submitVn21Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 21',
            '📜',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">📜</span><p class="text-lg md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành xuất sắc bài học Đọc mở rộng!</p><p class="text-2xl md:text-3xl text-gray-800 mt-3">Đọc nhiều sách, cảm nhận vẻ đẹp thơ ca viết về trẻ em và yêu thích các môn thể thao sẽ giúp em phát triển toàn diện cả thể chất lẫn tâm hồn.</p></div>'
        );
    }
};

// --- LOGIC CHUYỂN TAB PHỤ LUYỆN TẬP ---
window.switchPracTabVn21 = function(tabIdx) {
    for (let i = 0; i < 3; i++) {
        const tabBtn = document.getElementById(`vn21-prac-tab-${i}`);
        const tabContent = document.getElementById(`vn21-prac-content-${i}`);
        if (tabBtn) {
            if (i === tabIdx) {
                tabBtn.className = "px-4 py-2 rounded-xl font-black text-lg md:text-xl transition-all bg-sky-600 text-white shadow-sm";
            } else {
                tabBtn.className = "px-4 py-2 rounded-xl font-bold text-lg md:text-xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300";
            }
        }
        if (tabContent) {
            if (i === tabIdx) {
                tabContent.className = "block space-y-6 animate-in fade-in duration-300";
            } else {
                tabContent.className = "hidden";
            }
        }
    }
};
