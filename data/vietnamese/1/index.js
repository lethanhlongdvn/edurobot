export const lesson1 = {
    "topic": "Tiếng Việt 5",
    "week": "1",
    "period": "1",
    "title": "ĐỌC: THANH ÂM CỦA GIÓ",
    "desc": "Bài học đầu tiên môn Tiếng Việt 5: Đọc và cảm nhận vẻ đẹp của thiên nhiên cùng trò chơi kỳ diệu lắng nghe thanh âm của gió.",
    "subject": "Đọc",
    "theme": "Thế giới tuổi thơ",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-blue-600 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-blue-600 font-bold text-lg md:text-3xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Đọc trôi chảy, diễn cảm bài đọc "Thanh âm của gió", biết nhấn giọng ở những từ ngữ gợi tả âm thanh.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Hiểu được vẻ đẹp thiên nhiên thanh bình và tình bạn, tình cảm gia đình ấm áp qua trò chơi lắng nghe gió.
            </li>
        </ul>
    </div>

    <!-- 📖 Phần Bài đọc -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <!-- Văn bản đọc -->
            <div class="bg-blue-50/20 rounded-[28px] p-6 md:p-8 shadow-inner border border-blue-100/50">
                <div class="flex justify-between items-center mb-6 pb-4 border-b border-blue-100/50">
                    <h3 class="text-xl md:text-4xl font-black text-blue-600 flex items-center gap-2">
                        📖 Bài đọc: Thanh âm của gió
                    </h3>
                    <button onclick="playSegmentAudio('assets/audio/tiengviet/1/thanh_am_cua_gio.mp3')" class="p-3 bg-blue-600 hover:bg-blue-600 text-white rounded-full transition-all flex items-center justify-center shadow-sm hover:scale-105 active:scale-95" title="Nghe đọc toàn bài">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                    </button>
                </div>
                <div class="serif-font text-gray-800 text-lg md:text-4xl leading-relaxed text-justify space-y-4 overflow-hidden">
                    <!-- Minh họa SGK (Góc trên bên phải, bấm vào phóng to) -->
                    <div onclick="window.showMathFeedback('Thanh âm của gió', '🌾', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/1/1.png&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Thanh âm của gió&quot;&gt;&lt;p class=&quot;text-2xl font-bold text-blue-600 mt-4&quot;&gt;Đồng cỏ rộng thanh bình, dòng suối trong vắt lấp lánh cát sỏi.&lt;/p&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-gradient-to-br from-sky-50 to-blue-50 rounded-[32px] border-4 border-white shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group">
                        <img src="assets/images/tiengviet_5_1/1/1.png" class="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500" alt="Thanh âm của gió">
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Bấm để phóng to 🔍</div>
                    </div>

                    <p class="indent-10">Chúng tôi đi chăn trâu, ngày nào cũng qua suối. Cỏ gần nước tươi tốt nên trâu ăn cỏ men theo bờ suối, rồi mới lên đồi, lên núi. Suối nhỏ, nước trong vắt, nắng chiếu xuống đáy làm cát, sỏi ánh lên lấp lánh. Một bên suối là đồng cỏ rộng, tha hồ cho gió rong chơi. Thỉnh thoảng gió lại vút qua tai chúng tôi như đùa nghịch.</p>
                    <p class="indent-10">Chiều về, đàn trâu no cỏ đầm mình dưới suối, chúng tôi tha thẩn tìm những viên đá đẹp cho mình.</p>
                    <p class="indent-10">Bỗng em Bống nói:</p>
                    <p class="indent-10">– Ơ, em bịt tai lại nghe tiếng gió lạ lắm.</p>
                    <p class="indent-10">– Bịt tai thì nghe được gì? – Tôi hỏi Bống.</p>
                    <p class="indent-10">– Bịt tai lại rồi mở ra và cứ lặp lại như thế. Anh thử xem.</p>
                    <p class="indent-10">– Đúng rồi, tớ cũng nghe thấy tiếng gió thổi hay lắm. – Điệp reo lên.</p>
                    <p class="indent-10">Vừa nói, nó vừa lấy tay bịt hai tai rồi mở ra như Bống chỉ. Cả hội tụ lại, lần lượt đưa hai bàn tay lên bịt tai.</p>
                    <p class="indent-10">– Nghe “u... u... u...” – Văn cười.</p>
                    <p class="indent-10">– Không, phải thật im lặng, đầu mình nghĩ gì sẽ nghe tiếng gió nói ra như thế. – Thành nhíu mày như đang tập trung lắm.</p>
                    <p class="indent-10">– Đúng rồi, tớ nghe thấy “vui, vui, vui, vui...”.</p>
                    <p class="indent-10">– Còn tớ nghe thấy “cười, cười, cười, cười...”.</p>
                    <p class="indent-10">Mỗi đứa nghe thấy một thanh âm. Cứ thế, gió chiều thổi từ thung lũng dọc theo suối mang theo tiếng nói trong đầu mỗi đứa bay xa. Đứa nào cũng mê mải theo tiếng gió cho đến khi Văn la lên:</p>
                    <p class="indent-10">– Gió nói “đói, đói, đói... rồi.”.</p>
                    <p class="indent-10">Cả hội giật mình. Chiều đã muộn, mặt trời xuống thật thấp. Chúng tôi lùa trâu về, không quên đưa hai tay lên giữ tai để vẫn nghe tiếng gió.</p>
                    <p class="indent-10">Tối đó, tôi và Bống kể cho bố mẹ nghe về trò chơi bịt tai nghe tiếng gió. Bố bảo mới nghe chúng tôi kể thôi mà bố đã thích trò chơi ấy rồi. Bố còn nói nhất định sáng mai bố sẽ thử ngay xem gió nói điều gì.</p>
                    <p class="text-right font-bold text-gray-500 mt-6 md:text-3xl">(Theo Văn Thành Lê)</p>
                </div>
            </div>

            <!-- Từ ngữ cần nhớ -->
            <div class="bg-amber-50/70 p-6 rounded-[28px] border-2 border-dashed border-amber-200">
                <p class="text-sm font-black text-amber-600 uppercase tracking-widest mb-3 flex items-center gap-1">
                    <span>📝</span> Từ ngữ cần nhớ
                </p>
                <ul class="space-y-3 text-base md:text-2xl text-amber-600 font-medium">
                    <li>• <strong>Rong chơi</strong>: Đi chơi tự do, không có mục đích hay giới hạn địa điểm cố định.</li>
                    <li>• <strong>Tha thẩn</strong>: Dáng đi thong thả, chậm rãi, vừa đi vừa làm một việc gì đó không vội vã.</li>
                    <li>• <strong>Đầm mình</strong>: Ngâm cả thân mình dưới nước trong một thời gian dài (thường nói về trâu, bò).</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 💡 Nội dung chính bài học -->
    <div class="p-8 rounded-[36px] bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-xl relative overflow-hidden">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <h4 class="text-xl md:text-3xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
            <span>💡</span> Nội dung chính bài học
        </h4>
        <div class="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p class="text-xl md:text-4xl font-bold leading-relaxed text-center italic">
                "Bài đọc ca ngợi vẻ đẹp thiên nhiên hoang sơ, thanh bình nơi làng quê và sự hồn nhiên, tinh nghịch đầy sáng tạo của các bạn nhỏ khi tự tạo ra trò chơi lắng nghe thanh âm của gió."
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- PHẦN 1: TÌM HIỂU BÀI (ACCODION) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-blue-50">
        <div class="p-6 md:p-8 bg-blue-50/30 rounded-[32px]">
            <div class="space-y-4">
                <!-- Câu 1 -->
                <details class="group bg-white rounded-2xl border border-blue-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-blue-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-blue-700 transition-colors text-lg md:text-3xl">
                            1. Khung cảnh thiên nhiên khi các bạn nhỏ đi chăn trâu được miêu tả thế nào?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-blue-50 pt-4 bg-blue-50/10 text-lg md:text-3xl font-medium">
                        <p class="text-blue-600 font-bold mb-2">💡 Trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li>Cỏ tươi tốt mọc gần dòng nước bờ suối.</li>
                            <li>Dòng suối nhỏ nước trong vắt, dưới đáy cát và sỏi lấp lánh dưới ánh nắng chiếu xuống.</li>
                            <li>Đồng cỏ rộng mênh mông, bát ngát là nơi cho gió rong chơi, thổi vút qua tai vui nghịch.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 2 -->
                <details class="group bg-white rounded-2xl border border-blue-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-blue-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-blue-700 transition-colors text-lg md:text-3xl">
                            2. Em Bống đã phát hiện ra trò chơi gì? Theo em, vì sao các bạn thích trò chơi đó?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-blue-50 pt-4 bg-blue-50/10 text-lg md:text-3xl font-medium">
                        <p class="text-blue-600 font-bold mb-2">💡 Trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li><strong>Phát hiện của Bống:</strong> Trò chơi bịt hai tai lại rồi mở ra, cứ thế lặp đi lặp lại liên tục để lắng nghe tiếng gió.</li>
                            <li><strong>Vì sao các bạn thích:</strong> Trò chơi tạo ra những âm thanh vô cùng kì diệu (u... u... u...). Hơn thế nữa, khi im lặng và tập trung suy nghĩ điều gì trong đầu, gió sẽ thì thầm phản hồi lại chính những điều đó (vui vui vui, cười cười cười, đói đói đói...).</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 3 -->
                <details class="group bg-white rounded-2xl border border-blue-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-blue-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-blue-700 transition-colors text-lg md:text-3xl">
                            3. Việc bố hưởng ứng trò chơi của hai anh em nói lên điều gì? Chọn câu trả lời dưới đây hoặc nêu ý kiến của em.
                        </span>
                        <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-blue-50 pt-4 bg-blue-50/10 text-lg md:text-3xl font-medium">
                        <p class="text-blue-600 font-bold mb-2">💡 Trả lời:</p>
                        <p class="mb-3">Bài học đưa ra 3 phương án lựa chọn:</p>
                        <ul class="list-disc ml-6 space-y-2 mb-4">
                            <li>A. Trò chơi hấp dẫn đến mức người lớn cũng thích chơi.</li>
                            <li>B. Bố khuyến khích các con chơi những trò chơi ngoài trời.</li>
                            <li>C. Bố muốn hoà nhập vào thế giới trẻ thơ của các con.</li>
                        </ul>
                        <p class="italic text-gray-800">Học sinh chọn phương án nào cũng đúng vì hành động của người bố thể hiện cả 3 khía cạnh: vừa yêu con, muốn đồng hành cùng con, vừa trân trọng sự sáng tạo trẻ thơ của các con.</p>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- PHẦN 2: LUYỆN TẬP TƯƠNG TÁC TỰ LUẬN (CHẤM ĐIỂM BẰNG AI THẦY E) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-xl md:text-2xl font-black shadow-md">✏️</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Luyện viết & Tưởng tượng</h3>
            </div>

            <!-- Bài tập 1: Tương tác Chọn ý kiến (Câu 3 SGK) -->
            <div class="mb-10 bg-white p-6 rounded-3xl border border-amber-100 shadow-inner">
                <h4 class="text-lg md:text-3xl font-bold text-gray-900 mb-4 flex items-start gap-2">
                    <span class="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm mt-0.5 shadow-sm">1</span>
                    Chọn ý kiến của em về việc bố hưởng ứng trò chơi bịt tai nghe gió:
                </h4>
                <div class="grid grid-cols-1 gap-4 text-base md:text-2xl">
                    <button onclick="selectOptionVn1('A')" id="btn-vn1-opt-A" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-amber-400 hover:bg-amber-50/30 transition-all text-gray-800">
                        A. Trò chơi hấp dẫn đến mức người lớn cũng thích chơi.
                    </button>
                    <button onclick="selectOptionVn1('B')" id="btn-vn1-opt-B" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-amber-400 hover:bg-amber-50/30 transition-all text-gray-800">
                        B. Bố khuyến khích các con chơi những trò chơi ngoài trời.
                    </button>
                    <button onclick="selectOptionVn1('C')" id="btn-vn1-opt-C" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-amber-400 hover:bg-amber-50/30 transition-all text-gray-800">
                        C. Bố muốn hoà nhập vào thế giới trẻ thơ của các con.
                    </button>
                </div>
                <div id="vn1-opt-feedback" class="hidden mt-4 p-4 rounded-xl font-bold text-lg"></div>
            </div>

            <!-- Bài tập 2: Viết câu tưởng tượng (Câu 4 SGK) -->
            <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner">
                <h4 class="text-lg md:text-3xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                    <span class="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm mt-0.5 shadow-sm">2</span>
                    <div>
                        <span>Tưởng tượng em cũng tham gia vào trò chơi bịt tai nghe gió, nói với các bạn điều em nghe thấy.</span>
                        <button onclick="toggleSpeechRecVn1()" class="p-2 bg-amber-500 text-amber-600 rounded-full hover:bg-amber-500 transition-all text-sm shadow-sm ml-2" title="Nhập bằng giọng nói">🎙️</button>
                    </div>
                </h4>
                
                <textarea id="ans-vn1-writing" rows="4" placeholder="Ví dụ: Khi em bịt tai rồi mở ra giữa đồng cỏ rộng lớn, gió thì thầm vào tai em tiếng rì rào: 'Hãy vui lên, đồng cỏ quê mình thật tuyệt vời!'..." class="w-full p-4 md:p-6 text-xl md:text-3xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-amber-50/10 mb-6 font-medium leading-relaxed"></textarea>
                
                <div class="flex justify-end items-center gap-4"><button onclick="resetWritingVn1()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="checkWritingVn1();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                
                <div id="fb-vn1-writing" class="hidden mt-6 p-6 bg-amber-500 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500">
                    <!-- AI Feedback will show here -->
                </div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TOÀN BỘ -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiVn1()" class="px-12 py-5 bg-gradient-to-r from-blue-600 to-sky-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-blue-600 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Các bạn nhỏ trong bài đọc thường qua con suối để làm hoạt động gì?",
            "options": [
                "Đi tắm suối",
                "Đi chăn trâu",
                "Đi hái củi",
                "Đi bắt cá"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Vì sao trâu của các bạn nhỏ thường ăn cỏ men theo bờ suối?",
            "options": [
                "Vì cỏ ở gần nước tươi tốt hơn",
                "Vì trâu thích ngắm dòng suối",
                "Vì các bạn nhỏ không cho trâu lên đồi",
                "Vì bờ suối có bóng cây mát mẻ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Con suối được miêu tả có những đặc điểm nào?",
            "options": [
                "Rộng mênh mông, nước đục ngầu",
                "Nhỏ, nước trong vắt, sỏi đá lấp lánh dưới nắng",
                "Sâu hun hút, nhiều ghềnh thác hiểm trở",
                "Chảy xiết qua thung lũng sâu hoắm"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Vật gì nằm ở một bên dòng suối?",
            "options": [
                "Một khu rừng rậm rạp",
                "Một đồng cỏ rộng rãi",
                "Một vách đá cao dựng đứng",
                "Một đồi chè cổ thụ bạt ngàn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Hành động đùa nghịch của gió đối với các bạn nhỏ là gì?",
            "options": [
                "Thổi bay nón của các bạn nhỏ",
                "Vút qua tai các bạn nhỏ",
                "Làm đục nước dòng suối nhỏ",
                "Cuốn bay những viên đá đẹp"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Chiều về, các bạn nhỏ làm gì trong lúc trâu đầm mình dưới suối?",
            "options": [
                "Bơi lội thi với nhau",
                "Tha thẩn tìm những viên đá đẹp",
                "Thổi sáo gọi trâu về chuồng",
                "Nằm ngủ trên bãi cỏ rộng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Ai là người đầu tiên phát hiện ra trò chơi nghe tiếng gió lạ?",
            "options": [
                "Báo Thành",
                "Em Bống",
                "Bạn Điệp",
                "Bạn Văn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cách chơi trò bịt tai nghe gió được Bống hướng dẫn như thế nào?",
            "options": [
                "Bịt tai lại rồi nhắm mắt im lặng",
                "Bịt tai lại rồi mở ra và cứ lặp lại như thế",
                "Úp cả hai tai sát xuống mặt suối",
                "Bịt một bên tai và lắng tai nghe bên còn lại"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi cả hội bịt tai theo Bống chỉ, Văn đã reo lên nghe thấy âm thanh gì?",
            "options": [
                "Nghe u... u... u...",
                "Nghe rì rào... rì rào...",
                "Nghe vui, vui, vui...",
                "Nghe đói, đói, đói..."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Thành chia sẻ bí quyết gì để nghe được tiếng gió 'nói'?",
            "options": [
                "Phải nhắm mắt thật chặt",
                "Phải thật im lặng, đầu mình nghĩ gì sẽ nghe tiếng gió nói ra như thế",
                "Phải ngồi quay lưng lại hướng gió thổi",
                "Phải vừa bịt tai vừa hát vang lên"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Điệp đã nghe thấy gió nói từ gì khi chơi trò bịt tai?",
            "options": [
                "Cười, cười, cười...",
                "Vui, vui, vui...",
                "U... u... u...",
                "Đói, đói, đói..."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Chi tiết nào giúp cả hội giật mình nhận ra trời đã tối muộn?",
            "options": [
                "Tiếng trâu kêu đòi về chuồng",
                "Văn la lên gió nói 'đói, đói, đói... rồi.'",
                "Gió thổi mạnh lạnh buốt sống lưng",
                "Mẹ đi ra suối gọi các con về"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi lùa trâu về nhà, các bạn nhỏ đã làm hành động gì?",
            "options": [
                "Chạy thật nhanh về nhà",
                "Đưa hai tay lên giữ tai để vẫn nghe tiếng gió",
                "Nhặt thêm nhiều viên đá đẹp bên suối",
                "Hát vang bài ca chăn trâu"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Phản ứng của người bố khi nghe hai con kể về trò chơi bịt tai nghe gió?",
            "options": [
                "Bảo trò chơi đó rất nguy hiểm",
                "Nói đã thích trò chơi ấy và sáng mai sẽ thử xem gió nói điều gì",
                "Không quan tâm và bảo các con đi ngủ sớm",
                "Khuyên các con chỉ nên chăn trâu không nên đùa nghịch"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nội dung câu chuyện 'Thanh âm của gió' gợi cho em cảm nhận gì?",
            "options": [
                "Kỷ niệm chăn trâu vất vả, gian nan",
                "Vẻ đẹp trong sáng của tuổi thơ gắn liền với thiên nhiên quê hương thanh bình",
                "Sự kì bí, đáng sợ của những hiện tượng tự nhiên",
                "Lợi ích kinh tế của việc chăn thả gia súc bên bờ suối"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};


// --- LOGIC TƯƠNG TÁC TIẾT 1 ---
window.selectOptionVn1 = function(option) {
    const feedback = document.getElementById('vn1-opt-feedback');
    if (!feedback) return;
    feedback.classList.remove('hidden');
    
    // Reset buttons styles
    ['A', 'B', 'C'].forEach(opt => {
        const btn = document.getElementById(`btn-vn1-opt-${opt}`);
        if (btn) btn.className = "p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-amber-400 hover:bg-amber-50/30 transition-all text-gray-700";
    });

    const selectedBtn = document.getElementById(`btn-vn1-opt-${option}`);
    if (selectedBtn) {
        selectedBtn.className = "p-4 bg-emerald-500 border-2 border-emerald-500 text-white rounded-xl font-bold text-left shadow-md transition-all";
    }

    feedback.innerHTML = `✅ Em chọn đáp án ${option}. Đây là một góc nhìn rất hay! Bố hưởng ứng trò chơi giúp hòa nhập vào thế giới tuổi thơ của các con và khuyến khích sự sáng tạo.`;
    feedback.className = "mt-4 p-4 rounded-xl font-bold text-lg md:text-2xl bg-emerald-500 text-white animate-fade-in";
};

window.checkWritingVn1 = function() {
    const text = document.getElementById('ans-vn1-writing')?.value.trim();
    const fb = document.getElementById('fb-vn1-writing');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text || text.length < 15) {
        fb.innerHTML = "⚠️ Đoạn văn của em hơi ngắn hoặc chưa nhập gì. Hãy viết ít nhất 2-3 câu để chia sẻ cảm nhận nhé!";
        fb.className = "mt-6 p-6 bg-amber-900 text-white rounded-2xl shadow-xl font-bold text-lg md:text-2xl";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs md:text-sm font-black text-amber-300 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
            <p class="text-lg md:text-2xl font-bold">"Tuyệt vời! Em đã tưởng tượng và kể lại những thanh âm kỳ diệu của gió rất sinh động. Lời thì thầm của gió khuyên chúng ta yêu thiên nhiên, trân trọng cuộc sống bình yên thật ý nghĩa."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-600 font-bold text-xs md:text-sm rounded-full shadow-sm mt-2">Điểm: 100% (Hoàn thành xuất sắc)</span>
        </div>
    `;
    fb.className = "mt-6 p-6 bg-emerald-600 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500";
};

window.resetWritingVn1 = function() {
    const txt = document.getElementById('ans-vn1-writing');
    if (txt) txt.value = "";
    const fb = document.getElementById('fb-vn1-writing');
    if (fb) fb.classList.add('hidden');
};

window.nopBaiVn1 = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 1', 
            '🌾', 
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🌾</span><p class="text-lg md:text-2xl font-bold text-blue-600">Chúc mừng em đã hoàn thành bài đọc Thanh âm của gió!</p><p class="text-lg text-gray-600 mt-3">Em đã cảm nhận được vẻ đẹp trong trẻo của thiên nhiên và tình cảm gia đình, bạn bè ấm áp.</p></div>'
        );
    }
};

window.toggleSpeechRecVn1 = function() {
    const txt = document.getElementById('ans-vn1-writing');
    if (!txt) return;
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert("Trình duyệt không hỗ trợ nhận diện giọng nói.");
        return;
    }
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    const rec = new SpeechRec();
    rec.lang = 'vi-VN';
    rec.onstart = () => {
        txt.placeholder = "🎙️ Đang lắng nghe con nói...";
    };
    rec.onresult = (event) => {
        const result = event.results[0][0].transcript;
        txt.value = txt.value ? txt.value + " " + result : result;
        txt.placeholder = "Nhập bài cảm thụ của con...";
    };
    rec.onerror = () => {
        txt.placeholder = "Nhập bài cảm thụ của con...";
    };
    rec.start();
};
