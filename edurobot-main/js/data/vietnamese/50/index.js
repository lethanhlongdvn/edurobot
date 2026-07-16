export const lesson50 = {

    "topic": "Tiếng Việt 5",

    "week": "8",

    "period": "50",

    "title": "ĐỌC: BÀI CA VỀ MẶT TRỜI",

    "desc": "Bài học giúp học sinh cảm nhận vẻ đẹp rực rỡ, sống động của cảnh bình minh và tình yêu thiên nhiên thiết tha qua những liên tưởng ngộ nghĩnh của nhân vật tôi.",

    "subject": "Đọc",

    "theme": "Thế giới tuổi thơ",

    "content": `

<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">

    <!-- 🎯 Mục tiêu bài học -->

    <div class="bg-amber-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-amber-600 shadow-lg relative overflow-hidden">

        <div class="absolute -right-10 -top-10 w-32 h-32 bg-amber-100/40 rounded-full blur-2xl animate-pulse"></div>

        <h3 class="text-2xl md:text-5xl font-black text-amber-900 mb-4 flex items-center gap-3">

            <span class="p-2 bg-amber-500 text-white rounded-xl shadow-md">🎯</span>

            Mục tiêu bài học

        </h3>

        <ul class="space-y-3 text-amber-600 font-bold text-xl md:text-2xl ml-2">

            <li class="flex items-start gap-2">

                <span class="text-amber-900 font-black">•</span>

                Đọc diễn cảm bài "Bài ca về mặt trời", biết nhấn giọng ở các từ ngữ gợi tả vẻ đẹp của bình minh và sự sinh động của thiên nhiên.

            </li>

            <li class="flex items-start gap-2">

                <span class="text-amber-900 font-black">•</span>

                Cảm nhận được tình yêu thiên nhiên, trí tưởng tượng phong phú và những liên tưởng độc đáo, ngộ nghĩnh của tác giả về mặt trời.

            </li>

            <li class="flex items-start gap-2">

                <span class="text-amber-900 font-black">•</span>

                Học thuộc lòng khổ thơ ngắn "Bài ca về mặt trời" ở cuối bài đọc.

            </li>

        </ul>

    </div>



    <!-- 🎮 KHỞI ĐỘNG -->

    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-amber-100 shadow-xl space-y-6">

        <div class="flex items-center gap-4 mb-2">

            <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>

            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động: Chia sẻ cảm xúc</h3>

        </div>

        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Hãy chia sẻ với bạn suy nghĩ, cảm xúc của em khi được ngắm nhìn cảnh mặt trời mọc (bình minh) hoặc mặt trời lặn (hoàng hôn):</p>

        

        <div class="space-y-4">

            <textarea id="ans-vn50-kd" rows="3" placeholder="Ví dụ: Mỗi lần ngắm bình minh trên biển, em cảm thấy vô cùng khoan khoái và tràn đầy năng lượng. Vầng mặt trời đỏ rực từ từ nhô lên từ phía chân trời, nhuộm hồng cả mặt nước tạo nên một bức tranh thiên nhiên tuyệt đẹp..." class="w-full p-4 border-2 border-amber-100 rounded-2xl outline-none focus:border-amber-500 font-bold bg-amber-50/10 text-xl md:text-2xl text-gray-800"></textarea>

            <div class="flex justify-center">

                <button onclick="checkKD50()" class="px-8 py-3 bg-amber-500 text-white font-black rounded-xl hover:bg-amber-500 transition-all text-base shadow-md">GỬI SUY NGHĨ ✓</button>

            </div>

            <div id="fb-vn50-kd" class="hidden p-4 rounded-xl text-sm font-bold text-center mt-2"></div>

        </div>

    </div>



    <!-- 📖 BÀI ĐỌC: BÀI CA VỀ MẶT TRỜI -->

    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-amber-100 shadow-xl relative overflow-hidden">

        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-60"></div>



        <div class="relative z-10 space-y-6">

            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-amber-100 pb-4 gap-4">

                <span class="text-amber-900 font-black text-2xl md:text-3xl flex items-center gap-2">

                    <span>📖</span> Bài ca về mặt trời

                </span>



                <div class="flex items-center gap-3">

                    <!-- Audio mẫu -->

                    <button onclick="playSegmentAudio('assets/audio/tiengviet/50/bai_ca_ve_mat_troi.mp3')" class="p-3 bg-amber-500 hover:bg-amber-500 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc mẫu">

                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>

                    </button>

                </div>

            </div>



            <!-- Nội dung bài đọc -->

            <div class="space-y-8">

                <div class="w-full bg-orange-50/20 p-6 md:p-8 rounded-[40px] border border-orange-100/50 shadow-inner space-y-6 text-gray-800 text-xl md:text-2xl font-normal leading-relaxed relative overflow-hidden">

                    <!-- Minh họa thật phóng to -->

                    <div onclick="window.showMathFeedback('Mặt trời mọc', '🌅', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/50/50.png&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Mặt trời mọc&quot;&gt;&lt;p class=&quot;text-2xl font-bold text-amber-600 mt-4&quot;&gt;Vẻ đẹp rực rỡ của vầng mặt trời đỏ chói như mâm đồng đang nhô lên.&lt;/p&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-gradient-to-br from-amber-50 to-orange-50 rounded-[32px] border-4 border-white shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group">

                        <img src="assets/images/tiengviet_5_1/50/50.png" class="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500" alt="Mặt trời mọc">

                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Bấm để phóng to 🔍</div>

                    </div>

                    <p class="indent-8 text-justify">

                        Không hiểu sao, tôi thức dậy rất sớm. Sương mù như tấm khăn voan mỏng màu sữa bay la đà trên những khóm cây quanh vườn, trùm lấp một khoảng sân. Tôi chợt nhận ra, trên những ngọn cau cao, chim sẻ thi nhau cất tiếng hót. Tôi lắng tai nghe. Dàn đồng ca chim sẻ khi bổng khi trầm, khi nhanh khi chậm, xôn xao vòm không gian. Chúng đang hát về cái gì vậy? Tôi không thể biết được. Nhưng rõ ràng là chúng đã trông thấy một cái gì đó mà tôi không thể cùng trông thấy được.

                    </p>

                    <p class="indent-8 text-justify">

                        Tôi ngước nhìn về phương đông, sau vòm cây xanh thẫm bỗng nhô lên nửa vành mũ màu đỏ. Chiếc mũ đỏ to lớn nhô dần lên trên nền trời buổi sớm. Cuối cùng chiếc mũ đỏ bay lên khỏi vòm cây. Đấy là vầng mặt trời. Vầng mặt trời giống một chiếc mâm đồng đỏ bay từ từ chiếm lĩnh nền trời xa, rộng. Chim sẻ càng cất cao giọng, chiếc mâm đồng đỏ càng nhích dần lên.

                    </p>

                    <p class="indent-8 text-justify">

                        Vầng mặt trời đã lên từ bao giờ? Chắc là nó đã nhô lên khỏi mặt biển trước khi nhô lên khỏi vòm cây. Trái tim tôi bỗng vang lên một bài ca hoà với bài ca của những con chim sẻ trên trời cao. Bài ca về mặt trời.

                    </p>

                    

                    <!-- Khổ thơ cuối -->

                    <div class="border-t border-amber-100 pt-6 mt-6">

                        <div class="flex justify-between items-center mb-4">

                            <span class="text-amber-600 font-extrabold text-lg md:text-xl flex items-center gap-1">✨ Khổ thơ thuộc lòng:</span>

                            <!-- Luyện thuộc lòng -->

                            <div class="flex items-center gap-1.5 bg-amber-50 p-1.5 rounded-xl border border-amber-100 shadow-inner">

                                <button onclick="toggleMemorizeVn50('show')" class="px-2.5 py-1 bg-white hover:bg-amber-500 text-amber-600 font-bold rounded-lg text-xs shadow-sm transition-all">Hiện hết</button>

                                <button onclick="toggleMemorizeVn50('easy')" class="px-2.5 py-1 bg-amber-500 text-white font-bold rounded-lg text-xs shadow-sm transition-all hover:bg-amber-500">Che ít</button>

                                <button onclick="toggleMemorizeVn50('hard')" class="px-2.5 py-1 bg-red-600 text-white font-bold rounded-lg text-xs shadow-sm transition-all hover:bg-red-600">Che nhiều</button>

                            </div>

                        </div>



                        <div id="poem-box-vn50" class="serif-font text-left text-gray-900 leading-loose py-6 px-8 md:px-16 bg-amber-50/30 rounded-3xl border border-amber-100/40 max-w-xl mx-auto space-y-1 text-xl md:text-4xl">
                            <p><span class="mem-word">Mâm đồng đỏ</span>. <span class="mem-word">Mâm đồng đỏ</span></p>
                            <p>Suốt đêm <span class="mem-word">tắm biển</span></p>
                            <p>Làm nước <span class="mem-word">biển sôi</span></p>
                            <p>Ngày <span class="mem-word">trở về trời</span></p>
                            <p><span class="mem-word">Mâm đồng đỏ</span> không nguội</p>
                            <p><span class="mem-word">Mâm đồng đỏ</span> chói.</p>
                            <p>Mặt trời. Mặt trời...</p>
                        </div>
                    </div>

                    <p class="text-right font-bold text-gray-800 text-lg md:text-xl mt-4 italic">(Theo Nguyễn Trọng Tạo)</p>
                </div>

                <!-- Các khối thông tin bổ trợ -->
                <div class="w-full">
                    <!-- Chú giải từ khó -->
                    <div class="bg-amber-50/70 p-6 md:p-8 rounded-[28px] border-2 border-dashed border-amber-200">
                        <p class="text-xs font-black text-amber-600 uppercase tracking-widest mb-3 flex items-center gap-1">
                            <span>📝</span> Chú giải từ khó
                        </p>
                        <ul class="space-y-4 text-xl md:text-2xl text-amber-600 font-bold leading-relaxed">
                            <li>• <strong>Khăn voan</strong>: loại khăn mỏng, nhẹ và trong suốt, thường dùng làm trang sức cho phụ nữ.</li>
                            <li>• <strong>La đà</strong>: sà xuống thấp và di động nhè nhẹ qua lại.</li>
                            <li>• <strong>Chiếm lĩnh</strong>: làm chủ, bao trùm lên toàn bộ khoảng không gian.</li>
                            <li>• <strong>Mâm đồng</strong>: vật dụng làm bằng đồng có hình tròn, lòng nông, thường dùng để bày đồ ăn.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <!-- 💡 Ý nghĩa / Thông điệp bài học -->

    <div class="p-8 rounded-[36px] bg-gradient-to-r from-amber-600 to-orange-500 text-white shadow-xl relative overflow-hidden mt-6">

        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>

        <h4 class="text-xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">

            <span>💡</span> Nội dung chính bài học

        </h4>

        <div class="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">

            <p class="text-xl md:text-4xl font-bold leading-relaxed text-center italic">

                "Bài văn ca ngợi vẻ đẹp huy hoàng, rực rỡ và tràn đầy sức sống của cảnh mặt trời mọc buổi sớm (bình minh) qua tâm hồn trẻ thơ giàu tưởng tượng, độc đáo và đầy tình cảm đối với thiên nhiên tươi đẹp xung quanh."

            </p>

        </div>

    </div>

</div>

`,

    "practice": `

<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">

    <!-- CÂU HỎI ĐỌC HIỂU -->

    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">

        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">

            <div class="flex items-center gap-4 mb-2">

                <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">❓</div>

                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Câu hỏi Đọc hiểu (Trang 73)</h3>

            </div>



            <div class="space-y-4">

                <!-- Câu 1 -->

                <details class="group bg-white rounded-2xl border border-amber-100 shadow-sm transition-all hover:shadow-md overflow-hidden">

                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-amber-50/50 transition-colors">

                        <span class="font-bold text-gray-800 group-hover:text-amber-700 transition-colors text-lg md:text-3xl">

                            1. Đàn chim sẻ làm gì khiến nhân vật “tôi” chú ý? Nhân vật “tôi” nghĩ gì về chuyện đó?

                        </span>

                        <div class="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">

                            <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>

                        </div>

                    </summary>

                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-amber-50 pt-4 bg-amber-50/10 font-medium space-y-2 text-lg md:text-3xl">

                        <p class="text-emerald-800 font-bold mb-1">💡 Gợi ý trả lời:</p>

                        <p>

                            - Đàn chim sẻ thi nhau cất tiếng hót trên những ngọn cau cao vút, tạo nên một dàn đồng ca xôn xao cả vòm không gian lúc bổng lúc trầm, lúc nhanh lúc chậm khiến nhân vật "tôi" chú ý.

                        </p>

                        <p>

                            - Nhân vật "tôi" phỏng đoán rằng đàn chim sẻ đang hát về một điều kỳ diệu mà chúng đã trông thấy, nhưng bản thân nhân vật "tôi" lại không thể nhìn thấy được.

                        </p>

                    </div>

                </details>



                <!-- Câu 2 -->

                <details class="group bg-white rounded-2xl border border-amber-100 shadow-sm transition-all hover:shadow-md overflow-hidden">

                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-amber-50/50 transition-colors">

                        <span class="font-bold text-gray-800 group-hover:text-amber-700 transition-colors text-lg md:text-3xl">

                            2. Cảnh mặt trời mọc được miêu tả như thế nào?

                        </span>

                        <div class="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">

                            <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>

                        </div>

                    </summary>

                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-amber-50 pt-4 bg-amber-50/10 font-medium space-y-2 text-lg md:text-3xl">

                        <p class="text-emerald-800 font-bold mb-1">💡 Gợi ý trả lời:</p>

                        <p>Cảnh mặt trời mọc được tả chi tiết theo trình tự thời gian:</p>

                        <ul class="list-disc list-inside space-y-1">

                            <li>Ban đầu, sau vòm cây xanh thẫm nhô lên <em>nửa vành mũ màu đỏ</em>.</li>

                            <li>Chiếc mũ đỏ to lớn nhô dần lên trên nền trời buổi sớm rồi bay lên khỏi vòm cây.</li>

                            <li>Khi đã lên cao, vầng mặt trời giống như một <em>chiếc mâm đồng đỏ</em> bay từ từ chiếm lĩnh nền trời xa, rộng.</li>

                        </ul>

                    </div>

                </details>



                <!-- Câu 3 -->

                <details class="group bg-white rounded-2xl border border-amber-100 shadow-sm transition-all hover:shadow-md overflow-hidden">

                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-amber-50/50 transition-colors">

                        <span class="font-bold text-gray-800 group-hover:text-amber-700 transition-colors text-lg md:text-3xl">

                            3. Vì sao nhân vật “tôi” liên tưởng mặt trời như chiếc mũ đỏ rồi lại như chiếc mâm đồng đỏ?

                        </span>

                        <div class="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">

                            <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>

                        </div>

                    </summary>

                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-amber-50 pt-4 bg-amber-50/10 font-medium space-y-2 text-lg md:text-3xl">

                        <p class="text-emerald-800 font-bold mb-1">💡 Gợi ý trả lời:</p>

                        <p>

                            Tác giả liên tưởng như vậy dựa trên vị trí và hình dáng của mặt trời khi mọc:

                        </p>

                        <ul class="list-disc list-inside space-y-1">

                            <li>Khi mới nhô lên sau vòm cây, mặt trời chỉ xuất hiện một nửa, có hình dáng cong tròn giống như <strong>nửa vành mũ đỏ</strong> sặc sỡ.</li>

                            <li>Khi mặt trời đã bay cao lên khỏi vòm cây, nó hiện lên đầy đặn, tròn trịa, sáng rực rỡ và có màu đỏ rực như đồng nung, tựa như một chiếc <strong>mâm đồng đỏ</strong> khổng lồ.</li>

                        </ul>

                    </div>

                </details>



                <!-- Câu 4 -->

                <details class="group bg-white rounded-2xl border border-amber-100 shadow-sm transition-all hover:shadow-md overflow-hidden">

                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-amber-50/50 transition-colors">

                        <span class="font-bold text-gray-800 group-hover:text-amber-700 transition-colors text-lg md:text-3xl">

                            4. Khi phát hiện ra vầng mặt trời như chiếc mâm đồng đỏ, cảm xúc của nhân vật “tôi” như thế nào? Em suy nghĩ gì về bài hát của nhân vật “tôi”?

                        </span>

                        <div class="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">

                            <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>

                        </div>

                    </summary>

                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-amber-50 pt-4 bg-amber-50/10 font-medium space-y-2 text-lg md:text-3xl">

                        <p class="text-emerald-800 font-bold mb-1">💡 Gợi ý trả lời:</p>

                        <p>

                            - Cảm xúc của nhân vật "tôi": Rất vui sướng và hạnh phúc, trái tim vang lên một bài ca hòa điệu cùng tiếng hót véo von của đàn chim sẻ dưới bầu trời cao rộng.

                        </p>

                        <p>

                            - Suy nghĩ về bài hát: Bài hát rất ngộ nghĩnh, ngây thơ và giàu chất thơ. Tác giả đã nhân hóa và giải thích hành trình của mặt trời một cách vô cùng sinh động (Mặt trời ban đêm xuống tắm biển để làm nước suýt sôi lên, ban ngày lại trở về trời với sự đỏ chói, nóng hổi không bao giờ nguội).

                        </p>

                    </div>

                </details>



                <!-- Câu 5 -->

                <details class="group bg-white rounded-2xl border border-amber-100 shadow-sm transition-all hover:shadow-md overflow-hidden">

                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-amber-50/50 transition-colors">

                        <span class="font-bold text-gray-800 group-hover:text-amber-700 transition-colors text-lg md:text-3xl">

                            5. Khi đọc đoạn văn tả mặt trời mọc, có hai bạn nhỏ đã nêu ý kiến như dưới đây. Em thích ý kiến của bạn nào hoặc có ý kiến nào khác? Vì sao?

                        </span>

                        <div class="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">

                            <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>

                        </div>

                    </summary>

                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-amber-50 pt-4 bg-amber-50/10 font-medium space-y-4 text-lg md:text-3xl">

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div class="bg-white p-4 rounded-xl border border-amber-100">

                                <p class="font-bold text-amber-600 mb-1">🎬 Ý kiến của Ngọc Minh:</p>

                                <p class="italic text-base">"Cảnh mặt trời mọc giống như một thước phim quay chậm. Vầng mặt trời chậm rãi xuất hiện, như một nghệ sĩ muốn màn mở đầu của mình phải thật đặc biệt để mang lại cảm xúc vỡ oà cho khán giả."</p>

                            </div>

                            <div class="bg-white p-4 rounded-xl border border-amber-100">

                                <p class="font-bold text-amber-600 mb-1">🪄 Ý kiến của Việt Phương:</p>

                                <p class="italic text-base">"Cảnh mặt trời mọc giống màn ảo thuật mà khán giả hồi hộp mong chờ. Khi mặt trời xuất hiện, bí mật được khám phá, “sân khấu” bầu trời sáng bừng rạng rỡ trong niềm vui của tất cả mọi người."</p>

                            </div>

                        </div>

                        <p class="text-emerald-800 font-bold">👉 Trải nghiệm chọn lựa ý kiến của em:</p>

                        <div class="flex flex-wrap gap-2">

                            <button onclick="selectOpinion50('Ngọc Minh')" id="btn-op-nm" class="px-4 py-2 bg-amber-50 hover:bg-amber-500 border border-amber-100 rounded-xl font-bold text-base text-gray-800 transition-all">Chọn Ngọc Minh</button>

                            <button onclick="selectOpinion50('Việt Phương')" id="btn-op-vp" class="px-4 py-2 bg-amber-50 hover:bg-amber-500 border border-amber-100 rounded-xl font-bold text-base text-gray-800 transition-all">Chọn Việt Phương</button>

                            <button onclick="selectOpinion50('Ý kiến khác')" id="btn-op-khac" class="px-4 py-2 bg-amber-50 hover:bg-amber-500 border border-amber-100 rounded-xl font-bold text-base text-gray-800 transition-all">Ý kiến khác</button>

                        </div>

                        <div id="opinion-input-box" class="hidden space-y-2">

                            <textarea id="ans-vn50-opinion" rows="2" placeholder="Nhập lý do vì sao em thích ý kiến này hoặc viết ý kiến riêng của em..." class="w-full p-3 border border-amber-100 rounded-xl outline-none focus:border-amber-500 font-bold bg-white text-base text-gray-800"></textarea>

                            <button onclick="submitOpinion50()" class="px-6 py-2 bg-amber-500 text-white font-bold rounded-lg text-sm hover:bg-amber-500">Xác nhận</button>

                        </div>

                        <div id="fb-vn50-opinion" class="hidden p-3 rounded-lg text-sm font-bold text-gray-800 bg-emerald-50 border border-emerald-100"></div>

                    </div>

                </details>

            </div>

        </div>

    </section>



    <!-- THỰC HÀNH VIẾT CẢM NHẬN (AI THẦY E CHẤM) -->

    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">

        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">

            <div class="flex items-center gap-4 mb-2">

                <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">✏️</div>

                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Thực hành Viết cảm nhận</h3>

            </div>



            <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner space-y-4">

                <h4 class="text-xl md:text-2xl font-bold text-gray-800 flex items-start gap-3">

                    <span class="bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-base mt-0.5 shadow-sm">✍️</span>

                    Em hãy viết một đoạn văn ngắn (3 - 5 câu) thể hiện suy nghĩ của em về hình ảnh chiếc "mâm đồng đỏ" trong bài thơ của nhân vật "tôi". Hình ảnh này mang lại cho em những cảm nhận gì về mặt trời?

                </h4>

                <textarea id="ans-vn50-writing" rows="5" placeholder="Ví dụ: Hình ảnh chiếc mâm đồng đỏ trong bài thơ của nhân vật tôi rất ngộ nghĩnh và đầy sáng tạo. Tác giả đã tưởng tượng ra chiếc mâm khổng lồ tắm biển suốt đêm để làm nước biển sôi sùng sục. Cách nhân hóa độc đáo này giúp mặt trời trở nên vô cùng thân thuộc, đáng yêu như một người bạn hiếu động của tuổi thơ..." class="w-full p-4 md:p-6 text-xl md:text-2xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-amber-50/10 font-bold text-gray-800 leading-relaxed"></textarea>

                

                <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center">

                    <button onclick="checkWritingVn50()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">

                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 

                        <span>CHẤM BÀI TỰ LUẬN</span>

                    </button>

                    <button onclick="resetWritingVn50()" class="px-6 py-3 bg-gray-800 text-gray-900 font-black text-lg rounded-2xl shadow-sm hover:bg-gray-800 active:scale-95 transition-all">LÀM LẠI</button>

                    <div id="fb-vn50-writing" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>

                </div>

            </div>

        </div>

    </section>



    <!-- NỘP BÀI HOÀN THÀNH -->

    <div class="pt-6 flex justify-center">

        <button onclick="submitVn50Global()" class="px-12 py-5 bg-gradient-to-r from-amber-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">

            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">✓</div>

            <span>HOÀN THÀNH TIẾT HỌC</span>

        </button>

    </div>

</div>

`,

    "quizPool": [

        {

            "question": "Trong bài đọc, sương mù lúc buổi sớm được so sánh với hình ảnh nào?",

            "options": [

                "Làn khói mỏng màu xám xịt",

                "Tấm khăn voan mỏng màu sữa",

                "Một tấm thảm nhung trắng tinh",

                "Những đám mây nhỏ xốp mềm"

            ],

            "answer": 1,

            "level": 0

        },

        {

            "question": "Loài chim nào được nhắc đến đã thi nhau cất tiếng hót vào sáng sớm?",

            "options": [

                "Chim chào mào",

                "Chim vành khuyên",

                "Chim sẻ",

                "Chim chích bông"

            ],

            "answer": 2,

            "level": 0

        },

        {

            "question": "Dàn đồng ca của bầy chim sẻ có đặc điểm âm điệu như thế nào?",

            "options": [

                "Lúc trầm lúc bổng, lúc nhanh lúc chậm",

                "Vang lừng, réo rắt khắp mọi ngả",

                "Lúc to lúc nhỏ, râm ran không ngớt",

                "Thánh thót như tiếng nhạc cụ gõ"

            ],

            "answer": 0,

            "level": 1

        },

        {

            "question": "Khi mới nhô lên phía sau vòm cây xanh thẫm, mặt trời trông như thế nào?",

            "options": [

                "Nửa quả bóng màu hồng",

                "Một quả cam chín mọng",

                "Nửa vành mũ màu đỏ",

                "Một đốm lửa bập bùng"

            ],

            "answer": 2,

            "level": 1

        },

        {

            "question": "Khi đã bay lên khỏi vòm cây, vầng mặt trời được so sánh với hình ảnh gì?",

            "options": [

                "Chiếc bánh nướng vàng ruộm",

                "Chiếc mâm đồng đỏ khổng lồ",

                "Đĩa bạc lấp lánh giữa nền trời",

                "Chiếc mũ đội đầu rực rỡ"

            ],

            "answer": 1,

            "level": 1

        },

        {

            "question": "Từ ngữ nào mô tả việc mặt trời từ từ di chuyển lên bầu trời rộng lớn?",

            "options": [

                "Tỏa sáng",

                "Bay lên",

                "Chiếm lĩnh",

                "Nhích dần"

            ],

            "answer": 2,

            "level": 2

        },

        {

            "question": "Chi tiết nào cho thấy mối liên hệ sinh động giữa đàn chim sẻ và mặt trời?",

            "options": [

                "Chim sẻ hót đón chào ánh bình minh",

                "Mâm đồng đỏ nhích lên khi chim sẻ cất cao giọng",

                "Mặt trời thức giấc nhờ tiếng hát của sẻ",

                "Bầy sẻ bay lượn vòng quanh vầng mặt trời"

            ],

            "answer": 1,

            "level": 2

        },

        {

            "question": "Nhân vật tôi đoán mặt trời đã nhô lên từ đâu trước khi nhô lên khỏi vòm cây?",

            "options": [

                "Khỏi dãy núi phía xa",

                "Khỏi mặt biển",

                "Khỏi cánh đồng lúa rộng",

                "Khỏi lòng sông sâu"

            ],

            "answer": 1,

            "level": 1

        },

        {

            "question": "Trái tim nhân vật tôi có phản ứng gì khi vầng mặt trời đỏ chói bay lên?",

            "options": [

                "Cảm thấy hồi hộp lo lắng",

                "Rung động bồi hồi khó tả",

                "Vang lên bài ca hòa với bài ca của bầy sẻ",

                "Tràn đầy niềm hy vọng ngập tràn"

            ],

            "answer": 2,

            "level": 1

        },

        {

            "question": "Theo bài hát của nhân vật tôi, chiếc mâm đồng đỏ đã làm gì suốt đêm?",

            "options": [

                "Ẩn mình trong mây",

                "Tắm biển",

                "Ngủ say dưới suối",

                "Bay lượn trên trời"

            ],

            "answer": 1,

            "level": 0

        },

        {

            "question": "Bài hát ngộ nghĩnh của nhân vật tôi lý giải sự sôi động của biển thế nào?",

            "options": [

                "Do gió thổi mạnh suốt đêm",

                "Do sóng vỗ dập dồn liên tục",

                "Do mâm đồng đỏ tắm làm nước biển sôi",

                "Do thủy triều lên xuống thất thường"

            ],

            "answer": 2,

            "level": 1

        },

        {

            "question": "Đặc điểm nào của mâm đồng đỏ được nhắc đến khi trở về trời?",

            "options": [

                "Không hề nguội và chói đỏ",

                "Nhẹ nhàng như mây bay",

                "Vàng tươi tỏa tia sáng ấm",

                "Khổng lồ như một quả bóng"

            ],

            "answer": 0,

            "level": 1

        },

        {

            "question": "Bài hát của nhân vật tôi đã sử dụng biện pháp tu từ chủ yếu nào?",

            "options": [

                "So sánh và đảo ngữ",

                "Nhân hóa và so sánh",

                "Điệp ngữ và câu hỏi tu từ",

                "So sánh và phóng đại"

            ],

            "answer": 1,

            "level": 2

        },

        {

            "question": "Bài đọc 'Bài ca về mặt trời' được trích lược hoặc phỏng theo tác phẩm của ai?",

            "options": [

                "Trần Đăng Khoa",

                "Nguyễn Trọng Tạo",

                "Xuân Quỳnh",

                "Huy Cận"

            ],

            "answer": 1,

            "level": 0

        },

        {

            "question": "Nội dung chủ đạo của văn bản 'Bài ca về mặt trời' là gì?",

            "options": [

                "Miêu tả đời sống của các loài chim trong vườn nhà",

                "Ca ngợi sự giàu có của tài nguyên biển nước ta",

                "Khắc họa bức tranh bình minh rực rỡ và cảm xúc yêu thiên nhiên đầy ngộ nghĩnh",

                "Kể về thói quen dậy sớm tập thể dục của tác giả"

            ],

            "answer": 2,

            "level": 1

        }

    ]

};



