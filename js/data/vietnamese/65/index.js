export const lesson65 = {
    "topic": "Tiếng Việt 5",
    "week": "10",
    "period": "65",
    "title": "LTVC: SỬ DỤNG TỪ ĐIỂN",
    "desc": "Bài học giúp học sinh nắm vững các bước tra cứu từ điển, hiểu cách trình bày thông tin của một mục từ và thực hành tra cứu nghĩa gốc, nghĩa chuyển của từ ngữ.",
    "subject": "LTVC",
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
        <ul class="space-y-3 text-emerald-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Biết cách sắp xếp và thực hiện đúng các bước tra cứu nghĩa của từ trong từ điển.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Nhận biết và phân biệt được các thông tin của một mục từ: loại từ, nghĩa gốc, nghĩa chuyển, ví dụ cách dùng.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Thực hành tra cứu nghĩa và đặt câu với nghĩa chuyển của các từ cho trước.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Thử tài đoán nghĩa</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Theo em, khi gặp một từ mới hoặc từ chưa rõ nghĩa, từ điển giúp ích gì cho chúng ta và cách nhanh nhất để tìm từ đó là gì?</p>
        
        <div class="space-y-4">
            <textarea id="ans-vn65-kd" rows="3" placeholder="Em nghĩ từ điển giúp chúng ta hiểu nghĩa chính xác của từ, biết từ đó là danh từ, động từ hay tính từ, và cho ví dụ đặt câu. Cách tìm nhanh là tra theo bảng chữ cái..." class="w-full p-4 border-2 border-emerald-100 rounded-2xl outline-none focus:border-emerald-500 font-bold bg-emerald-50/10 text-xl md:text-2xl"></textarea>
            <div class="flex justify-center">
                <button onclick="window.kiemTraKhoiDong65()" class="px-8 py-3 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-base shadow-md">GỬI SUY NGHĨ ✓</button>
            </div>
            <div id="fb-vn65-kd" class="hidden p-4 rounded-xl text-sm font-bold text-center mt-2"></div>
        </div>
    </div>

    <!-- 📋 BÀI TẬP 1: SẮP XẾP BƯỚC TRA CỨU -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <div class="flex items-center gap-3 border-b border-emerald-100 pb-4">
                <!-- Sử dụng icon tròn cho số thứ tự bài tập -->
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md">1</span>
                <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                    Sắp xếp các bước theo trình tự tra cứu nghĩa của từ <span class="italic text-emerald-800">đọc</span> trong từ điển.
                </h3>
            </div>
            
            <p class="text-lg md:text-xl text-gray-800 font-bold italic mb-4">👉 Hướng dẫn: Nhấp chuột vào các thẻ bước dưới đây theo đúng thứ tự từ 1 đến 5 để sắp xếp.</p>
            
            <!-- Khu vực danh sách các bước cần sắp xếp -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button id="step-btn-c" onclick="window.chonBuoc65('c')" class="p-5 text-left bg-emerald-50/50 hover:bg-emerald-100/70 border-2 border-emerald-100 rounded-2xl font-bold text-lg md:text-xl transition-all flex items-center gap-4">
                    <span id="step-num-c" class="w-8 h-8 rounded-lg bg-emerald-600 text-emerald-800 flex items-center justify-center font-black">?</span>
                    <span>c. Chọn từ điển phù hợp.</span>
                </button>
                <button id="step-btn-b" onclick="window.chonBuoc65('b')" class="p-5 text-left bg-emerald-50/50 hover:bg-emerald-100/70 border-2 border-emerald-100 rounded-2xl font-bold text-lg md:text-xl transition-all flex items-center gap-4">
                    <span id="step-num-b" class="w-8 h-8 rounded-lg bg-emerald-600 text-emerald-800 flex items-center justify-center font-black">?</span>
                    <span>b. Tìm mục từ bắt đầu bằng chữ Đ.</span>
                </button>
                <button id="step-btn-a" onclick="window.chonBuoc65('a')" class="p-5 text-left bg-emerald-50/50 hover:bg-emerald-100/70 border-2 border-emerald-100 rounded-2xl font-bold text-lg md:text-xl transition-all flex items-center gap-4">
                    <span id="step-num-a" class="w-8 h-8 rounded-lg bg-emerald-600 text-emerald-800 flex items-center justify-center font-black">?</span>
                    <span>a. Tìm từ <span class="italic">đọc</span>.</span>
                </button>
                <button id="step-btn-e" onclick="window.chonBuoc65('e')" class="p-5 text-left bg-emerald-50/50 hover:bg-emerald-100/70 border-2 border-emerald-100 rounded-2xl font-bold text-lg md:text-xl transition-all flex items-center gap-4">
                    <span id="step-num-e" class="w-8 h-8 rounded-lg bg-emerald-600 text-emerald-800 flex items-center justify-center font-black">?</span>
                    <span>e. Đọc nghĩa của từ <span class="italic">đọc</span>.</span>
                </button>
                <button id="step-btn-d" onclick="window.chonBuoc65('d')" class="p-5 text-left bg-emerald-50/50 hover:bg-emerald-100/70 border-2 border-emerald-100 rounded-2xl font-bold text-lg md:text-xl transition-all flex items-center gap-4 md:col-span-2">
                    <span id="step-num-d" class="w-8 h-8 rounded-lg bg-emerald-600 text-emerald-800 flex items-center justify-center font-black">?</span>
                    <span>d. Đọc ví dụ để hiểu thêm ý nghĩa và cách dùng từ <span class="italic">đọc</span>.</span>
                </button>
            </div>

            <!-- Các nút hành động -->
            <div class="flex justify-center gap-4 mt-6">
                <button onclick="window.kiemTraBuoc65()" class="px-8 py-3 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-base shadow-md">KIỂM TRA ĐÁP ÁN ✓</button>
                <button onclick="window.lamLaiBuoc65()" class="px-8 py-3 bg-amber-500 text-white font-black rounded-xl hover:bg-amber-500 transition-all text-base shadow-md">LÀM LẠI ↺</button>
            </div>
            
            <div id="fb-vn65-bt1" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 BÀI TẬP 2: ĐỌC THÔNG TIN TỪ ĐIỂN -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-6">
            <div class="flex items-center gap-3 border-b border-emerald-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md">2</span>
                <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                    Đọc các thông tin về từ <span class="italic text-emerald-800">đọc</span> trong từ điển dưới đây và trả lời câu hỏi.
                </h3>
            </div>

            <div class="flex flex-col lg:flex-row gap-8 items-start">
                <!-- Bảng tương tác nhãn và khung từ điển -->
                <div class="w-full lg:w-1/2 space-y-6">
                    <p class="text-lg font-bold text-gray-800">💡 Di chuột hoặc nhấp vào các nhãn bên dưới để làm nổi bật thông tin trong từ điển:</p>
                    
                    <div class="flex flex-wrap gap-3">
                        <button onmouseover="window.highlightMucTu65('loaitu')" onmouseout="window.resetHighlightMucTu65()" onclick="window.highlightMucTu65('loaitu')" class="px-4 py-2 bg-sky-600 hover:bg-sky-600 text-sky-800 font-bold rounded-xl text-sm md:text-base border border-sky-100 shadow-sm transition-all">📘 Động từ (đgt.)</button>
                        <button onmouseover="window.highlightMucTu65('nghiagoc')" onmouseout="window.resetHighlightMucTu65()" onclick="window.highlightMucTu65('nghiagoc')" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-600 text-emerald-800 font-bold rounded-xl text-sm md:text-base border border-emerald-100 shadow-sm transition-all">🟢 Nghĩa thứ nhất (Nghĩa gốc)</button>
                        <button onmouseover="window.highlightMucTu65('vidu')" onmouseout="window.resetHighlightMucTu65()" onclick="window.highlightMucTu65('vidu')" class="px-4 py-2 bg-rose-600 hover:bg-rose-600 text-rose-800 font-bold rounded-xl text-sm md:text-base border border-rose-100 shadow-sm transition-all">🔴 Ví dụ cách dùng</button>
                    </div>

                    <!-- Khung mô phỏng từ điển -->
                    <div class="bg-amber-50/50 p-6 md:p-8 rounded-[32px] border border-amber-100/60 shadow-inner font-sans text-lg md:text-xl leading-relaxed text-gray-800">
                        <div class="border-b border-amber-100/50 pb-2 mb-3">
                            <span class="text-xs font-black text-amber-600 uppercase tracking-wider">Mục từ tra cứu</span>
                        </div>
                        <p class="font-sans text-xl md:text-2xl">
                            <strong id="tv-tu" class="text-2xl md:text-3xl text-emerald-900 font-black transition-all">đọc</strong> 
                            <span id="tv-loai" class="italic text-gray-800 font-bold transition-all px-1 rounded">(đgt.)</span> 
                            <span id="tv-nghiagoc" class="transition-all rounded"><strong>1.</strong> Phát thành lời những điều đã được viết ra theo đúng trình tự</span>: 
                            <span id="tv-vidu" class="text-rose-800 font-medium transition-all rounded">Đọc bài thơ. Đọc thuộc lòng.</span> 
                            <span class="text-gray-800"><strong>2.</strong> Tiếp nhận nội dung của một tập hợp kí hiệu bằng cách nhìn vào các kí hiệu: <em>Đọc bản thiết kế.</em></span> 
                            <span class="text-gray-800"><strong>3.</strong> Thu lấy thông tin từ một thiết bị lưu trữ của máy tính (như đĩa từ, đĩa CD, v.v.): <em>Đĩa bị lỗi nên không đọc được.</em></span> 
                            <span class="text-gray-800"><strong>4.</strong> Hiểu rõ điều gì bằng cách nhìn vào những biểu hiện bên ngoài: <em>Đọc được suy nghĩ của người khác.</em></span>
                        </p>
                        <div class="text-right text-sm text-gray-800 italic mt-4 border-t border-amber-100 pt-2">(Theo Thành Yến, Từ điển tiếng Việt dành cho học sinh)</div>
                    </div>
                </div>

                <!-- Các câu hỏi trả lời tự luận/trắc nghiệm nhanh -->
                <div class="w-full lg:w-1/2 space-y-4">
                    <!-- Câu a -->
                    <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-2">
                        <p class="font-bold text-gray-800 text-lg md:text-xl">a. Từ <span class="italic">đọc</span> là danh từ, động từ hay tính từ?</p>
                        <div class="flex gap-4">
                            <label class="flex items-center gap-2 font-bold cursor-pointer text-lg md:text-xl"><input type="radio" name="q2-a" value="danh-tu" class="w-5 h-5 text-emerald-800 focus:ring-emerald-600"> Danh từ</label>
                            <label class="flex items-center gap-2 font-bold cursor-pointer text-lg md:text-xl"><input type="radio" name="q2-a" value="dong-tu" class="w-5 h-5 text-emerald-800 focus:ring-emerald-600"> Động từ</label>
                            <label class="flex items-center gap-2 font-bold cursor-pointer text-lg md:text-xl"><input type="radio" name="q2-a" value="tinh-tu" class="w-5 h-5 text-emerald-800 focus:ring-emerald-600"> Tính từ</label>
                        </div>
                    </div>

                    <!-- Câu b -->
                    <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-2">
                        <p class="font-bold text-gray-800 text-lg md:text-xl">b. Nghĩa gốc của từ <span class="italic">đọc</span> là nghĩa số mấy?</p>
                        <div class="flex gap-4">
                            <label class="flex items-center gap-2 font-bold cursor-pointer text-lg md:text-xl"><input type="radio" name="q2-b" value="1" class="w-5 h-5 text-emerald-800 focus:ring-emerald-600"> Nghĩa 1</label>
                            <label class="flex items-center gap-2 font-bold cursor-pointer text-lg md:text-xl"><input type="radio" name="q2-b" value="2" class="w-5 h-5 text-emerald-800 focus:ring-emerald-600"> Nghĩa 2</label>
                            <label class="flex items-center gap-2 font-bold cursor-pointer text-lg md:text-xl"><input type="radio" name="q2-b" value="3" class="w-5 h-5 text-emerald-800 focus:ring-emerald-600"> Nghĩa 3</label>
                        </div>
                    </div>

                    <!-- Câu c -->
                    <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-2">
                        <p class="font-bold text-gray-800 text-lg md:text-xl">c. Từ <span class="italic">đọc</span> có mấy nghĩa chuyển?</p>
                        <div class="flex gap-4">
                            <label class="flex items-center gap-2 font-bold cursor-pointer text-lg md:text-xl"><input type="radio" name="q2-c" value="2" class="w-5 h-5 text-emerald-800 focus:ring-emerald-600"> 2 nghĩa</label>
                            <label class="flex items-center gap-2 font-bold cursor-pointer text-lg md:text-xl"><input type="radio" name="q2-c" value="3" class="w-5 h-5 text-emerald-800 focus:ring-emerald-600"> 3 nghĩa (nghĩa 2, 3, 4)</label>
                            <label class="flex items-center gap-2 font-bold cursor-pointer text-lg md:text-xl"><input type="radio" name="q2-c" value="4" class="w-5 h-5 text-emerald-800 focus:ring-emerald-600"> 4 nghĩa</label>
                        </div>
                    </div>

                    <!-- Câu d -->
                    <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-2">
                        <p class="font-bold text-gray-800 text-lg md:text-xl">d. Nghĩa gốc và nghĩa chuyển sắp xếp thế nào?</p>
                        <select id="q2-d" class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-white text-lg md:text-xl">
                            <option value="">-- Chọn cách sắp xếp --</option>
                            <option value="goc-truoc">Nghĩa gốc xếp trước, nghĩa chuyển xếp sau</option>
                            <option value="chuyen-truoc">Nghĩa chuyển xếp trước, nghĩa gốc xếp sau</option>
                            <option value="ngau-nhien">Sắp xếp ngẫu nhiên không theo thứ tự</option>
                        </select>
                    </div>

                    <div class="flex justify-center pt-2">
                        <button onclick="window.kiemTraCauHoi2_65()" class="px-8 py-3 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-base shadow-md">NỘP ĐÁP ÁN ✓</button>
                    </div>
                    <div id="fb-vn65-bt2" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- 📋 BÀI TẬP 3: TRA CỨU NGHĨA CỦA CÁC TỪ -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-6">
            <div class="flex items-center gap-3 border-b border-emerald-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md">3</span>
                <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                    Tra cứu nghĩa của các từ dưới đây:
                </h3>
            </div>

            <p class="text-lg md:text-xl text-gray-800 font-bold">👉 Hướng dẫn: Bấm vào từng từ khóa để mở sách từ điển tra cứu nghĩa gốc và nghĩa chuyển.</p>

            <div class="flex justify-center gap-4">
                <button onclick="window.traTu65('hoc-tap')" class="px-6 py-3 bg-amber-50 hover:bg-amber-500 text-amber-900 font-black rounded-2xl text-xl md:text-2xl border-2 border-amber-100 transition-all shadow-sm">học tập</button>
                <button onclick="window.traTu65('tap-trung')" class="px-6 py-3 bg-sky-50 hover:bg-sky-600 text-sky-900 font-black rounded-2xl text-xl md:text-2xl border-2 border-sky-100 transition-all shadow-sm">tập trung</button>
                <button onclick="window.traTu65('troi-chay')" class="px-6 py-3 bg-emerald-50 hover:bg-emerald-600 text-emerald-900 font-black rounded-2xl text-xl md:text-2xl border-2 border-emerald-100 transition-all shadow-sm">trôi chảy</button>
            </div>

            <!-- Khung từ điển mini kết quả tra cứu -->
            <div id="mini-dict-box" class="hidden p-6 md:p-8 rounded-[32px] border-2 border-dashed shadow-inner transition-all duration-365">
                <h4 id="mini-dict-title" class="text-2xl md:text-3xl font-black mb-3"></h4>
                <div id="mini-dict-content" class="text-lg md:text-xl leading-relaxed font-sans space-y-3"></div>
            </div>
        </div>
    </section>

    <!-- 📋 BÀI TẬP 4: ĐẶT CÂU VỚI NGHĨA CHUYỂN -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-6">
            <div class="flex items-center gap-3 border-b border-emerald-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md">4</span>
                <h3 class="text-2xl md:text-3xl font-black text-emerald-800">
                    Đặt câu với 1 nghĩa chuyển của mỗi từ ở bài tập 3.
                </h3>
            </div>

            <div class="space-y-6">
                <!-- Từ học tập -->
                <div class="bg-amber-50/30 p-6 rounded-3xl border border-amber-100 space-y-2">
                    <p class="font-bold text-gray-800 text-lg md:text-xl">1. Đặt câu với nghĩa chuyển của từ <span class="italic text-emerald-800 font-bold">học tập</span> (Nghĩa chuyển: Tiếp thu kinh nghiệm tốt từ người khác):</p>
                    <input type="text" id="ans-vn65-writing-hoctap" placeholder="Ví dụ: Lớp ta cần học tập phong cách tự học tự rèn luyện của bạn Nam." class="w-full p-4 text-lg md:text-xl rounded-xl border border-amber-100 outline-none focus:border-amber-500 font-medium">
                </div>

                <!-- Từ tập trung -->
                <div class="bg-sky-50/30 p-6 rounded-3xl border border-sky-100 space-y-2">
                    <p class="font-bold text-gray-800 text-lg md:text-xl">2. Đặt câu với nghĩa chuyển của từ <span class="italic text-emerald-800 font-bold">tập trung</span> (Nghĩa chuyển: Hướng toàn bộ ý nghĩ, suy nghĩ cao độ vào một việc):</p>
                    <input type="text" id="ans-vn65-writing-taptrung" placeholder="Ví dụ: Giờ toán hôm nay, cả lớp đều rất tập trung lắng nghe thầy giáo giảng bài." class="w-full p-4 text-lg md:text-xl rounded-xl border border-sky-100 outline-none focus:border-sky-500 font-medium">
                </div>

                <!-- Từ trôi chảy -->
                <div class="bg-emerald-50/30 p-6 rounded-3xl border border-emerald-100 space-y-2">
                    <p class="font-bold text-gray-800 text-lg md:text-xl">3. Đặt câu với nghĩa chuyển của từ <span class="italic text-emerald-800 font-bold">trôi chảy</span> (Nghĩa chuyển: (Lời nói, công việc) trôi lọt, thuận lợi, không vấp váp):</p>
                    <input type="text" id="ans-vn65-writing-troichay" placeholder="Ví dụ: Bạn Lan đã trình bày bài thuyết trình vô cùng trôi chảy và mạch lạc." class="w-full p-4 text-lg md:text-xl rounded-xl border border-emerald-100 outline-none focus:border-emerald-500 font-medium">
                </div>

                <div class="flex justify-center gap-3">
                    <button onclick="window.kiemTraTuLuan65()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                        <span>CHẤM BÀI TỰ LUẬN</span>
                    </button>
                    <div id="fb-vn65-writing" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="window.nopBai65Global()" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-emerald-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Trình tự đúng khi tra cứu nghĩa của một từ trong từ điển giấy là gì?",
            "options": [
                "Chọn từ điển -> Tìm mục chữ cái đầu -> Tìm từ -> Đọc nghĩa -> Đọc ví dụ",
                "Tìm từ -> Đọc nghĩa -> Chọn từ điển -> Tìm chữ cái đầu -> Đọc ví dụ",
                "Đọc nghĩa -> Tìm từ -> Chọn từ điển -> Tìm chữ cái đầu -> Đọc ví dụ",
                "Tìm chữ cái đầu -> Tìm từ -> Chọn từ điển -> Đọc ví dụ -> Đọc nghĩa"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Kí hiệu (đgt.) trong từ điển tiếng Việt viết tắt cho từ loại nào?",
            "options": [
                "Danh từ",
                "Động từ",
                "Tính từ",
                "Đại từ"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Kí hiệu (tt.) trong từ điển tiếng Việt viết tắt cho từ loại nào?",
            "options": [
                "Tính từ",
                "Trạng từ",
                "Thán từ",
                "Động từ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Kí hiệu (d.) trong từ điển tiếng Việt viết tắt cho từ loại nào?",
            "options": [
                "Động từ",
                "Danh từ",
                "Dự từ",
                "Đại từ"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Trong một mục từ của từ điển, nghĩa nào luôn được đặt ở số thứ tự số 1?",
            "options": [
                "Nghĩa chuyển của từ",
                "Nghĩa gốc của từ",
                "Nghĩa cổ của từ",
                "Nghĩa địa phương"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'đọc' trong câu 'đọc được suy nghĩ của người khác' được dùng với nghĩa nào?",
            "options": [
                "Nghĩa gốc: Phát thành lời những điều viết ra",
                "Nghĩa chuyển: Hiểu rõ điều gì bằng cách nhìn biểu hiện ngoài",
                "Nghĩa gốc: Tiếp nhận nội dung kí hiệu",
                "Nghĩa chuyển: Thu lấy thông tin từ thiết bị máy tính"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'học tập' trong câu 'Chúng ta cần học tập tấm gương của bạn' mang nghĩa gì?",
            "options": [
                "Nghĩa gốc: Học và luyện tập kĩ năng kiến thức",
                "Nghĩa chuyển: Tiếp thu kinh nghiệm tốt từ người khác",
                "Nghĩa gốc: Đọc sách giáo khoa",
                "Nghĩa chuyển: Học thuộc lòng bài thơ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'tập trung' trong câu 'Mọi người tập trung ở sân trường' mang nghĩa nào?",
            "options": [
                "Dồn sức lực, trí tuệ hoặc gom mọi người vào một nơi",
                "Hướng suy nghĩ cao độ vào một công việc",
                "Nước chảy liên tục không ngừng",
                "Học thuộc lòng bài văn"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'trôi chảy' trong câu 'Nước suối chảy rất trôi chảy' được dùng với nghĩa nào?",
            "options": [
                "Nghĩa gốc: Nước chảy liên tục liền mạch không bị tắc",
                "Nghĩa chuyển: Lời nói, công việc trôi lọt không vấp váp",
                "Nghĩa gốc: Mưa to ngập đường",
                "Nghĩa chuyển: Học sinh chạy rất nhanh"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'trôi chảy' trong câu 'Bạn ấy nói tiếng Anh rất trôi chảy' mang nghĩa chuyển nào?",
            "options": [
                "Nước chảy thông suốt không tắc",
                "Lời nói, giao tiếp trôi lọt thuận lợi, không vấp váp",
                "Mọi việc diễn ra rất nhanh",
                "Trôi tự do trên sông nước"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nghĩa chuyển của từ trong từ điển được sắp xếp ở vị trí nào?",
            "options": [
                "Đặt sau nghĩa gốc (các số 2, 3, 4,...)",
                "Đặt trước nghĩa gốc ở số 1",
                "Đặt xen kẽ trong phần ví dụ",
                "Không được đưa vào từ điển"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ nào sau đây đồng nghĩa với từ 'hoàn cầu' trong bức thư của Bác Hồ?",
            "options": [
                "Thế giới",
                "Quốc gia",
                "Tổ quốc",
                "Địa phương"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ nào dưới đây đồng nghĩa với từ 'cơ đồ'?",
            "options": [
                "Giang sơn, sự nghiệp lớn",
                "Bản đồ, lược đồ",
                "Công trình xây dựng",
                "Kế hoạch hoạt động"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tại sao trong từ điển lại cần ghi kèm các ví dụ sau mỗi định nghĩa nghĩa?",
            "options": [
                "Để giúp người tra cứu hiểu rõ hơn ý nghĩa và cách dùng từ thực tế",
                "Để trang từ điển dài và đẹp mắt hơn",
                "Để giới thiệu các tác phẩm văn học nổi tiếng",
                "Để dạy người đọc tập đặt câu"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong câu 'Máy tính đang đọc dữ liệu từ đĩa CD', từ 'đọc' mang nghĩa chuyển nào?",
            "options": [
                "Hiểu suy nghĩ của máy tính",
                "Thu lấy thông tin từ thiết bị lưu trữ dữ liệu",
                "Phát ra âm thanh bài hát",
                "Nhìn và tiếp nhận kí hiệu chữ viết"
            ],
            "answer": 1,
            "level": 2
        }
    ]
};

// --- BÀI TẬP 1: SẮP XẾP BƯỚC TRA CỨU ---
let thuTuBuoc65 = [];
window.chonBuoc65 = function(buoc) {
    const fb = document.getElementById('fb-vn65-bt1');
    if (fb) fb.classList.add('hidden');
    
    // Nếu bước này đã được chọn trước đó, loại bỏ nó khỏi mảng
    const index = thuTuBuoc65.indexOf(buoc);
    if (index > -1) {
        thuTuBuoc65.splice(index, 1);
        document.getElementById(`step-num-${buoc}`).innerText = '?';
        document.getElementById(`step-btn-${buoc}`).className = "p-5 text-left bg-emerald-50/50 hover:bg-emerald-100/70 border-2 border-emerald-100 rounded-2xl font-bold text-lg md:text-xl transition-all flex items-center gap-4";
        // Cập nhật lại số thứ tự của các bước còn lại
        thuTuBuoc65.forEach((b, i) => {
            document.getElementById(`step-num-${b}`).innerText = i + 1;
        });
        return;
    }

    // Nếu đã chọn đủ 5 bước thì không nhận thêm
    if (thuTuBuoc65.length >= 5) return;

    // Thêm bước mới
    thuTuBuoc65.push(buoc);
    document.getElementById(`step-num-${buoc}`).innerText = thuTuBuoc65.length;
    document.getElementById(`step-btn-${buoc}`).className = "p-5 text-left bg-emerald-100/10 hover:bg-emerald-100/20 border-2 border-emerald-100 rounded-2xl font-bold text-lg md:text-xl transition-all flex items-center gap-4 text-emerald-800";
};

window.kiemTraBuoc65 = function() {
    const fb = document.getElementById('fb-vn65-bt1');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (thuTuBuoc65.length < 5) {
        fb.innerHTML = "⚠️ Em hãy bấm chọn đủ cả 5 bước trước khi kiểm tra nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    // Thứ tự đúng: c -> b -> a -> e -> d
    // Mảng thuTuBuoc65 đúng: ['c', 'b', 'a', 'e', 'd']
    const dungDapAn = thuTuBuoc65[0] === 'c' && thuTuBuoc65[1] === 'b' && thuTuBuoc65[2] === 'a' && thuTuBuoc65[3] === 'e' && thuTuBuoc65[4] === 'd';

    if (dungDapAn) {
        fb.innerHTML = "🎉 Xuất sắc! Em đã sắp xếp đúng trình tự các bước tra cứu từ điển: 1. Chọn từ điển phù hợp -> 2. Tìm mục chữ cái đầu -> 3. Tìm từ -> 4. Đọc nghĩa -> 5. Đọc ví dụ.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "❌ Chưa chính xác rồi. Em hãy bấm nút 'LÀM LẠI' để sắp xếp lại trình tự nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

window.lamLaiBuoc65 = function() {
    thuTuBuoc65 = [];
    ['a', 'b', 'c', 'd', 'e'].forEach(b => {
        document.getElementById(`step-num-${b}`).innerText = '?';
        document.getElementById(`step-btn-${b}`).className = "p-5 text-left bg-emerald-50/50 hover:bg-emerald-100/70 border-2 border-emerald-100 rounded-2xl font-bold text-lg md:text-xl transition-all flex items-center gap-4";
    });
    const fb = document.getElementById('fb-vn65-bt1');
    if (fb) fb.classList.add('hidden');
};

// --- BÀI TẬP 2: ĐỌC THÔNG TIN TỪ ĐIỂN ---
window.highlightMucTu65 = function(type) {
    // Reset styles
    document.getElementById('tv-loai').className = "italic text-gray-800 font-bold transition-all px-1 rounded";
    document.getElementById('tv-nghiagoc').className = "transition-all rounded";
    document.getElementById('tv-vidu').className = "text-rose-800 font-medium transition-all rounded";

    // Highlight
    if (type === 'loaitu') {
        document.getElementById('tv-loai').className = "italic bg-sky-600 text-sky-900 font-black transition-all px-2 py-0.5 rounded shadow-sm scale-105 inline-block";
    } else if (type === 'nghiagoc') {
        document.getElementById('tv-nghiagoc').className = "bg-emerald-600 text-emerald-900 font-black transition-all px-2 py-0.5 rounded shadow-sm scale-[1.01] inline-block";
    } else if (type === 'vidu') {
        document.getElementById('tv-vidu').className = "bg-rose-600 text-rose-900 font-black transition-all px-2 py-0.5 rounded shadow-sm scale-[1.01] inline-block";
    }
};

window.resetHighlightMucTu65 = function() {
    document.getElementById('tv-loai').className = "italic text-gray-800 font-bold transition-all px-1 rounded";
    document.getElementById('tv-nghiagoc').className = "transition-all rounded";
    document.getElementById('tv-vidu').className = "text-rose-800 font-medium transition-all rounded";
};

window.kiemTraCauHoi2_65 = function() {
    const fb = document.getElementById('fb-vn65-bt2');
    if (!fb) return;
    fb.classList.remove('hidden');

    const qa = document.querySelector('input[name="q2-a"]:checked')?.value;
    const qb = document.querySelector('input[name="q2-b"]:checked')?.value;
    const qc = document.querySelector('input[name="q2-c"]:checked')?.value;
    const qd = document.getElementById('q2-d')?.value;

    if (!qa || !qb || !qc || !qd) {
        fb.innerHTML = "⚠️ Em hãy trả lời đầy đủ tất cả 4 câu hỏi (a, b, c, d) nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    const aDung = qa === 'dong-tu';
    const bDung = qb === '1';
    const cDung = qc === '3';
    const dDung = qd === 'goc-truoc';

    if (aDung && bDung && cDung && dDung) {
        fb.innerHTML = "🎉 Chính xác hoàn toàn! Từ 'đọc' là động từ, có nghĩa gốc ở số 1, có 3 nghĩa chuyển ở các số 2, 3, 4. Nghĩa gốc luôn được sắp xếp trước nghĩa chuyển.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "❌ Có câu trả lời chưa chính xác. Em hãy quan sát kĩ lại bảng thông tin từ điển của từ 'đọc' và chọn lại nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- BÀI TẬP 3: TRA CỨU NGHĨA TỪ TỪ ĐIỂN ---
window.traTu65 = function(tu) {
    const box = document.getElementById('mini-dict-box');
    const title = document.getElementById('mini-dict-title');
    const content = document.getElementById('mini-dict-content');
    if (!box || !title || !content) return;

    box.classList.remove('hidden');

    if (tu === 'hoc-tap') {
        box.className = "p-6 md:p-8 rounded-[32px] border-2 border-dashed border-amber-200 bg-amber-50/25 transition-all duration-365 shadow-inner";
        title.innerHTML = "học tập <span class='text-base text-gray-800 font-bold'>(động từ)</span>";
        title.className = "text-2xl md:text-3xl font-black text-amber-600 mb-3";
        content.innerHTML = `
            <p>🌟 <strong>Nghĩa 1 (Nghĩa gốc)</strong>: Học và luyện tập để có những hiểu biết, kĩ năng.</p>
            <p class="text-gray-800 italic pl-4">• Ví dụ: Học tập văn hóa, Học tập công nghệ mới.</p>
            <p>🔄 <strong>Nghĩa 2 (Nghĩa chuyển)</strong>: Tiếp thu và làm theo những kinh nghiệm tốt, những gương tốt của người khác.</p>
            <p class="text-gray-800 italic pl-4">• Ví dụ: Học tập phong cách làm việc gương mẫu.</p>
        `;
    } else if (tu === 'tap-trung') {
        box.className = "p-6 md:p-8 rounded-[32px] border-2 border-dashed border-sky-100 bg-sky-50/25 transition-all duration-365 shadow-inner";
        title.innerHTML = "tập trung <span class='text-base text-gray-800 font-bold'>(động từ)</span>";
        title.className = "text-2xl md:text-3xl font-black text-sky-800 mb-3";
        content.innerHTML = `
            <p>🌟 <strong>Nghĩa 1 (Nghĩa gốc)</strong>: Dồn sức lực, trí tuệ hoặc đưa mọi người, mọi vật cùng quy tụ vào một điểm, một nơi.</p>
            <p class="text-gray-800 italic pl-4">• Ví dụ: Tập trung toàn bộ lực lượng ở sân vận động.</p>
            <p>🔄 <strong>Nghĩa 2 (Nghĩa chuyển)</strong>: Hướng toàn bộ ý nghĩ, suy nghĩ ở mức độ cao vào một việc nhất định.</p>
            <p class="text-gray-800 italic pl-4">• Ví dụ: Tập trung tư tưởng nghe cô giáo giảng bài.</p>
        `;
    } else if (tu === 'troi-chay') {
        box.className = "p-6 md:p-8 rounded-[32px] border-2 border-dashed border-emerald-100 bg-emerald-50/25 transition-all duration-365 shadow-inner";
        title.innerHTML = "trôi chảy <span class='text-base text-gray-800 font-bold'>(tính từ)</span>";
        title.className = "text-2xl md:text-3xl font-black text-emerald-800 mb-3";
        content.innerHTML = `
            <p>🌟 <strong>Nghĩa 1 (Nghĩa gốc)</strong>: (Nước hoặc chất lỏng) chảy liền mạch, thông suốt không bị nghẽn tắc.</p>
            <p class="text-gray-800 italic pl-4">• Ví dụ: Dòng suối lưu thông trôi chảy xuôi về đồng bằng.</p>
            <p>🔄 <strong>Nghĩa 2 (Nghĩa chuyển)</strong>: (Lời nói, cách đọc hoặc công việc) diễn ra thông suốt, thuận lợi, không vấp váp, không bị ngừng trệ.</p>
            <p class="text-gray-800 italic pl-4">• Ví dụ: Phát biểu ý kiến trôi chảy, công việc tiến hành trôi chảy.</p>
        `;
    }
};

// --- BÀI TẬP 4: ĐẶT CÂU VỚI NGHĨA CHUYỂN ---
window.kiemTraTuLuan65 = function() {
    const hoctap = document.getElementById('ans-vn65-writing-hoctap')?.value.trim();
    const taptrung = document.getElementById('ans-vn65-writing-taptrung')?.value.trim();
    const troichay = document.getElementById('ans-vn65-writing-troichay')?.value.trim();
    const fb = document.getElementById('fb-vn65-writing');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!hoctap || !taptrung || !troichay) {
        fb.innerHTML = "⚠️ Em hãy điền đầy đủ cả 3 câu tự đặt cho các từ trước khi chấm điểm nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    if (hoctap.length < 10 || taptrung.length < 10 || troichay.length < 10) {
        fb.innerHTML = "⚠️ Mỗi câu tự đặt cần viết đầy đủ thành phần chủ ngữ - vị ngữ (tối thiểu 10 ký tự) để AI Thầy E chấm điểm chính xác.";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ THẦY E:</span>
            <p class="text-lg font-bold">"Các câu em đặt rất tốt! Các từ 'học tập', 'tập trung', 'trôi chảy' đều được dùng chuẩn xác theo nghĩa chuyển hướng vào hành động, suy nghĩ và ngôn ngữ giao tiếp của con người."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold text-xs rounded-full shadow-sm mt-2">Điểm: 10/10 (Đã hoàn thành tốt bài đặt câu)</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-365";
};

// --- KHỞI ĐỘNG ---
window.kiemTraKhoiDong65 = function() {
    const text = document.getElementById('ans-vn65-kd')?.value.trim();
    const fb = document.getElementById('fb-vn65-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy chia sẻ ý kiến của mình về công dụng của từ điển trước nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    fb.innerHTML = "🎉 Ý kiến của em rất chính xác! Từ điển là người bạn đồng hành tin cậy giúp chúng ta mở rộng vốn từ. Hãy cùng tìm hiểu các bài tập tra cứu bên dưới nhé.";
    fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.nopBai65Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 65',
            '📘',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">📘</span><p class="text-2xl md:text-3xl font-bold text-emerald-800">Chúc mừng em đã làm chủ kỹ năng sử dụng từ điển!</p><p class="text-lg text-gray-800 mt-3">Sử dụng từ điển thành thạo sẽ giúp em học tốt môn Tiếng Việt và các môn học khác dễ dàng hơn đấy.</p></div>'
        );
    }
};
