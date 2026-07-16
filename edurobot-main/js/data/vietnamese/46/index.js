export const lesson46 = {
    "topic": "Tiếng Việt 5",
    "week": "7",
    "period": "46",
    "title": "ĐỌC: NHỮNG NGỌN NÚI NÓNG RẪY",
    "desc": "Bài học giúp học sinh hiểu kiến thức khoa học kỳ thú về cấu tạo Trái Đất và nguyên lý hoạt động của núi lửa, rèn luyện kỹ năng đọc hiểu và mở rộng vốn từ chỉ hiện tượng tự nhiên.",
    "subject": "Đọc",
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
                Đọc trôi chảy toàn bài, ngắt nghỉ đúng chỗ, nhấn giọng ở các từ ngữ miêu tả sinh động vẻ đẹp và sức mạnh của núi lửa.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Hiểu được nguyên lý hình thành núi lửa và cấu tạo các lớp vỏ của Trái Đất.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Nhận diện được các hiện tượng tự nhiên có hại và phân biệt được nghĩa gốc, nghĩa chuyển của một số từ đa nghĩa (quả, lửa).
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động: Khám phá những ngọn núi kỳ vĩ</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy nhấp chọn từng ngọn núi dưới đây để khám phá điều đặc biệt của chúng:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-bold text-sky-800 text-base md:text-lg">
            <!-- Núi 1 -->
            <div onclick="xemKhoiDong46('kd-kili')" class="p-5 bg-sky-50/50 hover:bg-sky-100/70 border border-sky-100 rounded-3xl cursor-pointer text-center transition-all space-y-3 shadow-sm group">
                <div class="w-full h-40 rounded-2xl overflow-hidden shadow-inner mb-2">
                    <img src="assets/images/tiengviet_5_1/46-47/Kilimanjaro.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Núi Kilimanjaro">
                </div>
                <h4 class="text-lg md:text-xl font-black text-sky-800">Núi Kilimanjaro</h4>
                <p class="text-xs font-semibold text-gray-800">Núi tuyết giữa châu Phi nóng nực</p>
                <div id="kd-kili" class="hidden p-3 bg-white rounded-2xl border border-sky-100 text-left text-sm font-bold text-gray-800 mt-2">
                    ❄️ Phủ tuyết trắng xóa quanh năm dù nằm gần xích đạo châu Phi vô cùng nóng bức. Đây là ngọn núi đứng độc lập cao nhất thế giới!
                </div>
            </div>

            <!-- Núi 2 -->
            <div onclick="xemKhoiDong46('kd-hawaii')" class="p-5 bg-sky-50/50 hover:bg-sky-100/70 border border-sky-100 rounded-3xl cursor-pointer text-center transition-all space-y-3 shadow-sm group">
                <div class="w-full h-40 rounded-2xl overflow-hidden shadow-inner mb-2">
                    <img src="assets/images/tiengviet_5_1/46-47/diamond-head.jpeg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Núi Diamond Head">
                </div>
                <h4 class="text-lg md:text-xl font-black text-sky-800">Núi Diamond Head (Hawaii)</h4>
                <p class="text-xs font-semibold text-gray-800">Miệng núi lửa hình củ hành</p>
                <div id="kd-hawaii" class="hidden p-3 bg-white rounded-2xl border border-sky-100 text-left text-sm font-bold text-gray-800 mt-2">
                    🍀 Miệng núi lửa hình tròn thoai thoải, đã tắt từ hàng trăm ngàn năm trước và giờ đây được bao phủ hoàn toàn bởi thảm cỏ xanh mướt.
                </div>
            </div>

            <!-- Núi 3 -->
            <div onclick="xemKhoiDong46('kd-bromo')" class="p-5 bg-sky-50/50 hover:bg-sky-100/70 border border-sky-100 rounded-3xl cursor-pointer text-center transition-all space-y-3 shadow-sm group">
                <div class="w-full h-40 rounded-2xl overflow-hidden shadow-inner mb-2">
                    <img src="assets/images/tiengviet_5_1/46-47/bromo.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Núi lửa Bromo">
                </div>
                <h4 class="text-lg md:text-xl font-black text-sky-800">Núi lửa Bromo (Indonesia)</h4>
                <p class="text-xs font-semibold text-gray-800">Hình nón phun khói mù mịt</p>
                <div id="kd-bromo" class="hidden p-3 bg-white rounded-2xl border border-sky-100 text-left text-sm font-bold text-gray-800 mt-2">
                    ☁️ Ngọn núi lửa hình nón đang hoạt động mạnh mẽ, liên tục phun ra những đám mây khói, tro bụi trắng xóa giữa lòng một biển cát xám rộng lớn.
                </div>
            </div>
        </div>
    </div>

    <!-- 📖 VĂN BẢN ĐỌC -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl space-y-8">
        <div class="flex items-center justify-between border-b border-sky-100 pb-4">
            <span class="text-sky-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                <span>📖</span> Văn bản bài đọc
            </span>
            <button onclick="window.playSegmentAudio && window.playSegmentAudio('assets/audio/tiengviet/46/tiet46_nui_lua.mp3')" class="px-4 py-2 bg-sky-600 hover:bg-sky-600 text-sky-800 rounded-xl font-bold flex items-center gap-2 transition-all active:scale-95 text-lg">
                🔊 Nghe đọc mẫu
            </button>
        </div>

        <div class="w-full">
            <!-- Nội dung bài đọc -->
            <div class="bg-sky-50/10 p-6 md:p-8 rounded-[36px] border border-sky-100 space-y-6">
                <h4 class="text-2xl md:text-5xl font-black text-center text-sky-800">NHỮNG NGỌN NÚI NÓNG RẪY</h4>
                <div class="text-gray-800 text-xl md:text-2xl leading-loose space-y-6 font-serif font-normal">
                    <!-- Đoạn 1 -->
                    <div class="p-3 rounded-2xl hover:bg-sky-50/50 cursor-pointer transition-all" onclick="docDoan46(1)">
                        <!-- Minh họa thật phóng to -->
                        <div onclick="window.showMathFeedback('Núi lửa', '🌋', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/46-47/46-47.png&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Núi lửa&quot;&gt;&lt;p class=&quot;text-2xl font-bold text-amber-600 mt-4&quot;&gt;Cảnh tượng phun trào tráng lệ và sức nóng của một ngọn núi lửa.&lt;/p&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-gradient-to-br from-amber-50 to-orange-50 rounded-[32px] border-4 border-white shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group">
                            <img src="assets/images/tiengviet_5_1/46-47/46-47.png" class="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500" alt="Núi lửa">
                            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Bấm để phóng to 🔍</div>
                        </div>
                        <p class="indent-8">Nói đến núi lửa, đa số mọi người nghĩ đến một quả núi hình nón đang bốc lửa nóng rẫy. Nhưng thực tế, núi lửa không phải bao giờ cũng y như vậy. Có quả núi lửa hình nón, có quả lại hình tròn thoai thoải. Một số phun lửa, một số khác chỉ phun khói, khí hoặc các đám mây tro. Một số quả núi lửa nổ với tiếng động kinh hoàng, một số khác chỉ rít lên khe khẽ. Ngoài núi lửa trên mặt đất còn có những quả núi lửa hoạt động ngầm trong nước biển nữa.</p>
                    </div>

                    <!-- Đoạn 2 -->
                    <div class="p-3 rounded-2xl hover:bg-sky-50/50 cursor-pointer transition-all" onclick="docDoan46(2)">
                        <p class="indent-8">Để hiểu núi lửa hình thành ra sao, bạn cần biết Trái Đất được tạo bởi nhiều lớp khác nhau, y hệt một củ hành khổng lồ với nhiều lớp áo.</p>
                        <p class="indent-8">Lớp ngoài cùng của Trái Đất là lớp vỏ rất cứng, chính là nơi mà bạn đang đi đứng nhảy nhót phía trên. Dưới lớp vỏ, có những chỗ đá bị sức nóng nung chảy thành một thứ mác-ma đặc quánh. Thứ mác-ma này giống như cháo đặc lục bục sôi ở khoảng 746 đến 1 346 độ C. Do nhiều nguyên nhân, dòng mác-ma sôi sùng sục này có thể len lên trên, xuyên qua kẽ nứt ở lớp vỏ và phun trào, tạo thành núi lửa.</p>
                    </div>

                    <!-- Đoạn 3 -->
                    <div class="p-3 rounded-2xl hover:bg-sky-50/50 cursor-pointer transition-all" onclick="docDoan46(3)">
                        <p class="indent-8">Vậy là nếu mặt đất tự nhiên nứt ra và từ kẽ nứt đó trào ra một thứ đá nóng chảy, thì chắc chắn là chúng ta đang thấy một quả núi lửa đấy.</p>
                    </div>
                    
                    <p class="text-right text-sm font-semibold text-gray-800 italic mt-2">(Theo A-ni-ta Ga-nê-ri, Dương Kiều Hoa dịch)</p>
                </div>

                <!-- Khung thông tin động (Ý chính đoạn văn) -->
                <div id="pop-khoahoc-46" class="hidden p-4 bg-sky-50 border border-sky-100 rounded-2xl w-full text-center font-bold text-sky-800 text-base md:text-lg transition-all animate-in fade-in">
                </div>

                <!-- Từ ngữ chú thích -->
                <div class="bg-amber-50/60 p-5 rounded-2xl border border-amber-100 mt-4">
                    <h5 class="font-black text-amber-600 text-base md:text-lg mb-1">💡 Chú giải từ ngữ:</h5>
                    <p class="font-bold text-gray-800 text-sm md:text-base">🔸 <strong>Mác-ma:</strong> đá nóng chảy tồn tại trong lòng Trái Đất dưới nhiệt độ và áp suất rất cao.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 💡 Ý nghĩa / Thông điệp bài học -->
    <div class="p-8 rounded-[36px] bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-xl relative overflow-hidden mt-6">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <h4 class="text-xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
            <span>💡</span> Nội dung chính bài học
        </h4>
        <div class="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p class="text-xl md:text-4xl font-bold leading-relaxed text-center italic">
                "Bài văn giới thiệu một cách khoa học và sinh động về đặc điểm đa dạng của các loại núi lửa và cấu trúc các lớp vỏ của Trái Đất, từ đó khơi dậy trí tò mò khoa học, khao khát tìm hiểu và khám phá thế giới tự nhiên của học sinh."
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 CÂU HỎI ĐỌC HIỂU THEO SGK -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">📋</div>
            <div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Tìm hiểu bài: Trả lời câu hỏi đọc hiểu</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Em hãy nhấp vào từng câu hỏi dưới đây để trả lời và tìm hiểu chi tiết nội dung bài đọc nhé:</p>
            </div>
        </div>

        <div class="space-y-4">
            <!-- Câu 1 -->
            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm hover:shadow-md overflow-hidden transition-all">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                        1. Những đặc điểm dưới đây của núi lửa được miêu tả như thế nào? (Nhấp xem chi tiết)
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 border-t border-sky-50 pt-4 bg-sky-50/10 font-bold space-y-3 text-lg md:text-3xl">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-4 bg-white rounded-2xl border border-sky-100">
                            <p class="text-sky-800">🏔️ Hình dáng:</p>
                            <p class="text-base text-gray-800 font-bold mt-1">Không phải bao giờ cũng y như nhau: có quả hình nón đang bốc lửa, có quả lại hình tròn thoai thoải.</p>
                        </div>
                        <div class="p-4 bg-white rounded-2xl border border-sky-100">
                            <p class="text-sky-800">🔥 Hoạt động:</p>
                            <p class="text-base text-gray-800 font-bold mt-1">Một số phun lửa, số khác chỉ phun khói, khí hoặc các đám mây tro bụi.</p>
                        </div>
                        <div class="p-4 bg-white rounded-2xl border border-sky-100">
                            <p class="text-sky-800">🔊 Tiếng động:</p>
                            <p class="text-base text-gray-800 font-bold mt-1">Có quả nổ với tiếng động kinh hoàng, một số khác chỉ rít lên khe khẽ.</p>
                        </div>
                        <div class="p-4 bg-white rounded-2xl border border-sky-100">
                            <p class="text-sky-800">🌊 Vị trí:</p>
                            <p class="text-base text-gray-800 font-bold mt-1">Hoạt động trên mặt đất và hoạt động ngầm sâu trong lòng nước biển.</p>
                        </div>
                    </div>
                </div>
            </details>

            <!-- Câu 2 -->
            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm hover:shadow-md overflow-hidden transition-all">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                        2. Vì sao Trái Đất được miêu tả "y hệt một củ hành khổng lồ"? Em nghĩ gì về hình ảnh đó?
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-bold space-y-2 text-lg md:text-3xl">
                    <p>✔️ Trái Đất được ví với <strong>củ hành khổng lồ</strong> vì nó được cấu tạo gồm nhiều lớp khác nhau xếp chồng lên nhau, giống như các lớp áo xếp bọc lấy nhau của củ hành.</p>
                    <p>✔️ <strong>Ý kiến của em:</strong> Đây là một hình ảnh liên tưởng vô cùng sinh động, gần gũi, giúp người đọc (đặc biệt là học sinh) dễ dàng tưởng tượng và hiểu được cấu trúc địa chất phức tạp của Trái Đất một cách trực quan, vui vẻ.</p>
                </div>
            </details>

            <!-- Câu 3 -->
            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm hover:shadow-md overflow-hidden transition-all">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                        3. Lớp vỏ Trái Đất và mác-ma bên dưới được miêu tả như thế nào?
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-bold space-y-2 text-lg md:text-3xl">
                    <p>✔️ <strong>Lớp vỏ Trái Đất:</strong> Ở ngoài cùng, cấu tạo <strong>rất cứng</strong>, chính là nơi mà con người và sinh vật đang sinh sống, đi đứng, nhảy nhót phía trên.</p>
                    <p>✔️ <strong>Lớp mác-ma bên dưới:</strong> Bị sức nóng trong lòng đất nung chảy thành một thứ <strong>đặc quánh</strong>, giống như <em>"cháo đặc lục bục sôi"</em> ở nhiệt độ cực kỳ cao (từ 746 đến 1 346 độ C).</p>
                </div>
            </details>

            <!-- Câu 4 -->
            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm hover:shadow-md overflow-hidden transition-all">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                        4. Núi lửa được hình thành ra sao?
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-bold space-y-3 text-lg md:text-3xl">
                    <p>✔️ Núi lửa hình thành qua quy trình địa chất sau:</p>
                    <div class="space-y-2 text-base md:text-lg">
                        <div class="p-3 bg-white border border-sky-100 rounded-xl">
                            <span class="px-2 py-0.5 bg-sky-600 text-white rounded-lg text-xs font-black mr-2">Bước 1</span>
                            Đá trong lòng đất bị nhiệt độ cao nung chảy thành mác-ma đặc quánh sôi lục bục.
                        </div>
                        <div class="p-3 bg-white border border-sky-100 rounded-xl">
                            <span class="px-2 py-0.5 bg-sky-600 text-white rounded-lg text-xs font-black mr-2">Bước 2</span>
                            Dòng mác-ma sôi sùng sục len lên trên, tìm đường xuyên qua các kẽ nứt ở lớp vỏ cứng của Trái Đất.
                        </div>
                        <div class="p-3 bg-white border border-sky-100 rounded-xl">
                            <span class="px-2 py-0.5 bg-sky-600 text-white rounded-lg text-xs font-black mr-2">Bước 3</span>
                            Mác-ma trào mạnh ra khỏi mặt đất (hoặc mặt đáy biển), tạo ra vụ phun trào và hình thành quả núi lửa.
                        </div>
                    </div>
                </div>
            </details>

            <!-- Câu 5 -->
            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm hover:shadow-md overflow-hidden transition-all">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                        5. Trao đổi về các thông tin trong bài đọc theo gợi ý (đã biết, mới mẻ, thú vị...)
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-bold space-y-3 text-lg md:text-3xl">
                    <p>💬 Gợi ý thảo luận cùng các bạn trong lớp:</p>
                    <p>🔹 <strong>Thông tin em đã biết:</strong> Núi lửa phun dung nham nóng đỏ và có thể gây nguy hiểm cho khu dân cư xung quanh.</p>
                    <p>🔹 <strong>Thông tin mới đối với em:</strong> Dưới lòng đại dương sâu thẳm cũng có những ngọn núi lửa ngầm đang hoạt động.</p>
                    <p>🔹 <strong>Thông tin thú vị nhất:</strong> Trái Đất có lớp vỏ cứng giống hệt lớp áo ngoài cùng của một củ hành tây khổng lồ.</p>
                    <p>🔹 <strong>Thông tin em muốn biết thêm:</strong> Làm sao để các nhà khoa học dự báo trước được khi nào một ngọn núi lửa sắp phun trào?</p>
                </div>
            </details>
        </div>
    </section>

    <!-- 🔍 LUYỆN TẬP 2: TỪ VỰNG HIỆN TƯỢNG TỰ NHIÊN GÂY HẠI -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">2</div>
            <div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Luyện tập: Hiện tượng tự nhiên gây thiệt hại</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Tìm những từ ngữ chỉ hiện tượng tự nhiên có thể gây thiệt hại nặng nề cho đời sống con người (nhấp chọn những từ đúng):</p>
            </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 font-bold text-base md:text-lg text-sky-800">
            <!-- Động đất -->
            <button onclick="chonThienTai46(this, true)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl transition-all active:scale-95 text-center">
                🏠 Động đất
            </button>
            <!-- Gió nhẹ -->
            <button onclick="chonThienTai46(this, false)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl transition-all active:scale-95 text-center">
                🍃 Gió hiu hiu
            </button>
            <!-- Sóng thần -->
            <button onclick="chonThienTai46(this, true)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl transition-all active:scale-95 text-center">
                🌊 Sóng thần
            </button>
            <!-- Lũ lụt -->
            <button onclick="chonThienTai46(this, true)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl transition-all active:scale-95 text-center">
                🌧️ Lũ lụt, lũ quét
            </button>
            <!-- Cầu vồng -->
            <button onclick="chonThienTai46(this, false)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl transition-all active:scale-95 text-center">
                🌈 Cầu vồng sau mưa
            </button>
            <!-- Hạn hán -->
            <button onclick="chonThienTai46(this, true)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl transition-all active:scale-95 text-center">
                ☀️ Hạn hán kéo dài
            </button>
            <!-- Lốc xoáy -->
            <button onclick="chonThienTai46(this, true)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl transition-all active:scale-95 text-center">
                🌪️ Lốc xoáy dữ dội
            </button>
            <!-- Sương mù nhẹ -->
            <button onclick="chonThienTai46(this, false)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl transition-all active:scale-95 text-center">
                🌫️ Sương mù nhẹ
            </button>
        </div>
        <div id="fb-vn46-thientai" class="hidden p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 transition-all animate-in fade-in"></div>
    </section>
    <!-- 🔍 LUYỆN TẬP 3: PHÂN BIỆT NGHĨA GỐC - NGHĨA CHUYỂN -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">3</div>
            <div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Luyện tập: Phân biệt Nghĩa gốc và Nghĩa chuyển</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Xác định từ được in đậm dùng với nghĩa gốc hay nghĩa chuyển:</p>
            </div>
        </div>

        <div class="space-y-4">
            <!-- Cặp a -->
            <div class="p-5 bg-sky-50/30 rounded-2xl border border-sky-100 space-y-3 font-bold text-base md:text-lg">
                <p class="text-sky-800">a. Phân biệt nghĩa của từ <strong>quả</strong>:</p>
                <div class="flex flex-col gap-3">
                    <div class="flex flex-wrap items-center gap-3">
                        <span>• <strong>Quả</strong> núi</span>
                        <div class="flex gap-2">
                            <button onclick="checkNghiaGocChuyen(this, 'quanui', 'chuyen')" class="px-4 py-1.5 border-2 border-sky-100 rounded-xl bg-white hover:bg-sky-50 text-sm font-black transition-all">Nghĩa chuyển</button>
                            <button onclick="checkNghiaGocChuyen(this, 'quanui', 'goc')" class="px-4 py-1.5 border-2 border-sky-100 rounded-xl bg-white hover:bg-sky-50 text-sm font-black transition-all">Nghĩa gốc</button>
                        </div>
                        <span id="fb-quanui" class="hidden text-xs font-black"></span>
                    </div>
                    <div class="flex flex-wrap items-center gap-3">
                        <span>• <strong>Quả</strong> cam</span>
                        <div class="flex gap-2">
                            <button onclick="checkNghiaGocChuyen(this, 'quacam', 'goc')" class="px-4 py-1.5 border-2 border-sky-100 rounded-xl bg-white hover:bg-sky-50 text-sm font-black transition-all">Nghĩa gốc</button>
                            <button onclick="checkNghiaGocChuyen(this, 'quacam', 'chuyen')" class="px-4 py-1.5 border-2 border-sky-100 rounded-xl bg-white hover:bg-sky-50 text-sm font-black transition-all">Nghĩa chuyển</button>
                        </div>
                        <span id="fb-quacam" class="hidden text-xs font-black"></span>
                    </div>
                </div>
            </div>

            <!-- Cặp b -->
            <div class="p-5 bg-sky-50/30 rounded-2xl border border-sky-100 space-y-3 font-bold text-base md:text-lg">
                <p class="text-sky-800">b. Phân biệt nghĩa của từ <strong>lửa</strong>:</p>
                <div class="flex flex-col gap-3">
                    <div class="flex flex-wrap items-center gap-3">
                        <span>• Phun <strong>lửa</strong></span>
                        <div class="flex gap-2">
                            <button onclick="checkNghiaGocChuyen(this, 'phunlua', 'goc')" class="px-4 py-1.5 border-2 border-sky-100 rounded-xl bg-white hover:bg-sky-50 text-sm font-black transition-all">Nghĩa gốc</button>
                            <button onclick="checkNghiaGocChuyen(this, 'phunlua', 'chuyen')" class="px-4 py-1.5 border-2 border-sky-100 rounded-xl bg-white hover:bg-sky-50 text-sm font-black transition-all">Nghĩa chuyển</button>
                        </div>
                        <span id="fb-phunlua" class="hidden text-xs font-black"></span>
                    </div>
                    <div class="flex flex-wrap items-center gap-3">
                        <span>• Ngọn <strong>lửa</strong> ước mơ</span>
                        <div class="flex gap-2">
                            <button onclick="checkNghiaGocChuyen(this, 'uocmo', 'chuyen')" class="px-4 py-1.5 border-2 border-sky-100 rounded-xl bg-white hover:bg-sky-50 text-sm font-black transition-all">Nghĩa chuyển</button>
                            <button onclick="checkNghiaGocChuyen(this, 'uocmo', 'goc')" class="px-4 py-1.5 border-2 border-sky-100 rounded-xl bg-white hover:bg-sky-50 text-sm font-black transition-all">Nghĩa gốc</button>
                        </div>
                        <span id="fb-uocmo" class="hidden text-xs font-black"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ✍️ BÀI TẬP 4: BÀI TỰ LUẬN ĐẶT CÂU -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">4</div>
            <div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Thực hành viết câu với từ nhiều nghĩa</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Em hãy chọn một trong hai từ "quả" hoặc "lửa" để đặt hai câu: một câu theo nghĩa gốc, một câu theo nghĩa chuyển:</p>
            </div>
        </div>

        <div class="bg-sky-50/20 p-6 rounded-3xl border border-sky-100 space-y-4">
            <div class="space-y-2">
                <label class="font-black text-sky-800 text-sm block">📝 Viết các câu văn của em:</label>
                <textarea id="ans-vn46-writing" rows="4" placeholder="Ví dụ: 
- Câu nghĩa gốc: Cây cam trong vườn đã cho rất nhiều quả ngọt.
- Câu nghĩa chuyển: Con đường phía trước là cả quả đồi cao hiểm trở..." class="w-full p-4 border border-gray-100 rounded-2xl bg-white text-xl md:text-2xl font-semibold focus:border-sky-500 outline-none shadow-sm"></textarea>
            </div>
            
            <div class="flex justify-center gap-4">
                <button onclick="checkWritingVn46()" class="px-8 py-3.5 bg-sky-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-sky-600 active:scale-95 transition-all">NỘP BÀI GỬI THẦY E</button>
                <button onclick="resetWritingVn46()" class="px-6 py-3.5 bg-gray-800 hover:bg-gray-800 text-gray-900 font-black text-lg rounded-2xl transition-all active:scale-95">LÀM LẠI</button>
            </div>
            <div id="fb-vn46-writing" class="hidden p-5 rounded-2xl text-base font-bold shadow-md transition-all duration-346"></div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TIẾT -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiTiet46Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Văn bản 'Những ngọn núi nóng rẫy' viết về chủ đề khoa học tự nhiên nào?",
            "options": [
                "Vũ trụ và các hành tinh trong hệ Mặt Trời",
                "Cấu tạo bên trong Trái Đất và sự hình thành núi lửa",
                "Quá trình bồi đắp và xói mòn đất phù sa",
                "Sự sinh trưởng của các loài sinh vật biển sâu"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Thực tế, hình dáng của các ngọn núi lửa có đặc điểm gì?",
            "options": [
                "Tất cả đều là hình nón bốc lửa nóng rẫy",
                "Không phải bao giờ cũng giống nhau: có quả hình nón, có quả hình tròn thoai thoải",
                "Tất cả đều phẳng dẹt như mặt bàn ăn",
                "Có hình tam giác hoặc hình vuông nhọn hoắt"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Những hoạt động phun trào nào của núi lửa được miêu tả trong bài?",
            "options": [
                "Chỉ phun lửa nóng rực rỡ",
                "Một số phun lửa, một số chỉ phun khói, khí hoặc các đám mây tro",
                "Chỉ phun ra nước nóng và hơi sương mát mẻ",
                "Luôn phun ra đá quý và kim cương vàng óng"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Tiếng động của các quả núi lửa khi phun trào diễn ra như thế nào?",
            "options": [
                "Luôn im lặng hoàn toàn không có âm thanh",
                "Một số nổ vang kinh hoàng, một số khác chỉ rít lên khe khẽ",
                "Tạo ra âm nhạc rộn ràng vui tai",
                "Chỉ nghe thấy tiếng sấm chớp ầm ầm"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Núi lửa chỉ hoạt động trên mặt đất đúng hay sai?",
            "options": [
                "Đúng, núi lửa chỉ xuất hiện trên lục địa khô ráo",
                "Sai, vì còn có những quả núi lửa hoạt động ngầm sâu trong nước biển nữa",
                "Đúng, dưới biển nước lạnh quá núi lửa không cháy được",
                "Sai, núi lửa chỉ hoạt động trên bầu trời cao"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trái Đất được tác giả so sánh sinh động với sự vật gì?",
            "options": [
                "Một quả bóng hơi mềm mại",
                "Một củ hành khổng lồ với nhiều lớp áo",
                "Một cái đĩa khổng lồ bằng đá",
                "Một chiếc đồng hồ cát đang chảy"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Lớp vỏ ngoài cùng của Trái Đất có đặc tính gì?",
            "options": [
                "Rất mềm, ẩm ướt như bùn lầy",
                "Rất cứng, chính là nơi con người đang đi đứng nhảy nhót",
                "Nóng bỏng sôi sùng sục như cháo",
                "Mỏng manh dễ vỡ như bong bóng xà phòng"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Mác-ma trong lòng Trái Đất được miêu tả như thế nào?",
            "options": [
                "Một dòng sông mát lành chảy xiết",
                "Thứ đá bị sức nóng nung chảy thành đặc quánh, giống như cháo đặc lục bục sôi ở 746 - 1346 độ C",
                "Những mảnh bụi than đen mịn màng mát mẻ",
                "Các viên ngọc lấp lánh màu đỏ"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Dòng mác-ma nóng chảy len lên trên tạo thành núi lửa bằng cách nào?",
            "options": [
                "Hòa tan lớp vỏ cứng của Trái Đất trong nháy mắt",
                "Xuyên qua các kẽ nứt ở lớp vỏ cứng của Trái Đất rồi phun trào ra ngoài",
                "Thấm nhẹ từ từ qua các lỗ nhỏ li ti trên mặt đất",
                "Làm nổ tung nhân Trái Đất"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'mác-ma' có nghĩa là gì?",
            "options": [
                "Lớp vỏ đất cứng bên trên",
                "Đá nóng chảy trong lòng đất dưới nhiệt độ cao",
                "Những đám mây tro bụi màu xám",
                "Tiếng rít khe khẽ của núi lửa"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Hiện tượng tự nhiên nào dưới đây KHÔNG gây thiệt hại nặng nề cho đời sống con người?",
            "options": [
                "Động đất đổ sập nhà cửa",
                "Núi lửa phun dung nham nóng",
                "Lốc xoáy và lũ quét cuốn trôi hoa màu",
                "Cầu vồng rực rỡ xuất hiện sau cơn mưa"
            ],
            "answer": 3,
            "level": 0
        },
        {
            "question": "Từ 'quả' trong cụm từ nào dưới đây được dùng với nghĩa gốc?",
            "options": [
                "quả núi",
                "quả cam",
                "quả địa cầu",
                "quả cân"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'quả' trong cụm từ 'quả núi' được dùng với nghĩa gì?",
            "options": [
                "Nghĩa gốc – chỉ bộ phận của cây chứa hạt",
                "Nghĩa chuyển – chỉ vật có hình dáng giống quả (to tròn nhô lên)",
                "Từ đồng nghĩa không liên quan",
                "Nghĩa ban đầu cổ xưa"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'lửa' trong cụm từ nào dưới đây được dùng với nghĩa chuyển?",
            "options": [
                "bếp lửa hồng",
                "núi phun lửa",
                "ngọn lửa ước mơ",
                "lửa cháy bập bùng"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Tại sao 'ngọn lửa ước mơ' lại là nghĩa chuyển?",
            "options": [
                "Vì ước mơ có màu đỏ rực như ngọn lửa thật",
                "Vì nó dùng nghĩa chuyển tượng trưng cho nhiệt huyết, khát vọng ấm áp bừng cháy trong lòng con người",
                "Vì ước mơ có thể sinh nhiệt độ 1346 độ C",
                "Không có lý do cụ thể"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Thông tin nào dưới đây cho biết núi lửa hoạt động ngầm ở đáy biển vẫn có sức nóng?",
            "options": [
                "Vì bài thơ tả tiếng kêu chíp chiu của chim",
                "Vì bài học ghi rõ mác-ma nóng chảy trào ra từ kẽ nứt mặt đất và đáy biển",
                "Vì nước biển xung quanh bị đóng băng",
                "Tác giả tự suy đoán chứ không ghi nhận"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- LOGIC BÀI HỌC TIẾT 46-47 ---

// 1. Logic khởi động
window.xemKhoiDong46 = function(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle("hidden");
};



// 5. Click đọc đoạn văn bản gợi ý
const doanInfo46 = {
    1: "💡 <strong>Ý chính Đoạn 1:</strong> Giới thiệu sự đa dạng về hình dáng, tiếng động, hoạt động và vị trí của các quả núi lửa thực tế.",
    2: "💡 <strong>Ý chính Đoạn 2:</strong> Giải thích cấu tạo bên trong của Trái Đất (vỏ cứng, mác-ma sôi) và cơ chế hình thành nên núi lửa.",
    3: "💡 <strong>Ý chính Đoạn 3:</strong> Tổng kết dấu hiệu nhận biết khi núi lửa xuất hiện trên bề mặt đất."
};
window.docDoan46 = function(no) {
    const pop = document.getElementById("pop-khoahoc-46");
    if (pop) {
        pop.classList.remove("hidden");
        pop.innerHTML = doanInfo46[no];
        pop.className = "mt-4 p-4 bg-sky-50 border border-sky-100 rounded-2xl w-full text-center font-bold text-sky-800 text-base md:text-lg transition-all animate-in slide-in-from-bottom duration-346";
    }
};


// 6. Luyện tập 1: Chọn thiên tai gây hại
let selectedThienTai46 = new Set();
window.chonThienTai46 = function(btn, isCorrect) {
    const fb = document.getElementById("fb-vn46-thientai");
    if (!fb) return;

    fb.classList.remove("hidden");

    if (isCorrect) {
        btn.className = "p-4 bg-emerald-600 text-white border-2 border-emerald-100 rounded-2xl transition-all scale-95 text-center cursor-default";
        selectedThienTai46.add(btn.innerText.trim());
        fb.innerHTML = "✅ Đúng rồi! Hiện tượng này gây ra rất nhiều thiệt hại nguy hiểm cho con người.";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4 transition-all";
        
        // Đã chọn đủ 5 thiên tai
        if (selectedThienTai46.size >= 5) {
            fb.innerHTML = "🎉 Xuất sắc! Em đã tìm được đủ 5 hiện tượng tự nhiên có hại lớn gồm: Động đất, Sóng thần, Lũ lụt, Hạn hán, Lốc xoáy!";
        }
    } else {
        btn.className = "p-4 bg-rose-600 text-white border-2 border-rose-100 rounded-2xl transition-all scale-95 text-center cursor-default";
        fb.innerHTML = "❌ Chưa chính xác. Đây là hiện tượng bình thường hoặc mang tính thẩm mỹ, không gây hại lớn. Hãy thử chọn từ khác nhé!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-rose-50 text-rose-800 border border-rose-100 mt-4 transition-all";
        setTimeout(() => {
            btn.className = "p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl transition-all active:scale-95 text-center text-sky-800";
            fb.classList.add("hidden");
        }, 2046);
    }
};

// 7. Luyện tập 2: Xác định nghĩa gốc chuyển
const dapAnNghia46 = {
    quanui: "chuyen",
    quacam: "goc",
    phunlua: "goc",
    uocmo: "chuyen"
};
const giaiThich46 = {
    quanui: "✅ Đúng! 'Quả núi' là nghĩa chuyển (phát triển từ hình dáng quả của cây để chỉ vật to tròn).",
    quacam: "✅ Đúng! 'Quả cam' là nghĩa gốc (chỉ bộ phận chứa hạt của cây).",
    phunlua: "✅ Đúng! 'Phun lửa' là nghĩa gốc (chỉ ngọn lửa cháy thực tế của núi lửa).",
    uocmo: "✅ Đúng! 'Ngọn lửa ước mơ' là nghĩa chuyển (chỉ khát vọng, nhiệt huyết sục sôi bên trong)."
};

window.checkNghiaGocChuyen = function(btn, key, val) {
    const fb = document.getElementById(`fb-${key}`);
    if (!fb) return;

    fb.classList.remove("hidden");
    const isCorrect = dapAnNghia46[key] === val;

    if (isCorrect) {
        btn.className = "px-4 py-1.5 bg-emerald-600 text-white border-2 border-emerald-100 rounded-xl text-sm font-black cursor-default";
        fb.innerHTML = giaiThich46[key];
        fb.className = "text-xs font-black text-emerald-800 ml-2 animate-in fade-in";
        
        // Vô hiệu hóa nút còn lại
        const parent = btn.parentElement;
        if (parent) {
            const buttons = parent.querySelectorAll("button");
            buttons.forEach(b => {
                if (b !== btn) b.disabled = true;
            });
        }
    } else {
        btn.className = "px-4 py-1.5 bg-rose-600 text-white border-2 border-rose-100 rounded-xl text-sm font-black scale-95";
        fb.innerHTML = "❌ Thử lại nhé!";
        fb.className = "text-xs font-black text-rose-800 ml-2";
        setTimeout(() => {
            btn.className = "px-4 py-1.5 border-2 border-sky-100 rounded-xl bg-white hover:bg-sky-50 text-sm font-black transition-all";
            fb.classList.add("hidden");
        }, 1546);
    }
};

// 8. Nộp bài hoàn thành tiết học toàn cục
window.nopBaiTiet46Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback('Hoàn thành Tiết 46-47', '🌎', '<div class="text-center p-6"><span class="text-7xl block mb-4">🏆</span><p class="text-xl md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành xuất sắc bài đọc: Những ngọn núi nóng rẫy!</p><p class="text-xl text-gray-800 mt-3">Giờ đây em đã khám phá được cấu trúc kỳ diệu của Trái Đất và cơ chế hoạt động lý thú của núi lửa rồi đấy!</p></div>');
    }
};

// --- LOGIC TỰ LUẬN BÀI 3 AI CHẤM ---
window.checkWritingVn46 = function() {
    const val = document.getElementById("ans-vn46-writing").value.trim();
    const fb = document.getElementById("fb-vn46-writing");
    if (!fb) return;
    fb.classList.remove("hidden");

    if (val.length < 20) {
        fb.innerHTML = "⚠️ Đoạn văn của em hơi ngắn, em hãy cố gắng viết tối thiểu 20 ký tự nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-346";
        return;
    }

    const valLower = val.toLowerCase();
    const cp1 = valLower.includes("quả") || valLower.includes("lửa");

    if (!cp1) {
        fb.innerHTML = "⚠️ Trong câu viết của em chưa chứa từ 'quả' hoặc 'lửa' để phân biệt nghĩa gốc / nghĩa chuyển. Em hãy kiểm tra và bổ sung nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-346";
        return;
    }

    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-800">AI Thầy E nhận xét & Chấm điểm:</h5>
                <p class="text-lg mb-2">Rất tốt! Em đã đặt câu đúng ngữ pháp, sử dụng từ đa nghĩa chính xác và phân biệt rõ ràng giữa nghĩa gốc và nghĩa chuyển.</p>
                <span class="px-3 py-1 bg-emerald-600 rounded-lg font-bold text-lg md:text-3xl">Xếp loại: Đạt chất lượng tốt (146% ⭐)</span>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-emerald-600 text-white transition-all duration-346";
};

window.resetWritingVn46 = function() {
    const area = document.getElementById("ans-vn46-writing");
    if (area) area.value = "";
    const fb = document.getElementById("fb-vn46-writing");
    if (fb) fb.classList.add("hidden");
};
