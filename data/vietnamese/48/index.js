export const lesson48 = {
    "topic": "Tiếng Việt 5",
    "week": "7",
    "period": "48",
    "title": "VIẾT: VIẾT ĐOẠN VĂN TẢ PHONG CẢNH",
    "desc": "Bài học giúp học sinh phân tích cấu trúc, câu chủ đề và các biện pháp tu từ trong đoạn văn mẫu; từ đó thực hành tự viết một đoạn văn tả cảnh ao hồ, sông suối hoặc biển đảo sinh động.",
    "subject": "Viết",
    "theme": "Măng non",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-amber-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-amber-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-amber-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-amber-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-amber-500 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-amber-600 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-amber-900 font-black">•</span>
                Nhận biết được câu chủ đề, trình tự miêu tả và các giác quan được sử dụng trong đoạn văn tả cảnh mẫu.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-amber-900 font-black">•</span>
                Hiểu được tác dụng của biện pháp so sánh và nhân hóa trong việc làm nổi bật vẻ đẹp sinh động của phong cảnh.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-amber-900 font-black">•</span>
                Tự viết được một đoạn văn tả cảnh ao hồ, sông suối hoặc biển đảo rõ ràng, giàu hình ảnh gợi cảm và có câu chủ đề mạch lạc.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-amber-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Giác quan tinh nhạy</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy nối các chi tiết miêu tả dưới đây với giác quan tương ứng được sử dụng:</p>
        
        <div class="space-y-4 font-bold text-amber-600 text-lg md:text-xl">
            <!-- Câu 1 -->
            <div class="flex flex-wrap items-center justify-between gap-3 p-4 bg-amber-50/30 rounded-2xl border border-amber-100">
                <span class="text-gray-800">1. "những cây trúc vàng óng, vút cao" cảm nhận bằng:</span>
                <div class="flex gap-2">
                    <button onclick="checkKdVn48(1, this, 'TG')" class="px-4 py-2 bg-white hover:bg-amber-500 border-2 border-gray-100 rounded-xl transition-all active:scale-95 text-base">Thị giác (mắt)</button>
                    <button onclick="checkKdVn48(1, this, 'ThG')" class="px-4 py-2 bg-white hover:bg-amber-500 border-2 border-gray-100 rounded-xl transition-all active:scale-95 text-base">Thính giác (tai)</button>
                    <button onclick="checkKdVn48(1, this, 'KG')" class="px-4 py-2 bg-white hover:bg-amber-500 border-2 border-gray-100 rounded-xl transition-all active:scale-95 text-base">Khứu giác (mũi)</button>
                </div>
            </div>

            <!-- Câu 2 -->
            <div class="flex flex-wrap items-center justify-between gap-3 p-4 bg-amber-50/30 rounded-2xl border border-amber-100">
                <span class="text-gray-800">2. "gần như không có một tiếng động nào" cảm nhận bằng:</span>
                <div class="flex gap-2">
                    <button onclick="checkKdVn48(2, this, 'TG')" class="px-4 py-2 bg-white hover:bg-amber-500 border-2 border-gray-100 rounded-xl transition-all active:scale-95 text-base">Thị giác</button>
                    <button onclick="checkKdVn48(2, this, 'ThG')" class="px-4 py-2 bg-white hover:bg-amber-500 border-2 border-gray-100 rounded-xl transition-all active:scale-95 text-base">Thính giác</button>
                    <button onclick="checkKdVn48(2, this, 'KG')" class="px-4 py-2 bg-white hover:bg-amber-500 border-2 border-gray-100 rounded-xl transition-all active:scale-95 text-base">Khứu giác</button>
                </div>
            </div>

            <!-- Câu 3 -->
            <div class="flex flex-wrap items-center justify-between gap-3 p-4 bg-amber-50/30 rounded-2xl border border-amber-100">
                <span class="text-gray-800">3. "vẫn thoảng một mùi thơm nhẹ nhõm, xa ngái" cảm nhận bằng:</span>
                <div class="flex gap-2">
                    <button onclick="checkKdVn48(3, this, 'TG')" class="px-4 py-2 bg-white hover:bg-amber-500 border-2 border-gray-100 rounded-xl transition-all active:scale-95 text-base">Thị giác</button>
                    <button onclick="checkKdVn48(3, this, 'ThG')" class="px-4 py-2 bg-white hover:bg-amber-500 border-2 border-gray-100 rounded-xl transition-all active:scale-95 text-base">Thính giác</button>
                    <button onclick="checkKdVn48(3, this, 'KG')" class="px-4 py-2 bg-white hover:bg-amber-500 border-2 border-gray-100 rounded-xl transition-all active:scale-95 text-base">Khứu giác</button>
                </div>
            </div>
        </div>
        <div id="fb-vn48-kd" class="hidden p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 transition-all"></div>
    </div>

    <!-- 📖 PHÂN TÍCH ĐOẠN VĂN MẪU (BÀI 1) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-amber-100 shadow-xl space-y-8">
        <div class="flex items-center justify-between border-b border-amber-100 pb-4">
            <span class="text-amber-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                <span>📖</span> 1. Đọc các đoạn văn dưới đây và trả lời câu hỏi
            </span>
        </div>

        <!-- Đoạn văn a -->
        <div class="p-6 bg-amber-50/20 rounded-3xl border border-amber-100 space-y-4">
            <div class="flex items-center gap-3">
                <span class="px-3 py-1 bg-amber-500 text-white rounded-xl font-black text-sm">Đoạn văn a</span>
                <h4 class="font-black text-amber-600 text-lg md:text-xl">Suối nhỏ trong rừng trúc</h4>
            </div>
            <p class="text-gray-800 text-lg md:text-xl leading-relaxed italic font-serif bg-white p-4 rounded-2xl border border-amber-100">
                "Trong rừng trúc có một con suối nhỏ, nước rất trong. Suối chảy lững lờ, làm những sợi rêu xanh bám vào những tảng đá xám hai bên bờ nhảy múa nhịp nhàng. Ở giữa dòng, một bầy cá nhỏ chỉ bằng ngón tay út ve vẩy vây và đuôi, miệng khẽ há ra, lặng lẽ bơi đứng. Gần như không có một tiếng động nào báo hiệu sự có mặt của con suối ở quãng rừng có lẽ là đầu nguồn này. Bên kia suối, đã thấy những chiếc măng trúc non bị nhím ăn dở, chân chúng in lỗ chỗ như vết chân chuột. Những cây trúc vàng óng, vút cao, đã bắt đầu trổ hoa. Hoa trúc cứng và vàng, không có hương vị gì, vậy mà đâu đó, vẫn thoảng một mùi thơm nhẹ nhõm, xa ngái,..."
                <span class="block text-right text-xs font-semibold text-gray-800 mt-2">(Theo Trần Nhuận Minh)</span>
            </p>
            
            <!-- Câu hỏi tương tác đoạn a -->
            <div class="space-y-3 pt-2">
                <!-- Hỏi 1 -->
                <details class="group bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden transition-all">
                    <summary class="w-full p-4 text-left flex justify-between items-center cursor-pointer list-none hover:bg-amber-50/50">
                        <span class="font-black text-gray-800 group-hover:text-amber-700 text-base md:text-lg">❓ Đoạn văn tả phong cảnh gì?</span>
                        <div class="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-6 pb-4 border-t border-amber-50 pt-3 text-sm md:text-base font-bold text-gray-800">
                        👉 Đoạn văn miêu tả cảnh **một con suối nhỏ trong vắt chảy lững lờ giữa khu rừng trúc** yên bình, hoang sơ và thơ mộng ở đầu nguồn.
                    </div>
                </details>

                <!-- Hỏi 2 -->
                <details class="group bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden transition-all">
                    <summary class="w-full p-4 text-left flex justify-between items-center cursor-pointer list-none hover:bg-amber-50/50">
                        <span class="font-black text-gray-800 group-hover:text-amber-700 text-base md:text-lg">❓ Tác giả quan sát, cảm nhận bằng những giác quan nào?</span>
                        <div class="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-6 pb-4 border-t border-amber-50 pt-3 text-sm md:text-base font-bold text-gray-800 space-y-2">
                        <p>👉 Tác giả đã sử dụng đa dạng các giác quan để miêu tả:</p>
                        <p>🔹 **Thị giác (mắt nhìn):** Thấy nước trong suối, rêu xanh nhảy múa trên tảng đá xám, bầy cá nhỏ bơi đứng, măng non lỗ chỗ, cây trúc vàng óng vút cao và hoa trúc.</p>
                        <p>🔹 **Thính giác (tai nghe):** Cảm nhận sự yên tĩnh đến độ <em>"gần như không có một tiếng động nào"</em> để báo hiệu sự có mặt của suối.</p>
                        <p>🔹 **Khứu giác (mũi ngửi):** Thoảng thấy <em>"mùi thơm nhẹ nhõm, xa ngái"</em> của hoa trúc cứng và vàng.</p>
                    </div>
                </details>

                <!-- Hỏi 3 -->
                <details class="group bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden transition-all">
                    <summary class="w-full p-4 text-left flex justify-between items-center cursor-pointer list-none hover:bg-amber-50/50">
                        <span class="font-black text-gray-800 group-hover:text-amber-700 text-base md:text-lg">❓ Phong cảnh được miêu tả theo trình tự thời gian hay không gian?</span>
                        <div class="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-6 pb-4 border-t border-amber-50 pt-3 text-sm md:text-base font-bold text-gray-800">
                        👉 Phong cảnh được miêu tả theo **trình tự không gian** (đi từ lòng suối, dòng chảy -> xuống giữa dòng thấy bầy cá -> sang bên kia suối thấy măng trúc -> hướng lên cao nhìn ngắm rặng trúc vút cao trổ hoa).
                    </div>
                </details>
            </div>
        </div>

        <!-- Đoạn văn b -->
        <div class="p-6 bg-sky-50/20 rounded-3xl border border-sky-100 space-y-4">
            <div class="flex items-center gap-3">
                <span class="px-3 py-1 bg-sky-600 text-white rounded-xl font-black text-sm">Đoạn văn b</span>
                <h4 class="font-black text-sky-800 text-lg md:text-xl">Vẻ đẹp sắc màu của biển</h4>
            </div>
            <p class="text-gray-800 text-lg md:text-xl leading-relaxed italic font-serif bg-white p-4 rounded-2xl border border-sky-100">
                "Biển luôn thay đổi màu tuỳ theo sắc mây trời. Trời xanh thẳm, biển cũng thẳm xanh như dâng cao lên, chắc nịch. Trời rải mây trắng nhạt, biển mơ màng dịu hơi sương. Trời âm u mây mưa, biển xám xịt nặng nề. Trời ầm ầm giông gió, biển đục ngầu, giận dữ,... Như một con người biết buồn vui, biển lúc tẻ nhạt, lạnh lùng, lúc sôi nổi, hả hê, lúc đăm chiêu, gắt gỏng. Biển nhiều khi rất đẹp, ai cũng thấy như thế. Nhưng có một điều ít ai chú ý là: vẻ đẹp của biển, vẻ đẹp kì diệu muôn màu muôn sắc ấy phần rất lớn là do mây, trời và ánh sáng tạo nên."
                <span class="block text-right text-xs font-semibold text-gray-800 mt-2">(Theo Vũ Tú Nam)</span>
            </p>
            
            <!-- Câu hỏi tương tác đoạn b -->
            <div class="space-y-3 pt-2">
                <!-- Hỏi 1 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm overflow-hidden transition-all">
                    <summary class="w-full p-4 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50">
                        <span class="font-black text-gray-800 group-hover:text-sky-700 text-base md:text-lg">❓ Tìm câu chủ đề của đoạn văn.</span>
                        <div class="w-6 h-6 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-3 h-3 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-6 pb-4 border-t border-sky-50 pt-3 text-sm md:text-base font-bold text-gray-800">
                        👉 Câu chủ đề của đoạn văn nằm ở ngay câu đầu tiên: **"Biển luôn thay đổi màu tuỳ theo sắc mây trời."** Câu này tóm tắt trọn vẹn toàn bộ ý chính của cả đoạn văn.
                    </div>
                </details>

                <!-- Hỏi 2 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm overflow-hidden transition-all">
                    <summary class="w-full p-4 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50">
                        <span class="font-black text-gray-800 group-hover:text-sky-700 text-base md:text-lg">❓ Theo em, tác giả đã quan sát biển, trời vào những thời điểm nào?</span>
                        <div class="w-6 h-6 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-3 h-3 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-6 pb-4 border-t border-sky-50 pt-3 text-sm md:text-base font-bold text-gray-800 space-y-2">
                        <p>👉 Tác giả quan sát biển và trời ở **nhiều thời điểm thời tiết khác nhau** trong ngày:</p>
                        <p>🔹 Lúc trời xanh thẳm nắng đẹp.</p>
                        <p>🔹 Lúc trời rải mây trắng nhạt mờ sương.</p>
                        <p>🔹 Lúc trời âm u mây mưa mù mịt.</p>
                        <p>🔹 Lúc trời nổi giông gió ầm ầm dữ dội.</p>
                    </div>
                </details>

                <!-- Hỏi 3 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm overflow-hidden transition-all">
                    <summary class="w-full p-4 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50">
                        <span class="font-black text-gray-800 group-hover:text-sky-700 text-base md:text-lg">❓ Tìm và nêu tác dụng của hình ảnh so sánh, nhân hoá trong đoạn văn.</span>
                        <div class="w-6 h-6 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-3 h-3 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-6 pb-4 border-t border-sky-50 pt-3 text-sm md:text-base font-bold text-gray-800 space-y-3">
                        <div>
                            <p class="text-sky-800">🔍 Hình ảnh So sánh:</p>
                            <p class="text-gray-800 font-bold">"biển cũng thẳm xanh như dâng cao lên, chắc nịch", "Như một con người biết buồn vui..."</p>
                        </div>
                        <div>
                            <p class="text-sky-800">🔍 Hình ảnh Nhân hóa:</p>
                            <p class="text-gray-800 font-bold">Biển có cảm xúc, tính cách giống con người: biển "mơ màng", "xám xịt nặng nề", "đục ngầu giận dữ", "biết buồn vui, lúc tẻ nhạt, lạnh lùng, lúc sôi nổi, hả hê, lúc đăm chiêu, gắt gỏng".</p>
                        </div>
                        <p class="pt-2 border-t border-gray-100">👉 **Tác dụng:** Giúp hình ảnh biển cả hiện lên vô cùng sống động, có linh hồn, cảm xúc như con người thực thụ; tạo ấn tượng mạnh mẽ và gợi sự đồng cảm sâu sắc nơi người đọc.</p>
                    </div>
                </details>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- ✍️ VIẾT ĐOẠN VĂN TẢ PHONG CẢNH -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-amber-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">2</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Viết đoạn văn tả cảnh vật</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Dựa vào dàn ý đã lập, em hãy viết một đoạn văn tả một đặc điểm nổi bật của cảnh ao hồ, sông suối hoặc biển đảo:</p>
            </div>
        </div>

        <!-- Chọn chủ đề viết -->
        <div class="flex gap-3 flex-wrap">
            <button id="btn-tab-songsuoi" onclick="chonTabViet48('songsuoi')" class="px-6 py-3 rounded-2xl font-black text-lg transition-all border-2 border-amber-100 bg-amber-500 text-white shadow-md">
                🏞️ Cảnh ao hồ, sông suối
            </button>
            <button id="btn-tab-biendao" onclick="chonTabViet48('biendao')" class="px-6 py-3 rounded-2xl font-black text-lg transition-all border-2 border-gray-100 text-gray-800 hover:border-amber-400 hover:bg-amber-50">
                🌊 Cảnh biển đảo
            </button>
        </div>

        <div class="bg-amber-50/20 p-6 rounded-[32px] border border-amber-100 space-y-4">
            <label id="lbl-textarea-viet" class="font-black text-amber-600 text-base md:text-lg block">📝 Viết đoạn văn của em (tối thiểu 40 từ, nên có câu chủ đề và từ ngữ gợi tả):</label>
            <textarea id="vn48-textarea-doanvan" rows="6" placeholder="Ví dụ tả sông nước: Dòng sông quê em hiền hòa uốn lượn như một dải lụa mềm ôm lấy xóm làng. Vào những buổi sáng bình minh, mặt nước sông phẳng lặng, khoác chiếc áo sương mờ dịu nhẹ. Ánh nắng ban mai le lói chiếu xuống làm dòng sông lấp lánh như dát bạc. Hàng tre xanh mát hai bên bờ khẽ đung đưa lá đón gió sớm rầm rì..." class="w-full p-4 border border-gray-100 rounded-2xl bg-white text-lg md:text-xl font-semibold focus:border-amber-500 outline-none shadow-sm"></textarea>
            
            <div class="flex justify-center">
                <button onclick="nopDoanVanTiet48()" class="px-8 py-3.5 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all">NỘP ĐOẠN VĂN GỬI THẦY E</button>
            </div>
            <div id="fb-vn48-doanvan" class="hidden p-5 rounded-2xl text-base font-bold shadow-md transition-all duration-348"></div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TIẾT -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiTiet48Global()" class="px-12 py-5 bg-gradient-to-r from-amber-600 to-orange-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Nhiệm vụ trọng tâm của tiết học 'Viết đoạn văn tả phong cảnh' là gì?",
            "options": [
                "Viết trọn vẹn cả bài văn tả cảnh sông suối",
                "Viết đoạn văn tả một đặc điểm nổi bật của cảnh ao hồ, sông suối hoặc biển đảo",
                "Đọc thuộc lòng các bài văn tả cảnh của các nhà văn nổi tiếng",
                "Viết thư thăm hỏi người thân ở xa"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Trong đoạn văn a, tác giả Trần Nhuận Minh đã tả cảnh vật gì?",
            "options": [
                "Cảnh một con sông lớn đỏ ngầu phù sa mùa lũ",
                "Cảnh bãi biển cát trắng nắng vàng rực rỡ",
                "Cảnh một con suối nhỏ trong rừng trúc đầu nguồn",
                "Cảnh đồi chè xanh mướt mát dưới sương sớm"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Ở đoạn văn a, tác giả không sử dụng giác quan nào để cảm nhận vẻ đẹp?",
            "options": [
                "Thị giác (nhìn thấy cá bơi, rêu nhảy múa)",
                "Khứu giác (ngửi thấy mùi thơm hoa trúc nhẹ nhõm)",
                "Vị giác (nếm vị nước suối ngọt mát)",
                "Thính giác (nhận biết sự tĩnh lặng không tiếng động)"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Đoạn văn a miêu tả phong cảnh theo trình tự nào?",
            "options": [
                "Trình tự thời gian thay đổi trong ngày",
                "Trình tự không gian (dưới suối, giữa dòng, bên kia suối, rặng trúc trên cao)",
                "Trình tự từ ngoài rừng đi dần vào trong hang đá",
                "Không theo một trình tự lô-gíc nào"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Ý chính của đoạn văn b (Theo Vũ Tú Nam) viết về điều gì?",
            "options": [
                "Miêu tả những hoạt động đánh cá của ngư dân ngoài biển xa",
                "Tả sự thay đổi màu sắc kỳ diệu của biển theo mây trời và ánh sáng",
                "Kể lại kỷ niệm chuyến đi nghỉ mát mùa hè của tác giả",
                "Miêu tả các loài sinh vật biển lạ lùng sâu dưới đại dương"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Tìm câu chủ đề của đoạn văn b?",
            "options": [
                "Biển luôn thay đổi màu tuỳ theo sắc mây trời.",
                "Trời âm u mây mưa, biển xám xịt nặng nề.",
                "Biển nhiều khi rất đẹp, ai cũng thấy như thế.",
                "Như một con người biết buồn vui..."
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi mây trời thay đổi, màu sắc biển trong đoạn văn b biến đổi thế nào?",
            "options": [
                "Biển chỉ giữ một màu xanh biếc duy nhất suốt cả ngày",
                "Biển thẳm xanh khi trời xanh; mơ màng dịu hơi sương khi trời mây trắng; xám xịt khi trời mây mưa; đục ngầu khi trời giông gió",
                "Biển chuyển dần sang màu vàng úa khi chiều tà",
                "Biển chuyển màu đen kịt khi có giông tố bão bùng"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Tác giả đoạn văn b đã dùng biện pháp nghệ thuật nào để ví biển với cảm xúc con người?",
            "options": [
                "Biện pháp nhân hóa (biết buồn vui, lúc tẻ nhạt, lạnh lùng, lúc sôi nổi, hả hê...)",
                "Biện pháp nói giảm nói tránh",
                "Biện pháp đảo ngữ",
                "Biện pháp liệt kê số liệu khoa học"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tác dụng lớn nhất của việc đưa biện pháp nhân hóa và so sánh vào đoạn văn tả cảnh là gì?",
            "options": [
                "Làm bài văn dài hơn để lấy điểm cao",
                "Làm phong cảnh hiện lên sinh động, gần gũi, có linh hồn và giàu cảm xúc",
                "Chứng tỏ vốn từ ngữ khoa học của người viết",
                "Không có tác dụng gì cụ thể"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Để viết một đoạn văn tả cảnh hay, em nên chọn tả bao nhiêu đặc điểm nổi bật?",
            "options": [
                "Tả thật nhiều đặc điểm vụn vặt không bỏ sót gì",
                "Tập trung tả sâu một hoặc một số đặc điểm nổi bật, đặc sắc nhất của cảnh vật đó",
                "Không cần tả đặc điểm nổi bật mà chỉ cần ghi chép chung chung",
                "Chỉ tả hoạt động của con người quanh cảnh vật"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Câu chủ đề của một đoạn văn thường đứng ở vị trí nào?",
            "options": [
                "Chỉ đứng ở cuối đoạn văn",
                "Thường đứng ở đầu hoặc cuối đoạn văn, tóm tắt ý chính của cả đoạn",
                "Nằm ở giữa đoạn văn",
                "Không có vị trí xác định và không quan trọng"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Đâu là từ ngữ gợi tả hình ảnh, màu sắc phù hợp khi miêu tả dòng sông?",
            "options": [
                "hiền hòa uốn lượn, phẳng lặng như gương, đỏ ngầu phù sa",
                "rầm rì, lao xao, róc rách, xào xạc",
                "mát mẻ, trong lành, dịu nhẹ, se se",
                "chạy nhảy, vui cười, bơi lội, ca hát"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đâu là từ ngữ gợi tả âm thanh sinh động phù hợp khi tả cảnh sóng biển?",
            "options": [
                "mênh mông bao la, thẳm xanh chắc nịch",
                "sóng vỗ rì rào, rì rầm đêm ngày, ào ạt xô bờ cát",
                "nắng vàng hoe, mây trắng nhạt",
                "mát rượi hơi sương, mằn mặn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi viết đoạn văn tả cảnh, việc liên kết giữa các câu văn cần đạt yêu cầu gì?",
            "options": [
                "Mỗi câu nói về một cảnh vật hoàn toàn khác nhau",
                "Các câu cần kết nối chặt chẽ về mặt nội dung, cùng làm rõ chủ đề đoạn văn",
                "Không cần chú ý đến mối liên kết giữa các câu",
                "Chỉ cần viết đúng chính tả từng câu độc lập"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cảnh suối nhỏ trong rừng trúc (đoạn a) thoảng mùi thơm gì?",
            "options": [
                "Hương thơm ngạt ngào của hoa phong lan rừng",
                "Mùi đất ẩm ướt sau cơn mưa rào",
                "Mùi thơm nhẹ nhõm, xa ngái của hoa trúc",
                "Hương lúa chín thơm nồng từ bản làng vọng lại"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Yếu tố nào đóng vai trò lớn nhất tạo nên vẻ đẹp kỳ diệu của biển trong đoạn b?",
            "options": [
                "Những rặng san hô nhiều màu dưới đáy",
                "Mây, trời và ánh sáng tạo nên",
                "Sự xuất hiện của các tàu bè đánh cá",
                "Độ sâu của đáy biển đại dương"
            ],
            "answer": 1,
            "level": 0
        }
    ]
};

// --- LOGIC TIẾT 48 ---

// 1. Logic khởi động
let kdAnswers48 = { 1: "", 2: "", 3: "" };
window.checkKdVn48 = function(questionIndex, btn, part) {
    const fb = document.getElementById("fb-vn48-kd");
    if (!fb) return;

    fb.classList.remove("hidden");
    const correctParts = { 1: "TG", 2: "ThG", 3: "KG" };
    const correctLabel = { "TG": "Thị giác", "ThG": "Thính giác", "KG": "Khứu giác" };

    if (part === correctParts[questionIndex]) {
        kdAnswers48[questionIndex] = part;
        btn.className = "px-4 py-2 bg-emerald-600 text-white border-2 border-emerald-100 rounded-xl transition-all cursor-default scale-95 font-bold text-base";
        fb.innerHTML = `✅ Chính xác! Chi tiết ${questionIndex} được cảm nhận bằng <strong>${correctLabel[part]}</strong>.`;
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4 transition-all";
        
        // Vô hiệu hóa nút khác trong hàng
        const parentDiv = btn.parentElement;
        if (parentDiv) {
            const buttons = parentDiv.querySelectorAll("button");
            buttons.forEach(b => {
                if (b !== btn) b.disabled = true;
            });
        }

        // Kiểm tra hoàn thành tất cả
        if (kdAnswers48[1] !== "" && kdAnswers48[2] !== "" && kdAnswers48[3] !== "") {
            fb.innerHTML = "🎉 Tuyệt vời! Em đã hoàn thành xuất sắc thử thách khởi động nhận diện giác quan miêu tả!";
            if (typeof window.showMathFeedback === 'function') {
                window.showMathFeedback("Nhận diện giác quan tốt", "🧠", "Phối hợp các giác quan cảm nhận xuất sắc!");
            }
        }
    } else {
        btn.className = "px-4 py-2 bg-rose-600 text-white border-2 border-rose-100 rounded-xl transition-all cursor-default scale-95 font-bold text-base";
        fb.innerHTML = `❌ Chưa chính xác. Chi tiết ${questionIndex} được cảm nhận bằng giác quan khác. Em hãy thử lại nhé!`;
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-rose-50 text-rose-800 border border-rose-100 mt-4 transition-all";
        
        setTimeout(() => {
            btn.className = "px-4 py-2 bg-white hover:bg-amber-500 border-2 border-gray-100 rounded-xl transition-all active:scale-95 text-base";
            fb.classList.add("hidden");
        }, 1548);
    }
};

// 2. Logic chọn tab viết đoạn văn
let selectedViet48 = "songsuoi"; // Mặc định tả sông suối
window.chonTabViet48 = function(tabName) {
    selectedViet48 = tabName;
    const btnSS = document.getElementById("btn-tab-songsuoi");
    const btnBD = document.getElementById("btn-tab-biendao");
    const lbl = document.getElementById("lbl-textarea-viet");
    const txt = document.getElementById("vn48-textarea-doanvan");
    const fb = document.getElementById("fb-vn48-doanvan");

    if (!btnSS || !btnBD || !lbl || !txt) return;

    if (fb) fb.classList.add("hidden");

    if (tabName === 'songsuoi') {
        btnSS.className = "px-6 py-3 rounded-2xl font-black text-lg transition-all border-2 border-amber-100 bg-amber-500 text-white shadow-md";
        btnBD.className = "px-6 py-3 rounded-2xl font-black text-lg transition-all border-2 border-gray-100 text-gray-800 hover:border-amber-400 hover:bg-amber-50";
        lbl.innerHTML = "📝 Viết đoạn văn tả ao hồ, sông suối (tối thiểu 40 từ, nên có câu chủ đề và hình ảnh gợi tả):";
        txt.placeholder = "Ví dụ tả sông nước: Dòng sông quê em hiền hòa uốn lượn như một dải lụa mềm ôm lấy xóm làng. Vào những buổi sáng bình minh, mặt nước sông phẳng lặng, khoác chiếc áo sương mờ dịu nhẹ. Ánh nắng ban mai le lói chiếu xuống làm dòng sông lấp lánh như dát bạc. Hàng tre xanh mát hai bên bờ khẽ đung đưa lá đón gió sớm rầm rì...";
    } else {
        btnBD.className = "px-6 py-3 rounded-2xl font-black text-lg transition-all border-2 border-amber-100 bg-amber-500 text-white shadow-md";
        btnSS.className = "px-6 py-3 rounded-2xl font-black text-lg transition-all border-2 border-gray-100 text-gray-800 hover:border-amber-400 hover:bg-amber-50";
        lbl.innerHTML = "📝 Viết đoạn văn tả biển đảo (tối thiểu 40 từ, nên có câu chủ đề và hình ảnh gợi tả):";
        txt.placeholder = "Ví dụ tả biển cả: Biển quê em vào những buổi chiều hoàng hôn thật đẹp và thơ mộng biết bao. Mặt trời đỏ rực như một quả cầu lửa khổng lồ từ từ lặn xuống lòng biển cả bao la. Những con sóng bạc đầu rì rào xô bờ cát mịn như đang hát khúc ca êm dịu. Phía xa, rặng dừa xanh vẫy lá chào những cánh buồm căng gió trở về...";
    }
};

// 3. Nộp đoạn văn tả cảnh
window.nopDoanVanTiet48 = function() {
    const val = document.getElementById("vn48-textarea-doanvan").value.trim();
    const fb = document.getElementById("fb-vn48-doanvan");

    if (!fb) return;
    fb.classList.remove("hidden");

    const tuCount = val.split(/\s+/).filter(w => w.length > 0).length;
    if (tuCount < 30) {
        fb.innerHTML = "⚠️ Đoạn văn của em còn hơi ngắn (dưới 30 từ). Em hãy cố gắng viết chi tiết thêm về hình ảnh, màu sắc, âm thanh của cảnh vật nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-348";
        return;
    }

    // Kiểm tra từ khóa gợi ý tả cảnh
    const valLower = val.toLowerCase();
    let keywords = [];
    if (selectedViet48 === "songsuoi") {
        keywords = ["sông", "suối", "hồ", "nước", "bờ", "cát", "tre", "đò", "cá", "chảy", "uốn", "mát", "dải lụa"];
    } else {
        keywords = ["biển", "đảo", "sóng", "cát", "dừa", "thuyền", "xanh", "nắng", "gió", "hoàng hôn", "buồm"];
    }

    const matched = keywords.filter(w => valLower.includes(w));
    if (matched.length < 2) {
        const loaiCahn = selectedViet48 === "songsuoi" ? "ao hồ, sông suối" : "biển đảo";
        fb.innerHTML = `⚠️ Đoạn văn cần bổ sung thêm một số từ ngữ gợi tả đặc sắc hơn cho cảnh <strong>${loaiCahn}</strong> (ví dụ: nước, sóng, gió, rặng dừa, tre xanh...).`;
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-348";
        return;
    }

    // Kiểm tra tu từ (so sánh, nhân hóa)
    const coTuTu = valLower.includes("như") || valLower.includes("giống") || valLower.includes("khoác áo") || valLower.includes("vẫy tay") || valLower.includes("thì thầm") || valLower.includes("giận dữ") || valLower.includes("reo mừng") || valLower.includes("rầm rì") || valLower.includes("hát");
    if (!coTuTu) {
        fb.innerHTML = "💡 Đoạn văn rất trôi chảy, nhưng nếu em chèn thêm một hình ảnh so sánh (ví dụ: <em>như dải lụa, như quả cầu lửa</em>) hoặc nhân hóa (<em>sóng hát, dừa vẫy lá</em>) thì bài viết sẽ sinh động hơn nhiều đấy!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-sky-600 text-white transition-all duration-348";
        return;
    }

    // Thành công
    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-800">AI Thầy E nhận xét & Chấm điểm:</h5>
                <p class="text-lg mb-2">Thầy khen em đã tự viết được một đoạn văn tả cảnh vô cùng ấn tượng!
                <br>✔️ Có câu chủ đề định hướng rõ ràng.
                <br>✔️ Sử dụng từ ngữ gợi cảm xúc và hình ảnh tu từ (so sánh, nhân hóa) rất tự nhiên, lôi cuốn.
                <br>✔️ Bố cục đoạn văn mạch lạc, chặt chẽ.
                </p>
                <span class="px-3 py-1 bg-emerald-600 rounded-lg text-sm font-bold">Kết quả: Đạt điểm Xuất sắc (148% ⭐)</span>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-emerald-600 text-white transition-all duration-348";
};

// 4. Nộp bài hoàn thành tiết học toàn cục
window.nopBaiTiet48Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 48',
            '✍️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🏆</span><p class="text-xl md:text-2xl font-bold text-amber-600">Chúc mừng em đã hoàn thành xuất sắc Tiết 48: Viết đoạn văn tả phong cảnh!</p><p class="text-xl text-gray-800 mt-3">Giờ đây em đã nắm vững kỹ năng viết câu chủ đề, sử dụng từ gợi tả và các phép so sánh, nhân hóa để tạo nên đoạn văn tả cảnh tuyệt vời!</p></div>'
        );
    }
};