// --- DỰ ĐOÁN KHỞI ĐỘNG VN50 ---

window.checkKD50 = function() {

    const text = document.getElementById('ans-vn50-kd')?.value.trim();

    const fb = document.getElementById('fb-vn50-kd');

    if (!fb) return;

    fb.classList.remove('hidden');



    if (!text) {

        fb.innerHTML = "⚠️ Em hãy chia sẻ suy nghĩ của mình trước khi gửi nhé!";

        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";

        return;

    }



    fb.innerHTML = "🎉 Cảm xúc của em thật tuyệt vời! Lòng yêu thiên nhiên và sự quan sát tinh tế chính là chìa khóa để cảm nhận vẻ đẹp của bình minh và hoàng hôn. Hãy cùng đón đọc bài viết để xem nhân vật chính có cảm nhận như thế nào nhé!";

    fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";

};



// --- LUYỆN THUỘC LÒNG BÀI THƠ ---

window.toggleMemorizeVn50 = function(mode) {

    const words = document.querySelectorAll('#poem-box-vn50 .mem-word');

    words.forEach((w, idx) => {

        // Lưu trữ từ gốc lần đầu tiên

        if (!w.hasAttribute('data-orig')) {

            w.setAttribute('data-orig', w.innerText);

            w.style.cursor = 'pointer';

            w.onclick = function() {

                w.className = 'mem-word text-amber-600 font-extrabold';

            };

        }



        const origText = w.getAttribute('data-orig');

        w.className = 'mem-word transition-all duration-350';

        w.innerText = origText;



        if (mode === 'easy') {

            if (idx % 2 === 0) {

                w.classList.add('bg-blue-600', 'text-transparent', 'select-none', 'rounded', 'px-1');

            }

        } else if (mode === 'hard') {

            w.classList.add('bg-blue-600', 'text-transparent', 'select-none', 'rounded', 'px-1');

        }

    });

};



