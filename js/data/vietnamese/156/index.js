// Tiết 156: LTVC: Liên kết câu bằng cách lặp từ ngữ
export const lesson156 = {
    "topic": "Tiếng Việt 5",
    "week": "23",
    "period": "156",
    "title": "LTVC: LIÊN KẾT CÂU BẰNG CÁCH LẶP TỪ NGỮ",
    "desc": "Bài học giúp học sinh hiểu về cách liên kết câu bằng biện pháp lặp từ ngữ, rèn luyện kỹ năng viết đoạn văn liên kết chặt chẽ.",
    "subject": "LTVC",
    "theme": "Hương sắc trăm miền",
    "audio": "assets/audio/292-cu-do-chieu.mp3", // Tận dụng tệp âm thanh sẵn có hoặc bỏ qua
    "content": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto pb-12">
        <!-- 🎯 Mục tiêu bài học -->
        <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
            <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl"></div>
            <h3 class="text-2xl md:text-3xl font-black text-blue-600 mb-4 flex items-center gap-3">
                <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
                Mục tiêu bài học
            </h3>
            <ul class="space-y-3 text-blue-600 font-bold text-xl md:text-2xl ml-2">
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Nhận biết được những từ ngữ lặp lại có tác dụng liên kết câu trong đoạn văn.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Biết sử dụng biện pháp lặp từ ngữ để liên kết câu và viết đoạn văn đúng ngữ pháp.
                </li>
            </ul>
        </div>

        <!-- 📖 Khám phá 1: Đoạn văn Dế Choắt -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 relative overflow-hidden">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">1</div>
                    <h3 class="text-2xl md:text-3xl font-black text-blue-950">Đọc đoạn văn dưới đây và trả lời câu hỏi</h3>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <!-- Đoạn văn văn bản -->
                    <div class="lg:col-span-2 space-y-6">
                        <div class="bg-blue-50/20 p-6 md:p-8 rounded-3xl border-2 border-blue-100/50 relative">
                            <p class="serif-font text-gray-800 text-2xl md:text-3xl leading-relaxed text-justify">
                                "(1) Bên hàng xóm tôi có cái hang của <b>Dế Choắt</b>. (2) <b>Dế Choắt</b> là tên tôi đã đặt cho nó một cách chế giễu và trịch thượng thế. (3) <b>Choắt</b> nọ có lẽ cũng trạc tuổi tôi. (4) Nhưng vì <b>Choắt</b> bẩm sinh yếu đuối nên tôi coi thường và gã cũng sợ tôi lắm."
                            </p>
                            <p class="text-right font-black text-blue-600 text-lg mt-4">— Tô Hoài</p>
                        </div>
                    </div>

                    <!-- Minh họa Dế Choắt -->
                    <div class="text-center flex flex-col justify-center items-center bg-gray-50 rounded-3xl p-4 border border-gray-100">
                        <img src="hinh_anh/tiengviet_5_2/156/de_choat.png" alt="Dế Choắt" class="max-h-48 object-contain rounded-2xl shadow-md border-2 border-white">
                        <p class="text-gray-500 font-bold text-lg mt-2">Dế Choắt trong truyện Dế Mèn Phiêu Lưu Ký</p>
                    </div>
                </div>

                <!-- Tương tác Câu hỏi a, b -->
                <div class="bg-gray-50 p-6 rounded-3xl border border-gray-200/60 space-y-6">
                    <!-- Câu a -->
                    <div class="space-y-3">
                        <label class="block font-black text-gray-800 text-xl md:text-2xl">a. Từ ngữ nào được lặp lại ở các câu trong đoạn văn trên?</label>
                        <select id="sel-156-1a" class="w-full md:w-1/2 p-3 bg-white border-2 border-blue-200 text-gray-800 rounded-xl font-bold text-lg focus:outline-none focus:border-blue-500">
                            <option value="">-- Chọn đáp án --</option>
                            <option value="sai">Hàng xóm, tuổi tôi</option>
                            <option value="dung">Dế Choắt, Choắt</option>
                            <option value="sai2">Trịch thượng, chế giễu</option>
                        </select>
                    </div>

                    <!-- Câu b -->
                    <div class="space-y-3">
                        <label class="block font-black text-gray-800 text-xl md:text-2xl">b. Việc lặp lại từ đó có tác dụng gì?</label>
                        <select id="sel-156-1b" class="w-full md:w-1/2 p-3 bg-white border-2 border-blue-200 text-gray-800 rounded-xl font-bold text-lg focus:outline-none focus:border-blue-500">
                            <option value="">-- Chọn đáp án --</option>
                            <option value="sai">Làm cho đoạn văn dài hơn</option>
                            <option value="dung">Tạo sự liên kết chặt chẽ giữa các câu trong đoạn văn</option>
                            <option value="sai2">Tránh việc phải suy nghĩ từ mới</option>
                        </select>
                    </div>

                    <!-- Nút kiểm tra E -->
                    <div class="pt-4 flex justify-end">
                        <button id="btn-check-156-1" onclick="window.kiemTraCau1_156()" class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl font-black text-2xl md:text-3xl shadow-lg transition-all active:scale-95 flex items-center justify-center">E</button>
                    </div>

                    <div id="fb-ex1-156" class="hidden p-4 rounded-xl font-bold text-lg"></div>
                </div>
            </div>
        </section>

        <!-- 📖 Khám phá 2: Điền từ hoa giấy -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">2</div>
                    <h3 class="text-2xl md:text-3xl font-black text-blue-950">Chọn từ ngữ thay cho bông hoa (🌸) để tạo liên kết giữa các câu</h3>
                </div>

                <div class="bg-amber-50/20 p-6 md:p-8 rounded-3xl border-2 border-amber-100/50 mb-8">
                    <p class="serif-font text-gray-800 text-2xl md:text-3xl leading-relaxed text-justify space-y-4">
                        (1) Hoa giấy đẹp một cách giản dị. (2) Mỗi cánh 
                        <select id="sel-156-2a" class="mx-2 p-1.5 bg-white border-2 border-amber-300 rounded-xl font-bold text-xl text-amber-900 focus:outline-none">
                            <option value="">-- 🌸 --</option>
                            <option value="hoa-giay">hoa giấy</option>
                            <option value="chiec-la">chiếc lá</option>
                            <option value="canh-hoa">cánh hoa</option>
                        </select> 
                        giống hệt một chiếc lá, chỉ có điều mỏng mảnh hơn và có màu sắc rực rỡ. (3) Lớp lớp 
                        <select id="sel-156-2b" class="mx-2 p-1.5 bg-white border-2 border-amber-300 rounded-xl font-bold text-xl text-amber-900 focus:outline-none">
                            <option value="">-- 🌸 --</option>
                            <option value="hoa-giay">hoa giấy</option>
                            <option value="san-dinh">sân đình</option>
                            <option value="con-gio">cơn gió</option>
                        </select> 
                        rải kín mặt sân, nhưng chỉ cần một làn gió thoáng, chúng tản mát bay đi mất.
                    </p>
                    <p class="text-right font-black text-amber-900 text-lg mt-4">— Theo Trần Hoài Dương</p>
                </div>

                <!-- Nút kiểm tra E -->
                <div class="flex items-center justify-between">
                    <button onclick="window.resetCau2_156()" class="px-6 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-all">LÀM LẠI</button>
                    <button id="btn-check-156-2" onclick="window.kiemTraCau2_156()" class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl font-black text-2xl md:text-3xl shadow-lg transition-all active:scale-95 flex items-center justify-center">E</button>
                </div>

                <div id="fb-ex2-156" class="hidden p-4 rounded-xl font-bold text-lg mt-4"></div>
            </div>
        </section>

        <!-- 📌 Khung Ghi nhớ -->
        <section class="w-full">
            <div class="bg-gradient-to-r from-blue-800 to-indigo-950 rounded-[32px] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
                <div class="absolute right-0 top-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                <div class="flex items-start gap-4 relative z-10">
                    <span class="text-2xl md:text-4xl">📌</span>
                    <div>
                        <h4 class="text-2xl md:text-3xl font-black mb-3 text-yellow-300 uppercase tracking-wide">Ghi nhớ</h4>
                        <p class="text-xl md:text-2xl leading-relaxed text-blue-50">
                            Các câu trong một đoạn văn có thể liên kết với nhau bằng cách <b>lặp từ ngữ</b>: câu sau lặp lại từ ngữ ở câu trước.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `,
    "practice": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto pb-12">
        <!-- 📖 Luyện tập 3: Tìm từ lặp liên kết -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-8 shadow-xl border border-blue-100">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">3</div>
                    <h3 class="text-2xl md:text-3xl font-black text-blue-950">Tìm từ ngữ được lặp lại để liên kết câu trong các đoạn văn</h3>
                </div>

                <div class="space-y-8">
                    <!-- Đoạn a -->
                    <div class="bg-gray-50 p-6 rounded-3xl border border-gray-200/60 grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                        <div class="lg:col-span-3 space-y-4">
                            <p class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed text-justify">
                                a. "(1) Một hôm, Thạch Sanh ngồi trong ngục tối, đem đàn của vua Thuỷ Tề cho ra gảy. (2) Tiếng đàn vang lên như những lời trách oán, trách sự hững hờ của công chúa và oán sự độc ác của Lý Thông. (3) Tiếng đàn vẳng đến hoàng cung, lọt vào tai công chúa. (4) Vừa nghe tiếng đàn, công chúa bỗng cười nói vui vẻ. (5) Nàng xin vua cha cho gọi người đánh đàn vào cung."
                            </p>
                            <div class="flex flex-wrap items-center gap-3 mt-2">
                                <span class="font-bold text-gray-700 text-lg">👉 Từ ngữ được lặp lại:</span>
                                <select id="sel-156-3a" class="p-2 bg-white border-2 border-blue-200 rounded-xl font-bold text-lg text-gray-800 focus:outline-none">
                                    <option value="">-- Chọn từ --</option>
                                    <option value="cong-chua">công chúa</option>
                                    <option value="tieng-dan">tiếng đàn / đàn</option>
                                    <option value="thach-sanh">Thạch Sanh</option>
                                </select>
                            </div>
                        </div>
                        <div class="text-center hidden lg:block bg-white p-3 rounded-2xl shadow-sm border">
                            <img src="hinh_anh/tiengviet_5_2/156/thach_sanh.png" alt="Thạch Sanh" class="max-h-36 object-contain rounded-xl">
                        </div>
                    </div>

                    <!-- Đoạn b -->
                    <div class="bg-gray-50 p-6 rounded-3xl border border-gray-200/60 grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                        <div class="lg:col-span-3 space-y-4">
                            <p class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed text-justify">
                                b. "(1) Trong rừng, những cây sau sau đã ra lá non. (2) Những mầm lá mới nảy chưa có màu xanh, chúng mang màu nâu hồng trong suốt. (3) Những lá lớn hơn xanh mơn mởn. (4) Đi dưới rừng cây sau sau, tưởng như đi dưới một vòm nhà lợp đầy những ngôi sao xanh. (5) Ánh mặt trời chiếu qua tán lá xuống như một ánh đèn xanh dịu."
                            </p>
                            <div class="flex flex-wrap items-center gap-3 mt-2">
                                <span class="font-bold text-gray-700 text-lg">👉 Các từ ngữ được lặp lại là:</span>
                                <select id="sel-156-3b" class="p-2 bg-white border-2 border-blue-200 rounded-xl font-bold text-lg text-gray-800 focus:outline-none">
                                    <option value="">-- Chọn từ --</option>
                                    <option value="la-sau-sau">lá, sau sau (cây sau sau)</option>
                                    <option value="mat-troi">mặt trời, ngôi sao</option>
                                    <option value="mau-xanh">màu xanh, ánh nắng</option>
                                </select>
                            </div>
                        </div>
                        <div class="text-center hidden lg:block bg-white p-3 rounded-2xl shadow-sm border">
                            <img src="hinh_anh/tiengviet_5_2/156/cay_sau_sau.png" alt="Cây sau sau" class="max-h-36 object-contain rounded-xl">
                        </div>
                    </div>

                    <!-- Đoạn c -->
                    <div class="bg-gray-50 p-6 rounded-3xl border border-gray-200/60 space-y-4">
                        <p class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed text-justify">
                            c. "(1) Chú sơn ca tiếp tục vỗ cánh bay lên cao vút. (2) Chú thấy cần phải làm một chuyến đi xa để thăm tất cả mảnh đất quê hương của chú. (3) Đôi cánh nhỏ chao chát trên không dẫn chú đi. (4) Cảnh vật loang loáng in vào đôi mắt tinh nhanh tuyệt diệu của chú. (5) Chú xiết bao kinh ngạc vì thấy quê hương của chú, ngoài dãy đồi đầy một màu xanh và ánh nắng, còn trải ra bao la!"
                        </p>
                        <div class="flex flex-wrap items-center gap-3 mt-2">
                            <span class="font-bold text-gray-700 text-lg">👉 Từ ngữ được lặp lại nhiều nhất:</span>
                            <select id="sel-156-3c" class="p-2 bg-white border-2 border-blue-200 rounded-xl font-bold text-lg text-gray-800 focus:outline-none">
                                    <option value="">-- Chọn từ --</option>
                                    <option value="son-ca">sơn ca</option>
                                    <option value="canh">cánh</option>
                                    <option value="chu-que-huong">chú, quê hương</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Nút kiểm tra E -->
                <div class="flex items-center justify-between mt-8 border-t pt-6">
                    <button onclick="window.resetCau3_156()" class="px-6 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-all">LÀM LẠI</button>
                    <button id="btn-check-156-3" onclick="window.kiemTraCau3_156()" class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl font-black text-2xl md:text-3xl shadow-lg transition-all active:scale-95 flex items-center justify-center">E</button>
                </div>

                <div id="fb-ex3-156" class="hidden p-4 rounded-xl font-bold text-lg mt-4"></div>
            </div>
        </section>

        <!-- ✍️ Luyện tập 4: Viết đoạn văn ngắn -->
        <section class="w-full mt-8">
            <div class="bg-white rounded-[40px] p-6 md:p-8 shadow-xl border border-blue-100">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">4</div>
                    <h3 class="text-2xl md:text-3xl font-black text-blue-950 flex items-center gap-3">
                        Viết 2 - 3 câu về một lễ hội, có sử dụng cách lặp từ ngữ để liên kết câu
                        <button onclick="window.toggleSpeechRec156()" class="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full transition-all text-sm shadow-sm" title="Nhập bằng giọng nói">🎙️</button>
                    </h3>
                </div>

                <textarea id="ans-vn156-writing" rows="5" placeholder="Ví dụ: Hội Lim quê em diễn ra vô cùng sôi nổi vào mùa xuân. Trong ngày hội Lim, mọi người nô nức đi xem hát quan họ trên thuyền rồng..." class="w-full p-4 md:p-6 text-xl md:text-2xl rounded-2xl border-2 border-blue-100 focus:border-blue-500 outline-none shadow-sm bg-blue-50/5 mb-6 font-medium leading-relaxed"></textarea>

                <!-- Nút kiểm tra E -->
                <div class="flex flex-wrap items-center gap-4">
                    <button id="btn-check-156-4" onclick="window.checkWriting156()" class="px-8 py-4 bg-blue-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-blue-700 active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-blue-600 font-black text-xs shadow-sm">E</div> 
                        <span>NHẬN XÉT CHI TIẾT</span>
                    </button>
                    <button onclick="window.resetWriting156()" class="px-6 py-4 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition-all">LÀM LẠI</button>
                </div>

                <!-- Phản hồi nhận xét AI -->
                <div id="fb-vn156-writing" class="hidden mt-6 p-6 bg-white border-2 border-blue-100 rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500"></div>
            </div>
        </section>
    </div>
    `,
    "quizPool": [
        {
            "question": "Cách liên kết các câu trong đoạn văn bằng cách sử dụng lại các từ ngữ ở câu trước gọi là gì?",
            "options": [
                "Thay thế từ ngữ",
                "Dùng từ ngữ nối",
                "Lặp từ ngữ",
                "Tương phản từ ngữ"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Trong đoạn văn: \"Nhà bà ngoại có vườn rau nhỏ. Vườn rau luôn xanh mướt quanh năm.\", từ nào dùng để liên kết?",
            "options": [
                "Bà ngoại",
                "Vườn rau",
                "Xanh mướt",
                "Nhà"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tác dụng chính của việc liên kết câu bằng cách lặp từ ngữ là gì?",
            "options": [
                "Giúp đoạn văn có tính liên kết chặt chẽ và nhất quán về chủ đề",
                "Làm tăng số lượng chữ trong câu",
                "Giúp câu văn nghe văn vẻ bóng bẩy hơn",
                "Tránh lỗi lặp từ ngữ gây nhàm chán"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cần lưu ý điều gì khi sử dụng phép lặp từ ngữ để liên kết câu?",
            "options": [
                "Càng lặp lại nhiều lần càng tốt",
                "Chỉ lặp những từ ngữ cần thiết để liên kết chủ đề, tránh lặp từ vô tội vạ gây nhàm chán",
                "Mọi câu trong đoạn phải bắt đầu bằng một từ giống nhau",
                "Chỉ được lặp tính từ, không được lặp danh từ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong câu: \"Hội Lim quê em nổi tiếng với những điệu quan họ ngọt ngào. Điệu quan họ đã đi vào lòng biết bao du khách.\", từ nào được lặp lại?",
            "options": [
                "Hội Lim",
                "Quê em",
                "Điệu quan họ",
                "Du khách"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Đoạn văn sau liên kết bằng cách nào: \"Chim họa mi hót rất hay. Họa mi xứng đáng là nghệ sĩ của rừng xanh.\"",
            "options": [
                "Dùng từ ngữ nối",
                "Thay thế từ ngữ",
                "Lặp từ ngữ (Họa mi)",
                "Liên kết bằng đại từ"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Từ lặp lại để liên kết câu 2 với câu 1 trong đoạn: \"Hùng thích đá bóng. Cậu ấy đá bóng mỗi chiều.\" là gì?",
            "options": [
                "Hùng",
                "Cậu ấy",
                "Đá bóng",
                "Mỗi chiều"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Phép lặp từ ngữ giúp các câu trong đoạn văn hướng về điều gì?",
            "options": [
                "Nhiều chủ đề khác nhau",
                "Cùng một sự vật, hiện tượng hoặc chủ đề nhất quán",
                "Các hành động đối lập",
                "Việc kể chuyện của tác giả khác"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Xác định từ liên kết lặp lại trong đoạn: \"Mùa xuân đã về. Mùa xuân mang theo hơi ấm rạng ngời.\"",
            "options": [
                "Đã về",
                "Mang theo",
                "Hơi ấm",
                "Mùa xuân"
            ],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Đâu là câu tiếp nối liên kết tốt bằng phép lặp cho câu: \"Đền Hùng nằm trên núi Nghĩa Lĩnh.\"",
            "options": [
                "Nơi đây phong cảnh rất hữu tình.",
                "Ngôi đền cổ kính ấy thờ các vua Hùng có công dựng nước.",
                "Núi Nghĩa Lĩnh là địa danh lịch sử linh thiêng của dân tộc.",
                "Chúng em đi xe khách mất ba tiếng."
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Điền từ lặp phù hợp để liên kết: \"Trống hội vang lên giòn giã. Tiếng ... giục giã lòng người trẩy hội.\"",
            "options": [
                "chiêng",
                "trống",
                "kèn",
                "đàn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Phép lặp từ ngữ thuộc nhóm các biện pháp nào trong tiếng Việt?",
            "options": [
                "Biện pháp tu từ cú pháp",
                "Biện pháp liên kết câu và liên kết đoạn văn",
                "Phương thức biểu đạt tự sự",
                "Phương pháp miêu tả cảnh vật"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đoạn văn sau có sử dụng phép lặp không: \"Mẹ em nấu ăn rất ngon. Món ăn nào mẹ nấu cũng đậm đà hương vị gia đình.\"",
            "options": [
                "Không sử dụng phép liên kết nào",
                "Có sử dụng phép lặp từ ngữ (Nấu ăn / Món ăn, mẹ)",
                "Chỉ sử dụng từ nối",
                "Có sử dụng phép thế"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ lặp lại trong đoạn: \"Thạch Sanh là dũng sĩ tài ba. Dũng sĩ ấy đã trừ diệt đại bàng cứu công chúa.\"",
            "options": [
                "Thạch Sanh",
                "Dũng sĩ",
                "Đại bàng",
                "Công chúa"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Câu sau đây liên kết với câu trước bằng từ ngữ nào: \"Sơn ca cất cánh bay cao. Tiếng hót sơn ca làm say đắm đất trời.\"",
            "options": [
                "Sơn ca",
                "Bay cao",
                "Tiếng hót",
                "Đất trời"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- HÀM TƯƠNG TÁC GIAO DIỆN (WINDOW GLOBALS) ---

// Kiểm tra câu 1
window.kiemTraCau1_156 = function() {
    const a = document.getElementById('sel-156-1a').value;
    const b = document.getElementById('sel-156-1b').value;
    const fb = document.getElementById('fb-ex1-156');
    fb.classList.remove('hidden');

    if (!a || !b) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Hãy chọn câu trả lời cho cả hai câu hỏi a và b nhé!";
        return;
    }

    if (a === 'dung' && b === 'dung') {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
        fb.innerHTML = "🌟 Rất tốt! Em đã trả lời chính xác. <br>• Từ được lặp lại là <b>Dế Choắt, Choắt</b>.<br>• Tác dụng: <b>Tạo sự liên kết chặt chẽ</b> giữa các câu trong đoạn văn.";
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Chính xác! Chúc mừng em.", "success");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-800 border border-red-200 mt-4";
        fb.innerHTML = "❌ Chưa chính xác. Em hãy đọc kỹ lại đoạn văn và chọn lại đáp án đúng nhé.";
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Thử lại nhé!", "error");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

// Kiểm tra câu 2
window.kiemTraCau2_156 = function() {
    const a = document.getElementById('sel-156-2a').value;
    const b = document.getElementById('sel-156-2b').value;
    const fb = document.getElementById('fb-ex2-156');
    fb.classList.remove('hidden');

    if (!a || !b) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Hãy chọn từ ngữ thay thế cho cả hai bông hoa nhé!";
        return;
    }

    if (a === 'hoa-giay' && b === 'hoa-giay') {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
        fb.innerHTML = "🌟 Chính xác! Cả hai vị trí đều cần điền cụm từ <b>\"hoa giấy\"</b> lặp lại từ câu 1 để làm cầu nối liên kết các câu 1, 2 và 3 thành một đoạn văn hoàn chỉnh thống nhất.";
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Chính xác hoàn toàn!", "success");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-800 border border-red-200 mt-4";
        fb.innerHTML = "❌ Đáp án chưa đúng. Em hãy chú ý câu 1 đang nói về hoa gì để chọn từ lặp cho câu sau nhé!";
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Chưa đúng rồi, hãy thử lại!", "error");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

window.resetCau2_156 = function() {
    document.getElementById('sel-156-2a').value = "";
    document.getElementById('sel-156-2b').value = "";
    const fb = document.getElementById('fb-ex2-156');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};

// Kiểm tra câu 3
window.kiemTraCau3_156 = function() {
    const a = document.getElementById('sel-156-3a').value;
    const b = document.getElementById('sel-156-3b').value;
    const c = document.getElementById('sel-156-3c').value;
    const fb = document.getElementById('fb-ex3-156');
    fb.classList.remove('hidden');

    if (!a || !b || !c) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-orange-100 text-orange-800 border border-orange-200 mt-4";
        fb.innerHTML = "⚠️ Em vui lòng chọn từ liên kết cho cả 3 đoạn văn a, b và c nhé!";
        return;
    }

    const correctA = (a === 'tieng-dan');
    const correctB = (b === 'la-sau-sau');
    const correctC = (c === 'chu-que-huong');

    const total = [correctA, correctB, correctC].filter(Boolean).length;

    if (total === 3) {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-green-100 text-green-800 border border-green-200 mt-4";
        fb.innerHTML = "🌟 Xuất sắc! Em đã tìm đúng toàn bộ các từ ngữ lặp lại:<br>" +
                       "• Đoạn a: lặp từ <b>\"tiếng đàn\"</b> (xuất hiện ở câu 2, 3, 4).<br>" +
                       "• Đoạn b: lặp từ <b>\"lá\" / \"sau sau\"</b>.<br>" +
                       "• Đoạn c: lặp từ <b>\"chú\" / \"quê hương\"</b>.";
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Chính xác hoàn hảo!", "success");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    } else {
        fb.className = "p-4 rounded-xl font-bold text-lg bg-red-100 text-red-800 border border-red-200 mt-4";
        fb.innerHTML = `❌ Chưa chính xác hoàn toàn. Em đã làm đúng ${total}/3 câu. Hãy kiểm tra lại và chọn lại nhé!`;
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Hãy xem kỹ lại một chút!", "error");
        }
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
    }
};

window.resetCau3_156 = function() {
    document.getElementById('sel-156-3a').value = "";
    document.getElementById('sel-156-3b').value = "";
    document.getElementById('sel-156-3c').value = "";
    const fb = document.getElementById('fb-ex3-156');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};

// Nhập giọng nói
window.toggleSpeechRec156 = function() {
    if (window.UI && typeof window.UI.showToast === 'function') {
        window.UI.showToast("Tính năng nhập bằng giọng nói đang khởi động...", "success");
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Trình duyệt không hỗ trợ nhận dạng giọng nói.");
        return;
    }
    const rec = new SpeechRecognition();
    rec.lang = 'vi-VN';
    rec.start();
    rec.onresult = function(event) {
        const txt = event.results[0][0].transcript;
        const textarea = document.getElementById('ans-vn156-writing');
        if (textarea) textarea.value = (textarea.value + " " + txt).trim();
    };
};

// Kiểm tra đoạn văn viết (Câu 4) sử dụng AI
window.checkWriting156 = async function() {
    const text = document.getElementById('ans-vn156-writing').value.trim();
    const fb = document.getElementById('fb-vn156-writing');
    fb.classList.remove('hidden');

    if (text.length < 15) {
        fb.className = "mt-6 p-6 bg-orange-50 border-2 border-orange-200 text-orange-800 rounded-2xl font-bold text-lg";
        fb.innerHTML = "⚠️ Đoạn văn của em hơi ngắn. Hãy viết tối thiểu 2 đến 3 câu hoàn chỉnh về một lễ hội nhé!";
        return;
    }

    fb.innerHTML = `<div class="flex items-center gap-3 text-blue-600 animate-pulse font-black text-xl">
                        <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">E</div>
                        Đang đọc và nhận xét bài cho em, đợi một chút nhé...
                    </div>`;

    // Local heuristic check để đề phòng mất mạng
    const words = text.toLowerCase().split(/[\s,.\-!?;:]+/);
    const wordCounts = {};
    words.forEach(w => {
        if (w.length > 2) wordCounts[w] = (wordCounts[w] || 0) + 1;
    });
    const duplicates = Object.entries(wordCounts).filter(([w, c]) => c > 1).map(([w]) => w);

    try {
        const response = await fetch(window.AI_API_URL || "https://api.edurobot.vn/ai/grade", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sentence: `Em hãy nhận xét đoạn văn viết về lễ hội của học sinh tiểu học sau: "${text}".
                Yêu cầu:
                1. Đoạn văn đã đủ 2-3 câu chưa.
                2. Học sinh đã sử dụng phép lặp từ ngữ để liên kết câu chưa. Chỉ rõ từ ngữ lặp lại đó.
                3. Đưa ra lời nhận xét động viên nhẹ nhàng bằng tiếng Việt kèm thang điểm 10 dạng: "Điểm: X/10".`,
                mode: 'chat',
                persona: 'tlv'
            })
        });
        const data = await response.json();
        const reply = typeof data === 'string' ? data : (data.response || data.content || "Bài viết khá tốt!");
        
        fb.className = "mt-6 p-6 bg-white border-2 border-blue-100 rounded-2xl shadow-xl";
        fb.innerHTML = `
            <div class="space-y-4">
                <div class="flex items-center justify-between border-b pb-2 mb-2">
                    <div class="flex items-center gap-2 text-blue-600 font-black text-xl">
                        <span>✍️</span> NHẬN XÉT CỦA THẦY CÔ GIÁO
                    </div>
                </div>
                <div class="text-gray-700 leading-relaxed serif-font text-xl">${reply.replace(/\n/g, '<br>').replace(/\*\*/g, '<b>')}</div>
            </div>`;
        if (window.UI && typeof window.UI.showToast === 'function') {
            window.UI.showToast("Đã nhận xét xong đoạn văn của em!", "success");
        }
    } catch (err) {
        // Fallback local grading
        fb.className = "mt-6 p-6 bg-white border-2 border-blue-100 rounded-2xl shadow-xl";
        if (duplicates.length > 0) {
            fb.innerHTML = `
                <div class="space-y-4">
                    <h4 class="font-black text-green-700 text-xl">💡 Nhận xét từ EduRobot (Offline):</h4>
                    <p class="text-gray-700 text-lg">Đoạn văn của em rất tốt! Em đã sử dụng phép lặp từ ngữ để liên kết các câu. Các từ lặp là: <b>"${duplicates.join(', ')}"</b>.</p>
                    <div class="text-blue-600 font-bold">Điểm dự kiến: 9/10</div>
                </div>`;
        } else {
            fb.innerHTML = `
                <div class="space-y-4">
                    <h4 class="font-black text-amber-700 text-xl">💡 Nhận xét từ EduRobot (Offline):</h4>
                    <p class="text-gray-700 text-lg">Đoạn văn của em viết trôi chảy, tuy nhiên Thầy chưa thấy các từ ngữ được lặp lại giữa các câu để liên kết. Em hãy chỉnh sửa lại câu sau cho lặp từ của câu trước nhé!</p>
                    <div class="text-blue-600 font-bold">Điểm dự kiến: 7/10</div>
                </div>`;
        }
    }
};

window.resetWriting156 = function() {
    document.getElementById('ans-vn156-writing').value = "";
    const fb = document.getElementById('fb-vn156-writing');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};
