export const lesson39 = {
    "topic": "Tiếng Việt 5",
    "week": "6",
    "period": "39",
    "title": "ĐỌC: NHỮNG HÒN ĐẢO TRÊN VỊNH HẠ LONG",
    "desc": "Bài học giúp học sinh rèn luyện kỹ năng đọc thành tiếng diễn cảm và đọc hiểu văn bản 'Những hòn đảo trên vịnh Hạ Long'; qua đó luyện tập về các từ gợi tả và tìm hiểu các cặp từ đồng nghĩa để mở rộng vốn từ.",
    "subject": "Tiếng Việt",
    "theme": "Măng non",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-sky-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Đọc trôi chảy, diễn cảm bài văn 'Những hòn đảo trên vịnh Hạ Long', ngắt nghỉ đúng nhịp.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Hiểu được vẻ đẹp kì thú, đa dạng sinh động của hàng ngàn hòn đảo đá trên vịnh Hạ Long.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Nắm vững tác dụng miêu tả của các từ gợi tả; nhận biết và sử dụng đúng các cặp từ đồng nghĩa.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động: Đoán nhanh về vịnh Hạ Long</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy quan sát câu hỏi và chọn câu trả lời đúng nhất để mở đầu chuyến du lịch khám phá vịnh Hạ Long:</p>
        
        <div class="p-6 bg-sky-50/30 rounded-3xl border border-sky-100 space-y-6 font-bold text-sky-800 text-lg md:text-xl">
            <div id="q-kd-1" class="space-y-3">
                <p>❓ Vịnh Hạ Long thuộc tỉnh nào của nước ta?</p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <button onclick="kiemTraKdVn39(1, this, false)" class="p-3 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 transition-all active:scale-95">Hải Phòng</button>
                    <button onclick="kiemTraKdVn39(1, this, true)" class="p-3 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 transition-all active:scale-95">Quảng Ninh</button>
                    <button onclick="kiemTraKdVn39(1, this, false)" class="p-3 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 transition-all active:scale-95">Nha Trang</button>
                    <button onclick="kiemTraKdVn39(1, this, false)" class="p-3 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 transition-all active:scale-95">Thừa Thiên Huế</button>
                </div>
            </div>

            <div id="q-kd-2" class="space-y-3 hidden">
                <p>❓ Vịnh Hạ Long đã được tổ chức nào vinh danh là Di sản Thiên nhiên Thế giới?</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <button onclick="kiemTraKdVn39(2, this, false)" class="p-3 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 transition-all active:scale-95">A. UNICEF</button>
                    <button onclick="kiemTraKdVn39(2, this, true)" class="p-3 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 transition-all active:scale-95">B. UNESCO</button>
                    <button onclick="kiemTraKdVn39(2, this, false)" class="p-3 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 transition-all active:scale-95">C. WHO</button>
                </div>
            </div>

            <div id="fb-vn39-kd" class="hidden p-4 rounded-2xl text-lg font-black text-center transition-all duration-339"></div>
        </div>
    </div>

    <!-- 📖 KHÁM PHÁ (BÀI ĐỌC) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl space-y-8">
        <div class="flex items-center justify-between border-b border-sky-100 pb-4">
            <span class="text-sky-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                <span>📖</span> Văn bản đọc học tập
            </span>
            <button onclick="window.playSegmentAudio && window.playSegmentAudio('assets/audio/tiengviet/39/tiet39_vinh_ha_long.mp3')" class="px-4 py-2 bg-sky-600 hover:bg-sky-600 text-sky-800 rounded-xl font-bold flex items-center gap-2 transition-all active:scale-95 text-lg">
                🔊 Nghe đọc mẫu
            </button>
        </div>

        <!-- Nội dung văn bản đọc mẫu -->
        <div class="bg-sky-50/10 p-6 md:p-10 rounded-3xl border border-sky-100 max-w-4xl mx-auto space-y-6">
            <h4 class="text-2xl md:text-5xl font-black text-center text-gray-800 font-sans">NHỮNG HÒN ĐẢO TRÊN VỊNH HẠ LONG</h4>
            <p class="text-center text-sm font-semibold text-gray-800 -mt-4">(Trích)</p>
            <div class="serif-font text-gray-800 leading-relaxed text-justify space-y-4 text-xl md:text-4xl">
                <!-- Minh họa SGK (Góc trên bên phải, bấm vào phóng to) -->
                <div onclick="window.showMathFeedback('Vịnh Hạ Long', '🌊', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/39-40/39-40.jpg&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Vịnh Hạ Long&quot;&gt;&lt;p class=&quot;text-2xl font-bold text-sky-800 mt-4&quot;&gt;Vẻ đẹp kì vĩ của các hòn đảo nhấp nhô trên vịnh Hạ Long.&lt;/p&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-gradient-to-br from-sky-50 to-blue-50 rounded-[32px] border-4 border-white shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group">
                    <img src="assets/images/tiengviet_5_1/39-40/39-40.jpg" class="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500" alt="Vịnh Hạ Long">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Bấm để phóng to 🔍</div>
                </div>

                <p class="indent-8 font-medium">Vịnh Hạ Long là thắng cảnh có một không hai của đất nước ta. Trên một diện tích hẹp, mọc lên hàng nghìn đảo nhấp nhô khuất khúc như rồng chầu, phượng múa.</p>
                <p class="indent-8 font-medium">Đảo có chỗ sừng sững, chạy dài như bức trường thành vững chãi, ngăn khơi với lộng, nối mặt biển với chân trời. Có chỗ đảo dàn ra thưa thớt, hòn này với hòn kia biệt lập, xa trông như quân cờ bày chọn von trên mặt biển. Có chỗ đảo quần tụ lại, xúm xít như vạn chài lúc neo thuyền, phơi lưới.</p>
                <p class="indent-8 font-medium">Đảo của Hạ Long không phải là những núi đá buồn tẻ, đơn điệu mà mỗi hòn, mỗi dáng đều thấp thoáng hình ảnh của sự sống. Có hòn trông như đôi gà đang xoè cánh chọi nhau trên mặt nước (hòn Gà Chọi); có hòn bế thế như mái nhà (hòn Mái Nhà); có hòn chông chênh như con cóc ngồi bờ giếng (hòn Con Cóc); có hòn như ông lão trầm tĩnh ngồi câu cá (hòn Ông Lã Vọng),... Có nhiều hang đảo đẹp, như hang Bổ Nâu, hang Đầu Gỗ,... Mỗi hang đảo gắn với một sự tích huyền bí.</p>
                <p class="indent-8 font-medium">Ngắm Hạ Long với trăm nghìn đảo đá sừng sững, ta có cảm giác được chiêm ngưỡng một thế giới sống động đã trải qua hàng triệu năm hoá đá.</p>
                <p class="text-right italic font-sans text-base text-gray-800">(Theo Thi Sảnh)</p>
            </div>
            
            <!-- Từ ngữ giải nghĩa -->
            <div class="mt-6 p-4 bg-amber-50/50 rounded-2xl border border-amber-100 text-lg md:text-xl font-semibold text-amber-600 space-y-1">
                <p>👉 <strong>Từ ngữ giải nghĩa:</strong></p>
                <ul class="list-disc list-inside pl-4 text-base md:text-lg space-y-1">
                    <li><em>Trường thành:</em> bức thành dài và vững chắc.</li>
                    <li><em>Khơi:</em> vùng biển xa bờ.</li>
                    <li><em>Lộng:</em> vùng biển gần bờ.</li>
                </ul>
            </div>
        </div>

        <!-- 🖼️ TRỰC QUAN HÓA CÁC HÒN ĐẢO TƯƠNG TÁC -->
        <div class="bg-sky-50/30 p-6 rounded-3xl border border-sky-100 space-y-6">
            <h4 class="font-black text-gray-800 text-xl md:text-2xl flex items-center gap-2">
                <span>🖼️</span> Bản đồ khám phá các hòn đảo độc đáo:
            </h4>
            <p class="text-gray-800 font-bold text-sm md:text-base -mt-4 italic">Nhấp vào tên từng hòn đảo dưới đây để xem phác họa tranh phong cảnh và mô tả chi tiết:</p>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button onclick="xemChiTietDaoVn39('gachoi')" class="p-3 bg-white hover:bg-sky-50 border border-sky-100 rounded-xl font-black text-sky-800 text-sm md:text-base shadow-sm">🐔 Hòn Gà Chọi</button>
                <button onclick="xemChiTietDaoVn39('mainha')" class="p-3 bg-white hover:bg-sky-50 border border-sky-100 rounded-xl font-black text-sky-800 text-sm md:text-base shadow-sm">🏠 Hòn Mái Nhà</button>
                <button onclick="xemChiTietDaoVn39('concoc')" class="p-3 bg-white hover:bg-sky-50 border border-sky-100 rounded-xl font-black text-sky-800 text-sm md:text-base shadow-sm">🐸 Hòn Con Cóc</button>
                <button onclick="xemChiTietDaoVn39('lavong')" class="p-3 bg-white hover:bg-sky-50 border border-sky-100 rounded-xl font-black text-sky-800 text-sm md:text-base shadow-sm">🎣 Hòn Ông Lã Vọng</button>
            </div>

            <!-- Khung hiển thị mô tả & SVG -->
            <div id="khung-dao-details" class="hidden p-6 bg-white rounded-2xl border border-sky-100 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <!-- SVG Minh Họa -->
                <div id="dao-svg-container" class="flex justify-center items-center bg-sky-50/50 rounded-2xl p-4 border border-sky-100 h-48"></div>
                <!-- Nội dung mô tả -->
                <div class="space-y-3">
                    <h5 id="dao-name" class="text-xl md:text-2xl font-black text-sky-800">Tên hòn đảo</h5>
                    <p id="dao-desc" class="text-gray-800 text-lg font-semibold leading-relaxed">Mô tả hình ảnh...</p>
                </div>
            </div>
        </div>

        <!-- 📖 ACCORDION HỎI ĐÁP ĐỌC HIỂU -->
        <div class="space-y-4">
            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                        1. Tìm câu văn miêu tả bao quát về đảo ở vịnh Hạ Long. Câu văn đó giúp em hình dung điều gì?
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-bold space-y-2 text-lg md:text-3xl">
                    <p>✔️ <strong>Câu văn miêu tả bao quát:</strong> <em>"Trên một diện tích hẹp, mọc lên hàng nghìn đảo nhấp nhô khuất khúc như rồng chầu, phượng múa."</em></p>
                    <p>✔️ <strong>Tác dụng:</strong> Câu văn giúp người đọc hình dung được số lượng đảo cực kỳ nhiều (hàng nghìn đảo) mọc lên sát nhau, uốn lượn, nhấp nhô liên tiếp tạo nên hình dáng kỳ thú, tráng lệ tựa như rồng chầu phượng múa.</p>
                </div>
            </details>

            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                        2. Những hòn đảo ở Hạ Long được tạo hoá xếp đặt thú vị như thế nào? Bằng cách nào, tác giả giúp ta cảm nhận được điều đó?
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-bold space-y-2 text-lg md:text-3xl">
                    <p>✔️ <strong>Sự xếp đặt thú vị:</strong> Đảo đá không đều nhau mà vô cùng phong phú: có chỗ đảo chạy dài sừng sững như bức tường thành, có chỗ lại đứng riêng lẻ, biệt lập thưa thớt như quân cờ chọn von, có chỗ lại quần tụ xúm xít đông đúc như vạn chài neo thuyền phơi lưới.</p>
                    <p>✔️ <strong>Biện pháp của tác giả:</strong> Tác giả sử dụng các biện pháp so sánh liên tưởng độc đáo (bức trường thành, quân cờ chọn von, vạn chài lúc neo thuyền phơi lưới) kết hợp các từ gợi tả đắt giá để vẽ lên bức tranh chân thực.</p>
                </div>
            </details>

            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                        3. Dựa vào bài đọc, em hãy miêu tả hình dáng một số hòn đảo ở Hạ Long.
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-bold space-y-2 text-lg md:text-3xl">
                    <p>✔️ Hình dáng các hòn đảo vô cùng sống động, có linh hồn:</p>
                    <ul class="list-disc list-inside pl-4 space-y-1">
                        <li><strong>Hòn Gà Chọi:</strong> Trông tựa như đôi gà đang xoè rộng cánh để chọi nhau giữa sóng nước mênh mông.</li>
                        <li><strong>Hòn Mái Nhà:</strong> To lớn, bệ thế che chở như mái nhà tranh ấm cúng.</li>
                        <li><strong>Hòn Con Cóc:</strong> Dáng vẻ đứng chông chênh như chú cóc đang ngồi trầm tư trên bờ giếng cổ.</li>
                        <li><strong>Hòn Ông Lã Vọng:</strong> Dáng một cụ già trầm tĩnh khoác áo tơi lặng lẽ ngồi buông câu cá giữa trời biển.</li>
                    </ul>
                </div>
            </details>

            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                        4. Vì sao khi ngắm đảo ở vịnh Hạ Long, tác giả cảm giác đang chiêm ngưỡng một thế giới sống động hóa đá?
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-bold text-lg md:text-3xl">
                    Bởi vì hàng trăm nghìn hòn đảo đá ở đây không hề câm lặng hay buồn tẻ, mà mỗi hòn đảo đều mang hình dáng của sự sống (đôi gà, con cóc, ông lão, mái nhà,...). Vẻ đẹp ấy vừa gần gũi, ấm áp hơi thở sự sống vừa hùng vĩ, vĩnh hằng như một bức tranh nghệ thuật đã được kiến tạo tỉ mỉ qua hàng triệu năm lịch sử địa chất.
                </div>
            </details>
        </div>

        <!-- ❓ CÂU HỎI 5 TƯƠNG TÁC (CHỦ ĐỀ BÀI) -->
        <div class="p-6 bg-sky-50/50 rounded-3xl border border-sky-100 space-y-4 font-bold">
            <p class="text-xl md:text-2xl text-sky-800">5. Chủ đề của bài 'Những hòn đảo trên vịnh Hạ Long' là gì? Chọn đáp án đúng:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button onclick="kiemTraCau5Vn39(this, true)" class="p-4 bg-white hover:bg-sky-55 border-2 border-gray-100 rounded-2xl text-gray-800 text-left transition-all active:scale-95 leading-relaxed">
                    A. Vẻ đẹp kì thú của những hòn đảo trên vịnh Hạ Long
                </button>
                <button onclick="kiemTraCau5Vn39(this, false)" class="p-4 bg-white hover:bg-sky-55 border-2 border-gray-100 rounded-2xl text-gray-800 text-left transition-all active:scale-95 leading-relaxed">
                    B. Sự thơ mộng, huyền bí của sóng nước Hạ Long
                </button>
                <button onclick="kiemTraCau5Vn39(this, false)" class="p-4 bg-white hover:bg-sky-55 border-2 border-gray-100 rounded-2xl text-gray-800 text-left transition-all active:scale-95 leading-relaxed">
                    C. Sức cuốn hút của thiên nhiên Hạ Long đối với du khách
                </button>
                <button onclick="kiemTraCau5Vn39(this, false)" class="p-4 bg-white hover:bg-sky-55 border-2 border-gray-100 rounded-2xl text-gray-800 text-left transition-all active:scale-95 leading-relaxed">
                    D. Những cảnh đẹp có một không hai của thiên nhiên
                </button>
            </div>
            </div>
            <div id="fb-vn39-c5" class="hidden p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 transition-all"></div>
        </div>
    </div>

    <!-- 💡 Ý nghĩa / Thông điệp bài học -->
    <div class="p-8 rounded-[36px] bg-gradient-to-r from-sky-600 to-emerald-500 text-white shadow-xl relative overflow-hidden mt-6">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <h4 class="text-xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
            <span>💡</span> Nội dung chính bài học
        </h4>
        <div class="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p class="text-xl md:text-4xl font-bold leading-relaxed text-center italic">
                "Bài văn ca ngợi vẻ đẹp kì thú, sinh động và độc đáo của hàng ngàn hòn đảo đá trên vịnh Hạ Long, qua đó bồi đắp lòng yêu mến thiên nhiên, niềm tự hào về thắng cảnh tuyệt vời của quê hương đất nước."
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📖 LUYỆN TỪ VÀ CÂU - BÀI 1 -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">1</div>
            <div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">LTVC: Nêu tác dụng của các từ ngữ miêu tả đảo</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Em hãy chọn tác dụng miêu tả phù hợp nhất cho mỗi từ gợi tả dưới đây:</p>
            </div>
        </div>

        <div class="overflow-x-auto bg-sky-50/20 p-4 rounded-2xl border border-sky-100">
            <table class="w-full border-collapse border border-sky-100 text-lg md:text-xl font-bold">
                <thead>
                    <tr class="bg-sky-600 text-white">
                        <th class="border border-sky-100 p-4 w-1/4 text-center">Từ gợi tả</th>
                        <th class="border border-sky-100 p-4 text-center">Tác dụng miêu tả phù hợp</th>
                    </tr>
                </thead>
                <tbody class="text-gray-800">
                    <tr>
                        <td class="border border-sky-100 p-4 bg-white text-center font-black text-sky-800">nhấp nhô</td>
                        <td class="border border-sky-100 p-4">
                            <select id="sel-tg-nhapnho" class="w-full p-2 border border-gray-100 rounded-xl bg-white focus:border-sky-500 outline-none">
                                <option value="">-- Chọn tác dụng --</option>
                                <option value="1">Tả các hòn đảo san sát, nhô lên thụt xuống nhịp nhàng trên sóng nước</option>
                                <option value="2">Tả dáng đứng to lớn, sừng sững sương gió ngăn khơi với lộng</option>
                                <option value="3">Tả trạng thái lỏng lẻo, dễ ngã đổ</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-sky-100 p-4 bg-white text-center font-black text-sky-800">sừng sững</td>
                        <td class="border border-sky-100 p-4">
                            <select id="sel-tg-sungsung" class="w-full p-2 border border-gray-100 rounded-xl bg-white focus:border-sky-500 outline-none">
                                <option value="">-- Chọn tác dụng --</option>
                                <option value="1">Tả sự hội tụ đông đúc quây quần bên nhau</option>
                                <option value="2">Tả dáng vẻ uy nghi, to lớn, đứng vững chãi kiêu hãnh giữa trời biển</option>
                                <option value="3">Tả khoảng cách xa xôi rời rạc</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-sky-100 p-4 bg-white text-center font-black text-sky-800">thưa thớt</td>
                        <td class="border border-sky-100 p-4">
                            <select id="sel-tg-thuathot" class="w-full p-2 border border-gray-100 rounded-xl bg-white focus:border-sky-500 outline-none">
                                <option value="">-- Chọn tác dụng --</option>
                                <option value="1">Tả sự phân bố rời rạc, ít ỏi, hòn nọ biệt lập xa hòn kia</option>
                                <option value="2">Tả sự tụ họp xúm xít như vạn chài neo thuyền</option>
                                <option value="3">Tả các đợt sóng cuồn cuộn vỗ bờ</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-sky-100 p-4 bg-white text-center font-black text-sky-800">chon von</td>
                        <td class="border border-sky-100 p-4">
                            <select id="sel-tg-chonvon" class="w-full p-2 border border-gray-100 rounded-xl bg-white focus:border-sky-500 outline-none">
                                <option value="">-- Chọn tác dụng --</option>
                                <option value="1">Tả tư thế đứng kiêu hãnh, chen chúc của các mỏm đá</option>
                                <option value="2">Tả dáng vẻ đơn độc, vươn cao chót vót trên mặt nước</option>
                                <option value="3">Tả màu xanh biếc lung linh của lòng vịnh</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="flex justify-center">
            <button onclick="kiemTraLtv1Vn39()" class="px-8 py-3 bg-sky-600 hover:bg-sky-600 text-white rounded-xl font-bold shadow-md transition-all active:scale-95 text-lg">Kiểm tra tác dụng từ gợi tả</button>
        </div>
        <div id="fb-vn39-lt1" class="hidden p-4 rounded-xl text-center text-lg font-bold"></div>
    </section>

    <!-- 🎮 BÀI TẬP 2: TRÒ CHƠI GHÉP CẶP ĐỒNG NGHĨA -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">2</div>
            <div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">LTVC: Trò chơi tìm cặp từ đồng nghĩa</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Em hãy bấm chọn lần lượt 2 từ đồng nghĩa với nhau để ghép thành một cặp. Khi chọn đúng, chúng sẽ đổi màu xanh lá cây!</p>
            </div>
        </div>

        <!-- Lưới thẻ từ tương tác -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 font-bold text-lg md:text-xl">
            <button id="card-ngam-nhin" onclick="clickTheTuDongNghia39('ngam-nhin', 'chiem-nguong')" class="p-6 bg-sky-50/50 hover:bg-sky-600 border-2 border-sky-100 rounded-3xl transition-all shadow-sm active:scale-95 text-sky-800">ngắm nhìn</button>
            <button id="card-quan-tu" onclick="clickTheTuDongNghia39('quan-tu', 'quay-quan')" class="p-6 bg-sky-50/50 hover:bg-sky-600 border-2 border-sky-100 rounded-3xl transition-all shadow-sm active:scale-95 text-sky-800">quần tụ</button>
            <button id="card-vung-chac" onclick="clickTheTuDongNghia39('vung-chac', 'vung-chai')" class="p-6 bg-sky-50/50 hover:bg-sky-600 border-2 border-sky-100 rounded-3xl transition-all shadow-sm active:scale-95 text-sky-800">vững chắc</button>
            <button id="card-tram-tinh" onclick="clickTheTuDongNghia39('tram-tinh', 'tram-lang')" class="p-6 bg-sky-50/50 hover:bg-sky-600 border-2 border-sky-100 rounded-3xl transition-all shadow-sm active:scale-95 text-sky-800">trầm tĩnh</button>
            <button id="card-tram-lang" onclick="clickTheTuDongNghia39('tram-lang', 'tram-tinh')" class="p-6 bg-sky-50/50 hover:bg-sky-600 border-2 border-sky-100 rounded-3xl transition-all shadow-sm active:scale-95 text-sky-800">trầm lặng</button>
            <button id="card-vung-chai" onclick="clickTheTuDongNghia39('vung-chai', 'vung-chac')" class="p-6 bg-sky-50/50 hover:bg-sky-600 border-2 border-sky-100 rounded-3xl transition-all shadow-sm active:scale-95 text-sky-800">vững chãi</button>
            <button id="card-quay-quan" onclick="clickTheTuDongNghia39('quay-quan', 'quan-tu')" class="p-6 bg-sky-50/50 hover:bg-sky-600 border-2 border-sky-100 rounded-3xl transition-all shadow-sm active:scale-95 text-sky-800">quây quần</button>
            <button id="card-chiem-nguong" onclick="clickTheTuDongNghia39('chiem-nguong', 'ngam-nhin')" class="p-6 bg-sky-50/50 hover:bg-sky-600 border-2 border-sky-100 rounded-3xl transition-all shadow-sm active:scale-95 text-sky-800">chiêm ngưỡng</button>
        </div>

        <div class="flex justify-center gap-3">
            <button onclick="datLaiTheDongNghia39()" class="px-6 py-2 bg-gray-800 hover:bg-gray-200 text-gray-700 rounded-xl font-bold transition-all text-sm">Đặt lại trò chơi</button>
        </div>
        <div id="fb-vn39-game" class="hidden p-4 rounded-xl text-center text-lg font-bold"></div>
    </section>

    <!-- ✍️ BÀI TẬP 3: ĐẶT CÂU TƯƠNG TÁC TỰ LUẬN -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">3</div>
            <div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">LTVC: Thực hành đặt câu với cặp từ đồng nghĩa</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Em hãy chọn 1 cặp từ đồng nghĩa đã tìm được ở bài tập 2 và viết một hoặc hai câu văn sử dụng cặp từ này để tả cảnh vật hoặc con người:</p>
            </div>
        </div>

        <div class="bg-sky-50/20 p-6 rounded-3xl border border-sky-100 space-y-4">
            <div class="space-y-2">
                <label class="font-black text-sky-800 text-sm block">📝 Viết câu văn miêu tả của em:</label>
                <textarea id="ans-vn39-writing" rows="4" placeholder="Ví dụ: Du khách bốn phương đổ về đây để ngắm nhìn và chiêm ngưỡng vẻ đẹp hùng vĩ của Vịnh Hạ Long..." class="w-full p-4 border border-gray-100 rounded-2xl bg-white text-xl md:text-2xl font-semibold focus:border-sky-500 outline-none shadow-sm"></textarea>
            </div>
            
            <div class="flex justify-center gap-4">
                <button onclick="checkWritingVn39()" class="px-8 py-3.5 bg-sky-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-sky-600 active:scale-95 transition-all">NỘP BÀI GỬI THẦY E</button>
                <button onclick="resetWritingVn39()" class="px-6 py-3.5 bg-gray-800 hover:bg-gray-800 text-gray-900 font-black text-lg rounded-2xl transition-all active:scale-95">LÀM LẠI</button>
            </div>
            <div id="fb-vn39-datcau" class="hidden p-5 rounded-2xl text-base font-bold shadow-md transition-all duration-339"></div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiTiet39Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Những hòn đảo trên vịnh Hạ Long mọc lên có hình dáng nhấp nhô khuất khúc được ví với hình ảnh gì?",
            "options": [
                "Bức tường thành dài vững chãi",
                "Quân cờ bày chọn von",
                "Như rồng chầu, phượng múa",
                "Lũ trẻ xúm xít nô đùa"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Tác giả so sánh những hòn đảo biệt lập thưa thớt với hình ảnh nào?",
            "options": [
                "Đôi gà đang xoè cánh chọi nhau",
                "Quân cờ bày chọn von trên mặt biển",
                "Mái nhà bệ thế giữa trời",
                "Đoàn thuyền đánh cá neo đậu"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Đặc điểm xếp đặt của hòn đảo khi chúng quần tụ lại là gì?",
            "options": [
                "Chạy sừng sững như trường thành ngăn khơi với lộng",
                "Dàn ra thưa thớt, hòn nọ biệt lập hòn kia",
                "Xúm xít như vạn chài lúc neo thuyền, phơi lưới",
                "Chông chênh đơn độc một mình bờ giếng"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Vẻ đẹp của đảo đá vịnh Hạ Long có gì đặc biệt khiến người xem thích thú?",
            "options": [
                "Đơn điệu, tĩnh lặng và buồn tẻ",
                "Mỗi hòn, mỗi dáng đều thấp thoáng hình ảnh của sự sống",
                "Chỉ toàn đá vôi có hình chữ nhật",
                "Hầu hết đều chìm dưới nước không nhìn thấy dáng vẻ"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Tên hòn đảo nào được miêu tả bệ thế như một mái nhà?",
            "options": [
                "Hòn Gà Chọi",
                "Hòn Mái Nhà",
                "Hòn Con Cóc",
                "Hòn Trống Mái"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Hòn Con Cóc có hình dáng miêu tả sống động như thế nào?",
            "options": [
                "Như đôi gà đang xoè cánh chọi nhau trên mặt nước",
                "Bệ thế to lớn ngăn sóng gió ngoài khơi",
                "Chông chênh như con cóc ngồi bờ giếng",
                "Như ông lão trầm tĩnh ngồi buông câu cá"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Hình ảnh 'ông lão trầm tĩnh ngồi câu cá' gắn liền với hòn đảo nào?",
            "options": [
                "Hòn Ông Lã Vọng",
                "Hòn Mái Nhà",
                "Hòn Con Cóc",
                "Hòn Gà Chọi"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tên hai hang đảo đẹp đẽ, huyền bí được nhắc tới trong bài đọc là gì?",
            "options": [
                "Hang Sửng Sốt, Hang Luồn",
                "Hang Bổ Nâu, Hang Đầu Gỗ",
                "Động Thiên Cung, Hang Trinh Nữ",
                "Động Phong Nha, Hang Sơn Đoòng"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ 'khơi' trong câu văn 'ngăn khơi với lộng' giải nghĩa là gì?",
            "options": [
                "Vùng biển gần sát bờ đất liền",
                "Vùng biển xa bờ",
                "Những dòng sông nước ngọt chảy ra biển",
                "Khu đầm nuôi hải sản ven bờ"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ 'lộng' trong câu văn 'ngăn khơi với lộng' giải nghĩa là gì?",
            "options": [
                "Vùng biển xa bờ",
                "Vòng nước xoáy sâu nguy hiểm",
                "Vùng biển gần bờ",
                "Vùng biển có san hô"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Tác dụng miêu tả nổi bật nhất của từ gợi tả 'sừng sững' là gì?",
            "options": [
                "Tả sự thưa thớt, biệt lập xa cách nhau",
                "Tả trạng thái cao ngút nhấp nhô nhịp nhàng",
                "Tả vẻ uy nghi, to lớn, đứng vững chắc giữa biển trời",
                "Tả tư thế chông chênh, nghiêng ngả"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Từ đồng nghĩa với từ 'chiêm ngưỡng' là từ nào dưới đây?",
            "options": [
                "Ngắm nhìn",
                "Vui đùa",
                "Suy ngẫm",
                "Đi qua"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ đồng nghĩa với từ 'quần tụ' là từ nào dưới đây?",
            "options": [
                "Xếp đặt",
                "Dàn ra",
                "Quây quần",
                "Trải dài"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Cặp từ đồng nghĩa nào miêu tả tư thế tĩnh lặng, ít bộc lộ cảm xúc ra ngoài?",
            "options": [
                "quần tụ - quây quần",
                "vững chắc - vững chãi",
                "trầm tĩnh - trầm lặng",
                "ngắm nhìn - chiêm ngưỡng"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Trong câu văn tả hòn Con Cóc, biện pháp nghệ thuật nào được sử dụng?",
            "options": [
                "Nhân hóa hoàn toàn",
                "Điệp từ liên tục",
                "So sánh",
                "Nói giảm nói tránh"
            ],
            "answer": 2,
            "level": 1
        }
    ]
};

// --- LOGIC TRÒ CHƠI KHỞI ĐỘNG ---
let kdCorrectCount39 = 0;
window.kiemTraKdVn39 = function(step, btn, isCorrect) {
    const fb = document.getElementById("fb-vn39-kd");
    if (!fb) return;

    fb.classList.remove("hidden");
    if (isCorrect) {
        btn.className = "p-3 bg-emerald-600 text-white border-2 border-emerald-100 rounded-2xl font-black transition-all cursor-default scale-95";
        fb.innerHTML = "🎉 Tuyệt vời! Câu trả lời hoàn toàn chính xác.";
        fb.className = "p-4 rounded-2xl text-lg font-black text-center bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4 transition-all";
        
        if (step === 1) {
            setTimeout(() => {
                document.getElementById("q-kd-1").classList.add("hidden");
                document.getElementById("q-kd-2").classList.remove("hidden");
                fb.classList.add("hidden");
            }, 1539);
        } else if (step === 2) {
            fb.innerHTML = "🎉 Chúc mừng em đã xuất sắc hoàn thành phần Khởi động khám phá Vịnh Hạ Long!";
            if (typeof window.showMathFeedback === 'function') {
                window.showMathFeedback("Khởi động thành công", "🎒", "Chào mừng em bước vào bài đọc 'Những hòn đảo trên vịnh Hạ Long'!");
            }
        }
    } else {
        btn.className = "p-3 bg-rose-600 text-white border-2 border-rose-100 rounded-2xl font-black transition-all cursor-default scale-95";
        fb.innerHTML = "❌ Chưa chính xác rồi. Em hãy đọc gợi ý kỹ và chọn lại nhé!";
        fb.className = "p-4 rounded-2xl text-lg font-black text-center bg-rose-50 text-rose-800 border border-rose-100 mt-4 transition-all";
        setTimeout(() => {
            btn.className = "p-3 bg-white hover:bg-sky-55 border-2 border-gray-100 rounded-2xl font-black text-gray-800 transition-all active:scale-95";
            fb.classList.add("hidden");
        }, 1539);
    }
};

// --- LOGIC CHI TIẾT ĐẢO ĐỘ CẬP SVG ---
let svgData39 = {
    gachoi: `<svg viewBox="0 0 239 139" class="w-full h-full"><path d="M39 90 C 35 60, 45 40, 60 50 C 70 40, 75 70, 70 90 Z" fill="#475539"/><path d="M139 90 C 139 55, 139 40, 139 45 C 95 50, 139 75, 139 90 Z" fill="#475539"/><rect x="10" y="90" width="139" height="20" rx="10" fill="#0239c7" opacity="0.8"/><circle cx="139" cy="40" r="10" fill="#facc39" opacity="0.3" filter="blur(2px)"/><path d="M39 85 Q 85 85 85 90" stroke="#f1f5f9" stroke-width="2" fill="none"/></svg>`,
    mainha: `<svg viewBox="0 0 239 139" class="w-full h-full"><path d="M39 90 L 50 40 L 139 30 L 139 90 Z" fill="#64739b"/><polygon points="35,90 85,35 139,90" fill="#334139"/><rect x="10" y="90" width="139" height="20" rx="10" fill="#0239c7" opacity="0.8"/></svg>`,
    concoc: `<svg viewBox="0 0 239 139" class="w-full h-full"><path d="M39 90 C 50 65, 70 50, 90 60 C 139 50, 139 50, 139 65 C 139 80, 139 85, 95 90 Z" fill="#475539"/><circle cx="95" cy="58" r="4" fill="#ef4439"/><rect x="10" y="90" width="139" height="20" rx="10" fill="#0239c7" opacity="0.8"/></svg>`,
    lavong: `<svg viewBox="0 0 239 139" class="w-full h-full"><path d="M39 90 C 65 65, 80 55, 90 70 C 95 68, 139 70, 139 90 Z" fill="#334139"/><line x1="98" y1="70" x2="139" y2="85" stroke="#f8fafc" stroke-width="2"/><rect x="10" y="90" width="139" height="20" rx="10" fill="#0239c7" opacity="0.8"/></svg>`
};

let descData39 = {
    gachoi: "Hòn Gà Chọi (hòn Trống Mái): Biểu tượng của vịnh Hạ Long, trông xa giống như đôi gà khổng lồ một trống một mái đang xoè cánh nghiêng mình chọi nhau dũng mãnh giữa sóng nước mênh mông.",
    mainha: "Hòn Mái Nhà: Có hình khối to lớn, vuông vắn với mái dốc thoải vững chãi gợi liên tưởng đến mái nhà tranh ấm áp, bình dị che chở trước phong ba bão táp của đại dương.",
    concoc: "Hòn Con Cóc: Là tuyệt tác tự nhiên giống hệt một chú cóc khổng lồ đang ngồi chông chênh, lặng lẽ nhìn xa xăm bên bờ giếng khơi.",
    lavong: "Hòn Ông Lã Vọng: Gợi hình dáng một ông lão trầm tư, ngồi buông câu câu cá giữa vùng nước non thanh bình tĩnh lặng, gợi phong thái ung dung tự tại giữa đất trời."
};

let nameData39 = {
    gachoi: "🐓 Hòn Gà Chọi",
    mainha: "🏠 Hòn Mái Nhà",
    concoc: "🐸 Hòn Con Cóc",
    lavong: "🎣 Hòn Ông Lã Vọng"
};

window.xemChiTietDaoVn39 = function(key) {
    const panel = document.getElementById("khung-dao-details");
    const nameBox = document.getElementById("dao-name");
    const descBox = document.getElementById("dao-desc");
    const svgBox = document.getElementById("dao-svg-container");
    if (!panel || !nameBox || !descBox || !svgBox) return;

    panel.classList.remove("hidden");
    nameBox.innerHTML = nameData39[key];
    descBox.innerHTML = descData39[key];
    svgBox.innerHTML = svgData39[key];
};

// --- LOGIC CÂU 5 TRẮC NGHIỆM CHỦ ĐỀ ---
let c5Attempted39 = false;
window.kiemTraCau5Vn39 = function(btn, isCorrect) {
    if (c5Attempted39) return;
    const fb = document.getElementById("fb-vn39-c5");
    if (!fb) return;

    fb.classList.remove("hidden");
    if (isCorrect) {
        btn.className = "p-4 bg-emerald-600 text-white border-2 border-emerald-100 rounded-2xl font-black text-left cursor-default";
        fb.innerHTML = "🎉 Hoàn toàn chính xác! Chủ đề xuyên suốt cả bài viết tập trung miêu tả vẻ đẹp biến hóa kì thú và đa dạng của các hòn đảo đá trên vịnh Hạ Long.";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4 transition-all";
        c5Attempted39 = true;
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Chính xác", "🌟", "Đáp án A là chủ đề chuẩn xác của văn bản!");
        }
    } else {
        btn.className = "p-4 bg-rose-600 text-white border-2 border-rose-100 rounded-2xl font-black text-left cursor-default scale-95";
        fb.innerHTML = "❌ Đáp án chưa chính xác. Em hãy phân tích kỹ phạm vi miêu tả của văn bản (đảo đá chứ không chỉ là sóng nước hay cảnh đẹp chung chung) để chọn lại nhé!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-rose-50 text-rose-800 border border-rose-100 mt-4 transition-all";
        setTimeout(() => {
            btn.className = "p-4 bg-white hover:bg-sky-55 border-2 border-gray-100 rounded-2xl text-gray-800 text-left transition-all active:scale-95 leading-relaxed";
            fb.classList.add("hidden");
        }, 2539);
    }
};

// --- LOGIC LTVC BÀI 1 (TÁC DỤNG TỪ GỢI TẢ) ---
window.kiemTraLtv1Vn39 = function() {
    const v1 = document.getElementById("sel-tg-nhapnho").value;
    const v2 = document.getElementById("sel-tg-sungsung").value;
    const v3 = document.getElementById("sel-tg-thuathot").value;
    const v4 = document.getElementById("sel-tg-chonvon").value;
    const fb = document.getElementById("fb-vn39-lt1");
    if (!fb) return;

    fb.classList.remove("hidden");
    if (!v1 || !v2 || !v3 || !v4) {
        fb.innerHTML = "⚠️ Em hãy lựa chọn đầy đủ tác dụng cho cả 4 từ gợi tả trước khi kiểm tra nhé!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-amber-50 text-amber-600 border border-amber-100 mt-4";
        return;
    }

    if (v1 === "1" && v2 === "2" && v3 === "1" && v4 === "2") {
        fb.innerHTML = "🎉 Cực kỳ xuất sắc! Em đã nhận thức rất chuẩn xác tác dụng miêu tả sinh động của các từ gợi tả nhấp nhô, sừng sững, thưa thớt và chon von.";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4";
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Tác dụng chính xác", "📝", "Em đã hiểu rõ tác dụng của từ gợi tả trong miêu tả phong cảnh!");
        }
    } else {
        fb.innerHTML = "❌ Lựa chọn chưa chính xác rồi! Hãy chú ý lại sự phân biệt giữa tả khoảng cách xa thưa thớt và dáng hình đơn độc chon von để sửa lại nhé!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-rose-50 text-rose-800 border border-rose-100 mt-4";
    }
};

// --- LOGIC TRÒ CHƠI GHÉP CẶP ĐỒNG NGHĨA (BÀI 2) ---
let gamePairs39 = {
    "ngam-nhin": "chiem-nguong",
    "chiem-nguong": "ngam-nhin",
    "quan-tu": "quay-quan",
    "quay-quan": "quan-tu",
    "vung-chac": "vung-chai",
    "vung-chai": "vung-chac",
    "tram-tinh": "tram-lang",
    "tram-lang": "tram-tinh"
};

let currentSelectedCard39 = "";
let lockedCards39 = [];

window.clickTheTuDongNghia39 = function(cardKey, matchKey) {
    if (lockedCards39.includes(cardKey)) return;
    const currentBtn = document.getElementById(`card-${cardKey}`);
    if (!currentBtn) return;

    if (currentSelectedCard39 === "") {
        // Lựa chọn thẻ đầu tiên
        currentSelectedCard39 = cardKey;
        currentBtn.className = "p-6 bg-sky-600 text-white border-2 border-sky-100 rounded-3xl transition-all shadow-md scale-95 font-bold text-lg md:text-xl cursor-default";
    } else {
        // Chọn thẻ thứ hai
        const firstBtn = document.getElementById(`card-${currentSelectedCard39}`);
        if (!firstBtn) return;

        if (currentSelectedCard39 === cardKey) {
            // Nhấp lại vào thẻ đã chọn -> Bỏ chọn
            currentSelectedCard39 = "";
            currentBtn.className = "p-6 bg-sky-50/50 hover:bg-sky-600 border-2 border-sky-100 rounded-3xl transition-all shadow-sm active:scale-95 text-sky-800 font-bold text-lg md:text-xl";
            return;
        }

        if (gamePairs39[currentSelectedCard39] === cardKey) {
            // Ghép đúng cặp đồng nghĩa
            currentBtn.className = "p-6 bg-emerald-600 text-white border-2 border-emerald-100 rounded-3xl font-bold text-lg md:text-xl cursor-default shadow-md";
            firstBtn.className = "p-6 bg-emerald-600 text-white border-2 border-emerald-100 rounded-3xl font-bold text-lg md:text-xl cursor-default shadow-md";
            
            lockedCards39.push(currentSelectedCard39);
            lockedCards39.push(cardKey);
            currentSelectedCard39 = "";

            kiemTraHoanThanhGame39();
        } else {
            // Ghép sai
            currentBtn.className = "p-6 bg-rose-600 text-white border-2 border-rose-100 rounded-3xl font-bold text-lg md:text-xl cursor-default scale-95 shadow-sm";
            firstBtn.className = "p-6 bg-rose-600 text-white border-2 border-rose-100 rounded-3xl font-bold text-lg md:text-xl cursor-default scale-95 shadow-sm";
            
            const tempFirst = currentSelectedCard39;
            currentSelectedCard39 = "";

            setTimeout(() => {
                const btn1 = document.getElementById(`card-${tempFirst}`);
                const btn2 = document.getElementById(`card-${cardKey}`);
                if (btn1 && !lockedCards39.includes(tempFirst)) {
                    btn1.className = "p-6 bg-sky-50/50 hover:bg-sky-600 border-2 border-sky-100 rounded-3xl transition-all shadow-sm active:scale-95 text-sky-800 font-bold text-lg md:text-xl";
                }
                if (btn2 && !lockedCards39.includes(cardKey)) {
                    btn2.className = "p-6 bg-sky-50/50 hover:bg-sky-600 border-2 border-sky-100 rounded-3xl transition-all shadow-sm active:scale-95 text-sky-800 font-bold text-lg md:text-xl";
                }
            }, 1039);
        }
    }
};

window.datLaiTheDongNghia39 = function() {
    lockedCards39 = [];
    currentSelectedCard39 = "";
    const fb = document.getElementById("fb-vn39-game");
    if (fb) fb.classList.add("hidden");

    const allKeys = Object.keys(gamePairs39);
    allKeys.forEach(k => {
        const btn = document.getElementById(`card-${k}`);
        if (btn) {
            btn.className = "p-6 bg-sky-50/50 hover:bg-sky-600 border-2 border-sky-100 rounded-3xl transition-all shadow-sm active:scale-95 text-sky-800 font-bold text-lg md:text-xl";
        }
    });
};

function kiemTraHoanThanhGame39() {
    const fb = document.getElementById("fb-vn39-game");
    if (!fb) return;

    if (lockedCards39.length === Object.keys(gamePairs39).length) {
        fb.classList.remove("hidden");
        fb.innerHTML = "🎉 Tuyệt vời! Em đã hoàn thành xuất sắc trò chơi ghép đôi và tìm chính xác cả 4 cặp từ đồng nghĩa!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4";
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Hoàn thành ghép đôi", "🏆", "Chúc mừng em đã thuộc lòng 4 cặp từ đồng nghĩa trong bài học!");
        }
    }
}

// --- LOGIC ĐẶT CÂU VỚI CẶP TỪ ĐỒNG NGHĨA (BÀI 3) ---
window.checkWritingVn39 = function() {
    const val = document.getElementById("ans-vn39-writing").value.trim();
    const fb = document.getElementById("fb-vn39-datcau");
    if (!fb) return;
    fb.classList.remove("hidden");

    if (val.length < 15) {
        fb.innerHTML = "⚠️ Câu văn của em hơi ngắn, em hãy cố gắng viết đầy đủ câu hoàn chỉnh (tối thiểu 15 ký tự) nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-339";
        return;
    }

    // Các cặp từ đồng nghĩa để nhận diện
    const textLower = val.toLowerCase();
    
    // Cặp 1: ngắm nhìn / chiêm ngưỡng
    const cp1 = (textLower.includes("ngắm") || textLower.includes("nhìn")) && (textLower.includes("chiêm") || textLower.includes("ngưỡng"));
    // Cặp 2: quần tụ / quây quần
    const cp2 = textLower.includes("quần tụ") || textLower.includes("quây quần");
    // Cặp 3: vững chắc / vững chãi
    const cp3 = textLower.includes("vững chắc") || textLower.includes("vững chãi");
    // Cặp 4: trầm tĩnh / trầm lặng
    const cp4 = textLower.includes("trầm tĩnh") || textLower.includes("trầm lặng");

    if (!cp1 && !cp2 && !cp3 && !cp4) {
        fb.innerHTML = "⚠️ Trong câu văn chưa thấy có các từ đồng nghĩa đã tìm được ở bài tập 2 (ví dụ: ngắm nhìn, chiêm ngưỡng, quần tụ, vững chãi, trầm tĩnh...). Em hãy bổ sung thêm nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-339";
        return;
    }

    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-800">AI Thầy E nhận xét & Chấm điểm:</h5>
                <p class="text-lg mb-2">Tuyệt vời! Em đã viết được câu văn rất hay, sử dụng từ ngữ gợi tả chính xác và kết hợp khéo léo cặp từ đồng nghĩa đã học để làm câu văn nổi bật, giàu hình ảnh.</p>
                <span class="px-3 py-1 bg-emerald-600 rounded-lg font-bold text-lg md:text-3xl">Xếp loại: Đạt chất lượng tốt (139% ⭐)</span>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-emerald-600 text-white transition-all duration-339";
};

window.resetWritingVn39 = function() {
    const area = document.getElementById("ans-vn39-writing");
    if (area) area.value = "";
    const fb = document.getElementById("fb-vn39-datcau");
    if (fb) fb.classList.add("hidden");
};

// --- NỘP BÀI TIẾT HỌC TOÀN CỤC ---
window.nopBaiTiet39Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback('Hoàn thành Tiết 39-40', '🌟', '<div class="text-center p-6"><span class="text-7xl block mb-4">🏆</span><p class="text-lg md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành xuất sắc Tiết 39 & 40: Những hòn đảo trên vịnh Hạ Long!</p><p class="text-xl text-gray-800 mt-3">Giờ đây em đã nắm vững vẻ đẹp kì vĩ của các hòn đảo, tác dụng của từ gợi tả và các cặp từ đồng nghĩa bổ ích!</p></div>');
    }
};
