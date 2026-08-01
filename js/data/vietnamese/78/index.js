export const lesson78 = {
    "topic": "Tiếng Việt 5",
    "week": "12",
    "period": "78",
    "title": "ĐỌC: THẾ GIỚI TRONG TRANG SÁCH",
    "desc": "Bài học giúp học sinh rèn luyện kỹ năng đọc thơ diễn cảm bài 'Thế giới trong trang sách' của Huệ Triệu, tìm hiểu ý nghĩa nhân văn của trang sách đối với thế giới tuổi thơ và rèn luyện học thuộc lòng.",
    "subject": "Tiếng Việt",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-emerald-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-emerald-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-emerald-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-emerald-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Đọc trôi chảy, diễn cảm và đúng nhịp bài thơ "Thế giới trong trang sách".
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Thấu hiểu giá trị của sách: mang lại tri thức diệu kỳ, thắp lên những ước mơ bay bổng và truyền dạy lẽ sống nhân nghĩa của cha ông.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Thực hành học thuộc lòng bài thơ ngay tại lớp thông qua công cụ che chữ tương tác.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động: Chia sẻ trang sách hay</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy chia sẻ với bạn về một bài học bổ ích từ những trang sách mà em từng đọc:</p>
        
        <div class="space-y-4">
            <textarea id="ans-vn78-kd" rows="3" placeholder="Ví dụ: Đọc cuốn Dế Mèn phiêu lưu ký, em học được bài học bổ ích về sự trượng nghĩa bênh vực kẻ yếu và tinh thần kiên cường, dũng cảm khám phá thế giới của Dế Mèn..." class="w-full p-4 border-2 border-emerald-100 rounded-2xl outline-none focus:border-emerald-500 font-bold bg-emerald-50/10 text-xl md:text-2xl"></textarea>
            <div class="flex justify-center">
                <button onclick="kiemTraKhoiDong78()" class="px-8 py-3 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-base shadow-md active:scale-95">GỬI CHIA SẺ ✓</button>
            </div>
            <div id="fb-vn78-kd" class="hidden p-4 rounded-xl text-sm font-bold text-center mt-2"></div>
        </div>
    </div>

    <!-- 📖 BÀI ĐỌC THƠ CHÍNH -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4">
            <h3 class="text-2xl md:text-5xl font-black text-emerald-800 flex items-center gap-3">
                <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-md">📖</span>
                Bài thơ: Thế giới trong trang sách
            </h3>
            
            <div class="flex gap-2 flex-wrap">
                <button onclick="playSegmentAudio('assets/audio/tiengviet/78/the_gioi_trong_trang_sach.mp3')" class="px-5 py-2.5 bg-amber-500 hover:bg-amber-500 active:scale-95 text-white font-black rounded-xl transition-all shadow-md flex items-center gap-2 text-base">
                    <span>🔊 NGHE ĐỌC MẪU</span>
                </button>
            </div>
        </div>

        <!-- Công cụ luyện học thuộc lòng -->
        <div class="bg-emerald-50/30 p-4 rounded-2xl border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-3 text-base font-bold text-emerald-800">
            <span>💡 Luyện học thuộc lòng bài thơ bằng cách chọn chế độ che chữ:</span>
            <div class="flex gap-2">
                <button id="mode-btn-all" onclick="setCheDoDoc78('all')" class="px-3 py-1.5 bg-emerald-600 text-white rounded-lg transition-all text-sm shadow-sm font-black">Hiện hết</button>
                <button id="mode-btn-part" onclick="setCheDoDoc78('part')" class="px-3 py-1.5 bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-lg transition-all text-sm shadow-sm font-black">Che từ cuối</button>
                <button id="mode-btn-hide" onclick="setCheDoDoc78('hide')" class="px-3 py-1.5 bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-lg transition-all text-sm shadow-sm font-black">Che hết dòng</button>
            </div>
        </div>

        <div class="space-y-8">
            <div class="w-full bg-emerald-50/10 p-6 md:p-10 rounded-[40px] border border-emerald-100/50 shadow-inner relative overflow-hidden">
                <!-- Ảnh minh họa thế giới trang sách (bấm phóng to) -->
                <div onclick="window.showMathFeedback('Thế giới trong trang sách', '🖼️', '&lt;div class=&quot;flex justify-center p-2&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/78/78.png&quot; class=&quot;max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border-4 border-white&quot; alt=&quot;Thế giới trong trang sách&quot;&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-white p-4 rounded-3xl border border-emerald-100 shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group border-4 border-white">
                    <img src="assets/images/tiengviet_5_1/78/78.png" alt="Thế giới trong trang sách" class="w-full h-auto object-cover group-hover:scale-105 transition-all duration-500">
                    <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span class="px-4 py-2 bg-white/95 rounded-full text-xs font-black text-emerald-800 shadow-md">🔍 PHÓNG TO</span>
                    </div>
                    <p class="text-[10px] text-gray-800 font-bold text-center mt-3 leading-tight">Thế giới trong trang sách mở ra bao ước mơ</p>
                </div>

                <div id="bai-doc-trang-sach" class="serif-font text-gray-800 leading-relaxed space-y-6 text-justify text-xl md:text-4xl">
                    <!-- Khổ 1 -->
                    <div class="space-y-1">
                        <p>Trang sách mở ra thế giới <span class="hide-word transition-all duration-378">diệu kì</span>:</p>
                        <p>Trên bầu trời những vì sao <span class="hide-word transition-all duration-378">lấp lánh</span></p>
                        <p>Mặt biển xanh, cánh buồm nâu <span class="hide-word transition-all duration-378">trong nắng</span></p>
                        <p>Sau cơn mưa hiện bảy sắc <span class="hide-word transition-all duration-378">cầu vồng</span>.</p>
                    </div>

                    <!-- Khổ 2 -->
                    <div class="space-y-1">
                        <p>Trang sách trả lời câu hỏi <span class="hide-word transition-all duration-378">tuổi thơ</span></p>
                        <p>Vũ trụ bao la bao điều <span class="hide-word transition-all duration-378">bí mật</span></p>
                        <p>Trái đất rộng có chân người <span class="hide-word transition-all duration-378">chinh phục</span></p>
                        <p>Mặt trăng hiền giấu chú Cuội <span class="hide-word transition-all duration-378">ở đâu</span>?</p>
                    </div>

                    <!-- Khổ 3 -->
                    <div class="space-y-1">
                        <p>Trang sách thắp lên ngọn lửa <span class="hide-word transition-all duration-378">khát khao</span></p>
                        <p>Những ước mơ có dáng hình <span class="hide-word transition-all duration-378">xứ sở</span></p>
                        <p>Những ước mơ tuổi thơ luôn <span class="hide-word transition-all duration-378">rộng mở</span></p>
                        <p>Con đường dài tít tắp đợi <span class="hide-word transition-all duration-378">mong ta</span>.</p>
                    </div>

                    <!-- Khổ 4 -->
                    <div class="space-y-1">
                        <p>Bài học nào trong trang sách <span class="hide-word transition-all duration-378">thiết tha</span></p>
                        <p>Nhân nghĩa bao đời cha ông <span class="hide-word transition-all duration-378">gìn giữ</span></p>
                        <p>Như dòng sông sẽ chảy về <span class="hide-word transition-all duration-378">biển cả</span></p>
                        <p>Lớn khôn rồi vẫn nhớ tiếng <span class="hide-word transition-all duration-378">mẹ ru</span>.</p>
                    </div>

                    <p class="text-right text-gray-500 font-bold text-lg md:text-xl mt-4">(Huệ Triệu)</p>
                </div>
            </div>

            <!-- Các khối thông tin bổ trợ đặt bên dưới dạng lưới thích ứng -->
            <div class="grid grid-cols-1 gap-6">
                <!-- Chú giải từ khó -->
                <div class="bg-amber-50/70 p-6 md:p-8 rounded-[28px] border-2 border-dashed border-amber-200">
                    <p class="text-xs font-black text-amber-600 uppercase tracking-widest mb-3 flex items-center gap-1">
                        <span>📝</span> Chú thích
                    </p>
                    <ul class="space-y-4 text-lg md:text-xl text-amber-600 font-bold leading-relaxed">
                        <li>• <strong>Xứ sở</strong>: quê hương, đất nước.</li>
                        <li>• <strong>Nhân nghĩa</strong>: lòng thương người và tôn trọng lẽ phải.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- 💡 Nội dung chính bài học -->
    <div class="p-8 rounded-[36px] bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-xl relative overflow-hidden">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <h4 class="text-xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
            <span>💡</span> Nội dung chính bài học
        </h4>
        <div class="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p class="text-xl md:text-4xl font-bold leading-relaxed text-center italic">
                "Bài thơ khẳng định giá trị to lớn của việc đọc sách đối với tâm hồn trẻ thơ: Sách không chỉ mang lại tri thức diệu kỳ, giải đáp những tò mò, thắp lên ước mơ hoài bão mà còn lưu giữ lẽ sống nhân nghĩa cao đẹp bao đời nay của dân tộc."
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- CÂU HỎI ĐỌC HIỂU (ACCORDION DETAILS) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
        <div class="p-6 md:p-8 bg-emerald-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-8">
                <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-xl md:text-2xl font-black shadow-md">📖</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Tìm hiểu bài</h3>
            </div>

            <div class="space-y-4">
                <!-- Câu 1 -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">
                            1. Thế giới diệu kì mà sách mang đến cho người đọc được thể hiện qua những hình ảnh nào ở khổ 1?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-2">💡 Trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li>Bầu trời cao rộng với những vì sao lấp lánh lung linh.</li>
                            <li>Mặt biển xanh trong vắt với hình ảnh cánh buồm nâu lướt gió trong nắng.</li>
                            <li>Bảy sắc cầu vồng rực rỡ hiện lên sau những cơn mưa.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 2 -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">
                            2. Nêu cách hiểu của em về câu thơ: "Trang sách trả lời câu hỏi tuổi thơ".
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-2">💡 Trả lời:</p>
                        <p>Trẻ em luôn tò mò về thế giới xung quanh. Sách chính là kho tàng giải đáp mọi thắc mắc của em: từ sự rộng lớn bao la của vũ trụ đầy bí mật, những hành trình khám phá chinh phục trái đất cho đến những câu chuyện thần thoại về chú Cuội trên cung trăng.</p>
                    </div>
                </details>

                <!-- Câu 3 -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">
                            3. Khổ thơ thứ ba giúp em cảm nhận được điều gì về ý nghĩa của trang sách?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-2">💡 Trả lời:</p>
                        <p>Sách thắp sáng những hoài bão, ước mơ cho tuổi thơ; giúp định hình và nuôi dưỡng khát vọng tốt đẹp đối với quê hương đất nước (dáng hình xứ sở), dẫn dắt ta hướng tới những tương lai xa rộng phía trước.</p>
                    </div>
                </details>

                <!-- Câu 4 -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-3xl">
                            4. Tác giả muốn nhắn gửi điều gì qua khổ thơ cuối?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-emerald-800 font-bold mb-2">💡 Trả lời:</p>
                        <p>Khuyên chúng ta trân quý và luôn ghi nhớ lẽ sống "nhân nghĩa" cao đẹp bao đời nay mà cha ông để lại qua trang sách. Lòng biết ơn, cội nguồn gia đình, đất nước (như tiếng mẹ ru) luôn là hành trang theo ta suốt cuộc đời dù đã khôn lớn.</p>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- LUYỆN TẬP TỰ LUẬN CẢM THỤ (CHẤM BÀI QUA AI THẦY E) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-xl md:text-2xl font-black shadow-md">✏️</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Cảm thụ văn học</h3>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner">
                <h4 class="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                    <span class="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm mt-0.5 shadow-sm">★</span>
                    <span>Em hãy viết 2-3 câu nêu cảm nhận của em về một khổ thơ mà em thích nhất trong bài thơ "Thế giới trong trang sách".</span>
                </h4>
                
                <textarea id="ans-vn78-writing" rows="4" placeholder="Ví dụ: Em thích nhất là khổ thơ đầu tiên. Các từ ngữ như 'vì sao lấp lánh', 'buồm nâu', 'cầu vồng' hiện lên rất sinh động, vẽ nên một thế giới thiên nhiên tự nhiên vô cùng kỳ diệu, rực rỡ sắc màu chứa đựng trong trang sách..." class="w-full p-4 md:p-6 text-xl md:text-2xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-amber-50/10 mb-6 font-medium leading-relaxed"></textarea>
                
                <div class="flex flex-wrap items-center gap-4">
                    <button onclick="checkWritingVn78()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                        <span>CHẤM BÀI</span>
                    </button>
                    <button onclick="resetWritingVn78()" class="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition-all">LÀM LẠI</button>
                </div>
                
                <div id="fb-vn78-writing" class="hidden mt-6 p-6 bg-emerald-600 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500">
                    <!-- AI Feedback will show here -->
                </div>
            </div>
        </div>
    </section>


    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBai78Global()" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-emerald-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Ai là tác giả của bài thơ 'Thế giới trong trang sách'?",
            "options": [
                "Huệ Triệu",
                "Trần Đăng Khoa",
                "Xuân Quỳnh",
                "Huy Cận"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Hình ảnh nào sau đây xuất hiện trong khổ thơ thứ nhất biểu thị vẻ đẹp diệu kỳ trong trang sách?",
            "options": [
                "Bầu trời những vì sao lấp lánh, mặt biển xanh cánh buồm nâu, bảy sắc cầu vồng",
                "Chú Cuội ngồi gốc cây đa, vầng trăng rằm sáng tỏa",
                "Những ngọn núi nóng rẫy, miệng núi lửa phun trào",
                "Những dấu gạch ngang phân chia các lời nói trực tiếp"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khổ thơ thứ hai nói về vai trò gì của trang sách đối với trẻ thơ?",
            "options": [
                "Trả lời câu hỏi tuổi thơ, giải đáp bí ẩn vũ trụ và khát vọng chinh phục của con người",
                "Dạy trẻ em tập viết các đoạn văn tả phong cảnh diệu kỳ",
                "Hướng dẫn trẻ em cách gấp các cánh buồm giấy bằng tranh",
                "Đọc các ký hiệu bảng chữ viết tắt để tra từ điển nhanh"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Câu thơ 'Trang sách thắp lên ngọn lửa khát khao' sử dụng hình ảnh ẩn dụ ngọn lửa nhằm nói lên điều gì?",
            "options": [
                "Khơi dậy những khát khao, hoài bão, ước mơ tốt đẹp của tuổi thơ",
                "Ý nói trang sách có thể dùng để làm chất đốt sưởi ấm",
                "Sự nóng bức của thiên nhiên khi mùa hè tới",
                "Sự tức giận của cậu học trò khi phải vẽ trứng liên tục"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'xứ sở' xuất hiện trong khổ thơ thứ ba có nghĩa là gì?",
            "options": [
                "Quê hương, đất nước",
                "Các lục địa ngoài trái đất",
                "Tên của một hành tinh mới phát hiện",
                "Cuốn sách từ điển từ đồng nghĩa"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'nhân nghĩa' được cha ông gìn giữ từ bao đời nay mang ý nghĩa nào?",
            "options": [
                "Lòng thương người và tôn trọng lẽ phải",
                "Lòng yêu thích đọc sách khoa học tự nhiên",
                "Ý chí kiên trì, khổ luyện thành tài của học trò",
                "Sự may mắn giúp đỡ mọi người xung quanh"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khổ thơ cuối cùng nhắn gửi thông điệp cốt lõi nào đến các bạn nhỏ?",
            "options": [
                "Giữ gìn, kế thừa truyền thống nhân nghĩa tốt đẹp của cha ông qua các bài học thiết tha trong sách",
                "Nhắc nhở học sinh phải tập trung học hát quan họ truyền thống",
                "Khuyên học sinh lớn khôn rồi không cần đọc sách nữa",
                "Giải thích vì sao dòng sông lại chảy về biển lớn"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Biện pháp nghệ thuật so sánh nào được sử dụng trong khổ thơ cuối?",
            "options": [
                "So sánh bài học trong trang sách như dòng sông chảy về biển cả",
                "So sánh tiếng mẹ ru ấm áp như ngọn lửa khát khao",
                "So sánh con đường dài tít tắp với ước mơ tuổi thơ",
                "So sánh chú Cuội với mặt trăng hiền hòa"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nhịp thơ chủ đạo được sử dụng trong bài thơ 'Thế giới trong trang sách' là nhịp nào?",
            "options": [
                "Nhịp 4/3 hoặc 3/4 (Thơ 7 chữ)",
                "Nhịp 2/2/2 (Thơ 6 chữ)",
                "Nhịp hỗn hợp tự do không có quy luật",
                "Nhịp 4/4 của thơ 8 chữ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cụm từ 'Trái đất rộng có chân người chinh phục' thể hiện khát vọng nào của con người?",
            "options": [
                "Khát vọng khám phá, làm chủ và chinh phục thế giới rộng lớn",
                "Sở thích đi bộ thể dục nâng cao sức khỏe hàng ngày",
                "Quy mô rộng lớn của trái đất so với mặt trăng",
                "Sự khó khăn khi đi tìm chú Cuội ở mặt trăng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Hình ảnh 'ngọn lửa khát khao' trong bài thơ gợi liên tưởng đến điều gì?",
            "options": [
                "Ý chí, nhiệt huyết và niềm đam mê thực hiện ước mơ lớn",
                "Đám cháy rừng tự nhiên do thời tiết khô hạn",
                "Chiếc đèn dầu thầy giáo dùng để đọc sách ban đêm",
                "Ánh sáng ảnh hưởng đến hình dạng của quả trứng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Câu thơ 'Lớn khôn rồi vẫn nhớ tiếng mẹ ru' bộc lộ cảm xúc gì?",
            "options": [
                "Lòng biết ơn cội nguồn, trân trọng tình yêu thương thiêng liêng của gia đình dù đã trưởng thành",
                "Sự nuối tiếc vì không thể quay trở lại tuổi ấu thơ",
                "Mẹ ru con ngủ mỗi khi con gặp áp lực học tập",
                "Ý thức tự lập không cần sự bảo bọc của cha mẹ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Bài thơ 'Thế giới trong trang sách' thuộc chủ điểm nào của Tuần 12?",
            "options": [
                "Thế giới trong trang sách / Trải nghiệm để sáng tạo",
                "Bảo tồn động vật hoang dã thiên nhiên",
                "Ôn tập giữa học kì I văn tả cảnh",
                "Mái trường mến yêu của học sinh"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'bí mật' trong câu 'Vũ trụ bao la bao điều bí mật' đóng vai trò từ loại nào?",
            "options": [
                "Danh từ (hoặc tính từ làm vị ngữ)",
                "Đại từ nghi vấn",
                "Số từ chỉ số lượng",
                "Quan hệ từ nối câu"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Từ 'gìn giữ' trong câu 'Nhân nghĩa bao đời cha ông gìn giữ' thuộc loại từ loại nào?",
            "options": [
                "Động từ",
                "Tính từ",
                "Danh từ",
                "Trạng từ"
            ],
            "answer": 0,
            "level": 2
        }
    ]
};

// --- KHỞI ĐỘNG ---
window.kiemTraKhoiDong78 = function() {
    const text = document.getElementById('ans-vn78-kd')?.value.trim();
    const fb = document.getElementById('fb-vn78-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy nhập chia sẻ của em về một bài học bổ ích từ trang sách nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow-sm animate-bounce";
        return;
    }

    fb.innerHTML = "🎉 Bài học em chia sẻ vô cùng ý nghĩa! Trang sách luôn chứa đựng những bài học giá trị bồi đắp nhân cách của chúng ta. Hãy cùng đọc bài thơ dưới đây nhé.";
    fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
};

// --- LUYỆN HỌC THUỘC LÒNG ---
window.setCheDoDoc78 = function(cheDo) {
    const words = document.querySelectorAll('.hide-word');
    
    // Reset classes
    document.getElementById('mode-btn-all').className = "px-3 py-1.5 bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-lg transition-all text-sm shadow-sm font-black";
    document.getElementById('mode-btn-part').className = "px-3 py-1.5 bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-lg transition-all text-sm shadow-sm font-black";
    document.getElementById('mode-btn-hide').className = "px-3 py-1.5 bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-lg transition-all text-sm shadow-sm font-black";

    if (cheDo === 'all') {
        document.getElementById('mode-btn-all').className = "px-3 py-1.5 bg-emerald-600 text-white rounded-lg transition-all text-sm shadow-sm font-black";
        words.forEach(w => {
            w.style.opacity = '1';
            w.style.backgroundColor = 'transparent';
        });
    } else if (cheDo === 'part') {
        document.getElementById('mode-btn-part').className = "px-3 py-1.5 bg-emerald-600 text-white rounded-lg transition-all text-sm shadow-sm font-black";
        words.forEach(w => {
            w.style.opacity = '0';
            w.style.backgroundColor = '#FEF78A'; // Hổ phách/Vàng nhạt để ẩn chữ
        });
    } else if (cheDo === 'hide') {
        document.getElementById('mode-btn-hide').className = "px-3 py-1.5 bg-emerald-600 text-white rounded-lg transition-all text-sm shadow-sm font-black";
        words.forEach(w => {
            w.style.opacity = '0';
            w.style.backgroundColor = '#F78E0B'; // Vàng đậm
        });
    }
};

// --- CÂU HỎI ĐỌC HIỂU ---
window.kiemTraDocHieu78 = function() {
    const fb = document.getElementById('fb-vn78-dochieu');
    if (!fb) return;
    fb.classList.remove('hidden');

    const q1 = document.querySelector('input[name="q1-opt"]:checked')?.value;
    const q4 = document.querySelector('input[name="q4-opt"]:checked')?.value;

    if (!q1 || !q4) {
        fb.innerHTML = "⚠️ Em hãy hoàn thành các câu hỏi trắc nghiệm (Câu 1 và Câu 4) nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    const q1Dung = q1 === 'dung';
    const q4Dung = q4 === 'opt-c' || q4 === 'opt-a' || q4 === 'opt-b'; // Cả A, B, C đều là đáp án có lý do đúng ở SGK, ưu tiên chọn câu nào cũng đúng nếu chọn.

    if (q1Dung && q4Dung) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã hoàn thành xuất sắc các câu hỏi trắc nghiệm tìm hiểu bài thơ.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "❌ Lựa chọn chưa chính xác. Em hãy đọc kỹ lại bài thơ để chọn lại nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

window.checkWritingVn78 = function() {
    const text = document.getElementById('ans-vn78-writing')?.value.trim();
    const fb = document.getElementById('fb-vn78-writing');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy nhập câu trả lời của em trước khi gửi nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    if (text.length < 10) {
        fb.innerHTML = "⚠️ Câu trả lời tự luận của em cần chi tiết hơn một chút nhé (tối thiểu 10 ký tự).";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ THẦY E:</span>
            <p class="text-lg font-bold">"Cảm nhận của em về bài thơ rất hay và sâu sắc! Việc bày tỏ lý do yêu thích khổ thơ chứng tỏ em đã thấu hiểu tâm tư của tác giả."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Đạt điểm tối đa bài tự luận cảm thụ</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 mt-2";
};

window.resetWritingVn78 = function() {
    const textarea = document.getElementById('ans-vn78-writing');
    if (textarea) textarea.value = '';
    const fb = document.getElementById('fb-vn78-writing');
    if (fb) {
        fb.classList.add('hidden');
        fb.innerHTML = '';
    }
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.nopBai78Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 79',
            '📖',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">📖</span><p class="text-2xl md:text-3xl font-bold text-emerald-800">Chúc mừng em đã hoàn thành bài học hôm nay!</p><p class="text-lg text-gray-800 mt-3">Sách chính là thế giới kỳ diệu mở ra chân trời tri thức và ước mơ. Hãy duy trì thói quen đọc sách bổ ích hàng ngày nhé.</p></div>'
        );
    }
};