// --- LỰA CHỌN Ý KIẾN CÂU 5 ---

let selectedOpinion = '';

window.selectOpinion50 = function(opinion) {

    selectedOpinion = opinion;

    const btnNm = document.getElementById('btn-op-nm');

    const btnVp = document.getElementById('btn-op-vp');

    const btnKhac = document.getElementById('btn-op-khac');

    const inputBox = document.getElementById('opinion-input-box');



    // Reset styles

    [btnNm, btnVp, btnKhac].forEach(b => {

        if (b) {

            b.className = "px-4 py-2 bg-amber-50 hover:bg-amber-500 border border-amber-100 rounded-xl font-bold text-base text-gray-800 transition-all";

        }

    });



    if (opinion === 'Ngọc Minh' && btnNm) {

        btnNm.className = "px-4 py-2 bg-amber-500 text-white border border-amber-100 rounded-xl font-bold text-base transition-all shadow-md";

    } else if (opinion === 'Việt Phương' && btnVp) {

        btnVp.className = "px-4 py-2 bg-amber-500 text-white border border-amber-100 rounded-xl font-bold text-base transition-all shadow-md";

    } else if (opinion === 'Ý kiến khác' && btnKhac) {

        btnKhac.className = "px-4 py-2 bg-amber-500 text-white border border-amber-100 rounded-xl font-bold text-base transition-all shadow-md";

    }



    if (inputBox) {

        inputBox.classList.remove('hidden');

        const textarea = document.getElementById('ans-vn50-opinion');

        if (textarea) {

            if (opinion === 'Ngọc Minh') {

                textarea.value = "Em thích ý kiến của bạn Ngọc Minh vì cảnh mặt trời mọc chậm rãi như một thước phim điện ảnh tạo nên sự hồi hộp, háo hức cho người xem.";

            } else if (opinion === 'Việt Phương') {

                textarea.value = "Em thích ý kiến của bạn Việt Phương vì ví cảnh bình minh giống một màn ảo thuật mang đến cảm giác bất ngờ, thú vị và thắp sáng niềm vui cho mọi người.";

            } else {

                textarea.value = "";

            }

            textarea.focus();

        }

    }

};



