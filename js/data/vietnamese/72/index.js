export const lesson72 = {
    "topic": "Tiếng Việt 5",
    "week": "11",
    "period": "72",
    "title": "LTVC: LUYỆN TẬP SỬ DỤNG TỪ ĐIỂN",
    "desc": "Bài học giúp học sinh thực hành sử dụng từ điển tiếng Việt để tra cứu nghĩa từ ngữ, thành ngữ, lựa chọn cuốn từ điển phù hợp và ghi nhớ các bước tra cứu hiệu quả.",
    "subject": "LTVC",
    "theme": "Trải nghiệm để sáng tạo",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-emerald-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-emerald-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-emerald-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-emerald-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Biết sử dụng từ điển tiếng Việt để tra cứu nghĩa của các từ ngữ quen thuộc.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Nhận biết và chọn lựa loại từ điển phù hợp để giải quyết yêu cầu học tập (tra nghĩa từ, tìm từ đồng nghĩa, tra cứu thành ngữ, sửa chính tả).
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Nắm vững quy trình tra nghĩa thành ngữ và thực hành tra nghĩa thành ngữ "mắt thấy tai nghe".
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Người bạn thông thái</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Theo em, trong quá trình tự học hoặc đọc sách, khi gặp những từ ngữ phức tạp hoặc những câu thành ngữ mới lạ, việc tra cứu từ điển giúp ích gì cho chúng ta?</p>
        
        <div class="space-y-4">
            <textarea id="ans-vn72-kd" rows="3" placeholder="Em nghĩ việc tra cứu từ điển giúp chúng ta hiểu đúng, hiểu sâu nghĩa của từ, biết cách phát âm, loại từ và cách dùng từ đó trong câu, từ đó làm phong phú thêm vốn từ của bản thân..." class="w-full p-4 border-2 border-emerald-100 rounded-2xl outline-none focus:border-emerald-500 font-bold bg-emerald-50/10 text-xl md:text-2xl"></textarea>
            <div class="flex justify-center">
                <button onclick="kiemTraKhoiDong72()" class="px-8 py-3 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-base shadow-md active:scale-95">GỬI Ý KIẾN ✓</button>
            </div>
            <div id="fb-vn72-kd" class="hidden p-4 rounded-xl text-sm font-bold text-center mt-2"></div>
        </div>
    </div>

    <!-- 📋 BÀI TẬP 1: TRA CỨU NGHĨA CỦA CÁC TỪ -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <div class="flex items-start gap-3 border-b border-emerald-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">1</span>
                <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                    Sử dụng từ điển tiếng Việt để tra cứu nghĩa của các từ <span class="italic text-emerald-800">chăm chỉ</span> và <span class="italic text-emerald-800">kiên trì</span>.
                </h3>
            </div>

            <p class="text-lg md:text-xl text-gray-800 font-bold italic mb-4">👉 Hãy kéo hoặc chọn đúng nghĩa từ điển của từng từ tương ứng bên dưới:</p>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Từ Chăm chỉ -->
                <div class="bg-amber-50/50 p-6 rounded-[28px] border border-amber-100 space-y-4">
                    <h4 class="text-xl md:text-2xl font-black text-amber-600 flex items-center gap-2">
                        <span class="w-3 h-8 bg-amber-500 rounded-full"></span>
                        Từ khóa: chăm chỉ
                    </h4>
                    <p class="text-base text-gray-800 font-bold">Chọn định nghĩa đúng trong từ điển tiếng Việt:</p>
                    <div class="space-y-3">
                        <label class="flex items-start gap-3 p-3 bg-white hover:bg-amber-50 rounded-xl border border-gray-100 cursor-pointer transition-all">
                            <input type="radio" name="nghia-chamchi" value="sai-1" class="mt-1 w-5 h-5 text-emerald-800 focus:ring-emerald-600">
                            <span class="text-lg font-bold text-gray-800">Chỉ làm việc khi có sự thúc giục hoặc nhắc nhở từ người khác.</span>
                        </label>
                        <label class="flex items-start gap-3 p-3 bg-white hover:bg-amber-50 rounded-xl border border-gray-100 cursor-pointer transition-all">
                            <input type="radio" name="nghia-chamchi" value="dung" class="mt-1 w-5 h-5 text-emerald-800 focus:ring-emerald-600">
                            <span class="text-lg font-bold text-gray-800">Cố gắng làm việc hoặc học tập một cách đều đặn, thường xuyên.</span>
                        </label>
                        <label class="flex items-start gap-3 p-3 bg-white hover:bg-amber-50 rounded-xl border border-gray-100 cursor-pointer transition-all">
                            <input type="radio" name="nghia-chamchi" value="sai-2" class="mt-1 w-5 h-5 text-emerald-800 focus:ring-emerald-600">
                            <span class="text-lg font-bold text-gray-800">Làm việc nhanh chóng, mau lẹ nhưng không cần sự đều đặn.</span>
                        </label>
                    </div>
                </div>

                <!-- Từ Kiên trì -->
                <div class="bg-sky-50/50 p-6 rounded-[28px] border border-sky-100 space-y-4">
                    <h4 class="text-xl md:text-2xl font-black text-sky-800 flex items-center gap-2">
                        <span class="w-3 h-8 bg-sky-600 rounded-full"></span>
                        Từ khóa: kiên trì
                    </h4>
                    <p class="text-base text-gray-800 font-bold">Chọn định nghĩa đúng trong từ điển tiếng Việt:</p>
                    <div class="space-y-3">
                        <label class="flex items-start gap-3 p-3 bg-white hover:bg-sky-50 rounded-xl border border-gray-100 cursor-pointer transition-all">
                            <input type="radio" name="nghia-kientri" value="dung" class="mt-1 w-5 h-5 text-emerald-800 focus:ring-emerald-600">
                            <span class="text-lg font-bold text-gray-800">Giữ vững ý chí, quyết tâm làm đến cùng một công việc gì đó, không nản lòng trước khó khăn.</span>
                        </label>
                        <label class="flex items-start gap-3 p-3 bg-white hover:bg-sky-50 rounded-xl border border-gray-100 cursor-pointer transition-all">
                            <input type="radio" name="nghia-kientri" value="sai-1" class="mt-1 w-5 h-5 text-emerald-800 focus:ring-emerald-600">
                            <span class="text-lg font-bold text-gray-800">Thay đổi ý định liên tục dựa theo hoàn cảnh khách quan để đạt kết quả.</span>
                        </label>
                        <label class="flex items-start gap-3 p-3 bg-white hover:bg-sky-50 rounded-xl border border-gray-100 cursor-pointer transition-all">
                            <input type="radio" name="nghia-kientri" value="sai-2" class="mt-1 w-5 h-5 text-emerald-800 focus:ring-emerald-600">
                            <span class="text-lg font-bold text-gray-800">Làm việc một cách bền bỉ nhưng không có mục tiêu rõ ràng từ đầu.</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="flex justify-center gap-4 mt-6">
                <button onclick="kiemTraTraCuu72()" class="px-8 py-3 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-base shadow-md active:scale-95">KIỂM TRA NGHĨA ✓</button>
            </div>
            <div id="fb-vn72-bt1" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 BÀI TẬP 2: ĐỌC TÊN TỪ ĐIỂN VÀ TRẢ LỜI CÂU HỎI -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-6">
            <div class="flex items-start gap-3 border-b border-emerald-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">2</span>
                <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                    Đọc tên các cuốn từ điển dưới đây và trả lời câu hỏi.
                </h3>
            </div>

            <!-- 📚 Giao diện 3 cuốn từ điển SVG sinh động (không dùng màu tím) -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center max-w-4xl mx-auto py-4">
                <!-- Cuốn 1: Từ đồng nghĩa (Màu xanh lá) -->
                <div class="flex flex-col items-center space-y-2">
                    <svg class="w-32 h-44 drop-shadow-lg transition-transform hover:-translate-y-2 duration-372" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2072/svg">
                        <rect x="10" y="10" width="172" height="172" rx="8" fill="#10B972"/>
                        <rect x="5" y="10" width="10" height="172" fill="#047872"/>
                        <rect x="25" y="25" width="70" height="172" rx="4" fill="#E0F2FE" fill-opacity="0.15"/>
                        <text x="60" y="50" fill="#FFFFFF" font-family="sans-serif" font-size="9" font-weight="972" text-anchor="middle">TỪ ĐIỂN</text>
                        <text x="60" y="68" fill="#FEF72A" font-family="sans-serif" font-size="8.5" font-weight="872" text-anchor="middle">TỪ ĐỒNG NGHĨA</text>
                        <text x="60" y="85" fill="#FFFFFF" font-family="sans-serif" font-size="9" font-weight="972" text-anchor="middle">TIẾNG VIỆT</text>
                        <line x1="35" y1="172" x2="85" y2="172" stroke="#FFFFFF" stroke-width="1.5" stroke-dasharray="3 3"/>
                        <line x1="45" y1="172" x2="75" y2="172" stroke="#FFFFFF" stroke-dasharray="2 2"/>
                    </svg>
                    <span class="text-sm font-black text-emerald-800">Từ điển từ đồng nghĩa tiếng Việt</span>
                </div>

                <!-- Cuốn 2: Thành ngữ & Tục ngữ (Màu vàng) -->
                <div class="flex flex-col items-center space-y-2">
                    <svg class="w-32 h-44 drop-shadow-lg transition-transform hover:-translate-y-2 duration-372" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2072/svg">
                        <rect x="10" y="10" width="172" height="172" rx="8" fill="#F72E0B"/>
                        <rect x="5" y="10" width="10" height="172" fill="#B45372"/>
                        <rect x="25" y="25" width="70" height="172" rx="4" fill="#FFFBEB" fill-opacity="0.2"/>
                        <text x="60" y="50" fill="#FFFFFF" font-family="sans-serif" font-size="9" font-weight="972" text-anchor="middle">TỪ ĐIỂN</text>
                        <text x="60" y="68" fill="#FFFFFF" font-family="sans-serif" font-size="8.5" font-weight="872" text-anchor="middle">THÀNH NGỮ</text>
                        <text x="60" y="85" fill="#FFFFFF" font-family="sans-serif" font-size="8" font-weight="872" text-anchor="middle">VÀ TỤC NGỮ</text>
                        <line x1="35" y1="172" x2="85" y2="172" stroke="#FFFFFF" stroke-width="1.5" stroke-dasharray="3 3"/>
                        <line x1="45" y1="172" x2="75" y2="172" stroke="#FFFFFF" stroke-dasharray="2 2"/>
                    </svg>
                    <span class="text-sm font-black text-amber-600">Từ điển thành ngữ và tục ngữ</span>
                </div>

                <!-- Cuốn 3: Chính tả (Màu xanh dương) -->
                <div class="flex flex-col items-center space-y-2">
                    <svg class="w-32 h-44 drop-shadow-lg transition-transform hover:-translate-y-2 duration-372" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2072/svg">
                        <rect x="10" y="10" width="172" height="172" rx="8" fill="#3B72F6"/>
                        <rect x="5" y="10" width="10" height="172" fill="#1D4ED8"/>
                        <rect x="25" y="25" width="70" height="172" rx="4" fill="#EFF6FF" fill-opacity="0.15"/>
                        <text x="60" y="50" fill="#FFFFFF" font-family="sans-serif" font-size="9" font-weight="972" text-anchor="middle">TỪ ĐIỂN</text>
                        <text x="60" y="68" fill="#FEF72A" font-family="sans-serif" font-size="9" font-weight="972" text-anchor="middle">CHÍNH TẢ</text>
                        <text x="60" y="85" fill="#FFFFFF" font-family="sans-serif" font-size="9" font-weight="972" text-anchor="middle">TIẾNG VIỆT</text>
                        <line x1="35" y1="172" x2="85" y2="172" stroke="#FFFFFF" stroke-width="1.5" stroke-dasharray="3 3"/>
                        <line x1="45" y1="172" x2="75" y2="172" stroke="#FFFFFF" stroke-dasharray="2 2"/>
                    </svg>
                    <span class="text-sm font-black text-sky-800">Từ điển chính tả tiếng Việt</span>
                </div>
            </div>

            <!-- Câu hỏi kiểm tra trắc nghiệm -->
            <div class="max-w-4xl mx-auto space-y-6 pt-4">
                <!-- Câu a -->
                <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-3">
                    <p class="font-bold text-gray-800 text-lg md:text-xl">a. Từ điển nào giúp em tìm được những từ đồng nghĩa với từ <span class="italic text-emerald-900 font-black">chăm chỉ, kiên trì</span>?</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <label class="flex items-center gap-2 font-bold cursor-pointer text-base md:text-lg p-3 bg-white rounded-xl border border-gray-100">
                            <input type="radio" name="q2-opt-a" value="dongnghia" class="w-5 h-5 text-emerald-800">
                            <span>Từ điển từ đồng nghĩa tiếng Việt</span>
                        </label>
                        <label class="flex items-center gap-2 font-bold cursor-pointer text-base md:text-lg p-3 bg-white rounded-xl border border-gray-100">
                            <input type="radio" name="q2-opt-a" value="thanhngu" class="w-5 h-5 text-emerald-800">
                            <span>Từ điển thành ngữ và tục ngữ</span>
                        </label>
                        <label class="flex items-center gap-2 font-bold cursor-pointer text-base md:text-lg p-3 bg-white rounded-xl border border-gray-100">
                            <input type="radio" name="q2-opt-a" value="chinhta" class="w-5 h-5 text-emerald-800">
                            <span>Từ điển chính tả tiếng Việt</span>
                        </label>
                    </div>
                </div>

                <!-- Câu b -->
                <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-3">
                    <p class="font-bold text-gray-800 text-lg md:text-xl">b. Em sử dụng từ điển nào để tìm hiểu nghĩa của thành ngữ <span class="italic text-emerald-900 font-black">học một biết mười</span> hoặc thành ngữ <span class="italic text-emerald-900 font-black">mắt thấy tai nghe</span>?</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <label class="flex items-center gap-2 font-bold cursor-pointer text-base md:text-lg p-3 bg-white rounded-xl border border-gray-100">
                            <input type="radio" name="q2-opt-b" value="dongnghia" class="w-5 h-5 text-emerald-800">
                            <span>Từ điển từ đồng nghĩa tiếng Việt</span>
                        </label>
                        <label class="flex items-center gap-2 font-bold cursor-pointer text-base md:text-lg p-3 bg-white rounded-xl border border-gray-100">
                            <input type="radio" name="q2-opt-b" value="thanhngu" class="w-5 h-5 text-emerald-800">
                            <span>Từ điển thành ngữ và tục ngữ</span>
                        </label>
                        <label class="flex items-center gap-2 font-bold cursor-pointer text-base md:text-lg p-3 bg-white rounded-xl border border-gray-100">
                            <input type="radio" name="q2-opt-b" value="chinhta" class="w-5 h-5 text-emerald-800">
                            <span>Từ điển chính tả tiếng Việt</span>
                        </label>
                    </div>
                </div>

                <div class="flex justify-center">
                    <button onclick="kiemTraTuDien72()" class="px-8 py-3 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-base shadow-md active:scale-95">XÁC NHẬN CHỌN TỪ ĐIỂN ✓</button>
                </div>
                <div id="fb-vn72-bt2" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
            </div>
        </div>
    </section>

    <!-- 📋 BÀI TẬP 3: QUY TRÌNH TRA NGHĨA THÀNH NGỮ "MẮT THẤY TAI NGHE" -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-6">
            <div class="flex items-start gap-3 border-b border-emerald-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">3</span>
                <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                    Tìm nghĩa của thành ngữ <span class="italic text-emerald-800">mắt thấy tai nghe</span> dựa vào mẫu trong sách giáo khoa.
                </h3>
            </div>

            <div class="bg-amber-50/40 p-5 rounded-2xl border border-amber-100/50 mb-4 text-base md:text-lg font-bold text-amber-600">
                📖 <strong>Mẫu: Quy trình 4 bước tra cứu thành ngữ "học một biết mười":</strong><br>
                Bước 1: Chọn từ điển thành ngữ.<br>
                Bước 2: Tìm mục từ bắt đầu bằng chữ H.<br>
                Bước 3: Tìm thành ngữ <em>học một biết mười</em> (Tìm tiếng <em>học</em> -> Tìm thành ngữ <em>học một biết mười</em>).<br>
                Bước 4: Đọc nghĩa của thành ngữ <em>học một biết mười</em>.
            </div>

            <p class="text-lg md:text-xl text-gray-800 font-bold italic">👉 Nhiệm vụ 1: Nhấp chuột vào các bước dưới đây theo thứ tự đúng từ 1 đến 4 để sắp xếp các bước tra cứu thành ngữ <strong class="text-emerald-800">"mắt thấy tai nghe"</strong>:</p>

            <!-- Khu vực sắp xếp các bước tra cứu -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                <button id="step-btn-b" onclick="chonBuocTraCuu72('b')" class="p-4 text-left bg-emerald-50/50 hover:bg-emerald-100/75 border-2 border-emerald-100 rounded-2xl font-bold text-lg transition-all flex items-center gap-4">
                    <span id="step-num-b" class="w-8 h-8 rounded-lg bg-emerald-600 text-emerald-800 flex items-center justify-center font-black">?</span>
                    <span>Tìm mục từ bắt đầu bằng chữ M.</span>
                </button>
                <button id="step-btn-a" onclick="chonBuocTraCuu72('a')" class="p-4 text-left bg-emerald-50/50 hover:bg-emerald-100/75 border-2 border-emerald-100 rounded-2xl font-bold text-lg transition-all flex items-center gap-4">
                    <span id="step-num-a" class="w-8 h-8 rounded-lg bg-emerald-600 text-emerald-800 flex items-center justify-center font-black">?</span>
                    <span>Chọn từ điển thành ngữ.</span>
                </button>
                <button id="step-btn-d" onclick="chonBuocTraCuu72('d')" class="p-4 text-left bg-emerald-50/50 hover:bg-emerald-100/75 border-2 border-emerald-100 rounded-2xl font-bold text-lg transition-all flex items-center gap-4">
                    <span id="step-num-d" class="w-8 h-8 rounded-lg bg-emerald-600 text-emerald-800 flex items-center justify-center font-black">?</span>
                    <span>Đọc nghĩa của thành ngữ <span class="italic">mắt thấy tai nghe</span>.</span>
                </button>
                <button id="step-btn-c" onclick="chonBuocTraCuu72('c')" class="p-4 text-left bg-emerald-50/50 hover:bg-emerald-100/75 border-2 border-emerald-100 rounded-2xl font-bold text-lg transition-all flex items-center gap-4">
                    <span id="step-num-c" class="w-8 h-8 rounded-lg bg-emerald-600 text-emerald-800 flex items-center justify-center font-black">?</span>
                    <span>Tìm thành ngữ <span class="italic">mắt thấy tai nghe</span> (Tìm tiếng <span class="italic">mắt</span> -> Tìm thành ngữ).</span>
                </button>
            </div>

            <div class="flex justify-center gap-4 mt-2">
                <button onclick="kiemTraBuoc72()" class="px-8 py-3 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-base shadow-md active:scale-95">KIỂM TRA BƯỚC ✓</button>
                <button onclick="lamLaiBuoc72()" class="px-8 py-3 bg-amber-500 text-white font-black rounded-xl hover:bg-amber-500 transition-all text-base shadow-md active:scale-95">SẮP XẾP LẠI ↺</button>
            </div>
            <div id="fb-vn72-steps" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>

            <div class="border-t border-gray-100 pt-6 mt-8 space-y-4">
                <p class="text-lg md:text-xl text-gray-800 font-bold">👉 Nhiệm vụ 2: Dựa vào từ điển thành ngữ, nghĩa đúng và ví dụ phù hợp nhất của thành ngữ <span class="italic text-emerald-900 font-black">"mắt thấy tai nghe"</span> là gì?</p>
                <div class="space-y-3 max-w-4xl mx-auto">
                    <label class="flex items-start gap-3 p-4 bg-gray-50 hover:bg-emerald-50/30 rounded-2xl border border-gray-100 cursor-pointer transition-all">
                        <input type="radio" name="nghia-thanhngu" value="sai-1" class="mt-1 w-5 h-5 text-emerald-800">
                        <span class="text-lg font-bold text-gray-800">Nghĩa: Nghe người khác kể lại một sự việc một cách tỉ mỉ. Vd: <em>Chuyện này tớ nghe người ta đồn thổi xôn xao cả phố.</em></span>
                    </label>
                    <label class="flex items-start gap-3 p-4 bg-gray-50 hover:bg-emerald-50/30 rounded-2xl border border-gray-100 cursor-pointer transition-all">
                        <input type="radio" name="nghia-thanhngu" value="dung" class="mt-1 w-5 h-5 text-emerald-800">
                        <span class="text-lg font-bold text-gray-800">Nghĩa: Chứng kiến tận mắt, nghe tận tai, tin cậy được, không phải qua đồn đại nghe lại. Vd: <em>Việc này tôi mắt thấy tai nghe nên không thể sai được.</em></span>
                    </label>
                    <label class="flex items-start gap-3 p-4 bg-gray-50 hover:bg-emerald-50/30 rounded-2xl border border-gray-100 cursor-pointer transition-all">
                        <input type="radio" name="nghia-thanhngu" value="sai-2" class="mt-1 w-5 h-5 text-emerald-800">
                        <span class="text-lg font-bold text-gray-800">Nghĩa: Có khả năng quan sát tinh tường và nghe được âm thanh từ rất xa. Vd: <em>Người thợ săn mắt thấy tai nghe vô cùng nhạy bén.</em></span>
                    </label>
                </div>

                <div class="flex justify-center pt-2">
                    <button onclick="kiemTraNghiaThanhNgu72()" class="px-8 py-3 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-base shadow-md active:scale-95">XÁC NHẬN ĐÁP ÁN ✓</button>
                </div>
                <div id="fb-vn72-bt3-nghia" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
            </div>
        </div>
    </section>

    <!-- 📋 BÀI TẬP 4: KỂ TÊN CÁC TỪ ĐIỂN MÀ EM BIẾT -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-6">
            <div class="flex items-start gap-3 border-b border-emerald-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">4</span>
                <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                    Nêu tên một số từ điển mà em biết.
                </h3>
            </div>

            <div class="bg-sky-50/40 p-4 rounded-2xl border border-sky-100 text-base md:text-lg font-bold text-sky-800">
                💡 <strong>Gợi ý từ sách giáo khoa:</strong><br>
                - Từ điển Anh – Việt<br>
                - Từ điển bằng tranh – Thế giới động vật
            </div>

            <div class="space-y-4 max-w-4xl mx-auto">
                <p class="font-bold text-gray-800 text-lg md:text-xl">👉 Em hãy ghi danh sách các cuốn từ điển khác mà em biết hoặc từng sử dụng:</p>
                <textarea id="ans-vn72-viet-tudien" rows="3" placeholder="Ví dụ: Từ điển tiếng Việt học sinh, Từ điển Việt - Anh, Từ điển từ đồng nghĩa tiếng Việt, Từ điển Pháp - Việt, Từ điển bách khoa toàn thư..." class="w-full p-4 text-lg md:text-xl rounded-2xl border-2 border-emerald-100 outline-none focus:border-emerald-500 font-bold bg-emerald-50/10"></textarea>
                
                <div class="flex justify-center gap-3">
                    <button onclick="kiemTraTuLuan72()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                        <span>GỬI CÂU TRẢ LỜI</span>
                    </button>
                </div>
                <div id="fb-vn72-writing" class="hidden p-5 rounded-2xl font-bold text-base"></div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBai72Global()" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-emerald-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Cuốn từ điển nào sau đây giúp em tìm được các từ cùng nghĩa hoặc gần nghĩa với từ 'chăm chỉ'?",
            "options": [
                "Từ điển từ đồng nghĩa tiếng Việt",
                "Từ điển chính tả tiếng Việt",
                "Từ điển thành ngữ và tục ngữ",
                "Từ điển Anh - Việt"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Để tìm hiểu nghĩa của câu 'Gần mực thì đen, gần đèn thì rạng', em nên sử dụng loại từ điển nào?",
            "options": [
                "Từ điển từ đồng nghĩa tiếng Việt",
                "Từ điển chính tả tiếng Việt",
                "Từ điển thành ngữ và tục ngữ",
                "Từ điển bằng tranh sinh học"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Để tra nghĩa của từ 'kiên trì' trong từ điển giấy, sau khi chọn được cuốn từ điển tiếng Việt, bước tiếp theo em cần làm gì?",
            "options": [
                "Tìm mục từ bắt đầu bằng chữ K",
                "Đọc ngay trang cuối cùng của từ điển",
                "Tìm mục từ bắt đầu bằng chữ T",
                "Đọc các ví dụ đặt câu có chữ kiên trì"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Thành ngữ 'mắt thấy tai nghe' có ý nghĩa gì?",
            "options": [
                "Chứng kiến tận mắt, nghe tận tai sự việc thực tế, đáng tin cậy",
                "Nghĩ ra một câu chuyện thú vị để kể cho mọi người",
                "Khả năng nhìn và nghe rất tốt của động vật săn mồi",
                "Nghe thông tin từ nhiều người kể lại rồi tổng hợp"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong các cuốn từ điển sau, cuốn nào giúp em sửa lỗi viết sai dấu hỏi/ngã hoặc phụ âm đầu?",
            "options": [
                "Từ điển từ đồng nghĩa tiếng Việt",
                "Từ điển chính tả tiếng Việt",
                "Từ điển thành ngữ và tục ngữ",
                "Từ điển Anh - Việt"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Thứ tự sắp xếp các bước tra cứu thành ngữ 'học một biết mười' trong từ điển thành ngữ là gì?",
            "options": [
                "Chọn từ điển -> Tìm mục chữ cái H -> Tìm tiếng học, rồi tìm thành ngữ -> Đọc nghĩa",
                "Đọc nghĩa -> Tìm tiếng học -> Chọn từ điển -> Tìm mục chữ cái H",
                "Tìm mục chữ cái H -> Đọc nghĩa -> Chọn từ điển -> Tìm thành ngữ",
                "Chọn từ điển -> Đọc nghĩa -> Tìm tiếng học -> Tìm chữ cái H"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Ký hiệu 'Vd:' xuất hiện trong nội dung giải nghĩa của mục từ viết tắt của từ nào?",
            "options": [
                "Ví dụ",
                "Và đồng bọn",
                "Vần điệu",
                "Vận dụng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Ký hiệu 'Gngh:' xuất hiện trong từ điển có nghĩa là gì?",
            "options": [
                "Gần nghĩa",
                "Gốc nghĩa",
                "Gia đình nghĩa",
                "Giải nghĩa"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nghĩa của từ 'chăm chỉ' trong từ điển tiếng Việt được định nghĩa là gì?",
            "options": [
                "Cố gắng làm việc hoặc học tập một cách đều đặn, thường xuyên",
                "Làm việc khi được người khác nhắc nhở hoặc theo dõi",
                "Chỉ làm việc khi có phần thưởng hoặc quyền lợi lớn",
                "Làm việc thật nhanh và không bao giờ nghỉ ngơi"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nghĩa của từ 'kiên trì' trong từ điển tiếng Việt được định nghĩa là gì?",
            "options": [
                "Giữ vững ý chí, quyết tâm làm đến cùng công việc, không nản lòng trước khó khăn",
                "Bỏ cuộc giữa chừng khi gặp việc khó khăn vượt quá năng lực",
                "Thay đổi ý chí liên tục để phù hợp với hoàn cảnh",
                "Làm việc một cách vội vã để nhanh chóng hoàn thành mục tiêu"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tại sao từ điển tiếng Việt lại cần có bảng viết tắt ở những trang đầu tiên?",
            "options": [
                "Để người đọc hiểu các quy ước viết tắt (loại từ, ví dụ, gần nghĩa) dùng trong các mục từ",
                "Để làm cuốn sách dày hơn và có nhiều chữ hơn",
                "Để kiểm tra trí nhớ và thử thách người đọc",
                "Để thay thế hoàn toàn cho mục lục của cuốn sách"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Ví dụ nào phù hợp nhất để dùng câu có thành ngữ 'mắt thấy tai nghe'?",
            "options": [
                "Câu chuyện này là do tớ mắt thấy tai nghe nên hoàn toàn chính xác.",
                "Tớ mắt thấy tai nghe một bài hát rất hay từ chiếc đài phát thanh.",
                "Bạn ấy mắt thấy tai nghe để học tập các phép toán phức tạp.",
                "Cả lớp mắt thấy tai nghe khi nghe cô giáo giảng bài tập đọc."
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Để tìm các từ có nghĩa trái ngược nhau, loại từ điển nào là phù hợp nhất?",
            "options": [
                "Từ điển từ trái nghĩa tiếng Việt (hoặc từ điển đồng nghĩa - trái nghĩa)",
                "Từ điển chính tả tiếng Việt",
                "Từ điển Anh - Việt",
                "Từ điển tiếng Việt thông dụng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cuốn từ điển 'Từ điển bằng tranh – Thế giới động vật' thuộc loại từ điển nào?",
            "options": [
                "Từ điển chuyên ngành/bách khoa thư bằng hình ảnh dành cho thiếu nhi",
                "Từ điển chính tả tiếng Việt",
                "Từ điển thành ngữ tục ngữ Việt Nam",
                "Từ điển ngôn ngữ song dịch Anh - Việt"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi tra nghĩa của một từ trong từ điển, phần thông tin nào giúp em hiểu rõ hơn ngữ cảnh sử dụng từ đó?",
            "options": [
                "Ví dụ cách dùng từ (thường in nghiêng hoặc đặt sau định nghĩa)",
                "Ký hiệu từ loại (như danh từ, động từ, tính từ)",
                "Bảng tra cứu chữ cái đầu của mục từ",
                "Tên tác giả biên soạn cuốn từ điển"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- KHỞI ĐỘNG ---
window.kiemTraKhoiDong72 = function() {
    const text = document.getElementById('ans-vn72-kd')?.value.trim();
    const fb = document.getElementById('fb-vn72-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy chia sẻ ý kiến của mình về công dụng của từ điển trước nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow-sm animate-bounce";
        return;
    }

    fb.innerHTML = "🎉 Ý kiến của em rất tuyệt vời! Từ điển chính là người thầy im lặng giúp ta giải nghĩa từ chính xác và sửa lỗi chính tả hàng ngày. Hãy cùng thực hành các bài tập bên dưới nhé.";
    fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
};

// --- BÀI TẬP 1: TRA NGHĨA CHĂM CHỈ & KIÊN TRÌ ---
window.kiemTraTraCuu72 = function() {
    const fb = document.getElementById('fb-vn72-bt1');
    if (!fb) return;
    fb.classList.remove('hidden');

    const chamchi = document.querySelector('input[name="nghia-chamchi"]:checked')?.value;
    const kientri = document.querySelector('input[name="nghia-kientri"]:checked')?.value;

    if (!chamchi || !kientri) {
        fb.innerHTML = "⚠️ Em hãy chọn câu trả lời nghĩa của cả hai từ 'chăm chỉ' và 'kiên trì' trước khi kiểm tra nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    if (chamchi === 'dung' && kientri === 'dung') {
        fb.innerHTML = "🎉 Hoàn toàn chính xác! Nghĩa của 'chăm chỉ' là cố gắng làm việc/học tập đều đặn; còn 'kiên trì' là giữ vững ý chí quyết tâm làm đến cùng không nản lòng.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "❌ Có định nghĩa chưa chính xác. Em hãy đọc kỹ lại các lựa chọn và chọn lại nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- BÀI TẬP 2: CHỌN TỪ ĐIỂN PHÙ HỢP ---
window.kiemTraTuDien72 = function() {
    const fb = document.getElementById('fb-vn72-bt2');
    if (!fb) return;
    fb.classList.remove('hidden');

    const qa = document.querySelector('input[name="q2-opt-a"]:checked')?.value;
    const qb = document.querySelector('input[name="q2-opt-b"]:checked')?.value;

    if (!qa || !qb) {
        fb.innerHTML = "⚠️ Em hãy trả lời đầy đủ lựa chọn cho cả hai câu hỏi a và b nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    if (qa === 'dongnghia' && qb === 'thanhngu') {
        fb.innerHTML = "🎉 Rất giỏi! Để tìm từ đồng nghĩa ta chọn 'Từ điển từ đồng nghĩa tiếng Việt' (cuốn màu xanh lá); để tìm nghĩa thành ngữ ta chọn 'Từ điển thành ngữ và tục ngữ' (cuốn màu vàng).";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "❌ Lựa chọn từ điển chưa đúng. Hãy quan sát kỹ tên và màu sắc của 3 cuốn từ điển để chọn lại cho chính xác nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- BÀI TẬP 3: SẮP XẾP BƯỚC TRA CỨU & NGHĨA THÀNH NGỮ ---
let thuTuBuoc72 = [];
window.chonBuocTraCuu72 = function(buoc) {
    const fb = document.getElementById('fb-vn72-steps');
    if (fb) fb.classList.add('hidden');

    const index = thuTuBuoc72.indexOf(buoc);
    if (index > -1) {
        thuTuBuoc72.splice(index, 1);
        document.getElementById(`step-num-${buoc}`).innerText = '?';
        document.getElementById(`step-btn-${buoc}`).className = "p-4 text-left bg-emerald-50/50 hover:bg-emerald-100/75 border-2 border-emerald-100 rounded-2xl font-bold text-lg transition-all flex items-center gap-4";
        thuTuBuoc72.forEach((b, i) => {
            document.getElementById(`step-num-${b}`).innerText = i + 1;
        });
        return;
    }

    if (thuTuBuoc72.length >= 4) return;

    thuTuBuoc72.push(buoc);
    document.getElementById(`step-num-${buoc}`).innerText = thuTuBuoc72.length;
    document.getElementById(`step-btn-${buoc}`).className = "p-4 text-left bg-emerald-100/10 hover:bg-emerald-100/20 border-2 border-emerald-100 rounded-2xl font-bold text-lg transition-all flex items-center gap-4 text-emerald-800 shadow-sm";
};

window.kiemTraBuoc72 = function() {
    const fb = document.getElementById('fb-vn72-steps');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (thuTuBuoc72.length < 4) {
        fb.innerHTML = "⚠️ Em hãy bấm chọn đủ cả 4 bước trước khi kiểm tra nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    // Thứ tự đúng: a -> b -> c -> d
    // a: Chọn từ điển thành ngữ
    // b: Tìm mục từ bắt đầu bằng chữ M
    // c: Tìm thành ngữ mắt thấy tai nghe
    // d: Đọc nghĩa thành ngữ mắt thấy tai nghe
    const dungDapAn = thuTuBuoc72[0] === 'a' && thuTuBuoc72[1] === 'b' && thuTuBuoc72[2] === 'c' && thuTuBuoc72[3] === 'd';

    if (dungDapAn) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã sắp xếp chính xác quy trình 4 bước tra cứu thành ngữ 'mắt thấy tai nghe'.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "❌ Thứ tự các bước tra cứu chưa chính xác. Em hãy bấm nút 'SẮP XẾP LẠI' và thực hiện lại nhé.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

window.lamLaiBuoc72 = function() {
    thuTuBuoc72 = [];
    ['a', 'b', 'c', 'd'].forEach(b => {
        document.getElementById(`step-num-${b}`).innerText = '?';
        document.getElementById(`step-btn-${b}`).className = "p-4 text-left bg-emerald-50/50 hover:bg-emerald-100/75 border-2 border-emerald-100 rounded-2xl font-bold text-lg transition-all flex items-center gap-4";
    });
    const fb = document.getElementById('fb-vn72-steps');
    if (fb) fb.classList.add('hidden');
};

window.kiemTraNghiaThanhNgu72 = function() {
    const fb = document.getElementById('fb-vn72-bt3-nghia');
    if (!fb) return;
    fb.classList.remove('hidden');

    const nghia = document.querySelector('input[name="nghia-thanhngu"]:checked')?.value;

    if (!nghia) {
        fb.innerHTML = "⚠️ Em hãy chọn một định nghĩa nghĩa thích hợp nhất của thành ngữ 'mắt thấy tai nghe' nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    if (nghia === 'dung') {
        fb.innerHTML = "🎉 Hoàn toàn chính xác! 'Mắt thấy tai nghe' có nghĩa là chứng kiến tận mắt và nghe tận tai sự việc để có được sự tin cậy chân thực nhất.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "❌ Lựa chọn chưa chính xác. Hãy đọc kỹ lại phần giải thích nghĩa và ví dụ tương ứng để chọn lại nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- BÀI TẬP 4: KỂ TÊN TỪ ĐIỂN ---
window.kiemTraTuLuan72 = function() {
    const text = document.getElementById('ans-vn72-viet-tudien')?.value.trim();
    const fb = document.getElementById('fb-vn72-writing');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy nhập tên một số cuốn từ điển mà em biết vào ô văn bản trên nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    if (text.length < 5) {
        fb.innerHTML = "⚠️ Em hãy ghi đầy đủ tên các cuốn từ điển nhé (tối thiểu 5 ký tự).";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ THẦY E:</span>
            <p class="text-lg font-bold">"Rất khen ngợi sự hiểu biết của em! Các từ điển như em kể đều là những công cụ tra cứu cực kỳ có ích trong cuộc sống và học tập. Hãy giữ tinh thần tự học và thói quen tra cứu nhé!"</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold text-xs rounded-full shadow-sm mt-2">Điểm: 10/10 (Đã hoàn thành)</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-372";
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.nopBai72Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 73',
            '📚',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">📚</span><p class="text-2xl md:text-3xl font-bold text-emerald-800">Chúc mừng em đã hoàn thành bài học hôm nay!</p><p class="text-lg text-gray-800 mt-3">Hãy tiếp tục thói quen tích lũy vốn từ và sử dụng từ điển thông minh mỗi ngày để học văn thật hay nhé.</p></div>'
        );
    }
};
