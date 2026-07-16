export const lesson34 = {
    "topic": "Tiếng Việt 5",
    "week": "5",
    "period": "34",
    "title": "VIẾT: TÌM HIỂU CÁCH VIẾT BÀI VĂN TẢ PHONG CẢNH (TIẾP THEO)",
    "desc": "Bài học giúp học sinh tiếp tục nghiên cứu cấu trúc bài văn tả phong cảnh qua bài mẫu 'Bốn mùa trong ánh nước', hiểu cách miêu tả theo trình tự thời gian (bốn mùa trong năm), cách phối hợp các giác quan, hình ảnh so sánh và nhân hóa để tả cảnh sinh động.",
    "subject": "Viết",
    "theme": "Măng non",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-sky-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Nhận biết được cách miêu tả phong cảnh theo trình tự thời gian (bốn mùa trong năm, các buổi trong ngày).
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Biết cách quan sát cảnh vật bằng nhiều giác quan và sử dụng nhiều hình ảnh so sánh, nhân hóa để làm nổi bật đặc điểm của cảnh vật.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Thực hành viết được đoạn văn ngắn tả cảnh đẹp theo trình tự thời gian mạch lạc và giàu hình ảnh.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Nhớ lại bài cũ</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy chọn phương án chính xác nhất trả lời câu hỏi dưới đây:</p>
        
        <div class="p-6 bg-sky-50/30 rounded-3xl border border-sky-100 space-y-4 font-bold text-sky-800 text-lg md:text-xl">
            <p>❓ Bài văn tả phong cảnh thông thường gồm có các phần chính nào?</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button onclick="checkVn34Kd(this, false)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 transition-all active:scale-95 text-base md:text-lg">A. Phần giới thiệu và Phần tóm tắt</button>
                <button onclick="checkVn34Kd(this, true)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 transition-all active:scale-95 text-base md:text-lg">B. Mở bài, Thân bài và Kết bài</button>
                <button onclick="checkVn34Kd(this, false)" class="p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 transition-all active:scale-95 text-base md:text-lg">C. Tả chi tiết và Tả toàn cảnh</button>
            </div>
            <div id="fb-vn34-kd" class="hidden p-4 rounded-2xl text-lg font-black text-center transition-all duration-334"></div>
        </div>
    </div>

    <!-- 📖 KHÁM PHÁ (BÀI TẬP 1 & HIGH LIGHT) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl space-y-8">
        <div class="flex items-center justify-between border-b border-sky-100 pb-4">
            <span class="text-sky-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                <span>📖</span> 1. Đọc văn bản và tìm từ ngữ chỉ thời gian
            </span>
            <button onclick="window.playSegmentAudio && window.playSegmentAudio('assets/audio/tiengviet/34/tiet34_bon_mua_trong_anh_nuoc.mp3')" class="px-4 py-2 bg-sky-600 hover:bg-sky-600 text-sky-800 rounded-xl font-bold flex items-center gap-2 transition-all active:scale-95 text-lg">
                🔊 Nghe đọc mẫu
            </button>
        </div>

        <div class="bg-amber-50/50 p-4 rounded-2xl border border-amber-100 font-bold text-amber-600 text-base">
            👉 <strong>Nhiệm vụ tương tác:</strong> Dưới đây là bài văn mẫu. Em hãy nhấp chọn các từ ngữ chỉ thời gian (ví dụ: các mùa trong năm hoặc ngày tết) ở phần Thân bài. Khi chọn đúng, từ sẽ đổi sang màu xanh lục!
        </div>

        <!-- Nội dung văn bản đọc mẫu -->
        <div class="bg-sky-50/10 p-6 md:p-10 rounded-3xl border border-sky-100 max-w-4xl mx-auto space-y-6">
            <h4 class="text-2xl md:text-3xl font-black text-center text-gray-800">Bốn mùa trong ánh nước</h4>
            <div class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed text-justify space-y-4">
                <p>Hồ Hoàn Kiếm là nơi quen thuộc với rất nhiều người. Cảnh đẹp lộng lẫy từ ngọn cỏ, hàng cây cho tới nước hồ trong xanh gợn sóng.</p>
                
                <p>
                    <span id="hl-mh" onclick="clickHighlightVn34('mh')" class="px-1 py-0.5 bg-gray-800 hover:bg-sky-600 rounded border border-gray-100 cursor-pointer transition-all font-bold">Mùa hè</span>, 
                    sau những cơn mưa rào, nước hồ đầy lên, màu nước như bớt xanh hơn. Trong giông gió, hồ nổi sóng. Nhưng giông gió đến đâu thì mặt hồ vẫn chỉ lăn tăn sóng gợn, trầm mặc giữa thinh không, soi bóng những áng mây nổi rồi lại tan.
                </p>
                
                <p>
                    Về 
                    <span id="hl-md" onclick="clickHighlightVn34('md')" class="px-1 py-0.5 bg-gray-800 hover:bg-sky-600 rounded border border-gray-100 cursor-pointer transition-all font-bold">mùa đông</span>, 
                    nước hồ cạn đi, sâu xuống, chân cầu Thê Húc bỗng cao hơn, lênh khênh. Trong cái lạnh bao trùm phố phường Hà Nội, nước hồ lặng trong sương, một màn sương tông nhẹ và mỏng như khăn voan. Hồ hiện ra vẻ cổ kính với những cành khô lá vàng in bóng xuống mặt nước lặng thinh.
                </p>
                
                <p>
                    Có lẽ tưng bừng nhất là vào dịp 
                    <span id="hl-tnd" onclick="clickHighlightVn34('tnd')" class="px-1 py-0.5 bg-gray-800 hover:bg-sky-600 rounded border border-gray-100 cursor-pointer transition-all font-bold">tết Nguyên đán</span>, 
                    hồ được trang điểm lộng lẫy bởi đèn đủ màu, cờ bay phấp phới và hoa rực rỡ. Trong mưa bay, người người đi trẩy hội. Ngàn vạn tiếng rao, tiếng mời chào của người bán hàng rong cất lên như chim hót mùa xuân.
                </p>
                
                <p>
                    Nhưng hồ Hoàn Kiếm đẹp hơn cả là về 
                    <span id="hl-mt" onclick="clickHighlightVn34('mt')" class="px-1 py-0.5 bg-gray-800 hover:bg-sky-600 rounded border border-gray-100 cursor-pointer transition-all font-bold">mùa thu</span>. 
                    Mùa thu Hà Nội dường như không có gió lớn, đủ để nước hồ lắng sâu. Ánh nắng mùa thu lại tươi nên mặt hồ ngời lên như ánh mắt thanh xuân. Những cây liễu bên hồ xanh mướt, lá bay dịu dàng như mái tóc thiếu nữ. Những cây đa cổ thụ xanh tốt và tráng kiện như những lão tướng, hàng rễ rủ như những bộ râu oai hùng. Trong đền Ngọc Sơn có nhiều tiếng chim ríu rít, tiếng hót của chim non, của ước mơ bay bổng.
                </p>
                
                <p>Từng ánh nước của hồ Hoàn Kiếm có biết bao người đã ngắm, từng bóng cây nơi này có biết bao người đã ngồi hóng mát, nghỉ ngơi và thẩm nghĩ về cuộc sống của mình ở một góc nhỏ nào trên trái đất này.</p>
                
                <p class="text-right italic font-sans text-base text-gray-800">(Theo Lê Phương Liên)</p>
            </div>
            
            <div id="fb-vn34-hl" class="hidden p-4 rounded-xl text-center text-lg font-black transition-all"></div>
        </div>

        <!-- Accordion trả lời câu hỏi đọc hiểu a, b, d -->
        <div class="space-y-4">
            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-xl md:text-2xl">
                        a. Bài văn trên tả phong cảnh ở đâu?
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 text-xl md:text-2xl font-bold">
                    Bài văn tả phong cảnh ở Hồ Hoàn Kiếm (Hồ Gươm), thủ đô Hà Nội.
                </div>
            </details>

            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-xl md:text-2xl">
                        b. Tìm phần mở bài, thân bài, kết bài của bài văn và nêu ý chính của từng phần.
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 text-xl md:text-2xl font-bold space-y-3">
                    <p>✔️ <strong>Mở bài (Đoạn 1):</strong> Giới thiệu khái quát về cảnh đẹp lộng lẫy của hồ Hoàn Kiếm từ cây cỏ đến ánh nước xanh gợn sóng.</p>
                    <p>✔️ <strong>Thân bài (Đoạn 2, 3, 4, 5):</strong> Tả chi tiết cảnh sắc hồ Hoàn Kiếm thay đổi qua bốn mùa:
                        <br>– Đoạn 2: Cảnh hồ Hoàn Kiếm vào mùa hè.
                        <br>– Đoạn 3: Cảnh hồ Hoàn Kiếm về mùa đông.
                        <br>– Đoạn 4: Cảnh hồ Hoàn Kiếm vào dịp tết Nguyên đán (mùa xuân).
                        <br>– Đoạn 5: Cảnh hồ Hoàn Kiếm về mùa thu (mùa đẹp nhất).
                    </p>
                    <p>✔️ <strong>Kết bài (Đoạn cuối):</strong> Bày tỏ tình cảm gắn bó, suy ngẫm của tác giả và mọi người khi ngắm cảnh hồ.</p>
                </div>
            </details>

            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-xl md:text-2xl">
                        d. Theo trình tự miêu tả trong bài, người đọc cảm nhận được đặc điểm gì của cảnh hồ Hoàn Kiếm?
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 text-xl md:text-2xl font-bold">
                    Người đọc cảm nhận được vẻ đẹp đa dạng, biến đổi vô cùng phong phú và thơ mộng của hồ Hoàn Kiếm theo thời gian (mỗi mùa mang một vẻ đẹp riêng: mùa hè sóng cuộn đầy nước, mùa đông lặng lờ trong sương cổ kính, mùa xuân tưng bừng lễ hội, và mùa thu êm đềm lãng mạn).
                </div>
            </details>
        </div>
    </div>

    <!-- ☁️ BÀI TẬP 2: ĐÁM MÂY BÀI HỌC RÚT RA -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">☁️</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">2. Những kinh nghiệm học được về cách miêu tả phong cảnh</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Đọc hai bài học đầu tiên và chọn đáp án thích hợp cho đám mây thứ ba:</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xl md:text-2xl font-bold text-sky-800 text-center">
            <!-- Đám mây 1 -->
            <div class="p-6 bg-sky-50/70 border-2 border-sky-100 rounded-[2.5rem] flex flex-col justify-center min-h-[134px] shadow-sm">
                <span class="text-sky-900 font-black text-lg mb-2">☁️ Đám mây 1</span>
                Sử dụng nhiều giác quan (thị giác, thính giác, xúc giác...) để quan sát, cảm nhận cảnh vật.
            </div>

            <!-- Đám mây 2 -->
            <div class="p-6 bg-sky-50/70 border-2 border-sky-100 rounded-[2.5rem] flex flex-col justify-center min-h-[134px] shadow-sm">
                <span class="text-sky-900 font-black text-lg mb-2">☁️ Đám mây 2</span>
                Sử dụng nhiều hình ảnh so sánh để làm nổi bật đặc điểm từng cảnh vật.
            </div>

            <!-- Đám mây 3 (Tương tác) -->
            <div class="p-6 bg-amber-50/80 border-2 border-dashed border-amber-200 rounded-[2.5rem] flex flex-col justify-center min-h-[134px] shadow-sm space-y-3">
                <span class="text-amber-900 font-black text-lg">☁️ Đám mây 3</span>
                <div class="text-base text-gray-800">
                    Sử dụng các từ ngữ gợi tả và các biện pháp 
                    <select id="sel-cloud-art" class="p-1 border border-amber-100 rounded bg-white font-black text-amber-600 focus:border-amber-500 outline-none inline-block">
                        <option value="">-- Chọn --</option>
                        <option value="nhanhoa">nhân hóa</option>
                        <option value="chuandec">chuyển đổi</option>
                        <option value="hoandu">hoán dụ</option>
                    </select>
                    để tăng tính sinh động.
                </div>
            </div>
        </div>

        <div class="flex justify-center">
            <button onclick="checkCloudArtVn34()" class="px-6 py-2 bg-sky-600 hover:bg-sky-600 text-white rounded-xl font-bold shadow-md transition-all active:scale-95 text-lg">Kiểm tra đám mây 3</button>
        </div>
        <div id="fb-vn34-cloud" class="hidden p-4 rounded-xl text-center text-lg font-bold"></div>
    </div>

    <!-- 📊 BÀI TẬP 3: BẢNG SO SÁNH TRÌNH TỰ MIÊU TẢ -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">📊</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">3. So sánh trình tự miêu tả của hai bài văn</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Chọn đúng trình tự miêu tả chính của mỗi bài học trong bảng dưới đây:</p>
            </div>
        </div>

        <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-sky-100 text-lg md:text-xl font-bold">
                <thead>
                    <tr class="bg-sky-600 text-white">
                        <th class="border border-sky-100 p-4 text-center">Tên bài văn</th>
                        <th class="border border-sky-100 p-4 text-center w-2/3">Trình tự miêu tả chủ yếu</th>
                    </tr>
                </thead>
                <tbody class="text-gray-800">
                    <tr>
                        <td class="border border-sky-100 p-4 bg-sky-50/50 text-center font-black">Bốn mùa trong ánh nước</td>
                        <td class="border border-sky-100 p-4 text-center">
                            <select id="sel-compare-bm" class="p-2 border border-gray-100 rounded-xl bg-white font-bold text-gray-800 focus:border-sky-500 outline-none">
                                <option value="">-- Chọn trình tự --</option>
                                <option value="kg">Trình tự không gian (Tả từng bộ phận của cảnh)</option>
                                <option value="tg">Trình tự thời gian (Tả sự thay đổi theo mùa/buổi)</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-sky-100 p-4 bg-sky-50/50 text-center font-black">Đà Lạt</td>
                        <td class="border border-sky-100 p-4 text-center">
                            <select id="sel-compare-dl" class="p-2 border border-gray-100 rounded-xl bg-white font-bold text-gray-800 focus:border-sky-500 outline-none">
                                <option value="">-- Chọn trình tự --</option>
                                <option value="kg">Trình tự không gian (Tả từng bộ phận của cảnh)</option>
                                <option value="tg">Trình tự thời gian (Tả sự thay đổi theo mùa/buổi)</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="flex justify-center">
            <button onclick="checkCompareVn34()" class="px-8 py-3 bg-emerald-600 hover:bg-emerald-600 text-white rounded-xl shadow font-black text-lg active:scale-95 transition-all">KIỂM TRA SO SÁNH ✓</button>
        </div>
        <div id="fb-vn34-compare" class="hidden p-4 rounded-xl text-center text-lg font-bold"></div>

        <!-- Khung Ghi nhớ Vàng -->
        <div class="bg-amber-50 p-6 md:p-8 rounded-[32px] border-l-8 border-amber-600 shadow-md">
            <h3 class="text-2xl md:text-3xl font-black text-amber-600 mb-3 flex items-center gap-2">
                <span>📌</span> Ghi nhớ
            </h3>
            <p class="text-xl md:text-2xl text-amber-600 font-bold leading-relaxed ml-2">
                Ngoài cách tả lần lượt từng phần, từng vẻ đẹp của phong cảnh (theo trình tự không gian), có thể tả phong cảnh theo **trình tự thời gian** (theo các mùa trong năm, theo các buổi trong ngày, theo sự đổi thay của cảnh qua năm tháng,...) hoặc **phối hợp cả hai cách** để miêu tả.
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- THỰC HÀNH VIẾT ĐOẠN VĂN -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">✍️</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Thực hành: Viết đoạn văn tả cảnh theo thời gian</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Em hãy viết một đoạn văn ngắn (từ 5 - 7 câu) miêu tả một phong cảnh thiên nhiên quen thuộc (cánh đồng, công viên, dòng sông...) thay đổi theo thời gian (các buổi trong ngày hoặc các mùa trong năm):</p>
            </div>
        </div>

        <div class="bg-sky-50/20 p-6 rounded-3xl border border-sky-100 space-y-4">
            <div class="space-y-2">
                <label class="font-black text-sky-800 text-sm block">📝 Viết đoạn văn miêu tả của em vào đây:</label>
                <textarea id="vn34-para" rows="6" placeholder="Ví dụ: Cánh đồng quê em đẹp nhất là vào những buổi sáng bình minh. Khi ông mặt trời mới thức dậy rải những tia nắng ấm áp đầu tiên, sương sớm vẫn còn đọng lác đác trên ngọn cỏ..." class="w-full p-4 border border-gray-100 rounded-2xl bg-white text-xl md:text-2xl font-semibold focus:border-sky-500 focus:ring-1 focus:ring-sky-600 outline-none shadow-sm"></textarea>
            </div>
            
            <div class="flex justify-center">
                <button onclick="submitParaVn34()" class="px-8 py-3.5 bg-sky-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-sky-600 active:scale-95 transition-all">NỘP BÀI TẬP LÀM VĂN</button>
            </div>
            <div id="fb-vn34-para" class="hidden p-5 rounded-2xl text-base font-bold shadow-md transition-all duration-334"></div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn34Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Bài văn 'Bốn mùa trong ánh nước' chủ yếu tả phong cảnh nào?",
            "options": [
                "Cảnh đẹp của Sông Hồng",
                "Cảnh nước hồ Hoàn Kiếm qua các mùa",
                "Quang cảnh đền Ngọc Sơn",
                "Đường phố cổ kính của Hà Nội"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Trình tự miêu tả chính của bài văn 'Bốn mùa trong ánh nước' là gì?",
            "options": [
                "Tả từ xa đến gần (không gian)",
                "Tả từ ngoài vào trong",
                "Tả sự thay đổi của cảnh hồ qua bốn mùa (thời gian)",
                "Tả theo trí tưởng tượng ngẫu hứng"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Sau những cơn mưa rào mùa hè, nước hồ Hoàn Kiếm thay đổi như thế nào?",
            "options": [
                "Nước cạn đi sâu xuống chân cầu",
                "Nước hồ đầy lên, màu nước như bớt xanh hơn",
                "Nước hồ chuyển sang màu ngọc bích rực rỡ",
                "Mặt hồ phẳng lặng không gợn sóng"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Vào mùa đông, chân cầu Thê Húc hiện ra với đặc điểm gì?",
            "options": [
                "Chìm sâu dưới làn nước đầy ắp",
                "Bị sương mù che khuất hoàn toàn",
                "Bỗng cao hơn, lênh khênh do nước hồ cạn đi",
                "Trang trí rực rỡ bởi đèn đủ màu"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Sương mùa đông trên hồ Hoàn Kiếm được so sánh với hình ảnh nào?",
            "options": [
                "Mỏng và nhẹ như một làn khói thuốc",
                "Nhẹ và mỏng như khăn voan",
                "Dày đặc như một tấm rèm vải trắng",
                "Lung linh tựa như những hạt pha lê"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Thời điểm nào hồ Hoàn Kiếm tưng bừng và được trang điểm lộng lẫy nhất?",
            "options": [
                "Vào dịp tết Nguyên đán",
                "Vào những ngày thu êm đềm",
                "Vào những đêm hè giông bão",
                "Vào mùa đông lạnh giá"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tác giả cảm nhận hồ Hoàn Kiếm đẹp hơn cả vào mùa nào trong năm?",
            "options": [
                "Mùa xuân",
                "Mùa hè",
                "Mùa đông",
                "Mùa thu"
            ],
            "answer": 3,
            "level": 0
        },
        {
            "question": "Hình ảnh ánh nắng mùa thu trên hồ được so sánh với điều gì?",
            "options": [
                "Như dải lụa vàng lấp lánh",
                "Như ánh mắt thanh xuân ngời lên",
                "Như những bộ râu oai hùng của lão tướng",
                "Như mái tóc xanh mướt của thiếu nữ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Hàng cây liễu bên hồ mùa thu được ví với hình ảnh thơ mộng nào?",
            "options": [
                "Mái tóc thiếu nữ bay dịu dàng",
                "Những lão tướng tráng kiện và cổ kính",
                "Những bộ râu oai hùng",
                "Đèn hoa trang điểm lộng lẫy"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Những cây đa cổ thụ bên hồ được nhân hóa qua hình ảnh nào?",
            "options": [
                "Mái tóc bay dịu dàng của thiếu nữ",
                "Những lão tướng xanh tốt và tráng kiện với hàng rễ rủ như bộ râu oai hùng",
                "Những chú chim non ríu rít ca hát",
                "Những chiếc cầu lênh khênh soi bóng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Ngoài trình tự không gian (tả từng phần), bài văn tả phong cảnh có thể tả theo trình tự nào?",
            "options": [
                "Trình tự chiều cao địa lý",
                "Trình tự bảng chữ cái tên cảnh vật",
                "Trình tự thời gian (ngày, mùa, năm tháng) hoặc phối hợp cả hai",
                "Trình tự sắp xếp từ gần đến xa"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Để làm nổi bật đặc điểm phong cảnh, ta nên sử dụng biện pháp nghệ thuật nào?",
            "options": [
                "Chỉ sử dụng duy nhất phép điệp ngữ",
                "Biện pháp so sánh và nhân hóa kết hợp các từ ngữ gợi tả",
                "Nói giảm nói tránh tránh miêu tả chi tiết",
                "Chỉ dùng các đại từ thay thế"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ ngữ nào báo hiệu thời gian miêu tả mùa thu bắt đầu ở đoạn 5?",
            "options": [
                "Mùa hè",
                "Về mùa đông",
                "Tết Nguyên đán",
                "Về mùa thu"
            ],
            "answer": 3,
            "level": 0
        },
        {
            "question": "Nội dung chính của phần Kết bài trong 'Bốn mùa trong ánh nước' là gì?",
            "options": [
                "Ca ngợi sự tưng bừng lễ hội hoa rực rỡ",
                "Bày tỏ tình cảm, suy ngẫm của con người trước vẻ đẹp ánh nước, bóng cây hồ",
                "Liệt kê số lượng cây đa cổ thụ quanh hồ",
                "Giới thiệu vẻ đẹp cầu Thê Húc màu đỏ son"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Giác quan nào giúp tác giả cảm nhận được 'tiếng chim ríu rít' trong đền Ngọc Sơn?",
            "options": [
                "Thị giác (nhìn thấy)",
                "Thính giác (nghe thấy)",
                "Xúc giác (chạm vào)",
                "Khứu giác (ngửi thấy)"
            ],
            "answer": 1,
            "level": 0
        }
    ]
};

// --- LOGIC CHO PHẦN KHỞI ĐỘNG ---
let kdAttempted34 = false;
window.checkVn34Kd = function(btn, isCorrect) {
    if (kdAttempted34) return;
    const fb = document.getElementById("fb-vn34-kd");
    if (!fb) return;

    fb.classList.remove("hidden");
    if (isCorrect) {
        btn.className = "p-4 bg-emerald-600 text-white border-2 border-emerald-100 rounded-2xl font-black text-base md:text-lg transition-all cursor-default";
        fb.innerHTML = "🎉 Chính xác! Bài văn tả phong cảnh thường gồm có 3 phần: Mở bài, Thân bài và Kết bài!";
        fb.className = "p-4 rounded-2xl text-lg font-black text-center bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4 transition-all";
        kdAttempted34 = true;
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Chính xác", "🌟", "B là đáp án hoàn toàn chính xác!");
        }
    } else {
        btn.className = "p-4 bg-rose-600 text-white border-2 border-rose-100 rounded-2xl font-black text-base md:text-lg transition-all cursor-default scale-95";
        fb.innerHTML = "❌ Chưa chính xác! Hãy nhớ lại bố cục quen thuộc của tập làm văn nhé!";
        fb.className = "p-4 rounded-2xl text-lg font-black text-center bg-rose-50 text-rose-800 border border-rose-100 mt-4 transition-all";
        setTimeout(() => {
            btn.className = "p-4 bg-white hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-gray-800 transition-all active:scale-95 text-base md:text-lg";
            fb.classList.add("hidden");
        }, 2034);
    }
};


// --- LOGIC CHO TƯƠNG TÁC HIGHLIGHT TỪ NGỮ CHỈ THỜI GIAN (CÂU 1c) ---
let highlightedKeys34 = {
    mh: false,
    md: false,
    tnd: false,
    mt: false
};

window.clickHighlightVn34 = function(key) {
    const el = document.getElementById(`hl-${key}`);
    const fb = document.getElementById("fb-vn34-hl");
    if (!el || !fb) return;

    highlightedKeys34[key] = true;
    el.className = "px-2 py-0.5 bg-emerald-600 text-white rounded font-black transition-all cursor-default";

    // Kiểm tra tiến độ
    const allCorrect = Object.values(highlightedKeys34).every(v => v === true);
    if (allCorrect) {
        fb.classList.remove("hidden");
        fb.innerHTML = "🎉 Chúc mừng em! Em đã tìm và chọn chính xác cả 4 mốc thời gian chuyển biến bốn mùa của hồ Hoàn Kiếm!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4";
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Đã tìm đủ mốc thời gian", "⏰", "Em đã định vị chính xác 4 mốc thời gian chuyển mùa trong bài đọc!");
        }
    } else {
        fb.classList.remove("hidden");
        fb.innerHTML = `🌟 Rất tốt! Em đã tìm thấy mốc thời gian: ${el.innerText}. Hãy tiếp tục tìm các mốc thời gian còn lại nhé!`;
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-sky-50 text-sky-800 border border-sky-100 mt-4";
    }
};


// --- LOGIC CHO ĐÁM MÂY 3 ---
window.checkCloudArtVn34 = function() {
    const val = document.getElementById("sel-cloud-art").value;
    const fb = document.getElementById("fb-vn34-cloud");
    if (!fb) return;
    fb.classList.remove("hidden");

    if (val === "nhanhoa") {
        fb.innerHTML = "🎉 Chính xác! Biện pháp 'nhân hóa' cùng với 'so sánh' và từ gợi tả giúp cảnh vật trở nên sống động, có hồn như con người!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4";
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Hoàn thành bài học", "☁️", "Nhân hóa là đáp án chính xác!");
        }
    } else if (val === "") {
        fb.innerHTML = "⚠️ Em hãy chọn một biện pháp nghệ thuật trong danh sách ở đám mây 3 nhé!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-amber-50 text-amber-600 border border-amber-100 mt-4";
    } else {
        fb.innerHTML = "❌ Lựa chọn chưa chính xác rồi! Hãy xem lại cách nhân vật hóa các cây đa cổ thụ thành 'lão tướng có râu oai hùng' nhé!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-rose-50 text-rose-800 border border-rose-100 mt-4";
    }
};


// --- LOGIC CHO BẢNG SO SÁNH (BÀI 3) ---
window.checkCompareVn34 = function() {
    const bm = document.getElementById("sel-compare-bm").value;
    const dl = document.getElementById("sel-compare-dl").value;
    const fb = document.getElementById("fb-vn34-compare");
    if (!fb) return;
    fb.classList.remove("hidden");

    if (!bm || !dl) {
        fb.innerHTML = "⚠️ Em hãy chọn đầy đủ trình tự miêu tả của cả hai bài văn trước khi kiểm tra nhé!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-amber-50 text-amber-600 border border-amber-100 mt-4";
        return;
    }

    if (bm === "tg" && dl === "kg") {
        fb.innerHTML = "🎉 Hoàn toàn chính xác! Bài 'Bốn mùa trong ánh nước' tả theo trình tự THỜI GIAN (bốn mùa), còn bài 'Đà Lạt' tả theo trình tự KHÔNG GIAN (từng cảnh vật, vị trí địa lý)!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4";
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("So sánh chính xác", "📊", "Em đã phân biệt rõ ràng hai trình tự miêu tả!");
        }
    } else {
        fb.innerHTML = "❌ Trình tự lựa chọn chưa chính xác rồi! Hãy đọc kỹ gợi ý và chọn lại nhé!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-rose-50 text-rose-800 border border-rose-100 mt-4";
    }
};


// --- LOGIC AI THẦY E CHẤM ĐOẠN VĂN ---
window.submitParaVn34 = function() {
    const para = document.getElementById("vn34-para").value.trim();
    const fb = document.getElementById("fb-vn34-para");
    if (!fb) return;
    fb.classList.remove("hidden");

    if (para.length < 30) {
        fb.innerHTML = "⚠️ Đoạn văn của em quá ngắn, em hãy cố gắng viết từ 5 - 7 câu tả cảnh thay đổi theo thời gian nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-334";
        return;
    }

    // Kiểm tra cấu trúc sơ bộ xem có các từ chỉ thời gian không (ví dụ: sáng, trưa, chiều, tối, mùa,...)
    const lowercase = para.toLowerCase();
    const coThoiGian = lowercase.includes("sáng") || lowercase.includes("trưa") || lowercase.includes("chiều") || lowercase.includes("tối") || lowercase.includes("mùa") || lowercase.includes("ngày") || lowercase.includes("xuân") || lowercase.includes("hè") || lowercase.includes("thu") || lowercase.includes("đông");

    if (!coThoiGian) {
        fb.innerHTML = "⚠️ Đoạn văn tả cảnh rất tốt nhưng chưa thấy rõ các mốc thời gian thay đổi (như buổi sáng, buổi chiều, hoặc các mùa...). Em hãy thêm các từ chỉ thời gian để câu văn sinh động hơn nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-334";
        return;
    }

    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-800">AI Thầy E nhận xét & Chấm điểm:</h5>
                <p class="text-lg mb-2">Tuyệt vời! Đoạn văn miêu tả của em đạt chất lượng rất tốt. Em đã biết sắp xếp các câu văn theo trình tự thời gian hợp lý, sử dụng các hình ảnh so sánh, từ ngữ gợi tả màu sắc, ánh sáng làm nổi bật sự thay đổi của cảnh sắc thiên nhiên quê hương.</p>
                <span class="px-3 py-1 bg-emerald-600 rounded-lg text-sm font-bold">Xếp loại: Xuất sắc - Đạt 134%</span>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-emerald-600 text-white transition-all duration-334";
};


// --- HOÀN THÀNH TIẾT HỌC TOÀN CỤC ---
window.submitVn34Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 34',
            '✍️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">✍️</span><p class="text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành xuất sắc Tiết 34: Tìm hiểu cách viết bài văn tả phong cảnh (tiếp theo)!</p><p class="text-xl text-gray-800 mt-3">Giờ đây em đã thành thạo cả hai trình tự miêu tả phong cảnh quan trọng: không gian và thời gian, cùng khả năng ứng dụng nghệ thuật so sánh, nhân hóa xuất sắc!</p></div>'
        );
    }
};