window.submitOpinion50 = function() {

    const text = document.getElementById('ans-vn50-opinion')?.value.trim();

    const fb = document.getElementById('fb-vn50-opinion');

    if (!fb) return;

    fb.classList.remove('hidden');



    if (!text || text.length < 10) {

        fb.innerHTML = "⚠️ Em hãy nhập lý do đầy đủ hơn để chia sẻ ý kiến của mình nhé!";

        fb.className = "p-3 rounded-lg text-sm font-bold bg-amber-500 text-white border border-amber-100";

        return;

    }



    fb.innerHTML = `🎉 Ý kiến của em về góc nhìn của ${selectedOpinion || "bản thân"} rất sâu sắc! Việc liên tưởng mặt trời mọc với nghệ thuật điện ảnh hay ảo thuật đều thể hiện sức hấp dẫn kỳ diệu của thiên nhiên đối với con người.`;

    fb.className = "p-3 rounded-lg text-sm font-bold bg-emerald-50 border border-emerald-100 text-emerald-800 shadow-sm";

};



// --- CHẤM TỰ LUẬN VIẾT CẢM NHẬN ---

window.checkWritingVn50 = function() {

    const text = document.getElementById('ans-vn50-writing')?.value.trim();

    const fb = document.getElementById('fb-vn50-writing');

    if (!fb) return;

    fb.classList.remove('hidden');



    if (!text || text.length < 15) {

        fb.innerHTML = "⚠️ Đoạn văn của em hơi ngắn. Hãy viết tối thiểu từ 3 câu thể hiện suy nghĩ của em về hình ảnh chiếc mâm đồng đỏ để AI Thầy E chấm điểm chính xác nhé!";

        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";

        return;

    }



    // Đánh giá giả lập từ AI Thầy E

    fb.innerHTML = `

        <div class="space-y-2">

            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>

            <p class="text-lg font-bold">"Cảm nhận của em rất tinh tế và sáng tạo! Em đã chỉ ra được vẻ đẹp ngộ nghĩnh của hình ảnh so sánh 'mâm đồng đỏ' gắn với truyền thuyết tắm biển, làm nổi bật lòng yêu thiên nhiên và cái nhìn hồn nhiên đầy màu sắc của trẻ thơ."</p>

            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Điểm: 150% (Hoàn thành tốt)</span>

        </div>

    `;

    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-350";

};



window.resetWritingVn50 = function() {

    const area = document.getElementById("ans-vn50-writing");

    if (area) area.value = "";

    const fb = document.getElementById("fb-vn50-writing");

    if (fb) fb.classList.add("hidden");

};



// --- HOÀN THÀNH TOÀN BỘ TIẾT HỌC ---

window.submitVn50Global = function() {

    if (typeof window.showMathFeedback === 'function') {

        window.showMathFeedback('Hoàn thành Tiết 50', '🌅', '<div class="text-center p-6"><span class="text-7xl block mb-4">🌅</span><p class="text-2xl font-bold text-amber-600">Chúc mừng em đã hoàn thành bài đọc Bài ca về mặt trời!</p><p class="text-lg text-gray-800 mt-3">Hãy luôn giữ vững trí tưởng tượng phong phú và tình yêu rực rỡ đối với thế giới tự nhiên xung quanh chúng ta nhé.</p></div>');

    }

};



